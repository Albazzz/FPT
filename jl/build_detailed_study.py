# -*- coding: utf-8 -*-
"""
Build detailed bilingual study content into index.html from textbook chapter snippets.
Each section gets:
  - Japanese body (from book, cleaned)
  - Vietnamese detailed body
  - Key-point tables JP + VI
"""
from pathlib import Path
import re
import json
import importlib.util

# ---------- 1) Parse full textbook sections ----------

def clean_text(s: str) -> str:
    s = re.sub(r"\s+", " ", s)
    s = s.replace("．", "。").strip()
    # drop obvious exercise noise
    for bad in ["練習問題", "ミニテスト", "問題 I", "問題I", "問題 II", "問題III", "問題 IV"]:
        if bad in s:
            s = s.split(bad)[0]
    return s.strip()


def parse_snip(path: Path):
    lines = path.read_text(encoding="utf-8").splitlines()
    if not lines:
        return None
    title = lines[0].replace("[Heading1]", "").strip()
    # remove vietnamese parenthetical from title if present for display
    sections = []
    cur = {"title": "導入", "paras": []}
    for l in lines[1:]:
        if l.startswith("[Heading2]"):
            if cur["paras"] or cur["title"] != "導入":
                text = clean_text("".join(cur["paras"]))
                if len(text) > 30:
                    sections.append({"title": cur["title"], "text": text})
            cur = {"title": l.replace("[Heading2]", "").strip(), "paras": []}
        elif l.startswith("[Heading3]"):
            # keep as inline subtitle marker
            cur["paras"].append("【" + l.replace("[Heading3]", "").strip() + "】")
        elif l.startswith("[Heading"):
            continue
        elif l.startswith("練習問題") or l.startswith("ミニテスト"):
            break
        elif l.startswith("新しい言葉") or l.startswith("問題") or l.startswith("---"):
            continue
        elif l.startswith("図 ") or l.startswith("【演習】") or l.startswith("解答例"):
            continue
        else:
            t = l.strip()
            if not t or "------" in t:
                continue
            if t.startswith("[Heading4]"):
                # Vietnamese mini-test sentences — skip
                continue
            cur["paras"].append(t)
    text = clean_text("".join(cur["paras"]))
    if len(text) > 30:
        sections.append({"title": cur["title"], "text": text})
    return {"title": title, "sections": sections}


def load_all_chapters():
    chapters = []
    # Main 1-19 content chapters (skip 20 answers)
    for i in range(1, 20):
        p = Path(f"ch_snip_{i:02d}.txt")
        if not p.exists():
            continue
        ch = parse_snip(p)
        if ch:
            chapters.append(ch)
    # Insert internet tech between network (5) and business if missing as Heading1
    # Looking at order from previous work:
    # 1 foundation, 2 internet use, 3 IT devices, 4 data comm tech, 5 network,
    # then business was 6 in snips but internet tech is separate file
    # Reorder properly:
    # After rebuild: ch_snip 01-05 ok, then internet_tech, then snips 06+ were business onward
    return chapters


# Map snip order to proper numbering with internet tech inserted
ORDER = [
    ("ch_snip_01.txt", 1),
    ("ch_snip_02.txt", 2),
    ("ch_snip_03.txt", 3),
    ("ch_snip_04.txt", 4),
    ("ch_snip_05.txt", 5),
    ("ch_snip_internet_tech.txt", 6),
    ("ch_snip_06.txt", 7),  # business
    ("ch_snip_07.txt", 8),  # crypto
    ("ch_snip_08.txt", 9),  # security
    ("ch_snip_09.txt", 10), # structure
    ("ch_snip_10.txt", 11), # CPU
    ("ch_snip_11.txt", 12), # calc
    ("ch_snip_12.txt", 13), # info
    ("ch_snip_13.txt", 14), # multi
    ("ch_snip_14.txt", 15), # datacom
    ("ch_snip_15.txt", 16), # OS
    ("ch_snip_16.txt", 17), # DB
    ("ch_snip_17.txt", 18), # SQL
    ("ch_snip_18.txt", 19), # prog
    ("ch_snip_19.txt", 20), # algo
]


# ---------- 2) Vietnamese titles + detailed VI translations (hand-curated by section title key) ----------

VI_CHAPTER = {
    1: "Kiến thức cơ bản về máy tính",
    2: "Sử dụng Internet",
    3: "Các thiết bị IT",
    4: "Công nghệ truyền dữ liệu (kết nối)",
    5: "Mạng máy tính",
    6: "Công nghệ Internet (OSI / HTML)",
    7: "Sử dụng Internet trong thương mại",
    8: "Mã hóa",
    9: "An toàn và bảo mật",
    10: "Cấu trúc máy tính",
    11: "Nguyên lý hoạt động của CPU",
    12: "Xử lý tính toán (số nhị phân)",
    13: "Lượng thông tin",
    14: "Đa phương tiện (Multimedia)",
    15: "Truyền dữ liệu & nén",
    16: "Hệ điều hành",
    17: "Cơ sở dữ liệu",
    18: "Mô tả dữ liệu (SQL)",
    19: "Cơ sở lập trình",
    20: "Giải thuật",
}

# Detailed VI paragraphs keyed by (chapter_no, section_title_jp) with fuzzy fallback by keywords
VI_DETAIL = {}  # filled below via keyword matchers


def translate_section(ch_no: int, title_jp: str, text_jp: str) -> tuple[str, str, list, list]:
    """
    Return (vi_title, vi_body, jp_key_rows, vi_key_rows).
    Body is detailed Vietnamese based on Japanese source.
    """
    t = title_jp
    body = text_jp

    # Default VI title = keep JP if unknown
    vi_title = t
    vi_body = ""
    jp_keys = []
    vi_keys = []

    def setv(vt, vb, jk, vk):
        nonlocal vi_title, vi_body, jp_keys, vi_keys
        vi_title, vi_body, jp_keys, vi_keys = vt, vb, jk, vk

    # ---- Intro of each chapter ----
    if t == "導入":
        setv(
            "Giới thiệu chương",
            f"Chương {ch_no} ({VI_CHAPTER.get(ch_no, '')}): "
            + {
                1: "Khái quát chức năng và lịch sử máy tính — nền tảng chung cho mọi loại máy từ PC đến supercomputer.",
                2: "Cách dùng Internet an toàn: tìm web, Web 2.0, cloud, netiquette email và sở hữu trí tuệ.",
                3: "Thực trạng thiết bị IT, tập trung điện thoại di động: thế hệ, truyền tin, phần cứng/mềm.",
                4: "Công nghệ truyền dữ liệu hữu tuyến/vô tuyến và ý nghĩa tốc độ, last-mile.",
                5: "Mạng máy tính: LAN/WAN, Internet, hình thái, phân tán/tập trung, firewall.",
                6: "Công nghệ Internet: protocol/OSI, IP-domain, luồng tin, HTML/XML.",
                7: "Internet trong kinh doanh: TMĐT, EDI/EOS, tiền điện tử, CRM, bảo vệ dữ liệu cá nhân.",
                8: "Mã hóa: cổ điển, hiện đại, khóa chung/công khai, SSL.",
                9: "An toàn: sự cố, virus, tấn công, mật khẩu, đánh giá availability.",
                10: "Cấu trúc phần cứng PC: 5 thành phần, mainboard, bộ nhớ, CPU.",
                11: "Nguyên lý CPU: Turing, 4 thế hệ phần tử logic, mạch AND/OR/NOT.",
                12: "Tính toán nhị phân: cơ số, đổi hệ, cộng, số âm, nhân chia.",
                13: "Lượng thông tin: bit/byte, ký tự Latin/Nhật, bảng mã.",
                14: "Multimedia: MIDI, âm thanh, ảnh, video.",
                15: "Truyền tin & nén: bps, nén chữ/âm/ảnh/video, parity.",
                16: "Hệ điều hành: vị trí, chức năng, các loại OS.",
                17: "Cơ sở dữ liệu: khái niệm, mô hình biểu diễn, thao tác quan hệ.",
                18: "SQL: cú pháp, điều kiện, sắp xếp, join.",
                19: "Lập trình: ngôn ngữ, low/high-level, OOP.",
                20: "Giải thuật: flowchart, sorting, thiết kế UI.",
            }.get(ch_no, "Đọc đoạn tiếng Nhật bên trên để nắm mục tiêu chương."),
            [("導入", body[:200] + ("…" if len(body) > 200 else ""))],
            [("Giới thiệu", f"Mở đầu chương {ch_no} — xem đoạn VI chi tiết.")],
        )

    # ---- Chapter 1 ----
    elif "デジタル" in t or "アナログ" in t:
        setv(
            "Digital và Analog",
            "Máy tính đang dùng hiện nay là máy tính digital. Digital là đại lượng đã được số hóa (rời rạc). "
            "Ngược lại, analog là đại lượng liên tục. Nhiều đại lượng vật lý quanh ta như độ dài, trọng lượng, thời gian là analog, "
            "nhưng máy tính digital xấp xỉ chúng thành số theo đơn vị cố định. Ví dụ thời gian chảy liên tục, nhưng đồng hồ digital xử lý theo đơn vị 1 giây. "
            "Trong máy tính, để tương ứng với điện áp cao (ON) / thấp (OFF), chỉ dùng hai số 0 và 1. "
            "Tín hiệu analog thường được gửi/nhận dưới dạng dòng điện (mA) hoặc điện áp (mV). "
            "Đặc điểm: analog có thể biểu diễn trạng thái mơ hồ ‘như nguyên’, nhưng khó copy trung thực; "
            "digital chính xác, có ranh giới rõ, copy được, nhưng không giữ nguyên tính mơ hồ của đại lượng liên tục.",
            [
                ("デジタル", "数値化された量。コンピュータでは 0 と 1 だけを使う（電圧の高低＝オン/オフ）"),
                ("アナログ", "連続的な量。長さ・重さ・時間など身の回りの物理量の多くが該当"),
                ("デジタル時計の例", "時間は連続だが、1秒単位の数字として近似して扱う"),
                ("アナログ信号", "電流(mA)または電圧(mV)などの連続信号として送受信される"),
                ("特徴", "アナログ＝曖昧さをそのまま表現可／デジタル＝正確・切れ目あり・コピー可だが曖昧さは残せない"),
            ],
            [
                ("Digital", "Đại lượng số hóa; máy tính chỉ dùng 0 và 1 (ON/OFF)"),
                ("Analog", "Đại lượng liên tục: độ dài, trọng lượng, thời gian…"),
                ("Ví dụ đồng hồ", "Thời gian liên tục nhưng digital xấp xỉ theo giây"),
                ("Tín hiệu analog", "Truyền bằng mA / mV"),
                ("So sánh", "Analog: mơ hồ được; Digital: chính xác, copy được, không giữ mơ hồ"),
            ],
        )
    elif "歴史" in t:
        setv(
            "Lịch sử máy tính",
            "Công cụ tính toán có từ rất sớm: từ thời cổ đại đã có abacus (nguồn gốc bàn tính). "
            "Từ thế kỷ 17 sau cách mạng công nghiệp có nhiều máy cơ học bánh răng như máy Pascal, máy nhân Leibniz, dùng cho tính toán và cả mã hóa. "
            "Thập niên 1930 xuất hiện máy điện-cơ dùng relay (nam châm điện đóng/mở công tắc). "
            "Năm 1939 ĐH Iowa đã có máy thử ABC theo nguyên lý tương tự. "
            "Năm 1946, ENIAC (Eckert & Mauchly, ĐH Pennsylvania) được xem là máy tính điện tử đầu tiên cùng nguyên lý với máy hiện đại — ban đầu phục vụ tính quỹ đạo đạn đạo, gồm gần 20.000 đèn điện tử, tốn điện, phát nhiệt lớn, mỗi lần đổi việc phải chuyển dây/công tắc. "
            "Năm 1949 EDSAC (Cambridge) đưa ra stored-program: chương trình độc lập phần cứng, xử lý như dữ liệu — gọi là máy von Neumann, nền tảng máy tính ngày nay.",
            [
                ("紀元前", "アバカス（そろばんの起源）"),
                ("17世紀", "パスカルの計算機・ライプニッツの乗算機など歯車の機械式計算機"),
                ("1930年代", "リレーによる電気機械式計算機"),
                ("1939年", "アイオワ大学の試作器 ABC"),
                ("1946年", "ENIAC（エッカート＆モークリー）。電子式。真空管約2万本。軍事の弾道計算が目的"),
                ("1949年", "EDSAC。プログラム内蔵方式＝フォン・ノイマン型。現在の基礎原理"),
            ],
            [
                ("Cổ đại", "Abacus — nguồn gốc bàn tính"),
                ("TK 17", "Máy cơ học Pascal, Leibniz…"),
                ("1930s", "Máy điện-cơ (relay)"),
                ("1939", "ABC (ĐH Iowa)"),
                ("1946", "ENIAC — máy điện tử, ~20k đèn, mục đích quân sự"),
                ("1949", "EDSAC — stored program / von Neumann"),
            ],
        )
    elif "身の回り" in t:
        setv(
            "Máy tính quanh ta",
            "Khi nói máy tính thường nghĩ tới PC có màn hình và bàn phím, nhưng còn nhiều loại. "
            "Siêu máy tính (supercomputer) tính nhanh nhất, dùng mô phỏng phức tạp, dự báo thời tiết. "
            "Máy lớn đa dụng (mainframe) xử lý khối lượng lớn: ngân hàng online, đặt chỗ. "
            "Workstation hình dáng/hiệu năng gần PC nhưng ổn định khi chạy liên tục. "
            "PC chia desktop / notebook; netbook vốn chuyên duyệt web/email. "
            "Smartphone là điện thoại nhưng có thể xem như PC có mạng. "
            "Các máy đổi chương trình để làm nhiều việc gọi là máy đa dụng (汎用); máy game, GPS xe, máy tính cầm tay là máy chuyên dụng (専用).",
            [
                ("スーパーコンピュータ", "最速。構造解析・シミュレーション・天気予報など"),
                ("大型汎用計算機", "銀行オンラインや座席予約など大量データ処理"),
                ("ワークステーション", "PCに近いが常時稼働でも故障しにくい"),
                ("ネットブック", "本来はHP閲覧・メールなどInternet特化"),
                ("スマートフォン", "通信機能付きのパソコンとも考えられる"),
                ("汎用 / 専用", "プログラム変更で多用途＝汎用。ゲーム機・ナビ・電卓＝専用"),
            ],
            [
                ("Supercomputer", "Nhanh nhất: mô phỏng, thời tiết…"),
                ("Mainframe", "Xử lý dữ liệu lớn: ngân hàng, đặt chỗ"),
                ("Workstation", "Gần PC, ổn định 24/7"),
                ("Netbook", "Ban đầu chuyên web/email"),
                ("Smartphone", "Như PC có mạng"),
                ("Đa dụng / chuyên dụng", "Đổi chương trình = đa dụng; game/GPS/máy tính = chuyên dụng"),
            ],
        )
    elif "機能" in t and ch_no == 1:
        setv(
            "Chức năng máy tính",
            "Mọi loại máy tính có thể gói gọn: máy ‘ghi nhớ’ rồi ‘xử lý’. Thiếu một trong hai thì không gọi là máy tính. "
            "Phép tính cơ bản rất đơn giản, nhưng nhờ ghi nhớ nên làm được việc phức tạp. "
            "Ví dụ cộng 345+67 theo cột: chỉ cần cộng 1 chữ số và nhớ nhớ số mang (nhớ 1), rồi lặp lại. "
            "Nếu lặp đủ nhanh, dù bao nhiêu chữ số cũng chỉ là lặp phép cộng 1 chữ số. "
            "Nguyên lý cơ bản = lặp lại tính toán đơn giản + ghi nhớ. Năm thành phần: thiết bị tính toán, nhớ, điều khiển, vào, ra.",
            [
                ("一言で", "コンピュータ＝記憶＋処理（片方だけでは不可）"),
                ("原理", "単純な計算と記憶の繰り返しで複雑な作業を実現"),
                ("筆算の例", "1桁の加算と繰り上げの記憶で多桁計算が可能"),
                ("5要素", "演算装置・記憶装置・制御装置・入力装置・出力装置"),
            ],
            [
                ("Định nghĩa", "Máy tính = ghi nhớ + xử lý"),
                ("Nguyên lý", "Lặp phép tính đơn giản + nhớ"),
                ("Ví dụ", "Cộng từng cột + nhớ số mang"),
                ("5 thành phần", "Tính toán, nhớ, điều khiển, vào, ra"),
            ],
        )
    elif t in ("ファイル",) or "ファイル" == t:
        setv(
            "File",
            "Dữ liệu tạo bởi ứng dụng (soạn thảo…) được lưu trên thiết bị lưu trữ dưới dạng file. "
            "File có tên và icon giúp nhận loại tài liệu. "
            "Phần mở rộng (extension) gắn sau tên file (thường không hiện), khoảng 3 chữ sau dấu chấm: "
            "Word = .doc, Excel = .xls, trang web = .htm… "
            "Tên hiển thị + extension mới là tên file đầy đủ. Khi thao tác thường không cần quan tâm, nhưng lúc lưu đôi khi phải tự chọn extension. "
            "Trên Windows có thể bật hiện extension trong Folder Options.",
            [
                ("ファイル", "アプリのデータを記録媒体に保存した単位。アイコンで種類表示"),
                ("拡張子", "ピリオド後の文字列。.doc / .xls / .htm など。種類識別に使う"),
                ("正式名", "表示名＋拡張子で1つのファイルを表す（例: 文書ファイル.doc）"),
                ("注意", "保存時に拡張子を自分で指定する場合がある"),
            ],
            [
                ("File", "Đơn vị lưu dữ liệu ứng dụng"),
                ("Extension", ".doc / .xls / .htm… để nhận loại file"),
                ("Tên đầy đủ", "Tên hiện + phần mở rộng"),
                ("Lưu ý", "Khi lưu đôi khi phải tự chọn extension"),
            ],
        )
    elif "フォルダ" in t:
        setv(
            "Folder (thư mục)",
            "Folder là ‘hộp’ để sắp xếp file. Có thể lồng folder trong folder. "
            "Không có quy tắc bắt buộc, nên chia theo mục đích/ngày để mỗi folder chỉ khoảng vài chục file cho dễ tìm. "
            "Xem folder bằng cách bấm lần lượt, hoặc dùng Explorer để thấy toàn bộ. "
            "Cấu trúc phân cấp gọi là directory structure (cây cha–con–cháu). "
            "Vị trí viết dạng path dùng dấu \\, ví dụ C:\\Users\\tên\\Documents. "
            "Folder đang xem gọi là current path; có thể dùng đường dẫn tương đối (\\..\\ là lên 1 cấp).",
            [
                ("フォルダ", "ファイルを整理する入れ物"),
                ("ディレクトリ構造", "親・子・孫の階層。Explorerで表示"),
                ("パス", "C:\\ユーザー\\… のように位置を表す表記"),
                ("カレントパス", "現在見ているフォルダ。相対パス指定も可能（.. は1つ上）"),
            ],
            [
                ("Folder", "Hộp chứa file"),
                ("Directory", "Cấu trúc cây cha–con"),
                ("Path", "Đường dẫn vị trí file/folder"),
                ("Current path", "Thư mục đang mở; .. = lên 1 cấp"),
            ],
        )
    elif "ドライブ" in t:
        setv(
            "Drive (ổ đĩa)",
            "Mở biểu tượng Computer sẽ thấy thiết bị kèm (C:)(E:)… — đó là tên drive. "
            "Theo lịch sử, ổ có hệ thống thường là C. Path bắt đầu bằng tên drive. "
            "Nhiều HDD → C, D…; một HDD cũng có thể chia logic nhiều drive để backup. "
            "USB/removable khi cắm có thể đổi tên drive tùy tình huống.",
            [
                ("ドライブ名", "(C:)(E:) など。通常システムは C ドライブ"),
                ("複数HDD", "C, D のように異なる名前"),
                ("論理分割", "1台でも管理のため複数ドライブに分けられる"),
                ("USB等", "状況によりドライブ名が変わる"),
            ],
            [
                ("Tên drive", "(C:)(E:); hệ thống thường C"),
                ("Nhiều ổ", "C, D…"),
                ("Chia logic", "1 ổ vật lý có thể thành nhiều drive"),
                ("USB", "Tên drive có thể đổi khi gắn"),
            ],
        )

    # ---- Ch2 ----
    elif "ホームページ検索" in t or (ch_no == 2 and "検索" in t):
        setv(
            "Tìm kiếm trang web",
            "Xem trang web bằng trình duyệt (browser) như Internet Explorer. "
            "Địa chỉ trang gọi là URL (Uniform Resource Location). URL đơn giản có thể gõ trực tiếp; thường vào portal (Google, Yahoo…) để tìm. "
            "Portal xếp kết quả theo mức ‘hữu ích’, thứ tự khác nhau giữa các site; chủ site cố SEO để lên cao, portal liên tục điều chỉnh tiêu chí. "
            "Phần mềm tải về gồm sản phẩm bán, freeware và shareware. Freeware miễn phí dùng nhưng phân phối/sửa/bán lại vẫn có điều kiện (không phải muốn làm gì cũng được); một số theo GPL của GNU. "
            "Shareware cho dùng thử có hạn/giới hạn chức năng — không phải freeware.",
            [
                ("URL", "Uniform Resource Location。ホームページのアドレス／資源の場所"),
                ("ブラウザ", "Internet Explorer など閲覧ソフト"),
                ("ポータルサイト", "Google・Yahoo など検索の入り口"),
                ("フリーウェア", "利用無料でも配布・改変等に条件あり。GPL など"),
                ("シェアウェア", "試用制限あり。フリーソフトではない"),
            ],
            [
                ("URL", "Địa chỉ / cách chỉ định vị trí tài nguyên"),
                ("Browser", "Phần mềm xem web"),
                ("Portal", "Cổng tìm kiếm"),
                ("Freeware", "Miễn phí dùng nhưng vẫn có điều kiện"),
                ("Shareware", "Dùng thử có hạn"),
            ],
        )
    elif "Web2" in t or "Web 2" in t or t == "Web2.0":
        setv(
            "Web 2.0",
            "Trước đây trang web chủ yếu một chiều do người có chuyên môn phát tán. "
            "Với Blog, SNS (Mixi, Twitter), Wikipedia, YouTube, Podcast… ai cũng phát nội dung → phương tiện hai chiều. "
            "Năm 2004 Tim O'Reilly gọi mô hình này là Web 2.0; giai đoạn một chiều trước đó gọi Web 1.0. "
            "Kỹ thuật nền: RSS (thông báo cập nhật), Ajax (xử lý phía client, ví dụ Gmail/Maps), trackback (báo đã link). "
            "Web 2.0 xem web là nền cung cấp dịch vụ: Google Docs/Sheets miễn phí, file trên server, không cần cài app từng máy; mô hình thu từ quảng cáo hơn là bán phần mềm. "
            "Đặc trưng lớn: long tail — dù ít người mua từng mặt hàng, bán nhiều chủng loại vẫn tăng doanh thu, đối lập Pareto 80/20 của cửa hàng vật lý (Amazon, iTunes…). "
            "Sai hay gặp: ‘người gửi và nhận cố định’ — đó là Web 1.0, không phải Web 2.0.",
            [
                ("提唱", "2004年 ティム・オライリー"),
                ("本質", "双方向。誰もが発信（Blog/SNS/Wiki/YouTube）"),
                ("Web1.0", "専門家による一方向メディア"),
                ("技術", "RSS / Ajax / トラックバック"),
                ("ロングテール", "多品種少量でも収入増。パレート(8:2)に対抗"),
                ("誤り", "送り手と受け手が固定＝Web2.0では誤り"),
            ],
            [
                ("Đề xuất", "2004, Tim O'Reilly"),
                ("Bản chất", "Hai chiều; user tạo & chia sẻ nội dung"),
                ("Web 1.0", "Một chiều"),
                ("Công nghệ", "RSS, Ajax, trackback"),
                ("Long tail", "Nhiều loại hàng, mỗi loại ít người mua"),
                ("Hay sai", "Người gửi/nhận cố định → SAI"),
            ],
        )
    elif "クラウド" in t:
        setv(
            "Cloud computing",
            "Theo tư duy Web 2.0, kết nối Internet là nhận dịch vụ — user không cần biết máy cung cấp là lớn hay nhỏ, trong nước hay ngoài nước, như dịch vụ trên ‘đám mây’. "
            "Khái niệm được Eric Schmidt (Google) đề xuất năm 2006. "
            "ASP, SaaS, grid computing cũng là hình thức dùng dịch vụ qua mạng khi cần, giảm mua/bảo trì tài nguyên riêng — theo nghĩa rộng thuộc cloud.",
            [
                ("定義", "Internet経由で資源・サービスを提供。接続先を意識しない"),
                ("提唱", "2006年 エリック・シュミット（Google）"),
                ("関連", "ASP / SaaS / グリッドも広義のクラウド"),
            ],
            [
                ("Định nghĩa", "Cung cấp tài nguyên/dịch vụ qua Internet"),
                ("Đề xuất", "2006 Eric Schmidt"),
                ("Liên quan", "ASP, SaaS, grid"),
            ],
        )
    elif "メール" in t:
        setv(
            "Lưu ý khi dùng email (netiquette)",
            "Email doanh nghiệp khác email bạn bè. Netiquette = phép lịch sự trên mạng. "
            "Phải ghi rõ tên, tư cách (trường/khoa/năm), liên hệ; ghi đúng tên–chức danh người nhận. "
            "Không đòi trả lời gấp (nên chừa khoảng 1 tuần). Kiểm tra kỹ địa chỉ, cẩn thận Cc. "
            "Không gửi file đính kèm quá lớn (trên ~1MB nên hỏi trước); không gửi file có bản quyền. "
            "Tránh emoji/ký hiệu dễ lỗi font; xuống dòng khoảng 35 ký tự. Luôn quét virus file đính kèm. "
            "Viết lịch sự hơn cả khi nói trực tiếp.",
            [
                ("ネチケット", "ネットワーク上のエチケット"),
                ("必須", "自分の氏名・連絡先／相手の所属・氏名を明記"),
                ("禁止", "著作権ファイル送信、過大な添付"),
                ("安全", "添付のウィルスチェック必須。.exe/.vbs/.scr/.pif は危険"),
                ("礼儀", "急な返事を求めない（1週間程度の余裕）"),
            ],
            [
                ("Netiquette", "Phép lịch sự trên mạng"),
                ("Bắt buộc", "Ghi tên/liên hệ mình & người nhận"),
                ("Cấm", "File bản quyền, đính kèm quá lớn"),
                ("An toàn", "Quét virus; xóa .exe/.vbs/.scr/.pif"),
                ("Lịch sự", "Không đòi trả lời gấp"),
            ],
        )
    elif "法律" in t or "知的" in t:
        setv(
            "Pháp luật & sở hữu trí tuệ",
            "Copy số không hao mòn dễ dàng, nhưng không phải muốn làm gì cũng được. Sở hữu trí tuệ được luật bảo vệ. "
            "Quyền tác giả (著作権) bảo hộ biểu đạt văn hóa: quyền nhân cách tác giả, quyền tài sản tác giả, quyền liền kề. "
            "Phát sinh tự động khi sáng tạo (không cần đăng ký). "
            "Sở hữu công nghiệp (工業所有権) bảo hộ tiến bộ kỹ thuật: patent (特許=kỹ thuật mới), utility model (実用新案=cải tiến), design (意匠=thiết kế), trademark (商標=tên/logo). "
            "Trang web còn liên quan chân dung, phát sóng, giữ tính đồng nhất…",
            [
                ("著作権", "思想・感情の創作的表現。創作時点で自動発生。人格権・財産権・隣接権"),
                ("工業所有権", "技術の進歩を保護：特許・実用新案・意匠・商標"),
                ("特許権", "新規技術を保護（VN: Quyền sáng chế）"),
                ("意匠権", "製品デザイン"),
                ("商標権", "社名・ロゴなど"),
            ],
            [
                ("Bản quyền", "Bảo hộ biểu đạt sáng tạo; tự phát sinh khi tạo"),
                ("SHCN", "Patent, utility, design, trademark"),
                ("Patent", "Kỹ thuật mới"),
                ("Design", "Kiểu dáng sản phẩm"),
                ("Trademark", "Tên/logo"),
            ],
        )

    # ---- Ch3 mobile ----
    elif "世代" in t and ch_no == 3:
        setv(
            "Thế hệ điện thoại di động",
            "IT = Information Technology (cũng gọi ICT khi nhấn mạng). "
            "Điện thoại di động Nhật từ 1985 (shoulder phone NTT), chia thế hệ theo bước nhảy kỹ thuật. "
            "1G: analog — sóng thoại đưa thẳng lên sóng radio; hiệu dụng phổ kém, chất lượng thấp, dễ nghe lén. "
            "2G (~1992, mova…): digital — thoại tốt hơn, bảo mật tốt hơn; sau đó tốc độ data chậm khi mail/i-mode tăng. "
            "3G (~2001, FOMA…): data nhanh hơn nhưng chưa đủ thoải mái broadband cho mọi nội dung. "
            "3.5G (~2006): nhanh hơn 3G, app mượt; 3.9G (WiMAX/LTE…) thiên về data PC. "
            "4G: terminal băng rộng, nhiều ứng dụng, đổi phương thức truyền linh hoạt (theo sách thời điểm biên soạn).",
            [
                ("第1世代", "アナログ。音声波をそのまま電波に。音質悪・盗聴リスク"),
                ("第2世代(~1992)", "デジタル。音質・秘話性向上（mova等）"),
                ("第3世代(~2001)", "高速データ（FOMA等）。動画送受信可"),
                ("第3.5世代(~2006)", "より高速。アプリ快適"),
                ("第3.9/4世代", "WiMAX/LTE等／ブロードバンド前提の情報端末"),
            ],
            [
                ("1G", "Analog: thoại → radio trực tiếp"),
                ("2G", "Digital: thoại & bảo mật tốt hơn"),
                ("3G", "Data cao tốc, video…"),
                ("3.5G", "Nhanh hơn, app mượt"),
                ("3.9/4G", "WiMAX/LTE; terminal băng rộng"),
            ],
        )
    elif t == "通信" and ch_no == 3:
        setv(
            "Truyền tin trên di động",
            "Thuê bao qua nhà mạng (NTT Docomo, au, SoftBank…). "
            "SIM (Subscriber Identity Module) là thẻ IC ghi số thuê bao. "
            "Trước đây Nhật khóa SIM theo mô hình giá máy rẻ; dần cho chuyển máy theo chuẩn quốc tế; au khác chuẩn nên hạn chế. "
            "Ngoài thoại: hồng ngoại đổi danh thiếp, Bluetooth tai nghe, Wi-Fi hotspot, Skype… ranh giới thoại–Internet mỏng dần.",
            [
                ("SIMカード", "契約者番号を記録するICカード"),
                ("通信キャリア", "NTTドコモ、au、ソフトバンクなど"),
                ("その他通信", "赤外線・Bluetooth・Wi-Fi・Skype 等"),
            ],
            [
                ("SIM", "IC ghi số thuê bao"),
                ("Nhà mạng", "Docomo, au, SoftBank…"),
                ("Khác", "IrDA, BT, Wi-Fi, Skype…"),
            ],
        )
    elif "ハードウェア" in t and ch_no == 3:
        setv(
            "Phần cứng di động",
            "Màn hình LCD: điều khiển sáng bằng hai tấm phân cực + phân tử tinh thể lỏng; ít tốn điện, bền. "
            "Còn OLED, SED… Touch panel: resistive đo điện trở dọc/ngang khi nhấn; capacitive đo điện tích ngón tay–cảm biến (đa chạm). "
            "Camera CMOS: cảm biến ánh sáng + khuếch đại, tiết kiệm điện (nhiều nhiễu hơn CCD, cần xử lý ảnh).",
            [
                ("液晶", "偏光板＋液晶で透過/遮断。低消費電力"),
                ("抵抗膜方式", "押した位置の縦横抵抗値を測定"),
                ("静電容量方式", "指先とセンサ間の電荷を測定。マルチタッチ向き"),
                ("CMOSセンサ", "光の強弱を記録する素子＋増幅器。省電力"),
            ],
            [
                ("LCD", "Phân cực + LCD; tiết kiệm điện"),
                ("Resistive", "Đo điện trở khi nhấn"),
                ("Capacitive", "Đo điện tích; multi-touch"),
                ("CMOS", "Cảm biến sáng + khuếch đại"),
            ],
        )
    elif "ソフトウェア" in t and ch_no == 3:
        setv(
            "Phần mềm di động",
            "Từ ‘Galapagos phone’ (chỉ nội địa) sang chuẩn quốc tế nhờ smartphone. "
            "OS quyết định app dùng được: iOS, Android, Windows Phone, Symbian… Cùng OS thì app dùng chung nhiều máy. "
            "Cạnh tranh share OS ↔ hệ sinh thái app.",
            [
                ("OS例", "iOS / Android / Windows Phone / Symbian"),
                ("要点", "OSが同じならアプリを共通利用しやすい"),
            ],
            [
                ("Ví dụ OS", "iOS, Android…"),
                ("Điểm chính", "Cùng OS → app dùng chung dễ hơn"),
            ],
        )
    elif t == "放送" or "放送" in t and ch_no == 3:
        setv(
            "Phát sóng (1seg / số hóa)",
            "Nhiều máy có TV one-seg: phát sóng số mặt đất cùng nội dung trên màn nhỏ (simultaneous broadcast). "
            "Phổ tần là tài nguyên khan hiếm (beacon, tàu, máy bay, radio, cứu hỏa, radar, vệ tinh…) do nhà nước quản. "
            "Chuyển số hóa phải tắt analog để tái sử dụng phổ. "
            "HDTV cần nhiều thông tin hơn analog; quản theo segment: analog 4 segment/kênh, HD 12 segment; 1 segment dành mobile = one-seg (1/12 HD, 1/4 analog).",
            [
                ("ワンセグ", "地上デジタルと同内容を小画面で。1セグメント放送"),
                ("セグメント", "放送に必要な電波領域の単位。HDは12、ワンセグは1"),
                ("電波", "限りある資源。国が厳しく管理"),
            ],
            [
                ("One-seg", "TV số trên di động (1 segment)"),
                ("Segment", "Đơn vị băng tần phát sóng"),
                ("Phổ tần", "Tài nguyên khan; nhà nước quản"),
            ],
        )

    # ---- Ch4 connection ----
    elif "有線" in t:
        setv(
            "Kết nối có dây",
            "CATV dùng băng dư truyền hình cáp → data nhanh. "
            "ADSL = Asymmetric Digital Subscriber Line: bất đối xứng, download > upload, dùng dây điện thoại sẵn, rẻ nhưng càng xa tổng đài càng chậm/nhiễu. "
            "IP phone gửi thoại dạng gói qua ADSL/FTTH; khác Skype (miễn phí, tự chịu rủi ro). VoIP gateway + router + packet. "
            "FTTH = Fiber To The Home: cáp quang về nhà, ổn định, ~100 Mbps (theo giáo trình), giải last-mile. "
            "PLC = Power Line Communication: data qua dây điện 100V (cần adapter).",
            [
                ("CATV", "ケーブルテレビ余帯域を通信に利用。高速"),
                ("ADSL", "Asymmetric Digital Subscriber Line。下り＞上り。電話線。距離で速度低下"),
                ("FTTH", "Fiber To The Home。光ファイバ。約100Mbps。ラストワンマイル解決"),
                ("PLC", "電灯線(100V)でデータ通信"),
                ("IP電話", "音声をIPパケットとして送受信"),
            ],
            [
                ("CATV", "Dùng băng dư TV cáp"),
                ("ADSL", "Bất đối xứng; dây điện thoại"),
                ("FTTH", "Cáp quang về nhà ~100Mbps"),
                ("PLC", "Qua dây điện 100V"),
                ("IP phone", "Thoại dạng gói IP"),
            ],
        )
    elif "無線" in t:
        setv(
            "Kết nối không dây",
            "IrDA: hồng ngoại; bị che là mất; tầm ngắn. "
            "IC không tiếp xúc: Suica… chip+anten, nguồn từ đầu đọc; RFID gắn hàng. "
            "Bluetooth: sóng radio (~2.4GHz), ~10m, ~1Mbps; tai nghe, chuột, điện thoại… — không phải hồng ngoại. "
            "Wi-Fi = Wireless Fidelity, tên gọi WLAN IEEE802.11a/b/g/n; hotspot tiện nhưng cần mã hóa đúng.",
            [
                ("IrDA", "赤外線。遮蔽物があると不可。近距離"),
                ("非接触IC", "Suica等。RFID関連"),
                ("Bluetooth", "電波。約10m・約1Mbps。赤外線ではない"),
                ("Wi-Fi", "Wireless Fidelity。無線LANの愛称"),
            ],
            [
                ("IrDA", "Hồng ngoại; cần tầm nhìn"),
                ("IC không tiếp xúc", "Suica; RFID"),
                ("Bluetooth", "Sóng radio ~10m"),
                ("Wi-Fi", "Tên gọi WLAN"),
            ],
        )

    # ---- Ch5 network ----
    elif "コンピュータネットワーク" in t or t == "コンピュータネットワーク":
        setv(
            "Mạng máy tính",
            "Mạng = các thiết bị điện tử gửi/nhận data (PC, điện thoại, máy in, game…). "
            "LAN = mạng cục bộ (trường/công ty); WAN = mạng diện rộng. Ranh giới không luôn rõ; quản trị viên đi bộ kiểm tra thiết bị được thường gọi là LAN.",
            [
                ("LAN", "Local Area Network。局所ネットワーク"),
                ("WAN", "Wide Area Network。広域ネットワーク"),
            ],
            [
                ("LAN", "Mạng cục bộ"),
                ("WAN", "Mạng diện rộng"),
            ],
        )
    elif t == "インターネット" and ch_no == 5:
        setv(
            "Internet",
            "Internet = ‘mạng của các mạng’ (inter + network), nối các WAN thành lưới toàn cầu. "
            "Dùng: web, email, FTP, remote… WWW = World Wide Web — mạng nhện: ai cũng phát/nhận, không chỉ một trung tâm.",
            [
                ("インターネット", "ネットワークを結んだネットワーク"),
                ("WWW", "World Wide Web。世界中に広がるクモの巣状の情報網"),
            ],
            [
                ("Internet", "Mạng của các mạng"),
                ("WWW", "Mạng nhện thông tin toàn cầu"),
            ],
        )
    elif "形態" in t:
        setv(
            "Hình thái mạng",
            "Bus: nhiều máy chung 1 cáp; dễ đụng độ, ít dùng. "
            "Star: qua hub/switch trung tâm; dễ mở rộng, phổ biến nhất. "
            "Ring: vòng khép kín; một máy hỏng ảnh hưởng lan.",
            [
                ("バス型", "1本ケーブル共有。衝突しやすく現在少ない"),
                ("スター型", "ハブ中心。最もよく使われる"),
                ("リング型", "環状。1台故障の影響大"),
            ],
            [
                ("Bus", "Chung 1 cáp; dễ xung đột"),
                ("Star", "Qua hub; phổ biến nhất"),
                ("Ring", "Vòng; 1 máy hỏng ảnh hưởng lớn"),
            ],
        )
    elif "構成" in t and ch_no == 5:
        setv(
            "Cấu hình xử lý mạng",
            "Tập trung: host làm hết xử lý, terminal chỉ I/O — dễ quản trị/bảo mật. "
            "Phân tán: nhiều máy chia tải — tin cậy hơn khi 1 máy hỏng. "
            "P2P: các máy ngang hàng cung cấp dịch vụ cho nhau. "
            "Client/Server: server cung cấp (mail/web/file…), client nhận. "
            "Mật kết hợp (密結合): nhiều bộ xử lý chia sẻ bộ nhớ. Lỏng (疎結合): mỗi bộ xử lý nhớ riêng.",
            [
                ("集中処理", "ホストが全処理。端末は入出力のみ"),
                ("分散処理", "複数コンピュータで処理分担"),
                ("P2P", "対等にサービスを提供しあう"),
                ("クライアント/サーバ", "提供側＝サーバ、利用側＝クライアント"),
                ("密結合 / 疎結合", "メモリ共有で並列 / 独立メモリで並列"),
            ],
            [
                ("Tập trung", "Host xử lý hết"),
                ("Phân tán", "Nhiều máy chia xử lý"),
                ("P2P", "Ngang hàng"),
                ("C/S", "Server cung cấp, client dùng"),
                ("Tight/Loose", "Chia sẻ RAM / RAM riêng"),
            ],
        )
    elif "ネットワークセキュリティ" in t or ("セキュリティ" in t and ch_no == 5):
        setv(
            "Bảo mật mạng",
            "Server chứa thông tin quan trọng cần bảo vệ khi nối Internet. "
            "Firewall đặt giữa mạng trong và Internet, lọc ai được dùng dịch vụ nào — cài rồi vẫn cần cấu hình đúng. "
            "Windows firewall chủ yếu chặn từ ngoài, yếu với tấn công trong LAN. "
            "Server công khai (web) đặt DMZ (vùng đệm); không để thông tin mật tổ chức trên web public.",
            [
                ("ファイアウォール", "内部網とInternetの間で不正アクセスを制御"),
                ("DMZ", "公開サーバ用の緩衝地帯（非武装地帯）"),
            ],
            [
                ("Firewall", "Lọc truy cập giữa trong/ngoài"),
                ("DMZ", "Vùng đệm cho server public"),
            ],
        )

    # ---- Ch6 OSI ----
    elif "プロトコル" in t:
        setv(
            "Giao thức & OSI",
            "Chỉ nối dây chưa đủ để trao đổi tin — cần chuẩn quốc tế. "
            "OSI (Open System Interconnection) định nghĩa mô hình 7 tầng. "
            "Protocol = quy ước truyền data. "
            "Ví dụ: tầng vật lý (volt, đầu nối); HTTP ở tầng ứng dụng; TCP tầng transport; IP tầng network — cốt lõi Internet.",
            [
                ("プロトコル", "データ転送の規約"),
                ("OSI", "7層モデルを定義する国際標準の枠組み"),
                ("例", "HTTP(アプリ) / TCP(トランスポート) / IP(ネットワーク)"),
            ],
            [
                ("Protocol", "Quy ước truyền dữ liệu"),
                ("OSI", "Mô hình 7 tầng"),
                ("Ví dụ", "HTTP / TCP / IP"),
            ],
        )
    elif "ドメイン" in t or "IP アドレス" in t or "IPアドレス" in t:
        setv(
            "IP và tên miền",
            "IP address = ‘địa chỉ số’ của máy theo IP (vd 133.43.251.1), khó nhớ. "
            "Domain name dễ nhớ (daigaku.ac.jp); DNS đổi domain ↔ IP. "
            ".co.jp công ty Nhật, .ac.jp trường Nhật; .com không mã quốc gia = Mỹ. "
            "IPv6 mở rộng không gian địa chỉ (32→128 bit). "
            "URL chỉ định vị trí dịch vụ/file trên Internet. IP không dễ nhớ — dùng domain.",
            [
                ("IPアドレス", "コンピュータの住所番号。数字列で覚えにくい"),
                ("ドメイン名", "分かりやすい名前。DNSが変換"),
                (".com", "国名なし＝アメリカのドメイン"),
                ("URL", "Internet上の資源の場所を特定する記述"),
            ],
            [
                ("IP", "Số địa chỉ máy; khó nhớ"),
                ("Domain", "Tên dễ nhớ; DNS đổi sang IP"),
                (".com", "Không mã QG → Mỹ"),
                ("URL", "Mô tả vị trí tài nguyên"),
            ],
        )
    elif "インターネット情報の流れ" in t or (ch_no == 6 and "流れ" in t):
        setv(
            "Luồng thông tin trên Internet",
            "Kết nối Internet qua ISP (provider): chỉ trả đoạn nhà → access point; phía sau ‘gầu chuyền’ (bucket relay) nên khoảng cách không đổi cước. "
            "Mail/web đi qua server/router trung gian; có thể có proxy (máy đệm). "
            "Admin kỹ thuật có thể xem log — email Internet an toàn như bưu thiếp, không như thư kín; tin mật cần mã hóa.",
            [
                ("ISP", "Internet Service Provider。プロバイダ"),
                ("バケツリレー", "隣接装置へ順に転送。距離で料金が変わらない理由"),
                ("プロキシ", "一度見たHPを保存し経路短縮"),
                ("安全性", "ハガキ程度。秘密は暗号化が必要"),
            ],
            [
                ("ISP", "Nhà cung cấp Internet"),
                ("Bucket relay", "Chuyển tiếp từng chặng"),
                ("Proxy", "Cache trang, rút ngắn đường"),
                ("An toàn", "Như bưu thiếp; mật → mã hóa"),
            ],
        )
    elif t == "HTML" or "HTML" == t:
        setv(
            "HTML",
            "HTML = Hyper Text Markup Language: mô tả loại chữ, bố cục, ảnh, video, âm thanh, liên kết… bằng thẻ <…>. "
            "Cấu trúc: html > head (meta/title) + body (nội dung). HTML5 thêm media/đồ họa. "
            "Thường tách nội dung (X)HTML và trang trí bằng CSS.",
            [
                ("HTML", "Hyper Text Markup Language。文字・配置・画像・動画・音・リンクを記述"),
                ("タグ", "<html>…</html> などで範囲指定"),
                ("CSS", "見た目を分離して定義"),
            ],
            [
                ("HTML", "Ngôn ngữ đánh dấu siêu văn bản"),
                ("Tag", "Đánh dấu bằng <…>"),
                ("CSS", "Tách phần trình bày"),
            ],
        )
    elif t == "XML" or "XML" in t and len(t) < 10:
        setv(
            "XML",
            "XML = eXtensible Markup Language: mở rộng cách dùng thẻ; user tự định nghĩa thẻ (khác HTML có sẵn bộ thẻ). "
            "Phù hợp trao đổi dữ liệu có cấu trúc, kết hợp CGI/JS, Web-EDI…",
            [
                ("XML", "eXtensible Markup Language。ユーザが独自タグを定義できる"),
                ("HTMLとの差", "HTMLは用意されたタグ中心／XMLは自由定義"),
            ],
            [
                ("XML", "Cho phép tự định nghĩa thẻ"),
                ("Khác HTML", "HTML bộ thẻ cố định hơn"),
            ],
        )

    # ---- Ch7 business ----
    elif "電子商取引" in t and "標準" not in t:
        setv(
            "Thương mại điện tử",
            "EC/e-commerce = điện tử hóa quy trình giao dịch (đặt hàng, thanh toán, giao hàng, cả phát triển SP). "
            "Phân loại BtoB, BtoC, CtoC, BtoG… Mọi phía đều cần bảo mật/mã hóa khi giao dịch.",
            [
                ("電子商取引", "eコマース。取引プロセスの電子化"),
                ("分類", "BtoB / BtoC / CtoC など"),
            ],
            [
                ("E-commerce", "Số hóa quy trình giao dịch"),
                ("Phân loại", "B2B, B2C, C2C…"),
            ],
        )
    elif "標準化" in t or t.startswith("電子商取引情報"):
        setv(
            "Chuẩn hóa thông tin TMĐT",
            "EDI: chuẩn trao đổi dữ liệu điện tử (đặt hàng, thanh toán, giao…) — Web-EDI dùng web/XML. "
            "EOS: hệ thống đặt hàng online 24/7, khoảng cách không còn là rào. "
            "POS: dữ liệu bán tại quầy realtime. "
            "CALS: chuẩn hóa điện tử hóa toàn bộ vòng đời sản xuất (tài liệu, bản vẽ, giao dịch).",
            [
                ("EDI", "Electronic Data Interchange。電子データ交換の標準化"),
                ("EOS", "Electronic Ordering System。オンライン受発注"),
                ("POS", "販売時点情報管理"),
                ("CALS", "製造過程全体の電子化標準"),
            ],
            [
                ("EDI", "Chuẩn trao đổi dữ liệu điện tử"),
                ("EOS", "Đặt hàng online"),
                ("POS", "Dữ liệu bán tại điểm bán"),
                ("CALS", "Chuẩn hóa toàn bộ sản xuất"),
            ],
        )
    elif "電子マネー" in t:
        setv(
            "Tiền điện tử",
            "Có dạng thẻ IC, Internet, hoặc kết hợp. "
            "Closed-loop (VISA Cash…): value chỉ quay trong hệ thống đóng, cửa hàng gửi value về tổ chức để chuyển khoản. "
            "Open-loop (Mondex…): value đổi ra tiền, lưu thông như tiền mặt, ẩn danh hơn.",
            [
                ("クローズドループ", "限られた店と客の間でバリューが流通（VISAキャッシュ等）"),
                ("オープンループ", "現金化・再流通が可能（Mondex等）"),
            ],
            [
                ("Closed-loop", "Value chỉ trong hệ khép kín"),
                ("Open-loop", "Đổi tiền/lưu thông rộng"),
            ],
        )
    elif "顧客" in t:
        setv(
            "Quản lý khách hàng",
            "Cookie giúp trình duyệt nhớ ID site, lần sau tự nhận. "
            "CRM dùng thông tin khách để cá nhân hóa marketing. "
            "Data mining rút xu hướng từ dữ liệu lớn.",
            [
                ("Cookie", "ブラウザがサイトのID情報を記憶"),
                ("CRM", "顧客関係管理。きめ細かいサービスで収益"),
                ("データマイニング", "大量データから統計的に知見を抽出"),
            ],
            [
                ("Cookie", "Trình duyệt nhớ ID website"),
                ("CRM", "Quản trị quan hệ khách hàng"),
                ("Data mining", "Khai phá dữ liệu"),
            ],
        )
    elif "個人情報" in t:
        setv(
            "Bảo vệ thông tin cá nhân",
            "Máy tính + mạng làm dễ copy/rò rỉ dữ liệu khách → luật bảo vệ thông tin cá nhân. "
            "OECD 8 nguyên tắc (mục đích rõ, hạn chế sử dụng, hạn chế thu thập, chất lượng dữ liệu, an toàn, công khai, tham gia cá nhân, trách nhiệm) — không có ‘sử dụng vô hạn’. "
            "Scavenging = thu thập thông tin cá nhân còn sót (file xóa, bộ nhớ, lịch sử phím…).",
            [
                ("OECD8原則", "目的明確化・利用制限・収集制限・データ内容・安全保護・公開・個人参加・責任"),
                ("誤り", "利用無制限の原則は存在しない"),
                ("スカベンジング", "残された個人情報を収集する犯罪"),
            ],
            [
                ("OECD 8", "8 nguyên tắc bảo vệ dữ liệu cá nhân"),
                ("Sai", "Không có nguyên tắc sử dụng vô hạn"),
                ("Scavenging", "Thu thập thông tin còn sót"),
            ],
        )

    # ---- Ch8 crypto ----
    elif "古典的暗号" in t or (ch_no == 8 and "暗号" in t and "最近" not in t and "SSL" not in t and "共通" not in t and "公開" not in t):
        if "古典" in t or "導入" in t or True:
            pass
    if "古典的暗号" in t:
        setv(
            "Mã hóa cổ điển",
            "Mã hóa = biến đổi để không đoán được bản gốc; giải mã = trả về bản gốc. "
            "Caesar: dịch ký tự N vị trí (thay thế). "
            "Hoán vị (転置): đổi thứ tự ký tự (Scytale quấn ruy-băng quanh trụ).",
            [
                ("暗号化", "原文が推測できないように変換"),
                ("復号化", "原文に戻すこと"),
                ("シーザー暗号", "文字をN文字ずらす換字式"),
                ("転置式", "文字の並び順を入れ替えて暗号化"),
            ],
            [
                ("Mã hóa", "Biến đổi không đoán được gốc"),
                ("Giải mã", "Trả về bản gốc"),
                ("Caesar", "Dịch N ký tự"),
                ("Hoán vị", "Đổi thứ tự ký tự"),
            ],
        )
    elif "最近の暗号" in t:
        setv(
            "Mã hóa hiện đại",
            "Mã hóa xem như hàm y = f(x, k) với x bản gốc, k khóa, y bản mã. "
            "DES, RSA… dùng toán phức tạp (số ngẫu nhiên, phân tích thừa số…) — biết thuật toán vẫn khó phá nếu không có khóa trong thời gian thực tế.",
            [
                ("モデル", "y = f(x, k)（x=原文, k=鍵, y=暗号文）"),
                ("DES / RSA", "複雑な計算により鍵なしでは実用時間で解けない"),
            ],
            [
                ("Mô hình", "y=f(x,k)"),
                ("DES/RSA", "Khó phá nếu không có khóa"),
            ],
        )
    elif "共通鍵" in t or "公開鍵" in t:
        setv(
            "Khóa chung & khóa công khai",
            "Khóa chung/bí mật: hai bên dùng chung một khóa. "
            "Khóa công khai: khóa mã hóa công khai, khóa giải chỉ người nhận giữ — phổ biến trên Internet vì gửi khóa qua mạng không an toàn như bưu thiếp. "
            "Truyền mật: B gửi public key cho A → A mã hóa → chỉ B giải. "
            "Xác thực: A ký bằng private; ai cũng kiểm bằng public của A → chứng minh A đã gửi.",
            [
                ("共通鍵方式", "送受信で同じ鍵を共有"),
                ("公開鍵方式", "暗号化鍵を公開、復号鍵は秘密。主流"),
                ("秘密通信", "受信者の公開鍵で暗号化"),
                ("認証", "送信者の秘密鍵で暗号化し、公開鍵で検証"),
            ],
            [
                ("Symmetric", "Hai bên chung khóa"),
                ("Public-key", "Khóa mã hóa public; khóa giải secret"),
                ("Gửi mật", "Mã bằng public của người nhận"),
                ("Xác thực", "Ký bằng private người gửi"),
            ],
        )
    elif "SSL" in t:
        setv(
            "SSL / web authentication",
            "Khi nhập thông tin cá nhân: cần icon ổ khóa và https. "
            "SSL (Secure Socket Layer) kết hợp public-key + secret-key. "
            "Site lấy chứng chỉ từ CA (VeriSign…); trình duyệt dùng public key server để trao khóa phiên, sau đó dùng khóa phiên (symmetric) truyền tin.",
            [
                ("SSL", "Secure Socket Layer。公開鍵＋秘密鍵で暗号化通信"),
                ("確認", "錠アイコンと https"),
                ("認証局CA", "デジタル証明書を発行"),
            ],
            [
                ("SSL", "Truyền tin mã hóa hybrid"),
                ("Kiểm tra", "Ổ khóa + https"),
                ("CA", "Cấp chứng chỉ số"),
            ],
        )

    # ---- Ch9 security ----
    elif t == "事故" or (ch_no == 9 and "事故" in t):
        setv(
            "Sự cố",
            "Hỏng phần cứng hay gặp ở HDD/CD có chuyển động; tránh bụi, sốc, sét/mất điện → backup quan trọng. "
            "USB/SD hạn chế số lần ghi; CD-R sợ ánh sáng. "
            "Ngoài hỏng hóc: bug phần mềm; cần cập nhật OS/browser/mail/driver — để lâu thành mục tiêu virus.",
            [
                ("ハードウェア故障", "可動部のあるHDD等。バックアップが重要"),
                ("プログラムミス", "バグ。OS等は放置すると攻撃対象"),
            ],
            [
                ("Hỏng HW", "HDD…; cần backup"),
                ("Bug", "Cập nhật phần mềm thường xuyên"),
            ],
        )
    elif "ウィルス" in t or "ウイルス" in t:
        setv(
            "Virus máy tính",
            "Virus = chương trình do người tạo, quá trình giống virus sinh học: lây → ủ → phát bệnh. "
            "Đường lây: USB, mail, web. Worm tự nhân bản (đôi khi gộp gọi virus). "
            "Hậu quả: hiện thông báo, đánh cắp, phá file, không khởi động… "
            "Phòng: antivirus + cập nhật pattern hàng ngày. Spam có thể dùng address book bị đánh cắp.",
            [
                ("ウィルス", "人為的プログラム。感染→潜伏→発病"),
                ("ワーム", "独立に増殖するタイプ"),
                ("対策", "ワクチンソフト＋パターンファイル更新"),
            ],
            [
                ("Virus", "Chương trình nhân tạo: lây→ủ→phát"),
                ("Worm", "Tự nhân bản"),
                ("Phòng", "AV + cập nhật mẫu nhận diện"),
            ],
        )
    elif "サーバに対する攻撃" in t:
        setv(
            "Tấn công server",
            "Server tổ chức là mục tiêu. Mật khẩu yếu/ bị lộ → xâm nhập, lấy cấu hình, dữ liệu. "
            "Stepping stone: dùng máy bị chiếm làm bàn đạp tấn công nơi khác. "
            "DoS: gửi mail/truy cập ồ ạt làm tê liệt dịch vụ.",
            [
                ("不正侵入", "パスワード等から侵入し情報を盗む"),
                ("踏み台", "他組織攻撃の足場にされる"),
                ("DoS", "大量アクセスで使用不能にする攻撃"),
            ],
            [
                ("Xâm nhập", "Qua mật khẩu yếu…"),
                ("Bàn đạp", "Dùng máy chiếm để tấn công tiếp"),
                ("DoS", "Từ chối dịch vụ"),
            ],
        )
    elif "パスワード" in t and ch_no == 9:
        setv(
            "Đánh cắp mật khẩu & lưu ý",
            "Trojan giả màn hình login ghi user/pass. "
            "Phishing: mail giả ngân hàng + web giả. "
            "Scavenging: moi thông tin còn sót. "
            "Password: tránh tên, ngày sinh, SĐT, từ điển; nên dài, trộn chữ hoa/thường/ký hiệu; đổi định kỳ. "
            "Mail lạ + .exe/.vbs/.scr/.pif → xóa ngay. Cập nhật browser/OS/AV.",
            [
                ("トロイの木馬", "偽の入力画面でパスワード窃盗"),
                ("フィッシング", "偽サイトで番号詐取"),
                ("スカベンジング", "残留情報の収集"),
                ("危険な拡張子", ".exe / .vbs / .scr / .pif は即削除"),
                ("弱いパスワード", "氏名・電話番号・辞書語など"),
            ],
            [
                ("Trojan", "Giả màn hình lấy mật khẩu"),
                ("Phishing", "Web/mail giả"),
                ("Scavenging", "Moi dữ liệu sót"),
                ("File nguy hiểm", "Xóa .exe/.vbs/.scr/.pif"),
                ("Password yếu", "Tên, SĐT, từ điển…"),
            ],
        )
    elif "利用上の注意" in t:
        setv(
            "Lưu ý khi sử dụng",
            "Mail: không mở từ lạ; xóa .exe/.vbs/.scr/.pif. "
            "Browser: site kém tin cậy; chỉ gửi thông tin nhạy cảm khi SSL. "
            "AV: cập nhật pattern ≥ 1 tuần/lần nếu thủ công. "
            "Windows Update OS/mail/browser/driver. "
            "Mọi file từ Internet/USB/CD phải quét trước khi mở.",
            [
                ("メール", "知らない送信者は削除。危険拡張子は即削除"),
                ("ブラウザ", "SSLなしで機密を送らない。最新版を使う"),
                ("更新", "OS・ソフトを常に最新に"),
            ],
            [
                ("Mail", "Xóa mail lạ & file nguy hiểm"),
                ("Browser", "Chỉ gửi secret qua SSL"),
                ("Update", "Giữ OS/app luôn mới"),
            ],
        )
    elif "安全性評価" in t or "稼働" in body[:80]:
        setv(
            "Đánh giá an toàn hệ thống",
            "Thiết bị cơ thường theo đường bathtub (hỏng đầu–ổn–già). "
            "Phần mềm: lỗi nhiều đầu rồi giảm; đường tin cậy tăng dạng chữ S (累積エラー). "
            "Availability = MTBF/(MTBF+MTTR). MTBF = thời gian trung bình giữa 2 lần hỏng; MTTR = thời gian sửa TB. "
            "Nối tiếp: A×B. Song song: 1−(1−A)(1−B). Kết hợp: nhân các khối.",
            [
                ("信頼度成長曲線", "累積エラーはS字曲線"),
                ("稼働率", "MTBF / (MTBF + MTTR)"),
                ("直列", "A × B"),
                ("並列", "1 − (1−A)×(1−B)"),
            ],
            [
                ("Đường S", "Lỗi tích lũy dạng S"),
                ("Availability", "MTBF/(MTBF+MTTR)"),
                ("Series", "A×B"),
                ("Parallel", "1−(1−A)(1−B)"),
            ],
        )

    # ---- Ch10 structure ----
    elif "構成要素" in t:
        setv(
            "5 thành phần máy tính",
            "Máy tính gồm: thiết bị tính toán (ALU — CPU đảm nhiệm), thiết bị nhớ (RAM/HDD…), thiết bị điều khiển (cũng trong CPU), "
            "thiết bị vào (bàn phím/chuột), thiết bị ra (màn hình/máy in).",
            [
                ("5要素", "演算・記憶・制御・入力・出力"),
                ("演算装置", "計算処理。CPUが担う"),
                ("入力 / 出力", "KB・マウス / ディスプレイ・プリンタ"),
            ],
            [
                ("5 phần", "Tính toán, nhớ, điều khiển, vào, ra"),
                ("ALU", "Tính toán — trong CPU"),
                ("I/O", "Bàn phím–chuột / màn–in"),
            ],
        )
    elif "内部構成" in t or "パソコンの内部" in t:
        setv(
            "Cấu tạo bên trong PC",
            "Motherboard = bo mạch chính diện tích lớn nhất. CPU (Central Processing Unit) có quạt/tản nhiệt — trung tâm xử lý, còn gọi MPU; gồm ALU+control. "
            "Có thể có GPU rời. RAM là main memory. Bus = đường điện; chipset điều khiển data bus/thiết bị ngoài. "
            "HDD/SSD là bộ nhớ phụ; thiết bị ngoài qua USB… gọi peripheral.",
            [
                ("マザーボード", "最大面積のメイン基板"),
                ("CPU", "Central Processing Unit。処理の中心。MPUとも。演算＋制御"),
                ("バス / チップセット", "電気の通り道 / データ制御IC群"),
                ("主記憶 / 補助記憶", "メモリ / HDD など"),
            ],
            [
                ("Motherboard", "Bo mạch chính lớn nhất"),
                ("CPU", "Trung tâm xử lý (MPU)"),
                ("Bus/Chipset", "Đường truyền / IC điều khiển"),
                ("Main/Aux memory", "RAM / HDD…"),
            ],
        )
    elif "記憶装置の特徴" in t:
        setv(
            "Đặc điểm bộ nhớ",
            "Cache nhanh nhất, dung lượng nhỏ nhất; RAM vừa; HDD lớn nhưng chậm (cơ). "
            "Tốc độ truy cập và dung lượng thường tỷ lệ nghịch. Cache gần CPU nhất.",
            [
                ("キャッシュ", "アクセス速度が最も高速。容量小"),
                ("メモリ", "中間的な速度・容量"),
                ("ハードディスク", "大容量だが機械的で遅い"),
            ],
            [
                ("Cache", "Nhanh nhất, ít dung lượng"),
                ("RAM", "Trung gian"),
                ("HDD", "Lớn nhưng chậm hơn"),
            ],
        )
    elif "半導体メモリ" in t or t == "半導体メモリ":
        setv(
            "Bộ nhớ bán dẫn",
            "RAM = Random Access Memory: đọc/ghi tự do, mất khi tắt nguồn (DRAM rẻ cần refresh; SRAM nhanh dùng cache). "
            "VRAM nhớ ảnh màn hình. "
            "ROM = Read Only Memory: chỉ đọc, dùng khởi động hệ thống; flash cũng họ ROM. "
            "Memory = dãy ô 0/1 có địa chỉ.",
            [
                ("RAM", "Random Access Memory。読み書き自由。電源切で消える"),
                ("ROM", "Read Only Memory。読み取り専用（Bộ nhớ chỉ đọc）"),
                ("DRAM / SRAM", "安価だが再読み込み要 / 高速でキャッシュ向け"),
            ],
            [
                ("RAM", "Đọc ghi tự do; mất khi tắt"),
                ("ROM", "Chỉ đọc"),
                ("DRAM/SRAM", "Rẻ cần refresh / nhanh cho cache"),
            ],
        )
    elif t == "CPU" or (ch_no == 10 and t.strip() == "CPU"):
        setv(
            "CPU",
            "CPU/MPU thực thi instruction set (đọc ghi, cộng trừ, nhảy…). "
            "Bit width bus 32/64. Hoạt động theo clock (Hz); GHz cao thường nhanh hơn nếu cùng kiến trúc. "
            "Tăng clock tốn điện/nhiệt → xu hướng đa nhân. Đo bằng MIPS, FLOPS, benchmark.",
            [
                ("命令とクロック", "命令はクロック単位で実行。周波数(Hz)が高いほど高速（同一CPU比較）"),
                ("性能指標", "MIPS / FLOPS / ベンチマーク"),
            ],
            [
                ("Clock", "Lệnh chạy theo nhịp Hz"),
                ("Đo lường", "MIPS, FLOPS, benchmark"),
            ],
        )

    # ---- Ch11 CPU logic ----
    elif "論理素子の動作" in t:
        setv(
            "Nguyên lý phần tử logic",
            "Đèn điện tử: cho dòng một chiều. Diode p-n cũng một chiều (bán dẫn). "
            "Transistor = cấu trúc sandwich p-n-p/n-p-n; nhỏ, nhanh, ít nóng, rẻ hơn đèn. "
            "IC gói chục transistor; LSI hàng nghìn–triệu transistor trên silicon (khắc lớp p/n).",
            [
                ("ダイオード", "p型とn型。電流を一方通行に"),
                ("トランジスタ", "ダイオードを組み合わせた半導体スイッチ。小型・高速・低消費"),
                ("IC / LSI", "集積回路 / 大規模集積回路"),
            ],
            [
                ("Diode", "Dòng một chiều"),
                ("Transistor", "Công tắc bán dẫn; nhỏ, nhanh, ít điện"),
                ("IC/LSI", "Mạch tích hợp quy mô nhỏ/lớn"),
            ],
        )
    elif "チューリング" in body or (ch_no == 11 and ("CPU の動作" in t or t.strip() in ("CPUの動作", "CPU の動作"))):
        setv(
            "Hoạt động CPU",
            "Nguyên lý CPU dựa trên Turing machine: băng chia ô, đầu đọc/ghi, trạng thái trong — thao tác đơn giản lặp lại ra lời giải. "
            "Mô hình máy tự động theo input+state gọi là automaton.",
            [
                ("チューリングマシン", "CPU動作原理の基礎モデル"),
                ("オートマトン", "入力と内部状態に応じて出力する自動機械のモデル"),
            ],
            [
                ("Turing machine", "Mô hình nền tảng CPU"),
                ("Automaton", "Máy tự động theo input+state"),
            ],
        )
    elif "論理素子の歴史" in t:
        setv(
            "Lịch sử phần tử logic",
            "Máy tính điện tử chia 4 thế hệ theo phần tử logic: "
            "1) đèn điện tử (1940s) → 2) transistor (cuối 1950s) → 3) IC (1960s) → 4) LSI (1970s–).",
            [
                ("第1世代", "真空管"),
                ("第2世代", "トランジスタ"),
                ("第3世代", "IC（集積回路）"),
                ("第4世代", "LSI（大規模集積回路）"),
            ],
            [
                ("Gen 1", "Vacuum tube"),
                ("Gen 2", "Transistor"),
                ("Gen 3", "IC"),
                ("Gen 4", "LSI"),
            ],
        )
    elif "論理回路" in t:
        setv(
            "Mạch logic",
            "OR: công tắc song song — một ON là ra ON (OR logic). "
            "AND: nối tiếp — cả hai ON mới ON. "
            "NOT: đảo. Kết hợp AND/OR/NOT làm được mạch cộng 1 bit (kết quả + nhớ).",
            [
                ("OR", "スイッチ並列。少なくとも1つONで出力ON"),
                ("AND", "スイッチ直列。両方ONで出力ON"),
                ("NOT", "入力を反転"),
                ("加算", "AND/OR/NOTの組合せで1桁加算回路"),
            ],
            [
                ("OR", "Song song; một ON → ON"),
                ("AND", "Nối tiếp; cả hai ON → ON"),
                ("NOT", "Đảo bit"),
                ("Cộng", "Ghép cổng → mạch cộng 1 bit"),
            ],
        )

    # ---- Ch12 binary ----
    elif "基数" in t:
        setv(
            "Cơ số",
            "Máy tính dùng 2 trạng thái → hệ nhị phân (0,1). "
            "Còn hệ 8, 16 (0–9,a–f). Ví dụ 12₁₀ = 1100₂ = 14₈ = C₁₆.",
            [
                ("2進数", "0と1のみ。1の次は10"),
                ("8進 / 16進", "情報処理でよく使う"),
                ("例", "10進12 = 2進1100 = 16進C"),
            ],
            [
                ("Binary", "Chỉ 0 và 1"),
                ("Oct/Hex", "Hay dùng trong IT"),
                ("Ví dụ", "12 = 1100₂ = C₁₆"),
            ],
        )
    elif "変換" in t and ch_no == 12:
        setv(
            "Đổi nhị phân ↔ thập phân",
            "Nhị→thập: cộng 2^vị_trí với bit 1. Ví dụ 1100₂ = 8+4 = 12. "
            "Thập→nhị: chia 2 lấy dư, đọc dư từ dưới lên. "
            "Số thực: nhân/chia 2; nhiều số thập phân (0.1) thành nhị phân vô hạn → sai số làm tròn trên máy digital.",
            [
                ("2→10", "1のある桁の2の累乗を合計。1100₂=12₁₀"),
                ("10→2", "2で割り余りを下から読む"),
                ("丸め誤差", "0.1₁₀は2進で循環。小数は完全表現できない"),
            ],
            [
                ("2→10", "Tổng lũy thừa 2; 1100₂=12"),
                ("10→2", "Chia 2 lấy dư"),
                ("Sai số", "Số thực không luôn biểu diễn exact"),
            ],
        )
    elif "足し算" in t:
        setv(
            "Cộng nhiều chữ số",
            "Chỉ cần mạch cộng 1 bit + nhớ mang là cộng được số dài. "
            "Ví dụ 1+1 = 10₂ (ghi 0, mang 1).",
            [
                ("原理", "1桁加算＋桁上がり記憶の繰り返し"),
                ("1+1", "2進では 10（繰り上がり）"),
            ],
            [
                ("Nguyên lý", "Cộng 1 bit + nhớ mang"),
                ("1+1", "Bằng 10₂"),
            ],
        )
    elif "負" in t:
        setv(
            "Biểu diễn số âm",
            "Bit dấu: 0 dương, 1 âm. 1's complement đảo bit; 2's complement = đảo + 1 — chuẩn trong máy, biến trừ thành cộng.",
            [
                ("符号ビット", "0=正, 1=負"),
                ("2の補数", "負数表現の標準。引き算を足し算に"),
            ],
            [
                ("Sign bit", "0 dương, 1 âm"),
                ("Bù 2", "Chuẩn số âm; trừ = cộng"),
            ],
        )
    elif "かけ算" in t or "割り算" in t:
        setv(
            "Nhân và chia",
            "Nhân nhị phân = dịch bit + cộng lặp (giống nhân cột). "
            "Chia = trừ lặp / so sánh từng bước. "
            "Máy thực hiện bằng tổ hợp mạch cộng/trừ và dịch thanh ghi — không cần ‘bảng cửu chương’ như người.",
            [
                ("かけ算", "シフトと加算の繰り返しで実現"),
                ("割り算", "減算・比較の繰り返しで実現"),
            ],
            [
                ("Nhân", "Lặp dịch bit + cộng"),
                ("Chia", "Lặp trừ/so sánh"),
            ],
        )
    elif "数学関数" in t:
        setv(
            "Hàm toán học",
            "Hàm sin, log, căn… được xấp xỉ bằng chuỗi/bảng/lặp trên phần cứng hoặc thư viện. "
            "Kết quả có sai số làm tròn; không luôn ‘chính xác tuyệt đối’ dù máy tính.",
            [
                ("関数", "級数展開や反復計算などで近似"),
                ("注意", "丸め誤差がある"),
            ],
            [
                ("Hàm", "Xấp xỉ bằng chuỗi/lặp"),
                ("Lưu ý", "Có sai số làm tròn"),
            ],
        )

    # ---- Ch13 info ----
    elif t == "情報量" or (ch_no == 13 and "情報量" in t and "単位" not in t and "文字" not in t and "日本語" not in t):
        setv(
            "Lượng thông tin",
            "Trong xử lý thông tin, đo lượng thông tin khách quan (không xét ‘hữu ích’). "
            "Đơn vị nhỏ nhất: bit = binary digit — số bit tối thiểu để phân biệt các trạng thái. "
            "n bit phân biệt tới 2^n loại.",
            [
                ("bit", "情報量の最小単位。binary digit"),
                ("一般則", "2ⁿ種類を表すのに n bit"),
            ],
            [
                ("bit", "Đơn vị nhỏ nhất"),
                ("Quy tắc", "2ⁿ loại cần n bit"),
            ],
        )
    elif "単位" in t and ch_no == 13:
        setv(
            "Đơn vị lượng thông tin",
            "1 byte = 8 bit. KB/MB/GB… trong máy thường ×1024 (2^10), đôi khi ổ đĩa quảng cáo ×1000 — cần chú ý.",
            [
                ("1 byte", "8 bit"),
                ("1 KB", "1,024 byte（2¹⁰）"),
                ("1 GB", "1,024 MB"),
            ],
            [
                ("1 byte", "8 bit"),
                ("1 KB", "1024 byte"),
                ("1 GB", "1024 MB"),
            ],
        )
    elif "文字の情報量" in t:
        setv(
            "Lượng thông tin ký tự Latin",
            "Alphabet + số + ký hiệu + điều khiển ≈ 256 loại = 2^8 → 1 ký tự ASCII = 8 bit = 1 byte. "
            "Bảng mã ASCII chuẩn hóa. Mã xuống dòng khác nhau giữa Windows/Mac/Unix.",
            [
                ("英字1文字", "256種 → 8 bit = 1 byte（ASCII）"),
                ("ASCII", "文字と番号の対応を標準化"),
            ],
            [
                ("1 chữ Latin", "8 bit = 1 byte (ASCII)"),
                ("ASCII", "Chuẩn map ký tự–số"),
            ],
        )
    elif "日本語の情報量" in t:
        setv(
            "Lượng thông tin tiếng Nhật",
            "Hiragana/katakana/kanji rất nhiều; Unicode tiếng Nhật dùng 65,536 mã = 2^16 → 1 chữ = 16 bit = 2 byte — gấp đôi Latin cùng số ký tự.",
            [
                ("日本語1文字", "65,536種 → 16 bit = 2 byte"),
                ("比較", "同じ文字数でも英字の2倍の情報量"),
            ],
            [
                ("1 chữ Nhật", "16 bit = 2 byte"),
                ("So với Latin", "Gấp đôi dung lượng"),
            ],
        )
    elif "文字コード" in t:
        setv(
            "Bảng mã ký tự",
            "Máy chỉ lưu 0/1; bảng mã quyết định hiển thị. "
            "Anh: ASCII (EBCDIC trên mainframe). "
            "Nhật: JIS, Shift-JIS, EUC, Unicode (thống nhất ~2 byte/chữ). Sai bảng mã → lỗi font.",
            [
                ("文字コード", "数字と文字の対応表"),
                ("Unicode", "世界の文字を統一的に表す体系（多くは2byte/文字）"),
            ],
            [
                ("Charset", "Ánh xạ số ↔ ký tự"),
                ("Unicode", "Thống nhất đa ngôn ngữ"),
            ],
        )

    # ---- Ch14 multi ----
    elif "MIDI" in t:
        setv(
            "Thông tin nhạc MIDI",
            "MIDI = Musical Instrument Digital Interface: lệnh độ cao, độ dài, cường độ, pan, modulation… "
            "Chuẩn nối nhạc cụ điện tử. ≤256 loại lệnh → 8 bit = 1 byte/lệnh. "
            "Nhạc chuông điện thoại là dữ liệu mã nhạc (MIDI-like). "
            "Quiz: ‘phát nhạc chất lượng cao như audio’ với ringtone MIDI thường coi là không đúng (khác PCM).",
            [
                ("MIDI", "楽器演奏命令のデジタル規格。命令≤256種→8bit=1byte"),
                ("着信メロディ", "音楽用コードとして解釈。PCM高音質再生とは異なる"),
            ],
            [
                ("MIDI", "Lệnh nhạc số; 1 lệnh 8 bit"),
                ("Nhạc chuông", "Mã lệnh, không phải audio PCM"),
            ],
        )
    elif "音声情報" in t:
        setv(
            "Thông tin âm thanh",
            "Âm là sóng. Số hóa: lấy mẫu theo tần số (Hz) — CD 44.1 kHz; cao hơn thì trung thực hơn. "
            "Lượng tử hóa: chia biên độ thành bao nhiêu mức (nhiều mức → mịn hơn, data lớn hơn).",
            [
                ("サンプリング周波数", "1秒あたりの測定回数。CD=44.1kHz"),
                ("量子化数", "波の高さを何段階で表すか"),
            ],
            [
                ("Tần số lấy mẫu", "Lần/giây; CD 44.1kHz"),
                ("Lượng tử hóa", "Số mức biên độ"),
            ],
        )
    elif "静止画像" in t:
        setv(
            "Ảnh tĩnh",
            "Ảnh = lưới pixel. Nhiều pixel → mịn hơn. "
            "QVGA 320×240, VGA 640×480, SVGA 800×600, XGA 1024×768… "
            "RGB mỗi kênh 8 bit → 1 pixel = 24 bit = 3 byte. dpi dùng cho máy quét/in.",
            [
                ("VGA", "640×480"),
                ("RGB各8bit", "1画素=24bit=3byte"),
                ("dpi", "スキャナ/プリンタの解像度単位"),
            ],
            [
                ("VGA", "640×480"),
                ("RGB 8bit", "1 pixel = 3 byte"),
                ("dpi", "Độ phân giải scan/in"),
            ],
        )
    elif "動画像" in t:
        setv(
            "Ảnh động / video",
            "Video = chuỗi frame tĩnh × frame rate × thời gian. "
            "Phim ~24 fps; TV Nhật (NTSC) ~30 lần/giây. "
            "Không phải định dạng độc lập tách rời ảnh tĩnh.",
            [
                ("定義", "静止画×フレームレート×秒数"),
                ("映画 / 日本TV", "24回/秒 / 30回/秒"),
            ],
            [
                ("Định nghĩa", "Frame × fps × giây"),
                ("Phim / TV JP", "24 / 30 fps"),
            ],
        )

    # ---- Ch15 compress ----
    elif "通信の情報量" in t:
        setv(
            "Lượng tin truyền thông",
            "Tốc độ đo bằng bps (bit per second). ‘100 mega quang’ ≈ tối đa 100 Mbps. "
            "Broadband khoảng ≥100kbps–1Mbps; thấp hơn là narrowband.",
            [
                ("単位", "bps = bit per second"),
                ("ブロードバンド", "概ね100Kbps〜1Mbps以上"),
            ],
            [
                ("Đơn vị", "bps"),
                ("Broadband", "Khoảng ≥100kbps–1Mbps"),
            ],
        )
    elif "文字情報圧縮" in t:
        setv(
            "Nén văn bản",
            "Chuỗi ‘123’ dạng ASCII 3 byte; nếu hiểu là số nhị ≤127 có thể 7 bit — binary gọn hơn nhưng kém phổ quát. "
            "File nén thường .zip/.lzh/.gz.",
            [
                ("ASCII / バイナリ", "文字並び / 数値として表現。後者の方が小さくなりやすい"),
                ("拡張子", ".zip / .lzh / .gz など"),
            ],
            [
                ("ASCII/binary", "Binary thường nhỏ hơn"),
                ("Extension", ".zip, .lzh, .gz"),
            ],
        )
    elif "音声情報圧縮" in t:
        setv(
            "Nén âm thanh",
            "Dùng tính chất sóng: Fourier phân tích thành các sin tần số khác nhau. "
            "Tần số thấp = đặc tính lớn; cao = chi tiết. Bỏ bớt cao tần → nén mạnh (điện thoại). "
            "Nén ↔ chất lượng trade-off; nén mất mát có thể đổi âm sắc.",
            [
                ("フーリエ変換", "波を正弦波に分解"),
                ("要点", "音の波としての性質を使う。低周波＝大きな性質／高周波＝詳細"),
            ],
            [
                ("Fourier", "Phân tích thành sóng sin"),
                ("Ý chính", "Dùng tính chất sóng âm"),
            ],
        )
    elif "画像情報圧縮" in t:
        setv(
            "Nén ảnh",
            "Run-length: ghi màu + số pixel liên tiếp cùng màu — đơn giản; ảnh đổi màu liên tục có thể phình data. "
            "GIF (mẫu màu, ≤256 màu, animation đơn giản); JPEG (thống kê độ sáng/màu, lossy, ảnh thật tốt, nén mạnh dễ giả màu).",
            [
                ("ランレングス", "同じ色がいくつ並ぶかを記述。単純。色変化多いと逆に増えることも"),
                ("GIF / JPEG", "パターン圧縮／不可逆で写真向き"),
            ],
            [
                ("Run-length", "Ghi số pixel cùng màu"),
                ("GIF/JPEG", "Đồ họa đơn giản / ảnh thật lossy"),
            ],
        )
    elif "動画像情報圧縮" in t:
        setv(
            "Nén video",
            "MPEG kết hợp nén frame + ghi phần khác biệt giữa frame (差分). "
            "MP3 = MPEG1 Layer3 (audio). Có MPEG1/2/4…",
            [
                ("MPEG", "静止画圧縮＋差分記録"),
                ("MP3", "MPEG1 Layer3 の音声規格"),
            ],
            [
                ("MPEG", "Nén frame + sai phân"),
                ("MP3", "Audio MPEG1 L3"),
            ],
        )
    elif "誤り" in t:
        setv(
            "Phát hiện/sửa lỗi",
            "Nhiễu (sóng, tiếp xúc, sét…) gây bit sai. "
            "Parity: thêm bit để số bit 1 chẵn/lẻ; kiểm block. Cơ bản nhất để phát hiện lỗi.",
            [
                ("パリティチェック", "パリティビットで1の個数の偶奇を合わせ誤り検出"),
            ],
            [
                ("Parity", "Thêm bit chẵn/lẻ để dò lỗi"),
            ],
        )

    # ---- Ch16 OS ----
    elif "オペレーティングシステムとは" in t or (ch_no == 16 and "とは" in t):
        setv(
            "OS là gì",
            "OS (Windows, macOS, Linux…) là phần mềm cơ bản nằm giữa app và phần cứng. "
            "App viết cho từng OS. "
            "System software gồm OS, BIOS (khởi động nạp OS), middleware (DBMS, tool dev…).",
            [
                ("OS", "アプリとハードの仲介。基本ソフト"),
                ("BIOS", "起動時にOSをメモリへ載せる最低限の制御"),
                ("ミドルウェア", "DBや開発支援など、OSとアプリの中間"),
            ],
            [
                ("OS", "Trung gian app ↔ hardware"),
                ("BIOS", "Boot nạp OS"),
                ("Middleware", "Tầng giữa OS và app"),
            ],
        )
    elif "OS の機能" in t or "OSの機能" in t:
        setv(
            "Chức năng OS",
            "1) UI: chuột/bàn phím, cửa sổ, file. "
            "2) Che khác biệt phần cứng. "
            "3) Quản lý nhớ: cache↔RAM↔HDD, virtual memory, swapping. "
            "4) Quản lý process/multitasking (chia sẻ CPU). "
            "5) Quản lý user/multiuser & quyền. "
            "OS cấp phát CPU/RAM… cho ứng dụng.",
            [
                ("UI", "操作・ウィンドウ・ファイルの扱いを決定"),
                ("資源割当", "CPUやメモリをアプリに割り当てる"),
                ("仮想記憶", "HDDを使い見かけのメモリを拡大。スワッピング"),
                ("マルチタスク", "複数プロセスを切り替え同時実行に見せる"),
            ],
            [
                ("UI", "Quyết định cách thao tác"),
                ("Cấp phát", "Gán CPU/RAM cho app"),
                ("Virtual mem", "Dùng đĩa mở rộng không gian nhớ"),
                ("Multitask", "Nhiều process xen kẽ"),
            ],
        )
    elif "OS の種類" in t or "OSの種類" in t:
        setv(
            "Các loại OS",
            "Unix: gọn, mở, phát triển từ Bell Labs/Berkeley; lan rộng cùng Internet. "
            "Linux (Torvalds): triển khai tự do theo tinh thần Unix, dùng nhiều trên server.",
            [
                ("Unix", "簡潔・拡張性。研究機関で発展"),
                ("Linux", "フリー。サーバで広く利用"),
            ],
            [
                ("Unix", "Gọn, mở rộng tốt"),
                ("Linux", "Tự do; phổ biến server"),
            ],
        )

    # ---- Ch17 DB ----
    elif "データベースとは" in t:
        setv(
            "CSDL là gì",
            "Database lưu/quản lý lượng lớn dữ liệu, tìm/sửa dễ. "
            "3 yếu tố: tốc độ tìm kiếm (quan trọng nhất với big data), dung lượng, tính toàn vẹn (完備性). "
            "Web thô không tự động là CSDL nếu không quản trị có tổ chức.",
            [
                ("3要素", "検索速度・データ量・完備性"),
                ("最重要", "大量データでは検索時の速度"),
            ],
            [
                ("3 yếu tố", "Tốc độ tìm, khối lượng, toàn vẹn"),
                ("Quan trọng nhất", "Tốc độ tìm khi data lớn"),
            ],
        )
    elif "表現法" in t and ch_no == 17:
        setv(
            "Cách biểu diễn CSDL",
            "Đơn vị = record. "
            "Phân cấp (cây): parent–child–grandchild, tìm từ gốc — trực quan nhưng tìm lá chậm, dễ trùng/mất toàn vẹn. "
            "Lưới: quan hệ cha–con nhiều nhánh. "
            "Quan hệ (bảng): nhiều quan hệ độc lập, truy vấn linh hoạt — nền RDBMS hiện đại (Codd).",
            [
                ("階層的表現", "親・子・孫の木。最上位からたどる"),
                ("網的表現", "親子を網状につなぐ"),
                ("関係的表現", "表（リレーショナル）。現在主流"),
            ],
            [
                ("Phân cấp", "Cây parent–child"),
                ("Lưới", "Mạng quan hệ"),
                ("Quan hệ", "Bảng — phổ biến nhất"),
            ],
        )
    elif "データ操作" in t:
        setv(
            "Thao tác dữ liệu quan hệ",
            "Nền tảng toán của Codd (~1970): phép tập hợp (hội, giao, hiệu, tích) và các phép quan hệ (chọn, chiếu, nối…) đảm bảo tính nhất quán.",
            [
                ("集合演算", "合併・共通部分・差・直積など"),
                ("目的", "数学的に完備性を保証"),
            ],
            [
                ("Phép tập hợp", "Union, intersect, difference, product…"),
                ("Mục tiêu", "Đảm bảo tính toàn vẹn"),
            ],
        )

    # ---- Ch18 SQL ----
    elif "SQL" in t or "基本構文" in t or "条件検索" in t or "並べ替え" in t or "結合" in t:
        topic = {
            "SQL とは": ("SQL là gì", "SQL là ngôn ngữ thao tác CSDL quan hệ: truy vấn, cập nhật, định nghĩa…"),
            "SQLとは": ("SQL là gì", "SQL là ngôn ngữ thao tác CSDL quan hệ: truy vấn, cập nhật, định nghĩa…"),
            "SQL の基本構文": ("Cú pháp cơ bản SQL", "Mệnh đề SELECT–FROM–WHERE là xương sống truy vấn."),
            "SQLの基本構文": ("Cú pháp cơ bản SQL", "Mệnh đề SELECT–FROM–WHERE là xương sống truy vấn."),
            "条件検索": ("Tìm theo điều kiện", "WHERE lọc dòng theo điều kiện logic."),
            "並べ替え": ("Sắp xếp", "ORDER BY sắp tăng (ASC) / giảm (DESC)."),
            "結合": ("Kết nối bảng", "JOIN nối nhiều bảng theo khóa quan hệ."),
        }
        for k, (vt, vb) in topic.items():
            if k.replace(" ", "") in t.replace(" ", "") or t in k:
                setv(
                    vt,
                    vb + " (Chi tiết cú pháp học kèm bài lab SQL; quiz hay hỏi thuật ngữ quan hệ/sắp xếp.)",
                    [
                        ("SELECT", "必要な列を取り出す"),
                        ("WHERE", "条件で行を絞る"),
                        ("ORDER BY", "昇順/降順で並べ替え"),
                        ("JOIN", "複数表を結合"),
                    ],
                    [
                        ("SELECT", "Chọn cột"),
                        ("WHERE", "Lọc điều kiện"),
                        ("ORDER BY", "Sắp xếp ASC/DESC"),
                        ("JOIN", "Nối bảng"),
                    ],
                )
                break
        if not vi_body and "SQL" in t:
            setv(
                "SQL",
                "SQL (Structured Query Language) dùng cho CSDL quan hệ: tìm, lọc, sắp xếp, nối bảng.",
                [("SQL", "関係DBを操作する言語")],
                [("SQL", "Ngôn ngữ thao tác RDBMS")],
            )

    # ---- Ch19 prog ----
    elif "プログラミング言語" in t:
        setv(
            "Ngôn ngữ lập trình",
            "Ngôn ngữ nhân tạo ra lệnh cho máy. Chia procedural (mô tả How — Java, C++) và non-procedural (mô tả What — SQL…). "
            "C++ phụ thuộc OS khi build; Java viết một lần chạy nhiều môi trường (chậm hơn C++ một chút). "
            "HTML không phải ngôn ngữ tính toán đầy đủ; cần JS… XML quan trọng trao đổi data business.",
            [
                ("手続型", "Howを詳細に記述（Java, C++）"),
                ("非手続型", "Whatを記述（SQL等）"),
                ("高水準言語", "JavaやC++。コンパイラで機械語へ"),
            ],
            [
                ("Procedural", "Mô tả How"),
                ("Non-procedural", "Mô tả What"),
                ("High-level", "Java, C++…"),
            ],
        )
    elif "内部動作" in t:
        setv(
            "Hoạt động bên trong chương trình",
            "Chương trình nằm trên bộ nhớ, không khác data về mặt lưu trữ. "
            "CPU đọc tuần tự theo địa chỉ. "
            "Trên máy là machine language (low-level, phụ thuộc CPU). "
            "Viết bằng high-level rồi compiler dịch xuống. Java/C++ không phải low-level.",
            [
                ("低級言語", "機械語。CPU依存。読みにくく汎用性が低い"),
                ("高級言語", "Java・C++など。コンパイラが翻訳"),
                ("誤り", "Java/C++を低級言語とするのは誤り"),
            ],
            [
                ("Low-level", "Máy/assembly; phụ thuộc CPU"),
                ("High-level", "Java, C++; compiler dịch"),
                ("Hay sai", "Java/C++ không phải low-level"),
            ],
        )
    elif "高級言語" in t or "基本処理" in t:
        setv(
            "Xử lý cơ bản ngôn ngữ bậc cao",
            "Gán (=): đưa giá trị vào biến (không phải so sánh bằng toán học). "
            "Biến = ‘ô nhớ có tên’. Mảng: a[0], a[1]… chỉ số thường từ 0; dùng biến làm chỉ số để lặp.",
            [
                ("代入", "変数に値を入れる（a = 3）"),
                ("配列", "a[0], a[1]… 添え字は多くの言語で0始まり"),
            ],
            [
                ("Assignment", "Gán giá trị vào biến"),
                ("Array", "Dãy biến theo chỉ số"),
            ],
        )
    elif "オブジェクト" in t:
        setv(
            "Hướng đối tượng",
            "OOP lấy ‘object’ (dữ liệu + xử lý) làm trung tâm, khác cách chỉ xoay quanh ‘việc/thủ tục’. "
            "Tái sử dụng tốt hơn. "
            "Thiết kế UI thường không đủ chỉ lúc nghĩ thuật toán — cần prototype rồi sửa.",
            [
                ("オブジェクト指向", "「もの」を中心にデータと処理を捉える"),
                ("UI設計", "アルゴリズム検討時だけでは不十分。試作して修正"),
            ],
            [
                ("OOP", "Lấy object làm trung tâm"),
                ("UI", "Cần prototype, không chỉ thuật toán"),
            ],
        )

    # ---- Ch20 algo ----
    elif t == "アルゴリズム" or (ch_no == 20 and "アルゴリズム" in t and "ソーティング" not in t):
        setv(
            "Giải thuật",
            "Algorithm = trình tự xử lý cơ bản: rõ input, output, các bước. "
            "Ví dụ máy bán hàng tự động: tiền + nút hàng → hàng + tiền thừa; chờ đủ tiền, hủy thì dừng… "
            "Từ algorithm ghép gán/điều kiện/lặp thành chương trình.",
            [
                ("定義", "入力・出力・処理手順を明確にした基本手順"),
                ("目的", "効率的に解を得る方法を考える"),
            ],
            [
                ("Định nghĩa", "Quy trình rõ input/output/bước"),
                ("Mục tiêu", "Cách giải hiệu quả"),
            ],
        )
    elif "フローチャート" in t:
        setv(
            "Sơ đồ khối",
            "Flowchart biểu diễn algorithm bằng hình + mũi tên để dễ hiểu luồng. "
            "Dùng nắm quy trình lớn; cài đặt thật cần chi tiết hơn.",
            [
                ("フローチャート", "図形と矢印でアルゴリズムを表現"),
            ],
            [
                ("Flowchart", "Sơ đồ khối thuật toán"),
            ],
        )
    elif "ソーティング" in t:
        setv(
            "Sắp xếp",
            "Sorting = sắp tăng/giảm. Máy chỉ so từng cặp → thuật đơn giản O(n²) chậm khi n lớn. "
            "Có selection, bubble, quick, insertion, shell, merge… "
            "Bubble: so và đổi chỗ các cặp lân cận lặp lại.",
            [
                ("ソーティング", "昇順・降順に並べ替え"),
                ("単純比較", "n個で約n²回 → データ増で急激に遅い"),
                ("例", "バブルソート・クイックソート・マージソート等"),
            ],
            [
                ("Sorting", "Sắp tăng/giảm"),
                ("So sánh thô", "~n² phép → chậm"),
                ("Ví dụ", "Bubble, quick, merge…"),
            ],
        )
    elif "ヒューマン" in t or "インタフェース" in t:
        setv(
            "Thiết kế giao diện người–máy",
            "Thiết kế human interface khó hoàn tất chỉ khi phân tích algorithm; thường làm prototype, thử, sửa vòng lặp.",
            [
                ("要点", "アルゴリズム検討時だけでは不十分。試作→修正"),
            ],
            [
                ("Ý chính", "Cần prototype & chỉnh sửa lặp"),
            ],
        )

    # ---- Fallback: still provide useful bilingual detail from JP text ----
    if not vi_body:
        # split JP into sentences for readability
        vi_title = t
        # keep a shortened JP-based explanation note
        short = body[:900] + ("…" if len(body) > 900 else "")
        vi_body = (
            f"(Tóm tắt theo giáo trình — mục「{t}」) "
            "Nội dung gốc tiếng Nhật được rút gọn bên bảng JP. "
            "Hãy đọc đoạn JP chi tiết phía trên; các ý chính: "
            + short[:400]
        )
        # extract pseudo key sentences
        parts = re.split(r"[。．]", body)
        parts = [p.strip() for p in parts if 12 <= len(p.strip()) <= 120][:8]
        if not parts:
            parts = [body[:100]]
        jp_keys = [(f"要点{i+1}", p) for i, p in enumerate(parts)]
        vi_keys = [(f"Ý {i+1}", "(Xem bản JP — dịch sát nghĩa từng câu trong lúc ôn)") for i in range(len(parts))]

    # Always attach long JP paragraphs split for display
    return vi_title, vi_body, jp_keys, vi_keys


def split_paragraphs(text: str, max_len: int = 280) -> list[str]:
    """Split Japanese text into readable paragraphs by sentences."""
    sents = re.split(r"(?<=[。．])", text)
    sents = [s.strip() for s in sents if s.strip()]
    paras, buf = [], ""
    for s in sents:
        if len(buf) + len(s) > max_len and buf:
            paras.append(buf)
            buf = s
        else:
            buf += s
    if buf:
        paras.append(buf)
    return paras or [text]


def esc(s: str) -> str:
    return (
        s.replace("&", "&amp;")
        .replace("<", "&lt;")
        .replace(">", "&gt;")
        .replace('"', "&quot;")
    )


def table_rows(rows, jp_cell=False):
    h = []
    for a, b in rows:
        cell = f' class="jp-cell"' if jp_cell else ""
        h.append(f"<tr><td>{esc(a)}</td><td{cell}>{esc(b)}</td></tr>")
    return "\n".join(h)


def build_study_articles():
    articles = []
    toc = []
    for fname, num in ORDER:
        p = Path(fname)
        if not p.exists():
            # internet tech file may use Heading2 only
            if fname == "ch_snip_internet_tech.txt":
                raw = Path(fname)
                if not raw.exists():
                    continue
            else:
                continue
        # special parse for internet tech (starts with Heading2)
        if fname == "ch_snip_internet_tech.txt":
            lines = p.read_text(encoding="utf-8").splitlines()
            ch = {"title": "インターネット技術(Công nghệ internet)", "sections": []}
            cur = {"title": None, "paras": []}
            for l in lines:
                if l.startswith("[Heading2]"):
                    if cur["title"] and cur["paras"]:
                        text = clean_text("".join(cur["paras"]))
                        if len(text) > 30:
                            ch["sections"].append({"title": cur["title"], "text": text})
                    cur = {"title": l.replace("[Heading2]", "").strip(), "paras": []}
                elif l.startswith("練習問題") or l.startswith("ミニテスト"):
                    break
                elif l.startswith("[Heading"):
                    continue
                else:
                    t = l.strip()
                    if t and not t.startswith("図 ") and "------" not in t:
                        cur["paras"].append(t)
            if cur["title"] and cur["paras"]:
                text = clean_text("".join(cur["paras"]))
                if len(text) > 30:
                    ch["sections"].append({"title": cur["title"], "text": text})
        else:
            ch = parse_snip(p)
        if not ch:
            continue

        jp_title = re.sub(r"\(.*\)", "", ch["title"]).strip()
        vi_ch = VI_CHAPTER.get(num, "")
        toc.append(f'<li><a class="lvl-0" href="#ch{num}">Ch.{num} {esc(vi_ch or jp_title)}</a></li>')
        articles.append(
            f'''
    <article class="section-block lvl-0" id="ch{num}">
      <h2><span class="jp">第{num}章 {esc(jp_title)}</span></h2>
      <p class="sec-meta">{esc(vi_ch)}</p>
    </article>'''
        )

        for si, sec in enumerate(ch["sections"], 1):
            if sec["title"] == "導入":
                # merge intro into chapter header as detail box
                vi_title, vi_body, jk, vk = translate_section(num, sec["title"], sec["text"])
                paras_jp = split_paragraphs(sec["text"])
                articles.append(
                    f'''
    <article class="section-block" id="ch{num}-intro">
      <h2>導入 / Giới thiệu chương</h2>
      <p class="sec-meta">Tóm tắt đầu chương</p>
      <div class="detail-block jp-block">
        <div class="detail-label">日本語（教科書本文）</div>
        {''.join(f'<p class="jp detail-p">{esc(p)}</p>' for p in paras_jp)}
      </div>
      <div class="detail-block vi-block">
        <div class="detail-label">Tiếng Việt (chi tiết)</div>
        <p class="detail-p">{esc(vi_body if vi_body else 'Đọc đoạn tiếng Nhật; chương này giới thiệu chủ đề chính.')}</p>
      </div>
    </article>'''
                )
                toc.append(f'<li><a class="lvl-2" href="#ch{num}-intro">Giới thiệu Ch.{num}</a></li>')
                continue

            vi_title, vi_body, jk, vk = translate_section(num, sec["title"], sec["text"])
            paras_jp = split_paragraphs(sec["text"])
            # if keys empty fallback
            if not jk:
                sents = [s.strip() for s in re.split(r"[。．]", sec["text"]) if len(s.strip()) > 15][:6]
                jk = [(f"要点{i+1}", s) for i, s in enumerate(sents)]
                vk = [(f"Ý {i+1}", vi_body[:120] + "…") for i in range(len(sents))]

            toc.append(f'<li><a class="lvl-2" href="#ch{num}-s{si}">{esc(vi_title)}</a></li>')
            articles.append(
                f'''
    <article class="section-block" id="ch{num}-s{si}">
      <h2 class="jp">{esc(sec["title"])}</h2>
      <p class="sec-meta">{esc(vi_title)}</p>

      <div class="detail-block jp-block">
        <div class="detail-label">① 日本語・教科書の詳細</div>
        {''.join(f'<p class="jp detail-p">{esc(p)}</p>' for p in paras_jp)}
      </div>

      <div class="detail-block vi-block">
        <div class="detail-label">② Tiếng Việt · Giải thích chi tiết</div>
        <p class="detail-p">{esc(vi_body)}</p>
      </div>

      <span class="tbl-label jp">③ 表 · 要点（日本語）</span>
      <table class="sum"><thead><tr><th>項目</th><th>詳細</th></tr></thead><tbody>
      {table_rows(jk, jp_cell=True)}
      </tbody></table>

      <span class="tbl-label vi">④ Bảng · Ý chính (VI)</span>
      <table class="sum vi"><thead><tr><th>Mục</th><th>Chi tiết</th></tr></thead><tbody>
      {table_rows(vk)}
      </tbody></table>
    </article>'''
            )

    toc.append('<li><a class="lvl-0" href="#quiz-check">Đối chiếu quiz</a></li>')
    return "\n".join(toc), "\n".join(articles)


def main():
    toc, articles = build_study_articles()
    Path("_study_toc.html").write_text(toc, encoding="utf-8")
    Path("_study_articles.html").write_text(articles, encoding="utf-8")
    print("toc chars", len(toc), "articles", len(articles))
    print("article blocks", articles.count("section-block"))

    # Patch into index.html between markers or rebuild study main only
    idx = Path("index.html").read_text(encoding="utf-8")

    # Replace TOC list content
    idx2 = re.sub(
        r'(<ul class="toc-list" id="toc-list">)(.*?)(</ul>)',
        lambda m: m.group(1) + "\n" + toc + "\n        " + m.group(3),
        idx,
        count=1,
        flags=re.S,
    )
    # Replace study content main inner (from first section-block to before quiz-check or back-top)
    m = re.search(
        r'(<main class="study-content">)(.*?)(<section class="quiz-check-box)',
        idx2,
        flags=re.S,
    )
    if not m:
        # try without quiz-check
        m = re.search(
            r'(<main class="study-content">)(.*?)(<a href="#study-page" class="back-top")',
            idx2,
            flags=re.S,
        )
        if not m:
            raise SystemExit("Cannot find study-content main")
        new = m.group(1) + "\n" + articles + "\n\n        " + m.group(3)
        idx3 = idx2[: m.start()] + new + idx2[m.end() - len(m.group(3)) :]
    else:
        new = m.group(1) + "\n" + articles + "\n\n        " + m.group(3)
        idx3 = idx2[: m.start()] + new + idx2[m.end() - len(m.group(3)) :]

    # Update hero blurb
    idx3 = idx3.replace(
        "Tóm tắt theo giáo trình <strong>JIT401-Giao-trinh-IT</strong> (20 chương). Mỗi mục có bảng tiếng Nhật (theo sách) và bảng dịch tiếng Việt. Cuối trang đối chiếu quiz.",
        "Theo giáo trình <strong>JIT401-Giao-trinh-IT</strong> (20 chương). Mỗi mục có: "
        "<strong>① đoạn JP chi tiết từ sách</strong>, <strong>② giải thích VI chi tiết</strong>, "
        "<strong>③④ bảng ý chính JP + VI</strong>. Cuối trang đối chiếu quiz.",
    )

    Path("index.html").write_text(idx3, encoding="utf-8")
    print("updated index.html", Path("index.html").stat().st_size)


if __name__ == "__main__":
    main()
