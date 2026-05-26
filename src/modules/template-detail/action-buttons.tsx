export function ActionButtons() {
  return (
    <footer className="fixed bottom-0 left-1/2 z-30 grid w-full max-w-md -translate-x-1/2 grid-cols-[0.85fr_0.85fr_2.4fr] gap-3 border-t border-white/10 bg-[#080914]/90 px-4 pb-5 pt-3 shadow-[0_-24px_80px_rgba(0,0,0,0.62)] backdrop-blur-2xl">
      <button className="h-13 rounded-2xl border border-white/[0.08] bg-zinc-900/58 text-sm font-semibold text-white/50 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-xl" type="button">
        收藏
      </button>
      <button className="h-13 rounded-2xl border border-white/[0.08] bg-zinc-900/58 text-sm font-semibold text-white/50 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-xl" type="button">
        分享
      </button>
      <button className="h-15 rounded-[22px] bg-[linear-gradient(135deg,#22d3ee,#2563eb_48%,#8b5cf6)] text-lg font-black text-white shadow-[0_0_42px_rgba(37,99,235,0.72),0_0_70px_rgba(139,92,246,0.34),inset_0_1px_0_rgba(255,255,255,0.28)]" type="button">
        立即使用
      </button>
    </footer>
  );
}
