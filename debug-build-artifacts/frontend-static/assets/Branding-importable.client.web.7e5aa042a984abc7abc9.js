"use strict";(self.webpackChunk_guardian_dotcom_rendering=self.webpackChunk_guardian_dotcom_rendering||[]).push([[1204],{93556:(e,t,n)=>{n.r(t),n.d(t,{Branding:()=>O});var i=n(50484),o=n(24017),r=n(99923),a=n(7351),s=n(92280),l=n(16632),d=n(7077),c=n(53694),u=n(15593);function p(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function f(){const e=p(["\n\tpadding-bottom: 10px;\n"]);return f=function(){return e},e}function m(){const e=p(["\n\tmargin: 4px 0 20px;\n\tpadding: 4px;\n\tborder: 1px solid ",";\n\twidth: fit-content;\n\n\t"," {\n\t\tpadding: 8px;\n\t\twidth: 220px;\n\t}\n\t"," {\n\t\tpadding: 4px;\n\t\twidth: 140px;\n\t}\n\t"," {\n\t\tpadding: 8px;\n\t\twidth: 220px;\n\t}\n"]);return m=function(){return e},e}function g(){const e=p(["\n\t"," {\n\t\tpadding: 8px;\n\t\twidth: 220px;\n\t}\n"]);return g=function(){return e},e}function b(){const e=p(["\n\tpadding-bottom: 1px;\n"]);return b=function(){return e},e}function h(){const e=p(["\n\t","\n\tcolor: ",";\n\n\ta {\n\t\tcolor: inherit;\n\t}\n"]);return h=function(){return e},e}function w(){const e=p(["\n\tcolor: ",";\n\n\t"," {\n\t\tcolor: ",";\n\t}\n"]);return w=function(){return e},e}function k(){const e=p(["\n\tpadding: 0;\n\t& img {\n\t\tdisplay: block;\n\t\tmax-width: 140px;\n\t\t"," {\n\t\t\tmax-width: 130px;\n\t\t}\n\t}\n"]);return k=function(){return e},e}function x(){const e=p(["\n\tpadding: 10px 0;\n\tdisplay: block;\n\n\t& img {\n\t\tdisplay: block;\n\t}\n"]);return x=function(){return e},e}function v(){const e=p(["\n\tpadding-top: 1px;\n"]);return v=function(){return e},e}function D(){const e=p(["\n\t","\n\tdisplay: block;\n\ttext-decoration: none;\n\n\tcolor: ",";\n\ta {\n\t\tcolor: inherit;\n\t}\n\n\t&:hover {\n\t\ttext-decoration: underline;\n\t}\n"]);return D=function(){return e},e}function C(){const e=p(["\n\tcolor: ",";\n\n\t"," {\n\t\tcolor: ",";\n\t}\n"]);return C=function(){return e},e}function L(){const e=p(["\n\tmax-width: ","px;\n\theight: fit-content;\n"]);return L=function(){return e},e}const M=(0,o.css)(f()),y=(0,o.css)(m(),(0,c.M)("--branding-border"),r.HT.desktop,r.HT.leftCol,r.HT.wide),S=(0,o.css)(g(),r.HT.desktop),P=(0,o.css)(b()),B=(0,o.css)(h(),a.Ikj,(0,c.M)("--branding-label-text")),I=(0,o.css)(w(),(0,c.M)("--standfirst-text"),r.HT.desktop,(0,c.M)("--branding-label-text")),R=(0,o.css)(k(),r.Tq.leftCol.and.wide),N=(0,o.css)(x()),T=(0,o.css)(v()),j=(0,o.css)(D(),a.Ikj,(0,c.M)("--branding-link-text")),A=(0,o.css)(C(),(0,c.M)("--standfirst-text"),r.HT.desktop,(0,c.M)("--branding-link-text")),F=e=>(0,o.css)(L(),e);function E(e,t,n){var o;const r=null!==(o=e.logoForDarkBackground)&&void 0!==o?o:e.logo,a=(t.design===l.vw.Video||t.design===l.vw.Audio||t.design===l.vw.Gallery||t.design===l.vw.Picture)&&t.theme!==l.A$.Labs;return(0,i.jsxs)("picture",{children:[t.design===l.vw.LiveBlog&&(0,i.jsx)("source",{width:r.dimensions.width,height:r.dimensions.height,srcSet:encodeURI(r.src),media:"(max-width: ".concat(s.f.desktop-1,"px)")}),n&&e.logoForDarkBackground&&(0,i.jsx)("source",{width:e.logoForDarkBackground.dimensions.width,height:e.logoForDarkBackground.dimensions.height,srcSet:encodeURI(e.logoForDarkBackground.src),media:"(prefers-color-scheme: dark)"}),a&&e.logoForDarkBackground?(0,i.jsx)("img",{width:e.logoForDarkBackground.dimensions.width,height:e.logoForDarkBackground.dimensions.height,src:encodeURI(e.logoForDarkBackground.src),alt:e.sponsorName,css:F(e.logo.dimensions.width)}):(0,i.jsx)("img",{width:e.logo.dimensions.width,height:e.logo.dimensions.height,src:encodeURI(e.logo.src),alt:e.sponsorName,css:F(e.logo.dimensions.width)})]})}const O=e=>{let{branding:t,format:n}=e;const o=n.design===l.vw.LiveBlog,r=n.design===l.vw.Interactive,{ophanComponentName:a,ophanComponentLink:s}=(0,d.x)({branding:t,locationPrefix:"article-meta"}),{darkModeAvailable:c}=(0,u.U)(),p="advertising partner"===t.logo.label.toLowerCase()||"exclusive advertising partner"===t.logo.label.toLowerCase(),f=p&&r;return(0,i.jsxs)("div",{css:[M,p&&y,f&&S],children:[(0,i.jsx)("div",{css:[B,p&&P,o&&I],children:t.logo.label}),(0,i.jsx)("div",{css:[N,p&&!r&&R],children:(0,i.jsx)("a",{href:t.logo.link,"data-sponsor":t.sponsorName.toLowerCase(),rel:"nofollow","aria-label":"Visit the ".concat(t.sponsorName," website"),"data-testid":"branding-logo","data-component":a,"data-link-name":s,children:E(t,n,c)})}),(0,i.jsx)("a",{href:t.aboutThisLink,css:[j,p&&T,o&&A],children:"About this content"})]})}},16632:(e,t,n)=>{n.d(t,{A$:()=>a,B0:()=>r,M2:()=>c,Ns:()=>o,vw:()=>i});var i=function(e){return e[e.Standard=0]="Standard",e[e.Picture=1]="Picture",e[e.Gallery=2]="Gallery",e[e.Audio=3]="Audio",e[e.Video=4]="Video",e[e.Review=5]="Review",e[e.Analysis=6]="Analysis",e[e.Explainer=7]="Explainer",e[e.Comment=8]="Comment",e[e.Letter=9]="Letter",e[e.Feature=10]="Feature",e[e.LiveBlog=11]="LiveBlog",e[e.DeadBlog=12]="DeadBlog",e[e.Recipe=13]="Recipe",e[e.MatchReport=14]="MatchReport",e[e.Interview=15]="Interview",e[e.Editorial=16]="Editorial",e[e.Quiz=17]="Quiz",e[e.Interactive=18]="Interactive",e[e.PhotoEssay=19]="PhotoEssay",e[e.Obituary=20]="Obituary",e[e.Correction=21]="Correction",e[e.FullPageInteractive=22]="FullPageInteractive",e[e.NewsletterSignup=23]="NewsletterSignup",e[e.Timeline=24]="Timeline",e[e.Profile=25]="Profile",e}({}),o=function(e){return e[e.Standard=0]="Standard",e[e.Immersive=1]="Immersive",e[e.Showcase=2]="Showcase",e[e.NumberedList=3]="NumberedList",e}({}),r=function(e){return e[e.News=0]="News",e[e.Opinion=1]="Opinion",e[e.Sport=2]="Sport",e[e.Culture=3]="Culture",e[e.Lifestyle=4]="Lifestyle",e}({}),a=function(e){return e[e.SpecialReport=5]="SpecialReport",e[e.Labs=6]="Labs",e[e.SpecialReportAlt=7]="SpecialReportAlt",e}({});const s=e=>{let{design:t}=e;switch(t){case"ArticleDesign":default:return 0;case"PictureDesign":return 1;case"GalleryDesign":return 2;case"AudioDesign":return 3;case"VideoDesign":return 4;case"ReviewDesign":return 5;case"AnalysisDesign":return 6;case"CommentDesign":return 8;case"LetterDesign":return 9;case"FeatureDesign":return 10;case"LiveBlogDesign":return 11;case"DeadBlogDesign":return 12;case"RecipeDesign":return 13;case"MatchReportDesign":return 14;case"InterviewDesign":return 15;case"EditorialDesign":return 16;case"QuizDesign":return 17;case"InteractiveDesign":return 18;case"PhotoEssayDesign":return 19;case"ObituaryDesign":return 20;case"FullPageInteractiveDesign":return 22;case"NewsletterSignupDesign":return 23;case"ExplainerDesign":return 7;case"TimelineDesign":return 24;case"ProfileDesign":return 25}},l=e=>{let{display:t,design:n}=e;switch(t){case"StandardDisplay":default:return 0;case"ImmersiveDisplay":return"CommentDesign"===n?0:1;case"ShowcaseDisplay":return 2;case"NumberedListDisplay":return 3}},d=e=>{let{theme:t}=e;switch(t){case"NewsPillar":default:return 0;case"OpinionPillar":return 1;case"SportPillar":return 2;case"CulturePillar":return 3;case"LifestylePillar":return 4;case"SpecialReportTheme":return 5;case"SpecialReportAltTheme":return 7;case"Labs":return 6}},c=e=>({design:s(e),display:l(e),theme:d(e)})},7077:(e,t,n)=>{n.d(t,{x:()=>i});const i=e=>{let{branding:t,locationPrefix:n}=e;const i=t.sponsorName.toLowerCase().replace(" ","-"),o="".concat(n,"-").concat(i);return{ophanComponentName:"labs-logo | ".concat(o),ophanComponentLink:"labs-logo-".concat(o)}}},53694:(e,t,n)=>{n.d(t,{M:()=>i});const i=e=>"var(".concat(e,")")},92280:(e,t,n)=>{n.d(t,{f:()=>i});const i={desktop:980,leftCol:1140,mobile:320,mobileLandscape:480,mobileMedium:375,phablet:660,tablet:740,wide:1300}},99923:(e,t,n)=>{n.d(t,{HT:()=>s,TG:()=>l,Tq:()=>d});var i=n(92280);const o=e=>"@media (min-width: ".concat("".concat(e,"px"),")"),r=e=>"@media (max-width: ".concat("".concat(e-.1,"px"),")"),a=(e,t)=>"@media (min-width: ".concat("".concat(e,"px"),") and (max-width: ").concat("".concat(t-.1,"px"),")"),s={mobile:o(i.f.mobile),mobileMedium:o(i.f.mobileMedium),mobileLandscape:o(i.f.mobileLandscape),phablet:o(i.f.phablet),tablet:o(i.f.tablet),desktop:o(i.f.desktop),leftCol:o(i.f.leftCol),wide:o(i.f.wide)},l={mobile:r(i.f.mobile),mobileMedium:r(i.f.mobileMedium),mobileLandscape:r(i.f.mobileLandscape),phablet:r(i.f.phablet),tablet:r(i.f.tablet),desktop:r(i.f.desktop),leftCol:r(i.f.leftCol),wide:r(i.f.wide)},d={mobile:{and:{mobileMedium:a(i.f.mobile,i.f.mobileMedium),mobileLandscape:a(i.f.mobile,i.f.mobileLandscape),phablet:a(i.f.mobile,i.f.phablet),tablet:a(i.f.mobile,i.f.tablet),desktop:a(i.f.mobile,i.f.desktop),leftCol:a(i.f.mobile,i.f.leftCol),wide:a(i.f.mobileMedium,i.f.wide)}},mobileMedium:{and:{mobileLandscape:a(i.f.mobileMedium,i.f.mobileLandscape),phablet:a(i.f.mobileMedium,i.f.phablet),tablet:a(i.f.mobileMedium,i.f.tablet),desktop:a(i.f.mobileMedium,i.f.desktop),leftCol:a(i.f.mobileMedium,i.f.leftCol),wide:a(i.f.mobileMedium,i.f.wide)}},mobileLandscape:{and:{phablet:a(i.f.mobileLandscape,i.f.phablet),tablet:a(i.f.mobileLandscape,i.f.tablet),desktop:a(i.f.mobileLandscape,i.f.desktop),leftCol:a(i.f.mobileLandscape,i.f.leftCol),wide:a(i.f.mobileLandscape,i.f.wide)}},phablet:{and:{tablet:a(i.f.phablet,i.f.tablet),desktop:a(i.f.phablet,i.f.desktop),leftCol:a(i.f.phablet,i.f.leftCol),wide:a(i.f.phablet,i.f.wide)}},tablet:{and:{desktop:a(i.f.tablet,i.f.desktop),leftCol:a(i.f.tablet,i.f.leftCol),wide:a(i.f.tablet,i.f.wide)}},desktop:{and:{leftCol:a(i.f.desktop,i.f.leftCol),wide:a(i.f.desktop,i.f.wide)}},leftCol:{and:{wide:a(i.f.leftCol,i.f.wide)}}}}}]);
//# sourceMappingURL=Branding-importable.client.web.7e5aa042a984abc7abc9.js.map