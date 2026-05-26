import { fontGroups, textThemes, wordArtPresets } from "../data/editor-mock-data";

export function TextPanel() {
  return (
    <section className="editor-panel">
      <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
        <button className="text-3xl leading-none text-white/70" type="button">
          ×
        </button>
        <h2 className="text-base font-semibold text-white">字体与样式</h2>
        <button className="text-3xl leading-none text-[#5e8cff]" type="button">
          ✓
        </button>
      </div>

      <div className="no-scrollbar flex gap-6 overflow-x-auto border-b border-white/8 px-5 py-4 text-sm font-semibold text-white/48">
        {["字体", "字号", "颜色", "描边", "阴影", "主题"].map((item, index) => (
          <button className={index === 0 ? "text-white" : ""} key={item} type="button">
            {item}
          </button>
        ))}
      </div>

      <div className="space-y-5 overflow-y-auto px-4 pb-6 pt-4">
        <div>
          <div className="no-scrollbar mb-3 flex gap-5 overflow-x-auto text-sm font-medium text-white/50">
            {fontGroups.map((item, index) => (
              <button className={index === 2 ? "text-sky-200" : ""} key={item} type="button">
                {item}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-3 gap-3">
            {wordArtPresets.map((preset) => (
              <button
                className="rounded-2xl border border-white/10 bg-white/[0.08] p-3 text-left shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]"
                key={preset.name}
                type="button"
              >
                <span className="block text-lg font-black tracking-wide text-white">{preset.title}</span>
                <span className="mt-2 block truncate text-xs text-white/45">{preset.name}</span>
              </button>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-3 text-sm font-semibold text-white/72">艺术字主题</h3>
          <div className="grid grid-cols-2 gap-3">
            {textThemes.map((theme, index) => (
              <button
                className="h-16 rounded-3xl border border-white/10 bg-white/[0.07] text-sm font-semibold text-white/80 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]"
                key={theme}
                type="button"
              >
                <span
                  className={
                    index % 2 === 0
                      ? "text-sky-100 [text-shadow:0_0_16px_rgba(125,211,252,0.85)]"
                      : "bg-gradient-to-r from-fuchsia-200 to-sky-200 bg-clip-text text-transparent"
                  }
                >
                  {theme}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
