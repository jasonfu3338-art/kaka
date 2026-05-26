type FilterSheetProps = {
  title: string | null;
  options: string[];
  open: boolean;
  onClose: () => void;
};

const colorMap: Record<string, string> = {
  红: "bg-red-500",
  橙: "bg-orange-500",
  黄: "bg-yellow-300",
  绿: "bg-lime-400",
  青: "bg-teal-400",
  蓝: "bg-blue-400",
  紫: "bg-purple-400",
  粉: "bg-pink-400",
  黑: "bg-black",
  白: "bg-white",
};

export function FilterSheet({ title, options, open, onClose }: FilterSheetProps) {
  if (!open || !title) {
    return null;
  }

  const isColor = title === "颜色";

  return (
    <div className="fixed inset-0 z-40 flex items-end bg-black/58 backdrop-blur-sm">
      <button className="absolute inset-0 h-full w-full" onClick={onClose} type="button" aria-label="关闭筛选" />
      <section className="relative w-full rounded-t-[32px] border border-white/10 bg-[#10111d]/95 px-4 pb-6 pt-4 shadow-[0_-24px_70px_rgba(0,0,0,0.55)] backdrop-blur-2xl">
        <div className="mx-auto mb-4 h-1.5 w-12 rounded-full bg-white/18" />
        <h2 className="text-xl font-semibold text-white">{title}</h2>
        <div className={`mt-5 grid gap-3 ${isColor ? "grid-cols-5" : "grid-cols-3"}`}>
          {options.map((option, index) => (
            <button
              className={`h-12 rounded-2xl border border-white/10 text-sm font-medium text-white/78 ${
                isColor ? `${colorMap[option]} text-transparent shadow-lg` : "bg-white/[0.07]"
              } ${index === 0 && !isColor ? "border-cyan-300/50 bg-cyan-300/14 text-cyan-100" : ""}`}
              key={option}
              type="button"
            >
              {option}
            </button>
          ))}
        </div>
        <div className="mt-6 grid grid-cols-2 gap-3">
          <button className="h-13 rounded-2xl border border-white/12 bg-white/[0.04] text-base font-semibold text-white/70" type="button">
            重置
          </button>
          <button className="h-13 rounded-2xl bg-cyan-300 text-base font-semibold text-black shadow-[0_0_34px_rgba(103,232,249,0.55)]" onClick={onClose} type="button">
            完成
          </button>
        </div>
      </section>
    </div>
  );
}
