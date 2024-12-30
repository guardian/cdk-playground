"use strict";
exports.id = 5589;
exports.ids = [5589];
exports.modules = {

/***/ 95589:
/*!******************************************************************!*\
  !*** ./src/components/SignInGate/gateDesigns/SignInGateMain.tsx ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SignInGateMain: () => (/* binding */ SignInGateMain)
/* harmony export */ });
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/react/jsx-runtime */ 5743);
/* harmony import */ var _guardian_libs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @guardian/libs */ 9092);
/* harmony import */ var _guardian_source_react_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @guardian/source/react-components */ 68163);
/* harmony import */ var _guardian_source_react_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @guardian/source/react-components */ 27123);
/* harmony import */ var _guardian_source_react_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @guardian/source/react-components */ 95571);
/* harmony import */ var _ConfigContext__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../ConfigContext */ 15593);
/* harmony import */ var _componentEventTracking__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../componentEventTracking */ 84496);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared */ 81646);
const SignInGateMain=({signInUrl,registerUrl,guUrl,dismissGate,abTest,ophanComponentId,isMandatory=false})=>{const{renderingTarget}=(0,_ConfigContext__WEBPACK_IMPORTED_MODULE_0__/* .useConfig */ .U)();return /*#__PURE__*/(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{css:_shared__WEBPACK_IMPORTED_MODULE_2__/* .signInGateContainer */ .VN,"data-testid":"sign-in-gate-main",children:[/*#__PURE__*/(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("style",{children:_shared__WEBPACK_IMPORTED_MODULE_2__/* .hideElementsCss */ .vo}),/*#__PURE__*/(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{css:_shared__WEBPACK_IMPORTED_MODULE_2__/* .firstParagraphOverlay */ .Tc}),/*#__PURE__*/(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h1",{css:_shared__WEBPACK_IMPORTED_MODULE_2__/* .headingStyles */ .Pw,children:"Register: it’s quick and easy"}),/*#__PURE__*/(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p",{css:_shared__WEBPACK_IMPORTED_MODULE_2__/* .bodyBold */ .Iq,children:"It’s still free to read – this is not a paywall"}),/*#__PURE__*/(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("p",{css:_shared__WEBPACK_IMPORTED_MODULE_2__/* .bodyText */ .G3,children:["We’re committed to keeping our quality reporting open. By registering and providing us with insight into your preferences, you’re helping us to engage with you more deeply, and that allows us to keep our journalism free for all. You’ll always be able to control your own"," ",/*#__PURE__*/(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button",{"data-testid":"sign-in-gate-main_privacy",css:_shared__WEBPACK_IMPORTED_MODULE_2__/* .privacyLink */ .vk,onClick:()=>{_guardian_libs__WEBPACK_IMPORTED_MODULE_4__/* .cmp */ .r2.showPrivacyManager();(0,_componentEventTracking__WEBPACK_IMPORTED_MODULE_1__/* .trackLink */ ._q)(ophanComponentId,"privacy",renderingTarget,abTest)},children:"privacy settings"}),"."]}),/*#__PURE__*/(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{css:_shared__WEBPACK_IMPORTED_MODULE_2__/* .actionButtons */ .uu,children:[/*#__PURE__*/(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_guardian_source_react_components__WEBPACK_IMPORTED_MODULE_5__/* .LinkButton */ .z,{"data-testid":"sign-in-gate-main_register","data-ignore":"global-link-styling",cssOverrides:_shared__WEBPACK_IMPORTED_MODULE_2__/* .registerButton */ .S,priority:"primary",size:"small",href:registerUrl,onClick:()=>{(0,_componentEventTracking__WEBPACK_IMPORTED_MODULE_1__/* .trackLink */ ._q)(ophanComponentId,"register-link",renderingTarget,abTest)},children:"Register for free"}),!isMandatory&&/*#__PURE__*/(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_guardian_source_react_components__WEBPACK_IMPORTED_MODULE_6__/* .Button */ .$,{"data-testid":"sign-in-gate-main_dismiss","data-ignore":"global-link-styling",cssOverrides:_shared__WEBPACK_IMPORTED_MODULE_2__/* .laterButton */ .B6,priority:"subdued",size:"small",onClick:()=>{dismissGate();(0,_componentEventTracking__WEBPACK_IMPORTED_MODULE_1__/* .trackLink */ ._q)(ophanComponentId,"not-now",renderingTarget,abTest)},children:"I’ll do it later"})]}),/*#__PURE__*/(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p",{css:[_shared__WEBPACK_IMPORTED_MODULE_2__/* .bodySeparator */ .kV,_shared__WEBPACK_IMPORTED_MODULE_2__/* .bodyBold */ .Iq,_shared__WEBPACK_IMPORTED_MODULE_2__/* .signInHeader */ .Kx],children:"Have a subscription? Made a contribution? Already registered?"}),/*#__PURE__*/(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_guardian_source_react_components__WEBPACK_IMPORTED_MODULE_7__/* .Link */ .N,{"data-testid":"sign-in-gate-main_signin","data-ignore":"global-link-styling",cssOverrides:_shared__WEBPACK_IMPORTED_MODULE_2__/* .signInLink */ .Le,href:signInUrl,onClick:()=>{(0,_componentEventTracking__WEBPACK_IMPORTED_MODULE_1__/* .trackLink */ ._q)(ophanComponentId,"sign-in-link",renderingTarget,abTest)},children:"Sign In"}),/*#__PURE__*/(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{css:_shared__WEBPACK_IMPORTED_MODULE_2__/* .faq */ .JL,children:[/*#__PURE__*/(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_guardian_source_react_components__WEBPACK_IMPORTED_MODULE_7__/* .Link */ .N,{"data-ignore":"global-link-styling",href:`${guUrl}/membership/2019/dec/20/signing-in-to-the-guardian`,onClick:()=>{(0,_componentEventTracking__WEBPACK_IMPORTED_MODULE_1__/* .trackLink */ ._q)(ophanComponentId,"how-link",renderingTarget,abTest)},children:"Why register & how does it help?"}),/*#__PURE__*/(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_guardian_source_react_components__WEBPACK_IMPORTED_MODULE_7__/* .Link */ .N,{"data-ignore":"global-link-styling",href:`${guUrl}/info/2014/nov/03/why-your-data-matters-to-us-full-text`,onClick:()=>{(0,_componentEventTracking__WEBPACK_IMPORTED_MODULE_1__/* .trackLink */ ._q)(ophanComponentId,"why-link",renderingTarget,abTest)},children:"How will my information & data be used?"}),/*#__PURE__*/(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_guardian_source_react_components__WEBPACK_IMPORTED_MODULE_7__/* .Link */ .N,{"data-ignore":"global-link-styling",href:`${guUrl}/help/identity-faq`,onClick:()=>{(0,_componentEventTracking__WEBPACK_IMPORTED_MODULE_1__/* .trackLink */ ._q)(ophanComponentId,"help-link",renderingTarget,abTest)},children:"Get help with registering or signing in"})]})]})};

/***/ }),

/***/ 81646:
/*!**********************************************************!*\
  !*** ./src/components/SignInGate/gateDesigns/shared.tsx ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   B6: () => (/* binding */ laterButton),
/* harmony export */   G3: () => (/* binding */ bodyText),
/* harmony export */   Iq: () => (/* binding */ bodyBold),
/* harmony export */   JL: () => (/* binding */ faq),
/* harmony export */   Kx: () => (/* binding */ signInHeader),
/* harmony export */   Le: () => (/* binding */ signInLink),
/* harmony export */   Pw: () => (/* binding */ headingStyles),
/* harmony export */   S: () => (/* binding */ registerButton),
/* harmony export */   Tc: () => (/* binding */ firstParagraphOverlay),
/* harmony export */   VN: () => (/* binding */ signInGateContainer),
/* harmony export */   kV: () => (/* binding */ bodySeparator),
/* harmony export */   uu: () => (/* binding */ actionButtons),
/* harmony export */   vk: () => (/* binding */ privacyLink),
/* harmony export */   vo: () => (/* binding */ hideElementsCss)
/* harmony export */ });
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/react */ 43102);
/* harmony import */ var _guardian_source_foundations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @guardian/source/foundations */ 99923);
/* harmony import */ var _guardian_source_foundations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @guardian/source/foundations */ 7351);
/* harmony import */ var _guardian_source_foundations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @guardian/source/foundations */ 96378);
/* harmony import */ var _guardian_source_foundations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @guardian/source/foundations */ 46080);
/* harmony import */ var _guardian_source_foundations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @guardian/source/foundations */ 77907);
const signInGateContainer=(0,_emotion_react__WEBPACK_IMPORTED_MODULE_0__.css)`
	max-width: 617px;

	${_guardian_source_foundations__WEBPACK_IMPORTED_MODULE_1__/* .from */ .HT.desktop} {
		min-height: 600px;
	}
`;const headingStyles=(0,_emotion_react__WEBPACK_IMPORTED_MODULE_0__.css)`
	${_guardian_source_foundations__WEBPACK_IMPORTED_MODULE_2__/* .headlineBold28 */ .aC2};
	border-top: 2px black solid;
	padding-bottom: ${_guardian_source_foundations__WEBPACK_IMPORTED_MODULE_3__/* .space */ .x[12]}px;

	${_guardian_source_foundations__WEBPACK_IMPORTED_MODULE_1__/* .from */ .HT.phablet} {
		padding-right: 160px;
		${_guardian_source_foundations__WEBPACK_IMPORTED_MODULE_2__/* .headlineBold34 */ .r9N};
	}
`;const bodySeparator=(0,_emotion_react__WEBPACK_IMPORTED_MODULE_0__.css)`
	border-top: 1px ${_guardian_source_foundations__WEBPACK_IMPORTED_MODULE_4__/* .line */ .n8.primary} solid;
`;const bodyBold=(0,_emotion_react__WEBPACK_IMPORTED_MODULE_0__.css)`
	${_guardian_source_foundations__WEBPACK_IMPORTED_MODULE_2__/* .textSansBold17 */ .keT}
	padding-bottom: 20px;
	${_guardian_source_foundations__WEBPACK_IMPORTED_MODULE_1__/* .from */ .HT.phablet} {
		padding-right: 130px;
	}
`;const bodyText=(0,_emotion_react__WEBPACK_IMPORTED_MODULE_0__.css)`
	${_guardian_source_foundations__WEBPACK_IMPORTED_MODULE_2__/* .textSans17 */ .NA0}
	padding-bottom: ${_guardian_source_foundations__WEBPACK_IMPORTED_MODULE_3__/* .space */ .x[6]}px;

	${_guardian_source_foundations__WEBPACK_IMPORTED_MODULE_1__/* .from */ .HT.phablet} {
		padding-right: 160px;
	}
`;const signInHeader=(0,_emotion_react__WEBPACK_IMPORTED_MODULE_0__.css)`
	padding-bottom: 0;
`;const actionButtons=(0,_emotion_react__WEBPACK_IMPORTED_MODULE_0__.css)`
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	margin-bottom: 42px;

	> a {
		/* stylelint-disable-next-line declaration-no-important */
		margin-right: ${_guardian_source_foundations__WEBPACK_IMPORTED_MODULE_3__/* .space */ .x[4]}px !important;

		${_guardian_source_foundations__WEBPACK_IMPORTED_MODULE_1__/* .from */ .HT.mobileMedium} {
			/* stylelint-disable-next-line declaration-no-important */
			margin-right: ${_guardian_source_foundations__WEBPACK_IMPORTED_MODULE_3__/* .space */ .x[9]}px !important;
		}

		/* stylelint-disable-next-line declaration-no-important */
		text-decoration: none !important;
	}
`;const registerButton=(0,_emotion_react__WEBPACK_IMPORTED_MODULE_0__.css)`
	/* stylelint-disable-next-line declaration-no-important */
	color: ${_guardian_source_foundations__WEBPACK_IMPORTED_MODULE_4__/* .text */ .Qq.ctaPrimary} !important;
`;const laterButton=(0,_emotion_react__WEBPACK_IMPORTED_MODULE_0__.css)`
	/* stylelint-disable-next-line declaration-no-important */
	color: ${_guardian_source_foundations__WEBPACK_IMPORTED_MODULE_5__/* .palette */ .M.brand[400]} !important;
`;const signInLink=(0,_emotion_react__WEBPACK_IMPORTED_MODULE_0__.css)`
	/* stylelint-disable-next-line declaration-no-important */
	color: ${_guardian_source_foundations__WEBPACK_IMPORTED_MODULE_4__/* .text */ .Qq.anchorPrimary} !important;
	/* stylelint-disable-next-line declaration-no-important */
	text-decoration-color: ${_guardian_source_foundations__WEBPACK_IMPORTED_MODULE_4__/* .line */ .n8.primary} !important;
	text-underline-position: under;
`;const faq=(0,_emotion_react__WEBPACK_IMPORTED_MODULE_0__.css)`
	padding-top: ${_guardian_source_foundations__WEBPACK_IMPORTED_MODULE_3__/* .space */ .x[3]}px;
	padding-bottom: 18px;
	margin-top: ${_guardian_source_foundations__WEBPACK_IMPORTED_MODULE_3__/* .space */ .x[5]}px;

	& a {
		color: ${_guardian_source_foundations__WEBPACK_IMPORTED_MODULE_4__/* .text */ .Qq.anchorPrimary};
		display: block;
		margin-bottom: ${_guardian_source_foundations__WEBPACK_IMPORTED_MODULE_3__/* .space */ .x[4]}px;
		text-decoration-color: ${_guardian_source_foundations__WEBPACK_IMPORTED_MODULE_4__/* .line */ .n8.primary};
		text-underline-position: under;
	}

	& a:hover {
		color: ${_guardian_source_foundations__WEBPACK_IMPORTED_MODULE_4__/* .text */ .Qq.anchorPrimary};
	}
`;const privacyLink=(0,_emotion_react__WEBPACK_IMPORTED_MODULE_0__.css)`
	color: ${_guardian_source_foundations__WEBPACK_IMPORTED_MODULE_4__/* .text */ .Qq.anchorPrimary};
	text-decoration: underline;
	text-decoration-color: ${_guardian_source_foundations__WEBPACK_IMPORTED_MODULE_4__/* .line */ .n8.primary};
	text-underline-position: under;
	border: 0;
	background: transparent;
	/* stylelint-disable-next-line property-disallowed-list */
	font-family: inherit;
	font-size: inherit;
	padding: 0;
	cursor: pointer;
`;const firstParagraphOverlay=(0,_emotion_react__WEBPACK_IMPORTED_MODULE_0__.css)`
	margin-top: -250px;
	width: 100%;
	height: 250px;
	position: absolute;
`;const hideElementsCss=[`.article-body-commercial-selector > * {
        display: none;
    }`,`#sign-in-gate, .article-body-commercial-selector p:nth-of-type(-n + 3) {
        display: block;
    }`,`.article-body-commercial-selector > p:nth-of-type(1) {
        -webkit-mask-image: linear-gradient(black, rgba(0, 0, 0, 0.5));
        mask-image: linear-gradient(black, rgba(0, 0, 0, 0.5));
    }
	.article-body-commercial-selector > p:nth-of-type(2) {
        -webkit-mask-image: linear-gradient(rgba(0, 0, 0, 0.5), transparent);
        mask-image: linear-gradient(rgba(0, 0, 0, 0.5), transparent);
    }
	`,`#sign-in-gate ~ * {
        display: none;
    }`,`#slot-body-end {
        display: none;
    }`].join("\n");

/***/ })

};
;
//# sourceMappingURL=5589.js.map