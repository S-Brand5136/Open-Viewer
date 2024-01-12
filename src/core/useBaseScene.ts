import { Group, Object3D } from "three";
import { create } from "zustand";

type frameloop = "always" | "demand" | "never" | undefined;
export type sceneEleType = HTMLCanvasElement | null;
export type modelRefType = Object3D | Group | null;

interface BaseContextState {
  model_url: string | null;
  modelRef: Object3D | null;
  frameloop: frameloop;
  flat: boolean;
  sceneEle: sceneEleType;
  onCreated: () => void;
  setSceneRef: (sceneEle: sceneEleType) => void;
  setModelRef: (modelRef: modelRefType) => void;
}

const useBaseScene = create<BaseContextState>()((set) => ({
  model_url: null,
  modelRef: null,
  frameloop: "always",
  flat: false,
  sceneEle: null,
  onCreated: () => {},
  setOnCreated: (onCreated: () => void) => set({ onCreated }),
  setFlat: (flat: boolean) => set({ flat }),
  setModelUrl: (model_url: string) => set({ model_url }),
  setFrameloop: (frameloop: frameloop) => set({ frameloop }),
  setSceneRef: (sceneEle: sceneEleType) => set({ sceneEle }),
  setModelRef: (modelRef: modelRefType) => set({ modelRef }),
}));

export { useBaseScene };
