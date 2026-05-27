# 编辑器架构说明

## 技术栈

编辑器使用以下技术：

- Next.js App Router
- TypeScript
- TailwindCSS
- Fabric.js
- Zustand

Prisma、MySQL 和 Cloudflare R2 已在项目中预留，但当前 Editor Logic 阶段不接入数据库、对象存储或真实保存。

## 当前目录结构

```txt
src/
├── app/
│   ├── editor/
│   ├── editor/poster/
│   ├── editor/songlist/
│   └── editor/voice-room/
├── components/
├── editor/
│   ├── canvas/
│   ├── export/
│   ├── image/
│   ├── layers/
│   ├── quick-edit/
│   └── text/
├── hooks/
├── lib/
├── modules/
│   ├── editor/
│   │   ├── components/
│   │   ├── data/
│   │   ├── lib/
│   │   └── types/
│   ├── home/
│   └── template-detail/
├── prisma/
├── services/
├── stores/
└── styles/
```

## 当前编辑器入口

通用编辑器入口：

```txt
src/app/editor/page.tsx
↓
src/modules/editor/editor-shell.tsx
```

语音厅、歌单、海报等页面已有独立演示入口：

```txt
src/app/editor/voice-room/page.tsx
src/app/editor/songlist/page.tsx
src/app/editor/poster/page.tsx
```

当前 Editor Logic 的主链路优先接入通用 `/editor` 页面。

## Template JSON

模板本质是 Template JSON。当前类型定义在：

```txt
src/modules/editor/types/template.ts
```

当前支持的顶层结构：

```txt
canvas
layers
editableFields
```

### canvas

当前支持：

- `width`
- `height`
- `background`
- `backgroundColor`
- `previewRatio`

其中 `background` 是当前 Editor Logic 阶段的标准字段，`backgroundColor` 保留用于兼容已有页面。

### layers

当前支持三类 layer：

- `text`
- `image`
- `decoration`

基础字段：

- `id`
- `type`
- `x`
- `y`
- `width`
- `height`
- `rotation`
- `opacity`
- `locked`
- `visible`
- `zIndex`

文本图层扩展字段：

- `text`
- `fontFamily`
- `fontSize`
- `color`
- `stroke`
- `shadow`
- `fontWeight`
- `lineHeight`
- `align`

图片图层扩展字段：

- `src`
- `objectFit`
- `radius`

装饰图层扩展字段：

- `variant`
- `color`
- `radius`
- `blur`

### editableFields

`editableFields` 用于驱动快捷编辑 UI。每个字段声明：

- `key`
- `label`
- `type`
- `layerId`
- `placeholder`
- `value`

当前支持字段类型：

- `text`
- `textarea`
- `image`

## Mock Template Loader

Mock 模板数据位于：

```txt
src/modules/editor/data/mock-template-loader.ts
```

当前包含：

- `guangeCardTemplate`：冠歌卡模板，用于 `/editor` 的第一套真实卡片模板链路。
- `mockVoiceRoomTemplate`：语音厅厅头模板，用于兼容已有语音厅演示页面。
- `loadMockTemplate(templateId)`：按模板 ID 返回 mock template。

Mock 模板当前使用 `public/mock/templates` 下已有素材，不新增真实素材依赖。

## 状态管理

编辑器状态由 Zustand 管理，位置：

```txt
src/stores/editor-store.ts
```

当前状态包含：

- `activeTemplateId`
- `template`

当前动作包含：

- `loadTemplate(templateId)`
- `setActiveTemplateId(templateId)`
- `updateEditableField(key, value)`

`updateEditableField` 的同步规则：

```txt
更新 editableFields.value
↓
根据 editableField.layerId 找到对应 layer
↓
text field 更新 text layer.text
image field 更新 image layer.src
↓
CanvasArea 读取最新 template 并重新渲染 Fabric Canvas
```

## Canvas 渲染

Fabric 渲染逻辑位于：

```txt
src/modules/editor/lib/fabric-template-renderer.ts
```

渲染入口：

```txt
renderTemplateToFabric(canvas, template)
```

当前渲染能力：

- 清空 Fabric Canvas。
- 设置画布宽高。
- 设置画布背景。
- 按 `zIndex` 排序渲染 layer。
- 渲染 text layer 为 Fabric `Textbox`。
- 渲染 image layer 为 Fabric `FabricImage`。
- 渲染 decoration layer 为 Fabric `Rect`。

Canvas 组件位于：

```txt
src/modules/editor/components/canvas-area.tsx
```

组件职责：

- 初始化 Fabric `Canvas`。
- 从 Zustand 读取当前 Template JSON。
- 在 Template JSON 变化时调用 Fabric renderer 重绘。
- 按模板宽高设置预览区域比例。

## 快捷编辑

快捷编辑组件位于：

```txt
src/modules/editor/components/quick-edit-panel.tsx
```

组件职责：

- 从 Template JSON 读取 `editableFields`。
- 自动生成表单。
- `text` 渲染为 input。
- `textarea` 渲染为 textarea。
- `image` 当前渲染为图片替换按钮，占位展示文件名。
- 文本输入变化时调用 `updateEditableField` 同步状态和 Canvas。

## 当前组件关系

```txt
EditorShell
├── EditorHeader
├── LayerPanel
├── CanvasArea
├── QuickEditPanel
├── TextPanel
├── ImagePanel
├── StylePanel
└── BottomToolbar
```

当前 `/editor` 初始化流程：

```txt
EditorShell mount
↓
loadTemplate("card-guange-001")
↓
Zustand 写入 template
↓
CanvasArea 渲染 Fabric Canvas
↓
QuickEditPanel 根据 editableFields 生成表单
```

## 当前边界

当前阶段不实现：

- 图层拖拽
- 图层缩放
- 复杂选中态
- 撤销重做
- 数据库存储
- 真实导出
- 视频时间轴
- AI 能力

这些能力需要在 Template JSON、状态模型和 Fabric object 映射稳定后再逐步进入。
