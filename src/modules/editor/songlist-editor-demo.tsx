"use client";

import { useState } from "react";
import { BatchSongEditPanel } from "./components/batch-song-edit-panel";
import { BottomToolbar } from "./components/bottom-toolbar";
import { EditorHeader } from "./components/editor-header";
import { SongLayerPanel } from "./components/song-layer-panel";
import { SongPlaceholderPanel } from "./components/song-placeholder-panel";
import { SongQuickEditPanel } from "./components/song-quick-edit-panel";
import { SongStylePanel } from "./components/song-style-panel";
import { SongTextBlockPanel } from "./components/song-text-block-panel";
import { SonglistCanvasArea } from "./components/songlist-canvas-area";
import { songToolbarTools, type SonglistPanel } from "./data/songlist-editor-data";

type ActiveSonglistPanel = SonglistPanel | null;

export function SonglistEditorDemo() {
  const [activePanel, setActivePanel] = useState<ActiveSonglistPanel>("quick");

  const handlePanelChange = (panel: SonglistPanel) => {
    setActivePanel(panel);
  };

  const closeActivePanel = () => {
    setActivePanel(null);
  };

  return (
    <main className="relative mx-auto min-h-dvh w-full max-w-md overflow-x-hidden bg-[#02030a] text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_5%,rgba(148,163,184,0.26),transparent_34%),radial-gradient(circle_at_72%_48%,rgba(244,114,182,0.13),transparent_28%),linear-gradient(180deg,#02030a_0%,#060716_55%,#02030a_100%)]" />

      <EditorHeader onLayersClick={() => setActivePanel((panel) => (panel === "layers" ? null : "layers"))} />
      <SongLayerPanel open={activePanel === "layers"} onClose={closeActivePanel} />
      <SonglistCanvasArea />

      {activePanel && activePanel !== "layers" ? (
        <>
          <button
            aria-label="关闭当前编辑面板"
            className="fixed inset-x-0 top-0 z-40 cursor-default bg-transparent"
            onClick={closeActivePanel}
            style={{ bottom: "calc(var(--editor-toolbar-bottom) + var(--editor-toolbar-height) + 14px)" }}
            type="button"
          />
          <div className="editor-floating-panel">
            {activePanel === "quick" && <SongQuickEditPanel onClose={closeActivePanel} />}
            {activePanel === "content" && <SongTextBlockPanel onClose={closeActivePanel} />}
            {activePanel === "batch" && <BatchSongEditPanel onClose={closeActivePanel} />}
            {activePanel === "style" && <SongStylePanel onClose={closeActivePanel} />}
            {activePanel === "multi" && (
              <SongPlaceholderPanel
                actions={["选择全部文本", "取消选择", "锁定选区", "对齐选区"]}
                description="用于同时选择多个歌单文本区域。本阶段仅展示入口和面板结构。"
                onClose={closeActivePanel}
                title="多选"
              />
            )}
            {activePanel === "nudge" && (
              <SongPlaceholderPanel
                actions={["上移 1px", "下移 1px", "左移 1px", "右移 1px"]}
                description="用于小幅移动当前文本区域位置。本阶段仅展示微调控制 UI。"
                onClose={closeActivePanel}
                title="微调"
              />
            )}
          </div>
        </>
      ) : null}

      <BottomToolbar activePanel={activePanel} onChange={handlePanelChange} tools={songToolbarTools} />
    </main>
  );
}
