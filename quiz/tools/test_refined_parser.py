import json
import re
import sys
import io

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8', errors='replace')
sys.stderr = io.TextIOWrapper(sys.stderr.buffer, encoding='utf-8', errors='replace')

def clean_line(s):
    s = s.strip()
    s = re.sub(r'^(?:Choose|answer|Multiple Choice|7Exam|FUExam|Exam|hoode|ree\[|EXT|thống)+$', '', s, flags=re.I).strip()
    return s

def parse_refined(lines):
    cleaned = []
    for line in lines:
        c = clean_line(line)
        if c:
            cleaned.append(c)

    q_lines = []
    opt_lines_start = len(cleaned)

    for i, line in enumerate(cleaned):
        if re.match(r'^[A-D][\.\:\s]', line) or line in ('A', 'B', 'C', 'D'):
            if line.startswith('A') and i > 0:
                opt_lines_start = i
                break

    for line in cleaned[:opt_lines_start]:
        if not re.match(r'^(?:Câu|Question|\d+|Choose|answer|Multiple Choice)$', line, re.I):
            q_lines.append(line)

    q_text = " ".join(q_lines).strip()

    opts = {'A': [], 'B': [], 'C': [], 'D': []}
    curr = None

    for line in cleaned[opt_lines_start:]:
        m = re.match(r'^([A-D])[\.:\s]*(.*)$', line, re.I)
        if m and m.group(1).upper() in opts:
            curr = m.group(1).upper()
            rest = m.group(2).strip()
            if rest:
                opts[curr].append(rest)
        elif curr in opts:
            opts[curr].append(line)

    def clean_opt(str_list):
        res = ' '.join(str_list).strip()
        res = re.sub(r'\s*(?:7Exam|FUExam|Exam|thống|EXT)\s*$', '', res, flags=re.I).strip()
        return res

    return q_text, clean_opt(opts['A']), clean_opt(opts['B']), clean_opt(opts['C']), clean_opt(opts['D'])

test_lines = [
  "Câu 9",
  "Chủ nghĩa nào sau đây ảnh hưởng đến sự hình thành tư tưởng Hồ Chí Minh?",
  "A",
  "Chủ nghĩa dân tộc của Grady",
  "B",
  "Chủ nghĩa Tam dân của Tôn Trung Sơn",
  "C",
  "Chủ nghĩa dân tộc hẹp hòi",
  "D",
  "Chủ nghĩa dân chủ của Kenedy"
]

qt, a, b, c, d = parse_refined(test_lines)
print("Q:", qt)
print("A:", a)
print("B:", b)
print("C:", c)
print("D:", d)
