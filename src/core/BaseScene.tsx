import { Canvas } from "@react-three/fiber";
import { ReactNode, useEffect, useRef } from "react";
import { useBaseScene } from "./useBaseScene";

type Props = {
  children: ReactNode;
};

const BaseScene = ({ children }: Props) => {
  const { frameloop, flat, onCreated, setSceneRef } = useBaseScene();
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    setSceneRef(ref.current);

    return () => {
      setSceneRef(null);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Canvas
      ref={ref}
      style={{ height: "100%", width: "100%" }}
      id='canvas-container'
      shadows
      frameloop={frameloop}
      flat={flat}
      onCreated={onCreated}
      onMouseEnter={() => {
        document.body.style.cursor = "grab";
      }}
      onMouseDown={() => {
        document.body.style.cursor = "grabbing";
      }}
      onMouseUp={() => {
        document.body.style.cursor = "grab";
      }}
    >
      {children}
    </Canvas>
  );
};

export default BaseScene;
