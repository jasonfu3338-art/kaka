import Image from "next/image";
import { editorTemplate } from "../data/editor-mock-data";

export function CanvasArea() {
  return (
    <section className="relative flex min-h-[calc(100dvh-176px)] items-center justify-center px-4 pb-28 pt-28">
      <div className="absolute inset-x-0 top-16 h-72 bg-[radial-gradient(circle_at_50%_40%,rgba(53,126,255,0.34),transparent_62%)] blur-2xl" />
      <div className="absolute inset-x-4 top-28 h-[52dvh] rounded-[36px] bg-[#10265a]/20 blur-3xl" />

      <div className="relative w-full max-w-[366px]">
        <div className="absolute -inset-3 rounded-[34px] bg-gradient-to-br from-sky-400/24 via-indigo-500/14 to-fuchsia-400/18 blur-xl" />
        <div className="relative overflow-hidden rounded-[28px] border border-white/14 bg-white/[0.04] shadow-[0_28px_90px_rgba(0,0,0,0.72),0_0_45px_rgba(58,147,255,0.28)]">
          <Image
            alt="模板画布预览"
            className="aspect-square w-full object-cover"
            height={1500}
            priority
            src={editorTemplate.image}
            width={1500}
          />
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.04),transparent_34%,rgba(2,6,23,0.22))]" />
          <div className="absolute left-[42%] top-[47%] rounded-sm border-2 border-sky-400/90 bg-sky-950/18 px-2 py-1 text-sm font-semibold text-black shadow-[0_0_20px_rgba(56,189,248,0.8)]">
            {editorTemplate.subtitle}
            <span className="absolute -right-2 -top-2 size-4 rounded-full bg-white shadow-[0_0_12px_rgba(255,255,255,0.9)]" />
            <span className="absolute left-1/2 top-10 grid size-9 -translate-x-1/2 place-items-center rounded-full bg-white text-lg font-bold text-slate-900 shadow-xl">
              ↻
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
