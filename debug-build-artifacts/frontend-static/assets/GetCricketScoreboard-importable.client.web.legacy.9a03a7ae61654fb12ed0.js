(self.webpackChunk_guardian_dotcom_rendering=self.webpackChunk_guardian_dotcom_rendering||[]).push([[8970,9442],{41467:(e,t,n)=>{"use strict";n.d(t,{c:()=>f});var i=n(50484),r=n(5240),o=n(53431),a=n(7693),l=n(77663),s=n(45778),c=function(e,t,n){return e.toLocaleDateString(t,{weekday:"short",timeZone:n})},d=function(e,t,n){return e.toLocaleDateString(t,{day:"numeric",month:"short",year:"numeric",timeZone:n}).replaceAll(",","")},u=function(e,t,n){return e.toLocaleTimeString(t,{hour12:!1,hour:"2-digit",minute:"2-digit",timeZoneName:"short",timeZone:n}).replace(":",".")},f=function(e){var t=e.date,n=e.showWeekday,f=e.showDate,p=e.showTime,m=e.display,g=void 0===m?"absolute":m,h=e.absoluteServerTimes,b=void 0===h||h,v=(0,a.U)().editionId,w=(0,o.iR)(v),x=w.dateLocale,y=w.timeZone,S=t.getTime();return"relative"===g?(0,i.jsx)(l.u,{priority:"enhancement",defer:{until:"visible"},children:(0,i.jsx)(s.RelativeTime,{then:S,now:b?864e13:6e4*Math.floor(Date.now()/6e4),editionId:v})}):(0,i.jsx)("time",{dateTime:t.toISOString(),"data-locale":x,title:t.toLocaleDateString(x,{hour:"2-digit",minute:"2-digit",weekday:"long",year:"numeric",month:"long",day:"numeric",timeZoneName:"long",timeZone:y}),children:[n&&c(t,x,y),f&&d(t,x,y),p&&u(t,x,y)].filter(r.K).join(" ")})}},90790:(e,t,n)=>{"use strict";n.r(t),n.d(t,{GetCricketScoreboard:()=>I});var i=n(50484),r=n(95644),o=n(73556),a=n(22820),l=n(24017),s=n(81477),c=n(71653),d=n(59648),u=n(1954),f=n(41467),p={name:"1snrpgp",styles:"border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px"},m=(0,l.css)(s.TG.mobileLandscape,"{padding:10px 10px 0 10px;}",s.Tq.mobileLandscape.and.desktop,"{padding:10px 20px 0 20px;}"),g=(0,l.css)("width:100%;",c.WuG,";"),h=(0,l.css)("text-align:left;font-weight:bold;border-top:1px solid ",(0,u.M)("--cricket-scoreboard-border-top"),";border-collapse:inherit;padding-top:",d.x[2],"px;padding-bottom:",d.x[2],"px;"),b=(0,l.css)("border-top:1px solid ",(0,u.M)("--cricket-scoreboard-divider"),";"),v=(0,l.css)("padding-top:",d.x[3],"px;padding-bottom:",d.x[3],"px;"),w={name:"1efi8gv",styles:"font-weight:bold"},x=(0,l.css)("padding-top:",d.x[3],"px;padding-bottom:",d.x[2],"px;"),y=(0,l.css)("color:",(0,u.M)("--cricket-scoreboard-link-text"),";text-decoration:none;:hover{color:",(0,u.M)("--cricket-scoreboard-link-text"),";text-decoration:underline;}"),S=function(e){var t=e.innings,n=e.short;return t.declared?"".concat(t.runsScored," - ").concat(t.fallOfWicket.length," declared"):t.forfeited?"".concat(t.runsScored," - ").concat(t.fallOfWicket.length," forfeited"):10===t.fallOfWicket.length?n?t.runsScored:"".concat(t.runsScored," all out"):"".concat(t.runsScored," - ").concat(t.fallOfWicket.length)},L=function(e){var t,n=e.match,r=e.home,o=null===(t=n.teams.find((function(e){return e.home===r})))||void 0===t?void 0:t.name,l=n.innings.filter((function(e){return e.battingTeam===o})),s=(0,a.A)(l,2),c=s[0],d=s[1];return c&&d?(0,i.jsxs)("p",{children:[S({innings:c,short:!0})," & ",S({innings:d})," (",d.overs," overs)"]}):c?(0,i.jsxs)("p",{children:[S({innings:c})," (",c.overs," overs)"]}):(0,i.jsx)("p",{children:"Yet to bat"})},D=function(e){var t,n,r=e.scorecardUrl,o=e.match,a=new Date(o.gameDate);return(0,i.jsxs)("div",{css:m,children:[(0,i.jsxs)("h2",{css:p,children:[(0,i.jsx)(f.c,{date:a,showWeekday:!1,showDate:!0,showTime:!1}),o.competitionName,", ",o.venueName]}),(0,i.jsxs)("table",{css:g,children:[(0,i.jsx)("thead",{css:p,children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"Team name"}),(0,i.jsx)("td",{children:"Score"})]})}),(0,i.jsxs)("tbody",{children:[(0,i.jsxs)("tr",{css:b,children:[(0,i.jsx)("td",{css:[v,w],children:null===(t=o.teams.find((function(e){return!!e.home})))||void 0===t?void 0:t.name}),(0,i.jsx)("td",{css:v,children:(0,i.jsx)(L,{match:o,home:!0})})]}),(0,i.jsxs)("tr",{css:b,children:[(0,i.jsx)("td",{css:[v,w],children:null===(n=o.teams.find((function(e){return!e.home})))||void 0===n?void 0:n.name}),(0,i.jsx)("td",{css:v,children:(0,i.jsx)(L,{match:o,home:!1})})]})]}),(0,i.jsxs)("caption",{css:h,children:[o.competitionName,", ",o.venueName]}),(0,i.jsx)("tfoot",{children:(0,i.jsx)("tr",{css:b,children:(0,i.jsx)("td",{css:x,colSpan:2,children:(0,i.jsx)("a",{css:y,href:r,children:"View full scorecard"})})})})]})]})},k=n(87057),j=function(){return(0,i.jsx)(k.O,{height:172})},I=function(e){var t=e.matchUrl,n={errorRetryCount:1};e.format.design===r.vw.LiveBlog&&(n.refreshInterval=14e3);var a=(0,o.g)(t,n),l=a.data,s=a.error;return a.loading?(0,i.jsx)(j,{}):s?(window.guardian.modules.sentry.reportError(s,"cricket-scoreboard"),null):null!=l&&l.match.matchId?(0,i.jsx)(D,{match:l.match,scorecardUrl:l.scorecardUrl}):null}},77663:(e,t,n)=>{"use strict";n.d(t,{u:()=>r});var i=n(50484),r=function(e){var t=e.priority,n=e.defer,r=e.children,o=e.role,a="visible"===(null==n?void 0:n.until)?n.rootMargin:void 0,l=String(r.type.name);return(0,i.jsx)("gu-island",{name:l,priority:t,deferUntil:null==n?void 0:n.until,props:JSON.stringify(r.props),rootMargin:a,"data-spacefinder-role":o,children:r})}},87057:(e,t,n)=>{"use strict";n.d(t,{O:()=>m});var i,r=n(34660),o=n(50484),a=n(24017),l=n(65656),s=n(50641),c=n(59648),d=s.M.neutral[93],u=(0,a.keyframes)(i||(i=(0,r.A)(["\n  0% {\n    background-position: -1500px 0;\n  }\n  100% {\n    background-position: 1500px 0;\n  }\n"]))),f=function(e){return(0,a.css)("animation:",u," 2s infinite linear;background:linear-gradient(\n\t\tto right,\n\t\t",e," 4%,\n\t\twhite 25%,\n\t\t",e," 36%\n\t);background-size:1500px 100%;")},p={name:"1ff36h2",styles:"flex-grow:1"},m=function(e){var t=e.height,n=e.rootId,i=e.width,r=e.spaceBelow,s=e.spaceLeft,u=e.shouldShimmer,m=void 0===u||u,g=e.backgroundColor,h=void 0===g?d:g;return(0,o.jsx)("div",{id:n,css:p,"data-name":"placeholder",children:(0,o.jsx)("div",{css:(0,a.css)("min-height:",t,"px;width:",(0,l.b)(i)?"100%":"".concat(i,"px"),";margin-bottom:",r&&c.x[r],"px;margin-left:",s&&c.x[s],"px;background-color:",h,";",m&&f(h),";")})})}},45778:(e,t,n)=>{"use strict";n.r(t),n.d(t,{RelativeTime:()=>f});var i=n(22820),r=n(50484),o=n(25995),a=n(5240),l=n(67400),s=n(53431),c=n(88528),d=function(e){var t=e.then,n=e.now,i=e.precision;return Math.floor((n-t)/i)*i},u=function(e,t,n){var i=(0,o.f)(e,{now:"server"===n?t:e+d({then:e,now:Date.now(),precision:6e4})});return(0,a.K)(i)?i:"now"},f=function(e){var t=e.then,n=e.now,o=e.editionId,a=(0,c.E)({repeat:!0}),d=(0,i.A)(a,2),f=d[0],p=d[1],m=(0,l.useState)(u(t,n,"server")),g=(0,i.A)(m,2),h=g[0],b=g[1];(0,l.useEffect)((function(){var e=function(){return b(u(t,n,"client"))};if(e(),f){var i=setInterval(e,6e4);return function(){return clearInterval(i)}}}),[f,n,t]);var v=new Date(t),w=(0,s.iR)(o),x=w.dateLocale,y=w.timeZone;return(0,r.jsx)("time",{ref:p,dateTime:v.toISOString(),"data-locale":x,title:v.toLocaleDateString(x,{hour:"2-digit",minute:"2-digit",weekday:"long",year:"numeric",month:"long",day:"numeric",timeZoneName:"long",timeZone:y}),children:h})}},95644:(e,t,n)=>{"use strict";var i,r,o,a;n.d(t,{A$:()=>a,B0:()=>o,M2:()=>d,Ns:()=>r,vw:()=>i}),function(e){e[e.Standard=0]="Standard",e[e.Picture=1]="Picture",e[e.Gallery=2]="Gallery",e[e.Audio=3]="Audio",e[e.Video=4]="Video",e[e.Review=5]="Review",e[e.Analysis=6]="Analysis",e[e.Explainer=7]="Explainer",e[e.Comment=8]="Comment",e[e.Letter=9]="Letter",e[e.Feature=10]="Feature",e[e.LiveBlog=11]="LiveBlog",e[e.DeadBlog=12]="DeadBlog",e[e.Recipe=13]="Recipe",e[e.MatchReport=14]="MatchReport",e[e.Interview=15]="Interview",e[e.Editorial=16]="Editorial",e[e.Quiz=17]="Quiz",e[e.Interactive=18]="Interactive",e[e.PhotoEssay=19]="PhotoEssay",e[e.Obituary=20]="Obituary",e[e.Correction=21]="Correction",e[e.FullPageInteractive=22]="FullPageInteractive",e[e.NewsletterSignup=23]="NewsletterSignup",e[e.Timeline=24]="Timeline",e[e.Profile=25]="Profile"}(i||(i={})),function(e){e[e.Standard=0]="Standard",e[e.Immersive=1]="Immersive",e[e.Showcase=2]="Showcase",e[e.NumberedList=3]="NumberedList"}(r||(r={})),function(e){e[e.News=0]="News",e[e.Opinion=1]="Opinion",e[e.Sport=2]="Sport",e[e.Culture=3]="Culture",e[e.Lifestyle=4]="Lifestyle"}(o||(o={})),function(e){e[e.SpecialReport=5]="SpecialReport",e[e.Labs=6]="Labs",e[e.SpecialReportAlt=7]="SpecialReportAlt"}(a||(a={}));var l=function(e){switch(e.design){case"ArticleDesign":default:return i.Standard;case"PictureDesign":return i.Picture;case"GalleryDesign":return i.Gallery;case"AudioDesign":return i.Audio;case"VideoDesign":return i.Video;case"ReviewDesign":return i.Review;case"AnalysisDesign":return i.Analysis;case"CommentDesign":return i.Comment;case"LetterDesign":return i.Letter;case"FeatureDesign":return i.Feature;case"LiveBlogDesign":return i.LiveBlog;case"DeadBlogDesign":return i.DeadBlog;case"RecipeDesign":return i.Recipe;case"MatchReportDesign":return i.MatchReport;case"InterviewDesign":return i.Interview;case"EditorialDesign":return i.Editorial;case"QuizDesign":return i.Quiz;case"InteractiveDesign":return i.Interactive;case"PhotoEssayDesign":return i.PhotoEssay;case"ObituaryDesign":return i.Obituary;case"FullPageInteractiveDesign":return i.FullPageInteractive;case"NewsletterSignupDesign":return i.NewsletterSignup;case"ExplainerDesign":return i.Explainer;case"TimelineDesign":return i.Timeline;case"ProfileDesign":return i.Profile}},s=function(e){var t=e.display,n=e.design;switch(t){case"StandardDisplay":default:return r.Standard;case"ImmersiveDisplay":return"CommentDesign"===n?r.Standard:r.Immersive;case"ShowcaseDisplay":return r.Showcase;case"NumberedListDisplay":return r.NumberedList}},c=function(e){switch(e.theme){case"NewsPillar":default:return o.News;case"OpinionPillar":return o.Opinion;case"SportPillar":return o.Sport;case"CulturePillar":return o.Culture;case"LifestylePillar":return o.Lifestyle;case"SpecialReportTheme":return a.SpecialReport;case"SpecialReportAltTheme":return a.SpecialReportAlt;case"Labs":return a.Labs}},d=function(e){return{design:l(e),display:s(e),theme:c(e)}}},53431:(e,t,n)=>{"use strict";n.d(t,{T$:()=>r,b1:()=>l,iR:()=>a,y4:()=>s});var i=n(57364),r=[{url:"/preference/edition/uk",editionId:"UK",pageId:"uk",longTitle:"UK edition",title:"UK edition",dateLocale:"en-gb",timeZone:"Europe/London",langLocale:"en-GB",hasEditionalisedPages:!0,shortTitle:"UK"},{url:"/preference/edition/us",editionId:"US",pageId:"us",longTitle:"US edition",title:"US edition",dateLocale:"en-us",timeZone:"America/New_York",langLocale:"en-US",hasEditionalisedPages:!0,shortTitle:"US"},{url:"/preference/edition/au",editionId:"AU",pageId:"au",longTitle:"Australia edition",title:"AU edition",dateLocale:"en-au",timeZone:"Australia/Sydney",langLocale:"en-AU",hasEditionalisedPages:!0,shortTitle:"Aus"},{url:"/preference/edition/eur",editionId:"EUR",pageId:"europe",longTitle:"Europe edition",title:"Europe edition",dateLocale:"en-gb",timeZone:"Europe/Paris",langLocale:"en-EU",hasEditionalisedPages:!1,shortTitle:"Eur"},{url:"/preference/edition/int",editionId:"INT",pageId:"international",longTitle:"International edition",title:"International edition",dateLocale:"en-gb",timeZone:"Europe/London",langLocale:"en",hasEditionalisedPages:!1,shortTitle:"Int"}],o=r[0],a=function(e){var t;return null!==(t=r.find((function(t){return t.editionId===e})))&&void 0!==t?t:o},l=function(e){return r.find((function(t){return t.pageId===e}))},s=((0,i.E)(r.map((function(e){return e.editionId}))),function(e){return r.some((function(t){return t.pageId===e}))})},73556:(e,t,n)=>{"use strict";n.d(t,{g:()=>a});var i=n(65656),r=n(29273);function o(e){if(!e.ok)throw Error(e.statusText||"useApi | An api call returned HTTP status ".concat(e.status));return e}var a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0,n=arguments.length>2?arguments[2]:void 0,a=(0,r.Ay)(e,function(e){return function(t){return fetch(t,e).then(o).then((function(e){return e.json()}))}}(n),t),l=a.data,s=a.error;return{data:l,error:s,loading:!!e&&(0,i.b)(s)&&(0,i.b)(l)}}},88528:(e,t,n)=>{"use strict";n.d(t,{E:()=>l});var i=n(22820),r=n(44165),o=n.n(r),a=n(67400),l=function(e){var t,n=(0,a.useState)(!1),r=(0,i.A)(n,2),l=r[0],s=r[1],c=(0,a.useState)(null!==(t=e.node)&&void 0!==t?t:null),d=(0,i.A)(c,2),u=d[0],f=d[1],p=(0,a.useRef)(null),m=(0,a.useCallback)((function(t){var n=(0,i.A)(t,1)[0];n&&(n.isIntersecting?s(!0):e.repeat&&s(!1))}),[e.repeat]),g=e.debounce?o()(m,200):m;return(0,a.useEffect)((function(){e.node&&f(e.node)}),[e.node]),(0,a.useEffect)((function(){if(u&&"IntersectionObserver"in window)return p.current=new window.IntersectionObserver(g,e),p.current.observe(u),function(){var e;return null===(e=p.current)||void 0===e?void 0:e.disconnect()}}),[u,e,g]),(0,a.useEffect)((function(){var t;!e.repeat&&l&&(null===(t=p.current)||void 0===t||t.disconnect())}),[l,e.repeat]),[l,f]}},1954:(e,t,n)=>{"use strict";n.d(t,{M:()=>i});var i=function(e){return"var(".concat(e,")")}},44165:(e,t,n)=>{var i=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,a=/^0o[0-7]+$/i,l=parseInt,s="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g,c="object"==typeof self&&self&&self.Object===Object&&self,d=s||c||Function("return this")(),u=Object.prototype.toString,f=Math.max,p=Math.min,m=function(){return d.Date.now()};function g(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function h(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==u.call(e)}(e))return NaN;if(g(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=g(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var n=o.test(e);return n||a.test(e)?l(e.slice(2),n?2:8):r.test(e)?NaN:+e}e.exports=function(e,t,n){var i,r,o,a,l,s,c=0,d=!1,u=!1,b=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function v(t){var n=i,o=r;return i=r=void 0,c=t,a=e.apply(o,n)}function w(e){var n=e-s;return void 0===s||n>=t||n<0||u&&e-c>=o}function x(){var e=m();if(w(e))return y(e);l=setTimeout(x,function(e){var n=t-(e-s);return u?p(n,o-(e-c)):n}(e))}function y(e){return l=void 0,b&&i?v(e):(i=r=void 0,a)}function S(){var e=m(),n=w(e);if(i=arguments,r=this,s=e,n){if(void 0===l)return function(e){return c=e,l=setTimeout(x,t),d?v(e):a}(s);if(u)return l=setTimeout(x,t),v(s)}return void 0===l&&(l=setTimeout(x,t)),a}return t=h(t)||0,g(n)&&(d=!!n.leading,o=(u="maxWait"in n)?f(h(n.maxWait)||0,t):o,b="trailing"in n?!!n.trailing:b),S.cancel=function(){void 0!==l&&clearTimeout(l),c=0,i=s=r=l=void 0},S.flush=function(){return void 0===l?a:y(m())},S}},34660:(e,t,n)=>{"use strict";function i(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}n.d(t,{A:()=>i})},25995:(e,t,n)=>{"use strict";n.d(t,{f:()=>o});var i=36e5,r=864e5,o=function(e,t){var n,o,a,l,s,c=e,d=null!==(n=null==t?void 0:t.now)&&void 0!==n?n:Date.now(),u=null!==(o=null==t?void 0:t.verbose)&&void 0!==o&&o,f=(s=(l={then:c,now:d}).now-l.then)<6e4?{length:s/1e3,unit:"second"}:s<i?{length:s/6e4,unit:"minute"}:s<r?{length:s/i,unit:"hour"}:{length:s/r,unit:"day"},p=f.length,m=f.unit,g=Math.round(p);if(g<0)return!1;switch(m){case"second":return g>55?u?"1 minute ago":"1m ago":g<15?"now":"".concat(g,u?" seconds ago":"s ago");case"minute":return g>55?u?"1 hour ago":"1h ago":u?1==g?"1 minute ago":"".concat(g," minutes ago"):"".concat(g,"m ago");case"hour":return u?1==g?"1 hour ago":"".concat(g," hours ago"):"".concat(g,"h ago");case"day":var h;return p<(null!==(h=null==t?void 0:t.daysUntilAbsolute)&&void 0!==h?h:7)?u?function(e,t){var n=new Date(t),i=new Date(t);return i.setDate(n.getDate()-1),new Date(e).toDateString()===i.toDateString()}(c,d)?"Yesterday ".concat((a=new Date(c),"".concat(a.getHours(),".").concat(a.getMinutes().toString().padStart(2,"0")))):1==g?"1 day ago":"".concat(g," days ago"):"".concat(g,"d ago"):new Date(c).toLocaleString("en-GB",{day:"numeric",month:u?"long":"short",year:"numeric"})}}},84782:(e,t,n)=>{"use strict";n.d(t,{f:()=>i});var i={desktop:980,leftCol:1140,mobile:320,mobileLandscape:480,mobileMedium:375,phablet:660,tablet:740,wide:1300}},81477:(e,t,n)=>{"use strict";n.d(t,{HT:()=>l,TG:()=>s,Tq:()=>c});var i=n(84782),r=function(e){return"@media (min-width: ".concat("".concat(e,"px"),")")},o=function(e){return"@media (max-width: ".concat("".concat(e-.1,"px"),")")},a=function(e,t){return"@media (min-width: ".concat("".concat(e,"px"),") and (max-width: ","".concat(t-.1,"px"),")")},l={mobile:r(i.f.mobile),mobileMedium:r(i.f.mobileMedium),mobileLandscape:r(i.f.mobileLandscape),phablet:r(i.f.phablet),tablet:r(i.f.tablet),desktop:r(i.f.desktop),leftCol:r(i.f.leftCol),wide:r(i.f.wide)},s={mobile:o(i.f.mobile),mobileMedium:o(i.f.mobileMedium),mobileLandscape:o(i.f.mobileLandscape),phablet:o(i.f.phablet),tablet:o(i.f.tablet),desktop:o(i.f.desktop),leftCol:o(i.f.leftCol),wide:o(i.f.wide)},c={mobile:{and:{mobileMedium:a(i.f.mobile,i.f.mobileMedium),mobileLandscape:a(i.f.mobile,i.f.mobileLandscape),phablet:a(i.f.mobile,i.f.phablet),tablet:a(i.f.mobile,i.f.tablet),desktop:a(i.f.mobile,i.f.desktop),leftCol:a(i.f.mobile,i.f.leftCol),wide:a(i.f.mobileMedium,i.f.wide)}},mobileMedium:{and:{mobileLandscape:a(i.f.mobileMedium,i.f.mobileLandscape),phablet:a(i.f.mobileMedium,i.f.phablet),tablet:a(i.f.mobileMedium,i.f.tablet),desktop:a(i.f.mobileMedium,i.f.desktop),leftCol:a(i.f.mobileMedium,i.f.leftCol),wide:a(i.f.mobileMedium,i.f.wide)}},mobileLandscape:{and:{phablet:a(i.f.mobileLandscape,i.f.phablet),tablet:a(i.f.mobileLandscape,i.f.tablet),desktop:a(i.f.mobileLandscape,i.f.desktop),leftCol:a(i.f.mobileLandscape,i.f.leftCol),wide:a(i.f.mobileLandscape,i.f.wide)}},phablet:{and:{tablet:a(i.f.phablet,i.f.tablet),desktop:a(i.f.phablet,i.f.desktop),leftCol:a(i.f.phablet,i.f.leftCol),wide:a(i.f.phablet,i.f.wide)}},tablet:{and:{desktop:a(i.f.tablet,i.f.desktop),leftCol:a(i.f.tablet,i.f.leftCol),wide:a(i.f.tablet,i.f.wide)}},desktop:{and:{leftCol:a(i.f.desktop,i.f.leftCol),wide:a(i.f.desktop,i.f.wide)}},leftCol:{and:{wide:a(i.f.leftCol,i.f.wide)}}}}}]);
//# sourceMappingURL=GetCricketScoreboard-importable.client.web.legacy.9a03a7ae61654fb12ed0.js.map