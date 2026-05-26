import type { BottomToolbarTool } from "../components/bottom-toolbar";
import { ImageIcon, LayersIcon, SparkIcon, TextIcon } from "../components/editor-icons";

export type SonglistPanel = "quick" | "content" | "batch" | "style" | "multi" | "nudge" | "layers";

export const songlistTemplate = {
  image: "/mock/templates/songlist-demo.JPG",
  title: "小帅歌单",
};

export const songBlocks = [
  {
    id: "song-block-01",
    title: "右侧主歌单",
    content: "showoff\nsatyalive\nsunnyrain\n无法坠入爱河\n普鲁斯特效应\n我的爱没前奏\n海的尽头是冰箱\n爱你但说不出口\nhello（爱是怪兽）\n输入法打可爱按第五",
  },
  {
    id: "song-block-02",
    title: "新增歌单 A",
    content: "早到的u\n你-dobi\n他不爱你\n日落大道\n星河水手\n风吹一夏\n哪里都是你",
  },
  {
    id: "song-block-03",
    title: "新增歌单 B",
    content: "getoffmyhead\n终章final chapter\n你的crush降临了吗\nstar crossing night",
  },
] as const;

export const songLayers = [
  { name: "右侧主歌单", type: "文本区域", locked: false, visible: true },
  { name: "新增歌单 A", type: "文本区域", locked: false, visible: true },
  { name: "新增歌单 B", type: "文本区域", locked: false, visible: true },
  { name: "说明文字", type: "文本区域", locked: false, visible: true },
  { name: "底部感谢文案", type: "文本区域", locked: false, visible: true },
  { name: "标题文字", type: "标题", locked: true, visible: true },
  { name: "头像图片", type: "图片", locked: false, visible: true },
  { name: "二维码", type: "图片", locked: true, visible: true },
  { name: "边框花纹", type: "装饰", locked: true, visible: true },
  { name: "蝴蝶纹理", type: "装饰", locked: true, visible: true },
  { name: "装饰图", type: "装饰", locked: true, visible: true },
  { name: "背景图", type: "背景", locked: true, visible: true },
] as const;

export const songToolbarTools: readonly BottomToolbarTool<SonglistPanel>[] = [
  { key: "quick", label: "快捷编辑", icon: SparkIcon },
  { key: "content", label: "内容", icon: TextIcon },
  { key: "batch", label: "批量编辑", icon: SparkIcon },
  { key: "style", label: "样式", icon: TextIcon },
  { key: "multi", label: "多选", icon: SparkIcon },
  { key: "nudge", label: "微调", icon: SparkIcon },
  { key: "layers", label: "图层", icon: LayersIcon },
];

export const styleControls = ["字体", "字号", "颜色", "描边", "行距", "列距", "对齐", "阴影"] as const;

export const songQuickFields = [
  { label: "歌单标题", value: songlistTemplate.title, type: "input" },
  { label: "头像/图片", value: "替换头像图片", type: "image" },
  { label: "主歌单文本区域", value: songBlocks[0].content, type: "textarea" },
  { label: "新增歌单 A", value: songBlocks[1].content, type: "textarea" },
  { label: "新增歌单 B", value: songBlocks[2].content, type: "textarea" },
  {
    label: "说明文字",
    value: "可指定歌曲学熟，歌单只是一部分持续更新\n感谢聆听 / 未完待续",
    type: "textarea",
  },
  { label: "二维码/图片", value: "替换二维码图片", type: "image" },
] as const;
