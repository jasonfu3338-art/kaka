type TopCategoryTabsProps = {
  categories: string[];
};

export function TopCategoryTabs({ categories }: TopCategoryTabsProps) {
  return (
    <nav className="no-scrollbar flex gap-2 overflow-x-auto px-4 pb-2">
      {categories.map((category, index) => (
        <button
          className={`shrink-0 rounded-full border px-5 py-2.5 text-sm font-semibold shadow-lg backdrop-blur-xl ${
            index === 0
              ? "border-cyan-300/70 bg-cyan-300/18 text-cyan-100 shadow-[inset_0_0_18px_rgba(103,232,249,0.18),0_0_24px_rgba(34,211,238,0.26)]"
              : "border-white/10 bg-white/[0.06] text-white/58 shadow-black/20"
          }`}
          key={category}
          type="button"
        >
          {category}
        </button>
      ))}
    </nav>
  );
}
