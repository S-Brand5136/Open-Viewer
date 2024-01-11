import { create } from "zustand";

interface ControlsState {}

const useControls = create<ControlsState>()(() => ({}));

export default useControls;
