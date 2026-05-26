type CategoryBarProps = {
  categories: string[];
};

export function CategoryBar({ categories }: CategoryBarProps) {
  return (
    <nav className="mt-4 flex gap-2 overflow-x-auto pb-1">
      {categories.map((category, index) => (
        <button
          className={`shrink-0 rounded-full px-4 py-2 text-sm font-medium ${
            index === 0 ? "bg-black text-white" : "bg-white text-black/65"
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
