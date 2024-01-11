import {
  Center,
  Environment,
  PerspectiveCamera,
  Stage,
} from "@react-three/drei";
import UserModel from "./UserModel";
import BaseScene from "./BaseScene";
import Controls from "./Controls";

type Props = {
  model_url: string;
  camera_controls?: boolean;
  camera_orbit?: string;
  disable_zoom?: boolean;
  min_zoom?: number;
  max_zoom?: number;
  skybox?: string | Array<string>;
  bgColor?: string;
  playInteractAnimation?: boolean;
  initialCameraPosition?: [number, number, number];
};

function OpenViewer({
  model_url,
  camera_controls,
  playInteractAnimation,
  bgColor,
  skybox,
  initialCameraPosition = [5, 2, 1],
  disable_zoom,
  min_zoom,
  max_zoom,
}: Props) {
  return (
    <BaseScene>
      {camera_controls && (
        <Controls
          useAnimation={playInteractAnimation}
          disableZoom={disable_zoom}
          minZoom={min_zoom}
          maxZoom={max_zoom}
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

export default OpenViewer;
