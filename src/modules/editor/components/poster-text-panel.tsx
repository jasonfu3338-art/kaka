import { posterStyleControls } from "../data/poster-editor-data";

type PosterTextPanelProps = {
  onClose?: () => void;
};

export function PosterTextPanel({ onClose = () => undefined }: PosterTextPanelProps) {
  return (
    <section className="editor-panel">
      <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
        <button aria-label="关闭文字面板" className="text-3xl leading-none text-white/70" onClick={onClose} type="button">
          ×
        </button>
        <h2 className="text-base font-semibold text-white">文字块编辑</h2>
        <button className="text-3xl leading-none text-[#5e8cff]" type="button">
          ✓
        </button>
      </div>

      <div className="editor-panel-body space-y-4 px-4 pb-6 pt-4">
        <textarea
          className="min-h-32 w-full resize-none rounded-[24px] border border-white/10 bg-white/[0.08] p-4 text-base leading-7 text-white outline-none shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]"
          defaultValue={"收光奖励\n1.0 奖励 2\n2.0 奖励 6\n每小时截图报备"}
        />
        <div className="no-scrollbar flex gap-2 overflow-x-auto">
          {posterStyleControls.map((item, index) => (
            <button
              className={`shrink-0 rounded-full px-4 py-2 text-sm font-semibold ${
                index === 0 ? "bg-sky-400/18 text-sky-100 shadow-[0_0_18px_rgba(56,189,248,0.34)]" : "bg-white/8 text-white/52"
              }`}
              key={item}
              type="button"
            >
              {item}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-3 gap-3">
          {["标题", "福利", "规则", "二维码说明", "联系方式", "底部版权"].map((item) => (
            <button className="rounded-2xl border border-white/10 bg-white/[0.08] py-4 text-sm font-semibold text-white/75" key={item} type="button">
              {item}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
