(self.webpackChunk_guardian_dotcom_rendering=self.webpackChunk_guardian_dotcom_rendering||[]).push([[4714],{44165:(e,t,n)=>{var r=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,l=/^0o[0-7]+$/i,s=parseInt,c="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g,a="object"==typeof self&&self&&self.Object===Object&&self,u=c||a||Function("return this")(),d=Object.prototype.toString,f=Math.max,b=Math.min,p=function(){return u.Date.now()};function h(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function m(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==d.call(e)}(e))return NaN;if(h(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=h(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var n=o.test(e);return n||l.test(e)?s(e.slice(2),n?2:8):i.test(e)?NaN:+e}e.exports=function(e,t,n){var r,i,o,l,s,c,a=0,u=!1,d=!1,v=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function x(t){var n=r,o=i;return r=i=void 0,a=t,l=e.apply(o,n)}function g(e){var n=e-c;return void 0===c||n>=t||n<0||d&&e-a>=o}function j(){var e=p();if(g(e))return w(e);s=setTimeout(j,function(e){var n=t-(e-c);return d?b(n,o-(e-a)):n}(e))}function w(e){return s=void 0,v&&r?x(e):(r=i=void 0,l)}function O(){var e=p(),n=g(e);if(r=arguments,i=this,c=e,n){if(void 0===s)return function(e){return a=e,s=setTimeout(j,t),u?x(e):l}(c);if(d)return s=setTimeout(j,t),x(c)}return void 0===s&&(s=setTimeout(j,t)),l}return t=m(t)||0,h(n)&&(u=!!n.leading,o=(d="maxWait"in n)?f(m(n.maxWait)||0,t):o,v="trailing"in n?!!n.trailing:v),O.cancel=function(){void 0!==s&&clearTimeout(s),a=0,r=c=i=s=void 0},O.flush=function(){return void 0===s?l:w(p())},O}},92280:(e,t,n)=>{"use strict";n.d(t,{f:()=>r});const r={desktop:980,leftCol:1140,mobile:320,mobileLandscape:480,mobileMedium:375,phablet:660,tablet:740,wide:1300}},88469:(e,t,n)=>{"use strict";n.d(t,{I:()=>r});const r=e=>"".concat(e,"_description")},99923:(e,t,n)=>{"use strict";n.d(t,{HT:()=>s,TG:()=>c,Tq:()=>a});var r=n(92280);const i=e=>"@media (min-width: ".concat("".concat(e,"px"),")"),o=e=>"@media (max-width: ".concat("".concat(e-.1,"px"),")"),l=(e,t)=>"@media (min-width: ".concat("".concat(e,"px"),") and (max-width: ").concat("".concat(t-.1,"px"),")"),s={mobile:i(r.f.mobile),mobileMedium:i(r.f.mobileMedium),mobileLandscape:i(r.f.mobileLandscape),phablet:i(r.f.phablet),tablet:i(r.f.tablet),desktop:i(r.f.desktop),leftCol:i(r.f.leftCol),wide:i(r.f.wide)},c={mobile:o(r.f.mobile),mobileMedium:o(r.f.mobileMedium),mobileLandscape:o(r.f.mobileLandscape),phablet:o(r.f.phablet),tablet:o(r.f.tablet),desktop:o(r.f.desktop),leftCol:o(r.f.leftCol),wide:o(r.f.wide)},a={mobile:{and:{mobileMedium:l(r.f.mobile,r.f.mobileMedium),mobileLandscape:l(r.f.mobile,r.f.mobileLandscape),phablet:l(r.f.mobile,r.f.phablet),tablet:l(r.f.mobile,r.f.tablet),desktop:l(r.f.mobile,r.f.desktop),leftCol:l(r.f.mobile,r.f.leftCol),wide:l(r.f.mobileMedium,r.f.wide)}},mobileMedium:{and:{mobileLandscape:l(r.f.mobileMedium,r.f.mobileLandscape),phablet:l(r.f.mobileMedium,r.f.phablet),tablet:l(r.f.mobileMedium,r.f.tablet),desktop:l(r.f.mobileMedium,r.f.desktop),leftCol:l(r.f.mobileMedium,r.f.leftCol),wide:l(r.f.mobileMedium,r.f.wide)}},mobileLandscape:{and:{phablet:l(r.f.mobileLandscape,r.f.phablet),tablet:l(r.f.mobileLandscape,r.f.tablet),desktop:l(r.f.mobileLandscape,r.f.desktop),leftCol:l(r.f.mobileLandscape,r.f.leftCol),wide:l(r.f.mobileLandscape,r.f.wide)}},phablet:{and:{tablet:l(r.f.phablet,r.f.tablet),desktop:l(r.f.phablet,r.f.desktop),leftCol:l(r.f.phablet,r.f.leftCol),wide:l(r.f.phablet,r.f.wide)}},tablet:{and:{desktop:l(r.f.tablet,r.f.desktop),leftCol:l(r.f.tablet,r.f.leftCol),wide:l(r.f.tablet,r.f.wide)}},desktop:{and:{leftCol:l(r.f.desktop,r.f.leftCol),wide:l(r.f.desktop,r.f.wide)}},leftCol:{and:{wide:l(r.f.leftCol,r.f.wide)}}}},74222:(e,t,n)=>{"use strict";n.d(t,{R:()=>o});var r=n(77907);const i="\n\t*, *:before, *:after {\n        box-sizing: border-box;\n    }\n    html {\n        -moz-osx-font-smoothing: grayscale;\n        -webkit-font-smoothing: antialiased;\n        /* always show the vertical scroll bar to stop the page\n         * jumping about when navigating between pages where\n         * one has content shorter than the viewport */\n        overflow-y: scroll;\n    }\n    html, body {\n        text-rendering: optimizeLegibility;\n        font-feature-settings: 'kern';\n        font-kerning: normal; /* Safari 7+, Firefox 24+, Chrome 33(?)+, Opera 21 */\n        font-variant-ligatures: common-ligatures;\n    }\n    body {\n        background-color: ".concat(r.M.neutral[100],";\n        color: ").concat(r.M.neutral[7],";\n    }\n    em {\n        font-style: italic;\n    }\n"),o={legend:"\n\tpadding: 0;\n",fieldset:"\n\tborder: 0;\n\tpadding: 0;\n\tmargin: 0;\n",defaults:i,resetCSS:"\n\thtml, body, div, span, applet, object, iframe,\n\th1, h2, h3, h4, h5, h6, p, blockquote, pre,\n\ta, abbr, acronym, address, big, cite, code,\n\tdel, dfn, em, img, ins, kbd, q, s, samp,\n\tsmall, strike, strong, sub, sup, tt, var,\n\tb, u, i, center,\n\tdl, dt, dd, menu, ol, ul, li,\n\tfieldset, form, label, legend,\n\ttable, caption, tbody, tfoot, thead, tr, th, td,\n\tarticle, aside, canvas, details, embed,\n\tfigure, figcaption, footer, header, hgroup,\n\tmain, menu, nav, output, ruby, section, summary,\n\ttime, mark, audio, video {\n\t\tmargin: 0;\n\t\tpadding: 0;\n\t\tborder: 0;\n\t\tfont-size: 100%;\n\t\tfont: inherit;\n\t\tvertical-align: baseline;\n\t}\n\t/* HTML5 display-role reset for older browsers */\n\tarticle, aside, details, figcaption, figure,\n\tfooter, header, hgroup, main, menu, nav, section {\n\t\tdisplay: block;\n\t}\n\t/* HTML5 hidden-attribute fix for newer browsers */\n\t*[hidden] {\n\t\tdisplay: none;\n\t}\n\tbody {\n\t\tline-height: 1;\n\t}\n\tmenu, ol, ul {\n\t\tlist-style: none;\n\t}\n\tblockquote, q {\n\t\tquotes: none;\n\t}\n\tblockquote:before, blockquote:after,\n\tq:before, q:after {\n\t\tcontent: '';\n\t\tcontent: none;\n\t}\n\ttable {\n\t\tborder-collapse: collapse;\n\t\tborder-spacing: 0;\n\t}\n\n\t".concat(i,"\n")}},81217:(e,t,n)=>{"use strict";n.d(t,{T:()=>a});var r=n(50484),i=n(24017),o=n(70991),l=n(78055);function s(){const e=(t=["\n\t\t\t\t\t","\n\t\t\t\t"],n||(n=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(n)}})));var t,n;return s=function(){return e},e}const c=e=>{let{size:t,theme:n}=e;return(0,r.jsx)("svg",{width:t?l.RK[t]:void 0,height:void 0,viewBox:"-3 -3 30 30",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0,children:(0,r.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10m-10.704 1.818h1.386l.659-8.636-.91-.91h-.885l-.91.91zm2.068 3.637c0-.75-.614-1.364-1.364-1.364s-1.364.614-1.364 1.364.614 1.363 1.364 1.363 1.364-.613 1.364-1.363",fill:null==n?void 0:n.fill})})},a=e=>{let{size:t,theme:n,isAnnouncedByScreenReader:l=!1}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(c,{size:t,theme:n}),l?(0,r.jsx)("span",{css:(0,i.css)(s(),o.Q),children:"Warning"}):""]})}},15168:(e,t,n)=>{"use strict";n.d(t,{_:()=>a});var r=n(50484),i=n(24017),o=n(70991),l=n(78055);function s(){const e=(t=["\n\t\t\t\t\t","\n\t\t\t\t"],n||(n=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(n)}})));var t,n;return s=function(){return e},e}const c=e=>{let{size:t,theme:n}=e;return(0,r.jsx)("svg",{width:t?l.RK[t]:void 0,height:void 0,viewBox:"-3 -3 30 30",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0,children:(0,r.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M1 12.956h18.274l-7.167 8.575.932.932L23 12.478v-.956l-9.96-9.985-.932.932 7.166 8.575H1z",fill:null==n?void 0:n.fill})})},a=e=>{let{size:t,theme:n,isAnnouncedByScreenReader:l=!1}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(c,{size:t,theme:n}),l?(0,r.jsx)("span",{css:(0,i.css)(s(),o.Q),children:"Arrow right"}):""]})}},56607:(e,t,n)=>{"use strict";n.d(t,{F:()=>a});var r=n(50484),i=n(24017),o=n(70991),l=n(78055);function s(){const e=(t=["\n\t\t\t\t\t","\n\t\t\t\t"],n||(n=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(n)}})));var t,n;return s=function(){return e},e}const c=e=>{let{size:t,theme:n}=e;return(0,r.jsx)("svg",{width:t?l.RK[t]:void 0,height:void 0,viewBox:"-3 -3 30 30",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0,children:(0,r.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12.015 14.042 20.707 22 22 20.709 14.06 12 22 3.291 20.707 2l-8.692 7.958L3.293 2.03 2 3.321 9.97 12 2 20.679l1.293 1.291z",fill:null==n?void 0:n.fill})})},a=e=>{let{size:t,theme:n,isAnnouncedByScreenReader:l=!1}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(c,{size:t,theme:n}),l?(0,r.jsx)("span",{css:(0,i.css)(s(),o.Q),children:"Close"}):""]})}},40368:(e,t,n)=>{"use strict";n.d(t,{y:()=>a});var r=n(50484),i=n(24017),o=n(70991),l=n(78055);function s(){const e=(t=["\n\t\t\t\t\t","\n\t\t\t\t"],n||(n=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(n)}})));var t,n;return s=function(){return e},e}const c=e=>{let{size:t,theme:n}=e;return(0,r.jsx)("svg",{width:t?l.RK[t]:void 0,height:void 0,viewBox:"-3 -3 30 30",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0,children:(0,r.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9.273 2c4.023 0 7.25 3.295 7.25 7.273a7.226 7.226 0 0 1-7.25 7.25C5.25 16.523 2 13.296 2 9.273 2 5.295 5.25 2 9.273 2m0 1.84A5.403 5.403 0 0 0 3.84 9.274c0 3 2.409 5.454 5.432 5.454 3 0 5.454-2.454 5.454-5.454 0-3.023-2.454-5.432-5.454-5.432m7.295 10.887L22 20.16 20.16 22l-5.433-5.432v-.932l.91-.909z",fill:null==n?void 0:n.fill})})},a=e=>{let{size:t,theme:n,isAnnouncedByScreenReader:l=!1}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(c,{size:t,theme:n}),l?(0,r.jsx)("span",{css:(0,i.css)(s(),o.Q),children:"Search"}):""]})}},65036:(e,t,n)=>{"use strict";n.d(t,{E:()=>a});var r=n(50484),i=n(24017),o=n(70991),l=n(78055);function s(){const e=(t=["\n\t\t\t\t\t","\n\t\t\t\t"],n||(n=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(n)}})));var t,n;return s=function(){return e},e}const c=e=>{let{size:t,theme:n}=e;return(0,r.jsx)("svg",{width:t?l.RK[t]:void 0,height:void 0,viewBox:"-3 -3 30 30",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0,children:(0,r.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M23 7V5H1v2zm0 6v-2H1v2zm0 6v-2H1v2z",fill:null==n?void 0:n.fill})})},a=e=>{let{size:t,theme:n,isAnnouncedByScreenReader:l=!1}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(c,{size:t,theme:n}),l?(0,r.jsx)("span",{css:(0,i.css)(s(),o.Q),children:"Menu"}):""]})}},99134:(e,t,n)=>{"use strict";n.d(t,{D:()=>s});var r=n(50484),i=n(24017),o=n(70991);function l(){const e=(t=["\n\t\t\t\t\t","\n\t\t\t\t"],n||(n=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(n)}})));var t,n;return l=function(){return e},e}const s=e=>{let{textColor:t,width:n}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 -3 300 100",fill:t,width:n,focusable:!1,"aria-hidden":!0,children:[(0,r.jsx)("path",{d:"M0 70.8c0-19.5 13-26.4 27.3-26.4 6.1 0 12 1 15.1 2.3l.3 13.6h-1.4L33 47.2c-1.5-.7-2.8-.9-5.4-.9-7.6 0-11.5 8.8-11.4 23.3.1 17.3 3.1 25.1 10.2 25.1 1.8 0 3.2-.2 4.2-.7V75.5l-4.7-2.7v-1.5h22.5V73l-4.6 2.5v18.3a50.1 50.1 0 0 1-17 2.9C10.5 96.7 0 89 0 70.8Z"}),(0,r.jsx)("path",{d:"m142.8 57.9 1.2.1v11h.3c1.6-8 5.2-11 9.5-11 .7 0 1.5 0 1.9.2v11.2c-.7-.2-2-.2-3.1-.2-3.4 0-6 .6-8.2 1.6v21.7l3.4 1.9v1.4h-19.5v-1.4l3.5-2V63l-4.1-1.2v-1l15-2.8Z"}),(0,r.jsx)("path",{d:"M110.2 74v-4.9c0-7.4-1.6-9.9-6.2-9.9l-1.6.2-8.2 11h-1.1V60.3c3.5-1.1 7.9-2.4 13.7-2.4 10 0 15.8 2.8 15.8 11.1v24l3.6 1v1c-1.4.8-4.2 1.6-7.3 1.6-5 0-7.3-1.6-8.4-4.3h-.4c-2 2.8-5 4.4-9.7 4.4-6 0-10-3.7-10-10S94.2 77 102 75.5l8.1-1.6Zm0 16.6V75.8l-2.5.2c-4 .3-5.3 2.8-5.3 8.3 0 6 2 7.6 4.7 7.6 1.5 0 2.4-.5 3.1-1.3Z"}),(0,r.jsx)("path",{d:"M47.5 61.7v-1.1l15-2.7 1.7.2v29.6c0 3.6 1.7 4.7 4.6 4.7 1.9 0 3.6-.7 4.9-2.3V63.5l-4.1-1.8v-1.1l15-2.7 1.6.1v34l4 1.7v1l-14.9 1.9-1.5-.1V92h-.4a16.8 16.8 0 0 1-11.3 4.7c-7.2 0-10.5-4.2-10.5-10.7V63.5l-4.1-1.8Z"}),(0,r.jsx)("path",{d:"M261.5 92.5V63l-4.2-1.4v-1.5l15-2.7h1.5V62h.5c3.2-2.9 8-4.7 12.8-4.7 6.5 0 9.4 3 9.4 10v25.1l3.5 2v1.4h-19.5v-1.4l3.5-2V68c0-3.8-1.7-5.3-4.8-5.3-2 0-3.6.5-5.1 1.6v28.3l3.4 1.9v1.4h-19.6v-1.4l3.6-2Z"}),(0,r.jsx)("path",{d:"m214 57.8 1.4.2v34.5l3.4 1.9v1.4h-19.5v-1.4l3.5-2v-29l-4.2-1.6v-1.2l15.5-2.8Zm1.5-9.3c0 3.7-3.1 6.4-6.7 6.4a6.4 6.4 0 0 1-6.6-6.4c0-3.6 2.9-6.4 6.6-6.4 3.6 0 6.7 2.8 6.7 6.4Z"}),(0,r.jsx)("path",{d:"M239.8 74v-4.9c0-7.4-1.7-9.9-6.2-9.9l-1.6.2-8.2 11h-1.1V60.3c3.5-1.1 7.9-2.4 13.7-2.4 10 0 15.8 2.8 15.8 11.1v24l3.6 1v1c-1.4.8-4.2 1.6-7.4 1.6-5 0-7.3-1.6-8.4-4.3h-.3c-2 2.8-5 4.4-9.7 4.4-6 0-10-3.7-10-10s3.8-9.6 11.7-11.1l8-1.6Zm0 16.6V75.8l-2.5.2c-4 .3-5.4 2.8-5.4 8.3 0 6 2 7.6 4.8 7.6 1.5 0 2.4-.5 3-1.3Z"}),(0,r.jsx)("path",{d:"M180.6 58.8V47.2l-4.1-1.4v-1l15.2-2.7 1.5.2V92l4.2 1.5v1.3l-15 2-1.2-.2v-4h-.4a13.4 13.4 0 0 1-10 4.1c-8.1 0-14.1-6.2-14.1-19 0-13.5 7-20 17.5-20 3 0 5.3.5 6.4 1.1Zm0 31.8V61c-1-.6-1.7-1.4-4.2-1.3-4 .2-6.6 6.3-6.6 17.2 0 9.8 1.9 15.3 7.3 15.1 1.5 0 2.7-.6 3.5-1.3Z"}),(0,r.jsx)("path",{d:"m68.1 51.6 5.2-2.7V8.5h-4L60 21.1h-1.1l.6-14h41.3l.6 14H100L90.8 8.5h-4v40.3l5.2 2.7V53H68.1v-1.3Z"}),(0,r.jsx)("path",{d:"M105.4 49.8V5l-4-1.6v-.8L115.9 0h1.5v21.2l.4-.4c3.2-2.8 7.8-4.5 12.4-4.5 6.3 0 9.1 3.5 9.1 10.2v23.3l3.4 1.8V53h-18.9v-1.4l3.4-1.8V26.4c0-3.7-1.6-5.1-4.6-5.1a8 8 0 0 0-5 1.6v27l3.3 1.8V53h-19v-1.3l3.5-2Z"}),(0,r.jsx)("path",{d:"M153.7 36c.4 7.4 3.7 13.1 11.6 13.1 3.8 0 6.5-1.7 9-3v1.4c-1.9 2.7-6.9 6.5-13.8 6.5-12.2 0-18.5-6.8-18.5-18.5 0-11.5 6.8-18.6 17.9-18.6 10.3 0 15.7 5.2 15.7 18.8v.3h-21.9Zm-.2-1.7 10.8-.6c0-9.2-1.6-15.3-4.8-15.3-3.3 0-6 7-6 16Z"})]}),(0,r.jsx)("span",{css:(0,i.css)(l(),o.Q),children:"The Guardian"})]})}},3959:(e,t,n)=>{"use strict";n.d(t,{L:()=>a});var r=n(50484),i=n(24017),o=n(99923);function l(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function s(){const e=l(["\n\t\t\t"," {\n\t\t\t\tdisplay: none;\n\t\t\t}\n\t\t"]);return s=function(){return e},e}function c(){const e=l(["\n\t\t\t","\n\t\t\t"," {\n\t\t\t\tdisplay: none;\n\t\t\t}\n\t\t"]);return c=function(){return e},e}const a=e=>{let t,{children:n,above:l,below:a,from:u=l,until:d=a}=e;return d&&(t=(0,i.css)(s(),o.TG[d])),u&&(t=(0,i.css)(c(),t,o.HT[u])),(0,r.jsx)("span",{css:t,children:n})}},21637:(e,t,n)=>{"use strict";n.d(t,{N:()=>u});var r=n(50484),i=n(24017),o=n(53966),l=n(14173),s=n(70991);function c(){const e=(t=["\n\t","\n"],n||(n=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(n)}})));var t,n;return c=function(){return e},e}const a=(0,i.css)(c(),s.Q),u=e=>{let{hideLabel:t,children:n,theme:i}=e;return(0,r.jsx)("p",{css:e=>[(0,l.lN)((0,o.y)(e.label,i)),t?a:""],children:n})}},69724:(e,t,n)=>{"use strict";n.d(t,{E:()=>u});var r=n(50484),i=n(24017),o=n(53966),l=n(14173),s=n(70991);function c(){const e=(t=["\n\t","\n"],n||(n=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(n)}})));var t,n;return c=function(){return e},e}const a=(0,i.css)(c(),s.Q),u=e=>{let{text:t,optional:n,hideLabel:i,size:s="medium",theme:c}=e;return(0,r.jsxs)("div",{css:e=>[(0,l.QK)((0,o.y)(e.label,c),s),i?a:""],children:[t," ",n?(0,r.jsx)("span",{css:e=>(0,l.mR)((0,o.y)(e.label,c)),children:"Optional"}):""]})}},53966:(e,t,n)=>{"use strict";n.d(t,{y:()=>o});var r=n(55488),i=n(36350);const o=(e,t)=>(0,r.z)(i.i,t,e)},14173:(e,t,n)=>{"use strict";n.d(t,{QK:()=>b,lN:()=>h,mR:()=>p,o1:()=>f});var r=n(24017),i=n(74222),o=n(7351);function l(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function s(){const e=l(["\n\t",";\n"]);return s=function(){return e},e}function c(){const e=l(["\n\t",";\n\tcolor: ",";\n"]);return c=function(){return e},e}function a(){const e=l(["\n\t",";\n\tcolor: ",";\n\tfont-style: italic;\n"]);return a=function(){return e},e}function u(){const e=l(["\n\t",";\n\tcolor: ",";\n\tmargin: 2px 0 0;\n"]);return u=function(){return e},e}const d={medium:o.keT,small:o.rS6},f=(0,r.css)(s(),i.R.legend),b=(e,t)=>(0,r.css)(c(),d[t],e.textLabel),p=e=>(0,r.css)(a(),o.WuG,e.textOptional),h=e=>(0,r.css)(u(),o.WuG,e.textSupporting)},36350:(e,t,n)=>{"use strict";n.d(t,{N8:()=>s,dt:()=>o,i:()=>l,zA:()=>i});var r=n(77907);const i={label:{textLabel:r.M.neutral[7],textOptional:r.M.neutral[46],textSupporting:r.M.neutral[46],textError:r.M.error[400],textSuccess:r.M.success[400]}},o={label:{textLabel:r.M.neutral[100],textOptional:r.M.brand[800],textSupporting:r.M.brand[800],textError:r.M.error[500],textSuccess:r.M.success[500]}},l={textLabel:r.M.neutral[7],textOptional:r.M.neutral[46],textSupporting:r.M.neutral[46],textError:r.M.error[400],textSuccess:r.M.success[400]},s={textLabel:r.M.neutral[100],textOptional:r.M.brand[800],textSupporting:r.M.brand[800],textError:r.M.error[500],textSuccess:r.M.success[500]}},12069:(e,t,n)=>{"use strict";n.d(t,{W:()=>c});var r=n(50484),i=n(81217),o=n(14163),l=n(12300);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const c=e=>{var t,n,{children:c,size:a="medium",cssOverrides:u,theme:d}=e,f=function(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}(e,["children","size","cssOverrides","theme"]);return(0,r.jsxs)("span",(t=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){s(e,t,n[t])}))}return e}({css:e=>[(0,l.u)((0,o.y)(e.userFeedback,d),a),u],role:"alert"},f),n=null!=(n={children:[(0,r.jsx)(i.T,{}),c]})?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n.push.apply(n,r)}return n}(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})),t))}},14163:(e,t,n)=>{"use strict";n.d(t,{y:()=>o});var r=n(55488),i=n(65573);const o=(e,t)=>(0,r.z)(i.AY,t,e)},12300:(e,t,n)=>{"use strict";n.d(t,{R:()=>h,u:()=>p});var r=n(24017),i=n(78055),o=n(7351);function l(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function s(){const e=l(["\n\tdisplay: flex;\n\talign-items: flex-start;\n\n\tsvg {\n\t\tfill: currentColor;\n\t\t/* we don't want the SVG to change size depending on available space */\n\t\tflex: none;\n\n\t\t/*\n\t\ta visual kick to vertically align the icon with the top row of text\n\t\tand horizontally pull it to the beginning of the row\n\t\t */\n\t\ttransform: translate(-4px, -4px);\n\t}\n"]);return s=function(){return e},e}function c(){const e=l(["\n\t",";\n\tsvg {\n\t\twidth: ",";\n\t\theight: ",";\n\t}\n"]);return c=function(){return e},e}function a(){const e=l(["\n\t",";\n\tsvg {\n\t\twidth: ",";\n\t\theight: ",";\n\t}\n"]);return a=function(){return e},e}function u(){const e=l(["\n\t",";\n\t",";\n\tcolor: ",";\n"]);return u=function(){return e},e}function d(){const e=l(["\n\t",";\n\t",";\n\tcolor: ",";\n"]);return d=function(){return e},e}const f=(0,r.css)(s()),b={small:(0,r.css)(c(),o.WuG,i.VY.iconSmall,i.SI.iconSmall),medium:(0,r.css)(a(),o.NA0,i.VY.iconMedium,i.SI.iconMedium)},p=(e,t)=>(0,r.css)(u(),f,b[t],e.textError),h=(e,t)=>(0,r.css)(d(),f,b[t],e.textSuccess)},65573:(e,t,n)=>{"use strict";n.d(t,{AY:()=>l,XS:()=>i,b8:()=>o});var r=n(77907);const i={userFeedback:{textSuccess:r.M.success[400],textError:r.M.error[400]}},o={userFeedback:{textSuccess:r.M.success[500],textError:r.M.error[500]}},l={textSuccess:r.M.success[400],textError:r.M.error[400]};r.M.success[500],r.M.error[500]}}]);
//# sourceMappingURL=4714.client.web.cf23583b35da85d81b70.js.map