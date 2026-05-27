import { styleControls } from "../data/songlist-editor-data";

type SongStylePanelProps = {
  onClose?: () => void;
};

export function SongStylePanel({ onClose = () => undefined }: SongStylePanelProps) {
  return (
    <section className="editor-panel">
      <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
        <button aria-label="关闭歌单样式面板" className="text-3xl leading-none text-white/70" onClick={onClose} type="button">
          ×
        </button>
        <h2 className="text-base font-semibold text-white">歌单样式</h2>
        <button className="text-3xl leading-none text-[#5e8cff]" type="button">
          ✓
        </button>
      </div>

      <div className="editor-panel-body space-y-4 px-4 pb-6 pt-4">
        <div className="no-scrollbar flex gap-2 overflow-x-auto">
          {styleControls.map((item, index) => (
            <button
              className={`shrink-0 rounded-full px-4 py-2 text-sm font-semibold ${
                index === 4 ? "bg-sky-400/18 text-sky-100 shadow-[0_0_18px_rgba(56,189,248,0.34)]" : "bg-white/8 text-white/52"
              }`}
              key={item}
              type="button"
            >
              {item}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-3">
          {[
            ["行距", "1.35"],
            ["列距", "24px"],
            ["多列排版", "4 列"],
            ["对齐", "居中"],
          ].map(([label, value]) => (
            <div className="rounded-3xl border border-white/10 bg-white/[0.08] p-4" key={label}>
              <p className="text-xs font-semibold text-white/42">{label}</p>
              <p className="mt-2 text-lg font-semibold text-white">{value}</p>
              <div className="mt-3 h-1.5 rounded-full bg-white/10">
                <div className="h-full w-2/3 rounded-full bg-gradient-to-r from-sky-300 to-indigo-400" />
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-4 gap-2">
          {["左", "中", "右", "分散"].map((item, index) => (
            <button
              className={`rounded-2xl border border-white/10 py-3 text-sm font-semibold ${index === 1 ? "bg-white/16 text-white" : "bg-white/[0.06] text-white/48"}`}
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
