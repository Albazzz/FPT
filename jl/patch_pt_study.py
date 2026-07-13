# -*- coding: utf-8 -*-
"""Fix quiz-check HTML, insert PT study supplement block."""
from pathlib import Path
import re

html_path = Path("index.html")
html = html_path.read_text(encoding="utf-8")

# Fix broken nested section open tags
html = re.sub(
    r'<section class="quiz-check-box(?:<section class="quiz-check-box)+',
    '<section class="quiz-check-box',
    html,
)

# Remove old PT supplement if re-run
html = re.sub(
    r'\s*<article class="section-block lvl-0" id="ch-pt-extra">[\s\S]*?</article>\s*(?=<section class="quiz-check-box)',
    "\n\n        ",
    html,
    count=1,
)

supplement = r'''
    <article class="section-block lvl-0" id="ch-pt-extra">
      <h2><span class="jp">Quiz PT 追加ポイント</span></h2>
      <p class="sec-meta">Bổ sung kiến thức để pass Quiz PT (theo quiz.txt mới)</p>
    </article>

    <article class="section-block" id="ch-pt-extra-s1">
      <h2 class="jp">用語・読み・ベトナム語（PT）</h2>
      <p class="sec-meta">Thuật ngữ hay ra trong Quiz PT</p>
      <div class="detail-block jp-block">
        <div class="detail-label">① 日本語・要点</div>
        <p class="jp detail-p">素因数（そいんすう）／素数（そすう）。サイマル放送＝同一内容を同時に複数方式で放送。マス目＝チューリングマシンのテープ上のマス。マイクロプロセッサ＝MPU＝CPUのハードウェア呼称。踏み台（ふみだい）＝他システム攻撃の足場。通信制御（つうしんせいぎょ）。周波数帯（しゅうはすうたい）。帯域幅（たいいきはば）。単結晶（たんけっしょう）。正弦波（せいげんは）。小文字（こもじ）。変調＝modulation。CRC＝Cyclic Redundancy Check。LSI＝大規模集積回路。PLC＝電灯線通信。EDI＝Electronic Data Interchange。DoS＝サービス拒否攻撃。</p>
      </div>
      <div class="detail-block vi-block">
        <div class="detail-label">② Tiếng Việt</div>
        <p class="detail-p">素因数 (soinsuu) / 素数 (sosuu). サイマル放送 = phát sóng cùng lúc cùng nội dung (one-seg). マス目 = ô trên băng Turing. Microprocessor = MPU. 踏み台 = bàn đạp tấn công. 通信制御 = điều khiển thông tin. 周波数帯 = dải tần. 帯域幅 = băng thông. 単結晶 = đơn kết tinh. 正弦波 = sóng sin. 小文字 = chữ thường. Modulation, CRC, LSI, PLC, EDI, DoS như bảng dưới.</p>
      </div>
      <span class="tbl-label jp">③ 要点（日本語）</span>
      <table class="sum"><thead><tr><th>用語</th><th>読み / 意味</th></tr></thead><tbody>
        <tr><td>サイマル放送</td><td class="jp-cell">同一番組を同時放送（ワンセグの基本）</td></tr>
        <tr><td>踏み台</td><td class="jp-cell">ふみだい。侵入後に他組織攻撃の足場</td></tr>
        <tr><td>単結晶</td><td class="jp-cell">たんけっしょう。LSI基板のシリコンなど</td></tr>
        <tr><td>流通過程</td><td class="jp-cell">quá trình lưu thông（商品・バリューの流れ）</td></tr>
        <tr><td>周波数帯 / 帯域幅</td><td class="jp-cell">しゅうはすうたい / たいいきはば（bandwidth）</td></tr>
        <tr><td>LSI</td><td class="jp-cell">大規模集積回路</td></tr>
        <tr><td>PLC</td><td class="jp-cell">電灯線でデータ通信</td></tr>
        <tr><td>DoS</td><td class="jp-cell">大量アクセスで使用不能にする攻撃</td></tr>
      </tbody></table>
      <span class="tbl-label vi">④ Ý chính (VI)</span>
      <table class="sum vi"><thead><tr><th>Mục</th><th>Chi tiết</th></tr></thead><tbody>
        <tr><td>Simulcast</td><td>Phát sóng cùng lúc (one-seg)</td></tr>
        <tr><td>Stepping stone</td><td>Máy bị chiếm làm bàn đạp</td></tr>
        <tr><td>Đơn kết tinh</td><td>Silicon wafer LSI</td></tr>
        <tr><td>Lưu thông</td><td>Luồng hàng/value (EC)</td></tr>
        <tr><td>Băng tần</td><td>Dải tần / bandwidth</td></tr>
        <tr><td>LSI/PLC/DoS</td><td>Mạch lớn / điện nhà / từ chối dịch vụ</td></tr>
      </tbody></table>
    </article>

    <article class="section-block" id="ch-pt-extra-s2">
      <h2 class="jp">OSI・暗号・稼働率・クロック（計算）</h2>
      <p class="sec-meta">Các điểm tính toán / định nghĩa hay ra PT</p>
      <div class="detail-block jp-block">
        <div class="detail-label">① 日本語・詳細</div>
        <p class="jp detail-p">OSI 7層: 物理・データリンク（隣接機器間）・ネットワーク・トランスポート・セッション（開始〜終了の手順管理）・プレゼンテーション・アプリケーション。秘密文書: 受信者の公開鍵で暗号化。認証: 送信者の秘密鍵で暗号化し、公開鍵で検証。SSL≠認証の定義そのもの（SSLは暗号通信プロトコル）。稼働率=MTBF/(MTBF+MTTR)。例: 500/(500+10)=0.98=98%。並列A,Bの後にC直列: [1-(1-A)(1-B)]×C。例 A=B=0.9,C=0.95 → [1-0.01]×0.95=0.99×0.95=0.9405≈94.0%。クロック: 1命令時間(秒)=クロック数/周波数。3GHzで6クロック → 6/(3×10⁹)=2×10⁻⁹秒=2.0 ns。</p>
      </div>
      <div class="detail-block vi-block">
        <div class="detail-label">② Tiếng Việt</div>
        <p class="detail-p">OSI 7 tầng: physical, data link (máy kề), network, transport, session (quản lý phiên từ đầu đến cuối), presentation, application. Gửi mật: mã bằng public key người nhận. Xác thực: ký bằng private key người gửi. SSL là giao thức mã hóa, không đồng nghĩa định nghĩa “認証” thuần. Availability = MTBF/(MTBF+MTTR). Song song rồi nối tiếp: [1-(1-A)(1-B)]×C. Thời gian 1 lệnh = số clock / f. 3GHz × 6 clock = 2 ns.</p>
      </div>
      <span class="tbl-label jp">③ 要点</span>
      <table class="sum"><thead><tr><th>項目</th><th>詳細</th></tr></thead><tbody>
        <tr><td>セッション層</td><td class="jp-cell">通信の開始〜終了の手順管理（第5層）</td></tr>
        <tr><td>データリンク層</td><td class="jp-cell">隣接機器間の転送</td></tr>
        <tr><td>秘密通信</td><td class="jp-cell">相手の公開鍵で暗号化</td></tr>
        <tr><td>認証</td><td class="jp-cell">自分の秘密鍵で暗号化→相手は公開鍵で検証</td></tr>
        <tr><td>稼働率</td><td class="jp-cell">MTBF/(MTBF+MTTR)；並列後直列の合成に注意</td></tr>
        <tr><td>命令時間</td><td class="jp-cell">クロック数 ÷ 周波数（GHz→×10⁹）</td></tr>
      </tbody></table>
      <span class="tbl-label vi">④ Ý chính</span>
      <table class="sum vi"><thead><tr><th>Mục</th><th>Chi tiết</th></tr></thead><tbody>
        <tr><td>Session</td><td>Quản lý phiên (tầng 5)</td></tr>
        <tr><td>Data link</td><td>Chuyển giữa máy kề</td></tr>
        <tr><td>Gửi mật / Xác thực</td><td>Public người nhận / Private người gửi</td></tr>
        <tr><td>Availability</td><td>MTBF/(MTBF+MTTR); công thức ghép</td></tr>
        <tr><td>Clock</td><td>t = N_clock / f</td></tr>
      </tbody></table>
    </article>

    <article class="section-block" id="ch-pt-extra-s3">
      <h2 class="jp">ハード・論理・セキュリティ・EC（PT）</h2>
      <p class="sec-meta">Phần cứng, logic, bảo mật, TMĐT</p>
      <div class="detail-block jp-block">
        <div class="detail-label">① 日本語</div>
        <p class="jp detail-p">5要素: 演算・記憶・制御・入力・出力。出力=ディスプレイ・プリンタ。入力=KB・マウス。記憶=メモリ・HDD。キャッシュが最速。RAMは電源OFFで消える。ROMは読み取り専用。CPUに入出力機能は含まれない（誤り選択肢）。AND=直列、OR=並列、NOT=反転。ダイオードは一方向電流。電子の移動方向と電流方向は逆。プログラムミス（バグ）は故障以外の問題。ウイルス対策はパターン更新。危険添付を開かない。最新ブラウザ。工業所有権=特許・実用新案・意匠・商標（著作隣接権は著作権側）。CALS=企業間同一データ取引の標準。クローズドループ電子マネー=店舗のバリューは発行元経由で口座振込。FOMA=第3世代。静電容量方式=指とセンサの電荷。直列/並列システム。バスはデータやりとりの通路。</p>
      </div>
      <div class="detail-block vi-block">
        <div class="detail-label">② Tiếng Việt</div>
        <p class="detail-p">5 thành phần; ra = màn/in; vào = KB/chuột; nhớ = RAM/HDD; cache nhanh nhất; RAM mất khi tắt; ROM chỉ đọc; CPU không gồm I/O. AND nối tiếp, OR song song, NOT đảo. Diode một chiều; chiều electron ngược chiều dòng. Bug ngoài hỏng hóc. AV + cập nhật pattern; không mở .exe…; browser mới. Sở hữu công nghiệp: patent, utility, design, trademark. CALS chuẩn data liên doanh. e-money closed-loop: value về issuer/bank. FOMA = 3G. Capacitive = đo điện tích. Series/parallel system. Bus = đường trao data trong CPU.</p>
      </div>
      <span class="tbl-label jp">③ 要点</span>
      <table class="sum"><thead><tr><th>項目</th><th>詳細</th></tr></thead><tbody>
        <tr><td>キャッシュ</td><td class="jp-cell">アクセス最速</td></tr>
        <tr><td>AND / OR</td><td class="jp-cell">直列 / 並列</td></tr>
        <tr><td>ウイルス対策</td><td class="jp-cell">ソフト＋パターン日常更新</td></tr>
        <tr><td>工業所有権</td><td class="jp-cell">特許・実用新案・意匠・商標</td></tr>
        <tr><td>FOMA</td><td class="jp-cell">第3世代携帯電話</td></tr>
        <tr><td>静電容量方式</td><td class="jp-cell">指先とセンサ間の電荷を測定</td></tr>
        <tr><td>バス</td><td class="jp-cell">CPU内部などのデータ通路</td></tr>
      </tbody></table>
      <span class="tbl-label vi">④ Ý chính</span>
      <table class="sum vi"><thead><tr><th>Mục</th><th>Chi tiết</th></tr></thead><tbody>
        <tr><td>Cache</td><td>Nhanh nhất</td></tr>
        <tr><td>AND/OR</td><td>Nối tiếp / song song</td></tr>
        <tr><td>Antivirus</td><td>Cập nhật mẫu nhận diện</td></tr>
        <tr><td>SHCN</td><td>Patent, utility, design, trademark</td></tr>
        <tr><td>FOMA</td><td>3G</td></tr>
        <tr><td>Capacitive</td><td>Đo điện tích ngón tay</td></tr>
        <tr><td>Bus</td><td>Đường data</td></tr>
      </tbody></table>
    </article>

'''

# Insert before quiz-check section
if 'id="ch-pt-extra"' not in html:
    html = html.replace(
        '<section class="quiz-check-box section-block" id="quiz-check">',
        supplement + '\n        <section class="quiz-check-box section-block" id="quiz-check">',
        1,
    )
else:
    # already have - replace whole block
    html = re.sub(
        r'<article class="section-block lvl-0" id="ch-pt-extra">[\s\S]*?(?=<section class="quiz-check-box)',
        supplement,
        html,
        count=1,
    )

# Update quiz-check intro + add PT bullets
html = html.replace(
    "Các mốc hay ra trong Ôn luyện + Quiz mẫu. Ôn bảng trên rồi làm lại quiz để pass.",
    "Các mốc hay ra trong Ôn luyện + Quiz mẫu + <strong>Quiz PT</strong>. Ôn bảng study (kể cả mục «Quiz PT 追加ポイント») rồi làm lại quiz để pass.",
    1,
)

pt_bullets = """
<li><strong>Quiz PT:</strong> 59 câu từ quiz.txt (thiếu số 3)</li>
<li><strong>差分記録:</strong> 前フレームとの差分だけ記録（MPEG）</li>
<li><strong>サイマル放送:</strong> phát sóng cùng lúc</li>
<li><strong>OSI:</strong> セッション=開始〜終了管理／データリンク=隣接転送</li>
<li><strong>鍵:</strong> 秘密文書=相手の公開鍵／認証=自分の秘密鍵</li>
<li><strong>稼働率:</strong> MTBF/(MTBF+MTTR)；並列+直列合成例 94%</li>
<li><strong>クロック:</strong> 命令時間=クロック数÷周波数（3GHz×6clk=2ns）</li>
<li><strong>論理:</strong> AND直列／OR並列／NOT反転</li>
<li><strong>RAM/ROM/Cache:</strong> 揮発／読専／最速</li>
<li><strong>FOMA=3G／PLC=電灯線／LSI=大規模集積／DoS=サービス拒否</strong></li>
<li><strong>工業所有権:</strong> 特許・実用新案・意匠・商標</li>
<li><strong>電子マネー:</strong> クローズドは発行元経由口座振込</li>
"""

if "Quiz PT:</strong> 59 câu" not in html:
    html = html.replace(
        "<li><strong>専門用語JP↔VN:</strong>",
        pt_bullets + "<li><strong>専門用語JP↔VN:</strong>",
        1,
    )

# pass note
html = html.replace(
    "Học bảng JP → đọc bảng VI → làm Ôn luyện &amp; Quiz mẫu.",
    "Học bảng JP → đọc bảng VI → làm Ôn luyện, Quiz mẫu &amp; <strong>Quiz PT</strong>.",
    1,
)

# TOC: add PT extra links if toc-list exists
if 'href="#ch-pt-extra"' not in html:
    html = html.replace(
        '<li><a class="lvl-0" href="#quiz-check">Đối chiếu quiz</a></li>',
        '<li><a class="lvl-0" href="#ch-pt-extra">Quiz PT — Bổ sung</a></li>'
        '<li><a class="lvl-2" href="#ch-pt-extra-s1">Thuật ngữ PT</a></li>'
        '<li><a class="lvl-2" href="#ch-pt-extra-s2">OSI / mã hóa / availability / clock</a></li>'
        '<li><a class="lvl-2" href="#ch-pt-extra-s3">HW / logic / security / EC</a></li>'
        '<li><a class="lvl-0" href="#quiz-check">Đối chiếu quiz</a></li>',
        1,
    )

html_path.write_text(html, encoding="utf-8")
print("patched", html_path.stat().st_size)
print("pt-extra", 'id="ch-pt-extra"' in html)
print("quiz-check fixed", html.count('quiz-check-box<section') == 0)
