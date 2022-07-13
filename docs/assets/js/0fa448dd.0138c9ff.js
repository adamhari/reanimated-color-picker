"use strict";(self.webpackChunkmy_docs=self.webpackChunkmy_docs||[]).push([[137],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(r),m=i,h=c["".concat(s,".").concat(m)]||c[m]||d[m]||l;return r?n.createElement(h,a(a({ref:t},u),{},{components:r})):n.createElement(h,a({ref:t},u))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=r.length,a=new Array(l);a[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,a[1]=o;for(var p=2;p<l;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},1012:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var n=r(7462),i=(r(7294),r(3905));const l={sidebar_position:9,sidebar_label:"BrightnessSlider",description:"A slider to change the color's brightness."},a="<BrightnessSlider />",o={unversionedId:"API/BrightnessSlider",id:"API/BrightnessSlider",title:"<BrightnessSlider />",description:"A slider to change the color's brightness.",source:"@site/docs/API/BrightnessSlider.md",sourceDirName:"API",slug:"/API/BrightnessSlider",permalink:"/reanimated-color-picker/docs/API/BrightnessSlider",draft:!1,tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9,sidebar_label:"BrightnessSlider",description:"A slider to change the color's brightness."},sidebar:"tutorialSidebar",previous:{title:"SaturationSlider",permalink:"/reanimated-color-picker/docs/API/SaturationSlider"},next:{title:"OpacitySlider",permalink:"/reanimated-color-picker/docs/API/OpacitySlider"}},s={},p=[{value:"thumbSize",id:"thumbsize",level:2},{value:"thumbColor",id:"thumbcolor",level:2},{value:"thumbShape",id:"thumbshape",level:2},{value:"reverse",id:"reverse",level:2},{value:"vertical",id:"vertical",level:2},{value:"style",id:"style",level:2}],u={toc:p};function d(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"brightnessslider-"},(0,i.kt)("inlineCode",{parentName:"h1"},"<BrightnessSlider />")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://github.com/alabsi91/reanimated-color-picker/blob/main/images/brightness.png?raw=true",alt:"brightness"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A slider to change the color brightness.")),(0,i.kt)("h2",{id:"thumbsize"},"thumbSize"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The size of the slider's thumb."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"type: number")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"default: 35"))),(0,i.kt)("h2",{id:"thumbcolor"},"thumbColor"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The color of the slider's thumb."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"type: string")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"default: interactive*"))),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,i.kt)("strong",{parentName:"mdxAdmonitionTitle"},"*","interactive")),(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"The thumb color will be changed depending on the contrast ratio if no color value is passed."))),(0,i.kt)("h2",{id:"thumbshape"},"thumbShape"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The shape and appearance of the slider's thumb."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"type: string")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"default: 'ring'")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"values: 'ring' | 'solid' | 'hollow' | 'line' | 'plus' | 'pill' | 'triangleUp' | 'triangleDown' | 'doubleTriangle' | 'rect' | 'circle'"))),(0,i.kt)("h2",{id:"reverse"},"reverse"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Reverse the slider direction."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"type: boolean")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"default: false"))),(0,i.kt)("h2",{id:"vertical"},"vertical"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Change the slider orientation."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"type: boolean")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"default: false"))),(0,i.kt)("h2",{id:"style"},"style"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The style of the slider's container."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"type: ViewStyle"))),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"Some style properties will be overwritten."))))}d.isMDXComponent=!0}}]);