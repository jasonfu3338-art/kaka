"use client";

import { useEditorStore } from "@/stores/editor-store";
import type { EditableField } from "../types/template";
import { ImageIcon, TextIcon } from "./editor-icons";

const emptyFields: EditableField[] = [];

const imageOptions: Record<string, string[]> = {
  avatar: ["/mock/templates/guanming-demo.JPG", "/mock/templates/ting-fengmian.JPG"],
  background: ["/mock/templates/guange-demo.JPG", "/mock/templates/detail-guange.PNG", "/mock/templates/poster-demo.JPG"],
};

function getImageLabel(field: EditableField) {
  if (!field.value) {
    return field.placeholder;
  }

  const parts = field.value.split("/");

  return parts[parts.length - 1] || field.value;
}

function getNextImageValue(field: EditableField) {
  const options = imageOptions[field.key] ?? [field.value];
  const currentIndex = options.indexOf(field.value);
  const nextIndex = currentIndex >= 0 ? (currentIndex + 1) % options.length : 0;

  return options[nextIndex] ?? field.value;
}

type QuickEditPanelProps = {
  onClose: () => void;
};

export function QuickEditPanel({ onClose }: QuickEditPanelProps) {
  const fields = useEditorStore((state) => state.template?.editableFields) ?? emptyFields;
  const updateEditableField = useEditorStore((state) => state.updateEditableField);

  return (
    <section className="editor-panel">
      <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
        <button aria-label="关闭快捷编辑面板" className="text-3xl leading-none text-white/70" onClick={onClose} type="button">
          ×
        </button>
        <h2 className="text-base font-semibold text-white">快捷编辑</h2>
        <button className="text-3xl leading-none text-[#5e8cff]" type="button">
          ✓
        </button>
      </div>

      <div className="editor-panel-body space-y-3 px-4 pb-6 pt-4">
        {fields.map((field) => (
          <div
            className="rounded-3xl border border-white/10 bg-white/[0.08] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]"
            key={field.key}
          >
            <div className="mb-3 flex items-center justify-between gap-3">
              <span className="text-sm font-semibold text-white/72">{field.label}</span>
              {field.type === "image" ? (
                <ImageIcon className="size-5 text-white/42" />
              ) : (
                <TextIcon className="size-5 text-white/42" />
              )}
            </div>

            {field.type === "image" ? (
              <button
                className="flex min-h-14 w-full items-center justify-center gap-2 rounded-2xl border border-dashed border-sky-300/30 bg-sky-300/10 px-3 py-3 text-sm font-semibold text-sky-100"
                onClick={() => updateEditableField(field.key, getNextImageValue(field))}
                type="button"
              >
                <ImageIcon className="size-5" />
                {getImageLabel(field)}
              </button>
            ) : field.type === "textarea" ? (
              <textarea
                className="min-h-24 w-full resize-none rounded-2xl border border-white/8 bg-black/18 p-3 text-sm leading-6 text-white outline-none placeholder:text-white/25"
                onChange={(event) => updateEditableField(field.key, event.target.value)}
                placeholder={field.placeholder}
                value={field.value}
              />
            ) : (
              <input
                className="h-12 w-full rounded-2xl border border-white/8 bg-black/18 px-3 text-sm font-semibold text-white outline-none placeholder:text-white/25"
                onChange={(event) => updateEditableField(field.key, event.target.value)}
                placeholder={field.placeholder}
                value={field.value}
              />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
