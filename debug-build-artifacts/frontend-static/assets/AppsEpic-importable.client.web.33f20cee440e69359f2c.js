(self.webpackChunk_guardian_dotcom_rendering=self.webpackChunk_guardian_dotcom_rendering||[]).push([[4942],{29051:(t,e,n)=>{"use strict";n.r(e),n.d(e,{AppsEpic:()=>E});var r=n(50484),o=n(24017),i=n(99923),c=n(96378),s=n(7351),a=n(77907),d=n(67400),u=n(42631),l=n(53694),p=n(99354),h=n(47504),g=n(27123),f=n(15168),w=n(25045),b=n(58452);function m(t){let{title:e,body:n,firstButton:o,secondButton:i}=t;const[c,s]=(0,b.E)({debounce:!0}),[a,l]=(0,d.useState)(!1);(0,d.useEffect)((()=>{c&&!a&&((0,u.OA)().epicSeen(),l(!0))}),[c,a,l]);const m=t=>{let{text:e}=t;return(0,r.jsx)(g.$,{onClick:()=>{(0,u.OA)().launchPurchaseScreen(h.PurchaseScreenReason.epic)},iconSide:"right",icon:(0,r.jsx)(f._,{}),children:e})};return(0,r.jsxs)("div",{ref:s,children:[(0,r.jsx)("h1",{dangerouslySetInnerHTML:{__html:e}}),(0,r.jsx)("div",{dangerouslySetInnerHTML:{__html:n}}),(0,r.jsx)("div",{className:"button-container",children:(0,r.jsxs)(p.a,{theme:w.P6,children:[(0,r.jsx)(m,{text:o}),!!i&&(0,r.jsx)(m,{text:i})]})})]})}function P(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function v(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),r.forEach((function(e){P(t,e,n[e])}))}return t}function B(){const t=(e=["\n\t& > div {\n\t\t"," {\n\t\t\tmargin: "," 0;\n\t\t}\n\n\t\tborder-top: 1px solid ",";\n\t\tbackground: ",";\n\t\tcolor: ",";\n\t\tpadding: ",";\n\t\t",";\n\t\tclear: left;\n\t}\n\n\th1:first-of-type {\n\t\tmargin-top: 0;\n\t\t","\n\t}\n\n\tbutton {\n\t\tmargin: 0 "," "," 0;\n\t}\n\n\t.button-container {\n\t\tmargin-top: ",";\n\t}\n\n\tmark {\n\t\tbackground: ",";\n\t\tpadding: 0.1rem 0.125rem;\n\t}\n\n\t/* Source Button styles */\n\t.button-container svg {\n\t\tmargin-right: -4px;\n\t\tflex: 0 0 auto;\n\t\tdisplay: block;\n\t\tfill: currentColor;\n\t\tposition: relative;\n\t\twidth: 30px;\n\t\theight: auto;\n\t}\n\n\t.src-button-space {\n\t\twidth: 12px;\n\t}\n\n\tbutton {\n\t\tdisplay: inline-flex;\n\t\tjustify-content: space-between;\n\t\talign-items: center;\n\t\tbox-sizing: border-box;\n\t\tborder: none;\n\t\tbackground: transparent;\n\t\tcursor: pointer;\n\t\ttransition: 0.3s ease-in-out;\n\t\ttext-decoration: none;\n\t\twhite-space: nowrap;\n\t\t","\n\t\tline-height: 1.5;\n\t\tfont-weight: 700;\n\t\theight: 44px;\n\t\tmin-height: 44px;\n\t\tpadding: 0 20px;\n\t\tborder-radius: 44px;\n\t\tpadding-bottom: 2px;\n\t\tbackground-color: ",";\n\t\tcolor: ",";\n\t\tmargin: 0 "," "," 0;\n\t}\n"],n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}})));var e,n;return B=function(){return t},t}const E=()=>{const[t,e]=(0,d.useState)(!0),[n,o]=(0,d.useState)(void 0);if((0,d.useEffect)((()=>{(0,u.LE)().isPremium().then(e).catch((()=>{}))}),[]),(0,d.useEffect)((()=>{(0,u.OA)().getEpics().then((t=>{o(t.epic)})).catch((()=>{}))}),[]),!t&&n){const{title:t,body:e,firstButton:o,secondButton:i}=n,c={title:t,body:e,firstButton:o,secondButton:i};return(0,r.jsx)("div",{css:S,children:(0,r.jsx)(m,v({},c))})}return null},S=(0,o.css)(B(),i.HT.wide,c.L[3],(0,l.M)("--apps-epic-border"),(0,l.M)("--apps-epic-background"),(0,l.M)("--apps-epic-text"),c.L[3],s.Ni,s.muz,c.L[3],c.L[3],c.L[9],a.M.brandAlt[400],s.NA0,a.M.brandAlt[400],a.M.brand[400],c.L[3],c.L[3])},42631:(t,e,n)=>{"use strict";n.d(e,{OA:()=>L,IC:()=>Q,GR:()=>j,QF:()=>q,Dq:()=>I,yY:()=>z,_5:()=>K,ud:()=>V,U:()=>T,yV:()=>N,LE:()=>_,FA:()=>R});var r=n(13011),o=n(96831),i=n(86293),c=n(99895),s=n(65490),a=n(89993),d=n(85159),u=(n(47038),n(59517)),l=(n(29103),n(60579)),p=n(54703),h=n(69504),g=n(75271),f=n(9474),w=n(13213);function b(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}class m extends w.TProtocol{getTransport(){return this.concreteProtocol.getTransport()}flush(){return this.concreteProtocol.flush()}writeMessageBegin(t,e,n){return this.concreteProtocol.writeMessageBegin(t,e,n)}writeMessageEnd(){return this.concreteProtocol.writeMessageEnd()}writeStructBegin(t){return this.concreteProtocol.writeStructBegin(t)}writeStructEnd(){return this.concreteProtocol.writeStructEnd()}writeFieldBegin(t,e,n){return this.concreteProtocol.writeFieldBegin(t,e,n)}writeFieldEnd(){return this.concreteProtocol.writeFieldEnd()}writeFieldStop(){return this.concreteProtocol.writeFieldStop()}writeMapBegin(t,e,n){return this.concreteProtocol.writeMapBegin(t,e,n)}writeMapEnd(){return this.concreteProtocol.writeMapEnd()}writeListBegin(t,e){return this.concreteProtocol.writeListBegin(t,e)}writeListEnd(){return this.concreteProtocol.writeListEnd()}writeSetBegin(t,e){return this.concreteProtocol.writeSetBegin(t,e)}writeSetEnd(){return this.concreteProtocol.writeSetEnd()}writeBool(t){return this.concreteProtocol.writeBool(t)}writeByte(t){return this.concreteProtocol.writeByte(t)}writeI16(t){return this.concreteProtocol.writeI16(t)}writeI32(t){return this.concreteProtocol.writeI32(t)}writeI64(t){return this.concreteProtocol.writeI64(t)}writeDouble(t){return this.concreteProtocol.writeDouble(t)}writeString(t){return this.concreteProtocol.writeString(t)}writeBinary(t){return this.concreteProtocol.writeBinary(t)}readMessageBegin(){return this.concreteProtocol.readMessageBegin()}readMessageEnd(){return this.concreteProtocol.readMessageEnd()}readStructBegin(){return this.concreteProtocol.readStructBegin()}readStructEnd(){return this.concreteProtocol.readStructEnd()}readFieldBegin(){return this.concreteProtocol.readFieldBegin()}readFieldEnd(){return this.concreteProtocol.readFieldEnd()}readMapBegin(){return this.concreteProtocol.readMapBegin()}readMapEnd(){return this.concreteProtocol.readMapEnd()}readListBegin(){return this.concreteProtocol.readListBegin()}readListEnd(){return this.concreteProtocol.readListEnd()}readSetBegin(){return this.concreteProtocol.readSetBegin()}readSetEnd(){return this.concreteProtocol.readSetEnd()}readBool(){return this.concreteProtocol.readBool()}readByte(){return this.concreteProtocol.readByte()}readI16(){return this.concreteProtocol.readI16()}readI32(){return this.concreteProtocol.readI32()}readI64(){return this.concreteProtocol.readI64()}readDouble(){return this.concreteProtocol.readDouble()}readBinary(){return this.concreteProtocol.readBinary()}readString(){return this.concreteProtocol.readString()}skip(t){return this.concreteProtocol.skip(t)}constructor(t){super(t.getTransport()),b(this,"concreteProtocol",void 0),this.concreteProtocol=t}}class P extends m{writeMessageBegin(t,e,n){e===w.MessageType.CALL||e===w.MessageType.ONEWAY?super.writeMessageBegin(this.serviceName+P.separator+t,e,n):super.writeMessageBegin(t,e,n)}constructor(t,e){super(t),b(this,"serviceName",void 0),this.serviceName=e}}function v(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function B(t){window.android?window.android.postMessage(t.data,t.connectionId):window.webkit?window.webkit.messageHandlers.iOSWebViewMessage.postMessage(t):console.warn("No native APIs available")}b(P,"separator",":");let E=1;const S=()=>"connection-".concat(E++);class x extends w.ThriftConnection{reset(t){if(t===this.connectionId&&window.nativeConnections){console.warn("Reseting connection "+t),delete window.nativeConnections[this.connectionId];for(const t of this.promises)t.reject(new w.TApplicationException(w.TApplicationExceptionType.UNKNOWN,"Timeout error"));this.promises=[],this.connectionId=S(),window.nativeConnections[this.connectionId]=this}}receive(t){const e=this.promises.shift();if(e){clearTimeout(e.timeoutId);const n=Buffer.from(t.data,"base64");e.resolve(n)}this.sendNextMessage()}sendNextMessage(){const t=this.outBuffer.shift();t&&(console.log("Sending next message"),B(t))}send(t){const e=this.connectionId,n=this;return new Promise((function(r,o){n.promises.push({resolve:r,reject:o,timeoutId:setTimeout((function(){n.reset(e)}),3e4)});const i={data:t.toString("base64"),connectionId:e};1===n.promises.length?(console.log("Sending message immediately"),B(i)):(console.log("Queing message because others in flight"),n.outBuffer.push(i))}))}constructor(t,e){var n;super(t,e),v(this,"connectionId",S()),v(this,"promises",[]),v(this,"outBuffer",[]),"undefined"!=typeof window&&(window.nativeConnections=null!==(n=window.nativeConnections)&&void 0!==n?n:{},window.nativeConnections[this.connectionId]=this)}}function y(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"buffered",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"compact";const r=new x((0,w.getTransport)(e),class extends P{constructor(e){var r;super(new((0,w.getProtocol)(n))(e),null!==(r=t.serviceName)&&void 0!==r?r:"")}});return new t(r)}let M;const I=()=>((0,f.b)(M)&&(M=y(s.Client,"buffered","compact")),M);let C;const j=()=>((0,f.b)(C)&&(C=y(i.Client,"buffered","compact")),C);let O;const L=()=>(O||(O=y(r.Client,"buffered","compact")),O);let k;const T=()=>(k||(k=y(l.Client,"buffered","compact")),k);let A;const N=()=>(A||(A=y(p.Client,"buffered","compact")),A);let F;const _=()=>(F||(F=y(h.Client,"buffered","compact")),F);let D;const z=()=>(D||(D=y(a.Client,"buffered","compact")),D);let H;const R=()=>(H||(H=y(g.Client,"buffered","compact")),H);let W;const Q=()=>(W||(W=y(o.Client,"buffered","compact")),W);let U;const V=()=>(U||(U=y(u.Client,"buffered","compact")),U);let Y;const q=()=>(Y||(Y=y(c.Client,"buffered","compact")),Y);let G;const K=()=>(G||(G=y(d.Client,"buffered","compact")),G)},58452:(t,e,n)=>{"use strict";n.d(e,{E:()=>c});var r=n(44165),o=n.n(r),i=n(67400);const c=t=>{const[e,n]=(0,i.useState)(!1);var r;const[c,s]=(0,i.useState)(null!==(r=t.node)&&void 0!==r?r:null),a=(0,i.useRef)(null),d=(0,i.useCallback)((e=>{let[r]=e;r&&(r.isIntersecting?n(!0):t.repeat&&n(!1))}),[t.repeat]),u=t.debounce?o()(d,200):d;return(0,i.useEffect)((()=>{t.node&&s(t.node)}),[t.node]),(0,i.useEffect)((()=>{if(c&&"IntersectionObserver"in window)return a.current=new window.IntersectionObserver(u,t),a.current.observe(c),()=>{var t;return null===(t=a.current)||void 0===t?void 0:t.disconnect()}}),[c,t,u]),(0,i.useEffect)((()=>{var n;!t.repeat&&e&&(null===(n=a.current)||void 0===n||n.disconnect())}),[e,t.repeat]),[e,s]}},53694:(t,e,n)=>{"use strict";n.d(e,{M:()=>r});const r=t=>"var(".concat(t,")")},50150:()=>{}}]);
//# sourceMappingURL=AppsEpic-importable.client.web.33f20cee440e69359f2c.js.map