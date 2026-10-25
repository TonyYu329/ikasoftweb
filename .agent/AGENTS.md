# FHWeb · ikasoft.cn 官网（文件夹加密隐藏王）

> 本文件是项目级 AI 编码指引，会话开始时自动加载；内容随项目演进持续更新。

## 项目概览

| 属性 | 值 |
|------|-----|
| 项目名称 | FHWeb（ikasoft.cn / 艾卡软件工作室官方网站） |
| 项目描述 | 《文件夹加密隐藏王》软件产品官网：单页产品介绍（软件介绍/免费下载/功能特点/使用说明/注册说明/关于）+ 附 `g/` 目录 Space War 太空战机网页小游戏 |
| 技术栈 | 纯静态 HTML5 + CSS3 + 原生 JavaScript（无前端框架、无构建工具、无包管理） |
| 游戏渲染 | 2D Canvas 主层 + 透明 WebGL（three.js 本地副本 `g/js/lib/three.min.js`）3D 叠加层 |
| 字体 | Google Fonts CDN（官网 Inter；游戏 Orbitron / Share Tech Mono / Exo 2） |
| 设计规范 | `DESIGN-蓝橙色-tony.md`：暗蓝底色（主背景 `#05152c`、卡片 `#0f2636`）+ 暖金唯一强调色（`#ee9038`），全部颜色走 CSS 自定义属性 |
| 服务入口 | 无服务端；官网入口 `index.html`，游戏入口 `g/index.html` |
| 软件本体 | 官网介绍的为《文件夹加密隐藏王》V6.1.0（folderhide 项目 C#/.NET 10 AOT 重构版，产品名 FolderHide）；分发包由 `soft/` 目录提供下载，桌面版源码仍是独立项目 `D:\Study\AICode\folderhide`，不在本仓库 |
| 代码仓库 | `git@github.com:TonyYu329/ikasoftweb.git`（master 分支；官网 V0.1.0 基线 2026-06-09） |

## 构建、测试与校验

- **无构建步骤**：不依赖 npm / bun / webpack / vite，任何静态文件服务器或直接双击 HTML 即可运行。
- **本地预览**：在项目根目录执行 `python -m http.server 8080`，浏览器访问 `http://localhost:8080/`（官网）、`http://localhost:8080/g/`（游戏）。
- **游戏验证**：浏览器打开 `g/index.html`，开始界面应显示「Space War · 版本号 V4.3.0」；键盘方向键/WASD 移动、J 或左键射击、K 或右键导弹；移动端有触控按钮。
- **缓存破坏**：游戏页静态资源用 `?v=x.y.z` 查询串（当前 `g/index.html` 引用 `merged.css?v=4.2.1`、`index_cjs.js?v=4.2.1`、`index_3d.js?v=4.2.1`）；改动 JS/CSS 后必须同步升版本号。
- **界面类改动必须截图验证**：改完后在浏览器实际渲染并截图/像素/DOM 断言确认，禁止"代码写了即视为完成"。
- **下载链接校验**：官网下载按钮统一指向 `soft/FolderHide_V6.1.0_x64.zip`（相对路径 + `download` 属性）；发布新版本时替换 zip 并同步 Hero、`#download`、`#pricing`、页脚四处文案与文件名。
- **校验口径**：HTML 结构与可访问性（aria-label、role）人工核对；无自动化测试套件。

## 目录结构

```
FHWeb/
├── index.html                 # 官网单页（约 1900 行，CSS/JS 全部内联，LF 行尾）
├── DESIGN-蓝橙色-tony.md      # 设计系统（暗蓝 + 暖金配色令牌与 Do/Don't）
├── README.md                  # 项目说明（每次提交 GitHub 时同步更新）
├── 修改记录.md                 # 每次修改的流水记录（时间精确到秒）
├── .agent/AGENTS.md           # 本文件，AI 编码指引
├── soft/                      # 软件分发包（官网全部下载按钮指向此处）
│   └── FolderHide_V6.1.0_x64.zip   # V6.1.0 绿色版（5,361,163 B，2026-10-25 15:47 重新打包）
├── image/                     # 官网截图素材
│   ├── reg1.png               # 注册邮件发送示例（2026-10-25 起被注册区引用）
│   └── reg2.png               # 注册邮件填写示例（2026-10-25 起被注册区引用）
├── old/                       # 旧版官网页面与注册说明素材
│   ├── about.html / how.html / reg.html / freeREG.html   # 旧版页面（历史留存）
│   ├── mail.jpg / mail2.jpg   # 旧版注册邮件截图（2026-10-25 起已不被官网引用，历史留存）
│   └── FOLDER0.gif/png、reg.png
├── g/                         # Space War 太空战机小游戏
│   ├── index.html             # ★游戏当前维护版（引用 merged.css + index_cjs.js + index_3d.js）
│   ├── huahua.html / nana.html / tuzi.html / xiaokeai.html / xueer.html
│   │                          # 5 个角色版旧实现「星河战机」（内联 CSS/JS，独立维护）
│   ├── css/                   # style.css、game.css、ui/（base/index/merged/overlays）
│   ├── js/
│   │   ├── index_cjs.js       # ★当前主逻辑（86 KB，疑似 CommonJS 打包产物）
│   │   ├── index_3d.js        # ★当前 3D 层逻辑
│   │   ├── lib/three.min.js   # three.js 本地副本
│   │   ├── modules/           # 模块化重构稿（core/entities/rendering/input/audio/system）
│   │   └── 其余 index.js/main*.js/*_clean.js/visuals.js/audio.js/engine.js 等为历史版本
│   ├── image/                 # 飞机/陨石贴图（plane64/128/256、yunshi*）
│   └── souce/                 # PSD 设计源文件（"souce"为既有拼写，勿改）
├── logs/、.claude/            # 工具运行日志与会话数据（已 gitignore，不入库）
└── .traetemp/                 # 临时/验证文件统一目录（gitignore，用完即删）
```

## 代码规范与约定

### 官网（index.html）

- 所有颜色必须使用 `:root` 中的 CSS 变量（`--bg-*`、`--color-gold*`、`--text-*`、`--color-border`、`--color-success/error`），禁止新增硬编码色值；令牌以 `DESIGN-蓝橙色-tony.md` 为唯一真源。
- 设计语言特征：卡片直角（`--radius-lg: 0`）、金色 CTA 带微弱发光（`--shadow-glow`）、分割线低对比（`#1a2a3a`）；勿擅自改成圆角/大投影/蓝色强调。
- 单页锚点导航：`#download`（免费下载）、`#features`（功能特点）、`#howto`（使用说明）、`#pricing`（怎样注册）、`#about`（关于本软件），导航中「下载 V6.1.0」为描边胶囊入口；导航高亮、移动端汉堡菜单、回到顶部按钮逻辑在文件末尾内联 IIFE 中。
- 注册区为双 tab 面板：`#panel-offline`（线下注册，含 `image/reg1.png`、`image/reg2.png` 两张邮件截图，自适应宽度 `flex: 1 1 300px`）与 `#panel-free`（免费注册）；改注册流程时两处文案同步核对。
- 语义化与可访问性：`<section>` 带 `aria-label`，`<nav role="navigation">`，图标按钮带 `aria-label`/`title`。
- 文案事实口径（2026-10-25 起按 V6.1.0）：软件名《文件夹加密隐藏王》V6.1.0（folderhide 项目 README/发布物为准，产品名 FolderHide）、平台 Windows 10 / 11 x64、zip 约 5.1 MB / 单 exe 约 11.5 MB、30 天全功能试用、技术支持邮箱 lantian329ygf@163.com、官网 http://www.ikasoft.cn；旧版《文件夹加密隐藏王2011》V5.0 / Win9x~Win7 文案已下线，仅在 `old/` 历史页面保留。
- `index.html` 现状为 **LF 行尾**；其余文件（含 g/ 目录、md 文档）为 **CRLF**。修改既有文件时保持其原有行尾，不整文件转换。

### 游戏（g/）

- 当前维护入口是 `g/index.html` + `g/js/index_cjs.js` + `g/js/index_3d.js` + `g/css/ui/merged.css`；`g/js/modules/` 是模块化重构稿，**当前页面并未引用**，在确认重构切换前不要把 modules 当作线上逻辑修改。
- `huahua.html` 等 5 个角色页是独立内联实现，改角色页时不要假设它们共享 `index_cjs.js`。
- 无 npm 依赖，three.js 只使用本地副本，禁止改为 CDN 引入。
- 主站目前没有任何指向 `g/` 游戏的链接（2026-10-24 核实）；如需上下线入口，先与用户确认。
- `old/` 目录虽名为 old，但其中 `mail.jpg`、`mail2.jpg` 已于 2026-10-25 被 `image/reg1.png`、`image/reg2.png` 取代，不再被官网引用；删除任何素材前仍须全仓 grep 引用。

### 通用

- 所有文件 UTF-8 无 BOM；新建文件统一 CRLF 行尾（修改既有文件则跟随原行尾）。
- 代码注释用中文；面向用户的页面文案用中文（`lang="zh-CN"`）。
- 检索使用 `rg`，文件查找使用 `fd`；本机未安装 `tree`。

## 架构说明

- **官网**：单页锚点滚动站点，无路由、无后端。结构为 固定导航 → Hero（V6.1.0 简介 + 醒目下载按钮）→ 免费下载（`#download`）→ 功能特点（6 张卡片）→ 使用说明（4 步）→ 怎样注册（试用/注册对比 + 双注册方式 tab）→ 关于本软件（信息表 + 功能简介）→ 页脚 → 回到顶部；全部交互（汉堡菜单、tab 切换、滚动高亮、回到顶部）由文件末尾内联 `<script>` IIFE 实现。
- **游戏**：双层 Canvas 架构——`#gameCanvas`（2D 主渲染）与透明的 `#canvas3d`（WebGL 叠加）叠放；HUD/开始/结束界面为 DOM 覆盖层（`.game-ui`）；移动端 `.mobile-controls` 提供子弹/导弹虚拟按钮。
- **资源关系**：官网与游戏相互独立，唯一跨目录引用是 `index.html` → `old/mail*.jpg` 两张图。

## 通用规则

- **先调研再行动**：未阅读代码前严禁主观猜测。读取文件、检索引用关系后再做判断；存疑时如实说明，并给出验证方案。
- **专注需求本身**：仅完成指定任务，不额外拓展。需求模糊时优先调研并给出建议，仅在明确要求时才修改代码；不擅自重构无关代码、不为单次使用新增抽象。
- **完成前自检**：逐项核对需求，界面类改动浏览器截图验证；明确说明修改内容、已验证项及暂无法验证项。
- **文件管理规范**：在原有文件内修改，无必要不新建文件；临时/验证文件统一放 `.traetemp/`，用完即删，不提交 Git。
- **高危操作提醒**：删除文件/分支、强制推送、硬重置、跳过校验等操作前必须先确认。
- **执行效率**：无依赖的任务并行执行，有依赖的按顺序执行。
- **Git 提交**：提交信息中文，格式 `<type>: <简述>`（feat/fix/docs/chore 等）；提交前同步更新 `README.md`（功能/目录/版本变化时）与 `修改记录.md`。

## 记忆库说明

本项目通过 Obsidian 记忆库跨会话留存信息：

| 记忆体系 | 位置 | 查阅时机 |
|--------|------|---------|
| Obsidian 记忆库 | `D:\ObsidianData\02AgentMemoryBank` | 会话开始先读 `00-系统配置\00-根导航.md`，再读项目 `@上下文`；用户说"保存会话"时按 7 步流程写入 |
| 项目 AI 指引 | `.agent/AGENTS.md`（本文件） | 每次会话自动加载 |
| 全局偏好 | `02-全局知识\02-通用偏好与配置.md` | 编码规范、环境路径、输出格式 |

会话约定：

- 每次开启项目会话，首先读取 Obsidian 记忆文件（根导航 → 项目 @上下文 → 会话记录/架构决策/项目文档）。
- **2026-10-25 起 FHWeb 已登记进记忆库根导航项目区**：项目目录 `01-项目区\FHWeb官网\`（含 `会话记录\`、`架构决策\`、`项目文档\`），入口 `@上下文-FHWeb官网-20261025-153841.md`，仪表盘 `FHWeb官网-项目仪表盘.md`；每次保存会话追加新的 `@上下文-FHWeb官网-<YYYYMMDD-HHMMSS>.md` 并在根导航行首链更新为最新快照。
- 用户说"保存会话到obsidian"时，按 7 步流程写入：① 提交 GitHub → ② 读根导航 → ③ 更新 @上下文（文件名带精确到秒时间戳）→ ④ 写会话记录/架构决策/项目文档 → ⑤ 更新通用偏好配置 → ⑥ 更新本文件 → ⑦ 输出写入的文件名。
- 复制文件到 Obsidian 目录须用 Python：`python -c "import shutil; shutil.copy2(src, dst)"`。

## 输出约定

- 每次回答使用中文。
- 每次修改文件后，给出修改文件的**完整绝对路径**与时间戳，以表格形式反馈，并标注该次改动中哪些是确定事实、哪些是推断。
- 新建/修改文件统一检查并清除 BOM（UTF-8 无 BOM）；新建文件 CRLF 行尾，修改既有文件跟随原行尾。
- 临时/生成产物（截图、验证脚本、报告等）统一放 `.traetemp/`；源码与正式文档按项目结构放置。
- **修改日志**：每次修改后在项目根目录 `修改记录.md` 追加一条（修改时间精确到秒、修改人 Tony、修改文件完整路径、修改内容）。
- **代码头注释**：每次修改代码文件后在文件最前面更新注释块：①首次创建人；②首次创建日期时间（精确到秒）；③代码功能简介；④最后修改人；⑤最后修改日期时间（精确到秒）。
- **界面修改铁律**：修改后必须在浏览器实际渲染并截图验证，确认真正修复/生效后再回复，不得想当然认为代码写了就会正确显示。
