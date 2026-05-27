import { create } from "zustand";
import { loadMockTemplate } from "@/modules/editor/data/mock-template-loader";
import type { EditorTemplateJson, TemplateLayer } from "@/modules/editor/types/template";

function updateLayerValue(layer: TemplateLayer, layerId: string, value: string): TemplateLayer {
  if (layer.id !== layerId) {
    return layer;
  }

  if (layer.type === "text") {
    return { ...layer, text: value };
  }

  if (layer.type === "image") {
    return { ...layer, src: value };
  }

  return layer;
}

type EditorState = {
  activeTemplateId: string | null;
  template: EditorTemplateJson | null;
  loadTemplate: (templateId: string) => void;
  setActiveTemplateId: (templateId: string | null) => void;
  updateEditableField: (key: string, value: string) => void;
};

export const useEditorStore = create<EditorState>((set) => ({
  activeTemplateId: null,
  template: null,
  loadTemplate: (templateId) => {
    const template = loadMockTemplate(templateId);

    set({
      activeTemplateId: template.id,
      template,
    });
  },
  setActiveTemplateId: (templateId) => set({ activeTemplateId: templateId }),
  updateEditableField: (key, value) =>
    set((state) => {
      if (!state.template) {
        return state;
      }

      const targetField = state.template.editableFields.find((field) => field.key === key);

      if (!targetField) {
        return state;
      }

      return {
        template: {
          ...state.template,
          editableFields: state.template.editableFields.map((field) =>
            field.key === key ? { ...field, value } : field,
          ),
          layers: state.template.layers.map((layer) => updateLayerValue(layer, targetField.layerId, value)),
        },
      };
    }),
}));
