(self.webpackChunk_guardian_dotcom_rendering=self.webpackChunk_guardian_dotcom_rendering||[]).push([[4924],{44165:(e,t,r)=>{var i=/^\s+|\s+$/g,n=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,s=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof r.g&&r.g&&r.g.Object===Object&&r.g,a="object"==typeof self&&self&&self.Object===Object&&self,d=c||a||Function("return this")(),u=Object.prototype.toString,f=Math.max,p=Math.min,b=function(){return d.Date.now()};function h(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function v(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==u.call(e)}(e))return NaN;if(h(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=h(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var r=o.test(e);return r||s.test(e)?l(e.slice(2),r?2:8):n.test(e)?NaN:+e}e.exports=function(e,t,r){var i,n,o,s,l,c,a=0,d=!1,u=!1,m=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function j(t){var r=i,o=n;return i=n=void 0,a=t,s=e.apply(o,r)}function x(e){var r=e-c;return void 0===c||r>=t||r<0||u&&e-a>=o}function g(){var e=b();if(x(e))return w(e);l=setTimeout(g,function(e){var r=t-(e-c);return u?p(r,o-(e-a)):r}(e))}function w(e){return l=void 0,m&&i?j(e):(i=n=void 0,s)}function O(){var e=b(),r=x(e);if(i=arguments,n=this,c=e,r){if(void 0===l)return function(e){return a=e,l=setTimeout(g,t),d?j(e):s}(c);if(u)return l=setTimeout(g,t),j(c)}return void 0===l&&(l=setTimeout(g,t)),s}return t=v(t)||0,h(r)&&(d=!!r.leading,o=(u="maxWait"in r)?f(v(r.maxWait)||0,t):o,m="trailing"in r?!!r.trailing:m),O.cancel=function(){void 0!==l&&clearTimeout(l),a=0,i=c=n=l=void 0},O.flush=function(){return void 0===l?s:w(b())},O}},84782:(e,t,r)=>{"use strict";r.d(t,{f:()=>i});var i={desktop:980,leftCol:1140,mobile:320,mobileLandscape:480,mobileMedium:375,phablet:660,tablet:740,wide:1300}},81477:(e,t,r)=>{"use strict";r.d(t,{HT:()=>l,TG:()=>c,Tq:()=>a});var i=r(84782),n=function(e){return"@media (min-width: ".concat("".concat(e,"px"),")")},o=function(e){return"@media (max-width: ".concat("".concat(e-.1,"px"),")")},s=function(e,t){return"@media (min-width: ".concat("".concat(e,"px"),") and (max-width: ","".concat(t-.1,"px"),")")},l={mobile:n(i.f.mobile),mobileMedium:n(i.f.mobileMedium),mobileLandscape:n(i.f.mobileLandscape),phablet:n(i.f.phablet),tablet:n(i.f.tablet),desktop:n(i.f.desktop),leftCol:n(i.f.leftCol),wide:n(i.f.wide)},c={mobile:o(i.f.mobile),mobileMedium:o(i.f.mobileMedium),mobileLandscape:o(i.f.mobileLandscape),phablet:o(i.f.phablet),tablet:o(i.f.tablet),desktop:o(i.f.desktop),leftCol:o(i.f.leftCol),wide:o(i.f.wide)},a={mobile:{and:{mobileMedium:s(i.f.mobile,i.f.mobileMedium),mobileLandscape:s(i.f.mobile,i.f.mobileLandscape),phablet:s(i.f.mobile,i.f.phablet),tablet:s(i.f.mobile,i.f.tablet),desktop:s(i.f.mobile,i.f.desktop),leftCol:s(i.f.mobile,i.f.leftCol),wide:s(i.f.mobileMedium,i.f.wide)}},mobileMedium:{and:{mobileLandscape:s(i.f.mobileMedium,i.f.mobileLandscape),phablet:s(i.f.mobileMedium,i.f.phablet),tablet:s(i.f.mobileMedium,i.f.tablet),desktop:s(i.f.mobileMedium,i.f.desktop),leftCol:s(i.f.mobileMedium,i.f.leftCol),wide:s(i.f.mobileMedium,i.f.wide)}},mobileLandscape:{and:{phablet:s(i.f.mobileLandscape,i.f.phablet),tablet:s(i.f.mobileLandscape,i.f.tablet),desktop:s(i.f.mobileLandscape,i.f.desktop),leftCol:s(i.f.mobileLandscape,i.f.leftCol),wide:s(i.f.mobileLandscape,i.f.wide)}},phablet:{and:{tablet:s(i.f.phablet,i.f.tablet),desktop:s(i.f.phablet,i.f.desktop),leftCol:s(i.f.phablet,i.f.leftCol),wide:s(i.f.phablet,i.f.wide)}},tablet:{and:{desktop:s(i.f.tablet,i.f.desktop),leftCol:s(i.f.tablet,i.f.leftCol),wide:s(i.f.tablet,i.f.wide)}},desktop:{and:{leftCol:s(i.f.desktop,i.f.leftCol),wide:s(i.f.desktop,i.f.wide)}},leftCol:{and:{wide:s(i.f.leftCol,i.f.wide)}}}},83254:(e,t,r)=>{"use strict";r.d(t,{_:()=>c});var i=r(50484),n=r(24017),o=r(72657),s=r(26633),l=function(e){var t=e.size,r=e.theme;return(0,i.jsx)("svg",{width:t?s.RK[t]:void 0,height:void 0,viewBox:"-3 -3 30 30",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0,children:(0,i.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M1 12.956h18.274l-7.167 8.575.932.932L23 12.478v-.956l-9.96-9.985-.932.932 7.166 8.575H1z",fill:null==r?void 0:r.fill})})},c=function(e){var t=e.size,r=e.theme,s=e.isAnnouncedByScreenReader,c=void 0!==s&&s;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(l,{size:t,theme:r}),c?(0,i.jsx)("span",{css:(0,n.css)(o.Q,";"),children:"Arrow right"}):""]})}},6569:(e,t,r)=>{"use strict";r.d(t,{F:()=>c});var i=r(50484),n=r(24017),o=r(72657),s=r(26633),l=function(e){var t=e.size,r=e.theme;return(0,i.jsx)("svg",{width:t?s.RK[t]:void 0,height:void 0,viewBox:"-3 -3 30 30",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0,children:(0,i.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12.015 14.042 20.707 22 22 20.709 14.06 12 22 3.291 20.707 2l-8.692 7.958L3.293 2.03 2 3.321 9.97 12 2 20.679l1.293 1.291z",fill:null==r?void 0:r.fill})})},c=function(e){var t=e.size,r=e.theme,s=e.isAnnouncedByScreenReader,c=void 0!==s&&s;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(l,{size:t,theme:r}),c?(0,i.jsx)("span",{css:(0,n.css)(o.Q,";"),children:"Close"}):""]})}},12790:(e,t,r)=>{"use strict";r.d(t,{y:()=>c});var i=r(50484),n=r(24017),o=r(72657),s=r(26633),l=function(e){var t=e.size,r=e.theme;return(0,i.jsx)("svg",{width:t?s.RK[t]:void 0,height:void 0,viewBox:"-3 -3 30 30",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0,children:(0,i.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9.273 2c4.023 0 7.25 3.295 7.25 7.273a7.226 7.226 0 0 1-7.25 7.25C5.25 16.523 2 13.296 2 9.273 2 5.295 5.25 2 9.273 2m0 1.84A5.403 5.403 0 0 0 3.84 9.274c0 3 2.409 5.454 5.432 5.454 3 0 5.454-2.454 5.454-5.454 0-3.023-2.454-5.432-5.454-5.432m7.295 10.887L22 20.16 20.16 22l-5.433-5.432v-.932l.91-.909z",fill:null==r?void 0:r.fill})})},c=function(e){var t=e.size,r=e.theme,s=e.isAnnouncedByScreenReader,c=void 0!==s&&s;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(l,{size:t,theme:r}),c?(0,i.jsx)("span",{css:(0,n.css)(o.Q,";"),children:"Search"}):""]})}},49450:(e,t,r)=>{"use strict";r.d(t,{E:()=>c});var i=r(50484),n=r(24017),o=r(72657),s=r(26633),l=function(e){var t=e.size,r=e.theme;return(0,i.jsx)("svg",{width:t?s.RK[t]:void 0,height:void 0,viewBox:"-3 -3 30 30",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0,children:(0,i.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M23 7V5H1v2zm0 6v-2H1v2zm0 6v-2H1v2z",fill:null==r?void 0:r.fill})})},c=function(e){var t=e.size,r=e.theme,s=e.isAnnouncedByScreenReader,c=void 0!==s&&s;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(l,{size:t,theme:r}),c?(0,i.jsx)("span",{css:(0,n.css)(o.Q,";"),children:"Menu"}):""]})}},82378:(e,t,r)=>{"use strict";r.d(t,{A:()=>c});var i=r(50484),n=r(24017),o=r(72657),s=r(26633),l=function(e){var t=e.size,r=e.theme;return(0,i.jsx)("svg",{width:t?s.RK[t]:void 0,height:void 0,viewBox:"-3 -3 30 30",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0,children:(0,i.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10m-1.773-7.853-2.27-2.17-.8.8 2.709 3.791h.454l7.455-7.716-.82-.8z",fill:null==r?void 0:r.fill})})},c=function(e){var t=e.size,r=e.theme,s=e.isAnnouncedByScreenReader,c=void 0!==s&&s;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(l,{size:t,theme:r}),c?(0,i.jsx)("span",{css:(0,n.css)(o.Q,";"),children:"Ticked"}):""]})}},30108:(e,t,r)=>{"use strict";r.d(t,{D:()=>s});var i=r(50484),n=r(24017),o=r(72657),s=function(e){var t=e.textColor,r=e.width;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 -3 300 100",fill:t,width:r,focusable:!1,"aria-hidden":!0,children:[(0,i.jsx)("path",{d:"M0 70.8c0-19.5 13-26.4 27.3-26.4 6.1 0 12 1 15.1 2.3l.3 13.6h-1.4L33 47.2c-1.5-.7-2.8-.9-5.4-.9-7.6 0-11.5 8.8-11.4 23.3.1 17.3 3.1 25.1 10.2 25.1 1.8 0 3.2-.2 4.2-.7V75.5l-4.7-2.7v-1.5h22.5V73l-4.6 2.5v18.3a50.1 50.1 0 0 1-17 2.9C10.5 96.7 0 89 0 70.8Z"}),(0,i.jsx)("path",{d:"m142.8 57.9 1.2.1v11h.3c1.6-8 5.2-11 9.5-11 .7 0 1.5 0 1.9.2v11.2c-.7-.2-2-.2-3.1-.2-3.4 0-6 .6-8.2 1.6v21.7l3.4 1.9v1.4h-19.5v-1.4l3.5-2V63l-4.1-1.2v-1l15-2.8Z"}),(0,i.jsx)("path",{d:"M110.2 74v-4.9c0-7.4-1.6-9.9-6.2-9.9l-1.6.2-8.2 11h-1.1V60.3c3.5-1.1 7.9-2.4 13.7-2.4 10 0 15.8 2.8 15.8 11.1v24l3.6 1v1c-1.4.8-4.2 1.6-7.3 1.6-5 0-7.3-1.6-8.4-4.3h-.4c-2 2.8-5 4.4-9.7 4.4-6 0-10-3.7-10-10S94.2 77 102 75.5l8.1-1.6Zm0 16.6V75.8l-2.5.2c-4 .3-5.3 2.8-5.3 8.3 0 6 2 7.6 4.7 7.6 1.5 0 2.4-.5 3.1-1.3Z"}),(0,i.jsx)("path",{d:"M47.5 61.7v-1.1l15-2.7 1.7.2v29.6c0 3.6 1.7 4.7 4.6 4.7 1.9 0 3.6-.7 4.9-2.3V63.5l-4.1-1.8v-1.1l15-2.7 1.6.1v34l4 1.7v1l-14.9 1.9-1.5-.1V92h-.4a16.8 16.8 0 0 1-11.3 4.7c-7.2 0-10.5-4.2-10.5-10.7V63.5l-4.1-1.8Z"}),(0,i.jsx)("path",{d:"M261.5 92.5V63l-4.2-1.4v-1.5l15-2.7h1.5V62h.5c3.2-2.9 8-4.7 12.8-4.7 6.5 0 9.4 3 9.4 10v25.1l3.5 2v1.4h-19.5v-1.4l3.5-2V68c0-3.8-1.7-5.3-4.8-5.3-2 0-3.6.5-5.1 1.6v28.3l3.4 1.9v1.4h-19.6v-1.4l3.6-2Z"}),(0,i.jsx)("path",{d:"m214 57.8 1.4.2v34.5l3.4 1.9v1.4h-19.5v-1.4l3.5-2v-29l-4.2-1.6v-1.2l15.5-2.8Zm1.5-9.3c0 3.7-3.1 6.4-6.7 6.4a6.4 6.4 0 0 1-6.6-6.4c0-3.6 2.9-6.4 6.6-6.4 3.6 0 6.7 2.8 6.7 6.4Z"}),(0,i.jsx)("path",{d:"M239.8 74v-4.9c0-7.4-1.7-9.9-6.2-9.9l-1.6.2-8.2 11h-1.1V60.3c3.5-1.1 7.9-2.4 13.7-2.4 10 0 15.8 2.8 15.8 11.1v24l3.6 1v1c-1.4.8-4.2 1.6-7.4 1.6-5 0-7.3-1.6-8.4-4.3h-.3c-2 2.8-5 4.4-9.7 4.4-6 0-10-3.7-10-10s3.8-9.6 11.7-11.1l8-1.6Zm0 16.6V75.8l-2.5.2c-4 .3-5.4 2.8-5.4 8.3 0 6 2 7.6 4.8 7.6 1.5 0 2.4-.5 3-1.3Z"}),(0,i.jsx)("path",{d:"M180.6 58.8V47.2l-4.1-1.4v-1l15.2-2.7 1.5.2V92l4.2 1.5v1.3l-15 2-1.2-.2v-4h-.4a13.4 13.4 0 0 1-10 4.1c-8.1 0-14.1-6.2-14.1-19 0-13.5 7-20 17.5-20 3 0 5.3.5 6.4 1.1Zm0 31.8V61c-1-.6-1.7-1.4-4.2-1.3-4 .2-6.6 6.3-6.6 17.2 0 9.8 1.9 15.3 7.3 15.1 1.5 0 2.7-.6 3.5-1.3Z"}),(0,i.jsx)("path",{d:"m68.1 51.6 5.2-2.7V8.5h-4L60 21.1h-1.1l.6-14h41.3l.6 14H100L90.8 8.5h-4v40.3l5.2 2.7V53H68.1v-1.3Z"}),(0,i.jsx)("path",{d:"M105.4 49.8V5l-4-1.6v-.8L115.9 0h1.5v21.2l.4-.4c3.2-2.8 7.8-4.5 12.4-4.5 6.3 0 9.1 3.5 9.1 10.2v23.3l3.4 1.8V53h-18.9v-1.4l3.4-1.8V26.4c0-3.7-1.6-5.1-4.6-5.1a8 8 0 0 0-5 1.6v27l3.3 1.8V53h-19v-1.3l3.5-2Z"}),(0,i.jsx)("path",{d:"M153.7 36c.4 7.4 3.7 13.1 11.6 13.1 3.8 0 6.5-1.7 9-3v1.4c-1.9 2.7-6.9 6.5-13.8 6.5-12.2 0-18.5-6.8-18.5-18.5 0-11.5 6.8-18.6 17.9-18.6 10.3 0 15.7 5.2 15.7 18.8v.3h-21.9Zm-.2-1.7 10.8-.6c0-9.2-1.6-15.3-4.8-15.3-3.3 0-6 7-6 16Z"})]}),(0,i.jsx)("span",{css:(0,n.css)(o.Q,";"),children:"The Guardian"})]})}},28673:(e,t,r)=>{"use strict";r.d(t,{$:()=>u});var i=r(62335),n=r(5926),o=r(50484),s=r(48264),l=r(44759),c=["priority","size","icon","iconSide","hideLabel","nudgeIcon","type","isLoading","loadingAnnouncement","cssOverrides","children","theme"];function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){(0,i.A)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var u=function(e){var t=e.priority,r=e.size,i=e.icon,a=e.iconSide,u=e.hideLabel,f=e.nudgeIcon,p=e.type,b=void 0===p?"button":p,h=e.isLoading,v=void 0!==h&&h,m=e.loadingAnnouncement,j=void 0===m?"Loading":m,x=e.cssOverrides,g=e.children,w=e.theme,O=(0,n.A)(e,c);return(0,o.jsx)("button",d(d({css:(0,l.V)({size:r,priority:t,icon:i,hideLabel:u,iconSide:a,nudgeIcon:f,cssOverrides:x,isLoading:v,theme:w}),type:b,"aria-live":"polite","aria-label":v?j:void 0},O),{},{children:(0,s.b)({hideLabel:u,iconSvg:i,isLoading:v,children:g})}))}},25549:(e,t,r)=>{"use strict";r.d(t,{L:()=>s});var i=r(50484),n=r(24017),o=r(81477),s=function(e){var t,r=e.children,s=e.above,l=e.below,c=e.from,a=void 0===c?s:c,d=e.until,u=void 0===d?l:d;return u&&(t=(0,n.css)(o.TG[u],"{display:none;}")),a&&(t=(0,n.css)(t," ",o.HT[a],"{display:none;}")),(0,i.jsx)("span",{css:t,children:r})}},64383:(e,t,r)=>{"use strict";r.d(t,{J:()=>u});var i=r(62335),n=r(5926),o=r(50484),s=r(55983),l=r(83106),c=["text","supporting","optional","hideLabel","size","cssOverrides","children","theme"];function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){(0,i.A)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var u=function(e){var t=e.text,r=e.supporting,i=e.optional,a=void 0!==i&&i,u=e.hideLabel,f=void 0!==u&&u,p=e.size,b=e.cssOverrides,h=e.children,v=e.theme,m=(0,n.A)(e,c);return(0,o.jsxs)("label",d(d({css:b},m),{},{children:[(0,o.jsx)(l.E,{hideLabel:f,text:t,optional:a,size:p,theme:v}),r?(0,o.jsx)(s.N,{hideLabel:f,theme:v,children:r}):"",h]}))}},73598:(e,t,r)=>{"use strict";r.d(t,{k:()=>A});var i=r(62335),n=r(5926),o=r(50484),s=r(67400),l=r(64383),c=r(73499),a=r(60646),d=r(53578),u=r(24017),f=r(26633),p=r(59648),b=r(62898),h=r(71653),v={medium:(0,u.css)(h.NA0,";height:",f.Ej.medium,"px;"),small:(0,u.css)(h.WuG,";height:",f.Ej.small,"px;")},m=function(e){return(0,u.css)("border:2px solid ",e.borderError,";border-radius:4px;color:",e.textError,";margin-top:0;")},j=function(e){return(0,u.css)("border:2px solid ",e.borderSuccess,";border-radius:4px;color:",e.textSuccess,";margin-top:0;")},x=(0,u.css)("margin-top:",p.x[1],"px;"),g={name:"j9a02z",styles:"margin-top:6px"},w={name:"s079uh",styles:"margin-top:2px"},O={name:"1d3w5wq",styles:"width:100%"},y=r(97963),M=r(50641);function L(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}var P={textUserInput:M.M.neutral[7],textLabel:M.M.neutral[7],textOptional:M.M.neutral[46],textSupporting:M.M.neutral[46],textError:M.M.neutral[7],textSuccess:M.M.success[400],backgroundInput:M.M.neutral[100],border:M.M.neutral[46],borderError:M.M.error[400],borderSuccess:M.M.success[400]},z=(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?L(Object(r),!0).forEach((function(t){(0,i.A)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):L(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}}({textInput:{textUserInput:M.M.neutral[7],textLabel:M.M.neutral[7],textLabelOptional:M.M.neutral[46],textLabelSupporting:M.M.neutral[46],textError:M.M.neutral[7],textSuccess:M.M.success[400],backgroundInput:M.M.neutral[100],border:M.M.neutral[46],borderActive:M.M.focus[400],borderError:M.M.error[400],borderSuccess:M.M.success[400]}},y.XS),r(85075)),k=["id","label","optional","hideLabel","supporting","size","width","error","success","theme","cssOverrides"];function S(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function C(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?S(Object(r),!0).forEach((function(t){(0,i.A)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):S(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var V={30:{name:"vuoane",styles:"width:40ex;max-width:100%"},10:{name:"a09flp",styles:"width:18ex"},4:{name:"1nw5b9o",styles:"width:9ex"}},A=function(e){var t=e.id,r=e.label,i=e.optional,f=void 0!==i&&i,h=e.hideLabel,y=void 0!==h&&h,M=e.supporting,L=e.size,S=void 0===L?"medium":L,A=e.width,D=e.error,E=e.success,R=e.theme,I=e.cssOverrides,Z=(0,n.A)(e,k),T=(0,s.useId)(),B=null!=t?t:T,F=function(e){return(0,d.z)(P,R,e.textInput)};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(l.J,{text:r,optional:!!f,hideLabel:y,supporting:M,theme:R,size:S,htmlFor:B,children:[D&&(0,o.jsx)("div",{css:w,children:(0,o.jsx)(c.W,{id:(0,z.I)(B),theme:R,size:S,children:D})}),!D&&E&&(0,o.jsx)("div",{css:w,children:(0,o.jsx)(a.H,{id:(0,z.I)(B),theme:R,size:S,children:E})})]}),(0,o.jsx)("input",C({css:function(e){return[A?V[A]:O,(t=F(e),r=S,(0,u.css)("box-sizing:border-box;",v[r],";color:",t.textUserInput,";background-color:",t.backgroundInput,";border:1px solid ",t.border,";border-radius:4px;padding:0 ",p.x[2],"px;&:focus{",b.b,";}&:invalid{box-shadow:none;&[value]:not([value='']){",m(t),";}}")),M?g:x,D?m(F(e)):"",!D&&E?j(F(e)):"",I];var t,r},type:"text",id:B,"aria-required":!f,"aria-invalid":!!D,"aria-describedby":(null!=D?D:E)?(0,z.I)(B):"",required:!f},Z))]})}},60646:(e,t,r)=>{"use strict";r.d(t,{H:()=>f});var i=r(62335),n=r(5926),o=r(50484),s=r(82378),l=r(10349),c=r(23822),a=["children","size","cssOverrides","theme"];function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach((function(t){(0,i.A)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var f=function(e){var t=e.children,r=e.size,i=void 0===r?"medium":r,d=e.cssOverrides,f=e.theme,p=(0,n.A)(e,a);return(0,o.jsxs)("span",u(u({css:function(e){return[(0,c.R)((0,l.y)(e.userFeedback,f),i),d]},role:"alert"},p),{},{children:[(0,o.jsx)(s.A,{}),t]}))}}}]);
//# sourceMappingURL=4924.client.web.legacy.512512d371f2d0675b9e.js.map