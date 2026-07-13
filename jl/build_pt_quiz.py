# -*- coding: utf-8 -*-
"""Build PT quiz from quiz.txt and inject into index.html."""
from pathlib import Path
import re
import json

# Manually curated PT questions from quiz.txt (complete MCQ)
# m: 2=direct, 5=correct, 6=incorrect, 4=term
PT = [
  # --- Block 1 ---
  {"m":2,"q":"動画像では、1つ前の画像との違っている部分だけを記録して圧縮率を高める方法を何と言いますか。",
   "c":["A. ランレングス圧縮","B. 差分記録","C. フーリエ変換","D. 量子化"],"a":"B",
   "ex":"動画像では前後フレームでほとんど差がないため、違っている部分だけを記録する差分記録で圧縮率を高める（MPEGで利用）。",
   "qv":"Trong video, phương pháp chỉ ghi phần khác biệt so với khung hình trước để tăng tỷ lệ nén gọi là gì?",
   "cv":["A. Nén run-length","B. Ghi chênh lệch (差分記録)","C. Biến đổi Fourier","D. Lượng tử hóa"],
   "why":"✓ Chọn B — 差分記録. Chỉ lưu phần khác frame trước; dùng trong MPEG."},
  {"m":2,"q":"「#」の記号はどのように読みますか。",
   "c":["A. シャープ","B. ハッシュ","C. ポンド","D. ナンバー"],"a":"A",
   "ex":"記号「#」は日本語でシャープと読むのが一般的。",
   "qv":"Ký hiệu 「#」 đọc như thế nào?",
   "cv":["A. Sharp (シャープ)","B. Hash","C. Pound","D. Number"],
   "why":"✓ Chọn A — シャープ (Sharp)."},
  {"m":2,"q":"JISコードは、日本工業規格 JIS が定めたもので、（  ）bitの数字を（  ）桁ずつ区切って表します。",
   "c":["A. 8 - 4","B. 16 - 8","C. 32 - 16","D. 16 - 4"],"a":"B",
   "ex":"JISコードは16ビットを8ビットずつに分けて扱う。",
   "qv":"Mã JIS biểu diễn số ( ) bit, chia từng cụm ( ) bit.",
   "cv":["A. 8 - 4","B. 16 - 8","C. 32 - 16","D. 16 - 4"],
   "why":"✓ Chọn B — 16 bit chia 8+8."},
  {"m":2,"q":"パリティビットには、どのような種類がありますか。",
   "c":["A. 奇数パリティと偶数パリティ","B. 縦パリティだけ","C. 横パリティだけ","D. パリティは1種類だけ"],"a":"A",
   "ex":"パリティビットの基本分類は奇数パリティと偶数パリティ。",
   "qv":"Parity bit có những loại nào?",
   "cv":["A. Parity lẻ và parity chẵn","B. Chỉ dọc","C. Chỉ ngang","D. Chỉ 1 loại"],
   "why":"✓ Chọn A — 奇数/偶数パリティ."},
  {"m":5,"q":"「OSI」について、正しいものはどれですか。",
   "c":["A. 通信速度を測る単位である","B. コンピュータの5要素の1つである","C. 通信の手順であるプロトコルを機能ごとに7つの階層に分けて定義したモデルである","D. 暗号化の方式の1つである"],"a":"C",
   "ex":"OSI参照モデルはプロトコルを7階層に分けて定義する。",
   "qv":"Phát biểu nào ĐÚNG về OSI?",
   "cv":["A. Đơn vị đo tốc độ","B. Một trong 5 thành phần máy tính","C. Mô hình chia protocol thành 7 tầng","D. Một kiểu mã hóa"],
   "why":"✓ Chọn C — OSI = 7 tầng protocol."},
  {"m":2,"q":"2進数10011と2進数101を乗算した結果の2進数はどれか。",
   "c":["A. 1011111","B. 110011","C. 10011","D. 10101"],"a":"A",
   "ex":"10011₂=19、101₂=5、19×5=95、95₁₀=1011111₂。",
   "qv":"10011₂ × 101₂ bằng bao nhiêu (nhị phân)?",
   "cv":["A. 1011111","B. 110011","C. 10011","D. 10101"],
   "why":"✓ Chọn A — 19×5=95 → 1011111₂."},
  {"m":2,"q":"CDでは、傷や手の脂、埃などによってデータが正しく読み取れない場合があります。このような誤りを検出・訂正するための仕組みを何と言いますか。",
   "c":["A. パリティチェック","B. 誤り検出・訂正機構","C. ファイアウォール","D. ランレングス圧縮"],"a":"B",
   "ex":"CD等では誤り検出・訂正機構（例: CIRC）が使われる。",
   "qv":"Cơ chế phát hiện/sửa lỗi khi CD bị xước, bụi… gọi là gì?",
   "cv":["A. Parity check","B. Cơ chế phát hiện·sửa lỗi","C. Firewall","D. Run-length"],
   "why":"✓ Chọn B — 誤り検出・訂正機構."},
  {"m":2,"q":"通信回線の伝送誤りに対処するパリティチェック方式（垂直パリティ）の記述として、適切なものはどれか。",
   "c":["A. すべてのビット誤りを訂正できる","B. 1ビットの誤りを検出できる","C. 2ビットの誤りを必ず検出できる","D. 誤りを検出も訂正もできない"],"a":"B",
   "ex":"単純なパリティでは主に奇数個（代表的に1ビット）の誤りを検出できる。",
   "qv":"Mô tả đúng về parity check dọc?",
   "cv":["A. Sửa được mọi bit lỗi","B. Phát hiện được lỗi 1 bit","C. Luôn phát hiện lỗi 2 bit","D. Không phát hiện/sửa được"],
   "why":"✓ Chọn B — phát hiện lỗi 1 bit (số bit 1 lẻ)."},

  # --- Block 2 ---
  {"m":4,"q":"「giai thừa」は日本語の漢字でどのように読みますか。",
   "c":["A. 階乗（かいじょう）","B. 乗算（じょうざん）","C. 因数（いんすう）","D. 累乗（るいじょう）"],"a":"A",
   "ex":"giai thừa = 階乗（かいじょう）。",
   "qv":"「Giai thừa」 viết/đọc kanji tiếng Nhật thế nào?",
   "cv":["A. 階乗 (kaijou)","B. 乗算","C. 因数","D. 累乗"],
   "why":"✓ Chọn A — 階乗 / kaijou."},
  {"m":2,"q":"「論理和」は何ですか。",
   "c":["A. AND回路の演算","B. NOT回路の演算","C. XOR回路の演算","D. OR回路の演算"],"a":"D",
   "ex":"論理和＝OR、論理積＝AND、論理否定＝NOT。",
   "qv":"「論理和」 là gì?",
   "cv":["A. Phép AND","B. Phép NOT","C. Phép XOR","D. Phép OR"],
   "why":"✓ Chọn D — 論理和 = OR."},
  {"m":2,"q":"音声情報の高さがデジタル化するとき、（ ① ）が大きいほど、（ ② ）が向上します。",
   "c":["A. ①サンプリング周波数 ②ファイルサイズのみ","B. ①圧縮率 ②雑音","C. ①量子化数 ②音質","D. ①ビットレート ②解像度"],"a":"C",
   "ex":"量子化数が大きいほど音の振幅を細かく表せ、音質が向上する。",
   "qv":"Khi số hóa âm thanh, (①) càng lớn thì (②) càng tốt?",
   "cv":["A. ① tần số lấy mẫu ② chỉ dung lượng file","B. ① tỷ lệ nén ② nhiễu","C. ① số lượng tử hóa ② chất lượng âm","D. ① bitrate ② độ phân giải"],
   "why":"✓ Chọn C — 量子化数 ↑ → 音質 ↑."},
  {"m":5,"q":"ネットワークの形態について、正しいものはどれか。",
   "c":["A. リング型は、データが隣接するノードを順次伝送され、一部のコンピュータが故障すると通信に支障が出る可能性がある","B. スター型は1本のケーブルに全端末がぶら下がる","C. バス型はハブを中心に接続する","D. リング型は最も故障の影響が小さい"],"a":"A",
   "ex":"リング型は隣接へ順次転送するため、故障の影響が出やすい。",
   "qv":"Phát biểu nào ĐÚNG về hình thái mạng?",
   "cv":["A. Ring: truyền tuần tự; 1 máy hỏng có thể ảnh hưởng","B. Star = 1 cáp chung","C. Bus = hub trung tâm","D. Ring ít bị ảnh hưởng hỏng hóc nhất"],
   "why":"✓ Chọn A — đặc trưng ring topology."},
  {"m":2,"q":"改行が何番のコードにあたるかなど、画面に直接表示できない記号は何と呼ばれますか。",
   "c":["A. 制御コード","B. 文字コード","C. 圧縮コード","D. パリティコード"],"a":"A",
   "ex":"改行など表示されない記号は制御コード。",
   "qv":"Mã xuống dòng / ký hiệu không hiển thị gọi là gì?",
   "cv":["A. Mã điều khiển","B. Mã ký tự","C. Mã nén","D. Mã parity"],
   "why":"✓ Chọn A — 制御コード."},
  {"m":2,"q":"世界の主要な言語で使われている文字を統一的に表す文字コードはどれか。",
   "c":["A. ASCII","B. JIS","C. EUC","D. Unicode"],"a":"D",
   "ex":"Unicodeは世界の主要言語の文字を統一的に扱う。",
   "qv":"Bảng mã thống nhất chữ các ngôn ngữ chính trên thế giới?",
   "cv":["A. ASCII","B. JIS","C. EUC","D. Unicode"],
   "why":"✓ Chọn D — Unicode."},
  {"m":2,"q":"マウスやキーボードの操作方法、ウィンドウの見え方などを決めるものを何と言いますか。",
   "c":["A. デバイスドライバ","B. ミドルウェア","C. ユーザインタフェース","D. ファイアウォール"],"a":"C",
   "ex":"操作・表示の仕方を決めるのはユーザインタフェース。",
   "qv":"Cách thao tác chuột/bàn phím, cách hiện cửa sổ… gọi là gì?",
   "cv":["A. Device driver","B. Middleware","C. User interface","D. Firewall"],
   "why":"✓ Chọn C — UI."},
  {"m":5,"q":"ハードディスクの仕組みと管理について正しいものをえらびなさい。",
   "c":["A. ヘッドは常にディスク面に接触している","B. 同一トラック上にデータがあるとアームを動かす必要がなく高速に読み書きできる","C. セクタは使わない","D. デフラグは不要な操作である"],"a":"B",
   "ex":"同一トラックならアーム移動が不要で高速。ヘッドは接触しない。",
   "qv":"Phát biểu đúng về HDD?",
   "cv":["A. Head luôn chạm mặt đĩa","B. Cùng track → không cần di chuyển arm, đọc/ghi nhanh","C. Không dùng sector","D. Defrag không cần"],
   "why":"✓ Chọn B — cùng track = seek time ≈ 0."},
  {"m":5,"q":"データ量の大小関係のうち正しいものはどれか。",
   "c":["A. 1Gバイト < 1Mバイト < 1kバイト","B. 1kバイト < 1Mバイト < 1Gバイト < 1Tバイト","C. 1Tバイト < 1Gバイト < 1Mバイト","D. 1Mバイト < 1kバイト < 1Gバイト"],"a":"B",
   "ex":"k < M < G < T の順。",
   "qv":"Quan hệ dung lượng đúng là?",
   "cv":["A. G < M < k","B. k < M < G < T","C. T < G < M","D. M < k < G"],
   "why":"✓ Chọn B — KB < MB < GB < TB."},

  # --- Block 3 ---
  {"m":4,"q":"「変調」は英語で何ですか。",
   "c":["A. modulation","B. modemlation","C. moduration","D. medulation"],"a":"A",
   "ex":"変調 = modulation（変調・復調で modem）。",
   "qv":"「変調」 tiếng Anh là gì?",
   "cv":["A. modulation","B. modemlation","C. moduration","D. medulation"],
   "why":"✓ Chọn A — modulation."},
  {"m":2,"q":"映像データや音声データの圧縮方式として代表的なものはどれか。",
   "c":["A. JPEG","B. GIF","C. MPEG","D. BMP"],"a":"C",
   "ex":"動画像・音声にはMPEGが代表的。JPEG/GIFは主に静止画。",
   "qv":"Nén video/âm thanh tiêu biểu là?",
   "cv":["A. JPEG","B. GIF","C. MPEG","D. BMP"],
   "why":"✓ Chọn C — MPEG."},
  {"m":2,"q":"ネットワークの形態について、中心に集線装置を置き複数のコンピュータを接続する形態はどれか。",
   "c":["A. バス型","B. スター型","C. リング型","D. メッシュ型"],"a":"B",
   "ex":"ハブ等を中心にするのはスター型。",
   "qv":"Đặt hub/switch trung tâm, máy nối ra xung quanh là hình thái nào?",
   "cv":["A. Bus","B. Star","C. Ring","D. Mesh"],
   "why":"✓ Chọn B — スター型."},
  {"m":5,"q":"上り（アップロード）について正しいものはどれか。",
   "c":["A. 上流から下流の方向","B. 下流から上流の方向","C. 必ず無線だけ","D. ダウンロードと同じ意味"],"a":"B",
   "ex":"上りは下流（利用者）から上流（網・サーバ）へ。",
   "qv":"Phát biểu đúng về upload (上り)?",
   "cv":["A. Từ thượng lưu xuống hạ lưu","B. Từ hạ lưu lên thượng lưu","C. Chỉ wireless","D. = download"],
   "why":"✓ Chọn B — client → server."},
  {"m":2,"q":"一般に100 Kbps〜1 Mbps以上の通信速度を何と言いますか。",
   "c":["A. ナローバンド","B. ダイアルアップ","C. ブロードバンド","D. シリアル"],"a":"C",
   "ex":"100Kbps〜1Mbps以上はブロードバンドと呼ばれる。",
   "qv":"Tốc độ khoảng ≥100 Kbps–1 Mbps gọi là gì?",
   "cv":["A. Narrowband","B. Dial-up","C. Broadband","D. Serial"],
   "why":"✓ Chọn C — ブロードバンド."},
  {"m":2,"q":"プリンタの解像度をドット数で表す単位は何といいますか。",
   "c":["A. bps","B. dpi","C. Hz","D. fps"],"a":"B",
   "ex":"プリンタ解像度の単位は dpi（dot per inch）。",
   "qv":"Đơn vị độ phân giải máy in (số chấm) là gì?",
   "cv":["A. bps","B. dpi","C. Hz","D. fps"],
   "why":"✓ Chọn B — dpi."},
  {"m":1,"q":"情報量の（  ）単位のことをビット(bit)といいます。",
   "c":["A. 最大","B. 平均","C. 最小","D. 可変"],"a":"C",
   "ex":"ビットは情報量の最小単位（基本単位でもある）。",
   "qv":"Đơn vị ( ) của lượng tin gọi là bit?",
   "cv":["A. lớn nhất","B. trung bình","C. nhỏ nhất","D. thay đổi"],
   "why":"✓ Chọn C — 最小単位."},
  {"m":2,"q":"A〜Zの26種類の文字を表現するには最低何ビット必要か。",
   "c":["A. 3","B. 4","C. 5","D. 8"],"a":"C",
   "ex":"2⁴=16不足、2⁵=32で26以上を表現できる。",
   "qv":"Biểu diễn 26 chữ A–Z cần tối thiểu mấy bit?",
   "cv":["A. 3","B. 4","C. 5","D. 8"],
   "why":"✓ Chọn C — 2⁵=32 ≥ 26."},
  {"m":5,"q":"ある音をコンピュータのファイルに記録するとき、符号化ビット数（量子化ビット数）を大きくするとどうなるか。",
   "c":["A. サンプリング周波数だけが上がる","B. 音の振幅をより細かく記録できる","C. 必ずファイルが小さくなる","D. 音程だけが変わる"],"a":"B",
   "ex":"量子化ビット数が大きいほど振幅を細かく記録できる。",
   "qv":"Tăng số bit lượng tử hóa khi ghi âm thì?",
   "cv":["A. Chỉ tăng tần số lấy mẫu","B. Ghi biên độ chi tiết hơn","C. File luôn nhỏ hơn","D. Chỉ đổi cao độ"],
   "why":"✓ Chọn B — biên độ chi tiết hơn."},
  {"m":1,"q":"（  ）とは、数値を扱う際に「基となる数」のことである。",
   "c":["A. 基数","B. 対数","C. 素数","D. 倍数"],"a":"A",
   "ex":"基となる数＝基数（2進・10進など）。",
   "qv":"( ) là “số làm cơ sở” khi xử lý số?",
   "cv":["A. Cơ số (基数)","B. Logarit","C. Số nguyên tố","D. Bội số"],
   "why":"✓ Chọn A — 基数."},

  # --- Block 4 ---
  {"m":4,"q":"「プロキシサーバ」はベトナム語で何と言いますか。",
   "c":["A. máy chủ web","B. máy chủ thư","C. máy chủ tên miền","D. máy chủ trung gian"],"a":"D",
   "ex":"プロキシ＝中継・代理 → máy chủ trung gian。",
   "qv":"Proxy server tiếng Việt là gì?",
   "cv":["A. Web server","B. Mail server","C. DNS server","D. Máy chủ trung gian"],
   "why":"✓ Chọn D — máy chủ trung gian."},
  {"m":4,"q":"「CRC」は英語でなんですか。",
   "c":["A. Cyclic Redundance Check","B. Cyclic Redundancy Check","C. Circle Redundancy Check","D. Code Redundancy Control"],"a":"B",
   "ex":"CRC = Cyclic Redundancy Check。",
   "qv":"CRC viết tắt tiếng Anh là gì?",
   "cv":["A. Cyclic Redundance Check","B. Cyclic Redundancy Check","C. Circle…","D. Code…"],
   "why":"✓ Chọn B — Cyclic Redundancy Check."},
  {"m":2,"q":"電源が切れたとき、データが消えてしまうものは何ですか。",
   "c":["A. GPU","B. IC","C. ROM","D. RAM"],"a":"D",
   "ex":"RAMは揮発性で電源OFFでデータが消える。",
   "qv":"Tắt nguồn thì dữ liệu mất là loại nào?",
   "cv":["A. GPU","B. IC","C. ROM","D. RAM"],
   "why":"✓ Chọn D — RAM (volatile)."},
  {"m":2,"q":"デジタル画像は縦横に並んだ点の集まりである。この点を画素、もしくはなんと言いますか。",
   "c":["A. ピクセル","B. ビット","C. フレーム","D. セクタ"],"a":"A",
   "ex":"画素＝ピクセル。",
   "qv":"Điểm ảnh (画素) còn gọi là gì?",
   "cv":["A. Pixel","B. Bit","C. Frame","D. Sector"],
   "why":"✓ Chọn A — ピクセル."},
  {"m":2,"q":"見かけ上の記憶容量を実際のメモリ容量より大きくし、大きなメモリ空間を確保することを何と言いますか。",
   "c":["A. キャッシュ","B. スワッピングのみ","C. 仮想記憶","D. デフラグ"],"a":"C",
   "ex":"仮想記憶はHDD等を使い見かけのメモリを拡大する。",
   "qv":"Làm dung lượng nhớ “ảo” lớn hơn RAM thật gọi là gì?",
   "cv":["A. Cache","B. Chỉ swapping","C. Bộ nhớ ảo (仮想記憶)","D. Defrag"],
   "why":"✓ Chọn C — 仮想記憶."},
  {"m":2,"q":"ぎざぎざの少ないきれいな画像を得るには何を増やすとよいか。",
   "c":["A. 画素数","B. パリティビット","C. プロトコル数","D. ドメイン名"],"a":"A",
   "ex":"画素数が多いほどぎざぎざが減りきれいに見える。",
   "qv":"Để ảnh mịn, ít răng cưa cần tăng gì?",
   "cv":["A. Số pixel","B. Parity bit","C. Số protocol","D. Domain"],
   "why":"✓ Chọn A — 画素数."},
  {"m":2,"q":"10進数のマイナス5を、2の補数表現で8ビットの2進数で表すとどうなるか。",
   "c":["A. 11111011","B. 11111010","C. 10000101","D. 00000101"],"a":"A",
   "ex":"+5=00000101 → 反転11111010 → +1で11111011。",
   "qv":"−5 ở hệ 10, bù 2 8-bit là?",
   "cv":["A. 11111011","B. 11111010","C. 10000101","D. 00000101"],
   "why":"✓ Chọn A — 2's complement of 5."},
  {"m":2,"q":"音声を圧縮する際によく使われる、波を正弦波に分解する変換は何ですか。",
   "c":["A. ランレングス","B. ハフマン符号","C. フーリエ変換","D. パリティ"],"a":"C",
   "ex":"音声圧縮ではフーリエ変換で波を周波数成分に分解する。",
   "qv":"Khi nén âm, phép biến đổi phân tích sóng thành sin là?",
   "cv":["A. Run-length","B. Huffman","C. Fourier","D. Parity"],
   "why":"✓ Chọn C — フーリエ変換."},
  {"m":2,"q":"2進数100001を3倍したものはどれか。",
   "c":["A. 1000010","B. 1100011","C. 111111","D. 1000011"],"a":"B",
   "ex":"100001₂=33、33×3=99、99=1100011₂。",
   "qv":"100001₂ × 3 = ?",
   "cv":["A. 1000010","B. 1100011","C. 111111","D. 1000011"],
   "why":"✓ Chọn B — 33×3=99 → 1100011."},

  # --- Block 5 ---
  {"m":2,"q":"装置Aと装置Bが直列につながっているシステムを何と言いますか。",
   "c":["A. 並列システム","B. 直列システム","C. 集中システム","D. 分散システム"],"a":"B",
   "ex":"直列＝直列システム。",
   "qv":"Hai thiết bị mắc nối tiếp gọi là?",
   "cv":["A. Song song","B. Nối tiếp (直列)","C. Tập trung","D. Phân tán"],
   "why":"✓ Chọn B — 直列システム."},
  {"m":2,"q":"装置Aと装置Bが並列につながっているシステムを何と言いますか。",
   "c":["A. 直列システム","B. 並列システム","C. 集中システム","D. 分散システム"],"a":"B",
   "ex":"並列接続＝並列システム。",
   "qv":"Hai thiết bị mắc song song gọi là?",
   "cv":["A. Nối tiếp","B. Song song (並列)","C. Tập trung","D. Phân tán"],
   "why":"✓ Chọn B — 並列システム."},
  {"m":2,"q":"イラストなどに使われる、最大表示色が256色の静止画圧縮形式はどれか。",
   "c":["A. JPEG","B. BMP","C. MPEG","D. GIF"],"a":"D",
   "ex":"GIFは最大256色の静止画（簡易アニメも可）。",
   "qv":"Ảnh tĩnh ≤256 màu, minh họa… định dạng nào?",
   "cv":["A. JPEG","B. BMP","C. MPEG","D. GIF"],
   "why":"✓ Chọn D — GIF."},
  {"m":2,"q":"波の高さの最大値をいくつの段階で表すかを何と言いますか。",
   "c":["A. サンプリング周波数","B. 量子化数","C. フレームレート","D. ビットレート"],"a":"B",
   "ex":"振幅の段階数＝量子化数。",
   "qv":"Chia biên độ sóng thành bao nhiêu mức gọi là?",
   "cv":["A. Tần số lấy mẫu","B. Số lượng tử hóa","C. Frame rate","D. Bitrate"],
   "why":"✓ Chọn B — 量子化数."},
  {"m":2,"q":"2バイトで1文字を表すとき、何種類の文字まで表せるか。",
   "c":["A. 256","B. 1,024","C. 65,536","D. 16,777,216"],"a":"C",
   "ex":"2バイト=16ビット、2¹⁶=65,536。",
   "qv":"1 chữ = 2 byte → tối đa bao nhiêu loại?",
   "cv":["A. 256","B. 1024","C. 65,536","D. 16,777,216"],
   "why":"✓ Chọn C — 2¹⁶."},
  {"m":2,"q":"10進数155を2進数で表したものはどれか。",
   "c":["A. 10011011","B. 10011100","C. 10101011","D. 11001011"],"a":"A",
   "ex":"155=128+16+8+2+1 → 10011011₂。",
   "qv":"155₁₀ = ?₂",
   "cv":["A. 10011011","B. 10011100","C. 10101011","D. 11001011"],
   "why":"✓ Chọn A — 10011011."},
  {"m":2,"q":"2進数1.111を10進数で表現したものはどれか。",
   "c":["A. 1.875","B. 1.75","C. 1.5","D. 2.0"],"a":"A",
   "ex":"1 + 0.5 + 0.25 + 0.125 = 1.875。",
   "qv":"1.111₂ = ?₁₀",
   "cv":["A. 1.875","B. 1.75","C. 1.5","D. 2.0"],
   "why":"✓ Chọn A — 1.875."},
  {"m":2,"q":"MIDI命令のデータ段階（取りうる値の数）として適切なものはどれか。",
   "c":["A. 64","B. 100","C. 128","D. 256"],"a":"C",
   "ex":"MIDIデータバイトは7ビット相当で0〜127の128段階。",
   "qv":"Lệnh MIDI thể hiện khoảng bao nhiêu mức?",
   "cv":["A. 64","B. 100","C. 128","D. 256"],
   "why":"✓ Chọn C — 128 (0–127)."},
  {"m":4,"q":"「小文字」はどのように読みますか。ベトナム語で何ですか。",
   "c":["A. おおもじ - chữ in hoa","B. こもじ - chữ số","C. こもじ - chữ in thường","D. だいもじ - chữ thường"],"a":"C",
   "ex":"小文字＝こもじ＝chữ in thường。",
   "qv":"「小文字」 đọc và nghĩa VI?",
   "cv":["A. oomojii - chữ hoa","B. komoji - chữ số","C. komoji - chữ thường","D. daimoji…"],
   "why":"✓ Chọn C — こもじ / chữ in thường."},

  # --- Block 6 ---
  {"m":5,"q":"フリーウェアとシェアウェアの違いについて、正しい説明はどれですか。",
   "c":["A. どちらも必ず有料である","B. シェアウェアは無料で入手できるが、継続使用に登録と料金が必要な場合がある","C. フリーウェアは必ずソース公開である","D. シェアウェアは商用利用禁止が定義である"],"a":"B",
   "ex":"シェアウェアは試用後に登録・料金が必要なことがある。",
   "qv":"Khác biệt Freeware / Shareware — chọn đúng?",
   "cv":["A. Cả hai luôn trả phí","B. Shareware tải miễn phí nhưng dùng lâu có thể cần đăng ký/trả phí","C. Freeware luôn open source","D. Shareware cấm thương mại theo định nghĩa"],
   "why":"✓ Chọn B — shareware dùng thử."},
  {"m":2,"q":"データの（  ）と（  ）の対応を決めているのが文字コードです。",
   "c":["A. 音 - 画像","B. ファイル - フォルダ","C. 圧縮 - 解凍","D. 数字 - 文字"],"a":"D",
   "ex":"文字コードは数字と文字の対応を決める。",
   "qv":"Mã ký tự quyết định tương ứng giữa ( ) và ( )?",
   "cv":["A. âm - ảnh","B. file - folder","C. nén - giải nén","D. số - chữ"],
   "why":"✓ Chọn D — 数字と文字."},
  {"m":5,"q":"AND回路について正しいものをえらんでください。",
   "c":["A. スイッチが並列のモデル","B. スイッチが直列に並んだ回路としてモデル化される","C. どちらか1つONで出力ON","D. 入力を反転する"],"a":"B",
   "ex":"ANDは直列スイッチ。両方ONで出力ON。",
   "qv":"Phát biểu đúng về mạch AND?",
   "cv":["A. Công tắc song song","B. Mô hình công tắc nối tiếp","C. Một ON là ra ON","D. Đảo input"],
   "why":"✓ Chọn B — AND = nối tiếp."},
  {"m":5,"q":"圧縮・解凍ソフトでファイルを圧縮したとき、圧縮方式によって付けられる拡張子として正しいものはどれですか。",
   "c":["A. doc、xls、ppt","B. jpg、png、gif","C. zip、lzh、gz","D. exe、dll、sys"],"a":"C",
   "ex":"圧縮拡張子の例: zip / lzh / gz。",
   "qv":"Extension nén file đúng là?",
   "cv":["A. doc/xls/ppt","B. jpg/png/gif","C. zip/lzh/gz","D. exe/dll/sys"],
   "why":"✓ Chọn C — zip, lzh, gz."},
  {"m":2,"q":"動画像では、静止画圧縮と差分記録を組み合わせて圧縮率を高めた形式としてよく用いられるものは何ですか。",
   "c":["A. JPEG","B. GIF","C. MPEG","D. PNG"],"a":"C",
   "ex":"静止画圧縮＋差分記録＝MPEG。",
   "qv":"Video dùng nén ảnh tĩnh + ghi chênh lệch → định dạng?",
   "cv":["A. JPEG","B. GIF","C. MPEG","D. PNG"],
   "why":"✓ Chọn C — MPEG."},
  {"m":4,"q":"「sóng hình sin」は日本語の漢字でどのように書きますか。どのように読みますか。",
   "c":["A. 余弦波 - よげんは","B. 正弦波 - せいげんは","C. 正弦波 - しょうげんは","D. 正玄波 - せいげんは"],"a":"B",
   "ex":"正弦波（せいげんは）＝sin波。",
   "qv":"Sóng sin viết/đọc kanji?",
   "cv":["A. 余弦波","B. 正弦波 - seigenha","C. 正弦波 - shougenha","D. 正玄波"],
   "why":"✓ Chọn B — 正弦波 / せいげんは."},
  {"m":2,"q":"ネットワークのデータ伝送速度を表す単位はどれか。",
   "c":["A. bps","B. dpi","C. Hz","D. lux"],"a":"A",
   "ex":"伝送速度の単位は bps（bit per second）。",
   "qv":"Đơn vị tốc độ truyền mạng?",
   "cv":["A. bps","B. dpi","C. Hz","D. lux"],
   "why":"✓ Chọn A — bps."},
  {"m":4,"q":"「帯域幅」はどのように読みますか。ベトナム語で何ですか。",
   "c":["A. たいいきはば - chiều rộng dải tần","B. たいいきふく - băng thông hẹp","C. たいきはば - tần số","D. はばたいいき - độ trễ"],"a":"A",
   "ex":"帯域幅＝たいいきはば＝bandwidth / chiều rộng dải tần。",
   "qv":"「帯域幅」 đọc và nghĩa VI?",
   "cv":["A. taiikihaba - chiều rộng dải tần","B. … băng hẹp","C. … tần số","D. … độ trễ"],
   "why":"✓ Chọn A — たいいきはば."},

  # --- Dictionary extra from quiz.txt end ---
  {"m":4,"q":"「マス目」はベトナム語で何ですか。",
   "c":["A. cần","B. đĩa","C. sợi đốt","D. nấc"],"a":"D",
   "ex":"マス目＝ô/nấc trên băng Turing など。",
   "qv":"「マス目」 tiếng Việt?",
   "cv":["A. cần","B. đĩa","C. sợi đốt","D. nấc"],
   "why":"✓ Chọn D — nấc (ô chia)."},
  {"m":4,"q":"「PLC」はベトナム語で何ですか。",
   "c":["A. nối mạng qua hệ thống điện nhà","B. truyền hình cáp dây dẫn","C. cáp quang đến tận nhà","D. truyền dữ liệu bằng tia hồng ngoại"],"a":"A",
   "ex":"PLC = Power Line Communication＝電灯線通信。",
   "qv":"PLC tiếng Việt?",
   "cv":["A. Nối mạng qua điện nhà","B. Truyền hình cáp","C. FTTH","D. Hồng ngoại"],
   "why":"✓ Chọn A — PLC / điện nhà."},
  {"m":1,"q":"個人のパソコンをねらった（  ）としてウイルスが代表的です。",
   "c":["A. 犯罪","B. 行為","C. もの","D. 病気"],"a":"A",
   "ex":"コンピュータ犯罪の例としてウイルス。",
   "qv":"Virus là ví dụ điển hình của ( ) nhắm PC cá nhân?",
   "cv":["A. tội phạm / 犯罪","B. hành vi","C. đồ vật","D. bệnh"],
   "why":"✓ Chọn A — 犯罪."},
  {"m":5,"q":"ウィルスに感染するのを避けるために、何をしますか。",
   "c":["A. パスワードに氏名や数字だけを使う","B. 常に最新版に更新されるブラウザを使う","C. 古いブラウザを使い続ける","D. exe,vbs,scr,pif の添付をすぐに開く"],"a":"B",
   "ex":"ブラウザを最新に保つなど安全対策が重要。危険拡張子は開かない。",
   "qv":"Để tránh nhiễm virus nên làm gì?",
   "cv":["A. Password chỉ tên/số","B. Dùng browser luôn cập nhật","C. Giữ browser cũ","D. Mở ngay file .exe/.vbs…"],
   "why":"✓ Chọn B — cập nhật browser / phần mềm."},
  {"m":2,"q":"国際標準の携帯電話で利用できるアプリケーションを決定するのが何と呼ぶソフトウェアですか。",
   "c":["A. アプリケーション","B. オペレーティングシステム","C. 電子マネー","D. ガラパゴス携帯"],"a":"B",
   "ex":"使えるアプリを決めるのはOS。",
   "qv":"Phần mềm quyết định app chạy được trên ĐTDĐ chuẩn quốc tế?",
   "cv":["A. Ứng dụng","B. Hệ điều hành (OS)","C. Tiền điện tử","D. Galapagos phone"],
   "why":"✓ Chọn B — OS."},
  {"m":4,"q":"「周波数帯」はどのように読みますか。ベトナム語で何ですか。",
   "c":["A. しゅうはすうたい - băng tần","B. しゅばすうだい - dải tần số","C. しゅうはすうたい - dải tần số","D. しゅうぱすうだい - băng tần"],"a":"C",
   "ex":"周波数帯＝しゅうはすうたい＝dải tần số / băng tần。",
   "qv":"「周波数帯」 đọc + nghĩa?",
   "cv":["A. shuuhasuutai - băng tần (nghĩa hẹp)","B. đọc sai","C. shuuhasuutai - dải tần số","D. đọc sai"],
   "why":"✓ Chọn C — しゅうはすうたい / dải tần số."},
  {"m":4,"q":"LSIは日本語で何ですか。",
   "c":["A. 大規模集積回路","B. 集積線路","C. 集積回路","D. 大規模集積線路"],"a":"A",
   "ex":"LSI = Large Scale Integration＝大規模集積回路。",
   "qv":"LSI tiếng Nhật là gì?",
   "cv":["A. Mạch tích hợp quy mô lớn","B. Đường tích hợp","C. IC (thường)","D. Đường tích hợp lớn"],
   "why":"✓ Chọn A — 大規模集積回路."},
  {"m":2,"q":"A3サイズ（29.7cm×42.0cm）を350 dpiで印刷する場合の画素数の計算で使う関係はどれか。",
   "c":["A. 画素数 ≒ (cm/2.54×dpi) の縦×横","B. 画素数 = cm×dpi のみ","C. 画素数 = bps×Hz","D. 画素数 = ビット数÷8"],"a":"A",
   "ex":"dpiは1インチあたりの点。cmをインチ(÷2.54)に直して×dpiし、縦×横で総画素。",
   "qv":"Tính pixel khi in A3 @350dpi dùng quan hệ nào?",
   "cv":["A. (cm/2.54×dpi) rộng × dài","B. chỉ cm×dpi","C. bps×Hz","D. bit÷8"],
   "why":"✓ Chọn A — đổi inch rồi × dpi, nhân 2 chiều."},
]

def js_escape(s):
    return json.dumps(s, ensure_ascii=False)

def to_js_item(it, with_tr=False):
    # core fields for engine
    c = "[" + ",".join(js_escape(x) for x in it["c"]) + "]"
    base = f'{{"m":{it["m"]},"q":{js_escape(it["q"])},"c":{c},"a":{js_escape(it["a"])},"ex":{js_escape(it["ex"])}}}'
    return base

def to_tr_item(it):
    cv = "[" + ",".join(js_escape(x) for x in it["cv"]) + "]"
    return f'{{"qv":{js_escape(it["qv"])},"cv":{cv},"why":{js_escape(it["why"])}}}'

def main():
    print("PT count", len(PT))
    pt_js = "const PT = [\n" + ",\n".join("  " + to_js_item(x) for x in PT) + "\n];\n"
    pt_tr = "const PT_TR = [\n" + ",\n".join("  " + to_tr_item(x) for x in PT) + "\n];\n"
    Path("_pt_data.js").write_text(pt_js + "\n" + pt_tr, encoding="utf-8")

    html_path = Path("index.html")
    html = html_path.read_text(encoding="utf-8")

    # 1) Nav tabs
    old_nav = '''    <div class="nav-tabs">
      <button class="nav-tab active" onclick="showPage('study')">Tài liệu</button>
      <button class="nav-tab" onclick="showPage('quiz')">Ôn luyện<span class="nav-badge" id="wrong-badge" style="display:none">0</span></button>
      <button class="nav-tab" onclick="showPage('sample')">Quiz mẫu<span class="nav-badge orange" id="swrong-badge" style="display:none">0</span></button>
      <button class="nav-tab" onclick="showPage('wrong')">Câu sai</button>
      <button class="nav-tab" onclick="showPage('swrong')">Sai mẫu</button>
    </div>'''
    new_nav = f'''    <div class="nav-tabs">
      <button class="nav-tab active" onclick="showPage('study')">Tài liệu</button>
      <button class="nav-tab" onclick="showPage('quiz')">Ôn luyện<span class="nav-badge" id="wrong-badge" style="display:none">0</span></button>
      <button class="nav-tab" onclick="showPage('sample')">Quiz mẫu<span class="nav-badge orange" id="swrong-badge" style="display:none">0</span></button>
      <button class="nav-tab" onclick="showPage('pt')">Quiz PT<span class="nav-badge" id="ptwrong-badge" style="display:none;background:#7c3aed">0</span></button>
      <button class="nav-tab" onclick="showPage('wrong')">Câu sai</button>
      <button class="nav-tab" onclick="showPage('swrong')">Sai mẫu</button>
      <button class="nav-tab" onclick="showPage('ptwrong')">Sai PT</button>
    </div>'''
    if old_nav in html:
        html = html.replace(old_nav, new_nav)
    elif "showPage('pt')" not in html:
        html = html.replace(
            '''<button class="nav-tab" onclick="showPage('sample')">Quiz mẫu<span class="nav-badge orange" id="swrong-badge" style="display:none">0</span></button>
      <button class="nav-tab" onclick="showPage('wrong')">Câu sai</button>''',
            '''<button class="nav-tab" onclick="showPage('sample')">Quiz mẫu<span class="nav-badge orange" id="swrong-badge" style="display:none">0</span></button>
      <button class="nav-tab" onclick="showPage('pt')">Quiz PT<span class="nav-badge" id="ptwrong-badge" style="display:none;background:#7c3aed">0</span></button>
      <button class="nav-tab" onclick="showPage('wrong')">Câu sai</button>
      <button class="nav-tab" onclick="showPage('ptwrong')">Sai PT</button>'''
        )

    # 2) Insert PT pages before script or after sample wrong page
    pt_pages = f'''
<!-- ═══ QUIZ PT (từ quiz.txt) ═══ -->
<div id="pt-page" class="page">
  <div class="quiz-hero" style="background:linear-gradient(160deg,#1e1b4b 0%,#312e81 55%,#5b21b6 100%)">
    <p class="quiz-hero-eyebrow" style="color:#c4b5fd">JIT401 — Quiz PT</p>
    <h2>{len(PT)} câu <span style="color:#c4b5fd">Quiz PT</span></h2>
    <p class="quiz-hero-sub">Câu hỏi từ quiz.txt · cùng tính năng ôn luyện / giải thích</p>
  </div>
  <div class="progress-strip"><div class="progress-fill" id="pt-progress" style="width:0%;background:#8b5cf6"></div></div>
  <div class="quiz-stats-bar">
    <div class="quiz-stats-inner">
      <span class="quiz-stat-item">Câu: <strong id="pt-stat-cur">1 / {len(PT)}</strong></span>
      <span class="quiz-stat-item" style="color:var(--correct)">Đúng: <strong id="pt-stat-ok">0</strong></span>
      <span class="quiz-stat-item" style="color:var(--wrong)">Sai: <strong id="pt-stat-ng">0</strong></span>
    </div>
  </div>
  <div class="quiz-container">
    <div id="pt-area"></div>
    <div class="score-card" id="pt-finish" style="display:none">
      <div><span class="score-big" id="pt-fscore" style="color:#8b5cf6">0</span><span class="score-of"> / {len(PT)}</span></div>
      <div class="score-grade" id="pt-fgrade"></div>
      <div class="score-bar-wrap"><div class="score-bar-fill" id="pt-fbar" style="width:0%;background:#8b5cf6"></div></div>
      <p style="margin-top:12px;font-size:13px;color:var(--muted)">Câu sai: <strong id="pt-fwrong" style="color:var(--wrong)">0</strong></p>
      <div style="display:flex;gap:10px;justify-content:center;margin-top:16px;flex-wrap:wrap">
        <button class="btn btn-secondary" onclick="showPage('ptwrong')">Làm lại câu sai</button>
        <button class="btn btn-danger" onclick="resetPT()">Làm lại từ đầu</button>
      </div>
    </div>
  </div>
</div>

<div id="ptwrong-page" class="page">
  <div class="quiz-hero" style="background:linear-gradient(160deg,#1e1b4b 0%,#312e81 55%,#5b21b6 100%)">
    <p class="quiz-hero-eyebrow" style="color:#c4b5fd">JIT401 — Quiz PT</p>
    <h2>Làm lại <span style="color:#c4b5fd">câu sai PT</span></h2>
    <p class="quiz-hero-sub">Ôn lại câu sai trong Quiz PT</p>
  </div>
  <div class="quiz-container wrong-intro">
    <div id="ptw-intro">
      <div class="score-card">
        <p>Số câu sai cần ôn lại (Quiz PT)</p>
        <div class="score-big" id="ptw-cnt" style="font-size:44px;color:#8b5cf6">0</div>
        <div class="page-dots" id="ptw-list"></div>
        <div style="margin-top:20px"><button class="btn btn-secondary" id="ptw-start-btn" onclick="startPTWrong()">Bắt đầu</button></div>
      </div>
    </div>
    <div id="ptw-area" style="display:none"></div>
    <div class="score-card" id="ptw-finish" style="display:none">
      <p style="font-size:16px;font-weight:600">Đã ôn xong!</p>
      <p style="margin-top:8px;font-size:13px;color:var(--muted)">Còn lại: <strong id="ptw-rem" style="color:var(--wrong)">0</strong> câu sai</p>
      <div style="margin-top:16px"><button class="btn btn-secondary" onclick="backPTWrongIntro()">Danh sách câu sai</button></div>
    </div>
  </div>
</div>

'''

    if 'id="pt-page"' not in html:
        # insert before <script>
        html = html.replace("<script>", pt_pages + "<script>", 1)

    # 3) Insert PT and PT_TR data after SAMPLE
    if "const PT =" not in html:
        # after const SAMPLE = [...];
        m = re.search(r"const SAMPLE = \[.*?\];\s*\n", html, re.S)
        if not m:
            raise SystemExit("SAMPLE not found")
        html = html[: m.end()] + "\n" + pt_js + "\n" + html[m.end() :]
    else:
        html = re.sub(r"const PT = \[.*?\];\s*\n", pt_js + "\n", html, count=1, flags=re.S)

    if "const PT_TR" not in html:
        # after SAMPLE_TR or QUIZ_TR block - insert before escHtml / buildExplain
        if "const SAMPLE_TR" in html:
            html = re.sub(
                r"(const SAMPLE_TR = \[.*?\];\s*\n)",
                r"\1\n" + pt_tr + "\n",
                html,
                count=1,
                flags=re.S,
            )
        else:
            html = html.replace(
                "function escHtml",
                pt_tr + "\n  function escHtml",
                1,
            )
    else:
        html = re.sub(r"const PT_TR = \[.*?\];\s*\n", pt_tr + "\n", html, count=1, flags=re.S)

    # 4) Patch buildExplainPanel prefix mapping for pt / ptw
    # engines use prefix 'pt' and wrong 'ptw'
    html = html.replace(
        "buildExplainPanel(q, (prefix==='s'?SAMPLE_TR:QUIZ_TR)[idx], ch)",
        "buildExplainPanel(q, (prefix==='s'?SAMPLE_TR:prefix==='pt'?PT_TR:QUIZ_TR)[idx], ch)",
    )
    html = html.replace(
        "buildExplainPanel(q, (prefix==='sw'?SAMPLE_TR:QUIZ_TR)[qi], choice)",
        "buildExplainPanel(q, (prefix==='sw'?SAMPLE_TR:prefix==='ptw'?PT_TR:QUIZ_TR)[qi], choice)",
    )

    # 5) Init engines
    if "engines['pt']" not in html:
        init_snip = """
    // PT quiz engine (quiz.txt)
    engines['pt'] = makeEngine(
      PT, 'pt',
      document.getElementById('pt-stat-cur'),
      document.getElementById('pt-stat-ok'),
      document.getElementById('pt-stat-ng'),
      document.getElementById('pt-progress'),
      'pt-area','pt-finish','pt-fscore','pt-fgrade','pt-fbar','pt-fwrong',
      new Set(),
      document.getElementById('ptwrong-badge')
    );
    wrongEngines['ptw'] = makeWrongEngine(engines['pt'],'ptw','ptw-cnt','ptw-list','ptw-area','ptw-finish','ptw-rem','ptw-start-btn');

"""
        html = html.replace(
            "    engines['q'].render();\n    engines['s'].render();",
            init_snip + "    engines['q'].render();\n    engines['s'].render();\n    engines['pt'].render();",
        )

    # 6) showPage map
    old_map = "const map={'study':0,'quiz':1,'sample':2,'wrong':3,'swrong':4};"
    new_map = "const map={'study':0,'quiz':1,'sample':2,'pt':3,'wrong':4,'swrong':5,'ptwrong':6};"
    if old_map in html:
        html = html.replace(old_map, new_map)
    else:
        # try current
        html = re.sub(
            r"const map=\{[^}]+\};",
            new_map,
            html,
            count=1,
        )

    if "which==='ptwrong'" not in html:
        html = html.replace(
            "if(which==='swrong') wrongEngines['sw'].intro();",
            "if(which==='swrong') wrongEngines['sw'].intro();\n    if(which==='ptwrong') wrongEngines['ptw'].intro();",
        )

    # 7) reset + wrong callbacks
    if "function resetPT" not in html:
        html = html.replace(
            "function resetSample(){",
            """function resetPT(){
    if(!confirm('Làm lại từ đầu sẽ xóa toàn bộ kết quả Quiz PT. Tiếp tục?'))return;
    engines['pt'].reset();
    document.getElementById('pt-finish').style.display='none';
    document.getElementById('pt-area').style.display='block';
  }
  function startPTWrong(){wrongEngines['ptw'].start();}
  function backPTWrongIntro(){wrongEngines['ptw'].back();}
  function resetSample(){""",
        )

    # 8) Button color for PT in engine - use secondary/purple via prefix
    # Optional: when prefix==='pt' use btn-secondary - already works if we pass
    # makeEngine uses isOrange only for 's'. For pt default primary is fine.

    # Fix wrong engine isOrange for ptw - not orange, ok

    html_path.write_text(html, encoding="utf-8")
    print("updated index.html", html_path.stat().st_size)
    print("PT questions:", len(PT))


if __name__ == "__main__":
    main()
