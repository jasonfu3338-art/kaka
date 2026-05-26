type SongPlaceholderPanelProps = {
  title: string;
  description: string;
  actions: string[];
};

export function SongPlaceholderPanel({ title, description, actions }: SongPlaceholderPanelProps) {
  return (
    <section className="editor-panel">
      <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
        <button className="text-3xl leading-none text-white/70" type="button">
          ×
        </button>
        <h2 className="text-base font-semibold text-white">{title}</h2>
        <button className="text-3xl leading-none text-[#5e8cff]" type="button">
          ✓
        </button>
      </div>
      <div className="space-y-4 px-4 pb-6 pt-5">
        <div className="rounded-[28px] border border-white/10 bg-white/[0.08] p-5">
          <p className="text-sm leading-6 text-white/58">{description}</p>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {actions.map((action) => (
            <button
              className="rounded-2xl border border-white/10 bg-white/[0.08] px-4 py-4 text-sm font-semibold text-white/75"
              key={action}
              type="button"
            >
              {action}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
