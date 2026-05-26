import { songBlocks } from "../data/songlist-editor-data";

export function SongTextBlockPanel() {
  return (
    <section className="editor-panel">
      <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
        <button className="text-3xl leading-none text-white/70" type="button">
          ×
        </button>
        <h2 className="text-base font-semibold text-white">内容</h2>
        <button className="text-3xl leading-none text-[#5e8cff]" type="button">
          ✓
        </button>
      </div>

      <div className="space-y-4 overflow-y-auto px-4 pb-6 pt-4">
        <div>
          <p className="mb-2 text-xs font-semibold text-white/45">当前选中文本区域</p>
          <textarea
            className="min-h-52 w-full resize-none rounded-[24px] border border-white/10 bg-white/[0.08] p-4 text-base leading-8 text-white outline-none shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] placeholder:text-white/25"
            defaultValue={songBlocks[0].content}
          />
        </div>
        <div className="grid grid-cols-3 gap-2">
          {["复制", "粘贴", "清空"].map((item) => (
            <button
              className="rounded-2xl border border-white/10 bg-white/[0.08] py-3 text-sm font-semibold text-white/75"
              key={item}
              type="button"
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
