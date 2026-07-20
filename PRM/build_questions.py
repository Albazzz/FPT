#!/usr/bin/env python3
"""Parse PRM markdown answer keys into questions.js for the quiz app."""
from __future__ import annotations

import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent

SOURCES = [
    {
        "file": ROOT / "PRM392_SP26_FE_DAP_AN.md",
        "exam": "fe",
        "examLabel": "FE",
        "idBase": 0,
        "title": "PRM392 SP26 FE",
    },
    {
        "file": ROOT / "PRM392_SP26_FE_RE_DAP_AN.md",
        "exam": "re",
        "examLabel": "FE-RE",
        "idBase": 100,
        "title": "PRM392 SP26 FE-RE",
    },
]

OPT_RE = re.compile(r"^- \*\*([A-F])\.\*\*\s*(.*?)\s*(?:✅)?\s*$", re.M)
HEADER_RE = re.compile(r"^## Câu (\d+)\s*\(Chọn\s*(\d+)\)\s*$", re.M)


def clean_opt(text: str) -> str:
    return re.sub(r"\s*✅\s*$", "", text.strip()).strip()


def parse_file(cfg: dict) -> list[dict]:
    text = cfg["file"].read_text(encoding="utf-8")
    parts = re.split(r"(?=^## Câu \d+)", text, flags=re.M)
    questions: list[dict] = []

    for part in parts:
        m = HEADER_RE.search(part)
        if not m:
            continue
        num = int(m.group(1))
        choose_n = int(m.group(2))
        after = part[m.end() :]
        lines = after.splitlines()

        stem_lines: list[str] = []
        i = 0
        while i < len(lines):
            line = lines[i]
            if re.match(r"^- \*\*[A-F]\.\*\*", line):
                break
            if line.strip() == "---":
                break
            if line.strip().startswith("**Đáp án"):
                break
            stem_lines.append(line)
            i += 1
        question = "\n".join(stem_lines).strip()

        opt_block_lines: list[str] = []
        while i < len(lines):
            line = lines[i]
            if line.strip().startswith("**Đáp án"):
                break
            if line.strip() == "---":
                break
            opt_block_lines.append(line)
            i += 1
        opt_block = "\n".join(opt_block_lines)
        options: dict[str, str] = {}
        for om in OPT_RE.finditer(opt_block):
            options[om.group(1)] = clean_opt(om.group(2))
        if not options:
            for om in re.finditer(r"^- \*\*([A-F])\.\*\*\s*(.+)$", opt_block, re.M):
                options[om.group(1)] = clean_opt(om.group(2))

        rest = "\n".join(lines[i:])
        am = re.search(r"\*\*Đáp án:\s*([^*]+)\*\*", rest)
        if not am:
            raise SystemExit(f"No answer for {cfg['exam']} Q{num}")
        ans_raw = am.group(1).strip()
        answers = [x.strip() for x in re.split(r"[,;/\s]+", ans_raw) if x.strip()]
        answers = [a for a in answers if re.fullmatch(r"[A-F]", a)]
        if not answers:
            raise SystemExit(f"Bad answers {ans_raw!r} for {cfg['exam']} Q{num}")

        gm = re.search(r"\*\*Giải thích:\*\*\s*(.+?)(?=\n---|\Z)", rest, re.S)
        explain = (gm.group(1).strip() if gm else "").strip()

        qid = cfg["idBase"] + num
        ans_display = " | ".join(
            f"{L}. {options[L]}" if options.get(L) else L for L in answers
        )

        item = {
            "id": qid,
            "num": num,
            "exam": cfg["exam"],
            "examLabel": cfg["examLabel"],
            "question": question,
            "options": options,
            "answer": answers[0],
            "answers": answers,
            "alternatives": [],
            "explanation": {
                "answerDisplay": ans_display,
                "whyCorrect": explain,
                "memoryTip": "",
                "whyWrong": {},
            },
        }
        if choose_n > 1 and len(answers) < 2:
            print("WARN multi but one answer", cfg["exam"], num, answers)
        if len(options) < 2:
            print("WARN few options", cfg["exam"], num, options)
        for a in answers:
            if a not in options:
                print("MISSING OPT", cfg["exam"], num, a)
        questions.append(item)

    return questions


def main() -> None:
    all_q: list[dict] = []
    meta_exams: dict = {}
    for cfg in SOURCES:
        qs = parse_file(cfg)
        print(
            cfg["exam"],
            len(qs),
            "ids",
            qs[0]["id"],
            "-",
            qs[-1]["id"],
            "multi",
            sum(1 for q in qs if len(q["answers"]) > 1),
        )
        all_q.extend(qs)
        meta_exams[cfg["exam"]] = {
            "label": cfg["examLabel"],
            "title": cfg["title"],
            "count": len(qs),
        }

    meta = {
        "subject": "PRM392",
        "exams": meta_exams,
        "total": len(all_q),
    }
    out_js = ROOT / "questions.js"
    js = (
        "/* Auto-generated from PRM markdown — do not edit by hand */\n"
        f"window.QUIZ_META = {json.dumps(meta, ensure_ascii=False, indent=2)};\n"
        f"window.QUIZ_QUESTIONS = {json.dumps(all_q, ensure_ascii=False)};\n"
    )
    out_js.write_text(js, encoding="utf-8")
    print("wrote", out_js, "bytes", out_js.stat().st_size, "total", len(all_q))


if __name__ == "__main__":
    main()
