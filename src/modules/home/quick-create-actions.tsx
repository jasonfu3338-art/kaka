type QuickCreateActionsProps = {
  actions: Array<{
    label: string;
    mark: string;
  }>;
};

export function QuickCreateActions({ actions }: QuickCreateActionsProps) {
  return (
    <section className="px-4 pt-4">
      <div className="rounded-[26px] border border-white/10 bg-white/[0.06] p-3 shadow-[0_18px_55px_rgba(0,0,0,0.32)] backdrop-blur-2xl">
        <button
          className="mb-3 flex h-24 w-full items-center justify-center gap-3 rounded-[22px] border border-dashed border-cyan-200/30 bg-[linear-gradient(135deg,rgba(34,211,238,0.13),rgba(255,255,255,0.06),rgba(244,114,182,0.12))] text-base font-semibold text-white"
          type="button"
        >
          <span className="grid size-10 place-items-center rounded-2xl bg-cyan-300 text-2xl font-light text-black shadow-[0_0_32px_rgba(103,232,249,0.65)]">
            +
          </span>
          创建设计
        </button>
        <div className="grid grid-cols-4 gap-2">
          {actions.map((action) => (
            <button
              className="flex min-h-20 flex-col items-center justify-center gap-2 rounded-2xl bg-black/22 text-xs font-medium text-white/70"
              key={action.label}
              type="button"
            >
              <span className="grid size-8 place-items-center rounded-xl border border-white/10 bg-white/[0.08] text-base text-cyan-100">
                {action.mark}
              </span>
              <span className="leading-tight">{action.label}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
