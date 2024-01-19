import { Stage } from "@react-three/drei";
import { BaseScene, Controls as Controls, useBaseScene } from "../core";
import Model from "../core/Model";
import "./basecontrols.css";

type Props = {
  model_url: string;
  cameraOrbit?: boolean;
  cameraOrbitSpeed?: number;
  disableZoom?: boolean;
  minZoom?: number;
  maxZoom?: number;
};

const BaseControls = ({
  model_url,
  cameraOrbit,
  cameraOrbitSpeed,
  disableZoom,
  minZoom,
  maxZoom,
}: Props) => {
  const { modelRef, sceneEle } = useBaseScene();

  return (
    <div className='container'>
      <BaseScene>
        <Stage adjustCamera={false}>
          <Model model_url={model_url} />
        </Stage>
        <Controls
          model={modelRef}
          sceneCanvas={sceneEle}
          cameraOrbit={cameraOrbit}
          cameraOrbitSpeed={cameraOrbitSpeed}
          disableZoom={disableZoom}
          minZoom={minZoom}
          maxZoom={maxZoom}
        />
      </BaseScene>
    </div>
  );
};

export { BaseControls };
