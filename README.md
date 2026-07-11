# 张世羽 · 学术个人网站 —— 维护手册

- **线上地址**:https://shawzhang360.github.io
- **代码仓库**:https://github.com/SHAWZHANG360/SHAWZHANG360.github.io
- **本地位置**:`D:\MY Website`(此文件夹就是网站本身)

纯静态 HTML/CSS/JS,零构建依赖,不引用任何外部资源。

## 文件说明

```
index.html        全部页面内容(中英文都在这里改)
assets/style.css  样式(一般不用动;主题色改 :root 里的 --accent)
assets/main.js    语言与主题切换逻辑(不用动)
assets/photo.jpg  个人照片(想换就用新图覆盖它,文件名不变)
assets/cv.pdf     简历 PDF(放入后,把 index.html 里注释掉的"简历 PDF"链接恢复)
```

内容都是中英成对的:`<span class="zh">中文</span><span class="en">English</span>`,
改中文时记得把旁边的英文一起改。

---

## 一、日常更新(四步)

1. **改**:用记事本 / VS Code 打开 `index.html`,`Ctrl+F` 搜到要改的文字,修改
2. **看**:双击 `index.html` 在浏览器预览,确认没改坏
3. **存 + 发**:在本文件夹打开终端(资源管理器地址栏输入 `cmd` 回车),执行:
   ```
   git add . && git commit -m "写明改了什么" && git push
   ```
4. **验**:等 1 分钟,浏览器 **Ctrl + F5** 强制刷新线上页面

> 提交信息 `-m "..."` 建议写具体,如 `"新增ESWA论文"`,方便日后回退时认得出每个版本。

## 二、"保存"与"发布"是两回事

| 命令 | 作用 | 影响范围 |
|------|------|---------|
| `git add . && git commit -m "说明"` | **保存存档点**(快照) | 只在你电脑里 |
| `git push` | **发布**(上传到 GitHub) | 全世界可见 |

- 可以连续 commit 多次存档,最后一次性 push 发布
- 看到 `Your branch is ahead of 'origin/main'` = 有存档还没发布,补一句 `git push` 即可
- 看到 `nothing to commit` = 没有新改动,不是报错

## 三、看不到更新?先怀疑缓存

推送成功后线上其实 1 分钟内就更新了,但你自己的浏览器可能给你看缓存:

1. **Ctrl + F5** 强制刷新(解决 99% 的情况)
2. 无痕窗口(Ctrl + Shift + N)打开链接,看到的一定是最新版
3. 什么都不做,10 分钟后缓存自动过期

访客(如招聘评审)第一次访问拿到的就是最新版,不受影响。

## 四、回退(后悔药,按情况选)

先用这句查看历史存档(q 退出):

```
git log --oneline
```

每行开头的 7 位编号(如 `9a5423b`)就是版本号,后面是你写的提交说明。

**情况 1:改乱了,还没 commit** —— 丢弃全部未保存的改动,回到上一个存档:

```
git checkout -- .
```

**情况 2:已 commit(无论是否已 push),想撤销** —— 用"反向提交"安全撤销:

```
git revert HEAD
git push
```

`revert HEAD` 撤销最近一次提交;想撤销更早的某一次,把 `HEAD` 换成那次的编号。
历史记录完整保留,永远可以再撤销这次撤销,最安全。

**情况 3:想把整个网站恢复到某个历史版本**:

```
git checkout 版本编号 -- .
git add . && git commit -m "恢复到某版本" && git push
```

> 原则:**永远用 revert / checkout,不要用 `git reset --hard` 碰已发布的提交**——前者是"新开存档覆盖",后者是"删档",删档后已发布的历史会和线上打架。

**情况 4:不确定怎么办** —— 什么都别动,直接把终端里的输出发给 Claude。

## 五、常用一句话命令速查

```
git status                 现在有哪些改动、有没有待发布的存档
git log --oneline          查看全部历史版本
git diff                   看看自己刚才具体改了什么
git push                   发布所有本地存档
git checkout -- .          丢弃所有未保存的改动
git revert HEAD            撤销最近一次提交(之后要 git push)
```

## 六、备忘

- `design-offprint` 分支存有一版期刊风重设计(未采用),不影响 main,不用管
- 手机号、籍贯等隐私信息不要写进网站——这里是公开的
- 域名:目前用 `shawzhang360.github.io`;以后想绑自定义域名(约 ¥75/年)随时可加,老链接会自动跳转
