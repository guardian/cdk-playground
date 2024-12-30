"use strict";
exports.id = 5717;
exports.ids = [5717];
exports.modules = {

/***/ 5717:
/*!******************************************************************************************!*\
  !*** ./src/components/marketing/banners/signInPrompt/SignInPromptBanner.tsx + 4 modules ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  SignInPromptBanner: () => (/* binding */ validated),
  SignInPromptBannerUnvalidated: () => (/* binding */ unvalidated)
});

// EXTERNAL MODULE: ../node_modules/.pnpm/@emotion+react@11.11.3_@types+react@18.3.1_react@18.3.1/node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.esm.js + 2 modules
var emotion_react_jsx_runtime_esm = __webpack_require__(5743);
// EXTERNAL MODULE: ../node_modules/.pnpm/@emotion+react@11.11.3_@types+react@18.3.1_react@18.3.1/node_modules/@emotion/react/dist/emotion-react.esm.js
var emotion_react_esm = __webpack_require__(43102);
// EXTERNAL MODULE: ../node_modules/.pnpm/@emotion+react@11.11.3_@types+react@18.3.1_react@18.3.1/node_modules/@emotion/react/dist/emotion-element-6bdfffb2.esm.js + 2 modules
var emotion_element_6bdfffb2_esm = __webpack_require__(34847);
// EXTERNAL MODULE: ../node_modules/.pnpm/@guardian+source@8.0.0_@emotion+react@11.11.3_@types+react@18.3.1_react@18.3.1_tslib@2.6.2_typescript@5.5.3/node_modules/@guardian/source/dist/foundations/__deprecated__/colour/palette.js
var palette = __webpack_require__(46080);
// EXTERNAL MODULE: ../node_modules/.pnpm/@guardian+source@8.0.0_@emotion+react@11.11.3_@types+react@18.3.1_react@18.3.1_tslib@2.6.2_typescript@5.5.3/node_modules/@guardian/source/dist/foundations/__generated__/typography.js
var typography = __webpack_require__(7351);
// EXTERNAL MODULE: ../node_modules/.pnpm/@guardian+source@8.0.0_@emotion+react@11.11.3_@types+react@18.3.1_react@18.3.1_tslib@2.6.2_typescript@5.5.3/node_modules/@guardian/source/dist/foundations/__generated__/space.js
var space = __webpack_require__(96378);
// EXTERNAL MODULE: ../node_modules/.pnpm/@guardian+source@8.0.0_@emotion+react@11.11.3_@types+react@18.3.1_react@18.3.1_tslib@2.6.2_typescript@5.5.3/node_modules/@guardian/source/dist/foundations/mq/mq.js
var mq = __webpack_require__(99923);
// EXTERNAL MODULE: ../node_modules/.pnpm/@guardian+source@8.0.0_@emotion+react@11.11.3_@types+react@18.3.1_react@18.3.1_tslib@2.6.2_typescript@5.5.3/node_modules/@guardian/source/dist/foundations/__generated__/breakpoints.js
var breakpoints = __webpack_require__(92280);
// EXTERNAL MODULE: ../node_modules/.pnpm/@guardian+source@8.0.0_@emotion+react@11.11.3_@types+react@18.3.1_react@18.3.1_tslib@2.6.2_typescript@5.5.3/node_modules/@guardian/source/dist/foundations/__generated__/palette.js
var _generated_palette = __webpack_require__(77907);
;// ../node_modules/.pnpm/@guardian+source@8.0.0_@emotion+react@11.11.3_@types+react@18.3.1_react@18.3.1_tslib@2.6.2_typescript@5.5.3/node_modules/@guardian/source/dist/react-components/container/styles.js
const container=(0,emotion_react_esm.css)`
	margin: 0 auto;
	box-sizing: border-box;
	padding: 0 ${space/* space */.x[3]}px;
	width: 100%;
	${mq/* from */.HT.mobileLandscape} {
		padding: 0 ${space/* space */.x[5]}px;
	}
	${mq/* from */.HT.tablet} {
		width: ${breakpoints/* breakpoints */.f.tablet}px;
	}
	${mq/* from */.HT.desktop} {
		width: ${breakpoints/* breakpoints */.f.desktop}px;
	}
	${mq/* from */.HT.leftCol} {
		width: ${breakpoints/* breakpoints */.f.leftCol}px;
	}
	${mq/* from */.HT.wide} {
		width: ${breakpoints/* breakpoints */.f.wide}px;
	}
	border-color: ${_generated_palette/* palette */.M.neutral[86]};
`;const containerSideBorders=(0,emotion_react_esm.css)`
	border-left-style: solid;
	border-right-style: solid;
	border-left-width: 0;
	border-right-width: 0;

	${mq/* from */.HT.tablet} {
		width: ${breakpoints/* breakpoints */.f.tablet+2}px;
		border-left-width: 1px;
		border-right-width: 1px;
	}
	${mq/* from */.HT.desktop} {
		width: ${breakpoints/* breakpoints */.f.desktop+2}px;
	}
	${mq/* from */.HT.leftCol} {
		width: ${breakpoints/* breakpoints */.f.leftCol+2}px;
	}
	${mq/* from */.HT.wide} {
		width: ${breakpoints/* breakpoints */.f.wide+2}px;
	}
`;const containerTopBorder=(0,emotion_react_esm.css)`
	border-top-width: 1px;
	border-top-style: solid;
`;const containerBorderColor=color=>(0,emotion_react_esm.css)`
	border-color: ${color};
`;const containerBackground=color=>(0,emotion_react_esm.css)`
	background-color: ${color};
`;
;// ../node_modules/.pnpm/@guardian+source@8.0.0_@emotion+react@11.11.3_@types+react@18.3.1_react@18.3.1_tslib@2.6.2_typescript@5.5.3/node_modules/@guardian/source/dist/react-components/container/Container.js
const Container=({element:Element="section",border=false,sideBorders=false,topBorder=false,backgroundColor,borderColor,cssOverrides,children,...props})=>{return /* @__PURE__ */(0,emotion_react_jsx_runtime_esm.jsx)(Element,{css:[backgroundColor&&containerBackground(backgroundColor),cssOverrides],...props,children:/* @__PURE__ */(0,emotion_react_jsx_runtime_esm.jsx)("div",{css:[container,backgroundColor&&containerBackground(backgroundColor),topBorder&&containerTopBorder,(sideBorders||border)&&containerSideBorders,borderColor&&containerBorderColor(borderColor)],children})})};
// EXTERNAL MODULE: ../node_modules/.pnpm/@guardian+source@8.0.0_@emotion+react@11.11.3_@types+react@18.3.1_react@18.3.1_tslib@2.6.2_typescript@5.5.3/node_modules/@guardian/source/dist/react-components/columns/Columns.js
var Columns = __webpack_require__(86085);
// EXTERNAL MODULE: ../node_modules/.pnpm/@guardian+source@8.0.0_@emotion+react@11.11.3_@types+react@18.3.1_react@18.3.1_tslib@2.6.2_typescript@5.5.3/node_modules/@guardian/source/dist/react-components/columns/Column.js
var Column = __webpack_require__(14862);
// EXTERNAL MODULE: ../node_modules/.pnpm/@guardian+source@8.0.0_@emotion+react@11.11.3_@types+react@18.3.1_react@18.3.1_tslib@2.6.2_typescript@5.5.3/node_modules/@guardian/source/dist/react-components/button/theme.js
var theme = __webpack_require__(14302);
// EXTERNAL MODULE: ../node_modules/.pnpm/@guardian+source@8.0.0_@emotion+react@11.11.3_@types+react@18.3.1_react@18.3.1_tslib@2.6.2_typescript@5.5.3/node_modules/@guardian/source/dist/react-components/button/LinkButton.js
var LinkButton = __webpack_require__(68163);
// EXTERNAL MODULE: ../node_modules/.pnpm/@guardian+source@8.0.0_@emotion+react@11.11.3_@types+react@18.3.1_react@18.3.1_tslib@2.6.2_typescript@5.5.3/node_modules/@guardian/source/dist/react-components/button/Button.js
var Button = __webpack_require__(27123);
// EXTERNAL MODULE: ../node_modules/.pnpm/@guardian+source@8.0.0_@emotion+react@11.11.3_@types+react@18.3.1_react@18.3.1_tslib@2.6.2_typescript@5.5.3/node_modules/@guardian/source/dist/foundations/accessibility/visually-hidden.js
var visually_hidden = __webpack_require__(70991);
;// ../node_modules/.pnpm/@guardian+source@8.0.0_@emotion+react@11.11.3_@types+react@18.3.1_react@18.3.1_tslib@2.6.2_typescript@5.5.3/node_modules/@guardian/source/dist/react-components/brand/SvgRoundel.js
const SvgRoundel=({textColor="#fff",backgroundColor:bgColor="#000",width})=>{return /* @__PURE__ */(0,emotion_react_jsx_runtime_esm.jsxs)(emotion_react_jsx_runtime_esm.Fragment,{children:[/* @__PURE__ */(0,emotion_react_jsx_runtime_esm.jsxs)("svg",{viewBox:"0 0 42 42",xmlns:"http://www.w3.org/2000/svg",width,focusable:false,"aria-hidden":true,children:[/* @__PURE__ */(0,emotion_react_jsx_runtime_esm.jsx)("circle",{cx:"21",cy:"21",r:"21",fill:bgColor}),/* @__PURE__ */(0,emotion_react_jsx_runtime_esm.jsx)("path",{d:"M33.7 22.15l-2.16.96v9.94a17.44 17.44 0 01-7.27 3.58V22.9l-2.3-.81v-.6H33.7v.66z\n				M22.95 5.6h-.06c-4.86 0-7.64 6.55-7.5 15.38-.14 8.87 2.64 15.43 7.5 15.43h.06v.68c-7.28.48-17.23-4.94-17.09-16.07-.14-11.17 9.8-16.6 17.1-16.1v.68zm1.47-.72c2.85.44 6.1 2.31 7.32 3.64v6.13h-.7l-6.62-9.09v-.68z",fill:textColor})]}),/* @__PURE__ */(0,emotion_react_jsx_runtime_esm.jsx)("span",{css:(0,emotion_react_esm.css)`
					${visually_hidden/* visuallyHidden */.Q}
				`,children:"The Guardian"})]})};
;// ../node_modules/.pnpm/@guardian+source@8.0.0_@emotion+react@11.11.3_@types+react@18.3.1_react@18.3.1_tslib@2.6.2_typescript@5.5.3/node_modules/@guardian/source/dist/react-components/brand/SvgRoundelBrandInverse.js
const SvgRoundelBrandInverse=args=>{return /* @__PURE__ */(0,emotion_react_jsx_runtime_esm.jsx)(SvgRoundel,{textColor:palette/* brand */.wk[400],backgroundColor:"white",...args})};
// EXTERNAL MODULE: ../node_modules/.pnpm/@guardian+support-dotcom-components@3.2.0_@guardian+libs@19.2.1_zod@3.22.4/node_modules/@guardian/support-dotcom-components/dist/index.esm.js + 1 modules
var index_esm = __webpack_require__(29995);
// EXTERNAL MODULE: ./src/components/marketing/banners/common/BannerWrapper.tsx + 3 modules
var BannerWrapper = __webpack_require__(49818);
;// ./src/components/marketing/banners/signInPrompt/SignInPromptBanner.tsx
const bannerStyles=(0,emotion_react_esm.css)`
	background-color: ${palette/* brand */.wk[400]};

	::before {
		content: '';
		display: block;
		position: fixed;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		background: rgb(0, 0, 0, 0.3);
		z-index: -1;
	}
`;const mainColumn=(0,emotion_react_esm.css)`
	position: relative;
`;const asideColumn=(0,emotion_react_esm.css)`
	margin-right: 10px;
`;const headingStyles=(0,emotion_react_esm.css)`
	${typography/* headlineBold34 */.r9N}
	font-size: 32px;
	color: ${palette/* neutral */.SY[100]};
	margin: ${space/* space */.x[1]}px 0 0;
	${mq/* until */.TG.phablet} {
		margin: ${space/* space */.x[1]}px 45px 0 0;
	}
`;const subHeadingStyles=(0,emotion_react_esm.css)`
	${typography/* headlineBold20 */.aal};
	color: ${palette/* brandAlt */.JU[400]};
	margin: ${space/* space */.x[2]}px 0;
`;const bulletStyles=(0,emotion_react_esm.css)`
	${typography/* headlineMedium20 */.A5};
	color: ${palette/* neutral */.SY[100]};
	display: flex;
	flex-direction: column;

	span:not(:first-of-type) {
		margin-top: 10px;
	}

	span::before {
		content: '';
		display: inline-block;
		width: 15px;
		height: 15px;
		margin-right: ${space/* space */.x[2]}px;
		background: ${palette/* brandAlt */.JU[400]};
		border-radius: 50%;
	}
`;const actions=(0,emotion_react_esm.css)`
	margin: ${space/* space */.x[5]}px 0;
`;const closeButton=(0,emotion_react_esm.css)`
	margin-left: ${space/* space */.x[5]}px;
`;const logo=(0,emotion_react_esm.css)`
	position: absolute;
	top: ${space/* space */.x[2]}px;
	right: 0px;
	width: 42px;
	height: 42px;
`;const SignInPromptBanner=props=>{const{heading,paragraphs,primaryCta,secondaryCta}=props.content.mainContent;const[subheading,...bullets]=paragraphs;return /*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsx)(Container,{cssOverrides:bannerStyles,children:/*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsxs)(Columns/* Columns */.e,{children:[/*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsx)(Column/* Column */.V,{width:[0,0,0,2,3],cssOverrides:asideColumn,children:" "}),/*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsxs)(Column/* Column */.V,{width:[4,12,12,12,13],cssOverrides:mainColumn,children:[/*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsx)("h1",{css:headingStyles,children:heading}),/*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsx)("h2",{css:subHeadingStyles,children:subheading}),/*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsx)("div",{css:bulletStyles,children:bullets}),/*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsx)("div",{css:actions,children:/*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsxs)(emotion_element_6bdfffb2_esm.a,{theme:theme/* buttonThemeBrand */.fc,children:[primaryCta&&/*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsx)(LinkButton/* LinkButton */.z,{priority:"primary",href:primaryCta.ctaUrl,onClick:props.onCtaClick,size:"small",children:primaryCta.ctaText}),secondaryCta&&secondaryCta.type===index_esm/* SecondaryCtaType */.bP.Custom&&/*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsx)(Button/* Button */.$,{priority:"subdued",size:"small",onClick:props.onCloseClick,cssOverrides:closeButton,children:secondaryCta.cta.ctaText})]})}),/*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsx)("div",{css:logo,children:/*#__PURE__*/(0,emotion_react_jsx_runtime_esm.jsx)(SvgRoundelBrandInverse,{})})]})]})})};const unvalidated=(0,BannerWrapper/* bannerWrapper */.cy)(SignInPromptBanner,"sign-in-prompt-banner");const validated=(0,BannerWrapper/* validatedBannerWrapper */.oA)(SignInPromptBanner,"sign-in-prompt-banner");

/***/ })

};
;
//# sourceMappingURL=5717.js.map