"use client";

import { useEffect, useState } from "react";
import { useEditorStore } from "@/stores/editor-store";
import { BottomToolbar } from "./components/bottom-toolbar";
import { CanvasArea } from "./components/canvas-area";
import { EditorHeader } from "./components/editor-header";
import { ImagePanel } from "./components/image-panel";
import { LayerPanel } from "./components/layer-panel";
import { QuickEditPanel } from "./components/quick-edit-panel";
import { StylePanel } from "./components/style-panel";
import { TextPanel } from "./components/text-panel";
import type { EditorPanel } from "./data/editor-mock-data";

export function EditorShell() {
  const [activePanel, setActivePanel] = useState<EditorPanel>("quick");
  const [layerPanelOpen, setLayerPanelOpen] = useState(false);
  const loadTemplate = useEditorStore((state) => state.loadTemplate);

  useEffect(() => {
    loadTemplate("guange-card-demo");
  }, [loadTemplate]);

  const handlePanelChange = (panel: EditorPanel) => {
    setActivePanel(panel);
    setLayerPanelOpen(panel === "layers");
  };

  return (
    <main className="relative mx-auto min-h-dvh w-full max-w-md overflow-x-hidden bg-[#02030a] text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_4%,rgba(37,99,235,0.32),transparent_34%),radial-gradient(circle_at_16%_54%,rgba(168,85,247,0.2),transparent_28%),linear-gradient(180deg,#02030a_0%,#050719_56%,#02030a_100%)]" />
      <EditorHeader onLayersClick={() => setLayerPanelOpen((open) => !open)} />
      <LayerPanel open={layerPanelOpen} onClose={() => setLayerPanelOpen(false)} />

      <CanvasArea />

      <div className="editor-floating-panel">
        {activePanel === "quick" && <QuickEditPanel />}
        {activePanel === "text" && <TextPanel />}
        {activePanel === "image" && <ImagePanel />}
        {activePanel === "style" && <StylePanel />}
      </div>

      <BottomToolbar activePanel={activePanel} onChange={handlePanelChange} />
    </main>
  );
}
