"use strict";(self.webpackChunk_guardian_dotcom_rendering=self.webpackChunk_guardian_dotcom_rendering||[]).push([[8047],{80123:(n,e,t)=>{t.r(e),t.d(e,{DiscussionWeb:()=>w});var r=t(62335),i=t(22820),o=t(18247),c=t(57820),u=t.n(c),s=t(50484),a=t(71456),d=t(90760),f=t(67400),p=t(73771),h=t(17950),l=t(66186),g=t(48739),b=t(5676),m=t(87057);function k(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function O(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?k(Object(t),!0).forEach((function(e){(0,r.A)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):k(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}var v=function(){var n=(0,o.A)(u().mark((function n(e){var t,r,i,o,c;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.discussionApiUrl,r=e.authStatus,n.next=3,fetch((0,a.w)(t,"profile/me?strict_sanctions_check=false"),(0,h.Kv)(r)).then((function(n){return n.json()})).catch((function(){}));case 3:if(i=n.sent,(0,d.G)(i)){n.next=6;break}return n.abrupt("return");case 6:if((0,d.G)(i.userProfile)){n.next=8;break}return n.abrupt("return");case 8:return o=i.userProfile,c=o.badge.some((function(n){return"Staff"===n.name})),n.abrupt("return",c?{kind:"Staff",profile:o,onComment:(0,p.Im)(r),onReply:(0,p.Tm)(r),onRecommend:(0,p.vh)(r),onPick:(0,p.XH)(r),onUnpick:(0,p.KW)(r),addUsername:(0,p.S)(r),reportAbuse:(0,p.Vf)(r)}:{kind:"Reader",profile:o,onComment:(0,p.Im)(r),onReply:(0,p.Tm)(r),onRecommend:(0,p.vh)(r),addUsername:(0,p.S)(r),reportAbuse:(0,p.Vf)(r)});case 11:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),w=function(n){var e=(0,g.p)(),t=(0,l.w)(),r=(0,f.useState)(),o=(0,i.A)(r,2),c=o[0],u=o[1];return(0,f.useEffect)((function(){"Pending"!==t.kind&&"SignedOutWithCookies"!==t.kind&&"SignedOutWithOkta"!==t.kind&&v({discussionApiUrl:n.discussionApiUrl,authStatus:t}).then(u).catch((function(){}))}),[t,n.discussionApiUrl]),e?(0,s.jsx)(b.d,O(O({user:c},n),{},{reportAbuseUnauthenticated:(0,p.Vf)(void 0)})):(0,s.jsx)(m.O,{height:324})}},87057:(n,e,t)=>{t.d(e,{O:()=>l});var r,i=t(34660),o=t(50484),c=t(24017),u=t(65656),s=t(50641),a=t(59648),d=s.M.neutral[93],f=(0,c.keyframes)(r||(r=(0,i.A)(["\n  0% {\n    background-position: -1500px 0;\n  }\n  100% {\n    background-position: 1500px 0;\n  }\n"]))),p=function(n){return(0,c.css)("animation:",f," 2s infinite linear;background:linear-gradient(\n\t\tto right,\n\t\t",n," 4%,\n\t\twhite 25%,\n\t\t",n," 36%\n\t);background-size:1500px 100%;")},h={name:"1ff36h2",styles:"flex-grow:1"},l=function(n){var e=n.height,t=n.rootId,r=n.width,i=n.spaceBelow,s=n.spaceLeft,f=n.shouldShimmer,l=void 0===f||f,g=n.backgroundColor,b=void 0===g?d:g;return(0,o.jsx)("div",{id:t,css:h,"data-name":"placeholder",children:(0,o.jsx)("div",{css:(0,c.css)("min-height:",e,"px;width:",(0,u.b)(r)?"100%":"".concat(r,"px"),";margin-bottom:",i&&a.x[i],"px;margin-left:",s&&a.x[s],"px;background-color:",b,";",l&&p(b),";")})})}},66186:(n,e,t)=>{t.d(e,{T:()=>c,w:()=>u});var r=t(22820),i=t(67400),o=t(17950),c=function(){switch(u().kind){case"Pending":return"Pending";case"SignedInWithCookies":case"SignedInWithOkta":return!0;case"SignedOutWithCookies":case"SignedOutWithOkta":return!1}},u=function(){var n=(0,i.useState)({kind:"Pending"}),e=(0,r.A)(n,2),t=e[0],c=e[1];return(0,i.useEffect)((function(){(0,o.kU)((function(n){c((0,o.dx)(n))}),(function(){return c((0,o.Hn)())})).catch((function(n){console.error(n)}))}),[]),t}},48739:(n,e,t)=>{t.d(e,{p:()=>o});var r=t(22820),i=t(67400),o=function(){var n=(0,i.useState)(!1),e=(0,r.A)(n,2),t=e[0],o=e[1];return(0,i.useEffect)((function(){o(!0)}),[]),t}}}]);
//# sourceMappingURL=DiscussionWeb-importable.client.web.legacy.169d2beaffdee0432ea8.js.map