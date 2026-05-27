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

export function PosterEditorDemo() {
  const [activePanel, setActivePanel] = useState<PosterPanel>("quick");
  const [layerPanelOpen, setLayerPanelOpen] = useState(false);

  const handlePanelChange = (panel: PosterPanel) => {
    setActivePanel(panel);
    setLayerPanelOpen(panel === "layers");
  };

  return (
    <main className="relative mx-auto min-h-dvh w-full max-w-md overflow-x-hidden bg-[#02030a] text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_5%,rgba(148,163,184,0.26),transparent_34%),radial-gradient(circle_at_70%_46%,rgba(59,130,246,0.14),transparent_30%),linear-gradient(180deg,#02030a_0%,#05060d_58%,#02030a_100%)]" />

      <EditorHeader onLayersClick={() => setLayerPanelOpen((open) => !open)} />
      <PosterLayerPanel open={layerPanelOpen} onClose={() => setLayerPanelOpen(false)} />
      <PosterCanvasArea />

      <div className="editor-floating-panel">
        {activePanel === "quick" && <PosterQuickEditPanel />}
        {activePanel === "text" && <PosterTextPanel />}
        {activePanel === "image" && <PosterImagePanel />}
        {activePanel === "style" && <PosterStylePanel />}
      </div>

      <BottomToolbar activePanel={activePanel} onChange={handlePanelChange} tools={posterToolbarTools} />
    </main>
  );
}
