/**
 * JP (IT/JIT401) → VI gloss dictionary + helpers.
 * Used by rebuild_jit_all.mjs
 */

export function hasVi(s) {
  return /[àáạảãâăèéêìíòóôơùúưỳýđÀÁẠẢÃÂĂÈÉÊÌÍÒÓÔƠÙÚƯỲÝĐ]/i.test(s || "");
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
  パケット交換: "chuyển mạch gói",
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

/** Extra multi-word / phrase glosses (substring, longest first) */
export const JP_PHRASES = [
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
  ["正確で切れ目のある", "Chính xác và rời rạc"],
  ["演算・記憶・制御・入力・出力装置", "Đơn vị tính · nhớ · điều khiển · vào · ra"],
  ["演算・記憶・制御・入力・通信装置", "Tính · nhớ · điều khiển · vào · truyền thông"],
  ["演算・記憶・制御・表示・出力装置", "Tính · nhớ · điều khiển · hiển thị · ra"],
  ["演算・処理・制御・入力・出力装置", "Tính · xử lý · điều khiển · vào · ra"],
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
  ["インターネット専用のシステム", "Hệ thống chỉ dành cho Internet"],
  ["残された個人情報を", "thông tin cá nhân còn sót"],
  ["差分記録", "ghi sai phân (chỉ lưu phần khác frame trước)"],
  // —— digital / security (JIT slides) ——
  ["現在使われているコンピュータは，デジタルコンピュータです", "Máy tính đang dùng hiện nay là máy tính số (digital)"],
  ["たとえば，時間は連続的に流れていますが，デジタル時計では1秒単位の数字として扱っています", "Ví dụ thời gian chảy liên tục nhưng đồng hồ số xử lý theo đơn vị 1 giây"],
  ["通常，サーバとなっているコンピュータには，重要な情報が記録されています", "Thông thường máy chủ (server) lưu thông tin quan trọng"],
  ["通常， サーバとなっているコンピュータには， 重要な情報が記録されています", "Thông thường máy chủ (server) lưu thông tin quan trọng"],
  ["デジタルコンピュータでは，一定単位の数字に近似して扱っています", "Máy tính số xấp xỉ/xử lý theo đơn vị số rời rạc"],
  ["ネットワークセキュリティ", "an ninh mạng (network security)"],
  ["重要な情報が記録されています", "thông tin quan trọng được ghi/lưu"],
  ["1秒単位の数字として扱っています", "xử lý dưới dạng số theo đơn vị 1 giây"],
];

/** VI gloss without EN parenthetical — for mid-sentence replace (readable). */
function viInline(vi) {
  return String(vi || "")
    .replace(/\s*\([^)]*\)/g, "")
    .replace(/\s*\/\s*network model/gi, "")
    .replace(/\s{2,}/g, " ")
    .trim();
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

export function glossJp(text) {
  const raw = String(text || "").trim();
  if (!raw) return raw;
  if (hasVi(raw) && !hasJp(raw)) return raw;

  // exact term → bilingual label (short options)
  if (JP_VI[raw]) return `${raw} — ${JP_VI[raw]}`;

  // phrases longest first — exact or near-exact (prefer full VI, no JP echo soup)
  const phrases = [...JP_PHRASES].sort((a, b) => b[0].length - a[0].length);
  for (const [jp, vi] of phrases) {
    if (raw === jp || raw.replace(/\s+/g, "") === jp.replace(/\s+/g, "")) return vi;
    if (raw.includes(jp) && jp.length >= 6 && raw.length <= jp.length + 12) return vi;
  }

  // key exact-ish contains — prefer longest key with safe boundary
  let best = null;
  let bestLen = 0;
  for (const [jp, vi] of Object.entries(JP_VI)) {
    if (jp.length >= 2 && jpSafeIncludes(raw, jp) && jp.length > bestLen) {
      best = { jp, vi };
      bestLen = jp.length;
    }
  }
  // Short option: bilingual gloss of whole term
  if (best && raw.length <= 36 && (raw === best.jp || raw.length <= best.jp.length + 12)) {
    return `${raw} — ${best.vi}`;
  }

  // Long sentence: phrase then keys with *inline* VI (no "máy tính (computer)" spam)
  let t = raw;
  for (const [jp, vi] of phrases) {
    if (t.includes(jp)) t = t.split(jp).join(viInline(vi));
  }
  const keys = Object.keys(JP_VI).sort((a, b) => b.length - a.length);
  for (const jp of keys) {
    if (jp.length < 3) continue;
    if (jpSafeIncludes(t, jp)) t = t.split(jp).join(viInline(JP_VI[jp]));
  }
  // Clean leftover JP punctuation / doubled spaces
  t = t
    .replace(/[，、]/g, ", ")
    .replace(/。/g, ".")
    .replace(/\s{2,}/g, " ")
    .trim();
  if (hasVi(t) && t !== raw) {
    const jpLeft = (t.match(/[\u3040-\u30ff\u3400-\u9fff]/g) || []).length;
    // Prefer clean VI for long stems; avoid "JP → half-gloss" soup
    if (jpLeft <= 6 || raw.length >= 28) return t;
    return `${raw} → ${t}`;
  }
  // keep JP if pure short
  if (hasJp(raw) && raw.length <= 60) return raw;
  return raw;
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
