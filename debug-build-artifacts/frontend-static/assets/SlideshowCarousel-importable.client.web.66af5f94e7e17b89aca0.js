"use strict";(self.webpackChunk_guardian_dotcom_rendering=self.webpackChunk_guardian_dotcom_rendering||[]).push([[4747],{52150:(e,t,n)=>{n.d(t,{B:()=>g});var i=n(50484),r=n(24017),o=n(92280),a=n(96378),l=n(67400),s=n(37540);function c(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function d(){const e=c(["\n\tdisplay: block;\n"]);return d=function(){return e},e}function f(){const e=c(["\n\t\tpadding-top: ",";\n\t\tposition: relative;\n\t\t& > * {\n\t\t\tposition: absolute;\n\t\t\ttop: 0;\n\t\t\tleft: 0;\n\t\t\twidth: 100%;\n\t\t\theight: 100%;\n\t\t}\n\t"]);return f=function(){return e},e}function u(){const e=c(["\n\t& > * {\n\t\tborder-radius: ","px;\n\t}\n"]);return u=function(){return e},e}function b(){const e=c(["\n\tborder-radius: 100%;\n\tobject-fit: cover;\n\theight: 100%;\n\twidth: 100%;\n"]);return b=function(){return e},e}const p=(0,r.css)(d()),m=e=>{const t=(e=>{switch(e){case"5:4":return"80%";case"4:5":return"125%";case"1:1":return"100%";default:return"60%"}})(e);return(0,r.css)(f(),t)},h=(0,r.css)(u(),a.x[2]),w=(0,r.css)(b()),g=e=>{let{mainImage:t,alt:n,imageSize:r,loading:a,roundedCorners:c,isCircular:d,aspectRatio:f}=e;const u=(0,s.Ip)(t,(e=>{switch(e){case"carousel":return[{breakpoint:o.f.mobile,width:220}];case"small":return[{breakpoint:o.f.mobile,width:120},{breakpoint:o.f.tablet,width:160},{breakpoint:o.f.desktop,width:220}];case"medium":return[{breakpoint:o.f.mobile,width:240},{breakpoint:o.f.tablet,width:330},{breakpoint:o.f.desktop,width:460}];case"large":return[{breakpoint:o.f.mobile,width:360},{breakpoint:o.f.mobileLandscape,width:480},{breakpoint:o.f.tablet,width:500},{breakpoint:o.f.desktop,width:700}];case"jumbo":return[{breakpoint:o.f.mobile,width:360},{breakpoint:o.f.mobileLandscape,width:480},{breakpoint:o.f.tablet,width:680},{breakpoint:o.f.desktop,width:940}];case"feature":return[{breakpoint:o.f.mobile,width:325},{breakpoint:o.f.tablet,width:220},{breakpoint:o.f.desktop,width:300}];case"feature-large":return[{breakpoint:o.f.mobile,width:325},{breakpoint:o.f.tablet,width:337},{breakpoint:o.f.desktop,width:460}]}})(r),f),b=(0,s.sP)(u);return(0,i.jsxs)("picture",{"data-size":r,css:[p,m(f),c&&h,d&&w],children:[u.map((e=>(0,i.jsxs)(l.default.Fragment,{children:[(0,i.jsx)("source",{srcSet:e.hiResUrl,media:"(min-width: ".concat(e.breakpoint,"px) and (-webkit-min-device-pixel-ratio: 1.25), (min-width: ").concat(e.breakpoint,"px) and (min-resolution: 120dpi)")}),(0,i.jsx)("source",{srcSet:e.lowResUrl,media:"(min-width: ".concat(e.breakpoint,"px)")})]},e.breakpoint))),(0,i.jsx)("img",{alt:null!=n?n:"",src:b.lowResUrl,css:[p,d&&w],loading:a,"data-chromatic":"ignore"})]})}},58336:(e,t,n)=>{n.r(t),n.d(t,{SlideshowCarousel:()=>X});var i=n(50484),r=n(24017),o=n(7351),a=n(96378),l=n(99923),s=n(78055),c=n(27123),d=n(45717),f=n(78580),u=n(67400),b=n(16599),p=n(53694),m=n(52150);function h(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function w(){const e=h(["\n\toverflow: hidden;\n\tmax-width: ","px;\n"]);return w=function(){return e},e}function g(){const e=h(["\n\tdisplay: grid;\n\tgap: ","px;\n\tgrid-template-columns: repeat(",", ","px);\n\tpadding: 4px;\n\ttransition: transform 0.25s ease;\n"]);return g=function(){return e},e}function v(){const e=h(["\n\twidth: ","px;\n\theight: ","px;\n\tborder-radius: 100%;\n\tbackground-color: ",";\n\ttransition: all 0.25s ease;\n"]);return v=function(){return e},e}function x(){const e=h(["\n\ttransform: scale(1.15);\n\tbackground-color: ",";\n"]);return x=function(){return e},e}function j(){const e=h(["\n\ttransform: scale(0.85);\n"]);return j=function(){return e},e}function k(){const e=h(["\n\ttransform: scale(0);\n"]);return k=function(){return e},e}const y=Math.floor(2.5),O=(0,r.css)(w(),59),L=e=>(0,r.css)(g(),4,e,7),C=(0,r.css)(v(),7,7,(0,p.M)("--slideshow-pagination-dot")),S=(0,r.css)(x(),(0,p.M)("--slideshow-pagination-dot-active")),z=(0,r.css)(j()),M=(0,r.css)(k()),P=e=>{let{total:t,current:n}=e;const r=e=>{if(!(t<=5))return 4===e&&n<y||e===t-5&&n>=t-y-1||e===n+y&&n>=y&&n<t-y-1||e===n-y&&n>y&&n<=t-y-1?z:e===n+y+1&&n>=y&&n<t-y-1||e===n-y-1&&n>y&&n<=t-y-1?M:void 0};return(0,i.jsx)("div",{css:O,children:(0,i.jsx)("div",{css:L(t),style:(()=>{if(!(t<=5))return n<y?{transform:"translateX(0)"}:n>=t-y?{transform:"translateX(".concat(-11*(t-5),"px)")}:{transform:"translateX(".concat(-11*(n-y),"px)")}})(),children:Array.from({length:t},((e,t)=>(0,i.jsx)("span",{css:[C,n===t&&S,r(t)]},t)))})})};function R(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function T(){const e=R(["\n\tdisplay: flex;\n\toverflow-x: auto;\n\toverflow-y: hidden;\n\tscroll-snap-type: x mandatory;\n\tscroll-behavior: smooth;\n\toverscroll-behavior: contain auto;\n\t/**\n\t * Hide scrollbars\n\t * See: https://stackoverflow.com/a/38994837\n\t */\n\t::-webkit-scrollbar {\n\t\tdisplay: none; /* Safari and Chrome */\n\t}\n\tscrollbar-width: none; /* Firefox */\n"]);return T=function(){return e},e}function A(){const e=R(["\n\tposition: relative;\n\tflex: 1 0 100%;\n\tscroll-snap-align: start;\n"]);return A=function(){return e},e}function B(){const e=R(["\n\tposition: absolute;\n\tbottom: 0;\n\tleft: 0;\n\tright: 0;\n\t","\n\tcolor: ",";\n\tbackground: linear-gradient(\n\t\tto bottom,\n\t\trgba(0, 0, 0, 0) 0%,\n\t\trgba(0, 0, 0, 0.8) 100%\n\t);\n\tpadding: ","px ","px ","px;\n"]);return B=function(){return e},e}function I(){const e=R(["\n\tdisplay: flex;\n\talign-items: center;\n\tmargin-top: ","px;\n"]);return I=function(){return e},e}function E(){const e=R(["\n\tdisplay: none;\n\t"," {\n\t\tdisplay: flex;\n\t\tgap: ","px;\n\t}\n"]);return E=function(){return e},e}function F(){const e=R(["\n\tdisplay: flex;\n\tjustify-content: center;\n\tflex: 1 0 0;\n\t"," {\n\t\tpadding-left: ","px;\n\t}\n"]);return F=function(){return e},e}const H={borderTertiary:(0,p.M)("--carousel-chevron-border"),textTertiary:(0,p.M)("--carousel-chevron"),backgroundTertiaryHover:(0,p.M)("--carousel-chevron-hover")},_={borderTertiary:(0,p.M)("--carousel-chevron-border-disabled"),textTertiary:(0,p.M)("--carousel-chevron-disabled"),backgroundTertiaryHover:"transparent"},D=(0,r.css)(T()),V=(0,r.css)(A()),q=(0,r.css)(B(),o.rDY,(0,p.M)("--slideshow-caption"),a.x[10],a.x[2],a.x[2]),W=(0,r.css)(I(),a.x[2]),G=(0,r.css)(E(),l.HT.tablet,a.x[1]),U=(0,r.css)(F(),l.HT.tablet,2*s.VL.ctaSmall+a.x[2]),X=e=>{let{images:t,imageSize:n}=e;const r=(0,u.useRef)(null),[o,a]=(0,u.useState)(!1),[l,s]=(0,u.useState)(!0),[p,h]=(0,u.useState)(0),w=e=>{var t,n;if(!r.current)return;const i=null!==(n=null===(t=r.current.querySelector("li"))||void 0===t?void 0:t.offsetWidth)&&void 0!==n?n:0,o="left"===e?-i:i;r.current.scrollBy({left:o,behavior:"smooth"})},g=()=>{var e;const t=r.current;if(!t)return;const n=t.scrollLeft,i=t.scrollWidth-t.clientWidth;var o;const l=null!==(o=null===(e=t.querySelector("li"))||void 0===e?void 0:e.offsetWidth)&&void 0!==o?o:0;a(n>l/2),s(n<i-l/2),h(Math.round(n/l))},v=e=>{let t;return function(){cancelAnimationFrame(t),t=requestAnimationFrame(e)}};(0,u.useEffect)((()=>{const e=r.current;if(e)return e.addEventListener("scroll",v(g)),()=>{e.removeEventListener("scroll",v(g))}}),[]);const x=(0,b.SG)(t,10),j=x.length;return(0,i.jsxs)("div",{children:[(0,i.jsx)("ul",{ref:r,css:D,"data-heatphan-type":"carousel",children:x.map(((e,t)=>{const r=t>0?"lazy":"eager";return(0,i.jsx)("li",{css:V,children:(0,i.jsxs)("figure",{children:[(0,i.jsx)(m.B,{mainImage:e.imageSrc,imageSize:n,aspectRatio:"5:4",alt:e.imageCaption,loading:r}),!!e.imageCaption&&(0,i.jsx)("figcaption",{css:q,children:e.imageCaption})]})},e.imageSrc)}))}),j>1&&(0,i.jsxs)("div",{css:W,children:[(0,i.jsx)("div",{css:U,children:(0,i.jsx)(P,{total:j,current:p})}),(0,i.jsxs)("div",{css:G,children:[(0,i.jsx)(c.$,{hideLabel:!0,iconSide:"left",icon:(0,i.jsx)(d.P,{}),onClick:()=>w("left"),priority:"tertiary",theme:o?H:_,size:"small",disabled:!o,"aria-label":"View next image in slideshow"}),(0,i.jsx)(c.$,{hideLabel:!0,iconSide:"left",icon:(0,i.jsx)(f.s,{}),onClick:()=>w("right"),priority:"tertiary",theme:l?H:_,size:"small",disabled:!l,"aria-label":"View previous image in slideshow"})]})]})]})}},16599:(e,t,n)=>{n.d(t,{SG:()=>i});const i=(e,t)=>e.slice(0,t)},53694:(e,t,n)=>{n.d(t,{M:()=>i});const i=e=>"var(".concat(e,")")},92280:(e,t,n)=>{n.d(t,{f:()=>i});const i={desktop:980,leftCol:1140,mobile:320,mobileLandscape:480,mobileMedium:375,phablet:660,tablet:740,wide:1300}},99923:(e,t,n)=>{n.d(t,{HT:()=>l,TG:()=>s,Tq:()=>c});var i=n(92280);const r=e=>"@media (min-width: ".concat("".concat(e,"px"),")"),o=e=>"@media (max-width: ".concat("".concat(e-.1,"px"),")"),a=(e,t)=>"@media (min-width: ".concat("".concat(e,"px"),") and (max-width: ").concat("".concat(t-.1,"px"),")"),l={mobile:r(i.f.mobile),mobileMedium:r(i.f.mobileMedium),mobileLandscape:r(i.f.mobileLandscape),phablet:r(i.f.phablet),tablet:r(i.f.tablet),desktop:r(i.f.desktop),leftCol:r(i.f.leftCol),wide:r(i.f.wide)},s={mobile:o(i.f.mobile),mobileMedium:o(i.f.mobileMedium),mobileLandscape:o(i.f.mobileLandscape),phablet:o(i.f.phablet),tablet:o(i.f.tablet),desktop:o(i.f.desktop),leftCol:o(i.f.leftCol),wide:o(i.f.wide)},c={mobile:{and:{mobileMedium:a(i.f.mobile,i.f.mobileMedium),mobileLandscape:a(i.f.mobile,i.f.mobileLandscape),phablet:a(i.f.mobile,i.f.phablet),tablet:a(i.f.mobile,i.f.tablet),desktop:a(i.f.mobile,i.f.desktop),leftCol:a(i.f.mobile,i.f.leftCol),wide:a(i.f.mobileMedium,i.f.wide)}},mobileMedium:{and:{mobileLandscape:a(i.f.mobileMedium,i.f.mobileLandscape),phablet:a(i.f.mobileMedium,i.f.phablet),tablet:a(i.f.mobileMedium,i.f.tablet),desktop:a(i.f.mobileMedium,i.f.desktop),leftCol:a(i.f.mobileMedium,i.f.leftCol),wide:a(i.f.mobileMedium,i.f.wide)}},mobileLandscape:{and:{phablet:a(i.f.mobileLandscape,i.f.phablet),tablet:a(i.f.mobileLandscape,i.f.tablet),desktop:a(i.f.mobileLandscape,i.f.desktop),leftCol:a(i.f.mobileLandscape,i.f.leftCol),wide:a(i.f.mobileLandscape,i.f.wide)}},phablet:{and:{tablet:a(i.f.phablet,i.f.tablet),desktop:a(i.f.phablet,i.f.desktop),leftCol:a(i.f.phablet,i.f.leftCol),wide:a(i.f.phablet,i.f.wide)}},tablet:{and:{desktop:a(i.f.tablet,i.f.desktop),leftCol:a(i.f.tablet,i.f.leftCol),wide:a(i.f.tablet,i.f.wide)}},desktop:{and:{leftCol:a(i.f.desktop,i.f.leftCol),wide:a(i.f.desktop,i.f.wide)}},leftCol:{and:{wide:a(i.f.leftCol,i.f.wide)}}}},45717:(e,t,n)=>{n.d(t,{P:()=>c});var i=n(50484),r=n(24017),o=n(70991),a=n(78055);function l(){const e=(t=["\n\t\t\t\t\t","\n\t\t\t\t"],n||(n=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(n)}})));var t,n;return l=function(){return e},e}const s=e=>{let{size:t,theme:n}=e;return(0,i.jsx)("svg",{width:t?a.RK[t]:void 0,height:void 0,viewBox:"-3 -3 30 30",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0,children:(0,i.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M16.721 1 6.25 11.471v1.058L16.721 23l.982-.956L9.321 12l8.382-10.043z",fill:null==n?void 0:n.fill})})},c=e=>{let{size:t,theme:n,isAnnouncedByScreenReader:a=!1}=e;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s,{size:t,theme:n}),a?(0,i.jsx)("span",{css:(0,r.css)(l(),o.Q),children:"Chevron left"}):""]})}},78580:(e,t,n)=>{n.d(t,{s:()=>c});var i=n(50484),r=n(24017),o=n(70991),a=n(78055);function l(){const e=(t=["\n\t\t\t\t\t","\n\t\t\t\t"],n||(n=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(n)}})));var t,n;return l=function(){return e},e}const s=e=>{let{size:t,theme:n}=e;return(0,i.jsx)("svg",{width:t?a.RK[t]:void 0,height:void 0,viewBox:"-3 -3 30 30",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0,children:(0,i.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"m7.232 1-.982.957L14.632 12 6.25 22.044l.982.956 10.471-10.471V11.47z",fill:null==n?void 0:n.fill})})},c=e=>{let{size:t,theme:n,isAnnouncedByScreenReader:a=!1}=e;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s,{size:t,theme:n}),a?(0,i.jsx)("span",{css:(0,r.css)(l(),o.Q),children:"Chevron right"}):""]})}},27123:(e,t,n)=>{n.d(t,{$:()=>l});var i=n(50484),r=n(43438),o=n(3645);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const l=e=>{var t,n,{priority:l,size:s,icon:c,iconSide:d,hideLabel:f,nudgeIcon:u,type:b="button",isLoading:p=!1,loadingAnnouncement:m="Loading",cssOverrides:h,children:w,theme:g}=e,v=function(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}(e,["priority","size","icon","iconSide","hideLabel","nudgeIcon","type","isLoading","loadingAnnouncement","cssOverrides","children","theme"]);return(0,i.jsx)("button",(t=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},i=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),i.forEach((function(t){a(e,t,n[t])}))}return e}({css:(0,o.V)({size:s,priority:l,icon:c,hideLabel:f,iconSide:d,nudgeIcon:u,cssOverrides:h,isLoading:p,theme:g}),type:b,"aria-live":"polite","aria-label":p?m:void 0},v),n=null!=(n={children:(0,r.b)({hideLabel:f,iconSvg:c,isLoading:p,children:w})})?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n.push.apply(n,i)}return n}(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})),t))}}}]);
//# sourceMappingURL=SlideshowCarousel-importable.client.web.66af5f94e7e17b89aca0.js.map