export type TemplateLayerType = "text" | "image" | "decoration";

export type EditableFieldType = "text" | "textarea" | "image";

export type EditorTemplateType = "card" | "voice-room" | "songlist" | "poster";

export type TemplateCanvas = {
  width: number;
  height: number;
  background: string;
  backgroundColor?: string;
  previewRatio?: string;
};

export type TemplateLayerBase = {
  id: string;
  name?: string;
  type: TemplateLayerType;
  x: number;
  y: number;
  width: number;
  height: number;
  rotation: number;
  opacity: number;
  locked: boolean;
  visible: boolean;
  zIndex?: number;
};

export type TextStroke = {
  color: string;
  width: number;
};

export type TextShadow = {
  color: string;
  blur: number;
  offsetX: number;
  offsetY: number;
};

export type TextLayer = TemplateLayerBase & {
  type: "text";
  text: string;
  fontFamily: string;
  fontSize: number;
  fontWeight?: number | string;
  color: string;
  stroke?: TextStroke;
  shadow?: TextShadow;
  lineHeight?: number;
  align?: "left" | "center" | "right";
  backgroundColor?: string;
  borderColor?: string;
  radius?: number;
};

export type ImageLayer = TemplateLayerBase & {
  type: "image";
  src: string;
  alt?: string;
  objectFit?: "cover" | "contain";
  radius?: number;
};

export type DecorationLayer = TemplateLayerBase & {
  type: "decoration";
  variant?: "glow" | "border" | "panel" | "badge";
  color: string;
  radius?: number;
  blur?: number;
};

export type TemplateLayer = TextLayer | ImageLayer | DecorationLayer;

export type EditableField = {
  key: string;
  label: string;
  type: EditableFieldType;
  layerId: string;
  placeholder: string;
  value: string;
};

export type EditorTemplateJson = {
  id: string;
  name: string;
  type: EditorTemplateType;
  category: string;
  scene: EditorTemplateType;
  canvas: TemplateCanvas;
  layers: TemplateLayer[];
  editableFields: EditableField[];
};
