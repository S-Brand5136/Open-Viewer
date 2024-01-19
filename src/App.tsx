import { Stage } from "@react-three/drei";
import Model from "./core/Model";
import { Controls, BaseScene, useBaseScene } from "./web";

function App() {
  const { modelRef, sceneEle } = useBaseScene();

  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <BaseScene>
        <Stage>
          <Model model_url={"./models/toaster.glb"} />
        </Stage>
        <Controls model={modelRef} sceneCanvas={sceneEle} />
      </BaseScene>
    </div>
  );
}

export default App;
