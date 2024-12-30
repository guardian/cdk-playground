"use strict";(self.webpackChunk_guardian_dotcom_rendering=self.webpackChunk_guardian_dotcom_rendering||[]).push([[6248],{86248:(e,t,i)=>{i.d(t,{Ip:()=>u,VI:()=>w,jp:()=>b,sP:()=>h});var a=i(22820),r=i(50484),n=i(84782),o=i(67400),s=i(95644),d=i(1840),l=function(e,t){return t.breakpoint-e.breakpoint},p={name:"4zleql",styles:"display:block"},c={name:"zjik7",styles:"display:flex"},u=function(e,t,i){return t.slice().sort(l).map((function(t){var a=t.width;return{breakpoint:t.breakpoint,width:a,hiResUrl:(0,d.o7)({mainImage:e,imageWidth:a,resolution:"high",aspectRatio:i}),lowResUrl:(0,d.o7)({mainImage:e,imageWidth:a,resolution:"low",aspectRatio:i})}}))},h=function(e){var t=e.slice(-1),i=(0,a.A)(t,1)[0];if(!i)throw new Error("No fallback images found");return i},b=function(e){var t=e.sources;return(0,r.jsx)(r.Fragment,{children:t.map((function(e){return(0,r.jsxs)(o.Fragment,{children:[(0,r.jsx)("source",{srcSet:e.hiResUrl,media:"(min-width: ".concat(e.breakpoint,"px) and (-webkit-min-device-pixel-ratio: 1.25), (min-width: ").concat(e.breakpoint,"px) and (min-resolution: 120dpi)")}),(0,r.jsx)("source",{srcSet:e.lowResUrl,media:"(min-width: ".concat(e.breakpoint,"px)")})]},e.breakpoint)}))})},w=function(e){var t=e.role,i=e.format,d=e.master,l=e.alt,f=e.height,m=e.width,k=e.isMainMedia,g=void 0!==k&&k,v=e.loading,L=e.isLightbox,S=void 0!==L&&L,D=e.orientation,y=void 0===D?"landscape":D,R=e.onLoad,P=e.aspectRatio,x=(0,o.useState)(!1),C=(0,a.A)(x,2),I=C[0],N=C[1],A=(0,o.useCallback)((function(e){e&&(e.complete?N(!0):e.addEventListener("load",(function(){return N(!0)})))}),[]);(0,o.useEffect)((function(){I&&R&&R()}),[I,R]);var E=u(d,function(e){var t=e.role,i=e.isMainMedia,a=e.format;if(e.isLightbox)return"portrait"===e.orientation?[{breakpoint:n.f.mobile,width:480},{breakpoint:n.f.mobileLandscape,width:480},{breakpoint:n.f.phablet,width:480},{breakpoint:n.f.tablet,width:660},{breakpoint:n.f.desktop,width:740},{breakpoint:n.f.leftCol,width:980},{breakpoint:n.f.wide,width:1140}]:[{breakpoint:n.f.mobile,width:480},{breakpoint:n.f.mobileLandscape,width:660},{breakpoint:n.f.phablet,width:740},{breakpoint:n.f.tablet,width:980},{breakpoint:n.f.desktop,width:1140},{breakpoint:n.f.leftCol,width:1300},{breakpoint:n.f.wide,width:1900}];if(a.design===s.vw.Picture)return[{breakpoint:n.f.mobile,width:480},{breakpoint:n.f.mobileLandscape,width:660},{breakpoint:n.f.phablet,width:740},{breakpoint:n.f.tablet,width:980},{breakpoint:n.f.desktop,width:1140},{breakpoint:n.f.leftCol,width:1300},{breakpoint:n.f.wide,width:1900}];if(i)switch(a.display){case s.Ns.Immersive:return[{breakpoint:n.f.mobile,width:480},{breakpoint:n.f.mobileLandscape,width:660},{breakpoint:n.f.phablet,width:740},{breakpoint:n.f.tablet,width:980},{breakpoint:n.f.desktop,width:1140},{breakpoint:n.f.leftCol,width:1300},{breakpoint:n.f.wide,width:1900}];case s.Ns.Showcase:case s.Ns.NumberedList:return a.design===s.vw.Feature?[{breakpoint:n.f.mobile,width:465},{breakpoint:n.f.mobileLandscape,width:645},{breakpoint:n.f.phablet,width:725},{breakpoint:n.f.tablet,width:965},{breakpoint:n.f.desktop,width:1125},{breakpoint:n.f.leftCol,width:1140},{breakpoint:n.f.wide,width:1300}]:[{breakpoint:n.f.mobile,width:465},{breakpoint:n.f.mobileLandscape,width:645},{breakpoint:n.f.phablet,width:660},{breakpoint:n.f.tablet,width:700},{breakpoint:n.f.leftCol,width:940},{breakpoint:n.f.wide,width:1020}];default:return[{breakpoint:n.f.mobile,width:465},{breakpoint:n.f.mobileLandscape,width:645},{breakpoint:n.f.phablet,width:620},{breakpoint:n.f.tablet,width:700},{breakpoint:n.f.desktop,width:620}]}else if(a.design===s.vw.LiveBlog||a.design===s.vw.DeadBlog)switch(t){case"thumbnail":return[{breakpoint:n.f.mobile,width:120},{breakpoint:n.f.tablet,width:140}];case"showcase":case"immersive":case"supporting":case"halfWidth":return[{breakpoint:n.f.mobile,width:445}];case"podcastCover":return[{breakpoint:n.f.mobile,width:140},{breakpoint:n.f.wide,width:219}];default:return[{breakpoint:n.f.mobile,width:465},{breakpoint:n.f.phablet,width:700}]}else switch(t){case"showcase":return[{breakpoint:n.f.mobile,width:445},{breakpoint:n.f.mobileLandscape,width:605},{breakpoint:n.f.phablet,width:620},{breakpoint:n.f.desktop,width:640},{breakpoint:n.f.leftCol,width:800},{breakpoint:n.f.wide,width:880}];case"supporting":return[{breakpoint:n.f.mobile,width:445},{breakpoint:n.f.mobileLandscape,width:605},{breakpoint:n.f.phablet,width:620},{breakpoint:n.f.desktop,width:300},{breakpoint:n.f.wide,width:380}];case"thumbnail":return[{breakpoint:n.f.mobile,width:120},{breakpoint:n.f.tablet,width:140}];case"immersive":return[{breakpoint:n.f.mobile,width:465},{breakpoint:n.f.mobileLandscape,width:645},{breakpoint:n.f.phablet,width:725},{breakpoint:n.f.tablet,width:965},{breakpoint:n.f.desktop,width:1125},{breakpoint:n.f.leftCol,width:1140},{breakpoint:n.f.wide,width:1300}];case"halfWidth":return[{breakpoint:n.f.mobile,width:445}];default:return[{breakpoint:n.f.mobile,width:445},{breakpoint:n.f.mobileLandscape,width:605},{breakpoint:n.f.phablet,width:620}]}}({role:t,format:i,isMainMedia:g,isLightbox:S,orientation:y}),P),j=f/m,F=j>=1?"100vw":"".concat(Math.round(100/j),"vh"),M=h(E);return(0,r.jsxs)("picture",{css:S?c:p,children:[i.display===s.Ns.Immersive&&g&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("source",{media:"(orientation: portrait) and (-webkit-min-device-pixel-ratio: 1.25), (orientation: portrait) and (min-resolution: 120dpi)",sizes:F,srcSet:E.map((function(e){return"".concat(e.hiResUrl," ").concat(e.width,"w")})).join(",")}),(0,r.jsx)("source",{media:"(orientation: portrait)",sizes:F,srcSet:E.map((function(e){return"".concat(e.lowResUrl," ").concat(e.width,"w")})).join(",")})]}),(0,r.jsx)(b,{sources:E}),(0,r.jsx)("img",{ref:A,alt:l,src:M.lowResUrl,width:M.width,height:M.width*j,loading:w.disableLazyLoading?void 0:v,css:S?c:p})]})};w.disableLazyLoading=!1},95644:(e,t,i)=>{var a,r,n,o;i.d(t,{A$:()=>o,B0:()=>n,M2:()=>p,Ns:()=>r,vw:()=>a}),function(e){e[e.Standard=0]="Standard",e[e.Picture=1]="Picture",e[e.Gallery=2]="Gallery",e[e.Audio=3]="Audio",e[e.Video=4]="Video",e[e.Review=5]="Review",e[e.Analysis=6]="Analysis",e[e.Explainer=7]="Explainer",e[e.Comment=8]="Comment",e[e.Letter=9]="Letter",e[e.Feature=10]="Feature",e[e.LiveBlog=11]="LiveBlog",e[e.DeadBlog=12]="DeadBlog",e[e.Recipe=13]="Recipe",e[e.MatchReport=14]="MatchReport",e[e.Interview=15]="Interview",e[e.Editorial=16]="Editorial",e[e.Quiz=17]="Quiz",e[e.Interactive=18]="Interactive",e[e.PhotoEssay=19]="PhotoEssay",e[e.Obituary=20]="Obituary",e[e.Correction=21]="Correction",e[e.FullPageInteractive=22]="FullPageInteractive",e[e.NewsletterSignup=23]="NewsletterSignup",e[e.Timeline=24]="Timeline",e[e.Profile=25]="Profile"}(a||(a={})),function(e){e[e.Standard=0]="Standard",e[e.Immersive=1]="Immersive",e[e.Showcase=2]="Showcase",e[e.NumberedList=3]="NumberedList"}(r||(r={})),function(e){e[e.News=0]="News",e[e.Opinion=1]="Opinion",e[e.Sport=2]="Sport",e[e.Culture=3]="Culture",e[e.Lifestyle=4]="Lifestyle"}(n||(n={})),function(e){e[e.SpecialReport=5]="SpecialReport",e[e.Labs=6]="Labs",e[e.SpecialReportAlt=7]="SpecialReportAlt"}(o||(o={}));var s=function(e){switch(e.design){case"ArticleDesign":default:return a.Standard;case"PictureDesign":return a.Picture;case"GalleryDesign":return a.Gallery;case"AudioDesign":return a.Audio;case"VideoDesign":return a.Video;case"ReviewDesign":return a.Review;case"AnalysisDesign":return a.Analysis;case"CommentDesign":return a.Comment;case"LetterDesign":return a.Letter;case"FeatureDesign":return a.Feature;case"LiveBlogDesign":return a.LiveBlog;case"DeadBlogDesign":return a.DeadBlog;case"RecipeDesign":return a.Recipe;case"MatchReportDesign":return a.MatchReport;case"InterviewDesign":return a.Interview;case"EditorialDesign":return a.Editorial;case"QuizDesign":return a.Quiz;case"InteractiveDesign":return a.Interactive;case"PhotoEssayDesign":return a.PhotoEssay;case"ObituaryDesign":return a.Obituary;case"FullPageInteractiveDesign":return a.FullPageInteractive;case"NewsletterSignupDesign":return a.NewsletterSignup;case"ExplainerDesign":return a.Explainer;case"TimelineDesign":return a.Timeline;case"ProfileDesign":return a.Profile}},d=function(e){var t=e.display,i=e.design;switch(t){case"StandardDisplay":default:return r.Standard;case"ImmersiveDisplay":return"CommentDesign"===i?r.Standard:r.Immersive;case"ShowcaseDisplay":return r.Showcase;case"NumberedListDisplay":return r.NumberedList}},l=function(e){switch(e.theme){case"NewsPillar":default:return n.News;case"OpinionPillar":return n.Opinion;case"SportPillar":return n.Sport;case"CulturePillar":return n.Culture;case"LifestylePillar":return n.Lifestyle;case"SpecialReportTheme":return o.SpecialReport;case"SpecialReportAltTheme":return o.SpecialReportAlt;case"Labs":return o.Labs}},p=function(e){return{design:s(e),display:d(e),theme:l(e)}}},1840:(e,t,i)=>{i.d(t,{o7:()=>a});var a=function(e){var t=e.mainImage,i=e.imageWidth,a=e.resolution,r=e.aspectRatio,n=void 0===r?"none":r,o=new URL(t);if("s3-eu-west-1.amazonaws.com"===o.hostname)return o.href;var s=new URLSearchParams({width:i.toString(),dpr:String("high"===a?2:1),s:"none",crop:n});return"https://i.guim.co.uk/img/".concat(function(e){var t;switch(null!==(t=e.hostname.split(".")[0])&&void 0!==t?t:""){case"static":case"static-secure":return"static";case"uploads":return"uploads";default:return"media"}}(o)).concat(o.pathname,"?").concat(s.toString())}}}]);
//# sourceMappingURL=6248.client.web.legacy.a646dffa7395b5ea60c3.js.map