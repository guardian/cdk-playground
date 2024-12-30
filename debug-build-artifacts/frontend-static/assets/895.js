"use strict";
exports.id = 895;
exports.ids = [895];
exports.modules = {

/***/ 30895:
/*!**************************************************************************!*\
  !*** ./src/components/marketing/epics/ContributionsEpic.tsx + 5 modules ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  ContributionsEpic: () => (/* binding */ validatedEpic),
  ContributionsEpicUnvalidated: () => (/* binding */ unValidatedEpic),
  validate: () => (/* binding */ validate),
  validatedEpic: () => (/* binding */ validatedEpic)
});

// EXTERNAL MODULE: ../node_modules/.pnpm/@emotion+react@11.11.3_@types+react@18.3.1_react@18.3.1/node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.esm.js + 2 modules
var emotion_react_jsx_runtime_esm = __webpack_require__(5743);
// EXTERNAL MODULE: ../node_modules/.pnpm/@emotion+react@11.11.3_@types+react@18.3.1_react@18.3.1/node_modules/@emotion/react/dist/emotion-react.esm.js
var emotion_react_esm = __webpack_require__(43102);
// EXTERNAL MODULE: ../node_modules/.pnpm/@guardian+source@8.0.0_@emotion+react@11.11.3_@types+react@18.3.1_react@18.3.1_tslib@2.6.2_typescript@5.5.3/node_modules/@guardian/source/dist/foundations/__generated__/space.js
var space = __webpack_require__(96378);
// EXTERNAL MODULE: ../node_modules/.pnpm/@guardian+source@8.0.0_@emotion+react@11.11.3_@types+react@18.3.1_react@18.3.1_tslib@2.6.2_typescript@5.5.3/node_modules/@guardian/source/dist/foundations/__generated__/palette.js
var palette = __webpack_require__(77907);
// EXTERNAL MODULE: ../node_modules/.pnpm/@guardian+source@8.0.0_@emotion+react@11.11.3_@types+react@18.3.1_react@18.3.1_tslib@2.6.2_typescript@5.5.3/node_modules/@guardian/source/dist/foundations/__generated__/typography.js
var typography = __webpack_require__(7351);
// EXTERNAL MODULE: ../node_modules/.pnpm/@guardian+source@8.0.0_@emotion+react@11.11.3_@types+react@18.3.1_react@18.3.1_tslib@2.6.2_typescript@5.5.3/node_modules/@guardian/source/dist/foundations/mq/mq.js
var mq = __webpack_require__(99923);
// EXTERNAL MODULE: ../node_modules/.pnpm/@guardian+source-development-kitchen@12.0.0_@emotion+react@11.11.3_@guardian+libs@19.2.1_@gua_u2skz76xfmcpz6vecn5wtd5lna/node_modules/@guardian/source-development-kitchen/dist/react-components/ticker/Ticker.js + 2 modules
var Ticker = __webpack_require__(11596);
// EXTERNAL MODULE: ../node_modules/.pnpm/@guardian+support-dotcom-components@3.2.0_@guardian+libs@19.2.1_zod@3.22.4/node_modules/@guardian/support-dotcom-components/dist/index.esm.js + 1 modules
var index_esm = __webpack_require__(29995);
// EXTERNAL MODULE: ../node_modules/.pnpm/preact@10.15.1/node_modules/preact/compat/dist/compat.mjs + 1 modules
var compat = __webpack_require__(43532);
// EXTERNAL MODULE: ./src/lib/useIsInView.ts
var useIsInView = __webpack_require__(58452);
// EXTERNAL MODULE: ./src/components/marketing/lib/articleCountOptOut.ts
var articleCountOptOut = __webpack_require__(53935);
;// ./src/components/marketing/hooks/useArticleCountOptOut.ts
function useArticleCountOptOut(){const[hasOptedOut,setHasOptedOut]=(0,compat.useState)((0,articleCountOptOut/* hasArticleCountOptOutCookie */.H6)());function onArticleCountOptOut(){setHasOptedOut(true);(0,articleCountOptOut/* addArticleCountOptOutCookie */.K4)();(0,articleCountOptOut/* removeArticleCountFromLocalStorage */.wV)()}function onArticleCountOptIn(){setHasOptedOut(false);(0,articleCountOptOut/* removeArticleCountOptOutCookie */.zr)()}return{hasOptedOut,onArticleCountOptOut,onArticleCountOptIn}}
// EXTERNAL MODULE: ./src/components/marketing/lib/replaceArticleCount.tsx + 2 modules
var replaceArticleCount = __webpack_require__(79971);
;// ./src/components/marketing/lib/stage.ts
const isProd=stage=>!(stage==="CODE"||stage==="DEV");
// EXTERNAL MODULE: ./src/components/marketing/lib/tracking.ts
var lib_tracking = __webpack_require__(81412);
// EXTERNAL MODULE: ./src/components/marketing/lib/viewLog.ts
var viewLog = __webpack_require__(54288);
;// ./src/components/marketing/epics/BylineWithHeadshot.tsx
const bylineWithImageContainer=(0,emotion_react_esm.css)`
	margin: 0;
	padding: 0;
	position: relative;
	width: 100%;
	height: 130px;
`;const bylineCopyContainer=(0,emotion_react_esm.css)`
	width: 70%;
	position: absolute;
	bottom: 20px;
	left: 0;
`;const bylineImageContainer=(0,emotion_react_esm.css)`
	max-width: 30%;
	height: 100%;
	position: absolute;
	top: 0;
	right: 0;
`;const bylineName=(0,emotion_react_esm.css)`
	${typography/* articleBold17 */.Awy};
	margin: 0;
`;const bylineDescription=(0,emotion_react_esm.css)`
	${typography/* articleItalic17 */.ZAW};
	margin: 0;
`;const bylineHeadshotImage=(0,emotion_react_esm.css)`
	height: 100%;
	width: 100%;
	object-fit: cover;
`;const bylineBottomDecoration=isInTestVariant=>(0,emotion_react_esm.css)`
	position: absolute;
	bottom: 0;
	left: 0;
	width: 100%;
	background-repeat: repeat-x;
	background-position: top;
	background-size: 1px calc(0.25rem * 4 + 1px);
	height: calc(0.25rem * 4 + 1px);
	background-image: repeating-linear-gradient(
		to bottom,
		${isInTestVariant?palette/* palette */.M.neutral[0]:palette/* palette */.M.neutral[86]},
		${isInTestVariant?palette/* palette */.M.neutral[0]:palette/* palette */.M.neutral[86]} 1px,
		transparent 1px,
		transparent 0.25rem
	);
`;const BylineWithHeadshot=({bylineWithImage,isColourInTestVariant})=>{const{name,description,headshot}=bylineWithImage;return /*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsxs)("div",{css:bylineWithImageContainer,children:[/*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsxs)("div",{css:bylineCopyContainer,children:[/*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsx)("p",{css:bylineName,children:name}),/*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsx)("p",{css:bylineDescription,children:description})]}),headshot&&/*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsxs)(emotion_react_jsx_runtime_esm.Fragment,{children:[/*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsx)("div",{css:bylineBottomDecoration(isColourInTestVariant)}),/*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsx)("div",{css:bylineImageContainer,children:/*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsx)("img",{src:headshot.mainUrl,alt:headshot.altText,css:bylineHeadshotImage})})]})]})};
// EXTERNAL MODULE: ../node_modules/.pnpm/@guardian+source@8.0.0_@emotion+react@11.11.3_@types+react@18.3.1_react@18.3.1_tslib@2.6.2_typescript@5.5.3/node_modules/@guardian/source/dist/react-components/button/Button.js
var Button = __webpack_require__(27123);
// EXTERNAL MODULE: ../node_modules/.pnpm/@guardian+source@8.0.0_@emotion+react@11.11.3_@types+react@18.3.1_react@18.3.1_tslib@2.6.2_typescript@5.5.3/node_modules/@guardian/source/dist/react-components/link/ButtonLink.js
var ButtonLink = __webpack_require__(4383);
// EXTERNAL MODULE: ./src/components/marketing/epics/utils/ophan.ts
var ophan = __webpack_require__(57780);
;// ./src/components/marketing/epics/ContributionsEpicArticleCountAboveWithOptOut.tsx
const ContributionsEpicArticleCountAboveWithOptOut=({articleCount,copy,isArticleCountOn,onArticleCountOptOut,onArticleCountOptIn,openCmp,submitComponentEvent})=>{const[isOpen,setIsOpen]=(0,compat.useState)(false);const onToggleClick=()=>{setIsOpen(!isOpen);submitComponentEvent?.(isOpen?ophan/* OPHAN_COMPONENT_ARTICLE_COUNT_OPT_OUT_CLOSE */.uV:ophan/* OPHAN_COMPONENT_ARTICLE_COUNT_OPT_OUT_OPEN */.Ek)};const onStayInClick=()=>{setIsOpen(false);submitComponentEvent?.(ophan/* OPHAN_COMPONENT_ARTICLE_COUNT_STAY_IN */.WP)};const onOptOutClick=()=>{setIsOpen(false);onArticleCountOptOut();submitComponentEvent?.(ophan/* OPHAN_COMPONENT_ARTICLE_COUNT_OPT_OUT */.zX)};const onOptInClick=()=>{setIsOpen(false);onArticleCountOptIn();submitComponentEvent?.(ophan/* OPHAN_COMPONENT_ARTICLE_COUNT_OPT_IN */.CE)};const onStayOutClick=()=>{setIsOpen(false);submitComponentEvent?.(ophan/* OPHAN_COMPONENT_ARTICLE_COUNT_STAY_OUT */.H4)};return /*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsxs)("div",{css:topContainer,children:[/*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsx)(ArticleCountWithToggle,{isArticleCountOn:isArticleCountOn,articleCount:articleCount,onToggleClick:onToggleClick,copy:copy}),isOpen&&/*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsxs)("div",{css:articleCountDescriptionTopContainerStyles,children:[/*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsx)("div",{css:caretStyles}),/*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsx)("div",{css:articleCountDescriptionContainer,children:isArticleCountOn?/*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsxs)(emotion_react_jsx_runtime_esm.Fragment,{children:[/*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsx)("div",{css:articleCountBodyTextStyles,children:"Many readers tell us they enjoy seeing how many pieces of Guardian journalism they’ve read, watched or listened to. So here’s your count. Can we continue showing you this on support appeals like this?"}),/*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsxs)("div",{css:articleCountCtasContainerStyles,children:[/*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsx)(Button/* Button */.$,{priority:"primary",size:"xsmall",cssOverrides:articleCountDefaultCtaStyles,onClick:onStayInClick,children:"Yes, that's OK"}),/*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsx)(Button/* Button */.$,{priority:"tertiary",size:"xsmall",cssOverrides:articleCountOptOutCtaStyles,onClick:onOptOutClick,children:"No, opt me out"})]})]}):/*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsxs)(emotion_react_jsx_runtime_esm.Fragment,{children:[/*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsx)("div",{css:articleCountBodyTextStyles,children:"Many readers tell us they enjoy seeing how many pieces of Guardian journalism they’ve read, watched or listened to. Can we start showing you your article count on support appeals like this?"}),/*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsxs)("div",{css:articleCountCtasContainerStyles,children:[/*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsx)(Button/* Button */.$,{priority:"primary",size:"xsmall",cssOverrides:articleCountOptInCtaStyles,onClick:onOptInClick,children:"Yes, opt me in"}),/*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsx)(Button/* Button */.$,{priority:"tertiary",size:"xsmall",cssOverrides:articleCountOptOutCtaStyles,onClick:onStayOutClick,children:"No, thank you"})]})]})}),/*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsxs)("div",{css:trackingSettingsContainerStyles,children:["To opt out of other tracking activity, manage your"," ",/*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsx)(ButtonLink/* ButtonLink */.v,{priority:"secondary",cssOverrides:privacySettingsLinkStyles,onClick:openCmp,children:"Privacy Settings"})]})]})]})};const ArticleCountWithToggle=({isArticleCountOn,articleCount,onToggleClick,copy})=>{if(isArticleCountOn&&articleCount>=5){return /*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsxs)("div",{css:articleCountOnHeaderContainerStyles,children:[/*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsx)(ArticleCount,{articleCount:articleCount,copy:copy}),/*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsxs)("div",{css:articleCountWrapperStyles,children:[/*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsx)("div",{css:articleCountTextStyles,children:"Article count"}),/*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsx)(ButtonLink/* ButtonLink */.v,{priority:"secondary",onClick:onToggleClick,cssOverrides:articleCountCtaStyles,children:"on"})]})]})}if(!isArticleCountOn){return /*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsxs)("div",{css:articleCountWrapperStyles,children:[/*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsx)("div",{css:articleCountTextStyles,children:"Article count"}),/*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsx)(ButtonLink/* ButtonLink */.v,{priority:"secondary",onClick:onToggleClick,cssOverrides:articleCountCtaStyles,children:"off"})]})}return /*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsx)(emotion_react_jsx_runtime_esm.Fragment,{})};const ARTICLE_COUNT_TEMPLATE="%%ARTICLE_COUNT%%";const containsArticleCountTemplate=copy=>copy.includes(ARTICLE_COUNT_TEMPLATE);const CustomArticleCountCopy=({articleCount,copy})=>{const[copyHead,copyTail]=copy.split(ARTICLE_COUNT_TEMPLATE);return /*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsxs)("div",{css:articleCountAboveContainerStyles,children:[copyHead,/*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsxs)("span",{css:optOutContainer,children:[articleCount,"\xa0articles"]}),copyTail?.substring(1,9)==="articles"?copyTail.substring(9):copyTail]})};const ArticleCount=({articleCount,copy})=>{if(copy&&containsArticleCountTemplate(copy)){return /*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsx)(CustomArticleCountCopy,{articleCount:articleCount,copy:copy})}else if(articleCount>=50){return /*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsxs)("div",{css:articleCountAboveContainerStyles,children:["Congratulations on being one of our top readers globally – you've read"," ",/*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsxs)("span",{css:optOutContainer,children:[articleCount," articles"]})," in the last year"]})}else{return /*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsxs)("div",{css:articleCountAboveContainerStyles,children:["You've read"," ",/*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsxs)("span",{css:optOutContainer,children:[articleCount," articles"]})," in the last year"]})}};const topContainer=(0,emotion_react_esm.css)`
	display: flex;
	flex-direction: column-reverse;

	${mq/* from */.HT.tablet} {
		display: block;
		margin-top: 10px;
	}
`;const articleCountAboveContainerStyles=(0,emotion_react_esm.css)`
	${typography/* articleBoldItalic15 */.UlC};

	${mq/* from */.HT.tablet} {
		${typography/* articleBoldItalic17 */.U2p};
	}
`;const optOutContainer=(0,emotion_react_esm.css)`
	color: ${palette/* palette */.M.opinion[400]};
`;const articleCountOnHeaderContainerStyles=(0,emotion_react_esm.css)`
	display: flex;
	justify-content: space-between;
	flex-direction: column-reverse;
	align-items: flex-start;

	${mq/* from */.HT.tablet} {
		flex-direction: row;
		align-items: flex-start;
	}
`;const articleCountWrapperStyles=(0,emotion_react_esm.css)`
	flex-shrink: 0;
	display: flex;
	flex-direction: row;
	align-items: flex-start;
	margin-right: ${space/* space */.x[2]}px;
	margin-bottom: ${space/* space */.x[2]}px;
	justify-content: start;

	${mq/* from */.HT.tablet} {
		margin-left: ${space/* space */.x[5]}px;
		margin-bottom: 0;
		justify-content: flex-end;
	}
`;const articleCountTextStyles=(0,emotion_react_esm.css)`
	${typography/* textSans12 */.Ikj};
	margin-right: ${space/* space */.x[1]}px;

	${mq/* from */.HT.tablet} {
		${typography/* textSans15 */.PSs};
	}
`;const articleCountCtaStyles=(0,emotion_react_esm.css)`
	margin-top: 0;

	${typography/* textSansBold12 */.rDY};

	${mq/* from */.HT.tablet} {
		${typography/* textSansBold15 */.yui};
	}
`;const articleCountDescriptionTopContainerStyles=(0,emotion_react_esm.css)`
	border-bottom: 1px solid ${palette/* palette */.M.neutral[46]};
	position: relative;
	margin-bottom: ${space/* space */.x[2]}px;

	${mq/* from */.HT.tablet} {
		margin-top: ${space/* space */.x[4]}px;
		border-top: 1px solid ${palette/* palette */.M.neutral[0]};
		border-bottom: 1px solid ${palette/* palette */.M.neutral[0]};
	}
`;const articleCountDescriptionContainer=(0,emotion_react_esm.css)`
	align-items: center;
	display: flex;
	flex-direction: column;
	padding: ${space/* space */.x[1]}px ${space/* space */.x[1]}px 0;

	${mq/* from */.HT.tablet} {
		flex-direction: row;
		padding: ${space/* space */.x[1]}px 0;
		align-items: start;
		margin-top: ${space/* space */.x[1]}px;
	}
`;const articleCountBodyTextStyles=(0,emotion_react_esm.css)`
	${typography/* textSans15 */.PSs};
	width: 100%;

	${mq/* from */.HT.tablet} {
		width: 68%;
	}
`;const articleCountCtasContainerStyles=(0,emotion_react_esm.css)`
	display: flex;
	align-self: start;
	margin-top: ${space/* space */.x[4]}px;
	> * + * {
		margin-left: ${space/* space */.x[3]}px;
	}

	${mq/* from */.HT.tablet} {
		flex-direction: column;
		margin-left: auto;
		margin-top: ${space/* space */.x[2]}px;
		justify-content: space-between;
		> * + * {
			margin-top: ${space/* space */.x[3]}px;
			margin-left: 0;
		}
	}
`;const articleCountOptInCtaStyles=(0,emotion_react_esm.css)`
	background-color: ${palette/* palette */.M.neutral[0]};
`;const articleCountDefaultCtaStyles=(0,emotion_react_esm.css)`
	background-color: ${palette/* palette */.M.neutral[0]};
	padding: auto ${space/* space */.x[6]}px;

	${mq/* from */.HT.tablet} {
		padding-left: ${space/* space */.x[5]}px;
	}
`;const articleCountOptOutCtaStyles=(0,emotion_react_esm.css)`
	color: ${palette/* palette */.M.neutral[0]};
	border: 1px solid ${palette/* palette */.M.neutral[0]};
`;const trackingSettingsContainerStyles=(0,emotion_react_esm.css)`
	margin: ${space/* space */.x[4]}px auto ${space/* space */.x[3]}px;
	${typography/* textSans12 */.Ikj};

	${mq/* from */.HT.tablet} {
		${typography/* textSans14 */.WuG};
	}
`;const privacySettingsLinkStyles=(0,emotion_react_esm.css)`
	${typography/* textSansBold12 */.rDY};

	${mq/* from */.HT.tablet} {
		${typography/* textSansBold14 */.rS6};
	}
`;const caretStyles=(0,emotion_react_esm.css)`
	&:before {
		content: '';
		display: block;
		position: absolute;
		bottom: -14px;
		width: 0;
		height: 0;
		border: 7px solid transparent;
		border-top-color: ${palette/* palette */.M.neutral[46]};

		${mq/* from */.HT.tablet} {
			right: 5px;
			bottom: 100%;
			border: 10px solid transparent;
			border-bottom-color: ${palette/* palette */.M.neutral[0]};
		}

		${mq/* until */.TG.tablet} {
			left: 75px;
		}
	}

	&:after {
		content: '';
		display: block;
		position: absolute;
		bottom: -12px;
		width: 0;
		height: 0;
		border: 6px solid transparent;
		border-top-color: ${palette/* palette */.M.neutral[97]};

		${mq/* from */.HT.tablet} {
			right: 6px;
			bottom: 100%;
			border: 9px solid transparent;
			border-bottom-color: ${palette/* palette */.M.neutral[97]};
		}

		${mq/* until */.TG.tablet} {
			left: 76px;
		}
	}
`;
// EXTERNAL MODULE: ./src/components/marketing/epics/ContributionsEpicNewsletterSignup.tsx
var ContributionsEpicNewsletterSignup = __webpack_require__(47267);
// EXTERNAL MODULE: ../node_modules/.pnpm/@guardian+source@8.0.0_@emotion+react@11.11.3_@types+react@18.3.1_react@18.3.1_tslib@2.6.2_typescript@5.5.3/node_modules/@guardian/source/dist/foundations/__deprecated__/colour/palette.js
var colour_palette = __webpack_require__(46080);
// EXTERNAL MODULE: ../node_modules/.pnpm/@guardian+source@8.0.0_@emotion+react@11.11.3_@types+react@18.3.1_react@18.3.1_tslib@2.6.2_typescript@5.5.3/node_modules/@guardian/source/dist/react-components/link/Link.js
var Link = __webpack_require__(95571);
;// ./src/components/marketing/epics/ContributionsEpicSignInCta.tsx
const signInLink=(0,emotion_react_esm.css)`
	margin: 0;
	border-top: 1px solid ${colour_palette/* neutral */.SY[0]};
`;const signInLinkText=(0,emotion_react_esm.css)`
	${typography/* articleBold17 */.Awy};
`;const signInUrl="https://profile.theguardian.com/signin?utm_source=gdnwb&utm_medium=banner&utm_campaign=SigninEPIC_Existing&CMP_TU=mrtn&CMP_BUNIT=subs";const ContributionsEpicSignInCta=({submitComponentEvent})=>{const onSignInClick=()=>{if(submitComponentEvent){submitComponentEvent(ophan/* OPHAN_COMPONENT_SIGN_IN */.P2)}};return /*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsxs)("p",{css:[signInLink,signInLinkText],children:["Already a supporter?"," ",/*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsx)(Link/* Link */.N,{onClick:onSignInClick,href:signInUrl,priority:"secondary",cssOverrides:signInLinkText,children:"Sign in"})," ","and you’ll see far fewer of these messages."]})};
// EXTERNAL MODULE: ./src/components/marketing/epics/ctas/ContributionsEpicCtasContainer.tsx + 7 modules
var ContributionsEpicCtasContainer = __webpack_require__(15870);
;// ./src/components/marketing/epics/ContributionsEpic.tsx
const getVariantOrControlStyle=(isInTestVariant,variant,control)=>{return isInTestVariant?variant:control};const wrapperStyles=isInTestVariant=>(0,emotion_react_esm.css)`
	padding: ${space/* space */.x[1]}px ${space/* space */.x[2]}px ${space/* space */.x[3]}px;
	border-top: 1px solid
		${getVariantOrControlStyle(isInTestVariant,palette/* palette */.M.neutral[0],palette/* palette */.M.brandAlt[400])};
	background-color: ${getVariantOrControlStyle(isInTestVariant,"#E2E3BF",palette/* palette */.M.neutral[97])};

	* {
		::selection {
			background: ${palette/* palette */.M.brandAlt[400]};
		}
		::-moz-selection {
			background: ${palette/* palette */.M.brandAlt[400]};
		}
	}

	b,
	strong {
		font-weight: bold;
	}
`;const headingStyles=(0,emotion_react_esm.css)`
	${typography/* headlineBold20 */.aal};
	margin-top: 0;
	margin-bottom: ${space/* space */.x[3]}px;
`;const linkStyles=(0,emotion_react_esm.css)`
	a {
		color: ${palette/* palette */.M.news[400]};
		text-decoration: none;
		border-bottom: 1px solid ${palette/* palette */.M.news[400]};
	}
`;const bodyStyles=(0,emotion_react_esm.css)`
	margin: 0 auto ${space/* space */.x[2]}px;
	${typography/* article17 */.Ni};
	${linkStyles}
`;const highlightWrapperStyles=(0,emotion_react_esm.css)`
	${typography/* articleBold17 */.Awy};
	${linkStyles};
`;const highlightStyles=isInTestVariant=>(0,emotion_react_esm.css)`
	padding: 2px;
	background-color: ${getVariantOrControlStyle(isInTestVariant,"#C41C1C",palette/* palette */.M.brandAlt[400])};
	color: ${getVariantOrControlStyle(isInTestVariant,palette/* palette */.M.neutral[100],palette/* palette */.M.neutral[7])};
`;const imageWrapperStyles=(0,emotion_react_esm.css)`
	margin: ${space/* space */.x[3]}px 0 ${space/* space */.x[2]}px;

	${mq/* from */.HT.tablet} {
		margin: 10px 0;
	}
`;const imageStyles=(0,emotion_react_esm.css)`
	height: 100%;
	width: 100%;
	object-fit: cover;
`;const defaultTickerStylingSettings={filledProgressColour:"#5056F5",progressBarBackgroundColour:"rgba(80, 86, 245, 0.35)",headlineColour:"#000000",totalColour:"#5056F5",goalColour:"#000000"};const usEOYTickerStylingSettings={filledProgressColour:"#C41C1C",progressBarBackgroundColour:"rgba(196, 28, 28, 0.30)",headlineColour:"#000000",totalColour:"#C41C1C",goalColour:"#000000"};const ContributionsEpic_articleCountAboveContainerStyles=(0,emotion_react_esm.css)`
	margin-bottom: ${space/* space */.x[4]}px;
`;const tickerContainerStyles=(0,emotion_react_esm.css)`
	padding-bottom: ${space/* space */.x[5]}px;
	padding-top: ${space/* space */.x[1]}px;
`;const EpicHeader=({text,numArticles,tracking,showAboveArticleCount})=>{const elements=(0,replaceArticleCount/* replaceArticleCount */.k)(text,numArticles,"epic",tracking,!showAboveArticleCount);return /*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsx)("h2",{css:headingStyles,children:elements})};const Highlighted=({highlightedText,numArticles,tracking,showAboveArticleCount,isColourInTestVariant})=>{const elements=(0,replaceArticleCount/* replaceArticleCount */.k)(highlightedText,numArticles,"epic",tracking,!showAboveArticleCount);return /*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsxs)("strong",{css:highlightWrapperStyles,children:[" ",/*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsx)("span",{css:highlightStyles(isColourInTestVariant),children:elements})]})};const EpicBodyParagraph=({paragraph,numArticles,highlighted,tracking,showAboveArticleCount})=>{const elements=(0,replaceArticleCount/* replaceArticleCount */.k)(paragraph,numArticles,"epic",tracking,!showAboveArticleCount);return /*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsxs)("p",{css:bodyStyles,children:[elements,highlighted?highlighted:null]})};const EpicBody=({numArticles,paragraphs,highlightedText,tracking,showAboveArticleCount,isColourInTestVariant})=>{return /*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsx)(emotion_react_jsx_runtime_esm.Fragment,{children:paragraphs.map((paragraph,idx)=>{const paragraphElement=/*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsx)(EpicBodyParagraph,{paragraph:paragraph,numArticles:numArticles,highlighted:highlightedText&&idx===paragraphs.length-1?/*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsx)(Highlighted,{highlightedText:highlightedText,numArticles:numArticles,showAboveArticleCount:showAboveArticleCount,isColourInTestVariant:isColourInTestVariant}):null,tracking:tracking,showAboveArticleCount:showAboveArticleCount},idx);return paragraphElement})})};const sendEpicViewEvent=(url,abTestName,abTestVariant,stage,countryCode)=>{const path="events/epic-view";const host=isProd(stage)?"https://contributions.guardianapis.com":"https://contributions.code.dev-guardianapis.com";const eventBody=JSON.stringify({url,countryCode,abTests:[{name:abTestName,variant:abTestVariant}]});void fetch(`${host}/${path}`,{method:"POST",headers:{"Content-Type":"application/json"},body:eventBody}).then(response=>{if(!response.ok){console.log("Epic view event request failed",response)}})};const ContributionsEpic=({variant,tracking,countryCode,articleCounts,onReminderOpen,fetchEmail,submitComponentEvent,openCmp,hasConsentForArticleCount,stage})=>{const{image,tickerSettings,choiceCardAmounts,newsletterSignup}=variant;const isColourInTestVariant=tracking.abTestName.includes("_ARTICLE_EPIC_BG_COLOUR")&&tracking.abTestVariant==="VARIANT";const{hasOptedOut,onArticleCountOptIn,onArticleCountOptOut}=useArticleCountOptOut();const[hasBeenSeen,setNode]=(0,useIsInView/* useIsInView */.E)({debounce:true,threshold:0});(0,compat.useEffect)(()=>{if(hasBeenSeen){if(!window.guardian.config.isDev&&stage!=="DEV"){sendEpicViewEvent(tracking.referrerUrl,tracking.abTestName,tracking.abTestVariant,stage,countryCode)}(0,viewLog/* logEpicView */.B)(tracking.abTestName);if(submitComponentEvent){submitComponentEvent((0,lib_tracking/* createViewEventFromTracking */.t0)(tracking,tracking.campaignCode))}}},[hasBeenSeen,submitComponentEvent,countryCode,stage,tracking]);(0,compat.useEffect)(()=>{if(submitComponentEvent){submitComponentEvent((0,lib_tracking/* createInsertEventFromTracking */.rx)(tracking,tracking.campaignCode))}},[submitComponentEvent,tracking]);const cleanHighlighted=(0,index_esm/* replaceNonArticleCountPlaceholders */.BA)(variant.highlightedText,countryCode);const cleanHeading=(0,index_esm/* replaceNonArticleCountPlaceholders */.BA)(variant.heading,countryCode);const cleanParagraphs=variant.paragraphs.map(paragraph=>(0,index_esm/* replaceNonArticleCountPlaceholders */.BA)(paragraph,countryCode)).map(paragraph=>(0,lib_tracking/* addTrackingParamsToBodyLinks */.Nl)(paragraph,tracking,articleCounts.for52Weeks,countryCode));if([cleanHighlighted,cleanHeading,...cleanParagraphs].some(index_esm/* containsNonArticleCountPlaceholder */.FT)){return /*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsx)(emotion_react_jsx_runtime_esm.Fragment,{})}const ophanTracking=submitComponentEvent&&{submitComponentEvent,componentType:"ACQUISITIONS_EPIC"};const showAboveArticleCount=!!(variant.separateArticleCount?.type==="above"&&hasConsentForArticleCount);return /*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsxs)("section",{ref:setNode,css:wrapperStyles(isColourInTestVariant),children:[showAboveArticleCount&&/*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsx)("div",{css:ContributionsEpic_articleCountAboveContainerStyles,children:/*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsx)(ContributionsEpicArticleCountAboveWithOptOut,{articleCount:articleCounts.forTargetedWeeks,isArticleCountOn:!hasOptedOut,onArticleCountOptOut:onArticleCountOptOut,onArticleCountOptIn:onArticleCountOptIn,openCmp:openCmp,submitComponentEvent:submitComponentEvent,copy:variant.separateArticleCount?.copy})}),tickerSettings?.tickerData&&/*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsx)("div",{css:tickerContainerStyles,children:/*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsx)(Ticker/* Ticker */.R,{currencySymbol:tickerSettings.currencySymbol,copy:{headline:tickerSettings.copy.countLabel},tickerData:tickerSettings.tickerData,tickerStylingSettings:isColourInTestVariant||tickerSettings.name==="AU"?usEOYTickerStylingSettings:defaultTickerStylingSettings,size:"medium"})}),image&&/*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsx)("div",{css:imageWrapperStyles,children:/*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsx)("img",{src:image.mainUrl,css:imageStyles,alt:image.altText})}),!!cleanHeading&&/*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsx)(EpicHeader,{text:cleanHeading,numArticles:articleCounts.forTargetedWeeks,tracking:ophanTracking,showAboveArticleCount:showAboveArticleCount}),/*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsx)(EpicBody,{paragraphs:cleanParagraphs,highlightedText:cleanHighlighted,numArticles:articleCounts.forTargetedWeeks,tracking:ophanTracking,showAboveArticleCount:showAboveArticleCount,isColourInTestVariant:isColourInTestVariant}),variant.bylineWithImage&&/*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsx)(BylineWithHeadshot,{bylineWithImage:variant.bylineWithImage,isColourInTestVariant:isColourInTestVariant}),newsletterSignup?/*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsx)(ContributionsEpicNewsletterSignup/* ContributionsEpicNewsletterSignup */.o,{newsletterId:newsletterSignup.newsletterId,successDescription:newsletterSignup.successDescription,tracking:tracking}):/*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsx)(ContributionsEpicCtasContainer/* ContributionsEpicCtasContainer */.B,{variant:variant,tracking:tracking,countryCode:countryCode,articleCounts:articleCounts,onReminderOpen:onReminderOpen,fetchEmail:fetchEmail,submitComponentEvent:submitComponentEvent,amountsTestName:choiceCardAmounts?.testName,amountsVariantName:choiceCardAmounts?.variantName,isColourInTestVariant:isColourInTestVariant}),variant.showSignInLink&&/*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsx)(ContributionsEpicSignInCta,{})]})};const validate=props=>{const result=index_esm/* epicPropsSchema */.FI.safeParse(props);return result.success};const validatedEpic=props=>{if(validate(props)){return /*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsx)(ContributionsEpic,{...props})}return /*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsx)(emotion_react_jsx_runtime_esm.Fragment,{})};const unValidatedEpic=ContributionsEpic;

/***/ })

};
;
//# sourceMappingURL=895.js.map