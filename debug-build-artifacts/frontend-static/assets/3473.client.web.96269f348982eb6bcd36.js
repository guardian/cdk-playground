"use strict";(self.webpackChunk_guardian_dotcom_rendering=self.webpackChunk_guardian_dotcom_rendering||[]).push([[3473],{71123:(t,n,e)=>{e.d(n,{g:()=>M});var r=e(50484),o=e(24017),a=e(7351),i=e(99923),l=e(96378),s=e(67400),c=e(33151),d=e(53694),u=e(27123),h=e(45717),f=e(78580);function g(){const t=(n=["\n\tdisplay: none;\n\t"," {\n\t\tdisplay: flex;\n\t\tgap: ","px;\n\t\tmargin-left: auto;\n\t}\n"],e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}})));var n,e;return g=function(){return t},t}const p={borderTertiary:(0,d.M)("--carousel-chevron-border"),textTertiary:(0,d.M)("--carousel-chevron"),backgroundTertiaryHover:(0,d.M)("--carousel-chevron-hover")},v={borderTertiary:(0,d.M)("--carousel-chevron-border-disabled"),textTertiary:(0,d.M)("--carousel-chevron-disabled"),backgroundTertiaryHover:"transparent"},m=(0,o.css)(g(),i.HT.tablet,l.x[1]),x=t=>{let{previousButtonEnabled:n,nextButtonEnabled:e,onClickPreviousButton:o,onClickNextButton:a,dataLinkNameNextButton:i,dataLinkNamePreviousButton:l}=t;return(0,r.jsxs)("div",{"aria-controls":"carousel","aria-label":"carousel arrows",css:m,children:[(0,r.jsx)(u.$,{hideLabel:!0,iconSide:"left",icon:(0,r.jsx)(h.P,{}),onClick:o,priority:"tertiary",theme:n?p:v,size:"small",disabled:!n,"aria-label":"previous",value:"previous","data-link-name":l}),(0,r.jsx)(u.$,{hideLabel:!0,iconSide:"left",icon:(0,r.jsx)(f.s,{}),onClick:a,priority:"tertiary",theme:e?p:v,size:"small",disabled:!e,"aria-label":"next",value:"next","data-link-name":i})]})};function b(t,n){return n||(n=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(n)}}))}function w(){const t=b(["\n\tposition: relative;\n\tmargin-left: -","px;\n\tmargin-right: -","px;\n\t"," {\n\t\tmargin-left: -","px;\n\t\tmargin-right: -","px;\n\t}\n\t"," {\n\t\tmargin-left: ","px;\n\t\tmargin-right: ","px;\n\t}\n\t"," {\n\t\tmargin-left: 0;\n\t}\n"]);return w=function(){return t},t}function y(){const t=b(["\n\tdisplay: flex;\n\tflex-direction: column-reverse;\n\t"," {\n\t\tgap: ","px;\n\t}\n\n\t"," {\n\t\tflex-direction: row;\n\t\tgap: ","px;\n\t}\n\n\t/**\n\t * From tablet, pull container up so navigation buttons align with title.\n\t * The margin is calculated from the front section title font size and line\n\t * height, and the default container spacing.\n\t *\n\t * From wide, the navigation buttons are pulled out of the main content area\n\t * into the right-hand column.\n\t *\n\t * Between leftCol and wide the top of the fixed dividing line is pushed\n\t * down so it starts below the navigation buttons and gap, and aligns with\n\t * the top of the carousel.\n\t */\n\t"," {\n\t\t[data-container-level='Primary'] & {\n\t\t\tmargin-top: calc(\n\t\t\t\t-"," * "," -\n\t\t\t\t\t","px\n\t\t\t);\n\t\t}\n\t\t[data-container-level='Secondary'] & {\n\t\t\tmargin-top: calc(\n\t\t\t\t-"," * "," -\n\t\t\t\t\t","px\n\t\t\t);\n\t\t}\n\t}\n\t"," {\n\t\tmargin-right: -","px;\n\t}\n"]);return y=function(){return t},t}function j(){const t=b(["\n\tdisplay: grid;\n\twidth: 100%;\n\tgrid-auto-columns: 1fr;\n\tgrid-auto-flow: column;\n\tgap: 20px;\n\toverflow-x: auto;\n\toverflow-y: hidden;\n\tscroll-snap-type: x mandatory;\n\tscroll-behavior: smooth;\n\toverscroll-behavior: contain auto;\n\t/**\n\t * Hide scrollbars\n\t * See: https://stackoverflow.com/a/38994837\n\t */\n\t::-webkit-scrollbar {\n\t\tdisplay: none; /* Safari and Chrome */\n\t}\n\tscrollbar-width: none; /* Firefox */\n\n\tpadding-left: ","px;\n\tpadding-right: ","px;\n\tscroll-padding-left: ","px;\n\t"," {\n\t\tpadding-left: ","px;\n\t\tpadding-right: ","px;\n\t\tscroll-padding-left: ","px;\n\t}\n\t"," {\n\t\tpadding-left: 0;\n\t\tpadding-right: 0;\n\t\tscroll-padding-left: 0;\n\t}\n\t"," {\n\t\tpadding-left: ","px;\n\t\tscroll-padding-left: ","px;\n\t}\n"]);return j=function(){return t},t}function z(){const t=b(["\n\tdisplay: flex;\n\tscroll-snap-align: start;\n\tgrid-area: span 1;\n\tposition: relative;\n\t:not(:first-child)::before {\n\t\tcontent: '';\n\t\tposition: absolute;\n\t\ttop: 0;\n\t\tbottom: 0;\n\t\tleft: -10px;\n\t\twidth: 1px;\n\t\tbackground-color: ",";\n\t\ttransform: translateX(-50%);\n\t}\n"]);return z=function(){return t},t}function L(){const t=b(["\n\t\t/**\n\t\t * On mobile a 32px slice of the next card is shown to indicate there\n\t\t * are more cards that can be scrolled to. Extra padding is also added\n\t\t * to the left and right to align cards with the page grid as the\n\t\t * carousel extends into the outer margins on mobile.\n\t\t *\n\t\t * These values are divided by the number of visible cards and\n\t\t * subtracted from their width so they are shown at the correct size.\n\t\t */\n\t\tgrid-template-columns: repeat(\n\t\t\t",",\n\t\t\tcalc(\n\t\t\t\t(100% / ",") - ","px +\n\t\t\t\t\t","px\n\t\t\t)\n\t\t);\n\t\t"," {\n\t\t\tgrid-template-columns: repeat(\n\t\t\t\t",",\n\t\t\t\tcalc(\n\t\t\t\t\t(100% / ",") -\n\t\t\t\t\t\t","px +\n\t\t\t\t\t\t","px\n\t\t\t\t)\n\t\t\t);\n\t\t}\n\t\t"," {\n\t\t\tgrid-template-columns: repeat(\n\t\t\t\t",",\n\t\t\t\tcalc(","% - ","px)\n\t\t\t);\n\t\t}\n\t"]);return L=function(){return t},t}const T=a.fe4,k=a.BU7,B=20,H=10,S=(0,o.css)(w(),H,H,i.HT.mobileLandscape,B,B,i.HT.tablet,10,10,i.HT.leftCol),C=(0,o.css)(y(),i.HT.tablet,l.x[2],i.HT.wide,l.x[1],i.Tq.tablet.and.leftCol,T.fontSize,T.lineHeight,l.x[3],k.fontSize,k.lineHeight,l.x[3],i.HT.wide,70),O=(0,o.css)(j(),H,H,H,i.HT.mobileLandscape,B,B,B,i.HT.tablet,i.HT.leftCol,10,10),D=(0,o.css)(z(),(0,d.M)("--card-border-top")),P=(t,n,e)=>{const r=l.x[8]/n+20,a=20*(e-1)/e;return(0,o.css)(L(),t,n,r,H/n,i.HT.mobileLandscape,t,n,r,B/n,i.HT.tablet,t,100/e,a)},M=t=>{let{children:n,carouselLength:e,visibleCardsOnMobile:o,visibleCardsOnTablet:a}=t;const i=(0,s.useRef)(null),[l,d]=(0,s.useState)(!1),[u,h]=(0,s.useState)(!0),f=e>a,g=t=>{var n,e;if(!i.current)return;const r=null!==(e=null===(n=i.current.querySelector("li"))||void 0===n?void 0:n.offsetWidth)&&void 0!==e?e:0,o="left"===t?-r:r;i.current.scrollBy({left:o,behavior:"smooth"})},p=()=>{var t;const n=i.current;if(!n)return;const e=n.scrollLeft,r=n.scrollWidth-n.clientWidth;var o;const a=null!==(o=null===(t=n.querySelector("li"))||void 0===t?void 0:t.offsetWidth)&&void 0!==o?o:0;d(e>a/2),h(e<r-a/2)},v=t=>{let n=!1;return function(){n||(t(),n=!0,setTimeout((()=>n=!1),200))}};return(0,s.useEffect)((()=>{const t=i.current;if(t)return t.addEventListener("scroll",v(p)),()=>{t.removeEventListener("scroll",v(p))}}),[]),(0,r.jsxs)("div",{css:[S,f&&C],children:[(0,r.jsx)("ol",{ref:i,css:[O,P(e,o,a)],"data-heatphan-type":"carousel",children:n}),f&&(0,r.jsx)(x,{previousButtonEnabled:l,nextButtonEnabled:u,onClickPreviousButton:()=>g("left"),onClickNextButton:()=>g("right"),dataLinkNamePreviousButton:(0,c.K)("carousel","previous-button"),dataLinkNameNextButton:(0,c.K)("carousel","next-button")})]})};M.Item=t=>{let{children:n}=t;return(0,r.jsx)("li",{css:D,children:n})}},33151:(t,n,e)=>{e.d(n,{K:()=>r});const r=function(){for(var t=arguments.length,n=new Array(t),e=0;e<t;e++)n[e]=arguments[e];return n.join(" : ")}},73785:(t,n,e)=>{e.d(n,{f:()=>a});const r=36e5,o=864e5,a=(t,n)=>{const e=t;var a;const i=null!==(a=null==n?void 0:n.now)&&void 0!==a?a:Date.now();var l;const s=null!==(l=null==n?void 0:n.verbose)&&void 0!==l&&l,{length:c,unit:d}=(t=>{let{then:n,now:e}=t;const a=e-n;return a<6e4?{length:a/1e3,unit:"second"}:a<r?{length:a/6e4,unit:"minute"}:a<o?{length:a/r,unit:"hour"}:{length:a/o,unit:"day"}})({then:e,now:i}),u=Math.round(c);if(u<0)return!1;switch(d){case"second":return u>55?s?"1 minute ago":"1m ago":u<15?"now":"".concat(u,s?" seconds ago":"s ago");case"minute":return u>55?s?"1 hour ago":"1h ago":s?1==u?"1 minute ago":"".concat(u," minutes ago"):"".concat(u,"m ago");case"hour":return s?1==u?"1 hour ago":"".concat(u," hours ago"):"".concat(u,"h ago");case"day":var h;return c<(null!==(h=null==n?void 0:n.daysUntilAbsolute)&&void 0!==h?h:7)?s?((t,n)=>{const e=new Date(n),r=new Date(n);return r.setDate(e.getDate()-1),new Date(t).toDateString()===r.toDateString()})(e,i)?"Yesterday ".concat((f=new Date(e),"".concat(f.getHours(),".").concat(f.getMinutes().toString().padStart(2,"0")))):1==u?"1 day ago":"".concat(u," days ago"):"".concat(u,"d ago"):new Date(e).toLocaleString("en-GB",{day:"numeric",month:s?"long":"short",year:"numeric"})}var f}},7631:(t,n,e)=>{e.d(n,{J:()=>c});var r=e(50484),o=e(24017),a=e(70991),i=e(78055);function l(){const t=(n=["\n\t\t\t\t\t","\n\t\t\t\t"],e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}})));var n,e;return l=function(){return t},t}const s=t=>{let{size:n,theme:e}=t;return(0,r.jsx)("svg",{width:n?i.RK[n]:void 0,height:void 0,viewBox:"-3 -3 30 30",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0,children:(0,r.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"m19.151 21.336-2.418-7.386L23 9.348l-.312-.989h-7.75L12.547 1h-1.092L9.087 8.36H1.312L1 9.347l6.267 4.602-2.366 7.386.806.624L12 17.357l6.293 4.603z",fill:null==e?void 0:e.fill})})},c=t=>{let{size:n,theme:e,isAnnouncedByScreenReader:i=!1}=t;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s,{size:n,theme:e}),i?(0,r.jsx)("span",{css:(0,o.css)(l(),a.Q),children:"Star"}):""]})}},91593:(t,n,e)=>{e.d(n,{z:()=>c});var r=e(50484),o=e(24017),a=e(70991),i=e(78055);function l(){const t=(n=["\n\t\t\t\t\t","\n\t\t\t\t"],e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}})));var n,e;return l=function(){return t},t}const s=t=>{let{size:n,theme:e}=t;return(0,r.jsx)("svg",{width:n?i.RK[n]:void 0,height:void 0,viewBox:"-3 -3 30 30",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0,children:(0,r.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"m14.381 13.196 3.863-2.837h-4.758l-1.479-4.547-1.462 4.547H5.756l3.855 2.831-1.438 4.488L12 14.88l3.856 2.82zm4.77 8.14-.858.624L12 17.357 5.707 21.96l-.806-.624 2.366-7.386L1 9.348l.312-.989h7.775L11.454 1h1.092l2.393 7.36h7.749l.312.988-6.267 4.602z",fill:null==e?void 0:e.fill})})},c=t=>{let{size:n,theme:e,isAnnouncedByScreenReader:i=!1}=t;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s,{size:n,theme:e}),i?(0,r.jsx)("span",{css:(0,o.css)(l(),a.Q),children:"Star outline"}):""]})}}}]);
//# sourceMappingURL=3473.client.web.96269f348982eb6bcd36.js.map