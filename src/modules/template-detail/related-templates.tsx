import Image from "next/image";

type RelatedTemplate = {
  id: string;
  imageSrc: string;
  title: string;
  vip: boolean;
};

type RelatedTemplatesProps = {
  templates: RelatedTemplate[];
};

export function RelatedTemplates({ templates }: RelatedTemplatesProps) {
  return (
    <section className="relative px-4 pb-30 pt-8">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-36 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.14),transparent_32%),radial-gradient(circle_at_80%_0%,rgba(168,85,247,0.13),transparent_34%)] blur-xl" />
      <h2 className="text-xl font-semibold text-white">相关推荐</h2>
      <div className="no-scrollbar -mx-4 mt-3 flex gap-3 overflow-x-auto px-4">
        {templates.map((template) => (
          <article
            className="relative aspect-[3/4] w-34 shrink-0 overflow-hidden rounded-[22px] border border-cyan-100/[0.14] bg-white/[0.06] shadow-[0_18px_45px_rgba(0,0,0,0.42),0_0_22px_rgba(34,211,238,0.08)]"
            key={template.id}
          >
            <Image alt={template.title} className="object-cover" fill sizes="136px" src={template.imageSrc} />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.04),transparent_38%,rgba(0,0,0,0.82))]" />
            {template.vip ? (
              <span className="absolute left-2 top-2 rounded-full bg-amber-200 px-2.5 py-1 text-[10px] font-black text-black">
                VIP
              </span>
            ) : null}
            <h3 className="absolute inset-x-2 bottom-2 rounded-2xl border border-white/[0.08] bg-black/42 px-2 py-2 text-xs font-semibold text-white backdrop-blur-md">
              {template.title}
            </h3>
          </article>
        ))}
      </div>
    </section>
  );
}
