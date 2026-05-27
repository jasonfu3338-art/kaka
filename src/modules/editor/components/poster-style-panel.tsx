import { posterStyleControls } from "../data/poster-editor-data";

type PosterStylePanelProps = {
  onClose?: () => void;
};

export function PosterStylePanel({ onClose = () => undefined }: PosterStylePanelProps) {
  return (
    <section className="editor-panel">
      <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
        <button aria-label="关闭样式面板" className="text-3xl leading-none text-white/70" onClick={onClose} type="button">
          ×
        </button>
        <h2 className="text-base font-semibold text-white">样式</h2>
        <button className="text-3xl leading-none text-[#5e8cff]" type="button">
          ✓
        </button>
      </div>

      <div className="editor-panel-body space-y-4 px-4 pb-6 pt-4">
        <div className="no-scrollbar flex gap-2 overflow-x-auto">
          {posterStyleControls.map((item, index) => (
            <button
              className={`shrink-0 rounded-full px-4 py-2 text-sm font-semibold ${
                index === 5 ? "bg-sky-400/18 text-sky-100 shadow-[0_0_18px_rgba(56,189,248,0.34)]" : "bg-white/8 text-white/52"
              }`}
              key={item}
              type="button"
            >
              {item}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-3">
          {["暗黑银灰", "白金发光", "黑曜石", "哥特边框", "柔光阴影", "规则排版"].map((item, index) => (
            <button
              className="h-20 rounded-3xl border border-white/10 bg-white/[0.07] text-sm font-semibold text-white/80 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]"
              key={item}
              type="button"
            >
              <span className={index % 2 === 0 ? "text-white [text-shadow:0_0_16px_rgba(255,255,255,0.8)]" : "text-sky-100"}>
                {item}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
