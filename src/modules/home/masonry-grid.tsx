import { TemplateCard, type TemplateItem } from "@/components/templates/template-card";

type MasonryGridProps = {
  templates: TemplateItem[];
};

export function MasonryGrid({ templates }: MasonryGridProps) {
  return (
    <div className="columns-2 gap-3 space-y-3">
      {templates.map((template) => (
        <TemplateCard key={template.id} template={template} />
      ))}
    </div>
  );
}
