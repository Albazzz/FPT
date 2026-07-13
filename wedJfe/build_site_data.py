# -*- coding: utf-8 -*-
"""Generate js/data-study.js and js/data-quiz.js for static GitHub Pages site."""
from __future__ import annotations

import json
import random
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent
JS = ROOT / "js"
JS.mkdir(exist_ok=True)

random.seed(42)


def js_escape_string(s: str) -> str:
    return json.dumps(s, ensure_ascii=False)


def parse_study(path: Path) -> list[dict]:
    text = path.read_text(encoding="utf-8", errors="ignore")
    lines = text.splitlines()
    sections: list[dict] = []
    cur: dict | None = None

    def flush():
        nonlocal cur
        if cur and (cur.get("paragraphs") or cur.get("bullets")):
            sections.append(cur)
        cur = None

    for raw in lines:
        line = raw.rstrip()
        s = line.strip()
        if not s or s.startswith("=" * 10) or s.startswith("#" * 5) or s.startswith("-" * 10):
            # chapter headers like ===== CHAPTER
            if s.startswith("=") and "CHAPTER" in s.upper():
                flush()
                title = re.sub(r"=+", "", s).strip()
                cur = {
                    "id": f"sec-{len(sections)+1}",
                    "title": title,
                    "level": 1,
                    "paragraphs": [],
                    "bullets": [],
                }
            elif s.startswith("#") and "VOL" in s.upper():
                flush()
                title = re.sub(r"#+", "", s).strip()
                cur = {
                    "id": f"sec-{len(sections)+1}",
                    "title": title,
                    "level": 0,
                    "paragraphs": [],
                    "bullets": [],
                }
            continue

        if s.startswith("### "):
            flush()
            title = s[4:].strip()
            cur = {
                "id": f"sec-{len(sections)+1}",
                "title": title,
                "level": 2,
                "paragraphs": [],
                "bullets": [],
            }
            continue

        if re.match(r"^\d+\.\s+", s) and len(s) < 80 and not s.startswith("-"):
            # e.g. "1. Cau hinh co ban"
            flush()
            cur = {
                "id": f"sec-{len(sections)+1}",
                "title": s,
                "level": 1,
                "paragraphs": [],
                "bullets": [],
            }
            continue

        if s.startswith("PHU LUC") or s.startswith("HET PHU"):
            flush()
            cur = {
                "id": f"sec-{len(sections)+1}",
                "title": s,
                "level": 1,
                "paragraphs": [],
                "bullets": [],
            }
            continue

        if cur is None:
            # intro lines
            if s.startswith("TOM TAT") or s.startswith("BAN NAY") or s.startswith("Moi muc") or s.startswith("Ngon ngu") or s.startswith("Vol."):
                if not sections or sections[0]["title"] != "Gioi thieu":
                    sections.insert(
                        0,
                        {
                            "id": "sec-intro",
                            "title": "Gioi thieu",
                            "level": 0,
                            "paragraphs": [],
                            "bullets": [],
                        },
                    )
                if sections[0]["title"] == "Gioi thieu":
                    sections[0]["paragraphs"].append(s)
            continue

        if s.startswith("- "):
            cur["bullets"].append(s[2:].strip())
        else:
            # skip pure separators
            if set(s) <= {"=", "-", "#"}:
                continue
            cur["paragraphs"].append(s)

    flush()
    # clean empty
    sections = [x for x in sections if x["paragraphs"] or x["bullets"]]
    for i, sec in enumerate(sections):
        sec["id"] = f"sec-{i+1}"
    return sections


def parse_300(path: Path) -> list[dict]:
    text = path.read_text(encoding="utf-8", errors="ignore")
    items = []
    blocks = re.split(r"\n(?=Cau \d+\.)", text)
    for b in blocks:
        m = re.match(
            r"Cau\s+(\d+)\.\s*(.+?)\nDap an:\s*(.+?)\n(?:\(Tu khoa tom tat:\s*(.+?)\))?",
            b.strip(),
            re.S,
        )
        if not m:
            continue
        qid, q, ans, keys = m.group(1), m.group(2).strip(), m.group(3).strip(), (m.group(4) or "").strip()
        items.append(
            {
                "id": f"q{int(qid):03d}",
                "source": "bank300",
                "question": q,
                "answer": ans,
                "keywords": [k.strip() for k in keys.split(",") if k.strip()],
                "explanation": f"Dap an: {ans}."
                + (f" On lai: {keys}." if keys else ""),
            }
        )
    return items


def parse_test_txt(path: Path) -> list[dict]:
    """Extract unique MCQs with options from test.txt where possible."""
    text = path.read_text(encoding="utf-8", errors="ignore")
    items = []
    seen = set()

    # Pattern: Câu hỏi ... : question \n Đáp án: answer (explanation)
    for m in re.finditer(
        r"Câu hỏi\s*\d*\s*:\s*(.+?)\nĐáp án:\s*(.+?)(?:\s*\((.+?)\))?(?=\n|$)",
        text,
        re.I,
    ):
        q = m.group(1).strip()
        ans = m.group(2).strip()
        expl = (m.group(3) or "").strip()
        key = q[:100].lower()
        if key in seen:
            continue
        seen.add(key)
        items.append(
            {
                "id": f"t{len(items)+1:03d}",
                "source": "test",
                "question": q,
                "answer": ans,
                "keywords": [],
                "explanation": expl or f"Dap an: {ans}.",
                "options": None,
            }
        )

    # Blocks with Các lựa chọn
    # Split by Ảnh or Câu hỏi
    parts = re.split(r"(?=Câu hỏi[^\n]*:|Câu hỏi \()", text)
    for part in parts:
        qm = re.search(
            r"(?:Câu hỏi[^\n]*:\s*|Câu hỏi \([^)]*\):\s*)(.+?)(?:\n|\*?\s*\n)",
            part,
        )
        if not qm:
            continue
        q = qm.group(1).strip().lstrip("* ").strip()
        if len(q) < 15:
            continue
        # options lines after Các lựa chọn
        opts = []
        if "Các lựa chọn" in part or "lựa chọn" in part.lower():
            after = part.split("Các lựa chọn", 1)[-1] if "Các lựa chọn" in part else part
            for line in after.splitlines()[1:]:
                line = line.strip().lstrip("* ").strip()
                if not line:
                    if opts:
                        break
                    continue
                if line.startswith("Ảnh") or line.startswith("Câu hỏi") or line.startswith("Dưới đây"):
                    break
                if line.startswith("Đáp án"):
                    break
                # skip labels like A) already included
                if re.match(r"^[a-dA-D]\)\s*", line):
                    line = re.sub(r"^[a-dA-D]\)\s*", "", line)
                if len(line) > 1 and not line.startswith("="):
                    opts.append(line)
                if len(opts) >= 6:
                    break

        key = q[:100].lower()
        if key in seen:
            # upgrade options if we have them
            if opts:
                for it in items:
                    if it["question"][:100].lower() == key and not it.get("options"):
                        it["options"] = opts[:5]
            continue
        seen.add(key)

        # try find answer in nearby "Đáp án"
        ans = ""
        am = re.search(r"Đáp án:\s*(.+?)(?:\s*\(|$)", part)
        if am:
            ans = am.group(1).strip()

        items.append(
            {
                "id": f"t{len(items)+1:03d}",
                "source": "test",
                "question": q,
                "answer": ans or (opts[0] if opts else "—"),
                "keywords": [],
                "explanation": f"Dap an: {ans}." if ans else "Xem giai thich trong ngan hang de.",
                "options": opts[:5] if len(opts) >= 2 else None,
            }
        )

    return items


DISTRACTOR_POOL = [
    "None of the above",
    "All of the above",
    "Not applicable",
    "Depends on the OS only",
    "Only hardware related",
    "Random access is never used",
    "Always O(1)",
    "Always O(n^2)",
    "It increases power consumption only",
    "It removes the need for security",
    "It is always volatile",
    "It is always non-volatile",
    "TCP only",
    "UDP only",
    "HTTP only",
    "Stack",
    "Queue",
    "Array",
    "Linked List",
    "Tree",
    "Heap",
    "Batch processing",
    "Real-time processing",
    "Centralized processing",
    "Distributed processing",
    "Compiler",
    "Interpreter",
    "Assembler",
    "Linker",
    "Loader",
    "Middleware",
    "Firmware",
    "Kernel",
    "Confidentiality",
    "Integrity",
    "Availability",
    "Authentication",
    "Symmetric only",
    "Public key only",
    "RAID 0",
    "RAID 1",
    "RAID 5",
    "OSI layer 1",
    "OSI layer 7",
    "IPv4 only",
    "IPv6 only",
    "FCFS",
    "Round Robin",
    "SJF",
    "Priority scheduling",
    "Waiting",
    "Ready",
    "Running",
    "Terminated",
    "1NF",
    "2NF",
    "3NF",
    "DROP TABLE",
    "DELETE",
    "TRUNCATE",
    "SELECT",
    "Vacuum tube",
    "Transistor",
    "IC",
    "LSI",
    "VLSI",
    "Bit",
    "Byte",
    "Word",
    "Nibble",
    "Unicode",
    "ASCII",
    "EBCDIC",
    "Quick Sort",
    "Bubble Sort",
    "Selection Sort",
    "Merge Sort",
    "Linear Search",
    "Binary Search",
    "Incident management",
    "Problem management",
    "Change management",
    "SLA",
    "ITIL",
    "COBIT",
    "CSR",
    "BCP",
    "PDCA",
]


def normalize(s: str) -> str:
    return re.sub(r"\s+", " ", s.strip().casefold())


def build_options(correct: str, all_answers: list[str], preset: list[str] | None = None) -> tuple[list[str], int]:
    if preset and len(preset) >= 2:
        # ensure correct is in options if we know it
        opts = list(dict.fromkeys(preset))  # unique preserve
        # find correct index
        cnorm = normalize(correct)
        idx = None
        for i, o in enumerate(opts):
            if normalize(o) == cnorm or cnorm in normalize(o) or normalize(o) in cnorm:
                idx = i
                break
        if idx is None and correct and correct != "—":
            # inject correct, replace last
            if len(opts) >= 4:
                opts[-1] = correct
            else:
                opts.append(correct)
            idx = len(opts) - 1
        if idx is None:
            idx = 0
        # shuffle but keep track
        order = list(range(len(opts)))
        random.shuffle(order)
        shuffled = [opts[i] for i in order]
        new_idx = order.index(idx)
        return shuffled[:5], new_idx

    # generate 3 distractors + correct
    c = correct.strip() or "None of the above"
    pool = []
    for a in all_answers:
        if normalize(a) != normalize(c) and 1 < len(a) < 120:
            pool.append(a)
    random.shuffle(pool)
    distractors = []
    for a in pool:
        if normalize(a) not in {normalize(x) for x in distractors} and normalize(a) != normalize(c):
            distractors.append(a)
        if len(distractors) >= 3:
            break
    while len(distractors) < 3:
        d = random.choice(DISTRACTOR_POOL)
        if normalize(d) != normalize(c) and d not in distractors:
            distractors.append(d)

    opts = distractors[:3] + [c]
    random.shuffle(opts)
    idx = next(i for i, o in enumerate(opts) if normalize(o) == normalize(c))
    return opts, idx


def write_js_module(path: Path, var_name: str, data) -> None:
    payload = json.dumps(data, ensure_ascii=False, indent=2)
    path.write_text(
        f"// Auto-generated — do not edit by hand\nwindow.{var_name} = {payload};\n",
        encoding="utf-8",
    )


def main():
    study = parse_study(ROOT / "TOM_TAT_ON_THI_FE_VOL1_VOL2.txt")
    bank = parse_300(ROOT / "BO_300_CAU_ON_THI.txt")
    test_items = parse_test_txt(ROOT / "test.txt")

    all_answers = [x["answer"] for x in bank if x.get("answer")]
    all_answers += [x["answer"] for x in test_items if x.get("answer")]

    quiz = []
    # Prefer test items first (closer to real exam style), then 300 bank
    combined = []
    seen_q = set()
    for it in test_items + bank:
        k = normalize(it["question"])[:120]
        if k in seen_q:
            continue
        seen_q.add(k)
        combined.append(it)

    for i, it in enumerate(combined):
        opts, idx = build_options(it["answer"], all_answers, it.get("options"))
        quiz.append(
            {
                "id": it.get("id") or f"q{i+1:03d}",
                "source": it.get("source", "bank"),
                "question": it["question"],
                "options": opts,
                "correctIndex": idx,
                "explanation": it.get("explanation")
                or f"Dap an dung: {it['answer']}.",
                "answerText": it["answer"],
                "keywords": it.get("keywords") or [],
            }
        )

    write_js_module(JS / "data-study.js", "STUDY_DATA", study)
    write_js_module(JS / "data-quiz.js", "QUIZ_DATA", quiz)

    meta = {
        "studySections": len(study),
        "quizQuestions": len(quiz),
        "fromTest": sum(1 for q in quiz if q["source"] == "test"),
        "fromBank": sum(1 for q in quiz if q["source"] != "test"),
    }
    (JS / "meta.json").write_text(json.dumps(meta, indent=2), encoding="utf-8")
    print(json.dumps(meta, indent=2))
    print(f"Wrote {JS / 'data-study.js'}")
    print(f"Wrote {JS / 'data-quiz.js'}")


if __name__ == "__main__":
    main()
