import Image from "next/image";

type HomeRecommendSectionProps = {
  groups: Array<{
    layout: string;
    title: string;
    items: Array<{
      imageSrc: string;
      title: string;
    }>;
  }>;
};

export function HomeRecommendSection({ groups }: HomeRecommendSectionProps) {
  return (
    <section className="space-y-8 px-4 pt-8">
      {groups.map((group) => (
        <div key={group.title}>
          <div className="mb-3 flex items-center justify-between">
            <h2 className="text-xl font-semibold text-white">{group.title}</h2>
            <button
              className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1.5 text-sm font-medium text-white/52"
              type="button"
            >
              更多
            </button>
          </div>
          <div className="no-scrollbar -mx-4 flex gap-3 overflow-x-auto px-4">
            {group.items.map((item) => (
              <article
                className={`relative shrink-0 overflow-hidden rounded-[24px] border border-cyan-200/18 bg-white/[0.04] shadow-[0_18px_48px_rgba(0,0,0,0.42),0_0_24px_rgba(34,211,238,0.08)] ${
                  group.layout === "portrait" ? "aspect-[3/4] w-36" : "aspect-square w-44"
                }`}
                key={item.title}
              >
                <Image
                  alt={item.title}
                  className="object-cover"
                  fill
                  priority={group.items[0] === item}
                  sizes={group.layout === "portrait" ? "144px" : "176px"}
                  src={item.imageSrc}
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.04),rgba(0,0,0,0.26)_46%,rgba(0,0,0,0.76))]" />
                <span className="absolute left-3 top-3 rounded-full bg-amber-200 px-3 py-1 text-xs font-black text-black">
                  VIP
                </span>
                <div className="absolute inset-x-3 bottom-3 rounded-2xl border border-white/12 bg-black/35 p-3 backdrop-blur-md">
                  <p className="text-xs text-white/48">精选模板</p>
                  <h3 className="mt-1 text-base font-semibold text-white">{item.title}</h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
