import {
  Center,
  Environment,
  Loader,
  PerspectiveCamera,
  Stage,
} from "@react-three/drei";
import { Model } from "./Model.tsx";
import { BaseScene } from "./BaseScene";
import { Controls } from "./Controls.tsx";
import { useBaseScene } from "./useBaseScene.ts";
import { Suspense } from "react";

type Props = {
  model_url: string;
  camera_controls?: boolean;
  camera_orbit?: boolean;
  camera_orbit_speed?: number;
  disable_zoom?: boolean;
  min_zoom?: number;
  max_zoom?: number;
  skybox?: string | Array<string>;
  bgColor?: string;
  initialCameraPosition?: [number, number, number];
};

function OpenViewer({
  model_url,
  camera_controls,
  camera_orbit,
  camera_orbit_speed,
  bgColor,
  skybox,
  initialCameraPosition = [5, 2, 1],
  disable_zoom,
  min_zoom,
  max_zoom,
}: Props) {
  const { modelRef, sceneEle } = useBaseScene();

  return (
    <>
      <Loader />
      <BaseScene>
        <Suspense fallback={null}>
          {camera_controls && (
            <Controls
              model={modelRef}
              sceneCanvas={sceneEle}
              disableZoom={disable_zoom}
              minZoom={min_zoom}
              maxZoom={max_zoom}
              cameraOrbit={camera_orbit}
              cameraOrbitSpeed={camera_orbit_speed}
            />
          )}
          {bgColor && !skybox && <color attach='background' args={[bgColor]} />}
          {skybox && !bgColor && (
            <Environment
              background
              ground={{
                height: 15, // Height of the camera that was used to create the env map (Default: 15)
                radius: 60, // Radius of the world. (Default 60)
                scale: 1000, // Scale of the backside projected sphere that holds the env texture (Default: 1000)
              }}
              near={1}
              far={1000}
              resolution={256}
              files={skybox}
            />
          )}
          <PerspectiveCamera
            makeDefault
            position={initialCameraPosition}
            fov={75}
          />
          <Center top>
            <Stage adjustCamera={false} environment={"studio"}>
              <Model model_url={model_url} props={{}} />
            </Stage>
          </Center>
        </Suspense>
      </BaseScene>
    </>
  );
}

export { OpenViewer };
