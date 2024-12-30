"use strict";
exports.id = 9818;
exports.ids = [9818];
exports.modules = {

/***/ 49818:
/*!*******************************************************************************!*\
  !*** ./src/components/marketing/banners/common/BannerWrapper.tsx + 3 modules ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  cy: () => (/* binding */ bannerWrapper),
  oA: () => (/* binding */ validatedBannerWrapper)
});

// UNUSED EXPORTS: getParagraphsOrMessageText

// EXTERNAL MODULE: ../node_modules/.pnpm/@emotion+react@11.11.3_@types+react@18.3.1_react@18.3.1/node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.esm.js + 2 modules
var emotion_react_jsx_runtime_esm = __webpack_require__(5743);
// EXTERNAL MODULE: ../node_modules/.pnpm/@guardian+support-dotcom-components@3.2.0_@guardian+libs@19.2.1_zod@3.22.4/node_modules/@guardian/support-dotcom-components/dist/index.esm.js + 1 modules
var index_esm = __webpack_require__(29995);
// EXTERNAL MODULE: ../node_modules/.pnpm/preact@10.15.1/node_modules/preact/compat/dist/compat.mjs + 1 modules
var compat = __webpack_require__(43532);
// EXTERNAL MODULE: ./src/lib/useIsInView.ts
var useIsInView = __webpack_require__(58452);
// EXTERNAL MODULE: ./src/components/marketing/lib/replaceArticleCount.tsx + 2 modules
var replaceArticleCount = __webpack_require__(79971);
// EXTERNAL MODULE: ./src/components/marketing/lib/tracking.ts
var lib_tracking = __webpack_require__(81412);
;// ./src/components/marketing/hooks/useEscapeShortcut.ts
function useEscapeShortcut(eventHandler){(0,compat.useEffect)(()=>{function handleEscapeKeydown(event){const isEscapeKey=event.key==="Escape"||event.key==="Esc";if(isEscapeKey){eventHandler(event)}}window.addEventListener("keydown",handleEscapeKeydown);return()=>window.removeEventListener("keydown",handleEscapeKeydown)},[eventHandler])}
// EXTERNAL MODULE: ../node_modules/.pnpm/@guardian+libs@19.2.1_tslib@2.6.2_typescript@5.5.3/node_modules/@guardian/libs/dist/storage/storage.js
var storage = __webpack_require__(61082);
;// ./src/components/marketing/banners/utils/localStorage.ts
const setBannerClosedTimestamp=name=>storage/* storage */.I.local.set(`gu.prefs.${name}`,new Date().toISOString());const bannerChannelToLastClosedMap={contributions:"engagementBannerLastClosedAt",subscriptions:"subscriptionBannerLastClosedAt",signIn:"signInBannerLastClosedAt",abandonedBasket:"abandonedBasketLastClosedAt"};const setChannelClosedTimestamp=channel=>{setBannerClosedTimestamp(bannerChannelToLastClosedMap[channel])};
;// ./src/components/marketing/banners/utils/withCloseable.tsx
const withCloseable=CloseableBanner=>{const Banner=bannerProps=>{const[isOpen,setIsOpen]=(0,compat.useState)(true);const onClose=()=>{setChannelClosedTimestamp(bannerProps.bannerChannel);setIsOpen(false);document.body.focus()};useEscapeShortcut(onClose);return isOpen?/*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsx)(CloseableBanner,{onClose:onClose,...bannerProps}):/*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsx)(emotion_react_jsx_runtime_esm.Fragment,{})};return Banner};
;// ./src/components/marketing/banners/common/BannerWrapper.tsx
function getComponentIds(bannerId){return{close:`${bannerId} : close`,cta:`${bannerId} : cta`,secondaryCta:`${bannerId} : secondary-cta`,notNow:`${bannerId} : not now`,signIn:`${bannerId} : sign in`,reminderCta:`${bannerId} : reminder-cta`,reminderSet:`${bannerId} : reminder-set`,reminderClose:`${bannerId} : reminder-close`}}const getParagraphsOrMessageText=(paras,text)=>{const bodyCopy=[];if(paras!=null){bodyCopy.push(...paras)}else if(text!=null){bodyCopy.push(text)}return bodyCopy};const withBannerData=(Banner,bannerId)=>bannerProps=>{const{tracking,submitComponentEvent,onClose,content,mobileContent,countryCode,prices,fetchEmail,articleCounts,tickerSettings,isSupporter,separateArticleCount,separateArticleCountSettings,choiceCardAmounts,design,bannerChannel,abandonedBasket}=bannerProps;const[hasBeenSeen,setNode]=(0,useIsInView/* useIsInView */.E)({debounce:true,threshold:0});(0,compat.useEffect)(()=>{if(hasBeenSeen&&submitComponentEvent){submitComponentEvent((0,lib_tracking/* createViewEventFromTracking */.t0)(tracking,tracking.campaignCode))}},[hasBeenSeen,submitComponentEvent,tracking]);(0,compat.useEffect)(()=>{if(submitComponentEvent){submitComponentEvent((0,lib_tracking/* createInsertEventFromTracking */.rx)(tracking,tracking.campaignCode))}},[submitComponentEvent,tracking]);const numArticles=articleCounts.forTargetedWeeks;const cleanParagraphsOrMessageText=(paras,text)=>{const originalCopy=getParagraphsOrMessageText(paras,text);return originalCopy.map(p=>(0,index_esm/* replaceNonArticleCountPlaceholders */.BA)(p,countryCode,prices).trim())};const finaliseParagraphs=paras=>{return paras.map(p=>(0,replaceArticleCount/* replaceArticleCount */.k)(p,numArticles,"banner"))};const paragraphsContainNonArticleCountPlaceholder=paras=>paras.some(p=>(0,index_esm/* containsNonArticleCountPlaceholder */.FT)(p));const componentIds=getComponentIds(bannerId);const buildRenderedContent=bannerContent=>{const buildEnrichedCta=cta=>{if((0,lib_tracking/* isProfileUrl */.Bl)(cta.baseUrl)){return{ctaUrl:(0,lib_tracking/* addTrackingParamsToProfileUrl */.qU)(cta.baseUrl,tracking),ctaText:cta.text}}if(bannerChannel==="abandonedBasket"&&abandonedBasket){return{ctaUrl:(0,lib_tracking/* addAbandonedBasketAndTrackingParamsToUrl */.m1)(cta.baseUrl,abandonedBasket,tracking),ctaText:cta.text}}return{ctaUrl:(0,lib_tracking/* addRegionIdAndTrackingParamsToSupportUrl */.QP)(cta.baseUrl,tracking,numArticles,countryCode),ctaText:cta.text}};const buildEnrichedSecondaryCta=secondaryCta=>{if(secondaryCta.type===index_esm/* SecondaryCtaType */.bP.Custom){return{type:index_esm/* SecondaryCtaType */.bP.Custom,cta:buildEnrichedCta(secondaryCta.cta)}}return{type:index_esm/* SecondaryCtaType */.bP.ContributionsReminder,reminderFields:(0,index_esm/* getReminderFields */.KK)(countryCode)}};const primaryCta=bannerContent.cta?buildEnrichedCta(bannerContent.cta):null;const secondaryCta=bannerContent.secondaryCta?buildEnrichedSecondaryCta(bannerContent.secondaryCta):null;const cleanHighlightedText=bannerContent.highlightedText&&(0,index_esm/* replaceNonArticleCountPlaceholders */.BA)(bannerContent.highlightedText,countryCode,prices).trim();const cleanHeading=(0,index_esm/* replaceNonArticleCountPlaceholders */.BA)(bannerContent.heading,countryCode,prices).trim();const cleanParagraphs=cleanParagraphsOrMessageText(bannerContent.paragraphs,bannerContent.messageText);const copyHasPlaceholder=paragraphsContainNonArticleCountPlaceholder(cleanParagraphs)||!!cleanHighlightedText&&(0,index_esm/* containsNonArticleCountPlaceholder */.FT)(cleanHighlightedText)||!!cleanHeading&&(0,index_esm/* containsNonArticleCountPlaceholder */.FT)(cleanHeading);const headingWithArticleCount=cleanHeading?(0,replaceArticleCount/* replaceArticleCount */.k)(cleanHeading,numArticles,"banner"):null;const highlightedTextWithArticleCount=cleanHighlightedText?(0,replaceArticleCount/* replaceArticleCount */.k)(cleanHighlightedText,numArticles,"banner"):null;if(copyHasPlaceholder){throw Error("Banner copy contains placeholders, abandoning.")}return{highlightedText:highlightedTextWithArticleCount,paragraphs:finaliseParagraphs(cleanParagraphs),heading:headingWithArticleCount,primaryCta,secondaryCta}};const clickHandlerFor=(componentId,close)=>{return()=>{const componentClickEvent=(0,lib_tracking/* createClickEventFromTracking */.Mf)(tracking,componentId);if(submitComponentEvent){submitComponentEvent(componentClickEvent)}if(close){onClose()}}};const onCtaClick=clickHandlerFor(componentIds.cta,true);const onSecondaryCtaClick=clickHandlerFor(componentIds.secondaryCta,true);const onReminderCtaClick=clickHandlerFor(componentIds.reminderCta,false);const onReminderSetClick=clickHandlerFor(componentIds.reminderSet,false);const onReminderCloseClick=clickHandlerFor(componentIds.reminderClose,false);const onCloseClick=clickHandlerFor(componentIds.close,true);const onNotNowClick=clickHandlerFor(componentIds.notNow,true);const onSignInClick=clickHandlerFor(componentIds.signIn,false);try{const renderedContent=content&&buildRenderedContent(content);const renderedMobileContent=mobileContent&&buildRenderedContent(mobileContent);if(renderedContent){const props={onCtaClick,onSecondaryCtaClick,reminderTracking:{onReminderCtaClick,onReminderSetClick,onReminderCloseClick},onCloseClick,onSignInClick,onNotNowClick,content:{mainContent:renderedContent,mobileContent:renderedMobileContent??renderedContent},countryCode,fetchEmail,tickerSettings,isSupporter,articleCounts,separateArticleCount,separateArticleCountSettings,choiceCardAmounts,tracking,submitComponentEvent,design};return /*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsx)("div",{ref:setNode,children:/*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsx)(Banner,{...props})})}}catch(err){console.log(err)}return /*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsx)(emotion_react_jsx_runtime_esm.Fragment,{})};const bannerWrapper=(Banner,bannerId)=>withCloseable(withBannerData(Banner,bannerId));const validate=props=>{const result=index_esm/* bannerSchema */.a.safeParse(props);return result.success};const validatedBannerWrapper=(Banner,bannerId)=>{return props=>{if(validate(props)){const Module=bannerWrapper(Banner,bannerId);return /*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsx)(Module,{...props})}return /*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsx)(emotion_react_jsx_runtime_esm.Fragment,{})}};

/***/ }),

/***/ 53935:
/*!************************************************************!*\
  !*** ./src/components/marketing/lib/articleCountOptOut.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   H6: () => (/* binding */ hasArticleCountOptOutCookie),
/* harmony export */   K4: () => (/* binding */ addArticleCountOptOutCookie),
/* harmony export */   wV: () => (/* binding */ removeArticleCountFromLocalStorage),
/* harmony export */   zr: () => (/* binding */ removeArticleCountOptOutCookie)
/* harmony export */ });
/* harmony import */ var _guardian_libs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @guardian/libs */ 11735);
/* harmony import */ var _guardian_libs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @guardian/libs */ 96811);
/* harmony import */ var _guardian_libs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @guardian/libs */ 61082);
/* harmony import */ var _guardian_libs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @guardian/libs */ 18411);
const ARTICLE_COUNT_OPT_OUT_COOKIE={name:"gu_article_count_opt_out",daysToLive:90};const DAILY_ARTICLE_COUNT_STORAGE_KEY="gu.history.dailyArticleCount";const WEEKLY_ARTICLE_COUNT_STORAGE_KEY="gu.history.weeklyArticleCount";const ARTICLES_THIS_WEEK_STORAGE_KEY="gu.history.articleCountsThisWeek";const addArticleCountOptOutCookie=()=>(0,_guardian_libs__WEBPACK_IMPORTED_MODULE_0__/* .setCookie */ .T)({name:ARTICLE_COUNT_OPT_OUT_COOKIE.name,value:new Date().getTime().toString(),daysToLive:ARTICLE_COUNT_OPT_OUT_COOKIE.daysToLive});const removeArticleCountOptOutCookie=()=>(0,_guardian_libs__WEBPACK_IMPORTED_MODULE_1__/* .removeCookie */ .z)({name:ARTICLE_COUNT_OPT_OUT_COOKIE.name});const removeArticleCountFromLocalStorage=()=>{_guardian_libs__WEBPACK_IMPORTED_MODULE_2__/* .storage */ .I.local.remove(DAILY_ARTICLE_COUNT_STORAGE_KEY);_guardian_libs__WEBPACK_IMPORTED_MODULE_2__/* .storage */ .I.local.remove(WEEKLY_ARTICLE_COUNT_STORAGE_KEY);_guardian_libs__WEBPACK_IMPORTED_MODULE_2__/* .storage */ .I.local.remove(ARTICLES_THIS_WEEK_STORAGE_KEY)};const hasArticleCountOptOutCookie=()=>!!(0,_guardian_libs__WEBPACK_IMPORTED_MODULE_3__/* .getCookie */ .R)({name:ARTICLE_COUNT_OPT_OUT_COOKIE.name});

/***/ }),

/***/ 79971:
/*!**************************************************************************!*\
  !*** ./src/components/marketing/lib/replaceArticleCount.tsx + 2 modules ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  k: () => (/* binding */ replaceArticleCount)
});

// UNUSED EXPORTS: replaceArticleCountWithLink

// EXTERNAL MODULE: ../node_modules/.pnpm/@emotion+react@11.11.3_@types+react@18.3.1_react@18.3.1/node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.esm.js + 2 modules
var emotion_react_jsx_runtime_esm = __webpack_require__(5743);
// EXTERNAL MODULE: ../node_modules/.pnpm/@emotion+react@11.11.3_@types+react@18.3.1_react@18.3.1/node_modules/@emotion/react/dist/emotion-react.esm.js
var emotion_react_esm = __webpack_require__(43102);
// EXTERNAL MODULE: ../node_modules/.pnpm/@guardian+source@8.0.0_@emotion+react@11.11.3_@types+react@18.3.1_react@18.3.1_tslib@2.6.2_typescript@5.5.3/node_modules/@guardian/source/dist/foundations/mq/mq.js
var mq = __webpack_require__(99923);
// EXTERNAL MODULE: ../node_modules/.pnpm/@guardian+source@8.0.0_@emotion+react@11.11.3_@types+react@18.3.1_react@18.3.1_tslib@2.6.2_typescript@5.5.3/node_modules/@guardian/source/dist/foundations/__generated__/space.js
var space = __webpack_require__(96378);
// EXTERNAL MODULE: ../node_modules/.pnpm/preact@10.15.1/node_modules/preact/compat/dist/compat.mjs + 1 modules
var compat = __webpack_require__(43532);
// EXTERNAL MODULE: ./src/lib/useIsInView.ts
var useIsInView = __webpack_require__(58452);
// EXTERNAL MODULE: ./src/components/marketing/lib/articleCountOptOut.ts
var articleCountOptOut = __webpack_require__(53935);
// EXTERNAL MODULE: ../node_modules/.pnpm/@emotion+react@11.11.3_@types+react@18.3.1_react@18.3.1/node_modules/@emotion/react/dist/emotion-element-6bdfffb2.esm.js + 2 modules
var emotion_element_6bdfffb2_esm = __webpack_require__(34847);
// EXTERNAL MODULE: ../node_modules/.pnpm/@guardian+source@8.0.0_@emotion+react@11.11.3_@types+react@18.3.1_react@18.3.1_tslib@2.6.2_typescript@5.5.3/node_modules/@guardian/source/dist/foundations/__generated__/palette.js
var palette = __webpack_require__(77907);
// EXTERNAL MODULE: ../node_modules/.pnpm/@guardian+source@8.0.0_@emotion+react@11.11.3_@types+react@18.3.1_react@18.3.1_tslib@2.6.2_typescript@5.5.3/node_modules/@guardian/source/dist/foundations/__deprecated__/colour/palette.js
var colour_palette = __webpack_require__(46080);
// EXTERNAL MODULE: ../node_modules/.pnpm/@guardian+source@8.0.0_@emotion+react@11.11.3_@types+react@18.3.1_react@18.3.1_tslib@2.6.2_typescript@5.5.3/node_modules/@guardian/source/dist/foundations/__generated__/typography.js
var typography = __webpack_require__(7351);
// EXTERNAL MODULE: ../node_modules/.pnpm/@guardian+source@8.0.0_@emotion+react@11.11.3_@types+react@18.3.1_react@18.3.1_tslib@2.6.2_typescript@5.5.3/node_modules/@guardian/source/dist/react-components/button/theme.js
var theme = __webpack_require__(14302);
// EXTERNAL MODULE: ../node_modules/.pnpm/@guardian+source@8.0.0_@emotion+react@11.11.3_@types+react@18.3.1_react@18.3.1_tslib@2.6.2_typescript@5.5.3/node_modules/@guardian/source/dist/react-components/button/Button.js
var Button = __webpack_require__(27123);
// EXTERNAL MODULE: ../node_modules/.pnpm/@guardian+source@8.0.0_@emotion+react@11.11.3_@types+react@18.3.1_react@18.3.1_tslib@2.6.2_typescript@5.5.3/node_modules/@guardian/source/dist/react-components/__generated__/icons/SvgCross.js
var SvgCross = __webpack_require__(56607);
;// ./src/components/marketing/shared/ArticleCountOptOutOverlay.tsx
const{brand,neutral}=palette/* palette */.M;const COLOURS={epic:"white",banner:colour_palette/* brandAltText */.yF.primary,["investigations-moment-banner"]:neutral[0],["us-eoy-moment-banner"]:neutral[0],["global-new-year-moment-banner"]:neutral[0],["election-au-moment-banner"]:neutral[0]};const BACKGROUND_COLOURS={epic:brand[400],banner:colour_palette/* brandAltBackground */.jP.primary,["investigations-moment-banner"]:neutral[100],["us-eoy-moment-banner"]:"#FFEEDB",["global-new-year-moment-banner"]:"#F79E1B",["election-au-moment-banner"]:"#e4e4e3"};const BORDER_COLOURS={epic:"transparent",banner:colour_palette/* brandAltLine */.VD.primary,["investigations-moment-banner"]:neutral[0],["us-eoy-moment-banner"]:neutral[0],["global-new-year-moment-banner"]:neutral[0],["election-au-moment-banner"]:neutral[0]};const BUTTON_THEMES={epic:theme/* buttonThemeBrand */.fc,banner:theme/* buttonThemeBrandAlt */.Wd,["investigations-moment-banner"]:theme/* buttonThemeDefault */.fA,["us-eoy-moment-banner"]:theme/* buttonThemeDefault */.fA,["global-new-year-moment-banner"]:theme/* buttonThemeDefault */.fA,["election-au-moment-banner"]:theme/* buttonThemeDefault */.fA};const overlayContainer=type=>(0,emotion_react_esm.css)`
	color: ${COLOURS[type]};
	background: ${BACKGROUND_COLOURS[type]};
	border: 1px solid ${BORDER_COLOURS[type]};
	${typography/* textSans17 */.NA0}
	padding: ${space/* space */.x[2]}px;
	box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`;const overlayHeader=(0,emotion_react_esm.css)`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;const overlayHeaderText=(0,emotion_react_esm.css)`
	font-size: 17px;
	font-weight: bold;
`;const overlayBody=(0,emotion_react_esm.css)`
	margin-top: ${space/* space */.x[1]}px;
	font-size: 15px;
`;const overlayCtaContainer=(0,emotion_react_esm.css)`
	margin-top: ${space/* space */.x[3]}px;
	display: flex;
	flex-direction: row;

	> * + * {
		margin-left: ${space/* space */.x[2]}px;
	}

	${mq/* from */.HT.tablet} {
		> * + * {
			margin-left: ${space/* space */.x[3]}px;
		}
	}
`;const NOTE_LINK_COLOURS={epic:neutral[100],banner:colour_palette/* brandAltText */.yF.primary,["investigations-moment-banner"]:neutral[0],["us-eoy-moment-banner"]:neutral[0],["global-new-year-moment-banner"]:neutral[0],["election-au-moment-banner"]:neutral[0]};const BUTTON_OVERRIDES={epic:(0,emotion_react_esm.css)``,banner:(0,emotion_react_esm.css)``,["investigations-moment-banner"]:(0,emotion_react_esm.css)`
		background-color: ${palette/* palette */.M.neutral[100]};
		color: ${palette/* palette */.M.neutral[0]};
		border: 1px solid ${palette/* palette */.M.neutral[0]};

		&:hover {
			background-color: ${palette/* palette */.M.neutral[86]};
		}
	`,["us-eoy-moment-banner"]:(0,emotion_react_esm.css)`
		color: ${palette/* palette */.M.neutral[7]};
		border: 1px solid ${palette/* palette */.M.neutral[7]};

		&:hover {
			background-color: ${palette/* palette */.M.culture[350]};
			color: ${palette/* palette */.M.neutral[100]};
			border: 1px solid ${palette/* palette */.M.culture[350]};
		}
	`,["global-new-year-moment-banner"]:(0,emotion_react_esm.css)`
		color: ${palette/* palette */.M.neutral[7]};
		border: 1px solid ${palette/* palette */.M.neutral[7]};

		&:hover {
			background-color: ${palette/* palette */.M.brand[500]};
			color: ${palette/* palette */.M.neutral[100]};
			border: 1px solid ${palette/* palette */.M.brand[500]};
		}
	`,["election-au-moment-banner"]:(0,emotion_react_esm.css)`
		color: ${palette/* palette */.M.neutral[7]};
		border: 1px solid ${palette/* palette */.M.neutral[7]};

		&:hover {
			background-color: ${palette/* palette */.M.brand[500]};
			color: ${palette/* palette */.M.neutral[100]};
			border: 1px solid ${palette/* palette */.M.brand[500]};
		}
	`};const PRIMARY_BUTTON_OVERRIDES={epic:(0,emotion_react_esm.css)``,banner:(0,emotion_react_esm.css)``,["investigations-moment-banner"]:(0,emotion_react_esm.css)`
		background-color: ${palette/* palette */.M.neutral[0]};
		color: ${palette/* palette */.M.neutral[100]};
		border: 1px solid ${palette/* palette */.M.neutral[0]};

		&:hover {
			background-color: ${palette/* palette */.M.neutral[46]};
			border-color: ${palette/* palette */.M.neutral[46]};
		}
	`,["us-eoy-moment-banner"]:(0,emotion_react_esm.css)`
		background-color: ${palette/* palette */.M.neutral[7]};
		color: ${palette/* palette */.M.neutral[100]};
		border: 1px solid ${palette/* palette */.M.neutral[7]};

		&:hover {
			background-color: ${palette/* palette */.M.culture[350]};
			color: ${palette/* palette */.M.neutral[100]};
			border: 1px solid ${palette/* palette */.M.culture[350]};
		}
	`,["global-new-year-moment-banner"]:(0,emotion_react_esm.css)`
		background-color: ${palette/* palette */.M.neutral[0]};
		color: ${palette/* palette */.M.neutral[100]};
		border: 1px solid ${palette/* palette */.M.neutral[0]};

		&:hover {
			background-color: ${palette/* palette */.M.brand[500]};
			color: ${palette/* palette */.M.neutral[100]};
			border: 1px solid ${palette/* palette */.M.brand[500]};
		}
	`,["election-au-moment-banner"]:(0,emotion_react_esm.css)`
		background-color: ${palette/* palette */.M.neutral[0]};
		color: ${palette/* palette */.M.neutral[100]};
		border: 1px solid ${palette/* palette */.M.neutral[0]};

		&:hover {
			background-color: ${colour_palette/* background */.Tp.ctaPrimaryHover};
			color: ${palette/* palette */.M.neutral[100]};
			border: 1px solid ${colour_palette/* background */.Tp.ctaPrimaryHover};
		}
	`};const overlayNote=type=>(0,emotion_react_esm.css)`
	margin-top: ${space/* space */.x[2]}px;
	${typography/* textSans14 */.WuG}
	font-style: italic;

	a {
		/* stylelint-disable-next-line declaration-no-important */
		color: ${NOTE_LINK_COLOURS[type]} !important;
		/* stylelint-disable-next-line declaration-no-important */
		text-decoration: underline !important;
	}
`;const ArticleCountOptOutOverlay=({type,hasOptedOut,onClose,onOptOut})=>{return /*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsxs)("div",{css:overlayContainer(type),children:[/*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsxs)("div",{css:overlayHeader,children:[/*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsx)("div",{css:overlayHeaderText,children:hasOptedOut?"You've opted out":"What's this?"}),/*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsx)(emotion_element_6bdfffb2_esm.a,{theme:BUTTON_THEMES[type],children:/*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsx)(Button/* Button */.$,{onClick:onClose,cssOverrides:BUTTON_OVERRIDES[type],icon:/*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsx)(SvgCross/* SvgCross */.F,{}),hideLabel:true,size:"xsmall",priority:"tertiary",children:"Close"})})]}),/*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsx)("div",{css:overlayBody,children:hasOptedOut?"Starting from your next page view, we won't count the articles you read or show you this message for three months.":"We would like to remind you how many Guardian articles you’ve enjoyed on this device. Can we continue showing you this?"}),!hasOptedOut&&/*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsxs)("div",{css:overlayCtaContainer,children:[/*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsx)(emotion_element_6bdfffb2_esm.a,{theme:BUTTON_THEMES[type],children:/*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsx)(Button/* Button */.$,{onClick:onClose,cssOverrides:PRIMARY_BUTTON_OVERRIDES[type],priority:"primary",size:"xsmall",children:"Yes, that's OK"})}),/*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsx)(emotion_element_6bdfffb2_esm.a,{theme:BUTTON_THEMES[type],children:/*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsx)(Button/* Button */.$,{onClick:onOptOut,cssOverrides:BUTTON_OVERRIDES[type],priority:"tertiary",size:"xsmall",children:"No, opt me out"})})]}),/*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsx)("div",{css:overlayNote(type),children:hasOptedOut?/*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsxs)("span",{children:["If you have any questions, please"," ",/*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsx)("a",{href:"https://www.theguardian.com/help/contact-us",children:"contact us."})]}):"Please note that opting out is a permanent action and can't be reversed"})]})};
;// ./src/components/marketing/shared/ArticleCountOptOutPopup.tsx
const OPHAN_COMPONENT_ID_OPT_OUT_VIEW="article-count-opt-out-view";const OPHAN_COMPONENT_ID_OPT_OUT_OPEN="article-count-opt-out-open";const OPHAN_COMPONENT_ID_OPT_OUT_CLOSE="article-count-opt-out-close";const OPHAN_COMPONENT_ID_OPT_OUT_CONFIRM="article-count-opt-out-confirm";const ophanComponentEventOptOutView=componentType=>({component:{componentType:"ACQUISITIONS_OTHER",id:OPHAN_COMPONENT_ID_OPT_OUT_VIEW},action:"VIEW",value:`article-count-opt-out-popup-${componentType}`});const ophanComponentEventOptOutOpen=componentType=>({component:{componentType:"ACQUISITIONS_OTHER",id:OPHAN_COMPONENT_ID_OPT_OUT_OPEN},action:"CLICK",value:`article-count-opt-out-popup-${componentType}`});const ophanComponentEventOptOutClose=componentType=>({component:{componentType:"ACQUISITIONS_OTHER",id:OPHAN_COMPONENT_ID_OPT_OUT_CLOSE},action:"CLICK",value:`article-count-opt-out-popup-${componentType}`});const ophanComponentEventOptOutConfirm=componentType=>({component:{componentType:"ACQUISITIONS_OTHER",id:OPHAN_COMPONENT_ID_OPT_OUT_CONFIRM},action:"CLICK",value:`article-count-opt-out-popup-${componentType}`});const isBanner=type=>type==="banner"||type==="investigations-moment-banner"||type==="us-eoy-moment-banner"||type==="global-new-year-moment-banner"||type==="election-au-moment-banner";const optOutContainer=type=>(0,emotion_react_esm.css)`
	display: inline-block;

	${mq/* from */.HT.tablet} {
		${!isBanner(type)?"position: relative;":""}
	}
`;const articleCountButton=(0,emotion_react_esm.css)`
	background: none;
	border: none;
	padding: 0;
	cursor: pointer;
	border-bottom: 1px solid;
	/* stylelint-disable-next-line property-disallowed-list */
	font-family: inherit;
	font-size: inherit;
	font-weight: inherit;
	font-style: inherit;
	color: inherit;
	&:focus {
		/* stylelint-disable-next-line declaration-no-important */
		outline: none !important;
	}
`;const ArticleCountOptOutPopup_overlayContainer=type=>(0,emotion_react_esm.css)`
	position: absolute;
	z-index: 100;
	${isBanner(type)?(0,emotion_react_esm.css)`
				top: 0px;
				left: 0px;
		  `:(0,emotion_react_esm.css)`
				left: ${space/* space */.x[4]}px;
				right: ${space/* space */.x[4]}px;
				${isBanner(type)?"bottom: 21px;":""}
		  `}
	display: block;

	${mq/* from */.HT.tablet} {
		${isBanner(type)?(0,emotion_react_esm.css)`
					top: 10px;
					left: 10px;
					width: 450px;
			  `:(0,emotion_react_esm.css)`
					width: 400px;
					left: 0;
			  `}
	}
`;const ArticleCountOptOutPopup=({numArticles,nextWord,type,tracking})=>{const[isOpen,setIsOpen]=(0,compat.useState)(false);const[hasOptedOut,setHasOptedOut]=(0,compat.useState)(false);const[hasBeenSeen,setNode]=(0,useIsInView/* useIsInView */.E)({debounce:true,rootMargin:"-18px",threshold:0});(0,compat.useEffect)(()=>{if(hasBeenSeen&&tracking){tracking.submitComponentEvent(ophanComponentEventOptOutView(tracking.componentType))}},[hasBeenSeen,tracking]);const onOptOut=()=>{(0,articleCountOptOut/* addArticleCountOptOutCookie */.K4)();(0,articleCountOptOut/* removeArticleCountFromLocalStorage */.wV)();setHasOptedOut(true);if(tracking){tracking.submitComponentEvent(ophanComponentEventOptOutConfirm(tracking.componentType))}};const onOpen=()=>{setIsOpen(true);if(tracking){tracking.submitComponentEvent(ophanComponentEventOptOutOpen(tracking.componentType))}};const onClose=()=>{setIsOpen(false);if(tracking){tracking.submitComponentEvent(ophanComponentEventOptOutClose(tracking.componentType))}};const onToggle=()=>isOpen?onClose():onOpen();return /*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsxs)("div",{ref:setNode,css:optOutContainer(type),children:[/*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsx)("button",{css:articleCountButton,onClick:onToggle,children:`${numArticles}${nextWord?nextWord:""}`}),isOpen&&/*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsx)("div",{css:ArticleCountOptOutPopup_overlayContainer(type),children:/*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsx)(ArticleCountOptOutOverlay,{type:type,hasOptedOut:hasOptedOut,onOptOut:onOptOut,onClose:onClose})})]})};
;// ./src/components/marketing/lib/replaceArticleCount.tsx
const replaceArticleCountWithLink=(text,numArticles,articleCountOptOutType,tracking)=>{const nextWords=[];const subbedText=text.replace(/%%ARTICLE_COUNT%%( \w+)?/g,(_,nextWord)=>{nextWords.push(nextWord);return"%%ARTICLE_COUNT_AND_NEXT_WORD%%"});const parts=subbedText.split(/%%ARTICLE_COUNT_AND_NEXT_WORD%%/);const elements=[];let key=0;for(let i=0;i<parts.length-1;i+=1){elements.push(/*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsx)("span",{dangerouslySetInnerHTML:{__html:parts[i]}},key++));elements.push(/*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsx)(ArticleCountOptOutPopup,{numArticles:numArticles,nextWord:nextWords[i],type:articleCountOptOutType,tracking:tracking},key++))}elements.push(/*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsx)("span",{dangerouslySetInnerHTML:{__html:parts[parts.length-1]}},key++));return elements};const replaceArticleCount=(text,numArticles,articleCountOptOutType,tracking,optOutLink=true)=>{if(optOutLink){return replaceArticleCountWithLink(text,numArticles,articleCountOptOutType,tracking)}return /*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsx)("span",{dangerouslySetInnerHTML:{__html:text.replace(/%%ARTICLE_COUNT%%/,`${numArticles}`)}})};

/***/ })

};
;
//# sourceMappingURL=9818.js.map