type TemplateInfoProps = {
  title: string;
  views: string;
  uses: string;
  vip: boolean;
};

export function TemplateInfo({ title, views, uses, vip }: TemplateInfoProps) {
  return (
    <section className="px-4 pt-1">
      <div className="rounded-[26px] border border-white/10 bg-white/[0.065] p-4 shadow-[0_18px_60px_rgba(0,0,0,0.34)] backdrop-blur-xl">
        <div className="flex items-start justify-between gap-3">
          <h1 className="text-2xl font-semibold leading-tight text-white">{title}</h1>
          {vip ? (
            <span className="shrink-0 rounded-full bg-amber-200 px-3 py-1 text-xs font-black text-black">
              VIP
            </span>
          ) : null}
        </div>
        <div className="mt-4 grid grid-cols-2 gap-3">
          <div className="rounded-2xl bg-black/22 px-3 py-2">
            <p className="text-xs text-white/40">浏览量</p>
            <p className="mt-1 text-base font-semibold text-white">{views}</p>
          </div>
          <div className="rounded-2xl bg-black/22 px-3 py-2">
            <p className="text-xs text-white/40">使用量</p>
            <p className="mt-1 text-base font-semibold text-white">{uses}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
