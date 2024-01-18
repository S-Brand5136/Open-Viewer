import {
  Center,
  Environment,
  PerspectiveCamera,
  Stage,
} from "@react-three/drei";
import UserModel from "./UserModel";
import BaseScene from "./BaseScene";
import BaseControls from "./BaseControls.tsx";
import { useBaseScene } from "./useBaseScene.ts";

type Props = {
  model_url: string;
  camera_controls?: boolean;
  camera_orbit?: boolean;
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
  bgColor,
  skybox,
  initialCameraPosition = [5, 2, 1],
  disable_zoom,
  min_zoom,
  max_zoom,
}: Props) {
  const { modelRef, sceneEle } = useBaseScene();

  return (
    <BaseScene>
      {camera_controls && (
        <BaseControls
          model={modelRef}
          sceneCanvas={sceneEle}
          disableZoom={disable_zoom}
          minZoom={min_zoom}
          maxZoom={max_zoom}
          cameraOrbit={camera_orbit}
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
          <UserModel model_url={model_url} props={{}} />
        </Stage>
      </Center>
    </BaseScene>
  );
}

export { OpenViewer };
