"use strict";(self.webpackChunk_guardian_dotcom_rendering=self.webpackChunk_guardian_dotcom_rendering||[]).push([[4994],{28118:(n,e,t)=>{t.d(e,{Jj:()=>R,Pp:()=>d,VF:()=>g,Vi:()=>v,Xr:()=>C,_f:()=>k,h3:()=>h,mG:()=>I,mV:()=>b,n8:()=>T,q6:()=>U,tZ:()=>y,yw:()=>P});var r=t(22820),o=t(18247),a=t(57820),i=t.n(a),u=t(64361),c=t(65656),s=t(296),l=t(63854),f=t(67400),v="gu_hide_support_messaging",d="gu_recurring_contributor",g="gu.contributions.contrib-timestamp",m="gu.noRRBanner",h=function(n){var e,t,r=function(n){switch((0,u.R)({name:v})){case"true":return!0;case"false":return!1;default:return!!n&&"Pending"}}(n);return"Pending"===r?"Pending":r||(t=function(){var n=(0,u.R)({name:g});if(n)return(n?parseInt(n,10):0)||void 0}(),!(0,c.b)(t)&&(e=Date.now()-t,Math.floor(e/864e5)<=90))},p=[1,3,7],w=[1,3,5,7],_=function(){return null!==(0,u.R)({name:"gu_article_count_opt_out"})},b=function(){return new Promise((function(n){(0,u.R)({name:"gu-cmp-disabled",shouldMemoize:!0})&&n(!0),(0,l.Ym)((function(e){var t=e.usnat,r=e.tcfv2,o=e.aus;if(null!=t?t:o)n(!0);else if(r){var a=p.every((function(n){return r.consents[n]}));a||s.I.local.remove("gu.history.weeklyArticleCount"),n(a)}}))}))},R=function(){var n=(0,o.A)(i().mark((function n(){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,b();case 2:return e=n.sent,n.abrupt("return",!e||_());case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),P=function(){var n=(0,o.A)(i().mark((function n(){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,b();case 2:return e=n.sent,n.abrupt("return",!e||_());case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),I=function(){var n=(0,f.useState)("Pending"),e=(0,r.A)(n,2),t=e[0],o=e[1];return(0,f.useEffect)((function(){R().then(o).catch((function(){return o(!0)}))}),[]),t},C=function(){return new Promise((function(n){(0,u.R)({name:"gu-cmp-disabled",shouldMemoize:!0})&&n(!0),(0,l.Ym)((function(e){var t=e.usnat,r=e.tcfv2,o=e.aus;if(null!=t?t:o)n(!0);else if(r){var a=w.every((function(n){return r.consents[n]}));n(a)}}))}))},T=function(){return!!s.I.local.get(m)},k=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Date.now();return s.I.local.set(m,!0,n+12e5)},y=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Date.now();return!!n&&e-new Date(n).getTime()<36e5},U=function(){var n=(0,u.R)({name:"GU_CO_COMPLETE",shouldMemoize:!0});if(n){var e;try{e=JSON.parse(decodeURIComponent(n))}catch(n){}return e}}},46680:(n,e,t)=>{t.r(e),t.d(e,{changeGeolocation:()=>w,getForcedVariant:()=>_,showMeTheBanner:()=>g,showMeTheEpic:()=>d,showNextVariant:()=>h,showPreviousVariant:()=>p});var r=t(296),o=t(34013),a=t(64361),i=t(30837),u=t(28118),c=t(34166),s=[u.Vi,u.Pp,u.VF],l="GU_mvt_id",f=1e6,v=function(n,e){if(e)alert('This page has "Prevent membership/contribution appeals" ticked in Composer. Please try a different page');else{for(var t=0,a=s;t<a.length;t++){var c=a[t];(0,i.z)({name:c})}r.I.local.remove("gu.contributions.views"),n&&(0,o.T)({name:u.VF,value:Date.now().toString()}),window.location.reload()}},d=function(){v(arguments.length>0&&void 0!==arguments[0]&&arguments[0],arguments.length>1?arguments[1]:void 0)},g=function(){var n=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=arguments.length>1?arguments[1]:void 0;m(),r.I.local.remove("gu.prefs.engagementBannerLastClosedAt"),r.I.local.remove("gu.prefs.subscriptionBannerLastClosedAt"),r.I.local.remove("gu.prefs.abandonedBasketLastClosedAt"),r.I.local.remove("gu.noRRBannerTimestamp"),v(n,e)},m=function(){(0,i.z)({name:"gu-cmp-disabled"})},h=function(){var n,e,t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],r=arguments.length>1?arguments[1]:void 0;(e=parseInt(null!==(n=(0,a.R)({name:l}))&&void 0!==n?n:"10",10))&&(e===f?(0,o.T)({name:l,value:"1"}):(0,o.T)({name:l,value:"".concat(e+1)})),v(t,r)},p=function(){var n,e,t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],r=arguments.length>1?arguments[1]:void 0;(e=parseInt(null!==(n=(0,a.R)({name:l}))&&void 0!==n?n:"10",10))&&(0===e?(0,o.T)({name:l,value:f.toString()}):(0,o.T)({name:l,value:"".concat(e-1)})),v(t,r)},w=function(){var n=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=arguments.length>1?arguments[1]:void 0;(0,c.C)().then((function(t){var o=window.prompt("Enter two-letter geolocation code (e.g. GB, US, AU). Current is ".concat(null!=t?t:"null","."));"UK"===o?alert("'UK' is not a valid geolocation - please use 'GB' instead!"):o&&(r.I.local.set("gu.geo.override",o),v(n,e))})).catch((function(n){console.error("changeGeolocation - error: ".concat(String(n)))}))},_=function(n){if(URLSearchParams){var e=new URLSearchParams(window.location.search).get("force-".concat(n));if(e)return e}return null}}}]);
//# sourceMappingURL=readerRevenueDevUtils.client.web.legacy.bd9539c3feefeed6bec2.js.map