import { textThemes } from "../data/editor-mock-data";

type StylePanelProps = {
  onClose?: () => void;
};

export function StylePanel({ onClose = () => undefined }: StylePanelProps) {
  return (
    <section className="editor-panel">
      <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
        <button aria-label="关闭样式面板" className="text-3xl leading-none text-white/70" onClick={onClose} type="button">
          ×
        </button>
        <h2 className="text-base font-semibold text-white">样式主题</h2>
        <button className="text-3xl leading-none text-[#5e8cff]" type="button">
          ✓
        </button>
      </div>

      <div className="editor-panel-body space-y-4 px-4 pb-6 pt-5">
        <div className="no-scrollbar flex gap-3 overflow-x-auto text-sm font-semibold text-white/50">
          {["内容", "主题", "颜色", "字体", "样式"].map((item, index) => (
            <button
              className={`shrink-0 rounded-full px-4 py-2 ${index === 1 ? "bg-sky-400/18 text-sky-100 shadow-[0_0_18px_rgba(56,189,248,0.35)]" : "bg-white/8"}`}
              key={item}
              type="button"
            >
              {item}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-3">
          {textThemes.concat(textThemes).map((theme, index) => (
            <button
              className="h-20 rounded-3xl border border-white/10 bg-white/[0.07] text-sm font-semibold text-white/85 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]"
              key={`${theme}-${index}`}
              type="button"
            >
              <span className="text-sky-100 [text-shadow:0_0_18px_rgba(147,197,253,0.9)]">推荐主题</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
