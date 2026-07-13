# -*- coding: utf-8 -*-
"""Generate bilingual study summary HTML for JIT401 textbook."""
from pathlib import Path

# Structure: chapters with sections: each has jp bullets and vi bullets
# Focus: learnable key points + quiz coverage

CHAPTERS = [
{
"no": 1, "jp": "コンピュータの基礎", "vi": "Kiến thức cơ bản về máy tính",
"sections": [
{"jp": "デジタルとアナログ", "vi": "Digital và Analog",
"jp_rows": [
("デジタル", "数値化された（離散的な）量。コンピュータは 0 と 1 のみ使用"),
("アナログ", "連続的な量。長さ・重さ・時間など身の回りの物理量"),
("アナログ信号", "電流(mA)・電圧(mV)などの連続信号で送受信"),
("特徴比較", "アナログ＝曖昧なものをそのまま表現可／コピー劣化。デジタル＝正確・切れ目あり・コピー可だが曖昧さは残せない"),
],
"vi_rows": [
("Digital", "Đại lượng đã được số hóa (rời rạc). Máy tính chỉ dùng 0 và 1"),
("Analog", "Đại lượng liên tục. Độ dài, trọng lượng, thời gian…"),
("Tín hiệu analog", "Truyền bằng dòng điện (mA) hoặc điện áp (mV)"),
("So sánh", "Analog biểu diễn mơ hồ được / copy dễ méo. Digital chính xác, có thể copy, không giữ nguyên tính mơ hồ"),
]},
{"jp": "コンピュータの歴史", "vi": "Lịch sử máy tính",
"jp_rows": [
("紀元前", "アバカス（そろばんの起源）"),
("17世紀", "パスカルの計算機・ライプニッツの乗算機など機械式"),
("1930年代", "電気機械式計算機（リレー）"),
("1939年", "ABC試作器（アイオワ大学）"),
("1946年", "ENIAC：電子式計算機（エッカート・モークリー／ペンシルバニア大）。真空管約2万本"),
("1949年", "EDSAC：プログラム内蔵方式 → フォン・ノイマン型（現在の基礎）"),
],
"vi_rows": [
("Cổ đại", "Abacus (nguồn gốc bàn tính)"),
("Thế kỷ 17", "Máy cơ học: Pascal, Leibniz…"),
("Thập niên 1930", "Máy điện-cơ (relay)"),
("1939", "Máy thử ABC (ĐH Iowa)"),
("1946", "ENIAC: máy tính điện tử (Eckert & Mauchly). ~20.000 đèn điện tử"),
("1949", "EDSAC: stored-program → kiến trúc von Neumann"),
]},
{"jp": "コンピュータの機能・種類", "vi": "Chức năng & loại máy tính",
"jp_rows": [
("一言で", "コンピュータ＝記憶＋処理（どちらかだけでは不可）"),
("5要素", "演算・記憶・制御・入力・出力装置"),
("汎用計算機", "PC・スマホ・スパコン等（プログラム変更で多用途）"),
("専用計算機", "ゲーム機・カーナビ・電卓など"),
("ワークステーション", "形・性能はPCと近いが常時稼働で故障しにくい"),
],
"vi_rows": [
("Định nghĩa", "Máy tính = ghi nhớ + xử lý (thiếu một thì không gọi là máy tính)"),
("5 thành phần", "Tính toán, nhớ, điều khiển, vào, ra"),
("Máy đa dụng", "PC, smartphone, supercomputer…"),
("Máy chuyên dụng", "Máy game, GPS xe, máy tính cầm tay…"),
("Workstation", "Gần PC nhưng ổn định khi chạy liên tục"),
]},
{"jp": "ファイル・フォルダ・ドライブ", "vi": "File, folder, drive",
"jp_rows": [
("ファイル", "アプリで作ったデータを記録媒体に保存した単位。アイコンで種類表示"),
("拡張子", "ファイル名末尾の文字列（.doc/.xls/.htm など）で種類識別"),
("フォルダ", "ファイルを整理する入れ物。階層＝ディレクトリ構造"),
("パス", "C:\\ユーザー\\… のように位置を表す表記。カレントパス＝今見ている場所"),
("ドライブ", "(C:)(E:) などの名前。通常システムHDDはC"),
],
"vi_rows": [
("File", "Đơn vị lưu dữ liệu do ứng dụng tạo ra"),
("Phần mở rộng", "Chuỗi sau tên file: .doc, .xls, .htm… để nhận loại file"),
("Folder", "Hộp chứa file. Cấu trúc cây = directory"),
("Path", "Đường dẫn vị trí. Current path = thư mục đang xem"),
("Drive", "Tên như (C:)(E:). Ổ hệ thống thường là C"),
]},
]},
{
"no": 2, "jp": "インターネット利用", "vi": "Sử dụng Internet",
"sections": [
{"jp": "ホームページ検索", "vi": "Tìm kiếm trang web",
"jp_rows": [
("URL", "Uniform Resource Location：ホームページのアドレス／資源の場所指定"),
("ブラウザ", "Internet Explorer など閲覧ソフト"),
("ポータル", "Google・Yahoo など検索の入り口サイト"),
("フリーウェア", "利用無料でも配布・改変条件あり（何でも自由ではない）"),
("シェアウェア", "試用制限あり。フリーソフトではない"),
],
"vi_rows": [
("URL", "Địa chỉ trang / cách chỉ định vị trí tài nguyên trên Internet"),
("Trình duyệt", "Phần mềm xem web"),
("Portal", "Cổng tìm kiếm (Google, Yahoo…)"),
("Freeware", "Miễn phí dùng nhưng vẫn có điều kiện phân phối/sửa"),
("Shareware", "Dùng thử có hạn; không phải freeware"),
]},
{"jp": "Web2.0", "vi": "Web 2.0",
"jp_rows": [
("提唱", "2004年 ティム・オライリー"),
("本質", "双方向型HP。誰もが発信（Blog・SNS・Wiki・YouTube）"),
("Web1.0", "専門家が一方向に発信するメディア"),
("技術", "RSS／Ajax／トラックバック"),
("ロングテール", "購入者少なくても多品種で収入増。パレート(8:2)に対抗"),
("誤りやすい点", "送り手と受け手が固定されている → Web2.0では誤り"),
],
"vi_rows": [
("Đề xuất", "2004, Tim O'Reilly"),
("Bản chất", "Web hai chiều: ai cũng phát tán nội dung"),
("Web 1.0", "Một chiều, chuyên gia phát tin"),
("Công nghệ", "RSS, Ajax, trackback"),
("Long tail", "Bán nhiều loại dù ít người mua mỗi loại"),
("Hay sai", "Người gửi/nhận cố định → SAI với Web 2.0"),
]},
{"jp": "クラウドコンピューティング", "vi": "Cloud computing",
"jp_rows": [
("定義", "インターネット経由でコンピュータ資源・サービスを提供。接続先を意識しない（雲の上）"),
("提唱", "2006年 エリック・シュミット（Google）"),
("関連", "ASP・SaaS・グリッドも広い意味でクラウドの一種"),
],
"vi_rows": [
("Định nghĩa", "Cung cấp tài nguyên/dịch vụ qua Internet; user không cần biết máy ở đâu"),
("Đề xuất", "2006, Eric Schmidt (Google)"),
("Liên quan", "ASP, SaaS, grid computing cũng thuộc họ cloud theo nghĩa rộng"),
]},
{"jp": "メールのネチケット", "vi": "Netiquette email",
"jp_rows": [
("必須", "自分の氏名・連絡先明記／相手氏名・所属明記"),
("禁止", "著作権あるファイル送信／大きな添付（目安1MB超は確認）"),
("安全", "添付のウィルスチェック必須"),
("礼儀", "急な返事を求めない（期限は1週間程度余裕）"),
],
"vi_rows": [
("Bắt buộc", "Ghi rõ tên/liên hệ mình; ghi tên/chức danh người nhận"),
("Cấm", "Gửi file có bản quyền; đính kèm quá lớn"),
("An toàn", "Luôn quét virus file đính kèm"),
("Lịch sự", "Không đòi trả lời gấp (nên chừa ~1 tuần)"),
]},
{"jp": "知的所有権・法律", "vi": "Sở hữu trí tuệ",
"jp_rows": [
("著作権", "思想・感情の創作的表現を保護。創作時点で自動発生（登録不要）"),
("著作権の3種", "著作者人格権・著作者財産権・著作隣接権"),
("工業所有権", "技術の進歩を保護：特許・実用新案・意匠・商標"),
("特許権", "新規技術を保護（VN: Quyền sáng chế）"),
("実用新案", "技術の改良・考案を保護"),
("意匠権", "製品デザイン（形状・模様・色彩）"),
("商標権", "社名・ロゴなど商標"),
],
"vi_rows": [
("Bản quyền", "Bảo hộ biểu đạt sáng tạo; phát sinh ngay khi sáng tạo"),
("3 loại bản quyền", "Quyền nhân cách / tài sản / liền kề tác giả"),
("Sở hữu công nghiệp", "Bảo hộ tiến bộ kỹ thuật: patent, utility, design, trademark"),
("Patent", "Bảo hộ kỹ thuật mới (特許権)"),
("Utility model", "Bảo hộ cải tiến/cấu trúc"),
("Design right", "Thiết kế sản phẩm"),
("Trademark", "Tên công ty, logo…"),
]},
]},
{
"no": 3, "jp": "IT機器の現状", "vi": "Các thiết bị IT",
"sections": [
{"jp": "携帯電話の世代", "vi": "Thế hệ điện thoại di động",
"jp_rows": [
("第1世代", "アナログ通信。音声波をそのまま電波に置き換え。音質悪・盗聴リスク"),
("第2世代(~1992)", "デジタル通信。音質・セキュリティ向上（mova等）"),
("第3世代(~2001)", "高速データ通信。動画等送受信可（FOMA等）"),
("第3.5世代(~2006)", "さらに高速。アプリ快適利用"),
("第3.9世代", "WiMAX・LTE等。主にPC向け高速データ"),
("第4世代", "ブロードバンド前提の情報端末（教科書時点で未商品化）"),
],
"vi_rows": [
("1G", "Analog: sóng thoại → sóng radio trực tiếp"),
("2G", "Digital: chất lượng thoại & bảo mật tốt hơn"),
("3G", "Truyền dữ liệu tốc độ cao, video…"),
("3.5G", "Nhanh hơn 3G, app mượt hơn"),
("3.9G", "WiMAX/LTE… chủ yếu data cho PC"),
("4G", "Terminal băng rộng (theo sách năm 2013)"),
]},
{"jp": "通信・ハードウェア", "vi": "Truyền tin & phần cứng",
"jp_rows": [
("SIMカード", "契約者番号を記録するICカード（Thẻ SIM）"),
("抵抗膜方式", "押した位置の縦横抵抗値を測定（圧力）"),
("静電容量方式", "指先とセンサ間の電荷を測定。マルチタッチ向き"),
("CMOSセンサ", "光の強弱を記録する素子＋増幅器。省電力"),
("液晶", "偏光板＋液晶分子で透過/遮断。低消費電力"),
],
"vi_rows": [
("SIM", "IC card ghi số thuê bao"),
("Điện trở (resistive)", "Đo điện trở dọc/ngang khi nhấn"),
("Điện dung (capacitive)", "Đo điện tích giữa ngón tay và cảm biến"),
("CMOS", "Cảm biến ánh sáng + khuếch đại, ít tốn điện"),
("LCD", "Điều khiển sáng qua phân cực; tiết kiệm điện"),
]},
]},
{
"no": 4, "jp": "データ通信技術", "vi": "Công nghệ truyền dữ liệu (kết nối)",
"sections": [
{"jp": "有線接続", "vi": "Kết nối có dây",
"jp_rows": [
("CATV", "ケーブルテレビ余帯域を通信に利用。高速"),
("ADSL", "Asymmetric Digital Subscriber Line。下り＞上り。電話線利用。距離で速度低下"),
("FTTH", "Fiber To The Home。光ファイバ。安定高速。最大約100Mbps（教科書）。ラストワンマイル解決"),
("PLC", "電灯線(100V)でデータ通信。アダプタ必要"),
("IP電話", "ADSL/FTTH等で音声をIPパケット送信（Skypeは無償自己責任型と区別）"),
],
"vi_rows": [
("CATV", "Dùng băng thông dư của truyền hình cáp"),
("ADSL", "Đường thuê bao số bất đối xứng; download nhanh hơn upload"),
("FTTH", "Cáp quang về nhà; ổn định, ~100 Mbps (theo giáo trình)"),
("PLC", "Truyền data qua dây điện 100V"),
("IP phone", "Thoại qua Internet dạng gói IP"),
]},
{"jp": "無線通信手段", "vi": "Kết nối không dây",
"jp_rows": [
("IrDA", "赤外線。遮蔽物があると不可。近距離"),
("非接触IC", "Suica等。IC＋アンテナ。RFID関連"),
("Bluetooth", "電波(~2.4GHz)。約10m・約1Mbps。携帯/PC/マウス等"),
("Wi-Fi", "Wireless Fidelity。無線LANの愛称。IEEE802.11a/b/g/n"),
],
"vi_rows": [
("IrDA", "Hồng ngoại; bị che là mất sóng"),
("IC không tiếp xúc", "Suica…; RFID"),
("Bluetooth", "Sóng radio ~10m, ~1Mbps (không phải hồng ngoại)"),
("Wi-Fi", "Tên gọi thân thiện của WLAN"),
]},
]},
{
"no": 5, "jp": "ネットワーク", "vi": "Mạng máy tính",
"sections": [
{"jp": "LAN/WAN・インターネット", "vi": "LAN/WAN & Internet",
"jp_rows": [
("LAN", "局所ネットワーク（会社・学校内）"),
("WAN", "広域ネットワーク"),
("インターネット", "ネットワークの間＝網の網。WWW＝World Wide Web"),
],
"vi_rows": [
("LAN", "Mạng cục bộ"),
("WAN", "Mạng diện rộng"),
("Internet", "Mạng của các mạng; WWW = mạng nhện toàn cầu"),
]},
{"jp": "ネットワーク形態", "vi": "Hình thái mạng",
"jp_rows": [
("バス型", "1本ケーブル共有。衝突しやすく現在少ない"),
("スター型", "ハブ中心。増設容易で最もよく使われる（Hình thái mạng sao）"),
("リング型", "環状。1台故障で影響大"),
],
"vi_rows": [
("Bus", "Dùng chung 1 đường; dễ va chạm"),
("Star", "Qua hub/switch; phổ biến nhất"),
("Ring", "Vòng tròn; 1 máy hỏng ảnh hưởng lớn"),
]},
{"jp": "処理構成", "vi": "Cấu hình xử lý",
"jp_rows": [
("集中処理", "ホストが全処理。端末は入出力のみ"),
("分散処理", "複数PCで処理分担（Hệ thống xử lý phân tán）"),
("P2P", "対等にサービス提供しあう分散形態"),
("クライアント/サーバ", "提供側＝サーバ、利用側＝クライアント"),
("密結合MP", "複数処理装置がメモリ共有で並列"),
("疎結合MP", "各処理装置が独立メモリで並列"),
("ファイアウォール", "内部網とInternetの間で不正アクセス防止"),
("DMZ", "公開サーバ用の緩衝地帯"),
],
"vi_rows": [
("Tập trung", "Host xử lý hết; terminal chỉ I/O"),
("Phân tán", "Nhiều máy chia sẻ xử lý"),
("P2P", "Các máy ngang hàng cung cấp dịch vụ cho nhau"),
("Client/Server", "Server cung cấp, client nhận"),
("Tightly coupled", "Nhiều CPU/ALU chia sẻ bộ nhớ"),
("Loosely coupled", "Mỗi bộ xử lý có bộ nhớ riêng"),
("Firewall", "Chặn truy cập bất hợp pháp giữa trong/ngoài"),
("DMZ", "Vùng đệm cho server công khai"),
]},
]},
{
"no": 6, "jp": "インターネット技術", "vi": "Công nghệ Internet (OSI/HTML)",
"sections": [
{"jp": "プロトコル・OSI", "vi": "Giao thức & OSI",
"jp_rows": [
("プロトコル", "データ転送の規約"),
("OSI", "Open System Interconnection。7層モデル"),
("例", "物理層：電圧・コネクタ／アプリ層HTTP／トランスポートTCP／ネットワークIP"),
],
"vi_rows": [
("Protocol", "Quy ước truyền dữ liệu"),
("OSI", "Mô hình 7 tầng chuẩn hóa"),
("Ví dụ", "HTTP (app), TCP (transport), IP (network)"),
]},
{"jp": "IPアドレスとドメイン名", "vi": "IP & tên miền",
"jp_rows": [
("IPアドレス", "コンピュータの住所番号。覚えにくい数字列"),
("ドメイン名", "分かりやすい名前（Tên miền）。DNSが変換"),
(".com のみ", "国名なし＝アメリカのドメイン"),
("URL", "Internet上のサービス・ファイルの場所を特定する記述方式"),
("誤り", "IPは覚えやすい → 誤り（覚えにくい）"),
],
"vi_rows": [
("IP", "Số địa chỉ máy; khó nhớ"),
("Domain", "Tên dễ nhớ; DNS chuyển sang IP"),
(".com", "Không có mã quốc gia → Mỹ"),
("URL", "Cách mô tả vị trí tài nguyên trên Internet"),
("Sai hay gặp", "IP dễ nhớ → SAI"),
]},
{"jp": "HTML・XML", "vi": "HTML & XML",
"jp_rows": [
("HTML", "Hyper Text Markup Language。文字種類・配置・画像・動画・音・リンクを記述"),
("XML", "eXtensible Markup Language。ユーザが独自タグ定義可"),
],
"vi_rows": [
("HTML", "Ngôn ngữ đánh dấu siêu văn bản: chữ, layout, ảnh, video, âm thanh, link"),
("XML", "Cho phép user tự định nghĩa thẻ"),
]},
]},
{
"no": 7, "jp": "ビジネスにおけるインターネット利用", "vi": "TMĐT & bảo vệ thông tin",
"sections": [
{"jp": "電子商取引", "vi": "Thương mại điện tử",
"jp_rows": [
("電子商取引", "eコマース。取引プロセスの電子化（Thương mại điện tử）"),
("EDI", "電子データ交換の標準化。受発注・決済・配送"),
("EOS", "オンライン受発注システム（Hệ thống đặt hàng trực tuyến）"),
("CALS", "製造業の全過程電子化標準"),
("Cookie", "ブラウザがサイトのID情報を記憶"),
("CRM", "顧客関係管理。データマイニングで予測"),
("スカベンジング", "残された個人情報を収集する犯罪"),
("OECD8原則", "利用制限の原則あり。「利用無制限」は誤り"),
],
"vi_rows": [
("E-commerce", "Số hóa quy trình giao dịch"),
("EDI", "Chuẩn trao đổi dữ liệu điện tử"),
("EOS", "Hệ thống đặt hàng trực tuyến"),
("CALS", "Chuẩn hóa điện tử hóa toàn bộ sản xuất"),
("Cookie", "Trình duyệt nhớ ID website"),
("CRM", "Quản trị quan hệ khách hàng"),
("Scavenging", "Thu thập thông tin cá nhân còn sót"),
("OECD 8", "Có nguyên tắc hạn chế sử dụng; không phải vô hạn"),
]},
]},
{
"no": 8, "jp": "暗号化", "vi": "Mã hóa",
"sections": [
{"jp": "暗号の基礎", "vi": "Cơ bản mã hóa",
"jp_rows": [
("暗号化", "原文が推測できないように変換（Giải mã＝復号化）"),
("シーザー暗号", "文字をN文字ずらす換字式古典暗号"),
("転置式", "文字の並び順・位置を入れ替えて暗号化"),
("共通鍵", "送受信で同じ鍵を共有（秘密鍵方式）"),
("公開鍵", "暗号化鍵を公開、復号鍵は秘密。現在主流"),
("SSL", "Secure Socket Layer。公開鍵＋秘密鍵で暗号化通信。https・錠アイコン"),
],
"vi_rows": [
("Mã hóa", "Biến đổi để không đoán được bản gốc"),
("Caesar", "Dịch ký tự N vị trí"),
("Hoán vị", "Đổi thứ tự ký tự"),
("Khóa chung", "Hai bên dùng chung 1 khóa"),
("Khóa công khai", "Khóa mã hóa công khai; khóa giải mật"),
("SSL", "Truyền tin mã hóa; https + biểu tượng ổ khóa"),
]},
]},
{
"no": 9, "jp": "セキュリティ", "vi": "An toàn & bảo mật",
"sections": [
{"jp": "事故・ウィルス・攻撃", "vi": "Sự cố, virus, tấn công",
"jp_rows": [
("故障以外", "プログラムミス（バグ）による不具合が問題"),
("ウィルス", "人為プログラム。感染→潜伏→発病"),
("ワーム", "独立増殖するタイプ（広義でウィルスに含むことも）"),
("トロイの木馬", "本物画面に見せかけパスワード窃盗（Ngựa thành Troy）"),
("フィッシング", "偽サイトで番号詐取"),
("DoS", "大量アクセスで使用不能にする攻撃"),
("削除すべき拡張子", ".exe / .vbs / .scr / .pif は即座に削除"),
("パスワードNG", "氏名・生年月日・電話番号など推測容易なもの"),
],
"vi_rows": [
("Ngoài hỏng hóc", "Lỗi chương trình (bug) cũng nguy hiểm"),
("Virus", "Chương trình nhân tạo: lây → ủ → phát"),
("Worm", "Tự nhân bản độc lập"),
("Trojan", "Giả màn hình nhập để đánh cắp mật khẩu"),
("Phishing", "Giả trang web ngân hàng…"),
("DoS", "Tấn công từ chối dịch vụ"),
("File nguy hiểm", "Xóa ngay .exe/.vbs/.scr/.pif"),
("Password xấu", "Tên, ngày sinh, SĐT…"),
]},
{"jp": "稼働率", "vi": "Tỷ lệ sẵn sàng",
"jp_rows": [
("稼働率", "MTBF / (MTBF + MTTR)"),
("MTBF", "平均故障間隔（品質）"),
("MTTR", "平均修理時間（保守性）"),
("直列", "A × B"),
("並列", "1 − (1−A)(1−B)"),
("信頼度成長曲線", "累積エラーはS字曲線"),
("バスタブ曲線", "一般機械の故障率曲線（初期・安定期・摩耗）"),
],
"vi_rows": [
("Availability", "MTBF/(MTBF+MTTR)"),
("MTBF", "Thời gian trung bình giữa 2 lần hỏng"),
("MTTR", "Thời gian sửa trung bình"),
("Nối tiếp", "A × B"),
("Song song", "1 − (1−A)(1−B)"),
("Đường tăng độ tin cậy", "Dạng chữ S"),
("Bathtub", "Đường cong hỏng hóc thiết bị cơ"),
]},
]},
{
"no": 10, "jp": "コンピュータの構造", "vi": "Cấu trúc máy tính",
"sections": [
{"jp": "5要素と内部", "vi": "5 thành phần & bên trong",
"jp_rows": [
("5要素", "演算・記憶・制御・入力・出力"),
("演算装置", "Thiết bị tính toán số học。CPUが担う"),
("マザーボード", "PC内で最大面積のメイン基板"),
("CPU", "Central Processing Unit。処理の中心。MPUとも。演算＋制御"),
("バス/チップセット", "電気の通り道／データ制御IC群"),
("RAM", "Random Access Memory。読み書き自由。電源切で消える"),
("ROM", "Read Only Memory。読み取り専用（Bộ nhớ chỉ đọc）"),
("キャッシュ", "アクセス速度が最も高速（容量小）"),
("OSの役割", "CPU・メモリ等の資源をアプリに割り当て"),
("UI機能", "マウス/KB操作、ウィンドウ見え方、ファイル扱いを決定"),
],
"vi_rows": [
("5 phần", "Tính toán, nhớ, điều khiển, vào, ra"),
("ALU", "Bộ tính toán số học (trong CPU)"),
("Motherboard", "Bo mạch chính lớn nhất"),
("CPU", "Trung tâm xử lý; còn gọi MPU"),
("Bus/Chipset", "Đường truyền điện / nhóm IC điều khiển"),
("RAM", "Nhớ truy cập ngẫu nhiên; mất khi tắt nguồn"),
("ROM", "Chỉ đọc"),
("Cache", "Truy cập nhanh nhất"),
("Vai trò OS", "Cấp phát CPU, RAM… cho ứng dụng"),
("Giao diện người dùng", "Quyết định cách dùng chuột/bàn phím/cửa sổ/file"),
]},
]},
{
"no": 11, "jp": "CPUの動作原理", "vi": "Nguyên lý CPU & mạch logic",
"sections": [
{"jp": "論理素子・回路", "vi": "Phần tử logic & mạch",
"jp_rows": [
("チューリングマシン", "CPU動作原理の基礎モデル"),
("4世代", "真空管→トランジスタ→IC→LSI"),
("第1世代", "真空管"),
("IC", "集積回路（Mạch tích hợp）"),
("AND", "スイッチ直列。両方ONで出力ON"),
("OR", "スイッチ並列。1つでもONで出力ON"),
("NOT", "入力反転"),
],
"vi_rows": [
("Turing machine", "Mô hình nền tảng cho CPU"),
("4 thế hệ", "Đèn điện tử → transistor → IC → LSI"),
("Thế hệ 1", "Vacuum tube"),
("IC", "Mạch tích hợp"),
("AND", "Nối tiếp; cả hai ON mới ra ON"),
("OR", "Song song; một ON là ra ON"),
("NOT", "Đảo bit"),
]},
]},
{
"no": 12, "jp": "演算処理", "vi": "Xử lý tính toán (số nhị phân)",
"sections": [
{"jp": "2進数", "vi": "Hệ nhị phân",
"jp_rows": [
("データ表現", "すべて0と1の並び"),
("10進/2進/16進", "Hệ thập phân / nhị phân / thập lục phân"),
("例", "1100₂ = 12₁₀；1+1=10₂（繰り上がり）"),
("2の補数", "負数表現の標準。引き算を足し算に"),
("丸め誤差", "0.1₁₀は2進で無限循環 → 小数は完全表現できない"),
],
"vi_rows": [
("Biểu diễn", "Mọi dữ liệu là dãy 0 và 1"),
("Cơ số", "Thập phân / nhị phân / hex"),
("Ví dụ", "1100₂=12; 1+1=10₂"),
("Bù 2", "Biểu diễn số âm chuẩn"),
("Sai số", "Số thực thập phân không luôn biểu diễn chính xác"),
]},
]},
{
"no": 13, "jp": "情報量", "vi": "Lượng thông tin",
"sections": [
{"jp": "単位と文字", "vi": "Đơn vị & ký tự",
"jp_rows": [
("最小単位", "bit（binary digit）"),
("1 byte", "8 bit"),
("1 GB", "1,024 MB（2¹⁰倍系）"),
("英字1文字", "256種 → 8 bit = 1 byte（ASCII）"),
("日本語1文字", "65,536種 → 16 bit = 2 byte（Unicode等）"),
("情報量", "Lượng thông tin"),
],
"vi_rows": [
("Đơn vị nhỏ nhất", "bit"),
("1 byte", "8 bit"),
("1 GB", "1.024 MB"),
("1 chữ cái Latin", "8 bit = 1 byte"),
("1 chữ Nhật", "16 bit = 2 byte (Unicode)"),
("Thuật ngữ", "情報量 = Lượng thông tin"),
]},
]},
{
"no": 14, "jp": "マルチメディア表現", "vi": "Đa phương tiện",
"sections": [
{"jp": "MIDI・音声・画像・動画", "vi": "MIDI, âm thanh, ảnh, video",
"jp_rows": [
("MIDI", "楽器演奏命令をデジタル伝達。命令≤256種 → 8 bit=1 byte"),
("着信メロディ(quiz)", "MIDIコード解釈。高音質な実楽曲再生は不可とされる（問題の答え）"),
("サンプリング周波数", "1秒あたりの測定回数(Hz)。CD=44.1kHz（Tần số lấy mẫu）"),
("量子化数", "波の高さを何段階で表すか（Số lượng tử hóa）"),
("VGA", "640×480（Độ phân giải）"),
("RGB各8bit", "1画素=24bit=3 byte"),
("dpi", "スキャナ/プリンタ解像度"),
("動画", "静止画×フレームレート×秒。映画24、日本TV30回/秒"),
],
"vi_rows": [
("MIDI", "Lệnh nhạc cụ số; 1 lệnh 8 bit"),
("Nhạc chuông", "Theo quiz: không phải phát nhạc chất lượng cao như audio"),
("Tần số lấy mẫu", "Lần đo/giây; CD 44,1 kHz"),
("Lượng tử hóa", "Số mức biểu diễn biên độ"),
("VGA", "640×480"),
("RGB 8 bit", "1 pixel = 3 byte"),
("dpi", "Độ phân giải máy quét/in"),
("Video", "Khung hình × fps × giây; TV Nhật 30 fps"),
]},
]},
{
"no": 15, "jp": "データ通信（圧縮）", "vi": "Truyền dữ liệu & nén",
"sections": [
{"jp": "通信速度・圧縮", "vi": "Tốc độ & nén",
"jp_rows": [
("単位", "bps = bit per second"),
("ブロードバンド", "概ね100Kbps〜1Mbps以上"),
("データ圧縮", "Nén dữ liệu"),
("音声圧縮", "フーリエ変換＝波を正弦波に分解。音の波の性質を利用"),
("ランレングス", "同じ色がいくつ並ぶかを記述。単純。色変化多いと増えることも"),
("JPEG/GIF/MPEG", "画像JPEG・GIF／動画MPEG（差分記録）。MP3=MPEG1 Layer3"),
],
"vi_rows": [
("Đơn vị", "bps"),
("Băng rộng", "Khoảng ≥100 Kbps–1 Mbps"),
("Nén dữ liệu", "Data compression"),
("Nén âm", "Biến đổi Fourier; dùng tính chất sóng"),
("Run-length", "Ghi số pixel cùng màu liên tiếp; không luôn nhỏ hơn"),
("Định dạng", "JPEG/GIF/MPEG; MP3 thuộc MPEG1 L3"),
]},
]},
{
"no": 16, "jp": "オペレーティングシステム", "vi": "Hệ điều hành",
"sections": [
{"jp": "OSの機能", "vi": "Chức năng OS",
"jp_rows": [
("位置づけ", "アプリとハードの仲介（基本ソフト）"),
("①UI", "操作・ウィンドウ・ファイル扱いを決定"),
("②ハード吸収", "機種差を隠す"),
("③記憶管理", "キャッシュ↔メモリ↔HDD。仮想記憶・スワッピング"),
("④プロセス管理", "マルチタスクスケジューリング"),
("⑤ユーザ管理", "マルチユーザ・権限"),
("資源割当", "CPUやメモリをアプリに割り当てる"),
],
"vi_rows": [
("Vị trí", "Trung gian app ↔ hardware"),
("UI", "Quyết định cách thao tác"),
("Che khác biệt HW", "Chuẩn hóa phần cứng"),
("Quản lý nhớ", "Cache–RAM–HDD; virtual memory"),
("Process", "Đa nhiệm"),
("User", "Đa người dùng"),
("Cấp phát tài nguyên", "Gán CPU/RAM cho ứng dụng"),
]},
]},
{
"no": 17, "jp": "データベース理論", "vi": "Cơ sở dữ liệu",
"sections": [
{"jp": "DBの要点", "vi": "Điểm chính CSDL",
"jp_rows": [
("3要素", "検索速度・データ量・完備性。大量データでは検索速度が最重要"),
("階層的表現", "親・子・孫の木構造。最上位からたどる（Cấu trúc hình cây）"),
("網的表現", "親子を網状につなぐ"),
("関係的表現", "表（リレーショナル）。現在主流（Cơ sở dữ liệu quan hệ）"),
("キーワード", "Từ khóa"),
("昇順/降順", "Thứ tự tăng dần / giảm dần"),
],
"vi_rows": [
("3 yếu tố", "Tốc độ tìm, khối lượng, tính toàn vẹn — tốc độ tìm quan trọng nhất"),
("Phân cấp", "Cây parent–child–grandchild"),
("Lưới", "Mạng quan hệ cha–con"),
("Quan hệ", "Bảng quan hệ (RDBMS)"),
("Keyword", "Từ khóa"),
("ASC/DESC", "Tăng dần / giảm dần"),
]},
]},
{
"no": 18, "jp": "データベース記述", "vi": "SQL / mô tả dữ liệu",
"sections": [
{"jp": "SQL基礎", "vi": "Cơ bản SQL",
"jp_rows": [
("SQL", "関係DB操作用言語。検索・並べ替え・結合など"),
("SELECT", "条件検索の基本"),
("ORDER BY", "並べ替え（昇順・降順）"),
("JOIN", "表の結合"),
],
"vi_rows": [
("SQL", "Ngôn ngữ thao tác CSDL quan hệ"),
("SELECT", "Truy vấn theo điều kiện"),
("ORDER BY", "Sắp xếp"),
("JOIN", "Kết nối bảng"),
]},
]},
{
"no": 19, "jp": "プログラミングの基礎", "vi": "Cơ sở lập trình",
"sections": [
{"jp": "言語とオブジェクト", "vi": "Ngôn ngữ & OOP",
"jp_rows": [
("低級言語", "機械語。CPU依存。汎用性・読みやすさに問題（Java/C++は低級ではない）"),
("高級言語", "Java・C++など。コンパイラで機械語へ（Ngôn ngữ bậc cao）"),
("手続型", "Howを詳細記述（Java, C++）"),
("非手続型", "Whatを記述（SQL等）"),
("オブジェクト指向", "「もの」を中心。再利用しやすい"),
("UI設計", "アルゴリズム検討時だけでは不十分。試作して修正"),
],
"vi_rows": [
("Ngôn ngữ cấp thấp", "Máy / assembly; phụ thuộc CPU"),
("Ngôn ngữ bậc cao", "Java, C++…"),
("Thủ tục", "Mô tả How"),
("Phi thủ tục", "Mô tả What"),
("Hướng đối tượng", "Lấy 'vật' (object) làm trung tâm"),
("Thiết kế UI", "Không đủ chỉ lúc nghĩ thuật toán; cần prototype"),
]},
]},
{
"no": 20, "jp": "アルゴリズム", "vi": "Giải thuật",
"sections": [
{"jp": "アルゴリズム・ソート", "vi": "Thuật toán & sắp xếp",
"jp_rows": [
("アルゴリズム", "入力・出力・処理手順を明確にした基本手順"),
("フローチャート", "図形と矢印で表現した流れ図"),
("ソーティング", "昇順・降順に並べ替え。単純比較はO(n²)で非実用"),
("例", "バブルソート・クイックソート・マージソート等"),
],
"vi_rows": [
("Algorithm", "Quy trình xử lý rõ input/output/steps"),
("Flowchart", "Sơ đồ khối"),
("Sorting", "Sắp xếp; so sánh thô quá chậm với n lớn"),
("Ví dụ", "Bubble, quick, merge…"),
]},
]},
]

# Quiz must-remember facts (cross-check supplements)
QUIZ_EXTRA = [
("ENIAC年", "1946 / EDSAC・ノイマン型 1949 / 電気機械式 1930年代"),
("コンピュータ式", "記憶＋処理"),
("5要素", "演算・記憶・制御・入力・出力"),
("ROM/RAM", "ROM=読み取り専用=Bộ nhớ chỉ đọc / RAM=Random Access Memory"),
("拡張子", ".xls Excel / .htm HTML / 末尾文字列"),
("URL", "ホームページアドレス／資源場所"),
("Web2.0", "2004 O'Reilly・双方向・ロングテール。送り手受け手固定は誤り"),
("クラウド", "2006 Schmidt・Internet経由で資源提供"),
("ネチケット", "著作権ファイル送らない。.exe/.vbs/.scr/.pif即削除"),
("知財", "著作権3種／特許=新規技術／意匠=デザイン／商標=ロゴ／工業所有権=技術の進歩保護／創作で自動発生"),
("携帯世代", "1Gアナログ波そのまま／2Gデジタル／3G高速データ"),
("タッチ", "抵抗膜=抵抗値／静電容量=電荷／CMOS=光＋増幅"),
("接続", "FTTH~100Mbps／ADSL=Asymmetric…／PLC=電灯線／Wi-Fi=Wireless Fidelity／BT≠赤外線／Suica=非接触IC"),
("ネット", "スター型最多／分散処理／P2P対等／密結合=メモリ共有／疎結合=独立メモリ"),
("OSI", "7層／TCP=トランスポート／.com=米／HTML≠独自タグ／XML=独自タグ可／IPでコンピュータ特定"),
("商取引", "EOS=オンライン受発注／EDI=データ交換標準／Cookie／OECDに利用無制限なし／スカベンジング=収集"),
("暗号", "暗号化=推測不可変換／シーザー=ずらす／転置=順序入替／SSL=公開+秘密鍵"),
("セキュ", "ウィルス人為／トロイの木馬／稼働率=MTBF/(MTBF+MTTR)／並列=1-(1-A)(1-B)／成長曲線=S字"),
("構造", "MB=最大基板／CPU≠最大基板／キャッシュ最速／OS資源割当／UI=操作決定"),
("論理", "4世代真空管…／AND直列／OR並列／チューリング"),
("2進", "1100=12／1+1=10₂／0と1の並び"),
("情報量", "bit最小／英1B／日2B／Unicode65536／1GB=1024MB"),
("MM", "MIDI=8bit／CD44.1kHz／VGA640×480／RGB3B／TV30fps／dpi=スキャナプリンタ"),
("圧縮", "bps／フーリエ＝正弦波分解／音声は波の性質／ランレングス≠常に縮小"),
("DB/Prog", "検索速度最重要／階層=親子孫／関係DB／OOP=もの中心／高級=JavaC++／低級≠Java"),
("専門用語JP↔VN", "電流=Điện lưu/Dòng điện／分散=Hệ thống xử lý phân tán／データ圧縮=Nén dữ liệu／高水準=Ngôn ngữ bậc cao／昇順=Thứ tự tăng dần／キーワード=Từ khóa"),
]

def esc(s):
    return (s.replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;")
            .replace('"', "&quot;"))

def table_jp(rows):
    h = ['<table class="sum"><thead><tr><th style="width:22%">項目</th><th>要点（教科書）</th></tr></thead><tbody>']
    for a, b in rows:
        h.append(f"<tr><td><strong>{esc(a)}</strong></td><td>{esc(b)}</td></tr>")
    h.append("</tbody></table>")
    return "\n".join(h)

def table_vi(rows):
    h = ['<table class="sum vi"><thead><tr><th style="width:22%">Mục</th><th>Nội dung tóm tắt</th></tr></thead><tbody>']
    for a, b in rows:
        h.append(f"<tr><td><strong>{esc(a)}</strong></td><td>{esc(b)}</td></tr>")
    h.append("</tbody></table>")
    return "\n".join(h)

parts = []
parts.append("""<!DOCTYPE html>
<html lang="vi">
<head>
<meta charset="utf-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1"/>
<title>JIT401 — Bảng tóm tắt học nhanh (JP + VI)</title>
<style>
:root{--bg:#0b0d12;--card:#141822;--border:#2a3142;--text:#e8eaef;--muted:#9aa3b5;--jp:#7cb8ff;--vi:#7ddea2;--acc:#ffb86b;--quiz:#ff7b9c}
*{box-sizing:border-box}
body{margin:0;font-family:"Segoe UI","Noto Sans JP","Meiryo",system-ui,sans-serif;background:var(--bg);color:var(--text);line-height:1.55}
header{padding:28px 20px 18px;background:linear-gradient(160deg,#0a0a0f,#152238 60%,#0d2137);border-bottom:1px solid var(--border);position:sticky;top:0;z-index:10}
header h1{margin:0 0 6px;font-size:clamp(18px,3vw,28px);letter-spacing:-.5px}
header p{margin:0;color:var(--muted);font-size:13px;max-width:900px}
.wrap{max-width:980px;margin:0 auto;padding:18px 16px 80px}
.toc{background:var(--card);border:1px solid var(--border);border-radius:12px;padding:14px 16px;margin-bottom:22px}
.toc h2{margin:0 0 10px;font-size:15px;color:var(--acc)}
.toc ol{margin:0;padding-left:20px;columns:2;gap:24px;font-size:13px}
.toc a{color:var(--jp);text-decoration:none}
.toc a:hover{text-decoration:underline}
.ch{margin:28px 0;scroll-margin-top:90px}
.ch-head{display:flex;flex-wrap:wrap;align-items:baseline;gap:8px 14px;margin-bottom:10px;padding-bottom:8px;border-bottom:2px solid #2d4a73}
.ch-no{font-size:12px;font-weight:700;color:#0a84ff;letter-spacing:1px}
.ch-title{font-size:20px;font-weight:700}
.ch-sub{color:var(--muted);font-size:13px}
.sec{background:var(--card);border:1px solid var(--border);border-radius:12px;padding:14px 14px 10px;margin:12px 0}
.sec h3{margin:0 0 4px;font-size:15px}
.sec .sec-vi{margin:0 0 10px;color:var(--vi);font-size:12px}
.lbl{display:inline-block;font-size:11px;font-weight:700;letter-spacing:.5px;padding:2px 8px;border-radius:999px;margin:8px 0 6px}
.lbl.jp{background:rgba(124,184,255,.15);color:var(--jp)}
.lbl.vi{background:rgba(125,222,162,.12);color:var(--vi)}
table.sum{width:100%;border-collapse:collapse;font-size:13px;margin-bottom:6px}
table.sum th,table.sum td{border:1px solid var(--border);padding:8px 10px;vertical-align:top}
table.sum th{background:#1c2436;text-align:left;font-size:12px;color:var(--muted)}
table.sum.vi th{background:#16261d}
table.sum tr:nth-child(even) td{background:rgba(255,255,255,.02)}
.quiz{background:linear-gradient(180deg,#1a1220,#141822);border:1px solid #5a2a3c;border-radius:12px;padding:16px;margin-top:36px}
.quiz h2{margin:0 0 8px;color:var(--quiz);font-size:18px}
.quiz p{color:var(--muted);font-size:13px;margin:0 0 12px}
.quiz ul{margin:0;padding-left:18px;font-size:13px}
.quiz li{margin:6px 0}
.pass{margin-top:16px;padding:12px;border-radius:10px;background:rgba(48,209,88,.1);border:1px solid rgba(48,209,88,.35);color:#9dffb5;font-size:13px}
footer{margin-top:40px;color:var(--muted);font-size:12px;text-align:center}
@media(max-width:700px){.toc ol{columns:1}}
</style>
</head>
<body>
<header>
  <h1>JIT401 — Bảng tóm tắt học nhanh</h1>
  <p>Nguồn: <strong>JIT401-Giao-trinh-IT.docx</strong> (情報技術日本語テキスト, 20 chương).
  Mỗi mục có <strong>bảng tiếng Nhật</strong> (theo sách) và <strong>bảng dịch tiếng Việt</strong> ngay bên dưới.
  Cuối trang: đối chiếu quiz trong <code>index.html</code>.</p>
</header>
<div class="wrap">
<div class="toc">
<h2>Mục lục / 目次</h2>
<ol>
""")

for ch in CHAPTERS:
    parts.append(f'<li><a href="#ch{ch["no"]}">Ch.{ch["no"]} {esc(ch["jp"])}</a> — {esc(ch["vi"])}</li>')
parts.append('</ol></div>\n')

for ch in CHAPTERS:
    parts.append(f'<section class="ch" id="ch{ch["no"]}">')
    parts.append(f'<div class="ch-head"><span class="ch-no">CHAPTER {ch["no"]}</span>')
    parts.append(f'<span class="ch-title">{esc(ch["jp"])}</span>')
    parts.append(f'<span class="ch-sub">{esc(ch["vi"])}</span></div>')
    for sec in ch["sections"]:
        parts.append('<div class="sec">')
        parts.append(f'<h3>{esc(sec["jp"])}</h3>')
        parts.append(f'<p class="sec-vi">{esc(sec["vi"])}</p>')
        parts.append('<span class="lbl jp">表1 · 日本語（教科書）</span>')
        parts.append(table_jp(sec["jp_rows"]))
        parts.append('<span class="lbl vi">表2 · Bản dịch tiếng Việt</span>')
        parts.append(table_vi(sec["vi_rows"]))
        parts.append('</div>')
    parts.append('</section>\n')

parts.append("""
<section class="quiz" id="quiz-check">
<h2>Đối chiếu quiz (index.html) — phải trả lời được toàn bộ</h2>
<p>Sau khi học các bảng trên, kiểm tra các mốc sau (rút từ QUIZ + SAMPLE). Nếu còn mục nào không trả lời được → ôn lại đúng chương.</p>
<ul>
""")
for title, fact in QUIZ_EXTRA:
    parts.append(f"<li><strong>{esc(title)}:</strong> {esc(fact)}</li>")
parts.append("""
</ul>
<div class="pass">
<strong>Kết luận đối chiếu:</strong> Nội dung tóm tắt đã bổ sung đủ các điểm hay ra trong quiz
(lịch sử ENIAC/EDSAC, Web2.0/cloud, thế hệ di động, FTTH/PLC/Bluetooth/IrDA, OSI 7 lớp, EDI/EOS,
mã hóa/SSL, MTBF-MTTR, 5 thành phần/MB/CPU/cache, 4 thế hệ logic, bit/byte/Unicode,
MIDI/CD 44.1kHz/VGA/30fps, Fourier/run-length, DB phân cấp–quan hệ, OOP, thuật ngữ JP↔VN…).
Học theo bảng JP → đọc bảng dịch → làm lại quiz trong index.html để “pass”.
</div>
</section>
<footer>JIT401 study sheet · auto-generated from textbook + quiz cross-check · 2026</footer>
</div>
</body>
</html>
""")

out = Path("tom-tat-jit401.html")
out.write_text("".join(parts), encoding="utf-8")
print("wrote", out, "bytes", out.stat().st_size)
