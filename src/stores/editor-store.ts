import { create } from "zustand";

type EditorState = {
  activeTemplateId: string | null;
  setActiveTemplateId: (templateId: string | null) => void;
};

export const useEditorStore = create<EditorState>((set) => ({
  activeTemplateId: null,
  setActiveTemplateId: (templateId) => set({ activeTemplateId: templateId }),
}));
