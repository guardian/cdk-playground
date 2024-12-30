"use strict";(self.webpackChunk_guardian_dotcom_rendering=self.webpackChunk_guardian_dotcom_rendering||[]).push([[2545,4926,8351,9688],{69932:(e,r)=>{var t;Object.defineProperty(r,"__esModule",{value:!0}),r.DiscussionNativeError=void 0,function(e){e[e.UNKNOWN_ERROR=0]="UNKNOWN_ERROR"}(t||(r.DiscussionNativeError=t={}))},25607:(e,r)=>{var t;Object.defineProperty(r,"__esModule",{value:!0}),r.MediaEvent=void 0,function(e){e[e.request=0]="request",e[e.ready=1]="ready",e[e.play=2]="play",e[e.percent25=3]="percent25",e[e.percent50=4]="percent50",e[e.percent75=5]="percent75",e[e.end=6]="end"}(t||(r.MediaEvent=t={}))},13948:(e,r)=>{var t;Object.defineProperty(r,"__esModule",{value:!0}),r.PurchaseScreenReason=void 0,function(e){e[e.hideAds=0]="hideAds",e[e.epic=1]="epic"}(t||(r.PurchaseScreenReason=t={}))},47441:(e,r)=>{var t;Object.defineProperty(r,"__esModule",{value:!0}),r.SignInScreenReason=void 0,function(e){e[e.accessDiscussion=0]="accessDiscussion",e[e.postComment=1]="postComment",e[e.recommendComment=2]="recommendComment",e[e.replyToComment=3]="replyToComment",e[e.reportComment=4]="reportComment"}(t||(r.SignInScreenReason=t={}))},31274:(e,r)=>{var t;Object.defineProperty(r,"__esModule",{value:!0}),r.SignInScreenReferrer=void 0,function(e){e[e.accessDiscussion=0]="accessDiscussion",e[e.postComment=1]="postComment",e[e.recommendComment=2]="recommendComment",e[e.replyToComment=3]="replyToComment",e[e.reportComment=4]="reportComment"}(t||(r.SignInScreenReferrer=t={}))},36343:function(e,r,t){var n=this&&this.__createBinding||(Object.create?function(e,r,t,n){void 0===n&&(n=t);var o=Object.getOwnPropertyDescriptor(r,t);o&&!("get"in o?!r.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return r[t]}}),Object.defineProperty(e,n,o)}:function(e,r,t,n){void 0===n&&(n=t),e[n]=r[t]}),o=this&&this.__setModuleDefault||(Object.create?function(e,r){Object.defineProperty(e,"default",{enumerable:!0,value:r})}:function(e,r){e.default=r}),i=this&&this.__exportStar||function(e,r){for(var t in e)"default"===t||Object.prototype.hasOwnProperty.call(r,t)||n(r,e,t)},a=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var r={};if(null!=e)for(var t in e)"default"!==t&&Object.prototype.hasOwnProperty.call(e,t)&&n(r,e,t);return o(r,e),r};Object.defineProperty(r,"__esModule",{value:!0}),r.Interaction=r.Newsletters=r.Navigation=r.Analytics=r.Discussion=r.Metrics=r.Videos=r.Gallery=r.User=r.Notifications=r.Tag=r.Acquisitions=r.Commercial=r.Environment=void 0,i(t(25607),r),i(t(13948),r),i(t(47441),r),i(t(31274),r),i(t(69932),r),i(t(42589),r),i(t(52590),r),i(t(10864),r),i(t(73154),r),i(t(69458),r),i(t(82438),r),i(t(29872),r),i(t(23131),r),i(t(25406),r),i(t(83886),r),i(t(43679),r),i(t(89027),r);var s=a(t(72910));r.Environment=s;var c=a(t(16873));r.Commercial=c;var d=a(t(83551));r.Acquisitions=d;var l=a(t(69139));r.Tag=l;var u=a(t(72031));r.Notifications=u;var v=a(t(30316));r.User=v;var p=a(t(46365));r.Gallery=p;var m=a(t(435));r.Videos=m;var h=a(t(53274));r.Metrics=h;var b=a(t(40771));r.Discussion=b;var f=a(t(555));r.Analytics=f;var g=a(t(81449));r.Navigation=g;var x=a(t(79907));r.Newsletters=x;var y=a(t(43019));r.Interaction=y},97584:e=>{e.exports=o,e.exports.isMobile=o,e.exports.default=o;const r=/(android|bb\d+|meego).+mobile|armv7l|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series[46]0|samsungbrowser|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i,t=/CrOS/,n=/android|ipad|playbook|silk/i;function o(e){e||(e={});let o=e.ua;if(o||"undefined"==typeof navigator||(o=navigator.userAgent),o&&o.headers&&"string"==typeof o.headers["user-agent"]&&(o=o.headers["user-agent"]),"string"!=typeof o)return!1;let i=r.test(o)&&!t.test(o)||!!e.tablet&&n.test(o);return!i&&e.tablet&&e.featureDetect&&navigator&&navigator.maxTouchPoints>1&&-1!==o.indexOf("Macintosh")&&-1!==o.indexOf("Safari")&&(i=!0),i}},7944:(e,r,t)=>{t.d(r,{k:()=>n});var n=function(e,r){return new Promise((function(t,n){var o,i=document.createElement("script");if(i.src=e,Array.from(document.scripts).some((function(e){var r=e.src;return i.src===r})))return t(void 0);Object.assign(i,r),i.onload=t,i.onerror=function(r,t,o,i,a){if(a)n(a);else if("string"!=typeof r)if(r instanceof Event){var s,c=null!==(s=r.target.getAttribute("src"))&&void 0!==s?s:"";n(new Error("Error loading script: src: ".concat(e," targetSrc: ").concat(c)))}else n(new Error("Error loading script: src: ".concat(e)));else n(new Error("Error loading script: src: ".concat(e," event: ").concat(r)))};var a=document.scripts[0];null==a||null===(o=a.parentNode)||void 0===o||o.insertBefore(i,a)}))}},51281:(e,r,t)=>{t.d(r,{e:()=>l});var n=t(50484),o=t(24017),i=t(84782),a=t(50641),s=i.f.wide,c=function(e){return 3*e},d=(0,o.css)("max-width:",s,"px;background-size:",3,"px ",3,"px;background-position:top center;background-image:radial-gradient(\n\t\tcurrentColor,\n\t\tcurrentColor ",1,"px,\n\t\ttransparent ",1,"px\n\t);"),l=function(e){var r=e.count,t=void 0===r?4:r,o=e.color,i=void 0===o?a.M.neutral[86]:o,s=e.cssOverrides;return(0,n.jsx)("div",{style:{height:"".concat(c(t),"px"),color:i},css:[d,s]})}},72657:(e,r,t)=>{t.d(r,{Q:()=>n});var n="\n\tposition: absolute;\n\toverflow: hidden; /* gets rid of horizontal scrollbar that appears in some circumstances */\n\twhite-space: nowrap; /* The white-space property forces the content to render on one line. */\n\twidth: 1px;  /* ensures content is announced by VoiceOver. */\n\theight: 1px; /* ensures content is announced by VoiceOver. */\n\tmargin: -1px; /* hide or clip content that does not fit into a 1-pixel visible area. */\n\tpadding: 0; /* hide or clip content that does not fit into a 1-pixel visible area. */\n\tborder: 0;\n\tclip: rect(1px, 1px, 1px, 1px); /* clip removes any visible trace of the element */\n\t-webkit-clip-path: inset(50%); /* clip removes any visible trace of the element */\n\tclip-path: inset(50%); /* clip removes any visible trace of the element */\n"},62753:(e,r,t)=>{t.d(r,{b:()=>n});var n={short:".2s cubic-bezier(.64, .57, .67, 1.53)",medium:".3s ease-in-out",long:".65s ease-in-out"}},74123:(e,r,t)=>{t.d(r,{T:()=>c});var n=t(50484),o=t(24017),i=t(72657),a=t(26633),s=function(e){var r=e.size,t=e.theme;return(0,n.jsx)("svg",{width:r?a.RK[r]:void 0,height:void 0,viewBox:"-3 -3 30 30",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0,children:(0,n.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10m-10.704 1.818h1.386l.659-8.636-.91-.91h-.885l-.91.91zm2.068 3.637c0-.75-.614-1.364-1.364-1.364s-1.364.614-1.364 1.364.614 1.363 1.364 1.363 1.364-.613 1.364-1.363",fill:null==t?void 0:t.fill})})},c=function(e){var r=e.size,t=e.theme,a=e.isAnnouncedByScreenReader,c=void 0!==a&&a;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s,{size:r,theme:t}),c?(0,n.jsx)("span",{css:(0,o.css)(i.Q,";"),children:"Warning"}):""]})}},73447:(e,r,t)=>{t.d(r,{X:()=>c});var n=t(50484),o=t(24017),i=t(72657),a=t(26633),s=function(e){var r=e.size,t=e.theme;return(0,n.jsx)("svg",{width:r?a.RK[r]:void 0,height:void 0,viewBox:"-3 -3 30 30",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0,children:(0,n.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M2 15.75h3.75L11 21h1V3h-1L5.75 8.25H2l-1 1v5.5zM21.3 12c0 2.7-.925 5.175-2.5 7.175l.55.525A9.9 9.9 0 0 0 23 12c0-3.125-1.425-5.9-3.65-7.725l-.55.525c1.575 2 2.5 4.475 2.5 7.2m-5.2 0q0 2.362-1.275 4.2l.65.65C16.75 15.575 17.5 13.9 17.5 12c0-1.925-.75-3.6-2.025-4.875l-.65.65C15.675 9 16.1 10.425 16.1 12",fill:null==t?void 0:t.fill})})},c=function(e){var r=e.size,t=e.theme,a=e.isAnnouncedByScreenReader,c=void 0!==a&&a;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s,{size:r,theme:t}),c?(0,n.jsx)("span",{css:(0,o.css)(i.Q,";"),children:"Audio"}):""]})}},19470:(e,r,t)=>{t.d(r,{u:()=>c});var n=t(50484),o=t(24017),i=t(72657),a=t(26633),s=function(e){var r=e.size,t=e.theme;return(0,n.jsx)("svg",{width:r?a.RK[r]:void 0,height:void 0,viewBox:"-3 -3 30 30",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0,children:(0,n.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M23 6.5v10.975l-1.475 1.55H2.5L1 17.55V6.5L2.5 5h4.975l2.5-2.5H14L16.5 5h5.025zm-11 9.75c2.5 0 4.525-2 4.525-4.475 0-2.5-2.025-4.5-4.525-4.5s-4.5 2-4.5 4.5c0 2.475 2 4.475 4.5 4.475",fill:null==t?void 0:t.fill})})},c=function(e){var r=e.size,t=e.theme,a=e.isAnnouncedByScreenReader,c=void 0!==a&&a;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s,{size:r,theme:t}),c?(0,n.jsx)("span",{css:(0,o.css)(i.Q,";"),children:"Camera"}):""]})}},6569:(e,r,t)=>{t.d(r,{F:()=>c});var n=t(50484),o=t(24017),i=t(72657),a=t(26633),s=function(e){var r=e.size,t=e.theme;return(0,n.jsx)("svg",{width:r?a.RK[r]:void 0,height:void 0,viewBox:"-3 -3 30 30",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0,children:(0,n.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12.015 14.042 20.707 22 22 20.709 14.06 12 22 3.291 20.707 2l-8.692 7.958L3.293 2.03 2 3.321 9.97 12 2 20.679l1.293 1.291z",fill:null==t?void 0:t.fill})})},c=function(e){var r=e.size,t=e.theme,a=e.isAnnouncedByScreenReader,c=void 0!==a&&a;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s,{size:r,theme:t}),c?(0,n.jsx)("span",{css:(0,o.css)(i.Q,";"),children:"Close"}):""]})}},71029:(e,r,t)=>{t.d(r,{v:()=>c});var n=t(50484),o=t(24017),i=t(72657),a=t(26633),s=function(e){var r=e.size,t=e.theme;return(0,n.jsx)("svg",{width:r?a.RK[r]:void 0,height:void 0,viewBox:"-3 -3 30 30",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0,children:(0,n.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M21.075 12.35v-.7L5.475 5.2l-.575.45v12.7l.575.4z",fill:null==t?void 0:t.fill})})},c=function(e){var r=e.size,t=e.theme,a=e.isAnnouncedByScreenReader,c=void 0!==a&&a;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s,{size:r,theme:t}),c?(0,n.jsx)("span",{css:(0,o.css)(i.Q,";"),children:"Stop"}):""]})}},32437:(e,r,t)=>{t.d(r,{D:()=>c});var n=t(50484),o=t(24017),i=t(72657),a=t(26633),s=function(e){var r=e.size,t=e.theme;return(0,n.jsx)("svg",{width:r?a.RK[r]:void 0,height:void 0,viewBox:"-3 -3 30 30",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0,children:(0,n.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"m10.8 13.2.425 9.8h1.525l.45-9.8 9.8-.45v-1.525l-9.8-.425-.45-9.8h-1.525l-.425 9.8-9.8.425v1.525z",fill:null==t?void 0:t.fill})})},c=function(e){var r=e.size,t=e.theme,a=e.isAnnouncedByScreenReader,c=void 0!==a&&a;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s,{size:r,theme:t}),c?(0,n.jsx)("span",{css:(0,o.css)(i.Q,";"),children:"Plus sign"}):""]})}},23894:(e,r,t)=>{t.d(r,{y:()=>c});var n=t(50484),o=t(24017),i=t(72657),a=t(26633),s=function(e){var r=e.size,t=e.theme;return(0,n.jsx)("svg",{width:r?a.RK[r]:void 0,height:void 0,viewBox:"-3 -3 30 30",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0,children:(0,n.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3 5 1 7v10l2 2h11.5V5zm18.5.5-5 5v3l5 5H23v-13z",fill:null==t?void 0:t.fill})})},c=function(e){var r=e.size,t=e.theme,a=e.isAnnouncedByScreenReader,c=void 0!==a&&a;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s,{size:r,theme:t}),c?(0,n.jsx)("span",{css:(0,o.css)(i.Q,";"),children:"Video"}):""]})}},48264:(e,r,t)=>{t.d(r,{b:()=>c});var n=t(50484),o=t(24017),i=t(67400),a=t(67238),s=t(72657),c=function(e){var r=e.hideLabel,t=e.iconSvg,c=e.isLoading,d=e.children,l=[d];return c?(r||l.push((0,n.jsx)("div",{className:"src-button-space"},"space")),l.push((0,i.cloneElement)((0,n.jsx)(a.y,{theme:{background:"transparent",color:"currentColor"}}),{key:"svg"}))):t&&(r||l.push((0,n.jsx)("div",{className:"src-button-space"},"space")),l.push((0,i.cloneElement)(t,{key:"svg"}))),r?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("span",{css:(0,o.css)(s.Q,";"),children:d}),l[1]]}):l}},44759:(e,r,t)=>{t.d(r,{V:()=>_});var n=t(24017),o=t(53578),i=t(24108),a=t(62753),s=t(62898),c=t(71653),d=t(26633),l=t(59648),u=(0,n.css)("display:inline-flex;justify-content:center;align-items:center;box-sizing:border-box;border:none;background:transparent;cursor:pointer;transition:",a.b.medium,";text-decoration:none;white-space:nowrap;vertical-align:middle;:disabled{cursor:not-allowed;}&:focus{",s.t,";}"),v={xsmall:16,small:20,default:24},p=function(e){return(0,n.css)("svg{width:",v[e],"px;}")},m=(0,n.css)(c.keT,";height:",d.uJ.ctaMedium,"px;min-height:",d.uJ.ctaMedium,"px;padding:0 ",l.x[5],"px;border-radius:",d.uJ.ctaMedium,"px;padding-bottom:2px;"),h=(0,n.css)(c.keT,";height:",d.uJ.ctaSmall,"px;min-height:",d.uJ.ctaSmall,"px;padding:0 ",l.x[4],"px;border-radius:",d.uJ.ctaSmall,"px;padding-bottom:2px;"),b=(0,n.css)(c.rS6,";height:",d.uJ.ctaXsmall,"px;min-height:",d.uJ.ctaXsmall,"px;padding:0 ",l.x[3],"px;border-radius:",d.uJ.ctaXsmall,"px;padding-bottom:1px;"),f=(0,n.css)("svg{flex:0 0 auto;display:block;fill:currentColor;position:relative;width:",d.VL.iconMedium,"px;height:auto;}.src-button-space{width:",l.x[3],"px;}"),g=(0,n.css)("svg{flex:0 0 auto;display:block;fill:currentColor;position:relative;width:",d.VL.iconSmall,"px;height:auto;}.src-button-space{width:",l.x[2],"px;}"),x=(0,n.css)("svg{flex:0 0 auto;display:block;fill:currentColor;position:relative;width:",d.VL.iconXsmall,"px;height:auto;}.src-button-space{width:",l.x[1],"px;}"),y=-l.x[1],w=(0,n.css)("flex-direction:row-reverse;svg{margin-left:",y,"px;}"),j=(0,n.css)("svg{margin-right:",y,"px;}"),M={name:"1hcx8jb",styles:"padding:0"},k=(0,n.css)(M,";width:",d.VL.ctaMedium,"px;"),S=(0,n.css)(M,";width:",d.VL.ctaSmall,"px;"),O=(0,n.css)(M,";width:",d.VL.ctaXsmall,"px;"),P=(0,n.css)("svg{transform:translate(0, 0);transition:",a.b.short,";}&:hover,&:focus{svg{transform:translate(",l.x[1]/2,"px, 0);}}"),R={primary:function(e){return(0,n.css)("background-color:",e.backgroundPrimary,";color:",e.textPrimary,";&:hover{background-color:",e.backgroundPrimaryHover,";}")},secondary:function(e){return(0,n.css)("background-color:",e.backgroundSecondary,";color:",e.textSecondary,";&:hover{background-color:",e.backgroundSecondaryHover,";}")},tertiary:function(e){return(0,n.css)("background-color:",e.backgroundTertiary,";color:",e.textTertiary,";border:1px solid ",e.borderTertiary,";&:hover{background-color:",e.backgroundTertiaryHover,";}")},subdued:function(e){return(0,n.css)("padding:0;background-color:transparent;color:",e.textSubdued,";text-decoration:underline;text-underline-offset:4px;&:hover{text-decoration-thickness:4px;}border-radius:0;")}},z={right:j,left:w},E={default:m,small:h,xsmall:b},C={default:f,small:g,xsmall:x},T={default:k,small:S,xsmall:O},A=function(e,r){return(0,o.z)(i.mB,r,e)},_=function(e){var r=e.priority,t=void 0===r?"primary":r,n=e.size,o=void 0===n?"default":n,i=e.icon,a=e.hideLabel,s=e.iconSide,c=void 0===s?"left":s,d=e.nudgeIcon,l=e.cssOverrides,v=e.isLoading,m=e.theme;return function(e){return[u,E[o],R[t](A(e.button,m)),(null!=i?i:v)?C[o]:"",(null!=i?i:v)&&!a?z[c]:"",d?P:"",a?T[o]:"",v?p(o):void 0,l]}}},24108:(e,r,t)=>{t.d(r,{Tu:()=>c,Wd:()=>a,fA:()=>o,fc:()=>i,mB:()=>s});var n=t(50641),o={button:{textPrimary:n.M.neutral[100],backgroundPrimary:n.M.brand[400],backgroundPrimaryHover:"#234B8A",textSecondary:n.M.brand[400],backgroundSecondary:n.M.brand[800],backgroundSecondaryHover:"#ACC9F7",textTertiary:n.M.brand[400],backgroundTertiaryHover:"#E5E5E5",borderTertiary:n.M.brand[400],textSubdued:n.M.brand[400]}},i={button:{textPrimary:n.M.brand[400],backgroundPrimary:n.M.neutral[100],backgroundPrimaryHover:"#E0E0E0",textSecondary:n.M.neutral[100],backgroundSecondary:n.M.brand[600],backgroundSecondaryHover:"#234B8A",textTertiary:n.M.neutral[100],backgroundTertiaryHover:n.M.brand[300],borderTertiary:n.M.neutral[100],textSubdued:n.M.neutral[100]}},a={button:{textPrimary:n.M.neutral[100],backgroundPrimary:n.M.neutral[7],backgroundPrimaryHover:"#454545",textSecondary:n.M.neutral[7],backgroundSecondary:n.M.brandAlt[200],backgroundSecondaryHover:"#F2AE00",textTertiary:n.M.neutral[0],backgroundTertiaryHover:"#FFD213",borderTertiary:n.M.neutral[7],textSubdued:n.M.neutral[7]}},s={textPrimary:n.M.neutral[100],backgroundPrimary:n.M.brand[400],backgroundPrimaryHover:"#234B8A",textSecondary:n.M.brand[400],backgroundSecondary:n.M.brand[800],backgroundSecondaryHover:"#ACC9F7",textTertiary:n.M.brand[400],backgroundTertiary:"transparent",backgroundTertiaryHover:"#E5E5E5",borderTertiary:n.M.brand[400],textSubdued:n.M.brand[400]},c={textPrimary:n.M.brand[400],backgroundPrimary:n.M.neutral[100],backgroundPrimaryHover:"#E0E0E0",textSecondary:n.M.neutral[100],backgroundSecondary:n.M.brand[600],backgroundSecondaryHover:"#234B8A",textTertiary:n.M.neutral[100],backgroundTertiary:"transparent",backgroundTertiaryHover:n.M.brand[300],borderTertiary:n.M.neutral[100],textSubdued:n.M.neutral[100]};n.M.neutral[100],n.M.neutral[7],n.M.neutral[7],n.M.brandAlt[200],n.M.neutral[0],n.M.neutral[7],n.M.neutral[7]},67238:(e,r,t)=>{t.d(r,{y:()=>l});var n=t(62335),o=t(50484),i=t(50641),a={background:i.M.brand[800],color:i.M.brand[400]},s=t(26633);function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function d(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){(0,n.A)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var l=function(e){var r=e.size,t=void 0===r?"medium":r,n=e.theme,i=d(d({},a),n),c="number"==typeof t?t:s.RK[t];return(0,o.jsx)("svg",{width:c,viewBox:"0 0 30 30",focusable:!1,"aria-hidden":!0,children:(0,o.jsxs)("g",{children:[(0,o.jsx)("animateTransform",{attributeName:"transform",attributeType:"XML",type:"rotate",from:"0 15 15",to:"360 15 15",dur:"2.5s",repeatCount:"indefinite"}),(0,o.jsx)("circle",{cx:15,cy:15,r:12.5,strokeWidth:5,stroke:i.background,fill:"transparent"}),(0,o.jsx)("circle",{cx:15,cy:15,r:12.5,strokeWidth:5,strokeDasharray:82,strokeDashoffset:82,stroke:i.color,fill:"transparent",children:(0,o.jsx)("animate",{attributeName:"stroke-dashoffset",dur:"3.5s",from:164,to:0,repeatCount:"indefinite"})})]})})}},73499:(e,r,t)=>{t.d(r,{W:()=>v});var n=t(62335),o=t(5926),i=t(50484),a=t(74123),s=t(10349),c=t(23822),d=["children","size","cssOverrides","theme"];function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function u(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach((function(r){(0,n.A)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var v=function(e){var r=e.children,t=e.size,n=void 0===t?"medium":t,l=e.cssOverrides,v=e.theme,p=(0,o.A)(e,d);return(0,i.jsxs)("span",u(u({css:function(e){return[(0,c.u)((0,s.y)(e.userFeedback,v),n),l]},role:"alert"},p),{},{children:[(0,i.jsx)(a.T,{}),r]}))}},10349:(e,r,t)=>{t.d(r,{y:()=>i});var n=t(53578),o=t(97963),i=function(e,r){return(0,n.z)(o.AY,r,e)}},23822:(e,r,t)=>{t.d(r,{R:()=>d,u:()=>c});var n=t(24017),o=t(26633),i=t(71653),a={name:"1ybggyf",styles:"display:flex;align-items:flex-start;svg{fill:currentColor;flex:none;transform:translate(-4px, -4px);}"},s={small:(0,n.css)(i.WuG,";svg{width:",o.VY.iconSmall,";height:",o.SI.iconSmall,";}"),medium:(0,n.css)(i.NA0,";svg{width:",o.VY.iconMedium,";height:",o.SI.iconMedium,";}")},c=function(e,r){return(0,n.css)(a,";",s[r],";color:",e.textError,";")},d=function(e,r){return(0,n.css)(a,";",s[r],";color:",e.textSuccess,";")}},97963:(e,r,t)=>{t.d(r,{AY:()=>a,XS:()=>o,b8:()=>i});var n=t(50641),o={userFeedback:{textSuccess:n.M.success[400],textError:n.M.error[400]}},i={userFeedback:{textSuccess:n.M.success[500],textError:n.M.error[500]}},a={textSuccess:n.M.success[400],textError:n.M.error[400]};n.M.success[500],n.M.error[500]}}]);
//# sourceMappingURL=ShowMore-importable.client.web.legacy.1b48a2e32f9cbdd26e0d.js.map