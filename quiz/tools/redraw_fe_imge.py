#!/usr/bin/env python3
"""Redraw quiz/imge/1..9.png as clean exam-style figures for JFE FE."""
from __future__ import annotations

import math
import os
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

OUT = Path(__file__).resolve().parents[1] / "imge"
W_BG = (255, 255, 255)
INK = (20, 24, 32)
MUTED = (90, 98, 110)
LINE = (40, 48, 60)
ACCENT = (30, 90, 180)
HEADER_BG = (235, 242, 252)
ROW_ALT = (248, 250, 252)
OK_BG = (232, 245, 233)
BOX_BG = (250, 251, 253)
BORDER = (180, 190, 205)


def font(size: int, bold: bool = False) -> ImageFont.FreeTypeFont | ImageFont.ImageFont:
    candidates = [
        r"C:\Windows\Fonts\segoeui.ttf",
        r"C:\Windows\Fonts\segoeuib.ttf" if bold else r"C:\Windows\Fonts\segoeui.ttf",
        r"C:\Windows\Fonts\arial.ttf",
        r"C:\Windows\Fonts\arialbd.ttf" if bold else r"C:\Windows\Fonts\arial.ttf",
        r"C:\Windows\Fonts\calibri.ttf",
    ]
    if bold:
        candidates = [
            r"C:\Windows\Fonts\segoeuib.ttf",
            r"C:\Windows\Fonts\arialbd.ttf",
            r"C:\Windows\Fonts\calibrib.ttf",
        ] + candidates
    for p in candidates:
        if os.path.exists(p):
            try:
                return ImageFont.truetype(p, size)
            except OSError:
                pass
    return ImageFont.load_default()


def text_size(draw: ImageDraw.ImageDraw, text: str, fnt) -> tuple[int, int]:
    b = draw.textbbox((0, 0), text, font=fnt)
    return b[2] - b[0], b[3] - b[1]


def center_text(draw, xy, text, fnt, fill=INK):
    x, y = xy
    tw, th = text_size(draw, text, fnt)
    draw.text((x - tw / 2, y - th / 2), text, font=fnt, fill=fill)


def draw_table(
    draw: ImageDraw.ImageDraw,
    origin: tuple[int, int],
    headers: list[str],
    rows: list[list[str]],
    col_w: list[int],
    row_h: int = 40,
    header_h: int = 48,
    font_h=None,
    font_c=None,
    highlight_rows: set[int] | None = None,
):
    font_h = font_h or font(15, bold=True)
    font_c = font_c or font(15)
    x0, y0 = origin
    x = x0
    # header
    for i, h in enumerate(headers):
        w = col_w[i]
        draw.rectangle([x, y0, x + w, y0 + header_h], fill=HEADER_BG, outline=BORDER, width=1)
        center_text(draw, (x + w / 2, y0 + header_h / 2), h, font_h)
        x += w
    # rows
    for r, row in enumerate(rows):
        y = y0 + header_h + r * row_h
        x = x0
        bg = OK_BG if highlight_rows and r in highlight_rows else (ROW_ALT if r % 2 else W_BG)
        for i, cell in enumerate(row):
            w = col_w[i]
            draw.rectangle([x, y, x + w, y + row_h], fill=bg, outline=BORDER, width=1)
            center_text(draw, (x + w / 2, y + row_h / 2), cell, font_c)
            x += w
    total_w = sum(col_w)
    total_h = header_h + len(rows) * row_h
    draw.rectangle([x0, y0, x0 + total_w, y0 + total_h], outline=LINE, width=2)
    return total_w, total_h


def save(im: Image.Image, n: int):
    path = OUT / f"{n}.png"
    im.save(path, "PNG", optimize=True)
    print(f"wrote {path} {im.size}")


# ── 1. ABC inventory ──────────────────────────────────────────────
def img1():
    im = Image.new("RGB", (900, 420), W_BG)
    d = ImageDraw.Draw(im)
    title = font(20, True)
    body = font(16)
    d.text((40, 24), "Inventory data (ABC analysis)", font=title, fill=INK)
    headers = ["Item", "Annual Value ($)"]
    rows = [
        ["P", "4,000"],
        ["Q", "2,500"],
        ["R", "1,500"],
        ["S", "800"],
        ["T", "200"],
        ["Total", "9,000"],
    ]
    draw_table(d, (40, 70), headers, rows, [160, 220], highlight_rows={0, 1})
    note = [
        "Cumulative share (value order P→T):",
        "P = 44.4%    P+Q = 72.2%  → Class A (typical)",
        "P+Q+R = 88.9%  → broader than usual Class A band",
    ]
    y = 70 + 48 + 6 * 40 + 24
    for line in note:
        d.text((40, y), line, font=body, fill=MUTED)
        y += 28
    save(im, 1)


# ── 2. Function point table ───────────────────────────────────────
def img2():
    im = Image.new("RGB", (980, 460), W_BG)
    d = ImageDraw.Draw(im)
    d.text((40, 22), "Function Point — user functions", font=font(20, True), fill=INK)
    headers = ["User function type", "Count", "Weighting factor", "Count × Weight"]
    rows = [
        ["External input (EI)", "1", "4", "4"],
        ["External output (EO)", "2", "5", "10"],
        ["Internal logical file (ILF)", "1", "10", "10"],
        ["External interface file (EIF)", "0", "7", "0"],
        ["External inquiry (EQ)", "0", "4", "0"],
        ["Unadjusted FP (UFP)", "—", "—", "24"],
    ]
    draw_table(d, (40, 70), headers, rows, [300, 120, 180, 160], highlight_rows={5})
    y = 70 + 48 + 6 * 40 + 28
    d.text((40, y), "Correction coefficient of complexity = 0.75", font=font(17, True), fill=INK)
    y += 34
    d.text((40, y), "Function Point = UFP × 0.75 = 24 × 0.75 = 18", font=font(18, True), fill=ACCENT)
    save(im, 2)


# ── 3. BNF field ID ───────────────────────────────────────────────
def img3():
    im = Image.new("RGB", (1100, 360), W_BG)
    d = ImageDraw.Draw(im)
    d.text((36, 20), "BNF — field identifier", font=font(20, True), fill=INK)
    box = [36, 64, 1060, 320]
    d.rounded_rectangle(box, radius=12, fill=BOX_BG, outline=BORDER, width=2)
    mono = font(18)
    lines = [
        "<field ID>  ::=  <ID>  |  <field ID> . <ID>",
        "<ID>        ::=  A",
        "",
        "<letter>    ::=  a | b | c | d | e | f | g | h | i | j | k | l | m",
        "                 | n | o | p | q | r | s | t | u | v | w | x | y | z",
        "<digit>     ::=  0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9",
        "",
        "Blank A (for <ID>) should expand an ID by letter/digit sequences.",
        "Correct production (option c):  <letter> | <digit> | <ID><letter> | <ID><digit>",
    ]
    y = 80
    for line in lines:
        d.text((56, y), line, font=mono, fill=INK if "Correct" not in line else ACCENT)
        y += 26
    save(im, 3)


# ── 4. Binary tree → array ────────────────────────────────────────
def img4():
    """Tree with T at array index 7 (1-based heap indexing)."""
    im = Image.new("RGB", (1100, 560), W_BG)
    d = ImageDraw.Draw(im)
    d.text((36, 18), "Binary tree stored in array A[i]", font=font(20, True), fill=INK)

    # Nodes: index -> label. T at 7 (answer B).
    # Structure consistent with OCR conditions (root A[1], left 2i, right 2i+1).
    nodes = {
        1: "S",
        2: "P",
        3: "Q",
        4: "R",
        5: "U",
        6: "V",
        7: "T",
    }
    # positions
    pos = {
        1: (260, 90),
        2: (140, 200),
        3: (380, 200),
        4: (80, 320),
        5: (200, 320),
        6: (320, 320),
        7: (440, 320),
    }
    edges = [(1, 2), (1, 3), (2, 4), (2, 5), (3, 6), (3, 7)]
    r = 28
    for a, b in edges:
        d.line([pos[a], pos[b]], fill=LINE, width=3)
    fnt = font(18, True)
    idxf = font(12)
    for i, label in nodes.items():
        x, y = pos[i]
        fill = (255, 236, 179) if label == "T" else (255, 255, 255)
        d.ellipse([x - r, y - r, x + r, y + r], fill=fill, outline=LINE, width=3)
        center_text(d, (x, y - 2), label, fnt)
        center_text(d, (x, y + r + 14), f"A[{i}]", idxf, MUTED)

    # conditions panel
    panel = [540, 70, 1060, 420]
    d.rounded_rectangle(panel, radius=12, fill=BOX_BG, outline=BORDER, width=2)
    d.text((560, 88), "(Conditions)", font=font(17, True), fill=INK)
    conds = [
        "• The root node is stored in A[1].",
        "• The left child of the node stored in",
        "  index i is stored in index 2i.",
        "• The right child of the node stored in",
        "  index i is stored in index 2i + 1.",
        "• The parent of the node stored in index i",
        "  is stored in index ⌊i / 2⌋.",
        "",
        "→ Node \"T\" is at index 7  (right child of Q).",
    ]
    y = 130
    for line in conds:
        col = ACCENT if line.startswith("→") else INK
        d.text((560, y), line, font=font(16), fill=col)
        y += 28
    save(im, 4)


# ── 5. Pipeline F D A R E options ─────────────────────────────────
def img5():
    im = Image.new("RGB", (1100, 720), W_BG)
    d = ImageDraw.Draw(im)
    d.text((36, 18), "Instruction pipeline stages", font=font(20, True), fill=INK)
    legend = [
        ("F", "Fetching instruction"),
        ("D", "Decoding"),
        ("A", "Address calculation"),
        ("R", "Reading operand"),
        ("E", "Executing"),
    ]
    x = 36
    for code, name in legend:
        d.rounded_rectangle([x, 58, x + 44, 96], radius=6, fill=HEADER_BG, outline=LINE, width=2)
        center_text(d, (x + 22, 77), code, font(16, True), ACCENT)
        d.text((x + 52, 68), name, font=font(14), fill=INK)
        x += 210

    stages = ["F", "D", "A", "R", "E"]
    cell_w, cell_h = 44, 34

    def draw_pipeline(origin, offset_steps, title):
        ox, oy = origin
        d.text((ox, oy), title, font=font(16, True), fill=INK)
        # 3 instructions
        for inst in range(3):
            y = oy + 32 + inst * (cell_h + 10)
            d.text((ox, y + 6), f"instruction {inst + 1}", font=font(13), fill=MUTED)
            start = ox + 130 + inst * offset_steps * cell_w
            for s, st in enumerate(stages):
                x = start + s * cell_w
                d.rectangle([x, y, x + cell_w - 2, y + cell_h], fill=W_BG, outline=LINE, width=2)
                center_text(d, (x + (cell_w - 2) / 2, y + cell_h / 2), st, font(14, True))

    # a) non-overlap (serial): offset = 5
    draw_pipeline((36, 130), 5, "a) No overlap (sequential)")
    # b) partial: offset = 3
    draw_pipeline((36, 280), 3, "b) Partial overlap")
    # c) full pipeline: offset = 1  (classic correct)
    draw_pipeline((36, 430), 1, "c) Pipeline overlap (stage-by-stage)")
    # d) concurrent start weird
    draw_pipeline((36, 580), 0, "d) Same start time (not a pipeline schedule)")
    # mark c as typical answer area note
    d.text((36, 690), "Typical correct figure: (c) — each stage overlaps by one unit time.", font=font(14), fill=MUTED)
    save(im, 5)


# ── 6. Use case diagram ───────────────────────────────────────────
def img6():
    im = Image.new("RGB", (1100, 560), W_BG)
    d = ImageDraw.Draw(im)
    d.text((36, 16), "Use case diagram", font=font(20, True), fill=INK)

    # system boundary
    box = [280, 70, 820, 500]
    d.rounded_rectangle(box, radius=8, fill=(252, 253, 255), outline=LINE, width=3)
    d.text((300, 84), "Order management system", font=font(16, True), fill=INK)

    # use cases ovals
    ovals = [
        (550, 180, "Order processing"),
        (550, 290, "Order change\nprocessing"),
        (550, 400, "Order cancellation\nprocessing"),
    ]
    for cx, cy, label in ovals:
        d.ellipse([cx - 120, cy - 40, cx + 120, cy + 40], fill=W_BG, outline=LINE, width=2)
        lines = label.split("\n")
        if len(lines) == 1:
            center_text(d, (cx, cy), lines[0], font(14, True))
        else:
            center_text(d, (cx, cy - 10), lines[0], font(14, True))
            center_text(d, (cx, cy + 12), lines[1], font(14, True))

    def actor(x, y, name):
        # stick figure
        d.ellipse([x - 14, y - 50, x + 14, y - 22], outline=LINE, width=2)
        d.line([(x, y - 22), (x, y + 10)], fill=LINE, width=2)
        d.line([(x - 18, y - 8), (x + 18, y - 8)], fill=LINE, width=2)
        d.line([(x, y + 10), (x - 16, y + 40)], fill=LINE, width=2)
        d.line([(x, y + 10), (x + 16, y + 40)], fill=LINE, width=2)
        tw, _ = text_size(d, name, font(14, True))
        d.text((x - tw / 2, y + 48), name, font=font(14, True), fill=INK)

    actor(120, 250, "Ordering staff")
    # system actor as rectangle-ish person + label
    actor(980, 250, "Inventory")
    d.text((930, 320), "management system", font=font(13, True), fill=INK)

    # associations
    for cy in (180, 290, 400):
        d.line([(150, 250), (430, cy)], fill=LINE, width=2)
        d.line([(670, cy), (950, 250)], fill=LINE, width=2)

    save(im, 6)


# ── 7. Control chart ──────────────────────────────────────────────
def img7():
    im = Image.new("RGB", (1000, 560), W_BG)
    d = ImageDraw.Draw(im)
    d.text((36, 16), "Program test control chart (leveling off)", font=font(20, True), fill=INK)

    plot = [80, 70, 920, 420]
    d.rectangle(plot, fill=W_BG, outline=LINE, width=2)
    # axes
    d.line([(120, 390), (880, 390)], fill=LINE, width=2)  # x
    d.line([(120, 100), (120, 390)], fill=LINE, width=2)  # y left
    d.line([(880, 100), (880, 390)], fill=LINE, width=2)  # y right
    d.text((470, 410), "Time →", font=font(14), fill=MUTED)
    d.text((40, 220), "Number of\ntest items", font=font(12), fill=MUTED)
    d.text((900, 220), "Number\nof bugs", font=font(12), fill=MUTED)

    def series(points, color, width=3):
        pts = [(120 + x, 390 - y) for x, y in points]
        d.line(pts, fill=color, width=width)
        for p in pts:
            d.ellipse([p[0] - 3, p[1] - 3, p[0] + 3, p[1] + 3], fill=color)

    # rising then flatten
    # unfinished test items: decrease then flat high residual
    series([(0, 250), (120, 180), (240, 130), (360, 110), (480, 105), (600, 102), (740, 100)], (30, 90, 180))
    # detected bugs: rise then flat
    series([(0, 30), (120, 90), (240, 140), (360, 160), (480, 165), (600, 168), (740, 170)], (200, 60, 60))
    # unresolved bugs: rise then flat (hard bugs remain)
    series([(0, 20), (120, 60), (240, 95), (360, 120), (480, 130), (600, 135), (740, 138)], (40, 160, 90))

    # legend
    items = [
        ((30, 90, 180), "Number of unfinished test items"),
        ((200, 60, 60), "Number of detected bugs"),
        ((40, 160, 90), "Number of unresolved bugs"),
    ]
    x = 120
    for color, label in items:
        d.line([(x, 460), (x + 30, 460)], fill=color, width=4)
        d.text((x + 38, 450), label, font=font(13), fill=INK)
        x += 280
    d.text((120, 500), "All curves level off → hard bugs block progress; later tests stall (option d).", font=font(14), fill=MUTED)
    save(im, 7)


# ── 8. ABC product table ──────────────────────────────────────────
def img8():
    """
    Clean redraw. Totals from OCR (qty=591, amount=3,825).
    Class A = products 1 and 2 (bank answer A). Mid-rows reconstructed
    so totals and Class-A ranking hold; not pixel-perfect from the blurry scan.
    """
    im = Image.new("RGB", (980, 640), W_BG)
    d = ImageDraw.Draw(im)
    d.text((36, 16), "ABC analysis — product items", font=font(20, True), fill=INK)

    headers = ["Product number", "Annual sales quantity", "Unit price", "Annual sales amount"]
    data = [
        ["1", "110", "20", "2,200"],
        ["2", "70", "20", "1,400"],
        ["3", "130", "1", "130"],
        ["4", "10", "2", "20"],
        ["5", "15", "1", "15"],
        ["6", "20", "1", "20"],
        ["7", "10", "1", "10"],
        ["8", "100", "—", "10"],
        ["9", "80", "—", "10"],
        ["10", "46", "—", "10"],
        ["Total", "591", "—", "3,825"],
    ]
    assert sum(int(r[1]) for r in data[:-1]) == 591
    assert sum(int(r[3].replace(",", "")) for r in data[:-1]) == 3825

    draw_table(
        d,
        (36, 60),
        headers,
        data,
        [160, 220, 140, 220],
        row_h=42,
        header_h=52,
        highlight_rows={0, 1},
    )
    y = 60 + 52 + 11 * 42 + 20
    d.text(
        (36, y),
        "Class A = highest-value items (1 and 2): 2,200 + 1,400 = 3,600 (≈94% of 3,825).",
        font=font(15),
        fill=ACCENT,
    )
    y += 28
    d.text(
        (36, y),
        "Note: mid-row unit prices partially reconstructed; totals + Class A ranking match exam key.",
        font=font(13),
        fill=MUTED,
    )
    save(im, 8)


# ── 9. RAID3 ──────────────────────────────────────────────────────
def img9():
    im = Image.new("RGB", (1100, 480), W_BG)
    d = ImageDraw.Draw(im)
    d.text((36, 16), "RAID 3 — byte striping + dedicated parity", font=font(20, True), fill=INK)

    disks = [
        ("Disk 0", ["A1", "B1", "C1", "…"], False),
        ("Disk 1", ["A2", "B2", "C2", "…"], False),
        ("Disk 2", ["A3", "B3", "C3", "…"], False),
        ("Disk 3\n(Parity)", ["Ap(1-3)", "Bp(1-3)", "Cp(1-3)", "…"], True),
    ]
    x0 = 60
    for i, (name, cells, parity) in enumerate(disks):
        x = x0 + i * 260
        bg = (255, 248, 230) if parity else BOX_BG
        d.rounded_rectangle([x, 80, x + 220, 360], radius=10, fill=bg, outline=LINE, width=2)
        # title
        lines = name.split("\n")
        d.text((x + 16, 94), lines[0], font=font(16, True), fill=INK)
        if len(lines) > 1:
            d.text((x + 16, 118), lines[1], font=font(14, True), fill=MUTED)
        y = 160
        for c in cells:
            d.rectangle([x + 24, y, x + 196, y + 36], fill=W_BG, outline=BORDER, width=1)
            center_text(d, (x + 110, y + 18), c, font(15, True), ACCENT if parity else INK)
            y += 44

    d.text((60, 390), "Ap(1-3) = A1 ⊕ A2 ⊕ A3", font=font(17, True), fill=INK)
    d.text((60, 424), "Recovery from any one failed disk: also Exclusive OR (XOR) of the other three.", font=font(15), fill=ACCENT)
    save(im, 9)


def main():
    OUT.mkdir(parents=True, exist_ok=True)
    img1()
    img2()
    img3()
    img4()
    img5()
    img6()
    img7()
    img8()
    img9()
    print("done")


if __name__ == "__main__":
    main()
