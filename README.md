# ikasoft.cn 官网（FHWeb）

**[⬇ 下载文件夹加密隐藏王 V6.1.0（x64 绿色版）](soft/FolderHide_V6.1.0_x64.zip)** · 免安装，解压即用 · Windows 10 / 11 x64 · 30 天全功能试用

文件夹加密隐藏王 — 经典的文件夹加密、文件夹隐藏的系统安全工具。

艾卡软件工作室官方网站源码仓库。

## 项目简介

本仓库是《文件夹加密隐藏王》软件的产品官网，纯静态实现，无需后端与构建工具：

- **产品单页**（`index.html`）：软件介绍、功能特点、使用说明、注册说明、关于本软件，单页锚点导航。
- **网页小游戏**（`g/`）：Space War 太空战机，2D Canvas + three.js 3D 叠加层，支持键盘与移动端触控。

| 项 | 内容 |
|----|------|
| 官方网站 | http://www.ikasoft.cn |
| 软件名称 | 文件夹加密隐藏王 V6.1.0（FolderHide 重构版） |
| 下载包 | `soft/FolderHide_V6.1.0_x64.zip`（5,362,006 B，绿色版） |
| 运行平台 | Windows 10 / 11（x64） |
| 版权所有 | 艾卡软件工作室 |
| 技术支持 | lantian329ygf@163.com |
| 代码仓库 | https://github.com/TonyYu329/ikasoftweb |

## 下载

| 渠道 | 链接 | 说明 |
|------|------|------|
| 仓库内分发 | [`soft/FolderHide_V6.1.0_x64.zip`](soft/FolderHide_V6.1.0_x64.zip) | 与官网所有下载按钮同源，5,362,006 B |
| 官网下载区 | `index.html#download` | 首屏、导航、下载区、注册区、页脚共 5 处入口 |
| 桌面源码 | `D:\Study\AICode\folderhide` | 独立仓库，本仓库只托管官网与分发包 |

**使用方式**：解压到任意可写目录（如 `D:\Tools`），双击 `FolderHide.exe` 即运行，首次启动自动开始 30 天试用；包内 `setup.stamp` 请勿单独删除，`data.dat` / `settings.cfg` 由程序运行时生成。

## 技术栈

- HTML5 + CSS3 + 原生 JavaScript（无框架、无构建工具、无包管理）
- CSS 自定义属性设计令牌（暗蓝底色 + 暖金强调色，见 `DESIGN-蓝橙色-tony.md`）
- 游戏：Canvas 2D + three.js（本地副本 `g/js/lib/three.min.js`，无 CDN 依赖）
- 字体：Google Fonts CDN（Inter / Orbitron / Share Tech Mono / Exo 2）

## 目录结构

```
FHWeb/
├── index.html                 # 官网单页（CSS/JS 内联）
├── DESIGN-蓝橙色-tony.md      # 暗蓝 + 暖金设计系统
├── README.md                  # 本文件
├── 修改记录.md                 # 修改流水记录
├── .agent/AGENTS.md           # AI 编码指引
├── soft/                      # 软件分发包（官网下载链接指向此处）
│   └── FolderHide_V6.1.0_x64.zip   # V6.1.0 绿色版（约 5.1 MB）
├── old/                       # 旧版页面与注册说明素材（mail*.jpg 现仍被引用）
└── g/                         # Space War 太空战机小游戏
    ├── index.html             # 游戏当前版（V4.3.0）
    ├── huahua/nana/tuzi/xiaokeai/xueer.html  # 5 个角色旧版
    ├── css/、js/、image/、souce/
```

## 本地预览

无构建步骤，任选一种方式：

```powershell
# 方式一：Python 静态服务器（推荐，避免本地 file:// 资源限制）
python -m http.server 8080
# 官网  http://localhost:8080/
# 游戏  http://localhost:8080/g/

# 方式二：直接双击 index.html / g/index.html
```

## 官网页面板块

| 锚点 | 板块 | 内容 |
|------|------|------|
| （首屏） | 软件介绍 | V6.1.0 简介、三大亮点徽章、醒目下载按钮（指向 `soft/FolderHide_V6.1.0_x64.zip`） |
| `#download` | 免费下载 | 版本 V6.1.0、平台与体积信息、大号下载按钮、解压与使用提示 |
| `#features` | 功能特点 | 回收站伪装隐藏、清单加密保护、双重锁定模式、深浅主题·液态玻璃、列表/卡片双视图、绿色单文件 |
| `#howto` | 使用说明 | 解压并运行、设置访问密码、添加并隐藏、恢复与找回 |
| `#pricing` | 怎样注册 | 试用版/注册版对比；线下注册、免费注册两种方式 |
| `#about` | 关于本软件 | 软件信息表（V6.1.0 / Win10·11 x64 / 授权方式）与完整功能简介 |

## 小游戏操作（g/）

- 键盘：方向键 / WASD 移动，`J` 或鼠标左键射击，`K` 或鼠标右键导弹
- 移动端：屏幕虚拟按钮（子弹 / 导弹）
- 维护入口：`g/index.html` + `g/js/index_cjs.js` + `g/js/index_3d.js` + `g/css/ui/merged.css`；改动静态资源后同步升级 `?v=` 缓存版本号。

## 设计规范

- 设计令牌唯一来源：`DESIGN-蓝橙色-tony.md`
- 主背景 `#05152c`，卡片表面 `#0f2636`，边框 `#1a2a3a`；暖金强调 `#ee9038`（hover `#f3a13e`）
- 正文 `#9ca9b9`，标题 `#e8edf3`；卡片直角、微弱发光，不使用蓝色强调与强投影
- 所有颜色使用 CSS 变量，禁止硬编码

## 版本记录

| 日期 | 版本 | 说明 |
|------|------|------|
| 2026-06-09 | V0.1.0 | 官网 V0.1.0 上线基线，含 `g/` 游戏资源（master 分支） |
| 2026-10-24 | 规范化 | 新增 `.agent/AGENTS.md` AI 编码指引、扩充 README、建立 `修改记录.md` |
| 2026-10-25 | 官网 V6.1.0 | 软件介绍全站对齐 folderhide V6.1.0（Hero/功能/使用说明/注册/关于），新增 `#download` 下载区与导航下载入口，新增 `soft/FolderHide_V6.1.0_x64.zip`（5,362,006 B）；README 增加顶部醒目下载直链与下载渠道表；首次写入 Obsidian 记忆库（项目区 `FHWeb官网`） |

## 维护约定

- 每次向 GitHub 提交前，如功能、目录结构或版本发生变化，同步更新本文件（版本记录追加一行）。
- 每次修改在根目录 `修改记录.md` 追加记录（时间精确到秒、修改人 Tony）。
- 临时文件统一放 `.traetemp/`（已 gitignore），不入库。
