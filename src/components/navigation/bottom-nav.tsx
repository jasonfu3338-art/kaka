const items = ["帅Ka", "语音圈", "我的"];

export function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-1/2 z-30 grid w-full max-w-md -translate-x-1/2 grid-cols-3 border-t border-white/10 bg-[#090a12]/85 px-6 pb-5 pt-2 shadow-[0_-18px_50px_rgba(0,0,0,0.45)] backdrop-blur-2xl">
      {items.map((item, index) => (
        <button
          className={`flex h-12 items-center justify-center rounded-2xl text-sm font-semibold ${
            index === 0 ? "text-cyan-200" : "text-white/48"
          }`}
          key={item}
          type="button"
        >
          <span
            className={
              index === 0
                ? "rounded-full bg-cyan-300/12 px-4 py-2 shadow-[0_0_24px_rgba(103,232,249,0.32),inset_0_0_14px_rgba(103,232,249,0.12)]"
                : ""
            }
          >
            {item}
          </span>
        </button>
      ))}
    </nav>
  );
}
