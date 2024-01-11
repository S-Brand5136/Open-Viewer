import { CameraControls } from "@react-three/drei";
import { useCallback, useEffect, useRef } from "react";
import { OrthographicCamera, PerspectiveCamera } from "three";
import * as THREE from "three";
import { useBaseScene } from ".";
import { DEG2RAD } from "three/src/math/MathUtils.js";

type CameraControlsProps = {
  camera?: PerspectiveCamera | OrthographicCamera;
  domElement?: HTMLElement;
  makeDefault?: boolean;
  useAnimation?: boolean;
  disableZoom?: boolean;
  minZoom?: number;
  maxZoom?: number;
  onStart?: (e?: { type: "controlstart" }) => void;
  onEnd?: (e?: { type: "controlend" }) => void;
  onChange?: (e?: { type: "update" }) => void;
};

export default function Controls({
  camera,
  domElement,
  makeDefault,
  useAnimation = true,
  disableZoom = false,
  minZoom,
  maxZoom,
  onStart,
  onEnd,
  onChange,
}: CameraControlsProps) {
  const controlsRef = useRef<CameraControls>(null);
  const { sceneEle, modelRef } = useBaseScene();
  const animationPlayedRef = useRef<boolean>(false);

  const recenterModel = useCallback(() => {
    if (!controlsRef.current) return;

    controlsRef.current.reset();
  }, [controlsRef]);

  const refocusModel = useCallback(() => {
    if (!modelRef) return;

    const modelPosition = new THREE.Vector3();
    modelRef.getWorldPosition(modelPosition);

    controlsRef.current?.setOrbitPoint(
      modelPosition.x,
      modelPosition.y,
      modelPosition.z
    );
  }, [controlsRef, modelRef]);

  useEffect(() => {
    if (controlsRef.current) {
      sceneEle?.addEventListener("dblclick", recenterModel);
      sceneEle?.addEventListener("mouseup", refocusModel);

      if (disableZoom) {
        controlsRef.current.mouseButtons.wheel = 0;
      }

      if (!animationPlayedRef.current && useAnimation) {
        const rotateRight = setInterval(() => {
          if (controlsRef.current) {
            controlsRef.current?.rotate(15 * DEG2RAD, 0, true).then(() => {
              setTimeout(() => {
                if (animationPlayedRef.current) return;
                controlsRef.current?.rotate(-15 * DEG2RAD, 0, true);
              }, 750);

              setTimeout(() => {
                if (animationPlayedRef.current) return;
                controlsRef.current?.rotate(-15 * DEG2RAD, 0, true);
              }, 1600);

              setTimeout(() => {
                if (animationPlayedRef.current) return;
                controlsRef.current?.rotate(15 * DEG2RAD, 0, true);
              }, 3000);
            });
          }
        }, 6000);

        sceneEle?.addEventListener("mousedown", () => {
          clearInterval(rotateRight);
          animationPlayedRef.current = true;
        });
      }
    }

    return () => {
      sceneEle?.removeEventListener("dblclick", recenterModel);
      sceneEle?.removeEventListener("mouseup", refocusModel);
    };
  }, [controlsRef, sceneEle, recenterModel, refocusModel]);

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
