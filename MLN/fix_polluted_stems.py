# -*- coding: utf-8 -*-
"""
Fix stems polluted by previous 'Kiểu hỏi khác/tương tự' blocks leaking into next Q.
Re-parse data.txt with fixed stem extraction, merge explanations from existing JSON.
"""
import re
import json
import sys
from collections import Counter
from pathlib import Path
from copy import deepcopy

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
variant_re = re.compile(r"^\(?\s*Kiểu hỏi\s+(khác|tương tự)\b\s*[:：]?\s*(.*)$", re.I)
# also catch "Kiểu trả lời khác"
variant_loose = re.compile(
    r"^\(?\s*Kiểu\s+(hỏi|trả lời)\s+(khác|tương tự)\b\s*[:：]?\s*(.*)$", re.I
)


def is_empty(s):
    return not s


def norm(s):
    return re.sub(r"\s+", " ", (s or "")).strip().lower().strip(" .;:)?！？")


def clean_text(s):
    s = re.sub(r"\s+", " ", (s or "")).strip()
    while s.endswith(")") and s.count("(") < s.count(")"):
        s = s[:-1].strip()
    # leading junk from unclosed variant tails
    s = re.sub(r"^\)\s*", "", s)
    s = re.sub(r"^=>\s*", "", s)
    return s


def is_answer_line(s):
    return bool(s) and (bool(ans_pure.match(s)) or bool(ans_note.match(s)))


def parse_answer_value(s):
    m = ans_pure.match(s) or ans_note.match(s)
    return m.group(1).upper() if m else None


def is_variant_header(s):
    if not s:
        return False
    if variant_loose.match(s) or variant_re.match(s):
        return True
    # Parenthetical alternate stem without "Kiểu hỏi" prefix, e.g.
    # (Hoạt động nào của con người...?
    # (Mô hình kinh tế ... Đại hội nào ...
    if s.startswith("(") and not opt_re.match(s):
        inner = s[1:].strip()
        if not inner or inner.startswith("NHUNG") or re.match(r"^\d{3}-", inner):
            return False
        if look_like_hard_question(inner) or (
            len(inner) >= 25
            and (
                "?" in inner
                or inner.endswith(":")
                or re.search(r"\b(là|nào|gì|thế nào|như thế nào)\b", inner, re.I)
            )
        ):
            return True
    return False


def is_option_continuation(s):
    if is_empty(s):
        return False
    if opt_re.match(s) or is_answer_line(s) or is_variant_header(s):
        return False
    if s[:1].islower() or s.startswith(("cũng", "và ", "hoặc ", "hay ", "của ", "trong ", "với ")):
        return True
    if len(s) >= 8 and not opt_re.match(s):
        if len(s) >= 100:
            return False
    return len(s) < 100


def look_like_hard_question(s):
    if is_empty(s) or opt_re.match(s) or is_answer_line(s) or is_variant_header(s):
        return False
    if s[:1].islower():
        return False
    if len(s) < 12:
        return False
    return len(s) >= 40 or s.endswith("?") or s.endswith(":") or s.endswith("là")


answer_idxs = [i for i, l in enumerate(lines) if is_answer_line(l)]


def extract_options_ending_at(end_i):
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
    options = {}
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
            if is_option_continuation(lines[t]) or (lines[t] and not look_like_hard_question(lines[t])):
                if not look_like_hard_question(lines[t]):
                    body.append(lines[t])
            t += 1
        # strip trailing ) that closes variant block on last option
        text = clean_text(" ".join(body))
        if text.endswith(")") and text.count("(") < text.count(")"):
            text = text[:-1].strip()
        options[letter] = text
    return options, first_opt_i


def end_of_variant_block(vh_i, limit):
    """
    Return index AFTER the last line belonging to variant starting at vh_i.
    Variants may be:
      - one line: (Kiểu hỏi khác: ... -> ans)  or  (Kiểu hỏi khác: rephrase)
      - multi-line: header, optional Q text, A..D options, last option ends with )
      - multi-line without closing ): options then blank then next main stem
    """
    header = lines[vh_i]
    # count parens on header
    rest_m = variant_loose.match(header) or variant_re.match(header)
    rest = (rest_m.group(3) if rest_m and rest_m.lastindex and rest_m.lastindex >= 3 else "") or ""
    if not rest and rest_m:
        # group 2 may be type only; try full
        rest = rest_m.group(0)
        # strip prefix
        rest = re.sub(r"^\(?\s*Kiểu\s+(hỏi|trả lời)\s+(khác|tương tự)\s*[:：]?\s*", "", rest, flags=re.I)

    # Single-line closed variant
    if header.strip().endswith(")") and ("->" in header or len(header) > 40):
        return vh_i + 1
    if rest.strip().endswith(")") and vh_i + 1 < limit and not opt_re.match(lines[vh_i + 1] if vh_i + 1 < n else ""):
        # check if next lines are options of THIS variant
        j = vh_i + 1
        while j < limit and is_empty(lines[j]):
            j += 1
        if j >= limit or not opt_re.match(lines[j]):
            return vh_i + 1

    j = vh_i + 1
    saw_option = False
    saw_body = False  # any non-empty content after header
    while j < limit:
        if is_variant_header(lines[j]):
            break
        if is_empty(lines[j]):
            # if already saw options/body and blank gap, maybe end
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
        # text line
        if saw_option:
            return j
        # answer-only variant: "=> text)" or "-> text)"
        if lines[j].startswith("=>") or lines[j].startswith("->") or "->" in lines[j] or "=>" in lines[j]:
            saw_body = True
            if lines[j].rstrip().endswith(")"):
                return j + 1
            j += 1
            continue
        if lines[j] == ")":
            return j + 1
        if lines[j].endswith(")") and saw_body:
            return j + 1
        # if we already had body (Q text) and this looks like a NEW main stem
        # (long question without being option), stop BEFORE it
        if saw_body and look_like_hard_question(lines[j]):
            return j
        saw_body = True
        j += 1
    return j


def extract_stem(prev_ans, first_opt_i):
    """Stem lines between prev answer and first option, excluding ALL variant blocks."""
    start = (prev_ans + 1) if prev_ans is not None else 0
    # mask out variant ranges
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
        if is_variant_header(lines[j]):
            continue
        if opt_re.match(lines[j]):
            continue
        if is_answer_line(lines[j]):
            continue
        # skip pure closing paren / arrow leftover
        s = lines[j]
        if s in (")", "->", "=>"):
            continue
        # strip leading junk fragments like "=>tư bản..." or ") Hãy chọn"
        if s.startswith("=>") or s.startswith("->"):
            continue
        if re.match(r"^\)\s*", s):
            s = re.sub(r"^\)\s*", "", s)
            if not s:
                continue
        # skip lines that are clearly variant residue: "1. ... 2. ... )"
        if re.match(r"^\d+\.\s+", s) and ")" in s and len(s) > 60:
            continue
        if s.startswith("Giải thích:") or s.startswith("Kiểu trả lời"):
            continue
        parts.append(s)

    text = clean_text(" ".join(parts))
    # if still contains two questions (polluted), take the LAST question-like segment
    text = strip_leading_pollution(text)
    return text


def strip_leading_pollution(text):
    """If stem still has previous Q glued, keep the true (usually last) stem."""
    if not text:
        return text

    # pattern: "... ) Actual question"  (closing junk from previous variant)
    m2 = re.search(
        r"\)\s+([A-ZÀÁẢÃẠĂẮẰẲẴẶÂẤẦẨẪẬÉÈẺẼẸÊẾỀỂỄỆÍÌỈĨỊÓÒỎÕỌÔỐỒỔỖỘƠỚỜỞỠỢÚÙỦŨỤƯỨỪỬỮỰÝỲỶỸỴĐ].{15,})$",
        text,
    )
    if m2:
        return clean_text(m2.group(1))

    # arrow junk: "Q? -> ans) Real Q"
    if "->" in text or "=>" in text:
        m3 = re.search(
            r"(?:->|=>)[^)]*\)\s*([A-ZÀÁẢÃẠĂẮẰẲẴẶÂẤẦẨẪẬÉÈẺẼẸÊẾỀỂỄỆÍÌỈĨỊÓÒỎÕỌÔỐỒỔỖỘƠỚỜỞỠỢÚÙỦŨỤƯỨỪỬỮỰÝỲỶỸỴĐ].+)$",
            text,
        )
        if m3:
            return clean_text(m3.group(1))

    # pattern: "FullQ1? FullQ2..." — only strip when BOTH look like independent stems.
    # Keep multi-clause single questions e.g.
    # "Quy luật chung ... là gì? Ý nào sau đây không đúng."
    m = re.search(
        r"\?\s+([A-ZÀÁẢÃẠĂẮẰẲẴẶÂẤẦẨẪẬÉÈẺẼẸÊẾỀỂỄỆÍÌỈĨỊÓÒỎÕỌÔỐỒỔỖỘƠỚỜỞỠỢÚÙỦŨỤƯỨỪỬỮỰÝỲỶỸỴĐ].+)$",
        text,
    )
    if m:
        tail = m.group(1).strip()
        head = text[: m.start() + 1].strip()
        if re.match(r"^(Chọn|lựa chọn|chọn)\s+\d+", tail, re.I):
            return text
        # short follow-ups are part of the same item, not a second question
        if len(tail) < 40:
            return text
        if re.match(r"^(Ý nào|Câu nào|Phương án nào|Đáp án nào)\s+sau đây", tail, re.I) and len(tail) < 60:
            return text
        # both sides substantial independent questions
        if len(head) >= 25 and len(tail) >= 40:
            return clean_text(tail)

    return text


def infer_alt(question, options, parent):
    ql = (question or "").lower()
    if options and parent:
        p_ans = parent.get("answer")
        p_opts = parent.get("options") or {}
        p_text = p_opts.get(p_ans, "")
        if p_text:
            np = norm(p_text)
            for L, t in options.items():
                if norm(t) == np or np in norm(t) or norm(t) in np:
                    return L, t, "parent_text_match"
        if p_opts and set(norm(t) for t in options.values()) == set(norm(t) for t in p_opts.values()):
            inv = {norm(t): L for L, t in options.items()}
            if p_ans in p_opts and norm(p_opts[p_ans]) in inv:
                L = inv[norm(p_opts[p_ans])]
                return L, options[L], "same_options"
    rules = [
        (
            lambda q: "giai đoạn phát triển đó là" in q or ("các giai đoạn" in q and "đó là" in q),
            lambda t: "đại công nghiệp" in t.lower() and "công trường" in t.lower(),
        ),
        (
            lambda q: "cách mạng công nghiệp lần thứ hai" in q and "thời gian" in q,
            lambda t: "xix" in norm(t) and "xx" in norm(t),
        ),
        (
            lambda q: "không đúng" in q and ("nguồn" in q or "vốn" in q),
            lambda t: "vay" in t.lower(),
        ),
        (
            lambda q: "giá trị thặng dư tuyệt đối" in q and "không đúng" in q,
            lambda t: "ngày lao động" in t.lower() and "không thay đổi" in t.lower(),
        ),
        (
            lambda q: "tích lũy tư bản là gì" in q,
            lambda t: "tư bản hóa giá trị thặng dư" in t.lower(),
        ),
        (
            lambda q: "cách mạng công nghiệp lần thứ ba" in q,
            lambda t: "60" in t or "thế kỷ xx" in t.lower(),
        ),
        (
            lambda q: "montchrestien" in " ".join(options.values()).lower()
            or ("ai là người" in q and "kinh tế" in q),
            lambda t: "montchrestien" in t.lower() or "antoine" in t.lower(),
        ),
    ]
    for qpred, tpred in rules:
        try:
            if qpred(ql):
                for L, t in options.items():
                    if tpred(t):
                        return L, t, "heuristic"
        except Exception:
            pass
    if "kinh tế chính trị cổ điển anh" in ql:
        for L, t in options.items():
            if "petty" in t.lower() or "adam smith" in t.lower():
                return L, t, "heuristic"
    # W formula
    if "gọi w" in ql or ("công thức" in ql and "w" in ql.lower()):
        for L, t in options.items():
            if re.search(r"w\s*=\s*c\s*\+\s*v\s*\+\s*m", t, re.I):
                return L, t, "heuristic"
    return None, None, None


def parse_alt_block(start_i, end_i, parent):
    if start_i >= end_i or not is_variant_header(lines[start_i]):
        return None
    # extract rest after header keyword, or bare parenthetical stem
    header = lines[start_i]
    rest = re.sub(
        r"^\(?\s*Kiểu\s+(hỏi|trả lời)\s+(khác|tương tự)\s*[:：]?\s*",
        "",
        header,
        flags=re.I,
    ).strip()
    if rest == header.strip() and header.startswith("("):
        # bare "(Question..." form — drop opening paren only
        rest = header[1:].strip()

    question_parts = []
    answer_text = None
    options = {}

    if rest:
        one = rest[:-1].strip() if rest.endswith(")") else rest
        if "->" in one:
            left, right = one.split("->", 1)
            return {
                "question": clean_text(left),
                "options": {},
                "answer": None,
                "answerText": clean_text(right.rstrip(")")),
                "inferredFrom": "arrow_text",
            }
        if rest.endswith(")") and "->" not in rest:
            ans = parent.get("answer") if parent else None
            opts = dict(parent.get("options") or {}) if parent else {}
            return {
                "question": clean_text(one),
                "options": opts,
                "answer": ans,
                "answerText": opts.get(ans) if ans else None,
                "inferredFrom": "parent_rephrase",
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
        if "->" in line:
            left, right = line.split("->", 1)
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
        mopt = opt_re.match(lines[i])
        if not mopt:
            break
        letter = mopt.group(1).upper()
        body = [mopt.group(2).strip()]
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
    inferred = None
    if answer_text and not options:
        inferred = "arrow_text"
    elif options:
        a, t, inf = infer_alt(question, options, parent)
        if a:
            answer, answer_text, inferred = a, t, inf
    elif parent:
        answer = parent.get("answer")
        options = dict(parent.get("options") or {})
        answer_text = options.get(answer)
        inferred = "parent_rephrase"

    if answer and not answer_text and options:
        answer_text = options.get(answer)

    return {
        "question": question or "(Biến thể)",
        "options": options,
        "answer": answer,
        "answerText": answer_text,
        "inferredFrom": inferred,
    }


# ─── Build main questions ───
questions = []
failed = []

for qi, ans_i in enumerate(answer_idxs):
    answer = parse_answer_value(lines[ans_i])
    prev_ans = answer_idxs[qi - 1] if qi > 0 else None
    options, first_opt_i = extract_options_ending_at(ans_i)
    if len(options) < 2 or not answer or not all(ch in options for ch in answer):
        failed.append({"at": ans_i, "ans": answer, "opts": list(options.keys()), "line": lines[ans_i]})
        continue

    question_text = extract_stem(prev_ans, first_opt_i)
    if not question_text:
        failed.append({"at": ans_i, "ans": answer, "opts": list(options.keys()), "reason": "no_stem"})
        continue

    primary = answer[0]
    q = {
        "id": 0,
        "question": question_text,
        "options": options,
        "answer": primary,
        "alternatives": [],
        "_ans_line": ans_i,
    }
    if len(answer) > 1:
        q["answers"] = list(answer)
    questions.append(q)

# Attach variants
for qi, q in enumerate(questions):
    ans_i = q["_ans_line"]
    next_ans = questions[qi + 1]["_ans_line"] if qi + 1 < len(questions) else n
    j = ans_i + 1
    region_end = next_ans
    while j < region_end:
        if is_variant_header(lines[j]):
            end = end_of_variant_block(j, region_end)
            # also don't include next main stem
            if qi + 1 < len(questions):
                nopts, nfirst = extract_options_ending_at(next_ans)
                end = min(end, nfirst)
            alt = parse_alt_block(j, end, q)
            if alt and alt.get("question"):
                q["alternatives"].append(alt)
            j = max(end, j + 1)
            continue
        j += 1

for q in questions:
    q.pop("_ans_line", None)

for idx, q in enumerate(questions, 1):
    q["id"] = idx

print(f"Parsed: {len(questions)}  failed={len(failed)}")
if failed:
    print("Failures sample:", failed[:5])

# ─── Merge explanations from old JSON (by id order — same 526) ───
old = json.load(open(BASE / "questions.json", encoding="utf-8"))
print(f"Old JSON: {len(old)}")

# Map old explanations: prefer match by options+answer, fallback id
def sig(q):
    opts = q.get("options") or {}
    return (q.get("answer"), tuple(sorted((k, norm(v)) for k, v in opts.items())))


old_by_sig = {}
for o in old:
    old_by_sig.setdefault(sig(o), []).append(o)

merged_exp = 0
stem_changes = []
for i, q in enumerate(questions):
    o = old[i] if i < len(old) else None
    # prefer same-index if options match
    if o and sig(o) == sig(q):
        src = o
    else:
        cands = old_by_sig.get(sig(q), [])
        src = cands[0] if cands else o

    if src:
        if src.get("explanation"):
            q["explanation"] = deepcopy(src["explanation"])
            merged_exp += 1
        # merge alt explanations by alt question norm
        if src.get("alternatives") and q.get("alternatives"):
            old_alt_list = src["alternatives"]
            for ai, alt in enumerate(q["alternatives"]):
                matched = None
                for oa in old_alt_list:
                    if norm(oa.get("question") or "") == norm(alt.get("question") or ""):
                        matched = oa
                        break
                if not matched and ai < len(old_alt_list):
                    matched = old_alt_list[ai]
                if matched and matched.get("explanation"):
                    alt["explanation"] = deepcopy(matched["explanation"])

    if o and q["question"] != o.get("question"):
        stem_changes.append((q["id"], o.get("question", ""), q["question"]))

print(f"Merged explanations: {merged_exp}")
print(f"Stem changes vs old: {len(stem_changes)}")
for id_, old_s, new_s in stem_changes:
    print("-" * 60)
    print(f"id={id_}")
    print(f"  OLD: {old_s[:200]}")
    print(f"  NEW: {new_s[:200]}")

# Final pollution check
still = []
for q in questions:
    s = q["question"]
    bad = False
    if s.count("?") >= 2 and not re.search(r"\?\s*(Chọn|lựa chọn|chọn)\s+\d", s, re.I):
        # allow "gì? Chọn 2 đáp án"
        if re.search(r"\?\s+[A-ZÀ-ỸĐ].{30,}", s):
            bad = True
    if "->" in s:
        bad = True
    if re.search(r"\)\s+[A-ZÀ-ỸĐ].{20,}", s):
        bad = True
    if s.startswith("=>") or "Kiểu trả lời" in s or s.startswith("Giải thích:"):
        bad = True
    if bad:
        still.append((q["id"], s))

print(f"\nStill suspicious: {len(still)}")
for id_, s in still:
    print(f"  id={id_}: {s[:180]}")

# Write
with open(BASE / "questions.json", "w", encoding="utf-8") as f:
    json.dump(questions, f, ensure_ascii=False, indent=2)

with open(BASE / "questions.js", "w", encoding="utf-8") as f:
    f.write("// Auto-generated — main questions; kiểu hỏi khác only as alternatives\n")
    f.write("window.QUIZ_QUESTIONS = ")
    json.dump(questions, f, ensure_ascii=False)
    f.write(";\n")

print("\nWrote questions.json + questions.js")
print("with alternatives:", sum(1 for q in questions if q.get("alternatives")))
print("option counts:", dict(Counter(len(q["options"]) for q in questions)))
