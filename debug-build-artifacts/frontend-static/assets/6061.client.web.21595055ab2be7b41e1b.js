"use strict";(self.webpackChunk_guardian_dotcom_rendering=self.webpackChunk_guardian_dotcom_rendering||[]).push([[6061],{46061:(e,t,n)=>{function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},i=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),i.forEach((function(t){s(e,t,n[t])}))}return e}n.d(t,{BpQ:()=>I,Ikc:()=>j,KCZ:()=>z,KIO:()=>P,Km6:()=>w,L5J:()=>S,Oxt:()=>Z,PVZ:()=>O,YOg:()=>x,YjP:()=>R,aig:()=>_,euz:()=>m,h1I:()=>q,lqM:()=>$,mee:()=>k,pdi:()=>D,xLC:()=>C,zMY:()=>E});var r,u,o,a,p=class extends Error{constructor(e){super(e[0].message),s(this,"issues",void 0),this.name="ValiError",this.issues=e}};function l(e,t){return Array.isArray(e)?[void 0,e]:[e,t]}function c(e,t,n,s){var i,r,p,l,c;const d=null!==(c=null!==(l=null!==(p=null!==(r=null!==(i=e.message)&&void 0!==i?i:function(e,t){var n;return null==a||null===(n=a.get(e))||void 0===n?void 0:n.get(t)}(t,s.lang))&&void 0!==r?r:"type"===e.type?(f=s.lang,null==o?void 0:o.get(f)):null)&&void 0!==p?p:null==n?void 0:n.message)&&void 0!==l?l:function(e){return null==u?void 0:u.get(e)}(s.lang))&&void 0!==c?c:s.message;var f;return"function"==typeof d?d(s):d}function d(e,t,n){return{typed:e,output:t,issues:n}}function f(e){let t=typeof e;return"object"===t&&(t=e?Object.getPrototypeOf(e).constructor.name:"null"),"string"===t?'"'.concat(e,'"'):"number"===t||"bigint"===t||"boolean"===t?"".concat(e):t}function y(e,t,n){var s;const i=null!==(s=n.received)&&void 0!==s?s:f(n.input),r={reason:e.type,context:n.context.type,expected:n.context.expects,received:i,message:"Invalid ".concat(n.label,": ").concat(n.context.expects?"Expected ".concat(n.context.expects," but r"):"R","eceived ").concat(i),input:n.input,requirement:n.context.requirement,path:n.path,lang:null==t?void 0:t.lang,abortEarly:null==t?void 0:t.abortEarly,abortPipeEarly:null==t?void 0:t.abortPipeEarly,skipPipe:null==t?void 0:t.skipPipe};return r.message=c(n.context,n.reference,t,r),r}function h(e,t,n,s){if(e.pipe&&!(null==n?void 0:n.skipPipe))for(const i of e.pipe){const r=i._parse(t);if(r.issues){for(const t of r.issues){const i=y(e,n,t);s?s.push(i):s=[i]}if((null==n?void 0:n.abortEarly)||(null==n?void 0:n.abortPipeEarly))break}else t=r.output}return d(!0,t,s)}function g(e,t,n){if(!e||"object"==typeof e&&!Array.isArray(e)){const[s,i]=l(t,n);return[e,s,i]}const[s,i]=l(e,t);return[void 0,s,i]}function v(e,t,n,s,i){const r=f(n);var u;const o=null!==(u=null==i?void 0:i.expected)&&void 0!==u?u:e.expects;var a;const p={reason:null!==(a=null==i?void 0:i.reason)&&void 0!==a?a:"type",context:e.type,expected:o,received:r,message:"Invalid type: Expected ".concat(o," but received ").concat(r),input:n,path:null==i?void 0:i.path,issues:null==i?void 0:i.issues,lang:null==s?void 0:s.lang,abortEarly:null==s?void 0:s.abortEarly,abortPipeEarly:null==s?void 0:s.abortPipeEarly,skipPipe:null==s?void 0:s.skipPipe};return p.message=c(e,t,s,p),{typed:!1,output:n,issues:[p]}}function b(e){return"function"==typeof e.default?e.default():e.default}function x(e,t,n){const[s,i]=l(t,n);return{type:"array",expects:"Array",async:!1,item:e,message:s,pipe:i,_parse(e,t){if(Array.isArray(e)){let n,s=!0;const i=[];for(let r=0;r<e.length;r++){const u=e[r],o=this.item._parse(u,t);if(o.issues){const i={type:"array",origin:"value",input:e,key:r,value:u};for(const e of o.issues)e.path?e.path.unshift(i):e.path=[i],null==n||n.push(e);if(n||(n=o.issues),null==t?void 0:t.abortEarly){s=!1;break}}o.typed||(s=!1),i.push(o.output)}return s?h(this,i,t,n):d(!1,i,n)}return v(this,x,e,t)}}}function E(e,t){const[n,s]=l(e,t);return{type:"boolean",expects:"boolean",async:!1,message:n,pipe:s,_parse(e,t){return"boolean"==typeof e?h(this,e,t):v(this,E,e,t)}}}function m(e,t){return{type:"literal",expects:f(e),async:!1,literal:e,message:t,_parse(e,t){return e===this.literal?d(!0,e):v(this,m,e,t)}}}function k(e,t){return{type:"nullable",expects:"".concat(e.expects," | null"),async:!1,wrapped:e,default:t,_parse(e,t){if(null===e){const t=b(this);if(void 0===t)return d(!0,e);e=t}return this.wrapped._parse(e,t)}}}function _(e,t){const[n,s]=l(e,t);return{type:"number",expects:"number",async:!1,message:n,pipe:s,_parse(e,t){return"number"!=typeof e||isNaN(e)?v(this,_,e,t):h(this,e,t)}}}function j(e,t,n,s){const[i,r,u]=g(t,n,s);let o;return{type:"object",expects:"Object",async:!1,entries:e,rest:i,message:r,pipe:u,_parse(e,t){if(e&&"object"==typeof e){o=null!=o?o:Object.entries(this.entries);let n,s=!0;const i={};for(const[r,u]of o){const o=e[r],a=u._parse(o,t);if(a.issues){const i={type:"object",origin:"value",input:e,key:r,value:o};for(const e of a.issues)e.path?e.path.unshift(i):e.path=[i],null==n||n.push(e);if(n||(n=a.issues),null==t?void 0:t.abortEarly){s=!1;break}}a.typed||(s=!1),(void 0!==a.output||r in e)&&(i[r]=a.output)}if(this.rest&&(!(null==t?void 0:t.abortEarly)||!n))for(const r in e)if(!(r in this.entries)){const u=e[r],o=this.rest._parse(u,t);if(o.issues){const i={type:"object",origin:"value",input:e,key:r,value:u};for(const e of o.issues)e.path?e.path.unshift(i):e.path=[i],null==n||n.push(e);if(n||(n=o.issues),null==t?void 0:t.abortEarly){s=!1;break}}o.typed||(s=!1),i[r]=o.output}return s?h(this,i,t,n):d(!1,i,n)}return v(this,j,e,t)}}}function $(e,t){return{type:"optional",expects:"".concat(e.expects," | undefined"),async:!1,wrapped:e,default:t,_parse(e,t){if(void 0===e){const t=b(this);if(void 0===t)return d(!0,e);e=t}return this.wrapped._parse(e,t)}}}function P(e,t){return{type:"picklist",expects:e.map(f).join(" | "),async:!1,options:e,message:t,_parse(e,t){return this.options.includes(e)?d(!0,e):v(this,P,e,t)}}}function R(e,t){const[n,s]=l(e,t);return{type:"string",expects:"string",async:!1,message:n,pipe:s,_parse(e,t){return"string"==typeof e?h(this,e,t):v(this,R,e,t)}}}function O(e,t,n,s){const[i,r,u]=g(t,n,s);return{type:"tuple",expects:"Array",async:!1,items:e,rest:i,message:r,pipe:u,_parse(e,t){if(Array.isArray(e)){let n,s=!0;const i=[];for(let r=0;r<this.items.length;r++){const u=e[r],o=this.items[r]._parse(u,t);if(o.issues){const i={type:"tuple",origin:"value",input:e,key:r,value:u};for(const e of o.issues)e.path?e.path.unshift(i):e.path=[i],null==n||n.push(e);if(n||(n=o.issues),null==t?void 0:t.abortEarly){s=!1;break}}o.typed||(s=!1),i[r]=o.output}if(this.rest&&(!(null==t?void 0:t.abortEarly)||!n))for(let r=this.items.length;r<e.length;r++){const u=e[r],o=this.rest._parse(u,t);if(o.issues){const i={type:"tuple",origin:"value",input:e,key:r,value:u};for(const e of o.issues)e.path?e.path.unshift(i):e.path=[i],null==n||n.push(e);if(n||(n=o.issues),null==t?void 0:t.abortEarly){s=!1;break}}o.typed||(s=!1),i[r]=o.output}return s?h(this,i,t,n):d(!1,i,n)}return v(this,O,e,t)}}}function w(e){return{type:"undefined",expects:"undefined",async:!1,message:e,_parse(e,t){return void 0===e?d(!0,e):v(this,w,e,t)}}}function A(e){let t;if(e)for(const n of e)if(t)for(const e of n.issues)t.push(e);else t=n.issues;return t}function z(e,t,n){const[s,i]=l(t,n);return{type:"union",expects:[...new Set(e.map((e=>e.expects)))].join(" | "),async:!1,options:e,message:s,pipe:i,_parse(e,t){let n,s,i;for(const r of this.options){const u=r._parse(e,t);if(u.typed){if(!u.issues){n=u;break}i?i.push(u):i=[u]}else s?s.push(u):s=[u]}if(n)return h(this,n.output,t);if(null==i?void 0:i.length){const n=i[0];return h(this,n.output,t,1===i.length?n.issues:v(this,z,e,t,{reason:"union",issues:A(i)}).issues)}return 1===(null==s?void 0:s.length)?s[0]:v(this,z,e,t,{issues:A(s)})}}}function S(e){return{type:"unknown",expects:"unknown",async:!1,pipe:e,_parse(e,t){return h(this,e,t)}}}function Z(e,t,n,s){const[i,r]=l(n,s);let u;return{type:"variant",expects:"Object",async:!1,key:e,options:t,message:i,pipe:r,_parse(e,t){if(e&&"object"==typeof e){if(this.key in e||!u){let n,s;const i=r=>{for(const o of r)if("object"===o.type){const i=o.entries[this.key],r=i._parse(e[this.key],t);if(u||(n?n.push(i.expects):n=[i.expects]),!r.issues){const n=o._parse(e,t);if(!n.issues){s=n;break}(!s||!s.typed&&n.typed)&&(s=n)}}else if("variant"===o.type&&(i(o.options),s&&!s.issues))break};if(i(this.options),u=u||[...new Set(n)].join(" | "),s)return s.typed?h(this,s.output,t,s.issues):s}const n=e[this.key];return v(this,Z,n,t,{expected:u,path:[{type:"object",origin:"value",input:e,key:this.key,value:n}]})}return v(this,Z,e,t)}}}function q(e,t,n,s){const[r,u,o]=g(t,n,s);return j(e.reduce(((e,t)=>i({},e,t.entries)),{}),r,u,o)}function C(e,t,n){const s=e._parse(t,function(e){var t,n,s,i;return{lang:null!==(t=null==e?void 0:e.lang)&&void 0!==t?t:null==r?void 0:r.lang,message:null==e?void 0:e.message,abortEarly:null!==(n=null==e?void 0:e.abortEarly)&&void 0!==n?n:null==r?void 0:r.abortEarly,abortPipeEarly:null!==(s=null==e?void 0:e.abortPipeEarly)&&void 0!==s?s:null==r?void 0:r.abortPipeEarly,skipPipe:null!==(i=null==e?void 0:e.skipPipe)&&void 0!==i?i:null==r?void 0:r.skipPipe}}(n));return{typed:s.typed,success:!s.issues,data:s.output,output:s.output,error:s.issues&&new p(s.issues),issues:s.issues}}function D(e,t,n){return s=i({},e),r=null!=(r={_parse(s,i){const r=e._parse(s,i);return r.typed?(r.output=t(r.output,{issues:r.issues}),r.issues||!n?r:Array.isArray(n)?h({type:typeof r.output,pipe:n},r.output,i):n._parse(r.output,i)):r}})?r:{},Object.getOwnPropertyDescriptors?Object.defineProperties(s,Object.getOwnPropertyDescriptors(r)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);n.push.apply(n,s)}return n}(Object(r)).forEach((function(e){Object.defineProperty(s,e,Object.getOwnPropertyDescriptor(r,e))})),s;var s,r}function I(e,t){return{type:"min_length",expects:">=".concat(e),async:!1,message:t,requirement:e,_parse(e){return e.length>=this.requirement?{output:e}:function(e,t,n,s,i){return{issues:[{context:e,reference:t,input:n,label:s,received:i}]}}(this,I,e,"length","".concat(e.length))}}}Symbol("brand"),RegExp("\\D","gu"),RegExp("^[A-Z]{6}(?!00)[A-Z\\d]{2}(?:[A-Z\\d]{3})?$","u"),RegExp("^[a-z][\\da-z]*$","u"),RegExp("^\\d+$","u"),RegExp("^[\\w+-]+(?:\\.[\\w+-]+)*@[\\da-z]+(?:[.-][\\da-z]+)*\\.[a-z]{2,}$","iu"),RegExp("^[\\p{Extended_Pictographic}\\p{Emoji_Component}]+$","u"),RegExp("^(0h|0x)?[\\da-f]+$","iu"),RegExp("^#([\\da-f]{3}|[\\da-f]{4}|[\\da-f]{6}|[\\da-f]{8})$","iu"),RegExp("^\\d{2}(?:[ /|-]?\\d{6}){2}[ /|-]?\\d$","u"),RegExp("^(?:(?:[1-9]|1\\d|2[0-4])?\\d|25[0-5])(?:\\.(?:(?:[1-9]|1\\d|2[0-4])?\\d|25[0-5])){3}$","u"),RegExp("^(?:(?:[\\da-f]{1,4}:){7}[\\da-f]{1,4}|(?:[\\da-f]{1,4}:){1,7}:|(?:[\\da-f]{1,4}:){1,6}:[\\da-f]{1,4}|(?:[\\da-f]{1,4}:){1,5}(?::[\\da-f]{1,4}){1,2}|(?:[\\da-f]{1,4}:){1,4}(?::[\\da-f]{1,4}){1,3}|(?:[\\da-f]{1,4}:){1,3}(?::[\\da-f]{1,4}){1,4}|(?:[\\da-f]{1,4}:){1,2}(?::[\\da-f]{1,4}){1,5}|[\\da-f]{1,4}:(?::[\\da-f]{1,4}){1,6}|:(?:(?::[\\da-f]{1,4}){1,7}|:)|fe80:(?::[\\da-f]{0,4}){0,4}%[\\da-z]+|::(?:f{4}(?::0{1,4})?:)?(?:(?:25[0-5]|(?:2[0-4]|1?\\d)?\\d)\\.){3}(?:25[0-5]|(?:2[0-4]|1?\\d)?\\d)|(?:[\\da-f]{1,4}:){1,4}:(?:(?:25[0-5]|(?:2[0-4]|1?\\d)?\\d)\\.){3}(?:25[0-5]|(?:2[0-4]|1?\\d)?\\d))$","iu"),RegExp("^\\d{4}-(?:0[1-9]|1[0-2])-(?:[12]\\d|0[1-9]|3[01])$","u"),RegExp("^\\d{4}-(?:0[1-9]|1[0-2])-(?:[12]\\d|0[1-9]|3[01])T(?:0\\d|1\\d|2[0-3]):[0-5]\\d$","u"),RegExp("^(?:0\\d|1\\d|2[0-3]):[0-5]\\d$","u"),RegExp("^(?:0\\d|1\\d|2[0-3])(?::[0-5]\\d){2}$","u"),RegExp("^\\d{4}-(?:0[1-9]|1[0-2])-(?:[12]\\d|0[1-9]|3[01])T(?:0\\d|1\\d|2[0-3])(?::[0-5]\\d){2}(?:\\.\\d{1,9})?Z$","u"),RegExp("^\\d{4}-W(?:0[1-9]|[1-4]\\d|5[0-3])$","u"),RegExp("^(?:[\\da-f]{2}:){5}[\\da-f]{2}$|^(?:[\\da-f]{2}-){5}[\\da-f]{2}$|^(?:[\\da-f]{4}\\.){2}[\\da-f]{4}$","iu"),RegExp("^(?:[\\da-f]{2}:){7}[\\da-f]{2}$|^(?:[\\da-f]{2}-){7}[\\da-f]{2}$|^(?:[\\da-f]{4}\\.){3}[\\da-f]{4}$|^(?:[\\da-f]{4}:){3}[\\da-f]{4}$","iu"),RegExp("^(0o)?[0-7]+$","iu"),RegExp("^[\\da-hjkmnp-tv-z]{26}$","iu"),RegExp("^[\\da-f]{8}(?:-[\\da-f]{4}){3}-[\\da-f]{12}$","iu"),RegExp("[- ]+","gu"),RegExp("^3[47]\\d{13}$","u"),RegExp("^3(?:0[0-5]|[68]\\d)\\d{11}$","u"),RegExp("^6(?:011|5\\d{2})\\d{12,15}$","u"),RegExp("^(?:2131|1800|35\\d{3})\\d{11}$","u"),RegExp("^5[1-5]\\d{2}|(222\\d|22[3-9]\\d|2[3-6]\\d{2}|27[01]\\d|2720)\\d{12}$","u"),RegExp("^(6[27]\\d{14}|81\\d{14,17})$","u"),RegExp("^4\\d{12}(?:\\d{3,6})?$","u")}}]);
//# sourceMappingURL=6061.client.web.21595055ab2be7b41e1b.js.map