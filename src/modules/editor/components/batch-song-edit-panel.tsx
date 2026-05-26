import { songBlocks } from "../data/songlist-editor-data";

export function BatchSongEditPanel() {
  return (
    <section className="editor-panel">
      <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
        <button className="text-3xl leading-none text-white/70" type="button">
          ×
        </button>
        <h2 className="text-base font-semibold text-white">批量编辑</h2>
        <button className="text-3xl leading-none text-[#5e8cff]" type="button">
          ✓
        </button>
      </div>

      <div className="space-y-4 overflow-y-auto px-4 pb-6 pt-4">
        <div className="grid grid-cols-3 gap-2">
          {["批量导入", "一键清空", "一键格式化"].map((item, index) => (
            <button
              className={`rounded-2xl px-2 py-3 text-xs font-semibold ${
                index === 0
                  ? "bg-gradient-to-r from-[#1f6fff] to-[#725cff] text-white shadow-[0_0_22px_rgba(37,99,235,0.42)]"
                  : "border border-white/10 bg-white/[0.08] text-white/70"
              }`}
              key={item}
              type="button"
            >
              {item}
            </button>
          ))}
        </div>

        <div className="space-y-3">
          {songBlocks.map((block, index) => (
            <button
              className="grid w-full grid-cols-[44px_1fr] gap-3 rounded-3xl border border-white/10 bg-white/[0.08] p-3 text-left shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]"
              key={block.id}
              type="button"
            >
              <span className="grid size-11 place-items-center rounded-2xl bg-white/10 text-sm font-semibold text-sky-100">
                {index + 1}
              </span>
              <span className="min-w-0">
                <span className="block text-sm font-semibold text-white">{block.title}</span>
                <span className="mt-1 line-clamp-2 block text-xs leading-5 text-white/42">{block.content}</span>
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
