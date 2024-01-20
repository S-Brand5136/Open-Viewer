import"../sb-preview/runtime.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&l(r)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const d="modulepreload",p=function(_,i){return new URL(_,i).href},m={},o=function(i,s,l){let e=Promise.resolve();if(s&&s.length>0){const t=document.getElementsByTagName("link");e=Promise.all(s.map(r=>{if(r=p(r,l),r in m)return;m[r]=!0;const c=r.endsWith(".css"),E=c?'[rel="stylesheet"]':"";if(!!l)for(let a=t.length-1;a>=0;a--){const u=t[a];if(u.href===r&&(!c||u.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${E}`))return;const n=document.createElement("link");if(n.rel=c?"stylesheet":d,c||(n.as="script",n.crossOrigin=""),n.href=r,document.head.appendChild(n),c)return new Promise((a,u)=>{n.addEventListener("load",a),n.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${r}`)))})}))}return e.then(()=>i()).catch(t=>{const r=new Event("vite:preloadError",{cancelable:!0});if(r.payload=t,window.dispatchEvent(r),!r.defaultPrevented)throw t})},{createBrowserChannel:R}=__STORYBOOK_MODULE_CHANNELS__,{addons:f}=__STORYBOOK_MODULE_PREVIEW_API__,O=R({page:"preview"});f.setChannel(O);window.__STORYBOOK_ADDONS_CHANNEL__=O;window.CONFIG_TYPE==="DEVELOPMENT"&&(window.__STORYBOOK_SERVER_CHANNEL__=O);const P={"./src/stories/BaseControls.stories.ts":async()=>o(()=>import("./BaseControls.stories-4iDHLUeO.js"),__vite__mapDeps([0,1,2,3,4,5]),import.meta.url),"./src/stories/BaseScene.stories.ts":async()=>o(()=>import("./BaseScene.stories-rF6F4rhz.js"),__vite__mapDeps([6,1,2,3,4,5]),import.meta.url),"./src/stories/Model.stories.ts":async()=>o(()=>import("./Model.stories-wi8LYTsL.js"),__vite__mapDeps([7,1,2,3,4]),import.meta.url),"./src/stories/OpenViewer.stories.ts":async()=>o(()=>import("./OpenViewer.stories-h4MI_I8i.js"),__vite__mapDeps([8,1,2,3,4,5]),import.meta.url)};async function w(_){return P[_]()}const{composeConfigs:T,PreviewWeb:L,ClientApi:I}=__STORYBOOK_MODULE_PREVIEW_API__,S=async()=>{const _=await Promise.all([o(()=>import("./entry-preview-GDFEuoaf.js"),__vite__mapDeps([9,2,3,10]),import.meta.url),o(()=>import("./entry-preview-docs-iHIfy_B4.js"),__vite__mapDeps([11,12,3,13,2]),import.meta.url),o(()=>import("./preview-VI2eoWmp.js"),__vite__mapDeps([14,15]),import.meta.url),o(()=>import("./preview-PhxfUMjQ.js"),__vite__mapDeps([]),import.meta.url),o(()=>import("./preview-OnO0tzRj.js"),__vite__mapDeps([16,13]),import.meta.url),o(()=>import("./preview-FekBEZxm.js"),__vite__mapDeps([17,13]),import.meta.url),o(()=>import("./preview-TkXSQy1x.js"),__vite__mapDeps([]),import.meta.url),o(()=>import("./preview-u8M_OEO2.js"),__vite__mapDeps([18,13]),import.meta.url),o(()=>import("./preview-bEa2SesL.js"),__vite__mapDeps([]),import.meta.url),o(()=>import("./preview-37XjEtlT.js"),__vite__mapDeps([19,3]),import.meta.url),o(()=>import("./preview-mEb2NEJf.js"),__vite__mapDeps([]),import.meta.url)]);return T(_)};window.__STORYBOOK_PREVIEW__=window.__STORYBOOK_PREVIEW__||new L;window.__STORYBOOK_STORY_STORE__=window.__STORYBOOK_STORY_STORE__||window.__STORYBOOK_PREVIEW__.storyStore;window.__STORYBOOK_CLIENT_API__=window.__STORYBOOK_CLIENT_API__||new I({storyStore:window.__STORYBOOK_PREVIEW__.storyStore});window.__STORYBOOK_PREVIEW__.initialize({importFn:w,getProjectAnnotations:S});export{o as _};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./BaseControls.stories-4iDHLUeO.js","./useControls-hj6x8Pi1.js","./index-XiNr8FW2.js","./_commonjsHelpers-5-cIlDoe.js","./extends-dGVwEr9R.js","./BaseControls--NJ7yRrk.css","./BaseScene.stories-rF6F4rhz.js","./Model.stories-wi8LYTsL.js","./OpenViewer.stories-h4MI_I8i.js","./entry-preview-GDFEuoaf.js","./react-18-8u3SsdfO.js","./entry-preview-docs-iHIfy_B4.js","./_getPrototype-4FkL748a.js","./index-PPLHz8o0.js","./preview-VI2eoWmp.js","./index-ogXoivrg.js","./preview-OnO0tzRj.js","./preview-FekBEZxm.js","./preview-u8M_OEO2.js","./preview-37XjEtlT.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}