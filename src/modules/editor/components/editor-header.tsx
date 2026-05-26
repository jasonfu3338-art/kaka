"use client";

import Link from "next/link";
import { ArrowLeftIcon, LayersIcon, RedoIcon, UndoIcon } from "./editor-icons";

type EditorHeaderProps = {
  onLayersClick: () => void;
};

export function EditorHeader({ onLayersClick }: EditorHeaderProps) {
  return (
    <header className="fixed inset-x-0 top-0 z-40 mx-auto w-full max-w-md px-3 pt-[env(safe-area-inset-top)]">
      <div className="flex h-20 items-center justify-between gap-2 rounded-b-[28px] border border-white/10 bg-black/55 px-2 text-white shadow-[0_20px_70px_rgba(14,116,255,0.18)] backdrop-blur-2xl">
        <Link
          aria-label="返回"
          className="grid size-11 place-items-center rounded-full border border-white/10 bg-white/8 text-white/95 shadow-[inset_0_1px_0_rgba(255,255,255,0.14)]"
          href="/templates/demo"
        >
          <ArrowLeftIcon className="size-6" />
        </Link>

        <button className="editor-head-action" onClick={onLayersClick} type="button">
          <LayersIcon className="size-6" />
          <span>图层</span>
        </button>
        <button className="editor-head-action opacity-80" type="button">
          <UndoIcon className="size-6" />
          <span>撤销</span>
        </button>
        <button className="editor-head-action opacity-45" type="button">
          <RedoIcon className="size-6" />
          <span>重做</span>
        </button>

        <button
          className="h-11 rounded-2xl bg-gradient-to-r from-[#1f6fff] via-[#4d7dff] to-[#8c5bff] px-4 text-sm font-semibold text-white shadow-[0_0_28px_rgba(37,99,235,0.6)]"
          type="button"
        >
          导出
        </button>
      </div>
    </header>
  );
}
