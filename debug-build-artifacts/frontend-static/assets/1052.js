"use strict";
exports.id = 1052;
exports.ids = [1052];
exports.modules = {

/***/ 91052:
/*!**********************************************************************!*\
  !*** ./src/components/marketing/epics/ContributionsLiveblogEpic.tsx ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContributionsLiveblogEpic: () => (/* binding */ ContributionsLiveblogEpic)
/* harmony export */ });
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @emotion/react/jsx-runtime */ 5743);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @emotion/react */ 43102);
/* harmony import */ var _guardian_source_foundations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @guardian/source/foundations */ 77907);
/* harmony import */ var _guardian_source_foundations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @guardian/source/foundations */ 99923);
/* harmony import */ var _guardian_source_foundations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @guardian/source/foundations */ 7351);
/* harmony import */ var _guardian_source_foundations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @guardian/source/foundations */ 96378);
/* harmony import */ var _guardian_source_development_kitchen_react_components__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @guardian/source-development-kitchen/react-components */ 11596);
/* harmony import */ var _guardian_support_dotcom_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @guardian/support-dotcom-components */ 29995);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ 43532);
/* harmony import */ var _lib_useIsInView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../lib/useIsInView */ 58452);
/* harmony import */ var _lib_replaceArticleCount__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/replaceArticleCount */ 79971);
/* harmony import */ var _lib_tracking__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/tracking */ 81412);
/* harmony import */ var _lib_viewLog__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../lib/viewLog */ 54288);
/* harmony import */ var _ContributionsEpicNewsletterSignup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ContributionsEpicNewsletterSignup */ 47267);
/* harmony import */ var _ctas_ContributionsEpicCtasContainer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ctas/ContributionsEpicCtasContainer */ 15870);
const getBackgroundColour=isInTestVariant=>{return isInTestVariant?"#E2E3BF":_guardian_source_foundations__WEBPACK_IMPORTED_MODULE_7__/* .palette */ .M.neutral[100]};const getHeadingBackgroundColour=isInTestVariant=>{return isInTestVariant?"#051D32":_guardian_source_foundations__WEBPACK_IMPORTED_MODULE_7__/* .palette */ .M.brandAlt[400]};const getHeadingColour=isInTestVariant=>{return isInTestVariant?"#FFFFFF":_guardian_source_foundations__WEBPACK_IMPORTED_MODULE_7__/* .palette */ .M.neutral[7]};const container=(tracking,isInTestVariant)=>(0,_emotion_react__WEBPACK_IMPORTED_MODULE_8__.css)`
	padding: 6px 10px 28px 10px;
	border-top: 1px solid ${_guardian_source_foundations__WEBPACK_IMPORTED_MODULE_7__/* .palette */ .M.brandAlt[400]};
	border-bottom: 1px solid ${_guardian_source_foundations__WEBPACK_IMPORTED_MODULE_7__/* .palette */ .M.neutral[86]};

	background: ${getBackgroundColour(isInTestVariant)};

	border: 1px solid ${_guardian_source_foundations__WEBPACK_IMPORTED_MODULE_7__/* .palette */ .M.neutral[0]};

	* {
		::selection {
			background: ${_guardian_source_foundations__WEBPACK_IMPORTED_MODULE_7__/* .palette */ .M.brandAlt[400]};
		}
	}

	${_guardian_source_foundations__WEBPACK_IMPORTED_MODULE_9__/* .from */ .HT.tablet} {
		padding-left: ${tracking.clientName==="dcr"?"60px":"80px"};
		padding-right: 20px;
	}
`;const textContainer=(0,_emotion_react__WEBPACK_IMPORTED_MODULE_8__.css)`
	${_guardian_source_foundations__WEBPACK_IMPORTED_MODULE_10__/* .article17 */ .Ni};

	font-size: 16px;

	p {
		margin: 0;
	}

	& > p + p {
		margin-top: ${_guardian_source_foundations__WEBPACK_IMPORTED_MODULE_11__/* .space */ .x[3]}px;
	}

	${_guardian_source_foundations__WEBPACK_IMPORTED_MODULE_9__/* .from */ .HT.tablet} {
		& > p + p {
			margin-top: ${_guardian_source_foundations__WEBPACK_IMPORTED_MODULE_11__/* .space */ .x[4]}px;
		}
	}
`;const yellowHeading=(tracking,isInTestVariant)=>(0,_emotion_react__WEBPACK_IMPORTED_MODULE_8__.css)`
	${_guardian_source_foundations__WEBPACK_IMPORTED_MODULE_10__/* .headlineBold34 */ .r9N};
	font-size: 28px;
	color: ${getHeadingColour(isInTestVariant)};
	background-color: ${getHeadingBackgroundColour(isInTestVariant)};
	border-top: 1px solid ${_guardian_source_foundations__WEBPACK_IMPORTED_MODULE_7__/* .palette */ .M.neutral[0]};
	border-left: 1px solid ${_guardian_source_foundations__WEBPACK_IMPORTED_MODULE_7__/* .palette */ .M.neutral[0]};
	border-right: 1px solid ${_guardian_source_foundations__WEBPACK_IMPORTED_MODULE_7__/* .palette */ .M.neutral[0]};

	padding: 8px 10px 12px 10px;
	${_guardian_source_foundations__WEBPACK_IMPORTED_MODULE_9__/* .from */ .HT.tablet} {
		padding-left: ${tracking.clientName==="dcr"?"60px":"80px"};
		padding-right: 20px;
	}
`;const tickerContainer=(0,_emotion_react__WEBPACK_IMPORTED_MODULE_8__.css)`
	margin-top: ${_guardian_source_foundations__WEBPACK_IMPORTED_MODULE_11__/* .space */ .x[5]}px;
`;const defaultTickerStylingSettings={filledProgressColour:"#C41C1C",progressBarBackgroundColour:"#D9A78E",headlineColour:"#000000",totalColour:"#C41C1C",goalColour:"#000000"};const LiveblogEpicBodyParagraph=({paragraph,numArticles})=>{const elements=(0,_lib_replaceArticleCount__WEBPACK_IMPORTED_MODULE_3__/* .replaceArticleCount */ .k)(paragraph,numArticles,"epic");return /*#__PURE__*/(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("p",{children:elements})};const LiveblogEpicBody=({numArticles,paragraphs})=>{return /*#__PURE__*/(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("div",{css:textContainer,children:paragraphs.map(paragraph=>/*#__PURE__*/(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(LiveblogEpicBodyParagraph,{paragraph:paragraph,numArticles:numArticles},paragraph))})};const ContributionsLiveblogEpic=({variant,countryCode,articleCounts,tracking,submitComponentEvent,onReminderOpen,fetchEmail})=>{const{newsletterSignup,tickerSettings}=variant;const isColourInTestVariant=tracking.abTestName.includes("_LB_EPIC_BG_COLOUR")&&tracking.abTestVariant==="VARIANT";const[hasBeenSeen,setNode]=(0,_lib_useIsInView__WEBPACK_IMPORTED_MODULE_2__/* .useIsInView */ .E)({debounce:true});(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{if(hasBeenSeen){(0,_lib_viewLog__WEBPACK_IMPORTED_MODULE_13__/* .logEpicView */ .B)(tracking.abTestName);if(submitComponentEvent){submitComponentEvent((0,_lib_tracking__WEBPACK_IMPORTED_MODULE_4__/* .createViewEventFromTracking */ .t0)(tracking,tracking.campaignCode))}}},[hasBeenSeen,submitComponentEvent,tracking]);(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{if(submitComponentEvent){submitComponentEvent((0,_lib_tracking__WEBPACK_IMPORTED_MODULE_4__/* .createInsertEventFromTracking */ .rx)(tracking,tracking.campaignCode))}},[submitComponentEvent,tracking]);const cleanParagraphs=variant.paragraphs.map(paragraph=>(0,_guardian_support_dotcom_components__WEBPACK_IMPORTED_MODULE_0__/* .replaceNonArticleCountPlaceholders */ .BA)(paragraph,countryCode));const cleanHeading=(0,_guardian_support_dotcom_components__WEBPACK_IMPORTED_MODULE_0__/* .replaceNonArticleCountPlaceholders */ .BA)(variant.heading)||"Support the Guardian";if(cleanParagraphs.some(_guardian_support_dotcom_components__WEBPACK_IMPORTED_MODULE_0__/* .containsNonArticleCountPlaceholder */ .FT)||(0,_guardian_support_dotcom_components__WEBPACK_IMPORTED_MODULE_0__/* .containsNonArticleCountPlaceholder */ .FT)(cleanHeading)){return /*#__PURE__*/(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.Fragment,{})}return /*#__PURE__*/(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div",{"data-testid":"contributions-liveblog-epic",ref:setNode,children:[!!cleanHeading&&/*#__PURE__*/(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("div",{css:yellowHeading(tracking,isColourInTestVariant),children:cleanHeading}),/*#__PURE__*/(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("section",{css:container(tracking,isColourInTestVariant),children:[/*#__PURE__*/(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(LiveblogEpicBody,{paragraphs:cleanParagraphs,numArticles:articleCounts.forTargetedWeeks}),tickerSettings?.tickerData&&/*#__PURE__*/(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("div",{css:tickerContainer,children:/*#__PURE__*/(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_guardian_source_development_kitchen_react_components__WEBPACK_IMPORTED_MODULE_14__/* .Ticker */ .R,{currencySymbol:tickerSettings.currencySymbol,copy:{headline:tickerSettings.copy.countLabel},tickerData:tickerSettings.tickerData,tickerStylingSettings:defaultTickerStylingSettings,size:"medium"})}),newsletterSignup?/*#__PURE__*/(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_ContributionsEpicNewsletterSignup__WEBPACK_IMPORTED_MODULE_5__/* .ContributionsEpicNewsletterSignup */ .o,{newsletterId:newsletterSignup.newsletterId,successDescription:newsletterSignup.successDescription,tracking:tracking}):/*#__PURE__*/(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_ctas_ContributionsEpicCtasContainer__WEBPACK_IMPORTED_MODULE_6__/* .ContributionsEpicCtasContainer */ .B,{variant:variant,tracking:tracking,countryCode:countryCode,articleCounts:articleCounts,onReminderOpen:onReminderOpen,fetchEmail:fetchEmail,submitComponentEvent:submitComponentEvent,isColourInTestVariant:isColourInTestVariant})]})]})};

/***/ })

};
;
//# sourceMappingURL=1052.js.map