"use strict";(self.webpackChunk_guardian_dotcom_rendering=self.webpackChunk_guardian_dotcom_rendering||[]).push([[5427],{67e3:(e,n,t)=>{t.r(n),t.d(n,{TopBar:()=>Q});var r=t(22820),i=t(50484),a=t(24017),o=t(81477),c=t(59648),s=t(25549),u=t(67400),l=t(64241),d=t(80971),f=t(66186),p=t(78561),g=t(1954),h=t(7693),v=t(41183),m=t(71653),b=(0,a.css)("display:flex;align-items:center;",m.keT,";color:",(0,g.M)("--masthead-top-bar-link-text"),";transition:color 80ms ease-out;text-decoration:none;padding:",c.x[1],"px;:hover,:focus{text-decoration:underline;}svg{fill:currentColor;float:left;height:18px;width:18px;margin:0 ",c.x[1],"px 0 0;}"),w=function(e){var n=e.href,t=e.dataLinkName,r=e.children;return(0,i.jsx)("a",{href:n,css:b,"data-link-name":t,children:r})},x=t(5926),y=t(62335),k=t(71456),j=t(24755),S=t(83416);function O(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function P(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?O(Object(t),!0).forEach((function(n){(0,y.A)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):O(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var U,A=function(e){return Boolean(e.extras.message)&&Boolean(e.extras.target)&&Boolean(e.extras.ophanLabel)},I=t(73556),z=t(17947);function C(){return C=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)({}).hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},C.apply(null,arguments)}const _=function(e){return u.createElement("svg",C({width:14,height:14,viewBox:"0 0 14 14"},e),U||(U=u.createElement("path",{d:"M7 0C3.1 0 0 3.1 0 7c0 2 .9 3.9 2.4 5.2C3.6 13.4 5.3 14 7 14c1.7 0 3.4-.6 4.7-1.8C13.2 10.9 14 9 14 7c0-3.9-3.1-7-7-7zm0 1.8c1.3 0 2.1.8 2.1 2.1S8 6.3 7 6.3c-.8 0-2-1.1-2-2.4 0-1.4.7-2.1 2-2.1zm0 11.6c-1.7 0-3.3-.7-4.5-1.8l.8-3.2.5-.5c1-.4 2.1-.5 3.1-.5 1.1 0 2.1.2 3.1.5l.5.5.9 3.2c-1.1 1.2-2.7 1.8-4.4 1.8z"})))};var E=t(53348),T=["idApiUrl","authStatus","renderingTarget"];function M(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function R(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?M(Object(t),!0).forEach((function(n){(0,y.A)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):M(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var D=(0,a.css)("display:flex;position:relative;align-items:center;",m.keT,";color:",(0,g.M)("--masthead-top-bar-link-text"),";transition:color 80ms ease-out;text-decoration:none;padding:",c.x[1],"px 0 ",c.x[1],"px ",c.x[1],"px;:hover,:focus{text-decoration:underline;}svg{fill:currentColor;float:left;height:18px;width:18px;margin:0 ",c.x[1],"px 0 0;}z-index:",(0,j.f)("mastheadMyAccountDropdown"),";"),L=function(e){var n=e.idUrl;return(0,i.jsxs)("a",{css:D,href:"".concat(n,"/signin?INTCMP=DOTCOM_NEWHEADER_SIGNIN&ABCMP=ab-sign-in&").concat((0,S.h)("guardian_signin_header")),"data-link-name":(0,d.K)("header","topbar","signin"),children:[(0,i.jsx)(_,{})," Sign in"]})},N=(0,a.css)("color:",(0,g.M)("--masthead-top-bar-link-text"),";padding-right:0;padding-bottom:0;margin-top:0;font-weight:bold;&:not(ul):hover{color:",(0,g.M)("--masthead-top-bar-link-text"),";text-decoration:underline;}&:not(button){",o.TG.tablet,"{top:44px;}",o.HT.tablet,"{right:0;top:52px;}",o.HT.desktop,"{top:56px;}}"),B=function(e){var n,t=e.mmaUrl,r=e.idUrl,a=e.discussionApiUrl,o=e.notifications,c=e.authStatus,s=(0,I.g)("SignedInWithCookies"===c.kind?(0,k.w)(a,"profile/me?strict_sanctions_check=false"):void 0,{},{credentials:"include"}),u=s.data,l=s.error;if("SignedInWithCookies"===c.kind&&u&&(n=u.userProfile.userId),"SignedInWithOkta"===c.kind&&(n=c.idToken.claims.legacy_identity_id),!n||l)return(0,i.jsx)(L,{idUrl:r});var f=function(e,n,t){return[{id:"account_overview",url:"".concat(e,"/"),title:"Account overview"},{id:"billing",url:"".concat(e,"/billing"),title:"Billing"},{id:"edit_profile",url:"".concat(e,"/public-settings"),title:"Profile"},{id:"email_prefs",url:"".concat(e,"/email-prefs"),title:"Emails & marketing"},{id:"data_privacy",url:"".concat(e,"/data-privacy"),title:"Data privacy"},{id:"settings",url:"".concat(e,"/account-settings"),title:"Settings"},{id:"help",url:"".concat(e,"/help"),title:"Help"},{id:"comment_activity",url:"".concat(n,"/user/id/").concat(t),title:"Comments & replies"},{id:"sign_out",url:"".concat(n,"/signout"),title:"Sign out"}].map((function(e){return R(R({},e),{},{dataLinkName:(0,d.K)("header","topbar",e.id.replaceAll("_"," "))})}))}(t,r,n),p=function(e,n){var t=function(e){return e.reduce((function(e,n){var t;return e[n.target]=(null!==(t=e[n.target])&&void 0!==t?t:[]).concat(n),e}),{})}(n);return e.map((function(e){var n,r,i=(null!==(n=e.notifications)&&void 0!==n?n:[]).concat(null!==(r=t[e.id])&&void 0!==r?r:[]);return 0===i.length?e:P(P({},e),{},{notifications:i})}))}(f,o);return(0,i.jsxs)("div",{css:D,children:[(0,i.jsx)(_,{}),(0,i.jsx)(E.Dropdown,{label:"My account",links:p,id:"topbar-my-account",dataLinkName:(0,d.K)("header","topbar","my account"),cssOverrides:N})]})},W=function(e){var n=e.idApiUrl,t=e.authStatus,a=e.renderingTarget,o=(0,x.A)(e,T),c=(0,z.m)(n,a).brazeCards,s=(0,u.useState)([]),l=(0,r.A)(s,2),d=l[0],f=l[1];return(0,u.useEffect)((function(){if(c){var e=c.getCardsForProfileBadge().filter(A).map((function(e){return{id:e.id,target:e.extras.target,message:e.extras.message,ophanLabel:e.extras.ophanLabel,logImpression:function(){e.logImpression()}}}));e.length&&f(e)}}),[c]),(0,i.jsx)(B,R(R({},o),{},{notifications:d,authStatus:t}))},H=function(e){var n=e.mmaUrl,t=e.idUrl,r=e.discussionApiUrl,a=e.idApiUrl,o=e.authStatus,c=(0,h.U)().renderingTarget;return(0,i.jsx)(i.Fragment,{children:"SignedInWithOkta"===o.kind||"SignedInWithCookies"===o.kind?(0,i.jsx)(W,{mmaUrl:n,idUrl:t,discussionApiUrl:r,idApiUrl:a,authStatus:o,renderingTarget:c}):(0,i.jsx)(L,{idUrl:t})})},K=t(9074),V=(0,a.css)("grid-column:content-start/main-column-end;background-color:",(0,g.M)("--masthead-top-bar-background"),";display:flex;flex-direction:row;justify-content:flex-end;box-sizing:border-box;height:52px;",o.HT.tablet,"{height:60px;}",o.HT.desktop,"{height:64px;}"),G={name:"j9lc9v",styles:"height:100%;display:flex"},F={name:"1tx1l5v",styles:"margin-right:auto"},q=(0,a.css)(o.HT.desktop,"{:before{content:'';border-left:1px solid ",(0,g.M)("--masthead-top-bar-vertical-divider"),";height:38px;}}"),J={name:"1h3rtzg",styles:"align-items:center"},Y=function(e){var n=e.alignLeft,t=void 0!==n&&n,r=e.showVerticalDivider,a=void 0===r||r,o=e.isLastChild,s=void 0!==o&&o,u=e.children;return(0,i.jsx)("div",{css:[G,t&&F,a?q:J],style:{paddingRight:s?0:"".concat(c.x[3],"px")},children:u})},Q=function(e){var n=e.editionId,t=e.idUrl,a=e.mmaUrl,o=e.discussionApiUrl,c=e.idApiUrl,g=e.contributionsServiceUrl,m=e.hasPageSkin,b=void 0!==m&&m,x=(0,f.w)(),y=(0,h.U)().renderingTarget,k=(0,p.L)(y),j=(0,u.useState)(""),S=(0,r.A)(j,2),O=S[0],P=S[1];(0,u.useEffect)((function(){P(window.location.origin+window.location.pathname)}),[]);var U=(0,l.r)({base:"https://support.theguardian.com/subscribe".concat("UK"===n?"":"/weekly"),componentType:"ACQUISITIONS_HEADER",componentId:"PrintSubscriptionsHeaderLink",pageViewId:k,referrerUrl:O});return(0,i.jsx)(v.xA,{type:"div",hasPageSkin:b,children:(0,i.jsxs)("div",{css:V,children:[(0,i.jsx)(Y,{showVerticalDivider:!1,alignLeft:!0,children:(0,i.jsx)(K.TopBarSupport,{contributionsServiceUrl:g})}),(0,i.jsx)(s.L,{until:"desktop",children:(0,i.jsx)(Y,{children:(0,i.jsx)(w,{dataLinkName:(0,d.K)("header","topbar","printsubs"),href:U,children:"Print subscriptions"})})}),(0,i.jsx)(s.L,{until:"desktop",children:(0,i.jsx)(Y,{children:["AU","US"].includes(n)?(0,i.jsx)(w,{dataLinkName:(0,d.K)("header","topbar","newsletters"),href:"/email-newsletters",children:"Newsletters"}):(0,i.jsx)(w,{dataLinkName:(0,d.K)("header","topbar","job-cta"),href:"https://jobs.theguardian.com",children:"Search jobs"})})}),(0,i.jsx)(Y,{isLastChild:!0,children:(0,i.jsx)(H,{mmaUrl:null!=a?a:"https://manage.theguardian.com",idUrl:null!=t?t:"https://profile.theguardian.com",discussionApiUrl:o,idApiUrl:c,authStatus:x})})]})})}},9074:(e,n,t)=>{t.r(n),t.d(n,{TopBarSupport:()=>y});var r=t(62335),i=t(22820),a=t(50484),o=t(65656),c=t(64361),s=t(42702),u=t(67400),l=t(85918),d=t(28118),f=t(49910),p=t(66186),g=t(59695),h=t(78561),v=t(7693);function m(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function b(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?m(Object(t),!0).forEach((function(n){(0,r.A)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):m(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var w={name:"iizxih",styles:"display:flex;flex-direction:column;align-items:center;overflow-wrap:nowrap"},x=function(e){var n=e.countryCode,r=e.pageViewId,g=e.contributionsServiceUrl,h=(0,u.useState)(null),m=(0,i.A)(h,2),x=m[0],y=m[1],k=(0,u.useState)(null),j=(0,i.A)(k,2),S=j[0],O=j[1],P=(0,p.T)(),U=(0,v.U)().renderingTarget;return(0,u.useEffect)((function(){if(!(0,o.b)(n)&&"Pending"!==P){var e=(0,d.h3)(P);if("Pending"!==e){(0,f.q)();var i={tracking:{ophanPageId:r,platformId:"GUARDIAN_WEB",referrerUrl:window.location.origin+window.location.pathname,clientName:"dcr"},targeting:{showSupportMessaging:!e,countryCode:n,mvtId:Number((0,c.R)({name:"GU_mvt_id",shouldMemoize:!0})),purchaseInfo:(0,d.q6)(),isSignedIn:P}};(0,s._b)(g,i).then((function(e){if(!e.data)return null;var n=e.data.module;return y(n),("SignInPromptHeader"===n.name?Promise.all([t.e(5085),t.e(6241)]).then(t.bind(t,84074)):Promise.all([t.e(9240),t.e(5085),t.e(7210)]).then(t.bind(t,37210))).then((function(e){O((function(){var t;return null!==(t=e[n.name])&&void 0!==t?t:null}))}))})).catch((function(e){var n="Error importing RR header links: ".concat(String(e));console.log(n),window.guardian.modules.sentry.reportError(new Error(n),"rr-header-links")}))}}}),[n,P,g,r]),null!==S&&x?(0,a.jsx)("div",{css:w,children:(0,a.jsx)(S,b({submitComponentEvent:function(e){(0,l.u_)(e,U)}},x.props))}):null},y=function(e){var n=e.contributionsServiceUrl,t=(0,v.U)().renderingTarget,r=(0,g.F)("support-the-Guardian"),i=(0,h.L)(t);return(0,o.b)(r)||(0,o.b)(i)?null:(0,a.jsx)(x,{countryCode:r,pageViewId:i,contributionsServiceUrl:n})}},28118:(e,n,t)=>{t.d(n,{Jj:()=>y,Pp:()=>p,VF:()=>g,Vi:()=>f,Xr:()=>S,_f:()=>P,h3:()=>v,mG:()=>j,mV:()=>x,n8:()=>O,q6:()=>A,tZ:()=>U,yw:()=>k});var r=t(22820),i=t(18247),a=t(57820),o=t.n(a),c=t(64361),s=t(65656),u=t(296),l=t(63854),d=t(67400),f="gu_hide_support_messaging",p="gu_recurring_contributor",g="gu.contributions.contrib-timestamp",h="gu.noRRBanner",v=function(e){var n,t,r=function(e){switch((0,c.R)({name:f})){case"true":return!0;case"false":return!1;default:return!!e&&"Pending"}}(e);return"Pending"===r?"Pending":r||(t=function(){var e=(0,c.R)({name:g});if(e)return(e?parseInt(e,10):0)||void 0}(),!(0,s.b)(t)&&(n=Date.now()-t,Math.floor(n/864e5)<=90))},m=[1,3,7],b=[1,3,5,7],w=function(){return null!==(0,c.R)({name:"gu_article_count_opt_out"})},x=function(){return new Promise((function(e){(0,c.R)({name:"gu-cmp-disabled",shouldMemoize:!0})&&e(!0),(0,l.Ym)((function(n){var t=n.usnat,r=n.tcfv2,i=n.aus;if(null!=t?t:i)e(!0);else if(r){var a=m.every((function(e){return r.consents[e]}));a||u.I.local.remove("gu.history.weeklyArticleCount"),e(a)}}))}))},y=function(){var e=(0,i.A)(o().mark((function e(){var n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x();case 2:return n=e.sent,e.abrupt("return",!n||w());case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),k=function(){var e=(0,i.A)(o().mark((function e(){var n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x();case 2:return n=e.sent,e.abrupt("return",!n||w());case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),j=function(){var e=(0,d.useState)("Pending"),n=(0,r.A)(e,2),t=n[0],i=n[1];return(0,d.useEffect)((function(){y().then(i).catch((function(){return i(!0)}))}),[]),t},S=function(){return new Promise((function(e){(0,c.R)({name:"gu-cmp-disabled",shouldMemoize:!0})&&e(!0),(0,l.Ym)((function(n){var t=n.usnat,r=n.tcfv2,i=n.aus;if(null!=t?t:i)e(!0);else if(r){var a=b.every((function(e){return r.consents[e]}));e(a)}}))}))},O=function(){return!!u.I.local.get(h)},P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Date.now();return u.I.local.set(h,!0,e+12e5)},U=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Date.now();return!!e&&n-new Date(e).getTime()<36e5},A=function(){var e=(0,c.R)({name:"GU_CO_COMPLETE",shouldMemoize:!0});if(e){var n;try{n=JSON.parse(decodeURIComponent(e))}catch(e){}return n}}},10077:(e,n,t)=>{t.d(n,{J:()=>c,h:()=>s});var r=t(71456);function i(e){if(!e.ok)throw Error(e.statusText||"getIdApiUserData | An api call returned HTTP status ".concat(e.status));return e}var a=function(e){return fetch(e,{credentials:"include"}).then(i).then((function(e){return e.json()}))},o={},c=function(e){if(!o.idapiUserMeResponse){var n=(0,r.w)(e,"user/me");o.idapiUserMeResponse=a(n)}return o.idapiUserMeResponse},s=function(e){if(!o.idapiUserIdentifiersResponse){var n=(0,r.w)(e,"user/me/identifiers");o.idapiUserIdentifiersResponse=a(n)}return o.idapiUserIdentifiersResponse}},83416:(e,n,t)=>{t.d(n,{h:()=>i});var r=t(94568),i=function(e,n){var t={componentType:"identityauthentication",componentId:e};return n&&(t.viewId=n),"componentEventParams=".concat(encodeURIComponent((0,r.G)(t)))}},49910:(e,n,t)=>{t.d(n,{q:()=>c});var r=t(24017),i=t(50484),a=t(67400),o=!1,c=function(){o||(window.guardian.automat={emotionReact:r,emotionReactJsxRuntime:i,react:a.default},o=!0)}},73556:(e,n,t)=>{t.d(n,{g:()=>o});var r=t(65656),i=t(29273);function a(e){if(!e.ok)throw Error(e.statusText||"useApi | An api call returned HTTP status ".concat(e.status));return e}var o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1?arguments[1]:void 0,t=arguments.length>2?arguments[2]:void 0,o=(0,i.Ay)(e,function(e){return function(n){return fetch(n,e).then(a).then((function(e){return e.json()}))}}(t),n),c=o.data,s=o.error;return{data:c,error:s,loading:!!e&&(0,r.b)(s)&&(0,r.b)(c)}}},66186:(e,n,t)=>{t.d(n,{T:()=>o,w:()=>c});var r=t(22820),i=t(67400),a=t(17950),o=function(){switch(c().kind){case"Pending":return"Pending";case"SignedInWithCookies":case"SignedInWithOkta":return!0;case"SignedOutWithCookies":case"SignedOutWithOkta":return!1}},c=function(){var e=(0,i.useState)({kind:"Pending"}),n=(0,r.A)(e,2),t=n[0],o=n[1];return(0,i.useEffect)((function(){(0,a.kU)((function(e){o((0,a.dx)(e))}),(function(){return o((0,a.Hn)())})).catch((function(e){console.error(e)}))}),[]),t}},17947:(e,n,t)=>{t.d(n,{m:()=>z});var r=t(75342),i=t(53994),a=t(18247),o=t(57820),c=t.n(o),s=t(296),u=t(16346),l=t(14429),d=t(85918),f="gu.brazeUserSet",p=t(10077),g=t(17950),h=function(){var e=(0,a.A)(c().mark((function e(n){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,g.kU)((function(e){var n;return null===(n=e.idToken)||void 0===n?void 0:n.claims.braze_uuid}),(function(){return(0,p.h)(n).then((function(e){return e.brazeUuid})).catch((function(e){window.guardian.modules.sentry.reportError(e,"getBrazeUuid")}))})));case 1:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),v=t(63854);function m(e,n){var t="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=function(e,n){if(e){if("string"==typeof e)return b(e,n);var t={}.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?b(e,n):void 0}}(e))||n&&e&&"number"==typeof e.length){t&&(e=t);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,o=!0,c=!1;return{s:function(){t=t.call(e)},n:function(){var e=t.next();return o=e.done,e},e:function(e){c=!0,a=e},f:function(){try{o||null==t.return||t.return()}finally{if(c)throw a}}}}function b(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=Array(n);t<n;t++)r[t]=e[t];return r}var w,x=function(e,n,t){return{isSuccessful:!1,failure:{field:e,data:n},data:t}},y=function(e,n){return[{name:"apiKey",value:Promise.resolve(window.guardian.config.page.brazeApiKey)},{name:"brazeSwitch",value:Promise.resolve(window.guardian.config.switches.brazeSwitch)},{name:"brazeUuid",value:e?h(n):Promise.resolve(null)},{name:"consent",value:new Promise((function(e,n){(0,v.Ym)((function(t){try{e((0,v.gS)("braze",t))}catch(e){n(e)}}))}))},{name:"isNotPaidContent",value:Promise.resolve(!window.guardian.config.page.isPaidContent)}]},k=function(){var e=(0,a.A)(c().mark((function e(n,t){var r,i,a,o,s,u,l,d;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=y(n,t),i={},a=m(r),e.prev=3,a.s();case 5:if((o=a.n()).done){e.next=23;break}return s=o.value,u=s.name,l=s.value,e.prev=7,e.next=10,l;case 10:if(!(d=e.sent)){e.next=15;break}i[u]=d,e.next=16;break;case 15:return e.abrupt("return",x(u,d,i));case 16:e.next=21;break;case 18:return e.prev=18,e.t0=e.catch(7),e.abrupt("return",x(u,e.t0 instanceof Error?e.t0.message:e.t0,i));case 21:e.next=5;break;case 23:e.next=28;break;case 25:e.prev=25,e.t1=e.catch(3),a.e(e.t1);case 28:return e.prev=28,a.f(),e.finish(28);case 31:return e.abrupt("return",{isSuccessful:!0,data:i});case 32:case"end":return e.stop()}}),e,null,[[3,25,28,31],[7,18]])})));return function(n,t){return e.apply(this,arguments)}}(),j=t(65656),S={enableLogging:!0,noCookies:!0,baseUrl:"https://sdk.fra-01.braze.eu/api/v3",sessionTimeoutInSeconds:1,minimumIntervalBetweenTriggerActionsInSeconds:0,devicePropertyAllowlist:[]},O=function(){var e=(0,a.A)(c().mark((function e(n){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.e(7659).then(t.t.bind(t,14844,23));case 2:return(r=e.sent).setLogger((function(e){return(0,u.Rm)("tx",e)})),r.initialize(n,S),e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),P=function(e){return(0,j.b)(w)&&(w=O(e)),w},U=function(){var e=(0,a.A)(c().mark((function e(n,t,i,a){var o,u,l;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o="true"===s.I.local.getRaw(f),u=!i&&o,l=!a&&o,!(!t&&o||u||l)){e.next=18;break}if(e.prev=5,!n){e.next=11;break}return e.next=9,P(n);case 9:e.sent.wipeData();case 11:r.tP.clear(),s.I.local.remove(f),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(5),window.guardian.modules.sentry.reportError(e.t0,"braze-maybeWipeUserData");case 18:case"end":return e.stop()}}),e,null,[[5,15]])})));return function(n,t,r,i){return e.apply(this,arguments)}}(),A=function(){var e=(0,a.A)(c().mark((function e(n,t,i){var a,o,p,g,h,v,m,b,w,x;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(s.I.local.isAvailable()){e.next=2;break}return e.abrupt("return",{brazeMessages:new r._v,brazeCards:new r.ho});case 2:return e.next=4,k(t,n);case 4:if((a=e.sent).isSuccessful){e.next=11;break}return o=a.failure,p=a.data,(0,u.Rm)("tx","Not attempting to show Braze messages. Dependency ".concat(o.field," failed with ").concat(String(o.data),".")),e.next=10,U(p.apiKey,p.brazeUuid,p.consent,p.brazeSwitch);case 10:return e.abrupt("return",{brazeMessages:new r._v,brazeCards:new r.ho});case 11:return e.prev=11,g=(0,l.h)("tx","braze-sdk-load"),h=g.endPerformanceMeasure,e.next=15,P(a.data.apiKey);case 15:return v=e.sent,m=h(),e.next=19,(0,d.V5)(i);case 19:return e.sent.record({component:"braze-sdk-load-timing",value:m}),b=function(e,n){window.guardian.modules.sentry.reportError(e,n)},s.I.local.setRaw(f,"true"),v.changeUser(a.data.brazeUuid),v.openSession(),w=window.guardian.config.switches.brazeContentCards?new r.ue(v,b):new r.ho,x=new r.xK(v,r.tP,b,r.Aw),e.abrupt("return",{brazeMessages:x,brazeCards:w});case 30:return e.prev=30,e.t0=e.catch(11),e.abrupt("return",{brazeMessages:new r._v,brazeCards:new r.ho});case 33:case"end":return e.stop()}}),e,null,[[11,30]])})));return function(n,t,r){return e.apply(this,arguments)}}(),I=t(66186),z=function(e,n){var t=(0,I.w)(),a="SignedInWithOkta"===t.kind||"SignedInWithCookies"===t.kind,o=(0,i.A)("Pending"!==t.kind?"braze-message":null,(function(){return A(e,a,n)})),c=o.data;return o.error?{brazeMessages:new r._v,brazeCards:new r.ho}:{brazeMessages:null==c?void 0:c.brazeMessages,brazeCards:null==c?void 0:c.brazeCards}}},59695:(e,n,t)=>{t.d(n,{F:()=>c});var r=t(22820),i=t(76720),a=t(67400),o=t(34166),c=function(e){var n=(0,a.useState)(),t=(0,r.A)(n,2),c=t[0],s=t[1];return(0,a.useEffect)((function(){(0,o.C)().then((function(e){(0,i.R)(e)&&s(e)})).catch((function(n){var t="Error fetching country code: ".concat(String(n));window.guardian.modules.sentry.reportError(new Error(t),e)}))}),[e]),c}}}]);
//# sourceMappingURL=TopBar-importable.client.web.legacy.bea81448fe99919d5b74.js.map