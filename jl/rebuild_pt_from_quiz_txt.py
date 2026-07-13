# -*- coding: utf-8 -*-
"""Parse quiz.txt (compact format) -> rebuild PT + PT_TR in index.html + study gap notes."""
from pathlib import Path
import re
import json

txt = Path("quiz.txt").read_text(encoding="utf-8")

# Pattern: Câu N: question [A. ... / B. *ans* / ...]
# next non-empty line is answer echo
block_re = re.compile(
    r"Câu\s*(\d+)\s*:\s*(.*?)\s*\[(.*?)\]\s*\n+([^\n]+)",
    re.S,
)

def split_choices(raw: str):
    # split on " / " between options, careful with nested
    parts = re.split(r"\s*/\s*(?=[A-D]\.)", raw.strip())
    choices = []
    answer = None
    for p in parts:
        p = p.strip()
        m = re.match(r"^([A-D])\.\s*(.*)$", p, re.S)
        if not m:
            continue
        letter, body = m.group(1), m.group(2).strip()
        # starred correct
        star = re.search(r"\*(.+?)\*", body)
        if star:
            body = star.group(1).strip()
            answer = letter
        else:
            body = body.strip()
        choices.append(f"{letter}. {body}")
    return choices, answer


def guess_m(q: str) -> int:
    if "正しくない" in q or "正しくないもの" in q:
        return 6
    if "正しいもの" in q or "正しい説明" in q or "正しいものは" in q:
        return 5
    if "ベトナム語" in q or "英語で" in q or "日本語で" in q or "読みますか" in q:
        return 4
    if "（" in q and "）" in q and ("入れ" in q or "  ）" in q or "( )" in q or "（  ）" in q or "( )" in q):
        return 1
    return 2


def simple_vi_q(q: str) -> str:
    """Lightweight VI gloss for panel."""
    # if already has Vietnamese in parens keep
    if re.search(r"[àáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ]", q):
        return q
    return f"(JP) {q}"


def simple_vi_choice(c: str) -> str:
    # keep as-is; many already JP technical; panel shows JP column
    return c


items = []
seen_ids = set()
for m in block_re.finditer(txt):
    num = int(m.group(1))
    if num in seen_ids:
        continue
    seen_ids.add(num)
    q = re.sub(r"\s+", " ", m.group(2)).strip()
    # fix common typos in source
    q = q.replace("言ơの", "次の").replace("代表y的", "代表的")
    raw_c = m.group(3)
    ans_line = m.group(4).strip()
    choices, ans = split_choices(raw_c)
    if not choices or len(choices) < 2:
        continue
    if not ans:
        # match ans_line to choice body
        for ch in choices:
            body = re.sub(r"^[A-D]\.\s*", "", ch)
            if body in ans_line or ans_line in body:
                ans = ch[0]
                break
    if not ans:
        # True/False style
        for ch in choices:
            if "*" in raw_c and ch[0] in raw_c:
                pass
        # default first if False/True
        if any("False" in ch for ch in choices) and "False" in ans_line:
            for ch in choices:
                if "False" in ch:
                    ans = ch[0]
                    break
        elif any("True" in ch for ch in choices) and "True" in ans_line:
            for ch in choices:
                if "True" in ch:
                    ans = ch[0]
                    break
    if not ans:
        ans = choices[0][0]

    # pad to 4 choices if needed
    while len(choices) < 4:
        letter = chr(ord("A") + len(choices))
        choices.append(f"{letter}. （該当なし）")

    # only A-D first 4
    choices = choices[:4]
    # ensure answer letter in choices
    if not any(ch.startswith(ans + ".") for ch in choices):
        ans = choices[0][0]

    correct_body = ""
    for ch in choices:
        if ch.startswith(ans + "."):
            correct_body = re.sub(r"^[A-D]\.\s*", "", ch)
            break

    ex = f"正解は{ans}。{correct_body}"
    if ans_line and ans_line not in correct_body:
        ex = f"正解は{ans}（{ans_line}）。"

    why = f"✓ Chọn {ans} — {correct_body}. Theo quiz.txt / giáo trình."

    items.append(
        {
            "id": num,
            "m": guess_m(q),
            "q": q,
            "c": choices,
            "a": ans,
            "ex": ex,
            "qv": simple_vi_q(q),
            "cv": [simple_vi_choice(c) for c in choices],
            "why": why,
        }
    )

items.sort(key=lambda x: x["id"])
Path("_pt_parsed.json").write_text(json.dumps(items, ensure_ascii=False, indent=2), encoding="utf-8")
print("parsed", len(items), "ids", [x["id"] for x in items[:10]], "...", [x["id"] for x in items[-5:]])

# ---------- JS inject ----------

def j(s):
    return json.dumps(s, ensure_ascii=False)

pt_lines = ["const PT = ["]
tr_lines = ["const PT_TR = ["]
for it in items:
    cjs = "[" + ",".join(j(x) for x in it["c"]) + "]"
    pt_lines.append(
        f'  {{m:{it["m"]},q:{j(it["q"])},c:{cjs},a:{j(it["a"])},ex:{j(it["ex"])}}},'
    )
    cvjs = "[" + ",".join(j(x) for x in it["cv"]) + "]"
    tr_lines.append(
        f'  {{qv:{j(it["qv"])},cv:{cvjs},why:{j(it["why"])}}},'
    )
pt_lines.append("];")
tr_lines.append("];")
pt_js = "\n".join(pt_lines) + "\n"
tr_js = "\n".join(tr_lines) + "\n"

html_path = Path("index.html")
html = html_path.read_text(encoding="utf-8")

# replace PT arrays
if "const PT =" not in html:
    raise SystemExit("PT missing - run build_pt_quiz first")
html2, n1 = re.subn(r"const PT = \[.*?\];\s*\n", pt_js + "\n", html, count=1, flags=re.S)
html2, n2 = re.subn(r"const PT_TR = \[.*?\];\s*\n", tr_js + "\n", html2, count=1, flags=re.S)
if n1 != 1 or n2 != 1:
    raise SystemExit(f"replace fail PT={n1} TR={n2}")

# update counts in PT page UI
n = len(items)
html2 = re.sub(
    r'(id="pt-page"[\s\S]*?<h2>)\d+ câu',
    rf"\g<1>{n} câu",
    html2,
    count=1,
)
html2 = re.sub(
    r'(id="pt-stat-cur">)1 / \d+',
    rf"\g<1>1 / {n}",
    html2,
    count=1,
)
html2 = re.sub(
    r'(id="pt-fscore"[^>]*>0</span><span class="score-of">) / \d+',
    rf"\g<1> / {n}",
    html2,
    count=1,
)

html_path.write_text(html2, encoding="utf-8")
print("index updated, PT=", n)

# ---------- Study gap analysis ----------
# keywords from correct answers / questions that study should cover
KEYWORDS = [
    ("差分記録", ["差分", "MPEG", "動画像情報圧縮"]),
    ("サイマル放送", ["サイマル", "ワンセグ", "放送"]),
    ("LAN", ["LAN", "WAN", "ネットワーク"]),
    ("SSL", ["SSL", "暗号化", "公開鍵"]),
    ("セッション層", ["OSI", "セッション", "7層"]),
    ("OR回路", ["OR", "論理和", "並列"]),
    ("AND回路", ["AND", "論理積", "直列"]),
    ("NOT回路", ["NOT", "否定"]),
    ("ハードディスク", ["ハードディスク", "HDD", "トラック"]),
    ("クロック", ["クロック", "GHz", "ナノ秒"]),
    ("出力装置", ["出力", "ディスプレイ", "プリンタ"]),
    ("ROM", ["ROM", "読み取り専用"]),
    ("RAM", ["RAM", "Random Access"]),
    ("キャッシュ", ["キャッシュ", "アクセス速度"]),
    ("チューリング", ["チューリング", "Turing"]),
    ("プログラムミス", ["バグ", "プログラムミス"]),
    ("マイクロプロセッサ", ["MPU", "マイクロプロセッサ", "CPU"]),
    ("公開鍵", ["公開鍵", "秘密鍵", "認証"]),
    ("ウイルス", ["ウィルス", "ウイルス", "パターンファイル"]),
    ("ダイオード", ["ダイオード", "半導体"]),
    ("DoS", ["DoS", "Denial"]),
    ("稼働率", ["稼働率", "MTBF", "MTTR"]),
    ("CALS", ["CALS"]),
    ("工業所有権", ["工業所有権", "特許", "意匠", "商標"]),
    ("踏み台", ["踏み台", "ふみだい"]),
    ("データリンク層", ["データリンク", "OSI"]),
    ("ブロードバンド", ["ブロードバンド", "ナローバンド"]),
    ("電子マネー", ["電子マネー", "クローズド", "オープンループ"]),
    ("FOMA", ["第3世代", "FOMA", "3G"]),
    ("EDI", ["EDI"]),
    ("静電容量", ["静電容量", "抵抗膜"]),
    ("PLC", ["PLC", "電灯線"]),
    ("LSI", ["LSI", "大規模集積"]),
    ("並列システム", ["並列", "直列システム"]),
    ("オペレーティングシステム", ["オペレーティング", "OS"]),
    ("周波数帯", ["周波数帯", "帯域"]),
    ("転置", ["転置", "シーザー"]),
    ("フーリエ", ["フーリエ"]),
    ("量子化", ["量子化"]),
    ("サンプリング", ["サンプリング"]),
    ("Unicode", ["Unicode"]),
    ("ASCII", ["ASCII", "文字コード"]),
    ("パリティ", ["パリティ"]),
    ("dpi", ["dpi"]),
    ("bps", ["bps"]),
    ("MPEG", ["MPEG"]),
    ("GIF", ["GIF"]),
    ("JPEG", ["JPEG"]),
    ("スター型", ["スター型", "バス型", "リング型"]),
    ("仮想記憶", ["仮想記憶"]),
    ("ピクセル", ["ピクセル", "画素"]),
    ("2の補数", ["補数", "負"]),
    ("基数", ["基数", "2進"]),
    ("プロキシ", ["プロキシ", "proxy"]),
    ("CRC", ["CRC", "誤り検出"]),
    ("変調", ["変調", "modulation"]),
    ("シェアウェア", ["シェアウェア", "フリーウェア"]),
    ("正弦波", ["正弦波", "フーリエ"]),
    ("帯域幅", ["帯域幅", "ブロードバンド"]),
]

study_blob = ""
# extract study section from index roughly
sm = re.search(r'<main class="study-content">([\s\S]*?)<section class="quiz-check-box', html2)
if sm:
    study_blob = sm.group(1)
else:
    study_blob = html2

gaps = []
covered = []
for label, kws in KEYWORDS:
    ok = any(k in study_blob for k in kws)
    if ok:
        covered.append(label)
    else:
        gaps.append((label, kws))

Path("_pt_study_gaps.txt").write_text(
    "PT questions: "
    + str(n)
    + "\nCovered keywords: "
    + str(len(covered))
    + "\nGaps: "
    + str(len(gaps))
    + "\n\n"
    + "\n".join(f"- {g[0]} (need: {', '.join(g[1])})" for g in gaps),
    encoding="utf-8",
)
print("gaps", len(gaps), "covered", len(covered))
for g in gaps:
    print(" GAP", g[0])
