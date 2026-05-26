"use client";

import type { EditorPanel } from "../data/editor-mock-data";
import { ImageIcon, LayersIcon, SparkIcon, TextIcon } from "./editor-icons";

export type BottomToolbarTool<T extends string = EditorPanel> = {
  key: T;
  label: string;
  icon: typeof SparkIcon;
};

type BottomToolbarProps<T extends string = EditorPanel> = {
  activePanel: T;
  onChange: (panel: T) => void;
  tools?: readonly BottomToolbarTool<T>[];
};

const defaultTools = [
  { key: "quick", label: "快捷编辑", icon: SparkIcon },
  { key: "text", label: "文字", icon: TextIcon },
  { key: "image", label: "图片", icon: ImageIcon },
  { key: "style", label: "样式", icon: SparkIcon },
  { key: "layers", label: "图层", icon: LayersIcon },
] as const;

export function BottomToolbar<T extends string = EditorPanel>({
  activePanel,
  onChange,
  tools = defaultTools as unknown as readonly BottomToolbarTool<T>[],
}: BottomToolbarProps<T>) {
  return (
    <nav className="fixed inset-x-0 bottom-0 z-40 mx-auto w-full max-w-md px-3 pb-[calc(env(safe-area-inset-bottom)+10px)]">
      <div
        className="grid gap-1 rounded-[28px] border border-white/10 bg-black/60 p-2 shadow-[0_-18px_60px_rgba(37,99,235,0.22)] backdrop-blur-2xl"
        style={{ gridTemplateColumns: `repeat(${tools.length}, minmax(0, 1fr))` }}
      >
        {tools.map((tool) => {
          const Icon = tool.icon;
          const active = activePanel === tool.key;

          return (
            <button
              className={`flex h-14 flex-col items-center justify-center gap-1 rounded-2xl text-[11px] font-medium transition ${
                active
                  ? "bg-gradient-to-b from-white/18 to-white/8 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_0_22px_rgba(37,99,235,0.5)]"
                  : "text-white/50"
              }`}
              key={tool.key}
              onClick={() => onChange(tool.key)}
              type="button"
            >
              <Icon className="size-5" />
              <span>{tool.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
