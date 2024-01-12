# Open-Viewer

A 3D Model Viewer component library built to make prototyping with react-three faster

### Getting Started

- Clone Project

```bash
  git clone 
```

- CD into repo and install dependencies

```bash
  cd ./open-viewer
  npm i
```

- Start dev server

```bash
  npm run dev
```

### Basic usage:

```jsx
import {OpenViewer} from 'open-viewer';
```

### Index

<table>
    <tr>
        <td valign="top">
            <h4>Components</h4>
            <ul>
                <li><a href="#controls">Controls</a></li>
                <li><a href="#staging">Staging</a></li>
                <li><a href="#misc">Misc</a></li>
            </ul>
        </td>
    </tr>
</table>

# Controls:

#### Base Controls

Creates a Perspective Camera with Camera-Controls from Drei to give a basic controls set up. Double click to reset, re-centers on drag, auto rotate, and auto center.

```ts
type CameraControlsProps = {
    model: modelRefType; // required
    sceneCanvas: sceneEleType, // required
    camera?: PerspectiveCamera | OrthographicCamera;
    domElement?: HTMLElement;
    cameraOrbit?: boolean;
    makeDefault?: boolean;
    disableZoom?: boolean;
    minZoom?: number;
    maxZoom?: number;
    onStart?: (e?: { type: "controlstart" }) => void;
    onEnd?: (e?: { type: "controlend" }) => void;
    onChange?: (e?: { type: "update" }) => void;
};
```

Default set up:

```jsx
  <BaseControls
      model={modelRef} // required
      sceneCanvas={sceneEle} // required
      disableZoom={disable_zoom}
      minZoom={min_zoom}
      maxZoom={max_zoom}
      cameraOrbit={camera_orbit}
  />
```

# Staging:

#### Open Viewer

Creates a 3D scene with a camera, lighting and controls to interact with the scene. Objects are centered, and shadows are preconfigured. Env maps, camera zoom, and camera position are configurable.

```ts
    type Props = {
      model_url: string; // required
      camera_controls?: boolean;
      camera_orbit?: boolean;
      disable_zoom?: boolean;
      min_zoom?: number;
      max_zoom?: number;
      skybox?: string | Array<string>;
      bgColor?: string;
      initialCameraPosition?: [number, number, number];
    };
```

Default set up with only model url provided:

```jsx
<OpenViewer model_url={'MODEL_URL'} />
```

For a more custom approach with a coloured background and updated camera position:

```jsx
<OpenViewer 
  model_url={'MODEL_URL'}
  bgColor={'skyblue'}
  camera_orbit
  initialCameraPosition={[5, 10, 15]}
/>
```

# Misc: