"use client";

import type { TemplateItem } from "@/components/templates/template-card";
import { FilterBar } from "@/modules/home/filter-bar";
import { FilterSheet } from "@/modules/home/filter-sheet";
import { filterOptions } from "@/modules/home/mock-data";
import { MasonryGrid } from "@/modules/home/masonry-grid";
import { useState } from "react";

const filters = Object.keys(filterOptions);

type PremiumTemplateSectionProps = {
  templates: TemplateItem[];
};

export function PremiumTemplateSection({ templates }: PremiumTemplateSectionProps) {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  return (
    <section className="overflow-x-clip px-4 pb-28 pt-8">
      <div className="mb-4 flex items-end justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-white">精品模板</h2>
        </div>
        <button
          className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1.5 text-xs text-white/55"
          type="button"
        >
          换一批
        </button>
      </div>

      <FilterBar activeFilter={activeFilter} filters={filters} onOpen={setActiveFilter} />
      <MasonryGrid templates={templates} />

      <FilterSheet
        onClose={() => setActiveFilter(null)}
        open={Boolean(activeFilter)}
        options={activeFilter ? filterOptions[activeFilter as keyof typeof filterOptions] : []}
        title={activeFilter}
      />
    </section>
  );
}
