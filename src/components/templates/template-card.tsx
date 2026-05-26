export type TemplateItem = {
  id: string;
  title: string;
  category: string;
  views: string;
  vip?: boolean;
  height: "tall" | "medium" | "short";
  accent: string;
};

const heightClass = {
  tall: "aspect-[3/4]",
  medium: "aspect-[4/5]",
  short: "aspect-[1/1]",
};

type TemplateCardProps = {
  template: TemplateItem;
};

export function TemplateCard({ template }: TemplateCardProps) {
  return (
    <article className="break-inside-avoid overflow-hidden rounded-[22px] border border-white/10 bg-white/[0.07] shadow-[0_18px_50px_rgba(0,0,0,0.36)] backdrop-blur-xl">
      <div className={`relative ${heightClass[template.height]} overflow-hidden ${template.accent}`}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_28%_18%,rgba(255,255,255,0.75),transparent_24%),linear-gradient(145deg,transparent,rgba(0,0,0,0.48))]" />
        <div className="absolute inset-x-4 bottom-4 rounded-2xl border border-white/15 bg-black/22 p-3 backdrop-blur-md">
          <p className="text-xs uppercase tracking-[0.28em] text-white/50">{template.category}</p>
          <p className="mt-1 text-lg font-semibold text-white">{template.title}</p>
        </div>
        {template.vip ? (
          <span className="absolute left-3 top-3 rounded-full bg-amber-200 px-3 py-1 text-xs font-black text-black shadow-[0_0_24px_rgba(251,191,36,0.75)]">
            VIP
          </span>
        ) : null}
      </div>
      <div className="flex items-center justify-between px-3 py-3">
        <h3 className="min-w-0 truncate text-sm font-medium text-white/88">{template.title}</h3>
        <span className="shrink-0 text-xs text-white/42">{template.views}</span>
      </div>
    </article>
  );
}
