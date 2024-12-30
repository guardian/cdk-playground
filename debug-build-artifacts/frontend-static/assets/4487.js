"use strict";
exports.id = 4487;
exports.ids = [4487];
exports.modules = {

/***/ 47267:
/*!******************************************************************************!*\
  !*** ./src/components/marketing/epics/ContributionsEpicNewsletterSignup.tsx ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   o: () => (/* binding */ ContributionsEpicNewsletterSignup)
/* harmony export */ });
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/react/jsx-runtime */ 5743);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/react */ 43102);
/* harmony import */ var _guardian_source_foundations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @guardian/source/foundations */ 96378);
/* harmony import */ var _NewsletterPrivacyMessage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../NewsletterPrivacyMessage */ 67724);
/* harmony import */ var _SecureSignup_importable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../SecureSignup.importable */ 59733);
const containerStyles=(0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.css)`
	margin: ${_guardian_source_foundations__WEBPACK_IMPORTED_MODULE_3__/* .space */ .x[6]}px ${_guardian_source_foundations__WEBPACK_IMPORTED_MODULE_3__/* .space */ .x[2]}px ${_guardian_source_foundations__WEBPACK_IMPORTED_MODULE_3__/* .space */ .x[1]}px 0;
`;const ContributionsEpicNewsletterSignup=({newsletterId,successDescription,tracking})=>{return /*#__PURE__*/(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div",{css:containerStyles,children:[/*#__PURE__*/(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_SecureSignup_importable__WEBPACK_IMPORTED_MODULE_1__.SecureSignup,{newsletterId:newsletterId,successDescription:successDescription,abTest:{name:tracking.abTestName,variant:tracking.abTestVariant}}),/*#__PURE__*/(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_NewsletterPrivacyMessage__WEBPACK_IMPORTED_MODULE_0__/* .NewsletterPrivacyMessage */ .B,{})]})};

/***/ }),

/***/ 15870:
/*!********************************************************************************************!*\
  !*** ./src/components/marketing/epics/ctas/ContributionsEpicCtasContainer.tsx + 7 modules ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  B: () => (/* binding */ ContributionsEpicCtasContainer)
});

// EXTERNAL MODULE: ../node_modules/.pnpm/@emotion+react@11.11.3_@types+react@18.3.1_react@18.3.1/node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.esm.js + 2 modules
var emotion_react_jsx_runtime_esm = __webpack_require__(5743);
// EXTERNAL MODULE: ../node_modules/.pnpm/preact@10.15.1/node_modules/preact/compat/dist/compat.mjs + 1 modules
var compat = __webpack_require__(43532);
// EXTERNAL MODULE: ../node_modules/.pnpm/@emotion+react@11.11.3_@types+react@18.3.1_react@18.3.1/node_modules/@emotion/react/dist/emotion-react.esm.js
var emotion_react_esm = __webpack_require__(43102);
// EXTERNAL MODULE: ../node_modules/.pnpm/@guardian+libs@19.2.1_tslib@2.6.2_typescript@5.5.3/node_modules/@guardian/libs/dist/isUndefined/isUndefined.js
var isUndefined = __webpack_require__(9474);
// EXTERNAL MODULE: ../node_modules/.pnpm/@guardian+source@8.0.0_@emotion+react@11.11.3_@types+react@18.3.1_react@18.3.1_tslib@2.6.2_typescript@5.5.3/node_modules/@guardian/source/dist/foundations/__generated__/palette.js
var palette = __webpack_require__(77907);
// EXTERNAL MODULE: ../node_modules/.pnpm/@guardian+source@8.0.0_@emotion+react@11.11.3_@types+react@18.3.1_react@18.3.1_tslib@2.6.2_typescript@5.5.3/node_modules/@guardian/source/dist/foundations/__generated__/space.js
var space = __webpack_require__(96378);
// EXTERNAL MODULE: ../node_modules/.pnpm/@guardian+source@8.0.0_@emotion+react@11.11.3_@types+react@18.3.1_react@18.3.1_tslib@2.6.2_typescript@5.5.3/node_modules/@guardian/source/dist/foundations/__generated__/typography.js
var typography = __webpack_require__(7351);
// EXTERNAL MODULE: ../node_modules/.pnpm/@guardian+source@8.0.0_@emotion+react@11.11.3_@types+react@18.3.1_react@18.3.1_tslib@2.6.2_typescript@5.5.3/node_modules/@guardian/source/dist/foundations/mq/mq.js
var mq = __webpack_require__(99923);
// EXTERNAL MODULE: ../node_modules/.pnpm/@guardian+source@8.0.0_@emotion+react@11.11.3_@types+react@18.3.1_react@18.3.1_tslib@2.6.2_typescript@5.5.3/node_modules/@guardian/source/dist/react-components/__generated__/icons/SvgTickRound.js
var SvgTickRound = __webpack_require__(11920);
// EXTERNAL MODULE: ../node_modules/.pnpm/@guardian+source@8.0.0_@emotion+react@11.11.3_@types+react@18.3.1_react@18.3.1_tslib@2.6.2_typescript@5.5.3/node_modules/@guardian/source/dist/react-components/radio/RadioGroup.js + 2 modules
var RadioGroup = __webpack_require__(69913);
// EXTERNAL MODULE: ../node_modules/.pnpm/@guardian+source@8.0.0_@emotion+react@11.11.3_@types+react@18.3.1_react@18.3.1_tslib@2.6.2_typescript@5.5.3/node_modules/@guardian/source/dist/react-components/stack/Stack.js + 1 modules
var Stack = __webpack_require__(91621);
// EXTERNAL MODULE: ../node_modules/.pnpm/@guardian+source@8.0.0_@emotion+react@11.11.3_@types+react@18.3.1_react@18.3.1_tslib@2.6.2_typescript@5.5.3/node_modules/@guardian/source/dist/react-components/radio/Radio.js
var Radio = __webpack_require__(90789);
// EXTERNAL MODULE: ../node_modules/.pnpm/@guardian+support-dotcom-components@3.2.0_@guardian+libs@19.2.1_zod@3.22.4/node_modules/@guardian/support-dotcom-components/dist/index.esm.js + 1 modules
var index_esm = __webpack_require__(29995);
;// ./src/components/marketing/epics/ThreeTierChoiceCardData.tsx
const ChoiceCardTestData_REGULAR=[{supportTier:"Contribution",label:(amount,currencySymbol)=>`Support ${currencySymbol}${amount}/month`,benefitsLabel:"Support",benefits:()=>["Exclusive newsletter for supporters, sent every week from the Guardian newsroom"],recommended:false},{supportTier:"SupporterPlus",label:(amount,currencySymbol,discount)=>{if(!(0,isUndefined/* isUndefined */.b)(discount)){return /*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsxs)(emotion_react_jsx_runtime_esm.Fragment,{children:["Support"," ",/*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsxs)("s",{children:[currencySymbol,amount]})," ",currencySymbol,amount*discount,"/month"," "]})}else{return`Support ${currencySymbol}${amount}/month`}},benefitsLabel:"All-access digital",benefits:()=>["Unlimited access to the Guardian app","Unlimited access to our new Feast App","Ad-free reading on all your devices","Exclusive newsletter for supporters, sent every week from the Guardian newsroom","Far fewer asks for support"],recommended:true},{supportTier:"OneOff",label:()=>"Support with another amount",benefitsLabel:undefined,benefits:()=>["We welcome support of any size, any time"],recommended:false}];const ChoiceCardTestData_US=[{supportTier:"Contribution",label:(amount,currencySymbol)=>`Support ${currencySymbol}${amount}/month`,benefitsLabel:"Support",benefits:()=>["Exclusive newsletter for supporters, sent every week from the Guardian newsroom"],recommended:false},{supportTier:"SupporterPlus",label:(amount,currencySymbol)=>`Support ${currencySymbol}${amount}/month`,benefitsLabel:"All-access digital",benefits:()=>["Unlimited access to the Guardian app","Unlimited access to our new Feast App","Ad-free reading on all your devices","Exclusive newsletter for supporters, sent every week from the Guardian newsroom","Far fewer asks for support"],recommended:true},{supportTier:"OneOff",label:(amount,currencySymbol)=>`Support once from just ${currencySymbol}1`,benefitsLabel:undefined,benefits:currencySymbol=>[`We welcome support of any size, any time - whether you choose to give ${currencySymbol}1 or more`],recommended:false}];const ChoiceCardTestData_TwoTier_REGULAR=[{supportTier:"SupporterPlus",label:(amount,currencySymbol,discount)=>{if(!(0,isUndefined/* isUndefined */.b)(discount)){return /*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsxs)(emotion_react_jsx_runtime_esm.Fragment,{children:["Support"," ",/*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsxs)("s",{children:[currencySymbol,amount]})," ",currencySymbol,amount*discount,"/month"," "]})}else{return`Support ${currencySymbol}${amount}/month`}},benefitsLabel:"All-access digital",benefits:()=>["Unlimited access to the Guardian app","Ad-free reading on all your devices","Exclusive newsletter for supporters","And much more!"],recommended:true},{supportTier:"OneOff",label:(amount,currencySymbol)=>`Support us from just ${currencySymbol}1`,benefitsLabel:undefined,benefits:currencySymbol=>[`We welcome support of any size, any time - whether you choose to give ${currencySymbol}1 or more`],recommended:false}];
// EXTERNAL MODULE: ./src/components/marketing/epics/utils/threeTierChoiceCardAmounts.ts
var threeTierChoiceCardAmounts = __webpack_require__(45606);
;// ./src/components/marketing/epics/ThreeTierChoiceCards.tsx
const supportTierChoiceCardStyles=selected=>(0,emotion_react_esm.css)`
	display: block;
	border: ${selected?`2px solid ${palette/* palette */.M.brand["500"]}`:`1px solid ${palette/* palette */.M.neutral[46]}`};
	background-color: ${selected?palette/* palette */.M.sport[800]:palette/* palette */.M.neutral[100]};
	border-radius: 10px;
	padding: ${selected?`6px ${space/* space */.x[5]}px 10px ${space/* space */.x[5]}px`:`6px ${space/* space */.x[5]}px`};
`;const benefitsStyles=(0,emotion_react_esm.css)`
	${typography/* textSans15 */.PSs};
	color: ${palette/* palette */.M.neutral[7]};
	list-style: none;
	margin: 0 0 0 -4px;
	padding: 0;

	li + li {
		margin-top: ${space/* space */.x[2]}px;
	}

	li {
		display: flex;
		align-items: flex-start;
		margin-top: ${space/* space */.x[2]}px;
	}

	svg {
		flex-shrink: 0;
		margin-right: ${space/* space */.x[2]}px;
		fill: ${palette/* palette */.M.brand[400]};
	}
`;const benefitsLabelStyles=(0,emotion_react_esm.css)`
	color: ${palette/* palette */.M.neutral[0]};
	${typography/* textSans15 */.PSs};

	strong {
		${typography/* textSansBold15 */.yui};
	}
`;const labelOverrideStyles=(0,emotion_react_esm.css)`
	+ label div {
		font-weight: bold;
		s {
			font-weight: normal;
		}
	}
`;const supportingTextStyles=(0,emotion_react_esm.css)`
	margin-top: ${space/* space */.x[4]}px;
`;const recommendedPillStyles=(0,emotion_react_esm.css)`
	border-radius: 4px;
	padding: ${space/* space */.x[1]}px ${space/* space */.x[2]}px;
	background-color: ${palette/* palette */.M.brand[400]};
	${typography/* textSansBold14 */.rS6};
	color: ${palette/* palette */.M.neutral[100]};
	position: absolute;
	top: -${space/* space */.x[2]}px;
	${mq/* until */.TG.phablet} {
		right: ${space/* space */.x[3]}px;
	}
	right: ${space/* space */.x[5]}px;
`;const discountedPillStyles=(0,emotion_react_esm.css)`
	border-radius: 4px;
	padding: ${space/* space */.x[1]}px ${space/* space */.x[2]}px;
	background-color: ${palette/* palette */.M.error[400]};
	${typography/* textSansBold14 */.rS6};
	color: ${palette/* palette */.M.neutral[100]};
	position: absolute;
	top: -${space/* space */.x[2]}px;
	${mq/* until */.TG.phablet} {
		right: ${space/* space */.x[3]}px;
	}
	right: ${space/* space */.x[5]}px;
`;function getChoiceAmount(supportTier,ratePlan,countryGroupId){return threeTierChoiceCardAmounts/* threeTierChoiceCardAmounts */.n[ratePlan][countryGroupId][supportTier]}const SupportingBenefits=({benefitsLabel,benefits})=>{const isBenefit=!!benefitsLabel;return /*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsxs)("div",{css:supportingTextStyles,children:[!!benefitsLabel&&/*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsxs)("span",{css:benefitsLabelStyles,children:["Unlock ",/*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsx)("strong",{children:benefitsLabel})," benefits:"]}),/*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsx)("ul",{css:benefitsStyles,children:benefits.map(benefit=>/*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsxs)("li",{children:[isBenefit&&/*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsx)(SvgTickRound/* SvgTickRound */.A,{size:"xsmall"}),benefit]},benefit))})]})};const RecommendedPill=()=>{return /*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsx)("div",{css:recommendedPillStyles,children:"Recommended"})};const DiscountedPill=({discount})=>{return /*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsxs)("div",{css:discountedPillStyles,children:[discount,"% off"]})};const getChoiceCardData=choiceCardVariant=>{switch(choiceCardVariant){case"US_THREE_TIER_CHOICE_CARDS":return ChoiceCardTestData_US;case"US_CHECKOUT_THREE_TIER_CHOICE_CARDS":return ChoiceCardTestData_US;case"TWO_TIER_CHOICE_CARDS":return ChoiceCardTestData_TwoTier_REGULAR;default:return ChoiceCardTestData_REGULAR}};const ThreeTierChoiceCards=({countryCode,selectedProduct,setSelectedProduct,variantOfChoiceCard,supporterPlusDiscount})=>{const currencySymbol=(0,index_esm/* getLocalCurrencySymbol */.dC)(countryCode);const countryGroupId=(0,index_esm/* countryCodeToCountryGroupId */.B0)(countryCode);const Choices=getChoiceCardData(variantOfChoiceCard);return /*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsx)(RadioGroup/* RadioGroup */.z,{cssOverrides:(0,emotion_react_esm.css)`
				margin-top: ${space/* space */.x[6]}px;
			`,children:/*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsx)(Stack/* Stack */.B,{space:3,children:Choices.map(({supportTier,label,benefitsLabel,benefits,recommended})=>{const choiceAmount=getChoiceAmount(supportTier,"Monthly",countryGroupId);const selected=selectedProduct===supportTier;const hasDiscount=!(0,isUndefined/* isUndefined */.b)(supporterPlusDiscount)&&supportTier==="SupporterPlus";const radioId=`choicecard-${supportTier}`;return /*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsxs)("div",{css:(0,emotion_react_esm.css)`
									position: relative;
								`,children:[hasDiscount&&/*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsx)(DiscountedPill,{discount:supporterPlusDiscount*100}),recommended&&!hasDiscount&&/*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsx)(RecommendedPill,{}),/*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsx)("label",{css:supportTierChoiceCardStyles(selected),htmlFor:radioId,children:/*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsx)(Radio/* Radio */.s,{label:label(choiceAmount,currencySymbol,supporterPlusDiscount),id:radioId,value:supportTier,cssOverrides:labelOverrideStyles,supporting:selected?/*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsx)(SupportingBenefits,{benefitsLabel:benefitsLabel,benefits:benefits(currencySymbol)}):undefined,checked:selected,onChange:()=>{setSelectedProduct(supportTier)}})})]},supportTier)})})})};
// EXTERNAL MODULE: ./src/lib/useIsInView.ts
var useIsInView = __webpack_require__(58452);
// EXTERNAL MODULE: ./src/components/marketing/lib/reminders.ts
var reminders = __webpack_require__(91210);
// EXTERNAL MODULE: ./src/components/marketing/lib/tracking.ts
var lib_tracking = __webpack_require__(81412);
// EXTERNAL MODULE: ./src/components/marketing/epics/utils/ophan.ts
var ophan = __webpack_require__(57780);
// EXTERNAL MODULE: ../node_modules/.pnpm/@emotion+react@11.11.3_@types+react@18.3.1_react@18.3.1/node_modules/@emotion/react/dist/emotion-element-6bdfffb2.esm.js + 2 modules
var emotion_element_6bdfffb2_esm = __webpack_require__(34847);
// EXTERNAL MODULE: ../node_modules/.pnpm/@guardian+source@8.0.0_@emotion+react@11.11.3_@types+react@18.3.1_react@18.3.1_tslib@2.6.2_typescript@5.5.3/node_modules/@guardian/source/dist/react-components/button/LinkButton.js
var LinkButton = __webpack_require__(68163);
// EXTERNAL MODULE: ../node_modules/.pnpm/@guardian+source@8.0.0_@emotion+react@11.11.3_@types+react@18.3.1_react@18.3.1_tslib@2.6.2_typescript@5.5.3/node_modules/@guardian/source/dist/react-components/__generated__/icons/SvgArrowRightStraight.js
var SvgArrowRightStraight = __webpack_require__(15168);
// EXTERNAL MODULE: ../node_modules/.pnpm/@guardian+source@8.0.0_@emotion+react@11.11.3_@types+react@18.3.1_react@18.3.1_tslib@2.6.2_typescript@5.5.3/node_modules/@guardian/source/dist/react-components/button/Button.js
var Button = __webpack_require__(27123);
;// ./src/components/marketing/epics/ctas/EpicButton.tsx
const buttonStyles={textPrimary:palette/* palette */.M.neutral[7],backgroundPrimary:palette/* palette */.M.brandAlt[400],backgroundPrimaryHover:palette/* palette */.M.brandAlt[300],textSecondary:palette/* palette */.M.neutral[7],backgroundSecondary:palette/* palette */.M.neutral[93],backgroundSecondaryHover:palette/* palette */.M.neutral[86],borderSecondary:palette/* palette */.M.neutral[86]};const buttonStylesForTest={textPrimary:"#FFFFFF",backgroundPrimary:"#051D32",backgroundPrimaryHover:"#072744",textSecondary:palette/* palette */.M.neutral[7],backgroundSecondary:palette/* palette */.M.neutral[93],backgroundSecondaryHover:palette/* palette */.M.neutral[86],borderSecondary:palette/* palette */.M.neutral[86]};const contributionsTheme={button:buttonStyles,link:buttonStyles};const contributionsThemeForTest={button:buttonStylesForTest,link:buttonStylesForTest};const tertiaryButtonOverrides=(0,emotion_react_esm.css)`
	/* stylelint-disable-next-line declaration-no-important */
	border: 1px solid ${palette/* palette */.M.neutral[7]} !important;
	/* stylelint-disable-next-line declaration-no-important */
	background-color: transparent !important;

	:hover {
		/* stylelint-disable-next-line declaration-no-important */
		background-color: ${palette/* palette */.M.neutral[86]} !important;
	}
`;const EpicButton=allProps=>{const{onClickAction,submitComponentEvent,children,showArrow=false,priority="primary",isTertiary,cssOverrides,icon,isColourInTestVariant,...props}=allProps;const onButtonCtaClick=()=>{if(submitComponentEvent){submitComponentEvent(priority=="primary"?ophan/* OPHAN_COMPONENT_EVENT_PRIMARY_CTA */._v:ophan/* OPHAN_COMPONENT_EVENT_SECONDARY_CTA */.sk)}};if(typeof onClickAction==="string"){return /*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsx)(emotion_element_6bdfffb2_esm.a,{theme:isColourInTestVariant?contributionsThemeForTest:contributionsTheme,children:/*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsx)(LinkButton/* LinkButton */.z,{href:onClickAction,icon:icon??/*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsx)(SvgArrowRightStraight/* SvgArrowRightStraight */._,{}),iconSide:"right",onClick:onButtonCtaClick,target:"_blank",rel:"noopener noreferrer",priority:isTertiary?"primary":priority,cssOverrides:(0,emotion_react_esm.css)(isTertiary?[tertiaryButtonOverrides,cssOverrides]:cssOverrides),...props,children:children})})}return /*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsx)(emotion_element_6bdfffb2_esm.a,{theme:isColourInTestVariant?contributionsThemeForTest:contributionsTheme,children:/*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsx)(Button/* Button */.$,{iconSide:"right",icon:showArrow?/*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsx)(SvgArrowRightStraight/* SvgArrowRightStraight */._,{}):undefined,onClick:()=>onClickAction(),priority:isTertiary?"primary":priority,cssOverrides:(0,emotion_react_esm.css)(isTertiary?[tertiaryButtonOverrides,cssOverrides]:cssOverrides),...props,children:children})})};
;// ./src/components/marketing/epics/ctas/ContributionsEpicButtons.tsx
const paymentImageStyles=(0,emotion_react_esm.css)`
	display: inline-block;
	width: auto;
	height: 25px;
	margin: ${space/* space */.x[1]}px 0;
`;const buttonWrapperStyles=(0,emotion_react_esm.css)`
	margin: ${space/* space */.x[6]}px ${space/* space */.x[2]}px ${space/* space */.x[1]}px 0;
	display: flex;
	flex-wrap: wrap;
	align-items: center;

	&.hidden {
		display: none;
	}
`;const buttonMarginStyles=(0,emotion_react_esm.css)`
	margin: ${space/* space */.x[1]}px ${space/* space */.x[2]}px ${space/* space */.x[1]}px 0;
`;const PrimaryCtaButton=({cta,tracking,countryCode,amountsTestName,amountsVariantName,numArticles,submitComponentEvent,isColourInTestVariant})=>{if(!cta){return null}const buttonText=cta.text||"Support The Guardian";const baseUrl=cta.baseUrl||"https://support.theguardian.com/contribute";const urlWithRegionAndTracking=(0,lib_tracking/* addRegionIdAndTrackingParamsToSupportUrl */.QP)(baseUrl,tracking,numArticles,countryCode,amountsTestName,amountsVariantName);return /*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsx)("div",{css:buttonMarginStyles,children:/*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsx)(EpicButton,{onClickAction:urlWithRegionAndTracking,submitComponentEvent:submitComponentEvent,showArrow:true,"data-ignore":"global-link-styling",isColourInTestVariant:isColourInTestVariant,children:buttonText})})};const SecondaryCtaButton=({cta,tracking,numArticles,countryCode,submitComponentEvent})=>{const url=(0,lib_tracking/* addRegionIdAndTrackingParamsToSupportUrl */.QP)(cta.baseUrl,tracking,numArticles,countryCode);return /*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsx)("div",{css:buttonMarginStyles,children:/*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsx)(EpicButton,{onClickAction:url,submitComponentEvent:submitComponentEvent,showArrow:true,priority:"secondary",children:cta.text})})};const ContributionsEpicButtons=({variant,tracking,countryCode,onOpenReminderClick,submitComponentEvent,isReminderActive,isSignedIn,showChoiceCards,threeTierChoiceCardSelectedProduct,amountsTestName,amountsVariantName,numArticles,variantOfChoiceCard,isColourInTestVariant})=>{const[hasBeenSeen,setNode]=(0,useIsInView/* useIsInView */.E)({debounce:true});const{secondaryCta,showReminderFields}=variant;(0,compat.useEffect)(()=>{if(hasBeenSeen&&submitComponentEvent){submitComponentEvent(ophan/* OPHAN_COMPONENT_EVENT_CTAS_VIEW */.CO);if(showReminderFields&&!(0,reminders/* hasSetReminder */.jW)()){submitComponentEvent((0,ophan/* getReminderViewEvent */.G0)(isSignedIn))}}},[hasBeenSeen,isSignedIn,showReminderFields,submitComponentEvent]);if(!variant.cta){return null}const getChoiceCardCta=cta=>{if(showChoiceCards&&countryCode==="US"){if(threeTierChoiceCardSelectedProduct==="OneOff"){if(variantOfChoiceCard==="US_CHECKOUT_THREE_TIER_CHOICE_CARDS"){return{text:cta.text,baseUrl:(0,lib_tracking/* addChoiceCardsParams */.Q7)("https://support.theguardian.com/contribute/checkout","ONE_OFF")}}return{text:cta.text,baseUrl:(0,lib_tracking/* addChoiceCardsOneTimeParams */.hy)(cta.baseUrl)}}const countryGroupId=(0,index_esm/* countryCodeToCountryGroupId */.B0)(countryCode);const contributionAmount=threeTierChoiceCardSelectedProduct==="Contribution"?threeTierChoiceCardAmounts/* threeTierChoiceCardAmounts */.n["Monthly"][countryGroupId].Contribution:undefined;const url=variantOfChoiceCard==="US_CHECKOUT_THREE_TIER_CHOICE_CARDS"?"https://support.theguardian.com/checkout":cta.baseUrl;return{text:cta.text,baseUrl:(0,lib_tracking/* addChoiceCardsProductParams */.R9)(url,threeTierChoiceCardSelectedProduct,"Monthly",contributionAmount)}}if(showChoiceCards&&variantOfChoiceCard==="THREE_TIER_CHOICE_CARDS"){if(threeTierChoiceCardSelectedProduct==="OneOff"){return{text:cta.text,baseUrl:"https://support.theguardian.com/contribute"}}return{text:cta.text,baseUrl:(0,lib_tracking/* addChoiceCardsProductParams */.R9)(cta.baseUrl,threeTierChoiceCardSelectedProduct,"Monthly")}}return cta};const getCta=cta=>showChoiceCards?getChoiceCardCta(cta):cta;const openReminder=()=>{if(submitComponentEvent){submitComponentEvent(ophan/* OPHAN_COMPONENT_EVENT_REMINDER_OPEN */.I_)}onOpenReminderClick()};const hasSupportCta=(0,lib_tracking/* isSupportUrl */.Tv)(variant.cta.baseUrl)||secondaryCta?.type===index_esm/* SecondaryCtaType */.bP.Custom&&(0,lib_tracking/* isSupportUrl */.Tv)(secondaryCta.cta.baseUrl);return /*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsx)("div",{ref:setNode,css:buttonWrapperStyles,"data-testid":"epic=buttons",children:!isReminderActive&&/*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsxs)(emotion_react_jsx_runtime_esm.Fragment,{children:[/*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsxs)(emotion_react_jsx_runtime_esm.Fragment,{children:[/*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsx)(PrimaryCtaButton,{cta:getCta(variant.cta),tracking:tracking,numArticles:numArticles,amountsTestName:amountsTestName,amountsVariantName:amountsVariantName,countryCode:countryCode,submitComponentEvent:submitComponentEvent,isColourInTestVariant:isColourInTestVariant}),secondaryCta?.type===index_esm/* SecondaryCtaType */.bP.Custom&&!!secondaryCta.cta.baseUrl&&!!secondaryCta.cta.text&&/*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsx)(SecondaryCtaButton,{cta:secondaryCta.cta,tracking:tracking,countryCode:countryCode,numArticles:numArticles,submitComponentEvent:submitComponentEvent})]}),secondaryCta?.type===index_esm/* SecondaryCtaType */.bP.ContributionsReminder&&showReminderFields&&!(0,reminders/* hasSetReminder */.jW)()&&/*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsx)("div",{css:buttonMarginStyles,children:/*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsx)(EpicButton,{onClickAction:openReminder,isTertiary:true,children:showReminderFields.reminderCta})}),hasSupportCta&&/*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsx)("img",{width:422,height:60,src:"https://assets.guim.co.uk/images/acquisitions/2db3a266287f452355b68d4240df8087/payment-methods.png",alt:"Accepted payment methods: Visa, Mastercard, American Express and PayPal",css:paymentImageStyles})]})})};
// EXTERNAL MODULE: ./src/components/marketing/hooks/useContributionsReminderSignup.ts
var useContributionsReminderSignup = __webpack_require__(18960);
// EXTERNAL MODULE: ../node_modules/.pnpm/@guardian+source@8.0.0_@emotion+react@11.11.3_@types+react@18.3.1_react@18.3.1_tslib@2.6.2_typescript@5.5.3/node_modules/@guardian/source/dist/react-components/__generated__/icons/SvgCross.js
var SvgCross = __webpack_require__(56607);
// EXTERNAL MODULE: ../node_modules/.pnpm/@guardian+source@8.0.0_@emotion+react@11.11.3_@types+react@18.3.1_react@18.3.1_tslib@2.6.2_typescript@5.5.3/node_modules/@guardian/source/dist/react-components/__generated__/icons/SvgCheckmark.js
var SvgCheckmark = __webpack_require__(31490);
// EXTERNAL MODULE: ../node_modules/.pnpm/@guardian+source-development-kitchen@12.0.0_@emotion+react@11.11.3_@guardian+libs@19.2.1_@gua_u2skz76xfmcpz6vecn5wtd5lna/node_modules/@guardian/source-development-kitchen/dist/react-components/lines/StraightLines.js
var StraightLines = __webpack_require__(13925);
// EXTERNAL MODULE: ./src/components/Hide.tsx
var Hide = __webpack_require__(22000);
;// ./src/components/marketing/epics/ctas/ContributionsEpicReminderSignedIn.tsx
const rootStyles=(0,emotion_react_esm.css)`
	position: relative;

	background-color: ${palette/* palette */.M.neutral[97]};

	* {
		box-sizing: border-box;
	}

	p {
		margin-top: 0;
		margin-bottom: 0;
	}
`;const lineWrapperStyles=(0,emotion_react_esm.css)`
	margin: ${space/* space */.x[3]}px auto;
`;const remindHeading=(0,emotion_react_esm.css)`
	${typography/* headlineBold20 */.aal};
	margin: 0 ${space/* space */.x[5]}px ${space/* space */.x[2]}px 0;
`;const successTextStyles=(0,emotion_react_esm.css)`
	margin: 0 auto ${space/* space */.x[2]}px;
	${typography/* article17 */.Ni};
`;const linkStyles=(0,emotion_react_esm.css)`
	color: ${palette/* palette */.M.neutral[7]};
`;const errorTextStyles=(0,emotion_react_esm.css)`
	${typography/* textSansBold15 */.yui};
	color: ${palette/* palette */.M.error[400]};
	font-style: italic;
	/* stylelint-disable-next-line declaration-no-important */
	margin-top: ${space/* space */.x[2]}px !important;
	margin-bottom: 0;
`;const closeButtonContainerStyles=(0,emotion_react_esm.css)`
	display: none;
	position: absolute;
	top: 20px;
	right: 0;

	${mq/* from */.HT.tablet} {
		display: block;
	}
`;const bodyCopyStyles=(0,emotion_react_esm.css)`
	${typography/* article17 */.Ni};
	${mq/* from */.HT.tablet} {
		margin-right: ${space/* space */.x[9]}px;
	}
`;const infoCopyStyles=(0,emotion_react_esm.css)`
	${typography/* textSans15 */.PSs};
	font-style: italic;
	/* stylelint-disable-next-line declaration-no-important */
	margin-top: ${space/* space */.x[2]}px !important;
`;const ctaContainerStyles=(0,emotion_react_esm.css)`
	display: flex;
	flex-direction: row;
	align-items: center;
	margin-top: ${space/* space */.x[4]}px;

	& > * + * {
		margin-left: ${space/* space */.x[6]}px;
	}
`;const ContributionsEpicReminderSignedIn=({reminderLabel,reminderStatus,onSetReminderClick,onCloseReminderClick})=>{const reminderDateWithPreposition=(0,reminders/* ensureHasPreposition */.J)(reminderLabel);return /*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsxs)("div",{css:rootStyles,children:[/*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsx)("div",{css:closeButtonContainerStyles,children:/*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsx)(Button/* Button */.$,{onClick:onCloseReminderClick,icon:/*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsx)(SvgCross/* SvgCross */.F,{}),priority:"subdued",size:"small",hideLabel:true,children:"Close"})}),/*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsx)("div",{css:lineWrapperStyles,children:/*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsx)(StraightLines/* StraightLines */.o,{})}),reminderStatus===reminders/* ReminderStatus */.l.Completed?/*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsxs)(emotion_react_jsx_runtime_esm.Fragment,{children:[/*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsx)("h4",{css:remindHeading,children:"Thank you! Your reminder is set."}),/*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsxs)("p",{css:successTextStyles,children:["We will be in touch to invite you to contribute. Look out for a message in your inbox"," ",reminderDateWithPreposition,". If you have any questions about contributing, please"," ",/*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsx)("a",{href:"mailto:contribution.support@theguardian.com",css:linkStyles,children:"contact us"}),"."]})]}):/*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsxs)(emotion_react_jsx_runtime_esm.Fragment,{children:[/*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsxs)("p",{css:bodyCopyStyles,children:["Show your support for the Guardian at a later date. To make this easier, set a reminder and we’ll email you"," ",reminderDateWithPreposition,"."]}),/*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsxs)("div",{css:ctaContainerStyles,children:[/*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsxs)("div",{children:[/*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsx)(Hide/* Hide */.L,{when:"above",breakpoint:"tablet",children:/*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsx)(Button/* Button */.$,{onClick:onSetReminderClick,disabled:reminderStatus===reminders/* ReminderStatus */.l.Submitting,children:"Set a reminder"})}),/*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsx)(Hide/* Hide */.L,{when:"below",breakpoint:"tablet",children:/*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsx)(Button/* Button */.$,{onClick:onSetReminderClick,icon:/*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsx)(SvgCheckmark/* SvgCheckmark */.Q,{}),iconSide:"left",disabled:reminderStatus===reminders/* ReminderStatus */.l.Submitting,children:"Set a reminder"})})]}),/*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsx)(Button/* Button */.$,{onClick:onCloseReminderClick,priority:"subdued",children:"Not now"})]}),reminderStatus===reminders/* ReminderStatus */.l.Error&&/*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsx)("p",{css:errorTextStyles,children:"Sorry we couldn't set a reminder for you this time. Please try again later."}),/*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsxs)("p",{css:infoCopyStyles,children:["We will send you a maximum of two emails"," ",reminderDateWithPreposition,". To find out what personal data we collect and how we use it, view our"," ",/*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsx)("a",{css:linkStyles,href:"https://www.theguardian.com/help/privacy-policy",target:"_blank",rel:"noopener noreferrer",children:"Privacy Policy"}),"."]})]})]})};
// EXTERNAL MODULE: ../node_modules/.pnpm/@guardian+source@8.0.0_@emotion+react@11.11.3_@types+react@18.3.1_react@18.3.1_tslib@2.6.2_typescript@5.5.3/node_modules/@guardian/source/dist/react-components/text-input/TextInput.js + 2 modules
var TextInput = __webpack_require__(32444);
// EXTERNAL MODULE: ./src/components/marketing/hooks/useContributionsReminderEmailForm.ts
var useContributionsReminderEmailForm = __webpack_require__(39716);
;// ./src/components/marketing/epics/ctas/ContributionsEpicReminderSignedOut.tsx
const ContributionsEpicReminderSignedOut_rootStyles=(0,emotion_react_esm.css)`
	position: relative;

	* {
		box-sizing: border-box;
	}
`;const closeButtonStyles=(0,emotion_react_esm.css)`
	width: 30px;
	height: 30px;
	cursor: pointer;
	position: absolute;
	top: 20px;
	right: 0;
	background: none;
	border: none;
	padding: 0;
`;const ContributionsEpicReminderSignedOut_lineWrapperStyles=(0,emotion_react_esm.css)`
	margin: ${space/* space */.x[3]}px auto;
`;const containerStyles=(0,emotion_react_esm.css)`
	padding: 0 ${space/* space */.x[1]}px;
`;const ContributionsEpicReminderSignedOut_remindHeading=(0,emotion_react_esm.css)`
	${typography/* headlineBold20 */.aal};
	margin: 0 ${space/* space */.x[5]}px ${space/* space */.x[2]}px 0;
`;const ContributionsEpicReminderSignedOut_successTextStyles=(0,emotion_react_esm.css)`
	margin: 0 auto ${space/* space */.x[2]}px;
	${typography/* article17 */.Ni};
`;const ContributionsEpicReminderSignedOut_linkStyles=(0,emotion_react_esm.css)`
	color: ${palette/* palette */.M.neutral[7]};
`;const formWrapper=(0,emotion_react_esm.css)`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: flex-start;

	${mq/* from */.HT.tablet} {
		flex-direction: row;
		align-items: flex-end;
		justify-content: flex-start;
	}
`;const inputWrapper=(0,emotion_react_esm.css)`
	width: 100%;
	margin-bottom: ${space/* space */.x[2]}px;
	flex-grow: 1;

	${mq/* from */.HT.tablet} {
		width: auto;
		margin-right: ${space/* space */.x[2]}px;
		margin-bottom: 0;
	}
`;const formTextStyles=(0,emotion_react_esm.css)`
	${typography/* textSans15 */.PSs};
	font-style: italic;
	margin-top: ${space/* space */.x[1]}px;
`;const ContributionsEpicReminderSignedOut_errorTextStyles=(0,emotion_react_esm.css)`
	${typography/* textSansBold15 */.yui};
	color: ${palette/* palette */.M.error[400]};
	font-style: italic;
	margin-top: ${space/* space */.x[1]}px;
	margin-bottom: 0;
`;const getCustomSubmitStyles=isDisabled=>{if(isDisabled){return (0,emotion_react_esm.css)`
			pointer-events: none;
			/* stylelint-disable-next-line declaration-no-important */
			color: ${palette/* palette */.M.neutral[60]} !important;
			/* stylelint-disable-next-line declaration-no-important */
			background-color: ${palette/* palette */.M.neutral[93]} !important;
			/* stylelint-disable-next-line declaration-no-important */
			border: 1px solid ${palette/* palette */.M.neutral[86]} !important;
		`}return undefined};const ContributionsEpicReminderSignedOut=({reminderLabel,reminderStatus,onSetReminderClick,onCloseReminderClick})=>{const{email,updateEmail,inputError,handleSubmit}=(0,useContributionsReminderEmailForm/* useContributionsReminderEmailForm */.p)();const reminderDateWithPreposition=(0,reminders/* ensureHasPreposition */.J)(reminderLabel);return /*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsxs)("div",{css:ContributionsEpicReminderSignedOut_rootStyles,children:[/*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsx)("button",{css:closeButtonStyles,onClick:()=>onCloseReminderClick(),children:/*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsx)(SvgCross/* SvgCross */.F,{})}),/*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsx)("div",{css:ContributionsEpicReminderSignedOut_lineWrapperStyles,children:/*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsx)(StraightLines/* StraightLines */.o,{})}),/*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsxs)("div",{css:containerStyles,children:[/*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsxs)("form",{onSubmit:handleSubmit(()=>onSetReminderClick(email)),children:[reminderStatus!==reminders/* ReminderStatus */.l.Completed&&/*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsxs)(emotion_react_jsx_runtime_esm.Fragment,{children:[/*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsxs)("h4",{css:ContributionsEpicReminderSignedOut_remindHeading,children:["Remind me ",reminderDateWithPreposition]}),/*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsxs)("div",{css:formWrapper,children:[/*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsx)("div",{css:inputWrapper,children:/*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsx)(TextInput/* TextInput */.k,{label:"Email address",error:inputError,value:email,onChange:updateEmail})}),/*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsx)(Button/* Button */.$,{iconSide:"right",icon:/*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsx)(SvgArrowRightStraight/* SvgArrowRightStraight */._,{}),type:"submit",disabled:reminderStatus===reminders/* ReminderStatus */.l.Submitting,cssOverrides:getCustomSubmitStyles(reminderStatus===reminders/* ReminderStatus */.l.Submitting),children:"Set a reminder"})]})]}),reminderStatus===reminders/* ReminderStatus */.l.Error&&/*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsx)("p",{css:ContributionsEpicReminderSignedOut_errorTextStyles,children:"Sorry we couldn't set a reminder for you this time. Please try again later."})]}),reminderStatus!==reminders/* ReminderStatus */.l.Completed&&/*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsxs)("p",{css:formTextStyles,children:["We will send you a maximum of two emails"," ",reminderDateWithPreposition,". To find out what personal data we collect and how we use it, view our"," ",/*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsx)("a",{css:ContributionsEpicReminderSignedOut_linkStyles,href:"https://www.theguardian.com/help/privacy-policy",target:"_blank",rel:"noopener noreferrer",children:"Privacy Policy"}),"."]}),reminderStatus===reminders/* ReminderStatus */.l.Completed&&/*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsxs)(emotion_react_jsx_runtime_esm.Fragment,{children:[/*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsx)("h4",{css:ContributionsEpicReminderSignedOut_remindHeading,children:"Thank you! Your reminder is set."}),/*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsxs)("p",{css:ContributionsEpicReminderSignedOut_successTextStyles,children:["We will be in touch to invite you to contribute. Look out for a message in your inbox"," ",reminderDateWithPreposition,". If you have any questions about contributing, please"," ",/*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsx)("a",{href:"mailto:contribution.support@theguardian.com",css:ContributionsEpicReminderSignedOut_linkStyles,children:"contact us"}),"."]})]})]})]})};
;// ./src/components/marketing/epics/ctas/ContributionsEpicReminder.tsx
const ContributionsEpicReminder=({initialEmailAddress,reminderFields,onCloseReminderClick,submitComponentEvent})=>{const{reminderStatus,createReminder}=(0,useContributionsReminderSignup/* useContributionsReminderSignup */.n)(reminderFields.reminderPeriod,"WEB","EPIC","PRE",reminderFields.reminderOption);const onSetReminderClick=email=>{if(submitComponentEvent){submitComponentEvent(ophan/* OPHAN_COMPONENT_EVENT_REMINDER_SET */._$)}createReminder(email)};const closeReminder=()=>{if(submitComponentEvent){submitComponentEvent(ophan/* OPHAN_COMPONENT_EVENT_REMINDER_CLOSE */.ad)}onCloseReminderClick()};return initialEmailAddress?/*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsx)(ContributionsEpicReminderSignedIn,{reminderLabel:reminderFields.reminderLabel,reminderStatus:reminderStatus,onSetReminderClick:()=>onSetReminderClick(initialEmailAddress),onCloseReminderClick:closeReminder}):/*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsx)(ContributionsEpicReminderSignedOut,{reminderLabel:reminderFields.reminderLabel,reminderStatus:reminderStatus,onSetReminderClick:onSetReminderClick,onCloseReminderClick:closeReminder})};
;// ./src/components/marketing/epics/ctas/ContributionsEpicCtasContainer.tsx
const ContributionsEpicCtasContainer=({variant,countryCode,articleCounts,tracking,submitComponentEvent,onReminderOpen,fetchEmail,amountsTestName,amountsVariantName,isColourInTestVariant})=>{const[fetchedEmail,setFetchedEmail]=(0,compat.useState)(undefined);const[isReminderActive,setIsReminderActive]=(0,compat.useState)(false);const showReminderFields=variant.showReminderFields;const onCloseReminderClick=()=>{setIsReminderActive(false)};const isNonVatCompliantCountry=variant.choiceCardAmounts?.testName==="VAT_COMPLIANCE";const showChoiceCards=variant.showChoiceCards&&!isNonVatCompliantCountry;const[threeTierChoiceCardSelectedProduct,setThreeTierChoiceCardSelectedProduct]=(0,compat.useState)("SupporterPlus");const showUSSupportCheckout=showChoiceCards&&variant.name.includes("US_CHECKOUT_PAGE");const hasSupporterPlusPromoCode=variant.cta?.baseUrl.includes("BLACK_FRIDAY_DISCOUNT_2024")??false;const variantOfChoiceCard=countryCode==="US"&&showUSSupportCheckout?"US_CHECKOUT_THREE_TIER_CHOICE_CARDS":countryCode==="US"?"US_THREE_TIER_CHOICE_CARDS":"THREE_TIER_CHOICE_CARDS";return /*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsxs)(emotion_react_jsx_runtime_esm.Fragment,{children:[showChoiceCards&&/*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsx)(ThreeTierChoiceCards,{countryCode:countryCode,selectedProduct:threeTierChoiceCardSelectedProduct,setSelectedProduct:setThreeTierChoiceCardSelectedProduct,variantOfChoiceCard:variantOfChoiceCard,supporterPlusDiscount:hasSupporterPlusPromoCode?.5:undefined}),/*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsx)(ContributionsEpicButtons,{variant:variant,tracking:tracking,countryCode:countryCode,onOpenReminderClick:()=>{const buttonCopyAsString=showReminderFields?.reminderCta.toLowerCase().replace(/\s/g,"-");if(onReminderOpen){onReminderOpen({buttonCopyAsString})}if(fetchEmail){void fetchEmail().then(resolvedEmail=>{if(resolvedEmail){setFetchedEmail(resolvedEmail)}setIsReminderActive(true)})}else{setIsReminderActive(true)}},submitComponentEvent:submitComponentEvent,isReminderActive:isReminderActive,isSignedIn:Boolean(fetchedEmail),showChoiceCards:showChoiceCards,threeTierChoiceCardSelectedProduct:threeTierChoiceCardSelectedProduct,amountsTestName:amountsTestName,amountsVariantName:amountsVariantName,numArticles:articleCounts.for52Weeks,variantOfChoiceCard:variantOfChoiceCard,isColourInTestVariant:isColourInTestVariant}),isReminderActive&&showReminderFields&&/*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsx)(ContributionsEpicReminder,{initialEmailAddress:fetchedEmail,reminderFields:showReminderFields,onCloseReminderClick:onCloseReminderClick,submitComponentEvent:submitComponentEvent})]})};

/***/ }),

/***/ 57780:
/*!*******************************************************!*\
  !*** ./src/components/marketing/epics/utils/ophan.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CE: () => (/* binding */ OPHAN_COMPONENT_ARTICLE_COUNT_OPT_IN),
/* harmony export */   CO: () => (/* binding */ OPHAN_COMPONENT_EVENT_CTAS_VIEW),
/* harmony export */   Ek: () => (/* binding */ OPHAN_COMPONENT_ARTICLE_COUNT_OPT_OUT_OPEN),
/* harmony export */   G0: () => (/* binding */ getReminderViewEvent),
/* harmony export */   H4: () => (/* binding */ OPHAN_COMPONENT_ARTICLE_COUNT_STAY_OUT),
/* harmony export */   I_: () => (/* binding */ OPHAN_COMPONENT_EVENT_REMINDER_OPEN),
/* harmony export */   P2: () => (/* binding */ OPHAN_COMPONENT_SIGN_IN),
/* harmony export */   WP: () => (/* binding */ OPHAN_COMPONENT_ARTICLE_COUNT_STAY_IN),
/* harmony export */   _$: () => (/* binding */ OPHAN_COMPONENT_EVENT_REMINDER_SET),
/* harmony export */   _v: () => (/* binding */ OPHAN_COMPONENT_EVENT_PRIMARY_CTA),
/* harmony export */   ad: () => (/* binding */ OPHAN_COMPONENT_EVENT_REMINDER_CLOSE),
/* harmony export */   sk: () => (/* binding */ OPHAN_COMPONENT_EVENT_SECONDARY_CTA),
/* harmony export */   uV: () => (/* binding */ OPHAN_COMPONENT_ARTICLE_COUNT_OPT_OUT_CLOSE),
/* harmony export */   zX: () => (/* binding */ OPHAN_COMPONENT_ARTICLE_COUNT_OPT_OUT)
/* harmony export */ });
const OPHAN_COMPONENT_ID_CTAS_VIEW="contributions-epic-ctas-view";const OPHAN_COMPONENT_ID_PRIMARY_CTA="contributions-epic-primary-cta";const OPHAN_COMPONENT_ID_SECONDARY_CTA="contributions-epic-secondary-cta";const OPHAN_COMPONENT_ID_REMINDER_VIEW="contributions-epic-reminder-view";const OPHAN_COMPONENT_ID_REMINDER_OPEN="contributions-epic-reminder-open";const OPHAN_COMPONENT_ID_REMINDER_SET="contributions-epic-reminder-set";const OPHAN_COMPONENT_ID_REMINDER_CLOSE="contributions-epic-reminder-close";const OPHAN_COMPONENT_ID_ARTICLE_COUNT_OPT_OUT_OPEN="contributions-epic-article-count-open";const OPHAN_COMPONENT_ID_ARTICLE_COUNT_OPT_OUT_CLOSE="contributions-epic-article-count-close";const OPHAN_COMPONENT_ID_ARTICLE_COUNT_STAY_IN="contributions-epic-article-count-stay-on";const OPHAN_COMPONENT_ID_ARTICLE_COUNT_OPT_OUT="contributions-epic-article-count-opt-out";const OPHAN_COMPONENT_ID_ARTICLE_COUNT_STAY_OUT="contributions-epic-article-count-stay-out";const OPHAN_COMPONENT_ID_ARTICLE_COUNT_OPT_IN="contributions-epic-article-count-opt-in";const OPHAN_COMPONENT_ID_SIGN_IN="contributions-epic-sign-in";const getReminderViewEvent=isSignedIn=>({component:{componentType:"ACQUISITIONS_OTHER",id:OPHAN_COMPONENT_ID_REMINDER_VIEW},action:"VIEW",value:isSignedIn.toString()});const OPHAN_COMPONENT_EVENT_CTAS_VIEW={component:{componentType:"ACQUISITIONS_OTHER",id:OPHAN_COMPONENT_ID_CTAS_VIEW},action:"VIEW"};const OPHAN_COMPONENT_EVENT_PRIMARY_CTA={component:{componentType:"ACQUISITIONS_EPIC",id:OPHAN_COMPONENT_ID_PRIMARY_CTA},action:"CLICK"};const OPHAN_COMPONENT_EVENT_SECONDARY_CTA={component:{componentType:"ACQUISITIONS_OTHER",id:OPHAN_COMPONENT_ID_SECONDARY_CTA},action:"CLICK"};const OPHAN_COMPONENT_EVENT_REMINDER_OPEN={component:{componentType:"ACQUISITIONS_OTHER",id:OPHAN_COMPONENT_ID_REMINDER_OPEN},action:"CLICK"};const OPHAN_COMPONENT_EVENT_REMINDER_SET={component:{componentType:"ACQUISITIONS_OTHER",id:OPHAN_COMPONENT_ID_REMINDER_SET},action:"CLICK"};const OPHAN_COMPONENT_EVENT_REMINDER_CLOSE={component:{componentType:"ACQUISITIONS_OTHER",id:OPHAN_COMPONENT_ID_REMINDER_CLOSE},action:"CLICK"};const OPHAN_COMPONENT_ARTICLE_COUNT_OPT_OUT_OPEN={component:{componentType:"ACQUISITIONS_OTHER",id:OPHAN_COMPONENT_ID_ARTICLE_COUNT_OPT_OUT_OPEN},action:"CLICK"};const OPHAN_COMPONENT_ARTICLE_COUNT_OPT_OUT_CLOSE={component:{componentType:"ACQUISITIONS_OTHER",id:OPHAN_COMPONENT_ID_ARTICLE_COUNT_OPT_OUT_CLOSE},action:"CLICK"};const OPHAN_COMPONENT_ARTICLE_COUNT_STAY_IN={component:{componentType:"ACQUISITIONS_OTHER",id:OPHAN_COMPONENT_ID_ARTICLE_COUNT_STAY_IN},action:"CLICK"};const OPHAN_COMPONENT_ARTICLE_COUNT_OPT_OUT={component:{componentType:"ACQUISITIONS_OTHER",id:OPHAN_COMPONENT_ID_ARTICLE_COUNT_OPT_OUT},action:"CLICK"};const OPHAN_COMPONENT_ARTICLE_COUNT_STAY_OUT={component:{componentType:"ACQUISITIONS_OTHER",id:OPHAN_COMPONENT_ID_ARTICLE_COUNT_STAY_OUT},action:"CLICK"};const OPHAN_COMPONENT_ARTICLE_COUNT_OPT_IN={component:{componentType:"ACQUISITIONS_OTHER",id:OPHAN_COMPONENT_ID_ARTICLE_COUNT_OPT_IN},action:"CLICK"};const OPHAN_COMPONENT_SIGN_IN={component:{componentType:"ACQUISITIONS_OTHER",id:OPHAN_COMPONENT_ID_SIGN_IN},action:"CLICK"};

/***/ }),

/***/ 39716:
/*!*****************************************************************************!*\
  !*** ./src/components/marketing/hooks/useContributionsReminderEmailForm.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   p: () => (/* binding */ useContributionsReminderEmailForm)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 43532);
/* harmony import */ var _lib_reminders__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/reminders */ 91210);
function useContributionsReminderEmailForm(){const[isDirty,setIsDirty]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);const[email,setEmail]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");const updateEmail=e=>{setEmail(e.target.value);if(isDirty){setIsDirty(false)}};const isEmpty=email.trim().length===0;const isValid=(0,_lib_reminders__WEBPACK_IMPORTED_MODULE_1__/* .isValidEmail */ .B9)(email)&&(0,_lib_reminders__WEBPACK_IMPORTED_MODULE_1__/* .emailIsShortEnoughForIdentity */ .as)(email);let inputError;if(isDirty&&isEmpty){inputError="Please enter your email address"}else if(isDirty&&!isValid){inputError="Please enter a valid email address"}const handleSubmit=onSubmit=>{const handler=e=>{e.preventDefault();if(isValid){onSubmit()}else{setIsDirty(true)}};return handler};return{email,inputError,updateEmail,handleSubmit}}

/***/ }),

/***/ 18960:
/*!**************************************************************************!*\
  !*** ./src/components/marketing/hooks/useContributionsReminderSignup.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   n: () => (/* binding */ useContributionsReminderSignup)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 43532);
/* harmony import */ var _lib_reminders__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/reminders */ 91210);
const CREATE_ONE_OFF_REMINDER_ENDPOINT="https://support.theguardian.com/reminders/create/one-off";function useContributionsReminderSignup(reminderPeriod,reminderPlatform,reminderComponent,reminderStage,reminderOption){const[reminderStatus,setReminderStatus]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(_lib_reminders__WEBPACK_IMPORTED_MODULE_1__/* .ReminderStatus */ .l.Editing);const createReminder=email=>{const reminderSignupData={email,reminderPeriod,reminderPlatform,reminderComponent,reminderStage,reminderOption};setReminderStatus(_lib_reminders__WEBPACK_IMPORTED_MODULE_1__/* .ReminderStatus */ .l.Submitting);fetch(CREATE_ONE_OFF_REMINDER_ENDPOINT,{body:JSON.stringify(reminderSignupData),method:"POST",headers:{"Content-Type":"application/json"}}).then(response=>{if(!response.ok){setReminderStatus(_lib_reminders__WEBPACK_IMPORTED_MODULE_1__/* .ReminderStatus */ .l.Error)}else{setReminderStatus(_lib_reminders__WEBPACK_IMPORTED_MODULE_1__/* .ReminderStatus */ .l.Completed);(0,_lib_reminders__WEBPACK_IMPORTED_MODULE_1__/* .addContributionReminderCookie */ .Wt)(reminderPeriod)}}).catch(()=>setReminderStatus(_lib_reminders__WEBPACK_IMPORTED_MODULE_1__/* .ReminderStatus */ .l.Error))};return{reminderStatus,createReminder}}

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

/***/ 91210:
/*!***************************************************!*\
  !*** ./src/components/marketing/lib/reminders.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   B9: () => (/* binding */ isValidEmail),
/* harmony export */   J: () => (/* binding */ ensureHasPreposition),
/* harmony export */   Wt: () => (/* binding */ addContributionReminderCookie),
/* harmony export */   as: () => (/* binding */ emailIsShortEnoughForIdentity),
/* harmony export */   jW: () => (/* binding */ hasSetReminder),
/* harmony export */   l: () => (/* binding */ ReminderStatus)
/* harmony export */ });
/* harmony import */ var _guardian_libs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @guardian/libs */ 11735);
/* harmony import */ var _guardian_libs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @guardian/libs */ 18411);
var ReminderStatus=/*#__PURE__*/function(ReminderStatus){ReminderStatus["Editing"]="Editing";ReminderStatus["Submitting"]="Submitting";ReminderStatus["Error"]="Error";ReminderStatus["Completed"]="Completed";return ReminderStatus}({});const dateDiff=(start,end)=>{const twentyFourHours=864e5;return Math.round((end.valueOf()-start.valueOf())/twentyFourHours)};const addContributionReminderCookie=reminderDateString=>{const today=new Date;const reminderDate=new Date(Date.parse(reminderDateString));(0,_guardian_libs__WEBPACK_IMPORTED_MODULE_0__/* .setCookie */ .T)({name:"gu_epic_contribution_reminder",value:"1",daysToLive:dateDiff(today,reminderDate)})};const hasSetReminder=()=>{return!!(0,_guardian_libs__WEBPACK_IMPORTED_MODULE_1__/* .getCookie */ .R)({name:"gu_epic_contribution_reminder"})};const PREPOSITION_REGEX=/^(on|in)/;const containsPreposition=text=>PREPOSITION_REGEX.test(text);const addPreposition=text=>"in "+text;const ensureHasPreposition=text=>containsPreposition(text)?text:addPreposition(text);const isValidEmail=email=>{const re=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return re.test(String(email).toLowerCase())};const emailIsShortEnoughForIdentity=email=>{return email.length<=100};

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

/***/ }),

/***/ 54288:
/*!*************************************************!*\
  !*** ./src/components/marketing/lib/viewLog.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   B: () => (/* binding */ logEpicView)
/* harmony export */ });
/* unused harmony export getEpicViewLog */
/* harmony import */ var _guardian_libs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @guardian/libs */ 61082);
const viewLogKey="gu.contributions.views";const maxLogEntries=50;const getEpicViewLog=()=>{const item=_guardian_libs__WEBPACK_IMPORTED_MODULE_0__/* .storage */ .I.local.get(viewLogKey);if(Array.isArray(item)){return item}return undefined};const logEpicView=testId=>{const viewLog=getEpicViewLog()??[];const newView={date:new Date().getTime(),testId};const newValue=[...viewLog,newView].slice(-maxLogEntries);_guardian_libs__WEBPACK_IMPORTED_MODULE_0__/* .storage */ .I.local.set(viewLogKey,newValue)};

/***/ })

};
;
//# sourceMappingURL=4487.js.map