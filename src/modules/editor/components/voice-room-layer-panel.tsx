"use client";

import type { TemplateLayer } from "../types/template";
import { EyeIcon, LayersIcon, LockIcon } from "./editor-icons";

type VoiceRoomLayerPanelProps = {
  layers: TemplateLayer[];
  open: boolean;
  onClose: () => void;
};

const layerTypeLabels: Record<TemplateLayer["type"], string> = {
  decoration: "装饰",
  image: "图片",
  text: "文字",
};

export function VoiceRoomLayerPanel({ layers, open, onClose }: VoiceRoomLayerPanelProps) {
  return (
    <>
      <button
        aria-label="关闭语音厅图层遮罩"
        className={`fixed inset-x-0 top-0 z-40 bg-black/45 transition ${open ? "opacity-100" : "pointer-events-none opacity-0"}`}
        onClick={onClose}
        style={{ bottom: "calc(var(--editor-toolbar-bottom) + var(--editor-toolbar-height) + 12px)" }}
        type="button"
      />
      <aside
        className={`fixed bottom-[calc(var(--editor-toolbar-bottom)+var(--editor-toolbar-height)+14px)] left-3 top-24 z-[70] flex w-[76%] max-w-[300px] flex-col rounded-[28px] border border-white/12 bg-slate-950/74 p-4 text-white shadow-[0_26px_90px_rgba(0,0,0,0.74),0_0_40px_rgba(59,130,246,0.22)] backdrop-blur-2xl transition duration-300 ${
          open ? "translate-x-0 opacity-100" : "-translate-x-[112%] opacity-0"
        }`}
      >
        <div className="shrink-0">
          <div className="mb-4 flex items-center gap-2 text-sm font-semibold text-white/80">
            <span className="grid size-8 place-items-center rounded-full bg-white/10">
              <LayersIcon className="size-4" />
            </span>
            语音厅图层
          </div>
          <p className="mb-4 text-xs text-white/38">背景图 / Logo / 厅名文字 / 简介文字 / 装饰光效 / 边框</p>
          <div className="mb-4 grid grid-cols-2 rounded-2xl bg-white/8 p-1 text-sm">
            <button className="rounded-xl bg-white/14 py-2 font-semibold text-white" type="button">
              单选
            </button>
            <button className="py-2 text-white/45" type="button">
              多选
            </button>
          </div>
        </div>

        <div className="min-h-0 flex-1 space-y-3 overflow-y-auto overscroll-contain pb-4 pr-1">
          {[...layers]
            .sort((a, b) => (b.zIndex ?? 0) - (a.zIndex ?? 0))
            .map((layer, index) => (
            <div className="grid grid-cols-[32px_1fr_32px] items-center gap-3" key={layer.id}>
              <EyeIcon className="size-6 text-white/80" />
              <div
                className={`flex items-center gap-3 rounded-2xl border p-2 ${
                  index === 2 ? "border-sky-400/70 bg-sky-400/12 shadow-[0_0_18px_rgba(56,189,248,0.25)]" : "border-white/10 bg-white/[0.08]"
                }`}
              >
                <div className="grid size-14 place-items-center rounded-xl bg-white/85 text-[10px] font-semibold text-slate-600">
                  {layerTypeLabels[layer.type]}
                </div>
                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold text-white">{layer.name ?? layer.id}</p>
                  <p className="text-xs text-white/40">{layerTypeLabels[layer.type]}</p>
                </div>
              </div>
              <LockIcon className={`size-5 ${layer.locked ? "text-white/35" : "text-sky-300/80"}`} />
            </div>
            ))}
        </div>
      </aside>
    </>
  );
}
