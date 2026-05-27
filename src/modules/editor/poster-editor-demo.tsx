"use client";

import { useState } from "react";
import { BottomToolbar } from "./components/bottom-toolbar";
import { EditorHeader } from "./components/editor-header";
import { PosterCanvasArea } from "./components/poster-canvas-area";
import { PosterImagePanel } from "./components/poster-image-panel";
import { PosterLayerPanel } from "./components/poster-layer-panel";
import { PosterQuickEditPanel } from "./components/poster-quick-edit-panel";
import { PosterStylePanel } from "./components/poster-style-panel";
import { PosterTextPanel } from "./components/poster-text-panel";
import { posterToolbarTools, type PosterPanel } from "./data/poster-editor-data";

type ActivePosterPanel = PosterPanel | null;

export function PosterEditorDemo() {
  const [activePanel, setActivePanel] = useState<ActivePosterPanel>("quick");

  const handlePanelChange = (panel: PosterPanel) => {
    setActivePanel(panel);
  };

  const closeActivePanel = () => {
    setActivePanel(null);
  };

  return (
    <main className="relative mx-auto min-h-dvh w-full max-w-md overflow-x-hidden bg-[#02030a] text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_5%,rgba(148,163,184,0.26),transparent_34%),radial-gradient(circle_at_70%_46%,rgba(59,130,246,0.14),transparent_30%),linear-gradient(180deg,#02030a_0%,#05060d_58%,#02030a_100%)]" />

      <EditorHeader onLayersClick={() => setActivePanel((panel) => (panel === "layers" ? null : "layers"))} />
      <PosterLayerPanel open={activePanel === "layers"} onClose={closeActivePanel} />
      <PosterCanvasArea />

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
            {activePanel === "quick" && <PosterQuickEditPanel onClose={closeActivePanel} />}
            {activePanel === "text" && <PosterTextPanel onClose={closeActivePanel} />}
            {activePanel === "image" && <PosterImagePanel onClose={closeActivePanel} />}
            {activePanel === "style" && <PosterStylePanel onClose={closeActivePanel} />}
          </div>
        </>
      ) : null}

      <BottomToolbar activePanel={activePanel} onChange={handlePanelChange} tools={posterToolbarTools} />
    </main>
  );
}
