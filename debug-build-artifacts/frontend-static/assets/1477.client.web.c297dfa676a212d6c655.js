(self.webpackChunk_guardian_dotcom_rendering=self.webpackChunk_guardian_dotcom_rendering||[]).push([[1477],{44165:(e,t,n)=>{var i=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,a=/^0o[0-7]+$/i,l=parseInt,s="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g,c="object"==typeof self&&self&&self.Object===Object&&self,d=s||c||Function("return this")(),u=Object.prototype.toString,f=Math.max,p=Math.min,b=function(){return d.Date.now()};function m(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function g(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==u.call(e)}(e))return NaN;if(m(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=m(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var n=r.test(e);return n||a.test(e)?l(e.slice(2),n?2:8):o.test(e)?NaN:+e}e.exports=function(e,t,n){var i,o,r,a,l,s,c=0,d=!1,u=!1,h=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function v(t){var n=i,r=o;return i=o=void 0,c=t,a=e.apply(r,n)}function x(e){var n=e-s;return void 0===s||n>=t||n<0||u&&e-c>=r}function w(){var e=b();if(x(e))return C(e);l=setTimeout(w,function(e){var n=t-(e-s);return u?p(n,r-(e-c)):n}(e))}function C(e){return l=void 0,h&&i?v(e):(i=o=void 0,a)}function k(){var e=b(),n=x(e);if(i=arguments,o=this,s=e,n){if(void 0===l)return function(e){return c=e,l=setTimeout(w,t),d?v(e):a}(s);if(u)return l=setTimeout(w,t),v(s)}return void 0===l&&(l=setTimeout(w,t)),a}return t=g(t)||0,m(n)&&(d=!!n.leading,r=(u="maxWait"in n)?f(g(n.maxWait)||0,t):r,h="trailing"in n?!!n.trailing:h),k.cancel=function(){void 0!==l&&clearTimeout(l),c=0,i=s=o=l=void 0},k.flush=function(){return void 0===l?a:C(b())},k}},91052:(e,t,n)=>{"use strict";n.r(t),n.d(t,{ContributionsLiveblogEpic:()=>O});var i=n(50484),o=n(24017),r=n(77907),a=n(99923),l=n(7351),s=n(96378),c=n(11596),d=n(29995),u=n(67400),f=n(58452),p=n(79971),b=n(81412),m=n(54288),g=n(47267),h=n(15870);function v(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function x(){const e=v(["\n\tpadding: 6px 10px 28px 10px;\n\tborder-top: 1px solid ",";\n\tborder-bottom: 1px solid ",";\n\n\tbackground: ",";\n\n\tborder: 1px solid ",";\n\n\t* {\n\t\t::selection {\n\t\t\tbackground: ",";\n\t\t}\n\t}\n\n\t"," {\n\t\tpadding-left: ",";\n\t\tpadding-right: 20px;\n\t}\n"]);return x=function(){return e},e}function w(){const e=v(["\n\t",";\n\n\tfont-size: 16px;\n\n\tp {\n\t\tmargin: 0;\n\t}\n\n\t& > p + p {\n\t\tmargin-top: ","px;\n\t}\n\n\t"," {\n\t\t& > p + p {\n\t\t\tmargin-top: ","px;\n\t\t}\n\t}\n"]);return w=function(){return e},e}function C(){const e=v(["\n\t",";\n\tfont-size: 28px;\n\tcolor: ",";\n\tbackground-color: ",";\n\tborder-top: 1px solid ",";\n\tborder-left: 1px solid ",";\n\tborder-right: 1px solid ",";\n\n\tpadding: 8px 10px 12px 10px;\n\t"," {\n\t\tpadding-left: ",";\n\t\tpadding-right: 20px;\n\t}\n"]);return C=function(){return e},e}function k(){const e=v(["\n\tmargin-top: ","px;\n"]);return k=function(){return e},e}const M=(e,t)=>(0,o.css)(x(),r.M.brandAlt[400],r.M.neutral[86],(e=>e?"#E2E3BF":r.M.neutral[100])(t),r.M.neutral[0],r.M.brandAlt[400],a.HT.tablet,"dcr"===e.clientName?"60px":"80px"),j=(0,o.css)(w(),l.Ni,s.x[3],a.HT.tablet,s.x[4]),y=(e,t)=>(0,o.css)(C(),l.r9N,(e=>e?"#FFFFFF":r.M.neutral[7])(t),(e=>e?"#051D32":r.M.brandAlt[400])(t),r.M.neutral[0],r.M.neutral[0],r.M.neutral[0],a.HT.tablet,"dcr"===e.clientName?"60px":"80px"),T=(0,o.css)(k(),s.x[5]),E={filledProgressColour:"#C41C1C",progressBarBackgroundColour:"#D9A78E",headlineColour:"#000000",totalColour:"#C41C1C",goalColour:"#000000"},L=e=>{let{paragraph:t,numArticles:n}=e;const o=(0,p.k)(t,n,"epic");return(0,i.jsx)("p",{children:o})},A=e=>{let{numArticles:t,paragraphs:n}=e;return(0,i.jsx)("div",{css:j,children:n.map((e=>(0,i.jsx)(L,{paragraph:e,numArticles:t},e)))})},O=e=>{let{variant:t,countryCode:n,articleCounts:o,tracking:r,submitComponentEvent:a,onReminderOpen:l,fetchEmail:s}=e;const{newsletterSignup:p,tickerSettings:v}=t,x=r.abTestName.includes("_LB_EPIC_BG_COLOUR")&&"VARIANT"===r.abTestVariant,[w,C]=(0,f.E)({debounce:!0});(0,u.useEffect)((()=>{w&&((0,m.B)(r.abTestName),a&&a((0,b.t0)(r,r.campaignCode)))}),[w,a,r]),(0,u.useEffect)((()=>{a&&a((0,b.rx)(r,r.campaignCode))}),[a,r]);const k=t.paragraphs.map((e=>(0,d.BA)(e,n))),j=(0,d.BA)(t.heading)||"Support the Guardian";return k.some(d.FT)||(0,d.FT)(j)?(0,i.jsx)(i.Fragment,{}):(0,i.jsxs)("div",{"data-testid":"contributions-liveblog-epic",ref:C,children:[!!j&&(0,i.jsx)("div",{css:y(r,x),children:j}),(0,i.jsxs)("section",{css:M(r,x),children:[(0,i.jsx)(A,{paragraphs:k,numArticles:o.forTargetedWeeks}),(null==v?void 0:v.tickerData)&&(0,i.jsx)("div",{css:T,children:(0,i.jsx)(c.R,{currencySymbol:v.currencySymbol,copy:{headline:v.copy.countLabel},tickerData:v.tickerData,tickerStylingSettings:E,size:"medium"})}),p?(0,i.jsx)(g.o,{newsletterId:p.newsletterId,successDescription:p.successDescription,tracking:r}):(0,i.jsx)(h.B,{variant:t,tracking:r,countryCode:n,articleCounts:o,onReminderOpen:l,fetchEmail:s,submitComponentEvent:a,isColourInTestVariant:x})]})]})}},38169:(e,t,n)=>{"use strict";n.d(t,{w:()=>r});var i=n(47513),o=n(97656);const r=e=>()=>new Promise((t=>{setTimeout((()=>t(null)),1e3),(async e=>(0,o.kU)((e=>{var t;return null===(t=e.idToken)||void 0===t?void 0:t.claims.email}),(()=>(0,i.J)(e).then((e=>{var t;return null===(t=e.user)||void 0===t?void 0:t.primaryEmailAddress})).catch((e=>{window.guardian.modules.sentry.reportError(e,"getEmail")})))))(e).then((e=>{t(e||null)}))}))},47513:(e,t,n)=>{"use strict";n.d(t,{J:()=>l,h:()=>s});var i=n(88482);function o(e){if(!e.ok)throw Error(e.statusText||"getIdApiUserData | An api call returned HTTP status ".concat(e.status));return e}const r=e=>fetch(e,{credentials:"include"}).then(o).then((e=>e.json())),a={},l=e=>{if(!a.idapiUserMeResponse){const t=(0,i.w)(e,"user/me");a.idapiUserMeResponse=r(t)}return a.idapiUserMeResponse},s=e=>{if(!a.idapiUserIdentifiersResponse){const t=(0,i.w)(e,"user/me/identifiers");a.idapiUserIdentifiersResponse=r(t)}return a.idapiUserIdentifiersResponse}},58452:(e,t,n)=>{"use strict";n.d(t,{E:()=>a});var i=n(44165),o=n.n(i),r=n(67400);const a=e=>{const[t,n]=(0,r.useState)(!1);var i;const[a,l]=(0,r.useState)(null!==(i=e.node)&&void 0!==i?i:null),s=(0,r.useRef)(null),c=(0,r.useCallback)((t=>{let[i]=t;i&&(i.isIntersecting?n(!0):e.repeat&&n(!1))}),[e.repeat]),d=e.debounce?o()(c,200):c;return(0,r.useEffect)((()=>{e.node&&l(e.node)}),[e.node]),(0,r.useEffect)((()=>{if(a&&"IntersectionObserver"in window)return s.current=new window.IntersectionObserver(d,e),s.current.observe(a),()=>{var e;return null===(e=s.current)||void 0===e?void 0:e.disconnect()}}),[a,e,d]),(0,r.useEffect)((()=>{var n;!e.repeat&&t&&(null===(n=s.current)||void 0===n||n.disconnect())}),[t,e.repeat]),[t,l]}},53694:(e,t,n)=>{"use strict";n.d(t,{M:()=>i});const i=e=>"var(".concat(e,")")},88482:(e,t,n)=>{"use strict";n.d(t,{w:()=>o});const i=/\b\/{2,}/g,o=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.join("/").replace(i,"/")}},92280:(e,t,n)=>{"use strict";n.d(t,{f:()=>i});const i={desktop:980,leftCol:1140,mobile:320,mobileLandscape:480,mobileMedium:375,phablet:660,tablet:740,wide:1300}},99923:(e,t,n)=>{"use strict";n.d(t,{HT:()=>l,TG:()=>s,Tq:()=>c});var i=n(92280);const o=e=>"@media (min-width: ".concat("".concat(e,"px"),")"),r=e=>"@media (max-width: ".concat("".concat(e-.1,"px"),")"),a=(e,t)=>"@media (min-width: ".concat("".concat(e,"px"),") and (max-width: ").concat("".concat(t-.1,"px"),")"),l={mobile:o(i.f.mobile),mobileMedium:o(i.f.mobileMedium),mobileLandscape:o(i.f.mobileLandscape),phablet:o(i.f.phablet),tablet:o(i.f.tablet),desktop:o(i.f.desktop),leftCol:o(i.f.leftCol),wide:o(i.f.wide)},s={mobile:r(i.f.mobile),mobileMedium:r(i.f.mobileMedium),mobileLandscape:r(i.f.mobileLandscape),phablet:r(i.f.phablet),tablet:r(i.f.tablet),desktop:r(i.f.desktop),leftCol:r(i.f.leftCol),wide:r(i.f.wide)},c={mobile:{and:{mobileMedium:a(i.f.mobile,i.f.mobileMedium),mobileLandscape:a(i.f.mobile,i.f.mobileLandscape),phablet:a(i.f.mobile,i.f.phablet),tablet:a(i.f.mobile,i.f.tablet),desktop:a(i.f.mobile,i.f.desktop),leftCol:a(i.f.mobile,i.f.leftCol),wide:a(i.f.mobileMedium,i.f.wide)}},mobileMedium:{and:{mobileLandscape:a(i.f.mobileMedium,i.f.mobileLandscape),phablet:a(i.f.mobileMedium,i.f.phablet),tablet:a(i.f.mobileMedium,i.f.tablet),desktop:a(i.f.mobileMedium,i.f.desktop),leftCol:a(i.f.mobileMedium,i.f.leftCol),wide:a(i.f.mobileMedium,i.f.wide)}},mobileLandscape:{and:{phablet:a(i.f.mobileLandscape,i.f.phablet),tablet:a(i.f.mobileLandscape,i.f.tablet),desktop:a(i.f.mobileLandscape,i.f.desktop),leftCol:a(i.f.mobileLandscape,i.f.leftCol),wide:a(i.f.mobileLandscape,i.f.wide)}},phablet:{and:{tablet:a(i.f.phablet,i.f.tablet),desktop:a(i.f.phablet,i.f.desktop),leftCol:a(i.f.phablet,i.f.leftCol),wide:a(i.f.phablet,i.f.wide)}},tablet:{and:{desktop:a(i.f.tablet,i.f.desktop),leftCol:a(i.f.tablet,i.f.leftCol),wide:a(i.f.tablet,i.f.wide)}},desktop:{and:{leftCol:a(i.f.desktop,i.f.leftCol),wide:a(i.f.desktop,i.f.wide)}},leftCol:{and:{wide:a(i.f.leftCol,i.f.wide)}}}}}]);
//# sourceMappingURL=1477.client.web.c297dfa676a212d6c655.js.map