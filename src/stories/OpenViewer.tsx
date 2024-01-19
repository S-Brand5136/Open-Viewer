import { OpenViewer as OpenView } from "../core";
import "./openviewer.css";

type Props = {
  model_url: string;
  camera_controls?: boolean;
  camera_orbit_speed?: number;
  camera_orbit?: boolean;
  disable_zoom?: boolean;
  min_zoom?: number;
  max_zoom?: number;
  skybox?: string | Array<string>;
  bgColor?: string;
  initialCameraPosition?: [number, number, number];
};

export default function Test({
  model_url,
  camera_controls,
  camera_orbit,
  camera_orbit_speed,
  disable_zoom,
  min_zoom,
  max_zoom,
  skybox,
  bgColor,
  initialCameraPosition,
}: Props) {
  return (
    <div className='container'>
      <OpenView
        camera_controls={camera_controls}
        camera_orbit={camera_orbit}
        camera_orbit_speed={camera_orbit_speed}
        disable_zoom={disable_zoom}
        min_zoom={min_zoom}
        max_zoom={max_zoom}
        skybox={skybox}
        bgColor={bgColor}
        initialCameraPosition={initialCameraPosition}
        model_url={model_url}
      />
    </div>
  );
}
