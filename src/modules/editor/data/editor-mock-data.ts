export type EditorPanel = "quick" | "text" | "image" | "style" | "layers";

export const editorTemplate = {
  image: "/mock/templates/guange-demo.JPG",
  title: "限定女神卡",
  subtitle: "在编辑栏填写文本",
};

type QuickField = {
  label: string;
  value: string;
  type?: "text" | "image";
};

export const quickFields: QuickField[] = [
  { label: "昵称", value: "小帅" },
  { label: "标题", value: "限定女神卡" },
  { label: "签名", value: "我偏要做不熄灭的野火，点亮天地四合" },
  { label: "头像", value: "替换头像", type: "image" },
  { label: "背景图", value: "替换背景", type: "image" },
] as const;

export const layers = [
  { name: "主标题", type: "文字", locked: false, visible: true },
  { name: "人物图片", type: "图片", locked: true, visible: true },
  { name: "昵称字段", type: "变量", locked: false, visible: true },
  { name: "装饰光效", type: "装饰", locked: true, visible: true },
  { name: "背景图", type: "背景", locked: true, visible: true },
] as const;

export const textThemes = [
  "冰蓝描边",
  "梦幻发光",
  "银白浮雕",
  "夜光渐变",
  "紫雾描边",
  "雅黑阴影",
] as const;

export const fontGroups = ["推荐", "基础", "创意", "书法", "手写", "英文"] as const;

export const wordArtPresets = [
  { title: "帅卡设计", name: "Aa剑豪" },
  { title: "帅卡设计", name: "Aa厚底黑" },
  { title: "帅卡设计", name: "AI奥运字体" },
  { title: "帅卡设计", name: "leefont蒙黑体" },
  { title: "帅卡设计", name: "也字工厂小石头" },
  { title: "帅卡设计", name: "仓耳与墨W03" },
] as const;
