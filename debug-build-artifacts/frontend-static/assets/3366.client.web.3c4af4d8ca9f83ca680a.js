"use strict";(self.webpackChunk_guardian_dotcom_rendering=self.webpackChunk_guardian_dotcom_rendering||[]).push([[3366],{73785:(e,t,n)=>{n.d(t,{f:()=>s});const r=36e5,i=864e5,s=(e,t)=>{const n=e;var s;const l=null!==(s=null==t?void 0:t.now)&&void 0!==s?s:Date.now();var o;const c=null!==(o=null==t?void 0:t.verbose)&&void 0!==o&&o,{length:d,unit:a}=(e=>{let{then:t,now:n}=e;const s=n-t;return s<6e4?{length:s/1e3,unit:"second"}:s<r?{length:s/6e4,unit:"minute"}:s<i?{length:s/r,unit:"hour"}:{length:s/i,unit:"day"}})({then:n,now:l}),u=Math.round(d);if(u<0)return!1;switch(a){case"second":return u>55?c?"1 minute ago":"1m ago":u<15?"now":"".concat(u,c?" seconds ago":"s ago");case"minute":return u>55?c?"1 hour ago":"1h ago":c?1==u?"1 minute ago":"".concat(u," minutes ago"):"".concat(u,"m ago");case"hour":return c?1==u?"1 hour ago":"".concat(u," hours ago"):"".concat(u,"h ago");case"day":var h;return d<(null!==(h=null==t?void 0:t.daysUntilAbsolute)&&void 0!==h?h:7)?c?((e,t)=>{const n=new Date(t),r=new Date(t);return r.setDate(n.getDate()-1),new Date(e).toDateString()===r.toDateString()})(n,l)?"Yesterday ".concat((v=new Date(n),"".concat(v.getHours(),".").concat(v.getMinutes().toString().padStart(2,"0")))):1==u?"1 day ago":"".concat(u," days ago"):"".concat(u,"d ago"):new Date(n).toLocaleString("en-GB",{day:"numeric",month:c?"long":"short",year:"numeric"})}var v}},39603:(e,t,n)=>{n.d(t,{e:()=>u});var r=n(50484),i=n(24017),s=n(92280),l=n(77907);function o(){const e=(t=["\n\tmax-width: ","px;\n\tbackground-size: ","px ","px;\n\tbackground-position: top center;\n\tbackground-image: radial-gradient(\n\t\tcurrentColor,\n\t\tcurrentColor ","px,\n\t\ttransparent ","px\n\t);\n"],n||(n=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(n)}})));var t,n;return o=function(){return e},e}const c=s.f.wide,d=e=>3*e,a=(0,i.css)(o(),c,3,3,1,1),u=e=>{let{count:t=4,color:n=l.M.neutral[86],cssOverrides:i}=e;return(0,r.jsx)("div",{style:{height:"".concat(d(t),"px"),color:n},css:[a,i]})}},92421:(e,t,n)=>{n.d(t,{X:()=>d});var r=n(50484),i=n(24017),s=n(70991),l=n(78055);function o(){const e=(t=["\n\t\t\t\t\t","\n\t\t\t\t"],n||(n=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(n)}})));var t,n;return o=function(){return e},e}const c=e=>{let{size:t,theme:n}=e;return(0,r.jsx)("svg",{width:t?l.RK[t]:void 0,height:void 0,viewBox:"-3 -3 30 30",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0,children:(0,r.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M2 15.75h3.75L11 21h1V3h-1L5.75 8.25H2l-1 1v5.5zM21.3 12c0 2.7-.925 5.175-2.5 7.175l.55.525A9.9 9.9 0 0 0 23 12c0-3.125-1.425-5.9-3.65-7.725l-.55.525c1.575 2 2.5 4.475 2.5 7.2m-5.2 0q0 2.362-1.275 4.2l.65.65C16.75 15.575 17.5 13.9 17.5 12c0-1.925-.75-3.6-2.025-4.875l-.65.65C15.675 9 16.1 10.425 16.1 12",fill:null==n?void 0:n.fill})})},d=e=>{let{size:t,theme:n,isAnnouncedByScreenReader:l=!1}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(c,{size:t,theme:n}),l?(0,r.jsx)("span",{css:(0,i.css)(o(),s.Q),children:"Audio"}):""]})}},92980:(e,t,n)=>{n.d(t,{u:()=>d});var r=n(50484),i=n(24017),s=n(70991),l=n(78055);function o(){const e=(t=["\n\t\t\t\t\t","\n\t\t\t\t"],n||(n=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(n)}})));var t,n;return o=function(){return e},e}const c=e=>{let{size:t,theme:n}=e;return(0,r.jsx)("svg",{width:t?l.RK[t]:void 0,height:void 0,viewBox:"-3 -3 30 30",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0,children:(0,r.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M23 6.5v10.975l-1.475 1.55H2.5L1 17.55V6.5L2.5 5h4.975l2.5-2.5H14L16.5 5h5.025zm-11 9.75c2.5 0 4.525-2 4.525-4.475 0-2.5-2.025-4.5-4.525-4.5s-4.5 2-4.5 4.5c0 2.475 2 4.475 4.5 4.475",fill:null==n?void 0:n.fill})})},d=e=>{let{size:t,theme:n,isAnnouncedByScreenReader:l=!1}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(c,{size:t,theme:n}),l?(0,r.jsx)("span",{css:(0,i.css)(o(),s.Q),children:"Camera"}):""]})}},34580:(e,t,n)=>{n.d(t,{o:()=>d});var r=n(50484),i=n(24017),s=n(70991),l=n(78055);function o(){const e=(t=["\n\t\t\t\t\t","\n\t\t\t\t"],n||(n=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(n)}})));var t,n;return o=function(){return e},e}const c=e=>{let{size:t,theme:n}=e;return(0,r.jsx)("svg",{width:t?l.RK[t]:void 0,height:void 0,viewBox:"-3 -3 30 30",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0,children:(0,r.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"m1 7.224 10.498 10.498h1.004L23 7.224l-.98-.954L12 14.708 1.98 6.27z",fill:null==n?void 0:n.fill})})},d=e=>{let{size:t,theme:n,isAnnouncedByScreenReader:l=!1}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(c,{size:t,theme:n}),l?(0,r.jsx)("span",{css:(0,i.css)(o(),s.Q),children:"Expand to show more"}):""]})}},21345:(e,t,n)=>{n.d(t,{l:()=>d});var r=n(50484),i=n(24017),s=n(70991),l=n(78055);function o(){const e=(t=["\n\t\t\t\t\t","\n\t\t\t\t"],n||(n=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(n)}})));var t,n;return o=function(){return e},e}const c=e=>{let{size:t,theme:n}=e;return(0,r.jsx)("svg",{width:t?l.RK[t]:void 0,height:void 0,viewBox:"-3 -3 30 30",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0,children:(0,r.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M23 16.768 12.502 6.27h-1.004L1 16.768l.98.954L12 9.284l10.02 8.438z",fill:null==n?void 0:n.fill})})},d=e=>{let{size:t,theme:n,isAnnouncedByScreenReader:l=!1}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(c,{size:t,theme:n}),l?(0,r.jsx)("span",{css:(0,i.css)(o(),s.Q),children:"Collapse to show less"}):""]})}},1255:(e,t,n)=>{n.d(t,{D:()=>d});var r=n(50484),i=n(24017),s=n(70991),l=n(78055);function o(){const e=(t=["\n\t\t\t\t\t","\n\t\t\t\t"],n||(n=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(n)}})));var t,n;return o=function(){return e},e}const c=e=>{let{size:t,theme:n}=e;return(0,r.jsx)("svg",{width:t?l.RK[t]:void 0,height:void 0,viewBox:"-3 -3 30 30",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0,children:(0,r.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"m10.8 13.2.425 9.8h1.525l.45-9.8 9.8-.45v-1.525l-9.8-.425-.45-9.8h-1.525l-.425 9.8-9.8.425v1.525z",fill:null==n?void 0:n.fill})})},d=e=>{let{size:t,theme:n,isAnnouncedByScreenReader:l=!1}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(c,{size:t,theme:n}),l?(0,r.jsx)("span",{css:(0,i.css)(o(),s.Q),children:"Plus sign"}):""]})}},7631:(e,t,n)=>{n.d(t,{J:()=>d});var r=n(50484),i=n(24017),s=n(70991),l=n(78055);function o(){const e=(t=["\n\t\t\t\t\t","\n\t\t\t\t"],n||(n=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(n)}})));var t,n;return o=function(){return e},e}const c=e=>{let{size:t,theme:n}=e;return(0,r.jsx)("svg",{width:t?l.RK[t]:void 0,height:void 0,viewBox:"-3 -3 30 30",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0,children:(0,r.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"m19.151 21.336-2.418-7.386L23 9.348l-.312-.989h-7.75L12.547 1h-1.092L9.087 8.36H1.312L1 9.347l6.267 4.602-2.366 7.386.806.624L12 17.357l6.293 4.603z",fill:null==n?void 0:n.fill})})},d=e=>{let{size:t,theme:n,isAnnouncedByScreenReader:l=!1}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(c,{size:t,theme:n}),l?(0,r.jsx)("span",{css:(0,i.css)(o(),s.Q),children:"Star"}):""]})}},91593:(e,t,n)=>{n.d(t,{z:()=>d});var r=n(50484),i=n(24017),s=n(70991),l=n(78055);function o(){const e=(t=["\n\t\t\t\t\t","\n\t\t\t\t"],n||(n=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(n)}})));var t,n;return o=function(){return e},e}const c=e=>{let{size:t,theme:n}=e;return(0,r.jsx)("svg",{width:t?l.RK[t]:void 0,height:void 0,viewBox:"-3 -3 30 30",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0,children:(0,r.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"m14.381 13.196 3.863-2.837h-4.758l-1.479-4.547-1.462 4.547H5.756l3.855 2.831-1.438 4.488L12 14.88l3.856 2.82zm4.77 8.14-.858.624L12 17.357 5.707 21.96l-.806-.624 2.366-7.386L1 9.348l.312-.989h7.775L11.454 1h1.092l2.393 7.36h7.749l.312.988-6.267 4.602z",fill:null==n?void 0:n.fill})})},d=e=>{let{size:t,theme:n,isAnnouncedByScreenReader:l=!1}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(c,{size:t,theme:n}),l?(0,r.jsx)("span",{css:(0,i.css)(o(),s.Q),children:"Star outline"}):""]})}},48504:(e,t,n)=>{n.d(t,{y:()=>d});var r=n(50484),i=n(24017),s=n(70991),l=n(78055);function o(){const e=(t=["\n\t\t\t\t\t","\n\t\t\t\t"],n||(n=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(n)}})));var t,n;return o=function(){return e},e}const c=e=>{let{size:t,theme:n}=e;return(0,r.jsx)("svg",{width:t?l.RK[t]:void 0,height:void 0,viewBox:"-3 -3 30 30",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0,children:(0,r.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3 5 1 7v10l2 2h11.5V5zm18.5.5-5 5v3l5 5H23v-13z",fill:null==n?void 0:n.fill})})},d=e=>{let{size:t,theme:n,isAnnouncedByScreenReader:l=!1}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(c,{size:t,theme:n}),l?(0,r.jsx)("span",{css:(0,i.css)(o(),s.Q),children:"Video"}):""]})}}}]);
//# sourceMappingURL=3366.client.web.3c4af4d8ca9f83ca680a.js.map