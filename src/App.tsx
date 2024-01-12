import { Box } from "@chakra-ui/react";
import OpenViewer from "./core/OpenViewer";

function App() {
  return (
    <Box height={"100vh"} w={"100vw"}>
      <OpenViewer
        camera_controls
        model_url='./models/toaster.glb'
      />
    </Box>
  );
}

export default App;
