"use strict";(self.webpackChunk_guardian_dotcom_rendering=self.webpackChunk_guardian_dotcom_rendering||[]).push([[1564],{92610:(e,t,r)=>{r.d(t,{L:()=>d,j:()=>u});var n=r(42376),i=r(50484),a=r(24017),o=r(59648),l=r(71653),s=r(25549),c=(0,a.css)("position:absolute;top:",o.x[2],"px;right:",o.x[2],"px;background-color:rgba(0, 0, 0, 0.7);width:fit-content;padding:",o.x[1],"px ",o.x[3],"px;border-radius:",o.x[3],"px;color:white;",l.rDY,";");function d(e){if("undefined"===(0,n.A)(e)||0===e)return"";var t=Number(e),r=Math.floor(t/3600),i=Math.floor(t%3600/60),a=Math.floor(t%3600%60),o=[];return r>0&&o.push(r),0===r&&i>0&&0===a?o.push("".concat(i,":00")):r>0&&i<10?o.push("0".concat(i)):o.push(i),a>0&&(a<10?o.push("0".concat(a)):o.push(a)),o.join(":")}var u=function(e){var t=e.mediaDuration,r=e.imagePositionOnDesktop,n=e.imagePositionOnMobile;return"left"===r?null:"left"===n?(0,i.jsx)(s.L,{until:"tablet",children:(0,i.jsx)("div",{css:c,children:(0,i.jsx)("p",{children:d(t)})})}):(0,i.jsx)("div",{css:c,children:(0,i.jsx)("p",{children:d(t)})})}},80297:(e,t,r)=>{r.d(t,{g:()=>O});var n=r(22820),i=r(50484),a=r(24017),o=r(71653),l=r(81477),s=r(59648),c=r(67400),d=r(80971),u=r(1954),p=r(28673),b=r(73951),x=r(30526),g={borderTertiary:(0,u.M)("--carousel-chevron-border"),textTertiary:(0,u.M)("--carousel-chevron"),backgroundTertiaryHover:(0,u.M)("--carousel-chevron-hover")},m={borderTertiary:(0,u.M)("--carousel-chevron-border-disabled"),textTertiary:(0,u.M)("--carousel-chevron-disabled"),backgroundTertiaryHover:"transparent"},h=(0,a.css)("display:none;",l.HT.tablet,"{display:flex;gap:",s.x[1],"px;margin-left:auto;}"),f=function(e){var t=e.previousButtonEnabled,r=e.nextButtonEnabled,n=e.onClickPreviousButton,a=e.onClickNextButton,o=e.dataLinkNameNextButton,l=e.dataLinkNamePreviousButton;return(0,i.jsxs)("div",{"aria-controls":"carousel","aria-label":"carousel arrows",css:h,children:[(0,i.jsx)(p.$,{hideLabel:!0,iconSide:"left",icon:(0,i.jsx)(b.P,{}),onClick:n,priority:"tertiary",theme:t?g:m,size:"small",disabled:!t,"aria-label":"previous",value:"previous","data-link-name":l}),(0,i.jsx)(p.$,{hideLabel:!0,iconSide:"left",icon:(0,i.jsx)(x.s,{}),onClick:a,priority:"tertiary",theme:r?g:m,size:"small",disabled:!r,"aria-label":"next",value:"next","data-link-name":o})]})},v=o.fe4,y=o.BU7,k=20,w=10,j=(0,a.css)("position:relative;margin-left:-",w,"px;margin-right:-",w,"px;",l.HT.mobileLandscape,"{margin-left:-",k,"px;margin-right:-",k,"px;}",l.HT.tablet,"{margin-left:",10,"px;margin-right:",10,"px;}",l.HT.leftCol,"{margin-left:0;}"),M=(0,a.css)("display:flex;flex-direction:column-reverse;",l.HT.tablet,"{gap:",s.x[2],"px;}",l.HT.wide,"{flex-direction:row;gap:",s.x[1],"px;}",l.Tq.tablet.and.leftCol,"{[data-container-level='Primary'] &{margin-top:calc(\n\t\t\t\t-",v.fontSize," * ",v.lineHeight," -\n\t\t\t\t\t",s.x[3],"px\n\t\t\t);}[data-container-level='Secondary'] &{margin-top:calc(\n\t\t\t\t-",y.fontSize," * ",y.lineHeight," -\n\t\t\t\t\t",s.x[3],"px\n\t\t\t);}}",l.HT.wide,"{margin-right:-",70,"px;}"),T=(0,a.css)("display:grid;width:100%;grid-auto-columns:1fr;grid-auto-flow:column;gap:20px;overflow-x:auto;overflow-y:hidden;scroll-snap-type:x mandatory;scroll-behavior:smooth;overscroll-behavior:contain auto;::-webkit-scrollbar{display:none;}scrollbar-width:none;padding-left:",w,"px;padding-right:",w,"px;scroll-padding-left:",w,"px;",l.HT.mobileLandscape,"{padding-left:",k,"px;padding-right:",k,"px;scroll-padding-left:",k,"px;}",l.HT.tablet,"{padding-left:0;padding-right:0;scroll-padding-left:0;}",l.HT.leftCol,"{padding-left:",10,"px;scroll-padding-left:",10,"px;}"),P=(0,a.css)("display:flex;scroll-snap-align:start;grid-area:span 1;position:relative;:not(:first-child)::before{content:'';position:absolute;top:0;bottom:0;left:-10px;width:1px;background-color:",(0,u.M)("--card-border-top"),";transform:translateX(-50%);}"),S=function(e,t,r){var n=s.x[8]/t+20,i=20*(r-1)/r;return(0,a.css)("grid-template-columns:repeat(\n\t\t\t",e,",\n\t\t\tcalc(\n\t\t\t\t(100% / ",t,") - ",n,"px +\n\t\t\t\t\t",w/t,"px\n\t\t\t)\n\t\t);",l.HT.mobileLandscape,"{grid-template-columns:repeat(\n\t\t\t\t",e,",\n\t\t\t\tcalc(\n\t\t\t\t\t(100% / ",t,") -\n\t\t\t\t\t\t",n,"px +\n\t\t\t\t\t\t",k/t,"px\n\t\t\t\t)\n\t\t\t);}",l.HT.tablet,"{grid-template-columns:repeat(\n\t\t\t\t",e,",\n\t\t\t\tcalc(",100/r,"% - ",i,"px)\n\t\t\t);}")},O=function(e){var t=e.children,r=e.carouselLength,a=e.visibleCardsOnMobile,o=e.visibleCardsOnTablet,l=(0,c.useRef)(null),s=(0,c.useState)(!1),u=(0,n.A)(s,2),p=u[0],b=u[1],x=(0,c.useState)(!0),g=(0,n.A)(x,2),m=g[0],h=g[1],v=r>o,y=function(e){var t,r;if(l.current){var n=null!==(t=null===(r=l.current.querySelector("li"))||void 0===r?void 0:r.offsetWidth)&&void 0!==t?t:0,i="left"===e?-n:n;l.current.scrollBy({left:i,behavior:"smooth"})}},k=function(){var e,t,r=l.current;if(r){var n=r.scrollLeft,i=r.scrollWidth-r.clientWidth,a=null!==(e=null===(t=r.querySelector("li"))||void 0===t?void 0:t.offsetWidth)&&void 0!==e?e:0;b(n>a/2),h(n<i-a/2)}},w=function(e){var t=!1;return function(){t||(e(),t=!0,setTimeout((function(){return t=!1}),200))}};return(0,c.useEffect)((function(){var e=l.current;if(e)return e.addEventListener("scroll",w(k)),function(){e.removeEventListener("scroll",w(k))}}),[]),(0,i.jsxs)("div",{css:[j,v&&M],children:[(0,i.jsx)("ol",{ref:l,css:[T,S(r,a,o)],"data-heatphan-type":"carousel",children:t}),v&&(0,i.jsx)(f,{previousButtonEnabled:p,nextButtonEnabled:m,onClickPreviousButton:function(){return y("left")},onClickNextButton:function(){return y("right")},dataLinkNamePreviousButton:(0,d.K)("carousel","previous-button"),dataLinkNameNextButton:(0,d.K)("carousel","next-button")})]})};O.Item=function(e){var t=e.children;return(0,i.jsx)("li",{css:P,children:t})}},26441:(e,t,r)=>{r.r(t),r.d(t,{ScrollableFeature:()=>D});var n=r(50484),i=r(95644),a=r(62335),o=r(24017),l=r(59648),s=r(56297),c=r(24755),d=r(230),u=r(1954),p=r(48228),b=r(86883),x=r(41794),g=r(71019),m=r(5077),h=r(25586),f=r(13538),v=r(97872),y=r(40669),k=r(77663),w=r(92610),j=r(98843),M=r(87068);function T(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var P={name:"qscgrg",styles:"display:flex;flex-direction:column;justify-content:space-between;width:100%;position:relative;@media not all and (min-resolution: 0.001dpcm){@supports (-webkit-appearance: none) and (not (stroke-color: transparent)){display:grid;grid-auto-rows:min-content;align-content:start;}}color:inherit;text-decoration:none"},S=(0,o.css)(":hover .image-overlay{position:absolute;top:0;width:100%;height:100%;left:0;background-color:",(0,u.M)("--card-background-hover"),";}:hover .card-headline .show-underline{text-decoration:underline;}"),O=(0,o.css)("position:absolute;bottom:0;left:0;right:0;display:flex;flex-direction:column;justify-content:flex-start;flex-grow:1;gap:",l.x[1],"px;padding:64px ",l.x[2],"px ",l.x[2],"px;mask-image:linear-gradient(\n\t\t180deg,\n\t\ttransparent 0px,\n\t\trgba(0, 0, 0, 0.0381) 8px,\n\t\trgba(0, 0, 0, 0.1464) 16px,\n\t\trgba(0, 0, 0, 0.3087) 24px,\n\t\trgba(0, 0, 0, 0.5) 32px,\n\t\trgba(0, 0, 0, 0.6913) 40px,\n\t\trgba(0, 0, 0, 0.8536) 48px,\n\t\trgba(0, 0, 0, 0.9619) 56px,\n\t\trgb(0, 0, 0) 64px\n\t);backdrop-filter:blur(12px) brightness(0.5);"),L=(0,o.css)("background-color:",(0,u.M)("--star-rating-background"),";color:",(0,u.M)("--star-rating-fill"),";margin-top:",l.x[1],"px;display:inline-block;width:fit-content;"),C=(0,o.css)("margin-top:",l.x[3],"px;"),A=function(e){var t=e.showClock,r=e.absoluteServerTimes,i=e.webPublicationDate;if(i){var a=function(e){return Math.abs((new Date).getTime()-new Date(e).getTime())/36e5<=12}(i);return(0,n.jsx)(p.K,{webPublication:{date:i,isWithinTwelveHours:a},showClock:t,absoluteServerTimes:r,isTagPage:!1,colour:(0,u.M)("--feature-card-footer-text")})}},E=function(e){var t=e.discussionId,r=e.linkTo,i=e.discussionApiUrl;return t&&i?(0,n.jsx)(s.N,(0,a.A)((0,a.A)((0,a.A)((0,a.A)((0,a.A)((0,a.A)({},d.z6,t),"data-ignore","global-link-styling"),"data-link-name","Comment count"),"href","".concat(r,"#comments")),"cssOverrides",(0,o.css)("z-index:",(0,c.f)("card-nested-link"),";color:inherit;font-family:inherit;font-size:inherit;line-height:inherit;text-decoration:none;min-height:10px;")),"children",(0,n.jsx)(k.u,{priority:"feature",defer:{until:"visible"},children:(0,n.jsx)(m.CardCommentCount,{discussionApiUrl:i,discussionId:t,colour:(0,u.M)("--feature-card-footer-text")})}))):null},H=function(e){var t=e.linkTo,r=e.format,s=e.headlineText,c=e.headlineSizes,d=e.byline,p=e.showByline,m=e.webPublicationDate,k=e.image,H=e.imagePositionOnDesktop,B=void 0===H?"top":H,D=e.imagePositionOnMobile,z=void 0===D?"left":D,I=e.imageSize,N=void 0===I?"small":I,U=e.trailText,R=e.imageLoading,V=e.showClock,F=e.mainMedia,J=e.canPlayInline,W=e.kickerText,X=e.showPulsingDot,K=e.dataLinkName,_=e.supportingContent,q=e.containerPalette,Q=e.discussionApiUrl,$=e.discussionId,G=e.isExternalLink,Y=e.absoluteServerTimes,Z=e.aspectRatio,ee=e.starRating,te=e.showQuotes,re=_&&_.length>0,ne="Video"===(null==F?void 0:F.type),ie=function(e){var t=e.imageUrl,r=e.imageAltText,n=e.mainMedia,i=e.canPlayInline;return n&&"Video"===n.type&&i?function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?T(Object(r),!0).forEach((function(t){(0,a.A)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):T(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({type:"video",mainMedia:n},t&&{imageUrl:t}):t?{type:"picture",imageUrl:t,imageAltText:r}:void 0}({imageUrl:null==k?void 0:k.src,imageAltText:null==k?void 0:k.altText,mainMedia:F,canPlayInline:J});return(0,n.jsx)(y.I,{format:r,children:(0,n.jsx)(v.X,{containerPalette:q,children:(0,n.jsxs)("div",{css:[P,S],children:[(0,n.jsx)(x.h,{linkTo:t,headlineText:s,dataLinkName:K,isExternalLink:G}),(0,n.jsx)("div",{css:[(0,o.css)("display:flex;flex-basis:100%;width:100%;gap:",l.x[2],"px;flex-direction:column;")],children:ie&&(0,n.jsxs)("div",{css:(0,o.css)("position:relative;background-color:",(0,u.M)("--feature-card-background"),";img{width:100%;display:block;}"),children:["video"===ie.type&&(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("div",{children:(0,n.jsx)(f.B,{mainImage:ie.imageUrl?ie.imageUrl:ie.mainMedia.images.reduce((function(e,t){return e.width>t.width?e:t})).url,imageSize:N,alt:s,loading:R,roundedCorners:!1,aspectRatio:Z})})}),"picture"===ie.type&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(f.B,{mainImage:ie.imageUrl,imageSize:N,alt:ie.imageAltText,loading:R,roundedCorners:!1,aspectRatio:Z}),ne&&F.duration>0&&(0,n.jsx)(w.j,{mediaDuration:F.duration,imagePositionOnDesktop:B,imagePositionOnMobile:z})]}),(0,n.jsx)("div",{className:"image-overlay"}),(0,n.jsxs)("div",{css:O,children:[(0,n.jsx)("div",{children:(0,n.jsx)(h.Ly,{headlineText:s,format:r,fontSizes:c,showQuotes:te,kickerText:r.design!==i.vw.LiveBlog||W?W:"Live",showPulsingDot:r.design===i.vw.LiveBlog||X,byline:d,showByline:p,isExternalLink:G,headlineColour:(0,u.M)("--feature-card-headline"),kickerColour:(0,u.M)("--feature-card-kicker-text"),isBetaContainer:!0})}),void 0!==ee?(0,n.jsx)("div",{css:L,children:(0,n.jsx)(j.G,{rating:ee,size:"small"})}):null,!!U&&(0,n.jsx)("div",{css:C,children:(0,n.jsx)(g.K,{trailText:U,trailTextColour:(0,u.M)("--feature-card-trail-text"),trailTextSize:"regular",padBottom:!1})}),(0,n.jsx)(b.w,{format:r,age:(0,n.jsx)(A,{webPublicationDate:m,showClock:!!V,absoluteServerTimes:Y}),commentCount:(0,n.jsx)(E,{linkTo:t,discussionId:$,discussionApiUrl:Q}),showLivePlayable:!1})]})]})}),re&&(0,n.jsx)(M.D,{supportingContent:_,containerPalette:q,alignment:"vertical",fillBackgroundOnDesktop:!0,fillBackgroundOnMobile:!0})]})})})},B=r(80297),D=function(e){var t=e.trails,r=e.containerPalette,a=e.absoluteServerTimes,o=e.imageLoading,l=e.aspectRatio;return(0,n.jsx)(B.g,{carouselLength:t.length,visibleCardsOnMobile:1,visibleCardsOnTablet:3,children:t.map((function(e){return(0,n.jsx)(B.g.Item,{children:(0,n.jsx)(H,{linkTo:e.url,format:e.format,headlineText:e.headline,byline:e.byline,showByline:e.showByline,webPublicationDate:e.webPublicationDate,kickerText:e.kickerText,showPulsingDot:e.format.design===i.vw.LiveBlog,showClock:!1,image:e.image,canPlayInline:!0,starRating:e.starRating,dataLinkName:e.dataLinkName,discussionApiUrl:e.discussionApiUrl,discussionId:e.discussionId,mainMedia:e.mainMedia,isExternalLink:e.isExternalLink,containerPalette:r,absoluteServerTimes:a,imageLoading:o,aspectRatio:l,imageSize:"feature",headlineSizes:{desktop:"xsmall",tablet:"xxsmall",mobile:"xsmall"}})},e.url)}))})}},80971:(e,t,r)=>{r.d(t,{K:()=>n});var n=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.join(" : ")}},88528:(e,t,r)=>{r.d(t,{E:()=>l});var n=r(22820),i=r(44165),a=r.n(i),o=r(67400),l=function(e){var t,r=(0,o.useState)(!1),i=(0,n.A)(r,2),l=i[0],s=i[1],c=(0,o.useState)(null!==(t=e.node)&&void 0!==t?t:null),d=(0,n.A)(c,2),u=d[0],p=d[1],b=(0,o.useRef)(null),x=(0,o.useCallback)((function(t){var r=(0,n.A)(t,1)[0];r&&(r.isIntersecting?s(!0):e.repeat&&s(!1))}),[e.repeat]),g=e.debounce?a()(x,200):x;return(0,o.useEffect)((function(){e.node&&p(e.node)}),[e.node]),(0,o.useEffect)((function(){if(u&&"IntersectionObserver"in window)return b.current=new window.IntersectionObserver(g,e),b.current.observe(u),function(){var e;return null===(e=b.current)||void 0===e?void 0:e.disconnect()}}),[u,e,g]),(0,o.useEffect)((function(){var t;!e.repeat&&l&&(null===(t=b.current)||void 0===t||t.disconnect())}),[l,e.repeat]),[l,p]}},72657:(e,t,r)=>{r.d(t,{Q:()=>n});var n="\n\tposition: absolute;\n\toverflow: hidden; /* gets rid of horizontal scrollbar that appears in some circumstances */\n\twhite-space: nowrap; /* The white-space property forces the content to render on one line. */\n\twidth: 1px;  /* ensures content is announced by VoiceOver. */\n\theight: 1px; /* ensures content is announced by VoiceOver. */\n\tmargin: -1px; /* hide or clip content that does not fit into a 1-pixel visible area. */\n\tpadding: 0; /* hide or clip content that does not fit into a 1-pixel visible area. */\n\tborder: 0;\n\tclip: rect(1px, 1px, 1px, 1px); /* clip removes any visible trace of the element */\n\t-webkit-clip-path: inset(50%); /* clip removes any visible trace of the element */\n\tclip-path: inset(50%); /* clip removes any visible trace of the element */\n"},62753:(e,t,r)=>{r.d(t,{b:()=>n});var n={short:".2s cubic-bezier(.64, .57, .67, 1.53)",medium:".3s ease-in-out",long:".65s ease-in-out"}},48264:(e,t,r)=>{r.d(t,{b:()=>s});var n=r(50484),i=r(24017),a=r(67400),o=r(67238),l=r(72657),s=function(e){var t=e.hideLabel,r=e.iconSvg,s=e.isLoading,c=e.children,d=[c];return s?(t||d.push((0,n.jsx)("div",{className:"src-button-space"},"space")),d.push((0,a.cloneElement)((0,n.jsx)(o.y,{theme:{background:"transparent",color:"currentColor"}}),{key:"svg"}))):r&&(t||d.push((0,n.jsx)("div",{className:"src-button-space"},"space")),d.push((0,a.cloneElement)(r,{key:"svg"}))),t?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("span",{css:(0,i.css)(l.Q,";"),children:c}),d[1]]}):d}},44759:(e,t,r)=>{r.d(t,{V:()=>B});var n=r(24017),i=r(53578),a=r(24108),o=r(62753),l=r(62898),s=r(71653),c=r(26633),d=r(59648),u=(0,n.css)("display:inline-flex;justify-content:center;align-items:center;box-sizing:border-box;border:none;background:transparent;cursor:pointer;transition:",o.b.medium,";text-decoration:none;white-space:nowrap;vertical-align:middle;:disabled{cursor:not-allowed;}&:focus{",l.t,";}"),p={xsmall:16,small:20,default:24},b=function(e){return(0,n.css)("svg{width:",p[e],"px;}")},x=(0,n.css)(s.keT,";height:",c.uJ.ctaMedium,"px;min-height:",c.uJ.ctaMedium,"px;padding:0 ",d.x[5],"px;border-radius:",c.uJ.ctaMedium,"px;padding-bottom:2px;"),g=(0,n.css)(s.keT,";height:",c.uJ.ctaSmall,"px;min-height:",c.uJ.ctaSmall,"px;padding:0 ",d.x[4],"px;border-radius:",c.uJ.ctaSmall,"px;padding-bottom:2px;"),m=(0,n.css)(s.rS6,";height:",c.uJ.ctaXsmall,"px;min-height:",c.uJ.ctaXsmall,"px;padding:0 ",d.x[3],"px;border-radius:",c.uJ.ctaXsmall,"px;padding-bottom:1px;"),h=(0,n.css)("svg{flex:0 0 auto;display:block;fill:currentColor;position:relative;width:",c.VL.iconMedium,"px;height:auto;}.src-button-space{width:",d.x[3],"px;}"),f=(0,n.css)("svg{flex:0 0 auto;display:block;fill:currentColor;position:relative;width:",c.VL.iconSmall,"px;height:auto;}.src-button-space{width:",d.x[2],"px;}"),v=(0,n.css)("svg{flex:0 0 auto;display:block;fill:currentColor;position:relative;width:",c.VL.iconXsmall,"px;height:auto;}.src-button-space{width:",d.x[1],"px;}"),y=-d.x[1],k=(0,n.css)("flex-direction:row-reverse;svg{margin-left:",y,"px;}"),w=(0,n.css)("svg{margin-right:",y,"px;}"),j={name:"1hcx8jb",styles:"padding:0"},M=(0,n.css)(j,";width:",c.VL.ctaMedium,"px;"),T=(0,n.css)(j,";width:",c.VL.ctaSmall,"px;"),P=(0,n.css)(j,";width:",c.VL.ctaXsmall,"px;"),S=(0,n.css)("svg{transform:translate(0, 0);transition:",o.b.short,";}&:hover,&:focus{svg{transform:translate(",d.x[1]/2,"px, 0);}}"),O={primary:function(e){return(0,n.css)("background-color:",e.backgroundPrimary,";color:",e.textPrimary,";&:hover{background-color:",e.backgroundPrimaryHover,";}")},secondary:function(e){return(0,n.css)("background-color:",e.backgroundSecondary,";color:",e.textSecondary,";&:hover{background-color:",e.backgroundSecondaryHover,";}")},tertiary:function(e){return(0,n.css)("background-color:",e.backgroundTertiary,";color:",e.textTertiary,";border:1px solid ",e.borderTertiary,";&:hover{background-color:",e.backgroundTertiaryHover,";}")},subdued:function(e){return(0,n.css)("padding:0;background-color:transparent;color:",e.textSubdued,";text-decoration:underline;text-underline-offset:4px;&:hover{text-decoration-thickness:4px;}border-radius:0;")}},L={right:w,left:k},C={default:x,small:g,xsmall:m},A={default:h,small:f,xsmall:v},E={default:M,small:T,xsmall:P},H=function(e,t){return(0,i.z)(a.mB,t,e)},B=function(e){var t=e.priority,r=void 0===t?"primary":t,n=e.size,i=void 0===n?"default":n,a=e.icon,o=e.hideLabel,l=e.iconSide,s=void 0===l?"left":l,c=e.nudgeIcon,d=e.cssOverrides,p=e.isLoading,x=e.theme;return function(e){return[u,C[i],O[r](H(e.button,x)),(null!=a?a:p)?A[i]:"",(null!=a?a:p)&&!o?L[s]:"",c?S:"",o?E[i]:"",p?b(i):void 0,d]}}},24108:(e,t,r)=>{r.d(t,{Tu:()=>s,Wd:()=>o,fA:()=>i,fc:()=>a,mB:()=>l});var n=r(50641),i={button:{textPrimary:n.M.neutral[100],backgroundPrimary:n.M.brand[400],backgroundPrimaryHover:"#234B8A",textSecondary:n.M.brand[400],backgroundSecondary:n.M.brand[800],backgroundSecondaryHover:"#ACC9F7",textTertiary:n.M.brand[400],backgroundTertiaryHover:"#E5E5E5",borderTertiary:n.M.brand[400],textSubdued:n.M.brand[400]}},a={button:{textPrimary:n.M.brand[400],backgroundPrimary:n.M.neutral[100],backgroundPrimaryHover:"#E0E0E0",textSecondary:n.M.neutral[100],backgroundSecondary:n.M.brand[600],backgroundSecondaryHover:"#234B8A",textTertiary:n.M.neutral[100],backgroundTertiaryHover:n.M.brand[300],borderTertiary:n.M.neutral[100],textSubdued:n.M.neutral[100]}},o={button:{textPrimary:n.M.neutral[100],backgroundPrimary:n.M.neutral[7],backgroundPrimaryHover:"#454545",textSecondary:n.M.neutral[7],backgroundSecondary:n.M.brandAlt[200],backgroundSecondaryHover:"#F2AE00",textTertiary:n.M.neutral[0],backgroundTertiaryHover:"#FFD213",borderTertiary:n.M.neutral[7],textSubdued:n.M.neutral[7]}},l={textPrimary:n.M.neutral[100],backgroundPrimary:n.M.brand[400],backgroundPrimaryHover:"#234B8A",textSecondary:n.M.brand[400],backgroundSecondary:n.M.brand[800],backgroundSecondaryHover:"#ACC9F7",textTertiary:n.M.brand[400],backgroundTertiary:"transparent",backgroundTertiaryHover:"#E5E5E5",borderTertiary:n.M.brand[400],textSubdued:n.M.brand[400]},s={textPrimary:n.M.brand[400],backgroundPrimary:n.M.neutral[100],backgroundPrimaryHover:"#E0E0E0",textSecondary:n.M.neutral[100],backgroundSecondary:n.M.brand[600],backgroundSecondaryHover:"#234B8A",textTertiary:n.M.neutral[100],backgroundTertiary:"transparent",backgroundTertiaryHover:n.M.brand[300],borderTertiary:n.M.neutral[100],textSubdued:n.M.neutral[100]};n.M.neutral[100],n.M.neutral[7],n.M.neutral[7],n.M.brandAlt[200],n.M.neutral[0],n.M.neutral[7],n.M.neutral[7]},67238:(e,t,r)=>{r.d(t,{y:()=>d});var n=r(62335),i=r(50484),a=r(50641),o={background:a.M.brand[800],color:a.M.brand[400]},l=r(26633);function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){(0,n.A)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var d=function(e){var t=e.size,r=void 0===t?"medium":t,n=e.theme,a=c(c({},o),n),s="number"==typeof r?r:l.RK[r];return(0,i.jsx)("svg",{width:s,viewBox:"0 0 30 30",focusable:!1,"aria-hidden":!0,children:(0,i.jsxs)("g",{children:[(0,i.jsx)("animateTransform",{attributeName:"transform",attributeType:"XML",type:"rotate",from:"0 15 15",to:"360 15 15",dur:"2.5s",repeatCount:"indefinite"}),(0,i.jsx)("circle",{cx:15,cy:15,r:12.5,strokeWidth:5,stroke:a.background,fill:"transparent"}),(0,i.jsx)("circle",{cx:15,cy:15,r:12.5,strokeWidth:5,strokeDasharray:82,strokeDashoffset:82,stroke:a.color,fill:"transparent",children:(0,i.jsx)("animate",{attributeName:"stroke-dashoffset",dur:"3.5s",from:164,to:0,repeatCount:"indefinite"})})]})})}}}]);
//# sourceMappingURL=ScrollableFeature-importable.client.web.legacy.9ef1057822dbd29d7be5.js.map