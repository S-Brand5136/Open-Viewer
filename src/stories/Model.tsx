import { GroupProps } from "@react-three/fiber";
import {
  BaseScene,
  Controls,
  Model as ProvidedModel,
  useBaseScene,
} from "../core";
import { Stage } from "@react-three/drei";

type Props = { model_url: string; groupProps?: GroupProps };

const Model = ({ model_url, groupProps }: Props) => {
  const { modelRef, sceneEle } = useBaseScene();

  return (
    <div className='container'>
      <BaseScene>
        <Stage adjustCamera={false}>
          <ProvidedModel model_url={model_url} props={{ ...groupProps }} />
        </Stage>
        <Controls model={modelRef} sceneCanvas={sceneEle} />
      </BaseScene>
    </div>
  );
};

export { Model };
