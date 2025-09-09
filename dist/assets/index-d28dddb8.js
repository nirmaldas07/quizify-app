(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function r(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(a){if(a.ep)return;a.ep=!0;const o=r(a);fetch(a.href,o)}})();var qm=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function ru(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var su={exports:{}},xo={},au={exports:{}},xe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ws=Symbol.for("react.element"),Qm=Symbol.for("react.portal"),Wm=Symbol.for("react.fragment"),Gm=Symbol.for("react.strict_mode"),Hm=Symbol.for("react.profiler"),Km=Symbol.for("react.provider"),Xm=Symbol.for("react.context"),Vm=Symbol.for("react.forward_ref"),Jm=Symbol.for("react.suspense"),Zm=Symbol.for("react.memo"),ef=Symbol.for("react.lazy"),wc=Symbol.iterator;function tf(e){return e===null||typeof e!="object"?null:(e=wc&&e[wc]||e["@@iterator"],typeof e=="function"?e:null)}var ou={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},iu=Object.assign,lu={};function Gr(e,t,r){this.props=e,this.context=t,this.refs=lu,this.updater=r||ou}Gr.prototype.isReactComponent={};Gr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Gr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function cu(){}cu.prototype=Gr.prototype;function pl(e,t,r){this.props=e,this.context=t,this.refs=lu,this.updater=r||ou}var xl=pl.prototype=new cu;xl.constructor=pl;iu(xl,Gr.prototype);xl.isPureReactComponent=!0;var jc=Array.isArray,du=Object.prototype.hasOwnProperty,gl={current:null},uu={key:!0,ref:!0,__self:!0,__source:!0};function mu(e,t,r){var s,a={},o=null,i=null;if(t!=null)for(s in t.ref!==void 0&&(i=t.ref),t.key!==void 0&&(o=""+t.key),t)du.call(t,s)&&!uu.hasOwnProperty(s)&&(a[s]=t[s]);var l=arguments.length-2;if(l===1)a.children=r;else if(1<l){for(var c=Array(l),u=0;u<l;u++)c[u]=arguments[u+2];a.children=c}if(e&&e.defaultProps)for(s in l=e.defaultProps,l)a[s]===void 0&&(a[s]=l[s]);return{$$typeof:Ws,type:e,key:o,ref:i,props:a,_owner:gl.current}}function nf(e,t){return{$$typeof:Ws,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function vl(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ws}function rf(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(r){return t[r]})}var Nc=/\/+/g;function zo(e,t){return typeof e=="object"&&e!==null&&e.key!=null?rf(""+e.key):t.toString(36)}function Ea(e,t,r,s,a){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(o){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case Ws:case Qm:i=!0}}if(i)return i=e,a=a(i),e=s===""?"."+zo(i,0):s,jc(a)?(r="",e!=null&&(r=e.replace(Nc,"$&/")+"/"),Ea(a,t,r,"",function(u){return u})):a!=null&&(vl(a)&&(a=nf(a,r+(!a.key||i&&i.key===a.key?"":(""+a.key).replace(Nc,"$&/")+"/")+e)),t.push(a)),1;if(i=0,s=s===""?".":s+":",jc(e))for(var l=0;l<e.length;l++){o=e[l];var c=s+zo(o,l);i+=Ea(o,t,r,c,a)}else if(c=tf(e),typeof c=="function")for(e=c.call(e),l=0;!(o=e.next()).done;)o=o.value,c=s+zo(o,l++),i+=Ea(o,t,r,c,a);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function ea(e,t,r){if(e==null)return e;var s=[],a=0;return Ea(e,s,"","",function(o){return t.call(r,o,a++)}),s}function sf(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(r){(e._status===0||e._status===-1)&&(e._status=1,e._result=r)},function(r){(e._status===0||e._status===-1)&&(e._status=2,e._result=r)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var kt={current:null},Ta={transition:null},af={ReactCurrentDispatcher:kt,ReactCurrentBatchConfig:Ta,ReactCurrentOwner:gl};function fu(){throw Error("act(...) is not supported in production builds of React.")}xe.Children={map:ea,forEach:function(e,t,r){ea(e,function(){t.apply(this,arguments)},r)},count:function(e){var t=0;return ea(e,function(){t++}),t},toArray:function(e){return ea(e,function(t){return t})||[]},only:function(e){if(!vl(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};xe.Component=Gr;xe.Fragment=Wm;xe.Profiler=Hm;xe.PureComponent=pl;xe.StrictMode=Gm;xe.Suspense=Jm;xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=af;xe.act=fu;xe.cloneElement=function(e,t,r){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var s=iu({},e.props),a=e.key,o=e.ref,i=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,i=gl.current),t.key!==void 0&&(a=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(c in t)du.call(t,c)&&!uu.hasOwnProperty(c)&&(s[c]=t[c]===void 0&&l!==void 0?l[c]:t[c])}var c=arguments.length-2;if(c===1)s.children=r;else if(1<c){l=Array(c);for(var u=0;u<c;u++)l[u]=arguments[u+2];s.children=l}return{$$typeof:Ws,type:e.type,key:a,ref:o,props:s,_owner:i}};xe.createContext=function(e){return e={$$typeof:Xm,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Km,_context:e},e.Consumer=e};xe.createElement=mu;xe.createFactory=function(e){var t=mu.bind(null,e);return t.type=e,t};xe.createRef=function(){return{current:null}};xe.forwardRef=function(e){return{$$typeof:Vm,render:e}};xe.isValidElement=vl;xe.lazy=function(e){return{$$typeof:ef,_payload:{_status:-1,_result:e},_init:sf}};xe.memo=function(e,t){return{$$typeof:Zm,type:e,compare:t===void 0?null:t}};xe.startTransition=function(e){var t=Ta.transition;Ta.transition={};try{e()}finally{Ta.transition=t}};xe.unstable_act=fu;xe.useCallback=function(e,t){return kt.current.useCallback(e,t)};xe.useContext=function(e){return kt.current.useContext(e)};xe.useDebugValue=function(){};xe.useDeferredValue=function(e){return kt.current.useDeferredValue(e)};xe.useEffect=function(e,t){return kt.current.useEffect(e,t)};xe.useId=function(){return kt.current.useId()};xe.useImperativeHandle=function(e,t,r){return kt.current.useImperativeHandle(e,t,r)};xe.useInsertionEffect=function(e,t){return kt.current.useInsertionEffect(e,t)};xe.useLayoutEffect=function(e,t){return kt.current.useLayoutEffect(e,t)};xe.useMemo=function(e,t){return kt.current.useMemo(e,t)};xe.useReducer=function(e,t,r){return kt.current.useReducer(e,t,r)};xe.useRef=function(e){return kt.current.useRef(e)};xe.useState=function(e){return kt.current.useState(e)};xe.useSyncExternalStore=function(e,t,r){return kt.current.useSyncExternalStore(e,t,r)};xe.useTransition=function(){return kt.current.useTransition()};xe.version="18.3.1";au.exports=xe;var d=au.exports;const wt=ru(d);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var of=d,lf=Symbol.for("react.element"),cf=Symbol.for("react.fragment"),df=Object.prototype.hasOwnProperty,uf=of.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,mf={key:!0,ref:!0,__self:!0,__source:!0};function hu(e,t,r){var s,a={},o=null,i=null;r!==void 0&&(o=""+r),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(i=t.ref);for(s in t)df.call(t,s)&&!mf.hasOwnProperty(s)&&(a[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps,t)a[s]===void 0&&(a[s]=t[s]);return{$$typeof:lf,type:e,key:o,ref:i,props:a,_owner:uf.current}}xo.Fragment=cf;xo.jsx=hu;xo.jsxs=hu;su.exports=xo;var n=su.exports,gi={},pu={exports:{}},Ft={},xu={exports:{}},gu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(M,I){var D=M.length;M.push(I);e:for(;0<D;){var L=D-1>>>1,T=M[L];if(0<a(T,I))M[L]=I,M[D]=T,D=L;else break e}}function r(M){return M.length===0?null:M[0]}function s(M){if(M.length===0)return null;var I=M[0],D=M.pop();if(D!==I){M[0]=D;e:for(var L=0,T=M.length,z=T>>>1;L<z;){var B=2*(L+1)-1,G=M[B],$=B+1,Z=M[$];if(0>a(G,D))$<T&&0>a(Z,G)?(M[L]=Z,M[$]=D,L=$):(M[L]=G,M[B]=D,L=B);else if($<T&&0>a(Z,D))M[L]=Z,M[$]=D,L=$;else break e}}return I}function a(M,I){var D=M.sortIndex-I.sortIndex;return D!==0?D:M.id-I.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var i=Date,l=i.now();e.unstable_now=function(){return i.now()-l}}var c=[],u=[],m=1,h=null,f=3,w=!1,x=!1,j=!1,S=typeof setTimeout=="function"?setTimeout:null,y=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(M){for(var I=r(u);I!==null;){if(I.callback===null)s(u);else if(I.startTime<=M)s(u),I.sortIndex=I.expirationTime,t(c,I);else break;I=r(u)}}function N(M){if(j=!1,v(M),!x)if(r(c)!==null)x=!0,K(C);else{var I=r(u);I!==null&&q(N,I.startTime-M)}}function C(M,I){x=!1,j&&(j=!1,y(p),p=-1),w=!0;var D=f;try{for(v(I),h=r(c);h!==null&&(!(h.expirationTime>I)||M&&!_());){var L=h.callback;if(typeof L=="function"){h.callback=null,f=h.priorityLevel;var T=L(h.expirationTime<=I);I=e.unstable_now(),typeof T=="function"?h.callback=T:h===r(c)&&s(c),v(I)}else s(c);h=r(c)}if(h!==null)var z=!0;else{var B=r(u);B!==null&&q(N,B.startTime-I),z=!1}return z}finally{h=null,f=D,w=!1}}var P=!1,E=null,p=-1,b=5,k=-1;function _(){return!(e.unstable_now()-k<b)}function R(){if(E!==null){var M=e.unstable_now();k=M;var I=!0;try{I=E(!0,M)}finally{I?F():(P=!1,E=null)}}else P=!1}var F;if(typeof g=="function")F=function(){g(R)};else if(typeof MessageChannel<"u"){var Q=new MessageChannel,V=Q.port2;Q.port1.onmessage=R,F=function(){V.postMessage(null)}}else F=function(){S(R,0)};function K(M){E=M,P||(P=!0,F())}function q(M,I){p=S(function(){M(e.unstable_now())},I)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(M){M.callback=null},e.unstable_continueExecution=function(){x||w||(x=!0,K(C))},e.unstable_forceFrameRate=function(M){0>M||125<M?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<M?Math.floor(1e3/M):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return r(c)},e.unstable_next=function(M){switch(f){case 1:case 2:case 3:var I=3;break;default:I=f}var D=f;f=I;try{return M()}finally{f=D}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(M,I){switch(M){case 1:case 2:case 3:case 4:case 5:break;default:M=3}var D=f;f=M;try{return I()}finally{f=D}},e.unstable_scheduleCallback=function(M,I,D){var L=e.unstable_now();switch(typeof D=="object"&&D!==null?(D=D.delay,D=typeof D=="number"&&0<D?L+D:L):D=L,M){case 1:var T=-1;break;case 2:T=250;break;case 5:T=1073741823;break;case 4:T=1e4;break;default:T=5e3}return T=D+T,M={id:m++,callback:I,priorityLevel:M,startTime:D,expirationTime:T,sortIndex:-1},D>L?(M.sortIndex=D,t(u,M),r(c)===null&&M===r(u)&&(j?(y(p),p=-1):j=!0,q(N,D-L))):(M.sortIndex=T,t(c,M),x||w||(x=!0,K(C))),M},e.unstable_shouldYield=_,e.unstable_wrapCallback=function(M){var I=f;return function(){var D=f;f=I;try{return M.apply(this,arguments)}finally{f=D}}}})(gu);xu.exports=gu;var ff=xu.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hf=d,Ot=ff;function re(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var vu=new Set,Ts={};function xr(e,t){Fr(e,t),Fr(e+"Capture",t)}function Fr(e,t){for(Ts[e]=t,e=0;e<t.length;e++)vu.add(t[e])}var yn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),vi=Object.prototype.hasOwnProperty,pf=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,kc={},Sc={};function xf(e){return vi.call(Sc,e)?!0:vi.call(kc,e)?!1:pf.test(e)?Sc[e]=!0:(kc[e]=!0,!1)}function gf(e,t,r,s){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return s?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function vf(e,t,r,s){if(t===null||typeof t>"u"||gf(e,t,r,s))return!0;if(s)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function St(e,t,r,s,a,o,i){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=s,this.attributeNamespace=a,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=i}var mt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){mt[e]=new St(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];mt[t]=new St(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){mt[e]=new St(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){mt[e]=new St(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){mt[e]=new St(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){mt[e]=new St(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){mt[e]=new St(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){mt[e]=new St(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){mt[e]=new St(e,5,!1,e.toLowerCase(),null,!1,!1)});var yl=/[\-:]([a-z])/g;function bl(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(yl,bl);mt[t]=new St(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(yl,bl);mt[t]=new St(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(yl,bl);mt[t]=new St(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){mt[e]=new St(e,1,!1,e.toLowerCase(),null,!1,!1)});mt.xlinkHref=new St("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){mt[e]=new St(e,1,!1,e.toLowerCase(),null,!0,!0)});function wl(e,t,r,s){var a=mt.hasOwnProperty(t)?mt[t]:null;(a!==null?a.type!==0:s||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(vf(t,r,a,s)&&(r=null),s||a===null?xf(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):a.mustUseProperty?e[a.propertyName]=r===null?a.type===3?!1:"":r:(t=a.attributeName,s=a.attributeNamespace,r===null?e.removeAttribute(t):(a=a.type,r=a===3||a===4&&r===!0?"":""+r,s?e.setAttributeNS(s,t,r):e.setAttribute(t,r))))}var kn=hf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ta=Symbol.for("react.element"),wr=Symbol.for("react.portal"),jr=Symbol.for("react.fragment"),jl=Symbol.for("react.strict_mode"),yi=Symbol.for("react.profiler"),yu=Symbol.for("react.provider"),bu=Symbol.for("react.context"),Nl=Symbol.for("react.forward_ref"),bi=Symbol.for("react.suspense"),wi=Symbol.for("react.suspense_list"),kl=Symbol.for("react.memo"),_n=Symbol.for("react.lazy"),wu=Symbol.for("react.offscreen"),Cc=Symbol.iterator;function ts(e){return e===null||typeof e!="object"?null:(e=Cc&&e[Cc]||e["@@iterator"],typeof e=="function"?e:null)}var Ye=Object.assign,Oo;function hs(e){if(Oo===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);Oo=t&&t[1]||""}return`
`+Oo+e}var Fo=!1;function $o(e,t){if(!e||Fo)return"";Fo=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var s=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){s=u}e.call(t.prototype)}else{try{throw Error()}catch(u){s=u}e()}}catch(u){if(u&&s&&typeof u.stack=="string"){for(var a=u.stack.split(`
`),o=s.stack.split(`
`),i=a.length-1,l=o.length-1;1<=i&&0<=l&&a[i]!==o[l];)l--;for(;1<=i&&0<=l;i--,l--)if(a[i]!==o[l]){if(i!==1||l!==1)do if(i--,l--,0>l||a[i]!==o[l]){var c=`
`+a[i].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=i&&0<=l);break}}}finally{Fo=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?hs(e):""}function yf(e){switch(e.tag){case 5:return hs(e.type);case 16:return hs("Lazy");case 13:return hs("Suspense");case 19:return hs("SuspenseList");case 0:case 2:case 15:return e=$o(e.type,!1),e;case 11:return e=$o(e.type.render,!1),e;case 1:return e=$o(e.type,!0),e;default:return""}}function ji(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case jr:return"Fragment";case wr:return"Portal";case yi:return"Profiler";case jl:return"StrictMode";case bi:return"Suspense";case wi:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case bu:return(e.displayName||"Context")+".Consumer";case yu:return(e._context.displayName||"Context")+".Provider";case Nl:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case kl:return t=e.displayName||null,t!==null?t:ji(e.type)||"Memo";case _n:t=e._payload,e=e._init;try{return ji(e(t))}catch{}}return null}function bf(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ji(t);case 8:return t===jl?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Hn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ju(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function wf(e){var t=ju(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),s=""+e[t];if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var a=r.get,o=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(i){s=""+i,o.call(this,i)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return s},setValue:function(i){s=""+i},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function na(e){e._valueTracker||(e._valueTracker=wf(e))}function Nu(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),s="";return e&&(s=ju(e)?e.checked?"true":"false":e.value),e=s,e!==r?(t.setValue(e),!0):!1}function Ya(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ni(e,t){var r=t.checked;return Ye({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function Ec(e,t){var r=t.defaultValue==null?"":t.defaultValue,s=t.checked!=null?t.checked:t.defaultChecked;r=Hn(t.value!=null?t.value:r),e._wrapperState={initialChecked:s,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function ku(e,t){t=t.checked,t!=null&&wl(e,"checked",t,!1)}function ki(e,t){ku(e,t);var r=Hn(t.value),s=t.type;if(r!=null)s==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(s==="submit"||s==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Si(e,t.type,r):t.hasOwnProperty("defaultValue")&&Si(e,t.type,Hn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Tc(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var s=t.type;if(!(s!=="submit"&&s!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function Si(e,t,r){(t!=="number"||Ya(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var ps=Array.isArray;function Ir(e,t,r,s){if(e=e.options,t){t={};for(var a=0;a<r.length;a++)t["$"+r[a]]=!0;for(r=0;r<e.length;r++)a=t.hasOwnProperty("$"+e[r].value),e[r].selected!==a&&(e[r].selected=a),a&&s&&(e[r].defaultSelected=!0)}else{for(r=""+Hn(r),t=null,a=0;a<e.length;a++){if(e[a].value===r){e[a].selected=!0,s&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function Ci(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(re(91));return Ye({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Pc(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(re(92));if(ps(r)){if(1<r.length)throw Error(re(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:Hn(r)}}function Su(e,t){var r=Hn(t.value),s=Hn(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),s!=null&&(e.defaultValue=""+s)}function Rc(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Cu(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ei(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Cu(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ra,Eu=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,r,s,a){MSApp.execUnsafeLocalFunction(function(){return e(t,r,s,a)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ra=ra||document.createElement("div"),ra.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ra.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Ps(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var vs={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},jf=["Webkit","ms","Moz","O"];Object.keys(vs).forEach(function(e){jf.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),vs[t]=vs[e]})});function Tu(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||vs.hasOwnProperty(e)&&vs[e]?(""+t).trim():t+"px"}function Pu(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var s=r.indexOf("--")===0,a=Tu(r,t[r],s);r==="float"&&(r="cssFloat"),s?e.setProperty(r,a):e[r]=a}}var Nf=Ye({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ti(e,t){if(t){if(Nf[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(re(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(re(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(re(61))}if(t.style!=null&&typeof t.style!="object")throw Error(re(62))}}function Pi(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ri=null;function Sl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var _i=null,Lr=null,Dr=null;function _c(e){if(e=Ks(e)){if(typeof _i!="function")throw Error(re(280));var t=e.stateNode;t&&(t=wo(t),_i(e.stateNode,e.type,t))}}function Ru(e){Lr?Dr?Dr.push(e):Dr=[e]:Lr=e}function _u(){if(Lr){var e=Lr,t=Dr;if(Dr=Lr=null,_c(e),t)for(e=0;e<t.length;e++)_c(t[e])}}function Au(e,t){return e(t)}function Iu(){}var Bo=!1;function Lu(e,t,r){if(Bo)return e(t,r);Bo=!0;try{return Au(e,t,r)}finally{Bo=!1,(Lr!==null||Dr!==null)&&(Iu(),_u())}}function Rs(e,t){var r=e.stateNode;if(r===null)return null;var s=wo(r);if(s===null)return null;r=s[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(e=e.type,s=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!s;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(re(231,t,typeof r));return r}var Ai=!1;if(yn)try{var ns={};Object.defineProperty(ns,"passive",{get:function(){Ai=!0}}),window.addEventListener("test",ns,ns),window.removeEventListener("test",ns,ns)}catch{Ai=!1}function kf(e,t,r,s,a,o,i,l,c){var u=Array.prototype.slice.call(arguments,3);try{t.apply(r,u)}catch(m){this.onError(m)}}var ys=!1,qa=null,Qa=!1,Ii=null,Sf={onError:function(e){ys=!0,qa=e}};function Cf(e,t,r,s,a,o,i,l,c){ys=!1,qa=null,kf.apply(Sf,arguments)}function Ef(e,t,r,s,a,o,i,l,c){if(Cf.apply(this,arguments),ys){if(ys){var u=qa;ys=!1,qa=null}else throw Error(re(198));Qa||(Qa=!0,Ii=u)}}function gr(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function Du(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Ac(e){if(gr(e)!==e)throw Error(re(188))}function Tf(e){var t=e.alternate;if(!t){if(t=gr(e),t===null)throw Error(re(188));return t!==e?null:e}for(var r=e,s=t;;){var a=r.return;if(a===null)break;var o=a.alternate;if(o===null){if(s=a.return,s!==null){r=s;continue}break}if(a.child===o.child){for(o=a.child;o;){if(o===r)return Ac(a),e;if(o===s)return Ac(a),t;o=o.sibling}throw Error(re(188))}if(r.return!==s.return)r=a,s=o;else{for(var i=!1,l=a.child;l;){if(l===r){i=!0,r=a,s=o;break}if(l===s){i=!0,s=a,r=o;break}l=l.sibling}if(!i){for(l=o.child;l;){if(l===r){i=!0,r=o,s=a;break}if(l===s){i=!0,s=o,r=a;break}l=l.sibling}if(!i)throw Error(re(189))}}if(r.alternate!==s)throw Error(re(190))}if(r.tag!==3)throw Error(re(188));return r.stateNode.current===r?e:t}function Mu(e){return e=Tf(e),e!==null?zu(e):null}function zu(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=zu(e);if(t!==null)return t;e=e.sibling}return null}var Ou=Ot.unstable_scheduleCallback,Ic=Ot.unstable_cancelCallback,Pf=Ot.unstable_shouldYield,Rf=Ot.unstable_requestPaint,Ve=Ot.unstable_now,_f=Ot.unstable_getCurrentPriorityLevel,Cl=Ot.unstable_ImmediatePriority,Fu=Ot.unstable_UserBlockingPriority,Wa=Ot.unstable_NormalPriority,Af=Ot.unstable_LowPriority,$u=Ot.unstable_IdlePriority,go=null,cn=null;function If(e){if(cn&&typeof cn.onCommitFiberRoot=="function")try{cn.onCommitFiberRoot(go,e,void 0,(e.current.flags&128)===128)}catch{}}var en=Math.clz32?Math.clz32:Mf,Lf=Math.log,Df=Math.LN2;function Mf(e){return e>>>=0,e===0?32:31-(Lf(e)/Df|0)|0}var sa=64,aa=4194304;function xs(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ga(e,t){var r=e.pendingLanes;if(r===0)return 0;var s=0,a=e.suspendedLanes,o=e.pingedLanes,i=r&268435455;if(i!==0){var l=i&~a;l!==0?s=xs(l):(o&=i,o!==0&&(s=xs(o)))}else i=r&~a,i!==0?s=xs(i):o!==0&&(s=xs(o));if(s===0)return 0;if(t!==0&&t!==s&&!(t&a)&&(a=s&-s,o=t&-t,a>=o||a===16&&(o&4194240)!==0))return t;if(s&4&&(s|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=s;0<t;)r=31-en(t),a=1<<r,s|=e[r],t&=~a;return s}function zf(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Of(e,t){for(var r=e.suspendedLanes,s=e.pingedLanes,a=e.expirationTimes,o=e.pendingLanes;0<o;){var i=31-en(o),l=1<<i,c=a[i];c===-1?(!(l&r)||l&s)&&(a[i]=zf(l,t)):c<=t&&(e.expiredLanes|=l),o&=~l}}function Li(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Bu(){var e=sa;return sa<<=1,!(sa&4194240)&&(sa=64),e}function Uo(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function Gs(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-en(t),e[t]=r}function Ff(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var s=e.eventTimes;for(e=e.expirationTimes;0<r;){var a=31-en(r),o=1<<a;t[a]=0,s[a]=-1,e[a]=-1,r&=~o}}function El(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var s=31-en(r),a=1<<s;a&t|e[s]&t&&(e[s]|=t),r&=~a}}var Re=0;function Uu(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Yu,Tl,qu,Qu,Wu,Di=!1,oa=[],$n=null,Bn=null,Un=null,_s=new Map,As=new Map,Ln=[],$f="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Lc(e,t){switch(e){case"focusin":case"focusout":$n=null;break;case"dragenter":case"dragleave":Bn=null;break;case"mouseover":case"mouseout":Un=null;break;case"pointerover":case"pointerout":_s.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":As.delete(t.pointerId)}}function rs(e,t,r,s,a,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:r,eventSystemFlags:s,nativeEvent:o,targetContainers:[a]},t!==null&&(t=Ks(t),t!==null&&Tl(t)),e):(e.eventSystemFlags|=s,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function Bf(e,t,r,s,a){switch(t){case"focusin":return $n=rs($n,e,t,r,s,a),!0;case"dragenter":return Bn=rs(Bn,e,t,r,s,a),!0;case"mouseover":return Un=rs(Un,e,t,r,s,a),!0;case"pointerover":var o=a.pointerId;return _s.set(o,rs(_s.get(o)||null,e,t,r,s,a)),!0;case"gotpointercapture":return o=a.pointerId,As.set(o,rs(As.get(o)||null,e,t,r,s,a)),!0}return!1}function Gu(e){var t=sr(e.target);if(t!==null){var r=gr(t);if(r!==null){if(t=r.tag,t===13){if(t=Du(r),t!==null){e.blockedOn=t,Wu(e.priority,function(){qu(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Pa(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=Mi(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var s=new r.constructor(r.type,r);Ri=s,r.target.dispatchEvent(s),Ri=null}else return t=Ks(r),t!==null&&Tl(t),e.blockedOn=r,!1;t.shift()}return!0}function Dc(e,t,r){Pa(e)&&r.delete(t)}function Uf(){Di=!1,$n!==null&&Pa($n)&&($n=null),Bn!==null&&Pa(Bn)&&(Bn=null),Un!==null&&Pa(Un)&&(Un=null),_s.forEach(Dc),As.forEach(Dc)}function ss(e,t){e.blockedOn===t&&(e.blockedOn=null,Di||(Di=!0,Ot.unstable_scheduleCallback(Ot.unstable_NormalPriority,Uf)))}function Is(e){function t(a){return ss(a,e)}if(0<oa.length){ss(oa[0],e);for(var r=1;r<oa.length;r++){var s=oa[r];s.blockedOn===e&&(s.blockedOn=null)}}for($n!==null&&ss($n,e),Bn!==null&&ss(Bn,e),Un!==null&&ss(Un,e),_s.forEach(t),As.forEach(t),r=0;r<Ln.length;r++)s=Ln[r],s.blockedOn===e&&(s.blockedOn=null);for(;0<Ln.length&&(r=Ln[0],r.blockedOn===null);)Gu(r),r.blockedOn===null&&Ln.shift()}var Mr=kn.ReactCurrentBatchConfig,Ha=!0;function Yf(e,t,r,s){var a=Re,o=Mr.transition;Mr.transition=null;try{Re=1,Pl(e,t,r,s)}finally{Re=a,Mr.transition=o}}function qf(e,t,r,s){var a=Re,o=Mr.transition;Mr.transition=null;try{Re=4,Pl(e,t,r,s)}finally{Re=a,Mr.transition=o}}function Pl(e,t,r,s){if(Ha){var a=Mi(e,t,r,s);if(a===null)Jo(e,t,s,Ka,r),Lc(e,s);else if(Bf(a,e,t,r,s))s.stopPropagation();else if(Lc(e,s),t&4&&-1<$f.indexOf(e)){for(;a!==null;){var o=Ks(a);if(o!==null&&Yu(o),o=Mi(e,t,r,s),o===null&&Jo(e,t,s,Ka,r),o===a)break;a=o}a!==null&&s.stopPropagation()}else Jo(e,t,s,null,r)}}var Ka=null;function Mi(e,t,r,s){if(Ka=null,e=Sl(s),e=sr(e),e!==null)if(t=gr(e),t===null)e=null;else if(r=t.tag,r===13){if(e=Du(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ka=e,null}function Hu(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(_f()){case Cl:return 1;case Fu:return 4;case Wa:case Af:return 16;case $u:return 536870912;default:return 16}default:return 16}}var Mn=null,Rl=null,Ra=null;function Ku(){if(Ra)return Ra;var e,t=Rl,r=t.length,s,a="value"in Mn?Mn.value:Mn.textContent,o=a.length;for(e=0;e<r&&t[e]===a[e];e++);var i=r-e;for(s=1;s<=i&&t[r-s]===a[o-s];s++);return Ra=a.slice(e,1<s?1-s:void 0)}function _a(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ia(){return!0}function Mc(){return!1}function $t(e){function t(r,s,a,o,i){this._reactName=r,this._targetInst=a,this.type=s,this.nativeEvent=o,this.target=i,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(r=e[l],this[l]=r?r(o):o[l]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?ia:Mc,this.isPropagationStopped=Mc,this}return Ye(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=ia)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=ia)},persist:function(){},isPersistent:ia}),t}var Hr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},_l=$t(Hr),Hs=Ye({},Hr,{view:0,detail:0}),Qf=$t(Hs),Yo,qo,as,vo=Ye({},Hs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Al,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==as&&(as&&e.type==="mousemove"?(Yo=e.screenX-as.screenX,qo=e.screenY-as.screenY):qo=Yo=0,as=e),Yo)},movementY:function(e){return"movementY"in e?e.movementY:qo}}),zc=$t(vo),Wf=Ye({},vo,{dataTransfer:0}),Gf=$t(Wf),Hf=Ye({},Hs,{relatedTarget:0}),Qo=$t(Hf),Kf=Ye({},Hr,{animationName:0,elapsedTime:0,pseudoElement:0}),Xf=$t(Kf),Vf=Ye({},Hr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Jf=$t(Vf),Zf=Ye({},Hr,{data:0}),Oc=$t(Zf),eh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},th={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},nh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function rh(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=nh[e])?!!t[e]:!1}function Al(){return rh}var sh=Ye({},Hs,{key:function(e){if(e.key){var t=eh[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=_a(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?th[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Al,charCode:function(e){return e.type==="keypress"?_a(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?_a(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),ah=$t(sh),oh=Ye({},vo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Fc=$t(oh),ih=Ye({},Hs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Al}),lh=$t(ih),ch=Ye({},Hr,{propertyName:0,elapsedTime:0,pseudoElement:0}),dh=$t(ch),uh=Ye({},vo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),mh=$t(uh),fh=[9,13,27,32],Il=yn&&"CompositionEvent"in window,bs=null;yn&&"documentMode"in document&&(bs=document.documentMode);var hh=yn&&"TextEvent"in window&&!bs,Xu=yn&&(!Il||bs&&8<bs&&11>=bs),$c=String.fromCharCode(32),Bc=!1;function Vu(e,t){switch(e){case"keyup":return fh.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ju(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Nr=!1;function ph(e,t){switch(e){case"compositionend":return Ju(t);case"keypress":return t.which!==32?null:(Bc=!0,$c);case"textInput":return e=t.data,e===$c&&Bc?null:e;default:return null}}function xh(e,t){if(Nr)return e==="compositionend"||!Il&&Vu(e,t)?(e=Ku(),Ra=Rl=Mn=null,Nr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Xu&&t.locale!=="ko"?null:t.data;default:return null}}var gh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Uc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!gh[e.type]:t==="textarea"}function Zu(e,t,r,s){Ru(s),t=Xa(t,"onChange"),0<t.length&&(r=new _l("onChange","change",null,r,s),e.push({event:r,listeners:t}))}var ws=null,Ls=null;function vh(e){d0(e,0)}function yo(e){var t=Cr(e);if(Nu(t))return e}function yh(e,t){if(e==="change")return t}var e0=!1;if(yn){var Wo;if(yn){var Go="oninput"in document;if(!Go){var Yc=document.createElement("div");Yc.setAttribute("oninput","return;"),Go=typeof Yc.oninput=="function"}Wo=Go}else Wo=!1;e0=Wo&&(!document.documentMode||9<document.documentMode)}function qc(){ws&&(ws.detachEvent("onpropertychange",t0),Ls=ws=null)}function t0(e){if(e.propertyName==="value"&&yo(Ls)){var t=[];Zu(t,Ls,e,Sl(e)),Lu(vh,t)}}function bh(e,t,r){e==="focusin"?(qc(),ws=t,Ls=r,ws.attachEvent("onpropertychange",t0)):e==="focusout"&&qc()}function wh(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return yo(Ls)}function jh(e,t){if(e==="click")return yo(t)}function Nh(e,t){if(e==="input"||e==="change")return yo(t)}function kh(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var nn=typeof Object.is=="function"?Object.is:kh;function Ds(e,t){if(nn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),s=Object.keys(t);if(r.length!==s.length)return!1;for(s=0;s<r.length;s++){var a=r[s];if(!vi.call(t,a)||!nn(e[a],t[a]))return!1}return!0}function Qc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Wc(e,t){var r=Qc(e);e=0;for(var s;r;){if(r.nodeType===3){if(s=e+r.textContent.length,e<=t&&s>=t)return{node:r,offset:t-e};e=s}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=Qc(r)}}function n0(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?n0(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function r0(){for(var e=window,t=Ya();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=Ya(e.document)}return t}function Ll(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Sh(e){var t=r0(),r=e.focusedElem,s=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&n0(r.ownerDocument.documentElement,r)){if(s!==null&&Ll(r)){if(t=s.start,e=s.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var a=r.textContent.length,o=Math.min(s.start,a);s=s.end===void 0?o:Math.min(s.end,a),!e.extend&&o>s&&(a=s,s=o,o=a),a=Wc(r,o);var i=Wc(r,s);a&&i&&(e.rangeCount!==1||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(t=t.createRange(),t.setStart(a.node,a.offset),e.removeAllRanges(),o>s?(e.addRange(t),e.extend(i.node,i.offset)):(t.setEnd(i.node,i.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Ch=yn&&"documentMode"in document&&11>=document.documentMode,kr=null,zi=null,js=null,Oi=!1;function Gc(e,t,r){var s=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;Oi||kr==null||kr!==Ya(s)||(s=kr,"selectionStart"in s&&Ll(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),js&&Ds(js,s)||(js=s,s=Xa(zi,"onSelect"),0<s.length&&(t=new _l("onSelect","select",null,t,r),e.push({event:t,listeners:s}),t.target=kr)))}function la(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var Sr={animationend:la("Animation","AnimationEnd"),animationiteration:la("Animation","AnimationIteration"),animationstart:la("Animation","AnimationStart"),transitionend:la("Transition","TransitionEnd")},Ho={},s0={};yn&&(s0=document.createElement("div").style,"AnimationEvent"in window||(delete Sr.animationend.animation,delete Sr.animationiteration.animation,delete Sr.animationstart.animation),"TransitionEvent"in window||delete Sr.transitionend.transition);function bo(e){if(Ho[e])return Ho[e];if(!Sr[e])return e;var t=Sr[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in s0)return Ho[e]=t[r];return e}var a0=bo("animationend"),o0=bo("animationiteration"),i0=bo("animationstart"),l0=bo("transitionend"),c0=new Map,Hc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Vn(e,t){c0.set(e,t),xr(t,[e])}for(var Ko=0;Ko<Hc.length;Ko++){var Xo=Hc[Ko],Eh=Xo.toLowerCase(),Th=Xo[0].toUpperCase()+Xo.slice(1);Vn(Eh,"on"+Th)}Vn(a0,"onAnimationEnd");Vn(o0,"onAnimationIteration");Vn(i0,"onAnimationStart");Vn("dblclick","onDoubleClick");Vn("focusin","onFocus");Vn("focusout","onBlur");Vn(l0,"onTransitionEnd");Fr("onMouseEnter",["mouseout","mouseover"]);Fr("onMouseLeave",["mouseout","mouseover"]);Fr("onPointerEnter",["pointerout","pointerover"]);Fr("onPointerLeave",["pointerout","pointerover"]);xr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));xr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));xr("onBeforeInput",["compositionend","keypress","textInput","paste"]);xr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));xr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));xr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var gs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ph=new Set("cancel close invalid load scroll toggle".split(" ").concat(gs));function Kc(e,t,r){var s=e.type||"unknown-event";e.currentTarget=r,Ef(s,t,void 0,e),e.currentTarget=null}function d0(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var s=e[r],a=s.event;s=s.listeners;e:{var o=void 0;if(t)for(var i=s.length-1;0<=i;i--){var l=s[i],c=l.instance,u=l.currentTarget;if(l=l.listener,c!==o&&a.isPropagationStopped())break e;Kc(a,l,u),o=c}else for(i=0;i<s.length;i++){if(l=s[i],c=l.instance,u=l.currentTarget,l=l.listener,c!==o&&a.isPropagationStopped())break e;Kc(a,l,u),o=c}}}if(Qa)throw e=Ii,Qa=!1,Ii=null,e}function Ie(e,t){var r=t[Yi];r===void 0&&(r=t[Yi]=new Set);var s=e+"__bubble";r.has(s)||(u0(t,e,2,!1),r.add(s))}function Vo(e,t,r){var s=0;t&&(s|=4),u0(r,e,s,t)}var ca="_reactListening"+Math.random().toString(36).slice(2);function Ms(e){if(!e[ca]){e[ca]=!0,vu.forEach(function(r){r!=="selectionchange"&&(Ph.has(r)||Vo(r,!1,e),Vo(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ca]||(t[ca]=!0,Vo("selectionchange",!1,t))}}function u0(e,t,r,s){switch(Hu(t)){case 1:var a=Yf;break;case 4:a=qf;break;default:a=Pl}r=a.bind(null,t,r,e),a=void 0,!Ai||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),s?a!==void 0?e.addEventListener(t,r,{capture:!0,passive:a}):e.addEventListener(t,r,!0):a!==void 0?e.addEventListener(t,r,{passive:a}):e.addEventListener(t,r,!1)}function Jo(e,t,r,s,a){var o=s;if(!(t&1)&&!(t&2)&&s!==null)e:for(;;){if(s===null)return;var i=s.tag;if(i===3||i===4){var l=s.stateNode.containerInfo;if(l===a||l.nodeType===8&&l.parentNode===a)break;if(i===4)for(i=s.return;i!==null;){var c=i.tag;if((c===3||c===4)&&(c=i.stateNode.containerInfo,c===a||c.nodeType===8&&c.parentNode===a))return;i=i.return}for(;l!==null;){if(i=sr(l),i===null)return;if(c=i.tag,c===5||c===6){s=o=i;continue e}l=l.parentNode}}s=s.return}Lu(function(){var u=o,m=Sl(r),h=[];e:{var f=c0.get(e);if(f!==void 0){var w=_l,x=e;switch(e){case"keypress":if(_a(r)===0)break e;case"keydown":case"keyup":w=ah;break;case"focusin":x="focus",w=Qo;break;case"focusout":x="blur",w=Qo;break;case"beforeblur":case"afterblur":w=Qo;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=zc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=Gf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=lh;break;case a0:case o0:case i0:w=Xf;break;case l0:w=dh;break;case"scroll":w=Qf;break;case"wheel":w=mh;break;case"copy":case"cut":case"paste":w=Jf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=Fc}var j=(t&4)!==0,S=!j&&e==="scroll",y=j?f!==null?f+"Capture":null:f;j=[];for(var g=u,v;g!==null;){v=g;var N=v.stateNode;if(v.tag===5&&N!==null&&(v=N,y!==null&&(N=Rs(g,y),N!=null&&j.push(zs(g,N,v)))),S)break;g=g.return}0<j.length&&(f=new w(f,x,null,r,m),h.push({event:f,listeners:j}))}}if(!(t&7)){e:{if(f=e==="mouseover"||e==="pointerover",w=e==="mouseout"||e==="pointerout",f&&r!==Ri&&(x=r.relatedTarget||r.fromElement)&&(sr(x)||x[bn]))break e;if((w||f)&&(f=m.window===m?m:(f=m.ownerDocument)?f.defaultView||f.parentWindow:window,w?(x=r.relatedTarget||r.toElement,w=u,x=x?sr(x):null,x!==null&&(S=gr(x),x!==S||x.tag!==5&&x.tag!==6)&&(x=null)):(w=null,x=u),w!==x)){if(j=zc,N="onMouseLeave",y="onMouseEnter",g="mouse",(e==="pointerout"||e==="pointerover")&&(j=Fc,N="onPointerLeave",y="onPointerEnter",g="pointer"),S=w==null?f:Cr(w),v=x==null?f:Cr(x),f=new j(N,g+"leave",w,r,m),f.target=S,f.relatedTarget=v,N=null,sr(m)===u&&(j=new j(y,g+"enter",x,r,m),j.target=v,j.relatedTarget=S,N=j),S=N,w&&x)t:{for(j=w,y=x,g=0,v=j;v;v=yr(v))g++;for(v=0,N=y;N;N=yr(N))v++;for(;0<g-v;)j=yr(j),g--;for(;0<v-g;)y=yr(y),v--;for(;g--;){if(j===y||y!==null&&j===y.alternate)break t;j=yr(j),y=yr(y)}j=null}else j=null;w!==null&&Xc(h,f,w,j,!1),x!==null&&S!==null&&Xc(h,S,x,j,!0)}}e:{if(f=u?Cr(u):window,w=f.nodeName&&f.nodeName.toLowerCase(),w==="select"||w==="input"&&f.type==="file")var C=yh;else if(Uc(f))if(e0)C=Nh;else{C=wh;var P=bh}else(w=f.nodeName)&&w.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(C=jh);if(C&&(C=C(e,u))){Zu(h,C,r,m);break e}P&&P(e,f,u),e==="focusout"&&(P=f._wrapperState)&&P.controlled&&f.type==="number"&&Si(f,"number",f.value)}switch(P=u?Cr(u):window,e){case"focusin":(Uc(P)||P.contentEditable==="true")&&(kr=P,zi=u,js=null);break;case"focusout":js=zi=kr=null;break;case"mousedown":Oi=!0;break;case"contextmenu":case"mouseup":case"dragend":Oi=!1,Gc(h,r,m);break;case"selectionchange":if(Ch)break;case"keydown":case"keyup":Gc(h,r,m)}var E;if(Il)e:{switch(e){case"compositionstart":var p="onCompositionStart";break e;case"compositionend":p="onCompositionEnd";break e;case"compositionupdate":p="onCompositionUpdate";break e}p=void 0}else Nr?Vu(e,r)&&(p="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(p="onCompositionStart");p&&(Xu&&r.locale!=="ko"&&(Nr||p!=="onCompositionStart"?p==="onCompositionEnd"&&Nr&&(E=Ku()):(Mn=m,Rl="value"in Mn?Mn.value:Mn.textContent,Nr=!0)),P=Xa(u,p),0<P.length&&(p=new Oc(p,e,null,r,m),h.push({event:p,listeners:P}),E?p.data=E:(E=Ju(r),E!==null&&(p.data=E)))),(E=hh?ph(e,r):xh(e,r))&&(u=Xa(u,"onBeforeInput"),0<u.length&&(m=new Oc("onBeforeInput","beforeinput",null,r,m),h.push({event:m,listeners:u}),m.data=E))}d0(h,t)})}function zs(e,t,r){return{instance:e,listener:t,currentTarget:r}}function Xa(e,t){for(var r=t+"Capture",s=[];e!==null;){var a=e,o=a.stateNode;a.tag===5&&o!==null&&(a=o,o=Rs(e,r),o!=null&&s.unshift(zs(e,o,a)),o=Rs(e,t),o!=null&&s.push(zs(e,o,a))),e=e.return}return s}function yr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Xc(e,t,r,s,a){for(var o=t._reactName,i=[];r!==null&&r!==s;){var l=r,c=l.alternate,u=l.stateNode;if(c!==null&&c===s)break;l.tag===5&&u!==null&&(l=u,a?(c=Rs(r,o),c!=null&&i.unshift(zs(r,c,l))):a||(c=Rs(r,o),c!=null&&i.push(zs(r,c,l)))),r=r.return}i.length!==0&&e.push({event:t,listeners:i})}var Rh=/\r\n?/g,_h=/\u0000|\uFFFD/g;function Vc(e){return(typeof e=="string"?e:""+e).replace(Rh,`
`).replace(_h,"")}function da(e,t,r){if(t=Vc(t),Vc(e)!==t&&r)throw Error(re(425))}function Va(){}var Fi=null,$i=null;function Bi(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ui=typeof setTimeout=="function"?setTimeout:void 0,Ah=typeof clearTimeout=="function"?clearTimeout:void 0,Jc=typeof Promise=="function"?Promise:void 0,Ih=typeof queueMicrotask=="function"?queueMicrotask:typeof Jc<"u"?function(e){return Jc.resolve(null).then(e).catch(Lh)}:Ui;function Lh(e){setTimeout(function(){throw e})}function Zo(e,t){var r=t,s=0;do{var a=r.nextSibling;if(e.removeChild(r),a&&a.nodeType===8)if(r=a.data,r==="/$"){if(s===0){e.removeChild(a),Is(t);return}s--}else r!=="$"&&r!=="$?"&&r!=="$!"||s++;r=a}while(r);Is(t)}function Yn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Zc(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var Kr=Math.random().toString(36).slice(2),ln="__reactFiber$"+Kr,Os="__reactProps$"+Kr,bn="__reactContainer$"+Kr,Yi="__reactEvents$"+Kr,Dh="__reactListeners$"+Kr,Mh="__reactHandles$"+Kr;function sr(e){var t=e[ln];if(t)return t;for(var r=e.parentNode;r;){if(t=r[bn]||r[ln]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=Zc(e);e!==null;){if(r=e[ln])return r;e=Zc(e)}return t}e=r,r=e.parentNode}return null}function Ks(e){return e=e[ln]||e[bn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Cr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(re(33))}function wo(e){return e[Os]||null}var qi=[],Er=-1;function Jn(e){return{current:e}}function De(e){0>Er||(e.current=qi[Er],qi[Er]=null,Er--)}function Ae(e,t){Er++,qi[Er]=e.current,e.current=t}var Kn={},bt=Jn(Kn),Pt=Jn(!1),ur=Kn;function $r(e,t){var r=e.type.contextTypes;if(!r)return Kn;var s=e.stateNode;if(s&&s.__reactInternalMemoizedUnmaskedChildContext===t)return s.__reactInternalMemoizedMaskedChildContext;var a={},o;for(o in r)a[o]=t[o];return s&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=a),a}function Rt(e){return e=e.childContextTypes,e!=null}function Ja(){De(Pt),De(bt)}function ed(e,t,r){if(bt.current!==Kn)throw Error(re(168));Ae(bt,t),Ae(Pt,r)}function m0(e,t,r){var s=e.stateNode;if(t=t.childContextTypes,typeof s.getChildContext!="function")return r;s=s.getChildContext();for(var a in s)if(!(a in t))throw Error(re(108,bf(e)||"Unknown",a));return Ye({},r,s)}function Za(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Kn,ur=bt.current,Ae(bt,e),Ae(Pt,Pt.current),!0}function td(e,t,r){var s=e.stateNode;if(!s)throw Error(re(169));r?(e=m0(e,t,ur),s.__reactInternalMemoizedMergedChildContext=e,De(Pt),De(bt),Ae(bt,e)):De(Pt),Ae(Pt,r)}var hn=null,jo=!1,ei=!1;function f0(e){hn===null?hn=[e]:hn.push(e)}function zh(e){jo=!0,f0(e)}function Zn(){if(!ei&&hn!==null){ei=!0;var e=0,t=Re;try{var r=hn;for(Re=1;e<r.length;e++){var s=r[e];do s=s(!0);while(s!==null)}hn=null,jo=!1}catch(a){throw hn!==null&&(hn=hn.slice(e+1)),Ou(Cl,Zn),a}finally{Re=t,ei=!1}}return null}var Tr=[],Pr=0,eo=null,to=0,Bt=[],Ut=0,mr=null,pn=1,xn="";function nr(e,t){Tr[Pr++]=to,Tr[Pr++]=eo,eo=e,to=t}function h0(e,t,r){Bt[Ut++]=pn,Bt[Ut++]=xn,Bt[Ut++]=mr,mr=e;var s=pn;e=xn;var a=32-en(s)-1;s&=~(1<<a),r+=1;var o=32-en(t)+a;if(30<o){var i=a-a%5;o=(s&(1<<i)-1).toString(32),s>>=i,a-=i,pn=1<<32-en(t)+a|r<<a|s,xn=o+e}else pn=1<<o|r<<a|s,xn=e}function Dl(e){e.return!==null&&(nr(e,1),h0(e,1,0))}function Ml(e){for(;e===eo;)eo=Tr[--Pr],Tr[Pr]=null,to=Tr[--Pr],Tr[Pr]=null;for(;e===mr;)mr=Bt[--Ut],Bt[Ut]=null,xn=Bt[--Ut],Bt[Ut]=null,pn=Bt[--Ut],Bt[Ut]=null}var zt=null,Mt=null,Oe=!1,Zt=null;function p0(e,t){var r=Yt(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function nd(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,zt=e,Mt=Yn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,zt=e,Mt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=mr!==null?{id:pn,overflow:xn}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=Yt(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,zt=e,Mt=null,!0):!1;default:return!1}}function Qi(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Wi(e){if(Oe){var t=Mt;if(t){var r=t;if(!nd(e,t)){if(Qi(e))throw Error(re(418));t=Yn(r.nextSibling);var s=zt;t&&nd(e,t)?p0(s,r):(e.flags=e.flags&-4097|2,Oe=!1,zt=e)}}else{if(Qi(e))throw Error(re(418));e.flags=e.flags&-4097|2,Oe=!1,zt=e}}}function rd(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;zt=e}function ua(e){if(e!==zt)return!1;if(!Oe)return rd(e),Oe=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Bi(e.type,e.memoizedProps)),t&&(t=Mt)){if(Qi(e))throw x0(),Error(re(418));for(;t;)p0(e,t),t=Yn(t.nextSibling)}if(rd(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(re(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){Mt=Yn(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}Mt=null}}else Mt=zt?Yn(e.stateNode.nextSibling):null;return!0}function x0(){for(var e=Mt;e;)e=Yn(e.nextSibling)}function Br(){Mt=zt=null,Oe=!1}function zl(e){Zt===null?Zt=[e]:Zt.push(e)}var Oh=kn.ReactCurrentBatchConfig;function os(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(re(309));var s=r.stateNode}if(!s)throw Error(re(147,e));var a=s,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(i){var l=a.refs;i===null?delete l[o]:l[o]=i},t._stringRef=o,t)}if(typeof e!="string")throw Error(re(284));if(!r._owner)throw Error(re(290,e))}return e}function ma(e,t){throw e=Object.prototype.toString.call(t),Error(re(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function sd(e){var t=e._init;return t(e._payload)}function g0(e){function t(y,g){if(e){var v=y.deletions;v===null?(y.deletions=[g],y.flags|=16):v.push(g)}}function r(y,g){if(!e)return null;for(;g!==null;)t(y,g),g=g.sibling;return null}function s(y,g){for(y=new Map;g!==null;)g.key!==null?y.set(g.key,g):y.set(g.index,g),g=g.sibling;return y}function a(y,g){return y=Gn(y,g),y.index=0,y.sibling=null,y}function o(y,g,v){return y.index=v,e?(v=y.alternate,v!==null?(v=v.index,v<g?(y.flags|=2,g):v):(y.flags|=2,g)):(y.flags|=1048576,g)}function i(y){return e&&y.alternate===null&&(y.flags|=2),y}function l(y,g,v,N){return g===null||g.tag!==6?(g=ii(v,y.mode,N),g.return=y,g):(g=a(g,v),g.return=y,g)}function c(y,g,v,N){var C=v.type;return C===jr?m(y,g,v.props.children,N,v.key):g!==null&&(g.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===_n&&sd(C)===g.type)?(N=a(g,v.props),N.ref=os(y,g,v),N.return=y,N):(N=Oa(v.type,v.key,v.props,null,y.mode,N),N.ref=os(y,g,v),N.return=y,N)}function u(y,g,v,N){return g===null||g.tag!==4||g.stateNode.containerInfo!==v.containerInfo||g.stateNode.implementation!==v.implementation?(g=li(v,y.mode,N),g.return=y,g):(g=a(g,v.children||[]),g.return=y,g)}function m(y,g,v,N,C){return g===null||g.tag!==7?(g=dr(v,y.mode,N,C),g.return=y,g):(g=a(g,v),g.return=y,g)}function h(y,g,v){if(typeof g=="string"&&g!==""||typeof g=="number")return g=ii(""+g,y.mode,v),g.return=y,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case ta:return v=Oa(g.type,g.key,g.props,null,y.mode,v),v.ref=os(y,null,g),v.return=y,v;case wr:return g=li(g,y.mode,v),g.return=y,g;case _n:var N=g._init;return h(y,N(g._payload),v)}if(ps(g)||ts(g))return g=dr(g,y.mode,v,null),g.return=y,g;ma(y,g)}return null}function f(y,g,v,N){var C=g!==null?g.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return C!==null?null:l(y,g,""+v,N);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case ta:return v.key===C?c(y,g,v,N):null;case wr:return v.key===C?u(y,g,v,N):null;case _n:return C=v._init,f(y,g,C(v._payload),N)}if(ps(v)||ts(v))return C!==null?null:m(y,g,v,N,null);ma(y,v)}return null}function w(y,g,v,N,C){if(typeof N=="string"&&N!==""||typeof N=="number")return y=y.get(v)||null,l(g,y,""+N,C);if(typeof N=="object"&&N!==null){switch(N.$$typeof){case ta:return y=y.get(N.key===null?v:N.key)||null,c(g,y,N,C);case wr:return y=y.get(N.key===null?v:N.key)||null,u(g,y,N,C);case _n:var P=N._init;return w(y,g,v,P(N._payload),C)}if(ps(N)||ts(N))return y=y.get(v)||null,m(g,y,N,C,null);ma(g,N)}return null}function x(y,g,v,N){for(var C=null,P=null,E=g,p=g=0,b=null;E!==null&&p<v.length;p++){E.index>p?(b=E,E=null):b=E.sibling;var k=f(y,E,v[p],N);if(k===null){E===null&&(E=b);break}e&&E&&k.alternate===null&&t(y,E),g=o(k,g,p),P===null?C=k:P.sibling=k,P=k,E=b}if(p===v.length)return r(y,E),Oe&&nr(y,p),C;if(E===null){for(;p<v.length;p++)E=h(y,v[p],N),E!==null&&(g=o(E,g,p),P===null?C=E:P.sibling=E,P=E);return Oe&&nr(y,p),C}for(E=s(y,E);p<v.length;p++)b=w(E,y,p,v[p],N),b!==null&&(e&&b.alternate!==null&&E.delete(b.key===null?p:b.key),g=o(b,g,p),P===null?C=b:P.sibling=b,P=b);return e&&E.forEach(function(_){return t(y,_)}),Oe&&nr(y,p),C}function j(y,g,v,N){var C=ts(v);if(typeof C!="function")throw Error(re(150));if(v=C.call(v),v==null)throw Error(re(151));for(var P=C=null,E=g,p=g=0,b=null,k=v.next();E!==null&&!k.done;p++,k=v.next()){E.index>p?(b=E,E=null):b=E.sibling;var _=f(y,E,k.value,N);if(_===null){E===null&&(E=b);break}e&&E&&_.alternate===null&&t(y,E),g=o(_,g,p),P===null?C=_:P.sibling=_,P=_,E=b}if(k.done)return r(y,E),Oe&&nr(y,p),C;if(E===null){for(;!k.done;p++,k=v.next())k=h(y,k.value,N),k!==null&&(g=o(k,g,p),P===null?C=k:P.sibling=k,P=k);return Oe&&nr(y,p),C}for(E=s(y,E);!k.done;p++,k=v.next())k=w(E,y,p,k.value,N),k!==null&&(e&&k.alternate!==null&&E.delete(k.key===null?p:k.key),g=o(k,g,p),P===null?C=k:P.sibling=k,P=k);return e&&E.forEach(function(R){return t(y,R)}),Oe&&nr(y,p),C}function S(y,g,v,N){if(typeof v=="object"&&v!==null&&v.type===jr&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case ta:e:{for(var C=v.key,P=g;P!==null;){if(P.key===C){if(C=v.type,C===jr){if(P.tag===7){r(y,P.sibling),g=a(P,v.props.children),g.return=y,y=g;break e}}else if(P.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===_n&&sd(C)===P.type){r(y,P.sibling),g=a(P,v.props),g.ref=os(y,P,v),g.return=y,y=g;break e}r(y,P);break}else t(y,P);P=P.sibling}v.type===jr?(g=dr(v.props.children,y.mode,N,v.key),g.return=y,y=g):(N=Oa(v.type,v.key,v.props,null,y.mode,N),N.ref=os(y,g,v),N.return=y,y=N)}return i(y);case wr:e:{for(P=v.key;g!==null;){if(g.key===P)if(g.tag===4&&g.stateNode.containerInfo===v.containerInfo&&g.stateNode.implementation===v.implementation){r(y,g.sibling),g=a(g,v.children||[]),g.return=y,y=g;break e}else{r(y,g);break}else t(y,g);g=g.sibling}g=li(v,y.mode,N),g.return=y,y=g}return i(y);case _n:return P=v._init,S(y,g,P(v._payload),N)}if(ps(v))return x(y,g,v,N);if(ts(v))return j(y,g,v,N);ma(y,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,g!==null&&g.tag===6?(r(y,g.sibling),g=a(g,v),g.return=y,y=g):(r(y,g),g=ii(v,y.mode,N),g.return=y,y=g),i(y)):r(y,g)}return S}var Ur=g0(!0),v0=g0(!1),no=Jn(null),ro=null,Rr=null,Ol=null;function Fl(){Ol=Rr=ro=null}function $l(e){var t=no.current;De(no),e._currentValue=t}function Gi(e,t,r){for(;e!==null;){var s=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,s!==null&&(s.childLanes|=t)):s!==null&&(s.childLanes&t)!==t&&(s.childLanes|=t),e===r)break;e=e.return}}function zr(e,t){ro=e,Ol=Rr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Tt=!0),e.firstContext=null)}function Qt(e){var t=e._currentValue;if(Ol!==e)if(e={context:e,memoizedValue:t,next:null},Rr===null){if(ro===null)throw Error(re(308));Rr=e,ro.dependencies={lanes:0,firstContext:e}}else Rr=Rr.next=e;return t}var ar=null;function Bl(e){ar===null?ar=[e]:ar.push(e)}function y0(e,t,r,s){var a=t.interleaved;return a===null?(r.next=r,Bl(t)):(r.next=a.next,a.next=r),t.interleaved=r,wn(e,s)}function wn(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}var An=!1;function Ul(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function b0(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function gn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function qn(e,t,r){var s=e.updateQueue;if(s===null)return null;if(s=s.shared,ye&2){var a=s.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),s.pending=t,wn(e,r)}return a=s.interleaved,a===null?(t.next=t,Bl(s)):(t.next=a.next,a.next=t),s.interleaved=t,wn(e,r)}function Aa(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var s=t.lanes;s&=e.pendingLanes,r|=s,t.lanes=r,El(e,r)}}function ad(e,t){var r=e.updateQueue,s=e.alternate;if(s!==null&&(s=s.updateQueue,r===s)){var a=null,o=null;if(r=r.firstBaseUpdate,r!==null){do{var i={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};o===null?a=o=i:o=o.next=i,r=r.next}while(r!==null);o===null?a=o=t:o=o.next=t}else a=o=t;r={baseState:s.baseState,firstBaseUpdate:a,lastBaseUpdate:o,shared:s.shared,effects:s.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function so(e,t,r,s){var a=e.updateQueue;An=!1;var o=a.firstBaseUpdate,i=a.lastBaseUpdate,l=a.shared.pending;if(l!==null){a.shared.pending=null;var c=l,u=c.next;c.next=null,i===null?o=u:i.next=u,i=c;var m=e.alternate;m!==null&&(m=m.updateQueue,l=m.lastBaseUpdate,l!==i&&(l===null?m.firstBaseUpdate=u:l.next=u,m.lastBaseUpdate=c))}if(o!==null){var h=a.baseState;i=0,m=u=c=null,l=o;do{var f=l.lane,w=l.eventTime;if((s&f)===f){m!==null&&(m=m.next={eventTime:w,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var x=e,j=l;switch(f=t,w=r,j.tag){case 1:if(x=j.payload,typeof x=="function"){h=x.call(w,h,f);break e}h=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=j.payload,f=typeof x=="function"?x.call(w,h,f):x,f==null)break e;h=Ye({},h,f);break e;case 2:An=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,f=a.effects,f===null?a.effects=[l]:f.push(l))}else w={eventTime:w,lane:f,tag:l.tag,payload:l.payload,callback:l.callback,next:null},m===null?(u=m=w,c=h):m=m.next=w,i|=f;if(l=l.next,l===null){if(l=a.shared.pending,l===null)break;f=l,l=f.next,f.next=null,a.lastBaseUpdate=f,a.shared.pending=null}}while(1);if(m===null&&(c=h),a.baseState=c,a.firstBaseUpdate=u,a.lastBaseUpdate=m,t=a.shared.interleaved,t!==null){a=t;do i|=a.lane,a=a.next;while(a!==t)}else o===null&&(a.shared.lanes=0);hr|=i,e.lanes=i,e.memoizedState=h}}function od(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var s=e[t],a=s.callback;if(a!==null){if(s.callback=null,s=r,typeof a!="function")throw Error(re(191,a));a.call(s)}}}var Xs={},dn=Jn(Xs),Fs=Jn(Xs),$s=Jn(Xs);function or(e){if(e===Xs)throw Error(re(174));return e}function Yl(e,t){switch(Ae($s,t),Ae(Fs,e),Ae(dn,Xs),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ei(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Ei(t,e)}De(dn),Ae(dn,t)}function Yr(){De(dn),De(Fs),De($s)}function w0(e){or($s.current);var t=or(dn.current),r=Ei(t,e.type);t!==r&&(Ae(Fs,e),Ae(dn,r))}function ql(e){Fs.current===e&&(De(dn),De(Fs))}var Be=Jn(0);function ao(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ti=[];function Ql(){for(var e=0;e<ti.length;e++)ti[e]._workInProgressVersionPrimary=null;ti.length=0}var Ia=kn.ReactCurrentDispatcher,ni=kn.ReactCurrentBatchConfig,fr=0,Ue=null,rt=null,it=null,oo=!1,Ns=!1,Bs=0,Fh=0;function xt(){throw Error(re(321))}function Wl(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!nn(e[r],t[r]))return!1;return!0}function Gl(e,t,r,s,a,o){if(fr=o,Ue=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ia.current=e===null||e.memoizedState===null?Yh:qh,e=r(s,a),Ns){o=0;do{if(Ns=!1,Bs=0,25<=o)throw Error(re(301));o+=1,it=rt=null,t.updateQueue=null,Ia.current=Qh,e=r(s,a)}while(Ns)}if(Ia.current=io,t=rt!==null&&rt.next!==null,fr=0,it=rt=Ue=null,oo=!1,t)throw Error(re(300));return e}function Hl(){var e=Bs!==0;return Bs=0,e}function on(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return it===null?Ue.memoizedState=it=e:it=it.next=e,it}function Wt(){if(rt===null){var e=Ue.alternate;e=e!==null?e.memoizedState:null}else e=rt.next;var t=it===null?Ue.memoizedState:it.next;if(t!==null)it=t,rt=e;else{if(e===null)throw Error(re(310));rt=e,e={memoizedState:rt.memoizedState,baseState:rt.baseState,baseQueue:rt.baseQueue,queue:rt.queue,next:null},it===null?Ue.memoizedState=it=e:it=it.next=e}return it}function Us(e,t){return typeof t=="function"?t(e):t}function ri(e){var t=Wt(),r=t.queue;if(r===null)throw Error(re(311));r.lastRenderedReducer=e;var s=rt,a=s.baseQueue,o=r.pending;if(o!==null){if(a!==null){var i=a.next;a.next=o.next,o.next=i}s.baseQueue=a=o,r.pending=null}if(a!==null){o=a.next,s=s.baseState;var l=i=null,c=null,u=o;do{var m=u.lane;if((fr&m)===m)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),s=u.hasEagerState?u.eagerState:e(s,u.action);else{var h={lane:m,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(l=c=h,i=s):c=c.next=h,Ue.lanes|=m,hr|=m}u=u.next}while(u!==null&&u!==o);c===null?i=s:c.next=l,nn(s,t.memoizedState)||(Tt=!0),t.memoizedState=s,t.baseState=i,t.baseQueue=c,r.lastRenderedState=s}if(e=r.interleaved,e!==null){a=e;do o=a.lane,Ue.lanes|=o,hr|=o,a=a.next;while(a!==e)}else a===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function si(e){var t=Wt(),r=t.queue;if(r===null)throw Error(re(311));r.lastRenderedReducer=e;var s=r.dispatch,a=r.pending,o=t.memoizedState;if(a!==null){r.pending=null;var i=a=a.next;do o=e(o,i.action),i=i.next;while(i!==a);nn(o,t.memoizedState)||(Tt=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),r.lastRenderedState=o}return[o,s]}function j0(){}function N0(e,t){var r=Ue,s=Wt(),a=t(),o=!nn(s.memoizedState,a);if(o&&(s.memoizedState=a,Tt=!0),s=s.queue,Kl(C0.bind(null,r,s,e),[e]),s.getSnapshot!==t||o||it!==null&&it.memoizedState.tag&1){if(r.flags|=2048,Ys(9,S0.bind(null,r,s,a,t),void 0,null),lt===null)throw Error(re(349));fr&30||k0(r,t,a)}return a}function k0(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=Ue.updateQueue,t===null?(t={lastEffect:null,stores:null},Ue.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function S0(e,t,r,s){t.value=r,t.getSnapshot=s,E0(t)&&T0(e)}function C0(e,t,r){return r(function(){E0(t)&&T0(e)})}function E0(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!nn(e,r)}catch{return!0}}function T0(e){var t=wn(e,1);t!==null&&tn(t,e,1,-1)}function id(e){var t=on();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Us,lastRenderedState:e},t.queue=e,e=e.dispatch=Uh.bind(null,Ue,e),[t.memoizedState,e]}function Ys(e,t,r,s){return e={tag:e,create:t,destroy:r,deps:s,next:null},t=Ue.updateQueue,t===null?(t={lastEffect:null,stores:null},Ue.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(s=r.next,r.next=e,e.next=s,t.lastEffect=e)),e}function P0(){return Wt().memoizedState}function La(e,t,r,s){var a=on();Ue.flags|=e,a.memoizedState=Ys(1|t,r,void 0,s===void 0?null:s)}function No(e,t,r,s){var a=Wt();s=s===void 0?null:s;var o=void 0;if(rt!==null){var i=rt.memoizedState;if(o=i.destroy,s!==null&&Wl(s,i.deps)){a.memoizedState=Ys(t,r,o,s);return}}Ue.flags|=e,a.memoizedState=Ys(1|t,r,o,s)}function ld(e,t){return La(8390656,8,e,t)}function Kl(e,t){return No(2048,8,e,t)}function R0(e,t){return No(4,2,e,t)}function _0(e,t){return No(4,4,e,t)}function A0(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function I0(e,t,r){return r=r!=null?r.concat([e]):null,No(4,4,A0.bind(null,t,e),r)}function Xl(){}function L0(e,t){var r=Wt();t=t===void 0?null:t;var s=r.memoizedState;return s!==null&&t!==null&&Wl(t,s[1])?s[0]:(r.memoizedState=[e,t],e)}function D0(e,t){var r=Wt();t=t===void 0?null:t;var s=r.memoizedState;return s!==null&&t!==null&&Wl(t,s[1])?s[0]:(e=e(),r.memoizedState=[e,t],e)}function M0(e,t,r){return fr&21?(nn(r,t)||(r=Bu(),Ue.lanes|=r,hr|=r,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Tt=!0),e.memoizedState=r)}function $h(e,t){var r=Re;Re=r!==0&&4>r?r:4,e(!0);var s=ni.transition;ni.transition={};try{e(!1),t()}finally{Re=r,ni.transition=s}}function z0(){return Wt().memoizedState}function Bh(e,t,r){var s=Wn(e);if(r={lane:s,action:r,hasEagerState:!1,eagerState:null,next:null},O0(e))F0(t,r);else if(r=y0(e,t,r,s),r!==null){var a=Nt();tn(r,e,s,a),$0(r,t,s)}}function Uh(e,t,r){var s=Wn(e),a={lane:s,action:r,hasEagerState:!1,eagerState:null,next:null};if(O0(e))F0(t,a);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var i=t.lastRenderedState,l=o(i,r);if(a.hasEagerState=!0,a.eagerState=l,nn(l,i)){var c=t.interleaved;c===null?(a.next=a,Bl(t)):(a.next=c.next,c.next=a),t.interleaved=a;return}}catch{}finally{}r=y0(e,t,a,s),r!==null&&(a=Nt(),tn(r,e,s,a),$0(r,t,s))}}function O0(e){var t=e.alternate;return e===Ue||t!==null&&t===Ue}function F0(e,t){Ns=oo=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function $0(e,t,r){if(r&4194240){var s=t.lanes;s&=e.pendingLanes,r|=s,t.lanes=r,El(e,r)}}var io={readContext:Qt,useCallback:xt,useContext:xt,useEffect:xt,useImperativeHandle:xt,useInsertionEffect:xt,useLayoutEffect:xt,useMemo:xt,useReducer:xt,useRef:xt,useState:xt,useDebugValue:xt,useDeferredValue:xt,useTransition:xt,useMutableSource:xt,useSyncExternalStore:xt,useId:xt,unstable_isNewReconciler:!1},Yh={readContext:Qt,useCallback:function(e,t){return on().memoizedState=[e,t===void 0?null:t],e},useContext:Qt,useEffect:ld,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,La(4194308,4,A0.bind(null,t,e),r)},useLayoutEffect:function(e,t){return La(4194308,4,e,t)},useInsertionEffect:function(e,t){return La(4,2,e,t)},useMemo:function(e,t){var r=on();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var s=on();return t=r!==void 0?r(t):t,s.memoizedState=s.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},s.queue=e,e=e.dispatch=Bh.bind(null,Ue,e),[s.memoizedState,e]},useRef:function(e){var t=on();return e={current:e},t.memoizedState=e},useState:id,useDebugValue:Xl,useDeferredValue:function(e){return on().memoizedState=e},useTransition:function(){var e=id(!1),t=e[0];return e=$h.bind(null,e[1]),on().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var s=Ue,a=on();if(Oe){if(r===void 0)throw Error(re(407));r=r()}else{if(r=t(),lt===null)throw Error(re(349));fr&30||k0(s,t,r)}a.memoizedState=r;var o={value:r,getSnapshot:t};return a.queue=o,ld(C0.bind(null,s,o,e),[e]),s.flags|=2048,Ys(9,S0.bind(null,s,o,r,t),void 0,null),r},useId:function(){var e=on(),t=lt.identifierPrefix;if(Oe){var r=xn,s=pn;r=(s&~(1<<32-en(s)-1)).toString(32)+r,t=":"+t+"R"+r,r=Bs++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=Fh++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},qh={readContext:Qt,useCallback:L0,useContext:Qt,useEffect:Kl,useImperativeHandle:I0,useInsertionEffect:R0,useLayoutEffect:_0,useMemo:D0,useReducer:ri,useRef:P0,useState:function(){return ri(Us)},useDebugValue:Xl,useDeferredValue:function(e){var t=Wt();return M0(t,rt.memoizedState,e)},useTransition:function(){var e=ri(Us)[0],t=Wt().memoizedState;return[e,t]},useMutableSource:j0,useSyncExternalStore:N0,useId:z0,unstable_isNewReconciler:!1},Qh={readContext:Qt,useCallback:L0,useContext:Qt,useEffect:Kl,useImperativeHandle:I0,useInsertionEffect:R0,useLayoutEffect:_0,useMemo:D0,useReducer:si,useRef:P0,useState:function(){return si(Us)},useDebugValue:Xl,useDeferredValue:function(e){var t=Wt();return rt===null?t.memoizedState=e:M0(t,rt.memoizedState,e)},useTransition:function(){var e=si(Us)[0],t=Wt().memoizedState;return[e,t]},useMutableSource:j0,useSyncExternalStore:N0,useId:z0,unstable_isNewReconciler:!1};function Xt(e,t){if(e&&e.defaultProps){t=Ye({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}function Hi(e,t,r,s){t=e.memoizedState,r=r(s,t),r=r==null?t:Ye({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var ko={isMounted:function(e){return(e=e._reactInternals)?gr(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var s=Nt(),a=Wn(e),o=gn(s,a);o.payload=t,r!=null&&(o.callback=r),t=qn(e,o,a),t!==null&&(tn(t,e,a,s),Aa(t,e,a))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var s=Nt(),a=Wn(e),o=gn(s,a);o.tag=1,o.payload=t,r!=null&&(o.callback=r),t=qn(e,o,a),t!==null&&(tn(t,e,a,s),Aa(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=Nt(),s=Wn(e),a=gn(r,s);a.tag=2,t!=null&&(a.callback=t),t=qn(e,a,s),t!==null&&(tn(t,e,s,r),Aa(t,e,s))}};function cd(e,t,r,s,a,o,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(s,o,i):t.prototype&&t.prototype.isPureReactComponent?!Ds(r,s)||!Ds(a,o):!0}function B0(e,t,r){var s=!1,a=Kn,o=t.contextType;return typeof o=="object"&&o!==null?o=Qt(o):(a=Rt(t)?ur:bt.current,s=t.contextTypes,o=(s=s!=null)?$r(e,a):Kn),t=new t(r,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ko,e.stateNode=t,t._reactInternals=e,s&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=o),t}function dd(e,t,r,s){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,s),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,s),t.state!==e&&ko.enqueueReplaceState(t,t.state,null)}function Ki(e,t,r,s){var a=e.stateNode;a.props=r,a.state=e.memoizedState,a.refs={},Ul(e);var o=t.contextType;typeof o=="object"&&o!==null?a.context=Qt(o):(o=Rt(t)?ur:bt.current,a.context=$r(e,o)),a.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Hi(e,t,o,r),a.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(t=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),t!==a.state&&ko.enqueueReplaceState(a,a.state,null),so(e,r,a,s),a.state=e.memoizedState),typeof a.componentDidMount=="function"&&(e.flags|=4194308)}function qr(e,t){try{var r="",s=t;do r+=yf(s),s=s.return;while(s);var a=r}catch(o){a=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:a,digest:null}}function ai(e,t,r){return{value:e,source:null,stack:r??null,digest:t??null}}function Xi(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var Wh=typeof WeakMap=="function"?WeakMap:Map;function U0(e,t,r){r=gn(-1,r),r.tag=3,r.payload={element:null};var s=t.value;return r.callback=function(){co||(co=!0,ol=s),Xi(e,t)},r}function Y0(e,t,r){r=gn(-1,r),r.tag=3;var s=e.type.getDerivedStateFromError;if(typeof s=="function"){var a=t.value;r.payload=function(){return s(a)},r.callback=function(){Xi(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(r.callback=function(){Xi(e,t),typeof s!="function"&&(Qn===null?Qn=new Set([this]):Qn.add(this));var i=t.stack;this.componentDidCatch(t.value,{componentStack:i!==null?i:""})}),r}function ud(e,t,r){var s=e.pingCache;if(s===null){s=e.pingCache=new Wh;var a=new Set;s.set(t,a)}else a=s.get(t),a===void 0&&(a=new Set,s.set(t,a));a.has(r)||(a.add(r),e=op.bind(null,e,t,r),t.then(e,e))}function md(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function fd(e,t,r,s,a){return e.mode&1?(e.flags|=65536,e.lanes=a,e):(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=gn(-1,1),t.tag=2,qn(r,t,1))),r.lanes|=1),e)}var Gh=kn.ReactCurrentOwner,Tt=!1;function jt(e,t,r,s){t.child=e===null?v0(t,null,r,s):Ur(t,e.child,r,s)}function hd(e,t,r,s,a){r=r.render;var o=t.ref;return zr(t,a),s=Gl(e,t,r,s,o,a),r=Hl(),e!==null&&!Tt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,jn(e,t,a)):(Oe&&r&&Dl(t),t.flags|=1,jt(e,t,s,a),t.child)}function pd(e,t,r,s,a){if(e===null){var o=r.type;return typeof o=="function"&&!sc(o)&&o.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=o,q0(e,t,o,s,a)):(e=Oa(r.type,null,s,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&a)){var i=o.memoizedProps;if(r=r.compare,r=r!==null?r:Ds,r(i,s)&&e.ref===t.ref)return jn(e,t,a)}return t.flags|=1,e=Gn(o,s),e.ref=t.ref,e.return=t,t.child=e}function q0(e,t,r,s,a){if(e!==null){var o=e.memoizedProps;if(Ds(o,s)&&e.ref===t.ref)if(Tt=!1,t.pendingProps=s=o,(e.lanes&a)!==0)e.flags&131072&&(Tt=!0);else return t.lanes=e.lanes,jn(e,t,a)}return Vi(e,t,r,s,a)}function Q0(e,t,r){var s=t.pendingProps,a=s.children,o=e!==null?e.memoizedState:null;if(s.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ae(Ar,Dt),Dt|=r;else{if(!(r&1073741824))return e=o!==null?o.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Ae(Ar,Dt),Dt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},s=o!==null?o.baseLanes:r,Ae(Ar,Dt),Dt|=s}else o!==null?(s=o.baseLanes|r,t.memoizedState=null):s=r,Ae(Ar,Dt),Dt|=s;return jt(e,t,a,r),t.child}function W0(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function Vi(e,t,r,s,a){var o=Rt(r)?ur:bt.current;return o=$r(t,o),zr(t,a),r=Gl(e,t,r,s,o,a),s=Hl(),e!==null&&!Tt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,jn(e,t,a)):(Oe&&s&&Dl(t),t.flags|=1,jt(e,t,r,a),t.child)}function xd(e,t,r,s,a){if(Rt(r)){var o=!0;Za(t)}else o=!1;if(zr(t,a),t.stateNode===null)Da(e,t),B0(t,r,s),Ki(t,r,s,a),s=!0;else if(e===null){var i=t.stateNode,l=t.memoizedProps;i.props=l;var c=i.context,u=r.contextType;typeof u=="object"&&u!==null?u=Qt(u):(u=Rt(r)?ur:bt.current,u=$r(t,u));var m=r.getDerivedStateFromProps,h=typeof m=="function"||typeof i.getSnapshotBeforeUpdate=="function";h||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(l!==s||c!==u)&&dd(t,i,s,u),An=!1;var f=t.memoizedState;i.state=f,so(t,s,i,a),c=t.memoizedState,l!==s||f!==c||Pt.current||An?(typeof m=="function"&&(Hi(t,r,m,s),c=t.memoizedState),(l=An||cd(t,r,l,s,f,c,u))?(h||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=s,t.memoizedState=c),i.props=s,i.state=c,i.context=u,s=l):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),s=!1)}else{i=t.stateNode,b0(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:Xt(t.type,l),i.props=u,h=t.pendingProps,f=i.context,c=r.contextType,typeof c=="object"&&c!==null?c=Qt(c):(c=Rt(r)?ur:bt.current,c=$r(t,c));var w=r.getDerivedStateFromProps;(m=typeof w=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(l!==h||f!==c)&&dd(t,i,s,c),An=!1,f=t.memoizedState,i.state=f,so(t,s,i,a);var x=t.memoizedState;l!==h||f!==x||Pt.current||An?(typeof w=="function"&&(Hi(t,r,w,s),x=t.memoizedState),(u=An||cd(t,r,u,s,f,x,c)||!1)?(m||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(s,x,c),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(s,x,c)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=s,t.memoizedState=x),i.props=s,i.state=x,i.context=c,s=u):(typeof i.componentDidUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),s=!1)}return Ji(e,t,r,s,o,a)}function Ji(e,t,r,s,a,o){W0(e,t);var i=(t.flags&128)!==0;if(!s&&!i)return a&&td(t,r,!1),jn(e,t,o);s=t.stateNode,Gh.current=t;var l=i&&typeof r.getDerivedStateFromError!="function"?null:s.render();return t.flags|=1,e!==null&&i?(t.child=Ur(t,e.child,null,o),t.child=Ur(t,null,l,o)):jt(e,t,l,o),t.memoizedState=s.state,a&&td(t,r,!0),t.child}function G0(e){var t=e.stateNode;t.pendingContext?ed(e,t.pendingContext,t.pendingContext!==t.context):t.context&&ed(e,t.context,!1),Yl(e,t.containerInfo)}function gd(e,t,r,s,a){return Br(),zl(a),t.flags|=256,jt(e,t,r,s),t.child}var Zi={dehydrated:null,treeContext:null,retryLane:0};function el(e){return{baseLanes:e,cachePool:null,transitions:null}}function H0(e,t,r){var s=t.pendingProps,a=Be.current,o=!1,i=(t.flags&128)!==0,l;if((l=i)||(l=e!==null&&e.memoizedState===null?!1:(a&2)!==0),l?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(a|=1),Ae(Be,a&1),e===null)return Wi(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(i=s.children,e=s.fallback,o?(s=t.mode,o=t.child,i={mode:"hidden",children:i},!(s&1)&&o!==null?(o.childLanes=0,o.pendingProps=i):o=Eo(i,s,0,null),e=dr(e,s,r,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=el(r),t.memoizedState=Zi,e):Vl(t,i));if(a=e.memoizedState,a!==null&&(l=a.dehydrated,l!==null))return Hh(e,t,i,s,l,a,r);if(o){o=s.fallback,i=t.mode,a=e.child,l=a.sibling;var c={mode:"hidden",children:s.children};return!(i&1)&&t.child!==a?(s=t.child,s.childLanes=0,s.pendingProps=c,t.deletions=null):(s=Gn(a,c),s.subtreeFlags=a.subtreeFlags&14680064),l!==null?o=Gn(l,o):(o=dr(o,i,r,null),o.flags|=2),o.return=t,s.return=t,s.sibling=o,t.child=s,s=o,o=t.child,i=e.child.memoizedState,i=i===null?el(r):{baseLanes:i.baseLanes|r,cachePool:null,transitions:i.transitions},o.memoizedState=i,o.childLanes=e.childLanes&~r,t.memoizedState=Zi,s}return o=e.child,e=o.sibling,s=Gn(o,{mode:"visible",children:s.children}),!(t.mode&1)&&(s.lanes=r),s.return=t,s.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=s,t.memoizedState=null,s}function Vl(e,t){return t=Eo({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function fa(e,t,r,s){return s!==null&&zl(s),Ur(t,e.child,null,r),e=Vl(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Hh(e,t,r,s,a,o,i){if(r)return t.flags&256?(t.flags&=-257,s=ai(Error(re(422))),fa(e,t,i,s)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=s.fallback,a=t.mode,s=Eo({mode:"visible",children:s.children},a,0,null),o=dr(o,a,i,null),o.flags|=2,s.return=t,o.return=t,s.sibling=o,t.child=s,t.mode&1&&Ur(t,e.child,null,i),t.child.memoizedState=el(i),t.memoizedState=Zi,o);if(!(t.mode&1))return fa(e,t,i,null);if(a.data==="$!"){if(s=a.nextSibling&&a.nextSibling.dataset,s)var l=s.dgst;return s=l,o=Error(re(419)),s=ai(o,s,void 0),fa(e,t,i,s)}if(l=(i&e.childLanes)!==0,Tt||l){if(s=lt,s!==null){switch(i&-i){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=a&(s.suspendedLanes|i)?0:a,a!==0&&a!==o.retryLane&&(o.retryLane=a,wn(e,a),tn(s,e,a,-1))}return rc(),s=ai(Error(re(421))),fa(e,t,i,s)}return a.data==="$?"?(t.flags|=128,t.child=e.child,t=ip.bind(null,e),a._reactRetry=t,null):(e=o.treeContext,Mt=Yn(a.nextSibling),zt=t,Oe=!0,Zt=null,e!==null&&(Bt[Ut++]=pn,Bt[Ut++]=xn,Bt[Ut++]=mr,pn=e.id,xn=e.overflow,mr=t),t=Vl(t,s.children),t.flags|=4096,t)}function vd(e,t,r){e.lanes|=t;var s=e.alternate;s!==null&&(s.lanes|=t),Gi(e.return,t,r)}function oi(e,t,r,s,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:s,tail:r,tailMode:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=s,o.tail=r,o.tailMode=a)}function K0(e,t,r){var s=t.pendingProps,a=s.revealOrder,o=s.tail;if(jt(e,t,s.children,r),s=Be.current,s&2)s=s&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&vd(e,r,t);else if(e.tag===19)vd(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}s&=1}if(Ae(Be,s),!(t.mode&1))t.memoizedState=null;else switch(a){case"forwards":for(r=t.child,a=null;r!==null;)e=r.alternate,e!==null&&ao(e)===null&&(a=r),r=r.sibling;r=a,r===null?(a=t.child,t.child=null):(a=r.sibling,r.sibling=null),oi(t,!1,a,r,o);break;case"backwards":for(r=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&ao(e)===null){t.child=a;break}e=a.sibling,a.sibling=r,r=a,a=e}oi(t,!0,r,null,o);break;case"together":oi(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Da(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function jn(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),hr|=t.lanes,!(r&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(re(153));if(t.child!==null){for(e=t.child,r=Gn(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=Gn(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function Kh(e,t,r){switch(t.tag){case 3:G0(t),Br();break;case 5:w0(t);break;case 1:Rt(t.type)&&Za(t);break;case 4:Yl(t,t.stateNode.containerInfo);break;case 10:var s=t.type._context,a=t.memoizedProps.value;Ae(no,s._currentValue),s._currentValue=a;break;case 13:if(s=t.memoizedState,s!==null)return s.dehydrated!==null?(Ae(Be,Be.current&1),t.flags|=128,null):r&t.child.childLanes?H0(e,t,r):(Ae(Be,Be.current&1),e=jn(e,t,r),e!==null?e.sibling:null);Ae(Be,Be.current&1);break;case 19:if(s=(r&t.childLanes)!==0,e.flags&128){if(s)return K0(e,t,r);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),Ae(Be,Be.current),s)break;return null;case 22:case 23:return t.lanes=0,Q0(e,t,r)}return jn(e,t,r)}var X0,tl,V0,J0;X0=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}};tl=function(){};V0=function(e,t,r,s){var a=e.memoizedProps;if(a!==s){e=t.stateNode,or(dn.current);var o=null;switch(r){case"input":a=Ni(e,a),s=Ni(e,s),o=[];break;case"select":a=Ye({},a,{value:void 0}),s=Ye({},s,{value:void 0}),o=[];break;case"textarea":a=Ci(e,a),s=Ci(e,s),o=[];break;default:typeof a.onClick!="function"&&typeof s.onClick=="function"&&(e.onclick=Va)}Ti(r,s);var i;r=null;for(u in a)if(!s.hasOwnProperty(u)&&a.hasOwnProperty(u)&&a[u]!=null)if(u==="style"){var l=a[u];for(i in l)l.hasOwnProperty(i)&&(r||(r={}),r[i]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Ts.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in s){var c=s[u];if(l=a!=null?a[u]:void 0,s.hasOwnProperty(u)&&c!==l&&(c!=null||l!=null))if(u==="style")if(l){for(i in l)!l.hasOwnProperty(i)||c&&c.hasOwnProperty(i)||(r||(r={}),r[i]="");for(i in c)c.hasOwnProperty(i)&&l[i]!==c[i]&&(r||(r={}),r[i]=c[i])}else r||(o||(o=[]),o.push(u,r)),r=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,l=l?l.__html:void 0,c!=null&&l!==c&&(o=o||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(o=o||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Ts.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&Ie("scroll",e),o||l===c||(o=[])):(o=o||[]).push(u,c))}r&&(o=o||[]).push("style",r);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};J0=function(e,t,r,s){r!==s&&(t.flags|=4)};function is(e,t){if(!Oe)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var s=null;r!==null;)r.alternate!==null&&(s=r),r=r.sibling;s===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:s.sibling=null}}function gt(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,s=0;if(t)for(var a=e.child;a!==null;)r|=a.lanes|a.childLanes,s|=a.subtreeFlags&14680064,s|=a.flags&14680064,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)r|=a.lanes|a.childLanes,s|=a.subtreeFlags,s|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=s,e.childLanes=r,t}function Xh(e,t,r){var s=t.pendingProps;switch(Ml(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return gt(t),null;case 1:return Rt(t.type)&&Ja(),gt(t),null;case 3:return s=t.stateNode,Yr(),De(Pt),De(bt),Ql(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(e===null||e.child===null)&&(ua(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Zt!==null&&(cl(Zt),Zt=null))),tl(e,t),gt(t),null;case 5:ql(t);var a=or($s.current);if(r=t.type,e!==null&&t.stateNode!=null)V0(e,t,r,s,a),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!s){if(t.stateNode===null)throw Error(re(166));return gt(t),null}if(e=or(dn.current),ua(t)){s=t.stateNode,r=t.type;var o=t.memoizedProps;switch(s[ln]=t,s[Os]=o,e=(t.mode&1)!==0,r){case"dialog":Ie("cancel",s),Ie("close",s);break;case"iframe":case"object":case"embed":Ie("load",s);break;case"video":case"audio":for(a=0;a<gs.length;a++)Ie(gs[a],s);break;case"source":Ie("error",s);break;case"img":case"image":case"link":Ie("error",s),Ie("load",s);break;case"details":Ie("toggle",s);break;case"input":Ec(s,o),Ie("invalid",s);break;case"select":s._wrapperState={wasMultiple:!!o.multiple},Ie("invalid",s);break;case"textarea":Pc(s,o),Ie("invalid",s)}Ti(r,o),a=null;for(var i in o)if(o.hasOwnProperty(i)){var l=o[i];i==="children"?typeof l=="string"?s.textContent!==l&&(o.suppressHydrationWarning!==!0&&da(s.textContent,l,e),a=["children",l]):typeof l=="number"&&s.textContent!==""+l&&(o.suppressHydrationWarning!==!0&&da(s.textContent,l,e),a=["children",""+l]):Ts.hasOwnProperty(i)&&l!=null&&i==="onScroll"&&Ie("scroll",s)}switch(r){case"input":na(s),Tc(s,o,!0);break;case"textarea":na(s),Rc(s);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(s.onclick=Va)}s=a,t.updateQueue=s,s!==null&&(t.flags|=4)}else{i=a.nodeType===9?a:a.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Cu(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof s.is=="string"?e=i.createElement(r,{is:s.is}):(e=i.createElement(r),r==="select"&&(i=e,s.multiple?i.multiple=!0:s.size&&(i.size=s.size))):e=i.createElementNS(e,r),e[ln]=t,e[Os]=s,X0(e,t,!1,!1),t.stateNode=e;e:{switch(i=Pi(r,s),r){case"dialog":Ie("cancel",e),Ie("close",e),a=s;break;case"iframe":case"object":case"embed":Ie("load",e),a=s;break;case"video":case"audio":for(a=0;a<gs.length;a++)Ie(gs[a],e);a=s;break;case"source":Ie("error",e),a=s;break;case"img":case"image":case"link":Ie("error",e),Ie("load",e),a=s;break;case"details":Ie("toggle",e),a=s;break;case"input":Ec(e,s),a=Ni(e,s),Ie("invalid",e);break;case"option":a=s;break;case"select":e._wrapperState={wasMultiple:!!s.multiple},a=Ye({},s,{value:void 0}),Ie("invalid",e);break;case"textarea":Pc(e,s),a=Ci(e,s),Ie("invalid",e);break;default:a=s}Ti(r,a),l=a;for(o in l)if(l.hasOwnProperty(o)){var c=l[o];o==="style"?Pu(e,c):o==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&Eu(e,c)):o==="children"?typeof c=="string"?(r!=="textarea"||c!=="")&&Ps(e,c):typeof c=="number"&&Ps(e,""+c):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Ts.hasOwnProperty(o)?c!=null&&o==="onScroll"&&Ie("scroll",e):c!=null&&wl(e,o,c,i))}switch(r){case"input":na(e),Tc(e,s,!1);break;case"textarea":na(e),Rc(e);break;case"option":s.value!=null&&e.setAttribute("value",""+Hn(s.value));break;case"select":e.multiple=!!s.multiple,o=s.value,o!=null?Ir(e,!!s.multiple,o,!1):s.defaultValue!=null&&Ir(e,!!s.multiple,s.defaultValue,!0);break;default:typeof a.onClick=="function"&&(e.onclick=Va)}switch(r){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break e;case"img":s=!0;break e;default:s=!1}}s&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return gt(t),null;case 6:if(e&&t.stateNode!=null)J0(e,t,e.memoizedProps,s);else{if(typeof s!="string"&&t.stateNode===null)throw Error(re(166));if(r=or($s.current),or(dn.current),ua(t)){if(s=t.stateNode,r=t.memoizedProps,s[ln]=t,(o=s.nodeValue!==r)&&(e=zt,e!==null))switch(e.tag){case 3:da(s.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&da(s.nodeValue,r,(e.mode&1)!==0)}o&&(t.flags|=4)}else s=(r.nodeType===9?r:r.ownerDocument).createTextNode(s),s[ln]=t,t.stateNode=s}return gt(t),null;case 13:if(De(Be),s=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Oe&&Mt!==null&&t.mode&1&&!(t.flags&128))x0(),Br(),t.flags|=98560,o=!1;else if(o=ua(t),s!==null&&s.dehydrated!==null){if(e===null){if(!o)throw Error(re(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(re(317));o[ln]=t}else Br(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;gt(t),o=!1}else Zt!==null&&(cl(Zt),Zt=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=r,t):(s=s!==null,s!==(e!==null&&e.memoizedState!==null)&&s&&(t.child.flags|=8192,t.mode&1&&(e===null||Be.current&1?at===0&&(at=3):rc())),t.updateQueue!==null&&(t.flags|=4),gt(t),null);case 4:return Yr(),tl(e,t),e===null&&Ms(t.stateNode.containerInfo),gt(t),null;case 10:return $l(t.type._context),gt(t),null;case 17:return Rt(t.type)&&Ja(),gt(t),null;case 19:if(De(Be),o=t.memoizedState,o===null)return gt(t),null;if(s=(t.flags&128)!==0,i=o.rendering,i===null)if(s)is(o,!1);else{if(at!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(i=ao(e),i!==null){for(t.flags|=128,is(o,!1),s=i.updateQueue,s!==null&&(t.updateQueue=s,t.flags|=4),t.subtreeFlags=0,s=r,r=t.child;r!==null;)o=r,e=s,o.flags&=14680066,i=o.alternate,i===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=i.childLanes,o.lanes=i.lanes,o.child=i.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=i.memoizedProps,o.memoizedState=i.memoizedState,o.updateQueue=i.updateQueue,o.type=i.type,e=i.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return Ae(Be,Be.current&1|2),t.child}e=e.sibling}o.tail!==null&&Ve()>Qr&&(t.flags|=128,s=!0,is(o,!1),t.lanes=4194304)}else{if(!s)if(e=ao(i),e!==null){if(t.flags|=128,s=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),is(o,!0),o.tail===null&&o.tailMode==="hidden"&&!i.alternate&&!Oe)return gt(t),null}else 2*Ve()-o.renderingStartTime>Qr&&r!==1073741824&&(t.flags|=128,s=!0,is(o,!1),t.lanes=4194304);o.isBackwards?(i.sibling=t.child,t.child=i):(r=o.last,r!==null?r.sibling=i:t.child=i,o.last=i)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Ve(),t.sibling=null,r=Be.current,Ae(Be,s?r&1|2:r&1),t):(gt(t),null);case 22:case 23:return nc(),s=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==s&&(t.flags|=8192),s&&t.mode&1?Dt&1073741824&&(gt(t),t.subtreeFlags&6&&(t.flags|=8192)):gt(t),null;case 24:return null;case 25:return null}throw Error(re(156,t.tag))}function Vh(e,t){switch(Ml(t),t.tag){case 1:return Rt(t.type)&&Ja(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Yr(),De(Pt),De(bt),Ql(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return ql(t),null;case 13:if(De(Be),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(re(340));Br()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return De(Be),null;case 4:return Yr(),null;case 10:return $l(t.type._context),null;case 22:case 23:return nc(),null;case 24:return null;default:return null}}var ha=!1,yt=!1,Jh=typeof WeakSet=="function"?WeakSet:Set,oe=null;function _r(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(s){He(e,t,s)}else r.current=null}function nl(e,t,r){try{r()}catch(s){He(e,t,s)}}var yd=!1;function Zh(e,t){if(Fi=Ha,e=r0(),Ll(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var s=r.getSelection&&r.getSelection();if(s&&s.rangeCount!==0){r=s.anchorNode;var a=s.anchorOffset,o=s.focusNode;s=s.focusOffset;try{r.nodeType,o.nodeType}catch{r=null;break e}var i=0,l=-1,c=-1,u=0,m=0,h=e,f=null;t:for(;;){for(var w;h!==r||a!==0&&h.nodeType!==3||(l=i+a),h!==o||s!==0&&h.nodeType!==3||(c=i+s),h.nodeType===3&&(i+=h.nodeValue.length),(w=h.firstChild)!==null;)f=h,h=w;for(;;){if(h===e)break t;if(f===r&&++u===a&&(l=i),f===o&&++m===s&&(c=i),(w=h.nextSibling)!==null)break;h=f,f=h.parentNode}h=w}r=l===-1||c===-1?null:{start:l,end:c}}else r=null}r=r||{start:0,end:0}}else r=null;for($i={focusedElem:e,selectionRange:r},Ha=!1,oe=t;oe!==null;)if(t=oe,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,oe=e;else for(;oe!==null;){t=oe;try{var x=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var j=x.memoizedProps,S=x.memoizedState,y=t.stateNode,g=y.getSnapshotBeforeUpdate(t.elementType===t.type?j:Xt(t.type,j),S);y.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var v=t.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(re(163))}}catch(N){He(t,t.return,N)}if(e=t.sibling,e!==null){e.return=t.return,oe=e;break}oe=t.return}return x=yd,yd=!1,x}function ks(e,t,r){var s=t.updateQueue;if(s=s!==null?s.lastEffect:null,s!==null){var a=s=s.next;do{if((a.tag&e)===e){var o=a.destroy;a.destroy=void 0,o!==void 0&&nl(t,r,o)}a=a.next}while(a!==s)}}function So(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var s=r.create;r.destroy=s()}r=r.next}while(r!==t)}}function rl(e){var t=e.ref;if(t!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof t=="function"?t(e):t.current=e}}function Z0(e){var t=e.alternate;t!==null&&(e.alternate=null,Z0(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[ln],delete t[Os],delete t[Yi],delete t[Dh],delete t[Mh])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function em(e){return e.tag===5||e.tag===3||e.tag===4}function bd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||em(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function sl(e,t,r){var s=e.tag;if(s===5||s===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=Va));else if(s!==4&&(e=e.child,e!==null))for(sl(e,t,r),e=e.sibling;e!==null;)sl(e,t,r),e=e.sibling}function al(e,t,r){var s=e.tag;if(s===5||s===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(s!==4&&(e=e.child,e!==null))for(al(e,t,r),e=e.sibling;e!==null;)al(e,t,r),e=e.sibling}var dt=null,Vt=!1;function Cn(e,t,r){for(r=r.child;r!==null;)tm(e,t,r),r=r.sibling}function tm(e,t,r){if(cn&&typeof cn.onCommitFiberUnmount=="function")try{cn.onCommitFiberUnmount(go,r)}catch{}switch(r.tag){case 5:yt||_r(r,t);case 6:var s=dt,a=Vt;dt=null,Cn(e,t,r),dt=s,Vt=a,dt!==null&&(Vt?(e=dt,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):dt.removeChild(r.stateNode));break;case 18:dt!==null&&(Vt?(e=dt,r=r.stateNode,e.nodeType===8?Zo(e.parentNode,r):e.nodeType===1&&Zo(e,r),Is(e)):Zo(dt,r.stateNode));break;case 4:s=dt,a=Vt,dt=r.stateNode.containerInfo,Vt=!0,Cn(e,t,r),dt=s,Vt=a;break;case 0:case 11:case 14:case 15:if(!yt&&(s=r.updateQueue,s!==null&&(s=s.lastEffect,s!==null))){a=s=s.next;do{var o=a,i=o.destroy;o=o.tag,i!==void 0&&(o&2||o&4)&&nl(r,t,i),a=a.next}while(a!==s)}Cn(e,t,r);break;case 1:if(!yt&&(_r(r,t),s=r.stateNode,typeof s.componentWillUnmount=="function"))try{s.props=r.memoizedProps,s.state=r.memoizedState,s.componentWillUnmount()}catch(l){He(r,t,l)}Cn(e,t,r);break;case 21:Cn(e,t,r);break;case 22:r.mode&1?(yt=(s=yt)||r.memoizedState!==null,Cn(e,t,r),yt=s):Cn(e,t,r);break;default:Cn(e,t,r)}}function wd(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new Jh),t.forEach(function(s){var a=lp.bind(null,e,s);r.has(s)||(r.add(s),s.then(a,a))})}}function Kt(e,t){var r=t.deletions;if(r!==null)for(var s=0;s<r.length;s++){var a=r[s];try{var o=e,i=t,l=i;e:for(;l!==null;){switch(l.tag){case 5:dt=l.stateNode,Vt=!1;break e;case 3:dt=l.stateNode.containerInfo,Vt=!0;break e;case 4:dt=l.stateNode.containerInfo,Vt=!0;break e}l=l.return}if(dt===null)throw Error(re(160));tm(o,i,a),dt=null,Vt=!1;var c=a.alternate;c!==null&&(c.return=null),a.return=null}catch(u){He(a,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)nm(t,e),t=t.sibling}function nm(e,t){var r=e.alternate,s=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Kt(t,e),an(e),s&4){try{ks(3,e,e.return),So(3,e)}catch(j){He(e,e.return,j)}try{ks(5,e,e.return)}catch(j){He(e,e.return,j)}}break;case 1:Kt(t,e),an(e),s&512&&r!==null&&_r(r,r.return);break;case 5:if(Kt(t,e),an(e),s&512&&r!==null&&_r(r,r.return),e.flags&32){var a=e.stateNode;try{Ps(a,"")}catch(j){He(e,e.return,j)}}if(s&4&&(a=e.stateNode,a!=null)){var o=e.memoizedProps,i=r!==null?r.memoizedProps:o,l=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{l==="input"&&o.type==="radio"&&o.name!=null&&ku(a,o),Pi(l,i);var u=Pi(l,o);for(i=0;i<c.length;i+=2){var m=c[i],h=c[i+1];m==="style"?Pu(a,h):m==="dangerouslySetInnerHTML"?Eu(a,h):m==="children"?Ps(a,h):wl(a,m,h,u)}switch(l){case"input":ki(a,o);break;case"textarea":Su(a,o);break;case"select":var f=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!o.multiple;var w=o.value;w!=null?Ir(a,!!o.multiple,w,!1):f!==!!o.multiple&&(o.defaultValue!=null?Ir(a,!!o.multiple,o.defaultValue,!0):Ir(a,!!o.multiple,o.multiple?[]:"",!1))}a[Os]=o}catch(j){He(e,e.return,j)}}break;case 6:if(Kt(t,e),an(e),s&4){if(e.stateNode===null)throw Error(re(162));a=e.stateNode,o=e.memoizedProps;try{a.nodeValue=o}catch(j){He(e,e.return,j)}}break;case 3:if(Kt(t,e),an(e),s&4&&r!==null&&r.memoizedState.isDehydrated)try{Is(t.containerInfo)}catch(j){He(e,e.return,j)}break;case 4:Kt(t,e),an(e);break;case 13:Kt(t,e),an(e),a=e.child,a.flags&8192&&(o=a.memoizedState!==null,a.stateNode.isHidden=o,!o||a.alternate!==null&&a.alternate.memoizedState!==null||(ec=Ve())),s&4&&wd(e);break;case 22:if(m=r!==null&&r.memoizedState!==null,e.mode&1?(yt=(u=yt)||m,Kt(t,e),yt=u):Kt(t,e),an(e),s&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!m&&e.mode&1)for(oe=e,m=e.child;m!==null;){for(h=oe=m;oe!==null;){switch(f=oe,w=f.child,f.tag){case 0:case 11:case 14:case 15:ks(4,f,f.return);break;case 1:_r(f,f.return);var x=f.stateNode;if(typeof x.componentWillUnmount=="function"){s=f,r=f.return;try{t=s,x.props=t.memoizedProps,x.state=t.memoizedState,x.componentWillUnmount()}catch(j){He(s,r,j)}}break;case 5:_r(f,f.return);break;case 22:if(f.memoizedState!==null){Nd(h);continue}}w!==null?(w.return=f,oe=w):Nd(h)}m=m.sibling}e:for(m=null,h=e;;){if(h.tag===5){if(m===null){m=h;try{a=h.stateNode,u?(o=a.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(l=h.stateNode,c=h.memoizedProps.style,i=c!=null&&c.hasOwnProperty("display")?c.display:null,l.style.display=Tu("display",i))}catch(j){He(e,e.return,j)}}}else if(h.tag===6){if(m===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(j){He(e,e.return,j)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;m===h&&(m=null),h=h.return}m===h&&(m=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Kt(t,e),an(e),s&4&&wd(e);break;case 21:break;default:Kt(t,e),an(e)}}function an(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if(em(r)){var s=r;break e}r=r.return}throw Error(re(160))}switch(s.tag){case 5:var a=s.stateNode;s.flags&32&&(Ps(a,""),s.flags&=-33);var o=bd(e);al(e,o,a);break;case 3:case 4:var i=s.stateNode.containerInfo,l=bd(e);sl(e,l,i);break;default:throw Error(re(161))}}catch(c){He(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function ep(e,t,r){oe=e,rm(e)}function rm(e,t,r){for(var s=(e.mode&1)!==0;oe!==null;){var a=oe,o=a.child;if(a.tag===22&&s){var i=a.memoizedState!==null||ha;if(!i){var l=a.alternate,c=l!==null&&l.memoizedState!==null||yt;l=ha;var u=yt;if(ha=i,(yt=c)&&!u)for(oe=a;oe!==null;)i=oe,c=i.child,i.tag===22&&i.memoizedState!==null?kd(a):c!==null?(c.return=i,oe=c):kd(a);for(;o!==null;)oe=o,rm(o),o=o.sibling;oe=a,ha=l,yt=u}jd(e)}else a.subtreeFlags&8772&&o!==null?(o.return=a,oe=o):jd(e)}}function jd(e){for(;oe!==null;){var t=oe;if(t.flags&8772){var r=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:yt||So(5,t);break;case 1:var s=t.stateNode;if(t.flags&4&&!yt)if(r===null)s.componentDidMount();else{var a=t.elementType===t.type?r.memoizedProps:Xt(t.type,r.memoizedProps);s.componentDidUpdate(a,r.memoizedState,s.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&od(t,o,s);break;case 3:var i=t.updateQueue;if(i!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}od(t,i,r)}break;case 5:var l=t.stateNode;if(r===null&&t.flags&4){r=l;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&r.focus();break;case"img":c.src&&(r.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var m=u.memoizedState;if(m!==null){var h=m.dehydrated;h!==null&&Is(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(re(163))}yt||t.flags&512&&rl(t)}catch(f){He(t,t.return,f)}}if(t===e){oe=null;break}if(r=t.sibling,r!==null){r.return=t.return,oe=r;break}oe=t.return}}function Nd(e){for(;oe!==null;){var t=oe;if(t===e){oe=null;break}var r=t.sibling;if(r!==null){r.return=t.return,oe=r;break}oe=t.return}}function kd(e){for(;oe!==null;){var t=oe;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{So(4,t)}catch(c){He(t,r,c)}break;case 1:var s=t.stateNode;if(typeof s.componentDidMount=="function"){var a=t.return;try{s.componentDidMount()}catch(c){He(t,a,c)}}var o=t.return;try{rl(t)}catch(c){He(t,o,c)}break;case 5:var i=t.return;try{rl(t)}catch(c){He(t,i,c)}}}catch(c){He(t,t.return,c)}if(t===e){oe=null;break}var l=t.sibling;if(l!==null){l.return=t.return,oe=l;break}oe=t.return}}var tp=Math.ceil,lo=kn.ReactCurrentDispatcher,Jl=kn.ReactCurrentOwner,qt=kn.ReactCurrentBatchConfig,ye=0,lt=null,Ze=null,ut=0,Dt=0,Ar=Jn(0),at=0,qs=null,hr=0,Co=0,Zl=0,Ss=null,Et=null,ec=0,Qr=1/0,fn=null,co=!1,ol=null,Qn=null,pa=!1,zn=null,uo=0,Cs=0,il=null,Ma=-1,za=0;function Nt(){return ye&6?Ve():Ma!==-1?Ma:Ma=Ve()}function Wn(e){return e.mode&1?ye&2&&ut!==0?ut&-ut:Oh.transition!==null?(za===0&&(za=Bu()),za):(e=Re,e!==0||(e=window.event,e=e===void 0?16:Hu(e.type)),e):1}function tn(e,t,r,s){if(50<Cs)throw Cs=0,il=null,Error(re(185));Gs(e,r,s),(!(ye&2)||e!==lt)&&(e===lt&&(!(ye&2)&&(Co|=r),at===4&&Dn(e,ut)),_t(e,s),r===1&&ye===0&&!(t.mode&1)&&(Qr=Ve()+500,jo&&Zn()))}function _t(e,t){var r=e.callbackNode;Of(e,t);var s=Ga(e,e===lt?ut:0);if(s===0)r!==null&&Ic(r),e.callbackNode=null,e.callbackPriority=0;else if(t=s&-s,e.callbackPriority!==t){if(r!=null&&Ic(r),t===1)e.tag===0?zh(Sd.bind(null,e)):f0(Sd.bind(null,e)),Ih(function(){!(ye&6)&&Zn()}),r=null;else{switch(Uu(s)){case 1:r=Cl;break;case 4:r=Fu;break;case 16:r=Wa;break;case 536870912:r=$u;break;default:r=Wa}r=um(r,sm.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function sm(e,t){if(Ma=-1,za=0,ye&6)throw Error(re(327));var r=e.callbackNode;if(Or()&&e.callbackNode!==r)return null;var s=Ga(e,e===lt?ut:0);if(s===0)return null;if(s&30||s&e.expiredLanes||t)t=mo(e,s);else{t=s;var a=ye;ye|=2;var o=om();(lt!==e||ut!==t)&&(fn=null,Qr=Ve()+500,cr(e,t));do try{sp();break}catch(l){am(e,l)}while(1);Fl(),lo.current=o,ye=a,Ze!==null?t=0:(lt=null,ut=0,t=at)}if(t!==0){if(t===2&&(a=Li(e),a!==0&&(s=a,t=ll(e,a))),t===1)throw r=qs,cr(e,0),Dn(e,s),_t(e,Ve()),r;if(t===6)Dn(e,s);else{if(a=e.current.alternate,!(s&30)&&!np(a)&&(t=mo(e,s),t===2&&(o=Li(e),o!==0&&(s=o,t=ll(e,o))),t===1))throw r=qs,cr(e,0),Dn(e,s),_t(e,Ve()),r;switch(e.finishedWork=a,e.finishedLanes=s,t){case 0:case 1:throw Error(re(345));case 2:rr(e,Et,fn);break;case 3:if(Dn(e,s),(s&130023424)===s&&(t=ec+500-Ve(),10<t)){if(Ga(e,0)!==0)break;if(a=e.suspendedLanes,(a&s)!==s){Nt(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=Ui(rr.bind(null,e,Et,fn),t);break}rr(e,Et,fn);break;case 4:if(Dn(e,s),(s&4194240)===s)break;for(t=e.eventTimes,a=-1;0<s;){var i=31-en(s);o=1<<i,i=t[i],i>a&&(a=i),s&=~o}if(s=a,s=Ve()-s,s=(120>s?120:480>s?480:1080>s?1080:1920>s?1920:3e3>s?3e3:4320>s?4320:1960*tp(s/1960))-s,10<s){e.timeoutHandle=Ui(rr.bind(null,e,Et,fn),s);break}rr(e,Et,fn);break;case 5:rr(e,Et,fn);break;default:throw Error(re(329))}}}return _t(e,Ve()),e.callbackNode===r?sm.bind(null,e):null}function ll(e,t){var r=Ss;return e.current.memoizedState.isDehydrated&&(cr(e,t).flags|=256),e=mo(e,t),e!==2&&(t=Et,Et=r,t!==null&&cl(t)),e}function cl(e){Et===null?Et=e:Et.push.apply(Et,e)}function np(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var s=0;s<r.length;s++){var a=r[s],o=a.getSnapshot;a=a.value;try{if(!nn(o(),a))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Dn(e,t){for(t&=~Zl,t&=~Co,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-en(t),s=1<<r;e[r]=-1,t&=~s}}function Sd(e){if(ye&6)throw Error(re(327));Or();var t=Ga(e,0);if(!(t&1))return _t(e,Ve()),null;var r=mo(e,t);if(e.tag!==0&&r===2){var s=Li(e);s!==0&&(t=s,r=ll(e,s))}if(r===1)throw r=qs,cr(e,0),Dn(e,t),_t(e,Ve()),r;if(r===6)throw Error(re(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,rr(e,Et,fn),_t(e,Ve()),null}function tc(e,t){var r=ye;ye|=1;try{return e(t)}finally{ye=r,ye===0&&(Qr=Ve()+500,jo&&Zn())}}function pr(e){zn!==null&&zn.tag===0&&!(ye&6)&&Or();var t=ye;ye|=1;var r=qt.transition,s=Re;try{if(qt.transition=null,Re=1,e)return e()}finally{Re=s,qt.transition=r,ye=t,!(ye&6)&&Zn()}}function nc(){Dt=Ar.current,De(Ar)}function cr(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,Ah(r)),Ze!==null)for(r=Ze.return;r!==null;){var s=r;switch(Ml(s),s.tag){case 1:s=s.type.childContextTypes,s!=null&&Ja();break;case 3:Yr(),De(Pt),De(bt),Ql();break;case 5:ql(s);break;case 4:Yr();break;case 13:De(Be);break;case 19:De(Be);break;case 10:$l(s.type._context);break;case 22:case 23:nc()}r=r.return}if(lt=e,Ze=e=Gn(e.current,null),ut=Dt=t,at=0,qs=null,Zl=Co=hr=0,Et=Ss=null,ar!==null){for(t=0;t<ar.length;t++)if(r=ar[t],s=r.interleaved,s!==null){r.interleaved=null;var a=s.next,o=r.pending;if(o!==null){var i=o.next;o.next=a,s.next=i}r.pending=s}ar=null}return e}function am(e,t){do{var r=Ze;try{if(Fl(),Ia.current=io,oo){for(var s=Ue.memoizedState;s!==null;){var a=s.queue;a!==null&&(a.pending=null),s=s.next}oo=!1}if(fr=0,it=rt=Ue=null,Ns=!1,Bs=0,Jl.current=null,r===null||r.return===null){at=1,qs=t,Ze=null;break}e:{var o=e,i=r.return,l=r,c=t;if(t=ut,l.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,m=l,h=m.tag;if(!(m.mode&1)&&(h===0||h===11||h===15)){var f=m.alternate;f?(m.updateQueue=f.updateQueue,m.memoizedState=f.memoizedState,m.lanes=f.lanes):(m.updateQueue=null,m.memoizedState=null)}var w=md(i);if(w!==null){w.flags&=-257,fd(w,i,l,o,t),w.mode&1&&ud(o,u,t),t=w,c=u;var x=t.updateQueue;if(x===null){var j=new Set;j.add(c),t.updateQueue=j}else x.add(c);break e}else{if(!(t&1)){ud(o,u,t),rc();break e}c=Error(re(426))}}else if(Oe&&l.mode&1){var S=md(i);if(S!==null){!(S.flags&65536)&&(S.flags|=256),fd(S,i,l,o,t),zl(qr(c,l));break e}}o=c=qr(c,l),at!==4&&(at=2),Ss===null?Ss=[o]:Ss.push(o),o=i;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var y=U0(o,c,t);ad(o,y);break e;case 1:l=c;var g=o.type,v=o.stateNode;if(!(o.flags&128)&&(typeof g.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(Qn===null||!Qn.has(v)))){o.flags|=65536,t&=-t,o.lanes|=t;var N=Y0(o,l,t);ad(o,N);break e}}o=o.return}while(o!==null)}lm(r)}catch(C){t=C,Ze===r&&r!==null&&(Ze=r=r.return);continue}break}while(1)}function om(){var e=lo.current;return lo.current=io,e===null?io:e}function rc(){(at===0||at===3||at===2)&&(at=4),lt===null||!(hr&268435455)&&!(Co&268435455)||Dn(lt,ut)}function mo(e,t){var r=ye;ye|=2;var s=om();(lt!==e||ut!==t)&&(fn=null,cr(e,t));do try{rp();break}catch(a){am(e,a)}while(1);if(Fl(),ye=r,lo.current=s,Ze!==null)throw Error(re(261));return lt=null,ut=0,at}function rp(){for(;Ze!==null;)im(Ze)}function sp(){for(;Ze!==null&&!Pf();)im(Ze)}function im(e){var t=dm(e.alternate,e,Dt);e.memoizedProps=e.pendingProps,t===null?lm(e):Ze=t,Jl.current=null}function lm(e){var t=e;do{var r=t.alternate;if(e=t.return,t.flags&32768){if(r=Vh(r,t),r!==null){r.flags&=32767,Ze=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{at=6,Ze=null;return}}else if(r=Xh(r,t,Dt),r!==null){Ze=r;return}if(t=t.sibling,t!==null){Ze=t;return}Ze=t=e}while(t!==null);at===0&&(at=5)}function rr(e,t,r){var s=Re,a=qt.transition;try{qt.transition=null,Re=1,ap(e,t,r,s)}finally{qt.transition=a,Re=s}return null}function ap(e,t,r,s){do Or();while(zn!==null);if(ye&6)throw Error(re(327));r=e.finishedWork;var a=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(re(177));e.callbackNode=null,e.callbackPriority=0;var o=r.lanes|r.childLanes;if(Ff(e,o),e===lt&&(Ze=lt=null,ut=0),!(r.subtreeFlags&2064)&&!(r.flags&2064)||pa||(pa=!0,um(Wa,function(){return Or(),null})),o=(r.flags&15990)!==0,r.subtreeFlags&15990||o){o=qt.transition,qt.transition=null;var i=Re;Re=1;var l=ye;ye|=4,Jl.current=null,Zh(e,r),nm(r,e),Sh($i),Ha=!!Fi,$i=Fi=null,e.current=r,ep(r),Rf(),ye=l,Re=i,qt.transition=o}else e.current=r;if(pa&&(pa=!1,zn=e,uo=a),o=e.pendingLanes,o===0&&(Qn=null),If(r.stateNode),_t(e,Ve()),t!==null)for(s=e.onRecoverableError,r=0;r<t.length;r++)a=t[r],s(a.value,{componentStack:a.stack,digest:a.digest});if(co)throw co=!1,e=ol,ol=null,e;return uo&1&&e.tag!==0&&Or(),o=e.pendingLanes,o&1?e===il?Cs++:(Cs=0,il=e):Cs=0,Zn(),null}function Or(){if(zn!==null){var e=Uu(uo),t=qt.transition,r=Re;try{if(qt.transition=null,Re=16>e?16:e,zn===null)var s=!1;else{if(e=zn,zn=null,uo=0,ye&6)throw Error(re(331));var a=ye;for(ye|=4,oe=e.current;oe!==null;){var o=oe,i=o.child;if(oe.flags&16){var l=o.deletions;if(l!==null){for(var c=0;c<l.length;c++){var u=l[c];for(oe=u;oe!==null;){var m=oe;switch(m.tag){case 0:case 11:case 15:ks(8,m,o)}var h=m.child;if(h!==null)h.return=m,oe=h;else for(;oe!==null;){m=oe;var f=m.sibling,w=m.return;if(Z0(m),m===u){oe=null;break}if(f!==null){f.return=w,oe=f;break}oe=w}}}var x=o.alternate;if(x!==null){var j=x.child;if(j!==null){x.child=null;do{var S=j.sibling;j.sibling=null,j=S}while(j!==null)}}oe=o}}if(o.subtreeFlags&2064&&i!==null)i.return=o,oe=i;else e:for(;oe!==null;){if(o=oe,o.flags&2048)switch(o.tag){case 0:case 11:case 15:ks(9,o,o.return)}var y=o.sibling;if(y!==null){y.return=o.return,oe=y;break e}oe=o.return}}var g=e.current;for(oe=g;oe!==null;){i=oe;var v=i.child;if(i.subtreeFlags&2064&&v!==null)v.return=i,oe=v;else e:for(i=g;oe!==null;){if(l=oe,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:So(9,l)}}catch(C){He(l,l.return,C)}if(l===i){oe=null;break e}var N=l.sibling;if(N!==null){N.return=l.return,oe=N;break e}oe=l.return}}if(ye=a,Zn(),cn&&typeof cn.onPostCommitFiberRoot=="function")try{cn.onPostCommitFiberRoot(go,e)}catch{}s=!0}return s}finally{Re=r,qt.transition=t}}return!1}function Cd(e,t,r){t=qr(r,t),t=U0(e,t,1),e=qn(e,t,1),t=Nt(),e!==null&&(Gs(e,1,t),_t(e,t))}function He(e,t,r){if(e.tag===3)Cd(e,e,r);else for(;t!==null;){if(t.tag===3){Cd(t,e,r);break}else if(t.tag===1){var s=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(Qn===null||!Qn.has(s))){e=qr(r,e),e=Y0(t,e,1),t=qn(t,e,1),e=Nt(),t!==null&&(Gs(t,1,e),_t(t,e));break}}t=t.return}}function op(e,t,r){var s=e.pingCache;s!==null&&s.delete(t),t=Nt(),e.pingedLanes|=e.suspendedLanes&r,lt===e&&(ut&r)===r&&(at===4||at===3&&(ut&130023424)===ut&&500>Ve()-ec?cr(e,0):Zl|=r),_t(e,t)}function cm(e,t){t===0&&(e.mode&1?(t=aa,aa<<=1,!(aa&130023424)&&(aa=4194304)):t=1);var r=Nt();e=wn(e,t),e!==null&&(Gs(e,t,r),_t(e,r))}function ip(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),cm(e,r)}function lp(e,t){var r=0;switch(e.tag){case 13:var s=e.stateNode,a=e.memoizedState;a!==null&&(r=a.retryLane);break;case 19:s=e.stateNode;break;default:throw Error(re(314))}s!==null&&s.delete(t),cm(e,r)}var dm;dm=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||Pt.current)Tt=!0;else{if(!(e.lanes&r)&&!(t.flags&128))return Tt=!1,Kh(e,t,r);Tt=!!(e.flags&131072)}else Tt=!1,Oe&&t.flags&1048576&&h0(t,to,t.index);switch(t.lanes=0,t.tag){case 2:var s=t.type;Da(e,t),e=t.pendingProps;var a=$r(t,bt.current);zr(t,r),a=Gl(null,t,s,e,a,r);var o=Hl();return t.flags|=1,typeof a=="object"&&a!==null&&typeof a.render=="function"&&a.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Rt(s)?(o=!0,Za(t)):o=!1,t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,Ul(t),a.updater=ko,t.stateNode=a,a._reactInternals=t,Ki(t,s,e,r),t=Ji(null,t,s,!0,o,r)):(t.tag=0,Oe&&o&&Dl(t),jt(null,t,a,r),t=t.child),t;case 16:s=t.elementType;e:{switch(Da(e,t),e=t.pendingProps,a=s._init,s=a(s._payload),t.type=s,a=t.tag=dp(s),e=Xt(s,e),a){case 0:t=Vi(null,t,s,e,r);break e;case 1:t=xd(null,t,s,e,r);break e;case 11:t=hd(null,t,s,e,r);break e;case 14:t=pd(null,t,s,Xt(s.type,e),r);break e}throw Error(re(306,s,""))}return t;case 0:return s=t.type,a=t.pendingProps,a=t.elementType===s?a:Xt(s,a),Vi(e,t,s,a,r);case 1:return s=t.type,a=t.pendingProps,a=t.elementType===s?a:Xt(s,a),xd(e,t,s,a,r);case 3:e:{if(G0(t),e===null)throw Error(re(387));s=t.pendingProps,o=t.memoizedState,a=o.element,b0(e,t),so(t,s,null,r);var i=t.memoizedState;if(s=i.element,o.isDehydrated)if(o={element:s,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){a=qr(Error(re(423)),t),t=gd(e,t,s,r,a);break e}else if(s!==a){a=qr(Error(re(424)),t),t=gd(e,t,s,r,a);break e}else for(Mt=Yn(t.stateNode.containerInfo.firstChild),zt=t,Oe=!0,Zt=null,r=v0(t,null,s,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(Br(),s===a){t=jn(e,t,r);break e}jt(e,t,s,r)}t=t.child}return t;case 5:return w0(t),e===null&&Wi(t),s=t.type,a=t.pendingProps,o=e!==null?e.memoizedProps:null,i=a.children,Bi(s,a)?i=null:o!==null&&Bi(s,o)&&(t.flags|=32),W0(e,t),jt(e,t,i,r),t.child;case 6:return e===null&&Wi(t),null;case 13:return H0(e,t,r);case 4:return Yl(t,t.stateNode.containerInfo),s=t.pendingProps,e===null?t.child=Ur(t,null,s,r):jt(e,t,s,r),t.child;case 11:return s=t.type,a=t.pendingProps,a=t.elementType===s?a:Xt(s,a),hd(e,t,s,a,r);case 7:return jt(e,t,t.pendingProps,r),t.child;case 8:return jt(e,t,t.pendingProps.children,r),t.child;case 12:return jt(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(s=t.type._context,a=t.pendingProps,o=t.memoizedProps,i=a.value,Ae(no,s._currentValue),s._currentValue=i,o!==null)if(nn(o.value,i)){if(o.children===a.children&&!Pt.current){t=jn(e,t,r);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var l=o.dependencies;if(l!==null){i=o.child;for(var c=l.firstContext;c!==null;){if(c.context===s){if(o.tag===1){c=gn(-1,r&-r),c.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var m=u.pending;m===null?c.next=c:(c.next=m.next,m.next=c),u.pending=c}}o.lanes|=r,c=o.alternate,c!==null&&(c.lanes|=r),Gi(o.return,r,t),l.lanes|=r;break}c=c.next}}else if(o.tag===10)i=o.type===t.type?null:o.child;else if(o.tag===18){if(i=o.return,i===null)throw Error(re(341));i.lanes|=r,l=i.alternate,l!==null&&(l.lanes|=r),Gi(i,r,t),i=o.sibling}else i=o.child;if(i!==null)i.return=o;else for(i=o;i!==null;){if(i===t){i=null;break}if(o=i.sibling,o!==null){o.return=i.return,i=o;break}i=i.return}o=i}jt(e,t,a.children,r),t=t.child}return t;case 9:return a=t.type,s=t.pendingProps.children,zr(t,r),a=Qt(a),s=s(a),t.flags|=1,jt(e,t,s,r),t.child;case 14:return s=t.type,a=Xt(s,t.pendingProps),a=Xt(s.type,a),pd(e,t,s,a,r);case 15:return q0(e,t,t.type,t.pendingProps,r);case 17:return s=t.type,a=t.pendingProps,a=t.elementType===s?a:Xt(s,a),Da(e,t),t.tag=1,Rt(s)?(e=!0,Za(t)):e=!1,zr(t,r),B0(t,s,a),Ki(t,s,a,r),Ji(null,t,s,!0,e,r);case 19:return K0(e,t,r);case 22:return Q0(e,t,r)}throw Error(re(156,t.tag))};function um(e,t){return Ou(e,t)}function cp(e,t,r,s){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Yt(e,t,r,s){return new cp(e,t,r,s)}function sc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function dp(e){if(typeof e=="function")return sc(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Nl)return 11;if(e===kl)return 14}return 2}function Gn(e,t){var r=e.alternate;return r===null?(r=Yt(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function Oa(e,t,r,s,a,o){var i=2;if(s=e,typeof e=="function")sc(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case jr:return dr(r.children,a,o,t);case jl:i=8,a|=8;break;case yi:return e=Yt(12,r,t,a|2),e.elementType=yi,e.lanes=o,e;case bi:return e=Yt(13,r,t,a),e.elementType=bi,e.lanes=o,e;case wi:return e=Yt(19,r,t,a),e.elementType=wi,e.lanes=o,e;case wu:return Eo(r,a,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case yu:i=10;break e;case bu:i=9;break e;case Nl:i=11;break e;case kl:i=14;break e;case _n:i=16,s=null;break e}throw Error(re(130,e==null?e:typeof e,""))}return t=Yt(i,r,t,a),t.elementType=e,t.type=s,t.lanes=o,t}function dr(e,t,r,s){return e=Yt(7,e,s,t),e.lanes=r,e}function Eo(e,t,r,s){return e=Yt(22,e,s,t),e.elementType=wu,e.lanes=r,e.stateNode={isHidden:!1},e}function ii(e,t,r){return e=Yt(6,e,null,t),e.lanes=r,e}function li(e,t,r){return t=Yt(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function up(e,t,r,s,a){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Uo(0),this.expirationTimes=Uo(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Uo(0),this.identifierPrefix=s,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function ac(e,t,r,s,a,o,i,l,c){return e=new up(e,t,r,l,c),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Yt(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:s,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ul(o),e}function mp(e,t,r){var s=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:wr,key:s==null?null:""+s,children:e,containerInfo:t,implementation:r}}function mm(e){if(!e)return Kn;e=e._reactInternals;e:{if(gr(e)!==e||e.tag!==1)throw Error(re(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Rt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(re(171))}if(e.tag===1){var r=e.type;if(Rt(r))return m0(e,r,t)}return t}function fm(e,t,r,s,a,o,i,l,c){return e=ac(r,s,!0,e,a,o,i,l,c),e.context=mm(null),r=e.current,s=Nt(),a=Wn(r),o=gn(s,a),o.callback=t??null,qn(r,o,a),e.current.lanes=a,Gs(e,a,s),_t(e,s),e}function To(e,t,r,s){var a=t.current,o=Nt(),i=Wn(a);return r=mm(r),t.context===null?t.context=r:t.pendingContext=r,t=gn(o,i),t.payload={element:e},s=s===void 0?null:s,s!==null&&(t.callback=s),e=qn(a,t,i),e!==null&&(tn(e,a,i,o),Aa(e,a,i)),i}function fo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Ed(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function oc(e,t){Ed(e,t),(e=e.alternate)&&Ed(e,t)}function fp(){return null}var hm=typeof reportError=="function"?reportError:function(e){console.error(e)};function ic(e){this._internalRoot=e}Po.prototype.render=ic.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(re(409));To(e,t,null,null)};Po.prototype.unmount=ic.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;pr(function(){To(null,e,null,null)}),t[bn]=null}};function Po(e){this._internalRoot=e}Po.prototype.unstable_scheduleHydration=function(e){if(e){var t=Qu();e={blockedOn:null,target:e,priority:t};for(var r=0;r<Ln.length&&t!==0&&t<Ln[r].priority;r++);Ln.splice(r,0,e),r===0&&Gu(e)}};function lc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ro(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Td(){}function hp(e,t,r,s,a){if(a){if(typeof s=="function"){var o=s;s=function(){var u=fo(i);o.call(u)}}var i=fm(t,s,e,0,null,!1,!1,"",Td);return e._reactRootContainer=i,e[bn]=i.current,Ms(e.nodeType===8?e.parentNode:e),pr(),i}for(;a=e.lastChild;)e.removeChild(a);if(typeof s=="function"){var l=s;s=function(){var u=fo(c);l.call(u)}}var c=ac(e,0,!1,null,null,!1,!1,"",Td);return e._reactRootContainer=c,e[bn]=c.current,Ms(e.nodeType===8?e.parentNode:e),pr(function(){To(t,c,r,s)}),c}function _o(e,t,r,s,a){var o=r._reactRootContainer;if(o){var i=o;if(typeof a=="function"){var l=a;a=function(){var c=fo(i);l.call(c)}}To(t,i,e,a)}else i=hp(r,t,e,a,s);return fo(i)}Yu=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=xs(t.pendingLanes);r!==0&&(El(t,r|1),_t(t,Ve()),!(ye&6)&&(Qr=Ve()+500,Zn()))}break;case 13:pr(function(){var s=wn(e,1);if(s!==null){var a=Nt();tn(s,e,1,a)}}),oc(e,1)}};Tl=function(e){if(e.tag===13){var t=wn(e,134217728);if(t!==null){var r=Nt();tn(t,e,134217728,r)}oc(e,134217728)}};qu=function(e){if(e.tag===13){var t=Wn(e),r=wn(e,t);if(r!==null){var s=Nt();tn(r,e,t,s)}oc(e,t)}};Qu=function(){return Re};Wu=function(e,t){var r=Re;try{return Re=e,t()}finally{Re=r}};_i=function(e,t,r){switch(t){case"input":if(ki(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var s=r[t];if(s!==e&&s.form===e.form){var a=wo(s);if(!a)throw Error(re(90));Nu(s),ki(s,a)}}}break;case"textarea":Su(e,r);break;case"select":t=r.value,t!=null&&Ir(e,!!r.multiple,t,!1)}};Au=tc;Iu=pr;var pp={usingClientEntryPoint:!1,Events:[Ks,Cr,wo,Ru,_u,tc]},ls={findFiberByHostInstance:sr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},xp={bundleType:ls.bundleType,version:ls.version,rendererPackageName:ls.rendererPackageName,rendererConfig:ls.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:kn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Mu(e),e===null?null:e.stateNode},findFiberByHostInstance:ls.findFiberByHostInstance||fp,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var xa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!xa.isDisabled&&xa.supportsFiber)try{go=xa.inject(xp),cn=xa}catch{}}Ft.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=pp;Ft.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!lc(t))throw Error(re(200));return mp(e,t,null,r)};Ft.createRoot=function(e,t){if(!lc(e))throw Error(re(299));var r=!1,s="",a=hm;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),t=ac(e,1,!1,null,null,r,!1,s,a),e[bn]=t.current,Ms(e.nodeType===8?e.parentNode:e),new ic(t)};Ft.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(re(188)):(e=Object.keys(e).join(","),Error(re(268,e)));return e=Mu(t),e=e===null?null:e.stateNode,e};Ft.flushSync=function(e){return pr(e)};Ft.hydrate=function(e,t,r){if(!Ro(t))throw Error(re(200));return _o(null,e,t,!0,r)};Ft.hydrateRoot=function(e,t,r){if(!lc(e))throw Error(re(405));var s=r!=null&&r.hydratedSources||null,a=!1,o="",i=hm;if(r!=null&&(r.unstable_strictMode===!0&&(a=!0),r.identifierPrefix!==void 0&&(o=r.identifierPrefix),r.onRecoverableError!==void 0&&(i=r.onRecoverableError)),t=fm(t,null,e,1,r??null,a,!1,o,i),e[bn]=t.current,Ms(e),s)for(e=0;e<s.length;e++)r=s[e],a=r._getVersion,a=a(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,a]:t.mutableSourceEagerHydrationData.push(r,a);return new Po(t)};Ft.render=function(e,t,r){if(!Ro(t))throw Error(re(200));return _o(null,e,t,!1,r)};Ft.unmountComponentAtNode=function(e){if(!Ro(e))throw Error(re(40));return e._reactRootContainer?(pr(function(){_o(null,null,e,!1,function(){e._reactRootContainer=null,e[bn]=null})}),!0):!1};Ft.unstable_batchedUpdates=tc;Ft.unstable_renderSubtreeIntoContainer=function(e,t,r,s){if(!Ro(r))throw Error(re(200));if(e==null||e._reactInternals===void 0)throw Error(re(38));return _o(e,t,r,!1,s)};Ft.version="18.3.1-next-f1338f8080-20240426";function pm(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(pm)}catch(e){console.error(e)}}pm(),pu.exports=Ft;var gp=pu.exports,Pd=gp;gi.createRoot=Pd.createRoot,gi.hydrateRoot=Pd.hydrateRoot;const vp="modulepreload",yp=function(e){return"/"+e},Rd={},cc=function(t,r,s){if(!r||r.length===0)return t();const a=document.getElementsByTagName("link");return Promise.all(r.map(o=>{if(o=yp(o),o in Rd)return;Rd[o]=!0;const i=o.endsWith(".css"),l=i?'[rel="stylesheet"]':"";if(!!s)for(let m=a.length-1;m>=0;m--){const h=a[m];if(h.href===o&&(!i||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${l}`))return;const u=document.createElement("link");if(u.rel=i?"stylesheet":vp,i||(u.as="script",u.crossOrigin=""),u.href=o,document.head.appendChild(u),i)return new Promise((m,h)=>{u.addEventListener("load",m),u.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>t()).catch(o=>{const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=o,window.dispatchEvent(i),!i.defaultPrevented)throw o})};var _d="popstate";function bp(e={}){function t(s,a){let{pathname:o,search:i,hash:l}=s.location;return dl("",{pathname:o,search:i,hash:l},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}function r(s,a){return typeof a=="string"?a:Qs(a)}return jp(t,r,null,e)}function Fe(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Gt(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function wp(){return Math.random().toString(36).substring(2,10)}function Ad(e,t){return{usr:e.state,key:e.key,idx:t}}function dl(e,t,r=null,s){return{pathname:typeof e=="string"?e:e.pathname,search:"",hash:"",...typeof t=="string"?Xr(t):t,state:r,key:t&&t.key||s||wp()}}function Qs({pathname:e="/",search:t="",hash:r=""}){return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Xr(e){let t={};if(e){let r=e.indexOf("#");r>=0&&(t.hash=e.substring(r),e=e.substring(0,r));let s=e.indexOf("?");s>=0&&(t.search=e.substring(s),e=e.substring(0,s)),e&&(t.pathname=e)}return t}function jp(e,t,r,s={}){let{window:a=document.defaultView,v5Compat:o=!1}=s,i=a.history,l="POP",c=null,u=m();u==null&&(u=0,i.replaceState({...i.state,idx:u},""));function m(){return(i.state||{idx:null}).idx}function h(){l="POP";let S=m(),y=S==null?null:S-u;u=S,c&&c({action:l,location:j.location,delta:y})}function f(S,y){l="PUSH";let g=dl(j.location,S,y);r&&r(g,S),u=m()+1;let v=Ad(g,u),N=j.createHref(g);try{i.pushState(v,"",N)}catch(C){if(C instanceof DOMException&&C.name==="DataCloneError")throw C;a.location.assign(N)}o&&c&&c({action:l,location:j.location,delta:1})}function w(S,y){l="REPLACE";let g=dl(j.location,S,y);r&&r(g,S),u=m();let v=Ad(g,u),N=j.createHref(g);i.replaceState(v,"",N),o&&c&&c({action:l,location:j.location,delta:0})}function x(S){return Np(S)}let j={get action(){return l},get location(){return e(a,i)},listen(S){if(c)throw new Error("A history only accepts one active listener");return a.addEventListener(_d,h),c=S,()=>{a.removeEventListener(_d,h),c=null}},createHref(S){return t(a,S)},createURL:x,encodeLocation(S){let y=x(S);return{pathname:y.pathname,search:y.search,hash:y.hash}},push:f,replace:w,go(S){return i.go(S)}};return j}function Np(e,t=!1){let r="http://localhost";typeof window<"u"&&(r=window.location.origin!=="null"?window.location.origin:window.location.href),Fe(r,"No window.location.(origin|href) available to create URL");let s=typeof e=="string"?e:Qs(e);return s=s.replace(/ $/,"%20"),!t&&s.startsWith("//")&&(s=r+s),new URL(s,r)}function xm(e,t,r="/"){return kp(e,t,r,!1)}function kp(e,t,r,s){let a=typeof t=="string"?Xr(t):t,o=Nn(a.pathname||"/",r);if(o==null)return null;let i=gm(e);Sp(i);let l=null;for(let c=0;l==null&&c<i.length;++c){let u=Mp(o);l=Lp(i[c],u,s)}return l}function gm(e,t=[],r=[],s=""){let a=(o,i,l)=>{let c={relativePath:l===void 0?o.path||"":l,caseSensitive:o.caseSensitive===!0,childrenIndex:i,route:o};c.relativePath.startsWith("/")&&(Fe(c.relativePath.startsWith(s),`Absolute route path "${c.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),c.relativePath=c.relativePath.slice(s.length));let u=vn([s,c.relativePath]),m=r.concat(c);o.children&&o.children.length>0&&(Fe(o.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${u}".`),gm(o.children,t,m,u)),!(o.path==null&&!o.index)&&t.push({path:u,score:Ap(u,o.index),routesMeta:m})};return e.forEach((o,i)=>{var l;if(o.path===""||!((l=o.path)!=null&&l.includes("?")))a(o,i);else for(let c of vm(o.path))a(o,i,c)}),t}function vm(e){let t=e.split("/");if(t.length===0)return[];let[r,...s]=t,a=r.endsWith("?"),o=r.replace(/\?$/,"");if(s.length===0)return a?[o,""]:[o];let i=vm(s.join("/")),l=[];return l.push(...i.map(c=>c===""?o:[o,c].join("/"))),a&&l.push(...i),l.map(c=>e.startsWith("/")&&c===""?"/":c)}function Sp(e){e.sort((t,r)=>t.score!==r.score?r.score-t.score:Ip(t.routesMeta.map(s=>s.childrenIndex),r.routesMeta.map(s=>s.childrenIndex)))}var Cp=/^:[\w-]+$/,Ep=3,Tp=2,Pp=1,Rp=10,_p=-2,Id=e=>e==="*";function Ap(e,t){let r=e.split("/"),s=r.length;return r.some(Id)&&(s+=_p),t&&(s+=Tp),r.filter(a=>!Id(a)).reduce((a,o)=>a+(Cp.test(o)?Ep:o===""?Pp:Rp),s)}function Ip(e,t){return e.length===t.length&&e.slice(0,-1).every((s,a)=>s===t[a])?e[e.length-1]-t[t.length-1]:0}function Lp(e,t,r=!1){let{routesMeta:s}=e,a={},o="/",i=[];for(let l=0;l<s.length;++l){let c=s[l],u=l===s.length-1,m=o==="/"?t:t.slice(o.length)||"/",h=ho({path:c.relativePath,caseSensitive:c.caseSensitive,end:u},m),f=c.route;if(!h&&u&&r&&!s[s.length-1].route.index&&(h=ho({path:c.relativePath,caseSensitive:c.caseSensitive,end:!1},m)),!h)return null;Object.assign(a,h.params),i.push({params:a,pathname:vn([o,h.pathname]),pathnameBase:$p(vn([o,h.pathnameBase])),route:f}),h.pathnameBase!=="/"&&(o=vn([o,h.pathnameBase]))}return i}function ho(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[r,s]=Dp(e.path,e.caseSensitive,e.end),a=t.match(r);if(!a)return null;let o=a[0],i=o.replace(/(.)\/+$/,"$1"),l=a.slice(1);return{params:s.reduce((u,{paramName:m,isOptional:h},f)=>{if(m==="*"){let x=l[f]||"";i=o.slice(0,o.length-x.length).replace(/(.)\/+$/,"$1")}const w=l[f];return h&&!w?u[m]=void 0:u[m]=(w||"").replace(/%2F/g,"/"),u},{}),pathname:o,pathnameBase:i,pattern:e}}function Dp(e,t=!1,r=!0){Gt(e==="*"||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let s=[],a="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(i,l,c)=>(s.push({paramName:l,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(s.push({paramName:"*"}),a+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?a+="\\/*$":e!==""&&e!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,t?void 0:"i"),s]}function Mp(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Gt(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function Nn(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let r=t.endsWith("/")?t.length-1:t.length,s=e.charAt(r);return s&&s!=="/"?null:e.slice(r)||"/"}function zp(e,t="/"){let{pathname:r,search:s="",hash:a=""}=typeof e=="string"?Xr(e):e;return{pathname:r?r.startsWith("/")?r:Op(r,t):t,search:Bp(s),hash:Up(a)}}function Op(e,t){let r=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(a=>{a===".."?r.length>1&&r.pop():a!=="."&&r.push(a)}),r.length>1?r.join("/"):"/"}function ci(e,t,r,s){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${r}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Fp(e){return e.filter((t,r)=>r===0||t.route.path&&t.route.path.length>0)}function dc(e){let t=Fp(e);return t.map((r,s)=>s===t.length-1?r.pathname:r.pathnameBase)}function uc(e,t,r,s=!1){let a;typeof e=="string"?a=Xr(e):(a={...e},Fe(!a.pathname||!a.pathname.includes("?"),ci("?","pathname","search",a)),Fe(!a.pathname||!a.pathname.includes("#"),ci("#","pathname","hash",a)),Fe(!a.search||!a.search.includes("#"),ci("#","search","hash",a)));let o=e===""||a.pathname==="",i=o?"/":a.pathname,l;if(i==null)l=r;else{let h=t.length-1;if(!s&&i.startsWith("..")){let f=i.split("/");for(;f[0]==="..";)f.shift(),h-=1;a.pathname=f.join("/")}l=h>=0?t[h]:"/"}let c=zp(a,l),u=i&&i!=="/"&&i.endsWith("/"),m=(o||i===".")&&r.endsWith("/");return!c.pathname.endsWith("/")&&(u||m)&&(c.pathname+="/"),c}var vn=e=>e.join("/").replace(/\/\/+/g,"/"),$p=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Bp=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Up=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Yp(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}var ym=["POST","PUT","PATCH","DELETE"];new Set(ym);var qp=["GET",...ym];new Set(qp);var Vr=d.createContext(null);Vr.displayName="DataRouter";var Ao=d.createContext(null);Ao.displayName="DataRouterState";d.createContext(!1);var bm=d.createContext({isTransitioning:!1});bm.displayName="ViewTransition";var Qp=d.createContext(new Map);Qp.displayName="Fetchers";var Wp=d.createContext(null);Wp.displayName="Await";var rn=d.createContext(null);rn.displayName="Navigation";var Vs=d.createContext(null);Vs.displayName="Location";var Ht=d.createContext({outlet:null,matches:[],isDataRoute:!1});Ht.displayName="Route";var mc=d.createContext(null);mc.displayName="RouteError";function Gp(e,{relative:t}={}){Fe(Jr(),"useHref() may be used only in the context of a <Router> component.");let{basename:r,navigator:s}=d.useContext(rn),{hash:a,pathname:o,search:i}=Js(e,{relative:t}),l=o;return r!=="/"&&(l=o==="/"?r:vn([r,o])),s.createHref({pathname:l,search:i,hash:a})}function Jr(){return d.useContext(Vs)!=null}function Je(){return Fe(Jr(),"useLocation() may be used only in the context of a <Router> component."),d.useContext(Vs).location}var wm="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function jm(e){d.useContext(rn).static||d.useLayoutEffect(e)}function je(){let{isDataRoute:e}=d.useContext(Ht);return e?cx():Hp()}function Hp(){Fe(Jr(),"useNavigate() may be used only in the context of a <Router> component.");let e=d.useContext(Vr),{basename:t,navigator:r}=d.useContext(rn),{matches:s}=d.useContext(Ht),{pathname:a}=Je(),o=JSON.stringify(dc(s)),i=d.useRef(!1);return jm(()=>{i.current=!0}),d.useCallback((c,u={})=>{if(Gt(i.current,wm),!i.current)return;if(typeof c=="number"){r.go(c);return}let m=uc(c,JSON.parse(o),a,u.relative==="path");e==null&&t!=="/"&&(m.pathname=m.pathname==="/"?t:vn([t,m.pathname])),(u.replace?r.replace:r.push)(m,u.state,u)},[t,r,o,a,e])}var Kp=d.createContext(null);function Xp(e){let t=d.useContext(Ht).outlet;return t&&d.createElement(Kp.Provider,{value:e},t)}function Vp(){let{matches:e}=d.useContext(Ht),t=e[e.length-1];return t?t.params:{}}function Js(e,{relative:t}={}){let{matches:r}=d.useContext(Ht),{pathname:s}=Je(),a=JSON.stringify(dc(r));return d.useMemo(()=>uc(e,JSON.parse(a),s,t==="path"),[e,a,s,t])}function Jp(e,t){return Nm(e,t)}function Nm(e,t,r,s){var y;Fe(Jr(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:a}=d.useContext(rn),{matches:o}=d.useContext(Ht),i=o[o.length-1],l=i?i.params:{},c=i?i.pathname:"/",u=i?i.pathnameBase:"/",m=i&&i.route;{let g=m&&m.path||"";km(c,!m||g.endsWith("*")||g.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${c}" (under <Route path="${g}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${g}"> to <Route path="${g==="/"?"*":`${g}/*`}">.`)}let h=Je(),f;if(t){let g=typeof t=="string"?Xr(t):t;Fe(u==="/"||((y=g.pathname)==null?void 0:y.startsWith(u)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${u}" but pathname "${g.pathname}" was given in the \`location\` prop.`),f=g}else f=h;let w=f.pathname||"/",x=w;if(u!=="/"){let g=u.replace(/^\//,"").split("/");x="/"+w.replace(/^\//,"").split("/").slice(g.length).join("/")}let j=xm(e,{pathname:x});Gt(m||j!=null,`No routes matched location "${f.pathname}${f.search}${f.hash}" `),Gt(j==null||j[j.length-1].route.element!==void 0||j[j.length-1].route.Component!==void 0||j[j.length-1].route.lazy!==void 0,`Matched leaf route at location "${f.pathname}${f.search}${f.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let S=rx(j&&j.map(g=>Object.assign({},g,{params:Object.assign({},l,g.params),pathname:vn([u,a.encodeLocation?a.encodeLocation(g.pathname).pathname:g.pathname]),pathnameBase:g.pathnameBase==="/"?u:vn([u,a.encodeLocation?a.encodeLocation(g.pathnameBase).pathname:g.pathnameBase])})),o,r,s);return t&&S?d.createElement(Vs.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...f},navigationType:"POP"}},S):S}function Zp(){let e=lx(),t=Yp(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,s="rgba(200,200,200, 0.5)",a={padding:"0.5rem",backgroundColor:s},o={padding:"2px 4px",backgroundColor:s},i=null;return console.error("Error handled by React Router default ErrorBoundary:",e),i=d.createElement(d.Fragment,null,d.createElement("p",null,"💿 Hey developer 👋"),d.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",d.createElement("code",{style:o},"ErrorBoundary")," or"," ",d.createElement("code",{style:o},"errorElement")," prop on your route.")),d.createElement(d.Fragment,null,d.createElement("h2",null,"Unexpected Application Error!"),d.createElement("h3",{style:{fontStyle:"italic"}},t),r?d.createElement("pre",{style:a},r):null,i)}var ex=d.createElement(Zp,null),tx=class extends d.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return this.state.error!==void 0?d.createElement(Ht.Provider,{value:this.props.routeContext},d.createElement(mc.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function nx({routeContext:e,match:t,children:r}){let s=d.useContext(Vr);return s&&s.static&&s.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=t.route.id),d.createElement(Ht.Provider,{value:e},r)}function rx(e,t=[],r=null,s=null){if(e==null){if(!r)return null;if(r.errors)e=r.matches;else if(t.length===0&&!r.initialized&&r.matches.length>0)e=r.matches;else return null}let a=e,o=r==null?void 0:r.errors;if(o!=null){let c=a.findIndex(u=>u.route.id&&(o==null?void 0:o[u.route.id])!==void 0);Fe(c>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(o).join(",")}`),a=a.slice(0,Math.min(a.length,c+1))}let i=!1,l=-1;if(r)for(let c=0;c<a.length;c++){let u=a[c];if((u.route.HydrateFallback||u.route.hydrateFallbackElement)&&(l=c),u.route.id){let{loaderData:m,errors:h}=r,f=u.route.loader&&!m.hasOwnProperty(u.route.id)&&(!h||h[u.route.id]===void 0);if(u.route.lazy||f){i=!0,l>=0?a=a.slice(0,l+1):a=[a[0]];break}}}return a.reduceRight((c,u,m)=>{let h,f=!1,w=null,x=null;r&&(h=o&&u.route.id?o[u.route.id]:void 0,w=u.route.errorElement||ex,i&&(l<0&&m===0?(km("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),f=!0,x=null):l===m&&(f=!0,x=u.route.hydrateFallbackElement||null)));let j=t.concat(a.slice(0,m+1)),S=()=>{let y;return h?y=w:f?y=x:u.route.Component?y=d.createElement(u.route.Component,null):u.route.element?y=u.route.element:y=c,d.createElement(nx,{match:u,routeContext:{outlet:c,matches:j,isDataRoute:r!=null},children:y})};return r&&(u.route.ErrorBoundary||u.route.errorElement||m===0)?d.createElement(tx,{location:r.location,revalidation:r.revalidation,component:w,error:h,children:S(),routeContext:{outlet:null,matches:j,isDataRoute:!0}}):S()},null)}function fc(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function sx(e){let t=d.useContext(Vr);return Fe(t,fc(e)),t}function ax(e){let t=d.useContext(Ao);return Fe(t,fc(e)),t}function ox(e){let t=d.useContext(Ht);return Fe(t,fc(e)),t}function hc(e){let t=ox(e),r=t.matches[t.matches.length-1];return Fe(r.route.id,`${e} can only be used on routes that contain a unique "id"`),r.route.id}function ix(){return hc("useRouteId")}function lx(){var s;let e=d.useContext(mc),t=ax("useRouteError"),r=hc("useRouteError");return e!==void 0?e:(s=t.errors)==null?void 0:s[r]}function cx(){let{router:e}=sx("useNavigate"),t=hc("useNavigate"),r=d.useRef(!1);return jm(()=>{r.current=!0}),d.useCallback(async(a,o={})=>{Gt(r.current,wm),r.current&&(typeof a=="number"?e.navigate(a):await e.navigate(a,{fromRouteId:t,...o}))},[e,t])}var Ld={};function km(e,t,r){!t&&!Ld[e]&&(Ld[e]=!0,Gt(!1,r))}d.memo(dx);function dx({routes:e,future:t,state:r}){return Nm(e,void 0,r,t)}function ux({to:e,replace:t,state:r,relative:s}){Fe(Jr(),"<Navigate> may be used only in the context of a <Router> component.");let{static:a}=d.useContext(rn);Gt(!a,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:o}=d.useContext(Ht),{pathname:i}=Je(),l=je(),c=uc(e,dc(o),i,s==="path"),u=JSON.stringify(c);return d.useEffect(()=>{l(JSON.parse(u),{replace:t,state:r,relative:s})},[l,u,s,t,r]),null}function mx(e){return Xp(e.context)}function Pe(e){Fe(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function fx({basename:e="/",children:t=null,location:r,navigationType:s="POP",navigator:a,static:o=!1}){Fe(!Jr(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let i=e.replace(/^\/*/,"/"),l=d.useMemo(()=>({basename:i,navigator:a,static:o,future:{}}),[i,a,o]);typeof r=="string"&&(r=Xr(r));let{pathname:c="/",search:u="",hash:m="",state:h=null,key:f="default"}=r,w=d.useMemo(()=>{let x=Nn(c,i);return x==null?null:{location:{pathname:x,search:u,hash:m,state:h,key:f},navigationType:s}},[i,c,u,m,h,f,s]);return Gt(w!=null,`<Router basename="${i}"> is not able to match the URL "${c}${u}${m}" because it does not start with the basename, so the <Router> won't render anything.`),w==null?null:d.createElement(rn.Provider,{value:l},d.createElement(Vs.Provider,{children:t,value:w}))}function hx({children:e,location:t}){return Jp(ul(e),t)}function ul(e,t=[]){let r=[];return d.Children.forEach(e,(s,a)=>{if(!d.isValidElement(s))return;let o=[...t,a];if(s.type===d.Fragment){r.push.apply(r,ul(s.props.children,o));return}Fe(s.type===Pe,`[${typeof s.type=="string"?s.type:s.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Fe(!s.props.index||!s.props.children,"An index route cannot have child routes.");let i={id:s.props.id||o.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,loader:s.props.loader,action:s.props.action,hydrateFallbackElement:s.props.hydrateFallbackElement,HydrateFallback:s.props.HydrateFallback,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.hasErrorBoundary===!0||s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(i.children=ul(s.props.children,o)),r.push(i)}),r}var Fa="get",$a="application/x-www-form-urlencoded";function Io(e){return e!=null&&typeof e.tagName=="string"}function px(e){return Io(e)&&e.tagName.toLowerCase()==="button"}function xx(e){return Io(e)&&e.tagName.toLowerCase()==="form"}function gx(e){return Io(e)&&e.tagName.toLowerCase()==="input"}function vx(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function yx(e,t){return e.button===0&&(!t||t==="_self")&&!vx(e)}function ml(e=""){return new URLSearchParams(typeof e=="string"||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce((t,r)=>{let s=e[r];return t.concat(Array.isArray(s)?s.map(a=>[r,a]):[[r,s]])},[]))}function bx(e,t){let r=ml(e);return t&&t.forEach((s,a)=>{r.has(a)||t.getAll(a).forEach(o=>{r.append(a,o)})}),r}var ga=null;function wx(){if(ga===null)try{new FormData(document.createElement("form"),0),ga=!1}catch{ga=!0}return ga}var jx=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function di(e){return e!=null&&!jx.has(e)?(Gt(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${$a}"`),null):e}function Nx(e,t){let r,s,a,o,i;if(xx(e)){let l=e.getAttribute("action");s=l?Nn(l,t):null,r=e.getAttribute("method")||Fa,a=di(e.getAttribute("enctype"))||$a,o=new FormData(e)}else if(px(e)||gx(e)&&(e.type==="submit"||e.type==="image")){let l=e.form;if(l==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let c=e.getAttribute("formaction")||l.getAttribute("action");if(s=c?Nn(c,t):null,r=e.getAttribute("formmethod")||l.getAttribute("method")||Fa,a=di(e.getAttribute("formenctype"))||di(l.getAttribute("enctype"))||$a,o=new FormData(l,e),!wx()){let{name:u,type:m,value:h}=e;if(m==="image"){let f=u?`${u}.`:"";o.append(`${f}x`,"0"),o.append(`${f}y`,"0")}else u&&o.append(u,h)}}else{if(Io(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');r=Fa,s=null,a=$a,i=e}return o&&a==="text/plain"&&(i=o,o=void 0),{action:s,method:r.toLowerCase(),encType:a,formData:o,body:i}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function pc(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function kx(e,t,r){let s=typeof e=="string"?new URL(e,typeof window>"u"?"server://singlefetch/":window.location.origin):e;return s.pathname==="/"?s.pathname=`_root.${r}`:t&&Nn(s.pathname,t)==="/"?s.pathname=`${t.replace(/\/$/,"")}/_root.${r}`:s.pathname=`${s.pathname.replace(/\/$/,"")}.${r}`,s}async function Sx(e,t){if(e.id in t)return t[e.id];try{let r=await cc(()=>import(e.module),[]);return t[e.id]=r,r}catch(r){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(r),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Cx(e){return e!=null&&typeof e.page=="string"}function Ex(e){return e==null?!1:e.href==null?e.rel==="preload"&&typeof e.imageSrcSet=="string"&&typeof e.imageSizes=="string":typeof e.rel=="string"&&typeof e.href=="string"}async function Tx(e,t,r){let s=await Promise.all(e.map(async a=>{let o=t.routes[a.route.id];if(o){let i=await Sx(o,r);return i.links?i.links():[]}return[]}));return Ax(s.flat(1).filter(Ex).filter(a=>a.rel==="stylesheet"||a.rel==="preload").map(a=>a.rel==="stylesheet"?{...a,rel:"prefetch",as:"style"}:{...a,rel:"prefetch"}))}function Dd(e,t,r,s,a,o){let i=(c,u)=>r[u]?c.route.id!==r[u].route.id:!0,l=(c,u)=>{var m;return r[u].pathname!==c.pathname||((m=r[u].route.path)==null?void 0:m.endsWith("*"))&&r[u].params["*"]!==c.params["*"]};return o==="assets"?t.filter((c,u)=>i(c,u)||l(c,u)):o==="data"?t.filter((c,u)=>{var h;let m=s.routes[c.route.id];if(!m||!m.hasLoader)return!1;if(i(c,u)||l(c,u))return!0;if(c.route.shouldRevalidate){let f=c.route.shouldRevalidate({currentUrl:new URL(a.pathname+a.search+a.hash,window.origin),currentParams:((h=r[0])==null?void 0:h.params)||{},nextUrl:new URL(e,window.origin),nextParams:c.params,defaultShouldRevalidate:!0});if(typeof f=="boolean")return f}return!0}):[]}function Px(e,t,{includeHydrateFallback:r}={}){return Rx(e.map(s=>{let a=t.routes[s.route.id];if(!a)return[];let o=[a.module];return a.clientActionModule&&(o=o.concat(a.clientActionModule)),a.clientLoaderModule&&(o=o.concat(a.clientLoaderModule)),r&&a.hydrateFallbackModule&&(o=o.concat(a.hydrateFallbackModule)),a.imports&&(o=o.concat(a.imports)),o}).flat(1))}function Rx(e){return[...new Set(e)]}function _x(e){let t={},r=Object.keys(e).sort();for(let s of r)t[s]=e[s];return t}function Ax(e,t){let r=new Set,s=new Set(t);return e.reduce((a,o)=>{if(t&&!Cx(o)&&o.as==="script"&&o.href&&s.has(o.href))return a;let l=JSON.stringify(_x(o));return r.has(l)||(r.add(l),a.push({key:l,link:o})),a},[])}function Sm(){let e=d.useContext(Vr);return pc(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}function Ix(){let e=d.useContext(Ao);return pc(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}var xc=d.createContext(void 0);xc.displayName="FrameworkContext";function Cm(){let e=d.useContext(xc);return pc(e,"You must render this element inside a <HydratedRouter> element"),e}function Lx(e,t){let r=d.useContext(xc),[s,a]=d.useState(!1),[o,i]=d.useState(!1),{onFocus:l,onBlur:c,onMouseEnter:u,onMouseLeave:m,onTouchStart:h}=t,f=d.useRef(null);d.useEffect(()=>{if(e==="render"&&i(!0),e==="viewport"){let j=y=>{y.forEach(g=>{i(g.isIntersecting)})},S=new IntersectionObserver(j,{threshold:.5});return f.current&&S.observe(f.current),()=>{S.disconnect()}}},[e]),d.useEffect(()=>{if(s){let j=setTimeout(()=>{i(!0)},100);return()=>{clearTimeout(j)}}},[s]);let w=()=>{a(!0)},x=()=>{a(!1),i(!1)};return r?e!=="intent"?[o,f,{}]:[o,f,{onFocus:cs(l,w),onBlur:cs(c,x),onMouseEnter:cs(u,w),onMouseLeave:cs(m,x),onTouchStart:cs(h,w)}]:[!1,f,{}]}function cs(e,t){return r=>{e&&e(r),r.defaultPrevented||t(r)}}function Dx({page:e,...t}){let{router:r}=Sm(),s=d.useMemo(()=>xm(r.routes,e,r.basename),[r.routes,e,r.basename]);return s?d.createElement(zx,{page:e,matches:s,...t}):null}function Mx(e){let{manifest:t,routeModules:r}=Cm(),[s,a]=d.useState([]);return d.useEffect(()=>{let o=!1;return Tx(e,t,r).then(i=>{o||a(i)}),()=>{o=!0}},[e,t,r]),s}function zx({page:e,matches:t,...r}){let s=Je(),{manifest:a,routeModules:o}=Cm(),{basename:i}=Sm(),{loaderData:l,matches:c}=Ix(),u=d.useMemo(()=>Dd(e,t,c,a,s,"data"),[e,t,c,a,s]),m=d.useMemo(()=>Dd(e,t,c,a,s,"assets"),[e,t,c,a,s]),h=d.useMemo(()=>{if(e===s.pathname+s.search+s.hash)return[];let x=new Set,j=!1;if(t.forEach(y=>{var v;let g=a.routes[y.route.id];!g||!g.hasLoader||(!u.some(N=>N.route.id===y.route.id)&&y.route.id in l&&((v=o[y.route.id])!=null&&v.shouldRevalidate)||g.hasClientLoader?j=!0:x.add(y.route.id))}),x.size===0)return[];let S=kx(e,i,"data");return j&&x.size>0&&S.searchParams.set("_routes",t.filter(y=>x.has(y.route.id)).map(y=>y.route.id).join(",")),[S.pathname+S.search]},[i,l,s,a,u,t,e,o]),f=d.useMemo(()=>Px(m,a),[m,a]),w=Mx(m);return d.createElement(d.Fragment,null,h.map(x=>d.createElement("link",{key:x,rel:"prefetch",as:"fetch",href:x,...r})),f.map(x=>d.createElement("link",{key:x,rel:"modulepreload",href:x,...r})),w.map(({key:x,link:j})=>d.createElement("link",{key:x,...j})))}function Ox(...e){return t=>{e.forEach(r=>{typeof r=="function"?r(t):r!=null&&(r.current=t)})}}var Em=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Em&&(window.__reactRouterVersion="7.7.1")}catch{}function Fx({basename:e,children:t,window:r}){let s=d.useRef();s.current==null&&(s.current=bp({window:r,v5Compat:!0}));let a=s.current,[o,i]=d.useState({action:a.action,location:a.location}),l=d.useCallback(c=>{d.startTransition(()=>i(c))},[i]);return d.useLayoutEffect(()=>a.listen(l),[a,l]),d.createElement(fx,{basename:e,children:t,location:o.location,navigationType:o.action,navigator:a})}var Tm=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Pm=d.forwardRef(function({onClick:t,discover:r="render",prefetch:s="none",relative:a,reloadDocument:o,replace:i,state:l,target:c,to:u,preventScrollReset:m,viewTransition:h,...f},w){let{basename:x}=d.useContext(rn),j=typeof u=="string"&&Tm.test(u),S,y=!1;if(typeof u=="string"&&j&&(S=u,Em))try{let b=new URL(window.location.href),k=u.startsWith("//")?new URL(b.protocol+u):new URL(u),_=Nn(k.pathname,x);k.origin===b.origin&&_!=null?u=_+k.search+k.hash:y=!0}catch{Gt(!1,`<Link to="${u}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let g=Gp(u,{relative:a}),[v,N,C]=Lx(s,f),P=Yx(u,{replace:i,state:l,target:c,preventScrollReset:m,relative:a,viewTransition:h});function E(b){t&&t(b),b.defaultPrevented||P(b)}let p=d.createElement("a",{...f,...C,href:S||g,onClick:y||o?t:E,ref:Ox(w,N),target:c,"data-discover":!j&&r==="render"?"true":void 0});return v&&!j?d.createElement(d.Fragment,null,p,d.createElement(Dx,{page:g})):p});Pm.displayName="Link";var $x=d.forwardRef(function({"aria-current":t="page",caseSensitive:r=!1,className:s="",end:a=!1,style:o,to:i,viewTransition:l,children:c,...u},m){let h=Js(i,{relative:u.relative}),f=Je(),w=d.useContext(Ao),{navigator:x,basename:j}=d.useContext(rn),S=w!=null&&Hx(h)&&l===!0,y=x.encodeLocation?x.encodeLocation(h).pathname:h.pathname,g=f.pathname,v=w&&w.navigation&&w.navigation.location?w.navigation.location.pathname:null;r||(g=g.toLowerCase(),v=v?v.toLowerCase():null,y=y.toLowerCase()),v&&j&&(v=Nn(v,j)||v);const N=y!=="/"&&y.endsWith("/")?y.length-1:y.length;let C=g===y||!a&&g.startsWith(y)&&g.charAt(N)==="/",P=v!=null&&(v===y||!a&&v.startsWith(y)&&v.charAt(y.length)==="/"),E={isActive:C,isPending:P,isTransitioning:S},p=C?t:void 0,b;typeof s=="function"?b=s(E):b=[s,C?"active":null,P?"pending":null,S?"transitioning":null].filter(Boolean).join(" ");let k=typeof o=="function"?o(E):o;return d.createElement(Pm,{...u,"aria-current":p,className:b,ref:m,style:k,to:i,viewTransition:l},typeof c=="function"?c(E):c)});$x.displayName="NavLink";var Bx=d.forwardRef(({discover:e="render",fetcherKey:t,navigate:r,reloadDocument:s,replace:a,state:o,method:i=Fa,action:l,onSubmit:c,relative:u,preventScrollReset:m,viewTransition:h,...f},w)=>{let x=Wx(),j=Gx(l,{relative:u}),S=i.toLowerCase()==="get"?"get":"post",y=typeof l=="string"&&Tm.test(l),g=v=>{if(c&&c(v),v.defaultPrevented)return;v.preventDefault();let N=v.nativeEvent.submitter,C=(N==null?void 0:N.getAttribute("formmethod"))||i;x(N||v.currentTarget,{fetcherKey:t,method:C,navigate:r,replace:a,state:o,relative:u,preventScrollReset:m,viewTransition:h})};return d.createElement("form",{ref:w,method:S,action:j,onSubmit:s?c:g,...f,"data-discover":!y&&e==="render"?"true":void 0})});Bx.displayName="Form";function Ux(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Rm(e){let t=d.useContext(Vr);return Fe(t,Ux(e)),t}function Yx(e,{target:t,replace:r,state:s,preventScrollReset:a,relative:o,viewTransition:i}={}){let l=je(),c=Je(),u=Js(e,{relative:o});return d.useCallback(m=>{if(yx(m,t)){m.preventDefault();let h=r!==void 0?r:Qs(c)===Qs(u);l(e,{replace:h,state:s,preventScrollReset:a,relative:o,viewTransition:i})}},[c,l,u,r,s,t,e,a,o,i])}function _m(e){Gt(typeof URLSearchParams<"u","You cannot use the `useSearchParams` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params.");let t=d.useRef(ml(e)),r=d.useRef(!1),s=Je(),a=d.useMemo(()=>bx(s.search,r.current?null:t.current),[s.search]),o=je(),i=d.useCallback((l,c)=>{const u=ml(typeof l=="function"?l(new URLSearchParams(a)):l);r.current=!0,o("?"+u,c)},[o,a]);return[a,i]}var qx=0,Qx=()=>`__${String(++qx)}__`;function Wx(){let{router:e}=Rm("useSubmit"),{basename:t}=d.useContext(rn),r=ix();return d.useCallback(async(s,a={})=>{let{action:o,method:i,encType:l,formData:c,body:u}=Nx(s,t);if(a.navigate===!1){let m=a.fetcherKey||Qx();await e.fetch(m,r,a.action||o,{preventScrollReset:a.preventScrollReset,formData:c,body:u,formMethod:a.method||i,formEncType:a.encType||l,flushSync:a.flushSync})}else await e.navigate(a.action||o,{preventScrollReset:a.preventScrollReset,formData:c,body:u,formMethod:a.method||i,formEncType:a.encType||l,replace:a.replace,state:a.state,fromRouteId:r,flushSync:a.flushSync,viewTransition:a.viewTransition})},[e,t,r])}function Gx(e,{relative:t}={}){let{basename:r}=d.useContext(rn),s=d.useContext(Ht);Fe(s,"useFormAction must be used inside a RouteContext");let[a]=s.matches.slice(-1),o={...Js(e||".",{relative:t})},i=Je();if(e==null){o.search=i.search;let l=new URLSearchParams(o.search),c=l.getAll("index");if(c.some(m=>m==="")){l.delete("index"),c.filter(h=>h).forEach(h=>l.append("index",h));let m=l.toString();o.search=m?`?${m}`:""}}return(!e||e===".")&&a.route.index&&(o.search=o.search?o.search.replace(/^\?/,"?index&"):"?index"),r!=="/"&&(o.pathname=o.pathname==="/"?r:vn([r,o.pathname])),Qs(o)}function Hx(e,{relative:t}={}){let r=d.useContext(bm);Fe(r!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:s}=Rm("useViewTransitionState"),a=Js(e,{relative:t});if(!r.isTransitioning)return!1;let o=Nn(r.currentLocation.pathname,s)||r.currentLocation.pathname,i=Nn(r.nextLocation.pathname,s)||r.nextLocation.pathname;return ho(a.pathname,i)!=null||ho(a.pathname,o)!=null}function Kx({size:e=22,spinning:t=!1}){return n.jsx("div",{style:{width:e,height:e},className:"grid place-items-center",children:n.jsxs("svg",{viewBox:"0 0 100 100",className:`${t?"animate-[spin_0.8s_ease-out]":"motion-safe:animate-[spin_9s_linear_infinite]"} group-active:motion-safe:animate-[spin_1.2s_linear_infinite]`,style:{filter:"drop-shadow(0 2px 4px rgba(0,0,0,0.2))"},children:[n.jsx("path",{d:"M50,50 L50,5 A45,45 0 0,1 86.97,25.98 Z",fill:"#6366F1"}),n.jsx("path",{d:"M50,50 L86.97,25.98 A45,45 0 0,1 86.97,74.02 Z",fill:"#22C55E"}),n.jsx("path",{d:"M50,50 L86.97,74.02 A45,45 0 0,1 50,95 Z",fill:"#F59E0B"}),n.jsx("path",{d:"M50,50 L50,95 A45,45 0 0,1 13.03,74.02 Z",fill:"#EF4444"}),n.jsx("path",{d:"M50,50 L13.03,74.02 A45,45 0 0,1 13.03,25.98 Z",fill:"#3B82F6"}),n.jsx("path",{d:"M50,50 L13.03,25.98 A45,45 0 0,1 50,5 Z",fill:"#8B5CF6"}),n.jsx("circle",{cx:"50",cy:"50",r:"9",fill:"#111827",stroke:"white",strokeWidth:"2"})]})})}function Xx(){const e=je(),{pathname:t}=Je(),r=d.useRef({}),s=d.useRef({}),[a,o]=d.useState(!1),i=d.useRef(null);d.useEffect(()=>{const v=i.current;if(!v)return;const N=C=>{C.preventDefault();const P=.1;v.scrollTop+=C.deltaY*P};return v.addEventListener("wheel",N,{passive:!1}),()=>{v.removeEventListener("wheel",N)}},[]);const l=v=>{if(navigator.vibrate)switch(v){case"light":navigator.vibrate(20);break;case"medium":navigator.vibrate(35);break;case"heavy":navigator.vibrate(50);break;case"double":navigator.vibrate([30,50,30]);break;case"success":navigator.vibrate([20,50,20,50,20]);break;default:navigator.vibrate(25)}};d.useCallback(()=>{var v;if(["/","/play","/swipe","/profile"].includes(t)){const N=((v=i.current)==null?void 0:v.scrollTop)||0,C=window.scrollY||window.pageYOffset||0,P=N>0?N:C;console.log(`Saving scroll for ${t}: main=${N}, window=${C}, saved=${P}`),r.current[t]=P}},[t]),d.useEffect(()=>{let v=null;const N=()=>{v&&cancelAnimationFrame(v),v=requestAnimationFrame(()=>{var P;if(["/","/play","/swipe","/profile"].includes(t)){const E=((P=i.current)==null?void 0:P.scrollTop)||0,p=window.scrollY||window.pageYOffset||0,b=E>0?E:p;r.current[t]=b,console.log(`Scroll position updated for ${t}: ${b}`)}})};window.addEventListener("scroll",N,{passive:!0});const C=i.current;return C&&C.addEventListener("scroll",N,{passive:!0}),()=>{v&&cancelAnimationFrame(v),window.removeEventListener("scroll",N),C&&C.removeEventListener("scroll",N)}},[t]),d.useEffect(()=>{if(i.current&&i.current.classList.add("navigating"),["/profile/","/quiz/","/practice/","/play/classic","/settings","/about"].some(C=>t.startsWith(C)))window.scrollTo(0,0),i.current&&(i.current.scrollTop=0),setTimeout(()=>{i.current&&i.current.classList.remove("navigating")},20);else{const C=r.current[t];if(console.log(`Attempting to restore scroll for ${t}: ${C}`),C!=null&&C>0){const P=(E=0)=>{E>=5||(i.current?(i.current.scrollTop=C,setTimeout(()=>{var b;const p=((b=i.current)==null?void 0:b.scrollTop)||0;Math.abs(p-C)>10?(window.scrollTo(0,C),setTimeout(()=>{const k=window.scrollY||window.pageYOffset||0;console.log(`Restore attempt ${E+1}: main=${p}, window=${k}, target=${C}`),Math.abs(k-C)>10&&Math.abs(p-C)>10&&P(E+1)},20)):console.log(`Successfully restored scroll to ${p}`)},20)):window.scrollTo(0,C))};P(0),setTimeout(()=>{i.current&&i.current.classList.remove("navigating")},20)}else window.scrollTo(0,0),i.current&&(i.current.scrollTop=0),setTimeout(()=>{i.current&&i.current.classList.remove("navigating")},20)}},[t]);const[c,u]=d.useState(!1),[m,h]=d.useState({open:!1,go:null}),[f,w]=d.useState(!1);d.useEffect(()=>{const v=()=>{w(document.body.classList.contains("hide-bottom-nav"))};v();const N=new MutationObserver(v);return N.observe(document.body,{attributes:!0,attributeFilter:["class"]}),()=>N.disconnect()},[]),d.useEffect(()=>{const v=new MutationObserver(()=>{u(document.body.classList.contains("modal-open"))});return v.observe(document.body,{attributes:!0,attributeFilter:["class"]}),()=>v.disconnect()},[]);const j=c||f||[/^\/quiz\//,/^\/practice\//,/^\/profile\//,/^\/play\/classic/].some(v=>v.test(t)),S=v=>v==="/"?t==="/":t.startsWith(v),y=d.useCallback(()=>{console.log("Scrolling to top"),window.scrollTo({top:0,behavior:"smooth"}),i.current&&i.current.scrollTo({top:0,behavior:"smooth"}),document.documentElement.scrollTop=0,document.body.scrollTop=0},[]),g=({path:v,icon:N,label:C,emoji:P})=>{const E=S(v),[p,b]=d.useState(!1),k=d.useCallback(()=>{var V;const _=Date.now();if(E){const K=s.current[v]||0;console.log(`Active tab clicked. Time since last tap: ${_-K}ms`),_-K<500?(console.log("Double tap detected!"),y(),l("double"),s.current[v]=0):s.current[v]=_;return}if(["/","/play","/swipe","/profile"].includes(t)){const K=((V=i.current)==null?void 0:V.scrollTop)||0,q=window.scrollY||window.pageYOffset||0,M=K>0?K:q;console.log(`Manually saving scroll before navigation from ${t}: ${M}`),r.current[t]=M}const R=s.current[v]||0;if(_-R<500){console.log("Double tap on inactive tab - navigating and scrolling to top"),r.current[v]=0,v==="/play"?(o(!0),l("double"),setTimeout(()=>{e(`/play?view=modes&reset=${Date.now()}`),o(!1),setTimeout(y,100)},200)):(l("double"),e(v),setTimeout(y,100)),s.current[v]=0;return}s.current[v]=_,b(!0),setTimeout(()=>b(!1),600);const F=()=>{if(v==="/play"){o(!0),l("heavy"),setTimeout(()=>{e(`/play?view=modes&reset=${Date.now()}`),o(!1)},200);return}l("medium"),e(v)};if(localStorage.getItem("qp_in_question")==="true"){h({open:!0,go:F});return}F()},[E,v,t,e,y,l]);return n.jsxs("button",{type:"button",onClick:k,className:`group relative flex h-14 w-20 flex-col items-center justify-center rounded-xl transition-all
          ${E?"scale-110":"scale-100 hover:scale-105"}
          ${p?"animate-bounce":""}`,"aria-current":E?"page":void 0,children:[E&&n.jsxs(n.Fragment,{children:[n.jsx("span",{className:"absolute -top-2 h-1.5 w-10 rounded-full bg-gradient-to-r from-transparent via-white to-transparent opacity-60"}),n.jsx("div",{className:"absolute inset-0 rounded-xl bg-white/10 blur-xl"})]}),n.jsx("div",{className:`leading-none text-2xl transition-transform ${E?"scale-125":""} ${v==="/play"&&a?"animate-spin":""}`,children:P||N}),n.jsx("span",{className:`mt-1 text-[10px] font-medium transition-all ${E?"text-white":"text-base-muted/80"}`,children:C})]})};return n.jsxs("div",{className:"min-h-screen bg-base-bg text-base-text",children:[n.jsx("style",{children:`
        .hide-bottom-nav nav[role="navigation"] {
         display: none !important;
        }
        main.navigating {
          visibility: hidden;
        }
        main {
          scroll-behavior: auto !important;
        }
      `}),n.jsx("main",{ref:i,className:"mx-auto w-full max-w-none px-1 sm:px-3 md:px-4 overscroll-y-contain",style:{height:j||document.body.classList.contains("hide-bottom-nav")?"100dvh":"calc(100dvh - (5.5rem + env(safe-area-inset-bottom)))",paddingTop:"calc(env(safe-area-inset-top) + 12px)",paddingBottom:j||document.body.classList.contains("hide-bottom-nav")?0:void 0,overflowY:"auto"},children:n.jsx(mx,{})}),m.open&&n.jsxs("div",{className:"fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center px-6",style:{animation:"fadeIn 0.2s ease-out"},children:[n.jsxs("div",{className:"w-full max-w-sm rounded-3xl bg-gradient-to-b from-base-card to-base-card/90 border border-base-border p-6 text-center shadow-2xl",style:{animation:"slideUp 0.3s ease-out"},children:[n.jsx("div",{className:"text-5xl mb-4",style:{animation:"bounce 0.6s ease-out"},children:"😟"}),n.jsx("div",{className:"text-xl font-bold mb-2 bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent",children:"Leave the game?"}),n.jsx("p",{className:"text-base-muted mb-6 text-sm",children:"You'll lose your current progress!"}),n.jsxs("div",{className:"flex gap-3",children:[n.jsx("button",{onClick:()=>{l("medium"),h({open:!1,go:null})},className:"flex-1 py-3 rounded-2xl border-2 border-green-500/30 bg-green-500/10 hover:bg-green-500/20 transition-all font-semibold text-green-400",children:"Keep Playing! 🎮"}),n.jsx("button",{onClick:()=>{l("heavy");const v=m.go;h({open:!1,go:null}),v==null||v()},className:"flex-1 py-3 rounded-2xl bg-gradient-to-r from-red-500/80 to-orange-500/80 text-white font-semibold hover:from-red-500 hover:to-orange-500 transition-all",children:"Leave 👋"})]})]}),n.jsx("style",{children:`
            @keyframes fadeIn {
              from { opacity: 0; }
              to { opacity: 1; }
            }
            @keyframes slideUp {
              from { transform: translateY(20px); opacity: 0; }
              to { transform: translateY(0); opacity: 1; }
            }
          `})]}),!j&&n.jsxs("nav",{role:"navigation","aria-label":"Bottom navigation",className:"fixed inset-x-0 bottom-0 z-50",children:[n.jsx("div",{className:"absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0B0F1A] to-[#0B0F1A]/95 backdrop-blur-lg",style:{height:"calc(5.5rem + env(safe-area-inset-bottom))"},"aria-hidden":!0}),n.jsx("div",{className:"relative mx-auto max-w-md px-4 pb-[calc(env(safe-area-inset-bottom)+0.5rem)] pt-2",children:n.jsxs("div",{className:"relative",children:[n.jsx("div",{className:"absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-green-500/20 blur-2xl"}),n.jsxs("div",{className:"relative flex h-[72px] items-center justify-around rounded-3xl border border-white/10 bg-gradient-to-b from-base-card/95 to-base-card/80 shadow-2xl backdrop-blur-xl",children:[n.jsx(g,{path:"/",emoji:"🏠",label:"Home"}),n.jsx(g,{path:"/play",icon:n.jsx(Kx,{size:26,spinning:a}),label:"Play"}),n.jsx(g,{path:"/swipe",emoji:"📚",label:"Swipe"}),n.jsx(g,{path:"/profile",emoji:"👤",label:"Profile"})]})]})})]})]})}function po(){return po=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var s in r)({}).hasOwnProperty.call(r,s)&&(e[s]=r[s])}return e},po.apply(null,arguments)}function Vx(e,t){if(e==null)return{};var r={};for(var s in e)if({}.hasOwnProperty.call(e,s)){if(t.indexOf(s)!==-1)continue;r[s]=e[s]}return r}function Jx(e){d.useEffect(e,[])}var Zx=["id","volume","playbackRate","soundEnabled","interrupt","onload"];function et(e,t){var r=t===void 0?{}:t,s=r.volume,a=s===void 0?1:s,o=r.playbackRate,i=o===void 0?1:o,l=r.soundEnabled,c=l===void 0?!0:l,u=r.interrupt,m=u===void 0?!1:u,h=r.onload,f=Vx(r,Zx),w=wt.useRef(null),x=wt.useRef(!1),j=wt.useState(null),S=j[0],y=j[1],g=wt.useState(null),v=g[0],N=g[1],C=function(){typeof h=="function"&&h.call(this),x.current&&y(this.duration()*1e3),N(this)};Jx(function(){return cc(()=>import("./howler-b57b464a.js").then(k=>k.h),[]).then(function(k){if(!x.current){var _;w.current=(_=k.Howl)!==null&&_!==void 0?_:k.default.Howl,x.current=!0,new w.current(po({src:Array.isArray(e)?e:[e],volume:a,rate:i,onload:C},f))}}),function(){x.current=!1}}),wt.useEffect(function(){w.current&&v&&N(new w.current(po({src:Array.isArray(e)?e:[e],volume:a,onload:C},f)))},[JSON.stringify(e)]),wt.useEffect(function(){v&&(v.volume(a),f.sprite||v.rate(i))},[v,a,i]);var P=wt.useCallback(function(k){typeof k>"u"&&(k={}),!(!v||!c&&!k.forceSoundEnabled)&&(m&&v.stop(),k.playbackRate&&v.rate(k.playbackRate),v.play(k.id))},[v,c,m]),E=wt.useCallback(function(k){v&&v.stop(k)},[v]),p=wt.useCallback(function(k){v&&v.pause(k)},[v]),b=[P,{sound:v,stop:E,pause:p,duration:S}];return b}class eg{constructor(){console.log("UserService initialized")}getUserData(t){try{if(!t)return console.log("No phone provided to getUserData"),null;const s=JSON.parse(localStorage.getItem("users")||"{}")[t]||{},a=JSON.parse(localStorage.getItem(`user_profile_${t}`)||"{}"),o={...s,phone:t,username:a.name||s.username||"",email:a.email||"",city:a.city||"",state:a.state||"",country:a.country||""};return console.log("getUserData merged result:",o),o}catch(r){return console.error("Error in getUserData:",r),null}}getUserDataByIdentifier(t){try{const r=this.getUserData(t);if(r)return r;const s=JSON.parse(localStorage.getItem("users")||"{}");for(let a in s)if(s[a].username===t)return this.getUserData(a);return null}catch(r){return console.error("Error in getUserDataByIdentifier:",r),null}}userExists(t){try{return JSON.parse(localStorage.getItem("users")||"{}").hasOwnProperty(t)}catch(r){return console.error("Error checking if user exists:",r),!1}}createUser(t,r){try{console.log("Creating user:",t,r);const s=JSON.parse(localStorage.getItem("users")||"{}");return s[t]={username:r.username,password:r.password||"123456",avatar:r.avatar,gender:r.gender,ageGroup:r.ageGroup,phone:t,createdAt:new Date().toISOString()},localStorage.setItem("users",JSON.stringify(s)),this.setCurrentUser(t),console.log("User created successfully"),!0}catch(s){return console.error("Error creating user:",s),!1}}setCurrentUser(t){try{const r=this.getUserData(t);if(!r)return!1;const s={phone:t,username:r.username,avatar:r.avatar,gender:r.gender,ageGroup:r.ageGroup};localStorage.setItem("currentUser",JSON.stringify(s));const a=JSON.parse(localStorage.getItem("qp_player")||"{}");return a.name=r.username,localStorage.setItem("qp_player",JSON.stringify(a)),console.log("Current user set:",s),!0}catch(r){return console.error("Error setting current user:",r),!1}}updateUserProfile(t,r){try{if(console.log("Updating profile for:",t,r),r.name){const l=JSON.parse(localStorage.getItem("users")||"{}");if(l[t]){l[t].username=r.name;const c=l[t].password;l[t].password=c,localStorage.setItem("users",JSON.stringify(l))}}const s=`user_profile_${t}`,o={...JSON.parse(localStorage.getItem(s)||"{}"),...r};localStorage.setItem(s,JSON.stringify(o));const i=JSON.parse(localStorage.getItem("currentUser")||"{}");if(i.phone===t){i.username=r.name||i.username,localStorage.setItem("currentUser",JSON.stringify(i));const l=JSON.parse(localStorage.getItem("qp_player")||"{}");l.name=r.name||l.name,localStorage.setItem("qp_player",JSON.stringify(l))}return console.log("Profile updated successfully"),!0}catch(s){return console.error("Error updating profile:",s),!1}}getCurrentUser(){try{const t=JSON.parse(localStorage.getItem("currentUser")||"{}");return t.phone?this.getUserData(t.phone):null}catch(t){return console.error("Error getting current user:",t),null}}signOut(){try{return localStorage.removeItem("currentUser"),localStorage.removeItem("rememberCredentials"),sessionStorage.clear(),console.log("User signed out"),!0}catch(t){return console.error("Error signing out:",t),!1}}}const st=new eg;window.userService=st;class tg{constructor(){this.STORAGE_KEYS={COINS:"qp_coins",XP:"qp_xp",LEVEL:"qp_level",OWNED_CHARACTERS:"owned_characters",SOUND:"play_sound_on",GAME_STATS:"game_stats_",DAILY_PROGRESS:"daily_progress_",QUEST_DATA:"quest_data_",STREAK_DATA:"streak_data_",GAME_HISTORY:"game_history_",QUIZ_RESULTS:"quiz_current_results"}}getCoins(){return this.safeGet(this.STORAGE_KEYS.COINS,0)}setCoins(t){return this.safeSet(this.STORAGE_KEYS.COINS,t),t}addCoins(t,r=""){const a=this.getCoins()+t;this.setCoins(a);const o=st.getCurrentUser();return o!=null&&o.phone&&(this.logCoinTransaction(o.phone,t,r),this.updateDailyCoins(o.phone,t)),a}spendCoins(t,r=""){const s=this.getCoins();if(s<t)return!1;const a=s-t;this.setCoins(a);const o=st.getCurrentUser();return o!=null&&o.phone&&this.logCoinTransaction(o.phone,-t,r),!0}getXP(){return this.safeGet(this.STORAGE_KEYS.XP,0)}setXP(t){return this.safeSet(this.STORAGE_KEYS.XP,t),t}addXP(t){const s=this.getXP()+t;this.setXP(s),this.checkAndUpdateLevel(s);const a=st.getCurrentUser();return a!=null&&a.phone&&this.updateDailyXP(a.phone,t),s}getLevel(){return this.safeGet(this.STORAGE_KEYS.LEVEL,1)}setLevel(t){return this.safeSet(this.STORAGE_KEYS.LEVEL,t),t}checkAndUpdateLevel(t=null){const r=t||this.getXP(),s=this.getLevel();let a=1,o=0;for(;o<=r;)a++,o=100*a*(a-1);if(a--,a>s){this.setLevel(a);const i=50*(a-s);return this.addCoins(i,`Level up to ${a}!`),!0}return!1}initializeUserData(t){if(!t)return;const r=this.getUserStats(t);if(r)return r;const s={stats:{totalQuizzes:0,totalPractice:0,totalCorrect:0,totalWrong:0,winStreak:0,bestStreak:0,highScore:0,gamesPlayed:0},quests:{daily:[{id:"quiz_3",type:"quiz",target:3,current:0,reward:60,completed:!1},{id:"practice_15",type:"practice",target:15,current:0,reward:100,completed:!1},{id:"win_5",type:"win_streak",target:5,current:0,reward:150,completed:!1},{id:"speed_run",type:"speed_run",target:1,current:0,reward:80,completed:!1}]},streak:{current:0,lastPlayedDate:null,longestStreak:0}};return this.safeSet(this.STORAGE_KEYS.GAME_STATS+t,s.stats),this.safeSet(this.STORAGE_KEYS.QUEST_DATA+t,s.quests),this.safeSet(this.STORAGE_KEYS.STREAK_DATA+t,s.streak),this.resetDailyProgress(t),s}getUserStats(t){return t?this.safeGet(this.STORAGE_KEYS.GAME_STATS+t,null):null}updateUserStats(t,r){if(!t)return null;const a={...this.getUserStats(t)||{},...r};return this.safeSet(this.STORAGE_KEYS.GAME_STATS+t,a),a}getDailyProgress(t){if(!t)return null;const r=this.safeGet(this.STORAGE_KEYS.DAILY_PROGRESS+t,null),s=new Date().toDateString();return!r||r.date!==s?this.resetDailyProgress(t):r}resetDailyProgress(t){if(!t)return null;const r={date:new Date().toDateString(),quizzesPlayed:0,practiceCompleted:0,coinsEarned:0,xpEarned:0,questsCompleted:[]};return this.safeSet(this.STORAGE_KEYS.DAILY_PROGRESS+t,r),this.resetDailyQuests(t),r}updateDailyCoins(t,r){if(!t)return;const s=this.getDailyProgress(t);s&&(s.coinsEarned+=r,this.safeSet(this.STORAGE_KEYS.DAILY_PROGRESS+t,s))}updateDailyXP(t,r){if(!t)return;const s=this.getDailyProgress(t);s&&(s.xpEarned+=r,this.safeSet(this.STORAGE_KEYS.DAILY_PROGRESS+t,s))}getQuestData(t){return t?this.safeGet(this.STORAGE_KEYS.QUEST_DATA+t,null):null}resetDailyQuests(t){if(!t)return null;const r={daily:[{id:"quiz_3",type:"quiz",target:3,current:0,reward:60,completed:!1},{id:"practice_15",type:"practice",target:15,current:0,reward:100,completed:!1},{id:"win_5",type:"win_streak",target:5,current:0,reward:150,completed:!1},{id:"speed_run",type:"speed_run",target:1,current:0,reward:80,completed:!1}]};return this.safeSet(this.STORAGE_KEYS.QUEST_DATA+t,r),r}updateQuestProgress(t,r,s=1){if(!t)return null;const a=this.getQuestData(t);if(!(a!=null&&a.daily))return null;let o=0;const i={...a,daily:a.daily.map(l=>{if(l.type===r&&!l.completed){const c=Math.min(l.current+s,l.target),u=c>=l.target;return u&&!l.completed&&(o+=l.reward,this.addCoins(l.reward,`Quest completed: ${l.id}`)),{...l,current:c,completed:u}}return l})};return this.safeSet(this.STORAGE_KEYS.QUEST_DATA+t,i),{updatedQuests:i,coinsEarned:o}}getStreakData(t){return t?this.safeGet(this.STORAGE_KEYS.STREAK_DATA+t,{current:0,lastPlayedDate:null,longestStreak:0}):null}updateStreak(t){if(!t)return null;const r=this.getStreakData(t),s=new Date().toDateString(),a=new Date(Date.now()-864e5).toDateString();return r.lastPlayedDate===s||(r.lastPlayedDate===a?r.current++:r.current=1,r.lastPlayedDate=s,r.longestStreak=Math.max(r.current,r.longestStreak),this.safeSet(this.STORAGE_KEYS.STREAK_DATA+t,r),r.current%7===0&&this.addCoins(100,"7-day streak bonus!")),r}recordQuizSession(t,r){const{score:s,totalQuestions:a,category:o,difficulty:i="medium",mode:l="classic"}=r,m=s*5+(s===a?20:0),h=s*10;if(this.addCoins(m,`Quiz: ${s}/${a}`),this.addXP(h),t){const f=this.getUserStats(t)||this.initializeUserData(t).stats;f.totalQuizzes++,f.totalCorrect+=s,f.totalWrong+=a-s,f.gamesPlayed++,s>=a*.7?(f.winStreak++,f.bestStreak=Math.max(f.winStreak,f.bestStreak)):f.winStreak=0,f.highScore=Math.max(f.highScore,s),this.updateUserStats(t,f);const w=this.getDailyProgress(t);w.quizzesPlayed++,this.safeSet(this.STORAGE_KEYS.DAILY_PROGRESS+t,w),this.updateQuestProgress(t,"quiz",1),f.winStreak>=5&&this.updateQuestProgress(t,"win_streak",f.winStreak),this.updateStreak(t),this.addToHistory(t,{type:"quiz",mode:l,category:o,score:s,totalQuestions:a,difficulty:i,coinsEarned:m,xpEarned:h,timestamp:new Date().toISOString()})}return{coinsEarned:m,xpEarned:h,newTotal:this.getCoins(),newXP:this.getXP(),newLevel:this.getLevel()}}recordPracticeSession(t,r){const{questionsCompleted:s,correctAnswers:a,category:o="general"}=r,i=s*2,l=s*5;if(this.addCoins(i,`Practice: ${s} questions`),this.addXP(l),t){const c=this.getUserStats(t)||this.initializeUserData(t).stats;c.totalPractice+=s,c.totalCorrect+=a,c.totalWrong+=s-a,this.updateUserStats(t,c);const u=this.getDailyProgress(t);u.practiceCompleted+=s,this.safeSet(this.STORAGE_KEYS.DAILY_PROGRESS+t,u),this.updateQuestProgress(t,"practice",s),this.updateStreak(t),this.addToHistory(t,{type:"practice",category:o,questionsCompleted:s,correctAnswers:a,coinsEarned:i,xpEarned:l,timestamp:new Date().toISOString()})}return{coinsEarned:i,xpEarned:l,newTotal:this.getCoins(),newXP:this.getXP()}}getGameHistory(t){return t?this.safeGet(this.STORAGE_KEYS.GAME_HISTORY+t,[]):[]}addToHistory(t,r){if(!t)return;const s=this.getGameHistory(t);s.unshift(r),s.length>50&&s.pop(),this.safeSet(this.STORAGE_KEYS.GAME_HISTORY+t,s)}getTodaySummary(t){var a;const r=t||((a=st.getCurrentUser())==null?void 0:a.phone),s={totalCoins:this.getCoins(),totalXP:this.getXP(),level:this.getLevel(),xpProgress:this.getXP()%100,xpNeeded:100,todayCoins:0,todayXP:0,streak:0,questProgress:0,activeQuests:0};if(r){const o=this.getDailyProgress(r),i=this.getStreakData(r),l=this.getQuestData(r),c=this.getUserStats(r);if(o&&(s.todayCoins=o.coinsEarned,s.todayXP=o.xpEarned),i&&(s.streak=i.current),l!=null&&l.daily){const u=l.daily.filter(m=>m.completed).length;s.questProgress=Math.round(u/l.daily.length*100),s.activeQuests=l.daily.filter(m=>!m.completed).length}c&&(s.rank=23,s.winStreak=c.winStreak)}return s}logCoinTransaction(t,r,s){if(!t)return;const a="coin_transactions_"+t,o=this.safeGet(a,[]);o.push({amount:r,reason:s,timestamp:new Date().toISOString(),balance:this.getCoins()}),o.length>100&&o.shift(),this.safeSet(a,o)}storeCurrentResults(t){return this.safeSet(this.STORAGE_KEYS.QUIZ_RESULTS,{...t,timestamp:Date.now(),expiresAt:Date.now()+30*60*1e3}),!0}getCurrentResults(){const t=this.safeGet(this.STORAGE_KEYS.QUIZ_RESULTS,null);return t?t.expiresAt&&t.expiresAt<Date.now()?(this.clearCurrentResults(),null):t:null}clearCurrentResults(){localStorage.removeItem(this.STORAGE_KEYS.QUIZ_RESULTS)}safeGet(t,r=null){try{const s=localStorage.getItem(t);return s?JSON.parse(s):r}catch{return r}}safeSet(t,r){try{return localStorage.setItem(t,JSON.stringify(r)),!0}catch{return!1}}clearAllData(){Object.values(this.STORAGE_KEYS).forEach(t=>{typeof t=="string"&&!t.includes("_")&&localStorage.removeItem(t)})}clearUserData(t){if(!t)return;[this.STORAGE_KEYS.GAME_STATS+t,this.STORAGE_KEYS.DAILY_PROGRESS+t,this.STORAGE_KEYS.QUEST_DATA+t,this.STORAGE_KEYS.STREAK_DATA+t,this.STORAGE_KEYS.GAME_HISTORY+t,"coin_transactions_"+t].forEach(s=>localStorage.removeItem(s))}}const ie=new tg;var Am={exports:{}};/* @license
Papa Parse
v5.5.3
https://github.com/mholt/PapaParse
License: MIT
*/(function(e,t){((r,s)=>{e.exports=s()})(qm,function r(){var s=typeof self<"u"?self:typeof window<"u"?window:s!==void 0?s:{},a,o=!s.document&&!!s.postMessage,i=s.IS_PAPA_WORKER||!1,l={},c=0,u={};function m(p){this._handle=null,this._finished=!1,this._completed=!1,this._halted=!1,this._input=null,this._baseIndex=0,this._partialLine="",this._rowCount=0,this._start=0,this._nextChunk=null,this.isFirstChunk=!0,this._completeResults={data:[],errors:[],meta:{}},(function(b){var k=C(b);k.chunkSize=parseInt(k.chunkSize),b.step||b.chunk||(k.chunkSize=null),this._handle=new j(k),(this._handle.streamer=this)._config=k}).call(this,p),this.parseChunk=function(b,k){var _=parseInt(this._config.skipFirstNLines)||0;if(this.isFirstChunk&&0<_){let F=this._config.newline;F||(R=this._config.quoteChar||'"',F=this._handle.guessLineEndings(b,R)),b=[...b.split(F).slice(_)].join(F)}this.isFirstChunk&&E(this._config.beforeFirstChunk)&&(R=this._config.beforeFirstChunk(b))!==void 0&&(b=R),this.isFirstChunk=!1,this._halted=!1;var _=this._partialLine+b,R=(this._partialLine="",this._handle.parse(_,this._baseIndex,!this._finished));if(!this._handle.paused()&&!this._handle.aborted()){if(b=R.meta.cursor,_=(this._finished||(this._partialLine=_.substring(b-this._baseIndex),this._baseIndex=b),R&&R.data&&(this._rowCount+=R.data.length),this._finished||this._config.preview&&this._rowCount>=this._config.preview),i)s.postMessage({results:R,workerId:u.WORKER_ID,finished:_});else if(E(this._config.chunk)&&!k){if(this._config.chunk(R,this._handle),this._handle.paused()||this._handle.aborted())return void(this._halted=!0);this._completeResults=R=void 0}return this._config.step||this._config.chunk||(this._completeResults.data=this._completeResults.data.concat(R.data),this._completeResults.errors=this._completeResults.errors.concat(R.errors),this._completeResults.meta=R.meta),this._completed||!_||!E(this._config.complete)||R&&R.meta.aborted||(this._config.complete(this._completeResults,this._input),this._completed=!0),_||R&&R.meta.paused||this._nextChunk(),R}this._halted=!0},this._sendError=function(b){E(this._config.error)?this._config.error(b):i&&this._config.error&&s.postMessage({workerId:u.WORKER_ID,error:b,finished:!1})}}function h(p){var b;(p=p||{}).chunkSize||(p.chunkSize=u.RemoteChunkSize),m.call(this,p),this._nextChunk=o?function(){this._readChunk(),this._chunkLoaded()}:function(){this._readChunk()},this.stream=function(k){this._input=k,this._nextChunk()},this._readChunk=function(){if(this._finished)this._chunkLoaded();else{if(b=new XMLHttpRequest,this._config.withCredentials&&(b.withCredentials=this._config.withCredentials),o||(b.onload=P(this._chunkLoaded,this),b.onerror=P(this._chunkError,this)),b.open(this._config.downloadRequestBody?"POST":"GET",this._input,!o),this._config.downloadRequestHeaders){var k,_=this._config.downloadRequestHeaders;for(k in _)b.setRequestHeader(k,_[k])}var R;this._config.chunkSize&&(R=this._start+this._config.chunkSize-1,b.setRequestHeader("Range","bytes="+this._start+"-"+R));try{b.send(this._config.downloadRequestBody)}catch(F){this._chunkError(F.message)}o&&b.status===0&&this._chunkError()}},this._chunkLoaded=function(){b.readyState===4&&(b.status<200||400<=b.status?this._chunkError():(this._start+=this._config.chunkSize||b.responseText.length,this._finished=!this._config.chunkSize||this._start>=(k=>(k=k.getResponseHeader("Content-Range"))!==null?parseInt(k.substring(k.lastIndexOf("/")+1)):-1)(b),this.parseChunk(b.responseText)))},this._chunkError=function(k){k=b.statusText||k,this._sendError(new Error(k))}}function f(p){(p=p||{}).chunkSize||(p.chunkSize=u.LocalChunkSize),m.call(this,p);var b,k,_=typeof FileReader<"u";this.stream=function(R){this._input=R,k=R.slice||R.webkitSlice||R.mozSlice,_?((b=new FileReader).onload=P(this._chunkLoaded,this),b.onerror=P(this._chunkError,this)):b=new FileReaderSync,this._nextChunk()},this._nextChunk=function(){this._finished||this._config.preview&&!(this._rowCount<this._config.preview)||this._readChunk()},this._readChunk=function(){var R=this._input,F=(this._config.chunkSize&&(F=Math.min(this._start+this._config.chunkSize,this._input.size),R=k.call(R,this._start,F)),b.readAsText(R,this._config.encoding));_||this._chunkLoaded({target:{result:F}})},this._chunkLoaded=function(R){this._start+=this._config.chunkSize,this._finished=!this._config.chunkSize||this._start>=this._input.size,this.parseChunk(R.target.result)},this._chunkError=function(){this._sendError(b.error)}}function w(p){var b;m.call(this,p=p||{}),this.stream=function(k){return b=k,this._nextChunk()},this._nextChunk=function(){var k,_;if(!this._finished)return k=this._config.chunkSize,b=k?(_=b.substring(0,k),b.substring(k)):(_=b,""),this._finished=!b,this.parseChunk(_)}}function x(p){m.call(this,p=p||{});var b=[],k=!0,_=!1;this.pause=function(){m.prototype.pause.apply(this,arguments),this._input.pause()},this.resume=function(){m.prototype.resume.apply(this,arguments),this._input.resume()},this.stream=function(R){this._input=R,this._input.on("data",this._streamData),this._input.on("end",this._streamEnd),this._input.on("error",this._streamError)},this._checkIsFinished=function(){_&&b.length===1&&(this._finished=!0)},this._nextChunk=function(){this._checkIsFinished(),b.length?this.parseChunk(b.shift()):k=!0},this._streamData=P(function(R){try{b.push(typeof R=="string"?R:R.toString(this._config.encoding)),k&&(k=!1,this._checkIsFinished(),this.parseChunk(b.shift()))}catch(F){this._streamError(F)}},this),this._streamError=P(function(R){this._streamCleanUp(),this._sendError(R)},this),this._streamEnd=P(function(){this._streamCleanUp(),_=!0,this._streamData("")},this),this._streamCleanUp=P(function(){this._input.removeListener("data",this._streamData),this._input.removeListener("end",this._streamEnd),this._input.removeListener("error",this._streamError)},this)}function j(p){var b,k,_,R,F=Math.pow(2,53),Q=-F,V=/^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/,K=/^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/,q=this,M=0,I=0,D=!1,L=!1,T=[],z={data:[],errors:[],meta:{}};function B(U){return p.skipEmptyLines==="greedy"?U.join("").trim()==="":U.length===1&&U[0].length===0}function G(){if(z&&_&&(Z("Delimiter","UndetectableDelimiter","Unable to auto-detect delimiting character; defaulted to '"+u.DefaultDelimiter+"'"),_=!1),p.skipEmptyLines&&(z.data=z.data.filter(function(W){return!B(W)})),$()){let W=function(H,X){E(p.transformHeader)&&(H=p.transformHeader(H,X)),T.push(H)};if(z)if(Array.isArray(z.data[0])){for(var U=0;$()&&U<z.data.length;U++)z.data[U].forEach(W);z.data.splice(0,1)}else z.data.forEach(W)}function O(W,H){for(var X=p.header?{}:[],J=0;J<W.length;J++){var Y=J,A=W[J],A=((te,ne)=>(le=>(p.dynamicTypingFunction&&p.dynamicTyping[le]===void 0&&(p.dynamicTyping[le]=p.dynamicTypingFunction(le)),(p.dynamicTyping[le]||p.dynamicTyping)===!0))(te)?ne==="true"||ne==="TRUE"||ne!=="false"&&ne!=="FALSE"&&((le=>{if(V.test(le)&&(le=parseFloat(le),Q<le&&le<F))return 1})(ne)?parseFloat(ne):K.test(ne)?new Date(ne):ne===""?null:ne):ne)(Y=p.header?J>=T.length?"__parsed_extra":T[J]:Y,A=p.transform?p.transform(A,Y):A);Y==="__parsed_extra"?(X[Y]=X[Y]||[],X[Y].push(A)):X[Y]=A}return p.header&&(J>T.length?Z("FieldMismatch","TooManyFields","Too many fields: expected "+T.length+" fields but parsed "+J,I+H):J<T.length&&Z("FieldMismatch","TooFewFields","Too few fields: expected "+T.length+" fields but parsed "+J,I+H)),X}var ee;z&&(p.header||p.dynamicTyping||p.transform)&&(ee=1,!z.data.length||Array.isArray(z.data[0])?(z.data=z.data.map(O),ee=z.data.length):z.data=O(z.data,0),p.header&&z.meta&&(z.meta.fields=T),I+=ee)}function $(){return p.header&&T.length===0}function Z(U,O,ee,W){U={type:U,code:O,message:ee},W!==void 0&&(U.row=W),z.errors.push(U)}E(p.step)&&(R=p.step,p.step=function(U){z=U,$()?G():(G(),z.data.length!==0&&(M+=U.data.length,p.preview&&M>p.preview?k.abort():(z.data=z.data[0],R(z,q))))}),this.parse=function(U,O,ee){var W=p.quoteChar||'"',W=(p.newline||(p.newline=this.guessLineEndings(U,W)),_=!1,p.delimiter?E(p.delimiter)&&(p.delimiter=p.delimiter(U),z.meta.delimiter=p.delimiter):((W=((H,X,J,Y,A)=>{var te,ne,le,ue;A=A||[",","	","|",";",u.RECORD_SEP,u.UNIT_SEP];for(var Ne=0;Ne<A.length;Ne++){for(var ge,ot=A[Ne],Ee=0,qe=0,ke=0,Me=(le=void 0,new y({comments:Y,delimiter:ot,newline:X,preview:10}).parse(H)),ft=0;ft<Me.data.length;ft++)J&&B(Me.data[ft])?ke++:(ge=Me.data[ft].length,qe+=ge,le===void 0?le=ge:0<ge&&(Ee+=Math.abs(ge-le),le=ge));0<Me.data.length&&(qe/=Me.data.length-ke),(ne===void 0||Ee<=ne)&&(ue===void 0||ue<qe)&&1.99<qe&&(ne=Ee,te=ot,ue=qe)}return{successful:!!(p.delimiter=te),bestDelimiter:te}})(U,p.newline,p.skipEmptyLines,p.comments,p.delimitersToGuess)).successful?p.delimiter=W.bestDelimiter:(_=!0,p.delimiter=u.DefaultDelimiter),z.meta.delimiter=p.delimiter),C(p));return p.preview&&p.header&&W.preview++,b=U,k=new y(W),z=k.parse(b,O,ee),G(),D?{meta:{paused:!0}}:z||{meta:{paused:!1}}},this.paused=function(){return D},this.pause=function(){D=!0,k.abort(),b=E(p.chunk)?"":b.substring(k.getCharIndex())},this.resume=function(){q.streamer._halted?(D=!1,q.streamer.parseChunk(b,!0)):setTimeout(q.resume,3)},this.aborted=function(){return L},this.abort=function(){L=!0,k.abort(),z.meta.aborted=!0,E(p.complete)&&p.complete(z),b=""},this.guessLineEndings=function(H,W){H=H.substring(0,1048576);var W=new RegExp(S(W)+"([^]*?)"+S(W),"gm"),ee=(H=H.replace(W,"")).split("\r"),W=H.split(`
`),H=1<W.length&&W[0].length<ee[0].length;if(ee.length===1||H)return`
`;for(var X=0,J=0;J<ee.length;J++)ee[J][0]===`
`&&X++;return X>=ee.length/2?`\r
`:"\r"}}function S(p){return p.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function y(p){var b=(p=p||{}).delimiter,k=p.newline,_=p.comments,R=p.step,F=p.preview,Q=p.fastMode,V=null,K=!1,q=p.quoteChar==null?'"':p.quoteChar,M=q;if(p.escapeChar!==void 0&&(M=p.escapeChar),(typeof b!="string"||-1<u.BAD_DELIMITERS.indexOf(b))&&(b=","),_===b)throw new Error("Comment character same as delimiter");_===!0?_="#":(typeof _!="string"||-1<u.BAD_DELIMITERS.indexOf(_))&&(_=!1),k!==`
`&&k!=="\r"&&k!==`\r
`&&(k=`
`);var I=0,D=!1;this.parse=function(L,T,z){if(typeof L!="string")throw new Error("Input must be a string");var B=L.length,G=b.length,$=k.length,Z=_.length,U=E(R),O=[],ee=[],W=[],H=I=0;if(!L)return Ee();if(Q||Q!==!1&&L.indexOf(q)===-1){for(var X=L.split(k),J=0;J<X.length;J++){if(W=X[J],I+=W.length,J!==X.length-1)I+=k.length;else if(z)return Ee();if(!_||W.substring(0,Z)!==_){if(U){if(O=[],ue(W.split(b)),qe(),D)return Ee()}else ue(W.split(b));if(F&&F<=J)return O=O.slice(0,F),Ee(!0)}}return Ee()}for(var Y=L.indexOf(b,I),A=L.indexOf(k,I),te=new RegExp(S(M)+S(q),"g"),ne=L.indexOf(q,I);;)if(L[I]===q)for(ne=I,I++;;){if((ne=L.indexOf(q,ne+1))===-1)return z||ee.push({type:"Quotes",code:"MissingQuotes",message:"Quoted field unterminated",row:O.length,index:I}),ge();if(ne===B-1)return ge(L.substring(I,ne).replace(te,q));if(q===M&&L[ne+1]===M)ne++;else if(q===M||ne===0||L[ne-1]!==M){Y!==-1&&Y<ne+1&&(Y=L.indexOf(b,ne+1));var le=Ne((A=A!==-1&&A<ne+1?L.indexOf(k,ne+1):A)===-1?Y:Math.min(Y,A));if(L.substr(ne+1+le,G)===b){W.push(L.substring(I,ne).replace(te,q)),L[I=ne+1+le+G]!==q&&(ne=L.indexOf(q,I)),Y=L.indexOf(b,I),A=L.indexOf(k,I);break}if(le=Ne(A),L.substring(ne+1+le,ne+1+le+$)===k){if(W.push(L.substring(I,ne).replace(te,q)),ot(ne+1+le+$),Y=L.indexOf(b,I),ne=L.indexOf(q,I),U&&(qe(),D))return Ee();if(F&&O.length>=F)return Ee(!0);break}ee.push({type:"Quotes",code:"InvalidQuotes",message:"Trailing quote on quoted field is malformed",row:O.length,index:I}),ne++}}else if(_&&W.length===0&&L.substring(I,I+Z)===_){if(A===-1)return Ee();I=A+$,A=L.indexOf(k,I),Y=L.indexOf(b,I)}else if(Y!==-1&&(Y<A||A===-1))W.push(L.substring(I,Y)),I=Y+G,Y=L.indexOf(b,I);else{if(A===-1)break;if(W.push(L.substring(I,A)),ot(A+$),U&&(qe(),D))return Ee();if(F&&O.length>=F)return Ee(!0)}return ge();function ue(ke){O.push(ke),H=I}function Ne(ke){var Me=0;return Me=ke!==-1&&(ke=L.substring(ne+1,ke))&&ke.trim()===""?ke.length:Me}function ge(ke){return z||(ke===void 0&&(ke=L.substring(I)),W.push(ke),I=B,ue(W),U&&qe()),Ee()}function ot(ke){I=ke,ue(W),W=[],A=L.indexOf(k,I)}function Ee(ke){if(p.header&&!T&&O.length&&!K){var Me=O[0],ft=Object.create(null),ht=new Set(Me);let _e=!1;for(let $e=0;$e<Me.length;$e++){let Qe=Me[$e];if(ft[Qe=E(p.transformHeader)?p.transformHeader(Qe,$e):Qe]){let At,ze=ft[Qe];for(;At=Qe+"_"+ze,ze++,ht.has(At););ht.add(At),Me[$e]=At,ft[Qe]++,_e=!0,(V=V===null?{}:V)[At]=Qe}else ft[Qe]=1,Me[$e]=Qe;ht.add(Qe)}_e&&console.warn("Duplicate headers found and renamed."),K=!0}return{data:O,errors:ee,meta:{delimiter:b,linebreak:k,aborted:D,truncated:!!ke,cursor:H+(T||0),renamedHeaders:V}}}function qe(){R(Ee()),O=[],ee=[]}},this.abort=function(){D=!0},this.getCharIndex=function(){return I}}function g(p){var b=p.data,k=l[b.workerId],_=!1;if(b.error)k.userError(b.error,b.file);else if(b.results&&b.results.data){var R={abort:function(){_=!0,v(b.workerId,{data:[],errors:[],meta:{aborted:!0}})},pause:N,resume:N};if(E(k.userStep)){for(var F=0;F<b.results.data.length&&(k.userStep({data:b.results.data[F],errors:b.results.errors,meta:b.results.meta},R),!_);F++);delete b.results}else E(k.userChunk)&&(k.userChunk(b.results,R,b.file),delete b.results)}b.finished&&!_&&v(b.workerId,b.results)}function v(p,b){var k=l[p];E(k.userComplete)&&k.userComplete(b),k.terminate(),delete l[p]}function N(){throw new Error("Not implemented.")}function C(p){if(typeof p!="object"||p===null)return p;var b,k=Array.isArray(p)?[]:{};for(b in p)k[b]=C(p[b]);return k}function P(p,b){return function(){p.apply(b,arguments)}}function E(p){return typeof p=="function"}return u.parse=function(p,b){var k=(b=b||{}).dynamicTyping||!1;if(E(k)&&(b.dynamicTypingFunction=k,k={}),b.dynamicTyping=k,b.transform=!!E(b.transform)&&b.transform,!b.worker||!u.WORKERS_SUPPORTED)return k=null,u.NODE_STREAM_INPUT,typeof p=="string"?(p=(_=>_.charCodeAt(0)!==65279?_:_.slice(1))(p),k=new(b.download?h:w)(b)):p.readable===!0&&E(p.read)&&E(p.on)?k=new x(b):(s.File&&p instanceof File||p instanceof Object)&&(k=new f(b)),k.stream(p);(k=(()=>{var _;return!!u.WORKERS_SUPPORTED&&(_=(()=>{var R=s.URL||s.webkitURL||null,F=r.toString();return u.BLOB_URL||(u.BLOB_URL=R.createObjectURL(new Blob(["var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; ","(",F,")();"],{type:"text/javascript"})))})(),(_=new s.Worker(_)).onmessage=g,_.id=c++,l[_.id]=_)})()).userStep=b.step,k.userChunk=b.chunk,k.userComplete=b.complete,k.userError=b.error,b.step=E(b.step),b.chunk=E(b.chunk),b.complete=E(b.complete),b.error=E(b.error),delete b.worker,k.postMessage({input:p,config:b,workerId:k.id})},u.unparse=function(p,b){var k=!1,_=!0,R=",",F=`\r
`,Q='"',V=Q+Q,K=!1,q=null,M=!1,I=((()=>{if(typeof b=="object"){if(typeof b.delimiter!="string"||u.BAD_DELIMITERS.filter(function(T){return b.delimiter.indexOf(T)!==-1}).length||(R=b.delimiter),typeof b.quotes!="boolean"&&typeof b.quotes!="function"&&!Array.isArray(b.quotes)||(k=b.quotes),typeof b.skipEmptyLines!="boolean"&&typeof b.skipEmptyLines!="string"||(K=b.skipEmptyLines),typeof b.newline=="string"&&(F=b.newline),typeof b.quoteChar=="string"&&(Q=b.quoteChar),typeof b.header=="boolean"&&(_=b.header),Array.isArray(b.columns)){if(b.columns.length===0)throw new Error("Option columns is empty");q=b.columns}b.escapeChar!==void 0&&(V=b.escapeChar+Q),b.escapeFormulae instanceof RegExp?M=b.escapeFormulae:typeof b.escapeFormulae=="boolean"&&b.escapeFormulae&&(M=/^[=+\-@\t\r].*$/)}})(),new RegExp(S(Q),"g"));if(typeof p=="string"&&(p=JSON.parse(p)),Array.isArray(p)){if(!p.length||Array.isArray(p[0]))return D(null,p,K);if(typeof p[0]=="object")return D(q||Object.keys(p[0]),p,K)}else if(typeof p=="object")return typeof p.data=="string"&&(p.data=JSON.parse(p.data)),Array.isArray(p.data)&&(p.fields||(p.fields=p.meta&&p.meta.fields||q),p.fields||(p.fields=Array.isArray(p.data[0])?p.fields:typeof p.data[0]=="object"?Object.keys(p.data[0]):[]),Array.isArray(p.data[0])||typeof p.data[0]=="object"||(p.data=[p.data])),D(p.fields||[],p.data||[],K);throw new Error("Unable to serialize unrecognized input");function D(T,z,B){var G="",$=(typeof T=="string"&&(T=JSON.parse(T)),typeof z=="string"&&(z=JSON.parse(z)),Array.isArray(T)&&0<T.length),Z=!Array.isArray(z[0]);if($&&_){for(var U=0;U<T.length;U++)0<U&&(G+=R),G+=L(T[U],U);0<z.length&&(G+=F)}for(var O=0;O<z.length;O++){var ee=($?T:z[O]).length,W=!1,H=$?Object.keys(z[O]).length===0:z[O].length===0;if(B&&!$&&(W=B==="greedy"?z[O].join("").trim()==="":z[O].length===1&&z[O][0].length===0),B==="greedy"&&$){for(var X=[],J=0;J<ee;J++){var Y=Z?T[J]:J;X.push(z[O][Y])}W=X.join("").trim()===""}if(!W){for(var A=0;A<ee;A++){0<A&&!H&&(G+=R);var te=$&&Z?T[A]:A;G+=L(z[O][te],A)}O<z.length-1&&(!B||0<ee&&!H)&&(G+=F)}}return G}function L(T,z){var B,G;return T==null?"":T.constructor===Date?JSON.stringify(T).slice(1,25):(G=!1,M&&typeof T=="string"&&M.test(T)&&(T="'"+T,G=!0),B=T.toString().replace(I,V),(G=G||k===!0||typeof k=="function"&&k(T,z)||Array.isArray(k)&&k[z]||(($,Z)=>{for(var U=0;U<Z.length;U++)if(-1<$.indexOf(Z[U]))return!0;return!1})(B,u.BAD_DELIMITERS)||-1<B.indexOf(R)||B.charAt(0)===" "||B.charAt(B.length-1)===" ")?Q+B+Q:B)}},u.RECORD_SEP=String.fromCharCode(30),u.UNIT_SEP=String.fromCharCode(31),u.BYTE_ORDER_MARK="\uFEFF",u.BAD_DELIMITERS=["\r",`
`,'"',u.BYTE_ORDER_MARK],u.WORKERS_SUPPORTED=!o&&!!s.Worker,u.NODE_STREAM_INPUT=1,u.LocalChunkSize=10485760,u.RemoteChunkSize=5242880,u.DefaultDelimiter=",",u.Parser=y,u.ParserHandle=j,u.NetworkStreamer=h,u.FileStreamer=f,u.StringStreamer=w,u.ReadableStreamStreamer=x,s.jQuery&&((a=s.jQuery).fn.parse=function(p){var b=p.config||{},k=[];return this.each(function(F){if(!(a(this).prop("tagName").toUpperCase()==="INPUT"&&a(this).attr("type").toLowerCase()==="file"&&s.FileReader)||!this.files||this.files.length===0)return!0;for(var Q=0;Q<this.files.length;Q++)k.push({file:this.files[Q],inputElem:this,instanceConfig:a.extend({},b)})}),_(),this;function _(){if(k.length===0)E(p.complete)&&p.complete();else{var F,Q,V,K,q=k[0];if(E(p.before)){var M=p.before(q.file,q.inputElem);if(typeof M=="object"){if(M.action==="abort")return F="AbortError",Q=q.file,V=q.inputElem,K=M.reason,void(E(p.error)&&p.error({name:F},Q,V,K));if(M.action==="skip")return void R();typeof M.config=="object"&&(q.instanceConfig=a.extend(q.instanceConfig,M.config))}else if(M==="skip")return void R()}var I=q.instanceConfig.complete;q.instanceConfig.complete=function(D){E(I)&&I(D,q.file,q.inputElem),R()},u.parse(q.file,q.instanceConfig)}}function R(){k.splice(0,1),_()}}),i&&(s.onmessage=function(p){p=p.data,u.WORKER_ID===void 0&&p&&(u.WORKER_ID=p.workerId),typeof p.input=="string"?s.postMessage({workerId:u.WORKER_ID,results:u.parse(p.input,p.config),finished:!0}):(s.File&&p.input instanceof File||p.input instanceof Object)&&(p=u.parse(p.input,p.config))&&s.postMessage({workerId:u.WORKER_ID,results:p,finished:!0})}),(h.prototype=Object.create(m.prototype)).constructor=h,(f.prototype=Object.create(m.prototype)).constructor=f,(w.prototype=Object.create(w.prototype)).constructor=w,(x.prototype=Object.create(m.prototype)).constructor=x,u})})(Am);var ng=Am.exports;const vr=ru(ng);function Xn({startRect:e,targetRef:t,count:r=12,onDone:s}){return d.useEffect(()=>{const a=t==null?void 0:t.current;if(!e||!a){s==null||s();return}const o=a.getBoundingClientRect(),i=document.createElement("div");i.style.position="fixed",i.style.inset="0",i.style.pointerEvents="none",i.style.zIndex="9999",document.body.appendChild(i);const l=o.left+o.width/2,c=o.top+o.height/2,u=e.left+e.width/2,m=e.top+e.height/2,h=200;let f=0;function w(x){const j=document.createElement("div");j.textContent="🪙",Object.assign(j.style,{position:"fixed",left:"0px",top:"0px",zIndex:"10000",pointerEvents:"none",fontSize:"22px",opacity:"1",willChange:"transform, opacity",transform:"translate(0px, 0px)"});const S=u,y=m,g=l,v=c;j.style.transform=`translate(${S}px, ${y}px) scale(1)`,i.appendChild(j),j.getBoundingClientRect(),j.style.transition=`transform ${h}ms cubic-bezier(.2,.8,.2,1), opacity ${h}ms linear`,requestAnimationFrame(()=>{j.style.transform=`translate(${g}px, ${v}px) scale(.6)`,j.style.opacity="0.1"}),setTimeout(()=>{j.remove(),f+=1,f===r&&(i.remove(),s==null||s())},h+50)}for(let x=0;x<r;x++)setTimeout(()=>w(),x*60);return()=>{try{i.remove()}catch{}}},[e,t,r,s]),null}const vt={XP_PER_CORRECT:10,XP_PER_LEVEL:100,MAX_LEVEL:100,COINS_PER_CORRECT:5,MAX_ENERGY:5,ENERGY_REGEN_TIME:36e5,ENERGY_COST:{quiz:1,practice:0,daily:0},COMBO_MULTIPLIERS:{2:{multiplier:1.2,text:"Nice!"},3:{multiplier:1.5,text:"Great!"},5:{multiplier:2,text:"On Fire!"},10:{multiplier:3,text:"Legendary!"}},AVATARS:[{id:"wizard",emoji:"🧙",name:"Knowledge Wizard",unlockLevel:1,bgColor:"from-purple-500 to-indigo-500"},{id:"knight",emoji:"⚔️",name:"Quiz Knight",unlockLevel:1,bgColor:"from-blue-500 to-cyan-500"},{id:"explorer",emoji:"🗺️",name:"Fact Explorer",unlockLevel:5,bgColor:"from-green-500 to-emerald-500"},{id:"scientist",emoji:"🔬",name:"Science Master",unlockLevel:10,bgColor:"from-orange-500 to-red-500"},{id:"artist",emoji:"🎨",name:"Creative Mind",unlockLevel:15,bgColor:"from-pink-500 to-rose-500"}],STORAGE_KEYS:{PLAYER:"qp_player",GAME_STATE:"qp_game_state",ENERGY:"qp_energy",CURRENT_COMBO:"qp_combo"}},Md=e=>Math.floor(e/vt.XP_PER_LEVEL)+1,rg=e=>{const t=e%vt.XP_PER_LEVEL;return{current:t,required:vt.XP_PER_LEVEL,percentage:t/vt.XP_PER_LEVEL*100}};function sg({player:e,size:t="normal",showLevel:r=!0,showName:s=!0}){const a=vt.AVATARS.find(i=>i.id===e.avatar)||vt.AVATARS[0],o={small:"w-10 h-10 text-xl",normal:"w-14 h-14 text-2xl",large:"w-20 h-20 text-4xl"};return n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsxs("div",{className:"relative",children:[n.jsx("div",{className:`${o[t]} rounded-full bg-gradient-to-br ${a.bgColor} flex items-center justify-center shadow-lg`,children:n.jsx("span",{children:a.emoji})}),r&&n.jsx("div",{className:"absolute -bottom-1 -right-1 bg-yellow-500 text-black text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center border-2 border-base-bg",children:e.level})]}),s&&n.jsxs("div",{children:[n.jsx("div",{className:"font-bold text-sm",children:(()=>{const i=JSON.parse(localStorage.getItem("currentUser")||"{}");return i.username?i.username.split(" ")[0]:e.name})()}),n.jsx("div",{className:"text-xs text-base-muted",children:a.name})]})]})}function ag({current:e,required:t,level:r,animate:s=!0}){const[a,o]=d.useState(0),i=e/t*100;return d.useEffect(()=>{if(s){const l=setTimeout(()=>{o(i)},100);return()=>clearTimeout(l)}else o(i)},[i,s]),n.jsxs("div",{className:"w-full",children:[n.jsxs("div",{className:"flex justify-between items-center mb-1",children:[n.jsxs("span",{className:"text-xs font-medium",children:["Level ",r]}),n.jsxs("span",{className:"text-xs text-base-muted",children:[e,"/",t," XP"]})]}),n.jsx("div",{className:"h-2 bg-black/20 rounded-full overflow-hidden",children:n.jsx("div",{className:"h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-700 ease-out relative",style:{width:`${a}%`},children:n.jsx("div",{className:"absolute inset-0 bg-white/20 animate-pulse"})})})]})}const Im=[{name:"GK",slug:"general-knowledge",questions:50,icon:"🧠",color:"#FF6B6B",gradient:"from-red-500 to-pink-500"},{name:"Science",slug:"science",questions:45,icon:"🧪",color:"#4ECDC4",gradient:"from-cyan-500 to-teal-500"},{name:"Fun Facts",slug:"fun-facts",questions:30,icon:"🎉",color:"#FFD93D",gradient:"from-yellow-400 to-orange-500"},{name:"History",slug:"history",questions:42,icon:"🏺",color:"#A8E6CF",gradient:"from-green-400 to-emerald-500"},{name:"AI & Tech",slug:"artificial-intelligence",questions:28,icon:"🤖",color:"#C7B8FF",gradient:"from-purple-400 to-indigo-500"},{name:"More",slug:"more",questions:0,icon:"✨",color:"#FF8CC3",gradient:"from-pink-400 to-rose-500"}],Lm=[{name:"Geography",slug:"geography",questions:38,icon:"🗺️",color:"#FACC15",gradient:"from-yellow-400 to-amber-500"},{name:"Computer",slug:"computer",questions:34,icon:"💻",color:"#3B82F6",gradient:"from-blue-400 to-blue-600"},{name:"Aptitude",slug:"aptitude",questions:36,icon:"📐",color:"#EC4899",gradient:"from-pink-500 to-rose-500"},{name:"Iconic Figures",slug:"iconic-figures",questions:26,icon:"🌟",color:"#8B5CF6",gradient:"from-purple-500 to-violet-600"}],Dm=[...Im.filter(e=>e.slug!=="more"),...Lm];function og(){const e=je(),[t,r]=d.useState(!1),[s,a]=d.useState([]);d.useEffect(()=>{const i=[...Array(6)].map((l,c)=>({id:c,left:Math.random()*100,delay:Math.random()*2,duration:2+Math.random()*2}));a(i)},[]);const o=()=>{e("/play/classic",{state:{from:"home"}})};return n.jsxs("div",{className:"relative overflow-hidden rounded-3xl pt-12 pb-12 px-6 mb-4 transform transition-all hover:scale-[1.01] active:scale-[0.99]",style:{background:"linear-gradient(135deg, #FF6B6B 0%, #4ECDC4 50%, #45B7D1 100%)",boxShadow:"0 10px 30px rgba(0,0,0,0.1)"},onMouseEnter:()=>r(!0),onMouseLeave:()=>r(!1),children:[n.jsx("style",{jsx:!0,children:`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(5deg); }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes sparkle {
          0% { transform: translateY(0) scale(0); opacity: 0; }
          50% { transform: translateY(-50px) scale(1); opacity: 1; }
          100% { transform: translateY(-100px) scale(0); opacity: 0; }
        }
        
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 10px rgba(255,255,255,0.5); }
          50% { box-shadow: 0 0 20px rgba(255,255,255,0.8); }
        }
        
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          25% { transform: translateY(-5px); }
          75% { transform: translateY(2px); }
        }
      `}),s.map(i=>n.jsx("div",{className:"absolute text-lg pointer-events-none",style:{left:`${i.left}%`,bottom:"0",animation:`sparkle ${i.duration}s ease-out infinite`,animationDelay:`${i.delay}s`},children:"✨"},i.id)),n.jsx("div",{className:"absolute -top-1 -right-2 text-7xl opacity-15",style:{animation:"spin-slow 20s linear infinite",transform:t?"scale(1.1)":"scale(1)",transition:"transform 0.3s"},children:"🎡"}),n.jsxs("div",{className:"flex items-center justify-between gap-4",children:[n.jsxs("div",{className:"flex items-center gap-4",children:[n.jsx("div",{className:"relative w-14 h-14 flex-shrink-0",style:{animation:t?"bounce 1s ease-in-out infinite":"float 3s ease-in-out infinite"},children:n.jsxs("svg",{width:"64",height:"64",viewBox:"0 0 100 100",className:"absolute inset-0",style:{animation:"spin-slow 4s linear infinite"},children:[[{color:"#FF6B6B",icon:"🧠"},{color:"#4ECDC4",icon:"🎉"},{color:"#45B7D1",icon:"🧪"},{color:"#FFD700",icon:"🏺"},{color:"#9370DB",icon:"🗺️"},{color:"#FF9800",icon:"🤖"}].map((i,l)=>{const u=l*60,m=u+60,h=0,f=Math.PI*u/180,w=Math.PI*m/180,x=50+45*Math.cos(f),j=50-45*Math.sin(f),S=50+45*Math.cos(w),y=50-45*Math.sin(w);return n.jsx("g",{children:n.jsx("path",{d:`M50,50 L${x},${j} A45,45 0 ${h} 0 ${S},${y} Z`,fill:i.color,stroke:"rgba(255,255,255,0.3)",strokeWidth:"0.5"})},l)}),n.jsx("circle",{cx:"50",cy:"50",r:"12",fill:"white"}),n.jsx("text",{x:"50",y:"55",textAnchor:"middle",className:"text-xs font-bold fill-gray-800",children:"🪙"})]})}),n.jsxs("div",{children:[n.jsx("h2",{className:"text-xl font-black text-white drop-shadow-md whitespace-nowrap",children:"Spin & Win!"}),n.jsx("p",{className:"text-sm text-white/90",children:"Win amazing prizes!"})]})]}),n.jsxs("div",{className:"relative",children:[n.jsx("div",{className:"absolute -top-2 -left-2 text-sm opacity-70",style:{animation:"float 3s ease-in-out infinite"},children:"🪙"}),n.jsx("div",{className:"absolute -top-2 -right-2 text-sm opacity-70",style:{animation:"float 3s ease-in-out infinite 0.5s"},children:"⭐"}),n.jsx("div",{className:"absolute -bottom-10 left-1/2 -translate-x-1/2 text-sm opacity-70",style:{animation:"float 3s ease-in-out infinite 1s"},children:"💎"}),n.jsxs("button",{className:"relative bg-white text-gray-900 rounded-full font-bold shadow-lg hover:shadow-xl transition-all px-5 py-2.5 flex items-center gap-2",style:{animation:"pulse-glow 2s ease-in-out infinite"},onClick:i=>{i.stopPropagation(),o()},children:[n.jsx("span",{className:"text-sm font-black",children:"PLAY"}),n.jsx("span",{className:"text-base",children:"🎯"})]})]})]})]})}function ig({actions:e}){return n.jsx("div",{className:"grid grid-cols-4 gap-3 mb-8",children:e.map((t,r)=>n.jsxs("button",{onClick:t.action,className:`${t.color} aspect-square rounded-2xl flex flex-col items-center justify-center gap-1 transform transition-all hover:scale-105`,children:[n.jsx("div",{className:"text-2xl",children:t.icon}),n.jsx("div",{className:"text-[10px] font-medium text-white",children:t.label})]},r))})}function lg({categories:e,onCategorySelect:t}){return n.jsxs("div",{className:"mb-6",children:[n.jsx("h3",{className:"text-lg font-bold mb-4",children:"Choose Your Adventure"}),n.jsx("div",{className:"grid grid-cols-3 gap-3",children:e.map(r=>n.jsxs("button",{onClick:()=>t(r),className:`bg-gradient-to-br ${r.gradient} aspect-square rounded-2xl p-4 flex flex-col items-center justify-center gap-2 transform transition-all hover:scale-105 hover:shadow-lg relative`,children:[n.jsx("div",{className:"text-3xl",children:r.icon}),n.jsx("div",{className:"text-xs font-bold text-white text-center",children:r.name}),r.questions>0&&n.jsxs("div",{className:"text-[10px] bg-white/20 px-2 py-0.5 rounded-full",children:[r.questions," Qs"]})]},r.name))})]})}function cg({onClick:e,isPulsing:t}){return n.jsxs("button",{onClick:e,className:`w-full rounded-2xl p-5 flex justify-between items-center transition-all ${t?"bg-green-500/20 border-2 border-green-500 animate-pulse":"bg-white/5 border border-base-border hover:bg-white/10"}`,children:[n.jsxs("div",{className:"flex items-center gap-4",children:[n.jsx("div",{className:"w-12 h-12 bg-gradient-to-br from-green-400 to-teal-500 rounded-xl grid place-items-center text-2xl",children:"📚"}),n.jsxs("div",{className:"text-left",children:[n.jsx("div",{className:"font-medium",children:"Practice Mode"}),n.jsx("div",{className:"text-xs text-base-muted",children:"No timer • No energy cost • Learn at your pace"})]})]}),n.jsx("div",{className:"text-xl",children:"→"})]})}function dg({coinPillRef:e}){const[t,r]=d.useState("idle"),[s,a]=d.useState([]),[o,i]=d.useState(0),[l,c]=d.useState([]),[u,m]=d.useState(0),[h,f]=d.useState(""),[w,x]=d.useState(null),[j,S]=d.useState(null),[y,g]=d.useState(!1),[v,N]=d.useState(!1),[C,P]=d.useState(!1),[E,p]=d.useState(null),[b,k]=d.useState(0),_=d.useRef(null),R=d.useRef(null),[F]=et("/sounds/correct.mp3",{volume:.6}),[Q]=et("/sounds/wrong.mp3",{volume:.6}),[V]=et("/sounds/win.mp3",{volume:.7,duration:1e3}),[K]=et("/sounds/coin.mp3",{volume:.75}),q=3,M=10,I=2,D=50;d.useEffect(()=>{L()},[]),d.useEffect(()=>{if(t==="complete"){const H=()=>{const J=new Date,Y=new Date(J);Y.setDate(Y.getDate()+1),Y.setHours(0,0,0,0);const A=Y-J,te=Math.floor(A/(1e3*60*60)),ne=Math.floor(A%(1e3*60*60)/(1e3*60));f(`${te}h ${ne}m`)};H();const X=setInterval(H,6e4);return()=>clearInterval(X)}},[t]);const L=async()=>{try{const X=await(await fetch("/data/quiz_questions_bank.csv")).text(),{data:J}=vr.parse(X,{header:!0,skipEmptyLines:!0}),Y=J.filter(A=>A.question&&A.option1&&A.option2&&A.option3&&A.option4).map((A,te)=>{var ne;return{id:te,question:A.question,options:[A.option1,A.option2,A.option3,A.option4],correct:["A","B","C","D"].indexOf((ne=A.answer)==null?void 0:ne.toUpperCase())}}).filter(A=>A.correct>=0).sort(()=>Math.random()-.5).slice(0,q);a(Y)}catch{a([{id:1,question:"What is the capital of France?",options:["London","Paris","Berlin","Madrid"],correct:1},{id:2,question:"What is 2 + 2?",options:["3","4","5","6"],correct:1},{id:3,question:"What color is the sky?",options:["Red","Green","Blue","Yellow"],correct:2}])}},T=()=>{r("playing"),i(0),c(new Array(q).fill(null)),m(0),g(!1),k(0)},z=H=>{const X=[...l];X[o]=H,c(X);const J=H===s[o].correct;N(J),g(!0),J?(F&&F(),P(!0),setTimeout(()=>P(!1),500)):Q&&Q();const Y=X.filter(A=>A!==null).length;setTimeout(()=>{g(!1),Y===q?(r("celebrating"),V&&V(),setTimeout(()=>{G(X)},2e3)):B(X)},600)},B=H=>{for(let X=o+1;X<q;X++)if(H[X]===null){i(X);return}for(let X=0;X<o;X++)if(H[X]===null){i(X);return}},G=H=>{const X=H.reduce((A,te,ne)=>A+(te===s[ne].correct?1:0),0);m(X);const Y=X===q?X*M*I:X*M;k(Y),r("complete"),setTimeout(()=>{if(Y>0&&_.current&&(e!=null&&e.current)){const A=_.current.getBoundingClientRect();p({startRect:A,count:Math.min(Y/5,10),amount:Y}),K&&K()}},500)},$=()=>{L(),r("idle"),i(0),c([]),m(0),g(!1),k(0)},Z=H=>{S(null),x(H.targetTouches[0].clientX)},U=H=>{S(H.targetTouches[0].clientX)},O=()=>{if(!w||!j)return;const H=w-j,X=H>D,J=H<-D;if(X){const Y=(o+1)%q;i(Y)}else if(J){const Y=(o-1+q)%q;i(Y)}},ee=({parentRef:H})=>{var te;if(!C)return null;const X=(te=H==null?void 0:H.current)==null?void 0:te.getBoundingClientRect(),J=X?X.top:100,Y=X?X.left:0,A=X?X.width:window.innerWidth;return n.jsx("div",{className:"fixed inset-0 pointer-events-none z-50",children:[...Array(12)].map((ne,le)=>n.jsx("div",{className:"absolute",style:{left:`${Y+Math.random()*A}px`,top:`${J}px`,animation:`confettiFall ${2+Math.random()*1}s ease-out forwards`,animationDelay:`${Math.random()*.3}s`,fontSize:"24px",opacity:.9},children:["🎉","✨","🌟","⭐","🎊"][Math.floor(Math.random()*5)]},`${Date.now()}-${le}`))})};if(t==="celebrating")return n.jsxs("div",{className:"relative rounded-2xl bg-gradient-to-br from-purple-600/20 to-blue-600/20 backdrop-blur border border-white/10 p-8 mb-4 text-center",children:[n.jsx("div",{className:"animate-bounce-slow",children:n.jsx("span",{className:"text-5xl",children:"🎉"})}),n.jsx("h2",{className:"text-2xl font-bold mt-4 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent",children:"Congratulations!"}),n.jsx("p",{className:"text-sm text-gray-400 mt-2",children:"You've completed today's challenge"})]});if(t==="complete"){const H=Math.round(u/q*100),X=u===q;return n.jsxs(n.Fragment,{children:[E&&n.jsx(Xn,{startRect:E.startRect,targetRef:e,count:E.count,onDone:()=>{if(!E.processed){E.processed=!0;const J=st.getCurrentUser();J!=null&&J.phone?(ie.addCoins(E.amount,"Daily Challenge"),ie.updateQuestProgress(J.phone,"daily_challenge",1)):ie.addCoins(E.amount,"Daily Challenge"),window.dispatchEvent(new Event("coinsUpdated"))}p(null)}}),n.jsxs("div",{className:"relative rounded-2xl bg-gradient-to-br from-purple-600/10 to-blue-600/10 backdrop-blur border border-white/10 p-4 mb-4",children:[n.jsxs("div",{ref:_,className:"flex items-center justify-between",children:[n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsx("div",{className:"w-12 h-12 rounded-full bg-gradient-to-br from-yellow-400/20 to-orange-400/20 flex items-center justify-center",children:n.jsx("span",{className:"text-2xl",children:X?"🏆":u>=2?"🥈":"🥉"})}),n.jsxs("div",{children:[n.jsx("h3",{className:"text-lg font-semibold text-yellow-400",children:"Challenge Complete!"}),n.jsxs("p",{className:"text-xs text-gray-400",children:["Come back in ",h]})]})]}),n.jsxs("div",{className:"flex gap-4",children:[n.jsxs("div",{className:"text-center",children:[n.jsxs("div",{className:"text-lg font-bold text-green-400",children:[H,"%"]}),n.jsx("div",{className:"text-[10px] text-gray-500",children:"Accuracy"})]}),n.jsxs("div",{className:"text-center",children:[n.jsxs("div",{className:"text-lg font-bold text-yellow-400",children:["+",b]}),n.jsx("div",{className:"text-[10px] text-gray-500",children:"Coins"})]}),n.jsxs("div",{className:"text-center",children:[n.jsx("div",{className:"text-lg font-bold text-orange-400 whitespace-nowrap",children:"🔥2"}),n.jsx("div",{className:"text-[10px] text-gray-500",children:"Streak"})]})]})]}),n.jsx("button",{onClick:$,className:"absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-[10px] text-gray-600 hover:text-gray-400",children:"[Test: Replay]"})]})]})}if(t==="idle")return n.jsx("div",{className:"relative overflow-hidden rounded-2xl bg-gradient-to-br from-violet-500/30 to-blue-500/15 backdrop-blur border border-white/10 p-8 mb-4",children:n.jsxs("div",{className:"flex items-center justify-between",children:[n.jsxs("div",{children:[n.jsx("h3",{className:"text-lg font-semibold mb-2",children:"Daily Challenge"}),n.jsxs("p",{className:"text-xs text-gray-400",children:[q," questions • Up to ",q*M*I," coins"]})]}),n.jsx("button",{onClick:T,className:"w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center cursor-pointer hover:scale-110 active:scale-95 transition-transform",children:n.jsx("span",{className:"text-white",children:"▶"})})]})});const W=s[o];return n.jsxs(n.Fragment,{children:[n.jsx(ee,{parentRef:R}),n.jsxs("div",{ref:R,className:"relative rounded-2xl bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur border border-white/10 p-4 mb-4",onTouchStart:Z,onTouchMove:U,onTouchEnd:O,children:[n.jsx("div",{className:"flex gap-1 mb-4",children:[...Array(q)].map((H,X)=>{var J;return n.jsx("div",{className:`h-1 flex-1 rounded-full transition-all ${l[X]!==null?l[X]===((J=s[X])==null?void 0:J.correct)?"bg-green-500":"bg-red-500":X===o?"bg-blue-500":"bg-gray-700"}`},X)})}),n.jsx("h3",{className:"text-base font-medium mb-4",children:W.question}),n.jsx("div",{className:"grid gap-2",children:W.options.map((H,X)=>{const J=l[o]===X,Y=l[o]!==null,A=X===W.correct,te=y&&(J||A);return n.jsx("button",{onClick:()=>!Y&&z(X),disabled:Y,className:`
                  relative p-3 rounded-xl text-left text-sm font-medium transition-all
                  ${te&&A?"bg-green-500/30 border border-green-500 animate-pulse-once":te&&J&&!A?"bg-red-500/30 border border-red-500 animate-shake":J&&!y?"bg-blue-500/20 border border-blue-500":Y?"bg-white/5 border border-transparent opacity-50":"bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/10 active:scale-[0.98]"}
                `,children:n.jsxs("div",{className:"flex items-center justify-between",children:[n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx("span",{className:"opacity-50",children:String.fromCharCode(65+X)}),n.jsx("span",{children:H})]}),te&&A&&n.jsx("span",{className:"text-green-400 animate-fade-in",children:"✓"}),te&&J&&!A&&n.jsx("span",{className:"text-red-400 animate-fade-in",children:"✗"})]})},X)})}),n.jsx("style",{jsx:!0,children:`
          @keyframes shimmer {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
          }
          
          @keyframes pulse-once {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.8; transform: scale(1.02); }
          }
          
          @keyframes shake {
            0%, 100% { transform: translateX(0); }
            25% { transform: translateX(-5px); }
            75% { transform: translateX(5px); }
          }
          
          @keyframes fade-in {
            from { opacity: 0; transform: scale(0.5); }
            to { opacity: 1; transform: scale(1); }
          }
          
          @keyframes bounce-slow {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-20px); }
          }
          
        @keyframes confettiFall {
        0% { 
            transform: translateY(0) translateX(0) rotate(0deg) scale(1);
            opacity: 0.9;
        }
        10% {
            opacity: 1;
        }
        25% {
            transform: translateY(25vh) translateX(10px) rotate(180deg) scale(1.1);
        }
        50% {
            transform: translateY(50vh) translateX(-10px) rotate(360deg) scale(1);
        }
        75% {
            transform: translateY(75vh) translateX(5px) rotate(540deg) scale(0.9);
            opacity: 0.8;
        }
        100% { 
            transform: translateY(100vh) translateX(0) rotate(720deg) scale(0.8);
            opacity: 0;
        }
        }
                
          .animate-shimmer {
            animation: shimmer 3s infinite;
          }
          
          .animate-pulse-once {
            animation: pulse-once 0.6s ease-out;
          }
          
          .animate-shake {
            animation: shake 0.4s ease-out;
          }
          
          .animate-fade-in {
            animation: fade-in 0.3s ease-out;
          }
          
          .animate-bounce-slow {
            animation: bounce-slow 1s ease-in-out infinite;
          }
          
          .animate-confetti {
            animation: confetti 2s ease-in forwards;
          }
        `})]})]})}function ug({show:e,onClose:t,player:r,changeAvatar:s,GAME_CONSTANTS:a}){return e?n.jsx("div",{className:"fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4",onClick:o=>{o.target===o.currentTarget&&t()},children:n.jsxs("div",{className:"bg-base-card rounded-3xl p-6 w-full max-w-md border border-base-border max-h-[80vh] overflow-y-auto",onClick:o=>o.stopPropagation(),children:[n.jsxs("div",{className:"flex justify-between items-center mb-4",children:[n.jsx("h3",{className:"text-xl font-bold",children:"Choose Your Avatar"}),n.jsx("button",{onClick:t,className:"w-8 h-8 rounded-lg bg-white/5 border border-base-border grid place-items-center hover:bg-white/10 transition",children:"✕"})]}),n.jsx("div",{className:"grid grid-cols-2 gap-4",children:a.AVATARS.map(o=>{const i=!r.unlockedAvatars||!r.unlockedAvatars.includes(o.id),l=r.avatar===o.id;return n.jsxs("button",{onClick:()=>{i||(s(o.id),t())},className:`p-4 rounded-2xl border-2 transition-all ${l?"border-brand-blue bg-brand-blue/20":i?"border-gray-600 bg-gray-800/50 opacity-50":"border-base-border bg-white/5 hover:bg-white/10"}`,disabled:i,children:[n.jsx("div",{className:`text-4xl mb-2 ${i?"grayscale":""}`,children:o.emoji}),n.jsx("div",{className:"text-sm font-medium",children:o.name}),i&&n.jsxs("div",{className:"text-xs text-gray-400 mt-1",children:["Unlock at Level ",o.unlockLevel]}),l&&n.jsx("div",{className:"text-xs text-brand-blue mt-1",children:"Current"})]},o.id)})})]})}):null}function mg({show:e,onClose:t,categories:r,onCategorySelect:s}){return e?n.jsx("div",{className:"fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4",onClick:a=>{a.target===a.currentTarget&&t()},children:n.jsxs("div",{className:"bg-base-card rounded-3xl p-6 w-full max-w-md border border-base-border",onClick:a=>a.stopPropagation(),children:[n.jsxs("div",{className:"flex justify-between items-center mb-4",children:[n.jsx("h3",{className:"text-xl font-bold",children:"More categories"}),n.jsx("button",{onClick:t,className:"w-8 h-8 rounded-lg bg-white/5 border border-base-border grid place-items-center hover:bg-white/10 transition",children:"✕"})]}),n.jsx("div",{className:"grid grid-cols-2 gap-3 mb-4",children:r.map(a=>n.jsxs("button",{onClick:()=>{t(),s(a)},className:`bg-gradient-to-br ${a.gradient} p-4 rounded-2xl flex flex-col items-center gap-2 hover:scale-105 transition-transform relative`,children:[n.jsx("div",{className:"text-3xl",children:a.icon}),n.jsx("div",{className:"text-sm font-bold text-white",children:a.name}),n.jsxs("div",{className:"text-xs text-white/80",children:[a.questions," questions"]})]},a.name))})]})}):null}function fg({show:e,onClose:t,coins:r,onNavigateToPlay:s}){return e?n.jsx("div",{className:"fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4",onClick:a=>{a.target===a.currentTarget&&t()},children:n.jsxs("div",{className:"bg-base-card rounded-3xl p-6 w-full max-w-md border border-base-border relative overflow-hidden",onClick:a=>a.stopPropagation(),children:[n.jsx("div",{className:"absolute inset-0 opacity-10",children:n.jsx("div",{className:"magic-gradient h-full"})}),n.jsxs("div",{className:"relative",children:[n.jsxs("div",{className:"flex items-center justify-between mb-6",children:[n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsx("div",{className:"coin-3d text-5xl",style:{animation:"coinRotate 2s linear infinite, glow 2s ease-in-out infinite"},children:"🪙"}),n.jsxs("div",{children:[n.jsx("h3",{className:"text-2xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent",children:"Your Treasure"}),n.jsxs("p",{className:"text-3xl font-bold text-white mt-1",children:[ie.getCoins()," Coins"]})]})]}),n.jsx("button",{onClick:t,className:"w-8 h-8 rounded-lg bg-white/5 border border-base-border grid place-items-center hover:bg-white/10 transition",children:"✕"})]}),n.jsxs("div",{className:"mb-6",children:[n.jsx("h4",{className:"text-sm font-medium text-base-muted mb-3",children:"Ways to Earn"}),n.jsxs("div",{className:"space-y-3",children:[n.jsx("div",{className:"p-4 rounded-xl bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 hover:scale-[1.02] transition-transform",children:n.jsxs("div",{className:"flex items-center justify-between",children:[n.jsxs("div",{children:[n.jsxs("div",{className:"font-medium flex items-center gap-2",children:[n.jsx("span",{className:"text-2xl",children:"✅"}),"Complete Quizzes"]}),n.jsx("div",{className:"text-xs text-base-muted mt-1",children:"+5 coins per correct answer"})]}),n.jsx("div",{className:"text-green-400 font-bold",children:"+5"})]})}),n.jsx("div",{className:"p-4 rounded-xl bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 hover:scale-[1.02] transition-transform",children:n.jsxs("div",{className:"flex items-center justify-between",children:[n.jsxs("div",{children:[n.jsxs("div",{className:"font-medium flex items-center gap-2",children:[n.jsx("span",{className:"text-2xl",children:"🎯"}),"Daily Challenge"]}),n.jsx("div",{className:"text-xs text-base-muted mt-1",children:"Complete daily for bonus"})]}),n.jsx("div",{className:"text-blue-400 font-bold",children:"+5"})]})}),n.jsx("div",{className:"p-4 rounded-xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 hover:scale-[1.02] transition-transform",children:n.jsxs("div",{className:"flex items-center justify-between",children:[n.jsxs("div",{children:[n.jsxs("div",{className:"font-medium flex items-center gap-2",children:[n.jsx("span",{className:"text-2xl",children:"🎰"}),"Spin & Play"]}),n.jsx("div",{className:"text-xs text-base-muted mt-1",children:"Test your luck!"})]}),n.jsx("div",{className:"text-purple-400 font-bold",children:"+50"})]})}),n.jsx("div",{className:"p-4 rounded-xl bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/20 hover:scale-[1.02] transition-transform",children:n.jsxs("div",{className:"flex items-center justify-between",children:[n.jsxs("div",{children:[n.jsxs("div",{className:"font-medium flex items-center gap-2",children:[n.jsx("span",{className:"text-2xl",children:"🏆"}),"Achievements"]}),n.jsx("div",{className:"text-xs text-base-muted mt-1",children:"Unlock special rewards"})]}),n.jsx("div",{className:"text-orange-400 font-bold",children:"+???"})]})})]})]}),n.jsxs("div",{className:"mb-6",children:[n.jsxs("div",{className:"flex justify-between text-xs text-base-muted mb-2",children:[n.jsx("span",{children:"Next reward"}),n.jsxs("span",{children:[100-r%100," coins to go"]})]}),n.jsx("div",{className:"h-2 bg-white/10 rounded-full overflow-hidden",children:n.jsx("div",{className:"h-full bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full transition-all",style:{width:`${r%100}%`}})})]}),n.jsx("button",{onClick:s,className:"w-full py-3 rounded-xl bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-bold hover:scale-[1.02] transition-transform shadow-lg",style:{boxShadow:"0 10px 30px rgba(251, 191, 36, 0.3)"},children:"Start Earning Now! 🚀"})]})]})}):null}function hg({show:e,onClose:t,selectedCategory:r,difficulty:s,setDifficulty:a,count:o,setCount:i,timer:l,setTimer:c,onStart:u}){return!e||!r?null:n.jsx("div",{className:"fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4",style:{position:"fixed",top:0,left:0,right:0,bottom:0,display:"flex",alignItems:"center",justifyContent:"center",zIndex:9999},onClick:m=>{m.target===m.currentTarget&&t()},children:n.jsxs("div",{className:"bg-base-card rounded-3xl p-6 w-full max-w-md border border-base-border",onClick:m=>m.stopPropagation(),children:[n.jsxs("div",{className:"flex justify-between items-center mb-4",children:[n.jsx("h3",{className:"text-xl font-bold",children:"Quiz Mode"}),n.jsx("button",{onClick:t,className:"w-8 h-8 rounded-lg bg-white/5 border border-base-border grid place-items-center hover:bg-white/10 transition",children:"✕"})]}),n.jsx("div",{className:"mb-4 p-3 rounded-xl bg-blue-500/10 border border-blue-500/30",children:n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsx("div",{className:"text-2xl",children:r.icon}),n.jsxs("div",{children:[n.jsxs("div",{className:"font-medium",children:["Category: ",r.name]}),n.jsxs("div",{className:"text-xs text-base-muted",children:[r.questions," questions available"]})]})]})}),n.jsxs("div",{className:"mb-4",children:[n.jsx("label",{className:"text-sm text-base-muted mb-2 block",children:"Difficulty"}),n.jsx("div",{className:"grid grid-cols-3 gap-2",children:["easy","medium","hard"].map(m=>n.jsx("button",{onClick:()=>a(m),className:`py-2 rounded-xl border ${s===m?"bg-brand-blue/30 border-brand-blue":"bg-white/5 border-base-border"}`,children:m.charAt(0).toUpperCase()+m.slice(1)},m))})]}),n.jsxs("div",{className:"mb-4",children:[n.jsx("label",{className:"text-sm text-base-muted mb-2 block",children:"Questions"}),n.jsx("div",{className:"grid grid-cols-4 gap-2",children:[5,10,20,30].map(m=>n.jsx("button",{onClick:()=>i(m),className:`py-2 rounded-xl border ${o===m?"bg-brand-blue/30 border-brand-blue":"bg-white/5 border-base-border"}`,children:m},m))})]}),n.jsxs("div",{className:"mb-6",children:[n.jsx("label",{className:"text-sm text-base-muted mb-2 block",children:"Timer (seconds per question)"}),n.jsx("input",{type:"number",value:l,onChange:m=>c(Number(m.target.value)||45),min:10,max:120,className:"w-full px-4 py-2 rounded-xl bg-white/5 border border-base-border"})]}),n.jsxs("div",{className:"flex gap-3",children:[n.jsx("button",{onClick:t,className:"flex-1 py-3 rounded-xl border border-base-border bg-white/5",children:"Cancel"}),n.jsx("button",{onClick:u,className:"flex-1 py-3 rounded-xl bg-gradient-to-r from-brand-blue to-brand-purple text-white font-medium",children:"Start Quiz"})]})]})})}function pg({show:e,onClose:t,allCategories:r,category:s,setCategory:a,difficulty:o,setDifficulty:i,count:l,setCount:c,onStart:u}){return e?n.jsx("div",{className:"fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4",onClick:m=>{m.target===m.currentTarget&&t()},children:n.jsxs("div",{className:"bg-base-card rounded-3xl p-6 w-full max-w-md border border-base-border max-h-[90vh] overflow-y-auto",onClick:m=>m.stopPropagation(),children:[n.jsxs("div",{className:"flex justify-between items-center mb-4",children:[n.jsx("h3",{className:"text-xl font-bold",children:"Practice Mode"}),n.jsx("button",{onClick:t,className:"w-8 h-8 rounded-lg bg-white/5 border border-base-border grid place-items-center hover:bg-white/10 transition",children:"✕"})]}),n.jsxs("div",{className:"mb-4",children:[n.jsx("label",{className:"text-sm text-base-muted mb-2 block",children:"Category"}),n.jsx("div",{className:"grid grid-cols-3 gap-2 max-h-[200px] overflow-y-auto",children:r.map(m=>n.jsxs("button",{onClick:()=>a(m.slug),className:`p-3 rounded-xl border flex flex-col items-center gap-1 ${s===m.slug?"bg-brand-blue/30 border-brand-blue":"bg-white/5 border-base-border"}`,children:[n.jsx("div",{className:"text-xl",children:m.icon}),n.jsx("div",{className:"text-[10px] text-center",children:m.name})]},m.slug))})]}),n.jsxs("div",{className:"mb-4",children:[n.jsx("label",{className:"text-sm text-base-muted mb-2 block",children:"Difficulty"}),n.jsx("div",{className:"grid grid-cols-3 gap-2",children:["easy","medium","hard"].map(m=>n.jsx("button",{onClick:()=>i(m),className:`py-2 rounded-xl border ${o===m?"bg-brand-blue/30 border-brand-blue":"bg-white/5 border-base-border"}`,children:m.charAt(0).toUpperCase()+m.slice(1)},m))})]}),n.jsxs("div",{className:"mb-6",children:[n.jsx("label",{className:"text-sm text-base-muted mb-2 block",children:"Questions"}),n.jsx("div",{className:"grid grid-cols-4 gap-2",children:[5,10,20,30].map(m=>n.jsx("button",{onClick:()=>c(m),className:`py-2 rounded-xl border ${l===m?"bg-brand-blue/30 border-brand-blue":"bg-white/5 border-base-border"}`,children:m},m))})]}),n.jsxs("div",{className:"flex gap-3",children:[n.jsx("button",{onClick:t,className:"flex-1 py-3 rounded-xl border border-base-border bg-white/5",children:"Cancel"}),n.jsx("button",{onClick:u,className:"flex-1 py-3 rounded-xl bg-gradient-to-r from-brand-blue to-brand-purple text-white font-medium",children:"Start Practice"})]})]})}):null}function xg({player:e,onContinue:t}){const[r,s]=d.useState(()=>sessionStorage.getItem("justSignedUp")==="true"?(sessionStorage.removeItem("justSignedUp"),!1):sessionStorage.getItem("welcomeShown")!=="true"),[a,o]=d.useState(!1),[i,l]=d.useState(!1),[c,u]=d.useState(""),[m,h]=d.useState(""),[f,w]=d.useState("Champion"),[x,j]=d.useState(1),[S,y]=d.useState(0),[g,v]=d.useState(0),N=()=>{try{const p=new Audio("/sounds/welcome.mp3");p.volume=.6,p.play()}catch{console.log("Welcome sound not available")}},C=()=>{navigator.vibrate&&navigator.vibrate([100,50,100])};d.useEffect(()=>{if((()=>{const F=JSON.parse(localStorage.getItem("currentUser")||"{}");let Q="Champion",V=1,K=0,q=0;if(F.phone){const I=JSON.parse(localStorage.getItem(`user_profile_${F.phone}`)||"{}"),L=JSON.parse(localStorage.getItem("users")||"{}")[F.phone]||{};I.name?Q=I.name.split(" ")[0]:L.username?Q=L.username.split(" ")[0]:F.username&&(Q=F.username.split(" ")[0]),Q&&Q!=="Champion"&&(Q=Q.charAt(0).toUpperCase()+Q.slice(1).toLowerCase())}else F.username&&(Q=F.username.split(" ")[0]);const M=JSON.parse(localStorage.getItem("qp_player")||"{}");V=(e==null?void 0:e.level)||M.level||1,K=ie.getCoins(),q=(e==null?void 0:e.currentStreak)||M.currentStreak||0,Q!=="Champion"&&Q!==M.name&&(M.name=Q,localStorage.setItem("qp_player",JSON.stringify(M))),w(Q),j(V),y(K),v(q)})(),!r){t();return}sessionStorage.setItem("welcomeShown","true"),document.body.classList.add("hide-bottom-nav"),N(),C();const b=["🦉","🐧","🦝","🦜","🦕","🐙","🦊","🐸","🦁","🐨"];h(b[Math.floor(Math.random()*b.length)]);const k=setInterval(()=>{l(F=>!F)},2e3),_=["🎯 New challenges await!","🏆 Ready to be a champion?","🌟 Your brain adventure starts now!","🎨 Time for fun learning!","🎪 The quiz circus is open!","🚀 Blast off to knowledge!","🎭 Let's play and learn!","🌈 Rainbow of questions ahead!"];u(_[Math.floor(Math.random()*_.length)]);const R=setInterval(()=>{u(_[Math.floor(Math.random()*_.length)])},3e3);return()=>{document.body.classList.remove("hide-bottom-nav"),clearInterval(k),clearInterval(R)}},[r,t,e]);const P=()=>{try{const p=new Audio("/sounds/tap.mp3");p.volume=.5,p.play()}catch{console.log("Click sound not available")}navigator.vibrate&&navigator.vibrate(20),o(!0),document.body.classList.remove("hide-bottom-nav"),setTimeout(()=>{s(!1),t()},400)};if(!r)return null;const E=()=>{const p=new Date().getHours();return p<12?"Good morning":p<17?"Good afternoon":"Good evening"};return n.jsxs("div",{className:`fixed inset-0 z-50 flex items-center justify-center transition-all duration-500
      ${a?"opacity-0 scale-95":"opacity-100 scale-100"}`,children:[n.jsx("div",{className:"absolute inset-0",style:{background:"linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #fda085 75%, #f5a375 90%, #e08060 100%)"}}),n.jsxs("div",{className:"absolute inset-0 overflow-hidden",children:[[{top:"10%",left:"15%",size:"24px",delay:"0s"},{top:"20%",left:"75%",size:"20px",delay:"0.5s"},{top:"15%",left:"45%",size:"28px",delay:"1s"},{top:"30%",left:"85%",size:"22px",delay:"1.5s"},{top:"8%",left:"60%",size:"26px",delay:"2s"}].map((p,b)=>n.jsx("div",{className:"absolute animate-twinkle",style:{top:p.top,left:p.left,fontSize:p.size,animationDelay:p.delay},children:"⭐"},`star-${b}`)),n.jsxs("div",{className:"absolute top-10 left-0 w-full",children:[n.jsx("div",{className:"cloud cloud1",children:"☁️"}),n.jsx("div",{className:"cloud cloud2",children:"☁️"})]})]}),n.jsxs("div",{className:"relative z-10 text-center px-6 w-full max-w-sm mx-auto",children:[n.jsx("div",{className:`text-8xl mb-4 transition-transform duration-500 ${i?"scale-110 rotate-6":"scale-100 rotate-0"}`,children:m}),n.jsxs("div",{className:"relative rounded-3xl px-6 py-4 mb-6 shadow-xl overflow-hidden",children:[n.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100"}),n.jsx("div",{className:"absolute -top-3 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-br from-purple-100 to-pink-100 rotate-45"}),n.jsxs("div",{className:"relative",children:[n.jsxs("h1",{className:"text-3xl font-bold text-purple-800",children:["Hello, ",f,"! 👋"]}),n.jsx("p",{className:"text-sm text-purple-600 mt-1",children:E()})]})]}),n.jsxs("div",{className:"grid grid-cols-3 gap-3 mb-6",children:[n.jsxs("div",{className:"relative rounded-2xl p-3 transform hover:scale-105 transition-transform overflow-hidden",children:[n.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-yellow-200 via-yellow-100 to-orange-100"}),n.jsxs("div",{className:"relative",children:[n.jsx("div",{className:"text-3xl mb-1",children:"⭐"}),n.jsx("div",{className:"text-2xl font-bold text-orange-800",children:x}),n.jsx("div",{className:"text-xs text-orange-600",children:"Level"})]})]}),n.jsxs("div",{className:"relative rounded-2xl p-3 transform hover:scale-105 transition-transform overflow-hidden",children:[n.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-blue-200 via-cyan-100 to-teal-100"}),n.jsxs("div",{className:"relative",children:[n.jsx("div",{className:"text-3xl mb-1",children:"🪙"}),n.jsx("div",{className:"text-2xl font-bold text-teal-800",children:S}),n.jsx("div",{className:"text-xs text-teal-600",children:"Coins"})]})]}),n.jsxs("div",{className:"relative rounded-2xl p-3 transform hover:scale-105 transition-transform overflow-hidden",children:[n.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-orange-200 via-red-100 to-pink-100"}),n.jsxs("div",{className:"relative",children:[n.jsx("div",{className:"text-3xl mb-1",children:"🔥"}),n.jsx("div",{className:"text-2xl font-bold text-orange-800",children:g}),n.jsx("div",{className:"text-xs text-orange-600",children:"Streak"})]})]})]}),n.jsx("div",{className:"h-4"}),n.jsx("div",{className:"text-white/90 font-medium animate-fade-slide mb-6",children:c}),n.jsxs("button",{onClick:P,className:"group relative w-full",children:[n.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 rounded-full blur-lg opacity-75 group-hover:opacity-100 transition-opacity"}),n.jsxs("div",{className:`relative bg-gradient-to-r from-green-400 to-blue-500 text-white py-5 px-8 rounded-full font-bold text-xl shadow-2xl 
            transform transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center gap-3`,children:[n.jsx("span",{children:"Let's Learn!"}),n.jsx("span",{className:"text-2xl animate-bounce",children:"🚀"})]})]})]}),n.jsx("style",{jsx:!0,children:`
        @keyframes twinkle {
          0%, 100% { 
            opacity: 0.3; 
            transform: scale(1);
          }
          50% { 
            opacity: 1; 
            transform: scale(1.2);
          }
        }
        
        @keyframes float-right {
          from { transform: translateX(-100px); }
          to { transform: translateX(calc(100vw + 100px)); }
        }
        
        @keyframes fade-slide {
          0%, 100% { opacity: 0.8; transform: translateY(0); }
          50% { opacity: 1; transform: translateY(-3px); }
        }
        
        .animate-twinkle {
          color: rgba(255, 255, 255, 0.9);
          animation: twinkle 3s ease-in-out infinite;
        }
        
        .cloud {
          position: absolute;
          font-size: 60px;
          opacity: 0.3;
          animation: float-right 20s linear infinite;
        }
        
        .cloud1 {
          top: 10%;
          animation-duration: 25s;
        }
        
        .cloud2 {
          top: 5%;
          animation-duration: 30s;
          animation-delay: 10s;
        }
        
        .animate-fade-slide {
          animation: fade-slide 3s ease-in-out infinite;
        }
        
        .hide-bottom-nav .bottom-nav {
          display: none !important;
        }
      `})]})}function zd(){const[e,t]=d.useState(()=>{const B=sessionStorage.getItem("justSignedUp"),G=sessionStorage.getItem("justSignedIn");return B==="true"||G==="true"?(sessionStorage.removeItem("justSignedUp"),sessionStorage.removeItem("justSignedIn"),sessionStorage.setItem("welcomeShown","true"),!1):sessionStorage.getItem("welcomeShown")!=="true"}),r=je(),s=Sn(),{player:a,levelProgress:o,useEnergy:i,changeAvatar:l}=s,[,c]=d.useState({});et("/sounds/correct.mp3",{volume:.6}),et("/sounds/wrong.mp3",{volume:.6}),et("/sounds/coin.mp3",{volume:.75});const[u]=et("/sounds/levelup.mp3",{volume:.8}),m=d.useRef(a.level),h=d.useRef(null);d.useEffect(()=>{const B=()=>{};return window.addEventListener("focus",B),()=>window.removeEventListener("focus",B)},[]),d.useEffect(()=>{a.level>m.current&&(u==null||u(),m.current=a.level)},[a.level,u]),d.useEffect(()=>{const B=()=>{c({})};return window.addEventListener("storage",B),window.addEventListener("coinsUpdated",B),()=>{window.removeEventListener("storage",B),window.removeEventListener("coinsUpdated",B)}},[]);const[f,w]=d.useState(!1),[x,j]=d.useState(null),[S,y]=d.useState(!1),[g,v]=d.useState("medium"),[N,C]=d.useState(10),[P,E]=d.useState(45),[p,b]=d.useState(!1),[k,_]=d.useState(!1),[R,F]=d.useState(!1),[Q,V]=d.useState("general-knowledge"),[K,q]=d.useState("medium"),[M,I]=d.useState(10);d.useEffect(()=>{const B=sessionStorage.getItem("homeScrollPosition");B&&window.scrollTo(0,parseInt(B));const G=()=>{sessionStorage.setItem("homeScrollPosition",window.scrollY.toString())};return window.addEventListener("scroll",G),()=>window.removeEventListener("scroll",G)},[]);const D=B=>{if(B.slug==="more"){w(!0);return}j(B),y(!0)},L=()=>{console.log("Starting quiz with energy:",a.energy),console.log("Category:",x.slug),r(`/quiz/${x.slug}`,{state:{mode:"quiz",difficulty:g,count:N,timer:{type:"per_q",seconds:P},source:"adventure"}}),y(!1)},T=()=>{console.log("Starting practice, category:",Q),r(`/quiz/${Q}`,{state:{mode:"practice",difficulty:K,count:M,timer:{type:"off",seconds:0}}}),F(!1)},z=[{icon:"🎯",label:"Quests",color:"bg-gradient-to-br from-orange-500 to-pink-500",action:()=>{sessionStorage.setItem("questsFromHome","true"),r("/profile/quests")}},{icon:"🔥",label:"Streak",color:"bg-gradient-to-br from-red-500 to-orange-500",action:()=>r("/profile/streaks")},{icon:"🏆",label:"Achieve",color:"bg-gradient-to-br from-blue-500 to-purple-500",action:()=>r("/profile/achievements")},{icon:"🎁",label:"Rewards",color:"bg-gradient-to-br from-green-500 to-teal-500",action:()=>r("/profile/rewards")}];return n.jsxs(n.Fragment,{children:[e&&n.jsx(xg,{player:a,onContinue:()=>t(!1)}),n.jsxs("div",{className:"min-h-screen bg-base-bg text-base-text",children:[n.jsx("div",{className:"fixed inset-0 -z-10 pointer-events-none",style:{background:"linear-gradient(to bottom, #0B0F1A, #111827)"}}),n.jsxs("div",{className:"relative z-10 px-4 pt-10 pb-24",children:[n.jsx("style",{jsx:!0,children:`
          @keyframes float {
            0%, 100% { transform: translateY(0) rotate(0deg); }
            25% { transform: translateY(-5px) rotate(-2deg); }
            50% { transform: translateY(0) rotate(0deg); }
            75% { transform: translateY(-3px) rotate(2deg); }
          }
          
          @keyframes pulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.05); }
          }
          
          @keyframes shimmer {
            0% { background-position: -200% center; }
            100% { background-position: 200% center; }
          }
          
          @keyframes coinRotate {
            from { transform: rotateY(0deg); }
            to { transform: rotateY(360deg); }
          }
          
          @keyframes glow {
            0%, 100% { box-shadow: 0 0 20px rgba(251, 191, 36, 0.5); }
            50% { box-shadow: 0 0 40px rgba(251, 191, 36, 0.8); }
          }
          
          .flip-card {
            perspective: 1000px;
          }
          
          .flip-card-inner {
            transition: transform 0.6s;
            transform-style: preserve-3d;
          }
          
          .flip-card-inner.flipped {
            transform: rotateY(180deg);
          }
          
          .flip-card-front, .flip-card-back {
            backface-visibility: hidden;
          }
          
          .flip-card-back {
            transform: rotateY(180deg);
          }
          
          .coin-3d {
            animation: coinRotate 2s linear infinite;
            transform-style: preserve-3d;
          }
          
          .magic-gradient {
            background: linear-gradient(45deg, #FFD700, #FFA500, #FF6B6B, #FF1493, #9370DB, #4169E1, #00CED1, #FFD700);
            background-size: 400% 400%;
            animation: gradientShift 8s ease infinite;
          }
          
          @keyframes gradientShift {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
          }
        `}),n.jsxs("div",{className:"mb-8",children:[n.jsxs("div",{className:"flex justify-between items-start mb-4",children:[n.jsx("div",{className:"cursor-pointer hover:scale-105 transition-transform",onClick:()=>_(!0),children:n.jsx(sg,{player:a,size:"small",showLevel:!0,showName:!0})}),n.jsx("div",{className:"flex gap-2",children:n.jsxs("button",{ref:h,onClick:()=>b(!0),className:"px-3 py-1.5 rounded-xl bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/30 flex items-center gap-2 hover:from-yellow-500/20 hover:to-orange-500/20 transition",children:[n.jsx("span",{className:"text-lg",children:"🪙"}),n.jsx("span",{className:"font-bold",children:ie.getCoins()})]})})]}),n.jsx(ag,{current:o.current,required:o.required,level:a.level,animate:!0})]}),n.jsx(og,{}),n.jsx(ig,{actions:z}),n.jsx(dg,{coinPillRef:h}),n.jsx(lg,{categories:Im,onCategorySelect:D}),n.jsx(cg,{onClick:()=>F(!0),isPulsing:a.energy<10}),n.jsxs("div",{onClick:()=>r("/surprise"),className:"mt-6 relative overflow-hidden rounded-3xl bg-gradient-to-br from-purple-500/20 via-pink-500/20 to-yellow-500/20 backdrop-blur border border-white/10 p-12 mb-4 cursor-pointer hover:scale-[1.02] transition-all group",children:[n.jsxs("div",{className:"absolute inset-0 opacity-30",children:[n.jsx("div",{className:"absolute top-4 left-4 w-2 h-2 bg-yellow-400 rounded-full animate-pulse"}),n.jsx("div",{className:"absolute top-8 right-8 w-3 h-3 bg-pink-400 rounded-full animate-pulse",style:{animationDelay:"0.5s"}}),n.jsx("div",{className:"absolute bottom-6 left-12 w-2 h-2 bg-purple-400 rounded-full animate-pulse",style:{animationDelay:"1s"}}),n.jsx("div",{className:"absolute bottom-4 right-6 w-2 h-2 bg-blue-400 rounded-full animate-pulse",style:{animationDelay:"1.5s"}})]}),n.jsxs("div",{className:"relative flex items-center justify-between",children:[n.jsxs("div",{children:[n.jsx("h3",{className:"text-xl font-bold mb-1 bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400 bg-clip-text text-transparent",children:"✨ Surprise Zone"}),n.jsx("p",{className:"text-sm text-gray-400",children:"Mystery Box • Avatar Room • Fun Facts"})]}),n.jsx("div",{className:"text-4xl group-hover:rotate-12 transition-transform",children:"🎁"})]})]}),n.jsx(ug,{show:k,onClose:()=>_(!1),player:a,changeAvatar:l,GAME_CONSTANTS:vt}),n.jsx(hg,{show:S,onClose:()=>y(!1),selectedCategory:x,difficulty:g,setDifficulty:v,count:N,setCount:C,timer:P,setTimer:E,onStart:L}),n.jsx(pg,{show:R,onClose:()=>F(!1),allCategories:Dm,category:Q,setCategory:V,difficulty:K,setDifficulty:q,count:M,setCount:I,onStart:T}),n.jsx(mg,{show:f,onClose:()=>w(!1),categories:Lm,onCategorySelect:D}),n.jsx(fg,{show:p,onClose:()=>b(!1),coins:a.coins,onNavigateToPlay:()=>{b(!1),r("/play")}})]})]})]})}const va={OWNED_CHARACTERS:"owned_characters",SOUND:"play_sound_on"},ya={get:(e,t=null)=>{try{const r=localStorage.getItem(e);return r?JSON.parse(r):t}catch{return t}},set:(e,t)=>{try{localStorage.setItem(e,JSON.stringify(t))}catch{}}};function Lo(){const[e,t]=d.useState(()=>ie.getCoins()),[r,s]=d.useState(()=>ie.getXP()),[a,o]=d.useState(()=>ie.getLevel()),[i,l]=d.useState(()=>ya.get(va.OWNED_CHARACTERS,[])),[c,u]=d.useState(()=>ya.get(va.SOUND,!0));d.useEffect(()=>{const N=st.getCurrentUser();N!=null&&N.phone&&ie.initializeUserData(N.phone)},[]);const m=d.useCallback(N=>{const C=ie.addCoins(N,"Game reward");return t(C),C},[]),h=d.useCallback(N=>{const C=ie.addXP(N);s(C);const P=ie.getLevel();return P>a&&o(P),C},[a]),f=d.useCallback((N,C="Purchase")=>{if(ie.spendCoins(N,C)){const P=ie.getCoins();return t(P),!0}return!1},[]),w=d.useCallback(N=>{l(C=>{const P=[...new Set([...C,N])];return ya.set(va.OWNED_CHARACTERS,P),P})},[]),x=d.useCallback(()=>ie.checkAndUpdateLevel(),[]);d.useEffect(()=>{ya.set(va.SOUND,c)},[c]);const j=d.useCallback((N,C,P,E,p)=>{const b=st.getCurrentUser(),k=ie.recordQuizSession(b==null?void 0:b.phone,{score:N,totalQuestions:C,category:P,difficulty:E,mode:p});return t(k.newTotal),s(k.newXP),o(k.newLevel),k},[]),S=d.useCallback((N,C,P)=>{const E=st.getCurrentUser(),p=ie.recordPracticeSession(E==null?void 0:E.phone,{questionsCompleted:N,correctAnswers:C,category:P});return t(p.newTotal),s(p.newXP),p},[]),y=d.useCallback(()=>{const N=st.getCurrentUser();return N!=null&&N.phone?ie.getUserStats(N.phone):null},[]),g=d.useCallback(()=>{const N=st.getCurrentUser();return N!=null&&N.phone?ie.getQuestData(N.phone):null},[]),v=d.useCallback(()=>{const N=st.getCurrentUser();return ie.getTodaySummary(N==null?void 0:N.phone)},[]);return{coins:e,xp:r,level:a,ownedCharacters:i,soundOn:c,addCoins:m,addXp:h,spendCoins:f,unlockCharacter:w,setSoundOn:u,checkLevelUp:x,recordQuizComplete:j,recordPracticeComplete:S,getUserStats:y,getQuestData:g,getTodaySummary:v,nextLevelThreshold:100*a*(a-1),xpProgress:r/Math.max(1,100*a*(a-1))}}const gg=[{name:"General Knowledge",questions:50,icon:"🧠",color:"#7C3AED"},{name:"Artificial Intelligence",questions:28,icon:"🤖",color:"#10B981"},{name:"Fun facts",questions:30,icon:"🎉",color:"#EF4444"},{name:"Science",questions:45,icon:"🧪",color:"#F59E0B"},{name:"History",questions:42,icon:"🏺",color:"#2563EB"},{name:"Geography",questions:38,icon:"🗺️",color:"#FACC15"}],Jt=gg.slice(0,6),ir=360/Jt.length,vg={"general-knowledge":"TINA","artificial-intelligence":"ALBERT","fun-facts":"BONZO",science:"POP",history:"TITO",geography:"HECTOR"},En={FULL_TURNS:6,DURATION:2800,OVERSHOOT:12,SETTLE_DURATION:350},On=(e,t=.7)=>{try{const r=new Audio(e);return r.volume=t,r.play().catch(()=>{})}catch{}},Do=e=>{navigator.vibrate&&navigator.vibrate(e)},Fn=e=>e.toLowerCase().replace(/[^\w\s-]/g,"").replace(/\s+/g,"-"),Od=e=>(e%360+360)%360;function yg({run:e,coins:t,xp:r,level:s,ownedCharacters:a,onSpin:o,onBack:i,spinning:l,angle:c,transition:u,result:m,showCallout:h,glowColor:f,soundOn:w,setSoundOn:x,showSparkle:j,pulseIdx:S,nextProgressIdx:y,pendingProgressIdx:g,coinBurstTick:v,lastAnswerWasCorrect:N,coinPillRef:C,wheelRef:P}){const E=100*s*(s-1),[p,b]=d.useState(!1),[k,_]=d.useState(ie.getCoins());return d.useEffect(()=>{const R=()=>_(ie.getCoins());window.addEventListener("coinsUpdated",R),window.addEventListener("storage",R);const F=setInterval(R,1e3);return()=>{window.removeEventListener("coinsUpdated",R),window.removeEventListener("storage",R),clearInterval(F)}},[]),d.useEffect(()=>(document.body.classList.add("hide-bottom-nav"),()=>{document.body.classList.remove("hide-bottom-nav")}),[]),d.useEffect(()=>{if(g==null)return;b(!1);const R=setTimeout(()=>b(!0),30);return()=>clearTimeout(R)},[g]),n.jsxs("div",{className:"fixed inset-0 bg-gradient-to-b from-gray-900 via-purple-900/20 to-gray-900 text-white overflow-hidden",children:[n.jsx("style",{children:`
        @keyframes float {
          0%, 100% { 
            transform: translateY(0) scale(1);
          }
          50% { 
            transform: translateY(-10px) scale(1.02);
          }
        }
        
        @keyframes pulse-glow {
          0%, 100% { 
            opacity: 0.5;
          }
          50% { 
            opacity: 1;
          }
        }
        
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        
        @keyframes progress-fill {
          0% { 
            width: 0%;
            background-position: -200% center;
          }
          50% {
            background-position: 0% center;
          }
          100% { 
            width: 100%;
            background-position: 200% center;
          }
        }
        
        @keyframes star-bounce {
          0%, 100% { transform: scale(1) rotate(0deg); }
          50% { transform: scale(1.2) rotate(180deg); }
        }
      `}),n.jsxs("div",{className:"h-full flex flex-col mx-auto max-w-md px-5 pt-[calc(env(safe-area-inset-top)+2rem)]",children:[n.jsxs("header",{className:"flex items-center justify-between mb-4 mt-6",children:[n.jsx("button",{onClick:i,className:"h-12 w-12 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 grid place-items-center hover:bg-white/20 transition-all",children:n.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:n.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2.5,d:"M15 19l-7-7 7-7"})})}),n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsx("div",{className:"px-4 py-2 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20",children:n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsxs("span",{className:"text-xs text-white/70",children:["Lvl ",s]}),n.jsx("div",{className:"w-16 h-1.5 bg-white/20 rounded-full overflow-hidden",children:n.jsx("div",{className:"h-full bg-gradient-to-r from-blue-400 to-purple-400 rounded-full transition-all duration-500",style:{width:`${Math.min(r/E,1)*100}%`}})})]})}),n.jsxs("button",{ref:C,className:"px-4 py-2 rounded-2xl bg-gradient-to-r from-yellow-500/20 to-orange-500/20 backdrop-blur-xl border border-yellow-500/30 flex items-center gap-2 hover:scale-105 transition-transform",children:[n.jsx("span",{className:"text-lg",children:"🪙"}),n.jsx("span",{className:"font-bold text-yellow-300",children:k})]})]}),n.jsx("button",{onClick:()=>x(!w),className:"h-12 w-12 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 grid place-items-center hover:bg-white/20 transition-all",children:n.jsx("span",{className:"text-xl",children:w?"🔊":"🔇"})})]}),a.length>0&&n.jsx("div",{className:"flex justify-center mb-4",children:n.jsxs("div",{className:"inline-flex gap-3 px-5 py-3 bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10",children:[n.jsx("span",{className:"text-xs text-white/50 self-center",children:"Unlocked:"}),a.map(R=>{const F=Jt.find(Q=>Fn(Q.name)===R);return n.jsx("div",{className:"relative group",children:n.jsx("div",{className:"w-10 h-10 rounded-xl bg-gradient-to-br from-white/20 to-white/10 flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform",children:n.jsx("span",{className:"text-lg",children:F==null?void 0:F.icon})})},R)})]})}),n.jsx("div",{className:"flex justify-center gap-3 mb-6",children:[0,1,2].map(R=>{const F=!!e.progress[R],Q=R===g;return n.jsxs("div",{className:"relative flex items-center",children:[R<2&&n.jsx("div",{className:"absolute left-full w-3 h-0.5 bg-white/20 top-1/2 z-0"}),n.jsxs("div",{className:"relative z-10",children:[n.jsx("div",{className:`
                    w-12 h-12 rounded-full flex items-center justify-center
                    transition-all duration-700 transform
                    ${F?"bg-gradient-to-br from-green-400 to-emerald-500 scale-110":"bg-white/10 backdrop-blur border border-white/20"}
                    ${Q?"animate-pulse scale-125":""}
                  `,children:F?n.jsx("span",{className:"text-xl",style:{animation:Q?"star-bounce 1s ease-in-out":"none"},children:"⭐"}):n.jsx("span",{className:"text-white/40 font-bold text-sm",children:R+1})}),Q&&n.jsx("div",{className:"absolute inset-0 rounded-full overflow-hidden",children:n.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent",style:{animation:"shimmer 1s ease-out"}})}),j===R&&n.jsxs(n.Fragment,{children:[n.jsx("div",{className:"absolute -top-1 -right-1 text-yellow-400 animate-ping",children:"✨"}),n.jsx("div",{className:"absolute -bottom-1 -left-1 text-yellow-400 animate-ping",style:{animationDelay:"0.2s"},children:"✨"})]})]})]},R)})}),n.jsx("section",{className:"flex-1 flex items-center justify-center pb-12",children:n.jsxs("div",{className:"relative w-full max-w-sm",children:[n.jsx("div",{className:"absolute inset-0",style:{animation:"pulse-glow 4s ease-in-out infinite"},children:n.jsx("div",{className:"absolute inset-6 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-full blur-3xl"})}),n.jsxs("div",{ref:P,className:"relative w-full aspect-square",style:{animation:l?"none":"float 6s ease-in-out infinite"},children:[n.jsx("div",{className:"absolute -bottom-6 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-black/20 rounded-full blur-xl"}),f&&n.jsx("div",{className:"pointer-events-none absolute -inset-4 rounded-full animate-pulse",style:{boxShadow:`0 0 60px 20px ${f}40`,background:`radial-gradient(circle, ${f}20, transparent 70%)`}}),n.jsx("div",{className:"absolute inset-0 rounded-full border-4 border-white/30 shadow-2xl overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900",style:{transform:`rotate(${c}deg)`,transition:u,boxShadow:"inset 0 0 40px rgba(0,0,0,0.5), 0 20px 40px rgba(0,0,0,0.3)"},children:n.jsx("svg",{width:"100%",height:"100%",viewBox:"0 0 100 100",className:"block",children:Jt.map((R,F)=>{const Q=F*ir,V=Q+ir,K=ir>180?1:0,q=Math.PI*Q/180,M=Math.PI*V/180,I=50+48*Math.cos(q),D=50-48*Math.sin(q),L=50+48*Math.cos(M),T=50-48*Math.sin(M),z=Q+ir/2,B=30,G=50+B*Math.cos(z*Math.PI/180),$=50-B*Math.sin(z*Math.PI/180);return n.jsxs("g",{children:[n.jsx("defs",{children:n.jsxs("linearGradient",{id:`grad${F}`,x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[n.jsx("stop",{offset:"0%",stopColor:R.color,stopOpacity:"0.9"}),n.jsx("stop",{offset:"100%",stopColor:R.color,stopOpacity:"0.7"})]})}),n.jsx("path",{d:`M50,50 L${I},${D} A48,48 0 ${K} 0 ${L},${T} Z`,fill:`url(#grad${F})`,stroke:"rgba(255,255,255,0.2)",strokeWidth:"0.5"}),n.jsx("text",{x:G,y:$,fill:"white",fontSize:"20",dominantBaseline:"middle",textAnchor:"middle",style:{filter:"drop-shadow(0 2px 4px rgba(0,0,0,0.3))"},children:R.icon})]},F)})})}),n.jsxs("button",{onClick:o,disabled:l,className:"absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group",children:[n.jsx("div",{className:`
                  w-20 h-20 rounded-full 
                  bg-gradient-to-br from-white to-gray-100
                  shadow-2xl flex items-center justify-center
                  transition-all duration-300
                  ${l?"scale-90 opacity-80":"hover:scale-110 active:scale-95 hover:shadow-3xl"}
                `,children:n.jsx("span",{className:"font-black text-gray-800 text-sm",children:"SPIN"})}),!l&&n.jsx("div",{className:"absolute inset-0 rounded-full bg-white/30 animate-ping"})]}),h&&m&&n.jsx("div",{className:"absolute left-1/2 -translate-x-1/2 -top-20 z-30",children:n.jsx("div",{className:"px-5 py-2 rounded-2xl bg-white/95 backdrop-blur-xl shadow-2xl animate-bounce",children:n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx("span",{className:"text-2xl",children:m.cat.icon}),n.jsx("span",{className:"font-bold text-gray-800",children:m.cat.name})]})})})]})]})}),n.jsx("div",{className:"text-center pb-12",children:n.jsx("p",{className:"text-white/30 text-xs",children:"Tap SPIN to begin your adventure"})})]})]})}var Ba={linear:function(e,t,r,s){var a=r-t;return a*e/s+t},easeInQuad:function(e,t,r,s){var a=r-t;return a*(e/=s)*e+t},easeOutQuad:function(e,t,r,s){var a=r-t;return-a*(e/=s)*(e-2)+t},easeInOutQuad:function(e,t,r,s){var a=r-t;return(e/=s/2)<1?a/2*e*e+t:-a/2*(--e*(e-2)-1)+t},easeInCubic:function(e,t,r,s){var a=r-t;return a*(e/=s)*e*e+t},easeOutCubic:function(e,t,r,s){var a=r-t;return a*((e=e/s-1)*e*e+1)+t},easeInOutCubic:function(e,t,r,s){var a=r-t;return(e/=s/2)<1?a/2*e*e*e+t:a/2*((e-=2)*e*e+2)+t},easeInQuart:function(e,t,r,s){var a=r-t;return a*(e/=s)*e*e*e+t},easeOutQuart:function(e,t,r,s){var a=r-t;return-a*((e=e/s-1)*e*e*e-1)+t},easeInOutQuart:function(e,t,r,s){var a=r-t;return(e/=s/2)<1?a/2*e*e*e*e+t:-a/2*((e-=2)*e*e*e-2)+t},easeInQuint:function(e,t,r,s){var a=r-t;return a*(e/=s)*e*e*e*e+t},easeOutQuint:function(e,t,r,s){var a=r-t;return a*((e=e/s-1)*e*e*e*e+1)+t},easeInOutQuint:function(e,t,r,s){var a=r-t;return(e/=s/2)<1?a/2*e*e*e*e*e+t:a/2*((e-=2)*e*e*e*e+2)+t},easeInSine:function(e,t,r,s){var a=r-t;return-a*Math.cos(e/s*(Math.PI/2))+a+t},easeOutSine:function(e,t,r,s){var a=r-t;return a*Math.sin(e/s*(Math.PI/2))+t},easeInOutSine:function(e,t,r,s){var a=r-t;return-a/2*(Math.cos(Math.PI*e/s)-1)+t},easeInExpo:function(e,t,r,s){var a=r-t;return e==0?t:a*Math.pow(2,10*(e/s-1))+t},easeOutExpo:function(e,t,r,s){var a=r-t;return e==s?t+a:a*(-Math.pow(2,-10*e/s)+1)+t},easeInOutExpo:function(e,t,r,s){var a=r-t;return e===0?t:e===s?t+a:(e/=s/2)<1?a/2*Math.pow(2,10*(e-1))+t:a/2*(-Math.pow(2,-10*--e)+2)+t},easeInCirc:function(e,t,r,s){var a=r-t;return-a*(Math.sqrt(1-(e/=s)*e)-1)+t},easeOutCirc:function(e,t,r,s){var a=r-t;return a*Math.sqrt(1-(e=e/s-1)*e)+t},easeInOutCirc:function(e,t,r,s){var a=r-t;return(e/=s/2)<1?-a/2*(Math.sqrt(1-e*e)-1)+t:a/2*(Math.sqrt(1-(e-=2)*e)+1)+t},easeInElastic:function(e,t,r,s){var a=r-t,o,i,l;return l=1.70158,i=0,o=a,e===0?t:(e/=s)===1?t+a:(i||(i=s*.3),o<Math.abs(a)?(o=a,l=i/4):l=i/(2*Math.PI)*Math.asin(a/o),-(o*Math.pow(2,10*(e-=1))*Math.sin((e*s-l)*(2*Math.PI)/i))+t)},easeOutElastic:function(e,t,r,s){var a=r-t,o,i,l;return l=1.70158,i=0,o=a,e===0?t:(e/=s)===1?t+a:(i||(i=s*.3),o<Math.abs(a)?(o=a,l=i/4):l=i/(2*Math.PI)*Math.asin(a/o),o*Math.pow(2,-10*e)*Math.sin((e*s-l)*(2*Math.PI)/i)+a+t)},easeInOutElastic:function(e,t,r,s){var a=r-t,o,i,l;return l=1.70158,i=0,o=a,e===0?t:(e/=s/2)===2?t+a:(i||(i=s*(.3*1.5)),o<Math.abs(a)?(o=a,l=i/4):l=i/(2*Math.PI)*Math.asin(a/o),e<1?-.5*(o*Math.pow(2,10*(e-=1))*Math.sin((e*s-l)*(2*Math.PI)/i))+t:o*Math.pow(2,-10*(e-=1))*Math.sin((e*s-l)*(2*Math.PI)/i)*.5+a+t)},easeInBack:function(e,t,r,s,a){var o=r-t;return a===void 0&&(a=1.70158),o*(e/=s)*e*((a+1)*e-a)+t},easeOutBack:function(e,t,r,s,a){var o=r-t;return a===void 0&&(a=1.70158),o*((e=e/s-1)*e*((a+1)*e+a)+1)+t},easeInOutBack:function(e,t,r,s,a){var o=r-t;return a===void 0&&(a=1.70158),(e/=s/2)<1?o/2*(e*e*(((a*=1.525)+1)*e-a))+t:o/2*((e-=2)*e*(((a*=1.525)+1)*e+a)+2)+t},easeInBounce:function(e,t,r,s){var a=r-t,o;return o=Ba.easeOutBounce(s-e,0,a,s),a-o+t},easeOutBounce:function(e,t,r,s){var a=r-t;return(e/=s)<1/2.75?a*(7.5625*e*e)+t:e<2/2.75?a*(7.5625*(e-=1.5/2.75)*e+.75)+t:e<2.5/2.75?a*(7.5625*(e-=2.25/2.75)*e+.9375)+t:a*(7.5625*(e-=2.625/2.75)*e+.984375)+t},easeInOutBounce:function(e,t,r,s){var a=r-t,o;return e<s/2?(o=Ba.easeInBounce(e*2,0,a,s),o*.5+t):(o=Ba.easeOutBounce(e*2-s,0,a,s),o*.5+a*.5+t)}},bg=Ba;function wg(e){return e*Math.PI/180}function Lt(e,t){return e+Math.random()*(t-e)}function jg(e,t){return Math.floor(e+Math.random()*(t-e+1))}var Es;(function(e){e[e.Circle=0]="Circle",e[e.Square=1]="Square",e[e.Strip=2]="Strip"})(Es||(Es={}));var In;(function(e){e[e.Positive=1]="Positive",e[e.Negative=-1]="Negative"})(In||(In={}));const Ng=1e3/60;class kg{constructor(t,r,s,a){this.getOptions=r;const{colors:o,initialVelocityX:i,initialVelocityY:l}=this.getOptions();this.context=t,this.x=s,this.y=a,this.w=Lt(5,20),this.h=Lt(5,20),this.radius=Lt(5,10),this.vx=typeof i=="number"?Lt(-i,i):Lt(i.min,i.max),this.vy=typeof l=="number"?Lt(-l,0):Lt(l.min,l.max),this.shape=jg(0,2),this.angle=wg(Lt(0,360)),this.angularSpin=Lt(-.2,.2),this.color=o[Math.floor(Math.random()*o.length)],this.rotateY=Lt(0,1),this.rotationDirection=Lt(0,1)?In.Positive:In.Negative}update(t){const{gravity:r,wind:s,friction:a,opacity:o,drawShape:i}=this.getOptions(),l=t/Ng;this.x+=this.vx*l,this.y+=this.vy*l,this.vy+=r*l,this.vx+=s*l,this.vx*=a**l,this.vy*=a**l,this.rotateY>=1&&this.rotationDirection===In.Positive?this.rotationDirection=In.Negative:this.rotateY<=-1&&this.rotationDirection===In.Negative&&(this.rotationDirection=In.Positive);const c=.1*this.rotationDirection*l;if(this.rotateY+=c,this.angle+=this.angularSpin,this.context.save(),this.context.translate(this.x,this.y),this.context.rotate(this.angle),this.context.scale(1,this.rotateY),this.context.rotate(this.angle),this.context.beginPath(),this.context.fillStyle=this.color,this.context.strokeStyle=this.color,this.context.globalAlpha=o,this.context.lineCap="round",this.context.lineWidth=2,i&&typeof i=="function")i.call(this,this.context);else switch(this.shape){case Es.Circle:{this.context.beginPath(),this.context.arc(0,0,this.radius,0,2*Math.PI),this.context.fill();break}case Es.Square:{this.context.fillRect(-this.w/2,-this.h/2,this.w,this.h);break}case Es.Strip:{this.context.fillRect(-this.w/6,-this.h/2,this.w/3,this.h);break}}this.context.closePath(),this.context.restore()}}class Sg{constructor(t,r){this.x=0,this.y=0,this.w=0,this.h=0,this.lastNumberOfPieces=0,this.tweenProgress=0,this.tweenFrom=0,this.particles=[],this.particlesGenerated=0,this.removeParticleAt=a=>{this.particles.splice(a,1)},this.getParticle=()=>{const a=Lt(this.x,this.w+this.x),o=Lt(this.y,this.h+this.y);return new kg(this.context,this.getOptions,a,o)},this.animate=a=>{const{canvas:o,context:i,particlesGenerated:l,lastNumberOfPieces:c}=this,{run:u,recycle:m,numberOfPieces:h,debug:f,tweenFunction:w,tweenDuration:x}=this.getOptions();if(!u)return!1;const j=this.particles.length,S=m?j:l;if(S<h){c!==h&&(this.tweenProgress=0,this.tweenFrom=S,this.lastNumberOfPieces=h),this.tweenProgress=Math.min(x,Math.max(0,this.tweenProgress+a));const y=w(this.tweenProgress,this.tweenFrom,h,x),g=Math.round(y-S);for(let v=0;v<g;v++)this.particles.push(this.getParticle());this.particlesGenerated+=g}f&&(i.font="12px sans-serif",i.fillStyle="#333",i.textAlign="right",i.fillText(`Particles: ${j}`,o.width-10,o.height-20));for(let y=this.particles.length-1;y>=0;y--){const g=this.particles[y];g.update(a),(g.y>o.height||g.y<-100||g.x>o.width+100||g.x<-100)&&(m&&S<=h?this.particles[y]=this.getParticle():this.removeParticleAt(y))}return j>0||S<h},this.canvas=t;const s=this.canvas.getContext("2d");if(!s)throw new Error("Could not get canvas context");this.context=s,this.getOptions=r}}const gc={width:typeof window<"u"?window.innerWidth:300,height:typeof window<"u"?window.innerHeight:200,numberOfPieces:200,friction:.99,wind:0,gravity:.1,initialVelocityX:4,initialVelocityY:10,colors:["#f44336","#e91e63","#9c27b0","#673ab7","#3f51b5","#2196f3","#03a9f4","#00bcd4","#009688","#4CAF50","#8BC34A","#CDDC39","#FFEB3B","#FFC107","#FF9800","#FF5722","#795548"],opacity:1,debug:!1,tweenFunction:bg.easeInOutQuad,tweenDuration:5e3,recycle:!0,run:!0};class Cg{constructor(t,r){this.lastFrameTime=0,this.setOptionsWithDefaults=a=>{const o={confettiSource:{x:0,y:0,w:this.canvas.width,h:0}};this._options={...o,...gc,...a},Object.assign(this,a.confettiSource)},this.update=(a=0)=>{const{options:{run:o,onConfettiComplete:i,frameRate:l},canvas:c,context:u}=this,m=Math.min(a-this.lastFrameTime,50);if(l&&m<1e3/l){this.rafId=requestAnimationFrame(this.update);return}this.lastFrameTime=a-(l?m%l:0),o&&(u.fillStyle="white",u.clearRect(0,0,c.width,c.height)),this.generator.animate(m)?this.rafId=requestAnimationFrame(this.update):(i&&typeof i=="function"&&this.generator.particlesGenerated>0&&i.call(this,this),this._options.run=!1)},this.reset=()=>{this.generator&&this.generator.particlesGenerated>0&&(this.generator.particlesGenerated=0,this.generator.particles=[],this.generator.lastNumberOfPieces=0)},this.stop=()=>{this.options={run:!1},this.rafId&&(cancelAnimationFrame(this.rafId),this.rafId=void 0)},this.canvas=t;const s=this.canvas.getContext("2d");if(!s)throw new Error("Could not get canvas context");this.context=s,this.generator=new Sg(this.canvas,()=>this.options),this.options=r,this.update()}get options(){return this._options}set options(t){var a,o;const r=(a=this._options)==null?void 0:a.run,s=(o=this._options)==null?void 0:o.recycle;this.setOptionsWithDefaults(t),this.generator&&(Object.assign(this.generator,this.options.confettiSource),typeof t.recycle=="boolean"&&t.recycle&&s===!1&&(this.generator.lastNumberOfPieces=this.generator.particles.length)),typeof t.run=="boolean"&&t.run&&r===!1&&this.update()}}const Eg=wt.createRef();class vc extends wt.Component{constructor(t){super(t),this.canvas=wt.createRef(),this.canvas=t.canvasRef||Eg}componentDidMount(){if(this.canvas.current){const t=ui(this.props)[0];this.confetti=new Cg(this.canvas.current,t)}}componentDidUpdate(){const t=ui(this.props)[0];this.confetti&&(this.confetti.options=t)}componentWillUnmount(){this.confetti&&this.confetti.stop(),this.confetti=void 0}render(){const[t,r]=ui(this.props),s={zIndex:2,position:"absolute",pointerEvents:"none",top:0,left:0,bottom:0,right:0,...r.style};return n.jsx("canvas",{width:t.width,height:t.height,ref:this.canvas,...r,style:s})}}vc.defaultProps={...gc};vc.displayName="ReactConfetti";function ui(e){const t={},r={},s={},a=[...Object.keys(gc),"confettiSource","drawShape","onConfettiComplete","frameRate"],o=["canvasRef"];for(const i in e){const l=e[i];a.includes(i)?t[i]=l:o.includes(i)?o[i]=l:s[i]=l}return[t,s,r]}const Mm=wt.forwardRef((e,t)=>n.jsx(vc,{canvasRef:t,...e}));function Fd({question:e,category:t,onAnswer:r,run:s,timeLeft:a,usedLifelines:o,onUseLifeline:i,eliminatedOptions:l,audienceData:c,onBack:u,timeUp:m,onTimeUpBackToWheel:h,soundOn:f}){const[w,x]=d.useState(null),[j,S]=d.useState(!1),[y,g]=d.useState(!1),v=d.useRef(null),N=d.useRef(null),[C,P]=d.useState(null);d.useEffect(()=>(document.body.classList.add("hide-bottom-nav"),()=>{document.body.classList.remove("hide-bottom-nav")}),[]),d.useEffect(()=>{if(!j||!v.current)return;const b=v.current.getBoundingClientRect();P({x:b.left,y:b.top-300,w:b.width,h:8})},[j]);const E=b=>{if(j)return;x(b),S(!0);const k=b===e.correctIndex;Do(k?[50,30,50]:[200]),f&&On(k?"/sounds/correct.mp3":"/sounds/wrong.mp3",.7),setTimeout(()=>{r(k,null)},1500)},p=w===e.correctIndex;return n.jsx("div",{className:"fixed inset-0 bg-gradient-to-br from-gray-900 to-black text-white overflow-hidden",children:n.jsxs("div",{ref:N,className:"relative h-full overflow-y-auto px-5 pt-16 pb-[calc(env(safe-area-inset-bottom)+5.25rem)]",children:[n.jsx("div",{className:"mb-4",children:n.jsx("button",{onClick:()=>g(!0),className:"h-10 w-10 rounded-full border border-base-border grid place-items-center bg-white/5 hover:bg-white/10 transition",children:"←"})}),n.jsxs("div",{className:"text-center mb-6",children:[n.jsx("div",{className:`text-4xl font-black mb-2 ${a<=10?"text-red-400 animate-pulse":"text-white"}`,children:a}),n.jsx("div",{className:"w-full bg-white/20 rounded-full h-2",children:n.jsx("div",{className:`h-full rounded-full transition-all duration-1000 ${a<=10?"bg-red-400":"bg-blue-400"}`,style:{width:`${a/30*100}%`}})})]}),n.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[n.jsx("div",{className:"w-12 h-12 rounded-full flex items-center justify-center text-2xl",style:{backgroundColor:t.color},children:t.icon}),n.jsxs("div",{children:[n.jsx("div",{className:"text-lg font-bold",children:t.name}),n.jsxs("div",{className:"text-sm text-gray-400",children:["Question ",s.qIndex+1,"/3"]})]})]}),n.jsx("h2",{ref:v,className:"text-xl font-semibold mb-6 leading-relaxed",children:e.prompt}),n.jsx("div",{className:"space-y-3 mb-6",children:e.options.map((b,k)=>{const _=l.includes(k),R=w===k,F=k===e.correctIndex;let Q="bg-white/10 border-white/20",V="opacity-100";return _?V="opacity-30":j&&R?Q=F?"bg-green-500/30 border-green-400":"bg-red-500/30 border-red-400":j&&F?Q="bg-green-500/30 border-green-400":R&&(Q="bg-white/20 border-white/40"),n.jsx("button",{onClick:()=>E(k),disabled:j||_,className:`w-full p-4 rounded-xl border-2 text-left transition-all duration-300 ${Q} ${V} ${!j&&!_?"hover:bg-white/15 active:scale-98":""}`,children:n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsx("div",{className:"w-8 h-8 rounded-full bg-white/20 flex items-center justify-center font-bold text-sm",children:String.fromCharCode(65+k)}),n.jsx("span",{className:"font-medium flex-1",children:b}),c&&n.jsxs("span",{className:"text-xs text-base-muted",children:[Math.round(c[k]),"%"]})]})},k)})}),!j&&n.jsxs("div",{className:"flex gap-4 mb-8",children:[n.jsx("button",{onClick:()=>i("fifty"),disabled:o.fifty,className:`flex-1 p-4 rounded-2xl border-2 font-bold transition-all ${o.fifty?"bg-gray-700 border-gray-600 text-gray-400":"bg-purple-600 border-purple-400 text-white hover:bg-purple-500 active:scale-95"}`,children:"50:50"}),n.jsx("button",{onClick:()=>i("audience"),disabled:o.audience,className:`flex-1 p-4 rounded-2xl border-2 font-bold transition-all ${o.audience?"bg-gray-700 border-gray-600 text-gray-400":"bg-blue-600 border-blue-400 text-white hover:bg-blue-500 active:scale-95"}`,children:"👥 Ask"})]}),j&&n.jsxs("div",{className:"relative text-center",children:[p&&n.jsx("div",{className:"absolute inset-0 pointer-events-none",children:n.jsx(Mm,{recycle:!1,numberOfPieces:120,gravity:.9,tweenDuration:1800,confettiSource:C||{x:0,y:0,w:typeof window<"u"?window.innerWidth:320,h:1}})}),n.jsx("button",{onClick:()=>r(p,null,!0),className:"relative z-10 bg-white text-black font-black py-4 px-8 rounded-2xl text-lg hover:bg-gray-100 transition-all active:scale-95",children:"Continue"})]}),m&&n.jsx("div",{className:"fixed inset-0 z-50 bg-black/60 flex items-center justify-center px-6",children:n.jsxs("div",{className:"w-full max-w-sm rounded-2xl bg-base-card border border-base-border p-5 text-center",children:[n.jsx("div",{className:"text-lg font-bold mb-2",children:"Time's up"}),n.jsx("p",{className:"text-base-muted mb-5",children:"You ran out of time."}),n.jsx("button",{onClick:h,className:"mx-auto w-48 py-3 rounded-xl bg-brand-blue text-white font-semibold hover:bg-brand-blue/90 transition",children:"Back to Wheel"})]})}),y&&n.jsx("div",{className:"fixed inset-0 z-50 bg-black/60 flex items-center justify-center px-6",children:n.jsxs("div",{className:"w-full max-w-sm rounded-2xl bg-base-card border border-base-border p-5 text-center",children:[n.jsx("div",{className:"text-lg font-bold mb-2",children:"Want to quit?"}),n.jsx("p",{className:"text-base-muted mb-5",children:"You'll lose this question's progress."}),n.jsxs("div",{className:"flex gap-3",children:[n.jsx("button",{onClick:()=>g(!1),className:"flex-1 py-3 rounded-xl border border-base-border bg-white/5 hover:bg-white/10 transition",children:"No"}),n.jsx("button",{onClick:u,className:"flex-1 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-500 transition",children:"Yes"})]})]})})]})})}function $d({category:e,onComplete:t,isBonus:r=!1,soundOn:s=!0}){const[a,o]=d.useState(!1);return d.useEffect(()=>{document.body.classList.add("hide-bottom-nav"),o(!0),s&&On("/sounds/flush.mp3",.8),Do([50]);const i=setTimeout(t,2e3);return()=>{clearTimeout(i),document.body.classList.remove("hide-bottom-nav")}},[t,s]),r?n.jsxs("div",{className:"min-h-screen bg-gradient-to-b from-gray-900 via-purple-900/20 to-gray-900 flex flex-col items-center justify-center text-white relative overflow-hidden",children:[n.jsx("div",{className:"absolute inset-0",children:[...Array(20)].map((i,l)=>n.jsx("div",{className:"absolute w-2 h-2 bg-white/10 rounded-full animate-pulse",style:{left:`${Math.random()*100}%`,top:`${Math.random()*100}%`,animationDelay:`${Math.random()*3}s`,animationDuration:`${3+Math.random()*2}s`}},l))}),n.jsxs("div",{className:`relative z-10 text-center transform transition-all duration-700 ${a?"scale-100 opacity-100":"scale-50 opacity-0"}`,children:[n.jsx("h2",{className:"text-4xl font-black mb-8 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent",children:"Bonus Round!"}),n.jsxs("div",{className:"relative",children:[n.jsx("div",{className:"w-32 h-32 bg-gradient-to-br from-yellow-400/30 to-orange-400/30 rounded-full relative backdrop-blur-xl border-2 border-yellow-400/50",children:n.jsx("span",{className:"absolute top-1/2 left-1/2 text-6xl animate-pulse",style:{transform:"translate(-46%, -50%)"},children:"⭐"})}),n.jsx("div",{className:"absolute inset-0 rounded-full bg-yellow-400/20 animate-ping"})]}),n.jsx("p",{className:"mt-6 text-lg text-white/80",children:"Get ready for a special challenge!"})]})]}):n.jsxs("div",{className:"min-h-screen bg-gradient-to-b from-gray-900 via-purple-900/20 to-gray-900 text-white flex items-center justify-center relative overflow-hidden",children:[n.jsx("style",{children:`
        @keyframes float-up {
          0% { transform: translateY(100vh) rotate(0deg); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(-100vh) rotate(360deg); opacity: 0; }
        }
        
        @keyframes category-bounce {
          0% { transform: scale(0) rotate(-180deg); }
          50% { transform: scale(1.1) rotate(90deg); }
          70% { transform: scale(0.95) rotate(-20deg); }
          100% { transform: scale(1) rotate(0deg); }
        }
      `}),n.jsx("div",{className:"absolute inset-0 overflow-hidden",children:[...Array(8)].map((i,l)=>n.jsx("div",{className:"absolute w-4 h-4 rounded-full",style:{backgroundColor:`${e.color}40`,left:`${10+l*12}%`,animation:`float-up ${8+l*2}s linear infinite`,animationDelay:`${l*.5}s`}},l))}),n.jsxs("div",{className:"relative",style:{animation:a?"category-bounce 0.8s ease-out":"none"},children:[n.jsx("div",{className:"absolute -inset-20 rounded-full blur-3xl",style:{backgroundColor:`${e.color}20`}}),n.jsxs("div",{className:"relative w-96 h-96 rounded-full flex items-center justify-center shadow-2xl",style:{background:`linear-gradient(135deg, ${e.color}dd, ${e.color}99)`,boxShadow:`0 20px 60px ${e.color}40, inset 0 0 60px rgba(255,255,255,0.1)`},children:[n.jsx("div",{className:"absolute inset-4 rounded-full border-2 border-white/10"}),n.jsx("div",{className:"absolute inset-8 rounded-full border border-white/5"}),n.jsxs("div",{className:"relative z-10 text-center",children:[n.jsx("div",{className:"text-3xl font-black mb-4 text-white drop-shadow-lg",children:e.name}),n.jsx("div",{className:"w-24 h-24 bg-white/20 backdrop-blur rounded-2xl grid place-items-center mx-auto transform hover:scale-110 transition-transform",children:n.jsx("span",{className:"text-5xl filter drop-shadow-lg",children:e.icon})})]})]})]}),n.jsxs("div",{className:"absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-2",children:[n.jsx("div",{className:"w-2 h-2 rounded-full bg-white/30"}),n.jsx("div",{className:"w-2 h-2 rounded-full bg-white/60 animate-pulse"}),n.jsx("div",{className:"w-2 h-2 rounded-full bg-white/30"})]})]})}function Tg({onDone:e}){const[t,r]=d.useState([!1,!1,!1,!1]);return d.useEffect(()=>{const s=[setTimeout(()=>r([!0,!1,!1,!1]),100),setTimeout(()=>r([!0,!0,!1,!1]),300),setTimeout(()=>r([!0,!0,!0,!1]),500),setTimeout(()=>r([!0,!0,!0,!0]),700),setTimeout(e,2500)];return()=>s.forEach(clearTimeout)},[e]),n.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-emerald-600 via-green-600 to-teal-600 flex items-center justify-center text-white relative overflow-hidden",children:[n.jsx("style",{children:`
        @keyframes confetti-fall {
          0% { transform: translateY(-100vh) rotate(0deg); opacity: 1; }
          100% { transform: translateY(100vh) rotate(720deg); opacity: 0; }
        }
        
        @keyframes star-pop {
          0% { transform: scale(0) rotate(0deg); }
          50% { transform: scale(1.3) rotate(180deg); }
          100% { transform: scale(1) rotate(360deg); }
        }
        
        @keyframes text-wave {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
      `}),n.jsx("div",{className:"absolute inset-0",children:[...Array(30)].map((s,a)=>n.jsx("div",{className:"absolute text-4xl",style:{left:`${Math.random()*100}%`,animation:`confetti-fall ${3+Math.random()*2}s linear infinite`,animationDelay:`${Math.random()*2}s`},children:["🎉","🎊","✨","⭐","🌟"][Math.floor(Math.random()*5)]},a))}),n.jsxs("div",{className:"relative z-10 text-center",children:[n.jsx("div",{className:"flex justify-center gap-6 mb-8",children:[0,1,2].map(s=>n.jsx("div",{className:`transform transition-all duration-500 ${t[s]?"scale-100 opacity-100":"scale-0 opacity-0"}`,style:{animation:t[s]?"star-pop 0.6s ease-out":"none"},children:n.jsx("div",{className:"w-20 h-20 bg-white/20 backdrop-blur rounded-2xl flex items-center justify-center",children:n.jsx("span",{className:"text-4xl",children:"⭐"})})},s))}),n.jsxs("div",{className:`transform transition-all duration-700 ${t[3]?"scale-100 opacity-100":"scale-0 opacity-0"}`,children:[n.jsxs("h2",{className:"text-4xl font-black mb-2",children:[n.jsx("span",{style:{animation:"text-wave 1s ease-in-out infinite"},children:"Perfect"})," ",n.jsx("span",{style:{animation:"text-wave 1s ease-in-out 0.1s infinite"},children:"Streak!"})]}),n.jsx("p",{className:"text-xl opacity-90",children:"3 correct in a row!"}),n.jsxs("div",{className:"mt-6 flex justify-center gap-4 text-3xl",children:[n.jsx("span",{className:"animate-bounce",style:{animationDelay:"0s"},children:"🎯"}),n.jsx("span",{className:"animate-bounce",style:{animationDelay:"0.1s"},children:"💯"}),n.jsx("span",{className:"animate-bounce",style:{animationDelay:"0.2s"},children:"🔥"})]})]})]})]})}function Pg({onSelect:e}){const[t,r]=d.useState(null);return n.jsxs("div",{className:"min-h-screen bg-gradient-to-b from-gray-900 via-purple-900/20 to-gray-900 text-white",children:[n.jsx("style",{children:`
        @keyframes character-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
      `}),n.jsxs("div",{className:"mx-auto max-w-md px-5 pt-16 pb-8",children:[n.jsxs("header",{className:"text-center mb-10",children:[n.jsxs("div",{className:"relative inline-block mb-6",children:[n.jsx("div",{className:"absolute inset-0 bg-yellow-400/30 rounded-full blur-2xl animate-pulse"}),n.jsx("div",{className:"relative text-6xl animate-bounce",children:"🏆"})]}),n.jsx("h1",{className:"text-3xl font-black mb-3 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent",children:"Perfect Round!"}),n.jsx("p",{className:"text-lg text-white/80",children:"Choose your reward character"})]}),n.jsx("div",{className:"grid grid-cols-2 gap-4",children:Jt.map((s,a)=>{const o=vg[Fn(s.name)],i=t===a;return n.jsxs("button",{onClick:()=>{Do([20]),On("/sounds/select.mp3",.5),e(Fn(s.name))},onMouseEnter:()=>r(a),onMouseLeave:()=>r(null),className:`
                  relative p-6 rounded-2xl backdrop-blur-xl
                  bg-white/10 border border-white/20
                  transform transition-all duration-300
                  hover:scale-105 hover:bg-white/15 active:scale-95
                  ${i?"shadow-2xl":"shadow-lg"}
                `,style:{animation:i?"character-float 2s ease-in-out infinite":"none",boxShadow:i?`0 10px 40px ${s.color}40`:""},children:[i&&n.jsx("div",{className:"absolute inset-0 rounded-2xl opacity-30",style:{background:"linear-gradient(105deg, transparent 40%, white 50%, transparent 60%)",animation:"shimmer 1s ease-out"}}),n.jsx("div",{className:"w-16 h-16 mx-auto mb-3 rounded-xl flex items-center justify-center",style:{background:`linear-gradient(135deg, ${s.color}40, ${s.color}20)`},children:n.jsx("span",{className:"text-3xl",children:s.icon})}),n.jsx("div",{className:"font-bold text-base mb-1",children:o}),n.jsx("div",{className:"text-xs text-white/60",children:s.name}),n.jsx("div",{className:"absolute top-2 right-2",children:n.jsx("span",{className:"text-xs",children:"🔓"})})]},Fn(s.name))})}),n.jsx("p",{className:"text-center text-xs text-white/40 mt-6",children:"Tap to unlock and play bonus round!"})]})]})}function Rg({stats:e,onPlayAgain:t,onExit:r,soundOn:s=!0}){const[a,o]=d.useState([!1,!1,!1,!1]),i=e||{correctAnswers:0,totalQuestions:3,coinsEarned:0,xpEarned:0,perfectRound:!1,characterUnlocked:null,bonusCorrect:!1},l=Math.round(i.correctAnswers/i.totalQuestions*100),c=i.perfectRound;return d.useEffect(()=>{document.body.classList.add("hide-bottom-nav"),s&&On(c?"/sounds/win.mp3":"/sounds/complete.mp3",.7);const u=[setTimeout(()=>o([!0,!1,!1,!1]),200),setTimeout(()=>o([!0,!0,!1,!1]),500),setTimeout(()=>o([!0,!0,!0,!1]),800),setTimeout(()=>o([!0,!0,!0,!0]),1100)];return()=>{u.forEach(clearTimeout),document.body.classList.remove("hide-bottom-nav")}},[s,c]),n.jsxs("div",{className:"min-h-screen bg-gradient-to-b from-gray-900 via-purple-900/20 to-gray-900 text-white relative overflow-hidden",children:[n.jsx("style",{children:`
        @keyframes float-in {
          0% { transform: translateY(50px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        
        @keyframes star-rain {
          0% { transform: translateY(-70vh) rotate(0deg); }
          100% { transform: translateY(100vh) rotate(360deg); }
        }
        
        @keyframes pulse-glow {
          0%, 100% { transform: scale(1); opacity: 0.5; }
          50% { transform: scale(1.1); opacity: 1; }
        }
      `}),c&&n.jsx("div",{className:"absolute inset-0",children:[...Array(20)].map((u,m)=>n.jsx("div",{className:"absolute text-2xl",style:{left:`${Math.random()*100}%`,animation:`star-rain ${5+Math.random()*3}s linear infinite`,animationDelay:`${Math.random()*3}s`},children:["⭐","✨","🌟"][Math.floor(Math.random()*3)]},m))}),n.jsxs("div",{className:"relative z-10 max-w-md mx-auto px-5 pt-16 pb-8",children:[n.jsxs("div",{className:`text-center mb-8 transform transition-all duration-700 ${a[0]?"translate-y-0 opacity-100":"translate-y-10 opacity-0"}`,children:[n.jsx("div",{className:"text-6xl mb-4",children:c?"🏆":l>=66?"⭐":"✅"}),n.jsx("h1",{className:"text-3xl font-black mb-2 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent",children:c?"Perfect Game!":l>=66?"Great Job!":"Good Try!"}),n.jsx("p",{className:"text-lg text-white/70",children:"Round Complete"})]}),n.jsxs("div",{className:"space-y-4 mb-8",children:[n.jsxs("div",{className:`bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 transform transition-all duration-700 ${a[1]?"translate-y-0 opacity-100":"translate-y-10 opacity-0"}`,children:[n.jsxs("div",{className:"flex justify-between items-center mb-4",children:[n.jsx("span",{className:"text-white/60",children:"Score"}),n.jsxs("span",{className:"text-2xl font-bold",children:[i.correctAnswers,"/",i.totalQuestions]})]}),n.jsx("div",{className:"h-3 bg-white/20 rounded-full overflow-hidden",children:n.jsx("div",{className:"h-full bg-gradient-to-r from-green-400 to-emerald-500 transition-all duration-1000",style:{width:`${a[1]?l:0}%`}})}),n.jsxs("div",{className:"text-right text-sm text-white/60 mt-2",children:[l,"% Accuracy"]})]}),n.jsxs("div",{className:`bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 transform transition-all duration-700 ${a[2]?"translate-y-0 opacity-100":"translate-y-10 opacity-0"}`,children:[n.jsx("div",{className:"text-white/60 mb-4",children:"Rewards Earned"}),n.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[n.jsxs("div",{className:"text-center",children:[n.jsx("div",{className:"text-3xl mb-2",children:"🪙"}),n.jsxs("div",{className:"text-2xl font-bold text-yellow-400",children:["+",i.coinsEarned]}),n.jsx("div",{className:"text-xs text-white/60",children:"Coins"})]}),n.jsxs("div",{className:"text-center",children:[n.jsx("div",{className:"text-3xl mb-2",children:"⚡"}),n.jsxs("div",{className:"text-2xl font-bold text-blue-400",children:["+",i.xpEarned]}),n.jsx("div",{className:"text-xs text-white/60",children:"XP"})]})]})]}),i.characterUnlocked&&n.jsx("div",{className:`bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-xl rounded-2xl p-6 border border-purple-400/30 transform transition-all duration-700 ${a[2]?"translate-y-0 opacity-100":"translate-y-10 opacity-0"}`,children:n.jsxs("div",{className:"text-center",children:[n.jsx("div",{className:"text-4xl mb-2",children:i.characterUnlocked.icon}),n.jsx("div",{className:"text-lg font-bold text-purple-300",children:"Character Unlocked!"}),n.jsx("div",{className:"text-sm text-white/60",children:i.characterUnlocked.name})]})})]}),n.jsxs("div",{className:`space-y-3 transform transition-all duration-700 ${a[3]?"translate-y-0 opacity-100":"translate-y-10 opacity-0"}`,children:[n.jsx("button",{onClick:t,className:"w-full py-3 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold text-lg shadow-xl hover:scale-105 active:scale-95 transition-transform -mt-4",children:"Play Again"}),n.jsx("button",{onClick:r,className:"w-full py-3 rounded-2xl bg-white/10 backdrop-blur border border-white/20 text-white font-bold text-lg hover:bg-white/20 active:scale-95 transition-all",children:"Back to Games"})]})]})]})}function _g(){const e=je(),t=Je(),r=()=>{var ce;const ae=((ce=t.state)==null?void 0:ce.from)==="home";e(ae?"/":"/play")},{coins:s,xp:a,level:o,ownedCharacters:i,soundOn:l,unlockCharacter:c,setSoundOn:u}=Lo(),[m,h]=d.useState("wheel"),[f,w]=d.useState({qIndex:0,progress:[!1,!1,!1],lifelines:{fifty:!1,audience:!1}}),[x,j]=d.useState([]),[S,y]=d.useState(null),[g,v]=d.useState(null),[N,C]=d.useState(30),[P,E]=d.useState([]),[p,b]=d.useState(null),[k,_]=d.useState(null),[R,F]=d.useState(!1),[Q,V]=d.useState(0),[K,q]=d.useState(!1),[M,I]=d.useState(0),[D,L]=d.useState("none"),[T,z]=d.useState(!1),[B,G]=d.useState(null),[$,Z]=d.useState(null),[U,O]=d.useState(!1),[ee,W]=d.useState(null),[H,X]=d.useState(-1),[J,Y]=d.useState(0),[A,te]=d.useState(null),[ne,le]=d.useState(null),[ue,Ne]=d.useState(!1),[ge,ot]=d.useState(null),[Ee,qe]=d.useState(-1),[ke,Me]=d.useState([!1,!1,!1]),[ft,ht]=d.useState(!1),[_e,$e]=d.useState(!1),[Qe,At]=d.useState(null),ze=d.useRef(null),Ke=d.useRef(null),tt=d.useRef(null),Ct=d.useRef(null),It=d.useRef(null),un=d.useMemo(()=>{var ae;return((ae=window.matchMedia)==null?void 0:ae.call(window,"(prefers-reduced-motion: reduce)").matches)||!1},[]);d.useEffect(()=>(es(),se(),window.history.pushState({mode:"classic"},"",window.location.href),()=>me()),[]),d.useEffect(()=>{const ae=ce=>{var Ce;ce.preventDefault();const pe=((Ce=t.state)==null?void 0:Ce.from)==="home";e(pe?"/":"/play")};return window.addEventListener("popstate",ae),()=>window.removeEventListener("popstate",ae)},[e,t]),d.useEffect(()=>(m==="question"&&N>0&&!_e?tt.current=setTimeout(()=>{C(ae=>{const ce=ae-1;return ce===10&&l&&On("/sounds/tick.mp3",.8),ce})},1e3):m==="question"&&N===0&&F(!0),()=>{tt.current&&clearTimeout(tt.current)}),[m,N,l,_e]),d.useEffect(()=>{if(m!=="wheel"||A==null)return;X(A),l&&On("/sounds/progress.mp3",.6),qe(A);const ae=setTimeout(()=>qe(-1),900),ce=setTimeout(()=>X(-1),900),pe=setTimeout(()=>{ge&&(ge==="streakFlash"?h("streakFlash"):ge==="characterPicker"?h("characterPicker"):ge==="summary"?h("summary"):be(),ot(null)),te(null)},1800);return()=>{clearTimeout(ae),clearTimeout(ce),clearTimeout(pe)}},[m,A,ge,l]),d.useEffect(()=>{m!=="wheel"||!ft||(Y(ae=>ae+1),ht(!1))},[m,ft]),d.useEffect(()=>{if(m!=="wheel"||ne==null)return;const ce=setTimeout(()=>{te(ne),le(null)},ue?1800:0);return()=>clearTimeout(ce)},[m,ne,ue]);const es=async()=>{try{const ce=await(await fetch("/data/quiz_questions_bank.csv")).text(),{data:pe}=vr.parse(ce,{header:!0,skipEmptyLines:!0,transformHeader:we=>we.trim().toLowerCase()}),Ce=pe.map((we,ct)=>{var Zs;const pt=[we.option1,we.option2,we.option3,we.option4].map(Mo=>(Mo||"").trim()).filter(Boolean);if(pt.length<4)return null;let er={a:0,b:1,c:2,d:3}[(Zs=we.answer)==null?void 0:Zs.toLowerCase()];return er===void 0&&(er=pt.findIndex(Mo=>Mo.toLowerCase()===(we.answer||"").toLowerCase())),er===-1&&(er=0),{id:we.id||`q_${ct}`,prompt:(we.question||"").trim(),options:pt,correctIndex:er,category:(we.category||we.subject||"general knowledge").trim(),difficulty:(we.difficulty||"medium").toLowerCase(),explanation:(we.explanation||"").trim()}}).filter(Boolean);j(Ce)}catch(ae){console.error("Failed to load questions:",ae),j([])}},se=()=>{const ae=new Audio("/sounds/spin.mp3");ae.loop=!0,ae.volume=.6,Ct.current=ae},me=()=>{if(tt.current&&clearTimeout(tt.current),It.current&&(clearTimeout(It.current),It.current=null),Ct.current){try{Ct.current.pause()}catch{}Ct.current=null}},Se=()=>{w({qIndex:0,progress:[!1,!1,!1],lifelines:{fifty:!1,audience:!1}}),Me([!1,!1,!1]),y(null),v(null),_(null),E([]),b(null),F(!1),Y(0),V(0),q(!1),Z(null)},be=()=>{r(),Se()},We=()=>{if(l&&Ct.current){try{Ct.current.currentTime=0,Ct.current.play()}catch{}It.current&&clearTimeout(It.current),It.current=setTimeout(()=>{ve()},2e3)}},ve=()=>{if(It.current&&(clearTimeout(It.current),It.current=null),Ct.current)try{Ct.current.pause(),Ct.current.currentTime=0}catch{}},Ge=()=>{if(T)return;G(null),O(!1),W(null),z(!0),We();const ae=Math.floor(Math.random()*Jt.length),ce=Jt[ae],pe=Od(M),Ce=ae*ir+ir/2,we=(Math.random()-.5)*(ir*.3),ct=360-Ce+we;let pt=Od(ct-pe);const sn=En.FULL_TURNS*360+pt,er=M+sn+En.OVERSHOOT;L(`transform ${un?1e3:En.DURATION}ms cubic-bezier(0.25, 0.46, 0.45, 0.94)`),I(er),Do([20,50,20]),setTimeout(()=>{L(`transform ${un?200:En.SETTLE_DURATION}ms cubic-bezier(0.68, -0.55, 0.265, 1.55)`),I(Zs=>Zs-En.OVERSHOOT)},un?1e3:En.DURATION),setTimeout(()=>{ve(),z(!1),G({cat:ce,index:ae}),v(ce),W(ce.color),O(!0),setTimeout(()=>{O(!1),h("interstitial")},1500),setTimeout(()=>W(null),1e3)},(un?1e3:En.DURATION)+(un?200:En.SETTLE_DURATION)+100)},Te=()=>{const ae=x.filter(pe=>{const Ce=pe.category.toLowerCase(),we=g.name.toLowerCase();return Ce.includes(we)||we.includes(Ce)});let ce;ae.length>0?ce=ae[Math.floor(Math.random()*ae.length)]:ce=x[Math.floor(Math.random()*x.length)],ce?(y(ce),C(30),E([]),b(null),F(!1),$e(!1),h("question")):h("wheel")},Xe=(ae,ce,pe=!1)=>{if(!pe){$e(!0);return}const Ce=f.qIndex,we=[...f.progress];we[Ce]=!0;const ct=[...ke];if(ct[Ce]=!!ae,Me(ct),w(pt=>({...pt,progress:we,qIndex:pt.qIndex+1})),ae&&(V(pt=>pt+5),setTimeout(()=>{var sn;const pt=(sn=Ke.current)==null?void 0:sn.getBoundingClientRect();pt?At({startRect:pt,targetRef:ze,count:5,amount:5}):(ie.addCoins(5,"Classic Mode - Correct Answer"),ie.addXP(1),window.dispatchEvent(new Event("coinsUpdated")),On("/sounds/coin.mp3",.7))},100)),le(Ce),Ne(!!ae),Ce===2)if(ct.every(Boolean))ot("streakFlash");else{const sn={correctAnswers:ct.filter(Boolean).length,totalQuestions:3,coinsEarned:Q,xpEarned:ct.filter(Boolean).length,perfectRound:!1,characterUnlocked:null,bonusCorrect:!1};Z(sn),ot("summary")}else ot(null);h("wheel")},de=ae=>{if(!(f.lifelines[ae]||!S)){if(w(ce=>({...ce,lifelines:{...ce.lifelines,[ae]:!0}})),ae==="fifty"){const pe=S.options.map((Ce,we)=>we).filter(Ce=>Ce!==S.correctIndex).slice(0,2);E(pe)}else if(ae==="audience"){const ce=40+Math.random()*25;let pe=100-ce;const Ce=[0,0,0,0];Ce[S.correctIndex]=Math.round(ce);const we=[0,1,2,3].filter(ct=>ct!==S.correctIndex);we.forEach((ct,pt)=>{if(pt===we.length-1)Ce[ct]=pe;else{const sn=Math.floor(Math.random()*pe);Ce[ct]=sn,pe-=sn}}),b(Ce)}}},fe=ae=>{_(ae),h("bonusInterstitial")},he=ae=>{q(ae),ae&&k&&(c(k),V(pe=>pe+10));const ce={correctAnswers:ke.filter(Boolean).length+(ae?1:0),totalQuestions:4,coinsEarned:Q+(ae?10:0),xpEarned:ke.filter(Boolean).length+(ae?2:0),perfectRound:ke.every(Boolean),characterUnlocked:k?Jt.find(pe=>Fn(pe.name)===k):null,bonusCorrect:ae};Z(ce),h("summary")},nt=()=>{h("wheel")};switch(m){case"wheel":return n.jsxs(n.Fragment,{children:[Qe&&n.jsx(Xn,{startRect:Qe.startRect,targetRef:Qe.targetRef,count:Qe.count,onDone:()=>{ie.addCoins(Qe.amount,"Classic Mode - Correct Answer"),ie.addXP(1),window.dispatchEvent(new Event("coinsUpdated")),On("/sounds/coin.mp3",.7),At(null)}}),n.jsx(yg,{run:f,coins:s,xp:a,level:o,ownedCharacters:i,onSpin:Ge,onBack:r,spinning:T,angle:M,transition:D,result:B,showCallout:U,glowColor:ee,soundOn:l,setSoundOn:u,showSparkle:H,pulseIdx:Ee,coinBurstTick:J,pendingProgressIdx:A,lastAnswerWasCorrect:ue,nextProgressIdx:ne,coinPillRef:ze,wheelRef:Ke})]});case"interstitial":return n.jsx($d,{category:g,onComplete:Te,soundOn:l});case"streakFlash":return n.jsx(Tg,{onDone:()=>h("characterPicker")});case"question":return n.jsx(Fd,{question:S,category:g,onAnswer:Xe,run:f,timeLeft:N,usedLifelines:f.lifelines,onUseLifeline:de,eliminatedOptions:P,audienceData:p,onBack:nt,timeUp:R,onTimeUpBackToWheel:()=>{F(!1),h("wheel")},soundOn:l});case"characterPicker":return n.jsx(Pg,{onSelect:fe});case"bonusInterstitial":return n.jsx($d,{category:Jt.find(ae=>Fn(ae.name)===k),onComplete:()=>h("bonusQuestion"),isBonus:!0,soundOn:l});case"bonusQuestion":if(!S){const ae=Jt.find(ce=>Fn(ce.name)===k);if(ae&&x.length>0){const ce=x.filter(Ce=>{const we=Ce.category.toLowerCase(),ct=ae.name.toLowerCase();return we.includes(ct)||ct.includes(we)}),pe=ce.length>0?ce[Math.floor(Math.random()*ce.length)]:x[Math.floor(Math.random()*x.length)];y(pe),C(30)}return n.jsx("div",{className:"min-h-screen bg-base-bg text-base-text flex items-center justify-center",children:n.jsx("div",{className:"text-lg",children:"Loading bonus question..."})})}return n.jsx(Fd,{question:S,category:Jt.find(ae=>Fn(ae.name)===k)||Jt[0],onAnswer:he,run:{...f,lifelines:{fifty:!0,audience:!0}},timeLeft:N,usedLifelines:{fifty:!0,audience:!0},onUseLifeline:()=>{},eliminatedOptions:[],audienceData:null,onBack:r,soundOn:l});case"summary":return n.jsx(Rg,{stats:$,onPlayAgain:()=>{Se(),h("wheel")},onExit:r,soundOn:l});default:return n.jsx("div",{className:"min-h-screen bg-base-bg text-white flex items-center justify-center",children:n.jsxs("div",{className:"text-center",children:[n.jsx("div",{className:"text-2xl mb-4",children:"Unknown State"}),n.jsx("button",{onClick:()=>h("wheel"),className:"px-6 py-3 bg-blue-600 rounded-lg",children:"Back to Wheel"})]})})}}function Ag({lives:e,maxLives:t=3}){const[r,s]=d.useState(null),[a,o]=d.useState(e);return d.useEffect(()=>{e<a?(s(a-1),setTimeout(()=>s(null),600)):e>a&&(s(e-1),setTimeout(()=>s(null),1e3)),o(e)},[e,a]),n.jsxs("div",{className:"relative",children:[n.jsx("style",{jsx:!0,children:`
        @keyframes heartBeat {
          0%, 100% { transform: scale(1); }
          25% { transform: scale(1.1); }
          50% { transform: scale(0.95); }
          75% { transform: scale(1.05); }
        }
        
        @keyframes heartLost {
          0% { 
            transform: scale(1) rotate(0deg);
            opacity: 1;
          }
          100% { 
            transform: scale(0) rotate(-180deg);
            opacity: 0;
          }
        }
        
        @keyframes heartGained {
          0% { 
            transform: scale(0) rotate(180deg);
            opacity: 0;
          }
          50% {
            transform: scale(1.3) rotate(90deg);
            opacity: 1;
          }
          100% { 
            transform: scale(1) rotate(0deg);
            opacity: 1;
          }
        }
        
        @keyframes glow {
          0%, 100% { 
            box-shadow: 0 0 20px rgba(239, 68, 68, 0.4);
          }
          50% { 
            box-shadow: 0 0 30px rgba(239, 68, 68, 0.6);
          }
        }
        
        .heart-beat {
          animation: heartBeat 1.5s ease-in-out infinite;
        }
        
        .heart-lost {
          animation: heartLost 0.6s ease-out forwards;
        }
        
        .heart-gained {
          animation: heartGained 1s ease-out;
        }
        
        .heart-glow {
          animation: glow 2s ease-in-out infinite;
        }
      `}),n.jsxs("div",{className:"flex items-center gap-3 px-5 py-1.5 bg-gradient-to-r from-red-500/20 to-pink-500/20 rounded-full backdrop-blur-md border border-white/10 shadow-xl",children:[n.jsx("div",{className:"flex items-center gap-1.5",children:[...Array(t)].map((i,l)=>n.jsx("div",{className:`relative transition-all duration-300 ${l<e?"scale-100":"scale-75"}`,children:n.jsxs("div",{className:"relative",children:[l<e?n.jsxs("div",{className:`relative ${l===r&&e>a?"heart-gained":""}`,children:[n.jsx("span",{className:`text-3xl drop-shadow-lg ${l===e-1?"heart-beat":""}`,children:"❤️"}),l===e-1&&e===1&&n.jsx("div",{className:"absolute inset-0 rounded-full heart-glow"})]}):n.jsx("div",{className:`relative ${l===r&&e<a?"heart-lost":""}`,children:n.jsx("span",{className:"text-3xl opacity-20 grayscale",children:"💔"})}),l===r&&e>a&&n.jsxs("div",{className:"absolute inset-0 flex items-center justify-center pointer-events-none",children:[n.jsx("div",{className:"absolute w-10 h-10 bg-green-400 rounded-full animate-ping opacity-30"}),n.jsx("span",{className:"absolute text-sm font-bold text-green-400 animate-bounce",children:"+1"})]})]})},l))}),n.jsx("div",{className:"pr-1",children:n.jsxs("div",{className:`text-sm font-bold ${e===1?"text-red-400 animate-pulse":e===t?"text-green-400":"text-white"}`,children:[e,"/",t]})})]}),e===1&&n.jsx("div",{className:"absolute -bottom-10 left-1/2 -translate-x-1/2 whitespace-nowrap",children:n.jsx("div",{className:"px-3 py-1 bg-red-500/20 border border-red-500/50 rounded-full backdrop-blur-sm",children:n.jsx("span",{className:"text-xs font-medium text-red-400 animate-pulse",children:"Last life! Be careful! ⚠️"})})})]})}function Ig({question:e,onAnswer:t,lives:r,questionCount:s,correctStreak:a,totalScore:o,currentDifficulty:i,timeLeft:l,showFeedback:c,lastAnswerCorrect:u,checkpoint:m,onBack:h,soundOn:f,setSoundOn:w}){const[x,j]=d.useState(null),[S,y]=d.useState(!1),[g,v]=d.useState(!1),N={EASY:{emoji:"🌱",color:"from-emerald-400 to-green-500",accentGradient:"from-emerald-500/20 to-green-600/20",label:"Sprout",motivationalText:"Great start! Keep growing! 🌱"},MEDIUM:{emoji:"🌻",color:"from-yellow-400 to-amber-500",accentGradient:"from-yellow-500/20 to-amber-600/20",label:"Blooming",motivationalText:"You're blooming beautifully! 🌻"},HARD:{emoji:"🔥",color:"from-orange-400 to-red-500",accentGradient:"from-orange-500/20 to-red-600/20",label:"On Fire",motivationalText:"You're on fire! Keep it up! 🔥"},EXPERT:{emoji:"⚡",color:"from-purple-400 to-indigo-500",accentGradient:"from-purple-500/20 to-indigo-600/20",label:"Lightning",motivationalText:"Lightning fast thinking! ⚡"},LEGENDARY:{emoji:"👑",color:"from-pink-400 to-purple-600",accentGradient:"from-pink-500/20 to-purple-600/20",label:"Legendary",motivationalText:"Legendary performance! 👑"}},C=N[i];d.useEffect(()=>{a>0&&a%5===0&&c&&u&&(y(!0),setTimeout(()=>y(!1),3e3))},[a,c,u]),d.useEffect(()=>{c&&u&&(v(!0),setTimeout(()=>v(!1),1e3))},[c,u]);const P=E=>{c||(j(E),t(E))};return d.useEffect(()=>(document.body.classList.add("hide-bottom-nav"),()=>{document.body.classList.remove("hide-bottom-nav")}),[]),n.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-black text-white relative overflow-hidden",children:[n.jsx("style",{jsx:!0,children:`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        
        @keyframes slideInTop {
          from { transform: translateY(-100px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        
        @keyframes scorePopup {
          0% { transform: scale(1); }
          50% { transform: scale(1.3); }
          100% { transform: scale(1); }
        }
        
        @keyframes correctAnswer {
          0% { transform: scale(1) rotate(0deg); }
          50% { transform: scale(1.1) rotate(5deg); }
          100% { transform: scale(1) rotate(0deg); }
        }
        
        @keyframes wrongAnswer {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-10px); }
          75% { transform: translateX(10px); }
        }
        
        @keyframes streakFlame {
          0%, 100% { 
            transform: scale(1) translateY(0);
            filter: brightness(1);
          }
          50% { 
            transform: scale(1.2) translateY(-5px);
            filter: brightness(1.3);
          }
        }

        @keyframes coinFloat {
          0% { 
            transform: translateY(0) rotate(0deg);
            opacity: 1;
          }
          100% { 
            transform: translateY(-50px) rotate(360deg);
            opacity: 0;
          }
        }
        
        .float-animation {
          animation: float 4s ease-in-out infinite;
        }
        
        .slide-in {
          animation: slideInTop 0.5s ease-out;
        }
        
        .score-pulse {
          animation: scorePopup 0.5s ease-out;
        }
        
        .correct-bounce {
          animation: correctAnswer 0.6s ease-out;
        }
        
        .wrong-shake {
          animation: wrongAnswer 0.4s ease-out;
        }
        
        .streak-flame {
          animation: streakFlame 2s ease-in-out infinite;
        }

        .coin-animation {
          animation: coinFloat 1s ease-out forwards;
        }
        
        .glass-card {
          background: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .progress-ring {
          transform: rotate(-90deg);
          transform-origin: center;
        }
      `}),n.jsxs("div",{className:"fixed inset-0 pointer-events-none",children:[n.jsx("div",{className:"absolute top-20 left-10 text-[100px] opacity-10 float-animation",children:C.emoji}),n.jsx("div",{className:"absolute top-40 right-20 text-[80px] opacity-10 float-animation",style:{animationDelay:"1s"},children:"⭐"}),n.jsx("div",{className:"absolute bottom-40 left-20 text-[90px] opacity-10 float-animation",style:{animationDelay:"2s"},children:"🎯"}),n.jsx("div",{className:"absolute bottom-20 right-10 text-[70px] opacity-10 float-animation",style:{animationDelay:"3s"},children:"🏆"})]}),n.jsxs("div",{className:"relative z-10 px-4 pt-[calc(env(safe-area-inset-top)+2rem)]",children:[n.jsxs("div",{className:"flex justify-between items-center mb-8 slide-in",children:[n.jsx("button",{onClick:h,className:"w-12 h-12 glass-card rounded-2xl shadow-lg flex items-center justify-center hover:scale-105 transition-transform",children:n.jsx("span",{className:"text-xl",children:"◀️"})}),n.jsx(Ag,{lives:r}),n.jsx("button",{onClick:()=>w(!f),className:"w-12 h-12 glass-card rounded-2xl shadow-lg flex items-center justify-center hover:scale-105 transition-transform",children:n.jsx("span",{className:"text-xl",children:f?"🔊":"🔇"})})]}),n.jsx("div",{className:`glass-card rounded-3xl p-2 shadow-xl mb-2 mt-12 slide-in bg-gradient-to-r ${C.accentGradient}`,style:{animationDelay:"0.1s"},children:n.jsxs("div",{className:"grid grid-cols-3 gap-3",children:[n.jsxs("div",{className:"text-center",children:[n.jsx("div",{className:`text-3xl font-black bg-gradient-to-r ${C.color} bg-clip-text text-transparent ${g?"score-pulse":""}`,children:o}),n.jsx("div",{className:"text-xs text-white/60 font-medium mt-1",children:"Points"}),c&&u&&n.jsx("div",{className:"absolute -top-2 left-1/2 -translate-x-1/2",children:n.jsxs("span",{className:"text-green-400 font-bold text-sm coin-animation",children:["+",N[i]?i==="EASY"?10:i==="MEDIUM"?20:i==="HARD"?30:i==="EXPERT"?50:100:10]})})]}),n.jsxs("div",{className:"text-center",children:[n.jsx("div",{className:"text-3xl font-black text-white",children:s}),n.jsx("div",{className:"text-xs text-white/60 font-medium mt-1",children:"Questions"})]}),n.jsxs("div",{className:"text-center relative",children:[n.jsx("div",{className:`text-3xl font-black text-orange-400 ${a>0?"streak-flame":""}`,children:a}),n.jsx("div",{className:"text-xs text-white/60 font-medium mt-1",children:"Streak 🔥"})]})]})}),n.jsxs("div",{className:"flex justify-between items-center mb-1 slide-in",style:{animationDelay:"0.2s"},children:[n.jsx("div",{className:`px-4 py-3 rounded-full bg-gradient-to-r ${C.color} text-white shadow-lg`,children:n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx("span",{className:"text-2xl",children:C.emoji}),n.jsxs("div",{children:[n.jsx("div",{className:"font-bold text-sm",children:C.label}),n.jsxs("div",{className:"text-[10px] opacity-90",children:["Level ",s+1]})]})]})}),n.jsx("div",{className:"relative",children:n.jsxs("div",{className:"w-20 h-20 glass-card rounded-full shadow-xl flex items-center justify-center",children:[n.jsxs("svg",{className:"absolute inset-0 w-full h-full",children:[n.jsx("circle",{cx:"40",cy:"40",r:"35",fill:"none",stroke:"rgba(255, 255, 255, 0.1)",strokeWidth:"6",className:"progress-ring"}),n.jsx("circle",{cx:"40",cy:"40",r:"35",fill:"none",stroke:l<=5?"#ef4444":l<=10?"#f59e0b":"#10b981",strokeWidth:"6",strokeDasharray:`${l/30*220} 220`,strokeLinecap:"round",className:"progress-ring transition-all duration-1000"})]}),n.jsx("div",{className:"relative z-10",children:n.jsx("span",{className:`text-2xl font-black ${l<=5?"text-red-400 animate-pulse":l<=10?"text-amber-400":"text-white"}`,children:l})})]})})]})]}),n.jsxs("div",{className:"px-4 slide-in",style:{animationDelay:"0.3s"},children:[n.jsxs("div",{className:"glass-card rounded-3xl shadow-xl p-6 mb-6 border border-white/10",children:[n.jsx("div",{className:"text-center mb-2",children:n.jsxs("span",{className:"text-xs font-bold text-white/40 uppercase tracking-wider",children:["Question ",s+1]})}),n.jsx("h2",{className:"text-xl font-bold text-center text-white leading-relaxed",children:e.prompt})]}),n.jsx("div",{className:"space-y-3",children:e.options.map((E,p)=>{const b=["A","B","C","D"],k=["from-blue-400 to-blue-500","from-green-400 to-green-500","from-yellow-400 to-yellow-500","from-purple-400 to-purple-500"];let _="glass-card border border-white/10",R="";return c&&(p===e.correctIndex?(_="bg-gradient-to-r from-green-500/20 to-emerald-500/20 border-2 border-green-400",R="correct-bounce"):x===p&&!u&&(_="bg-gradient-to-r from-red-500/20 to-pink-500/20 border-2 border-red-400",R="wrong-shake")),n.jsx("button",{onClick:()=>P(p),disabled:c,className:`w-full p-4 rounded-2xl shadow-lg transition-all ${_} ${R} 
                  ${c?"":"hover:scale-[1.02] active:scale-[0.98] hover:bg-white/10"} slide-in`,style:{animationDelay:`${.4+p*.05}s`},children:n.jsxs("div",{className:"flex items-center gap-4",children:[n.jsx("div",{className:`w-12 h-12 rounded-xl bg-gradient-to-br ${k[p]} 
                    text-white font-bold text-xl flex items-center justify-center shadow-md`,children:b[p]}),n.jsx("span",{className:"flex-1 text-left font-medium text-white",children:E}),c&&p===e.correctIndex&&n.jsx("span",{className:"text-2xl",children:"✅"}),c&&x===p&&!u&&n.jsx("span",{className:"text-2xl",children:"❌"})]})},p)})}),c&&n.jsx("div",{className:"mt-6 text-center slide-in",children:n.jsx("p",{className:"text-sm font-medium text-white/70",children:u?C.motivationalText:"No worries! Keep trying! 💪"})}),m>0&&n.jsx("div",{className:"mt-4 flex justify-center slide-in",style:{animationDelay:"0.6s"},children:n.jsx("div",{className:"glass-card rounded-full px-4 py-2 shadow-lg border border-white/10",children:n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx("span",{className:"text-xl",children:"🏁"}),n.jsxs("span",{className:"text-sm font-bold text-white/80",children:["Checkpoint: Question ",m]})]})})})]}),S&&n.jsx("div",{className:"fixed inset-0 pointer-events-none flex items-center justify-center z-50",children:n.jsx("div",{className:"bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-8 py-6 rounded-3xl shadow-2xl animate-bounce",children:n.jsxs("div",{className:"text-center",children:[n.jsx("div",{className:"text-5xl mb-3",children:"🎉"}),n.jsx("div",{className:"text-2xl font-black mb-2",children:"AMAZING STREAK!"}),n.jsx("div",{className:"text-lg",children:"You earned a life back! ❤️"})]})})})]})}function Lg({score:e,questionsAnswered:t,highScore:r,checkpoint:s,onRestart:a,onContinue:o,onBack:i}){const l=e>r,[c,u]=d.useState(!1),[m,h]=d.useState(0),[f,w]=d.useState(!1),x=d.useRef(null);d.useEffect(()=>{const v=e/60;let N=0;const C=setInterval(()=>{N+=v,N>=e?(h(e),clearInterval(C),l&&(u(!0),setTimeout(()=>u(!1),5e3))):h(Math.floor(N))},2e3/60);return setTimeout(()=>w(!0),2200),()=>clearInterval(C)},[e,l]),d.useEffect(()=>(document.body.classList.add("hide-bottom-nav"),()=>{document.body.classList.remove("hide-bottom-nav")}),[]);const S=(()=>t>=100?{emoji:"👑",title:"LEGENDARY!",subtitle:"You're a true Quiz Legend!",color:"from-purple-400 to-pink-500",stars:5}:t>=50?{emoji:"🏆",title:"CHAMPION!",subtitle:"Outstanding performance!",color:"from-yellow-400 to-amber-500",stars:5}:t>=30?{emoji:"💎",title:"EXPERT!",subtitle:"You're getting really good!",color:"from-blue-400 to-cyan-500",stars:4}:t>=20?{emoji:"⭐",title:"STAR PLAYER!",subtitle:"Keep up the great work!",color:"from-green-400 to-emerald-500",stars:3}:t>=10?{emoji:"🎯",title:"NICE TRY!",subtitle:"You're improving fast!",color:"from-orange-400 to-red-500",stars:2}:{emoji:"🌟",title:"GOOD START!",subtitle:"Every expert was once a beginner!",color:"from-indigo-400 to-purple-500",stars:1})();return n.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-black text-white relative overflow-hidden",children:[n.jsx("style",{jsx:!0,children:`
        @keyframes slideUp {
          from { transform: translateY(100px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(10deg); }
        }
        
        @keyframes sparkle {
          0%, 100% { opacity: 0; transform: scale(0); }
          50% { opacity: 1; transform: scale(1); }
        }
        
        @keyframes confettiFall {
          0% { 
            transform: translateY(-100vh) rotate(0deg); 
            opacity: 1; 
          }
          100% { 
            transform: translateY(100vh) rotate(720deg); 
            opacity: 0; 
          }
        }
        
        @keyframes glow {
          0%, 100% { 
            text-shadow: 0 0 20px rgba(255, 255, 255, 0.5);
          }
          50% { 
            text-shadow: 0 0 40px rgba(255, 255, 255, 0.8);
          }
        }
        
        @keyframes starPop {
          0% { transform: scale(0) rotate(0deg); }
          50% { transform: scale(1.2) rotate(180deg); }
          100% { transform: scale(1) rotate(360deg); }
        }
        
        .slide-up {
          animation: slideUp 0.6s ease-out forwards;
        }
        
        .fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }
        
        .bounce-animation {
          animation: bounce 2s ease-in-out infinite;
        }
        
        .float-animation {
          animation: float 3s ease-in-out infinite;
        }
        
        .sparkle-animation {
          animation: sparkle 1.5s ease-in-out infinite;
        }
        
        .confetti-fall {
          animation: confettiFall 3s linear infinite;
        }
        
        .glow-text {
          animation: glow 2s ease-in-out infinite;
        }
        
        .star-pop {
          animation: starPop 0.6s ease-out;
        }
        
        .glass-card {
          background: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
      `}),n.jsxs("div",{className:"absolute inset-0 overflow-hidden",children:[n.jsx("div",{className:"absolute top-20 left-10 text-[150px] opacity-5 float-animation",children:"🏆"}),n.jsx("div",{className:"absolute bottom-20 right-10 text-[120px] opacity-5 float-animation",style:{animationDelay:"1s"},children:"⭐"}),n.jsx("div",{className:"absolute top-40 right-20 text-[100px] opacity-5 float-animation",style:{animationDelay:"2s"},children:"🎯"})]}),c&&n.jsx("div",{className:"fixed inset-0 pointer-events-none z-50",children:[...Array(40)].map((y,g)=>n.jsx("div",{className:"absolute confetti-fall",style:{left:`${Math.random()*100}%`,animationDelay:`${Math.random()*3}s`,animationDuration:`${3+Math.random()*2}s`},children:n.jsx("span",{className:"text-3xl",children:["🎉","⭐","🎊","✨","🎈","💫","🌟"][Math.floor(Math.random()*7)]})},g))}),n.jsxs("div",{className:"relative z-10 flex flex-col items-center justify-center min-h-screen px-6 text-center",children:[n.jsxs("div",{className:"mb-8 slide-up",children:[n.jsx("h1",{className:"text-6xl font-black mb-4 bg-gradient-to-r from-red-400 to-pink-500 bg-clip-text text-transparent",children:"GAME OVER"}),l&&n.jsx("div",{className:"fade-in",style:{animationDelay:"1s"},children:n.jsx("div",{className:"inline-block px-6 py-3 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-bold shadow-2xl glow-text",children:n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsx("span",{className:"text-3xl",children:"🏆"}),n.jsx("span",{className:"text-xl",children:"NEW HIGH SCORE!"}),n.jsx("span",{className:"text-3xl",children:"🏆"})]})})})]}),f&&n.jsx("div",{className:"mb-8 slide-up",style:{animationDelay:"0.3s"},children:n.jsxs("div",{className:`glass-card rounded-3xl p-6 bg-gradient-to-r ${S.color} bg-opacity-20 border-2 border-white/20 shadow-2xl`,children:[n.jsx("div",{className:"text-6xl mb-3 bounce-animation",children:S.emoji}),n.jsx("h2",{className:"text-3xl font-black mb-2",children:S.title}),n.jsx("p",{className:"text-white/80 mb-4",children:S.subtitle}),n.jsx("div",{className:"flex justify-center gap-1",children:[...Array(5)].map((y,g)=>n.jsx("span",{className:`text-2xl ${g<S.stars?"star-pop":""}`,style:{animationDelay:`${2.5+g*.1}s`},children:g<S.stars?"⭐":"☆"},g))})]})}),n.jsxs("div",{className:"grid grid-cols-2 gap-4 mb-8 w-full max-w-md",children:[n.jsxs("div",{className:"glass-card rounded-2xl p-6 shadow-xl slide-up",style:{animationDelay:"0.4s"},children:[n.jsx("div",{className:"text-4xl mb-2",children:"🎯"}),n.jsx("div",{ref:x,className:`text-4xl font-black ${l?"text-yellow-400":"text-white"}`,children:m}),n.jsx("div",{className:"text-sm text-white/60 font-medium",children:"Points Earned"}),n.jsx("div",{className:"mt-3 pt-3 border-t border-white/10",children:n.jsxs("div",{className:"text-xs text-white/50",children:[t," questions"]})})]}),n.jsxs("div",{className:"glass-card rounded-2xl p-6 shadow-xl slide-up",style:{animationDelay:"0.5s"},children:[n.jsx("div",{className:"text-4xl mb-2",children:"📊"}),n.jsx("div",{className:"text-4xl font-black text-white",children:t}),n.jsx("div",{className:"text-sm text-white/60 font-medium",children:"Questions"}),n.jsx("div",{className:"mt-3 pt-3 border-t border-white/10",children:n.jsxs("div",{className:"text-xs text-white/50",children:["Best: ",Math.max(r,e)]})})]})]}),n.jsx("div",{className:"glass-card rounded-2xl px-6 py-4 mb-8 w-full max-w-md slide-up",style:{animationDelay:"0.6s"},children:n.jsx("p",{className:"text-white/80 font-medium",children:t>=50?"Incredible performance! You're a quiz master! 🌟":t>=20?"Great job! You're getting stronger! 💪":"Keep practicing! Every attempt makes you better! 🚀"})}),n.jsxs("div",{className:"space-y-3 w-full max-w-md",children:[s>0&&o&&n.jsx("button",{onClick:o,className:"w-full py-4 bg-gradient-to-r from-green-400 to-emerald-500 text-white rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all hover:scale-[1.02] active:scale-[0.98] slide-up",style:{animationDelay:"0.7s"},children:n.jsxs("div",{className:"flex items-center justify-center gap-3",children:[n.jsx("span",{className:"text-2xl",children:"🏁"}),n.jsxs("span",{children:["Continue from Question ",s]})]})}),n.jsx("button",{onClick:a,className:"w-full py-4 bg-gradient-to-r from-blue-400 to-indigo-500 text-white rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all hover:scale-[1.02] active:scale-[0.98] slide-up",style:{animationDelay:"0.8s"},children:n.jsxs("div",{className:"flex items-center justify-center gap-3",children:[n.jsx("span",{className:"text-2xl",children:"🎮"}),n.jsx("span",{children:"Play Again"})]})}),n.jsx("button",{onClick:i,className:"w-full py-4 glass-card text-white rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl transition-all hover:scale-[1.02] active:scale-[0.98] hover:bg-white/10 slide-up",style:{animationDelay:"0.9s"},children:n.jsxs("div",{className:"flex items-center justify-center gap-3",children:[n.jsx("span",{className:"text-2xl",children:"🏠"}),n.jsx("span",{children:"Back to Games"})]})})]})]})]})}const Bd={EASY:{min:0,max:9,timer:30,points:10},MEDIUM:{min:10,max:24,timer:25,points:20},HARD:{min:25,max:49,timer:20,points:30},EXPERT:{min:50,max:99,timer:15,points:50},LEGENDARY:{min:100,max:1/0,timer:10,points:100}};function Dg({onBack:e,isFromQuest:t}){const{coins:r,xp:s,level:a,soundOn:o,setSoundOn:i}=Lo(),[l,c]=d.useState("playing"),[u,m]=d.useState(3),[h,f]=d.useState(0),[w,x]=d.useState(0),[j,S]=d.useState(0),[y,g]=d.useState("EASY"),[v,N]=d.useState([]),[C,P]=d.useState(null),[E,p]=d.useState(30),[b,k]=d.useState(!1),[_,R]=d.useState(!1),[F,Q]=d.useState(0),[V,K]=d.useState(!1),q=d.useRef(null),M=d.useRef(new Set);d.useEffect(()=>(D(),Z(),window.history.pushState({mode:"survival"},"",window.location.href),()=>{q.current&&clearTimeout(q.current)}),[]),d.useEffect(()=>(l==="playing"&&C&&E>0&&!b&&(q.current=setTimeout(()=>{p(A=>A<=1?(G(),0):(A===6&&o&&J("/sounds/tick.mp3",.8),A-1))},1e3)),()=>{q.current&&clearTimeout(q.current)}),[l,C,E,b,o]),d.useEffect(()=>{const A=I(h);A!==y&&(g(A),o&&J("/sounds/levelup.mp3",.6))},[h,y,o]),d.useEffect(()=>{h>0&&h%10===0&&($(),Q(h),o&&J("/sounds/checkpoint.mp3",.7))},[h,o]),d.useEffect(()=>{const A=te=>{te.preventDefault(),K(!0),window.history.pushState({mode:"survival"},"",window.location.href)};return window.addEventListener("popstate",A),()=>{window.removeEventListener("popstate",A)}},[]);const I=A=>A>=100?"LEGENDARY":A>=50?"EXPERT":A>=25?"HARD":A>=10?"MEDIUM":"EASY",D=async()=>{try{const te=await(await fetch("/data/quiz_questions_bank.csv")).text(),{data:ne}=vr.parse(te,{header:!0,skipEmptyLines:!0,transformHeader:ue=>ue.trim().toLowerCase()}),le=ne.map((ue,Ne)=>{var qe;const ge=[ue.option1,ue.option2,ue.option3,ue.option4].map(ke=>(ke||"").trim()).filter(Boolean);if(ge.length<4)return null;let Ee={a:0,b:1,c:2,d:3}[(qe=ue.answer)==null?void 0:qe.toLowerCase()];return Ee===void 0&&(Ee=ge.findIndex(ke=>ke.toLowerCase()===(ue.answer||"").toLowerCase())),Ee===-1&&(Ee=0),{id:ue.id||`q_${Ne}`,prompt:(ue.question||"").trim(),options:ge,correctIndex:Ee,category:(ue.category||ue.subject||"general").trim(),difficulty:(ue.difficulty||"medium").toLowerCase()}}).filter(Boolean);N(le),L(le)}catch(A){console.error("Failed to load questions:",A)}},L=(A=v)=>{const te=A.filter(Ne=>!M.current.has(Ne.id));te.length===0&&(M.current.clear(),te.push(...A));const ne=y.toLowerCase();let le=te.filter(Ne=>Ne.difficulty===ne||Ne.difficulty==="medium");le.length===0&&(le=te);const ue=le[Math.floor(Math.random()*le.length)];ue&&(M.current.add(ue.id),P(ue),p(Bd[y].timer),k(!1))},T=A=>{if(b)return;const te=A===C.correctIndex;R(te),k(!0),te?z():B(),setTimeout(()=>{(u>0||te)&&(f(ne=>ne+1),L())},1500)},z=()=>{const A=Bd[y].points;S(te=>te+A),x(te=>{const ne=te+1;if(t){const le=JSON.parse(localStorage.getItem("questProgress")||"{}");le.winStreak=Math.max(le.winStreak||0,ne),le.date=`${new Date().getFullYear()}-${new Date().getMonth()+1}-${new Date().getDate()}`,localStorage.setItem("questProgress",JSON.stringify(le)),ne>=5&&console.log("Win streak quest completed!")}return ne%5===0&&u<3&&(m(le=>Math.min(le+1,3)),o&&J("/sounds/lifeup.mp3",.8)),ne}),ie.addCoins(Math.floor(A/10),"Survival Mode - Correct Answer"),ie.addXP(1),o&&J("/sounds/correct.mp3",.7)},B=()=>{x(0),m(A=>{const te=A-1;return te<=0&&(c("gameOver"),O()),te}),o&&J("/sounds/wrong.mp3",.7),Y([200])},G=()=>{B()},$=()=>{const A={questionCount:h,totalScore:j,lives:u,correctStreak:w,timestamp:Date.now()};localStorage.setItem("survival_checkpoint",JSON.stringify(A))},Z=()=>{const A=localStorage.getItem("survival_checkpoint");if(A)try{const te=JSON.parse(A);Date.now()-te.timestamp<864e5?(f(te.questionCount),S(te.totalScore),m(te.lives),x(te.correctStreak),Q(te.questionCount)):localStorage.removeItem("survival_checkpoint")}catch(te){console.error("Failed to load checkpoint:",te)}},U=()=>{localStorage.removeItem("survival_checkpoint"),Q(0)},O=()=>{const A=parseInt(localStorage.getItem("survival_highscore")||"0");j>A&&(localStorage.setItem("survival_highscore",j.toString()),localStorage.setItem("survival_highquestions",h.toString()))},ee=()=>{c("playing"),m(3),f(0),x(0),S(0),g("EASY"),M.current.clear(),U(),L()},W=()=>{c("playing"),L()},H=()=>{K(!0)},X=()=>{if(t){const A=JSON.parse(localStorage.getItem("questProgress")||"{}");A.winStreak=Math.max(A.winStreak||0,w),A.date=`${new Date().getFullYear()}-${new Date().getMonth()+1}-${new Date().getDate()}`,localStorage.setItem("questProgress",JSON.stringify(A)),window.location.href="/profile/quests"}else window.history.go(-1),e()},J=(A,te=.5)=>{try{const ne=new Audio(A);ne.volume=te,ne.play()}catch{}},Y=A=>{navigator.vibrate&&navigator.vibrate(A)};return d.useEffect(()=>(document.body.classList.add("hide-bottom-nav"),()=>{document.body.classList.remove("hide-bottom-nav")}),[]),l==="gameOver"?n.jsxs(n.Fragment,{children:[n.jsx(Lg,{score:j,questionsAnswered:h,highScore:parseInt(localStorage.getItem("survival_highscore")||"0"),checkpoint:F,onRestart:ee,onContinue:F>0?W:null,onBack:H}),V&&n.jsx("div",{className:"fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 px-6",children:n.jsxs("div",{className:"bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-6 max-w-sm w-full shadow-2xl slide-in border border-white/10",children:[n.jsxs("div",{className:"text-center mb-6",children:[n.jsx("div",{className:"text-5xl mb-3",children:"🚪"}),n.jsx("h3",{className:"text-xl font-bold text-white mb-2",children:"Leave the game?"}),n.jsx("p",{className:"text-white/70",children:"Your progress saves at checkpoints!"})]}),n.jsxs("div",{className:"flex gap-3",children:[n.jsx("button",{onClick:()=>K(!1),className:"flex-1 py-3 bg-gradient-to-r from-green-400 to-emerald-500 text-white rounded-2xl font-bold shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]",children:"Keep Playing"}),n.jsx("button",{onClick:X,className:"flex-1 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-2xl font-bold shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]",children:"Exit"})]})]})})]}):C?n.jsxs(n.Fragment,{children:[n.jsx(Ig,{question:C,onAnswer:T,lives:u,questionCount:h,correctStreak:w,totalScore:j,currentDifficulty:y,timeLeft:E,showFeedback:b,lastAnswerCorrect:_,checkpoint:F,onBack:H,soundOn:o,setSoundOn:i}),V&&n.jsx("div",{className:"fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 px-6",children:n.jsxs("div",{className:"bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-6 max-w-sm w-full shadow-2xl slide-in border border-white/10",children:[n.jsxs("div",{className:"text-center mb-6",children:[n.jsx("div",{className:"text-5xl mb-3",children:"🚪"}),n.jsx("h3",{className:"text-xl font-bold text-white mb-2",children:"Leave the game?"}),n.jsx("p",{className:"text-white/70",children:"Your progress saves at checkpoints!"})]}),n.jsxs("div",{className:"flex gap-3",children:[n.jsx("button",{onClick:()=>K(!1),className:"flex-1 py-3 bg-gradient-to-r from-green-400 to-emerald-500 text-white rounded-2xl font-bold shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]",children:"Keep Playing"}),n.jsx("button",{onClick:X,className:"flex-1 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-2xl font-bold shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]",children:"Exit"})]})]})})]}):n.jsx("div",{className:"min-h-screen bg-base-bg text-white flex items-center justify-center",children:n.jsx("div",{className:"text-xl",children:"Loading questions..."})})}const lr=[{id:1,name:"Sandy Beach",emoji:"🏖️",theme:{background:"from-yellow-300 via-orange-300 to-blue-400",accent:"from-yellow-400 to-orange-400",cardBg:"from-amber-500/20 to-yellow-500/20",unlockGradient:"from-yellow-400 to-amber-500"},difficulty:"EASY",difficultyRange:{min:0,max:9},questionDifficulty:["easy"],requiredCorrect:2,timeLimit:300,rewards:{perCorrectAnswer:10,gemChance:.3,gemBonus:5,speedBonus:3,perfectBonus:50,treasurePiece:"🧩",completionCoins:30},description:"Start your adventure on the sunny shores! Easy questions to warm up.",unlockRequirement:null,visualElements:{bgEmojis:["🌊","🐚","🦀","⛱️","🌺"],diggingEmoji:"⛏️",foundEmojis:["💎","🪙","✨"]}},{id:2,name:"Jungle Cave",emoji:"🌴",theme:{background:"from-green-400 via-emerald-500 to-teal-600",accent:"from-green-500 to-emerald-600",cardBg:"from-green-500/20 to-emerald-500/20",unlockGradient:"from-green-400 to-emerald-500"},difficulty:"EASY-MEDIUM",difficultyRange:{min:10,max:24},questionDifficulty:["easy","medium"],requiredCorrect:2,timeLimit:300,rewards:{perCorrectAnswer:15,gemChance:.35,gemBonus:7,speedBonus:5,perfectBonus:75,treasurePiece:"🗝️",completionCoins:50},description:"Explore the mysterious jungle caves! Watch out for tricky vines!",unlockRequirement:{island:1,treasurePiece:!0},visualElements:{bgEmojis:["🌿","🦜","🐒","🦋","🌺"],diggingEmoji:"⛏️",foundEmojis:["💎","🪙","🌟"]}},{id:3,name:"Crystal Mountain",emoji:"⛰️",theme:{background:"from-purple-400 via-pink-400 to-indigo-500",accent:"from-purple-500 to-pink-500",cardBg:"from-purple-500/20 to-pink-500/20",unlockGradient:"from-purple-400 to-pink-500"},difficulty:"MEDIUM",difficultyRange:{min:25,max:49},questionDifficulty:["medium"],requiredCorrect:2,timeLimit:300,rewards:{perCorrectAnswer:20,gemChance:.4,gemBonus:10,speedBonus:7,perfectBonus:100,treasurePiece:"💎",completionCoins:75},description:"Climb the sparkling crystal peaks! Medium challenges await!",unlockRequirement:{island:2,treasurePiece:!0},visualElements:{bgEmojis:["✨","🔮","⭐","🌟","💫"],diggingEmoji:"⚒️",foundEmojis:["💎","🪙","🌈"]}},{id:4,name:"Pirate Ship",emoji:"🏴‍☠️",theme:{background:"from-slate-600 via-blue-600 to-cyan-500",accent:"from-slate-700 to-blue-700",cardBg:"from-slate-500/20 to-blue-500/20",unlockGradient:"from-slate-500 to-blue-600"},difficulty:"MEDIUM-HARD",difficultyRange:{min:50,max:99},questionDifficulty:["medium","hard"],requiredCorrect:2,timeLimit:300,rewards:{perCorrectAnswer:30,gemChance:.45,gemBonus:15,speedBonus:10,perfectBonus:150,treasurePiece:"🗺️",completionCoins:100},description:"Ahoy matey! Navigate the pirate ship's challenging puzzles!",unlockRequirement:{island:3,treasurePiece:!0},visualElements:{bgEmojis:["⚓","🦜","💀","🌊","⛵"],diggingEmoji:"🗡️",foundEmojis:["💎","🪙","👑"]}},{id:5,name:"Volcano Peak",emoji:"🌋",theme:{background:"from-red-500 via-orange-500 to-yellow-500",accent:"from-red-600 to-orange-600",cardBg:"from-red-500/20 to-orange-500/20",unlockGradient:"from-red-500 to-orange-500"},difficulty:"HARD",difficultyRange:{min:100,max:1/0},questionDifficulty:["hard"],requiredCorrect:2,timeLimit:300,rewards:{perCorrectAnswer:50,gemChance:.5,gemBonus:25,speedBonus:15,perfectBonus:200,treasurePiece:"👑",completionCoins:150},description:"The ultimate challenge! Can you conquer the volcano?",unlockRequirement:{island:4,treasurePiece:!0},visualElements:{bgEmojis:["🔥","🌋","💥","⚡","🔴"],diggingEmoji:"⛏️",foundEmojis:["💎","🪙","🏆"]}}],Le={SHOVELS_PER_ISLAND:3,QUESTIONS_PER_ISLAND:3,SPEED_BONUS_THRESHOLD:5,MIN_CORRECT_FOR_TREASURE:2,FINAL_TREASURE_REWARD:200,FINAL_TREASURE_TITLE:"Treasure Master",DIGGING_ANIMATION_DURATION:1500,REWARD_DISPLAY_DURATION:2e3,TRANSITION_DURATION:500,STORAGE_KEYS:{PROGRESS:"treasureHunt_progress",STATS:"treasureHunt_stats",UNLOCKED_ISLANDS:"treasureHunt_unlocked",COMPLETED_ISLANDS:"treasureHunt_completed",TREASURE_PIECES:"treasureHunt_pieces"},SOUNDS:{DIG:"/sounds/dig.mp3",TREASURE_FOUND:"/sounds/treasure.mp3",GEM_FOUND:"/sounds/gem.mp3",WRONG:"/sounds/wrong.mp3",ISLAND_COMPLETE:"/sounds/islandcomplete.mp3",ISLAND_UNLOCK:"/sounds/unlock.mp3",FINAL_TREASURE:"/sounds/victory.mp3",TICK:"/sounds/tick.mp3",SHOVEL_BREAK:"/sounds/break.mp3"}},mn=e=>lr.find(t=>t.id===e),Mg=(e,t)=>{const r=mn(e);if(!r.unlockRequirement)return!0;const s=t[r.unlockRequirement.island];return s&&s.treasurePiece},zg=(e,t)=>{const r={0:["Keep trying! You'll get it! 💪","Don't give up! Adventure awaits! 🌟","Practice makes perfect! 🎯"],1:["Good effort! Almost there! 🌈","Nice try! Keep going! ⭐","You're learning fast! 🚀"],2:["Awesome! You found treasure! 🏆","Great job, explorer! 🎉","You're amazing! ✨"],3:["PERFECT! You're a champion! 👑","INCREDIBLE! Master explorer! 🌟","LEGENDARY performance! 🏆"]},s=r[e]||r[0];return s[Math.floor(Math.random()*s.length)]},Og=e=>lr.map(t=>{var r;return{id:t.id,piece:t.rewards.treasurePiece,collected:((r=e[t.id])==null?void 0:r.treasurePiece)||!1}});function Fg({islands:e,islandProgress:t,onSelectIsland:r,onBack:s,soundOn:a,setSoundOn:o,totalStats:i}){const[l,c]=d.useState(!1),u=Og(t),m=u.filter(f=>f.collected).length,h=Math.round(m/e.length*100);return d.useEffect(()=>(document.body.style.position="fixed",document.body.style.overflow="hidden",document.body.style.width="100%",document.body.style.height="100%",()=>{document.body.style.position="",document.body.style.overflow="",document.body.style.width="",document.body.style.height=""}),[]),n.jsxs("div",{className:"fixed inset-0 bg-gradient-to-b from-sky-400 via-blue-500 to-blue-600 overflow-hidden flex flex-col",children:[n.jsx("style",{jsx:!0,children:`
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0) rotate(0deg); }
          33% { transform: translateY(-15px) translateX(5px) rotate(3deg); }
          66% { transform: translateY(5px) translateX(-5px) rotate(-3deg); }
        }
        
        @keyframes cloudDrift {
          0% { transform: translateX(-100px); opacity: 0.3; }
          50% { opacity: 0.7; }
          100% { transform: translateX(calc(100vw + 100px)); opacity: 0.3; }
        }
        
        @keyframes sparkle {
          0%, 100% { opacity: 0; transform: scale(0) rotate(0deg); }
          50% { opacity: 1; transform: scale(1) rotate(180deg); }
        }
        
        @keyframes pulse {
          0%, 100% { transform: scale(1); filter: brightness(1); }
          50% { transform: scale(1.05); filter: brightness(1.2); }
        }
        
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        
        .float-animation {
          animation: float 4s ease-in-out infinite;
        }
        
        .cloud-drift {
          animation: cloudDrift 20s linear infinite;
        }
        
        .sparkle-animation {
          animation: sparkle 2s ease-in-out infinite;
        }
        
        .pulse-animation {
          animation: pulse 2s ease-in-out infinite;
        }
        
        .bounce-animation {
          animation: bounce 2s ease-in-out infinite;
        }
        
        .glass-card {
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.3);
        }
      `}),n.jsxs("div",{className:"absolute inset-0",children:[n.jsx("div",{className:"absolute top-10 cloud-drift",style:{animationDelay:"0s"},children:n.jsx("div",{className:"text-6xl opacity-40",children:"☁️"})}),n.jsx("div",{className:"absolute top-12 cloud-drift",style:{animationDelay:"7s",animationDuration:"25s"},children:n.jsx("div",{className:"text-5xl opacity-40",children:"☁️"})}),n.jsx("div",{className:"absolute top-10 right-12",children:n.jsx("div",{className:"text-6xl pulse-animation opacity-80",children:"☀️"})}),n.jsx("div",{className:"absolute top-16 left-20 float-animation opacity-60",children:n.jsx("div",{className:"text-2xl",children:"🦜"})})]}),n.jsxs("div",{className:"relative z-20 px-4 pt-[calc(env(safe-area-inset-top)+3rem)]",children:[n.jsxs("div",{className:"flex justify-between items-center mb-3",children:[n.jsx("button",{onClick:s,className:"w-11 h-11 glass-card rounded-2xl shadow-lg flex items-center justify-center hover:scale-105 transition-transform",children:n.jsx("span",{className:"text-xl",children:"⬅"})}),n.jsx("div",{className:"glass-card rounded-2xl px-3 py-2 shadow-lg",children:n.jsxs("div",{className:"text-white font-bold text-center",children:[n.jsx("div",{className:"text-[10px] opacity-90",children:"TREASURE HUNT"}),n.jsx("div",{className:"text-sm",children:"🏝️ Island Explorer 🏝️"})]})}),n.jsx("button",{onClick:()=>o(!a),className:"w-11 h-11 glass-card rounded-2xl shadow-lg flex items-center justify-center hover:scale-105 transition-transform",children:n.jsx("span",{className:"text-xl",children:a?"🔊":"🔇"})})]}),n.jsxs("div",{className:"glass-card rounded-2xl p-3 shadow-xl mt-2",children:[n.jsxs("div",{className:"flex items-center justify-between mb-2",children:[n.jsx("span",{className:"text-white font-bold text-sm",children:"Adventure Progress"}),n.jsxs("span",{className:"text-white font-bold text-sm",children:[h,"%"]})]}),n.jsx("div",{className:"w-full h-2.5 bg-white/20 rounded-full overflow-hidden",children:n.jsx("div",{className:"h-full bg-gradient-to-r from-yellow-400 to-amber-500 transition-all duration-1000",style:{width:`${h}%`}})}),n.jsx("button",{onClick:()=>c(!0),className:"mt-2.5 w-full py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-bold text-sm hover:scale-[1.02] transition-transform",children:n.jsxs("div",{className:"flex items-center justify-center gap-2",children:[n.jsx("span",{children:"🏆"}),n.jsxs("span",{children:["Treasure Pieces: ",m,"/5"]}),n.jsx("span",{children:"🏆"})]})})]})]}),n.jsx("div",{className:"flex-1 flex items-center justify-center px-4 py-4",children:n.jsxs("div",{className:"w-full max-w-md",children:[n.jsx("div",{className:"grid grid-cols-2 gap-3",children:e.slice(0,4).map(f=>{const w=t[f.id],x=w==null?void 0:w.unlocked,j=w==null?void 0:w.treasurePiece,S=w==null?void 0:w.perfectScore;return n.jsxs("button",{onClick:()=>r(f.id),disabled:!x,className:`relative aspect-square rounded-2xl transition-all ${x?"hover:scale-105 active:scale-95 shadow-xl":"opacity-50 grayscale"}`,children:[n.jsx("div",{className:`absolute inset-0 rounded-2xl bg-gradient-to-br ${x?f.theme.background:"from-gray-400 to-gray-500"}`,children:x&&n.jsxs(n.Fragment,{children:[n.jsx("div",{className:"absolute top-1 right-1 text-lg sparkle-animation",children:"✨"}),n.jsx("div",{className:"absolute bottom-1 left-1 text-sm sparkle-animation",style:{animationDelay:"1s"},children:"⭐"})]})}),!x&&n.jsx("div",{className:"absolute inset-0 rounded-2xl bg-black/30 flex items-center justify-center",children:n.jsx("div",{className:"text-4xl",children:"🔒"})}),n.jsxs("div",{className:"relative h-full flex flex-col items-center justify-center p-3",children:[n.jsx("div",{className:"absolute top-1 left-1 w-7 h-7 bg-white/30 rounded-full flex items-center justify-center",children:n.jsx("span",{className:"text-white font-bold text-sm",children:f.id})}),S&&n.jsx("div",{className:"absolute top-1 right-1 text-lg",children:"💯"}),n.jsx("div",{className:`text-5xl mb-1 ${x?"bounce-animation":""}`,children:x?f.emoji:"❓"}),n.jsx("div",{className:"text-white font-bold text-sm text-center mb-1",children:f.name}),n.jsx("div",{className:`px-2 py-0.5 rounded-full text-[10px] font-bold ${x?"bg-white/30":"bg-black/30"} text-white`,children:f.difficulty}),j&&n.jsx("div",{className:"absolute bottom-1 text-2xl pulse-animation",children:f.rewards.treasurePiece}),(w==null?void 0:w.attempts)>0&&n.jsxs("div",{className:"absolute -bottom-1 -right-1 bg-white/90 text-gray-800 rounded-full px-2 py-0.5 text-[10px] font-bold flex items-center gap-1",children:[n.jsxs("span",{children:[w.bestScore,"/3"]}),n.jsx("span",{children:"⭐"})]})]})]},f.id)})}),n.jsx("div",{className:"flex justify-center mt-3",children:e.slice(4,5).map(f=>{const w=t[f.id],x=w==null?void 0:w.unlocked,j=w==null?void 0:w.treasurePiece,S=w==null?void 0:w.perfectScore;return n.jsxs("button",{onClick:()=>r(f.id),disabled:!x,className:`relative w-[calc(50%-6px)] aspect-square rounded-2xl transition-all ${x?"hover:scale-105 active:scale-95 shadow-xl":"opacity-50 grayscale"}`,children:[n.jsxs("div",{className:`absolute inset-0 rounded-2xl bg-gradient-to-br ${x?f.theme.background:"from-gray-400 to-gray-500"}`,children:[x&&n.jsxs(n.Fragment,{children:[n.jsx("div",{className:"absolute top-1 right-1 text-lg sparkle-animation",children:"✨"}),n.jsx("div",{className:"absolute bottom-1 left-1 text-sm sparkle-animation",style:{animationDelay:"1s"},children:"⭐"})]}),!x&&n.jsx("div",{className:"absolute inset-0 rounded-2xl bg-gradient-to-t from-yellow-400/20 to-transparent animate-pulse"})]}),!x&&n.jsx("div",{className:"absolute inset-0 rounded-2xl bg-black/30 flex items-center justify-center",children:n.jsx("div",{className:"text-4xl",children:"🔒"})}),n.jsxs("div",{className:"relative h-full flex flex-col items-center justify-center p-3",children:[n.jsx("div",{className:"absolute top-1 left-1 w-7 h-7 bg-white/30 rounded-full flex items-center justify-center",children:n.jsx("span",{className:"text-white font-bold text-sm",children:f.id})}),S&&n.jsx("div",{className:"absolute top-1 right-1 text-lg",children:"💯"}),n.jsx("div",{className:`text-5xl mb-1 ${x?"bounce-animation":""}`,children:x?f.emoji:"👑"}),n.jsx("div",{className:"text-white font-bold text-sm text-center mb-1",children:f.name}),n.jsx("div",{className:`px-2 py-0.5 rounded-full text-[10px] font-bold ${x?"bg-white/30":"bg-black/30"} text-white`,children:f.difficulty}),j&&n.jsx("div",{className:"absolute bottom-1 text-2xl pulse-animation",children:f.rewards.treasurePiece}),(w==null?void 0:w.attempts)>0&&n.jsxs("div",{className:"absolute -bottom-1 -right-1 bg-white/90 text-gray-800 rounded-full px-2 py-0.5 text-[10px] font-bold flex items-center gap-1",children:[n.jsxs("span",{children:[w.bestScore,"/3"]}),n.jsx("span",{children:"⭐"})]})]})]},f.id)})})]})}),n.jsx("div",{className:"relative z-20 px-4 pb-[calc(env(safe-area-inset-bottom)+3rem)]",children:n.jsx("div",{className:"bg-gradient-to-r from-indigo-500/30 to-purple-500/30 backdrop-blur-lg rounded-2xl shadow-xl border border-white/20",children:n.jsxs("div",{className:"grid grid-cols-3 gap-2 text-center",children:[n.jsxs("div",{className:"relative",children:[n.jsx("div",{className:"text-2xl mb-0.5 filter drop-shadow-lg",children:"💰"}),n.jsx("div",{className:"text-yellow-300 font-black text-lg",children:i.totalCoinsEarned}),n.jsx("div",{className:"text-white/80 text-[10px] font-medium",children:"Total Coins"})]}),n.jsxs("div",{className:"relative",children:[n.jsx("div",{className:"text-2xl mb-0.5 filter drop-shadow-lg",children:"💎"}),n.jsx("div",{className:"text-cyan-300 font-black text-lg",children:i.totalGemsFound}),n.jsx("div",{className:"text-white/80 text-[10px] font-medium",children:"Gems Found"})]}),n.jsxs("div",{className:"relative",children:[n.jsx("div",{className:"text-2xl mb-0.5 filter drop-shadow-lg",children:"📝"}),n.jsxs("div",{className:"text-green-300 font-black text-lg",children:[i.totalCorrectAnswers,"/",i.totalQuestionsAnswered]}),n.jsx("div",{className:"text-white/80 text-[10px] font-medium",children:"Correct"})]})]})})}),l&&n.jsx("div",{className:"fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 px-6",children:n.jsxs("div",{className:"bg-gradient-to-br from-purple-600 to-pink-600 rounded-3xl p-6 max-w-sm w-full shadow-2xl",children:[n.jsx("h3",{className:"text-2xl font-bold text-white text-center mb-6",children:"🏆 Treasure Collection 🏆"}),n.jsx("div",{className:"flex justify-center gap-4 mb-6",children:u.map((f,w)=>n.jsx("div",{className:`text-5xl ${f.collected?"":"opacity-30 grayscale"}`,children:f.collected?f.piece:"❓"},f.id))}),n.jsx("div",{className:"text-center text-white mb-6",children:m===5?n.jsxs("div",{children:[n.jsx("p",{className:"text-lg font-bold mb-2",children:"🎉 COMPLETE! 🎉"}),n.jsx("p",{className:"text-sm opacity-90",children:"You're a true Treasure Master!"})]}):n.jsx("p",{className:"text-sm opacity-90",children:"Collect all 5 pieces to unlock the final treasure!"})}),n.jsx("button",{onClick:()=>c(!1),className:"w-full py-3 bg-white/20 backdrop-blur rounded-2xl text-white font-bold hover:bg-white/30 transition-colors",children:"Close"})]})})]})}function $g({island:e,progress:t,onStart:r,onClose:s,soundOn:a}){const[o,i]=d.useState(!1);d.useEffect(()=>{i(!0)},[]),d.useEffect(()=>{const f=w=>{s()};return window.history.pushState({islandDetail:!0},"",window.location.pathname),window.addEventListener("popstate",f),()=>window.removeEventListener("popstate",f)},[s]);const l=(t==null?void 0:t.attempts)>0,c=t==null?void 0:t.treasurePiece;t==null||t.perfectScore;const u=(t==null?void 0:t.bestScore)||0,m=()=>{if(a){const f=new Audio("/sounds/start.mp3");f.volume=.5,f.play().catch(()=>{})}r()},h=f=>{const w=Math.floor(f/60),x=f%60;return`${w}:${x.toString().padStart(2,"0")}`};return n.jsxs("div",{className:"fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50 p-4",children:[n.jsx("style",{jsx:!0,children:`
        @keyframes slideUp {
          from { transform: translateY(100px) scale(0.9); opacity: 0; }
          to { transform: translateY(0) scale(1); opacity: 1; }
        }
        
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        
        .slide-up {
          animation: slideUp 0.5s ease-out forwards;
        }
        
        .pulse-animation {
          animation: pulse 2s ease-in-out infinite;
        }
      `}),n.jsxs("div",{className:`relative w-full max-w-sm bg-gradient-to-br ${e.theme.background} rounded-2xl shadow-2xl ${o?"slide-up":""}`,children:[n.jsx("div",{className:"relative p-4 pb-2",children:n.jsxs("div",{className:"text-center",children:[n.jsx("div",{className:"text-6xl mb-2 pulse-animation",children:e.emoji}),n.jsx("h2",{className:"text-2xl font-black text-white",children:e.name}),n.jsx("div",{className:"inline-block px-3 py-1 bg-white/20 backdrop-blur rounded-full mt-2",children:n.jsxs("span",{className:"text-white font-bold text-sm",children:["Level ",e.id," • ",e.difficulty]})})]})}),n.jsxs("div",{className:"px-4 py-3 space-y-2",children:[n.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[n.jsxs("div",{className:"bg-black/10 backdrop-blur rounded-xl p-3 text-center",children:[n.jsx("div",{className:"text-white/70 text-xs mb-1",children:"Time"}),n.jsx("div",{className:"text-white font-bold",children:h(e.timeLimit)})]}),n.jsxs("div",{className:"bg-black/10 backdrop-blur rounded-xl p-3 text-center",children:[n.jsx("div",{className:"text-white/70 text-xs mb-1",children:"Questions"}),n.jsx("div",{className:"text-white font-bold",children:Le.QUESTIONS_PER_ISLAND})]})]}),n.jsxs("div",{className:"bg-black/10 backdrop-blur rounded-xl p-3 flex items-center justify-between",children:[n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx("span",{className:"text-2xl",children:e.rewards.treasurePiece}),n.jsx("span",{className:"text-white font-medium",children:"To Win"})]}),n.jsxs("span",{className:"text-white font-bold",children:[e.requiredCorrect,"/3 Correct"]})]}),n.jsxs("div",{className:"bg-black/10 backdrop-blur rounded-xl p-3",children:[n.jsx("div",{className:"text-white font-bold text-sm mb-2",children:"Rewards"}),n.jsxs("div",{className:"grid grid-cols-4 gap-2 text-center",children:[n.jsxs("div",{children:[n.jsx("div",{className:"text-xl",children:"💰"}),n.jsx("div",{className:"text-white/70 text-xs",children:e.rewards.perCorrectAnswer})]}),n.jsxs("div",{children:[n.jsx("div",{className:"text-xl",children:"💎"}),n.jsxs("div",{className:"text-white/70 text-xs",children:[Math.round(e.rewards.gemChance*100),"%"]})]}),n.jsxs("div",{children:[n.jsx("div",{className:"text-xl",children:"⚡"}),n.jsxs("div",{className:"text-white/70 text-xs",children:["+",e.rewards.speedBonus]})]}),n.jsxs("div",{children:[n.jsx("div",{className:"text-xl",children:"🏆"}),n.jsxs("div",{className:"text-white/70 text-xs",children:["+",e.rewards.perfectBonus]})]})]})]}),l&&n.jsx("div",{className:"bg-black/10 backdrop-blur rounded-xl p-3",children:n.jsxs("div",{className:"flex items-center justify-between",children:[n.jsx("div",{className:"flex gap-1",children:[...Array(3)].map((f,w)=>n.jsx("span",{className:"text-lg",children:w<u?"⭐":"☆"},w))}),n.jsxs("div",{className:"text-white text-sm",children:[n.jsxs("span",{className:"font-bold",children:[u,"/3"]})," • ",t.attempts," tries"]}),c&&n.jsx("div",{className:"text-2xl",children:e.rewards.treasurePiece})]})})]}),n.jsxs("div",{className:"p-4 pt-2 space-y-2",children:[n.jsx("button",{onClick:m,className:"w-full py-3 bg-gradient-to-r from-green-400 to-emerald-500 text-white rounded-xl font-black text-base shadow-lg hover:shadow-xl transition-all hover:scale-[1.02] active:scale-[0.98]",children:n.jsxs("span",{className:"flex items-center justify-center gap-2",children:[n.jsx("span",{className:"text-xl",children:"🏴‍☠️"}),n.jsx("span",{children:l?"Play Again":"Start Adventure"}),n.jsx("span",{className:"text-xl",children:"🏴‍☠️"})]})}),n.jsx("button",{onClick:s,className:"w-full py-2 bg-white/20 backdrop-blur text-white rounded-xl font-bold text-sm hover:bg-white/30 transition-colors",children:"Back to Map"})]})]})]})}function Bg({shovelsRemaining:e,showBreak:t=!1}){const[r,s]=d.useState(!1),[a,o]=d.useState(e),i=3;return d.useEffect(()=>{e<a&&(s(!0),setTimeout(()=>s(!1),1e3)),o(e)},[e,a]),n.jsxs("div",{className:"inline-block",children:[n.jsx("style",{jsx:!0,children:`
        @keyframes shovelBreak {
          0% { 
            transform: rotate(0deg) scale(1); 
            opacity: 1; 
          }
          25% { 
            transform: rotate(-15deg) scale(1.1); 
          }
          50% { 
            transform: rotate(45deg) scale(0.9); 
            opacity: 0.8;
          }
          75% {
            transform: rotate(90deg) scale(0.7);
            opacity: 0.5;
          }
          100% { 
            transform: rotate(135deg) scale(0.5); 
            opacity: 0;
          }
        }
        
        @keyframes shake {
          0%, 100% { transform: translateX(0) rotate(0deg); }
          10% { transform: translateX(-2px) rotate(-2deg); }
          20% { transform: translateX(2px) rotate(2deg); }
          30% { transform: translateX(-2px) rotate(-2deg); }
          40% { transform: translateX(2px) rotate(2deg); }
          50% { transform: translateX(0) rotate(0deg); }
        }
        
        @keyframes pulse {
          0%, 100% { 
            transform: scale(1); 
            filter: drop-shadow(0 0 0 rgba(251, 191, 36, 0));
          }
          50% { 
            transform: scale(1.05); 
            filter: drop-shadow(0 0 10px rgba(251, 191, 36, 0.6));
          }
        }
        
        @keyframes crack {
          0% { 
            clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
          }
          100% { 
            clip-path: polygon(0 0, 45% 0, 55% 45%, 45% 100%, 0 100%);
          }
        }
        
        @keyframes fall {
          0% { 
            transform: translateY(0) rotate(0deg);
            opacity: 1;
          }
          100% { 
            transform: translateY(30px) rotate(25deg);
            opacity: 0;
          }
        }
        
        .shovel-break {
          animation: shovelBreak 0.8s ease-out forwards;
        }
        
        .shovel-shake {
          animation: shake 0.5s ease-in-out;
        }
        
        .shovel-pulse {
          animation: pulse 2s ease-in-out infinite;
        }
        
        .shovel-crack {
          position: relative;
          animation: crack 0.3s ease-out forwards;
        }
        
        .shovel-fall {
          animation: fall 0.8s ease-out forwards;
        }
        
        .glass-badge {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
      `}),n.jsx("div",{className:"glass-badge rounded-xl px-4 py-2 shadow-lg",children:n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx("span",{className:"text-gray-800 font-bold text-xs",children:"Shovels:"}),n.jsx("div",{className:"flex gap-2",children:[...Array(i)].map((l,c)=>{const u=c<e,m=r&&c===e;return n.jsxs("div",{className:"relative w-10 h-10 flex items-center justify-center",children:[n.jsx("div",{className:`
                    text-3xl transition-all duration-300
                    ${u?"shovel-pulse":""}
                    ${m?"shovel-break":""}
                    ${!u&&!m?"opacity-30 grayscale":""}
                  `,children:u||m?"⛏️":"🪦"}),m&&n.jsxs(n.Fragment,{children:[n.jsx("div",{className:"absolute inset-0 pointer-events-none",children:n.jsxs("svg",{className:"w-full h-full",viewBox:"0 0 40 40",children:[n.jsx("path",{d:"M20,10 L18,20 L22,30",stroke:"#ff4444",strokeWidth:"2",fill:"none",opacity:"0.8",className:"shovel-crack"}),n.jsx("path",{d:"M15,15 L20,20 L25,18",stroke:"#ff4444",strokeWidth:"1.5",fill:"none",opacity:"0.6",className:"shovel-crack",style:{animationDelay:"0.1s"}})]})}),n.jsxs("div",{className:"absolute inset-0 pointer-events-none",children:[n.jsx("span",{className:"absolute top-0 left-1/2 text-xs shovel-fall",children:"💔"}),n.jsx("span",{className:"absolute top-1/2 left-0 text-xs shovel-fall",style:{animationDelay:"0.2s"},children:"✨"}),n.jsx("span",{className:"absolute top-1/2 right-0 text-xs shovel-fall",style:{animationDelay:"0.3s"},children:"💥"})]})]}),n.jsx("div",{className:"absolute -bottom-1 left-1/2 -translate-x-1/2",children:n.jsx("span",{className:`text-xs font-bold ${u?"text-blue-600":"text-white/30"}`,children:c+1})})]},c)})}),e===0&&n.jsx("span",{className:"text-red-400 text-sm font-bold animate-pulse ml-2",children:"No shovels left!"}),e===1&&n.jsx("span",{className:"text-red-500 text-sm font-bold ml-2",children:"Last chance!"})]})})]})}function Ug({island:e,foundGem:t,onComplete:r}){const[s,a]=d.useState("digging"),[o,i]=d.useState(!1),[l,c]=d.useState(!1);return d.useEffect(()=>{(async()=>{await new Promise(m=>setTimeout(m,800)),a("revealing"),i(!0),t&&(await new Promise(m=>setTimeout(m,400)),c(!0)),await new Promise(m=>setTimeout(m,1e3)),a("complete"),await new Promise(m=>setTimeout(m,300)),r()})()},[t,r]),n.jsxs("div",{className:"fixed inset-0 z-40 pointer-events-none flex items-center justify-center",children:[n.jsx("style",{jsx:!0,children:`
        @keyframes dig {
          0%, 100% { 
            transform: rotate(-15deg) translateY(0); 
          }
          25% { 
            transform: rotate(15deg) translateY(-20px); 
          }
          50% { 
            transform: rotate(-15deg) translateY(10px); 
          }
          75% { 
            transform: rotate(15deg) translateY(-10px); 
          }
        }
        
        @keyframes dirtFly {
          0% { 
            transform: translate(0, 0) scale(1);
            opacity: 1;
          }
          100% { 
            transform: translate(var(--fly-x), var(--fly-y)) scale(0.3);
            opacity: 0;
          }
        }
        
        @keyframes treasureReveal {
          0% { 
            transform: translateY(50px) scale(0);
            opacity: 0;
          }
          50% {
            transform: translateY(-10px) scale(1.2);
            opacity: 1;
          }
          100% { 
            transform: translateY(0) scale(1);
            opacity: 1;
          }
        }
        
        @keyframes treasureFloat {
          0%, 100% { 
            transform: translateY(0) rotate(0deg);
          }
          50% { 
            transform: translateY(-10px) rotate(5deg);
          }
        }
        
        @keyframes gemSparkle {
          0% { 
            transform: scale(0) rotate(0deg);
            opacity: 0;
          }
          50% {
            transform: scale(1.3) rotate(180deg);
            opacity: 1;
          }
          100% { 
            transform: scale(1) rotate(360deg);
            opacity: 1;
          }
        }
        
        @keyframes coinSpin {
          0% { 
            transform: rotateY(0deg) scale(1);
          }
          100% { 
            transform: rotateY(360deg) scale(1);
          }
        }
        
        @keyframes starBurst {
          0% { 
            transform: scale(0) rotate(0deg);
            opacity: 1;
          }
          100% { 
            transform: scale(2) rotate(180deg);
            opacity: 0;
          }
        }
        
        @keyframes radiateGlow {
          0%, 100% { 
            box-shadow: 0 0 20px rgba(255, 215, 0, 0.6);
          }
          50% { 
            box-shadow: 0 0 40px rgba(255, 215, 0, 0.9);
          }
        }
        
        .dig-animation {
          animation: dig 0.3s ease-in-out infinite;
        }
        
        .dirt-particle {
          position: absolute;
          animation: dirtFly 0.8s ease-out forwards;
        }
        
        .treasure-reveal {
          animation: treasureReveal 0.8s ease-out forwards;
        }
        
        .treasure-float {
          animation: treasureFloat 2s ease-in-out infinite;
        }
        
        .gem-sparkle {
          animation: gemSparkle 0.6s ease-out forwards;
        }
        
        .coin-spin {
          animation: coinSpin 2s linear infinite;
        }
        
        .star-burst {
          animation: starBurst 1s ease-out forwards;
        }
        
        .glow-effect {
          animation: radiateGlow 1.5s ease-in-out infinite;
        }
      `}),s==="digging"&&n.jsxs("div",{className:"relative",children:[n.jsx("div",{className:"text-8xl dig-animation",children:e.visualElements.diggingEmoji}),[...Array(8)].map((u,m)=>n.jsx("div",{className:"dirt-particle text-4xl",style:{"--fly-x":`${(Math.random()-.5)*200}px`,"--fly-y":`${-Math.random()*150-50}px`,left:"50%",top:"60%",animationDelay:`${m*.1}s`},children:"🟫"},m)),n.jsx("div",{className:"absolute -bottom-4 left-1/2 -translate-x-1/2",children:n.jsx("div",{className:"text-6xl opacity-50",children:"💨"})})]}),s==="revealing"&&n.jsxs("div",{className:"relative",children:[o&&n.jsxs("div",{className:"relative",children:[n.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:n.jsx("div",{className:"w-32 h-32 rounded-full bg-yellow-400/30 blur-xl glow-effect"})}),n.jsxs("div",{className:"relative flex items-center justify-center",children:[n.jsx("div",{className:"text-7xl treasure-reveal treasure-float",children:"💰"}),n.jsx("div",{className:"absolute text-5xl coin-spin",style:{left:"-30px"},children:"🪙"}),n.jsx("div",{className:"absolute text-5xl coin-spin",style:{right:"-30px",animationDelay:"0.5s"},children:"🪙"}),n.jsx("div",{className:"absolute text-4xl coin-spin",style:{top:"-30px",animationDelay:"1s"},children:"🪙"})]}),[...Array(6)].map((u,m)=>n.jsx("div",{className:"absolute text-3xl star-burst",style:{left:"50%",top:"50%",transform:`translate(-50%, -50%) rotate(${m*60}deg) translateY(-40px)`,animationDelay:`${m*.1}s`},children:"⭐"},m))]}),l&&n.jsxs("div",{className:"absolute -top-10 left-1/2 -translate-x-1/2",children:[n.jsxs("div",{className:"relative",children:[n.jsx("div",{className:"text-6xl gem-sparkle",children:"💎"}),n.jsx("div",{className:"absolute -top-2 -left-2 text-2xl animate-pulse",children:"✨"}),n.jsx("div",{className:"absolute -top-2 -right-2 text-2xl animate-pulse",style:{animationDelay:"0.3s"},children:"✨"}),n.jsx("div",{className:"absolute -bottom-2 left-1/2 -translate-x-1/2 text-2xl animate-pulse",style:{animationDelay:"0.6s"},children:"✨"})]}),n.jsx("div",{className:"absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap",children:n.jsx("span",{className:"text-cyan-300 font-black text-lg drop-shadow-lg",children:"RARE GEM!"})})]}),n.jsx("div",{className:"absolute -bottom-16 left-1/2 -translate-x-1/2 text-center",children:n.jsx("div",{className:"text-white font-black text-2xl drop-shadow-lg",children:t?"AMAZING FIND!":"TREASURE FOUND!"})})]}),s==="complete"&&n.jsx("div",{className:"relative opacity-0 transition-opacity duration-300",children:n.jsx("div",{className:"text-7xl",children:"✅"})})]})}function Yg({island:e,question:t,questionNumber:r,totalQuestions:s,shovelsRemaining:a,timeRemaining:o,coinsEarned:i,gemsFound:l,onAnswer:c,onQuit:u,soundOn:m,setSoundOn:h}){const[f,w]=d.useState(null),[x,j]=d.useState(!1),[S,y]=d.useState(!1),[g,v]=d.useState(!1),[N,C]=d.useState(!1),[P,E]=d.useState(!1),[p,b]=d.useState(!1),k=d.useRef(null);d.useEffect(()=>{w(null),j(!1),y(!1),v(!1),C(!1),b(!1)},[t]),d.useEffect(()=>{const V=K=>{K.stopImmediatePropagation(),P||(E(!0),window.history.pushState({questionScreen:!0},"",window.location.pathname))};return window.history.pushState({questionScreen:!0},"",window.location.pathname),window.addEventListener("popstate",V,!0),()=>window.removeEventListener("popstate",V,!0)},[P]);const _=V=>{const K=Math.floor(V/60),q=V%60;return`${K}:${q.toString().padStart(2,"0")}`},R=()=>o<=10?"critical":o<=30?"warning":"normal",F=V=>{if(p||x)return;w(V),b(!0);const K=V===t.correctIndex;y(K),setTimeout(()=>{if(j(!0),m)if(K){const q=new Audio("/sounds/dig.mp3");q.volume=.5,q.play().catch(()=>{})}else{const q=new Audio("/sounds/wrong.mp3");q.volume=.5,q.play().catch(()=>{})}K&&(v(!0),Math.random()<e.rewards.gemChance&&setTimeout(()=>{if(C(!0),m){const M=new Audio("/sounds/gem.mp3");M.volume=.6,M.play().catch(()=>{})}},800)),setTimeout(()=>{c(V)},K?2e3:1500)},300)},Q=R();return n.jsxs("div",{className:`min-h-screen bg-gradient-to-br ${e.theme.background} relative overflow-hidden`,children:[n.jsx("style",{jsx:!0,children:`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-10px); }
          75% { transform: translateX(10px); }
        }
        
        @keyframes pulse {
          0%, 100% { transform: scale(1); filter: brightness(1); }
          50% { transform: scale(1.1); filter: brightness(1.2); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes slideIn {
          from { transform: translateX(-100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        
        @keyframes correctPulse {
          0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.7); }
          50% { transform: scale(1.05); box-shadow: 0 0 20px 10px rgba(34, 197, 94, 0); }
          100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(34, 197, 94, 0); }
        }
        
        @keyframes wrongShake {
          0%, 100% { transform: translateX(0); }
          10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
          20%, 40%, 60%, 80% { transform: translateX(5px); }
        }
        
        @keyframes coinFloat {
          0% { transform: translateY(0) rotate(0deg); opacity: 1; }
          100% { transform: translateY(-50px) rotate(360deg); opacity: 0; }
        }
        
        @keyframes gemSparkle {
          0%, 100% { transform: scale(1) rotate(0deg); filter: brightness(1); }
          50% { transform: scale(1.3) rotate(180deg); filter: brightness(1.5); }
        }
        
        @keyframes timePulse {
          0%, 100% { transform: scale(1); color: inherit; }
          50% { transform: scale(1.1); color: #ef4444; }
        }
        
        .shake-animation {
          animation: shake 0.5s ease-in-out;
        }
        
        .pulse-animation {
          animation: pulse 2s ease-in-out infinite;
        }
        
        .float-animation {
          animation: float 3s ease-in-out infinite;
        }
        
        .slide-in {
          animation: slideIn 0.5s ease-out;
        }
        
        .correct-pulse {
          animation: correctPulse 1s ease-out;
        }
        
        .wrong-shake {
          animation: wrongShake 0.5s ease-out;
        }
        
        .coin-float {
          animation: coinFloat 1s ease-out forwards;
        }
        
        .gem-sparkle {
          animation: gemSparkle 1s ease-in-out;
        }
        
        .time-pulse-critical {
          animation: timePulse 1s ease-in-out infinite;
        }
        
        .glass-card {
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.3);
        }
        
        .option-card {
          transition: all 0.3s ease;
          cursor: pointer;
        }
        
        .option-card:not(.disabled):hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        }
        
        .option-card.disabled {
          cursor: not-allowed;
          opacity: 0.7;
        }
        
        .progress-bar {
          transition: width 0.3s ease;
        }
      `}),n.jsx("div",{className:"absolute inset-0 pointer-events-none",children:e.visualElements.bgEmojis.map((V,K)=>n.jsx("div",{className:"absolute text-7xl opacity-10 float-animation",style:{top:`${20+K*15}%`,left:`${10+K*18}%`,animationDelay:`${K*.5}s`,animationDuration:`${3+K}s`},children:V},K))}),n.jsxs("div",{className:"relative z-10 px-3 pt-[calc(env(safe-area-inset-top)+4rem)]",children:[n.jsxs("div",{className:"flex justify-between items-center mb-3",children:[n.jsx("button",{onClick:()=>E(!0),className:"w-10 h-10 glass-card rounded-xl shadow-lg flex items-center justify-center hover:scale-105 transition-transform",children:n.jsx("span",{className:"text-xl",children:"⬅️"})}),n.jsx("div",{className:"glass-card rounded-xl px-3 py-1.5 shadow-lg",children:n.jsxs("div",{className:"flex items-center gap-1.5",children:[n.jsx("span",{className:"text-xl",children:e.emoji}),n.jsx("span",{className:"text-gray-800 font-bold text-sm",children:e.name})]})}),n.jsx("button",{onClick:()=>h(!m),className:"w-10 h-10 glass-card rounded-xl shadow-lg flex items-center justify-center hover:scale-105 transition-transform",children:n.jsx("span",{className:"text-xl",children:m?"🔊":"🔇"})})]}),n.jsxs("div",{className:"glass-card rounded-xl p-3 shadow-xl mb-3",children:[n.jsxs("div",{className:"grid grid-cols-4 gap-2",children:[n.jsxs("div",{className:"text-center",children:[n.jsx("div",{className:`text-xl font-black ${Q==="critical"?"text-red-600 time-pulse-critical":Q==="warning"?"text-orange-600":"text-gray-800"}`,children:_(o)}),n.jsx("div",{className:"text-[10px] text-gray-700 font-medium",children:"Time"})]}),n.jsxs("div",{className:"text-center",children:[n.jsxs("div",{className:"text-xl font-black text-gray-800",children:[r,"/",s]}),n.jsx("div",{className:"text-[10px] text-gray-700 font-medium",children:"Question"})]}),n.jsxs("div",{className:"text-center relative",children:[n.jsx("div",{className:"text-xl font-black text-orange-600",children:i}),n.jsx("div",{className:"text-[10px] text-gray-700 font-medium",children:"Coins"}),x&&S&&n.jsx("div",{className:"absolute -top-3 left-1/2 -translate-x-1/2",children:n.jsxs("span",{className:"text-orange-600 font-bold text-xs coin-float",children:["+",e.rewards.perCorrectAnswer]})})]}),n.jsxs("div",{className:"text-center relative",children:[n.jsx("div",{className:"text-xl font-black text-blue-600",children:l}),n.jsx("div",{className:"text-[10px] text-gray-700 font-medium",children:"Gems"}),N&&n.jsx("div",{className:"absolute -top-3 left-1/2 -translate-x-1/2",children:n.jsx("span",{className:"text-blue-600 text-xl gem-sparkle",children:"💎"})})]})]}),n.jsx("div",{className:"mt-2",children:n.jsx("div",{className:"w-full h-1.5 bg-gray-800/20 rounded-full overflow-hidden",children:n.jsx("div",{className:"h-full bg-gradient-to-r from-green-500 to-emerald-600 progress-bar",style:{width:`${(r-1)/s*100}%`}})})})]}),n.jsx("div",{className:"flex justify-center mb-3 pt-2",children:n.jsx(Bg,{shovelsRemaining:a,showBreak:x&&!S})})]}),n.jsxs("div",{className:"px-3 pt-8 slide-in",children:[n.jsxs("div",{ref:k,className:`glass-card rounded-2xl shadow-xl p-4 mb-4 ${x&&!S?"wrong-shake":""}`,children:[n.jsx("div",{className:"text-center mb-2",children:n.jsxs("span",{className:"text-xs font-bold text-gray-600 uppercase tracking-wider",children:["Question ",r]})}),n.jsx("h2",{className:"text-lg font-bold text-center text-gray-800 leading-relaxed",children:t.prompt})]}),n.jsx("div",{className:"space-y-2.5",children:t.options.map((V,K)=>{const q=["A","B","C","D"],M=f===K,I=K===t.correctIndex;let D="glass-card option-card",L="border border-gray-800/20";return x&&(I?(D+=" correct-pulse",L="border-2 border-green-500 bg-green-400/20"):M&&!S&&(D+=" wrong-shake",L="border-2 border-red-500 bg-red-400/20"),D+=" disabled"),n.jsx("button",{onClick:()=>F(K),disabled:p,className:`w-full p-3 rounded-xl shadow-lg ${D} ${L}`,children:n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsx("div",{className:`w-10 h-10 rounded-lg bg-gradient-to-br ${K===0?"from-blue-400 to-blue-500":K===1?"from-green-400 to-green-500":K===2?"from-yellow-400 to-yellow-500":"from-purple-400 to-purple-500"} text-white font-bold text-lg flex items-center justify-center shadow-md`,children:q[K]}),n.jsx("span",{className:"flex-1 text-left font-medium text-gray-800 text-sm",children:V}),x&&I&&n.jsx("span",{className:"text-2xl",children:"✅"}),x&&M&&!S&&n.jsx("span",{className:"text-2xl",children:"❌"})]})},K)})}),x&&n.jsx("div",{className:"mt-3 text-center slide-in",children:n.jsx("p",{className:"text-base font-bold text-gray-800",children:S?`Great job! Let's dig for treasure! ${e.visualElements.diggingEmoji}`:"Oops! Your shovel broke! Try the next question! 💪"})})]}),g&&n.jsx(Ug,{island:e,foundGem:N,onComplete:()=>v(!1)}),P&&n.jsx("div",{className:"fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 px-6",children:n.jsxs("div",{className:"bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-6 max-w-sm w-full shadow-2xl slide-in border border-white/10",children:[n.jsxs("div",{className:"text-center mb-6",children:[n.jsx("div",{className:"text-5xl mb-3",children:"🗺️"}),n.jsx("h3",{className:"text-xl font-bold text-white mb-2",children:"Leave the Island?"}),n.jsx("p",{className:"text-white/70",children:"Your progress won't be saved!"})]}),n.jsxs("div",{className:"flex gap-3",children:[n.jsx("button",{onClick:()=>E(!1),className:"flex-1 py-3 bg-gradient-to-r from-green-400 to-emerald-500 text-white rounded-2xl font-bold shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]",children:"Keep Playing"}),n.jsx("button",{onClick:u,className:"flex-1 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-2xl font-bold shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]",children:"Leave Island"})]})]})})]})}function qg({island:e,session:t,earnedTreasure:r,onRetry:s,onContinue:a,soundOn:o}){const[i,l]=d.useState(0),[c,u]=d.useState(!1),[m,h]=d.useState(!1),f=t.correctAnswers===Le.QUESTIONS_PER_ISLAND,w=zg(t.correctAnswers,e.id);return d.useEffect(()=>{const x=t.coinsEarned,j=2e3,S=30,y=x/S;let g=0;const v=setInterval(()=>{g+=y,g>=x?(l(x),clearInterval(v),r&&setTimeout(()=>u(!0),500),setTimeout(()=>h(!0),r?1500:500)):l(Math.floor(g))},j/S);return()=>clearInterval(v)},[t.coinsEarned,r]),n.jsxs("div",{className:`fixed inset-0 bg-gradient-to-br ${e.theme.background} overflow-hidden flex flex-col`,children:[n.jsx("style",{jsx:!0,children:`
        @keyframes slideUp {
          from { transform: translateY(100px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes treasureShine {
          0% { transform: scale(0) rotate(0deg); opacity: 0; }
          50% { transform: scale(1.2) rotate(180deg); opacity: 1; }
          100% { transform: scale(1) rotate(360deg); opacity: 1; }
        }
        
        @keyframes starPop {
          0% { transform: scale(0) rotate(0deg); }
          50% { transform: scale(1.3) rotate(180deg); }
          100% { transform: scale(1) rotate(360deg); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(5deg); }
        }
        
        @keyframes confetti {
          0% { transform: translateY(-100vh) rotate(0deg); opacity: 1; }
          100% { transform: translateY(100vh) rotate(720deg); opacity: 0; }
        }
        
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        
        .slide-up {
          animation: slideUp 0.6s ease-out forwards;
        }
        
        .bounce-animation {
          animation: bounce 2s ease-in-out infinite;
        }
        
        .treasure-shine {
          animation: treasureShine 1s ease-out forwards;
        }
        
        .star-pop {
          animation: starPop 0.5s ease-out forwards;
        }
        
        .float-animation {
          animation: float 3s ease-in-out infinite;
        }
        
        .confetti-fall {
          animation: confetti 3s linear infinite;
        }
        
        .pulse-animation {
          animation: pulse 2s ease-in-out infinite;
        }
        
        .glass-card {
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.3);
        }
      `}),n.jsx("div",{className:"absolute inset-0 pointer-events-none",children:f&&[...Array(10)].map((x,j)=>n.jsx("div",{className:"absolute confetti-fall",style:{left:`${Math.random()*100}%`,animationDelay:`${Math.random()*3}s`,fontSize:`${20+Math.random()*20}px`},children:["🎉","⭐","🎊","✨"][Math.floor(Math.random()*4)]},j))}),n.jsxs("div",{className:"relative z-10 flex-1 flex flex-col items-center justify-center px-4 py-4",children:[n.jsxs("div",{className:"mb-3 text-center slide-up",children:[n.jsx("h1",{className:"text-2xl font-black text-white mb-2",children:r?"TREASURE FOUND!":"ISLAND COMPLETE!"}),n.jsx("div",{className:"text-5xl bounce-animation",children:r?e.rewards.treasurePiece:"🏝️"})]}),n.jsxs("div",{className:"glass-card rounded-2xl p-3 max-w-md w-full mb-2 slide-up",style:{animationDelay:"0.2s",background:"rgba(46, 46, 32, 0.25)"},children:[n.jsxs("div",{className:"text-center mb-2",children:[n.jsxs("div",{className:"text-3xl font-black text-white mb-1",children:[t.correctAnswers,"/",Le.QUESTIONS_PER_ISLAND]}),n.jsx("div",{className:"text-white/80 font-medium",children:"Questions Correct"})]}),m&&n.jsx("div",{className:"flex justify-center gap-2 mb-2",children:[...Array(3)].map((x,j)=>n.jsx("div",{className:`text-3xl ${j<t.correctAnswers?"star-pop":""}`,style:{animationDelay:`${j*.2}s`},children:j<t.correctAnswers?"⭐":"☆"},j))}),c&&r&&n.jsxs("div",{className:"text-center mb-2",children:[n.jsx("div",{className:"text-5xl treasure-shine mb-1",children:e.rewards.treasurePiece}),n.jsx("div",{className:"text-white font-bold text-lg",children:"Treasure Piece Earned!"})]}),n.jsxs("div",{className:"grid grid-cols-2 gap-2 mb-2",children:[n.jsxs("div",{className:"glass-card rounded-2xl p-4 text-center",children:[n.jsx("div",{className:"text-4xl mb-1",children:"🪙"}),n.jsx("div",{className:"text-3xl font-black text-yellow-300",children:i}),n.jsx("div",{className:"text-white/70 text-sm",children:"Coins Earned"})]}),n.jsxs("div",{className:"glass-card rounded-2xl p-4 text-center",children:[n.jsx("div",{className:"text-4xl mb-2",children:"💎"}),n.jsx("div",{className:"text-3xl font-black text-cyan-300",children:t.gemsFound}),n.jsx("div",{className:"text-white/70 text-sm",children:"Gems Found"})]})]}),n.jsx("div",{className:"text-center p-4 bg-white/10 rounded-1xl",children:n.jsx("p",{className:"text-white font-medium text-lg",children:w})}),f&&n.jsx("div",{className:"mt-4 text-center",children:n.jsx("div",{className:"inline-block px-6 py-3 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full",children:n.jsx("span",{className:"text-white font-black text-lg",children:"💯 PERFECT SCORE! 💯"})})})]}),n.jsxs("div",{className:"space-y-3 w-full max-w-md slide-up",style:{animationDelay:"0.4s"},children:[!r&&n.jsx("button",{onClick:s,className:"w-full py-4 bg-gradient-to-r from-orange-400 to-red-500 text-white rounded-2xl font-black text-lg shadow-xl hover:shadow-2xl transition-all hover:scale-[1.02] active:scale-[0.98]",children:n.jsxs("div",{className:"flex items-center justify-center gap-3",children:[n.jsx("span",{className:"text-2xl",children:"🔄"}),n.jsx("span",{children:"Try Again"})]})}),n.jsx("button",{onClick:a,className:"w-full py-3 bg-gradient-to-r from-white to-gray-100 text-gray-800 rounded-2xl font-black text-lg shadow-xl hover:shadow-2xl transition-all hover:scale-[1.02] active:scale-[0.98]",children:n.jsxs("div",{className:"flex items-center justify-center gap-3",children:[n.jsx("span",{className:"text-2xl",children:"🗺️"}),n.jsx("span",{children:"Back to Map"})]})})]})]})]})}function Qg({totalStats:e,onContinue:t,soundOn:r}){const[s,a]=d.useState(!1),[o,i]=d.useState(!1),[l,c]=d.useState(!1),[u,m]=d.useState(!1),[h,f]=d.useState(!1);return d.useEffect(()=>{(async()=>{await new Promise(x=>setTimeout(x,500)),a(!0),await new Promise(x=>setTimeout(x,1e3)),i(!0),f(!0),await new Promise(x=>setTimeout(x,800)),c(!0),await new Promise(x=>setTimeout(x,1e3)),m(!0)})()},[]),n.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-purple-600 via-pink-600 to-yellow-500 relative overflow-hidden",children:[n.jsx("style",{jsx:!0,children:`
        @keyframes chestAppear {
          0% { transform: scale(0) rotate(0deg); opacity: 0; }
          50% { transform: scale(1.2) rotate(10deg); opacity: 1; }
          100% { transform: scale(1) rotate(0deg); opacity: 1; }
        }
        
        @keyframes chestOpen {
          0% { transform: rotateX(0deg); }
          100% { transform: rotateX(-25deg); }
        }
        
        @keyframes treasureGlow {
          0%, 100% { 
            filter: brightness(1) drop-shadow(0 0 30px rgba(255, 215, 0, 0.8)); 
          }
          50% { 
            filter: brightness(1.5) drop-shadow(0 0 50px rgba(255, 215, 0, 1)); 
          }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        
        @keyframes coinRain {
          0% { 
            transform: translateY(-100vh) rotate(0deg); 
            opacity: 1; 
          }
          100% { 
            transform: translateY(100vh) rotate(720deg); 
            opacity: 0; 
          }
        }
        
        @keyframes firework {
          0% { 
            transform: scale(0) rotate(0deg); 
            opacity: 1; 
          }
          50% {
            transform: scale(1) rotate(180deg);
            opacity: 1;
          }
          100% { 
            transform: scale(1.5) rotate(360deg); 
            opacity: 0; 
          }
        }
        
        @keyframes titleShine {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-30px); }
        }
        
        @keyframes sparkle {
          0%, 100% { opacity: 0; transform: scale(0); }
          50% { opacity: 1; transform: scale(1); }
        }
        
        .chest-appear {
          animation: chestAppear 1s ease-out forwards;
        }
        
        .chest-open {
          animation: chestOpen 0.8s ease-out forwards;
          transform-origin: bottom center;
        }
        
        .treasure-glow {
          animation: treasureGlow 2s ease-in-out infinite;
        }
        
        .float-animation {
          animation: float 3s ease-in-out infinite;
        }
        
        .coin-rain {
          animation: coinRain 3s linear infinite;
        }
        
        .firework {
          animation: firework 1.5s ease-out forwards;
        }
        
        .title-shine {
          background: linear-gradient(90deg, 
            #fbbf24, 
            #fff, 
            #fbbf24
          );
          background-size: 200% 100%;
          animation: titleShine 3s linear infinite;
          -webkit-background-clip: text;
          background-clip: text;
        }
        
        .bounce-animation {
          animation: bounce 2s ease-in-out infinite;
        }
        
        .sparkle-animation {
          animation: sparkle 1.5s ease-in-out infinite;
        }
        
        .glass-card {
          background: rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.3);
        }
      `}),h&&n.jsx("div",{className:"fixed inset-0 pointer-events-none",children:[...Array(15)].map((w,x)=>n.jsx("div",{className:"absolute firework",style:{left:`${20+Math.random()*60}%`,top:`${20+Math.random()*60}%`,animationDelay:`${Math.random()*2}s`,fontSize:`${40+Math.random()*40}px`},children:["✨","⭐","💫","🌟"][Math.floor(Math.random()*4)]},x))}),n.jsx("div",{className:"fixed inset-0 pointer-events-none",children:[...Array(20)].map((w,x)=>n.jsx("div",{className:"absolute coin-rain",style:{left:`${Math.random()*100}%`,animationDelay:`${Math.random()*3}s`,animationDuration:`${3+Math.random()*2}s`,fontSize:`${20+Math.random()*20}px`},children:["🪙","💰","💎"][Math.floor(Math.random()*3)]},x))}),n.jsxs("div",{className:"relative z-10 flex flex-col items-center justify-center min-h-screen px-6",children:[n.jsxs("div",{className:"text-center mb-8",children:[n.jsx("h1",{className:"text-6xl font-black text-white mb-4",children:"LEGENDARY!"}),n.jsx("div",{className:"text-8xl bounce-animation",children:"👑"})]}),s&&n.jsxs("div",{className:`relative mb-8 ${s?"chest-appear":""}`,children:[n.jsx("div",{className:`text-[150px] ${o?"chest-open":""}`,children:"📦"}),o&&n.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:lr.map((w,x)=>n.jsx("div",{className:"absolute text-6xl float-animation treasure-glow",style:{transform:`rotate(${x*72}deg) translateY(-100px)`,animationDelay:`${x*.2}s`},children:w.rewards.treasurePiece},w.id))})]}),l&&n.jsxs("div",{className:"glass-card rounded-3xl p-6 max-w-md w-full mb-6",children:[n.jsx("h2",{className:"text-2xl font-black text-white text-center mb-6",children:"🏆 FINAL TREASURE UNLOCKED! 🏆"}),n.jsx("div",{className:"bg-gradient-to-r from-yellow-400 to-amber-500 rounded-2xl p-4 mb-4",children:n.jsxs("div",{className:"text-center",children:[n.jsx("div",{className:"text-5xl mb-2",children:"💰"}),n.jsx("div",{className:"text-4xl font-black text-white",children:Le.FINAL_TREASURE_REWARD}),n.jsx("div",{className:"text-white/90 font-medium",children:"Bonus Coins!"})]})}),n.jsxs("div",{className:"grid grid-cols-2 gap-3 mb-4",children:[n.jsxs("div",{className:"glass-card rounded-xl p-3 text-center",children:[n.jsx("div",{className:"text-3xl mb-1",children:"🏝️"}),n.jsx("div",{className:"text-2xl font-black text-white",children:"5/5"}),n.jsx("div",{className:"text-white/70 text-xs",children:"Islands"})]}),n.jsxs("div",{className:"glass-card rounded-xl p-3 text-center",children:[n.jsx("div",{className:"text-3xl mb-1",children:"🧩"}),n.jsx("div",{className:"text-2xl font-black text-white",children:"5/5"}),n.jsx("div",{className:"text-white/70 text-xs",children:"Treasures"})]}),n.jsxs("div",{className:"glass-card rounded-xl p-3 text-center",children:[n.jsx("div",{className:"text-3xl mb-1",children:"💰"}),n.jsx("div",{className:"text-2xl font-black text-yellow-300",children:e.totalCoinsEarned+Le.FINAL_TREASURE_REWARD}),n.jsx("div",{className:"text-white/70 text-xs",children:"Total Coins"})]}),n.jsxs("div",{className:"glass-card rounded-xl p-3 text-center",children:[n.jsx("div",{className:"text-3xl mb-1",children:"💎"}),n.jsx("div",{className:"text-2xl font-black text-cyan-300",children:e.totalGemsFound}),n.jsx("div",{className:"text-white/70 text-xs",children:"Total Gems"})]})]}),u&&n.jsxs("div",{className:"text-center p-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl",children:[n.jsx("div",{className:"text-3xl mb-2",children:"🏆"}),n.jsx("div",{className:"text-xl font-black text-white title-shine",children:Le.FINAL_TREASURE_TITLE}),n.jsx("div",{className:"text-white/90 text-sm mt-1",children:"New Title Unlocked!"})]})]}),l&&n.jsx("button",{onClick:t,className:"w-full max-w-md py-4 bg-gradient-to-r from-white to-gray-100 text-gray-800 rounded-2xl font-black text-lg shadow-xl hover:shadow-2xl transition-all hover:scale-[1.02] active:scale-[0.98]",children:n.jsxs("div",{className:"flex items-center justify-center gap-3",children:[n.jsx("span",{className:"text-2xl",children:"🎉"}),n.jsx("span",{children:"Complete Adventure"}),n.jsx("span",{className:"text-2xl",children:"🎉"})]})}),n.jsx("div",{className:"absolute inset-0 pointer-events-none",children:[...Array(10)].map((w,x)=>n.jsx("div",{className:"absolute text-2xl sparkle-animation",style:{left:`${Math.random()*100}%`,top:`${Math.random()*100}%`,animationDelay:`${Math.random()*2}s`},children:"✨"},x))})]})]})}function Wg({onBack:e}){const{coins:t,xp:r,level:s,soundOn:a,setSoundOn:o}=Lo(),[i,l]=d.useState(!1),[c,u]=d.useState("map"),[m,h]=d.useState(null),[f,w]=d.useState([]),[x,j]=d.useState(()=>{const D=localStorage.getItem(Le.STORAGE_KEYS.PROGRESS);if(D)try{return JSON.parse(D)}catch(L){console.error("Failed to load progress:",L)}return lr.reduce((L,T)=>(L[T.id]={unlocked:T.id===1,completed:!1,treasurePiece:!1,perfectScore:!1,bestScore:0,attempts:0},L),{})}),[S,y]=d.useState({islandId:null,questions:[],currentQuestionIndex:0,shovelsRemaining:Le.SHOVELS_PER_ISLAND,correctAnswers:0,wrongAnswers:0,timeRemaining:300,gemsFound:0,coinsEarned:0,questionTimes:[],startTime:null}),[g,v]=d.useState(()=>{const D=localStorage.getItem(Le.STORAGE_KEYS.STATS);if(D)try{return JSON.parse(D)}catch(L){console.error("Failed to load stats:",L)}return{totalCoinsEarned:0,totalGemsFound:0,totalTreasurePieces:0,totalQuestionsAnswered:0,totalCorrectAnswers:0,islandsCompleted:0,gameCompleted:!1}}),N=d.useRef(null),C=d.useRef(null);d.useEffect(()=>(P(),window.history.pushState({mode:"treasureHunt"},"",window.location.href),()=>{N.current&&clearInterval(N.current)}),[]),d.useEffect(()=>{localStorage.setItem(Le.STORAGE_KEYS.PROGRESS,JSON.stringify(x))},[x]),d.useEffect(()=>{localStorage.setItem(Le.STORAGE_KEYS.STATS,JSON.stringify(g))},[g]),d.useEffect(()=>(c==="playing"&&S.timeRemaining>0?N.current=setInterval(()=>{y(D=>{const L=D.timeRemaining-1;return L<=0?(_(),{...D,timeRemaining:0}):(L===30&&a&&q(Le.SOUNDS.TICK,.6),{...D,timeRemaining:L})})},1e3):N.current&&clearInterval(N.current),()=>{N.current&&clearInterval(N.current)}),[c,S.timeRemaining,a]),d.useEffect(()=>{const D=L=>{L.preventDefault(),c==="map"&&!i?(l(!0),window.history.pushState({mode:"treasureHunt"},"",window.location.href)):c!=="map"&&(u("map"),h(null),window.history.pushState({mode:"treasureHunt"},"",window.location.href))};return window.addEventListener("popstate",D),()=>window.removeEventListener("popstate",D)},[c,i]);const P=async()=>{try{const L=await(await fetch("/data/quiz_questions_bank.csv")).text(),{data:T}=vr.parse(L,{header:!0,skipEmptyLines:!0,transformHeader:B=>B.trim().toLowerCase()}),z=T.map((B,G)=>{var O;const $=[B.option1,B.option2,B.option3,B.option4].map(ee=>(ee||"").trim()).filter(Boolean);if($.length<4)return null;let U={a:0,b:1,c:2,d:3}[(O=B.answer)==null?void 0:O.toLowerCase()];return U===void 0&&(U=$.findIndex(ee=>ee.toLowerCase()===(B.answer||"").toLowerCase())),U===-1&&(U=0),{id:B.id||`q_${G}`,prompt:(B.question||"").trim(),options:$,correctIndex:U,category:(B.category||B.subject||"general").trim(),difficulty:(B.difficulty||"medium").toLowerCase()}}).filter(Boolean);w(z)}catch(D){console.error("Failed to load questions:",D)}},E=D=>{const L=mn(D);if(!L||f.length===0)return[];let T=f.filter(B=>L.questionDifficulty.includes(B.difficulty));return T.length<Le.QUESTIONS_PER_ISLAND&&(T=f),[...T].sort(()=>Math.random()-.5).slice(0,Le.QUESTIONS_PER_ISLAND)},p=D=>{if(!Mg(D,x)){a&&q("/sounds/locked.mp3",.5),M([100]);return}h(D),u("island-detail"),a&&q("/sounds/select.mp3",.5)},b=D=>{const L=mn(D),T=E(D);y({islandId:D,questions:T,currentQuestionIndex:0,shovelsRemaining:Le.SHOVELS_PER_ISLAND,correctAnswers:0,wrongAnswers:0,timeRemaining:L.timeLimit,gemsFound:0,coinsEarned:0,questionTimes:[],startTime:Date.now()}),C.current=Date.now(),u("playing"),a&&q("/sounds/start.mp3",.6)},k=D=>{const L=S.questions[S.currentQuestionIndex],T=D===L.correctIndex,z=(Date.now()-C.current)/1e3;y(B=>{const G={...B,questionTimes:[...B.questionTimes,z]};if(T){const $=mn(B.islandId);let Z=$.rewards.perCorrectAnswer;z<Le.SPEED_BONUS_THRESHOLD&&(Z+=$.rewards.speedBonus),Math.random()<$.rewards.gemChance&&(Z+=$.rewards.gemBonus,G.gemsFound=B.gemsFound+1),G.correctAnswers=B.correctAnswers+1,G.coinsEarned=B.coinsEarned+Z}else G.wrongAnswers=B.wrongAnswers+1,G.shovelsRemaining=B.shovelsRemaining-1,M([200]);return G}),setTimeout(()=>{const B=S.currentQuestionIndex+1;S.shovelsRemaining===0&&!T||B>=Le.QUESTIONS_PER_ISLAND?R():(y(G=>({...G,currentQuestionIndex:B})),C.current=Date.now())},T?2e3:1500)},_=()=>{R()},R=()=>{const D=mn(S.islandId),L=S.correctAnswers>=D.requiredCorrect,T=S.correctAnswers===Le.QUESTIONS_PER_ISLAND;let z=S.coinsEarned;T&&(z+=D.rewards.perfectBonus),L&&(z+=D.rewards.completionCoins),j(G=>{const $={...G},Z=$[S.islandId];if(Z.completed=!0,Z.attempts+=1,L&&!Z.treasurePiece){Z.treasurePiece=!0;const U=lr.find(O=>O.id===S.islandId+1);U&&$[U.id]&&($[U.id].unlocked=!0,a&&setTimeout(()=>q(Le.SOUNDS.ISLAND_UNLOCK,.7),2e3))}return T&&(Z.perfectScore=!0),Z.bestScore=Math.max(Z.bestScore||0,S.correctAnswers),$}),v(G=>({...G,totalCoinsEarned:G.totalCoinsEarned+z,totalGemsFound:G.totalGemsFound+S.gemsFound,totalTreasurePieces:G.totalTreasurePieces+(L&&!x[S.islandId].treasurePiece?1:0),totalQuestionsAnswered:G.totalQuestionsAnswered+(S.correctAnswers+S.wrongAnswers),totalCorrectAnswers:G.totalCorrectAnswers+S.correctAnswers,islandsCompleted:G.islandsCompleted+(x[S.islandId].completed?0:1)})),ie.addCoins(z,`Treasure Hunt - ${D.name} Island`),ie.addXP(S.correctAnswers),y(G=>({...G,coinsEarned:z})),a&&q(L?Le.SOUNDS.TREASURE_FOUND:Le.SOUNDS.ISLAND_COMPLETE,.7),lr.every(G=>{var $;return(($=x[G.id])==null?void 0:$.treasurePiece)===!0})&&!g.gameCompleted?(v(G=>({...G,gameCompleted:!0})),setTimeout(()=>{u("final-treasure"),a&&q(Le.SOUNDS.FINAL_TREASURE,.8)},3e3)):u("reward")},F=()=>{b(S.islandId)},Q=()=>{u("map"),h(null)},V=()=>{ie.addCoins(Le.FINAL_TREASURE_REWARD,"Treasure Hunt - Final Treasure"),ie.addXP(10),v(D=>({...D,totalCoinsEarned:D.totalCoinsEarned+Le.FINAL_TREASURE_REWARD})),u("map")},K=()=>{window.history.go(-1),e()},q=(D,L=.5)=>{try{const T=new Audio(D);T.volume=L,T.play()}catch(T){console.error("Failed to play sound:",T)}},M=D=>{navigator.vibrate&&navigator.vibrate(D)};d.useEffect(()=>(document.body.classList.add("hide-bottom-nav"),()=>{document.body.classList.remove("hide-bottom-nav")}),[]);let I=null;switch(c){case"map":I=n.jsx(Fg,{islands:lr,islandProgress:x,onSelectIsland:p,onBack:()=>l(!0),soundOn:a,setSoundOn:o,totalStats:g});break;case"island-detail":I=n.jsx($g,{island:mn(m),progress:x[m],onStart:()=>b(m),onClose:()=>u("map"),soundOn:a});break;case"playing":I=n.jsx(Yg,{island:mn(S.islandId),question:S.questions[S.currentQuestionIndex],questionNumber:S.currentQuestionIndex+1,totalQuestions:Le.QUESTIONS_PER_ISLAND,shovelsRemaining:S.shovelsRemaining,timeRemaining:S.timeRemaining,coinsEarned:S.coinsEarned,gemsFound:S.gemsFound,onAnswer:k,onQuit:()=>u("map"),soundOn:a,setSoundOn:o});break;case"reward":I=n.jsx(qg,{island:mn(S.islandId),session:S,earnedTreasure:S.correctAnswers>=mn(S.islandId).requiredCorrect,onRetry:F,onContinue:Q,soundOn:a});break;case"final-treasure":I=n.jsx(Qg,{totalStats:g,onContinue:V,soundOn:a});break;default:I=null}return n.jsxs(n.Fragment,{children:[I,i&&n.jsx("div",{className:"fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 px-6",children:n.jsxs("div",{className:"bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-6 max-w-sm w-full shadow-2xl border border-white/10",children:[n.jsxs("div",{className:"text-center mb-6",children:[n.jsx("div",{className:"text-5xl mb-3",children:"🏝️"}),n.jsx("h3",{className:"text-xl font-bold text-white mb-2",children:"Leave Treasure Hunt?"}),n.jsx("p",{className:"text-white/70",children:"Your island progress is saved!"})]}),n.jsxs("div",{className:"flex gap-3",children:[n.jsx("button",{onClick:()=>l(!1),className:"flex-1 py-3 bg-gradient-to-r from-green-400 to-emerald-500 text-white rounded-2xl font-bold shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]",children:"Keep Playing"}),n.jsx("button",{onClick:K,className:"flex-1 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-2xl font-bold shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]",children:"Exit"})]})]})})]})}const Gg=[{name:"General Knowledge",questions:50,icon:"🧠",color:"#7C3AED"},{name:"Artificial Intelligence",questions:28,icon:"🤖",color:"#10B981"},{name:"Fun facts",questions:30,icon:"🎉",color:"#EF4444"},{name:"Science",questions:45,icon:"🧪",color:"#F59E0B"},{name:"History",questions:42,icon:"🏺",color:"#2563EB"},{name:"Geography",questions:38,icon:"🗺️",color:"#FACC15"}],zm=Gg.slice(0,6),mi=360/zm.length;function Hg({onModeSelect:e,onNavigateHome:t}){return n.jsx("div",{className:"fixed inset-0 bg-base-bg text-base-text overflow-hidden mt-12",children:n.jsxs("div",{className:"h-full overflow-y-auto mx-auto max-w-md px-4 pt-[calc(env(safe-area-inset-top)+5rem)] pb-[calc(env(safe-area-inset-bottom)+5.25rem)]",children:[n.jsx("header",{className:"flex items-center mb-8",children:n.jsx("h1",{className:"text-center text-xl font-bold w-full",children:"Choose a quiz mode"})}),n.jsxs("div",{className:"space-y-8",children:[n.jsxs("button",{onClick:()=>e("classic"),className:"w-full relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-400 to-blue-500 p-8 text-left shadow-lg hover:shadow-xl transition-all active:scale-[0.98]",children:[n.jsx("div",{className:"absolute top-0 right-0 w-32 h-32 opacity-30",children:n.jsxs("svg",{viewBox:"0 0 100 100",className:"w-full h-full animate-spin",style:{animationDuration:"20s"},children:[zm.map((r,s)=>{const a=s*mi,o=a+mi,i=mi>180?1:0,l=Math.PI*a/180,c=Math.PI*o/180,u=50+40*Math.cos(l),m=50-40*Math.sin(l),h=50+40*Math.cos(c),f=50-40*Math.sin(c);return n.jsx("path",{d:`M50,50 L${u},${m} A40,40 0 ${i} 0 ${h},${f} Z`,fill:r.color,stroke:"white",strokeWidth:"0.5"},s)}),n.jsx("circle",{cx:"50",cy:"50",r:"8",fill:"white"})]})}),n.jsx("div",{className:"absolute top-4 left-8 text-3xl opacity-60",children:"🏆"}),n.jsx("div",{className:"absolute top-12 right-16 text-xl opacity-40",children:"⭐"}),n.jsx("div",{className:"absolute bottom-6 left-6 text-2xl opacity-50",children:"🎲"}),n.jsx("div",{className:"absolute bottom-4 right-12 text-3xl opacity-60",children:"🍪"}),n.jsx("div",{className:"absolute top-1/2 left-4 text-lg opacity-40",children:"🥨"}),n.jsx("h2",{className:"text-5xl font-black text-white mb-10 relative z-10",style:{transform:"translateX(-20px)"},children:"CLASSIC"})]}),n.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[n.jsxs("button",{onClick:()=>e("survival"),className:"aspect-square rounded-3xl bg-gradient-to-br from-yellow-400 to-orange-400 p-4 text-left hover:shadow-xl transition-all active:scale-[0.98] relative overflow-hidden",children:[n.jsx("div",{className:"text-2xl mb-2",children:"💀"}),n.jsx("h4",{className:"text-lg font-black text-white",children:"SURVIVAL"})]}),n.jsxs("button",{onClick:()=>e("treasureHunt"),className:"aspect-square rounded-3xl bg-gradient-to-br from-purple-400 to-green-500 p-4 text-left hover:shadow-xl transition-all active:scale-[0.98] relative overflow-hidden",children:[n.jsxs("div",{className:"absolute inset-0 opacity-20",children:[n.jsx("div",{className:"absolute top-2 right-2 text-4xl animate-pulse",children:"🏝️"}),n.jsx("div",{className:"absolute bottom-2 left-2 text-3xl animate-bounce",style:{animationDelay:"0.5s"},children:"⛏️"}),n.jsx("div",{className:"absolute top-1/2 right-4 text-2xl animate-pulse",style:{animationDelay:"1s"},children:"💎"})]}),n.jsx("div",{className:"text-2xl mb-2 relative z-10",children:"🏴‍☠️"}),n.jsx("h4",{className:"text-lg font-black text-white relative z-10",children:"TREASURE HUNT"}),n.jsx("div",{className:"absolute bottom-2 right-2",children:n.jsx("span",{className:"text-xs bg-white/20 px-2 py-1 rounded-full text-white font-bold",children:"NEW!"})})]}),n.jsxs("button",{disabled:!0,className:"aspect-square rounded-3xl bg-gradient-to-br from-pink-500 to-purple-500 p-4 text-left opacity-60",children:[n.jsx("div",{className:"text-2xl mb-2",children:"⚔️"}),n.jsx("h4",{className:"text-lg font-black text-white",children:"SURVIVAL ARENA"})]}),n.jsxs("button",{disabled:!0,className:"aspect-square rounded-3xl bg-gradient-to-br from-blue-400 to-cyan-400 p-4 text-left opacity-60",children:[n.jsx("div",{className:"text-2xl mb-2",children:"📱"}),n.jsx("h4",{className:"text-lg font-black text-white",children:"TRIVIA VIDEO"})]})]})]})]})})}function Kg(){const[e,t]=d.useState(null),r=je(),s=Je();d.useEffect(()=>{const l=new URLSearchParams(s.search);l.get("mode")==="survival"&&l.get("from")==="quest"&&t("survival")},[s]);const a=l=>{if(l==="classic"){r("/play/classic",{state:{from:"play"}});return}else l==="survival"?t("survival"):l==="treasureHunt"&&t("treasureHunt")},o=()=>{r("/")},i=()=>{t(null)};if(e==="survival"){const c=new URLSearchParams(s.search).get("from")==="quest";return n.jsx(Dg,{onBack:i,isFromQuest:c})}return e==="treasureHunt"?n.jsx(Wg,{onBack:i}):n.jsx(Hg,{onModeSelect:a,onNavigateHome:o})}const Xg=({session:e,mode:t,category:r,difficulty:s,timerConfig:a,onComplete:o,onQuit:i})=>{const l=je(),[c,u]=d.useState(0),[m,h]=d.useState([]),[f,w]=d.useState([]),[x,j]=d.useState([]),[S,y]=d.useState(!1),[g,v]=d.useState(null),[N,C]=d.useState(Date.now()),[P,E]=d.useState(0),[p,b]=d.useState([]);d.useState(!1),d.useState(!1);const[k,_]=d.useState({}),[R,F]=d.useState({}),[Q,V]=d.useState([]);d.useState(!0);const[K,q]=d.useState([]),[M,I]=d.useState(0),[D,L]=d.useState(0),[T,z]=d.useState(!1),[B,G]=d.useState(!1),[$,Z]=d.useState(""),[U,O]=d.useState(!1),[ee,W]=d.useState(!1),[H,X]=d.useState(!0),[J,Y]=d.useState(!1),[A,te]=d.useState(0),[ne,le]=d.useState(0),[ue,Ne]=d.useState(0),[ge,ot]=d.useState(0),[Ee,qe]=d.useState(null),[ke,Me]=d.useState(0),ft=d.useRef(null),ht=d.useRef(null),_e=t==="practice",$e=m[c],Qe=de=>{try{const fe=new Audio(de);fe.volume=.6,fe.play()}catch{console.log("Sound not available:",de)}},At=[{id:1,category:"General Knowledge",difficulty:"medium",prompt:"Which element has the atomic number 1?",options:["Helium","Carbon","Hydrogen","Oxygen"],answerIndex:2,explanation:"Hydrogen is the first element on the periodic table with atomic number 1!"},{id:2,category:"General Knowledge",difficulty:"medium",prompt:"What is the largest ocean on Earth?",options:["Atlantic","Pacific","Indian","Arctic"],answerIndex:1,explanation:"The Pacific Ocean covers about one-third of Earth's surface!"},{id:3,category:"General Knowledge",difficulty:"easy",prompt:"What color do you get when you mix red and yellow?",options:["Purple","Orange","Green","Pink"],answerIndex:1,explanation:"Red and yellow make orange - like a beautiful sunset!"}],ze=e&&e.questions&&Array.isArray(e.questions)&&e.questions.length>0?e.questions:At,Ke=ze[c]||ze[0]||At[0],tt=ze.length;d.useEffect(()=>{const de=ie.getCoins();Ne(de)},[]),d.useEffect(()=>{ze.length>0&&(h(new Array(ze.length).fill(null)),w(new Array(ze.length).fill(!1)),V(new Array(ze.length).fill(!1)),j(new Array(ze.length).fill((a==null?void 0:a.seconds)||45)))},[ze.length,a==null?void 0:a.seconds]);const Ct=()=>{const de=new Date;return`${de.getFullYear()}-${de.getMonth()+1}-${de.getDate()}`},It=()=>{_e&&window.location.search.includes("from=quest")?l("/profile/quests",{state:{questCompleted:!0,questType:"practiceQuestions"}}):i()},un=d.useCallback((de,fe)=>{if(!Ke||_e&&Q[c]||k[c]&&k[c].includes(de))return;const he=[...m];if(he[c]=m[c]===de?null:de,h(he),C(Date.now()),_e&&!p.includes(c)&&he[c]!==null){const ae=p.length+1;if(E(ae),b(ce=>[...ce,c]),window.location.search.includes("from=quest")){let ce={};try{const Ce=localStorage.getItem("questProgress");Ce&&(ce=JSON.parse(Ce))}catch(Ce){console.error("Error reading progress:",Ce)}const pe=ce.practiceQuestions||0;ce.practiceQuestions=Math.max(pe,ae),ce.date=`${new Date().getFullYear()}-${new Date().getMonth()+1}-${new Date().getDate()}`,localStorage.setItem("questProgress",JSON.stringify(ce)),console.log("Saved practice progress:",ce.practiceQuestions),window.dispatchEvent(new CustomEvent("questProgressUpdate",{detail:{practiceQuestions:ce.practiceQuestions}}))}}he[c]!==null&&(X(!1),clearInterval(ht.current));const nt=he[c]===Ke.answerIndex;if(nt){const ae=ge+1;if(ot(ae),I(ce=>ce+1),L(0),_e){te(pe=>pe+1);const ce=2;le(pe=>pe+ce),Ne(pe=>pe+ce),Qe("/sounds/correct.mp3"),setTimeout(()=>Qe("/sounds/coin.mp3"),500),W(!0),setTimeout(()=>W(!1),2e3),qe({type:"correct",stars:1,coins:2}),setTimeout(()=>qe(null),2e3)}}else he[c]!==null&&(ot(0),I(0),L(ae=>ae+1),_e&&Qe("/sounds/wrong.mp3"));if(q(ae=>[...ae.slice(-2),nt]),he[c]!==null&&f[c]){const ae=[...f];ae[c]=!1,w(ae)}_e&&he[c]!==null&&(O(!0),V(ae=>{const ce=[...ae];return ce[c]=!0,ce})),!_e&&he[c]!==null&&(clearTimeout(ft.current),ft.current=setTimeout(()=>{c<tt-1?se():(z(!0),y(!0))},5e3))},[Ke,_e,Q,c,m,f,tt,ge,k,K,M,P,p]),es=()=>{C(Date.now()),c>0&&(clearInterval(ht.current),X(!1),u(de=>de-1),O(!1),_e&&m[c-1]!==null&&setTimeout(()=>O(!0),100))},se=()=>{if(C(Date.now()),clearInterval(ht.current),$e===null){const de=[...f];de[c]=!0,w(de),ot(0)}X(!1),O(!1),c<tt-1?(u(de=>de+1),_e&&m[c+1]!==null?setTimeout(()=>O(!0),100):setTimeout(()=>X(!0),100)):z(!0)},me=()=>{C(Date.now());const de=[...f];de[c]=!0,w(de),ot(0),se()},Se=()=>{const de=ze.reduce((fe,he,nt)=>fe+(m[nt]===he.answerIndex?1:0),0);if(_e&&window.location.search.includes("from=quest")){const fe=m.filter(nt=>nt!==null).length,he=JSON.parse(localStorage.getItem("questProgress")||"{}");he.practiceQuestions=Math.min(fe,15),he.date=Ct(),localStorage.setItem("questProgress",JSON.stringify(he)),console.log("Final practice progress saved:",he.practiceQuestions)}if(_e)o&&o({questions:ze,answers:m,skipped:f,correct:de,total:tt,mode:t,category:r,difficulty:s,earnedStars:A,earnedCoins:ne,finalStreak:ge});else{const fe=de*10;Me(fe),o&&o({questions:ze,answers:m,skipped:f,correct:de,total:tt,mode:t,category:r,difficulty:s,earnedStars:0,earnedCoins:fe,finalStreak:ge})}};d.useEffect(()=>{if(!(S||g!==null||T||!H||m[c]!==null))return ht.current=setInterval(()=>{j(de=>{const fe=[...de],he=fe[c];return he<=1?(clearInterval(ht.current),c===tt-1?(Date.now()-N>=5e3&&z(!0),fe):(v(c),fe)):(fe[c]=he-1,fe)})},1e3),()=>clearInterval(ht.current)},[S,g,c,T,tt,H,m,N]),d.useEffect(()=>{m[c]===null&&!T&&!g?X(!0):X(!1)},[c,m,T,g]);const be=de=>{const fe=Math.floor(de/60),he=de%60;return`${fe}:${he.toString().padStart(2,"0")}`},We=(c+1)/ze.length*100,ve=m.filter(de=>de!==null).length,Ge=f.filter(Boolean).length,Te=x[c]||0;ze.reduce((de,fe,he)=>de+(m[he]===fe.answerIndex?1:0),0);const Xe=_e&&U&&$e!==null;return n.jsxs("div",{className:"h-dvh bg-gray-900 text-white flex flex-col overflow-hidden pt-[env(safe-area-inset-top,0px)]",children:[Ee&&n.jsx("div",{className:"fixed inset-0 flex items-center justify-center z-50 pointer-events-none",children:n.jsxs("div",{className:"bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-8 py-4 rounded-full text-xl font-bold animate-bounce shadow-2xl",children:["+",Ee.coins," Coins!"]})}),ee&&n.jsx("div",{className:"fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-40 pointer-events-none",children:[...Array(8)].map((de,fe)=>n.jsx("div",{className:"absolute text-3xl animate-ping",style:{left:`${-30+Math.random()*60}px`,top:`${-30+Math.random()*60}px`,animationDelay:`${fe*150}ms`,animationDuration:"2s"},children:"🪙"},fe))}),n.jsxs("div",{className:"bg-gray-900 flex-shrink-0 pt-10",children:[n.jsxs("div",{className:"flex items-center justify-between px-4 py-2 border-b border-gray-800 shadow-lg",children:[n.jsxs("button",{onClick:()=>G(!0),className:"bg-gray-700 hover:bg-gray-600 px-3 py-1.5 rounded-full flex items-center gap-2 transition-colors text-sm",children:[n.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:n.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 19l-7-7 7-7"})}),n.jsx("span",{className:"font-medium",children:"Back"})]}),n.jsx("div",{className:"flex-1"}),n.jsxs("div",{className:"flex items-center gap-2",children:[_e&&n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:"bg-yellow-600/20 px-2 py-1 rounded-full flex items-center gap-1",children:[n.jsx("span",{className:"text-yellow-400 text-sm",children:"🪙"}),n.jsx("span",{className:"text-yellow-200 font-semibold text-sm",children:ue})]}),n.jsxs("div",{className:"bg-orange-600/20 px-2 py-1 rounded-full flex items-center gap-1",children:[n.jsx("span",{className:"text-orange-400 text-sm",children:"🔥"}),n.jsx("span",{className:"text-orange-200 font-semibold text-sm",children:ge})]})]}),n.jsx("div",{className:`px-2 py-1 rounded-full font-mono font-semibold text-sm ${Te<=10?"bg-red-600/20 text-red-400 animate-pulse":Te<=30?"bg-yellow-600/20 text-yellow-400":"bg-green-600/20 text-green-400"}`,children:be(Te)})]})]}),n.jsxs("div",{className:"px-4 pb-1 bg-gray-900",children:[n.jsxs("div",{className:"flex justify-between items-center mb-1",children:[n.jsxs("span",{className:"text-xs text-gray-400",children:["Question ",c+1," of ",tt]}),n.jsxs("span",{className:"text-xs text-gray-400",children:[Math.round(We),"% Complete"]})]}),n.jsx("div",{className:"h-2 bg-gray-700 rounded-full overflow-hidden",children:n.jsx("div",{className:"h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-500",style:{width:`${We}%`}})}),n.jsx("div",{className:"flex justify-center gap-1 mt-1",children:Array.from({length:tt}).map((de,fe)=>n.jsx("div",{className:`w-1.5 h-1.5 rounded-full transition-all ${fe===c?"bg-white scale-125":m[fe]!==null?"bg-green-500":f[fe]?"bg-yellow-500":"bg-gray-600"}`},fe))}),n.jsx("div",{className:"text-center mt-4",children:n.jsx("span",{className:"text-xs text-gray-500",children:Ke.category})})]})]}),n.jsx("div",{className:`flex-1 flex flex-col ${Xe?"overflow-y-auto":"overflow-hidden"}`,children:n.jsxs("div",{className:"px-4 py-4 flex-1 flex flex-col",children:[n.jsxs("div",{className:"relative bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 rounded-3xl p-6 mb-4 shadow-2xl shadow-blue-600/20 border border-blue-400/20",children:[n.jsx("div",{className:"absolute top-2 right-2 w-16 h-16 bg-white/10 rounded-full blur-xl"}),n.jsx("div",{className:"absolute bottom-2 left-2 w-12 h-12 bg-white/5 rounded-full blur-lg"}),n.jsxs("div",{className:"relative text-center",children:[n.jsxs("div",{className:"inline-block bg-white/10 px-3 py-1 rounded-full text-xs font-medium text-blue-100 mb-3",children:["Question ",c+1]}),n.jsx("h2",{className:"text-xl font-bold leading-relaxed text-white tracking-wide",children:Ke.prompt}),Ke.difficulty&&n.jsx("div",{className:"mt-3 inline-block",children:n.jsx("span",{className:`px-2 py-1 rounded-full text-xs font-semibold ${Ke.difficulty==="easy"?"bg-green-500/20 text-green-300":Ke.difficulty==="medium"?"bg-yellow-500/20 text-yellow-300":"bg-red-500/20 text-red-300"}`,children:Ke.difficulty.toUpperCase()})})]})]}),n.jsx("div",{className:"grid grid-cols-1 gap-3 mb-4",children:Ke.options.map((de,fe)=>{const he=$e===fe,nt=fe===Ke.answerIndex,ae=_e&&$e!==null&&U,ce=k[c]&&k[c].includes(fe);let pe="p-4 rounded-xl transition-all duration-300 border-2 min-h-[64px] flex items-center ";ce?pe+="bg-gray-700/30 border-gray-600/30 text-gray-500/50 cursor-not-allowed":(pe+="cursor-pointer ",ae?he&&nt?pe+="bg-green-600 border-green-500 text-white shadow-lg shadow-green-600/25":he&&!nt?pe+="bg-red-600 border-red-500 text-white shadow-lg shadow-red-600/25":!he&&nt?pe+="bg-green-600/20 border-green-500 text-green-300 animate-pulse":pe+="bg-gray-700 border-gray-600 text-gray-400":he?pe+="bg-gray-600 border-gray-500 text-white":pe+="bg-gray-800 border-gray-700 text-gray-200 hover:bg-gray-750 hover:border-gray-600");const Ce=["🅰️","🅱️","🅲️","🅳️"];return n.jsx("button",{onClick:we=>un(fe,we),disabled:_e&&Q[c],className:pe,children:n.jsxs("div",{className:"flex items-center gap-2 w-full",children:[n.jsx("div",{className:"text-lg flex-shrink-0 mr-1",children:Ce[fe]}),n.jsx("div",{className:"flex-1 text-left font-semibold text-base leading-relaxed",children:de}),R[c]&&R[c][fe]>0&&!ce&&n.jsxs("div",{className:"bg-purple-600/20 px-2 py-1 rounded-full text-xs text-purple-300",children:[R[c][fe],"%"]}),ae&&he&&nt&&!ce&&n.jsx("div",{className:"text-lg animate-bounce",children:"🎉"}),ae&&he&&!nt&&!ce&&n.jsx("div",{className:"text-lg",children:"😔"}),ae&&!he&&nt&&!ce&&n.jsx("div",{className:"text-base animate-pulse",children:"✨"})]})},fe)})}),_e&&U&&$e!==null&&n.jsx("div",{className:"bg-gray-800 rounded-xl p-4 mb-4 border border-gray-700",children:n.jsxs("div",{className:"flex gap-3",children:[n.jsx("div",{className:"text-lg flex-shrink-0",children:$e===Ke.answerIndex?"🎊":"💡"}),n.jsxs("div",{className:"flex-1",children:[n.jsx("h4",{className:`font-semibold mb-3 text-sm ${$e===Ke.answerIndex?"text-green-400":"text-blue-400"}`,children:$e===Ke.answerIndex?"Perfect! Well done!":"Good try! Here's why:"}),Ke.explanation&&n.jsx("p",{className:"text-gray-300 text-sm leading-relaxed",children:Ke.explanation})]})]})}),n.jsx("div",{className:"h-[200px]"})]})}),n.jsxs("div",{className:"fixed bottom-0 left-0 right-0 z-50",children:[n.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/95 to-gray-900/80 backdrop-blur-xl"}),n.jsxs("div",{className:"relative p-4 pb-8",children:[n.jsxs("div",{className:"flex gap-2 mb-3",children:[n.jsx("button",{onClick:es,disabled:c===0,className:`flex-1 bg-white/10 backdrop-blur-md border border-white/20 
                disabled:opacity-30 disabled:cursor-not-allowed
                py-3.5 rounded-2xl font-semibold transition-all transform active:scale-95
                hover:bg-white/15 text-white shadow-xl`,children:"Previous"}),n.jsx("button",{onClick:me,disabled:$e!==null,className:`flex-1 py-3.5 rounded-2xl font-semibold transition-all transform active:scale-95 shadow-xl ${$e!==null?"bg-white/5 text-gray-500 cursor-not-allowed":"bg-gradient-to-r from-amber-500 to-yellow-500 text-white hover:from-amber-600 hover:to-yellow-600"}`,children:"Skip"}),n.jsx("button",{onClick:se,className:`flex-1 bg-gradient-to-r from-blue-500 to-indigo-500 
                hover:from-blue-600 hover:to-indigo-600
                py-3.5 rounded-2xl font-semibold transition-all transform active:scale-95
                text-white shadow-xl`,children:c===tt-1?"Finish":"Next"})]}),n.jsxs("button",{onClick:()=>z(!0),className:`w-full bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500
              hover:from-emerald-600 hover:via-green-600 hover:to-teal-600
              py-4 rounded-2xl font-bold text-white transition-all transform active:scale-[0.98]
              shadow-2xl shadow-green-500/25 relative overflow-hidden group`,children:[n.jsx("div",{className:"absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent"}),n.jsx("span",{className:"relative",children:"Submit Quiz"})]})]})]}),B&&n.jsx("div",{className:"fixed inset-0 bg-black/75 flex items-center justify-center z-50 p-4",children:n.jsxs("div",{className:"bg-gray-800 rounded-3xl p-6 max-w-sm w-full text-center border border-gray-700",children:[n.jsx("div",{className:"text-4xl mb-4",children:"🤔"}),n.jsx("h3",{className:"text-xl font-bold mb-2",children:"Leave Quiz?"}),n.jsx("p",{className:"text-gray-400 mb-6",children:"Your progress will be lost"}),n.jsxs("div",{className:"flex gap-3",children:[n.jsx("button",{onClick:()=>G(!1),className:"flex-1 bg-blue-600 hover:bg-blue-700 py-3 rounded-xl font-medium",children:"Stay"}),n.jsx("button",{onClick:It,className:"flex-1 bg-gray-700 hover:bg-gray-600 py-3 rounded-xl font-medium",children:"Leave"})]})]})}),T&&!J&&n.jsx("div",{className:"fixed inset-0 bg-black/75 flex items-center justify-center z-50 p-4",children:n.jsxs("div",{className:"bg-gray-800 rounded-3xl p-6 max-w-sm w-full text-center border border-gray-700",children:[n.jsx("div",{className:"text-4xl mb-4",children:"🏆"}),n.jsx("h3",{className:"text-xl font-bold mb-2",children:"Ready to finish?"}),n.jsxs("p",{className:"text-gray-400 mb-4",children:[ve," of ",tt," answered • ",Ge," skipped"]}),_e&&n.jsx("div",{className:"bg-gradient-to-r from-yellow-600/20 to-orange-600/20 p-4 rounded-2xl mb-6 border border-yellow-600/30",children:n.jsxs("div",{className:"flex justify-center gap-6",children:[n.jsxs("div",{className:"text-center",children:[n.jsx("div",{className:"text-2xl mb-1",children:"⭐"}),n.jsx("div",{className:"text-yellow-400 font-bold",children:A}),n.jsx("div",{className:"text-xs text-gray-400",children:"Stars"})]}),n.jsxs("div",{className:"text-center",children:[n.jsx("div",{className:"text-2xl mb-1",children:"🪙"}),n.jsx("div",{className:"text-yellow-400 font-bold",children:ne}),n.jsx("div",{className:"text-xs text-gray-400",children:"Coins"})]})]})}),n.jsxs("div",{className:"flex gap-3",children:[n.jsx("button",{onClick:()=>{z(!1),v(null),C(Date.now())},className:"flex-1 bg-gray-700 hover:bg-gray-600 py-3 rounded-xl font-medium",children:"Back"}),n.jsx("button",{onClick:de=>{de.preventDefault(),de.stopPropagation(),console.log("Submit button clicked"),Se()},className:"flex-1 bg-green-600 hover:bg-green-700 py-3 rounded-xl font-medium",children:"Submit"})]})]})}),g===c&&!T&&n.jsx("div",{className:"fixed inset-0 bg-black/75 flex items-center justify-center z-50 p-4",children:n.jsxs("div",{className:"bg-gray-800 rounded-3xl p-6 max-w-sm w-full text-center border border-gray-700",children:[n.jsx("div",{className:"text-4xl mb-4 animate-pulse",children:"⏰"}),n.jsx("h3",{className:"text-xl font-bold mb-2",children:"Time's Up!"}),n.jsx("p",{className:"text-gray-400 mb-6",children:"Let's move to the next question"}),n.jsx("button",{onClick:()=>{v(null),C(Date.now()),c<ze.length-1?se():z(!0)},className:"w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-xl font-medium",children:c<ze.length-1?"Continue":"See Results"})]})}),$&&n.jsx("div",{className:"fixed top-20 left-1/2 transform -translate-x-1/2 bg-red-600 text-white px-4 py-2 rounded-full font-medium animate-bounce z-50",children:$}),n.jsx("style",{jsx:!0,children:`
        .pt-safe {
            padding-top: env(safe-area-inset-top);
        }
        
        @keyframes fadeInOut {
          0% {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.8);
          }
          15% {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1.05);
          }
          20% {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
          }
          80% {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
          }
          100% {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.9);
          }
        }
        
        .animate-fadeInOut {
          animation: fadeInOut 3s ease-out forwards;
        }
      `})]})},ds=[{name:"GK",slug:"general-knowledge",questions:50,icon:"🧠",color:"#FF6B6B",gradient:"from-red-500 to-pink-500"},{name:"Science",slug:"science",questions:45,icon:"🧪",color:"#4ECDC4",gradient:"from-cyan-500 to-teal-500"},{name:"Fun Facts",slug:"fun-facts",questions:30,icon:"🎉",color:"#FFD93D",gradient:"from-yellow-400 to-orange-500"},{name:"History",slug:"history",questions:42,icon:"🏺",color:"#A8E6CF",gradient:"from-green-400 to-emerald-500"},{name:"AI & Tech",slug:"artificial-intelligence",questions:28,icon:"🤖",color:"#C7B8FF",gradient:"from-purple-400 to-indigo-500"},{name:"Geography",slug:"geography",questions:38,icon:"🗺️",color:"#FACC15",gradient:"from-yellow-400 to-amber-500"},{name:"Computer",slug:"computer",questions:34,icon:"💻",color:"#3B82F6",gradient:"from-blue-400 to-blue-600"},{name:"Aptitude",slug:"aptitude",questions:36,icon:"📐",color:"#EC4899",gradient:"from-pink-500 to-rose-500"},{name:"Iconic Figures",slug:"iconic-figures",questions:26,icon:"🌟",color:"#8B5CF6",gradient:"from-purple-500 to-violet-600"}],Vg=()=>n.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:n.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5l7 7-7 7"})}),Jg=()=>n.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:n.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"})}),Zg=()=>n.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:n.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"})}),ev=()=>n.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:n.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"})}),tv=()=>n.jsx("svg",{className:"w-3 h-3",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:n.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 10V3L4 14h7v7l9-11h-7z"})}),nv=({results:e={correct:8,total:10,category:"general-knowledge",mode:"quiz",elapsedMs:125e3,questions:[],returnPath:null,fromQuest:!1},onRetake:t=()=>{},onReview:r=()=>{},onNavigate:s=(c,u)=>{},isRetake:a=!1,isPractice:o=!1,player:i={level:1,coins:0,combo:0,energy:5},categories:l=[]})=>{const[c,u]=d.useState(ie.getCoins()),m=d.useRef(null),[h,f]=d.useState(null),[w]=et("/sounds/coin.mp3",{volume:.75}),[x,j]=d.useState(!1),[S,y]=d.useState(!1),[g,v]=d.useState(0),[N,C]=d.useState(!1),[P,E]=d.useState(!1),p=()=>{if(console.log("QuizResults handleBack:",{fromQuest:e.fromQuest,returnPath:e.returnPath,isPractice:e.isPractice||o}),e.fromQuest){const O=e.isPractice||o?"practiceQuestions":"dailyQuizzes";e.isPractice||o?s("/profile/quests"):s("/profile/quests",{state:{questCompleted:!0,questType:O,increment:1}})}else{const O=e.returnPath||"/";s(O)}},{correct:b,total:k,category:_,categorySlug:R,difficulty:F,mode:Q,elapsedMs:V}=e,K=k?Math.round(b/k*100):0,q=K===100,M=K>=80,I=Math.floor(V/1e3),D=k>0?Math.floor(I/k):0,L=o?e.earnedCoins||0:Math.round(b*5*(q?1.5:M?1.2:1)),T=ds.find(O=>O.slug===_)||ds[0],B=(()=>q?{emoji:"🏆",text:"Perfect!",color:"text-yellow-400"}:K>=90?{emoji:"🌟",text:"Excellent!",color:"text-purple-400"}:K>=80?{emoji:"✨",text:"Great job!",color:"text-blue-400"}:K>=70?{emoji:"👍",text:"Good effort!",color:"text-green-400"}:K>=60?{emoji:"💪",text:"Keep going!",color:"text-orange-400"}:{emoji:"📚",text:"Keep practicing!",color:"text-gray-400"})();d.useEffect(()=>{const O=ie.getCoins();u(O)},[]),d.useEffect(()=>{e.coinsProcessed||L>0&&m.current&&setTimeout(()=>{m.current.getBoundingClientRect();const O=new Audio("/sounds/coin.mp3");O.volume=.75,O.play().catch(ee=>{if(console.error("Audio play failed:",ee),w)try{w()}catch(W){console.error("Hook play failed:",W)}}),f({startRect:{left:window.innerWidth/2-50,top:window.innerHeight/2,width:100,height:100},count:Math.min(L,10),amount:L}),j(!0),e.coinsProcessed=!0},500)},[]),d.useEffect(()=>{document.documentElement.scrollIntoView({behavior:"smooth",block:"start"}),(q||M)&&(y(!0),setTimeout(()=>y(!1),3e3));let O=0;const ee=b/20,W=setInterval(()=>{O+=ee,O>=b?(v(b),clearInterval(W)):v(Math.floor(O))},50);return()=>clearInterval(W)},[b,q,M]);const G=[{score:7,total:10},{score:6,total:10},{score:8,total:10},{score:9,total:10},{score:b,total:k}],$=()=>{try{const O=localStorage.getItem("qp_recent");if(O)return JSON.parse(O).slice(0,10).map(W=>W.slug||W.cat).filter(W=>W&&W!==e.categorySlug)}catch(O){console.error("Error reading recent categories:",O)}return[]},Z=()=>{const O=R||_,ee=F||"medium",W=$(),H=(l||ds||[]).filter(Y=>Y.slug!==O&&!W.slice(0,3).includes(Y.slug)),J=(()=>{if(H.length===0){const Y=(l||ds||[]).filter(A=>A.slug!==O);return Y[Math.floor(Math.random()*Y.length)]||(l||ds)[0]}return H[Math.floor(Math.random()*H.length)]})();if(K<60)return o?[{icon:"🎯",title:"Try Fewer Questions",desc:"Start with just 5",color:"from-blue-500 to-cyan-500",action:()=>s(`/quiz/${O}`,{state:{mode:"practice",difficulty:"easy",count:5,timer:{type:"off",seconds:0}}})},{icon:J.icon,title:J.name,desc:"Fresh start with new topic",color:J.gradient,action:()=>s(`/quiz/${J.slug}`,{state:{mode:"practice",difficulty:"easy",count:10,timer:{type:"off",seconds:0}}})},{icon:"📖",title:"Review Mistakes",desc:"Learn from errors",color:"from-purple-500 to-pink-500",action:()=>r()}]:[{icon:"📚",title:"Practice Mode",desc:"No timer, learn at your pace",color:"from-green-500 to-teal-500",action:()=>s(`/quiz/${O}`,{state:{mode:"practice",difficulty:"easy",count:10,timer:{type:"off",seconds:0}}})},{icon:ee!=="easy"?"🎯":"🔄",title:ee!=="easy"?"Easy Mode":"Try Again",desc:ee!=="easy"?"Build confidence":"You can do this!",color:"from-blue-500 to-cyan-500",action:()=>ee!=="easy"?s(`/quiz/${O}`,{state:{mode:"quiz",difficulty:"easy",count:5,timer:{type:"per_q",seconds:60}}}):t()},{icon:J.icon,title:J.name,desc:"Try something different",color:J.gradient,action:()=>s(`/quiz/${J.slug}`,{state:{mode:"practice",difficulty:"easy",count:10,timer:{type:"off",seconds:0}}})}];if(K>=80)return ee==="hard"&&K>=90?[{icon:"⚡",title:"Lightning Round",desc:"20 questions, 10s each",color:"from-yellow-500 to-red-500",action:()=>s(`/quiz/${O}`,{state:{mode:"quiz",difficulty:"hard",count:20,timer:{type:"per_q",seconds:10}}})},{icon:J.icon,title:`${J.name} Challenge`,desc:"Hard mode, new topic",color:J.gradient,action:()=>s(`/quiz/${J.slug}`,{state:{mode:"quiz",difficulty:"hard",count:15,timer:{type:"per_q",seconds:30}}})},{icon:"🎲",title:"Mixed Categories",desc:"Test all your knowledge",color:"from-purple-500 to-indigo-500",action:()=>s("/quiz/mixed",{state:{mode:"quiz",difficulty:"hard",count:20,timer:{type:"per_q",seconds:30}}})}]:[{icon:ee==="hard"?"🔥":"🎯",title:ee==="hard"?"Perfect Score Challenge":"Hard Mode",desc:ee==="hard"?"Can you get 100%?":"Level up your skills",color:"from-red-500 to-orange-500",action:()=>s(`/quiz/${O}`,{state:{mode:"quiz",difficulty:"hard",count:ee==="hard"?10:20,timer:{type:"per_q",seconds:30}}})},{icon:J.icon,title:J.name,desc:"Master new topics",color:J.gradient,action:()=>s(`/quiz/${J.slug}`,{state:{mode:"practice",difficulty:"easy",count:10,timer:{type:"off",seconds:0}}})},{icon:"⚡",title:"Speed Challenge",desc:"10 questions, 15s each",color:"from-purple-500 to-pink-500",action:()=>s(`/quiz/${O}`,{state:{mode:"quiz",difficulty:"medium",count:10,timer:{type:"per_q",seconds:15}}})}];{const Y=K<70;return[{icon:Y?"📚":"🎯",title:Y?"Practice More":"Try Again",desc:Y?"Improve accuracy":"Beat your score",color:Y?"from-green-500 to-teal-500":"from-blue-500 to-purple-500",action:Y?()=>s(`/quiz/${O}`,{state:{mode:"practice",difficulty:ee,count:10,timer:{type:"off",seconds:0}}}):()=>t()},{icon:J.icon,title:J.name,desc:"Explore new topics",color:J.gradient,action:()=>s(`/quiz/${J.slug}`,{state:{mode:"practice",difficulty:"easy",count:10,timer:{type:"off",seconds:0}}})},{icon:ee==="easy"?"⬆️":"💪",title:ee==="easy"?"Medium Difficulty":"More Questions",desc:ee==="easy"?"Ready for more?":"Test endurance",color:"from-indigo-500 to-purple-500",action:()=>s(`/quiz/${O}`,{state:{mode:"quiz",difficulty:ee==="easy"?"medium":ee,count:ee==="easy"?10:20,timer:{type:"per_q",seconds:45}}})}]}},U=wt.useMemo(()=>Z(),[K,o,e.categorySlug,e.difficulty]);return n.jsx("div",{className:"h-screen overflow-y-auto bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white",children:n.jsxs("div",{className:"min-h-full p-4 pt-10",children:[h&&n.jsx(Xn,{startRect:h.startRect,targetRef:m,count:h.count,onDone:()=>{if(h.amount>0&&!P){console.log("[QuizResults] Updating display with current total"),E(!0);const O=ie.getCoins();u(O)}f(null)}}),n.jsx("style",{children:`
        @keyframes coinRotate {
          from { transform: rotateY(0deg); }
          to { transform: rotateY(360deg); }
        }
      `}),S&&n.jsx("div",{className:"fixed inset-0 pointer-events-none z-50 flex items-center justify-center",children:n.jsx("div",{className:"text-8xl animate-bounce",children:q?"🎉":"⭐"})}),n.jsxs("div",{className:"flex justify-between items-center mb-6 mt-1",children:[n.jsxs("button",{onClick:p,className:"p-2 rounded-xl bg-white/10 backdrop-blur hover:bg-white/20 transition-all flex items-center gap-2",children:[n.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:n.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 19l-7-7 7-7"})}),n.jsx("span",{className:"text-sm font-medium",children:"Back"})]}),n.jsxs("div",{className:"flex gap-2",children:[n.jsxs("div",{className:"px-3 py-1.5 rounded-full bg-white/10 backdrop-blur text-sm font-medium",children:["Level ",i.level]}),n.jsxs("button",{ref:m,onClick:()=>C(!0),className:"px-3 py-1.5 rounded-full bg-yellow-500/20 backdrop-blur text-sm font-medium text-yellow-300 hover:bg-yellow-500/30 transition-all cursor-pointer",children:[c," 🪙"]})]})]}),n.jsxs("div",{className:"relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 p-8 mb-6",children:[n.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-blue-500/10 animate-pulse"}),n.jsxs("div",{className:"relative text-center",children:[n.jsxs("div",{className:`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur mb-4 ${B.color}`,children:[n.jsx("span",{className:"text-2xl",children:B.emoji}),n.jsx("span",{className:"font-semibold",children:B.text})]}),n.jsxs("div",{className:"mb-6",children:[n.jsxs("div",{className:"text-7xl font-bold mb-2 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent",children:[g,"/",k]}),n.jsxs("div",{className:"flex items-center justify-center gap-2 text-sm text-white/60",children:[n.jsx("span",{className:"text-xl",children:T.icon}),n.jsx("span",{children:T.name})]})]}),n.jsxs("div",{className:"grid grid-cols-3 gap-4 max-w-md mx-auto",children:[n.jsxs("div",{className:"text-center",children:[n.jsxs("div",{className:"text-3xl font-bold",children:[K,"%"]}),n.jsx("div",{className:"text-xs text-white/60",children:"Accuracy"})]}),n.jsxs("div",{className:"text-center",children:[n.jsxs("div",{className:"text-3xl font-bold",children:[D,"s"]}),n.jsx("div",{className:"text-xs text-white/60",children:"Avg Speed"})]}),n.jsxs("div",{className:"text-center",children:[n.jsx("div",{className:"text-3xl font-bold text-yellow-400",children:L>0?`+${L}`:"0"}),n.jsx("div",{className:"text-xs text-white/60",children:"Coins"})]})]})]})]}),n.jsxs("div",{className:"rounded-2xl bg-white/5 backdrop-blur border border-white/10 p-4 mb-6",children:[n.jsxs("div",{className:"flex items-center justify-between mb-3",children:[n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx(ev,{}),n.jsx("span",{className:"text-sm font-medium",children:"Your Progress"})]}),i.combo>0&&n.jsxs("div",{className:"flex items-center gap-1 px-2 py-1 rounded-full bg-orange-500/20 text-orange-400 text-xs",children:[n.jsx(tv,{}),i.combo," streak"]})]}),n.jsx("div",{className:"flex items-end gap-1 h-12 mb-2",children:G.map((O,ee)=>n.jsx("div",{className:`flex-1 rounded-t transition-all ${ee===G.length-1?"bg-gradient-to-t from-purple-500 to-purple-400":"bg-white/20"}`,style:{height:`${O.score/O.total*100}%`,minHeight:"4px"}},ee))}),n.jsx("div",{className:"text-xs text-white/40 text-center",children:"Last 5 quizzes"})]}),n.jsxs("div",{className:"grid grid-cols-2 gap-3 mb-6",children:[n.jsxs("button",{onClick:r,className:"relative overflow-hidden group rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 p-4 transition-all hover:scale-105 active:scale-95",children:[n.jsx("div",{className:"absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform"}),n.jsxs("div",{className:"relative flex items-center justify-between",children:[n.jsxs("div",{className:"text-left",children:[n.jsx("div",{className:"font-semibold",children:"Review"}),n.jsx("div",{className:"text-xs opacity-80",children:"Check answers"})]}),n.jsx(Zg,{})]})]}),n.jsx("button",{onClick:t,className:"relative overflow-hidden group rounded-2xl bg-white/10 backdrop-blur border border-white/20 p-4 transition-all hover:scale-105 active:scale-95 hover:bg-white/15",children:n.jsxs("div",{className:"flex items-center justify-between",children:[n.jsxs("div",{className:"text-left",children:[n.jsx("div",{className:"font-semibold",children:"Try Again"}),n.jsx("div",{className:"text-xs opacity-60",children:"New questions"})]}),n.jsx(Jg,{})]})})]}),n.jsxs("div",{className:"space-y-3",children:[n.jsx("div",{className:"text-sm font-medium text-white/60 px-1",children:"Recommended for you"}),U.map((O,ee)=>n.jsx("button",{onClick:O.action,className:"w-full group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur border border-white/10 p-4 transition-all hover:bg-white/10 hover:border-white/20",children:n.jsxs("div",{className:"flex items-center justify-between",children:[n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsx("div",{className:`p-2 rounded-xl bg-gradient-to-r ${O.color} opacity-20 group-hover:opacity-30 transition-opacity`,children:n.jsx("span",{className:"text-xl",children:O.icon})}),n.jsxs("div",{className:"text-left",children:[n.jsx("div",{className:"font-medium text-sm",children:O.title}),n.jsx("div",{className:"text-xs text-white/40",children:O.desc})]})]}),n.jsx(Vg,{})]})},ee))]}),n.jsx("div",{className:"mt-6 pt-6 border-t border-white/10",children:n.jsx("button",{onClick:()=>s("/profile/history",{state:{from:"results",returnToResults:!0}}),className:"w-full text-center text-sm text-white/40 hover:text-white/60 transition-colors",children:"View all history →"})}),N&&n.jsx("div",{className:"fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4",onClick:O=>{O.target===O.currentTarget&&C(!1)},children:n.jsxs("div",{className:"bg-gray-800 rounded-3xl p-6 w-full max-w-md border border-gray-700 relative overflow-hidden",onClick:O=>O.stopPropagation(),children:[n.jsx("div",{className:"absolute inset-0 opacity-10",children:n.jsx("div",{className:"h-full bg-gradient-to-br from-yellow-400 to-orange-500"})}),n.jsxs("div",{className:"relative",children:[n.jsxs("div",{className:"flex items-center justify-between mb-6",children:[n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsx("div",{className:"text-5xl",style:{animation:"coinRotate 2s linear infinite"},children:"🪙"}),n.jsxs("div",{children:[n.jsx("h3",{className:"text-2xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent",children:"Your Treasure"}),n.jsxs("p",{className:"text-3xl font-bold text-white mt-1",children:[c," Coins"]})]})]}),n.jsx("button",{onClick:()=>C(!1),className:"w-8 h-8 rounded-lg bg-white/5 border border-gray-600 grid place-items-center hover:bg-white/10 transition",children:"✕"})]}),n.jsxs("div",{className:"mb-6",children:[n.jsx("h4",{className:"text-sm font-medium text-gray-400 mb-3",children:"Ways to Earn"}),n.jsxs("div",{className:"space-y-3",children:[n.jsx("div",{className:"p-4 rounded-xl bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 hover:scale-[1.02] transition-transform",children:n.jsxs("div",{className:"flex items-center justify-between",children:[n.jsxs("div",{children:[n.jsxs("div",{className:"font-medium flex items-center gap-2",children:[n.jsx("span",{className:"text-2xl",children:"✅"}),"Complete Quizzes"]}),n.jsx("div",{className:"text-xs text-gray-400 mt-1",children:"+5 coins per correct answer"})]}),n.jsx("div",{className:"text-green-400 font-bold",children:"+5"})]})}),n.jsx("div",{className:"p-4 rounded-xl bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 hover:scale-[1.02] transition-transform",children:n.jsxs("div",{className:"flex items-center justify-between",children:[n.jsxs("div",{children:[n.jsxs("div",{className:"font-medium flex items-center gap-2",children:[n.jsx("span",{className:"text-2xl",children:"🎯"}),"Daily Challenge"]}),n.jsx("div",{className:"text-xs text-gray-400 mt-1",children:"Complete daily for bonus"})]}),n.jsx("div",{className:"text-blue-400 font-bold",children:"+5"})]})}),n.jsx("div",{className:"p-4 rounded-xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 hover:scale-[1.02] transition-transform",children:n.jsxs("div",{className:"flex items-center justify-between",children:[n.jsxs("div",{children:[n.jsxs("div",{className:"font-medium flex items-center gap-2",children:[n.jsx("span",{className:"text-2xl",children:"🎰"}),"Spin & Play"]}),n.jsx("div",{className:"text-xs text-gray-400 mt-1",children:"Test your luck!"})]}),n.jsx("div",{className:"text-purple-400 font-bold",children:"+50"})]})}),n.jsx("div",{className:"p-4 rounded-xl bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/20 hover:scale-[1.02] transition-transform",children:n.jsxs("div",{className:"flex items-center justify-between",children:[n.jsxs("div",{children:[n.jsxs("div",{className:"font-medium flex items-center gap-2",children:[n.jsx("span",{className:"text-2xl",children:"🏆"}),"Achievements"]}),n.jsx("div",{className:"text-xs text-gray-400 mt-1",children:"Unlock special rewards"})]}),n.jsx("div",{className:"text-orange-400 font-bold",children:"+???"})]})})]})]}),n.jsxs("div",{className:"mb-6",children:[n.jsxs("div",{className:"flex justify-between text-xs text-gray-400 mb-2",children:[n.jsx("span",{children:"Next reward"}),n.jsxs("span",{children:[100-i.coins%100," coins to go"]})]}),n.jsx("div",{className:"h-2 bg-white/10 rounded-full overflow-hidden",children:n.jsx("div",{className:"h-full bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full transition-all",style:{width:`${i.coins%100}%`}})})]}),n.jsx("button",{onClick:()=>{C(!1),s("/play")},className:"w-full py-3 rounded-xl bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-bold hover:scale-[1.02] transition-transform shadow-lg",children:"Start Earning Now! 🚀"})]})]})})]})})},rv=({questions:e,answers:t,skipped:r,onBack:s,onRetake:a,fromHistory:o=!1})=>{const i=je(),l=()=>{o?i("/profile/history",{replace:!0}):s?s():i(-1)},c=e.reduce((h,f,w)=>h+(t[w]===f.answerIndex?1:0),0),u=(r==null?void 0:r.filter(Boolean).length)||0,m=e.length-c-u;return n.jsxs("div",{className:"mt-2 card rounded-3xl p-5 w-full max-w-none mx-auto pb-24 h-full overflow-y-auto",children:[n.jsxs("div",{className:"flex items-center justify-between mb-4 pt-6",children:[n.jsx("button",{className:"px-3 py-1 rounded-xl border border-base-border bg-white/5",onClick:l,children:"← Back"}),n.jsx("h2",{className:"text-lg font-semibold",children:"Review Answers"}),n.jsx("div",{className:"w-16"})," "]}),n.jsxs("div",{className:"grid grid-cols-3 gap-2 mb-4",children:[n.jsxs("div",{className:"rounded-xl bg-green-600/10 border border-green-500/30 p-2 text-center",children:[n.jsx("div",{className:"text-xs text-green-400",children:"Correct"}),n.jsx("div",{className:"text-lg font-bold text-green-400",children:c})]}),n.jsxs("div",{className:"rounded-xl bg-red-600/10 border border-red-500/30 p-2 text-center",children:[n.jsx("div",{className:"text-xs text-red-400",children:"Incorrect"}),n.jsx("div",{className:"text-lg font-bold text-red-400",children:m})]}),n.jsxs("div",{className:"rounded-xl bg-amber-600/10 border border-amber-500/30 p-2 text-center",children:[n.jsx("div",{className:"text-xs text-amber-400",children:"Skipped"}),n.jsx("div",{className:"text-lg font-bold text-amber-400",children:u})]})]}),n.jsx("ol",{className:"space-y-4",children:e.map((h,f)=>{const w=t[f],x=!w&&w!==0,j=w===h.answerIndex;return n.jsxs("li",{className:"rounded-2xl border border-base-border bg-white/5 p-4 md:p-5",children:[n.jsxs("div",{className:"flex items-start justify-between mb-3",children:[n.jsxs("div",{className:"flex-1",children:[n.jsxs("div",{className:"text-sm md:text-base font-medium",children:["Q",f+1,". ",h.prompt]}),h.category&&n.jsxs("div",{className:"text-xs text-base-muted mt-1",children:["Category: ",h.category," • Difficulty: ",h.difficulty||"Medium"]})]}),n.jsx("div",{className:"ml-2",children:x?n.jsx("span",{className:"px-2 py-1 rounded text-xs bg-amber-600/20 text-amber-400",children:"Skipped"}):j?n.jsx("span",{className:"px-2 py-1 rounded text-xs bg-green-600/20 text-green-400",children:"✓ Correct"}):n.jsx("span",{className:"px-2 py-1 rounded text-xs bg-red-600/20 text-red-400",children:"✗ Wrong"})})]}),n.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-3",children:h.options.map((S,y)=>{const g=w===y,v=y===h.answerIndex;let N="w-full text-left px-3 py-2 rounded-xl border transition-all ";return v?N+="bg-green-600/20 border-green-500/50 text-green-300":g&&!v?N+="bg-red-600/20 border-red-500/50 text-red-300":N+="bg-base-bg/40 border-base-border text-base-muted",n.jsxs("div",{className:N,children:[n.jsxs("span",{className:"font-semibold mr-2",children:[["A","B","C","D"][y],"."]}),S,v&&n.jsx("span",{className:"ml-2 text-green-400",children:"✓"}),g&&!v&&n.jsx("span",{className:"ml-2 text-red-400",children:"✗"})]},y)})}),h.explanation&&n.jsxs("div",{className:"mt-3 p-3 rounded-xl bg-white/5 border border-base-border",children:[n.jsx("div",{className:"text-xs font-semibold text-brand-blue mb-1",children:"Explanation:"}),n.jsx("div",{className:"text-sm text-base-muted",children:h.explanation})]})]},h.id||f)})}),n.jsxs("div",{className:"mt-6 flex gap-2 justify-center sticky bottom-4",children:[n.jsx("button",{className:"px-4 py-2.5 rounded-xl border border-base-border bg-base-card backdrop-blur",onClick:l,children:"Back to Results"}),a&&n.jsx("button",{className:"px-4 py-2.5 rounded-xl bg-gradient-to-r from-brand-blue to-brand-purple text-white font-medium",onClick:a,children:"Retake Quiz"})]})]})},sv="qp_resume",Ud="qp_mistakes",Yd="qp_stats",qd="qp_lastset",Qd="qp_recent",Wd="qp_review_snapshot",av=50,us=(e="")=>e.replace(/-/g," ").replace(/\b\w/g,t=>t.toUpperCase()),Ua=(e="")=>e.toLowerCase().trim().replace(/[^\w\s-]/g,"").replace(/\s+/g,"-"),ov=(e,t)=>e.slice().sort(()=>Math.random()-.5).slice(0,t),Om=e=>{const t=e.slice();for(let r=t.length-1;r>0;r--){const s=Math.floor(Math.random()*(r+1));[t[r],t[s]]=[t[s],t[r]]}return t},iv=(e,t,r)=>Math.max(t,Math.min(r,e)),ms=(e,t)=>{try{const r=localStorage.getItem(e);return r?JSON.parse(r):t}catch{return t}};async function lv(){const e="/data/quiz_questions_bank.csv",t=await fetch(e);if(!t.ok)throw new Error(`CSV not found at ${e}`);const r=await t.text(),{data:s}=vr.parse(r,{header:!0,skipEmptyLines:!0,transformHeader:o=>String(o).trim().toLowerCase()}),a={a:0,b:1,c:2,d:3};return s.map((o,i)=>{var f;const l=[o.option1,o.option2,o.option3,o.option4].map(w=>(w??"").trim());if(l.some(w=>!w))return null;let c=-1;const u=String(o.answer??"").trim();if(a[u.toLowerCase()]!==void 0)c=a[u.toLowerCase()];else{const w=l.findIndex(x=>x.toLowerCase()===u.toLowerCase());c=w>=0?w:0}const m=String(o.category??o.subject??"General Knowledge").trim(),h=String(o.difficulty??"medium").toLowerCase().trim();return{id:((f=o.id)==null?void 0:f.trim())||`q_${i}`,category:m,difficulty:h,prompt:String(o.question??"").trim(),options:l,answerIndex:c,explanation:String(o.explanation??"").trim()}}).filter(Boolean)}function cv(e,{categorySlug:t,difficulty:r,count:s}){console.log("=== BUILD SESSION DEBUG ==="),console.log("categorySlug:",t),console.log("difficulty:",r),console.log("count:",s),console.log("Total questions available:",e.length);const o=t==="mixed"?()=>!0:m=>Ua(m.category)===t,i=r?m=>(m.difficulty||"medium")===r:()=>!0,l=e.filter(m=>o(m)&&i(m));if(console.log("Filtered pool size:",l.length),console.log("Sample categories from all questions:",[...new Set(e.slice(0,10).map(m=>`"${m.category}" -> "${Ua(m.category)}"`))]),l.length===0)return console.error("No questions match the filter criteria!"),console.log("Available categories:",[...new Set(e.map(m=>Ua(m.category)))]),{questions:[],poolSize:0};const u=ov(l,Math.min(s,l.length)).map(m=>{const h=Om([0,1,2,3]),f=h.map(x=>m.options[x]),w=h.indexOf(m.answerIndex);return{...m,options:f,answerIndex:w}});return console.log("Final questions:",u.length),{questions:u,poolSize:l.length}}function dv(){const e=je(),{category:t}=Vp(),r=Je(),{energy:s,useEnergy:a,player:o,updateDailyStreak:i}=Sn(),l=new URLSearchParams(r.search),c=l.get("review")==="1",u=l.get("retake")==="1",m=r.state||{},h=m.mode||"quiz",f=String(m.difficulty||"medium").toLowerCase(),w=m.returnPath||null,x=m.fromQuest||!1,j=iv(Number(m.count||10),1,50),S=m.timer||{type:"per_q",seconds:45};m.resume,m.daily,m.source;const y=u||!!m.retake,g=!!m.fromHistory,v=h==="practice";console.log("Quiz Component - Mode Detection:",{routerState:m,mode:h,isPractice:v,location:r.pathname,state:r.state});const[N,C]=d.useState([]),[P,E]=d.useState(!0),[p,b]=d.useState(""),[k,_]=d.useState({questions:[]}),[R,F]=d.useState("quiz"),[Q,V]=d.useState(null),[K,q]=d.useState(null),[M,I]=d.useState(0);d.useEffect(()=>{let $=!0;return(async()=>{try{const Z=await lv();if(!$)return;C(Z)}catch(Z){console.error(Z),b("Failed to load questions. Check /public/data/quiz_questions_bank.csv")}finally{E(!1)}})(),()=>{$=!1}},[]),d.useEffect(()=>{var $;if(($=r.state)!=null&&$.returnToResults){const Z=ie.getCurrentResults();Z&&(V(Z),F("results"),E(!1),_({questions:[]}))}},[r.state]),d.useEffect(()=>{var Z;if(P||p||c||(Z=r.state)!=null&&Z.returnToResults||N.length===0)return;console.log("=== SESSION INIT ==="),console.log("Category:",t),console.log("Mode:",h),console.log("Difficulty:",f),console.log("Count:",j);const $=cv(N,{categorySlug:t,difficulty:f,count:j});if($.questions.length===0){console.error("No questions found!"),console.log("Looking for category:",t),console.log("Available categories (first 10):",[...new Set(N.map(U=>Ua(U.category)))].slice(0,10)),b(`No questions found for "${us(t)}" with difficulty "${f}"`);return}console.log("Session built with",$.questions.length,"questions"),F("quiz"),V(null),_($),q(Date.now()),I(0)},[N,t,h,f,j,r.pathname]),d.useEffect(()=>{if(R!=="quiz"||!K)return;const $=setInterval(()=>{I(Date.now()-K)},1e3);return()=>clearInterval($)},[R,K]);const D=d.useCallback($=>{if(console.log("Quiz completed - Mode:",h,"isPractice:",v,"Results:",$),console.log("handleQuizComplete called at:",new Date().toISOString()),window._quizCompleting){console.warn("Quiz completion already in progress, ignoring duplicate call");return}if(window._quizCompleting=!0,setTimeout(()=>{window._quizCompleting=!1},1e3),!$||!$.questions){console.error("Invalid results object:",$);return}const Z=$.questions.filter((W,H)=>$.answers[H]!==null&&$.answers[H]!==W.answerIndex).map(W=>W.id);try{const W=ms(Ud,[]),H=Array.from(new Set([...Z,...W]));localStorage.setItem(Ud,JSON.stringify(H))}catch(W){console.error("Error saving mistakes:",W)}try{const W=ms(Yd,{sessions:[]});W.sessions.push({cat:us(t),mode:v?"practice":"quiz",total:$.total,correct:$.correct,skipped:$.skipped.filter(Boolean).length,ms:M,timestamp:Date.now(),earnedXP:v?0:$.correct*10,earnedCoins:v?0:$.correct*5}),localStorage.setItem(Yd,JSON.stringify(W))}catch(W){console.error("Error saving stats:",W)}const U={ts:Date.now(),slug:t,categoryLabel:us(t),mode:v?"practice":"quiz",difficulty:f,total:$.total,timer:v?null:S,ms:M,attempted:$.answers.filter(W=>W!==null).length,correct:$.correct,questions:$.questions,answers:$.answers,skipped:$.skipped,isPractice:v};try{localStorage.setItem(qd,JSON.stringify(U)),localStorage.setItem(Wd,JSON.stringify({questions:$.questions,answers:$.answers,skipped:$.skipped}));const W=ms(Qd,[]),X=[{id:U.ts,ts:U.ts,cat:U.categoryLabel,slug:t,mode:v?"Practice":"Quiz",total:$.total,correct:$.correct,ms:M,snapshot:U},...W].slice(0,av);localStorage.setItem(Qd,JSON.stringify(X))}catch(W){console.error("Error saving snapshot:",W)}localStorage.removeItem(sv);const O=st.getCurrentUser();if(O!=null&&O.phone)if(v){const W=ie.recordPracticeSession(O.phone,{questionsCompleted:$.correct,correctAnswers:$.correct,category:t});$.earnedCoins=W.coinsEarned}else{const W=ie.recordQuizSession(O.phone,{score:$.correct,totalQuestions:$.total,category:t,difficulty:f,mode:"quiz"});$.earnedCoins=W.coinsEarned}else $.earnedCoins=0;i(),console.log("Setting review snapshot with:",{returnPath:w||"/",fromQuest:x||!1});const ee={...$,category:us(t),categorySlug:t,difficulty:f,mode:v?"practice":"quiz",elapsedMs:M,isPractice:v,hasTimer:!v,earnedXP:v?0:$.correct*10,earnedCoins:v?$.earnedCoins||0:$.correct*5,returnPath:w||"/",fromQuest:x||!1};ie.storeCurrentResults(ee),V(ee),F("results")},[t,h,S,M,v,w,x]),L=()=>{const $=new Date;return`${$.getFullYear()}-${$.getMonth()+1}-${$.getDate()}`};d.useCallback($=>{if(v&&x){const Z=JSON.parse(localStorage.getItem("questProgress")||"{}"),U=Z.practiceQuestions||0,O=Math.min(U+$,15);Z.practiceQuestions=O,Z.date=L(),localStorage.setItem("questProgress",JSON.stringify(Z)),console.log("Practice progress updated:",O)}},[v,x]);const T=d.useCallback(()=>{w?e(w,{replace:!0}):g?e("/profile/history",{replace:!0,state:null}):e("/")},[g,e,w]),z=d.useCallback(()=>{console.log("Retake requested - Mode:",h,"isPractice:",v);const $=ms(qd,null);if(!$||$.slug!==t){e(`/quiz/${t}?r=${Date.now()}`,{replace:!0,state:{mode:v?"practice":"quiz",difficulty:f,count:j,timer:v?null:S,retake:!0}});return}const Z=$.questions.map(U=>{const O=Om([0,1,2,3]);return{...U,options:O.map(ee=>U.options[ee]),answerIndex:O.indexOf(U.answerIndex)}});_({questions:Z,poolSize:Z.length}),q(Date.now()),I(0),F("quiz"),window.scrollTo(0,0)},[t,h,f,j,S,e,v]),B=d.useCallback(($=null)=>{if($)V($);else if(!Q){const Z=ms(Wd,null);Z&&V({questions:Z.questions||[],answers:Z.answers||[],skipped:Z.skipped||[]})}F("review")},[Q]),G=d.useCallback(()=>{g?e("/profile/history",{replace:!0}):F("results")},[g,e]);return P?n.jsx("div",{className:"fixed inset-0 bg-inherit text-white flex items-center justify-center",children:n.jsx("div",{className:"text-sm text-base-muted",children:"Loading questions…"})}):p?n.jsx("div",{className:"fixed inset-0 bg-inherit text-white flex items-center justify-center",children:n.jsx("div",{className:"text-sm text-red-400",children:p})}):(console.log("Render - Current view:",R,"Session questions:",k.questions.length,"Mode:",h,"isPractice:",v),n.jsx("div",{className:"fixed inset-0 bg-inherit text-white z-0 overflow-hidden max-w-[100vw]",children:n.jsxs("div",{className:"h-full overflow-hidden px-0",children:[R==="quiz"&&k.questions.length>0&&n.jsx("div",{className:"h-full",children:n.jsx(Xg,{session:k,mode:v?"practice":"quiz",category:us(t),difficulty:f,timerConfig:v?null:S,onComplete:D,onQuit:T,isPractice:v})}),R==="results"&&Q&&n.jsx(nv,{results:Q,onRetake:z,onReview:()=>B(Q),isRetake:y,isPractice:v,player:o,categories:Dm,onNavigate:($,Z)=>{console.log("onNavigate called with:",$,Z),Z!=null&&Z.state?e($,{state:Z.state,replace:Z.replace||!1}):e($)}}),R==="review"&&Q&&n.jsx(rv,{questions:Q.questions||[],answers:Q.answers||[],skipped:Q.skipped||[],onBack:G,onRetake:z,fromHistory:g,isPractice:v})]})}))}const Rn=[{label:"General Knowledge",slug:"general-knowledge",color:"#7C3AED",soon:!1},{label:"Current Affairs",slug:"current-affairs",color:"#2563EB",soon:!1},{label:"Fun Facts",slug:"fun-facts",color:"#EF4444",soon:!1},{label:"Science",slug:"science",color:"#10B981",soon:!1},{label:"History",slug:"history",color:"#F59E0B",soon:!0},{label:"Geography",slug:"geography",color:"#FACC15",soon:!0},{label:"Cat 1",slug:"cat-1",color:"#06B6D4",soon:!0},{label:"Cat 2",slug:"cat-2",color:"#D946EF",soon:!0}],tr=360/Rn.length,uv=42,fi=3e3,Gd=10,Hd=260,mv="cubic-bezier(.15,.7,.1,1)",fv="cubic-bezier(.2,.7,.2,1)",Tn=5,hv=5,pv=(e="")=>String(e).toLowerCase().trim().replace(/[^\w\s-]/g,"").replace(/\s+/g,"-");function xv({muted:e=!1,size:t=18}){return n.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24","aria-hidden":"true",children:[n.jsx("path",{d:"M3 9h4l5-4v14l-5-4H3z",fill:"currentColor"}),!e&&n.jsxs(n.Fragment,{children:[n.jsx("path",{d:"M16 8c1.5 1.5 1.5 6 0 7.5",stroke:"currentColor",strokeWidth:"2",fill:"none",strokeLinecap:"round"}),n.jsx("path",{d:"M19 6c3 3 3 10 0 13",stroke:"currentColor",strokeWidth:"2",fill:"none",strokeLinecap:"round"})]}),e&&n.jsx("line",{x1:"3",y1:"21",x2:"21",y2:"3",stroke:"#EF4444",strokeWidth:"2.5",strokeLinecap:"round"})]})}function gv({q:e,locked:t,onPick:r,result:s}){if(!e)return null;const a=[e.option1,e.option2,e.option3,e.option4];return n.jsxs("div",{className:"mt-5 rounded-3xl bg-white/5 border border-white/10 p-4",children:[n.jsx("div",{className:"text-sm text-base-muted mb-1",children:"Quick question"}),n.jsx("div",{className:"text-xl font-semibold mb-4",children:e.question}),a.map((o,i)=>{const l=s&&o===e.answer,c=s&&s.pick===o&&o!==e.answer;return n.jsx("button",{disabled:t||!!s,onClick:()=>r(o),className:["w-full text-left px-4 py-2 rounded-xl mb-2 border transition",!s&&!t?"bg-white/5 hover:bg-white/10 border-white/10":"bg-white/5 border-white/10",l?"bg-green-600/20 border-green-400/60 text-green-200":"",c?"bg-red-600/20 border-red-400/60 text-red-200":""].join(" "),children:o},i)}),s&&n.jsxs("div",{className:"mt-3 text-sm",children:[s.correct?n.jsx("span",{className:"text-green-400 font-medium",children:"✅ Correct!"}):n.jsxs("span",{className:"text-red-400 font-medium",children:["❌ Not quite. Answer: ",n.jsx("b",{children:e.answer})]}),e.explanation&&n.jsxs("div",{className:"text-xs text-base-muted mt-1",children:["Tip: ",e.explanation]})]})]})}function vv(){const e=je(),[t]=et("/sounds/correct.mp3",{volume:.7}),[r]=et("/sounds/wrong.mp3",{volume:.7}),[s,a]=d.useState(()=>[{name:"Player 1",color:"#60A5FA",scores:Array(Tn).fill(null)},{name:"Player 2",color:"#F472B6",scores:Array(Tn).fill(null)}]),[o,i]=d.useState(0),[l,c]=d.useState(1),u=s.reduce((U,O)=>U+O.scores.reduce((ee,W)=>ee+(W??0),0),0),[m,h]=d.useState(!0),f=d.useRef(null);d.useEffect(()=>{const U=new Audio("/sounds/spin.mp3");return U.loop=!0,U.volume=.7,f.current=U,()=>{try{U.pause(),U.src=""}catch{}}},[]);const w=()=>{if(m&&f.current)try{f.current.currentTime=0,f.current.play()}catch{}},x=()=>{if(f.current)try{f.current.pause(),f.current.currentTime=0}catch{}},[j,S]=d.useState(0),[y,g]=d.useState("none"),[v,N]=d.useState(!1),[C,P]=d.useState(null),[E,p]=d.useState(null),b=d.useMemo(()=>typeof window<"u"?window.matchMedia("(prefers-reduced-motion: reduce)").matches:!1,[]),[k,_]=d.useState([]);d.useEffect(()=>{(async()=>{try{const U=await fetch("/data/quiz_questions_bank.csv").then(H=>H.text()),{data:O}=vr.parse(U,{header:!0,skipEmptyLines:!0,transformHeader:H=>String(H).trim().toLowerCase()}),ee={a:0,b:1,c:2,d:3},W=O.map((H,X)=>{var le;const J=(H.question??"").trim();if(!J)return null;const Y=[H.option1,H.option2,H.option3,H.option4].map(ue=>String(ue??"").trim());if(Y.some(ue=>!ue))return null;let A=String(H.answer??"").trim(),te=ee[A.toLowerCase()];if(te===void 0){const ue=Y.findIndex(Ne=>Ne.toLowerCase()===A.toLowerCase());te=ue>=0?ue:0}const ne=Y[te];return{id:((le=H.id)==null?void 0:le.trim())||`ps_${X}`,question:J,option1:Y[0],option2:Y[1],option3:Y[2],option4:Y[3],answer:ne,explanation:String(H.explanation??"").trim(),catSlug:pv(H.category??H.subject??"general knowledge"),difficulty:String(H.difficulty??"medium").toLowerCase().trim()}}).filter(Boolean);_(W)}catch{_([])}})()},[]);const[R,F]=d.useState(null),[Q,V]=d.useState(null),[K,q]=d.useState(!1),M=U=>(U%360+360)%360,I=U=>M(U),D=l>Tn;function L(){if(s.length>=4)return;const U=["#60A5FA","#F472B6","#F59E0B","#34D399","#F87171","#A78BFA"],O=U[(s.length*2+1)%U.length];a(ee=>[...ee,{name:`Player ${ee.length+1}`,color:O,scores:Array(Tn).fill(null)}])}function T(){s.length<=2||(a(U=>U.slice(0,-1)),i(U=>Math.min(U,s.length-2)))}function z(U){a(O=>O.map((ee,W)=>W===o?{...ee,scores:ee.scores.map((H,X)=>X===l-1?U:H)}:ee))}function B(){if(v||D)return;P(null),p(null),F(null),V(null),N(!0),w();const U=Math.floor(Math.random()*Rn.length),O=Rn[U],ee=tr*.28,W=(Math.random()*2-1)*ee,H=M(j),X=180,Y=U*tr+tr/2+W;let A=I(Y-H-X);const te=uv*360+A,ne=j+te+Gd;g(`transform ${b?800:fi}ms ${mv}`),S(ne);try{navigator.vibrate&&!b&&navigator.vibrate([10,40,10])}catch{}setTimeout(()=>{g(`transform ${b?160:Hd}ms ${fv}`),S(le=>le-Gd)},b?800:fi),setTimeout(()=>{if(x(),N(!1),P(U),p(O.color),O.soon)return;const le=k.filter(Ne=>Ne.catSlug===O.slug&&Ne.difficulty==="easy"),ue=le.length?le:k.filter(Ne=>Ne.catSlug===O.slug);if(ue.length){const Ne=ue[Math.floor(Math.random()*ue.length)];F(Ne)}else F({question:"No question found for this category yet. Try re-spinning!",option1:"Okay",option2:"Okay",option3:"Okay",option4:"Okay",answer:"Okay",explanation:""})},(b?800:fi)+(b?160:Hd)+40)}function G(U){if(!R||Q)return;const O=U===R.answer;if(V({correct:O,pick:U}),O){t(),q(!0),setTimeout(()=>q(!1),900);try{navigator.vibrate&&navigator.vibrate([8,16])}catch{}z(hv)}else{r();try{navigator.vibrate&&navigator.vibrate([4])}catch{}z(0)}}function $(){const U=(o+1)%s.length,O=U===0?l+1:l;i(U),c(O),P(null),p(null),F(null),V(null)}function Z(){const U=s.map(W=>W.scores.reduce((H,X)=>H+(X??0),0)),O=Math.max(...U),ee=s.filter((W,H)=>U[H]===O).map(W=>W.name).join(", ");alert(`${ee} win${ee.includes(",")?"":"s"} the pot of ${u} coins! 🎉`),e("/play")}return n.jsxs("div",{className:"min-h-screen bg-black text-white",children:[K&&n.jsx(Mm,{numberOfPieces:120,recycle:!1}),n.jsxs("div",{className:"mx-auto max-w-md px-5 pt-[calc(env(safe-area-inset-top)+1.25rem)] pb-[calc(5.25rem+env(safe-area-inset-bottom))]",children:[n.jsxs("header",{className:"flex items-center justify-between mb-4",children:[n.jsx("button",{onClick:()=>e("/play"),className:"h-10 w-10 grid place-items-center rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition","aria-label":"Back",children:"←"}),n.jsxs("div",{className:"text-center",children:[n.jsx("h1",{className:"text-2xl font-bold",children:"Party Spin"}),n.jsx("p",{className:"text-sm text-base-muted",children:"Pass & play • Winner takes the pot"})]}),n.jsx("button",{onClick:()=>h(U=>!U),className:"h-10 w-10 grid place-items-center rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition","aria-label":m?"Mute sound":"Unmute sound",title:m?"Sound on":"Sound off",children:n.jsx(xv,{muted:!m})})]}),n.jsxs("section",{className:"rounded-2xl border border-white/10 bg-white/5 p-3 mb-4",children:[n.jsxs("div",{className:"flex items-center justify-between mb-2",children:[n.jsxs("div",{className:"text-sm",children:["Round ",n.jsx("b",{children:Math.min(l,Tn)}),"/",n.jsx("b",{children:Tn})]}),n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx("button",{onClick:L,className:"btn-ghost px-2 py-1 text-sm",children:"+"}),n.jsx("span",{className:"text-sm text-base-muted",children:"Player"}),n.jsx("button",{onClick:T,className:"btn-ghost px-2 py-1 text-sm",children:"−"})]}),n.jsxs("div",{className:"text-sm",children:["Pot: ",n.jsx("b",{className:"text-yellow-300",children:u})," 🪙"]})]}),n.jsx("div",{className:"overflow-x-auto",children:n.jsxs("table",{className:"w-full table-fixed text-sm tracking-tight tabular-nums",children:[n.jsxs("colgroup",{children:[n.jsx("col",{style:{width:"42%"}}),n.jsx("col",{style:{width:"9%"}}),n.jsx("col",{style:{width:"9%"}}),n.jsx("col",{style:{width:"9%"}}),n.jsx("col",{style:{width:"9%"}}),n.jsx("col",{style:{width:"9%"}}),n.jsx("col",{style:{width:"13%"}})]}),n.jsx("thead",{children:n.jsxs("tr",{className:"text-base-muted",children:[n.jsx("th",{className:"text-left font-medium py-1 pr-1",children:"Player"}),Array.from({length:Tn}).map((U,O)=>n.jsxs("th",{className:"font-medium text-center",children:["R",O+1]},O)),n.jsx("th",{className:"font-medium text-right pr-1",children:"Total"})]})}),n.jsx("tbody",{children:s.map((U,O)=>{const ee=U.scores.reduce((H,X)=>H+(X??0),0),W=O===o;return n.jsxs("tr",{className:W?"bg-white/6":"",children:[n.jsx("td",{className:"py-1 pr-1",children:n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx("span",{className:"inline-block h-3 w-3 rounded-full shrink-0",style:{background:U.color}}),n.jsx("input",{className:"bg-transparent outline-none font-semibold w-full",value:U.name,onChange:H=>a(X=>X.map((J,Y)=>Y===O?{...J,name:H.target.value}:J))})]})}),U.scores.map((H,X)=>n.jsx("td",{className:"text-center",children:H===null?"–":H},X)),n.jsx("td",{className:"text-right pr-1 font-semibold",children:ee})]},O)})})]})})]}),n.jsx("section",{className:"flex flex-col items-center",children:n.jsxs("div",{className:"relative w-[320px] h-[320px] md:w-[380px] md:h-[380px] rounded-full select-none",children:[E&&n.jsx("div",{className:"pointer-events-none absolute -inset-2 rounded-full",style:{boxShadow:`0 0 0 6px ${E}33, 0 0 30px 8px ${E}44`}}),n.jsx("div",{className:"absolute inset-0 rounded-full border border-white/10 shadow-2xl bg-black/20 overflow-hidden will-change-transform",style:{transform:`rotate(${j}deg)`,transition:y},"aria-label":"Category wheel",role:"group",children:n.jsxs("svg",{width:"100%",height:"100%",viewBox:"0 0 100 100",className:"block",children:[Rn.map((U,O)=>{const ee=O*tr,W=ee+tr,H=tr>180?1:0,X=Math.PI*ee/180,J=Math.PI*W/180,Y=50+50*Math.cos(X),A=50-50*Math.sin(X),te=50+50*Math.cos(J),ne=50-50*Math.sin(J),le=C===O;return n.jsxs("g",{style:{opacity:C==null?.95:le?1:.78,filter:C!=null&&!le?"blur(0.6px)":"none"},children:[n.jsx("path",{d:`M50,50 L${Y},${A} A50,50 0 ${H} 0 ${te},${ne} Z`,fill:U.color,stroke:le?`${U.color}AA`:"rgba(255,255,255,0.14)",strokeWidth:le?"1.2":"0.6"}),n.jsx("text",{x:"50",y:"50",fill:"#ffffff",fontSize:"4",fontWeight:"700",dominantBaseline:"middle",transform:`rotate(${ee+tr/2} 50 50) translate(12 0)`,children:n.jsxs("tspan",{children:[U.label,U.soon?" (soon)":""]})})]},U.slug)}),n.jsx("circle",{cx:"50",cy:"50",r:"9",fill:"rgba(0,0,0,0.55)",stroke:"white",strokeOpacity:"0.25"})]})}),n.jsx("button",{onClick:B,disabled:v||D,className:["absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2","h-16 w-16 rounded-full grid place-items-center","bg-white text-black font-extrabold shadow-soft transition active:scale-[0.98]",v||D?"opacity-60 cursor-not-allowed":"hover:bg-gray-200"].join(" "),"aria-label":"Spin the wheel",children:"SPIN"}),n.jsx("div",{className:"absolute left-1/2 -translate-x-1/2 -bottom-3 z-20",children:n.jsx("svg",{width:"22",height:"22",viewBox:"0 0 24 24",children:n.jsx("path",{d:"M12 4 L20 20 L4 20 Z",fill:"#ffffff"})})}),C!=null&&!v&&n.jsx("div",{className:"absolute left-1/2 -translate-x-1/2 -bottom-10",children:n.jsxs("div",{className:"px-3 py-1 rounded-full bg-white/10 border border-white/20 text-sm backdrop-blur",children:[n.jsx("span",{className:"inline-block h-2.5 w-2.5 rounded-full mr-2 align-middle",style:{background:Rn[C].color}}),Rn[C].label]})})]})}),n.jsx("section",{className:"mt-4",children:D?n.jsxs("div",{className:"rounded-2xl border border-white/10 bg-white/5 p-4",children:[n.jsx("div",{className:"text-xl font-semibold mb-2",children:"Match Over"}),n.jsxs("p",{className:"text-sm text-base-muted mb-3",children:["Top score takes the pot of ",n.jsx("b",{className:"text-yellow-300",children:u})," coins."]}),n.jsx("button",{className:"btn-primary w-full",onClick:Z,children:"End match"})]}):C!=null&&Rn[C].soon?n.jsxs("div",{className:"rounded-2xl border border-white/10 bg-white/5 p-4",children:[n.jsx("div",{className:"text-lg font-semibold mb-1",children:Rn[C].label}),n.jsx("p",{className:"text-sm text-base-muted mb-3",children:"This category is arriving soon. Spin again!"}),n.jsx("button",{className:"btn-primary",onClick:B,disabled:v,children:"Re-spin"})]}):n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:"text-sm text-center text-base-muted mb-1",children:["Turn: ",n.jsx("span",{style:{color:s[o].color},children:s[o].name})," ","| Round ",l,"/",Tn]}),n.jsx(gv,{q:R,locked:v||!R,onPick:G,result:Q}),Q&&n.jsx("div",{className:"mt-3 flex justify-center",children:n.jsx("button",{className:"btn-primary",onClick:$,children:"Next turn"})})]})})]}),n.jsx("div",{className:"pointer-events-none fixed inset-x-0 bottom-0 bg-[#0B0F1A]",style:{height:"calc(5.25rem + env(safe-area-inset-bottom))"},"aria-hidden":!0})]})}const yv=({onSelect:e})=>{const t=[{id:"random",emoji:"🎲",title:"Random Mix",color:"from-purple-500 to-pink-500"},{id:"trending",emoji:"📈",title:"Trending Now",color:"from-blue-500 to-cyan-500"},{id:"level",emoji:"📊",title:"Your Level",color:"from-green-500 to-teal-500"},{id:"daily",emoji:"🎯",title:"Daily Challenge",color:"from-orange-500 to-red-500"}];return n.jsxs("div",{className:"fixed inset-0 bg-gray-900 overflow-hidden flex flex-col justify-center items-center px-4",children:[n.jsx("h1",{className:"text-2xl font-bold text-white mb-20",children:"Choose a swipe mode"}),n.jsx("div",{className:"grid grid-cols-2 gap-4 w-full max-w-md h-[55vh]",children:t.map(r=>n.jsxs("button",{onClick:()=>e(r.id,r.title),className:`rounded-3xl bg-gradient-to-br ${r.color} p-6 flex flex-col items-center justify-center gap-3 transform hover:scale-105 transition-all shadow-xl`,children:[n.jsx("span",{className:"text-5xl",children:r.emoji}),n.jsx("span",{className:"text-white font-bold text-lg text-center",children:r.title})]},r.id))})]})},bv=()=>{je(),Sn();const[e,t]=d.useState([]),[r,s]=d.useState(0),[a,o]=d.useState({}),[i,l]=d.useState(0),[c,u]=d.useState(5),[m,h]=d.useState(0),[f,w]=d.useState(!0),[x,j]=d.useState(null),[S,y]=d.useState(!0),[g,v]=d.useState(null),[N,C]=d.useState(""),[P,E]=d.useState(!1),[p,b]=d.useState(""),[k,_]=d.useState(!1),[R,F]=d.useState(!1),[Q,V]=d.useState(!1),[K,q]=d.useState(!1),[M,I]=d.useState(!1),[D,L]=d.useState(!1),[T,z]=d.useState(0),[B,G]=d.useState(0),[$,Z]=d.useState(-1),[U,O]=d.useState(-1),[ee,W]=d.useState({}),[H,X]=d.useState({}),[J,Y]=d.useState(ie.getCoins()),A=d.useRef(null),[te,ne]=d.useState(null),[le,ue]=d.useState(!1),Ne=d.useRef(null),ge=d.useRef(null),[ot]=et("/sounds/correct.mp3",{volume:.6}),[Ee]=et("/sounds/wrong.mp3",{volume:.6}),[qe]=et("/sounds/coin.mp3",{volume:.75}),ke=["🐼","🐱","🐶","🦊","🐰","🐨","🐯","🦁","🐸","🐵"],Me=()=>{t([]),s(0),o({}),l(0),u(5),h(0),w(!0),j(null),E(!1),b(""),_(!1),F(!1),V(!1),q(!1),I(!1),L(!1),z(0),G(0),Z(-1),O(-1),W({}),X({}),v(null),C(""),ht(null),ue(!1)};d.useEffect(()=>(Me(),y(!0),()=>{document.body.classList.remove("hide-bottom-nav"),Me(),ge.current&&clearTimeout(ge.current)}),[]),d.useEffect(()=>{const se=me=>{!S&&e.length>0&&(me.preventDefault(),F(!0))};return!S&&e.length>0&&window.history.pushState({inQuiz:!0},"",window.location.pathname),window.addEventListener("popstate",se),()=>window.removeEventListener("popstate",se)},[S,e.length]),d.useEffect(()=>{!S&&e.length>0?document.body.classList.add("hide-bottom-nav"):document.body.classList.remove("hide-bottom-nav")},[S,e.length]),d.useEffect(()=>{!S&&e.length>0&&q(!0)},[S,e.length]);const[ft,ht]=d.useState(null);d.useEffect(()=>{const se=me=>{var Se;if(K&&!Q){const be=me.target.closest('button[type="button"]'),We=(Se=be==null?void 0:be.querySelector(".text-\\[10px\\]"))==null?void 0:Se.textContent;We&&["Home","Play","Profile","Swipe"].includes(We)&&(me.preventDefault(),me.stopPropagation(),ht({Home:"/",Play:"/play",Profile:"/profile",Swipe:"/swipe"}[We]),F(!0))}};return document.addEventListener("click",se,!0),()=>document.removeEventListener("click",se,!0)},[K,Q]),d.useEffect(()=>{const se=Ne.current;if(!se)return;let me=!1,Se=0,be=null;const We=Xe=>{!S&&e.length>0&&Xe.preventDefault()},ve=Xe=>{Se=Xe.touches[0].clientY,me=!1},Ge=Xe=>{!S&&e.length>0&&!R&&!k&&Xe.preventDefault()},Te=Xe=>{if(me||R||k)return;const de=Xe.changedTouches[0].clientY,fe=Se-de;if(Math.abs(fe)>30){if(me=!0,be&&clearTimeout(be),fe>0&&r<e.length-1){const he=r+1;s(he),se.scrollTo({top:he*window.innerHeight,behavior:"smooth"})}else if(fe<0&&r>0){const he=r-1;s(he),se.scrollTo({top:he*window.innerHeight,behavior:"smooth"})}be=setTimeout(()=>{me=!1},800)}};return se.addEventListener("touchstart",ve,{passive:!1}),se.addEventListener("touchmove",Ge,{passive:!1}),se.addEventListener("touchend",Te,{passive:!1}),se.addEventListener("wheel",We,{passive:!1}),()=>{se.removeEventListener("touchstart",ve),se.removeEventListener("touchmove",Ge),se.removeEventListener("touchend",Te),se.removeEventListener("wheel",We),be&&clearTimeout(be)}},[r,e.length,S]),d.useEffect(()=>{const se=Ne.current;se&&(R||k?(se.style.overflow="hidden",se.style.touchAction="none"):(se.style.overflow="auto",se.style.touchAction="auto"))},[R,k]),d.useEffect(()=>{(R||k)&&ge.current&&(clearTimeout(ge.current),ge.current=null)},[R,k]);const _e=async se=>{try{const Se=await(await fetch("/data/quiz_questions_bank.csv")).text(),{data:be}=vr.parse(Se,{header:!0,skipEmptyLines:!0}),Ge=be.map((Te,Xe)=>{var he,nt;const de=[Te.option1,Te.option2,Te.option3,Te.option4].filter(Boolean),fe={A:0,B:1,C:2,D:3};return{id:Te.id||`q_${Xe}`,prompt:Te.question,options:de,answerIndex:fe[(he=Te.answer)==null?void 0:he.toUpperCase()]||0,category:Te.category||"General Knowledge",difficulty:((nt=Te.difficulty)==null?void 0:nt.toLowerCase())||"medium",explanation:Te.explanation||"",stats:{views:Math.floor(Math.random()*1e4)+1e3,attempted:Math.floor(Math.random()*5e3)+500,correctRate:Math.floor(Math.random()*40)+30}}}).filter(Te=>Te.prompt&&Te.options.length===4).sort(()=>Math.random()-.5).slice(0,50).map(Te=>({...Te,mascot:ke[Math.floor(Math.random()*ke.length)]}));t(Ge),w(!1)}catch(me){console.error("Failed to load questions:",me),w(!1)}},$e=se=>se===1||se===3||se===7||se===10||se===15||se===20||se>20&&se%5===0,Qe=(se,me)=>{if(a[se]!==void 0)return;const Se=e.find(ve=>ve.id===se),be=me===Se.answerIndex,We=e.findIndex(ve=>ve.id===se);if(o(ve=>({...ve,[se]:me})),z(ve=>ve+1),G(ve=>ve+1),be){ot(),l(Ge=>Ge+1),h(Ge=>Ge+2),ie.addCoins(2,"Swipe Quiz Correct Answer");const ve=ie.getCoins();if(Y(ve),L(!0),setTimeout(()=>{qe(),console.log("Coin pill ref:",A.current),A.current?ne({startRect:{left:window.innerWidth/2-50,top:window.innerHeight/2,width:100,height:100},count:2,amount:2}):console.log("Coin pill ref not available")},300),setTimeout(()=>L(!1),2e3),At(),$e(We+1)){const Ge=["Awesome!","Perfect!","Brilliant!","Outstanding!","Incredible!"];b(Ge[Math.floor(Math.random()*Ge.length)]),E(!0),setTimeout(()=>E(!1),2e3)}}else if(Ee(),l(0),I(!0),setTimeout(()=>I(!1),1500),u(ve=>{const Ge=Math.max(0,ve-1);return Ge===0&&setTimeout(()=>_(!0),500),Ge}),c>1&&$e(We+1)){const ve=["Keep trying!","You got this!","Don't give up!","Stay strong!","Keep going!"];b(ve[Math.floor(Math.random()*ve.length)]),E(!0),setTimeout(()=>E(!1),2e3)}(c>1||be)&&(ge.current=setTimeout(()=>{ze()},2500))},At=()=>{const se=document.createElement("div");se.style.position="fixed",se.style.inset="0",se.style.pointerEvents="none",se.style.zIndex="1000",document.body.appendChild(se);const me=["🎉","✨","⭐","🎊","🌟"];for(let Se=0;Se<20;Se++){const be=document.createElement("div");be.textContent=me[Math.floor(Math.random()*me.length)],be.style.position="fixed",be.style.left=`${Math.random()*100}%`,be.style.top="-50px",be.style.fontSize="24px",be.style.animation=`fall ${2+Math.random()*2}s ease-out`,se.appendChild(be)}setTimeout(()=>se.remove(),4e3)},ze=()=>{if(!(R||k)&&r<e.length-1){const se=r+1,me=document.getElementById(`question-${se}`);me==null||me.scrollIntoView({behavior:"smooth"}),s(se)}},Ke=se=>{const me=e.findIndex(ve=>ve.id===se);if($>=0&&T<5){j(`After ${5-T} attempts`),setTimeout(()=>j(null),2e3);return}const Se=e[me],We=[0,1,2,3].filter(ve=>ve!==Se.answerIndex).sort(()=>Math.random()-.5).slice(0,2);W({...ee,[se]:We}),Z(me),z(0)},tt=se=>{const me=e.findIndex(Xe=>Xe.id===se);if(U>=0&&B<5){j(`After ${5-B} attempts`),setTimeout(()=>j(null),2e3);return}const be=e[me].answerIndex,We=[0,0,0,0],ve=40+Math.floor(Math.random()*31);We[be]=ve;let Ge=100-ve;const Te=[0,1,2,3].filter(Xe=>Xe!==be);for(let Xe=0;Xe<Te.length-1;Xe++){const de=Math.floor(Math.random()*(Ge/2));We[Te[Xe]]=de,Ge-=de}We[Te[Te.length-1]]=Ge,X({...H,[se]:We}),O(me),G(0)},Ct=(se,me)=>{Me(),v(se),C(me),y(!1),_e()},It=()=>{ht("/swipe"),F(!0)},un=()=>{V(!0),F(!1),document.body.classList.remove("hide-bottom-nav")},es=()=>{const se=Object.keys(a).filter(me=>{const Se=e.find(be=>be.id===me);return a[me]===(Se==null?void 0:Se.answerIndex)}).length;return d.useEffect(()=>{const me=ie.getCoins();Y(me)},[]),d.useEffect(()=>{document.body.classList.add("hide-bottom-nav"),m>0&&A.current&&!le&&(ue(!0),setTimeout(()=>{ne({startRect:{left:window.innerWidth/2-50,top:window.innerHeight/2,width:100,height:100},count:Math.min(m,10),amount:m}),qe()},100));const me=setTimeout(()=>{const Se=ie.getCoins();Y(Se),Me(),q(!1),V(!1),y(!0),document.body.classList.remove("hide-bottom-nav")},2e3);return()=>{clearTimeout(me),document.body.classList.remove("hide-bottom-nav")}},[m,le]),n.jsxs("div",{className:"fixed inset-0 bg-gray-900 z-50",children:[te&&n.jsx(Xn,{startRect:te.startRect,targetRef:A,count:te.count,onDone:()=>{ne(null)}}),n.jsx("div",{className:"fixed top-12 right-4 z-50",children:n.jsxs("div",{ref:A,className:"flex items-center gap-1 bg-yellow-500/20 px-3 py-1.5 rounded-full backdrop-blur",children:[n.jsx("span",{children:"🪙"}),n.jsx("span",{className:"font-bold text-yellow-400",children:J})]})}),n.jsx("div",{className:"flex items-center justify-center p-4 h-full",children:n.jsxs("div",{className:"bg-gray-800 rounded-3xl p-8 max-w-md w-full text-center border border-gray-700",children:[n.jsx("div",{className:"text-5xl mb-4",children:"🎉"}),n.jsx("h2",{className:"text-2xl font-bold text-white mb-4",children:"Session Complete!"}),n.jsxs("div",{className:"space-y-4",children:[n.jsxs("div",{className:"bg-gray-700/50 rounded-xl p-4",children:[n.jsx("div",{className:"text-gray-400 text-sm mb-1",children:"Questions Answered"}),n.jsx("div",{className:"text-2xl font-bold text-white",children:Object.keys(a).length})]}),n.jsxs("div",{className:"bg-gray-700/50 rounded-xl p-4",children:[n.jsx("div",{className:"text-gray-400 text-sm mb-1",children:"Correct Answers"}),n.jsx("div",{className:"text-2xl font-bold text-green-400",children:se})]}),n.jsxs("div",{className:"bg-gray-700/50 rounded-xl p-4",children:[n.jsx("div",{className:"text-gray-400 text-sm mb-1",children:"Coins Earned"}),n.jsxs("div",{className:"text-2xl font-bold text-yellow-400",children:["🪙 ",m]})]}),n.jsxs("div",{className:"bg-gray-700/50 rounded-xl p-4",children:[n.jsx("div",{className:"text-gray-400 text-sm mb-1",children:"Lives Remaining"}),n.jsx("div",{className:"text-2xl font-bold text-red-400",children:Array.from({length:5},(me,Se)=>n.jsx("span",{className:Se<c?"":"opacity-30",children:"❤️"},Se))})]})]})]})})]})};return Q?n.jsx(es,{}):S?n.jsx(yv,{onSelect:Ct}):f?n.jsx("div",{className:"h-screen bg-gray-900 flex items-center justify-center",children:n.jsx("div",{className:"text-white",children:"Loading questions..."})}):n.jsxs("div",{className:"h-screen bg-gray-900 relative",children:[te&&n.jsx(Xn,{startRect:te.startRect,targetRef:A,count:te.count,onDone:()=>{const se=ie.getCoins();Y(se),ne(null)}}),n.jsxs("div",{className:"fixed top-0 left-0 right-0 bg-gray-900/95 backdrop-blur z-50 border-b border-gray-800 pt-12",children:[n.jsxs("div",{className:"flex items-center justify-between px-4 py-3",children:[n.jsx("button",{onClick:It,className:"inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/15 rounded-xl text-white text-sm font-medium hover:bg-white/15 transition-all",children:"← Back"}),n.jsxs("div",{className:"flex items-center gap-4",children:[n.jsxs("div",{ref:A,className:"flex items-center gap-1 bg-yellow-500/20 px-3 py-1 rounded-full",children:[n.jsx("span",{children:"🪙"}),n.jsx("span",{className:"font-bold text-yellow-400",children:J})]}),n.jsxs("div",{className:"flex items-center gap-1 bg-orange-500/20 px-3 py-1 rounded-full",children:[n.jsx("span",{children:"🔥"}),n.jsx("span",{className:"font-bold text-orange-400",children:i})]})]}),n.jsx("div",{className:"flex items-center gap-1",children:Array.from({length:5},(se,me)=>n.jsx("span",{className:`${me<c?"text-red-500":"text-gray-600 opacity-30"} ${M&&me===c-1?"animate-heartLoss":""}`,children:"❤️"},me))})]}),N&&n.jsx("div",{className:"text-center py-1",children:n.jsx("span",{className:"text-xs text-gray-400",children:N})})]}),D&&n.jsx("div",{className:"fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[100] pointer-events-none",children:n.jsx("div",{className:"bg-yellow-500 text-white px-6 py-3 rounded-full font-bold text-2xl animate-coinFloat",children:"+2 🪙"})}),n.jsx("div",{ref:Ne,className:"h-full overflow-y-hidden snap-y snap-mandatory pt-32",style:{scrollBehavior:"smooth",overscrollBehavior:"none",WebkitOverflowScrolling:"touch",touchAction:"none"},children:e.map((se,me)=>n.jsx(wv,{question:se,index:me,answered:a[se.id],onAnswer:Se=>Qe(se.id,Se),onFiftyFifty:()=>Ke(se.id),onAudience:()=>tt(se.id),eliminated:ee[se.id]||[],audiencePercentages:H[se.id],canUseFiftyFifty:$<0||T>=5,canUseAudience:U<0||B>=5},se.id))}),k&&n.jsx("div",{className:"fixed inset-0 bg-black/75 flex items-center justify-center z-50 p-4",children:n.jsxs("div",{className:"bg-gray-800 rounded-3xl p-6 max-w-sm w-full text-center border border-gray-700",children:[n.jsx("div",{className:"text-5xl mb-4",children:"😔"}),n.jsx("h3",{className:"text-xl font-bold mb-2 text-white",children:"No Lives Left!"}),n.jsx("p",{className:"text-gray-400 mb-6",children:"Sorry, you have no lives left to continue swiping."}),n.jsx("button",{onClick:()=>{V(!0),document.body.classList.remove("hide-bottom-nav")},className:"w-full bg-gradient-to-r from-blue-600 to-purple-600 py-3 rounded-xl text-white font-medium",children:"View Results"})]})}),R&&n.jsx("div",{className:"fixed inset-0 bg-black/75 flex items-center justify-center z-50 p-4",children:n.jsxs("div",{className:"bg-gray-800 rounded-3xl p-6 max-w-sm w-full text-center border border-gray-700",children:[n.jsx("div",{className:"text-4xl mb-4",children:"🤔"}),n.jsx("h3",{className:"text-xl font-bold mb-2 text-white",children:"Leave Swipe Mode?"}),n.jsx("p",{className:"text-gray-400 mb-6",children:"Your progress will be saved"}),n.jsxs("div",{className:"flex gap-3",children:[n.jsx("button",{onClick:()=>F(!1),className:"flex-1 bg-blue-600 hover:bg-blue-700 py-3 rounded-xl font-medium text-white",children:"Stay"}),n.jsx("button",{onClick:un,className:"flex-1 bg-gray-700 hover:bg-gray-600 py-3 rounded-xl font-medium text-white",children:"Leave"})]})]})}),P&&n.jsx("div",{className:"fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50",children:n.jsx("div",{className:"bg-gradient-to-br from-purple-600 to-pink-600 px-8 py-6 rounded-3xl text-white font-bold text-2xl shadow-2xl animate-fadeIn",children:p})}),x&&n.jsx("div",{className:"fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 pointer-events-none",children:n.jsx("div",{className:"bg-gray-800/90 px-6 py-3 rounded-full text-white font-bold animate-fadeIn",children:x})}),n.jsx("style",{jsx:!0,children:`
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        
        @keyframes fall {
          to { 
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
          }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes heartLoss {
          0% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.5) rotate(-15deg); opacity: 0.8; }
          100% { transform: scale(0) rotate(-45deg); opacity: 0; }
        }
        
        @keyframes coinFloat {
          0% { transform: translate(-50%, -50%) scale(0.5); opacity: 0; }
          50% { transform: translate(-50%, -70%) scale(1.2); opacity: 1; }
          100% { transform: translate(-50%, -100%) scale(0.8); opacity: 0; }
        }
        
        .animate-heartLoss {
          animation: heartLoss 1.5s ease-out;
        }
        
        .animate-coinFloat {
          animation: coinFloat 2s ease-out;
        }
      `})]})},wv=({question:e,index:t,answered:r,onAnswer:s,onFiftyFifty:a,onAudience:o,eliminated:i,audiencePercentages:l,canUseFiftyFifty:c,canUseAudience:u})=>{const m=h=>{switch(h){case"easy":return"from-green-500 to-green-600";case"hard":return"from-red-500 to-red-600";default:return"from-yellow-500 to-yellow-600"}};return n.jsxs("div",{id:`question-${t}`,className:"h-screen snap-start flex flex-col px-4 pb-4",style:{paddingTop:"150px"},children:[n.jsx("div",{className:"flex justify-center py-2",children:n.jsx("span",{className:"text-8xl",style:{animation:"float 3s ease-in-out infinite"},children:e.mascot})}),n.jsxs("div",{className:"flex-1 flex flex-col justify-start max-w-md mx-auto w-full",children:[n.jsxs("div",{className:`bg-gradient-to-br ${m(e.difficulty)} p-6 rounded-3xl mb-4`,children:[n.jsxs("div",{className:"text-white/80 text-sm mb-2",children:["Question ",t+1]}),n.jsx("h2",{className:"text-2xl font-bold text-white",children:e.prompt})]}),n.jsx("div",{className:"space-y-3 mb-3",children:e.options.map((h,f)=>{const w=r!==void 0,x=r===f,j=f===e.answerIndex,S=i.includes(f);let y="w-full p-4 rounded-2xl font-medium transition-all ";return S?y+="bg-gray-700/30 text-gray-500/50 cursor-not-allowed":w?j?y+="bg-green-500 text-white":x?y+="bg-red-500 text-white":y+="bg-gray-700 text-gray-400":y+="bg-gray-800 text-white hover:bg-gray-700",n.jsx("button",{onClick:()=>!w&&!S&&s(f),disabled:w||S,className:y,children:n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsx("span",{className:"text-lg",children:["🅰️","🅱️","🅲️","🅳️"][f]}),n.jsx("span",{className:"flex-1 text-left",children:h}),l&&l[f]>0&&n.jsxs("span",{className:"bg-purple-600/20 px-2 py-1 rounded-full text-xs",children:[l[f],"%"]}),w&&j&&n.jsx("span",{children:"✓"})]})},f)})}),!r&&n.jsxs("div",{className:"flex justify-center gap-3 mb-3",children:[n.jsx("button",{onClick:a,disabled:!c,className:`px-4 py-2 rounded-lg font-medium text-sm ${c?"bg-orange-600 text-white":"bg-gray-700 text-gray-500"}`,children:"⚡ 50:50"}),n.jsx("button",{onClick:o,disabled:!u,className:`px-4 py-2 rounded-lg font-medium text-sm ${u?"bg-purple-600 text-white":"bg-gray-700 text-gray-500"}`,children:"👥 Audience"})]}),n.jsx("div",{className:"text-center mt-3 mb-2",children:n.jsxs("div",{className:"text-gray-500 text-xs",children:[e.stats.views.toLocaleString()," views • ",e.stats.attempted.toLocaleString()," attempted • ",e.stats.correctRate,"% correct"]})}),n.jsx("div",{className:"text-center mt-12 mb-4",children:n.jsx("div",{className:"text-gray-500 text-sm animate-bounce",children:"Swipe up for next"})})]})]})};function jv(){const[e]=_m(),t=je();return Je(),d.useEffect(()=>{const r=e.get("category"),s=e.get("difficulty"),a=e.get("from")==="quest",o=["general-knowledge","fun-facts","science","history","geography","computer","artificial-intelligence","sports","mixed"],i=["easy","medium","hard"],l=r==="random"?o[Math.floor(Math.random()*o.length)]:r||"mixed",c=s==="random"?i[Math.floor(Math.random()*i.length)]:s||"medium";console.log("QuizPlay - fromQuest:",a),console.log("QuizPlay - returnPath will be:",a?"/quests":"/"),t(`/quiz/${l}`,{replace:!0,state:{mode:"quiz",difficulty:c,count:5,timer:{type:"per_q",seconds:45},fromQuest:a,returnPath:a?"/profile/quests":"/"}})},[e,t]),n.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh",background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",color:"white",fontSize:"20px"},children:"Starting your quiz..."})}function Nv(){const[e]=_m(),t=je();return d.useEffect(()=>{const r=e.get("questions")||"15",s=e.get("difficulty")||"easy",a=e.get("category")||"mixed",o=e.get("from")==="quest",i=["general-knowledge","fun-facts","science","history","geography","computer","artificial-intelligence","sports"],l=a==="random"?i[Math.floor(Math.random()*i.length)]:a;console.log("PracticeStart - Launching practice mode:",{category:l,difficulty:s,questions:r,fromQuest:o}),t(`/quiz/${l}`,{replace:!0,state:{mode:"practice",difficulty:s,count:parseInt(r),timer:{type:"off",seconds:0},fromQuest:o,questType:o?"practiceQuestions":null,returnPath:o?"/profile/quests":"/"}})},[e,t]),n.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh",background:"linear-gradient(135deg, #10B981 0%, #059669 100%)",color:"white",fontSize:"20px"},children:"Loading practice questions..."})}/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kv=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Sv=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,r,s)=>s?s.toUpperCase():r.toLowerCase()),Kd=e=>{const t=Sv(e);return t.charAt(0).toUpperCase()+t.slice(1)},Fm=(...e)=>e.filter((t,r,s)=>!!t&&t.trim()!==""&&s.indexOf(t)===r).join(" ").trim(),Cv=e=>{for(const t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0};/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Ev={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tv=d.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:r=2,absoluteStrokeWidth:s,className:a="",children:o,iconNode:i,...l},c)=>d.createElement("svg",{ref:c,...Ev,width:t,height:t,stroke:e,strokeWidth:s?Number(r)*24/Number(t):r,className:Fm("lucide",a),...!o&&!Cv(l)&&{"aria-hidden":"true"},...l},[...i.map(([u,m])=>d.createElement(u,m)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zr=(e,t)=>{const r=d.forwardRef(({className:s,...a},o)=>d.createElement(Tv,{ref:o,iconNode:t,className:Fm(`lucide-${kv(Kd(e))}`,`lucide-${e}`,s),...a}));return r.displayName=Kd(e),r};/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pv=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],Rv=Zr("chevron-left",Pv);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _v=[["rect",{x:"3",y:"8",width:"18",height:"4",rx:"1",key:"bkv52"}],["path",{d:"M12 8v13",key:"1c76mn"}],["path",{d:"M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7",key:"6wjy6b"}],["path",{d:"M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5",key:"1ihvrl"}]],Av=Zr("gift",_v);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iv=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],Lv=Zr("lock",Iv);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dv=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]],Mv=Zr("shield",Dv);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zv=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],Xd=Zr("sparkles",zv);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ov=[["line",{x1:"10",x2:"14",y1:"2",y2:"2",key:"14vaq8"}],["line",{x1:"12",x2:"15",y1:"14",y2:"11",key:"17fdiu"}],["circle",{cx:"12",cy:"14",r:"8",key:"1e1u0o"}]],Fv=Zr("timer",Ov);function $v({show:e,onClose:t,coins:r,onNavigateToPlay:s}){return e?n.jsxs("div",{className:"fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4",onClick:a=>{a.target===a.currentTarget&&t()},children:[n.jsxs("div",{className:"bg-gray-800 rounded-3xl p-6 w-full max-w-md border border-gray-700 relative overflow-hidden",onClick:a=>a.stopPropagation(),children:[n.jsx("div",{className:"absolute inset-0 opacity-10",children:n.jsx("div",{className:"h-full bg-gradient-to-br from-yellow-400 to-orange-500"})}),n.jsxs("div",{className:"relative",children:[n.jsxs("div",{className:"flex items-center justify-between mb-6",children:[n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsx("div",{className:"text-5xl",style:{animation:"coinRotate 2s linear infinite"},children:"🪙"}),n.jsxs("div",{children:[n.jsx("h3",{className:"text-2xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent",children:"Your Treasure"}),n.jsxs("p",{className:"text-3xl font-bold text-white mt-1",children:[r," Coins"]})]})]}),n.jsx("button",{onClick:t,className:"w-8 h-8 rounded-lg bg-white/5 border border-gray-600 grid place-items-center hover:bg-white/10 transition",children:"✕"})]}),n.jsxs("div",{className:"mb-6",children:[n.jsx("h4",{className:"text-sm font-medium text-gray-400 mb-3",children:"Ways to Earn"}),n.jsxs("div",{className:"space-y-3",children:[n.jsx("div",{className:"p-4 rounded-xl bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 hover:scale-[1.02] transition-transform",children:n.jsxs("div",{className:"flex items-center justify-between",children:[n.jsxs("div",{children:[n.jsxs("div",{className:"font-medium flex items-center gap-2",children:[n.jsx("span",{className:"text-2xl",children:"✅"}),"Complete Quizzes"]}),n.jsx("div",{className:"text-xs text-gray-400 mt-1",children:"+5 coins per correct answer"})]}),n.jsx("div",{className:"text-green-400 font-bold",children:"+5"})]})}),n.jsx("div",{className:"p-4 rounded-xl bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 hover:scale-[1.02] transition-transform",children:n.jsxs("div",{className:"flex items-center justify-between",children:[n.jsxs("div",{children:[n.jsxs("div",{className:"font-medium flex items-center gap-2",children:[n.jsx("span",{className:"text-2xl",children:"🎯"}),"Daily Challenge"]}),n.jsx("div",{className:"text-xs text-gray-400 mt-1",children:"Complete daily for bonus"})]}),n.jsx("div",{className:"text-blue-400 font-bold",children:"+5"})]})}),n.jsx("div",{className:"p-4 rounded-xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 hover:scale-[1.02] transition-transform",children:n.jsxs("div",{className:"flex items-center justify-between",children:[n.jsxs("div",{children:[n.jsxs("div",{className:"font-medium flex items-center gap-2",children:[n.jsx("span",{className:"text-2xl",children:"🎰"}),"Spin & Play"]}),n.jsx("div",{className:"text-xs text-gray-400 mt-1",children:"Test your luck!"})]}),n.jsx("div",{className:"text-purple-400 font-bold",children:"+50"})]})}),n.jsx("div",{className:"p-4 rounded-xl bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/20 hover:scale-[1.02] transition-transform",children:n.jsxs("div",{className:"flex items-center justify-between",children:[n.jsxs("div",{children:[n.jsxs("div",{className:"font-medium flex items-center gap-2",children:[n.jsx("span",{className:"text-2xl",children:"🏆"}),"Achievements"]}),n.jsx("div",{className:"text-xs text-gray-400 mt-1",children:"Unlock special rewards"})]}),n.jsx("div",{className:"text-orange-400 font-bold",children:"+???"})]})})]})]}),n.jsxs("div",{className:"mb-6",children:[n.jsxs("div",{className:"flex justify-between text-xs text-gray-400 mb-2",children:[n.jsx("span",{children:"Next reward"}),n.jsxs("span",{children:[100-r%100," coins to go"]})]}),n.jsx("div",{className:"h-2 bg-white/10 rounded-full overflow-hidden",children:n.jsx("div",{className:"h-full bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full transition-all",style:{width:`${r%100}%`}})})]}),n.jsx("button",{onClick:s,className:"w-full py-3 rounded-xl bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-bold hover:scale-[1.02] transition-transform shadow-lg",children:"Start Earning Now! 🚀"})]})]}),n.jsx("style",{children:`
        @keyframes coinRotate {
          from { transform: rotateY(0deg); }
          to { transform: rotateY(360deg); }
        }
      `})]}):null}function Bv(){const e=je();d.useEffect(()=>(document.body.classList.add("hide-bottom-nav"),()=>{document.body.classList.remove("hide-bottom-nav")}),[]);const[t]=et("/sounds/correct.mp3",{volume:.6}),[r]=et("/sounds/coin.mp3",{volume:.7}),[s]=et("/sounds/click.mp3",{volume:.5}),[a]=et("/sounds/wrong.mp3",{volume:.5}),o=d.useRef(null),i=d.useRef({}),[l,c]=d.useState(!1),[u,m]=d.useState(ie.getCoins()),[h,f]=d.useState(null),[w,x]=d.useState([{id:"bronze",name:"Bronze",opened:!1,reward:null,minCoins:5,maxCoins:15,color:"from-amber-600 to-amber-700",glow:"shadow-amber-500/30",miniGame:"tap",tapsRequired:3,tapsCount:0},{id:"silver",name:"Silver",opened:!1,reward:null,minCoins:20,maxCoins:40,color:"from-gray-400 to-gray-500",glow:"shadow-gray-400/30",miniGame:"swipe",swipePattern:null,swipeComplete:!1},{id:"gold",name:"Gold",opened:!1,reward:null,minCoins:50,maxCoins:100,color:"from-yellow-400 to-yellow-500",glow:"shadow-yellow-400/30",xpChance:.7,miniGame:"hold",holdDuration:2,holdProgress:0,isHolding:!1}]),[j,S]=d.useState(!1),[y,g]=d.useState(0),[v,N]=d.useState(null),[C,P]=d.useState(""),[E,p]=d.useState(null),[b,k]=d.useState(null),[_,R]=d.useState(null);d.useEffect(()=>{F();const T=setInterval(Q,1e3);return()=>clearInterval(T)},[]);const F=()=>{const T=[{id:"bronze",name:"Bronze",opened:!1,reward:null,minCoins:5,maxCoins:15,color:"from-amber-600 to-amber-700",glow:"shadow-amber-500/30",miniGame:"tap",tapsRequired:3,tapsCount:0},{id:"silver",name:"Silver",opened:!1,reward:null,minCoins:20,maxCoins:40,color:"from-gray-400 to-gray-500",glow:"shadow-gray-400/30",miniGame:"tap",tapsRequired:3,tapsCount:0},{id:"gold",name:"Gold",opened:!1,reward:null,minCoins:50,maxCoins:100,color:"from-yellow-400 to-yellow-500",glow:"shadow-yellow-400/30",xpChance:.7,miniGame:"tap",tapsRequired:3,tapsCount:0}];x(T),g(0);const z=new Date().toDateString();N(z),ie.safeSet("surprise_zone_data",{date:z,boxes:T,totalEarned:0})},Q=()=>{const T=new Date,z=new Date(T);z.setDate(z.getDate()+1),z.setHours(0,0,0,0);const B=z-T,G=Math.floor(B/(1e3*60*60)),$=Math.floor(B%(1e3*60*60)/(1e3*60)),Z=Math.floor(B%(1e3*60)/1e3);P(`${G.toString().padStart(2,"0")}:${$.toString().padStart(2,"0")}:${Z.toString().padStart(2,"0")}`)};d.useEffect(()=>{const T=setInterval(()=>{const z=ie.getCoins();z!==u&&m(z)},100);return()=>clearInterval(T)},[u]);const V=(T,z)=>{if(j)return;const B=w.findIndex($=>$.id===T),G=w[B];G.opened||(k(T),G.miniGame==="tap"&&z==="tap"?K(B):G.miniGame==="swipe"&&z==="swipe"?q(B):G.miniGame==="hold"&&(z==="holdStart"?M(B):z==="holdEnd"&&I(B)))},K=T=>{const z=w[T],B=z.tapsCount+1;s();const G=[...w];G[T]={...z,tapsCount:B},x(G),B>=z.tapsRequired&&setTimeout(()=>D(z.id),300)},q=T=>{const z=w[T];s();const B=[...w];B[T]={...z,swipeComplete:!0},x(B),setTimeout(()=>D(z.id),300)},M=T=>{const z=w[T],B=[...w];B[T]={...z,isHolding:!0,holdProgress:0},x(B);let G=0;const $=setInterval(()=>{G+=.05;const Z=[...w],U=Z[T];G>=z.holdDuration?(clearInterval($),Z[T]={...U,holdProgress:z.holdDuration,isHolding:!1},x(Z),D(z.id)):U.isHolding?(Z[T]={...U,holdProgress:G},x(Z)):clearInterval($)},50);R($)},I=T=>{_&&(clearInterval(_),R(null));const z=w[T];if(z.holdProgress<z.holdDuration){a();const B=[...w];B[T]={...z,isHolding:!1,holdProgress:0},x(B)}},D=async T=>{if(j)return;const z=w.findIndex(O=>O.id===T),B=w[z];if(B.opened)return;S(!0);const G=Math.floor(Math.random()*(B.maxCoins-B.minCoins+1))+B.minCoins,Z=B.xpChance&&Math.random()<B.xpChance?Math.floor(Math.random()*50)+25:0;if(p({boxId:T,coins:G,xpBonus:Z}),t(),await new Promise(O=>setTimeout(O,600)),i.current[T]&&o.current){const O=i.current[T].getBoundingClientRect();r(),f({startRect:O,count:Math.min(G,15),amount:G,xpBonus:Z})}const U=[...w];U[z]={...B,opened:!0,reward:{coins:G,xpBonus:Z}},x(U),g(O=>O+G),ie.safeSet("surprise_zone_data",{date:v,boxes:U,totalEarned:y+G}),setTimeout(()=>{p(null),k(null)},2e3),S(!1)},L=w.every(T=>T.opened);return n.jsxs("div",{className:"min-h-screen bg-black text-white",children:[n.jsx("div",{className:"fixed inset-0 bg-gradient-to-b from-gray-900/50 to-black pointer-events-none"}),h&&n.jsx(Xn,{startRect:h.startRect,targetRef:o,count:h.count,onDone:()=>{ie.addCoins(h.amount,"Lucky Box"),h.xpBonus>0&&ie.addXP(h.xpBonus),m(ie.getCoins()),f(null)}}),E&&n.jsx("div",{className:"fixed inset-0 z-50 pointer-events-none flex items-center justify-center",children:n.jsx("div",{className:"animate-bounce",children:n.jsx("div",{className:"bg-black/90 backdrop-blur-xl rounded-3xl p-6 border border-white/20",children:n.jsxs("div",{className:"text-center",children:[n.jsx(Xd,{className:"w-12 h-12 text-yellow-400 mx-auto mb-3"}),n.jsxs("p",{className:"text-3xl font-bold text-yellow-400",children:["+",E.coins]}),n.jsx("p",{className:"text-sm text-gray-400 mt-1",children:"coins"}),E.xpBonus>0&&n.jsxs("p",{className:"text-lg text-blue-400 mt-2",children:["+",E.xpBonus," XP"]})]})})})}),n.jsxs("div",{className:"relative z-10 px-6 pt-14 pb-8",children:[n.jsxs("div",{className:"flex items-center justify-between mb-6",children:[n.jsx("button",{onClick:()=>e("/"),className:"w-10 h-10 rounded-full bg-white/10 backdrop-blur-xl flex items-center justify-center hover:bg-white/20 transition-all active:scale-95",children:n.jsx(Rv,{className:"w-5 h-5"})}),n.jsxs("div",{className:"text-center",children:[n.jsx("p",{className:"text-sm text-gray-400 mb-1",children:"Daily Surprise"}),n.jsx("h1",{className:"text-2xl font-semibold",children:"Lucky Boxes"})]}),n.jsxs("button",{ref:o,onClick:()=>c(!0),className:"px-3 py-1.5 rounded-full bg-yellow-500/20 backdrop-blur-xl flex items-center gap-2 hover:bg-yellow-500/30 transition-all border border-yellow-500/30",children:[n.jsx("span",{className:"text-lg",children:"🪙"}),n.jsx("span",{className:"font-bold text-yellow-400",children:u})]})]}),n.jsx("div",{className:"mx-auto max-w-sm mb-8",children:n.jsx("div",{className:"bg-white/5 backdrop-blur-xl rounded-2xl p-4 border border-white/10",children:n.jsxs("div",{className:"flex items-center justify-between",children:[n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx(Fv,{className:"w-4 h-4 text-gray-400"}),n.jsxs("div",{children:[n.jsx("p",{className:"text-xs text-gray-400",children:"Next reset in"}),n.jsx("p",{className:"text-lg font-mono font-semibold",children:C||"00:00:00"})]})]}),n.jsxs("div",{className:"text-right",children:[n.jsx("p",{className:"text-xs text-gray-400",children:"Earned today"}),n.jsxs("p",{className:"text-lg font-semibold text-yellow-400",children:[y," coins"]})]})]})})}),!L&&n.jsx("div",{className:"text-center mb-6",children:n.jsx("p",{className:"text-sm text-gray-500",children:"Complete mini-games to unlock rewards!"})})]}),n.jsxs("div",{className:"relative z-10 px-6 pb-8",children:[n.jsx("div",{className:"max-w-sm mx-auto space-y-6",children:w.map((T,z)=>{var B,G;return n.jsx("div",{ref:$=>i.current[T.id]=$,className:"relative",style:{animation:`fadeInUp 0.5s ease-out ${z*100}ms both`},children:n.jsxs("button",{onClick:()=>V(T.id,"tap"),onMouseDown:()=>T.miniGame==="hold"&&V(T.id,"holdStart"),onMouseUp:()=>T.miniGame==="hold"&&V(T.id,"holdEnd"),onMouseLeave:()=>T.miniGame==="hold"&&V(T.id,"holdEnd"),onTouchStart:()=>T.miniGame==="hold"&&V(T.id,"holdStart"),onTouchEnd:()=>T.miniGame==="hold"&&V(T.id,"holdEnd"),disabled:T.opened||j,className:`
                  w-full relative overflow-hidden rounded-3xl p-8
                  transition-all duration-500 transform
                  ${T.opened?"bg-white/5 scale-95 opacity-60":`bg-gradient-to-br ${T.color} hover:scale-[1.02] active:scale-[0.98] shadow-2xl ${T.glow}`}
                  ${j&&!T.opened?"animate-pulse":""}
                  ${!T.opened&&T.id==="bronze"&&T.tapsCount===0?"animate-pulse ring-2 ring-yellow-400/50":""}
                  disabled:cursor-not-allowed
                `,children:[!T.opened&&b===T.id&&n.jsxs("div",{className:"absolute inset-0 pointer-events-none",children:[T.miniGame==="tap"&&n.jsx("div",{className:"absolute top-2 right-2 flex gap-1",children:[...Array(T.tapsRequired)].map(($,Z)=>n.jsx("div",{className:`w-2 h-2 rounded-full ${Z<T.tapsCount?"bg-white":"bg-white/30"}`},Z))}),T.miniGame==="hold"&&T.isHolding&&n.jsx("div",{className:"absolute inset-x-0 bottom-0 h-1 bg-white/20",children:n.jsx("div",{className:"h-full bg-white transition-all",style:{width:`${T.holdProgress/T.holdDuration*100}%`}})})]}),!T.opened&&n.jsx("div",{className:"absolute inset-0 opacity-10",children:n.jsx("div",{className:"absolute inset-0",style:{backgroundImage:`radial-gradient(circle at 20% 50%, white 1px, transparent 1px),
                                       radial-gradient(circle at 80% 80%, white 1px, transparent 1px),
                                       radial-gradient(circle at 40% 80%, white 1px, transparent 1px)`,backgroundSize:"50px 50px"}})}),n.jsxs("div",{className:"relative z-10 flex items-center justify-between",children:[n.jsxs("div",{className:"text-left",children:[n.jsxs("p",{className:`text-sm font-medium ${T.opened?"text-gray-400":"text-white/80"}`,children:[T.name," Box"]}),n.jsx("p",{className:`text-2xl font-bold mt-1 ${T.opened?"text-gray-300":"text-white"}`,children:T.opened?n.jsxs("span",{className:"flex items-center gap-2",children:[n.jsxs("span",{className:"text-yellow-400",children:["+",(B=T.reward)==null?void 0:B.coins]}),n.jsx("span",{className:"text-sm",children:"coins"}),((G=T.reward)==null?void 0:G.xpBonus)>0&&n.jsxs("span",{className:"text-sm text-blue-400 ml-2",children:["+",T.reward.xpBonus," XP"]})]}):n.jsxs("span",{className:"flex items-center gap-2",children:[n.jsxs("span",{children:[T.minCoins,"-",T.maxCoins]}),n.jsx("span",{className:"text-sm",children:"coins"})]})}),!T.opened&&n.jsxs("p",{className:"text-xs text-white/50 mt-1",children:[T.miniGame==="tap"&&`Tap ${T.tapsRequired} times`,T.miniGame==="hold"&&`Hold for ${T.holdDuration} seconds`]})]}),n.jsx("div",{className:`
                    w-16 h-16 rounded-2xl flex items-center justify-center
                    ${T.opened?"bg-white/10":"bg-white/20 backdrop-blur-xl"}
                    transition-all duration-300
                  `,children:T.opened?n.jsx(Xd,{className:"w-8 h-8 text-yellow-400"}):b===T.id?n.jsx(Mv,{className:"w-8 h-8 text-white animate-pulse"}):n.jsx(Av,{className:`w-8 h-8 text-white ${j?"":"animate-pulse"}`})})]})]})},T.id)})}),L&&n.jsxs("div",{className:"mt-12 text-center space-y-4",children:[n.jsxs("div",{className:"inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 backdrop-blur-xl border border-white/10",children:[n.jsx(Lv,{className:"w-4 h-4 text-gray-400"}),n.jsx("p",{className:"text-sm text-gray-400",children:"All boxes opened! Come back tomorrow"})]}),n.jsx("div",{className:"text-center",children:n.jsxs("p",{className:"text-2xl font-bold text-yellow-400",children:["🎉 ",y," coins earned!"]})})]})]}),n.jsx($v,{show:l,onClose:()=>c(!1),coins:u,onNavigateToPlay:()=>{c(!1),e("/play")}}),n.jsx("style",{jsx:!0,children:`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `})]})}function Uv(){var w;const e=je(),[t,r]=d.useState(""),[s,a]=d.useState(null),{player:o,levelProgress:i}=Sn(),c=(()=>{const x=JSON.parse(localStorage.getItem("currentUser")||"{}");return((x.phone?JSON.parse(localStorage.getItem(`user_profile_${x.phone}`)||"{}"):{}).name||x.username||(o==null?void 0:o.name)||"Player").split(" ")[0]})(),u=()=>{if((s==null?void 0:s.todayCoins)!==void 0)return s.todayCoins;try{const x=JSON.parse(localStorage.getItem("qp_stats")||'{"sessions":[]}'),j=new Date().setHours(0,0,0,0);return x.sessions.filter(y=>new Date(y.timestamp).setHours(0,0,0,0)===j).reduce((y,g)=>y+(g.earnedCoins||0),0)}catch{return 0}},m={name:c,rank:(s==null?void 0:s.rank)||23,streak:(s==null?void 0:s.streak)||(o==null?void 0:o.currentStreak)||0,todayQuizzes:((w=s==null?void 0:s.daily)==null?void 0:w.quizzesPlayed)||3,todayCoins:u()};d.useEffect(()=>{const x=new Date().getHours();x<12?r("Good morning"):x<17?r("Good afternoon"):r("Good evening")},[]),d.useEffect(()=>{const x=()=>{const j=st.getCurrentUser();if(j!=null&&j.phone){ie.initializeUserData(j.phone);const S=ie.getTodaySummary(j.phone);a(S)}};return x(),window.addEventListener("focus",x),()=>window.removeEventListener("focus",x)},[]);const h=`
    rounded-3xl p-5 text-left text-white 
    transition-all duration-300 ease-out
    active:scale-[0.97] hover:scale-[1.02]
    shadow-[0_8px_32px_rgba(0,0,0,0.3)]
    hover:shadow-[0_12px_48px_rgba(0,0,0,0.4)]
    relative overflow-hidden
    before:absolute before:inset-0 before:bg-white/5 before:opacity-0 
    hover:before:opacity-100 before:transition-opacity before:duration-300
  `,f=s!=null&&s.xpProgress?s.xpProgress/(s.xpNeeded||100)*100:i.required>0?i.current/i.required*100:0;return n.jsxs("div",{className:"min-h-full bg-[#0B0C10] text-white pt-10 px-3",children:[n.jsxs("div",{className:"mb-6",children:[n.jsxs("div",{className:"flex items-center justify-between mb-4",children:[n.jsx("div",{children:n.jsxs("h1",{className:"text-2xl font-bold px-3",children:[t,", ",c," 👋"]})}),n.jsx("button",{onClick:()=>e("/profile/settings"),className:"w-10 h-10 rounded-2xl bg-white/10 border border-white/20 grid place-items-center hover:bg-white/20 transition",children:n.jsx("span",{className:"text-xl",children:"⚙️"})})]}),n.jsxs("div",{className:"rounded-3xl bg-gradient-to-r from-slate-800/50 to-slate-900/50 border border-white/10 p-4 backdrop-blur-sm",children:[n.jsxs("div",{className:"flex items-center gap-4 mb-3",children:[n.jsx("div",{className:"w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 grid place-items-center text-2xl font-bold",children:c[0].toUpperCase()}),n.jsxs("div",{className:"flex-1",children:[n.jsx("div",{className:"text-lg font-semibold",children:c}),n.jsxs("div",{className:"text-white/60 text-sm",children:["Level ",(s==null?void 0:s.level)||o.level||1]})]}),n.jsxs("div",{className:"text-right",children:[n.jsxs("div",{className:"text-yellow-400 font-bold text-lg",children:[(s==null?void 0:s.totalCoins)||o.coins||0," 🪙"]}),n.jsxs("div",{className:"text-white/60 text-sm",children:["Rank #",m.rank]})]})]}),n.jsxs("div",{className:"mb-3",children:[n.jsxs("div",{className:"flex justify-between text-xs text-white/60 mb-1",children:[n.jsx("span",{children:"XP Progress"}),n.jsxs("span",{children:[(s==null?void 0:s.xpProgress)||i.current,"/",(s==null?void 0:s.xpNeeded)||i.required]})]}),n.jsx("div",{className:"h-2 bg-white/10 rounded-full overflow-hidden",children:n.jsx("div",{className:"h-full bg-gradient-to-r from-blue-400 to-purple-500 rounded-full transition-all duration-1000 ease-out",style:{width:`${f}%`}})})]}),n.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[n.jsxs("div",{className:"text-center p-2 rounded-xl bg-white/5",children:[n.jsxs("div",{className:"text-orange-400 font-bold text-lg",children:["🔥 ",m.streak]}),n.jsx("div",{className:"text-white/60 text-xs",children:"Day Streak"})]}),n.jsxs("div",{className:"text-center p-2 rounded-xl bg-white/5",children:[n.jsxs("div",{className:"text-green-400 font-bold text-lg",children:["+",m.todayCoins]}),n.jsx("div",{className:"text-white/60 text-xs",children:"Today"})]})]})]})]}),n.jsxs("button",{onClick:()=>e("/profile/leaderboard"),className:`${h} w-full mb-4 bg-gradient-to-br from-[#5AA9FF] via-[#6C63FF] to-[#9C6BFF]`,children:[n.jsx("div",{className:"absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-8 translate-x-8 animate-pulse"}),n.jsxs("div",{className:"relative flex items-start justify-between",children:[n.jsxs("div",{children:[n.jsx("div",{className:"text-xs opacity-90 mb-1",children:"🏆 Rank & Coins"}),n.jsx("div",{className:"text-3xl font-extrabold tracking-tight mb-2",children:"LEADERBOARD"}),n.jsxs("div",{className:"text-xs opacity-75 flex items-center gap-2",children:[n.jsx("span",{className:"w-2 h-2 bg-green-400 rounded-full animate-pulse"}),"Weekly reset · Ends in 2d 14h"]})]}),n.jsx("div",{className:"w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm grid place-items-center text-2xl border border-white/30",children:"🏆"})]})]}),n.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[n.jsxs("button",{onClick:()=>e("/profile/history"),className:`${h} bg-gradient-to-br from-[#D19A00] to-[#C94B4B] relative`,children:[n.jsx("div",{className:"absolute top-2 right-2 w-3 h-3 bg-white/20 rounded-full"}),n.jsx("div",{className:"text-3xl mb-3",children:"📊"}),n.jsx("div",{className:"text-sm font-bold mb-1",children:"HISTORY"}),n.jsx("div",{className:"text-[11px] opacity-80",children:"Quizzes & Practice"}),n.jsxs("div",{className:"text-[10px] opacity-60 mt-1",children:["+",m.todayQuizzes," today"]})]}),n.jsxs("button",{onClick:()=>e("/profile/rewards"),className:`${h} bg-gradient-to-br from-[#2EB872] to-[#1EA07A] relative`,children:[n.jsx("div",{className:"absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full animate-bounce"}),n.jsx("div",{className:"text-3xl mb-3",children:"🎁"}),n.jsx("div",{className:"text-sm font-bold mb-1",children:"REWARDS"}),n.jsx("div",{className:"text-[11px] opacity-80",children:"Claim & Redeem"}),n.jsx("div",{className:"text-[10px] opacity-60 mt-1",children:"2 available"})]}),n.jsxs("button",{onClick:()=>e("/profile/badges"),className:`${h} bg-gradient-to-br from-[#E65C00] to-[#F9D423] relative`,children:[n.jsx("div",{className:"absolute -top-1 -right-1 w-6 h-6 bg-purple-600 rounded-full grid place-items-center text-[10px] font-bold animate-pulse",children:"NEW"}),n.jsx("div",{className:"text-3xl mb-3",children:"🏅"}),n.jsx("div",{className:"text-sm font-bold mb-1",children:"BADGES"}),n.jsx("div",{className:"text-[11px] opacity-80",children:"Collectables"}),n.jsx("div",{className:"text-[10px] opacity-60 mt-1",children:"4/15 unlocked"})]}),n.jsxs("button",{onClick:()=>e("/profile/achievements"),className:`${h} bg-gradient-to-br from-[#5D26C1] to-[#A17FE0] relative`,children:[n.jsx("div",{className:"text-3xl mb-3",children:"🎯"}),n.jsx("div",{className:"text-sm font-bold mb-1",children:"ACHIEVEMENTS"}),n.jsx("div",{className:"text-[11px] opacity-80",children:"Milestones"}),n.jsx("div",{className:"text-[10px] opacity-60 mt-1",children:"67% complete"})]})]}),n.jsxs("div",{className:"mt-4 space-y-3",children:[n.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[n.jsx("button",{onClick:()=>e("/profile/streaks"),className:`${h} bg-gradient-to-r from-orange-600/80 to-red-600/80 backdrop-blur-sm border border-orange-500/30`,children:n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsx("div",{className:"text-2xl",children:"🔥"}),n.jsxs("div",{children:[n.jsx("div",{className:"text-sm font-bold",children:"STREAK"}),n.jsxs("div",{className:"text-[11px] opacity-80",children:[m.streak," days strong"]})]})]})}),n.jsx("button",{onClick:()=>e("/profile/quests"),className:`${h} bg-gradient-to-r from-blue-600/80 to-cyan-600/80 backdrop-blur-sm border border-blue-500/30`,children:n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsx("div",{className:"text-2xl",children:"⚡"}),n.jsxs("div",{children:[n.jsx("div",{className:"text-sm font-bold",children:"QUESTS"}),n.jsxs("div",{className:"text-[11px] opacity-80",children:[(s==null?void 0:s.activeQuests)||2," active goals"]})]})]})})]}),n.jsx("button",{onClick:()=>e("/profile/settings"),className:`${h} w-full bg-gradient-to-r from-slate-700/50 to-slate-800/50 backdrop-blur-sm border border-white/10`,children:n.jsxs("div",{className:"flex items-center justify-between",children:[n.jsxs("div",{className:"flex items-center gap-4",children:[n.jsx("div",{className:"w-12 h-12 rounded-2xl bg-white/10 grid place-items-center text-xl",children:"⚙️"}),n.jsxs("div",{children:[n.jsx("div",{className:"text-sm font-bold",children:"SETTINGS"}),n.jsx("div",{className:"text-[11px] opacity-70",children:"Customize your experience"})]})]}),n.jsx("div",{className:"text-white/40",children:"→"})]})})]}),n.jsx("div",{className:"h-6"})]})}const fs="🪙",ba={global:[{rank:1,name:"Bryan Wolf",handle:"@bryan",score:43,avatar:"/profile/rank1.png",trend:"+5",streak:12,country:"🇺🇸"},{rank:2,name:"Meghan Jess…",handle:"@meghan",score:40,avatar:"/profile/rank2.png",trend:"+2",streak:8,country:"🇨🇦"},{rank:3,name:"Alex Turner",handle:"@alex",score:38,avatar:"/profile/rank3.png",trend:"±0",streak:15,country:"🇬🇧"},{rank:4,name:"Marsha Fisher",handle:"@marsha",score:36,trend:"-1",streak:5,country:"🇦🇺"},{rank:5,name:"Juanita Cormier",handle:"@juanita",score:35,trend:"+1",streak:3,country:"🇲🇽"},{rank:6,name:"You",handle:"@you",score:34,you:!0,avatar:"/profile/avatar.png",trend:"+3",streak:7,country:"🇮🇳"},{rank:7,name:"Tamara Schmidt",handle:"@tamara",score:33,trend:"-2",streak:2,country:"🇩🇪"},{rank:8,name:"Ricardo Veum",handle:"@ricardo",score:32,trend:"+1",streak:4,country:"🇧🇷"}],friends:[{rank:1,name:"You",handle:"@you",score:34,you:!0,avatar:"/profile/avatar.png",trend:"+2",streak:7,country:"🇮🇳"},{rank:2,name:"Sarah Chen",handle:"@sarah",score:31,trend:"-1",streak:4,country:"🇸🇬",friend:!0},{rank:3,name:"Mike Johnson",handle:"@mike",score:29,trend:"+3",streak:2,country:"🇺🇸",friend:!0},{rank:4,name:"Priya Sharma",handle:"@priya",score:27,trend:"±0",streak:5,country:"🇮🇳",friend:!0},{rank:5,name:"David Kim",handle:"@david",score:25,trend:"+1",streak:3,country:"🇰🇷",friend:!0},{rank:6,name:"Emma Wilson",handle:"@emma",score:23,trend:"-2",streak:1,country:"🇬🇧",friend:!0}],india:[{rank:1,name:"Rohit Sharma",handle:"@rohit",score:45,trend:"+4",streak:10,country:"🇮🇳"},{rank:2,name:"Priya Patel",handle:"@priya",score:42,trend:"+1",streak:8,country:"🇮🇳"},{rank:3,name:"You",handle:"@you",score:34,you:!0,avatar:"/profile/avatar.png",trend:"+3",streak:7,country:"🇮🇳"},{rank:4,name:"Arjun Singh",handle:"@arjun",score:32,trend:"-1",streak:5,country:"🇮🇳"},{rank:5,name:"Kavya Reddy",handle:"@kavya",score:30,trend:"+2",streak:3,country:"🇮🇳"},{rank:6,name:"Vikram Gupta",handle:"@vikram",score:28,trend:"±0",streak:4,country:"🇮🇳"}]},wa=[{name:"Diamond",min:40,color:"from-cyan-400 to-blue-600",icon:"💎"},{name:"Gold",min:30,color:"from-yellow-400 to-orange-500",icon:"🥇"},{name:"Silver",min:20,color:"from-gray-300 to-gray-500",icon:"🥈"},{name:"Bronze",min:10,color:"from-orange-600 to-red-600",icon:"🥉"}];function Yv(){var f,w;const e=je(),{player:t}=Sn(),r={global:ba.global.map(x=>x.you?{...x,name:(t==null?void 0:t.name)||"You",score:(t==null?void 0:t.coins)||0,streak:(t==null?void 0:t.currentStreak)||0}:x),friends:ba.friends.map(x=>x.you?{...x,name:(t==null?void 0:t.name)||"You",score:(t==null?void 0:t.coins)||0,streak:(t==null?void 0:t.currentStreak)||0}:x),india:ba.india.map(x=>x.you?{...x,name:(t==null?void 0:t.name)||"You",score:(t==null?void 0:t.coins)||0,streak:(t==null?void 0:t.currentStreak)||0}:x)};console.log("Debug - Player coins:",t==null?void 0:t.coins),console.log("Debug - Friends data:",r.friends[0]);const[s,a]=d.useState({days:2,hours:14,minutes:17}),[o,i]=d.useState("global"),l=r[o]||r.global;console.log("Player coins:",t==null?void 0:t.coins,"Current user score:",(f=l.find(x=>x.you))==null?void 0:f.score);const c=l.find(x=>x.you),u=l.slice(0,3),m=l.slice(3);d.useEffect(()=>{const x=setInterval(()=>{a(j=>j.minutes>0?{...j,minutes:j.minutes-1}:j.hours>0?{...j,hours:j.hours-1,minutes:59}:j.days>0?{...j,days:j.days-1,hours:23,minutes:59}:j)},6e4);return()=>clearInterval(x)},[]);const h=x=>{const j=Math.max(...l.map(y=>y.score)),S=x/j*100;return S>=90?wa[0]:S>=70?wa[1]:S>=40?wa[2]:wa[3]};return n.jsxs("div",{className:"min-h-screen bg-black text-white pt-12",children:[n.jsxs("div",{className:"flex items-center justify-between mb-5",children:[n.jsx("button",{onClick:()=>e(-1),className:"px-3 py-1.5 rounded-xl border border-white/10 bg-white/5 text-sm hover:bg-white/10 transition",children:"← Back"}),n.jsxs("div",{className:"text-center",children:[n.jsx("div",{className:"text-lg font-bold",children:"🏆 Leaderboard"}),n.jsxs("div",{className:"text-xs text-white/60",children:["Ends in ",s.days,"d ",s.hours,"h ",s.minutes,"m"]})]}),n.jsx("button",{className:"px-3 py-1.5 rounded-xl border border-white/10 bg-white/5 text-sm hover:bg-white/10 transition",children:"📊"})]}),n.jsxs("div",{className:`mb-5 rounded-2xl bg-gradient-to-r ${h(c==null?void 0:c.score).color} p-4 text-center relative overflow-hidden`,children:[n.jsx("div",{className:"absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -translate-y-10 translate-x-10 animate-pulse"}),n.jsx("div",{className:"absolute bottom-0 left-0 w-16 h-16 bg-white/5 rounded-full translate-y-8 -translate-x-8"}),n.jsxs("div",{className:"relative z-10",children:[n.jsx("div",{className:"text-2xl mb-1",children:h(c==null?void 0:c.score).icon}),n.jsxs("div",{className:"text-sm font-bold text-white",children:[h(c==null?void 0:c.score).name," League"]}),n.jsx("div",{className:"text-xs text-white/80",children:o==="friends"?"Competing with friends!":"You're competing with the best!"})]})]}),n.jsx("div",{className:"flex gap-2 mb-5",children:[{key:"global",label:"🌍 Global",count:"10M+"},{key:"friends",label:"👥 Friends",count:ba.friends.length},{key:"india",label:"🇮🇳 India",count:"2.5M"}].map(x=>n.jsxs("button",{onClick:()=>i(x.key),className:`flex-1 px-2 py-2 rounded-xl text-xs font-semibold transition-all duration-300 ${o===x.key?"bg-lime-500 text-black shadow-lg scale-105":"border border-white/10 bg-white/5 hover:bg-white/10"}`,children:[n.jsx("div",{children:x.label}),n.jsx("div",{className:`text-[10px] ${o===x.key?"text-black/70":"text-white/60"}`,children:x.count})]},x.key))}),n.jsx("div",{className:"mb-5 rounded-2xl bg-gradient-to-r from-lime-500/20 to-green-500/20 border border-lime-500/30 p-3",children:n.jsxs("div",{className:"flex items-center justify-between",children:[n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsx("div",{className:"w-10 h-10 rounded-xl bg-lime-500/20 grid place-items-center text-lg",children:"🧑‍💻"}),n.jsxs("div",{children:[n.jsx("div",{className:"font-bold text-lime-400 text-sm",children:"Your Position"}),n.jsxs("div",{className:"text-xs text-white/70 flex items-center gap-2",children:[n.jsxs("span",{children:["Rank #",c==null?void 0:c.rank]}),n.jsx("span",{className:`px-1.5 py-0.5 rounded-full text-[9px] font-bold ${c!=null&&c.trend.startsWith("+")?"bg-green-500/20 text-green-400":c!=null&&c.trend.startsWith("-")?"bg-red-500/20 text-red-400":"bg-gray-500/20 text-gray-400"}`,children:c==null?void 0:c.trend}),n.jsxs("span",{className:"text-white/50 text-[10px]",children:["in ",o==="global"?"Global":o==="friends"?"Friends":"India"]})]})]})]}),n.jsxs("div",{className:"text-right",children:[n.jsxs("div",{className:"text-lg font-bold text-lime-400",children:[c==null?void 0:c.score," ",fs]}),n.jsxs("div",{className:"text-xs text-white/60",children:["🔥 ",c==null?void 0:c.streak," streak"]})]})]})}),n.jsxs("div",{className:"mb-6",children:[n.jsx("h3",{className:"text-center text-sm font-semibold text-white/80 mb-4",children:"👑 Hall of Fame"}),n.jsxs("div",{className:"bg-gradient-to-b from-white/5 to-white/10 rounded-2xl p-4 border border-white/10 relative overflow-hidden",children:[n.jsx("div",{className:"absolute top-4 left-6 text-2xl opacity-40 animate-pulse",children:"🏆"}),n.jsx("div",{className:"absolute top-8 right-8 text-lg opacity-40 animate-bounce",style:{animationDelay:"1s"},children:"✨"}),n.jsx("div",{className:"absolute bottom-6 left-12 text-xl opacity-10 animate-pulse",style:{animationDelay:"2s"},children:"🥇"}),n.jsx("div",{className:"absolute bottom-4 right-6 text-lg opacity-40 animate-bounce",style:{animationDelay:"0.5s"},children:"⭐"}),n.jsxs("div",{className:"flex items-end justify-center gap-8 relative z-10",children:[u[1]&&n.jsxs("div",{className:"flex flex-col items-center",children:[n.jsxs("div",{className:"relative mb-2",children:[n.jsx(ja,{src:u[1].avatar,fallback:u[1].name,size:56}),n.jsx("div",{className:"absolute -bottom-1 left-1/2 -translate-x-1/2 w-7 h-7 bg-gradient-to-br from-gray-300 to-gray-500 rounded-full grid place-items-center text-sm font-bold text-black shadow-lg",children:"2"})]}),n.jsx("div",{className:"text-sm font-semibold mb-1 mt-1",children:Na(u[1].name,8)}),n.jsxs("div",{className:"text-xs text-lime-400 font-bold",children:[u[1].score," ",fs]})]}),u[0]&&n.jsxs("div",{className:"flex flex-col items-center -mb-3",children:[n.jsxs("div",{className:"relative mb-2",children:[n.jsx(ja,{src:u[0].avatar,fallback:u[0].name,size:72}),n.jsx("div",{className:"absolute -top-3 left-1/2 -translate-x-1/2",children:n.jsx(qv,{})}),n.jsx("div",{className:"absolute -bottom-1 left-1/2 -translate-x-1/2 w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full grid place-items-center text-base font-bold text-black shadow-lg animate-pulse",children:"1"})]}),n.jsx("div",{className:"text-sm font-bold mb-1 mt-1",children:Na(u[0].name,8)}),n.jsxs("div",{className:"text-sm text-lime-400 font-bold mb-1",children:[u[0].score," ",fs]}),n.jsx("div",{className:"px-2 py-1 bg-yellow-400/20 rounded-full text-[9px] text-yellow-400 font-bold",children:"CHAMPION"})]}),u[2]&&n.jsxs("div",{className:"flex flex-col items-center",children:[n.jsxs("div",{className:"relative mb-2",children:[n.jsx(ja,{src:u[2].avatar,fallback:u[2].name,size:56}),n.jsx("div",{className:"absolute -bottom-1 left-1/2 -translate-x-1/2 w-7 h-7 bg-gradient-to-br from-orange-600 to-red-600 rounded-full grid place-items-center text-sm font-bold text-white shadow-lg",children:"3"})]}),n.jsx("div",{className:"text-sm font-semibold mb-1 mt-1",children:Na(u[2].name,8)}),n.jsxs("div",{className:"text-xs text-lime-400 font-bold",children:[u[2].score," ",fs]})]})]})]})]}),m.length>0&&n.jsxs("div",{className:"rounded-3xl bg-white/5 border border-white/10 p-2 mb-4",children:[n.jsxs("div",{className:"flex justify-between items-center mb-2 px-2",children:[n.jsx("h3",{className:"text-sm font-semibold",children:"Rankings"}),n.jsx("div",{className:"text-xs text-white/60",children:"Live updates"})]}),n.jsx("ul",{className:"space-y-1.5",children:m.map((x,j)=>n.jsxs("li",{className:`flex items-center justify-between px-3 py-2.5 rounded-xl transition-all duration-300 ${x.you?"bg-lime-500/90 text-black shadow-lg shadow-lime-500/20 scale-[1.02]":"bg-white/5 hover:bg-white/10"}`,style:{animationDelay:`${j*100}ms`,animation:"fadeInUp 0.6s ease-out forwards"},children:[n.jsxs("div",{className:"flex items-center gap-2.5",children:[n.jsx(Qv,{n:x.rank,you:x.you}),n.jsx(ja,{src:x.avatar,fallback:x.name,size:36}),n.jsxs("div",{className:"flex flex-col leading-tight",children:[n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx("span",{className:"text-sm font-semibold",children:Na(x.name,12)}),n.jsx("span",{className:"text-xs",children:x.country}),x.friend&&n.jsx("span",{className:"text-[9px] bg-blue-500/20 text-blue-400 px-1 py-0.5 rounded-full",children:"Friend"})]}),n.jsxs("div",{className:`text-xs flex items-center gap-1.5 ${x.you?"text-black/70":"text-white/60"}`,children:[n.jsx("span",{children:x.handle}),n.jsxs("span",{children:["🔥",x.streak]})]})]})]}),n.jsxs("div",{className:"flex flex-col items-end",children:[n.jsxs("div",{className:"flex items-center gap-1 text-sm font-bold",children:[n.jsx("span",{children:x.score}),n.jsx("span",{className:x.you?"opacity-90":"opacity-80",children:fs})]}),n.jsx("div",{className:`text-xs px-1.5 py-0.5 rounded-full font-bold ${x.trend.startsWith("+")?"bg-green-500/20 text-green-400":x.trend.startsWith("-")?"bg-red-500/20 text-red-400":"bg-gray-500/20 text-gray-400"}`,children:x.trend})]})]},`${o}-${x.rank}`))})]}),c&&c.rank>1&&n.jsxs("div",{className:"mb-4 p-3 rounded-2xl bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 text-center",children:[n.jsx("div",{className:"text-sm font-semibold mb-2",children:"🚀 Climb Higher!"}),n.jsx("div",{className:"text-xs text-white/70 mb-3",children:o==="friends"&&c.rank===1?"🎉 You're #1 among friends!":`You need ${Math.max(0,(((w=l[c.rank-2])==null?void 0:w.score)||0)-c.score+1)} more coins to reach rank #${c.rank-1}`}),!(o==="friends"&&c.rank===1)&&n.jsx("button",{onClick:()=>e("/play"),className:"px-5 py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl text-sm font-bold hover:scale-105 transition-transform",children:"Play Now 🎮"})]}),n.jsx("style",{jsx:!0,children:`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `})]})}function ja({src:e,fallback:t,size:r=56}){const s=Wv(t);return n.jsx("div",{className:"grid place-items-center rounded-full bg-white/10 overflow-hidden border-2 border-white/20",style:{width:r,height:r},children:e?n.jsx("img",{src:e,alt:"",className:"w-full h-full object-cover"}):n.jsx("span",{className:"text-sm font-semibold",children:s})})}function qv(){return n.jsxs("div",{className:"w-7 h-5 bg-gradient-to-t from-yellow-400 to-yellow-300 rounded-b-lg shadow-lg relative",children:[n.jsxs("svg",{viewBox:"0 0 100 40",className:"w-full h-full",children:[n.jsx("path",{d:"M15,35 L15,18 L35,28 L50,10 L65,28 L85,18 L85,35 Z",fill:"url(#crownGradient)"}),n.jsx("defs",{children:n.jsxs("linearGradient",{id:"crownGradient",x1:"0%",y1:"0%",x2:"0%",y2:"100%",children:[n.jsx("stop",{offset:"0%",stopColor:"#FCD34D"}),n.jsx("stop",{offset:"100%",stopColor:"#F59E0B"})]})})]}),n.jsx("div",{className:"absolute top-0.5 left-1/2 -translate-x-1/2 w-1 h-1 bg-red-400 rounded-full animate-pulse"})]})}function Qv({n:e,you:t}){return n.jsx("div",{className:`w-7 h-7 grid place-items-center rounded-full text-sm font-bold ${t?"bg-black/10 text-black":"bg-white/10 text-white"}`,children:e})}function Na(e,t=12){return(e==null?void 0:e.length)>t?e.slice(0,t-1)+"…":e}function Wv(e=""){var r;const t=e.trim().split(/\s+/);return t.length===1?t[0].slice(0,2).toUpperCase():(t[0][0]+(((r=t[1])==null?void 0:r[0])||"")).toUpperCase()}const Gv="qp_recent",Hv="qp_review_snapshot",Vd=[{id:Date.now()-864e5,type:"quiz",category:"General Knowledge",difficulty:"easy",score:8,total:10,accuracy:80,time:"02:31",ms:151e3,date:"Yesterday",timestamp:Date.now()-864e5,mode:"Quiz"},{id:Date.now()-1728e5,type:"practice",category:"Science",difficulty:"medium",score:12,total:15,accuracy:80,time:"06:02",ms:362e3,date:"2 days ago",timestamp:Date.now()-1728e5,mode:"Practice"},{id:Date.now()-2592e5,type:"quiz",category:"Fun Facts",difficulty:"easy",score:9,total:10,accuracy:90,time:"02:05",ms:125e3,date:"3 days ago",timestamp:Date.now()-2592e5,mode:"Quiz"}];function Kv(){const[e,t]=d.useState("quizzes"),[r,s]=d.useState(null),[a,o]=d.useState(!1),[i,l]=d.useState("all"),[c,u]=d.useState("all"),[m,h]=d.useState("date"),[f,w]=d.useState([]),[x,j]=d.useState(!0),S=je(),y=Je(),g=p=>{if(!p)return"00:00";const b=Math.floor(p/1e3),k=Math.floor(b/60),_=b%60;return`${String(k).padStart(2,"0")}:${String(_).padStart(2,"0")}`},v=p=>{if(!p)return"Unknown";const b=new Date(p),_=Math.floor((new Date-b)/(1e3*60*60*24));return _===0?"Today":_===1?"Yesterday":_<7?`${_} days ago`:`${["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][b.getMonth()]} ${b.getDate()}`};d.useEffect(()=>{let p=!1;j(!0);const b=R=>{try{return JSON.parse(R)}catch{return null}},k=R=>encodeURIComponent(String(R).trim().toLowerCase().replace(/\s+/g,"-")),_=R=>{var T,z,B,G;const F=Number(R.ts??R.timestamp??R.id)||Date.now(),Q=Number(R.ms)||0,V=Number(R.total)||0,K=Number(R.correct)||0,M=String(R.mode||"").toLowerCase().includes("practice")?"practice":"quiz",I=((T=R.snapshot)==null?void 0:T.category)||((z=R.snapshot)==null?void 0:z.categoryLabel)||R.cat||R.category||"Unknown",D=((B=R.snapshot)==null?void 0:B.categoryParam)||k(I),L=String(((G=R.snapshot)==null?void 0:G.difficulty)||R.difficulty||"medium").toLowerCase();return{id:R.id??F,type:M,category:I,categoryParam:D,difficulty:L,score:K,total:V,accuracy:V?Math.round(K/V*100):0,time:g(Q),ms:Q,date:v(F),timestamp:F,snapshot:R.snapshot??null,mode:R.mode||(M==="practice"?"Practice":"Quiz")}};try{const R=localStorage.getItem(Gv),F=R?b(R):null,V=(Array.isArray(F)&&F.length?F:Vd).map(_).filter(K=>K&&K.timestamp).sort((K,q)=>q.timestamp-K.timestamp);p||w(V)}catch(R){console.error("Error loading history:",R),p||w(Vd)}finally{p||j(!1)}return()=>{p=!0}},[]);const N=d.useMemo(()=>{const p=new Set(f.map(b=>b.category));return Array.from(p)},[f]),C=d.useMemo(()=>{let p=f.filter(b=>e==="quizzes"?b.type==="quiz":b.type==="practice");return i!=="all"&&(p=p.filter(b=>b.category===i)),c!=="all"&&(p=p.filter(b=>b.difficulty===c)),p.sort((b,k)=>m==="date"?k.timestamp-b.timestamp:m==="score"?k.accuracy-b.accuracy:m==="time"?b.ms-k.ms:0),p},[f,e,i,c,m]),P=d.useMemo(()=>{if(C.length===0)return null;const p=C.reduce((R,F)=>R+F.score,0),b=C.reduce((R,F)=>R+F.total,0),k=b?Math.round(p/b*100):0,_=C.reduce((R,F)=>R+F.ms,0);return{count:C.length,avgAccuracy:k,totalTime:g(_),bestScore:Math.max(...C.map(R=>R.accuracy))}},[C]),E=p=>p>=80?"text-green-400":p>=60?"text-blue-400":p>=40?"text-yellow-400":"text-red-400";return x?n.jsx("div",{className:"min-h-full bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900 flex items-center justify-center",children:n.jsx("div",{className:"text-white",children:"Loading history..."})}):n.jsxs("div",{className:"min-h-full bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900 pt-12",children:[n.jsx("div",{className:"",children:n.jsxs("div",{className:"px-4 pt-4 pb-4",children:[n.jsxs("div",{className:"flex items-center justify-between mb-3",children:[n.jsx("button",{onClick:()=>{var p;if(((p=y.state)==null?void 0:p.from)==="results"){const b=ie.getCurrentResults();b?S(`/quiz/${b.categorySlug}`,{state:{returnToResults:!0}}):S("/profile")}else S("/profile")},className:"px-3 py-1.5 rounded-xl border border-white/20 bg-white/10 text-white text-sm flex items-center gap-1",children:"← Back"}),n.jsx("button",{onClick:()=>o(!a),className:"p-2 rounded-xl border border-white/20 bg-white/10 text-white",children:n.jsx(Jv,{})})]}),n.jsx("h1",{className:"text-2xl font-bold text-white mb-1",children:"History"}),n.jsx("p",{className:"text-white/70 text-sm",children:"Track your progress"})]})}),n.jsxs("div",{className:"px-4 pb-20",children:[n.jsx("div",{className:`
             sticky top-0 z-[60] isolate
            -mx-4 px-4
            py-4 mb-2
            bg-gray-900/95
            backdrop-blur-md
            border-b border-white/10
        `,children:n.jsx("div",{className:"flex items-center",children:n.jsx("div",{className:"inline-flex p-1 rounded-2xl bg-white/10 border border-white/20",children:[{value:"quizzes",label:"Quizzes",icon:"🎯"},{value:"practice",label:"Practice",icon:"📝"}].map(p=>n.jsxs("button",{onClick:()=>t(p.value),className:`px-12 py-2 text-sm rounded-xl transition-all duration-200 ${e===p.value?"bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg":"text-white/70 hover:text-white"}`,children:[n.jsx("span",{className:"mr-1",children:p.icon}),p.label]},p.value))})})}),P&&n.jsx("div",{className:"mb-4 p-4 rounded-2xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-white/20",children:n.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-3",children:[n.jsx(ka,{label:"Total",value:P.count}),n.jsx(ka,{label:"Avg Score",value:`${P.avgAccuracy}%`,color:E(P.avgAccuracy)}),n.jsx(ka,{label:"Best Score",value:`${P.bestScore}%`,color:"text-green-400"}),n.jsx(ka,{label:"Total Time",value:P.totalTime})]})}),a&&n.jsx("div",{className:"mb-4 p-4 rounded-2xl bg-white/10 border border-white/20",children:n.jsxs("div",{className:"space-y-3",children:[n.jsxs("div",{children:[n.jsx("label",{className:"text-xs text-white/60 mb-1 block",children:"Category"}),n.jsxs("select",{value:i,onChange:p=>l(p.target.value),className:"w-full px-3 py-2 rounded-xl bg-black/30 border border-white/20 text-white text-sm",children:[n.jsx("option",{value:"all",children:"All Categories"}),N.map(p=>n.jsx("option",{value:p,children:p},p))]})]}),n.jsxs("div",{className:"flex gap-2",children:[n.jsxs("div",{className:"flex-1",children:[n.jsx("label",{className:"text-xs text-white/60 mb-1 block",children:"Difficulty"}),n.jsxs("select",{value:c,onChange:p=>u(p.target.value),className:"w-full px-3 py-2 rounded-xl bg-black/30 border border-white/20 text-white text-sm",children:[n.jsx("option",{value:"all",children:"All"}),n.jsx("option",{value:"easy",children:"Easy"}),n.jsx("option",{value:"medium",children:"Medium"}),n.jsx("option",{value:"hard",children:"Hard"})]})]}),n.jsxs("div",{className:"flex-1",children:[n.jsx("label",{className:"text-xs text-white/60 mb-1 block",children:"Sort By"}),n.jsxs("select",{value:m,onChange:p=>h(p.target.value),className:"w-full px-3 py-2 rounded-xl bg-black/30 border border-white/20 text-white text-sm",children:[n.jsx("option",{value:"date",children:"Date"}),n.jsx("option",{value:"score",children:"Score"}),n.jsx("option",{value:"time",children:"Time"})]})]})]})]})}),C.length===0?n.jsxs("div",{className:"text-center py-12",children:[n.jsx("div",{className:"text-4xl mb-3",children:"📚"}),n.jsxs("p",{className:"text-white/60",children:["No ",e," history yet"]}),n.jsx("p",{className:"text-white/40 text-sm mt-1",children:"Start playing to see your progress here!"})]}):n.jsx("div",{className:"space-y-3",children:C.map((p,b)=>n.jsx(Xv,{item:p,index:b,onClick:()=>s(p)},p.id))})]}),r&&n.jsx(Vv,{item:r,onClose:()=>s(null)})]})}function ka({label:e,value:t,color:r="text-white"}){return n.jsxs("div",{className:"text-center",children:[n.jsx("div",{className:"text-xs text-white/60 mb-1",children:e}),n.jsx("div",{className:`text-lg font-bold ${r}`,children:t})]})}function Xv({item:e,index:t,onClick:r}){const s=i=>i>=80?"from-green-500/20 to-green-600/10 border-green-500/30":i>=60?"from-blue-500/20 to-blue-600/10 border-blue-500/30":i>=40?"from-yellow-500/20 to-yellow-600/10 border-yellow-500/30":"from-red-500/20 to-red-600/10 border-red-500/30",o=(i=>{const l=i==null?void 0:i.toLowerCase();return l==="easy"?{bg:"bg-green-500/20",text:"text-green-400",border:"border-green-500/30"}:l==="medium"?{bg:"bg-yellow-500/20",text:"text-yellow-400",border:"border-yellow-500/30"}:l==="hard"?{bg:"bg-red-500/20",text:"text-red-400",border:"border-red-500/30"}:{bg:"bg-gray-500/20",text:"text-gray-400",border:"border-gray-500/30"}})(e.difficulty);return n.jsxs("div",{onClick:r,className:`
        relative rounded-2xl p-4 cursor-pointer
        bg-gradient-to-br ${s(e.accuracy)}
        border transform transition-all duration-300 hover:scale-[1.02]
      `,children:[n.jsxs("div",{className:"flex items-start justify-between mb-3",children:[n.jsxs("div",{className:"flex-1",children:[n.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[n.jsx("span",{className:"text-lg",children:e.type==="quiz"?"🎯":"📝"}),n.jsx("h3",{className:"font-semibold text-white",children:e.category})]}),n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx("span",{className:`px-2 py-0.5 rounded-full text-xs ${o.bg} ${o.text} ${o.border} border`,children:e.difficulty}),n.jsx("span",{className:"text-xs text-white/50",children:e.date})]})]}),n.jsxs("div",{className:"text-right",children:[n.jsxs("div",{className:`text-2xl font-bold ${e.accuracy>=80?"text-green-400":e.accuracy>=60?"text-blue-400":e.accuracy>=40?"text-yellow-400":"text-red-400"}`,children:[e.accuracy,"%"]}),n.jsxs("div",{className:"text-xs text-white/60",children:[e.score,"/",e.total]})]})]}),n.jsxs("div",{className:"flex items-center justify-between text-xs",children:[n.jsxs("div",{className:"flex items-center gap-3 text-white/60",children:[n.jsxs("span",{children:["⏱ ",e.time]}),n.jsx("span",{children:e.mode})]}),n.jsx("span",{className:"text-white/40",children:"Tap to review →"})]})]})}function Vv({item:e,onClose:t}){const r=je();return d.useEffect(()=>{const s=a=>{a.key==="Escape"&&t()};return document.addEventListener("keydown",s),()=>document.removeEventListener("keydown",s)},[t]),n.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80",onClick:t,children:n.jsxs("div",{className:"w-full max-w-md bg-gray-900 rounded-3xl p-6 border border-white/20",onClick:s=>s.stopPropagation(),children:[n.jsxs("div",{className:"flex items-center justify-between mb-4",children:[n.jsx("h2",{className:"text-xl font-bold text-white",children:"Quiz Details"}),n.jsx("button",{onClick:t,className:"p-2 rounded-xl bg-white/10 hover:bg-white/20 transition-colors text-white",children:"✕"})]}),n.jsxs("div",{className:"space-y-4",children:[n.jsxs("div",{className:"p-4 rounded-2xl bg-white/5 border border-white/10",children:[n.jsxs("div",{className:"flex items-center justify-between mb-2",children:[n.jsx("span",{className:"text-white/60",children:"Category"}),n.jsx("span",{className:"text-white font-medium",children:e.category})]}),n.jsxs("div",{className:"flex items-center justify-between mb-2",children:[n.jsx("span",{className:"text-white/60",children:"Difficulty"}),n.jsx("span",{className:`${e.difficulty==="easy"?"text-green-400":e.difficulty==="medium"?"text-yellow-400":"text-red-400"} font-medium`,children:e.difficulty})]}),n.jsxs("div",{className:"flex items-center justify-between mb-2",children:[n.jsx("span",{className:"text-white/60",children:"Score"}),n.jsxs("span",{className:"text-white font-medium",children:[e.score,"/",e.total]})]}),n.jsxs("div",{className:"flex items-center justify-between mb-2",children:[n.jsx("span",{className:"text-white/60",children:"Accuracy"}),n.jsxs("span",{className:`${e.accuracy>=80?"text-green-400":e.accuracy>=60?"text-blue-400":"text-yellow-400"} font-medium`,children:[e.accuracy,"%"]})]}),n.jsxs("div",{className:"flex items-center justify-between",children:[n.jsx("span",{className:"text-white/60",children:"Time"}),n.jsx("span",{className:"text-white font-medium",children:e.time})]})]}),e.snapshot&&n.jsx("button",{onClick:()=>{t(),localStorage.setItem(Hv,JSON.stringify(e.snapshot)),r(`/quiz/${e.categoryParam}/start?review=1&attempt=${e.id}`,{state:{reviewFrom:"history",historyPath:"/profile/history"}})},className:"w-full py-3 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium hover:opacity-90 transition-opacity",children:"Review Answers"}),n.jsx("button",{onClick:()=>{var s;t(),r(`/quiz/${e.categoryParam}/start`,{state:{mode:"quiz",retake:!0,difficulty:e.difficulty,count:e.total,timer:((s=e.snapshot)==null?void 0:s.timer)||{type:"per_q",seconds:45},fromHistory:!0}})},className:"w-full py-3 rounded-2xl border border-white/20 text-white font-medium hover:bg-white/10 transition-colors",children:"Retake Quiz"})]})]})})}function Jv(){return n.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:n.jsx("path",{d:"M3 6h18M7 12h10M10 18h4",strokeLinecap:"round",strokeLinejoin:"round"})})}const Zv=d.createContext({});function $m(e){const t=d.useRef(null);return t.current===null&&(t.current=e()),t.current}const ey=typeof window<"u",ty=ey?d.useLayoutEffect:d.useEffect,Bm=d.createContext(null);function ny(e){return typeof e=="object"&&e!==null}function ry(e){return ny(e)&&"offsetHeight"in e}const sy=d.createContext({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"});class ay extends d.Component{getSnapshotBeforeUpdate(t){const r=this.props.childRef.current;if(r&&t.isPresent&&!this.props.isPresent){const s=r.offsetParent,a=ry(s)&&s.offsetWidth||0,o=this.props.sizeRef.current;o.height=r.offsetHeight||0,o.width=r.offsetWidth||0,o.top=r.offsetTop,o.left=r.offsetLeft,o.right=a-o.width-o.left}return null}componentDidUpdate(){}render(){return this.props.children}}function oy({children:e,isPresent:t,anchorX:r,root:s}){const a=d.useId(),o=d.useRef(null),i=d.useRef({width:0,height:0,top:0,left:0,right:0}),{nonce:l}=d.useContext(sy);return d.useInsertionEffect(()=>{const{width:c,height:u,top:m,left:h,right:f}=i.current;if(t||!o.current||!c||!u)return;const w=r==="left"?`left: ${h}`:`right: ${f}`;o.current.dataset.motionPopId=a;const x=document.createElement("style");l&&(x.nonce=l);const j=s??document.head;return j.appendChild(x),x.sheet&&x.sheet.insertRule(`
          [data-motion-pop-id="${a}"] {
            position: absolute !important;
            width: ${c}px !important;
            height: ${u}px !important;
            ${w}px !important;
            top: ${m}px !important;
          }
        `),()=>{j.contains(x)&&j.removeChild(x)}},[t]),n.jsx(ay,{isPresent:t,childRef:o,sizeRef:i,children:d.cloneElement(e,{ref:o})})}const iy=({children:e,initial:t,isPresent:r,onExitComplete:s,custom:a,presenceAffectsLayout:o,mode:i,anchorX:l,root:c})=>{const u=$m(ly),m=d.useId();let h=!0,f=d.useMemo(()=>(h=!1,{id:m,initial:t,isPresent:r,custom:a,onExitComplete:w=>{u.set(w,!0);for(const x of u.values())if(!x)return;s&&s()},register:w=>(u.set(w,!1),()=>u.delete(w))}),[r,u,s]);return o&&h&&(f={...f}),d.useMemo(()=>{u.forEach((w,x)=>u.set(x,!1))},[r]),d.useEffect(()=>{!r&&!u.size&&s&&s()},[r]),i==="popLayout"&&(e=n.jsx(oy,{isPresent:r,anchorX:l,root:c,children:e})),n.jsx(Bm.Provider,{value:f,children:e})};function ly(){return new Map}function cy(e=!0){const t=d.useContext(Bm);if(t===null)return[!0,null];const{isPresent:r,onExitComplete:s,register:a}=t,o=d.useId();d.useEffect(()=>{if(e)return a(o)},[e]);const i=d.useCallback(()=>e&&s&&s(o),[o,s,e]);return!r&&s?[!1,i]:[!0]}const Sa=e=>e.key||"";function Jd(e){const t=[];return d.Children.forEach(e,r=>{d.isValidElement(r)&&t.push(r)}),t}const hi=({children:e,custom:t,initial:r=!0,onExitComplete:s,presenceAffectsLayout:a=!0,mode:o="sync",propagate:i=!1,anchorX:l="left",root:c})=>{const[u,m]=cy(i),h=d.useMemo(()=>Jd(e),[e]),f=i&&!u?[]:h.map(Sa),w=d.useRef(!0),x=d.useRef(h),j=$m(()=>new Map),[S,y]=d.useState(h),[g,v]=d.useState(h);ty(()=>{w.current=!1,x.current=h;for(let P=0;P<g.length;P++){const E=Sa(g[P]);f.includes(E)?j.delete(E):j.get(E)!==!0&&j.set(E,!1)}},[g,f.length,f.join("-")]);const N=[];if(h!==S){let P=[...h];for(let E=0;E<g.length;E++){const p=g[E],b=Sa(p);f.includes(b)||(P.splice(E,0,p),N.push(p))}return o==="wait"&&N.length&&(P=N),v(Jd(P)),y(h),null}const{forceRender:C}=d.useContext(Zv);return n.jsx(n.Fragment,{children:g.map(P=>{const E=Sa(P),p=i&&!u?!1:h===g||f.includes(E),b=()=>{if(j.has(E))j.set(E,!0);else return;let k=!0;j.forEach(_=>{_||(k=!1)}),k&&(C==null||C(),v(x.current),i&&(m==null||m()),s&&s())};return n.jsx(iy,{isPresent:p,initial:!w.current||r?void 0:!1,custom:t,presenceAffectsLayout:a,mode:o,root:c,onExitComplete:p?void 0:b,anchorX:l,children:P},E)})})},dy=()=>{const e=je(),[t,r]=d.useState(null);d.useEffect(()=>{if(typeof window<"u"){const Y=sessionStorage.getItem("navigationSource");Y&&r(Y)}},[]);const s=Y=>{typeof window<"u"&&(sessionStorage.setItem("navigationSource","/rewards"),window.location.href=Y)},a=()=>{e(-1)},o=[{id:1,type:"coins",value:100,icon:"🪙",label:"100 Coins",cost:0},{id:2,type:"life",value:1,icon:"❤️",label:"1 Life",cost:50},{id:3,type:"coins",value:200,icon:"🪙",label:"200 Coins",cost:0},{id:4,type:"wildcard",value:1,icon:"🃏",label:"Wild Card",cost:100},{id:5,type:"coins",value:500,icon:"💰",label:"500 Coins",cost:0,milestone:!0},{id:6,type:"fifty-fifty",value:1,icon:"➗",label:"50:50",cost:150},{id:7,type:"life",value:2,icon:"❤️",label:"2 Lives",cost:100},{id:8,type:"vehicle",value:"bike",icon:"🏍️",label:"Motorcycle",cost:300},{id:9,type:"mystery",value:1,icon:"🎁",label:"Mystery Box",cost:200},{id:10,type:"coins",value:750,icon:"💰",label:"750 Coins",cost:0,milestone:!0},{id:11,type:"life",value:3,icon:"❤️",label:"3 Lives",cost:150},{id:12,type:"wildcard",value:2,icon:"🃏",label:"2x Wild Card",cost:250},{id:13,type:"vehicle",value:"car",icon:"🚗",label:"Car",cost:500},{id:14,type:"fifty-fifty",value:2,icon:"➗",label:"2x 50:50",cost:300},{id:15,type:"coins",value:1e3,icon:"💎",label:"1000 Coins",cost:0,milestone:!0}],i={cycle:{icon:"🚴",name:"Bicycle"},bike:{icon:"🏍️",name:"Motorcycle"},car:{icon:"🚗",name:"Car"}};Sn();const[l,c]=d.useState(4),[u,m]=d.useState(ie.getCoins()),[h,f]=d.useState(4),[w,x]=d.useState(!1),[j,S]=d.useState(!1),[y,g]=d.useState(0),[v,N]=d.useState(0),[C,P]=d.useState("cycle"),[E,p]=d.useState([{type:"vehicle",icon:"🚴",name:"Bicycle",count:1},{type:"wildcard",icon:"🃏",name:"Wild Card",count:2},{type:"fifty-fifty",icon:"➗",name:"50:50 Helper",count:1}]),[b,k]=d.useState([0,1,2,3]),[_,R]=d.useState(!1),[F,Q]=d.useState(!1),[V,K]=d.useState(null),[q,M]=d.useState(null),[I,D]=d.useState(!1),[L,T]=d.useState(null),[z,B]=d.useState(!1),G=d.useRef(null),$=d.useRef(null),Z=d.useRef(null);d.useEffect(()=>{G.current=new Audio("/sounds/reward.mp3"),$.current=new Audio("/sounds/reward_progress.mp3"),[G,$].forEach(Y=>{var A;(A=Y.current)==null||A.addEventListener("error",()=>{console.log("Sound file not found")})})},[]);const U=Y=>{try{Y.current&&(Y.current.currentTime=0,Y.current.play().catch(A=>console.log("Audio play failed:",A)))}catch(A){console.log("Sound play error:",A)}},O=(Y,A)=>{if(Y>l){M(A),Q(!0);return}Y===l&&W(Y,A)},ee=Y=>{var te;const A=(te=Z.current)==null?void 0:te.querySelector(`[data-index="${Y}"]`);if(A){const ne=A.getBoundingClientRect(),le=window.pageYOffset||document.documentElement.scrollTop,ue=ne.top+le-window.innerHeight/2+50;window.scrollTo({top:ue,behavior:"smooth"})}},W=(Y,A)=>{if(!b.includes(Y)){if(A.cost>0&&u<A.cost){M(A),Q(!0);return}A.cost>0&&(m(te=>te-A.cost),ie.addCoins(-A.cost,`Reward Purchase: ${A.label}`)),U(G),R(!0),M(A),k(te=>[...te,Y]),setTimeout(()=>{R(!1),A.type==="coins"?(g(A.value),x(!0),setTimeout(()=>{m(te=>te+A.value),ie.addCoins(A.value,`Reward Claimed: ${A.label}`),setTimeout(()=>{x(!1),g(0)},500)},300)):A.type==="life"?(N(A.value),S(!0),setTimeout(()=>{f(te=>te+A.value),setTimeout(()=>{S(!1),N(0)},500)},300)):(T({icon:A.icon,startX:window.innerWidth/2,startY:window.innerHeight/2}),setTimeout(()=>{T(null),B(!0),H(A),A.type==="vehicle"&&P(A.value),setTimeout(()=>{B(!1)},500)},800)),setTimeout(()=>{if(l<o.length-1){const te=l+1;ee(te),setTimeout(()=>{D(!0),U($),c(te),setTimeout(()=>{D(!1)},500)},300)}},1200)},1500)}},H=Y=>{p(A=>A.find(ne=>ne.icon===Y.icon)?A.map(ne=>ne.icon===Y.icon?{...ne,count:ne.count+1}:ne):[...A,{type:Y.type,icon:Y.icon,name:Y.label,count:1}])},X=Y=>30+Y*100,J=()=>30+l*100;return n.jsxs("div",{className:"rewards-page",children:[n.jsx("style",{jsx:!0,children:`
        .rewards-page {
          min-height: 100vh;
          background: linear-gradient(180deg, #1a1a2e 0%, #16213e 100%);
          color: white;
          font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif;
          display: flex;
          flex-direction: column;
        }

        .non-sticky-header {
          padding: 40px 16px 16px 16px;
        }

        .back-button {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 8px 16px;
          background: rgba(255, 255, 255, 0.06);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 10px;
          color: white;
          font-size: 14px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s;
        }

        .back-button:hover {
          background: rgba(255, 255, 255, 0.1);
        }

        .sticky-section {
          position: sticky;
          top: 0;
          z-index: 50;
          background: linear-gradient(180deg, rgba(26, 26, 46, 0.95) 0%, rgba(22, 33, 62, 0.95) 100%);
          backdrop-filter: blur(20px);
          padding: 12px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
          box-shadow: 0 2px 20px rgba(0, 0, 0, 0.2);
        }

        .header-wrapper {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 14px;
          padding: 12px;
          margin-bottom: 10px;
        }

        .title-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 8px;
        }

        .title {
          font-size: 22px;
          font-weight: 700;
          margin: 0;
          letter-spacing: -0.3px;
        }

        .subtitle {
          font-size: 12px;
          color: rgba(255, 255, 255, 0.5);
          margin: 0;
        }

        .play-quiz-btn {
          padding: 7px 16px;
          background: #5E5CE6;
          border: none;
          border-radius: 8px;
          color: white;
          font-size: 12px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
        }

        .play-quiz-btn:hover {
          background: #6E6CF6;
        }

        .balance-row {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .balance-item {
          flex: 1;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .balance-label {
          font-size: 10px;
          color: rgba(255, 255, 255, 0.4);
          text-transform: uppercase;
          letter-spacing: 0.8px;
        }

        .balance-value {
          font-size: 20px;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 4px;
          position: relative;
        }

        .balance-value.animating {
          animation: pulse 0.4s ease;
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.08); }
        }

        .value-change {
          position: absolute;
          top: -14px;
          right: 0;
          font-size: 11px;
          font-weight: 600;
          color: #34C759;
          animation: slideUp 0.8s ease forwards;
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(5px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .stats-cards-container {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 14px;
          padding: 10px;
        }

        .info-grid {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 8px;
        }

        .info-card {
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 10px;
          padding: 8px;
          text-align: center;
        }

        .info-icon {
          font-size: 18px;
          margin-bottom: 2px;
        }

        .info-value {
          font-size: 14px;
          font-weight: 600;
          margin-bottom: 2px;
        }

        .info-label {
          font-size: 9px;
          color: rgba(255, 255, 255, 0.4);
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .cards-section {
          grid-column: span 3;
          padding: 12px;
          background: rgba(255, 255, 255, 0.02);
          border-radius: 8px;
        }

        .cards-label {
          font-size: 11px;
          color: rgba(255, 255, 255, 0.5);
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 10px;
          text-align: center;
        }

        .card-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
          gap: 10px;
          max-width: 300px;
          margin: 0 auto;
        }

        .card-item {
          position: relative;
          cursor: pointer;
          transition: all 0.2s;
        }

        .card-item:hover {
          transform: translateY(-4px) scale(1.05);
        }

        .large-card {
          width: 100%;
          height: 90px;
          background: linear-gradient(135deg, #ffffff 0%, #f5f5f7 100%);
          border-radius: 10px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 4px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
          border: 1px solid rgba(0, 0, 0, 0.06);
        }

        .large-card-icon {
          font-size: 32px;
        }

        .large-card-name {
          font-size: 10px;
          color: #333;
          font-weight: 600;
        }

        .card-count-badge {
          position: absolute;
          bottom: -4px;
          right: -4px;
          background: #5E5CE6;
          color: white;
          min-width: 20px;
          height: 20px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 11px;
          font-weight: 700;
          padding: 0 6px;
          box-shadow: 0 2px 6px rgba(94, 92, 230, 0.4);
        }

        .cards-section.animating {
          animation: highlight 0.4s ease;
        }

        @keyframes highlight {
          0%, 100% { 
            background: rgba(255, 255, 255, 0.02);
          }
          50% { 
            background: rgba(94, 92, 230, 0.12);
          }
        }

        .scrollable-journey {
          flex: 1;
          overflow-y: auto;
          padding-bottom: 40px;
        }

        .journey-container {
          position: relative;
          padding: 40px 20px;
          min-height: ${o.length*100+200}px;
        }

        .journey-track {
          position: relative;
          width: 100%;
          height: ${o.length*100+100}px;
        }

        .curvy-road {
          position: absolute;
          left: 50%;
          top: 30px;
          width: 60px;
          height: calc(100% - 60px);
          transform: translateX(-50%);
        }

        .road-svg {
          width: 100%;
          height: 100%;
        }

        .road-path {
          stroke: rgba(255, 255, 255, 0.08);
          stroke-width: 4;
          fill: none;
        }

        .road-progress {
          stroke: #5E5CE6;
          stroke-width: 4;
          fill: none;
          opacity: 0.8;
          transition: stroke-dashoffset 1s ease;
        }

        .rewards-list {
          position: relative;
          z-index: 2;
        }

        .reward-row {
          position: absolute;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .reward-item {
          display: flex;
          align-items: center;
          gap: 12px;
          position: relative;
        }

        .reward-item.left {
          flex-direction: row-reverse;
          transform: translateX(-60%);
        }

        .reward-item.right {
          transform: translateX(60%);
        }

        .checkpoint {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s;
          position: relative;
          background: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(20px);
          border: 2px solid rgba(255, 255, 255, 0.12);
        }

        .checkpoint.current {
          background: #5E5CE6;
          border-color: #5E5CE6;
          animation: checkpointPulse 2s infinite;
          transform: scale(1.1);
        }

        .checkpoint.claimed {
          background: #34C759;
          border-color: #34C759;
        }

        .checkpoint.locked {
          opacity: 0.4;
          background: rgba(0, 0, 0, 0.2);
        }

        @keyframes checkpointPulse {
          0%, 100% {
            box-shadow: 0 0 0 0 rgba(94, 92, 230, 0.6);
          }
          50% {
            box-shadow: 0 0 0 12px rgba(94, 92, 230, 0);
          }
        }

        .checkpoint-icon {
          font-size: 24px;
        }

        .checkpoint-value {
          font-size: 11px;
          font-weight: 600;
          margin-top: 2px;
        }

        .reward-info {
          background: rgba(0, 0, 0, 0.3);
          backdrop-filter: blur(20px);
          padding: 10px 14px;
          border-radius: 12px;
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        .reward-name {
          font-size: 13px;
          color: white;
          font-weight: 500;
        }

        .step-label {
          font-size: 11px;
          color: rgba(255, 255, 255, 0.5);
          margin-top: 2px;
        }

        .avatar-tracker {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          z-index: 10;
          transition: top 1s cubic-bezier(0.4, 0, 0.2, 1);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
        }

        .avatar-img {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: white;
          border: 3px solid #5E5CE6;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        }

        .tracker-vehicle {
          font-size: 22px;
          filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));
        }

        .lock-icon {
          position: absolute;
          top: -6px;
          right: -6px;
          background: rgba(0, 0, 0, 0.6);
          border-radius: 50%;
          width: 22px;
          height: 22px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 11px;
        }

        .milestone-badge {
          position: absolute;
          top: -8px;
          left: -8px;
          background: linear-gradient(135deg, #FFD60A, #FFB800);
          color: black;
          padding: 3px 8px;
          border-radius: 8px;
          font-size: 10px;
          font-weight: 700;
        }

        .flying-card {
          position: fixed;
          font-size: 40px;
          z-index: 1000;
          pointer-events: none;
          animation: flyToCards 0.8s ease-out forwards;
        }

        @keyframes flyToCards {
          0% {
            transform: translate(0, 0) scale(1);
            opacity: 1;
          }
          100% {
            transform: translate(calc(50vw - var(--startX)), calc(-50vh + 200px)) scale(0.5);
            opacity: 0;
          }
        }

        .claim-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.7);
          backdrop-filter: blur(10px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 100;
        }

        .modal {
          background: rgba(30, 30, 46, 0.98);
          backdrop-filter: blur(30px);
          padding: 32px;
          border-radius: 20px;
          text-align: center;
          animation: modalSlideUp 0.3s ease;
          border: 1px solid rgba(255, 255, 255, 0.08);
          max-width: 360px;
        }

        @keyframes modalSlideUp {
          from {
            transform: translateY(20px) scale(0.95);
            opacity: 0;
          }
          to {
            transform: translateY(0) scale(1);
            opacity: 1;
          }
        }

        .modal-icon {
          font-size: 64px;
          margin-bottom: 20px;
        }

        .modal-title {
          font-size: 24px;
          font-weight: 700;
          margin-bottom: 8px;
        }

        .modal-subtitle {
          font-size: 15px;
          color: rgba(255, 255, 255, 0.6);
          margin-bottom: 24px;
        }

        .modal-value {
          font-size: 32px;
          font-weight: 700;
          color: #34C759;
        }

        .modal-buttons {
          display: flex;
          gap: 12px;
          justify-content: center;
          margin-top: 24px;
        }

        .modal-btn {
          padding: 12px 24px;
          border-radius: 12px;
          border: none;
          font-size: 15px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
        }

        .modal-btn-primary {
          background: #5E5CE6;
          color: white;
        }

        .modal-btn-secondary {
          background: rgba(255, 255, 255, 0.08);
          color: white;
        }

        .modal-btn:hover {
          transform: scale(1.02);
        }

        .card-detail-name {
          font-size: 18px;
          font-weight: 600;
          margin-top: 12px;
          margin-bottom: 8px;
        }

        .card-detail-desc {
          font-size: 14px;
          color: rgba(255, 255, 255, 0.6);
        }
      `}),n.jsx("div",{className:"non-sticky-header",children:n.jsx("button",{className:"back-button",onClick:a,children:"← Back"})}),n.jsxs("div",{className:"sticky-section",children:[n.jsxs("div",{className:"header-wrapper",children:[n.jsxs("div",{className:"title-row",children:[n.jsxs("div",{children:[n.jsx("h1",{className:"title",children:"Rewards"}),n.jsx("p",{className:"subtitle",children:"Claim amazing prizes"})]}),n.jsx("button",{className:"play-quiz-btn",onClick:()=>s("/play"),children:"Play Quiz"})]}),n.jsx("div",{className:"balance-row",children:n.jsx("div",{className:"balance-item",children:n.jsxs("div",{children:[n.jsx("div",{className:"balance-label",children:"Balance"}),n.jsxs("div",{className:`balance-value ${w?"animating":""}`,children:[u.toLocaleString()," 🪙",w&&n.jsxs("span",{className:"value-change",children:["+",y]})]})]})})})]}),n.jsx("div",{className:"stats-cards-container",children:n.jsxs("div",{className:"info-grid",children:[n.jsxs("div",{className:"info-card",children:[n.jsx("div",{className:"info-icon",children:"❤️"}),n.jsxs("div",{className:`info-value ${j?"animating":""}`,children:[h,j&&n.jsxs("span",{className:"value-change",children:["+",v]})]}),n.jsx("div",{className:"info-label",children:"Lives"})]}),n.jsxs("div",{className:"info-card",children:[n.jsx("div",{className:"info-icon",children:"⭐"}),n.jsx("div",{className:"info-value",children:"5"}),n.jsx("div",{className:"info-label",children:"Level"})]}),n.jsxs("div",{className:"info-card",children:[n.jsx("div",{className:"info-icon",children:i[C].icon}),n.jsx("div",{className:"info-value",children:i[C].name}),n.jsx("div",{className:"info-label",children:"Vehicle"})]}),n.jsxs("div",{className:`cards-section ${z?"animating":""}`,children:[n.jsx("div",{className:"cards-label",children:"Your Cards"}),n.jsx("div",{className:"card-grid",children:E.map((Y,A)=>n.jsxs("div",{className:"card-item",onClick:()=>K(Y),children:[n.jsxs("div",{className:"large-card",children:[n.jsx("div",{className:"large-card-icon",children:Y.icon}),n.jsx("div",{className:"large-card-name",children:Y.name})]}),Y.count>1&&n.jsx("div",{className:"card-count-badge",children:Y.count})]},A))})]})]})})]}),n.jsx("div",{className:"scrollable-journey",children:n.jsx("div",{className:"journey-container",ref:Z,children:n.jsxs("div",{className:"journey-track",children:[n.jsx("div",{className:"curvy-road",children:n.jsxs("svg",{className:"road-svg",viewBox:"0 0 60 1500",preserveAspectRatio:"none",children:[n.jsx("defs",{children:n.jsxs("linearGradient",{id:"roadGradient",x1:"0%",y1:"0%",x2:"0%",y2:"100%",children:[n.jsx("stop",{offset:"0%",stopColor:"#5E5CE6"}),n.jsx("stop",{offset:"100%",stopColor:"#5E5CE6"})]})}),n.jsx("path",{className:"road-path",d:"M 30 0 Q 45 50, 30 100 T 30 200 Q 15 250, 30 300 T 30 400 Q 45 450, 30 500 T 30 600 Q 15 650, 30 700 T 30 800 Q 45 850, 30 900 T 30 1000 Q 15 1050, 30 1100 T 30 1200 Q 45 1250, 30 1300 T 30 1400 L 30 1500"}),n.jsx("path",{className:"road-progress",d:"M 30 0 Q 45 50, 30 100 T 30 200 Q 15 250, 30 300 T 30 400 Q 45 450, 30 500 T 30 600 Q 15 650, 30 700 T 30 800 Q 45 850, 30 900 T 30 1000 Q 15 1050, 30 1100 T 30 1200 Q 45 1250, 30 1300 T 30 1400 L 30 1500",strokeDasharray:"1500",strokeDashoffset:1500-l/(o.length-1)*1500})]})}),n.jsxs("div",{className:"avatar-tracker",style:{top:`${J()}px`},children:[n.jsx("img",{className:"avatar-img",src:"/profile/avatar.png",alt:"You",onError:Y=>{Y.target.style.display="none"}}),n.jsx("div",{className:"tracker-vehicle",children:i[C].icon})]}),n.jsx("div",{className:"rewards-list",children:o.map((Y,A)=>{const te=A%2===0,ne=A>l,le=b.includes(A),ue=A===l;return n.jsx("div",{className:"reward-row","data-index":A,style:{top:`${X(A)}px`},children:n.jsxs("div",{className:`reward-item ${te?"left":"right"}`,children:[n.jsxs("div",{className:`checkpoint ${ue?"current":le?"claimed":ne?"locked":""}`,onClick:()=>O(A,Y),children:[n.jsx("div",{className:"checkpoint-icon",children:Y.icon}),n.jsx("div",{className:"checkpoint-value",children:Y.label.split(" ")[0]}),Y.milestone&&n.jsx("div",{className:"milestone-badge",children:"BONUS"}),ne&&n.jsx("div",{className:"lock-icon",children:"🔒"})]}),n.jsxs("div",{className:"reward-info",children:[n.jsx("div",{className:"reward-name",children:Y.label}),n.jsxs("div",{className:"step-label",children:["Step ",A+1]})]})]})},Y.id)})})]})})}),L&&n.jsx("div",{className:"flying-card",style:{left:`${L.startX}px`,top:`${L.startY}px`,"--startX":`${L.startX}px`},children:L.icon}),n.jsx(hi,{children:V&&n.jsx("div",{className:"claim-overlay",onClick:()=>K(null),children:n.jsxs("div",{className:"modal",onClick:Y=>Y.stopPropagation(),children:[n.jsx("div",{className:"modal-icon",children:V.icon}),n.jsx("div",{className:"card-detail-name",children:V.name}),n.jsxs("div",{className:"card-detail-desc",children:["You have ",V.count," of these cards"]}),n.jsx("div",{className:"modal-buttons",children:n.jsx("button",{className:"modal-btn modal-btn-secondary",onClick:()=>K(null),children:"Close"})})]})})}),n.jsx(hi,{children:_&&q&&n.jsx("div",{className:"claim-overlay",children:n.jsxs("div",{className:"modal",children:[n.jsx("div",{className:"modal-title",children:"WELL DONE!"}),n.jsx("div",{className:"modal-subtitle",children:"Here's a reward for you."}),n.jsx("div",{className:"modal-icon",children:q.icon}),n.jsxs("div",{className:"modal-value",children:["+",q.value," ",q.type==="coins"?"Coins":q.type==="life"?"Lives":q.label]})]})})}),n.jsx(hi,{children:F&&q&&n.jsx("div",{className:"claim-overlay",onClick:()=>Q(!1),children:n.jsxs("div",{className:"modal",onClick:Y=>Y.stopPropagation(),children:[n.jsx("div",{className:"modal-icon",children:"🪙"}),n.jsx("div",{className:"modal-title",children:"Need More Coins"}),n.jsx("div",{className:"modal-subtitle",children:q.cost>0?`You need ${q.cost-u} more coins`:"Complete previous rewards first"}),n.jsxs("div",{className:"modal-buttons",children:[n.jsx("button",{className:"modal-btn modal-btn-primary",onClick:()=>s("/play"),children:"Play Quiz"}),n.jsx("button",{className:"modal-btn modal-btn-secondary",onClick:()=>Q(!1),children:"Cancel"})]})]})})})]})},Ca=[{id:1,name:"First Win",emoji:"🏆",unlocked:!0,hint:"Win your first quiz",progress:100,color:"#FFD700"},{id:2,name:"On Fire",emoji:"🔥",unlocked:!0,hint:"3-day winning streak",progress:100,color:"#FF6B35"},{id:3,name:"Perfectionist",emoji:"⭐",unlocked:!1,hint:"Score 10/10 in any quiz",progress:75,color:"#9333EA"},{id:4,name:"Early Bird",emoji:"🌅",unlocked:!0,hint:"Play before 9 AM",progress:100,color:"#F59E0B"},{id:5,name:"Scholar",emoji:"🎓",unlocked:!1,hint:"Master 5 categories",progress:40,color:"#3B82F6"},{id:6,name:"Lightning",emoji:"⚡",unlocked:!1,hint:"Complete in under 2 minutes",progress:20,color:"#10B981"},{id:7,name:"Champion",emoji:"👑",unlocked:!1,hint:"Win 50 quizzes",progress:30,color:"#EC4899"},{id:8,name:"Explorer",emoji:"🗺️",unlocked:!1,hint:"Try all categories",progress:60,color:"#06B6D4"},{id:9,name:"Strategist",emoji:"🧠",unlocked:!0,hint:"Use 3 power-ups wisely",progress:100,color:"#8B5CF6"}];function uy(){const[e,t]=d.useState(null),r=Ca.filter(a=>a.unlocked).length,s=Math.round(r/Ca.length*100);return n.jsxs("div",{className:"badges-screen",children:[n.jsx("style",{jsx:!0,children:`
        .badges-screen {
          min-height: 100vh;
          background: linear-gradient(180deg, #3d4491 0%, #6b63b5 50%, #8679c7 100%);
          color: white;
          padding: 20px;
          font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Segoe UI', sans-serif;
        }

        .header {
          margin-bottom: 24px;
          animation: slideDown 0.5s ease-out;
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .back-button {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 16px;
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 12px;
          color: white;
          font-size: 15px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s;
          margin-bottom: 20px;
          margin-top: 12px;
        }

        .back-button:hover {
          background: rgba(255, 255, 255, 0.25);
          transform: translateX(-2px);
        }

        .title-section {
          text-align: center;
          margin-bottom: 32px;
        }

        .main-title {
          font-size: 36px;
          font-weight: 700;
          margin-bottom: 8px;
          background: linear-gradient(to right, #ffffff, #f0f0f0);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          letter-spacing: -0.5px;
        }

        .subtitle {
          font-size: 16px;
          color: rgba(255, 255, 255, 0.85);
          font-weight: 400;
        }

        .progress-card {
          background: rgba(255, 255, 255, 0.12);
          backdrop-filter: blur(40px);
          border-radius: 20px;
          padding: 20px;
          margin-bottom: 28px;
          border: 1px solid rgba(255, 255, 255, 0.18);
          animation: fadeInScale 0.6s ease-out 0.2s both;
        }

        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .progress-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 12px;
        }

        .progress-label {
          font-size: 14px;
          color: rgba(255, 255, 255, 0.9);
          font-weight: 500;
        }

        .progress-value {
          font-size: 24px;
          font-weight: 700;
          background: linear-gradient(135deg, #FFD700, #FFA500);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .progress-bar-container {
          width: 100%;
          height: 8px;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 100px;
          overflow: hidden;
          position: relative;
        }

        .progress-bar-fill {
          height: 100%;
          background: linear-gradient(90deg, #FFD700, #FFA500);
          border-radius: 100px;
          transition: width 1s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }

        .progress-bar-fill::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
          animation: shimmer 2s infinite;
        }

        @keyframes shimmer {
          from {
            transform: translateX(-100%);
          }
          to {
            transform: translateX(100%);
          }
        }

        .badges-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
          margin-bottom: 24px;
        }

        .badge-card {
          aspect-ratio: 1;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(30px);
          border-radius: 20px;
          border: 1.5px solid rgba(255, 255, 255, 0.15);
          padding: 12px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
          animation: fadeInUp 0.5s ease-out both;
        }

        .badge-card:nth-child(1) { animation-delay: 0.1s; }
        .badge-card:nth-child(2) { animation-delay: 0.15s; }
        .badge-card:nth-child(3) { animation-delay: 0.2s; }
        .badge-card:nth-child(4) { animation-delay: 0.25s; }
        .badge-card:nth-child(5) { animation-delay: 0.3s; }
        .badge-card:nth-child(6) { animation-delay: 0.35s; }
        .badge-card:nth-child(7) { animation-delay: 0.4s; }
        .badge-card:nth-child(8) { animation-delay: 0.45s; }
        .badge-card:nth-child(9) { animation-delay: 0.5s; }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .badge-card.unlocked {
          background: rgba(255, 255, 255, 0.18);
          border-color: rgba(255, 255, 255, 0.3);
        }

        .badge-card:hover {
          transform: translateY(-4px) scale(1.05);
          box-shadow: 0 12px 32px rgba(0, 0, 0, 0.2);
        }

        .badge-card.unlocked:hover {
          background: rgba(255, 255, 255, 0.22);
        }

        .badge-glow {
          position: absolute;
          top: -50%;
          left: -50%;
          right: -50%;
          bottom: -50%;
          background: radial-gradient(circle, var(--badge-color) 0%, transparent 70%);
          opacity: 0;
          transition: opacity 0.3s;
          pointer-events: none;
        }

        .badge-card.unlocked .badge-glow {
          opacity: 0.15;
        }

        .badge-emoji {
          font-size: 36px;
          margin-bottom: 6px;
          filter: grayscale(100%) opacity(0.5);
          transition: all 0.3s;
        }

        .badge-card.unlocked .badge-emoji {
          filter: none;
          animation: bounce 0.5s ease-out;
        }

        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }

        .badge-name {
          font-size: 11px;
          font-weight: 600;
          text-align: center;
          line-height: 1.2;
          margin-bottom: 4px;
          color: rgba(255, 255, 255, 0.7);
        }

        .badge-card.unlocked .badge-name {
          color: white;
        }

        .badge-progress {
          width: 100%;
          height: 3px;
          background: rgba(255, 255, 255, 0.15);
          border-radius: 100px;
          overflow: hidden;
          margin-top: 4px;
        }

        .badge-progress-fill {
          height: 100%;
          background: linear-gradient(90deg, var(--badge-color), var(--badge-color));
          border-radius: 100px;
          transition: width 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .lock-indicator {
          position: absolute;
          top: 8px;
          right: 8px;
          width: 20px;
          height: 20px;
          background: rgba(0, 0, 0, 0.4);
          backdrop-filter: blur(10px);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 10px;
        }

        .badge-modal {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.8);
          backdrop-filter: blur(20px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          padding: 20px;
          animation: fadeIn 0.3s ease-out;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .modal-content {
          background: linear-gradient(135deg, rgba(45, 45, 65, 0.98), rgba(55, 55, 75, 0.95));
          border-radius: 24px;
          padding: 28px;
          max-width: 320px;
          width: 100%;
          text-align: center;
          animation: slideUp 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(40px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .modal-badge {
          font-size: 72px;
          margin-bottom: 16px;
          filter: drop-shadow(0 4px 12px rgba(0, 0, 0, 0.15));
        }

        .modal-badge.locked {
          filter: grayscale(100%) opacity(0.6);
        }

        .modal-title {
          font-size: 24px;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 8px;
        }

        .modal-status {
          display: inline-block;
          padding: 4px 12px;
          background: linear-gradient(135deg, #10B981, #059669);
          color: white;
          font-size: 11px;
          font-weight: 600;
          border-radius: 100px;
          margin-bottom: 12px;
        }

        .modal-status.locked {
          background: linear-gradient(135deg, #6B7280, #4B5563);
        }

        .modal-description {
          font-size: 14px;
          color: rgba(255, 255, 255, 0.7);
          line-height: 1.5;
          margin-bottom: 16px;
        }

        .modal-progress-section {
          background: rgba(255, 255, 255, 0.08);
          border-radius: 12px;
          padding: 12px;
          margin-bottom: 20px;
        }

        .modal-progress-label {
          font-size: 12px;
          color: rgba(255, 255, 255, 0.5);
          margin-bottom: 8px;
        }

        .modal-progress-bar {
          width: 100%;
          height: 8px;
          background: rgba(255, 255, 255, 0.15);
          border-radius: 100px;
          overflow: hidden;
        }

        .modal-progress-fill {
          height: 100%;
          background: linear-gradient(90deg, var(--badge-color), var(--badge-color));
          border-radius: 100px;
          transition: width 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .modal-progress-text {
          font-size: 18px;
          font-weight: 700;
          color: #ffffff;
          margin-top: 8px;
        }

        .modal-close {
          padding: 12px 24px;
          background: linear-gradient(135deg, #667eea, #764ba2);
          color: white;
          border: none;
          border-radius: 12px;
          font-size: 15px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
          width: 100%;
        }

        .modal-close:hover {
          transform: scale(1.02);
          box-shadow: 0 4px 16px rgba(102, 126, 234, 0.4);
        }

        .tips-card {
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 16px;
          padding: 16px;
          animation: fadeIn 0.8s ease-out 0.6s both;
        }

        .tips-title {
          font-size: 14px;
          font-weight: 600;
          margin-bottom: 8px;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .tips-content {
          font-size: 13px;
          color: rgba(255, 255, 255, 0.8);
          line-height: 1.5;
        }
      `}),n.jsxs("div",{className:"header",children:[n.jsx("button",{className:"back-button",onClick:()=>window.history.back(),children:"← Back"}),n.jsxs("div",{className:"title-section",children:[n.jsx("h1",{className:"main-title",children:"Badge Collection"}),n.jsx("p",{className:"subtitle",children:"Unlock achievements and show your skills"})]})]}),n.jsxs("div",{className:"progress-card",children:[n.jsxs("div",{className:"progress-header",children:[n.jsx("span",{className:"progress-label",children:"Collection Progress"}),n.jsxs("span",{className:"progress-value",children:[r,"/",Ca.length]})]}),n.jsx("div",{className:"progress-bar-container",children:n.jsx("div",{className:"progress-bar-fill",style:{width:`${s}%`}})})]}),n.jsx("div",{className:"badges-grid",children:Ca.map(a=>n.jsxs("div",{className:`badge-card ${a.unlocked?"unlocked":""}`,style:{"--badge-color":a.color},onClick:()=>t(a),children:[n.jsx("div",{className:"badge-glow"}),n.jsx("div",{className:"badge-emoji",children:a.emoji}),n.jsx("div",{className:"badge-name",children:a.name}),!a.unlocked&&n.jsxs(n.Fragment,{children:[n.jsx("div",{className:"badge-progress",children:n.jsx("div",{className:"badge-progress-fill",style:{width:`${a.progress}%`}})}),n.jsx("div",{className:"lock-indicator",children:"🔒"})]})]},a.id))}),n.jsxs("div",{className:"tips-card",children:[n.jsxs("div",{className:"tips-title",children:[n.jsx("span",{children:"💡"}),n.jsx("span",{children:"Pro Tip"})]}),n.jsx("div",{className:"tips-content",children:"Complete daily challenges and maintain streaks to unlock rare badges faster. Each badge gives you bonus XP and special rewards!"})]}),e&&n.jsx("div",{className:"badge-modal",onClick:()=>t(null),children:n.jsxs("div",{className:"modal-content",onClick:a=>a.stopPropagation(),children:[n.jsx("div",{className:`modal-badge ${e.unlocked?"":"locked"}`,children:e.emoji}),n.jsx("h3",{className:"modal-title",children:e.name}),n.jsx("span",{className:`modal-status ${e.unlocked?"":"locked"}`,children:e.unlocked?"✓ Unlocked":"🔒 Locked"}),n.jsx("p",{className:"modal-description",children:e.hint}),!e.unlocked&&n.jsxs("div",{className:"modal-progress-section",children:[n.jsx("div",{className:"modal-progress-label",children:"Progress"}),n.jsx("div",{className:"modal-progress-bar",children:n.jsx("div",{className:"modal-progress-fill",style:{width:`${e.progress}%`,"--badge-color":e.color}})}),n.jsxs("div",{className:"modal-progress-text",children:[e.progress,"%"]})]}),n.jsx("button",{className:"modal-close",onClick:()=>t(null),children:e.unlocked?"Awesome!":"Keep Going!"})]})})]})}const my=[{id:1,title:"Quiz Master",subtitle:"Play 10 quizzes",current:7,target:10,reward:150,claimed:!1,icon:"🎯",color:"#FF6B6B"},{id:2,title:"Coin Collector",subtitle:"Earn 2,000 coins",current:1240,target:2e3,reward:200,claimed:!1,icon:"💰",color:"#4ECDC4"},{id:3,title:"Winning Streak",subtitle:"Win 3 in a row",current:3,target:3,reward:100,claimed:!0,icon:"🔥",color:"#FFD93D"},{id:4,title:"Speed Demon",subtitle:"Complete 5 under 2min",current:2,target:5,reward:300,claimed:!1,icon:"⚡",color:"#A8E6CF"},{id:5,title:"Perfect Score",subtitle:"Get 100% accuracy",current:0,target:1,reward:250,claimed:!1,icon:"⭐",color:"#C7B8FF"}];function fy(){Sn();const[e,t]=d.useState(my),[r,s]=d.useState(null),[a,o]=d.useState(ie.getCoins()),[i,l]=d.useState(!1),[c,u]=d.useState([]),m=e.length,h=e.filter(x=>x.current>=x.target).length,f=Math.round(h/m*100);d.useEffect(()=>{const x=setInterval(()=>{u(j=>{const S={id:Date.now(),x:Math.random()*100,y:Math.random()*100,size:Math.random()*20+10};return[...j.slice(-4),S]})},3e3);return()=>clearInterval(x)},[]);const w=(x,j)=>{s(x),navigator.vibrate&&navigator.vibrate([20,10,20]),setTimeout(()=>{var S;t(y=>y.map(g=>g.id===x?{...g,claimed:!0}:g)),o(y=>y+j),ie.addCoins(j,`Achievement: ${((S=e.find(y=>y.id===x))==null?void 0:S.title)||"Completed"}`),s(null),l(!0),setTimeout(()=>l(!1),2e3)},600)};return n.jsxs("div",{className:"achievements-screen",children:[n.jsx("style",{jsx:!0,children:`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        html {
            scroll-behavior: smooth;
            }

        .achievements-screen {
          min-height: 100vh;
          background: linear-gradient(135deg, #1a1a2e 0%, #16213e 30%, #0f3460 100%);
          padding: 20px;
          font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif;
          color: white;
          position: relative;
          overflow-x: hidden;
          scroll-behavior: smooth;  /* Add this line */
          -webkit-overflow-scrolling: touch;  /* Add this line for iOS */


        }

        .animated-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          overflow: hidden;
        }

        .sparkle {
          position: absolute;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(255,255,255,0.8) 0%, transparent 70%);
        //   animation: twinkle 3s ease-out forwards;
        }

        @keyframes twinkle {
          0% {
            transform: scale(0) rotate(0deg);
            opacity: 1;
          }
          50% {
            transform: scale(1) rotate(180deg);
            opacity: 0.8;
          }
          100% {
            transform: scale(0) rotate(360deg);
            opacity: 0;
          }
        }

        .floating-shapes {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }

        .shape {
          position: absolute;
          opacity: 0.05;
        //   animation: float 20s infinite ease-in-out;
        }

        .shape-1 {
          width: 300px;
          height: 300px;
          background: linear-gradient(135deg, #FF6B6B, #4ECDC4);
          border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
          top: -150px;
          right: -100px;
          animation-delay: 0s;
        }

        .shape-2 {
          width: 200px;
          height: 200px;
          background: linear-gradient(135deg, #FFD93D, #A8E6CF);
          border-radius: 70% 30% 30% 70% / 70% 70% 30% 30%;
          bottom: -100px;
          left: -50px;
          animation-delay: 5s;
        }

        @keyframes float {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(30px, -30px) rotate(120deg); }
          66% { transform: translate(-20px, 20px) rotate(240deg); }
        }

        .header {
          position: relative;
          z-index: 10;
          margin-bottom: 24px;
          animation: slideDown 0.5s ease-out;
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .back-button {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 16px;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 12px;
          color: white;
          font-size: 15px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s;
          margin-top: 15px;  /* Add this line */
          margin-bottom: 20px;
        }

        .back-button:hover {
          background: rgba(255, 255, 255, 0.15);
          transform: translateX(-2px);
        }

        .title-section {
          text-align: center;
          margin-bottom: 24px;
        }

        .main-title {
          font-size: 42px;
          font-weight: 800;
          margin-bottom: 8px;
          background: linear-gradient(135deg, #FFD93D, #FF6B6B, #4ECDC4);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          text-shadow: 0 0 30px rgba(255, 217, 61, 0.3);
        //   animation: glow 3s ease-in-out infinite;
        }

        @keyframes glow {
          0%, 100% { filter: brightness(1); }
          50% { filter: brightness(1.2); }
        }

        .subtitle {
          font-size: 16px;
          color: rgba(255, 255, 255, 0.8);
        }

        .coins-display {
          position: absolute;
          top: 20px;
          right: 20px;
          background: linear-gradient(135deg, #FFD93D, #FFA500);
          padding: 10px 18px;
          border-radius: 25px;
          display: flex;
          align-items: center;
          gap: 8px;
          font-weight: 700;
          font-size: 20px;
          color: #1a1a1a;
          box-shadow: 0 4px 15px rgba(255, 217, 61, 0.4);
        //   animation: float-coin 3s ease-in-out infinite;
        }

        @keyframes float-coin {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }

        .progress-overview {
          background: linear-gradient(135deg, rgba(78, 205, 196, 0.15), rgba(255, 107, 107, 0.15));
          backdrop-filter: blur(20px);
          border-radius: 24px;
          padding: 24px;
          margin-bottom: 28px;
          border: 2px solid rgba(255, 255, 255, 0.1);
          animation: fadeInScale 0.6s ease-out 0.2s both;
          position: relative;
          overflow: hidden;
        }

        // .progress-overview::before {
        //   content: '';
        //   position: absolute;
        //   top: -2px;
        //   left: -2px;
        //   right: -2px;
        //   bottom: -2px;
        //   background: linear-gradient(45deg, #FFD93D, #FF6B6B, #4ECDC4, #FFD93D);
        //   border-radius: 24px;
        //   opacity: 0.5;
        //   z-index: -1;
        //   animation: rotate-border 3s linear infinite;
        // }

        @keyframes rotate-border {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .overview-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 16px;
        }

        .overview-label {
          font-size: 16px;
          color: white;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .overview-stats {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .trophy-icon {
          font-size: 32px;
          filter: drop-shadow(0 2px 4px rgba(0,0,0,0.3));
        //   animation: bounce-trophy 2s ease-in-out infinite;
        }

        @keyframes bounce-trophy {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          25% { transform: translateY(-3px) rotate(-5deg); }
          75% { transform: translateY(-3px) rotate(5deg); }
        }

        .overview-value {
          font-size: 28px;
          font-weight: 800;
          color: #FFD93D;
          text-shadow: 0 2px 4px rgba(0,0,0,0.2);
        }

        .progress-bar-main {
          width: 100%;
          height: 16px;
          background: rgba(0, 0, 0, 0.3);
          border-radius: 100px;
          overflow: hidden;
          position: relative;
          box-shadow: inset 0 2px 4px rgba(0,0,0,0.2);
        }

        .progress-fill-main {
          height: 100%;
          background: linear-gradient(90deg, #FFD93D, #FF6B6B, #4ECDC4);
          border-radius: 100px;
          transition: width 1s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
          box-shadow: 0 2px 8px rgba(255, 217, 61, 0.4);
        }

        .progress-fill-main::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.6), transparent);
        //   animation: shimmer 2s infinite;
        }

        @keyframes shimmer {
          from { transform: translateX(-100%); }
          to { transform: translateX(100%); }
        }

        .achievements-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
          position: relative;
          z-index: 10;
        }

        .achievement-card {
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05));
        //   backdrop-filter: blur(20px);
          border-radius: 24px;
          padding: 20px;
          position: relative;
          overflow: hidden;
          animation: slideUp 0.5s ease-out both;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          border: 2px solid rgba(255, 255, 255, 0.1);
          will-change: transform;        /* ADD THIS LINE */
          transform: translateZ(0);       /* ADD THIS LINE */

        }

        .achievement-card:nth-child(1) { animation-delay: 0.1s; }
        .achievement-card:nth-child(2) { animation-delay: 0.2s; }
        .achievement-card:nth-child(3) { animation-delay: 0.3s; }
        .achievement-card:nth-child(4) { animation-delay: 0.4s; }
        .achievement-card:nth-child(5) { animation-delay: 0.5s; }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .achievement-card:hover {
          transform: translateY(-4px) scale(1.02);
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.3);
          border-color: var(--card-color);
        }

        .achievement-card.completed {
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.08));
          border-color: rgba(255, 217, 61, 0.3);
        }

        .card-glow {
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, var(--card-color) 0%, transparent 70%);
          opacity: 0.1;
          animation: pulse-glow 3s ease-in-out infinite;
        }

        @keyframes pulse-glow {
          0%, 100% { opacity: 0.05; }
          50% { opacity: 0.15; }
        }

        .card-content {
          display: flex;
          align-items: center;
          gap: 16px;
          position: relative;
        }

        .achievement-icon {
          width: 72px;
          height: 72px;
          background: linear-gradient(135deg, var(--card-color), var(--card-color-dark));
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 36px;
          flex-shrink: 0;
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
          position: relative;
        //   animation: icon-float 3s ease-in-out infinite;
        }

        @keyframes icon-float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-5px) rotate(5deg); }
        }

        .achievement-icon::after {
          content: '';
          position: absolute;
          inset: -2px;
          background: linear-gradient(45deg, var(--card-color), transparent, var(--card-color));
          border-radius: 20px;
          opacity: 0.5;
          z-index: -1;
        //   animation: rotate-border 2s linear infinite;
        }

        .achievement-details {
          flex: 1;
          min-width: 0;
        }

        .achievement-title {
          font-size: 18px;
          font-weight: 800;
          color: white;
          margin-bottom: 4px;
          text-shadow: 0 2px 4px rgba(0,0,0,0.2);
        }

        .achievement-subtitle {
          font-size: 14px;
          color: rgba(255, 255, 255, 0.7);
          margin-bottom: 12px;
        }

        .progress-container {
          position: relative;
        }

        .progress-bar {
          width: 100%;
          height: 12px;
          background: rgba(0, 0, 0, 0.3);
          border-radius: 100px;
          overflow: hidden;
          box-shadow: inset 0 2px 4px rgba(0,0,0,0.2);
        }

        .progress-fill {
          height: 100%;
          background: linear-gradient(90deg, var(--card-color), var(--card-color-dark));
          border-radius: 100px;
          transition: width 0.8s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 2px 8px var(--card-color);
          position: relative;
        }

        .progress-fill::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.5), transparent);
          animation: shimmer 2s infinite;
        }

        .progress-text {
          font-size: 12px;
          color: rgba(255, 255, 255, 0.8);
          margin-top: 6px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .reward-badge {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          padding: 4px 10px;
          background: linear-gradient(135deg, #FFD93D, #FFA500);
          color: #1a1a1a;
          border-radius: 100px;
          font-size: 12px;
          font-weight: 700;
          box-shadow: 0 2px 8px rgba(255, 217, 61, 0.3);
        //   animation: pulse-reward 2s ease-in-out infinite;
        }

        @keyframes pulse-reward {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }

        .claim-button {
          padding: 12px 24px;
          border-radius: 16px;
          font-size: 15px;
          font-weight: 700;
          border: none;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          min-width: 110px;
          position: relative;
          overflow: hidden;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .claim-button.can-claim {
          background: linear-gradient(135deg, #10B981, #059669);
          color: white;
          box-shadow: 0 6px 20px rgba(16, 185, 129, 0.4);
        //   animation: pulse-button 2s ease-in-out infinite;
        }

        @keyframes pulse-button {
          0%, 100% { 
            transform: scale(1);
            box-shadow: 0 6px 20px rgba(16, 185, 129, 0.4);
          }
          50% { 
            transform: scale(1.05);
            box-shadow: 0 8px 25px rgba(16, 185, 129, 0.5);
          }
        }

        .claim-button.can-claim:hover {
          transform: scale(1.08) rotate(-2deg);
          box-shadow: 0 8px 30px rgba(16, 185, 129, 0.5);
        }

        .claim-button.can-claim::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.3), transparent);
          transform: rotate(45deg);
          animation: shine 3s infinite;
        }

        @keyframes shine {
          0% { transform: translateX(-100%) translateY(-100%) rotate(45deg); }
          100% { transform: translateX(100%) translateY(100%) rotate(45deg); }
        }

        .claim-button.claimed {
          background: rgba(255, 255, 255, 0.1);
          color: rgba(255, 255, 255, 0.5);
          cursor: not-allowed;
        }

        .claim-button.in-progress {
          background: rgba(255, 255, 255, 0.05);
          color: rgba(255, 255, 255, 0.4);
          cursor: not-allowed;
          border: 2px solid rgba(255, 255, 255, 0.1);
        }

        .claim-button.claiming {
          animation: bounceScale 0.6s ease;
        }

        @keyframes bounceScale {
          0%, 100% { transform: scale(1); }
          30% { transform: scale(0.9); }
          60% { transform: scale(1.15); }
        }

        .celebration {
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-size: 120px;
          z-index: 1000;
          pointer-events: none;
          animation: celebrate 2s ease-out forwards;
        }

        @keyframes celebrate {
          0% {
            transform: translate(-50%, -50%) scale(0) rotate(0deg);
            opacity: 1;
          }
          50% {
            transform: translate(-50%, -50%) scale(1.2) rotate(180deg);
            opacity: 1;
          }
          100% {
            transform: translate(-50%, -50%) scale(0.8) rotate(360deg);
            opacity: 0;
          }
        }

        .completed-badge {
          position: absolute;
          top: 10px;
          right: 10px;
          width: 32px;
          height: 32px;
          background: linear-gradient(135deg, #FFD93D, #FFA500);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          color: #1a1a1a;
          font-weight: bold;
          box-shadow: 0 4px 12px rgba(255, 217, 61, 0.4);
          animation: pop-in 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }

        @keyframes pop-in {
          0% { transform: scale(0) rotate(0deg); }
          50% { transform: scale(1.2) rotate(180deg); }
          100% { transform: scale(1) rotate(360deg); }
        }
      `}),n.jsxs("div",{className:"floating-shapes",children:[n.jsx("div",{className:"shape shape-1"}),n.jsx("div",{className:"shape shape-2"})]}),n.jsxs("div",{className:"header",children:[n.jsx("button",{className:"back-button",onClick:()=>window.history.back(),children:"← Back"}),n.jsxs("div",{className:"coins-display",children:["🪙 ",a.toLocaleString()]}),n.jsxs("div",{className:"title-section",children:[n.jsx("h1",{className:"main-title",children:"ACHIEVEMENTS"}),n.jsx("p",{className:"subtitle",children:"Complete challenges and earn awesome rewards!"})]})]}),n.jsxs("div",{className:"progress-overview",children:[n.jsx("div",{className:"card-glow",style:{"--card-color":"#FFD93D"}}),n.jsxs("div",{className:"overview-header",children:[n.jsx("span",{className:"overview-label",children:"🎮 Progress Tracker"}),n.jsxs("div",{className:"overview-stats",children:[n.jsx("span",{className:"trophy-icon",children:"🏆"}),n.jsxs("span",{className:"overview-value",children:[h,"/",m]})]})]}),n.jsx("div",{className:"progress-bar-main",children:n.jsx("div",{className:"progress-fill-main",style:{width:`${f}%`}})})]}),n.jsx("div",{className:"achievements-list",children:e.map(x=>{const j=Math.min(100,Math.round(x.current/x.target*100)),S=j===100,y=x.color+"CC";return n.jsxs("div",{className:`achievement-card ${S?"completed":""}`,style:{"--card-color":x.color,"--card-color-dark":y},children:[n.jsx("div",{className:"card-glow"}),S&&x.claimed&&n.jsx("div",{className:"completed-badge",children:"✓"}),n.jsxs("div",{className:"card-content",children:[n.jsx("div",{className:"achievement-icon",children:x.icon}),n.jsxs("div",{className:"achievement-details",children:[n.jsx("div",{className:"achievement-title",children:x.title}),n.jsx("div",{className:"achievement-subtitle",children:x.subtitle}),n.jsxs("div",{className:"progress-container",children:[n.jsx("div",{className:"progress-bar",children:n.jsx("div",{className:"progress-fill",style:{width:`${j}%`}})}),n.jsxs("div",{className:"progress-text",children:[n.jsxs("span",{children:[x.current,"/",x.target]}),n.jsxs("span",{className:"reward-badge",children:["🪙 ",x.reward]})]})]})]}),n.jsx("button",{onClick:()=>w(x.id,x.reward),disabled:!S||x.claimed,className:`claim-button ${x.claimed?"claimed":S?"can-claim":"in-progress"} ${r===x.id?"claiming":""}`,children:x.claimed?"✓":S?"CLAIM!":`${j}%`})]})]},x.id)})}),i&&n.jsx("div",{className:"celebration",children:"🎉"})]})}function hy(){const{player:e,updateDailyStreak:t}=Sn(),r=(e==null?void 0:e.currentStreak)||0,s=(e==null?void 0:e.bestStreak)||0,a=(e==null?void 0:e.totalDays)||0;e!=null&&e.coins;const o=je(),i=new Date,l=i.getDay(),c=()=>{const I=new Date(i);return I.setDate(i.getDate()-i.getDay()),I.toISOString().split("T")[0]},[u,m]=d.useState(null),[h,f]=d.useState(!1),[w,x]=d.useState(null),[j,S]=d.useState(null),[y,g]=d.useState(!1),v=d.useRef(null),N=d.useRef(null),[C]=et("/sounds/coin.mp3",{volume:.75}),[P]=et("/sounds/correct.mp3",{volume:.6}),[E,p]=d.useState(()=>{const I=localStorage.getItem("streaks_claimed")||"[]",D=JSON.parse(I),L=c(),T=D.filter(z=>z!==`week_${L}_day_0`);return localStorage.setItem("streaks_claimed",JSON.stringify(T)),T});d.useEffect(()=>{const I=()=>{window.scrollTo(0,0),document.documentElement.scrollTop=0,document.body.scrollTop=0;const L=document.querySelector("main");L&&(L.scrollTop=0)};I(),requestAnimationFrame(I);const D=setTimeout(I,100);return()=>clearTimeout(D)},[]),d.useEffect(()=>{g(!0),setTimeout(()=>g(!1),3e3)},[]);const b=[{label:"Mon",short:"M",dayIndex:1},{label:"Tue",short:"T",dayIndex:2},{label:"Wed",short:"W",dayIndex:3},{label:"Thu",short:"T",dayIndex:4},{label:"Fri",short:"F",dayIndex:5},{label:"Sat",short:"S",dayIndex:6},{label:"Sun",short:"S",dayIndex:0}],k=[{day:0,reward:"10",type:"coins",icon:"🎯",label:"Welcome Bonus"},{day:1,reward:"50",type:"coins",icon:"🪙",label:"50 Coins"},{day:2,reward:"100",type:"coins",icon:"🪙",label:"100 Coins"},{day:3,reward:"2x",type:"xp",icon:"⭐",label:"2x XP Boost"},{day:4,reward:"150",type:"coins",icon:"🪙",label:"150 Coins"},{day:5,reward:"Full",type:"energy",icon:"⚡",label:"Energy Refill"},{day:6,reward:"200",type:"coins",icon:"🪙",label:"200 Coins"},{day:7,reward:"Mystery",type:"mystery",icon:"🎁",label:"Mystery Box"}],_=I=>{const D=E.includes(`week_${c()}_day_${I}`);if(I===0)return{isCompleted:!0,isClaimed:D,canClaim:!D,isLocked:!1};const L=r>=I,T=L&&!D,z=r<I;return{isCompleted:L,isClaimed:D,canClaim:T,isLocked:z}},R=(I,D,L)=>{const T=_(D);if(T.isLocked){S({day:D,currentStreak:r}),setTimeout(()=>S(null),2e3);return}T.isClaimed||T.canClaim&&(m({...I,day:D}),f(!1),setTimeout(()=>{f(!0),P(),setTimeout(()=>{if(I.type==="coins"){const G=parseInt(I.reward);if(N.current&&v.current){const $=N.current.getBoundingClientRect();C(),x({startRect:$,count:10,amount:G})}}const z=`week_${c()}_day_${D}`,B=[...E,z];p(B),localStorage.setItem("streaks_claimed",JSON.stringify(B))},500),setTimeout(()=>{m(null),f(!1)},2500)},500))},F=(I,D)=>{if(b[D].dayIndex===l)return r>0?"today-completed":"today-pending";if(D<b.findIndex(T=>T.dayIndex===l)){const T=b.findIndex(z=>z.dayIndex===l)-D;return r>=T?"completed":"missed"}else return"future"},Q=[{days:3,emoji:"⚡",label:"Starter",achieved:r>=3},{days:7,emoji:"🔥",label:"Week Warrior",achieved:r>=7},{days:30,emoji:"💎",label:"Champion",achieved:r>=30},{days:100,emoji:"👑",label:"Legend",achieved:r>=100}],V=Q.find(I=>I.days>r)||Q[Q.length-1],K=Math.min(100,r/V.days*100),q=()=>{window.location.href="/play"},M=()=>{o(-1)};return n.jsxs("div",{className:"streaks-screen",children:[n.jsx("style",{jsx:!0,children:`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .streaks-screen {
        min-height: 100vh;
        background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
        padding: 32px 16px 16px 16px;  /* Increased top padding from 16px to 32px */
        font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif;
        color: white;
        position: relative;
        overflow-x: hidden;
        max-width: 100vw;
        }

        .header {
          position: relative;
          z-index: 10;
          margin-bottom: 24px;
        }

        .header-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
        }

        .back-button {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 16px;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 12px;
          color: white;
          font-size: 15px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s;
        }

        .back-button:hover {
          background: rgba(255, 255, 255, 0.15);
          transform: translateX(-2px);
        }

        .coin-pill {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 8px 16px;
          background: linear-gradient(135deg, rgba(255, 217, 61, 0.2), rgba(255, 165, 0, 0.2));
          border: 1px solid rgba(255, 217, 61, 0.3);
          border-radius: 20px;
          font-weight: 600;
          position: relative;
        }

        .coin-icon {
          font-size: 18px;
        }

        .coin-amount {
          font-size: 16px;
          color: #FFD93D;
        }

        .title-section {
          text-align: center;
          margin-bottom: 24px;
        }

        .main-title {
          font-size: 36px;
          font-weight: 800;
          margin-bottom: 6px;
          background: linear-gradient(135deg, #FFD93D, #FF6B6B);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .subtitle {
          font-size: 14px;
          color: rgba(255, 255, 255, 0.7);
        }

        .streak-hero {
          background: rgba(255, 255, 255, 0.08);
          border-radius: 20px;
          padding: 24px;
          margin-bottom: 20px;
          text-align: center;
          position: relative;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .fire-animation {
          font-size: 64px;
          margin-bottom: 12px;
          display: inline-block;
          animation: flame 2s ease-in-out infinite;
        }

        @keyframes flame {
          0%, 100% { 
            transform: scale(1) rotate(0deg);
            filter: brightness(1);
          }
          25% { 
            transform: scale(1.05) rotate(-3deg);
            filter: brightness(1.1);
          }
          50% { 
            transform: scale(1.1) rotate(3deg);
            filter: brightness(1.2);
          }
          75% { 
            transform: scale(1.05) rotate(-3deg);
            filter: brightness(1.1);
          }
        }

        .streak-number {
          font-size: 56px;
          font-weight: 900;
          line-height: 1;
          margin-bottom: 6px;
          background: linear-gradient(135deg, #FFD93D, #FFA500);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .streak-label {
          font-size: 20px;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.9);
          margin-bottom: 20px;
        }

        .stats-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
          margin-top: 20px;
        }

        .stat-card {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 14px;
          padding: 12px;
          text-align: center;
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        .stat-value {
          font-size: 24px;
          font-weight: 700;
          color: #4ECDC4;
          margin-bottom: 2px;
        }

        .stat-label {
          font-size: 11px;
          color: rgba(255, 255, 255, 0.6);
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .weekly-progress-card {
          background: linear-gradient(135deg, rgba(255, 107, 107, 0.15), rgba(255, 217, 61, 0.15));
          border-radius: 20px;
          padding: 20px;
          margin-bottom: 20px;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .weekly-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 16px;
        }

        .weekly-title {
          font-size: 16px;
          font-weight: 700;
          color: white;
        }

        .weekly-counter {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 4px 10px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 20px;
        }

        .weekly-counter-icon {
          font-size: 16px;
        }

        .weekly-counter-text {
          font-size: 14px;
          font-weight: 600;
        }

        .weekly-days {
          display: grid;
          grid-template-columns: repeat(7, 1fr);
          gap: 6px;
          margin-bottom: 20px;
        }

        .day-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
        }

        .day-circle {
          width: 42px;
          height: 42px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 14px;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
        }

        .day-circle.completed {
          background: linear-gradient(135deg, #10B981, #059669);
          color: white;
          box-shadow: 0 4px 12px rgba(16, 185, 129, 0.3);
        }

        .day-circle.today-completed {
          background: linear-gradient(135deg, #34D399, #10B981);
          color: white;
          box-shadow: 0 0 0 3px rgba(52, 211, 153, 0.3);
          animation: pulse 2s ease-in-out infinite;
        }

        .day-circle.today-pending {
          background: linear-gradient(135deg, #FBBF24, #F59E0B);
          color: white;
          box-shadow: 0 0 0 3px rgba(251, 191, 36, 0.3);
          animation: pulse 2s ease-in-out infinite;
        }

        .day-circle.pending {
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: rgba(255, 255, 255, 0.5);
        }

        .day-circle.future {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: rgba(255, 255, 255, 0.3);
        }
        .day-circle.missed {
            background: linear-gradient(135deg, #EF4444, #DC2626);
            color: white;
            opacity: 0.8;
            }

        .day-circle.missed::after {
            content: '✗';
            position: absolute;
            font-size: 18px;
            color: white;
            }

        .day-circle.completed::after,
        .day-circle.today-completed::after {
          content: '✓';
          position: absolute;
          font-size: 18px;
          color: white;
        }

        @keyframes pulse {
          0%, 100% {
            box-shadow: 0 0 0 3px rgba(52, 211, 153, 0.3);
          }
          50% {
            box-shadow: 0 0 0 6px rgba(52, 211, 153, 0.1);
          }
        }

        .day-label {
          font-size: 10px;
          color: rgba(255, 255, 255, 0.5);
          text-transform: uppercase;
        }

        .day-label.today {
          color: #34D399;
          font-weight: 600;
        }

        .rewards-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(95px, 1fr));
          gap: 8px;
        }

        .reward-item {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 12px;
          padding: 10px;
          text-align: center;
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s;
          cursor: pointer;
          position: relative;
          overflow: hidden;
        }

        .reward-item.completed {
          background: linear-gradient(135deg, rgba(16, 185, 129, 0.2), rgba(5, 150, 105, 0.2));
          border-color: rgba(16, 185, 129, 0.3);
        }

        .reward-item.can-claim {
          background: linear-gradient(135deg, rgba(255, 217, 61, 0.2), rgba(255, 165, 0, 0.2));
          border-color: rgba(255, 217, 61, 0.5);
          animation: glow 2s ease-in-out infinite;
        }

        @keyframes glow {
          0%, 100% {
            box-shadow: 0 0 10px rgba(255, 217, 61, 0.3);
          }
          50% {
            box-shadow: 0 0 20px rgba(255, 217, 61, 0.5);
          }
        }

        .reward-item.locked {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .reward-item.locked::before {
          content: '🔒';
          position: absolute;
          top: 5px;
          right: 5px;
          font-size: 12px;
        }

        .reward-day {
          font-size: 10px;
          color: rgba(255, 255, 255, 0.5);
          margin-bottom: 4px;
        }

        .reward-icon {
          font-size: 24px;
          margin-bottom: 4px;
        }

        .reward-text {
          font-size: 11px;
          color: rgba(255, 255, 255, 0.8);
          font-weight: 600;
        }

        .reward-modal {
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: 1000;
        }

        .gift-box {
          width: 200px;
          height: 200px;
          position: relative;
          animation: float 2s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        .gift-box-body {
          width: 100%;
          height: 150px;
          background: linear-gradient(135deg, #FFD700, #FFA500);
          border-radius: 20px;
          position: absolute;
          bottom: 0;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        }

        .gift-box-lid {
          width: 110%;
          height: 60px;
          background: linear-gradient(135deg, #FF6B6B, #FF1493);
          border-radius: 15px;
          position: absolute;
          top: 40px;
          left: -5%;
          transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
          transform-origin: bottom left;
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
        }

        .gift-box-lid.opening {
          transform: rotate(-45deg) translateY(-50px);
        }

        .gift-box-ribbon {
          position: absolute;
          width: 30px;
          height: 100%;
          background: linear-gradient(135deg, #9370DB, #4169E1);
          left: 50%;
          transform: translateX(-50%);
          border-radius: 5px;
        }

        .gift-box-ribbon-horizontal {
          position: absolute;
          width: 100%;
          height: 30px;
          background: linear-gradient(135deg, #9370DB, #4169E1);
          top: 50%;
          transform: translateY(-50%);
          border-radius: 5px;
        }

        .gift-box-bow {
          position: absolute;
          top: 30px;
          left: 50%;
          transform: translateX(-50%);
          font-size: 40px;
        }

        .gift-content {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          text-align: center;
          opacity: 0;
          transition: opacity 0.5s ease;
        }

        .gift-content.show {
          opacity: 1;
        }

        .gift-content-icon {
          font-size: 64px;
          margin-bottom: 16px;
          animation: bounce 1s ease-in-out infinite;
        }

        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .gift-content-title {
        font-size: 20px;
        font-weight: 700;
        margin-bottom: 4px;
        color: #1a1a2e;  /* Dark color for contrast */
        text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }

        .gift-content-desc {
        font-size: 14px;
        color: #16213e;  /* Dark color for contrast */
        font-weight: 600;
        }

        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.6);
          z-index: 999;
        }

        .locked-message {
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background: rgba(0, 0, 0, 0.9);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 12px;
          padding: 16px 24px;
          z-index: 1001;
          animation: messageFade 2s ease-out forwards;
        }

        @keyframes messageFade {
          0% {
            opacity: 0;
            transform: translate(-50%, -60%);
          }
          20% {
            opacity: 1;
            transform: translate(-50%, -50%);
          }
          80% {
            opacity: 1;
            transform: translate(-50%, -50%);
          }
          100% {
            opacity: 0;
            transform: translate(-50%, -40%);
          }
        }

        .locked-message-icon {
          font-size: 20px;
          margin-right: 8px;
          display: inline-block;
        }

        .locked-message-text {
          font-size: 14px;
          color: rgba(255, 255, 255, 0.9);
          display: inline-block;
        }

        .milestone-section {
          margin-bottom: 20px;
        }

        .milestone-header {
          font-size: 14px;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.8);
          margin-bottom: 12px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .milestone-progress {
          background: rgba(255, 255, 255, 0.08);
          border-radius: 16px;
          padding: 16px;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .milestone-info {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 10px;
        }

        .milestone-current {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .milestone-emoji {
          font-size: 24px;
        }

        .milestone-text {
          font-size: 14px;
          font-weight: 600;
        }

        .milestone-target {
          font-size: 12px;
          color: rgba(255, 255, 255, 0.6);
        }

        .progress-bar-container {
          width: 100%;
          height: 10px;
          background: rgba(0, 0, 0, 0.3);
          border-radius: 100px;
          overflow: hidden;
        }

        .progress-bar-fill {
          height: 100%;
          background: linear-gradient(90deg, #FFD93D, #FF6B6B);
          border-radius: 100px;
          transition: width 0.8s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 2px 8px rgba(255, 217, 61, 0.3);
        }

        .play-button {
          width: 100%;
          padding: 16px;
          background: linear-gradient(135deg, #10B981, #059669);
          color: white;
          border: none;
          border-radius: 16px;
          font-size: 16px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          text-transform: uppercase;
          letter-spacing: 0.5px;
          box-shadow: 0 6px 20px rgba(16, 185, 129, 0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          margin-bottom: 20px;
        }

        .play-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(16, 185, 129, 0.4);
        }

        .motivational-text {
          text-align: center;
          margin: 16px 0;
          padding: 12px;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 12px;
          font-size: 13px;
          color: rgba(255, 255, 255, 0.8);
          font-style: italic;
        }

        .celebration {
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-size: 120px;
          z-index: 1000;
          pointer-events: none;
          animation: celebrate 3s ease-out forwards;
        }

        @keyframes celebrate {
          0% {
            transform: translate(-50%, -50%) scale(0) rotate(0deg);
            opacity: 1;
          }
          50% {
            transform: translate(-50%, -50%) scale(1.2) rotate(180deg);
            opacity: 1;
          }
          100% {
            transform: translate(-50%, -50%) scale(0.8) rotate(360deg);
            opacity: 0;
          }
        }
      `}),w&&n.jsx(Xn,{startRect:w.startRect,targetRef:v,count:w.count,onDone:()=>{ie.addCoins(w.amount,`Streak Reward - Day ${w.day||""}`),x(null)}}),n.jsxs("div",{className:"header",children:[n.jsxs("div",{className:"header-top",children:[n.jsx("button",{className:"back-button",onClick:M,children:"← Back"}),n.jsxs("div",{className:"coin-pill",ref:v,id:"coin-pill",children:[n.jsx("span",{className:"coin-icon",children:"🪙"}),n.jsx("span",{className:"coin-amount",children:ie.getCoins()})]})]}),n.jsxs("div",{className:"title-section",children:[n.jsx("h1",{className:"main-title",children:"STREAKS"}),n.jsx("p",{className:"subtitle",children:"Keep the fire burning!"})]})]}),n.jsxs("div",{className:"streak-hero",children:[n.jsx("div",{className:"fire-animation",children:"🔥"}),n.jsx("div",{className:"streak-number",children:r}),n.jsx("div",{className:"streak-label",children:"DAY STREAK"}),n.jsxs("div",{className:"stats-row",children:[n.jsxs("div",{className:"stat-card",children:[n.jsx("div",{className:"stat-value",children:s}),n.jsx("div",{className:"stat-label",children:"Best Streak"})]}),n.jsxs("div",{className:"stat-card",children:[n.jsx("div",{className:"stat-value",children:a}),n.jsx("div",{className:"stat-label",children:"Total Days"})]})]})]}),n.jsxs("div",{className:"weekly-progress-card",children:[n.jsxs("div",{className:"weekly-header",children:[n.jsx("div",{className:"weekly-title",children:"This Week's Progress"}),n.jsxs("div",{className:"weekly-counter",children:[n.jsx("span",{className:"weekly-counter-icon",children:"🔥"}),n.jsxs("span",{className:"weekly-counter-text",children:[Math.min(r,7),"/7"]})]})]}),n.jsx("div",{className:"weekly-days",children:b.map((I,D)=>{const L=F(I.dayIndex,D),T=I.dayIndex===l;return n.jsxs("div",{className:"day-item",children:[n.jsx("div",{className:`day-circle ${L}`,children:L==="completed"||L==="today-completed"?"":I.short}),n.jsx("div",{className:`day-label ${T?"today":""}`,children:I.label})]},D)})}),n.jsx("div",{className:"milestone-header",children:"Daily Rewards"}),n.jsx("div",{className:"rewards-grid",children:k.map((I,D)=>{const L=_(I.day);return n.jsxs("div",{className:`reward-item ${L.isLocked?"locked":L.canClaim?"can-claim":L.isClaimed?"completed":""}`,onClick:T=>R(I,I.day),children:[n.jsxs("div",{className:"reward-day",children:["Day ",I.day]}),n.jsx("div",{className:"reward-icon",children:I.icon}),n.jsx("div",{className:"reward-text",children:I.label})]},D)})})]}),n.jsxs("div",{className:"milestone-section",children:[n.jsx("div",{className:"milestone-header",children:"Next Milestone"}),n.jsxs("div",{className:"milestone-progress",children:[n.jsxs("div",{className:"milestone-info",children:[n.jsxs("div",{className:"milestone-current",children:[n.jsx("span",{className:"milestone-emoji",children:V.emoji}),n.jsx("span",{className:"milestone-text",children:V.label})]}),n.jsxs("span",{className:"milestone-target",children:[r,"/",V.days," days"]})]}),n.jsx("div",{className:"progress-bar-container",children:n.jsx("div",{className:"progress-bar-fill",style:{width:`${K}%`}})})]})]}),n.jsx("div",{className:"motivational-text",children:r===0?"Start your journey! Claim your Day 0 bonus and complete a quiz!":`Day ${r} strong! Keep going to unlock more rewards!`}),n.jsxs("button",{className:"play-button",onClick:q,children:[n.jsx("span",{children:"Continue Streak"}),n.jsx("span",{children:"→"})]}),j&&n.jsxs("div",{className:"locked-message",children:[n.jsx("span",{className:"locked-message-icon",children:"🔒"}),n.jsx("span",{className:"locked-message-text",children:j.day===1&&j.currentStreak===0?"Complete your first quiz to unlock this reward!":`Reach Day ${j.day} streak to unlock this reward!`})]}),u&&n.jsxs(n.Fragment,{children:[n.jsx("div",{className:"modal-overlay"}),n.jsx("div",{className:"reward-modal",ref:N,children:n.jsxs("div",{className:"gift-box",children:[n.jsxs("div",{className:"gift-box-body",children:[n.jsx("div",{className:"gift-box-ribbon"}),n.jsx("div",{className:"gift-box-ribbon-horizontal"})]}),n.jsx("div",{className:`gift-box-lid ${h?"opening":""}`,children:n.jsx("div",{className:"gift-box-bow",children:"🎀"})}),n.jsxs("div",{className:`gift-content ${h?"show":""}`,children:[n.jsx("div",{className:"gift-content-icon",children:u.icon}),n.jsxs("div",{className:"gift-content-title",children:["Day ",u.day]}),n.jsx("div",{className:"gift-content-desc",children:u.label})]})]})})]}),y&&n.jsx("div",{className:"celebration",children:"🎉"})]})}const py=()=>{const e=new Date;return`${e.getFullYear()}-${e.getMonth()+1}-${e.getDate()}`},fl=()=>{const e=localStorage.getItem("questProgress");return e?JSON.parse(e):{}},Zd=(e,t)=>{const r=fl();r[e]=t,r.date=py(),localStorage.setItem("questProgress",JSON.stringify(r))};function xy(){const{player:e}=Sn(),t=je(),r=Je(),s=fl(),[a,o]=d.useState([{id:1,title:"Play 3 quizzes today",progress:s.dailyQuizzes||0,target:3,reward:60,claimed:s.dailyQuizzesClaimed||!1,icon:"🎮",color:"#FF6B6B",difficulty:"Easy",questType:"dailyQuizzes",route:"/quiz/play",routeParams:"?category=random&difficulty=random&from=quest"},{id:3,title:"Practice 15 questions",progress:s.practiceQuestions||0,target:15,reward:100,claimed:s.practiceQuestionsClaimed||!1,icon:"📚",color:"#FFD93D",difficulty:"Easy",questType:"practiceQuestions",route:"/practice/start",routeParams:"?questions=15&difficulty=easy&category=random&from=quest"},{id:4,title:"Win 5 in a row",progress:s.winStreak||0,target:5,reward:150,claimed:s.winStreakClaimed||!1,icon:"🔥",color:"#A8E6CF",difficulty:"Hard",questType:"winStreak",route:"/play",routeParams:"?mode=survival&from=quest"},{id:5,title:"Complete a speed run",progress:s.speedRun||0,target:1,reward:120,claimed:s.speedRunClaimed||!1,icon:"⚡",color:"#C7B8FF",difficulty:"Medium",questType:"speedRun",route:"/swipe/random-mix",routeParams:"?from=quest"}]),[i,l]=d.useState(ie.getCoins()),[c,u]=d.useState(null),[m,h]=d.useState(0),f=d.useRef(null),[w,x]=d.useState(null);d.useEffect(()=>{const N=()=>{const P=fl();o(E=>E.map(p=>{const b=p.questType;return P[b]!==void 0?{...p,progress:P[b]}:p}))};window.addEventListener("storage",N);const C=()=>N();return window.addEventListener("focus",C),()=>{window.removeEventListener("storage",N),window.removeEventListener("focus",C)}},[]),d.useEffect(()=>{const N=P=>{console.log("Quest progress update received:",P.detail),o(E=>E.map(p=>p.questType==="practiceQuestions"&&P.detail.practiceQuestions?{...p,progress:P.detail.practiceQuestions}:p))};window.addEventListener("questProgressUpdate",N);const C=setInterval(()=>{try{const P=localStorage.getItem("questProgress");if(P){const E=JSON.parse(P);o(p=>p.map(b=>b.questType==="practiceQuestions"&&E.practiceQuestions&&b.progress!==E.practiceQuestions?{...b,progress:E.practiceQuestions}:b))}}catch(P){console.error("Error checking progress:",P)}},1e3);return()=>{window.removeEventListener("questProgressUpdate",N),clearInterval(C)}},[]),d.useEffect(()=>{var N;if((N=r.state)!=null&&N.questCompleted){const{questType:C,increment:P}=r.state;o(E=>E.map(p=>{if(p.questType===C){const b=Math.min(p.progress+(P||1),p.target);return Zd(C,b),{...p,progress:b}}return p})),window.history.replaceState({},document.title)}},[r]),d.useEffect(()=>{const N=a.filter(C=>C.progress>=C.target).length;h(Math.round(N/a.length*100))},[a]),d.useEffect(()=>{l((e==null?void 0:e.coins)||0)},[e==null?void 0:e.coins]);const j=N=>{navigator.vibrate&&navigator.vibrate([20]),sessionStorage.setItem("activeQuest",JSON.stringify({id:N.id,type:N.questType,title:N.title,currentProgress:N.progress,target:N.target})),t(N.route+N.routeParams)},S=()=>{sessionStorage.getItem("questsFromHome")==="true"?(sessionStorage.removeItem("questsFromHome"),t("/")):t("/profile")},y=N=>{navigator.vibrate&&navigator.vibrate([20,10,20]);try{const C=new Audio("/sounds/coin.mp3");C.volume=.75,C.play()}catch{console.log("Sound not available")}u(N.id),x({startRect:{left:window.innerWidth/2-50,top:window.innerHeight/2,width:100,height:100},count:Math.min(N.reward/10,10),amount:N.reward,questTitle:N.title}),setTimeout(()=>{o(C=>C.map(P=>P.id===N.id?(Zd(P.questType+"Claimed",!0),{...P,claimed:!0}):P)),u(null)},600)},g=N=>{switch(N){case"Easy":return"#10B981";case"Medium":return"#F59E0B";case"Hard":return"#EF4444";default:return"#6B7280"}},v=()=>{const N=new Date,C=new Date(N);C.setDate(C.getDate()+1),C.setHours(5,0,0,0);const P=C-N,E=Math.floor(P/(1e3*60*60)),p=Math.floor(P%(1e3*60*60)/(1e3*60));return`${E}h ${p}m`};return n.jsxs("div",{className:"quests-screen",children:[w&&n.jsx(Xn,{startRect:w.startRect,targetRef:f,count:w.count,onDone:()=>{l(N=>N+w.amount),ie.addCoins(w.amount,`Quest Reward: ${w.questTitle||"Completed"}`),x(null)}}),n.jsx("style",{jsx:!0,children:`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .quests-screen {
          min-height: 100vh;
          background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
          padding: 20px;
          font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif;
          color: white;
          position: relative;
          overflow-x: hidden;
        }

        .animated-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }

        .floating-icon {
          position: absolute;
          font-size: 40px;
          opacity: 0.03;
          animation: float 20s infinite ease-in-out;
        }

        .floating-icon:nth-child(1) {
          top: 10%;
          left: 10%;
          animation-delay: 0s;
        }

        .floating-icon:nth-child(2) {
          top: 20%;
          right: 10%;
          animation-delay: 5s;
        }

        .floating-icon:nth-child(3) {
          bottom: 30%;
          left: 15%;
          animation-delay: 10s;
        }

        .floating-icon:nth-child(4) {
          bottom: 20%;
          right: 20%;
          animation-delay: 15s;
        }

        @keyframes float {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(30px, -30px) rotate(120deg); }
          66% { transform: translate(-20px, 20px) rotate(240deg); }
        }

        .header {
          position: relative;
          z-index: 10;
          margin-bottom: 24px;
          animation: slideDown 0.5s ease-out;
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .back-button {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 16px;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 12px;
          color: white;
          font-size: 15px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s;
          margin-top: 10px;
          margin-bottom: 24px;
        }

        .back-button:hover {
          background: rgba(255, 255, 255, 0.15);
          transform: translateX(-2px);
        }

        .coins-display {
          position: absolute;
          top: 20px;
          right: 20px;
          background: linear-gradient(135deg, #FFD93D, #FFA500);
          padding: 8px 16px;
          border-radius: 20px;
          display: flex;
          align-items: center;
          gap: 6px;
          font-weight: 700;
          font-size: 18px;
          color: #1a1a1a;
          box-shadow: 0 4px 12px rgba(255, 217, 61, 0.3);
        }

        .title-section {
          text-align: center;
          margin-bottom: 24px;
        }

        .main-title {
          font-size: 42px;
          font-weight: 800;
          margin-bottom: 8px;
          background: linear-gradient(135deg, #FFD93D, #FF6B6B, #4ECDC4);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .subtitle {
          font-size: 16px;
          color: rgba(255, 255, 255, 0.7);
        }

        .daily-progress-card {
          background: rgba(255, 255, 255, 0.08);
          border-radius: 20px;
          padding: 20px;
          margin-bottom: 24px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          animation: fadeInScale 0.6s ease-out 0.2s both;
        }

        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .progress-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 12px;
        }

        .progress-label {
          font-size: 14px;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.8);
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .progress-value {
          font-size: 24px;
          font-weight: 700;
          background: linear-gradient(135deg, #10B981, #059669);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .progress-bar-container {
          width: 100%;
          height: 12px;
          background: rgba(0, 0, 0, 0.3);
          border-radius: 100px;
          overflow: hidden;
        }

        .progress-bar-fill {
          height: 100%;
          background: linear-gradient(90deg, #10B981, #059669);
          border-radius: 100px;
          transition: width 0.8s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 2px 8px rgba(16, 185, 129, 0.3);
        }

        .quests-list {
          display: flex;
          flex-direction: column;
          gap: 14px;
          margin-bottom: 24px;
        }

        .quest-card {
          background: rgba(255, 255, 255, 0.08);
          border-radius: 20px;
          padding: 18px;
          position: relative;
          overflow: hidden;
          border: 1.5px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          animation: slideUp 0.5s ease-out both;
        }

        .quest-card:nth-child(1) { animation-delay: 0.1s; }
        .quest-card:nth-child(2) { animation-delay: 0.2s; }
        .quest-card:nth-child(3) { animation-delay: 0.3s; }
        .quest-card:nth-child(4) { animation-delay: 0.4s; }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .quest-card:hover {
          transform: translateY(-2px);
          border-color: var(--quest-color);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
        }

        .quest-card.completed {
          background: rgba(255, 255, 255, 0.1);
          border-color: rgba(255, 217, 61, 0.2);
        }

        .quest-accent {
          position: absolute;
          top: 0;
          left: 0;
          width: 4px;
          height: 100%;
          background: var(--quest-color);
          opacity: 0.8;
        }

        .quest-content {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .quest-icon-container {
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, var(--quest-color), var(--quest-color-dark));
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 28px;
          flex-shrink: 0;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
          position: relative;
        }

        .quest-icon-container.animating {
          animation: bounce 0.6s ease;
        }

        @keyframes bounce {
          0%, 100% { transform: scale(1); }
          30% { transform: scale(0.9); }
          60% { transform: scale(1.1); }
        }

        .quest-details {
          flex: 1;
          min-width: 0;
        }

        .quest-header {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 4px;
        }

        .quest-title {
          font-size: 15px;
          font-weight: 600;
          color: white;
        }

        .difficulty-badge {
          padding: 2px 8px;
          border-radius: 100px;
          font-size: 10px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .progress-info {
          margin-top: 8px;
        }

        .mini-progress-bar {
          width: 100%;
          height: 6px;
          background: rgba(0, 0, 0, 0.3);
          border-radius: 100px;
          overflow: hidden;
          margin-bottom: 6px;
        }

        .mini-progress-fill {
          height: 100%;
          background: linear-gradient(90deg, var(--quest-color), var(--quest-color-dark));
          border-radius: 100px;
          transition: width 0.8s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 1px 4px var(--quest-color);
        }

        .progress-text {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 12px;
        }

        .progress-numbers {
          color: rgba(255, 255, 255, 0.7);
        }

        .reward-display {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          padding: 3px 8px;
          background: rgba(255, 217, 61, 0.15);
          border-radius: 100px;
          color: #FFD93D;
          font-weight: 600;
        }

        .action-button {
          padding: 10px 18px;
          border-radius: 14px;
          font-size: 14px;
          font-weight: 700;
          border: none;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          text-transform: uppercase;
          letter-spacing: 0.5px;
          min-width: 90px;
        }

        .action-button.can-claim {
          background: linear-gradient(135deg, #10B981, #059669);
          color: white;
          box-shadow: 0 4px 12px rgba(16, 185, 129, 0.3);
        }

        .action-button.can-claim:hover {
          transform: scale(1.05);
          box-shadow: 0 6px 16px rgba(16, 185, 129, 0.4);
        }

        .action-button.claimed {
          background: rgba(255, 255, 255, 0.1);
          color: rgba(255, 255, 255, 0.4);
          cursor: not-allowed;
        }

        .action-button.in-progress {
          background: linear-gradient(135deg, var(--quest-color), var(--quest-color-dark));
          color: white;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        }

        .action-button.in-progress:hover {
          transform: scale(1.02);
        }

        .timer-card {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 16px;
          padding: 16px;
          text-align: center;
          border: 1px solid rgba(255, 255, 255, 0.08);
          animation: slideUp 0.5s ease-out 0.6s both;
        }

        .timer-icon {
          font-size: 32px;
          margin-bottom: 8px;
        }

        .timer-label {
          font-size: 12px;
          color: rgba(255, 255, 255, 0.6);
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 4px;
        }

        .timer-value {
          font-size: 20px;
          font-weight: 700;
          color: #FFD93D;
        }

        .reward-animation {
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-size: 80px;
          z-index: 1000;
          pointer-events: none;
          animation: coinCollect 1s ease-out forwards;
        }

        @keyframes coinCollect {
          0% {
            transform: translate(-50%, -50%) scale(0) rotate(0deg);
            opacity: 1;
          }
          50% {
            transform: translate(-50%, -50%) scale(1.5) rotate(180deg);
            opacity: 1;
          }
          100% {
            transform: translate(50vw, -50vh) scale(0.5) rotate(360deg);
            opacity: 0;
          }
        }

        .completed-checkmark {
          position: absolute;
          top: 12px;
          right: 12px;
          width: 24px;
          height: 24px;
          background: linear-gradient(135deg, #10B981, #059669);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          color: white;
          font-weight: bold;
          box-shadow: 0 2px 8px rgba(16, 185, 129, 0.3);
        }
      `}),n.jsxs("div",{className:"animated-bg",children:[n.jsx("div",{className:"floating-icon",children:"🎮"}),n.jsx("div",{className:"floating-icon",children:"🎯"}),n.jsx("div",{className:"floating-icon",children:"🏆"}),n.jsx("div",{className:"floating-icon",children:"⭐"})]}),n.jsxs("div",{className:"header",children:[n.jsx("button",{className:"back-button",onClick:S,children:"← Back"}),n.jsxs("div",{className:"coins-display",ref:f,children:["🪙 ",i]}),n.jsxs("div",{className:"title-section",children:[n.jsx("h1",{className:"main-title",children:"Daily Quests"}),n.jsx("p",{className:"subtitle",children:"Complete challenges, earn rewards!"})]})]}),n.jsxs("div",{className:"daily-progress-card",children:[n.jsxs("div",{className:"progress-header",children:[n.jsx("span",{className:"progress-label",children:"Today's Progress"}),n.jsxs("span",{className:"progress-value",children:[m,"%"]})]}),n.jsx("div",{className:"progress-bar-container",children:n.jsx("div",{className:"progress-bar-fill",style:{width:`${m}%`}})})]}),n.jsx("div",{className:"quests-list",children:a.map(N=>{const C=Math.min(100,Math.round(N.progress/N.target*100)),P=C===100,E=N.color+"CC";return n.jsxs("div",{className:`quest-card ${P?"completed":""}`,style:{"--quest-color":N.color,"--quest-color-dark":E},children:[n.jsx("div",{className:"quest-accent"}),P&&N.claimed&&n.jsx("div",{className:"completed-checkmark",children:"✓"}),n.jsxs("div",{className:"quest-content",children:[n.jsx("div",{className:`quest-icon-container ${c===N.id?"animating":""}`,children:N.icon}),n.jsxs("div",{className:"quest-details",children:[n.jsxs("div",{className:"quest-header",children:[n.jsx("span",{className:"quest-title",children:N.title}),n.jsx("span",{className:"difficulty-badge",style:{background:`${g(N.difficulty)}20`,color:g(N.difficulty)},children:N.difficulty})]}),n.jsxs("div",{className:"progress-info",children:[n.jsx("div",{className:"mini-progress-bar",children:n.jsx("div",{className:"mini-progress-fill",style:{width:`${C}%`}})}),n.jsxs("div",{className:"progress-text",children:[n.jsxs("span",{className:"progress-numbers",children:[N.progress,"/",N.target]}),n.jsxs("span",{className:"reward-display",children:["🪙 ",N.reward]})]})]})]}),n.jsx("button",{onClick:()=>{P&&!N.claimed?y(N):P||j(N)},disabled:N.claimed,className:`action-button ${N.claimed?"claimed":P?"can-claim":"in-progress"}`,style:!P&&!N.claimed?{"--quest-color":N.color,"--quest-color-dark":E}:{},children:N.claimed?"✓":P?"Claim":"Do it"})]})]},N.id)})}),n.jsxs("div",{className:"timer-card",children:[n.jsx("div",{className:"timer-icon",children:"⏰"}),n.jsx("div",{className:"timer-label",children:"New Quests In"}),n.jsx("div",{className:"timer-value",children:v()})]}),c&&n.jsx("div",{className:"reward-animation",children:"🪙"})]})}function yc({title:e,subtitle:t,children:r}){const s=je();return n.jsxs("div",{className:"min-h-full bg-black text-white px-4 pt-12",children:[n.jsxs("div",{className:"flex items-center justify-between mb-4",children:[n.jsx("button",{onClick:()=>s(-1),className:"px-3 py-1.5 rounded-xl border border-white/10 bg-white/5 text-sm",children:"← Back"}),n.jsxs("div",{className:"text-center",children:[n.jsx("div",{className:"text-base font-semibold leading-tight",children:e}),t&&n.jsx("div",{className:"text-xs text-white/60 leading-tight",children:t})]}),n.jsx("div",{className:"w-[68px]"})]}),r]})}function gy(){const e=je(),[t,r]=d.useState(!0),[s,a]=d.useState(!0),[o,i]=d.useState(!0),[l,c]=d.useState(!1),[u,m]=d.useState("");d.useEffect(()=>{const f=st.getCurrentUser();f&&f.phone&&m(f.phone)},[]);const h=()=>{const w=JSON.parse(localStorage.getItem("currentUser")||"{}").phone;localStorage.removeItem("currentUser"),localStorage.removeItem("qp_player"),localStorage.removeItem("rememberCredentials"),sessionStorage.clear(),w?e("/auth/signin",{replace:!0,state:{phone:w}}):e("/auth",{replace:!0})};return n.jsxs(n.Fragment,{children:[n.jsx(yc,{title:"Settings",subtitle:"Make it yours",children:n.jsx("div",{className:"flex flex-col justify-center min-h-[calc(100vh-200px)]",children:n.jsxs("div",{className:"space-y-4",children:[n.jsxs("div",{className:"rounded-3xl border border-white/10 bg-gradient-to-br from-purple-900/20 to-indigo-900/20 backdrop-blur-sm p-2",children:[n.jsx("div",{className:"px-4 pt-3 pb-1",children:n.jsx("h3",{className:"text-xs font-semibold text-white/50 uppercase tracking-wider",children:"Preferences"})}),n.jsxs("div",{className:"divide-y divide-white/10",children:[n.jsx(br,{icon:"🔊",label:"Sound",subtitle:"Game sounds & effects",right:n.jsx(pi,{on:t,set:r})}),n.jsx(br,{icon:"📳",label:"Haptics",subtitle:"Vibration feedback",right:n.jsx(pi,{on:s,set:a})}),n.jsx(br,{icon:"🔔",label:"Notifications",subtitle:"Daily reminders",right:n.jsx(pi,{on:o,set:i})})]})]}),n.jsxs("div",{className:"rounded-3xl border border-white/10 bg-gradient-to-br from-blue-900/20 to-purple-900/20 backdrop-blur-sm p-2",children:[n.jsx("div",{className:"px-4 pt-3 pb-1",children:n.jsx("h3",{className:"text-xs font-semibold text-white/50 uppercase tracking-wider",children:"Account"})}),n.jsxs("div",{className:"divide-y divide-white/10",children:[n.jsx(br,{icon:"📱",label:"Phone Number",subtitle:u||"Not available",right:n.jsx("span",{className:"text-white/40 text-sm",children:"🔒"})}),n.jsx(br,{icon:"✏️",label:"Edit Profile",subtitle:"Update your details",right:n.jsx("span",{className:"text-white/40 text-lg",children:"→"}),onClick:()=>e("/profile/edit")}),n.jsx(br,{icon:"🔒",label:"Privacy Policy",subtitle:"Your data is safe",right:n.jsx("span",{className:"text-white/40 text-lg",children:"→"}),onClick:()=>e("/profile/privacy")})]})]}),n.jsxs("button",{className:`w-full rounded-3xl border border-red-500/30 bg-gradient-to-r from-red-900/30 to-pink-900/30 
                       py-4 text-red-300 font-semibold backdrop-blur-sm
                       transition-all duration-200 hover:from-red-900/40 hover:to-pink-900/40 
                       active:scale-[0.98] flex items-center justify-center gap-2`,onClick:()=>c(!0),children:[n.jsx("span",{children:"🚪"}),n.jsx("span",{children:"Sign Out"})]})]})})}),l&&n.jsx("div",{className:"fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-6 z-50",children:n.jsxs("div",{className:"bg-gradient-to-br from-gray-900 to-purple-900 rounded-3xl p-6 w-full max-w-sm border border-white/20 shadow-2xl",children:[n.jsxs("div",{className:"text-center mb-6",children:[n.jsx("div",{className:"text-5xl mb-4 animate-bounce",children:"👋"}),n.jsx("h3",{className:"text-xl font-bold mb-2 text-white",children:"Leaving Already?"}),n.jsx("p",{className:"text-white/60 text-sm",children:"You'll need to sign in again to continue your quiz journey"})]}),n.jsxs("div",{className:"flex gap-3",children:[n.jsx("button",{onClick:()=>c(!1),className:`flex-1 py-3 rounded-2xl bg-white/10 hover:bg-white/20 
                         transition-all duration-200 font-semibold text-white`,children:"Stay"}),n.jsx("button",{onClick:h,className:`flex-1 py-3 rounded-2xl bg-gradient-to-r from-red-500 to-pink-500 
                         hover:from-red-600 hover:to-pink-600 transition-all duration-200 
                         font-semibold text-white shadow-lg`,children:"Sign Out"})]})]})})]})}function br({icon:e,label:t,subtitle:r,right:s,onClick:a}){return n.jsxs("button",{type:"button",onClick:a,className:`w-full flex items-center justify-between px-4 py-4 text-left
                 hover:bg-white/5 first:rounded-t-2xl last:rounded-b-2xl transition-all duration-200`,children:[n.jsxs("div",{className:"flex items-center gap-3",children:[e&&n.jsx("span",{className:"text-xl",children:e}),n.jsxs("div",{children:[n.jsx("div",{className:"text-sm font-semibold text-white",children:t}),r&&n.jsx("div",{className:"text-xs text-white/50 mt-0.5",children:r})]})]}),s]})}function pi({on:e,set:t}){return n.jsx("span",{onClick:r=>{r.stopPropagation(),t(s=>!s),navigator.vibrate&&navigator.vibrate(10)},className:["inline-flex w-12 h-7 items-center rounded-full transition-all duration-300 px-1 shadow-inner",e?"bg-gradient-to-r from-green-400 to-emerald-500 justify-end":"bg-gray-600 justify-start"].join(" "),role:"switch","aria-checked":e,children:n.jsx("span",{className:["w-5 h-5 rounded-full bg-white shadow-md transition-transform duration-300",e?"scale-110":"scale-100"].join(" ")})})}/*! Capacitor: https://capacitorjs.com/ - MIT License */var Wr;(function(e){e.Unimplemented="UNIMPLEMENTED",e.Unavailable="UNAVAILABLE"})(Wr||(Wr={}));class xi extends Error{constructor(t,r,s){super(t),this.message=t,this.code=r,this.data=s}}const vy=e=>{var t,r;return e!=null&&e.androidBridge?"android":!((r=(t=e==null?void 0:e.webkit)===null||t===void 0?void 0:t.messageHandlers)===null||r===void 0)&&r.bridge?"ios":"web"},yy=e=>{const t=e.CapacitorCustomPlatform||null,r=e.Capacitor||{},s=r.Plugins=r.Plugins||{},a=()=>t!==null?t.name:vy(e),o=()=>a()!=="web",i=h=>{const f=u.get(h);return!!(f!=null&&f.platforms.has(a())||l(h))},l=h=>{var f;return(f=r.PluginHeaders)===null||f===void 0?void 0:f.find(w=>w.name===h)},c=h=>e.console.error(h),u=new Map,m=(h,f={})=>{const w=u.get(h);if(w)return console.warn(`Capacitor plugin "${h}" already registered. Cannot register plugins twice.`),w.proxy;const x=a(),j=l(h);let S;const y=async()=>(!S&&x in f?S=typeof f[x]=="function"?S=await f[x]():S=f[x]:t!==null&&!S&&"web"in f&&(S=typeof f.web=="function"?S=await f.web():S=f.web),S),g=(p,b)=>{var k,_;if(j){const R=j==null?void 0:j.methods.find(F=>b===F.name);if(R)return R.rtype==="promise"?F=>r.nativePromise(h,b.toString(),F):(F,Q)=>r.nativeCallback(h,b.toString(),F,Q);if(p)return(k=p[b])===null||k===void 0?void 0:k.bind(p)}else{if(p)return(_=p[b])===null||_===void 0?void 0:_.bind(p);throw new xi(`"${h}" plugin is not implemented on ${x}`,Wr.Unimplemented)}},v=p=>{let b;const k=(..._)=>{const R=y().then(F=>{const Q=g(F,p);if(Q){const V=Q(..._);return b=V==null?void 0:V.remove,V}else throw new xi(`"${h}.${p}()" is not implemented on ${x}`,Wr.Unimplemented)});return p==="addListener"&&(R.remove=async()=>b()),R};return k.toString=()=>`${p.toString()}() { [capacitor code] }`,Object.defineProperty(k,"name",{value:p,writable:!1,configurable:!1}),k},N=v("addListener"),C=v("removeListener"),P=(p,b)=>{const k=N({eventName:p},b),_=async()=>{const F=await k;C({eventName:p,callbackId:F},b)},R=new Promise(F=>k.then(()=>F({remove:_})));return R.remove=async()=>{console.warn("Using addListener() without 'await' is deprecated."),await _()},R},E=new Proxy({},{get(p,b){switch(b){case"$$typeof":return;case"toJSON":return()=>({});case"addListener":return j?P:N;case"removeListener":return C;default:return v(b)}}});return s[h]=E,u.set(h,{name:h,proxy:E,platforms:new Set([...Object.keys(f),...j?[x]:[]])}),E};return r.convertFileSrc||(r.convertFileSrc=h=>h),r.getPlatform=a,r.handleError=c,r.isNativePlatform=o,r.isPluginAvailable=i,r.registerPlugin=m,r.Exception=xi,r.DEBUG=!!r.DEBUG,r.isLoggingEnabled=!!r.isLoggingEnabled,r},by=e=>e.Capacitor=yy(e),hl=by(typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}),bc=hl.registerPlugin;class Um{constructor(){this.listeners={},this.retainedEventArguments={},this.windowListeners={}}addListener(t,r){let s=!1;this.listeners[t]||(this.listeners[t]=[],s=!0),this.listeners[t].push(r);const o=this.windowListeners[t];o&&!o.registered&&this.addWindowListener(o),s&&this.sendRetainedArgumentsForEvent(t);const i=async()=>this.removeListener(t,r);return Promise.resolve({remove:i})}async removeAllListeners(){this.listeners={};for(const t in this.windowListeners)this.removeWindowListener(this.windowListeners[t]);this.windowListeners={}}notifyListeners(t,r,s){const a=this.listeners[t];if(!a){if(s){let o=this.retainedEventArguments[t];o||(o=[]),o.push(r),this.retainedEventArguments[t]=o}return}a.forEach(o=>o(r))}hasListeners(t){var r;return!!(!((r=this.listeners[t])===null||r===void 0)&&r.length)}registerWindowListener(t,r){this.windowListeners[r]={registered:!1,windowEventName:t,pluginEventName:r,handler:s=>{this.notifyListeners(r,s)}}}unimplemented(t="not implemented"){return new hl.Exception(t,Wr.Unimplemented)}unavailable(t="not available"){return new hl.Exception(t,Wr.Unavailable)}async removeListener(t,r){const s=this.listeners[t];if(!s)return;const a=s.indexOf(r);this.listeners[t].splice(a,1),this.listeners[t].length||this.removeWindowListener(this.windowListeners[t])}addWindowListener(t){window.addEventListener(t.windowEventName,t.handler),t.registered=!0}removeWindowListener(t){t&&(window.removeEventListener(t.windowEventName,t.handler),t.registered=!1)}sendRetainedArgumentsForEvent(t){const r=this.retainedEventArguments[t];r&&(delete this.retainedEventArguments[t],r.forEach(s=>{this.notifyListeners(t,s)}))}}const eu=e=>encodeURIComponent(e).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape),tu=e=>e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent);class wy extends Um{async getCookies(){const t=document.cookie,r={};return t.split(";").forEach(s=>{if(s.length<=0)return;let[a,o]=s.replace(/=/,"CAP_COOKIE").split("CAP_COOKIE");a=tu(a).trim(),o=tu(o).trim(),r[a]=o}),r}async setCookie(t){try{const r=eu(t.key),s=eu(t.value),a=`; expires=${(t.expires||"").replace("expires=","")}`,o=(t.path||"/").replace("path=",""),i=t.url!=null&&t.url.length>0?`domain=${t.url}`:"";document.cookie=`${r}=${s||""}${a}; path=${o}; ${i};`}catch(r){return Promise.reject(r)}}async deleteCookie(t){try{document.cookie=`${t.key}=; Max-Age=0`}catch(r){return Promise.reject(r)}}async clearCookies(){try{const t=document.cookie.split(";")||[];for(const r of t)document.cookie=r.replace(/^ +/,"").replace(/=.*/,`=;expires=${new Date().toUTCString()};path=/`)}catch(t){return Promise.reject(t)}}async clearAllCookies(){try{await this.clearCookies()}catch(t){return Promise.reject(t)}}}bc("CapacitorCookies",{web:()=>new wy});const jy=async e=>new Promise((t,r)=>{const s=new FileReader;s.onload=()=>{const a=s.result;t(a.indexOf(",")>=0?a.split(",")[1]:a)},s.onerror=a=>r(a),s.readAsDataURL(e)}),Ny=(e={})=>{const t=Object.keys(e);return Object.keys(e).map(a=>a.toLocaleLowerCase()).reduce((a,o,i)=>(a[o]=e[t[i]],a),{})},ky=(e,t=!0)=>e?Object.entries(e).reduce((s,a)=>{const[o,i]=a;let l,c;return Array.isArray(i)?(c="",i.forEach(u=>{l=t?encodeURIComponent(u):u,c+=`${o}=${l}&`}),c.slice(0,-1)):(l=t?encodeURIComponent(i):i,c=`${o}=${l}`),`${s}&${c}`},"").substr(1):null,Sy=(e,t={})=>{const r=Object.assign({method:e.method||"GET",headers:e.headers},t),a=Ny(e.headers)["content-type"]||"";if(typeof e.data=="string")r.body=e.data;else if(a.includes("application/x-www-form-urlencoded")){const o=new URLSearchParams;for(const[i,l]of Object.entries(e.data||{}))o.set(i,l);r.body=o.toString()}else if(a.includes("multipart/form-data")||e.data instanceof FormData){const o=new FormData;if(e.data instanceof FormData)e.data.forEach((l,c)=>{o.append(c,l)});else for(const l of Object.keys(e.data))o.append(l,e.data[l]);r.body=o;const i=new Headers(r.headers);i.delete("content-type"),r.headers=i}else(a.includes("application/json")||typeof e.data=="object")&&(r.body=JSON.stringify(e.data));return r};class Cy extends Um{async request(t){const r=Sy(t,t.webFetchExtra),s=ky(t.params,t.shouldEncodeUrlParams),a=s?`${t.url}?${s}`:t.url,o=await fetch(a,r),i=o.headers.get("content-type")||"";let{responseType:l="text"}=o.ok?t:{};i.includes("application/json")&&(l="json");let c,u;switch(l){case"arraybuffer":case"blob":u=await o.blob(),c=await jy(u);break;case"json":c=await o.json();break;case"document":case"text":default:c=await o.text()}const m={};return o.headers.forEach((h,f)=>{m[f]=h}),{data:c,headers:m,status:o.status,url:o.url}}async get(t){return this.request(Object.assign(Object.assign({},t),{method:"GET"}))}async post(t){return this.request(Object.assign(Object.assign({},t),{method:"POST"}))}async put(t){return this.request(Object.assign(Object.assign({},t),{method:"PUT"}))}async patch(t){return this.request(Object.assign(Object.assign({},t),{method:"PATCH"}))}async delete(t){return this.request(Object.assign(Object.assign({},t),{method:"DELETE"}))}}bc("CapacitorHttp",{web:()=>new Cy});const nu=bc("App",{web:()=>cc(()=>import("./web-a1ec1b03.js"),[]).then(e=>new e.AppWeb)});function Ey(){const e=je(),[t,r]=d.useState(!1),[s,a]=d.useState(!1),[o,i]=d.useState(!1),[l,c]=d.useState({name:"",phone:"",gender:"",ageGroup:"",city:"",email:"",state:"",country:""}),[u,m]=d.useState({name:"",phone:"",gender:"",ageGroup:"",city:"",email:"",state:"",country:""});d.useEffect(()=>{const j=JSON.parse(localStorage.getItem("currentUser")||"{}");if(!j.phone){const N=JSON.parse(localStorage.getItem("users")||"{}"),C=Object.keys(N).find(P=>N[P].username===j.username);if(C)j.phone=C,localStorage.setItem("currentUser",JSON.stringify(j));else{e("/profile");return}}const S=st.getUserData(j.phone);S.password;const y=JSON.parse(localStorage.getItem(`user_profile_${j.phone}`)||"{}"),g=N=>N?N.charAt(0).toUpperCase()+N.slice(1).toLowerCase():"",v={name:y.name||j.username||S.username||"",phone:j.phone||"",gender:g(y.gender||j.gender||S.gender||""),ageGroup:y.ageGroup||j.ageGroup||S.ageGroup||"",city:y.city||"",email:y.email||"",state:y.state||"",country:y.country||""};c(v),m(v)},[e]),d.useEffect(()=>{if(t){const j=JSON.stringify(l)!==JSON.stringify(u);i(j)}},[u,l,t]);const h=()=>{r(!0),m({...l}),i(!1)},f=()=>{r(!1),m({...l}),i(!1)},w=()=>{const j=JSON.parse(localStorage.getItem("currentUser")||"{}");if(!j.phone)return;st.updateUserProfile(j.phone,u)&&(c({...u}),r(!1),i(!1),a(!0),setTimeout(()=>a(!1),3e3))},x=(j,S)=>{m(y=>({...y,[j]:S}))};return n.jsxs(yc,{title:"Edit Profile",subtitle:"Update your information",children:[s&&n.jsx("div",{className:"fixed inset-0 flex items-center justify-center z-50 pointer-events-none",children:n.jsx("div",{className:"bg-green-500/20 border border-green-500/50 rounded-2xl px-8 py-4 backdrop-blur-sm animate-bounce",children:n.jsxs("div",{className:"flex items-center gap-2 text-green-400 font-semibold text-lg",children:[n.jsx("span",{children:"Profile updated"}),n.jsx("span",{className:"text-2xl",children:"✓"})]})})}),n.jsx("div",{className:"flex flex-col justify-center min-h-[calc(100vh-200px)]",children:n.jsxs("div",{className:"space-y-4",children:[n.jsxs("div",{className:"rounded-3xl border border-white/10 bg-gradient-to-br from-purple-900/20 to-indigo-900/20 backdrop-blur-sm p-4",children:[n.jsx("h3",{className:"text-xs font-semibold text-white/50 uppercase tracking-wider mb-4",children:"Basic Information"}),n.jsxs("div",{className:"space-y-3",children:[n.jsx(Pn,{label:"Name",value:t?u.name:l.name,onChange:j=>x("name",j),placeholder:"Your full name",disabled:!t}),n.jsx(Pn,{label:"Phone",value:l.phone,disabled:!0,icon:"🔒",helperText:"Cannot be changed"}),n.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[t?n.jsxs("div",{children:[n.jsx("label",{className:"text-xs text-white/60 mb-1 block",children:"Gender"}),n.jsxs("select",{value:u.gender||"",onChange:j=>x("gender",j.target.value),className:`w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 
                                text-white transition-all duration-200 hover:bg-white/10 
                                focus:bg-white/10 focus:border-white/30 focus:outline-none`,children:[n.jsx("option",{value:"",children:"Not set"}),n.jsx("option",{value:"Male",children:"Male"}),n.jsx("option",{value:"Female",children:"Female"}),n.jsx("option",{value:"Other",children:"Other"})]})]}):n.jsx(Pn,{label:"Gender",value:l.gender||"Not set",disabled:!0}),t?n.jsxs("div",{children:[n.jsx("label",{className:"text-xs text-white/60 mb-1 block",children:"Age Group"}),n.jsxs("select",{value:u.ageGroup||"",onChange:j=>x("ageGroup",j.target.value),className:`w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 
                                text-white transition-all duration-200 hover:bg-white/10 
                                focus:bg-white/10 focus:border-white/30 focus:outline-none`,children:[n.jsx("option",{value:"",children:"Not set"}),n.jsx("option",{value:"under-5",children:"Under 5 yrs"}),n.jsx("option",{value:"5-10",children:"5-10 yrs"}),n.jsx("option",{value:"11-15",children:"11-15 yrs"}),n.jsx("option",{value:"16-20",children:"16-20 yrs"}),n.jsx("option",{value:"20+",children:"20+ yrs"})]})]}):n.jsx(Pn,{label:"Age Group",value:l.ageGroup||"Not set",disabled:!0})]})]})]}),n.jsxs("div",{className:"rounded-3xl border border-white/10 bg-gradient-to-br from-blue-900/20 to-purple-900/20 backdrop-blur-sm p-4",children:[n.jsx("h3",{className:"text-xs font-semibold text-white/50 uppercase tracking-wider mb-4",children:"Contact & Location"}),n.jsxs("div",{className:"space-y-3",children:[n.jsx(Pn,{label:"Email",value:t?u.email:l.email,onChange:j=>x("email",j),placeholder:"yourname@example.com",type:"email",helperText:t?"Optional":l.email?"":"Not provided",disabled:!t}),n.jsx(Pn,{label:"City",value:t?u.city:l.city,onChange:j=>x("city",j),placeholder:"Add your city name",disabled:!t}),n.jsx(Pn,{label:"State",value:t?u.state:l.state,onChange:j=>x("state",j),placeholder:"Your state/province",disabled:!t}),n.jsx(Pn,{label:"Country",value:t?u.country:l.country,onChange:j=>x("country",j),placeholder:"Your country",disabled:!t})]})]}),t?n.jsxs("div",{className:"flex gap-3",children:[n.jsx("button",{onClick:f,className:`flex-1 py-3 rounded-2xl bg-white/10 hover:bg-white/20 
                         transition-all duration-200 font-semibold text-white`,children:"Cancel"}),n.jsx("button",{onClick:w,disabled:!o,className:`flex-1 py-3 rounded-2xl font-semibold text-white shadow-lg
                         transition-all duration-200 ${o?"bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 cursor-pointer":"bg-gray-600 cursor-not-allowed opacity-50"}`,children:"Save Changes"})]}):n.jsx("button",{onClick:h,className:`w-full py-3 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 
                       hover:from-purple-600 hover:to-pink-600 transition-all duration-200 
                       font-semibold text-white shadow-lg`,children:"Edit"})]})})]})}function Pn({label:e,value:t,onChange:r,disabled:s,placeholder:a,type:o="text",icon:i,helperText:l}){return n.jsxs("div",{children:[n.jsx("label",{className:"text-xs text-white/60 mb-1 block",children:e}),n.jsxs("div",{className:"relative",children:[n.jsx("input",{type:o,value:t||"",onChange:c=>r&&r(c.target.value),disabled:s,placeholder:a,className:`w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 
                   text-white placeholder-white/30 transition-all duration-200
                   ${s?"opacity-50 cursor-not-allowed":"hover:bg-white/10 focus:bg-white/10 focus:border-white/30 focus:outline-none"}`}),i&&n.jsx("span",{className:"absolute right-3 top-1/2 -translate-y-1/2 text-white/50",children:i})]}),l&&n.jsx("p",{className:"text-xs text-white/40 mt-1",children:l})]})}function Ty(){const e=je();return n.jsx(yc,{title:"Privacy Policy",subtitle:"Your data, your control",children:n.jsx("div",{className:"flex flex-col justify-center min-h-[calc(100vh-200px)]",children:n.jsx("div",{className:"rounded-3xl border border-white/10 bg-gradient-to-br from-purple-900/20 to-indigo-900/20 backdrop-blur-sm p-8",children:n.jsxs("div",{className:"text-center",children:[n.jsx("div",{className:"text-6xl mb-4",children:"🔒"}),n.jsx("h2",{className:"text-2xl font-bold text-white mb-2",children:"Privacy Policy"}),n.jsx("p",{className:"text-white/60 text-lg mb-6",children:"Will be updated soon"}),n.jsxs("div",{className:"space-y-3 text-left text-white/50 text-sm",children:[n.jsx("p",{children:"• Your data is encrypted and secure"}),n.jsx("p",{children:"• We never share your personal information"}),n.jsx("p",{children:"• You can delete your account anytime"}),n.jsx("p",{children:"• Minimal data collection for best experience"})]}),n.jsx("button",{onClick:()=>e(-1),className:`mt-8 px-8 py-3 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 
                       hover:from-purple-600 hover:to-pink-600 transition-all duration-200 
                       font-semibold text-white shadow-lg`,children:"Got it"})]})})})})}const Py=async e=>!!JSON.parse(localStorage.getItem("users")||"{}")[e],Ry=e=>JSON.parse(localStorage.getItem("users")||"{}")[e],_y=()=>!!localStorage.getItem("currentUser");function Ay(){const e=je(),t=Je(),[r,s]=d.useState(()=>{var h;return sessionStorage.getItem("tempPhone")||((h=t.state)==null?void 0:h.phone)||""}),[a,o]=d.useState(()=>sessionStorage.getItem("tempCountryCode")||"+91"),[i,l]=d.useState(!1),[c,u]=d.useState("");d.useEffect(()=>{sessionStorage.setItem("tempPhone",r),sessionStorage.setItem("tempCountryCode",a)},[r,a]);const m=async()=>{u("");const h=r.replace(/\D/g,"");if(h.length!==10){u("Please enter a 10 digit phone number");return}l(!0);const f=a+h;await Py(f)?e("/auth/signin",{state:{phone:f}}):e("/auth/avatar",{state:{phone:f}}),l(!1)};return d.useEffect(()=>{var h,f;if(!((h=t.state)!=null&&h.preventAutoSubmit)&&!((f=t.state)!=null&&f.fromAvatar)&&r&&r.length===10){const w=setTimeout(()=>{m()},500);return()=>clearTimeout(w)}},[]),n.jsxs("div",{className:"auth-screen",style:{background:"linear-gradient(135deg, #aa529bff 0%, #6d4397ff 100%)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},children:[n.jsxs("div",{className:"decorative-icons",children:[n.jsx("div",{className:"floating-icon",style:{top:"5%",left:"10%",animationDelay:"0s"},children:"🎮"}),n.jsx("div",{className:"floating-icon",style:{top:"15%",right:"10%",animationDelay:"5s"},children:"🏆"}),n.jsx("div",{className:"floating-icon",style:{top:"20%",left:"15%",animationDelay:"10s"},children:"⭐"}),n.jsx("div",{className:"floating-icon",style:{top:"75%",right:"20%",animationDelay:"15s"},children:"🎯"}),n.jsx("div",{className:"floating-icon",style:{top:"85%",left:"25%",animationDelay:"20s"},children:"🪙"})]}),n.jsx("div",{className:"mascot",style:{display:"flex",alignItems:"center",justifyContent:"center",marginBottom:"24px"},children:n.jsx("div",{style:{fontSize:"100px"},children:"🎮"})}),n.jsxs("div",{className:"content-card",children:[n.jsx("h1",{className:"title",children:"Ready to Play?"}),n.jsx("p",{className:"subtitle",children:"Enter your phone to start!"}),n.jsxs("div",{className:"phone-input-group",style:{display:"flex",gap:"8px",marginBottom:"24px",alignItems:"center",justifyContent:"center"},children:[n.jsxs("select",{className:"country-select",value:a,onChange:h=>o(h.target.value),style:{width:"auto",minWidth:"95px",padding:"16px 8px",border:"2px solid #e2e8f0",borderRadius:"16px",fontSize:"16px",fontWeight:"600",background:"white",transition:"all 0.3s",color:"#333",textAlign:"center"},children:[n.jsx("option",{value:"+91",children:"🇮🇳 +91"}),n.jsx("option",{value:"+1",children:"🇺🇸 +1"}),n.jsx("option",{value:"+44",children:"🇬🇧 +44"}),n.jsx("option",{value:"+86",children:"🇨🇳 +86"}),n.jsx("option",{value:"+81",children:"🇯🇵 +81"})]}),n.jsx("input",{type:"tel",className:"phone-input",placeholder:"Phone number",value:r,onChange:h=>{const f=h.target.value.replace(/\D/g,"");f.length<=10&&(s(f),c&&u(""))},maxLength:"10",inputMode:"numeric",pattern:"[0-9]*",style:{flex:1,padding:"16px",paddingLeft:"12px",border:"2px solid #e2e8f0",borderRadius:"16px",fontSize:"18px",fontWeight:"600",transition:"all 0.3s",background:"white",color:"#333",WebkitTextFillColor:"#333"}})]}),r.length>0&&r.length<10&&n.jsxs("p",{style:{color:"#f59e0b",fontSize:"14px",textAlign:"center",marginTop:"-16px",marginBottom:"16px"},children:["Enter ",10-r.length," more digit",10-r.length>1?"s":""]}),n.jsxs("button",{className:"submit-button",onClick:m,disabled:i,style:{width:"100%",padding:"18px",background:r.length===10?"linear-gradient(135deg, #667eea 0%, #764ba2 100%)":"linear-gradient(135deg, #94a3b8 0%, #cbd5e1 100%)",color:"white",border:"none",borderRadius:"16px",fontSize:"18px",fontWeight:"700",cursor:r.length===10?"pointer":"not-allowed",transition:"all 0.3s",display:"flex",alignItems:"center",justifyContent:"center",gap:"8px"},children:[i?"Loading...":"Start Adventure!",n.jsx("span",{children:"→"})]}),c&&n.jsx("p",{className:"error-message",style:{color:"#ef4444",fontSize:"14px",textAlign:"center",marginTop:"12px",fontWeight:"600"},children:c})]})]})}function Iy(){const e=Je(),t=je(),{phone:r}=e.state||{},[s,a]=d.useState(""),[o,i]=d.useState(!1),[l,c]=d.useState(""),[u,m]=d.useState(!1),[h,f]=d.useState(!1),[w,x]=d.useState(""),j=Ry(r),[S,y]=d.useState(!1),[g,v]=d.useState(""),[N,C]=d.useState(!1);d.useEffect(()=>{if(localStorage.getItem("rememberCredentials")==="true"&&f(!0),r){const R=JSON.parse(localStorage.getItem(`user_profile_${r}`)||"{}"),Q=JSON.parse(localStorage.getItem("users")||"{}")[r]||{},V=R.name||Q.username||(j==null?void 0:j.username)||"";x(V)}},[r,j]);const P=async()=>{if(!s){c("Please enter your password");return}m(!0),c(""),await new Promise(_=>setTimeout(_,500)),j&&j.password===s?(st.setCurrentUser(r),h&&localStorage.setItem("rememberCredentials","true"),t("/",{replace:!0})):(c("Wrong password"),m(!1),setTimeout(()=>c(""),3e3))},E=()=>{alert("OTP feature coming soon!")},p=()=>{sessionStorage.removeItem("tempPhone"),sessionStorage.removeItem("tempCountryCode");const _=(r==null?void 0:r.slice(-10))||"";t("/auth",{replace:!0,state:{phone:_,preventAutoSubmit:!0}})},b=()=>{sessionStorage.removeItem("tempPhone"),sessionStorage.removeItem("tempCountryCode"),t("/auth",{replace:!0,state:{isNewAccount:!0}})},k=_=>{_.key==="Enter"&&P()};return n.jsxs("div",{className:"auth-screen",style:{background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)"},children:[n.jsx("button",{className:"back-button",onClick:p,style:{position:"absolute",top:"40px",left:"20px",background:"rgba(255,255,255,0.2)",border:"none",borderRadius:"50%",width:"40px",height:"40px",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",zIndex:10,backdropFilter:"blur(10px)",transition:"all 0.3s ease"},onMouseEnter:_=>_.target.style.background="rgba(255,255,255,0.3)",onMouseLeave:_=>_.target.style.background="rgba(255,255,255,0.2)",children:n.jsx("span",{style:{fontSize:"24px",color:"white"},children:"‹"})}),n.jsxs("div",{className:"decorative-icons",children:[n.jsx("div",{className:"floating-icon",style:{top:"10%",left:"5%",animationDelay:"0s"},children:"🎮"}),n.jsx("div",{className:"floating-icon",style:{top:"20%",right:"10%",animationDelay:"2s"},children:"🏆"}),n.jsx("div",{className:"floating-icon",style:{top:"70%",left:"8%",animationDelay:"4s"},children:"⭐"}),n.jsx("div",{className:"floating-icon",style:{top:"80%",right:"5%",animationDelay:"6s"},children:"🎯"})]}),n.jsxs("div",{className:"content-card",style:{background:"rgba(255, 255, 255, 0.95)",backdropFilter:"blur(20px)",borderRadius:"32px",padding:"32px",width:"90%",maxWidth:"400px",boxShadow:"0 20px 60px rgba(0, 0, 0, 0.3)",margin:"0 auto"},children:[(j==null?void 0:j.avatar)&&n.jsx("div",{style:{fontSize:"60px",textAlign:"center",marginBottom:"16px",animation:"bounce 2s infinite"},children:j.avatar.emoji}),n.jsxs("div",{className:"welcome-back",children:[n.jsx("h1",{className:"title",style:{fontSize:"28px",fontWeight:"800",textAlign:"center",marginBottom:"8px",background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"},children:"Welcome Back! 👋"}),n.jsx("p",{className:"subtitle",style:{fontSize:"16px",color:"#64748b",textAlign:"center",marginBottom:"24px"},children:w?`Hey ${w}!`:"Good to see you again!"})]}),n.jsx("div",{className:"phone-display",style:{fontSize:"18px",fontWeight:"600",color:"#667eea",marginBottom:"24px",textAlign:"center",padding:"12px",background:"rgba(102, 126, 234, 0.1)",borderRadius:"12px"},children:r}),n.jsxs("div",{style:{position:"relative",marginBottom:"16px"},children:[n.jsx("input",{type:o?"text":"password",className:"phone-input",placeholder:"Enter your password",value:s,onChange:_=>{a(_.target.value),l&&c("")},onKeyPress:k,style:{width:"100%",paddingRight:"45px",border:l?"2px solid #ef4444":"2px solid #e2e8f0",color:"#333",fontSize:"16px",WebkitTextFillColor:"#333",backgroundColor:"white"},autoFocus:!0}),n.jsx("button",{type:"button",onClick:()=>i(!o),style:{position:"absolute",right:"12px",top:"50%",transform:"translateY(-50%)",background:"none",border:"none",cursor:"pointer",padding:"5px",fontSize:"20px",color:"#667eea"},"aria-label":o?"Hide password":"Show password",children:o?"👁️":"👁️‍🗨️"})]}),n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",marginBottom:"20px"},children:[n.jsx("input",{type:"checkbox",id:"rememberMe",checked:h,onChange:_=>f(_.target.checked),style:{width:"18px",height:"18px",cursor:"pointer",accentColor:"#667eea"}}),n.jsx("label",{htmlFor:"rememberMe",style:{fontSize:"14px",color:"#64748b",cursor:"pointer",userSelect:"none"},children:"Remember me"})]}),l&&n.jsxs("div",{style:{color:"#f59e0b",fontSize:"13px",textAlign:"center",marginTop:"-12px",marginBottom:"16px",fontWeight:"500"},children:["⚠️ ",l]}),n.jsx("button",{className:"submit-button",onClick:P,disabled:u,style:{width:"100%",padding:"18px",background:u?"linear-gradient(135deg, #94a3b8 0%, #cbd5e1 100%)":"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",color:"white",border:"none",borderRadius:"16px",fontSize:"18px",fontWeight:"700",cursor:u?"not-allowed":"pointer",transition:"all 0.3s",display:"flex",alignItems:"center",justifyContent:"center",gap:"8px",marginBottom:"20px"},children:u?n.jsxs(n.Fragment,{children:[n.jsx("span",{children:"Signing in..."}),n.jsx("span",{className:"animate-spin",children:"⚙️"})]}):n.jsxs(n.Fragment,{children:[n.jsx("span",{children:"Sign In"}),n.jsx("span",{children:"🎮"})]})}),n.jsx("div",{className:"divider",style:{textAlign:"center",margin:"20px 0",position:"relative"},children:n.jsx("span",{className:"divider-text",style:{background:"rgba(255, 255, 255, 0.95)",padding:"0 16px",position:"relative",color:"#94a3b8",fontSize:"14px"},children:"OR"})}),n.jsx("button",{className:"otp-button",onClick:E,style:{width:"100%",padding:"16px",background:"white",border:"2px solid #e2e8f0",borderRadius:"16px",fontSize:"16px",fontWeight:"600",color:"#667eea",cursor:"pointer",transition:"all 0.3s",marginBottom:"12px"},onMouseEnter:_=>{_.currentTarget.style.background="rgba(102, 126, 234, 0.05)",_.currentTarget.style.borderColor="#667eea"},onMouseLeave:_=>{_.currentTarget.style.background="white",_.currentTarget.style.borderColor="#e2e8f0"},children:"Send OTP Instead"}),n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:"20px",paddingTop:"20px",borderTop:"1px solid #e2e8f0"},children:[n.jsx("a",{href:"#",onClick:_=>{_.preventDefault(),y(!0)},style:{color:"#7c3aed",fontSize:"14px",textDecoration:"none",fontWeight:"600"},children:"Forgot password?"}),n.jsx("a",{href:"#",onClick:_=>{_.preventDefault(),b()},style:{color:"#7c3aed",fontSize:"14px",textDecoration:"none",fontWeight:"600"},children:"Create new account"})]})]}),S&&n.jsx("div",{className:"fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-6 z-50",children:n.jsxs("div",{className:"bg-gradient-to-br from-gray-900 to-purple-900 rounded-3xl p-6 w-full max-w-sm border border-white/20 shadow-2xl",children:[n.jsxs("div",{className:"text-center mb-6",children:[n.jsx("div",{className:"text-5xl mb-4",children:"🔐"}),n.jsx("h3",{className:"text-xl font-bold mb-2 text-white",children:"Reset Password"}),n.jsx("p",{className:"text-white/60 text-sm",children:"Enter your new password"})]}),n.jsxs("div",{className:"relative mb-4",children:[n.jsx("input",{type:o?"text":"password",value:g,onChange:_=>v(_.target.value),placeholder:"New password (min 6 characters)",className:`w-full px-4 py-3 pr-12 rounded-xl bg-white/10 border border-white/20 
                        text-white placeholder-white/50`,autoFocus:!0}),n.jsx("button",{type:"button",onClick:()=>i(!o),className:"absolute right-3 top-1/2 -translate-y-1/2 text-white/70 hover:text-white",style:{background:"none",border:"none",cursor:"pointer",padding:"5px",fontSize:"20px"},children:o?"👁️":"👁️‍🗨️"})]}),n.jsxs("div",{className:"flex gap-3",children:[n.jsx("button",{onClick:()=>{y(!1),v("")},className:`flex-1 py-3 rounded-2xl bg-white/10 hover:bg-white/20 
                         transition-all duration-200 font-semibold text-white`,children:"Cancel"}),n.jsx("button",{onClick:()=>{if(g.length>=6){const _=JSON.parse(localStorage.getItem("users")||"{}");_[r]&&(_[r].password=g,localStorage.setItem("users",JSON.stringify(_)),y(!1),v(""),a(g),C(!0),setTimeout(()=>C(!1),2e3))}else alert("Password must be at least 6 characters")},className:`flex-1 py-3 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-500 
                         hover:from-green-600 hover:to-emerald-600 transition-all duration-200 
                         font-semibold text-white shadow-lg`,children:"Reset"})]})]})}),N&&n.jsx("div",{className:"fixed inset-0 flex items-center justify-center z-50 pointer-events-none",children:n.jsx("div",{className:"bg-green-500 rounded-2xl px-8 py-6 animate-bounce-in",children:n.jsxs("div",{className:"flex flex-col items-center",children:[n.jsx("div",{className:"w-16 h-16 bg-white rounded-full flex items-center justify-center mb-3 animate-scale-in",children:n.jsx("span",{className:"text-green-500 text-3xl",children:"✓"})}),n.jsx("p",{className:"text-white font-semibold text-lg",children:"Password reset successfully!"})]})})}),n.jsx("style",{jsx:!0,children:`
        @keyframes bounce-in {
            0% { transform: scale(0.3); opacity: 0; }
            50% { transform: scale(1.05); }
            100% { transform: scale(1); opacity: 1; }
        }
        @keyframes scale-in {
            0% { transform: scale(0); }
            100% { transform: scale(1); }
        }
        .animate-bounce-in {
            animation: bounce-in 0.5s ease-out;
        }
        .animate-scale-in {
            animation: scale-in 0.3s ease-out 0.2s both;
        }
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-5px); }
          75% { transform: translateX(5px); }
        }
        
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        
        .animate-spin {
          display: inline-block;
          animation: spin 1s linear infinite;
        }
        
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `})]})}function Ly(){const e=Je(),t=je(),{phone:r}=e.state||{},[s,a]=d.useState(()=>{var c;if((c=e.state)!=null&&c.avatar)return e.state.avatar;const l=sessionStorage.getItem("tempAvatar");return l?JSON.parse(l):null}),o=[{id:1,emoji:"🤖",name:"Robot",color:"#667eea"},{id:2,emoji:"🦄",name:"Unicorn",color:"#ec4899"},{id:3,emoji:"🐉",name:"Dragon",color:"#10b981"},{id:4,emoji:"🧙",name:"Wizard",color:"#8b5cf6"},{id:5,emoji:"👨‍🚀",name:"Astronaut",color:"#3b82f6"},{id:6,emoji:"🥷",name:"Ninja",color:"#1f2937"}];d.useEffect(()=>{s&&sessionStorage.setItem("tempAvatar",JSON.stringify(s))},[s]);const i=()=>{s&&t("/auth/username",{state:{phone:r,avatar:s}})};return n.jsxs("div",{className:"auth-screen",style:{background:"linear-gradient(135deg, #1e3a8a 0%, #3730a3 35%, #6d28d9 70%, #a78bfa 100%)"},children:[n.jsx("button",{className:"back-button",onClick:()=>t("/auth",{state:{phone:r==null?void 0:r.replace(/^\+\d{1,3}/,""),fromAvatar:!0}}),style:{position:"absolute",top:"40px",left:"20px",background:"rgba(255,255,255,0.15)",border:"none",borderRadius:"50%",width:"40px",height:"40px",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",zIndex:10,backdropFilter:"blur(10px)",transition:"all 0.3s ease"},onMouseEnter:l=>l.target.style.background="rgba(255,255,255,0.25)",onMouseLeave:l=>l.target.style.background="rgba(255,255,255,0.15)",children:n.jsx("span",{style:{fontSize:"24px",color:"rgba(194, 128, 190, 0.9)"},children:"‹"})}),n.jsxs("div",{className:"content-card",style:{background:"rgba(248, 250, 252, 0.95)",backdropFilter:"blur(20px)",borderRadius:"32px",padding:"24px 20px",width:"95%",maxWidth:"100%",boxShadow:"0 20px 60px rgba(0, 0, 0, 0.3)"},children:[n.jsxs("div",{className:"progress-dots",children:[n.jsx("div",{className:"dot active",style:{background:"#3730a3"}}),n.jsx("div",{className:"dot",style:{background:"#bf89ceff"}})]}),n.jsx("h1",{className:"title",style:{fontSize:"28px",fontWeight:"800",textAlign:"center",marginBottom:"8px",background:"linear-gradient(135deg, #1e3a8a 0%, #6d28d9 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"},children:"Pick Your Hero!"}),n.jsx("p",{className:"subtitle",style:{fontSize:"16px",color:"#64748b",textAlign:"center",marginBottom:"32px"},children:"Choose your quiz champion"}),n.jsx("div",{className:"avatar-grid",style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"10px",marginBottom:"32px",padding:"0",maxWidth:"500px",margin:"0 auto 32px auto"},children:o.map(l=>n.jsxs("div",{className:`avatar-card ${(s==null?void 0:s.id)===l.id?"selected":""}`,onClick:()=>a(l),style:{aspectRatio:"1",borderRadius:"20px",background:(s==null?void 0:s.id)===l.id?"linear-gradient(135deg, rgba(55, 48, 163, 0.1), rgba(109, 40, 217, 0.1))":"white",border:(s==null?void 0:s.id)===l.id?"3px solid #3730a3":"3px solid transparent",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",cursor:"pointer",transition:"all 0.3s",boxShadow:(s==null?void 0:s.id)===l.id?"0 4px 20px rgba(55, 48, 163, 0.2)":"0 2px 10px rgba(0, 0, 0, 0.05)",transform:(s==null?void 0:s.id)===l.id?"scale(1.05)":"scale(1)"},onMouseEnter:c=>{(s==null?void 0:s.id)!==l.id&&(c.currentTarget.style.transform="scale(1.05)",c.currentTarget.style.boxShadow="0 4px 20px rgba(55, 48, 163, 0.15)")},onMouseLeave:c=>{(s==null?void 0:s.id)!==l.id&&(c.currentTarget.style.transform="scale(1)",c.currentTarget.style.boxShadow="0 2px 10px rgba(0, 0, 0, 0.05)")},children:[n.jsx("div",{className:"avatar-emoji",style:{fontSize:"40px",marginBottom:"8px"},children:l.emoji}),n.jsx("div",{className:"avatar-name",style:{fontSize:"14px",fontWeight:"600",color:(s==null?void 0:s.id)===l.id?"#3730a3":"#64748b"},children:l.name})]},l.id))}),n.jsxs("button",{className:"submit-button",disabled:!s,onClick:i,style:{width:"100%",padding:"18px",background:s?"linear-gradient(135deg, #3730a3 0%, #6d28d9 100%)":"linear-gradient(135deg, #94a3b8 0%, #cbd5e1 100%)",color:"white",border:"none",borderRadius:"16px",fontSize:"18px",fontWeight:"700",cursor:s?"pointer":"not-allowed",transition:"all 0.3s",display:"flex",alignItems:"center",justifyContent:"center",gap:"8px",boxShadow:s?"0 4px 20px rgba(55, 48, 163, 0.3)":"none"},onMouseEnter:l=>{s&&(l.currentTarget.style.transform="translateY(-2px)",l.currentTarget.style.boxShadow="0 6px 30px rgba(55, 48, 163, 0.4)")},onMouseLeave:l=>{s&&(l.currentTarget.style.transform="translateY(0)",l.currentTarget.style.boxShadow="0 4px 20px rgba(55, 48, 163, 0.3)")},children:["Continue",n.jsx("span",{children:"→"})]})]})]})}function Dy(){const e=Je(),t=je(),{phone:r,avatar:s}=e.state||{},[a,o]=d.useState(""),[i,l]=d.useState(""),[c,u]=d.useState(""),[m,h]=d.useState(""),[f,w]=d.useState(""),x=[{value:"under-5",label:"Under 5 yrs"},{value:"5-10",label:"5-10 yrs"},{value:"11-15",label:"11-15 yrs"},{value:"16-20",label:"16-20 yrs"},{value:"20+",label:"20+ yrs"}],j=()=>{if(w(""),!a){w("Please enter your name");return}if(!i||i.length<6){w("Password must be at least 6 characters");return}if(!c){w("Please select your gender");return}if(!m){w("Please select your age group");return}const y=i||"123456",g=JSON.parse(localStorage.getItem("users")||"{}");g[r]={username:a,gender:c,ageGroup:m,avatar:s,password:y,phone:r,createdAt:new Date().toISOString()},localStorage.setItem("users",JSON.stringify(g)),localStorage.setItem("currentUser",JSON.stringify({phone:r,username:a,gender:c,ageGroup:m,avatar:s}));const v={name:a,level:1,coins:0,currentStreak:0,xp:0};localStorage.setItem("qp_player",JSON.stringify(v)),localStorage.setItem("userName",a),t("/welcome",{state:{username:a},replace:!0})},S=()=>{t("/auth/avatar",{state:{phone:r,avatar:s}})};return n.jsxs("div",{className:"auth-screen",style:{background:"linear-gradient(135deg, #6b46c1 0%, #9333ea 50%, #ec4899 100%)"},children:[n.jsx("button",{className:"back-button",onClick:S,style:{position:"absolute",top:"40px",left:"20px",background:"rgba(255,255,255,0.2)",border:"none",borderRadius:"50%",width:"40px",height:"40px",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",zIndex:10,backdropFilter:"blur(10px)",transition:"all 0.3s ease"},onMouseEnter:y=>y.target.style.background="rgba(255,255,255,0.3)",onMouseLeave:y=>y.target.style.background="rgba(255,255,255,0.2)",children:n.jsx("span",{style:{fontSize:"24px",color:"white"},children:"‹"})}),n.jsxs("div",{className:"content-card",children:[n.jsxs("div",{className:"progress-dots",children:[n.jsx("div",{className:"dot"}),n.jsx("div",{className:"dot active",style:{background:"#9333ea"}})]}),n.jsx("div",{style:{fontSize:"60px",textAlign:"center",marginBottom:"16px"},children:s==null?void 0:s.emoji}),n.jsx("h1",{className:"title",style:{background:"linear-gradient(135deg, #6b46c1 0%, #ec4899 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"},children:"Almost Done!"}),n.jsx("p",{className:"subtitle",children:"Tell us about yourself"}),n.jsxs("div",{style:{marginBottom:"24px"},children:[n.jsx("input",{type:"text",className:"phone-input",placeholder:"Enter your name...",value:a,onChange:y=>o(y.target.value),style:{width:"100%",marginBottom:"20px",color:"#333",fontSize:"16px",WebkitTextFillColor:"#333",backgroundColor:"white"}}),n.jsx("input",{type:"password",className:"phone-input",placeholder:"Create a password...",value:i,onChange:y=>l(y.target.value),style:{width:"100%",marginBottom:"20px",marginTop:"10px"}}),n.jsxs("div",{style:{marginBottom:"20px"},children:[n.jsx("label",{style:{fontSize:"14px",color:"#64748b",marginBottom:"8px",display:"block"},children:"Gender"}),n.jsxs("div",{style:{display:"flex",gap:"8px"},children:[n.jsx("button",{onClick:()=>u("male"),style:{flex:1,padding:"12px",border:"2px solid",borderColor:c==="male"?"#9333ea":"#e9d5ff",borderRadius:"12px",background:c==="male"?"rgba(147, 51, 234, 0.1)":"white",cursor:"pointer",fontSize:"14px",fontWeight:"600",color:c==="male"?"#9333ea":"#64748b",transition:"all 0.3s"},children:"👦 Male"}),n.jsx("button",{onClick:()=>u("female"),style:{flex:1,padding:"12px",border:"2px solid",borderColor:c==="female"?"#9333ea":"#e9d5ff",borderRadius:"12px",background:c==="female"?"rgba(147, 51, 234, 0.1)":"white",cursor:"pointer",fontSize:"14px",fontWeight:"600",color:c==="female"?"#9333ea":"#64748b",transition:"all 0.3s"},children:"👧 Female"}),n.jsx("button",{onClick:()=>u("other"),style:{flex:1,padding:"12px",border:"2px solid",borderColor:c==="other"?"#9333ea":"#e9d5ff",borderRadius:"12px",background:c==="other"?"rgba(147, 51, 234, 0.1)":"white",cursor:"pointer",fontSize:"14px",fontWeight:"600",color:c==="other"?"#9333ea":"#64748b",transition:"all 0.3s"},children:"🌈 Other"})]})]}),n.jsxs("div",{style:{marginBottom:"20px"},children:[n.jsx("label",{style:{fontSize:"14px",color:"#64748b",marginBottom:"8px",display:"block"},children:"Age Group"}),n.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"8px"},children:x.map(y=>n.jsx("button",{onClick:()=>h(y.value),style:{padding:"10px 4px",border:"2px solid",borderColor:m===y.value?"#9333ea":"#e9d5ff",borderRadius:"12px",background:m===y.value?"rgba(147, 51, 234, 0.1)":"white",cursor:"pointer",fontSize:"12px",fontWeight:"600",color:m===y.value?"#9333ea":"#64748b",transition:"all 0.3s"},children:y.label},y.value))})]}),f&&n.jsx("div",{style:{color:"#ef4444",fontSize:"14px",textAlign:"center",marginBottom:"16px"},children:f})]}),n.jsx("button",{className:"submit-button",onClick:j,disabled:!a||!c||!m,style:{width:"100%",padding:"18px",background:a&&c&&m?"linear-gradient(135deg, #6b46c1 0%, #ec4899 100%)":"linear-gradient(135deg, #94a3b8 0%, #cbd5e1 100%)",color:"white",border:"none",borderRadius:"16px",fontSize:"18px",fontWeight:"700",cursor:a&&c&&m?"pointer":"not-allowed",transition:"all 0.3s",display:"flex",alignItems:"center",justifyContent:"center",gap:"8px"},children:"Let's Start! 🚀"})]})]})}function My(){var h;const e=je(),t=Je(),[r,s]=d.useState(!1),[a,o]=d.useState(!1),[i,l]=d.useState(!1),c=((h=t.state)==null?void 0:h.username)||localStorage.getItem("userName")||"Champion",u=c.length>12;d.useEffect(()=>{sessionStorage.setItem("justSignedUp","true"),setTimeout(()=>s(!0),100),setTimeout(()=>o(!0),2e3)},[]);const m=()=>{l(!0),setTimeout(()=>{e("/",{replace:!0})},350)};return n.jsxs("div",{className:"fixed inset-0 z-50 flex items-center justify-center overflow-hidden transition-opacity",style:{background:"radial-gradient(circle at center, #1a1a2e 0%, #0f0f0f 100%)",opacity:i?.3:1,transitionDuration:"400ms"},children:[n.jsxs("div",{className:"absolute inset-0 flex items-center justify-center",children:[n.jsx("div",{className:"absolute",style:{width:"100px",height:"100px",borderRadius:"50%",background:"radial-gradient(circle, rgba(147, 51, 234, 0.8), transparent)",animation:"pulseExpand 2.5s ease-out infinite"}}),n.jsx("div",{className:"absolute",style:{width:"100px",height:"100px",borderRadius:"50%",background:"radial-gradient(circle, rgba(236, 72, 153, 0.8), transparent)",animation:"pulseExpand 2.5s ease-out 0.5s infinite"}}),n.jsx("div",{className:"absolute",style:{width:"100px",height:"100px",borderRadius:"50%",background:"radial-gradient(circle, rgba(59, 130, 246, 0.8), transparent)",animation:"pulseExpand 2.5s ease-out 1s infinite"}}),n.jsx("div",{className:"absolute",style:{width:"80px",height:"80px",borderRadius:"50%",background:"radial-gradient(circle, rgba(255, 255, 255, 0.9), rgba(147, 51, 234, 0.4))",boxShadow:"0 0 60px 20px rgba(147, 51, 234, 0.6)",animation:"glow 2s ease-in-out infinite"}})]}),n.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:[...Array(12)].map((f,w)=>n.jsx("div",{className:"absolute",style:{width:"2px",height:"100%",background:"linear-gradient(to bottom, transparent, rgba(147, 51, 234, 0.3), transparent)",transform:`rotate(${w*30}deg)`,animation:`fadeInOut 2.5s ease-in-out ${w*.1}s infinite`}},w))}),n.jsx("div",{className:`absolute z-10 transition-all duration-1000
        ${r?"opacity-100":"opacity-0"}`,style:{top:"calc(50% - 200px)",left:"50%",transform:"translateX(-50%)",textAlign:"center",width:"90%",maxWidth:"500px"},children:n.jsxs("h1",{style:{color:"#fff",fontFamily:"system-ui, -apple-system, sans-serif",letterSpacing:"1px",textShadow:"0 0 30px rgba(147, 51, 234, 0.5)",animation:"fadeInUp 1s ease-out forwards",margin:0},children:[n.jsx("div",{style:{fontSize:"48px",fontWeight:"bold",marginBottom:u?"-5px":"-10px"},children:"Welcome"}),n.jsx("div",{style:{fontSize:"48px",fontWeight:"bold",wordWrap:"break-word",overflowWrap:"break-word",lineHeight:u?"1.2":"1.1",padding:"0 20px",marginTop:u?"5px":"0"},children:c})]})}),a&&n.jsx("div",{className:"absolute z-10",style:{bottom:"250px",left:"50%",transform:"translateX(-50%)"},children:n.jsxs("button",{onClick:m,className:"welcome-start-button",style:{background:"linear-gradient(135deg, #9333ea 0%, #ec4899 100%)",color:"white",padding:"18px 40px",borderRadius:"50px",fontSize:"20px",fontWeight:"bold",border:"none",cursor:"pointer",transform:"scale(1)",transition:"all 0.3s ease",display:"inline-flex",alignItems:"center",gap:"12px",boxShadow:"0 4px 30px rgba(147, 51, 234, 0.4)",animation:"slideUp 0.5s ease-out forwards",whiteSpace:"nowrap"},onMouseEnter:f=>{f.currentTarget.style.transform="scale(1.05)",f.currentTarget.style.boxShadow="0 6px 40px rgba(147, 51, 234, 0.6)"},onMouseLeave:f=>{f.currentTarget.style.transform="scale(1)",f.currentTarget.style.boxShadow="0 4px 30px rgba(147, 51, 234, 0.4)"},children:["Let's Learn ",n.jsx("span",{style:{fontSize:"24px"},children:"🚀"})]})}),n.jsx("style",{jsx:!0,children:`
        @keyframes pulseExpand {
          0% {
            width: 100px;
            height: 100px;
            opacity: 0.8;
          }
          100% {
            width: 800px;
            height: 800px;
            opacity: 0;
          }
        }
        
        @keyframes glow {
          0%, 100% {
            transform: scale(1);
            opacity: 0.9;
          }
          50% {
            transform: scale(1.1);
            opacity: 1;
          }
        }
        
        @keyframes fadeInOut {
          0%, 100% {
            opacity: 0;
          }
          50% {
            opacity: 0.6;
          }
        }
        
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideUp {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `})]})}function zy(){return d.useState(!1),null}const Oy={name:(()=>{const e=JSON.parse(localStorage.getItem("currentUser")||"{}");return e.username?e.username.split(" ")[0]:"Player"})(),avatar:"wizard",level:1,totalXP:0,energy:vt.MAX_ENERGY,energyRegenAt:null,comboStreak:0,bestCombo:0,currentStreak:0,bestStreak:0,totalDays:0,lastPlayedDate:null,totalQuizzes:0,totalCorrect:0,achievements:[],unlockedAvatars:["wizard","knight"],createdAt:Date.now()};function Fy(){const[e,t]=d.useState(()=>{const u=localStorage.getItem(vt.STORAGE_KEYS.PLAYER),m=JSON.parse(localStorage.getItem("currentUser")||"{}");if(u){const h=JSON.parse(u);return m.username&&(h.name=m.username.split(" ")[0]),h.unlockedAvatars||(h.unlockedAvatars=["wizard","knight"]),h}return Oy});d.useEffect(()=>{localStorage.setItem(vt.STORAGE_KEYS.PLAYER,JSON.stringify(e))},[e]),d.useEffect(()=>{if(e.energy<vt.MAX_ENERGY&&e.energyRegenAt){const u=setInterval(()=>{const m=Date.now();m>=e.energyRegenAt&&t(h=>({...h,energy:Math.min(h.energy+1,vt.MAX_ENERGY),energyRegenAt:h.energy+1<vt.MAX_ENERGY?m+vt.ENERGY_REGEN_TIME:null}))},6e4);return()=>clearInterval(u)}},[e.energy,e.energyRegenAt]);const r=d.useCallback(u=>{t(m=>{const h=m.totalXP+u,f=Md(m.totalXP),w=Md(h);let x=[...m.unlockedAvatars];return w>f&&vt.AVATARS.forEach(j=>{j.unlockLevel<=w&&!x.includes(j.id)&&x.push(j.id)}),{...m,totalXP:h,level:w,unlockedAvatars:x}})},[]),s=d.useCallback(u=>{console.log("[DEPRECATED] addCoins called with:",u)},[]),a=d.useCallback((u=1)=>e.energy<u?!1:(t(m=>({...m,energy:m.energy-u,energyRegenAt:m.energyRegenAt||Date.now()+vt.ENERGY_REGEN_TIME})),!0),[e.energy]),o=d.useCallback(u=>{t(m=>{const h=u?m.comboStreak+1:0;return{...m,comboStreak:h,bestCombo:Math.max(m.bestCombo,h)}})},[]),i=d.useCallback(()=>{t(u=>({...u,comboStreak:0}))},[]),l=d.useCallback(u=>{e.unlockedAvatars.includes(u)&&t(m=>({...m,avatar:u}))},[e.unlockedAvatars]),c=d.useCallback(()=>{const u=new Date().toDateString();t(m=>{if(m.lastPlayedDate===u)return m;const h=new Date;h.setDate(h.getDate()-1);const f=h.toDateString();let w=m.currentStreak;return m.lastPlayedDate===f?w=m.currentStreak+1:(m.lastPlayedDate,w=1),{...m,currentStreak:w,bestStreak:Math.max(m.bestStreak,w),totalDays:m.totalDays+1,lastPlayedDate:u}})},[]);return{player:e,addXP:r,addCoins:s,useEnergy:a,updateCombo:o,resetCombo:i,changeAvatar:l,updateDailyStreak:c,levelProgress:rg(e.totalXP)}}window.history.replaceState({path:window.location.pathname,preventBack:!0},"",window.location.pathname);window.history.pushState({path:window.location.pathname,preventBack:!0},"",window.location.pathname);window.userService=st;const Ym=d.createContext(null),Sn=()=>{const e=d.useContext(Ym);if(!e)throw new Error("useGame must be used within GameProvider");return e};function $y({children:e}){const t=Fy(),r=Lo(),s={...t,coins:r.coins,xp:r.xp,level:r.level,recordQuizComplete:r.recordQuizComplete,recordPracticeComplete:r.recordPracticeComplete,getTodaySummary:r.getTodaySummary};return n.jsx(Ym.Provider,{value:s,children:e})}function By(){const[e,t]=d.useState(!1),[r,s]=d.useState(!1);return d.useEffect(()=>{(()=>{const o=_y();s(o),t(!0)})()},[]),d.useEffect(()=>{let a=0,o=null,i=null;return(async()=>{try{i=await nu.addListener("backButton",()=>{const c=window.location.pathname;c==="/"||c==="/home"?(a++,a===1?(console.log("Press back again to exit"),o=setTimeout(()=>{a=0},2e3)):a===2&&(clearTimeout(o),nu.minimizeApp())):window.history.back()})}catch(c){console.error("Error setting up back button handler:",c)}})(),()=>{i&&typeof i.remove=="function"&&i.remove(),o&&clearTimeout(o)}},[]),e?!r&&!window.location.pathname.startsWith("/auth")?(window.location.href="/auth",null):n.jsxs($y,{children:[n.jsxs(hx,{children:[n.jsx(Pe,{path:"/auth",element:n.jsx(Ay,{})}),n.jsx(Pe,{path:"/auth/signin",element:n.jsx(Iy,{})}),n.jsx(Pe,{path:"/auth/avatar",element:n.jsx(Ly,{})}),n.jsx(Pe,{path:"/auth/username",element:n.jsx(Dy,{})}),n.jsx(Pe,{path:"/welcome",element:n.jsx(My,{})}),n.jsxs(Pe,{element:n.jsx(Xx,{}),children:[n.jsx(Pe,{path:"/",element:n.jsx(zd,{})}),n.jsx(Pe,{path:"/play",element:n.jsx(Kg,{})}),n.jsx(Pe,{path:"/play/classic",element:n.jsx(_g,{})}),n.jsx(Pe,{path:"/play/party",element:n.jsx(vv,{})}),n.jsx(Pe,{path:"/profile",element:n.jsx(Uv,{})}),n.jsx(Pe,{path:"/profile/leaderboard",element:n.jsx(Yv,{})}),n.jsx(Pe,{path:"/profile/history",element:n.jsx(Kv,{})}),n.jsx(Pe,{path:"/profile/rewards",element:n.jsx(dy,{})}),n.jsx(Pe,{path:"/profile/badges",element:n.jsx(uy,{})}),n.jsx(Pe,{path:"/profile/achievements",element:n.jsx(fy,{})}),n.jsx(Pe,{path:"/profile/streaks",element:n.jsx(hy,{})}),n.jsx(Pe,{path:"/profile/quests",element:n.jsx(xy,{})}),n.jsx(Pe,{path:"/profile/settings",element:n.jsx(gy,{})}),n.jsx(Pe,{path:"/profile/edit",element:n.jsx(Ey,{})}),n.jsx(Pe,{path:"/profile/privacy",element:n.jsx(Ty,{})}),n.jsx(Pe,{path:"/swipe",element:n.jsx(bv,{})}),n.jsx(Pe,{path:"/leaders",element:n.jsx(ux,{to:"/profile/leaderboard",replace:!0})}),n.jsx(Pe,{path:"/quiz/:category",element:n.jsx(dv,{})}),n.jsx(Pe,{path:"/quiz/play",element:n.jsx(jv,{})}),n.jsx(Pe,{path:"/practice/start",element:n.jsx(Nv,{})}),n.jsx(Pe,{path:"/surprise",element:n.jsx(Bv,{})}),n.jsx(Pe,{path:"*",element:n.jsx(zd,{})})]})]}),n.jsx(zy,{})]}):n.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh",backgroundColor:"#000"},children:n.jsx("div",{style:{color:"#fff"},children:"Loading..."})})}gi.createRoot(document.getElementById("root")).render(n.jsx(wt.StrictMode,{children:n.jsx(Fx,{children:n.jsx(By,{})})}));export{Um as W,qm as c,ru as g};
