import { ImageIcon } from "./editor-icons";

type PosterImagePanelProps = {
  onClose?: () => void;
};

export function PosterImagePanel({ onClose = () => undefined }: PosterImagePanelProps) {
  return (
    <section className="editor-panel">
      <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
        <button aria-label="关闭图片面板" className="text-3xl leading-none text-white/70" onClick={onClose} type="button">
          ×
        </button>
        <h2 className="text-base font-semibold text-white">图片区域</h2>
        <button className="text-3xl leading-none text-[#5e8cff]" type="button">
          ✓
        </button>
      </div>

      <div className="editor-panel-body space-y-4 px-4 pb-6 pt-5">
        <div className="grid min-h-44 place-items-center rounded-[28px] border border-dashed border-sky-300/25 bg-white/[0.06] p-5">
          <button
            className="flex items-center gap-2 rounded-2xl bg-gradient-to-r from-[#1f6fff] to-[#725cff] px-7 py-4 text-base font-semibold text-white shadow-[0_0_28px_rgba(37,99,235,0.55)]"
            type="button"
          >
            <ImageIcon className="size-5" />
            替换图片
          </button>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {["替换二维码", "替换背景", "替换人物图", "裁剪", "图片样式", "橡皮擦"].map((item) => (
            <button
              className="rounded-2xl border border-white/10 bg-white/[0.08] px-3 py-4 text-sm font-semibold text-white/75"
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
