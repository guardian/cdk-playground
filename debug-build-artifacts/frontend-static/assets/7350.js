"use strict";
exports.id = 7350;
exports.ids = [7350];
exports.modules = {

/***/ 71849:
/*!***********************************************************!*\
  !*** ./src/components/marketing/header/HeaderWrapper.tsx ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   d: () => (/* binding */ headerWrapper),
/* harmony export */   z: () => (/* binding */ validatedHeaderWrapper)
/* harmony export */ });
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/react/jsx-runtime */ 5743);
/* harmony import */ var _guardian_support_dotcom_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @guardian/support-dotcom-components */ 29995);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ 43532);
/* harmony import */ var _lib_useIsInView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../lib/useIsInView */ 58452);
/* harmony import */ var _lib_tracking__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/tracking */ 81412);
const headerWrapper=Header=>{const Wrapped=({content,mobileContent,tracking,countryCode,submitComponentEvent,numArticles})=>{const buildEnrichedCta=cta=>{if((0,_lib_tracking__WEBPACK_IMPORTED_MODULE_3__/* .isProfileUrl */ .Bl)(cta.baseUrl)){return{ctaUrl:(0,_lib_tracking__WEBPACK_IMPORTED_MODULE_3__/* .addTrackingParamsToProfileUrl */ .qU)(cta.baseUrl,tracking),ctaText:cta.text}}return{ctaUrl:(0,_lib_tracking__WEBPACK_IMPORTED_MODULE_3__/* .addRegionIdAndTrackingParamsToSupportUrl */ .QP)(cta.baseUrl,tracking,numArticles,countryCode),ctaText:cta.text}};const primaryCta=content.primaryCta?buildEnrichedCta(content.primaryCta):null;const secondaryCta=content.secondaryCta?buildEnrichedCta(content.secondaryCta):null;const renderedContent={heading:content.heading,subheading:content.subheading,primaryCta,secondaryCta};const mobilePrimaryCta=mobileContent?.primaryCta?buildEnrichedCta(mobileContent.primaryCta):primaryCta;const mobileSecondaryCta=mobileContent?.secondaryCta?buildEnrichedCta(mobileContent.secondaryCta):secondaryCta;const renderedMobileContent=mobileContent?{heading:mobileContent.heading,subheading:mobileContent.subheading,primaryCta:mobilePrimaryCta,secondaryCta:mobileSecondaryCta}:undefined;const{abTestName,abTestVariant,componentType,campaignCode}=tracking;const onCtaClick=componentId=>{return()=>{const componentClickEvent=(0,_lib_tracking__WEBPACK_IMPORTED_MODULE_3__/* .createClickEventFromTracking */ .Mf)(tracking,`${componentId} : cta`);if(submitComponentEvent){submitComponentEvent(componentClickEvent)}}};const sendOphanEvent=(0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(action=>{if(submitComponentEvent){submitComponentEvent({component:{componentType,id:campaignCode,campaignCode},action,abTest:{name:abTestName,variant:abTestVariant}})}},[abTestName,abTestVariant,campaignCode,componentType,submitComponentEvent]);const[hasBeenSeen,setNode]=(0,_lib_useIsInView__WEBPACK_IMPORTED_MODULE_2__/* .useIsInView */ .E)({debounce:true,threshold:0});(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{if(hasBeenSeen){sendOphanEvent("VIEW")}},[hasBeenSeen,sendOphanEvent]);(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{sendOphanEvent("INSERT")},[sendOphanEvent]);return /*#__PURE__*/(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{ref:setNode,children:/*#__PURE__*/(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Header,{content:renderedContent,mobileContent:renderedMobileContent,onCtaClick:onCtaClick(campaignCode)})})};return Wrapped};const validate=props=>{const result=_guardian_support_dotcom_components__WEBPACK_IMPORTED_MODULE_0__/* .headerPropsSchema */ .n5.safeParse(props);return result.success};const validatedHeaderWrapper=Header=>{return props=>{if(validate(props)){const Module=headerWrapper(Header);return /*#__PURE__*/(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Module,{...props})}return /*#__PURE__*/(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment,{})}};

/***/ }),

/***/ 77350:
/*!****************************************************************!*\
  !*** ./src/components/marketing/header/SignInPromptHeader.tsx ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SignInPromptHeader: () => (/* binding */ validated),
/* harmony export */   SignInPromptHeaderUnvalidated: () => (/* binding */ unvalidated)
/* harmony export */ });
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @emotion/react/jsx-runtime */ 5743);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/react */ 43102);
/* harmony import */ var _guardian_source_foundations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @guardian/source/foundations */ 96378);
/* harmony import */ var _guardian_source_foundations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @guardian/source/foundations */ 7351);
/* harmony import */ var _guardian_source_foundations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @guardian/source/foundations */ 99923);
/* harmony import */ var _guardian_source_react_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @guardian/source/react-components */ 3959);
/* harmony import */ var _guardian_source_react_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @guardian/source/react-components */ 68163);
/* harmony import */ var _guardian_source_react_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @guardian/source/react-components */ 14302);
/* harmony import */ var _guardian_source_react_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @guardian/source/react-components */ 15168);
/* harmony import */ var _palette__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../palette */ 53694);
/* harmony import */ var _HeaderWrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HeaderWrapper */ 71849);
const gridStyles=(0,_emotion_react__WEBPACK_IMPORTED_MODULE_1__.css)`
	display: grid;

	grid-template-rows: auto;
	grid-template-columns: auto;

	grid-template-areas:
		'heading     cta1'
		'subheading  .   ';
`;const textStyles=(0,_emotion_react__WEBPACK_IMPORTED_MODULE_1__.css)`
	margin-right: ${_guardian_source_foundations__WEBPACK_IMPORTED_MODULE_2__/* .space */ .x[3]}px;
`;const headingStyles=(0,_emotion_react__WEBPACK_IMPORTED_MODULE_1__.css)`
	grid-area: 'heading';

	color: ${(0,_palette__WEBPACK_IMPORTED_MODULE_3__/* .palette */ .M)("--masthead-top-bar-text")};
	${_guardian_source_foundations__WEBPACK_IMPORTED_MODULE_4__/* .headlineBold20 */ .aal}

	${_guardian_source_foundations__WEBPACK_IMPORTED_MODULE_5__/* .from */ .HT.desktop} {
		${_guardian_source_foundations__WEBPACK_IMPORTED_MODULE_4__/* .headlineBold24 */ .OAJ}
	}
`;const subHeadingStyles=(0,_emotion_react__WEBPACK_IMPORTED_MODULE_1__.css)`
	grid-area: 'subheading';

	color: ${(0,_palette__WEBPACK_IMPORTED_MODULE_3__/* .palette */ .M)("--masthead-top-bar-text")};
	${_guardian_source_foundations__WEBPACK_IMPORTED_MODULE_4__/* .textSans14 */ .WuG}
`;const buttonStyles=(0,_emotion_react__WEBPACK_IMPORTED_MODULE_1__.css)`
	margin: 0 0 0 ${_guardian_source_foundations__WEBPACK_IMPORTED_MODULE_2__/* .space */ .x[2]}px;

	${_guardian_source_foundations__WEBPACK_IMPORTED_MODULE_5__/* .from */ .HT.tablet} {
		margin: ${_guardian_source_foundations__WEBPACK_IMPORTED_MODULE_2__/* .space */ .x[1]}px 0 0 ${_guardian_source_foundations__WEBPACK_IMPORTED_MODULE_2__/* .space */ .x[2]}px;
	}
`;const SignInPromptHeader=props=>{const{heading,subheading,primaryCta}=props.content;const onClick=()=>props.onCtaClick?.();return /*#__PURE__*/(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div",{css:gridStyles,children:[/*#__PURE__*/(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_guardian_source_react_components__WEBPACK_IMPORTED_MODULE_7__/* .Hide */ .L,{until:"tablet",children:/*#__PURE__*/(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div",{css:textStyles,children:[/*#__PURE__*/(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h2",{css:headingStyles,children:heading}),/*#__PURE__*/(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span",{css:subHeadingStyles,children:subheading})]})}),primaryCta&&/*#__PURE__*/(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment,{children:[/*#__PURE__*/(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_guardian_source_react_components__WEBPACK_IMPORTED_MODULE_7__/* .Hide */ .L,{until:"tablet",children:/*#__PURE__*/(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_guardian_source_react_components__WEBPACK_IMPORTED_MODULE_8__/* .LinkButton */ .z,{theme:_guardian_source_react_components__WEBPACK_IMPORTED_MODULE_9__/* .themeButtonBrand */ .Tu,priority:"primary",href:primaryCta.ctaUrl,icon:/*#__PURE__*/(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_guardian_source_react_components__WEBPACK_IMPORTED_MODULE_10__/* .SvgArrowRightStraight */ ._,{}),iconSide:"right",onClick:onClick,nudgeIcon:true,size:"xsmall",cssOverrides:buttonStyles,style:{gridArea:"cta1"},children:primaryCta.ctaText})}),/*#__PURE__*/(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_guardian_source_react_components__WEBPACK_IMPORTED_MODULE_7__/* .Hide */ .L,{from:"tablet",children:/*#__PURE__*/(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_guardian_source_react_components__WEBPACK_IMPORTED_MODULE_8__/* .LinkButton */ .z,{theme:_guardian_source_react_components__WEBPACK_IMPORTED_MODULE_9__/* .themeButtonBrand */ .Tu,priority:"primary",href:props.mobileContent?.primaryCta?.ctaUrl??primaryCta.ctaUrl,cssOverrides:buttonStyles,size:"xsmall",children:props.mobileContent?.primaryCta?.ctaText??primaryCta.ctaText})})]})]})};const unvalidated=(0,_HeaderWrapper__WEBPACK_IMPORTED_MODULE_0__/* .headerWrapper */ .d)(SignInPromptHeader);const validated=(0,_HeaderWrapper__WEBPACK_IMPORTED_MODULE_0__/* .validatedHeaderWrapper */ .z)(SignInPromptHeader);

/***/ })

};
;
//# sourceMappingURL=7350.js.map