import { OpenViewer } from "./web";

function App() {
  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <OpenViewer camera_controls model_url='./models/toaster.glb' />
    </div>
  );
}

export default App;
