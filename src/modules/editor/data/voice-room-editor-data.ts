import type { BottomToolbarTool } from "../components/bottom-toolbar";
import { ImageIcon, LayersIcon, SparkIcon, TextIcon } from "../components/editor-icons";

export type VoiceRoomPanel = "quick" | "text" | "image" | "style" | "layers";
export type VoiceRoomTemplateType = "header" | "background" | "cover";

export const voiceRoomTemplateTypes = [
  { key: "header", label: "厅头", image: "/mock/templates/ting-tou.JPG", ratio: "aspect-[16/10]" },
  { key: "background", label: "厅背景", image: "/mock/templates/ting-beijing.JPG", ratio: "aspect-[9/16]" },
  { key: "cover", label: "厅封面", image: "/mock/templates/ting-fengmian.JPG", ratio: "aspect-square" },
] as const;

export const voiceRoomQuickFields = [
  { label: "厅名", value: "猫猫酱", type: "input" },
  { label: "副标题 / 口号", value: "风把云揉成软糖", type: "input" },
  {
    label: "厅简介",
    value: "小猫的世界 / 温柔陪伴 / 点唱互动\n欢迎来到猫猫酱，遇见更柔软的声音。",
    type: "textarea",
  },
  { label: "Logo / 厅头像", value: "替换 Logo 图片", type: "image" },
  { label: "背景图", value: "替换背景图", type: "image" },
  { label: "装饰图", value: "替换装饰图", type: "image" },
  { label: "联系方式", value: "ID：888888 / 群：123456", type: "input" },
] as const;

export const voiceRoomLayers = [
  { name: "背景图", type: "背景", locked: true, visible: true },
  { name: "Logo", type: "图片", locked: false, visible: true },
  { name: "厅名文字", type: "文字", locked: false, visible: true },
  { name: "副标题文字", type: "文字", locked: false, visible: true },
  { name: "简介文字", type: "文字", locked: false, visible: true },
  { name: "厅封面图", type: "图片", locked: false, visible: true },
  { name: "装饰光效", type: "装饰", locked: true, visible: true },
  { name: "花纹装饰", type: "装饰", locked: true, visible: true },
  { name: "边框", type: "装饰", locked: true, visible: true },
  { name: "联系方式", type: "文字", locked: false, visible: true },
] as const;

export const voiceRoomToolbarTools: readonly BottomToolbarTool<VoiceRoomPanel>[] = [
  { key: "quick", label: "快捷编辑", icon: SparkIcon },
  { key: "text", label: "文字", icon: TextIcon },
  { key: "image", label: "图片", icon: ImageIcon },
  { key: "style", label: "样式", icon: SparkIcon },
  { key: "layers", label: "图层", icon: LayersIcon },
];
