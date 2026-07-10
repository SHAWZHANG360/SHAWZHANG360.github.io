/* 语言与主题切换：选择结果保存在 localStorage，下次访问自动恢复 */
(function () {
  var root = document.documentElement;
  var langBtn = document.getElementById('lang-toggle');
  var themeBtn = document.getElementById('theme-toggle');

  /* ---------- 语言 ---------- */
  function applyLang(lang) {
    root.setAttribute('data-lang', lang);
    root.setAttribute('lang', lang === 'zh' ? 'zh-CN' : 'en');
    langBtn.textContent = lang === 'zh' ? 'EN' : '中文';
    try { localStorage.setItem('site-lang', lang); } catch (e) {}
  }

  var savedLang = null;
  try { savedLang = localStorage.getItem('site-lang'); } catch (e) {}
  applyLang(savedLang === 'en' ? 'en' : 'zh');

  langBtn.addEventListener('click', function () {
    applyLang(root.getAttribute('data-lang') === 'zh' ? 'en' : 'zh');
  });

  /* ---------- 主题 ---------- */
  function applyTheme(theme) {
    if (theme === 'dark') {
      root.setAttribute('data-theme', 'dark');
    } else {
      root.removeAttribute('data-theme');
    }
    try { localStorage.setItem('site-theme', theme); } catch (e) {}
  }

  var savedTheme = null;
  try { savedTheme = localStorage.getItem('site-theme'); } catch (e) {}
  if (!savedTheme) {
    savedTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  applyTheme(savedTheme);

  themeBtn.addEventListener('click', function () {
    applyTheme(root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
  });
})();
