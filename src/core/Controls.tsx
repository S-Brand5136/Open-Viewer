import { CameraControls } from "@react-three/drei";
import { useCallback, useEffect, useRef } from "react";
import { OrthographicCamera, PerspectiveCamera } from "three";
import * as THREE from "three";
import { DEG2RAD } from "three/src/math/MathUtils.js";
import { useFrame } from "@react-three/fiber";
import { modelRefType, sceneEleType } from "./useBaseScene.ts";

type CameraControlsProps = {
  model: modelRefType;
  sceneCanvas: sceneEleType;
  camera?: PerspectiveCamera | OrthographicCamera;
  domElement?: HTMLElement;
  cameraOrbit?: boolean;
  cameraOrbitSpeed?: number;
  makeDefault?: boolean;
  disableZoom?: boolean;
  minZoom?: number;
  maxZoom?: number;
  onStart?: (e?: { type: "controlstart" }) => void;
  onEnd?: (e?: { type: "controlend" }) => void;
  onChange?: (e?: { type: "update" }) => void;
};

function Controls({
  camera,
  sceneCanvas,
  model,
  cameraOrbit,
  cameraOrbitSpeed = 0.1,
  domElement,
  makeDefault,
  disableZoom = false,
  minZoom,
  maxZoom,
  onStart,
  onEnd,
  onChange,
}: CameraControlsProps) {
  const controlsRef = useRef<CameraControls>(null);
  const userDragging = useRef<boolean>(false);

  const recenterModel = useCallback(() => {
    if (!controlsRef.current) return;

    controlsRef.current.reset();
  }, [controlsRef]);

  const refocusModel = useCallback(() => {
    if (!model) return;

    const modelPosition = new THREE.Vector3();
    model.getWorldPosition(modelPosition);

    controlsRef.current?.setOrbitPoint(
      modelPosition.x,
      modelPosition.y,
      modelPosition.z
    );
  }, [controlsRef, model]);

  useEffect(() => {
    if (controlsRef.current) {
      sceneCanvas?.addEventListener("dblclick", recenterModel);
      sceneCanvas?.addEventListener("mouseup", refocusModel);

      controlsRef.current.addEventListener("controlstart", () => {
        userDragging.current = true;
      });
      controlsRef.current.addEventListener("controlend", () => {
        userDragging.current = false;
      });

      if (disableZoom) {
        controlsRef.current.mouseButtons.wheel = 0;
      }
    }

    return () => {
      sceneCanvas?.removeEventListener("dblclick", recenterModel);
      sceneCanvas?.removeEventListener("mouseup", refocusModel);
    };
  }, [controlsRef, sceneCanvas, recenterModel, refocusModel]);

  useFrame(() => {
    if (cameraOrbit && controlsRef?.current && !userDragging.current) {
      const camera = controlsRef.current;
      camera.rotate(cameraOrbitSpeed * DEG2RAD, 0, true);
    }
  });

  return (
    <CameraControls
      ref={controlsRef}
      camera={camera}
      domElement={domElement}
      makeDefault={makeDefault}
      onStart={onStart}
      onEnd={onEnd}
      onChange={onChange}
      minDistance={minZoom}
      maxDistance={maxZoom}
    />
  );
}

export { Controls };
