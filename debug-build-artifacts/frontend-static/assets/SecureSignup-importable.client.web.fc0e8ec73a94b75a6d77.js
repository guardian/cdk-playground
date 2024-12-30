"use strict";(self.webpackChunk_guardian_dotcom_rendering=self.webpackChunk_guardian_dotcom_rendering||[]).push([[2066],{40078:(e,t,n)=>{n.r(t),n.d(t,{SecureSignup:()=>E});var r=n(50484),o=n(24017),i=n(72762),a=n(96378),s=n(99923),l=n(12069),c=n(95571),d=n(39452),u=n(32444),f=n(27123),p=n(67443),b=n(90686),m=n(67400),h=n(37800),g=n(50026),v=n(38169),w=n(53694),x=n(15593);function y(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function j(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){y(e,t,n[t])}))}return e}function O(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function k(){const e=O(["\n\tdisplay: grid;\n\talign-items: center;\n\tgrid-template-columns: auto min-content;\n\tgrid-template-rows: 24px 48px;\n\tgap: 0 ","px;\n\n\tgrid-template-areas:\n\t\t'label label'\n\t\t'input button';\n\n\tlabel {\n\t\tgrid-area: label;\n\t\tdiv {\n\t\t\tcolor: ",";\n\t\t}\n\t}\n\tinput {\n\t\tgrid-area: input;\n\t\tmargin-top: 0;\n\t\tcolor: ",";\n\t\tbackground-color: ",";\n\t}\n\tbutton {\n\t\tgrid-area: button;\n\t\tbackground-color: ",";\n\t\tcolor: ",";\n\t\t:hover {\n\t\t\tbackground-color: ",";\n\t\t}\n\t}\n"]);return k=function(){return e},e}function M(){const e=O(["\n\tdisplay: flex;\n\talign-items: flex-start;\n\t"," {\n\t\tflex-wrap: wrap;\n\t}\n\tbutton {\n\t\tmargin-left: ","px;\n\t\tbackground-color: ",";\n\t\t:hover {\n\t\t\tbackground-color: ",";\n\t\t}\n\t}\n"]);return M=function(){return e},e}function S(){const e=O(["\n\t\t\t\t\t\t.grecaptcha-badge {\n\t\t\t\t\t\t\tvisibility: hidden;\n\t\t\t\t\t\t}\n\t\t\t\t\t"]);return S=function(){return e},e}const C=(0,o.css)(k(),a.x[3],(0,w.M)("--article-text"),(0,w.M)("--article-text"),(0,w.M)("--article-background"),(0,w.M)("--recaptcha-button"),(0,w.M)("--recaptcha-button-text"),(0,w.M)("--recaptcha-button-hover")),z={gridTemplateColumns:"auto 1fr",gridTemplateAreas:['"label  label"','"button input"'].join(" ")},P=(0,o.css)(M(),s.TG.tablet,a.x[1],(0,w.M)("--recaptcha-button"),(0,w.M)("--recaptcha-button-hover")),L=e=>{let{text:t}=e;return(0,r.jsx)(l.W,{children:(0,r.jsxs)("span",{children:[t," Please try again or contact"," ",(0,r.jsx)(c.N,{href:"mailto:customer.help@theguardian.com",target:"_blank",rel:"noreferrer",children:"customer.help@theguardian.com"})]})})},R=e=>{let{text:t}=e;return(0,r.jsx)(d.H,{children:(0,r.jsxs)("span",{children:[(0,r.jsx)("b",{children:"Subscription Confirmed. "}),(0,r.jsx)("span",{children:t})]})})},T=(e,t,n,r)=>{let o="CLICK";switch(t){case"form-submission":case"captcha-not-passed":case"captcha-passed":o="ANSWER";break;case"submission-confirmed":o="SUBSCRIBE";break;case"captcha-load-error":case"form-submit-error":case"submission-failed":o="CLOSE";break;case"open-captcha":o="EXPAND";break;default:o="CLICK"}const i=JSON.stringify({eventDescription:t,newsletterId:e,timestamp:Date.now()});(0,g.u_)({action:o,value:i,component:{componentType:"NEWSLETTER_SUBSCRIPTION",id:"AR SecureSignup ".concat(e)},abTest:r},n)},E=e=>{let{newsletterId:t,successDescription:n,abTest:a}=e;const s=(0,m.useRef)(null),[l,c]=(0,m.useState)(),[d,g]=(0,m.useState)(),[w,y]=(0,m.useState)(!1),[O,k]=(0,m.useState)(void 0),[M,E]=(0,m.useState)(void 0);(0,m.useEffect)((()=>{c(window.guardian.config.page.googleRecaptchaSiteKey),(async()=>{const{idApiUrl:e}=window.guardian.config.page;if(e)return await(0,v.w)(e)()||void 0})().then(g)}),[]);const{renderingTarget:A}=(0,x.U)(),I="boolean"==typeof O,U=(0,i.K)(d);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("form",{onSubmit:e=>{var n;e.preventDefault(),w||(E(void 0),T(t,"open-captcha",A,a),null===(n=s.current)||void 0===n||n.execute())},id:"secure-signup-".concat(t),style:j({display:I||w?"none":void 0},U?z:void 0),css:C,children:[(0,r.jsx)(u.k,{hidden:U,hideLabel:U,name:"email",label:"Enter your email address",type:"email",value:d}),(0,r.jsx)(f.$,{onClick:()=>{T(t,"click-button",A,a)},size:"small",type:"submit",children:"Sign up"})]}),w&&(0,r.jsx)("div",{"aria-label":"loading",children:(0,r.jsx)(p.y,{size:"small"})}),!!M&&(0,r.jsx)(L,{text:M}),I&&(O?(0,r.jsx)("div",{children:(0,r.jsx)(R,{text:n})}):(0,r.jsxs)("div",{css:P,children:[(0,r.jsx)(L,{text:"Sign up failed."}),(0,r.jsx)(f.$,{size:"small",icon:(0,r.jsx)(b.k,{}),iconSide:"right",onClick:()=>{var e;E(void 0),k(void 0),null===(e=s.current)||void 0===e||e.reset()},children:"Try again"})]})),!!l&&(0,r.jsx)("div",{css:(0,o.css)(S()),children:(0,r.jsx)(h.A,{sitekey:l,ref:s,onChange:e=>{e?(T(t,"captcha-passed",A,a),y(!0),(async e=>{var n;const r=null!==(n=document.querySelector('input[type="email"]'))&&void 0!==n?n:null;var o;const i=null!==(o=null==r?void 0:r.value)&&void 0!==o?o:"";T(t,"form-submission",A,a);const s=await(async(e,t)=>{const n=[];for(const[e,r]of t.entries())n.push("".concat(encodeURIComponent(e),"=").concat(encodeURIComponent(r.toString())));return fetch(e,{method:"POST",body:n.join("&"),headers:{Accept:"application/json","Content-Type":"application/x-www-form-urlencoded"}})})(window.guardian.config.page.ajaxUrl+"/email",((e,t,n)=>{var r;const o=window.location.origin+window.location.pathname;var i;const a=null!==(i=null===(r=window.guardian.ophan)||void 0===r?void 0:r.pageViewId)&&void 0!==i?i:"",s=new FormData;return s.append("email",e),s.append("csrfToken",""),s.append("listName",t),s.append("ref",o),s.append("refViewId",a),s.append("name",""),window.guardian.config.switches.emailSignupRecaptcha&&s.append("g-recaptcha-response",n),s})(i,t,e));y(!1),k(s.ok),T(t,s.ok?"submission-confirmed":"submission-failed",A,a)})(e).catch((e=>{console.error(e),T(t,"form-submit-error",A,a),E("Sorry, there was an error signing you up."),y(!1)}))):T(t,"captcha-not-passed",A,a)},onError:()=>{var e;T(t,"captcha-load-error",A,a),E("Sorry, the reCAPTCHA failed to load."),null===(e=s.current)||void 0===e||e.reset()},size:"invisible"})})]})}},38169:(e,t,n)=>{n.d(t,{w:()=>i});var r=n(47513),o=n(97656);const i=e=>()=>new Promise((t=>{setTimeout((()=>t(null)),1e3),(async e=>(0,o.kU)((e=>{var t;return null===(t=e.idToken)||void 0===t?void 0:t.claims.email}),(()=>(0,r.J)(e).then((e=>{var t;return null===(t=e.user)||void 0===t?void 0:t.primaryEmailAddress})).catch((e=>{window.guardian.modules.sentry.reportError(e,"getEmail")})))))(e).then((e=>{t(e||null)}))}))},47513:(e,t,n)=>{n.d(t,{J:()=>s,h:()=>l});var r=n(88482);function o(e){if(!e.ok)throw Error(e.statusText||"getIdApiUserData | An api call returned HTTP status ".concat(e.status));return e}const i=e=>fetch(e,{credentials:"include"}).then(o).then((e=>e.json())),a={},s=e=>{if(!a.idapiUserMeResponse){const t=(0,r.w)(e,"user/me");a.idapiUserMeResponse=i(t)}return a.idapiUserMeResponse},l=e=>{if(!a.idapiUserIdentifiersResponse){const t=(0,r.w)(e,"user/me/identifiers");a.idapiUserIdentifiersResponse=i(t)}return a.idapiUserIdentifiersResponse}},53694:(e,t,n)=>{n.d(t,{M:()=>r});const r=e=>"var(".concat(e,")")},88482:(e,t,n)=>{n.d(t,{w:()=>o});const r=/\b\/{2,}/g,o=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.join("/").replace(r,"/")}},92280:(e,t,n)=>{n.d(t,{f:()=>r});const r={desktop:980,leftCol:1140,mobile:320,mobileLandscape:480,mobileMedium:375,phablet:660,tablet:740,wide:1300}},88469:(e,t,n)=>{n.d(t,{I:()=>r});const r=e=>"".concat(e,"_description")},99923:(e,t,n)=>{n.d(t,{HT:()=>s,TG:()=>l,Tq:()=>c});var r=n(92280);const o=e=>"@media (min-width: ".concat("".concat(e,"px"),")"),i=e=>"@media (max-width: ".concat("".concat(e-.1,"px"),")"),a=(e,t)=>"@media (min-width: ".concat("".concat(e,"px"),") and (max-width: ").concat("".concat(t-.1,"px"),")"),s={mobile:o(r.f.mobile),mobileMedium:o(r.f.mobileMedium),mobileLandscape:o(r.f.mobileLandscape),phablet:o(r.f.phablet),tablet:o(r.f.tablet),desktop:o(r.f.desktop),leftCol:o(r.f.leftCol),wide:o(r.f.wide)},l={mobile:i(r.f.mobile),mobileMedium:i(r.f.mobileMedium),mobileLandscape:i(r.f.mobileLandscape),phablet:i(r.f.phablet),tablet:i(r.f.tablet),desktop:i(r.f.desktop),leftCol:i(r.f.leftCol),wide:i(r.f.wide)},c={mobile:{and:{mobileMedium:a(r.f.mobile,r.f.mobileMedium),mobileLandscape:a(r.f.mobile,r.f.mobileLandscape),phablet:a(r.f.mobile,r.f.phablet),tablet:a(r.f.mobile,r.f.tablet),desktop:a(r.f.mobile,r.f.desktop),leftCol:a(r.f.mobile,r.f.leftCol),wide:a(r.f.mobileMedium,r.f.wide)}},mobileMedium:{and:{mobileLandscape:a(r.f.mobileMedium,r.f.mobileLandscape),phablet:a(r.f.mobileMedium,r.f.phablet),tablet:a(r.f.mobileMedium,r.f.tablet),desktop:a(r.f.mobileMedium,r.f.desktop),leftCol:a(r.f.mobileMedium,r.f.leftCol),wide:a(r.f.mobileMedium,r.f.wide)}},mobileLandscape:{and:{phablet:a(r.f.mobileLandscape,r.f.phablet),tablet:a(r.f.mobileLandscape,r.f.tablet),desktop:a(r.f.mobileLandscape,r.f.desktop),leftCol:a(r.f.mobileLandscape,r.f.leftCol),wide:a(r.f.mobileLandscape,r.f.wide)}},phablet:{and:{tablet:a(r.f.phablet,r.f.tablet),desktop:a(r.f.phablet,r.f.desktop),leftCol:a(r.f.phablet,r.f.leftCol),wide:a(r.f.phablet,r.f.wide)}},tablet:{and:{desktop:a(r.f.tablet,r.f.desktop),leftCol:a(r.f.tablet,r.f.leftCol),wide:a(r.f.tablet,r.f.wide)}},desktop:{and:{leftCol:a(r.f.desktop,r.f.leftCol),wide:a(r.f.desktop,r.f.wide)}},leftCol:{and:{wide:a(r.f.leftCol,r.f.wide)}}}},74222:(e,t,n)=>{n.d(t,{R:()=>i});var r=n(77907);const o="\n\t*, *:before, *:after {\n        box-sizing: border-box;\n    }\n    html {\n        -moz-osx-font-smoothing: grayscale;\n        -webkit-font-smoothing: antialiased;\n        /* always show the vertical scroll bar to stop the page\n         * jumping about when navigating between pages where\n         * one has content shorter than the viewport */\n        overflow-y: scroll;\n    }\n    html, body {\n        text-rendering: optimizeLegibility;\n        font-feature-settings: 'kern';\n        font-kerning: normal; /* Safari 7+, Firefox 24+, Chrome 33(?)+, Opera 21 */\n        font-variant-ligatures: common-ligatures;\n    }\n    body {\n        background-color: ".concat(r.M.neutral[100],";\n        color: ").concat(r.M.neutral[7],";\n    }\n    em {\n        font-style: italic;\n    }\n"),i={legend:"\n\tpadding: 0;\n",fieldset:"\n\tborder: 0;\n\tpadding: 0;\n\tmargin: 0;\n",defaults:o,resetCSS:"\n\thtml, body, div, span, applet, object, iframe,\n\th1, h2, h3, h4, h5, h6, p, blockquote, pre,\n\ta, abbr, acronym, address, big, cite, code,\n\tdel, dfn, em, img, ins, kbd, q, s, samp,\n\tsmall, strike, strong, sub, sup, tt, var,\n\tb, u, i, center,\n\tdl, dt, dd, menu, ol, ul, li,\n\tfieldset, form, label, legend,\n\ttable, caption, tbody, tfoot, thead, tr, th, td,\n\tarticle, aside, canvas, details, embed,\n\tfigure, figcaption, footer, header, hgroup,\n\tmain, menu, nav, output, ruby, section, summary,\n\ttime, mark, audio, video {\n\t\tmargin: 0;\n\t\tpadding: 0;\n\t\tborder: 0;\n\t\tfont-size: 100%;\n\t\tfont: inherit;\n\t\tvertical-align: baseline;\n\t}\n\t/* HTML5 display-role reset for older browsers */\n\tarticle, aside, details, figcaption, figure,\n\tfooter, header, hgroup, main, menu, nav, section {\n\t\tdisplay: block;\n\t}\n\t/* HTML5 hidden-attribute fix for newer browsers */\n\t*[hidden] {\n\t\tdisplay: none;\n\t}\n\tbody {\n\t\tline-height: 1;\n\t}\n\tmenu, ol, ul {\n\t\tlist-style: none;\n\t}\n\tblockquote, q {\n\t\tquotes: none;\n\t}\n\tblockquote:before, blockquote:after,\n\tq:before, q:after {\n\t\tcontent: '';\n\t\tcontent: none;\n\t}\n\ttable {\n\t\tborder-collapse: collapse;\n\t\tborder-spacing: 0;\n\t}\n\n\t".concat(o,"\n")}},81217:(e,t,n)=>{n.d(t,{T:()=>c});var r=n(50484),o=n(24017),i=n(70991),a=n(78055);function s(){const e=(t=["\n\t\t\t\t\t","\n\t\t\t\t"],n||(n=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(n)}})));var t,n;return s=function(){return e},e}const l=e=>{let{size:t,theme:n}=e;return(0,r.jsx)("svg",{width:t?a.RK[t]:void 0,height:void 0,viewBox:"-3 -3 30 30",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0,children:(0,r.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10m-10.704 1.818h1.386l.659-8.636-.91-.91h-.885l-.91.91zm2.068 3.637c0-.75-.614-1.364-1.364-1.364s-1.364.614-1.364 1.364.614 1.363 1.364 1.363 1.364-.613 1.364-1.363",fill:null==n?void 0:n.fill})})},c=e=>{let{size:t,theme:n,isAnnouncedByScreenReader:a=!1}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(l,{size:t,theme:n}),a?(0,r.jsx)("span",{css:(0,o.css)(s(),i.Q),children:"Warning"}):""]})}},90686:(e,t,n)=>{n.d(t,{k:()=>c});var r=n(50484),o=n(24017),i=n(70991),a=n(78055);function s(){const e=(t=["\n\t\t\t\t\t","\n\t\t\t\t"],n||(n=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(n)}})));var t,n;return s=function(){return e},e}const l=e=>{let{size:t,theme:n}=e;return(0,r.jsx)("svg",{width:t?a.RK[t]:void 0,height:void 0,viewBox:"-3 -3 30 30",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0,children:(0,r.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12.019 22a9.94 9.94 0 0 0 8.223-4.35l-.114-.616-.797-.478-.615.16c-1.48 2.095-3.895 3.485-6.697 3.485-4.487 0-8.178-3.69-8.178-8.224 0-4.51 3.69-8.177 8.178-8.177 2.574 0 4.784 1.139 6.31 2.96l-3.303.548v1.138h5.831l.433-.432V2h-1.116l-.57 3.44C17.782 3.32 15.094 2 12.02 2 6.484 2 1.996 6.465 1.996 11.977A10.01 10.01 0 0 0 12.02 22",fill:null==n?void 0:n.fill})})},c=e=>{let{size:t,theme:n,isAnnouncedByScreenReader:a=!1}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(l,{size:t,theme:n}),a?(0,r.jsx)("span",{css:(0,o.css)(s(),i.Q),children:"Reload"}):""]})}},21637:(e,t,n)=>{n.d(t,{N:()=>d});var r=n(50484),o=n(24017),i=n(53966),a=n(14173),s=n(70991);function l(){const e=(t=["\n\t","\n"],n||(n=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(n)}})));var t,n;return l=function(){return e},e}const c=(0,o.css)(l(),s.Q),d=e=>{let{hideLabel:t,children:n,theme:o}=e;return(0,r.jsx)("p",{css:e=>[(0,a.lN)((0,i.y)(e.label,o)),t?c:""],children:n})}},69724:(e,t,n)=>{n.d(t,{E:()=>d});var r=n(50484),o=n(24017),i=n(53966),a=n(14173),s=n(70991);function l(){const e=(t=["\n\t","\n"],n||(n=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(n)}})));var t,n;return l=function(){return e},e}const c=(0,o.css)(l(),s.Q),d=e=>{let{text:t,optional:n,hideLabel:o,size:s="medium",theme:l}=e;return(0,r.jsxs)("div",{css:e=>[(0,a.QK)((0,i.y)(e.label,l),s),o?c:""],children:[t," ",n?(0,r.jsx)("span",{css:e=>(0,a.mR)((0,i.y)(e.label,l)),children:"Optional"}):""]})}},53966:(e,t,n)=>{n.d(t,{y:()=>i});var r=n(55488),o=n(36350);const i=(e,t)=>(0,r.z)(o.i,t,e)},14173:(e,t,n)=>{n.d(t,{QK:()=>p,lN:()=>m,mR:()=>b,o1:()=>f});var r=n(24017),o=n(74222),i=n(7351);function a(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function s(){const e=a(["\n\t",";\n"]);return s=function(){return e},e}function l(){const e=a(["\n\t",";\n\tcolor: ",";\n"]);return l=function(){return e},e}function c(){const e=a(["\n\t",";\n\tcolor: ",";\n\tfont-style: italic;\n"]);return c=function(){return e},e}function d(){const e=a(["\n\t",";\n\tcolor: ",";\n\tmargin: 2px 0 0;\n"]);return d=function(){return e},e}const u={medium:i.keT,small:i.rS6},f=(0,r.css)(s(),o.R.legend),p=(e,t)=>(0,r.css)(l(),u[t],e.textLabel),b=e=>(0,r.css)(c(),i.WuG,e.textOptional),m=e=>(0,r.css)(d(),i.WuG,e.textSupporting)},36350:(e,t,n)=>{n.d(t,{N8:()=>s,dt:()=>i,i:()=>a,zA:()=>o});var r=n(77907);const o={label:{textLabel:r.M.neutral[7],textOptional:r.M.neutral[46],textSupporting:r.M.neutral[46],textError:r.M.error[400],textSuccess:r.M.success[400]}},i={label:{textLabel:r.M.neutral[100],textOptional:r.M.brand[800],textSupporting:r.M.brand[800],textError:r.M.error[500],textSuccess:r.M.success[500]}},a={textLabel:r.M.neutral[7],textOptional:r.M.neutral[46],textSupporting:r.M.neutral[46],textError:r.M.error[400],textSuccess:r.M.success[400]},s={textLabel:r.M.neutral[100],textOptional:r.M.brand[800],textSupporting:r.M.brand[800],textError:r.M.error[500],textSuccess:r.M.success[500]}},12069:(e,t,n)=>{n.d(t,{W:()=>l});var r=n(50484),o=n(81217),i=n(14163),a=n(12300);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const l=e=>{var t,n,{children:l,size:c="medium",cssOverrides:d,theme:u}=e,f=function(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(e,["children","size","cssOverrides","theme"]);return(0,r.jsxs)("span",(t=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){s(e,t,n[t])}))}return e}({css:e=>[(0,a.u)((0,i.y)(e.userFeedback,u),c),d],role:"alert"},f),n=null!=(n={children:[(0,r.jsx)(o.T,{}),l]})?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n.push.apply(n,r)}return n}(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})),t))}},14163:(e,t,n)=>{n.d(t,{y:()=>i});var r=n(55488),o=n(65573);const i=(e,t)=>(0,r.z)(o.AY,t,e)},12300:(e,t,n)=>{n.d(t,{R:()=>m,u:()=>b});var r=n(24017),o=n(78055),i=n(7351);function a(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function s(){const e=a(["\n\tdisplay: flex;\n\talign-items: flex-start;\n\n\tsvg {\n\t\tfill: currentColor;\n\t\t/* we don't want the SVG to change size depending on available space */\n\t\tflex: none;\n\n\t\t/*\n\t\ta visual kick to vertically align the icon with the top row of text\n\t\tand horizontally pull it to the beginning of the row\n\t\t */\n\t\ttransform: translate(-4px, -4px);\n\t}\n"]);return s=function(){return e},e}function l(){const e=a(["\n\t",";\n\tsvg {\n\t\twidth: ",";\n\t\theight: ",";\n\t}\n"]);return l=function(){return e},e}function c(){const e=a(["\n\t",";\n\tsvg {\n\t\twidth: ",";\n\t\theight: ",";\n\t}\n"]);return c=function(){return e},e}function d(){const e=a(["\n\t",";\n\t",";\n\tcolor: ",";\n"]);return d=function(){return e},e}function u(){const e=a(["\n\t",";\n\t",";\n\tcolor: ",";\n"]);return u=function(){return e},e}const f=(0,r.css)(s()),p={small:(0,r.css)(l(),i.WuG,o.VY.iconSmall,o.SI.iconSmall),medium:(0,r.css)(c(),i.NA0,o.VY.iconMedium,o.SI.iconMedium)},b=(e,t)=>(0,r.css)(d(),f,p[t],e.textError),m=(e,t)=>(0,r.css)(u(),f,p[t],e.textSuccess)},65573:(e,t,n)=>{n.d(t,{AY:()=>a,XS:()=>o,b8:()=>i});var r=n(77907);const o={userFeedback:{textSuccess:r.M.success[400],textError:r.M.error[400]}},i={userFeedback:{textSuccess:r.M.success[500],textError:r.M.error[500]}},a={textSuccess:r.M.success[400],textError:r.M.error[400]};r.M.success[500],r.M.error[500]}}]);
//# sourceMappingURL=SecureSignup-importable.client.web.fc0e8ec73a94b75a6d77.js.map