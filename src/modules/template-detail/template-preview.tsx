import Image from "next/image";

type TemplatePreviewProps = {
  imageSrc: string;
  title: string;
};

export function TemplatePreview({ imageSrc, title }: TemplatePreviewProps) {
  return (
    <section className="relative overflow-hidden px-4 pb-7 pt-4">
      <div className="absolute inset-x-0 top-2 h-80 opacity-65 blur-3xl">
        <Image alt="" className="object-cover" fill priority src={imageSrc} />
      </div>
      <div className="absolute inset-x-0 top-0 h-80 bg-[radial-gradient(circle_at_24%_10%,rgba(56,189,248,0.38),transparent_36%),radial-gradient(circle_at_82%_18%,rgba(168,85,247,0.34),transparent_32%),linear-gradient(180deg,transparent,rgba(7,7,11,0.62))]" />

      <div className="relative rounded-[32px] border border-cyan-100/18 bg-white/[0.08] p-2 shadow-[0_34px_95px_rgba(0,0,0,0.62),0_0_54px_rgba(34,211,238,0.18),inset_0_1px_0_rgba(255,255,255,0.14)] backdrop-blur-2xl">
        <div className="relative aspect-[3/4] overflow-hidden rounded-[25px] bg-black shadow-[0_22px_70px_rgba(0,0,0,0.56)]">
          <Image alt={title} className="object-cover" fill priority sizes="390px" src={imageSrc} />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.02),transparent_42%,rgba(0,0,0,0.56))]" />
          <div className="absolute inset-x-0 bottom-0 h-36 bg-[linear-gradient(180deg,transparent,rgba(7,7,11,0.82))]" />
          <span className="absolute left-3 top-3 rounded-full bg-amber-200 px-3 py-1 text-xs font-black text-black shadow-[0_0_22px_rgba(251,191,36,0.72)]">
            VIP
          </span>
        </div>
      </div>
    </section>
  );
}
