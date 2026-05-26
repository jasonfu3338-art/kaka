import { quickFields } from "../data/editor-mock-data";
import { ImageIcon, TextIcon } from "./editor-icons";

export function QuickEditPanel() {
  return (
    <section className="editor-panel">
      <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
        <button className="text-3xl leading-none text-white/70" type="button">
          ×
        </button>
        <h2 className="text-base font-semibold text-white">快捷编辑</h2>
        <button className="text-3xl leading-none text-[#5e8cff]" type="button">
          ✓
        </button>
      </div>

      <div className="space-y-3 overflow-y-auto px-4 pb-6 pt-4">
        {quickFields.map((field) => (
          <label
            className="flex min-h-16 items-center gap-3 rounded-3xl border border-white/10 bg-white/[0.08] px-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]"
            key={field.label}
          >
            <span className="w-16 text-sm font-semibold text-white/70">{field.label}</span>
            {field.type === "image" ? (
              <button
                className="flex flex-1 items-center justify-center gap-2 rounded-2xl border border-dashed border-sky-300/30 bg-sky-300/10 px-3 py-3 text-sm font-medium text-sky-100"
                type="button"
              >
                <ImageIcon className="size-5" />
                {field.value}
              </button>
            ) : field.label === "签名" ? (
              <textarea
                className="min-h-20 flex-1 resize-none border-0 bg-transparent py-4 text-sm text-white outline-none placeholder:text-white/25"
                defaultValue={field.value}
              />
            ) : (
              <input
                className="h-12 flex-1 border-0 bg-transparent text-sm text-white outline-none placeholder:text-white/25"
                defaultValue={field.value}
              />
            )}
            {field.type !== "image" && <TextIcon className="size-5 text-white/40" />}
          </label>
        ))}
      </div>
    </section>
  );
}
