import Image from "next/image";
import { songlistTemplate } from "../data/songlist-editor-data";

export function SonglistCanvasArea() {
  return (
    <section className="relative flex min-h-[calc(100dvh-176px)] items-center justify-center px-3 pb-28 pt-28">
      <div className="absolute inset-x-0 top-20 h-72 bg-[radial-gradient(circle_at_52%_40%,rgba(196,181,253,0.24),transparent_64%)] blur-2xl" />
      <div className="relative w-full max-w-[374px]">
        <div className="absolute -inset-3 rounded-[30px] bg-gradient-to-br from-rose-200/18 via-sky-200/16 to-indigo-400/14 blur-xl" />
        <div className="relative overflow-hidden rounded-[24px] border border-white/14 bg-white/[0.04] shadow-[0_28px_90px_rgba(0,0,0,0.76),0_0_42px_rgba(148,163,184,0.2)]">
          <Image
            alt="歌单模板画布预览"
            className="aspect-[4/5.45] w-full object-cover object-top"
            height={2667}
            priority
            src={songlistTemplate.image}
            width={1500}
          />
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0.08),transparent_30%,rgba(2,6,23,0.12))]" />

          <div className="absolute right-[10%] top-[46%] h-[25%] w-[27%] rounded-sm border-2 border-[#1f6fff] bg-sky-400/5 shadow-[0_0_20px_rgba(37,99,235,0.55)]">
            {["-left-2 -top-2", "-right-2 -top-2", "-left-2 -bottom-2", "-right-2 -bottom-2", "-right-2 top-1/2"].map(
              (position) => (
                <span className={`absolute ${position} size-4 rounded-full bg-white shadow-[0_0_12px_rgba(255,255,255,0.9)]`} key={position} />
              ),
            )}
            <div className="h-full px-2 py-2 text-[7px] leading-[1.7] text-slate-800/70">
              showoff<br />
              satyalive<br />
              sunnyrain<br />
              无法坠入爱河<br />
              普鲁斯特效应<br />
              我的爱没前奏
            </div>
          </div>

          <div className="absolute left-[7%] top-[38%] h-[16%] w-[18%] rounded-sm border border-sky-400/60 bg-sky-300/5" />
          <div className="absolute left-[31%] top-[67%] h-[18%] w-[20%] rounded-sm border border-sky-400/45 bg-sky-300/5" />
          <span className="absolute bottom-[8%] right-[27%] grid size-9 place-items-center rounded-full bg-white text-lg font-bold text-slate-900 shadow-xl">
            ↻
          </span>
        </div>
      </div>
    </section>
  );
}
