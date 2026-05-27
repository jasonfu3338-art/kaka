"use client";

import { useMemo, useState } from "react";
import { BottomToolbar } from "./components/bottom-toolbar";
import { EditorHeader } from "./components/editor-header";
import { ImagePanel } from "./components/image-panel";
import { StylePanel } from "./components/style-panel";
import { TextPanel } from "./components/text-panel";
import { VoiceRoomCanvasArea } from "./components/voice-room-canvas-area";
import { VoiceRoomLayerPanel } from "./components/voice-room-layer-panel";
import { VoiceRoomQuickEditPanel } from "./components/voice-room-quick-edit-panel";
import { loadMockTemplate } from "./data/mock-template-loader";
import {
  type VoiceRoomPanel,
  type VoiceRoomTemplateType,
  voiceRoomToolbarTools,
} from "./data/voice-room-editor-data";

export function VoiceRoomEditorDemo() {
  const template = useMemo(() => loadMockTemplate("voice-room-header-demo"), []);
  const [activePanel, setActivePanel] = useState<VoiceRoomPanel>("quick");
  const [activeType, setActiveType] = useState<VoiceRoomTemplateType>("header");
  const [fieldValues, setFieldValues] = useState<Record<string, string>>(() =>
    Object.fromEntries(template.editableFields.map((field) => [field.key, field.value])),
  );

  const handlePanelChange = (panel: VoiceRoomPanel) => {
    setActivePanel(panel);
  };

  const updateField = (key: string, value: string) => {
    setFieldValues((current) => ({ ...current, [key]: value }));
  };

  const panel =
    activePanel === "quick" ? (
      <VoiceRoomQuickEditPanel fields={template.editableFields} onChange={updateField} values={fieldValues} />
    ) : activePanel === "text" ? (
      <TextPanel />
    ) : activePanel === "image" ? (
      <ImagePanel />
    ) : activePanel === "style" ? (
      <StylePanel />
    ) : null;

  return (
    <>
      <main className="relative mx-auto min-h-dvh w-full max-w-md bg-[#02030a] text-white">
        <div className="editor-canvas-scroll-area">
          <EditorHeader onLayersClick={() => setActivePanel("layers")} />
          <VoiceRoomCanvasArea
            activeType={activeType}
            fieldValues={fieldValues}
            onTypeChange={setActiveType}
            template={template}
          />
        </div>

        {panel ? <div className="editor-floating-panel-layer">{panel}</div> : null}
        <VoiceRoomLayerPanel layers={template.layers} onClose={() => setActivePanel("quick")} open={activePanel === "layers"} />
      </main>

      <BottomToolbar activePanel={activePanel} onChange={handlePanelChange} tools={voiceRoomToolbarTools} />
    </>
  );
}
