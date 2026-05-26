import { ActionButtons } from "@/modules/template-detail/action-buttons";
import { relatedTemplates, templateDetail } from "@/modules/template-detail/mock-data";
import { RelatedTemplates } from "@/modules/template-detail/related-templates";
import { TemplateInfo } from "@/modules/template-detail/template-info";
import { TemplatePreview } from "@/modules/template-detail/template-preview";
import { TemplateTags } from "@/modules/template-detail/template-tags";
import Link from "next/link";

export function TemplateDetailPage() {
  return (
    <main className="relative mx-auto min-h-dvh w-full max-w-md overflow-x-hidden bg-[#07070b] text-white">
      <div className="pointer-events-none fixed left-1/2 top-0 h-[620px] w-full max-w-md -translate-x-1/2 bg-[radial-gradient(circle_at_18%_0%,rgba(34,211,238,0.34),transparent_34%),radial-gradient(circle_at_86%_10%,rgba(168,85,247,0.32),transparent_34%),radial-gradient(circle_at_50%_34%,rgba(14,165,233,0.12),transparent_42%)]" />

      <header className="sticky top-0 z-30 flex items-center justify-between bg-[#07070b]/26 px-4 py-4 backdrop-blur-2xl">
        <Link className="rounded-full border border-white/12 bg-white/[0.075] px-3.5 py-2 text-xs font-semibold text-white/76 shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_0_18px_rgba(34,211,238,0.08)] backdrop-blur-2xl" href="/">
          返回
        </Link>
        <button className="rounded-full border border-white/12 bg-white/[0.075] px-3.5 py-2 text-xs font-semibold text-white/76 shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_0_18px_rgba(168,85,247,0.1)] backdrop-blur-2xl" type="button">
          更多
        </button>
      </header>

      <div className="relative z-10">
        <TemplatePreview imageSrc={templateDetail.imageSrc} title={templateDetail.title} />
        <TemplateInfo
          title={templateDetail.title}
          uses={templateDetail.uses}
          views={templateDetail.views}
          vip={templateDetail.vip}
        />
        <TemplateTags tags={templateDetail.tags} />
        <section className="px-4 pt-5">
          <div className="rounded-[26px] border border-white/[0.08] bg-[linear-gradient(135deg,rgba(255,255,255,0.07),rgba(255,255,255,0.035))] p-4 text-sm leading-7 text-white/62 shadow-[0_18px_58px_rgba(0,0,0,0.28)] backdrop-blur-xl">
            {templateDetail.description}
          </div>
        </section>
        <RelatedTemplates templates={relatedTemplates} />
      </div>

      <ActionButtons />
    </main>
  );
}
