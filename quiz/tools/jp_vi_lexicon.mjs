/**
 * JP (IT/JIT401) → VI gloss dictionary + helpers.
 * Used by rebuild_jit_all.mjs
 */

export function hasVi(s) {
  // Latin-1 accents + Vietnamese Latin Extended Additional (U+1EA0–1EF9: ế ể ệ ố ộ ớ …)
  return /[àáạảãâăèéêìíòóôơùúưỳýđÀÁẠẢÃÂĂÈÉÊÌÍÒÓÔƠÙÚƯỲÝĐ\u1EA0-\u1EF9]/i.test(
    s || ""
  );
}
export function hasJp(s) {
  return /[\u3040-\u30ff\u3400-\u9fff]/.test(s || "");
}

/** Longest-key-first exact / contains glosses */
export const JP_VI = {
  // —— core hardware / semiconductor ——
  半導体: "bán dẫn (semiconductor)",
  論理素子: "phần tử logic",
  チューリングマシン: "máy Turing",
  反対方向: "hướng ngược lại",
  パスワード: "mật khẩu",
  ウィルス: "virus",
  ウイルス: "virus",
  不正アクセス: "truy cập trái phép",
  拡散: "lan truyền / phát tán",
  盗む: "đánh cắp",
  犯罪: "tội phạm / hành vi phạm tội",
  収集する犯罪: "tội thu thập",
  電流: "dòng điện",
  電圧: "điện áp",
  電力: "công suất điện",
  抵抗: "điện trở",
  電荷: "điện tích",
  増幅器: "bộ khuếch đại",
  集積回路: "mạch tích hợp (IC)",
  "IC（集積回路）": "IC (mạch tích hợp)",
  演算装置: "thiết bị tính toán (ALU/đơn vị tính)",
  制御装置: "thiết bị điều khiển",
  記憶装置: "thiết bị nhớ",
  入力装置: "thiết bị vào",
  出力装置: "thiết bị ra",
  中央処理装置: "CPU (bộ xử lý trung tâm)",
  "CPU（中央処理装置）": "CPU (bộ xử lý trung tâm)",
  読み取り専用: "chỉ đọc",
  読み書き: "đọc-ghi",
  "ROM（読み取り専用メモリ）": "ROM (bộ nhớ chỉ đọc)",
  "RAM（ランダムアクセスメモリ）": "RAM (bộ nhớ truy cập ngẫu nhiên)",
  "HDD（ハードディスク）": "HDD (ổ cứng)",
  ハードディスク: "ổ cứng",
  レジスタ: "thanh ghi (register)",
  キャッシュ: "bộ nhớ đệm (cache)",
  メインメモリ: "bộ nhớ chính",
  補助記憶: "bộ nhớ phụ",
  フラッシュメモリ: "bộ nhớ flash",

  // —— computer history / types ——
  電子式計算機: "máy tính điện tử",
  電気機械式計算機: "máy tính điện-cơ",
  電子制御計算機: "máy tính điều khiển điện tử",
  電子計算管: "ống tính điện tử",
  汎用計算機: "máy tính đa dụng",
  計算機: "máy tính",
  "計算機（コンピュータ）": "máy tính",
  コンピュータ: "máy tính",
  デジタルコンピュータ: "máy tính số (digital)",
  デジタル時計: "đồng hồ số",
  サーバ: "máy chủ (server)",
  アプリケーション: "ứng dụng (application)",
  ソフトウェア: "phần mềm",
  ハードウェア: "phần cứng",
  ファームウェア: "firmware",
  オペレーティングシステム: "hệ điều hành",
  システム: "hệ thống",

  // —— data / signal ——
  アナログ: "tương tự (analog)",
  デジタル: "số (digital)",
  バイナリ: "nhị phân",
  パケット: "gói tin (packet)",
  データ: "dữ liệu",
  情報量: "lượng thông tin",
  文字コード: "mã ký tự (character code)",
  文字: "ký tự / chữ",
  数字: "chữ số / số",
  物理量: "đại lượng vật lý",
  連続的: "liên tục",
  近似: "xấp xỉ",
  表現: "biểu diễn / thể hiện",
  記録: "ghi / lưu",
  サンプリング周波数: "tần số lấy mẫu",
  量子化: "lượng tử hóa",
  量子化数: "số mức lượng tử hóa",
  データ圧縮: "nén dữ liệu",
  解像度: "độ phân giải",
  周波数帯域: "băng tần",
  ブロードバンド: "băng rộng (broadband)",
  透過: "trong suốt / xuyên qua (transparent)",
  遮蔽物: "vật che chắn",
  光ファイバ: "cáp quang",
  無線: "không dây",
  有線: "có dây",
  受信機: "máy thu",
  送信機: "máy phát",
  盗聴: "nghe lén",
  漏洩: "rò rỉ",

  // —— number systems / sort ——
  "10進数": "hệ thập phân",
  "2進数": "hệ nhị phân",
  "16進数": "hệ thập lục phân",
  昇順: "thứ tự tăng dần",
  降順: "thứ tự giảm dần",
  乱順: "thứ tự ngẫu nhiên (không chuẩn)",
  不順: "không thuận / lộn xộn",
  キーワード: "từ khóa",
  高水準言語: "ngôn ngữ bậc cao",
  低水準言語: "ngôn ngữ bậc thấp",
  機械語: "ngôn ngữ máy",
  アセンブリ言語: "ngôn ngữ assembly",

  // —— DB / structure ——
  関係データベース: "CSDL quan hệ",
  階層: "phân cấp / hierarchical",
  ツリー: "cây (tree)",
  木構造: "cấu trúc cây",
  "木構造（ツリー構造）": "cấu trúc cây (tree)",
  階層構造: "cấu trúc phân cấp",
  // General network ≠ DB "network model" (use ネットワーク型 for DB)
  ネットワーク: "mạng",
  ネットワークセキュリティ: "an ninh mạng (network security)",
  セキュリティ: "bảo mật / an ninh",
  ネットワーク型: "mô hình mạng (network model)",
  "ネットワーク型データベース": "CSDL mạng (network model)",
  オブジェクト: "đối tượng / object",
  リレーショナル: "quan hệ (relational)",
  線形リスト: "list tuyến tính",
  ハッシュ: "hash",
  グラフ: "đồ thị",
  分散処理システム: "hệ thống xử lý phân tán",
  集中処理: "xử lý tập trung",

  // —— files / OS ——
  ファイル: "tệp (file)",
  フォルダ: "thư mục (folder)",
  ディレクトリ: "thư mục (directory)",
  パス: "đường dẫn (path)",
  ドライブ: "ổ đĩa (drive)",
  アイコン: "biểu tượng (icon)",
  拡張子: "phần mở rộng (extension)",
  実行ファイル: "tệp thực thi",
  子供のフォルダ: "thư mục con",
  親フォルダ: "thư mục cha",

  // —— network / business ——
  ドメイン名: "tên miền",
  スター型ネットワーク: "mạng hình sao",
  バス型: "mạng bus",
  リング型: "mạng vòng",
  無線接続: "kết nối không dây",
  "SIMカード": "thẻ SIM",
  "EOS（電子受発注システム）": "EOS (hệ đặt hàng điện tử)",
  電子商取引: "thương mại điện tử",
  電子受発注: "đặt/nhận hàng điện tử",
  復号化: "giải mã",
  暗号化: "mã hóa",
  トロイの木馬: "ngựa thành Troy (trojan)",
  ウイルス: "virus",
  ワーム: "worm",
  スパイウェア: "spyware",
  フリーウェア: "phần mềm miễn phí (freeware)",
  シェアウェア: "shareware",
  ネチケット: "netiquette (phép lịch sự mạng)",
  ユビキタス: "ubiquitous (mọi lúc mọi nơi)",
  "POS（Point of Sale）": "POS (điểm bán hàng)",
  コスト削減: "cắt giảm chi phí",
  ハンズフリー: "rảnh tay (hands-free)",
  クラウドコンピューティング: "điện toán đám mây",
  ロングテール: "long tail",
  ソーシャルネットワーキング: "mạng xã hội (SNS)",

  // —— IP / rights ——
  特許権: "quyền sáng chế / patent",
  著作権: "bản quyền / copyright",
  著作隣接権: "quyền liền kề quyền tác giả",
  著作人格権: "quyền nhân thân tác giả",
  放送権: "quyền phát sóng",
  不公平: "không công bằng",
  きげん: "kỳ hạn / hết hạn (context)",

  // —— display / media ——
  "有機 EL ディスプレイ": "màn hình OLED",
  "有機ELディスプレイ": "màn hình OLED",
  "SED（Surface-conduction Electron-emitter Display）": "SED (màn hình electron surface)",
  差分記録: "ghi sai phân (inter-frame)",
  フレーム: "khung hình (frame)",
  動画像: "ảnh động / video",
  静止画: "ảnh tĩnh",

  // —— people ——
  "ジョン・モークリー（John Mauchly）": "John Mauchly",
  "フォン・ノイマン（John von Neumann）": "John von Neumann",
  フォン・ノイマン: "von Neumann",
  "ライプニッツの乗算機": "máy nhân Leibniz",
  スティーブ・ジョブズ: "Steve Jobs",
  ビル・ゲイツ: "Bill Gates",
  ティム・オライリー: "Tim O'Reilly",
  エリック・シュミット: "Eric Schmidt",

  // —— common verbs / fillers (scavenging etc.) ——
  不正利用: "lạm dụng / dùng trái phép",
  盗用: "đánh cắp / chiếm dụng",
  収集: "thu thập",
  暗号化: "mã hóa",
  バックアップ: "sao lưu",
  圧縮: "nén",
  管理: "quản lý",
  削除: "xóa",
  並べ替え: "sắp xếp",
  複号: "giải mã (cũ)",
  復号: "giải mã",

  // —— misc short ——
  プリンタ: "máy in",
  スピーカ: "loa",
  マウス: "chuột",
  キーボード: "bàn phím",
  ディスプレイ: "màn hình",
  サーバ: "máy chủ",
  クライアント: "máy khách",
  プロトコル: "giao thức",
  プロトコル数: "số lượng giao thức",
  パリティ: "parity (chẵn lẻ)",
  パリティビット: "bit parity (kiểm chẵn lẻ)",
  パリティチェック: "kiểm tra parity",
  パリティコード: "mã parity",
  奇数パリティ: "parity lẻ",
  偶数パリティ: "parity chẵn",
  画素数: "số điểm ảnh (pixel)",
  画素: "điểm ảnh (pixel)",
  ピクセル: "pixel",
  ビット: "bit",
  バイト: "byte",
  ビットレート: "bit rate (tốc độ bit)",
  フレームレート: "frame rate (tốc độ khung hình)",
  トランジスタ: "transistor",
  ダイオード: "diode",
  真空管: "ống chân không",
  マザーボード: "mainboard (bo mạch chủ)",
  ユーザインタフェース: "giao diện người dùng (UI)",
  ユーザーインターフェース: "giao diện người dùng (UI)",
  並列システム: "hệ thống song song",
  直列システム: "hệ thống nối tiếp",
  集中システム: "hệ thống tập trung",
  分散システム: "hệ thống phân tán",
  商標権: "quyền nhãn hiệu",
  意匠権: "quyền kiểu dáng (ý thiết kế)",
  実用新案権: "quyền giải pháp hữu ích",
  特許権: "quyền sáng chế",
  オートマトン: "automaton (ô tô-mát)",
  ソーティング: "sắp xếp (sorting)",
  ソート: "sắp xếp (sort)",
  プロセス管理: "quản lý process",
  ユーザ管理: "quản lý người dùng",
  ソフトとハードの仲介: "trung gian phần mềm và phần cứng",
  電子マネー: "tiền điện tử",
  メッシュ型: "mạng lưới (mesh)",
  スター型: "mạng hình sao",
  バス型: "mạng bus",
  リング型: "mạng vòng",
  画像情報: "thông tin ảnh",
  通信情報: "thông tin truyền thông",
  テキスト情報: "thông tin văn bản",
  データ量: "lượng dữ liệu",
  デジタル量: "đại lượng số (digital)",
  アナログ量: "đại lượng tương tự (analog)",
  処理の中心となる部品: "linh kiện trung tâm xử lý (CPU)",
  "処理の中心となる部品である": "là linh kiện trung tâm xử lý (CPU)",
  スイッチが直列に並んだ回路: "mạch các công tắc xếp nối tiếp",
  スイッチが並列に並んだ回路: "mạch các công tắc xếp song song",
  "8進数": "hệ bát phân",
  "最も単純な画像圧縮方式の1つ": "một trong các cách nén ảnh đơn giản nhất",
  関係的表現: "biểu diễn quan hệ (relational)",
  階層的表現: "biểu diễn phân cấp (hierarchical)",
  網的表現: "biểu diễn mạng (network model)",
  データ操作の時間: "thời gian thao tác dữ liệu",
  検索時の速度: "tốc độ khi tìm kiếm",
  上順: "thứ tự tăng (ascending)",
  下順: "thứ tự giảm (descending)",
  昇順: "thứ tự tăng dần",
  降順: "thứ tự giảm dần",
  日本: "Nhật Bản",
  アメリカ: "Mỹ",
  オーストラリア: "Úc",
  イギリス: "Anh",
  ベトナム: "Việt Nam",
  "1946年": "năm 1946",
  "1949年": "năm 1949",
  "1930年": "năm 1930",
  "1939年": "năm 1939",
  "1930年代": "thập niên 1930",
  "（候補なし）": "(không có phương án phù hợp)",
  コピーができる: "có thể sao chép",
  赤外線を使って通信する: "truyền thông bằng hồng ngoại",
  ファイアウォール: "tường lửa (firewall)",
  フローチャート: "lưu đồ (flowchart)",
  デバイスドライバ: "device driver",
  フーリエ変換: "biến đổi Fourier",
  マージソート: "merge sort",
  バブルソート: "bubble sort",
  シェルソート: "shell sort",
  ランレングス圧縮: "nén run-length",
  ハフマン符号: "mã Huffman",
  セクタ: "sector (đĩa)",
  バリュー: "value (giá trị/tiền điện tử)",
  メモリやハードディスク: "bộ nhớ và ổ cứng",
  ロングテールがある: "có long tail",
  シェアウェアがある: "có shareware",
  キャラクターがある: "có ký tự/nhân vật",
  一方向的なアドレス: "địa chỉ một chiều",
  一方向的なホームページ: "trang web một chiều",
  双方向型のアドレス: "địa chỉ hai chiều",
  双方向型のホームページ: "trang web hai chiều",
  与えられた原文に戻さないこと: "không khôi phục được bản gốc",
  与えられた原文に戻すこと: "khôi phục được bản gốc",
  人為的: "do con người tạo ra",
  代替キー: "khóa thay thế (alternate key)",
  動画: "video / ảnh động",
  画面: "màn hình / khung hình",
  第1世代携帯電話: "điện thoại di động thế hệ 1",
  第2世代携帯電話: "điện thoại di động thế hệ 2",
  第3世代携帯電話: "điện thoại di động thế hệ 3",
  "第3.5世代携帯電話": "điện thoại di động thế hệ 3.5",
  非接触型ICカード: "thẻ IC không tiếp xúc",
  "高音質な楽曲再生が可能です": "có thể phát nhạc chất lượng cao",
  "高音質な楽曲再生が不可能です": "không thể phát nhạc chất lượng cao",
  "0と1": "0 và 1",
  かんすう: "hàm số (kansū)",
  ビット数: "số bit",
  画質: "chất lượng ảnh",
  ぎざぎざ: "răng cưa / răng lược (aliasing)",
  パケット交換: "chuyển mạch gói",
  // —— bulk remaining short options (JIT stubs) ——
  AND回路: "mạch AND",
  OR回路: "mạch OR",
  NOT回路: "mạch NOT",
  XOR回路: "mạch XOR",
  "AND回路の演算": "phép toán mạch AND",
  "OR回路の演算": "phép toán mạch OR",
  "NOT回路の演算": "phép toán mạch NOT",
  "XOR回路の演算": "phép toán mạch XOR",
  ASCIIコード: "mã ASCII",
  "Shift_JIS": "Shift_JIS",
  シフトJISコード: "mã Shift_JIS",
  IPアドレス: "địa chỉ IP",
  MACアドレス: "địa chỉ MAC",
  URLアドレス: "địa chỉ URL",
  ICカード: "thẻ IC",
  SDカード: "thẻ SD",
  USBメモリ: "USB memory",
  メモリカード: "thẻ nhớ",
  Cookie: "cookie",
  "Cookie（クッキー）": "cookie",
  セッション: "session",
  ローカルストレージ: "local storage",
  "P2P（ピアツーピア）": "P2P (peer-to-peer)",
  "EDI（電子データ交換）": "EDI (trao đổi dữ liệu điện tử)",
  "CALS（製造過程電子化）": "CALS (điện tử hóa quy trình sản xuất)",
  eコマース: "thương mại điện tử (e-commerce)",
  "e コマース": "thương mại điện tử (e-commerce)",
  RSA暗号: "mã hóa RSA",
  シーザー暗号: "mã Caesar",
  スキュタレー暗号: "mã scytale",
  アフィリエイト: "affiliate",
  "SNSの普及": "phổ biến SNS",
  エクスプローラ: "Explorer",
  ゲートウェイ: "gateway",
  ケーブルテレビ: "truyền hình cáp",
  コネクタ端子: "đầu nối (connector)",
  コンテンツ: "nội dung (content)",
  ダウンロード: "tải xuống",
  アップロード: "tải lên",
  テラバイト: "terabyte",
  デッドロック: "deadlock",
  デフラグ: "defrag",
  トレードオフ: "trade-off",
  ナローバンド: "narrowband",
  ブロードバンド: "broadband",
  ネットブック: "netbook",
  ガラパゴス携帯: "điện thoại Galápagos (nội địa Nhật)",
  なりすまし: "mạo danh (spoofing)",
  ファイアウォール: "tường lửa",
  バスタブ曲線: "đường cong bồn tắm (bathtub)",
  "S字曲線": "đường cong chữ S",
  ハフマン符号: "mã Huffman",
  データリンク層: "tầng Data Link",
  ネットワーク層: "tầng Network",
  トランスポート層: "tầng Transport",
  セッション層: "tầng Session",
  プレゼンテーション層: "tầng Presentation",
  アプリケーション層: "tầng Application",
  物理層: "tầng Physical",
  "Aさんの公開鍵": "khóa công khai của A",
  "Aさんの秘密鍵": "khóa bí mật của A",
  "Bさんの公開鍵": "khóa công khai của B",
  "Bさんの秘密鍵": "khóa bí mật của B",
  "1と0だけを使う": "chỉ dùng 0 và 1",
  "1ビットの誤りを検出できる": "phát hiện được lỗi 1 bit",
  "2ビットの誤りを必ず検出できる": "chắc chắn phát hiện lỗi 2 bit",
  "すべてのビット誤りを訂正できる": "sửa được mọi lỗi bit",
  電流の量: "lượng dòng điện",
  波形の量: "lượng dạng sóng",
  音声情報: "thông tin âm thanh",
  光通信: "truyền thông quang",
  有線接続: "kết nối có dây",
  電灯線接続: "kết nối qua đường điện (PLC)",
  "Wi-Fiの一種である": "là một loại Wi-Fi",
  "約40 Mbps": "khoảng 40 Mbps",
  "約50 Mbps": "khoảng 50 Mbps",
  "約100 Mbps": "khoảng 100 Mbps",
  "約1 Kbps": "khoảng 1 Kbps",
  "約10mの通信範囲を持つ": "tầm truyền khoảng 10 m",
  "10m以上の範囲で通信できる": "truyền được phạm vi trên 10 m",
  "通信速度は約1 Mbps": "tốc độ truyền khoảng 1 Mbps",
  "電波を使って通信する規格": "chuẩn truyền bằng sóng radio",
  "圧力を感知する仕組み": "cơ chế cảm nhận áp lực",
  "接触した位置を検出できる": "phát hiện được vị trí chạm",
  "温度を記録する": "ghi nhiệt độ",
  "磁気を記録する": "ghi từ",
  "音波を検出する": "phát hiện sóng âm",
  "縦横の抵抗値": "giá trị điện trở dọc/ngang",
  "赤外線の反射": "phản xạ hồng ngoại",
  "超音波の振動": "dao động siêu âm",
  "データ通信ができない": "không truyền dữ liệu được",
  "データの送受信が可能": "có thể gửi/nhận dữ liệu",
  "データを削除すること": "xóa dữ liệu",
  データ制御: "điều khiển dữ liệu",
  データ変換: "chuyển đổi dữ liệu",
  データ抽出: "trích xuất dữ liệu",
  データ集計: "tổng hợp dữ liệu",
  "テキストを圧縮するための変換": "biến đổi để nén text",
  "MPUとも呼ばれる": "còn gọi là MPU",
  "C++ 言語": "ngôn ngữ C++",
  "JavaやC++": "Java hoặc C++",
  "OSカーネルそのもの": "chính kernel OS",
  "Unicodeが広く使われる": "Unicode được dùng rộng rãi",
  "UTF-8などで多言語を扱える": "xử lý đa ngôn ngữ bằng UTF-8…",
  "Shift_JISなどの符号化がある": "có mã hóa như Shift_JIS",
  "GUIが絶対に書けない": "tuyệt đối không viết được GUI",
  "クラウドで処理を分散する": "phân tán xử lý trên cloud",
  "グラフィックを処理する専用基板": "bo mạch chuyên xử lý đồ họa (GPU board)",
  "きめ細かい": "chi tiết / mịn",
  "どちらか1つONで出力ON": "một trong hai ON → output ON",
  "どちらも必ず有料である": "cả hai đều bắt buộc trả phí",
  "セクタは使わない": "không dùng sector",
  "スワッピングのみ": "chỉ swapping",
  "ジョインのみ": "chỉ join",
  "テストを省略すること": "bỏ qua kiểm thử",
  "デフラグは不要な操作である": "defrag là thao tác không cần",
  "ダウンロードと同じ意味": "cùng nghĩa với download",
  "1台のPCの内部バス": "bus nội bộ trong 1 PC",
  "1対1関係しか表せない": "chỉ biểu diễn quan hệ 1–1",
  "CPUの物理製造": "sản xuất vật lý CPU",
  "CPUの温度センサの別名": "tên khác của cảm biến nhiệt CPU",
  "CPUの種類に依存した機械語": "ngôn ngữ máy phụ thuộc loại CPU",
  "CPUの種類に依存した機械語である": "là ngôn ngữ máy phụ thuộc loại CPU",
  "CPU内部でデータのやりとりをすること": "trao đổi dữ liệu trong CPU",
  "CPU命令を1対1で書くことのみ": "chỉ viết lệnh CPU 1–1",
  "CMOSのセンサの方式": "kiểu cảm biến CMOS",
  "MPEGなどの動画像圧縮方式": "cách nén video như MPEG",
  "セグメントの方式": "cách/segment method",
  "アスタリスク": "dấu sao (*)",
  "アンダーバー": "gạch dưới (_)",
  "シャープ": "dấu thăng (#)",
  "チルダ": "dấu ngã (~)",
  "シリアル": "serial",
  "ダイアルアップ": "dial-up",
  "スイッチが1つだけの回路": "mạch chỉ một công tắc",
  "スイッチが1つの単純な回路": "mạch đơn giản một công tắc",
  "スイッチが並列のモデル": "mô hình công tắc song song",
  "スイッチが星形に並んだ回路": "mạch công tắc xếp hình sao",
  "スター型は1本のケーブルに全端末がぶら下がる": "mạng sao: mọi máy treo một cáp (sai mô tả bus)",
  "バス型はハブを中心に接続する": "mạng bus kết nối quanh hub (sai — đó là star)",
  "商標権・意匠権・著作者財産権": "quyền nhãn hiệu · kiểu dáng · tài sản tác giả",
  "特許権・商標権・著作者人格権": "sáng chế · nhãn hiệu · nhân thân tác giả",
  "自分の氏名・連絡先を明記する": "ghi rõ họ tên/liên hệ của mình",
  "ブログやWikiを活用できる": "có thể dùng blog/Wiki",
  "マーク・ザッカーバーグ": "Mark Zuckerberg",
  "目的明確化の原則がある": "có nguyên tắc làm rõ mục đích",
  "種類・配置・画像・動画": "loại · bố cục · ảnh · video",
  "種類・機器・画像・動画": "loại · thiết bị · ảnh · video",
  "種類・配置・転送・動画": "loại · bố cục · truyền · video",
  "種類・配置・画像・装置": "loại · bố cục · ảnh · thiết bị",
  "00と11": "00 và 11",
  "01と10": "01 và 10",
  "0と10": "0 và 10",
  "17世紀": "thế kỷ 17",
  "1Gバイト < 1Mバイト < 1kバイト": "1GB < 1MB < 1KB (sai thứ tự)",
  "1kバイト < 1Mバイト < 1Gバイト < 1Tバイト": "1KB < 1MB < 1GB < 1TB",
  "1Mバイト < 1kバイト < 1Gバイト": "1MB < 1KB < 1GB (sai)",
  "1Tバイト < 1Gバイト < 1Mバイト": "1TB < 1GB < 1MB (sai)",
  "①圧縮率 ②雑音": "① tỉ lệ nén ② nhiễu",
  "①サンプリング周波数 ②ファイルサイズのみ": "① tần số lấy mẫu ② chỉ size file",
  "「もの」を中心にする": "lấy «vật/đối tượng» làm trung tâm",
  "「こと」を中心にする": "lấy «việc/xử lý» làm trung tâm",
  "「こと」（処理・手続き）を中心にする": "lấy xử lý/thủ tục làm trung tâm",
  "DMZ 緩衝地帯 非武装地帯": "DMZ (vùng đệm / phi quân sự)",
  "OR回路の演算のことを論理積と言います": "gọi phép OR là tích logic (sai — OR là tổng logic)",
  "OR回路は1つのダイオードを使って実現できます": "mạch OR làm bằng một diode",
  "すべてのダイオードは電流が流れると発光するため、電源ランプなどに広く用いられている。":
    "Mọi diode đều phát sáng khi có dòng (sai — chỉ LED).",
  回線交換: "chuyển mạch kênh",
  帯域幅: "băng thông",
  レイテンシ: "độ trễ (latency)",
  スループット: "throughput",
  アルゴリズム: "thuật toán",
  プログラム: "chương trình",
  ソースコード: "mã nguồn",
  コンパイル: "biên dịch",
  インタプリタ: "thông dịch",
  デバッグ: "debug",
  テスト: "kiểm thử",
  モジュール: "mô-đun",
  インターフェース: "giao diện",
  データベース: "cơ sở dữ liệu",
  テーブル: "bảng",
  レコード: "bản ghi",
  フィールド: "trường",
  主キー: "khóa chính",
  外部キー: "khóa ngoại",
  正規化: "chuẩn hóa",
  トランザクション: "giao dịch",
  ロールバック: "rollback",
  コミット: "commit",
  インデックス: "chỉ mục (index)",
  ビュー: "view",
  SQL: "SQL",
  HTML: "HTML",
  CSS: "CSS",
  JavaScript: "JavaScript",
  HTTP: "HTTP",
  HTTPS: "HTTPS",
  TCP: "TCP",
  IP: "IP",
  DNS: "DNS",
  URL: "URL",
  LAN: "LAN",
  WAN: "WAN",
  WiFi: "Wi-Fi",
  Bluetooth: "Bluetooth",
  USB: "USB",
  SSD: "SSD",
  GPU: "GPU",
  OS: "hệ điều hành (OS)",
  UI: "giao diện người dùng",
  UX: "trải nghiệm người dùng",
};

/** Collapse whitespace / fullwidth space for phrase matching */
function normJp(s) {
  return String(s || "")
    .replace(/[\u3000\s]+/g, " ")
    .replace(/[，]/g, "，")
    .replace(/[．]/g, "。")
    .trim();
}
function compactJp(s) {
  return normJp(s).replace(/\s+/g, "");
}

/** Extra multi-word / full-sentence glosses (longest first). Never mid-token soup. */
export const JP_PHRASES = [
  // —— high-frequency slide options (×40–56) ——
  [
    "アナログとは，連続的な量のことを表します。長さ・重さ・時間など身の回りの多くの物理量はアナログ量です。",
    "Analog là đại lượng liên tục. Chiều dài, khối lượng, thời gian… nhiều đại lượng vật lý quanh ta là analog.",
  ],
  [
    "デジタルとは，数値化された量のことを表します。デジタルコンピュータでは電圧が高い(オン)，低い(オフ)に対応させるために，1と0の数字だけを使っています。",
    "Digital là đại lượng đã số hóa. Máy tính số chỉ dùng 1 và 0 để tương ứng điện áp cao (on) / thấp (off).",
  ],
  [
    "たとえば，時間は連続的に流れていますが，デジタル時計では1秒単位の数字として扱っています。",
    "Ví dụ thời gian chảy liên tục nhưng đồng hồ số xử lý theo đơn vị số 1 giây.",
  ],
  [
    "デジタルコンピュータでは，一定単位の数字に近似して扱っています。",
    "Máy tính số xử lý xấp xỉ theo đơn vị số rời rạc.",
  ],
  [
    "現在使われているコンピュータは，デジタルコンピュータです。",
    "Máy tính đang dùng hiện nay là máy tính số (digital).",
  ],
  [
    "コンピュータのデータは 0 と 1 の並びで表現された数字であり，文字そのものが記録されているわけではありません。",
    "Dữ liệu máy tính là dãy số biểu diễn bằng 0 và 1; không phải bản thân chữ cái được ghi trực tiếp.",
  ],
  [
    "コンピュータのデータは0と1の並びで表現された数字であり，文字そのものが記録されているわけではありません。",
    "Dữ liệu máy tính là dãy số biểu diễn bằng 0 và 1; không phải bản thân chữ cái được ghi trực tiếp.",
  ],
  [
    "日常生活でなじんでいるパソコンから，スーパーコンピュータまで，世の中には多くの形態のコンピュータがありますが，その基本原理はまったく同じです。この章では，コンピュータの機能や歴史の基礎について概観します。",
    "Từ PC quen thuộc đến supercomputer đều chung nguyên lý. (Đoạn mở đầu chương chức năng/lịch sử máy tính — nhiễu.)",
  ],
  [
    "デジタルコンピュータは，パソコンでもスーパーコンピュータでもその動作原理は同じで，非常に単純なものです。この動作原理を理解することによってコンピュータの利用で注意すべきことが分かります。この章",
    "Máy tính số (PC hay supercomputer) cùng nguyên lý hoạt động đơn giản. (Đoạn mở đầu chương — nhiễu.)",
  ],
  [
    "通常，サーバとなっているコンピュータには，重要な情報が記録されています。",
    "Thông thường máy chủ (server) lưu thông tin quan trọng.",
  ],
  [
    "通常， サーバとなっているコンピュータには， 重要な情報が記録されています。",
    "Thông thường máy chủ (server) lưu thông tin quan trọng.",
  ],

  // —— ROM / memory ——
  ["読み取り専用の半導体メモリである", "Là bộ nhớ bán dẫn chỉ đọc (ROM)"],
  ["読み書き専用の半導体メモリである", "Là bộ nhớ bán dẫn đọc-ghi (sai khái niệm ROM)"],
  ["画面イメージ全体を記憶するメモリである", "Bộ nhớ lưu toàn bộ ảnh màn hình (VRAM/frame buffer)"],
  ["静電気をを記録するメモリである", "Bộ nhớ ghi tĩnh điện (diễn đạt sai/lệch)"],
  ["静電気を記録するメモリである", "Bộ nhớ ghi tĩnh điện"],
  ["0と1のデジタルデータ", "Dữ liệu số 0 và 1"],
  ["パケットデータ", "Dữ liệu dạng gói (packet)"],
  ["電流(mA)または電圧(mV)信号", "Tín hiệu dòng (mA) hoặc điện áp (mV)"],
  ["バイナリコード", "Mã nhị phân"],
  ["連続的な量", "Đại lượng liên tục"],
  ["数値化された量", "Đại lượng đã số hóa"],
  ["切れ目のある正確な表現ができる", "Biểu diễn chính xác, rời rạc được"],
  ["曖昧なものをそのまま表現できる", "Biểu diễn được cả cái mơ hồ nguyên trạng"],
  ["曖昧なものをそのまま残すことができる", "Có thể giữ nguyên phần mơ hồ"],
  ["正確で切れ目のある", "Chính xác và rời rạc"],
  ["演算・記憶・制御・入力・出力装置", "Đơn vị tính · nhớ · điều khiển · vào · ra"],
  ["演算・記憶・制御・入力・通信装置", "Tính · nhớ · điều khiển · vào · truyền thông"],
  ["演算・記憶・制御・表示・出力装置", "Tính · nhớ · điều khiển · hiển thị · ra"],
  ["演算・処理・制御・入力・出力装置", "Tính · xử lý · điều khiển · vào · ra"],
  ["コンピュータ ＝ 入力 ＋ 出力", "Máy tính = vào + ra (thiếu)"],
  ["コンピュータ ＝ 演算 ＋ 通信", "Máy tính = tính + truyền thông (thiếu)"],
  ["コンピュータ ＝ 記憶 ＋ 処理", "Máy tính = nhớ + xử lý (thiếu)"],
  ["コンピュータ ＝ 表示 ＋ 制御", "Máy tính = hiển thị + điều khiển (thiếu)"],
  ["ファイル名の後ろの文字列", "Chuỗi ký tự sau tên file (phần mở rộng)"],
  ["ファイルを整理するための入れ物", "Hộp/thư mục để sắp xếp file"],
  ["ファイルの内容を処理する装置", "Thiết bị xử lý nội dung file"],
  ["ドライブ名のこと", "Chỉ là tên ổ đĩa"],
  ["ハードディスクの別名", "Tên khác của ổ cứng"],
  ["残された個人情報を収集する犯罪", "Tội thu thập thông tin cá nhân còn sót (scavenging)"],
  ["コンピュータに不正アクセスする犯罪", "Tội truy cập trái phép vào máy tính"],
  ["ウィルスを拡散する犯罪", "Tội phát tán virus"],
  ["ウイルスを拡散する犯罪", "Tội phát tán virus"],
  ["パスワードを盗む犯罪", "Tội đánh cắp mật khẩu"],
  ["処理を複数のコンピュータで分散して管理する", "Phân tán xử lý trên nhiều máy tính để quản lý"],
  ["中心となるコンピュータが全ての処理を管理する", "Một máy trung tâm quản lý toàn bộ xử lý (tập trung)"],
  ["1台のコンピュータのみが稼働する", "Chỉ một máy tính hoạt động"],
  ["1台のコンピュータが全処理を担当する", "Một máy tính đảm nhiệm toàn bộ xử lý"],
  ["2つ以上の処理装置がメモリを共有して並列処理を行う", "≥2 bộ xử lý chia sẻ bộ nhớ, xử lý song song"],
  ["2つ以上の処理装置が独立したメモリを持って並列処理を行う", "≥2 bộ xử lý có bộ nhớ riêng, xử lý song song"],
  ["インターネット専用のシステム", "Hệ thống chỉ dành cho Internet"],
  ["残された個人情報を", "thông tin cá nhân còn sót"],
  ["差分記録", "ghi sai phân (chỉ lưu phần khác frame trước)"],
  ["ネットワークセキュリティ", "an ninh mạng (network security)"],
  ["重要な情報が記録されています", "thông tin quan trọng được ghi/lưu"],
  ["1秒単位の数字として扱っています", "xử lý dưới dạng số theo đơn vị 1 giây"],
  ["与えられた原文が推測できないように変換すること", "Chuyển đổi sao cho không suy ra được bản gốc (mã hóa)"],
  ["与えられた原文が推測できるように変換すること", "Chuyển đổi vẫn suy ra được bản gốc (không phải mã hóa chặt)"],
  ["バスを流れるデータや外部機器とのデータを制御する", "Điều khiển dữ liệu trên bus và với thiết bị ngoài"],
  ["メモリに蓄えられているプログラム", "Chương trình được lưu trong bộ nhớ"],
  ["パソコン内で大きな面積を占めるメインとなる基板のこと", "Bo mạch chính chiếm diện tích lớn trong PC (mainboard)"],
  ["CPUの中には演算装置機能だけが組み込まれている", "Trong CPU chỉ gắn chức năng đơn vị tính (thiếu/sai)"],
  ["情報の送り手と受け手が固定されている", "Bên gửi và bên nhận thông tin cố định"],
  ["色がいくつ並ぶかを記述する圧縮方式", "Cách nén mô tả có bao nhiêu màu xếp liền"],
  ["ユーザ自身がコンテンツを作成・共有できる", "Người dùng tự tạo và chia sẻ nội dung"],
  ["パソコン内のHDDにデータを保存するサービス", "Dịch vụ lưu dữ liệu trên HDD trong PC"],
  ["インターネットを通じてコンピュータ資源やサービスを提供する", "Cung cấp tài nguyên/máy tính/dịch vụ qua Internet (cloud)"],
  ["DVDを使ってソフトウェアを配布する方法", "Phân phối phần mềm bằng DVD"],
  ["USBメモリを使ったデータ共有の方法", "Chia sẻ dữ liệu bằng USB"],
  ["著作権のあるファイルを送ってよい", "Được gửi file có bản quyền (thường sai trong ngữ cảnh)"],
  ["添付ファイルのウィルスをチェックする", "Kiểm tra virus file đính kèm"],
  ["著作者人格権・著作者財産権・著作隣接権", "Quyền nhân thân · quyền tài sản · quyền liền kề"],
  ["インターネット利用形態の主なものにホームページ閲覧とメール送受信があります。", "Hình thức dùng Internet chính: xem trang web và gửi/nhận email."],
  ["どちらも，携帯電話で日常的に利用しているでしょう。", "Cả hai đều dùng hằng ngày trên điện thoại di động."],
  ["インターネットは世界中の人たちと直接ふれあうことができる，すばらしいコミュニケーションの道具です。", "Internet là công cụ giao tiếp tuyệt vời, tiếp xúc trực tiếp với người khắp thế giới."],
  ["しかし，実際に顔が見えないと，現実世界では決して言わないような表現をしてしまう場合もあります。", "Nhưng khi không thấy mặt, đôi khi dùng cách nói không bao giờ nói ngoài đời."],
  ["インターネットといえどもコンピュータの向こうには生身の人間がいることを想像しなければいけません。", "Dù là Internet vẫn phải nhớ phía máy tính là con người thật."],
  ["クローズドループ型の電子マネーは、現金のような匿名性が高く、小口の利用に適している。", "Tiền điện tử closed-loop: ẩn danh cao như tiền mặt, phù hợp giao dịch nhỏ."],
  ["ネットワークを使った電子データ交換の標準化のことで、受発注・決済・配送などに用いられます", "Chuẩn hóa trao đổi dữ liệu điện tử qua mạng (EDI): đặt hàng, thanh toán, giao hàng…"],
  ["文書・図面・取引情報などが扱われます", "Xử lý văn bản, bản vẽ, thông tin giao dịch…"],
  ["オンラインの受発注システムのことを言います", "Hệ thống đặt/nhận hàng trực tuyến (EOS)"],
  ["製造業における全製造過程の電子化についての標準化のことを言います", "Chuẩn hóa điện tử hóa toàn bộ quy trình sản xuất (sản xuất)"],
  ["稼働率 ＝ MTTR / (MTBF ＋ MTTR)", "Tỉ lệ hoạt động = MTTR / (MTBF + MTTR) — thường sai công thức"],
  ["公開鍵方式と秘密鍵方式で暗号化した状態で情報通信を行う", "Truyền tin đã mã hóa bằng khóa công khai và khóa bí mật"],
  ["ウィルスを検出するソフトウェア", "Phần mềm phát hiện virus"],
  ["クラウド上のデータ管理システム", "Hệ quản lý dữ liệu trên cloud"],
  ["赤外線を使った通信規格で、遮蔽物があると通信できない", "Chuẩn truyền hồng ngoại; có vật chắn thì không thông"],
  ["通信速度が54 Mbpsの規格", "Chuẩn tốc độ 54 Mbps"],
  ["携帯電話やパソコンに搭載されている", "Gắn trên điện thoại/PC"],
  ["カードを読み取り機に差し込んで使う", "Cắm thẻ vào đầu đọc để dùng"],
  ["JRのSuicaなどで使われている", "Dùng trong Suica (JR) v.v."],
  ["押された部分の縦横の抵抗値を測定する", "Đo điện trở dọc/ngang chỗ chạm (cảm ứng điện trở)"],
  ["指先の電荷を測定して位置を検出する", "Đo điện tích đầu ngón tay để xác định vị trí (cảm ứng điện dung)"],
  ["指先とセンサの間に蓄えられる電荷", "Điện tích tích giữa đầu ngón và cảm biến"],
  ["光の強弱を記録する素子と増幅器が並んだセンサ", "Cảm biến gồm phần tử ghi sáng tối + khuếch đại"],
  ["デジタル通信になり音質が向上した", "Chuyển sang truyền số → chất lượng âm tốt hơn"],
  ["ブロードバンドを前提としている", "Lấy băng rộng làm tiền đề"],
  ["着信メロディのデータは、音楽用のコードと解釈されます", "Dữ liệu nhạc chuông được hiểu là mã âm nhạc"],
  ["モジュレーションなどにより表現されています", "Biểu diễn bằng điều chế (modulation) v.v."],
  ["High Text Markup Languageの略", "Viết tắt High Text Markup Language (sai — HTML là HyperText)"],
  ["ユーザが独自にタグを定義できる言語", "Ngôn ngữ cho phép người dùng tự định nghĩa thẻ"],
  ["文字の種類・配置・画像・動画などが記述できる言語", "Ngôn ngữ mô tả kiểu chữ, bố cục, ảnh, video…"],
  ["管理（かんり）：Quản lý", "管理 (kanri): Quản lý"],
  ["収集（しゅうしゅう）：Thu thập", "収集 (shūshū): Thu thập"],
  ["削除（さくじょ）：Xóa bỏ", "削除 (sakujo): Xóa bỏ"],
  ["整理（せいり）：Sắp xếp", "整理 (seiri): Sắp xếp"],
  // —— more common quiz options ——
  [
    "日常生活でなじんでいるパソコンから， スーパーコンピュータまで， 世の中には多くの形態のコンピュータがありますが， その基本原理はまったく同じです。 この章では， コンピュータの機能や歴史の基礎について概観します。",
    "Từ PC quen thuộc đến supercomputer đều chung nguyên lý. (Đoạn mở đầu chương chức năng/lịch sử máy tính — nhiễu.)",
  ],
  ["ホームページを見る場合には， Internet Explorer( インターネットエクスプローラ) などのブラウザ( 閲覧ソフト) を利用します。", "Xem trang web bằng trình duyệt như Internet Explorer."],
  ["稼働率 ＝ MTBF / (MTBF ＋ MTTR)", "Tỉ lệ hoạt động = MTBF / (MTBF + MTTR)"],
  ["稼働率 ＝ MTTR / (MTBF ＋ MTTR)", "Tỉ lệ hoạt động = MTTR / (MTBF + MTTR) — công thức thường sai"],
  ["人為的に作成されたプログラム（感染→潜伏→発病）", "Chương trình do người tạo (nhiễm → ủ → phát bệnh) — virus"],
  ["パソコン内で大きな面積を占めるメインの基板", "Bo mạch chính chiếm diện tích lớn trong PC"],
  ["パソコン内で最も大きな面積を占める基板のこと", "Bo mạch chiếm diện tích lớn nhất trong PC (mainboard)"],
  ["両方のスイッチがONのときだけ出力がON", "Chỉ khi cả hai công tắc ON thì output ON (AND)"],
  ["スイッチが並列に並んだ回路で、少なくとも1つONで出力がON", "Mạch song song: ≥1 công tắc ON thì output ON (OR)"],
  ["映画は1秒間に24回画面が書き換えられる", "Phim làm mới màn hình 24 lần/giây"],
  ["日本のテレビは1秒間に30回画面が書き換えられる", "TV Nhật làm mới màn hình 30 lần/giây"],
  ["動画の情報量 ＝ 静止画1枚 × フレームレート × 秒数", "Lượng tin video = 1 ảnh tĩnh × frame rate × số giây"],
  ["動画は静止画と関係なく独立した形式である", "Video là định dạng độc lập, không liên quan ảnh tĩnh (sai)"],
  ["全ての波を波長の違う正弦波に分解する変換", "Biến đổi phân rã sóng thành các sine khác bước sóng (Fourier)"],
  ["インターネット（ADSL・FTTHなど）で音声情報を送受信する", "Gửi/nhận âm thanh qua Internet (ADSL/FTTH…) — VoIP"],
  ["いかなる場合でもデータサイズを大幅に削減できる", "Mọi trường hợp đều giảm mạnh kích thước dữ liệu (thường sai)"],
  ["どの場合でもデータサイズを大幅に削減できる", "Mọi trường hợp đều giảm mạnh kích thước dữ liệu (thường sai)"],
  ["ネットワーク上の複数のコンピュータで処理を分担する", "Nhiều máy trên mạng chia sẻ xử lý"],
  ["JavaやC++が低級言語の代表例である", "Java/C++ là ngôn ngữ bậc thấp điển hình (sai — chúng là bậc cao)"],
  ["文字の並び順を入れ替えることで暗号化する", "Mã hóa bằng cách đổi thứ tự chữ (hoán vị)"],
  ["文字の位置を規則的または不規則にずらすことで暗号化する", "Mã hóa bằng dịch vị trí chữ (Caesar/shift)"],
  ["OSが異なってもアプリケーションはOS種別を意識せずに処理できる", "App chạy bất chấp OS mà không cần biết loại OS (sai / quá tuyệt đối)"],
  ["OSが異なっていてもアプリケーションはOSの種別を意識せずに処理できる", "App chạy bất chấp OS mà không cần biết loại OS (sai / quá tuyệt đối)"],
  ["OSはソースコードの公開が義務付けられている", "OS bắt buộc công khai mã nguồn (sai — không phải mọi OS)"],
  ["OSはCPUやメモリなどのコンピュータ資源をアプリに割り当てる", "OS cấp phát tài nguyên (CPU, bộ nhớ…) cho ứng dụng"],
  ["OSはアプリケーションに対して、CPUやメモリなどのコンピュータ資源を割り当てる", "OS cấp phát CPU/bộ nhớ… cho ứng dụng"],
  ["OSはファイルの文字コードを自動変換する機能を必ず持つ", "OS luôn tự đổi mã ký tự file (không nhất thiết)"],
  ["OSはファイルの文字コードを自動変換する機能をもつためアプリは文字コード種別を意識しなくてよい", "OS tự đổi mã ký tự nên app không cần quan tâm (sai / quá tuyệt đối)"],
  ["アプリケーションが自由にOSの機能を使えるようにソースコードの公開が義務付けられている", "Bắt buộc mở source để app dùng tự do chức năng OS (sai)"],
  ["ネットワーク層のIPプロトコルに従って番号が割り当てられている", "Số được gán theo giao thức IP tầng mạng"],
  ["音声の波をそのまま電波の波に置き換えて送受信する", "Thay sóng âm bằng sóng radio nguyên dạng để thu/phát (analog)"],
  ["音楽・絵画・小説・映画などの「思想または感情を創作的に表現したもの」です", "Tác phẩm biểu hiện sáng tạo tư tưởng/cảm xúc (bản quyền)"],
  ["機器・衣服・日用品などのデザインについての権利です", "Quyền về thiết kế máy móc/quần áo/đồ dùng (ý thiết kế)"],
  ["物品の形状・構造・組み合わせに係る「考案」を保護するための権利です", "Bảo hộ «ý tưởng thiết kế kỹ thuật» về hình dạng/cấu trúc (utility model)"],
  ["製品などの名前・ロゴマークなど「商標」についての権利です", "Quyền về tên/logo sản phẩm (nhãn hiệu)"],
  ["通信の手順であるプロトコルを機能ごとに7つの階層に分けて定義したモデルである", "Mô hình chia giao thức thành 7 tầng theo chức năng (OSI)"],
  ["製造業における全製造過程の電子化の標準化", "Chuẩn hóa điện tử hóa toàn bộ quy trình sản xuất"],
  ["ネットワークを使った電子データ交換の標準化", "Chuẩn hóa trao đổi dữ liệu điện tử qua mạng (EDI)"],
  ["キャッシュ (Cache：Bộ nhớ đệm)", "Cache — bộ nhớ đệm"],
  ["ハードディスク (Ổ đĩa cứng)", "Hard disk — ổ đĩa cứng"],
  ["こもじ - chữ in thường", "こもじ — chữ thường (hiragana reading)"],
  ["だいもじ - chữ thường", "だいもじ — chữ hoa (thường là 大文字)"],
  ["たいいきはば - chiều rộng dải tần", "たいいきはば — bề rộng băng tần"],
  ["たいいきふく - băng thông hẹp", "たいいきふく — băng hẹp"],
  ["はばたいいき - độ trễ", "はばたいいき — (reading; cần đối chiếu 帯域)"],
  ["しゅうはすうたい - băng tần", "しゅうはすうたい — băng tần (周波数帯)"],
  ["電荷（でんか）：Điện tích", "電荷 (denka): điện tích"],
  ["電力（でんりょく）：Điện lực", "電力 (denryoku): công suất điện"],
  ["電極（でんきょく）：Điện cực", "電極 (denkyoku): điện cực"],
  [
    "感染経路は、USBメモリやインターネットを利用したメール、ホームページを経由する",
    "Đường lây nhiễm: USB, email qua Internet, trang web…",
  ],
  [
    "感染経路 là、USBメモリやインターネットを利用したメール、ホームページを経由する",
    "Đường lây nhiễm: USB, email qua Internet, trang web…",
  ],
  [
    "計算するための道具には古くから様々なものがあり，紀元前にもアバカスという，そろばんの起源とされる道具が使われていました。",
    "Từ xưa đã có nhiều công cụ tính; thời cổ có abacus (nguồn gốc bàn tính). (Đoạn mở đầu — nhiễu.)",
  ],
  [
    "デスクトップ上の「コンピュータ」アイコンをダブルクリックすると使用可能な機器の一覧が表示され，名前の横に(C:)(E:) などのアルファベットが付いています。",
    "Double-click biểu tượng Computer → danh sách ổ (C:)(E:)… (Đoạn mở đầu — nhiễu.)",
  ],
  [
    "皆さんは日常的にメールを使っていると思いますが，ビジネスメールには注意すべきマナーがあり，友達同士のように送ると大変失礼になることもあります。",
    "Email hằng ngày khác email công việc — cần phép lịch sự. (Đoạn mở đầu — nhiễu.)",
  ],
  [
    "文書の電子化，CD-R の普及，ホームページ利用の一般化に伴って情報の劣化しないコピーがとても手軽に行えるようになってきました。",
    "Số hóa / CD-R / web làm việc copy không suy hao rất dễ. (Đoạn mở đầu — nhiễu.)",
  ],
  [
    "日本における携帯電話は，1985 年に NTT が発売した肩掛け式のショルダーフォンに始まり，いくつかの技術革新を経て，約 9 割の国民が持つまでに普及してきています。",
    "Điện thoại di động Nhật từ shoulder phone NTT 1985 đến ~90% dân dùng. (Đoạn mở đầu — nhiễu.)",
  ],
  [
    "携帯電話は， NTT ドコモ， au ， ソフトバンクなどの電話会社（ 通信キャリア） と契約して通話が可能になります。",
    "Thuê bao qua nhà mạng (DoCoMo, au, SoftBank…) mới gọi được. (Đoạn mở đầu — nhiễu.)",
  ],
  [
    "出力用ハードウェアとして，携帯電話の画面で使われている液晶の構造は，画像の基本となる 1 点 1 点について，バックライトの光を透過，遮断することで明るさを調整するものです。",
    "Màn LCD: từng điểm pixel chỉnh sáng bằng cho/chặn đèn nền. (Đoạn kỹ thuật màn hình.)",
  ],
  [
    "iPhone の成功を受けてスマートフォンが脚光を浴びるようになり，ガラパゴス携帯と呼ばれる国内での利用に特化した携帯電話から国際標準へと移行が進んでいます。",
    "Sau iPhone, chuyển từ «Galápagos phone» nội địa sang smartphone chuẩn quốc tế. (Đoạn mở đầu — nhiễu.)",
  ],
];

/** True if string mixes JP+VI in one stream (unreadable machine gloss). */
export function isJpViSoup(s) {
  const t = String(s || "");
  if (!hasJp(t) || !hasVi(t)) return false;

  // Short bilingual labels are OK: 管理（かんり）：Quản lý · こもじ - chữ in thường
  if (t.length <= 70 && /[—–：:\-]|（[^）]{1,20}）/.test(t)) return false;

  // Long "JP — clean VI" OK when right side is mostly Vietnamese
  if (/[—–]/.test(t)) {
    const left = t.split(/[—–]/)[0] || "";
    const right = t.split(/[—–]/).slice(1).join("—");
    const rJp = (right.match(/[\u3040-\u30ff\u3400-\u9fff]/g) || []).length;
    // right still JP-heavy → soup; left JP + right VI → OK
    if (rJp > 6) return true;
    if (hasJp(left) && hasVi(right) && rJp <= 6) return false;
    // both sides mixed
    return rJp > 2 && hasJp(right) && hasVi(right);
  }

  // Same stream, long, both scripts, no separator → soup (half-translate)
  if (t.length >= 36) return true;
  return false;
}

function jpCharCount(s) {
  return (String(s || "").match(/[\u3040-\u30ff\u3400-\u9fff]/g) || []).length;
}

/** Avoid matching short keys inside longer JP words (パス ⊂ パスワード). */
function jpSafeIncludes(hay, needle) {
  const i = hay.indexOf(needle);
  if (i < 0) return false;
  if (needle.length >= 4) return true;
  const isJpWord = (ch) => /[\u3040-\u30ff\u3400-\u9fffA-Za-z0-9]/.test(ch || "");
  const before = hay[i - 1];
  const after = hay[i + needle.length];
  if (isJpWord(before) || isJpWord(after)) return false;
  return true;
}

/** Compose VI for short productive patterns (X数, 年, …). */
function composeShortVi(raw) {
  const t = String(raw || "").trim();
  if (!t || t.length > 48) return null;

  // năm: 1946年
  let m = t.match(/^(\d{3,4})年$/);
  if (m) return `năm ${m[1]}`;
  m = t.match(/^(\d{3,4})年代$/);
  if (m) return `thập niên ${m[1]}`;

  // N回 / N層 / N世代 / N個
  m = t.match(/^(\d+)\s*回$/);
  if (m) return `${m[1]} lần`;
  m = t.match(/^(\d+)\s*層$/);
  if (m) return `${m[1]} tầng`;
  m = t.match(/^(\d+)\s*世代$/);
  if (m) return `${m[1]} thế hệ`;
  m = t.match(/^(\d[\d,]*)\s*個$/);
  if (m) return `${m[1]} cái/mục`;

  // X数 → số X
  if (t.endsWith("数") && t.length >= 2) {
    const base = t.slice(0, -1);
    if (JP_VI[base]) return `số ${JP_VI[base]}`;
    if (base === "画素") return "số điểm ảnh (pixel)";
    if (base === "ビット") return "số bit";
    if (base === "プロトコル") return "số lượng giao thức";
  }

  // Xビット
  if (t.endsWith("ビット") && t.length > 3) {
    const base = t.slice(0, -3);
    if (JP_VI[base]) return `bit ${JP_VI[base]}`;
    if (base === "パリティ") return "bit parity (kiểm chẵn lẻ)";
  }

  // X型
  if (t.endsWith("型") && t.length >= 2) {
    const base = t.slice(0, -1);
    if (JP_VI[base]) return `kiểu/dạng ${JP_VI[base]}`;
    if (base === "スター") return "mạng hình sao";
    if (base === "メッシュ") return "mạng lưới (mesh)";
    if (base === "バス") return "mạng bus";
    if (base === "リング") return "mạng vòng";
  }

  // bilingual already: 管理（かんり）：Quản lý
  m = t.match(/^(.+?)（[^）]+）[：:]\s*(.+)$/);
  if (m && hasVi(m[2])) return m[2].trim();
  m = t.match(/^(.+?)\s*[-–—]\s*(.+)$/);
  if (m && hasVi(m[2]) && !hasJp(m[2])) return m[2].trim();

  return null;
}

/**
 * Full-sentence / option translator.
 * Returns clean VI when possible; never returns JP+VI soup.
 * Short terms → "JP — VI". Unknown long JP → original JP (caller may keep as-is).
 */
export function glossJp(text) {
  const raw = String(text || "").trim();
  if (!raw) return raw;
  if (hasVi(raw) && !hasJp(raw)) return raw;

  const compact = compactJp(raw);
  const phrases = [...JP_PHRASES].sort((a, b) => b[0].length - a[0].length);

  // 0) productive short composition
  const composed = composeShortVi(raw);
  if (composed) return composed;

  // 1) exact / whitespace-insensitive full phrase
  for (const [jp, vi] of phrases) {
    if (raw === jp || compact === compactJp(jp)) return vi;
    // near-exact: option slightly longer (trailing 。 extra space)
    if (compact.startsWith(compactJp(jp)) && compact.length <= compactJp(jp).length + 4) return vi;
    if (compactJp(jp).startsWith(compact) && compactJp(jp).length <= compact.length + 4 && compact.length >= 20)
      return vi;
  }

  // 2) contains a long phrase covering ≥70% of option → use that VI
  for (const [jp, vi] of phrases) {
    const cj = compactJp(jp);
    if (cj.length >= 20 && compact.includes(cj) && cj.length / Math.max(compact.length, 1) >= 0.7) {
      return vi;
    }
  }

  // 3) exact lexicon term
  if (JP_VI[raw]) return `${raw} — ${JP_VI[raw]}`;
  for (const [jp, vi] of Object.entries(JP_VI)) {
    if (compact === compactJp(jp)) return `${raw} — ${vi}`;
  }

  // 4) short term with known key
  let best = null;
  let bestLen = 0;
  for (const [jp, vi] of Object.entries(JP_VI)) {
    if (jp.length >= 2 && jpSafeIncludes(raw, jp) && jp.length > bestLen) {
      best = { jp, vi };
      bestLen = jp.length;
    }
  }
  if (best && raw.length <= 40 && (raw === best.jp || raw.length <= best.jp.length + 14)) {
    return `${raw} — ${best.vi}`;
  }

  // 5) Pattern-based full sentences (only when whole option matches a clean pattern)
  const patterned = patternTranslate(raw);
  if (patterned && !isJpViSoup(patterned) && jpCharCount(patterned) <= 4) return patterned;

  // 6) Long unknown JP: KEEP pure JP (do NOT partial-replace → soup).
  // Short unknown: keep JP.
  return raw;
}

/**
 * Structural patterns for common quiz sentence shapes.
 * Only returns clean VI; otherwise null.
 */
function patternTranslate(raw) {
  let t = normJp(raw);

  // Xとは，Yです。 → X là Y.
  let m = t.match(/^(.+?)とは[，,]\s*(.+?)です。?$/);
  if (m && m[1].length <= 30 && m[2].length <= 80) {
    const x = termVi(m[1]);
    const y = phraseOrKeep(m[2]);
    if (x && y && !hasJp(x) && jpCharCount(y) <= 2) return `${x} là ${y}.`;
  }

  // 現在使われているXは，Yです。
  m = t.match(/^現在使われている(.+?)は[，,]\s*(.+?)です。?$/);
  if (m) {
    const x = termVi(m[1]) || m[1];
    const y = termVi(m[2]) || phraseOrKeep(m[2]);
    if (jpCharCount(String(y)) <= 2) return `${termVi("現在") || "Hiện nay"} ${x} đang dùng là ${y}.`.replace(/^Hiện nay /, "Hiện nay ");
    // simpler
    if (JP_VI[m[2]] || /デジタルコンピュータ/.test(m[2]))
      return `Máy tính đang dùng hiện nay là máy tính số (digital).`;
  }

  // Xでは，Yしています。/Yています。
  m = t.match(/^(.+?)では[，,]\s*(.+?)(?:しています|ています|ます)。?$/);
  if (m && m[1].length <= 40) {
    const x = termVi(m[1]);
    if (x && /近似|扱/.test(m[2])) return `Trong ${x}, xử lý xấp xỉ theo đơn vị số.`;
  }

  return null;
}

function termVi(jp) {
  const t = String(jp || "").trim();
  if (!t) return "";
  if (JP_VI[t]) return viClean(JP_VI[t]);
  for (const [k, v] of Object.entries(JP_VI)) {
    if (compactJp(k) === compactJp(t)) return viClean(v);
  }
  // multi-word compound from keys longest
  let s = t;
  const keys = Object.keys(JP_VI).sort((a, b) => b.length - a.length);
  for (const k of keys) {
    if (k.length < 3) continue;
    if (s.includes(k)) s = s.split(k).join(viClean(JP_VI[k]));
  }
  if (jpCharCount(s) <= 2 && hasVi(s)) return s;
  return null;
}

function phraseOrKeep(s) {
  const compact = compactJp(s);
  for (const [jp, vi] of JP_PHRASES) {
    if (compact === compactJp(jp) || compact.includes(compactJp(jp))) return vi;
  }
  const tv = termVi(s);
  return tv || s;
}

function viClean(vi) {
  return String(vi || "")
    .replace(/\s*\([^)]*\)/g, "")
    .replace(/\s*\/\s*[^/]+$/g, "")
    .replace(/\s{2,}/g, " ")
    .trim();
}

/** Latin/EN technical gloss is OK for display (not only Vietnamese diacritics). */
function isDisplayGloss(s) {
  const t = String(s || "").trim();
  if (!t || hasJp(t)) return false;
  if (hasVi(t)) return true;
  // English / digits / common tech tokens
  if (/^[A-Za-z0-9][\w\s./+()%\-–—,:'"]{0,80}$/.test(t)) return true;
  return false;
}

/** Clean VI/EN gloss only (for optionsVi right side). */
export function glossJpClean(text) {
  const raw = String(text || "").trim();
  // Direct lexicon → pure gloss
  if (JP_VI[raw] && isDisplayGloss(JP_VI[raw])) return JP_VI[raw];

  // composition first (pure VI/EN)
  const composed = composeShortVi(raw);
  if (composed && isDisplayGloss(composed)) return composed;

  const g = glossJp(text);
  if (!g) return "";
  if (isJpViSoup(g)) return "";
  // Bilingual "JP — gloss" → take right side
  if (/[—–]/.test(g)) {
    const left = g.split(/[—–]/)[0].trim();
    const right = g.split(/[—–]/).slice(1).join("—").trim();
    if (hasJp(left) && isDisplayGloss(right) && jpCharCount(right) <= 4) return right;
    if (!hasJp(g) && isDisplayGloss(g)) return g;
    if (isDisplayGloss(right) && jpCharCount(right) <= 4) return right;
    return "";
  }
  if (isDisplayGloss(g) && jpCharCount(g) <= 4) return g;
  if (isDisplayGloss(g) && jpCharCount(g) <= 8 && g.length >= 12) return g;
  if (isDisplayGloss(g) && !hasJp(g)) return g;
  return "";
}

export function extractViTermFromQuestion(q) {
  const t = String(q || "");
  let m = t.match(/日本語に直しなさい。\s*(.+)$/);
  if (m) return m[1].trim();
  m = t.match(/ベトナム語に直しなさい。\s*(.+)$/);
  if (m) return m[1].trim();
  m = t.match(/【専門用語】(.+?)\s*の意味として/);
  if (m) return m[1].trim();
  return "";
}
