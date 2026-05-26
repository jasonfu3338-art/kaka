"use client";

import { BottomNav } from "@/components/navigation/bottom-nav";
import { HomeRecommendSection } from "@/modules/home/home-recommend-section";
import {
  categories,
  quickActions,
  recommendGroups,
  templates,
} from "@/modules/home/mock-data";
import { PremiumTemplateSection } from "@/modules/home/premium-template-section";
import { QuickCreateActions } from "@/modules/home/quick-create-actions";
import { TopCategoryTabs } from "@/modules/home/top-category-tabs";

export function HomePage() {
  return (
    <main className="relative mx-auto min-h-dvh w-full max-w-md overflow-x-hidden bg-[#07070b] text-white">
      <div className="pointer-events-none fixed left-1/2 top-0 h-[460px] w-full max-w-md -translate-x-1/2 bg-[radial-gradient(circle_at_16%_0%,rgba(34,211,238,0.34),transparent_34%),radial-gradient(circle_at_84%_4%,rgba(139,92,246,0.34),transparent_32%),radial-gradient(circle_at_70%_22%,rgba(244,114,182,0.18),transparent_30%)]" />

      <header className="sticky top-0 z-30 border-b border-white/10 bg-[#07070b]/72 px-4 pb-3 pt-5 backdrop-blur-2xl">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-3xl font-black italic tracking-tight text-white drop-shadow-[0_0_18px_rgba(103,232,249,0.35)]">
              帅Ka
            </p>
            <div className="mt-1 h-1 w-16 rounded-full bg-cyan-300 shadow-[0_0_20px_rgba(103,232,249,0.8)]" />
          </div>
          <button className="min-w-0 flex-1 rounded-full border border-white/12 bg-white/[0.075] px-4 py-2.5 text-left text-sm text-white/48 shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_12px_34px_rgba(0,0,0,0.28)] backdrop-blur-xl" type="button">
            搜索模板 / 歌单 / 海报
          </button>
          <button className="rounded-full bg-amber-200 px-3 py-2 text-xs font-black text-black shadow-[0_0_26px_rgba(251,191,36,0.45)]" type="button">
            VIP
          </button>
        </div>
      </header>

      <div className="relative z-10 pt-4">
        <TopCategoryTabs categories={categories} />
        <QuickCreateActions actions={quickActions} />
        <HomeRecommendSection groups={recommendGroups} />
        <PremiumTemplateSection templates={templates} />
      </div>

      <BottomNav />
    </main>
  );
}
