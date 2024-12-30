"use strict";(self.webpackChunk_guardian_dotcom_rendering=self.webpackChunk_guardian_dotcom_rendering||[]).push([[2066],{39306:(e,t,n)=>{n.r(t),n.d(t,{SecureSignup:()=>B});var r=n(62335),i=n(22820),o=n(18247),a=n(57820),c=n.n(a),l=n(50484),s=n(24017),d=n(5240),u=n(59648),f=n(81477),p=n(73499),b=n(56297),m=n(60646),h=n(73598),v=n(28673),g=n(67238),w=n(52104),y=n(67400),x=n(37800),j=n(85918),k=n(46845),S=n(1954),O=n(7693);function C(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function A(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?C(Object(n),!0).forEach((function(t){(0,r.A)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):C(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function L(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return M(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?M(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a=!0,c=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return a=e.done,e},e:function(e){c=!0,o=e},f:function(){try{a||null==n.return||n.return()}finally{if(c)throw o}}}}function M(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var T=(0,s.css)("display:grid;align-items:center;grid-template-columns:auto min-content;grid-template-rows:24px 48px;gap:0 ",u.x[3],"px;grid-template-areas:'label label' 'input button';label{grid-area:label;div{color:",(0,S.M)("--article-text"),";}}input{grid-area:input;margin-top:0;color:",(0,S.M)("--article-text"),";background-color:",(0,S.M)("--article-background"),";}button{grid-area:button;background-color:",(0,S.M)("--recaptcha-button"),";color:",(0,S.M)("--recaptcha-button-text"),";:hover{background-color:",(0,S.M)("--recaptcha-button-hover"),";}}"),P={gridTemplateColumns:"auto 1fr",gridTemplateAreas:['"label  label"','"button input"'].join(" ")},I=(0,s.css)("display:flex;align-items:flex-start;",f.TG.tablet,"{flex-wrap:wrap;}button{margin-left:",u.x[1],"px;background-color:",(0,S.M)("--recaptcha-button"),";:hover{background-color:",(0,S.M)("--recaptcha-button-hover"),";}}"),R=function(e){var t=e.text;return(0,l.jsx)(p.W,{children:(0,l.jsxs)("span",{children:[t," Please try again or contact"," ",(0,l.jsx)(b.N,{href:"mailto:customer.help@theguardian.com",target:"_blank",rel:"noreferrer",children:"customer.help@theguardian.com"})]})})},E=function(e){var t=e.text;return(0,l.jsx)(m.H,{children:(0,l.jsxs)("span",{children:[(0,l.jsx)("b",{children:"Subscription Confirmed. "}),(0,l.jsx)("span",{children:t})]})})},U=function(e,t,n){var r,i,o=window.location.origin+window.location.pathname,a=null!==(r=null===(i=window.guardian.ophan)||void 0===i?void 0:i.pageViewId)&&void 0!==r?r:"",c=new FormData;return c.append("email",e),c.append("csrfToken",""),c.append("listName",t),c.append("ref",o),c.append("refViewId",a),c.append("name",""),window.guardian.config.switches.emailSignupRecaptcha&&c.append("g-recaptcha-response",n),c},D=function(){var e=(0,o.A)(c().mark((function e(){var t,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=window.guardian.config.page.idApiUrl){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,(0,k.w)(t)();case 5:if(n=e.sent){e.next=8;break}return e.abrupt("return");case 8:return e.abrupt("return",n);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),z=function(){var e=(0,o.A)(c().mark((function e(t,n){var r,o,a,l,s,d;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=[],o=L(n.entries());try{for(o.s();!(a=o.n()).done;)l=(0,i.A)(a.value,2),s=l[0],d=l[1],r.push("".concat(encodeURIComponent(s),"=").concat(encodeURIComponent(d.toString())))}catch(e){o.e(e)}finally{o.f()}return e.abrupt("return",fetch(t,{method:"POST",body:r.join("&"),headers:{Accept:"application/json","Content-Type":"application/x-www-form-urlencoded"}}));case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),_=function(e,t,n,r){var i="CLICK";switch(t){case"form-submission":case"captcha-not-passed":case"captcha-passed":i="ANSWER";break;case"submission-confirmed":i="SUBSCRIBE";break;case"captcha-load-error":case"form-submit-error":case"submission-failed":i="CLOSE";break;case"open-captcha":i="EXPAND";break;default:i="CLICK"}var o=JSON.stringify({eventDescription:t,newsletterId:e,timestamp:Date.now()});(0,j.u_)({action:i,value:o,component:{componentType:"NEWSLETTER_SUBSCRIPTION",id:"AR SecureSignup ".concat(e)},abTest:r},n)},N={name:"1ubrepq",styles:".grecaptcha-badge{visibility:hidden;}"},B=function(e){var t=e.newsletterId,n=e.successDescription,r=e.abTest,a=(0,y.useRef)(null),s=(0,y.useState)(),u=(0,i.A)(s,2),f=u[0],p=u[1],b=(0,y.useState)(),m=(0,i.A)(b,2),j=m[0],k=m[1],S=(0,y.useState)(!1),C=(0,i.A)(S,2),L=C[0],M=C[1],B=(0,y.useState)(void 0),K=(0,i.A)(B,2),H=K[0],V=K[1],$=(0,y.useState)(void 0),q=(0,i.A)($,2),F=q[0],J=q[1];(0,y.useEffect)((function(){p(window.guardian.config.page.googleRecaptchaSiteKey),D().then(k)}),[]);var W=(0,O.U)().renderingTarget,G="boolean"==typeof H,Q=function(){var e=(0,o.A)(c().mark((function e(n){var i,o,a,l,s;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=null!==(i=document.querySelector('input[type="email"]'))&&void 0!==i?i:null,l=null!==(o=null==a?void 0:a.value)&&void 0!==o?o:"",_(t,"form-submission",W,r),e.next=5,z(window.guardian.config.page.ajaxUrl+"/email",U(l,t,n));case 5:s=e.sent,M(!1),V(s.ok),_(t,s.ok?"submission-confirmed":"submission-failed",W,r);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),X=(0,d.K)(j);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("form",{onSubmit:function(e){var n;e.preventDefault(),L||(J(void 0),_(t,"open-captcha",W,r),null===(n=a.current)||void 0===n||n.execute())},id:"secure-signup-".concat(t),style:A({display:G||L?"none":void 0},X?P:void 0),css:T,children:[(0,l.jsx)(h.k,{hidden:X,hideLabel:X,name:"email",label:"Enter your email address",type:"email",value:j}),(0,l.jsx)(v.$,{onClick:function(){_(t,"click-button",W,r)},size:"small",type:"submit",children:"Sign up"})]}),L&&(0,l.jsx)("div",{"aria-label":"loading",children:(0,l.jsx)(g.y,{size:"small"})}),!!F&&(0,l.jsx)(R,{text:F}),G&&(H?(0,l.jsx)("div",{children:(0,l.jsx)(E,{text:n})}):(0,l.jsxs)("div",{css:I,children:[(0,l.jsx)(R,{text:"Sign up failed."}),(0,l.jsx)(v.$,{size:"small",icon:(0,l.jsx)(w.k,{}),iconSide:"right",onClick:function(){var e;J(void 0),V(void 0),null===(e=a.current)||void 0===e||e.reset()},children:"Try again"})]})),!!f&&(0,l.jsx)("div",{css:N,children:(0,l.jsx)(x.A,{sitekey:f,ref:a,onChange:function(e){e?(_(t,"captcha-passed",W,r),M(!0),Q(e).catch((function(e){console.error(e),_(t,"form-submit-error",W,r),J("Sorry, there was an error signing you up."),M(!1)}))):_(t,"captcha-not-passed",W,r)},onError:function(){var e;_(t,"captcha-load-error",W,r),J("Sorry, the reCAPTCHA failed to load."),null===(e=a.current)||void 0===e||e.reset()},size:"invisible"})})]})}},46845:(e,t,n)=>{n.d(t,{w:()=>s});var r=n(18247),i=n(57820),o=n.n(i),a=n(10077),c=n(17950),l=function(){var e=(0,r.A)(o().mark((function e(t){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,c.kU)((function(e){var t;return null===(t=e.idToken)||void 0===t?void 0:t.claims.email}),(function(){return(0,a.J)(t).then((function(e){var t;return null===(t=e.user)||void 0===t?void 0:t.primaryEmailAddress})).catch((function(e){window.guardian.modules.sentry.reportError(e,"getEmail")}))})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),s=function(e){return function(){return new Promise((function(t){setTimeout((function(){return t(null)}),1e3),l(e).then((function(e){t(e||null)}))}))}}},10077:(e,t,n)=>{n.d(t,{J:()=>c,h:()=>l});var r=n(71456);function i(e){if(!e.ok)throw Error(e.statusText||"getIdApiUserData | An api call returned HTTP status ".concat(e.status));return e}var o=function(e){return fetch(e,{credentials:"include"}).then(i).then((function(e){return e.json()}))},a={},c=function(e){if(!a.idapiUserMeResponse){var t=(0,r.w)(e,"user/me");a.idapiUserMeResponse=o(t)}return a.idapiUserMeResponse},l=function(e){if(!a.idapiUserIdentifiersResponse){var t=(0,r.w)(e,"user/me/identifiers");a.idapiUserIdentifiersResponse=o(t)}return a.idapiUserIdentifiersResponse}},1954:(e,t,n)=>{n.d(t,{M:()=>r});var r=function(e){return"var(".concat(e,")")}},71456:(e,t,n)=>{n.d(t,{w:()=>i});var r=/\b\/{2,}/g,i=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.join("/").replace(r,"/")}},84782:(e,t,n)=>{n.d(t,{f:()=>r});var r={desktop:980,leftCol:1140,mobile:320,mobileLandscape:480,mobileMedium:375,phablet:660,tablet:740,wide:1300}},81477:(e,t,n)=>{n.d(t,{HT:()=>c,TG:()=>l,Tq:()=>s});var r=n(84782),i=function(e){return"@media (min-width: ".concat("".concat(e,"px"),")")},o=function(e){return"@media (max-width: ".concat("".concat(e-.1,"px"),")")},a=function(e,t){return"@media (min-width: ".concat("".concat(e,"px"),") and (max-width: ","".concat(t-.1,"px"),")")},c={mobile:i(r.f.mobile),mobileMedium:i(r.f.mobileMedium),mobileLandscape:i(r.f.mobileLandscape),phablet:i(r.f.phablet),tablet:i(r.f.tablet),desktop:i(r.f.desktop),leftCol:i(r.f.leftCol),wide:i(r.f.wide)},l={mobile:o(r.f.mobile),mobileMedium:o(r.f.mobileMedium),mobileLandscape:o(r.f.mobileLandscape),phablet:o(r.f.phablet),tablet:o(r.f.tablet),desktop:o(r.f.desktop),leftCol:o(r.f.leftCol),wide:o(r.f.wide)},s={mobile:{and:{mobileMedium:a(r.f.mobile,r.f.mobileMedium),mobileLandscape:a(r.f.mobile,r.f.mobileLandscape),phablet:a(r.f.mobile,r.f.phablet),tablet:a(r.f.mobile,r.f.tablet),desktop:a(r.f.mobile,r.f.desktop),leftCol:a(r.f.mobile,r.f.leftCol),wide:a(r.f.mobileMedium,r.f.wide)}},mobileMedium:{and:{mobileLandscape:a(r.f.mobileMedium,r.f.mobileLandscape),phablet:a(r.f.mobileMedium,r.f.phablet),tablet:a(r.f.mobileMedium,r.f.tablet),desktop:a(r.f.mobileMedium,r.f.desktop),leftCol:a(r.f.mobileMedium,r.f.leftCol),wide:a(r.f.mobileMedium,r.f.wide)}},mobileLandscape:{and:{phablet:a(r.f.mobileLandscape,r.f.phablet),tablet:a(r.f.mobileLandscape,r.f.tablet),desktop:a(r.f.mobileLandscape,r.f.desktop),leftCol:a(r.f.mobileLandscape,r.f.leftCol),wide:a(r.f.mobileLandscape,r.f.wide)}},phablet:{and:{tablet:a(r.f.phablet,r.f.tablet),desktop:a(r.f.phablet,r.f.desktop),leftCol:a(r.f.phablet,r.f.leftCol),wide:a(r.f.phablet,r.f.wide)}},tablet:{and:{desktop:a(r.f.tablet,r.f.desktop),leftCol:a(r.f.tablet,r.f.leftCol),wide:a(r.f.tablet,r.f.wide)}},desktop:{and:{leftCol:a(r.f.desktop,r.f.leftCol),wide:a(r.f.desktop,r.f.wide)}},leftCol:{and:{wide:a(r.f.leftCol,r.f.wide)}}}},52104:(e,t,n)=>{n.d(t,{k:()=>l});var r=n(50484),i=n(24017),o=n(72657),a=n(26633),c=function(e){var t=e.size,n=e.theme;return(0,r.jsx)("svg",{width:t?a.RK[t]:void 0,height:void 0,viewBox:"-3 -3 30 30",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0,children:(0,r.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12.019 22a9.94 9.94 0 0 0 8.223-4.35l-.114-.616-.797-.478-.615.16c-1.48 2.095-3.895 3.485-6.697 3.485-4.487 0-8.178-3.69-8.178-8.224 0-4.51 3.69-8.177 8.178-8.177 2.574 0 4.784 1.139 6.31 2.96l-3.303.548v1.138h5.831l.433-.432V2h-1.116l-.57 3.44C17.782 3.32 15.094 2 12.02 2 6.484 2 1.996 6.465 1.996 11.977A10.01 10.01 0 0 0 12.02 22",fill:null==n?void 0:n.fill})})},l=function(e){var t=e.size,n=e.theme,a=e.isAnnouncedByScreenReader,l=void 0!==a&&a;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(c,{size:t,theme:n}),l?(0,r.jsx)("span",{css:(0,i.css)(o.Q,";"),children:"Reload"}):""]})}},28673:(e,t,n)=>{n.d(t,{$:()=>u});var r=n(62335),i=n(5926),o=n(50484),a=n(48264),c=n(44759),l=["priority","size","icon","iconSide","hideLabel","nudgeIcon","type","isLoading","loadingAnnouncement","cssOverrides","children","theme"];function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){(0,r.A)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var u=function(e){var t=e.priority,n=e.size,r=e.icon,s=e.iconSide,u=e.hideLabel,f=e.nudgeIcon,p=e.type,b=void 0===p?"button":p,m=e.isLoading,h=void 0!==m&&m,v=e.loadingAnnouncement,g=void 0===v?"Loading":v,w=e.cssOverrides,y=e.children,x=e.theme,j=(0,i.A)(e,l);return(0,o.jsx)("button",d(d({css:(0,c.V)({size:n,priority:t,icon:r,hideLabel:u,iconSide:s,nudgeIcon:f,cssOverrides:w,isLoading:h,theme:x}),type:b,"aria-live":"polite","aria-label":h?g:void 0},j),{},{children:(0,a.b)({hideLabel:u,iconSvg:r,isLoading:h,children:y})}))}}}]);
//# sourceMappingURL=SecureSignup-importable.client.web.legacy.268e8818217d300a9342.js.map