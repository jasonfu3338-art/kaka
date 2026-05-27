import type { BottomToolbarTool } from "../components/bottom-toolbar";
import { ImageIcon, LayersIcon, SparkIcon, TextIcon } from "../components/editor-icons";

export type PosterPanel = "quick" | "text" | "image" | "style" | "layers";

export const posterTemplate = {
  image: "/mock/templates/poster-demo.JPG",
  title: "公会招募",
};

export const posterQuickFields = [
  { label: "海报标题", value: "公会招募", type: "input" },
  { label: "活动时间", value: "每晚 20:00-23:00", type: "input" },
  {
    label: "福利内容",
    value: "收光奖励\n1.0 奖励 2\n2.0 奖励 6\n每小时截图报备\n周麦序福利\n第一名奖励 99",
    type: "textarea",
  },
  {
    label: "规则说明",
    value: "平台福利\n坐标小拾光\n后台 80 比例\n提现秒到银行卡 / 支付宝\n主持福利\n每周任务过完参与",
    type: "textarea",
  },
  { label: "联系方式", value: "APP：帅卡 / ID：123456", type: "input" },
  { label: "二维码", value: "替换二维码图片", type: "image" },
  { label: "背景图", value: "替换背景/人物图", type: "image" },
] as const;

export const posterLayers = [
  { name: "标题文字", type: "标题", locked: false, visible: true },
  { name: "人物图", type: "图片", locked: true, visible: true },
  { name: "福利标题", type: "文字", locked: false, visible: true },
  { name: "福利内容", type: "文字", locked: false, visible: true },
  { name: "规则文字", type: "文字", locked: false, visible: true },
  { name: "二维码", type: "图片", locked: true, visible: true },
  { name: "装饰光效", type: "装饰", locked: true, visible: true },
  { name: "边框", type: "装饰", locked: true, visible: true },
  { name: "底部链条", type: "装饰", locked: true, visible: true },
  { name: "背景图", type: "背景", locked: true, visible: true },
] as const;

export const posterToolbarTools: readonly BottomToolbarTool<PosterPanel>[] = [
  { key: "quick", label: "快捷编辑", icon: SparkIcon },
  { key: "text", label: "文字", icon: TextIcon },
  { key: "image", label: "图片", icon: ImageIcon },
  { key: "style", label: "样式", icon: SparkIcon },
  { key: "layers", label: "图层", icon: LayersIcon },
];

export const posterStyleControls = ["字体", "字号", "颜色", "描边", "阴影", "主题", "对齐", "行距"] as const;
