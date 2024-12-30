"use strict";
exports.id = 6036;
exports.ids = [6036];
exports.modules = {

/***/ 26036:
/*!******************************************!*\
  !*** ./src/lib/readerRevenueDevUtils.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   changeGeolocation: () => (/* binding */ changeGeolocation),
/* harmony export */   getForcedVariant: () => (/* binding */ getForcedVariant),
/* harmony export */   showMeTheBanner: () => (/* binding */ showMeTheBanner),
/* harmony export */   showMeTheEpic: () => (/* binding */ showMeTheEpic),
/* harmony export */   showNextVariant: () => (/* binding */ showNextVariant),
/* harmony export */   showPreviousVariant: () => (/* binding */ showPreviousVariant)
/* harmony export */ });
/* harmony import */ var _guardian_libs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @guardian/libs */ 61082);
/* harmony import */ var _guardian_libs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @guardian/libs */ 11735);
/* harmony import */ var _guardian_libs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @guardian/libs */ 18411);
/* harmony import */ var _guardian_libs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @guardian/libs */ 96811);
/* harmony import */ var _contributions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contributions */ 36226);
/* harmony import */ var _getCountryCode__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./getCountryCode */ 2899);
const readerRevenueCookies=[_contributions__WEBPACK_IMPORTED_MODULE_0__/* .HIDE_SUPPORT_MESSAGING_COOKIE */ .Vi,_contributions__WEBPACK_IMPORTED_MODULE_0__/* .RECURRING_CONTRIBUTOR_COOKIE */ .Pp,_contributions__WEBPACK_IMPORTED_MODULE_0__/* .SUPPORT_ONE_OFF_CONTRIBUTION_COOKIE */ .VF];const clearEpicViewLog=()=>_guardian_libs__WEBPACK_IMPORTED_MODULE_1__/* .storage */ .I.local.remove("gu.contributions.views");const clearBannerLastClosedAt=()=>{_guardian_libs__WEBPACK_IMPORTED_MODULE_1__/* .storage */ .I.local.remove("gu.prefs.engagementBannerLastClosedAt");_guardian_libs__WEBPACK_IMPORTED_MODULE_1__/* .storage */ .I.local.remove("gu.prefs.subscriptionBannerLastClosedAt");_guardian_libs__WEBPACK_IMPORTED_MODULE_1__/* .storage */ .I.local.remove("gu.prefs.abandonedBasketLastClosedAt");_guardian_libs__WEBPACK_IMPORTED_MODULE_1__/* .storage */ .I.local.remove("gu.noRRBannerTimestamp")};const fakeOneOffContributor=()=>(0,_guardian_libs__WEBPACK_IMPORTED_MODULE_2__/* .setCookie */ .T)({name:_contributions__WEBPACK_IMPORTED_MODULE_0__/* .SUPPORT_ONE_OFF_CONTRIBUTION_COOKIE */ .VF,value:Date.now().toString()});const MULTIVARIATE_ID_COOKIE="GU_mvt_id";const MAX_CLIENT_MVT_ID=1e6;const incrementMvtCookie=()=>{const mvtId=parseInt((0,_guardian_libs__WEBPACK_IMPORTED_MODULE_3__/* .getCookie */ .R)({name:MULTIVARIATE_ID_COOKIE})??"10",10);if(mvtId){if(mvtId===MAX_CLIENT_MVT_ID){(0,_guardian_libs__WEBPACK_IMPORTED_MODULE_2__/* .setCookie */ .T)({name:MULTIVARIATE_ID_COOKIE,value:"1"})}else{(0,_guardian_libs__WEBPACK_IMPORTED_MODULE_2__/* .setCookie */ .T)({name:MULTIVARIATE_ID_COOKIE,value:`${mvtId+1}`})}}};const decrementMvtCookie=()=>{const mvtId=parseInt((0,_guardian_libs__WEBPACK_IMPORTED_MODULE_3__/* .getCookie */ .R)({name:MULTIVARIATE_ID_COOKIE})??"10",10);if(mvtId){if(mvtId===0){(0,_guardian_libs__WEBPACK_IMPORTED_MODULE_2__/* .setCookie */ .T)({name:MULTIVARIATE_ID_COOKIE,value:MAX_CLIENT_MVT_ID.toString()})}else{(0,_guardian_libs__WEBPACK_IMPORTED_MODULE_2__/* .setCookie */ .T)({name:MULTIVARIATE_ID_COOKIE,value:`${mvtId-1}`})}}};const clearCommonReaderRevenueStateAndReload=(asExistingSupporter,shouldHideReaderRevenue)=>{if(shouldHideReaderRevenue){alert('This page has "Prevent membership/contribution appeals" ticked in Composer. Please try a different page');return}for(const cookie of readerRevenueCookies)(0,_guardian_libs__WEBPACK_IMPORTED_MODULE_4__/* .removeCookie */ .z)({name:cookie});clearEpicViewLog();if(asExistingSupporter){fakeOneOffContributor()}window.location.reload()};const showMeTheEpic=(asExistingSupporter=false,shouldHideReaderRevenue)=>{clearCommonReaderRevenueStateAndReload(asExistingSupporter,shouldHideReaderRevenue)};const showMeTheBanner=(asExistingSupporter=false,shouldHideReaderRevenue)=>{enableCmp();clearBannerLastClosedAt();clearCommonReaderRevenueStateAndReload(asExistingSupporter,shouldHideReaderRevenue)};const enableCmp=()=>{(0,_guardian_libs__WEBPACK_IMPORTED_MODULE_4__/* .removeCookie */ .z)({name:"gu-cmp-disabled"})};const showNextVariant=(asExistingSupporter=false,shouldHideReaderRevenue)=>{incrementMvtCookie();clearCommonReaderRevenueStateAndReload(asExistingSupporter,shouldHideReaderRevenue)};const showPreviousVariant=(asExistingSupporter=false,shouldHideReaderRevenue)=>{decrementMvtCookie();clearCommonReaderRevenueStateAndReload(asExistingSupporter,shouldHideReaderRevenue)};const changeGeolocation=(asExistingSupporter=false,shouldHideReaderRevenue)=>{(0,_getCountryCode__WEBPACK_IMPORTED_MODULE_5__/* .getLocaleCode */ .C)().then(current=>{const geo=window.prompt(`Enter two-letter geolocation code (e.g. GB, US, AU). Current is ${current??"null"}.`);if(geo==="UK"){alert(`'UK' is not a valid geolocation - please use 'GB' instead!`)}else if(geo){_guardian_libs__WEBPACK_IMPORTED_MODULE_1__/* .storage */ .I.local.set("gu.geo.override",geo);clearCommonReaderRevenueStateAndReload(asExistingSupporter,shouldHideReaderRevenue)}}).catch(e=>{console.error(`changeGeolocation - error: ${String(e)}`)})};const getForcedVariant=type=>{if(URLSearchParams){const params=new URLSearchParams(window.location.search);const value=params.get(`force-${type}`);if(value){return value}}return null};

/***/ })

};
;
//# sourceMappingURL=6036.js.map