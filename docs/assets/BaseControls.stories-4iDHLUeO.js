import{u as x,j as e,B as y,S as Z,M as S,C}from"./useControls-hj6x8Pi1.js";import"./index-XiNr8FW2.js";import"./_commonjsHelpers-5-cIlDoe.js";import"./extends-dGVwEr9R.js";const o=({model_url:s,cameraOrbit:c,cameraOrbitSpeed:u,disableZoom:p,minZoom:b,maxZoom:f})=>{const{modelRef:g,sceneEle:_}=x();return e.jsx("div",{className:"container",children:e.jsxs(y,{children:[e.jsx(Z,{adjustCamera:!1,children:e.jsx(S,{model_url:s})}),e.jsx(C,{model:g,sceneCanvas:_,cameraOrbit:c,cameraOrbitSpeed:u,disableZoom:p,minZoom:b,maxZoom:f})]})})};try{o.displayName="BaseControls",o.__docgenInfo={description:"",displayName:"BaseControls",props:{model_url:{defaultValue:null,description:"",name:"model_url",required:!0,type:{name:"string"}},cameraOrbit:{defaultValue:null,description:"",name:"cameraOrbit",required:!1,type:{name:"boolean"}},cameraOrbitSpeed:{defaultValue:null,description:"",name:"cameraOrbitSpeed",required:!1,type:{name:"number"}},disableZoom:{defaultValue:null,description:"",name:"disableZoom",required:!1,type:{name:"boolean"}},minZoom:{defaultValue:null,description:"",name:"minZoom",required:!1,type:{name:"number"}},maxZoom:{defaultValue:null,description:"",name:"maxZoom",required:!1,type:{name:"number"}}}}}catch{}const q={title:"Controls/Controls",component:o,parameters:{layout:"fullscreen"},tags:["autodocs"],argTypes:{model_url:{control:{type:"text",defaultValue:"./models/toaster.glb"},description:"URL of the model to load"}}},a={args:{model_url:"./models/toaster.glb"}},r={args:{model_url:"./models/toaster.glb",cameraOrbit:!0,cameraOrbitSpeed:.1,disableZoom:!0,minZoom:5,maxZoom:10}};var t,l,n;a.parameters={...a.parameters,docs:{...(t=a.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    model_url: "./models/toaster.glb"
  }
}`,...(n=(l=a.parameters)==null?void 0:l.docs)==null?void 0:n.source}}};var m,d,i;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    model_url: "./models/toaster.glb",
    cameraOrbit: true,
    cameraOrbitSpeed: 0.1,
    disableZoom: true,
    minZoom: 5,
    maxZoom: 10
  }
}`,...(i=(d=r.parameters)==null?void 0:d.docs)==null?void 0:i.source}}};const h=["Basic","Advanced"];export{r as Advanced,a as Basic,h as __namedExportsOrder,q as default};
