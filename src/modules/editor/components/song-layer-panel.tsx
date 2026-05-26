"use client";

import { songLayers } from "../data/songlist-editor-data";
import { EyeIcon, LayersIcon, LockIcon } from "./editor-icons";

type SongLayerPanelProps = {
  open: boolean;
  onClose: () => void;
};

export function SongLayerPanel({ open, onClose }: SongLayerPanelProps) {
  return (
    <>
      <button
        aria-label="关闭歌单图层遮罩"
        className={`fixed inset-0 z-40 bg-black/45 transition ${open ? "opacity-100" : "pointer-events-none opacity-0"}`}
        onClick={onClose}
        type="button"
      />
      <aside
        className={`fixed left-3 top-24 z-50 flex h-[calc(100dvh-190px)] w-[76%] max-w-[300px] flex-col rounded-[28px] border border-white/12 bg-slate-950/74 p-4 text-white shadow-[0_26px_90px_rgba(0,0,0,0.74),0_0_40px_rgba(59,130,246,0.22)] backdrop-blur-2xl transition duration-300 ${
          open ? "translate-x-0 opacity-100" : "-translate-x-[112%] opacity-0"
        }`}
      >
        <div className="shrink-0">
          <div className="mb-4 flex items-center gap-2 text-sm font-semibold text-white/80">
            <span className="grid size-8 place-items-center rounded-full bg-white/10">
              <LayersIcon className="size-4" />
            </span>
            歌单图层
          </div>
          <p className="mb-4 text-xs text-white/38">多个文本区域 / 背景图 / 装饰图 / 标题文字 / 二维码</p>
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
          {songLayers.map((layer, index) => (
            <div className="grid grid-cols-[32px_1fr_32px] items-center gap-3" key={layer.name}>
              <EyeIcon className="size-6 text-white/80" />
              <div
                className={`flex items-center gap-3 rounded-2xl border p-2 ${
                  index === 0 ? "border-sky-400/70 bg-sky-400/12 shadow-[0_0_18px_rgba(56,189,248,0.25)]" : "border-white/10 bg-white/[0.08]"
                }`}
              >
                <div className="grid size-14 place-items-center rounded-xl bg-white/85 text-[10px] font-semibold text-slate-600">
                  {layer.type}
                </div>
                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold text-white">{layer.name}</p>
                  <p className="text-xs text-white/40">{layer.type}</p>
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
