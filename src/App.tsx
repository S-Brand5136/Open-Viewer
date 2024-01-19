import { Stage } from "@react-three/drei";
import Model from "./core/Model";
import { BaseControls, BaseScene, useBaseScene } from "./web";

function App() {
  const { modelRef, sceneEle } = useBaseScene();

  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      {/* <OpenViewer camera_controls model_url={"./models/toaster.glb"} /> */}
      <BaseScene>
        <Stage>
          <Model model_url={"./models/toaster.glb"} />
        </Stage>
        <BaseControls model={modelRef} sceneCanvas={sceneEle} />
      </BaseScene>
    </div>
  );
}

export default App;
