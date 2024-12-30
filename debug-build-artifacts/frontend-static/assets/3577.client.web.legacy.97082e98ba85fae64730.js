"use strict";(self.webpackChunk_guardian_dotcom_rendering=self.webpackChunk_guardian_dotcom_rendering||[]).push([[3577],{53348:(e,n,t)=>{t.r(n),t.d(n,{Dropdown:()=>D});var r=t(22820),o=t(50484),i=t(24017),a=t(65656),c=t(81477),s=t(71653),d=t(50641),l=t(72657),u=t(67400),p=t(85918),f=t(24755),m=t(88528),x=t(95131),v=t(7693);function g(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=Array(n);t<n;t++)r[t]=e[t];return r}var h=(0,i.css)("z-index:",(0,f.f)("dropdown"),";list-style:none;li::before{content:'\\200B';display:block;height:0;width:0;}background-color:white;padding:6px 0;box-shadow:0 0 0 1px rgba(0, 0, 0, 0.1);",c.TG.tablet,"{position:fixed;border-radius:0;top:32px;left:0;right:0;width:auto;max-height:calc(100% - 50px);overflow:auto;}",c.HT.tablet,"{position:absolute;top:100%;width:200px;border-radius:3px;}"),b={name:"bjn8wh",styles:"position:relative"},y={name:"4zleql",styles:"display:block"},w={name:"eivff4",styles:"display:none"},k=(0,i.css)(s.PSs,";color:",d.M.neutral[7],";transition:color 80ms ease-out;margin:-1px 0 0 0;text-decoration:none;display:flex;align-items:flex-start;justify-content:space-between;padding:10px 18px 15px 30px;:hover{background-color:",d.M.neutral[93],";text-decoration:none;}:focus{text-decoration:underline;}:before{content:'';border-top:1px solid ",d.M.neutral[86],";display:block;position:absolute;top:0px;left:30px;right:0px;}"),A=(0,i.css)("font-weight:bold;:after{content:'';border:2px solid ",d.M.news[400],";border-top:0px;border-right:0px;position:absolute;top:19px;left:12px;width:10px;height:4px;transform:rotate(-45deg);}"),j={name:"1mx8uxy",styles:":before{content:none;}"},I=(0,i.css)(s.NA0,";display:block;cursor:pointer;background:none;border:none;line-height:1.2;color:",d.M.neutral[100],";transition:color 80ms ease-out;padding:0px 10px 6px 5px;margin:1px 0 0;text-decoration:none;position:relative;:hover{color:",d.M.brandAlt[400],";:after{transform:translateY(0) rotate(45deg);}}:after{content:'';display:inline-block;width:5px;height:5px;transform:translateY(-2px) rotate(45deg);border:1px solid currentColor;border-left:transparent;border-top:transparent;margin-left:5px;vertical-align:middle;transition:transform 250ms ease-out;}"),E={name:"1baa2f8",styles:":hover:after{transform:translateY(-1px) rotate(-135deg);}:after{transform:translateY(1px) rotate(-135deg);}"},T=d.M.error[400],C=(0,i.css)("background-color:",T,";color:",d.M.neutral[100],";text-align:center;display:flex;justify-content:center;align-items:center;",s.WuG,";line-height:1;flex-shrink:0;"),S={name:"1l2bf3g",styles:"position:absolute;top:0;left:0;margin-left:-10px;margin-top:-3px"},M=(0,i.css)(s.Ikj,";"),H=function(e){var n=e.diameter;return(0,o.jsx)("div",{css:C,style:{width:"".concat(n,"px"),height:"".concat(n,"px"),borderRadius:"".concat(n,"px")},children:(0,o.jsx)("span",{children:"!"})})},L=function(e){var n=e.notification.message;return(0,o.jsx)("div",{css:M,children:n})},N=function(e){var n,t=e.link,i=e.index,c=(0,u.useMemo)((function(){return function(e){if(e.notifications&&e.notifications.length>0)return{componentType:"RETENTION_HEADER",id:e.id,labels:e.notifications.map((function(e){return e.ophanLabel}))}}(t)}),[t]),s=(0,v.U)().renderingTarget,d=(0,m.E)({debounce:!0}),l=(0,r.A)(d,2),f=l[0],h=l[1],y=(0,u.useState)(!1),w=(0,r.A)(y,2),I=w[0],E=w[1];(0,u.useEffect)((function(){if(f&&c&&t.notifications&&t.notifications.length>0&&!I){E(!0);var e,n=function(e,n){var t="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=function(e,n){if(e){if("string"==typeof e)return g(e,n);var t={}.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?g(e,n):void 0}}(e))||n&&e&&"number"==typeof e.length){t&&(e=t);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,c=!1;return{s:function(){t=t.call(e)},n:function(){var e=t.next();return a=e.done,e},e:function(e){c=!0,i=e},f:function(){try{a||null==t.return||t.return()}finally{if(c)throw i}}}}(t.notifications);try{for(n.s();!(e=n.n()).done;){var r,o=e.value;null===(r=o.logImpression)||void 0===r||r.call(o)}}catch(e){n.e(e)}finally{n.f()}(0,p.u_)({component:c,action:"VIEW"},s)}}),[f,c,t.notifications,I,t.id,s]),(0,x.H)((function(){c&&(0,p.u_)({component:c,action:"INSERT"},s)}),[c]);var T=c?function(e,n){var t=encodeURIComponent(JSON.stringify({source:"GUARDIAN_WEB",componentId:n.id,componentType:n.componentType,campaignCode:n.id,referrerPageviewId:window.guardian.config.ophan.pageViewId,referrerUrl:window.location.origin+window.location.pathname,labels:n.labels})),r=e.includes("?")?"&":"?";return"".concat(e).concat(r,"acquisitionData=").concat(t)}(t.url,c):t.url,C=!(0,a.b)(t.notifications)&&t.notifications.length>0;return(0,o.jsx)("li",{css:b,ref:h,children:(0,o.jsxs)("a",{href:T,css:[k,!!t.isActive&&A,0===i&&j],"data-link-name":t.dataLinkName,onClick:function(){c&&(0,p.u_)({component:c,action:"CLICK"},s)},children:[(0,o.jsxs)("div",{children:[t.title,null===(n=t.notifications)||void 0===n?void 0:n.map((function(e){return(0,o.jsx)(L,{notification:e},e.id)}))]}),C&&(0,o.jsx)(H,{diameter:22})]})},t.title)},D=function(e){var n=e.id,t=e.label,a=e.links,c=e.dataLinkName,s=e.cssOverrides,d=e.children,p=(0,u.useState)(!1),f=(0,r.A)(p,2),m=f[0],x=f[1],v=(0,u.useState)(!0),g=(0,r.A)(v,2),b=g[0],T=g[1],C=(0,u.useState)(null),M=(0,r.A)(C,2),L=M[0],D=M[1];(0,u.useEffect)((function(){T(!1)}),[]),(0,u.useEffect)((function(){var e=function(e){m&&"Escape"===e.code&&x(!1)};return document.addEventListener("keydown",e,!1),function(){return document.removeEventListener("keydown",e)}}),[m]),(0,u.useEffect)((function(){if(m&&L){var e=function(e){L!==e.target&&(e.stopPropagation(),x(!1))};return document.addEventListener("click",e,!1),function(){return document.removeEventListener("click",e)}}}),[m,L]);var _="dropbox-id-".concat(n),O="checkbox-id-".concat(n),R=function(e){return e.reduce((function(e,n){var t,r;return e+(null!==(t=null===(r=n.notifications)||void 0===r?void 0:r.length)&&void 0!==t?t:0)}),0)}(a);return(0,o.jsx)(o.Fragment,{children:b?(0,o.jsxs)("div",{css:(0,i.css)("#".concat(O),"{",l.Q,";}","#".concat(_),"{display:none;}","#".concat(O),":checked+","#".concat(_),"{display:block;}"),children:[(0,o.jsx)("label",{htmlFor:O,css:[I,s],children:t}),(0,o.jsx)("input",{type:"checkbox",id:O,"aria-checked":"false",tabIndex:-1}),(0,o.jsx)("ul",{id:_,css:[h,s],children:a.map((function(e,n){return(0,o.jsx)("li",{children:(0,o.jsx)("a",{href:e.url,css:[k,!!e.isActive&&A,0===n&&j],"data-link-name":e.dataLinkName,children:e.title})},e.title)}))})]}):(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)("button",{onClick:function(){x(!m)},css:[I,s,m&&E],"aria-expanded":m?"true":"false","data-link-name":c,"data-testid":"dropdown-button",type:"button",ref:D,children:[t,R>0&&(0,o.jsx)("div",{css:S,children:(0,o.jsx)(H,{diameter:18})})]}),(0,o.jsx)("div",{css:m?y:w,children:d?(0,o.jsx)(o.Fragment,{children:d}):(0,o.jsx)("ul",{css:[h,s],"data-testid":"dropdown-options",children:a.map((function(e,n){return(0,o.jsx)(N,{link:e,index:n},e.id)}))})})]})})}},41183:(e,n,t)=>{t.d(n,{xA:()=>c});var r=t(24017),o=t(81477),i=(0,r.css)("display:grid;grid-auto-rows:auto;grid-template-columns:[viewport-start] 0 [content-start main-column-start] repeat(4, minmax(0, 1fr)) [content-end main-column-end] 0 [viewport-end];column-gap:10px;",o.HT.mobileLandscape,"{column-gap:20px;}",o.HT.tablet,"{grid-template-columns:[viewport-start] minmax(0, 1fr) [content-start main-column-start] repeat(12, 40px) [content-end main-column-end] minmax(0, 1fr) [viewport-end];}",o.HT.desktop,"{grid-template-columns:[viewport-start] minmax(0, 1fr) [content-start main-column-start] repeat(12, 60px) [content-end main-column-end] minmax(0, 1fr) [viewport-end];}"),a=(0,r.css)(o.HT.leftCol,"{grid-template-columns:[viewport-start] minmax(0, 1fr) [content-start left-column-start] repeat(2, 60px) [left-column-end main-column-start] repeat(12, 60px) [content-end main-column-end] minmax(0, 1fr) [viewport-end];}",o.HT.wide,"{grid-template-columns:[viewport-start] minmax(0, 1fr) [content-start left-column-start] repeat(3, 60px) [left-column-end main-column-start] repeat(12, 60px) [main-column-end] repeat(1, 60px) [content-end] minmax(0, 1fr) [viewport-end];}"),c=function(e){var n=e.type,t=void 0===n?"div":n,o=e.style,c=e.hasPageSkin,s=e.children;return(0,r.jsx)(t,{css:[i,!c&&a],style:o},s)};o.HT.leftCol,o.HT.leftCol},64241:(e,n,t)=>{t.d(n,{r:()=>o});var r=t(94568),o=function(e){var n=e.base,t=e.componentType,o=e.componentId,i=e.campaignCode,a=e.abTest,c=e.pageViewId,s=e.referrerUrl;if(n.search(/(support.theguardian.com)(\/[a-z]*)?\/(contribute|subscribe)/)>=0){var d={source:"GUARDIAN_WEB",componentId:o,componentType:t,campaignCode:i,abTest:a,referrerPageviewId:c,referrerUrl:s},l={REFPVID:c,INTCMP:i,acquisitionData:JSON.stringify(d)};return"".concat(n).concat(n.includes("?")?"&":"?").concat((0,r.G)(l))}return n}},24755:(e,n,t)=>{t.d(n,{f:()=>o});var r=["lightbox","youTubeFullscreen","sticky-video-button","sticky-video","banner","dropdown","burger","mastheadVeggieBurgerExpandedMobile","expanded-veggie-menu-wrapper","expanded-veggie-menu","fullPageInteractiveHeaderWrapper","mobileSticky","stickyAdWrapperLabsHeader","stickyAdWrapper","stickyAdWrapperNav","mastheadMyAccountDropdown","mastheadEditionDropdown","editionDropdown","summaryDetails","toast","onwardsCarousel","myAccountDropdown","searchHeaderLink","TheGuardian","editionSwitcherBanner","expandableMarketingCardOverlay","tableOfContents","articleHeadline","immersiveBlackBox","bodyArea","rightColumnArea","mainMedia","card-nested-link","card-link"],o=function(e){var n=r.indexOf(e);return-1===n?-1:r.length-n}},80971:(e,n,t)=>{t.d(n,{K:()=>r});var r=function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return n.join(" : ")}},94568:(e,n,t)=>{t.d(n,{G:()=>r});var r=function(e){return Object.keys(e).map((function(n){var t,r=null!==(t=e[n])&&void 0!==t?t:"undefined",o=Array.isArray(r)?r.map((function(e){return encodeURIComponent(e)})).join(","):encodeURIComponent(r);return"".concat(n,"=").concat(o)})).join("&")}},88528:(e,n,t)=>{t.d(n,{E:()=>c});var r=t(22820),o=t(44165),i=t.n(o),a=t(67400),c=function(e){var n,t=(0,a.useState)(!1),o=(0,r.A)(t,2),c=o[0],s=o[1],d=(0,a.useState)(null!==(n=e.node)&&void 0!==n?n:null),l=(0,r.A)(d,2),u=l[0],p=l[1],f=(0,a.useRef)(null),m=(0,a.useCallback)((function(n){var t=(0,r.A)(n,1)[0];t&&(t.isIntersecting?s(!0):e.repeat&&s(!1))}),[e.repeat]),x=e.debounce?i()(m,200):m;return(0,a.useEffect)((function(){e.node&&p(e.node)}),[e.node]),(0,a.useEffect)((function(){if(u&&"IntersectionObserver"in window)return f.current=new window.IntersectionObserver(x,e),f.current.observe(u),function(){var e;return null===(e=f.current)||void 0===e?void 0:e.disconnect()}}),[u,e,x]),(0,a.useEffect)((function(){var n;!e.repeat&&c&&(null===(n=f.current)||void 0===n||n.disconnect())}),[c,e.repeat]),[c,p]}},95131:(e,n,t)=>{t.d(n,{H:()=>a});var r=t(22820),o=t(65656),i=t(67400),a=function(e,n){var t=(0,i.useState)(!1),a=(0,r.A)(t,2),c=a[0],s=a[1],d=n.every((function(e){return!(0,o.b)(e)}));(0,i.useEffect)((function(){!c&&d&&(e(),s(!0))}),[c,d,e])}},78561:(e,n,t)=>{t.d(n,{L:()=>a});var r=t(22820),o=t(67400),i=t(85918),a=function(e){var n=(0,o.useState)(),t=(0,r.A)(n,2),a=t[0],c=t[1];return(0,o.useEffect)((function(){(0,i.V5)(e).then((function(e){var n=e.pageViewId;c(n)})).catch((function(){c("no-page-view-id-available")}))}),[e]),a}},1954:(e,n,t)=>{t.d(n,{M:()=>r});var r=function(e){return"var(".concat(e,")")}}}]);
//# sourceMappingURL=3577.client.web.legacy.97082e98ba85fae64730.js.map