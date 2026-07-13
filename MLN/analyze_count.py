# -*- coding: utf-8 -*-
import re
import json

raw = open("data_extracted.txt", encoding="utf-8").read().replace("\r\n", "\n")
raw = re.sub(r"[ \t]*\(NHUNG HOÀNG\)", "", raw)
lines = [ln.strip() for ln in raw.split("\n")]
n = len(lines)

opt = re.compile(r"^([A-E])\s*[\.\)\:]", re.I)
ans = re.compile(r"^([A-E]{1,5})(\s*[\(（].*)?$", re.I)
kieu = re.compile(r"^\(?\s*Kiểu hỏi", re.I)

ans_lines = [(i, l) for i, l in enumerate(lines) if ans.match(l)]
out = [f"answer_lines={len(ans_lines)}"]

# For each answer, check if preceded by kieu header more recently than a non-kieu question start
# Simpler: count answers whose preceding option block is NOT under a kieu header

def find_block_start(ans_i):
    """Walk back from answer to first option A, then back to question text."""
    i = ans_i - 1
    while i >= 0 and not opt.match(lines[i]) and not ans.match(lines[i]):
        i -= 1
    # now at last option or earlier answer
    # walk back through options
    while i >= 0:
        if opt.match(lines[i]):
            i -= 1
            continue
        if not lines[i]:
            i -= 1
            continue
        break
    # i is first non-empty non-option before options = question or kieu
    while i >= 0 and not lines[i]:
        i -= 1
    return i

main_ans = 0
kieu_ans = 0
for ai, al in ans_lines:
    si = find_block_start(ai)
    head = lines[si] if si is not None and si >= 0 else ""
    if kieu.match(head) or (si >= 0 and any(kieu.match(lines[j]) for j in range(max(0, si - 5), si + 1))):
        # check if kieu is closer than a normal question
        # look back 50 lines for kieu vs normal structure
        last_kieu = -1
        last_q = -1
        for j in range(max(0, ai - 60), ai):
            if kieu.match(lines[j]):
                last_kieu = j
            elif opt.match(lines[j]) and last_kieu < 0:
                pass
        # if kieu appears after previous answer and before this answer's options
        prev_ans = -1
        for j in range(ai - 1, max(-1, ai - 80), -1):
            if ans.match(lines[j]):
                prev_ans = j
                break
        kieu_in_between = any(kieu.match(lines[j]) for j in range(prev_ans + 1, ai))
        # only count as kieu-ans if the question for this block is the kieu block itself
        # (options immediately after kieu, answer after those options without another full Q)
        if kieu_in_between:
            # find if there's a normal Q between kieu and this answer
            kpos = max(j for j in range(prev_ans + 1, ai) if kieu.match(lines[j]))
            # text lines between kieu and first option
            opts_start = next((j for j in range(kpos, ai) if opt.match(lines[j])), None)
            if opts_start is not None:
                # any answer between kieu and this answer? if this is first answer after kieu options
                mid = [j for j in range(kpos, ai) if ans.match(lines[j])]
                # if only this answer, and options belong to kieu
                # Heuristic: if no non-option question text that's a full main Q after kieu with its own answer before
                kieu_ans += 1
                continue
    main_ans += 1

out.append(f"rough main_ans={main_ans} kieu_ans={kieu_ans}")

qs = json.load(open("questions.json", encoding="utf-8"))
main = [q for q in qs if q.get("source") != "kieu"]
kieu_q = [q for q in qs if q.get("source") == "kieu"]
out.append(f"json total={len(qs)} main={len(main)} kieu_standalone={len(kieu_q)}")
out.append(f"with_alts={sum(1 for q in qs if q.get('alternatives'))}")

# Multi answers
multi = sum(1 for i, l in ans_lines if len(ans.match(l).group(1)) > 1)
out.append(f"multi_letter_answers={multi}")

# Answers with notes
notes = sum(1 for i, l in ans_lines if "(" in l or "（" in l)
out.append(f"answers_with_notes={notes}")

# Pure single A-D only (classic)
pure_ad = sum(1 for i, l in ans_lines if re.fullmatch(r"[A-D]", l))
out.append(f"pure_single_A-D={pure_ad}")
pure_ae = sum(1 for i, l in ans_lines if re.fullmatch(r"[A-E]", l))
out.append(f"pure_single_A-E={pure_ae}")
all_pure = sum(1 for i, l in ans_lines if re.fullmatch(r"[A-E]{1,5}", l))
out.append(f"pure_letters_only={all_pure}")

open("analyze_count.txt", "w", encoding="utf-8").write("\n".join(out))
print("\n".join(out))
