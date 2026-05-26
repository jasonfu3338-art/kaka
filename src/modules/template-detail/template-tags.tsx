type TemplateTagsProps = {
  tags: string[];
};

export function TemplateTags({ tags }: TemplateTagsProps) {
  return (
    <section className="px-4 pt-5">
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            className="rounded-full border border-cyan-100/[0.14] bg-white/[0.045] px-3 py-1.5 text-sm font-medium text-cyan-50/78 shadow-[0_0_14px_rgba(34,211,238,0.08)] backdrop-blur-xl"
            key={tag}
          >
            {tag}
          </span>
        ))}
      </div>
    </section>
  );
}
