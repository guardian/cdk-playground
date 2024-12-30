"use strict";
exports.id = 5621;
exports.ids = [5621];
exports.modules = {

/***/ 88002:
/*!*************************************************!*\
  !*** ./src/client/poorPerformanceMonitoring.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isPerformingPoorly: () => (/* binding */ isPerformingPoorly)
/* harmony export */ });
/* unused harmony export recordPoorPerformance */
/* harmony import */ var _guardian_libs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @guardian/libs */ 60439);
/* harmony import */ var _ophan_ophan__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ophan/ophan */ 50026);
const logPerformanceInfo=(name,data)=>(0,_guardian_libs__WEBPACK_IMPORTED_MODULE_1__/* .log */ .Rm)("dotcom","⏱",name,data);const isFirstContentfulPaintAboveThreshold=async(threshold=2400)=>{try{const fcp=await new Promise(resolve=>{setTimeout(()=>resolve(Infinity),threshold-performance.now());new PerformanceObserver((entries,observer)=>{for(const entry of entries.getEntries()){if(entry.name!=="first-contentful-paint")return;logPerformanceInfo("paint",entry);observer.disconnect();resolve(entry.startTime)}}).observe({type:"paint",buffered:true})});return fcp>threshold}catch(error){return true}};const isTimeToFirstByteAboveThreshold=(threshold=1200)=>{try{const[nav]=window.performance.getEntriesByType("navigation");if(!nav)return true;if(nav instanceof PerformanceNavigationTiming){logPerformanceInfo("navigation",{domContentLoadedEventEnd:nav.domContentLoadedEventEnd,type:nav.type,responseEnd:nav.responseEnd});return nav.responseStart-nav.startTime>threshold}return false}catch(error){return true}};let memoizedPerformingPoorly;const isPerformingPoorly=async()=>memoizedPerformingPoorly??=isTimeToFirstByteAboveThreshold()&&await isFirstContentfulPaintAboveThreshold();const recordPoorPerformance=async renderingTarget=>{try{if(await isPerformingPoorly()){log("dotcom",`🐌 Poor page performance`);return recordExperiences(renderingTarget,["poor-page-performance"])}}catch(error){}};

/***/ })

};
;
//# sourceMappingURL=5621.js.map