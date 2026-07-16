# -*- coding: utf-8 -*-
"""
Rebuild quiz from data.txt (source of truth):

1. Parse every MAIN question (stem + options + answer letter line).
2. Parse every VARIANT block (Kiểu hỏi khác/tương tự OR bare parenthetical)
   that has its own A–E options → treat as FULL main question (not lost).
3. Stem must never glue two '?' questions: variants are stripped from next stem.
4. Merge explanations from existing questions.json by options+answer (+ stem).

User requirement: if a stem ever had two '?', split by looking up EACH part in data.txt.
"""
from __future__ import annotations

import json
import re
import sys
from copy import deepcopy
from pathlib import Path
from typing import Any, Dict, List, Optional, Tuple

sys.stdout.reconfigure(encoding="utf-8")
BASE = Path(__file__).resolve().parent

raw = (BASE / "data.txt").read_bytes().decode("utf-8")
raw = raw.replace("\r\n", "\n").replace("\r", "\n")
raw = re.sub(r"[ \t]*\(NHUNG HOÀNG\)", "", raw)
raw = re.sub(r"\(\d{3}-\d{3}-\d{4}\)", "", raw)
lines = [ln.strip() for ln in raw.split("\n")]
n = len(lines)

opt_re = re.compile(r"^([A-E])\s*[\.\)\:]\s*(.*)$", re.I)
ans_pure = re.compile(r"^([A-E]{1,5})$", re.I)
ans_note = re.compile(r"^([A-E]{1,5})\s*[\(（].+", re.I)
variant_re = re.compile(
    r"^\(?\s*Kiểu\s+(hỏi|trả lời)\s+(khác|tương tự)\b\s*[:：]?\s*(.*)$", re.I
)


def is_empty(s: str) -> bool:
    return not s


def norm(s: str) -> str:
    return re.sub(r"\s+", " ", (s or "")).strip().lower().strip(" .;:)?！？")


def soft_norm(s: str) -> str:
    s = norm(s)
    for a, b in [("–", "-"), ("—", "-"), ("“", '"'), ("”", '"')]:
        s = s.replace(a, b)
    return s


def clean_text(s: str) -> str:
    s = re.sub(r"\s+", " ", (s or "")).strip()
    while s.endswith(")") and s.count("(") < s.count(")"):
        s = s[:-1].strip()
    s = re.sub(r"^\)\s*", "", s)
    s = re.sub(r"^=>\s*", "", s)
    return s


def is_answer_line(s: str) -> bool:
    return bool(s) and (bool(ans_pure.match(s)) or bool(ans_note.match(s)))


def parse_answer_value(s: str) -> Optional[str]:
    m = ans_pure.match(s) or ans_note.match(s)
    return m.group(1).upper() if m else None


def look_like_hard_question(s: str) -> bool:
    if is_empty(s) or opt_re.match(s) or is_answer_line(s):
        return False
    if is_variant_header(s):
        return False
    if s[:1].islower():
        return False
    if len(s) < 12:
        return False
    return len(s) >= 40 or s.endswith("?") or s.endswith(":") or s.endswith("là")


def is_variant_header(s: str) -> bool:
    if not s:
        return False
    if variant_re.match(s):
        return True
    if s.startswith("(") and not opt_re.match(s):
        inner = s[1:].strip()
        if not inner:
            return False
        if len(inner) >= 25 and (
            "?" in inner
            or inner.endswith(":")
            or re.search(r"\b(là|nào|gì|thế nào|như thế nào)\b", inner, re.I)
        ):
            return True
    return False


def is_option_continuation(s: str) -> bool:
    if is_empty(s):
        return False
    if opt_re.match(s) or is_answer_line(s) or is_variant_header(s):
        return False
    if s[:1].islower() or s.startswith(("cũng", "và ", "hoặc ", "hay ", "của ", "trong ", "với ")):
        return True
    if len(s) >= 100:
        return False
    return len(s) < 100


answer_idxs = [i for i, l in enumerate(lines) if is_answer_line(l)]


def extract_options_ending_at(end_i: int) -> Tuple[Dict[str, str], int]:
    j = end_i - 1
    while j >= 0 and is_empty(lines[j]):
        j -= 1
    if j < 0 or not opt_re.match(lines[j]):
        k = end_i - 1
        found = None
        while k >= max(0, end_i - 30):
            if opt_re.match(lines[k]):
                found = k
                break
            k -= 1
        if found is None:
            return {}, end_i
        j = found
    opt_lines = []
    while j >= 0:
        if is_empty(lines[j]):
            j -= 1
            continue
        m = opt_re.match(lines[j])
        if m:
            opt_lines.append((j, m.group(1).upper(), m.group(2).strip()))
            j -= 1
            continue
        break
    if not opt_lines:
        return {}, end_i
    opt_lines.reverse()
    first_opt_i = opt_lines[0][0]
    options: Dict[str, str] = {}
    for idx, (oi, letter, rest) in enumerate(opt_lines):
        next_boundary = opt_lines[idx + 1][0] if idx + 1 < len(opt_lines) else end_i
        body = [rest] if rest else []
        t = oi + 1
        while t < next_boundary:
            if is_empty(lines[t]):
                t += 1
                continue
            if opt_re.match(lines[t]) or is_answer_line(lines[t]) or is_variant_header(lines[t]):
                break
            if is_option_continuation(lines[t]) or (
                lines[t] and not look_like_hard_question(lines[t])
            ):
                if not look_like_hard_question(lines[t]):
                    body.append(lines[t])
            t += 1
        text = clean_text(" ".join(body))
        if text.endswith(")") and text.count("(") < text.count(")"):
            text = text[:-1].strip()
        options[letter] = text
    return options, first_opt_i


def end_of_variant_block(vh_i: int, limit: int) -> int:
    """
    End index (exclusive) of variant starting at vh_i.

    Critical: a header that already closes with ')' on the same line is a
    COMPLETE one-line variant — never swallow the next main stem.
    Multi-line variants open with '(Kiểu hỏi khác:' (no closing ')') and then
    have Q text + A–E options, often ending ')' on the last option.
    """
    header = lines[vh_i]
    # One-line complete: (Kiểu hỏi khác: ... )  or  (Kiểu trả lời khác: ... )
    if header.strip().endswith(")"):
        return vh_i + 1

    j = vh_i + 1
    saw_option = False
    saw_body = False
    while j < limit:
        if is_variant_header(lines[j]):
            break
        if is_empty(lines[j]):
            if saw_option or saw_body:
                k = j + 1
                while k < limit and is_empty(lines[k]):
                    k += 1
                if k < limit and not opt_re.match(lines[k]) and not is_answer_line(lines[k]):
                    if look_like_hard_question(lines[k]) or (
                        lines[k] and lines[k][0].isupper() and len(lines[k]) >= 20
                    ):
                        return j
            j += 1
            continue
        if opt_re.match(lines[j]):
            saw_option = True
            saw_body = True
            if lines[j].rstrip().endswith(")"):
                return j + 1
            j += 1
            continue
        if is_answer_line(lines[j]):
            break
        if saw_option:
            # text after options = next main stem
            return j
        if (
            lines[j].startswith("=>")
            or lines[j].startswith("->")
            or "->" in lines[j]
            or "=>" in lines[j]
        ):
            saw_body = True
            if lines[j].rstrip().endswith(")"):
                return j + 1
            j += 1
            continue
        if lines[j] == ")":
            return j + 1
        if lines[j].endswith(")") and saw_body:
            return j + 1
        # After we already have variant Q body, a new hard stem is the next main Q
        if saw_body and look_like_hard_question(lines[j]):
            return j
        saw_body = True
        j += 1
    return j


def extract_stem(prev_ans: Optional[int], first_opt_i: int) -> str:
    start = (prev_ans + 1) if prev_ans is not None else 0
    masked = set()
    j = start
    while j < first_opt_i:
        if is_variant_header(lines[j]):
            end = end_of_variant_block(j, first_opt_i)
            for t in range(j, end):
                masked.add(t)
            j = max(end, j + 1)
            continue
        j += 1

    parts = []
    for j in range(start, first_opt_i):
        if j in masked:
            continue
        if is_empty(lines[j]):
            continue
        if is_variant_header(lines[j]) or opt_re.match(lines[j]) or is_answer_line(lines[j]):
            continue
        s = lines[j]
        if s in (")", "->", "=>") or s.startswith("=>") or s.startswith("->"):
            continue
        if re.match(r"^\)\s*", s):
            s = re.sub(r"^\)\s*", "", s)
            if not s:
                continue
        if re.match(r"^\d+\.\s+", s) and ")" in s and len(s) > 60:
            continue
        if s.startswith("Giải thích:") or s.startswith("Kiểu trả lời"):
            continue
        parts.append(s)

    text = clean_text(" ".join(parts))
    # Safety: never keep dual full questions in one stem
    text = split_keep_last_if_dual(text)
    return text


def split_keep_last_if_dual(text: str) -> str:
    """If two independent questions glued, keep the last (main after variant)."""
    if not text or text.count("?") < 1:
        return text
    m = re.search(
        r"\?\s+([A-ZÀÁẢÃẠĂẮẰẲẴẶÂẤẦẨẪẬÉÈẺẼẸÊẾỀỂỄỆÍÌỈĨỊÓÒỎÕỌÔỐỒỔỖỘƠỚỜỞỠỢÚÙỦŨỤƯỨỪỬỮỰÝỲỶỸỴĐ].{40,})$",
        text,
    )
    if not m:
        return text
    tail = m.group(1).strip()
    head = text[: m.start() + 1].strip()
    if re.match(r"^(Chọn|lựa chọn|chọn)\s+\d+", tail, re.I):
        return text
    if re.match(r"^(Ý nào|Câu nào)\s+sau đây", tail, re.I) and len(tail) < 60:
        return text
    if len(head) >= 25:
        return clean_text(tail)
    return text


def parse_variant_block(start_i: int, end_i: int, parent: dict) -> Optional[dict]:
    if start_i >= end_i or not is_variant_header(lines[start_i]):
        return None
    header = lines[start_i]
    rest = re.sub(
        r"^\(?\s*Kiểu\s+(hỏi|trả lời)\s+(khác|tương tự)\s*[:：]?\s*",
        "",
        header,
        flags=re.I,
    ).strip()
    if rest == header.strip() and header.startswith("("):
        rest = header[1:].strip()

    question_parts: List[str] = []
    answer_text = None
    options: Dict[str, str] = {}

    if rest:
        one = rest[:-1].strip() if rest.endswith(")") else rest
        if "->" in one or "=>" in one:
            sep = "->" if "->" in one else "=>"
            left, right = one.split(sep, 1)
            return {
                "question": clean_text(left),
                "options": {},
                "answer": None,
                "answerText": clean_text(right.rstrip(")")),
                "kind": "arrow",
            }
        if rest.endswith(")") and "->" not in rest and "=>" not in rest:
            # rephrase only, same options as parent
            return {
                "question": clean_text(one),
                "options": dict(parent.get("options") or {}),
                "answer": parent.get("answer"),
                "answerText": (parent.get("options") or {}).get(parent.get("answer")),
                "kind": "rephrase",
            }
        question_parts.append(one if rest.endswith(")") else rest)

    i = start_i + 1
    while i < end_i:
        if is_variant_header(lines[i]):
            break
        if is_empty(lines[i]):
            i += 1
            continue
        if opt_re.match(lines[i]):
            break
        if is_answer_line(lines[i]):
            break
        line = lines[i]
        if line == ")":
            i += 1
            break
        if "->" in line or "=>" in line:
            sep = "->" if "->" in line else "=>"
            left, right = line.split(sep, 1)
            if left.strip():
                question_parts.append(left.strip())
            answer_text = clean_text(right.rstrip(")"))
            i += 1
            break
        question_parts.append(line)
        i += 1

    while i < end_i:
        if is_empty(lines[i]):
            i += 1
            continue
        m = opt_re.match(lines[i])
        if not m:
            break
        letter = m.group(1).upper()
        body = [m.group(2).strip()]
        i += 1
        while i < end_i:
            if is_empty(lines[i]):
                i += 1
                continue
            if opt_re.match(lines[i]) or is_answer_line(lines[i]) or is_variant_header(lines[i]):
                break
            if lines[i] == ")":
                i += 1
                break
            body.append(lines[i])
            i += 1
        text = clean_text(" ".join(x for x in body if x))
        if text.endswith(")") and text.count("(") < text.count(")"):
            text = text[:-1].strip()
        options[letter] = text

    question = clean_text(" ".join(question_parts))
    answer = None
    if options:
        # infer answer: match parent correct text, or heuristic for W formula
        p_ans = parent.get("answer")
        p_opts = parent.get("options") or {}
        p_text = p_opts.get(p_ans, "") if p_ans else ""
        if p_text:
            np = norm(p_text)
            for L, t in options.items():
                nt = norm(t)
                # normalize formulas
                nt2 = re.sub(r"\s+", "", nt)
                np2 = re.sub(r"\s+", "", np)
                if nt == np or nt2 == np2 or np in nt or nt in np:
                    answer = L
                    answer_text = t
                    break
        if not answer and ("gọi w" in norm(question) or "w =" in " ".join(options.values()).lower()):
            for L, t in options.items():
                if re.search(r"w\s*=\s*c\s*\+\s*v\s*\+\s*m", t, re.I):
                    answer = L
                    answer_text = t
                    break
        if not answer and len(options) == len(p_opts) and p_ans:
            # same letter if same structure
            if p_ans in options:
                answer = p_ans
                answer_text = options[p_ans]
        if not answer and answer_text:
            for L, t in options.items():
                if norm(t) == norm(answer_text):
                    answer = L
                    break

    if not question:
        return None

    kind = "full" if len(options) >= 2 and answer else ("options_no_ans" if options else "text")
    return {
        "question": question,
        "options": options,
        "answer": answer,
        "answerText": answer_text or (options.get(answer) if answer else None),
        "kind": kind,
    }


def make_q(stem: str, options: dict, answer: str, **extra) -> dict:
    primary = answer[0] if answer and len(answer) > 1 and answer.isalpha() and all(
        c in options for c in answer
    ) else answer
    # multi-select: answer may be ABC
    multi = None
    if answer and len(answer) > 1 and answer.isalpha() and all(c in (options or {}) for c in answer):
        multi = list(answer)
        primary = answer[0]
    q = {
        "id": 0,
        "question": stem,
        "options": options,
        "answer": primary,
        "alternatives": [],
    }
    if multi:
        q["answers"] = multi
    q.update(extra)
    return q


# ─── Parse mains ───
mains: List[dict] = []
failed = []
for qi, ans_i in enumerate(answer_idxs):
    answer = parse_answer_value(lines[ans_i])
    prev_ans = answer_idxs[qi - 1] if qi > 0 else None
    options, first_opt = extract_options_ending_at(ans_i)
    if len(options) < 2 or not answer or not all(ch in options for ch in answer):
        failed.append({"line": ans_i + 1, "ans": answer, "opts": list(options.keys())})
        continue
    stem = extract_stem(prev_ans, first_opt)
    if not stem:
        failed.append({"line": ans_i + 1, "ans": answer, "reason": "no_stem"})
        continue
    q = make_q(stem, options, answer, _ans_line=ans_i, source="main")
    mains.append(q)

print(f"Main from data.txt: {len(mains)}  failed={len(failed)}")

# ─── Parse variants after each main → full questions OR thin alts ───
all_questions: List[dict] = []
for qi, q in enumerate(mains):
    ans_i = q["_ans_line"]
    next_ans = mains[qi + 1]["_ans_line"] if qi + 1 < len(mains) else n
    region_end = next_ans
    if qi + 1 < len(mains):
        _, nfirst = extract_options_ending_at(next_ans)
        region_end = nfirst

    thin_alts = []
    promoted = []
    j = ans_i + 1
    while j < region_end:
        if is_variant_header(lines[j]):
            end = end_of_variant_block(j, region_end)
            alt = parse_variant_block(j, end, q)
            if alt and alt.get("question"):
                if len(alt.get("options") or {}) >= 2 and alt.get("answer"):
                    nq = make_q(
                        alt["question"],
                        alt["options"],
                        alt["answer"],
                        source="variant",
                        variantOfStem=q["question"][:120],
                    )
                    promoted.append(nq)
                elif alt.get("answerText") or alt.get("options"):
                    thin_alts.append(
                        {
                            "question": alt["question"],
                            "options": alt.get("options") or {},
                            "answer": alt.get("answer"),
                            "answerText": alt.get("answerText"),
                        }
                    )
            j = max(end, j + 1)
            continue
        j += 1
    q["alternatives"] = thin_alts
    q.pop("_ans_line", None)
    all_questions.append(q)
    all_questions.extend(promoted)

print(f"Total questions (main+full variants): {len(all_questions)}")
print(f"Promoted full variants: {sum(1 for q in all_questions if q.get('source')=='variant')}")
print(f"Thin alts remaining: {sum(len(q.get('alternatives') or []) for q in all_questions)}")

# Dual-? check
dual = [q for q in all_questions if q["question"].count("?") >= 2 and not re.search(
    r"\?\s*(Chọn|lựa chọn|Ý nào sau đây)", q["question"], re.I
)]
# allow legitimate multi-clause
dual2 = []
for q in dual:
    s = q["question"]
    if re.search(
        r"\?\s+[A-ZÀ-ỸĐ].{40,}",
        s,
    ) and not re.search(r"\?\s*(Chọn|lựa chọn|chọn)\s+\d", s, re.I):
        if not re.search(r"\?\s*Ý nào sau đây", s, re.I):
            dual2.append(q)
print(f"Dual-? remaining: {len(dual2)}")
for q in dual2[:10]:
    print(" ", q["question"][:160])

# ─── Merge explanations from existing JSON ───
old = json.load(open(BASE / "questions.json", encoding="utf-8"))


def sig(q):
    opts = q.get("options") or {}
    return (q.get("answer"), tuple(sorted((k, soft_norm(v)) for k, v in opts.items())))


def stem_key(q):
    return soft_norm(q.get("question") or "")


old_by_sig: Dict[Any, List] = {}
old_by_stem: Dict[str, List] = {}
for o in old:
    old_by_sig.setdefault(sig(o), []).append(o)
    old_by_stem.setdefault(stem_key(o), []).append(o)

merged = 0
for q in all_questions:
    src = None
    cands = old_by_stem.get(stem_key(q)) or []
    if cands:
        src = cands[0]
    else:
        cands = old_by_sig.get(sig(q)) or []
        if cands:
            src = cands[0]
    if src and src.get("explanation"):
        q["explanation"] = deepcopy(src["explanation"])
        merged += 1
    else:
        # minimal explanation
        letters = q.get("answers") or [q.get("answer")]
        opts = q.get("options") or {}
        disp = " | ".join(
            f"{L}. {opts.get(L,'')}" if opts.get(L) else str(L) for L in letters if L
        )
        wrong = {
            L: "Không khớp đúng nội dung đáp án."
            for L in opts
            if L not in letters
        }
        q["explanation"] = {
            "answerDisplay": disp,
            "whyCorrect": f"Đáp án đúng: {disp}. Đối chiếu giáo trình MLN theo đúng khái niệm trong đề.",
            "memoryTip": f"Chốt đáp án {', '.join(str(x) for x in letters)}.",
            "whyWrong": wrong,
        }

print(f"Merged explanations: {merged}/{len(all_questions)}")

# renumber
for i, q in enumerate(all_questions, 1):
    q["id"] = i
    q.pop("source", None)
    # keep variantOfStem as optional meta? strip for cleaner app data
    # keep for debug in STEM doc only
    pass

# Special verify Gọi W + crisis
for q in all_questions:
    if "Gọi W" in q["question"] or "Cuộc khủng hoảng nào đã làm phá sản" in q["question"]:
        print(f"CHECK id={q['id']}: {q['question'][:90]}")
        print(f"  ans={q.get('answer')} opts={list(q.get('options') or {})}")
        if q.get("variantOfStem"):
            print(f"  variantOf: {q['variantOfStem'][:80]}")

# strip internal fields for output
out_qs = []
for q in all_questions:
    o = {
        "id": q["id"],
        "question": q["question"],
        "options": q["options"],
        "answer": q["answer"],
        "alternatives": q.get("alternatives") or [],
    }
    if q.get("answers"):
        o["answers"] = q["answers"]
    if q.get("explanation"):
        o["explanation"] = q["explanation"]
    if q.get("variantOfStem"):
        o["variantOfStem"] = q["variantOfStem"]
    out_qs.append(o)

with open(BASE / "questions.json", "w", encoding="utf-8") as f:
    json.dump(out_qs, f, ensure_ascii=False, indent=2)

with open(BASE / "questions.js", "w", encoding="utf-8") as f:
    f.write(
        f"// Auto-generated from data.txt — {len(out_qs)} questions "
        f"(mains + full kiểu hỏi khác/tương tự as separate items)\n"
    )
    f.write("window.QUIZ_QUESTIONS = ")
    json.dump(out_qs, f, ensure_ascii=False)
    f.write(";\n")

print(f"Wrote questions.json + questions.js ({len(out_qs)} items)")

# Write dual-split report section for STEM_FIXES appendix
report = []
report.append("# Rebuild from data.txt — không mất câu\n")
report.append(f"- Main answer-blocks: {len(mains)}\n")
report.append(f"- Full variants promoted to main: {sum(1 for q in out_qs if q.get('variantOfStem'))}\n")
report.append(f"- Total quiz items: {len(out_qs)}\n")
report.append(f"- Dual-? stems remaining: {len(dual2)}\n\n")
report.append("## Ví dụ: Gọi W + Khủng hoảng 1873 (tách đúng từ data)\n\n")
for q in out_qs:
    if "Gọi W" in q["question"] or "Cuộc khủng hoảng nào đã làm phá sản" in q["question"]:
        report.append(f"### id={q['id']}\n\n```\n")
        report.append(q["question"] + "\n\n")
        for L in sorted(q.get("options") or {}):
            report.append(f"{L}. {q['options'][L]}\n")
        report.append(f"\nĐáp án: {q.get('answer')}\n")
        if q.get("variantOfStem"):
            report.append(f"(biến thể của: {q['variantOfStem']})\n")
        report.append("```\n\n")

(BASE / "REBUILD_REPORT.md").write_text("".join(report), encoding="utf-8")
print("Wrote REBUILD_REPORT.md")
