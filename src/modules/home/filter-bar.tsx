type FilterBarProps = {
  filters: string[];
  activeFilter: string | null;
  onOpen: (filter: string) => void;
};

export function FilterBar({ filters, activeFilter, onOpen }: FilterBarProps) {
  return (
    <div className="sticky top-[78px] z-20 -mx-4 mb-4 border-y border-white/10 bg-[#080914]/82 px-4 py-3 backdrop-blur-2xl">
      <div className="no-scrollbar flex gap-2 overflow-x-auto">
        {filters.map((filter) => (
          <button
            className={`shrink-0 rounded-full border px-4 py-2 text-sm font-medium ${
              activeFilter === filter
                ? "border-cyan-300/55 bg-cyan-300/16 text-cyan-100"
                : "border-white/10 bg-white/[0.05] text-white/58"
            }`}
            key={filter}
            onClick={() => onOpen(filter)}
            type="button"
          >
            {filter}
            <span className="ml-1 text-white/38">⌄</span>
          </button>
        ))}
      </div>
    </div>
  );
}
