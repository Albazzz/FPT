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


def load_vi_translations() -> dict[str, dict]:
    """Load optional Vietnamese stems/options from vi_translations.json."""
    path = ROOT / "vi_translations.json"
    if not path.exists():
        return {}
    data = json.loads(path.read_text(encoding="utf-8"))
    if not isinstance(data, dict):
        raise SystemExit("vi_translations.json must be an object keyed by id")
    return data


def apply_vi_translations(questions: list[dict], vi: dict[str, dict]) -> None:
    """Attach questionVi / optionsVi at top-level and under explanation."""
    missing_q: list[str] = []
    missing_opt: list[str] = []
    for q in questions:
        sid = str(q["id"])
        tr = vi.get(sid) or {}
        question_vi = (tr.get("questionVi") or "").strip()
        options_vi = tr.get("optionsVi") or {}
        if not isinstance(options_vi, dict):
            options_vi = {}

        # Ensure every option letter has a Vietnamese entry (fallback to English)
        filled: dict[str, str] = {}
        for letter, en in (q.get("options") or {}).items():
            val = options_vi.get(letter)
            if val is None or not str(val).strip():
                filled[letter] = en
                missing_opt.append(f"{sid}:{letter}")
            else:
                filled[letter] = str(val)

        if not question_vi:
            missing_q.append(sid)

        if question_vi:
            q["questionVi"] = question_vi
        if filled:
            q["optionsVi"] = filled

        exp = q.setdefault("explanation", {})
        if question_vi:
            exp["questionVi"] = question_vi
        if filled:
            exp["optionsVi"] = filled

    print(
        "vi translations:",
        "loaded",
        len(vi),
        "applied",
        sum(1 for q in questions if q.get("questionVi")),
        "missing_questionVi",
        len(missing_q),
        "missing_optionsVi",
        len(missing_opt),
    )
    if missing_q:
        print("  missing questionVi ids:", missing_q[:20], "..." if len(missing_q) > 20 else "")
    if missing_opt:
        print("  missing optionsVi:", missing_opt[:20], "..." if len(missing_opt) > 20 else "")


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

    vi = load_vi_translations()
    if vi:
        apply_vi_translations(all_q, vi)
    else:
        print("vi_translations.json not found — skipping Vietnamese fields")

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
