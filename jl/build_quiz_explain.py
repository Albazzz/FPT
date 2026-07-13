# -*- coding: utf-8 -*-
"""
Build Vietnamese translations + why-explanations for QUIZ/SAMPLE,
inject into index.html engine render.
"""
from pathlib import Path
import re
import json

# Phrase dictionary (longer first)
DICT = [
    ("フォン・ノイマンのプログラム内蔵方式コンピュータ", "máy tính stored-program kiểu von Neumann"),
    ("プログラム内蔵方式", "kiểu chương trình nội tại (stored-program)"),
    ("コンピュータウィルス", "virus máy tính"),
    ("クラウドコンピューティング", "điện toán đám mây"),
    ("オペレーティングシステム", "hệ điều hành"),
    ("電子式計算機", "máy tính điện tử"),
    ("電気機械式", "kiểu điện-cơ"),
    ("ランダムアクセスメモリ", "bộ nhớ truy cập ngẫu nhiên"),
    ("読み取り専用メモリ", "bộ nhớ chỉ đọc"),
    ("中央処理装置", "bộ xử lý trung tâm"),
    ("マザーボード", "bo mạch chủ"),
    ("サンプリング周波数", "tần số lấy mẫu"),
    ("量子化数", "số mức lượng tử hóa"),
    ("ランレングス圧縮", "nén run-length"),
    ("フーリエ変換", "biến đổi Fourier"),
    ("非接触型ICカード", "thẻ IC không tiếp xúc"),
    ("スター型ネットワーク", "mạng hình sao"),
    ("分散処理システム", "hệ thống xử lý phân tán"),
    ("集中処理システム", "hệ thống xử lý tập trung"),
    ("クライアントサーバ", "client-server"),
    ("ピアツーピア", "ngang hàng (P2P)"),
    ("密結合マルチプロセッサ", "multiprocessor liên kết chặt (chia sẻ bộ nhớ)"),
    ("疎結合マルチプロセッサ", "multiprocessor liên kết lỏng (bộ nhớ độc lập)"),
    ("公開鍵方式", "phương thức khóa công khai"),
    ("秘密鍵方式", "phương thức khóa bí mật"),
    ("共通鍵方式", "phương thức khóa chung"),
    ("シーザー暗号", "mã Caesar"),
    ("転置式暗号", "mã hoán vị"),
    ("換字式", "kiểu thay thế ký tự"),
    ("稼働率", "tỷ lệ sẵn sàng / availability"),
    ("信頼度成長曲線", "đường cong tăng độ tin cậy"),
    ("工業所有権", "quyền sở hữu công nghiệp"),
    ("著作隣接権", "quyền liền kề tác giả"),
    ("著作者人格権", "quyền nhân cách tác giả"),
    ("著作者財産権", "quyền tài sản tác giả"),
    ("実用新案権", "quyền giải pháp hữu ích"),
    ("意匠権", "quyền kiểu dáng"),
    ("商標権", "quyền nhãn hiệu"),
    ("特許権", "quyền sáng chế (patent)"),
    ("著作権", "bản quyền / quyền tác giả"),
    ("電子商取引", "thương mại điện tử"),
    ("暗号化", "mã hóa"),
    ("復号化", "giải mã"),
    ("拡張子", "phần mở rộng (file)"),
    ("ドメイン名", "tên miền"),
    ("プロトコル", "giao thức"),
    ("トランスポート層", "tầng giao vận"),
    ("ネットワーク層", "tầng mạng"),
    ("アプリケーション層", "tầng ứng dụng"),
    ("物理層", "tầng vật lý"),
    ("数値化された量", "đại lượng đã số hóa"),
    ("連続的な量", "đại lượng liên tục"),
    ("曖昧なものをそのまま表現できる", "có thể biểu diễn trạng thái mơ hồ nguyên trạng"),
    ("曖昧なものをそのまま残すことができる", "có thể giữ nguyên trạng thái mơ hồ"),
    ("正しくないものをえらんでください", "hãy chọn phát biểu SAI"),
    ("正しいものをえらんでください", "hãy chọn phát biểu ĐÚNG"),
    ("次のベトナム語の用語を日本語に直しなさい", "hãy chuyển thuật ngữ tiếng Việt sau sang tiếng Nhật"),
    ("次の日本語の用語をベトナム語に直しなさい", "hãy chuyển thuật ngữ tiếng Nhật sau sang tiếng Việt"),
    ("次の質問に対して、正しい答えを１つ選びなさい", "hãy chọn MỘT đáp án đúng cho câu hỏi sau"),
    ("として正しいものはどれか", "cái nào đúng với"),
    ("として正しいのはどれか", "cái nào đúng"),
    ("について正しいものを", "về … chọn đúng"),
    ("について正しくないものを", "về … chọn sai"),
    ("送受信される形式はどれか", "hình thức gửi/nhận là gì"),
    ("何を表す量か", "là đại lượng biểu diễn cái gì"),
    ("開発された年はいつか", "được phát triển năm nào"),
    ("登場したのはいつか", "xuất hiện khi nào"),
    ("誕生したのはいつか", "ra đời khi nào"),
    ("何の略か", "là viết tắt của gì"),
    ("何というか", "gọi là gì"),
    ("どれか。", "là cái nào?"),
    ("どれですか。", "là cái nào?"),
    ("はどれか。", " là cái nào?"),
    ("はどれですか。", " là cái nào?"),
    ("とは何ですか。", " là gì?"),
    ("とは何か。", " là gì?"),
    ("電流(mA)または電圧(mV)信号", "tín hiệu dòng điện (mA) hoặc điện áp (mV)"),
    ("0と1のデジタルデータ", "dữ liệu digital 0 và 1"),
    ("パケットデータ", "dữ liệu dạng gói (packet)"),
    ("バイナリコード", "mã nhị phân"),
    ("コピーができる", "có thể sao chép"),
    ("切れ目のある正確な表現ができる", "biểu diễn chính xác, có ranh giới rời rạc"),
    ("1と0だけを使う", "chỉ dùng 0 và 1"),
    ("正確で切れ目のある", "chính xác và có ranh giới rời rạc"),
    ("数値化された量である", "là đại lượng đã được số hóa"),
    ("記憶 ＋ 処理", "ghi nhớ + xử lý"),
    ("演算・記憶・制御・入力・出力装置", "thiết bị tính toán · nhớ · điều khiển · vào · ra"),
    ("読み取り専用メモリ", "bộ nhớ chỉ đọc"),
    ("光ファイバ", "cáp quang"),
    ("赤外線", "hồng ngoại"),
    ("電波", "sóng radio"),
    ("遮蔽物", "vật cản / che khuất"),
    ("静電容量方式", "cảm ứng điện dung (capacitive)"),
    ("抵抗膜方式", "cảm ứng điện trở (resistive)"),
    ("指先とセンサの間に蓄えられる電荷", "điện tích tích giữa ngón tay và cảm biến"),
    ("縦横の抵抗値", "điện trở theo chiều dọc/ngang"),
    ("光の強弱を記録する素子と増幅器", "phần tử ghi cường độ sáng và bộ khuếch đại"),
    ("平均故障間隔", "thời gian trung bình giữa hai lần hỏng (MTBF)"),
    ("平均修理時間", "thời gian sửa trung bình (MTTR)"),
    ("人為的に作成されたプログラム", "chương trình do con người tạo ra"),
    ("感染→潜伏→発病", "lây nhiễm → ủ bệnh → phát bệnh"),
    ("トロイの木馬", "ngựa thành Troy (Trojan)"),
    ("スイッチが直列に並んだ回路", "mạch các công tắc nối tiếp"),
    ("スイッチが並列に並んだ回路", "mạch các công tắc song song"),
    ("真空管", "đèn điện tử (vacuum tube)"),
    ("トランジスタ", "bóng bán dẫn (transistor)"),
    ("集積回路", "mạch tích hợp (IC)"),
    ("大規模集積回路", "mạch tích hợp quy mô lớn (LSI)"),
    ("高水準言語", "ngôn ngữ bậc cao"),
    ("低級言語", "ngôn ngữ cấp thấp"),
    ("オブジェクト指向", "hướng đối tượng (OOP)"),
    ("「もの」を中心にする", "lấy 'vật/object' làm trung tâm"),
    ("「こと」を中心にする", "lấy 'việc/thủ tục' làm trung tâm"),
    ("階層的表現", "biểu diễn phân cấp (cây)"),
    ("関係的表現", "biểu diễn quan hệ (bảng)"),
    ("網的表現", "biểu diễn dạng lưới"),
    ("検索時の速度", "tốc độ khi tìm kiếm"),
    ("ユーザインタフェース", "giao diện người dùng (UI)"),
    ("チューリングマシン", "máy Turing"),
    ("双方向型", "kiểu hai chiều"),
    ("一方向的", "một chiều"),
    ("ロングテール", "long tail (đuôi dài)"),
    ("ネチケット", "netiquette (phép lịch sự mạng)"),
    ("著作権のあるファイルを送ってよい", "được phép gửi file có bản quyền"),
    ("大きな添付ファイルを送らない", "không gửi file đính kèm lớn"),
    ("添付ファイルのウィルスをチェックする", "kiểm tra virus file đính kèm"),
    ("自分の氏名・連絡先を明記する", "ghi rõ họ tên và liên hệ của mình"),
    ("情報の送り手と受け手が固定されている", "người gửi và người nhận thông tin bị cố định"),
    ("ユーザ自身がコンテンツを作成・共有できる", "người dùng tự tạo và chia sẻ nội dung"),
    ("インターネットを通じてコンピュータ資源やサービスを提供する", "cung cấp tài nguyên/dịch vụ máy tính qua Internet"),
    ("パソコン内のHDDにデータを保存するサービス", "dịch vụ lưu data trên HDD trong PC"),
    ("公開鍵方式と秘密鍵方式で暗号化した状態で情報通信を行う", "truyền tin đã mã hóa bằng khóa công khai + khóa bí mật"),
    ("与えられた原文が推測できないように変換すること", "biến đổi để không thể đoán được bản gốc"),
    ("与えられた原文に戻すこと", "trả về bản gốc đã cho"),
    ("文字を何文字かずらすことで暗号化する", "mã hóa bằng cách dịch ký tự đi vài vị trí"),
    ("文字の並び順を入れ替えることで暗号化する", "mã hóa bằng cách đổi thứ tự ký tự"),
    ("文字の位置を規則的または不規則にずらすことで暗号化する", "mã hóa bằng cách dịch chuyển vị trí ký tự có/không quy luật"),
    ("両方のスイッチがONのときだけ出力がON", "chỉ khi cả hai công tắc ON thì ngõ ra ON"),
    ("少なくとも1つONで出力がON", "chỉ cần ít nhất 1 công tắc ON thì ngõ ra ON"),
    ("パソコン内で大きな面積を占めるメインの基板", "bo mạch chính chiếm diện tích lớn trong PC"),
    ("処理の中心となる部品", "linh kiện trung tâm xử lý"),
    ("バスを流れるデータや外部機器とのデータを制御する", "điều khiển dữ liệu trên bus và với thiết bị ngoài"),
    ("データのアクセス速度が最も高速", "tốc độ truy cập dữ liệu nhanh nhất"),
    ("創作した時点で自動的に権利が発生する", "quyền phát sinh tự động ngay khi sáng tạo"),
    ("登録が必要である", "cần đăng ký"),
    ("第1世代携帯電話", "điện thoại di động thế hệ 1"),
    ("第2世代携帯電話", "điện thoại di động thế hệ 2"),
    ("第3世代携帯電話", "điện thoại di động thế hệ 3"),
    ("アナログ通信", "truyền thông analog"),
    ("デジタル通信", "truyền thông digital"),
    ("高速データ通信", "truyền dữ liệu tốc độ cao"),
    ("音声の波をそのまま電波の波に置き換えて送受信する", "đổi sóng âm thành sóng radio nguyên trạng để gửi/nhận"),
    ("音質が向上した", "chất lượng âm được cải thiện"),
    ("ブロードバンドを前提としている", "lấy băng rộng làm tiền đề"),
    ("ファイアウォール", "tường lửa (firewall)"),
    ("スカベンジング", "scavenging (moi thông tin còn sót)"),
    ("収集", "thu thập"),
    ("管理", "quản lý"),
    ("削除", "xóa"),
    ("整理", "sắp xếp"),
    ("専門用語", "thuật ngữ chuyên ngành"),
    ("専門知識", "kiến thức chuyên ngành"),
    ("正しくないもの", "cái không đúng / SAI"),
    ("正しいもの", "cái đúng"),
    ("えらんでください", "hãy chọn"),
    ("選びなさい", "hãy chọn"),
    ("直しなさい", "hãy chuyển/đổi"),
    ("計算式", "công thức tính"),
    ("正式名称", "tên chính thức"),
    ("最大通信速度", "tốc độ truyền tối đa"),
    ("通信速度の単位", "đơn vị tốc độ truyền"),
    ("情報量の最小単位", "đơn vị nhỏ nhất của lượng thông tin"),
    ("フレームレート", "tốc độ khung hình (fps)"),
    ("解像度", "độ phân giải"),
    ("1画素", "1 điểm ảnh (pixel)"),
    ("データ圧縮", "nén dữ liệu"),
    ("音声情報", "thông tin âm thanh"),
    ("画像情報", "thông tin ảnh"),
    ("動画像", "ảnh động / video"),
    ("静止画", "ảnh tĩnh"),
    ("関係データベース", "cơ sở dữ liệu quan hệ"),
    ("キーワード", "từ khóa"),
    ("昇順", "thứ tự tăng dần"),
    ("降順", "thứ tự giảm dần"),
    ("主キー", "khóa chính"),
    ("外部キー", "khóa ngoại"),
    ("代替キー", "khóa thay thế"),
    ("電流", "dòng điện"),
    ("電荷", "điện tích"),
    ("電力", "công suất điện"),
    ("電極", "điện cực"),
    ("フォルダ", "thư mục (folder)"),
    ("ファイル", "tệp (file)"),
    ("ドライブ", "ổ đĩa (drive)"),
    ("ホームページのアドレス", "địa chỉ trang chủ / URL"),
    ("ブラウザ", "trình duyệt"),
    ("添付ファイル", "file đính kèm"),
    ("パスワード", "mật khẩu"),
    ("ウィルス", "virus"),
    ("サーバ", "máy chủ (server)"),
    ("クライアント", "máy khách (client)"),
    ("ネットワーク", "mạng"),
    ("インターネット", "Internet"),
    ("コンピュータ", "máy tính"),
    ("デジタル", "digital / số"),
    ("アナログ", "analog"),
    ("暗号化", "mã hóa"),
    ("年", "năm"),
    ("について", " về "),
    ("として", " với tư cách / là "),
    ("による", " do / bằng "),
    ("ための", " để / cho "),
    ("という", " gọi là "),
    ("とは", " là "),
    ("です。", "."),
    ("ます。", "."),
    ("である。", "."),
    ("ですか。", "?"),
    ("か。", "?"),
    ("。", ". "),
    ("、", ", "),
    ("（", " ("),
    ("）", ") "),
    ("「", "“"),
    ("」", "”"),
    ("／", " / "),
    ("・", " · "),
    ("＝", " = "),
    ("→", " → "),
    ("＋", " + "),
    ("×", " × "),
    ("÷", " ÷ "),
]

# Sort by key length desc
DICT.sort(key=lambda x: len(x[0]), reverse=True)

Q_TEMPLATES = [
    (r"^アナログ信号として送受信される形式はどれか。$", "Hình thức nào được gửi/nhận dưới dạng tín hiệu analog?"),
    (r"^デジタルとは何を表す量か。$", "Digital biểu diễn loại đại lượng nào?"),
    (r"^アナログについて正しいものをえらんでください。$", "Hãy chọn phát biểu ĐÚNG về analog."),
    (r"^デジタルについて正しくないものをえらんでください。$", "Hãy chọn phát biểu SAI về digital."),
    (r"^電子式計算機ENIACが開発された年はいつか。$", "Máy tính điện tử ENIAC được phát triển năm nào?"),
    (r"^フォン・ノイマンのプログラム内蔵方式コンピュータが登場したのはいつか。$", "Máy stored-program kiểu von Neumann xuất hiện năm nào?"),
    (r"^コンピュータを1つの式で表すと何になるか。$", "Nếu viết máy tính thành một biểu thức thì là gì?"),
    (r"^コンピュータの5要素として正しいものをえらんでください。$", "Hãy chọn đúng 5 thành phần của máy tính."),
    (r"^Excelファイルの拡張子はどれか。$", "Phần mở rộng của file Excel là gì?"),
    (r"^HTMLファイルの拡張子はどれか。$", "Phần mở rộng của file HTML là gì?"),
    (r"^ファイルの種類を識別するために、ファイル名に付けられる（ ）のことを拡張子という。$", "Chuỗi gắn vào tên file để nhận biết loại file gọi là phần mở rộng ( )."),
    (r"^フォルダについて正しいものをえらんでください。$", "Hãy chọn phát biểu ĐÚNG về folder."),
    (r"^ホームページのアドレスのことを（ ）という。$", "Địa chỉ trang web được gọi là ( )."),
    (r"^Web 2\.0という言葉を2004年に提唱したのは誰か。$", "Ai đề xuất thuật ngữ Web 2.0 năm 2004?"),
    (r"^クラウドコンピューティングという言葉を2006年に提唱したのは誰か。$", "Ai đề xuất thuật ngữ cloud computing năm 2006?"),
    (r"^OSI参照モデルは何層構造か。$", "Mô hình tham chiếu OSI có bao nhiêu tầng?"),
    (r"^RAMの正式名称はどれか。$", "Tên đầy đủ của RAM là gì?"),
    (r"^情報量の最小単位はどれか。$", "Đơn vị nhỏ nhất của lượng thông tin là gì?"),
    (r"^通信速度の単位として正しいのはどれか。$", "Đơn vị tốc độ truyền đúng là gì?"),
    (r"^稼働率の計算式として正しいのはどれか。$", "Công thức tính availability (稼働率) đúng là gì?"),
    (r"^暗号化の正しい定義はどれか。$", "Định nghĩa đúng của mã hóa là gì?"),
    (r"^Wi-Fiは何の略か。$", "Wi-Fi là viết tắt của gì?"),
    (r"^ADSLは何の略か。$", "ADSL là viết tắt của gì?"),
]


def translate_text(s: str) -> str:
    if not s:
        return ""
    # Already has Vietnamese?
    if re.search(r"[àáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđĐ]", s):
        # extract after fullwidth/half colon if bilingual
        if "：" in s:
            return s.split("：")[-1].strip()
        if ":" in s and re.search(r"[\u3040-\u30ff\u4e00-\u9fff]", s):
            parts = re.split(r"[:：]", s)
            if len(parts) > 1 and re.search(r"[A-Za-zÀ-ỹà-ỹ]", parts[-1]):
                return parts[-1].strip()
        return s

    # Pure numbers / units / years / formulas — keep clean
    t = s.strip()
    m_year = re.fullmatch(r"(\d{3,4})\s*年", t)
    if m_year:
        return f"năm {m_year.group(1)}"
    if re.fullmatch(r"[\d\.\s×xX\+\-\*/=〜~（）()A-Za-z]+", t):
        return t
    if re.fullmatch(r"\.\w+", t):
        return t

    out = s
    for jp, vi in DICT:
        if jp in out:
            out = out.replace(jp, vi)

    # years inside text
    out = re.sub(r"(\d{3,4})\s*年", r"năm \1", out)
    # light cleanup only for ascii-friendly leftovers
    out = out.replace("など", "…")
    out = re.sub(r"[をがにはのでともへより]+", " ", out)
    out = re.sub(r"\s+", " ", out).strip(" ,.;")
    # If still mostly Japanese, return original JP (don't fake)
    jp_chars = len(re.findall(r"[\u3040-\u30ff\u4e00-\u9fff]", out))
    if jp_chars > max(6, len(out) // 4):
        return s  # keep original Japanese; UI still shows JP column
    return out


def translate_question(q: str) -> str:
    for pat, vi in Q_TEMPLATES:
        if re.match(pat, q):
            return vi
    q2 = q
    # Keep Vietnamese terms inside JP questions (mẫu 4)
    if "ベトナム語の用語を日本語に直しなさい" in q2:
        term = re.sub(r".*直しなさい。\s*", "", q2).strip()
        return f"[Thuật ngữ] Hãy chuyển sang tiếng Nhật: {term}"
    if "日本語の用語をベトナム語に直しなさい" in q2:
        term = re.sub(r".*直しなさい。\s*", "", q2).strip()
        return f"[Thuật ngữ] Hãy chuyển sang tiếng Việt: {term}"
    if "正しい答えを１つ選びなさい" in q2 or "正しい答えを1つ選びなさい" in q2:
        m = re.search(r"「(.+?)」", q2)
        if m:
            return f"[Chuyên môn] Định nghĩa sau tương ứng thuật ngữ nào? “{m.group(1)}”"
        return "[Chuyên môn] Hãy chọn MỘT đáp án đúng."
    q2 = re.sub(r"^【専門用語】", "[Thuật ngữ] ", q2)
    q2 = re.sub(r"^【専門知識】", "[Chuyên môn] ", q2)
    q2 = q2.replace("（ ）", "(…)")
    q2 = q2.replace("( )", "(…)")
    if "正しくないもの" in q2:
        topic = q2.split("について")[0] if "について" in q2 else ""
        topic_vi = translate_text(topic) if topic else ""
        return f"Hãy chọn phát biểu SAI" + (f" về {topic_vi}." if topic_vi and topic_vi != topic else ".")
    if "正しいもの" in q2 and "えらんで" in q2:
        topic = q2.split("について")[0] if "について" in q2 else ""
        topic_vi = translate_text(topic) if topic else ""
        return f"Hãy chọn phát biểu ĐÚNG" + (f" về {topic_vi}." if topic_vi and topic_vi != topic else ".")
    tr = translate_text(q2)
    return tr


def translate_choice(c: str) -> str:
    # "A. text"
    m = re.match(r"^([A-D])\.\s*(.*)$", c)
    if not m:
        return translate_text(c)
    letter, body = m.group(1), m.group(2)
    # bilingual already
    if "：" in body:
        vi = body.split("：")[-1].strip()
        return f"{letter}. {vi}"
    if ":" in body and re.search(r"[À-ỹà-ỹ]", body):
        vi = body.split(":")[-1].strip()
        # sometimes "Cache：Bộ nhớ" style inside
        return f"{letter}. {vi}"
    return f"{letter}. {translate_text(body)}"


def build_why(item: dict, qv: str, cvs: list) -> str:
    """Detailed why this answer is correct — clear, structured Vietnamese."""
    a = item["a"]
    ex = (item.get("ex") or "").strip()
    correct_txt = ""
    correct_vi = ""
    for i, c in enumerate(item["c"]):
        if c.startswith(a + ".") or c.startswith(a + "．"):
            correct_txt = re.sub(r"^[A-D]\.\s*", "", c)
            correct_vi = re.sub(r"^[A-D]\.\s*", "", cvs[i] if i < len(cvs) else "")
            break

    mtype = item.get("m", 0)
    parts = []

    # 1) Answer
    ans_show = correct_vi if correct_vi and correct_vi != correct_txt else correct_txt
    parts.append(f"✓ Chọn {a} — {ans_show}")

    # 2) Why correct (prefer textbook ex, clean)
    if ex:
        # If ex already mixed JP, keep as source fact
        parts.append(f"Lý do: {ex}")
        # Add short interpretation for common patterns
        if mtype == 6:
            parts.append(
                "Đây là câu chọn phát biểu SAI: đáp án trên là nội dung không đúng; các lựa chọn còn lại là đúng theo giáo trình."
            )
        elif mtype == 5:
            parts.append(
                "Đây là câu chọn phát biểu ĐÚNG: chỉ có đáp án này khớp định nghĩa/kiến thức trong giáo trình."
            )
        elif mtype == 4:
            parts.append(
                "Đây là câu đối chiếu thuật ngữ JP ↔ VI: phải khớp đúng nghĩa chuyên ngành, không chọn từ gần nghĩa."
            )
        else:
            parts.append(
                "Khớp kiến thức giáo trình (định nghĩa, số liệu, hoặc thuật ngữ chuẩn)."
            )
    else:
        parts.append("Lý do: đáp án khớp kiến thức trong giáo trình JIT401.")

    # 3) Why others wrong (brief)
    wrong_lines = []
    for i, c in enumerate(item["c"]):
        let = c[:1]
        if let == a:
            continue
        body_jp = re.sub(r"^[A-D]\.\s*", "", c)
        body_vi = re.sub(r"^[A-D]\.\s*", "", cvs[i] if i < len(cvs) else body_jp)
        label = body_vi if body_vi else body_jp
        if mtype == 6:
            wrong_lines.append(f"{let} đúng/không phải đáp án vì đây không phải phát biểu sai ({label})")
        else:
            wrong_lines.append(f"{let} sai/không khớp: {label}")
    if wrong_lines:
        parts.append("So với lựa chọn khác: " + " | ".join(wrong_lines))

    return " ".join(parts)


def enrich(items):
    out = []
    for it in items:
        qv = translate_question(it["q"])
        cvs = [translate_choice(c) for c in it["c"]]
        why = build_why(it, qv, cvs)
        out.append({"qv": qv, "cv": cvs, "why": why})
    return out


def js_str(s: str) -> str:
    return json.dumps(s, ensure_ascii=False)


def to_js_array(name: str, rows: list) -> str:
    lines = [f"const {name} = ["]
    for r in rows:
        cv = ",".join(js_str(x) for x in r["cv"])
        lines.append(
            f"  {{qv:{js_str(r['qv'])},cv:[{cv}],why:{js_str(r['why'])}}},"
        )
    lines.append("];")
    return "\n".join(lines)


def build_explain_html_fn() -> str:
    return r'''
  function escHtml(s){
    return String(s||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
  }
  function letterOf(c){ return String(c).split('.')[0].trim(); }
  function buildExplainPanel(q, tr, chosen){
    const qv = (tr && tr.qv) || '';
    const cv = (tr && tr.cv) || [];
    const why = (tr && tr.why) || q.ex || '';
    const rows = q.c.map((c,i)=>{
      const L = letterOf(c);
      const vi = cv[i] || '';
      const isAns = L === q.a;
      const isPick = L === chosen;
      let mark = '';
      if(isAns) mark = '<span class="tag-ok">ĐÁP ÁN ĐÚNG</span>';
      else if(isPick) mark = '<span class="tag-bad">Bạn chọn</span>';
      return `<tr class="${isAns?'row-ok':(isPick?'row-bad':'')}">
        <td><strong>${escHtml(L)}</strong></td>
        <td class="jp-cell">${escHtml(c)}</td>
        <td>${escHtml(vi)}</td>
        <td>${mark}</td>
      </tr>`;
    }).join('');
    return `<div class="explain-panel">
      <div class="explain-title">Bảng dịch &amp; giải thích</div>
      <table class="sum explain-q">
        <thead><tr><th style="width:18%">Loại</th><th>Nội dung</th></tr></thead>
        <tbody>
          <tr><td><strong>Câu hỏi (JP)</strong></td><td class="jp-cell">${escHtml(q.q)}</td></tr>
          <tr><td><strong>Dịch (VI)</strong></td><td>${escHtml(qv)}</td></tr>
        </tbody>
      </table>
      <div class="explain-sub">Các lựa chọn</div>
      <table class="sum explain-choices">
        <thead><tr><th>Mã</th><th>Tiếng Nhật</th><th>Bản dịch VI</th><th>Ghi chú</th></tr></thead>
        <tbody>${rows}</tbody>
      </table>
      <div class="explain-sub">Vì sao chọn ${escHtml(q.a)}?</div>
      <div class="explain-why">${formatWhy(why)}</div>
      ${q.ex ? `<div class="explain-src"><strong>Giải thích gốc (JP):</strong> <span class="jp-cell">${escHtml(q.ex)}</span></div>` : ''}
    </div>`;
  }
  function formatWhy(why){
    let s = escHtml(why||'');
    s = s.replace(/✓\s*/g, '<div class="why-line why-ans">✓ ');
    s = s.replace(/\s*Lý do:\s*/g, '</div><div class="why-line"><strong>Lý do:</strong> ');
    s = s.replace(/\s*Đây là câu/g, '</div><div class="why-line">Đây là câu');
    s = s.replace(/\s*Khớp kiến thức/g, '</div><div class="why-line">Khớp kiến thức');
    s = s.replace(/\s*So với lựa chọn khác:\s*/g, '</div><div class="why-line"><strong>So với lựa chọn khác:</strong><br>');
    s = s.replace(/\s\|\s/g, '<br>• ');
    if(!s.includes('why-line')) s = '<div class="why-line">'+s+'</div>';
    else if(!s.endsWith('</div>')) s += '</div>';
    return s;
  }
'''


def patch_index(quiz_tr_js: str, sample_tr_js: str, explain_fn: str):
    path = Path("index.html")
    html = path.read_text(encoding="utf-8")

    # Replace or insert TR + helper block before QUIZ ENGINE
    engine_marker = "  // =====================================================\n  // QUIZ ENGINE"
    inject = (
        "  // =====================================================\n"
        "  // TRANSLATIONS + EXPLAIN (auto)\n"
        "  // =====================================================\n"
        + quiz_tr_js
        + "\n"
        + sample_tr_js
        + "\n"
        + explain_fn
        + "\n"
        + engine_marker
    )
    if "// TRANSLATIONS + EXPLAIN" in html or "const QUIZ_TR" in html:
        html2, n = re.subn(
            r"  // =====================================================\n  // TRANSLATIONS \+ EXPLAIN \(auto\).*?  // =====================================================\n  // QUIZ ENGINE",
            lambda _m: inject,
            html,
            count=1,
            flags=re.S,
        )
        if n == 0:
            html2, n = re.subn(
                r"const QUIZ_TR = \[.*?\n  // =====================================================\n  // QUIZ ENGINE",
                lambda _m: inject,
                html,
                count=1,
                flags=re.S,
            )
        if n == 0:
            raise SystemExit("could not replace TRANSLATIONS block")
        html = html2
    else:
        if engine_marker not in html:
            raise SystemExit("engine marker not found")
        html = html.replace(engine_marker, inject, 1)

    # Ensure makeEngine uses buildExplainPanel
    new_explain = (
        "${locked?`<div class=\"${ch===q.a?'correct-hint':'wrong-hint'}\">"
        "${ch===q.a?'✅ Chính xác!':'❌ Sai — đáp án đúng: '+q.a+(wrongSet?` · Đã lưu vào câu sai`:'')}</div>"
        "${buildExplainPanel(q, (prefix==='s'?SAMPLE_TR:QUIZ_TR)[idx], ch)}`:''}"
    )
    html2, n = re.subn(
        r"\$\{locked\?`<div class=\"\$\{ch===q\.a\?'correct-hint':'wrong-hint'\}\}[\s\S]*?`:''\}",
        lambda _m: new_explain,
        html,
        count=1,
    )
    if n == 0:
        print("WARN: makeEngine explain pattern not found (maybe already ok)")
    else:
        html = html2

    new_w = (
        "${locked?`<div class=\"${choice===q.a?'correct-hint':'wrong-hint'}\">"
        "${choice===q.a?'✅ Chính xác! Đã gỡ khỏi danh sách.':'❌ Vẫn sai — đáp án đúng: '+q.a}</div>"
        "${buildExplainPanel(q, (prefix==='sw'?SAMPLE_TR:QUIZ_TR)[qi], choice)}`:''}"
    )
    html2, n = re.subn(
        r"\$\{locked\?`<div class=\"\$\{choice===q\.a\?'correct-hint':'wrong-hint'\}\}[\s\S]*?`:''\}",
        lambda _m: new_w,
        html,
        count=1,
    )
    if n == 0:
        print("WARN: wrong-engine explain pattern not found (maybe already ok)")
    else:
        html = html2

    path.write_text(html, encoding="utf-8")
    print("patched index.html", path.stat().st_size)


def main():
    quiz = json.loads(Path("_quiz_raw.json").read_text(encoding="utf-8"))
    sample = json.loads(Path("_sample_raw.json").read_text(encoding="utf-8"))
    print("quiz", len(quiz), "sample", len(sample))

    quiz_tr = enrich(quiz)
    sample_tr = enrich(sample)

    Path("_quiz_tr.json").write_text(json.dumps(quiz_tr, ensure_ascii=False, indent=2), encoding="utf-8")
    Path("_sample_tr.json").write_text(json.dumps(sample_tr, ensure_ascii=False, indent=2), encoding="utf-8")

    quiz_js = to_js_array("QUIZ_TR", quiz_tr)
    sample_js = to_js_array("SAMPLE_TR", sample_tr)
    fn = build_explain_html_fn()
    patch_index(quiz_js, sample_js, fn)
    print("done sample0 why:", sample_tr[0]["why"][:120] if sample_tr else "")
    print("done quiz0 qv:", quiz_tr[0]["qv"] if quiz_tr else "")


if __name__ == "__main__":
    main()
