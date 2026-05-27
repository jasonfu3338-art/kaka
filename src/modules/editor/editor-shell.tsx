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

type ActiveEditorPanel = EditorPanel | null;

export function EditorShell() {
  const [activePanel, setActivePanel] = useState<ActiveEditorPanel>("quick");
  const loadTemplate = useEditorStore((state) => state.loadTemplate);

  useEffect(() => {
    loadTemplate("card-guange-001");
  }, [loadTemplate]);

  const handlePanelChange = (panel: EditorPanel) => {
    setActivePanel(panel);
  };

  const closeActivePanel = () => {
    setActivePanel(null);
  };

  return (
    <main className="relative mx-auto min-h-dvh w-full max-w-md overflow-x-hidden bg-[#02030a] text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_4%,rgba(37,99,235,0.32),transparent_34%),radial-gradient(circle_at_16%_54%,rgba(168,85,247,0.2),transparent_28%),linear-gradient(180deg,#02030a_0%,#050719_56%,#02030a_100%)]" />
      <EditorHeader onLayersClick={() => setActivePanel((panel) => (panel === "layers" ? null : "layers"))} />
      <LayerPanel open={activePanel === "layers"} onClose={closeActivePanel} />

      <CanvasArea onCanvasClick={closeActivePanel} />

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
            {activePanel === "quick" && <QuickEditPanel onClose={closeActivePanel} />}
            {activePanel === "text" && <TextPanel onClose={closeActivePanel} />}
            {activePanel === "image" && <ImagePanel onClose={closeActivePanel} />}
            {activePanel === "style" && <StylePanel onClose={closeActivePanel} />}
          </div>
        </>
      ) : null}

      <BottomToolbar activePanel={activePanel} onChange={handlePanelChange} />
    </main>
  );
}
