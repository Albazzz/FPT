# -*- coding: utf-8 -*-
"""Rebuild index.html: study from summary data + external CSS + keep quiz JS."""
from pathlib import Path
import importlib.util

# Load CHAPTERS from generate_summary_html.py
spec = importlib.util.spec_from_file_location("gen", "generate_summary_html.py")
gen = importlib.util.module_from_spec(spec)
spec.loader.exec_module(gen)
CHAPTERS = gen.CHAPTERS
QUIZ_EXTRA = gen.QUIZ_EXTRA

quiz_js = Path("_quiz_script_body.js").read_text(encoding="utf-8")

def esc(s: str) -> str:
    return (
        s.replace("&", "&amp;")
        .replace("<", "&lt;")
        .replace(">", "&gt;")
        .replace('"', "&quot;")
    )

def table_jp(rows):
    h = [
        '<table class="sum"><thead><tr><th>項目</th><th>要点（教科書）</th></tr></thead><tbody>'
    ]
    for a, b in rows:
        h.append(
            f'<tr><td>{esc(a)}</td><td class="jp-cell">{esc(b)}</td></tr>'
        )
    h.append("</tbody></table>")
    return "\n".join(h)

def table_vi(rows):
    h = [
        '<table class="sum vi"><thead><tr><th>Mục</th><th>Nội dung tóm tắt</th></tr></thead><tbody>'
    ]
    for a, b in rows:
        h.append(f"<tr><td>{esc(a)}</td><td>{esc(b)}</td></tr>")
    h.append("</tbody></table>")
    return "\n".join(h)

# TOC links
toc_items = []
for ch in CHAPTERS:
    toc_items.append(
        f'<li><a class="lvl-0" href="#ch{ch["no"]}">Ch.{ch["no"]} {esc(ch["vi"])}</a></li>'
    )
    for si, sec in enumerate(ch["sections"], 1):
        toc_items.append(
            f'<li><a class="lvl-2" href="#ch{ch["no"]}-s{si}">{esc(sec["vi"])}</a></li>'
        )
toc_items.append('<li><a class="lvl-0" href="#quiz-check">Đối chiếu quiz</a></li>')

# Study sections
study_blocks = []
for ch in CHAPTERS:
    study_blocks.append(
        f'''
    <article class="section-block lvl-0" id="ch{ch["no"]}">
      <h2><span class="jp">第{ch["no"]}章 {esc(ch["jp"])}</span></h2>
      <p class="sec-meta">{esc(ch["vi"])}</p>
    </article>'''
    )
    for si, sec in enumerate(ch["sections"], 1):
        study_blocks.append(
            f'''
    <article class="section-block" id="ch{ch["no"]}-s{si}">
      <h2 class="jp">{esc(sec["jp"])}</h2>
      <p class="sec-meta">{esc(sec["vi"])}</p>
      <span class="tbl-label jp">表1 · 日本語（教科書）</span>
      {table_jp(sec["jp_rows"])}
      <span class="tbl-label vi">表2 · Bản dịch tiếng Việt</span>
      {table_vi(sec["vi_rows"])}
    </article>'''
        )

quiz_lis = "\n".join(
    f"<li><strong>{esc(t)}:</strong> {esc(f)}</li>" for t, f in QUIZ_EXTRA
)

html = f'''<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>JIT401 — Tin học &amp; Công nghệ thông tin</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="app.css">
  <link rel="stylesheet" href="study-site.css">
</head>
<body>

<nav class="site-nav">
  <div class="container nav-inner">
    <a href="#" class="brand" onclick="showPage('study');return false;">
      <span class="brand-mark">IT</span>
      <span>JIT401</span>
    </a>
    <div class="nav-tabs">
      <button class="nav-tab active" onclick="showPage('study')">Tài liệu</button>
      <button class="nav-tab" onclick="showPage('quiz')">Ôn luyện<span class="nav-badge" id="wrong-badge" style="display:none">0</span></button>
      <button class="nav-tab" onclick="showPage('sample')">Quiz mẫu<span class="nav-badge orange" id="swrong-badge" style="display:none">0</span></button>
      <button class="nav-tab" onclick="showPage('wrong')">Câu sai</button>
      <button class="nav-tab" onclick="showPage('swrong')">Sai mẫu</button>
    </div>
  </div>
</nav>

<!-- ═══ STUDY PAGE ═══ -->
<div id="study-page" class="page active">
  <div class="container">
    <header class="hero-mini">
      <span class="eyebrow">情報技術日本語 · JIT401</span>
      <h1>Tài liệu học nhanh · Song ngữ JP–VI</h1>
      <p>Tóm tắt theo giáo trình <strong>JIT401-Giao-trinh-IT</strong> (20 chương). Mỗi mục có bảng tiếng Nhật (theo sách) và bảng dịch tiếng Việt. Cuối trang đối chiếu quiz.</p>
      <div class="stat-row">
        <div class="stat"><strong>20</strong><span>Chương</span></div>
        <div class="stat"><strong>183+</strong><span>Câu ôn luyện</span></div>
        <div class="stat"><strong>52</strong><span>Quiz mẫu</span></div>
      </div>
    </header>

    <div class="study-layout">
      <aside class="study-toc">
        <h3>Mục lục</h3>
        <input type="search" class="toc-search" id="toc-search" placeholder="Tìm chương / mục…" autocomplete="off">
        <ul class="toc-list" id="toc-list">
          {"".join(toc_items)}
        </ul>
      </aside>

      <main class="study-content">
        {"".join(study_blocks)}

        <section class="quiz-check-box section-block" id="quiz-check">
          <h2>Đối chiếu quiz — phải trả lời được toàn bộ</h2>
          <p>Các mốc hay ra trong Ôn luyện + Quiz mẫu. Ôn bảng trên rồi làm lại quiz để pass.</p>
          <ul>
            {quiz_lis}
          </ul>
          <div class="pass-note">
            Nội dung study đã cover các điểm quiz chính. Học bảng JP → đọc bảng VI → làm Ôn luyện &amp; Quiz mẫu.
          </div>
        </section>

        <a href="#study-page" class="back-top">↑ Lên đầu trang</a>
      </main>
    </div>
  </div>
</div>

<!-- ═══ QUIZ PAGE ═══ -->
<div id="quiz-page" class="page">
  <div class="quiz-hero">
    <p class="quiz-hero-eyebrow">JIT401 — Ôn luyện</p>
    <h2>Câu hỏi <span>ôn luyện</span></h2>
    <p class="quiz-hero-sub">Tổng hợp 6 mẫu · song ngữ Nhật–Việt</p>
  </div>
  <div class="progress-strip"><div class="progress-fill" id="q-progress" style="width:0%"></div></div>
  <div class="quiz-stats-bar">
    <div class="quiz-stats-inner">
      <span class="quiz-stat-item">Câu: <strong id="q-stat-cur">1 / ?</strong></span>
      <span class="quiz-stat-item" style="color:var(--correct)">Đúng: <strong id="q-stat-ok">0</strong></span>
      <span class="quiz-stat-item" style="color:var(--wrong)">Sai: <strong id="q-stat-ng">0</strong></span>
    </div>
  </div>
  <div class="quiz-container">
    <div id="q-area"></div>
    <div class="score-card" id="q-finish" style="display:none">
      <div><span class="score-big" id="q-fscore">0</span><span class="score-of"> điểm</span></div>
      <div class="score-grade" id="q-fgrade"></div>
      <div class="score-bar-wrap"><div class="score-bar-fill" id="q-fbar" style="width:0%"></div></div>
      <p style="margin-top:12px;font-size:13px;color:var(--muted)">Câu sai: <strong id="q-fwrong" style="color:var(--wrong)">0</strong></p>
      <div style="display:flex;gap:10px;justify-content:center;margin-top:16px;flex-wrap:wrap">
        <button class="btn btn-primary" onclick="showPage('wrong')">Làm lại câu sai</button>
        <button class="btn btn-danger" onclick="resetQuiz()">Làm lại từ đầu</button>
      </div>
    </div>
  </div>
</div>

<!-- ═══ WRONG PAGE ═══ -->
<div id="wrong-page" class="page">
  <div class="quiz-hero">
    <p class="quiz-hero-eyebrow">JIT401 — Ôn luyện</p>
    <h2>Làm lại <span>câu sai</span></h2>
    <p class="quiz-hero-sub">Ôn tập các câu chưa trả lời đúng</p>
  </div>
  <div class="quiz-container wrong-intro">
    <div id="w-intro">
      <div class="score-card">
        <p>Số câu sai cần ôn lại (Ôn luyện)</p>
        <div class="score-big" id="w-cnt" style="font-size:44px">0</div>
        <div class="page-dots" id="w-list"></div>
        <div style="margin-top:20px"><button class="btn btn-primary" id="w-start-btn" onclick="startWrong()">Bắt đầu</button></div>
      </div>
    </div>
    <div id="w-area" style="display:none"></div>
    <div class="score-card" id="w-finish" style="display:none">
      <p style="font-size:16px;font-weight:600">Đã ôn lại xong!</p>
      <p style="margin-top:8px;font-size:13px;color:var(--muted)">Còn lại: <strong id="w-rem" style="color:var(--wrong)">0</strong> câu sai</p>
      <div style="margin-top:16px"><button class="btn btn-primary" onclick="backWrongIntro()">Danh sách câu sai</button></div>
    </div>
  </div>
</div>

<!-- ═══ SAMPLE QUIZ ═══ -->
<div id="sample-page" class="page">
  <div class="quiz-hero">
    <p class="quiz-hero-eyebrow">JIT401 — Quiz mẫu</p>
    <h2>52 câu <span>Quiz mẫu gốc</span></h2>
    <p class="quiz-hero-sub">Nguyên bản câu hỏi · Phong cách thi thật</p>
  </div>
  <div class="progress-strip"><div class="progress-fill orange" id="s-progress" style="width:0%"></div></div>
  <div class="quiz-stats-bar">
    <div class="quiz-stats-inner">
      <span class="quiz-stat-item">Câu: <strong id="s-stat-cur">1 / 52</strong></span>
      <span class="quiz-stat-item" style="color:var(--correct)">Đúng: <strong id="s-stat-ok">0</strong></span>
      <span class="quiz-stat-item" style="color:var(--wrong)">Sai: <strong id="s-stat-ng">0</strong></span>
    </div>
  </div>
  <div class="quiz-container">
    <div id="s-area"></div>
    <div class="score-card" id="s-finish" style="display:none">
      <div><span class="score-big" id="s-fscore" style="color:var(--warning)">0</span><span class="score-of"> / 52</span></div>
      <div class="score-grade" id="s-fgrade"></div>
      <div class="score-bar-wrap"><div class="score-bar-fill" id="s-fbar" style="width:0%;background:var(--warning)"></div></div>
      <p style="margin-top:12px;font-size:13px;color:var(--muted)">Câu sai: <strong id="s-fwrong" style="color:var(--wrong)">0</strong></p>
      <div style="display:flex;gap:10px;justify-content:center;margin-top:16px;flex-wrap:wrap">
        <button class="btn btn-orange" onclick="showPage('swrong')">Làm lại câu sai</button>
        <button class="btn btn-danger" onclick="resetSample()">Làm lại từ đầu</button>
      </div>
    </div>
  </div>
</div>

<!-- ═══ SAMPLE WRONG ═══ -->
<div id="swrong-page" class="page">
  <div class="quiz-hero">
    <p class="quiz-hero-eyebrow">JIT401 — Quiz mẫu</p>
    <h2>Làm lại <span>câu sai mẫu</span></h2>
    <p class="quiz-hero-sub">Ôn lại câu sai trong Quiz mẫu gốc</p>
  </div>
  <div class="quiz-container wrong-intro">
    <div id="sw-intro">
      <div class="score-card">
        <p>Số câu sai cần ôn lại (Quiz mẫu)</p>
        <div class="score-big" id="sw-cnt" style="font-size:44px;color:var(--warning)">0</div>
        <div class="page-dots" id="sw-list"></div>
        <div style="margin-top:20px"><button class="btn btn-orange" id="sw-start-btn" onclick="startSWrong()">Bắt đầu</button></div>
      </div>
    </div>
    <div id="sw-area" style="display:none"></div>
    <div class="score-card" id="sw-finish" style="display:none">
      <p style="font-size:16px;font-weight:600">Đã ôn xong!</p>
      <p style="margin-top:8px;font-size:13px;color:var(--muted)">Còn lại: <strong id="sw-rem" style="color:var(--wrong)">0</strong> câu sai</p>
      <div style="margin-top:16px"><button class="btn btn-orange" onclick="backSWrongIntro()">Danh sách câu sai</button></div>
    </div>
  </div>
</div>

<script>
{quiz_js}

  // TOC search + active section highlight
  (function(){{
    const search = document.getElementById('toc-search');
    const list = document.getElementById('toc-list');
    if(search && list){{
      search.addEventListener('input', ()=>{{
        const q = search.value.trim().toLowerCase();
        list.querySelectorAll('a').forEach(a=>{{
          const show = !q || a.textContent.toLowerCase().includes(q);
          a.parentElement.style.display = show ? '' : 'none';
        }});
      }});
    }}
    const links = document.querySelectorAll('.toc-list a');
    const sections = [...document.querySelectorAll('.study-content .section-block')];
    function setActive(){{
      let cur = null;
      const y = window.scrollY + 100;
      for(const s of sections){{
        if(s.offsetTop <= y) cur = s.id;
      }}
      links.forEach(a=>{{
        a.classList.toggle('active', a.getAttribute('href') === '#' + cur);
      }});
    }}
    window.addEventListener('scroll', setActive, {{passive:true}});
    setActive();
  }})();
</script>
</body>
</html>
'''

out = Path("index.html")
out.write_text(html, encoding="utf-8")
print("wrote", out, "bytes", out.stat().st_size)
print("chapters", len(CHAPTERS), "sections", sum(len(c["sections"]) for c in CHAPTERS))
