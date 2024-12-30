"use strict";(self.webpackChunk_guardian_dotcom_rendering=self.webpackChunk_guardian_dotcom_rendering||[]).push([[4454],{94834:(e,t,n)=>{n.r(t),n.d(t,{TableOfContents:()=>A});var r=n(50484),i=n(24017),s=n(96378),o=n(7351),a=n(34580),c=n(21345),l=n(67400),d=n(16632),u=n(82871),p=n(53694);function h(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function f(){const e=h(["\n\tcolor: ",";\n\ttext-decoration: none;\n\tdisplay: block;\n\twidth: 100%;\n"]);return f=function(){return e},e}function g(){const e=h(["\n\tpadding-bottom: ","px;\n\tpadding-top: ","px;\n"]);return g=function(){return e},e}function b(){const e=h(["\n\t\t",";\n\t\tbox-sizing: border-box;\n\t\tborder-top: 1px solid ",";\n\t\tdisplay: flex;\n\t\tposition: relative;\n\n\t\t&::before {\n\t\t\tcontent: '';\n\t\t\tposition: absolute;\n\t\t\tbackground-color: ",";\n\t\t\twidth: 100%;\n\t\t\theight: 0;\n\t\t\ttransition: height 0.2s ease;\n\t\t\ttop: 0;\n\t\t\tleft: 0;\n\t\t}\n\n\t\t&:hover::before {\n\t\t\theight: ","px;\n\t\t}\n\t"]);return b=function(){return e},e}function m(){const e=h(["\n\tmargin: ","px 0 ","px 0;\n\t&:not([open]) .is-open,\n\t&[open] .is-closed {\n\t\tdisplay: none;\n\t}\n\t&:not([open]) {\n\t\tborder-bottom: 1px solid ",";\n\t}\n\t/* removes toggle triangle from webkit browsers such as Safari */\n\tsummary::-webkit-details-marker {\n\t\tdisplay: none;\n\t}\n"]);return m=function(){return e},e}function x(){const e=h(["\n\tposition: sticky;\n\ttop: 0;\n\tbackground: ",";\n\tz-index: ",";\n\tsummary {\n\t\tz-index: 1;\n\t\tbackground: ",";\n\t}\n\tul {\n\t\tmax-height: 90vh;\n\t\toverflow-y: auto;\n\t}\n"]);return x=function(){return e},e}function v(){const e=h(["\n\tdisplay: flex;\n\tjustify-content: space-between;\n\tcursor: pointer;\n\tposition: relative;\n\tlist-style: none;\n\n\tpadding: ","px 0;\n\tborder-top: 1px solid ",";\n\n\t&:hover {\n\t\ttext-decoration: underline;\n\t}\n\n\tpath {\n\t\tfill: ",";\n\t}\n"]);return v=function(){return e},e}function w(){const e=h(["\n\t","\n\tcolor:",";\n"]);return w=function(){return e},e}function y(){const e=h(["\n\tmargin-right: 18px;\n"]);return y=function(){return e},e}function D(){const e=h(["\n\tposition: absolute;\n\tleft: ","px;\n\tborder-left: 1px solid ",";\n\theight: 22px;\n\ttop: 0;\n\ttransition: 0.3s all ease;\n"]);return D=function(){return e},e}const j=(0,i.css)(f(),(0,p.M)("--table-of-contents")),k=(0,i.css)(g(),s.x[4],s.x[1]),S=e=>(0,i.css)(b(),e.display===d.Ns.Immersive?o.Nt_:o.ccz,(0,p.M)("--table-of-contents-border"),(0,p.M)("--table-of-contents"),s.x[1]),z=(0,i.css)(m(),s.x[4],s.x[6],(0,p.M)("--table-of-contents-border")),O=(0,i.css)(x(),(0,p.M)("--article-background"),(0,u.f)("tableOfContents"),(0,p.M)("--article-background")),R=(0,i.css)(v(),s.x[1],(0,p.M)("--table-of-contents-border"),(0,p.M)("--table-of-contents")),L=(0,i.css)(w(),o.rS6,(0,p.M)("--table-of-contents")),C=(0,i.css)(y()),P=(0,i.css)(D(),s.x[4],(0,p.M)("--table-of-contents-border")),A=e=>{let{tableOfContents:t,format:n}=e;const[i,s]=(0,l.useState)(t.length<5);return(0,r.jsxs)("details",{open:i,css:[z,t.length>5?O:void 0],"data-component":"table-of-contents",children:[(0,r.jsxs)("summary",{onClick:e=>{e.preventDefault(),s((e=>!e))},onKeyDown:e=>{"Enter"!==e.key&&" "!==e.key||(e.preventDefault(),s((e=>!e)))},"data-link-name":i?"table-of-contents-close":"table-of-contents-open",css:R,tabIndex:0,role:"button",children:[(0,r.jsx)("h2",{css:L,children:"Jump to"}),(0,r.jsx)("span",{className:"is-closed",children:(0,r.jsx)(a.o,{size:"xsmall"})}),(0,r.jsx)("span",{className:"is-open",children:(0,r.jsx)(c.l,{size:"xsmall"})})]}),(0,r.jsx)("ul",{children:t.map(((e,t)=>(0,r.jsxs)("li",{css:S(n),"data-link-name":"table-of-contents-item-".concat(t,"-").concat(e.id),children:[n.display===d.Ns.NumberedList&&(0,r.jsxs)("div",{css:k,children:[(0,r.jsx)("span",{css:C,children:t+1}),(0,r.jsx)("div",{css:P})]}),(0,r.jsx)("a",{href:"#".concat(e.id),css:[j,k],onClick:()=>{s((e=>!e))},children:e.title})]},e.id)))})]})}},16632:(e,t,n)=>{n.d(t,{A$:()=>o,B0:()=>s,M2:()=>d,Ns:()=>i,vw:()=>r});var r=function(e){return e[e.Standard=0]="Standard",e[e.Picture=1]="Picture",e[e.Gallery=2]="Gallery",e[e.Audio=3]="Audio",e[e.Video=4]="Video",e[e.Review=5]="Review",e[e.Analysis=6]="Analysis",e[e.Explainer=7]="Explainer",e[e.Comment=8]="Comment",e[e.Letter=9]="Letter",e[e.Feature=10]="Feature",e[e.LiveBlog=11]="LiveBlog",e[e.DeadBlog=12]="DeadBlog",e[e.Recipe=13]="Recipe",e[e.MatchReport=14]="MatchReport",e[e.Interview=15]="Interview",e[e.Editorial=16]="Editorial",e[e.Quiz=17]="Quiz",e[e.Interactive=18]="Interactive",e[e.PhotoEssay=19]="PhotoEssay",e[e.Obituary=20]="Obituary",e[e.Correction=21]="Correction",e[e.FullPageInteractive=22]="FullPageInteractive",e[e.NewsletterSignup=23]="NewsletterSignup",e[e.Timeline=24]="Timeline",e[e.Profile=25]="Profile",e}({}),i=function(e){return e[e.Standard=0]="Standard",e[e.Immersive=1]="Immersive",e[e.Showcase=2]="Showcase",e[e.NumberedList=3]="NumberedList",e}({}),s=function(e){return e[e.News=0]="News",e[e.Opinion=1]="Opinion",e[e.Sport=2]="Sport",e[e.Culture=3]="Culture",e[e.Lifestyle=4]="Lifestyle",e}({}),o=function(e){return e[e.SpecialReport=5]="SpecialReport",e[e.Labs=6]="Labs",e[e.SpecialReportAlt=7]="SpecialReportAlt",e}({});const a=e=>{let{design:t}=e;switch(t){case"ArticleDesign":default:return 0;case"PictureDesign":return 1;case"GalleryDesign":return 2;case"AudioDesign":return 3;case"VideoDesign":return 4;case"ReviewDesign":return 5;case"AnalysisDesign":return 6;case"CommentDesign":return 8;case"LetterDesign":return 9;case"FeatureDesign":return 10;case"LiveBlogDesign":return 11;case"DeadBlogDesign":return 12;case"RecipeDesign":return 13;case"MatchReportDesign":return 14;case"InterviewDesign":return 15;case"EditorialDesign":return 16;case"QuizDesign":return 17;case"InteractiveDesign":return 18;case"PhotoEssayDesign":return 19;case"ObituaryDesign":return 20;case"FullPageInteractiveDesign":return 22;case"NewsletterSignupDesign":return 23;case"ExplainerDesign":return 7;case"TimelineDesign":return 24;case"ProfileDesign":return 25}},c=e=>{let{display:t,design:n}=e;switch(t){case"StandardDisplay":default:return 0;case"ImmersiveDisplay":return"CommentDesign"===n?0:1;case"ShowcaseDisplay":return 2;case"NumberedListDisplay":return 3}},l=e=>{let{theme:t}=e;switch(t){case"NewsPillar":default:return 0;case"OpinionPillar":return 1;case"SportPillar":return 2;case"CulturePillar":return 3;case"LifestylePillar":return 4;case"SpecialReportTheme":return 5;case"SpecialReportAltTheme":return 7;case"Labs":return 6}},d=e=>({design:a(e),display:c(e),theme:l(e)})},82871:(e,t,n)=>{n.d(t,{f:()=>i});const r=["lightbox","youTubeFullscreen","sticky-video-button","sticky-video","banner","dropdown","burger","mastheadVeggieBurgerExpandedMobile","expanded-veggie-menu-wrapper","expanded-veggie-menu","fullPageInteractiveHeaderWrapper","mobileSticky","stickyAdWrapperLabsHeader","stickyAdWrapper","stickyAdWrapperNav","mastheadMyAccountDropdown","mastheadEditionDropdown","editionDropdown","summaryDetails","toast","onwardsCarousel","myAccountDropdown","searchHeaderLink","TheGuardian","editionSwitcherBanner","expandableMarketingCardOverlay","tableOfContents","articleHeadline","immersiveBlackBox","bodyArea","rightColumnArea","mainMedia","card-nested-link","card-link"],i=e=>{const t=r.indexOf(e);return-1===t?-1:r.length-t}},53694:(e,t,n)=>{n.d(t,{M:()=>r});const r=e=>"var(".concat(e,")")},70991:(e,t,n)=>{n.d(t,{Q:()=>r});const r="\n\tposition: absolute;\n\toverflow: hidden; /* gets rid of horizontal scrollbar that appears in some circumstances */\n\twhite-space: nowrap; /* The white-space property forces the content to render on one line. */\n\twidth: 1px;  /* ensures content is announced by VoiceOver. */\n\theight: 1px; /* ensures content is announced by VoiceOver. */\n\tmargin: -1px; /* hide or clip content that does not fit into a 1-pixel visible area. */\n\tpadding: 0; /* hide or clip content that does not fit into a 1-pixel visible area. */\n\tborder: 0;\n\tclip: rect(1px, 1px, 1px, 1px); /* clip removes any visible trace of the element */\n\t-webkit-clip-path: inset(50%); /* clip removes any visible trace of the element */\n\tclip-path: inset(50%); /* clip removes any visible trace of the element */\n"},34580:(e,t,n)=>{n.d(t,{o:()=>l});var r=n(50484),i=n(24017),s=n(70991),o=n(78055);function a(){const e=(t=["\n\t\t\t\t\t","\n\t\t\t\t"],n||(n=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(n)}})));var t,n;return a=function(){return e},e}const c=e=>{let{size:t,theme:n}=e;return(0,r.jsx)("svg",{width:t?o.RK[t]:void 0,height:void 0,viewBox:"-3 -3 30 30",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0,children:(0,r.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"m1 7.224 10.498 10.498h1.004L23 7.224l-.98-.954L12 14.708 1.98 6.27z",fill:null==n?void 0:n.fill})})},l=e=>{let{size:t,theme:n,isAnnouncedByScreenReader:o=!1}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(c,{size:t,theme:n}),o?(0,r.jsx)("span",{css:(0,i.css)(a(),s.Q),children:"Expand to show more"}):""]})}},21345:(e,t,n)=>{n.d(t,{l:()=>l});var r=n(50484),i=n(24017),s=n(70991),o=n(78055);function a(){const e=(t=["\n\t\t\t\t\t","\n\t\t\t\t"],n||(n=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(n)}})));var t,n;return a=function(){return e},e}const c=e=>{let{size:t,theme:n}=e;return(0,r.jsx)("svg",{width:t?o.RK[t]:void 0,height:void 0,viewBox:"-3 -3 30 30",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0,children:(0,r.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M23 16.768 12.502 6.27h-1.004L1 16.768l.98.954L12 9.284l10.02 8.438z",fill:null==n?void 0:n.fill})})},l=e=>{let{size:t,theme:n,isAnnouncedByScreenReader:o=!1}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(c,{size:t,theme:n}),o?(0,r.jsx)("span",{css:(0,i.css)(a(),s.Q),children:"Collapse to show less"}):""]})}}}]);
//# sourceMappingURL=TableOfContents-importable.client.web.2876b613cb8800bd1f01.js.map