"use strict";
exports.id = 5219;
exports.ids = [5219,5589];
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

/***/ 35219:
/*!**********************************************************************************************!*\
  !*** ./src/components/SignInGate/gateDesigns/SignInGateMainCheckoutComplete.tsx + 1 modules ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  SignInGateMainCheckoutComplete: () => (/* binding */ SignInGateMainCheckoutComplete),
  bodySpacing: () => (/* binding */ bodySpacing)
});

// EXTERNAL MODULE: ../node_modules/.pnpm/@emotion+react@11.11.3_@types+react@18.3.1_react@18.3.1/node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.esm.js + 2 modules
var emotion_react_jsx_runtime_esm = __webpack_require__(5743);
// EXTERNAL MODULE: ../node_modules/.pnpm/@emotion+react@11.11.3_@types+react@18.3.1_react@18.3.1/node_modules/@emotion/react/dist/emotion-react.esm.js
var emotion_react_esm = __webpack_require__(43102);
// EXTERNAL MODULE: ../node_modules/.pnpm/@guardian+libs@19.2.1_tslib@2.6.2_typescript@5.5.3/node_modules/@guardian/libs/dist/isUndefined/isUndefined.js
var isUndefined = __webpack_require__(9474);
// EXTERNAL MODULE: ../node_modules/.pnpm/@guardian+source@8.0.0_@emotion+react@11.11.3_@types+react@18.3.1_react@18.3.1_tslib@2.6.2_typescript@5.5.3/node_modules/@guardian/source/dist/foundations/__generated__/typography.js
var typography = __webpack_require__(7351);
// EXTERNAL MODULE: ../node_modules/.pnpm/@guardian+source@8.0.0_@emotion+react@11.11.3_@types+react@18.3.1_react@18.3.1_tslib@2.6.2_typescript@5.5.3/node_modules/@guardian/source/dist/foundations/__generated__/palette.js
var palette = __webpack_require__(77907);
// EXTERNAL MODULE: ../node_modules/.pnpm/@guardian+source@8.0.0_@emotion+react@11.11.3_@types+react@18.3.1_react@18.3.1_tslib@2.6.2_typescript@5.5.3/node_modules/@guardian/source/dist/foundations/mq/mq.js
var mq = __webpack_require__(99923);
// EXTERNAL MODULE: ../node_modules/.pnpm/@guardian+source@8.0.0_@emotion+react@11.11.3_@types+react@18.3.1_react@18.3.1_tslib@2.6.2_typescript@5.5.3/node_modules/@guardian/source/dist/foundations/__generated__/space.js
var space = __webpack_require__(96378);
// EXTERNAL MODULE: ../node_modules/.pnpm/@guardian+source@8.0.0_@emotion+react@11.11.3_@types+react@18.3.1_react@18.3.1_tslib@2.6.2_typescript@5.5.3/node_modules/@guardian/source/dist/react-components/button/LinkButton.js
var LinkButton = __webpack_require__(68163);
// EXTERNAL MODULE: ../node_modules/.pnpm/@guardian+source@8.0.0_@emotion+react@11.11.3_@types+react@18.3.1_react@18.3.1_tslib@2.6.2_typescript@5.5.3/node_modules/@guardian/source/dist/react-components/button/Button.js
var Button = __webpack_require__(27123);
// EXTERNAL MODULE: ../node_modules/.pnpm/@guardian+source@8.0.0_@emotion+react@11.11.3_@types+react@18.3.1_react@18.3.1_tslib@2.6.2_typescript@5.5.3/node_modules/@guardian/source/dist/react-components/link/Link.js
var Link = __webpack_require__(95571);
;// ./src/lib/signInAfterCheckOutText.ts
const SUBSCRIPTION_HEADER="Thank you for subscribing";const SUPPORTER_HEADER="Thank you for your support";const SIGN_IN_PROMPT="Remember to sign in for a better experience.";const SIGN_IN_INCENTIVES_DIGITAL=["Supporter rewards – unlock the benefits of your support","Incisive analysis and original reporting direct to your inbox, with our newsletters","Get involved in the discussion – comment on stories"];const SIGN_IN_INCENTIVES_NON_DIGITAL=["Fewer interruptions","Incisive analysis and original reporting direct to your inbox, with our newsletters","Get involved in the discussion – comment on stories"];const COMPLETE_REGISTRATION_BUTTON="Complete registration";const SIGN_IN_BUTTON="Sign in";
// EXTERNAL MODULE: ./src/components/ConfigContext.tsx
var ConfigContext = __webpack_require__(15593);
// EXTERNAL MODULE: ./src/components/SignInGate/componentEventTracking.tsx
var componentEventTracking = __webpack_require__(84496);
// EXTERNAL MODULE: ./src/components/SignInGate/gateDesigns/shared.tsx
var shared = __webpack_require__(81646);
// EXTERNAL MODULE: ./src/components/SignInGate/gateDesigns/SignInGateMain.tsx
var SignInGateMain = __webpack_require__(95589);
;// ./src/components/SignInGate/gateDesigns/SignInGateMainCheckoutComplete.tsx
const personalisedHeadingStyles=(0,emotion_react_esm.css)`
	${typography/* headlineBold28 */.aC2};
	border-top: 2px ${palette/* palette */.M.brand[400]} solid;
	${mq/* from */.HT.phablet} {
		padding-right: 160px;
		${typography/* headlineBold34 */.r9N};
	}
	padding-bottom: ${space/* space */.x[2]}px;
`;const personalisedBodyBold=(0,emotion_react_esm.css)`
	${typography/* articleBold17 */.Awy};
	${mq/* from */.HT.phablet} {
		padding-right: 130px;
	}
	color: ${palette/* palette */.M.brand[400]};
`;const bulletStyles=(0,emotion_react_esm.css)`
	text-indent: -30px; /* second line indentation */
	margin-left: 30px; /* second line indentation */
	color: ${palette/* palette */.M.neutral[100]};
	display: flex;
	flex-direction: column;
	li:not(:first-of-type) {
		margin-top: ${space/* space */.x[1]}px;
	}
	li::before {
		content: '';
		display: inline-block;
		width: 12px;
		height: 12px;
		margin-right: ${space/* space */.x[4]}px;
		background: ${palette/* palette */.M.brand[400]};
		border-radius: 50%;
	}
`;const personalisedBodyTextList=(0,emotion_react_esm.css)`
	${typography/* article17 */.Ni};
	font-weight: 500;
	color: black;
`;const personalisedActionButtons=(0,emotion_react_esm.css)`
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	margin-top: 20px;
	margin-bottom: 20px;

	> a {
		/* stylelint-disable-next-line declaration-no-important */
		margin-right: ${space/* space */.x[4]}px !important;

		${mq/* from */.HT.mobileMedium} {
			/* stylelint-disable-next-line declaration-no-important */
			margin-right: ${space/* space */.x[9]}px !important;
		}

		/* stylelint-disable-next-line declaration-no-important */
		text-decoration: none !important;
	}
`;const notNowButton=(0,emotion_react_esm.css)`
	/* stylelint-disable-next-line declaration-no-important */
	color: ${palette/* palette */.M.brand[400]} !important;
	text-decoration: none;
`;const faqPersonalised=(0,emotion_react_esm.css)`
	padding-bottom: 18px;
	margin-top: ${space/* space */.x[3]}px;
	& a {
		display: block;
		margin-top: ${space/* space */.x[6]}px;
		margin-bottom: ${space/* space */.x[4]}px;
		color: ${palette/* palette */.M.brand[500]};
		text-decoration-color: ${palette/* palette */.M.brand[500]};
		text-underline-position: under;
	}

	& a:hover {
		color: ${palette/* palette */.M.brand[500]};
		text-decoration-color: ${palette/* palette */.M.brand[500]};
	}
`;const bodySpacing=(0,emotion_react_esm.css)`
	padding-top: ${space/* space */.x[2]}px;
	padding-bottom: ${space/* space */.x[2]}px;
`;const getHeadingText=product=>{const headingMap={SupporterPlus:SUBSCRIPTION_HEADER,Paper:SUBSCRIPTION_HEADER,GuardianWeekly:SUBSCRIPTION_HEADER,Contribution:SUPPORTER_HEADER};return headingMap[product]};const getButtonText=userType=>{const buttonMap={new:COMPLETE_REGISTRATION_BUTTON,guest:COMPLETE_REGISTRATION_BUTTON,current:SIGN_IN_BUTTON};return buttonMap[userType]};const getBodyText=product=>{const bodyTextMap={SupporterPlus:SIGN_IN_INCENTIVES_DIGITAL,Paper:SIGN_IN_INCENTIVES_NON_DIGITAL,GuardianWeekly:SIGN_IN_INCENTIVES_NON_DIGITAL,Contribution:SIGN_IN_INCENTIVES_NON_DIGITAL};return bodyTextMap[product]};const SignInGateMainCheckoutComplete=({signInUrl,registerUrl,guUrl,dismissGate,abTest,ophanComponentId,isMandatory=false,checkoutCompleteCookieData})=>{const{renderingTarget}=(0,ConfigContext/* useConfig */.U)();if((0,isUndefined/* isUndefined */.b)(checkoutCompleteCookieData)){return /*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsx)(SignInGateMain.SignInGateMain,{signInUrl:signInUrl,registerUrl:registerUrl,guUrl:guUrl,dismissGate:dismissGate,abTest:abTest,ophanComponentId:ophanComponentId,isMandatory:false})}const{userType,product}=checkoutCompleteCookieData;const personaliseSignInURl=url=>{if(userType==="new"||userType=="guest"){const regex=/\/(signin)/;const substitution=`/register`;return url.replace(regex,substitution)}return url};return /*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsxs)("div",{css:shared/* signInGateContainer */.VN,"data-testid":"sign-in-gate-main",children:[/*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsx)("style",{children:shared/* hideElementsCss */.vo}),/*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsx)("div",{css:shared/* firstParagraphOverlay */.Tc}),/*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsx)("h1",{css:personalisedHeadingStyles,children:getHeadingText(product)}),/*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsxs)("div",{css:bodySpacing,children:[/*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsx)("p",{css:personalisedBodyBold,children:SIGN_IN_PROMPT}),/*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsx)("p",{css:personalisedBodyBold,children:"This includes: "})]}),/*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsx)("ul",{css:bulletStyles,children:getBodyText(product).map(item=>{return /*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsx)("li",{css:personalisedBodyTextList,children:item},item)})}),/*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsxs)("div",{css:personalisedActionButtons,children:[/*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsx)(LinkButton/* LinkButton */.z,{"data-testid":"sign-in-gate-main_register","data-ignore":"global-link-styling",cssOverrides:shared/* registerButton */.S,priority:"primary",size:"small",href:personaliseSignInURl(signInUrl),onClick:()=>{(0,componentEventTracking/* trackLink */._q)(ophanComponentId,"register-link",renderingTarget,abTest)},children:getButtonText(userType)}),!isMandatory&&/*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsx)(Button/* Button */.$,{"data-testid":"sign-in-gate-main_dismiss","data-ignore":"global-link-styling",cssOverrides:notNowButton,priority:"subdued",size:"small",onClick:()=>{dismissGate();(0,componentEventTracking/* trackLink */._q)(ophanComponentId,"not-now",renderingTarget,abTest)},children:"Not now"})]}),/*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsxs)("div",{css:faqPersonalised,children:[/*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsx)(Link/* Link */.N,{"data-ignore":"global-link-styling",href:`${guUrl}/info/2014/nov/03/why-your-data-matters-to-us-full-text`,onClick:()=>{(0,componentEventTracking/* trackLink */._q)(ophanComponentId,"why-link",renderingTarget,abTest)},children:"How will my information & data be used?"}),/*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsx)(Link/* Link */.N,{"data-ignore":"global-link-styling",href:`${guUrl}/help/identity-faq`,onClick:()=>{(0,componentEventTracking/* trackLink */._q)(ophanComponentId,"help-link",renderingTarget,abTest)},children:"Get help with registering or signing in"})]})]})};

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
//# sourceMappingURL=5219.js.map