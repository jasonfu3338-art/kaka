import { Canvas, FabricImage, Rect, Shadow, Textbox } from "fabric";
import type { EditorTemplateJson, ImageLayer, TemplateLayer, TextLayer } from "../types/template";

function getLayerOrder(layer: TemplateLayer) {
  return layer.zIndex ?? 0;
}

function getShadow(layer: TextLayer) {
  if (!layer.shadow) {
    return undefined;
  }

  return new Shadow({
    blur: layer.shadow.blur,
    color: layer.shadow.color,
    offsetX: layer.shadow.offsetX,
    offsetY: layer.shadow.offsetY,
  });
}

function renderTextLayer(canvas: Canvas, layer: TextLayer) {
  const text = new Textbox(layer.text, {
    angle: layer.rotation,
    evented: false,
    fill: layer.color,
    fontFamily: layer.fontFamily,
    fontSize: layer.fontSize,
    fontWeight: layer.fontWeight,
    left: layer.x,
    lineHeight: layer.lineHeight ?? 1.16,
    opacity: layer.opacity,
    selectable: false,
    shadow: getShadow(layer),
    stroke: layer.stroke?.color,
    strokeWidth: layer.stroke?.width,
    textAlign: layer.align ?? "left",
    top: layer.y,
    visible: layer.visible,
    width: layer.width,
  });

  canvas.add(text);
}

function getImagePlacement(layer: ImageLayer, image: FabricImage) {
  const imageWidth = image.width || layer.width;
  const imageHeight = image.height || layer.height;
  const fit = layer.objectFit ?? "cover";
  const scale =
    fit === "contain"
      ? Math.min(layer.width / imageWidth, layer.height / imageHeight)
      : Math.max(layer.width / imageWidth, layer.height / imageHeight);
  const renderedWidth = imageWidth * scale;
  const renderedHeight = imageHeight * scale;

  return {
    left: layer.x + (layer.width - renderedWidth) / 2,
    scale,
    top: layer.y + (layer.height - renderedHeight) / 2,
  };
}

async function renderImageLayer(canvas: Canvas, layer: ImageLayer) {
  const image = await FabricImage.fromURL(layer.src);
  const placement = getImagePlacement(layer, image);

  image.set({
    angle: layer.rotation,
    clipPath:
      layer.objectFit === "contain"
        ? undefined
        : new Rect({
            absolutePositioned: true,
            height: layer.height,
            left: layer.x,
            rx: layer.radius ?? 0,
            ry: layer.radius ?? 0,
            top: layer.y,
            width: layer.width,
          }),
    evented: false,
    left: placement.left,
    opacity: layer.opacity,
    scaleX: placement.scale,
    scaleY: placement.scale,
    selectable: false,
    top: placement.top,
    visible: layer.visible,
  });

  canvas.add(image);
}

function renderDecorationLayer(canvas: Canvas, layer: Extract<TemplateLayer, { type: "decoration" }>) {
  const isBorder = layer.variant === "border";
  const object = new Rect({
    angle: layer.rotation,
    evented: false,
    fill: isBorder ? "transparent" : layer.color,
    height: layer.height,
    left: layer.x,
    opacity: layer.opacity,
    rx: layer.radius ?? 0,
    ry: layer.radius ?? 0,
    selectable: false,
    stroke: isBorder ? layer.color : undefined,
    strokeWidth: isBorder ? 2 : 0,
    top: layer.y,
    visible: layer.visible,
    width: layer.width,
  });

  if (layer.variant === "glow") {
    object.set(
      "shadow",
      new Shadow({
        blur: layer.blur ?? 24,
        color: layer.color,
      }),
    );
  }

  canvas.add(object);
}

async function renderLayer(canvas: Canvas, layer: TemplateLayer) {
  if (layer.type === "text") {
    renderTextLayer(canvas, layer);
    return;
  }

  if (layer.type === "image") {
    await renderImageLayer(canvas, layer);
    return;
  }

  renderDecorationLayer(canvas, layer);
}

export async function renderTemplateToFabric(canvas: Canvas, template: EditorTemplateJson) {
  canvas.clear();
  canvas.setDimensions({
    height: template.canvas.height,
    width: template.canvas.width,
  });
  canvas.backgroundColor = template.canvas.background;

  const layers = [...template.layers].sort((a, b) => getLayerOrder(a) - getLayerOrder(b));

  for (const layer of layers) {
    await renderLayer(canvas, layer);
  }

  canvas.renderAll();
}
