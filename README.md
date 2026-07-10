# 张世羽 · 学术个人网站

纯静态 HTML/CSS/JS 学术主页，设计风格参考 GitHub 上最流行的学术主题
[al-folio](https://github.com/alshedivat/al-folio)（16k+ stars），但**零构建依赖**：
不需要 Ruby/Jekyll/Node，不引用任何外部 CDN 或字体（大陆访问无障碍），
双击 `index.html` 就能打开，改完即生效。

## 功能

- **中英双语**：右上角 `EN / 中文` 一键切换，自动记住选择
- **明暗主题**：跟随系统，也可手动切换
- **响应式**：手机、平板、桌面自适应
- 期刊分区徽章（JCR Q1 / IF / 中科院分区 / 最佳论文奖）

## 文件结构

```
index.html        全部页面内容（中英文都在这里改）
assets/style.css  样式（主题色改 :root 里的 --accent 即可）
assets/main.js    语言与主题切换逻辑（一般不用动）
assets/cv.pdf     ← 把你的简历 PDF 放到这里（建议先删掉手机号等隐私信息）
assets/photo.jpg  ← 个人照片放到这里，并按 index.html 中注释替换头像占位块
```

## 如何更新内容

所有内容都在 `index.html` 里，中文写在 `<span class="zh">`、英文写在
`<span class="en">` 中，成对出现。常见操作：

- **新增论文**：在 `<ol class="pub-list">` 里复制一个 `<li>…</li>` 改内容
- **新增动态**：在 `id="news"` 区块的 `<ul>` 里加一行
- **换主题色**：改 `assets/style.css` 顶部 `--accent` 的颜色值

## 部署到 GitHub Pages

1. 在 GitHub 新建仓库，命名为 `你的用户名.github.io`
2. 在本目录执行：
   ```bash
   git init
   git add .
   git commit -m "Initial academic homepage"
   git branch -M main
   git remote add origin https://github.com/你的用户名/你的用户名.github.io.git
   git push -u origin main
   ```
3. 仓库 Settings → Pages → Source 选 `main` 分支根目录，几分钟后即可通过
   `https://你的用户名.github.io` 访问

## 本地预览

直接双击 `index.html`，或在本目录运行 `python -m http.server 8000`
后访问 http://localhost:8000
