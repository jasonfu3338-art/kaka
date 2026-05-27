import { ImageIcon } from "./editor-icons";

type ImagePanelProps = {
  onClose?: () => void;
};

export function ImagePanel({ onClose = () => undefined }: ImagePanelProps) {
  return (
    <section className="editor-panel">
      <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
        <button aria-label="关闭图片面板" className="text-3xl leading-none text-white/70" onClick={onClose} type="button">
          ×
        </button>
        <h2 className="text-base font-semibold text-white">图片编辑</h2>
        <button className="text-3xl leading-none text-[#5e8cff]" type="button">
          ✓
        </button>
      </div>

      <div className="editor-panel-body space-y-4 px-4 pb-6 pt-5">
        <div className="grid grid-cols-2 gap-3 text-sm font-semibold">
          <button className="rounded-2xl bg-white/12 py-3 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]" type="button">
            相册上传
          </button>
          <button className="rounded-2xl bg-white/6 py-3 text-white/50" type="button">
            我的素材
          </button>
        </div>

        <div className="grid min-h-56 place-items-center rounded-[28px] border border-dashed border-sky-300/25 bg-white/[0.06] p-5">
          <button
            className="flex items-center gap-2 rounded-2xl bg-gradient-to-r from-[#1f6fff] to-[#725cff] px-7 py-4 text-base font-semibold text-white shadow-[0_0_28px_rgba(37,99,235,0.55)]"
            type="button"
          >
            <ImageIcon className="size-5" />
            替换图片
          </button>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {["裁剪", "适应画布", "替换头像", "替换背景"].map((item) => (
            <button
              className="rounded-2xl border border-white/10 bg-white/[0.08] px-4 py-4 text-sm font-semibold text-white/75"
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
