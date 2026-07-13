# -*- coding: utf-8 -*-
"""Restore old PT (from build_pt_quiz.py) + merge new quiz.txt, inject index.html."""
from pathlib import Path
import re
import json

# ---- 1) Old PT from build_pt_quiz.py ----
src = Path("build_pt_quiz.py").read_text(encoding="utf-8")
start = src.find("PT = [")
end = src.find("\ndef js_escape")
if end < 0:
    end = src.find("\ndef to_js_item")
code = src[start:end].rstrip()
if not code.endswith("]"):
    code = code[: code.rfind("]") + 1]
ns = {}
exec(code, ns)
old_pt = ns["PT"]
print("old_pt", len(old_pt))

# ---- 2) New from quiz.txt ----
txt = Path("quiz.txt").read_text(encoding="utf-8")
block_re = re.compile(
    r"Câu\s*(\d+)\s*:\s*(.*?)\s*\[(.*?)\]\s*\n+([^\n]+)",
    re.S,
)

def split_choices(raw: str):
    parts = re.split(r"\s*/\s*(?=[A-D]\.)", raw.strip())
    choices, answer = [], None
    for p in parts:
        p = p.strip()
        m = re.match(r"^([A-D])\.\s*(.*)$", p, re.S)
        if not m:
            continue
        letter, body = m.group(1), m.group(2).strip()
        star = re.search(r"\*(.+?)\*", body)
        if star:
            body = star.group(1).strip()
            answer = letter
        choices.append(f"{letter}. {body}")
    return choices, answer

def guess_m(q: str) -> int:
    if "正しくない" in q:
        return 6
    if "正しいもの" in q or "正しい説明" in q or "正しいものは" in q:
        return 5
    if "ベトナム語" in q or "英語で" in q or "日本語で" in q or "読みますか" in q:
        return 4
    return 2

new_pt = []
seen_ids = set()
for m in block_re.finditer(txt):
    num = int(m.group(1))
    if num in seen_ids:
        continue
    seen_ids.add(num)
    q = re.sub(r"\s+", " ", m.group(2)).strip()
    q = q.replace("言ơの", "次の").replace("代表y的", "代表的")
    choices, ans = split_choices(m.group(3))
    ans_line = m.group(4).strip()
    if not choices:
        continue
    if not ans:
        for ch in choices:
            body = re.sub(r"^[A-D]\.\s*", "", ch)
            if body in ans_line or ans_line in body:
                ans = ch[0]
                break
    if not ans and "False" in ans_line:
        for ch in choices:
            if "False" in ch:
                ans = ch[0]
                break
    if not ans:
        ans = choices[0][0]
    while len(choices) < 4:
        choices.append(f"{chr(ord('A')+len(choices))}. （候補なし）")
    choices = choices[:4]
    correct_body = next(
        (re.sub(r"^[A-D]\.\s*", "", ch) for ch in choices if ch.startswith(ans + ".")),
        ans_line,
    )
    new_pt.append(
        {
            "m": guess_m(q),
            "q": q,
            "c": choices,
            "a": ans,
            "ex": f"正解は{ans}。{correct_body}" if correct_body else f"正解は{ans}。",
            "qv": q if re.search(r"[àáạảãăâêôơưđÀ-ỹ]", q) else f"(JP) {q}",
            "cv": choices[:],
            "why": f"✓ Chọn {ans} — {correct_body}. (quiz.txt)",
            "src": "quiz_txt",
            "id": num,
        }
    )
print("new_pt", len(new_pt))

# ---- 3) Merge: old first, then new if question not duplicate ----
def norm_q(q: str) -> str:
    q = re.sub(r"\s+", "", q)
    q = re.sub(r"[（）()「」\"'。．、,・]", "", q)
    return q

merged = []
seen_q = set()
for it in old_pt:
    nq = norm_q(it["q"])
    if nq in seen_q:
        continue
    seen_q.add(nq)
    row = dict(it)
    row["src"] = "old"
    merged.append(row)

added = 0
for it in new_pt:
    nq = norm_q(it["q"])
    if nq in seen_q:
        continue
    # also soft-match if key phrase overlap high
    seen_q.add(nq)
    merged.append(it)
    added += 1

print("merged", len(merged), "added_new_unique", added, "skipped_dup", len(new_pt) - added)
Path("_merged_pt.json").write_text(json.dumps(merged, ensure_ascii=False, indent=2), encoding="utf-8")

# ---- 4) Inject into index.html ----
def j(s):
    return json.dumps(s, ensure_ascii=False)

pt_lines = ["const PT = ["]
tr_lines = ["const PT_TR = ["]
for it in merged:
    cjs = "[" + ",".join(j(x) for x in it["c"]) + "]"
    pt_lines.append(
        f'  {{m:{it["m"]},q:{j(it["q"])},c:{cjs},a:{j(it["a"])},ex:{j(it["ex"])}}},'
    )
    cv = it.get("cv") or it["c"]
    cvjs = "[" + ",".join(j(x) for x in cv) + "]"
    tr_lines.append(
        f'  {{qv:{j(it.get("qv") or it["q"])},cv:{cvjs},why:{j(it.get("why") or it["ex"])}}},'
    )
pt_lines.append("];")
tr_lines.append("];")
pt_js = "\n".join(pt_lines) + "\n"
tr_js = "\n".join(tr_lines) + "\n"

html_path = Path("index.html")
html = html_path.read_text(encoding="utf-8")

# Ensure PT feature exists (pages/nav) - if somehow missing, user had it
if "const PT =" not in html or 'id="pt-page"' not in html:
    raise SystemExit("PT feature missing in index.html — cannot restore into missing shell")

html2, n1 = re.subn(r"const PT = \[.*?\];\s*\n", pt_js + "\n", html, count=1, flags=re.S)
html2, n2 = re.subn(r"const PT_TR = \[.*?\];\s*\n", tr_js + "\n", html2, count=1, flags=re.S)
if n1 != 1 or n2 != 1:
    raise SystemExit(f"replace fail {n1} {n2}")

n = len(merged)
# update counts in UI (multiple places)
html2 = re.sub(
    r'(id="pt-page"[\s\S]{0,800}?<h2>)\d+\s*câu',
    rf"\g<1>{n} câu",
    html2,
    count=1,
)
html2 = re.sub(r'id="pt-stat-cur">1 / \d+', f'id="pt-stat-cur">1 / {n}', html2, count=1)
html2 = re.sub(
    r'(id="pt-fscore"[^>]*>0</span><span class="score-of">) / \d+',
    rf"\g<1> / {n}",
    html2,
    count=1,
)
# quiz-check bullet
html2 = re.sub(
    r"Quiz PT:</strong> \d+ câu từ quiz\.txt[^<]*",
    f"Quiz PT:</strong> {n} câu (cũ + quiz.txt, lọc trùng)",
    html2,
    count=1,
)

html_path.write_text(html2, encoding="utf-8")
print("index PT count", n)
print("sample0", merged[0]["q"][:50])
print("done")
