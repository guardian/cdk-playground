(self.webpackChunk_guardian_dotcom_rendering=self.webpackChunk_guardian_dotcom_rendering||[]).push([[3988],{93980:(e,t,r)=>{"use strict";r.r(t),r.d(t,{AppsFooter:()=>v});var o=r(50484),n=r(24017),i=r(7351),c=r(96378),s=r(4383),a=r(67400),d=r(42631),l=r(53694);function u(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function h(){const e=u(["\n\t","\n\tpadding: "," ",";\n\tbackground-color: ",";\n"]);return h=function(){return e},e}function g(){const e=u(["\n\t",";\n\tcolor: ",";\n\n\t:active,\n\t:hover {\n\t\tcolor: ",";\n\t}\n"]);return g=function(){return e},e}const p=(new Date).getFullYear(),w=(0,n.css)(h(),i.PSs,c.L[4],c.L[3],(0,l.M)("--apps-footer-background")),f=(0,n.css)(g(),i.PSs,(0,l.M)("--apps-footer-links-text"),(0,l.M)("--apps-footer-links-text-hover")),P=e=>{let{isCcpa:t,privacySettingsClickHandler:r}=e;return t?(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.v,{priority:"secondary",onClick:r,cssOverrides:f,children:"California Residents - Do Not Sell"})," · "]}):(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.v,{priority:"secondary",onClick:r,cssOverrides:f,children:"Privacy Settings"})," · "]})},v=()=>{const[e,t]=(0,a.useState)(!1);return(0,a.useEffect)((()=>{(0,d.LE)().doesCcpaApply().then(t).catch((()=>{}))}),[]),(0,o.jsxs)("div",{css:w,children:["© ",p," Guardian News and Media Limited or its affiliated companies. All rights reserved. (dcar)",(0,o.jsx)("br",{}),(0,o.jsx)(P,{isCcpa:e,privacySettingsClickHandler:e=>{e.preventDefault(),(0,d.ud)().openPrivacySettings().catch((()=>{}))}}),(0,o.jsx)(s.v,{priority:"secondary",onClick:e=>{e.preventDefault(),(0,d.ud)().openPrivacyPolicy().catch((()=>{}))},cssOverrides:f,children:"Privacy Policy"})]})}},42631:(e,t,r)=>{"use strict";r.d(t,{OA:()=>j,IC:()=>z,GR:()=>k,QF:()=>V,Dq:()=>I,yY:()=>H,_5:()=>K,ud:()=>Q,U:()=>T,yV:()=>O,LE:()=>D,FA:()=>W});var o=r(13011),n=r(96831),i=r(86293),c=r(99895),s=r(65490),a=r(89993),d=r(85159),l=(r(47038),r(59517)),u=(r(29103),r(60579)),h=r(54703),g=r(69504),p=r(75271),w=r(9474),f=r(13213);function P(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}class v extends f.TProtocol{getTransport(){return this.concreteProtocol.getTransport()}flush(){return this.concreteProtocol.flush()}writeMessageBegin(e,t,r){return this.concreteProtocol.writeMessageBegin(e,t,r)}writeMessageEnd(){return this.concreteProtocol.writeMessageEnd()}writeStructBegin(e){return this.concreteProtocol.writeStructBegin(e)}writeStructEnd(){return this.concreteProtocol.writeStructEnd()}writeFieldBegin(e,t,r){return this.concreteProtocol.writeFieldBegin(e,t,r)}writeFieldEnd(){return this.concreteProtocol.writeFieldEnd()}writeFieldStop(){return this.concreteProtocol.writeFieldStop()}writeMapBegin(e,t,r){return this.concreteProtocol.writeMapBegin(e,t,r)}writeMapEnd(){return this.concreteProtocol.writeMapEnd()}writeListBegin(e,t){return this.concreteProtocol.writeListBegin(e,t)}writeListEnd(){return this.concreteProtocol.writeListEnd()}writeSetBegin(e,t){return this.concreteProtocol.writeSetBegin(e,t)}writeSetEnd(){return this.concreteProtocol.writeSetEnd()}writeBool(e){return this.concreteProtocol.writeBool(e)}writeByte(e){return this.concreteProtocol.writeByte(e)}writeI16(e){return this.concreteProtocol.writeI16(e)}writeI32(e){return this.concreteProtocol.writeI32(e)}writeI64(e){return this.concreteProtocol.writeI64(e)}writeDouble(e){return this.concreteProtocol.writeDouble(e)}writeString(e){return this.concreteProtocol.writeString(e)}writeBinary(e){return this.concreteProtocol.writeBinary(e)}readMessageBegin(){return this.concreteProtocol.readMessageBegin()}readMessageEnd(){return this.concreteProtocol.readMessageEnd()}readStructBegin(){return this.concreteProtocol.readStructBegin()}readStructEnd(){return this.concreteProtocol.readStructEnd()}readFieldBegin(){return this.concreteProtocol.readFieldBegin()}readFieldEnd(){return this.concreteProtocol.readFieldEnd()}readMapBegin(){return this.concreteProtocol.readMapBegin()}readMapEnd(){return this.concreteProtocol.readMapEnd()}readListBegin(){return this.concreteProtocol.readListBegin()}readListEnd(){return this.concreteProtocol.readListEnd()}readSetBegin(){return this.concreteProtocol.readSetBegin()}readSetEnd(){return this.concreteProtocol.readSetEnd()}readBool(){return this.concreteProtocol.readBool()}readByte(){return this.concreteProtocol.readByte()}readI16(){return this.concreteProtocol.readI16()}readI32(){return this.concreteProtocol.readI32()}readI64(){return this.concreteProtocol.readI64()}readDouble(){return this.concreteProtocol.readDouble()}readBinary(){return this.concreteProtocol.readBinary()}readString(){return this.concreteProtocol.readString()}skip(e){return this.concreteProtocol.skip(e)}constructor(e){super(e.getTransport()),P(this,"concreteProtocol",void 0),this.concreteProtocol=e}}class m extends v{writeMessageBegin(e,t,r){t===f.MessageType.CALL||t===f.MessageType.ONEWAY?super.writeMessageBegin(this.serviceName+m.separator+e,t,r):super.writeMessageBegin(e,t,r)}constructor(e,t){super(e),P(this,"serviceName",void 0),this.serviceName=t}}function B(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function b(e){window.android?window.android.postMessage(e.data,e.connectionId):window.webkit?window.webkit.messageHandlers.iOSWebViewMessage.postMessage(e):console.warn("No native APIs available")}P(m,"separator",":");let S=1;const y=()=>"connection-".concat(S++);class C extends f.ThriftConnection{reset(e){if(e===this.connectionId&&window.nativeConnections){console.warn("Reseting connection "+e),delete window.nativeConnections[this.connectionId];for(const e of this.promises)e.reject(new f.TApplicationException(f.TApplicationExceptionType.UNKNOWN,"Timeout error"));this.promises=[],this.connectionId=y(),window.nativeConnections[this.connectionId]=this}}receive(e){const t=this.promises.shift();if(t){clearTimeout(t.timeoutId);const r=Buffer.from(e.data,"base64");t.resolve(r)}this.sendNextMessage()}sendNextMessage(){const e=this.outBuffer.shift();e&&(console.log("Sending next message"),b(e))}send(e){const t=this.connectionId,r=this;return new Promise((function(o,n){r.promises.push({resolve:o,reject:n,timeoutId:setTimeout((function(){r.reset(t)}),3e4)});const i={data:e.toString("base64"),connectionId:t};1===r.promises.length?(console.log("Sending message immediately"),b(i)):(console.log("Queing message because others in flight"),r.outBuffer.push(i))}))}constructor(e,t){var r;super(e,t),B(this,"connectionId",y()),B(this,"promises",[]),B(this,"outBuffer",[]),"undefined"!=typeof window&&(window.nativeConnections=null!==(r=window.nativeConnections)&&void 0!==r?r:{},window.nativeConnections[this.connectionId]=this)}}function M(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"buffered",r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"compact";const o=new C((0,f.getTransport)(t),class extends m{constructor(t){var o;super(new((0,f.getProtocol)(r))(t),null!==(o=e.serviceName)&&void 0!==o?o:"")}});return new e(o)}let E;const I=()=>((0,w.b)(E)&&(E=M(s.Client,"buffered","compact")),E);let x;const k=()=>((0,w.b)(x)&&(x=M(i.Client,"buffered","compact")),x);let F;const j=()=>(F||(F=M(o.Client,"buffered","compact")),F);let L;const T=()=>(L||(L=M(u.Client,"buffered","compact")),L);let N;const O=()=>(N||(N=M(h.Client,"buffered","compact")),N);let A;const D=()=>(A||(A=M(g.Client,"buffered","compact")),A);let _;const H=()=>(_||(_=M(a.Client,"buffered","compact")),_);let R;const W=()=>(R||(R=M(p.Client,"buffered","compact")),R);let Y;const z=()=>(Y||(Y=M(n.Client,"buffered","compact")),Y);let G;const Q=()=>(G||(G=M(l.Client,"buffered","compact")),G);let U;const V=()=>(U||(U=M(c.Client,"buffered","compact")),U);let q;const K=()=>(q||(q=M(d.Client,"buffered","compact")),q)},53694:(e,t,r)=>{"use strict";r.d(t,{M:()=>o});const o=e=>"var(".concat(e,")")},50150:()=>{}}]);
//# sourceMappingURL=AppsFooter-importable.client.web.31b7d9a7d6449c96e161.js.map