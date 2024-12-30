"use strict";
exports.id = 5550;
exports.ids = [5550];
exports.modules = {

/***/ 15550:
/*!*********************************************************************************************!*\
  !*** ./src/components/marketing/banners/designableBanner/DesignableBanner.tsx + 14 modules ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  DesignableBanner: () => (/* binding */ validated),
  DesignableBannerUnvalidated: () => (/* binding */ unvalidated)
});

// EXTERNAL MODULE: ../node_modules/.pnpm/@emotion+react@11.11.3_@types+react@18.3.1_react@18.3.1/node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.esm.js + 2 modules
var emotion_react_jsx_runtime_esm = __webpack_require__(5743);
// EXTERNAL MODULE: ../node_modules/.pnpm/@emotion+react@11.11.3_@types+react@18.3.1_react@18.3.1/node_modules/@emotion/react/dist/emotion-react.esm.js
var emotion_react_esm = __webpack_require__(43102);
// EXTERNAL MODULE: ../node_modules/.pnpm/@guardian+source@8.0.0_@emotion+react@11.11.3_@types+react@18.3.1_react@18.3.1_tslib@2.6.2_typescript@5.5.3/node_modules/@guardian/source/dist/foundations/mq/mq.js
var mq = __webpack_require__(99923);
// EXTERNAL MODULE: ../node_modules/.pnpm/@guardian+source@8.0.0_@emotion+react@11.11.3_@types+react@18.3.1_react@18.3.1_tslib@2.6.2_typescript@5.5.3/node_modules/@guardian/source/dist/foundations/__deprecated__/colour/palette.js
var palette = __webpack_require__(46080);
// EXTERNAL MODULE: ../node_modules/.pnpm/@guardian+source@8.0.0_@emotion+react@11.11.3_@types+react@18.3.1_react@18.3.1_tslib@2.6.2_typescript@5.5.3/node_modules/@guardian/source/dist/foundations/__generated__/space.js
var space = __webpack_require__(96378);
// EXTERNAL MODULE: ../node_modules/.pnpm/@guardian+source@8.0.0_@emotion+react@11.11.3_@types+react@18.3.1_react@18.3.1_tslib@2.6.2_typescript@5.5.3/node_modules/@guardian/source/dist/foundations/__generated__/typography.js
var typography = __webpack_require__(7351);
// EXTERNAL MODULE: ../node_modules/.pnpm/@guardian+source@8.0.0_@emotion+react@11.11.3_@types+react@18.3.1_react@18.3.1_tslib@2.6.2_typescript@5.5.3/node_modules/@guardian/source/dist/react-components/brand/SvgGuardianLogo.js
var SvgGuardianLogo = __webpack_require__(99134);
// EXTERNAL MODULE: ../node_modules/.pnpm/@guardian+source@8.0.0_@emotion+react@11.11.3_@types+react@18.3.1_react@18.3.1_tslib@2.6.2_typescript@5.5.3/node_modules/@guardian/source/dist/react-components/button/Button.js
var Button = __webpack_require__(27123);
// EXTERNAL MODULE: ../node_modules/.pnpm/@guardian+source-development-kitchen@12.0.0_@emotion+react@11.11.3_@guardian+libs@19.2.1_@gua_u2skz76xfmcpz6vecn5wtd5lna/node_modules/@guardian/source-development-kitchen/dist/react-components/ticker/Ticker.js + 2 modules
var Ticker = __webpack_require__(11596);
// EXTERNAL MODULE: ../node_modules/.pnpm/@guardian+support-dotcom-components@3.2.0_@guardian+libs@19.2.1_zod@3.22.4/node_modules/@guardian/support-dotcom-components/dist/index.esm.js + 1 modules
var index_esm = __webpack_require__(29995);
// EXTERNAL MODULE: ../node_modules/.pnpm/preact@10.15.1/node_modules/preact/compat/dist/compat.mjs + 1 modules
var compat = __webpack_require__(43532);
// EXTERNAL MODULE: ./src/lib/useMatchMedia.ts
var useMatchMedia = __webpack_require__(54465);
// EXTERNAL MODULE: ./src/components/marketing/hooks/useChoiceCards.ts
var useChoiceCards = __webpack_require__(74591);
;// ./src/components/marketing/hooks/useReminder.ts
const useReminder=reminderTracking=>{const[isReminderActive,setIsReminderActive]=(0,compat.useState)(false);const onReminderCtaClick=()=>{reminderTracking.onReminderCtaClick();setIsReminderActive(!isReminderActive)};const mobileReminderRef=(0,compat.useRef)(null);(0,compat.useEffect)(()=>{if(mobileReminderRef.current&&isReminderActive){mobileReminderRef.current.scrollIntoView({behavior:"smooth"})}},[isReminderActive]);return{isReminderActive,onReminderCtaClick,mobileReminderRef}};
// EXTERNAL MODULE: ./src/components/marketing/banners/common/BannerWrapper.tsx + 3 modules
var BannerWrapper = __webpack_require__(49818);
// EXTERNAL MODULE: ./src/components/marketing/banners/designableBanner/components/choiceCards/ChoiceCards.tsx + 3 modules
var ChoiceCards = __webpack_require__(11800);
// EXTERNAL MODULE: ../node_modules/.pnpm/@guardian+source@8.0.0_@emotion+react@11.11.3_@types+react@18.3.1_react@18.3.1_tslib@2.6.2_typescript@5.5.3/node_modules/@guardian/source/dist/react-components/__generated__/icons/SvgCross.js
var SvgCross = __webpack_require__(56607);
// EXTERNAL MODULE: ./src/components/marketing/lib/articleCountOptOut.ts
var articleCountOptOut = __webpack_require__(53935);
// EXTERNAL MODULE: ./src/components/marketing/banners/designableBanner/styles/buttonStyles.ts
var buttonStyles = __webpack_require__(21707);
;// ./src/components/marketing/banners/designableBanner/components/DesignableBannerArticleCountOptOut.tsx
const DesignableBannerArticleCountOptOut=({numArticles,nextWord,settings})=>{const[isOpen,setIsOpen]=(0,compat.useState)(false);const[hasOptedOut,setHasOptedOut]=(0,compat.useState)(false);const onOptOut=()=>{(0,articleCountOptOut/* addArticleCountOptOutCookie */.K4)();(0,articleCountOptOut/* removeArticleCountFromLocalStorage */.wV)();setHasOptedOut(true)};const onOpen=()=>{setIsOpen(true)};const onClose=()=>{setIsOpen(false)};const onToggle=()=>isOpen?onClose():onOpen();return /*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsxs)("div",{css:styles.optOutContainer,children:[/*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsx)("button",{css:styles.articleCountButton,onClick:onToggle,children:`${numArticles}${nextWord?nextWord:""}`}),isOpen&&/*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsx)("div",{css:styles.overlayContainer,children:/*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsx)(Overlay,{hasOptedOut:hasOptedOut,onOptOut:onOptOut,onClose:onClose,settings:settings})})]})};const Overlay=({hasOptedOut,onClose,onOptOut,settings})=>{return /*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsxs)("div",{css:overlayStyles.overlayContainer(settings.containerSettings.backgroundColour,settings.articleCountTextColour),children:[/*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsxs)("div",{css:overlayStyles.overlayHeader,children:[/*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsx)("div",{css:overlayStyles.overlayHeaderText,children:hasOptedOut?"You've opted out":"What's this?"}),/*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsx)(Button/* Button */.$,{onClick:onClose,icon:/*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsx)(SvgCross/* SvgCross */.F,{}),hideLabel:true,size:"xsmall",priority:"tertiary",cssOverrides:(0,buttonStyles/* buttonStyles */.V)(settings.closeButtonSettings),children:"Close"})]}),/*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsx)("div",{css:overlayStyles.overlayBody,children:hasOptedOut?"Starting from your next page view, we won't count the articles you read or show you this message for three months.":"We would like to remind you how many Guardian articles you’ve enjoyed on this device. Can we continue showing you this?"}),!hasOptedOut&&/*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsxs)("div",{css:overlayStyles.overlayCtaContainer,children:[/*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsx)(Button/* Button */.$,{onClick:onClose,priority:"primary",size:"xsmall",cssOverrides:(0,buttonStyles/* buttonStyles */.V)(settings.primaryCtaSettings),children:"Yes, that's OK"}),/*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsx)(Button/* Button */.$,{onClick:onOptOut,priority:"tertiary",size:"xsmall",cssOverrides:(0,buttonStyles/* buttonStyles */.V)(settings.secondaryCtaSettings),children:"No, opt me out"})]}),/*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsx)("div",{css:overlayStyles.overlayNote(settings.articleCountTextColour),children:hasOptedOut?/*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsxs)("span",{children:["If you have any questions, please"," ",/*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsx)("a",{href:"https://www.theguardian.com/help/contact-us",children:"contact us."})]}):"Please note that opting out is a permanent action and can't be reversed"})]})};const styles={optOutContainer:(0,emotion_react_esm.css)`
		display: inline-block;
	`,articleCountButton:(0,emotion_react_esm.css)`
		background: none;
		border: none;
		padding: 0;
		cursor: pointer;
		border-bottom: 1px solid;
		/* stylelint-disable property-disallowed-list */
		font-family: inherit;
		font-size: inherit;
		font-weight: inherit;
		font-style: inherit;
		color: inherit;
	`,overlayContainer:(0,emotion_react_esm.css)`
		position: absolute;
		z-index: 100;
		top: 0px;
		left: 0px;
		display: block;

		${mq/* from */.HT.tablet} {
			top: 10px;
			left: 10px;
			width: 450px;
		}
	`};const overlayStyles={overlayContainer:(backgroundColour,textColour=palette/* neutral */.SY[0])=>(0,emotion_react_esm.css)`
		${typography/* textSans17 */.NA0}
		padding: ${space/* space */.x[2]}px;
		background-color: ${backgroundColour};
		border: 1px solid ${textColour};
		box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
		color: ${textColour};
	`,overlayHeader:(0,emotion_react_esm.css)`
		display: flex;
		align-items: center;
		justify-content: space-between;
	`,overlayHeaderText:(0,emotion_react_esm.css)`
		${typography/* textSansBold17 */.keT};
	`,overlayBody:(0,emotion_react_esm.css)`
		margin-top: ${space/* space */.x[1]}px;
		${typography/* textSans15 */.PSs};
	`,overlayCtaContainer:(0,emotion_react_esm.css)`
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
	`,overlayNote:(textColour=palette/* neutral */.SY[0])=>(0,emotion_react_esm.css)`
		margin-top: ${space/* space */.x[2]}px;
		${typography/* textSans14 */.WuG}
		font-style: italic;

		a {
			/* stylelint-disable-next-line declaration-no-important */
			color: ${textColour} !important;
			/* stylelint-disable-next-line declaration-no-important */
			text-decoration: underline !important;
		}
	`};
;// ./src/components/marketing/banners/designableBanner/components/CustomArticleCountCopy.tsx
const CustomArticleCountCopy_styles={container:(0,emotion_react_esm.css)`
		${typography/* headlineBold15 */.qs0}
		margin: 0 0 ${space/* space */.x[1]}px;

		${mq/* from */.HT.tablet} {
			${typography/* headlineBold17 */.ccz}
		}
	`};function CustomArticleCountCopy({copy,numArticles,settings}){const[copyHead,copyTail]=copy.split("%%ARTICLE_COUNT%%");const[nextWord,...rest]=(copyTail??"").trim().split(" ");return /*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsxs)("p",{css:CustomArticleCountCopy_styles.container,children:[copyHead," ",/*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsx)(DesignableBannerArticleCountOptOut,{numArticles:numArticles,nextWord:` ${nextWord}`,settings:settings})," ",rest.join(" ")]})}
;// ./src/components/marketing/banners/designableBanner/components/DesignableBannerArticleCount.tsx
const containsArticleCountTemplate=copy=>copy.includes("%%ARTICLE_COUNT%%");function DesignableBannerArticleCount({copy,numArticles,settings}){if(copy&&containsArticleCountTemplate(copy)){return /*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsx)(CustomArticleCountCopy,{numArticles:numArticles,copy:copy,settings:settings})}else if(numArticles>=50){return /*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsxs)("div",{css:DesignableBannerArticleCount_styles.container(settings.articleCountTextColour),children:["Congratulations on being one of our top readers globally – you've read"," ",/*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsx)(DesignableBannerArticleCountOptOut,{numArticles:numArticles,nextWord:" articles",settings:settings})," ","in the last year"]})}else{return /*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsxs)("div",{css:DesignableBannerArticleCount_styles.container(settings.articleCountTextColour),children:["You've read"," ",/*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsx)(DesignableBannerArticleCountOptOut,{numArticles:numArticles,nextWord:" articles",settings:settings})," ","in the last year"]})}}const DesignableBannerArticleCount_styles={container:(textColor="inherit")=>(0,emotion_react_esm.css)`
		margin: 0;
		color: ${textColor};
		${typography/* headlineBold15 */.qs0}
		${mq/* from */.HT.desktop} {
			${typography/* headlineBold17 */.ccz}
		}
	`};
;// ./src/components/marketing/banners/designableBanner/components/BannerText.tsx
const BannerText_styles={paragraphs:(0,emotion_react_esm.css)`
		> :first-child {
			margin-top: 0;
		}
		> :last-child {
			margin-bottom: 0;
		}
	`};const createBannerBodyCopy=(paragraphs,highlightedText,renderStyles)=>{const paragraphsToProcess=Array.isArray(paragraphs)?paragraphs:[paragraphs];const numberOfNonFinalParagraphs=paragraphsToProcess.length-1;if(numberOfNonFinalParagraphs<0){return /*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsx)("div",{css:BannerText_styles.paragraphs,children:highlightedText&&/*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsx)("p",{children:/*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsx)("span",{css:renderStyles.highlightedText,children:highlightedText})})})}return /*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsx)("div",{css:BannerText_styles.paragraphs,children:paragraphsToProcess.map((p,index)=>{if(index<numberOfNonFinalParagraphs){return /*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsx)("p",{children:p},index)}return /*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsxs)("p",{children:[p," ",highlightedText&&/*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsx)("span",{css:renderStyles.highlightedText,children:highlightedText})]},index)})})};
;// ./src/components/marketing/banners/designableBanner/components/DesignableBannerBody.tsx
function DesignableBannerBody({mainContent,mobileContent,highlightedTextSettings}){const styles=getStyles(highlightedTextSettings);const isTabletOrAbove=(0,useMatchMedia/* useMatchMedia */.N)((0,useMatchMedia/* removeMediaRulePrefix */.$)(mq/* from */.HT.tablet));return /*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsx)("div",{css:styles.container,children:isTabletOrAbove?createBannerBodyCopy(mainContent.paragraphs,mainContent.highlightedText,styles):createBannerBodyCopy(mobileContent.paragraphs,mobileContent.highlightedText,styles)})}const getStyles=settings=>({container:(0,emotion_react_esm.css)`
		p {
			margin: 0 0 0.5em 0;
		}
		${typography/* textEgyptian15 */.nD4};
		${mq/* from */.HT.desktop} {
			${typography/* textEgyptian17 */.BTt};
		}
	`,highlightedText:(0,emotion_react_esm.css)`
		display: inline;
		color: ${settings.textColour};

		${settings.highlightColour?`
            background: ${settings.highlightColour};
            box-shadow: 2px 0 0 ${settings.highlightColour}, -2px 0 0 ${settings.highlightColour};
            box-decoration-break: clone;
        `:""}

		${typography/* textEgyptianBold15 */.ahl};
		${mq/* from */.HT.desktop} {
			${typography/* textEgyptianBold17 */._UO};
		}
	`});
;// ./src/components/marketing/banners/designableBanner/components/DesignableBannerCloseButton.tsx
function DesignableBannerCloseButton({onCloseClick,settings,styleOverides}){return /*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsx)("div",{css:(0,emotion_react_esm.css)`
				${DesignableBannerCloseButton_styles.container} ${styleOverides??""}
			`,children:/*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsx)(Button/* Button */.$,{onClick:onCloseClick,cssOverrides:(0,buttonStyles/* buttonStyles */.V)(settings,DesignableBannerCloseButton_styles.closeButtonOverrides),icon:/*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsx)(SvgCross/* SvgCross */.F,{}),size:"small",hideLabel:true,children:"Close"})})}const DesignableBannerCloseButton_styles={container:(0,emotion_react_esm.css)`
		display: flex;
		justify-self: end;
		z-index: 100;
	`,closeButtonOverrides:(0,emotion_react_esm.css)`
		height: 40px;
		min-height: 40px;
		width: 40px;
		min-width: 40px;
	`};
// EXTERNAL MODULE: ../node_modules/.pnpm/@guardian+source@8.0.0_@emotion+react@11.11.3_@types+react@18.3.1_react@18.3.1_tslib@2.6.2_typescript@5.5.3/node_modules/@guardian/source/dist/react-components/button/LinkButton.js
var LinkButton = __webpack_require__(68163);
// EXTERNAL MODULE: ./src/components/marketing/lib/tracking.ts
var tracking = __webpack_require__(81412);
// EXTERNAL MODULE: ./src/components/marketing/banners/common/PaymentCards.tsx
var PaymentCards = __webpack_require__(53326);
;// ./src/components/marketing/banners/designableBanner/components/DesignableBannerCtas.tsx
function DesignableBannerCtas({mainOrMobileContent,onPrimaryCtaClick,onSecondaryCtaClick,primaryCtaSettings,secondaryCtaSettings}){const{primaryCta,secondaryCta}=mainOrMobileContent;const hasSupportCta=primaryCta?(0,tracking/* isSupportUrl */.Tv)(primaryCta.ctaUrl):false;return /*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsxs)("div",{css:DesignableBannerCtas_styles.container,children:[primaryCta&&/*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsx)(LinkButton/* LinkButton */.z,{href:primaryCta?.ctaUrl,onClick:onPrimaryCtaClick,size:"small",priority:"primary",cssOverrides:(0,buttonStyles/* buttonStyles */.V)(primaryCtaSettings),children:primaryCta?.ctaText}),secondaryCta?.type===index_esm/* SecondaryCtaType */.bP.Custom&&/*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsx)(LinkButton/* LinkButton */.z,{href:secondaryCta?.cta.ctaUrl,onClick:onSecondaryCtaClick,size:"small",priority:"tertiary",cssOverrides:(0,buttonStyles/* buttonStyles */.V)(secondaryCtaSettings),children:secondaryCta.cta.ctaText}),primaryCta&&hasSupportCta&&/*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsx)(PaymentCards/* PaymentCards */.w,{})]})}const DesignableBannerCtas_styles={container:(0,emotion_react_esm.css)`
		display: flex;
		flex-wrap: wrap;
		gap: ${space/* space */.x[4]}px;
		justify-content: center;

		> a {
			flex: 1 0 100%;
			justify-content: center;

			${mq/* from */.HT.tablet} {
				flex: 0 1 auto;
			}
		}

		${mq/* from */.HT.tablet} {
			justify-content: start;
		}
	`};
;// ./src/components/marketing/shared/ResponsiveImage.tsx
function createSource(image){return /*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsx)("source",{media:image.media,srcSet:image.url},image.url)}const ResponsiveImage=({images,baseImage,bannerId,cssOverrides})=>{return /*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsxs)("picture",{id:bannerId,css:cssOverrides,children:[images.map(createSource),/*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsx)("img",{src:baseImage.url,alt:baseImage.alt})]})};
;// ./src/components/marketing/banners/designableBanner/components/DesignableBannerVisual.tsx
function DesignableBannerVisual({settings,bannerId,isHeaderImage}){const baseImage={url:settings.mainUrl,media:"",alt:settings.altText};const images=[];const styles=DesignableBannerVisual_getStyles(isHeaderImage);if(settings.mobileUrl){images.push({url:settings.mobileUrl,media:"(max-width: 739px)"})}if(settings.tabletUrl){images.push({url:settings.tabletUrl,media:"(max-width: 979px)"})}if(settings.desktopUrl){images.push({url:settings.desktopUrl,media:"(max-width: 1139px)"})}if(settings.leftColUrl){images.push({url:settings.leftColUrl,media:"(max-width: 1299px)"})}if(settings.wideUrl){images.push({url:settings.wideUrl,media:""})}return /*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsx)(ResponsiveImage,{baseImage:baseImage,images:images,bannerId:bannerId,cssOverrides:styles.container})}const DesignableBannerVisual_getStyles=(isHeaderImage=false)=>{if(isHeaderImage){return{container:(0,emotion_react_esm.css)`
				height: 100%;
				width: 100%;

				img {
					height: 100%;
					object-fit: contain;
					display: block;
					margin-left: -10px;
					margin-right: -10px;
					width: calc(100% + 20px);
				}
			`}}return{container:(0,emotion_react_esm.css)`
			display: block;
			width: calc(100% + 20px);
			margin-left: -10px;
			margin-right: -10px;

			img {
				width: 100%;
				object-fit: contain;
				display: block;

				${mq/* from */.HT.tablet} {
					max-height: none;
				}
			}

			${mq/* from */.HT.tablet} {
				height: 100%;
				width: 100%;
				align-items: center;
				margin-left: 0;
				margin-right: 0;
			}
		`}};
;// ./src/components/marketing/banners/designableBanner/components/DesignableBannerHeader.tsx
function DesignableBannerHeader({heading,mobileHeading,headerSettings,headlineSize}){const isTabletOrAbove=(0,useMatchMedia/* useMatchMedia */.N)((0,useMatchMedia/* removeMediaRulePrefix */.$)(mq/* from */.HT.tablet));const styles=DesignableBannerHeader_getStyles(headerSettings,headlineSize);const resolveImage=settings=>{return /*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsx)(DesignableBannerVisual,{settings:settings,isHeaderImage:true})};const resolveCopy=()=>{return /*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsx)("h2",{children:isTabletOrAbove?heading:mobileHeading})};return /*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsx)("div",{css:styles.container,children:/*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsxs)("header",{css:styles.header,children:[headerSettings?.headerImage&&resolveImage(headerSettings.headerImage),(heading??mobileHeading)&&resolveCopy()]})})}const DesignableBannerHeader_getStyles=(headerSettings,headlineSize)=>{const color=headerSettings?.textColour??palette/* neutral */.SY[0];const copyTopMargin=headerSettings?.headerImage?space/* space */.x[6]:space/* space */.x[3];const containerMargin=headerSettings?.headerImage?`${space/* space */.x[6]}px`:"0";return{container:(0,emotion_react_esm.css)`
			position: relative;
			margin-bottom: ${containerMargin};
		`,header:(0,emotion_react_esm.css)`
			h2 {
				margin: ${copyTopMargin}px 0 ${space/* space */.x[3]}px;
				color: ${color};

				${headlineSize==="small"?typography/* headlineMedium17 */.cYp:typography/* headlineBold24 */.OAJ}
				${mq/* from */.HT.tablet} {
					${typography/* headlineBold28 */.aC2}
					margin-bottom: ${space/* space */.x[6]}px;
				}
				${mq/* from */.HT.leftCol} {
					${typography/* headlineBold34 */.r9N}
				}
			}
		`}};
// EXTERNAL MODULE: ./src/components/marketing/hooks/useContributionsReminderSignup.ts
var useContributionsReminderSignup = __webpack_require__(18960);
// EXTERNAL MODULE: ../node_modules/.pnpm/@guardian+source@8.0.0_@emotion+react@11.11.3_@types+react@18.3.1_react@18.3.1_tslib@2.6.2_typescript@5.5.3/node_modules/@guardian/source/dist/react-components/text-input/TextInput.js + 2 modules
var TextInput = __webpack_require__(32444);
// EXTERNAL MODULE: ./src/components/marketing/hooks/useContributionsReminderEmailForm.ts
var useContributionsReminderEmailForm = __webpack_require__(39716);
// EXTERNAL MODULE: ./src/components/marketing/lib/reminders.ts
var reminders = __webpack_require__(91210);
;// ./src/components/marketing/banners/designableBanner/components/DesignableBannerReminderSignedOut.tsx
const dfltTextColor=palette/* neutral */.SY[0];function ThankYou({reminderLabelWithPreposition,thankyouColor,contactUsColor}){return /*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsxs)("div",{children:[/*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsx)("header",{children:/*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsx)("h3",{css:DesignableBannerReminderSignedOut_styles.thankYouHeaderCopy(thankyouColor??dfltTextColor),children:"Thank you! Your reminder is set"})}),/*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsxs)("div",{css:DesignableBannerReminderSignedOut_styles.thankYouBodyCopy(thankyouColor??dfltTextColor),children:["We will be in touch to invite you to contribute. Look out for a message in your inbox ",reminderLabelWithPreposition,". If you have any questions about contributing, please"," ",/*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsx)("a",{href:"mailto:contribution.support@theguardian.com",css:DesignableBannerReminderSignedOut_styles.contactLink(contactUsColor??dfltTextColor),children:"contact us"})]})]})}function InfoCopy({reminderLabelWithPreposition,privacyLinkColor}){return /*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsxs)("div",{css:DesignableBannerReminderSignedOut_styles.infoCopy,children:["We will send you a maximum of two emails"," ",reminderLabelWithPreposition,". To find out what personal data we collect and how we use it, view our"," ",/*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsx)("a",{css:DesignableBannerReminderSignedOut_styles.privacyLink(privacyLinkColor??dfltTextColor),href:"https://www.theguardian.com/help/privacy-policy",target:"_blank",rel:"noopener noreferrer",children:"Privacy policy"})]})}function ErrorCopy(){return /*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsx)("div",{css:DesignableBannerReminderSignedOut_styles.errorCopy,children:"Sorry we couldn't set a reminder for you this time. Please try again later."})}function DesignableBannerReminderSignedOut({reminderCta,reminderStatus,onReminderSetClick,setReminderCtaSettings}){const reminderLabelWithPreposition=(0,reminders/* ensureHasPreposition */.J)(reminderCta.reminderFields.reminderLabel);return /*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsx)(emotion_react_jsx_runtime_esm.Fragment,{children:reminderStatus===reminders/* ReminderStatus */.l.Completed?/*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsx)(ThankYou,{reminderLabelWithPreposition:reminderLabelWithPreposition}):/*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsx)(Signup,{reminderLabelWithPreposition:reminderLabelWithPreposition,reminderStatus:reminderStatus,onSubmit:onReminderSetClick,setReminderCtaSettings:setReminderCtaSettings})})}function Signup({reminderLabelWithPreposition,reminderStatus,onSubmit,setReminderCtaSettings}){const{email,inputError,updateEmail,handleSubmit}=(0,useContributionsReminderEmailForm/* useContributionsReminderEmailForm */.p)();return /*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsxs)(emotion_react_jsx_runtime_esm.Fragment,{children:[/*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsx)("header",{children:/*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsxs)("h3",{css:DesignableBannerReminderSignedOut_styles.headerCopy,children:["Remind me to support ",reminderLabelWithPreposition," please"]})}),/*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsxs)("form",{css:DesignableBannerReminderSignedOut_styles.form,onSubmit:handleSubmit(()=>onSubmit(email)),children:[/*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsx)(TextInput/* TextInput */.k,{label:"Email address",hideLabel:true,onChange:updateEmail,error:inputError,value:email,width:30,placeholder:"Enter your email"}),/*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsx)("div",{css:DesignableBannerReminderSignedOut_styles.ctaContainer,children:/*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsx)(Button/* Button */.$,{type:"submit",iconSide:"right",priority:"primary",disabled:reminderStatus===reminders/* ReminderStatus */.l.Submitting,cssOverrides:(0,emotion_react_esm.css)`
							${DesignableBannerReminderSignedOut_styles.button}
							${setReminderCtaSettings&&(0,buttonStyles/* buttonStyles */.V)(setReminderCtaSettings)}
						`,children:"Set reminder"})}),reminderStatus===reminders/* ReminderStatus */.l.Error&&/*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsx)("div",{css:DesignableBannerReminderSignedOut_styles.errorCopyContainer,children:/*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsx)(ErrorCopy,{})})]}),/*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsx)("div",{css:DesignableBannerReminderSignedOut_styles.infoCopyContainer,children:/*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsx)(InfoCopy,{reminderLabelWithPreposition:reminderLabelWithPreposition})})]})}const DesignableBannerReminderSignedOut_styles={headerCopy:(0,emotion_react_esm.css)`
		${typography/* textSansBold17 */.keT};
		margin: 0;
	`,form:(0,emotion_react_esm.css)`
		margin-top: ${space/* space */.x[2]}px;

		display: flex;
		flex-direction: column;

		${mq/* from */.HT.tablet} {
			flex-direction: row;
			align-items: flex-end;
		}

		> input {
			min-width: 100%;

			${mq/* from */.HT.tablet} {
				min-width: auto;
			}
		}
	`,ctaContainer:(0,emotion_react_esm.css)`
		margin-top: ${space/* space */.x[3]}px;

		${mq/* from */.HT.tablet} {
			margin-top: 0;
			margin-left: ${space/* space */.x[3]}px;
		}
	`,errorCopyContainer:(0,emotion_react_esm.css)`
		margin-top: ${space/* space */.x[1]}px;
	`,infoCopyContainer:(0,emotion_react_esm.css)`
		margin-top: ${space/* space */.x[3]}px;
	`,button:(0,emotion_react_esm.css)`
		width: 100%;
		justify-content: center;

		${mq/* from */.HT.tablet} {
			width: auto;
		}
	`,errorCopy:(0,emotion_react_esm.css)`
		${typography/* textSansBold15 */.yui};
		color: ${palette/* error */.z3[400]};
		font-style: italic;
	`,infoCopy:(0,emotion_react_esm.css)`
		${typography/* textSans15 */.PSs}
		font-size: 12px;
	`,privacyLink:foreColor=>(0,emotion_react_esm.css)`
		font-weight: bold;
		color: ${foreColor};
	`,thankYouHeaderCopy:foreColor=>(0,emotion_react_esm.css)`
		${typography/* textSansBold15 */.yui}
		margin: 0;
		margin-bottom: ${space/* space */.x[3]}px;
		color: ${foreColor};
	`,thankYouBodyCopy:foreColor=>(0,emotion_react_esm.css)`
		${typography/* textSans15 */.PSs}
		color: ${foreColor};
	`,contactLink:foreColor=>(0,emotion_react_esm.css)`
		font-weight: bold;
		color: ${foreColor};
	`};
;// ./src/components/marketing/banners/designableBanner/components/DesignableBannerReminder.tsx
const DesignableBannerReminder_styles={container:(0,emotion_react_esm.css)`
		grid-row: 4;
		grid-column: 1 / span 2;
		order: 5;
		margin-top: ${space/* space */.x[3]}px;
	`};function DesignableBannerReminder({reminderCta,trackReminderSetClick,setReminderCtaSettings,mobileReminderRef}){const{reminderStatus,createReminder}=(0,useContributionsReminderSignup/* useContributionsReminderSignup */.n)(reminderCta.reminderFields.reminderPeriod,"WEB","BANNER","PRE",reminderCta.reminderFields.reminderOption);const onReminderSetClick=email=>{trackReminderSetClick();createReminder(email)};return /*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsx)("div",{ref:mobileReminderRef,css:DesignableBannerReminder_styles.container,children:/*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsx)(DesignableBannerReminderSignedOut,{reminderCta:reminderCta,reminderStatus:reminderStatus,onReminderSetClick:onReminderSetClick,setReminderCtaSettings:setReminderCtaSettings})})}
;// ./src/components/marketing/banners/designableBanner/styles/templateStyles.ts
const templateSpacing={bannerContainer:(0,emotion_react_esm.css)`
		margin-bottom: ${space/* space */.x[4]}px;

		${mq/* from */.HT.tablet} {
			margin-bottom: ${space/* space */.x[3]}px;
		}
	`,bannerHeader:(0,emotion_react_esm.css)`
		margin: 0;
	`,bannerBodyCopy:(0,emotion_react_esm.css)`
		margin-bottom: ${space/* space */.x[4]}px;

		${mq/* from */.HT.tablet} {
			margin-bottom: ${space/* space */.x[6]}px;
		}
	`,bannerTicker:(0,emotion_react_esm.css)`
		margin-bottom: ${space/* space */.x[4]}px;
	`,bannerCloseButton:(0,emotion_react_esm.css)`
		top: ${space/* space */.x[3]}px;
		right: ${space/* space */.x[3]}px;
		margin-left: ${space/* space */.x[3]}px;
	`};
;// ./src/components/marketing/banners/designableBanner/DesignableBanner.tsx
const buildImageSettings=design=>{return{mainUrl:design.mobileUrl,mobileUrl:design.mobileUrl,tabletUrl:design.tabletUrl,desktopUrl:design.desktopUrl,wideUrl:design.desktopUrl,altText:design.altText}};const buildMainImageSettings=design=>{if(design.visual?.kind==="Image"){return buildImageSettings(design.visual)}return undefined};const buildHeaderImageSettings=design=>{if(design.headerImage){return buildImageSettings(design.headerImage)}return undefined};const buildChoiceCardSettings=design=>{if(design.visual?.kind==="ChoiceCards"){const{buttonColour,buttonTextColour,buttonBorderColour,buttonSelectColour,buttonSelectTextColour,buttonSelectBorderColour}=design.visual;return{buttonColour:buttonColour?(0,index_esm/* hexColourToString */.mb)(buttonColour):undefined,buttonTextColour:buttonTextColour?(0,index_esm/* hexColourToString */.mb)(buttonTextColour):undefined,buttonBorderColour:buttonBorderColour?(0,index_esm/* hexColourToString */.mb)(buttonBorderColour):undefined,buttonSelectColour:buttonSelectColour?(0,index_esm/* hexColourToString */.mb)(buttonSelectColour):undefined,buttonSelectTextColour:buttonSelectTextColour?(0,index_esm/* hexColourToString */.mb)(buttonSelectTextColour):undefined,buttonSelectBorderColour:buttonSelectBorderColour?(0,index_esm/* hexColourToString */.mb)(buttonSelectBorderColour):undefined}}return undefined};const DesignableBanner=({content,onCloseClick,articleCounts,onCtaClick,onSecondaryCtaClick,reminderTracking,separateArticleCount,separateArticleCountSettings,tickerSettings,choiceCardAmounts,countryCode,submitComponentEvent,design})=>{const isTabletOrAbove=(0,useMatchMedia/* useMatchMedia */.N)((0,useMatchMedia/* removeMediaRulePrefix */.$)(mq/* from */.HT.tablet));const{isReminderActive,onReminderCtaClick,mobileReminderRef}=useReminder(reminderTracking);const[iosAppBannerPresent,setIosAppBannerPresent]=(0,compat.useState)(false);(0,compat.useEffect)(()=>{setIosAppBannerPresent(window.innerHeight!=window.document.documentElement.clientHeight)},[]);(0,compat.useEffect)(()=>{if(iosAppBannerPresent){if(submitComponentEvent){submitComponentEvent({component:{componentType:"ACQUISITIONS_OTHER",id:"safari-ios-banner-present"},action:"VIEW"})}}},[iosAppBannerPresent,submitComponentEvent]);const{choiceCardSelection,setChoiceCardSelection,getCtaText,getCtaUrl,currencySymbol}=(0,useChoiceCards/* useChoiceCards */.m)(choiceCardAmounts,countryCode,content.mainContent.primaryCta,content.mobileContent.primaryCta);if(!design){return /*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsx)(emotion_react_jsx_runtime_esm.Fragment,{})}const{basic,primaryCta,secondaryCta,highlightedText,closeButton,ticker}=design.colours;const imageSettings=buildMainImageSettings(design);const choiceCardSettings=buildChoiceCardSettings(design);const templateSettings={containerSettings:{backgroundColour:(0,index_esm/* hexColourToString */.mb)(basic.background),textColor:(0,index_esm/* hexColourToString */.mb)(basic.bodyText)},headerSettings:{textColour:(0,index_esm/* hexColourToString */.mb)(basic.headerText),headerImage:buildHeaderImageSettings(design)},primaryCtaSettings:{default:{backgroundColour:(0,index_esm/* hexColourToString */.mb)(primaryCta.default.background),textColour:(0,index_esm/* hexColourToString */.mb)(primaryCta.default.text)},hover:{backgroundColour:(0,index_esm/* hexColourToString */.mb)(primaryCta.hover.background),textColour:(0,index_esm/* hexColourToString */.mb)(primaryCta.hover.text)}},secondaryCtaSettings:{default:{backgroundColour:(0,index_esm/* hexColourToString */.mb)(secondaryCta.default.background),textColour:(0,index_esm/* hexColourToString */.mb)(secondaryCta.default.text),border:`1px solid ${secondaryCta.default.border?(0,index_esm/* hexColourToString */.mb)(secondaryCta.default.border):undefined}`},hover:{backgroundColour:(0,index_esm/* hexColourToString */.mb)(secondaryCta.hover.background),textColour:(0,index_esm/* hexColourToString */.mb)(secondaryCta.hover.text),border:`1px solid ${secondaryCta.hover.border?(0,index_esm/* hexColourToString */.mb)(secondaryCta.hover.border):undefined}`}},closeButtonSettings:{default:{backgroundColour:(0,index_esm/* hexColourToString */.mb)(closeButton.default.background),textColour:(0,index_esm/* hexColourToString */.mb)(closeButton.default.text),border:`1px solid ${closeButton.default.border?(0,index_esm/* hexColourToString */.mb)(closeButton.default.border):palette/* specialReport */.aL[100]}`},hover:{backgroundColour:(0,index_esm/* hexColourToString */.mb)(closeButton.hover.background),textColour:(0,index_esm/* hexColourToString */.mb)(closeButton.hover.text),border:`1px solid ${closeButton.hover.border?(0,index_esm/* hexColourToString */.mb)(closeButton.hover.border):palette/* neutral */.SY[100]}`}},highlightedTextSettings:{textColour:(0,index_esm/* hexColourToString */.mb)(highlightedText.text),highlightColour:(0,index_esm/* hexColourToString */.mb)(highlightedText.highlight)},articleCountTextColour:(0,index_esm/* hexColourToString */.mb)(basic.articleCountText),choiceCardSettings,imageSettings,bannerId:"designable-banner",tickerStylingSettings:{filledProgressColour:(0,index_esm/* hexColourToString */.mb)(ticker.filledProgress),progressBarBackgroundColour:(0,index_esm/* hexColourToString */.mb)(ticker.progressBarBackground),headlineColour:(0,index_esm/* hexColourToString */.mb)(ticker.headlineColour),totalColour:(0,index_esm/* hexColourToString */.mb)(ticker.totalColour),goalColour:(0,index_esm/* hexColourToString */.mb)(ticker.goalColour)}};const mainOrMobileContent=isTabletOrAbove?content.mainContent:content.mobileContent;const showChoiceCards=!!(templateSettings.choiceCardSettings&&choiceCardAmounts?.amountsCardData);const getHeaderContainerCss=()=>{if(templateSettings?.headerSettings?.headerImage){return DesignableBanner_styles.headerWithImageContainer(templateSettings.containerSettings.backgroundColour)}return DesignableBanner_styles.headerContainer(templateSettings.containerSettings.backgroundColour,!!templateSettings.imageSettings)};const showReminder=mainOrMobileContent.secondaryCta?.type===index_esm/* SecondaryCtaType */.bP.ContributionsReminder;const showAboveArticleCount=(separateArticleCountSettings?.type==="above"||separateArticleCount)&&articleCounts.forTargetedWeeks>=5;return /*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsxs)("div",{css:DesignableBanner_styles.outerContainer(templateSettings.containerSettings.backgroundColour,iosAppBannerPresent,templateSettings.containerSettings.textColor),children:[/*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsxs)("div",{css:DesignableBanner_styles.containerOverrides,children:[/*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsx)("div",{css:getHeaderContainerCss(),children:/*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsx)(DesignableBannerHeader,{heading:content.mainContent.heading,mobileHeading:content.mobileContent.heading,headerSettings:templateSettings.headerSettings,headlineSize:design.fonts?.heading.size??"medium"})}),/*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsxs)("div",{css:DesignableBanner_styles.contentContainer(showReminder),children:[showAboveArticleCount&&/*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsx)(DesignableBannerArticleCount,{numArticles:articleCounts.forTargetedWeeks,settings:templateSettings,copy:separateArticleCountSettings?.copy}),tickerSettings?.tickerData&&templateSettings.tickerStylingSettings&&/*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsx)("div",{css:templateSpacing.bannerTicker,children:/*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsx)(Ticker/* Ticker */.R,{currencySymbol:tickerSettings.currencySymbol,copy:{headline:tickerSettings.copy.countLabel},tickerData:tickerSettings.tickerData,tickerStylingSettings:templateSettings.tickerStylingSettings,size:"medium"})}),/*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsx)("div",{css:templateSpacing.bannerBodyCopy,children:/*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsx)(DesignableBannerBody,{mainContent:content.mainContent,mobileContent:content.mobileContent,highlightedTextSettings:templateSettings.highlightedTextSettings})}),!showChoiceCards&&/*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsx)(DesignableBannerCtas,{mainOrMobileContent:mainOrMobileContent,onPrimaryCtaClick:onCtaClick,onSecondaryCtaClick:onSecondaryCtaClick,primaryCtaSettings:templateSettings.primaryCtaSettings,secondaryCtaSettings:templateSettings.secondaryCtaSettings})]}),templateSettings.imageSettings?/*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsxs)("div",{css:DesignableBanner_styles.bannerVisualContainer(templateSettings.containerSettings.backgroundColour),children:[/*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsx)(DesignableBannerCloseButton,{onCloseClick:onCloseClick,settings:templateSettings.closeButtonSettings,styleOverides:DesignableBanner_styles.closeButtonOverrides(false)}),/*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsx)(DesignableBannerVisual,{settings:templateSettings.imageSettings,bannerId:templateSettings.bannerId}),templateSettings.alternativeVisual]}):/*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsx)(DesignableBannerCloseButton,{onCloseClick:onCloseClick,settings:templateSettings.closeButtonSettings,styleOverides:DesignableBanner_styles.closeButtonOverrides(true)}),showChoiceCards&&/*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsx)("div",{css:DesignableBanner_styles.choiceCardsContainer(templateSettings.containerSettings.backgroundColour),children:/*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsx)(ChoiceCards/* ChoiceCards */.T,{setSelectionsCallback:setChoiceCardSelection,selection:choiceCardSelection,submitComponentEvent:submitComponentEvent,currencySymbol:currencySymbol,componentId:"contributions-banner-choice-cards",amountsTest:choiceCardAmounts,design:templateSettings.choiceCardSettings,getCtaText:getCtaText,getCtaUrl:getCtaUrl,cssCtaOverides:(0,buttonStyles/* buttonStyles */.V)(templateSettings.primaryCtaSettings),onCtaClick:onCtaClick})}),/*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsx)("div",{css:DesignableBanner_styles.guardianLogoContainer,children:/*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsx)(SvgGuardianLogo/* SvgGuardianLogo */.D,{textColor:(0,index_esm/* hexColourToString */.mb)(basic.logo)})}),showReminder&&/*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsxs)("div",{css:DesignableBanner_styles.reminderContainer,children:[/*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsxs)("span",{css:DesignableBanner_styles.reminderText,children:["Not ready to support today?"," "]}),/*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsx)(Button/* Button */.$,{priority:"subdued",onClick:onReminderCtaClick,cssOverrides:DesignableBanner_styles.reminderCta(templateSettings.secondaryCtaSettings),children:"Remind me later"})]})]}),isReminderActive&&/*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsx)("div",{css:DesignableBanner_styles.reminderFormContainer,children:/*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsx)("div",{css:DesignableBanner_styles.containerOverrides,children:/*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsx)(DesignableBannerReminder,{reminderCta:mainOrMobileContent.secondaryCta,trackReminderSetClick:reminderTracking.onReminderSetClick,setReminderCtaSettings:templateSettings.secondaryCtaSettings,mobileReminderRef:isTabletOrAbove?null:mobileReminderRef})})})]})};const DesignableBanner_styles={outerContainer:(background,limitHeight,textColor="inherit")=>(0,emotion_react_esm.css)`
		background: ${background};
		color: ${textColor};
		${limitHeight?"max-height: 70vh;":""}
		overflow: auto;
		* {
			box-sizing: border-box;
		}
		${mq/* from */.HT.tablet} {
			border-top: 1px solid ${palette/* neutral */.SY[0]};
		}
		b,
		strong {
			font-weight: bold;
		}
	`,containerOverrides:(0,emotion_react_esm.css)`
		display: flex;
		flex-direction: column;
		position: relative;
		padding: 0 10px;
		${mq/* from */.HT.tablet} {
			display: grid;
			grid-template-columns: 1fr 280px;
			grid-template-rows: auto 1fr auto;
			column-gap: ${space/* space */.x[5]}px;
			width: 100%;
			max-width: 1300px;
			margin: 0 auto;
			padding: 0 ${space/* space */.x[5]}px;
		}
		${mq/* from */.HT.desktop} {
			column-gap: 60px;
			grid-template-columns: 1fr 460px;
		}
		${mq/* from */.HT.wide} {
			column-gap: 100px;
		}
		${templateSpacing.bannerContainer};
	`,closeButtonOverrides:isGridCell=>(0,emotion_react_esm.css)`
		${mq/* until */.TG.tablet} {
			position: fixed;
			margin-top: ${space/* space */.x[3]}px;
			padding-right: 10px;
			right: 0;
		}
		${mq/* from */.HT.tablet} {
			margin-top: ${space/* space */.x[3]}px;

			${isGridCell?(0,emotion_react_esm.css)`
						grid-column: 2;
						grid-row: 1;
				  `:(0,emotion_react_esm.css)`
						margin-bottom: ${space/* space */.x[3]}px;
						display: flex;
						justify-content: flex-end;
				  `}
		}
	`,headerContainer:(background,bannerHasImage)=>(0,emotion_react_esm.css)`
		order: ${bannerHasImage?"2":"1"};
		${mq/* until */.TG.tablet} {
			${bannerHasImage?"":`max-width: calc(100% - 40px - ${space/* space */.x[3]}px);`}
		}

		${mq/* from */.HT.tablet} {
			grid-column: 1;
			grid-row: 1;
			background: ${background};
		}

		${templateSpacing.bannerHeader}
	`,headerWithImageContainer:background=>(0,emotion_react_esm.css)`
		order: 1;
		max-width: '100%';
		${mq/* between */.Tq.mobileMedium.and.tablet} {
			order: '2';
		}
		${mq/* from */.HT.tablet} {
			grid-column: 1;
			grid-row: 1;
			background: ${background};
		}
		${templateSpacing.bannerHeader}
	`,contentContainer:showRemindMeLater=>(0,emotion_react_esm.css)`
		order: 2;
		${mq/* from */.HT.tablet} {
			grid-column: 1;
			grid-row: ${showRemindMeLater?"2":"2 / span 2"};
		}
	`,bannerVisualContainer:background=>(0,emotion_react_esm.css)`
		order: 1;
		background: ${background};
		${mq/* from */.HT.tablet} {
			grid-column: 2;
			grid-row: 1 / span 2;
			align-self: flex-start;
		}
	`,choiceCardsContainer:background=>(0,emotion_react_esm.css)`
		order: 3;
		background: ${background};
		${mq/* from */.HT.tablet} {
			grid-column: 2;
			grid-row: 2;
			align-self: flex-start;
			display: flex;
			justify-content: flex-end;
		}
	`,guardianLogoContainer:(0,emotion_react_esm.css)`
		display: none;
		${mq/* from */.HT.tablet} {
			display: block;
			width: 100px;
		}
		grid-column: 2;
		grid-row: 3;
		justify-self: end;
		padding-top: ${space/* space */.x[3]}px;
	`,reminderContainer:(0,emotion_react_esm.css)`
		${typography/* textEgyptian15 */.nD4};
		grid-column: 1;
		grid-row: 3;
		order: 4;
		align-self: center;
		margin-top: ${space/* space */.x[2]}px;

		${mq/* from */.HT.tablet} {
			align-self: end;
		}
	`,reminderText:(0,emotion_react_esm.css)`
		${typography/* textSans17 */.NA0};
		display: none;

		${mq/* from */.HT.tablet} {
			display: inline;
		}
	`,reminderCta:({default:defaultSettings})=>(0,emotion_react_esm.css)`
		${typography/* textSansBold17 */.keT};
		color: ${defaultSettings.backgroundColour};
		display: inline;
		height: auto;
		min-height: auto;
	`,reminderFormContainer:(0,emotion_react_esm.css)`
		border-top: 2px solid ${palette/* neutral */.SY[0]};
		margin-top: ${space/* space */.x[3]}px;
	`};const unvalidated=(0,BannerWrapper/* bannerWrapper */.cy)(DesignableBanner,"designable-banner");const validated=(0,BannerWrapper/* validatedBannerWrapper */.oA)(DesignableBanner,"designable-banner");

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

/***/ })

};
;
//# sourceMappingURL=5550.js.map