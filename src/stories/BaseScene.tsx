import "./basescene.css";
import { BaseScene as Scene, useBaseScene } from "../web";
import {
  Box,
  PerspectiveCamera,
  PresentationControls,
  Stage,
} from "@react-three/drei";
import { useEffect } from "react";
import { Model } from "../core";

type Props = {
  flat?: boolean;
  frameLoop?: "always" | "demand" | "never";
  model_url: string;
};

const BaseScene = ({ flat, frameLoop, model_url }: Props) => {
  const { setFlat, setFrameloop, setModelUrl } = useBaseScene();

  useEffect(() => {
    setFlat(flat ?? false);
    setFrameloop(frameLoop ?? "always");
    setModelUrl(model_url);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [flat, frameLoop, model_url]);

  return (
    <div className='container'>
      <Scene>
        <Stage adjustCamera={false} shadows={false}>
          <PresentationControls>
            {model_url && <Model model_url={model_url} />}
            {!model_url && <Box args={[1, 1, 1]} material-color='cyan' />}
          </PresentationControls>
        </Stage>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} />
      </Scene>
    </div>
  );
};

export { BaseScene };
