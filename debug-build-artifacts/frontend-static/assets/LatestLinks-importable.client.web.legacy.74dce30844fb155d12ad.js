(self.webpackChunk_guardian_dotcom_rendering=self.webpackChunk_guardian_dotcom_rendering||[]).push([[2242,4541,8970],{4341:(e,t,i)=>{"use strict";i.d(t,{K:()=>l});var n=i(50484),r=i(24017),o=i(1954),a=function(e){return(0,r.css)("display:block;color:",e,";")},l=function(e){var t=e.text,i=e.fontStyles,r=e.colour,l=void 0===r?(0,o.M)("--byline"):r;return(0,n.jsx)("span",{css:[a(l),i],children:t})}},25586:(e,t,i)=>{"use strict";i.d(t,{Ly:()=>w,tw:()=>x});var n,r=i(50484),o=i(24017),a=i(71653),l=i(81477),s=i(56297),c=i(57718),d=(i(67400),i(95644)),u=i(24755),f=i(1954),p=i(4341),m=i(32823),h=i(98373),g=(0,o.css)("display:block;z-index:",(0,u.f)("card-nested-link"),";color:inherit;text-decoration:none;font-family:inherit;font-size:inherit;line-height:inherit;:hover{color:inherit;text-decoration:none;.show-underline{text-decoration:underline;text-underline-offset:auto;text-underline-position:auto;}}"),v={headlineMedium:{xxxlarge:a.Md7,xxlarge:a.F1X,xlarge:a.qae,large:a.D7o,medium:a.mAD,small:a.muz,xsmall:a.A5,xxsmall:a.cYp,xxxsmall:a.chC,tiny:a.XEo},headlineLight:{xxxlarge:a.DX0,xxlarge:a.sOP,xlarge:a.v$d,large:a.Qhm,medium:a.tWu,small:a.tQq,xsmall:a.fP9,xxsmall:a.Nt_,xxxsmall:a.bNV,tiny:a.WtU},textSans:{xxxlarge:a.Pgx,xxlarge:a.Pgx,xlarge:a.Pgx,large:a.Pgx,medium:a.Pgx,small:a.Pgx,xsmall:a.Pgx,xxsmall:a.NA0,xxxsmall:a.PSs,tiny:a.Ikj}};!function(e){e.HeadlineMedium="headlineMedium",e.HeadlineLight="headlineLight",e.TextSans="textSans"}(n||(n={}));var b=function(e,t){var i=v[t],n=e.desktop,r=e.tablet,a=e.mobileMedium,s=e.mobile;return(0,o.css)(i[n],";",r&&(0,o.css)(l.TG.desktop,"{",i[r],";}")," ",s&&(0,o.css)(l.TG.tablet,"{",i[s],";}")," ",a&&(0,o.css)(l.Tq.mobileMedium.and.tablet,"{",i[a],";}"),";")},x=function(e){var t=e.linkTo,i=e.children;return t?(0,r.jsx)(s.N,{href:t,cssOverrides:g,children:i}):(0,r.jsx)(r.Fragment,{children:i})},y={name:"vz8kcl",styles:"stroke:red"},w=function(e){var t=e.headlineText,i=e.format,l=e.showQuotes,s=e.kickerText,u=e.showPulsingDot,g=e.hasInlineKicker,v=e.fontSizes,w=void 0===v?{desktop:"xsmall",tablet:"xxsmall",mobile:"xxsmall"}:v,k=e.byline,S=e.showByline,j=e.linkTo,D=e.isExternalLink,L=e.headlineColour,M=void 0===L?(0,f.M)("--card-headline"):L,T=e.kickerColour,P=void 0===T?(0,f.M)("--card-kicker-text"):T,I=e.isBetaContainer,O=!!j,C=function(e,t,i){return e.theme===d.A$.Labs?b(t,n.TextSans):!i||e.design!==d.vw.Comment&&e.design!==d.vw.Editorial&&e.design!==d.vw.Letter?b(t,n.HeadlineMedium):b(t,n.HeadlineLight)}(i,w,void 0!==I&&I);return(0,r.jsxs)(x,{linkTo:j,children:[(0,r.jsxs)("h3",{className:"".concat(O?"card-sublink-headline":"card-headline"),css:[O?(0,o.css)(a.WuG,";"):C],children:[!!s&&(0,r.jsx)(m.Y,{text:s,color:P,showPulsingDot:u,isInline:g}),l&&(0,r.jsx)(h.c,{colour:P}),(0,r.jsxs)("span",{css:(0,o.css)("color:",M,";"),className:"show-underline",children:[t,D&&(0,r.jsx)("span",{css:y,children:(0,r.jsx)(c.M,{size:"xsmall"})})]})]}),!!k&&S&&(0,r.jsx)(p.K,{text:k,colour:P,fontStyles:C})]})}},41467:(e,t,i)=>{"use strict";i.d(t,{c:()=>f});var n=i(50484),r=i(5240),o=i(53431),a=i(7693),l=i(77663),s=i(45778),c=function(e,t,i){return e.toLocaleDateString(t,{weekday:"short",timeZone:i})},d=function(e,t,i){return e.toLocaleDateString(t,{day:"numeric",month:"short",year:"numeric",timeZone:i}).replaceAll(",","")},u=function(e,t,i){return e.toLocaleTimeString(t,{hour12:!1,hour:"2-digit",minute:"2-digit",timeZoneName:"short",timeZone:i}).replace(":",".")},f=function(e){var t=e.date,i=e.showWeekday,f=e.showDate,p=e.showTime,m=e.display,h=void 0===m?"absolute":m,g=e.absoluteServerTimes,v=void 0===g||g,b=(0,a.U)().editionId,x=(0,o.iR)(b),y=x.dateLocale,w=x.timeZone,k=t.getTime();return"relative"===h?(0,n.jsx)(l.u,{priority:"enhancement",defer:{until:"visible"},children:(0,n.jsx)(s.RelativeTime,{then:k,now:v?864e13:6e4*Math.floor(Date.now()/6e4),editionId:b})}):(0,n.jsx)("time",{dateTime:t.toISOString(),"data-locale":y,title:t.toLocaleDateString(y,{hour:"2-digit",minute:"2-digit",weekday:"long",year:"numeric",month:"long",day:"numeric",timeZoneName:"long",timeZone:w}),children:[i&&c(t,y,w),f&&d(t,y,w),p&&u(t,y,w)].filter(r.K).join(" ")})}},77663:(e,t,i)=>{"use strict";i.d(t,{u:()=>r});var n=i(50484),r=function(e){var t=e.priority,i=e.defer,r=e.children,o=e.role,a="visible"===(null==i?void 0:i.until)?i.rootMargin:void 0,l=String(r.type.name);return(0,n.jsx)("gu-island",{name:l,priority:t,deferUntil:null==i?void 0:i.until,props:JSON.stringify(r.props),rootMargin:a,"data-spacefinder-role":o,children:r})}},32823:(e,t,i)=>{"use strict";i.d(t,{Y:()=>m});var n=i(50484),r=i(24017),o=i(71653),a=i(59648),l=i(1954),s=i(77663),c=i(18106),d=(0,r.css)(o.PSs,"line-height:1;padding-bottom:0.2em;"),u=(0,r.css)(o.yui,";"),f=(0,r.css)(o.rS6," display:flex;flex-direction:row;align-items:baseline;width:fit-content;padding:0 ",a.x[1],"px;"),p=(0,r.css)("display:inline-block;margin-right:",a.x[1],"px;padding-bottom:0;font-size:inherit;line-height:inherit;"),m=function(e){var t=e.text,i=e.color,r=e.showPulsingDot,o=e.isInline,a=e.fontWeight,m=void 0===a?"regular":a,h=!!r;return(0,n.jsxs)("div",{css:[h?f:[d,"bold"===m&&u],o&&p],style:{color:h?(0,l.M)("--kicker-text-live"):i,backgroundColor:h?(0,l.M)("--kicker-background-live"):"transparent"},children:[r&&(0,n.jsx)(s.u,{priority:"enhancement",defer:{until:"visible"},children:(0,n.jsx)(c.PulsingDot,{colour:(0,l.M)("--kicker-pulsing-dot-live")})}),t]})}},1707:(e,t,i)=>{"use strict";i.r(t),i.d(t,{LatestLinks:()=>L});var n,r,o=i(50484),a=i(24017),l=i(59648),s=i(71653),c=i(81477),d=i(51281),u=i(34660),f=(0,a.css)(".reveal{animation:",(0,a.keyframes)(n||(n=(0,u.A)(["\n\t\t\t0% { opacity: 0; }\n\t\t\t100% { opacity: 1; }\n\t\t"])))," 1s ease-out;}.reveal-slowly{animation:",(0,a.keyframes)(r||(r=(0,u.A)(["\n\t\t\t0% { opacity: 0; }\n\t\t\t100% { opacity: 1; }\n\t\t"])))," 4s ease-out;}.pending{display:none;}"),p=i(73556),m=i(1954),h=i(25586),g=i(97872),v=i(41467),b=(0,a.css)("padding:",l.x[2],"px 0;",s.keT,";color:",(0,m.M)("--card-headline"),";"),x={name:"mcnhyd",styles:"flex-direction:row"},y=(0,a.css)("flex-direction:column;padding:0 ",l.x[1],"px;"),w=(0,a.css)(s.WuG," overflow:hidden;flex:1;"),k=(0,a.css)("color:",(0,m.M)("--article-border"),";border-top:1px solid currentColor;border-left:1px solid currentColor;"),S=(0,a.css)(s.rS6,";:before{content:'';height:0.75em;width:0.75em;margin-right:",l.x[1],"px;display:inline-block;background-color:",(0,m.M)("--card-kicker-text"),";border-radius:100%;}"),j=function(e){return"horizontal"===e?(0,a.css)(c.TG.tablet,"{",x,";}"):(0,a.css)(c.TG.tablet,"{",y,";}")},D={name:"27hgbp",styles:"color:transparent"},L=function(e){var t=e.id,i=e.direction,n=e.isDynamo,r=void 0!==n&&n,s=e.containerPalette,c=e.absoluteServerTimes,u=e.displayHeader,L=void 0!==u&&u,M=e.directionOnMobile,T=(0,p.g)("https://api.nextgen.guardianapps.co.uk".concat(t,".json?rendered=false"),{refreshInterval:9600}).data,P=r?"calc(".concat(l.x[1],"px + 5.2em)"):"5.2em",I=(0,a.css)("display:flex;gap:",l.x[1],"px;box-sizing:border-box;min-height:",P,";");return(0,o.jsxs)(o.Fragment,{children:[L&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(d.e,{count:1,color:(0,m.M)("--latest-links-dotted-line")}),(0,o.jsx)("div",{css:b,children:"Latest"})]}),(0,o.jsx)("ul",{css:[I,f,r||"horizontal"===i?x:y,M&&j(M),(0,a.css)("color:",(0,m.M)("--card-trail-text"),";")],children:T&&T.blocks.length>=3?T.blocks.filter((function(e){return""!==e.body.trim()})).slice(0,3).map((function(e,i){return(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)(g.X,{containerPalette:s,children:[i>0&&(0,o.jsx)("li",{css:k},e.id+" : divider"),(0,o.jsx)("li",{css:w,className:"reveal",children:(0,o.jsxs)(h.tw,{linkTo:"".concat(t,"?page=with:block-").concat(e.id,"#block-").concat(e.id),children:[(0,o.jsx)("div",{css:S,style:{color:(0,m.M)("--card-trail-text")},children:(0,o.jsx)(v.c,{date:new Date(e.publishedDateTime),display:"relative",absoluteServerTimes:c,showWeekday:!1,showDate:!0,showTime:!1})}),(0,o.jsx)("span",{className:"show-underline",children:(n=e.body,n.length<=75?n:n.slice(0,75).split(" ").slice(0,-1).join(" ")+"…")})]})},e.id)]})});var n})):(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("li",{css:w}),(0,o.jsx)("li",{css:[k,D]}),(0,o.jsx)("li",{css:w}),(0,o.jsx)("li",{css:[k,D]}),(0,o.jsx)("li",{css:w})]})})]})}},18106:(e,t,i)=>{"use strict";i.r(t),i.d(t,{PulsingDot:()=>p});var n,r=i(22820),o=i(34660),a=i(50484),l=i(24017),s=i(296),c=i(67400),d=function(e){return(0,l.css)("color:",e&&e,";:before{border-radius:62.5rem;display:inline-block;position:relative;background-color:currentColor;width:0.75em;height:0.75em;content:'';margin-right:0.1875rem;vertical-align:initial;}")},u=(0,l.keyframes)(n||(n=(0,o.A)(["\n    0% {opacity: 1;}\n    10% {opacity: .25;}\n    40% {opacity: 1;}\n    100% {opacity: 1;}\n"]))),f=(0,l.css)("@media not (prefers-reduced-motion: reduce){animation:",u," 1s infinite;}"),p=function(e){var t=e.colour,i=(0,c.useState)(!1),n=(0,r.A)(i,2),o=n[0],l=n[1];return(0,c.useEffect)((function(){var e=s.I.local.get("gu.prefs.accessibility.flashing-elements");l(!1!==e)}),[]),(0,a.jsx)("span",{css:[d(t),o&&f]})}},98373:(e,t,i)=>{"use strict";i.d(t,{c:()=>o});var n=i(50484),r={name:"gi19og",styles:"height:0.7em;width:auto;vertical-align:baseline;margin-right:4px"},o=function(e){var t=e.colour;return(0,n.jsx)("svg",{viewBox:"0 0 22 14",css:r,style:{fill:t},children:(0,n.jsx)("path",{d:"M5.255 0h4.75c-.572 4.53-1.077 8.972-1.297 13.941H0C.792 9.104 2.44 4.53 5.255 0Zm11.061 0H21c-.506 4.53-1.077 8.972-1.297 13.941h-8.686c.902-4.837 2.485-9.411 5.3-13.941Z"})})}},45778:(e,t,i)=>{"use strict";i.r(t),i.d(t,{RelativeTime:()=>f});var n=i(22820),r=i(50484),o=i(25995),a=i(5240),l=i(67400),s=i(53431),c=i(88528),d=function(e){var t=e.then,i=e.now,n=e.precision;return Math.floor((i-t)/n)*n},u=function(e,t,i){var n=(0,o.f)(e,{now:"server"===i?t:e+d({then:e,now:Date.now(),precision:6e4})});return(0,a.K)(n)?n:"now"},f=function(e){var t=e.then,i=e.now,o=e.editionId,a=(0,c.E)({repeat:!0}),d=(0,n.A)(a,2),f=d[0],p=d[1],m=(0,l.useState)(u(t,i,"server")),h=(0,n.A)(m,2),g=h[0],v=h[1];(0,l.useEffect)((function(){var e=function(){return v(u(t,i,"client"))};if(e(),f){var n=setInterval(e,6e4);return function(){return clearInterval(n)}}}),[f,i,t]);var b=new Date(t),x=(0,s.iR)(o),y=x.dateLocale,w=x.timeZone;return(0,r.jsx)("time",{ref:p,dateTime:b.toISOString(),"data-locale":y,title:b.toLocaleDateString(y,{hour:"2-digit",minute:"2-digit",weekday:"long",year:"numeric",month:"long",day:"numeric",timeZoneName:"long",timeZone:w}),children:g})}},95644:(e,t,i)=>{"use strict";var n,r,o,a;i.d(t,{A$:()=>a,B0:()=>o,M2:()=>d,Ns:()=>r,vw:()=>n}),function(e){e[e.Standard=0]="Standard",e[e.Picture=1]="Picture",e[e.Gallery=2]="Gallery",e[e.Audio=3]="Audio",e[e.Video=4]="Video",e[e.Review=5]="Review",e[e.Analysis=6]="Analysis",e[e.Explainer=7]="Explainer",e[e.Comment=8]="Comment",e[e.Letter=9]="Letter",e[e.Feature=10]="Feature",e[e.LiveBlog=11]="LiveBlog",e[e.DeadBlog=12]="DeadBlog",e[e.Recipe=13]="Recipe",e[e.MatchReport=14]="MatchReport",e[e.Interview=15]="Interview",e[e.Editorial=16]="Editorial",e[e.Quiz=17]="Quiz",e[e.Interactive=18]="Interactive",e[e.PhotoEssay=19]="PhotoEssay",e[e.Obituary=20]="Obituary",e[e.Correction=21]="Correction",e[e.FullPageInteractive=22]="FullPageInteractive",e[e.NewsletterSignup=23]="NewsletterSignup",e[e.Timeline=24]="Timeline",e[e.Profile=25]="Profile"}(n||(n={})),function(e){e[e.Standard=0]="Standard",e[e.Immersive=1]="Immersive",e[e.Showcase=2]="Showcase",e[e.NumberedList=3]="NumberedList"}(r||(r={})),function(e){e[e.News=0]="News",e[e.Opinion=1]="Opinion",e[e.Sport=2]="Sport",e[e.Culture=3]="Culture",e[e.Lifestyle=4]="Lifestyle"}(o||(o={})),function(e){e[e.SpecialReport=5]="SpecialReport",e[e.Labs=6]="Labs",e[e.SpecialReportAlt=7]="SpecialReportAlt"}(a||(a={}));var l=function(e){switch(e.design){case"ArticleDesign":default:return n.Standard;case"PictureDesign":return n.Picture;case"GalleryDesign":return n.Gallery;case"AudioDesign":return n.Audio;case"VideoDesign":return n.Video;case"ReviewDesign":return n.Review;case"AnalysisDesign":return n.Analysis;case"CommentDesign":return n.Comment;case"LetterDesign":return n.Letter;case"FeatureDesign":return n.Feature;case"LiveBlogDesign":return n.LiveBlog;case"DeadBlogDesign":return n.DeadBlog;case"RecipeDesign":return n.Recipe;case"MatchReportDesign":return n.MatchReport;case"InterviewDesign":return n.Interview;case"EditorialDesign":return n.Editorial;case"QuizDesign":return n.Quiz;case"InteractiveDesign":return n.Interactive;case"PhotoEssayDesign":return n.PhotoEssay;case"ObituaryDesign":return n.Obituary;case"FullPageInteractiveDesign":return n.FullPageInteractive;case"NewsletterSignupDesign":return n.NewsletterSignup;case"ExplainerDesign":return n.Explainer;case"TimelineDesign":return n.Timeline;case"ProfileDesign":return n.Profile}},s=function(e){var t=e.display,i=e.design;switch(t){case"StandardDisplay":default:return r.Standard;case"ImmersiveDisplay":return"CommentDesign"===i?r.Standard:r.Immersive;case"ShowcaseDisplay":return r.Showcase;case"NumberedListDisplay":return r.NumberedList}},c=function(e){switch(e.theme){case"NewsPillar":default:return o.News;case"OpinionPillar":return o.Opinion;case"SportPillar":return o.Sport;case"CulturePillar":return o.Culture;case"LifestylePillar":return o.Lifestyle;case"SpecialReportTheme":return a.SpecialReport;case"SpecialReportAltTheme":return a.SpecialReportAlt;case"Labs":return a.Labs}},d=function(e){return{design:l(e),display:s(e),theme:c(e)}}},53431:(e,t,i)=>{"use strict";i.d(t,{T$:()=>r,b1:()=>l,iR:()=>a,y4:()=>s});var n=i(57364),r=[{url:"/preference/edition/uk",editionId:"UK",pageId:"uk",longTitle:"UK edition",title:"UK edition",dateLocale:"en-gb",timeZone:"Europe/London",langLocale:"en-GB",hasEditionalisedPages:!0,shortTitle:"UK"},{url:"/preference/edition/us",editionId:"US",pageId:"us",longTitle:"US edition",title:"US edition",dateLocale:"en-us",timeZone:"America/New_York",langLocale:"en-US",hasEditionalisedPages:!0,shortTitle:"US"},{url:"/preference/edition/au",editionId:"AU",pageId:"au",longTitle:"Australia edition",title:"AU edition",dateLocale:"en-au",timeZone:"Australia/Sydney",langLocale:"en-AU",hasEditionalisedPages:!0,shortTitle:"Aus"},{url:"/preference/edition/eur",editionId:"EUR",pageId:"europe",longTitle:"Europe edition",title:"Europe edition",dateLocale:"en-gb",timeZone:"Europe/Paris",langLocale:"en-EU",hasEditionalisedPages:!1,shortTitle:"Eur"},{url:"/preference/edition/int",editionId:"INT",pageId:"international",longTitle:"International edition",title:"International edition",dateLocale:"en-gb",timeZone:"Europe/London",langLocale:"en",hasEditionalisedPages:!1,shortTitle:"Int"}],o=r[0],a=function(e){var t;return null!==(t=r.find((function(t){return t.editionId===e})))&&void 0!==t?t:o},l=function(e){return r.find((function(t){return t.pageId===e}))},s=((0,n.E)(r.map((function(e){return e.editionId}))),function(e){return r.some((function(t){return t.pageId===e}))})},24755:(e,t,i)=>{"use strict";i.d(t,{f:()=>r});var n=["lightbox","youTubeFullscreen","sticky-video-button","sticky-video","banner","dropdown","burger","mastheadVeggieBurgerExpandedMobile","expanded-veggie-menu-wrapper","expanded-veggie-menu","fullPageInteractiveHeaderWrapper","mobileSticky","stickyAdWrapperLabsHeader","stickyAdWrapper","stickyAdWrapperNav","mastheadMyAccountDropdown","mastheadEditionDropdown","editionDropdown","summaryDetails","toast","onwardsCarousel","myAccountDropdown","searchHeaderLink","TheGuardian","editionSwitcherBanner","expandableMarketingCardOverlay","tableOfContents","articleHeadline","immersiveBlackBox","bodyArea","rightColumnArea","mainMedia","card-nested-link","card-link"],r=function(e){var t=n.indexOf(e);return-1===t?-1:n.length-t}},35819:(e,t,i)=>{"use strict";i.d(t,{V:()=>o});var n=function(e){switch(e.length){case 2:return parseInt(e,16);case 1:return parseInt(e+e,16);default:return 127}},r="rgba(127, 127, 127, 0.5)",o=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.5;if(!e.startsWith("#")||![4,7].includes(e.length))return r;var i=7===e.length?2:1,o=n(e.slice(1,1+i)),a=n(e.slice(1+i,1+2*i)),l=n(e.slice(1+2*i,1+3*i));return[o,a,l].some(Number.isNaN)?r:"rgba(".concat(o,", ").concat(a,", ").concat(l,", ").concat(t,")")}},88528:(e,t,i)=>{"use strict";i.d(t,{E:()=>l});var n=i(22820),r=i(44165),o=i.n(r),a=i(67400),l=function(e){var t,i=(0,a.useState)(!1),r=(0,n.A)(i,2),l=r[0],s=r[1],c=(0,a.useState)(null!==(t=e.node)&&void 0!==t?t:null),d=(0,n.A)(c,2),u=d[0],f=d[1],p=(0,a.useRef)(null),m=(0,a.useCallback)((function(t){var i=(0,n.A)(t,1)[0];i&&(i.isIntersecting?s(!0):e.repeat&&s(!1))}),[e.repeat]),h=e.debounce?o()(m,200):m;return(0,a.useEffect)((function(){e.node&&f(e.node)}),[e.node]),(0,a.useEffect)((function(){if(u&&"IntersectionObserver"in window)return p.current=new window.IntersectionObserver(h,e),p.current.observe(u),function(){var e;return null===(e=p.current)||void 0===e?void 0:e.disconnect()}}),[u,e,h]),(0,a.useEffect)((function(){var t;!e.repeat&&l&&(null===(t=p.current)||void 0===t||t.disconnect())}),[l,e.repeat]),[l,f]}},1954:(e,t,i)=>{"use strict";i.d(t,{M:()=>n});var n=function(e){return"var(".concat(e,")")}},44165:(e,t,i)=>{var n=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,a=/^0o[0-7]+$/i,l=parseInt,s="object"==typeof i.g&&i.g&&i.g.Object===Object&&i.g,c="object"==typeof self&&self&&self.Object===Object&&self,d=s||c||Function("return this")(),u=Object.prototype.toString,f=Math.max,p=Math.min,m=function(){return d.Date.now()};function h(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function g(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==u.call(e)}(e))return NaN;if(h(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=h(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(n,"");var i=o.test(e);return i||a.test(e)?l(e.slice(2),i?2:8):r.test(e)?NaN:+e}e.exports=function(e,t,i){var n,r,o,a,l,s,c=0,d=!1,u=!1,v=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var i=n,o=r;return n=r=void 0,c=t,a=e.apply(o,i)}function x(e){var i=e-s;return void 0===s||i>=t||i<0||u&&e-c>=o}function y(){var e=m();if(x(e))return w(e);l=setTimeout(y,function(e){var i=t-(e-s);return u?p(i,o-(e-c)):i}(e))}function w(e){return l=void 0,v&&n?b(e):(n=r=void 0,a)}function k(){var e=m(),i=x(e);if(n=arguments,r=this,s=e,i){if(void 0===l)return function(e){return c=e,l=setTimeout(y,t),d?b(e):a}(s);if(u)return l=setTimeout(y,t),b(s)}return void 0===l&&(l=setTimeout(y,t)),a}return t=g(t)||0,h(i)&&(d=!!i.leading,o=(u="maxWait"in i)?f(g(i.maxWait)||0,t):o,v="trailing"in i?!!i.trailing:v),k.cancel=function(){void 0!==l&&clearTimeout(l),c=0,n=s=r=l=void 0},k.flush=function(){return void 0===l?a:w(m())},k}},34660:(e,t,i)=>{"use strict";function n(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}i.d(t,{A:()=>n})},25995:(e,t,i)=>{"use strict";i.d(t,{f:()=>o});var n=36e5,r=864e5,o=function(e,t){var i,o,a,l,s,c=e,d=null!==(i=null==t?void 0:t.now)&&void 0!==i?i:Date.now(),u=null!==(o=null==t?void 0:t.verbose)&&void 0!==o&&o,f=(s=(l={then:c,now:d}).now-l.then)<6e4?{length:s/1e3,unit:"second"}:s<n?{length:s/6e4,unit:"minute"}:s<r?{length:s/n,unit:"hour"}:{length:s/r,unit:"day"},p=f.length,m=f.unit,h=Math.round(p);if(h<0)return!1;switch(m){case"second":return h>55?u?"1 minute ago":"1m ago":h<15?"now":"".concat(h,u?" seconds ago":"s ago");case"minute":return h>55?u?"1 hour ago":"1h ago":u?1==h?"1 minute ago":"".concat(h," minutes ago"):"".concat(h,"m ago");case"hour":return u?1==h?"1 hour ago":"".concat(h," hours ago"):"".concat(h,"h ago");case"day":var g;return p<(null!==(g=null==t?void 0:t.daysUntilAbsolute)&&void 0!==g?g:7)?u?function(e,t){var i=new Date(t),n=new Date(t);return n.setDate(i.getDate()-1),new Date(e).toDateString()===n.toDateString()}(c,d)?"Yesterday ".concat((a=new Date(c),"".concat(a.getHours(),".").concat(a.getMinutes().toString().padStart(2,"0")))):1==h?"1 day ago":"".concat(h," days ago"):"".concat(h,"d ago"):new Date(c).toLocaleString("en-GB",{day:"numeric",month:u?"long":"short",year:"numeric"})}}},51281:(e,t,i)=>{"use strict";i.d(t,{e:()=>d});var n=i(50484),r=i(24017),o=i(84782),a=i(50641),l=o.f.wide,s=function(e){return 3*e},c=(0,r.css)("max-width:",l,"px;background-size:",3,"px ",3,"px;background-position:top center;background-image:radial-gradient(\n\t\tcurrentColor,\n\t\tcurrentColor ",1,"px,\n\t\ttransparent ",1,"px\n\t);"),d=function(e){var t=e.count,i=void 0===t?4:t,r=e.color,o=void 0===r?a.M.neutral[86]:r,l=e.cssOverrides;return(0,n.jsx)("div",{style:{height:"".concat(s(i),"px"),color:o},css:[c,l]})}},84782:(e,t,i)=>{"use strict";i.d(t,{f:()=>n});var n={desktop:980,leftCol:1140,mobile:320,mobileLandscape:480,mobileMedium:375,phablet:660,tablet:740,wide:1300}},72657:(e,t,i)=>{"use strict";i.d(t,{Q:()=>n});var n="\n\tposition: absolute;\n\toverflow: hidden; /* gets rid of horizontal scrollbar that appears in some circumstances */\n\twhite-space: nowrap; /* The white-space property forces the content to render on one line. */\n\twidth: 1px;  /* ensures content is announced by VoiceOver. */\n\theight: 1px; /* ensures content is announced by VoiceOver. */\n\tmargin: -1px; /* hide or clip content that does not fit into a 1-pixel visible area. */\n\tpadding: 0; /* hide or clip content that does not fit into a 1-pixel visible area. */\n\tborder: 0;\n\tclip: rect(1px, 1px, 1px, 1px); /* clip removes any visible trace of the element */\n\t-webkit-clip-path: inset(50%); /* clip removes any visible trace of the element */\n\tclip-path: inset(50%); /* clip removes any visible trace of the element */\n"},81477:(e,t,i)=>{"use strict";i.d(t,{HT:()=>l,TG:()=>s,Tq:()=>c});var n=i(84782),r=function(e){return"@media (min-width: ".concat("".concat(e,"px"),")")},o=function(e){return"@media (max-width: ".concat("".concat(e-.1,"px"),")")},a=function(e,t){return"@media (min-width: ".concat("".concat(e,"px"),") and (max-width: ","".concat(t-.1,"px"),")")},l={mobile:r(n.f.mobile),mobileMedium:r(n.f.mobileMedium),mobileLandscape:r(n.f.mobileLandscape),phablet:r(n.f.phablet),tablet:r(n.f.tablet),desktop:r(n.f.desktop),leftCol:r(n.f.leftCol),wide:r(n.f.wide)},s={mobile:o(n.f.mobile),mobileMedium:o(n.f.mobileMedium),mobileLandscape:o(n.f.mobileLandscape),phablet:o(n.f.phablet),tablet:o(n.f.tablet),desktop:o(n.f.desktop),leftCol:o(n.f.leftCol),wide:o(n.f.wide)},c={mobile:{and:{mobileMedium:a(n.f.mobile,n.f.mobileMedium),mobileLandscape:a(n.f.mobile,n.f.mobileLandscape),phablet:a(n.f.mobile,n.f.phablet),tablet:a(n.f.mobile,n.f.tablet),desktop:a(n.f.mobile,n.f.desktop),leftCol:a(n.f.mobile,n.f.leftCol),wide:a(n.f.mobileMedium,n.f.wide)}},mobileMedium:{and:{mobileLandscape:a(n.f.mobileMedium,n.f.mobileLandscape),phablet:a(n.f.mobileMedium,n.f.phablet),tablet:a(n.f.mobileMedium,n.f.tablet),desktop:a(n.f.mobileMedium,n.f.desktop),leftCol:a(n.f.mobileMedium,n.f.leftCol),wide:a(n.f.mobileMedium,n.f.wide)}},mobileLandscape:{and:{phablet:a(n.f.mobileLandscape,n.f.phablet),tablet:a(n.f.mobileLandscape,n.f.tablet),desktop:a(n.f.mobileLandscape,n.f.desktop),leftCol:a(n.f.mobileLandscape,n.f.leftCol),wide:a(n.f.mobileLandscape,n.f.wide)}},phablet:{and:{tablet:a(n.f.phablet,n.f.tablet),desktop:a(n.f.phablet,n.f.desktop),leftCol:a(n.f.phablet,n.f.leftCol),wide:a(n.f.phablet,n.f.wide)}},tablet:{and:{desktop:a(n.f.tablet,n.f.desktop),leftCol:a(n.f.tablet,n.f.leftCol),wide:a(n.f.tablet,n.f.wide)}},desktop:{and:{leftCol:a(n.f.desktop,n.f.leftCol),wide:a(n.f.desktop,n.f.wide)}},leftCol:{and:{wide:a(n.f.leftCol,n.f.wide)}}}},57718:(e,t,i)=>{"use strict";i.d(t,{M:()=>s});var n=i(50484),r=i(24017),o=i(72657),a=i(26633),l=function(e){var t=e.size,i=e.theme;return(0,n.jsx)("svg",{width:t?a.RK[t]:void 0,height:void 0,viewBox:"-3 -3 30 30",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0,children:(0,n.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M23 10.75h-1.25l-.6-4.525L15.4 12 14 10.575l5.725-5.75-4.475-.575V3h7.275l.475.475zM11 8 9.975 9H3v10h16v-5l.975-1H21v6.975L19.975 21h-18L1 19.975V8l.975-1H11z",fill:null==i?void 0:i.fill})})},s=function(e){var t=e.size,i=e.theme,a=e.isAnnouncedByScreenReader,s=void 0!==a&&a;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(l,{size:t,theme:i}),s?(0,n.jsx)("span",{css:(0,r.css)(o.Q,";"),children:"External link"}):""]})}},56297:(e,t,i)=>{"use strict";i.d(t,{N:()=>u});var n=i(62335),r=i(5926),o=i(50484),a=i(39856),l=i(45390),s=["priority","icon","iconSide","cssOverrides","children","theme"];function c(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function d(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?c(Object(i),!0).forEach((function(t){(0,n.A)(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):c(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}var u=function(e){var t=e.priority,i=void 0===t?"primary":t,n=e.icon,c=e.iconSide,u=void 0===c?"left":c,f=e.cssOverrides,p=e.children,m=e.theme,h=(0,r.A)(e,s);return(0,o.jsx)("a",d(d({css:(0,l.$Y)({priority:i,iconSvg:n,iconSide:u,cssOverrides:f,theme:m})},h),{},{children:(0,a.F)({children:p,iconSvg:n,iconSide:u})}))}}}]);
//# sourceMappingURL=LatestLinks-importable.client.web.legacy.74dce30844fb155d12ad.js.map