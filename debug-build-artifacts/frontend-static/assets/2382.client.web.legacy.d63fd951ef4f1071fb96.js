"use strict";(self.webpackChunk_guardian_dotcom_rendering=self.webpackChunk_guardian_dotcom_rendering||[]).push([[2382],{54280:(e,n,t)=>{t.d(n,{cy:()=>x,oA:()=>y});var r=t(62335),o=t(22820),i=t(31880),c=t(50484),a=t(42702),s=t(67400),l=t(88528),u=t(53132),d=t(21128),p=t(296),f={contributions:"engagementBannerLastClosedAt",subscriptions:"subscriptionBannerLastClosedAt",signIn:"signInBannerLastClosedAt",abandonedBasket:"abandonedBasketLastClosedAt"};function g(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}var m=function(e){return function(n){var t,i=(0,s.useState)(!0),a=(0,o.A)(i,2),l=a[0],u=a[1],d=function(){var e,t;e=n.bannerChannel,t=f[e],p.I.local.set("gu.prefs.".concat(t),(new Date).toISOString()),u(!1),document.body.focus()};return t=d,(0,s.useEffect)((function(){function e(e){("Escape"===e.key||"Esc"===e.key)&&t(e)}return window.addEventListener("keydown",e),function(){return window.removeEventListener("keydown",e)}}),[t]),l?(0,c.jsx)(e,function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?g(Object(t),!0).forEach((function(n){(0,r.A)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):g(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}({onClose:d},n)):(0,c.jsx)(c.Fragment,{})}};function b(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function h(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?b(Object(t),!0).forEach((function(n){(0,r.A)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):b(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var C=function(e,n){return function(t){var r=t.tracking,p=t.submitComponentEvent,f=t.onClose,g=t.content,m=t.mobileContent,b=t.countryCode,C=t.prices,x=t.fetchEmail,y=t.articleCounts,j=t.tickerSettings,k=t.isSupporter,O=t.separateArticleCount,v=t.separateArticleCountSettings,w=t.choiceCardAmounts,P=t.design,A=t.bannerChannel,S=t.abandonedBasket,E=(0,l.E)({debounce:!0,threshold:0}),T=(0,o.A)(E,2),B=T[0],U=T[1];(0,s.useEffect)((function(){B&&p&&p((0,d.t0)(r,r.campaignCode))}),[B,p,r]),(0,s.useEffect)((function(){p&&p((0,d.rx)(r,r.campaignCode))}),[p,r]);var D=y.forTargetedWeeks,I=function(e){return e.map((function(e){return(0,u.k)(e,D,"banner")}))},F=function(e){return{close:"".concat(e," : close"),cta:"".concat(e," : cta"),secondaryCta:"".concat(e," : secondary-cta"),notNow:"".concat(e," : not now"),signIn:"".concat(e," : sign in"),reminderCta:"".concat(e," : reminder-cta"),reminderSet:"".concat(e," : reminder-set"),reminderClose:"".concat(e," : reminder-close")}}(n),L=function(e){var n,t,o=function(e){return(0,d.Bl)(e.baseUrl)?{ctaUrl:(0,d.qU)(e.baseUrl,r),ctaText:e.text}:"abandonedBasket"===A&&S?{ctaUrl:(0,d.m1)(e.baseUrl,S,r),ctaText:e.text}:{ctaUrl:(0,d.QP)(e.baseUrl,r,D,b),ctaText:e.text}},c=e.cta?o(e.cta):null,s=e.secondaryCta?function(e){return e.type===a.bP.Custom?{type:a.bP.Custom,cta:o(e.cta)}:{type:a.bP.ContributionsReminder,reminderFields:(0,a.KK)(b)}}(e.secondaryCta):null,l=e.highlightedText&&(0,a.BA)(e.highlightedText,b,C).trim(),p=(0,a.BA)(e.heading,b,C).trim(),f=(n=e.paragraphs,t=e.messageText,function(e,n){var t=[];return null!=e?t.push.apply(t,(0,i.A)(e)):null!=n&&t.push(n),t}(n,t).map((function(e){return(0,a.BA)(e,b,C).trim()}))),g=f.some((function(e){return(0,a.FT)(e)}))||!!l&&(0,a.FT)(l)||!!p&&(0,a.FT)(p),m=p?(0,u.k)(p,D,"banner"):null,h=l?(0,u.k)(l,D,"banner"):null;if(g)throw Error("Banner copy contains placeholders, abandoning.");return{highlightedText:h,paragraphs:I(f),heading:m,primaryCta:c,secondaryCta:s}},_=function(e,n){return function(){var t=(0,d.Mf)(r,e);p&&p(t),n&&f()}},z=_(F.cta,!0),N=_(F.secondaryCta,!0),R=_(F.reminderCta,!1),J=_(F.reminderSet,!1),K=_(F.reminderClose,!1),V=_(F.close,!0),Y=_(F.notNow,!0),q=_(F.signIn,!1);try{var G=g&&L(g),M=m&&L(m);if(G){var Q={onCtaClick:z,onSecondaryCtaClick:N,reminderTracking:{onReminderCtaClick:R,onReminderSetClick:J,onReminderCloseClick:K},onCloseClick:V,onSignInClick:q,onNotNowClick:Y,content:{mainContent:G,mobileContent:null!=M?M:G},countryCode:b,fetchEmail:x,tickerSettings:j,isSupporter:k,articleCounts:y,separateArticleCount:O,separateArticleCountSettings:v,choiceCardAmounts:w,tracking:r,submitComponentEvent:p,design:P};return(0,c.jsx)("div",{ref:U,children:(0,c.jsx)(e,h({},Q))})}}catch(e){console.log(e)}return(0,c.jsx)(c.Fragment,{})}},x=function(e,n){return m(C(e,n))},y=function(e,n){return function(t){if(function(e){return a.a.safeParse(e).success}(t)){var r=x(e,n);return(0,c.jsx)(r,h({},t))}return(0,c.jsx)(c.Fragment,{})}}},12382:(e,n,t)=>{t.r(n),t.d(n,{SignInPromptBanner:()=>B,SignInPromptBannerUnvalidated:()=>T});var r=t(18803),o=t(50484),i=t(24017),c=t(99354),a=t(52230),s=t(71653),l=t(59648),u=t(81477),d=t(54582),p=t(96363),f=t(19236),g=t(24108),m=t(53753),b=t(28673),h=t(685),C=t(42702),x=t(54280),y=(0,i.css)("background-color:",a.wk[400],";::before{content:'';display:block;position:fixed;top:0;right:0;bottom:0;left:0;background:rgb(0, 0, 0, 0.3);z-index:-1;}"),j={name:"bjn8wh",styles:"position:relative"},k={name:"nkt64x",styles:"margin-right:10px"},O=(0,i.css)(s.r9N," font-size:32px;color:",a.SY[100],";margin:",l.x[1],"px 0 0;",u.TG.phablet,"{margin:",l.x[1],"px 45px 0 0;}"),v=(0,i.css)(s.aal,";color:",a.JU[400],";margin:",l.x[2],"px 0;"),w=(0,i.css)(s.A5,";color:",a.SY[100],";display:flex;flex-direction:column;span:not(:first-of-type){margin-top:10px;}span::before{content:'';display:inline-block;width:15px;height:15px;margin-right:",l.x[2],"px;background:",a.JU[400],";border-radius:50%;}"),P=(0,i.css)("margin:",l.x[5],"px 0;"),A=(0,i.css)("margin-left:",l.x[5],"px;"),S=(0,i.css)("position:absolute;top:",l.x[2],"px;right:0px;width:42px;height:42px;"),E=function(e){var n=e.content.mainContent,t=n.heading,i=n.paragraphs,a=n.primaryCta,s=n.secondaryCta,l=(0,r.A)(i),u=l[0],x=l.slice(1);return(0,o.jsx)(d.m,{cssOverrides:y,children:(0,o.jsxs)(p.e,{children:[(0,o.jsx)(f.V,{width:[0,0,0,2,3],cssOverrides:k,children:" "}),(0,o.jsxs)(f.V,{width:[4,12,12,12,13],cssOverrides:j,children:[(0,o.jsx)("h1",{css:O,children:t}),(0,o.jsx)("h2",{css:v,children:u}),(0,o.jsx)("div",{css:w,children:x}),(0,o.jsx)("div",{css:P,children:(0,o.jsxs)(c.a,{theme:g.fc,children:[a&&(0,o.jsx)(m.z,{priority:"primary",href:a.ctaUrl,onClick:e.onCtaClick,size:"small",children:a.ctaText}),s&&s.type===C.bP.Custom&&(0,o.jsx)(b.$,{priority:"subdued",size:"small",onClick:e.onCloseClick,cssOverrides:A,children:s.cta.ctaText})]})}),(0,o.jsx)("div",{css:S,children:(0,o.jsx)(h.l,{})})]})]})})},T=(0,x.cy)(E,"sign-in-prompt-banner"),B=(0,x.oA)(E,"sign-in-prompt-banner")}}]);
//# sourceMappingURL=2382.client.web.legacy.d63fd951ef4f1071fb96.js.map