(self.webpackChunk_guardian_dotcom_rendering=self.webpackChunk_guardian_dotcom_rendering||[]).push([[2242,3408],{77663:(e,t,r)=>{"use strict";r.d(t,{u:()=>i});var n=r(50484),i=function(e){var t=e.priority,r=e.defer,i=e.children,o=e.role,a="visible"===(null==r?void 0:r.until)?r.rootMargin:void 0,l=String(i.type.name);return(0,n.jsx)("gu-island",{name:l,priority:t,deferUntil:null==r?void 0:r.until,props:JSON.stringify(i.props),rootMargin:a,"data-spacefinder-role":o,children:i})}},32823:(e,t,r)=>{"use strict";r.d(t,{Y:()=>b});var n=r(50484),i=r(24017),o=r(71653),a=r(59648),l=r(1954),d=r(77663),c=r(18106),s=(0,i.css)(o.PSs,"line-height:1;padding-bottom:0.2em;"),u=(0,i.css)(o.yui,";"),f=(0,i.css)(o.rS6," display:flex;flex-direction:row;align-items:baseline;width:fit-content;padding:0 ",a.x[1],"px;"),p=(0,i.css)("display:inline-block;margin-right:",a.x[1],"px;padding-bottom:0;font-size:inherit;line-height:inherit;"),b=function(e){var t=e.text,r=e.color,i=e.showPulsingDot,o=e.isInline,a=e.fontWeight,b=void 0===a?"regular":a,m=!!i;return(0,n.jsxs)("div",{css:[m?f:[s,"bold"===b&&u],o&&p],style:{color:m?(0,l.M)("--kicker-text-live"):r,backgroundColor:m?(0,l.M)("--kicker-background-live"):"transparent"},children:[i&&(0,n.jsx)(d.u,{priority:"enhancement",defer:{until:"visible"},children:(0,n.jsx)(c.PulsingDot,{colour:(0,l.M)("--kicker-pulsing-dot-live")})}),t]})}},18106:(e,t,r)=>{"use strict";r.r(t),r.d(t,{PulsingDot:()=>p});var n,i=r(22820),o=r(34660),a=r(50484),l=r(24017),d=r(296),c=r(67400),s=function(e){return(0,l.css)("color:",e&&e,";:before{border-radius:62.5rem;display:inline-block;position:relative;background-color:currentColor;width:0.75em;height:0.75em;content:'';margin-right:0.1875rem;vertical-align:initial;}")},u=(0,l.keyframes)(n||(n=(0,o.A)(["\n    0% {opacity: 1;}\n    10% {opacity: .25;}\n    40% {opacity: 1;}\n    100% {opacity: 1;}\n"]))),f=(0,l.css)("@media not (prefers-reduced-motion: reduce){animation:",u," 1s infinite;}"),p=function(e){var t=e.colour,r=(0,c.useState)(!1),n=(0,i.A)(r,2),o=n[0],l=n[1];return(0,c.useEffect)((function(){var e=d.I.local.get("gu.prefs.accessibility.flashing-elements");l(!1!==e)}),[]),(0,a.jsx)("span",{css:[s(t),o&&f]})}},24755:(e,t,r)=>{"use strict";r.d(t,{f:()=>i});var n=["lightbox","youTubeFullscreen","sticky-video-button","sticky-video","banner","dropdown","burger","mastheadVeggieBurgerExpandedMobile","expanded-veggie-menu-wrapper","expanded-veggie-menu","fullPageInteractiveHeaderWrapper","mobileSticky","stickyAdWrapperLabsHeader","stickyAdWrapper","stickyAdWrapperNav","mastheadMyAccountDropdown","mastheadEditionDropdown","editionDropdown","summaryDetails","toast","onwardsCarousel","myAccountDropdown","searchHeaderLink","TheGuardian","editionSwitcherBanner","expandableMarketingCardOverlay","tableOfContents","articleHeadline","immersiveBlackBox","bodyArea","rightColumnArea","mainMedia","card-nested-link","card-link"],i=function(e){var t=n.indexOf(e);return-1===t?-1:n.length-t}},69932:(e,t)=>{"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.DiscussionNativeError=void 0,function(e){e[e.UNKNOWN_ERROR=0]="UNKNOWN_ERROR"}(r||(t.DiscussionNativeError=r={}))},25607:(e,t)=>{"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.MediaEvent=void 0,function(e){e[e.request=0]="request",e[e.ready=1]="ready",e[e.play=2]="play",e[e.percent25=3]="percent25",e[e.percent50=4]="percent50",e[e.percent75=5]="percent75",e[e.end=6]="end"}(r||(t.MediaEvent=r={}))},13948:(e,t)=>{"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.PurchaseScreenReason=void 0,function(e){e[e.hideAds=0]="hideAds",e[e.epic=1]="epic"}(r||(t.PurchaseScreenReason=r={}))},47441:(e,t)=>{"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.SignInScreenReason=void 0,function(e){e[e.accessDiscussion=0]="accessDiscussion",e[e.postComment=1]="postComment",e[e.recommendComment=2]="recommendComment",e[e.replyToComment=3]="replyToComment",e[e.reportComment=4]="reportComment"}(r||(t.SignInScreenReason=r={}))},31274:(e,t)=>{"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.SignInScreenReferrer=void 0,function(e){e[e.accessDiscussion=0]="accessDiscussion",e[e.postComment=1]="postComment",e[e.recommendComment=2]="recommendComment",e[e.replyToComment=3]="replyToComment",e[e.reportComment=4]="reportComment"}(r||(t.SignInScreenReferrer=r={}))},36343:function(e,t,r){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r);var i=Object.getOwnPropertyDescriptor(t,r);i&&!("get"in i?!t.__esModule:i.writable||i.configurable)||(i={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,i)}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),i=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__exportStar||function(e,t){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(t,r)||n(t,e,r)},a=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&n(t,e,r);return i(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.Interaction=t.Newsletters=t.Navigation=t.Analytics=t.Discussion=t.Metrics=t.Videos=t.Gallery=t.User=t.Notifications=t.Tag=t.Acquisitions=t.Commercial=t.Environment=void 0,o(r(25607),t),o(r(13948),t),o(r(47441),t),o(r(31274),t),o(r(69932),t),o(r(42589),t),o(r(52590),t),o(r(10864),t),o(r(73154),t),o(r(69458),t),o(r(82438),t),o(r(29872),t),o(r(23131),t),o(r(25406),t),o(r(83886),t),o(r(43679),t),o(r(89027),t);var l=a(r(72910));t.Environment=l;var d=a(r(16873));t.Commercial=d;var c=a(r(83551));t.Acquisitions=c;var s=a(r(69139));t.Tag=s;var u=a(r(72031));t.Notifications=u;var f=a(r(30316));t.User=f;var p=a(r(46365));t.Gallery=p;var b=a(r(435));t.Videos=b;var m=a(r(53274));t.Metrics=m;var v=a(r(40771));t.Discussion=v;var g=a(r(555));t.Analytics=g;var h=a(r(81449));t.Navigation=h;var y=a(r(79907));t.Newsletters=y;var M=a(r(43019));t.Interaction=M},97584:e=>{"use strict";e.exports=i,e.exports.isMobile=i,e.exports.default=i;const t=/(android|bb\d+|meego).+mobile|armv7l|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series[46]0|samsungbrowser|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i,r=/CrOS/,n=/android|ipad|playbook|silk/i;function i(e){e||(e={});let i=e.ua;if(i||"undefined"==typeof navigator||(i=navigator.userAgent),i&&i.headers&&"string"==typeof i.headers["user-agent"]&&(i=i.headers["user-agent"]),"string"!=typeof i)return!1;let o=t.test(i)&&!r.test(i)||!!e.tablet&&n.test(i);return!o&&e.tablet&&e.featureDetect&&navigator&&navigator.maxTouchPoints>1&&-1!==i.indexOf("Macintosh")&&-1!==i.indexOf("Safari")&&(o=!0),o}},44165:(e,t,r)=>{var n=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,a=/^0o[0-7]+$/i,l=parseInt,d="object"==typeof r.g&&r.g&&r.g.Object===Object&&r.g,c="object"==typeof self&&self&&self.Object===Object&&self,s=d||c||Function("return this")(),u=Object.prototype.toString,f=Math.max,p=Math.min,b=function(){return s.Date.now()};function m(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function v(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==u.call(e)}(e))return NaN;if(m(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=m(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(n,"");var r=o.test(e);return r||a.test(e)?l(e.slice(2),r?2:8):i.test(e)?NaN:+e}e.exports=function(e,t,r){var n,i,o,a,l,d,c=0,s=!1,u=!1,g=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function h(t){var r=n,o=i;return n=i=void 0,c=t,a=e.apply(o,r)}function y(e){var r=e-d;return void 0===d||r>=t||r<0||u&&e-c>=o}function M(){var e=b();if(y(e))return x(e);l=setTimeout(M,function(e){var r=t-(e-d);return u?p(r,o-(e-c)):r}(e))}function x(e){return l=void 0,g&&n?h(e):(n=i=void 0,a)}function k(){var e=b(),r=y(e);if(n=arguments,i=this,d=e,r){if(void 0===l)return function(e){return c=e,l=setTimeout(M,t),s?h(e):a}(d);if(u)return l=setTimeout(M,t),h(d)}return void 0===l&&(l=setTimeout(M,t)),a}return t=v(t)||0,m(r)&&(s=!!r.leading,o=(u="maxWait"in r)?f(v(r.maxWait)||0,t):o,g="trailing"in r?!!r.trailing:g),k.cancel=function(){void 0!==l&&clearTimeout(l),c=0,n=d=i=l=void 0},k.flush=function(){return void 0===l?a:x(b())},k}},34660:(e,t,r)=>{"use strict";function n(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}r.d(t,{A:()=>n})},7944:(e,t,r)=>{"use strict";r.d(t,{k:()=>n});var n=function(e,t){return new Promise((function(r,n){var i,o=document.createElement("script");if(o.src=e,Array.from(document.scripts).some((function(e){var t=e.src;return o.src===t})))return r(void 0);Object.assign(o,t),o.onload=r,o.onerror=function(t,r,i,o,a){if(a)n(a);else if("string"!=typeof t)if(t instanceof Event){var l,d=null!==(l=t.target.getAttribute("src"))&&void 0!==l?l:"";n(new Error("Error loading script: src: ".concat(e," targetSrc: ").concat(d)))}else n(new Error("Error loading script: src: ".concat(e)));else n(new Error("Error loading script: src: ".concat(e," event: ").concat(t)))};var a=document.scripts[0];null==a||null===(i=a.parentNode)||void 0===i||i.insertBefore(o,a)}))}},16678:(e,t,r)=>{"use strict";r.d(t,{MI:()=>c,SA:()=>l,l5:()=>d});var n,i,o=r(62335),a=r(50641),l=(n={},(0,o.A)((0,o.A)((0,o.A)((0,o.A)((0,o.A)((0,o.A)((0,o.A)((0,o.A)((0,o.A)((0,o.A)(n,"--text",a.M.neutral[7]),"--background",a.M.neutral[97]),"--horizontalRules",a.M.neutral[86]),"--border",a.M.neutral[7]),"--expandBackground",a.M.neutral[7]),"--expandBackgroundHover","#454545"),"--expandText",a.M.neutral[100]),"--collapseBackground",a.M.neutral[100]),"--collapseBackgroundHover","#E5E5E5"),"--collapseText",a.M.neutral[7]),(0,o.A)(n,"--collapseTextHover",a.M.neutral[7])),d=(i={},(0,o.A)((0,o.A)((0,o.A)((0,o.A)((0,o.A)((0,o.A)((0,o.A)((0,o.A)((0,o.A)((0,o.A)(i,"--text",a.M.neutral[86]),"--background",a.M.neutral[20]),"--horizontalRules",a.M.neutral[60]),"--border",a.M.neutral[60]),"--expandBackground",a.M.neutral[86]),"--expandBackgroundHover",a.M.neutral[100]),"--expandText",a.M.neutral[7]),"--collapseBackground",a.M.neutral[10]),"--collapseText",a.M.neutral[86]),"--collapseBackgroundHover",a.M.neutral[86]),(0,o.A)(i,"--collapseTextHover",a.M.neutral[7])),c=function(e){return"var(".concat(e,")")}},87062:(e,t,r)=>{"use strict";r.d(t,{NY:()=>l,Rh:()=>o,wS:()=>a});var n=r(62335),i=r(50641),o=(0,n.A)((0,n.A)((0,n.A)((0,n.A)({},"--background",i.M.neutral[97]),"--text",i.M.neutral[7]),"--border",i.M.neutral[60]),"--inactiveBackground",i.M.neutral[86]),a=(0,n.A)((0,n.A)((0,n.A)((0,n.A)({},"--background",i.M.neutral[20]),"--text",i.M.neutral[97]),"--border",i.M.neutral[60]),"--inactiveBackground",i.M.neutral[7]),l=function(e){return"var(".concat(e,")")}},84782:(e,t,r)=>{"use strict";r.d(t,{f:()=>n});var n={desktop:980,leftCol:1140,mobile:320,mobileLandscape:480,mobileMedium:375,phablet:660,tablet:740,wide:1300}},72657:(e,t,r)=>{"use strict";r.d(t,{Q:()=>n});var n="\n\tposition: absolute;\n\toverflow: hidden; /* gets rid of horizontal scrollbar that appears in some circumstances */\n\twhite-space: nowrap; /* The white-space property forces the content to render on one line. */\n\twidth: 1px;  /* ensures content is announced by VoiceOver. */\n\theight: 1px; /* ensures content is announced by VoiceOver. */\n\tmargin: -1px; /* hide or clip content that does not fit into a 1-pixel visible area. */\n\tpadding: 0; /* hide or clip content that does not fit into a 1-pixel visible area. */\n\tborder: 0;\n\tclip: rect(1px, 1px, 1px, 1px); /* clip removes any visible trace of the element */\n\t-webkit-clip-path: inset(50%); /* clip removes any visible trace of the element */\n\tclip-path: inset(50%); /* clip removes any visible trace of the element */\n"},81477:(e,t,r)=>{"use strict";r.d(t,{HT:()=>l,TG:()=>d,Tq:()=>c});var n=r(84782),i=function(e){return"@media (min-width: ".concat("".concat(e,"px"),")")},o=function(e){return"@media (max-width: ".concat("".concat(e-.1,"px"),")")},a=function(e,t){return"@media (min-width: ".concat("".concat(e,"px"),") and (max-width: ","".concat(t-.1,"px"),")")},l={mobile:i(n.f.mobile),mobileMedium:i(n.f.mobileMedium),mobileLandscape:i(n.f.mobileLandscape),phablet:i(n.f.phablet),tablet:i(n.f.tablet),desktop:i(n.f.desktop),leftCol:i(n.f.leftCol),wide:i(n.f.wide)},d={mobile:o(n.f.mobile),mobileMedium:o(n.f.mobileMedium),mobileLandscape:o(n.f.mobileLandscape),phablet:o(n.f.phablet),tablet:o(n.f.tablet),desktop:o(n.f.desktop),leftCol:o(n.f.leftCol),wide:o(n.f.wide)},c={mobile:{and:{mobileMedium:a(n.f.mobile,n.f.mobileMedium),mobileLandscape:a(n.f.mobile,n.f.mobileLandscape),phablet:a(n.f.mobile,n.f.phablet),tablet:a(n.f.mobile,n.f.tablet),desktop:a(n.f.mobile,n.f.desktop),leftCol:a(n.f.mobile,n.f.leftCol),wide:a(n.f.mobileMedium,n.f.wide)}},mobileMedium:{and:{mobileLandscape:a(n.f.mobileMedium,n.f.mobileLandscape),phablet:a(n.f.mobileMedium,n.f.phablet),tablet:a(n.f.mobileMedium,n.f.tablet),desktop:a(n.f.mobileMedium,n.f.desktop),leftCol:a(n.f.mobileMedium,n.f.leftCol),wide:a(n.f.mobileMedium,n.f.wide)}},mobileLandscape:{and:{phablet:a(n.f.mobileLandscape,n.f.phablet),tablet:a(n.f.mobileLandscape,n.f.tablet),desktop:a(n.f.mobileLandscape,n.f.desktop),leftCol:a(n.f.mobileLandscape,n.f.leftCol),wide:a(n.f.mobileLandscape,n.f.wide)}},phablet:{and:{tablet:a(n.f.phablet,n.f.tablet),desktop:a(n.f.phablet,n.f.desktop),leftCol:a(n.f.phablet,n.f.leftCol),wide:a(n.f.phablet,n.f.wide)}},tablet:{and:{desktop:a(n.f.tablet,n.f.desktop),leftCol:a(n.f.tablet,n.f.leftCol),wide:a(n.f.tablet,n.f.wide)}},desktop:{and:{leftCol:a(n.f.desktop,n.f.leftCol),wide:a(n.f.desktop,n.f.wide)}},leftCol:{and:{wide:a(n.f.leftCol,n.f.wide)}}}},74123:(e,t,r)=>{"use strict";r.d(t,{T:()=>d});var n=r(50484),i=r(24017),o=r(72657),a=r(26633),l=function(e){var t=e.size,r=e.theme;return(0,n.jsx)("svg",{width:t?a.RK[t]:void 0,height:void 0,viewBox:"-3 -3 30 30",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0,children:(0,n.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10m-10.704 1.818h1.386l.659-8.636-.91-.91h-.885l-.91.91zm2.068 3.637c0-.75-.614-1.364-1.364-1.364s-1.364.614-1.364 1.364.614 1.363 1.364 1.363 1.364-.613 1.364-1.363",fill:null==r?void 0:r.fill})})},d=function(e){var t=e.size,r=e.theme,a=e.isAnnouncedByScreenReader,d=void 0!==a&&a;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(l,{size:t,theme:r}),d?(0,n.jsx)("span",{css:(0,i.css)(o.Q,";"),children:"Warning"}):""]})}},6569:(e,t,r)=>{"use strict";r.d(t,{F:()=>d});var n=r(50484),i=r(24017),o=r(72657),a=r(26633),l=function(e){var t=e.size,r=e.theme;return(0,n.jsx)("svg",{width:t?a.RK[t]:void 0,height:void 0,viewBox:"-3 -3 30 30",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0,children:(0,n.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12.015 14.042 20.707 22 22 20.709 14.06 12 22 3.291 20.707 2l-8.692 7.958L3.293 2.03 2 3.321 9.97 12 2 20.679l1.293 1.291z",fill:null==r?void 0:r.fill})})},d=function(e){var t=e.size,r=e.theme,a=e.isAnnouncedByScreenReader,d=void 0!==a&&a;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(l,{size:t,theme:r}),d?(0,n.jsx)("span",{css:(0,i.css)(o.Q,";"),children:"Close"}):""]})}},71029:(e,t,r)=>{"use strict";r.d(t,{v:()=>d});var n=r(50484),i=r(24017),o=r(72657),a=r(26633),l=function(e){var t=e.size,r=e.theme;return(0,n.jsx)("svg",{width:t?a.RK[t]:void 0,height:void 0,viewBox:"-3 -3 30 30",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0,children:(0,n.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M21.075 12.35v-.7L5.475 5.2l-.575.45v12.7l.575.4z",fill:null==r?void 0:r.fill})})},d=function(e){var t=e.size,r=e.theme,a=e.isAnnouncedByScreenReader,d=void 0!==a&&a;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(l,{size:t,theme:r}),d?(0,n.jsx)("span",{css:(0,i.css)(o.Q,";"),children:"Stop"}):""]})}},24108:(e,t,r)=>{"use strict";r.d(t,{Tu:()=>d,Wd:()=>a,fA:()=>i,fc:()=>o,mB:()=>l});var n=r(50641),i={button:{textPrimary:n.M.neutral[100],backgroundPrimary:n.M.brand[400],backgroundPrimaryHover:"#234B8A",textSecondary:n.M.brand[400],backgroundSecondary:n.M.brand[800],backgroundSecondaryHover:"#ACC9F7",textTertiary:n.M.brand[400],backgroundTertiaryHover:"#E5E5E5",borderTertiary:n.M.brand[400],textSubdued:n.M.brand[400]}},o={button:{textPrimary:n.M.brand[400],backgroundPrimary:n.M.neutral[100],backgroundPrimaryHover:"#E0E0E0",textSecondary:n.M.neutral[100],backgroundSecondary:n.M.brand[600],backgroundSecondaryHover:"#234B8A",textTertiary:n.M.neutral[100],backgroundTertiaryHover:n.M.brand[300],borderTertiary:n.M.neutral[100],textSubdued:n.M.neutral[100]}},a={button:{textPrimary:n.M.neutral[100],backgroundPrimary:n.M.neutral[7],backgroundPrimaryHover:"#454545",textSecondary:n.M.neutral[7],backgroundSecondary:n.M.brandAlt[200],backgroundSecondaryHover:"#F2AE00",textTertiary:n.M.neutral[0],backgroundTertiaryHover:"#FFD213",borderTertiary:n.M.neutral[7],textSubdued:n.M.neutral[7]}},l={textPrimary:n.M.neutral[100],backgroundPrimary:n.M.brand[400],backgroundPrimaryHover:"#234B8A",textSecondary:n.M.brand[400],backgroundSecondary:n.M.brand[800],backgroundSecondaryHover:"#ACC9F7",textTertiary:n.M.brand[400],backgroundTertiary:"transparent",backgroundTertiaryHover:"#E5E5E5",borderTertiary:n.M.brand[400],textSubdued:n.M.brand[400]},d={textPrimary:n.M.brand[400],backgroundPrimary:n.M.neutral[100],backgroundPrimaryHover:"#E0E0E0",textSecondary:n.M.neutral[100],backgroundSecondary:n.M.brand[600],backgroundSecondaryHover:"#234B8A",textTertiary:n.M.neutral[100],backgroundTertiary:"transparent",backgroundTertiaryHover:n.M.brand[300],borderTertiary:n.M.neutral[100],textSubdued:n.M.neutral[100]};n.M.neutral[100],n.M.neutral[7],n.M.neutral[7],n.M.brandAlt[200],n.M.neutral[0],n.M.neutral[7],n.M.neutral[7]},25549:(e,t,r)=>{"use strict";r.d(t,{L:()=>a});var n=r(50484),i=r(24017),o=r(81477),a=function(e){var t,r=e.children,a=e.above,l=e.below,d=e.from,c=void 0===d?a:d,s=e.until,u=void 0===s?l:s;return u&&(t=(0,i.css)(o.TG[u],"{display:none;}")),c&&(t=(0,i.css)(t," ",o.HT[c],"{display:none;}")),(0,n.jsx)("span",{css:t,children:r})}}}]);
//# sourceMappingURL=YoutubeBlockComponent-importable.client.web.legacy.670a3f1450ace0bb31f4.js.map