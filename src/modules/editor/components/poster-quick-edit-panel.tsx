import { posterQuickFields } from "../data/poster-editor-data";
import { ImageIcon, TextIcon } from "./editor-icons";

export function PosterQuickEditPanel() {
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

      <div className="max-h-[calc(min(46dvh,420px)-64px)] space-y-3 overflow-y-auto px-4 pb-6 pt-4">
        {posterQuickFields.map((field) => (
          <div
            className="rounded-3xl border border-white/10 bg-white/[0.08] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]"
            key={field.label}
          >
            <div className="mb-3 flex items-center justify-between gap-3">
              <p className="text-sm font-semibold text-white/72">{field.label}</p>
              {field.type === "image" ? <ImageIcon className="size-5 text-white/42" /> : <TextIcon className="size-5 text-white/42" />}
            </div>

            {field.type === "image" ? (
              <button
                className="flex min-h-14 w-full items-center justify-center gap-2 rounded-2xl border border-dashed border-sky-300/30 bg-sky-300/10 px-3 py-3 text-sm font-semibold text-sky-100"
                type="button"
              >
                <ImageIcon className="size-5" />
                {field.value}
              </button>
            ) : field.type === "textarea" ? (
              <textarea
                className="min-h-32 w-full resize-none rounded-2xl border border-white/8 bg-black/18 p-3 text-sm leading-6 text-white outline-none placeholder:text-white/25"
                defaultValue={field.value}
              />
            ) : (
              <input
                className="h-12 w-full rounded-2xl border border-white/8 bg-black/18 px-3 text-sm font-semibold text-white outline-none placeholder:text-white/25"
                defaultValue={field.value}
              />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
