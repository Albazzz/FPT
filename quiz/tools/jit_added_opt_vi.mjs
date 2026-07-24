/**
 * Full-sentence / term VI glosses for JIT401 added-only batch.
 * Keys = exact JP (or mixed) option text from remote jit401.json.
 */
export const LONG_OPT_VI = {
  // —— short / common ——
  レジスタ: "thanh ghi (register)",
  "主記憶（RAM）": "bộ nhớ chính (RAM)",
  SSD: "SSD (ổ thể rắn)",
  HDD: "HDD (ổ cứng từ)",
  "アメリカ（米国）": "Mỹ (Hoa Kỳ)",
  日本: "Nhật Bản",
  イギリス: "Anh",
  ベトナム: "Việt Nam",
  双方向性・利用者の参加: "tính hai chiều · người dùng tham gia",
  一方向の静的配信のみ: "chỉ phát tĩnh một chiều",
  電話回線専用: "chỉ dành cho đường điện thoại",
  紙媒体必須: "bắt buộc dùng giấy",
  情報週末: "「cuối tuần thông tin」 (OCR lỗi — không phải thuật ngữ chuẩn)",
  情報端末: "thiết bị đầu cuối (terminal)",
  情報流出: "rò rỉ thông tin",
  情報隠蔽: "che giấu thông tin",
  基本: "cơ bản",
  最大: "lớn nhất",
  最小: "nhỏ nhất",
  中間: "trung gian",
  "装飾（レイアウト）・画像": "trang trí/layout và hình ảnh",
  コンパイル: "biên dịch (compile)",
  機械語変換: "chuyển sang ngôn ngữ máy",
  電力制御: "điều khiển điện",
  ユーザインタフェース管理: "quản lý giao diện người dùng (UI)",
  メモリ管理のみ: "chỉ quản lý bộ nhớ",
  ジョブスケジューリングのみ: "chỉ lập lịch job",
  デバイスドライバ言語: "«ngôn ngữ driver» (không phải chức năng UI)",
  "ノイマン型（プログラム内蔵方式）": "kiến trúc von Neumann (chương trình lưu trong bộ nhớ)",
  量子もつれ専用: "chỉ dùng vướng víu lượng tử",
  アナログ連続信号のみ: "chỉ tín hiệu analog liên tục",
  人手計算のみ: "chỉ tính bằng tay",
  標本化: "lấy mẫu (sampling)",
  量子化: "lượng tử hóa (quantization)",
  符号化: "mã hóa (coding)",
  ビットレート: "bitrate",
  サンプリング周波数: "tần số lấy mẫu",
  量子化数: "số mức lượng tử hóa",
  解像度: "độ phân giải",
  差分記録: "ghi phần khác biệt (delta)",
  フーリエ変換: "biến đổi Fourier",
  マルチタスク: "đa nhiệm",
  木構造: "cấu trúc cây",
  リング型: "mạng hình vòng (ring)",
  バス型: "mạng hình bus",
  スター型: "mạng hình sao (star)",
  仮想記憶: "bộ nhớ ảo",
  ユーザインタフェース: "giao diện người dùng (UI)",
  デバイスドライバ: "trình điều khiển thiết bị (driver)",
  ファイルシステム: "hệ thống tệp",
  操作性を決めます: "quyết định cách thao tác / dễ dùng",
  ハードウェアの相違を吸収します: "che/hấp thụ khác biệt phần cứng",
  ホームページを見る: "xem trang web",
  ファイルを取ってくる: "tải / lấy file về",
  上流から下流の方向: "hướng từ thượng nguồn xuống hạ nguồn",
  下流から上流の方向: "hướng từ hạ nguồn lên thượng nguồn",
  ピクセル: "pixel",
  ビット: "bit",
  コード: "mã / code",
  データ: "dữ liệu",
  文字列: "chuỗi ký tự",
  情報: "thông tin",
  改行: "xuống dòng",
  文字: "ký tự",
  制御: "điều khiển",
  基数: "cơ số",
  真数: "số thực / significand (tuỳ ngữ cảnh)",
  進数: "hệ đếm",
  奇数: "số lẻ",
  "CPUの機能": "chức năng của CPU",
  テキストのみ: "chỉ văn bản",
  コンピューターのアドレス: "địa chỉ máy tính",
  出口となるサイト: "site đóng vai trò «cửa ra»",
  入り口となるサイト: "site đóng vai trò «cửa vào»",

  // —— arithmetic / programming ——
  "括弧（）は演算の優先順位を明示的に変更することができ、括弧内の計算は最も優先して実行される。":
    "Ngoặc () đổi thứ tự ưu tiên tường minh; phép trong ngoặc được tính trước nhất.",
  "整数同士の除算（例: 7 / 2）を実行した場合、ほとんどのプログラミング言語では、自動的に小数部が丸められた整数（この場合、3）が結果として得られる。":
    "Chia hai số nguyên (vd. 7/2): không phải mọi ngôn ngữ đều tự ra số nguyên 3 (phụ thuộc kiểu và quy tắc).",
  "剰余演算（%）は四則演算には含まれないため、加算（+）や乗算（*）と同じ優先順位では扱われない。":
    "Nói % không thuộc bốn phép và khác bậc +/* — không đúng với đa số ngôn ngữ (thường cùng bậc ×÷).",
  "プログラミングでは、数学と同じで乗算（*）と除算（/）より加算（+）と減算（-）の優先順位が高いため、常に計算順序を意識する必要はない。":
    "Nói +− ưu tiên hơn ×÷ nên không cần chú ý thứ tự — sai hoàn toàn.",

  // —— IP / DNS / network ——
  "サーバに対するセキュリティを保つ構成":
    "Cấu hình nhằm giữ an ninh cho server",
  "コンピュータが従うべきデータ転送規約のこと":
    "Quy ước truyền dữ liệu mà máy tính phải tuân theo (protocol)",
  "ネットワーク層のIPプロトコルに従って番号が割り当てられています":
    "Số được gán theo giao thức IP ở tầng mạng (Network)",
  "ホームページアドレスやメールアドレスとして使われます":
    "Dùng như địa chỉ trang web hay email",
  "IPv6の導入により、IPアドレスは従来の2進数32桁から128桁に増え、アドレス不足の問題が解消される。":
    "IPv6 tăng địa chỉ IP từ 32 bit lên 128 bit, giảm thiếu hụt địa chỉ.",
  "IPアドレスは「daigaku.ac.jp」のようなアルファベットの組み合わせで表現され、DNSサーバによって管理されている。":
    "Nói IP là chuỗi chữ như daigaku.ac.jp do DNS quản — nhầm với tên miền.",
  "IPアドレスはトランスポート層のプロトコルに従って割り当てられる、コンピュータの住所にあたる名前である。":
    "Nói IP gán theo tầng Transport và là «tên» — sai tầng (IP ở Network) và bản chất (là số, không phải tên miền).",
  "バス型は、通信ケーブルが環状（ループ）になっており、データの衝突が全く発生しない。":
    "Nói bus là vòng và không đụng độ — sai (đó gần ring; bus dùng đường chung, có thể collision).",
  "バス型は、ハブを中心にコンピュータを接続する方式であり、現在最もよく使われている。":
    "Nói bus lấy hub làm trung tâm — nhầm với star.",
  "リング型は、データが隣接するコンピュータへ順次転送され、一部のコンピュータが故障すると通信に支障が出る可能性がある。":
    "Ring: dữ liệu chuyển tuần tự máy kề; một máy hỏng có thể ảnh hưởng đường vòng.",
  "スター型では、ハブをカスケード状に接続してコンピュータ台数を増やすことができない。":
    "Nói star không cascade hub để tăng số máy — không đúng thực tế (thường mở rộng được).",
  "ドメイン名は数字の羅列であるIPアドレスよりも覚えやすく、入力間違いが少ないため、一般的に利用されている。":
    "Tên miền dễ nhớ hơn dãy số IP, ít gõ nhầm hơn nên được dùng phổ biến.",
  "「.com」は日本の企業を表すドメイン名であり、DNSサーバはこのドメイン名をIPアドレスに変換する。":
    "Nói .com là domain doanh nghiệp Nhật — sai (.com là gTLD, không phải ccTLD Nhật).",
  "DNSサーバは、メールの送受信やホームページのアクセス先を正しく指定するために、ドメイン名をIPアドレスに変換する役割を担う。":
    "DNS đổi tên miền → IP để gửi mail / mở web đúng máy đích.",
  "ドメイン名紛争は解決したため、現在ではSEOやSEMよりもドメイン名そのものが重視されている。":
    "Nói tranh chấp domain đã xong nên domain quan trọng hơn SEO/SEM — khẳng định lệch thực tế.",
  "サブネットマスクは、LAN内部でIPアドレスの数を減らすために使用される。":
    "Nói subnet mask để «giảm số IP trong LAN» — mô tả không chuẩn (dùng để tách network/host).",

  // —— ADSL / FTTH / mobile ——
  "音声通話をデジタルデータとして送受信するIP電話を利用する場合は、下り速度よりも上り速度の高速性が決定的に重要である。":
    "Khi dùng IP phone, tốc độ lên quan trọng — không phải đặc trưng cốt lõi ADSL.",
  "上り（アップロード）方向の通信速度が下り（ダウンロード）方向よりも高速に設定されている。":
    "Upload nhanh hơn download — ngược ADSL (thường down > up).",
  "専用線を利用するため、一般の電話線を使用する場合と比べてノイズの影響を受けにくい。":
    "Dùng đường riêng nên ít nhiễu hơn phone line — không đúng ADSL.",
  "電話局から家庭までの距離が長くなるほど、ノイズの影響を受けて通信速度が低下しやすくなる。":
    "Càng xa tổng đài càng dễ chậm do nhiễu — đúng ADSL trên cáp đồng.",
  "光ファイバーを利用して家庭まで高速な通信回線を引くことで、ラストワンマイル問題の解決を目指す技術である。":
    "Cáp quang kéo tới nhà để hướng tới giải last-mile (FTTH).",
  "基幹回線の高速化を実現する技術であり、電話局から先の通信速度には直接関与しない。":
    "Chỉ tăng tốc backbone, không đụng đoạn sau tổng đài — không phải FTTH.",
  "企業や学校など業務用の高速ネットワークを構築することを主な目的とした技術である。":
    "Chủ yếu cho mạng doanh nghiệp/trường — không đúng mục tiêu «to the home».",
  "アナログ電話線を利用するADSLと同様に、ノイズの影響を受けやすいという課題を抱えている。":
    "Cùng nhược điểm nhiễu như ADSL — sai với FTTH (quang ít nhiễu).",
  "専用の光ファイバなのでノイズの影響を受けやすい":
    "Cáp quang chuyên dụng nên dễ chịu ảnh hưởng nhiễu",
  "専用の光ファイバなのでノイズの影響を受けにくい":
    "Cáp quang chuyên dụng nên ít chịu ảnh hưởng nhiễu",
  "安定に高速な通信が実現できません":
    "Không thể truyền ổn định tốc độ cao.",
  "専用線を利用しない":
    "Không dùng đường truyền riêng.",
  "携帯電話でさまざまなアプリケーションをストレスなく利用することができます":
    "Dùng nhiều app mượt trên điện thoại (thiên về đời sau 2G).",
  "管理し，ユーザ端末は入出力のみを行う":
    "Quản lý tập trung; terminal chỉ vào/ra.",
  "音質が向上し，秘話性能も考慮されるようになりました":
    "Chất lượng âm tốt hơn và có xét bảo mật thoại.",
  "データ通信が高速になりました":
    "Truyền dữ liệu nhanh hơn.",

  // —— security / firewall / distributed ——
  "不特定多数のユーザーに公開するウェブサーバは、外部からのアクセスを容易にするため、ファイアウォールの内部ネットワークに設置する必要がある。":
    "Web server public đặt sâu trong mạng trong firewall để «dễ truy cập ngoài» — sai bố trí (thường DMZ).",
  "ファイアウォールは、内部ネットワークとインターネットの間に設置されるが、適切に設定しなくてもある程度の安全性を自動的に確保できる。":
    "Firewall «không cần cấu hình đúng vẫn an toàn» — sai.",
  "Windowsに標準で搭載されているファイアウォール機能は、LAN内部からの攻撃も含めて完全に防御することができる。":
    "Firewall Windows chặn «hoàn toàn cả tấn công trong LAN» — phóng đại/sai.",
  "DMZに設置されたサーバには、組織にとって重要な情報を置かないように注意すべきである。":
    "Server trên DMZ không nên chứa thông tin cực kỳ quan trọng của tổ chức.",
  "分散処理システムでは、1台のコンピュータが故障しても他のサービスは実行できるため、システム全体の信頼性が向上する。":
    "Xử lý phân tán: một máy hỏng, dịch vụ khác vẫn chạy → tăng độ tin cậy tổng.",
  "ピアツーピア(P2P)接続は、サービスを提供するサーバとサービスを受けるクライアントを明確に分けた構成である。":
    "P2P «tách rõ server/client» — sai (P2P ngang hàng; client–server mới tách vai trò).",
  "クライアントサーバシステムでは、1台のコンピュータが複数種類のサーバ機能を兼ねる場合もある。":
    "Client–server: một máy có thể kiêm nhiều vai trò server.",
  "集中処理システムでは、プログラムやデータを一か所で管理するため、保守性が向上する。":
    "Xử lý tập trung: quản lý một chỗ → dễ bảo trì hơn.",

  // —— display / media ——
  "SED（Surface-conduction Electron-emitter Display）と同様に、暗部の表現に課題が残されている。":
    "Giống SED, còn hạn chế thể hiện vùng tối.",
  "液晶ディスプレイと同様に、バックライトの光を透過・遮断することで表示を行うため、バックライトが必須である。":
    "Giống LCD, cần đèn nền (truyền/chặn sáng).",
  "液晶ディスプレイと比べて寿命が長く、現在ではこの点において液晶を完全に代替する技術となっている。":
    "Tuổi thọ hơn LCD và đã thay thế hoàn toàn LCD — khẳng định quá mức/sai thời điểm.",
  "有機物の発光体を用いて自ら光るため、液晶よりも消費電力が少なく、より明るい表示が可能である。":
    "OLED tự phát sáng, thường tiết kiệm/độ tương phản tốt hơn LCD.",
  "音の振幅をより細かく記録できる。":
    "Ghi biên độ âm chi tiết hơn.",
  "記録したデータの加工に必要なCPUの負担は減る。":
    "Giảm gánh CPU khi xử lý dữ liệu đã ghi.",
  "記録できる周波数の上限が上がる。":
    "Tăng tần số ghi được (tần số tối đa).",
  "記録できる周波数の上限が高くなる。":
    "Tần số ghi tối đa cao hơn.",
  "記録時間が同じ場合,データ量は少なくなる。":
    "Cùng thời lượng ghi thì dung lượng nhỏ hơn.",
  "記録時間が同じ場合、データ量は少なくなる。":
    "Cùng thời lượng ghi thì dung lượng nhỏ hơn.",
  "記録時間が同じ場合データ量は小さくなる。":
    "Cùng thời lượng thì dung lượng nhỏ hơn.",
  "ぎざぎざが大きくなります":
    "Răng cưa (aliasing) lớn hơn.",
  "画面の解像度を上げる技術":
    "Kỹ thuật tăng độ phân giải màn hình.",

  // —— OS / file / disk ——
  "マウスやキーボードの操作の仕方、ウィンドウの見え方、ファイルの扱い方などを決定します":
    "Quyết định cách dùng chuột/phím, cửa sổ, file… (UI).",
  "マウスやキーボードの操作の仕方、ウィンドウの大きさや色の扱い方などを決定します":
    "Quyết định cách dùng chuột/phím, kích thước/màu cửa sổ… (UI).",
  "ハードディスクや光ディスクドライブ、USBメモリ等を指す・メインメモリと違って,CPUが直接アクセスすることはない。":
    "HDD/quang/USB… — khác main memory, CPU không truy cập trực tiếp như RAM.",
  "同一トラック上にデータが配置されている場合、アームを動かさずに読み書きを行うことができる。":
    "Cùng track: có thể R/W không cần dịch arm.",
  "ヘッドとディスク面は密に接触しており、これによってデータの読み書きの信頼性を高めている。":
    "Đầu từ «áp sát mặt đĩa» để tin cậy hơn — mô tả không đúng HDD hiện đại (bay lơ lửng).",
  "プログラムやデータの破壊に備え、予備の記憶装置にデータを複製しておくこと。":
    "Sao lưu: nhân bản dữ liệu ra thiết bị dự phòng khi hỏng/hỏng.",
  "ファイルの入れ物で、広義にはメモリのように一時的にデータを保持するもの。":
    "«Hộp» chứa file; nghĩa rộng còn là chỗ giữ tạm (giống memory).",
  "コンピュータのファイルの属性・内容を表すための文字列。ファイル名のピリオドで区切られた右側の部分。":
    "Chuỗi mô tả thuộc tính/nội dung file — phần bên phải dấu chấm của tên file (extension).",
  "ブート時にOSをメモリに移動させる役割を担う":
    "Lúc boot, đưa OS vào bộ nhớ.",
  "キーボードやマウスなどの入力装置":
    "Thiết bị vào như bàn phím, chuột.",
  "演算装置と制御装置の機能が組み込まれている":
    "Gộp chức năng ALU + control unit.",
  "入力装置と出力装置の機能が組み込まれている":
    "Gộp chức năng thiết bị vào + ra.",
  "演算・制御を行う中心処理装置":
    "Bộ xử lý trung tâm làm tính toán/điều khiển (CPU).",
  "メモリーとハードディスクのデータの交換":
    "Trao đổi dữ liệu giữa memory và HDD.",
  "仮想記憶とメモリーのデータの交換":
    "Trao đổi giữa bộ nhớ ảo và memory.",
  "ハードディスクと仮想記憶の交換":
    "Trao đổi giữa HDD và bộ nhớ ảo.",
  "ハードディスクの中だけの交換":
    "Chỉ trao đổi bên trong HDD.",
  "ハードディスクへの書き込み…向上に役立つ。":
    "Hữu ích để cải thiện ghi lên HDD.",
  "ソフトウェアの処理を管理します":
    "Quản lý xử lý phần mềm.",
  "ソフトウェアの作成を管理します":
    "Quản lý việc tạo phần mềm.",
  "必ずファイルを削除する技術":
    "Kỹ thuật «luôn xóa file» (không đúng backup/recycle thông thường).",

  // —— language / software classification ——
  "コンピュータの機種やOSに依存しないソフトウェアが開発できる。オブジェクト指向言語である。":
    "Viết phần mềm không phụ thuộc máy/OS; là ngôn ngữ hướng đối tượng.",
  "SQLなど目的の特化された定型的処理をする少数の言語が属します":
    "Nhóm ít ngôn ngữ chuyên xử lý định hình (vd. SQL).",
  "手続きや関数の呼び出しによって処理の流れを制御する言語":
    "Ngôn ngữ điều khiển luồng bằng gọi thủ tục/hàm.",
  "問題解決のための処理過程を記述するプログラミング言語":
    "Ngôn ngữ mô tả quá trình xử lý để giải quyết bài toán.",
  "アプリケーションソフトとOSの中間的な位置付けである":
    "Nằm giữa ứng dụng và OS (middleware).",
  "何をしたいか(What)を記述することで解を得る言語":
    "Ngôn ngữ khai báo What để ra lời giải.",
  "変数の値の変更を頻繁に行うことで状態を管理する言語":
    "Ngôn ngữ quản state bằng đổi biến thường xuyên.",
  "アプリケーションソフトとハードウェアを直接仲介する":
    "Trung gian trực tiếp giữa app và phần cứng.",
  "Webページを記述するためのマークアップ言語である":
    "Ngôn ngữ đánh dấu để viết trang web.",
  "何をどうするか(How)を詳細に記述する言語":
    "Ngôn ngữ mô tả chi tiết How làm việc.",
  "科学技術向けに開発された言語である。":
    "Ngôn ngữ phát triển cho khoa học–kỹ thuật.",
  "事務処理向けに開発された言語である。":
    "Ngôn ngữ phát triển cho xử lý nghiệp vụ văn phòng.",
  "主流なのがオブジェクト指向言語":
    "Dòng chính là ngôn ngữ hướng đối tượng.",
  "Mac用のソフトウェアをWindowsで動作させるために使われる":
    "Dùng để chạy phần mềm Mac trên Windows.",

  // —— business / EDI / rights ——
  "取引プロセスとは、受注、発注、決済以外にも商品案内や配送などの処理、さらには商品開発まで含めます。":
    "Quy trình giao dịch: ngoài nhận/đặt hàng, thanh toán còn giới thiệu SP, giao hàng, thậm chí R&D.",
  "製造業における全製造過程(開発、製造、納入、保守)の電子化についての標準化のことを言います。":
    "Chuẩn hóa số hóa toàn bộ quy trình SX (R&D–SX–giao–bảo trì).",
  "ネットワークを使った電子データ交換の標準化のことで、受発注、決済、配送などに用いられます":
    "Chuẩn EDI trên mạng: đặt hàng, thanh toán, giao hàng…",
  "オンラインの受発注システムのことを言います":
    "Hệ thống đặt/nhận hàng trực tuyến.",
  "店舗の販売時点情報管理（Point of Saleに関連）":
    "Quản lý thông tin điểm bán (POS).",
  "第三者に内容を読み取られにくくする技術":
    "Kỹ thuật làm bên thứ ba khó đọc nội dung (mã hóa/che).",
  "著作物の制作に携わった人を保護する権利":
    "Quyền bảo vệ người tham gia tạo tác phẩm (liên quan neighboring rights…).",
  "著作者の人格を保護する権利":
    "Quyền nhân thân tác giả.",
  "製品のデザインに関する権利":
    "Quyền về thiết kế sản phẩm (ý tưởng/industrial design).",
  "著作隣接権、商標権、実用新案権":
    "Quyền liền kề + nhãn hiệu + utility model.",
  "意匠権、著作者財産権、特許権":
    "Quyền kiểu dáng + tài sản tác giả + patent.",
  "意匠権、特許権、実用新案権":
    "Kiểu dáng + patent + utility model.",
  "著作隣接権、意匠権、商標権":
    "Quyền liền kề + kiểu dáng + nhãn hiệu.",

  // —— DB / relational / SQL samples ——
  "複数の関係を表す表を元にデータを記述します":
    "Mô tả dữ liệu từ các bảng biểu diễn nhiều quan hệ.",
  "個別の関係を表す表を元にデータを記述します":
    "Mô tả dữ liệu từ bảng từng quan hệ riêng.",
  "表をたどって必要な情報を処理します":
    "Duyệt bảng để xử lý thông tin cần.",
  "図をたどって必要な情報を集めます":
    "Duyệt sơ đồ để gom thông tin cần.",
  "bannhac テーブルから、Aid が1であるすべての行の Mid と TenBN を抽出する。":
    "Từ bảng bannhac lấy Mid và TenBN của mọi dòng có Aid = 1.",
  "bannhac テーブルから、Aid が1である行の Aid と TenBN を抽出する。":
    "Từ bannhac lấy Aid và TenBN các dòng Aid = 1.",
  "bannhac テーブルから、Aid が1である行の Mid と Aid を抽出する。":
    "Từ bannhac lấy Mid và Aid các dòng Aid = 1.",
  "bannhac テーブルにある、すべての Mid と TenBN を抽出する。":
    "Lấy mọi Mid và TenBN trong bảng bannhac.",
  "「商品コード」「商品名」[単価]「商品カテゴリコード」「仕入先コード」":
    "Mã SP · tên SP · đơn giá · mã danh mục · mã NCC",
  "「商品コード」「商品名」[単価]「商品カテゴリコード」":
    "Mã SP · tên SP · đơn giá · mã danh mục",
  "「商品コード」「商品名」[単価]「仕入先コード」":
    "Mã SP · tên SP · đơn giá · mã NCC",
  "「商品コード」「商品名」[単価]":
    "Mã SP · tên SP · đơn giá",

  // —— logic / search ——
  "スイッチが直列に並んだ回路としてモデル化されます":
    "Mô hình mạch công tắc nối tiếp.",
  "スイッチが並列に並んだ回路としてモデル化されます":
    "Mô hình mạch công tắc song song.",
  "AND回路は1つのダイオードを使って実現できます":
    "Mạch AND «làm bằng 1 diode» — đơn giản hóa/sai trong nhiều giáo trình chuẩn.",
  "AND回路の演算のことを論理和と言います":
    "Nói phép AND là OR (論理和) — sai tên.",
  "(\"札幌\"AND\"函館\")AND\"日本料理\"": "(\"Sapporo\" AND \"Hakodate\") AND \"món Nhật\"",
  "(\"札幌\"AND\"函館\")OR\"日本料理\"": "(\"Sapporo\" AND \"Hakodate\") OR \"món Nhật\"",
  "(\"札幌\"OR\"函館\")AND\"日本料理\"": "(\"Sapporo\" OR \"Hakodate\") AND \"món Nhật\"",
  "(\"札幌\"OR\"函館\")OR\"日本料理\"": "(\"Sapporo\" OR \"Hakodate\") OR \"món Nhật\"",

  // —— size / units ——
  "1kバイト < 1Tバイト < 1Mバイト < 1Gバイト": "1KB < 1TB < 1MB < 1GB (sai thứ tự)",
  "1kバイト < 1Mバイト < 1Gバイト < 1Tバイト": "1KB < 1MB < 1GB < 1TB (đúng thứ tự tăng)",
  "1kバイト < 1Mバイト < 1Tバイト < 1Gバイト": "1KB < 1MB < 1TB < 1GB (sai)",
  "1Tバイト < 1kバイト < 1Mバイト < 1Gバイト": "1TB < 1KB < 1MB < 1GB (sai)",
  "約 22.0 メガピクセル": "khoảng 22.0 megapixel",
  "約 30.5 メガピクセル": "khoảng 30.5 megapixel",
  "約 14.3 メガピクセル": "khoảng 14.3 megapixel",
  "約 8.7 メガピクセル": "khoảng 8.7 megapixel",
  "約 2,071 時間": "khoảng 2 071 giờ",
  "約 828 時間": "khoảng 828 giờ",
  "約 1,548 時間": "khoảng 1 548 giờ",
  "約 1,036 時間": "khoảng 1 036 giờ",

  // —— misc codes / eras ——
  "19〜20世紀初頭の計算機の一形態": "Một dạng máy tính đầu thế kỷ 19–20.",
  "①サンプリング周波数；②波長": "① tần số lấy mẫu; ② bước sóng",
  "画像のための特殊なコードです": "Mã đặc biệt cho ảnh.",
  "画像のための簡単なコードです": "Mã đơn giản cho ảnh.",
  "音楽のための簡単なコードです": "Mã đơn giản cho nhạc.",
  "音楽のための特殊なコードです": "Mã đặc biệt cho nhạc.",
  "階乗 - かいじょう": "giai thừa — kaijō",
  "階刺 - がいしょう": "cặp kanji/âm sai (nhiễu)",
  "楷刺 - がいじょう": "cặp kanji/âm sai (nhiễu)",
  "楷乗 - かいしょう": "cặp kanji/âm sai (nhiễu)",

  // —— communication control readings ——
  "つうしんせきょ-hạn chế thông tin từ xa": "tsūshin sekyo — hạn chế thông tin từ xa (cặp đọc)",
  "つうしんせいぎょ-điều khiển thông tin": "tsūshin seigyo — điều khiển thông tin",
  "つうしんせいぎょう-hạn chế thông tin": "tsūshin seigyō — hạn chế thông tin",
  "つうしんせいきょ-điều khiển từ xa": "tsūshin seikyo — điều khiển từ xa",
  "たいにゅう - thay thế": "tainyū — thay thế",
  "たいにゅ - thay thế": "tainyu — thay thế",
};
