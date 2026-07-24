# Phần 5/5 — JIT401 (quiz · sample · pt · slides · fuexam)

- **File key:** `part5_jit`
- **Số câu lỗi:** **400**
- **Hint:** JP + gloss VI. concept = nghĩa thuật ngữ; whyWrong = sai miền/map từ, không «khớp đáp án X».
- **Sửa khuyến nghị:** `part5_jit.jsonl` (1 dòng = 1 câu) hoặc `part5_jit.json` → mảng `items`
- **Áp vào bank:** `node quiz/tools/apply_fix_part.mjs part5_jit`

## Checklist mỗi câu

1. `concept` = định nghĩa/cơ chế **thật** (cấm shell «khái niệm/cơ chế trong miền đề»)
2. `whyCorrect` nối stem ↔ đáp án (không echo tên đáp án)
3. `whyWrong` từng option: Là gì? / Dùng|Vai trò? / Vì sao sai? — **riêng domain**
4. `memoryTip` 1–2 câu (khuyến nghị)
5. Đặt `_meta.status` = `"done"` khi xong

## Mục lục nhanh

| # | subject | id | task | num | ans | flags | đề (rút) |
|---|---------|----|------|-----|-----|-------|----------|
| 1 | jit | 293 | fuexam | 6 | A | khop_dap_an | データベースの表現法には「データを親、子、孫のような階層構造に並べ、最上位の親からたどることによって検索する表現法です。」とかいてあるものはどんな表現ですか。 |
| 2 | jit | 294 | fuexam | 13 | A | domain_shell+vai_tro_stub | 【専門用語】次のベトナム語の用語をベトナム語に直しなさい。 分散処理システム |
| 3 | jit | 295 | fuexam | 41 | A | khop_dap_an | ロングテールの考え方を活用したインターネットにおけるビジネスの説明として、適切なものはどれか |
| 4 | jit | 296 | fuexam | 42 | A | khop_dap_an | 日本語でのコードについて正しくないものをえらんでください。 |
| 5 | jit | 297 | fuexam | 43 | A | khop_dap_an | コンピューターが逢(あ)える事故は何ですか。 |
| 6 | jit | 299 | fuexam | 45 | A | khop_dap_an | OSの機能は何ですか。 |
| 7 | jit | 301 | fuexam | 47 | A | khop_dap_an | 「取引プロセスとは、( ) 以外にも商品案内や配送などの処理、さらには商品開発まで含めます。」 |
| 8 | jit | 302 | fuexam | 48 | A | khop_dap_an | メール利用の注意について正しくないものはどれですか。 |
| 9 | jit | 303 | fuexam | 49 | A | khop_dap_an | 映画では1秒に何回の書き換えを行っていますか。 |
| 10 | jit | 304 | fuexam | 50 | A | khop_dap_an | 「射影の結果を並べ替えるには ( ) という単語を使います。」 |
| 11 | jit | 306 | fuexam | 52 | A | khop_dap_an | 「小さいものから順に または逆に大きいものから順にデータを並べ替えること」は何を指しますか。 |
| 12 | jit | 307 | fuexam | 53 | A | khop_dap_an | クッキー(cookie)に関する記述a~cのうち、適切なものだけをすべて挙げたものはどれか。 |
| 13 | jit | 309 | fuexam | 55 | A | khop_dap_an | フォルダとは何ですか |
| 14 | jit | 310 | fuexam | 56 | A | khop_dap_an | 「電子機器には、コンピュータ、携帯電話、( ) を始めとして、ポータブルオーディオやゲーム機などの家電製品など多くのものがあり、ネットワークは成長し続けています |
| 15 | jit | 312 | fuexam | 58 | A | khop_dap_an | 出力用ハードウェアは何ですか。 |
| 16 | jit | 313 | fuexam | 59 | A | khop_dap_an | 新たなプログラムを作成するときに、効率的な内部処理とともに考慮しなければならない重要な要素は何ですか。 |
| 17 | jit | 314 | fuexam | 60 | A | khop_dap_an | 動画像情報圧縮では、何がよく用いられますか。 |
| 18 | jit | 184 | pt | 1 | B | khop_dap_an | 動画像では、1つ前の画像との違っている部分だけを記録して圧縮率を高める方法を何と言いますか。 |
| 19 | jit | 185 | pt | 2 | A | khop_dap_an | 「#」の記号はどのように読みますか。 |
| 20 | jit | 186 | pt | 3 | B | domain_shell+vai_tro_stub+khop_dap_an | JISコードは、日本工業規格 JIS が定めたもので、（  ）bitの数字を（  ）桁ずつ区切って表します。 |
| 21 | jit | 187 | pt | 4 | A | khop_dap_an | パリティビットには、どのような種類がありますか。 |
| 22 | jit | 189 | pt | 6 | A | domain_shell+vai_tro_stub+khop_dap_an | 2進数10011と2進数101を乗算した結果の2進数はどれか。 |
| 23 | jit | 190 | pt | 7 | B | khop_dap_an | CDでは、傷や手の脂、埃などによってデータが正しく読み取れない場合があります。このような誤りを検出・訂正するための仕組みを何と言いますか。 |
| 24 | jit | 191 | pt | 8 | B | khop_dap_an | 通信回線の伝送誤りに対処するパリティチェック方式（垂直パリティ）の記述として、適切なものはどれか。 |
| 25 | jit | 192 | pt | 9 | A | khop_dap_an | 「giai thừa」は日本語の漢字でどのように読みますか。 |
| 26 | jit | 193 | pt | 10 | D | khop_dap_an | 「論理和」は何ですか。 |
| 27 | jit | 196 | pt | 13 | A | khop_dap_an | 改行が何番のコードにあたるかなど、画面に直接表示できない記号は何と呼ばれますか。 |
| 28 | jit | 197 | pt | 14 | D | domain_shell+vai_tro_stub+khop_dap_an | 世界の主要な言語で使われている文字を統一的に表す文字コードはどれか。 |
| 29 | jit | 198 | pt | 15 | C | khop_dap_an | マウスやキーボードの操作方法、ウィンドウの見え方などを決めるものを何と言いますか。 |
| 30 | jit | 201 | pt | 18 | A | domain_shell+vai_tro_stub+khop_dap_an | 「変調」は英語で何ですか。 |
| 31 | jit | 202 | pt | 19 | C | domain_shell+vai_tro_stub+khop_dap_an | 映像データや音声データの圧縮方式として代表的なものはどれか。 |
| 32 | jit | 203 | pt | 20 | B | khop_dap_an | ネットワークの形態について、中心に集線装置を置き複数のコンピュータを接続する形態はどれか。 |
| 33 | jit | 205 | pt | 22 | C | khop_dap_an | 一般に100 Kbps〜1 Mbps以上の通信速度を何と言いますか。 |
| 34 | jit | 206 | pt | 23 | B | domain_shell+vai_tro_stub+khop_dap_an | プリンタの解像度をドット数で表す単位は何といいますか。 |
| 35 | jit | 207 | pt | 24 | C | khop_dap_an | 情報量の（  ）単位のことをビット(bit)といいます。 |
| 36 | jit | 208 | pt | 25 | C | domain_shell+vai_tro_stub+khop_dap_an | A〜Zの26種類の文字を表現するには最低何ビット必要か。 |
| 37 | jit | 209 | pt | 26 | B | khop_dap_an | ある音をコンピュータのファイルに記録するとき、符号化ビット数（量子化ビット数）を大きくするとどうなるか。 |
| 38 | jit | 210 | pt | 27 | A | khop_dap_an | （  ）とは、数値を扱う際に「基となる数」のことである。 |
| 39 | jit | 211 | pt | 28 | D | domain_shell+vai_tro_stub+khop_dap_an | 「プロキシサーバ」はベトナム語で何と言いますか。 |
| 40 | jit | 212 | pt | 29 | B | domain_shell+vai_tro_stub+khop_dap_an | 「CRC」は英語でなんですか。 |
| 41 | jit | 213 | pt | 30 | D | domain_shell+vai_tro_stub+khop_dap_an | 電源が切れたとき、データが消えてしまうものは何ですか。 |
| 42 | jit | 215 | pt | 32 | C | khop_dap_an | 見かけ上の記憶容量を実際のメモリ容量より大きくし、大きなメモリ空間を確保することを何と言いますか。 |
| 43 | jit | 216 | pt | 33 | A | khop_dap_an | ぎざぎざの少ないきれいな画像を得るには何を増やすとよいか。 |
| 44 | jit | 217 | pt | 34 | A | domain_shell+vai_tro_stub+khop_dap_an | 10進数のマイナス5を、2の補数表現で8ビットの2進数で表すとどうなるか。 |
| 45 | jit | 218 | pt | 35 | C | khop_dap_an | 音声を圧縮する際によく使われる、波を正弦波に分解する変換は何ですか。 |
| 46 | jit | 219 | pt | 36 | B | domain_shell+vai_tro_stub+khop_dap_an | 2進数100001を3倍したものはどれか。 |
| 47 | jit | 220 | pt | 37 | B | khop_dap_an | 装置Aと装置Bが直列につながっているシステムを何と言いますか。 |
| 48 | jit | 221 | pt | 38 | B | khop_dap_an | 装置Aと装置Bが並列につながっているシステムを何と言いますか。 |
| 49 | jit | 222 | pt | 39 | D | domain_shell+vai_tro_stub+khop_dap_an | イラストなどに使われる、最大表示色が256色の静止画圧縮形式はどれか。 |
| 50 | jit | 223 | pt | 40 | B | khop_dap_an | 波の高さの最大値をいくつの段階で表すかを何と言いますか。 |
| 51 | jit | 224 | pt | 41 | C | domain_shell+vai_tro_stub+khop_dap_an | 2バイトで1文字を表すとき、何種類の文字まで表せるか。 |
| 52 | jit | 225 | pt | 42 | A | domain_shell+vai_tro_stub+khop_dap_an | 10進数155を2進数で表したものはどれか。 |
| 53 | jit | 226 | pt | 43 | A | domain_shell+vai_tro_stub+khop_dap_an | 2進数1.111を10進数で表現したものはどれか。 |
| 54 | jit | 227 | pt | 44 | C | domain_shell+vai_tro_stub+khop_dap_an | MIDI命令のデータ段階（取りうる値の数）として適切なものはどれか。 |
| 55 | jit | 228 | pt | 45 | C | khop_dap_an | 「小文字」はどのように読みますか。ベトナム語で何ですか。 |
| 56 | jit | 230 | pt | 47 | D | khop_dap_an | データの（  ）と（  ）の対応を決めているのが文字コードです。 |
| 57 | jit | 232 | pt | 49 | C | domain_shell+vai_tro_stub | 圧縮・解凍ソフトでファイルを圧縮したとき、圧縮方式によって付けられる拡張子として正しいものはどれですか。 |
| 58 | jit | 233 | pt | 50 | C | domain_shell+vai_tro_stub+khop_dap_an | 動画像では、静止画圧縮と差分記録を組み合わせて圧縮率を高めた形式としてよく用いられるものは何ですか。 |
| 59 | jit | 234 | pt | 51 | B | khop_dap_an | 「sóng hình sin」は日本語の漢字でどのように書きますか。どのように読みますか。 |
| 60 | jit | 235 | pt | 52 | A | domain_shell+vai_tro_stub+khop_dap_an | ネットワークのデータ伝送速度を表す単位はどれか。 |
| 61 | jit | 236 | pt | 53 | A | khop_dap_an | 「帯域幅」はどのように読みますか。ベトナム語で何ですか。 |
| 62 | jit | 237 | pt | 54 | D | domain_shell+vai_tro_stub+khop_dap_an | 「マス目」はベトナム語で何ですか。 |
| 63 | jit | 238 | pt | 55 | A | khop_dap_an | 「PLC」はベトナム語で何ですか。 |
| 64 | jit | 239 | pt | 56 | A | khop_dap_an | 個人のパソコンをねらった（  ）としてウイルスが代表的です。 |
| 65 | jit | 240 | pt | 57 | B | khop_dap_an | ウィルスに感染するのを避けるために、何をしますか。 |
| 66 | jit | 241 | pt | 58 | B | khop_dap_an | 国際標準の携帯電話で利用できるアプリケーションを決定するのが何と呼ぶソフトウェアですか。 |
| 67 | jit | 242 | pt | 59 | C | khop_dap_an | 「周波数帯」はどのように読みますか。ベトナム語で何ですか。 |
| 68 | jit | 243 | pt | 60 | A | khop_dap_an | LSIは日本語で何ですか。 |
| 69 | jit | 244 | pt | 61 | A | khop_dap_an | A3サイズ（29.7cm×42.0cm）を350 dpiで印刷する場合の画素数の計算で使う関係はどれか。 |
| 70 | jit | 245 | pt | 62 | B | khop_dap_an | 「số nguyên tố」は日本語で何ですか。 |
| 71 | jit | 246 | pt | 63 | D | domain_shell+vai_tro_stub+khop_dap_an | 「サイマル放送」はベトナム語で何ですか。 |
| 72 | jit | 248 | pt | 65 | A | domain_shell+vai_tro_stub+khop_dap_an | 次の説明する文書は ただしですか。（Phần thuyết minh về từ vựng được cho là đúng hay sai?） 認証とは公開鍵 |
| 73 | jit | 249 | pt | 66 | A | khop_dap_an | OSIのセッション層（第5層）の主な役割として、最も適切なものはどれですか。 |
| 74 | jit | 251 | pt | 68 | A | domain_shell+vai_tro_stub+khop_dap_an | マザーボードとケーブルで接続された箱は何ですか。 |
| 75 | jit | 252 | pt | 69 | A | domain_shell+vai_tro_stub+khop_dap_an | クロック周波数 3 GHz のプロセッサにおいて、1つの命令が6クロックで実行できるとき、1命令の実行に必要な時間は何ナノ秒か。 |
| 76 | jit | 253 | pt | 70 | C | domain_shell+vai_tro_stub+khop_dap_an | 出力装置は何がありますか。 |
| 77 | jit | 254 | pt | 71 | B | khop_dap_an | 「ROM」とは何ですか。 |
| 78 | jit | 255 | pt | 72 | B | khop_dap_an | チューリングマシンは何から構造されますか。 |
| 79 | jit | 256 | pt | 73 | D | domain_shell+vai_tro_stub+khop_dap_an | 故障以外で問題なのは、( ) による不具合です。 |
| 80 | jit | 257 | pt | 74 | C | khop_dap_an | 「bộ vi xử lý」は日本語でなんですか。 |
| 81 | jit | 258 | pt | 75 | A | khop_dap_an | AさんがBさんに電子文書を送信し、Bさんがその文書の送信者を確認する方法について、本文の内容に基づき、正しく説明しているものはどれか。 |
| 82 | jit | 259 | pt | 76 | A | khop_dap_an | Aさんは、Bさんに機密文書を電子メールで送信するため、公開鍵暗号方式を用いて文書を暗号化することにした。このとき、Aさんが文書を暗号化するために使用するべき鍵は |
| 83 | jit | 260 | pt | 77 | D | khop_dap_an | コンピュータウイルスの予防策として、最も適切なものはどれですか。 |
| 84 | jit | 261 | pt | 78 | D | khop_dap_an | CPUについて正しくないものをえらんでください。 |
| 85 | jit | 263 | pt | 80 | D | domain_shell+vai_tro_stub+khop_dap_an | 以下のメモリ部品の中で、アクセス速度が一番速いのはどちらですか。 |
| 86 | jit | 264 | pt | 81 | B | domain_shell+vai_tro_stub+khop_dap_an | 記憶装置は何が該当しますか。 |
| 87 | jit | 265 | pt | 82 | A | domain_shell+vai_tro_stub+khop_dap_an | 「DoS」はベトナム語で何ですか。 |
| 88 | jit | 266 | pt | 83 | A | domain_shell+vai_tro_stub+khop_dap_an | ある企業のデータセンターには、重要な役割を果たすサーバーがあります。このサーバーの稼働データを分析したところ、平均故障間隔が500時間、平均修復時間が10時間で |
| 89 | jit | 268 | pt | 85 | B | khop_dap_an | 「工業所有権」に属しているものはどの有権ですか。 |
| 90 | jit | 269 | pt | 86 | C | khop_dap_an | 「bước đệm」は日本語で何ですか。 |
| 91 | jit | 270 | pt | 87 | D | domain_shell+vai_tro_stub+khop_dap_an | 「RAM」は英語で何ですか。 |
| 92 | jit | 271 | pt | 88 | C | khop_dap_an | OSIにおいて、「隣接機器間転送」の機能は主にどの階層が担当しますか。 |
| 93 | jit | 272 | pt | 89 | B | khop_dap_an | 「通信制御」はどのように読みますか。ベトナム語で何ですか。 |
| 94 | jit | 274 | pt | 91 | D | domain_shell+vai_tro_stub+khop_dap_an | メモリ空間には、番地が割り当てられるところは何と呼ばれましたか。 |
| 95 | jit | 275 | pt | 92 | B | khop_dap_an | コンピュータウィルスについて正しくないものをえらんでください。 |
| 96 | jit | 277 | pt | 94 | C | khop_dap_an | 「_」のキーボードの記号はどのように読みますか。 |
| 97 | jit | 279 | pt | 96 | B | domain_shell+vai_tro_stub+khop_dap_an | 「バス」はベトナム語で何ですか。 |
| 98 | jit | 280 | pt | 97 | C | khop_dap_an | 「転置式」はどのように読みますか。ベトナム語で何ですか。 |
| 99 | jit | 281 | pt | 98 | C | khop_dap_an | ある回路の入力Xと出力Yの関係が、Y = NOT X で表されるとき、この回路は何回路と呼ばれますか。 |
| 100 | jit | 283 | pt | 100 | B | domain_shell+vai_tro_stub+khop_dap_an | 「流通過程」はベトナム語で何ですか。 |
| 101 | jit | 284 | pt | 101 | A | domain_shell+vai_tro_stub+khop_dap_an | 「ブロードバンド」は英語で何ですか。ベトナム語で何ですか。 |
| 102 | jit | 286 | pt | 103 | C | domain_shell+vai_tro_stub+khop_dap_an | NTTドコモのFOMAの商品は何世代携帯電話のものですか。 |
| 103 | jit | 287 | pt | 104 | C | domain_shell+vai_tro_stub+khop_dap_an | 「EDI」は英語でどの言葉に略されましたか。 |
| 104 | jit | 288 | pt | 105 | C | domain_shell+vai_tro_stub+khop_dap_an | ある会社のシステムは、3つの装置A、B、Cで構成されています。AとBは並列接続され、それらがCと直列接続されています。各装置の稼働率はそれぞれ0.9、0.9、0 |
| 105 | jit | 289 | pt | 106 | C | khop_dap_an | 指先とのセンサの間に蓄えられる電荷を測定する方式は何の方式ですか。 |
| 106 | jit | 290 | pt | 107 | D | khop_dap_an | 「単結晶」はどのように読みますか。また、ベトナム語で何ですか。 |
| 107 | jit | 291 | pt | 108 | C | khop_dap_an | コンピュータのCPUにおいて、バスの主な役割として最も適切なものはどれか。 |
| 108 | jit | 292 | pt | 109 | B | khop_dap_an | Chọn cách gọi tên đúng của hệ thống trong hình |
| 109 | jit | 5 | quiz | 5 | C | khop_dap_an | 電子式計算機ENIACが開発された年はいつか。 |
| 110 | jit | 6 | quiz | 6 | C | khop_dap_an | フォン・ノイマンのプログラム内蔵方式コンピュータが登場したのはいつか。 |
| 111 | jit | 8 | quiz | 8 | C | khop_dap_an | コンピュータを1つの式で表すと何になるか。 |
| 112 | jit | 11 | quiz | 11 | C | domain_shell+vai_tro_stub+khop_dap_an | Excelファイルの拡張子はどれか。 |
| 113 | jit | 12 | quiz | 12 | D | khop_dap_an | ファイルの種類を識別するために、ファイル名に付けられる（ ）のことを拡張子という。 |
| 114 | jit | 13 | quiz | 13 | D | domain_shell+vai_tro_stub+khop_dap_an | HTMLファイルの拡張子はどれか。 |
| 115 | jit | 15 | quiz | 15 | B | domain_shell+vai_tro_stub+khop_dap_an | ホームページのアドレスのことを（ ）という。 |
| 116 | jit | 16 | quiz | 16 | C | khop_dap_an | Web 2.0という言葉を2004年に提唱したのは誰か。 |
| 117 | jit | 18 | quiz | 18 | C | khop_dap_an | Web2.0について正しくないものをえらんでください。 |
| 118 | jit | 19 | quiz | 19 | C | khop_dap_an | クラウドコンピューティングという言葉を2006年に提唱したのは誰か。 |
| 119 | jit | 21 | quiz | 21 | B | khop_dap_an | メール利用のネチケットとして正しくないものをえらんでください。 |
| 120 | jit | 22 | quiz | 22 | B | domain_shell+vai_tro_stub+khop_dap_an | メールの添付ファイルで即座に削除すべき拡張子はどれか。 |
| 121 | jit | 25 | quiz | 25 | C | khop_dap_an | 製品のデザインについての権利を何というか。 |
| 122 | jit | 26 | quiz | 26 | D | khop_dap_an | 社名やロゴなどの商標を保護する権利を何というか。 |
| 123 | jit | 29 | quiz | 29 | B | khop_dap_an | 第1世代携帯電話の通信方式はどれか。 |
| 124 | jit | 30 | quiz | 30 | C | khop_dap_an | タッチパネルの「静電容量方式」では何を測定するか。 |
| 125 | jit | 33 | quiz | 33 | C | khop_dap_an | タッチパネルの「抵抗膜方式」について正しくないものをえらんでください。 |
| 126 | jit | 34 | quiz | 34 | B | khop_dap_an | CMOSセンサはカメラ内でどのような役割を持つか。 |
| 127 | jit | 35 | quiz | 35 | C | khop_dap_an | FTTH（光ファイバ通信）の最大通信速度はどれか。 |
| 128 | jit | 38 | quiz | 38 | C | domain_shell+vai_tro_stub | 【専門知識】次の質問に対して、正しい答えを１つ選びなさい。「電灯線を利用してデータ通信を行う技術」はどれですか。 |
| 129 | jit | 39 | quiz | 39 | C | domain_shell+vai_tro_stub+khop_dap_an | Wi-Fiは何の略か。 |
| 130 | jit | 40 | quiz | 40 | D | khop_dap_an | Bluetoothについて正しくないものをえらんでください。 |
| 131 | jit | 43 | quiz | 43 | B | khop_dap_an | 最もよく使われるネットワーク接続形態はどれか。 |
| 132 | jit | 47 | quiz | 47 | C | khop_dap_an | OSI参照モデルは何層構造か。 |
| 133 | jit | 48 | quiz | 48 | C | khop_dap_an | 【専門知識】（ ）を圧縮するには、音の波としての性質を使います。 |
| 134 | jit | 49 | quiz | 49 | B | khop_dap_an | 「.com」のように種別だけで国名がないのはどの国のドメイン名か。 |
| 135 | jit | 52 | quiz | 52 | D | domain_shell+vai_tro_stub | 【専門知識】次の質問に対して、正しい答えを１つ選びなさい。「ユーザが独自にタグを自由に定義して利用できるマークアップ言語」はどれですか。 |
| 136 | jit | 53 | quiz | 53 | C | domain_shell+vai_tro_stub+khop_dap_an | OSI参照モデルのトランスポート層で使用されるプロトコルはどれか。 |
| 137 | jit | 56 | quiz | 56 | B | khop_dap_an | ブラウザがウェブサイトのID情報を自動で記憶する仕組みを何というか。 |
| 138 | jit | 57 | quiz | 57 | D | khop_dap_an | OECD8原則について正しくないものをえらんでください。 |
| 139 | jit | 58 | quiz | 58 | A | domain_shell+vai_tro_stub | 【専門用語】次の日本語の用語をベトナム語に直しなさい。 電子商取引 |
| 140 | jit | 64 | quiz | 64 | C | domain_shell+vai_tro_stub+khop_dap_an | 並列に接続した2つのシステム（A, B）の稼働率の計算式はどれか。 |
| 141 | jit | 67 | quiz | 67 | D | khop_dap_an | パスワード設定について正しくないものをえらんでください。 |
| 142 | jit | 68 | quiz | 68 | C | khop_dap_an | 信頼度成長曲線はどのような形をしているか。 |
| 143 | jit | 69 | quiz | 69 | B | domain_shell+vai_tro_stub+khop_dap_an | RAMの正式名称はどれか。 |
| 144 | jit | 71 | quiz | 71 | B | domain_shell+vai_tro_stub | 【専門知識】次の質問に対して、正しい答えを１つ選びなさい。「パソコン内において大きな面積を占めるメインとなる基板のこと」はどれですか。 |
| 145 | jit | 72 | quiz | 72 | C | domain_shell+vai_tro_stub | 【専門用語】次の日本語の用語をベトナム語に直しなさい。 演算装置 |
| 146 | jit | 73 | quiz | 73 | D | khop_dap_an | CPUについて正しくないものをえらんでください。 |
| 147 | jit | 74 | quiz | 74 | C | domain_shell+vai_tro_stub+khop_dap_an | コンピュータの第1世代に使用された論理素子はどれか。 |
| 148 | jit | 76 | quiz | 76 | B | khop_dap_an | AND回路のモデルはどれか。 |
| 149 | jit | 78 | quiz | 78 | C | khop_dap_an | 論理素子によってコンピュータは何世代に分けられるか。 |
| 150 | jit | 79 | quiz | 79 | C | domain_shell+vai_tro_stub+khop_dap_an | 2進数「1100」を10進数に変換すると何か。 |
| 151 | jit | 81 | quiz | 81 | C | domain_shell+vai_tro_stub+khop_dap_an | 2進数の加算で「1 + 1」の結果はどれか。 |
| 152 | jit | 83 | quiz | 83 | C | domain_shell+vai_tro_stub+khop_dap_an | 情報量の最小単位はどれか。 |
| 153 | jit | 84 | quiz | 84 | B | domain_shell+vai_tro_stub+khop_dap_an | アルファベット1文字の情報量は（ ）である。 |
| 154 | jit | 85 | quiz | 85 | B | khop_dap_an | 現在の日本語文字に使われるUnicodeは何個のコード番号を持つか。 |
| 155 | jit | 86 | quiz | 86 | B | domain_shell+vai_tro_stub | 【専門用語】次の日本語の用語をベトナム語に直しなさい。 情報量 |
| 156 | jit | 87 | quiz | 87 | C | domain_shell+vai_tro_stub+khop_dap_an | 1つの日本語文字（漢字など）を表現するために使用するデータ量は（ ）である。 |
| 157 | jit | 88 | quiz | 88 | B | domain_shell+vai_tro_stub | MIDI（Musical Instrument Digital Interface）命令のデータ量はどれか。 |
| 158 | jit | 90 | quiz | 90 | B | domain_shell+vai_tro_stub+khop_dap_an | CDの音声のサンプリング周波数はどれか。 |
| 159 | jit | 91 | quiz | 91 | B | domain_shell+vai_tro_stub | デジタル画像のVGA解像度として正しいものをえらんでください。 |
| 160 | jit | 92 | quiz | 92 | C | domain_shell+vai_tro_stub+khop_dap_an | RGB各色8 bitで表現する場合、1画素（ピクセル）のデータ量はどれか。 |
| 161 | jit | 94 | quiz | 94 | D | khop_dap_an | 動画について正しくないものをえらんでください。 |
| 162 | jit | 95 | quiz | 95 | C | khop_dap_an | 日本のテレビ放送における1秒あたりの画面書き換え回数（フレームレート）はいくつか。 |
| 163 | jit | 96 | quiz | 96 | C | domain_shell+vai_tro_stub | 通信速度の単位として正しいのはどれか。 |
| 164 | jit | 98 | quiz | 98 | C | domain_shell+vai_tro_stub | 【専門用語】次の日本語の用語をベトナム語に直しなさい。 データ圧縮 |
| 165 | jit | 99 | quiz | 99 | B | khop_dap_an | ランレングス圧縮とは、（ ）を記述する画像圧縮方式の1つである。 |
| 166 | jit | 100 | quiz | 100 | D | khop_dap_an | 音声情報の圧縮について正しくないものをえらんでください。 |
| 167 | jit | 101 | quiz | 101 | B | domain_shell+vai_tro_stub+khop_dap_an | 1 GBは何 MBか。 |
| 168 | jit | 102 | quiz | 102 | B | khop_dap_an | ADSLは何の略か。 |
| 169 | jit | 105 | quiz | 105 | C | domain_shell+vai_tro_stub+khop_dap_an | 日本のテレビ放送で使われるフレームレートはいくらか。 |
| 170 | jit | 107 | quiz | 107 | D | domain_shell+vai_tro_stub | 【専門用語】次の日本語の用語をベトナム語に直しなさい。 高水準言語 |
| 171 | jit | 108 | quiz | 108 | A | domain_shell+vai_tro_stub+khop_dap_an | dpi（dot per inch）はどの機器の解像度を表すか。 |
| 172 | jit | 109 | quiz | 109 | C | khop_dap_an | ランレングス圧縮について正しくないものをえらんでください。 |
| 173 | jit | 113 | quiz | 113 | B | khop_dap_an | 大量のデータを扱うために最も重要なのはどれか。 |
| 174 | jit | 116 | quiz | 116 | B | khop_dap_an | 「電気機械式」コンピュータが誕生したのはいつか。 |
| 175 | jit | 117 | quiz | 117 | B | domain_shell+vai_tro_stub+khop_dap_an | 【専門知識】（ ）は、データのアクセス速度が最も高速です。 |
| 176 | jit | 118 | quiz | 118 | A | khop_dap_an | 密結合マルチプロセッサとはどのような方式か。 |
| 177 | jit | 119 | quiz | 119 | B | khop_dap_an | 疎結合マルチプロセッサとはどのような方式か。 |
| 178 | jit | 121 | quiz | 121 | C | khop_dap_an | インターネットでIPアドレスを使って何を特定するか。 |
| 179 | jit | 122 | quiz | 122 | B | khop_dap_an | スカベンジングとはどのような犯罪か。 |
| 180 | jit | 124 | quiz | 124 | D | khop_dap_an | 低級言語について正しくないものをえらんでください。 |
| 181 | jit | 125 | quiz | 125 | B | khop_dap_an | 長さ、重さ、時間など身の回りの多くの物理量は何か。 |
| 182 | jit | 127 | quiz | 127 | C | khop_dap_an | 転置式暗号の特徴はどれか。 |
| 183 | jit | 129 | quiz | 129 | A | khop_dap_an | CPUの動作原理は何に基づいているか。 |
| 184 | jit | 130 | quiz | 130 | B | domain_shell+vai_tro_stub+khop_dap_an | コンピュータのデータは（ ）の並びで表現された数字である。 |
| 185 | jit | 132 | sample | 1 | B | khop_dap_an | スカベンジングといって、残された個人情報を（ ）する犯罪もあります。 |
| 186 | jit | 133 | sample | 2 | A | khop_dap_an | 【専門知識】（ ）は、データのアクセス速度が最も高速です。 |
| 187 | jit | 134 | sample | 3 | A | domain_shell+vai_tro_stub+khop_dap_an | アルファベット1文字の情報量はどうなりますか。 |
| 188 | jit | 136 | sample | 5 | D | domain_shell+vai_tro_stub+khop_dap_an | 使われる論理素子によって何世代に分けられるか。 |
| 189 | jit | 137 | sample | 6 | D | khop_dap_an | 【専門知識】データベースの表現法「データを親、子、孫のような階層構造に並べ、最上位の親からたどることによって検索する表現法です」とはどれですか。 |
| 190 | jit | 138 | sample | 7 | A | khop_dap_an | 大量のデータを扱うために、何が重要ですか。 |
| 191 | jit | 139 | sample | 8 | A | khop_dap_an | 【専門知識】「.com」のように種別だけで国名がないのはどの国のドメイン名ですか。 |
| 192 | jit | 140 | sample | 9 | A | khop_dap_an | 【専門知識】HTMLとは;Hyper Text Markup Languageの略で、文字の（ ）、音、ファイルへのリンクなどが記述できます。 |
| 193 | jit | 141 | sample | 10 | A | khop_dap_an | Web2.0とは何ですか。 |
| 194 | jit | 142 | sample | 11 | C | khop_dap_an | 【専門知識】「マウスやキーボードの操作の仕方、ウィンドウの見え方、ファイルの扱い方などを決定します」はOS機能の何の内容を指しますか。 |
| 195 | jit | 143 | sample | 12 | A | khop_dap_an | 【専門知識】CPUの動作原理は何に基づいていますか。 |
| 196 | jit | 145 | sample | 14 | C | khop_dap_an | 【専門知識】（ ）を圧縮するには、音の波としての性質を使います。 |
| 197 | jit | 146 | sample | 15 | C | domain_shell+vai_tro_stub+khop_dap_an | 【専門知識】光ファイバを使って家庭まで高速通信を行うことは何でしょう。 |
| 198 | jit | 147 | sample | 16 | B | khop_dap_an | ランレングス圧縮について正しくないものをえらんでください。 |
| 199 | jit | 150 | sample | 19 | C | domain_shell+vai_tro_stub+khop_dap_an | 故障以外で問題なのは、（ ）による不具合です。 |
| 200 | jit | 151 | sample | 20 | B | domain_shell+vai_tro_stub+khop_dap_an | MIDI命令はデータ量としては何ビットとなりますか。 |
| 201 | jit | 152 | sample | 21 | C | khop_dap_an | 【専門知識】Web2.0の大きな特徴は何ですか。 |
| 202 | jit | 154 | sample | 23 | D | khop_dap_an | ユーザからの入力は何から行えますか。 |
| 203 | jit | 155 | sample | 24 | A | khop_dap_an | 【専門知識】「ヒューマンインタフェースの設計は；（ ）検討時では十分に行えないことが多く；試作プログラムを作ってみて問題点を修正していくというやり方になります。 |
| 204 | jit | 157 | sample | 26 | A | khop_dap_an | 電子式計算機はいつ開発されましたか。 |
| 205 | jit | 159 | sample | 28 | A | khop_dap_an | 低級言語について正しくないものをえらんでください。 |
| 206 | jit | 160 | sample | 29 | D | khop_dap_an | 長さ、重さ、時間など身の回りの多くの物理量は何ですか。 |
| 207 | jit | 161 | sample | 30 | D | khop_dap_an | IPアドレスについて正しくないものをえらんでください。 |
| 208 | jit | 162 | sample | 31 | B | domain_shell+vai_tro_stub+khop_dap_an | 【専門知識】電気機械式はいつ誕生されましたか。 |
| 209 | jit | 165 | sample | 34 | D | khop_dap_an | PCのOSに関する記述のうち、適切なものはどれか。 |
| 210 | jit | 166 | sample | 35 | A | khop_dap_an | コンピュータのデータは何の並びで表現された数字ですか。 |
| 211 | jit | 167 | sample | 36 | C | domain_shell+vai_tro_stub+khop_dap_an | JRのSuicaなどで使われているのは何ですか。 |
| 212 | jit | 168 | sample | 37 | B | khop_dap_an | 工業所有権はどんな権ですか。 |
| 213 | jit | 169 | sample | 38 | C | domain_shell+vai_tro_stub+khop_dap_an | 携帯電話、パソコン、カーナビ、マウス、キーボード、ヘッドホンなどに搭載されている通信規格は何ですか。 |
| 214 | jit | 171 | sample | 40 | B | khop_dap_an | 着信メロディについて正しくないものを選びなさい。 |
| 215 | jit | 173 | sample | 42 | D | domain_shell+vai_tro_stub+khop_dap_an | 【専門知識】（ ）とは、インターネット上で提供される各種のサービス・システム・各種のファイルの場所を特定するための記述方式です。 |
| 216 | jit | 176 | sample | 45 | C | khop_dap_an | 著作権の特徴はなんですか。 |
| 217 | jit | 177 | sample | 46 | D | khop_dap_an | 2つ以上の処理装置が、メモリを共有せずに、それぞれ独立したメモリを持って並列処理を行う方式は何でしょう。 |
| 218 | jit | 178 | sample | 47 | A | khop_dap_an | インターネットでは、IPアドレス（コンピュータの住所にあたる番号）を使って、相手の（ ）を特定します。 |
| 219 | jit | 181 | sample | 50 | D | domain_shell+vai_tro_stub | 【専門用語】次の日本語の用語をベトナム語に直しなさい。 高水準言語 |
| 220 | jit | 182 | sample | 51 | C | khop_dap_an | Web2.0について正しくないものをえらんでください。 |
| 221 | jit | 183 | sample | 52 | B | domain_shell+vai_tro_stub+khop_dap_an | 【専門知識】1文字を表現するために、16ビット（2バイト）のデータ量を使用する文字コードは何ですか。 |
| 222 | jit | 315 | slides | 295 | B | khop_dap_an | スカベンジングといって、残された個人情報を（ ）する犯罪もあります。 |
| 223 | jit | 316 | slides | 297 | A | khop_dap_an | 【専門知識】「.com」のように種別だけで国名がないのはどの国のドメイン名ですか。 |
| 224 | jit | 317 | slides | 298 | A | khop_dap_an | 【専門知識】HTMLとは;Hyper Text Markup Languageの略で、文字の（ ）、音、ファイルへのリンクなどが記述できます。 |
| 225 | jit | 318 | slides | 299 | A | khop_dap_an | Web2.0とは何ですか。 |
| 226 | jit | 319 | slides | 300 | C | khop_dap_an | 【専門知識】「マウスやキーボードの操作の仕方、ウィンドウの見え方、ファイルの扱い方などを決定します」はOS機能の何の内容を指しますか。 |
| 227 | jit | 320 | slides | 301 | A | khop_dap_an | 【専門知識】CPUの動作原理は何に基づいていますか。 |
| 228 | jit | 321 | slides | 303 | C | domain_shell+vai_tro_stub+khop_dap_an | 【専門知識】光ファイバを使って家庭まで高速通信を行うことは何でしょう。 |
| 229 | jit | 324 | slides | 306 | C | khop_dap_an | 【専門知識】Web2.0の大きな特徴は何ですか。 |
| 230 | jit | 325 | slides | 307 | D | khop_dap_an | ユーザからの入力は何から行えますか。 |
| 231 | jit | 326 | slides | 308 | A | khop_dap_an | 【専門知識】「ヒューマンインタフェースの設計は；（ ）検討時では十分に行えないことが多く；試作プログラムを作ってみて問題点を修正していくというやり方になります。 |
| 232 | jit | 327 | slides | 309 | B | domain_shell+vai_tro_stub+khop_dap_an | 【専門知識】電気機械式はいつ誕生されましたか。 |
| 233 | jit | 330 | slides | 312 | B | khop_dap_an | 着信メロディについて正しくないものを選びなさい。 |
| 234 | jit | 331 | slides | 321 | B | domain_shell+vai_tro_stub | 【専門用語】ジョン・モークリー（John Mauchly） の意味として最も適切なものはどれか。 |
| 235 | jit | 332 | slides | 322 | C | domain_shell+vai_tro_stub | 【専門用語】パス（path） の意味として最も適切なものはどれか。 |
| 236 | jit | 333 | slides | 323 | C | domain_shell+vai_tro_stub | 【専門用語】ライプニッツの乗算機（Leibniz のじょうさんき） の意味として最も適切なものはどれか。 |
| 237 | jit | 334 | slides | 324 | A | domain_shell+vai_tro_stub | 【専門用語】フォン・ノイマン（John von Neumann） の意味として最も適切なものはどれか。 |
| 238 | jit | 335 | slides | 325 | C | domain_shell+vai_tro_stub | 【専門用語】ファイル（file） の意味として最も適切なものはどれか。 |
| 239 | jit | 336 | slides | 326 | B | domain_shell+vai_tro_stub | 【専門用語】汎用計算機（はんようけいさんき） の意味として最も適切なものはどれか。 |
| 240 | jit | 337 | slides | 327 | C | domain_shell+vai_tro_stub | 【専門用語】アプリケーション（a pplication） の意味として最も適切なものはどれか。 |
| 241 | jit | 338 | slides | 328 | B | domain_shell+vai_tro_stub | 【専門用語】子供のフォルダ（こどもの folder） の意味として最も適切なものはどれか。 |
| 242 | jit | 349 | slides | 339 | A | domain_shell+vai_tro_stub | 【専門用語】不公平（ふこうへい） の意味として最も適切なものはどれか。 |
| 243 | jit | 350 | slides | 340 | B | domain_shell+vai_tro_stub | 【専門用語】フリーウェア（Freeware） の意味として最も適切なものはどれか。 |
| 244 | jit | 351 | slides | 341 | A | domain_shell+vai_tro_stub | 【専門用語】放送権（ほうそうけん） の意味として最も適切なものはどれか。 |
| 245 | jit | 352 | slides | 342 | D | domain_shell+vai_tro_stub | 【専門用語】実行ファイル（じっこう File） の意味として最も適切なものはどれか。 |
| 246 | jit | 353 | slides | 343 | A | domain_shell+vai_tro_stub | 【専門用語】きげん（きかいしき） の意味として最も適切なものはどれか。 |
| 247 | jit | 354 | slides | 344 | D | domain_shell+vai_tro_stub | 【専門用語】著作人格権（ちょさくじんかくけん） の意味として最も適切なものはどれか。 |
| 248 | jit | 355 | slides | 345 | D | domain_shell+vai_tro_stub | 【専門用語】ネチケット（netiquette） の意味として最も適切なものはどれか。 |
| 249 | jit | 356 | slides | 346 | A | domain_shell+vai_tro_stub | 【専門用語】漏洩（ろうえい） の意味として最も適切なものはどれか。 |
| 250 | jit | 365 | slides | 355 | C | domain_shell+vai_tro_stub | 【専門用語】電荷（でんか） の意味として最も適切なものはどれか。 |
| 251 | jit | 366 | slides | 356 | B | domain_shell+vai_tro_stub | 【専門用語】透過（とうか） の意味として最も適切なものはどれか。 |
| 252 | jit | 367 | slides | 357 | B | domain_shell+vai_tro_stub | 【専門用語】有機 EL ディスプレイ（ゆうき eelectroluminescence display） の意味として最も適切なものはどれか。 |
| 253 | jit | 368 | slides | 358 | C | domain_shell+vai_tro_stub | 【専門用語】周波数帯域（ちゅうはすうたいいき） の意味として最も適切なものはどれか。 |
| 254 | jit | 369 | slides | 359 | A | domain_shell+vai_tro_stub | 【専門用語】ブロードバンド（broadband） の意味として最も適切なものはどれか。 |
| 255 | jit | 370 | slides | 360 | A | domain_shell+vai_tro_stub | 【専門用語】SED（Surface-conduction Electron-emitter Display） の意味として最も適切なものはどれか。 |
| 256 | jit | 371 | slides | 361 | A | domain_shell+vai_tro_stub | 【専門用語】盗聴（とうちょう） の意味として最も適切なものはどれか。 |
| 257 | jit | 372 | slides | 362 | C | domain_shell+vai_tro_stub | 【専門用語】次のベトナム語の用語を日本語に直しなさい。 phát sóng từng đoạn |
| 258 | jit | 373 | slides | 363 | A | domain_shell+vai_tro_stub | 【専門用語】次のベトナム語の用語を日本語に直しなさい。 ánh sáng phân cực |
| 259 | jit | 380 | slides | 370 | C | domain_shell+vai_tro_stub | 【専門用語】遮蔽物（しゃへいぶつ） の意味として最も適切なものはどれか。 |
| 260 | jit | 381 | slides | 371 | B | domain_shell+vai_tro_stub | 【専門用語】ハンズフリー（hands-free） の意味として最も適切なものはどれか。 |
| 261 | jit | 382 | slides | 372 | D | domain_shell+vai_tro_stub | 【専門用語】光ファイバ（ひかり fiber） の意味として最も適切なものはどれか。 |
| 262 | jit | 383 | slides | 373 | D | domain_shell+vai_tro_stub | 【専門用語】ユビキタス（ubiquitous） の意味として最も適切なものはどれか。 |
| 263 | jit | 384 | slides | 374 | D | domain_shell+vai_tro_stub | 【専門用語】POS（Point of Sale） の意味として最も適切なものはどれか。 |
| 264 | jit | 385 | slides | 375 | A | domain_shell+vai_tro_stub | 【専門用語】コスト削減（cost さくげん） の意味として最も適切なものはどれか。 |
| 265 | jit | 386 | slides | 376 | B | domain_shell+vai_tro_stub | 【専門用語】truyền dữ liệu có dây（55） の意味として最も適切なものはどれか。 |
| 266 | jit | 387 | slides | 377 | C | domain_shell+vai_tro_stub | 【専門用語】受信機（じゅしんき） の意味として最も適切なものはどれか。 |
| 267 | jit | 393 | slides | 383 | A | domain_shell+vai_tro_stub | 【専門用語】WAN（Wide Area Network） の意味として最も適切なものはどれか。 |
| 268 | jit | 394 | slides | 384 | D | domain_shell+vai_tro_stub | 【専門用語】スター型（star がた） の意味として最も適切なものはどれか。 |
| 269 | jit | 395 | slides | 385 | B | domain_shell+vai_tro_stub | 【専門用語】ネームサーバ（name server） の意味として最も適切なものはどれか。 |
| 270 | jit | 396 | slides | 386 | D | domain_shell+vai_tro_stub | 【専門用語】犯罪的行為（はんざいてきこうい） の意味として最も適切なものはどれか。 |
| 271 | jit | 397 | slides | 387 | D | domain_shell+vai_tro_stub | 【専門用語】大域的（たいいきてき） の意味として最も適切なものはどれか。 |
| 272 | jit | 398 | slides | 388 | C | domain_shell+vai_tro_stub | 【専門用語】ポータブルオーディオ（portable audio） の意味として最も適切なものはどれか。 |
| 273 | jit | 399 | slides | 389 | B | domain_shell+vai_tro_stub | 【専門用語】局所的（きょくしょてき） の意味として最も適切なものはどれか。 |
| 274 | jit | 400 | slides | 390 | B | domain_shell+vai_tro_stub | 【専門用語】攻撃（こうげき） の意味として最も適切なものはどれか。 |
| 275 | jit | 409 | slides | 399 | A | domain_shell+vai_tro_stub | 【専門用語】人工言語（じんこうげんご） の意味として最も適切なものはどれか。 |
| 276 | jit | 410 | slides | 400 | A | domain_shell+vai_tro_stub | 【専門用語】本質的な（ほんしつてきな） の意味として最も適切なものはどれか。 |
| 277 | jit | 411 | slides | 401 | D | domain_shell+vai_tro_stub | 【専門用語】IP アドレス（IP address） の意味として最も適切なものはどれか。 |
| 278 | jit | 412 | slides | 402 | B | domain_shell+vai_tro_stub | 【専門用語】無償奉仕（むしょうほうし） の意味として最も適切なものはどれか。 |
| 279 | jit | 413 | slides | 403 | B | domain_shell+vai_tro_stub | 【専門用語】サブネットマスク（subnet mask） の意味として最も適切なものはどれか。 |
| 280 | jit | 414 | slides | 404 | B | domain_shell+vai_tro_stub | 【専門用語】大幅に（おおはばに） の意味として最も適切なものはどれか。 |
| 281 | jit | 415 | slides | 405 | C | domain_shell+vai_tro_stub | 【専門用語】物理層（ぶつりそう） の意味として最も適切なものはどれか。 |
| 282 | jit | 416 | slides | 406 | D | domain_shell+vai_tro_stub | 【専門用語】一覧表（いちらんひょう） の意味として最も適切なものはどれか。 |
| 283 | jit | 417 | slides | 407 | D | domain_shell+vai_tro_stub | 【専門用語】次のベトナム語の用語を日本語に直しなさい。 giao thức mạng |
| 284 | jit | 418 | slides | 408 | A | domain_shell+vai_tro_stub | 【専門用語】次のベトナム語の用語を日本語に直しなさい。 phần mềm ứng dụng |
| 285 | jit | 423 | slides | 413 | C | domain_shell+vai_tro_stub | 【専門用語】出力結果（しゅつりょくけっか） の意味として最も適切なものはどれか。 |
| 286 | jit | 424 | slides | 414 | B | domain_shell+vai_tro_stub | 【専門用語】オリジネータ（originator） の意味として最も適切なものはどれか。 |
| 287 | jit | 425 | slides | 415 | A | domain_shell+vai_tro_stub | 【専門用語】匿名（とくめい） の意味として最も適切なものはどれか。 |
| 288 | jit | 426 | slides | 416 | D | domain_shell+vai_tro_stub | 【専門用語】電子マネー（でんし money） の意味として最も適切なものはどれか。 |
| 289 | jit | 427 | slides | 417 | A | domain_shell+vai_tro_stub | 【専門用語】BtoC 企業対消費者（Business to Consumer きぎょうたいしょうひしゃ） の意味として最も適切なものはどれか。 |
| 290 | jit | 428 | slides | 418 | D | domain_shell+vai_tro_stub | 【専門用語】受注（じゅちゅう） の意味として最も適切なものはどれか。 |
| 291 | jit | 429 | slides | 419 | D | domain_shell+vai_tro_stub | 【専門用語】電子商取引（でんししょうとりひき） の意味として最も適切なものはどれか。 |
| 292 | jit | 430 | slides | 420 | D | domain_shell | 【専門用語】次のベトナム語の用語を日本語に直しなさい。 thương mại tốc độ ánh sáng |
| 293 | jit | 437 | slides | 427 | B | domain_shell+vai_tro_stub | 【専門用語】認証（にんしょう） の意味として最も適切なものはどれか。 |
| 294 | jit | 438 | slides | 428 | B | domain_shell+vai_tro_stub | 【専門用語】復元する（ふくげんする） の意味として最も適切なものはどれか。 |
| 295 | jit | 439 | slides | 429 | D | domain_shell+vai_tro_stub | 【専門用語】秘密鍵（ひみつかぎ） の意味として最も適切なものはどれか。 |
| 296 | jit | 440 | slides | 430 | D | domain_shell+vai_tro_stub | 【専門用語】秘密鍵方式（ひみつかぎほうしき） の意味として最も適切なものはどれか。 |
| 297 | jit | 441 | slides | 431 | D | domain_shell+vai_tro_stub | 【専門用語】錠（じょう） の意味として最も適切なものはどれか。 |
| 298 | jit | 442 | slides | 432 | D | domain_shell+vai_tro_stub | 【専門用語】当人（とうにん） の意味として最も適切なものはどれか。 |
| 299 | jit | 443 | slides | 433 | B | domain_shell+vai_tro_stub | 【専門用語】古典的（こてんてき） の意味として最も適切なものはどれか。 |
| 300 | jit | 444 | slides | 434 | D | domain_shell+vai_tro_stub | 【専門用語】デジタル証明書（digital しょうめいしょ） の意味として最も適切なものはどれか。 |
| 301 | jit | 452 | slides | 442 | A | domain_shell+vai_tro_stub | 【専門用語】パターンファイル（pattern file） の意味として最も適切なものはどれか。 |
| 302 | jit | 453 | slides | 443 | A | domain_shell+vai_tro_stub | 【専門用語】踏み台（ふみだい） の意味として最も適切なものはどれか。 |
| 303 | jit | 454 | slides | 444 | A | domain_shell+vai_tro_stub | 【専門用語】悪用する（あくようする） の意味として最も適切なものはどれか。 |
| 304 | jit | 455 | slides | 445 | A | domain_shell+vai_tro_stub | 【専門用語】即座に（そくざに） の意味として最も適切なものはどれか。 |
| 305 | jit | 456 | slides | 446 | A | domain_shell+vai_tro_stub | 【専門用語】挙動（きょどう） の意味として最も適切なものはどれか。 |
| 306 | jit | 457 | slides | 447 | B | domain_shell+vai_tro_stub | 【専門用語】不正侵入（ふせいしんにゅう） の意味として最も適切なものはどれか。 |
| 307 | jit | 458 | slides | 448 | A | domain_shell+vai_tro_stub | 【専門用語】thời gian trung bình để sửa chữa（55） の意味として最も適切なものはどれか。 |
| 308 | jit | 459 | slides | 449 | C | domain_shell+vai_tro_stub | 【専門用語】信頼度成長曲線（しんらいどせいちょう きょくせん） の意味として最も適切なものはどれか。 |
| 309 | jit | 469 | slides | 459 | A | domain_shell+vai_tro_stub | 【専門用語】出力装置（しゅつりょくそうち） の意味として最も適切なものはどれか。 |
| 310 | jit | 470 | slides | 460 | B | domain_shell+vai_tro_stub | 【専門用語】クロック（clock） の意味として最も適切なものはどれか。 |
| 311 | jit | 471 | slides | 461 | C | domain_shell+vai_tro_stub | 【専門用語】グラフィックプロセッサ（graphic processor） の意味として最も適切なものはどれか。 |
| 312 | jit | 472 | slides | 462 | B | domain_shell+vai_tro_stub | 【専門用語】チップセット（chip set） の意味として最も適切なものはどれか。 |
| 313 | jit | 473 | slides | 463 | A | domain_shell+vai_tro_stub | 【専門用語】USB（Universal System Bus） の意味として最も適切なものはどれか。 |
| 314 | jit | 474 | slides | 464 | A | domain_shell+vai_tro_stub | 【専門用語】基板（きばん） の意味として最も適切なものはどれか。 |
| 315 | jit | 475 | slides | 465 | A | domain_shell+vai_tro_stub | 【専門用語】演算装置（えんざんそうち） の意味として最も適切なものはどれか。 |
| 316 | jit | 476 | slides | 466 | A | domain_shell+vai_tro_stub | 【専門用語】整数（せいすう） の意味として最も適切なものはどれか。 |
| 317 | jit | 477 | slides | 467 | C | domain_shell+vai_tro_stub | 【専門用語】次のベトナム語の用語を日本語に直しなさい。 cung từ |
| 318 | jit | 478 | slides | 468 | B | domain_shell | 【専門用語】次のベトナム語の用語を日本語に直しなさい。 解像度 |
| 319 | jit | 485 | slides | 475 | C | domain_shell+vai_tro_stub | 【専門用語】余る（あまる） の意味として最も適切なものはどれか。 |
| 320 | jit | 486 | slides | 476 | D | domain_shell+vai_tro_stub | 【専門用語】削る（けずる） の意味として最も適切なものはどれか。 |
| 321 | jit | 487 | slides | 477 | B | domain_shell+vai_tro_stub | 【専門用語】ダイオード（diode） の意味として最も適切なものはどれか。 |
| 322 | jit | 488 | slides | 478 | C | domain_shell+vai_tro_stub | 【専門用語】半導体（はんどうたい） の意味として最も適切なものはどれか。 |
| 323 | jit | 489 | slides | 479 | D | domain_shell+vai_tro_stub | 【専門用語】電球（でんきゅう） の意味として最も適切なものはどれか。 |
| 324 | jit | 490 | slides | 480 | A | domain_shell+vai_tro_stub | 【専門用語】発光ダイオード LED（はっこう diode Light Emitting Diode） の意味として最も適切なものはどれか。 |
| 325 | jit | 491 | slides | 481 | A | domain_shell+vai_tro_stub | 【専門用語】論理積（ろんりせき） の意味として最も適切なものはどれか。 |
| 326 | jit | 492 | slides | 482 | C | domain_shell+vai_tro_stub | 【専門用語】論理素子（ろんりそし） の意味として最も適切なものはどれか。 |
| 327 | jit | 500 | slides | 490 | D | domain_shell+vai_tro_stub | 【専門用語】基数（きすう） の意味として最も適切なものはどれか。 |
| 328 | jit | 501 | slides | 491 | A | domain_shell+vai_tro_stub | 【専門用語】16 進数（じゅうろくしんすう） の意味として最も適切なものはどれか。 |
| 329 | jit | 502 | slides | 492 | B | domain_shell+vai_tro_stub | 【専門用語】書き並べる（かきならべる） の意味として最も適切なものはどれか。 |
| 330 | jit | 503 | slides | 493 | D | domain_shell+vai_tro_stub | 【専門用語】10 進数（じっしんすう） の意味として最も適切なものはどれか。 |
| 331 | jit | 504 | slides | 494 | D | domain_shell+vai_tro_stub | 【専門用語】合計する（ごうけいする） の意味として最も適切なものはどれか。 |
| 332 | jit | 505 | slides | 495 | B | domain_shell+vai_tro_stub | 【専門用語】テイラー展開（Taylor てんかい） の意味として最も適切なものはどれか。 |
| 333 | jit | 506 | slides | 496 | A | domain_shell+vai_tro_stub | 【専門用語】加減乗除（かげんじょうじょ） の意味として最も適切なものはどれか。 |
| 334 | jit | 507 | slides | 497 | A | domain_shell+vai_tro_stub | 【専門用語】余り（あまり） の意味として最も適切なものはどれか。 |
| 335 | jit | 517 | slides | 507 | B | domain_shell+vai_tro_stub | 【専門用語】性能（せいのう） の意味として最も適切なものはどれか。 |
| 336 | jit | 518 | slides | 508 | B | domain_shell+vai_tro_stub | 【専門用語】客観的（きゃっかんてき） の意味として最も適切なものはどれか。 |
| 337 | jit | 519 | slides | 509 | D | domain_shell+vai_tro_stub | 【専門用語】改行コード（かいぎょう code） の意味として最も適切なものはどれか。 |
| 338 | jit | 520 | slides | 510 | A | domain_shell+vai_tro_stub | 【専門用語】JIS コード（Japanese Industrial Standard code） の意味として最も適切なものはどれか。 |
| 339 | jit | 521 | slides | 511 | B | domain_shell+vai_tro_stub | 【専門用語】オペレーティング システム（operating system） の意味として最も適切なものはどれか。 |
| 340 | jit | 522 | slides | 512 | C | domain_shell+vai_tro_stub | 【専門用語】主観的（しゅかんてき） の意味として最も適切なものはどれか。 |
| 341 | jit | 523 | slides | 513 | C | domain_shell+vai_tro_stub | 【専門用語】指摘する（してきする） の意味として最も適切なものはどれか。 |
| 342 | jit | 524 | slides | 514 | C | domain_shell+vai_tro_stub | 【専門用語】最小単位（さいしょうたんい） の意味として最も適切なものはどれか。 |
| 343 | jit | 530 | slides | 520 | A | domain_shell+vai_tro_stub | 【専門用語】インクジェット プリンタ（inkjet printer） の意味として最も適切なものはどれか。 |
| 344 | jit | 531 | slides | 521 | B | domain_shell+vai_tro_stub | 【専門用語】原色（げんしょく） の意味として最も適切なものはどれか。 |
| 345 | jit | 532 | slides | 522 | C | domain_shell+vai_tro_stub | 【専門用語】量子化数（りょうしかすう） の意味として最も適切なものはどれか。 |
| 346 | jit | 533 | slides | 523 | D | domain_shell+vai_tro_stub | 【専門用語】音符（おんぷ） の意味として最も適切なものはどれか。 |
| 347 | jit | 534 | slides | 524 | D | domain_shell+vai_tro_stub | 【専門用語】特殊なコード（とくしゅな code） の意味として最も適切なものはどれか。 |
| 348 | jit | 535 | slides | 525 | A | domain_shell+vai_tro_stub | 【専門用語】縦横（たてよこ） の意味として最も適切なものはどれか。 |
| 349 | jit | 536 | slides | 526 | C | domain_shell+vai_tro_stub | 【専門用語】静止画像（せいしがぞう） の意味として最も適切なものはどれか。 |
| 350 | jit | 537 | slides | 527 | C | domain_shell+vai_tro_stub | 【専門用語】接続端子（せつぞくたんし） の意味として最も適切なものはどれか。 |
| 351 | jit | 538 | slides | 528 | B | domain_shell+vai_tro_stub | 【専門用語】次のベトナム語の用語を日本語に直しなさい。 mảnh giấy nhỏ , dài |
| 352 | jit | 539 | slides | 529 | C | domain_shell+vai_tro_stub | 【専門用語】次のベトナム語の用語を日本語に直しなさい。 nốt nhạc |
| 353 | jit | 545 | slides | 535 | B | domain_shell+vai_tro_stub | 【専門用語】パリティチェック（parity check） の意味として最も適切なものはどれか。 |
| 354 | jit | 546 | slides | 536 | A | domain_shell+vai_tro_stub | 【専門用語】判定（はんてい） の意味として最も適切なものはどれか。 |
| 355 | jit | 547 | slides | 537 | D | domain_shell+vai_tro_stub | 【専門用語】差分（さぶん） の意味として最も適切なものはどれか。 |
| 356 | jit | 548 | slides | 538 | A | domain_shell+vai_tro_stub | 【専門用語】不可逆（ふかぎゃく） の意味として最も適切なものはどれか。 |
| 357 | jit | 549 | slides | 539 | D | domain_shell+vai_tro_stub | 【専門用語】BPS（Bit Per Second） の意味として最も適切なものはどれか。 |
| 358 | jit | 550 | slides | 540 | A | domain_shell+vai_tro_stub | 【専門用語】損なう（そこなう） の意味として最も適切なものはどれか。 |
| 359 | jit | 551 | slides | 541 | B | domain_shell+vai_tro_stub | 【専門用語】プロセッサー（processor） の意味として最も適切なものはどれか。 |
| 360 | jit | 552 | slides | 542 | A | domain_shell+vai_tro_stub | 【専門用語】車線（しゃせん） の意味として最も適切なものはどれか。 |
| 361 | jit | 560 | slides | 550 | C | domain_shell+vai_tro_stub | 【専門用語】ガレージ（ｇ arage） の意味として最も適切なものはどれか。 |
| 362 | jit | 561 | slides | 551 | A | domain_shell+vai_tro_stub | 【専門用語】LINUX（リナックス） の意味として最も適切なものはどれか。 |
| 363 | jit | 562 | slides | 552 | C | domain_shell+vai_tro_stub | 【専門用語】UNIX（ユニックス） の意味として最も適切なものはどれか。 |
| 364 | jit | 563 | slides | 553 | D | domain_shell+vai_tro_stub | 【専門用語】中身（なかみ） の意味として最も適切なものはどれか。 |
| 365 | jit | 564 | slides | 554 | C | domain_shell+vai_tro_stub | 【専門用語】相違（そうい） の意味として最も適切なものはどれか。 |
| 366 | jit | 565 | slides | 555 | C | domain_shell+vai_tro_stub | 【専門用語】スワッピング（s wapping） の意味として最も適切なものはどれか。 |
| 367 | jit | 566 | slides | 556 | C | domain_shell+vai_tro_stub | 【専門用語】マルチユーザ（multiuser） の意味として最も適切なものはどれか。 |
| 368 | jit | 568 | slides | 558 | C | domain_shell+vai_tro_stub | 【専門用語】次のベトナム語の用語を日本語に直しなさい。 tiến xa , nhảy vọt |
| 369 | jit | 573 | slides | 563 | D | domain_shell+vai_tro_stub | 【専門用語】階層構造（かいそうこうぞう） の意味として最も適切なものはどれか。 |
| 370 | jit | 574 | slides | 564 | D | domain_shell+vai_tro_stub | 【専門用語】起動（きどう） の意味として最も適切なものはどれか。 |
| 371 | jit | 575 | slides | 565 | A | domain_shell+vai_tro_stub | 【専門用語】リレーショナル 表現（Relational ひょうげん） の意味として最も適切なものはどれか。 |
| 372 | jit | 576 | slides | 566 | A | domain_shell+vai_tro_stub | 【専門用語】網的表現（あみてきひょうげん） の意味として最も適切なものはどれか。 |
| 373 | jit | 577 | slides | 567 | A | domain_shell+vai_tro_stub | 【専門用語】急激（きゅうげき） の意味として最も適切なものはどれか。 |
| 374 | jit | 578 | slides | 568 | D | domain_shell+vai_tro_stub | 【専門用語】自然な結合（しぜんなけつごう） の意味として最も適切なものはどれか。 |
| 375 | jit | 579 | slides | 569 | C | domain_shell+vai_tro_stub | 【専門用語】共通部分（きょうつうぶぶん） の意味として最も適切なものはどれか。 |
| 376 | jit | 580 | slides | 570 | B | domain_shell+vai_tro_stub | 【専門用語】実用性（じつようせい） の意味として最も適切なものはどれか。 |
| 377 | jit | 587 | slides | 577 | C | domain_shell+vai_tro_stub | 【専門用語】昇順（しょうじゅん） の意味として最も適切なものはどれか。 |
| 378 | jit | 588 | slides | 578 | A | domain_shell+vai_tro_stub | 【専門用語】更新（こうしん） の意味として最も適切なものはどれか。 |
| 379 | jit | 589 | slides | 579 | A | domain_shell+vai_tro_stub | 【専門用語】削除（さくじょ） の意味として最も適切なものはどれか。 |
| 380 | jit | 590 | slides | 580 | A | domain_shell+vai_tro_stub | 【専門用語】SQL（Structured Query Language） の意味として最も適切なものはどれか。 |
| 381 | jit | 591 | slides | 581 | B | domain_shell+vai_tro_stub | 【専門用語】要素名（ようそめい） の意味として最も適切なものはどれか。 |
| 382 | jit | 592 | slides | 582 | D | domain_shell+vai_tro_stub | 【専門用語】構文（こうぶん） の意味として最も適切なものはどれか。 |
| 383 | jit | 593 | slides | 583 | A | domain_shell+vai_tro_stub | 【専門用語】ワイルドカード（wildcard） の意味として最も適切なものはどれか。 |
| 384 | jit | 594 | slides | 584 | C | domain_shell+vai_tro_stub | 【専門用語】降順（こうじゅん） の意味として最も適切なものはどれか。 |
| 385 | jit | 603 | slides | 593 | C | domain_shell+vai_tro_stub | 【専門用語】動作（どうさ） の意味として最も適切なものはどれか。 |
| 386 | jit | 604 | slides | 594 | A | domain_shell+vai_tro_stub | 【専門用語】蓄える（たくわえる） の意味として最も適切なものはどれか。 |
| 387 | jit | 605 | slides | 595 | A | domain_shell+vai_tro_stub | 【専門用語】低級言語（ていきゅうげんご） の意味として最も適切なものはどれか。 |
| 388 | jit | 606 | slides | 596 | B | domain_shell+vai_tro_stub | 【専門用語】定型的（ていけいてき） の意味として最も適切なものはどれか。 |
| 389 | jit | 607 | slides | 597 | A | domain_shell+vai_tro_stub | 【専門用語】四則演算（しそくえんざん） の意味として最も適切なものはどれか。 |
| 390 | jit | 608 | slides | 598 | B | domain_shell+vai_tro_stub | 【専門用語】コンパイラ（compiler） の意味として最も適切なものはどれか。 |
| 391 | jit | 609 | slides | 599 | A | domain_shell+vai_tro_stub | 【専門用語】添え字（そえじ） の意味として最も適切なものはどれか。 |
| 392 | jit | 610 | slides | 600 | A | domain_shell+vai_tro_stub | 【専門用語】XML 言語（XML げんご） の意味として最も適切なものはどれか。 |
| 393 | jit | 618 | slides | 608 | B | domain_shell+vai_tro_stub | 【専門用語】頻繁（ひんぱん） の意味として最も適切なものはどれか。 |
| 394 | jit | 619 | slides | 609 | B | domain_shell+vai_tro_stub | 【専門用語】エラー対策（error たいさく） の意味として最も適切なものはどれか。 |
| 395 | jit | 620 | slides | 610 | B | domain_shell+vai_tro_stub | 【専門用語】書き下す（かきくだす） の意味として最も適切なものはどれか。 |
| 396 | jit | 621 | slides | 611 | B | domain_shell+vai_tro_stub | 【専門用語】試行錯誤（しこうさくご） の意味として最も適切なものはどれか。 |
| 397 | jit | 622 | slides | 612 | A | domain_shell+vai_tro_stub | 【専門用語】フローチャート（flowchart） の意味として最も適切なものはどれか。 |
| 398 | jit | 623 | slides | 613 | C | domain_shell+vai_tro_stub | 【専門用語】投入（とうにゅう） の意味として最も適切なものはどれか。 |
| 399 | jit | 624 | slides | 614 | A | domain_shell+vai_tro_stub | 【専門用語】身振り（みぶり） の意味として最も適切なものはどれか。 |
| 400 | jit | 625 | slides | 615 | D | domain_shell+vai_tro_stub | 【専門用語】バブルソート（bubble sort） の意味として最も適切なものはどれか。 |

## Chi tiết từng câu

### 1/400 · `jit` id=293 · task=`fuexam` · num=6 · ans **A**

- **flags:** khop_dap_an
- **status:** `todo`

**Đề gốc**

```
データベースの表現法には「データを親、子、孫のような階層構造に並べ、最上位の親からたどることによって検索する表現法です。」とかいてあるものはどんな表現ですか。
```

**Options**

- **A.** 階層型（ツリー型） ✅
- **B.** リレーショナル型
- **C.** ネットワーク型
- **D.** オブジェクト型

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Trong cách biểu diễn CSDL, mô tả «xếp dữ liệu kiểu cha–con–cháu, tìm từ nút gốc xuống» là kiểu nào? |
| optionsVi.A | kiểu phân cấp (cây) |
| optionsVi.B | kiểu/dạng quan hệ (relational) |
| optionsVi.C | mô hình mạng (network model) |
| optionsVi.D | kiểu/dạng đối tượng / object |
| answerDisplay | A. kiểu phân cấp (cây) |

**concept**
```
• kiểu phân cấp (cây)
• Nghĩa: kiểu phân cấp (cây).
```

**whyCorrect**
```
• Cha → con → cháu, chỉ một đường từ gốc = cấu trúc cây (hierarchical / tree). Đây là định nghĩa mô hình phân cấp.
• kiểu phân cấp (cây)
• Đáp án A: kiểu phân cấp (cây)
```

**whyWrong**

##### B
```
• Là gì? リレーショナル型 (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «リレーショナル型» (B) không thỏa: khớp đáp án «階層型（ツリー型）».
```

##### C
```
• Là gì? ネットワーク型 (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «ネットワーク型» (C) không thỏa: khớp đáp án «階層型（ツリー型）».
```

##### D
```
• Là gì? オブジェクト型 (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «オブジェクト型» (D) không thỏa: khớp đáp án «階層型（ツリー型）».
```

**whatIs**
```
{
  "A": "階層型（ツリー型） (thuật ngữ JP).",
  "B": "リレーショナル型 (thuật ngữ JP).",
  "C": "ネットワーク型 (thuật ngữ JP).",
  "D": "オブジェクト型 (thuật ngữ JP)."
}
```

**intent**
```
• Đọc kỹ đề (đã dịch) và chọn đúng bản chất kỹ thuật.
• kiểu phân cấp (cây)
```

**memoryTip**
```
(trống)
```

---

### 2/400 · `jit` id=294 · task=`fuexam` · num=13 · ans **A**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
【専門用語】次のベトナム語の用語をベトナム語に直しなさい。 分散処理システム
```

**Options**

- **A.** Hệ thống xử lý phân tán ✅
- **B.** Hệ thống tập trung
- **C.** Mạng chỉ có 1 máy
- **D.** Hệ điều hành đơn nhiệm

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | 【Thuật ngữ】Hãy dịch thuật ngữ sau sang tiếng Việt: «hệ thống xử lý phân tán» |
| optionsVi.A | Hệ thống xử lý phân tán |
| optionsVi.B | Hệ thống tập trung |
| optionsVi.C | Mạng chỉ có 1 máy |
| optionsVi.D | Hệ điều hành đơn nhiệm |
| answerDisplay | A. Hệ thống xử lý phân tán |

**concept**
```
• «hệ thống xử lý phân tán» nghĩa Việt: «Hệ thống xử lý phân tán».
```

**whyCorrect**
```
• = phân tán, = xử lý, hệ thống = hệ thống → hệ thống xử lý phân tán (nhiều máy cùng xử lý).
• «hệ thống xử lý phân tán» = Hệ thống xử lý phân tán
• Ghép đúng Hán tự/katakana với nghĩa VI đã học.
```

**whyWrong**

##### B
```
• Là gì? Hệ thống tập trung — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Hệ thống tập trung» (B) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### C
```
• Là gì? Mạng chỉ có 1 máy — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Mạng chỉ có 1 máy» (C) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### D
```
• Là gì? Hệ điều hành đơn nhiệm
• Dùng để làm gì? Phạm trù/khái niệm trong lý thuyết đề cập.
• Vì sao sai? «Hệ điều hành đơn nhiệm» (D) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

**whatIs**
```
{
  "A": "Hệ thống xử lý phân tán",
  "B": "Hệ thống tập trung — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Mạng chỉ có 1 máy — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Hệ điều hành đơn nhiệm"
}
```

**intent**
```
• Câu từ vựng: cho thuật ngữ (thường JP) → chọn nghĩa tiếng Việt đúng.
```

**memoryTip**
```
• hệ thống xử lý phân tán → Hệ thống xử lý phân tán
```

---

### 3/400 · `jit` id=295 · task=`fuexam` · num=41 · ans **A**

- **flags:** khop_dap_an
- **status:** `todo`

**Đề gốc**

```
ロングテールの考え方を活用したインターネットにおけるビジネスの説明として、適切なものはどれか
```

**Options**

- **A.** 少数のヒット商品だけでなく多品種少量のニッチ商品も売上げに寄与する ✅
- **B.** ヒット商品だけを扱う
- **C.** 店舗面積を必ず拡大する
- **D.** 在庫を一切持たないことが必須条件で唯一の定義

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Giải thích kinh doanh Internet theo tư duy long tail, câu nào phù hợp? |
| optionsVi.A | không chỉ hit; hàng niche cũng đóng góp (long tail) |
| optionsVi.B | chỉ bán hàng bán chạy |
| optionsVi.C | luôn mở rộng diện tích cửa |
| optionsVi.D | không tồn kho là điều kiện duy nhất (sai) |
| answerDisplay | A. không chỉ hit; hàng niche cũng đóng góp (long tail) |

**concept**
```
• không chỉ hit; hàng niche cũng đóng góp (long tail)
• Nghĩa: không chỉ hit; hàng niche cũng đóng góp (long tail).
```

**whyCorrect**
```
• Long tail: đuôi dài — rất nhiều sản phẩm bán ít, cộng lại đáng kể (Amazon, iTunes…). Web giảm chi phí kệ hàng.
• không chỉ hit; hàng niche cũng đóng góp (long tail)
• Đáp án A: không chỉ hit; hàng niche cũng đóng góp (long tail)
```

**whyWrong**

##### B
```
• Là gì? ヒット商品だけを扱う (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «ヒット商品だけを扱う» (B) không thỏa: khớp đáp án «少数のヒット商品だけでなく多品種少量のニッチ商品も売上げに寄与する».
```

##### C
```
• Là gì? 店舗面積を必ず拡大する (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «店舗面積を必ず拡大する» (C) không thỏa: khớp đáp án «少数のヒット商品だけでなく多品種少量のニッチ商品も売上げに寄与する».
```

##### D
```
• Là gì? 在庫を一切持たないことが必須条件で唯一の定義 (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «在庫を一切持たないことが必須条件で唯一の定義» (D) không thỏa: khớp đáp án «少数のヒット商品だけでなく多品種少量のニッチ商品も売上げに寄与する».
```

**whatIs**
```
{
  "A": "少数のヒット商品だけでなく多品種少量のニッチ商品も売上げに寄与する (thuật ngữ JP).",
  "B": "ヒット商品だけを扱う (thuật ngữ JP).",
  "C": "店舗面積を必ず拡大する (thuật ngữ JP).",
  "D": "在庫を一切持たないことが必須条件で唯一の定義 (thuật ngữ JP)."
}
```

**intent**
```
• Đọc kỹ đề (đã dịch) và chọn đúng bản chất kỹ thuật.
• không chỉ hit; hàng niche cũng đóng góp (long tail)
```

**memoryTip**
```
(trống)
```

---

### 4/400 · `jit` id=296 · task=`fuexam` · num=42 · ans **A**

- **flags:** khop_dap_an
- **status:** `todo`

**Đề gốc**

```
日本語でのコードについて正しくないものをえらんでください。
```

**Options**

- **A.** 日本語はASCII 7ビットだけで完全に表現できる ✅
- **B.** UTF-8などで多言語を扱える
- **C.** Shift_JISなどの符号化がある
- **D.** Unicodeが広く使われる

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Về mã hóa tiếng Nhật, hãy chọn câu SAI. |
| optionsVi.A | tiếng Nhật biểu diễn đủ bằng ASCII 7-bit (sai) |
| optionsVi.B | xử lý đa ngôn ngữ bằng UTF-8… |
| optionsVi.C | có mã hóa như Shift_JIS |
| optionsVi.D | Unicode được dùng rộng rãi |
| answerDisplay | A. tiếng Nhật biểu diễn đủ bằng ASCII 7-bit (sai) |

**concept**
```
• tiếng Nhật biểu diễn đủ bằng ASCII 7-bit (sai)
• Nghĩa: tiếng Nhật biểu diễn đủ bằng ASCII 7-bit (sai).
```

**whyCorrect**
```
• ASCII chỉ Latin cơ bản. Tiếng Nhật cần Shift_JIS, EUC-JP, UTF-8/Unicode… → A sai.
• tiếng Nhật biểu diễn đủ bằng ASCII 7-bit (sai)
• Đáp án A: tiếng Nhật biểu diễn đủ bằng ASCII 7-bit (sai)
```

**whyWrong**

##### B
```
• Là gì? UTF-8などで多言語を扱える (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «UTF-8などで多言語を扱える» (B) không thỏa: khớp đáp án «日本語はASCII 7ビットだけで完全に表現できる».
```

##### C
```
• Là gì? Shift_JISなどの符号化がある (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «Shift_JISなどの符号化がある» (C) không thỏa: khớp đáp án «日本語はASCII 7ビットだけで完全に表現できる».
```

##### D
```
• Là gì? Unicodeが広く使われる (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «Unicodeが広く使われる» (D) không thỏa: khớp đáp án «日本語はASCII 7ビットだけで完全に表現できる».
```

**whatIs**
```
{
  "A": "日本語はASCII 7ビットだけで完全に表現できる (thuật ngữ JP).",
  "B": "UTF-8などで多言語を扱える (thuật ngữ JP).",
  "C": "Shift_JISなどの符号化がある (thuật ngữ JP).",
  "D": "Unicodeが広く使われる (thuật ngữ JP)."
}
```

**intent**
```
• Đọc kỹ đề (đã dịch) và chọn đúng bản chất kỹ thuật.
• tiếng Nhật biểu diễn đủ bằng ASCII 7-bit (sai)
```

**memoryTip**
```
(trống)
```

---

### 5/400 · `jit` id=297 · task=`fuexam` · num=43 · ans **A**

- **flags:** khop_dap_an
- **status:** `todo`

**Đề gốc**

```
コンピューターが逢(あ)える事故は何ですか。
```

**Options**

- **A.** 障害・故障・セキュリティ事故など ✅
- **B.** 正常終了のみ
- **C.** 正しいバックアップ
- **D.** 計画通りの更新

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | «Tai nạn/sự cố» máy tính có thể gặp là gì? |
| optionsVi.A | bảo mật / an ninh |
| optionsVi.B | chỉ kết thúc bình thường |
| optionsVi.C | sao lưu |
| optionsVi.D | cập nhật đúng kế hoạch |
| answerDisplay | A. bảo mật / an ninh |

**concept**
```
• bảo mật / an ninh
• Nghĩa: bảo mật / an ninh.
```

**whyCorrect**
```
• Trong ngữ cảnh IT: / = incident, failure, security breach…
• bảo mật / an ninh
• Đáp án A: bảo mật / an ninh
```

**whyWrong**

##### B
```
• Là gì? 正常終了のみ (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «正常終了のみ» (B) không thỏa: khớp đáp án «障害・故障・セキュリティ事故など».
```

##### C
```
• Là gì? 正しいバックアップ (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «正しいバックアップ» (C) không thỏa: khớp đáp án «障害・故障・セキュリティ事故など».
```

##### D
```
• Là gì? 計画通りの更新 (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «計画通りの更新» (D) không thỏa: khớp đáp án «障害・故障・セキュリティ事故など».
```

**whatIs**
```
{
  "A": "障害・故障・セキュリティ事故など (thuật ngữ JP).",
  "B": "正常終了のみ (thuật ngữ JP).",
  "C": "正しいバックアップ (thuật ngữ JP).",
  "D": "計画通りの更新 (thuật ngữ JP)."
}
```

**intent**
```
• Đọc kỹ đề (đã dịch) và chọn đúng bản chất kỹ thuật.
• bảo mật / an ninh
```

**memoryTip**
```
(trống)
```

---

### 6/400 · `jit` id=299 · task=`fuexam` · num=45 · ans **A**

- **flags:** khop_dap_an
- **status:** `todo`

**Đề gốc**

```
OSの機能は何ですか。
```

**Options**

- **A.** プロセス・メモリ・ファイル・入出力などの管理 ✅
- **B.** 紙の印刷のみ
- **C.** 電源コードの製造
- **D.** CPUの物理製造

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Chức năng của OS là gì? |
| optionsVi.A | quản lý process/memory/file/I/O |
| optionsVi.B | 紙の印刷のみ — khái niệm kỹ thuật |
| optionsVi.C | sản xuất dây nguồn |
| optionsVi.D | sản xuất vật lý CPU |
| answerDisplay | A. quản lý process/memory/file/I/O |

**concept**
```
• quản lý process/memory/file/I/O
• Nghĩa: quản lý process/memory/file/I/O.
```

**whyCorrect**
```
• Các chức năng cốt lõi OS: process/CPU scheduling, memory, file system, I/O, UI…
• quản lý process/memory/file/I/O
• Đáp án A: quản lý process/memory/file/I/O
```

**whyWrong**

##### B
```
• Là gì? 紙の印刷のみ (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «紙の印刷のみ» (B) không thỏa: khớp đáp án «プロセス・メモリ・ファイル・入出力などの管理».
```

##### C
```
• Là gì? 電源コードの製造 (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «電源コードの製造» (C) không thỏa: khớp đáp án «プロセス・メモリ・ファイル・入出力などの管理».
```

##### D
```
• Là gì? CPUの物理製造 (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «CPUの物理製造» (D) không thỏa: khớp đáp án «プロセス・メモリ・ファイル・入出力などの管理».
```

**whatIs**
```
{
  "A": "プロセス・メモリ・ファイル・入出力などの管理 (thuật ngữ JP).",
  "B": "紙の印刷のみ (thuật ngữ JP).",
  "C": "電源コードの製造 (thuật ngữ JP).",
  "D": "CPUの物理製造 (thuật ngữ JP)."
}
```

**intent**
```
• Đọc kỹ đề (đã dịch) và chọn đúng bản chất kỹ thuật.
• quản lý process/memory/file/I/O
```

**memoryTip**
```
(trống)
```

---

### 7/400 · `jit` id=301 · task=`fuexam` · num=47 · ans **A**

- **flags:** khop_dap_an
- **status:** `todo`

**Đề gốc**

```
「取引プロセスとは、( ) 以外にも商品案内や配送などの処理、さらには商品開発まで含めます。」
```

**Options**

- **A.** 決済（支払い） ✅
- **B.** 画面解像度
- **C.** フォント名
- **D.** 壁紙

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | «Quy trình giao dịch gồm cả giới thiệu hàng, giao hàng, thậm chí phát triển sản phẩm — ngoài ( ).» |
| optionsVi.A | thanh toán |
| optionsVi.B | độ phân giải màn hình |
| optionsVi.C | tên font |
| optionsVi.D | hình nền |
| answerDisplay | A. thanh toán |

**concept**
```
• thanh toán
• Nghĩa: thanh toán.
```

**whyCorrect**
```
• Transaction process rộng hơn chỉ trả tiền: catalog, logistics, R&D… Chỗ trống = thanh toán (phần «ngoài ra còn…»).
• thanh toán
• Đáp án A: thanh toán
```

**whyWrong**

##### B
```
• Là gì? 画面解像度 (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «画面解像度» (B) không thỏa: khớp đáp án «決済（支払い）».
```

##### C
```
• Là gì? フォント名 (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «フォント名» (C) không thỏa: khớp đáp án «決済（支払い）».
```

##### D
```
• Là gì? 壁紙 (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «壁紙» (D) không thỏa: khớp đáp án «決済（支払い）».
```

**whatIs**
```
{
  "A": "決済（支払い） (thuật ngữ JP).",
  "B": "画面解像度 (thuật ngữ JP).",
  "C": "フォント名 (thuật ngữ JP).",
  "D": "壁紙 (thuật ngữ JP)."
}
```

**intent**
```
• Đọc kỹ đề (đã dịch) và chọn đúng bản chất kỹ thuật.
• thanh toán
```

**memoryTip**
```
(trống)
```

---

### 8/400 · `jit` id=302 · task=`fuexam` · num=48 · ans **A**

- **flags:** khop_dap_an
- **status:** `todo`

**Đề gốc**

```
メール利用の注意について正しくないものはどれですか。
```

**Options**

- **A.** 未知の添付ファイルを無条件に開いてよい ✅
- **B.** フィッシングに注意する
- **C.** 個人情報の取り扱いに注意する
- **D.** 不審なリンクに注意する

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Về lưu ý khi dùng email, câu nào SAI? |
| optionsVi.A | mở file đính kèm lạ không điều kiện (sai) |
| optionsVi.B | フィッシングに注意する — khái niệm kỹ thuật |
| optionsVi.C | cẩn thận xử lý thông tin cá nhân |
| optionsVi.D | cẩn thận link đáng ngờ |
| answerDisplay | A. mở file đính kèm lạ không điều kiện (sai) |

**concept**
```
• mở file đính kèm lạ không điều kiện (sai)
• Nghĩa: mở file đính kèm lạ không điều kiện (sai).
```

**whyCorrect**
```
• Không được mở tùy tiện attachment lạ (malware). Phải cẩn phishing, PII, link lạ. → A là câu sai cần chọn.
• mở file đính kèm lạ không điều kiện (sai)
• Đáp án A: mở file đính kèm lạ không điều kiện (sai)
```

**whyWrong**

##### B
```
• Là gì? フィッシングに注意する (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «フィッシングに注意する» (B) không thỏa: khớp đáp án «未知の添付ファイルを無条件に開いてよい».
```

##### C
```
• Là gì? 個人情報の取り扱いに注意する (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «個人情報の取り扱いに注意する» (C) không thỏa: khớp đáp án «未知の添付ファイルを無条件に開いてよい».
```

##### D
```
• Là gì? 不審なリンクに注意する (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «不審なリンクに注意する» (D) không thỏa: khớp đáp án «未知の添付ファイルを無条件に開いてよい».
```

**whatIs**
```
{
  "A": "未知の添付ファイルを無条件に開いてよい (thuật ngữ JP).",
  "B": "フィッシングに注意する (thuật ngữ JP).",
  "C": "個人情報の取り扱いに注意する (thuật ngữ JP).",
  "D": "不審なリンクに注意する (thuật ngữ JP)."
}
```

**intent**
```
• Đọc kỹ đề (đã dịch) và chọn đúng bản chất kỹ thuật.
• mở file đính kèm lạ không điều kiện (sai)
```

**memoryTip**
```
(trống)
```

---

### 9/400 · `jit` id=303 · task=`fuexam` · num=49 · ans **A**

- **flags:** khop_dap_an
- **status:** `todo`

**Đề gốc**

```
映画では1秒に何回の書き換えを行っていますか。
```

**Options**

- **A.** 約24フレーム（24fps） ✅
- **B.** 1フレーム
- **C.** 1000フレーム固定
- **D.** 0フレーム

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Phim điện ảnh mỗi giây «vẽ lại» bao nhiêu lần (frame)? |
| optionsVi.A | khung hình (frame) |
| optionsVi.B | khung hình (frame) |
| optionsVi.C | khung hình (frame) |
| optionsVi.D | khung hình (frame) |
| answerDisplay | A. khung hình (frame) |

**concept**
```
• khung hình (frame)
• Nghĩa: khung hình (frame).
```

**whyCorrect**
```
• khung hình (frame)
• Đáp án A: khung hình (frame)
```

**whyWrong**

##### B
```
• Là gì? 1フレーム (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «1フレーム» (B) không thỏa: khớp đáp án «約24フレーム（24fps）».
```

##### C
```
• Là gì? 1000フレーム固定 (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «1000フレーム固定» (C) không thỏa: khớp đáp án «約24フレーム（24fps）».
```

##### D
```
• Là gì? 0フレーム (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «0フレーム» (D) không thỏa: khớp đáp án «約24フレーム（24fps）».
```

**whatIs**
```
{
  "A": "約24フレーム（24fps） (thuật ngữ JP).",
  "B": "1フレーム (thuật ngữ JP).",
  "C": "1000フレーム固定 (thuật ngữ JP).",
  "D": "0フレーム (thuật ngữ JP)."
}
```

**intent**
```
• Đọc kỹ đề (đã dịch) và chọn đúng bản chất kỹ thuật.
• khung hình (frame)
```

**memoryTip**
```
(trống)
```

---

### 10/400 · `jit` id=304 · task=`fuexam` · num=50 · ans **A**

- **flags:** khop_dap_an
- **status:** `todo`

**Đề gốc**

```
「射影の結果を並べ替えるには ( ) という単語を使います。」
```

**Options**

- **A.** ソート（ORDER BY） ✅
- **B.** ジョインのみ
- **C.** インデックス削除
- **D.** ドロップ

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | «Để sắp xếp kết quả phép chiếu (projection), dùng từ ( ).» |
| optionsVi.A | ソート（ORDER BY） — khái niệm kỹ thuật |
| optionsVi.B | ジョインのみ — khái niệm kỹ thuật |
| optionsVi.C | インデックス削除 — khái niệm kỹ thuật |
| optionsVi.D | ドロップ — khái niệm kỹ thuật |
| answerDisplay | A. ソート（ORDER BY） — khái niệm kỹ thuật |

**concept**
```
• sắp xếp (sort)
• Nghĩa: sắp xếp (sort).
```

**whyCorrect**
```
• Trong quan hệ/SQL: chiếu (SELECT cột) xong sắp xếp = SORT / ORDER BY.
• sắp xếp (sort)
• Đáp án A: sắp xếp (sort)
```

**whyWrong**

##### B
```
• Là gì? ジョインのみ (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «ジョインのみ» (B) không thỏa: khớp đáp án «ソート（ORDER BY）».
```

##### C
```
• Là gì? インデックス削除 (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «インデックス削除» (C) không thỏa: khớp đáp án «ソート（ORDER BY）».
```

##### D
```
• Là gì? ドロップ (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «ドロップ» (D) không thỏa: khớp đáp án «ソート（ORDER BY）».
```

**whatIs**
```
{
  "A": "ソート（ORDER BY） (thuật ngữ JP).",
  "B": "ジョインのみ (thuật ngữ JP).",
  "C": "インデックス削除 (thuật ngữ JP).",
  "D": "ドロップ (thuật ngữ JP)."
}
```

**intent**
```
• Đọc kỹ đề (đã dịch) và chọn đúng bản chất kỹ thuật.
• sắp xếp (sort)
```

**memoryTip**
```
(trống)
```

---

### 11/400 · `jit` id=306 · task=`fuexam` · num=52 · ans **A**

- **flags:** khop_dap_an
- **status:** `todo`

**Đề gốc**

```
「小さいものから順に または逆に大きいものから順にデータを並べ替えること」は何を指しますか。
```

**Options**

- **A.** ソート（整列） ✅
- **B.** ハッシュ衝突
- **C.** 正規化
- **D.** デッドロック

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | «Sắp xếp dữ liệu từ nhỏ→lớn hoặc ngược lại» gọi là gì? |
| optionsVi.A | ソート（整列） — khái niệm kỹ thuật |
| optionsVi.B | ハッシュ衝突 — khái niệm kỹ thuật |
| optionsVi.C | chuẩn hóa |
| optionsVi.D | デッドロック — khái niệm kỹ thuật |
| answerDisplay | A. ソート（整列） — khái niệm kỹ thuật |

**concept**
```
• sắp xếp (sort)
• Nghĩa: sắp xếp (sort).
```

**whyCorrect**
```
• Đúng định nghĩa sorting (ascending/descending).
• sắp xếp (sort)
• Đáp án A: sắp xếp (sort)
```

**whyWrong**

##### B
```
• Là gì? ハッシュ衝突 (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «ハッシュ衝突» (B) không thỏa: khớp đáp án «ソート（整列）».
```

##### C
```
• Là gì? 正規化 (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «正規化» (C) không thỏa: khớp đáp án «ソート（整列）».
```

##### D
```
• Là gì? デッドロック (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «デッドロック» (D) không thỏa: khớp đáp án «ソート（整列）».
```

**whatIs**
```
{
  "A": "ソート（整列） (thuật ngữ JP).",
  "B": "ハッシュ衝突 (thuật ngữ JP).",
  "C": "正規化 (thuật ngữ JP).",
  "D": "デッドロック (thuật ngữ JP)."
}
```

**intent**
```
• Đọc kỹ đề (đã dịch) và chọn đúng bản chất kỹ thuật.
• sắp xếp (sort)
```

**memoryTip**
```
(trống)
```

---

### 12/400 · `jit` id=307 · task=`fuexam` · num=53 · ans **A**

- **flags:** khop_dap_an
- **status:** `todo`

**Đề gốc**

```
クッキー(cookie)に関する記述a~cのうち、適切なものだけをすべて挙げたものはどれか。
```

**Options**

- **A.** Webサーバがブラウザに保存させる小さなデータで状態管理等に使う（適切な説明の組合せ） ✅
- **B.** CPUの温度センサの別名
- **C.** OSカーネルそのもの
- **D.** 必ずウイルスである

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Về cookie, tổ hợp mô tả đúng là gì? (dạng chọn tổ hợp a–c trên đề gốc) |
| optionsVi.A | phát biểu về web |
| optionsVi.B | tên khác của cảm biến nhiệt CPU |
| optionsVi.C | chính kernel OS |
| optionsVi.D | 必ずウイルスである — khái niệm kỹ thuật |
| answerDisplay | A. phát biểu về web |

**concept**
```
• phát biểu về web
• Nghĩa: phát biểu về web.
```

**whyCorrect**
```
• Cookie: server gửi → browser lưu → gửi lại request sau (session, login, tracking…). Không phải virus bắt buộc, không phải cảm biến/CPU/kernel.
• phát biểu về web
• Đáp án A: phát biểu về web
```

**whyWrong**

##### B
```
• Là gì? CPUの温度センサの別名 (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «CPUの温度センサの別名» (B) không thỏa: khớp đáp án «Webサーバがブラウザに保存させる小さなデータで状態管理等に使う（適切な説明の組合せ）».
```

##### C
```
• Là gì? OSカーネルそのもの (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «OSカーネルそのもの» (C) không thỏa: khớp đáp án «Webサーバがブラウザに保存させる小さなデータで状態管理等に使う（適切な説明の組合せ）».
```

##### D
```
• Là gì? 必ずウイルスである (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «必ずウイルスである» (D) không thỏa: khớp đáp án «Webサーバがブラウザに保存させる小さなデータで状態管理等に使う（適切な説明の組合せ）».
```

**whatIs**
```
{
  "A": "Webサーバがブラウザに保存させる小さなデータで状態管理等に使う（適切な説明の組合せ） (thuật ngữ JP).",
  "B": "CPUの温度センサの別名 (thuật ngữ JP).",
  "C": "OSカーネルそのもの (thuật ngữ JP).",
  "D": "必ずウイルスである (thuật ngữ JP)."
}
```

**intent**
```
• Đọc kỹ đề (đã dịch) và chọn đúng bản chất kỹ thuật.
• phát biểu về web
```

**memoryTip**
```
(trống)
```

---

### 13/400 · `jit` id=309 · task=`fuexam` · num=55 · ans **A**

- **flags:** khop_dap_an
- **status:** `todo`

**Đề gốc**

```
フォルダとは何ですか
```

**Options**

- **A.** ファイルを整理して格納する入れ物（ディレクトリ） ✅
- **B.** CPUのレジスタ
- **C.** 電源ユニット
- **D.** 画面の解像度

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Folder là gì? |
| optionsVi.A | hộp chứa file (thư mục/directory) |
| optionsVi.B | CPUのレジスタ — khái niệm kỹ thuật |
| optionsVi.C | 電源ユニット — khái niệm kỹ thuật |
| optionsVi.D | độ phân giải màn hình |
| answerDisplay | A. hộp chứa file (thư mục/directory) |

**concept**
```
• hộp chứa file (thư mục/directory)
• Nghĩa: hộp chứa file (thư mục/directory).
```

**whyCorrect**
```
• Folder = thư mục: tổ chức file trên đĩa.
• hộp chứa file (thư mục/directory)
• Đáp án A: hộp chứa file (thư mục/directory)
```

**whyWrong**

##### B
```
• Là gì? CPUのレジスタ (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «CPUのレジスタ» (B) không thỏa: khớp đáp án «ファイルを整理して格納する入れ物（ディレクトリ）».
```

##### C
```
• Là gì? 電源ユニット (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «電源ユニット» (C) không thỏa: khớp đáp án «ファイルを整理して格納する入れ物（ディレクトリ）».
```

##### D
```
• Là gì? 画面の解像度 (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «画面の解像度» (D) không thỏa: khớp đáp án «ファイルを整理して格納する入れ物（ディレクトリ）».
```

**whatIs**
```
{
  "A": "ファイルを整理して格納する入れ物（ディレクトリ） (thuật ngữ JP).",
  "B": "CPUのレジスタ (thuật ngữ JP).",
  "C": "電源ユニット (thuật ngữ JP).",
  "D": "画面の解像度 (thuật ngữ JP)."
}
```

**intent**
```
• Đọc kỹ đề (đã dịch) và chọn đúng bản chất kỹ thuật.
• hộp chứa file (thư mục/directory)
```

**memoryTip**
```
(trống)
```

---

### 14/400 · `jit` id=310 · task=`fuexam` · num=56 · ans **A**

- **flags:** khop_dap_an
- **status:** `todo`

**Đề gốc**

```
「電子機器には、コンピュータ、携帯電話、( ) を始めとして、ポータブルオーディオやゲーム機などの家電製品など多くのものがあり、ネットワークは成長し続けています。」
```

**Options**

- **A.** 情報家電・家電製品 ✅
- **B.** 化石燃料
- **C.** 石板
- **D.** 羊皮紙

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | «Thiết bị điện tử gồm máy tính, điện thoại, ( ) … audio xách tay, máy game và nhiều đồ gia dụng; mạng vẫn phát triển.» |
| optionsVi.A | thiết bị thông tin / gia dụng |
| optionsVi.B | nhiên liệu hóa thạch |
| optionsVi.C | bảng đá |
| optionsVi.D | da dê (giấy cổ) |
| answerDisplay | A. thiết bị thông tin / gia dụng |

**concept**
```
• thiết bị thông tin / gia dụng
• Nghĩa: thiết bị thông tin / gia dụng.
```

**whyCorrect**
```
• thiết bị thông tin / gia dụng
• Đáp án A: thiết bị thông tin / gia dụng
```

**whyWrong**

##### B
```
• Là gì? 化石燃料 (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «化石燃料» (B) không thỏa: khớp đáp án «情報家電・家電製品».
```

##### C
```
• Là gì? 石板 (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «石板» (C) không thỏa: khớp đáp án «情報家電・家電製品».
```

##### D
```
• Là gì? 羊皮紙 (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «羊皮紙» (D) không thỏa: khớp đáp án «情報家電・家電製品».
```

**whatIs**
```
{
  "A": "情報家電・家電製品 (thuật ngữ JP).",
  "B": "化石燃料 (thuật ngữ JP).",
  "C": "石板 (thuật ngữ JP).",
  "D": "羊皮紙 (thuật ngữ JP)."
}
```

**intent**
```
• Đọc kỹ đề (đã dịch) và chọn đúng bản chất kỹ thuật.
• thiết bị thông tin / gia dụng
```

**memoryTip**
```
(trống)
```

---

### 15/400 · `jit` id=312 · task=`fuexam` · num=58 · ans **A**

- **flags:** khop_dap_an
- **status:** `todo`

**Đề gốc**

```
出力用ハードウェアは何ですか。
```

**Options**

- **A.** ディスプレイ・プリンタなど ✅
- **B.** キーボード
- **C.** マウス
- **D.** マイク（入力）

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Phần cứng xuất (output) là gì? |
| optionsVi.A | màn hình |
| optionsVi.B | bàn phím |
| optionsVi.C | マウス — khái niệm kỹ thuật |
| optionsVi.D | マイク（入力） — khái niệm kỹ thuật |
| answerDisplay | A. màn hình |

**concept**
```
• màn hình
• Nghĩa: màn hình.
```

**whyCorrect**
```
• Output: display, printer, speaker… Đưa thông tin ra ngoài cho người.
• màn hình
• Đáp án A: màn hình
```

**whyWrong**

##### B
```
• Là gì? キーボード (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «キーボード» (B) không thỏa: khớp đáp án «ディスプレイ・プリンタなど».
```

##### C
```
• Là gì? マウス (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «マウス» (C) không thỏa: khớp đáp án «ディスプレイ・プリンタなど».
```

##### D
```
• Là gì? マイク（入力） (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «マイク（入力）» (D) không thỏa: khớp đáp án «ディスプレイ・プリンタなど».
```

**whatIs**
```
{
  "A": "ディスプレイ・プリンタなど (thuật ngữ JP).",
  "B": "キーボード (thuật ngữ JP).",
  "C": "マウス (thuật ngữ JP).",
  "D": "マイク（入力） (thuật ngữ JP)."
}
```

**intent**
```
• Đọc kỹ đề (đã dịch) và chọn đúng bản chất kỹ thuật.
• màn hình
```

**memoryTip**
```
(trống)
```

---

### 16/400 · `jit` id=313 · task=`fuexam` · num=59 · ans **A**

- **flags:** khop_dap_an
- **status:** `todo`

**Đề gốc**

```
新たなプログラムを作成するときに、効率的な内部処理とともに考慮しなければならない重要な要素は何ですか。
```

**Options**

- **A.** 保守性・可読性・拡張性 ✅
- **B.** 意図的な難読化のみ
- **C.** 文書を一切残さないこと
- **D.** テストを省略すること

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Khi viết chương trình mới, ngoài xử lý nội bộ hiệu quả, yếu tố quan trọng cần cân nhắc là gì? |
| optionsVi.A | bảo trì · dễ đọc · mở rộng |
| optionsVi.B | chỉ làm khó đọc có chủ đích |
| optionsVi.C | không để lại tài liệu |
| optionsVi.D | テストを省略すること — khái niệm kỹ thuật |
| answerDisplay | A. bảo trì · dễ đọc · mở rộng |

**concept**
```
• bảo trì · dễ đọc · mở rộng
• Nghĩa: bảo trì · dễ đọc · mở rộng.
```

**whyCorrect**
```
• Code tốt: không chỉ chạy nhanh mà còn maintainability, readability, extensibility (sửa, đọc, thêm tính năng sau này).
• bảo trì · dễ đọc · mở rộng
• Đáp án A: bảo trì · dễ đọc · mở rộng
```

**whyWrong**

##### B
```
• Là gì? 意図的な難読化のみ (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «意図的な難読化のみ» (B) không thỏa: khớp đáp án «保守性・可読性・拡張性».
```

##### C
```
• Là gì? 文書を一切残さないこと (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «文書を一切残さないこと» (C) không thỏa: khớp đáp án «保守性・可読性・拡張性».
```

##### D
```
• Là gì? テストを省略すること (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «テストを省略すること» (D) không thỏa: khớp đáp án «保守性・可読性・拡張性».
```

**whatIs**
```
{
  "A": "保守性・可読性・拡張性 (thuật ngữ JP).",
  "B": "意図的な難読化のみ (thuật ngữ JP).",
  "C": "文書を一切残さないこと (thuật ngữ JP).",
  "D": "テストを省略すること (thuật ngữ JP)."
}
```

**intent**
```
• Đọc kỹ đề (đã dịch) và chọn đúng bản chất kỹ thuật.
• bảo trì · dễ đọc · mở rộng
```

**memoryTip**
```
(trống)
```

---

### 17/400 · `jit` id=314 · task=`fuexam` · num=60 · ans **A**

- **flags:** khop_dap_an
- **status:** `todo`

**Đề gốc**

```
動画像情報圧縮では、何がよく用いられますか。
```

**Options**

- **A.** MPEGなどの動画像圧縮方式 ✅
- **B.** 非圧縮RAW必須のみ
- **C.** 音声WAV固定のみ
- **D.** テキストCSVのみ

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Khi nén thông tin ảnh động (video), người ta thường dùng gì? |
| optionsVi.A | cách nén video như MPEG |
| optionsVi.B | chỉ bắt buộc RAW không nén |
| optionsVi.C | chỉ WAV cố định |
| optionsVi.D | テキストCSVのみ — khái niệm kỹ thuật |
| answerDisplay | A. cách nén video như MPEG |

**concept**
```
• cách nén video như MPEG
• Thuật ngữ: cách nén video như MPEG.
```

**whyCorrect**
```
• Video: MPEG-2/4, H.264/AVC, H.265… (họ MPEG/codec động). Không bắt buộc raw.
• cách nén video như MPEG
• Đáp án A: cách nén video như MPEG
```

**whyWrong**

##### B
```
• Là gì? 非圧縮RAW必須のみ (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «非圧縮RAW必須のみ» (B) không thỏa: khớp đáp án «MPEGなどの動画像圧縮方式».
```

##### C
```
• Là gì? 音声WAV固定のみ (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «音声WAV固定のみ» (C) không thỏa: khớp đáp án «MPEGなどの動画像圧縮方式».
```

##### D
```
• Là gì? テキストCSVのみ (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «テキストCSVのみ» (D) không thỏa: khớp đáp án «MPEGなどの動画像圧縮方式».
```

**whatIs**
```
{
  "A": "MPEGなどの動画像圧縮方式 (thuật ngữ JP).",
  "B": "非圧縮RAW必須のみ (thuật ngữ JP).",
  "C": "音声WAV固定のみ (thuật ngữ JP).",
  "D": "テキストCSVのみ (thuật ngữ JP)."
}
```

**intent**
```
• Đọc kỹ đề (đã dịch) và chọn đúng bản chất kỹ thuật.
• cách nén video như MPEG
```

**memoryTip**
```
(trống)
```

---

### 18/400 · `jit` id=184 · task=`pt` · num=1 · ans **B**

- **flags:** khop_dap_an
- **status:** `todo`

**Đề gốc**

```
動画像では、1つ前の画像との違っている部分だけを記録して圧縮率を高める方法を何と言いますか。
```

**Options**

- **A.** ランレングス圧縮
- **B.** 差分記録 ✅
- **C.** フーリエ変換
- **D.** 量子化

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Với video, chỉ ghi phần khác frame trước để tăng tỉ lệ nén — gọi là gì? |
| optionsVi.A | nén run-length |
| optionsVi.B | ghi sai phân (inter-frame) |
| optionsVi.C | biến đổi Fourier |
| optionsVi.D | lượng tử hóa |
| answerDisplay | B. ghi sai phân (inter-frame) |

**concept**
```
• ghi sai phân (inter-frame)
• Thuật ngữ: ghi sai phân (inter-frame).
```

**whyCorrect**
```
• ghi sai phân (inter-frame)
• Đáp án B: ghi sai phân (inter-frame)
```

**whyWrong**

##### A
```
• Là gì? ランレングス圧縮 (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «ランレングス圧縮» (A) không thỏa: khớp đáp án «差分記録».
```

##### C
```
• Là gì? フーリエ変換 (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «フーリエ変換» (C) không thỏa: khớp đáp án «差分記録».
```

##### D
```
• Là gì? 量子化 (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «量子化» (D) không thỏa: khớp đáp án «差分記録».
```

**whatIs**
```
{
  "A": "ランレングス圧縮 (thuật ngữ JP).",
  "B": "差分記録 (thuật ngữ JP).",
  "C": "フーリエ変換 (thuật ngữ JP).",
  "D": "量子化 (thuật ngữ JP)."
}
```

**intent**
```
• Câu JIT: nắm định nghĩa/thứ tự/thuật ngữ CNTT.
• ghi sai phân (inter-frame)
```

**memoryTip**
```
(trống)
```

---

### 19/400 · `jit` id=185 · task=`pt` · num=2 · ans **A**

- **flags:** khop_dap_an
- **status:** `todo`

**Đề gốc**

```
「#」の記号はどのように読みますか。
```

**Options**

- **A.** シャープ ✅
- **B.** ハッシュ
- **C.** ポンド
- **D.** ナンバー

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Ký hiệu «#」 đọc như thế nào? |
| optionsVi.A | dấu thăng (#) |
| optionsVi.B | ハッシュ — khái niệm kỹ thuật |
| optionsVi.C | ポンド — khái niệm kỹ thuật |
| optionsVi.D | ナンバー — khái niệm kỹ thuật |
| answerDisplay | A. dấu thăng (#) |

**concept**
```
• dấu thăng (#)
• Thuật ngữ: dấu thăng (#).
```

**whyCorrect**
```
• Khái niệm CNTT trong đề thi JIT.
• Khớp stem: khớp đáp án «シャープ».
```

**whyWrong**

##### B
```
• Là gì? ハッシュ (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «ハッシュ» (B) không thỏa: khớp đáp án «シャープ».
```

##### C
```
• Là gì? ポンド (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «ポンド» (C) không thỏa: khớp đáp án «シャープ».
```

##### D
```
• Là gì? ナンバー (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «ナンバー» (D) không thỏa: khớp đáp án «シャープ».
```

**whatIs**
```
{
  "A": "シャープ (thuật ngữ JP).",
  "B": "ハッシュ (thuật ngữ JP).",
  "C": "ポンド (thuật ngữ JP).",
  "D": "ナンバー (thuật ngữ JP)."
}
```

**intent**
```
• Câu JIT: nắm định nghĩa/thứ tự/thuật ngữ CNTT.
• dấu thăng (#)
```

**memoryTip**
```
(trống)
```

---

### 20/400 · `jit` id=186 · task=`pt` · num=3 · ans **B**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
JISコードは、日本工業規格 JIS が定めたもので、（  ）bitの数字を（  ）桁ずつ区切って表します。
```

**Options**

- **A.** 8 - 4
- **B.** 16 - 8 ✅
- **C.** 32 - 16
- **D.** 16 - 4

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Điền từ: đơn vị ( … ) của lượng thông tin gọi là bit. |
| optionsVi.A | 8 - 4 |
| optionsVi.B | 16 - 8 |
| optionsVi.C | 32 - 16 |
| optionsVi.D | 16 - 4 |
| answerDisplay | B. 16 - 8 |

**concept**
```
• 16 - 8
• Nghĩa: 16 - 8.
```

**whyCorrect**
```
• Có vai trò riêng; đối chiếu với điều kiện stem.
• Khớp stem: khớp đáp án «16 - 8».
```

**whyWrong**

##### A
```
• Là gì? 8 - 4 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «8 - 4» (A) không thỏa: khớp đáp án «16 - 8».
```

##### C
```
• Là gì? 32 - 16 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «32 - 16» (C) không thỏa: khớp đáp án «16 - 8».
```

##### D
```
• Là gì? 16 - 4 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «16 - 4» (D) không thỏa: khớp đáp án «16 - 8».
```

**whatIs**
```
{
  "A": "8 - 4 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "16 - 8 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "32 - 16 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "16 - 4 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Câu JIT: nắm định nghĩa/thứ tự/thuật ngữ CNTT.
• 16 - 8
```

**memoryTip**
```
(trống)
```

---

### 21/400 · `jit` id=187 · task=`pt` · num=4 · ans **A**

- **flags:** khop_dap_an
- **status:** `todo`

**Đề gốc**

```
パリティビットには、どのような種類がありますか。
```

**Options**

- **A.** 奇数パリティと偶数パリティ ✅
- **B.** 縦パリティだけ
- **C.** 横パリティだけ
- **D.** パリティは1種類だけ

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Bit parity có những loại nào? |
| optionsVi.A | 奇数パリティと偶数パリティ — khái niệm kỹ thuật |
| optionsVi.B | 縦パリティだけ — khái niệm kỹ thuật |
| optionsVi.C | 横パリティだけ — khái niệm kỹ thuật |
| optionsVi.D | パリティは1種類だけ — khái niệm kỹ thuật |
| answerDisplay | A. 奇数パリティと偶数パリティ — khái niệm kỹ thuật |

**concept**
```
• parity lẻ
• Nghĩa: parity lẻ.
```

**whyCorrect**
```
• Khái niệm CNTT trong đề thi JIT.
• Khớp stem: khớp đáp án «奇数パリティと偶数パリティ».
```

**whyWrong**

##### B
```
• Là gì? 縦パリティだけ (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «縦パリティだけ» (B) không thỏa: khớp đáp án «奇数パリティと偶数パリティ».
```

##### C
```
• Là gì? 横パリティだけ (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «横パリティだけ» (C) không thỏa: khớp đáp án «奇数パリティと偶数パリティ».
```

##### D
```
• Là gì? パリティは1種類だけ (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «パリティは1種類だけ» (D) không thỏa: khớp đáp án «奇数パリティと偶数パリティ».
```

**whatIs**
```
{
  "A": "奇数パリティと偶数パリティ (thuật ngữ JP).",
  "B": "縦パリティだけ (thuật ngữ JP).",
  "C": "横パリティだけ (thuật ngữ JP).",
  "D": "パリティは1種類だけ (thuật ngữ JP)."
}
```

**intent**
```
• Câu JIT: nắm định nghĩa/thứ tự/thuật ngữ CNTT.
• parity lẻ
```

**memoryTip**
```
(trống)
```

---

### 22/400 · `jit` id=189 · task=`pt` · num=6 · ans **A**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
2進数10011と2進数101を乗算した結果の2進数はどれか。
```

**Options**

- **A.** 1011111 ✅
- **B.** 110011
- **C.** 10011
- **D.** 10101

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Chọn phương án đúng (xem câu gốc). |
| optionsVi.A | 1011111 |
| optionsVi.B | 110011 |
| optionsVi.C | 10011 |
| optionsVi.D | 10101 |
| answerDisplay | A. 1011111 |

**concept**
```
• 1011111
• Nghĩa: 1011111.
```

**whyCorrect**
```
• Có vai trò riêng; đối chiếu với điều kiện stem.
• Khớp stem: khớp đáp án «1011111».
```

**whyWrong**

##### B
```
• Là gì? 110011 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «110011» (B) không thỏa: khớp đáp án «1011111».
```

##### C
```
• Là gì? 10011 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «10011» (C) không thỏa: khớp đáp án «1011111».
```

##### D
```
• Là gì? 10101 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «10101» (D) không thỏa: khớp đáp án «1011111».
```

**whatIs**
```
{
  "A": "1011111 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "110011 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "10011 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "10101 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Câu JIT: nắm định nghĩa/thứ tự/thuật ngữ CNTT.
• 1011111
```

**memoryTip**
```
(trống)
```

---

### 23/400 · `jit` id=190 · task=`pt` · num=7 · ans **B**

- **flags:** khop_dap_an
- **status:** `todo`

**Đề gốc**

```
CDでは、傷や手の脂、埃などによってデータが正しく読み取れない場合があります。このような誤りを検出・訂正するための仕組みを何と言いますか。
```

**Options**

- **A.** パリティチェック
- **B.** 誤り検出・訂正機構 ✅
- **C.** ファイアウォール
- **D.** ランレングス圧縮

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Trên CD, dữ liệu có thể đọc sai vì xước/dầu/bụi. Cơ chế phát hiện/sửa lỗi như vậy gọi là gì? |
| optionsVi.A | パリティチェック — khái niệm kỹ thuật |
| optionsVi.B | cơ chế phát hiện/sửa lỗi |
| optionsVi.C | tường lửa |
| optionsVi.D | nén run-length |
| answerDisplay | B. cơ chế phát hiện/sửa lỗi |

**concept**
```
• cơ chế phát hiện/sửa lỗi
• Nghĩa: cơ chế phát hiện/sửa lỗi.
```

**whyCorrect**
```
• cơ chế phát hiện/sửa lỗi
• Đáp án B: cơ chế phát hiện/sửa lỗi
```

**whyWrong**

##### A
```
• Là gì? パリティチェック (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «パリティチェック» (A) không thỏa: khớp đáp án «誤り検出・訂正機構».
```

##### C
```
• Là gì? ファイアウォール (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «ファイアウォール» (C) không thỏa: khớp đáp án «誤り検出・訂正機構».
```

##### D
```
• Là gì? ランレングス圧縮 (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «ランレングス圧縮» (D) không thỏa: khớp đáp án «誤り検出・訂正機構».
```

**whatIs**
```
{
  "A": "パリティチェック (thuật ngữ JP).",
  "B": "誤り検出・訂正機構 (thuật ngữ JP).",
  "C": "ファイアウォール (thuật ngữ JP).",
  "D": "ランレングス圧縮 (thuật ngữ JP)."
}
```

**intent**
```
• Câu JIT: nắm định nghĩa/thứ tự/thuật ngữ CNTT.
• cơ chế phát hiện/sửa lỗi
```

**memoryTip**
```
(trống)
```

---

### 24/400 · `jit` id=191 · task=`pt` · num=8 · ans **B**

- **flags:** khop_dap_an
- **status:** `todo`

**Đề gốc**

```
通信回線の伝送誤りに対処するパリティチェック方式（垂直パリティ）の記述として、適切なものはどれか。
```

**Options**

- **A.** すべてのビット誤りを訂正できる
- **B.** 1ビットの誤りを検出できる ✅
- **C.** 2ビットの誤りを必ず検出できる
- **D.** 誤りを検出も訂正もできない

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Chọn phương án đúng (xem câu gốc). |
| optionsVi.A | sửa được mọi lỗi bit |
| optionsVi.B | phát hiện được lỗi 1 bit |
| optionsVi.C | chắc chắn phát hiện lỗi 2 bit |
| optionsVi.D | không phát hiện/sửa lỗi được |
| answerDisplay | B. phát hiện được lỗi 1 bit |

**concept**
```
• phát hiện được lỗi 1 bit
• Thuật ngữ: phát hiện được lỗi 1 bit.
```

**whyCorrect**
```
• phát hiện lỗi 1 bit (số bit 1 lẻ).
• phát hiện được lỗi 1 bit
• Đáp án B: phát hiện được lỗi 1 bit
```

**whyWrong**

##### A
```
• Là gì? すべてのビット誤りを訂正できる (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «すべてのビット誤りを訂正できる» (A) không thỏa: khớp đáp án «1ビットの誤りを検出できる».
```

##### C
```
• Là gì? 2ビットの誤りを必ず検出できる (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «2ビットの誤りを必ず検出できる» (C) không thỏa: khớp đáp án «1ビットの誤りを検出できる».
```

##### D
```
• Là gì? 誤りを検出も訂正もできない (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «誤りを検出も訂正もできない» (D) không thỏa: khớp đáp án «1ビットの誤りを検出できる».
```

**whatIs**
```
{
  "A": "すべてのビット誤りを訂正できる (thuật ngữ JP).",
  "B": "1ビットの誤りを検出できる (thuật ngữ JP).",
  "C": "2ビットの誤りを必ず検出できる (thuật ngữ JP).",
  "D": "誤りを検出も訂正もできない (thuật ngữ JP)."
}
```

**intent**
```
• Câu JIT: nắm định nghĩa/thứ tự/thuật ngữ CNTT.
• phát hiện được lỗi 1 bit
```

**memoryTip**
```
(trống)
```

---

### 25/400 · `jit` id=192 · task=`pt` · num=9 · ans **A**

- **flags:** khop_dap_an
- **status:** `todo`

**Đề gốc**

```
「giai thừa」は日本語の漢字でどのように読みますか。
```

**Options**

- **A.** 階乗（かいじょう） ✅
- **B.** 乗算（じょうざん）
- **C.** 因数（いんすう）
- **D.** 累乗（るいじょう）

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | «Giai thừa」 đọc bằng kanji tiếng Nhật như thế nào? |
| optionsVi.A | 階乗（かいじょう） — khái niệm kỹ thuật |
| optionsVi.B | phép nhân |
| optionsVi.C | 因数（いんすう） — khái niệm kỹ thuật |
| optionsVi.D | 累乗（るいじょう） — khái niệm kỹ thuật |
| answerDisplay | A. 階乗（かいじょう） — khái niệm kỹ thuật |

**concept**
```
• giai thừa
• Nghĩa: giai thừa.
```

**whyCorrect**
```
• Khái niệm CNTT trong đề thi JIT.
• Khớp stem: khớp đáp án «階乗（かいじょう）».
```

**whyWrong**

##### B
```
• Là gì? 乗算（じょうざん） (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «乗算（じょうざん）» (B) không thỏa: khớp đáp án «階乗（かいじょう）».
```

##### C
```
• Là gì? 因数（いんすう） (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «因数（いんすう）» (C) không thỏa: khớp đáp án «階乗（かいじょう）».
```

##### D
```
• Là gì? 累乗（るいじょう） (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «累乗（るいじょう）» (D) không thỏa: khớp đáp án «階乗（かいじょう）».
```

**whatIs**
```
{
  "A": "階乗（かいじょう） (thuật ngữ JP).",
  "B": "乗算（じょうざん） (thuật ngữ JP).",
  "C": "因数（いんすう） (thuật ngữ JP).",
  "D": "累乗（るいじょう） (thuật ngữ JP)."
}
```

**intent**
```
• Câu JIT: nắm định nghĩa/thứ tự/thuật ngữ CNTT.
• giai thừa
```

**memoryTip**
```
(trống)
```

---

### 26/400 · `jit` id=193 · task=`pt` · num=10 · ans **D**

- **flags:** khop_dap_an
- **status:** `todo`

**Đề gốc**

```
「論理和」は何ですか。
```

**Options**

- **A.** AND回路の演算
- **B.** NOT回路の演算
- **C.** XOR回路の演算
- **D.** OR回路の演算 ✅

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | « 」 (OR logic) là gì? |
| optionsVi.A | phép toán mạch AND |
| optionsVi.B | phép toán mạch NOT |
| optionsVi.C | phép toán mạch XOR |
| optionsVi.D | phép toán mạch OR |
| answerDisplay | D. phép toán mạch OR |

**concept**
```
• phép toán mạch OR
• Thuật ngữ: phép toán mạch OR.
```

**whyCorrect**
```
• phép toán mạch OR
• Đáp án D: phép toán mạch OR
```

**whyWrong**

##### A
```
• Là gì? AND回路の演算 (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «AND回路の演算» (A) không thỏa: khớp đáp án «OR回路の演算».
```

##### B
```
• Là gì? NOT回路の演算 (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «NOT回路の演算» (B) không thỏa: khớp đáp án «OR回路の演算».
```

##### C
```
• Là gì? XOR回路の演算 (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «XOR回路の演算» (C) không thỏa: khớp đáp án «OR回路の演算».
```

**whatIs**
```
{
  "A": "AND回路の演算 (thuật ngữ JP).",
  "B": "NOT回路の演算 (thuật ngữ JP).",
  "C": "XOR回路の演算 (thuật ngữ JP).",
  "D": "OR回路の演算 (thuật ngữ JP)."
}
```

**intent**
```
• Câu JIT: nắm định nghĩa/thứ tự/thuật ngữ CNTT.
• phép toán mạch OR
```

**memoryTip**
```
(trống)
```

---

### 27/400 · `jit` id=196 · task=`pt` · num=13 · ans **A**

- **flags:** khop_dap_an
- **status:** `todo`

**Đề gốc**

```
改行が何番のコードにあたるかなど、画面に直接表示できない記号は何と呼ばれますか。
```

**Options**

- **A.** 制御コード ✅
- **B.** 文字コード
- **C.** 圧縮コード
- **D.** パリティコード

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Ký hiệu không hiện trực tiếp trên màn (vd. mã xuống dòng) gọi là gì? |
| optionsVi.A | mã điều khiển |
| optionsVi.B | mã ký tự (character code) |
| optionsVi.C | mã nén |
| optionsVi.D | mã parity |
| answerDisplay | A. mã điều khiển |

**concept**
```
• mã điều khiển
• Nghĩa: mã điều khiển.
```

**whyCorrect**
```
• Khái niệm CNTT trong đề thi JIT.
• Khớp stem: khớp đáp án «制御コード».
```

**whyWrong**

##### B
```
• Là gì? 文字コード (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «文字コード» (B) không thỏa: khớp đáp án «制御コード».
```

##### C
```
• Là gì? 圧縮コード (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «圧縮コード» (C) không thỏa: khớp đáp án «制御コード».
```

##### D
```
• Là gì? パリティコード (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «パリティコード» (D) không thỏa: khớp đáp án «制御コード».
```

**whatIs**
```
{
  "A": "制御コード (thuật ngữ JP).",
  "B": "文字コード (thuật ngữ JP).",
  "C": "圧縮コード (thuật ngữ JP).",
  "D": "パリティコード (thuật ngữ JP)."
}
```

**intent**
```
• Câu JIT: nắm định nghĩa/thứ tự/thuật ngữ CNTT.
• mã điều khiển
```

**memoryTip**
```
(trống)
```

---

### 28/400 · `jit` id=197 · task=`pt` · num=14 · ans **D**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
世界の主要な言語で使われている文字を統一的に表す文字コードはどれか。
```

**Options**

- **A.** ASCII
- **B.** JIS
- **C.** EUC
- **D.** Unicode ✅

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | mã ký tự là cái nào? |
| optionsVi.A | ASCII |
| optionsVi.B | JIS |
| optionsVi.C | EUC |
| optionsVi.D | Unicode |
| answerDisplay | D. Unicode |

**concept**
```
• Mã ký tự: dữ liệu chữ được ghi dưới dạng dãy bit/số (0 và 1), không lưu «hình chữ» nguyên thủy.
• Unicode
```

**whyCorrect**
```
• Unicode
• Máy chỉ lưu mã số 0/1; «chữ» là cách diễn giải theo bảng mã (ASCII, Unicode…).
```

**whyWrong**

##### A
```
• Là gì? ASCII — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «ASCII» (A) không thỏa: khớp đáp án «Unicode».
```

##### B
```
• Là gì? JIS — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «JIS» (B) không thỏa: khớp đáp án «Unicode».
```

##### C
```
• Là gì? EUC — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «EUC» (C) không thỏa: khớp đáp án «Unicode».
```

**whatIs**
```
{
  "A": "ASCII — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "JIS — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "EUC — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Unicode — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Mã ký tự: quy tắc map ký tự ↔ mã số nhị phân.
• Chọn phát biểu đúng về bản chất lưu chữ trong máy tính.
```

**memoryTip**
```
• mã ký tự (character code) = mã ký tự
• Chữ trên màn hình ← decode dãy 0/1 theo bảng mã.
```

---

### 29/400 · `jit` id=198 · task=`pt` · num=15 · ans **C**

- **flags:** khop_dap_an
- **status:** `todo`

**Đề gốc**

```
マウスやキーボードの操作方法、ウィンドウの見え方などを決めるものを何と言いますか。
```

**Options**

- **A.** デバイスドライバ
- **B.** ミドルウェア
- **C.** ユーザインタフェース ✅
- **D.** ファイアウォール

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Cái quyết định cách dùng chuột/bàn phím, cách hiện cửa sổ… gọi là gì? |
| optionsVi.A | デバイスドライバ — khái niệm kỹ thuật |
| optionsVi.B | ミドルウェア — khái niệm kỹ thuật |
| optionsVi.C | giao diện người dùng (UI) |
| optionsVi.D | tường lửa |
| answerDisplay | C. giao diện người dùng (UI) |

**concept**
```
• giao diện người dùng (UI)
• Thuật ngữ: giao diện người dùng (UI).
```

**whyCorrect**
```
• giao diện người dùng (UI)
• Đáp án C: giao diện người dùng (UI)
```

**whyWrong**

##### A
```
• Là gì? デバイスドライバ (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «デバイスドライバ» (A) không thỏa: khớp đáp án «ユーザインタフェース».
```

##### B
```
• Là gì? ミドルウェア (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «ミドルウェア» (B) không thỏa: khớp đáp án «ユーザインタフェース».
```

##### D
```
• Là gì? ファイアウォール (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «ファイアウォール» (D) không thỏa: khớp đáp án «ユーザインタフェース».
```

**whatIs**
```
{
  "A": "デバイスドライバ (thuật ngữ JP).",
  "B": "ミドルウェア (thuật ngữ JP).",
  "C": "ユーザインタフェース (thuật ngữ JP).",
  "D": "ファイアウォール (thuật ngữ JP)."
}
```

**intent**
```
• Câu JIT: nắm định nghĩa/thứ tự/thuật ngữ CNTT.
• giao diện người dùng (UI)
```

**memoryTip**
```
(trống)
```

---

### 30/400 · `jit` id=201 · task=`pt` · num=18 · ans **A**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
「変調」は英語で何ですか。
```

**Options**

- **A.** modulation ✅
- **B.** modemlation
- **C.** moduration
- **D.** medulation

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | « 」 (modulation) tiếng Anh là gì? |
| optionsVi.A | modulation |
| optionsVi.B | modemlation |
| optionsVi.C | moduration |
| optionsVi.D | medulation |
| answerDisplay | A. modulation |

**concept**
```
• modulation
• Nghĩa: modulation.
```

**whyCorrect**
```
• Có vai trò riêng; đối chiếu với điều kiện stem.
• Khớp stem: khớp đáp án «modulation».
```

**whyWrong**

##### B
```
• Là gì? modemlation — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «modemlation» (B) không thỏa: khớp đáp án «modulation».
```

##### C
```
• Là gì? moduration — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «moduration» (C) không thỏa: khớp đáp án «modulation».
```

##### D
```
• Là gì? medulation — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «medulation» (D) không thỏa: khớp đáp án «modulation».
```

**whatIs**
```
{
  "A": "modulation — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "modemlation — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "moduration — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "medulation — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Câu JIT: nắm định nghĩa/thứ tự/thuật ngữ CNTT.
• modulation
```

**memoryTip**
```
(trống)
```

---

### 31/400 · `jit` id=202 · task=`pt` · num=19 · ans **C**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
映像データや音声データの圧縮方式として代表的なものはどれか。
```

**Options**

- **A.** JPEG
- **B.** GIF
- **C.** MPEG ✅
- **D.** BMP

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Chọn phương án đúng (xem câu gốc). |
| optionsVi.A | JPEG |
| optionsVi.B | GIF |
| optionsVi.C | MPEG |
| optionsVi.D | BMP |
| answerDisplay | C. MPEG |

**concept**
```
• MPEG
• Nghĩa: MPEG.
```

**whyCorrect**
```
• Có vai trò riêng; đối chiếu với điều kiện stem.
• Khớp stem: khớp đáp án «MPEG».
```

**whyWrong**

##### A
```
• Là gì? JPEG — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «JPEG» (A) không thỏa: khớp đáp án «MPEG».
```

##### B
```
• Là gì? GIF — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «GIF» (B) không thỏa: khớp đáp án «MPEG».
```

##### D
```
• Là gì? BMP — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «BMP» (D) không thỏa: khớp đáp án «MPEG».
```

**whatIs**
```
{
  "A": "JPEG — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "GIF — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "MPEG — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "BMP — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Câu JIT: nắm định nghĩa/thứ tự/thuật ngữ CNTT.
• MPEG
```

**memoryTip**
```
(trống)
```

---

### 32/400 · `jit` id=203 · task=`pt` · num=20 · ans **B**

- **flags:** khop_dap_an
- **status:** `todo`

**Đề gốc**

```
ネットワークの形態について、中心に集線装置を置き複数のコンピュータを接続する形態はどれか。
```

**Options**

- **A.** バス型
- **B.** スター型 ✅
- **C.** リング型
- **D.** メッシュ型

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | máy tính là cái nào? |
| optionsVi.A | mạng bus |
| optionsVi.B | mạng hình sao |
| optionsVi.C | mạng vòng |
| optionsVi.D | mạng lưới (mesh) |
| answerDisplay | B. mạng hình sao |

**concept**
```
• mạng hình sao
• Thuật ngữ: mạng hình sao.
```

**whyCorrect**
```
• Khái niệm CNTT trong đề thi JIT.
• Khớp stem: khớp đáp án «スター型».
```

**whyWrong**

##### A
```
• Là gì? バス型 (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «バス型» (A) không thỏa: khớp đáp án «スター型».
```

##### C
```
• Là gì? リング型 (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «リング型» (C) không thỏa: khớp đáp án «スター型».
```

##### D
```
• Là gì? メッシュ型 (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «メッシュ型» (D) không thỏa: khớp đáp án «スター型».
```

**whatIs**
```
{
  "A": "バス型 (thuật ngữ JP).",
  "B": "スター型 (thuật ngữ JP).",
  "C": "リング型 (thuật ngữ JP).",
  "D": "メッシュ型 (thuật ngữ JP)."
}
```

**intent**
```
• Câu JIT: nắm định nghĩa/thứ tự/thuật ngữ CNTT.
• mạng hình sao
```

**memoryTip**
```
(trống)
```

---

### 33/400 · `jit` id=205 · task=`pt` · num=22 · ans **C**

- **flags:** khop_dap_an
- **status:** `todo`

**Đề gốc**

```
一般に100 Kbps〜1 Mbps以上の通信速度を何と言いますか。
```

**Options**

- **A.** ナローバンド
- **B.** ダイアルアップ
- **C.** ブロードバンド ✅
- **D.** シリアル

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Tốc độ truyền khoảng 100 Kbps–1 Mbps trở lên thường gọi là gì? |
| optionsVi.A | ナローバンド — khái niệm kỹ thuật |
| optionsVi.B | ダイアルアップ — khái niệm kỹ thuật |
| optionsVi.C | ブロードバンド — khái niệm kỹ thuật |
| optionsVi.D | シリアル — khái niệm kỹ thuật |
| answerDisplay | C. ブロードバンド — khái niệm kỹ thuật |

**concept**
```
• broadband
• Thuật ngữ: broadband.
```

**whyCorrect**
```
• Khái niệm CNTT trong đề thi JIT.
• Khớp stem: khớp đáp án «ブロードバンド».
```

**whyWrong**

##### A
```
• Là gì? ナローバンド (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «ナローバンド» (A) không thỏa: khớp đáp án «ブロードバンド».
```

##### B
```
• Là gì? ダイアルアップ (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «ダイアルアップ» (B) không thỏa: khớp đáp án «ブロードバンド».
```

##### D
```
• Là gì? シリアル (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «シリアル» (D) không thỏa: khớp đáp án «ブロードバンド».
```

**whatIs**
```
{
  "A": "ナローバンド (thuật ngữ JP).",
  "B": "ダイアルアップ (thuật ngữ JP).",
  "C": "ブロードバンド (thuật ngữ JP).",
  "D": "シリアル (thuật ngữ JP)."
}
```

**intent**
```
• Câu JIT: nắm định nghĩa/thứ tự/thuật ngữ CNTT.
• broadband
```

**memoryTip**
```
(trống)
```

---

### 34/400 · `jit` id=206 · task=`pt` · num=23 · ans **B**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
プリンタの解像度をドット数で表す単位は何といいますか。
```

**Options**

- **A.** bps
- **B.** dpi ✅
- **C.** Hz
- **D.** fps

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Đơn vị đo độ phân giải máy in theo số chấm gọi là gì? |
| optionsVi.A | bps |
| optionsVi.B | dpi |
| optionsVi.C | Hz |
| optionsVi.D | fps |
| answerDisplay | B. dpi |

**concept**
```
• dpi
• Nghĩa: dpi.
```

**whyCorrect**
```
• Có vai trò riêng; đối chiếu với điều kiện stem.
• Khớp stem: khớp đáp án «dpi».
```

**whyWrong**

##### A
```
• Là gì? bps — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «bps» (A) không thỏa: khớp đáp án «dpi».
```

##### C
```
• Là gì? Hz — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Hz» (C) không thỏa: khớp đáp án «dpi».
```

##### D
```
• Là gì? fps — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «fps» (D) không thỏa: khớp đáp án «dpi».
```

**whatIs**
```
{
  "A": "bps — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "dpi — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Hz — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "fps — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Câu JIT: nắm định nghĩa/thứ tự/thuật ngữ CNTT.
• dpi
```

**memoryTip**
```
(trống)
```

---

### 35/400 · `jit` id=207 · task=`pt` · num=24 · ans **C**

- **flags:** khop_dap_an
- **status:** `todo`

**Đề gốc**

```
情報量の（  ）単位のことをビット(bit)といいます。
```

**Options**

- **A.** 最大
- **B.** 平均
- **C.** 最小 ✅
- **D.** 可変

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Điền từ: đơn vị ( … ) của lượng thông tin gọi là bit. |
| optionsVi.A | 最大 — khái niệm kỹ thuật |
| optionsVi.B | trung bình |
| optionsVi.C | 最小 — khái niệm kỹ thuật |
| optionsVi.D | biến thiên |
| answerDisplay | C. 最小 — khái niệm kỹ thuật |

**concept**
```
• nhỏ nhất
• Nghĩa: nhỏ nhất.
```

**whyCorrect**
```
• Khái niệm CNTT trong đề thi JIT.
• Khớp stem: khớp đáp án «最小».
```

**whyWrong**

##### A
```
• Là gì? 最大 (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «最大» (A) không thỏa: khớp đáp án «最小».
```

##### B
```
• Là gì? 平均 (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «平均» (B) không thỏa: khớp đáp án «最小».
```

##### D
```
• Là gì? 可変 (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «可変» (D) không thỏa: khớp đáp án «最小».
```

**whatIs**
```
{
  "A": "最大 (thuật ngữ JP).",
  "B": "平均 (thuật ngữ JP).",
  "C": "最小 (thuật ngữ JP).",
  "D": "可変 (thuật ngữ JP)."
}
```

**intent**
```
• Câu JIT: nắm định nghĩa/thứ tự/thuật ngữ CNTT.
• nhỏ nhất
```

**memoryTip**
```
(trống)
```

---

### 36/400 · `jit` id=208 · task=`pt` · num=25 · ans **C**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
A〜Zの26種類の文字を表現するには最低何ビット必要か。
```

**Options**

- **A.** 3
- **B.** 4
- **C.** 5 ✅
- **D.** 8

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Để biểu diễn 26 chữ A–Z cần tối thiểu bao nhiêu bit? |
| optionsVi.A | 3 |
| optionsVi.B | 4 |
| optionsVi.C | 5 |
| optionsVi.D | 8 |
| answerDisplay | C. 5 |

**concept**
```
• 5 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
```

**whyCorrect**
```
• Có vai trò riêng; đối chiếu với điều kiện stem.
• Khớp stem: khớp đáp án «5».
```

**whyWrong**

##### A
```
• Là gì? 3 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «3» (A) không thỏa: khớp đáp án «5».
```

##### B
```
• Là gì? 4 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «4» (B) không thỏa: khớp đáp án «5».
```

##### D
```
• Là gì? 8 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «8» (D) không thỏa: khớp đáp án «5».
```

**whatIs**
```
{
  "A": "3 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "4 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "5 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "8 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Câu JIT: nắm định nghĩa/thứ tự/thuật ngữ CNTT.
• 5
```

**memoryTip**
```
(trống)
```

---

### 37/400 · `jit` id=209 · task=`pt` · num=26 · ans **B**

- **flags:** khop_dap_an
- **status:** `todo`

**Đề gốc**

```
ある音をコンピュータのファイルに記録するとき、符号化ビット数（量子化ビット数）を大きくするとどうなるか。
```

**Options**

- **A.** サンプリング周波数だけが上がる
- **B.** 音の振幅をより細かく記録できる ✅
- **C.** 必ずファイルが小さくなる
- **D.** 音程だけが変わる

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Khi ghi âm thành file, tăng số bit mã hóa (lượng tử hóa) thì điều gì xảy ra? |
| optionsVi.A | サンプリング周波数だけが上がる — khái niệm kỹ thuật |
| optionsVi.B | ghi biên độ âm chi tiết hơn |
| optionsVi.C | 必ずファイルが小さくなる — khái niệm kỹ thuật |
| optionsVi.D | chỉ đổi cao độ |
| answerDisplay | B. ghi biên độ âm chi tiết hơn |

**concept**
```
• ghi biên độ âm chi tiết hơn
• Nghĩa: ghi biên độ âm chi tiết hơn.
```

**whyCorrect**
```
• biên độ chi tiết hơn.
• ghi biên độ âm chi tiết hơn
• Đáp án B: ghi biên độ âm chi tiết hơn
```

**whyWrong**

##### A
```
• Là gì? サンプリング周波数だけが上がる (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «サンプリング周波数だけが上がる» (A) không thỏa: khớp đáp án «音の振幅をより細かく記録できる».
```

##### C
```
• Là gì? 必ずファイルが小さくなる (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «必ずファイルが小さくなる» (C) không thỏa: khớp đáp án «音の振幅をより細かく記録できる».
```

##### D
```
• Là gì? 音程だけが変わる (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «音程だけが変わる» (D) không thỏa: khớp đáp án «音の振幅をより細かく記録できる».
```

**whatIs**
```
{
  "A": "サンプリング周波数だけが上がる (thuật ngữ JP).",
  "B": "音の振幅をより細かく記録できる (thuật ngữ JP).",
  "C": "必ずファイルが小さくなる (thuật ngữ JP).",
  "D": "音程だけが変わる (thuật ngữ JP)."
}
```

**intent**
```
• Câu JIT: nắm định nghĩa/thứ tự/thuật ngữ CNTT.
• ghi biên độ âm chi tiết hơn
```

**memoryTip**
```
(trống)
```

---

### 38/400 · `jit` id=210 · task=`pt` · num=27 · ans **A**

- **flags:** khop_dap_an
- **status:** `todo`

**Đề gốc**

```
（  ）とは、数値を扱う際に「基となる数」のことである。
```

**Options**

- **A.** 基数 ✅
- **B.** 対数
- **C.** 素数
- **D.** 倍数

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Điền từ thích hợp vào chỗ trống (xem câu gốc). |
| optionsVi.A | cơ số |
| optionsVi.B | 対数 — khái niệm kỹ thuật |
| optionsVi.C | số nguyên tố |
| optionsVi.D | 倍数 — khái niệm kỹ thuật |
| answerDisplay | A. cơ số |

**concept**
```
• cơ số
• Thuật ngữ: cơ số.
```

**whyCorrect**
```
• Khái niệm CNTT trong đề thi JIT.
• Khớp stem: khớp đáp án «基数».
```

**whyWrong**

##### B
```
• Là gì? 対数 (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «対数» (B) không thỏa: khớp đáp án «基数».
```

##### C
```
• Là gì? 素数 (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «素数» (C) không thỏa: khớp đáp án «基数».
```

##### D
```
• Là gì? 倍数 (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «倍数» (D) không thỏa: khớp đáp án «基数».
```

**whatIs**
```
{
  "A": "基数 (thuật ngữ JP).",
  "B": "対数 (thuật ngữ JP).",
  "C": "素数 (thuật ngữ JP).",
  "D": "倍数 (thuật ngữ JP)."
}
```

**intent**
```
• Câu JIT: nắm định nghĩa/thứ tự/thuật ngữ CNTT.
• cơ số
```

**memoryTip**
```
(trống)
```

---

### 39/400 · `jit` id=211 · task=`pt` · num=28 · ans **D**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
「プロキシサーバ」はベトナム語で何と言いますか。
```

**Options**

- **A.** máy chủ web
- **B.** máy chủ thư
- **C.** máy chủ tên miền
- **D.** máy chủ trung gian ✅

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | «Proxy server」 tiếng Việt gọi là gì? |
| optionsVi.A | máy chủ web |
| optionsVi.B | máy chủ thư |
| optionsVi.C | máy chủ tên miền |
| optionsVi.D | máy chủ trung gian |
| answerDisplay | D. máy chủ trung gian |

**concept**
```
• máy chủ trung gian
• Nghĩa: máy chủ trung gian.
```

**whyCorrect**
```
• máy chủ trung gian.
• Đáp án D: máy chủ trung gian
```

**whyWrong**

##### A
```
• Là gì? máy chủ web — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «máy chủ web» (A) không thỏa: khớp đáp án «máy chủ trung gian».
```

##### B
```
• Là gì? máy chủ thư — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «máy chủ thư» (B) không thỏa: khớp đáp án «máy chủ trung gian».
```

##### C
```
• Là gì? máy chủ tên miền — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «máy chủ tên miền» (C) không thỏa: khớp đáp án «máy chủ trung gian».
```

**whatIs**
```
{
  "A": "máy chủ web — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "máy chủ thư — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "máy chủ tên miền — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "máy chủ trung gian — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Câu JIT: nắm định nghĩa/thứ tự/thuật ngữ CNTT.
• máy chủ trung gian
```

**memoryTip**
```
(trống)
```

---

### 40/400 · `jit` id=212 · task=`pt` · num=29 · ans **B**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
「CRC」は英語でなんですか。
```

**Options**

- **A.** Cyclic Redundance Check
- **B.** Cyclic Redundancy Check ✅
- **C.** Circle Redundancy Check
- **D.** Code Redundancy Control

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | CRC viết tắt tiếng Anh là gì? |
| optionsVi.A | Cyclic Redundance Check |
| optionsVi.B | Cyclic Redundancy Check |
| optionsVi.C | Circle Redundancy Check |
| optionsVi.D | Code Redundancy Control |
| answerDisplay | B. Cyclic Redundancy Check |

**concept**
```
• Cyclic Redundancy Check
• Nghĩa: Cyclic Redundancy Check.
```

**whyCorrect**
```
• Cyclic Redundancy Check
• Đáp án B: Cyclic Redundancy Check
```

**whyWrong**

##### A
```
• Là gì? Cyclic Redundance Check — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Cyclic Redundance Check» (A) không thỏa: khớp đáp án «Cyclic Redundancy Check».
```

##### C
```
• Là gì? Circle Redundancy Check — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Circle Redundancy Check» (C) không thỏa: khớp đáp án «Cyclic Redundancy Check».
```

##### D
```
• Là gì? Code Redundancy Control — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Code Redundancy Control» (D) không thỏa: khớp đáp án «Cyclic Redundancy Check».
```

**whatIs**
```
{
  "A": "Cyclic Redundance Check — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Cyclic Redundancy Check — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Circle Redundancy Check — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Code Redundancy Control — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Câu JIT: nắm định nghĩa/thứ tự/thuật ngữ CNTT.
• Cyclic Redundancy Check
```

**memoryTip**
```
(trống)
```

---

### 41/400 · `jit` id=213 · task=`pt` · num=30 · ans **D**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
電源が切れたとき、データが消えてしまうものは何ですか。
```

**Options**

- **A.** GPU
- **B.** IC
- **C.** ROM
- **D.** RAM ✅

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Khi tắt nguồn, dữ liệu bị mất — đó là gì? |
| optionsVi.A | GPU |
| optionsVi.B | IC |
| optionsVi.C | ROM |
| optionsVi.D | RAM |
| answerDisplay | D. RAM |

**concept**
```
• RAM
• Nghĩa: RAM.
```

**whyCorrect**
```
• Có vai trò riêng; đối chiếu với điều kiện stem.
• Khớp stem: khớp đáp án «RAM».
```

**whyWrong**

##### A
```
• Là gì? GPU — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «GPU» (A) không thỏa: khớp đáp án «RAM».
```

##### B
```
• Là gì? IC — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «IC» (B) không thỏa: khớp đáp án «RAM».
```

##### C
```
• Là gì? ROM — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «ROM» (C) không thỏa: khớp đáp án «RAM».
```

**whatIs**
```
{
  "A": "GPU — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "IC — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "ROM — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "RAM — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Câu JIT: nắm định nghĩa/thứ tự/thuật ngữ CNTT.
• RAM
```

**memoryTip**
```
(trống)
```

---

### 42/400 · `jit` id=215 · task=`pt` · num=32 · ans **C**

- **flags:** khop_dap_an
- **status:** `todo`

**Đề gốc**

```
見かけ上の記憶容量を実際のメモリ容量より大きくし、大きなメモリ空間を確保することを何と言いますか。
```

**Options**

- **A.** キャッシュ
- **B.** スワッピングのみ
- **C.** 仮想記憶 ✅
- **D.** デフラグ

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Làm dung lượng nhớ «ảo」 lớn hơn RAM thật để có không gian nhớ lớn — gọi là gì? |
| optionsVi.A | bộ nhớ đệm (cache) |
| optionsVi.B | スワッピングのみ — khái niệm kỹ thuật |
| optionsVi.C | bộ nhớ ảo |
| optionsVi.D | デフラグ — khái niệm kỹ thuật |
| answerDisplay | C. bộ nhớ ảo |

**concept**
```
• bộ nhớ ảo
• Nghĩa: bộ nhớ ảo.
```

**whyCorrect**
```
• Khái niệm CNTT trong đề thi JIT.
• Khớp stem: khớp đáp án «仮想記憶».
```

**whyWrong**

##### A
```
• Là gì? キャッシュ (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «キャッシュ» (A) không thỏa: khớp đáp án «仮想記憶».
```

##### B
```
• Là gì? スワッピングのみ (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «スワッピングのみ» (B) không thỏa: khớp đáp án «仮想記憶».
```

##### D
```
• Là gì? デフラグ (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «デフラグ» (D) không thỏa: khớp đáp án «仮想記憶».
```

**whatIs**
```
{
  "A": "キャッシュ (thuật ngữ JP).",
  "B": "スワッピングのみ (thuật ngữ JP).",
  "C": "仮想記憶 (thuật ngữ JP).",
  "D": "デフラグ (thuật ngữ JP)."
}
```

**intent**
```
• Câu JIT: nắm định nghĩa/thứ tự/thuật ngữ CNTT.
• bộ nhớ ảo
```

**memoryTip**
```
(trống)
```

---

### 43/400 · `jit` id=216 · task=`pt` · num=33 · ans **A**

- **flags:** khop_dap_an
- **status:** `todo`

**Đề gốc**

```
ぎざぎざの少ないきれいな画像を得るには何を増やすとよいか。
```

**Options**

- **A.** 画素数 ✅
- **B.** パリティビット
- **C.** プロトコル数
- **D.** ドメイン名

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Muốn ảnh mịn, ít răng cưa thì nên tăng cái gì? |
| optionsVi.A | số điểm ảnh (pixel) |
| optionsVi.B | パリティビット — khái niệm kỹ thuật |
| optionsVi.C | số lượng giao thức |
| optionsVi.D | tên miền |
| answerDisplay | A. số điểm ảnh (pixel) |

**concept**
```
• Số điểm ảnh (pixel count): độ chi tiết không gian của ảnh số.
• Tăng số pixel → ảnh mịn hơn, ít răng cưa (aliasing).
```

**whyCorrect**
```
• số điểm ảnh (pixel)
• Ảnh số là lưới điểm; nhiều điểm hơn → đường biên mượt, ít «răng cưa».
• Parity bit / số giao thức / tên miền không quyết định độ mịn ảnh.
```

**whyWrong**

##### B
```
• Là gì? パリティビット (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «パリティビット» (B) không thỏa: khớp đáp án «画素数».
```

##### C
```
• Là gì? プロトコル数 (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «プロトコル数» (C) không thỏa: khớp đáp án «画素数».
```

##### D
```
• Là gì? ドメイン名 (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «ドメイン名» (D) không thỏa: khớp đáp án «画素数».
```

**whatIs**
```
{
  "A": "画素数 (thuật ngữ JP).",
  "B": "パリティビット (thuật ngữ JP).",
  "C": "プロトコル数 (thuật ngữ JP).",
  "D": "ドメイン名 (thuật ngữ JP)."
}
```

**intent**
```
• Chất lượng ảnh số: càng nhiều pixel (số điểm ảnh) càng mịn, ít răng cưa.
• Không nhầm với parity bit, số giao thức hay tên miền.
```

**memoryTip**
```
• Ảnh đẹp ít răng cưa → tăng số pixel (độ phân giải).
• Parity = lỗi bit; domain = tên miền; protocol = giao thức.
```

---

### 44/400 · `jit` id=217 · task=`pt` · num=34 · ans **A**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
10進数のマイナス5を、2の補数表現で8ビットの2進数で表すとどうなるか。
```

**Options**

- **A.** 11111011 ✅
- **B.** 11111010
- **C.** 10000101
- **D.** 00000101

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Số thập phân −5 biểu diễn bù 2 bằng 8 bit nhị phân là gì? |
| optionsVi.A | 11111011 |
| optionsVi.B | 11111010 |
| optionsVi.C | 10000101 |
| optionsVi.D | 00000101 |
| answerDisplay | A. 11111011 |

**concept**
```
• 11111011
• Nghĩa: 11111011.
```

**whyCorrect**
```
• Có vai trò riêng; đối chiếu với điều kiện stem.
• Khớp stem: khớp đáp án «11111011».
```

**whyWrong**

##### B
```
• Là gì? 11111010 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «11111010» (B) không thỏa: khớp đáp án «11111011».
```

##### C
```
• Là gì? 10000101 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «10000101» (C) không thỏa: khớp đáp án «11111011».
```

##### D
```
• Là gì? 00000101 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «00000101» (D) không thỏa: khớp đáp án «11111011».
```

**whatIs**
```
{
  "A": "11111011 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "11111010 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "10000101 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "00000101 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Câu JIT: nắm định nghĩa/thứ tự/thuật ngữ CNTT.
• 11111011
```

**memoryTip**
```
(trống)
```

---

### 45/400 · `jit` id=218 · task=`pt` · num=35 · ans **C**

- **flags:** khop_dap_an
- **status:** `todo`

**Đề gốc**

```
音声を圧縮する際によく使われる、波を正弦波に分解する変換は何ですか。
```

**Options**

- **A.** ランレングス
- **B.** ハフマン符号
- **C.** フーリエ変換 ✅
- **D.** パリティ

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Phép biến đổi thường dùng khi nén âm, phân rã sóng thành sine — là gì? |
| optionsVi.A | ランレングス — khái niệm kỹ thuật |
| optionsVi.B | mã Huffman |
| optionsVi.C | biến đổi Fourier |
| optionsVi.D | パリティ — khái niệm kỹ thuật |
| answerDisplay | C. biến đổi Fourier |

**concept**
```
• biến đổi Fourier
• Thuật ngữ: biến đổi Fourier.
```

**whyCorrect**
```
• biến đổi Fourier
• Đáp án C: biến đổi Fourier
```

**whyWrong**

##### A
```
• Là gì? ランレングス (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «ランレングス» (A) không thỏa: khớp đáp án «フーリエ変換».
```

##### B
```
• Là gì? ハフマン符号 (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «ハフマン符号» (B) không thỏa: khớp đáp án «フーリエ変換».
```

##### D
```
• Là gì? パリティ (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «パリティ» (D) không thỏa: khớp đáp án «フーリエ変換».
```

**whatIs**
```
{
  "A": "ランレングス (thuật ngữ JP).",
  "B": "ハフマン符号 (thuật ngữ JP).",
  "C": "フーリエ変換 (thuật ngữ JP).",
  "D": "パリティ (thuật ngữ JP)."
}
```

**intent**
```
• Câu JIT: nắm định nghĩa/thứ tự/thuật ngữ CNTT.
• biến đổi Fourier
```

**memoryTip**
```
(trống)
```

---

### 46/400 · `jit` id=219 · task=`pt` · num=36 · ans **B**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
2進数100001を3倍したものはどれか。
```

**Options**

- **A.** 1000010
- **B.** 1100011 ✅
- **C.** 111111
- **D.** 1000011

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Chọn phương án đúng (xem câu gốc). |
| optionsVi.A | 1000010 |
| optionsVi.B | 1100011 |
| optionsVi.C | 111111 |
| optionsVi.D | 1000011 |
| answerDisplay | B. 1100011 |

**concept**
```
• 1100011
• Nghĩa: 1100011.
```

**whyCorrect**
```
• Có vai trò riêng; đối chiếu với điều kiện stem.
• Khớp stem: khớp đáp án «1100011».
```

**whyWrong**

##### A
```
• Là gì? 1000010 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «1000010» (A) không thỏa: khớp đáp án «1100011».
```

##### C
```
• Là gì? 111111 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «111111» (C) không thỏa: khớp đáp án «1100011».
```

##### D
```
• Là gì? 1000011 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «1000011» (D) không thỏa: khớp đáp án «1100011».
```

**whatIs**
```
{
  "A": "1000010 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "1100011 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "111111 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "1000011 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Câu JIT: nắm định nghĩa/thứ tự/thuật ngữ CNTT.
• 1100011
```

**memoryTip**
```
(trống)
```

---

### 47/400 · `jit` id=220 · task=`pt` · num=37 · ans **B**

- **flags:** khop_dap_an
- **status:** `todo`

**Đề gốc**

```
装置Aと装置Bが直列につながっているシステムを何と言いますか。
```

**Options**

- **A.** 並列システム
- **B.** 直列システム ✅
- **C.** 集中システム
- **D.** 分散システム

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Hệ thiết bị A và B nối tiếp gọi là gì? |
| optionsVi.A | 並列システム — khái niệm kỹ thuật |
| optionsVi.B | 直列システム — khái niệm kỹ thuật |
| optionsVi.C | 集中システム — khái niệm kỹ thuật |
| optionsVi.D | hệ thống phân tán |
| answerDisplay | B. 直列システム — khái niệm kỹ thuật |

**concept**
```
• hệ thống nối tiếp
• Thuật ngữ: hệ thống nối tiếp.
```

**whyCorrect**
```
• hệ thống nối tiếp
• Đáp án B: hệ thống nối tiếp
```

**whyWrong**

##### A
```
• Là gì? 並列システム (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «並列システム» (A) không thỏa: khớp đáp án «直列システム».
```

##### C
```
• Là gì? 集中システム (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «集中システム» (C) không thỏa: khớp đáp án «直列システム».
```

##### D
```
• Là gì? 分散システム (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «分散システム» (D) không thỏa: khớp đáp án «直列システム».
```

**whatIs**
```
{
  "A": "並列システム (thuật ngữ JP).",
  "B": "直列システム (thuật ngữ JP).",
  "C": "集中システム (thuật ngữ JP).",
  "D": "分散システム (thuật ngữ JP)."
}
```

**intent**
```
• Câu JIT: nắm định nghĩa/thứ tự/thuật ngữ CNTT.
• hệ thống nối tiếp
```

**memoryTip**
```
(trống)
```

---

### 48/400 · `jit` id=221 · task=`pt` · num=38 · ans **B**

- **flags:** khop_dap_an
- **status:** `todo`

**Đề gốc**

```
装置Aと装置Bが並列につながっているシステムを何と言いますか。
```

**Options**

- **A.** 直列システム
- **B.** 並列システム ✅
- **C.** 集中システム
- **D.** 分散システム

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Hệ thiết bị A và B song song gọi là gì? |
| optionsVi.A | 直列システム — khái niệm kỹ thuật |
| optionsVi.B | 並列システム — khái niệm kỹ thuật |
| optionsVi.C | 集中システム — khái niệm kỹ thuật |
| optionsVi.D | hệ thống phân tán |
| answerDisplay | B. 並列システム — khái niệm kỹ thuật |

**concept**
```
• hệ thống song song
• Thuật ngữ: hệ thống song song.
```

**whyCorrect**
```
• hệ thống song song
• Đáp án B: hệ thống song song
```

**whyWrong**

##### A
```
• Là gì? 直列システム (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «直列システム» (A) không thỏa: khớp đáp án «並列システム».
```

##### C
```
• Là gì? 集中システム (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «集中システム» (C) không thỏa: khớp đáp án «並列システム».
```

##### D
```
• Là gì? 分散システム (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «分散システム» (D) không thỏa: khớp đáp án «並列システム».
```

**whatIs**
```
{
  "A": "直列システム (thuật ngữ JP).",
  "B": "並列システム (thuật ngữ JP).",
  "C": "集中システム (thuật ngữ JP).",
  "D": "分散システム (thuật ngữ JP)."
}
```

**intent**
```
• Câu JIT: nắm định nghĩa/thứ tự/thuật ngữ CNTT.
• hệ thống song song
```

**memoryTip**
```
(trống)
```

---

### 49/400 · `jit` id=222 · task=`pt` · num=39 · ans **D**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
イラストなどに使われる、最大表示色が256色の静止画圧縮形式はどれか。
```

**Options**

- **A.** JPEG
- **B.** BMP
- **C.** MPEG
- **D.** GIF ✅

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Chọn phương án đúng (xem câu gốc). |
| optionsVi.A | JPEG |
| optionsVi.B | BMP |
| optionsVi.C | MPEG |
| optionsVi.D | GIF |
| answerDisplay | D. GIF |

**concept**
```
• GIF
• Nghĩa: GIF.
```

**whyCorrect**
```
• Có vai trò riêng; đối chiếu với điều kiện stem.
• Khớp stem: khớp đáp án «GIF».
```

**whyWrong**

##### A
```
• Là gì? JPEG — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «JPEG» (A) không thỏa: khớp đáp án «GIF».
```

##### B
```
• Là gì? BMP — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «BMP» (B) không thỏa: khớp đáp án «GIF».
```

##### C
```
• Là gì? MPEG — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «MPEG» (C) không thỏa: khớp đáp án «GIF».
```

**whatIs**
```
{
  "A": "JPEG — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "BMP — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "MPEG — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "GIF — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Câu JIT: nắm định nghĩa/thứ tự/thuật ngữ CNTT.
• GIF
```

**memoryTip**
```
(trống)
```

---

### 50/400 · `jit` id=223 · task=`pt` · num=40 · ans **B**

- **flags:** khop_dap_an
- **status:** `todo`

**Đề gốc**

```
波の高さの最大値をいくつの段階で表すかを何と言いますか。
```

**Options**

- **A.** サンプリング周波数
- **B.** 量子化数 ✅
- **C.** フレームレート
- **D.** ビットレート

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Số mức dùng để biểu diễn biên độ đỉnh sóng gọi là gì? |
| optionsVi.A | サンプリング周波数 — khái niệm kỹ thuật |
| optionsVi.B | số mức lượng tử hóa |
| optionsVi.C | frame rate (tốc độ khung hình) |
| optionsVi.D | bit rate (tốc độ bit) |
| answerDisplay | B. số mức lượng tử hóa |

**concept**
```
• số mức lượng tử hóa
• Thuật ngữ: số mức lượng tử hóa.
```

**whyCorrect**
```
• số mức lượng tử hóa
• Đáp án B: số mức lượng tử hóa
```

**whyWrong**

##### A
```
• Là gì? サンプリング周波数 (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «サンプリング周波数» (A) không thỏa: khớp đáp án «量子化数».
```

##### C
```
• Là gì? フレームレート (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «フレームレート» (C) không thỏa: khớp đáp án «量子化数».
```

##### D
```
• Là gì? ビットレート (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «ビットレート» (D) không thỏa: khớp đáp án «量子化数».
```

**whatIs**
```
{
  "A": "サンプリング周波数 (thuật ngữ JP).",
  "B": "量子化数 (thuật ngữ JP).",
  "C": "フレームレート (thuật ngữ JP).",
  "D": "ビットレート (thuật ngữ JP)."
}
```

**intent**
```
• Câu JIT: nắm định nghĩa/thứ tự/thuật ngữ CNTT.
• số mức lượng tử hóa
```

**memoryTip**
```
(trống)
```

---

### 51/400 · `jit` id=224 · task=`pt` · num=41 · ans **C**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
2バイトで1文字を表すとき、何種類の文字まで表せるか。
```

**Options**

- **A.** 256
- **B.** 1,024
- **C.** 65,536 ✅
- **D.** 16,777,216

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | 1 ký tự = 2 byte thì biểu diễn được tối đa bao nhiêu loại ký tự? |
| optionsVi.A | 256 |
| optionsVi.B | 1,024 |
| optionsVi.C | 65,536 |
| optionsVi.D | 16,777,216 |
| answerDisplay | C. 65,536 |

**concept**
```
• 65,536
• Nghĩa: 65,536.
```

**whyCorrect**
```
• Có vai trò riêng; đối chiếu với điều kiện stem.
• Khớp stem: khớp đáp án «65,536».
```

**whyWrong**

##### A
```
• Là gì? 256 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «256» (A) không thỏa: khớp đáp án «65,536».
```

##### B
```
• Là gì? 1,024 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «1,024» (B) không thỏa: khớp đáp án «65,536».
```

##### D
```
• Là gì? 16,777,216 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «16,777,216» (D) không thỏa: khớp đáp án «65,536».
```

**whatIs**
```
{
  "A": "256 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "1,024 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "65,536 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "16,777,216 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Câu JIT: nắm định nghĩa/thứ tự/thuật ngữ CNTT.
• 65,536
```

**memoryTip**
```
(trống)
```

---

### 52/400 · `jit` id=225 · task=`pt` · num=42 · ans **A**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
10進数155を2進数で表したものはどれか。
```

**Options**

- **A.** 10011011 ✅
- **B.** 10011100
- **C.** 10101011
- **D.** 11001011

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | hệ thập phân là cái nào? |
| optionsVi.A | 10011011 |
| optionsVi.B | 10011100 |
| optionsVi.C | 10101011 |
| optionsVi.D | 11001011 |
| answerDisplay | A. 10011011 |

**concept**
```
• 10011011
• Nghĩa: 10011011.
```

**whyCorrect**
```
• Có vai trò riêng; đối chiếu với điều kiện stem.
• Khớp stem: khớp đáp án «10011011».
```

**whyWrong**

##### B
```
• Là gì? 10011100 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «10011100» (B) không thỏa: khớp đáp án «10011011».
```

##### C
```
• Là gì? 10101011 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «10101011» (C) không thỏa: khớp đáp án «10011011».
```

##### D
```
• Là gì? 11001011 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «11001011» (D) không thỏa: khớp đáp án «10011011».
```

**whatIs**
```
{
  "A": "10011011 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "10011100 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "10101011 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "11001011 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Câu JIT: nắm định nghĩa/thứ tự/thuật ngữ CNTT.
• 10011011
```

**memoryTip**
```
(trống)
```

---

### 53/400 · `jit` id=226 · task=`pt` · num=43 · ans **A**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
2進数1.111を10進数で表現したものはどれか。
```

**Options**

- **A.** 1.875 ✅
- **B.** 1.75
- **C.** 1.5
- **D.** 2.0

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Chọn phương án đúng (xem câu gốc). |
| optionsVi.A | 1.875 |
| optionsVi.B | 1.75 |
| optionsVi.C | 1.5 |
| optionsVi.D | 2.0 |
| answerDisplay | A. 1.875 |

**concept**
```
• 1.875
• Nghĩa: 1.875.
```

**whyCorrect**
```
• Có vai trò riêng; đối chiếu với điều kiện stem.
• Khớp stem: khớp đáp án «1.875».
```

**whyWrong**

##### B
```
• Là gì? 1.75 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «1.75» (B) không thỏa: khớp đáp án «1.875».
```

##### C
```
• Là gì? 1.5 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «1.5» (C) không thỏa: khớp đáp án «1.875».
```

##### D
```
• Là gì? 2.0 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «2.0» (D) không thỏa: khớp đáp án «1.875».
```

**whatIs**
```
{
  "A": "1.875 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "1.75 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "1.5 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "2.0 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Câu JIT: nắm định nghĩa/thứ tự/thuật ngữ CNTT.
• 1.875
```

**memoryTip**
```
(trống)
```

---

### 54/400 · `jit` id=227 · task=`pt` · num=44 · ans **C**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
MIDI命令のデータ段階（取りうる値の数）として適切なものはどれか。
```

**Options**

- **A.** 64
- **B.** 100
- **C.** 128 ✅
- **D.** 256

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Chọn phương án đúng (xem câu gốc). |
| optionsVi.A | 64 |
| optionsVi.B | 100 |
| optionsVi.C | 128 |
| optionsVi.D | 256 |
| answerDisplay | C. 128 |

**concept**
```
• 128
• Nghĩa: 128.
```

**whyCorrect**
```
• Có vai trò riêng; đối chiếu với điều kiện stem.
• Khớp stem: khớp đáp án «128».
```

**whyWrong**

##### A
```
• Là gì? 64 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «64» (A) không thỏa: khớp đáp án «128».
```

##### B
```
• Là gì? 100 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «100» (B) không thỏa: khớp đáp án «128».
```

##### D
```
• Là gì? 256 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «256» (D) không thỏa: khớp đáp án «128».
```

**whatIs**
```
{
  "A": "64 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "100 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "128 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "256 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Câu JIT: nắm định nghĩa/thứ tự/thuật ngữ CNTT.
• 128
```

**memoryTip**
```
(trống)
```

---

### 55/400 · `jit` id=228 · task=`pt` · num=45 · ans **C**

- **flags:** khop_dap_an
- **status:** `todo`

**Đề gốc**

```
「小文字」はどのように読みますか。ベトナム語で何ですか。
```

**Options**

- **A.** おおもじ - chữ in hoa
- **B.** こもじ - chữ số
- **C.** こもじ - chữ in thường ✅
- **D.** だいもじ - chữ thường

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | « ký tự / chữ」 đọc thế nào? Tiếng Việt là gì? |
| optionsVi.A | おおもじ - chữ in hoa — khái niệm kỹ thuật |
| optionsVi.B | こもじ - chữ số — khái niệm kỹ thuật |
| optionsVi.C | chữ in thường |
| optionsVi.D | chữ thường |
| answerDisplay | C. chữ in thường |

**concept**
```
• chữ in thường
• Nghĩa: chữ in thường.
```

**whyCorrect**
```
• / chữ in thường.
• chữ in thường
• Đáp án C: chữ in thường
```

**whyWrong**

##### A
```
• Là gì? おおもじ - chữ in hoa (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «おおもじ - chữ in hoa» (A) không thỏa: khớp đáp án «こもじ - chữ in thường».
```

##### B
```
• Là gì? こもじ - chữ số (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «こもじ - chữ số» (B) không thỏa: khớp đáp án «こもじ - chữ in thường».
```

##### D
```
• Là gì? だいもじ - chữ thường
• Dùng để làm gì? Thuật ngữ/phát biểu trong miền CNTT tiếng Nhật.
• Vì sao sai? «だいもじ - chữ thường» (D) không thỏa: khớp đáp án «こもじ - chữ in thường».
```

**whatIs**
```
{
  "A": "おおもじ - chữ in hoa (thuật ngữ JP).",
  "B": "こもじ - chữ số (thuật ngữ JP).",
  "C": "こもじ - chữ in thường",
  "D": "だいもじ - chữ thường"
}
```

**intent**
```
• Câu JIT: nắm định nghĩa/thứ tự/thuật ngữ CNTT.
• chữ in thường
```

**memoryTip**
```
(trống)
```

---

### 56/400 · `jit` id=230 · task=`pt` · num=47 · ans **D**

- **flags:** khop_dap_an
- **status:** `todo`

**Đề gốc**

```
データの（  ）と（  ）の対応を決めているのが文字コードです。
```

**Options**

- **A.** 音 - 画像
- **B.** ファイル - フォルダ
- **C.** 圧縮 - 解凍
- **D.** 数字 - 文字 ✅

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Điền từ thích hợp vào chỗ trống (xem câu gốc). |
| optionsVi.A | âm – ảnh |
| optionsVi.B | ファイル - フォルダ — khái niệm kỹ thuật |
| optionsVi.C | nén |
| optionsVi.D | ký tự / chữ |
| answerDisplay | D. ký tự / chữ |

**concept**
```
• Mã ký tự: dữ liệu chữ được ghi dưới dạng dãy bit/số (0 và 1), không lưu «hình chữ» nguyên thủy.
• ký tự / chữ
```

**whyCorrect**
```
• ký tự / chữ
• Máy chỉ lưu mã số 0/1; «chữ» là cách diễn giải theo bảng mã (ASCII, Unicode…).
```

**whyWrong**

##### A
```
• Là gì? 音 - 画像 (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «音 - 画像» (A) không thỏa: khớp đáp án «数字 - 文字».
```

##### B
```
• Là gì? ファイル - フォルダ (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «ファイル - フォルダ» (B) không thỏa: khớp đáp án «数字 - 文字».
```

##### C
```
• Là gì? 圧縮 - 解凍 (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «圧縮 - 解凍» (C) không thỏa: khớp đáp án «数字 - 文字».
```

**whatIs**
```
{
  "A": "音 - 画像 (thuật ngữ JP).",
  "B": "ファイル - フォルダ (thuật ngữ JP).",
  "C": "圧縮 - 解凍 (thuật ngữ JP).",
  "D": "数字 - 文字 (thuật ngữ JP)."
}
```

**intent**
```
• Mã ký tự: quy tắc map ký tự ↔ mã số nhị phân.
• Chọn phát biểu đúng về bản chất lưu chữ trong máy tính.
```

**memoryTip**
```
• mã ký tự (character code) = mã ký tự
• Chữ trên màn hình ← decode dãy 0/1 theo bảng mã.
```

---

### 57/400 · `jit` id=232 · task=`pt` · num=49 · ans **C**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
圧縮・解凍ソフトでファイルを圧縮したとき、圧縮方式によって付けられる拡張子として正しいものはどれですか。
```

**Options**

- **A.** doc、xls、ppt
- **B.** jpg、png、gif
- **C.** zip、lzh、gz ✅
- **D.** exe、dll、sys

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Khi nén file, phần mở rộng theo kiểu nén — đâu là đúng? |
| optionsVi.A | doc、xls、ppt |
| optionsVi.B | jpg、png、gif |
| optionsVi.C | zip、lzh、gz |
| optionsVi.D | exe、dll、sys |
| answerDisplay | C. zip、lzh、gz |

**concept**
```
• zip、lzh、gz
• Nghĩa: zip、lzh、gz.
```

**whyCorrect**
```
• Có vai trò riêng; đối chiếu với điều kiện stem.
• Khớp stem: phát biểu đúng/sai khớp cơ chế.
```

**whyWrong**

##### A
```
• Là gì? doc、xls、ppt — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «doc、xls、ppt» (A) không thỏa: phát biểu đúng/sai khớp cơ chế.
```

##### B
```
• Là gì? jpg、png、gif — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «jpg、png、gif» (B) không thỏa: phát biểu đúng/sai khớp cơ chế.
```

##### D
```
• Là gì? exe、dll、sys — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «exe、dll、sys» (D) không thỏa: phát biểu đúng/sai khớp cơ chế.
```

**whatIs**
```
{
  "A": "doc、xls、ppt — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "jpg、png、gif — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "zip、lzh、gz — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "exe、dll、sys — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Câu JIT: nắm định nghĩa/thứ tự/thuật ngữ CNTT.
• zip、lzh、gz
```

**memoryTip**
```
(trống)
```

---

### 58/400 · `jit` id=233 · task=`pt` · num=50 · ans **C**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
動画像では、静止画圧縮と差分記録を組み合わせて圧縮率を高めた形式としてよく用いられるものは何ですか。
```

**Options**

- **A.** JPEG
- **B.** GIF
- **C.** MPEG ✅
- **D.** PNG

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Với video, dạng hay dùng kết hợp nén ảnh tĩnh + ghi sai phân để tăng tỉ lệ nén là gì? |
| optionsVi.A | JPEG |
| optionsVi.B | GIF |
| optionsVi.C | MPEG |
| optionsVi.D | PNG |
| answerDisplay | C. MPEG |

**concept**
```
• MPEG
• Nghĩa: MPEG.
```

**whyCorrect**
```
• Có vai trò riêng; đối chiếu với điều kiện stem.
• Khớp stem: khớp đáp án «MPEG».
```

**whyWrong**

##### A
```
• Là gì? JPEG — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «JPEG» (A) không thỏa: khớp đáp án «MPEG».
```

##### B
```
• Là gì? GIF — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «GIF» (B) không thỏa: khớp đáp án «MPEG».
```

##### D
```
• Là gì? PNG — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «PNG» (D) không thỏa: khớp đáp án «MPEG».
```

**whatIs**
```
{
  "A": "JPEG — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "GIF — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "MPEG — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "PNG — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Câu JIT: nắm định nghĩa/thứ tự/thuật ngữ CNTT.
• MPEG
```

**memoryTip**
```
(trống)
```

---

### 59/400 · `jit` id=234 · task=`pt` · num=51 · ans **B**

- **flags:** khop_dap_an
- **status:** `todo`

**Đề gốc**

```
「sóng hình sin」は日本語の漢字でどのように書きますか。どのように読みますか。
```

**Options**

- **A.** 余弦波 - よげんは
- **B.** 正弦波 - せいげんは ✅
- **C.** 正弦波 - しょうげんは
- **D.** 正玄波 - せいげんは

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | «Sóng hình sin」 viết kanji tiếng Nhật thế nào? Đọc ra sao? |
| optionsVi.A | sóng cosine |
| optionsVi.B | sóng sine |
| optionsVi.C | sóng sine (đọc sai) |
| optionsVi.D | sóng sine (viết sai) |
| answerDisplay | B. sóng sine |

**concept**
```
• sóng sine
• Nghĩa: sóng sine.
```

**whyCorrect**
```
• Khái niệm CNTT trong đề thi JIT.
• Khớp stem: khớp đáp án «正弦波 - せいげんは».
```

**whyWrong**

##### A
```
• Là gì? 余弦波 - よげんは (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «余弦波 - よげんは» (A) không thỏa: khớp đáp án «正弦波 - せいげんは».
```

##### C
```
• Là gì? 正弦波 - しょうげんは (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «正弦波 - しょうげんは» (C) không thỏa: khớp đáp án «正弦波 - せいげんは».
```

##### D
```
• Là gì? 正玄波 - せいげんは (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «正玄波 - せいげんは» (D) không thỏa: khớp đáp án «正弦波 - せいげんは».
```

**whatIs**
```
{
  "A": "余弦波 - よげんは (thuật ngữ JP).",
  "B": "正弦波 - せいげんは (thuật ngữ JP).",
  "C": "正弦波 - しょうげんは (thuật ngữ JP).",
  "D": "正玄波 - せいげんは (thuật ngữ JP)."
}
```

**intent**
```
• Câu JIT: nắm định nghĩa/thứ tự/thuật ngữ CNTT.
• sóng sine
```

**memoryTip**
```
(trống)
```

---

### 60/400 · `jit` id=235 · task=`pt` · num=52 · ans **A**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
ネットワークのデータ伝送速度を表す単位はどれか。
```

**Options**

- **A.** bps ✅
- **B.** dpi
- **C.** Hz
- **D.** lux

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | mạng là cái nào? |
| optionsVi.A | bps |
| optionsVi.B | dpi |
| optionsVi.C | Hz |
| optionsVi.D | lux |
| answerDisplay | A. bps |

**concept**
```
• bps
• Nghĩa: bps.
```

**whyCorrect**
```
• Có vai trò riêng; đối chiếu với điều kiện stem.
• Khớp stem: khớp đáp án «bps».
```

**whyWrong**

##### B
```
• Là gì? dpi — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «dpi» (B) không thỏa: khớp đáp án «bps».
```

##### C
```
• Là gì? Hz — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Hz» (C) không thỏa: khớp đáp án «bps».
```

##### D
```
• Là gì? lux — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «lux» (D) không thỏa: khớp đáp án «bps».
```

**whatIs**
```
{
  "A": "bps — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "dpi — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Hz — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "lux — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Câu JIT: nắm định nghĩa/thứ tự/thuật ngữ CNTT.
• bps
```

**memoryTip**
```
(trống)
```

---

### 61/400 · `jit` id=236 · task=`pt` · num=53 · ans **A**

- **flags:** khop_dap_an
- **status:** `todo`

**Đề gốc**

```
「帯域幅」はどのように読みますか。ベトナム語で何ですか。
```

**Options**

- **A.** たいいきはば - chiều rộng dải tần ✅
- **B.** たいいきふく - băng thông hẹp
- **C.** たいきはば - tần số
- **D.** はばたいいき - độ trễ

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | «băng thông」 đọc thế nào? Tiếng Việt là gì? |
| optionsVi.A | chiều rộng dải tần |
| optionsVi.B | băng thông hẹp |
| optionsVi.C | たいきはば - tần số — khái niệm kỹ thuật |
| optionsVi.D | độ trễ |
| answerDisplay | A. chiều rộng dải tần |

**concept**
```
• chiều rộng dải tần
• Nghĩa: chiều rộng dải tần.
```

**whyCorrect**
```
• chiều rộng dải tần
• Đáp án A: chiều rộng dải tần
```

**whyWrong**

##### B
```
• Là gì? たいいきふく - băng thông hẹp
• Dùng để làm gì? Thuật ngữ/phát biểu trong miền CNTT tiếng Nhật.
• Vì sao sai? «たいいきふく - băng thông hẹp» (B) không thỏa: khớp đáp án «たいいきはば - chiều rộng dải tần».
```

##### C
```
• Là gì? たいきはば - tần số (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «たいきはば - tần số» (C) không thỏa: khớp đáp án «たいいきはば - chiều rộng dải tần».
```

##### D
```
• Là gì? はばたいいき - độ trễ
• Dùng để làm gì? Thuật ngữ/phát biểu trong miền CNTT tiếng Nhật.
• Vì sao sai? «はばたいいき - độ trễ» (D) không thỏa: khớp đáp án «たいいきはば - chiều rộng dải tần».
```

**whatIs**
```
{
  "A": "たいいきはば - chiều rộng dải tần",
  "B": "たいいきふく - băng thông hẹp",
  "C": "たいきはば - tần số (thuật ngữ JP).",
  "D": "はばたいいき - độ trễ"
}
```

**intent**
```
• Câu JIT: nắm định nghĩa/thứ tự/thuật ngữ CNTT.
• chiều rộng dải tần
```

**memoryTip**
```
(trống)
```

---

### 62/400 · `jit` id=237 · task=`pt` · num=54 · ans **D**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
「マス目」はベトナム語で何ですか。
```

**Options**

- **A.** cần
- **B.** đĩa
- **C.** sợi đốt
- **D.** nấc ✅

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | « 」 tiếng Việt là gì? |
| optionsVi.A | cần |
| optionsVi.B | đĩa |
| optionsVi.C | sợi đốt |
| optionsVi.D | nấc |
| answerDisplay | D. nấc |

**concept**
```
• nấc
• Nghĩa: nấc.
```

**whyCorrect**
```
• Có vai trò riêng; đối chiếu với điều kiện stem.
• Khớp stem: khớp đáp án «nấc».
```

**whyWrong**

##### A
```
• Là gì? cần — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «cần» (A) không thỏa: khớp đáp án «nấc».
```

##### B
```
• Là gì? đĩa — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «đĩa» (B) không thỏa: khớp đáp án «nấc».
```

##### C
```
• Là gì? sợi đốt — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «sợi đốt» (C) không thỏa: khớp đáp án «nấc».
```

**whatIs**
```
{
  "A": "cần — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "đĩa — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "sợi đốt — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "nấc — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Câu JIT: nắm định nghĩa/thứ tự/thuật ngữ CNTT.
• nấc
```

**memoryTip**
```
(trống)
```

---

### 63/400 · `jit` id=238 · task=`pt` · num=55 · ans **A**

- **flags:** khop_dap_an
- **status:** `todo`

**Đề gốc**

```
「PLC」はベトナム語で何ですか。
```

**Options**

- **A.** nối mạng qua hệ thống điện nhà ✅
- **B.** truyền hình cáp dây dẫn
- **C.** cáp quang đến tận nhà
- **D.** truyền dữ liệu bằng tia hồng ngoại

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | PLC tiếng Việt / nghĩa là gì? |
| optionsVi.A | nối mạng qua hệ thống điện nhà |
| optionsVi.B | truyền hình cáp dây dẫn |
| optionsVi.C | cáp quang đến tận nhà |
| optionsVi.D | truyền dữ liệu bằng tia hồng ngoại |
| answerDisplay | A. nối mạng qua hệ thống điện nhà |

**concept**
```
• nối mạng qua hệ thống điện nhà
• Nghĩa: nối mạng qua hệ thống điện nhà.
```

**whyCorrect**
```
• PLC / điện nhà.
• nối mạng qua hệ thống điện nhà
• Đáp án A: nối mạng qua hệ thống điện nhà
```

**whyWrong**

##### B
```
• Là gì? truyền hình cáp dây dẫn
• Dùng để làm gì? Phạm trù/khái niệm trong lý thuyết đề cập.
• Vì sao sai? «truyền hình cáp dây dẫn» (B) không thỏa: khớp đáp án «nối mạng qua hệ thống điện nhà».
```

##### C
```
• Là gì? cáp quang đến tận nhà
• Dùng để làm gì? Phạm trù/khái niệm trong lý thuyết đề cập.
• Vì sao sai? «cáp quang đến tận nhà» (C) không thỏa: khớp đáp án «nối mạng qua hệ thống điện nhà».
```

##### D
```
• Là gì? truyền dữ liệu bằng tia hồng ngoại
• Dùng để làm gì? Phạm trù/khái niệm trong lý thuyết đề cập.
• Vì sao sai? «truyền dữ liệu bằng tia hồng ngoại» (D) không thỏa: khớp đáp án «nối mạng qua hệ thống điện nhà».
```

**whatIs**
```
{
  "A": "nối mạng qua hệ thống điện nhà",
  "B": "truyền hình cáp dây dẫn",
  "C": "cáp quang đến tận nhà",
  "D": "truyền dữ liệu bằng tia hồng ngoại"
}
```

**intent**
```
• Câu JIT: nắm định nghĩa/thứ tự/thuật ngữ CNTT.
• nối mạng qua hệ thống điện nhà
```

**memoryTip**
```
(trống)
```

---

### 64/400 · `jit` id=239 · task=`pt` · num=56 · ans **A**

- **flags:** khop_dap_an
- **status:** `todo`

**Đề gốc**

```
個人のパソコンをねらった（  ）としてウイルスが代表的です。
```

**Options**

- **A.** 犯罪 ✅
- **B.** 行為
- **C.** もの
- **D.** 病気

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Điền từ thích hợp vào chỗ trống (xem câu gốc). |
| optionsVi.A | tội phạm / hành vi phạm tội |
| optionsVi.B | hành vi |
| optionsVi.C | vật / đối tượng |
| optionsVi.D | 病気 — khái niệm kỹ thuật |
| answerDisplay | A. tội phạm / hành vi phạm tội |

**concept**
```
• tội phạm / hành vi phạm tội
• Thuật ngữ: tội phạm / hành vi phạm tội.
```

**whyCorrect**
```
• tội phạm / hành vi phạm tội
• Đáp án A: tội phạm / hành vi phạm tội
```

**whyWrong**

##### B
```
• Là gì? 行為 (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «行為» (B) không thỏa: khớp đáp án «犯罪».
```

##### C
```
• Là gì? もの (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «もの» (C) không thỏa: khớp đáp án «犯罪».
```

##### D
```
• Là gì? 病気 (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «病気» (D) không thỏa: khớp đáp án «犯罪».
```

**whatIs**
```
{
  "A": "犯罪 (thuật ngữ JP).",
  "B": "行為 (thuật ngữ JP).",
  "C": "もの (thuật ngữ JP).",
  "D": "病気 (thuật ngữ JP)."
}
```

**intent**
```
• Câu JIT: nắm định nghĩa/thứ tự/thuật ngữ CNTT.
• tội phạm / hành vi phạm tội
```

**memoryTip**
```
(trống)
```

---

### 65/400 · `jit` id=240 · task=`pt` · num=57 · ans **B**

- **flags:** khop_dap_an
- **status:** `todo`

**Đề gốc**

```
ウィルスに感染するのを避けるために、何をしますか。
```

**Options**

- **A.** パスワードに氏名や数字だけを使う
- **B.** 常に最新版に更新されるブラウザを使う ✅
- **C.** 古いブラウザを使い続ける
- **D.** exe,vbs,scr,pif の添付をすぐに開く

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Để tránh nhiễm virus, nên làm gì? |
| optionsVi.A | パスワードに氏名や数字だけを使う — khái niệm kỹ thuật |
| optionsVi.B | dùng trình duyệt luôn cập nhật |
| optionsVi.C | cứ dùng trình duyệt cũ |
| optionsVi.D | mở ngay file đính kèm exe/vbs/scr/pif (nguy hiểm) |
| answerDisplay | B. dùng trình duyệt luôn cập nhật |

**concept**
```
• dùng trình duyệt luôn cập nhật
• Nghĩa: dùng trình duyệt luôn cập nhật.
```

**whyCorrect**
```
• cập nhật browser / phần mềm.
• dùng trình duyệt luôn cập nhật
• Đáp án B: dùng trình duyệt luôn cập nhật
```

**whyWrong**

##### A
```
• Là gì? パスワードに氏名や数字だけを使う (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «パスワードに氏名や数字だけを使う» (A) không thỏa: khớp đáp án «常に最新版に更新されるブラウザを使う».
```

##### C
```
• Là gì? 古いブラウザを使い続ける (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «古いブラウザを使い続ける» (C) không thỏa: khớp đáp án «常に最新版に更新されるブラウザを使う».
```

##### D
```
• Là gì? exe,vbs,scr,pif の添付をすぐに開く (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «exe,vbs,scr,pif の添付をすぐに開く» (D) không thỏa: khớp đáp án «常に最新版に更新されるブラウザを使う».
```

**whatIs**
```
{
  "A": "パスワードに氏名や数字だけを使う (thuật ngữ JP).",
  "B": "常に最新版に更新されるブラウザを使う (thuật ngữ JP).",
  "C": "古いブラウザを使い続ける (thuật ngữ JP).",
  "D": "exe,vbs,scr,pif の添付をすぐに開く (thuật ngữ JP)."
}
```

**intent**
```
• Câu JIT: nắm định nghĩa/thứ tự/thuật ngữ CNTT.
• dùng trình duyệt luôn cập nhật
```

**memoryTip**
```
(trống)
```

---

### 66/400 · `jit` id=241 · task=`pt` · num=58 · ans **B**

- **flags:** khop_dap_an
- **status:** `todo`

**Đề gốc**

```
国際標準の携帯電話で利用できるアプリケーションを決定するのが何と呼ぶソフトウェアですか。
```

**Options**

- **A.** アプリケーション
- **B.** オペレーティングシステム ✅
- **C.** 電子マネー
- **D.** ガラパゴス携帯

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Phần mềm quyết định app dùng được trên điện thoại chuẩn quốc tế gọi là gì? |
| optionsVi.A | アプリケーション — khái niệm kỹ thuật |
| optionsVi.B | hệ điều hành |
| optionsVi.C | tiền điện tử |
| optionsVi.D | điện thoại Galápagos (nội địa Nhật) |
| answerDisplay | B. hệ điều hành |

**concept**
```
• hệ điều hành
• Thuật ngữ: hệ điều hành.
```

**whyCorrect**
```
• Khái niệm CNTT trong đề thi JIT.
• Khớp stem: khớp đáp án «オペレーティングシステム».
```

**whyWrong**

##### A
```
• Là gì? アプリケーション (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «アプリケーション» (A) không thỏa: khớp đáp án «オペレーティングシステム».
```

##### C
```
• Là gì? 電子マネー (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «電子マネー» (C) không thỏa: khớp đáp án «オペレーティングシステム».
```

##### D
```
• Là gì? ガラパゴス携帯 (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «ガラパゴス携帯» (D) không thỏa: khớp đáp án «オペレーティングシステム».
```

**whatIs**
```
{
  "A": "アプリケーション (thuật ngữ JP).",
  "B": "オペレーティングシステム (thuật ngữ JP).",
  "C": "電子マネー (thuật ngữ JP).",
  "D": "ガラパゴス携帯 (thuật ngữ JP)."
}
```

**intent**
```
• Câu JIT: nắm định nghĩa/thứ tự/thuật ngữ CNTT.
• hệ điều hành
```

**memoryTip**
```
(trống)
```

---

### 67/400 · `jit` id=242 · task=`pt` · num=59 · ans **C**

- **flags:** khop_dap_an
- **status:** `todo`

**Đề gốc**

```
「周波数帯」はどのように読みますか。ベトナム語で何ですか。
```

**Options**

- **A.** しゅうはすうたい - băng tần
- **B.** しゅばすうだい - dải tần số
- **C.** しゅうはすうたい - dải tần số ✅
- **D.** しゅうぱすうだい - băng tần

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | « 」 đọc thế nào? Tiếng Việt là gì? |
| optionsVi.A | băng tần |
| optionsVi.B | dải tần số |
| optionsVi.C | dải tần số |
| optionsVi.D | băng tần |
| answerDisplay | C. dải tần số |

**concept**
```
• dải tần số
• Nghĩa: dải tần số.
```

**whyCorrect**
```
• / dải tần số.
• dải tần số
• Đáp án C: dải tần số
```

**whyWrong**

##### A
```
• Là gì? しゅうはすうたい - băng tần
• Dùng để làm gì? Thuật ngữ/phát biểu trong miền CNTT tiếng Nhật.
• Vì sao sai? «しゅうはすうたい - băng tần» (A) không thỏa: khớp đáp án «しゅうはすうたい - dải tần số».
```

##### B
```
• Là gì? しゅばすうだい - dải tần số
• Dùng để làm gì? Thuật ngữ/phát biểu trong miền CNTT tiếng Nhật.
• Vì sao sai? «しゅばすうだい - dải tần số» (B) không thỏa: khớp đáp án «しゅうはすうたい - dải tần số».
```

##### D
```
• Là gì? しゅうぱすうだい - băng tần
• Dùng để làm gì? Thuật ngữ/phát biểu trong miền CNTT tiếng Nhật.
• Vì sao sai? «しゅうぱすうだい - băng tần» (D) không thỏa: khớp đáp án «しゅうはすうたい - dải tần số».
```

**whatIs**
```
{
  "A": "しゅうはすうたい - băng tần",
  "B": "しゅばすうだい - dải tần số",
  "C": "しゅうはすうたい - dải tần số",
  "D": "しゅうぱすうだい - băng tần"
}
```

**intent**
```
• Câu JIT: nắm định nghĩa/thứ tự/thuật ngữ CNTT.
• dải tần số
```

**memoryTip**
```
(trống)
```

---

### 68/400 · `jit` id=243 · task=`pt` · num=60 · ans **A**

- **flags:** khop_dap_an
- **status:** `todo`

**Đề gốc**

```
LSIは日本語で何ですか。
```

**Options**

- **A.** 大規模集積回路 ✅
- **B.** 集積線路
- **C.** 集積回路
- **D.** 大規模集積線路

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | LSI tiếng Nhật / nghĩa là gì? |
| optionsVi.A | mạch tích hợp (IC) |
| optionsVi.B | mạch tích hợp (sai từ) |
| optionsVi.C | mạch tích hợp (IC) |
| optionsVi.D | LSI (mạch tích hợp quy mô lớn) |
| answerDisplay | A. mạch tích hợp (IC) |

**concept**
```
• mạch tích hợp (IC)
• Nghĩa: mạch tích hợp (IC).
```

**whyCorrect**
```
• mạch tích hợp (IC)
• Đáp án A: mạch tích hợp (IC)
```

**whyWrong**

##### B
```
• Là gì? 集積線路 (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «集積線路» (B) không thỏa: khớp đáp án «大規模集積回路».
```

##### C
```
• Là gì? 集積回路 (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «集積回路» (C) không thỏa: khớp đáp án «大規模集積回路».
```

##### D
```
• Là gì? 大規模集積線路 (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «大規模集積線路» (D) không thỏa: khớp đáp án «大規模集積回路».
```

**whatIs**
```
{
  "A": "大規模集積回路 (thuật ngữ JP).",
  "B": "集積線路 (thuật ngữ JP).",
  "C": "集積回路 (thuật ngữ JP).",
  "D": "大規模集積線路 (thuật ngữ JP)."
}
```

**intent**
```
• Câu JIT: nắm định nghĩa/thứ tự/thuật ngữ CNTT.
• mạch tích hợp (IC)
```

**memoryTip**
```
(trống)
```

---

### 69/400 · `jit` id=244 · task=`pt` · num=61 · ans **A**

- **flags:** khop_dap_an
- **status:** `todo`

**Đề gốc**

```
A3サイズ（29.7cm×42.0cm）を350 dpiで印刷する場合の画素数の計算で使う関係はどれか。
```

**Options**

- **A.** 画素数 ≒ (cm/2.54×dpi) の縦×横 ✅
- **B.** 画素数 = cm×dpi のみ
- **C.** 画素数 = bps×Hz
- **D.** 画素数 = ビット数÷8

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Chọn phương án đúng (xem câu gốc). |
| optionsVi.A | 画素数 ≒ (cm/2.54×dpi) の縦×横 — khái niệm kỹ thuật |
| optionsVi.B | số điểm ảnh (pixel) |
| optionsVi.C | số điểm ảnh (pixel) |
| optionsVi.D | 画素数 = ビット数÷8 — khái niệm kỹ thuật |
| answerDisplay | A. 画素数 ≒ (cm/2.54×dpi) の縦×横 — khái niệm kỹ thuật |

**concept**
```
• Số điểm ảnh (pixel count): độ chi tiết không gian của ảnh số.
• Tăng số pixel → ảnh mịn hơn, ít răng cưa (aliasing).
```

**whyCorrect**
```
• số pixel ≈ (cm/2.54×dpi) dọc×ngang
• Ảnh số là lưới điểm; nhiều điểm hơn → đường biên mượt, ít «răng cưa».
• Parity bit / số giao thức / tên miền không quyết định độ mịn ảnh.
```

**whyWrong**

##### B
```
• Là gì? 画素数 = cm×dpi のみ (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «画素数 = cm×dpi のみ» (B) không thỏa: khớp đáp án «画素数 ≒ (cm/2.54×dpi) の縦×横».
```

##### C
```
• Là gì? 画素数 = bps×Hz (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «画素数 = bps×Hz» (C) không thỏa: khớp đáp án «画素数 ≒ (cm/2.54×dpi) の縦×横».
```

##### D
```
• Là gì? 画素数 = ビット数÷8 (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «画素数 = ビット数÷8» (D) không thỏa: khớp đáp án «画素数 ≒ (cm/2.54×dpi) の縦×横».
```

**whatIs**
```
{
  "A": "画素数 ≒ (cm/2.54×dpi) の縦×横 (thuật ngữ JP).",
  "B": "画素数 = cm×dpi のみ (thuật ngữ JP).",
  "C": "画素数 = bps×Hz (thuật ngữ JP).",
  "D": "画素数 = ビット数÷8 (thuật ngữ JP)."
}
```

**intent**
```
• Chất lượng ảnh số: càng nhiều pixel (số điểm ảnh) càng mịn, ít răng cưa.
• Không nhầm với parity bit, số giao thức hay tên miền.
```

**memoryTip**
```
• Ảnh đẹp ít răng cưa → tăng số pixel (độ phân giải).
• Parity = lỗi bit; domain = tên miền; protocol = giao thức.
```

---

### 70/400 · `jit` id=245 · task=`pt` · num=62 · ans **B**

- **flags:** khop_dap_an
- **status:** `todo`

**Đề gốc**

```
「số nguyên tố」は日本語で何ですか。
```

**Options**

- **A.** かんすう
- **B.** そいんすう ✅
- **C.** にんすう
- **D.** らんすう

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | «Số nguyên tố」 tiếng Nhật là gì? |
| optionsVi.A | hàm số (kansū) |
| optionsVi.B | ước số |
| optionsVi.C | số người |
| optionsVi.D | số ngẫu nhiên |
| answerDisplay | B. ước số |

**concept**
```
• ước số
• Nghĩa: ước số.
```

**whyCorrect**
```
• Khái niệm CNTT trong đề thi JIT.
• Khớp stem: khớp đáp án «そいんすう».
```

**whyWrong**

##### A
```
• Là gì? かんすう (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «かんすう» (A) không thỏa: khớp đáp án «そいんすう».
```

##### C
```
• Là gì? にんすう (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «にんすう» (C) không thỏa: khớp đáp án «そいんすう».
```

##### D
```
• Là gì? らんすう (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «らんすう» (D) không thỏa: khớp đáp án «そいんすう».
```

**whatIs**
```
{
  "A": "かんすう (thuật ngữ JP).",
  "B": "そいんすう (thuật ngữ JP).",
  "C": "にんすう (thuật ngữ JP).",
  "D": "らんすう (thuật ngữ JP)."
}
```

**intent**
```
• Câu JIT: nắm định nghĩa/thứ tự/thuật ngữ CNTT.
• ước số
```

**memoryTip**
```
(trống)
```

---

### 71/400 · `jit` id=246 · task=`pt` · num=63 · ans **D**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
「サイマル放送」はベトナム語で何ですか。
```

**Options**

- **A.** phát sóng qua vệ tinh
- **B.** phát sóng tạm thời
- **C.** phát sóng từng đoạn
- **D.** phát sóng cùng một lúc ✅

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | « 」 (simulcast) tiếng Việt là gì? |
| optionsVi.A | phát sóng qua vệ tinh |
| optionsVi.B | phát sóng tạm thời |
| optionsVi.C | phát sóng từng đoạn |
| optionsVi.D | phát sóng cùng một lúc |
| answerDisplay | D. phát sóng cùng một lúc |

**concept**
```
• phát sóng cùng một lúc
• Nghĩa: phát sóng cùng một lúc.
```

**whyCorrect**
```
• phát sóng cùng một lúc. (quiz.txt)
• phát sóng cùng một lúc
• Đáp án D: phát sóng cùng một lúc
```

**whyWrong**

##### A
```
• Là gì? phát sóng qua vệ tinh
• Dùng để làm gì? Phạm trù/khái niệm trong lý thuyết đề cập.
• Vì sao sai? «phát sóng qua vệ tinh» (A) không thỏa: khớp đáp án «phát sóng cùng một lúc».
```

##### B
```
• Là gì? phát sóng tạm thời — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «phát sóng tạm thời» (B) không thỏa: khớp đáp án «phát sóng cùng một lúc».
```

##### C
```
• Là gì? phát sóng từng đoạn — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «phát sóng từng đoạn» (C) không thỏa: khớp đáp án «phát sóng cùng một lúc».
```

**whatIs**
```
{
  "A": "phát sóng qua vệ tinh",
  "B": "phát sóng tạm thời — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "phát sóng từng đoạn — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "phát sóng cùng một lúc"
}
```

**intent**
```
• Câu JIT: nắm định nghĩa/thứ tự/thuật ngữ CNTT.
• phát sóng cùng một lúc
```

**memoryTip**
```
(trống)
```

---

### 72/400 · `jit` id=248 · task=`pt` · num=65 · ans **A**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
次の説明する文書は ただしですか。（Phần thuyết minh về từ vựng được cho là đúng hay sai?） 認証とは公開鍵方式と秘密鍵方式により暗号化した状態で情報通信を行うこと。
```

**Options**

- **A.** False ✅
- **B.** True
- **C.** （候補なし）
- **D.** （候補なし）

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Phát biểu sau đúng hay sai? «Xác thực = truyền tin đã mã hóa bằng khóa công khai và khóa bí mật.」 |
| optionsVi.A | False |
| optionsVi.B | True |
| optionsVi.C | (không có phương án phù hợp) |
| optionsVi.D | (không có phương án phù hợp) |
| answerDisplay | A. False |

**concept**
```
• False
• Nghĩa: False.
```

**whyCorrect**
```
• Có vai trò riêng; đối chiếu với điều kiện stem.
• Khớp stem: khớp đáp án «False».
```

**whyWrong**

##### B
```
• Là gì? True — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «True» (B) không thỏa: khớp đáp án «False».
```

##### C
```
• Là gì? （候補なし） (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «（候補なし）» (C) không thỏa: khớp đáp án «False».
```

##### D
```
• Là gì? （候補なし） (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «（候補なし）» (D) không thỏa: khớp đáp án «False».
```

**whatIs**
```
{
  "A": "False — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "True — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "（候補なし） (thuật ngữ JP).",
  "D": "（候補なし） (thuật ngữ JP)."
}
```

**intent**
```
• Câu JIT: nắm định nghĩa/thứ tự/thuật ngữ CNTT.
• False
```

**memoryTip**
```
(trống)
```

---

### 73/400 · `jit` id=249 · task=`pt` · num=66 · ans **A**

- **flags:** khop_dap_an
- **status:** `todo`

**Đề gốc**

```
OSIのセッション層（第5層）の主な役割として、最も適切なものはどれですか。
```

**Options**

- **A.** 通信の開始から終了までの手順を管理する。 ✅
- **B.** 通信相手までのデータの轉送経路を決定し、論理アドレスを管理する。
- **C.** 通信媒体を通じてビット信号を伝送するための電気的・機械的規格を定める。
- **D.** データの形式（文字コードや暗号化など）を変換し、アプリケーション層が扱える形式に変換する。

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Vai trò chính của tầng Session (tầng 5) trong OSI là gì? |
| optionsVi.A | quản lý thủ tục từ đầu đến hết phiên |
| optionsVi.B | chọn đường truyền và quản lý địa chỉ logic |
| optionsVi.C | quy định chuẩn điện/cơ để truyền bit trên môi trường |
| optionsVi.D | phát biểu về mã hóa / khóa |
| answerDisplay | A. quản lý thủ tục từ đầu đến hết phiên |

**concept**
```
• quản lý thủ tục từ đầu đến hết phiên
• Nghĩa: quản lý thủ tục từ đầu đến hết phiên.
```

**whyCorrect**
```
• quản lý thủ tục từ đầu đến hết phiên
• Đáp án A: quản lý thủ tục từ đầu đến hết phiên
```

**whyWrong**

##### B
```
• Là gì? 通信相手までのデータの轉送経路を決定し、論理アドレスを管理する。 (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «通信相手までのデータの轉送経路を決定し、論理アドレスを管理する。» (B) không thỏa: khớp đáp án «通信の開始から終了までの手順を管理する。».
```

##### C
```
• Là gì? 通信媒体を通じてビット信号を伝送するための電気的・機械的規格を定める。 (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «通信媒体を通じてビット信号を伝送するための電気的・機械的規格を定める。» (C) không thỏa: khớp đáp án «通信の開始から終了までの手順を管理する。».
```

##### D
```
• Là gì? データの形式（文字コードや暗号化など）を変換し、アプリケーション層が扱える形式に変換する。 (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «データの形式（文字コードや暗号化など）を変換し、アプリケーション層が扱える形式に変換する。» (D) không thỏa: khớp đáp án «通信の開始から終了までの手順を管理する。».
```

**whatIs**
```
{
  "A": "通信の開始から終了までの手順を管理する。 (thuật ngữ JP).",
  "B": "通信相手までのデータの轉送経路を決定し、論理アドレスを管理する。 (thuật ngữ JP).",
  "C": "通信媒体を通じてビット信号を伝送するための電気的・機械的規格を定める。 (thuật ngữ JP).",
  "D": "データの形式（文字コードや暗号化など）を変換し、アプリケーション層が扱える形式に変換する。 (thuật ngữ JP)."
}
```

**intent**
```
• Câu JIT: nắm định nghĩa/thứ tự/thuật ngữ CNTT.
• quản lý thủ tục từ đầu đến hết phiên
```

**memoryTip**
```
(trống)
```

---

### 74/400 · `jit` id=251 · task=`pt` · num=68 · ans **A**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
マザーボードとケーブルで接続された箱は何ですか。
```

**Options**

- **A.** ハードディスク ✅
- **B.** マザーボード
- **C.** CPU
- **D.** メリ

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Hộp nối với mainboard bằng cáp là gì? |
| optionsVi.A | ハードディスク — khái niệm kỹ thuật |
| optionsVi.B | mainboard (bo mạch chủ) |
| optionsVi.C | phát biểu về CPU / bộ nhớ / bán dẫn |
| optionsVi.D | (mảnh từ) |
| answerDisplay | A. ハードディスク — khái niệm kỹ thuật |

**concept**
```
• ổ cứng
• Thuật ngữ: ổ cứng.
```

**whyCorrect**
```
• Khái niệm CNTT trong đề thi JIT.
• Khớp stem: khớp đáp án «ハードディスク».
```

**whyWrong**

##### B
```
• Là gì? マザーボード (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «マザーボード» (B) không thỏa: khớp đáp án «ハードディスク».
```

##### C
```
• Là gì? CPU — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «CPU» (C) không thỏa: khớp đáp án «ハードディスク».
```

##### D
```
• Là gì? メリ (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «メリ» (D) không thỏa: khớp đáp án «ハードディスク».
```

**whatIs**
```
{
  "A": "ハードディスク (thuật ngữ JP).",
  "B": "マザーボード (thuật ngữ JP).",
  "C": "CPU — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "メリ (thuật ngữ JP)."
}
```

**intent**
```
• Câu JIT: nắm định nghĩa/thứ tự/thuật ngữ CNTT.
• ổ cứng
```

**memoryTip**
```
(trống)
```

---

### 75/400 · `jit` id=252 · task=`pt` · num=69 · ans **A**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
クロック周波数 3 GHz のプロセッサにおいて、1つの命令が6クロックで実行できるとき、1命令の実行に必要な時間は何ナノ秒か。
```

**Options**

- **A.** 2.0 ✅
- **B.** 3.0
- **C.** 0.5
- **D.** 18.0

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | CPU 3 GHz, 1 lệnh = 6 clock — thời gian 1 lệnh là bao nhiêu nanosecond? |
| optionsVi.A | 2.0 |
| optionsVi.B | 3.0 |
| optionsVi.C | 0.5 |
| optionsVi.D | 18.0 |
| answerDisplay | A. 2.0 |

**concept**
```
• 2.0
• Nghĩa: 2.0.
```

**whyCorrect**
```
• Có vai trò riêng; đối chiếu với điều kiện stem.
• Khớp stem: khớp đáp án «2.0».
```

**whyWrong**

##### B
```
• Là gì? 3.0 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «3.0» (B) không thỏa: khớp đáp án «2.0».
```

##### C
```
• Là gì? 0.5 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «0.5» (C) không thỏa: khớp đáp án «2.0».
```

##### D
```
• Là gì? 18.0 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «18.0» (D) không thỏa: khớp đáp án «2.0».
```

**whatIs**
```
{
  "A": "2.0 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "3.0 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "0.5 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "18.0 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Câu JIT: nắm định nghĩa/thứ tự/thuật ngữ CNTT.
• 2.0
```

**memoryTip**
```
(trống)
```

---

### 76/400 · `jit` id=253 · task=`pt` · num=70 · ans **C**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
出力装置は何がありますか。
```

**Options**

- **A.** キーボードやマウス
- **B.** メモリやハードディスク
- **C.** ディスプレイやプリンタ ✅
- **D.** CPU

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Thiết bị ra (output) gồm những gì? |
| optionsVi.A | bàn phím |
| optionsVi.B | bộ nhớ và ổ cứng |
| optionsVi.C | màn hình |
| optionsVi.D | phát biểu về CPU / bộ nhớ / bán dẫn |
| answerDisplay | C. màn hình |

**concept**
```
• màn hình
• Nghĩa: màn hình.
```

**whyCorrect**
```
• Khái niệm CNTT trong đề thi JIT.
• Khớp stem: khớp đáp án «ディスプレイやプリンタ».
```

**whyWrong**

##### A
```
• Là gì? キーボードやマウス (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «キーボードやマウス» (A) không thỏa: khớp đáp án «ディスプレイやプリンタ».
```

##### B
```
• Là gì? メモリやハードディスク (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «メモリやハードディスク» (B) không thỏa: khớp đáp án «ディスプレイやプリンタ».
```

##### D
```
• Là gì? CPU — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «CPU» (D) không thỏa: khớp đáp án «ディスプレイやプリンタ».
```

**whatIs**
```
{
  "A": "キーボードやマウス (thuật ngữ JP).",
  "B": "メモリやハードディスク (thuật ngữ JP).",
  "C": "ディスプレイやプリンタ (thuật ngữ JP).",
  "D": "CPU — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Câu JIT: nắm định nghĩa/thứ tự/thuật ngữ CNTT.
• màn hình
```

**memoryTip**
```
(trống)
```

---

### 77/400 · `jit` id=254 · task=`pt` · num=71 · ans **B**

- **flags:** khop_dap_an
- **status:** `todo`

**Đề gốc**

```
「ROM」とは何ですか。
```

**Options**

- **A.** 画面イメージ全体を記憶するメモリである
- **B.** 読み取り専用の半導体メモリである ✅
- **C.** 読み書き専用の半導体メモリである
- **D.** 静電気をを記録するメモリである

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | «ROM» là gì? |
| optionsVi.A | Bộ nhớ lưu toàn bộ ảnh màn hình (VRAM/frame buffer) |
| optionsVi.B | Là bộ nhớ bán dẫn chỉ đọc (ROM) |
| optionsVi.C | Là bộ nhớ bán dẫn đọc-ghi (sai khái niệm ROM) |
| optionsVi.D | Bộ nhớ ghi tĩnh điện (diễn đạt sai/lệch) |
| answerDisplay | B. Là bộ nhớ bán dẫn chỉ đọc (ROM) |

**concept**
```
• Là bộ nhớ bán dẫn chỉ đọc (ROM)
• Nghĩa: Là bộ nhớ bán dẫn chỉ đọc (ROM).
```

**whyCorrect**
```
• Là bộ nhớ bán dẫn chỉ đọc (ROM)
• Đáp án B: Là bộ nhớ bán dẫn chỉ đọc (ROM)
```

**whyWrong**

##### A
```
• Là gì? 画面イメージ全体を記憶するメモリである (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «画面イメージ全体を記憶するメモリである» (A) không thỏa: khớp đáp án «読み取り専用の半導体メモリである».
```

##### C
```
• Là gì? 読み書き専用の半導体メモリである (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «読み書き専用の半導体メモリである» (C) không thỏa: khớp đáp án «読み取り専用の半導体メモリである».
```

##### D
```
• Là gì? 静電気をを記録するメモリである (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «静電気をを記録するメモリである» (D) không thỏa: khớp đáp án «読み取り専用の半導体メモリである».
```

**whatIs**
```
{
  "A": "画面イメージ全体を記憶するメモリである (thuật ngữ JP).",
  "B": "読み取り専用の半導体メモリである (thuật ngữ JP).",
  "C": "読み書き専用の半導体メモリである (thuật ngữ JP).",
  "D": "静電気をを記録するメモリである (thuật ngữ JP)."
}
```

**intent**
```
• Câu JIT: nắm định nghĩa/thứ tự/thuật ngữ CNTT.
• Là bộ nhớ bán dẫn chỉ đọc (ROM)
```

**memoryTip**
```
(trống)
```

---

### 78/400 · `jit` id=255 · task=`pt` · num=72 · ans **B**

- **flags:** khop_dap_an
- **status:** `todo`

**Đề gốc**

```
チューリングマシンは何から構造されますか。
```

**Options**

- **A.** ヘッド、テープ、メモリ
- **B.** ヘッド、テープ ✅
- **C.** テープ、メモリ
- **D.** ヘッド、メモリ

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Máy Turing gồm những thành phần nào? |
| optionsVi.A | ヘッド、テープ、メモリ — khái niệm kỹ thuật |
| optionsVi.B | ヘッド、テープ — khái niệm kỹ thuật |
| optionsVi.C | テープ、メモリ — khái niệm kỹ thuật |
| optionsVi.D | ヘッド、メモリ — khái niệm kỹ thuật |
| answerDisplay | B. ヘッド、テープ — khái niệm kỹ thuật |

**concept**
```
• head, tape
• Nghĩa: head, tape.
```

**whyCorrect**
```
• Khái niệm CNTT trong đề thi JIT.
• Khớp stem: khớp đáp án «ヘッド、テープ».
```

**whyWrong**

##### A
```
• Là gì? ヘッド、テープ、メモリ (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «ヘッド、テープ、メモリ» (A) không thỏa: khớp đáp án «ヘッド、テープ».
```

##### C
```
• Là gì? テープ、メモリ (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «テープ、メモリ» (C) không thỏa: khớp đáp án «ヘッド、テープ».
```

##### D
```
• Là gì? ヘッド、メモリ (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «ヘッド、メモリ» (D) không thỏa: khớp đáp án «ヘッド、テープ».
```

**whatIs**
```
{
  "A": "ヘッド、テープ、メモリ (thuật ngữ JP).",
  "B": "ヘッド、テープ (thuật ngữ JP).",
  "C": "テープ、メモリ (thuật ngữ JP).",
  "D": "ヘッド、メモリ (thuật ngữ JP)."
}
```

**intent**
```
• Câu JIT: nắm định nghĩa/thứ tự/thuật ngữ CNTT.
• head, tape
```

**memoryTip**
```
(trống)
```

---

### 79/400 · `jit` id=256 · task=`pt` · num=73 · ans **D**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
故障以外で問題なのは、( ) による不具合です。
```

**Options**

- **A.** プログラム
- **B.** ウイルス
- **C.** OS
- **D.** プログラムミス ✅

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Điền từ thích hợp vào chỗ trống (xem câu gốc). |
| optionsVi.A | chương trình |
| optionsVi.B | ウイルス — khái niệm kỹ thuật |
| optionsVi.C | hệ điều hành (OS) |
| optionsVi.D | chương trình |
| answerDisplay | D. chương trình |

**concept**
```
• chương trình
• Nghĩa: chương trình.
```

**whyCorrect**
```
• Khái niệm CNTT trong đề thi JIT.
• Khớp stem: khớp đáp án «プログラムミス».
```

**whyWrong**

##### A
```
• Là gì? プログラム (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «プログラム» (A) không thỏa: khớp đáp án «プログラムミス».
```

##### B
```
• Là gì? ウイルス (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «ウイルス» (B) không thỏa: khớp đáp án «プログラムミス».
```

##### C
```
• Là gì? OS — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «OS» (C) không thỏa: khớp đáp án «プログラムミス».
```

**whatIs**
```
{
  "A": "プログラム (thuật ngữ JP).",
  "B": "ウイルス (thuật ngữ JP).",
  "C": "OS — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "プログラムミス (thuật ngữ JP)."
}
```

**intent**
```
• Câu JIT: nắm định nghĩa/thứ tự/thuật ngữ CNTT.
• chương trình
```

**memoryTip**
```
(trống)
```

---

### 80/400 · `jit` id=257 · task=`pt` · num=74 · ans **C**

- **flags:** khop_dap_an
- **status:** `todo`

**Đề gốc**

```
「bộ vi xử lý」は日本語でなんですか。
```

**Options**

- **A.** マイクロプロセッサー
- **B.** デバイスドライバ
- **C.** マイクロプロセッサ ✅
- **D.** マザーボード

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | «Bộ vi xử lý」 tiếng Nhật là gì? |
| optionsVi.A | vi xử lý |
| optionsVi.B | デバイスドライバ — khái niệm kỹ thuật |
| optionsVi.C | vi xử lý |
| optionsVi.D | mainboard (bo mạch chủ) |
| answerDisplay | C. vi xử lý |

**concept**
```
• vi xử lý
• Nghĩa: vi xử lý.
```

**whyCorrect**
```
• Khái niệm CNTT trong đề thi JIT.
• Khớp stem: khớp đáp án «マイクロプロセッサ».
```

**whyWrong**

##### A
```
• Là gì? マイクロプロセッサー (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «マイクロプロセッサー» (A) không thỏa: khớp đáp án «マイクロプロセッサ».
```

##### B
```
• Là gì? デバイスドライバ (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «デバイスドライバ» (B) không thỏa: khớp đáp án «マイクロプロセッサ».
```

##### D
```
• Là gì? マザーボード (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «マザーボード» (D) không thỏa: khớp đáp án «マイクロプロセッサ».
```

**whatIs**
```
{
  "A": "マイクロプロセッサー (thuật ngữ JP).",
  "B": "デバイスドライバ (thuật ngữ JP).",
  "C": "マイクロプロセッサ (thuật ngữ JP).",
  "D": "マザーボード (thuật ngữ JP)."
}
```

**intent**
```
• Câu JIT: nắm định nghĩa/thứ tự/thuật ngữ CNTT.
• vi xử lý
```

**memoryTip**
```
(trống)
```

---

### 81/400 · `jit` id=258 · task=`pt` · num=75 · ans **A**

- **flags:** khop_dap_an
- **status:** `todo`

**Đề gốc**

```
AさんがBさんに電子文書を送信し、Bさんがその文書の送信者を確認する方法について、本文の内容に基づき、正しく説明しているものはどれか。
```

**Options**

- **A.** Aさんは自身の秘密鍵で文書を暗号化して送信する。BさんはAさんの公開鍵で復号できれば、Aさんからの送信と確認できる。 ✅
- **B.** Aさんは自身の公開鍵で文書を暗号化して送信する。BさんはAさんの秘密鍵で復号できれば、Aさんからの送信と確認できる。
- **C.** AさんはBさんの公開鍵で文書を暗号化して送信する。Bさんは自身の秘密鍵で復号できれば、Aさんからの送信と確認できる。
- **D.** AさんはBさんの秘密鍵で文書を暗号化して送信する。Bさんは自身の公開鍵で復号できれば、Aさんからの送信と確認できる。

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | A gửi văn bản điện tử cho B; B xác nhận người gửi — cách nào đúng theo bài? |
| optionsVi.A | phát biểu về mã hóa / khóa |
| optionsVi.B | phát biểu về mã hóa / khóa |
| optionsVi.C | phát biểu về mã hóa / khóa |
| optionsVi.D | phát biểu về mã hóa / khóa |
| answerDisplay | A. phát biểu về mã hóa / khóa |

**concept**
```
• phát biểu về mã hóa / khóa
• Phát biểu / đoạn JP đã dịch đủ nghĩa.
```

**whyCorrect**
```
• phát biểu về mã hóa / khóa
• Đáp án A: phát biểu về mã hóa / khóa
```

**whyWrong**

##### B
```
• Là gì? Aさんは自身の公開鍵で文書を暗号化して送信する。BさんはAさんの秘密鍵で復号できれば、Aさんからの送信と確認できる。 (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «Aさんは自身の公開鍵で文書を暗号化して送信する。BさんはAさんの秘密鍵で復号できれば、Aさんからの送信と確…» (B) không thỏa: khớp đáp án «Aさんは自身の秘密鍵で文書を暗号化して送信する。BさんはAさんの公開鍵で復号できれば、Aさんからの送».
```

##### C
```
• Là gì? AさんはBさんの公開鍵で文書を暗号化して送信する。Bさんは自身の秘密鍵で復号できれば、Aさんからの送信と確認できる。 (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «AさんはBさんの公開鍵で文書を暗号化して送信する。Bさんは自身の秘密鍵で復号できれば、Aさんからの送信と確…» (C) không thỏa: khớp đáp án «Aさんは自身の秘密鍵で文書を暗号化して送信する。BさんはAさんの公開鍵で復号できれば、Aさんからの送».
```

##### D
```
• Là gì? AさんはBさんの秘密鍵で文書を暗号化して送信する。Bさんは自身の公開鍵で復号できれば、Aさんからの送信と確認できる。 (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «AさんはBさんの秘密鍵で文書を暗号化して送信する。Bさんは自身の公開鍵で復号できれば、Aさんからの送信と確…» (D) không thỏa: khớp đáp án «Aさんは自身の秘密鍵で文書を暗号化して送信する。BさんはAさんの公開鍵で復号できれば、Aさんからの送».
```

**whatIs**
```
{
  "A": "Aさんは自身の秘密鍵で文書を暗号化して送信する。BさんはAさんの公開鍵で復号できれば、Aさんからの送信と確認できる。 (thuật ngữ JP).",
  "B": "Aさんは自身の公開鍵で文書を暗号化して送信する。BさんはAさんの秘密鍵で復号できれば、Aさんからの送信と確認できる。 (thuật ngữ JP).",
  "C": "AさんはBさんの公開鍵で文書を暗号化して送信する。Bさんは自身の秘密鍵で復号できれば、Aさんからの送信と確認できる。 (thuật ngữ JP).",
  "D": "AさんはBさんの秘密鍵で文書を暗号化して送信する。Bさんは自身の公開鍵で復号できれば、Aさんからの送信と確認できる。 (thuật ngữ JP)."
}
```

**intent**
```
• Câu JIT: nắm định nghĩa/thứ tự/thuật ngữ CNTT.
• phát biểu về mã hóa / khóa
```

**memoryTip**
```
(trống)
```

---

### 82/400 · `jit` id=259 · task=`pt` · num=76 · ans **A**

- **flags:** khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Aさんは、Bさんに機密文書を電子メールで送信するため、公開鍵暗号方式を用いて文書を暗号化することにした。このとき、Aさんが文書を暗号化するために使用するべき鍵はどれか。
```

**Options**

- **A.** Bさんの公開鍵 ✅
- **B.** Aさんの秘密鍵
- **C.** Bさんの秘密鍵
- **D.** Aさんの公開鍵

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | A mã hóa email mật cho B bằng mật mã khóa công khai. A phải dùng khóa nào? |
| optionsVi.A | khóa công khai của B |
| optionsVi.B | khóa bí mật của A |
| optionsVi.C | khóa bí mật của B |
| optionsVi.D | khóa công khai của A |
| answerDisplay | A. khóa công khai của B |

**concept**
```
• khóa công khai của B
• Thuật ngữ: khóa công khai của B.
```

**whyCorrect**
```
• khóa công khai của B
• Đáp án A: khóa công khai của B
```

**whyWrong**

##### B
```
• Là gì? Aさんの秘密鍵 (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «Aさんの秘密鍵» (B) không thỏa: khớp đáp án «Bさんの公開鍵».
```

##### C
```
• Là gì? Bさんの秘密鍵 (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «Bさんの秘密鍵» (C) không thỏa: khớp đáp án «Bさんの公開鍵».
```

##### D
```
• Là gì? Aさんの公開鍵 (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «Aさんの公開鍵» (D) không thỏa: khớp đáp án «Bさんの公開鍵».
```

**whatIs**
```
{
  "A": "Bさんの公開鍵 (thuật ngữ JP).",
  "B": "Aさんの秘密鍵 (thuật ngữ JP).",
  "C": "Bさんの秘密鍵 (thuật ngữ JP).",
  "D": "Aさんの公開鍵 (thuật ngữ JP)."
}
```

**intent**
```
• Câu JIT: nắm định nghĩa/thứ tự/thuật ngữ CNTT.
• khóa công khai của B
```

**memoryTip**
```
(trống)
```

---

### 83/400 · `jit` id=260 · task=`pt` · num=77 · ans **D**

- **flags:** khop_dap_an
- **status:** `todo`

**Đề gốc**

```
コンピュータウイルスの予防策として、最も適切なものはどれですか。
```

**Options**

- **A.** 既知のウイルスのみを検出するよう、ウイルス対策ソフトのパターンファイルは更新しない。
- **B.** ウイルスに感染した場合は、すぐに全てのファイルを消去しパソコンを初期化する。
- **C.** ウイルス感染を防ぐには、メールの利用を完全に停止することが最も効果的である。
- **D.** ウイルス対策ソフトを購入し、パターンファイルを日常的に更新する。 ✅

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Biện pháp phòng virus máy tính nào phù hợp nhất? |
| optionsVi.A | phát biểu về virus / chống malware |
| optionsVi.B | nhiễm virus thì xóa hết file và reset (quá cực đoan) |
| optionsVi.C | ngừng hẳn email là cách phòng virus hiệu quả nhất (sai) |
| optionsVi.D | mua antivirus và cập nhật pattern hằng ngày |
| answerDisplay | D. mua antivirus và cập nhật pattern hằng ngày |

**concept**
```
• mua antivirus và cập nhật pattern hằng ngày
• Nghĩa: mua antivirus và cập nhật pattern hằng ngày.
```

**whyCorrect**
```
• mua antivirus và cập nhật pattern hằng ngày
• Đáp án D: mua antivirus và cập nhật pattern hằng ngày
```

**whyWrong**

##### A
```
• Là gì? 既知のウイルスのみを検出するよう、ウイルス対策ソフトのパターンファイルは更新しない。 (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «既知のウイルスのみを検出するよう、ウイルス対策ソフトのパターンファイルは更新しない。» (A) không thỏa: khớp đáp án «ウイルス対策ソフトを購入し、パターンファイルを日常的に更新する。».
```

##### B
```
• Là gì? ウイルスに感染した場合は、すぐに全てのファイルを消去しパソコンを初期化する。 (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «ウイルスに感染した場合は、すぐに全てのファイルを消去しパソコンを初期化する。» (B) không thỏa: khớp đáp án «ウイルス対策ソフトを購入し、パターンファイルを日常的に更新する。».
```

##### C
```
• Là gì? ウイルス感染を防ぐには、メールの利用を完全に停止することが最も効果的である。 (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «ウイルス感染を防ぐには、メールの利用を完全に停止することが最も効果的である。» (C) không thỏa: khớp đáp án «ウイルス対策ソフトを購入し、パターンファイルを日常的に更新する。».
```

**whatIs**
```
{
  "A": "既知のウイルスのみを検出するよう、ウイルス対策ソフトのパターンファイルは更新しない。 (thuật ngữ JP).",
  "B": "ウイルスに感染した場合は、すぐに全てのファイルを消去しパソコンを初期化する。 (thuật ngữ JP).",
  "C": "ウイルス感染を防ぐには、メールの利用を完全に停止することが最も効果的である。 (thuật ngữ JP).",
  "D": "ウイルス対策ソフトを購入し、パターンファイルを日常的に更新する。 (thuật ngữ JP)."
}
```

**intent**
```
• Câu JIT: nắm định nghĩa/thứ tự/thuật ngữ CNTT.
• mua antivirus và cập nhật pattern hằng ngày
```

**memoryTip**
```
(trống)
```

---

### 84/400 · `jit` id=261 · task=`pt` · num=78 · ans **D**

- **flags:** khop_dap_an
- **status:** `todo`

**Đề gốc**

```
CPUについて正しくないものをえらんでください。
```

**Options**

- **A.** 処理の中心となる部品
- **B.** 演算装置と制御装置の機能が組み込まれている
- **C.** コンピュータの頭脳
- **D.** 入力装置と出力装置の機能が組み込まれている ✅

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Chọn phát biểu SAI về CPU. |
| optionsVi.A | linh kiện trung tâm xử lý (CPU) |
| optionsVi.B | có ALU và control unit |
| optionsVi.C | máy tính |
| optionsVi.D | có input và output unit |
| answerDisplay | D. có input và output unit |

**concept**
```
• có input và output unit
• Nghĩa: có input và output unit.
```

**whyCorrect**
```
• có input và output unit
• Đáp án D: có input và output unit
```

**whyWrong**

##### A
```
• Là gì? 処理の中心となる部品 (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «処理の中心となる部品» (A) không thỏa: khớp đáp án «入力装置と出力装置の機能が組み込まれている».
```

##### B
```
• Là gì? 演算装置と制御装置の機能が組み込まれている (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «演算装置と制御装置の機能が組み込まれている» (B) không thỏa: khớp đáp án «入力装置と出力装置の機能が組み込まれている».
```

##### C
```
• Là gì? コンピュータの頭脳 (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «コンピュータの頭脳» (C) không thỏa: khớp đáp án «入力装置と出力装置の機能が組み込まれている».
```

**whatIs**
```
{
  "A": "処理の中心となる部品 (thuật ngữ JP).",
  "B": "演算装置と制御装置の機能が組み込まれている (thuật ngữ JP).",
  "C": "コンピュータの頭脳 (thuật ngữ JP).",
  "D": "入力装置と出力装置の機能が組み込まれている (thuật ngữ JP)."
}
```

**intent**
```
• Câu JIT: nắm định nghĩa/thứ tự/thuật ngữ CNTT.
• có input và output unit
```

**memoryTip**
```
(trống)
```

---

### 85/400 · `jit` id=263 · task=`pt` · num=80 · ans **D**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
以下のメモリ部品の中で、アクセス速度が一番速いのはどちらですか。
```

**Options**

- **A.** ハードディスク
- **B.** USB
- **C.** メモリ
- **D.** キャッシュ ✅

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Trong các loại bộ nhớ sau, loại nào có tốc độ truy cập cao nhất? |
| optionsVi.A | ハードディスク — khái niệm kỹ thuật |
| optionsVi.B | USB |
| optionsVi.C | メモリ — khái niệm kỹ thuật |
| optionsVi.D | bộ nhớ đệm (cache) |
| answerDisplay | D. bộ nhớ đệm (cache) |

**concept**
```
• bộ nhớ đệm (cache)
• Thuật ngữ: bộ nhớ đệm (cache).
```

**whyCorrect**
```
• bộ nhớ đệm (cache)
• Đáp án D: bộ nhớ đệm (cache)
```

**whyWrong**

##### A
```
• Là gì? ハードディスク (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «ハードディスク» (A) không thỏa: khớp đáp án «キャッシュ».
```

##### B
```
• Là gì? USB — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «USB» (B) không thỏa: khớp đáp án «キャッシュ».
```

##### C
```
• Là gì? メモリ (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «メモリ» (C) không thỏa: khớp đáp án «キャッシュ».
```

**whatIs**
```
{
  "A": "ハードディスク (thuật ngữ JP).",
  "B": "USB — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "メモリ (thuật ngữ JP).",
  "D": "キャッシュ (thuật ngữ JP)."
}
```

**intent**
```
• Câu JIT: nắm định nghĩa/thứ tự/thuật ngữ CNTT.
• bộ nhớ đệm (cache)
```

**memoryTip**
```
(trống)
```

---

### 86/400 · `jit` id=264 · task=`pt` · num=81 · ans **B**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
記憶装置は何が該当しますか。
```

**Options**

- **A.** CPU
- **B.** メモリやハードディスク ✅
- **C.** ディスプレイやプリンタ
- **D.** キーボードやマウス

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Đâu thuộc thiết bị nhớ? |
| optionsVi.A | phát biểu về CPU / bộ nhớ / bán dẫn |
| optionsVi.B | bộ nhớ và ổ cứng |
| optionsVi.C | màn hình |
| optionsVi.D | bàn phím |
| answerDisplay | B. bộ nhớ và ổ cứng |

**concept**
```
• bộ nhớ và ổ cứng
• Thuật ngữ: bộ nhớ và ổ cứng.
```

**whyCorrect**
```
• bộ nhớ và ổ cứng
• Đáp án B: bộ nhớ và ổ cứng
```

**whyWrong**

##### A
```
• Là gì? CPU — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «CPU» (A) không thỏa: khớp đáp án «メモリやハードディスク».
```

##### C
```
• Là gì? ディスプレイやプリンタ (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «ディスプレイやプリンタ» (C) không thỏa: khớp đáp án «メモリやハードディスク».
```

##### D
```
• Là gì? キーボードやマウス (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «キーボードやマウス» (D) không thỏa: khớp đáp án «メモリやハードディスク».
```

**whatIs**
```
{
  "A": "CPU — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "メモリやハードディスク (thuật ngữ JP).",
  "C": "ディスプレイやプリンタ (thuật ngữ JP).",
  "D": "キーボードやマウス (thuật ngữ JP)."
}
```

**intent**
```
• Câu JIT: nắm định nghĩa/thứ tự/thuật ngữ CNTT.
• bộ nhớ và ổ cứng
```

**memoryTip**
```
(trống)
```

---

### 87/400 · `jit` id=265 · task=`pt` · num=82 · ans **A**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
「DoS」はベトナム語で何ですか。
```

**Options**

- **A.** tấn công từ chối dịch vụ ✅
- **B.** tiêu chuẩn mã hóa dữ liệu
- **C.** hệ thống vạn năng
- **D.** hệ thống Ram động

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | DoS tiếng Việt / nghĩa là gì? |
| optionsVi.A | tấn công từ chối dịch vụ |
| optionsVi.B | tiêu chuẩn mã hóa dữ liệu |
| optionsVi.C | hệ thống vạn năng |
| optionsVi.D | hệ thống Ram động |
| answerDisplay | A. tấn công từ chối dịch vụ |

**concept**
```
• tấn công từ chối dịch vụ
• Nghĩa: tấn công từ chối dịch vụ.
```

**whyCorrect**
```
• tấn công từ chối dịch vụ. (quiz.txt)
• tấn công từ chối dịch vụ
• Đáp án A: tấn công từ chối dịch vụ
```

**whyWrong**

##### B
```
• Là gì? Mã hóa — biến plaintext thành ciphertext.
• Dùng để làm gì? Bảo mật nội dung khi truyền/lưu.
• Vì sao sai? «tiêu chuẩn mã hóa dữ liệu» (B) không thỏa: khớp đáp án «tấn công từ chối dịch vụ».
```

##### C
```
• Là gì? hệ thống vạn năng — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «hệ thống vạn năng» (C) không thỏa: khớp đáp án «tấn công từ chối dịch vụ».
```

##### D
```
• Là gì? hệ thống Ram động — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «hệ thống Ram động» (D) không thỏa: khớp đáp án «tấn công từ chối dịch vụ».
```

**whatIs**
```
{
  "A": "tấn công từ chối dịch vụ",
  "B": "Mã hóa — biến plaintext thành ciphertext.",
  "C": "hệ thống vạn năng — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "hệ thống Ram động — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Câu JIT: nắm định nghĩa/thứ tự/thuật ngữ CNTT.
• tấn công từ chối dịch vụ
```

**memoryTip**
```
(trống)
```

---

### 88/400 · `jit` id=266 · task=`pt` · num=83 · ans **A**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
ある企業のデータセンターには、重要な役割を果たすサーバーがあります。このサーバーの稼働データを分析したところ、平均故障間隔が500時間、平均修復時間が10時間であることがわかりました。このサーバーの稼働率はいくつか。
```

**Options**

- **A.** 98.0% ✅
- **B.** 97.0%
- **C.** 99.0%
- **D.** 99.5%

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Server MTBF = 500h, MTTR = 10h. Tỉ lệ hoạt động (availability) là bao nhiêu? |
| optionsVi.A | 98.0% |
| optionsVi.B | 97.0% |
| optionsVi.C | 99.0% |
| optionsVi.D | 99.5% |
| answerDisplay | A. 98.0% |

**concept**
```
• 98.0%
• Nghĩa: 98.0%.
```

**whyCorrect**
```
• Có vai trò riêng; đối chiếu với điều kiện stem.
• Khớp stem: khớp đáp án «98.0%».
```

**whyWrong**

##### B
```
• Là gì? 97.0% — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «97.0%» (B) không thỏa: khớp đáp án «98.0%».
```

##### C
```
• Là gì? 99.0% — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «99.0%» (C) không thỏa: khớp đáp án «98.0%».
```

##### D
```
• Là gì? 99.5% — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «99.5%» (D) không thỏa: khớp đáp án «98.0%».
```

**whatIs**
```
{
  "A": "98.0% — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "97.0% — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "99.0% — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "99.5% — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Câu JIT: nắm định nghĩa/thứ tự/thuật ngữ CNTT.
• 98.0%
```

**memoryTip**
```
(trống)
```

---

### 89/400 · `jit` id=268 · task=`pt` · num=85 · ans **B**

- **flags:** khop_dap_an
- **status:** `todo`

**Đề gốc**

```
「工業所有権」に属しているものはどの有権ですか。
```

**Options**

- **A.** 著作隣接権、商標権、実用新案権
- **B.** 意匠権、特許権、実用新案権 ✅
- **C.** 著作隣接権、意匠権、商標権
- **D.** 意匠権、著作権財産権、特許権

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Quyền nào thuộc «quyền sở hữu công nghiệp」? |
| optionsVi.A | quyền liền kề quyền tác giả |
| optionsVi.B | quyền giải pháp hữu ích |
| optionsVi.C | quyền liền kề quyền tác giả |
| optionsVi.D | quyền sáng chế |
| answerDisplay | B. quyền giải pháp hữu ích |

**concept**
```
• quyền giải pháp hữu ích
• Nghĩa: quyền giải pháp hữu ích.
```

**whyCorrect**
```
• quyền giải pháp hữu ích
• Đáp án B: quyền giải pháp hữu ích
```

**whyWrong**

##### A
```
• Là gì? 著作隣接権、商標権、実用新案権 (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «著作隣接権、商標権、実用新案権» (A) không thỏa: khớp đáp án «意匠権、特許権、実用新案権».
```

##### C
```
• Là gì? 著作隣接権、意匠権、商標権 (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «著作隣接権、意匠権、商標権» (C) không thỏa: khớp đáp án «意匠権、特許権、実用新案権».
```

##### D
```
• Là gì? 意匠権、著作権財産権、特許権 (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «意匠権、著作権財産権、特許権» (D) không thỏa: khớp đáp án «意匠権、特許権、実用新案権».
```

**whatIs**
```
{
  "A": "著作隣接権、商標権、実用新案権 (thuật ngữ JP).",
  "B": "意匠権、特許権、実用新案権 (thuật ngữ JP).",
  "C": "著作隣接権、意匠権、商標権 (thuật ngữ JP).",
  "D": "意匠権、著作権財産権、特許権 (thuật ngữ JP)."
}
```

**intent**
```
• Câu JIT: nắm định nghĩa/thứ tự/thuật ngữ CNTT.
• quyền giải pháp hữu ích
```

**memoryTip**
```
(trống)
```

---

### 90/400 · `jit` id=269 · task=`pt` · num=86 · ans **C**

- **flags:** khop_dap_an
- **status:** `todo`

**Đề gốc**

```
「bước đệm」は日本語で何ですか。
```

**Options**

- **A.** ぞうしょく
- **B.** ふっかつ
- **C.** ふみだい ✅
- **D.** かんすう

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | «Bước đệm」 tiếng Nhật là gì? |
| optionsVi.A | nhân lên |
| optionsVi.B | ふっかつ — khái niệm kỹ thuật |
| optionsVi.C | bệ / bước đệm |
| optionsVi.D | hàm số (kansū) |
| answerDisplay | C. bệ / bước đệm |

**concept**
```
• bệ / bước đệm
• Nghĩa: bệ / bước đệm.
```

**whyCorrect**
```
• Khái niệm CNTT trong đề thi JIT.
• Khớp stem: khớp đáp án «ふみだい».
```

**whyWrong**

##### A
```
• Là gì? ぞうしょく (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «ぞうしょく» (A) không thỏa: khớp đáp án «ふみだい».
```

##### B
```
• Là gì? ふっかつ (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «ふっかつ» (B) không thỏa: khớp đáp án «ふみだい».
```

##### D
```
• Là gì? かんすう (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «かんすう» (D) không thỏa: khớp đáp án «ふみだい».
```

**whatIs**
```
{
  "A": "ぞうしょく (thuật ngữ JP).",
  "B": "ふっかつ (thuật ngữ JP).",
  "C": "ふみだい (thuật ngữ JP).",
  "D": "かんすう (thuật ngữ JP)."
}
```

**intent**
```
• Câu JIT: nắm định nghĩa/thứ tự/thuật ngữ CNTT.
• bệ / bước đệm
```

**memoryTip**
```
(trống)
```

---

### 91/400 · `jit` id=270 · task=`pt` · num=87 · ans **D**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
「RAM」は英語で何ですか。
```

**Options**

- **A.** Random Array Memory
- **B.** Read Array Memory
- **C.** Read Access Memory
- **D.** Random Access Memory ✅

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | RAM tiếng Anh / mở rộng là gì? |
| optionsVi.A | Random Array Memory |
| optionsVi.B | Read Array Memory |
| optionsVi.C | Read Access Memory |
| optionsVi.D | Random Access Memory |
| answerDisplay | D. Random Access Memory |

**concept**
```
• Random Access Memory
• Nghĩa: Random Access Memory.
```

**whyCorrect**
```
• Random Access Memory
• Đáp án D: Random Access Memory
```

**whyWrong**

##### A
```
• Là gì? Random Array Memory — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Random Array Memory» (A) không thỏa: khớp đáp án «Random Access Memory».
```

##### B
```
• Là gì? Read Array Memory — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Read Array Memory» (B) không thỏa: khớp đáp án «Random Access Memory».
```

##### C
```
• Là gì? Read Access Memory — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Read Access Memory» (C) không thỏa: khớp đáp án «Random Access Memory».
```

**whatIs**
```
{
  "A": "Random Array Memory — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Read Array Memory — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Read Access Memory — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Random Access Memory — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Câu JIT: nắm định nghĩa/thứ tự/thuật ngữ CNTT.
• Random Access Memory
```

**memoryTip**
```
(trống)
```

---

### 92/400 · `jit` id=271 · task=`pt` · num=88 · ans **C**

- **flags:** khop_dap_an
- **status:** `todo`

**Đề gốc**

```
OSIにおいて、「隣接機器間転送」の機能は主にどの階層が担当しますか。
```

**Options**

- **A.** ネットワーク層
- **B.** 物理層
- **C.** データリンク層 ✅
- **D.** 通トランスポート層

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Trong OSI, chức năng «chuyển giữa thiết bị kề」 chủ yếu thuộc tầng nào? |
| optionsVi.A | ネットワーク層 — khái niệm kỹ thuật |
| optionsVi.B | 物理層 — khái niệm kỹ thuật |
| optionsVi.C | データリンク層 — khái niệm kỹ thuật |
| optionsVi.D | 通トランスポート層 — khái niệm kỹ thuật |
| answerDisplay | C. データリンク層 — khái niệm kỹ thuật |

**concept**
```
• tầng Data Link
• Thuật ngữ: tầng Data Link.
```

**whyCorrect**
```
• tầng Data Link
• Đáp án C: tầng Data Link
```

**whyWrong**

##### A
```
• Là gì? ネットワーク層 (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «ネットワーク層» (A) không thỏa: khớp đáp án «データリンク層».
```

##### B
```
• Là gì? 物理層 (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «物理層» (B) không thỏa: khớp đáp án «データリンク層».
```

##### D
```
• Là gì? 通トランスポート層 (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «通トランスポート層» (D) không thỏa: khớp đáp án «データリンク層».
```

**whatIs**
```
{
  "A": "ネットワーク層 (thuật ngữ JP).",
  "B": "物理層 (thuật ngữ JP).",
  "C": "データリンク層 (thuật ngữ JP).",
  "D": "通トランスポート層 (thuật ngữ JP)."
}
```

**intent**
```
• Câu JIT: nắm định nghĩa/thứ tự/thuật ngữ CNTT.
• tầng Data Link
```

**memoryTip**
```
(trống)
```

---

### 93/400 · `jit` id=272 · task=`pt` · num=89 · ans **B**

- **flags:** khop_dap_an
- **status:** `todo`

**Đề gốc**

```
「通信制御」はどのように読みますか。ベトナム語で何ですか。
```

**Options**

- **A.** つうしんせいきょ - điều khiển từ xa
- **B.** つうしんせいぎょ - điều khiển thông tin ✅
- **C.** つうしんせいぎょう - hạn chế thông tin
- **D.** つうしんせいきょ - hạn chế thông tin từ xa

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | « 」 đọc thế nào? Tiếng Việt là gì? |
| optionsVi.A | điều khiển từ xa |
| optionsVi.B | điều khiển thông tin |
| optionsVi.C | hạn chế thông tin |
| optionsVi.D | hạn chế thông tin từ xa |
| answerDisplay | B. điều khiển thông tin |

**concept**
```
• điều khiển thông tin
• Nghĩa: điều khiển thông tin.
```

**whyCorrect**
```
• - điều khiển thông tin. (quiz.txt)
• điều khiển thông tin
• Đáp án B: điều khiển thông tin
```

**whyWrong**

##### A
```
• Là gì? つうしんせいきょ - điều khiển từ xa
• Dùng để làm gì? Thuật ngữ/phát biểu trong miền CNTT tiếng Nhật.
• Vì sao sai? «つうしんせいきょ - điều khiển từ xa» (A) không thỏa: khớp đáp án «つうしんせいぎょ - điều khiển thông tin».
```

##### C
```
• Là gì? つうしんせいぎょう - hạn chế thông tin
• Dùng để làm gì? Thuật ngữ/phát biểu trong miền CNTT tiếng Nhật.
• Vì sao sai? «つうしんせいぎょう - hạn chế thông tin» (C) không thỏa: khớp đáp án «つうしんせいぎょ - điều khiển thông tin».
```

##### D
```
• Là gì? つうしんせいきょ - hạn chế thông tin từ xa
• Dùng để làm gì? Thuật ngữ/phát biểu trong miền CNTT tiếng Nhật.
• Vì sao sai? «つうしんせいきょ - hạn chế thông tin từ xa» (D) không thỏa: khớp đáp án «つうしんせいぎょ - điều khiển thông tin».
```

**whatIs**
```
{
  "A": "つうしんせいきょ - điều khiển từ xa",
  "B": "つうしんせいぎょ - điều khiển thông tin",
  "C": "つうしんせいぎょう - hạn chế thông tin",
  "D": "つうしんせいきょ - hạn chế thông tin từ xa"
}
```

**intent**
```
• Câu JIT: nắm định nghĩa/thứ tự/thuật ngữ CNTT.
• điều khiển thông tin
```

**memoryTip**
```
(trống)
```

---

### 94/400 · `jit` id=274 · task=`pt` · num=91 · ans **D**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
メモリ空間には、番地が割り当てられるところは何と呼ばれましたか。
```

**Options**

- **A.** Cookie
- **B.** ハードディスク
- **C.** Cache
- **D.** 記憶アドレス ✅

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Trong không gian nhớ, nơi được gán địa chỉ gọi là gì? |
| optionsVi.A | cookie |
| optionsVi.B | ハードディスク — khái niệm kỹ thuật |
| optionsVi.C | Cache |
| optionsVi.D | địa chỉ nhớ |
| answerDisplay | D. địa chỉ nhớ |

**concept**
```
• địa chỉ nhớ
• Nghĩa: địa chỉ nhớ.
```

**whyCorrect**
```
• Khái niệm CNTT trong đề thi JIT.
• Khớp stem: khớp đáp án «記憶アドレス».
```

**whyWrong**

##### A
```
• Là gì? Cookie — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Cookie» (A) không thỏa: khớp đáp án «記憶アドレス».
```

##### B
```
• Là gì? ハードディスク (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «ハードディスク» (B) không thỏa: khớp đáp án «記憶アドレス».
```

##### C
```
• Là gì? Cache — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Cache» (C) không thỏa: khớp đáp án «記憶アドレス».
```

**whatIs**
```
{
  "A": "Cookie — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "ハードディスク (thuật ngữ JP).",
  "C": "Cache — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "記憶アドレス (thuật ngữ JP)."
}
```

**intent**
```
• Câu JIT: nắm định nghĩa/thứ tự/thuật ngữ CNTT.
• địa chỉ nhớ
```

**memoryTip**
```
(trống)
```

---

### 95/400 · `jit` id=275 · task=`pt` · num=92 · ans **B**

- **flags:** khop_dap_an
- **status:** `todo`

**Đề gốc**

```
コンピュータウィルスについて正しくないものをえらんでください。
```

**Options**

- **A.** 伝染し、潜伏期間をおいて発病する過程が生物のウィルス
- **B.** 個人のパソコンをねらった犯罪 ✅
- **C.** 人為的に作成されたプログラム
- **D.** 感染経路 là、USBメモリやインターネットを利用したメール、ホームページを経由する

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Chọn phát biểu SAI về máy tính. |
| optionsVi.A | lây → ủ → phát bệnh như virus sinh học |
| optionsVi.B | tội nhắm PC cá nhân |
| optionsVi.C | chương trình |
| optionsVi.D | Đường lây nhiễm: USB, email qua Internet, trang web… |
| answerDisplay | B. tội nhắm PC cá nhân |

**concept**
```
• tội nhắm PC cá nhân
• Nghĩa: tội nhắm PC cá nhân.
```

**whyCorrect**
```
• tội nhắm PC cá nhân
• Đáp án B: tội nhắm PC cá nhân
```

**whyWrong**

##### A
```
• Là gì? 伝染し、潜伏期間をおいて発病する過程が生物のウィルス (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «伝染し、潜伏期間をおいて発病する過程が生物のウィルス» (A) không thỏa: khớp đáp án «個人のパソコンをねらった犯罪».
```

##### C
```
• Là gì? 人為的に作成されたプログラム (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «人為的に作成されたプログラム» (C) không thỏa: khớp đáp án «個人のパソコンをねらった犯罪».
```

##### D
```
• Là gì? 感染経路 là、USBメモリやインターネットを利用したメール、ホームページを経由する
• Dùng để làm gì? Thuật ngữ/phát biểu trong miền CNTT tiếng Nhật.
• Vì sao sai? «感染経路 là、USBメモリやインターネットを利用したメール、ホームページを経由する» (D) không thỏa: khớp đáp án «個人のパソコンをねらった犯罪».
```

**whatIs**
```
{
  "A": "伝染し、潜伏期間をおいて発病する過程が生物のウィルス (thuật ngữ JP).",
  "B": "個人のパソコンをねらった犯罪 (thuật ngữ JP).",
  "C": "人為的に作成されたプログラム (thuật ngữ JP).",
  "D": "感染経路 là、USBメモリやインターネットを利用したメール、ホームページを経由する"
}
```

**intent**
```
• Câu JIT: nắm định nghĩa/thứ tự/thuật ngữ CNTT.
• tội nhắm PC cá nhân
```

**memoryTip**
```
(trống)
```

---

### 96/400 · `jit` id=277 · task=`pt` · num=94 · ans **C**

- **flags:** khop_dap_an
- **status:** `todo`

**Đề gốc**

```
「_」のキーボードの記号はどのように読みますか。
```

**Options**

- **A.** アスタリスク
- **B.** ハット
- **C.** アンダーバー ✅
- **D.** チルダ

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Ký hiệu «_」 trên bàn phím đọc như thế nào? |
| optionsVi.A | アスタリスク — khái niệm kỹ thuật |
| optionsVi.B | ハット — khái niệm kỹ thuật |
| optionsVi.C | gạch dưới (_) |
| optionsVi.D | dấu ngã (~) |
| answerDisplay | C. gạch dưới (_) |

**concept**
```
• gạch dưới (_)
• Thuật ngữ: gạch dưới (_).
```

**whyCorrect**
```
• Khái niệm CNTT trong đề thi JIT.
• Khớp stem: khớp đáp án «アンダーバー».
```

**whyWrong**

##### A
```
• Là gì? アスタリスク (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «アスタリスク» (A) không thỏa: khớp đáp án «アンダーバー».
```

##### B
```
• Là gì? ハット (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «ハット» (B) không thỏa: khớp đáp án «アンダーバー».
```

##### D
```
• Là gì? チルダ (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «チルダ» (D) không thỏa: khớp đáp án «アンダーバー».
```

**whatIs**
```
{
  "A": "アスタリスク (thuật ngữ JP).",
  "B": "ハット (thuật ngữ JP).",
  "C": "アンダーバー (thuật ngữ JP).",
  "D": "チルダ (thuật ngữ JP)."
}
```

**intent**
```
• Câu JIT: nắm định nghĩa/thứ tự/thuật ngữ CNTT.
• gạch dưới (_)
```

**memoryTip**
```
(trống)
```

---

### 97/400 · `jit` id=279 · task=`pt` · num=96 · ans **B**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
「バス」はベトナム語で何ですか。
```

**Options**

- **A.** đường dẫn
- **B.** mạng máy tính dạng kênh ✅
- **C.** sao lưu
- **D.** bàn tính

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | « 」 (bus) tiếng Việt là gì? |
| optionsVi.A | đường dẫn |
| optionsVi.B | mạng máy tính dạng kênh |
| optionsVi.C | sao lưu |
| optionsVi.D | bàn tính |
| answerDisplay | B. mạng máy tính dạng kênh |

**concept**
```
• mạng máy tính dạng kênh
• Nghĩa: mạng máy tính dạng kênh.
```

**whyCorrect**
```
• mạng máy tính dạng kênh. (quiz.txt)
• mạng máy tính dạng kênh
• Đáp án B: mạng máy tính dạng kênh
```

**whyWrong**

##### A
```
• Là gì? đường dẫn — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «đường dẫn» (A) không thỏa: khớp đáp án «mạng máy tính dạng kênh».
```

##### C
```
• Là gì? sao lưu — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «sao lưu» (C) không thỏa: khớp đáp án «mạng máy tính dạng kênh».
```

##### D
```
• Là gì? bàn tính — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «bàn tính» (D) không thỏa: khớp đáp án «mạng máy tính dạng kênh».
```

**whatIs**
```
{
  "A": "đường dẫn — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "mạng máy tính dạng kênh",
  "C": "sao lưu — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "bàn tính — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Câu JIT: nắm định nghĩa/thứ tự/thuật ngữ CNTT.
• mạng máy tính dạng kênh
```

**memoryTip**
```
(trống)
```

---

### 98/400 · `jit` id=280 · task=`pt` · num=97 · ans **C**

- **flags:** khop_dap_an
- **status:** `todo`

**Đề gốc**

```
「転置式」はどのように読みますか。ベトナム語で何ですか。
```

**Options**

- **A.** てんほうしき - mã hóa hoán vị
- **B.** うんちしき - mã hóa hoán vị
- **C.** てんちしき - kiểu hoán vị ✅
- **D.** うんほうしき - kiểu hoán vị

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | « 」 đọc thế nào? Tiếng Việt là gì? |
| optionsVi.A | mã hóa hoán vị |
| optionsVi.B | mã hóa hoán vị |
| optionsVi.C | kiểu hoán vị |
| optionsVi.D | kiểu hoán vị |
| answerDisplay | C. kiểu hoán vị |

**concept**
```
• kiểu hoán vị
• Nghĩa: kiểu hoán vị.
```

**whyCorrect**
```
• - kiểu hoán vị. (quiz.txt)
• kiểu hoán vị
• Đáp án C: kiểu hoán vị
```

**whyWrong**

##### A
```
• Là gì? Mã hóa — biến plaintext thành ciphertext.
• Dùng để làm gì? Bảo mật nội dung khi truyền/lưu.
• Vì sao sai? «てんほうしき - mã hóa hoán vị» (A) không thỏa: khớp đáp án «てんちしき - kiểu hoán vị».
```

##### B
```
• Là gì? Mã hóa — biến plaintext thành ciphertext.
• Dùng để làm gì? Bảo mật nội dung khi truyền/lưu.
• Vì sao sai? «うんちしき - mã hóa hoán vị» (B) không thỏa: khớp đáp án «てんちしき - kiểu hoán vị».
```

##### D
```
• Là gì? うんほうしき - kiểu hoán vị
• Dùng để làm gì? Thuật ngữ/phát biểu trong miền CNTT tiếng Nhật.
• Vì sao sai? «うんほうしき - kiểu hoán vị» (D) không thỏa: khớp đáp án «てんちしき - kiểu hoán vị».
```

**whatIs**
```
{
  "A": "Mã hóa — biến plaintext thành ciphertext.",
  "B": "Mã hóa — biến plaintext thành ciphertext.",
  "C": "てんちしき - kiểu hoán vị",
  "D": "うんほうしき - kiểu hoán vị"
}
```

**intent**
```
• Câu JIT: nắm định nghĩa/thứ tự/thuật ngữ CNTT.
• kiểu hoán vị
```

**memoryTip**
```
(trống)
```

---

### 99/400 · `jit` id=281 · task=`pt` · num=98 · ans **C**

- **flags:** khop_dap_an
- **status:** `todo`

**Đề gốc**

```
ある回路の入力Xと出力Yの関係が、Y = NOT X で表されるとき、この回路は何回路と呼ばれますか。
```

**Options**

- **A.** OR回路
- **B.** AND回路
- **C.** NOT回路 ✅
- **D.** XOR回路

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Mạch Y = NOT X được gọi là mạch gì? |
| optionsVi.A | mạch OR |
| optionsVi.B | mạch AND |
| optionsVi.C | mạch NOT |
| optionsVi.D | mạch XOR |
| answerDisplay | C. mạch NOT |

**concept**
```
• mạch NOT
• Thuật ngữ: mạch NOT.
```

**whyCorrect**
```
• Khái niệm CNTT trong đề thi JIT.
• Khớp stem: khớp đáp án «NOT回路».
```

**whyWrong**

##### A
```
• Là gì? OR回路 (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «OR回路» (A) không thỏa: khớp đáp án «NOT回路».
```

##### B
```
• Là gì? AND回路 (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «AND回路» (B) không thỏa: khớp đáp án «NOT回路».
```

##### D
```
• Là gì? XOR回路 (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «XOR回路» (D) không thỏa: khớp đáp án «NOT回路».
```

**whatIs**
```
{
  "A": "OR回路 (thuật ngữ JP).",
  "B": "AND回路 (thuật ngữ JP).",
  "C": "NOT回路 (thuật ngữ JP).",
  "D": "XOR回路 (thuật ngữ JP)."
}
```

**intent**
```
• Câu JIT: nắm định nghĩa/thứ tự/thuật ngữ CNTT.
• mạch NOT
```

**memoryTip**
```
(trống)
```

---

### 100/400 · `jit` id=283 · task=`pt` · num=100 · ans **B**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
「流通過程」はベトナム語で何ですか。
```

**Options**

- **A.** quá trình di chuyển
- **B.** quá trình lưu thông ✅
- **C.** quá trình vận hành
- **D.** quá trình vận hành

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | « 」 tiếng Việt là gì? |
| optionsVi.A | quá trình di chuyển |
| optionsVi.B | quá trình lưu thông |
| optionsVi.C | quá trình vận hành |
| optionsVi.D | quá trình vận hành |
| answerDisplay | B. quá trình lưu thông |

**concept**
```
• quá trình lưu thông
• Nghĩa: quá trình lưu thông.
```

**whyCorrect**
```
• quá trình lưu thông. (quiz.txt)
• quá trình lưu thông
• Đáp án B: quá trình lưu thông
```

**whyWrong**

##### A
```
• Là gì? quá trình di chuyển — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «quá trình di chuyển» (A) không thỏa: khớp đáp án «quá trình lưu thông».
```

##### C
```
• Là gì? quá trình vận hành — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «quá trình vận hành» (C) không thỏa: khớp đáp án «quá trình lưu thông».
```

##### D
```
• Là gì? quá trình vận hành — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «quá trình vận hành» (D) không thỏa: khớp đáp án «quá trình lưu thông».
```

**whatIs**
```
{
  "A": "quá trình di chuyển — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "quá trình lưu thông — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "quá trình vận hành — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "quá trình vận hành — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Câu JIT: nắm định nghĩa/thứ tự/thuật ngữ CNTT.
• quá trình lưu thông
```

**memoryTip**
```
(trống)
```

---

### 101/400 · `jit` id=284 · task=`pt` · num=101 · ans **A**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
「ブロードバンド」は英語で何ですか。ベトナム語で何ですか。
```

**Options**

- **A.** broadband - băng rộng ✅
- **B.** brodband - băng tần
- **C.** buroadband - băng rộng
- **D.** burodband - băng tần

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Broadband tiếng Anh/Việt nghĩa là gì? |
| optionsVi.A | broadband - băng rộng |
| optionsVi.B | brodband - băng tần |
| optionsVi.C | buroadband - băng rộng |
| optionsVi.D | burodband - băng tần |
| answerDisplay | A. broadband - băng rộng |

**concept**
```
• băng rộng
• Nghĩa: băng rộng.
```

**whyCorrect**
```
• broadband - băng rộng. (quiz.txt)
• băng rộng
• Đáp án A: băng rộng
```

**whyWrong**

##### B
```
• Là gì? brodband - băng tần — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «brodband - băng tần» (B) không thỏa: khớp đáp án «broadband - băng rộng».
```

##### C
```
• Là gì? buroadband - băng rộng
• Dùng để làm gì? Phạm trù/khái niệm trong lý thuyết đề cập.
• Vì sao sai? «buroadband - băng rộng» (C) không thỏa: khớp đáp án «broadband - băng rộng».
```

##### D
```
• Là gì? burodband - băng tần
• Dùng để làm gì? Phạm trù/khái niệm trong lý thuyết đề cập.
• Vì sao sai? «burodband - băng tần» (D) không thỏa: khớp đáp án «broadband - băng rộng».
```

**whatIs**
```
{
  "A": "broadband - băng rộng",
  "B": "brodband - băng tần — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "buroadband - băng rộng",
  "D": "burodband - băng tần"
}
```

**intent**
```
• Câu JIT: nắm định nghĩa/thứ tự/thuật ngữ CNTT.
• băng rộng
```

**memoryTip**
```
(trống)
```

---

### 102/400 · `jit` id=286 · task=`pt` · num=103 · ans **C**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
NTTドコモのFOMAの商品は何世代携帯電話のものですか。
```

**Options**

- **A.** 4G
- **B.** 2G
- **C.** 3G ✅
- **D.** 3.5G

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Sản phẩm FOMA của NTT DoCoMo thuộc điện thoại thế hệ mấy? |
| optionsVi.A | 4G |
| optionsVi.B | 2G |
| optionsVi.C | 3G |
| optionsVi.D | 3.5G |
| answerDisplay | C. 3G |

**concept**
```
• 3G — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
```

**whyCorrect**
```
• Có vai trò riêng; đối chiếu với điều kiện stem.
• Khớp stem: khớp đáp án «3G».
```

**whyWrong**

##### A
```
• Là gì? 4G — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «4G» (A) không thỏa: khớp đáp án «3G».
```

##### B
```
• Là gì? 2G — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «2G» (B) không thỏa: khớp đáp án «3G».
```

##### D
```
• Là gì? 3.5G — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «3.5G» (D) không thỏa: khớp đáp án «3G».
```

**whatIs**
```
{
  "A": "4G — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "2G — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "3G — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "3.5G — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Câu JIT: nắm định nghĩa/thứ tự/thuật ngữ CNTT.
• 3G
```

**memoryTip**
```
(trống)
```

---

### 103/400 · `jit` id=287 · task=`pt` · num=104 · ans **C**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
「EDI」は英語でどの言葉に略されましたか。
```

**Options**

- **A.** Electronic Data International
- **B.** Electronical Data International
- **C.** Electronic Data Interchange ✅
- **D.** Electronical Data Interchange

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | EDI là viết tắt tiếng Anh của cụm nào? |
| optionsVi.A | Electronic Data International |
| optionsVi.B | Electronical Data International |
| optionsVi.C | Electronic Data Interchange |
| optionsVi.D | Electronical Data Interchange |
| answerDisplay | C. Electronic Data Interchange |

**concept**
```
• Electronic Data Interchange
• Nghĩa: Electronic Data Interchange.
```

**whyCorrect**
```
• Electronic Data Interchange
• Đáp án C: Electronic Data Interchange
```

**whyWrong**

##### A
```
• Là gì? Electronic Data International — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Electronic Data International» (A) không thỏa: khớp đáp án «Electronic Data Interchange».
```

##### B
```
• Là gì? Electronical Data International — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Electronical Data International» (B) không thỏa: khớp đáp án «Electronic Data Interchange».
```

##### D
```
• Là gì? Electronical Data Interchange — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Electronical Data Interchange» (D) không thỏa: khớp đáp án «Electronic Data Interchange».
```

**whatIs**
```
{
  "A": "Electronic Data International — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Electronical Data International — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Electronic Data Interchange — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Electronical Data Interchange — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Câu JIT: nắm định nghĩa/thứ tự/thuật ngữ CNTT.
• Electronic Data Interchange
```

**memoryTip**
```
(trống)
```

---

### 104/400 · `jit` id=288 · task=`pt` · num=105 · ans **C**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
ある会社のシステムは、3つの装置A、B、Cで構成されています。AとBは並列接続され、それらがCと直列接続されています。各装置の稼働率はそれぞれ0.9、0.9、0.95であるとき、システム全体の稼働率はいくつか。
```

**Options**

- **A.** 89.5%
- **B.** 92.5%
- **C.** 94.0% ✅
- **D.** 91.0%

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Hệ A∥B rồi nối tiếp C; R_A=R_B=0.9, R_C=0.95. Độ tin cậy hệ thống là bao nhiêu? |
| optionsVi.A | 89.5% |
| optionsVi.B | 92.5% |
| optionsVi.C | 94.0% |
| optionsVi.D | 91.0% |
| answerDisplay | C. 94.0% |

**concept**
```
• 94.0%
• Nghĩa: 94.0%.
```

**whyCorrect**
```
• Có vai trò riêng; đối chiếu với điều kiện stem.
• Khớp stem: khớp đáp án «94.0%».
```

**whyWrong**

##### A
```
• Là gì? 89.5% — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «89.5%» (A) không thỏa: khớp đáp án «94.0%».
```

##### B
```
• Là gì? 92.5% — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «92.5%» (B) không thỏa: khớp đáp án «94.0%».
```

##### D
```
• Là gì? 91.0% — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «91.0%» (D) không thỏa: khớp đáp án «94.0%».
```

**whatIs**
```
{
  "A": "89.5% — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "92.5% — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "94.0% — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "91.0% — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Câu JIT: nắm định nghĩa/thứ tự/thuật ngữ CNTT.
• 94.0%
```

**memoryTip**
```
(trống)
```

---

### 105/400 · `jit` id=289 · task=`pt` · num=106 · ans **C**

- **flags:** khop_dap_an
- **status:** `todo`

**Đề gốc**

```
指先とのセンサの間に蓄えられる電荷を測定する方式は何の方式ですか。
```

**Options**

- **A.** CMOSのセンサの方式
- **B.** セグメントの方式
- **C.** 静電容量方式 ✅
- **D.** 抵抗膜方式

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Cách đo điện tích giữa đầu ngón và cảm biến là kiểu cảm ứng nào? |
| optionsVi.A | kiểu cảm biến CMOS |
| optionsVi.B | cách/segment method |
| optionsVi.C | cảm ứng điện dung |
| optionsVi.D | cảm ứng điện trở |
| answerDisplay | C. cảm ứng điện dung |

**concept**
```
• cảm ứng điện dung
• Nghĩa: cảm ứng điện dung.
```

**whyCorrect**
```
• cảm ứng điện dung
• Đáp án C: cảm ứng điện dung
```

**whyWrong**

##### A
```
• Là gì? CMOSのセンサの方式 (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «CMOSのセンサの方式» (A) không thỏa: khớp đáp án «静電容量方式».
```

##### B
```
• Là gì? セグメントの方式 (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «セグメントの方式» (B) không thỏa: khớp đáp án «静電容量方式».
```

##### D
```
• Là gì? 抵抗膜方式 (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «抵抗膜方式» (D) không thỏa: khớp đáp án «静電容量方式».
```

**whatIs**
```
{
  "A": "CMOSのセンサの方式 (thuật ngữ JP).",
  "B": "セグメントの方式 (thuật ngữ JP).",
  "C": "静電容量方式 (thuật ngữ JP).",
  "D": "抵抗膜方式 (thuật ngữ JP)."
}
```

**intent**
```
• Câu JIT: nắm định nghĩa/thứ tự/thuật ngữ CNTT.
• cảm ứng điện dung
```

**memoryTip**
```
(trống)
```

---

### 106/400 · `jit` id=290 · task=`pt` · num=107 · ans **D**

- **flags:** khop_dap_an
- **status:** `todo`

**Đề gốc**

```
「単結晶」はどのように読みますか。また、ベトナム語で何ですか。
```

**Options**

- **A.** たんけつしょう - đơn giản
- **B.** たんけつしょ - đơn kết tinh
- **C.** たんけっしょ - đa kết tinh
- **D.** たんけっしょう - đơn kết tinh ✅

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | « 」 đọc thế nào? Tiếng Việt là gì? |
| optionsVi.A | đơn giản |
| optionsVi.B | đơn kết tinh |
| optionsVi.C | đa kết tinh |
| optionsVi.D | đơn kết tinh |
| answerDisplay | D. đơn kết tinh |

**concept**
```
• đơn kết tinh
• Nghĩa: đơn kết tinh.
```

**whyCorrect**
```
• - đơn kết tinh. (quiz.txt)
• đơn kết tinh
• Đáp án D: đơn kết tinh
```

**whyWrong**

##### A
```
• Là gì? たんけつしょう - đơn giản
• Dùng để làm gì? Thuật ngữ/phát biểu trong miền CNTT tiếng Nhật.
• Vì sao sai? «たんけつしょう - đơn giản» (A) không thỏa: khớp đáp án «たんけっしょう - đơn kết tinh».
```

##### B
```
• Là gì? たんけつしょ - đơn kết tinh
• Dùng để làm gì? Thuật ngữ/phát biểu trong miền CNTT tiếng Nhật.
• Vì sao sai? «たんけつしょ - đơn kết tinh» (B) không thỏa: khớp đáp án «たんけっしょう - đơn kết tinh».
```

##### C
```
• Là gì? たんけっしょ - đa kết tinh
• Dùng để làm gì? Thuật ngữ/phát biểu trong miền CNTT tiếng Nhật.
• Vì sao sai? «たんけっしょ - đa kết tinh» (C) không thỏa: khớp đáp án «たんけっしょう - đơn kết tinh».
```

**whatIs**
```
{
  "A": "たんけつしょう - đơn giản",
  "B": "たんけつしょ - đơn kết tinh",
  "C": "たんけっしょ - đa kết tinh",
  "D": "たんけっしょう - đơn kết tinh"
}
```

**intent**
```
• Câu JIT: nắm định nghĩa/thứ tự/thuật ngữ CNTT.
• đơn kết tinh
```

**memoryTip**
```
(trống)
```

---

### 107/400 · `jit` id=291 · task=`pt` · num=108 · ans **C**

- **flags:** khop_dap_an
- **status:** `todo`

**Đề gốc**

```
コンピュータのCPUにおいて、バスの主な役割として最も適切なものはどれか。
```

**Options**

- **A.** 演算装置と制御装置の処理速度を向上させること
- **B.** 電源をコンピュータの各部位に供給すること
- **C.** CPU内部でデータのやりとりをすること ✅
- **D.** 命令を解釈し、他の装置に制御信号を送ること

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | máy tính là cái nào? |
| optionsVi.A | tăng tốc ALU và control unit |
| optionsVi.B | máy tính |
| optionsVi.C | trao đổi dữ liệu trong CPU |
| optionsVi.D | giải mã lệnh, gửi tín hiệu điều khiển |
| answerDisplay | C. trao đổi dữ liệu trong CPU |

**concept**
```
• trao đổi dữ liệu trong CPU
• Thuật ngữ: trao đổi dữ liệu trong CPU.
```

**whyCorrect**
```
• trao đổi dữ liệu trong CPU
• Đáp án C: trao đổi dữ liệu trong CPU
```

**whyWrong**

##### A
```
• Là gì? 演算装置と制御装置の処理速度を向上させること (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «演算装置と制御装置の処理速度を向上させること» (A) không thỏa: khớp đáp án «CPU内部でデータのやりとりをすること».
```

##### B
```
• Là gì? 電源をコンピュータの各部位に供給すること (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «電源をコンピュータの各部位に供給すること» (B) không thỏa: khớp đáp án «CPU内部でデータのやりとりをすること».
```

##### D
```
• Là gì? 命令を解釈し、他の装置に制御信号を送ること (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «命令を解釈し、他の装置に制御信号を送ること» (D) không thỏa: khớp đáp án «CPU内部でデータのやりとりをすること».
```

**whatIs**
```
{
  "A": "演算装置と制御装置の処理速度を向上させること (thuật ngữ JP).",
  "B": "電源をコンピュータの各部位に供給すること (thuật ngữ JP).",
  "C": "CPU内部でデータのやりとりをすること (thuật ngữ JP).",
  "D": "命令を解釈し、他の装置に制御信号を送ること (thuật ngữ JP)."
}
```

**intent**
```
• Câu JIT: nắm định nghĩa/thứ tự/thuật ngữ CNTT.
• trao đổi dữ liệu trong CPU
```

**memoryTip**
```
(trống)
```

---

### 108/400 · `jit` id=292 · task=`pt` · num=109 · ans **B**

- **flags:** khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Chọn cách gọi tên đúng của hệ thống trong hình
```

**Options**

- **A.** 直列システム
- **B.** 並列システム ✅
- **C.** 集中システム
- **D.** 分散システム

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Chọn cách gọi tên đúng của hệ thống trong hình |
| optionsVi.A | 直列システム — khái niệm kỹ thuật |
| optionsVi.B | 並列システム — khái niệm kỹ thuật |
| optionsVi.C | 集中システム — khái niệm kỹ thuật |
| optionsVi.D | hệ thống phân tán |
| answerDisplay | B. 並列システム — khái niệm kỹ thuật |

**concept**
```
• hệ thống song song
• Thuật ngữ: hệ thống song song.
```

**whyCorrect**
```
• hệ thống song song
• Đáp án B: hệ thống song song
```

**whyWrong**

##### A
```
• Là gì? 直列システム (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «直列システム» (A) không thỏa: khớp đáp án «並列システム».
```

##### C
```
• Là gì? 集中システム (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «集中システム» (C) không thỏa: khớp đáp án «並列システム».
```

##### D
```
• Là gì? 分散システム (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «分散システム» (D) không thỏa: khớp đáp án «並列システム».
```

**whatIs**
```
{
  "A": "直列システム (thuật ngữ JP).",
  "B": "並列システム (thuật ngữ JP).",
  "C": "集中システム (thuật ngữ JP).",
  "D": "分散システム (thuật ngữ JP)."
}
```

**intent**
```
• Câu JIT: nắm định nghĩa/thứ tự/thuật ngữ CNTT.
• hệ thống song song
```

**memoryTip**
```
(trống)
```

---

### 109/400 · `jit` id=5 · task=`quiz` · num=5 · ans **C**

- **flags:** khop_dap_an
- **status:** `todo`

**Đề gốc**

```
電子式計算機ENIACが開発された年はいつか。
```

**Options**

- **A.** 1930年
- **B.** 1939年
- **C.** 1946年 ✅
- **D.** 1949年

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Máy tính điện tử ENIAC được phát triển năm nào? |
| optionsVi.A | năm 1930 |
| optionsVi.B | năm 1939 |
| optionsVi.C | năm 1946 |
| optionsVi.D | năm 1949 |
| answerDisplay | C. năm 1946 |

**concept**
```
• năm 1946
• Thuật ngữ: năm 1946.
```

**whyCorrect**
```
• năm 1946 — ENIAC năm 1946 máy tính điện tử 。
• năm 1946
• Đáp án C: năm 1946
```

**whyWrong**

##### A
```
• Là gì? 1930年 (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «1930年» (A) không thỏa: khớp đáp án «1946年».
```

##### B
```
• Là gì? 1939年 (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «1939年» (B) không thỏa: khớp đáp án «1946年».
```

##### D
```
• Là gì? 1949年 (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «1949年» (D) không thỏa: khớp đáp án «1946年».
```

**whatIs**
```
{
  "A": "1930年 (thuật ngữ JP).",
  "B": "1939年 (thuật ngữ JP).",
  "C": "1946年 (thuật ngữ JP).",
  "D": "1949年 (thuật ngữ JP)."
}
```

**intent**
```
• Câu JIT: nắm định nghĩa/thứ tự/thuật ngữ CNTT.
• năm 1946
```

**memoryTip**
```
(trống)
```

---

### 110/400 · `jit` id=6 · task=`quiz` · num=6 · ans **C**

- **flags:** khop_dap_an
- **status:** `todo`

**Đề gốc**

```
フォン・ノイマンのプログラム内蔵方式コンピュータが登場したのはいつか。
```

**Options**

- **A.** 1939年
- **B.** 1946年
- **C.** 1949年 ✅
- **D.** 1930年

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Máy tính kiểu chương trình lưu trong bộ nhớ (von Neumann) xuất hiện khi nào? |
| optionsVi.A | năm 1939 |
| optionsVi.B | năm 1946 |
| optionsVi.C | năm 1949 |
| optionsVi.D | năm 1930 |
| answerDisplay | C. năm 1949 |

**concept**
```
• năm 1949
• Thuật ngữ: năm 1949.
```

**whyCorrect**
```
• năm 1949 — von Neumannmáy tính năm 1949 、 máy tính 。
• năm 1949
• Đáp án C: năm 1949
```

**whyWrong**

##### A
```
• Là gì? 1939年 (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «1939年» (A) không thỏa: khớp đáp án «1949年».
```

##### B
```
• Là gì? 1946年 (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «1946年» (B) không thỏa: khớp đáp án «1949年».
```

##### D
```
• Là gì? 1930年 (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «1930年» (D) không thỏa: khớp đáp án «1949年».
```

**whatIs**
```
{
  "A": "1939年 (thuật ngữ JP).",
  "B": "1946年 (thuật ngữ JP).",
  "C": "1949年 (thuật ngữ JP).",
  "D": "1930年 (thuật ngữ JP)."
}
```

**intent**
```
• Câu JIT: nắm định nghĩa/thứ tự/thuật ngữ CNTT.
• năm 1949
```

**memoryTip**
```
(trống)
```

---

### 111/400 · `jit` id=8 · task=`quiz` · num=8 · ans **C**

- **flags:** khop_dap_an
- **status:** `todo`

**Đề gốc**

```
コンピュータを1つの式で表すと何になるか。
```

**Options**

- **A.** コンピュータ ＝ 入力 ＋ 出力
- **B.** コンピュータ ＝ 演算 ＋ 通信
- **C.** コンピュータ ＝ 記憶 ＋ 処理 ✅
- **D.** コンピュータ ＝ 表示 ＋ 制御

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Biểu diễn máy tính bằng một công thức thì được gì? |
| optionsVi.A | Máy tính = vào + ra (thiếu) |
| optionsVi.B | Máy tính = tính + truyền thông (thiếu) |
| optionsVi.C | Máy tính = nhớ + xử lý (thiếu) |
| optionsVi.D | Máy tính = hiển thị + điều khiển (thiếu) |
| answerDisplay | C. Máy tính = nhớ + xử lý (thiếu) |

**concept**
```
• Máy tính = nhớ + xử lý (thiếu)
• Nghĩa: Máy tính = nhớ + xử lý (thiếu).
```

**whyCorrect**
```
• máy tính = ghi nhớ + xử lý — máy tính 「 」 「 」 （§1.4）。
• Máy tính = nhớ + xử lý (thiếu)
• Đáp án C: Máy tính = nhớ + xử lý (thiếu)
```

**whyWrong**

##### A
```
• Là gì? コンピュータ ＝ 入力 ＋ 出力 (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «コンピュータ ＝ 入力 ＋ 出力» (A) không thỏa: khớp đáp án «コンピュータ ＝ 記憶 ＋ 処理».
```

##### B
```
• Là gì? コンピュータ ＝ 演算 ＋ 通信 (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «コンピュータ ＝ 演算 ＋ 通信» (B) không thỏa: khớp đáp án «コンピュータ ＝ 記憶 ＋ 処理».
```

##### D
```
• Là gì? コンピュータ ＝ 表示 ＋ 制御 (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «コンピュータ ＝ 表示 ＋ 制御» (D) không thỏa: khớp đáp án «コンピュータ ＝ 記憶 ＋ 処理».
```

**whatIs**
```
{
  "A": "コンピュータ ＝ 入力 ＋ 出力 (thuật ngữ JP).",
  "B": "コンピュータ ＝ 演算 ＋ 通信 (thuật ngữ JP).",
  "C": "コンピュータ ＝ 記憶 ＋ 処理 (thuật ngữ JP).",
  "D": "コンピュータ ＝ 表示 ＋ 制御 (thuật ngữ JP)."
}
```

**intent**
```
• Câu JIT: nắm định nghĩa/thứ tự/thuật ngữ CNTT.
• Máy tính = nhớ + xử lý (thiếu)
```

**memoryTip**
```
(trống)
```

---

### 112/400 · `jit` id=11 · task=`quiz` · num=11 · ans **C**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Excelファイルの拡張子はどれか。
```

**Options**

- **A.** .doc
- **B.** .htm
- **C.** .xls ✅
- **D.** .pdf

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Phần mở rộng của file Excel là gì? |
| optionsVi.A | .doc |
| optionsVi.B | .htm |
| optionsVi.C | .xls |
| optionsVi.D | .pdf |
| answerDisplay | C. .xls |

**concept**
```
• .xls
• Nghĩa: .xls.
```

**whyCorrect**
```
• Có vai trò riêng; đối chiếu với điều kiện stem.
• Khớp stem: khớp đáp án «.xls».
```

**whyWrong**

##### A
```
• Là gì? .doc — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «.doc» (A) không thỏa: khớp đáp án «.xls».
```

##### B
```
• Là gì? .htm — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «.htm» (B) không thỏa: khớp đáp án «.xls».
```

##### D
```
• Là gì? .pdf — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «.pdf» (D) không thỏa: khớp đáp án «.xls».
```

**whatIs**
```
{
  "A": ".doc — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": ".htm — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": ".xls — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": ".pdf — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Câu JIT: nắm định nghĩa/thứ tự/thuật ngữ CNTT.
• .xls
```

**memoryTip**
```
(trống)
```

---

### 113/400 · `jit` id=12 · task=`quiz` · num=12 · ans **D**

- **flags:** khop_dap_an
- **status:** `todo`

**Đề gốc**

```
ファイルの種類を識別するために、ファイル名に付けられる（ ）のことを拡張子という。
```

**Options**

- **A.** アイコン
- **B.** ドライブ名
- **C.** フォルダ名
- **D.** ファイル名の後ろの文字列 ✅

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Chuỗi gắn sau tên file để nhận loại file gọi là phần mở rộng ( … ). |
| optionsVi.A | biểu tượng (icon) |
| optionsVi.B | ổ đĩa (drive) |
| optionsVi.C | thư mục (folder) |
| optionsVi.D | Chuỗi ký tự sau tên file (phần mở rộng) |
| answerDisplay | D. Chuỗi ký tự sau tên file (phần mở rộng) |

**concept**
```
• Chuỗi ký tự sau tên file (phần mở rộng)
• Nghĩa: Chuỗi ký tự sau tên file (phần mở rộng).
```

**whyCorrect**
```
• tệp (file) ký tự / chữ — phần mở rộng (extension) tệp (file) 、tệp (file) （:.doc,.xls）。
• Chuỗi ký tự sau tên file (phần mở rộng)
• Đáp án D: Chuỗi ký tự sau tên file (phần mở rộng)
```

**whyWrong**

##### A
```
• Là gì? アイコン (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «アイコン» (A) không thỏa: khớp đáp án «ファイル名の後ろの文字列».
```

##### B
```
• Là gì? ドライブ名 (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «ドライブ名» (B) không thỏa: khớp đáp án «ファイル名の後ろの文字列».
```

##### C
```
• Là gì? フォルダ名 (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «フォルダ名» (C) không thỏa: khớp đáp án «ファイル名の後ろの文字列».
```

**whatIs**
```
{
  "A": "アイコン (thuật ngữ JP).",
  "B": "ドライブ名 (thuật ngữ JP).",
  "C": "フォルダ名 (thuật ngữ JP).",
  "D": "ファイル名の後ろの文字列 (thuật ngữ JP)."
}
```

**intent**
```
• Câu JIT: nắm định nghĩa/thứ tự/thuật ngữ CNTT.
• Chuỗi ký tự sau tên file (phần mở rộng)
```

**memoryTip**
```
(trống)
```

---

### 114/400 · `jit` id=13 · task=`quiz` · num=13 · ans **D**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
HTMLファイルの拡張子はどれか。
```

**Options**

- **A.** .doc
- **B.** .xls
- **C.** .zip
- **D.** .htm ✅

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Phần mở rộng của file HTML là gì? |
| optionsVi.A | .doc |
| optionsVi.B | .xls |
| optionsVi.C | .zip |
| optionsVi.D | .htm |
| answerDisplay | D. .htm |

**concept**
```
• .htm
• Nghĩa: .htm.
```

**whyCorrect**
```
• Có vai trò riêng; đối chiếu với điều kiện stem.
• Khớp stem: khớp đáp án «.htm».
```

**whyWrong**

##### A
```
• Là gì? .doc — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «.doc» (A) không thỏa: khớp đáp án «.htm».
```

##### B
```
• Là gì? .xls — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «.xls» (B) không thỏa: khớp đáp án «.htm».
```

##### C
```
• Là gì? .zip — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «.zip» (C) không thỏa: khớp đáp án «.htm».
```

**whatIs**
```
{
  "A": ".doc — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": ".xls — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": ".zip — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": ".htm — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Câu JIT: nắm định nghĩa/thứ tự/thuật ngữ CNTT.
• .htm
```

**memoryTip**
```
(trống)
```

---

### 115/400 · `jit` id=15 · task=`quiz` · num=15 · ans **B**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
ホームページのアドレスのことを（ ）という。
```

**Options**

- **A.** IP
- **B.** URL ✅
- **C.** HTML
- **D.** DNS

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Địa chỉ trang web được gọi là ( … ). |
| optionsVi.A | IP |
| optionsVi.B | URL |
| optionsVi.C | HTML |
| optionsVi.D | DNS |
| answerDisplay | B. URL |

**concept**
```
• URL
• Thuật ngữ: URL.
```

**whyCorrect**
```
• Có vai trò riêng; đối chiếu với điều kiện stem.
• Khớp stem: khớp đáp án «URL».
```

**whyWrong**

##### A
```
• Là gì? IP — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «IP» (A) không thỏa: khớp đáp án «URL».
```

##### C
```
• Là gì? HTML — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «HTML» (C) không thỏa: khớp đáp án «URL».
```

##### D
```
• Là gì? DNS — phân giải tên miền ↔ địa chỉ IP.
• Dùng để làm gì? Tra cứu name server.
• Vì sao sai? «DNS» (D) không thỏa: khớp đáp án «URL».
```

**whatIs**
```
{
  "A": "IP — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "URL — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "HTML — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "DNS — phân giải tên miền ↔ địa chỉ IP."
}
```

**intent**
```
• Câu JIT: nắm định nghĩa/thứ tự/thuật ngữ CNTT.
• URL
```

**memoryTip**
```
(trống)
```

---

### 116/400 · `jit` id=16 · task=`quiz` · num=16 · ans **C**

- **flags:** khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Web 2.0という言葉を2004年に提唱したのは誰か。
```

**Options**

- **A.** エリック・シュミット
- **B.** スティーブ・ジョブズ
- **C.** ティム・オライリー ✅
- **D.** ビル・ゲイツ

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Ai đề xướng thuật ngữ «Web 2.0» năm 2004? |
| optionsVi.A | エリック・シュミット — khái niệm kỹ thuật |
| optionsVi.B | スティーブ・ジョブズ — khái niệm kỹ thuật |
| optionsVi.C | ティム・オライリー — khái niệm kỹ thuật |
| optionsVi.D | ビル・ゲイツ — khái niệm kỹ thuật |
| answerDisplay | C. ティム・オライリー — khái niệm kỹ thuật |

**concept**
```
• Tim O'Reilly
• Thuật ngữ: Tim O'Reilly.
```

**whyCorrect**
```
• Khái niệm CNTT trong đề thi JIT.
• Khớp stem: khớp đáp án «ティム・オライリー».
```

**whyWrong**

##### A
```
• Là gì? エリック・シュミット (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «エリック・シュミット» (A) không thỏa: khớp đáp án «ティム・オライリー».
```

##### B
```
• Là gì? スティーブ・ジョブズ (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «スティーブ・ジョブズ» (B) không thỏa: khớp đáp án «ティム・オライリー».
```

##### D
```
• Là gì? ビル・ゲイツ (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «ビル・ゲイツ» (D) không thỏa: khớp đáp án «ティム・オライリー».
```

**whatIs**
```
{
  "A": "エリック・シュミット (thuật ngữ JP).",
  "B": "スティーブ・ジョブズ (thuật ngữ JP).",
  "C": "ティム・オライリー (thuật ngữ JP).",
  "D": "ビル・ゲイツ (thuật ngữ JP)."
}
```

**intent**
```
• Câu JIT: nắm định nghĩa/thứ tự/thuật ngữ CNTT.
• Tim O'Reilly
```

**memoryTip**
```
(trống)
```

---

### 117/400 · `jit` id=18 · task=`quiz` · num=18 · ans **C**

- **flags:** khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Web2.0について正しくないものをえらんでください。
```

**Options**

- **A.** SNSの普及
- **B.** ユーザ自身がコンテンツを作成・共有できる
- **C.** 情報の送り手と受け手が固定されている ✅
- **D.** ブログやWikiを活用できる

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Chọn phát biểu SAI về Web2.0. |
| optionsVi.A | SNSの普及 — khái niệm kỹ thuật |
| optionsVi.B | Người dùng tự tạo và chia sẻ nội dung |
| optionsVi.C | Bên gửi và bên nhận thông tin cố định |
| optionsVi.D | có thể dùng blog/Wiki |
| answerDisplay | C. Bên gửi và bên nhận thông tin cố định |

**concept**
```
• Bên gửi và bên nhận thông tin cố định
• Nghĩa: Bên gửi và bên nhận thông tin cố định.
```

**whyCorrect**
```
• Bên gửi và bên nhận thông tin cố định
• Đáp án C: Bên gửi và bên nhận thông tin cố định
```

**whyWrong**

##### A
```
• Là gì? SNSの普及 (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «SNSの普及» (A) không thỏa: khớp đáp án «情報の送り手と受け手が固定されている».
```

##### B
```
• Là gì? ユーザ自身がコンテンツを作成・共有できる (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «ユーザ自身がコンテンツを作成・共有できる» (B) không thỏa: khớp đáp án «情報の送り手と受け手が固定されている».
```

##### D
```
• Là gì? ブログやWikiを活用できる (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «ブログやWikiを活用できる» (D) không thỏa: khớp đáp án «情報の送り手と受け手が固定されている».
```

**whatIs**
```
{
  "A": "SNSの普及 (thuật ngữ JP).",
  "B": "ユーザ自身がコンテンツを作成・共有できる (thuật ngữ JP).",
  "C": "情報の送り手と受け手が固定されている (thuật ngữ JP).",
  "D": "ブログやWikiを活用できる (thuật ngữ JP)."
}
```

**intent**
```
• Câu JIT: nắm định nghĩa/thứ tự/thuật ngữ CNTT.
• Bên gửi và bên nhận thông tin cố định
```

**memoryTip**
```
(trống)
```

---

### 118/400 · `jit` id=19 · task=`quiz` · num=19 · ans **C**

- **flags:** khop_dap_an
- **status:** `todo`

**Đề gốc**

```
クラウドコンピューティングという言葉を2006年に提唱したのは誰か。
```

**Options**

- **A.** ティム・オライリー
- **B.** スティーブ・ジョブズ
- **C.** エリック・シュミット ✅
- **D.** マーク・ザッカーバーグ

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Ai đề xướng thuật ngữ «điện toán đám mây» năm 2006? |
| optionsVi.A | ティム・オライリー — khái niệm kỹ thuật |
| optionsVi.B | スティーブ・ジョブズ — khái niệm kỹ thuật |
| optionsVi.C | エリック・シュミット — khái niệm kỹ thuật |
| optionsVi.D | マーク・ザッカーバーグ — khái niệm kỹ thuật |
| answerDisplay | C. エリック・シュミット — khái niệm kỹ thuật |

**concept**
```
• Eric Schmidt
• Thuật ngữ: Eric Schmidt.
```

**whyCorrect**
```
• Khái niệm CNTT trong đề thi JIT.
• Khớp stem: khớp đáp án «エリック・シュミット».
```

**whyWrong**

##### A
```
• Là gì? ティム・オライリー (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «ティム・オライリー» (A) không thỏa: khớp đáp án «エリック・シュミット».
```

##### B
```
• Là gì? スティーブ・ジョブズ (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «スティーブ・ジョブズ» (B) không thỏa: khớp đáp án «エリック・シュミット».
```

##### D
```
• Là gì? マーク・ザッカーバーグ (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «マーク・ザッカーバーグ» (D) không thỏa: khớp đáp án «エリック・シュミット».
```

**whatIs**
```
{
  "A": "ティム・オライリー (thuật ngữ JP).",
  "B": "スティーブ・ジョブズ (thuật ngữ JP).",
  "C": "エリック・シュミット (thuật ngữ JP).",
  "D": "マーク・ザッカーバーグ (thuật ngữ JP)."
}
```

**intent**
```
• Câu JIT: nắm định nghĩa/thứ tự/thuật ngữ CNTT.
• Eric Schmidt
```

**memoryTip**
```
(trống)
```

---

### 119/400 · `jit` id=21 · task=`quiz` · num=21 · ans **B**

- **flags:** khop_dap_an
- **status:** `todo`

**Đề gốc**

```
メール利用のネチケットとして正しくないものをえらんでください。
```

**Options**

- **A.** 自分の氏名・連絡先を明記する
- **B.** 著作権のあるファイルを送ってよい ✅
- **C.** 大きな添付ファイルを送らない
- **D.** 添付ファイルのウィルスをチェックする

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Đâu là phát biểu SAI về netiquette (phép lịch sự mạng)? |
| optionsVi.A | ghi rõ họ tên/liên hệ của mình |
| optionsVi.B | Được gửi file có bản quyền (thường sai trong ngữ cảnh) |
| optionsVi.C | 大きな添付ファイルを送らない — khái niệm kỹ thuật |
| optionsVi.D | Kiểm tra virus file đính kèm |
| answerDisplay | B. Được gửi file có bản quyền (thường sai trong ngữ cảnh) |

**concept**
```
• Được gửi file có bản quyền (thường sai trong ngữ cảnh)
• Nghĩa: Được gửi file có bản quyền (thường sai trong ngữ cảnh).
```

**whyCorrect**
```
• Được gửi file có bản quyền (thường sai trong ngữ cảnh)
• Đáp án B: Được gửi file có bản quyền (thường sai trong ngữ cảnh)
```

**whyWrong**

##### A
```
• Là gì? 自分の氏名・連絡先を明記する (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «自分の氏名・連絡先を明記する» (A) không thỏa: khớp đáp án «著作権のあるファイルを送ってよい».
```

##### C
```
• Là gì? 大きな添付ファイルを送らない (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «大きな添付ファイルを送らない» (C) không thỏa: khớp đáp án «著作権のあるファイルを送ってよい».
```

##### D
```
• Là gì? 添付ファイルのウィルスをチェックする (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «添付ファイルのウィルスをチェックする» (D) không thỏa: khớp đáp án «著作権のあるファイルを送ってよい».
```

**whatIs**
```
{
  "A": "自分の氏名・連絡先を明記する (thuật ngữ JP).",
  "B": "著作権のあるファイルを送ってよい (thuật ngữ JP).",
  "C": "大きな添付ファイルを送らない (thuật ngữ JP).",
  "D": "添付ファイルのウィルスをチェックする (thuật ngữ JP)."
}
```

**intent**
```
• Câu JIT: nắm định nghĩa/thứ tự/thuật ngữ CNTT.
• Được gửi file có bản quyền (thường sai trong ngữ cảnh)
```

**memoryTip**
```
(trống)
```

---

### 120/400 · `jit` id=22 · task=`quiz` · num=22 · ans **B**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
メールの添付ファイルで即座に削除すべき拡張子はどれか。
```

**Options**

- **A.** .doc / .xls / .pdf
- **B.** .exe / .vbs / .scr / .pif ✅
- **C.** .jpg / .png / .gif
- **D.** .htm / .html / .xml

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Phần mở rộng file đính kèm email nào nên xóa ngay? |
| optionsVi.A | .doc / .xls / .pdf |
| optionsVi.B | .exe / .vbs / .scr / .pif |
| optionsVi.C | .jpg / .png / .gif |
| optionsVi.D | .htm / .html / .xml |
| answerDisplay | B. .exe / .vbs / .scr / .pif |

**concept**
```
• .exe / .vbs / .scr / .pif
• Nghĩa: .exe / .vbs / .scr / .pif.
```

**whyCorrect**
```
• .exe / .vbs / .scr / .pif
• Đáp án B: .exe / .vbs / .scr / .pif
```

**whyWrong**

##### A
```
• Là gì? .doc / .xls / .pdf — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «.doc / .xls / .pdf» (A) không thỏa: khớp đáp án «.exe / .vbs / .scr / .pif».
```

##### C
```
• Là gì? .jpg / .png / .gif — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «.jpg / .png / .gif» (C) không thỏa: khớp đáp án «.exe / .vbs / .scr / .pif».
```

##### D
```
• Là gì? .htm / .html / .xml — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «.htm / .html / .xml» (D) không thỏa: khớp đáp án «.exe / .vbs / .scr / .pif».
```

**whatIs**
```
{
  "A": ".doc / .xls / .pdf — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": ".exe / .vbs / .scr / .pif — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": ".jpg / .png / .gif — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": ".htm / .html / .xml — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Câu JIT: nắm định nghĩa/thứ tự/thuật ngữ CNTT.
• .exe / .vbs / .scr / .pif
```

**memoryTip**
```
(trống)
```

---

### 121/400 · `jit` id=25 · task=`quiz` · num=25 · ans **C**

- **flags:** khop_dap_an
- **status:** `todo`

**Đề gốc**

```
製品のデザインについての権利を何というか。
```

**Options**

- **A.** 特許権
- **B.** 実用新案権
- **C.** 意匠権 ✅
- **D.** 商標権

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Quyền về thiết kế sản phẩm gọi là gì? |
| optionsVi.A | quyền sáng chế |
| optionsVi.B | quyền giải pháp hữu ích |
| optionsVi.C | quyền kiểu dáng (ý thiết kế) |
| optionsVi.D | quyền nhãn hiệu |
| answerDisplay | C. quyền kiểu dáng (ý thiết kế) |

**concept**
```
• quyền kiểu dáng (ý thiết kế)
• Thuật ngữ: quyền kiểu dáng (ý thiết kế).
```

**whyCorrect**
```
• quyền kiểu dáng — quyền kiểu dáng (ý thiết kế)（ ） （ ） （§2.5）。
• quyền kiểu dáng (ý thiết kế)
• Đáp án C: quyền kiểu dáng (ý thiết kế)
```

**whyWrong**

##### A
```
• Là gì? 特許権 (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «特許権» (A) không thỏa: khớp đáp án «意匠権».
```

##### B
```
• Là gì? 実用新案権 (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «実用新案権» (B) không thỏa: khớp đáp án «意匠権».
```

##### D
```
• Là gì? 商標権 (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «商標権» (D) không thỏa: khớp đáp án «意匠権».
```

**whatIs**
```
{
  "A": "特許権 (thuật ngữ JP).",
  "B": "実用新案権 (thuật ngữ JP).",
  "C": "意匠権 (thuật ngữ JP).",
  "D": "商標権 (thuật ngữ JP)."
}
```

**intent**
```
• Câu JIT: nắm định nghĩa/thứ tự/thuật ngữ CNTT.
• quyền kiểu dáng (ý thiết kế)
```

**memoryTip**
```
(trống)
```

---

### 122/400 · `jit` id=26 · task=`quiz` · num=26 · ans **D**

- **flags:** khop_dap_an
- **status:** `todo`

**Đề gốc**

```
社名やロゴなどの商標を保護する権利を何というか。
```

**Options**

- **A.** 特許権
- **B.** 意匠権
- **C.** 実用新案権
- **D.** 商標権 ✅

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Quyền bảo hộ tên công ty/logo (nhãn hiệu) gọi là gì? |
| optionsVi.A | quyền sáng chế |
| optionsVi.B | quyền kiểu dáng (ý thiết kế) |
| optionsVi.C | quyền giải pháp hữu ích |
| optionsVi.D | quyền nhãn hiệu |
| answerDisplay | D. quyền nhãn hiệu |

**concept**
```
• quyền nhãn hiệu
• Thuật ngữ: quyền nhãn hiệu.
```

**whyCorrect**
```
• quyền nhãn hiệu — quyền nhãn hiệu（ ） 「 」 （§2.5）。
• quyền nhãn hiệu
• Đáp án D: quyền nhãn hiệu
```

**whyWrong**

##### A
```
• Là gì? 特許権 (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «特許権» (A) không thỏa: khớp đáp án «商標権».
```

##### B
```
• Là gì? 意匠権 (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «意匠権» (B) không thỏa: khớp đáp án «商標権».
```

##### C
```
• Là gì? 実用新案権 (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «実用新案権» (C) không thỏa: khớp đáp án «商標権».
```

**whatIs**
```
{
  "A": "特許権 (thuật ngữ JP).",
  "B": "意匠権 (thuật ngữ JP).",
  "C": "実用新案権 (thuật ngữ JP).",
  "D": "商標権 (thuật ngữ JP)."
}
```

**intent**
```
• Câu JIT: nắm định nghĩa/thứ tự/thuật ngữ CNTT.
• quyền nhãn hiệu
```

**memoryTip**
```
(trống)
```

---

### 123/400 · `jit` id=29 · task=`quiz` · num=29 · ans **B**

- **flags:** khop_dap_an
- **status:** `todo`

**Đề gốc**

```
第1世代携帯電話の通信方式はどれか。
```

**Options**

- **A.** デジタル通信
- **B.** アナログ通信 ✅
- **C.** 光通信
- **D.** パケット通信

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Phương thức truyền thông điện thoại di động thế hệ 1 là gì? |
| optionsVi.A | デジタル通信 — Tín hiệu/dữ liệu số (rời rạc, 0/1). |
| optionsVi.B | tương tự (analog) |
| optionsVi.C | truyền thông quang |
| optionsVi.D | gói tin (packet) |
| answerDisplay | B. tương tự (analog) |

**concept**
```
• tương tự (analog)
• Nghĩa: tương tự (analog).
```

**whyCorrect**
```
• truyền thông analog — điện thoại di động thế hệ 1 tương tự (analog) （§3.1）。
• tương tự (analog)
• Đáp án B: tương tự (analog)
```

**whyWrong**

##### A
```
• Là gì? Tín hiệu/dữ liệu số (rời rạc, 0/1).
• Dùng để làm gì? Digital representation.
• Vì sao sai? «デジタル通信» (A) không thỏa: khớp đáp án «アナログ通信».
```

##### C
```
• Là gì? 光通信 (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «光通信» (C) không thỏa: khớp đáp án «アナログ通信».
```

##### D
```
• Là gì? Packet/gói dữ liệu mạng.
• Dùng để làm gì? Chia nhỏ truyền trên mạng gói.
• Vì sao sai? «パケット通信» (D) không thỏa: khớp đáp án «アナログ通信».
```

**whatIs**
```
{
  "A": "Tín hiệu/dữ liệu số (rời rạc, 0/1).",
  "B": "Tín hiệu tương tự liên tục (dòng/áp…).",
  "C": "光通信 (thuật ngữ JP).",
  "D": "Packet/gói dữ liệu mạng."
}
```

**intent**
```
• Câu JIT: nắm định nghĩa/thứ tự/thuật ngữ CNTT.
• tương tự (analog)
```

**memoryTip**
```
(trống)
```

---

### 124/400 · `jit` id=30 · task=`quiz` · num=30 · ans **C**

- **flags:** khop_dap_an
- **status:** `todo`

**Đề gốc**

```
タッチパネルの「静電容量方式」では何を測定するか。
```

**Options**

- **A.** 縦横の抵抗値
- **B.** 赤外線の反射
- **C.** 指先とセンサの間に蓄えられる電荷 ✅
- **D.** 超音波の振動

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Với màn hình cảm ứng, đo cái gì? |
| optionsVi.A | giá trị điện trở dọc/ngang |
| optionsVi.B | phản xạ hồng ngoại |
| optionsVi.C | Điện tích tích giữa đầu ngón và cảm biến |
| optionsVi.D | dao động siêu âm |
| answerDisplay | C. Điện tích tích giữa đầu ngón và cảm biến |

**concept**
```
• Điện tích tích giữa đầu ngón và cảm biến
• Nghĩa: Điện tích tích giữa đầu ngón và cảm biến.
```

**whyCorrect**
```
• Điện tích tích giữa đầu ngón và cảm biến
• Đáp án C: Điện tích tích giữa đầu ngón và cảm biến
```

**whyWrong**

##### A
```
• Là gì? 縦横の抵抗値 (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «縦横の抵抗値» (A) không thỏa: khớp đáp án «指先とセンサの間に蓄えられる電荷».
```

##### B
```
• Là gì? 赤外線の反射 (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «赤外線の反射» (B) không thỏa: khớp đáp án «指先とセンサの間に蓄えられる電荷».
```

##### D
```
• Là gì? 超音波の振動 (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «超音波の振動» (D) không thỏa: khớp đáp án «指先とセンサの間に蓄えられる電荷».
```

**whatIs**
```
{
  "A": "縦横の抵抗値 (thuật ngữ JP).",
  "B": "赤外線の反射 (thuật ngữ JP).",
  "C": "指先とセンサの間に蓄えられる電荷 (thuật ngữ JP).",
  "D": "超音波の振動 (thuật ngữ JP)."
}
```

**intent**
```
• Câu JIT: nắm định nghĩa/thứ tự/thuật ngữ CNTT.
• Điện tích tích giữa đầu ngón và cảm biến
```

**memoryTip**
```
(trống)
```

---

### 125/400 · `jit` id=33 · task=`quiz` · num=33 · ans **C**

- **flags:** khop_dap_an
- **status:** `todo`

**Đề gốc**

```
タッチパネルの「抵抗膜方式」について正しくないものをえらんでください。
```

**Options**

- **A.** 押された部分の縦横の抵抗値を測定する
- **B.** 圧力を感知する仕組み
- **C.** 指先の電荷を測定して位置を検出する ✅
- **D.** 接触した位置を検出できる

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Chọn phát biểu SAI về màn hình cảm ứng. |
| optionsVi.A | Đo điện trở dọc/ngang chỗ chạm (cảm ứng điện trở) |
| optionsVi.B | cơ chế cảm nhận áp lực |
| optionsVi.C | Đo điện tích đầu ngón tay để xác định vị trí (cảm ứng điện dung) |
| optionsVi.D | phát hiện được vị trí chạm |
| answerDisplay | C. Đo điện tích đầu ngón tay để xác định vị trí (cảm ứng điện dung) |

**concept**
```
• Đo điện tích đầu ngón tay để xác định vị trí (cảm ứng điện dung)
• Nghĩa: Đo điện tích đầu ngón tay để xác định vị trí (cảm ứng điện dung).
```

**whyCorrect**
```
• Đo điện tích đầu ngón tay để xác định vị trí (cảm ứng điện dung)
• Đáp án C: Đo điện tích đầu ngón tay để xác định vị trí (cảm ứng điện dung)
```

**whyWrong**

##### A
```
• Là gì? 押された部分の縦横の抵抗値を測定する (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «押された部分の縦横の抵抗値を測定する» (A) không thỏa: khớp đáp án «指先の電荷を測定して位置を検出する».
```

##### B
```
• Là gì? 圧力を感知する仕組み (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «圧力を感知する仕組み» (B) không thỏa: khớp đáp án «指先の電荷を測定して位置を検出する».
```

##### D
```
• Là gì? 接触した位置を検出できる (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «接触した位置を検出できる» (D) không thỏa: khớp đáp án «指先の電荷を測定して位置を検出する».
```

**whatIs**
```
{
  "A": "押された部分の縦横の抵抗値を測定する (thuật ngữ JP).",
  "B": "圧力を感知する仕組み (thuật ngữ JP).",
  "C": "指先の電荷を測定して位置を検出する (thuật ngữ JP).",
  "D": "接触した位置を検出できる (thuật ngữ JP)."
}
```

**intent**
```
• Câu JIT: nắm định nghĩa/thứ tự/thuật ngữ CNTT.
• Đo điện tích đầu ngón tay để xác định vị trí (cảm ứng điện dung)
```

**memoryTip**
```
(trống)
```

---

### 126/400 · `jit` id=34 · task=`quiz` · num=34 · ans **B**

- **flags:** khop_dap_an
- **status:** `todo`

**Đề gốc**

```
CMOSセンサはカメラ内でどのような役割を持つか。
```

**Options**

- **A.** 温度を記録する
- **B.** 光の強弱を記録する素子と増幅器が並んだセンサ ✅
- **C.** 磁気を記録する
- **D.** 音波を検出する

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | cảm biến CMOS đóng vai trò gì trong máy ảnh? |
| optionsVi.A | ghi nhiệt độ |
| optionsVi.B | Cảm biến gồm phần tử ghi sáng tối + khuếch đại |
| optionsVi.C | 磁気を記録する — khái niệm kỹ thuật |
| optionsVi.D | phát hiện sóng âm |
| answerDisplay | B. Cảm biến gồm phần tử ghi sáng tối + khuếch đại |

**concept**
```
• Cảm biến gồm phần tử ghi sáng tối + khuếch đại
• Nghĩa: Cảm biến gồm phần tử ghi sáng tối + khuếch đại.
```

**whyCorrect**
```
• Cảm biến gồm phần tử ghi sáng tối + khuếch đại
• Đáp án B: Cảm biến gồm phần tử ghi sáng tối + khuếch đại
```

**whyWrong**

##### A
```
• Là gì? 温度を記録する (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «温度を記録する» (A) không thỏa: khớp đáp án «光の強弱を記録する素子と増幅器が並んだセンサ».
```

##### C
```
• Là gì? 磁気を記録する (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «磁気を記録する» (C) không thỏa: khớp đáp án «光の強弱を記録する素子と増幅器が並んだセンサ».
```

##### D
```
• Là gì? 音波を検出する (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «音波を検出する» (D) không thỏa: khớp đáp án «光の強弱を記録する素子と増幅器が並んだセンサ».
```

**whatIs**
```
{
  "A": "温度を記録する (thuật ngữ JP).",
  "B": "光の強弱を記録する素子と増幅器が並んだセンサ (thuật ngữ JP).",
  "C": "磁気を記録する (thuật ngữ JP).",
  "D": "音波を検出する (thuật ngữ JP)."
}
```

**intent**
```
• Câu JIT: nắm định nghĩa/thứ tự/thuật ngữ CNTT.
• Cảm biến gồm phần tử ghi sáng tối + khuếch đại
```

**memoryTip**
```
(trống)
```

---

### 127/400 · `jit` id=35 · task=`quiz` · num=35 · ans **C**

- **flags:** khop_dap_an
- **status:** `todo`

**Đề gốc**

```
FTTH（光ファイバ通信）の最大通信速度はどれか。
```

**Options**

- **A.** 約40 Mbps
- **B.** 約50 Mbps
- **C.** 約100 Mbps ✅
- **D.** 約1 Kbps

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Tốc độ truyền tối đa của FTTH (cáp quang) là bao nhiêu? |
| optionsVi.A | khoảng 40 Mbps |
| optionsVi.B | khoảng 50 Mbps |
| optionsVi.C | khoảng 100 Mbps |
| optionsVi.D | khoảng 1 Kbps |
| answerDisplay | C. khoảng 100 Mbps |

**concept**
```
• khoảng 100 Mbps
• Thuật ngữ: khoảng 100 Mbps.
```

**whyCorrect**
```
• khoảng 100 Mbps
• Đáp án C: khoảng 100 Mbps
```

**whyWrong**

##### A
```
• Là gì? 約40 Mbps (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «約40 Mbps» (A) không thỏa: khớp đáp án «約100 Mbps».
```

##### B
```
• Là gì? 約50 Mbps (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «約50 Mbps» (B) không thỏa: khớp đáp án «約100 Mbps».
```

##### D
```
• Là gì? 約1 Kbps (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «約1 Kbps» (D) không thỏa: khớp đáp án «約100 Mbps».
```

**whatIs**
```
{
  "A": "約40 Mbps (thuật ngữ JP).",
  "B": "約50 Mbps (thuật ngữ JP).",
  "C": "約100 Mbps (thuật ngữ JP).",
  "D": "約1 Kbps (thuật ngữ JP)."
}
```

**intent**
```
• Câu JIT: nắm định nghĩa/thứ tự/thuật ngữ CNTT.
• khoảng 100 Mbps
```

**memoryTip**
```
(trống)
```

---

### 128/400 · `jit` id=38 · task=`quiz` · num=38 · ans **C**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
【専門知識】次の質問に対して、正しい答えを１つ選びなさい。「電灯線を利用してデータ通信を行う技術」はどれですか。
```

**Options**

- **A.** FTTH
- **B.** ADSL
- **C.** PLC ✅
- **D.** CATV

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | 【Chuyên môn】Chọn một đáp án đúng cho câu hỏi trong đề. |
| optionsVi.A | FTTH |
| optionsVi.B | ADSL |
| optionsVi.C | PLC |
| optionsVi.D | CATV |
| answerDisplay | C. PLC |

**concept**
```
• PLC
• Nghĩa: PLC.
```

**whyCorrect**
```
• Có vai trò riêng; đối chiếu với điều kiện stem.
• Khớp stem: phát biểu đúng/sai khớp cơ chế.
```

**whyWrong**

##### A
```
• Là gì? FTTH — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «FTTH» (A) không thỏa: phát biểu đúng/sai khớp cơ chế.
```

##### B
```
• Là gì? ADSL — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «ADSL» (B) không thỏa: phát biểu đúng/sai khớp cơ chế.
```

##### D
```
• Là gì? CATV — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «CATV» (D) không thỏa: phát biểu đúng/sai khớp cơ chế.
```

**whatIs**
```
{
  "A": "FTTH — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "ADSL — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "PLC — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "CATV — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Câu JIT: nắm định nghĩa/thứ tự/thuật ngữ CNTT.
• PLC
```

**memoryTip**
```
(trống)
```

---

### 129/400 · `jit` id=39 · task=`quiz` · num=39 · ans **C**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Wi-Fiは何の略か。
```

**Options**

- **A.** Wireless Function
- **B.** Wide Fidelity
- **C.** Wireless Fidelity ✅
- **D.** Wide Frequency

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Wi-Fi là viết tắt của gì? |
| optionsVi.A | Wireless Function |
| optionsVi.B | Wide Fidelity |
| optionsVi.C | Wireless Fidelity |
| optionsVi.D | Wide Frequency |
| answerDisplay | C. Wireless Fidelity |

**concept**
```
• Wireless Fidelity
• Nghĩa: Wireless Fidelity.
```

**whyCorrect**
```
• Wireless Fidelity
• Đáp án C: Wireless Fidelity
```

**whyWrong**

##### A
```
• Là gì? Wireless Function — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Wireless Function» (A) không thỏa: khớp đáp án «Wireless Fidelity».
```

##### B
```
• Là gì? Wide Fidelity — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Wide Fidelity» (B) không thỏa: khớp đáp án «Wireless Fidelity».
```

##### D
```
• Là gì? Wide Frequency — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Wide Frequency» (D) không thỏa: khớp đáp án «Wireless Fidelity».
```

**whatIs**
```
{
  "A": "Wireless Function — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Wide Fidelity — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Wireless Fidelity — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Wide Frequency — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Câu JIT: nắm định nghĩa/thứ tự/thuật ngữ CNTT.
• Wireless Fidelity
```

**memoryTip**
```
(trống)
```

---

### 130/400 · `jit` id=40 · task=`quiz` · num=40 · ans **D**

- **flags:** khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Bluetoothについて正しくないものをえらんでください。
```

**Options**

- **A.** 約10mの通信範囲を持つ
- **B.** 携帯電話やパソコンに搭載されている
- **C.** 通信速度は約1 Mbps
- **D.** 赤外線を使って通信する ✅

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Chọn phát biểu SAI về Bluetooth. |
| optionsVi.A | tầm truyền khoảng 10 m |
| optionsVi.B | Gắn trên điện thoại/PC |
| optionsVi.C | tốc độ truyền khoảng 1 Mbps |
| optionsVi.D | truyền thông bằng hồng ngoại |
| answerDisplay | D. truyền thông bằng hồng ngoại |

**concept**
```
• truyền thông bằng hồng ngoại
• Thuật ngữ: truyền thông bằng hồng ngoại.
```

**whyCorrect**
```
• truyền thông bằng hồng ngoại
• Đáp án D: truyền thông bằng hồng ngoại
```

**whyWrong**

##### A
```
• Là gì? 約10mの通信範囲を持つ (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «約10mの通信範囲を持つ» (A) không thỏa: khớp đáp án «赤外線を使って通信する».
```

##### B
```
• Là gì? 携帯電話やパソコンに搭載されている (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «携帯電話やパソコンに搭載されている» (B) không thỏa: khớp đáp án «赤外線を使って通信する».
```

##### C
```
• Là gì? 通信速度は約1 Mbps (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «通信速度は約1 Mbps» (C) không thỏa: khớp đáp án «赤外線を使って通信する».
```

**whatIs**
```
{
  "A": "約10mの通信範囲を持つ (thuật ngữ JP).",
  "B": "携帯電話やパソコンに搭載されている (thuật ngữ JP).",
  "C": "通信速度は約1 Mbps (thuật ngữ JP).",
  "D": "赤外線を使って通信する (thuật ngữ JP)."
}
```

**intent**
```
• Câu JIT: nắm định nghĩa/thứ tự/thuật ngữ CNTT.
• truyền thông bằng hồng ngoại
```

**memoryTip**
```
(trống)
```

---

### 131/400 · `jit` id=43 · task=`quiz` · num=43 · ans **B**

- **flags:** khop_dap_an
- **status:** `todo`

**Đề gốc**

```
最もよく使われるネットワーク接続形態はどれか。
```

**Options**

- **A.** バス型
- **B.** スター型 ✅
- **C.** リング型
- **D.** メッシュ型

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Hình thái kết nối mạng được dùng nhiều nhất là gì? |
| optionsVi.A | mạng bus |
| optionsVi.B | mạng hình sao |
| optionsVi.C | mạng vòng |
| optionsVi.D | mạng lưới (mesh) |
| answerDisplay | B. mạng hình sao |

**concept**
```
• mạng hình sao
• Thuật ngữ: mạng hình sao.
```

**whyCorrect**
```
• Khái niệm CNTT trong đề thi JIT.
• Khớp stem: khớp đáp án «スター型».
```

**whyWrong**

##### A
```
• Là gì? バス型 (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «バス型» (A) không thỏa: khớp đáp án «スター型».
```

##### C
```
• Là gì? リング型 (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «リング型» (C) không thỏa: khớp đáp án «スター型».
```

##### D
```
• Là gì? メッシュ型 (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «メッシュ型» (D) không thỏa: khớp đáp án «スター型».
```

**whatIs**
```
{
  "A": "バス型 (thuật ngữ JP).",
  "B": "スター型 (thuật ngữ JP).",
  "C": "リング型 (thuật ngữ JP).",
  "D": "メッシュ型 (thuật ngữ JP)."
}
```

**intent**
```
• Câu JIT: nắm định nghĩa/thứ tự/thuật ngữ CNTT.
• mạng hình sao
```

**memoryTip**
```
(trống)
```

---

### 132/400 · `jit` id=47 · task=`quiz` · num=47 · ans **C**

- **flags:** khop_dap_an
- **status:** `todo`

**Đề gốc**

```
OSI参照モデルは何層構造か。
```

**Options**

- **A.** 5層
- **B.** 6層
- **C.** 7層 ✅
- **D.** 8層

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Mô hình tham chiếu OSI gồm bao nhiêu tầng? |
| optionsVi.A | 5層 — khái niệm kỹ thuật |
| optionsVi.B | 6層 — khái niệm kỹ thuật |
| optionsVi.C | 7層 — khái niệm kỹ thuật |
| optionsVi.D | 8層 — khái niệm kỹ thuật |
| answerDisplay | C. 7層 — khái niệm kỹ thuật |

**concept**
```
• 7 tầng
• Nghĩa: 7 tầng.
```

**whyCorrect**
```
• Khái niệm CNTT trong đề thi JIT.
• Khớp stem: khớp đáp án «7層».
```

**whyWrong**

##### A
```
• Là gì? 5層 (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «5層» (A) không thỏa: khớp đáp án «7層».
```

##### B
```
• Là gì? 6層 (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «6層» (B) không thỏa: khớp đáp án «7層».
```

##### D
```
• Là gì? 8層 (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «8層» (D) không thỏa: khớp đáp án «7層».
```

**whatIs**
```
{
  "A": "5層 (thuật ngữ JP).",
  "B": "6層 (thuật ngữ JP).",
  "C": "7層 (thuật ngữ JP).",
  "D": "8層 (thuật ngữ JP)."
}
```

**intent**
```
• Câu JIT: nắm định nghĩa/thứ tự/thuật ngữ CNTT.
• 7 tầng
```

**memoryTip**
```
(trống)
```

---

### 133/400 · `jit` id=48 · task=`quiz` · num=48 · ans **C**

- **flags:** khop_dap_an
- **status:** `todo`

**Đề gốc**

```
【専門知識】（ ）を圧縮するには、音の波としての性質を使います。
```

**Options**

- **A.** 画像情報
- **B.** 通信情報
- **C.** 音声情報 ✅
- **D.** テキスト情報

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | 【Chuyên môn】Chọn đáp án đúng theo kiến thức trong đề. |
| optionsVi.A | thông tin ảnh |
| optionsVi.B | thông tin truyền thông |
| optionsVi.C | thông tin âm thanh |
| optionsVi.D | thông tin văn bản |
| answerDisplay | C. thông tin âm thanh |

**concept**
```
• thông tin âm thanh
• Thuật ngữ: thông tin âm thanh.
```

**whyCorrect**
```
• thông tin âm thanh — thông tin âm thanh nén biến đổi Fourier 、 （§15.3）。
• thông tin âm thanh
• Đáp án C: thông tin âm thanh
```

**whyWrong**

##### A
```
• Là gì? 画像情報 (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «画像情報» (A) không thỏa: khớp đáp án «音声情報».
```

##### B
```
• Là gì? 通信情報 (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «通信情報» (B) không thỏa: khớp đáp án «音声情報».
```

##### D
```
• Là gì? テキスト情報 (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «テキスト情報» (D) không thỏa: khớp đáp án «音声情報».
```

**whatIs**
```
{
  "A": "画像情報 (thuật ngữ JP).",
  "B": "通信情報 (thuật ngữ JP).",
  "C": "音声情報 (thuật ngữ JP).",
  "D": "テキスト情報 (thuật ngữ JP)."
}
```

**intent**
```
• Câu JIT: nắm định nghĩa/thứ tự/thuật ngữ CNTT.
• thông tin âm thanh
```

**memoryTip**
```
(trống)
```

---

### 134/400 · `jit` id=49 · task=`quiz` · num=49 · ans **B**

- **flags:** khop_dap_an
- **status:** `todo`

**Đề gốc**

```
「.com」のように種別だけで国名がないのはどの国のドメイン名か。
```

**Options**

- **A.** 日本
- **B.** アメリカ ✅
- **C.** オーストラリア
- **D.** イギリス

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Domain chỉ có loại (vd. .com) không có mã quốc gia thuộc nước nào? |
| optionsVi.A | Nhật Bản |
| optionsVi.B | アメリカ — khái niệm kỹ thuật |
| optionsVi.C | Úc |
| optionsVi.D | イギリス — khái niệm kỹ thuật |
| answerDisplay | B. アメリカ — khái niệm kỹ thuật |

**concept**
```
• Mỹ
• Thuật ngữ: Mỹ.
```

**whyCorrect**
```
• Khái niệm CNTT trong đề thi JIT.
• Khớp stem: khớp đáp án «アメリカ».
```

**whyWrong**

##### A
```
• Là gì? 日本 (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «日本» (A) không thỏa: khớp đáp án «アメリカ».
```

##### C
```
• Là gì? オーストラリア (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «オーストラリア» (C) không thỏa: khớp đáp án «アメリカ».
```

##### D
```
• Là gì? イギリス (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «イギリス» (D) không thỏa: khớp đáp án «アメリカ».
```

**whatIs**
```
{
  "A": "日本 (thuật ngữ JP).",
  "B": "アメリカ (thuật ngữ JP).",
  "C": "オーストラリア (thuật ngữ JP).",
  "D": "イギリス (thuật ngữ JP)."
}
```

**intent**
```
• Câu JIT: nắm định nghĩa/thứ tự/thuật ngữ CNTT.
• Mỹ
```

**memoryTip**
```
(trống)
```

---

### 135/400 · `jit` id=52 · task=`quiz` · num=52 · ans **D**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
【専門知識】次の質問に対して、正しい答えを１つ選びなさい。「ユーザが独自にタグを自由に定義して利用できるマークアップ言語」はどれですか。
```

**Options**

- **A.** HTML
- **B.** CSS
- **C.** SQL
- **D.** XML ✅

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | 【Chuyên môn】Chọn một đáp án đúng cho câu hỏi trong đề. |
| optionsVi.A | HTML |
| optionsVi.B | CSS |
| optionsVi.C | SQL |
| optionsVi.D | XML |
| answerDisplay | D. XML |

**concept**
```
• XML
• Nghĩa: XML.
```

**whyCorrect**
```
• Có vai trò riêng; đối chiếu với điều kiện stem.
• Khớp stem: phát biểu đúng/sai khớp cơ chế.
```

**whyWrong**

##### A
```
• Là gì? HTML — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «HTML» (A) không thỏa: phát biểu đúng/sai khớp cơ chế.
```

##### B
```
• Là gì? CSS — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «CSS» (B) không thỏa: phát biểu đúng/sai khớp cơ chế.
```

##### C
```
• Là gì? SQL — ngôn ngữ truy vấn CSDL quan hệ.
• Dùng để làm gì? DDL/DML/DCL.
• Vì sao sai? «SQL» (C) không thỏa: phát biểu đúng/sai khớp cơ chế.
```

**whatIs**
```
{
  "A": "HTML — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "CSS — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "SQL — ngôn ngữ truy vấn CSDL quan hệ.",
  "D": "XML — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Câu JIT: nắm định nghĩa/thứ tự/thuật ngữ CNTT.
• XML
```

**memoryTip**
```
(trống)
```

---

### 136/400 · `jit` id=53 · task=`quiz` · num=53 · ans **C**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
OSI参照モデルのトランスポート層で使用されるプロトコルはどれか。
```

**Options**

- **A.** IP
- **B.** HTTP
- **C.** TCP ✅
- **D.** SMTP

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Tầng Transport của mô hình OSI dùng giao thức nào? |
| optionsVi.A | IP |
| optionsVi.B | HTTP |
| optionsVi.C | TCP |
| optionsVi.D | SMTP |
| answerDisplay | C. TCP |

**concept**
```
• TCP
• Thuật ngữ: TCP.
```

**whyCorrect**
```
• Truyền byte stream có bắt tay/ACK.
• Khớp stem: khớp đáp án «TCP».
```

**whyWrong**

##### A
```
• Là gì? IP — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «IP» (A) không thỏa: khớp đáp án «TCP».
```

##### B
```
• Là gì? HTTP — giao thức ứng dụng web.
• Dùng để làm gì? Request/response tài nguyên.
• Vì sao sai? «HTTP» (B) không thỏa: khớp đáp án «TCP».
```

##### D
```
• Là gì? SMTP — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «SMTP» (D) không thỏa: khớp đáp án «TCP».
```

**whatIs**
```
{
  "A": "IP — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "HTTP — giao thức ứng dụng web.",
  "C": "TCP — giao thức hướng kết nối, tin cậy.",
  "D": "SMTP — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Câu JIT: nắm định nghĩa/thứ tự/thuật ngữ CNTT.
• TCP
```

**memoryTip**
```
(trống)
```

---

### 137/400 · `jit` id=56 · task=`quiz` · num=56 · ans **B**

- **flags:** khop_dap_an
- **status:** `todo`

**Đề gốc**

```
ブラウザがウェブサイトのID情報を自動で記憶する仕組みを何というか。
```

**Options**

- **A.** キャッシュ
- **B.** Cookie（クッキー） ✅
- **C.** セッション
- **D.** ローカルストレージ

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Cơ chế trình duyệt tự nhớ thông tin ID website gọi là gì? |
| optionsVi.A | bộ nhớ đệm (cache) |
| optionsVi.B | Cookie（クッキー） — khái niệm kỹ thuật |
| optionsVi.C | セッション — khái niệm kỹ thuật |
| optionsVi.D | ローカルストレージ — khái niệm kỹ thuật |
| answerDisplay | B. Cookie（クッキー） — khái niệm kỹ thuật |

**concept**
```
• cookie
• Thuật ngữ: cookie.
```

**whyCorrect**
```
• Khái niệm CNTT trong đề thi JIT.
• Khớp stem: khớp đáp án «Cookie（クッキー）».
```

**whyWrong**

##### A
```
• Là gì? キャッシュ (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «キャッシュ» (A) không thỏa: khớp đáp án «Cookie（クッキー）».
```

##### C
```
• Là gì? セッション (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «セッション» (C) không thỏa: khớp đáp án «Cookie（クッキー）».
```

##### D
```
• Là gì? ローカルストレージ (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «ローカルストレージ» (D) không thỏa: khớp đáp án «Cookie（クッキー）».
```

**whatIs**
```
{
  "A": "キャッシュ (thuật ngữ JP).",
  "B": "Cookie（クッキー） (thuật ngữ JP).",
  "C": "セッション (thuật ngữ JP).",
  "D": "ローカルストレージ (thuật ngữ JP)."
}
```

**intent**
```
• Câu JIT: nắm định nghĩa/thứ tự/thuật ngữ CNTT.
• cookie
```

**memoryTip**
```
(trống)
```

---

### 138/400 · `jit` id=57 · task=`quiz` · num=57 · ans **D**

- **flags:** khop_dap_an
- **status:** `todo`

**Đề gốc**

```
OECD8原則について正しくないものをえらんでください。
```

**Options**

- **A.** 目的明確化の原則がある
- **B.** 安全保護の原則がある
- **C.** 個人参加の原則がある
- **D.** 利用無制限の原則がある ✅

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Chọn phát biểu SAI về chủ đề trong đề. |
| optionsVi.A | có nguyên tắc làm rõ mục đích |
| optionsVi.B | có nguyên tắc bảo vệ an toàn |
| optionsVi.C | có nguyên tắc tham gia cá nhân |
| optionsVi.D | có nguyên tắc dùng không giới hạn |
| answerDisplay | D. có nguyên tắc dùng không giới hạn |

**concept**
```
• có nguyên tắc dùng không giới hạn
• Nghĩa: có nguyên tắc dùng không giới hạn.
```

**whyCorrect**
```
• có nguyên tắc dùng không giới hạn
• Đáp án D: có nguyên tắc dùng không giới hạn
```

**whyWrong**

##### A
```
• Là gì? 目的明確化の原則がある (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «目的明確化の原則がある» (A) không thỏa: khớp đáp án «利用無制限の原則がある».
```

##### B
```
• Là gì? 安全保護の原則がある (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «安全保護の原則がある» (B) không thỏa: khớp đáp án «利用無制限の原則がある».
```

##### C
```
• Là gì? 個人参加の原則がある (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «個人参加の原則がある» (C) không thỏa: khớp đáp án «利用無制限の原則がある».
```

**whatIs**
```
{
  "A": "目的明確化の原則がある (thuật ngữ JP).",
  "B": "安全保護の原則がある (thuật ngữ JP).",
  "C": "個人参加の原則がある (thuật ngữ JP).",
  "D": "利用無制限の原則がある (thuật ngữ JP)."
}
```

**intent**
```
• Câu JIT: nắm định nghĩa/thứ tự/thuật ngữ CNTT.
• có nguyên tắc dùng không giới hạn
```

**memoryTip**
```
(trống)
```

---

### 139/400 · `jit` id=58 · task=`quiz` · num=58 · ans **A**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
【専門用語】次の日本語の用語をベトナム語に直しなさい。 電子商取引
```

**Options**

- **A.** Thương mại điện tử ✅
- **B.** Thanh toán điện tử
- **C.** Hệ thống quản lý
- **D.** Mạng thương mại

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | 【Thuật ngữ】Chọn nghĩa tiếng Việt đúng cho «thương mại điện tử». |
| optionsVi.A | Thương mại điện tử |
| optionsVi.B | Thanh toán điện tử |
| optionsVi.C | Hệ thống quản lý |
| optionsVi.D | Mạng thương mại |
| answerDisplay | A. Thương mại điện tử |

**concept**
```
• «thương mại điện tử» nghĩa Việt: «Thương mại điện tử».
```

**whyCorrect**
```
• Thương mại điện tử — thương mại điện tử（ ） Thương mại điện tử（ ） （§7.1）。 Đây là câu đối chiếu thuật ngữ JP ↔ VI: phải khớp đúng nghĩa chuyên ngành, không chọn từ gần nghĩa.
• «thương mại điện tử» = Thương mại điện tử
• Ghép đúng Hán tự/katakana với nghĩa VI đã học.
```

**whyWrong**

##### B
```
• Là gì? Thanh toán điện tử — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Thanh toán điện tử» (B) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### C
```
• Là gì? Hệ thống quản lý — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Hệ thống quản lý» (C) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### D
```
• Là gì? Mạng thương mại — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Mạng thương mại» (D) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

**whatIs**
```
{
  "A": "Thương mại điện tử — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Thanh toán điện tử — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Hệ thống quản lý — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Mạng thương mại — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Câu từ vựng: cho thuật ngữ (thường JP) → chọn nghĩa tiếng Việt đúng.
```

**memoryTip**
```
• thương mại điện tử → Thương mại điện tử
```

---

### 140/400 · `jit` id=64 · task=`quiz` · num=64 · ans **C**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
並列に接続した2つのシステム（A, B）の稼働率の計算式はどれか。
```

**Options**

- **A.** A × B
- **B.** A + B
- **C.** 1 − (1−A) × (1−B) ✅
- **D.** (A + B) / 2

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Chọn phương án đúng (xem câu gốc). |
| optionsVi.A | A × B |
| optionsVi.B | A + B |
| optionsVi.C | 1 − (1−A) × (1−B) |
| optionsVi.D | (A + B) / 2 |
| answerDisplay | C. 1 − (1−A) × (1−B) |

**concept**
```
• 1 − (1−A) × (1−B)
• Nghĩa: 1 − (1−A) × (1−B).
```

**whyCorrect**
```
• 1 − (1−A) × (1−B)
• Đáp án C: 1 − (1−A) × (1−B)
```

**whyWrong**

##### A
```
• Là gì? A × B — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «A × B» (A) không thỏa: khớp đáp án «1 − (1−A) × (1−B)».
```

##### B
```
• Là gì? A + B — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «A + B» (B) không thỏa: khớp đáp án «1 − (1−A) × (1−B)».
```

##### D
```
• Là gì? (A + B) / 2 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «(A + B) / 2» (D) không thỏa: khớp đáp án «1 − (1−A) × (1−B)».
```

**whatIs**
```
{
  "A": "A × B — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "A + B — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "1 − (1−A) × (1−B) — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "(A + B) / 2 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Câu JIT: nắm định nghĩa/thứ tự/thuật ngữ CNTT.
• 1 − (1−A) × (1−B)
```

**memoryTip**
```
(trống)
```

---

### 141/400 · `jit` id=67 · task=`quiz` · num=67 · ans **D**

- **flags:** khop_dap_an
- **status:** `todo`

**Đề gốc**

```
パスワード設定について正しくないものをえらんでください。
```

**Options**

- **A.** 氏名や生年月日を避ける
- **B.** 記号を含む長いパスワードを使う
- **C.** 大文字と小文字を組み合わせる
- **D.** 自分の電話番号をそのまま使う ✅

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Chọn phát biểu SAI về mật khẩu. |
| optionsVi.A | tránh họ tên/ngày sinh |
| optionsVi.B | 記号を含む長いパスワードを使う — khái niệm kỹ thuật |
| optionsVi.C | kết hợp chữ hoa và thường |
| optionsVi.D | dùng nguyên số điện thoại của mình |
| answerDisplay | D. dùng nguyên số điện thoại của mình |

**concept**
```
• dùng nguyên số điện thoại của mình
• Nghĩa: dùng nguyên số điện thoại của mình.
```

**whyCorrect**
```
• dùng nguyên số điện thoại của mình
• Đáp án D: dùng nguyên số điện thoại của mình
```

**whyWrong**

##### A
```
• Là gì? 氏名や生年月日を避ける (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «氏名や生年月日を避ける» (A) không thỏa: khớp đáp án «自分の電話番号をそのまま使う».
```

##### B
```
• Là gì? 記号を含む長いパスワードを使う (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «記号を含む長いパスワードを使う» (B) không thỏa: khớp đáp án «自分の電話番号をそのまま使う».
```

##### C
```
• Là gì? 大文字と小文字を組み合わせる (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «大文字と小文字を組み合わせる» (C) không thỏa: khớp đáp án «自分の電話番号をそのまま使う».
```

**whatIs**
```
{
  "A": "氏名や生年月日を避ける (thuật ngữ JP).",
  "B": "記号を含む長いパスワードを使う (thuật ngữ JP).",
  "C": "大文字と小文字を組み合わせる (thuật ngữ JP).",
  "D": "自分の電話番号をそのまま使う (thuật ngữ JP)."
}
```

**intent**
```
• Câu JIT: nắm định nghĩa/thứ tự/thuật ngữ CNTT.
• dùng nguyên số điện thoại của mình
```

**memoryTip**
```
(trống)
```

---

### 142/400 · `jit` id=68 · task=`quiz` · num=68 · ans **C**

- **flags:** khop_dap_an
- **status:** `todo`

**Đề gốc**

```
信頼度成長曲線はどのような形をしているか。
```

**Options**

- **A.** 右肩上がりの直線
- **B.** バスタブ曲線
- **C.** S字曲線 ✅
- **D.** 正弦波

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Đối tượng này có dạng hình như thế nào? |
| optionsVi.A | đường thẳng dốc lên |
| optionsVi.B | đường cong bồn tắm (bathtub) |
| optionsVi.C | đường cong chữ S |
| optionsVi.D | sóng sine |
| answerDisplay | C. đường cong chữ S |

**concept**
```
• đường cong chữ S
• Thuật ngữ: đường cong chữ S.
```

**whyCorrect**
```
• đường cong chữ S
• Đáp án C: đường cong chữ S
```

**whyWrong**

##### A
```
• Là gì? 右肩上がりの直線 (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «右肩上がりの直線» (A) không thỏa: khớp đáp án «S字曲線».
```

##### B
```
• Là gì? バスタブ曲線 (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «バスタブ曲線» (B) không thỏa: khớp đáp án «S字曲線».
```

##### D
```
• Là gì? 正弦波 (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «正弦波» (D) không thỏa: khớp đáp án «S字曲線».
```

**whatIs**
```
{
  "A": "右肩上がりの直線 (thuật ngữ JP).",
  "B": "バスタブ曲線 (thuật ngữ JP).",
  "C": "S字曲線 (thuật ngữ JP).",
  "D": "正弦波 (thuật ngữ JP)."
}
```

**intent**
```
• Câu JIT: nắm định nghĩa/thứ tự/thuật ngữ CNTT.
• đường cong chữ S
```

**memoryTip**
```
(trống)
```

---

### 143/400 · `jit` id=69 · task=`quiz` · num=69 · ans **B**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
RAMの正式名称はどれか。
```

**Options**

- **A.** Read Access Memory
- **B.** Random Access Memory ✅
- **C.** Rapid Allocation Memory
- **D.** Read And Modify

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Chọn phương án đúng (xem câu gốc). |
| optionsVi.A | Read Access Memory |
| optionsVi.B | Random Access Memory |
| optionsVi.C | Rapid Allocation Memory |
| optionsVi.D | Read And Modify |
| answerDisplay | B. Random Access Memory |

**concept**
```
• Random Access Memory
• Nghĩa: Random Access Memory.
```

**whyCorrect**
```
• Random Access Memory
• Đáp án B: Random Access Memory
```

**whyWrong**

##### A
```
• Là gì? Read Access Memory — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Read Access Memory» (A) không thỏa: khớp đáp án «Random Access Memory».
```

##### C
```
• Là gì? Rapid Allocation Memory — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Rapid Allocation Memory» (C) không thỏa: khớp đáp án «Random Access Memory».
```

##### D
```
• Là gì? Read And Modify — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Read And Modify» (D) không thỏa: khớp đáp án «Random Access Memory».
```

**whatIs**
```
{
  "A": "Read Access Memory — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Random Access Memory — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Rapid Allocation Memory — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Read And Modify — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Câu JIT: nắm định nghĩa/thứ tự/thuật ngữ CNTT.
• Random Access Memory
```

**memoryTip**
```
(trống)
```

---

### 144/400 · `jit` id=71 · task=`quiz` · num=71 · ans **B**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
【専門知識】次の質問に対して、正しい答えを１つ選びなさい。「パソコン内において大きな面積を占めるメインとなる基板のこと」はどれですか。
```

**Options**

- **A.** CPU
- **B.** マザーボード ✅
- **C.** RAM
- **D.** GPU

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | 【Chuyên môn】Chọn một đáp án đúng cho câu hỏi trong đề. |
| optionsVi.A | phát biểu về CPU / bộ nhớ / bán dẫn |
| optionsVi.B | mainboard (bo mạch chủ) |
| optionsVi.C | RAM |
| optionsVi.D | GPU |
| answerDisplay | B. mainboard (bo mạch chủ) |

**concept**
```
• mainboard (bo mạch chủ)
• Thuật ngữ: mainboard (bo mạch chủ).
```

**whyCorrect**
```
• bo mạch chủ — mainboard (bo mạch chủ) 。CPU RAM （§10.2）。
• mainboard (bo mạch chủ)
• Đáp án B: mainboard (bo mạch chủ)
```

**whyWrong**

##### A
```
• Là gì? CPU — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «CPU» (A) không thỏa: phát biểu đúng/sai khớp cơ chế.
```

##### C
```
• Là gì? RAM — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «RAM» (C) không thỏa: phát biểu đúng/sai khớp cơ chế.
```

##### D
```
• Là gì? GPU — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «GPU» (D) không thỏa: phát biểu đúng/sai khớp cơ chế.
```

**whatIs**
```
{
  "A": "CPU — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "マザーボード (thuật ngữ JP).",
  "C": "RAM — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "GPU — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Câu JIT: nắm định nghĩa/thứ tự/thuật ngữ CNTT.
• mainboard (bo mạch chủ)
```

**memoryTip**
```
(trống)
```

---

### 145/400 · `jit` id=72 · task=`quiz` · num=72 · ans **C**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
【専門用語】次の日本語の用語をベトナム語に直しなさい。 演算装置
```

**Options**

- **A.** Thiết bị lưu trữ
- **B.** Thiết bị điều khiển
- **C.** Thiết bị tính toán số học ✅
- **D.** Thiết bị đầu ra

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | 【Thuật ngữ】Chọn nghĩa tiếng Việt đúng cho «thiết bị tính toán (ALU/đơn vị tính)». |
| optionsVi.A | Thiết bị lưu trữ |
| optionsVi.B | Thiết bị điều khiển |
| optionsVi.C | Thiết bị tính toán số học |
| optionsVi.D | Thiết bị đầu ra |
| answerDisplay | C. Thiết bị tính toán số học |

**concept**
```
• «thiết bị tính toán (ALU/đơn vị tính)» nghĩa Việt: «Thiết bị tính toán số học».
```

**whyCorrect**
```
• Thiết bị tính toán số học — thiết bị tính toán (ALU/đơn vị tính)（ ） Thiết bị tính toán số học（ ） （§10.1）。 Đây là câu đối chiếu thuật ngữ JP ↔ VI: phải khớp đúng nghĩa chuyên ngành, không chọn từ gần nghĩa.
• «thiết bị tính toán (ALU/đơn vị tính)» = Thiết bị tính toán số học
• Ghép đúng Hán tự/katakana với nghĩa VI đã học.
```

**whyWrong**

##### A
```
• Là gì? Thiết bị lưu trữ — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Thiết bị lưu trữ» (A) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### B
```
• Là gì? Thiết bị điều khiển — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Thiết bị điều khiển» (B) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### D
```
• Là gì? Thiết bị đầu ra — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Thiết bị đầu ra» (D) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

**whatIs**
```
{
  "A": "Thiết bị lưu trữ — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Thiết bị điều khiển — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Thiết bị tính toán số học",
  "D": "Thiết bị đầu ra — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Câu từ vựng: cho thuật ngữ (thường JP) → chọn nghĩa tiếng Việt đúng.
```

**memoryTip**
```
• thiết bị tính toán (ALU/đơn vị tính) → Thiết bị tính toán số học
```

---

### 146/400 · `jit` id=73 · task=`quiz` · num=73 · ans **D**

- **flags:** khop_dap_an
- **status:** `todo`

**Đề gốc**

```
CPUについて正しくないものをえらんでください。
```

**Options**

- **A.** 処理の中心となる部品
- **B.** MPUとも呼ばれる
- **C.** バスを流れるデータや外部機器とのデータを制御する
- **D.** パソコン内で最も大きな面積を占める基板のこと ✅

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Chọn phát biểu SAI về CPU. |
| optionsVi.A | linh kiện trung tâm xử lý (CPU) |
| optionsVi.B | còn gọi là MPU |
| optionsVi.C | Điều khiển dữ liệu trên bus và với thiết bị ngoài |
| optionsVi.D | Bo mạch chiếm diện tích lớn nhất trong PC (mainboard) |
| answerDisplay | D. Bo mạch chiếm diện tích lớn nhất trong PC (mainboard) |

**concept**
```
• Bo mạch chiếm diện tích lớn nhất trong PC (mainboard)
• Nghĩa: Bo mạch chiếm diện tích lớn nhất trong PC (mainboard).
```

**whyCorrect**
```
• Bo mạch chiếm diện tích lớn nhất trong PC (mainboard)
• Đáp án D: Bo mạch chiếm diện tích lớn nhất trong PC (mainboard)
```

**whyWrong**

##### A
```
• Là gì? 処理の中心となる部品 (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «処理の中心となる部品» (A) không thỏa: khớp đáp án «パソコン内で最も大きな面積を占める基板のこと».
```

##### B
```
• Là gì? MPUとも呼ばれる (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «MPUとも呼ばれる» (B) không thỏa: khớp đáp án «パソコン内で最も大きな面積を占める基板のこと».
```

##### C
```
• Là gì? バスを流れるデータや外部機器とのデータを制御する (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «バスを流れるデータや外部機器とのデータを制御する» (C) không thỏa: khớp đáp án «パソコン内で最も大きな面積を占める基板のこと».
```

**whatIs**
```
{
  "A": "処理の中心となる部品 (thuật ngữ JP).",
  "B": "MPUとも呼ばれる (thuật ngữ JP).",
  "C": "バスを流れるデータや外部機器とのデータを制御する (thuật ngữ JP).",
  "D": "パソコン内で最も大きな面積を占める基板のこと (thuật ngữ JP)."
}
```

**intent**
```
• Câu JIT: nắm định nghĩa/thứ tự/thuật ngữ CNTT.
• Bo mạch chiếm diện tích lớn nhất trong PC (mainboard)
```

**memoryTip**
```
(trống)
```

---

### 147/400 · `jit` id=74 · task=`quiz` · num=74 · ans **C**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
コンピュータの第1世代に使用された論理素子はどれか。
```

**Options**

- **A.** トランジスタ
- **B.** IC（集積回路）
- **C.** 真空管 ✅
- **D.** LSI

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | máy tính là cái nào? |
| optionsVi.A | トランジスタ — khái niệm kỹ thuật |
| optionsVi.B | IC (mạch tích hợp) |
| optionsVi.C | ống chân không |
| optionsVi.D | LSI |
| answerDisplay | C. ống chân không |

**concept**
```
• ống chân không
• Thuật ngữ: ống chân không.
```

**whyCorrect**
```
• ống chân không
• Đáp án C: ống chân không
```

**whyWrong**

##### A
```
• Là gì? トランジスタ (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «トランジスタ» (A) không thỏa: khớp đáp án «真空管».
```

##### B
```
• Là gì? IC（集積回路） (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «IC（集積回路）» (B) không thỏa: khớp đáp án «真空管».
```

##### D
```
• Là gì? LSI — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «LSI» (D) không thỏa: khớp đáp án «真空管».
```

**whatIs**
```
{
  "A": "トランジスタ (thuật ngữ JP).",
  "B": "IC（集積回路） (thuật ngữ JP).",
  "C": "真空管 (thuật ngữ JP).",
  "D": "LSI — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Câu JIT: nắm định nghĩa/thứ tự/thuật ngữ CNTT.
• ống chân không
```

**memoryTip**
```
(trống)
```

---

### 148/400 · `jit` id=76 · task=`quiz` · num=76 · ans **B**

- **flags:** khop_dap_an
- **status:** `todo`

**Đề gốc**

```
AND回路のモデルはどれか。
```

**Options**

- **A.** スイッチが並列に並んだ回路
- **B.** スイッチが直列に並んだ回路 ✅
- **C.** スイッチが星形に並んだ回路
- **D.** スイッチが1つだけの回路

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | mạch AND là cái nào? |
| optionsVi.A | mạch các công tắc xếp song song |
| optionsVi.B | mạch các công tắc xếp nối tiếp |
| optionsVi.C | mạch công tắc xếp hình sao |
| optionsVi.D | mạch chỉ một công tắc |
| answerDisplay | B. mạch các công tắc xếp nối tiếp |

**concept**
```
• mạch các công tắc xếp nối tiếp
• Thuật ngữ: mạch các công tắc xếp nối tiếp.
```

**whyCorrect**
```
• mạch các công tắc xếp nối tiếp
• Đáp án B: mạch các công tắc xếp nối tiếp
```

**whyWrong**

##### A
```
• Là gì? スイッチが並列に並んだ回路 (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «スイッチが並列に並んだ回路» (A) không thỏa: khớp đáp án «スイッチが直列に並んだ回路».
```

##### C
```
• Là gì? スイッチが星形に並んだ回路 (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «スイッチが星形に並んだ回路» (C) không thỏa: khớp đáp án «スイッチが直列に並んだ回路».
```

##### D
```
• Là gì? スイッチが1つだけの回路 (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «スイッチが1つだけの回路» (D) không thỏa: khớp đáp án «スイッチが直列に並んだ回路».
```

**whatIs**
```
{
  "A": "スイッチが並列に並んだ回路 (thuật ngữ JP).",
  "B": "スイッチが直列に並んだ回路 (thuật ngữ JP).",
  "C": "スイッチが星形に並んだ回路 (thuật ngữ JP).",
  "D": "スイッチが1つだけの回路 (thuật ngữ JP)."
}
```

**intent**
```
• Câu JIT: nắm định nghĩa/thứ tự/thuật ngữ CNTT.
• mạch các công tắc xếp nối tiếp
```

**memoryTip**
```
(trống)
```

---

### 149/400 · `jit` id=78 · task=`quiz` · num=78 · ans **C**

- **flags:** khop_dap_an
- **status:** `todo`

**Đề gốc**

```
論理素子によってコンピュータは何世代に分けられるか。
```

**Options**

- **A.** 2世代
- **B.** 3世代
- **C.** 4世代 ✅
- **D.** 5世代

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Theo linh kiện logic, máy tính được chia thành bao nhiêu thế hệ? |
| optionsVi.A | 2世代 — khái niệm kỹ thuật |
| optionsVi.B | 3世代 — khái niệm kỹ thuật |
| optionsVi.C | 4世代 — khái niệm kỹ thuật |
| optionsVi.D | 5世代 — khái niệm kỹ thuật |
| answerDisplay | C. 4世代 — khái niệm kỹ thuật |

**concept**
```
• 4 thế hệ
• Nghĩa: 4 thế hệ.
```

**whyCorrect**
```
• Khái niệm CNTT trong đề thi JIT.
• Khớp stem: khớp đáp án «4世代».
```

**whyWrong**

##### A
```
• Là gì? 2世代 (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «2世代» (A) không thỏa: khớp đáp án «4世代».
```

##### B
```
• Là gì? 3世代 (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «3世代» (B) không thỏa: khớp đáp án «4世代».
```

##### D
```
• Là gì? 5世代 (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «5世代» (D) không thỏa: khớp đáp án «4世代».
```

**whatIs**
```
{
  "A": "2世代 (thuật ngữ JP).",
  "B": "3世代 (thuật ngữ JP).",
  "C": "4世代 (thuật ngữ JP).",
  "D": "5世代 (thuật ngữ JP)."
}
```

**intent**
```
• Câu JIT: nắm định nghĩa/thứ tự/thuật ngữ CNTT.
• 4 thế hệ
```

**memoryTip**
```
(trống)
```

---

### 150/400 · `jit` id=79 · task=`quiz` · num=79 · ans **C**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
2進数「1100」を10進数に変換すると何か。
```

**Options**

- **A.** 8
- **B.** 10
- **C.** 12 ✅
- **D.** 14

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Chuyển số nhị phân 1100 sang thập phân được bao nhiêu? |
| optionsVi.A | 8 |
| optionsVi.B | 10 |
| optionsVi.C | 12 |
| optionsVi.D | 14 |
| answerDisplay | C. 12 |

**concept**
```
• 12 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
```

**whyCorrect**
```
• Có vai trò riêng; đối chiếu với điều kiện stem.
• Khớp stem: khớp đáp án «12».
```

**whyWrong**

##### A
```
• Là gì? 8 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «8» (A) không thỏa: khớp đáp án «12».
```

##### B
```
• Là gì? 10 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «10» (B) không thỏa: khớp đáp án «12».
```

##### D
```
• Là gì? 14 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «14» (D) không thỏa: khớp đáp án «12».
```

**whatIs**
```
{
  "A": "8 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "10 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "12 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "14 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Câu JIT: nắm định nghĩa/thứ tự/thuật ngữ CNTT.
• 12
```

**memoryTip**
```
(trống)
```

---

### 151/400 · `jit` id=81 · task=`quiz` · num=81 · ans **C**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
2進数の加算で「1 + 1」の結果はどれか。
```

**Options**

- **A.** 1
- **B.** 2
- **C.** 10（2進数） ✅
- **D.** 11（2進数）

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Chọn phương án đúng (xem câu gốc). |
| optionsVi.A | 1 |
| optionsVi.B | 2 |
| optionsVi.C | hệ nhị phân |
| optionsVi.D | hệ nhị phân |
| answerDisplay | C. hệ nhị phân |

**concept**
```
• hệ nhị phân
• Nghĩa: hệ nhị phân.
```

**whyCorrect**
```
• Khái niệm CNTT trong đề thi JIT.
• Khớp stem: khớp đáp án «10（2進数）».
```

**whyWrong**

##### A
```
• Là gì? 1 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «1» (A) không thỏa: khớp đáp án «10（2進数）».
```

##### B
```
• Là gì? 2 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «2» (B) không thỏa: khớp đáp án «10（2進数）».
```

##### D
```
• Là gì? 11（2進数） (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «11（2進数）» (D) không thỏa: khớp đáp án «10（2進数）».
```

**whatIs**
```
{
  "A": "1 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "2 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "10（2進数） (thuật ngữ JP).",
  "D": "11（2進数） (thuật ngữ JP)."
}
```

**intent**
```
• Câu JIT: nắm định nghĩa/thứ tự/thuật ngữ CNTT.
• hệ nhị phân
```

**memoryTip**
```
(trống)
```

---

### 152/400 · `jit` id=83 · task=`quiz` · num=83 · ans **C**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
情報量の最小単位はどれか。
```

**Options**

- **A.** byte
- **B.** KB
- **C.** bit ✅
- **D.** nibble

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | lượng thông tin là cái nào? |
| optionsVi.A | byte |
| optionsVi.B | KB |
| optionsVi.C | bit |
| optionsVi.D | nibble |
| answerDisplay | C. bit |

**concept**
```
• bit
• Nghĩa: bit.
```

**whyCorrect**
```
• Có vai trò riêng; đối chiếu với điều kiện stem.
• Khớp stem: khớp đáp án «bit».
```

**whyWrong**

##### A
```
• Là gì? byte — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «byte» (A) không thỏa: khớp đáp án «bit».
```

##### B
```
• Là gì? KB — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «KB» (B) không thỏa: khớp đáp án «bit».
```

##### D
```
• Là gì? nibble — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «nibble» (D) không thỏa: khớp đáp án «bit».
```

**whatIs**
```
{
  "A": "byte — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "KB — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "bit — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "nibble — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Câu JIT: nắm định nghĩa/thứ tự/thuật ngữ CNTT.
• bit
```

**memoryTip**
```
(trống)
```

---

### 153/400 · `jit` id=84 · task=`quiz` · num=84 · ans **B**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
アルファベット1文字の情報量は（ ）である。
```

**Options**

- **A.** 4 bit = 0.5 byte
- **B.** 8 bit = 1 byte ✅
- **C.** 16 bit = 2 byte
- **D.** 32 bit = 4 byte

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Điền từ thích hợp vào chỗ trống (xem câu gốc). |
| optionsVi.A | 4 bit = 0.5 byte |
| optionsVi.B | 8 bit = 1 byte |
| optionsVi.C | 16 bit = 2 byte |
| optionsVi.D | 32 bit = 4 byte |
| answerDisplay | B. 8 bit = 1 byte |

**concept**
```
• 8 bit = 1 byte
• Nghĩa: 8 bit = 1 byte.
```

**whyCorrect**
```
• Có vai trò riêng; đối chiếu với điều kiện stem.
• Khớp stem: khớp đáp án «8 bit = 1 byte».
```

**whyWrong**

##### A
```
• Là gì? 4 bit = 0.5 byte — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «4 bit = 0.5 byte» (A) không thỏa: khớp đáp án «8 bit = 1 byte».
```

##### C
```
• Là gì? 16 bit = 2 byte — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «16 bit = 2 byte» (C) không thỏa: khớp đáp án «8 bit = 1 byte».
```

##### D
```
• Là gì? 32 bit = 4 byte — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «32 bit = 4 byte» (D) không thỏa: khớp đáp án «8 bit = 1 byte».
```

**whatIs**
```
{
  "A": "4 bit = 0.5 byte — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "8 bit = 1 byte — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "16 bit = 2 byte — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "32 bit = 4 byte — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Câu JIT: nắm định nghĩa/thứ tự/thuật ngữ CNTT.
• 8 bit = 1 byte
```

**memoryTip**
```
(trống)
```

---

### 154/400 · `jit` id=85 · task=`quiz` · num=85 · ans **B**

- **flags:** khop_dap_an
- **status:** `todo`

**Đề gốc**

```
現在の日本語文字に使われるUnicodeは何個のコード番号を持つか。
```

**Options**

- **A.** 32,768個
- **B.** 65,536個 ✅
- **C.** 128,000個
- **D.** 256,000個

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Bảng mã này có bao nhiêu mã (code point)? |
| optionsVi.A | 32,768 cái/mục |
| optionsVi.B | 65,536 cái/mục |
| optionsVi.C | 128,000 cái/mục |
| optionsVi.D | 256,000 cái/mục |
| answerDisplay | B. 65,536 cái/mục |

**concept**
```
• 65,536 cái/mục
• Nghĩa: 65,536 cái/mục.
```

**whyCorrect**
```
• 65,536 cái/mục
• Đáp án B: 65,536 cái/mục
```

**whyWrong**

##### A
```
• Là gì? 32,768個 (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «32,768個» (A) không thỏa: khớp đáp án «65,536個».
```

##### C
```
• Là gì? 128,000個 (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «128,000個» (C) không thỏa: khớp đáp án «65,536個».
```

##### D
```
• Là gì? 256,000個 (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «256,000個» (D) không thỏa: khớp đáp án «65,536個».
```

**whatIs**
```
{
  "A": "32,768個 (thuật ngữ JP).",
  "B": "65,536個 (thuật ngữ JP).",
  "C": "128,000個 (thuật ngữ JP).",
  "D": "256,000個 (thuật ngữ JP)."
}
```

**intent**
```
• Câu JIT: nắm định nghĩa/thứ tự/thuật ngữ CNTT.
• 65,536 cái/mục
```

**memoryTip**
```
(trống)
```

---

### 155/400 · `jit` id=86 · task=`quiz` · num=86 · ans **B**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
【専門用語】次の日本語の用語をベトナム語に直しなさい。 情報量
```

**Options**

- **A.** Tốc độ xử lý
- **B.** Lượng thông tin ✅
- **C.** Dung lượng bộ nhớ
- **D.** Tốc độ truyền

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | 【Thuật ngữ】Chọn nghĩa tiếng Việt đúng cho «lượng thông tin». |
| optionsVi.A | Tốc độ xử lý |
| optionsVi.B | Lượng thông tin |
| optionsVi.C | Dung lượng bộ nhớ |
| optionsVi.D | Tốc độ truyền |
| answerDisplay | B. Lượng thông tin |

**concept**
```
• «lượng thông tin» nghĩa Việt: «Lượng thông tin».
```

**whyCorrect**
```
• Lượng thông tin — lượng thông tin（ ） Lượng thông tin（ ） （§13.1）。 Đây là câu đối chiếu thuật ngữ JP ↔ VI: phải khớp đúng nghĩa chuyên ngành, không chọn từ gần nghĩa.
• «lượng thông tin» = Lượng thông tin
• Ghép đúng Hán tự/katakana với nghĩa VI đã học.
```

**whyWrong**

##### A
```
• Là gì? Tốc độ xử lý — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Tốc độ xử lý» (A) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### C
```
• Là gì? Dung lượng bộ nhớ — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Dung lượng bộ nhớ» (C) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### D
```
• Là gì? Tốc độ truyền — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Tốc độ truyền» (D) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

**whatIs**
```
{
  "A": "Tốc độ xử lý — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Lượng thông tin — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Dung lượng bộ nhớ — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Tốc độ truyền — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Câu từ vựng: cho thuật ngữ (thường JP) → chọn nghĩa tiếng Việt đúng.
```

**memoryTip**
```
• lượng thông tin → Lượng thông tin
```

---

### 156/400 · `jit` id=87 · task=`quiz` · num=87 · ans **C**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
1つの日本語文字（漢字など）を表現するために使用するデータ量は（ ）である。
```

**Options**

- **A.** 8 bit = 1 byte
- **B.** 16 bit = 1 byte
- **C.** 16 bit = 2 byte ✅
- **D.** 32 bit = 4 byte

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Điền từ thích hợp vào chỗ trống (xem câu gốc). |
| optionsVi.A | 8 bit = 1 byte |
| optionsVi.B | 16 bit = 1 byte |
| optionsVi.C | 16 bit = 2 byte |
| optionsVi.D | 32 bit = 4 byte |
| answerDisplay | C. 16 bit = 2 byte |

**concept**
```
• 16 bit = 2 byte
• Nghĩa: 16 bit = 2 byte.
```

**whyCorrect**
```
• Có vai trò riêng; đối chiếu với điều kiện stem.
• Khớp stem: khớp đáp án «16 bit = 2 byte».
```

**whyWrong**

##### A
```
• Là gì? 8 bit = 1 byte — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «8 bit = 1 byte» (A) không thỏa: khớp đáp án «16 bit = 2 byte».
```

##### B
```
• Là gì? 16 bit = 1 byte — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «16 bit = 1 byte» (B) không thỏa: khớp đáp án «16 bit = 2 byte».
```

##### D
```
• Là gì? 32 bit = 4 byte — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «32 bit = 4 byte» (D) không thỏa: khớp đáp án «16 bit = 2 byte».
```

**whatIs**
```
{
  "A": "8 bit = 1 byte — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "16 bit = 1 byte — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "16 bit = 2 byte — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "32 bit = 4 byte — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Câu JIT: nắm định nghĩa/thứ tự/thuật ngữ CNTT.
• 16 bit = 2 byte
```

**memoryTip**
```
(trống)
```

---

### 157/400 · `jit` id=88 · task=`quiz` · num=88 · ans **B**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
MIDI（Musical Instrument Digital Interface）命令のデータ量はどれか。
```

**Options**

- **A.** 4 bit = 0.5 byte
- **B.** 8 bit = 1 byte ✅
- **C.** 16 bit = 2 byte
- **D.** 32 bit = 4 byte

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Chọn phương án đúng (xem câu gốc). |
| optionsVi.A | 4 bit = 0.5 byte |
| optionsVi.B | 8 bit = 1 byte |
| optionsVi.C | 16 bit = 2 byte |
| optionsVi.D | 32 bit = 4 byte |
| answerDisplay | B. 8 bit = 1 byte |

**concept**
```
• 8 bit = 1 byte
• Nghĩa: 8 bit = 1 byte.
```

**whyCorrect**
```
• Có vai trò riêng; đối chiếu với điều kiện stem.
• Khớp stem: đặc trưng tín hiệu/dữ liệu số.
```

**whyWrong**

##### A
```
• Là gì? 4 bit = 0.5 byte — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «4 bit = 0.5 byte» (A) không thỏa: đặc trưng tín hiệu/dữ liệu số.
```

##### C
```
• Là gì? 16 bit = 2 byte — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «16 bit = 2 byte» (C) không thỏa: đặc trưng tín hiệu/dữ liệu số.
```

##### D
```
• Là gì? 32 bit = 4 byte — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «32 bit = 4 byte» (D) không thỏa: đặc trưng tín hiệu/dữ liệu số.
```

**whatIs**
```
{
  "A": "4 bit = 0.5 byte — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "8 bit = 1 byte — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "16 bit = 2 byte — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "32 bit = 4 byte — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Câu JIT: nắm định nghĩa/thứ tự/thuật ngữ CNTT.
• 8 bit = 1 byte
```

**memoryTip**
```
(trống)
```

---

### 158/400 · `jit` id=90 · task=`quiz` · num=90 · ans **B**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
CDの音声のサンプリング周波数はどれか。
```

**Options**

- **A.** 22.05 kHz
- **B.** 44.1 kHz ✅
- **C.** 96 kHz
- **D.** 192 kHz

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | tần số lấy mẫu là cái nào? |
| optionsVi.A | 22.05 kHz |
| optionsVi.B | 44.1 kHz |
| optionsVi.C | 96 kHz |
| optionsVi.D | 192 kHz |
| answerDisplay | B. 44.1 kHz |

**concept**
```
• 44.1 kHz
• Nghĩa: 44.1 kHz.
```

**whyCorrect**
```
• Có vai trò riêng; đối chiếu với điều kiện stem.
• Khớp stem: khớp đáp án «44.1 kHz».
```

**whyWrong**

##### A
```
• Là gì? 22.05 kHz — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «22.05 kHz» (A) không thỏa: khớp đáp án «44.1 kHz».
```

##### C
```
• Là gì? 96 kHz — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «96 kHz» (C) không thỏa: khớp đáp án «44.1 kHz».
```

##### D
```
• Là gì? 192 kHz — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «192 kHz» (D) không thỏa: khớp đáp án «44.1 kHz».
```

**whatIs**
```
{
  "A": "22.05 kHz — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "44.1 kHz — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "96 kHz — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "192 kHz — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Câu JIT: nắm định nghĩa/thứ tự/thuật ngữ CNTT.
• 44.1 kHz
```

**memoryTip**
```
(trống)
```

---

### 159/400 · `jit` id=91 · task=`quiz` · num=91 · ans **B**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
デジタル画像のVGA解像度として正しいものをえらんでください。
```

**Options**

- **A.** 320×240
- **B.** 640×480 ✅
- **C.** 1024×768
- **D.** 1280×1024

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Đâu là phát biểu ĐÚNG về số (digital)? |
| optionsVi.A | 320×240 |
| optionsVi.B | 640×480 |
| optionsVi.C | 1024×768 |
| optionsVi.D | 1280×1024 |
| answerDisplay | B. 640×480 |

**concept**
```
• 640×480
• Nghĩa: 640×480.
```

**whyCorrect**
```
• Có vai trò riêng; đối chiếu với điều kiện stem.
• Khớp stem: đặc trưng tín hiệu/dữ liệu số.
```

**whyWrong**

##### A
```
• Là gì? 320×240 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «320×240» (A) không thỏa: đặc trưng tín hiệu/dữ liệu số.
```

##### C
```
• Là gì? 1024×768 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «1024×768» (C) không thỏa: đặc trưng tín hiệu/dữ liệu số.
```

##### D
```
• Là gì? 1280×1024 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «1280×1024» (D) không thỏa: đặc trưng tín hiệu/dữ liệu số.
```

**whatIs**
```
{
  "A": "320×240 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "640×480 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "1024×768 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "1280×1024 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Câu JIT: nắm định nghĩa/thứ tự/thuật ngữ CNTT.
• 640×480
```

**memoryTip**
```
• アナログ = liên tục · デジタル = rời rạc 0/1.
```

---

### 160/400 · `jit` id=92 · task=`quiz` · num=92 · ans **C**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
RGB各色8 bitで表現する場合、1画素（ピクセル）のデータ量はどれか。
```

**Options**

- **A.** 1 byte
- **B.** 2 byte
- **C.** 3 byte ✅
- **D.** 4 byte

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Chọn phương án đúng (xem câu gốc). |
| optionsVi.A | 1 byte |
| optionsVi.B | 2 byte |
| optionsVi.C | 3 byte |
| optionsVi.D | 4 byte |
| answerDisplay | C. 3 byte |

**concept**
```
• 3 byte
• Nghĩa: 3 byte.
```

**whyCorrect**
```
• Có vai trò riêng; đối chiếu với điều kiện stem.
• Khớp stem: khớp đáp án «3 byte».
```

**whyWrong**

##### A
```
• Là gì? 1 byte — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «1 byte» (A) không thỏa: khớp đáp án «3 byte».
```

##### B
```
• Là gì? 2 byte — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «2 byte» (B) không thỏa: khớp đáp án «3 byte».
```

##### D
```
• Là gì? 4 byte — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «4 byte» (D) không thỏa: khớp đáp án «3 byte».
```

**whatIs**
```
{
  "A": "1 byte — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "2 byte — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "3 byte — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "4 byte — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Câu JIT: nắm định nghĩa/thứ tự/thuật ngữ CNTT.
• 3 byte
```

**memoryTip**
```
(trống)
```

---

### 161/400 · `jit` id=94 · task=`quiz` · num=94 · ans **D**

- **flags:** khop_dap_an
- **status:** `todo`

**Đề gốc**

```
動画について正しくないものをえらんでください。
```

**Options**

- **A.** 映画は1秒間に24回画面が書き換えられる
- **B.** 日本のテレビは1秒間に30回画面が書き換えられる
- **C.** 動画の情報量 ＝ 静止画1枚 × フレームレート × 秒数
- **D.** 動画は静止画と関係なく独立した形式である ✅

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Chọn phát biểu SAI về video / ảnh động. |
| optionsVi.A | Phim làm mới màn hình 24 lần/giây |
| optionsVi.B | TV Nhật làm mới màn hình 30 lần/giây |
| optionsVi.C | Lượng tin video = 1 ảnh tĩnh × frame rate × số giây |
| optionsVi.D | Video là định dạng độc lập, không liên quan ảnh tĩnh (sai) |
| answerDisplay | D. Video là định dạng độc lập, không liên quan ảnh tĩnh (sai) |

**concept**
```
• Video là định dạng độc lập, không liên quan ảnh tĩnh (sai)
• Nghĩa: Video là định dạng độc lập, không liên quan ảnh tĩnh (sai).
```

**whyCorrect**
```
• Video là định dạng độc lập, không liên quan ảnh tĩnh (sai)
• Đáp án D: Video là định dạng độc lập, không liên quan ảnh tĩnh (sai)
```

**whyWrong**

##### A
```
• Là gì? 映画は1秒間に24回画面が書き換えられる (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «映画は1秒間に24回画面が書き換えられる» (A) không thỏa: khớp đáp án «動画は静止画と関係なく独立した形式である».
```

##### B
```
• Là gì? 日本のテレビは1秒間に30回画面が書き換えられる (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «日本のテレビは1秒間に30回画面が書き換えられる» (B) không thỏa: khớp đáp án «動画は静止画と関係なく独立した形式である».
```

##### C
```
• Là gì? 動画の情報量 ＝ 静止画1枚 × フレームレート × 秒数 (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «動画の情報量 ＝ 静止画1枚 × フレームレート × 秒数» (C) không thỏa: khớp đáp án «動画は静止画と関係なく独立した形式である».
```

**whatIs**
```
{
  "A": "映画は1秒間に24回画面が書き換えられる (thuật ngữ JP).",
  "B": "日本のテレビは1秒間に30回画面が書き換えられる (thuật ngữ JP).",
  "C": "動画の情報量 ＝ 静止画1枚 × フレームレート × 秒数 (thuật ngữ JP).",
  "D": "動画は静止画と関係なく独立した形式である (thuật ngữ JP)."
}
```

**intent**
```
• Câu JIT: nắm định nghĩa/thứ tự/thuật ngữ CNTT.
• Video là định dạng độc lập, không liên quan ảnh tĩnh (sai)
```

**memoryTip**
```
(trống)
```

---

### 162/400 · `jit` id=95 · task=`quiz` · num=95 · ans **C**

- **flags:** khop_dap_an
- **status:** `todo`

**Đề gốc**

```
日本のテレビ放送における1秒あたりの画面書き換え回数（フレームレート）はいくつか。
```

**Options**

- **A.** 24回
- **B.** 25回
- **C.** 30回 ✅
- **D.** 60回

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Frame rate (số lần làm mới màn hình/giây) của truyền hình Nhật là bao nhiêu? |
| optionsVi.A | 24回 — khái niệm kỹ thuật |
| optionsVi.B | 25回 — khái niệm kỹ thuật |
| optionsVi.C | 30回 — khái niệm kỹ thuật |
| optionsVi.D | 60回 — khái niệm kỹ thuật |
| answerDisplay | C. 30回 — khái niệm kỹ thuật |

**concept**
```
• 30 lần
• Nghĩa: 30 lần.
```

**whyCorrect**
```
• Khái niệm CNTT trong đề thi JIT.
• Khớp stem: khớp đáp án «30回».
```

**whyWrong**

##### A
```
• Là gì? 24回 (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «24回» (A) không thỏa: khớp đáp án «30回».
```

##### B
```
• Là gì? 25回 (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «25回» (B) không thỏa: khớp đáp án «30回».
```

##### D
```
• Là gì? 60回 (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «60回» (D) không thỏa: khớp đáp án «30回».
```

**whatIs**
```
{
  "A": "24回 (thuật ngữ JP).",
  "B": "25回 (thuật ngữ JP).",
  "C": "30回 (thuật ngữ JP).",
  "D": "60回 (thuật ngữ JP)."
}
```

**intent**
```
• Câu JIT: nắm định nghĩa/thứ tự/thuật ngữ CNTT.
• 30 lần
```

**memoryTip**
```
(trống)
```

---

### 163/400 · `jit` id=96 · task=`quiz` · num=96 · ans **C**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
通信速度の単位として正しいのはどれか。
```

**Options**

- **A.** Hz
- **B.** dpi
- **C.** bps（bit per second） ✅
- **D.** dB

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Đâu là lựa chọn ĐÚNG về nội dung đề? |
| optionsVi.A | Hz |
| optionsVi.B | dpi |
| optionsVi.C | bps（bit per second） |
| optionsVi.D | dB |
| answerDisplay | C. bps（bit per second） |

**concept**
```
• bps（bit per second）
• Nghĩa: bps（bit per second）.
```

**whyCorrect**
```
• bps（bit per second）
• Đáp án C: bps（bit per second）
```

**whyWrong**

##### A
```
• Là gì? Hz — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Hz» (A) không thỏa: phát biểu đúng/sai khớp cơ chế.
```

##### B
```
• Là gì? dpi — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «dpi» (B) không thỏa: phát biểu đúng/sai khớp cơ chế.
```

##### D
```
• Là gì? dB — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «dB» (D) không thỏa: phát biểu đúng/sai khớp cơ chế.
```

**whatIs**
```
{
  "A": "Hz — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "dpi — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "bps（bit per second） — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "dB — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Câu JIT: nắm định nghĩa/thứ tự/thuật ngữ CNTT.
• bps（bit per second）
```

**memoryTip**
```
(trống)
```

---

### 164/400 · `jit` id=98 · task=`quiz` · num=98 · ans **C**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
【専門用語】次の日本語の用語をベトナム語に直しなさい。 データ圧縮
```

**Options**

- **A.** Truyền dữ liệu
- **B.** Mã hóa dữ liệu
- **C.** Nén dữ liệu ✅
- **D.** Lưu trữ dữ liệu

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | 【Thuật ngữ】Chọn nghĩa tiếng Việt đúng cho «nén dữ liệu». |
| optionsVi.A | Truyền dữ liệu |
| optionsVi.B | Mã hóa dữ liệu |
| optionsVi.C | Nén dữ liệu |
| optionsVi.D | Lưu trữ dữ liệu |
| answerDisplay | C. Nén dữ liệu |

**concept**
```
• «nén dữ liệu» nghĩa Việt: «Nén dữ liệu».
```

**whyCorrect**
```
• Nén dữ liệu — nén dữ liệu（dữ liệu ） Nén dữ liệu（ ） （§15.2）。 Đây là câu đối chiếu thuật ngữ JP ↔ VI: phải khớp đúng nghĩa chuyên ngành, không chọn từ gần nghĩa.
• «nén dữ liệu» = Nén dữ liệu
• Ghép đúng Hán tự/katakana với nghĩa VI đã học.
```

**whyWrong**

##### A
```
• Là gì? Truyền dữ liệu — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Truyền dữ liệu» (A) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### B
```
• Là gì? Mã hóa — biến plaintext thành ciphertext.
• Dùng để làm gì? Bảo mật nội dung khi truyền/lưu.
• Vì sao sai? «Mã hóa dữ liệu» (B) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### D
```
• Là gì? Lưu trữ dữ liệu — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Lưu trữ dữ liệu» (D) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

**whatIs**
```
{
  "A": "Truyền dữ liệu — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Mã hóa — biến plaintext thành ciphertext.",
  "C": "Nén dữ liệu — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Lưu trữ dữ liệu — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Câu từ vựng: cho thuật ngữ (thường JP) → chọn nghĩa tiếng Việt đúng.
```

**memoryTip**
```
• nén dữ liệu → Nén dữ liệu
```

---

### 165/400 · `jit` id=99 · task=`quiz` · num=99 · ans **B**

- **flags:** khop_dap_an
- **status:** `todo`

**Đề gốc**

```
ランレングス圧縮とは、（ ）を記述する画像圧縮方式の1つである。
```

**Options**

- **A.** 画素の色と形
- **B.** 色がいくつ並ぶか ✅
- **C.** 画像の解像度
- **D.** 画像のフレームレート

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Điền từ thích hợp vào chỗ trống (xem câu gốc). |
| optionsVi.A | màu và hình pixel |
| optionsVi.B | có bao nhiêu màu liền |
| optionsVi.C | độ phân giải ảnh |
| optionsVi.D | frame rate (tốc độ khung hình) |
| answerDisplay | B. có bao nhiêu màu liền |

**concept**
```
• có bao nhiêu màu liền
• Nghĩa: có bao nhiêu màu liền.
```

**whyCorrect**
```
• có bao nhiêu màu liền
• Đáp án B: có bao nhiêu màu liền
```

**whyWrong**

##### A
```
• Là gì? 画素の色と形 (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «画素の色と形» (A) không thỏa: khớp đáp án «色がいくつ並ぶか».
```

##### C
```
• Là gì? 画像の解像度 (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «画像の解像度» (C) không thỏa: khớp đáp án «色がいくつ並ぶか».
```

##### D
```
• Là gì? 画像のフレームレート (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «画像のフレームレート» (D) không thỏa: khớp đáp án «色がいくつ並ぶか».
```

**whatIs**
```
{
  "A": "画素の色と形 (thuật ngữ JP).",
  "B": "色がいくつ並ぶか (thuật ngữ JP).",
  "C": "画像の解像度 (thuật ngữ JP).",
  "D": "画像のフレームレート (thuật ngữ JP)."
}
```

**intent**
```
• Câu JIT: nắm định nghĩa/thứ tự/thuật ngữ CNTT.
• có bao nhiêu màu liền
```

**memoryTip**
```
(trống)
```

---

### 166/400 · `jit` id=100 · task=`quiz` · num=100 · ans **D**

- **flags:** khop_dap_an
- **status:** `todo`

**Đề gốc**

```
音声情報の圧縮について正しくないものをえらんでください。
```

**Options**

- **A.** フーリエ変換を利用する
- **B.** 音の波としての性質を使う
- **C.** 低い周波数は元の波の大きな性質を表す
- **D.** 圧縮すると音質は必ず変わらない ✅

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Chọn phát biểu SAI về thông tin âm thanh. |
| optionsVi.A | biến đổi Fourier |
| optionsVi.B | dùng tính chất sóng âm |
| optionsVi.C | tần số thấp thể hiện tính chất lớn của sóng gốc |
| optionsVi.D | nén thì chất lượng âm không đổi (sai) |
| answerDisplay | D. nén thì chất lượng âm không đổi (sai) |

**concept**
```
• nén thì chất lượng âm không đổi (sai)
• Nghĩa: nén thì chất lượng âm không đổi (sai).
```

**whyCorrect**
```
• nén thì chất lượng âm không đổi (sai)
• Đáp án D: nén thì chất lượng âm không đổi (sai)
```

**whyWrong**

##### A
```
• Là gì? フーリエ変換を利用する (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «フーリエ変換を利用する» (A) không thỏa: khớp đáp án «圧縮すると音質は必ず変わらない».
```

##### B
```
• Là gì? 音の波としての性質を使う (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «音の波としての性質を使う» (B) không thỏa: khớp đáp án «圧縮すると音質は必ず変わらない».
```

##### C
```
• Là gì? 低い周波数は元の波の大きな性質を表す (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «低い周波数は元の波の大きな性質を表す» (C) không thỏa: khớp đáp án «圧縮すると音質は必ず変わらない».
```

**whatIs**
```
{
  "A": "フーリエ変換を利用する (thuật ngữ JP).",
  "B": "音の波としての性質を使う (thuật ngữ JP).",
  "C": "低い周波数は元の波の大きな性質を表す (thuật ngữ JP).",
  "D": "圧縮すると音質は必ず変わらない (thuật ngữ JP)."
}
```

**intent**
```
• Câu JIT: nắm định nghĩa/thứ tự/thuật ngữ CNTT.
• nén thì chất lượng âm không đổi (sai)
```

**memoryTip**
```
(trống)
```

---

### 167/400 · `jit` id=101 · task=`quiz` · num=101 · ans **B**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
1 GBは何 MBか。
```

**Options**

- **A.** 1,000 MB
- **B.** 1,024 MB ✅
- **C.** 1,100 MB
- **D.** 2,048 MB

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | 1 GB bằng bao nhiêu MB? |
| optionsVi.A | 1,000 MB |
| optionsVi.B | 1,024 MB |
| optionsVi.C | 1,100 MB |
| optionsVi.D | 2,048 MB |
| answerDisplay | B. 1,024 MB |

**concept**
```
• 1,024 MB
• Nghĩa: 1,024 MB.
```

**whyCorrect**
```
• Có vai trò riêng; đối chiếu với điều kiện stem.
• Khớp stem: khớp đáp án «1,024 MB».
```

**whyWrong**

##### A
```
• Là gì? 1,000 MB — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «1,000 MB» (A) không thỏa: khớp đáp án «1,024 MB».
```

##### C
```
• Là gì? 1,100 MB — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «1,100 MB» (C) không thỏa: khớp đáp án «1,024 MB».
```

##### D
```
• Là gì? 2,048 MB — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «2,048 MB» (D) không thỏa: khớp đáp án «1,024 MB».
```

**whatIs**
```
{
  "A": "1,000 MB — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "1,024 MB — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "1,100 MB — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "2,048 MB — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Câu JIT: nắm định nghĩa/thứ tự/thuật ngữ CNTT.
• 1,024 MB
```

**memoryTip**
```
(trống)
```

---

### 168/400 · `jit` id=102 · task=`quiz` · num=102 · ans **B**

- **flags:** khop_dap_an
- **status:** `todo`

**Đề gốc**

```
ADSLは何の略か。
```

**Options**

- **A.** Advanced Digital Subscriber Line
- **B.** Asymmetric Digital Subscriber Line ✅
- **C.** Automatic Digital Service Link
- **D.** Analog Digital Subscriber Line

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | ADSL là viết tắt của gì? |
| optionsVi.A | Advanced Digital Subscriber Line |
| optionsVi.B | Asymmetric Digital Subscriber Line |
| optionsVi.C | Automatic Digital Service Link |
| optionsVi.D | Analog Digital Subscriber Line |
| answerDisplay | B. Asymmetric Digital Subscriber Line |

**concept**
```
• Asymmetric Digital Subscriber Line
• Nghĩa: Asymmetric Digital Subscriber Line.
```

**whyCorrect**
```
• Asymmetric Digital Subscriber Line
• Đáp án B: Asymmetric Digital Subscriber Line
```

**whyWrong**

##### A
```
• Là gì? Tín hiệu/dữ liệu số (rời rạc, 0/1).
• Dùng để làm gì? Digital representation.
• Vì sao sai? «Advanced Digital Subscriber Line» (A) không thỏa: khớp đáp án «Asymmetric Digital Subscriber Line».
```

##### C
```
• Là gì? Tín hiệu/dữ liệu số (rời rạc, 0/1).
• Dùng để làm gì? Digital representation.
• Vì sao sai? «Automatic Digital Service Link» (C) không thỏa: khớp đáp án «Asymmetric Digital Subscriber Line».
```

##### D
```
• Là gì? Tín hiệu/dữ liệu số (rời rạc, 0/1).
• Dùng để làm gì? Digital representation.
• Vì sao sai? «Analog Digital Subscriber Line» (D) không thỏa: khớp đáp án «Asymmetric Digital Subscriber Line».
```

**whatIs**
```
{
  "A": "Tín hiệu/dữ liệu số (rời rạc, 0/1).",
  "B": "Tín hiệu/dữ liệu số (rời rạc, 0/1).",
  "C": "Tín hiệu/dữ liệu số (rời rạc, 0/1).",
  "D": "Tín hiệu/dữ liệu số (rời rạc, 0/1)."
}
```

**intent**
```
• Câu JIT: nắm định nghĩa/thứ tự/thuật ngữ CNTT.
• Asymmetric Digital Subscriber Line
```

**memoryTip**
```
(trống)
```

---

### 169/400 · `jit` id=105 · task=`quiz` · num=105 · ans **C**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
日本のテレビ放送で使われるフレームレートはいくらか。
```

**Options**

- **A.** 24 fps
- **B.** 25 fps
- **C.** 30 fps ✅
- **D.** 60 fps

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Frame rate (số lần làm mới màn hình/giây) của truyền hình Nhật là bao nhiêu? |
| optionsVi.A | 24 fps |
| optionsVi.B | 25 fps |
| optionsVi.C | 30 fps |
| optionsVi.D | 60 fps |
| answerDisplay | C. 30 fps |

**concept**
```
• 30 fps
• Nghĩa: 30 fps.
```

**whyCorrect**
```
• Có vai trò riêng; đối chiếu với điều kiện stem.
• Khớp stem: khớp đáp án «30 fps».
```

**whyWrong**

##### A
```
• Là gì? 24 fps — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «24 fps» (A) không thỏa: khớp đáp án «30 fps».
```

##### B
```
• Là gì? 25 fps — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «25 fps» (B) không thỏa: khớp đáp án «30 fps».
```

##### D
```
• Là gì? 60 fps — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «60 fps» (D) không thỏa: khớp đáp án «30 fps».
```

**whatIs**
```
{
  "A": "24 fps — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "25 fps — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "30 fps — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "60 fps — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Câu JIT: nắm định nghĩa/thứ tự/thuật ngữ CNTT.
• 30 fps
```

**memoryTip**
```
(trống)
```

---

### 170/400 · `jit` id=107 · task=`quiz` · num=107 · ans **D**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
【専門用語】次の日本語の用語をベトナム語に直しなさい。 高水準言語
```

**Options**

- **A.** Ngôn ngữ bậc thấp
- **B.** Ngôn ngữ máy
- **C.** Ngôn ngữ tự nhiên
- **D.** Ngôn ngữ bậc cao ✅

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | 【Thuật ngữ】Chọn nghĩa tiếng Việt đúng cho «ngôn ngữ bậc cao». |
| optionsVi.A | Ngôn ngữ bậc thấp |
| optionsVi.B | Ngôn ngữ máy |
| optionsVi.C | Ngôn ngữ tự nhiên |
| optionsVi.D | Ngôn ngữ bậc cao |
| answerDisplay | D. Ngôn ngữ bậc cao |

**concept**
```
• «ngôn ngữ bậc cao» nghĩa Việt: «Ngôn ngữ bậc cao».
```

**whyCorrect**
```
• Ngôn ngữ bậc cao — ngôn ngữ bậc cao（ ） Ngôn ngữ bậc cao（ ） 。Java hoặc C++ （§16）。 Đây là câu đối chiếu thuật ngữ JP ↔ VI: phải khớp đúng nghĩa chuyên ngành, không chọn từ gần nghĩa.
• «ngôn ngữ bậc cao» = Ngôn ngữ bậc cao
• Ghép đúng Hán tự/katakana với nghĩa VI đã học.
```

**whyWrong**

##### A
```
• Là gì? Ngôn ngữ bậc thấp — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Ngôn ngữ bậc thấp» (A) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### B
```
• Là gì? Ngôn ngữ máy — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Ngôn ngữ máy» (B) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### C
```
• Là gì? Ngôn ngữ tự nhiên — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Ngôn ngữ tự nhiên» (C) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

**whatIs**
```
{
  "A": "Ngôn ngữ bậc thấp — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Ngôn ngữ máy — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Ngôn ngữ tự nhiên — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Ngôn ngữ bậc cao — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Câu từ vựng: cho thuật ngữ (thường JP) → chọn nghĩa tiếng Việt đúng.
```

**memoryTip**
```
• ngôn ngữ bậc cao → Ngôn ngữ bậc cao
```

---

### 171/400 · `jit` id=108 · task=`quiz` · num=108 · ans **A**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
dpi（dot per inch）はどの機器の解像度を表すか。
```

**Options**

- **A.** スキャナまたはプリンタ ✅
- **B.** CPU
- **C.** RAM
- **D.** ネットワーク機器

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | dpi (dot per inch) biểu thị độ phân giải của thiết bị nào? |
| optionsVi.A | máy in |
| optionsVi.B | phát biểu về CPU / bộ nhớ / bán dẫn |
| optionsVi.C | RAM |
| optionsVi.D | mạng |
| answerDisplay | A. máy in |

**concept**
```
• máy in
• Nghĩa: máy in.
```

**whyCorrect**
```
• Khái niệm CNTT trong đề thi JIT.
• Khớp stem: khớp đáp án «スキャナまたはプリンタ».
```

**whyWrong**

##### B
```
• Là gì? CPU — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «CPU» (B) không thỏa: khớp đáp án «スキャナまたはプリンタ».
```

##### C
```
• Là gì? RAM — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «RAM» (C) không thỏa: khớp đáp án «スキャナまたはプリンタ».
```

##### D
```
• Là gì? ネットワーク機器 (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «ネットワーク機器» (D) không thỏa: khớp đáp án «スキャナまたはプリンタ».
```

**whatIs**
```
{
  "A": "スキャナまたはプリンタ (thuật ngữ JP).",
  "B": "CPU — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "RAM — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "ネットワーク機器 (thuật ngữ JP)."
}
```

**intent**
```
• Câu JIT: nắm định nghĩa/thứ tự/thuật ngữ CNTT.
• máy in
```

**memoryTip**
```
(trống)
```

---

### 172/400 · `jit` id=109 · task=`quiz` · num=109 · ans **C**

- **flags:** khop_dap_an
- **status:** `todo`

**Đề gốc**

```
ランレングス圧縮について正しくないものをえらんでください。
```

**Options**

- **A.** 色がいくつ並ぶかを記述する圧縮方式
- **B.** 最も単純な画像圧縮方式の1つ
- **C.** いかなる場合でもデータサイズを大幅に削減できる ✅
- **D.** 白と黒が多い画像に効果的

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Về nén Run-Length Encoding (RLE), hãy chọn câu SAI. |
| optionsVi.A | Cách nén mô tả có bao nhiêu màu xếp liền |
| optionsVi.B | một trong các cách nén ảnh đơn giản nhất |
| optionsVi.C | Mọi trường hợp đều giảm mạnh kích thước dữ liệu (thường sai) |
| optionsVi.D | hiệu quả với ảnh nhiều trắng đen |
| answerDisplay | C. Mọi trường hợp đều giảm mạnh kích thước dữ liệu (thường sai) |

**concept**
```
• Mọi trường hợp đều giảm mạnh kích thước dữ liệu (thường sai)
• Nghĩa: Mọi trường hợp đều giảm mạnh kích thước dữ liệu (thường sai).
```

**whyCorrect**
```
• RLE gộp chuỗi ký tự lặp (AAABB → A3B2). Hữu ích khi lặp nhiều, thường lossless. Nhưng dữ liệu ngẫu nhiên/không lặp có thể phình to → không «luôn nhỏ hơn» → A là câu sai (đúng đáp án cần chọn).
• Mọi trường hợp đều giảm mạnh kích thước dữ liệu (thường sai)
• Đáp án C: Mọi trường hợp đều giảm mạnh kích thước dữ liệu (thường sai)
```

**whyWrong**

##### A
```
• Là gì? 色がいくつ並ぶかを記述する圧縮方式 (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «色がいくつ並ぶかを記述する圧縮方式» (A) không thỏa: khớp đáp án «いかなる場合でもデータサイズを大幅に削減できる».
```

##### B
```
• Là gì? 最も単純な画像圧縮方式の1つ (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «最も単純な画像圧縮方式の1つ» (B) không thỏa: khớp đáp án «いかなる場合でもデータサイズを大幅に削減できる».
```

##### D
```
• Là gì? 白と黒が多い画像に効果的 (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «白と黒が多い画像に効果的» (D) không thỏa: khớp đáp án «いかなる場合でもデータサイズを大幅に削減できる».
```

**whatIs**
```
{
  "A": "色がいくつ並ぶかを記述する圧縮方式 (thuật ngữ JP).",
  "B": "最も単純な画像圧縮方式の1つ (thuật ngữ JP).",
  "C": "いかなる場合でもデータサイズを大幅に削減できる (thuật ngữ JP).",
  "D": "白と黒が多い画像に効果的 (thuật ngữ JP)."
}
```

**intent**
```
• Đọc kỹ đề (đã dịch) và chọn đúng bản chất kỹ thuật.
• Mọi trường hợp đều giảm mạnh kích thước dữ liệu (thường sai)
```

**memoryTip**
```
(trống)
```

---

### 173/400 · `jit` id=113 · task=`quiz` · num=113 · ans **B**

- **flags:** khop_dap_an
- **status:** `todo`

**Đề gốc**

```
大量のデータを扱うために最も重要なのはどれか。
```

**Options**

- **A.** データ操作の時間
- **B.** 検索時の速度 ✅
- **C.** データ量の多さ
- **D.** 保存容量の大きさ

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Chọn phương án đúng (xem câu gốc). |
| optionsVi.A | thời gian thao tác dữ liệu |
| optionsVi.B | tốc độ khi tìm kiếm |
| optionsVi.C | lượng dữ liệu |
| optionsVi.D | dung lượng lưu |
| answerDisplay | B. tốc độ khi tìm kiếm |

**concept**
```
• tốc độ khi tìm kiếm
• Thuật ngữ: tốc độ khi tìm kiếm.
```

**whyCorrect**
```
• tốc độ khi tìm kiếm — cơ sở dữ liệu dữ liệu 、tốc độ khi tìm kiếm （§17.1）。
• tốc độ khi tìm kiếm
• Đáp án B: tốc độ khi tìm kiếm
```

**whyWrong**

##### A
```
• Là gì? データ操作の時間 (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «データ操作の時間» (A) không thỏa: khớp đáp án «検索時の速度».
```

##### C
```
• Là gì? データ量の多さ (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «データ量の多さ» (C) không thỏa: khớp đáp án «検索時の速度».
```

##### D
```
• Là gì? 保存容量の大きさ (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «保存容量の大きさ» (D) không thỏa: khớp đáp án «検索時の速度».
```

**whatIs**
```
{
  "A": "データ操作の時間 (thuật ngữ JP).",
  "B": "検索時の速度 (thuật ngữ JP).",
  "C": "データ量の多さ (thuật ngữ JP).",
  "D": "保存容量の大きさ (thuật ngữ JP)."
}
```

**intent**
```
• Câu JIT: nắm định nghĩa/thứ tự/thuật ngữ CNTT.
• tốc độ khi tìm kiếm
```

**memoryTip**
```
(trống)
```

---

### 174/400 · `jit` id=116 · task=`quiz` · num=116 · ans **B**

- **flags:** khop_dap_an
- **status:** `todo`

**Đề gốc**

```
「電気機械式」コンピュータが誕生したのはいつか。
```

**Options**

- **A.** 1946年
- **B.** 1930年 ✅
- **C.** 1949年
- **D.** 1939年

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Máy tính «điện-cơ» ra đời khi nào? |
| optionsVi.A | năm 1946 |
| optionsVi.B | năm 1930 |
| optionsVi.C | năm 1949 |
| optionsVi.D | năm 1939 |
| answerDisplay | B. năm 1930 |

**concept**
```
• năm 1930
• Thuật ngữ: năm 1930.
```

**whyCorrect**
```
• năm 1930 — （ ） thập niên 1930 （§1.2）。
• năm 1930
• Đáp án B: năm 1930
```

**whyWrong**

##### A
```
• Là gì? 1946年 (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «1946年» (A) không thỏa: khớp đáp án «1930年».
```

##### C
```
• Là gì? 1949年 (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «1949年» (C) không thỏa: khớp đáp án «1930年».
```

##### D
```
• Là gì? 1939年 (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «1939年» (D) không thỏa: khớp đáp án «1930年».
```

**whatIs**
```
{
  "A": "1946年 (thuật ngữ JP).",
  "B": "1930年 (thuật ngữ JP).",
  "C": "1949年 (thuật ngữ JP).",
  "D": "1939年 (thuật ngữ JP)."
}
```

**intent**
```
• Câu JIT: nắm định nghĩa/thứ tự/thuật ngữ CNTT.
• năm 1930
```

**memoryTip**
```
(trống)
```

---

### 175/400 · `jit` id=117 · task=`quiz` · num=117 · ans **B**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
【専門知識】（ ）は、データのアクセス速度が最も高速です。
```

**Options**

- **A.** ハードディスク
- **B.** キャッシュ ✅
- **C.** DVD
- **D.** USBメモリ

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | 【Chuyên môn】Chọn đáp án đúng theo kiến thức trong đề. |
| optionsVi.A | ハードディスク — khái niệm kỹ thuật |
| optionsVi.B | bộ nhớ đệm (cache) |
| optionsVi.C | DVD |
| optionsVi.D | USBメモリ — khái niệm kỹ thuật |
| answerDisplay | B. bộ nhớ đệm (cache) |

**concept**
```
• bộ nhớ đệm (cache)
• Thuật ngữ: bộ nhớ đệm (cache).
```

**whyCorrect**
```
• bộ nhớ đệm (cache)
• Đáp án B: bộ nhớ đệm (cache)
```

**whyWrong**

##### A
```
• Là gì? ハードディスク (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «ハードディスク» (A) không thỏa: khớp đáp án «キャッシュ».
```

##### C
```
• Là gì? DVD — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «DVD» (C) không thỏa: khớp đáp án «キャッシュ».
```

##### D
```
• Là gì? USBメモリ (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «USBメモリ» (D) không thỏa: khớp đáp án «キャッシュ».
```

**whatIs**
```
{
  "A": "ハードディスク (thuật ngữ JP).",
  "B": "キャッシュ (thuật ngữ JP).",
  "C": "DVD — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "USBメモリ (thuật ngữ JP)."
}
```

**intent**
```
• Câu JIT: nắm định nghĩa/thứ tự/thuật ngữ CNTT.
• bộ nhớ đệm (cache)
```

**memoryTip**
```
(trống)
```

---

### 176/400 · `jit` id=118 · task=`quiz` · num=118 · ans **A**

- **flags:** khop_dap_an
- **status:** `todo`

**Đề gốc**

```
密結合マルチプロセッサとはどのような方式か。
```

**Options**

- **A.** 2つ以上の処理装置がメモリを共有して並列処理を行う ✅
- **B.** 2つ以上の処理装置が独立したメモリを持って並列処理を行う
- **C.** 1台のコンピュータが全処理を担当する
- **D.** ネットワーク上の複数のコンピュータで処理を分担する

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | đa xử lý liên kết chặt là phương thức như thế nào? |
| optionsVi.A | ≥2 bộ xử lý chia sẻ bộ nhớ, xử lý song song |
| optionsVi.B | ≥2 bộ xử lý có bộ nhớ riêng, xử lý song song |
| optionsVi.C | Một máy tính đảm nhiệm toàn bộ xử lý |
| optionsVi.D | Nhiều máy trên mạng chia sẻ xử lý |
| answerDisplay | A. ≥2 bộ xử lý chia sẻ bộ nhớ, xử lý song song |

**concept**
```
• ≥2 bộ xử lý chia sẻ bộ nhớ, xử lý song song
• Nghĩa: ≥2 bộ xử lý chia sẻ bộ nhớ, xử lý song song.
```

**whyCorrect**
```
• ≥2 bộ xử lý chia sẻ bộ nhớ, xử lý song song
• Đáp án A: ≥2 bộ xử lý chia sẻ bộ nhớ, xử lý song song
```

**whyWrong**

##### B
```
• Là gì? 2つ以上の処理装置が独立したメモリを持って並列処理を行う (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «2つ以上の処理装置が独立したメモリを持って並列処理を行う» (B) không thỏa: khớp đáp án «2つ以上の処理装置がメモリを共有して並列処理を行う».
```

##### C
```
• Là gì? 1台のコンピュータが全処理を担当する (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «1台のコンピュータが全処理を担当する» (C) không thỏa: khớp đáp án «2つ以上の処理装置がメモリを共有して並列処理を行う».
```

##### D
```
• Là gì? ネットワーク上の複数のコンピュータで処理を分担する (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «ネットワーク上の複数のコンピュータで処理を分担する» (D) không thỏa: khớp đáp án «2つ以上の処理装置がメモリを共有して並列処理を行う».
```

**whatIs**
```
{
  "A": "2つ以上の処理装置がメモリを共有して並列処理を行う (thuật ngữ JP).",
  "B": "2つ以上の処理装置が独立したメモリを持って並列処理を行う (thuật ngữ JP).",
  "C": "1台のコンピュータが全処理を担当する (thuật ngữ JP).",
  "D": "ネットワーク上の複数のコンピュータで処理を分担する (thuật ngữ JP)."
}
```

**intent**
```
• Câu JIT: nắm định nghĩa/thứ tự/thuật ngữ CNTT.
• ≥2 bộ xử lý chia sẻ bộ nhớ, xử lý song song
```

**memoryTip**
```
(trống)
```

---

### 177/400 · `jit` id=119 · task=`quiz` · num=119 · ans **B**

- **flags:** khop_dap_an
- **status:** `todo`

**Đề gốc**

```
疎結合マルチプロセッサとはどのような方式か。
```

**Options**

- **A.** 2つ以上の処理装置がメモリを共有して並列処理を行う
- **B.** 2つ以上の処理装置が独立したメモリを持って並列処理を行う ✅
- **C.** 1台のコンピュータが全処理を担当する
- **D.** クラウドで処理を分散する

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | đa xử lý liên kết lỏng là phương thức như thế nào? |
| optionsVi.A | ≥2 bộ xử lý chia sẻ bộ nhớ, xử lý song song |
| optionsVi.B | ≥2 bộ xử lý có bộ nhớ riêng, xử lý song song |
| optionsVi.C | Một máy tính đảm nhiệm toàn bộ xử lý |
| optionsVi.D | phân tán xử lý trên cloud |
| answerDisplay | B. ≥2 bộ xử lý có bộ nhớ riêng, xử lý song song |

**concept**
```
• ≥2 bộ xử lý có bộ nhớ riêng, xử lý song song
• Nghĩa: ≥2 bộ xử lý có bộ nhớ riêng, xử lý song song.
```

**whyCorrect**
```
• ≥2 bộ xử lý có bộ nhớ riêng, xử lý song song
• Đáp án B: ≥2 bộ xử lý có bộ nhớ riêng, xử lý song song
```

**whyWrong**

##### A
```
• Là gì? 2つ以上の処理装置がメモリを共有して並列処理を行う (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «2つ以上の処理装置がメモリを共有して並列処理を行う» (A) không thỏa: khớp đáp án «2つ以上の処理装置が独立したメモリを持って並列処理を行う».
```

##### C
```
• Là gì? 1台のコンピュータが全処理を担当する (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «1台のコンピュータが全処理を担当する» (C) không thỏa: khớp đáp án «2つ以上の処理装置が独立したメモリを持って並列処理を行う».
```

##### D
```
• Là gì? クラウドで処理を分散する (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «クラウドで処理を分散する» (D) không thỏa: khớp đáp án «2つ以上の処理装置が独立したメモリを持って並列処理を行う».
```

**whatIs**
```
{
  "A": "2つ以上の処理装置がメモリを共有して並列処理を行う (thuật ngữ JP).",
  "B": "2つ以上の処理装置が独立したメモリを持って並列処理を行う (thuật ngữ JP).",
  "C": "1台のコンピュータが全処理を担当する (thuật ngữ JP).",
  "D": "クラウドで処理を分散する (thuật ngữ JP)."
}
```

**intent**
```
• Câu JIT: nắm định nghĩa/thứ tự/thuật ngữ CNTT.
• ≥2 bộ xử lý có bộ nhớ riêng, xử lý song song
```

**memoryTip**
```
(trống)
```

---

### 178/400 · `jit` id=121 · task=`quiz` · num=121 · ans **C**

- **flags:** khop_dap_an
- **status:** `todo`

**Đề gốc**

```
インターネットでIPアドレスを使って何を特定するか。
```

**Options**

- **A.** ファイルの種類
- **B.** 通信速度
- **C.** コンピュータの場所（住所にあたる番号） ✅
- **D.** パスワードの強度

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Trên Internet, địa chỉ IP dùng để xác định cái gì? |
| optionsVi.A | ファイルの種類 — khái niệm kỹ thuật |
| optionsVi.B | tốc độ truyền |
| optionsVi.C | máy tính |
| optionsVi.D | パスワードの強度 — khái niệm kỹ thuật |
| answerDisplay | C. máy tính |

**concept**
```
• máy tính
• Nghĩa: máy tính.
```

**whyCorrect**
```
• Khái niệm CNTT trong đề thi JIT.
• Khớp stem: khớp đáp án «コンピュータの場所（住所にあたる番号）».
```

**whyWrong**

##### A
```
• Là gì? ファイルの種類 (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «ファイルの種類» (A) không thỏa: khớp đáp án «コンピュータの場所（住所にあたる番号）».
```

##### B
```
• Là gì? 通信速度 (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «通信速度» (B) không thỏa: khớp đáp án «コンピュータの場所（住所にあたる番号）».
```

##### D
```
• Là gì? パスワードの強度 (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «パスワードの強度» (D) không thỏa: khớp đáp án «コンピュータの場所（住所にあたる番号）».
```

**whatIs**
```
{
  "A": "ファイルの種類 (thuật ngữ JP).",
  "B": "通信速度 (thuật ngữ JP).",
  "C": "コンピュータの場所（住所にあたる番号） (thuật ngữ JP).",
  "D": "パスワードの強度 (thuật ngữ JP)."
}
```

**intent**
```
• Câu JIT: nắm định nghĩa/thứ tự/thuật ngữ CNTT.
• máy tính
```

**memoryTip**
```
(trống)
```

---

### 179/400 · `jit` id=122 · task=`quiz` · num=122 · ans **B**

- **flags:** khop_dap_an
- **status:** `todo`

**Đề gốc**

```
スカベンジングとはどのような犯罪か。
```

**Options**

- **A.** コンピュータに不正アクセスする犯罪
- **B.** 残された個人情報を収集する犯罪 ✅
- **C.** ウィルスを拡散する犯罪
- **D.** パスワードを盗む犯罪

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Scavenging là loại tội phạm / hành vi nào? |
| optionsVi.A | Tội truy cập trái phép vào máy tính |
| optionsVi.B | Tội thu thập thông tin cá nhân còn sót (scavenging) |
| optionsVi.C | Tội phát tán virus |
| optionsVi.D | Tội đánh cắp mật khẩu |
| answerDisplay | B. Tội thu thập thông tin cá nhân còn sót (scavenging) |

**concept**
```
• Tội thu thập thông tin cá nhân còn sót (scavenging)
• Nghĩa: Tội thu thập thông tin cá nhân còn sót (scavenging).
```

**whyCorrect**
```
• Tội thu thập thông tin cá nhân còn sót (scavenging)
• Đáp án B: Tội thu thập thông tin cá nhân còn sót (scavenging)
```

**whyWrong**

##### A
```
• Là gì? コンピュータに不正アクセスする犯罪 (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «コンピュータに不正アクセスする犯罪» (A) không thỏa: khớp đáp án «残された個人情報を収集する犯罪».
```

##### C
```
• Là gì? ウィルスを拡散する犯罪 (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «ウィルスを拡散する犯罪» (C) không thỏa: khớp đáp án «残された個人情報を収集する犯罪».
```

##### D
```
• Là gì? パスワードを盗む犯罪 (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «パスワードを盗む犯罪» (D) không thỏa: khớp đáp án «残された個人情報を収集する犯罪».
```

**whatIs**
```
{
  "A": "コンピュータに不正アクセスする犯罪 (thuật ngữ JP).",
  "B": "残された個人情報を収集する犯罪 (thuật ngữ JP).",
  "C": "ウィルスを拡散する犯罪 (thuật ngữ JP).",
  "D": "パスワードを盗む犯罪 (thuật ngữ JP)."
}
```

**intent**
```
• Câu JIT: nắm định nghĩa/thứ tự/thuật ngữ CNTT.
• Tội thu thập thông tin cá nhân còn sót (scavenging)
```

**memoryTip**
```
(trống)
```

---

### 180/400 · `jit` id=124 · task=`quiz` · num=124 · ans **D**

- **flags:** khop_dap_an
- **status:** `todo`

**Đề gốc**

```
低級言語について正しくないものをえらんでください。
```

**Options**

- **A.** CPUの種類に依存した機械語である
- **B.** 汎用性や読みやすさに問題がある
- **C.** メモリに蓄えられているプログラム
- **D.** JavaやC++が低級言語の代表例である ✅

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Về ngôn ngữ cấp thấp, hãy chọn câu SAI. |
| optionsVi.A | là ngôn ngữ máy phụ thuộc loại CPU |
| optionsVi.B | có vấn đề đa dụng/dễ đọc |
| optionsVi.C | Chương trình được lưu trong bộ nhớ |
| optionsVi.D | Java/C++ là ngôn ngữ bậc thấp điển hình (sai — chúng là bậc cao) |
| answerDisplay | D. Java/C++ là ngôn ngữ bậc thấp điển hình (sai — chúng là bậc cao) |

**concept**
```
• Java/C++ là ngôn ngữ bậc thấp điển hình (sai — chúng là bậc cao)
• Nghĩa: Java/C++ là ngôn ngữ bậc thấp điển hình (sai — chúng là bậc cao).
```

**whyCorrect**
```
• Low-level (máy, assembly) gần phần cứng, hiệu năng tốt, nhưng khó đọc và kém portable. Câu «dễ đọc + portable nhất» là đặc điểm high-level → A sai → chọn A.
• Java/C++ là ngôn ngữ bậc thấp điển hình (sai — chúng là bậc cao)
• Đáp án D: Java/C++ là ngôn ngữ bậc thấp điển hình (sai — chúng là bậc cao)
```

**whyWrong**

##### A
```
• Là gì? CPUの種類に依存した機械語である (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «CPUの種類に依存した機械語である» (A) không thỏa: khớp đáp án «JavaやC++が低級言語の代表例である».
```

##### B
```
• Là gì? 汎用性や読みやすさに問題がある (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «汎用性や読みやすさに問題がある» (B) không thỏa: khớp đáp án «JavaやC++が低級言語の代表例である».
```

##### C
```
• Là gì? メモリに蓄えられているプログラム (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «メモリに蓄えられているプログラム» (C) không thỏa: khớp đáp án «JavaやC++が低級言語の代表例である».
```

**whatIs**
```
{
  "A": "CPUの種類に依存した機械語である (thuật ngữ JP).",
  "B": "汎用性や読みやすさに問題がある (thuật ngữ JP).",
  "C": "メモリに蓄えられているプログラム (thuật ngữ JP).",
  "D": "JavaやC++が低級言語の代表例である (thuật ngữ JP)."
}
```

**intent**
```
• Đọc kỹ đề (đã dịch) và chọn đúng bản chất kỹ thuật.
• Java/C++ là ngôn ngữ bậc thấp điển hình (sai — chúng là bậc cao)
```

**memoryTip**
```
(trống)
```

---

### 181/400 · `jit` id=125 · task=`quiz` · num=125 · ans **B**

- **flags:** khop_dap_an
- **status:** `todo`

**Đề gốc**

```
長さ、重さ、時間など身の回りの多くの物理量は何か。
```

**Options**

- **A.** デジタル量
- **B.** アナログ量 ✅
- **C.** バイナリ量
- **D.** 数値量

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Chiều dài, khối lượng, thời gian… nhiều đại lượng vật lý quanh ta là gì? |
| optionsVi.A | đại lượng số (digital) |
| optionsVi.B | đại lượng tương tự (analog) |
| optionsVi.C | nhị phân |
| optionsVi.D | đại lượng số |
| answerDisplay | B. đại lượng tương tự (analog) |

**concept**
```
• đại lượng tương tự (analog)
• Thuật ngữ: đại lượng tương tự (analog).
```

**whyCorrect**
```
• đại lượng tương tự (analog)
• Đáp án B: đại lượng tương tự (analog)
```

**whyWrong**

##### A
```
• Là gì? Tín hiệu/dữ liệu số (rời rạc, 0/1).
• Dùng để làm gì? Digital representation.
• Vì sao sai? «デジタル量» (A) không thỏa: khớp đáp án «アナログ量».
```

##### C
```
• Là gì? Mã/dữ liệu nhị phân.
• Dùng để làm gì? Biểu diễn 0/1.
• Vì sao sai? «バイナリ量» (C) không thỏa: khớp đáp án «アナログ量».
```

##### D
```
• Là gì? 数値量 (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «数値量» (D) không thỏa: khớp đáp án «アナログ量».
```

**whatIs**
```
{
  "A": "Tín hiệu/dữ liệu số (rời rạc, 0/1).",
  "B": "Tín hiệu tương tự liên tục (dòng/áp…).",
  "C": "Mã/dữ liệu nhị phân.",
  "D": "数値量 (thuật ngữ JP)."
}
```

**intent**
```
• Câu JIT: nắm định nghĩa/thứ tự/thuật ngữ CNTT.
• đại lượng tương tự (analog)
```

**memoryTip**
```
(trống)
```

---

### 182/400 · `jit` id=127 · task=`quiz` · num=127 · ans **C**

- **flags:** khop_dap_an
- **status:** `todo`

**Đề gốc**

```
転置式暗号の特徴はどれか。
```

**Options**

- **A.** 文字を別の文字に置き換える
- **B.** 通信者同士が共通に持つ乱数表を使う
- **C.** 文字の並び順を入れ替えることで暗号化する ✅
- **D.** 公開鍵を使って暗号化する

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Chọn phương án đúng (xem câu gốc). |
| optionsVi.A | thay chữ bằng chữ khác |
| optionsVi.B | dùng bảng số ngẫu nhiên chung |
| optionsVi.C | Mã hóa bằng cách đổi thứ tự chữ (hoán vị) |
| optionsVi.D | mã hóa bằng khóa công khai |
| answerDisplay | C. Mã hóa bằng cách đổi thứ tự chữ (hoán vị) |

**concept**
```
• Mã hóa bằng cách đổi thứ tự chữ (hoán vị)
• Nghĩa: Mã hóa bằng cách đổi thứ tự chữ (hoán vị).
```

**whyCorrect**
```
• Mã hóa bằng cách đổi thứ tự chữ (hoán vị)
• Đáp án C: Mã hóa bằng cách đổi thứ tự chữ (hoán vị)
```

**whyWrong**

##### A
```
• Là gì? 文字を別の文字に置き換える (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «文字を別の文字に置き換える» (A) không thỏa: khớp đáp án «文字の並び順を入れ替えることで暗号化する».
```

##### B
```
• Là gì? 通信者同士が共通に持つ乱数表を使う (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «通信者同士が共通に持つ乱数表を使う» (B) không thỏa: khớp đáp án «文字の並び順を入れ替えることで暗号化する».
```

##### D
```
• Là gì? 公開鍵を使って暗号化する (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «公開鍵を使って暗号化する» (D) không thỏa: khớp đáp án «文字の並び順を入れ替えることで暗号化する».
```

**whatIs**
```
{
  "A": "文字を別の文字に置き換える (thuật ngữ JP).",
  "B": "通信者同士が共通に持つ乱数表を使う (thuật ngữ JP).",
  "C": "文字の並び順を入れ替えることで暗号化する (thuật ngữ JP).",
  "D": "公開鍵を使って暗号化する (thuật ngữ JP)."
}
```

**intent**
```
• Câu JIT: nắm định nghĩa/thứ tự/thuật ngữ CNTT.
• Mã hóa bằng cách đổi thứ tự chữ (hoán vị)
```

**memoryTip**
```
(trống)
```

---

### 183/400 · `jit` id=129 · task=`quiz` · num=129 · ans **A**

- **flags:** khop_dap_an
- **status:** `todo`

**Đề gốc**

```
CPUの動作原理は何に基づいているか。
```

**Options**

- **A.** チューリングマシン ✅
- **B.** ダイオード
- **C.** オートマトン
- **D.** トランジスタ

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Nguyên lý hoạt động của CPU dựa trên cái gì? |
| optionsVi.A | máy Turing |
| optionsVi.B | ダイオード — khái niệm kỹ thuật |
| optionsVi.C | automaton (ô tô-mát) |
| optionsVi.D | トランジスタ — khái niệm kỹ thuật |
| answerDisplay | A. máy Turing |

**concept**
```
• máy Turing
• Thuật ngữ: máy Turing.
```

**whyCorrect**
```
• máy Turing — CPU máy Turing（ ） （§11.3）。
• máy Turing
• Đáp án A: máy Turing
```

**whyWrong**

##### B
```
• Là gì? ダイオード (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «ダイオード» (B) không thỏa: khớp đáp án «チューリングマシン».
```

##### C
```
• Là gì? オートマトン (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «オートマトン» (C) không thỏa: khớp đáp án «チューリングマシン».
```

##### D
```
• Là gì? トランジスタ (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «トランジスタ» (D) không thỏa: khớp đáp án «チューリングマシン».
```

**whatIs**
```
{
  "A": "チューリングマシン (thuật ngữ JP).",
  "B": "ダイオード (thuật ngữ JP).",
  "C": "オートマトン (thuật ngữ JP).",
  "D": "トランジスタ (thuật ngữ JP)."
}
```

**intent**
```
• Câu JIT: nắm định nghĩa/thứ tự/thuật ngữ CNTT.
• máy Turing
```

**memoryTip**
```
(trống)
```

---

### 184/400 · `jit` id=130 · task=`quiz` · num=130 · ans **B**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
コンピュータのデータは（ ）の並びで表現された数字である。
```

**Options**

- **A.** 0〜9
- **B.** 0と1 ✅
- **C.** A〜F
- **D.** 0〜7

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Điền từ thích hợp vào chỗ trống (xem câu gốc). |
| optionsVi.A | 0〜9 |
| optionsVi.B | 0 và 1 |
| optionsVi.C | A〜F |
| optionsVi.D | 0〜7 |
| answerDisplay | B. 0 và 1 |

**concept**
```
• 0 và 1
• Thuật ngữ: 0 và 1.
```

**whyCorrect**
```
• Digital representation.
• Khớp stem: khớp đáp án «0と1».
```

**whyWrong**

##### A
```
• Là gì? 0〜9 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «0〜9» (A) không thỏa: khớp đáp án «0と1».
```

##### C
```
• Là gì? A〜F — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «A〜F» (C) không thỏa: khớp đáp án «0と1».
```

##### D
```
• Là gì? 0〜7 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «0〜7» (D) không thỏa: khớp đáp án «0と1».
```

**whatIs**
```
{
  "A": "0〜9 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Tín hiệu/dữ liệu số (rời rạc, 0/1).",
  "C": "A〜F — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "0〜7 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Câu JIT: nắm định nghĩa/thứ tự/thuật ngữ CNTT.
• 0 và 1
```

**memoryTip**
```
(trống)
```

---

### 185/400 · `jit` id=132 · task=`sample` · num=1 · ans **B**

- **flags:** khop_dap_an
- **status:** `todo`

**Đề gốc**

```
スカベンジングといって、残された個人情報を（ ）する犯罪もあります。
```

**Options**

- **A.** 管理（かんり）：Quản lý
- **B.** 収集（しゅうしゅう）：Thu thập ✅
- **C.** 削除（さくじょ）：Xóa bỏ
- **D.** 整理（せいり）：Sắp xếp

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Điền từ thích hợp vào chỗ trống (xem câu gốc). |
| optionsVi.A | Quản lý |
| optionsVi.B | 収集（しゅうしゅう）：Thu thập — khái niệm kỹ thuật |
| optionsVi.C | Xóa bỏ |
| optionsVi.D | 整理（せいり）：Sắp xếp — khái niệm kỹ thuật |
| answerDisplay | B. 収集（しゅうしゅう）：Thu thập — khái niệm kỹ thuật |

**concept**
```
• Thu thập
• Nghĩa: Thu thập.
```

**whyCorrect**
```
• Thu thập — 「thu thập」 tội phạm / hành vi phạm tội （§7.5）。
• Thu thập
• Đáp án B: Thu thập
```

**whyWrong**

##### A
```
• Là gì? 管理（かんり）：Quản lý
• Dùng để làm gì? Thuật ngữ/phát biểu trong miền CNTT tiếng Nhật.
• Vì sao sai? «管理（かんり）：Quản lý» (A) không thỏa: khớp đáp án «収集（しゅうしゅう）：Thu thập».
```

##### C
```
• Là gì? 削除（さくじょ）：Xóa bỏ
• Dùng để làm gì? Thuật ngữ/phát biểu trong miền CNTT tiếng Nhật.
• Vì sao sai? «削除（さくじょ）：Xóa bỏ» (C) không thỏa: khớp đáp án «収集（しゅうしゅう）：Thu thập».
```

##### D
```
• Là gì? 整理（せいり）：Sắp xếp (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «整理（せいり）：Sắp xếp» (D) không thỏa: khớp đáp án «収集（しゅうしゅう）：Thu thập».
```

**whatIs**
```
{
  "A": "管理（かんり）：Quản lý",
  "B": "収集（しゅうしゅう）：Thu thập (thuật ngữ JP).",
  "C": "削除（さくじょ）：Xóa bỏ",
  "D": "整理（せいり）：Sắp xếp (thuật ngữ JP)."
}
```

**intent**
```
• Câu JIT: nắm định nghĩa/thứ tự/thuật ngữ CNTT.
• Thu thập
```

**memoryTip**
```
(trống)
```

---

### 186/400 · `jit` id=133 · task=`sample` · num=2 · ans **A**

- **flags:** khop_dap_an
- **status:** `todo`

**Đề gốc**

```
【専門知識】（ ）は、データのアクセス速度が最も高速です。
```

**Options**

- **A.** キャッシュ (Cache：Bộ nhớ đệm) ✅
- **B.** メモリ (Bộ nhớ RAM)
- **C.** ハードディスク (Ổ đĩa cứng)
- **D.** ラム (RAM)

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | 【Chuyên môn】Chọn đáp án đúng theo kiến thức trong đề. |
| optionsVi.A | Bộ nhớ đệm) |
| optionsVi.B | メモリ (Bộ nhớ RAM) — khái niệm kỹ thuật |
| optionsVi.C | Hard disk — ổ đĩa cứng |
| optionsVi.D | ラム (RAM) — khái niệm kỹ thuật |
| answerDisplay | A. Bộ nhớ đệm) |

**concept**
```
• Cache — bộ nhớ đệm
• Nghĩa: Cache — bộ nhớ đệm.
```

**whyCorrect**
```
• Cache — bộ nhớ đệm
• Đáp án A: Cache — bộ nhớ đệm
```

**whyWrong**

##### B
```
• Là gì? メモリ (Bộ nhớ RAM) (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «メモリ (Bộ nhớ RAM)» (B) không thỏa: khớp đáp án «キャッシュ (Cache：Bộ nhớ đệm)».
```

##### C
```
• Là gì? ハードディスク (Ổ đĩa cứng)
• Dùng để làm gì? Thuật ngữ/phát biểu trong miền CNTT tiếng Nhật.
• Vì sao sai? «ハードディスク (Ổ đĩa cứng)» (C) không thỏa: khớp đáp án «キャッシュ (Cache：Bộ nhớ đệm)».
```

##### D
```
• Là gì? ラム (RAM) (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «ラム (RAM)» (D) không thỏa: khớp đáp án «キャッシュ (Cache：Bộ nhớ đệm)».
```

**whatIs**
```
{
  "A": "キャッシュ (Cache：Bộ nhớ đệm)",
  "B": "メモリ (Bộ nhớ RAM) (thuật ngữ JP).",
  "C": "ハードディスク (Ổ đĩa cứng)",
  "D": "ラム (RAM) (thuật ngữ JP)."
}
```

**intent**
```
• Câu JIT: nắm định nghĩa/thứ tự/thuật ngữ CNTT.
• Cache — bộ nhớ đệm
```

**memoryTip**
```
(trống)
```

---

### 187/400 · `jit` id=134 · task=`sample` · num=3 · ans **A**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
アルファベット1文字の情報量はどうなりますか。
```

**Options**

- **A.** 8 bit = 1 byte ✅
- **B.** 16 bit = 2 byte
- **C.** 8 bit = 2 byte
- **D.** 16 bit = 1 byte

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Lượng thông tin của 1 chữ cái alphabet là bao nhiêu? |
| optionsVi.A | 8 bit = 1 byte |
| optionsVi.B | 16 bit = 2 byte |
| optionsVi.C | 8 bit = 2 byte |
| optionsVi.D | 16 bit = 1 byte |
| answerDisplay | A. 8 bit = 1 byte |

**concept**
```
• 8 bit = 1 byte
• Nghĩa: 8 bit = 1 byte.
```

**whyCorrect**
```
• Công thức lượng tin (khi các ký hiệu đều khả năng): log₂(số ký hiệu). Alphabet 26 chữ → log₂26 ≈ 4.7 bit/chữ. Không phải lúc nào cũng 8 bit (1 byte).
• 8 bit = 1 byte
• Đáp án A: 8 bit = 1 byte
```

**whyWrong**

##### B
```
• Là gì? 16 bit = 2 byte — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «16 bit = 2 byte» (B) không thỏa: khớp đáp án «8 bit = 1 byte».
```

##### C
```
• Là gì? 8 bit = 2 byte — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «8 bit = 2 byte» (C) không thỏa: khớp đáp án «8 bit = 1 byte».
```

##### D
```
• Là gì? 16 bit = 1 byte — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «16 bit = 1 byte» (D) không thỏa: khớp đáp án «8 bit = 1 byte».
```

**whatIs**
```
{
  "A": "8 bit = 1 byte — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "16 bit = 2 byte — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "8 bit = 2 byte — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "16 bit = 1 byte — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Đọc kỹ đề (đã dịch) và chọn đúng bản chất kỹ thuật.
• 8 bit = 1 byte
```

**memoryTip**
```
(trống)
```

---

### 188/400 · `jit` id=136 · task=`sample` · num=5 · ans **D**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
使われる論理素子によって何世代に分けられるか。
```

**Options**

- **A.** 3
- **B.** 5
- **C.** 2
- **D.** 4 ✅

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Máy tính được chia thành mấy thế hệ theo linh kiện logic dùng trong máy? |
| optionsVi.A | 3 |
| optionsVi.B | 5 |
| optionsVi.C | 2 |
| optionsVi.D | 4 |
| answerDisplay | D. 4 |

**concept**
```
• 4 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
```

**whyCorrect**
```
• Phân loại kinh điển theo phần tử logic: 1) đèn điện tử, 2) transistor, 3) IC, 4) LSI/VLSI; đôi khi kể thêm 5 (AI, song song…). Số phổ biến trong giáo trình FE là 4 (~5).
• 4
• Đáp án D: 4
```

**whyWrong**

##### A
```
• Là gì? 3 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «3» (A) không thỏa: khớp đáp án «4».
```

##### B
```
• Là gì? 5 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «5» (B) không thỏa: khớp đáp án «4».
```

##### C
```
• Là gì? 2 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «2» (C) không thỏa: khớp đáp án «4».
```

**whatIs**
```
{
  "A": "3 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "5 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "2 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "4 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Đọc kỹ đề (đã dịch) và chọn đúng bản chất kỹ thuật.
• 4
```

**memoryTip**
```
(trống)
```

---

### 189/400 · `jit` id=137 · task=`sample` · num=6 · ans **D**

- **flags:** khop_dap_an
- **status:** `todo`

**Đề gốc**

```
【専門知識】データベースの表現法「データを親、子、孫のような階層構造に並べ、最上位の親からたどることによって検索する表現法です」とはどれですか。
```

**Options**

- **A.** 関係的表現
- **B.** 網的表現
- **C.** 親子的表現
- **D.** 階層的表現 ✅

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | 【Chuyên môn】Chọn đáp án đúng theo kiến thức trong đề. |
| optionsVi.A | 関係的表現 — khái niệm kỹ thuật |
| optionsVi.B | biểu diễn mạng (network model) |
| optionsVi.C | 親子的表現 — khái niệm kỹ thuật |
| optionsVi.D | biểu diễn phân cấp (hierarchical) |
| answerDisplay | D. biểu diễn phân cấp (hierarchical) |

**concept**
```
• biểu diễn phân cấp (hierarchical)
• Thuật ngữ: biểu diễn phân cấp (hierarchical).
```

**whyCorrect**
```
• biểu diễn phân cấp (hierarchical)
• Đáp án D: biểu diễn phân cấp (hierarchical)
```

**whyWrong**

##### A
```
• Là gì? 関係的表現 (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «関係的表現» (A) không thỏa: khớp đáp án «階層的表現».
```

##### B
```
• Là gì? 網的表現 (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «網的表現» (B) không thỏa: khớp đáp án «階層的表現».
```

##### C
```
• Là gì? 親子的表現 (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «親子的表現» (C) không thỏa: khớp đáp án «階層的表現».
```

**whatIs**
```
{
  "A": "関係的表現 (thuật ngữ JP).",
  "B": "網的表現 (thuật ngữ JP).",
  "C": "親子的表現 (thuật ngữ JP).",
  "D": "階層的表現 (thuật ngữ JP)."
}
```

**intent**
```
• Câu JIT: nắm định nghĩa/thứ tự/thuật ngữ CNTT.
• biểu diễn phân cấp (hierarchical)
```

**memoryTip**
```
(trống)
```

---

### 190/400 · `jit` id=138 · task=`sample` · num=7 · ans **A**

- **flags:** khop_dap_an
- **status:** `todo`

**Đề gốc**

```
大量のデータを扱うために、何が重要ですか。
```

**Options**

- **A.** 検索時の速度 ✅
- **B.** 検索時間
- **C.** データ操作の時間
- **D.** データ量

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Để xử lý lượng dữ liệu lớn, điều gì quan trọng? |
| optionsVi.A | tốc độ khi tìm kiếm |
| optionsVi.B | thời gian tìm kiếm |
| optionsVi.C | thời gian thao tác dữ liệu |
| optionsVi.D | lượng dữ liệu |
| answerDisplay | A. tốc độ khi tìm kiếm |

**concept**
```
• tốc độ khi tìm kiếm
• Thuật ngữ: tốc độ khi tìm kiếm.
```

**whyCorrect**
```
• Dữ liệu lớn cần tổ chức, truy vấn, bảo vệ, đồng thời… → hệ quản trị CSDL (database management), không thể chỉ ghi tay hay sổ giấy.
• tốc độ khi tìm kiếm
• Đáp án A: tốc độ khi tìm kiếm
```

**whyWrong**

##### B
```
• Là gì? 検索時間 (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «検索時間» (B) không thỏa: khớp đáp án «検索時の速度».
```

##### C
```
• Là gì? データ操作の時間 (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «データ操作の時間» (C) không thỏa: khớp đáp án «検索時の速度».
```

##### D
```
• Là gì? データ量 (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «データ量» (D) không thỏa: khớp đáp án «検索時の速度».
```

**whatIs**
```
{
  "A": "検索時の速度 (thuật ngữ JP).",
  "B": "検索時間 (thuật ngữ JP).",
  "C": "データ操作の時間 (thuật ngữ JP).",
  "D": "データ量 (thuật ngữ JP)."
}
```

**intent**
```
• Đọc kỹ đề (đã dịch) và chọn đúng bản chất kỹ thuật.
• tốc độ khi tìm kiếm
```

**memoryTip**
```
(trống)
```

---

### 191/400 · `jit` id=139 · task=`sample` · num=8 · ans **A**

- **flags:** khop_dap_an
- **status:** `todo`

**Đề gốc**

```
【専門知識】「.com」のように種別だけで国名がないのはどの国のドメイン名ですか。
```

**Options**

- **A.** アメリカ ✅
- **B.** 日本
- **C.** オーストラリア
- **D.** ベトナム

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | 【Chuyên môn】Chọn đáp án đúng theo kiến thức trong đề. |
| optionsVi.A | アメリカ — khái niệm kỹ thuật |
| optionsVi.B | Nhật Bản |
| optionsVi.C | Úc |
| optionsVi.D | ベトナム — khái niệm kỹ thuật |
| answerDisplay | A. アメリカ — khái niệm kỹ thuật |

**concept**
```
• Mỹ
• Thuật ngữ: Mỹ.
```

**whyCorrect**
```
• Khái niệm CNTT trong đề thi JIT.
• Khớp stem: khớp đáp án «アメリカ».
```

**whyWrong**

##### B
```
• Là gì? 日本 (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «日本» (B) không thỏa: khớp đáp án «アメリカ».
```

##### C
```
• Là gì? オーストラリア (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «オーストラリア» (C) không thỏa: khớp đáp án «アメリカ».
```

##### D
```
• Là gì? ベトナム (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «ベトナム» (D) không thỏa: khớp đáp án «アメリカ».
```

**whatIs**
```
{
  "A": "アメリカ (thuật ngữ JP).",
  "B": "日本 (thuật ngữ JP).",
  "C": "オーストラリア (thuật ngữ JP).",
  "D": "ベトナム (thuật ngữ JP)."
}
```

**intent**
```
• Câu JIT: nắm định nghĩa/thứ tự/thuật ngữ CNTT.
• Mỹ
```

**memoryTip**
```
(trống)
```

---

### 192/400 · `jit` id=140 · task=`sample` · num=9 · ans **A**

- **flags:** khop_dap_an
- **status:** `todo`

**Đề gốc**

```
【専門知識】HTMLとは;Hyper Text Markup Languageの略で、文字の（ ）、音、ファイルへのリンクなどが記述できます。
```

**Options**

- **A.** 種類・配置・画像・動画 ✅
- **B.** 種類・機器・画像・動画
- **C.** 種類・配置・転送・動画
- **D.** 種類・配置・画像・装置

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | 【Chuyên môn】Chọn đáp án đúng theo kiến thức trong đề. |
| optionsVi.A | loại · bố cục · ảnh · video |
| optionsVi.B | loại · thiết bị · ảnh · video |
| optionsVi.C | loại · bố cục · truyền · video |
| optionsVi.D | loại · bố cục · ảnh · thiết bị |
| answerDisplay | A. loại · bố cục · ảnh · video |

**concept**
```
• loại · bố cục · ảnh · video
• Thuật ngữ: loại · bố cục · ảnh · video.
```

**whyCorrect**
```
• loại · bố cục · ảnh · video
• Đáp án A: loại · bố cục · ảnh · video
```

**whyWrong**

##### B
```
• Là gì? 種類・機器・画像・動画 (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «種類・機器・画像・動画» (B) không thỏa: khớp đáp án «種類・配置・画像・動画».
```

##### C
```
• Là gì? 種類・配置・転送・動画 (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «種類・配置・転送・動画» (C) không thỏa: khớp đáp án «種類・配置・画像・動画».
```

##### D
```
• Là gì? 種類・配置・画像・装置 (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «種類・配置・画像・装置» (D) không thỏa: khớp đáp án «種類・配置・画像・動画».
```

**whatIs**
```
{
  "A": "種類・配置・画像・動画 (thuật ngữ JP).",
  "B": "種類・機器・画像・動画 (thuật ngữ JP).",
  "C": "種類・配置・転送・動画 (thuật ngữ JP).",
  "D": "種類・配置・画像・装置 (thuật ngữ JP)."
}
```

**intent**
```
• Câu JIT: nắm định nghĩa/thứ tự/thuật ngữ CNTT.
• loại · bố cục · ảnh · video
```

**memoryTip**
```
(trống)
```

---

### 193/400 · `jit` id=141 · task=`sample` · num=10 · ans **A**

- **flags:** khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Web2.0とは何ですか。
```

**Options**

- **A.** 双方向型のホームページ ✅
- **B.** 一方向的なアドレス
- **C.** 双方向型のアドレス
- **D.** 一方向的なホームページ

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | «Web2.0» là gì? |
| optionsVi.A | 双方向型のホームページ — khái niệm kỹ thuật |
| optionsVi.B | địa chỉ một chiều |
| optionsVi.C | địa chỉ hai chiều |
| optionsVi.D | 一方向的なホームページ — khái niệm kỹ thuật |
| answerDisplay | A. 双方向型のホームページ — khái niệm kỹ thuật |

**concept**
```
• trang web hai chiều
• Thuật ngữ: trang web hai chiều.
```

**whyCorrect**
```
• kiểu hai chiều — Web 2.0 trang web hai chiều（ ） （§2.2）。
• trang web hai chiều
• Đáp án A: trang web hai chiều
```

**whyWrong**

##### B
```
• Là gì? 一方向的なアドレス (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «一方向的なアドレス» (B) không thỏa: khớp đáp án «双方向型のホームページ».
```

##### C
```
• Là gì? 双方向型のアドレス (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «双方向型のアドレス» (C) không thỏa: khớp đáp án «双方向型のホームページ».
```

##### D
```
• Là gì? 一方向的なホームページ (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «一方向的なホームページ» (D) không thỏa: khớp đáp án «双方向型のホームページ».
```

**whatIs**
```
{
  "A": "双方向型のホームページ (thuật ngữ JP).",
  "B": "一方向的なアドレス (thuật ngữ JP).",
  "C": "双方向型のアドレス (thuật ngữ JP).",
  "D": "一方向的なホームページ (thuật ngữ JP)."
}
```

**intent**
```
• Câu JIT: nắm định nghĩa/thứ tự/thuật ngữ CNTT.
• trang web hai chiều
```

**memoryTip**
```
(trống)
```

---

### 194/400 · `jit` id=142 · task=`sample` · num=11 · ans **C**

- **flags:** khop_dap_an
- **status:** `todo`

**Đề gốc**

```
【専門知識】「マウスやキーボードの操作の仕方、ウィンドウの見え方、ファイルの扱い方などを決定します」はOS機能の何の内容を指しますか。
```

**Options**

- **A.** ソフトとハードの仲介
- **B.** ユーザ管理
- **C.** ユーザインタフェース ✅
- **D.** プロセス管理

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | 【Chuyên môn】Chọn đáp án đúng theo kiến thức trong đề. |
| optionsVi.A | trung gian phần mềm và phần cứng |
| optionsVi.B | quản lý người dùng |
| optionsVi.C | giao diện người dùng (UI) |
| optionsVi.D | quản lý process |
| answerDisplay | C. giao diện người dùng (UI) |

**concept**
```
• giao diện người dùng (UI)
• Thuật ngữ: giao diện người dùng (UI).
```

**whyCorrect**
```
• giao diện người dùng (UI)
• Đáp án C: giao diện người dùng (UI)
```

**whyWrong**

##### A
```
• Là gì? ソフトとハードの仲介 (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «ソフトとハードの仲介» (A) không thỏa: khớp đáp án «ユーザインタフェース».
```

##### B
```
• Là gì? ユーザ管理 (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «ユーザ管理» (B) không thỏa: khớp đáp án «ユーザインタフェース».
```

##### D
```
• Là gì? プロセス管理 (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «プロセス管理» (D) không thỏa: khớp đáp án «ユーザインタフェース».
```

**whatIs**
```
{
  "A": "ソフトとハードの仲介 (thuật ngữ JP).",
  "B": "ユーザ管理 (thuật ngữ JP).",
  "C": "ユーザインタフェース (thuật ngữ JP).",
  "D": "プロセス管理 (thuật ngữ JP)."
}
```

**intent**
```
• Câu JIT: nắm định nghĩa/thứ tự/thuật ngữ CNTT.
• giao diện người dùng (UI)
```

**memoryTip**
```
(trống)
```

---

### 195/400 · `jit` id=143 · task=`sample` · num=12 · ans **A**

- **flags:** khop_dap_an
- **status:** `todo`

**Đề gốc**

```
【専門知識】CPUの動作原理は何に基づいていますか。
```

**Options**

- **A.** チューリングマシン ✅
- **B.** ダイオード
- **C.** オートマトン
- **D.** トランジスタ

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | 【Chuyên môn】Chọn đáp án đúng theo kiến thức trong đề. |
| optionsVi.A | máy Turing |
| optionsVi.B | ダイオード — khái niệm kỹ thuật |
| optionsVi.C | automaton (ô tô-mát) |
| optionsVi.D | トランジスタ — khái niệm kỹ thuật |
| answerDisplay | A. máy Turing |

**concept**
```
• máy Turing
• Thuật ngữ: máy Turing.
```

**whyCorrect**
```
• máy Turing — CPU máy Turing （§11.3）。
• máy Turing
• Đáp án A: máy Turing
```

**whyWrong**

##### B
```
• Là gì? ダイオード (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «ダイオード» (B) không thỏa: khớp đáp án «チューリングマシン».
```

##### C
```
• Là gì? オートマトン (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «オートマトン» (C) không thỏa: khớp đáp án «チューリングマシン».
```

##### D
```
• Là gì? トランジスタ (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «トランジスタ» (D) không thỏa: khớp đáp án «チューリングマシン».
```

**whatIs**
```
{
  "A": "チューリングマシン (thuật ngữ JP).",
  "B": "ダイオード (thuật ngữ JP).",
  "C": "オートマトン (thuật ngữ JP).",
  "D": "トランジスタ (thuật ngữ JP)."
}
```

**intent**
```
• Câu JIT: nắm định nghĩa/thứ tự/thuật ngữ CNTT.
• máy Turing
```

**memoryTip**
```
(trống)
```

---

### 196/400 · `jit` id=145 · task=`sample` · num=14 · ans **C**

- **flags:** khop_dap_an
- **status:** `todo`

**Đề gốc**

```
【専門知識】（ ）を圧縮するには、音の波としての性質を使います。
```

**Options**

- **A.** 画像情報
- **B.** 通信情報
- **C.** 音声 ✅
- **D.** 波長

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | 【Chuyên môn】Chọn đáp án đúng theo kiến thức trong đề. |
| optionsVi.A | thông tin ảnh |
| optionsVi.B | thông tin truyền thông |
| optionsVi.C | âm thanh |
| optionsVi.D | bước sóng |
| answerDisplay | C. âm thanh |

**concept**
```
• âm thanh
• Nghĩa: âm thanh.
```

**whyCorrect**
```
• thông tin âm thanh — thông tin âm thanh nén biến đổi Fourier 、 （§15.3）。
• âm thanh
• Đáp án C: âm thanh
```

**whyWrong**

##### A
```
• Là gì? 画像情報 (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «画像情報» (A) không thỏa: khớp đáp án «音声».
```

##### B
```
• Là gì? 通信情報 (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «通信情報» (B) không thỏa: khớp đáp án «音声».
```

##### D
```
• Là gì? 波長 (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «波長» (D) không thỏa: khớp đáp án «音声».
```

**whatIs**
```
{
  "A": "画像情報 (thuật ngữ JP).",
  "B": "通信情報 (thuật ngữ JP).",
  "C": "音声 (thuật ngữ JP).",
  "D": "波長 (thuật ngữ JP)."
}
```

**intent**
```
• Câu JIT: nắm định nghĩa/thứ tự/thuật ngữ CNTT.
• âm thanh
```

**memoryTip**
```
(trống)
```

---

### 197/400 · `jit` id=146 · task=`sample` · num=15 · ans **C**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
【専門知識】光ファイバを使って家庭まで高速通信を行うことは何でしょう。
```

**Options**

- **A.** CATV
- **B.** ADSL
- **C.** FTTH ✅
- **D.** SDSL

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | 【Chuyên môn】Chọn đáp án đúng theo kiến thức trong đề. |
| optionsVi.A | CATV |
| optionsVi.B | ADSL |
| optionsVi.C | FTTH |
| optionsVi.D | SDSL |
| answerDisplay | C. FTTH |

**concept**
```
• FTTH
• Nghĩa: FTTH.
```

**whyCorrect**
```
• Có vai trò riêng; đối chiếu với điều kiện stem.
• Khớp stem: khớp đáp án «FTTH».
```

**whyWrong**

##### A
```
• Là gì? CATV — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «CATV» (A) không thỏa: khớp đáp án «FTTH».
```

##### B
```
• Là gì? ADSL — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «ADSL» (B) không thỏa: khớp đáp án «FTTH».
```

##### D
```
• Là gì? SDSL — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «SDSL» (D) không thỏa: khớp đáp án «FTTH».
```

**whatIs**
```
{
  "A": "CATV — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "ADSL — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "FTTH — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "SDSL — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Câu JIT: nắm định nghĩa/thứ tự/thuật ngữ CNTT.
• FTTH
```

**memoryTip**
```
(trống)
```

---

### 198/400 · `jit` id=147 · task=`sample` · num=16 · ans **B**

- **flags:** khop_dap_an
- **status:** `todo`

**Đề gốc**

```
ランレングス圧縮について正しくないものをえらんでください。
```

**Options**

- **A.** 色がいくつ並ぶかを記述する圧縮方式
- **B.** どの場合でもデータサイズを大幅に削減できる ✅
- **C.** 最も単純な画像圧縮方式の1つ
- **D.** 最も複雑な画像圧縮方式の1つ

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Về nén Run-Length Encoding (RLE), hãy chọn câu SAI. |
| optionsVi.A | Cách nén mô tả có bao nhiêu màu xếp liền |
| optionsVi.B | Mọi trường hợp đều giảm mạnh kích thước dữ liệu (thường sai) |
| optionsVi.C | một trong các cách nén ảnh đơn giản nhất |
| optionsVi.D | một cách nén ảnh phức tạp nhất |
| answerDisplay | B. Mọi trường hợp đều giảm mạnh kích thước dữ liệu (thường sai) |

**concept**
```
• Mọi trường hợp đều giảm mạnh kích thước dữ liệu (thường sai)
• Nghĩa: Mọi trường hợp đều giảm mạnh kích thước dữ liệu (thường sai).
```

**whyCorrect**
```
• RLE gộp chuỗi ký tự lặp (AAABB → A3B2). Hữu ích khi lặp nhiều, thường lossless. Nhưng dữ liệu ngẫu nhiên/không lặp có thể phình to → không «luôn nhỏ hơn» → A là câu sai (đúng đáp án cần chọn).
• Mọi trường hợp đều giảm mạnh kích thước dữ liệu (thường sai)
• Đáp án B: Mọi trường hợp đều giảm mạnh kích thước dữ liệu (thường sai)
```

**whyWrong**

##### A
```
• Là gì? 色がいくつ並ぶかを記述する圧縮方式 (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «色がいくつ並ぶかを記述する圧縮方式» (A) không thỏa: khớp đáp án «どの場合でもデータサイズを大幅に削減できる».
```

##### C
```
• Là gì? 最も単純な画像圧縮方式の1つ (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «最も単純な画像圧縮方式の1つ» (C) không thỏa: khớp đáp án «どの場合でもデータサイズを大幅に削減できる».
```

##### D
```
• Là gì? 最も複雑な画像圧縮方式の1つ (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «最も複雑な画像圧縮方式の1つ» (D) không thỏa: khớp đáp án «どの場合でもデータサイズを大幅に削減できる».
```

**whatIs**
```
{
  "A": "色がいくつ並ぶかを記述する圧縮方式 (thuật ngữ JP).",
  "B": "どの場合でもデータサイズを大幅に削減できる (thuật ngữ JP).",
  "C": "最も単純な画像圧縮方式の1つ (thuật ngữ JP).",
  "D": "最も複雑な画像圧縮方式の1つ (thuật ngữ JP)."
}
```

**intent**
```
• Đọc kỹ đề (đã dịch) và chọn đúng bản chất kỹ thuật.
• Mọi trường hợp đều giảm mạnh kích thước dữ liệu (thường sai)
```

**memoryTip**
```
(trống)
```

---

### 199/400 · `jit` id=150 · task=`sample` · num=19 · ans **C**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
故障以外で問題なのは、（ ）による不具合です。
```

**Options**

- **A.** ウイルス
- **B.** プログラム
- **C.** プログラムミス ✅
- **D.** OS

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Điền từ thích hợp vào chỗ trống (xem câu gốc). |
| optionsVi.A | ウイルス — khái niệm kỹ thuật |
| optionsVi.B | chương trình |
| optionsVi.C | chương trình |
| optionsVi.D | hệ điều hành (OS) |
| answerDisplay | C. chương trình |

**concept**
```
• chương trình
• Nghĩa: chương trình.
```

**whyCorrect**
```
• Khái niệm CNTT trong đề thi JIT.
• Khớp stem: khớp đáp án «プログラムミス».
```

**whyWrong**

##### A
```
• Là gì? ウイルス (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «ウイルス» (A) không thỏa: khớp đáp án «プログラムミス».
```

##### B
```
• Là gì? プログラム (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «プログラム» (B) không thỏa: khớp đáp án «プログラムミス».
```

##### D
```
• Là gì? OS — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «OS» (D) không thỏa: khớp đáp án «プログラムミス».
```

**whatIs**
```
{
  "A": "ウイルス (thuật ngữ JP).",
  "B": "プログラム (thuật ngữ JP).",
  "C": "プログラムミス (thuật ngữ JP).",
  "D": "OS — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Câu JIT: nắm định nghĩa/thứ tự/thuật ngữ CNTT.
• chương trình
```

**memoryTip**
```
(trống)
```

---

### 200/400 · `jit` id=151 · task=`sample` · num=20 · ans **B**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
MIDI命令はデータ量としては何ビットとなりますか。
```

**Options**

- **A.** 16
- **B.** 8 ✅
- **C.** 1
- **D.** 2

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Lệnh MIDI có lượng dữ liệu khoảng bao nhiêu bit/byte? |
| optionsVi.A | 16 |
| optionsVi.B | 8 |
| optionsVi.C | 1 |
| optionsVi.D | 2 |
| answerDisplay | B. 8 |

**concept**
```
• 8 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
```

**whyCorrect**
```
• MIDI gửi lệnh nhạc (note on/off…) rất nhỏ: status + data, thường 1–3 byte, không phải gigabit.
• 8
• Đáp án B: 8
```

**whyWrong**

##### A
```
• Là gì? 16 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «16» (A) không thỏa: khớp đáp án «8».
```

##### C
```
• Là gì? 1 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «1» (C) không thỏa: khớp đáp án «8».
```

##### D
```
• Là gì? 2 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «2» (D) không thỏa: khớp đáp án «8».
```

**whatIs**
```
{
  "A": "16 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "8 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "1 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "2 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Đọc kỹ đề (đã dịch) và chọn đúng bản chất kỹ thuật.
• 8
```

**memoryTip**
```
(trống)
```

---

### 201/400 · `jit` id=152 · task=`sample` · num=21 · ans **C**

- **flags:** khop_dap_an
- **status:** `todo`

**Đề gốc**

```
【専門知識】Web2.0の大きな特徴は何ですか。
```

**Options**

- **A.** シェアウェアがある
- **B.** キャラクターがある
- **C.** ロングテールがある ✅
- **D.** ソースコードがある

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | 【Chuyên môn】Chọn đáp án đúng theo kiến thức trong đề. |
| optionsVi.A | có shareware |
| optionsVi.B | có ký tự/nhân vật |
| optionsVi.C | có long tail |
| optionsVi.D | mã nguồn |
| answerDisplay | C. có long tail |

**concept**
```
• có long tail
• Thuật ngữ: có long tail.
```

**whyCorrect**
```
• Khái niệm CNTT trong đề thi JIT.
• Khớp stem: khớp đáp án «ロングテールがある».
```

**whyWrong**

##### A
```
• Là gì? シェアウェアがある (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «シェアウェアがある» (A) không thỏa: khớp đáp án «ロングテールがある».
```

##### B
```
• Là gì? キャラクターがある (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «キャラクターがある» (B) không thỏa: khớp đáp án «ロングテールがある».
```

##### D
```
• Là gì? ソースコードがある (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «ソースコードがある» (D) không thỏa: khớp đáp án «ロングテールがある».
```

**whatIs**
```
{
  "A": "シェアウェアがある (thuật ngữ JP).",
  "B": "キャラクターがある (thuật ngữ JP).",
  "C": "ロングテールがある (thuật ngữ JP).",
  "D": "ソースコードがある (thuật ngữ JP)."
}
```

**intent**
```
• Câu JIT: nắm định nghĩa/thứ tự/thuật ngữ CNTT.
• có long tail
```

**memoryTip**
```
(trống)
```

---

### 202/400 · `jit` id=154 · task=`sample` · num=23 · ans **D**

- **flags:** khop_dap_an
- **status:** `todo`

**Đề gốc**

```
ユーザからの入力は何から行えますか。
```

**Options**

- **A.** プリンター
- **B.** 画面
- **C.** ディスプレイ
- **D.** キーボードやマウス ✅

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Người dùng có thể nhập liệu từ đâu? |
| optionsVi.A | máy in |
| optionsVi.B | màn hình / khung hình |
| optionsVi.C | màn hình |
| optionsVi.D | bàn phím |
| answerDisplay | D. bàn phím |

**concept**
```
• bàn phím
• Nghĩa: bàn phím.
```

**whyCorrect**
```
• Khái niệm CNTT trong đề thi JIT.
• Khớp stem: khớp đáp án «キーボードやマウス».
```

**whyWrong**

##### A
```
• Là gì? プリンター (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «プリンター» (A) không thỏa: khớp đáp án «キーボードやマウス».
```

##### B
```
• Là gì? 画面 (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «画面» (B) không thỏa: khớp đáp án «キーボードやマウス».
```

##### C
```
• Là gì? ディスプレイ (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «ディスプレイ» (C) không thỏa: khớp đáp án «キーボードやマウス».
```

**whatIs**
```
{
  "A": "プリンター (thuật ngữ JP).",
  "B": "画面 (thuật ngữ JP).",
  "C": "ディスプレイ (thuật ngữ JP).",
  "D": "キーボードやマウス (thuật ngữ JP)."
}
```

**intent**
```
• Câu JIT: nắm định nghĩa/thứ tự/thuật ngữ CNTT.
• bàn phím
```

**memoryTip**
```
(trống)
```

---

### 203/400 · `jit` id=155 · task=`sample` · num=24 · ans **A**

- **flags:** khop_dap_an
- **status:** `todo`

**Đề gốc**

```
【専門知識】「ヒューマンインタフェースの設計は；（ ）検討時では十分に行えないことが多く；試作プログラムを作ってみて問題点を修正していくというやり方になります。」
```

**Options**

- **A.** アルゴリズム ✅
- **B.** ソーティング
- **C.** マージソート
- **D.** フローチャート

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | 【Chuyên môn】Chọn đáp án đúng theo kiến thức trong đề. |
| optionsVi.A | thuật toán |
| optionsVi.B | ソーティング — khái niệm kỹ thuật |
| optionsVi.C | マージソート — khái niệm kỹ thuật |
| optionsVi.D | lưu đồ (flowchart) |
| answerDisplay | A. thuật toán |

**concept**
```
• thuật toán
• Thuật ngữ: thuật toán.
```

**whyCorrect**
```
• Khái niệm CNTT trong đề thi JIT.
• Khớp stem: khớp đáp án «アルゴリズム».
```

**whyWrong**

##### B
```
• Là gì? ソーティング (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «ソーティング» (B) không thỏa: khớp đáp án «アルゴリズム».
```

##### C
```
• Là gì? マージソート (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «マージソート» (C) không thỏa: khớp đáp án «アルゴリズム».
```

##### D
```
• Là gì? フローチャート (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «フローチャート» (D) không thỏa: khớp đáp án «アルゴリズム».
```

**whatIs**
```
{
  "A": "アルゴリズム (thuật ngữ JP).",
  "B": "ソーティング (thuật ngữ JP).",
  "C": "マージソート (thuật ngữ JP).",
  "D": "フローチャート (thuật ngữ JP)."
}
```

**intent**
```
• Câu JIT: nắm định nghĩa/thứ tự/thuật ngữ CNTT.
• thuật toán
```

**memoryTip**
```
(trống)
```

---

### 204/400 · `jit` id=157 · task=`sample` · num=26 · ans **A**

- **flags:** khop_dap_an
- **status:** `todo`

**Đề gốc**

```
電子式計算機はいつ開発されましたか。
```

**Options**

- **A.** 1946年 ✅
- **B.** 1930年代
- **C.** 17世紀
- **D.** 紀元前

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Máy tính điện tử được phát triển khoảng khi nào? |
| optionsVi.A | năm 1946 |
| optionsVi.B | thập niên 1930 |
| optionsVi.C | 17世紀 — khái niệm kỹ thuật |
| optionsVi.D | trước Công nguyên |
| answerDisplay | A. năm 1946 |

**concept**
```
• năm 1946
• Thuật ngữ: năm 1946.
```

**whyCorrect**
```
• Máy tính điện tử số xuất hiện giữa thế kỷ 20 (ENIAC 1946…).
• năm 1946
• Đáp án A: năm 1946
```

**whyWrong**

##### B
```
• Là gì? 1930年代 (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «1930年代» (B) không thỏa: khớp đáp án «1946年».
```

##### C
```
• Là gì? 17世紀 (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «17世紀» (C) không thỏa: khớp đáp án «1946年».
```

##### D
```
• Là gì? 紀元前 (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «紀元前» (D) không thỏa: khớp đáp án «1946年».
```

**whatIs**
```
{
  "A": "1946年 (thuật ngữ JP).",
  "B": "1930年代 (thuật ngữ JP).",
  "C": "17世紀 (thuật ngữ JP).",
  "D": "紀元前 (thuật ngữ JP)."
}
```

**intent**
```
• Đọc kỹ đề (đã dịch) và chọn đúng bản chất kỹ thuật.
• năm 1946
```

**memoryTip**
```
(trống)
```

---

### 205/400 · `jit` id=159 · task=`sample` · num=28 · ans **A**

- **flags:** khop_dap_an
- **status:** `todo`

**Đề gốc**

```
低級言語について正しくないものをえらんでください。
```

**Options**

- **A.** JavaやC++ ✅
- **B.** 汎用性や読みやすさに問題があります
- **C.** メモリに蓄えられているプログラム
- **D.** CPUの種類に依存した機械語

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Về ngôn ngữ cấp thấp, hãy chọn câu SAI. |
| optionsVi.A | JavaやC++ — khái niệm kỹ thuật |
| optionsVi.B | có vấn đề đa dụng/dễ đọc |
| optionsVi.C | Chương trình được lưu trong bộ nhớ |
| optionsVi.D | ngôn ngữ máy phụ thuộc loại CPU |
| answerDisplay | A. JavaやC++ — khái niệm kỹ thuật |

**concept**
```
• Java hoặc C++
• Thuật ngữ: Java hoặc C++.
```

**whyCorrect**
```
• Low-level (máy, assembly) gần phần cứng, hiệu năng tốt, nhưng khó đọc và kém portable. Câu «dễ đọc + portable nhất» là đặc điểm high-level → A sai → chọn A.
• Java hoặc C++
• Đáp án A: Java hoặc C++
```

**whyWrong**

##### B
```
• Là gì? 汎用性や読みやすさに問題があります (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «汎用性や読みやすさに問題があります» (B) không thỏa: khớp đáp án «JavaやC++».
```

##### C
```
• Là gì? メモリに蓄えられているプログラム (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «メモリに蓄えられているプログラム» (C) không thỏa: khớp đáp án «JavaやC++».
```

##### D
```
• Là gì? CPUの種類に依存した機械語 (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «CPUの種類に依存した機械語» (D) không thỏa: khớp đáp án «JavaやC++».
```

**whatIs**
```
{
  "A": "JavaやC++ (thuật ngữ JP).",
  "B": "汎用性や読みやすさに問題があります (thuật ngữ JP).",
  "C": "メモリに蓄えられているプログラム (thuật ngữ JP).",
  "D": "CPUの種類に依存した機械語 (thuật ngữ JP)."
}
```

**intent**
```
• Đọc kỹ đề (đã dịch) và chọn đúng bản chất kỹ thuật.
• Java hoặc C++
```

**memoryTip**
```
(trống)
```

---

### 206/400 · `jit` id=160 · task=`sample` · num=29 · ans **D**

- **flags:** khop_dap_an
- **status:** `todo`

**Đề gốc**

```
長さ、重さ、時間など身の回りの多くの物理量は何ですか。
```

**Options**

- **A.** アナログ時計
- **B.** デジタル量
- **C.** デジタル時計
- **D.** アナログ量 ✅

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Chiều dài, trọng lượng, thời gian… phần lớn đại lượng vật lý quanh ta là gì? |
| optionsVi.A | tương tự (analog) |
| optionsVi.B | đại lượng số (digital) |
| optionsVi.C | đồng hồ số |
| optionsVi.D | đại lượng tương tự (analog) |
| answerDisplay | D. đại lượng tương tự (analog) |

**concept**
```
• đại lượng tương tự (analog)
• Thuật ngữ: đại lượng tương tự (analog).
```

**whyCorrect**
```
• Thế giới vật lý thường liên tục (analog). Máy tính số hóa (digital) bằng lấy mẫu/lượng tử hóa.
• đại lượng tương tự (analog)
• Đáp án D: đại lượng tương tự (analog)
```

**whyWrong**

##### A
```
• Là gì? Tín hiệu tương tự liên tục (dòng/áp…).
• Dùng để làm gì? Analog continuous signal.
• Vì sao sai? «アナログ時計» (A) không thỏa: khớp đáp án «アナログ量».
```

##### B
```
• Là gì? Tín hiệu/dữ liệu số (rời rạc, 0/1).
• Dùng để làm gì? Digital representation.
• Vì sao sai? «デジタル量» (B) không thỏa: khớp đáp án «アナログ量».
```

##### C
```
• Là gì? Tín hiệu/dữ liệu số (rời rạc, 0/1).
• Dùng để làm gì? Digital representation.
• Vì sao sai? «デジタル時計» (C) không thỏa: khớp đáp án «アナログ量».
```

**whatIs**
```
{
  "A": "Tín hiệu tương tự liên tục (dòng/áp…).",
  "B": "Tín hiệu/dữ liệu số (rời rạc, 0/1).",
  "C": "Tín hiệu/dữ liệu số (rời rạc, 0/1).",
  "D": "Tín hiệu tương tự liên tục (dòng/áp…)."
}
```

**intent**
```
• Đọc kỹ đề (đã dịch) và chọn đúng bản chất kỹ thuật.
• đại lượng tương tự (analog)
```

**memoryTip**
```
(trống)
```

---

### 207/400 · `jit` id=161 · task=`sample` · num=30 · ans **D**

- **flags:** khop_dap_an
- **status:** `todo`

**Đề gốc**

```
IPアドレスについて正しくないものをえらんでください。
```

**Options**

- **A.** ネットワーク層のIPプロトコルに従って番号が割り当てられている
- **B.** コンピュータの住所にあたる名前である
- **C.** 桁数の多い数字の並びである
- **D.** 覚えやすい ✅

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Về địa chỉ IP, hãy chọn câu SAI. |
| optionsVi.A | Số được gán theo giao thức IP tầng mạng |
| optionsVi.B | máy tính |
| optionsVi.C | dãy số nhiều chữ số |
| optionsVi.D | 覚えやすい — khái niệm kỹ thuật |
| answerDisplay | D. 覚えやすい — khái niệm kỹ thuật |

**concept**
```
• dễ nhớ
• Nghĩa: dễ nhớ.
```

**whyCorrect**
```
• IP public phải duy nhất trên Internet (trừ dải private NAT). Trùng public → xung đột định tuyến. → A sai.
• dễ nhớ
• Đáp án D: dễ nhớ
```

**whyWrong**

##### A
```
• Là gì? ネットワーク層のIPプロトコルに従って番号が割り当てられている (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «ネットワーク層のIPプロトコルに従って番号が割り当てられている» (A) không thỏa: khớp đáp án «覚えやすい».
```

##### B
```
• Là gì? コンピュータの住所にあたる名前である (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «コンピュータの住所にあたる名前である» (B) không thỏa: khớp đáp án «覚えやすい».
```

##### C
```
• Là gì? 桁数の多い数字の並びである (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «桁数の多い数字の並びである» (C) không thỏa: khớp đáp án «覚えやすい».
```

**whatIs**
```
{
  "A": "ネットワーク層のIPプロトコルに従って番号が割り当てられている (thuật ngữ JP).",
  "B": "コンピュータの住所にあたる名前である (thuật ngữ JP).",
  "C": "桁数の多い数字の並びである (thuật ngữ JP).",
  "D": "覚えやすい (thuật ngữ JP)."
}
```

**intent**
```
• Đọc kỹ đề (đã dịch) và chọn đúng bản chất kỹ thuật.
• dễ nhớ
```

**memoryTip**
```
(trống)
```

---

### 208/400 · `jit` id=162 · task=`sample` · num=31 · ans **B**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
【専門知識】電気機械式はいつ誕生されましたか。
```

**Options**

- **A.** 1946
- **B.** 1930 ✅
- **C.** 1949
- **D.** 1939

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | 【Chuyên môn】Chọn đáp án đúng theo kiến thức trong đề. |
| optionsVi.A | 1946 |
| optionsVi.B | 1930 |
| optionsVi.C | 1949 |
| optionsVi.D | 1939 |
| answerDisplay | B. 1930 |

**concept**
```
• 1930
• Nghĩa: 1930.
```

**whyCorrect**
```
• Có vai trò riêng; đối chiếu với điều kiện stem.
• Khớp stem: khớp đáp án «1930».
```

**whyWrong**

##### A
```
• Là gì? 1946 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «1946» (A) không thỏa: khớp đáp án «1930».
```

##### C
```
• Là gì? 1949 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «1949» (C) không thỏa: khớp đáp án «1930».
```

##### D
```
• Là gì? 1939 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «1939» (D) không thỏa: khớp đáp án «1930».
```

**whatIs**
```
{
  "A": "1946 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "1930 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "1949 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "1939 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Câu JIT: nắm định nghĩa/thứ tự/thuật ngữ CNTT.
• 1930
```

**memoryTip**
```
(trống)
```

---

### 209/400 · `jit` id=165 · task=`sample` · num=34 · ans **D**

- **flags:** khop_dap_an
- **status:** `todo`

**Đề gốc**

```
PCのOSに関する記述のうち、適切なものはどれか。
```

**Options**

- **A.** OSが異なっていてもアプリケーションはOSの種別を意識せずに処理できる
- **B.** アプリケーションが自由にOSの機能を使えるようにソースコードの公開が義務付けられている
- **C.** OSはファイルの文字コードを自動変換する機能をもつためアプリは文字コード種別を意識しなくてよい
- **D.** OSはアプリケーションに対して、CPUやメモリなどのコンピュータ資源を割り当てる ✅

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Về OS trên PC, mô tả nào thích hợp? |
| optionsVi.A | App chạy bất chấp OS mà không cần biết loại OS (sai / quá tuyệt đối) |
| optionsVi.B | Bắt buộc mở source để app dùng tự do chức năng OS (sai) |
| optionsVi.C | OS tự đổi mã ký tự nên app không cần quan tâm (sai / quá tuyệt đối) |
| optionsVi.D | OS cấp phát CPU/bộ nhớ… cho ứng dụng |
| answerDisplay | D. OS cấp phát CPU/bộ nhớ… cho ứng dụng |

**concept**
```
• OS cấp phát CPU/bộ nhớ… cho ứng dụng
• Nghĩa: OS cấp phát CPU/bộ nhớ… cho ứng dụng.
```

**whyCorrect**
```
• OS = hệ điều hành: quản lý CPU/RAM/file/I/O, cho app chạy trên phần cứng.
• OS cấp phát CPU/bộ nhớ… cho ứng dụng
• Đáp án D: OS cấp phát CPU/bộ nhớ… cho ứng dụng
```

**whyWrong**

##### A
```
• Là gì? OSが異なっていてもアプリケーションはOSの種別を意識せずに処理できる (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «OSが異なっていてもアプリケーションはOSの種別を意識せずに処理できる» (A) không thỏa: khớp đáp án «OSはアプリケーションに対して、CPUやメモリなどのコンピュータ資源を割り当てる».
```

##### B
```
• Là gì? アプリケーションが自由にOSの機能を使えるようにソースコードの公開が義務付けられている (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «アプリケーションが自由にOSの機能を使えるようにソースコードの公開が義務付けられている» (B) không thỏa: khớp đáp án «OSはアプリケーションに対して、CPUやメモリなどのコンピュータ資源を割り当てる».
```

##### C
```
• Là gì? OSはファイルの文字コードを自動変換する機能をもつためアプリは文字コード種別を意識しなくてよい (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «OSはファイルの文字コードを自動変換する機能をもつためアプリは文字コード種別を意識しなくてよい» (C) không thỏa: khớp đáp án «OSはアプリケーションに対して、CPUやメモリなどのコンピュータ資源を割り当てる».
```

**whatIs**
```
{
  "A": "OSが異なっていてもアプリケーションはOSの種別を意識せずに処理できる (thuật ngữ JP).",
  "B": "アプリケーションが自由にOSの機能を使えるようにソースコードの公開が義務付けられている (thuật ngữ JP).",
  "C": "OSはファイルの文字コードを自動変換する機能をもつためアプリは文字コード種別を意識しなくてよい (thuật ngữ JP).",
  "D": "OSはアプリケーションに対して、CPUやメモリなどのコンピュータ資源を割り当てる (thuật ngữ JP)."
}
```

**intent**
```
• Đọc kỹ đề (đã dịch) và chọn đúng bản chất kỹ thuật.
• OS cấp phát CPU/bộ nhớ… cho ứng dụng
```

**memoryTip**
```
(trống)
```

---

### 210/400 · `jit` id=166 · task=`sample` · num=35 · ans **A**

- **flags:** khop_dap_an
- **status:** `todo`

**Đề gốc**

```
コンピュータのデータは何の並びで表現された数字ですか。
```

**Options**

- **A.** 0と1 ✅
- **B.** 00と11
- **C.** 0と10
- **D.** 01と10

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Dữ liệu máy tính là dãy số biểu diễn bằng gì? |
| optionsVi.A | 0 và 1 |
| optionsVi.B | 00 và 11 |
| optionsVi.C | 0 và 10 |
| optionsVi.D | 01 và 10 |
| answerDisplay | A. 0 và 1 |

**concept**
```
• 0 và 1
• Thuật ngữ: 0 và 1.
```

**whyCorrect**
```
• Máy tính số dùng hệ nhị phân: mọi dữ liệu quy về bit 0/1.
• 0 và 1
• Đáp án A: 0 và 1
```

**whyWrong**

##### B
```
• Là gì? Tín hiệu/dữ liệu số (rời rạc, 0/1).
• Dùng để làm gì? Digital representation.
• Vì sao sai? «00と11» (B) không thỏa: khớp đáp án «0と1».
```

##### C
```
• Là gì? Tín hiệu/dữ liệu số (rời rạc, 0/1).
• Dùng để làm gì? Digital representation.
• Vì sao sai? «0と10» (C) không thỏa: khớp đáp án «0と1».
```

##### D
```
• Là gì? 01と10 (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «01と10» (D) không thỏa: khớp đáp án «0と1».
```

**whatIs**
```
{
  "A": "Tín hiệu/dữ liệu số (rời rạc, 0/1).",
  "B": "Tín hiệu/dữ liệu số (rời rạc, 0/1).",
  "C": "Tín hiệu/dữ liệu số (rời rạc, 0/1).",
  "D": "01と10 (thuật ngữ JP)."
}
```

**intent**
```
• Đọc kỹ đề (đã dịch) và chọn đúng bản chất kỹ thuật.
• 0 và 1
```

**memoryTip**
```
(trống)
```

---

### 211/400 · `jit` id=167 · task=`sample` · num=36 · ans **C**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
JRのSuicaなどで使われているのは何ですか。
```

**Options**

- **A.** IrDA
- **B.** Bluetooth
- **C.** 非接触型ICカード ✅
- **D.** FTTH

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Suica của JR… dùng công nghệ gì? |
| optionsVi.A | IrDA |
| optionsVi.B | Bluetooth |
| optionsVi.C | thẻ IC không tiếp xúc |
| optionsVi.D | FTTH |
| answerDisplay | C. thẻ IC không tiếp xúc |

**concept**
```
• thẻ IC không tiếp xúc
• Thuật ngữ: thẻ IC không tiếp xúc.
```

**whyCorrect**
```
• Suica = thẻ IC/NFC không chạm (FeliCa). Thanh toán/đi tàu bằng chạm thẻ.
• thẻ IC không tiếp xúc
• Đáp án C: thẻ IC không tiếp xúc
```

**whyWrong**

##### A
```
• Là gì? IrDA — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «IrDA» (A) không thỏa: khớp đáp án «非接触型ICカード».
```

##### B
```
• Là gì? Bluetooth — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Bluetooth» (B) không thỏa: khớp đáp án «非接触型ICカード».
```

##### D
```
• Là gì? FTTH — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «FTTH» (D) không thỏa: khớp đáp án «非接触型ICカード».
```

**whatIs**
```
{
  "A": "IrDA — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Bluetooth — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "非接触型ICカード (thuật ngữ JP).",
  "D": "FTTH — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Đọc kỹ đề (đã dịch) và chọn đúng bản chất kỹ thuật.
• thẻ IC không tiếp xúc
```

**memoryTip**
```
(trống)
```

---

### 212/400 · `jit` id=168 · task=`sample` · num=37 · ans **B**

- **flags:** khop_dap_an
- **status:** `todo`

**Đề gốc**

```
工業所有権はどんな権ですか。
```

**Options**

- **A.** 新規の技術についての権利を保護する権利
- **B.** 技術の進歩を保護する権利 ✅
- **C.** 製品のデザインについての権利
- **D.** 工業の進歩を保護する権利

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Quyền sở hữu công nghiệp gồm những quyền nào / là loại quyền gì? |
| optionsVi.A | quyền bảo hộ kỹ thuật mới (sáng chế) |
| optionsVi.B | quyền bảo hộ tiến bộ kỹ thuật |
| optionsVi.C | quyền về thiết kế sản phẩm |
| optionsVi.D | quyền bảo hộ tiến bộ công nghiệp |
| answerDisplay | B. quyền bảo hộ tiến bộ kỹ thuật |

**concept**
```
• quyền bảo hộ tiến bộ kỹ thuật
• Nghĩa: quyền bảo hộ tiến bộ kỹ thuật.
```

**whyCorrect**
```
• quyền bảo hộ tiến bộ kỹ thuật
• Đáp án B: quyền bảo hộ tiến bộ kỹ thuật
```

**whyWrong**

##### A
```
• Là gì? 新規の技術についての権利を保護する権利 (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «新規の技術についての権利を保護する権利» (A) không thỏa: khớp đáp án «技術の進歩を保護する権利».
```

##### C
```
• Là gì? 製品のデザインについての権利 (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «製品のデザインについての権利» (C) không thỏa: khớp đáp án «技術の進歩を保護する権利».
```

##### D
```
• Là gì? 工業の進歩を保護する権利 (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «工業の進歩を保護する権利» (D) không thỏa: khớp đáp án «技術の進歩を保護する権利».
```

**whatIs**
```
{
  "A": "新規の技術についての権利を保護する権利 (thuật ngữ JP).",
  "B": "技術の進歩を保護する権利 (thuật ngữ JP).",
  "C": "製品のデザインについての権利 (thuật ngữ JP).",
  "D": "工業の進歩を保護する権利 (thuật ngữ JP)."
}
```

**intent**
```
• Đọc kỹ đề (đã dịch) và chọn đúng bản chất kỹ thuật.
• quyền bảo hộ tiến bộ kỹ thuật
```

**memoryTip**
```
(trống)
```

---

### 213/400 · `jit` id=169 · task=`sample` · num=38 · ans **C**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
携帯電話、パソコン、カーナビ、マウス、キーボード、ヘッドホンなどに搭載されている通信規格は何ですか。
```

**Options**

- **A.** FTTH
- **B.** 非接触型ICカード
- **C.** Bluetooth ✅
- **D.** IrDA

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Chuẩn truyền thông gắn trên điện thoại, PC, định vị xe, chuột, bàn phím, tai nghe… là gì? |
| optionsVi.A | FTTH |
| optionsVi.B | thẻ IC không tiếp xúc |
| optionsVi.C | Bluetooth |
| optionsVi.D | IrDA |
| answerDisplay | C. Bluetooth |

**concept**
```
• Bluetooth
• Thuật ngữ: Bluetooth.
```

**whyCorrect**
```
• Bluetooth phổ biến không dây tầm ngắn trên đúng các thiết bị liệt kê.
• Bluetooth
• Đáp án C: Bluetooth
```

**whyWrong**

##### A
```
• Là gì? FTTH — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «FTTH» (A) không thỏa: khớp đáp án «Bluetooth».
```

##### B
```
• Là gì? 非接触型ICカード (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «非接触型ICカード» (B) không thỏa: khớp đáp án «Bluetooth».
```

##### D
```
• Là gì? IrDA — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «IrDA» (D) không thỏa: khớp đáp án «Bluetooth».
```

**whatIs**
```
{
  "A": "FTTH — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "非接触型ICカード (thuật ngữ JP).",
  "C": "Bluetooth — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "IrDA — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Đọc kỹ đề (đã dịch) và chọn đúng bản chất kỹ thuật.
• Bluetooth
```

**memoryTip**
```
(trống)
```

---

### 214/400 · `jit` id=171 · task=`sample` · num=40 · ans **B**

- **flags:** khop_dap_an
- **status:** `todo`

**Đề gốc**

```
着信メロディについて正しくないものを選びなさい。
```

**Options**

- **A.** 着信メロディのデータは、音楽用のコードと解釈されます
- **B.** 高音質な楽曲再生が可能です ✅
- **C.** 高音質な楽曲再生が不可能です
- **D.** モジュレーションなどにより表現されています

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Chọn phát biểu SAI về nhạc chuông (ringtone). |
| optionsVi.A | Dữ liệu nhạc chuông được hiểu là mã âm nhạc |
| optionsVi.B | có thể phát nhạc chất lượng cao |
| optionsVi.C | không thể phát nhạc chất lượng cao |
| optionsVi.D | Biểu diễn bằng điều chế (modulation) v.v. |
| answerDisplay | B. có thể phát nhạc chất lượng cao |

**concept**
```
• có thể phát nhạc chất lượng cao
• Thuật ngữ: có thể phát nhạc chất lượng cao.
```

**whyCorrect**
```
• có thể phát nhạc chất lượng cao
• Đáp án B: có thể phát nhạc chất lượng cao
```

**whyWrong**

##### A
```
• Là gì? 着信メロディのデータは、音楽用のコードと解釈されます (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «着信メロディのデータは、音楽用のコードと解釈されます» (A) không thỏa: khớp đáp án «高音質な楽曲再生が可能です».
```

##### C
```
• Là gì? 高音質な楽曲再生が不可能です (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «高音質な楽曲再生が不可能です» (C) không thỏa: khớp đáp án «高音質な楽曲再生が可能です».
```

##### D
```
• Là gì? モジュレーションなどにより表現されています (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «モジュレーションなどにより表現されています» (D) không thỏa: khớp đáp án «高音質な楽曲再生が可能です».
```

**whatIs**
```
{
  "A": "着信メロディのデータは、音楽用のコードと解釈されます (thuật ngữ JP).",
  "B": "高音質な楽曲再生が可能です (thuật ngữ JP).",
  "C": "高音質な楽曲再生が不可能です (thuật ngữ JP).",
  "D": "モジュレーションなどにより表現されています (thuật ngữ JP)."
}
```

**intent**
```
• Câu JIT: nắm định nghĩa/thứ tự/thuật ngữ CNTT.
• có thể phát nhạc chất lượng cao
```

**memoryTip**
```
(trống)
```

---

### 215/400 · `jit` id=173 · task=`sample` · num=42 · ans **D**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
【専門知識】（ ）とは、インターネット上で提供される各種のサービス・システム・各種のファイルの場所を特定するための記述方式です。
```

**Options**

- **A.** DNS
- **B.** WWW
- **C.** IP
- **D.** URL ✅

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | 【Chuyên môn】Chọn đáp án đúng theo kiến thức trong đề. |
| optionsVi.A | DNS |
| optionsVi.B | WWW |
| optionsVi.C | IP |
| optionsVi.D | URL |
| answerDisplay | D. URL |

**concept**
```
• URL
• Thuật ngữ: URL.
```

**whyCorrect**
```
• Có vai trò riêng; đối chiếu với điều kiện stem.
• Khớp stem: khớp đáp án «URL».
```

**whyWrong**

##### A
```
• Là gì? DNS — phân giải tên miền ↔ địa chỉ IP.
• Dùng để làm gì? Tra cứu name server.
• Vì sao sai? «DNS» (A) không thỏa: khớp đáp án «URL».
```

##### B
```
• Là gì? WWW — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «WWW» (B) không thỏa: khớp đáp án «URL».
```

##### C
```
• Là gì? IP — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «IP» (C) không thỏa: khớp đáp án «URL».
```

**whatIs**
```
{
  "A": "DNS — phân giải tên miền ↔ địa chỉ IP.",
  "B": "WWW — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "IP — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "URL — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Câu JIT: nắm định nghĩa/thứ tự/thuật ngữ CNTT.
• URL
```

**memoryTip**
```
(trống)
```

---

### 216/400 · `jit` id=176 · task=`sample` · num=45 · ans **C**

- **flags:** khop_dap_an
- **status:** `todo`

**Đề gốc**

```
著作権の特徴はなんですか。
```

**Options**

- **A.** 手続きが必要
- **B.** 登録が義務
- **C.** 創作した時点で自動的に権利が発生 ✅
- **D.** 許可が必要

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Đặc trưng của bản quyền là gì? |
| optionsVi.A | 手続きが必要 — khái niệm kỹ thuật |
| optionsVi.B | bắt buộc đăng ký |
| optionsVi.C | có quyền tự động khi sáng tạo |
| optionsVi.D | cần phép |
| answerDisplay | C. có quyền tự động khi sáng tạo |

**concept**
```
• có quyền tự động khi sáng tạo
• Nghĩa: có quyền tự động khi sáng tạo.
```

**whyCorrect**
```
• có quyền tự động khi sáng tạo
• Đáp án C: có quyền tự động khi sáng tạo
```

**whyWrong**

##### A
```
• Là gì? 手続きが必要 (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «手続きが必要» (A) không thỏa: khớp đáp án «創作した時点で自動的に権利が発生».
```

##### B
```
• Là gì? 登録が義務 (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «登録が義務» (B) không thỏa: khớp đáp án «創作した時点で自動的に権利が発生».
```

##### D
```
• Là gì? 許可が必要 (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «許可が必要» (D) không thỏa: khớp đáp án «創作した時点で自動的に権利が発生».
```

**whatIs**
```
{
  "A": "手続きが必要 (thuật ngữ JP).",
  "B": "登録が義務 (thuật ngữ JP).",
  "C": "創作した時点で自動的に権利が発生 (thuật ngữ JP).",
  "D": "許可が必要 (thuật ngữ JP)."
}
```

**intent**
```
• Câu JIT: nắm định nghĩa/thứ tự/thuật ngữ CNTT.
• có quyền tự động khi sáng tạo
```

**memoryTip**
```
(trống)
```

---

### 217/400 · `jit` id=177 · task=`sample` · num=46 · ans **D**

- **flags:** khop_dap_an
- **status:** `todo`

**Đề gốc**

```
2つ以上の処理装置が、メモリを共有せずに、それぞれ独立したメモリを持って並列処理を行う方式は何でしょう。
```

**Options**

- **A.** 分散処理
- **B.** 集中処理
- **C.** 密結合マルチプロセッサ
- **D.** 疎結合マルチプロセッサ ✅

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Cách xử lý song song với ≥2 bộ xử lý, mỗi cái có bộ nhớ riêng (không chia sẻ) gọi là gì? |
| optionsVi.A | xử lý phân tán |
| optionsVi.B | xử lý tập trung |
| optionsVi.C | đa xử lý liên kết chặt |
| optionsVi.D | đa xử lý liên kết lỏng |
| answerDisplay | D. đa xử lý liên kết lỏng |

**concept**
```
• đa xử lý liên kết lỏng
• Nghĩa: đa xử lý liên kết lỏng.
```

**whyCorrect**
```
• đa xử lý liên kết lỏng
• Đáp án D: đa xử lý liên kết lỏng
```

**whyWrong**

##### A
```
• Là gì? 分散処理 (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «分散処理» (A) không thỏa: khớp đáp án «疎結合マルチプロセッサ».
```

##### B
```
• Là gì? 集中処理 (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «集中処理» (B) không thỏa: khớp đáp án «疎結合マルチプロセッサ».
```

##### C
```
• Là gì? 密結合マルチプロセッサ (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «密結合マルチプロセッサ» (C) không thỏa: khớp đáp án «疎結合マルチプロセッサ».
```

**whatIs**
```
{
  "A": "分散処理 (thuật ngữ JP).",
  "B": "集中処理 (thuật ngữ JP).",
  "C": "密結合マルチプロセッサ (thuật ngữ JP).",
  "D": "疎結合マルチプロセッサ (thuật ngữ JP)."
}
```

**intent**
```
• Câu JIT: nắm định nghĩa/thứ tự/thuật ngữ CNTT.
• đa xử lý liên kết lỏng
```

**memoryTip**
```
(trống)
```

---

### 218/400 · `jit` id=178 · task=`sample` · num=47 · ans **A**

- **flags:** khop_dap_an
- **status:** `todo`

**Đề gốc**

```
インターネットでは、IPアドレス（コンピュータの住所にあたる番号）を使って、相手の（ ）を特定します。
```

**Options**

- **A.** コンピュータ ✅
- **B.** データ
- **C.** 名前
- **D.** 住所

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Điền từ thích hợp vào chỗ trống (xem câu gốc). |
| optionsVi.A | máy tính |
| optionsVi.B | データ — khái niệm kỹ thuật |
| optionsVi.C | tên |
| optionsVi.D | địa chỉ |
| answerDisplay | A. máy tính |

**concept**
```
• máy tính
• Thuật ngữ: máy tính.
```

**whyCorrect**
```
• máy tính — địa chỉ IP 「máy tính」 （§6.2）。
• máy tính
• Đáp án A: máy tính
```

**whyWrong**

##### B
```
• Là gì? データ (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «データ» (B) không thỏa: khớp đáp án «コンピュータ».
```

##### C
```
• Là gì? 名前 (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «名前» (C) không thỏa: khớp đáp án «コンピュータ».
```

##### D
```
• Là gì? 住所 (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «住所» (D) không thỏa: khớp đáp án «コンピュータ».
```

**whatIs**
```
{
  "A": "コンピュータ (thuật ngữ JP).",
  "B": "データ (thuật ngữ JP).",
  "C": "名前 (thuật ngữ JP).",
  "D": "住所 (thuật ngữ JP)."
}
```

**intent**
```
• Câu JIT: nắm định nghĩa/thứ tự/thuật ngữ CNTT.
• máy tính
```

**memoryTip**
```
(trống)
```

---

### 219/400 · `jit` id=181 · task=`sample` · num=50 · ans **D**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
【専門用語】次の日本語の用語をベトナム語に直しなさい。 高水準言語
```

**Options**

- **A.** Ngôn ngữ bậc thấp
- **B.** Ngôn ngữ máy
- **C.** Ngôn ngữ tự nhiên
- **D.** Ngôn ngữ bậc cao ✅

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | 【Thuật ngữ】Chọn nghĩa tiếng Việt đúng cho «ngôn ngữ bậc cao». |
| optionsVi.A | Ngôn ngữ bậc thấp |
| optionsVi.B | Ngôn ngữ máy |
| optionsVi.C | Ngôn ngữ tự nhiên |
| optionsVi.D | Ngôn ngữ bậc cao |
| answerDisplay | D. Ngôn ngữ bậc cao |

**concept**
```
• «ngôn ngữ bậc cao» nghĩa Việt: «Ngôn ngữ bậc cao».
```

**whyCorrect**
```
• Ngôn ngữ bậc cao — ngôn ngữ bậc cao（ ） Ngôn ngữ bậc cao（ ） 。Java hoặc C++ （§16）。 Đây là câu đối chiếu thuật ngữ JP ↔ VI: phải khớp đúng nghĩa chuyên ngành, không chọn từ gần nghĩa.
• «ngôn ngữ bậc cao» = Ngôn ngữ bậc cao
• Ghép đúng Hán tự/katakana với nghĩa VI đã học.
```

**whyWrong**

##### A
```
• Là gì? Ngôn ngữ bậc thấp — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Ngôn ngữ bậc thấp» (A) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### B
```
• Là gì? Ngôn ngữ máy — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Ngôn ngữ máy» (B) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### C
```
• Là gì? Ngôn ngữ tự nhiên — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Ngôn ngữ tự nhiên» (C) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

**whatIs**
```
{
  "A": "Ngôn ngữ bậc thấp — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Ngôn ngữ máy — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Ngôn ngữ tự nhiên — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Ngôn ngữ bậc cao — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Câu từ vựng: cho thuật ngữ (thường JP) → chọn nghĩa tiếng Việt đúng.
```

**memoryTip**
```
• ngôn ngữ bậc cao → Ngôn ngữ bậc cao
```

---

### 220/400 · `jit` id=182 · task=`sample` · num=51 · ans **C**

- **flags:** khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Web2.0について正しくないものをえらんでください。
```

**Options**

- **A.** ソーシャルネットワーキングサービス（SNS）の普及
- **B.** ユーザ自身がコンテンツを作成・共有する
- **C.** 情報の送り手と受け手が固定されている ✅
- **D.** ブログやウィキ（Wiki）などの活用

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Chọn phát biểu SAI về Web2.0. |
| optionsVi.A | mạng xã hội (SNS) |
| optionsVi.B | ユーザ自身がコンテンツを作成・共有する — khái niệm kỹ thuật |
| optionsVi.C | Bên gửi và bên nhận thông tin cố định |
| optionsVi.D | dùng blog/Wiki… |
| answerDisplay | C. Bên gửi và bên nhận thông tin cố định |

**concept**
```
• Bên gửi và bên nhận thông tin cố định
• Nghĩa: Bên gửi và bên nhận thông tin cố định.
```

**whyCorrect**
```
• Bên gửi và bên nhận thông tin cố định
• Đáp án C: Bên gửi và bên nhận thông tin cố định
```

**whyWrong**

##### A
```
• Là gì? ソーシャルネットワーキングサービス（SNS）の普及 (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «ソーシャルネットワーキングサービス（SNS）の普及» (A) không thỏa: khớp đáp án «情報の送り手と受け手が固定されている».
```

##### B
```
• Là gì? ユーザ自身がコンテンツを作成・共有する (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «ユーザ自身がコンテンツを作成・共有する» (B) không thỏa: khớp đáp án «情報の送り手と受け手が固定されている».
```

##### D
```
• Là gì? ブログやウィキ（Wiki）などの活用 (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «ブログやウィキ（Wiki）などの活用» (D) không thỏa: khớp đáp án «情報の送り手と受け手が固定されている».
```

**whatIs**
```
{
  "A": "ソーシャルネットワーキングサービス（SNS）の普及 (thuật ngữ JP).",
  "B": "ユーザ自身がコンテンツを作成・共有する (thuật ngữ JP).",
  "C": "情報の送り手と受け手が固定されている (thuật ngữ JP).",
  "D": "ブログやウィキ（Wiki）などの活用 (thuật ngữ JP)."
}
```

**intent**
```
• Câu JIT: nắm định nghĩa/thứ tự/thuật ngữ CNTT.
• Bên gửi và bên nhận thông tin cố định
```

**memoryTip**
```
(trống)
```

---

### 221/400 · `jit` id=183 · task=`sample` · num=52 · ans **B**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
【専門知識】1文字を表現するために、16ビット（2バイト）のデータ量を使用する文字コードは何ですか。
```

**Options**

- **A.** ASCIIコード
- **B.** Unicode ✅
- **C.** シフトJISコード
- **D.** EUC

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | 【Chuyên môn】Chọn đáp án đúng theo kiến thức trong đề. |
| optionsVi.A | mã ASCII |
| optionsVi.B | Unicode |
| optionsVi.C | mã Shift_JIS |
| optionsVi.D | EUC |
| answerDisplay | B. Unicode |

**concept**
```
• Mã ký tự: dữ liệu chữ được ghi dưới dạng dãy bit/số (0 và 1), không lưu «hình chữ» nguyên thủy.
• Unicode
```

**whyCorrect**
```
• Unicode
• Máy chỉ lưu mã số 0/1; «chữ» là cách diễn giải theo bảng mã (ASCII, Unicode…).
```

**whyWrong**

##### A
```
• Là gì? ASCIIコード (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «ASCIIコード» (A) không thỏa: khớp đáp án «Unicode».
```

##### C
```
• Là gì? シフトJISコード (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «シフトJISコード» (C) không thỏa: khớp đáp án «Unicode».
```

##### D
```
• Là gì? EUC — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «EUC» (D) không thỏa: khớp đáp án «Unicode».
```

**whatIs**
```
{
  "A": "ASCIIコード (thuật ngữ JP).",
  "B": "Unicode — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "シフトJISコード (thuật ngữ JP).",
  "D": "EUC — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Mã ký tự: quy tắc map ký tự ↔ mã số nhị phân.
• Chọn phát biểu đúng về bản chất lưu chữ trong máy tính.
```

**memoryTip**
```
• mã ký tự (character code) = mã ký tự
• Chữ trên màn hình ← decode dãy 0/1 theo bảng mã.
```

---

### 222/400 · `jit` id=315 · task=`slides` · num=295 · ans **B**

- **flags:** khop_dap_an
- **status:** `todo`

**Đề gốc**

```
スカベンジングといって、残された個人情報を（ ）する犯罪もあります。
```

**Options**

- **A.** 管理（かんり）：Quản lý
- **B.** 収集（しゅうしゅう）：Thu thập ✅
- **C.** 削除（さくじょ）：Xóa bỏ
- **D.** 整理（せいり）：Sắp xếp

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Điền từ thích hợp vào chỗ trống (xem câu gốc). |
| optionsVi.A | Quản lý |
| optionsVi.B | 収集（しゅうしゅう）：Thu thập — khái niệm kỹ thuật |
| optionsVi.C | Xóa bỏ |
| optionsVi.D | 整理（せいり）：Sắp xếp — khái niệm kỹ thuật |
| answerDisplay | B. 収集（しゅうしゅう）：Thu thập — khái niệm kỹ thuật |

**concept**
```
• Thu thập
• Nghĩa: Thu thập.
```

**whyCorrect**
```
• Thu thập — 「thu thập」 tội phạm / hành vi phạm tội （§7.5）。
• Thu thập
• Đáp án B: Thu thập
```

**whyWrong**

##### A
```
• Là gì? 管理（かんり）：Quản lý
• Dùng để làm gì? Thuật ngữ/phát biểu trong miền CNTT tiếng Nhật.
• Vì sao sai? «管理（かんり）：Quản lý» (A) không thỏa: khớp đáp án «収集（しゅうしゅう）：Thu thập».
```

##### C
```
• Là gì? 削除（さくじょ）：Xóa bỏ
• Dùng để làm gì? Thuật ngữ/phát biểu trong miền CNTT tiếng Nhật.
• Vì sao sai? «削除（さくじょ）：Xóa bỏ» (C) không thỏa: khớp đáp án «収集（しゅうしゅう）：Thu thập».
```

##### D
```
• Là gì? 整理（せいり）：Sắp xếp (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «整理（せいり）：Sắp xếp» (D) không thỏa: khớp đáp án «収集（しゅうしゅう）：Thu thập».
```

**whatIs**
```
{
  "A": "管理（かんり）：Quản lý",
  "B": "収集（しゅうしゅう）：Thu thập (thuật ngữ JP).",
  "C": "削除（さくじょ）：Xóa bỏ",
  "D": "整理（せいり）：Sắp xếp (thuật ngữ JP)."
}
```

**intent**
```
• Câu JIT: nắm định nghĩa/thứ tự/thuật ngữ CNTT.
• Thu thập
```

**memoryTip**
```
(trống)
```

---

### 223/400 · `jit` id=316 · task=`slides` · num=297 · ans **A**

- **flags:** khop_dap_an
- **status:** `todo`

**Đề gốc**

```
【専門知識】「.com」のように種別だけで国名がないのはどの国のドメイン名ですか。
```

**Options**

- **A.** アメリカ ✅
- **B.** 日本
- **C.** オーストラリア
- **D.** ベトナム

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | 【Chuyên môn】Chọn đáp án đúng theo kiến thức trong đề. |
| optionsVi.A | アメリカ — khái niệm kỹ thuật |
| optionsVi.B | Nhật Bản |
| optionsVi.C | Úc |
| optionsVi.D | ベトナム — khái niệm kỹ thuật |
| answerDisplay | A. アメリカ — khái niệm kỹ thuật |

**concept**
```
• Mỹ
• Thuật ngữ: Mỹ.
```

**whyCorrect**
```
• Khái niệm CNTT trong đề thi JIT.
• Khớp stem: khớp đáp án «アメリカ».
```

**whyWrong**

##### B
```
• Là gì? 日本 (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «日本» (B) không thỏa: khớp đáp án «アメリカ».
```

##### C
```
• Là gì? オーストラリア (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «オーストラリア» (C) không thỏa: khớp đáp án «アメリカ».
```

##### D
```
• Là gì? ベトナム (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «ベトナム» (D) không thỏa: khớp đáp án «アメリカ».
```

**whatIs**
```
{
  "A": "アメリカ (thuật ngữ JP).",
  "B": "日本 (thuật ngữ JP).",
  "C": "オーストラリア (thuật ngữ JP).",
  "D": "ベトナム (thuật ngữ JP)."
}
```

**intent**
```
• Câu JIT: nắm định nghĩa/thứ tự/thuật ngữ CNTT.
• Mỹ
```

**memoryTip**
```
(trống)
```

---

### 224/400 · `jit` id=317 · task=`slides` · num=298 · ans **A**

- **flags:** khop_dap_an
- **status:** `todo`

**Đề gốc**

```
【専門知識】HTMLとは;Hyper Text Markup Languageの略で、文字の（ ）、音、ファイルへのリンクなどが記述できます。
```

**Options**

- **A.** 種類・配置・画像・動画 ✅
- **B.** 種類・機器・画像・動画
- **C.** 種類・配置・転送・動画
- **D.** 種類・配置・画像・装置

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | 【Chuyên môn】Chọn đáp án đúng theo kiến thức trong đề. |
| optionsVi.A | loại · bố cục · ảnh · video |
| optionsVi.B | loại · thiết bị · ảnh · video |
| optionsVi.C | loại · bố cục · truyền · video |
| optionsVi.D | loại · bố cục · ảnh · thiết bị |
| answerDisplay | A. loại · bố cục · ảnh · video |

**concept**
```
• loại · bố cục · ảnh · video
• Thuật ngữ: loại · bố cục · ảnh · video.
```

**whyCorrect**
```
• loại · bố cục · ảnh · video
• Đáp án A: loại · bố cục · ảnh · video
```

**whyWrong**

##### B
```
• Là gì? 種類・機器・画像・動画 (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «種類・機器・画像・動画» (B) không thỏa: khớp đáp án «種類・配置・画像・動画».
```

##### C
```
• Là gì? 種類・配置・転送・動画 (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «種類・配置・転送・動画» (C) không thỏa: khớp đáp án «種類・配置・画像・動画».
```

##### D
```
• Là gì? 種類・配置・画像・装置 (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «種類・配置・画像・装置» (D) không thỏa: khớp đáp án «種類・配置・画像・動画».
```

**whatIs**
```
{
  "A": "種類・配置・画像・動画 (thuật ngữ JP).",
  "B": "種類・機器・画像・動画 (thuật ngữ JP).",
  "C": "種類・配置・転送・動画 (thuật ngữ JP).",
  "D": "種類・配置・画像・装置 (thuật ngữ JP)."
}
```

**intent**
```
• Câu JIT: nắm định nghĩa/thứ tự/thuật ngữ CNTT.
• loại · bố cục · ảnh · video
```

**memoryTip**
```
(trống)
```

---

### 225/400 · `jit` id=318 · task=`slides` · num=299 · ans **A**

- **flags:** khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Web2.0とは何ですか。
```

**Options**

- **A.** 双方向型のホームページ ✅
- **B.** 一方向的なアドレス
- **C.** 双方向型のアドレス
- **D.** 一方向的なホームページ

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | «Web2.0» là gì? |
| optionsVi.A | 双方向型のホームページ — khái niệm kỹ thuật |
| optionsVi.B | địa chỉ một chiều |
| optionsVi.C | địa chỉ hai chiều |
| optionsVi.D | 一方向的なホームページ — khái niệm kỹ thuật |
| answerDisplay | A. 双方向型のホームページ — khái niệm kỹ thuật |

**concept**
```
• trang web hai chiều
• Thuật ngữ: trang web hai chiều.
```

**whyCorrect**
```
• kiểu hai chiều — Web 2.0 trang web hai chiều（ ） （§2.2）。
• trang web hai chiều
• Đáp án A: trang web hai chiều
```

**whyWrong**

##### B
```
• Là gì? 一方向的なアドレス (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «一方向的なアドレス» (B) không thỏa: khớp đáp án «双方向型のホームページ».
```

##### C
```
• Là gì? 双方向型のアドレス (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «双方向型のアドレス» (C) không thỏa: khớp đáp án «双方向型のホームページ».
```

##### D
```
• Là gì? 一方向的なホームページ (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «一方向的なホームページ» (D) không thỏa: khớp đáp án «双方向型のホームページ».
```

**whatIs**
```
{
  "A": "双方向型のホームページ (thuật ngữ JP).",
  "B": "一方向的なアドレス (thuật ngữ JP).",
  "C": "双方向型のアドレス (thuật ngữ JP).",
  "D": "一方向的なホームページ (thuật ngữ JP)."
}
```

**intent**
```
• Câu JIT: nắm định nghĩa/thứ tự/thuật ngữ CNTT.
• trang web hai chiều
```

**memoryTip**
```
(trống)
```

---

### 226/400 · `jit` id=319 · task=`slides` · num=300 · ans **C**

- **flags:** khop_dap_an
- **status:** `todo`

**Đề gốc**

```
【専門知識】「マウスやキーボードの操作の仕方、ウィンドウの見え方、ファイルの扱い方などを決定します」はOS機能の何の内容を指しますか。
```

**Options**

- **A.** ソフトとハードの仲介
- **B.** ユーザ管理
- **C.** ユーザインタフェース ✅
- **D.** プロセス管理

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | 【Chuyên môn】Chọn đáp án đúng theo kiến thức trong đề. |
| optionsVi.A | trung gian phần mềm và phần cứng |
| optionsVi.B | quản lý người dùng |
| optionsVi.C | giao diện người dùng (UI) |
| optionsVi.D | quản lý process |
| answerDisplay | C. giao diện người dùng (UI) |

**concept**
```
• giao diện người dùng (UI)
• Thuật ngữ: giao diện người dùng (UI).
```

**whyCorrect**
```
• giao diện người dùng (UI)
• Đáp án C: giao diện người dùng (UI)
```

**whyWrong**

##### A
```
• Là gì? ソフトとハードの仲介 (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «ソフトとハードの仲介» (A) không thỏa: khớp đáp án «ユーザインタフェース».
```

##### B
```
• Là gì? ユーザ管理 (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «ユーザ管理» (B) không thỏa: khớp đáp án «ユーザインタフェース».
```

##### D
```
• Là gì? プロセス管理 (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «プロセス管理» (D) không thỏa: khớp đáp án «ユーザインタフェース».
```

**whatIs**
```
{
  "A": "ソフトとハードの仲介 (thuật ngữ JP).",
  "B": "ユーザ管理 (thuật ngữ JP).",
  "C": "ユーザインタフェース (thuật ngữ JP).",
  "D": "プロセス管理 (thuật ngữ JP)."
}
```

**intent**
```
• Câu JIT: nắm định nghĩa/thứ tự/thuật ngữ CNTT.
• giao diện người dùng (UI)
```

**memoryTip**
```
(trống)
```

---

### 227/400 · `jit` id=320 · task=`slides` · num=301 · ans **A**

- **flags:** khop_dap_an
- **status:** `todo`

**Đề gốc**

```
【専門知識】CPUの動作原理は何に基づいていますか。
```

**Options**

- **A.** チューリングマシン ✅
- **B.** ダイオード
- **C.** オートマトン
- **D.** トランジスタ

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | 【Chuyên môn】Chọn đáp án đúng theo kiến thức trong đề. |
| optionsVi.A | máy Turing |
| optionsVi.B | ダイオード — khái niệm kỹ thuật |
| optionsVi.C | automaton (ô tô-mát) |
| optionsVi.D | トランジスタ — khái niệm kỹ thuật |
| answerDisplay | A. máy Turing |

**concept**
```
• máy Turing
• Thuật ngữ: máy Turing.
```

**whyCorrect**
```
• máy Turing — CPU máy Turing （§11.3）。
• máy Turing
• Đáp án A: máy Turing
```

**whyWrong**

##### B
```
• Là gì? ダイオード (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «ダイオード» (B) không thỏa: khớp đáp án «チューリングマシン».
```

##### C
```
• Là gì? オートマトン (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «オートマトン» (C) không thỏa: khớp đáp án «チューリングマシン».
```

##### D
```
• Là gì? トランジスタ (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «トランジスタ» (D) không thỏa: khớp đáp án «チューリングマシン».
```

**whatIs**
```
{
  "A": "チューリングマシン (thuật ngữ JP).",
  "B": "ダイオード (thuật ngữ JP).",
  "C": "オートマトン (thuật ngữ JP).",
  "D": "トランジスタ (thuật ngữ JP)."
}
```

**intent**
```
• Câu JIT: nắm định nghĩa/thứ tự/thuật ngữ CNTT.
• máy Turing
```

**memoryTip**
```
(trống)
```

---

### 228/400 · `jit` id=321 · task=`slides` · num=303 · ans **C**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
【専門知識】光ファイバを使って家庭まで高速通信を行うことは何でしょう。
```

**Options**

- **A.** CATV
- **B.** ADSL
- **C.** FTTH ✅
- **D.** SDSL

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | 【Chuyên môn】Chọn đáp án đúng theo kiến thức trong đề. |
| optionsVi.A | CATV |
| optionsVi.B | ADSL |
| optionsVi.C | FTTH |
| optionsVi.D | SDSL |
| answerDisplay | C. FTTH |

**concept**
```
• FTTH
• Nghĩa: FTTH.
```

**whyCorrect**
```
• Có vai trò riêng; đối chiếu với điều kiện stem.
• Khớp stem: khớp đáp án «FTTH».
```

**whyWrong**

##### A
```
• Là gì? CATV — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «CATV» (A) không thỏa: khớp đáp án «FTTH».
```

##### B
```
• Là gì? ADSL — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «ADSL» (B) không thỏa: khớp đáp án «FTTH».
```

##### D
```
• Là gì? SDSL — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «SDSL» (D) không thỏa: khớp đáp án «FTTH».
```

**whatIs**
```
{
  "A": "CATV — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "ADSL — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "FTTH — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "SDSL — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Câu JIT: nắm định nghĩa/thứ tự/thuật ngữ CNTT.
• FTTH
```

**memoryTip**
```
(trống)
```

---

### 229/400 · `jit` id=324 · task=`slides` · num=306 · ans **C**

- **flags:** khop_dap_an
- **status:** `todo`

**Đề gốc**

```
【専門知識】Web2.0の大きな特徴は何ですか。
```

**Options**

- **A.** シェアウェアがある
- **B.** キャラクターがある
- **C.** ロングテールがある ✅
- **D.** ソースコードがある

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | 【Chuyên môn】Chọn đáp án đúng theo kiến thức trong đề. |
| optionsVi.A | có shareware |
| optionsVi.B | có ký tự/nhân vật |
| optionsVi.C | có long tail |
| optionsVi.D | mã nguồn |
| answerDisplay | C. có long tail |

**concept**
```
• có long tail
• Thuật ngữ: có long tail.
```

**whyCorrect**
```
• Khái niệm CNTT trong đề thi JIT.
• Khớp stem: khớp đáp án «ロングテールがある».
```

**whyWrong**

##### A
```
• Là gì? シェアウェアがある (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «シェアウェアがある» (A) không thỏa: khớp đáp án «ロングテールがある».
```

##### B
```
• Là gì? キャラクターがある (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «キャラクターがある» (B) không thỏa: khớp đáp án «ロングテールがある».
```

##### D
```
• Là gì? ソースコードがある (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «ソースコードがある» (D) không thỏa: khớp đáp án «ロングテールがある».
```

**whatIs**
```
{
  "A": "シェアウェアがある (thuật ngữ JP).",
  "B": "キャラクターがある (thuật ngữ JP).",
  "C": "ロングテールがある (thuật ngữ JP).",
  "D": "ソースコードがある (thuật ngữ JP)."
}
```

**intent**
```
• Câu JIT: nắm định nghĩa/thứ tự/thuật ngữ CNTT.
• có long tail
```

**memoryTip**
```
(trống)
```

---

### 230/400 · `jit` id=325 · task=`slides` · num=307 · ans **D**

- **flags:** khop_dap_an
- **status:** `todo`

**Đề gốc**

```
ユーザからの入力は何から行えますか。
```

**Options**

- **A.** プリンター
- **B.** 画面
- **C.** ディスプレイ
- **D.** キーボードやマウス ✅

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Người dùng có thể nhập liệu từ đâu? |
| optionsVi.A | máy in |
| optionsVi.B | màn hình / khung hình |
| optionsVi.C | màn hình |
| optionsVi.D | bàn phím |
| answerDisplay | D. bàn phím |

**concept**
```
• bàn phím
• Nghĩa: bàn phím.
```

**whyCorrect**
```
• Khái niệm CNTT trong đề thi JIT.
• Khớp stem: khớp đáp án «キーボードやマウス».
```

**whyWrong**

##### A
```
• Là gì? プリンター (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «プリンター» (A) không thỏa: khớp đáp án «キーボードやマウス».
```

##### B
```
• Là gì? 画面 (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «画面» (B) không thỏa: khớp đáp án «キーボードやマウス».
```

##### C
```
• Là gì? ディスプレイ (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «ディスプレイ» (C) không thỏa: khớp đáp án «キーボードやマウス».
```

**whatIs**
```
{
  "A": "プリンター (thuật ngữ JP).",
  "B": "画面 (thuật ngữ JP).",
  "C": "ディスプレイ (thuật ngữ JP).",
  "D": "キーボードやマウス (thuật ngữ JP)."
}
```

**intent**
```
• Câu JIT: nắm định nghĩa/thứ tự/thuật ngữ CNTT.
• bàn phím
```

**memoryTip**
```
(trống)
```

---

### 231/400 · `jit` id=326 · task=`slides` · num=308 · ans **A**

- **flags:** khop_dap_an
- **status:** `todo`

**Đề gốc**

```
【専門知識】「ヒューマンインタフェースの設計は；（ ）検討時では十分に行えないことが多く；試作プログラムを作ってみて問題点を修正していくというやり方になります。」
```

**Options**

- **A.** アルゴリズム ✅
- **B.** ソーティング
- **C.** マージソート
- **D.** フローチャート

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | 【Chuyên môn】Chọn đáp án đúng theo kiến thức trong đề. |
| optionsVi.A | thuật toán |
| optionsVi.B | ソーティング — khái niệm kỹ thuật |
| optionsVi.C | マージソート — khái niệm kỹ thuật |
| optionsVi.D | lưu đồ (flowchart) |
| answerDisplay | A. thuật toán |

**concept**
```
• thuật toán
• Thuật ngữ: thuật toán.
```

**whyCorrect**
```
• Khái niệm CNTT trong đề thi JIT.
• Khớp stem: khớp đáp án «アルゴリズム».
```

**whyWrong**

##### B
```
• Là gì? ソーティング (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «ソーティング» (B) không thỏa: khớp đáp án «アルゴリズム».
```

##### C
```
• Là gì? マージソート (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «マージソート» (C) không thỏa: khớp đáp án «アルゴリズム».
```

##### D
```
• Là gì? フローチャート (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «フローチャート» (D) không thỏa: khớp đáp án «アルゴリズム».
```

**whatIs**
```
{
  "A": "アルゴリズム (thuật ngữ JP).",
  "B": "ソーティング (thuật ngữ JP).",
  "C": "マージソート (thuật ngữ JP).",
  "D": "フローチャート (thuật ngữ JP)."
}
```

**intent**
```
• Câu JIT: nắm định nghĩa/thứ tự/thuật ngữ CNTT.
• thuật toán
```

**memoryTip**
```
(trống)
```

---

### 232/400 · `jit` id=327 · task=`slides` · num=309 · ans **B**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
【専門知識】電気機械式はいつ誕生されましたか。
```

**Options**

- **A.** 1946
- **B.** 1930 ✅
- **C.** 1949
- **D.** 1939

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | 【Chuyên môn】Chọn đáp án đúng theo kiến thức trong đề. |
| optionsVi.A | 1946 |
| optionsVi.B | 1930 |
| optionsVi.C | 1949 |
| optionsVi.D | 1939 |
| answerDisplay | B. 1930 |

**concept**
```
• 1930
• Nghĩa: 1930.
```

**whyCorrect**
```
• Có vai trò riêng; đối chiếu với điều kiện stem.
• Khớp stem: khớp đáp án «1930».
```

**whyWrong**

##### A
```
• Là gì? 1946 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «1946» (A) không thỏa: khớp đáp án «1930».
```

##### C
```
• Là gì? 1949 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «1949» (C) không thỏa: khớp đáp án «1930».
```

##### D
```
• Là gì? 1939 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «1939» (D) không thỏa: khớp đáp án «1930».
```

**whatIs**
```
{
  "A": "1946 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "1930 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "1949 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "1939 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Câu JIT: nắm định nghĩa/thứ tự/thuật ngữ CNTT.
• 1930
```

**memoryTip**
```
(trống)
```

---

### 233/400 · `jit` id=330 · task=`slides` · num=312 · ans **B**

- **flags:** khop_dap_an
- **status:** `todo`

**Đề gốc**

```
着信メロディについて正しくないものを選びなさい。
```

**Options**

- **A.** 着信メロディのデータは、音楽用のコードと解釈されます
- **B.** 高音質な楽曲再生が可能です ✅
- **C.** 高音質な楽曲再生が不可能です
- **D.** モジュレーションなどにより表現されています

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Chọn phát biểu SAI về nhạc chuông (ringtone). |
| optionsVi.A | Dữ liệu nhạc chuông được hiểu là mã âm nhạc |
| optionsVi.B | có thể phát nhạc chất lượng cao |
| optionsVi.C | không thể phát nhạc chất lượng cao |
| optionsVi.D | Biểu diễn bằng điều chế (modulation) v.v. |
| answerDisplay | B. có thể phát nhạc chất lượng cao |

**concept**
```
• có thể phát nhạc chất lượng cao
• Thuật ngữ: có thể phát nhạc chất lượng cao.
```

**whyCorrect**
```
• có thể phát nhạc chất lượng cao
• Đáp án B: có thể phát nhạc chất lượng cao
```

**whyWrong**

##### A
```
• Là gì? 着信メロディのデータは、音楽用のコードと解釈されます (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «着信メロディのデータは、音楽用のコードと解釈されます» (A) không thỏa: khớp đáp án «高音質な楽曲再生が可能です».
```

##### C
```
• Là gì? 高音質な楽曲再生が不可能です (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «高音質な楽曲再生が不可能です» (C) không thỏa: khớp đáp án «高音質な楽曲再生が可能です».
```

##### D
```
• Là gì? モジュレーションなどにより表現されています (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «モジュレーションなどにより表現されています» (D) không thỏa: khớp đáp án «高音質な楽曲再生が可能です».
```

**whatIs**
```
{
  "A": "着信メロディのデータは、音楽用のコードと解釈されます (thuật ngữ JP).",
  "B": "高音質な楽曲再生が可能です (thuật ngữ JP).",
  "C": "高音質な楽曲再生が不可能です (thuật ngữ JP).",
  "D": "モジュレーションなどにより表現されています (thuật ngữ JP)."
}
```

**intent**
```
• Câu JIT: nắm định nghĩa/thứ tự/thuật ngữ CNTT.
• có thể phát nhạc chất lượng cao
```

**memoryTip**
```
(trống)
```

---

### 234/400 · `jit` id=331 · task=`slides` · num=321 · ans **B**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
【専門用語】ジョン・モークリー（John Mauchly） の意味として最も適切なものはどれか。
```

**Options**

- **A.** kích trái chuột
- **B.** John Mauchly ✅
- **C.** tệp dữ liệu
- **D.** Bi ểu tượng

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | 【Thuật ngữ】Nghĩa nào phù hợp nhất với «John Mauchly»? |
| optionsVi.A | kích trái chuột |
| optionsVi.B | John Mauchly |
| optionsVi.C | tệp dữ liệu |
| optionsVi.D | Bi ểu tượng |
| answerDisplay | B. John Mauchly |

**concept**
```
• «John Mauchly» → John Mauchly
• Nghĩa: John Mauchly.
```

**whyCorrect**
```
• Analog continuous signal.
• Khớp stem: bản dịch thuật ngữ JP↔VI đúng.
```

**whyWrong**

##### A
```
• Là gì? kích trái chuột — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «kích trái chuột» (A) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### C
```
• Là gì? tệp dữ liệu — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «tệp dữ liệu» (C) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### D
```
• Là gì? Bi ểu tượng — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Bi ểu tượng» (D) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

**whatIs**
```
{
  "A": "kích trái chuột — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Tín hiệu tương tự liên tục (dòng/áp…).",
  "C": "tệp dữ liệu — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Bi ểu tượng — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Chọn định nghĩa/nghĩa phù hợp nhất với thuật ngữ trong đề.
• Thuật ngữ: «John Mauchly»
```

**memoryTip**
```
• John Mauchly ≈ John Mauchly
• Ưu tiên định nghĩa chuẩn giáo trình, không dịch word-by-word lệch.
```

---

### 235/400 · `jit` id=332 · task=`slides` · num=322 · ans **C**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
【専門用語】パス（path） の意味として最も適切なものはどれか。
```

**Options**

- **A.** máy tính cơ điện
- **B.** xem , duyệt
- **C.** đường dẫn ✅
- **D.** Bi ểu tượng

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | 【Thuật ngữ】Nghĩa nào phù hợp nhất với «đường dẫn (path)»? |
| optionsVi.A | máy tính cơ điện |
| optionsVi.B | xem , duyệt |
| optionsVi.C | đường dẫn |
| optionsVi.D | Bi ểu tượng |
| answerDisplay | C. đường dẫn |

**concept**
```
• «đường dẫn (path)（path）» → đường dẫn
• Nghĩa: đường dẫn.
```

**whyCorrect**
```
• Sau khi cài/thêm PATH, doctor xác nhận toolchain sẵn sàng.
```

**whyWrong**

##### A
```
• Là gì? máy tính cơ điện — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «máy tính cơ điện» (A) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### B
```
• Là gì? xem , duyệt — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «xem , duyệt» (B) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### D
```
• Là gì? Bi ểu tượng — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Bi ểu tượng» (D) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

**whatIs**
```
{
  "A": "máy tính cơ điện — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "xem , duyệt — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "đường dẫn — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Bi ểu tượng — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Chọn định nghĩa/nghĩa phù hợp nhất với thuật ngữ trong đề.
• Thuật ngữ: «đường dẫn (path)（path）»
```

**memoryTip**
```
• đường dẫn (path)（path） ≈ đường dẫn
• Ưu tiên định nghĩa chuẩn giáo trình, không dịch word-by-word lệch.
```

---

### 236/400 · `jit` id=333 · task=`slides` · num=323 · ans **C**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
【専門用語】ライプニッツの乗算機（Leibniz のじょうさんき） の意味として最も適切なものはどれか。
```

**Options**

- **A.** tên ổ đĩa
- **B.** xem , duyệt
- **C.** máy tính Leibniz ✅
- **D.** hình ảnh

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | 【Thuật ngữ】Nghĩa nào phù hợp nhất với thuật ngữ trong đề? |
| optionsVi.A | tên ổ đĩa |
| optionsVi.B | xem , duyệt |
| optionsVi.C | máy tính Leibniz |
| optionsVi.D | hình ảnh |
| answerDisplay | C. máy tính Leibniz |

**concept**
```
• «máy nhân Leibniz（Leibniz ）» → máy tính Leibniz
• Nghĩa: máy tính Leibniz.
```

**whyCorrect**
```
• Có vai trò riêng; đối chiếu với điều kiện stem.
• Khớp stem: bản dịch thuật ngữ JP↔VI đúng.
```

**whyWrong**

##### A
```
• Là gì? tên ổ đĩa — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «tên ổ đĩa» (A) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### B
```
• Là gì? xem , duyệt — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «xem , duyệt» (B) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### D
```
• Là gì? hình ảnh — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «hình ảnh» (D) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

**whatIs**
```
{
  "A": "tên ổ đĩa — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "xem , duyệt — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "máy tính Leibniz — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "hình ảnh — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Chọn định nghĩa/nghĩa phù hợp nhất với thuật ngữ trong đề.
• Thuật ngữ: «máy nhân Leibniz（Leibniz ）»
```

**memoryTip**
```
• máy nhân Leibniz（Leibniz ） ≈ máy tính Leibniz
• Ưu tiên định nghĩa chuẩn giáo trình, không dịch word-by-word lệch.
```

---

### 237/400 · `jit` id=334 · task=`slides` · num=324 · ans **A**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
【専門用語】フォン・ノイマン（John von Neumann） の意味として最も適切なものはどれか。
```

**Options**

- **A.** John von Neumann ✅
- **B.** thư mục mẹ
- **C.** Bộ tính toán tự động B ộ nhớ trì hoãn điện tử
- **D.** số hóa / kỹ thuật số

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | 【Thuật ngữ】Nghĩa nào phù hợp nhất với «John von Neumann»? |
| optionsVi.A | John von Neumann |
| optionsVi.B | thư mục mẹ |
| optionsVi.C | Bộ tính toán tự động B ộ nhớ trì hoãn điện tử |
| optionsVi.D | số hóa / kỹ thuật số |
| answerDisplay | A. John von Neumann |

**concept**
```
• «John von Neumann» → John von Neumann
• Nghĩa: John von Neumann.
```

**whyCorrect**
```
• Analog continuous signal.
• Khớp stem: bản dịch thuật ngữ JP↔VI đúng.
```

**whyWrong**

##### B
```
• Là gì? thư mục mẹ — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «thư mục mẹ» (B) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### C
```
• Là gì? Bộ tính toán tự động B ộ nhớ trì hoãn điện tử
• Dùng để làm gì? Phạm trù/khái niệm trong lý thuyết đề cập.
• Vì sao sai? «Bộ tính toán tự động B ộ nhớ trì hoãn điện tử» (C) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### D
```
• Là gì? Tín hiệu/dữ liệu số (rời rạc, 0/1).
• Dùng để làm gì? Digital representation.
• Vì sao sai? «số hóa / kỹ thuật số» (D) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

**whatIs**
```
{
  "A": "Tín hiệu tương tự liên tục (dòng/áp…).",
  "B": "thư mục mẹ — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Bộ tính toán tự động B ộ nhớ trì hoãn điện tử",
  "D": "Tín hiệu/dữ liệu số (rời rạc, 0/1)."
}
```

**intent**
```
• Chọn định nghĩa/nghĩa phù hợp nhất với thuật ngữ trong đề.
• Thuật ngữ: «John von Neumann»
```

**memoryTip**
```
• John von Neumann ≈ John von Neumann
• Ưu tiên định nghĩa chuẩn giáo trình, không dịch word-by-word lệch.
```

---

### 238/400 · `jit` id=335 · task=`slides` · num=325 · ans **C**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
【専門用語】ファイル（file） の意味として最も適切なものはどれか。
```

**Options**

- **A.** thiết bị nhớ ngoài
- **B.** thư mục cháu
- **C.** tệp dữ liệu ✅
- **D.** siêu máy tính

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | 【Thuật ngữ】Nghĩa nào phù hợp nhất với «tệp (file)»? |
| optionsVi.A | thiết bị nhớ ngoài |
| optionsVi.B | thư mục cháu |
| optionsVi.C | tệp dữ liệu |
| optionsVi.D | siêu máy tính |
| answerDisplay | C. tệp dữ liệu |

**concept**
```
• «tệp (file)（file）» → tệp dữ liệu
• Nghĩa: tệp dữ liệu.
```

**whyCorrect**
```
• Có vai trò riêng; đối chiếu với điều kiện stem.
• Khớp stem: bản dịch thuật ngữ JP↔VI đúng.
```

**whyWrong**

##### A
```
• Là gì? thiết bị nhớ ngoài — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «thiết bị nhớ ngoài» (A) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### B
```
• Là gì? thư mục cháu — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «thư mục cháu» (B) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### D
```
• Là gì? siêu máy tính — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «siêu máy tính» (D) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

**whatIs**
```
{
  "A": "thiết bị nhớ ngoài — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "thư mục cháu — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "tệp dữ liệu — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "siêu máy tính — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Chọn định nghĩa/nghĩa phù hợp nhất với thuật ngữ trong đề.
• Thuật ngữ: «tệp (file)（file）»
```

**memoryTip**
```
• tệp (file)（file） ≈ tệp dữ liệu
• Ưu tiên định nghĩa chuẩn giáo trình, không dịch word-by-word lệch.
```

---

### 239/400 · `jit` id=336 · task=`slides` · num=326 · ans **B**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
【専門用語】汎用計算機（はんようけいさんき） の意味として最も適切なものはどれか。
```

**Options**

- **A.** kích
- **B.** máy tính đa dụng ✅
- **C.** trạm làm việc
- **D.** cấu trúc hình cây

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | 【Thuật ngữ】Nghĩa nào phù hợp nhất với «máy tính đa dụng»? |
| optionsVi.A | kích |
| optionsVi.B | máy tính đa dụng |
| optionsVi.C | trạm làm việc |
| optionsVi.D | cấu trúc hình cây |
| answerDisplay | B. máy tính đa dụng |

**concept**
```
• «máy tính đa dụng（ ）» → máy tính đa dụng
• Nghĩa: máy tính đa dụng.
```

**whyCorrect**
```
• Có vai trò riêng; đối chiếu với điều kiện stem.
• Khớp stem: bản dịch thuật ngữ JP↔VI đúng.
```

**whyWrong**

##### A
```
• Là gì? kích — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «kích» (A) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### C
```
• Là gì? trạm làm việc — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «trạm làm việc» (C) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### D
```
• Là gì? cấu trúc hình cây — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «cấu trúc hình cây» (D) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

**whatIs**
```
{
  "A": "kích — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "máy tính đa dụng — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "trạm làm việc — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "cấu trúc hình cây — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Chọn định nghĩa/nghĩa phù hợp nhất với thuật ngữ trong đề.
• Thuật ngữ: «máy tính đa dụng（ ）»
```

**memoryTip**
```
• máy tính đa dụng（ ） ≈ máy tính đa dụng
• Ưu tiên định nghĩa chuẩn giáo trình, không dịch word-by-word lệch.
```

---

### 240/400 · `jit` id=337 · task=`slides` · num=327 · ans **C**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
【専門用語】アプリケーション（a pplication） の意味として最も適切なものはどれか。
```

**Options**

- **A.** John Eckert
- **B.** máy tính đa dụng cỡ lớn
- **C.** Ứ ng dụng ✅
- **D.** hình ảnh

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | 【Thuật ngữ】Nghĩa nào phù hợp nhất với «ứng dụng (application)»? |
| optionsVi.A | John Eckert |
| optionsVi.B | máy tính đa dụng cỡ lớn |
| optionsVi.C | Ứ ng dụng |
| optionsVi.D | hình ảnh |
| answerDisplay | C. Ứ ng dụng |

**concept**
```
• «ứng dụng (application)（a pplication）» → Ứ ng dụng
• Nghĩa: Ứ ng dụng.
```

**whyCorrect**
```
• Có vai trò riêng; đối chiếu với điều kiện stem.
• Khớp stem: bản dịch thuật ngữ JP↔VI đúng.
```

**whyWrong**

##### A
```
• Là gì? John Eckert — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «John Eckert» (A) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### B
```
• Là gì? máy tính đa dụng cỡ lớn
• Dùng để làm gì? Phạm trù/khái niệm trong lý thuyết đề cập.
• Vì sao sai? «máy tính đa dụng cỡ lớn» (B) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### D
```
• Là gì? hình ảnh — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «hình ảnh» (D) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

**whatIs**
```
{
  "A": "John Eckert — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "máy tính đa dụng cỡ lớn",
  "C": "Ứ ng dụng — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "hình ảnh — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Chọn định nghĩa/nghĩa phù hợp nhất với thuật ngữ trong đề.
• Thuật ngữ: «ứng dụng (application)（a pplication）»
```

**memoryTip**
```
• ứng dụng (application)（a pplication） ≈ Ứ ng dụng
• Ưu tiên định nghĩa chuẩn giáo trình, không dịch word-by-word lệch.
```

---

### 241/400 · `jit` id=338 · task=`slides` · num=328 · ans **B**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
【専門用語】子供のフォルダ（こどもの folder） の意味として最も適切なものはどれか。
```

**Options**

- **A.** Bộ nhớ USB
- **B.** thư mục con ✅
- **C.** xem , duyệt
- **D.** đĩa cứng

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | 【Thuật ngữ】Nghĩa nào phù hợp nhất với «thư mục con»? |
| optionsVi.A | Bộ nhớ USB |
| optionsVi.B | thư mục con |
| optionsVi.C | xem , duyệt |
| optionsVi.D | đĩa cứng |
| answerDisplay | B. thư mục con |

**concept**
```
• «thư mục con（ folder）» → thư mục con
• Nghĩa: thư mục con.
```

**whyCorrect**
```
• Có vai trò riêng; đối chiếu với điều kiện stem.
• Khớp stem: bản dịch thuật ngữ JP↔VI đúng.
```

**whyWrong**

##### A
```
• Là gì? Bộ nhớ USB — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Bộ nhớ USB» (A) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### C
```
• Là gì? xem , duyệt — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «xem , duyệt» (C) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### D
```
• Là gì? đĩa cứng — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «đĩa cứng» (D) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

**whatIs**
```
{
  "A": "Bộ nhớ USB — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "thư mục con — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "xem , duyệt — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "đĩa cứng — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Chọn định nghĩa/nghĩa phù hợp nhất với thuật ngữ trong đề.
• Thuật ngữ: «thư mục con（ folder）»
```

**memoryTip**
```
• thư mục con（ folder） ≈ thư mục con
• Ưu tiên định nghĩa chuẩn giáo trình, không dịch word-by-word lệch.
```

---

### 242/400 · `jit` id=349 · task=`slides` · num=339 · ans **A**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
【専門用語】不公平（ふこうへい） の意味として最も適切なものはどれか。
```

**Options**

- **A.** không công bằng ✅
- **B.** quyền sở hữu công nghiệp
- **C.** điện toán đám mây
- **D.** định dạng tập tin

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | 【Thuật ngữ】Nghĩa nào phù hợp nhất với «không công bằng»? |
| optionsVi.A | không công bằng |
| optionsVi.B | quyền sở hữu công nghiệp |
| optionsVi.C | điện toán đám mây |
| optionsVi.D | định dạng tập tin |
| answerDisplay | A. không công bằng |

**concept**
```
• «không công bằng（ ）» → không công bằng
• Nghĩa: không công bằng.
```

**whyCorrect**
```
• Có vai trò riêng; đối chiếu với điều kiện stem.
• Khớp stem: bản dịch thuật ngữ JP↔VI đúng.
```

**whyWrong**

##### B
```
• Là gì? quyền sở hữu công nghiệp
• Dùng để làm gì? Phạm trù/khái niệm trong lý thuyết đề cập.
• Vì sao sai? «quyền sở hữu công nghiệp» (B) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### C
```
• Là gì? điện toán đám mây — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «điện toán đám mây» (C) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### D
```
• Là gì? định dạng tập tin — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «định dạng tập tin» (D) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

**whatIs**
```
{
  "A": "không công bằng — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "quyền sở hữu công nghiệp",
  "C": "điện toán đám mây — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "định dạng tập tin — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Chọn định nghĩa/nghĩa phù hợp nhất với thuật ngữ trong đề.
• Thuật ngữ: «không công bằng（ ）»
```

**memoryTip**
```
• không công bằng（ ） ≈ không công bằng
• Ưu tiên định nghĩa chuẩn giáo trình, không dịch word-by-word lệch.
```

---

### 243/400 · `jit` id=350 · task=`slides` · num=340 · ans **B**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
【専門用語】フリーウェア（Freeware） の意味として最も適切なものはどれか。
```

**Options**

- **A.** quyền sở hữu công nghiệp
- **B.** phần mềm miễn phí ✅
- **C.** cổng thông tin điện tử
- **D.** quyền truyền tải công cộng

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | 【Thuật ngữ】Nghĩa nào phù hợp nhất với «phần mềm miễn phí (freeware)»? |
| optionsVi.A | quyền sở hữu công nghiệp |
| optionsVi.B | phần mềm miễn phí |
| optionsVi.C | cổng thông tin điện tử |
| optionsVi.D | quyền truyền tải công cộng |
| answerDisplay | B. phần mềm miễn phí |

**concept**
```
• «phần mềm miễn phí (freeware)（Freeware）» → phần mềm miễn phí
• Nghĩa: phần mềm miễn phí.
```

**whyCorrect**
```
• Có vai trò riêng; đối chiếu với điều kiện stem.
• Khớp stem: bản dịch thuật ngữ JP↔VI đúng.
```

**whyWrong**

##### A
```
• Là gì? quyền sở hữu công nghiệp
• Dùng để làm gì? Phạm trù/khái niệm trong lý thuyết đề cập.
• Vì sao sai? «quyền sở hữu công nghiệp» (A) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### C
```
• Là gì? cổng thông tin điện tử
• Dùng để làm gì? Phạm trù/khái niệm trong lý thuyết đề cập.
• Vì sao sai? «cổng thông tin điện tử» (C) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### D
```
• Là gì? quyền truyền tải công cộng
• Dùng để làm gì? Phạm trù/khái niệm trong lý thuyết đề cập.
• Vì sao sai? «quyền truyền tải công cộng» (D) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

**whatIs**
```
{
  "A": "quyền sở hữu công nghiệp",
  "B": "phần mềm miễn phí — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "cổng thông tin điện tử",
  "D": "quyền truyền tải công cộng"
}
```

**intent**
```
• Chọn định nghĩa/nghĩa phù hợp nhất với thuật ngữ trong đề.
• Thuật ngữ: «phần mềm miễn phí (freeware)（Freeware）»
```

**memoryTip**
```
• phần mềm miễn phí (freeware)（Freeware） ≈ phần mềm miễn phí
• Ưu tiên định nghĩa chuẩn giáo trình, không dịch word-by-word lệch.
```

---

### 244/400 · `jit` id=351 · task=`slides` · num=341 · ans **A**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
【専門用語】放送権（ほうそうけん） の意味として最も適切なものはどれか。
```

**Options**

- **A.** quyền phát sóng ✅
- **B.** tiếp xúc
- **C.** trình duyệt
- **D.** bản quyền

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | 【Thuật ngữ】Nghĩa nào phù hợp nhất với «quyền phát sóng»? |
| optionsVi.A | quyền phát sóng |
| optionsVi.B | tiếp xúc |
| optionsVi.C | trình duyệt |
| optionsVi.D | bản quyền |
| answerDisplay | A. quyền phát sóng |

**concept**
```
• «quyền phát sóng（ ）» → quyền phát sóng
• Nghĩa: quyền phát sóng.
```

**whyCorrect**
```
• Có vai trò riêng; đối chiếu với điều kiện stem.
• Khớp stem: bản dịch thuật ngữ JP↔VI đúng.
```

**whyWrong**

##### B
```
• Là gì? tiếp xúc — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «tiếp xúc» (B) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### C
```
• Là gì? trình duyệt — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «trình duyệt» (C) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### D
```
• Là gì? bản quyền — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «bản quyền» (D) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

**whatIs**
```
{
  "A": "quyền phát sóng — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "tiếp xúc — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "trình duyệt — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "bản quyền — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Chọn định nghĩa/nghĩa phù hợp nhất với thuật ngữ trong đề.
• Thuật ngữ: «quyền phát sóng（ ）»
```

**memoryTip**
```
• quyền phát sóng（ ） ≈ quyền phát sóng
• Ưu tiên định nghĩa chuẩn giáo trình, không dịch word-by-word lệch.
```

---

### 245/400 · `jit` id=352 · task=`slides` · num=342 · ans **D**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
【専門用語】実行ファイル（じっこう File） の意味として最も適切なものはどれか。
```

**Options**

- **A.** không công bằng
- **B.** nhà cung cấp dịch vụ ứng dụng
- **C.** phép lịch sự xã giao khi sử dụng
- **D.** file thực thi ✅

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | 【Thuật ngữ】Nghĩa nào phù hợp nhất với «tệp thực thi»? |
| optionsVi.A | không công bằng |
| optionsVi.B | nhà cung cấp dịch vụ ứng dụng |
| optionsVi.C | phép lịch sự xã giao khi sử dụng |
| optionsVi.D | file thực thi |
| answerDisplay | D. file thực thi |

**concept**
```
• «tệp thực thi（ File）» → file thực thi
• Nghĩa: file thực thi.
```

**whyCorrect**
```
• Có vai trò riêng; đối chiếu với điều kiện stem.
• Khớp stem: bản dịch thuật ngữ JP↔VI đúng.
```

**whyWrong**

##### A
```
• Là gì? không công bằng — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «không công bằng» (A) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### B
```
• Là gì? nhà cung cấp dịch vụ ứng dụng
• Dùng để làm gì? Phạm trù/khái niệm trong lý thuyết đề cập.
• Vì sao sai? «nhà cung cấp dịch vụ ứng dụng» (B) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### C
```
• Là gì? phép lịch sự xã giao khi sử dụng
• Dùng để làm gì? Phạm trù/khái niệm trong lý thuyết đề cập.
• Vì sao sai? «phép lịch sự xã giao khi sử dụng» (C) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

**whatIs**
```
{
  "A": "không công bằng — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "nhà cung cấp dịch vụ ứng dụng",
  "C": "phép lịch sự xã giao khi sử dụng",
  "D": "file thực thi — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Chọn định nghĩa/nghĩa phù hợp nhất với thuật ngữ trong đề.
• Thuật ngữ: «tệp thực thi（ File）»
```

**memoryTip**
```
• tệp thực thi（ File） ≈ file thực thi
• Ưu tiên định nghĩa chuẩn giáo trình, không dịch word-by-word lệch.
```

---

### 246/400 · `jit` id=353 · task=`slides` · num=343 · ans **A**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
【専門用語】きげん（きかいしき） の意味として最も適切なものはどれか。
```

**Options**

- **A.** はぐるま ✅
- **B.** tim O'Reilly
- **C.** tác phẩm
- **D.** cổng thông tin điện tử

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | 【Thuật ngữ】Nghĩa nào phù hợp nhất với «kỳ hạn / hết hạn (context)»? |
| optionsVi.A | bánh răng |
| optionsVi.B | tim O'Reilly |
| optionsVi.C | tác phẩm |
| optionsVi.D | cổng thông tin điện tử |
| answerDisplay | A. bánh răng |

**concept**
```
• «kỳ hạn / hết hạn (context)（ ）» → bánh răng
• Nghĩa: bánh răng.
```

**whyCorrect**
```
• Khái niệm CNTT trong đề thi JIT.
• Khớp stem: bản dịch thuật ngữ JP↔VI đúng.
```

**whyWrong**

##### B
```
• Là gì? tim O'Reilly — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «tim O'Reilly» (B) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### C
```
• Là gì? tác phẩm — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «tác phẩm» (C) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### D
```
• Là gì? cổng thông tin điện tử
• Dùng để làm gì? Phạm trù/khái niệm trong lý thuyết đề cập.
• Vì sao sai? «cổng thông tin điện tử» (D) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

**whatIs**
```
{
  "A": "はぐるま (thuật ngữ JP).",
  "B": "tim O'Reilly — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "tác phẩm — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "cổng thông tin điện tử"
}
```

**intent**
```
• Chọn định nghĩa/nghĩa phù hợp nhất với thuật ngữ trong đề.
• Thuật ngữ: «kỳ hạn / hết hạn (context)（ ）»
```

**memoryTip**
```
• kỳ hạn / hết hạn (context)（ ） ≈ • Ưu tiên định nghĩa chuẩn giáo trình, không dịch word-by-word lệch.
```

---

### 247/400 · `jit` id=354 · task=`slides` · num=344 · ans **D**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
【専門用語】著作人格権（ちょさくじんかくけん） の意味として最も適切なものはどれか。
```

**Options**

- **A.** tác giả
- **B.** tim O'Reilly
- **C.** tiếp xúc
- **D.** quyền nhân thân ✅

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | 【Thuật ngữ】Nghĩa nào phù hợp nhất với «quyền nhân thân tác giả»? |
| optionsVi.A | tác giả |
| optionsVi.B | tim O'Reilly |
| optionsVi.C | tiếp xúc |
| optionsVi.D | quyền nhân thân |
| answerDisplay | D. quyền nhân thân |

**concept**
```
• «quyền nhân thân tác giả（ ）» → quyền nhân thân
• Nghĩa: quyền nhân thân.
```

**whyCorrect**
```
• Có vai trò riêng; đối chiếu với điều kiện stem.
• Khớp stem: bản dịch thuật ngữ JP↔VI đúng.
```

**whyWrong**

##### A
```
• Là gì? tác giả — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «tác giả» (A) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### B
```
• Là gì? tim O'Reilly — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «tim O'Reilly» (B) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### C
```
• Là gì? tiếp xúc — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «tiếp xúc» (C) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

**whatIs**
```
{
  "A": "tác giả — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "tim O'Reilly — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "tiếp xúc — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "quyền nhân thân — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Chọn định nghĩa/nghĩa phù hợp nhất với thuật ngữ trong đề.
• Thuật ngữ: «quyền nhân thân tác giả（ ）»
```

**memoryTip**
```
• quyền nhân thân tác giả（ ） ≈ quyền nhân thân
• Ưu tiên định nghĩa chuẩn giáo trình, không dịch word-by-word lệch.
```

---

### 248/400 · `jit` id=355 · task=`slides` · num=345 · ans **D**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
【専門用語】ネチケット（netiquette） の意味として最も適切なものはどれか。
```

**Options**

- **A.** quyền liên quan
- **B.** quyền sáng chế
- **C.** bản quyền
- **D.** phép lịch sự xã giao khi sử dụng ✅

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | 【Thuật ngữ】Nghĩa nào phù hợp nhất với «netiquette (phép lịch sự mạng)»? |
| optionsVi.A | quyền liên quan |
| optionsVi.B | quyền sáng chế |
| optionsVi.C | bản quyền |
| optionsVi.D | phép lịch sự xã giao khi sử dụng |
| answerDisplay | D. phép lịch sự xã giao khi sử dụng |

**concept**
```
• «netiquette (phép lịch sự mạng)（netiquette）» → phép lịch sự xã giao khi sử dụng
• Nghĩa: phép lịch sự xã giao khi sử dụng.
```

**whyCorrect**
```
• Nghĩa đúng: phép lịch sự xã giao khi sử dụng
```

**whyWrong**

##### A
```
• Là gì? quyền liên quan — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «quyền liên quan» (A) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### B
```
• Là gì? quyền sáng chế — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «quyền sáng chế» (B) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### C
```
• Là gì? bản quyền — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «bản quyền» (C) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

**whatIs**
```
{
  "A": "quyền liên quan — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "quyền sáng chế — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "bản quyền — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "phép lịch sự xã giao khi sử dụng"
}
```

**intent**
```
• Chọn định nghĩa/nghĩa phù hợp nhất với thuật ngữ trong đề.
• Thuật ngữ: «netiquette (phép lịch sự mạng)（netiquette）»
```

**memoryTip**
```
• netiquette (phép lịch sự mạng)（netiquette） ≈ phép lịch sự xã giao khi sử dụng
• Ưu tiên định nghĩa chuẩn giáo trình, không dịch word-by-word lệch.
```

---

### 249/400 · `jit` id=356 · task=`slides` · num=346 · ans **A**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
【専門用語】漏洩（ろうえい） の意味として最も適切なものはどれか。
```

**Options**

- **A.** rò rỉ ✅
- **B.** mã nguồn
- **C.** hình thức sử dụng
- **D.** bản quyền

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | 【Thuật ngữ】Nghĩa nào phù hợp nhất với «rò rỉ»? |
| optionsVi.A | rò rỉ |
| optionsVi.B | mã nguồn |
| optionsVi.C | hình thức sử dụng |
| optionsVi.D | bản quyền |
| answerDisplay | A. rò rỉ |

**concept**
```
• «rò rỉ（ ）» → rò rỉ
• Nghĩa: rò rỉ.
```

**whyCorrect**
```
• Có vai trò riêng; đối chiếu với điều kiện stem.
• Khớp stem: bản dịch thuật ngữ JP↔VI đúng.
```

**whyWrong**

##### B
```
• Là gì? mã nguồn — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «mã nguồn» (B) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### C
```
• Là gì? hình thức sử dụng — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «hình thức sử dụng» (C) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### D
```
• Là gì? bản quyền — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «bản quyền» (D) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

**whatIs**
```
{
  "A": "rò rỉ — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "mã nguồn — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "hình thức sử dụng — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "bản quyền — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Chọn định nghĩa/nghĩa phù hợp nhất với thuật ngữ trong đề.
• Thuật ngữ: «rò rỉ（ ）»
```

**memoryTip**
```
• rò rỉ（ ） ≈ rò rỉ
• Ưu tiên định nghĩa chuẩn giáo trình, không dịch word-by-word lệch.
```

---

### 250/400 · `jit` id=365 · task=`slides` · num=355 · ans **C**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
【専門用語】電荷（でんか） の意味として最も適切なものはどれか。
```

**Options**

- **A.** kỹ thuật phát xạ điện tử dẫn bề mặt
- **B.** tinh thể lỏng
- **C.** điện tích ✅
- **D.** phân đoạn

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | 【Thuật ngữ】Nghĩa nào phù hợp nhất với «điện tích»? |
| optionsVi.A | kỹ thuật phát xạ điện tử dẫn bề mặt |
| optionsVi.B | tinh thể lỏng |
| optionsVi.C | điện tích |
| optionsVi.D | phân đoạn |
| answerDisplay | C. điện tích |

**concept**
```
• «điện tích（ ）» → điện tích
• Nghĩa: điện tích.
```

**whyCorrect**
```
• Có vai trò riêng; đối chiếu với điều kiện stem.
• Khớp stem: bản dịch thuật ngữ JP↔VI đúng.
```

**whyWrong**

##### A
```
• Là gì? kỹ thuật phát xạ điện tử dẫn bề mặt
• Dùng để làm gì? Phạm trù/khái niệm trong lý thuyết đề cập.
• Vì sao sai? «kỹ thuật phát xạ điện tử dẫn bề mặt» (A) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### B
```
• Là gì? tinh thể lỏng — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «tinh thể lỏng» (B) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### D
```
• Là gì? phân đoạn — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «phân đoạn» (D) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

**whatIs**
```
{
  "A": "kỹ thuật phát xạ điện tử dẫn bề mặt",
  "B": "tinh thể lỏng — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "điện tích — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "phân đoạn — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Chọn định nghĩa/nghĩa phù hợp nhất với thuật ngữ trong đề.
• Thuật ngữ: «điện tích（ ）»
```

**memoryTip**
```
• điện tích（ ） ≈ điện tích
• Ưu tiên định nghĩa chuẩn giáo trình, không dịch word-by-word lệch.
```

---

### 251/400 · `jit` id=366 · task=`slides` · num=356 · ans **B**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
【専門用語】透過（とうか） の意味として最も適切なものはどれか。
```

**Options**

- **A.** kỹ thuật phát xạ điện tử dẫn bề mặt
- **B.** xuyên qua ✅
- **C.** bộ cảm biến hình ảnh bằng chip
- **D.** phương thức màng điện trở

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | 【Thuật ngữ】Nghĩa nào phù hợp nhất với «trong suốt / xuyên qua (transparent)»? |
| optionsVi.A | kỹ thuật phát xạ điện tử dẫn bề mặt |
| optionsVi.B | xuyên qua |
| optionsVi.C | bộ cảm biến hình ảnh bằng chip |
| optionsVi.D | phương thức màng điện trở |
| answerDisplay | B. xuyên qua |

**concept**
```
• «trong suốt / xuyên qua (transparent)（ ）» → xuyên qua
• Nghĩa: xuyên qua.
```

**whyCorrect**
```
• Có vai trò riêng; đối chiếu với điều kiện stem.
• Khớp stem: bản dịch thuật ngữ JP↔VI đúng.
```

**whyWrong**

##### A
```
• Là gì? kỹ thuật phát xạ điện tử dẫn bề mặt
• Dùng để làm gì? Phạm trù/khái niệm trong lý thuyết đề cập.
• Vì sao sai? «kỹ thuật phát xạ điện tử dẫn bề mặt» (A) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### C
```
• Là gì? bộ cảm biến hình ảnh bằng chip
• Dùng để làm gì? Phạm trù/khái niệm trong lý thuyết đề cập.
• Vì sao sai? «bộ cảm biến hình ảnh bằng chip» (C) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### D
```
• Là gì? phương thức màng điện trở
• Dùng để làm gì? Phạm trù/khái niệm trong lý thuyết đề cập.
• Vì sao sai? «phương thức màng điện trở» (D) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

**whatIs**
```
{
  "A": "kỹ thuật phát xạ điện tử dẫn bề mặt",
  "B": "xuyên qua — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "bộ cảm biến hình ảnh bằng chip",
  "D": "phương thức màng điện trở"
}
```

**intent**
```
• Chọn định nghĩa/nghĩa phù hợp nhất với thuật ngữ trong đề.
• Thuật ngữ: «trong suốt / xuyên qua (transparent)（ ）»
```

**memoryTip**
```
• trong suốt / xuyên qua (transparent)（ ） ≈ xuyên qua
• Ưu tiên định nghĩa chuẩn giáo trình, không dịch word-by-word lệch.
```

---

### 252/400 · `jit` id=367 · task=`slides` · num=357 · ans **B**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
【専門用語】有機 EL ディスプレイ（ゆうき eelectroluminescence display） の意味として最も適切なものはどれか。
```

**Options**

- **A.** tinh thể lỏng
- **B.** màn hình phát quang hữu cơ ✅
- **C.** bộ lọc
- **D.** hình ảnh chất lượng cao

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | 【Thuật ngữ】Nghĩa nào phù hợp nhất với thuật ngữ trong đề? |
| optionsVi.A | tinh thể lỏng |
| optionsVi.B | màn hình phát quang hữu cơ |
| optionsVi.C | bộ lọc |
| optionsVi.D | hình ảnh chất lượng cao |
| answerDisplay | B. màn hình phát quang hữu cơ |

**concept**
```
• «màn hình OLED（ eelectroluminescence display）» → màn hình phát quang hữu cơ
• Nghĩa: màn hình phát quang hữu cơ.
```

**whyCorrect**
```
• Nghĩa đúng: màn hình phát quang hữu cơ
```

**whyWrong**

##### A
```
• Là gì? tinh thể lỏng — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «tinh thể lỏng» (A) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### C
```
• Là gì? bộ lọc — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «bộ lọc» (C) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### D
```
• Là gì? Quality — đảm bảo/kiểm soát chất lượng.
• Dùng để làm gì? Tiêu chuẩn, review, test.
• Vì sao sai? «hình ảnh chất lượng cao» (D) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

**whatIs**
```
{
  "A": "tinh thể lỏng — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "màn hình phát quang hữu cơ",
  "C": "bộ lọc — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Quality — đảm bảo/kiểm soát chất lượng."
}
```

**intent**
```
• Chọn định nghĩa/nghĩa phù hợp nhất với thuật ngữ trong đề.
• Thuật ngữ: «màn hình OLED（ eelectroluminescence display）»
```

**memoryTip**
```
• màn hình OLED（ eelectroluminescence display） ≈ màn hình phát quang hữu cơ
• Ưu tiên định nghĩa chuẩn giáo trình, không dịch word-by-word lệch.
```

---

### 253/400 · `jit` id=368 · task=`slides` · num=358 · ans **C**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
【専門用語】周波数帯域（ちゅうはすうたいいき） の意味として最も適切なものはどれか。
```

**Options**

- **A.** cản trở
- **B.** kỹ thuật phát xạ điện tử dẫn bề mặt
- **C.** dải băng tần ✅
- **D.** bộ lọc

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | 【Thuật ngữ】Nghĩa nào phù hợp nhất với «băng tần»? |
| optionsVi.A | cản trở |
| optionsVi.B | kỹ thuật phát xạ điện tử dẫn bề mặt |
| optionsVi.C | dải băng tần |
| optionsVi.D | bộ lọc |
| answerDisplay | C. dải băng tần |

**concept**
```
• «băng tần（ ）» → dải băng tần
• Nghĩa: dải băng tần.
```

**whyCorrect**
```
• Có vai trò riêng; đối chiếu với điều kiện stem.
• Khớp stem: bản dịch thuật ngữ JP↔VI đúng.
```

**whyWrong**

##### A
```
• Là gì? cản trở — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «cản trở» (A) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### B
```
• Là gì? kỹ thuật phát xạ điện tử dẫn bề mặt
• Dùng để làm gì? Phạm trù/khái niệm trong lý thuyết đề cập.
• Vì sao sai? «kỹ thuật phát xạ điện tử dẫn bề mặt» (B) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### D
```
• Là gì? bộ lọc — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «bộ lọc» (D) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

**whatIs**
```
{
  "A": "cản trở — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "kỹ thuật phát xạ điện tử dẫn bề mặt",
  "C": "dải băng tần — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "bộ lọc — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Chọn định nghĩa/nghĩa phù hợp nhất với thuật ngữ trong đề.
• Thuật ngữ: «băng tần（ ）»
```

**memoryTip**
```
• băng tần（ ） ≈ dải băng tần
• Ưu tiên định nghĩa chuẩn giáo trình, không dịch word-by-word lệch.
```

---

### 254/400 · `jit` id=369 · task=`slides` · num=359 · ans **A**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
【専門用語】ブロードバンド（broadband） の意味として最も適切なものはどれか。
```

**Options**

- **A.** băng rộng ✅
- **B.** phương thức màng điện trở
- **C.** bộ cảm biến hình ảnh bằng chip
- **D.** các chức năng

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | 【Thuật ngữ】Nghĩa nào phù hợp nhất với «broadband»? |
| optionsVi.A | băng rộng |
| optionsVi.B | phương thức màng điện trở |
| optionsVi.C | bộ cảm biến hình ảnh bằng chip |
| optionsVi.D | các chức năng |
| answerDisplay | A. băng rộng |

**concept**
```
• «broadband（broadband）» → băng rộng
• Nghĩa: băng rộng.
```

**whyCorrect**
```
• Có vai trò riêng; đối chiếu với điều kiện stem.
• Khớp stem: bản dịch thuật ngữ JP↔VI đúng.
```

**whyWrong**

##### B
```
• Là gì? phương thức màng điện trở
• Dùng để làm gì? Phạm trù/khái niệm trong lý thuyết đề cập.
• Vì sao sai? «phương thức màng điện trở» (B) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### C
```
• Là gì? bộ cảm biến hình ảnh bằng chip
• Dùng để làm gì? Phạm trù/khái niệm trong lý thuyết đề cập.
• Vì sao sai? «bộ cảm biến hình ảnh bằng chip» (C) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### D
```
• Là gì? các chức năng — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «các chức năng» (D) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

**whatIs**
```
{
  "A": "băng rộng — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "phương thức màng điện trở",
  "C": "bộ cảm biến hình ảnh bằng chip",
  "D": "các chức năng — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Chọn định nghĩa/nghĩa phù hợp nhất với thuật ngữ trong đề.
• Thuật ngữ: «broadband（broadband）»
```

**memoryTip**
```
• broadband（broadband） ≈ băng rộng
• Ưu tiên định nghĩa chuẩn giáo trình, không dịch word-by-word lệch.
```

---

### 255/400 · `jit` id=370 · task=`slides` · num=360 · ans **A**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
【専門用語】SED（Surface-conduction Electron-emitter Display） の意味として最も適切なものはどれか。
```

**Options**

- **A.** kỹ thuật phát xạ điện tử dẫn bề mặt ✅
- **B.** phát sóng cùng một lúc
- **C.** điện tích
- **D.** hình ảnh chất lượng cao

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | 【Thuật ngữ】Nghĩa nào phù hợp nhất với «SED（Surface-conduction Electron-emitter Display）»? |
| optionsVi.A | kỹ thuật phát xạ điện tử dẫn bề mặt |
| optionsVi.B | phát sóng cùng một lúc |
| optionsVi.C | điện tích |
| optionsVi.D | hình ảnh chất lượng cao |
| answerDisplay | A. kỹ thuật phát xạ điện tử dẫn bề mặt |

**concept**
```
• «SED（Surface-conduction Electron-emitter Display）» → kỹ thuật phát xạ điện tử dẫn bề mặt
• Nghĩa: kỹ thuật phát xạ điện tử dẫn bề mặt.
```

**whyCorrect**
```
• Nghĩa đúng: kỹ thuật phát xạ điện tử dẫn bề mặt
```

**whyWrong**

##### B
```
• Là gì? phát sóng cùng một lúc
• Dùng để làm gì? Phạm trù/khái niệm trong lý thuyết đề cập.
• Vì sao sai? «phát sóng cùng một lúc» (B) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### C
```
• Là gì? điện tích — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «điện tích» (C) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### D
```
• Là gì? Quality — đảm bảo/kiểm soát chất lượng.
• Dùng để làm gì? Tiêu chuẩn, review, test.
• Vì sao sai? «hình ảnh chất lượng cao» (D) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

**whatIs**
```
{
  "A": "kỹ thuật phát xạ điện tử dẫn bề mặt",
  "B": "phát sóng cùng một lúc",
  "C": "điện tích — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Quality — đảm bảo/kiểm soát chất lượng."
}
```

**intent**
```
• Chọn định nghĩa/nghĩa phù hợp nhất với thuật ngữ trong đề.
• Thuật ngữ: «SED（Surface-conduction Electron-emitter Display）»
```

**memoryTip**
```
• SED（Surface-conduction Electron-emitter Display） ≈ kỹ thuật phát xạ điện tử dẫn bề mặt
• Ưu tiên định nghĩa chuẩn giáo trình, không dịch word-by-word lệch.
```

---

### 256/400 · `jit` id=371 · task=`slides` · num=361 · ans **A**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
【専門用語】盗聴（とうちょう） の意味として最も適切なものはどれか。
```

**Options**

- **A.** nghe trộm , nghe lén ✅
- **B.** điện tích
- **C.** băng rộng
- **D.** kỹ thuật phát xạ điện tử dẫn bề mặt

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | 【Thuật ngữ】Nghĩa nào phù hợp nhất với «nghe lén»? |
| optionsVi.A | nghe trộm , nghe lén |
| optionsVi.B | điện tích |
| optionsVi.C | băng rộng |
| optionsVi.D | kỹ thuật phát xạ điện tử dẫn bề mặt |
| answerDisplay | A. nghe trộm , nghe lén |

**concept**
```
• «nghe lén（ ）» → nghe trộm, nghe lén
• Nghĩa: nghe trộm, nghe lén.
```

**whyCorrect**
```
• Phạm trù/khái niệm trong lý thuyết đề cập.
• Khớp stem: bản dịch thuật ngữ JP↔VI đúng.
```

**whyWrong**

##### B
```
• Là gì? điện tích — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «điện tích» (B) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### C
```
• Là gì? băng rộng — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «băng rộng» (C) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### D
```
• Là gì? kỹ thuật phát xạ điện tử dẫn bề mặt
• Dùng để làm gì? Phạm trù/khái niệm trong lý thuyết đề cập.
• Vì sao sai? «kỹ thuật phát xạ điện tử dẫn bề mặt» (D) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

**whatIs**
```
{
  "A": "nghe trộm , nghe lén",
  "B": "điện tích — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "băng rộng — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "kỹ thuật phát xạ điện tử dẫn bề mặt"
}
```

**intent**
```
• Chọn định nghĩa/nghĩa phù hợp nhất với thuật ngữ trong đề.
• Thuật ngữ: «nghe lén（ ）»
```

**memoryTip**
```
• nghe lén（ ） ≈ nghe trộm, nghe lén
• Ưu tiên định nghĩa chuẩn giáo trình, không dịch word-by-word lệch.
```

---

### 257/400 · `jit` id=372 · task=`slides` · num=362 · ans **C**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
【専門用語】次のベトナム語の用語を日本語に直しなさい。 phát sóng từng đoạn
```

**Options**

- **A.** コンテンツ
- **B.** SED
- **C.** ワンセグ放送 ✅
- **D.** 増幅器

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | 【Thuật ngữ】Hãy dịch thuật ngữ tiếng Việt sau sang tiếng Nhật: «phát sóng từng đoạn» |
| optionsVi.A | コンテンツ — khái niệm kỹ thuật |
| optionsVi.B | kỹ thuật phát xạ điện tử dẫn bề mặt |
| optionsVi.C | phát sóng từng đoạn |
| optionsVi.D | bộ khuếch đại |
| answerDisplay | C. phát sóng từng đoạn |

**concept**
```
• «phát sóng từng đoạn» trong tiếng Nhật là « ».
```

**whyCorrect**
```
• «phát sóng từng đoạn» = • Việt «phát sóng từng đoạn» ⇔ Nhật « ».
• phát sóng từng đoạn
• Chọn đúng cặp dịch thuật ngữ, không chọn từ gần nghĩa khác lĩnh vực.
```

**whyWrong**

##### A
```
• Là gì? コンテンツ (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «コンテンツ» (A) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### B
```
• Là gì? SED — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «SED» (B) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### D
```
• Là gì? 増幅器 (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «増幅器» (D) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

**whatIs**
```
{
  "A": "コンテンツ (thuật ngữ JP).",
  "B": "SED — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "ワンセグ放送 (thuật ngữ JP).",
  "D": "増幅器 (thuật ngữ JP)."
}
```

**intent**
```
• Câu từ vựng: cho thuật ngữ tiếng Việt → chọn bản tiếng Nhật đúng.
• Thuật ngữ cần dịch: «phát sóng từng đoạn»
```

**memoryTip**
```
• phát sóng từng đoạn = • Học theo cặp VI ↔ JP, tránh nhầm từ kanji/katakana gần.
```

---

### 258/400 · `jit` id=373 · task=`slides` · num=363 · ans **A**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
【専門用語】次のベトナム語の用語を日本語に直しなさい。 ánh sáng phân cực
```

**Options**

- **A.** 偏光 ✅
- **B.** SIM
- **C.** 有機 EL ディスプレイ
- **D.** ICT

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | 【Thuật ngữ】Hãy dịch thuật ngữ tiếng Việt sau sang tiếng Nhật: «ánh sáng phân cực» |
| optionsVi.A | ánh sáng phân cực |
| optionsVi.B | SIM |
| optionsVi.C | màn hình OLED |
| optionsVi.D | ICT |
| answerDisplay | A. ánh sáng phân cực |

**concept**
```
• «ánh sáng phân cực» trong tiếng Nhật là « ».
```

**whyCorrect**
```
• «ánh sáng phân cực» = • Việt «ánh sáng phân cực» ⇔ Nhật « ».
• ánh sáng phân cực
• Chọn đúng cặp dịch thuật ngữ, không chọn từ gần nghĩa khác lĩnh vực.
```

**whyWrong**

##### B
```
• Là gì? SIM — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «SIM» (B) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### C
```
• Là gì? 有機 EL ディスプレイ (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «有機 EL ディスプレイ» (C) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### D
```
• Là gì? ICT — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «ICT» (D) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

**whatIs**
```
{
  "A": "偏光 (thuật ngữ JP).",
  "B": "SIM — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "有機 EL ディスプレイ (thuật ngữ JP).",
  "D": "ICT — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Câu từ vựng: cho thuật ngữ tiếng Việt → chọn bản tiếng Nhật đúng.
• Thuật ngữ cần dịch: «ánh sáng phân cực»
```

**memoryTip**
```
• ánh sáng phân cực = • Học theo cặp VI ↔ JP, tránh nhầm từ kanji/katakana gần.
```

---

### 259/400 · `jit` id=380 · task=`slides` · num=370 · ans **C**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
【専門用語】遮蔽物（しゃへいぶつ） の意味として最も適切なものはどれか。
```

**Options**

- **A.** cập nhật
- **B.** truyền dữ liệu bằng tia hồng ngoại
- **C.** vật chắn , vật cản ✅
- **D.** ăng ten

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | 【Thuật ngữ】Nghĩa nào phù hợp nhất với «vật che chắn»? |
| optionsVi.A | cập nhật |
| optionsVi.B | truyền dữ liệu bằng tia hồng ngoại |
| optionsVi.C | vật chắn , vật cản |
| optionsVi.D | ăng ten |
| answerDisplay | C. vật chắn , vật cản |

**concept**
```
• «vật che chắn（ ）» → vật chắn, vật cản
• Nghĩa: vật chắn, vật cản.
```

**whyCorrect**
```
• Có vai trò riêng; đối chiếu với điều kiện stem.
• Khớp stem: bản dịch thuật ngữ JP↔VI đúng.
```

**whyWrong**

##### A
```
• Là gì? cập nhật — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «cập nhật» (A) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### B
```
• Là gì? truyền dữ liệu bằng tia hồng ngoại
• Dùng để làm gì? Phạm trù/khái niệm trong lý thuyết đề cập.
• Vì sao sai? «truyền dữ liệu bằng tia hồng ngoại» (B) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### D
```
• Là gì? ăng ten — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «ăng ten» (D) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

**whatIs**
```
{
  "A": "cập nhật — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "truyền dữ liệu bằng tia hồng ngoại",
  "C": "vật chắn , vật cản — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "ăng ten — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Chọn định nghĩa/nghĩa phù hợp nhất với thuật ngữ trong đề.
• Thuật ngữ: «vật che chắn（ ）»
```

**memoryTip**
```
• vật che chắn（ ） ≈ vật chắn, vật cản
• Ưu tiên định nghĩa chuẩn giáo trình, không dịch word-by-word lệch.
```

---

### 260/400 · `jit` id=381 · task=`slides` · num=371 · ans **B**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
【専門用語】ハンズフリー（hands-free） の意味として最も適切なものはどれか。
```

**Options**

- **A.** tạp nhiễu
- **B.** chế độ rảnh tay ✅
- **C.** thời gian thực , cùng lúc
- **D.** vệ tinh truyền thông

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | 【Thuật ngữ】Nghĩa nào phù hợp nhất với «rảnh tay (hands-free)»? |
| optionsVi.A | tạp nhiễu |
| optionsVi.B | chế độ rảnh tay |
| optionsVi.C | thời gian thực , cùng lúc |
| optionsVi.D | vệ tinh truyền thông |
| answerDisplay | B. chế độ rảnh tay |

**concept**
```
• «rảnh tay (hands-free)（hands-free）» → chế độ rảnh tay
• Nghĩa: chế độ rảnh tay.
```

**whyCorrect**
```
• Có vai trò riêng; đối chiếu với điều kiện stem.
• Khớp stem: bản dịch thuật ngữ JP↔VI đúng.
```

**whyWrong**

##### A
```
• Là gì? tạp nhiễu — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «tạp nhiễu» (A) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### C
```
• Là gì? thời gian thực , cùng lúc
• Dùng để làm gì? Phạm trù/khái niệm trong lý thuyết đề cập.
• Vì sao sai? «thời gian thực , cùng lúc» (C) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### D
```
• Là gì? vệ tinh truyền thông
• Dùng để làm gì? Phạm trù/khái niệm trong lý thuyết đề cập.
• Vì sao sai? «vệ tinh truyền thông» (D) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

**whatIs**
```
{
  "A": "tạp nhiễu — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "chế độ rảnh tay — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "thời gian thực , cùng lúc",
  "D": "vệ tinh truyền thông"
}
```

**intent**
```
• Chọn định nghĩa/nghĩa phù hợp nhất với thuật ngữ trong đề.
• Thuật ngữ: «rảnh tay (hands-free)（hands-free）»
```

**memoryTip**
```
• rảnh tay (hands-free)（hands-free） ≈ chế độ rảnh tay
• Ưu tiên định nghĩa chuẩn giáo trình, không dịch word-by-word lệch.
```

---

### 261/400 · `jit` id=382 · task=`slides` · num=372 · ans **D**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
【専門用語】光ファイバ（ひかり fiber） の意味として最も適切なものはどれか。
```

**Options**

- **A.** điện thoại đường dài
- **B.** máy tính tiền
- **C.** điện thoại IP ( điện thoại giao thức internet)
- **D.** cáp quang ✅

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | 【Thuật ngữ】Nghĩa nào phù hợp nhất với «cáp quang»? |
| optionsVi.A | điện thoại đường dài |
| optionsVi.B | máy tính tiền |
| optionsVi.C | điện thoại IP ( điện thoại giao thức internet) |
| optionsVi.D | cáp quang |
| answerDisplay | D. cáp quang |

**concept**
```
• «cáp quang（ fiber）» → cáp quang
• Nghĩa: cáp quang.
```

**whyCorrect**
```
• Có vai trò riêng; đối chiếu với điều kiện stem.
• Khớp stem: bản dịch thuật ngữ JP↔VI đúng.
```

**whyWrong**

##### A
```
• Là gì? điện thoại đường dài
• Dùng để làm gì? Phạm trù/khái niệm trong lý thuyết đề cập.
• Vì sao sai? «điện thoại đường dài» (A) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### B
```
• Là gì? máy tính tiền — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «máy tính tiền» (B) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### C
```
• Là gì? điện thoại IP ( điện thoại giao thức internet)
• Dùng để làm gì? Phạm trù/khái niệm trong lý thuyết đề cập.
• Vì sao sai? «điện thoại IP ( điện thoại giao thức internet)» (C) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

**whatIs**
```
{
  "A": "điện thoại đường dài",
  "B": "máy tính tiền — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "điện thoại IP ( điện thoại giao thức internet)",
  "D": "cáp quang — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Chọn định nghĩa/nghĩa phù hợp nhất với thuật ngữ trong đề.
• Thuật ngữ: «cáp quang（ fiber）»
```

**memoryTip**
```
• cáp quang（ fiber） ≈ cáp quang
• Ưu tiên định nghĩa chuẩn giáo trình, không dịch word-by-word lệch.
```

---

### 262/400 · `jit` id=383 · task=`slides` · num=373 · ans **D**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
【専門用語】ユビキタス（ubiquitous） の意味として最も適切なものはどれか。
```

**Options**

- **A.** thẻ vi mạch không tiếp xúc
- **B.** ăng ten
- **C.** tải xuống
- **D.** có ở mọi nơi ✅

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | 【Thuật ngữ】Nghĩa nào phù hợp nhất với «ubiquitous (mọi lúc mọi nơi)»? |
| optionsVi.A | thẻ vi mạch không tiếp xúc |
| optionsVi.B | ăng ten |
| optionsVi.C | tải xuống |
| optionsVi.D | có ở mọi nơi |
| answerDisplay | D. có ở mọi nơi |

**concept**
```
• «ubiquitous (mọi lúc mọi nơi)（ubiquitous）» → có ở mọi nơi
• Nghĩa: có ở mọi nơi.
```

**whyCorrect**
```
• Có vai trò riêng; đối chiếu với điều kiện stem.
• Khớp stem: bản dịch thuật ngữ JP↔VI đúng.
```

**whyWrong**

##### A
```
• Là gì? thẻ vi mạch không tiếp xúc
• Dùng để làm gì? Phạm trù/khái niệm trong lý thuyết đề cập.
• Vì sao sai? «thẻ vi mạch không tiếp xúc» (A) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### B
```
• Là gì? ăng ten — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «ăng ten» (B) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### C
```
• Là gì? tải xuống — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «tải xuống» (C) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

**whatIs**
```
{
  "A": "thẻ vi mạch không tiếp xúc",
  "B": "ăng ten — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "tải xuống — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "có ở mọi nơi — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Chọn định nghĩa/nghĩa phù hợp nhất với thuật ngữ trong đề.
• Thuật ngữ: «ubiquitous (mọi lúc mọi nơi)（ubiquitous）»
```

**memoryTip**
```
• ubiquitous (mọi lúc mọi nơi)（ubiquitous） ≈ có ở mọi nơi
• Ưu tiên định nghĩa chuẩn giáo trình, không dịch word-by-word lệch.
```

---

### 263/400 · `jit` id=384 · task=`slides` · num=374 · ans **D**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
【専門用語】POS（Point of Sale） の意味として最も適切なものはどれか。
```

**Options**

- **A.** bộ chuyển đổi
- **B.** tạp nhiễu
- **C.** thiết bị phát
- **D.** máy tính tiền ✅

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | 【Thuật ngữ】Nghĩa nào phù hợp nhất với «POS（Point of Sale）»? |
| optionsVi.A | bộ chuyển đổi |
| optionsVi.B | tạp nhiễu |
| optionsVi.C | thiết bị phát |
| optionsVi.D | máy tính tiền |
| answerDisplay | D. máy tính tiền |

**concept**
```
• «POS（Point of Sale）» → máy tính tiền
• Nghĩa: máy tính tiền.
```

**whyCorrect**
```
• Có vai trò riêng; đối chiếu với điều kiện stem.
• Khớp stem: bản dịch thuật ngữ JP↔VI đúng.
```

**whyWrong**

##### A
```
• Là gì? bộ chuyển đổi — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «bộ chuyển đổi» (A) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### B
```
• Là gì? tạp nhiễu — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «tạp nhiễu» (B) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### C
```
• Là gì? thiết bị phát — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «thiết bị phát» (C) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

**whatIs**
```
{
  "A": "bộ chuyển đổi — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "tạp nhiễu — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "thiết bị phát — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "máy tính tiền — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Chọn định nghĩa/nghĩa phù hợp nhất với thuật ngữ trong đề.
• Thuật ngữ: «POS（Point of Sale）»
```

**memoryTip**
```
• POS（Point of Sale） ≈ máy tính tiền
• Ưu tiên định nghĩa chuẩn giáo trình, không dịch word-by-word lệch.
```

---

### 264/400 · `jit` id=385 · task=`slides` · num=375 · ans **A**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
【専門用語】コスト削減（cost さくげん） の意味として最も適切なものはどれか。
```

**Options**

- **A.** cắt giảm chi phí ✅
- **B.** thuộc vào
- **C.** không đối xứng
- **D.** hệ thống tải ba

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | 【Thuật ngữ】Nghĩa nào phù hợp nhất với «cắt giảm chi phí»? |
| optionsVi.A | cắt giảm chi phí |
| optionsVi.B | thuộc vào |
| optionsVi.C | không đối xứng |
| optionsVi.D | hệ thống tải ba |
| answerDisplay | A. cắt giảm chi phí |

**concept**
```
• «cắt giảm chi phí（cost ）» → cắt giảm chi phí
• Nghĩa: cắt giảm chi phí.
```

**whyCorrect**
```
• Có vai trò riêng; đối chiếu với điều kiện stem.
• Khớp stem: bản dịch thuật ngữ JP↔VI đúng.
```

**whyWrong**

##### B
```
• Là gì? thuộc vào — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «thuộc vào» (B) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### C
```
• Là gì? không đối xứng — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «không đối xứng» (C) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### D
```
• Là gì? hệ thống tải ba — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «hệ thống tải ba» (D) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

**whatIs**
```
{
  "A": "cắt giảm chi phí — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "thuộc vào — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "không đối xứng — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "hệ thống tải ba — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Chọn định nghĩa/nghĩa phù hợp nhất với thuật ngữ trong đề.
• Thuật ngữ: «cắt giảm chi phí（cost ）»
```

**memoryTip**
```
• cắt giảm chi phí（cost ） ≈ cắt giảm chi phí
• Ưu tiên định nghĩa chuẩn giáo trình, không dịch word-by-word lệch.
```

---

### 265/400 · `jit` id=386 · task=`slides` · num=376 · ans **B**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
【専門用語】truyền dữ liệu có dây（55） の意味として最も適切なものはどれか。
```

**Options**

- **A.** đường truyền chính
- **B.** 余裕 ✅
- **C.** công nghệ nhận dạng tần số Radio
- **D.** cáp kim loại

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | 【Thuật ngữ】Nghĩa nào phù hợp nhất với «truyền dữ liệu có dây（55）»? |
| optionsVi.A | đường truyền chính |
| optionsVi.B | dư / biên độ |
| optionsVi.C | công nghệ nhận dạng tần số Radio |
| optionsVi.D | cáp kim loại |
| answerDisplay | B. dư / biên độ |

**concept**
```
• «truyền dữ liệu có dây（55）» → dư / biên độ
• Nghĩa: dư / biên độ.
```

**whyCorrect**
```
• Khái niệm CNTT trong đề thi JIT.
• Khớp stem: bản dịch thuật ngữ JP↔VI đúng.
```

**whyWrong**

##### A
```
• Là gì? đường truyền chính — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «đường truyền chính» (A) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### C
```
• Là gì? công nghệ nhận dạng tần số Radio
• Dùng để làm gì? Phạm trù/khái niệm trong lý thuyết đề cập.
• Vì sao sai? «công nghệ nhận dạng tần số Radio» (C) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### D
```
• Là gì? cáp kim loại — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «cáp kim loại» (D) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

**whatIs**
```
{
  "A": "đường truyền chính — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "余裕 (thuật ngữ JP).",
  "C": "công nghệ nhận dạng tần số Radio",
  "D": "cáp kim loại — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Chọn định nghĩa/nghĩa phù hợp nhất với thuật ngữ trong đề.
• Thuật ngữ: «truyền dữ liệu có dây（55）»
```

**memoryTip**
```
• truyền dữ liệu có dây（55） ≈ • Ưu tiên định nghĩa chuẩn giáo trình, không dịch word-by-word lệch.
```

---

### 266/400 · `jit` id=387 · task=`slides` · num=377 · ans **C**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
【専門用語】受信機（じゅしんき） の意味として最も適切なものはどれか。
```

**Options**

- **A.** truyền dữ liệu không dây
- **B.** bộ chuyển đổi
- **C.** thiết bị thu ✅
- **D.** vật chắn , vật cản

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | 【Thuật ngữ】Nghĩa nào phù hợp nhất với «máy thu»? |
| optionsVi.A | truyền dữ liệu không dây |
| optionsVi.B | bộ chuyển đổi |
| optionsVi.C | thiết bị thu |
| optionsVi.D | vật chắn , vật cản |
| answerDisplay | C. thiết bị thu |

**concept**
```
• «máy thu（ ）» → thiết bị thu
• Nghĩa: thiết bị thu.
```

**whyCorrect**
```
• Có vai trò riêng; đối chiếu với điều kiện stem.
• Khớp stem: bản dịch thuật ngữ JP↔VI đúng.
```

**whyWrong**

##### A
```
• Là gì? truyền dữ liệu không dây
• Dùng để làm gì? Phạm trù/khái niệm trong lý thuyết đề cập.
• Vì sao sai? «truyền dữ liệu không dây» (A) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### B
```
• Là gì? bộ chuyển đổi — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «bộ chuyển đổi» (B) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### D
```
• Là gì? vật chắn , vật cản — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «vật chắn , vật cản» (D) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

**whatIs**
```
{
  "A": "truyền dữ liệu không dây",
  "B": "bộ chuyển đổi — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "thiết bị thu — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "vật chắn , vật cản — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Chọn định nghĩa/nghĩa phù hợp nhất với thuật ngữ trong đề.
• Thuật ngữ: «máy thu（ ）»
```

**memoryTip**
```
• máy thu（ ） ≈ thiết bị thu
• Ưu tiên định nghĩa chuẩn giáo trình, không dịch word-by-word lệch.
```

---

### 267/400 · `jit` id=393 · task=`slides` · num=383 · ans **A**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
【専門用語】WAN（Wide Area Network） の意味として最も適切なものはどれか。
```

**Options**

- **A.** mạng diện rộng ✅
- **B.** hệ thống xử lý tập trung
- **C.** vùng phi quân sự
- **D.** xung đột

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | 【Thuật ngữ】Nghĩa nào phù hợp nhất với «WAN（Wide Area Network）»? |
| optionsVi.A | mạng diện rộng |
| optionsVi.B | hệ thống xử lý tập trung |
| optionsVi.C | vùng phi quân sự |
| optionsVi.D | xung đột |
| answerDisplay | A. mạng diện rộng |

**concept**
```
• «WAN（Wide Area Network）» → mạng diện rộng
• Nghĩa: mạng diện rộng.
```

**whyCorrect**
```
• Có vai trò riêng; đối chiếu với điều kiện stem.
• Khớp stem: bản dịch thuật ngữ JP↔VI đúng.
```

**whyWrong**

##### B
```
• Là gì? hệ thống xử lý tập trung
• Dùng để làm gì? Phạm trù/khái niệm trong lý thuyết đề cập.
• Vì sao sai? «hệ thống xử lý tập trung» (B) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### C
```
• Là gì? vùng phi quân sự — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «vùng phi quân sự» (C) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### D
```
• Là gì? xung đột — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «xung đột» (D) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

**whatIs**
```
{
  "A": "mạng diện rộng — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "hệ thống xử lý tập trung",
  "C": "vùng phi quân sự — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "xung đột — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Chọn định nghĩa/nghĩa phù hợp nhất với thuật ngữ trong đề.
• Thuật ngữ: «WAN（Wide Area Network）»
```

**memoryTip**
```
• WAN（Wide Area Network） ≈ mạng diện rộng
• Ưu tiên định nghĩa chuẩn giáo trình, không dịch word-by-word lệch.
```

---

### 268/400 · `jit` id=394 · task=`slides` · num=384 · ans **D**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
【専門用語】スター型（star がた） の意味として最も適切なものはどれか。
```

**Options**

- **A.** mạng kiểu lưới
- **B.** toàn cục
- **C.** mạng máy tính cục bộ
- **D.** cấu hình sao ✅

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | 【Thuật ngữ】Nghĩa nào phù hợp nhất với «mạng hình sao»? |
| optionsVi.A | mạng kiểu lưới |
| optionsVi.B | toàn cục |
| optionsVi.C | mạng máy tính cục bộ |
| optionsVi.D | cấu hình sao |
| answerDisplay | D. cấu hình sao |

**concept**
```
• «mạng hình sao（star ）» → cấu hình sao
• Nghĩa: cấu hình sao.
```

**whyCorrect**
```
• Có vai trò riêng; đối chiếu với điều kiện stem.
• Khớp stem: bản dịch thuật ngữ JP↔VI đúng.
```

**whyWrong**

##### A
```
• Là gì? mạng kiểu lưới — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «mạng kiểu lưới» (A) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### B
```
• Là gì? toàn cục — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «toàn cục» (B) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### C
```
• Là gì? mạng máy tính cục bộ
• Dùng để làm gì? Phạm trù/khái niệm trong lý thuyết đề cập.
• Vì sao sai? «mạng máy tính cục bộ» (C) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

**whatIs**
```
{
  "A": "mạng kiểu lưới — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "toàn cục — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "mạng máy tính cục bộ",
  "D": "cấu hình sao — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Chọn định nghĩa/nghĩa phù hợp nhất với thuật ngữ trong đề.
• Thuật ngữ: «mạng hình sao（star ）»
```

**memoryTip**
```
• mạng hình sao（star ） ≈ cấu hình sao
• Ưu tiên định nghĩa chuẩn giáo trình, không dịch word-by-word lệch.
```

---

### 269/400 · `jit` id=395 · task=`slides` · num=385 · ans **B**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
【専門用語】ネームサーバ（name server） の意味として最も適切なものはどれか。
```

**Options**

- **A.** sắp xếp theo tầng
- **B.** máy chủ tên miền ✅
- **C.** hành vi phạm tội
- **D.** người dùng cuối cùng

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | 【Thuật ngữ】Nghĩa nào phù hợp nhất với thuật ngữ trong đề? |
| optionsVi.A | sắp xếp theo tầng |
| optionsVi.B | máy chủ tên miền |
| optionsVi.C | hành vi phạm tội |
| optionsVi.D | người dùng cuối cùng |
| answerDisplay | B. máy chủ tên miền |

**concept**
```
• « máy chủ（name server）» → máy chủ tên miền
• Nghĩa: máy chủ tên miền.
```

**whyCorrect**
```
• Có vai trò riêng; đối chiếu với điều kiện stem.
• Khớp stem: bản dịch thuật ngữ JP↔VI đúng.
```

**whyWrong**

##### A
```
• Là gì? sắp xếp theo tầng — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «sắp xếp theo tầng» (A) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### C
```
• Là gì? hành vi phạm tội — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «hành vi phạm tội» (C) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### D
```
• Là gì? người dùng cuối cùng
• Dùng để làm gì? Phạm trù/khái niệm trong lý thuyết đề cập.
• Vì sao sai? «người dùng cuối cùng» (D) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

**whatIs**
```
{
  "A": "sắp xếp theo tầng — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "máy chủ tên miền — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "hành vi phạm tội — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "người dùng cuối cùng"
}
```

**intent**
```
• Chọn định nghĩa/nghĩa phù hợp nhất với thuật ngữ trong đề.
• Thuật ngữ: « máy chủ（name server）»
```

**memoryTip**
```
• máy chủ（name server） ≈ máy chủ tên miền
• Ưu tiên định nghĩa chuẩn giáo trình, không dịch word-by-word lệch.
```

---

### 270/400 · `jit` id=396 · task=`slides` · num=386 · ans **D**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
【専門用語】犯罪的行為（はんざいてきこうい） の意味として最も適切なものはどれか。
```

**Options**

- **A.** máy chủ tên miền
- **B.** server khách
- **C.** cấu hình vòng
- **D.** hành vi phạm tội ✅

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | 【Thuật ngữ】Nghĩa nào phù hợp nhất với thuật ngữ trong đề? |
| optionsVi.A | máy chủ tên miền |
| optionsVi.B | server khách |
| optionsVi.C | cấu hình vòng |
| optionsVi.D | hành vi phạm tội |
| answerDisplay | D. hành vi phạm tội |

**concept**
```
• «tội phạm / hành vi phạm tội （ ）» → hành vi phạm tội
• Nghĩa: hành vi phạm tội.
```

**whyCorrect**
```
• Có vai trò riêng; đối chiếu với điều kiện stem.
• Khớp stem: bản dịch thuật ngữ JP↔VI đúng.
```

**whyWrong**

##### A
```
• Là gì? máy chủ tên miền — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «máy chủ tên miền» (A) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### B
```
• Là gì? server khách — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «server khách» (B) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### C
```
• Là gì? cấu hình vòng — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «cấu hình vòng» (C) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

**whatIs**
```
{
  "A": "máy chủ tên miền — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "server khách — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "cấu hình vòng — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "hành vi phạm tội — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Chọn định nghĩa/nghĩa phù hợp nhất với thuật ngữ trong đề.
• Thuật ngữ: «tội phạm / hành vi phạm tội （ ）»
```

**memoryTip**
```
• tội phạm / hành vi phạm tội （ ） ≈ hành vi phạm tội
• Ưu tiên định nghĩa chuẩn giáo trình, không dịch word-by-word lệch.
```

---

### 271/400 · `jit` id=397 · task=`slides` · num=387 · ans **D**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
【専門用語】大域的（たいいきてき） の意味として最も適切なものはどれか。
```

**Options**

- **A.** máy chủ tên miền
- **B.** tấn công
- **C.** mạng toàn cầu
- **D.** toàn cục ✅

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | 【Thuật ngữ】Nghĩa nào phù hợp nhất với thuật ngữ trong đề? |
| optionsVi.A | máy chủ tên miền |
| optionsVi.B | tấn công |
| optionsVi.C | mạng toàn cầu |
| optionsVi.D | toàn cục |
| answerDisplay | D. toàn cục |

**concept**
```
• « （ ）» → toàn cục
• Nghĩa: toàn cục.
```

**whyCorrect**
```
• Có vai trò riêng; đối chiếu với điều kiện stem.
• Khớp stem: bản dịch thuật ngữ JP↔VI đúng.
```

**whyWrong**

##### A
```
• Là gì? máy chủ tên miền — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «máy chủ tên miền» (A) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### B
```
• Là gì? tấn công — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «tấn công» (B) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### C
```
• Là gì? mạng toàn cầu — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «mạng toàn cầu» (C) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

**whatIs**
```
{
  "A": "máy chủ tên miền — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "tấn công — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "mạng toàn cầu — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "toàn cục — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Chọn định nghĩa/nghĩa phù hợp nhất với thuật ngữ trong đề.
• Thuật ngữ: « （ ）»
```

**memoryTip**
```
• （ ） ≈ toàn cục
• Ưu tiên định nghĩa chuẩn giáo trình, không dịch word-by-word lệch.
```

---

### 272/400 · `jit` id=398 · task=`slides` · num=388 · ans **C**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
【専門用語】ポータブルオーディオ（portable audio） の意味として最も適切なものはどれか。
```

**Options**

- **A.** toàn cục
- **B.** điều khiển từ xa
- **C.** thiết bị nghe nhìn di động ✅
- **D.** thiết bị tập trung đường truyền

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | 【Thuật ngữ】Nghĩa nào phù hợp nhất với thuật ngữ trong đề? |
| optionsVi.A | toàn cục |
| optionsVi.B | điều khiển từ xa |
| optionsVi.C | thiết bị nghe nhìn di động |
| optionsVi.D | thiết bị tập trung đường truyền |
| answerDisplay | C. thiết bị nghe nhìn di động |

**concept**
```
• « （portable audio）» → thiết bị nghe nhìn di động
• Nghĩa: thiết bị nghe nhìn di động.
```

**whyCorrect**
```
• Nghĩa đúng: thiết bị nghe nhìn di động
```

**whyWrong**

##### A
```
• Là gì? toàn cục — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «toàn cục» (A) không thỏa: đúng lệnh/khái niệm CSDL.
```

##### B
```
• Là gì? điều khiển từ xa — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «điều khiển từ xa» (B) không thỏa: đúng lệnh/khái niệm CSDL.
```

##### D
```
• Là gì? thiết bị tập trung đường truyền
• Dùng để làm gì? Phạm trù/khái niệm trong lý thuyết đề cập.
• Vì sao sai? «thiết bị tập trung đường truyền» (D) không thỏa: đúng lệnh/khái niệm CSDL.
```

**whatIs**
```
{
  "A": "toàn cục — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "điều khiển từ xa — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "thiết bị nghe nhìn di động",
  "D": "thiết bị tập trung đường truyền"
}
```

**intent**
```
• Chọn định nghĩa/nghĩa phù hợp nhất với thuật ngữ trong đề.
• Thuật ngữ: « （portable audio）»
```

**memoryTip**
```
• （portable audio） ≈ thiết bị nghe nhìn di động
• Ưu tiên định nghĩa chuẩn giáo trình, không dịch word-by-word lệch.
```

---

### 273/400 · `jit` id=399 · task=`slides` · num=389 · ans **B**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
【専門用語】局所的（きょくしょてき） の意味として最も適切なものはどれか。
```

**Options**

- **A.** mạng kiểu lưới
- **B.** tính cục bộ ✅
- **C.** đồng đẳng
- **D.** hệ thống xử lý tập trung

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | 【Thuật ngữ】Nghĩa nào phù hợp nhất với thuật ngữ trong đề? |
| optionsVi.A | mạng kiểu lưới |
| optionsVi.B | tính cục bộ |
| optionsVi.C | đồng đẳng |
| optionsVi.D | hệ thống xử lý tập trung |
| answerDisplay | B. tính cục bộ |

**concept**
```
• « （ ）» → tính cục bộ
• Nghĩa: tính cục bộ.
```

**whyCorrect**
```
• Có vai trò riêng; đối chiếu với điều kiện stem.
• Khớp stem: bản dịch thuật ngữ JP↔VI đúng.
```

**whyWrong**

##### A
```
• Là gì? mạng kiểu lưới — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «mạng kiểu lưới» (A) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### C
```
• Là gì? đồng đẳng — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «đồng đẳng» (C) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### D
```
• Là gì? hệ thống xử lý tập trung
• Dùng để làm gì? Phạm trù/khái niệm trong lý thuyết đề cập.
• Vì sao sai? «hệ thống xử lý tập trung» (D) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

**whatIs**
```
{
  "A": "mạng kiểu lưới — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "tính cục bộ — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "đồng đẳng — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "hệ thống xử lý tập trung"
}
```

**intent**
```
• Chọn định nghĩa/nghĩa phù hợp nhất với thuật ngữ trong đề.
• Thuật ngữ: « （ ）»
```

**memoryTip**
```
• （ ） ≈ tính cục bộ
• Ưu tiên định nghĩa chuẩn giáo trình, không dịch word-by-word lệch.
```

---

### 274/400 · `jit` id=400 · task=`slides` · num=390 · ans **B**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
【専門用語】攻撃（こうげき） の意味として最も適切なものはどれか。
```

**Options**

- **A.** hệ thống xử lý phân tán
- **B.** tấn công ✅
- **C.** sắp xếp theo tầng
- **D.** hành vi phạm tội

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | 【Thuật ngữ】Nghĩa nào phù hợp nhất với thuật ngữ trong đề? |
| optionsVi.A | hệ thống xử lý phân tán |
| optionsVi.B | tấn công |
| optionsVi.C | sắp xếp theo tầng |
| optionsVi.D | hành vi phạm tội |
| answerDisplay | B. tấn công |

**concept**
```
• « （ ）» → tấn công
• Nghĩa: tấn công.
```

**whyCorrect**
```
• Có vai trò riêng; đối chiếu với điều kiện stem.
• Khớp stem: bản dịch thuật ngữ JP↔VI đúng.
```

**whyWrong**

##### A
```
• Là gì? hệ thống xử lý phân tán
• Dùng để làm gì? Phạm trù/khái niệm trong lý thuyết đề cập.
• Vì sao sai? «hệ thống xử lý phân tán» (A) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### C
```
• Là gì? sắp xếp theo tầng — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «sắp xếp theo tầng» (C) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### D
```
• Là gì? hành vi phạm tội — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «hành vi phạm tội» (D) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

**whatIs**
```
{
  "A": "hệ thống xử lý phân tán",
  "B": "tấn công — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "sắp xếp theo tầng — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "hành vi phạm tội — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Chọn định nghĩa/nghĩa phù hợp nhất với thuật ngữ trong đề.
• Thuật ngữ: « （ ）»
```

**memoryTip**
```
• （ ） ≈ tấn công
• Ưu tiên định nghĩa chuẩn giáo trình, không dịch word-by-word lệch.
```

---

### 275/400 · `jit` id=409 · task=`slides` · num=399 · ans **A**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
【専門用語】人工言語（じんこうげんご） の意味として最も適切なものはどれか。
```

**Options**

- **A.** ngôn ngữ nhân tạo ✅
- **B.** có lợi
- **C.** lớp mạng
- **D.** ghép

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | 【Thuật ngữ】Nghĩa nào phù hợp nhất với thuật ngữ trong đề? |
| optionsVi.A | ngôn ngữ nhân tạo |
| optionsVi.B | có lợi |
| optionsVi.C | lớp mạng |
| optionsVi.D | ghép |
| answerDisplay | A. ngôn ngữ nhân tạo |

**concept**
```
• « （ ）» → ngôn ngữ nhân tạo
• Nghĩa: ngôn ngữ nhân tạo.
```

**whyCorrect**
```
• Có vai trò riêng; đối chiếu với điều kiện stem.
• Khớp stem: bản dịch thuật ngữ JP↔VI đúng.
```

**whyWrong**

##### B
```
• Là gì? có lợi — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «có lợi» (B) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### C
```
• Là gì? lớp mạng — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «lớp mạng» (C) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### D
```
• Là gì? ghép — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «ghép» (D) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

**whatIs**
```
{
  "A": "ngôn ngữ nhân tạo — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "có lợi — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "lớp mạng — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "ghép — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Chọn định nghĩa/nghĩa phù hợp nhất với thuật ngữ trong đề.
• Thuật ngữ: « （ ）»
```

**memoryTip**
```
• （ ） ≈ ngôn ngữ nhân tạo
• Ưu tiên định nghĩa chuẩn giáo trình, không dịch word-by-word lệch.
```

---

### 276/400 · `jit` id=410 · task=`slides` · num=400 · ans **A**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
【専門用語】本質的な（ほんしつてきな） の意味として最も適切なものはどれか。
```

**Options**

- **A.** tính căn bản ✅
- **B.** lớp giao vận
- **C.** hệ nhị phân
- **D.** cung cấp miễn phí

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | 【Thuật ngữ】Nghĩa nào phù hợp nhất với thuật ngữ trong đề? |
| optionsVi.A | tính căn bản |
| optionsVi.B | lớp giao vận |
| optionsVi.C | hệ nhị phân |
| optionsVi.D | cung cấp miễn phí |
| answerDisplay | A. tính căn bản |

**concept**
```
• « （ ）» → tính căn bản
• Nghĩa: tính căn bản.
```

**whyCorrect**
```
• Có vai trò riêng; đối chiếu với điều kiện stem.
• Khớp stem: bản dịch thuật ngữ JP↔VI đúng.
```

**whyWrong**

##### B
```
• Là gì? lớp giao vận — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «lớp giao vận» (B) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### C
```
• Là gì? Mã/dữ liệu nhị phân.
• Dùng để làm gì? Biểu diễn 0/1.
• Vì sao sai? «hệ nhị phân» (C) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### D
```
• Là gì? cung cấp miễn phí — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «cung cấp miễn phí» (D) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

**whatIs**
```
{
  "A": "tính căn bản — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "lớp giao vận — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Mã/dữ liệu nhị phân.",
  "D": "cung cấp miễn phí — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Chọn định nghĩa/nghĩa phù hợp nhất với thuật ngữ trong đề.
• Thuật ngữ: « （ ）»
```

**memoryTip**
```
• （ ） ≈ tính căn bản
• Ưu tiên định nghĩa chuẩn giáo trình, không dịch word-by-word lệch.
```

---

### 277/400 · `jit` id=411 · task=`slides` · num=401 · ans **D**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
【専門用語】IP アドレス（IP address） の意味として最も適切なものはどれか。
```

**Options**

- **A.** chia, ngắt
- **B.** 動画
- **C.** tiêu đề
- **D.** địa chỉ IP ✅

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | 【Thuật ngữ】Nghĩa nào phù hợp nhất với thuật ngữ trong đề? |
| optionsVi.A | chia, ngắt |
| optionsVi.B | video / ảnh động |
| optionsVi.C | tiêu đề |
| optionsVi.D | địa chỉ IP |
| answerDisplay | D. địa chỉ IP |

**concept**
```
• «IP （IP address）» → địa chỉ IP
• Nghĩa: địa chỉ IP.
```

**whyCorrect**
```
• Có vai trò riêng; đối chiếu với điều kiện stem.
• Khớp stem: bản dịch thuật ngữ JP↔VI đúng.
```

**whyWrong**

##### A
```
• Là gì? chia, ngắt — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «chia, ngắt» (A) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### B
```
• Là gì? 動画 (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «動画» (B) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### C
```
• Là gì? tiêu đề — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «tiêu đề» (C) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

**whatIs**
```
{
  "A": "chia, ngắt — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "動画 (thuật ngữ JP).",
  "C": "tiêu đề — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "địa chỉ IP — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Chọn định nghĩa/nghĩa phù hợp nhất với thuật ngữ trong đề.
• Thuật ngữ: «IP （IP address）»
```

**memoryTip**
```
• IP （IP address） ≈ địa chỉ IP
• Ưu tiên định nghĩa chuẩn giáo trình, không dịch word-by-word lệch.
```

---

### 278/400 · `jit` id=412 · task=`slides` · num=402 · ans **B**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
【専門用語】無償奉仕（むしょうほうし） の意味として最も適切なものはどれか。
```

**Options**

- **A.** mã hóa
- **B.** cung cấp miễn phí ✅
- **C.** thẻ , từ khóa
- **D.** giao thức

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | 【Thuật ngữ】Nghĩa nào phù hợp nhất với thuật ngữ trong đề? |
| optionsVi.A | mã hóa |
| optionsVi.B | cung cấp miễn phí |
| optionsVi.C | thẻ , từ khóa |
| optionsVi.D | giao thức |
| answerDisplay | B. cung cấp miễn phí |

**concept**
```
• « （ ）» → cung cấp miễn phí
• Nghĩa: cung cấp miễn phí.
```

**whyCorrect**
```
• Có vai trò riêng; đối chiếu với điều kiện stem.
• Khớp stem: bản dịch thuật ngữ JP↔VI đúng.
```

**whyWrong**

##### A
```
• Là gì? Mã hóa — biến plaintext thành ciphertext.
• Dùng để làm gì? Bảo mật nội dung khi truyền/lưu.
• Vì sao sai? «mã hóa» (A) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### C
```
• Là gì? thẻ , từ khóa — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «thẻ , từ khóa» (C) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### D
```
• Là gì? giao thức — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «giao thức» (D) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

**whatIs**
```
{
  "A": "Mã hóa — biến plaintext thành ciphertext.",
  "B": "cung cấp miễn phí — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "thẻ , từ khóa — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "giao thức — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Chọn định nghĩa/nghĩa phù hợp nhất với thuật ngữ trong đề.
• Thuật ngữ: « （ ）»
```

**memoryTip**
```
• （ ） ≈ cung cấp miễn phí
• Ưu tiên định nghĩa chuẩn giáo trình, không dịch word-by-word lệch.
```

---

### 279/400 · `jit` id=413 · task=`slides` · num=403 · ans **B**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
【専門用語】サブネットマスク（subnet mask） の意味として最も適切なものはどれか。
```

**Options**

- **A.** chuỗi ký tự
- **B.** mặt nạ mạng con ✅
- **C.** tối ưu hóa công cụ tìm kiếm
- **D.** giao thức mạng

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | 【Thuật ngữ】Nghĩa nào phù hợp nhất với thuật ngữ trong đề? |
| optionsVi.A | chuỗi ký tự |
| optionsVi.B | mặt nạ mạng con |
| optionsVi.C | tối ưu hóa công cụ tìm kiếm |
| optionsVi.D | giao thức mạng |
| answerDisplay | B. mặt nạ mạng con |

**concept**
```
• « （subnet mask）» → mặt nạ mạng con
• Nghĩa: mặt nạ mạng con.
```

**whyCorrect**
```
• Có vai trò riêng; đối chiếu với điều kiện stem.
• Khớp stem: bản dịch thuật ngữ JP↔VI đúng.
```

**whyWrong**

##### A
```
• Là gì? chuỗi ký tự — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «chuỗi ký tự» (A) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### C
```
• Là gì? tối ưu hóa công cụ tìm kiếm
• Dùng để làm gì? Phạm trù/khái niệm trong lý thuyết đề cập.
• Vì sao sai? «tối ưu hóa công cụ tìm kiếm» (C) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### D
```
• Là gì? giao thức mạng — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «giao thức mạng» (D) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

**whatIs**
```
{
  "A": "chuỗi ký tự — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "mặt nạ mạng con — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "tối ưu hóa công cụ tìm kiếm",
  "D": "giao thức mạng — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Chọn định nghĩa/nghĩa phù hợp nhất với thuật ngữ trong đề.
• Thuật ngữ: « （subnet mask）»
```

**memoryTip**
```
• （subnet mask） ≈ mặt nạ mạng con
• Ưu tiên định nghĩa chuẩn giáo trình, không dịch word-by-word lệch.
```

---

### 280/400 · `jit` id=414 · task=`slides` · num=404 · ans **B**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
【専門用語】大幅に（おおはばに） の意味として最も適切なものはどれか。
```

**Options**

- **A.** giao thức mạng
- **B.** lớn ✅
- **C.** tiếp thị bằng công cụ tìm kiếm
- **D.** mô hình kết nối hệ thống mở

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | 【Thuật ngữ】Nghĩa nào phù hợp nhất với thuật ngữ trong đề? |
| optionsVi.A | giao thức mạng |
| optionsVi.B | lớn |
| optionsVi.C | tiếp thị bằng công cụ tìm kiếm |
| optionsVi.D | mô hình kết nối hệ thống mở |
| answerDisplay | B. lớn |

**concept**
```
• « （ ）» → lớn
• Nghĩa: lớn.
```

**whyCorrect**
```
• Có vai trò riêng; đối chiếu với điều kiện stem.
• Khớp stem: bản dịch thuật ngữ JP↔VI đúng.
```

**whyWrong**

##### A
```
• Là gì? giao thức mạng — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «giao thức mạng» (A) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### C
```
• Là gì? tiếp thị bằng công cụ tìm kiếm
• Dùng để làm gì? Phạm trù/khái niệm trong lý thuyết đề cập.
• Vì sao sai? «tiếp thị bằng công cụ tìm kiếm» (C) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### D
```
• Là gì? mô hình kết nối hệ thống mở
• Dùng để làm gì? Phạm trù/khái niệm trong lý thuyết đề cập.
• Vì sao sai? «mô hình kết nối hệ thống mở» (D) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

**whatIs**
```
{
  "A": "giao thức mạng — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "lớn — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "tiếp thị bằng công cụ tìm kiếm",
  "D": "mô hình kết nối hệ thống mở"
}
```

**intent**
```
• Chọn định nghĩa/nghĩa phù hợp nhất với thuật ngữ trong đề.
• Thuật ngữ: « （ ）»
```

**memoryTip**
```
• （ ） ≈ lớn
• Ưu tiên định nghĩa chuẩn giáo trình, không dịch word-by-word lệch.
```

---

### 281/400 · `jit` id=415 · task=`slides` · num=405 · ans **C**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
【専門用語】物理層（ぶつりそう） の意味として最も適切なものはどれか。
```

**Options**

- **A.** chia đều
- **B.** làm tổn hại
- **C.** lớp vật lý ✅
- **D.** 動画

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | 【Thuật ngữ】Nghĩa nào phù hợp nhất với «tầng Physical»? |
| optionsVi.A | chia đều |
| optionsVi.B | làm tổn hại |
| optionsVi.C | lớp vật lý |
| optionsVi.D | video / ảnh động |
| answerDisplay | C. lớp vật lý |

**concept**
```
• «tầng Physical（ ）» → lớp vật lý
• Nghĩa: lớp vật lý.
```

**whyCorrect**
```
• Có vai trò riêng; đối chiếu với điều kiện stem.
• Khớp stem: bản dịch thuật ngữ JP↔VI đúng.
```

**whyWrong**

##### A
```
• Là gì? chia đều — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «chia đều» (A) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### B
```
• Là gì? làm tổn hại — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «làm tổn hại» (B) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### D
```
• Là gì? 動画 (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «動画» (D) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

**whatIs**
```
{
  "A": "chia đều — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "làm tổn hại — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "lớp vật lý — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "動画 (thuật ngữ JP)."
}
```

**intent**
```
• Chọn định nghĩa/nghĩa phù hợp nhất với thuật ngữ trong đề.
• Thuật ngữ: «tầng Physical（ ）»
```

**memoryTip**
```
• tầng Physical（ ） ≈ lớp vật lý
• Ưu tiên định nghĩa chuẩn giáo trình, không dịch word-by-word lệch.
```

---

### 282/400 · `jit` id=416 · task=`slides` · num=406 · ans **D**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
【専門用語】一覧表（いちらんひょう） の意味として最も適切なものはどれか。
```

**Options**

- **A.** máy chủ trung gian
- **B.** lớp phiên
- **C.** địa chỉ IP
- **D.** bảng kê ✅

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | 【Thuật ngữ】Nghĩa nào phù hợp nhất với thuật ngữ trong đề? |
| optionsVi.A | máy chủ trung gian |
| optionsVi.B | lớp phiên |
| optionsVi.C | địa chỉ IP |
| optionsVi.D | bảng kê |
| answerDisplay | D. bảng kê |

**concept**
```
• « （ ）» → bảng kê
• Nghĩa: bảng kê.
```

**whyCorrect**
```
• Có vai trò riêng; đối chiếu với điều kiện stem.
• Khớp stem: bản dịch thuật ngữ JP↔VI đúng.
```

**whyWrong**

##### A
```
• Là gì? máy chủ trung gian — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «máy chủ trung gian» (A) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### B
```
• Là gì? lớp phiên — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «lớp phiên» (B) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### C
```
• Là gì? địa chỉ IP — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «địa chỉ IP» (C) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

**whatIs**
```
{
  "A": "máy chủ trung gian — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "lớp phiên — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "địa chỉ IP — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "bảng kê — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Chọn định nghĩa/nghĩa phù hợp nhất với thuật ngữ trong đề.
• Thuật ngữ: « （ ）»
```

**memoryTip**
```
• （ ） ≈ bảng kê
• Ưu tiên định nghĩa chuẩn giáo trình, không dịch word-by-word lệch.
```

---

### 283/400 · `jit` id=417 · task=`slides` · num=407 · ans **D**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
【専門用語】次のベトナム語の用語を日本語に直しなさい。 giao thức mạng
```

**Options**

- **A.** 不足
- **B.** chuyển tiếp
- **C.** プロトコル
- **D.** IP ✅

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | 【Thuật ngữ】Hãy dịch thuật ngữ tiếng Việt sau sang tiếng Nhật: «giao thức mạng» |
| optionsVi.A | 不足 — khái niệm kỹ thuật |
| optionsVi.B | chuyển tiếp |
| optionsVi.C | プロトコル — khái niệm kỹ thuật |
| optionsVi.D | IP |
| answerDisplay | D. IP |

**concept**
```
• «giao thức mạng» trong tiếng Nhật là «IP».
```

**whyCorrect**
```
• «giao thức mạng» = IP
• Việt «giao thức mạng» ⇔ Nhật «IP».
• IP
• Chọn đúng cặp dịch thuật ngữ, không chọn từ gần nghĩa khác lĩnh vực.
```

**whyWrong**

##### A
```
• Là gì? 不足 (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «不足» (A) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### B
```
• Là gì? chuyển tiếp — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «chuyển tiếp» (B) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### C
```
• Là gì? プロトコル (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «プロトコル» (C) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

**whatIs**
```
{
  "A": "不足 (thuật ngữ JP).",
  "B": "chuyển tiếp — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "プロトコル (thuật ngữ JP).",
  "D": "IP — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Câu từ vựng: cho thuật ngữ tiếng Việt → chọn bản tiếng Nhật đúng.
• Thuật ngữ cần dịch: «giao thức mạng»
```

**memoryTip**
```
• giao thức mạng = IP
• Học theo cặp VI ↔ JP, tránh nhầm từ kanji/katakana gần.
```

---

### 284/400 · `jit` id=418 · task=`slides` · num=408 · ans **A**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
【専門用語】次のベトナム語の用語を日本語に直しなさい。 phần mềm ứng dụng
```

**Options**

- **A.** アプリケーション ソフト ✅
- **B.** CGI
- **C.** 斜体（イタリック）
- **D.** ドメイン名

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | 【Thuật ngữ】Hãy dịch thuật ngữ tiếng Việt sau sang tiếng Nhật: «phần mềm ứng dụng» |
| optionsVi.A | アプリケーション ソフト — khái niệm kỹ thuật |
| optionsVi.B | CGI |
| optionsVi.C | chữ nghiêng (italic) |
| optionsVi.D | tên miền |
| answerDisplay | A. アプリケーション ソフト — khái niệm kỹ thuật |

**concept**
```
• «phần mềm ứng dụng» trong tiếng Nhật là «ứng dụng (application) ».
```

**whyCorrect**
```
• «phần mềm ứng dụng» = ứng dụng (application) • Việt «phần mềm ứng dụng» ⇔ Nhật «ứng dụng (application) ».
• phần mềm ứng dụng
• Chọn đúng cặp dịch thuật ngữ, không chọn từ gần nghĩa khác lĩnh vực.
```

**whyWrong**

##### B
```
• Là gì? CGI — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «CGI» (B) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### C
```
• Là gì? 斜体（イタリック） (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «斜体（イタリック）» (C) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### D
```
• Là gì? ドメイン名 (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «ドメイン名» (D) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

**whatIs**
```
{
  "A": "アプリケーション ソフト (thuật ngữ JP).",
  "B": "CGI — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "斜体（イタリック） (thuật ngữ JP).",
  "D": "ドメイン名 (thuật ngữ JP)."
}
```

**intent**
```
• Câu từ vựng: cho thuật ngữ tiếng Việt → chọn bản tiếng Nhật đúng.
• Thuật ngữ cần dịch: «phần mềm ứng dụng»
```

**memoryTip**
```
• phần mềm ứng dụng = ứng dụng (application) • Học theo cặp VI ↔ JP, tránh nhầm từ kanji/katakana gần.
```

---

### 285/400 · `jit` id=423 · task=`slides` · num=413 · ans **C**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
【専門用語】出力結果（しゅつりょくけっか） の意味として最も適切なものはどれか。
```

**Options**

- **A.** tính nhất quán
- **B.** thông qua
- **C.** kết quả xuất ra ✅
- **D.** thương mại tốc độ ánh sáng

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | 【Thuật ngữ】Nghĩa nào phù hợp nhất với thuật ngữ trong đề? |
| optionsVi.A | tính nhất quán |
| optionsVi.B | thông qua |
| optionsVi.C | kết quả xuất ra |
| optionsVi.D | thương mại tốc độ ánh sáng |
| answerDisplay | C. kết quả xuất ra |

**concept**
```
• « （ ）» → kết quả xuất ra
• Nghĩa: kết quả xuất ra.
```

**whyCorrect**
```
• Có vai trò riêng; đối chiếu với điều kiện stem.
• Khớp stem: bản dịch thuật ngữ JP↔VI đúng.
```

**whyWrong**

##### A
```
• Là gì? tính nhất quán — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «tính nhất quán» (A) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### B
```
• Là gì? thông qua — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «thông qua» (B) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### D
```
• Là gì? thương mại tốc độ ánh sáng
• Dùng để làm gì? Phạm trù/khái niệm trong lý thuyết đề cập.
• Vì sao sai? «thương mại tốc độ ánh sáng» (D) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

**whatIs**
```
{
  "A": "tính nhất quán — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "thông qua — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "kết quả xuất ra — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "thương mại tốc độ ánh sáng"
}
```

**intent**
```
• Chọn định nghĩa/nghĩa phù hợp nhất với thuật ngữ trong đề.
• Thuật ngữ: « （ ）»
```

**memoryTip**
```
• （ ） ≈ kết quả xuất ra
• Ưu tiên định nghĩa chuẩn giáo trình, không dịch word-by-word lệch.
```

---

### 286/400 · `jit` id=424 · task=`slides` · num=414 · ans **B**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
【専門用語】オリジネータ（originator） の意味として最も適切なものはどれか。
```

**Options**

- **A.** khai thác dữ liệu
- **B.** người khởi đầu , người sáng tạo ✅
- **C.** kết quả xuất ra
- **D.** nghiên cứu sản phẩm

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | 【Thuật ngữ】Nghĩa nào phù hợp nhất với thuật ngữ trong đề? |
| optionsVi.A | khai thác dữ liệu |
| optionsVi.B | người khởi đầu , người sáng tạo |
| optionsVi.C | kết quả xuất ra |
| optionsVi.D | nghiên cứu sản phẩm |
| answerDisplay | B. người khởi đầu , người sáng tạo |

**concept**
```
• « （originator）» → người khởi đầu, người sáng tạo
• Nghĩa: người khởi đầu, người sáng tạo.
```

**whyCorrect**
```
• Nghĩa đúng: người khởi đầu , người sáng tạo
```

**whyWrong**

##### A
```
• Là gì? khai thác dữ liệu — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «khai thác dữ liệu» (A) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### C
```
• Là gì? kết quả xuất ra — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «kết quả xuất ra» (C) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### D
```
• Là gì? nghiên cứu sản phẩm — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «nghiên cứu sản phẩm» (D) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

**whatIs**
```
{
  "A": "khai thác dữ liệu — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "người khởi đầu , người sáng tạo",
  "C": "kết quả xuất ra — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "nghiên cứu sản phẩm — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Chọn định nghĩa/nghĩa phù hợp nhất với thuật ngữ trong đề.
• Thuật ngữ: « （originator）»
```

**memoryTip**
```
• （originator） ≈ người khởi đầu, người sáng tạo
• Ưu tiên định nghĩa chuẩn giáo trình, không dịch word-by-word lệch.
```

---

### 287/400 · `jit` id=425 · task=`slides` · num=415 · ans **A**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
【専門用語】匿名（とくめい） の意味として最も適切なものはどれか。
```

**Options**

- **A.** nặc danh ✅
- **B.** quá trình lưu thông
- **C.** xa
- **D.** thông qua

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | 【Thuật ngữ】Nghĩa nào phù hợp nhất với thuật ngữ trong đề? |
| optionsVi.A | nặc danh |
| optionsVi.B | quá trình lưu thông |
| optionsVi.C | xa |
| optionsVi.D | thông qua |
| answerDisplay | A. nặc danh |

**concept**
```
• « （ ）» → nặc danh
• Nghĩa: nặc danh.
```

**whyCorrect**
```
• Có vai trò riêng; đối chiếu với điều kiện stem.
• Khớp stem: bản dịch thuật ngữ JP↔VI đúng.
```

**whyWrong**

##### B
```
• Là gì? quá trình lưu thông — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «quá trình lưu thông» (B) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### C
```
• Là gì? xa — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «xa» (C) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### D
```
• Là gì? thông qua — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «thông qua» (D) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

**whatIs**
```
{
  "A": "nặc danh — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "quá trình lưu thông — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "xa — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "thông qua — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Chọn định nghĩa/nghĩa phù hợp nhất với thuật ngữ trong đề.
• Thuật ngữ: « （ ）»
```

**memoryTip**
```
• （ ） ≈ nặc danh
• Ưu tiên định nghĩa chuẩn giáo trình, không dịch word-by-word lệch.
```

---

### 288/400 · `jit` id=426 · task=`slides` · num=416 · ans **D**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
【専門用語】電子マネー（でんし money） の意味として最も適切なものはどれか。
```

**Options**

- **A.** kiểu mở
- **B.** giao dịch giữa doanh nghiệp với doanh nghiệp
- **C.** nhổ ra , ngắt
- **D.** tiền điện tử ✅

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | 【Thuật ngữ】Nghĩa nào phù hợp nhất với «tiền điện tử»? |
| optionsVi.A | kiểu mở |
| optionsVi.B | giao dịch giữa doanh nghiệp với doanh nghiệp |
| optionsVi.C | nhổ ra , ngắt |
| optionsVi.D | tiền điện tử |
| answerDisplay | D. tiền điện tử |

**concept**
```
• «tiền điện tử（ money）» → tiền điện tử
• Nghĩa: tiền điện tử.
```

**whyCorrect**
```
• Có vai trò riêng; đối chiếu với điều kiện stem.
• Khớp stem: bản dịch thuật ngữ JP↔VI đúng.
```

**whyWrong**

##### A
```
• Là gì? kiểu mở — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «kiểu mở» (A) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### B
```
• Là gì? Giao dịch/ACID — đơn vị công việc DB nhất quán.
• Dùng để làm gì? Commit/rollback bảo toàn.
• Vì sao sai? «giao dịch giữa doanh nghiệp với doanh nghiệp» (B) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### C
```
• Là gì? nhổ ra , ngắt — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «nhổ ra , ngắt» (C) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

**whatIs**
```
{
  "A": "kiểu mở — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Giao dịch/ACID — đơn vị công việc DB nhất quán.",
  "C": "nhổ ra , ngắt — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "tiền điện tử — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Chọn định nghĩa/nghĩa phù hợp nhất với thuật ngữ trong đề.
• Thuật ngữ: «tiền điện tử（ money）»
```

**memoryTip**
```
• tiền điện tử（ money） ≈ tiền điện tử
• Ưu tiên định nghĩa chuẩn giáo trình, không dịch word-by-word lệch.
```

---

### 289/400 · `jit` id=427 · task=`slides` · num=417 · ans **A**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
【専門用語】BtoC 企業対消費者（Business to Consumer きぎょうたいしょうひしゃ） の意味として最も適切なものはどれか。
```

**Options**

- **A.** doanh nghiệp với người tiêu dùng ✅
- **B.** tính nhất quán
- **C.** ghép
- **D.** hệ thống đặt hàng điện tử

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | 【Thuật ngữ】Nghĩa nào phù hợp nhất với thuật ngữ trong đề? |
| optionsVi.A | doanh nghiệp với người tiêu dùng |
| optionsVi.B | tính nhất quán |
| optionsVi.C | ghép |
| optionsVi.D | hệ thống đặt hàng điện tử |
| answerDisplay | A. doanh nghiệp với người tiêu dùng |

**concept**
```
• «BtoC （Business to Consumer ）» → doanh nghiệp với người tiêu dùng
• Nghĩa: doanh nghiệp với người tiêu dùng.
```

**whyCorrect**
```
• Nghĩa đúng: doanh nghiệp với người tiêu dùng
```

**whyWrong**

##### B
```
• Là gì? tính nhất quán — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «tính nhất quán» (B) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### C
```
• Là gì? ghép — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «ghép» (C) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### D
```
• Là gì? hệ thống đặt hàng điện tử
• Dùng để làm gì? Phạm trù/khái niệm trong lý thuyết đề cập.
• Vì sao sai? «hệ thống đặt hàng điện tử» (D) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

**whatIs**
```
{
  "A": "doanh nghiệp với người tiêu dùng",
  "B": "tính nhất quán — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "ghép — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "hệ thống đặt hàng điện tử"
}
```

**intent**
```
• Chọn định nghĩa/nghĩa phù hợp nhất với thuật ngữ trong đề.
• Thuật ngữ: «BtoC （Business to Consumer ）»
```

**memoryTip**
```
• BtoC （Business to Consumer ） ≈ doanh nghiệp với người tiêu dùng
• Ưu tiên định nghĩa chuẩn giáo trình, không dịch word-by-word lệch.
```

---

### 290/400 · `jit` id=428 · task=`slides` · num=418 · ans **D**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
【専門用語】受注（じゅちゅう） の意味として最も適切なものはどれか。
```

**Options**

- **A.** thông qua
- **B.** thương mại tốc độ ánh sáng
- **C.** đấu giá qua mạng
- **D.** nhận đơn hàng ✅

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | 【Thuật ngữ】Nghĩa nào phù hợp nhất với thuật ngữ trong đề? |
| optionsVi.A | thông qua |
| optionsVi.B | thương mại tốc độ ánh sáng |
| optionsVi.C | đấu giá qua mạng |
| optionsVi.D | nhận đơn hàng |
| answerDisplay | D. nhận đơn hàng |

**concept**
```
• « （ ）» → nhận đơn hàng
• Nghĩa: nhận đơn hàng.
```

**whyCorrect**
```
• Có vai trò riêng; đối chiếu với điều kiện stem.
• Khớp stem: bản dịch thuật ngữ JP↔VI đúng.
```

**whyWrong**

##### A
```
• Là gì? thông qua — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «thông qua» (A) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### B
```
• Là gì? thương mại tốc độ ánh sáng
• Dùng để làm gì? Phạm trù/khái niệm trong lý thuyết đề cập.
• Vì sao sai? «thương mại tốc độ ánh sáng» (B) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### C
```
• Là gì? đấu giá qua mạng — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «đấu giá qua mạng» (C) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

**whatIs**
```
{
  "A": "thông qua — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "thương mại tốc độ ánh sáng",
  "C": "đấu giá qua mạng — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "nhận đơn hàng — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Chọn định nghĩa/nghĩa phù hợp nhất với thuật ngữ trong đề.
• Thuật ngữ: « （ ）»
```

**memoryTip**
```
• （ ） ≈ nhận đơn hàng
• Ưu tiên định nghĩa chuẩn giáo trình, không dịch word-by-word lệch.
```

---

### 291/400 · `jit` id=429 · task=`slides` · num=419 · ans **D**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
【専門用語】電子商取引（でんししょうとりひき） の意味として最も適切なものはどれか。
```

**Options**

- **A.** giá trị
- **B.** quản trị quan hệ khách hàng
- **C.** thương mại điện tử
- **D.** giao dịch thương mại điện tử ✅

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | 【Thuật ngữ】Nghĩa nào phù hợp nhất với «thương mại điện tử»? |
| optionsVi.A | giá trị |
| optionsVi.B | quản trị quan hệ khách hàng |
| optionsVi.C | thương mại điện tử |
| optionsVi.D | giao dịch thương mại điện tử |
| answerDisplay | D. giao dịch thương mại điện tử |

**concept**
```
• «thương mại điện tử（ ）» → giao dịch thương mại điện tử
• Nghĩa: giao dịch thương mại điện tử.
```

**whyCorrect**
```
• Nghĩa đúng: giao dịch thương mại điện tử
```

**whyWrong**

##### A
```
• Là gì? giá trị — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «giá trị» (A) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### B
```
• Là gì? quản trị quan hệ khách hàng
• Dùng để làm gì? Phạm trù/khái niệm trong lý thuyết đề cập.
• Vì sao sai? «quản trị quan hệ khách hàng» (B) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### C
```
• Là gì? thương mại điện tử — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «thương mại điện tử» (C) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

**whatIs**
```
{
  "A": "giá trị — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "quản trị quan hệ khách hàng",
  "C": "thương mại điện tử — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Giao dịch/ACID — đơn vị công việc DB nhất quán."
}
```

**intent**
```
• Chọn định nghĩa/nghĩa phù hợp nhất với thuật ngữ trong đề.
• Thuật ngữ: «thương mại điện tử（ ）»
```

**memoryTip**
```
• thương mại điện tử（ ） ≈ giao dịch thương mại điện tử
• Ưu tiên định nghĩa chuẩn giáo trình, không dịch word-by-word lệch.
```

---

### 292/400 · `jit` id=430 · task=`slides` · num=420 · ans **D**

- **flags:** domain_shell
- **status:** `todo`

**Đề gốc**

```
【専門用語】次のベトナム語の用語を日本語に直しなさい。 thương mại tốc độ ánh sáng
```

**Options**

- **A.** バリュー
- **B.** 電子マネー
- **C.** 商品開発
- **D.** CALS ✅

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | 【Thuật ngữ】Hãy dịch thuật ngữ tiếng Việt sau sang tiếng Nhật: «thương mại tốc độ ánh sáng» |
| optionsVi.A | value (giá trị/tiền điện tử) |
| optionsVi.B | tiền điện tử |
| optionsVi.C | phát triển sản phẩm |
| optionsVi.D | CALS ban đầu nhằm chuỗi cung ứng ô tô (sai — quân sự) |
| answerDisplay | D. CALS ban đầu nhằm chuỗi cung ứng ô tô (sai — quân sự) |

**concept**
```
• «thương mại tốc độ ánh sáng» trong tiếng Nhật là «CALS».
```

**whyCorrect**
```
• «thương mại tốc độ ánh sáng» = CALS
• Việt «thương mại tốc độ ánh sáng» ⇔ Nhật «CALS».
• CALS ban đầu nhằm chuỗi cung ứng ô tô (sai — quân sự)
• Chọn đúng cặp dịch thuật ngữ, không chọn từ gần nghĩa khác lĩnh vực.
```

**whyWrong**

##### A
```
• Là gì? バリュー (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «バリュー» (A) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### B
```
• Là gì? 電子マネー (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «電子マネー» (B) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### C
```
• Là gì? 商品開発 (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «商品開発» (C) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

**whatIs**
```
{
  "A": "バリュー (thuật ngữ JP).",
  "B": "電子マネー (thuật ngữ JP).",
  "C": "商品開発 (thuật ngữ JP).",
  "D": "CALS — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Câu từ vựng: cho thuật ngữ tiếng Việt → chọn bản tiếng Nhật đúng.
• Thuật ngữ cần dịch: «thương mại tốc độ ánh sáng»
```

**memoryTip**
```
• thương mại tốc độ ánh sáng = CALS
• Học theo cặp VI ↔ JP, tránh nhầm từ kanji/katakana gần.
```

---

### 293/400 · `jit` id=437 · task=`slides` · num=427 · ans **B**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
【専門用語】認証（にんしょう） の意味として最も適切なものはどれか。
```

**Options**

- **A.** hình thành , tạo thành
- **B.** xác thực , chứng nhận ✅
- **C.** trước công nguyên
- **D.** 3

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | 【Thuật ngữ】Nghĩa nào phù hợp nhất với thuật ngữ trong đề? |
| optionsVi.A | hình thành , tạo thành |
| optionsVi.B | xác thực , chứng nhận |
| optionsVi.C | trước công nguyên |
| optionsVi.D | 3 |
| answerDisplay | B. xác thực , chứng nhận |

**concept**
```
• « （ ）» → xác thực, chứng nhận
• Nghĩa: xác thực, chứng nhận.
```

**whyCorrect**
```
• Login, token, sinh trắc…
• Khớp stem: bản dịch thuật ngữ JP↔VI đúng.
```

**whyWrong**

##### A
```
• Là gì? hình thành , tạo thành
• Dùng để làm gì? Phạm trù/khái niệm trong lý thuyết đề cập.
• Vì sao sai? «hình thành , tạo thành» (A) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### C
```
• Là gì? trước công nguyên — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «trước công nguyên» (C) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### D
```
• Là gì? 3 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «3» (D) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

**whatIs**
```
{
  "A": "hình thành , tạo thành",
  "B": "Authentication — xác minh danh tính.",
  "C": "trước công nguyên — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "3 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Chọn định nghĩa/nghĩa phù hợp nhất với thuật ngữ trong đề.
• Thuật ngữ: « （ ）»
```

**memoryTip**
```
• （ ） ≈ xác thực, chứng nhận
• Ưu tiên định nghĩa chuẩn giáo trình, không dịch word-by-word lệch.
```

---

### 294/400 · `jit` id=438 · task=`slides` · num=428 · ans **B**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
【専門用語】復元する（ふくげんする） の意味として最も適切なものはどれか。
```

**Options**

- **A.** xác thực , chứng nhận
- **B.** phục hồi ✅
- **C.** mã hóa thay thế
- **D.** phương thức khóa chung

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | 【Thuật ngữ】Nghĩa nào phù hợp nhất với thuật ngữ trong đề? |
| optionsVi.A | xác thực , chứng nhận |
| optionsVi.B | phục hồi |
| optionsVi.C | mã hóa thay thế |
| optionsVi.D | phương thức khóa chung |
| answerDisplay | B. phục hồi |

**concept**
```
• « （ ）» → phục hồi
• Nghĩa: phục hồi.
```

**whyCorrect**
```
• Có vai trò riêng; đối chiếu với điều kiện stem.
• Khớp stem: bản dịch thuật ngữ JP↔VI đúng.
```

**whyWrong**

##### A
```
• Là gì? Authentication — xác minh danh tính.
• Dùng để làm gì? Login, token, sinh trắc…
• Vì sao sai? «xác thực , chứng nhận» (A) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### C
```
• Là gì? Mã hóa — biến plaintext thành ciphertext.
• Dùng để làm gì? Bảo mật nội dung khi truyền/lưu.
• Vì sao sai? «mã hóa thay thế» (C) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### D
```
• Là gì? phương thức khóa chung
• Dùng để làm gì? Phạm trù/khái niệm trong lý thuyết đề cập.
• Vì sao sai? «phương thức khóa chung» (D) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

**whatIs**
```
{
  "A": "Authentication — xác minh danh tính.",
  "B": "phục hồi — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Mã hóa — biến plaintext thành ciphertext.",
  "D": "phương thức khóa chung"
}
```

**intent**
```
• Chọn định nghĩa/nghĩa phù hợp nhất với thuật ngữ trong đề.
• Thuật ngữ: « （ ）»
```

**memoryTip**
```
• （ ） ≈ phục hồi
• Ưu tiên định nghĩa chuẩn giáo trình, không dịch word-by-word lệch.
```

---

### 295/400 · `jit` id=439 · task=`slides` · num=429 · ans **D**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
【専門用語】秘密鍵（ひみつかぎ） の意味として最も適切なものはどれか。
```

**Options**

- **A.** mã hóa thay thế
- **B.** phương thức khóa chung
- **C.** 4
- **D.** mã khóa bí mật ✅

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | 【Thuật ngữ】Nghĩa nào phù hợp nhất với thuật ngữ trong đề? |
| optionsVi.A | mã hóa thay thế |
| optionsVi.B | phương thức khóa chung |
| optionsVi.C | 4 |
| optionsVi.D | mã khóa bí mật |
| answerDisplay | D. mã khóa bí mật |

**concept**
```
• « （ ）» → mã khóa bí mật
• Nghĩa: mã khóa bí mật.
```

**whyCorrect**
```
• Có vai trò riêng; đối chiếu với điều kiện stem.
• Khớp stem: bản dịch thuật ngữ JP↔VI đúng.
```

**whyWrong**

##### A
```
• Là gì? Mã hóa — biến plaintext thành ciphertext.
• Dùng để làm gì? Bảo mật nội dung khi truyền/lưu.
• Vì sao sai? «mã hóa thay thế» (A) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### B
```
• Là gì? phương thức khóa chung
• Dùng để làm gì? Phạm trù/khái niệm trong lý thuyết đề cập.
• Vì sao sai? «phương thức khóa chung» (B) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### C
```
• Là gì? 4 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «4» (C) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

**whatIs**
```
{
  "A": "Mã hóa — biến plaintext thành ciphertext.",
  "B": "phương thức khóa chung",
  "C": "4 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "mã khóa bí mật — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Chọn định nghĩa/nghĩa phù hợp nhất với thuật ngữ trong đề.
• Thuật ngữ: « （ ）»
```

**memoryTip**
```
• （ ） ≈ mã khóa bí mật
• Ưu tiên định nghĩa chuẩn giáo trình, không dịch word-by-word lệch.
```

---

### 296/400 · `jit` id=440 · task=`slides` · num=430 · ans **D**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
【専門用語】秘密鍵方式（ひみつかぎほうしき） の意味として最も適切なものはどれか。
```

**Options**

- **A.** mã hóa
- **B.** mã khóa công khai
- **C.** điểm quan trọng
- **D.** phương thức khóa bí mật ✅

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | 【Thuật ngữ】Nghĩa nào phù hợp nhất với thuật ngữ trong đề? |
| optionsVi.A | mã hóa |
| optionsVi.B | mã khóa công khai |
| optionsVi.C | điểm quan trọng |
| optionsVi.D | phương thức khóa bí mật |
| answerDisplay | D. phương thức khóa bí mật |

**concept**
```
• « （ ）» → phương thức khóa bí mật
• Nghĩa: phương thức khóa bí mật.
```

**whyCorrect**
```
• Phạm trù/khái niệm trong lý thuyết đề cập.
• Khớp stem: bản dịch thuật ngữ JP↔VI đúng.
```

**whyWrong**

##### A
```
• Là gì? Mã hóa — biến plaintext thành ciphertext.
• Dùng để làm gì? Bảo mật nội dung khi truyền/lưu.
• Vì sao sai? «mã hóa» (A) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### B
```
• Là gì? mã khóa công khai — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «mã khóa công khai» (B) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### C
```
• Là gì? điểm quan trọng — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «điểm quan trọng» (C) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

**whatIs**
```
{
  "A": "Mã hóa — biến plaintext thành ciphertext.",
  "B": "mã khóa công khai — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "điểm quan trọng — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "phương thức khóa bí mật"
}
```

**intent**
```
• Chọn định nghĩa/nghĩa phù hợp nhất với thuật ngữ trong đề.
• Thuật ngữ: « （ ）»
```

**memoryTip**
```
• （ ） ≈ phương thức khóa bí mật
• Ưu tiên định nghĩa chuẩn giáo trình, không dịch word-by-word lệch.
```

---

### 297/400 · `jit` id=441 · task=`slides` · num=431 · ans **D**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
【専門用語】錠（じょう） の意味として最も適切なものはどれか。
```

**Options**

- **A.** kiểu hoán vị
- **B.** phương thức khóa công khai
- **C.** đường kính
- **D.** khóa ✅

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | 【Thuật ngữ】Nghĩa nào phù hợp nhất với thuật ngữ trong đề? |
| optionsVi.A | kiểu hoán vị |
| optionsVi.B | phương thức khóa công khai |
| optionsVi.C | đường kính |
| optionsVi.D | khóa |
| answerDisplay | D. khóa |

**concept**
```
• « （ ）» → khóa
• Nghĩa: khóa.
```

**whyCorrect**
```
• Có vai trò riêng; đối chiếu với điều kiện stem.
• Khớp stem: bản dịch thuật ngữ JP↔VI đúng.
```

**whyWrong**

##### A
```
• Là gì? kiểu hoán vị — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «kiểu hoán vị» (A) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### B
```
• Là gì? phương thức khóa công khai
• Dùng để làm gì? Phạm trù/khái niệm trong lý thuyết đề cập.
• Vì sao sai? «phương thức khóa công khai» (B) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### C
```
• Là gì? đường kính — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «đường kính» (C) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

**whatIs**
```
{
  "A": "kiểu hoán vị — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "phương thức khóa công khai",
  "C": "đường kính — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "khóa — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Chọn định nghĩa/nghĩa phù hợp nhất với thuật ngữ trong đề.
• Thuật ngữ: « （ ）»
```

**memoryTip**
```
• （ ） ≈ khóa
• Ưu tiên định nghĩa chuẩn giáo trình, không dịch word-by-word lệch.
```

---

### 298/400 · `jit` id=442 · task=`slides` · num=432 · ans **D**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
【専門用語】当人（とうにん） の意味として最も適切なものはどれか。
```

**Options**

- **A.** kiểu hoán vị
- **B.** khóa
- **C.** mã hóa hoán vị
- **D.** bản thân người đó ✅

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | 【Thuật ngữ】Nghĩa nào phù hợp nhất với thuật ngữ trong đề? |
| optionsVi.A | kiểu hoán vị |
| optionsVi.B | khóa |
| optionsVi.C | mã hóa hoán vị |
| optionsVi.D | bản thân người đó |
| answerDisplay | D. bản thân người đó |

**concept**
```
• « （ ）» → bản thân người đó
• Nghĩa: bản thân người đó.
```

**whyCorrect**
```
• Có vai trò riêng; đối chiếu với điều kiện stem.
• Khớp stem: bản dịch thuật ngữ JP↔VI đúng.
```

**whyWrong**

##### A
```
• Là gì? kiểu hoán vị — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «kiểu hoán vị» (A) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### B
```
• Là gì? khóa — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «khóa» (B) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### C
```
• Là gì? Mã hóa — biến plaintext thành ciphertext.
• Dùng để làm gì? Bảo mật nội dung khi truyền/lưu.
• Vì sao sai? «mã hóa hoán vị» (C) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

**whatIs**
```
{
  "A": "kiểu hoán vị — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "khóa — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Mã hóa — biến plaintext thành ciphertext.",
  "D": "bản thân người đó — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Chọn định nghĩa/nghĩa phù hợp nhất với thuật ngữ trong đề.
• Thuật ngữ: « （ ）»
```

**memoryTip**
```
• （ ） ≈ bản thân người đó
• Ưu tiên định nghĩa chuẩn giáo trình, không dịch word-by-word lệch.
```

---

### 299/400 · `jit` id=443 · task=`slides` · num=433 · ans **B**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
【専門用語】古典的（こてんてき） の意味として最も適切なものはどれか。
```

**Options**

- **A.** mã hóa thay thế
- **B.** mang tính cổ điển ✅
- **C.** tiêu chuẩn mã hóa dữ liệu
- **D.** giải mã

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | 【Thuật ngữ】Nghĩa nào phù hợp nhất với thuật ngữ trong đề? |
| optionsVi.A | mã hóa thay thế |
| optionsVi.B | mang tính cổ điển |
| optionsVi.C | tiêu chuẩn mã hóa dữ liệu |
| optionsVi.D | giải mã |
| answerDisplay | B. mang tính cổ điển |

**concept**
```
• « （ ）» → mang tính cổ điển
• Nghĩa: mang tính cổ điển.
```

**whyCorrect**
```
• Analog continuous signal.
• Khớp stem: bản dịch thuật ngữ JP↔VI đúng.
```

**whyWrong**

##### A
```
• Là gì? Mã hóa — biến plaintext thành ciphertext.
• Dùng để làm gì? Bảo mật nội dung khi truyền/lưu.
• Vì sao sai? «mã hóa thay thế» (A) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### C
```
• Là gì? Mã hóa — biến plaintext thành ciphertext.
• Dùng để làm gì? Bảo mật nội dung khi truyền/lưu.
• Vì sao sai? «tiêu chuẩn mã hóa dữ liệu» (C) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### D
```
• Là gì? giải mã — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «giải mã» (D) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

**whatIs**
```
{
  "A": "Mã hóa — biến plaintext thành ciphertext.",
  "B": "Tín hiệu tương tự liên tục (dòng/áp…).",
  "C": "Mã hóa — biến plaintext thành ciphertext.",
  "D": "giải mã — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Chọn định nghĩa/nghĩa phù hợp nhất với thuật ngữ trong đề.
• Thuật ngữ: « （ ）»
```

**memoryTip**
```
• （ ） ≈ mang tính cổ điển
• Ưu tiên định nghĩa chuẩn giáo trình, không dịch word-by-word lệch.
```

---

### 300/400 · `jit` id=444 · task=`slides` · num=434 · ans **D**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
【専門用語】デジタル証明書（digital しょうめいしょ） の意味として最も適切なものはどれか。
```

**Options**

- **A.** mang tính cổ điển
- **B.** kiểu hoán vị
- **C.** điểm quan trọng
- **D.** chứng nhận kỹ thuật số ✅

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | 【Thuật ngữ】Nghĩa nào phù hợp nhất với «digital (số)»? |
| optionsVi.A | mang tính cổ điển |
| optionsVi.B | kiểu hoán vị |
| optionsVi.C | điểm quan trọng |
| optionsVi.D | chứng nhận kỹ thuật số |
| answerDisplay | D. chứng nhận kỹ thuật số |

**concept**
```
• «số (digital) （digital ）» → chứng nhận kỹ thuật số
• Nghĩa: chứng nhận kỹ thuật số.
```

**whyCorrect**
```
• Có vai trò riêng; đối chiếu với điều kiện stem.
• Khớp stem: đặc trưng tín hiệu/dữ liệu số.
```

**whyWrong**

##### A
```
• Là gì? Tín hiệu tương tự liên tục (dòng/áp…).
• Dùng để làm gì? Analog continuous signal.
• Vì sao sai? Dòng/áp liên tục là analog — digital là rời rạc/lượng tử hóa.
```

##### B
```
• Là gì? kiểu hoán vị — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «kiểu hoán vị» (B) không thỏa: đặc trưng tín hiệu/dữ liệu số.
```

##### C
```
• Là gì? điểm quan trọng — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «điểm quan trọng» (C) không thỏa: đặc trưng tín hiệu/dữ liệu số.
```

**whatIs**
```
{
  "A": "Tín hiệu tương tự liên tục (dòng/áp…).",
  "B": "kiểu hoán vị — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "điểm quan trọng — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "chứng nhận kỹ thuật số — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Chọn định nghĩa/nghĩa phù hợp nhất với thuật ngữ trong đề.
• Thuật ngữ: «số (digital) （digital ）»
```

**memoryTip**
```
• số (digital) （digital ） ≈ chứng nhận kỹ thuật số
• Ưu tiên định nghĩa chuẩn giáo trình, không dịch word-by-word lệch.
```

---

### 301/400 · `jit` id=452 · task=`slides` · num=442 · ans **A**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
【専門用語】パターンファイル（pattern file） の意味として最も適切なものはどれか。
```

**Options**

- **A.** một phần mềm đặc biệt của Trend Micro giúp bảo ✅
- **B.** dùng với mục đích xấu
- **C.** đặc biệt chú ý
- **D.** lừa đảo

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | 【Thuật ngữ】Nghĩa nào phù hợp nhất với thuật ngữ trong đề? |
| optionsVi.A | một phần mềm đặc biệt của Trend Micro giúp bảo |
| optionsVi.B | dùng với mục đích xấu |
| optionsVi.C | đặc biệt chú ý |
| optionsVi.D | lừa đảo |
| answerDisplay | A. một phần mềm đặc biệt của Trend Micro giúp bảo |

**concept**
```
• « tệp (file)（pattern file）» → một phần mềm đặc biệt của Trend Micro giúp bảo
• Nghĩa: một phần mềm đặc biệt của Trend Micro giúp bảo.
```

**whyCorrect**
```
• Nghĩa đúng: một phần mềm đặc biệt của Trend Micro giúp bảo
```

**whyWrong**

##### B
```
• Là gì? dùng với mục đích xấu
• Dùng để làm gì? Phạm trù/khái niệm trong lý thuyết đề cập.
• Vì sao sai? «dùng với mục đích xấu» (B) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### C
```
• Là gì? đặc biệt chú ý — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «đặc biệt chú ý» (C) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### D
```
• Là gì? lừa đảo — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «lừa đảo» (D) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

**whatIs**
```
{
  "A": "một phần mềm đặc biệt của Trend Micro giúp bảo",
  "B": "dùng với mục đích xấu",
  "C": "đặc biệt chú ý — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "lừa đảo — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Chọn định nghĩa/nghĩa phù hợp nhất với thuật ngữ trong đề.
• Thuật ngữ: « tệp (file)（pattern file）»
```

**memoryTip**
```
• tệp (file)（pattern file） ≈ một phần mềm đặc biệt của Trend Micro giúp bảo
• Ưu tiên định nghĩa chuẩn giáo trình, không dịch word-by-word lệch.
```

---

### 302/400 · `jit` id=453 · task=`slides` · num=443 · ans **A**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
【専門用語】踏み台（ふみだい） の意味として最も適切なものはどれか。
```

**Options**

- **A.** bệ đỡ , giá đỡ , bước đệm ✅
- **B.** ngay tức thời
- **C.** va chạm
- **D.** thư rác

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | 【Thuật ngữ】Nghĩa nào phù hợp nhất với thuật ngữ trong đề? |
| optionsVi.A | bệ đỡ , giá đỡ , bước đệm |
| optionsVi.B | ngay tức thời |
| optionsVi.C | va chạm |
| optionsVi.D | thư rác |
| answerDisplay | A. bệ đỡ , giá đỡ , bước đệm |

**concept**
```
• « （ ）» → bệ đỡ, giá đỡ, bước đệm
• Nghĩa: bệ đỡ, giá đỡ, bước đệm.
```

**whyCorrect**
```
• Phạm trù/khái niệm trong lý thuyết đề cập.
• Khớp stem: bản dịch thuật ngữ JP↔VI đúng.
```

**whyWrong**

##### B
```
• Là gì? ngay tức thời — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «ngay tức thời» (B) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### C
```
• Là gì? va chạm — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «va chạm» (C) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### D
```
• Là gì? thư rác — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «thư rác» (D) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

**whatIs**
```
{
  "A": "bệ đỡ , giá đỡ , bước đệm",
  "B": "ngay tức thời — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "va chạm — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "thư rác — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Chọn định nghĩa/nghĩa phù hợp nhất với thuật ngữ trong đề.
• Thuật ngữ: « （ ）»
```

**memoryTip**
```
• （ ） ≈ bệ đỡ, giá đỡ, bước đệm
• Ưu tiên định nghĩa chuẩn giáo trình, không dịch word-by-word lệch.
```

---

### 303/400 · `jit` id=454 · task=`slides` · num=444 · ans **A**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
【専門用語】悪用する（あくようする） の意味として最も適切なものはどれか。
```

**Options**

- **A.** dùng với mục đích xấu ✅
- **B.** cử động
- **C.** tiêu hao
- **D.** truyền nhiễm

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | 【Thuật ngữ】Nghĩa nào phù hợp nhất với thuật ngữ trong đề? |
| optionsVi.A | dùng với mục đích xấu |
| optionsVi.B | cử động |
| optionsVi.C | tiêu hao |
| optionsVi.D | truyền nhiễm |
| answerDisplay | A. dùng với mục đích xấu |

**concept**
```
• « （ ）» → dùng với mục đích xấu
• Nghĩa: dùng với mục đích xấu.
```

**whyCorrect**
```
• Phạm trù/khái niệm trong lý thuyết đề cập.
• Khớp stem: bản dịch thuật ngữ JP↔VI đúng.
```

**whyWrong**

##### B
```
• Là gì? cử động — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «cử động» (B) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### C
```
• Là gì? tiêu hao — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «tiêu hao» (C) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### D
```
• Là gì? truyền nhiễm — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «truyền nhiễm» (D) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

**whatIs**
```
{
  "A": "dùng với mục đích xấu",
  "B": "cử động — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "tiêu hao — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "truyền nhiễm — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Chọn định nghĩa/nghĩa phù hợp nhất với thuật ngữ trong đề.
• Thuật ngữ: « （ ）»
```

**memoryTip**
```
• （ ） ≈ dùng với mục đích xấu
• Ưu tiên định nghĩa chuẩn giáo trình, không dịch word-by-word lệch.
```

---

### 304/400 · `jit` id=455 · task=`slides` · num=445 · ans **A**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
【専門用語】即座に（そくざに） の意味として最も適切なものはどれか。
```

**Options**

- **A.** ngay tức thời ✅
- **B.** thư rác
- **C.** sét
- **D.** hệ thống nối tiếp

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | 【Thuật ngữ】Nghĩa nào phù hợp nhất với thuật ngữ trong đề? |
| optionsVi.A | ngay tức thời |
| optionsVi.B | thư rác |
| optionsVi.C | sét |
| optionsVi.D | hệ thống nối tiếp |
| answerDisplay | A. ngay tức thời |

**concept**
```
• « （ ）» → ngay tức thời
• Nghĩa: ngay tức thời.
```

**whyCorrect**
```
• Có vai trò riêng; đối chiếu với điều kiện stem.
• Khớp stem: bản dịch thuật ngữ JP↔VI đúng.
```

**whyWrong**

##### B
```
• Là gì? thư rác — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «thư rác» (B) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### C
```
• Là gì? sét — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «sét» (C) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### D
```
• Là gì? hệ thống nối tiếp — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «hệ thống nối tiếp» (D) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

**whatIs**
```
{
  "A": "ngay tức thời — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "thư rác — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "sét — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "hệ thống nối tiếp — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Chọn định nghĩa/nghĩa phù hợp nhất với thuật ngữ trong đề.
• Thuật ngữ: « （ ）»
```

**memoryTip**
```
• （ ） ≈ ngay tức thời
• Ưu tiên định nghĩa chuẩn giáo trình, không dịch word-by-word lệch.
```

---

### 305/400 · `jit` id=456 · task=`slides` · num=446 · ans **A**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
【専門用語】挙動（きょどう） の意味として最も適切なものはどれか。
```

**Options**

- **A.** cử động ✅
- **B.** thời gian ủ bệnh
- **C.** thời gian trung bình giữa những lần hỏng
- **D.** tĩnh mạch

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | 【Thuật ngữ】Nghĩa nào phù hợp nhất với thuật ngữ trong đề? |
| optionsVi.A | cử động |
| optionsVi.B | thời gian ủ bệnh |
| optionsVi.C | thời gian trung bình giữa những lần hỏng |
| optionsVi.D | tĩnh mạch |
| answerDisplay | A. cử động |

**concept**
```
• « （ ）» → cử động
• Nghĩa: cử động.
```

**whyCorrect**
```
• Có vai trò riêng; đối chiếu với điều kiện stem.
• Khớp stem: bản dịch thuật ngữ JP↔VI đúng.
```

**whyWrong**

##### B
```
• Là gì? thời gian ủ bệnh — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «thời gian ủ bệnh» (B) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### C
```
• Là gì? thời gian trung bình giữa những lần hỏng
• Dùng để làm gì? Phạm trù/khái niệm trong lý thuyết đề cập.
• Vì sao sai? «thời gian trung bình giữa những lần hỏng» (C) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### D
```
• Là gì? tĩnh mạch — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «tĩnh mạch» (D) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

**whatIs**
```
{
  "A": "cử động — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "thời gian ủ bệnh — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "thời gian trung bình giữa những lần hỏng",
  "D": "tĩnh mạch — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Chọn định nghĩa/nghĩa phù hợp nhất với thuật ngữ trong đề.
• Thuật ngữ: « （ ）»
```

**memoryTip**
```
• （ ） ≈ cử động
• Ưu tiên định nghĩa chuẩn giáo trình, không dịch word-by-word lệch.
```

---

### 306/400 · `jit` id=457 · task=`slides` · num=447 · ans **B**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
【専門用語】不正侵入（ふせいしんにゅう） の意味として最も適切なものはどれか。
```

**Options**

- **A.** 56
- **B.** xâm nhập bất hợp pháp ✅
- **C.** các dãy đĩa cứng dư thừa độc lập
- **D.** dự phòng

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | 【Thuật ngữ】Nghĩa nào phù hợp nhất với thuật ngữ trong đề? |
| optionsVi.A | 56 |
| optionsVi.B | xâm nhập bất hợp pháp |
| optionsVi.C | các dãy đĩa cứng dư thừa độc lập |
| optionsVi.D | dự phòng |
| answerDisplay | B. xâm nhập bất hợp pháp |

**concept**
```
• « （ ）» → xâm nhập bất hợp pháp
• Nghĩa: xâm nhập bất hợp pháp.
```

**whyCorrect**
```
• Phạm trù/khái niệm trong lý thuyết đề cập.
• Khớp stem: bản dịch thuật ngữ JP↔VI đúng.
```

**whyWrong**

##### A
```
• Là gì? 56 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «56» (A) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### C
```
• Là gì? các dãy đĩa cứng dư thừa độc lập
• Dùng để làm gì? Phạm trù/khái niệm trong lý thuyết đề cập.
• Vì sao sai? «các dãy đĩa cứng dư thừa độc lập» (C) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### D
```
• Là gì? dự phòng — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «dự phòng» (D) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

**whatIs**
```
{
  "A": "56 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "xâm nhập bất hợp pháp",
  "C": "các dãy đĩa cứng dư thừa độc lập",
  "D": "dự phòng — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Chọn định nghĩa/nghĩa phù hợp nhất với thuật ngữ trong đề.
• Thuật ngữ: « （ ）»
```

**memoryTip**
```
• （ ） ≈ xâm nhập bất hợp pháp
• Ưu tiên định nghĩa chuẩn giáo trình, không dịch word-by-word lệch.
```

---

### 307/400 · `jit` id=458 · task=`slides` · num=448 · ans **A**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
【専門用語】thời gian trung bình để sửa chữa（55） の意味として最も適切なものはどれか。
```

**Options**

- **A.** 並列システム ✅
- **B.** 56
- **C.** tỷ lệ hoạt động
- **D.** lỗi chương trình

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | 【Thuật ngữ】Nghĩa nào phù hợp nhất với «thời gian trung bình để sửa chữa（55）»? |
| optionsVi.A | 並列システム — khái niệm kỹ thuật |
| optionsVi.B | 56 |
| optionsVi.C | tỷ lệ hoạt động |
| optionsVi.D | lỗi chương trình |
| answerDisplay | A. 並列システム — khái niệm kỹ thuật |

**concept**
```
• «thời gian trung bình để sửa chữa（55）» → hệ thống song song
• Thuật ngữ: hệ thống song song.
```

**whyCorrect**
```
• Khái niệm CNTT trong đề thi JIT.
• Khớp stem: bản dịch thuật ngữ JP↔VI đúng.
```

**whyWrong**

##### B
```
• Là gì? 56 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «56» (B) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### C
```
• Là gì? tỷ lệ hoạt động — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «tỷ lệ hoạt động» (C) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### D
```
• Là gì? lỗi chương trình — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «lỗi chương trình» (D) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

**whatIs**
```
{
  "A": "並列システム (thuật ngữ JP).",
  "B": "56 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "tỷ lệ hoạt động — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "lỗi chương trình — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Chọn định nghĩa/nghĩa phù hợp nhất với thuật ngữ trong đề.
• Thuật ngữ: «thời gian trung bình để sửa chữa（55）»
```

**memoryTip**
```
• thời gian trung bình để sửa chữa（55） ≈ hệ thống song song
• Ưu tiên định nghĩa chuẩn giáo trình, không dịch word-by-word lệch.
```

---

### 308/400 · `jit` id=459 · task=`slides` · num=449 · ans **C**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
【専門用語】信頼度成長曲線（しんらいどせいちょう きょくせん） の意味として最も適切なものはどれか。
```

**Options**

- **A.** thời gian trung bình giữa những lần hỏng
- **B.** bệ đỡ , giá đỡ , bước đệm
- **C.** đường cong độ tin cậy ✅
- **D.** driver thiết bị

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | 【Thuật ngữ】Nghĩa nào phù hợp nhất với thuật ngữ trong đề? |
| optionsVi.A | thời gian trung bình giữa những lần hỏng |
| optionsVi.B | bệ đỡ , giá đỡ , bước đệm |
| optionsVi.C | đường cong độ tin cậy |
| optionsVi.D | driver thiết bị |
| answerDisplay | C. đường cong độ tin cậy |

**concept**
```
• « （ ）» → đường cong độ tin cậy
• Nghĩa: đường cong độ tin cậy.
```

**whyCorrect**
```
• Series/parallel reliability.
• Khớp stem: bản dịch thuật ngữ JP↔VI đúng.
```

**whyWrong**

##### A
```
• Là gì? thời gian trung bình giữa những lần hỏng
• Dùng để làm gì? Phạm trù/khái niệm trong lý thuyết đề cập.
• Vì sao sai? «thời gian trung bình giữa những lần hỏng» (A) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### B
```
• Là gì? bệ đỡ , giá đỡ , bước đệm
• Dùng để làm gì? Phạm trù/khái niệm trong lý thuyết đề cập.
• Vì sao sai? «bệ đỡ , giá đỡ , bước đệm» (B) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### D
```
• Là gì? driver thiết bị — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «driver thiết bị» (D) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

**whatIs**
```
{
  "A": "thời gian trung bình giữa những lần hỏng",
  "B": "bệ đỡ , giá đỡ , bước đệm",
  "C": "Độ tin cậy (MTBF…) — đo hỏng hóc theo thời gian.",
  "D": "driver thiết bị — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Chọn định nghĩa/nghĩa phù hợp nhất với thuật ngữ trong đề.
• Thuật ngữ: « （ ）»
```

**memoryTip**
```
• （ ） ≈ đường cong độ tin cậy
• Ưu tiên định nghĩa chuẩn giáo trình, không dịch word-by-word lệch.
```

---

### 309/400 · `jit` id=469 · task=`slides` · num=459 · ans **A**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
【専門用語】出力装置（しゅつりょくそうち） の意味として最も適切なものはどれか。
```

**Options**

- **A.** thiết bị ra ✅
- **B.** ram động
- **C.** Bộ nhớ của Card tăng tốc đồ họa hay Card màn hình máy tính
- **D.** Tính cộng

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | 【Thuật ngữ】Nghĩa nào phù hợp nhất với «thiết bị ra»? |
| optionsVi.A | thiết bị ra |
| optionsVi.B | ram động |
| optionsVi.C | Bộ nhớ của Card tăng tốc đồ họa hay Card màn hình máy tính |
| optionsVi.D | Tính cộng |
| answerDisplay | A. thiết bị ra |

**concept**
```
• «thiết bị ra（ ）» → thiết bị ra
• Nghĩa: thiết bị ra.
```

**whyCorrect**
```
• Có vai trò riêng; đối chiếu với điều kiện stem.
• Khớp stem: bản dịch thuật ngữ JP↔VI đúng.
```

**whyWrong**

##### B
```
• Là gì? ram động — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «ram động» (B) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### C
```
• Là gì? Bộ nhớ của Card tăng tốc đồ họa hay Card màn hình máy tính
• Dùng để làm gì? Phạm trù/khái niệm trong lý thuyết đề cập.
• Vì sao sai? «Bộ nhớ của Card tăng tốc đồ họa hay Card màn hình máy…» (C) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### D
```
• Là gì? Tính cộng — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Tính cộng» (D) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

**whatIs**
```
{
  "A": "thiết bị ra — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "ram động — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Bộ nhớ của Card tăng tốc đồ họa hay Card màn hình máy tính",
  "D": "Tính cộng — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Chọn định nghĩa/nghĩa phù hợp nhất với thuật ngữ trong đề.
• Thuật ngữ: «thiết bị ra（ ）»
```

**memoryTip**
```
• thiết bị ra（ ） ≈ thiết bị ra
• Ưu tiên định nghĩa chuẩn giáo trình, không dịch word-by-word lệch.
```

---

### 310/400 · `jit` id=470 · task=`slides` · num=460 · ans **B**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
【専門用語】クロック（clock） の意味として最も適切なものはどれか。
```

**Options**

- **A.** Sốc điện
- **B.** xung nhịp ✅
- **C.** không gian ghi nhớ
- **D.** Chia đều

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | 【Thuật ngữ】Nghĩa nào phù hợp nhất với thuật ngữ trong đề? |
| optionsVi.A | Sốc điện |
| optionsVi.B | xung nhịp |
| optionsVi.C | không gian ghi nhớ |
| optionsVi.D | Chia đều |
| answerDisplay | B. xung nhịp |

**concept**
```
• « （clock）» → xung nhịp
• Nghĩa: xung nhịp.
```

**whyCorrect**
```
• Có vai trò riêng; đối chiếu với điều kiện stem.
• Khớp stem: bản dịch thuật ngữ JP↔VI đúng.
```

**whyWrong**

##### A
```
• Là gì? Sốc điện — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Sốc điện» (A) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### C
```
• Là gì? không gian ghi nhớ — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «không gian ghi nhớ» (C) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### D
```
• Là gì? Chia đều — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Chia đều» (D) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

**whatIs**
```
{
  "A": "Sốc điện — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "xung nhịp — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "không gian ghi nhớ — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Chia đều — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Chọn định nghĩa/nghĩa phù hợp nhất với thuật ngữ trong đề.
• Thuật ngữ: « （clock）»
```

**memoryTip**
```
• （clock） ≈ xung nhịp
• Ưu tiên định nghĩa chuẩn giáo trình, không dịch word-by-word lệch.
```

---

### 311/400 · `jit` id=471 · task=`slides` · num=461 · ans **C**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
【専門用語】グラフィックプロセッサ（graphic processor） の意味として最も適切なものはどれか。
```

**Options**

- **A.** Quỹ tích
- **B.** đầu
- **C.** đơn vị xử lý đồ họa ✅
- **D.** bộ nhớ truy xuất ngẫu nhiên

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | 【Thuật ngữ】Nghĩa nào phù hợp nhất với thuật ngữ trong đề? |
| optionsVi.A | Quỹ tích |
| optionsVi.B | đầu |
| optionsVi.C | đơn vị xử lý đồ họa |
| optionsVi.D | bộ nhớ truy xuất ngẫu nhiên |
| answerDisplay | C. đơn vị xử lý đồ họa |

**concept**
```
• «đồ thị （graphic processor）» → đơn vị xử lý đồ họa
• Nghĩa: đơn vị xử lý đồ họa.
```

**whyCorrect**
```
• Có vai trò riêng; đối chiếu với điều kiện stem.
• Khớp stem: bản dịch thuật ngữ JP↔VI đúng.
```

**whyWrong**

##### A
```
• Là gì? Quỹ tích — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Quỹ tích» (A) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### B
```
• Là gì? đầu — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «đầu» (B) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### D
```
• Là gì? bộ nhớ truy xuất ngẫu nhiên
• Dùng để làm gì? Phạm trù/khái niệm trong lý thuyết đề cập.
• Vì sao sai? «bộ nhớ truy xuất ngẫu nhiên» (D) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

**whatIs**
```
{
  "A": "Quỹ tích — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "đầu — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "đơn vị xử lý đồ họa — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "bộ nhớ truy xuất ngẫu nhiên"
}
```

**intent**
```
• Chọn định nghĩa/nghĩa phù hợp nhất với thuật ngữ trong đề.
• Thuật ngữ: «đồ thị （graphic processor）»
```

**memoryTip**
```
• đồ thị （graphic processor） ≈ đơn vị xử lý đồ họa
• Ưu tiên định nghĩa chuẩn giáo trình, không dịch word-by-word lệch.
```

---

### 312/400 · `jit` id=472 · task=`slides` · num=462 · ans **B**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
【専門用語】チップセット（chip set） の意味として最も適切なものはどれか。
```

**Options**

- **A.** đầu
- **B.** bộ chip ✅
- **C.** cần
- **D.** Số nguyên

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | 【Thuật ngữ】Nghĩa nào phù hợp nhất với thuật ngữ trong đề? |
| optionsVi.A | đầu |
| optionsVi.B | bộ chip |
| optionsVi.C | cần |
| optionsVi.D | Số nguyên |
| answerDisplay | B. bộ chip |

**concept**
```
• « （chip set）» → bộ chip
• Nghĩa: bộ chip.
```

**whyCorrect**
```
• Có vai trò riêng; đối chiếu với điều kiện stem.
• Khớp stem: bản dịch thuật ngữ JP↔VI đúng.
```

**whyWrong**

##### A
```
• Là gì? đầu — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «đầu» (A) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### C
```
• Là gì? cần — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «cần» (C) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### D
```
• Là gì? Số nguyên — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Số nguyên» (D) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

**whatIs**
```
{
  "A": "đầu — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "bộ chip — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "cần — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Số nguyên — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Chọn định nghĩa/nghĩa phù hợp nhất với thuật ngữ trong đề.
• Thuật ngữ: « （chip set）»
```

**memoryTip**
```
• （chip set） ≈ bộ chip
• Ưu tiên định nghĩa chuẩn giáo trình, không dịch word-by-word lệch.
```

---

### 313/400 · `jit` id=473 · task=`slides` · num=463 · ans **A**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
【専門用語】USB（Universal System Bus） の意味として最も適切なものはどれか。
```

**Options**

- **A.** USB (Bus hệ thống vạn năng ) ✅
- **B.** 解像度
- **C.** Xóa bỏ
- **D.** thiết bị xử lý tính toán trung tâm

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | 【Thuật ngữ】Nghĩa nào phù hợp nhất với «USB（Universal System Bus）»? |
| optionsVi.A | USB (Bus hệ thống vạn năng ) |
| optionsVi.B | độ phân giải |
| optionsVi.C | Xóa bỏ |
| optionsVi.D | thiết bị xử lý tính toán trung tâm |
| answerDisplay | A. USB (Bus hệ thống vạn năng ) |

**concept**
```
• «USB（Universal System Bus）» → USB (Bus hệ thống vạn năng )
• Nghĩa: USB (Bus hệ thống vạn năng ).
```

**whyCorrect**
```
• Nghĩa đúng: USB (Bus hệ thống vạn năng )
```

**whyWrong**

##### B
```
• Là gì? 解像度 (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «解像度» (B) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### C
```
• Là gì? Xóa bỏ — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Xóa bỏ» (C) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### D
```
• Là gì? thiết bị xử lý tính toán trung tâm
• Dùng để làm gì? Phạm trù/khái niệm trong lý thuyết đề cập.
• Vì sao sai? «thiết bị xử lý tính toán trung tâm» (D) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

**whatIs**
```
{
  "A": "USB (Bus hệ thống vạn năng )",
  "B": "解像度 (thuật ngữ JP).",
  "C": "Xóa bỏ — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "thiết bị xử lý tính toán trung tâm"
}
```

**intent**
```
• Chọn định nghĩa/nghĩa phù hợp nhất với thuật ngữ trong đề.
• Thuật ngữ: «USB（Universal System Bus）»
```

**memoryTip**
```
• USB（Universal System Bus） ≈ USB (Bus hệ thống vạn năng )
• Ưu tiên định nghĩa chuẩn giáo trình, không dịch word-by-word lệch.
```

---

### 314/400 · `jit` id=474 · task=`slides` · num=464 · ans **A**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
【専門用語】基板（きばん） の意味として最も適切なものはどれか。
```

**Options**

- **A.** bảng mạch ✅
- **B.** máy chiếu
- **C.** Đóng kín
- **D.** tập lệnh

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | 【Thuật ngữ】Nghĩa nào phù hợp nhất với thuật ngữ trong đề? |
| optionsVi.A | bảng mạch |
| optionsVi.B | máy chiếu |
| optionsVi.C | Đóng kín |
| optionsVi.D | tập lệnh |
| answerDisplay | A. bảng mạch |

**concept**
```
• « （ ）» → bảng mạch
• Nghĩa: bảng mạch.
```

**whyCorrect**
```
• Có vai trò riêng; đối chiếu với điều kiện stem.
• Khớp stem: bản dịch thuật ngữ JP↔VI đúng.
```

**whyWrong**

##### B
```
• Là gì? máy chiếu — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «máy chiếu» (B) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### C
```
• Là gì? Đóng kín — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Đóng kín» (C) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### D
```
• Là gì? tập lệnh — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «tập lệnh» (D) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

**whatIs**
```
{
  "A": "bảng mạch — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "máy chiếu — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Đóng kín — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "tập lệnh — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Chọn định nghĩa/nghĩa phù hợp nhất với thuật ngữ trong đề.
• Thuật ngữ: « （ ）»
```

**memoryTip**
```
• （ ） ≈ bảng mạch
• Ưu tiên định nghĩa chuẩn giáo trình, không dịch word-by-word lệch.
```

---

### 315/400 · `jit` id=475 · task=`slides` · num=465 · ans **A**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
【専門用語】演算装置（えんざんそうち） の意味として最も適切なものはどれか。
```

**Options**

- **A.** Thiết bị tính toán ✅
- **B.** Số màu
- **C.** Xóa bỏ
- **D.** bus trong CPU

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | 【Thuật ngữ】Nghĩa nào phù hợp nhất với «thiết bị tính toán (ALU/đơn vị tính)»? |
| optionsVi.A | Thiết bị tính toán |
| optionsVi.B | Số màu |
| optionsVi.C | Xóa bỏ |
| optionsVi.D | bus trong CPU |
| answerDisplay | A. Thiết bị tính toán |

**concept**
```
• «thiết bị tính toán (ALU/đơn vị tính)（ ）» → Thiết bị tính toán
• Nghĩa: Thiết bị tính toán.
```

**whyCorrect**
```
• Có vai trò riêng; đối chiếu với điều kiện stem.
• Khớp stem: bản dịch thuật ngữ JP↔VI đúng.
```

**whyWrong**

##### B
```
• Là gì? Số màu — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Số màu» (B) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### C
```
• Là gì? Xóa bỏ — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Xóa bỏ» (C) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### D
```
• Là gì? bus trong CPU — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «bus trong CPU» (D) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

**whatIs**
```
{
  "A": "Thiết bị tính toán — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Số màu — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Xóa bỏ — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "bus trong CPU — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Chọn định nghĩa/nghĩa phù hợp nhất với thuật ngữ trong đề.
• Thuật ngữ: «thiết bị tính toán (ALU/đơn vị tính)（ ）»
```

**memoryTip**
```
• thiết bị tính toán (ALU/đơn vị tính)（ ） ≈ Thiết bị tính toán
• Ưu tiên định nghĩa chuẩn giáo trình, không dịch word-by-word lệch.
```

---

### 316/400 · `jit` id=476 · task=`slides` · num=466 · ans **A**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
【専門用語】整数（せいすう） の意味として最も適切なものはどれか。
```

**Options**

- **A.** Số nguyên ✅
- **B.** Thiết bị tính toán
- **C.** 解像度
- **D.** tập lệnh

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | 【Thuật ngữ】Nghĩa nào phù hợp nhất với thuật ngữ trong đề? |
| optionsVi.A | Số nguyên |
| optionsVi.B | Thiết bị tính toán |
| optionsVi.C | độ phân giải |
| optionsVi.D | tập lệnh |
| answerDisplay | A. Số nguyên |

**concept**
```
• « （ ）» → Số nguyên
• Nghĩa: Số nguyên.
```

**whyCorrect**
```
• Có vai trò riêng; đối chiếu với điều kiện stem.
• Khớp stem: bản dịch thuật ngữ JP↔VI đúng.
```

**whyWrong**

##### B
```
• Là gì? Thiết bị tính toán — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Thiết bị tính toán» (B) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### C
```
• Là gì? 解像度 (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «解像度» (C) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### D
```
• Là gì? tập lệnh — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «tập lệnh» (D) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

**whatIs**
```
{
  "A": "Số nguyên — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Thiết bị tính toán — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "解像度 (thuật ngữ JP).",
  "D": "tập lệnh — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Chọn định nghĩa/nghĩa phù hợp nhất với thuật ngữ trong đề.
• Thuật ngữ: « （ ）»
```

**memoryTip**
```
• （ ） ≈ Số nguyên
• Ưu tiên định nghĩa chuẩn giáo trình, không dịch word-by-word lệch.
```

---

### 317/400 · `jit` id=477 · task=`slides` · num=467 · ans **C**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
【専門用語】次のベトナム語の用語を日本語に直しなさい。 cung từ
```

**Options**

- **A.** 主記憶装置
- **B.** 実数
- **C.** セクタ ✅
- **D.** DRAM

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | 【Thuật ngữ】Hãy dịch thuật ngữ tiếng Việt sau sang tiếng Nhật: «cung từ» |
| optionsVi.A | 主記憶装置 — khái niệm kỹ thuật |
| optionsVi.B | 実数 — khái niệm kỹ thuật |
| optionsVi.C | sector (đĩa) |
| optionsVi.D | DRAM |
| answerDisplay | C. sector (đĩa) |

**concept**
```
• «cung từ» trong tiếng Nhật là «sector (đĩa)».
```

**whyCorrect**
```
• «cung từ» = sector (đĩa)
• Việt «cung từ» ⇔ Nhật «sector (đĩa)».
• sector (đĩa)
• Chọn đúng cặp dịch thuật ngữ, không chọn từ gần nghĩa khác lĩnh vực.
```

**whyWrong**

##### A
```
• Là gì? 主記憶装置 (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «主記憶装置» (A) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### B
```
• Là gì? 実数 (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «実数» (B) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### D
```
• Là gì? DRAM — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «DRAM» (D) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

**whatIs**
```
{
  "A": "主記憶装置 (thuật ngữ JP).",
  "B": "実数 (thuật ngữ JP).",
  "C": "セクタ (thuật ngữ JP).",
  "D": "DRAM — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Câu từ vựng: cho thuật ngữ tiếng Việt → chọn bản tiếng Nhật đúng.
• Thuật ngữ cần dịch: «cung từ»
```

**memoryTip**
```
• cung từ = sector (đĩa)
• Học theo cặp VI ↔ JP, tránh nhầm từ kanji/katakana gần.
```

---

### 318/400 · `jit` id=478 · task=`slides` · num=468 · ans **B**

- **flags:** domain_shell
- **status:** `todo`

**Đề gốc**

```
【専門用語】次のベトナム語の用語を日本語に直しなさい。 解像度
```

**Options**

- **A.** プロジェクタ
- **B.** Thiết bị ghi nhớ bổ trợ ✅
- **C.** 放熱板
- **D.** ベンチマークテスト

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | 【Thuật ngữ】Hãy dịch thuật ngữ tiếng Việt sau sang tiếng Nhật: «độ phân giải» |
| optionsVi.A | máy chiếu |
| optionsVi.B | Thiết bị ghi nhớ bổ trợ |
| optionsVi.C | tản nhiệt |
| optionsVi.D | ベンチマークテスト — khái niệm kỹ thuật |
| answerDisplay | B. Thiết bị ghi nhớ bổ trợ |

**concept**
```
• «độ phân giải» trong tiếng Nhật là «Thiết bị ghi nhớ bổ trợ».
```

**whyCorrect**
```
• «độ phân giải» = Thiết bị ghi nhớ bổ trợ
• Việt «độ phân giải» ⇔ Nhật «Thiết bị ghi nhớ bổ trợ».
• Thiết bị ghi nhớ bổ trợ
• Chọn đúng cặp dịch thuật ngữ, không chọn từ gần nghĩa khác lĩnh vực.
```

**whyWrong**

##### A
```
• Là gì? プロジェクタ (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «プロジェクタ» (A) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### C
```
• Là gì? 放熱板 (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «放熱板» (C) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### D
```
• Là gì? ベンチマークテスト (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «ベンチマークテスト» (D) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

**whatIs**
```
{
  "A": "プロジェクタ (thuật ngữ JP).",
  "B": "Thiết bị ghi nhớ bổ trợ — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "放熱板 (thuật ngữ JP).",
  "D": "ベンチマークテスト (thuật ngữ JP)."
}
```

**intent**
```
• Câu từ vựng: cho thuật ngữ tiếng Việt → chọn bản tiếng Nhật đúng.
• Thuật ngữ cần dịch: «độ phân giải»
```

**memoryTip**
```
• độ phân giải = Thiết bị ghi nhớ bổ trợ
• Học theo cặp VI ↔ JP, tránh nhầm từ kanji/katakana gần.
```

---

### 319/400 · `jit` id=485 · task=`slides` · num=475 · ans **C**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
【専門用語】余る（あまる） の意味として最も適切なものはどれか。
```

**Options**

- **A.** mạch NOT
- **B.** mặt cắt
- **C.** thừa ✅
- **D.** điện lưu

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | 【Thuật ngữ】Nghĩa nào phù hợp nhất với thuật ngữ trong đề? |
| optionsVi.A | mạch NOT |
| optionsVi.B | mặt cắt |
| optionsVi.C | thừa |
| optionsVi.D | điện lưu |
| answerDisplay | C. thừa |

**concept**
```
• « （ ）» → thừa
• Nghĩa: thừa.
```

**whyCorrect**
```
• Có vai trò riêng; đối chiếu với điều kiện stem.
• Khớp stem: bản dịch thuật ngữ JP↔VI đúng.
```

**whyWrong**

##### A
```
• Là gì? mạch NOT — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «mạch NOT» (A) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### B
```
• Là gì? mặt cắt — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «mặt cắt» (B) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### D
```
• Là gì? điện lưu — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «điện lưu» (D) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

**whatIs**
```
{
  "A": "mạch NOT — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "mặt cắt — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "thừa — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "điện lưu — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Chọn định nghĩa/nghĩa phù hợp nhất với thuật ngữ trong đề.
• Thuật ngữ: « （ ）»
```

**memoryTip**
```
• （ ） ≈ thừa
• Ưu tiên định nghĩa chuẩn giáo trình, không dịch word-by-word lệch.
```

---

### 320/400 · `jit` id=486 · task=`slides` · num=476 · ans **D**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
【専門用語】削る（けずる） の意味として最も適切なものはどれか。
```

**Options**

- **A.** sự thăng trầm , quá trình
- **B.** chiều ngược lại
- **C.** điện lưu
- **D.** khoét , đục ✅

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | 【Thuật ngữ】Nghĩa nào phù hợp nhất với thuật ngữ trong đề? |
| optionsVi.A | sự thăng trầm , quá trình |
| optionsVi.B | chiều ngược lại |
| optionsVi.C | điện lưu |
| optionsVi.D | khoét , đục |
| answerDisplay | D. khoét , đục |

**concept**
```
• « （ ）» → khoét, đục
• Nghĩa: khoét, đục.
```

**whyCorrect**
```
• Có vai trò riêng; đối chiếu với điều kiện stem.
• Khớp stem: bản dịch thuật ngữ JP↔VI đúng.
```

**whyWrong**

##### A
```
• Là gì? sự thăng trầm , quá trình
• Dùng để làm gì? Phạm trù/khái niệm trong lý thuyết đề cập.
• Vì sao sai? «sự thăng trầm , quá trình» (A) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### B
```
• Là gì? chiều ngược lại — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «chiều ngược lại» (B) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### C
```
• Là gì? điện lưu — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «điện lưu» (C) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

**whatIs**
```
{
  "A": "sự thăng trầm , quá trình",
  "B": "chiều ngược lại — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "điện lưu — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "khoét , đục — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Chọn định nghĩa/nghĩa phù hợp nhất với thuật ngữ trong đề.
• Thuật ngữ: « （ ）»
```

**memoryTip**
```
• （ ） ≈ khoét, đục
• Ưu tiên định nghĩa chuẩn giáo trình, không dịch word-by-word lệch.
```

---

### 321/400 · `jit` id=487 · task=`slides` · num=477 · ans **B**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
【専門用語】ダイオード（diode） の意味として最も適切なものはどれか。
```

**Options**

- **A.** bốn cạnh , tứ giác
- **B.** đi ốt ✅
- **C.** mặt cắt
- **D.** sợi đốt

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | 【Thuật ngữ】Nghĩa nào phù hợp nhất với «diode»? |
| optionsVi.A | bốn cạnh , tứ giác |
| optionsVi.B | đi ốt |
| optionsVi.C | mặt cắt |
| optionsVi.D | sợi đốt |
| answerDisplay | B. đi ốt |

**concept**
```
• «diode（diode）» → đi ốt
• Nghĩa: đi ốt.
```

**whyCorrect**
```
• Có vai trò riêng; đối chiếu với điều kiện stem.
• Khớp stem: bản dịch thuật ngữ JP↔VI đúng.
```

**whyWrong**

##### A
```
• Là gì? bốn cạnh , tứ giác — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «bốn cạnh , tứ giác» (A) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### C
```
• Là gì? mặt cắt — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «mặt cắt» (C) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### D
```
• Là gì? sợi đốt — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «sợi đốt» (D) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

**whatIs**
```
{
  "A": "bốn cạnh , tứ giác — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "đi ốt — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "mặt cắt — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "sợi đốt — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Chọn định nghĩa/nghĩa phù hợp nhất với thuật ngữ trong đề.
• Thuật ngữ: «diode（diode）»
```

**memoryTip**
```
• diode（diode） ≈ đi ốt
• Ưu tiên định nghĩa chuẩn giáo trình, không dịch word-by-word lệch.
```

---

### 322/400 · `jit` id=488 · task=`slides` · num=478 · ans **C**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
【専門用語】半導体（はんどうたい） の意味として最も適切なものはどれか。
```

**Options**

- **A.** mạch tích hợp cỡ lớn
- **B.** nguyên lý hoạt động
- **C.** bán dẫn ✅
- **D.** cơ cấu , cấu tạo

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | 【Thuật ngữ】Nghĩa nào phù hợp nhất với «bán dẫn (semiconductor)»? |
| optionsVi.A | mạch tích hợp cỡ lớn |
| optionsVi.B | nguyên lý hoạt động |
| optionsVi.C | bán dẫn |
| optionsVi.D | cơ cấu , cấu tạo |
| answerDisplay | C. bán dẫn |

**concept**
```
• «bán dẫn (semiconductor)（ ）» → bán dẫn
• Nghĩa: bán dẫn.
```

**whyCorrect**
```
• Có vai trò riêng; đối chiếu với điều kiện stem.
• Khớp stem: bản dịch thuật ngữ JP↔VI đúng.
```

**whyWrong**

##### A
```
• Là gì? mạch tích hợp cỡ lớn
• Dùng để làm gì? Phạm trù/khái niệm trong lý thuyết đề cập.
• Vì sao sai? «mạch tích hợp cỡ lớn» (A) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### B
```
• Là gì? nguyên lý hoạt động — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «nguyên lý hoạt động» (B) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### D
```
• Là gì? cơ cấu , cấu tạo — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «cơ cấu , cấu tạo» (D) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

**whatIs**
```
{
  "A": "mạch tích hợp cỡ lớn",
  "B": "nguyên lý hoạt động — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "bán dẫn — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "cơ cấu , cấu tạo — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Chọn định nghĩa/nghĩa phù hợp nhất với thuật ngữ trong đề.
• Thuật ngữ: «bán dẫn (semiconductor)（ ）»
```

**memoryTip**
```
• bán dẫn (semiconductor)（ ） ≈ bán dẫn
• Ưu tiên định nghĩa chuẩn giáo trình, không dịch word-by-word lệch.
```

---

### 323/400 · `jit` id=489 · task=`slides` · num=479 · ans **D**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
【専門用語】電球（でんきゅう） の意味として最も適切なものはどれか。
```

**Options**

- **A.** mạch NOT
- **B.** mạch AND
- **C.** phát nhiệt
- **D.** bóng điện ✅

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | 【Thuật ngữ】Nghĩa nào phù hợp nhất với thuật ngữ trong đề? |
| optionsVi.A | mạch NOT |
| optionsVi.B | mạch AND |
| optionsVi.C | phát nhiệt |
| optionsVi.D | bóng điện |
| answerDisplay | D. bóng điện |

**concept**
```
• « （ ）» → bóng điện
• Nghĩa: bóng điện.
```

**whyCorrect**
```
• Có vai trò riêng; đối chiếu với điều kiện stem.
• Khớp stem: bản dịch thuật ngữ JP↔VI đúng.
```

**whyWrong**

##### A
```
• Là gì? mạch NOT — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «mạch NOT» (A) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### B
```
• Là gì? mạch AND — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «mạch AND» (B) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### C
```
• Là gì? phát nhiệt — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «phát nhiệt» (C) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

**whatIs**
```
{
  "A": "mạch NOT — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "mạch AND — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "phát nhiệt — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "bóng điện — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Chọn định nghĩa/nghĩa phù hợp nhất với thuật ngữ trong đề.
• Thuật ngữ: « （ ）»
```

**memoryTip**
```
• （ ） ≈ bóng điện
• Ưu tiên định nghĩa chuẩn giáo trình, không dịch word-by-word lệch.
```

---

### 324/400 · `jit` id=490 · task=`slides` · num=480 · ans **A**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
【専門用語】発光ダイオード LED（はっこう diode Light Emitting Diode） の意味として最も適切なものはどれか。
```

**Options**

- **A.** đi ốt phát quang ✅
- **B.** khoét , đục
- **C.** nấc
- **D.** bán dẫn

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | 【Thuật ngữ】Nghĩa nào phù hợp nhất với thuật ngữ trong đề? |
| optionsVi.A | đi ốt phát quang |
| optionsVi.B | khoét , đục |
| optionsVi.C | nấc |
| optionsVi.D | bán dẫn |
| answerDisplay | A. đi ốt phát quang |

**concept**
```
• « diode LED（ diode Light Emitting Diode）» → đi ốt phát quang
• Nghĩa: đi ốt phát quang.
```

**whyCorrect**
```
• Có vai trò riêng; đối chiếu với điều kiện stem.
• Khớp stem: bản dịch thuật ngữ JP↔VI đúng.
```

**whyWrong**

##### B
```
• Là gì? khoét , đục — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «khoét , đục» (B) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### C
```
• Là gì? nấc — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «nấc» (C) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### D
```
• Là gì? bán dẫn — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «bán dẫn» (D) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

**whatIs**
```
{
  "A": "đi ốt phát quang — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "khoét , đục — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "nấc — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "bán dẫn — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Chọn định nghĩa/nghĩa phù hợp nhất với thuật ngữ trong đề.
• Thuật ngữ: « diode LED（ diode Light Emitting Diode）»
```

**memoryTip**
```
• diode LED（ diode Light Emitting Diode） ≈ đi ốt phát quang
• Ưu tiên định nghĩa chuẩn giáo trình, không dịch word-by-word lệch.
```

---

### 325/400 · `jit` id=491 · task=`slides` · num=481 · ans **A**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
【専門用語】論理積（ろんりせき） の意味として最も適切なものはどれか。
```

**Options**

- **A.** tích lôgic ✅
- **B.** cơ cấu , cấu tạo
- **C.** bốn cạnh , tứ giác
- **D.** bán dẫn

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | 【Thuật ngữ】Nghĩa nào phù hợp nhất với thuật ngữ trong đề? |
| optionsVi.A | tích lôgic |
| optionsVi.B | cơ cấu , cấu tạo |
| optionsVi.C | bốn cạnh , tứ giác |
| optionsVi.D | bán dẫn |
| answerDisplay | A. tích lôgic |

**concept**
```
• « （ ）» → tích lôgic
• Nghĩa: tích lôgic.
```

**whyCorrect**
```
• Có vai trò riêng; đối chiếu với điều kiện stem.
• Khớp stem: bản dịch thuật ngữ JP↔VI đúng.
```

**whyWrong**

##### B
```
• Là gì? cơ cấu , cấu tạo — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «cơ cấu , cấu tạo» (B) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### C
```
• Là gì? bốn cạnh , tứ giác — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «bốn cạnh , tứ giác» (C) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### D
```
• Là gì? bán dẫn — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «bán dẫn» (D) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

**whatIs**
```
{
  "A": "tích lôgic — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "cơ cấu , cấu tạo — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "bốn cạnh , tứ giác — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "bán dẫn — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Chọn định nghĩa/nghĩa phù hợp nhất với thuật ngữ trong đề.
• Thuật ngữ: « （ ）»
```

**memoryTip**
```
• （ ） ≈ tích lôgic
• Ưu tiên định nghĩa chuẩn giáo trình, không dịch word-by-word lệch.
```

---

### 326/400 · `jit` id=492 · task=`slides` · num=482 · ans **C**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
【専門用語】論理素子（ろんりそし） の意味として最も適切なものはどれか。
```

**Options**

- **A.** cơ cấu , cấu tạo
- **B.** máy tự động
- **C.** phần tử lô gic ✅
- **D.** sợi đốt

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | 【Thuật ngữ】Nghĩa nào phù hợp nhất với «phần tử logic»? |
| optionsVi.A | cơ cấu , cấu tạo |
| optionsVi.B | máy tự động |
| optionsVi.C | phần tử lô gic |
| optionsVi.D | sợi đốt |
| answerDisplay | C. phần tử lô gic |

**concept**
```
• «phần tử logic（ ）» → phần tử lô gic
• Nghĩa: phần tử lô gic.
```

**whyCorrect**
```
• Có vai trò riêng; đối chiếu với điều kiện stem.
• Khớp stem: bản dịch thuật ngữ JP↔VI đúng.
```

**whyWrong**

##### A
```
• Là gì? cơ cấu , cấu tạo — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «cơ cấu , cấu tạo» (A) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### B
```
• Là gì? máy tự động — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «máy tự động» (B) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### D
```
• Là gì? sợi đốt — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «sợi đốt» (D) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

**whatIs**
```
{
  "A": "cơ cấu , cấu tạo — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "máy tự động — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "phần tử lô gic — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "sợi đốt — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Chọn định nghĩa/nghĩa phù hợp nhất với thuật ngữ trong đề.
• Thuật ngữ: «phần tử logic（ ）»
```

**memoryTip**
```
• phần tử logic（ ） ≈ phần tử lô gic
• Ưu tiên định nghĩa chuẩn giáo trình, không dịch word-by-word lệch.
```

---

### 327/400 · `jit` id=500 · task=`slides` · num=490 · ans **D**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
【専門用語】基数（きすう） の意味として最も適切なものはどれか。
```

**Options**

- **A.** vô hạn , vô tận
- **B.** hàm số toán học
- **C.** hệ cơ số 8
- **D.** cơ số ✅

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | 【Thuật ngữ】Nghĩa nào phù hợp nhất với thuật ngữ trong đề? |
| optionsVi.A | vô hạn , vô tận |
| optionsVi.B | hàm số toán học |
| optionsVi.C | hệ cơ số 8 |
| optionsVi.D | cơ số |
| answerDisplay | D. cơ số |

**concept**
```
• « （ ）» → cơ số
• Nghĩa: cơ số.
```

**whyCorrect**
```
• Có vai trò riêng; đối chiếu với điều kiện stem.
• Khớp stem: bản dịch thuật ngữ JP↔VI đúng.
```

**whyWrong**

##### A
```
• Là gì? vô hạn , vô tận — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «vô hạn , vô tận» (A) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### B
```
• Là gì? hàm số toán học — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «hàm số toán học» (B) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### C
```
• Là gì? hệ cơ số 8 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «hệ cơ số 8» (C) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

**whatIs**
```
{
  "A": "vô hạn , vô tận — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "hàm số toán học — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "hệ cơ số 8 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "cơ số — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Chọn định nghĩa/nghĩa phù hợp nhất với thuật ngữ trong đề.
• Thuật ngữ: « （ ）»
```

**memoryTip**
```
• （ ） ≈ cơ số
• Ưu tiên định nghĩa chuẩn giáo trình, không dịch word-by-word lệch.
```

---

### 328/400 · `jit` id=501 · task=`slides` · num=491 · ans **A**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
【専門用語】16 進数（じゅうろくしんすう） の意味として最も適切なものはどれか。
```

**Options**

- **A.** hệ cơ số 16 ✅
- **B.** giữa chừng
- **C.** phần dư
- **D.** công thức Taylor

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | 【Thuật ngữ】Nghĩa nào phù hợp nhất với thuật ngữ trong đề? |
| optionsVi.A | hệ cơ số 16 |
| optionsVi.B | giữa chừng |
| optionsVi.C | phần dư |
| optionsVi.D | công thức Taylor |
| answerDisplay | A. hệ cơ số 16 |

**concept**
```
• «16 （ ）» → hệ cơ số 16
• Nghĩa: hệ cơ số 16.
```

**whyCorrect**
```
• Có vai trò riêng; đối chiếu với điều kiện stem.
• Khớp stem: bản dịch thuật ngữ JP↔VI đúng.
```

**whyWrong**

##### B
```
• Là gì? giữa chừng — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «giữa chừng» (B) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### C
```
• Là gì? phần dư — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «phần dư» (C) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### D
```
• Là gì? công thức Taylor — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «công thức Taylor» (D) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

**whatIs**
```
{
  "A": "hệ cơ số 16 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "giữa chừng — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "phần dư — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "công thức Taylor — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Chọn định nghĩa/nghĩa phù hợp nhất với thuật ngữ trong đề.
• Thuật ngữ: «16 （ ）»
```

**memoryTip**
```
• 16 （ ） ≈ hệ cơ số 16
• Ưu tiên định nghĩa chuẩn giáo trình, không dịch word-by-word lệch.
```

---

### 329/400 · `jit` id=502 · task=`slides` · num=492 · ans **B**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
【専門用語】書き並べる（かきならべる） の意味として最も適切なものはどれか。
```

**Options**

- **A.** xử lý tính toán
- **B.** viết lần lượt ✅
- **C.** phần bù
- **D.** hệ thập phân

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | 【Thuật ngữ】Nghĩa nào phù hợp nhất với thuật ngữ trong đề? |
| optionsVi.A | xử lý tính toán |
| optionsVi.B | viết lần lượt |
| optionsVi.C | phần bù |
| optionsVi.D | hệ thập phân |
| answerDisplay | B. viết lần lượt |

**concept**
```
• « （ ）» → viết lần lượt
• Nghĩa: viết lần lượt.
```

**whyCorrect**
```
• Có vai trò riêng; đối chiếu với điều kiện stem.
• Khớp stem: bản dịch thuật ngữ JP↔VI đúng.
```

**whyWrong**

##### A
```
• Là gì? xử lý tính toán — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «xử lý tính toán» (A) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### C
```
• Là gì? phần bù — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «phần bù» (C) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### D
```
• Là gì? hệ thập phân — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «hệ thập phân» (D) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

**whatIs**
```
{
  "A": "xử lý tính toán — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "viết lần lượt — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "phần bù — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "hệ thập phân — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Chọn định nghĩa/nghĩa phù hợp nhất với thuật ngữ trong đề.
• Thuật ngữ: « （ ）»
```

**memoryTip**
```
• （ ） ≈ viết lần lượt
• Ưu tiên định nghĩa chuẩn giáo trình, không dịch word-by-word lệch.
```

---

### 330/400 · `jit` id=503 · task=`slides` · num=493 · ans **D**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
【専門用語】10 進数（じっしんすう） の意味として最も適切なものはどれか。
```

**Options**

- **A.** điện tử
- **B.** hàm số toán học
- **C.** bít dấu
- **D.** hệ thập phân ✅

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | 【Thuật ngữ】Nghĩa nào phù hợp nhất với thuật ngữ trong đề? |
| optionsVi.A | điện tử |
| optionsVi.B | hàm số toán học |
| optionsVi.C | bít dấu |
| optionsVi.D | hệ thập phân |
| answerDisplay | D. hệ thập phân |

**concept**
```
• «10 （ ）» → hệ thập phân
• Nghĩa: hệ thập phân.
```

**whyCorrect**
```
• Có vai trò riêng; đối chiếu với điều kiện stem.
• Khớp stem: bản dịch thuật ngữ JP↔VI đúng.
```

**whyWrong**

##### A
```
• Là gì? điện tử — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «điện tử» (A) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### B
```
• Là gì? hàm số toán học — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «hàm số toán học» (B) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### C
```
• Là gì? bít dấu — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «bít dấu» (C) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

**whatIs**
```
{
  "A": "điện tử — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "hàm số toán học — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "bít dấu — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "hệ thập phân — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Chọn định nghĩa/nghĩa phù hợp nhất với thuật ngữ trong đề.
• Thuật ngữ: «10 （ ）»
```

**memoryTip**
```
• 10 （ ） ≈ hệ thập phân
• Ưu tiên định nghĩa chuẩn giáo trình, không dịch word-by-word lệch.
```

---

### 331/400 · `jit` id=504 · task=`slides` · num=494 · ans **D**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
【専門用語】合計する（ごうけいする） の意味として最も適切なものはどれか。
```

**Options**

- **A.** bao quanh
- **B.** vế phải
- **C.** hệ thập phân
- **D.** tổng cộng ✅

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | 【Thuật ngữ】Nghĩa nào phù hợp nhất với thuật ngữ trong đề? |
| optionsVi.A | bao quanh |
| optionsVi.B | vế phải |
| optionsVi.C | hệ thập phân |
| optionsVi.D | tổng cộng |
| answerDisplay | D. tổng cộng |

**concept**
```
• « （ ）» → tổng cộng
• Nghĩa: tổng cộng.
```

**whyCorrect**
```
• Có vai trò riêng; đối chiếu với điều kiện stem.
• Khớp stem: bản dịch thuật ngữ JP↔VI đúng.
```

**whyWrong**

##### A
```
• Là gì? bao quanh — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «bao quanh» (A) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### B
```
• Là gì? vế phải — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «vế phải» (B) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### C
```
• Là gì? hệ thập phân — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «hệ thập phân» (C) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

**whatIs**
```
{
  "A": "bao quanh — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "vế phải — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "hệ thập phân — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "tổng cộng — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Chọn định nghĩa/nghĩa phù hợp nhất với thuật ngữ trong đề.
• Thuật ngữ: « （ ）»
```

**memoryTip**
```
• （ ） ≈ tổng cộng
• Ưu tiên định nghĩa chuẩn giáo trình, không dịch word-by-word lệch.
```

---

### 332/400 · `jit` id=505 · task=`slides` · num=495 · ans **B**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
【専門用語】テイラー展開（Taylor てんかい） の意味として最も適切なものはどれか。
```

**Options**

- **A.** suy ra
- **B.** công thức Taylor ✅
- **C.** vô hạn , vô tận
- **D.** hàm số toán học

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | 【Thuật ngữ】Nghĩa nào phù hợp nhất với thuật ngữ trong đề? |
| optionsVi.A | suy ra |
| optionsVi.B | công thức Taylor |
| optionsVi.C | vô hạn , vô tận |
| optionsVi.D | hàm số toán học |
| answerDisplay | B. công thức Taylor |

**concept**
```
• « （Taylor ）» → công thức Taylor
• Nghĩa: công thức Taylor.
```

**whyCorrect**
```
• Có vai trò riêng; đối chiếu với điều kiện stem.
• Khớp stem: bản dịch thuật ngữ JP↔VI đúng.
```

**whyWrong**

##### A
```
• Là gì? suy ra — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «suy ra» (A) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### C
```
• Là gì? vô hạn , vô tận — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «vô hạn , vô tận» (C) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### D
```
• Là gì? hàm số toán học — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «hàm số toán học» (D) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

**whatIs**
```
{
  "A": "suy ra — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "công thức Taylor — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "vô hạn , vô tận — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "hàm số toán học — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Chọn định nghĩa/nghĩa phù hợp nhất với thuật ngữ trong đề.
• Thuật ngữ: « （Taylor ）»
```

**memoryTip**
```
• （Taylor ） ≈ công thức Taylor
• Ưu tiên định nghĩa chuẩn giáo trình, không dịch word-by-word lệch.
```

---

### 333/400 · `jit` id=506 · task=`slides` · num=496 · ans **A**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
【専門用語】加減乗除（かげんじょうじょ） の意味として最も適切なものはどれか。
```

**Options**

- **A.** cộng trừ nhân chia ✅
- **B.** dịch chuyển bít
- **C.** hàm số toán học
- **D.** hệ cơ số 16

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | 【Thuật ngữ】Nghĩa nào phù hợp nhất với thuật ngữ trong đề? |
| optionsVi.A | cộng trừ nhân chia |
| optionsVi.B | dịch chuyển bít |
| optionsVi.C | hàm số toán học |
| optionsVi.D | hệ cơ số 16 |
| answerDisplay | A. cộng trừ nhân chia |

**concept**
```
• « （ ）» → cộng trừ nhân chia
• Nghĩa: cộng trừ nhân chia.
```

**whyCorrect**
```
• Có vai trò riêng; đối chiếu với điều kiện stem.
• Khớp stem: bản dịch thuật ngữ JP↔VI đúng.
```

**whyWrong**

##### B
```
• Là gì? dịch chuyển bít — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «dịch chuyển bít» (B) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### C
```
• Là gì? hàm số toán học — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «hàm số toán học» (C) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### D
```
• Là gì? hệ cơ số 16 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «hệ cơ số 16» (D) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

**whatIs**
```
{
  "A": "cộng trừ nhân chia — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "dịch chuyển bít — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "hàm số toán học — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "hệ cơ số 16 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Chọn định nghĩa/nghĩa phù hợp nhất với thuật ngữ trong đề.
• Thuật ngữ: « （ ）»
```

**memoryTip**
```
• （ ） ≈ cộng trừ nhân chia
• Ưu tiên định nghĩa chuẩn giáo trình, không dịch word-by-word lệch.
```

---

### 334/400 · `jit` id=507 · task=`slides` · num=497 · ans **A**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
【専門用語】余り（あまり） の意味として最も適切なものはどれか。
```

**Options**

- **A.** phần dư ✅
- **B.** công thức Taylor
- **C.** ký hiệu
- **D.** lũy thừa

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | 【Thuật ngữ】Nghĩa nào phù hợp nhất với thuật ngữ trong đề? |
| optionsVi.A | phần dư |
| optionsVi.B | công thức Taylor |
| optionsVi.C | ký hiệu |
| optionsVi.D | lũy thừa |
| answerDisplay | A. phần dư |

**concept**
```
• « （ ）» → phần dư
• Nghĩa: phần dư.
```

**whyCorrect**
```
• Có vai trò riêng; đối chiếu với điều kiện stem.
• Khớp stem: bản dịch thuật ngữ JP↔VI đúng.
```

**whyWrong**

##### B
```
• Là gì? công thức Taylor — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «công thức Taylor» (B) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### C
```
• Là gì? ký hiệu — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «ký hiệu» (C) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### D
```
• Là gì? lũy thừa — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «lũy thừa» (D) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

**whatIs**
```
{
  "A": "phần dư — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "công thức Taylor — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "ký hiệu — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "lũy thừa — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Chọn định nghĩa/nghĩa phù hợp nhất với thuật ngữ trong đề.
• Thuật ngữ: « （ ）»
```

**memoryTip**
```
• （ ） ≈ phần dư
• Ưu tiên định nghĩa chuẩn giáo trình, không dịch word-by-word lệch.
```

---

### 335/400 · `jit` id=517 · task=`slides` · num=507 · ans **B**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
【専門用語】性能（せいのう） の意味として最も適切なものはどれか。
```

**Options**

- **A.** xuống dòng
- **B.** tính năng ✅
- **C.** bảng mã EBCDIC
- **D.** lý giải , hiểu

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | 【Thuật ngữ】Nghĩa nào phù hợp nhất với thuật ngữ trong đề? |
| optionsVi.A | xuống dòng |
| optionsVi.B | tính năng |
| optionsVi.C | bảng mã EBCDIC |
| optionsVi.D | lý giải , hiểu |
| answerDisplay | B. tính năng |

**concept**
```
• « （ ）» → tính năng
• Nghĩa: tính năng.
```

**whyCorrect**
```
• Có vai trò riêng; đối chiếu với điều kiện stem.
• Khớp stem: bản dịch thuật ngữ JP↔VI đúng.
```

**whyWrong**

##### A
```
• Là gì? xuống dòng — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «xuống dòng» (A) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### C
```
• Là gì? bảng mã EBCDIC — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «bảng mã EBCDIC» (C) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### D
```
• Là gì? lý giải , hiểu — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «lý giải , hiểu» (D) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

**whatIs**
```
{
  "A": "xuống dòng — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "tính năng — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "bảng mã EBCDIC — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "lý giải , hiểu — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Chọn định nghĩa/nghĩa phù hợp nhất với thuật ngữ trong đề.
• Thuật ngữ: « （ ）»
```

**memoryTip**
```
• （ ） ≈ tính năng
• Ưu tiên định nghĩa chuẩn giáo trình, không dịch word-by-word lệch.
```

---

### 336/400 · `jit` id=518 · task=`slides` · num=508 · ans **B**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
【専門用語】客観的（きゃっかんてき） の意味として最も適切なものはどれか。
```

**Options**

- **A.** megabyte
- **B.** mang tính khách quan ✅
- **C.** bảng mã EUC
- **D.** chỉ trích , chỉ ra

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | 【Thuật ngữ】Nghĩa nào phù hợp nhất với thuật ngữ trong đề? |
| optionsVi.A | megabyte |
| optionsVi.B | mang tính khách quan |
| optionsVi.C | bảng mã EUC |
| optionsVi.D | chỉ trích , chỉ ra |
| answerDisplay | B. mang tính khách quan |

**concept**
```
• « （ ）» → mang tính khách quan
• Nghĩa: mang tính khách quan.
```

**whyCorrect**
```
• Analog continuous signal.
• Khớp stem: bản dịch thuật ngữ JP↔VI đúng.
```

**whyWrong**

##### A
```
• Là gì? megabyte — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «megabyte» (A) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### C
```
• Là gì? bảng mã EUC — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «bảng mã EUC» (C) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### D
```
• Là gì? chỉ trích , chỉ ra — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «chỉ trích , chỉ ra» (D) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

**whatIs**
```
{
  "A": "megabyte — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Tín hiệu tương tự liên tục (dòng/áp…).",
  "C": "bảng mã EUC — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "chỉ trích , chỉ ra — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Chọn định nghĩa/nghĩa phù hợp nhất với thuật ngữ trong đề.
• Thuật ngữ: « （ ）»
```

**memoryTip**
```
• （ ） ≈ mang tính khách quan
• Ưu tiên định nghĩa chuẩn giáo trình, không dịch word-by-word lệch.
```

---

### 337/400 · `jit` id=519 · task=`slides` · num=509 · ans **D**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
【専門用語】改行コード（かいぎょう code） の意味として最も適切なものはどれか。
```

**Options**

- **A.** lỗi phông chữ
- **B.** bit
- **C.** terabyte
- **D.** mã xuống dòng ✅

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | 【Thuật ngữ】Nghĩa nào phù hợp nhất với thuật ngữ trong đề? |
| optionsVi.A | lỗi phông chữ |
| optionsVi.B | bit |
| optionsVi.C | terabyte |
| optionsVi.D | mã xuống dòng |
| answerDisplay | D. mã xuống dòng |

**concept**
```
• « （ code）» → mã xuống dòng
• Nghĩa: mã xuống dòng.
```

**whyCorrect**
```
• Có vai trò riêng; đối chiếu với điều kiện stem.
• Khớp stem: bản dịch thuật ngữ JP↔VI đúng.
```

**whyWrong**

##### A
```
• Là gì? lỗi phông chữ — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «lỗi phông chữ» (A) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### B
```
• Là gì? bit — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «bit» (B) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### C
```
• Là gì? terabyte — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «terabyte» (C) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

**whatIs**
```
{
  "A": "lỗi phông chữ — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "bit — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "terabyte — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "mã xuống dòng — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Chọn định nghĩa/nghĩa phù hợp nhất với thuật ngữ trong đề.
• Thuật ngữ: « （ code）»
```

**memoryTip**
```
• （ code） ≈ mã xuống dòng
• Ưu tiên định nghĩa chuẩn giáo trình, không dịch word-by-word lệch.
```

---

### 338/400 · `jit` id=520 · task=`slides` · num=510 · ans **A**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
【専門用語】JIS コード（Japanese Industrial Standard code） の意味として最も適切なものはどれか。
```

**Options**

- **A.** bảng mã chuẩn công nghiệp Nhật Bản ✅
- **B.** xuống dòng
- **C.** phân biệt
- **D.** mã JIS chuyển dịch

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | 【Thuật ngữ】Nghĩa nào phù hợp nhất với thuật ngữ trong đề? |
| optionsVi.A | bảng mã chuẩn công nghiệp Nhật Bản |
| optionsVi.B | xuống dòng |
| optionsVi.C | phân biệt |
| optionsVi.D | mã JIS chuyển dịch |
| answerDisplay | A. bảng mã chuẩn công nghiệp Nhật Bản |

**concept**
```
• «JIS （Japanese Industrial Standard code）» → bảng mã chuẩn công nghiệp Nhật Bản
• Nghĩa: bảng mã chuẩn công nghiệp Nhật Bản.
```

**whyCorrect**
```
• Nghĩa đúng: bảng mã chuẩn công nghiệp Nhật Bản
```

**whyWrong**

##### B
```
• Là gì? xuống dòng — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «xuống dòng» (B) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### C
```
• Là gì? phân biệt — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «phân biệt» (C) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### D
```
• Là gì? mã JIS chuyển dịch — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «mã JIS chuyển dịch» (D) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

**whatIs**
```
{
  "A": "bảng mã chuẩn công nghiệp Nhật Bản",
  "B": "xuống dòng — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "phân biệt — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "mã JIS chuyển dịch — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Chọn định nghĩa/nghĩa phù hợp nhất với thuật ngữ trong đề.
• Thuật ngữ: «JIS （Japanese Industrial Standard code）»
```

**memoryTip**
```
• JIS （Japanese Industrial Standard code） ≈ bảng mã chuẩn công nghiệp Nhật Bản
• Ưu tiên định nghĩa chuẩn giáo trình, không dịch word-by-word lệch.
```

---

### 339/400 · `jit` id=521 · task=`slides` · num=511 · ans **B**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
【専門用語】オペレーティング システム（operating system） の意味として最も適切なものはどれか。
```

**Options**

- **A.** terabyte
- **B.** hệ điều hành ✅
- **C.** mã xuống dòng
- **D.** hệ thống mã

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | 【Thuật ngữ】Nghĩa nào phù hợp nhất với thuật ngữ trong đề? |
| optionsVi.A | terabyte |
| optionsVi.B | hệ điều hành |
| optionsVi.C | mã xuống dòng |
| optionsVi.D | hệ thống mã |
| answerDisplay | B. hệ điều hành |

**concept**
```
• « hệ thống（operating system）» → hệ điều hành
• Nghĩa: hệ điều hành.
```

**whyCorrect**
```
• Có vai trò riêng; đối chiếu với điều kiện stem.
• Khớp stem: bản dịch thuật ngữ JP↔VI đúng.
```

**whyWrong**

##### A
```
• Là gì? terabyte — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «terabyte» (A) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### C
```
• Là gì? mã xuống dòng — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «mã xuống dòng» (C) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### D
```
• Là gì? hệ thống mã — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «hệ thống mã» (D) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

**whatIs**
```
{
  "A": "terabyte — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "hệ điều hành — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "mã xuống dòng — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "hệ thống mã — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Chọn định nghĩa/nghĩa phù hợp nhất với thuật ngữ trong đề.
• Thuật ngữ: « hệ thống（operating system）»
```

**memoryTip**
```
• hệ thống（operating system） ≈ hệ điều hành
• Ưu tiên định nghĩa chuẩn giáo trình, không dịch word-by-word lệch.
```

---

### 340/400 · `jit` id=522 · task=`slides` · num=512 · ans **C**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
【専門用語】主観的（しゅかんてき） の意味として最も適切なものはどれか。
```

**Options**

- **A.** mang tính khách quan
- **B.** byte
- **C.** mang tính chủ quan ✅
- **D.** Đo

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | 【Thuật ngữ】Nghĩa nào phù hợp nhất với thuật ngữ trong đề? |
| optionsVi.A | mang tính khách quan |
| optionsVi.B | byte |
| optionsVi.C | mang tính chủ quan |
| optionsVi.D | Đo |
| answerDisplay | C. mang tính chủ quan |

**concept**
```
• « （ ）» → mang tính chủ quan
• Nghĩa: mang tính chủ quan.
```

**whyCorrect**
```
• Analog continuous signal.
• Khớp stem: bản dịch thuật ngữ JP↔VI đúng.
```

**whyWrong**

##### A
```
• Là gì? Tín hiệu tương tự liên tục (dòng/áp…).
• Dùng để làm gì? Analog continuous signal.
• Vì sao sai? «mang tính khách quan» (A) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### B
```
• Là gì? byte — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «byte» (B) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### D
```
• Là gì? Đo — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Đo» (D) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

**whatIs**
```
{
  "A": "Tín hiệu tương tự liên tục (dòng/áp…).",
  "B": "byte — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Tín hiệu tương tự liên tục (dòng/áp…).",
  "D": "Đo — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Chọn định nghĩa/nghĩa phù hợp nhất với thuật ngữ trong đề.
• Thuật ngữ: « （ ）»
```

**memoryTip**
```
• （ ） ≈ mang tính chủ quan
• Ưu tiên định nghĩa chuẩn giáo trình, không dịch word-by-word lệch.
```

---

### 341/400 · `jit` id=523 · task=`slides` · num=513 · ans **C**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
【専門用語】指摘する（してきする） の意味として最も適切なものはどれか。
```

**Options**

- **A.** hệ điều hành
- **B.** Đo
- **C.** chỉ trích , chỉ ra ✅
- **D.** xuống dòng

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | 【Thuật ngữ】Nghĩa nào phù hợp nhất với thuật ngữ trong đề? |
| optionsVi.A | hệ điều hành |
| optionsVi.B | Đo |
| optionsVi.C | chỉ trích , chỉ ra |
| optionsVi.D | xuống dòng |
| answerDisplay | C. chỉ trích , chỉ ra |

**concept**
```
• « （ ）» → chỉ trích, chỉ ra
• Nghĩa: chỉ trích, chỉ ra.
```

**whyCorrect**
```
• Có vai trò riêng; đối chiếu với điều kiện stem.
• Khớp stem: bản dịch thuật ngữ JP↔VI đúng.
```

**whyWrong**

##### A
```
• Là gì? hệ điều hành — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «hệ điều hành» (A) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### B
```
• Là gì? Đo — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Đo» (B) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### D
```
• Là gì? xuống dòng — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «xuống dòng» (D) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

**whatIs**
```
{
  "A": "hệ điều hành — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Đo — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "chỉ trích , chỉ ra — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "xuống dòng — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Chọn định nghĩa/nghĩa phù hợp nhất với thuật ngữ trong đề.
• Thuật ngữ: « （ ）»
```

**memoryTip**
```
• （ ） ≈ chỉ trích, chỉ ra
• Ưu tiên định nghĩa chuẩn giáo trình, không dịch word-by-word lệch.
```

---

### 342/400 · `jit` id=524 · task=`slides` · num=514 · ans **C**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
【専門用語】最小単位（さいしょうたんい） の意味として最も適切なものはどれか。
```

**Options**

- **A.** hệ điều hành
- **B.** Đo
- **C.** đơn vị nhỏ nhất ✅
- **D.** terabyte

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | 【Thuật ngữ】Nghĩa nào phù hợp nhất với thuật ngữ trong đề? |
| optionsVi.A | hệ điều hành |
| optionsVi.B | Đo |
| optionsVi.C | đơn vị nhỏ nhất |
| optionsVi.D | terabyte |
| answerDisplay | C. đơn vị nhỏ nhất |

**concept**
```
• « （ ）» → đơn vị nhỏ nhất
• Nghĩa: đơn vị nhỏ nhất.
```

**whyCorrect**
```
• Có vai trò riêng; đối chiếu với điều kiện stem.
• Khớp stem: bản dịch thuật ngữ JP↔VI đúng.
```

**whyWrong**

##### A
```
• Là gì? hệ điều hành — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «hệ điều hành» (A) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### B
```
• Là gì? Đo — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Đo» (B) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### D
```
• Là gì? terabyte — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «terabyte» (D) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

**whatIs**
```
{
  "A": "hệ điều hành — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Đo — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "đơn vị nhỏ nhất — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "terabyte — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Chọn định nghĩa/nghĩa phù hợp nhất với thuật ngữ trong đề.
• Thuật ngữ: « （ ）»
```

**memoryTip**
```
• （ ） ≈ đơn vị nhỏ nhất
• Ưu tiên định nghĩa chuẩn giáo trình, không dịch word-by-word lệch.
```

---

### 343/400 · `jit` id=530 · task=`slides` · num=520 · ans **A**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
【専門用語】インクジェット プリンタ（inkjet printer） の意味として最も適切なものはどれか。
```

**Options**

- **A.** máy in phun ✅
- **B.** héc ( đơn vị đo tần số )
- **C.** mảnh giấy nhỏ , dài
- **D.** mã đặc trưng

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | 【Thuật ngữ】Nghĩa nào phù hợp nhất với thuật ngữ trong đề? |
| optionsVi.A | máy in phun |
| optionsVi.B | héc ( đơn vị đo tần số ) |
| optionsVi.C | mảnh giấy nhỏ , dài |
| optionsVi.D | mã đặc trưng |
| answerDisplay | A. máy in phun |

**concept**
```
• « máy in（inkjet printer）» → máy in phun
• Nghĩa: máy in phun.
```

**whyCorrect**
```
• Có vai trò riêng; đối chiếu với điều kiện stem.
• Khớp stem: bản dịch thuật ngữ JP↔VI đúng.
```

**whyWrong**

##### B
```
• Là gì? héc ( đơn vị đo tần số )
• Dùng để làm gì? Phạm trù/khái niệm trong lý thuyết đề cập.
• Vì sao sai? «héc ( đơn vị đo tần số )» (B) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### C
```
• Là gì? mảnh giấy nhỏ , dài — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «mảnh giấy nhỏ , dài» (C) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### D
```
• Là gì? mã đặc trưng — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «mã đặc trưng» (D) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

**whatIs**
```
{
  "A": "máy in phun — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "héc ( đơn vị đo tần số )",
  "C": "mảnh giấy nhỏ , dài — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "mã đặc trưng — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Chọn định nghĩa/nghĩa phù hợp nhất với thuật ngữ trong đề.
• Thuật ngữ: « máy in（inkjet printer）»
```

**memoryTip**
```
• máy in（inkjet printer） ≈ máy in phun
• Ưu tiên định nghĩa chuẩn giáo trình, không dịch word-by-word lệch.
```

---

### 344/400 · `jit` id=531 · task=`slides` · num=521 · ans **B**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
【専門用語】原色（げんしょく） の意味として最も適切なものはどれか。
```

**Options**

- **A.** mã đặc trưng
- **B.** màu chính ✅
- **C.** nhạc chuông
- **D.** héc ( đơn vị đo tần số )

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | 【Thuật ngữ】Nghĩa nào phù hợp nhất với thuật ngữ trong đề? |
| optionsVi.A | mã đặc trưng |
| optionsVi.B | màu chính |
| optionsVi.C | nhạc chuông |
| optionsVi.D | héc ( đơn vị đo tần số ) |
| answerDisplay | B. màu chính |

**concept**
```
• « （ ）» → màu chính
• Nghĩa: màu chính.
```

**whyCorrect**
```
• Có vai trò riêng; đối chiếu với điều kiện stem.
• Khớp stem: bản dịch thuật ngữ JP↔VI đúng.
```

**whyWrong**

##### A
```
• Là gì? mã đặc trưng — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «mã đặc trưng» (A) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### C
```
• Là gì? nhạc chuông — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «nhạc chuông» (C) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### D
```
• Là gì? héc ( đơn vị đo tần số )
• Dùng để làm gì? Phạm trù/khái niệm trong lý thuyết đề cập.
• Vì sao sai? «héc ( đơn vị đo tần số )» (D) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

**whatIs**
```
{
  "A": "mã đặc trưng — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "màu chính — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "nhạc chuông — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "héc ( đơn vị đo tần số )"
}
```

**intent**
```
• Chọn định nghĩa/nghĩa phù hợp nhất với thuật ngữ trong đề.
• Thuật ngữ: « （ ）»
```

**memoryTip**
```
• （ ） ≈ màu chính
• Ưu tiên định nghĩa chuẩn giáo trình, không dịch word-by-word lệch.
```

---

### 345/400 · `jit` id=532 · task=`slides` · num=522 · ans **C**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
【専門用語】量子化数（りょうしかすう） の意味として最も適切なものはどれか。
```

**Options**

- **A.** biến điệu , chuyển điệu
- **B.** mã đặc trưng
- **C.** số lượng tử hóa ✅
- **D.** ngang dọc

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | 【Thuật ngữ】Nghĩa nào phù hợp nhất với «số mức lượng tử hóa»? |
| optionsVi.A | biến điệu , chuyển điệu |
| optionsVi.B | mã đặc trưng |
| optionsVi.C | số lượng tử hóa |
| optionsVi.D | ngang dọc |
| answerDisplay | C. số lượng tử hóa |

**concept**
```
• «số mức lượng tử hóa（ ）» → số lượng tử hóa
• Nghĩa: số lượng tử hóa.
```

**whyCorrect**
```
• Có vai trò riêng; đối chiếu với điều kiện stem.
• Khớp stem: bản dịch thuật ngữ JP↔VI đúng.
```

**whyWrong**

##### A
```
• Là gì? biến điệu , chuyển điệu
• Dùng để làm gì? Phạm trù/khái niệm trong lý thuyết đề cập.
• Vì sao sai? «biến điệu , chuyển điệu» (A) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### B
```
• Là gì? mã đặc trưng — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «mã đặc trưng» (B) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### D
```
• Là gì? ngang dọc — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «ngang dọc» (D) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

**whatIs**
```
{
  "A": "biến điệu , chuyển điệu",
  "B": "mã đặc trưng — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "số lượng tử hóa — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "ngang dọc — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Chọn định nghĩa/nghĩa phù hợp nhất với thuật ngữ trong đề.
• Thuật ngữ: «số mức lượng tử hóa（ ）»
```

**memoryTip**
```
• số mức lượng tử hóa（ ） ≈ số lượng tử hóa
• Ưu tiên định nghĩa chuẩn giáo trình, không dịch word-by-word lệch.
```

---

### 346/400 · `jit` id=533 · task=`slides` · num=523 · ans **D**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
【専門用語】音符（おんぷ） の意味として最も適切なものはどれか。
```

**Options**

- **A.** máy in phun
- **B.** số lượng tử hóa
- **C.** giao diện kỹ thuật số dành cho nhạc cụ
- **D.** nốt nhạc ✅

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | 【Thuật ngữ】Nghĩa nào phù hợp nhất với thuật ngữ trong đề? |
| optionsVi.A | máy in phun |
| optionsVi.B | số lượng tử hóa |
| optionsVi.C | giao diện kỹ thuật số dành cho nhạc cụ |
| optionsVi.D | nốt nhạc |
| answerDisplay | D. nốt nhạc |

**concept**
```
• « （ ）» → nốt nhạc
• Nghĩa: nốt nhạc.
```

**whyCorrect**
```
• Có vai trò riêng; đối chiếu với điều kiện stem.
• Khớp stem: bản dịch thuật ngữ JP↔VI đúng.
```

**whyWrong**

##### A
```
• Là gì? máy in phun — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «máy in phun» (A) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### B
```
• Là gì? số lượng tử hóa — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «số lượng tử hóa» (B) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### C
```
• Là gì? giao diện kỹ thuật số dành cho nhạc cụ
• Dùng để làm gì? Phạm trù/khái niệm trong lý thuyết đề cập.
• Vì sao sai? «giao diện kỹ thuật số dành cho nhạc cụ» (C) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

**whatIs**
```
{
  "A": "máy in phun — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "số lượng tử hóa — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "giao diện kỹ thuật số dành cho nhạc cụ",
  "D": "nốt nhạc — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Chọn định nghĩa/nghĩa phù hợp nhất với thuật ngữ trong đề.
• Thuật ngữ: « （ ）»
```

**memoryTip**
```
• （ ） ≈ nốt nhạc
• Ưu tiên định nghĩa chuẩn giáo trình, không dịch word-by-word lệch.
```

---

### 347/400 · `jit` id=534 · task=`slides` · num=524 · ans **D**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
【専門用語】特殊なコード（とくしゅな code） の意味として最も適切なものはどれか。
```

**Options**

- **A.** máy in phun
- **B.** nốt nhạc
- **C.** hình ảnh động
- **D.** mã đặc trưng ✅

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | 【Thuật ngữ】Nghĩa nào phù hợp nhất với thuật ngữ trong đề? |
| optionsVi.A | máy in phun |
| optionsVi.B | nốt nhạc |
| optionsVi.C | hình ảnh động |
| optionsVi.D | mã đặc trưng |
| answerDisplay | D. mã đặc trưng |

**concept**
```
• « （ code）» → mã đặc trưng
• Nghĩa: mã đặc trưng.
```

**whyCorrect**
```
• Có vai trò riêng; đối chiếu với điều kiện stem.
• Khớp stem: bản dịch thuật ngữ JP↔VI đúng.
```

**whyWrong**

##### A
```
• Là gì? máy in phun — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «máy in phun» (A) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### B
```
• Là gì? nốt nhạc — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «nốt nhạc» (B) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### C
```
• Là gì? hình ảnh động — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «hình ảnh động» (C) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

**whatIs**
```
{
  "A": "máy in phun — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "nốt nhạc — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "hình ảnh động — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "mã đặc trưng — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Chọn định nghĩa/nghĩa phù hợp nhất với thuật ngữ trong đề.
• Thuật ngữ: « （ code）»
```

**memoryTip**
```
• （ code） ≈ mã đặc trưng
• Ưu tiên định nghĩa chuẩn giáo trình, không dịch word-by-word lệch.
```

---

### 348/400 · `jit` id=535 · task=`slides` · num=525 · ans **A**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
【専門用語】縦横（たてよこ） の意味として最も適切なものはどれか。
```

**Options**

- **A.** ngang dọc ✅
- **B.** giao diện kỹ thuật số dành cho nhạc cụ
- **C.** mạnh yếu
- **D.** âm thanh

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | 【Thuật ngữ】Nghĩa nào phù hợp nhất với thuật ngữ trong đề? |
| optionsVi.A | ngang dọc |
| optionsVi.B | giao diện kỹ thuật số dành cho nhạc cụ |
| optionsVi.C | mạnh yếu |
| optionsVi.D | âm thanh |
| answerDisplay | A. ngang dọc |

**concept**
```
• « （ ）» → ngang dọc
• Nghĩa: ngang dọc.
```

**whyCorrect**
```
• Có vai trò riêng; đối chiếu với điều kiện stem.
• Khớp stem: bản dịch thuật ngữ JP↔VI đúng.
```

**whyWrong**

##### B
```
• Là gì? giao diện kỹ thuật số dành cho nhạc cụ
• Dùng để làm gì? Phạm trù/khái niệm trong lý thuyết đề cập.
• Vì sao sai? «giao diện kỹ thuật số dành cho nhạc cụ» (B) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### C
```
• Là gì? mạnh yếu — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «mạnh yếu» (C) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### D
```
• Là gì? âm thanh — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «âm thanh» (D) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

**whatIs**
```
{
  "A": "ngang dọc — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "giao diện kỹ thuật số dành cho nhạc cụ",
  "C": "mạnh yếu — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "âm thanh — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Chọn định nghĩa/nghĩa phù hợp nhất với thuật ngữ trong đề.
• Thuật ngữ: « （ ）»
```

**memoryTip**
```
• （ ） ≈ ngang dọc
• Ưu tiên định nghĩa chuẩn giáo trình, không dịch word-by-word lệch.
```

---

### 349/400 · `jit` id=536 · task=`slides` · num=526 · ans **C**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
【専門用語】静止画像（せいしがぞう） の意味として最も適切なものはどれか。
```

**Options**

- **A.** héc ( đơn vị đo tần số )
- **B.** hình ảnh động
- **C.** hình ảnh tĩnh ✅
- **D.** mảnh giấy nhỏ , dài

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | 【Thuật ngữ】Nghĩa nào phù hợp nhất với thuật ngữ trong đề? |
| optionsVi.A | héc ( đơn vị đo tần số ) |
| optionsVi.B | hình ảnh động |
| optionsVi.C | hình ảnh tĩnh |
| optionsVi.D | mảnh giấy nhỏ , dài |
| answerDisplay | C. hình ảnh tĩnh |

**concept**
```
• «ảnh tĩnh （ ）» → hình ảnh tĩnh
• Nghĩa: hình ảnh tĩnh.
```

**whyCorrect**
```
• Có vai trò riêng; đối chiếu với điều kiện stem.
• Khớp stem: bản dịch thuật ngữ JP↔VI đúng.
```

**whyWrong**

##### A
```
• Là gì? héc ( đơn vị đo tần số )
• Dùng để làm gì? Phạm trù/khái niệm trong lý thuyết đề cập.
• Vì sao sai? «héc ( đơn vị đo tần số )» (A) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### B
```
• Là gì? hình ảnh động — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «hình ảnh động» (B) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### D
```
• Là gì? mảnh giấy nhỏ , dài — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «mảnh giấy nhỏ , dài» (D) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

**whatIs**
```
{
  "A": "héc ( đơn vị đo tần số )",
  "B": "hình ảnh động — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "hình ảnh tĩnh — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "mảnh giấy nhỏ , dài — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Chọn định nghĩa/nghĩa phù hợp nhất với thuật ngữ trong đề.
• Thuật ngữ: «ảnh tĩnh （ ）»
```

**memoryTip**
```
• ảnh tĩnh （ ） ≈ hình ảnh tĩnh
• Ưu tiên định nghĩa chuẩn giáo trình, không dịch word-by-word lệch.
```

---

### 350/400 · `jit` id=537 · task=`slides` · num=527 · ans **C**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
【専門用語】接続端子（せつぞくたんし） の意味として最も適切なものはどれか。
```

**Options**

- **A.** đường quét
- **B.** biến điệu , chuyển điệu
- **C.** đầu dây nối ✅
- **D.** chuẩn hiển thị đồ họa máy tính

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | 【Thuật ngữ】Nghĩa nào phù hợp nhất với thuật ngữ trong đề? |
| optionsVi.A | đường quét |
| optionsVi.B | biến điệu , chuyển điệu |
| optionsVi.C | đầu dây nối |
| optionsVi.D | chuẩn hiển thị đồ họa máy tính |
| answerDisplay | C. đầu dây nối |

**concept**
```
• « （ ）» → đầu dây nối
• Nghĩa: đầu dây nối.
```

**whyCorrect**
```
• Có vai trò riêng; đối chiếu với điều kiện stem.
• Khớp stem: bản dịch thuật ngữ JP↔VI đúng.
```

**whyWrong**

##### A
```
• Là gì? đường quét — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «đường quét» (A) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### B
```
• Là gì? biến điệu , chuyển điệu
• Dùng để làm gì? Phạm trù/khái niệm trong lý thuyết đề cập.
• Vì sao sai? «biến điệu , chuyển điệu» (B) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### D
```
• Là gì? chuẩn hiển thị đồ họa máy tính
• Dùng để làm gì? Phạm trù/khái niệm trong lý thuyết đề cập.
• Vì sao sai? «chuẩn hiển thị đồ họa máy tính» (D) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

**whatIs**
```
{
  "A": "đường quét — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "biến điệu , chuyển điệu",
  "C": "đầu dây nối — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "chuẩn hiển thị đồ họa máy tính"
}
```

**intent**
```
• Chọn định nghĩa/nghĩa phù hợp nhất với thuật ngữ trong đề.
• Thuật ngữ: « （ ）»
```

**memoryTip**
```
• （ ） ≈ đầu dây nối
• Ưu tiên định nghĩa chuẩn giáo trình, không dịch word-by-word lệch.
```

---

### 351/400 · `jit` id=538 · task=`slides` · num=528 · ans **B**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
【専門用語】次のベトナム語の用語を日本語に直しなさい。 mảnh giấy nhỏ , dài
```

**Options**

- **A.** 強弱
- **B.** 短冊 ✅
- **C.** 音源
- **D.** MIDI

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | 【Thuật ngữ】Hãy dịch thuật ngữ tiếng Việt sau sang tiếng Nhật: «mảnh giấy nhỏ , dài» |
| optionsVi.A | cường độ (mạnh–yếu) |
| optionsVi.B | mảnh giấy nhỏ , dài |
| optionsVi.C | nguồn âm |
| optionsVi.D | phát biểu về đa phương tiện / nén |
| answerDisplay | B. mảnh giấy nhỏ , dài |

**concept**
```
• «mảnh giấy nhỏ, dài» trong tiếng Nhật là « ».
```

**whyCorrect**
```
• «mảnh giấy nhỏ, dài» = • Việt «mảnh giấy nhỏ, dài» ⇔ Nhật « ».
• mảnh giấy nhỏ, dài
• Chọn đúng cặp dịch thuật ngữ, không chọn từ gần nghĩa khác lĩnh vực.
```

**whyWrong**

##### A
```
• Là gì? 強弱 (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «強弱» (A) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### C
```
• Là gì? 音源 (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «音源» (C) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### D
```
• Là gì? MIDI — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «MIDI» (D) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

**whatIs**
```
{
  "A": "強弱 (thuật ngữ JP).",
  "B": "短冊 (thuật ngữ JP).",
  "C": "音源 (thuật ngữ JP).",
  "D": "MIDI — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Câu từ vựng: cho thuật ngữ tiếng Việt → chọn bản tiếng Nhật đúng.
• Thuật ngữ cần dịch: «mảnh giấy nhỏ , dài»
```

**memoryTip**
```
• mảnh giấy nhỏ, dài = • Học theo cặp VI ↔ JP, tránh nhầm từ kanji/katakana gần.
```

---

### 352/400 · `jit` id=539 · task=`slides` · num=529 · ans **C**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
【専門用語】次のベトナム語の用語を日本語に直しなさい。 nốt nhạc
```

**Options**

- **A.** 走査線
- **B.** きめ細かい
- **C.** 音符 ✅
- **D.** VGA

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | 【Thuật ngữ】Hãy dịch thuật ngữ tiếng Việt sau sang tiếng Nhật: «nốt nhạc» |
| optionsVi.A | đường quét |
| optionsVi.B | きめ細かい — khái niệm kỹ thuật |
| optionsVi.C | nốt nhạc |
| optionsVi.D | VGA |
| answerDisplay | C. nốt nhạc |

**concept**
```
• «nốt nhạc» trong tiếng Nhật là « ».
```

**whyCorrect**
```
• «nốt nhạc» = • Việt «nốt nhạc» ⇔ Nhật « ».
• nốt nhạc
• Chọn đúng cặp dịch thuật ngữ, không chọn từ gần nghĩa khác lĩnh vực.
```

**whyWrong**

##### A
```
• Là gì? 走査線 (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «走査線» (A) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### B
```
• Là gì? きめ細かい (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «きめ細かい» (B) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### D
```
• Là gì? VGA — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «VGA» (D) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

**whatIs**
```
{
  "A": "走査線 (thuật ngữ JP).",
  "B": "きめ細かい (thuật ngữ JP).",
  "C": "音符 (thuật ngữ JP).",
  "D": "VGA — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Câu từ vựng: cho thuật ngữ tiếng Việt → chọn bản tiếng Nhật đúng.
• Thuật ngữ cần dịch: «nốt nhạc»
```

**memoryTip**
```
• nốt nhạc = • Học theo cặp VI ↔ JP, tránh nhầm từ kanji/katakana gần.
```

---

### 353/400 · `jit` id=545 · task=`slides` · num=535 · ans **B**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
【専門用語】パリティチェック（parity check） の意味として最も適切なものはどれか。
```

**Options**

- **A.** Bộ nhớ USB
- **B.** kiểm chẵn lẻ ✅
- **C.** khoảnh khắc
- **D.** tính đa dụng

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | 【Thuật ngữ】Nghĩa nào phù hợp nhất với «kiểm tra parity»? |
| optionsVi.A | Bộ nhớ USB |
| optionsVi.B | kiểm chẵn lẻ |
| optionsVi.C | khoảnh khắc |
| optionsVi.D | tính đa dụng |
| answerDisplay | B. kiểm chẵn lẻ |

**concept**
```
• «kiểm tra parity（parity check）» → kiểm chẵn lẻ
• Nghĩa: kiểm chẵn lẻ.
```

**whyCorrect**
```
• Có vai trò riêng; đối chiếu với điều kiện stem.
• Khớp stem: bản dịch thuật ngữ JP↔VI đúng.
```

**whyWrong**

##### A
```
• Là gì? Bộ nhớ USB — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Bộ nhớ USB» (A) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### C
```
• Là gì? khoảnh khắc — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «khoảnh khắc» (C) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### D
```
• Là gì? tính đa dụng — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «tính đa dụng» (D) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

**whatIs**
```
{
  "A": "Bộ nhớ USB — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "kiểm chẵn lẻ — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "khoảnh khắc — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "tính đa dụng — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Chọn định nghĩa/nghĩa phù hợp nhất với thuật ngữ trong đề.
• Thuật ngữ: «kiểm tra parity（parity check）»
```

**memoryTip**
```
• kiểm tra parity（parity check） ≈ kiểm chẵn lẻ
• Ưu tiên định nghĩa chuẩn giáo trình, không dịch word-by-word lệch.
```

---

### 354/400 · `jit` id=546 · task=`slides` · num=536 · ans **A**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
【専門用語】判定（はんてい） の意味として最も適切なものはどれか。
```

**Options**

- **A.** sự phán đoán / sự phân định ✅
- **B.** băng thông rộng
- **C.** tìm ra
- **D.** cảm nhận

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | 【Thuật ngữ】Nghĩa nào phù hợp nhất với thuật ngữ trong đề? |
| optionsVi.A | sự phán đoán / sự phân định |
| optionsVi.B | băng thông rộng |
| optionsVi.C | tìm ra |
| optionsVi.D | cảm nhận |
| answerDisplay | A. sự phán đoán / sự phân định |

**concept**
```
• « （ ）» → sự phán đoán / sự phân định
• Nghĩa: sự phán đoán / sự phân định.
```

**whyCorrect**
```
• Nghĩa đúng: sự phán đoán / sự phân định
```

**whyWrong**

##### B
```
• Là gì? băng thông rộng — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «băng thông rộng» (B) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### C
```
• Là gì? tìm ra — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «tìm ra» (C) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### D
```
• Là gì? cảm nhận — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «cảm nhận» (D) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

**whatIs**
```
{
  "A": "sự phán đoán / sự phân định",
  "B": "băng thông rộng — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "tìm ra — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "cảm nhận — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Chọn định nghĩa/nghĩa phù hợp nhất với thuật ngữ trong đề.
• Thuật ngữ: « （ ）»
```

**memoryTip**
```
• （ ） ≈ sự phán đoán / sự phân định
• Ưu tiên định nghĩa chuẩn giáo trình, không dịch word-by-word lệch.
```

---

### 355/400 · `jit` id=547 · task=`slides` · num=537 · ans **D**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
【専門用語】差分（さぶん） の意味として最も適切なものはどれか。
```

**Options**

- **A.** bậc lẻ
- **B.** nhóm chuyên gia hình ảnh động
- **C.** chuẩn ASCII
- **D.** phần khác nhau ✅

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | 【Thuật ngữ】Nghĩa nào phù hợp nhất với thuật ngữ trong đề? |
| optionsVi.A | bậc lẻ |
| optionsVi.B | nhóm chuyên gia hình ảnh động |
| optionsVi.C | chuẩn ASCII |
| optionsVi.D | phần khác nhau |
| answerDisplay | D. phần khác nhau |

**concept**
```
• « （ ）» → phần khác nhau
• Nghĩa: phần khác nhau.
```

**whyCorrect**
```
• Có vai trò riêng; đối chiếu với điều kiện stem.
• Khớp stem: bản dịch thuật ngữ JP↔VI đúng.
```

**whyWrong**

##### A
```
• Là gì? bậc lẻ — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «bậc lẻ» (A) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### B
```
• Là gì? nhóm chuyên gia hình ảnh động
• Dùng để làm gì? Phạm trù/khái niệm trong lý thuyết đề cập.
• Vì sao sai? «nhóm chuyên gia hình ảnh động» (B) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### C
```
• Là gì? chuẩn ASCII — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «chuẩn ASCII» (C) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

**whatIs**
```
{
  "A": "bậc lẻ — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "nhóm chuyên gia hình ảnh động",
  "C": "chuẩn ASCII — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "phần khác nhau — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Chọn định nghĩa/nghĩa phù hợp nhất với thuật ngữ trong đề.
• Thuật ngữ: « （ ）»
```

**memoryTip**
```
• （ ） ≈ phần khác nhau
• Ưu tiên định nghĩa chuẩn giáo trình, không dịch word-by-word lệch.
```

---

### 356/400 · `jit` id=548 · task=`slides` · num=538 · ans **A**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
【専門用語】不可逆（ふかぎゃく） の意味として最も適切なものはどれか。
```

**Options**

- **A.** không thể đảo ngược ✅
- **B.** kiểu nhị phân
- **C.** màu sai , màu giả
- **D.** cảm nhận

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | 【Thuật ngữ】Nghĩa nào phù hợp nhất với thuật ngữ trong đề? |
| optionsVi.A | không thể đảo ngược |
| optionsVi.B | kiểu nhị phân |
| optionsVi.C | màu sai , màu giả |
| optionsVi.D | cảm nhận |
| answerDisplay | A. không thể đảo ngược |

**concept**
```
• « （ ）» → không thể đảo ngược
• Nghĩa: không thể đảo ngược.
```

**whyCorrect**
```
• Có vai trò riêng; đối chiếu với điều kiện stem.
• Khớp stem: bản dịch thuật ngữ JP↔VI đúng.
```

**whyWrong**

##### B
```
• Là gì? Mã/dữ liệu nhị phân.
• Dùng để làm gì? Biểu diễn 0/1.
• Vì sao sai? «kiểu nhị phân» (B) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### C
```
• Là gì? màu sai , màu giả — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «màu sai , màu giả» (C) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### D
```
• Là gì? cảm nhận — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «cảm nhận» (D) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

**whatIs**
```
{
  "A": "không thể đảo ngược — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Mã/dữ liệu nhị phân.",
  "C": "màu sai , màu giả — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "cảm nhận — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Chọn định nghĩa/nghĩa phù hợp nhất với thuật ngữ trong đề.
• Thuật ngữ: « （ ）»
```

**memoryTip**
```
• （ ） ≈ không thể đảo ngược
• Ưu tiên định nghĩa chuẩn giáo trình, không dịch word-by-word lệch.
```

---

### 357/400 · `jit` id=549 · task=`slides` · num=539 · ans **D**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
【専門用語】BPS（Bit Per Second） の意味として最も適切なものはどれか。
```

**Options**

- **A.** sự cân bằng
- **B.** khoảnh khắc
- **C.** kèm theo , bám dính
- **D.** bit trên giây ✅

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | 【Thuật ngữ】Nghĩa nào phù hợp nhất với «BPS（Bit Per Second）»? |
| optionsVi.A | sự cân bằng |
| optionsVi.B | khoảnh khắc |
| optionsVi.C | kèm theo , bám dính |
| optionsVi.D | bit trên giây |
| answerDisplay | D. bit trên giây |

**concept**
```
• «BPS（Bit Per Second）» → bit trên giây
• Nghĩa: bit trên giây.
```

**whyCorrect**
```
• Có vai trò riêng; đối chiếu với điều kiện stem.
• Khớp stem: bản dịch thuật ngữ JP↔VI đúng.
```

**whyWrong**

##### A
```
• Là gì? sự cân bằng — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «sự cân bằng» (A) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### B
```
• Là gì? khoảnh khắc — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «khoảnh khắc» (B) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### C
```
• Là gì? kèm theo , bám dính — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «kèm theo , bám dính» (C) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

**whatIs**
```
{
  "A": "sự cân bằng — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "khoảnh khắc — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "kèm theo , bám dính — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "bit trên giây — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Chọn định nghĩa/nghĩa phù hợp nhất với thuật ngữ trong đề.
• Thuật ngữ: «BPS（Bit Per Second）»
```

**memoryTip**
```
• BPS（Bit Per Second） ≈ bit trên giây
• Ưu tiên định nghĩa chuẩn giáo trình, không dịch word-by-word lệch.
```

---

### 358/400 · `jit` id=550 · task=`slides` · num=540 · ans **A**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
【専門用語】損なう（そこなう） の意味として最も適切なものはどれか。
```

**Options**

- **A.** làm tổn hại ✅
- **B.** cảm nhận
- **C.** phương pháp mã hoá độ dài loạt
- **D.** phần khác nhau

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | 【Thuật ngữ】Nghĩa nào phù hợp nhất với thuật ngữ trong đề? |
| optionsVi.A | làm tổn hại |
| optionsVi.B | cảm nhận |
| optionsVi.C | phương pháp mã hoá độ dài loạt |
| optionsVi.D | phần khác nhau |
| answerDisplay | A. làm tổn hại |

**concept**
```
• « （ ）» → làm tổn hại
• Nghĩa: làm tổn hại.
```

**whyCorrect**
```
• Có vai trò riêng; đối chiếu với điều kiện stem.
• Khớp stem: bản dịch thuật ngữ JP↔VI đúng.
```

**whyWrong**

##### B
```
• Là gì? cảm nhận — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «cảm nhận» (B) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### C
```
• Là gì? phương pháp mã hoá độ dài loạt
• Dùng để làm gì? Phạm trù/khái niệm trong lý thuyết đề cập.
• Vì sao sai? «phương pháp mã hoá độ dài loạt» (C) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### D
```
• Là gì? phần khác nhau — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «phần khác nhau» (D) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

**whatIs**
```
{
  "A": "làm tổn hại — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "cảm nhận — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "phương pháp mã hoá độ dài loạt",
  "D": "phần khác nhau — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Chọn định nghĩa/nghĩa phù hợp nhất với thuật ngữ trong đề.
• Thuật ngữ: « （ ）»
```

**memoryTip**
```
• （ ） ≈ làm tổn hại
• Ưu tiên định nghĩa chuẩn giáo trình, không dịch word-by-word lệch.
```

---

### 359/400 · `jit` id=551 · task=`slides` · num=541 · ans **B**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
【専門用語】プロセッサー（processor） の意味として最も適切なものはどれか。
```

**Options**

- **A.** rất nhỏ
- **B.** bộ xử lý ✅
- **C.** bậc chẵn
- **D.** khoảnh khắc

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | 【Thuật ngữ】Nghĩa nào phù hợp nhất với thuật ngữ trong đề? |
| optionsVi.A | rất nhỏ |
| optionsVi.B | bộ xử lý |
| optionsVi.C | bậc chẵn |
| optionsVi.D | khoảnh khắc |
| answerDisplay | B. bộ xử lý |

**concept**
```
• « （processor）» → bộ xử lý
• Nghĩa: bộ xử lý.
```

**whyCorrect**
```
• Có vai trò riêng; đối chiếu với điều kiện stem.
• Khớp stem: bản dịch thuật ngữ JP↔VI đúng.
```

**whyWrong**

##### A
```
• Là gì? rất nhỏ — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «rất nhỏ» (A) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### C
```
• Là gì? bậc chẵn — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «bậc chẵn» (C) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### D
```
• Là gì? khoảnh khắc — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «khoảnh khắc» (D) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

**whatIs**
```
{
  "A": "rất nhỏ — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "bộ xử lý — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "bậc chẵn — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "khoảnh khắc — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Chọn định nghĩa/nghĩa phù hợp nhất với thuật ngữ trong đề.
• Thuật ngữ: « （processor）»
```

**memoryTip**
```
• （processor） ≈ bộ xử lý
• Ưu tiên định nghĩa chuẩn giáo trình, không dịch word-by-word lệch.
```

---

### 360/400 · `jit` id=552 · task=`slides` · num=542 · ans **A**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
【専門用語】車線（しゃせん） の意味として最も適切なものはどれか。
```

**Options**

- **A.** làn xe ✅
- **B.** Bộ nhớ USB
- **C.** phương pháp mã hoá độ dài loạt
- **D.** màu sai , màu giả

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | 【Thuật ngữ】Nghĩa nào phù hợp nhất với thuật ngữ trong đề? |
| optionsVi.A | làn xe |
| optionsVi.B | Bộ nhớ USB |
| optionsVi.C | phương pháp mã hoá độ dài loạt |
| optionsVi.D | màu sai , màu giả |
| answerDisplay | A. làn xe |

**concept**
```
• « （ ）» → làn xe
• Nghĩa: làn xe.
```

**whyCorrect**
```
• Có vai trò riêng; đối chiếu với điều kiện stem.
• Khớp stem: bản dịch thuật ngữ JP↔VI đúng.
```

**whyWrong**

##### B
```
• Là gì? Bộ nhớ USB — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Bộ nhớ USB» (B) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### C
```
• Là gì? phương pháp mã hoá độ dài loạt
• Dùng để làm gì? Phạm trù/khái niệm trong lý thuyết đề cập.
• Vì sao sai? «phương pháp mã hoá độ dài loạt» (C) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### D
```
• Là gì? màu sai , màu giả — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «màu sai , màu giả» (D) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

**whatIs**
```
{
  "A": "làn xe — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Bộ nhớ USB — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "phương pháp mã hoá độ dài loạt",
  "D": "màu sai , màu giả — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Chọn định nghĩa/nghĩa phù hợp nhất với thuật ngữ trong đề.
• Thuật ngữ: « （ ）»
```

**memoryTip**
```
• （ ） ≈ làn xe
• Ưu tiên định nghĩa chuẩn giáo trình, không dịch word-by-word lệch.
```

---

### 361/400 · `jit` id=560 · task=`slides` · num=550 · ans **C**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
【専門用語】ガレージ（ｇ arage） の意味として最も適切なものはどれか。
```

**Options**

- **A.** nội dung, thực chất
- **B.** phần trung gian
- **C.** vùng chứa ✅
- **D.** cung cấp miễn phí

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | 【Thuật ngữ】Nghĩa nào phù hợp nhất với thuật ngữ trong đề? |
| optionsVi.A | nội dung, thực chất |
| optionsVi.B | phần trung gian |
| optionsVi.C | vùng chứa |
| optionsVi.D | cung cấp miễn phí |
| answerDisplay | C. vùng chứa |

**concept**
```
• « （ｇ arage）» → vùng chứa
• Nghĩa: vùng chứa.
```

**whyCorrect**
```
• Có vai trò riêng; đối chiếu với điều kiện stem.
• Khớp stem: bản dịch thuật ngữ JP↔VI đúng.
```

**whyWrong**

##### A
```
• Là gì? nội dung, thực chất — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «nội dung, thực chất» (A) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### B
```
• Là gì? phần trung gian — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «phần trung gian» (B) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### D
```
• Là gì? cung cấp miễn phí — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «cung cấp miễn phí» (D) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

**whatIs**
```
{
  "A": "nội dung, thực chất — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "phần trung gian — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "vùng chứa — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "cung cấp miễn phí — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Chọn định nghĩa/nghĩa phù hợp nhất với thuật ngữ trong đề.
• Thuật ngữ: « （ｇ arage）»
```

**memoryTip**
```
• （ｇ arage） ≈ vùng chứa
• Ưu tiên định nghĩa chuẩn giáo trình, không dịch word-by-word lệch.
```

---

### 362/400 · `jit` id=561 · task=`slides` · num=551 · ans **A**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
【専門用語】LINUX（リナックス） の意味として最も適切なものはどれか。
```

**Options**

- **A.** tên gọi của một hệ điều hành máy tính . ✅
- **B.** đa người dùng
- **C.** Steven Jobs
- **D.** tiến xa , nhảy vọt

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | 【Thuật ngữ】Nghĩa nào phù hợp nhất với thuật ngữ trong đề? |
| optionsVi.A | tên gọi của một hệ điều hành máy tính . |
| optionsVi.B | đa người dùng |
| optionsVi.C | Steven Jobs |
| optionsVi.D | tiến xa , nhảy vọt |
| answerDisplay | A. tên gọi của một hệ điều hành máy tính . |

**concept**
```
• «LINtrải nghiệm người dùng（ ）» → tên gọi của một hệ điều hành máy tính.
• Nghĩa: tên gọi của một hệ điều hành máy tính..
```

**whyCorrect**
```
• Nghĩa đúng: tên gọi của một hệ điều hành máy tính .
```

**whyWrong**

##### B
```
• Là gì? đa người dùng — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «đa người dùng» (B) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### C
```
• Là gì? Steven Jobs — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Steven Jobs» (C) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### D
```
• Là gì? tiến xa , nhảy vọt — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «tiến xa , nhảy vọt» (D) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

**whatIs**
```
{
  "A": "tên gọi của một hệ điều hành máy tính .",
  "B": "đa người dùng — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Steven Jobs — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "tiến xa , nhảy vọt — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Chọn định nghĩa/nghĩa phù hợp nhất với thuật ngữ trong đề.
• Thuật ngữ: «LINtrải nghiệm người dùng（ ）»
```

**memoryTip**
```
• LINtrải nghiệm người dùng（ ） ≈ tên gọi của một hệ điều hành máy tính.
• Ưu tiên định nghĩa chuẩn giáo trình, không dịch word-by-word lệch.
```

---

### 363/400 · `jit` id=562 · task=`slides` · num=552 · ans **C**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
【専門用語】UNIX（ユニックス） の意味として最も適切なものはどれか。
```

**Options**

- **A.** gia nhập , hội nhập
- **B.** giao diện người sử dụng
- **C.** một hệ điều hành máy tính viết vào những năm 1960 và 1970, là hệ điều hành đa nhiệm ✅
- **D.** cạnh tranh

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | 【Thuật ngữ】Nghĩa nào phù hợp nhất với thuật ngữ trong đề? |
| optionsVi.A | gia nhập , hội nhập |
| optionsVi.B | giao diện người sử dụng |
| optionsVi.C | một hệ điều hành máy tính viết vào những năm 1960 và 1970, là hệ điều hành đa nhiệm |
| optionsVi.D | cạnh tranh |
| answerDisplay | C. một hệ điều hành máy tính viết vào những năm 1960 và 1970, là hệ điều hành đa nhiệm |

**concept**
```
• «UNIX（ ）» → một hệ điều hành máy tính viết vào những năm 1960 và 1970, là hệ điều hành đa nhiệm
• Phát biểu / đoạn JP đã dịch đủ nghĩa.
```

**whyCorrect**
```
• Nghĩa đúng: một hệ điều hành máy tính viết vào những năm 1960 và 1970, là hệ điều hành đa nhiệm
```

**whyWrong**

##### A
```
• Là gì? gia nhập , hội nhập — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «gia nhập , hội nhập» (A) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### B
```
• Là gì? giao diện người sử dụng
• Dùng để làm gì? Phạm trù/khái niệm trong lý thuyết đề cập.
• Vì sao sai? «giao diện người sử dụng» (B) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### D
```
• Là gì? cạnh tranh — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «cạnh tranh» (D) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

**whatIs**
```
{
  "A": "gia nhập , hội nhập — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "giao diện người sử dụng",
  "C": "Tín hiệu/dữ liệu số (rời rạc, 0/1).",
  "D": "cạnh tranh — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Chọn định nghĩa/nghĩa phù hợp nhất với thuật ngữ trong đề.
• Thuật ngữ: «UNIX（ ）»
```

**memoryTip**
```
• UNIX（ ） ≈ một hệ điều hành máy tính viết vào những năm 1960 và 1970, là hệ điều hành đa nhiệm
• Ưu tiên định nghĩa chuẩn giáo trình, không dịch word-by-word lệch.
```

---

### 364/400 · `jit` id=563 · task=`slides` · num=553 · ans **D**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
【専門用語】中身（なかみ） の意味として最も適切なものはどれか。
```

**Options**

- **A.** ưu điểm và nhược điểm
- **B.** doanh nghiệp tiên phong
- **C.** máy tính mini
- **D.** nội dung, thực chất ✅

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | 【Thuật ngữ】Nghĩa nào phù hợp nhất với thuật ngữ trong đề? |
| optionsVi.A | ưu điểm và nhược điểm |
| optionsVi.B | doanh nghiệp tiên phong |
| optionsVi.C | máy tính mini |
| optionsVi.D | nội dung, thực chất |
| answerDisplay | D. nội dung, thực chất |

**concept**
```
• « （ ）» → nội dung, thực chất
• Nghĩa: nội dung, thực chất.
```

**whyCorrect**
```
• Có vai trò riêng; đối chiếu với điều kiện stem.
• Khớp stem: bản dịch thuật ngữ JP↔VI đúng.
```

**whyWrong**

##### A
```
• Là gì? ưu điểm và nhược điểm
• Dùng để làm gì? Phạm trù/khái niệm trong lý thuyết đề cập.
• Vì sao sai? «ưu điểm và nhược điểm» (A) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### B
```
• Là gì? doanh nghiệp tiên phong
• Dùng để làm gì? Phạm trù/khái niệm trong lý thuyết đề cập.
• Vì sao sai? «doanh nghiệp tiên phong» (B) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### C
```
• Là gì? máy tính mini — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «máy tính mini» (C) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

**whatIs**
```
{
  "A": "ưu điểm và nhược điểm",
  "B": "doanh nghiệp tiên phong",
  "C": "máy tính mini — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "nội dung, thực chất — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Chọn định nghĩa/nghĩa phù hợp nhất với thuật ngữ trong đề.
• Thuật ngữ: « （ ）»
```

**memoryTip**
```
• （ ） ≈ nội dung, thực chất
• Ưu tiên định nghĩa chuẩn giáo trình, không dịch word-by-word lệch.
```

---

### 365/400 · `jit` id=564 · task=`slides` · num=554 · ans **C**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
【専門用語】相違（そうい） の意味として最も適切なものはどれか。
```

**Options**

- **A.** giao diện đồ họa người sử dụng
- **B.** lập chương trình
- **C.** sự khác nhau , độ chênh lệch ✅
- **D.** phần trung gian

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | 【Thuật ngữ】Nghĩa nào phù hợp nhất với thuật ngữ trong đề? |
| optionsVi.A | giao diện đồ họa người sử dụng |
| optionsVi.B | lập chương trình |
| optionsVi.C | sự khác nhau , độ chênh lệch |
| optionsVi.D | phần trung gian |
| answerDisplay | C. sự khác nhau , độ chênh lệch |

**concept**
```
• « （ ）» → sự khác nhau, độ chênh lệch
• Nghĩa: sự khác nhau, độ chênh lệch.
```

**whyCorrect**
```
• Nghĩa đúng: sự khác nhau , độ chênh lệch
```

**whyWrong**

##### A
```
• Là gì? giao diện đồ họa người sử dụng
• Dùng để làm gì? Phạm trù/khái niệm trong lý thuyết đề cập.
• Vì sao sai? «giao diện đồ họa người sử dụng» (A) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### B
```
• Là gì? lập chương trình — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «lập chương trình» (B) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### D
```
• Là gì? phần trung gian — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «phần trung gian» (D) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

**whatIs**
```
{
  "A": "giao diện đồ họa người sử dụng",
  "B": "lập chương trình — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "sự khác nhau , độ chênh lệch",
  "D": "phần trung gian — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Chọn định nghĩa/nghĩa phù hợp nhất với thuật ngữ trong đề.
• Thuật ngữ: « （ ）»
```

**memoryTip**
```
• （ ） ≈ sự khác nhau, độ chênh lệch
• Ưu tiên định nghĩa chuẩn giáo trình, không dịch word-by-word lệch.
```

---

### 366/400 · `jit` id=565 · task=`slides` · num=555 · ans **C**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
【専門用語】スワッピング（s wapping） の意味として最も適切なものはどれか。
```

**Options**

- **A.** hệ giao tiếp đồ họa
- **B.** gia nhập , hội nhập
- **C.** hoán đổi ✅
- **D.** doanh nghiệp lớn

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | 【Thuật ngữ】Nghĩa nào phù hợp nhất với thuật ngữ trong đề? |
| optionsVi.A | hệ giao tiếp đồ họa |
| optionsVi.B | gia nhập , hội nhập |
| optionsVi.C | hoán đổi |
| optionsVi.D | doanh nghiệp lớn |
| answerDisplay | C. hoán đổi |

**concept**
```
• « （s wapping）» → hoán đổi
• Nghĩa: hoán đổi.
```

**whyCorrect**
```
• Có vai trò riêng; đối chiếu với điều kiện stem.
• Khớp stem: bản dịch thuật ngữ JP↔VI đúng.
```

**whyWrong**

##### A
```
• Là gì? hệ giao tiếp đồ họa — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «hệ giao tiếp đồ họa» (A) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### B
```
• Là gì? gia nhập , hội nhập — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «gia nhập , hội nhập» (B) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### D
```
• Là gì? doanh nghiệp lớn — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «doanh nghiệp lớn» (D) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

**whatIs**
```
{
  "A": "hệ giao tiếp đồ họa — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "gia nhập , hội nhập — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "hoán đổi — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "doanh nghiệp lớn — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Chọn định nghĩa/nghĩa phù hợp nhất với thuật ngữ trong đề.
• Thuật ngữ: « （s wapping）»
```

**memoryTip**
```
• （s wapping） ≈ hoán đổi
• Ưu tiên định nghĩa chuẩn giáo trình, không dịch word-by-word lệch.
```

---

### 367/400 · `jit` id=566 · task=`slides` · num=556 · ans **C**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
【専門用語】マルチユーザ（multiuser） の意味として最も適切なものはどれか。
```

**Options**

- **A.** phần mềm ứng dụng
- **B.** cạnh tranh
- **C.** đa người dùng ✅
- **D.** trang bị sẵn , lắp đặt kèm theo

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | 【Thuật ngữ】Nghĩa nào phù hợp nhất với thuật ngữ trong đề? |
| optionsVi.A | phần mềm ứng dụng |
| optionsVi.B | cạnh tranh |
| optionsVi.C | đa người dùng |
| optionsVi.D | trang bị sẵn , lắp đặt kèm theo |
| answerDisplay | C. đa người dùng |

**concept**
```
• « （multiuser）» → đa người dùng
• Nghĩa: đa người dùng.
```

**whyCorrect**
```
• Có vai trò riêng; đối chiếu với điều kiện stem.
• Khớp stem: bản dịch thuật ngữ JP↔VI đúng.
```

**whyWrong**

##### A
```
• Là gì? phần mềm ứng dụng — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «phần mềm ứng dụng» (A) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### B
```
• Là gì? cạnh tranh — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «cạnh tranh» (B) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### D
```
• Là gì? trang bị sẵn , lắp đặt kèm theo
• Dùng để làm gì? Phạm trù/khái niệm trong lý thuyết đề cập.
• Vì sao sai? «trang bị sẵn , lắp đặt kèm theo» (D) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

**whatIs**
```
{
  "A": "phần mềm ứng dụng — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "cạnh tranh — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "đa người dùng — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "trang bị sẵn , lắp đặt kèm theo"
}
```

**intent**
```
• Chọn định nghĩa/nghĩa phù hợp nhất với thuật ngữ trong đề.
• Thuật ngữ: « （multiuser）»
```

**memoryTip**
```
• （multiuser） ≈ đa người dùng
• Ưu tiên định nghĩa chuẩn giáo trình, không dịch word-by-word lệch.
```

---

### 368/400 · `jit` id=568 · task=`slides` · num=558 · ans **C**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
【専門用語】次のベトナム語の用語を日本語に直しなさい。 tiến xa , nhảy vọt
```

**Options**

- **A.** 迷う
- **B.** UNIX
- **C.** 飛躍的に ✅
- **D.** 搭載する

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | 【Thuật ngữ】Hãy dịch thuật ngữ tiếng Việt sau sang tiếng Nhật: «tiến xa , nhảy vọt» |
| optionsVi.A | nhầm / lúng túng |
| optionsVi.B | một hệ điều hành máy tính viết vào những năm 1960 và 1970, là hệ điều hành đa nhiệm |
| optionsVi.C | tiến xa , nhảy vọt |
| optionsVi.D | tích hợp |
| answerDisplay | C. tiến xa , nhảy vọt |

**concept**
```
• «tiến xa, nhảy vọt» trong tiếng Nhật là « ».
```

**whyCorrect**
```
• «tiến xa, nhảy vọt» = • Việt «tiến xa, nhảy vọt» ⇔ Nhật « ».
• tiến xa, nhảy vọt
• Chọn đúng cặp dịch thuật ngữ, không chọn từ gần nghĩa khác lĩnh vực.
```

**whyWrong**

##### A
```
• Là gì? 迷う (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «迷う» (A) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### B
```
• Là gì? UNIX — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «UNIX» (B) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### D
```
• Là gì? 搭載する (thuật ngữ JP).
• Dùng để làm gì? Khái niệm CNTT trong đề thi JIT.
• Vì sao sai? «搭載する» (D) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

**whatIs**
```
{
  "A": "迷う (thuật ngữ JP).",
  "B": "UNIX — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "飛躍的に (thuật ngữ JP).",
  "D": "搭載する (thuật ngữ JP)."
}
```

**intent**
```
• Câu từ vựng: cho thuật ngữ tiếng Việt → chọn bản tiếng Nhật đúng.
• Thuật ngữ cần dịch: «tiến xa , nhảy vọt»
```

**memoryTip**
```
• tiến xa, nhảy vọt = • Học theo cặp VI ↔ JP, tránh nhầm từ kanji/katakana gần.
```

---

### 369/400 · `jit` id=573 · task=`slides` · num=563 · ans **D**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
【専門用語】階層構造（かいそうこうぞう） の意味として最も適切なものはどれか。
```

**Options**

- **A.** đăng ký trùng
- **B.** kết hợp
- **C.** phép giao
- **D.** cấu trúc hình cây ✅

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | 【Thuật ngữ】Nghĩa nào phù hợp nhất với «cấu trúc phân cấp»? |
| optionsVi.A | đăng ký trùng |
| optionsVi.B | kết hợp |
| optionsVi.C | phép giao |
| optionsVi.D | cấu trúc hình cây |
| answerDisplay | D. cấu trúc hình cây |

**concept**
```
• «cấu trúc phân cấp（ ）» → cấu trúc hình cây
• Nghĩa: cấu trúc hình cây.
```

**whyCorrect**
```
• Có vai trò riêng; đối chiếu với điều kiện stem.
• Khớp stem: bản dịch thuật ngữ JP↔VI đúng.
```

**whyWrong**

##### A
```
• Là gì? đăng ký trùng — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «đăng ký trùng» (A) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### B
```
• Là gì? kết hợp — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «kết hợp» (B) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### C
```
• Là gì? phép giao — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «phép giao» (C) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

**whatIs**
```
{
  "A": "đăng ký trùng — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "kết hợp — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "phép giao — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "cấu trúc hình cây — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Chọn định nghĩa/nghĩa phù hợp nhất với thuật ngữ trong đề.
• Thuật ngữ: «cấu trúc phân cấp（ ）»
```

**memoryTip**
```
• cấu trúc phân cấp（ ） ≈ cấu trúc hình cây
• Ưu tiên định nghĩa chuẩn giáo trình, không dịch word-by-word lệch.
```

---

### 370/400 · `jit` id=574 · task=`slides` · num=564 · ans **D**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
【専門用語】起動（きどう） の意味として最も適切なものはどれか。
```

**Options**

- **A.** vé chỉ định
- **B.** sổ hộ khẩu
- **C.** áp dụng vào
- **D.** khởi động ✅

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | 【Thuật ngữ】Nghĩa nào phù hợp nhất với thuật ngữ trong đề? |
| optionsVi.A | vé chỉ định |
| optionsVi.B | sổ hộ khẩu |
| optionsVi.C | áp dụng vào |
| optionsVi.D | khởi động |
| answerDisplay | D. khởi động |

**concept**
```
• « （ ）» → khởi động
• Nghĩa: khởi động.
```

**whyCorrect**
```
• Có vai trò riêng; đối chiếu với điều kiện stem.
• Khớp stem: bản dịch thuật ngữ JP↔VI đúng.
```

**whyWrong**

##### A
```
• Là gì? vé chỉ định — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «vé chỉ định» (A) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### B
```
• Là gì? sổ hộ khẩu — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «sổ hộ khẩu» (B) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### C
```
• Là gì? áp dụng vào — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «áp dụng vào» (C) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

**whatIs**
```
{
  "A": "vé chỉ định — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "sổ hộ khẩu — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "áp dụng vào — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "khởi động — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Chọn định nghĩa/nghĩa phù hợp nhất với thuật ngữ trong đề.
• Thuật ngữ: « （ ）»
```

**memoryTip**
```
• （ ） ≈ khởi động
• Ưu tiên định nghĩa chuẩn giáo trình, không dịch word-by-word lệch.
```

---

### 371/400 · `jit` id=575 · task=`slides` · num=565 · ans **A**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
【専門用語】リレーショナル 表現（Relational ひょうげん） の意味として最も適切なものはどれか。
```

**Options**

- **A.** loại quan hệ ✅
- **B.** loại dạng lưới
- **C.** phép hợp
- **D.** nhánh

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | 【Thuật ngữ】Nghĩa nào phù hợp nhất với thuật ngữ trong đề? |
| optionsVi.A | loại quan hệ |
| optionsVi.B | loại dạng lưới |
| optionsVi.C | phép hợp |
| optionsVi.D | nhánh |
| answerDisplay | A. loại quan hệ |

**concept**
```
• «quan hệ (relational) biểu diễn / thể hiện（Relational ）» → loại quan hệ
• Nghĩa: loại quan hệ.
```

**whyCorrect**
```
• Có vai trò riêng; đối chiếu với điều kiện stem.
• Khớp stem: bản dịch thuật ngữ JP↔VI đúng.
```

**whyWrong**

##### B
```
• Là gì? loại dạng lưới — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «loại dạng lưới» (B) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### C
```
• Là gì? phép hợp — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «phép hợp» (C) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### D
```
• Là gì? nhánh — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «nhánh» (D) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

**whatIs**
```
{
  "A": "loại quan hệ — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "loại dạng lưới — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "phép hợp — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "nhánh — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Chọn định nghĩa/nghĩa phù hợp nhất với thuật ngữ trong đề.
• Thuật ngữ: «quan hệ (relational) biểu diễn / thể hiện（Relational ）»
```

**memoryTip**
```
• quan hệ (relational) biểu diễn / thể hiện（Relational ） ≈ loại quan hệ
• Ưu tiên định nghĩa chuẩn giáo trình, không dịch word-by-word lệch.
```

---

### 372/400 · `jit` id=576 · task=`slides` · num=566 · ans **A**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
【専門用語】網的表現（あみてきひょうげん） の意味として最も適切なものはどれか。
```

**Options**

- **A.** loại dạng lưới ✅
- **B.** loại quan hệ
- **C.** phép tính tập hợp
- **D.** phương tiện ghi

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | 【Thuật ngữ】Nghĩa nào phù hợp nhất với «biểu diễn mạng (network model)»? |
| optionsVi.A | loại dạng lưới |
| optionsVi.B | loại quan hệ |
| optionsVi.C | phép tính tập hợp |
| optionsVi.D | phương tiện ghi |
| answerDisplay | A. loại dạng lưới |

**concept**
```
• «biểu diễn mạng (network model)（ ）» → loại dạng lưới
• Nghĩa: loại dạng lưới.
```

**whyCorrect**
```
• Có vai trò riêng; đối chiếu với điều kiện stem.
• Khớp stem: bản dịch thuật ngữ JP↔VI đúng.
```

**whyWrong**

##### B
```
• Là gì? loại quan hệ — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «loại quan hệ» (B) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### C
```
• Là gì? phép tính tập hợp — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «phép tính tập hợp» (C) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### D
```
• Là gì? phương tiện ghi — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «phương tiện ghi» (D) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

**whatIs**
```
{
  "A": "loại dạng lưới — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "loại quan hệ — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "phép tính tập hợp — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "phương tiện ghi — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Chọn định nghĩa/nghĩa phù hợp nhất với thuật ngữ trong đề.
• Thuật ngữ: «biểu diễn mạng (network model)（ ）»
```

**memoryTip**
```
• biểu diễn mạng (network model)（ ） ≈ loại dạng lưới
• Ưu tiên định nghĩa chuẩn giáo trình, không dịch word-by-word lệch.
```

---

### 373/400 · `jit` id=577 · task=`slides` · num=567 · ans **A**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
【専門用語】急激（きゅうげき） の意味として最も適切なものはどれか。
```

**Options**

- **A.** mạnh mẽ , gấp gáp ✅
- **B.** loại dạng lưới
- **C.** khởi động
- **D.** phép tính tập hợp

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | 【Thuật ngữ】Nghĩa nào phù hợp nhất với thuật ngữ trong đề? |
| optionsVi.A | mạnh mẽ , gấp gáp |
| optionsVi.B | loại dạng lưới |
| optionsVi.C | khởi động |
| optionsVi.D | phép tính tập hợp |
| answerDisplay | A. mạnh mẽ , gấp gáp |

**concept**
```
• « （ ）» → mạnh mẽ, gấp gáp
• Nghĩa: mạnh mẽ, gấp gáp.
```

**whyCorrect**
```
• Có vai trò riêng; đối chiếu với điều kiện stem.
• Khớp stem: bản dịch thuật ngữ JP↔VI đúng.
```

**whyWrong**

##### B
```
• Là gì? loại dạng lưới — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «loại dạng lưới» (B) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### C
```
• Là gì? khởi động — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «khởi động» (C) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### D
```
• Là gì? phép tính tập hợp — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «phép tính tập hợp» (D) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

**whatIs**
```
{
  "A": "mạnh mẽ , gấp gáp — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "loại dạng lưới — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "khởi động — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "phép tính tập hợp — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Chọn định nghĩa/nghĩa phù hợp nhất với thuật ngữ trong đề.
• Thuật ngữ: « （ ）»
```

**memoryTip**
```
• （ ） ≈ mạnh mẽ, gấp gáp
• Ưu tiên định nghĩa chuẩn giáo trình, không dịch word-by-word lệch.
```

---

### 374/400 · `jit` id=578 · task=`slides` · num=568 · ans **D**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
【専門用語】自然な結合（しぜんなけつごう） の意味として最も適切なものはどれか。
```

**Options**

- **A.** hình ảnh
- **B.** sổ hộ khẩu
- **C.** loại quan hệ
- **D.** nối tự nhiên ✅

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | 【Thuật ngữ】Nghĩa nào phù hợp nhất với thuật ngữ trong đề? |
| optionsVi.A | hình ảnh |
| optionsVi.B | sổ hộ khẩu |
| optionsVi.C | loại quan hệ |
| optionsVi.D | nối tự nhiên |
| answerDisplay | D. nối tự nhiên |

**concept**
```
• « （ ）» → nối tự nhiên
• Nghĩa: nối tự nhiên.
```

**whyCorrect**
```
• Có vai trò riêng; đối chiếu với điều kiện stem.
• Khớp stem: bản dịch thuật ngữ JP↔VI đúng.
```

**whyWrong**

##### A
```
• Là gì? hình ảnh — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «hình ảnh» (A) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### B
```
• Là gì? sổ hộ khẩu — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «sổ hộ khẩu» (B) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### C
```
• Là gì? loại quan hệ — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «loại quan hệ» (C) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

**whatIs**
```
{
  "A": "hình ảnh — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "sổ hộ khẩu — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "loại quan hệ — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "nối tự nhiên — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Chọn định nghĩa/nghĩa phù hợp nhất với thuật ngữ trong đề.
• Thuật ngữ: « （ ）»
```

**memoryTip**
```
• （ ） ≈ nối tự nhiên
• Ưu tiên định nghĩa chuẩn giáo trình, không dịch word-by-word lệch.
```

---

### 375/400 · `jit` id=579 · task=`slides` · num=569 · ans **C**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
【専門用語】共通部分（きょうつうぶぶん） の意味として最も適切なものはどれか。
```

**Options**

- **A.** phép chiếu
- **B.** loại dạng lưới
- **C.** phép giao ✅
- **D.** xem , duyệt

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | 【Thuật ngữ】Nghĩa nào phù hợp nhất với thuật ngữ trong đề? |
| optionsVi.A | phép chiếu |
| optionsVi.B | loại dạng lưới |
| optionsVi.C | phép giao |
| optionsVi.D | xem , duyệt |
| answerDisplay | C. phép giao |

**concept**
```
• « （ ）» → phép giao
• Nghĩa: phép giao.
```

**whyCorrect**
```
• Có vai trò riêng; đối chiếu với điều kiện stem.
• Khớp stem: bản dịch thuật ngữ JP↔VI đúng.
```

**whyWrong**

##### A
```
• Là gì? phép chiếu — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «phép chiếu» (A) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### B
```
• Là gì? loại dạng lưới — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «loại dạng lưới» (B) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### D
```
• Là gì? xem , duyệt — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «xem , duyệt» (D) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

**whatIs**
```
{
  "A": "phép chiếu — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "loại dạng lưới — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "phép giao — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "xem , duyệt — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Chọn định nghĩa/nghĩa phù hợp nhất với thuật ngữ trong đề.
• Thuật ngữ: « （ ）»
```

**memoryTip**
```
• （ ） ≈ phép giao
• Ưu tiên định nghĩa chuẩn giáo trình, không dịch word-by-word lệch.
```

---

### 376/400 · `jit` id=580 · task=`slides` · num=570 · ans **B**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
【専門用語】実用性（じつようせい） の意味として最も適切なものはどれか。
```

**Options**

- **A.** tích đề các
- **B.** tính ứng dụng ✅
- **C.** phép hợp
- **D.** đăng ký trùng

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | 【Thuật ngữ】Nghĩa nào phù hợp nhất với thuật ngữ trong đề? |
| optionsVi.A | tích đề các |
| optionsVi.B | tính ứng dụng |
| optionsVi.C | phép hợp |
| optionsVi.D | đăng ký trùng |
| answerDisplay | B. tính ứng dụng |

**concept**
```
• « （ ）» → tính ứng dụng
• Nghĩa: tính ứng dụng.
```

**whyCorrect**
```
• Có vai trò riêng; đối chiếu với điều kiện stem.
• Khớp stem: bản dịch thuật ngữ JP↔VI đúng.
```

**whyWrong**

##### A
```
• Là gì? tích đề các — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «tích đề các» (A) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### C
```
• Là gì? phép hợp — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «phép hợp» (C) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### D
```
• Là gì? đăng ký trùng — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «đăng ký trùng» (D) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

**whatIs**
```
{
  "A": "tích đề các — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "tính ứng dụng — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "phép hợp — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "đăng ký trùng — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Chọn định nghĩa/nghĩa phù hợp nhất với thuật ngữ trong đề.
• Thuật ngữ: « （ ）»
```

**memoryTip**
```
• （ ） ≈ tính ứng dụng
• Ưu tiên định nghĩa chuẩn giáo trình, không dịch word-by-word lệch.
```

---

### 377/400 · `jit` id=587 · task=`slides` · num=577 · ans **C**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
【専門用語】昇順（しょうじゅん） の意味として最も適切なものはどれか。
```

**Options**

- **A.** ngôn ngữ SQL ( ngôn ngữ hỏi đáp có cấu trúc / ngôn ngữ truy vấn có cấu trúc )
- **B.** cú pháp
- **C.** thứ tự tăng dần ✅
- **D.** trực dịch

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | 【Thuật ngữ】Nghĩa nào phù hợp nhất với «thứ tự tăng dần»? |
| optionsVi.A | ngôn ngữ SQL ( ngôn ngữ hỏi đáp có cấu trúc / ngôn ngữ truy vấn có cấu trúc ) |
| optionsVi.B | cú pháp |
| optionsVi.C | thứ tự tăng dần |
| optionsVi.D | trực dịch |
| answerDisplay | C. thứ tự tăng dần |

**concept**
```
• «thứ tự tăng dần（ ）» → thứ tự tăng dần
• Nghĩa: thứ tự tăng dần.
```

**whyCorrect**
```
• Có vai trò riêng; đối chiếu với điều kiện stem.
• Khớp stem: bản dịch thuật ngữ JP↔VI đúng.
```

**whyWrong**

##### A
```
• Là gì? SQL — ngôn ngữ truy vấn CSDL quan hệ.
• Dùng để làm gì? DDL/DML/DCL.
• Vì sao sai? «ngôn ngữ SQL ( ngôn ngữ hỏi đáp có cấu trúc / ngôn ng…» (A) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### B
```
• Là gì? cú pháp — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «cú pháp» (B) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### D
```
• Là gì? trực dịch — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «trực dịch» (D) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

**whatIs**
```
{
  "A": "SQL — ngôn ngữ truy vấn CSDL quan hệ.",
  "B": "cú pháp — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "thứ tự tăng dần — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "trực dịch — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Chọn định nghĩa/nghĩa phù hợp nhất với thuật ngữ trong đề.
• Thuật ngữ: «thứ tự tăng dần（ ）»
```

**memoryTip**
```
• thứ tự tăng dần（ ） ≈ thứ tự tăng dần
• Ưu tiên định nghĩa chuẩn giáo trình, không dịch word-by-word lệch.
```

---

### 378/400 · `jit` id=588 · task=`slides` · num=578 · ans **A**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
【専門用語】更新（こうしん） の意味として最も適切なものはどれか。
```

**Options**

- **A.** cập nhật ✅
- **B.** chuỗi ký tự
- **C.** cú pháp
- **D.** tên phần tử / yếu tố

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | 【Thuật ngữ】Nghĩa nào phù hợp nhất với thuật ngữ trong đề? |
| optionsVi.A | cập nhật |
| optionsVi.B | chuỗi ký tự |
| optionsVi.C | cú pháp |
| optionsVi.D | tên phần tử / yếu tố |
| answerDisplay | A. cập nhật |

**concept**
```
• « （ ）» → cập nhật
• Nghĩa: cập nhật.
```

**whyCorrect**
```
• Có vai trò riêng; đối chiếu với điều kiện stem.
• Khớp stem: bản dịch thuật ngữ JP↔VI đúng.
```

**whyWrong**

##### B
```
• Là gì? chuỗi ký tự — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «chuỗi ký tự» (B) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### C
```
• Là gì? cú pháp — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «cú pháp» (C) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### D
```
• Là gì? tên phần tử / yếu tố
• Dùng để làm gì? Phạm trù/khái niệm trong lý thuyết đề cập.
• Vì sao sai? «tên phần tử / yếu tố» (D) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

**whatIs**
```
{
  "A": "cập nhật — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "chuỗi ký tự — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "cú pháp — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "tên phần tử / yếu tố"
}
```

**intent**
```
• Chọn định nghĩa/nghĩa phù hợp nhất với thuật ngữ trong đề.
• Thuật ngữ: « （ ）»
```

**memoryTip**
```
• （ ） ≈ cập nhật
• Ưu tiên định nghĩa chuẩn giáo trình, không dịch word-by-word lệch.
```

---

### 379/400 · `jit` id=589 · task=`slides` · num=579 · ans **A**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
【専門用語】削除（さくじょ） の意味として最も適切なものはどれか。
```

**Options**

- **A.** xóa ✅
- **B.** chuỗi ký tự
- **C.** chữ cái đầu
- **D.** chèn vào

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | 【Thuật ngữ】Nghĩa nào phù hợp nhất với «xóa»? |
| optionsVi.A | xóa |
| optionsVi.B | chuỗi ký tự |
| optionsVi.C | chữ cái đầu |
| optionsVi.D | chèn vào |
| answerDisplay | A. xóa |

**concept**
```
• «xóa（ ）» → xóa
• Nghĩa: xóa.
```

**whyCorrect**
```
• Có vai trò riêng; đối chiếu với điều kiện stem.
• Khớp stem: bản dịch thuật ngữ JP↔VI đúng.
```

**whyWrong**

##### B
```
• Là gì? chuỗi ký tự — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «chuỗi ký tự» (B) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### C
```
• Là gì? chữ cái đầu — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «chữ cái đầu» (C) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### D
```
• Là gì? chèn vào — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «chèn vào» (D) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

**whatIs**
```
{
  "A": "xóa — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "chuỗi ký tự — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "chữ cái đầu — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "chèn vào — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Chọn định nghĩa/nghĩa phù hợp nhất với thuật ngữ trong đề.
• Thuật ngữ: «xóa（ ）»
```

**memoryTip**
```
• xóa（ ） ≈ xóa
• Ưu tiên định nghĩa chuẩn giáo trình, không dịch word-by-word lệch.
```

---

### 380/400 · `jit` id=590 · task=`slides` · num=580 · ans **A**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
【専門用語】SQL（Structured Query Language） の意味として最も適切なものはどれか。
```

**Options**

- **A.** ngôn ngữ SQL ( ngôn ngữ hỏi đáp có cấu trúc / ngôn ngữ truy vấn có cấu trúc ) ✅
- **B.** điều khiển dữ liệu
- **C.** sắp xếp , phân loại
- **D.** chữ cái đầu

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | 【Thuật ngữ】Nghĩa nào phù hợp nhất với «SQL（Structured Query Language）»? |
| optionsVi.A | ngôn ngữ SQL ( ngôn ngữ hỏi đáp có cấu trúc / ngôn ngữ truy vấn có cấu trúc ) |
| optionsVi.B | điều khiển dữ liệu |
| optionsVi.C | sắp xếp , phân loại |
| optionsVi.D | chữ cái đầu |
| answerDisplay | A. ngôn ngữ SQL ( ngôn ngữ hỏi đáp có cấu trúc / ngôn ngữ truy vấn có cấu trúc ) |

**concept**
```
• «SQL（Structured Query Language）» → ngôn ngữ SQL ( ngôn ngữ hỏi đáp có cấu trúc / ngôn ngữ truy vấn có cấu trúc )
• Phát biểu / đoạn JP đã dịch đủ nghĩa.
```

**whyCorrect**
```
• Nghĩa đúng: ngôn ngữ SQL ( ngôn ngữ hỏi đáp có cấu trúc / ngôn ngữ truy vấn có cấu trúc )
```

**whyWrong**

##### B
```
• Là gì? điều khiển dữ liệu — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «điều khiển dữ liệu» (B) không thỏa: đúng lệnh/khái niệm CSDL.
```

##### C
```
• Là gì? sắp xếp , phân loại — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «sắp xếp , phân loại» (C) không thỏa: đúng lệnh/khái niệm CSDL.
```

##### D
```
• Là gì? chữ cái đầu — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «chữ cái đầu» (D) không thỏa: đúng lệnh/khái niệm CSDL.
```

**whatIs**
```
{
  "A": "SQL — ngôn ngữ truy vấn CSDL quan hệ.",
  "B": "điều khiển dữ liệu — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "sắp xếp , phân loại — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "chữ cái đầu — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Chọn định nghĩa/nghĩa phù hợp nhất với thuật ngữ trong đề.
• Thuật ngữ: «SQL（Structured Query Language）»
```

**memoryTip**
```
• SQL（Structured Query Language） ≈ ngôn ngữ SQL ( ngôn ngữ hỏi đáp có cấu trúc / ngôn ngữ truy vấn có cấu trúc )
• Ưu tiên định nghĩa chuẩn giáo trình, không dịch word-by-word lệch.
```

---

### 381/400 · `jit` id=591 · task=`slides` · num=581 · ans **B**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
【専門用語】要素名（ようそめい） の意味として最も適切なものはどれか。
```

**Options**

- **A.** thứ tự giảm dần
- **B.** tên phần tử / yếu tố ✅
- **C.** cú pháp
- **D.** truy vấn

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | 【Thuật ngữ】Nghĩa nào phù hợp nhất với thuật ngữ trong đề? |
| optionsVi.A | thứ tự giảm dần |
| optionsVi.B | tên phần tử / yếu tố |
| optionsVi.C | cú pháp |
| optionsVi.D | truy vấn |
| answerDisplay | B. tên phần tử / yếu tố |

**concept**
```
• « （ ）» → tên phần tử / yếu tố
• Nghĩa: tên phần tử / yếu tố.
```

**whyCorrect**
```
• Phạm trù/khái niệm trong lý thuyết đề cập.
• Khớp stem: bản dịch thuật ngữ JP↔VI đúng.
```

**whyWrong**

##### A
```
• Là gì? thứ tự giảm dần — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «thứ tự giảm dần» (A) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### C
```
• Là gì? cú pháp — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «cú pháp» (C) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### D
```
• Là gì? truy vấn — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «truy vấn» (D) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

**whatIs**
```
{
  "A": "thứ tự giảm dần — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "tên phần tử / yếu tố",
  "C": "cú pháp — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "truy vấn — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Chọn định nghĩa/nghĩa phù hợp nhất với thuật ngữ trong đề.
• Thuật ngữ: « （ ）»
```

**memoryTip**
```
• （ ） ≈ tên phần tử / yếu tố
• Ưu tiên định nghĩa chuẩn giáo trình, không dịch word-by-word lệch.
```

---

### 382/400 · `jit` id=592 · task=`slides` · num=582 · ans **D**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
【専門用語】構文（こうぶん） の意味として最も適切なものはどれか。
```

**Options**

- **A.** thứ tự giảm dần
- **B.** điều khiển dữ liệu
- **C.** xóa
- **D.** cú pháp ✅

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | 【Thuật ngữ】Nghĩa nào phù hợp nhất với thuật ngữ trong đề? |
| optionsVi.A | thứ tự giảm dần |
| optionsVi.B | điều khiển dữ liệu |
| optionsVi.C | xóa |
| optionsVi.D | cú pháp |
| answerDisplay | D. cú pháp |

**concept**
```
• « （ ）» → cú pháp
• Nghĩa: cú pháp.
```

**whyCorrect**
```
• Có vai trò riêng; đối chiếu với điều kiện stem.
• Khớp stem: bản dịch thuật ngữ JP↔VI đúng.
```

**whyWrong**

##### A
```
• Là gì? thứ tự giảm dần — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «thứ tự giảm dần» (A) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### B
```
• Là gì? điều khiển dữ liệu — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «điều khiển dữ liệu» (B) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### C
```
• Là gì? xóa — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «xóa» (C) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

**whatIs**
```
{
  "A": "thứ tự giảm dần — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "điều khiển dữ liệu — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "xóa — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "cú pháp — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Chọn định nghĩa/nghĩa phù hợp nhất với thuật ngữ trong đề.
• Thuật ngữ: « （ ）»
```

**memoryTip**
```
• （ ） ≈ cú pháp
• Ưu tiên định nghĩa chuẩn giáo trình, không dịch word-by-word lệch.
```

---

### 383/400 · `jit` id=593 · task=`slides` · num=583 · ans **A**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
【専門用語】ワイルドカード（wildcard） の意味として最も適切なものはどれか。
```

**Options**

- **A.** ký tự đại diện ✅
- **B.** tên phần tử / yếu tố
- **C.** sắp xếp , phân loại
- **D.** xóa

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | 【Thuật ngữ】Nghĩa nào phù hợp nhất với thuật ngữ trong đề? |
| optionsVi.A | ký tự đại diện |
| optionsVi.B | tên phần tử / yếu tố |
| optionsVi.C | sắp xếp , phân loại |
| optionsVi.D | xóa |
| answerDisplay | A. ký tự đại diện |

**concept**
```
• « （wildcard）» → ký tự đại diện
• Nghĩa: ký tự đại diện.
```

**whyCorrect**
```
• Có vai trò riêng; đối chiếu với điều kiện stem.
• Khớp stem: bản dịch thuật ngữ JP↔VI đúng.
```

**whyWrong**

##### B
```
• Là gì? tên phần tử / yếu tố
• Dùng để làm gì? Phạm trù/khái niệm trong lý thuyết đề cập.
• Vì sao sai? «tên phần tử / yếu tố» (B) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### C
```
• Là gì? sắp xếp , phân loại — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «sắp xếp , phân loại» (C) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### D
```
• Là gì? xóa — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «xóa» (D) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

**whatIs**
```
{
  "A": "ký tự đại diện — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "tên phần tử / yếu tố",
  "C": "sắp xếp , phân loại — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "xóa — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Chọn định nghĩa/nghĩa phù hợp nhất với thuật ngữ trong đề.
• Thuật ngữ: « （wildcard）»
```

**memoryTip**
```
• （wildcard） ≈ ký tự đại diện
• Ưu tiên định nghĩa chuẩn giáo trình, không dịch word-by-word lệch.
```

---

### 384/400 · `jit` id=594 · task=`slides` · num=584 · ans **C**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
【専門用語】降順（こうじゅん） の意味として最も適切なものはどれか。
```

**Options**

- **A.** tên phần tử / yếu tố
- **B.** truy vấn
- **C.** thứ tự giảm dần ✅
- **D.** sắp xếp , phân loại

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | 【Thuật ngữ】Nghĩa nào phù hợp nhất với «thứ tự giảm dần»? |
| optionsVi.A | tên phần tử / yếu tố |
| optionsVi.B | truy vấn |
| optionsVi.C | thứ tự giảm dần |
| optionsVi.D | sắp xếp , phân loại |
| answerDisplay | C. thứ tự giảm dần |

**concept**
```
• «thứ tự giảm dần（ ）» → thứ tự giảm dần
• Nghĩa: thứ tự giảm dần.
```

**whyCorrect**
```
• Có vai trò riêng; đối chiếu với điều kiện stem.
• Khớp stem: bản dịch thuật ngữ JP↔VI đúng.
```

**whyWrong**

##### A
```
• Là gì? tên phần tử / yếu tố
• Dùng để làm gì? Phạm trù/khái niệm trong lý thuyết đề cập.
• Vì sao sai? «tên phần tử / yếu tố» (A) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### B
```
• Là gì? truy vấn — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «truy vấn» (B) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### D
```
• Là gì? sắp xếp , phân loại — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «sắp xếp , phân loại» (D) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

**whatIs**
```
{
  "A": "tên phần tử / yếu tố",
  "B": "truy vấn — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "thứ tự giảm dần — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "sắp xếp , phân loại — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Chọn định nghĩa/nghĩa phù hợp nhất với thuật ngữ trong đề.
• Thuật ngữ: «thứ tự giảm dần（ ）»
```

**memoryTip**
```
• thứ tự giảm dần（ ） ≈ thứ tự giảm dần
• Ưu tiên định nghĩa chuẩn giáo trình, không dịch word-by-word lệch.
```

---

### 385/400 · `jit` id=603 · task=`slides` · num=593 · ans **C**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
【専門用語】動作（どうさ） の意味として最も適切なものはどれか。
```

**Options**

- **A.** đa dụng , đa năng
- **B.** động vật có vú
- **C.** hoạt động , động tác ✅
- **D.** kế thừa

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | 【Thuật ngữ】Nghĩa nào phù hợp nhất với thuật ngữ trong đề? |
| optionsVi.A | đa dụng , đa năng |
| optionsVi.B | động vật có vú |
| optionsVi.C | hoạt động , động tác |
| optionsVi.D | kế thừa |
| answerDisplay | C. hoạt động , động tác |

**concept**
```
• « （ ）» → hoạt động, động tác
• Nghĩa: hoạt động, động tác.
```

**whyCorrect**
```
• Phạm trù/khái niệm trong lý thuyết đề cập.
• Khớp stem: bản dịch thuật ngữ JP↔VI đúng.
```

**whyWrong**

##### A
```
• Là gì? đa dụng , đa năng — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «đa dụng , đa năng» (A) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### B
```
• Là gì? động vật có vú — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «động vật có vú» (B) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### D
```
• Là gì? kế thừa — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «kế thừa» (D) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

**whatIs**
```
{
  "A": "đa dụng , đa năng — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "động vật có vú — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "hoạt động , động tác",
  "D": "kế thừa — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Chọn định nghĩa/nghĩa phù hợp nhất với thuật ngữ trong đề.
• Thuật ngữ: « （ ）»
```

**memoryTip**
```
• （ ） ≈ hoạt động, động tác
• Ưu tiên định nghĩa chuẩn giáo trình, không dịch word-by-word lệch.
```

---

### 386/400 · `jit` id=604 · task=`slides` · num=594 · ans **A**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
【専門用語】蓄える（たくわえる） の意味として最も適切なものはどれか。
```

**Options**

- **A.** tích trữ ✅
- **B.** đa dụng , đa năng
- **C.** trình biên dịch
- **D.** tính toán khoa học kỹ thuật

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | 【Thuật ngữ】Nghĩa nào phù hợp nhất với thuật ngữ trong đề? |
| optionsVi.A | tích trữ |
| optionsVi.B | đa dụng , đa năng |
| optionsVi.C | trình biên dịch |
| optionsVi.D | tính toán khoa học kỹ thuật |
| answerDisplay | A. tích trữ |

**concept**
```
• « （ ）» → tích trữ
• Nghĩa: tích trữ.
```

**whyCorrect**
```
• Có vai trò riêng; đối chiếu với điều kiện stem.
• Khớp stem: bản dịch thuật ngữ JP↔VI đúng.
```

**whyWrong**

##### B
```
• Là gì? đa dụng , đa năng — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «đa dụng , đa năng» (B) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### C
```
• Là gì? Compiler — dịch toàn bộ nguồn → mã đích trước khi chạy.
• Dùng để làm gì? Phát hiện lỗi sớm, tối ưu.
• Vì sao sai? «trình biên dịch» (C) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### D
```
• Là gì? tính toán khoa học kỹ thuật
• Dùng để làm gì? Phạm trù/khái niệm trong lý thuyết đề cập.
• Vì sao sai? «tính toán khoa học kỹ thuật» (D) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

**whatIs**
```
{
  "A": "tích trữ — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "đa dụng , đa năng — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Compiler — dịch toàn bộ nguồn → mã đích trước khi chạy.",
  "D": "tính toán khoa học kỹ thuật"
}
```

**intent**
```
• Chọn định nghĩa/nghĩa phù hợp nhất với thuật ngữ trong đề.
• Thuật ngữ: « （ ）»
```

**memoryTip**
```
• （ ） ≈ tích trữ
• Ưu tiên định nghĩa chuẩn giáo trình, không dịch word-by-word lệch.
```

---

### 387/400 · `jit` id=605 · task=`slides` · num=595 · ans **A**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
【専門用語】低級言語（ていきゅうげんご） の意味として最も適切なものはどれか。
```

**Options**

- **A.** ngôn ngữ bậc thấp ✅
- **B.** thuộc vào loại , thuộc vào nhóm
- **C.** tích trữ
- **D.** chỉ số dưới

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | 【Thuật ngữ】Nghĩa nào phù hợp nhất với thuật ngữ trong đề? |
| optionsVi.A | ngôn ngữ bậc thấp |
| optionsVi.B | thuộc vào loại , thuộc vào nhóm |
| optionsVi.C | tích trữ |
| optionsVi.D | chỉ số dưới |
| answerDisplay | A. ngôn ngữ bậc thấp |

**concept**
```
• « （ ）» → ngôn ngữ bậc thấp
• Nghĩa: ngôn ngữ bậc thấp.
```

**whyCorrect**
```
• Có vai trò riêng; đối chiếu với điều kiện stem.
• Khớp stem: bản dịch thuật ngữ JP↔VI đúng.
```

**whyWrong**

##### B
```
• Là gì? thuộc vào loại , thuộc vào nhóm
• Dùng để làm gì? Phạm trù/khái niệm trong lý thuyết đề cập.
• Vì sao sai? «thuộc vào loại , thuộc vào nhóm» (B) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### C
```
• Là gì? tích trữ — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «tích trữ» (C) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### D
```
• Là gì? chỉ số dưới — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «chỉ số dưới» (D) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

**whatIs**
```
{
  "A": "ngôn ngữ bậc thấp — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "thuộc vào loại , thuộc vào nhóm",
  "C": "tích trữ — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "chỉ số dưới — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Chọn định nghĩa/nghĩa phù hợp nhất với thuật ngữ trong đề.
• Thuật ngữ: « （ ）»
```

**memoryTip**
```
• （ ） ≈ ngôn ngữ bậc thấp
• Ưu tiên định nghĩa chuẩn giáo trình, không dịch word-by-word lệch.
```

---

### 388/400 · `jit` id=606 · task=`slides` · num=596 · ans **B**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
【専門用語】定型的（ていけいてき） の意味として最も適切なものはどれか。
```

**Options**

- **A.** ngôn ngữ Java
- **B.** dạng cố định ✅
- **C.** chỉ số dưới
- **D.** ngôn ngữ máy tính

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | 【Thuật ngữ】Nghĩa nào phù hợp nhất với thuật ngữ trong đề? |
| optionsVi.A | ngôn ngữ Java |
| optionsVi.B | dạng cố định |
| optionsVi.C | chỉ số dưới |
| optionsVi.D | ngôn ngữ máy tính |
| answerDisplay | B. dạng cố định |

**concept**
```
• « （ ）» → dạng cố định
• Nghĩa: dạng cố định.
```

**whyCorrect**
```
• Có vai trò riêng; đối chiếu với điều kiện stem.
• Khớp stem: bản dịch thuật ngữ JP↔VI đúng.
```

**whyWrong**

##### A
```
• Là gì? ngôn ngữ Java — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «ngôn ngữ Java» (A) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### C
```
• Là gì? chỉ số dưới — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «chỉ số dưới» (C) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### D
```
• Là gì? ngôn ngữ máy tính — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «ngôn ngữ máy tính» (D) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

**whatIs**
```
{
  "A": "ngôn ngữ Java — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "dạng cố định — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "chỉ số dưới — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "ngôn ngữ máy tính — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Chọn định nghĩa/nghĩa phù hợp nhất với thuật ngữ trong đề.
• Thuật ngữ: « （ ）»
```

**memoryTip**
```
• （ ） ≈ dạng cố định
• Ưu tiên định nghĩa chuẩn giáo trình, không dịch word-by-word lệch.
```

---

### 389/400 · `jit` id=607 · task=`slides` · num=597 · ans **A**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
【専門用語】四則演算（しそくえんざん） の意味として最も適切なものはどれか。
```

**Options**

- **A.** bốn phép toán số học cơ bản ( cộng , trừ , nhân , chia) ✅
- **B.** xử lý văn phòng
- **C.** thuộc vào loại , thuộc vào nhóm
- **D.** ngôn ngữ Javascript

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | 【Thuật ngữ】Nghĩa nào phù hợp nhất với thuật ngữ trong đề? |
| optionsVi.A | bốn phép toán số học cơ bản ( cộng , trừ , nhân , chia) |
| optionsVi.B | xử lý văn phòng |
| optionsVi.C | thuộc vào loại , thuộc vào nhóm |
| optionsVi.D | ngôn ngữ Javascript |
| answerDisplay | A. bốn phép toán số học cơ bản ( cộng , trừ , nhân , chia) |

**concept**
```
• « （ ）» → bốn phép toán số học cơ bản ( cộng, trừ, nhân, chia)
• Phát biểu / đoạn JP đã dịch đủ nghĩa.
```

**whyCorrect**
```
• Nghĩa đúng: bốn phép toán số học cơ bản ( cộng , trừ , nhân , chia)
```

**whyWrong**

##### B
```
• Là gì? xử lý văn phòng — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «xử lý văn phòng» (B) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### C
```
• Là gì? thuộc vào loại , thuộc vào nhóm
• Dùng để làm gì? Phạm trù/khái niệm trong lý thuyết đề cập.
• Vì sao sai? «thuộc vào loại , thuộc vào nhóm» (C) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### D
```
• Là gì? ngôn ngữ Javascript — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «ngôn ngữ Javascript» (D) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

**whatIs**
```
{
  "A": "bốn phép toán số học cơ bản ( cộng , trừ , nhân , chia)",
  "B": "xử lý văn phòng — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "thuộc vào loại , thuộc vào nhóm",
  "D": "ngôn ngữ Javascript — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Chọn định nghĩa/nghĩa phù hợp nhất với thuật ngữ trong đề.
• Thuật ngữ: « （ ）»
```

**memoryTip**
```
• （ ） ≈ bốn phép toán số học cơ bản ( cộng, trừ, nhân, chia)
• Ưu tiên định nghĩa chuẩn giáo trình, không dịch word-by-word lệch.
```

---

### 390/400 · `jit` id=608 · task=`slides` · num=598 · ans **B**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
【専門用語】コンパイラ（compiler） の意味として最も適切なものはどれか。
```

**Options**

- **A.** ngôn ngữ Javascript
- **B.** trình biên dịch ✅
- **C.** gán
- **D.** ngôn ngữ thủ tục

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | 【Thuật ngữ】Nghĩa nào phù hợp nhất với thuật ngữ trong đề? |
| optionsVi.A | ngôn ngữ Javascript |
| optionsVi.B | trình biên dịch |
| optionsVi.C | gán |
| optionsVi.D | ngôn ngữ thủ tục |
| answerDisplay | B. trình biên dịch |

**concept**
```
• « （compiler）» → trình biên dịch
• Nghĩa: trình biên dịch.
```

**whyCorrect**
```
• Phát hiện lỗi sớm, tối ưu.
• Khớp stem: cơ chế dịch/chạy mã.
```

**whyWrong**

##### A
```
• Là gì? ngôn ngữ Javascript — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «ngôn ngữ Javascript» (A) không thỏa: cơ chế dịch/chạy mã.
```

##### C
```
• Là gì? gán — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «gán» (C) không thỏa: cơ chế dịch/chạy mã.
```

##### D
```
• Là gì? ngôn ngữ thủ tục — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «ngôn ngữ thủ tục» (D) không thỏa: cơ chế dịch/chạy mã.
```

**whatIs**
```
{
  "A": "ngôn ngữ Javascript — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Compiler — dịch toàn bộ nguồn → mã đích trước khi chạy.",
  "C": "gán — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "ngôn ngữ thủ tục — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Chọn định nghĩa/nghĩa phù hợp nhất với thuật ngữ trong đề.
• Thuật ngữ: « （compiler）»
```

**memoryTip**
```
• （compiler） ≈ trình biên dịch
• Ưu tiên định nghĩa chuẩn giáo trình, không dịch word-by-word lệch.
```

---

### 391/400 · `jit` id=609 · task=`slides` · num=599 · ans **A**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
【専門用語】添え字（そえじ） の意味として最も適切なものはどれか。
```

**Options**

- **A.** chỉ số dưới ✅
- **B.** thuộc vào loại , thuộc vào nhóm
- **C.** ngôn ngữ C++
- **D.** một cách tuần tự

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | 【Thuật ngữ】Nghĩa nào phù hợp nhất với thuật ngữ trong đề? |
| optionsVi.A | chỉ số dưới |
| optionsVi.B | thuộc vào loại , thuộc vào nhóm |
| optionsVi.C | ngôn ngữ C++ |
| optionsVi.D | một cách tuần tự |
| answerDisplay | A. chỉ số dưới |

**concept**
```
• « （ ）» → chỉ số dưới
• Nghĩa: chỉ số dưới.
```

**whyCorrect**
```
• Có vai trò riêng; đối chiếu với điều kiện stem.
• Khớp stem: bản dịch thuật ngữ JP↔VI đúng.
```

**whyWrong**

##### B
```
• Là gì? thuộc vào loại , thuộc vào nhóm
• Dùng để làm gì? Phạm trù/khái niệm trong lý thuyết đề cập.
• Vì sao sai? «thuộc vào loại , thuộc vào nhóm» (B) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### C
```
• Là gì? ngôn ngữ C++ — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «ngôn ngữ C++» (C) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### D
```
• Là gì? một cách tuần tự — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «một cách tuần tự» (D) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

**whatIs**
```
{
  "A": "chỉ số dưới — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "thuộc vào loại , thuộc vào nhóm",
  "C": "ngôn ngữ C++ — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "một cách tuần tự — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Chọn định nghĩa/nghĩa phù hợp nhất với thuật ngữ trong đề.
• Thuật ngữ: « （ ）»
```

**memoryTip**
```
• （ ） ≈ chỉ số dưới
• Ưu tiên định nghĩa chuẩn giáo trình, không dịch word-by-word lệch.
```

---

### 392/400 · `jit` id=610 · task=`slides` · num=600 · ans **A**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
【専門用語】XML 言語（XML げんご） の意味として最も適切なものはどれか。
```

**Options**

- **A.** ngôn ngữ XML ✅
- **B.** ngôn ngữ Javascript
- **C.** dạng cố định
- **D.** kế thừa

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | 【Thuật ngữ】Nghĩa nào phù hợp nhất với thuật ngữ trong đề? |
| optionsVi.A | ngôn ngữ XML |
| optionsVi.B | ngôn ngữ Javascript |
| optionsVi.C | dạng cố định |
| optionsVi.D | kế thừa |
| answerDisplay | A. ngôn ngữ XML |

**concept**
```
• «XML （XML ）» → ngôn ngữ XML
• Nghĩa: ngôn ngữ XML.
```

**whyCorrect**
```
• Có vai trò riêng; đối chiếu với điều kiện stem.
• Khớp stem: bản dịch thuật ngữ JP↔VI đúng.
```

**whyWrong**

##### B
```
• Là gì? ngôn ngữ Javascript — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «ngôn ngữ Javascript» (B) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### C
```
• Là gì? dạng cố định — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «dạng cố định» (C) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### D
```
• Là gì? kế thừa — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «kế thừa» (D) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

**whatIs**
```
{
  "A": "ngôn ngữ XML — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "ngôn ngữ Javascript — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "dạng cố định — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "kế thừa — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Chọn định nghĩa/nghĩa phù hợp nhất với thuật ngữ trong đề.
• Thuật ngữ: «XML （XML ）»
```

**memoryTip**
```
• XML （XML ） ≈ ngôn ngữ XML
• Ưu tiên định nghĩa chuẩn giáo trình, không dịch word-by-word lệch.
```

---

### 393/400 · `jit` id=618 · task=`slides` · num=608 · ans **B**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
【専門用語】頻繁（ひんぱん） の意味として最も適切なものはどれか。
```

**Options**

- **A.** sắp xếp chèn cải tiến
- **B.** thường xuyên , tấp nập ✅
- **C.** sắp xếp kiểu chèn
- **D.** thiết bị cảm ứng khứu giác

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | 【Thuật ngữ】Nghĩa nào phù hợp nhất với thuật ngữ trong đề? |
| optionsVi.A | sắp xếp chèn cải tiến |
| optionsVi.B | thường xuyên , tấp nập |
| optionsVi.C | sắp xếp kiểu chèn |
| optionsVi.D | thiết bị cảm ứng khứu giác |
| answerDisplay | B. thường xuyên , tấp nập |

**concept**
```
• « （ ）» → thường xuyên, tấp nập
• Nghĩa: thường xuyên, tấp nập.
```

**whyCorrect**
```
• Phạm trù/khái niệm trong lý thuyết đề cập.
• Khớp stem: bản dịch thuật ngữ JP↔VI đúng.
```

**whyWrong**

##### A
```
• Là gì? sắp xếp chèn cải tiến
• Dùng để làm gì? Phạm trù/khái niệm trong lý thuyết đề cập.
• Vì sao sai? «sắp xếp chèn cải tiến» (A) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### C
```
• Là gì? sắp xếp kiểu chèn — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «sắp xếp kiểu chèn» (C) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### D
```
• Là gì? thiết bị cảm ứng khứu giác
• Dùng để làm gì? Phạm trù/khái niệm trong lý thuyết đề cập.
• Vì sao sai? «thiết bị cảm ứng khứu giác» (D) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

**whatIs**
```
{
  "A": "sắp xếp chèn cải tiến",
  "B": "thường xuyên , tấp nập",
  "C": "sắp xếp kiểu chèn — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "thiết bị cảm ứng khứu giác"
}
```

**intent**
```
• Chọn định nghĩa/nghĩa phù hợp nhất với thuật ngữ trong đề.
• Thuật ngữ: « （ ）»
```

**memoryTip**
```
• （ ） ≈ thường xuyên, tấp nập
• Ưu tiên định nghĩa chuẩn giáo trình, không dịch word-by-word lệch.
```

---

### 394/400 · `jit` id=619 · task=`slides` · num=609 · ans **B**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
【専門用語】エラー対策（error たいさく） の意味として最も適切なものはどれか。
```

**Options**

- **A.** sắp xếp nhanh
- **B.** biện pháp xử lý lỗi ✅
- **C.** sự tạo nguyên mẫu
- **D.** thường xuyên , tấp nập

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | 【Thuật ngữ】Nghĩa nào phù hợp nhất với thuật ngữ trong đề? |
| optionsVi.A | sắp xếp nhanh |
| optionsVi.B | biện pháp xử lý lỗi |
| optionsVi.C | sự tạo nguyên mẫu |
| optionsVi.D | thường xuyên , tấp nập |
| answerDisplay | B. biện pháp xử lý lỗi |

**concept**
```
• « （error ）» → biện pháp xử lý lỗi
• Nghĩa: biện pháp xử lý lỗi.
```

**whyCorrect**
```
• Có vai trò riêng; đối chiếu với điều kiện stem.
• Khớp stem: bản dịch thuật ngữ JP↔VI đúng.
```

**whyWrong**

##### A
```
• Là gì? sắp xếp nhanh — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «sắp xếp nhanh» (A) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### C
```
• Là gì? sự tạo nguyên mẫu — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «sự tạo nguyên mẫu» (C) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### D
```
• Là gì? thường xuyên , tấp nập
• Dùng để làm gì? Phạm trù/khái niệm trong lý thuyết đề cập.
• Vì sao sai? «thường xuyên , tấp nập» (D) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

**whatIs**
```
{
  "A": "sắp xếp nhanh — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "biện pháp xử lý lỗi — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "sự tạo nguyên mẫu — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "thường xuyên , tấp nập"
}
```

**intent**
```
• Chọn định nghĩa/nghĩa phù hợp nhất với thuật ngữ trong đề.
• Thuật ngữ: « （error ）»
```

**memoryTip**
```
• （error ） ≈ biện pháp xử lý lỗi
• Ưu tiên định nghĩa chuẩn giáo trình, không dịch word-by-word lệch.
```

---

### 395/400 · `jit` id=620 · task=`slides` · num=610 · ans **B**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
【専門用語】書き下す（かきくだす） の意味として最も適切なものはどれか。
```

**Options**

- **A.** màn hình sử dụng trong không gian ảo
- **B.** viết từ trên xuống ✅
- **C.** vòng lặp
- **D.** Ben Shneiderman

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | 【Thuật ngữ】Nghĩa nào phù hợp nhất với thuật ngữ trong đề? |
| optionsVi.A | màn hình sử dụng trong không gian ảo |
| optionsVi.B | viết từ trên xuống |
| optionsVi.C | vòng lặp |
| optionsVi.D | Ben Shneiderman |
| answerDisplay | B. viết từ trên xuống |

**concept**
```
• « （ ）» → viết từ trên xuống
• Nghĩa: viết từ trên xuống.
```

**whyCorrect**
```
• Có vai trò riêng; đối chiếu với điều kiện stem.
• Khớp stem: bản dịch thuật ngữ JP↔VI đúng.
```

**whyWrong**

##### A
```
• Là gì? màn hình sử dụng trong không gian ảo
• Dùng để làm gì? Phạm trù/khái niệm trong lý thuyết đề cập.
• Vì sao sai? «màn hình sử dụng trong không gian ảo» (A) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### C
```
• Là gì? vòng lặp — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «vòng lặp» (C) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### D
```
• Là gì? Tín hiệu tương tự liên tục (dòng/áp…).
• Dùng để làm gì? Analog continuous signal.
• Vì sao sai? «Ben Shneiderman» (D) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

**whatIs**
```
{
  "A": "màn hình sử dụng trong không gian ảo",
  "B": "viết từ trên xuống — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "vòng lặp — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Tín hiệu tương tự liên tục (dòng/áp…)."
}
```

**intent**
```
• Chọn định nghĩa/nghĩa phù hợp nhất với thuật ngữ trong đề.
• Thuật ngữ: « （ ）»
```

**memoryTip**
```
• （ ） ≈ viết từ trên xuống
• Ưu tiên định nghĩa chuẩn giáo trình, không dịch word-by-word lệch.
```

---

### 396/400 · `jit` id=621 · task=`slides` · num=611 · ans **B**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
【専門用語】試行錯誤（しこうさくご） の意味として最も適切なものはどれか。
```

**Options**

- **A.** sắp xếp nổi bọt
- **B.** lỗi phát hiện khi thử ✅
- **C.** đa màn hình
- **D.** sự tạo nguyên mẫu

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | 【Thuật ngữ】Nghĩa nào phù hợp nhất với thuật ngữ trong đề? |
| optionsVi.A | sắp xếp nổi bọt |
| optionsVi.B | lỗi phát hiện khi thử |
| optionsVi.C | đa màn hình |
| optionsVi.D | sự tạo nguyên mẫu |
| answerDisplay | B. lỗi phát hiện khi thử |

**concept**
```
• « （ ）» → lỗi phát hiện khi thử
• Nghĩa: lỗi phát hiện khi thử.
```

**whyCorrect**
```
• Phạm trù/khái niệm trong lý thuyết đề cập.
• Khớp stem: bản dịch thuật ngữ JP↔VI đúng.
```

**whyWrong**

##### A
```
• Là gì? sắp xếp nổi bọt — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «sắp xếp nổi bọt» (A) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### C
```
• Là gì? đa màn hình — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «đa màn hình» (C) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### D
```
• Là gì? sự tạo nguyên mẫu — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «sự tạo nguyên mẫu» (D) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

**whatIs**
```
{
  "A": "sắp xếp nổi bọt — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "lỗi phát hiện khi thử",
  "C": "đa màn hình — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "sự tạo nguyên mẫu — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Chọn định nghĩa/nghĩa phù hợp nhất với thuật ngữ trong đề.
• Thuật ngữ: « （ ）»
```

**memoryTip**
```
• （ ） ≈ lỗi phát hiện khi thử
• Ưu tiên định nghĩa chuẩn giáo trình, không dịch word-by-word lệch.
```

---

### 397/400 · `jit` id=622 · task=`slides` · num=612 · ans **A**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
【専門用語】フローチャート（flowchart） の意味として最も適切なものはどれか。
```

**Options**

- **A.** lưu đồ , sơ đồ chu trình ✅
- **B.** vòng lặp
- **C.** điệu bộ , cử chỉ
- **D.** sự tạo nguyên mẫu

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | 【Thuật ngữ】Nghĩa nào phù hợp nhất với «lưu đồ (flowchart)»? |
| optionsVi.A | lưu đồ , sơ đồ chu trình |
| optionsVi.B | vòng lặp |
| optionsVi.C | điệu bộ , cử chỉ |
| optionsVi.D | sự tạo nguyên mẫu |
| answerDisplay | A. lưu đồ , sơ đồ chu trình |

**concept**
```
• «lưu đồ (flowchart)（flowchart）» → lưu đồ , sơ đồ chu trình
• Nghĩa: lưu đồ , sơ đồ chu trình.
```

**whyCorrect**
```
• Phạm trù/khái niệm trong lý thuyết đề cập.
• Khớp stem: bản dịch thuật ngữ JP↔VI đúng.
```

**whyWrong**

##### B
```
• Là gì? vòng lặp — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «vòng lặp» (B) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### C
```
• Là gì? điệu bộ , cử chỉ — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «điệu bộ , cử chỉ» (C) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### D
```
• Là gì? sự tạo nguyên mẫu — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «sự tạo nguyên mẫu» (D) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

**whatIs**
```
{
  "A": "lưu đồ , sơ đồ chu trình",
  "B": "vòng lặp — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "điệu bộ , cử chỉ — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "sự tạo nguyên mẫu — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Chọn định nghĩa/nghĩa phù hợp nhất với thuật ngữ trong đề.
• Thuật ngữ: «lưu đồ (flowchart)（flowchart）»
```

**memoryTip**
```
• lưu đồ (flowchart)（flowchart） ≈ lưu đồ , sơ đồ chu trình
• Ưu tiên định nghĩa chuẩn giáo trình, không dịch word-by-word lệch.
```

---

### 398/400 · `jit` id=623 · task=`slides` · num=613 · ans **C**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
【専門用語】投入（とうにゅう） の意味として最も適切なものはどれか。
```

**Options**

- **A.** sắp xếp kiểu chèn
- **B.** sự tạo nguyên mẫu
- **C.** đầu tư ✅
- **D.** thiết bị cảm ứng xúc giác

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | 【Thuật ngữ】Nghĩa nào phù hợp nhất với thuật ngữ trong đề? |
| optionsVi.A | sắp xếp kiểu chèn |
| optionsVi.B | sự tạo nguyên mẫu |
| optionsVi.C | đầu tư |
| optionsVi.D | thiết bị cảm ứng xúc giác |
| answerDisplay | C. đầu tư |

**concept**
```
• « （ ）» → đầu tư
• Nghĩa: đầu tư.
```

**whyCorrect**
```
• Có vai trò riêng; đối chiếu với điều kiện stem.
• Khớp stem: bản dịch thuật ngữ JP↔VI đúng.
```

**whyWrong**

##### A
```
• Là gì? sắp xếp kiểu chèn — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «sắp xếp kiểu chèn» (A) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### B
```
• Là gì? sự tạo nguyên mẫu — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «sự tạo nguyên mẫu» (B) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### D
```
• Là gì? thiết bị cảm ứng xúc giác
• Dùng để làm gì? Phạm trù/khái niệm trong lý thuyết đề cập.
• Vì sao sai? «thiết bị cảm ứng xúc giác» (D) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

**whatIs**
```
{
  "A": "sắp xếp kiểu chèn — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "sự tạo nguyên mẫu — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "đầu tư — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "thiết bị cảm ứng xúc giác"
}
```

**intent**
```
• Chọn định nghĩa/nghĩa phù hợp nhất với thuật ngữ trong đề.
• Thuật ngữ: « （ ）»
```

**memoryTip**
```
• （ ） ≈ đầu tư
• Ưu tiên định nghĩa chuẩn giáo trình, không dịch word-by-word lệch.
```

---

### 399/400 · `jit` id=624 · task=`slides` · num=614 · ans **A**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
【専門用語】身振り（みぶり） の意味として最も適切なものはどれか。
```

**Options**

- **A.** điệu bộ , cử chỉ ✅
- **B.** thường xuyên , tấp nập
- **C.** sắp xếp nổi bọt
- **D.** tùy chỉnh

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | 【Thuật ngữ】Nghĩa nào phù hợp nhất với thuật ngữ trong đề? |
| optionsVi.A | điệu bộ , cử chỉ |
| optionsVi.B | thường xuyên , tấp nập |
| optionsVi.C | sắp xếp nổi bọt |
| optionsVi.D | tùy chỉnh |
| answerDisplay | A. điệu bộ , cử chỉ |

**concept**
```
• « （ ）» → điệu bộ, cử chỉ
• Nghĩa: điệu bộ, cử chỉ.
```

**whyCorrect**
```
• Có vai trò riêng; đối chiếu với điều kiện stem.
• Khớp stem: bản dịch thuật ngữ JP↔VI đúng.
```

**whyWrong**

##### B
```
• Là gì? thường xuyên , tấp nập
• Dùng để làm gì? Phạm trù/khái niệm trong lý thuyết đề cập.
• Vì sao sai? «thường xuyên , tấp nập» (B) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### C
```
• Là gì? sắp xếp nổi bọt — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «sắp xếp nổi bọt» (C) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### D
```
• Là gì? tùy chỉnh — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «tùy chỉnh» (D) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

**whatIs**
```
{
  "A": "điệu bộ , cử chỉ — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "thường xuyên , tấp nập",
  "C": "sắp xếp nổi bọt — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "tùy chỉnh — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Chọn định nghĩa/nghĩa phù hợp nhất với thuật ngữ trong đề.
• Thuật ngữ: « （ ）»
```

**memoryTip**
```
• （ ） ≈ điệu bộ, cử chỉ
• Ưu tiên định nghĩa chuẩn giáo trình, không dịch word-by-word lệch.
```

---

### 400/400 · `jit` id=625 · task=`slides` · num=615 · ans **D**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
【専門用語】バブルソート（bubble sort） の意味として最も適切なものはどれか。
```

**Options**

- **A.** tiền bạc
- **B.** màn hình sử dụng trong không gian ảo
- **C.** lỗi phát hiện khi thử
- **D.** sắp xếp nổi bọt ✅

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | 【Thuật ngữ】Nghĩa nào phù hợp nhất với «bubble sort»? |
| optionsVi.A | tiền bạc |
| optionsVi.B | màn hình sử dụng trong không gian ảo |
| optionsVi.C | lỗi phát hiện khi thử |
| optionsVi.D | sắp xếp nổi bọt |
| answerDisplay | D. sắp xếp nổi bọt |

**concept**
```
• «bubble sort（bubble sort）» → sắp xếp nổi bọt
• Nghĩa: sắp xếp nổi bọt.
```

**whyCorrect**
```
• Có vai trò riêng; đối chiếu với điều kiện stem.
• Khớp stem: bản dịch thuật ngữ JP↔VI đúng.
```

**whyWrong**

##### A
```
• Là gì? tiền bạc — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «tiền bạc» (A) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### B
```
• Là gì? màn hình sử dụng trong không gian ảo
• Dùng để làm gì? Phạm trù/khái niệm trong lý thuyết đề cập.
• Vì sao sai? «màn hình sử dụng trong không gian ảo» (B) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

##### C
```
• Là gì? lỗi phát hiện khi thử
• Dùng để làm gì? Phạm trù/khái niệm trong lý thuyết đề cập.
• Vì sao sai? «lỗi phát hiện khi thử» (C) không thỏa: bản dịch thuật ngữ JP↔VI đúng.
```

**whatIs**
```
{
  "A": "tiền bạc — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "màn hình sử dụng trong không gian ảo",
  "C": "lỗi phát hiện khi thử",
  "D": "sắp xếp nổi bọt — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Chọn định nghĩa/nghĩa phù hợp nhất với thuật ngữ trong đề.
• Thuật ngữ: «bubble sort（bubble sort）»
```

**memoryTip**
```
• bubble sort（bubble sort） ≈ sắp xếp nổi bọt
• Ưu tiên định nghĩa chuẩn giáo trình, không dịch word-by-word lệch.
```

---
