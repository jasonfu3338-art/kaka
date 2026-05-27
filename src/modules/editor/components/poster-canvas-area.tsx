import Image from "next/image";
import { posterTemplate } from "../data/poster-editor-data";

export function PosterCanvasArea() {
  return (
    <section className="relative flex min-h-[calc(100dvh-176px)] items-center justify-center px-4 pb-28 pt-28">
      <div className="absolute inset-x-0 top-14 h-80 bg-[radial-gradient(circle_at_50%_28%,rgba(148,163,184,0.28),transparent_64%)] blur-2xl" />
      <div className="relative w-full max-w-[322px]">
        <div className="absolute -inset-3 rounded-[32px] bg-gradient-to-b from-white/18 via-slate-400/10 to-blue-500/14 blur-xl" />
        <div className="relative overflow-hidden rounded-[26px] border border-white/14 bg-white/[0.04] shadow-[0_28px_90px_rgba(0,0,0,0.78),0_0_40px_rgba(148,163,184,0.2)]">
          <Image
            alt="海报模板画布预览"
            className="aspect-[1280/2680] w-full object-cover object-top grayscale"
            height={2680}
            priority
            src={posterTemplate.image}
            width={1280}
          />
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.05),transparent_36%,rgba(0,0,0,0.18))]" />

          <div className="absolute right-[12%] top-[28%] h-[12%] w-[36%] rounded-sm border-2 border-[#1f6fff] bg-sky-400/5 shadow-[0_0_18px_rgba(37,99,235,0.5)]">
            {["-left-2 -top-2", "-right-2 -top-2", "-left-2 -bottom-2", "-right-2 -bottom-2"].map((position) => (
              <span className={`absolute ${position} size-4 rounded-full bg-white shadow-[0_0_12px_rgba(255,255,255,0.9)]`} key={position} />
            ))}
            <p className="px-2 py-3 text-center text-lg font-black text-white [text-shadow:0_2px_12px_rgba(255,255,255,0.85)]">
              公会招募
            </p>
          </div>
          <div className="absolute left-[16%] top-[45%] h-[13%] w-[30%] rounded-sm border border-sky-400/50 bg-sky-400/5" />
          <div className="absolute right-[18%] top-[51%] h-[14%] w-[34%] rounded-sm border border-sky-400/45 bg-sky-400/5" />
          <div className="absolute bottom-[9%] left-1/2 grid size-16 -translate-x-1/2 place-items-center rounded-2xl border border-white/20 bg-white text-sm font-black text-slate-950 shadow-[0_0_24px_rgba(255,255,255,0.35)]">
            二维码
          </div>
          <span className="absolute left-1/2 top-[42%] grid size-9 -translate-x-1/2 place-items-center rounded-full bg-white text-lg font-bold text-slate-900 shadow-xl">
            ↻
          </span>
        </div>
      </div>
    </section>
  );
}
