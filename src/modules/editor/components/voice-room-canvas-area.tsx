"use client";

import Image from "next/image";
import {
  type VoiceRoomTemplateType,
  voiceRoomTemplateTypes,
} from "../data/voice-room-editor-data";
import type { EditorTemplateJson, TemplateLayer } from "../types/template";

type VoiceRoomCanvasAreaProps = {
  activeType: VoiceRoomTemplateType;
  fieldValues: Record<string, string>;
  onTypeChange: (type: VoiceRoomTemplateType) => void;
  template: EditorTemplateJson;
};

function getLayerValue(layer: TemplateLayer, template: EditorTemplateJson, fieldValues: Record<string, string>) {
  const editableField = template.editableFields.find((field) => field.layerId === layer.id);

  if (!editableField) {
    return undefined;
  }

  return fieldValues[editableField.key] ?? editableField.value;
}

function getLayerStyle(layer: TemplateLayer, template: EditorTemplateJson): React.CSSProperties {
  return {
    height: `${(layer.height / template.canvas.height) * 100}%`,
    left: `${(layer.x / template.canvas.width) * 100}%`,
    opacity: layer.opacity ?? 1,
    top: `${(layer.y / template.canvas.height) * 100}%`,
    width: `${(layer.width / template.canvas.width) * 100}%`,
    zIndex: layer.zIndex,
  };
}

function TemplateLayerView({
  fieldValues,
  layer,
  template,
}: {
  fieldValues: Record<string, string>;
  layer: TemplateLayer;
  template: EditorTemplateJson;
}) {
  if (layer.visible === false) {
    return null;
  }

  const value = getLayerValue(layer, template, fieldValues);
  const layerStyle = getLayerStyle(layer, template);

  if (layer.type === "image") {
    return (
      <div className="absolute overflow-hidden" style={{ ...layerStyle, borderRadius: layer.radius }}>
        <Image
          alt={layer.alt ?? layer.name ?? layer.id}
          className={layer.objectFit === "contain" ? "object-contain" : "object-cover"}
          fill
          priority={layer.id === "background"}
          sizes="360px"
          src={value || layer.src}
        />
      </div>
    );
  }

  if (layer.type === "decoration") {
    const baseStyle: React.CSSProperties = {
      ...layerStyle,
      background: layer.color,
      borderRadius: layer.radius,
    };

    if (layer.variant === "glow") {
      baseStyle.filter = `blur(${layer.blur ?? 24}px)`;
    }

    if (layer.variant === "border") {
      baseStyle.background = "transparent";
      baseStyle.border = `1px solid ${layer.color}`;
    }

    if (layer.variant === "panel") {
      baseStyle.backdropFilter = "blur(12px)";
      baseStyle.border = "1px solid rgb(255 255 255 / 0.18)";
      baseStyle.boxShadow = "0 0 24px rgb(15 23 42 / 0.45)";
    }

    return <div className="absolute" style={baseStyle} />;
  }

  return (
    <div
      className="absolute whitespace-pre-line px-[1.1cqw] py-[0.6cqw] text-pretty"
      style={{
        ...layerStyle,
        alignItems: layer.align === "center" ? "center" : layer.align === "right" ? "flex-end" : "flex-start",
        background: layer.backgroundColor,
        border: layer.borderColor ? `2px solid ${layer.borderColor}` : undefined,
        borderRadius: layer.radius,
        color: layer.color,
        display: "flex",
        flexDirection: "column",
        fontSize: `${(layer.fontSize / template.canvas.width) * 100}cqw`,
        fontWeight: layer.fontWeight,
        justifyContent: "center",
        lineHeight: layer.lineHeight ?? 1.15,
        textAlign: layer.align,
        textShadow: "0 0 18px rgb(0 0 0 / 0.34)",
      }}
    >
      {value || layer.text}
    </div>
  );
}

export function VoiceRoomCanvasArea({ activeType, fieldValues, onTypeChange, template }: VoiceRoomCanvasAreaProps) {
  const activeTemplate = voiceRoomTemplateTypes.find((template) => template.key === activeType) ?? voiceRoomTemplateTypes[0];

  return (
    <section className="relative flex min-h-[calc(100dvh-176px)] items-center justify-center px-4 pb-28 pt-28">
      <div className="absolute inset-x-0 top-16 h-72 bg-[radial-gradient(circle_at_50%_38%,rgba(99,102,241,0.3),transparent_62%)] blur-2xl" />

      <div className="relative w-full max-w-[360px]">
        <div className="mb-3 flex rounded-3xl border border-white/10 bg-black/40 p-1 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-2xl">
          {voiceRoomTemplateTypes.map((template) => (
            <button
              className={`h-10 flex-1 rounded-2xl text-sm font-semibold transition ${
                activeType === template.key
                  ? "bg-sky-400/18 text-sky-100 shadow-[0_0_18px_rgba(56,189,248,0.34)]"
                  : "text-white/45"
              }`}
              key={template.key}
              onClick={() => onTypeChange(template.key)}
              type="button"
            >
              {template.label}
            </button>
          ))}
        </div>

        <div className="absolute -inset-3 rounded-[34px] bg-gradient-to-br from-sky-400/20 via-indigo-500/14 to-fuchsia-400/16 blur-xl" />
        <div
          className={`relative w-full overflow-hidden rounded-[28px] border border-white/14 bg-white/[0.04] shadow-[0_28px_90px_rgba(0,0,0,0.72),0_0_42px_rgba(58,147,255,0.24)] ${activeTemplate.ratio}`}
          style={{
            backgroundColor: template.canvas.backgroundColor,
            containerType: "inline-size",
          }}
        >
          {[...template.layers]
            .sort((a, b) => (a.zIndex ?? 0) - (b.zIndex ?? 0))
            .map((layer) => (
              <TemplateLayerView fieldValues={fieldValues} key={layer.id} layer={layer} template={template} />
            ))}
          <div className="pointer-events-none absolute inset-0 z-20 bg-[linear-gradient(180deg,rgba(2,6,23,0.08),transparent_34%,rgba(2,6,23,0.34))]" />
        </div>
      </div>
    </section>
  );
}
