# 项目进度记录

## 当前阶段

当前项目处于 Editor Logic Phase。UI 阶段已经完成主要页面和移动端调试，当前重点是打通 Template JSON、Layer 渲染和快捷编辑同步链路。

## 进度表

| 模块 | 状态 | 已完成内容 | 当前说明 |
| --- | --- | --- | --- |
| 工程初始化 | 已完成 | Next.js App Router、TypeScript、TailwindCSS、Fabric.js、Zustand、Prisma、MySQL 依赖与基础目录 | `package.json`、`src/`、`prisma`、R2 client 预留已存在 |
| 首页 UI | 已完成 | 首页模板市场、分类、推荐区、精品模板区、快捷入口 | 位于 `src/modules/home` |
| 模板详情页 UI | 已完成 | 模板预览、信息、标签、操作按钮、相关模板 | 位于 `src/modules/template-detail` |
| 卡片编辑器 UI | 已完成 | 通用编辑器壳、头部、底部工具栏、快捷编辑面板、图层面板等 | 位于 `src/modules/editor` |
| 歌单编辑器 UI | 已完成 | 歌单页面、歌单画布、歌单快捷编辑、图层和样式面板 | 位于 `/editor/songlist` |
| 海报编辑器 UI | 已完成 | 海报页面、画布、快捷编辑、文字、图片、样式、图层面板 | 位于 `/editor/poster` |
| 语音厅编辑器 UI | 已完成 | 语音厅厅头、背景、封面演示入口和移动端面板 | 位于 `/editor/voice-room` |
| 手机真机调试 | 已完成 | 移动端视口、安全区、底部工具栏层级和触控相关修复 | 保留 `debug-touch` 页面和调试截图 |
| React hydration 修复 | 已完成 | 修复已知 hydration 和移动端渲染问题 | 当前 build 可通过 |
| Template JSON 类型 | 已完成 | 定义 `EditorTemplateJson`、`TemplateCanvas`、`TemplateLayer`、`EditableField` | 位于 `src/modules/editor/types/template.ts` |
| Layer 类型 | 已完成 | 支持 `text`、`image`、`decoration`，包含位置、尺寸、旋转、透明度、锁定、显示等字段 | 后续可扩展更多 layer 类型 |
| editableFields 类型 | 已完成 | 支持 `text`、`textarea`、`image`，用于自动驱动快捷编辑 UI | 当前已接入通用 `/editor` |
| Mock Template Loader | 已完成 | 新增冠歌卡模板和语音厅模板 mock loader | 位于 `src/modules/editor/data/mock-template-loader.ts` |
| 基础 Canvas 渲染 | 已完成 | Fabric.js 根据 Template JSON 渲染 text、image、decoration layer | 位于 `src/modules/editor/lib/fabric-template-renderer.ts` |
| 快捷编辑同步 | 已完成 | 表单修改同步 `editableFields.value` 和对应 layer，再触发 Canvas 重绘 | 位于 `src/stores/editor-store.ts` 和 `quick-edit-panel.tsx` |
| 图层列表读取 Template JSON | 已完成 | 图层面板从当前 template 读取 layers 并展示 | 当前只展示，不做拖拽和排序编辑 |
| 图片替换真实交互 | 未开始 | 当前 image 字段只显示替换按钮和文件名 | 后续接入素材选择或上传 |
| 字体选择 | 未开始 | 当前类型保留 `fontFamily`、`fontSize` 等字段 | 后续实现字体面板逻辑 |
| 导出 PNG/JPG | 未开始 | 导出模块目录已预留 | 后续基于 Fabric Canvas 实现 |
| 后台上传模板 | 未开始 | Prisma、MySQL、R2 接口预留 | 当前不接数据库和真实保存 |
| 艺术字 | 未开始 | 属于 P2 | 当前不实现 |
| Repeat Block | 未开始 | 属于 P2 | 当前不实现 |
| 二维码 | 未开始 | 属于 P2 | 当前不实现 |
| 我的素材 | 未开始 | 属于 P2 | 当前不实现 |
| 动态模板 | 未开始 | 属于 P3 | 当前明确禁止 |
| 视频背景 | 未开始 | 属于 P3 | 当前明确禁止 |
| MP4 导出 | 未开始 | 属于 P3 | 当前明确禁止 |
| AI 能力 | 未开始 | 属于 P3 | 当前明确禁止 |

## 最近一次验证

| 验证项 | 结果 | 说明 |
| --- | --- | --- |
| TypeScript | 通过 | `tsc --noEmit` 通过 |
| Lint | 通过 | `eslint` 通过 |
| Build | 通过 | `next build --webpack` 通过 |
| 浏览器验证 | 通过 | `/editor` 可打开，Canvas 已渲染，快捷编辑字段可修改 |

## 下一阶段建议

| 优先级 | 任务 | 说明 |
| --- | --- | --- |
| P1 | 图片替换链路 | 先接 mock 图片选择，不接真实上传 |
| P1 | 字体基础面板 | 先修改 text layer 的 `fontFamily`、`fontSize`、`color` |
| P1 | 导出 PNG/JPG | 基于 Fabric Canvas 输出静态图片 |
| P1 | Template JSON 拆分 | 后续将 mock template 拆分为更小文件，避免单文件过长 |
| P1 | 图层显示控制 | 支持 visible/locked 的基础状态切换 |

