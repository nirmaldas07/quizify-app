(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function r(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(a){if(a.ep)return;a.ep=!0;const o=r(a);fetch(a.href,o)}})();var Um=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function tu(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var nu={exports:{}},ho={},ru={exports:{}},ge={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qs=Symbol.for("react.element"),Ym=Symbol.for("react.portal"),qm=Symbol.for("react.fragment"),Qm=Symbol.for("react.strict_mode"),Gm=Symbol.for("react.profiler"),Wm=Symbol.for("react.provider"),Hm=Symbol.for("react.context"),Km=Symbol.for("react.forward_ref"),Xm=Symbol.for("react.suspense"),Vm=Symbol.for("react.memo"),Jm=Symbol.for("react.lazy"),yc=Symbol.iterator;function Zm(e){return e===null||typeof e!="object"?null:(e=yc&&e[yc]||e["@@iterator"],typeof e=="function"?e:null)}var su={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},au=Object.assign,ou={};function Yr(e,t,r){this.props=e,this.context=t,this.refs=ou,this.updater=r||su}Yr.prototype.isReactComponent={};Yr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Yr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function iu(){}iu.prototype=Yr.prototype;function fl(e,t,r){this.props=e,this.context=t,this.refs=ou,this.updater=r||su}var hl=fl.prototype=new iu;hl.constructor=fl;au(hl,Yr.prototype);hl.isPureReactComponent=!0;var bc=Array.isArray,lu=Object.prototype.hasOwnProperty,pl={current:null},cu={key:!0,ref:!0,__self:!0,__source:!0};function du(e,t,r){var s,a={},o=null,i=null;if(t!=null)for(s in t.ref!==void 0&&(i=t.ref),t.key!==void 0&&(o=""+t.key),t)lu.call(t,s)&&!cu.hasOwnProperty(s)&&(a[s]=t[s]);var l=arguments.length-2;if(l===1)a.children=r;else if(1<l){for(var c=Array(l),u=0;u<l;u++)c[u]=arguments[u+2];a.children=c}if(e&&e.defaultProps)for(s in l=e.defaultProps,l)a[s]===void 0&&(a[s]=l[s]);return{$$typeof:qs,type:e,key:o,ref:i,props:a,_owner:pl.current}}function ef(e,t){return{$$typeof:qs,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function xl(e){return typeof e=="object"&&e!==null&&e.$$typeof===qs}function tf(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(r){return t[r]})}var wc=/\/+/g;function Do(e,t){return typeof e=="object"&&e!==null&&e.key!=null?tf(""+e.key):t.toString(36)}function Sa(e,t,r,s,a){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(o){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case qs:case Ym:i=!0}}if(i)return i=e,a=a(i),e=s===""?"."+Do(i,0):s,bc(a)?(r="",e!=null&&(r=e.replace(wc,"$&/")+"/"),Sa(a,t,r,"",function(u){return u})):a!=null&&(xl(a)&&(a=ef(a,r+(!a.key||i&&i.key===a.key?"":(""+a.key).replace(wc,"$&/")+"/")+e)),t.push(a)),1;if(i=0,s=s===""?".":s+":",bc(e))for(var l=0;l<e.length;l++){o=e[l];var c=s+Do(o,l);i+=Sa(o,t,r,c,a)}else if(c=Zm(e),typeof c=="function")for(e=c.call(e),l=0;!(o=e.next()).done;)o=o.value,c=s+Do(o,l++),i+=Sa(o,t,r,c,a);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function Js(e,t,r){if(e==null)return e;var s=[],a=0;return Sa(e,s,"","",function(o){return t.call(r,o,a++)}),s}function nf(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(r){(e._status===0||e._status===-1)&&(e._status=1,e._result=r)},function(r){(e._status===0||e._status===-1)&&(e._status=2,e._result=r)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var jt={current:null},Ca={transition:null},rf={ReactCurrentDispatcher:jt,ReactCurrentBatchConfig:Ca,ReactCurrentOwner:pl};function uu(){throw Error("act(...) is not supported in production builds of React.")}ge.Children={map:Js,forEach:function(e,t,r){Js(e,function(){t.apply(this,arguments)},r)},count:function(e){var t=0;return Js(e,function(){t++}),t},toArray:function(e){return Js(e,function(t){return t})||[]},only:function(e){if(!xl(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};ge.Component=Yr;ge.Fragment=qm;ge.Profiler=Gm;ge.PureComponent=fl;ge.StrictMode=Qm;ge.Suspense=Xm;ge.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=rf;ge.act=uu;ge.cloneElement=function(e,t,r){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var s=au({},e.props),a=e.key,o=e.ref,i=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,i=pl.current),t.key!==void 0&&(a=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(c in t)lu.call(t,c)&&!cu.hasOwnProperty(c)&&(s[c]=t[c]===void 0&&l!==void 0?l[c]:t[c])}var c=arguments.length-2;if(c===1)s.children=r;else if(1<c){l=Array(c);for(var u=0;u<c;u++)l[u]=arguments[u+2];s.children=l}return{$$typeof:qs,type:e.type,key:a,ref:o,props:s,_owner:i}};ge.createContext=function(e){return e={$$typeof:Hm,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Wm,_context:e},e.Consumer=e};ge.createElement=du;ge.createFactory=function(e){var t=du.bind(null,e);return t.type=e,t};ge.createRef=function(){return{current:null}};ge.forwardRef=function(e){return{$$typeof:Km,render:e}};ge.isValidElement=xl;ge.lazy=function(e){return{$$typeof:Jm,_payload:{_status:-1,_result:e},_init:nf}};ge.memo=function(e,t){return{$$typeof:Vm,type:e,compare:t===void 0?null:t}};ge.startTransition=function(e){var t=Ca.transition;Ca.transition={};try{e()}finally{Ca.transition=t}};ge.unstable_act=uu;ge.useCallback=function(e,t){return jt.current.useCallback(e,t)};ge.useContext=function(e){return jt.current.useContext(e)};ge.useDebugValue=function(){};ge.useDeferredValue=function(e){return jt.current.useDeferredValue(e)};ge.useEffect=function(e,t){return jt.current.useEffect(e,t)};ge.useId=function(){return jt.current.useId()};ge.useImperativeHandle=function(e,t,r){return jt.current.useImperativeHandle(e,t,r)};ge.useInsertionEffect=function(e,t){return jt.current.useInsertionEffect(e,t)};ge.useLayoutEffect=function(e,t){return jt.current.useLayoutEffect(e,t)};ge.useMemo=function(e,t){return jt.current.useMemo(e,t)};ge.useReducer=function(e,t,r){return jt.current.useReducer(e,t,r)};ge.useRef=function(e){return jt.current.useRef(e)};ge.useState=function(e){return jt.current.useState(e)};ge.useSyncExternalStore=function(e,t,r){return jt.current.useSyncExternalStore(e,t,r)};ge.useTransition=function(){return jt.current.useTransition()};ge.version="18.3.1";ru.exports=ge;var d=ru.exports;const yt=tu(d);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sf=d,af=Symbol.for("react.element"),of=Symbol.for("react.fragment"),lf=Object.prototype.hasOwnProperty,cf=sf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,df={key:!0,ref:!0,__self:!0,__source:!0};function mu(e,t,r){var s,a={},o=null,i=null;r!==void 0&&(o=""+r),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(i=t.ref);for(s in t)lf.call(t,s)&&!df.hasOwnProperty(s)&&(a[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps,t)a[s]===void 0&&(a[s]=t[s]);return{$$typeof:af,type:e,key:o,ref:i,props:a,_owner:cf.current}}ho.Fragment=of;ho.jsx=mu;ho.jsxs=mu;nu.exports=ho;var n=nu.exports,pi={},fu={exports:{}},Dt={},hu={exports:{}},pu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(O,I){var D=O.length;O.push(I);e:for(;0<D;){var L=D-1>>>1,T=O[L];if(0<a(T,I))O[L]=I,O[D]=T,D=L;else break e}}function r(O){return O.length===0?null:O[0]}function s(O){if(O.length===0)return null;var I=O[0],D=O.pop();if(D!==I){O[0]=D;e:for(var L=0,T=O.length,z=T>>>1;L<z;){var B=2*(L+1)-1,W=O[B],$=B+1,Z=O[$];if(0>a(W,D))$<T&&0>a(Z,W)?(O[L]=Z,O[$]=D,L=$):(O[L]=W,O[B]=D,L=B);else if($<T&&0>a(Z,D))O[L]=Z,O[$]=D,L=$;else break e}}return I}function a(O,I){var D=O.sortIndex-I.sortIndex;return D!==0?D:O.id-I.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var i=Date,l=i.now();e.unstable_now=function(){return i.now()-l}}var c=[],u=[],m=1,p=null,f=3,w=!1,x=!1,j=!1,S=typeof setTimeout=="function"?setTimeout:null,y=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(O){for(var I=r(u);I!==null;){if(I.callback===null)s(u);else if(I.startTime<=O)s(u),I.sortIndex=I.expirationTime,t(c,I);else break;I=r(u)}}function N(O){if(j=!1,v(O),!x)if(r(c)!==null)x=!0,H(C);else{var I=r(u);I!==null&&q(N,I.startTime-O)}}function C(O,I){x=!1,j&&(j=!1,y(h),h=-1),w=!0;var D=f;try{for(v(I),p=r(c);p!==null&&(!(p.expirationTime>I)||O&&!_());){var L=p.callback;if(typeof L=="function"){p.callback=null,f=p.priorityLevel;var T=L(p.expirationTime<=I);I=e.unstable_now(),typeof T=="function"?p.callback=T:p===r(c)&&s(c),v(I)}else s(c);p=r(c)}if(p!==null)var z=!0;else{var B=r(u);B!==null&&q(N,B.startTime-I),z=!1}return z}finally{p=null,f=D,w=!1}}var R=!1,E=null,h=-1,b=5,k=-1;function _(){return!(e.unstable_now()-k<b)}function P(){if(E!==null){var O=e.unstable_now();k=O;var I=!0;try{I=E(!0,O)}finally{I?F():(R=!1,E=null)}}else R=!1}var F;if(typeof g=="function")F=function(){g(P)};else if(typeof MessageChannel<"u"){var Q=new MessageChannel,J=Q.port2;Q.port1.onmessage=P,F=function(){J.postMessage(null)}}else F=function(){S(P,0)};function H(O){E=O,R||(R=!0,F())}function q(O,I){h=S(function(){O(e.unstable_now())},I)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(O){O.callback=null},e.unstable_continueExecution=function(){x||w||(x=!0,H(C))},e.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<O?Math.floor(1e3/O):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return r(c)},e.unstable_next=function(O){switch(f){case 1:case 2:case 3:var I=3;break;default:I=f}var D=f;f=I;try{return O()}finally{f=D}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(O,I){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var D=f;f=O;try{return I()}finally{f=D}},e.unstable_scheduleCallback=function(O,I,D){var L=e.unstable_now();switch(typeof D=="object"&&D!==null?(D=D.delay,D=typeof D=="number"&&0<D?L+D:L):D=L,O){case 1:var T=-1;break;case 2:T=250;break;case 5:T=1073741823;break;case 4:T=1e4;break;default:T=5e3}return T=D+T,O={id:m++,callback:I,priorityLevel:O,startTime:D,expirationTime:T,sortIndex:-1},D>L?(O.sortIndex=D,t(u,O),r(c)===null&&O===r(u)&&(j?(y(h),h=-1):j=!0,q(N,D-L))):(O.sortIndex=T,t(c,O),x||w||(x=!0,H(C))),O},e.unstable_shouldYield=_,e.unstable_wrapCallback=function(O){var I=f;return function(){var D=f;f=I;try{return O.apply(this,arguments)}finally{f=D}}}})(pu);hu.exports=pu;var uf=hu.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mf=d,Lt=uf;function re(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var xu=new Set,Cs={};function mr(e,t){Dr(e,t),Dr(e+"Capture",t)}function Dr(e,t){for(Cs[e]=t,e=0;e<t.length;e++)xu.add(t[e])}var pn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),xi=Object.prototype.hasOwnProperty,ff=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,jc={},Nc={};function hf(e){return xi.call(Nc,e)?!0:xi.call(jc,e)?!1:ff.test(e)?Nc[e]=!0:(jc[e]=!0,!1)}function pf(e,t,r,s){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return s?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function xf(e,t,r,s){if(t===null||typeof t>"u"||pf(e,t,r,s))return!0;if(s)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Nt(e,t,r,s,a,o,i){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=s,this.attributeNamespace=a,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=i}var ut={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ut[e]=new Nt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ut[t]=new Nt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ut[e]=new Nt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ut[e]=new Nt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ut[e]=new Nt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ut[e]=new Nt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ut[e]=new Nt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ut[e]=new Nt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ut[e]=new Nt(e,5,!1,e.toLowerCase(),null,!1,!1)});var gl=/[\-:]([a-z])/g;function vl(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(gl,vl);ut[t]=new Nt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(gl,vl);ut[t]=new Nt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(gl,vl);ut[t]=new Nt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ut[e]=new Nt(e,1,!1,e.toLowerCase(),null,!1,!1)});ut.xlinkHref=new Nt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ut[e]=new Nt(e,1,!1,e.toLowerCase(),null,!0,!0)});function yl(e,t,r,s){var a=ut.hasOwnProperty(t)?ut[t]:null;(a!==null?a.type!==0:s||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(xf(t,r,a,s)&&(r=null),s||a===null?hf(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):a.mustUseProperty?e[a.propertyName]=r===null?a.type===3?!1:"":r:(t=a.attributeName,s=a.attributeNamespace,r===null?e.removeAttribute(t):(a=a.type,r=a===3||a===4&&r===!0?"":""+r,s?e.setAttributeNS(s,t,r):e.setAttribute(t,r))))}var bn=mf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Zs=Symbol.for("react.element"),gr=Symbol.for("react.portal"),vr=Symbol.for("react.fragment"),bl=Symbol.for("react.strict_mode"),gi=Symbol.for("react.profiler"),gu=Symbol.for("react.provider"),vu=Symbol.for("react.context"),wl=Symbol.for("react.forward_ref"),vi=Symbol.for("react.suspense"),yi=Symbol.for("react.suspense_list"),jl=Symbol.for("react.memo"),En=Symbol.for("react.lazy"),yu=Symbol.for("react.offscreen"),kc=Symbol.iterator;function Zr(e){return e===null||typeof e!="object"?null:(e=kc&&e[kc]||e["@@iterator"],typeof e=="function"?e:null)}var Qe=Object.assign,zo;function ms(e){if(zo===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);zo=t&&t[1]||""}return`
`+zo+e}var Mo=!1;function Oo(e,t){if(!e||Mo)return"";Mo=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var s=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){s=u}e.call(t.prototype)}else{try{throw Error()}catch(u){s=u}e()}}catch(u){if(u&&s&&typeof u.stack=="string"){for(var a=u.stack.split(`
`),o=s.stack.split(`
`),i=a.length-1,l=o.length-1;1<=i&&0<=l&&a[i]!==o[l];)l--;for(;1<=i&&0<=l;i--,l--)if(a[i]!==o[l]){if(i!==1||l!==1)do if(i--,l--,0>l||a[i]!==o[l]){var c=`
`+a[i].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=i&&0<=l);break}}}finally{Mo=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?ms(e):""}function gf(e){switch(e.tag){case 5:return ms(e.type);case 16:return ms("Lazy");case 13:return ms("Suspense");case 19:return ms("SuspenseList");case 0:case 2:case 15:return e=Oo(e.type,!1),e;case 11:return e=Oo(e.type.render,!1),e;case 1:return e=Oo(e.type,!0),e;default:return""}}function bi(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case vr:return"Fragment";case gr:return"Portal";case gi:return"Profiler";case bl:return"StrictMode";case vi:return"Suspense";case yi:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case vu:return(e.displayName||"Context")+".Consumer";case gu:return(e._context.displayName||"Context")+".Provider";case wl:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case jl:return t=e.displayName||null,t!==null?t:bi(e.type)||"Memo";case En:t=e._payload,e=e._init;try{return bi(e(t))}catch{}}return null}function vf(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return bi(t);case 8:return t===bl?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function qn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function bu(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function yf(e){var t=bu(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),s=""+e[t];if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var a=r.get,o=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(i){s=""+i,o.call(this,i)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return s},setValue:function(i){s=""+i},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ea(e){e._valueTracker||(e._valueTracker=yf(e))}function wu(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),s="";return e&&(s=bu(e)?e.checked?"true":"false":e.value),e=s,e!==r?(t.setValue(e),!0):!1}function Ba(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function wi(e,t){var r=t.checked;return Qe({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function Sc(e,t){var r=t.defaultValue==null?"":t.defaultValue,s=t.checked!=null?t.checked:t.defaultChecked;r=qn(t.value!=null?t.value:r),e._wrapperState={initialChecked:s,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function ju(e,t){t=t.checked,t!=null&&yl(e,"checked",t,!1)}function ji(e,t){ju(e,t);var r=qn(t.value),s=t.type;if(r!=null)s==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(s==="submit"||s==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Ni(e,t.type,r):t.hasOwnProperty("defaultValue")&&Ni(e,t.type,qn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Cc(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var s=t.type;if(!(s!=="submit"&&s!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function Ni(e,t,r){(t!=="number"||Ba(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var fs=Array.isArray;function Pr(e,t,r,s){if(e=e.options,t){t={};for(var a=0;a<r.length;a++)t["$"+r[a]]=!0;for(r=0;r<e.length;r++)a=t.hasOwnProperty("$"+e[r].value),e[r].selected!==a&&(e[r].selected=a),a&&s&&(e[r].defaultSelected=!0)}else{for(r=""+qn(r),t=null,a=0;a<e.length;a++){if(e[a].value===r){e[a].selected=!0,s&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function ki(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(re(91));return Qe({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ec(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(re(92));if(fs(r)){if(1<r.length)throw Error(re(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:qn(r)}}function Nu(e,t){var r=qn(t.value),s=qn(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),s!=null&&(e.defaultValue=""+s)}function Tc(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function ku(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Si(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?ku(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ta,Su=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,r,s,a){MSApp.execUnsafeLocalFunction(function(){return e(t,r,s,a)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ta=ta||document.createElement("div"),ta.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ta.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Es(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var xs={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},bf=["Webkit","ms","Moz","O"];Object.keys(xs).forEach(function(e){bf.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),xs[t]=xs[e]})});function Cu(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||xs.hasOwnProperty(e)&&xs[e]?(""+t).trim():t+"px"}function Eu(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var s=r.indexOf("--")===0,a=Cu(r,t[r],s);r==="float"&&(r="cssFloat"),s?e.setProperty(r,a):e[r]=a}}var wf=Qe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ci(e,t){if(t){if(wf[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(re(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(re(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(re(61))}if(t.style!=null&&typeof t.style!="object")throw Error(re(62))}}function Ei(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ti=null;function Nl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Pi=null,Rr=null,_r=null;function Pc(e){if(e=Ws(e)){if(typeof Pi!="function")throw Error(re(280));var t=e.stateNode;t&&(t=yo(t),Pi(e.stateNode,e.type,t))}}function Tu(e){Rr?_r?_r.push(e):_r=[e]:Rr=e}function Pu(){if(Rr){var e=Rr,t=_r;if(_r=Rr=null,Pc(e),t)for(e=0;e<t.length;e++)Pc(t[e])}}function Ru(e,t){return e(t)}function _u(){}var Fo=!1;function Au(e,t,r){if(Fo)return e(t,r);Fo=!0;try{return Ru(e,t,r)}finally{Fo=!1,(Rr!==null||_r!==null)&&(_u(),Pu())}}function Ts(e,t){var r=e.stateNode;if(r===null)return null;var s=yo(r);if(s===null)return null;r=s[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(e=e.type,s=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!s;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(re(231,t,typeof r));return r}var Ri=!1;if(pn)try{var es={};Object.defineProperty(es,"passive",{get:function(){Ri=!0}}),window.addEventListener("test",es,es),window.removeEventListener("test",es,es)}catch{Ri=!1}function jf(e,t,r,s,a,o,i,l,c){var u=Array.prototype.slice.call(arguments,3);try{t.apply(r,u)}catch(m){this.onError(m)}}var gs=!1,Ua=null,Ya=!1,_i=null,Nf={onError:function(e){gs=!0,Ua=e}};function kf(e,t,r,s,a,o,i,l,c){gs=!1,Ua=null,jf.apply(Nf,arguments)}function Sf(e,t,r,s,a,o,i,l,c){if(kf.apply(this,arguments),gs){if(gs){var u=Ua;gs=!1,Ua=null}else throw Error(re(198));Ya||(Ya=!0,_i=u)}}function fr(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function Iu(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Rc(e){if(fr(e)!==e)throw Error(re(188))}function Cf(e){var t=e.alternate;if(!t){if(t=fr(e),t===null)throw Error(re(188));return t!==e?null:e}for(var r=e,s=t;;){var a=r.return;if(a===null)break;var o=a.alternate;if(o===null){if(s=a.return,s!==null){r=s;continue}break}if(a.child===o.child){for(o=a.child;o;){if(o===r)return Rc(a),e;if(o===s)return Rc(a),t;o=o.sibling}throw Error(re(188))}if(r.return!==s.return)r=a,s=o;else{for(var i=!1,l=a.child;l;){if(l===r){i=!0,r=a,s=o;break}if(l===s){i=!0,s=a,r=o;break}l=l.sibling}if(!i){for(l=o.child;l;){if(l===r){i=!0,r=o,s=a;break}if(l===s){i=!0,s=o,r=a;break}l=l.sibling}if(!i)throw Error(re(189))}}if(r.alternate!==s)throw Error(re(190))}if(r.tag!==3)throw Error(re(188));return r.stateNode.current===r?e:t}function Lu(e){return e=Cf(e),e!==null?Du(e):null}function Du(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Du(e);if(t!==null)return t;e=e.sibling}return null}var zu=Lt.unstable_scheduleCallback,_c=Lt.unstable_cancelCallback,Ef=Lt.unstable_shouldYield,Tf=Lt.unstable_requestPaint,Ve=Lt.unstable_now,Pf=Lt.unstable_getCurrentPriorityLevel,kl=Lt.unstable_ImmediatePriority,Mu=Lt.unstable_UserBlockingPriority,qa=Lt.unstable_NormalPriority,Rf=Lt.unstable_LowPriority,Ou=Lt.unstable_IdlePriority,po=null,sn=null;function _f(e){if(sn&&typeof sn.onCommitFiberRoot=="function")try{sn.onCommitFiberRoot(po,e,void 0,(e.current.flags&128)===128)}catch{}}var Xt=Math.clz32?Math.clz32:Lf,Af=Math.log,If=Math.LN2;function Lf(e){return e>>>=0,e===0?32:31-(Af(e)/If|0)|0}var na=64,ra=4194304;function hs(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Qa(e,t){var r=e.pendingLanes;if(r===0)return 0;var s=0,a=e.suspendedLanes,o=e.pingedLanes,i=r&268435455;if(i!==0){var l=i&~a;l!==0?s=hs(l):(o&=i,o!==0&&(s=hs(o)))}else i=r&~a,i!==0?s=hs(i):o!==0&&(s=hs(o));if(s===0)return 0;if(t!==0&&t!==s&&!(t&a)&&(a=s&-s,o=t&-t,a>=o||a===16&&(o&4194240)!==0))return t;if(s&4&&(s|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=s;0<t;)r=31-Xt(t),a=1<<r,s|=e[r],t&=~a;return s}function Df(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function zf(e,t){for(var r=e.suspendedLanes,s=e.pingedLanes,a=e.expirationTimes,o=e.pendingLanes;0<o;){var i=31-Xt(o),l=1<<i,c=a[i];c===-1?(!(l&r)||l&s)&&(a[i]=Df(l,t)):c<=t&&(e.expiredLanes|=l),o&=~l}}function Ai(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Fu(){var e=na;return na<<=1,!(na&4194240)&&(na=64),e}function $o(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function Qs(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Xt(t),e[t]=r}function Mf(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var s=e.eventTimes;for(e=e.expirationTimes;0<r;){var a=31-Xt(r),o=1<<a;t[a]=0,s[a]=-1,e[a]=-1,r&=~o}}function Sl(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var s=31-Xt(r),a=1<<s;a&t|e[s]&t&&(e[s]|=t),r&=~a}}var Re=0;function $u(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Bu,Cl,Uu,Yu,qu,Ii=!1,sa=[],zn=null,Mn=null,On=null,Ps=new Map,Rs=new Map,Rn=[],Of="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ac(e,t){switch(e){case"focusin":case"focusout":zn=null;break;case"dragenter":case"dragleave":Mn=null;break;case"mouseover":case"mouseout":On=null;break;case"pointerover":case"pointerout":Ps.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Rs.delete(t.pointerId)}}function ts(e,t,r,s,a,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:r,eventSystemFlags:s,nativeEvent:o,targetContainers:[a]},t!==null&&(t=Ws(t),t!==null&&Cl(t)),e):(e.eventSystemFlags|=s,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function Ff(e,t,r,s,a){switch(t){case"focusin":return zn=ts(zn,e,t,r,s,a),!0;case"dragenter":return Mn=ts(Mn,e,t,r,s,a),!0;case"mouseover":return On=ts(On,e,t,r,s,a),!0;case"pointerover":var o=a.pointerId;return Ps.set(o,ts(Ps.get(o)||null,e,t,r,s,a)),!0;case"gotpointercapture":return o=a.pointerId,Rs.set(o,ts(Rs.get(o)||null,e,t,r,s,a)),!0}return!1}function Qu(e){var t=er(e.target);if(t!==null){var r=fr(t);if(r!==null){if(t=r.tag,t===13){if(t=Iu(r),t!==null){e.blockedOn=t,qu(e.priority,function(){Uu(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ea(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=Li(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var s=new r.constructor(r.type,r);Ti=s,r.target.dispatchEvent(s),Ti=null}else return t=Ws(r),t!==null&&Cl(t),e.blockedOn=r,!1;t.shift()}return!0}function Ic(e,t,r){Ea(e)&&r.delete(t)}function $f(){Ii=!1,zn!==null&&Ea(zn)&&(zn=null),Mn!==null&&Ea(Mn)&&(Mn=null),On!==null&&Ea(On)&&(On=null),Ps.forEach(Ic),Rs.forEach(Ic)}function ns(e,t){e.blockedOn===t&&(e.blockedOn=null,Ii||(Ii=!0,Lt.unstable_scheduleCallback(Lt.unstable_NormalPriority,$f)))}function _s(e){function t(a){return ns(a,e)}if(0<sa.length){ns(sa[0],e);for(var r=1;r<sa.length;r++){var s=sa[r];s.blockedOn===e&&(s.blockedOn=null)}}for(zn!==null&&ns(zn,e),Mn!==null&&ns(Mn,e),On!==null&&ns(On,e),Ps.forEach(t),Rs.forEach(t),r=0;r<Rn.length;r++)s=Rn[r],s.blockedOn===e&&(s.blockedOn=null);for(;0<Rn.length&&(r=Rn[0],r.blockedOn===null);)Qu(r),r.blockedOn===null&&Rn.shift()}var Ar=bn.ReactCurrentBatchConfig,Ga=!0;function Bf(e,t,r,s){var a=Re,o=Ar.transition;Ar.transition=null;try{Re=1,El(e,t,r,s)}finally{Re=a,Ar.transition=o}}function Uf(e,t,r,s){var a=Re,o=Ar.transition;Ar.transition=null;try{Re=4,El(e,t,r,s)}finally{Re=a,Ar.transition=o}}function El(e,t,r,s){if(Ga){var a=Li(e,t,r,s);if(a===null)Xo(e,t,s,Wa,r),Ac(e,s);else if(Ff(a,e,t,r,s))s.stopPropagation();else if(Ac(e,s),t&4&&-1<Of.indexOf(e)){for(;a!==null;){var o=Ws(a);if(o!==null&&Bu(o),o=Li(e,t,r,s),o===null&&Xo(e,t,s,Wa,r),o===a)break;a=o}a!==null&&s.stopPropagation()}else Xo(e,t,s,null,r)}}var Wa=null;function Li(e,t,r,s){if(Wa=null,e=Nl(s),e=er(e),e!==null)if(t=fr(e),t===null)e=null;else if(r=t.tag,r===13){if(e=Iu(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Wa=e,null}function Gu(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Pf()){case kl:return 1;case Mu:return 4;case qa:case Rf:return 16;case Ou:return 536870912;default:return 16}default:return 16}}var An=null,Tl=null,Ta=null;function Wu(){if(Ta)return Ta;var e,t=Tl,r=t.length,s,a="value"in An?An.value:An.textContent,o=a.length;for(e=0;e<r&&t[e]===a[e];e++);var i=r-e;for(s=1;s<=i&&t[r-s]===a[o-s];s++);return Ta=a.slice(e,1<s?1-s:void 0)}function Pa(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function aa(){return!0}function Lc(){return!1}function zt(e){function t(r,s,a,o,i){this._reactName=r,this._targetInst=a,this.type=s,this.nativeEvent=o,this.target=i,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(r=e[l],this[l]=r?r(o):o[l]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?aa:Lc,this.isPropagationStopped=Lc,this}return Qe(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=aa)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=aa)},persist:function(){},isPersistent:aa}),t}var qr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Pl=zt(qr),Gs=Qe({},qr,{view:0,detail:0}),Yf=zt(Gs),Bo,Uo,rs,xo=Qe({},Gs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Rl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==rs&&(rs&&e.type==="mousemove"?(Bo=e.screenX-rs.screenX,Uo=e.screenY-rs.screenY):Uo=Bo=0,rs=e),Bo)},movementY:function(e){return"movementY"in e?e.movementY:Uo}}),Dc=zt(xo),qf=Qe({},xo,{dataTransfer:0}),Qf=zt(qf),Gf=Qe({},Gs,{relatedTarget:0}),Yo=zt(Gf),Wf=Qe({},qr,{animationName:0,elapsedTime:0,pseudoElement:0}),Hf=zt(Wf),Kf=Qe({},qr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Xf=zt(Kf),Vf=Qe({},qr,{data:0}),zc=zt(Vf),Jf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Zf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},eh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function th(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=eh[e])?!!t[e]:!1}function Rl(){return th}var nh=Qe({},Gs,{key:function(e){if(e.key){var t=Jf[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Pa(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Zf[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Rl,charCode:function(e){return e.type==="keypress"?Pa(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Pa(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),rh=zt(nh),sh=Qe({},xo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Mc=zt(sh),ah=Qe({},Gs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Rl}),oh=zt(ah),ih=Qe({},qr,{propertyName:0,elapsedTime:0,pseudoElement:0}),lh=zt(ih),ch=Qe({},xo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),dh=zt(ch),uh=[9,13,27,32],_l=pn&&"CompositionEvent"in window,vs=null;pn&&"documentMode"in document&&(vs=document.documentMode);var mh=pn&&"TextEvent"in window&&!vs,Hu=pn&&(!_l||vs&&8<vs&&11>=vs),Oc=String.fromCharCode(32),Fc=!1;function Ku(e,t){switch(e){case"keyup":return uh.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Xu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var yr=!1;function fh(e,t){switch(e){case"compositionend":return Xu(t);case"keypress":return t.which!==32?null:(Fc=!0,Oc);case"textInput":return e=t.data,e===Oc&&Fc?null:e;default:return null}}function hh(e,t){if(yr)return e==="compositionend"||!_l&&Ku(e,t)?(e=Wu(),Ta=Tl=An=null,yr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Hu&&t.locale!=="ko"?null:t.data;default:return null}}var ph={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function $c(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!ph[e.type]:t==="textarea"}function Vu(e,t,r,s){Tu(s),t=Ha(t,"onChange"),0<t.length&&(r=new Pl("onChange","change",null,r,s),e.push({event:r,listeners:t}))}var ys=null,As=null;function xh(e){l0(e,0)}function go(e){var t=jr(e);if(wu(t))return e}function gh(e,t){if(e==="change")return t}var Ju=!1;if(pn){var qo;if(pn){var Qo="oninput"in document;if(!Qo){var Bc=document.createElement("div");Bc.setAttribute("oninput","return;"),Qo=typeof Bc.oninput=="function"}qo=Qo}else qo=!1;Ju=qo&&(!document.documentMode||9<document.documentMode)}function Uc(){ys&&(ys.detachEvent("onpropertychange",Zu),As=ys=null)}function Zu(e){if(e.propertyName==="value"&&go(As)){var t=[];Vu(t,As,e,Nl(e)),Au(xh,t)}}function vh(e,t,r){e==="focusin"?(Uc(),ys=t,As=r,ys.attachEvent("onpropertychange",Zu)):e==="focusout"&&Uc()}function yh(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return go(As)}function bh(e,t){if(e==="click")return go(t)}function wh(e,t){if(e==="input"||e==="change")return go(t)}function jh(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Jt=typeof Object.is=="function"?Object.is:jh;function Is(e,t){if(Jt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),s=Object.keys(t);if(r.length!==s.length)return!1;for(s=0;s<r.length;s++){var a=r[s];if(!xi.call(t,a)||!Jt(e[a],t[a]))return!1}return!0}function Yc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function qc(e,t){var r=Yc(e);e=0;for(var s;r;){if(r.nodeType===3){if(s=e+r.textContent.length,e<=t&&s>=t)return{node:r,offset:t-e};e=s}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=Yc(r)}}function e0(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?e0(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function t0(){for(var e=window,t=Ba();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=Ba(e.document)}return t}function Al(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Nh(e){var t=t0(),r=e.focusedElem,s=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&e0(r.ownerDocument.documentElement,r)){if(s!==null&&Al(r)){if(t=s.start,e=s.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var a=r.textContent.length,o=Math.min(s.start,a);s=s.end===void 0?o:Math.min(s.end,a),!e.extend&&o>s&&(a=s,s=o,o=a),a=qc(r,o);var i=qc(r,s);a&&i&&(e.rangeCount!==1||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(t=t.createRange(),t.setStart(a.node,a.offset),e.removeAllRanges(),o>s?(e.addRange(t),e.extend(i.node,i.offset)):(t.setEnd(i.node,i.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var kh=pn&&"documentMode"in document&&11>=document.documentMode,br=null,Di=null,bs=null,zi=!1;function Qc(e,t,r){var s=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;zi||br==null||br!==Ba(s)||(s=br,"selectionStart"in s&&Al(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),bs&&Is(bs,s)||(bs=s,s=Ha(Di,"onSelect"),0<s.length&&(t=new Pl("onSelect","select",null,t,r),e.push({event:t,listeners:s}),t.target=br)))}function oa(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var wr={animationend:oa("Animation","AnimationEnd"),animationiteration:oa("Animation","AnimationIteration"),animationstart:oa("Animation","AnimationStart"),transitionend:oa("Transition","TransitionEnd")},Go={},n0={};pn&&(n0=document.createElement("div").style,"AnimationEvent"in window||(delete wr.animationend.animation,delete wr.animationiteration.animation,delete wr.animationstart.animation),"TransitionEvent"in window||delete wr.transitionend.transition);function vo(e){if(Go[e])return Go[e];if(!wr[e])return e;var t=wr[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in n0)return Go[e]=t[r];return e}var r0=vo("animationend"),s0=vo("animationiteration"),a0=vo("animationstart"),o0=vo("transitionend"),i0=new Map,Gc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Wn(e,t){i0.set(e,t),mr(t,[e])}for(var Wo=0;Wo<Gc.length;Wo++){var Ho=Gc[Wo],Sh=Ho.toLowerCase(),Ch=Ho[0].toUpperCase()+Ho.slice(1);Wn(Sh,"on"+Ch)}Wn(r0,"onAnimationEnd");Wn(s0,"onAnimationIteration");Wn(a0,"onAnimationStart");Wn("dblclick","onDoubleClick");Wn("focusin","onFocus");Wn("focusout","onBlur");Wn(o0,"onTransitionEnd");Dr("onMouseEnter",["mouseout","mouseover"]);Dr("onMouseLeave",["mouseout","mouseover"]);Dr("onPointerEnter",["pointerout","pointerover"]);Dr("onPointerLeave",["pointerout","pointerover"]);mr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));mr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));mr("onBeforeInput",["compositionend","keypress","textInput","paste"]);mr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));mr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));mr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ps="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Eh=new Set("cancel close invalid load scroll toggle".split(" ").concat(ps));function Wc(e,t,r){var s=e.type||"unknown-event";e.currentTarget=r,Sf(s,t,void 0,e),e.currentTarget=null}function l0(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var s=e[r],a=s.event;s=s.listeners;e:{var o=void 0;if(t)for(var i=s.length-1;0<=i;i--){var l=s[i],c=l.instance,u=l.currentTarget;if(l=l.listener,c!==o&&a.isPropagationStopped())break e;Wc(a,l,u),o=c}else for(i=0;i<s.length;i++){if(l=s[i],c=l.instance,u=l.currentTarget,l=l.listener,c!==o&&a.isPropagationStopped())break e;Wc(a,l,u),o=c}}}if(Ya)throw e=_i,Ya=!1,_i=null,e}function Le(e,t){var r=t[Bi];r===void 0&&(r=t[Bi]=new Set);var s=e+"__bubble";r.has(s)||(c0(t,e,2,!1),r.add(s))}function Ko(e,t,r){var s=0;t&&(s|=4),c0(r,e,s,t)}var ia="_reactListening"+Math.random().toString(36).slice(2);function Ls(e){if(!e[ia]){e[ia]=!0,xu.forEach(function(r){r!=="selectionchange"&&(Eh.has(r)||Ko(r,!1,e),Ko(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ia]||(t[ia]=!0,Ko("selectionchange",!1,t))}}function c0(e,t,r,s){switch(Gu(t)){case 1:var a=Bf;break;case 4:a=Uf;break;default:a=El}r=a.bind(null,t,r,e),a=void 0,!Ri||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),s?a!==void 0?e.addEventListener(t,r,{capture:!0,passive:a}):e.addEventListener(t,r,!0):a!==void 0?e.addEventListener(t,r,{passive:a}):e.addEventListener(t,r,!1)}function Xo(e,t,r,s,a){var o=s;if(!(t&1)&&!(t&2)&&s!==null)e:for(;;){if(s===null)return;var i=s.tag;if(i===3||i===4){var l=s.stateNode.containerInfo;if(l===a||l.nodeType===8&&l.parentNode===a)break;if(i===4)for(i=s.return;i!==null;){var c=i.tag;if((c===3||c===4)&&(c=i.stateNode.containerInfo,c===a||c.nodeType===8&&c.parentNode===a))return;i=i.return}for(;l!==null;){if(i=er(l),i===null)return;if(c=i.tag,c===5||c===6){s=o=i;continue e}l=l.parentNode}}s=s.return}Au(function(){var u=o,m=Nl(r),p=[];e:{var f=i0.get(e);if(f!==void 0){var w=Pl,x=e;switch(e){case"keypress":if(Pa(r)===0)break e;case"keydown":case"keyup":w=rh;break;case"focusin":x="focus",w=Yo;break;case"focusout":x="blur",w=Yo;break;case"beforeblur":case"afterblur":w=Yo;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=Dc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=Qf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=oh;break;case r0:case s0:case a0:w=Hf;break;case o0:w=lh;break;case"scroll":w=Yf;break;case"wheel":w=dh;break;case"copy":case"cut":case"paste":w=Xf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=Mc}var j=(t&4)!==0,S=!j&&e==="scroll",y=j?f!==null?f+"Capture":null:f;j=[];for(var g=u,v;g!==null;){v=g;var N=v.stateNode;if(v.tag===5&&N!==null&&(v=N,y!==null&&(N=Ts(g,y),N!=null&&j.push(Ds(g,N,v)))),S)break;g=g.return}0<j.length&&(f=new w(f,x,null,r,m),p.push({event:f,listeners:j}))}}if(!(t&7)){e:{if(f=e==="mouseover"||e==="pointerover",w=e==="mouseout"||e==="pointerout",f&&r!==Ti&&(x=r.relatedTarget||r.fromElement)&&(er(x)||x[xn]))break e;if((w||f)&&(f=m.window===m?m:(f=m.ownerDocument)?f.defaultView||f.parentWindow:window,w?(x=r.relatedTarget||r.toElement,w=u,x=x?er(x):null,x!==null&&(S=fr(x),x!==S||x.tag!==5&&x.tag!==6)&&(x=null)):(w=null,x=u),w!==x)){if(j=Dc,N="onMouseLeave",y="onMouseEnter",g="mouse",(e==="pointerout"||e==="pointerover")&&(j=Mc,N="onPointerLeave",y="onPointerEnter",g="pointer"),S=w==null?f:jr(w),v=x==null?f:jr(x),f=new j(N,g+"leave",w,r,m),f.target=S,f.relatedTarget=v,N=null,er(m)===u&&(j=new j(y,g+"enter",x,r,m),j.target=v,j.relatedTarget=S,N=j),S=N,w&&x)t:{for(j=w,y=x,g=0,v=j;v;v=pr(v))g++;for(v=0,N=y;N;N=pr(N))v++;for(;0<g-v;)j=pr(j),g--;for(;0<v-g;)y=pr(y),v--;for(;g--;){if(j===y||y!==null&&j===y.alternate)break t;j=pr(j),y=pr(y)}j=null}else j=null;w!==null&&Hc(p,f,w,j,!1),x!==null&&S!==null&&Hc(p,S,x,j,!0)}}e:{if(f=u?jr(u):window,w=f.nodeName&&f.nodeName.toLowerCase(),w==="select"||w==="input"&&f.type==="file")var C=gh;else if($c(f))if(Ju)C=wh;else{C=yh;var R=vh}else(w=f.nodeName)&&w.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(C=bh);if(C&&(C=C(e,u))){Vu(p,C,r,m);break e}R&&R(e,f,u),e==="focusout"&&(R=f._wrapperState)&&R.controlled&&f.type==="number"&&Ni(f,"number",f.value)}switch(R=u?jr(u):window,e){case"focusin":($c(R)||R.contentEditable==="true")&&(br=R,Di=u,bs=null);break;case"focusout":bs=Di=br=null;break;case"mousedown":zi=!0;break;case"contextmenu":case"mouseup":case"dragend":zi=!1,Qc(p,r,m);break;case"selectionchange":if(kh)break;case"keydown":case"keyup":Qc(p,r,m)}var E;if(_l)e:{switch(e){case"compositionstart":var h="onCompositionStart";break e;case"compositionend":h="onCompositionEnd";break e;case"compositionupdate":h="onCompositionUpdate";break e}h=void 0}else yr?Ku(e,r)&&(h="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(h="onCompositionStart");h&&(Hu&&r.locale!=="ko"&&(yr||h!=="onCompositionStart"?h==="onCompositionEnd"&&yr&&(E=Wu()):(An=m,Tl="value"in An?An.value:An.textContent,yr=!0)),R=Ha(u,h),0<R.length&&(h=new zc(h,e,null,r,m),p.push({event:h,listeners:R}),E?h.data=E:(E=Xu(r),E!==null&&(h.data=E)))),(E=mh?fh(e,r):hh(e,r))&&(u=Ha(u,"onBeforeInput"),0<u.length&&(m=new zc("onBeforeInput","beforeinput",null,r,m),p.push({event:m,listeners:u}),m.data=E))}l0(p,t)})}function Ds(e,t,r){return{instance:e,listener:t,currentTarget:r}}function Ha(e,t){for(var r=t+"Capture",s=[];e!==null;){var a=e,o=a.stateNode;a.tag===5&&o!==null&&(a=o,o=Ts(e,r),o!=null&&s.unshift(Ds(e,o,a)),o=Ts(e,t),o!=null&&s.push(Ds(e,o,a))),e=e.return}return s}function pr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Hc(e,t,r,s,a){for(var o=t._reactName,i=[];r!==null&&r!==s;){var l=r,c=l.alternate,u=l.stateNode;if(c!==null&&c===s)break;l.tag===5&&u!==null&&(l=u,a?(c=Ts(r,o),c!=null&&i.unshift(Ds(r,c,l))):a||(c=Ts(r,o),c!=null&&i.push(Ds(r,c,l)))),r=r.return}i.length!==0&&e.push({event:t,listeners:i})}var Th=/\r\n?/g,Ph=/\u0000|\uFFFD/g;function Kc(e){return(typeof e=="string"?e:""+e).replace(Th,`
`).replace(Ph,"")}function la(e,t,r){if(t=Kc(t),Kc(e)!==t&&r)throw Error(re(425))}function Ka(){}var Mi=null,Oi=null;function Fi(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var $i=typeof setTimeout=="function"?setTimeout:void 0,Rh=typeof clearTimeout=="function"?clearTimeout:void 0,Xc=typeof Promise=="function"?Promise:void 0,_h=typeof queueMicrotask=="function"?queueMicrotask:typeof Xc<"u"?function(e){return Xc.resolve(null).then(e).catch(Ah)}:$i;function Ah(e){setTimeout(function(){throw e})}function Vo(e,t){var r=t,s=0;do{var a=r.nextSibling;if(e.removeChild(r),a&&a.nodeType===8)if(r=a.data,r==="/$"){if(s===0){e.removeChild(a),_s(t);return}s--}else r!=="$"&&r!=="$?"&&r!=="$!"||s++;r=a}while(r);_s(t)}function Fn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Vc(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var Qr=Math.random().toString(36).slice(2),rn="__reactFiber$"+Qr,zs="__reactProps$"+Qr,xn="__reactContainer$"+Qr,Bi="__reactEvents$"+Qr,Ih="__reactListeners$"+Qr,Lh="__reactHandles$"+Qr;function er(e){var t=e[rn];if(t)return t;for(var r=e.parentNode;r;){if(t=r[xn]||r[rn]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=Vc(e);e!==null;){if(r=e[rn])return r;e=Vc(e)}return t}e=r,r=e.parentNode}return null}function Ws(e){return e=e[rn]||e[xn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function jr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(re(33))}function yo(e){return e[zs]||null}var Ui=[],Nr=-1;function Hn(e){return{current:e}}function ze(e){0>Nr||(e.current=Ui[Nr],Ui[Nr]=null,Nr--)}function Ie(e,t){Nr++,Ui[Nr]=e.current,e.current=t}var Qn={},vt=Hn(Qn),Ct=Hn(!1),ir=Qn;function zr(e,t){var r=e.type.contextTypes;if(!r)return Qn;var s=e.stateNode;if(s&&s.__reactInternalMemoizedUnmaskedChildContext===t)return s.__reactInternalMemoizedMaskedChildContext;var a={},o;for(o in r)a[o]=t[o];return s&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=a),a}function Et(e){return e=e.childContextTypes,e!=null}function Xa(){ze(Ct),ze(vt)}function Jc(e,t,r){if(vt.current!==Qn)throw Error(re(168));Ie(vt,t),Ie(Ct,r)}function d0(e,t,r){var s=e.stateNode;if(t=t.childContextTypes,typeof s.getChildContext!="function")return r;s=s.getChildContext();for(var a in s)if(!(a in t))throw Error(re(108,vf(e)||"Unknown",a));return Qe({},r,s)}function Va(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Qn,ir=vt.current,Ie(vt,e),Ie(Ct,Ct.current),!0}function Zc(e,t,r){var s=e.stateNode;if(!s)throw Error(re(169));r?(e=d0(e,t,ir),s.__reactInternalMemoizedMergedChildContext=e,ze(Ct),ze(vt),Ie(vt,e)):ze(Ct),Ie(Ct,r)}var dn=null,bo=!1,Jo=!1;function u0(e){dn===null?dn=[e]:dn.push(e)}function Dh(e){bo=!0,u0(e)}function Kn(){if(!Jo&&dn!==null){Jo=!0;var e=0,t=Re;try{var r=dn;for(Re=1;e<r.length;e++){var s=r[e];do s=s(!0);while(s!==null)}dn=null,bo=!1}catch(a){throw dn!==null&&(dn=dn.slice(e+1)),zu(kl,Kn),a}finally{Re=t,Jo=!1}}return null}var kr=[],Sr=0,Ja=null,Za=0,Mt=[],Ot=0,lr=null,un=1,mn="";function Jn(e,t){kr[Sr++]=Za,kr[Sr++]=Ja,Ja=e,Za=t}function m0(e,t,r){Mt[Ot++]=un,Mt[Ot++]=mn,Mt[Ot++]=lr,lr=e;var s=un;e=mn;var a=32-Xt(s)-1;s&=~(1<<a),r+=1;var o=32-Xt(t)+a;if(30<o){var i=a-a%5;o=(s&(1<<i)-1).toString(32),s>>=i,a-=i,un=1<<32-Xt(t)+a|r<<a|s,mn=o+e}else un=1<<o|r<<a|s,mn=e}function Il(e){e.return!==null&&(Jn(e,1),m0(e,1,0))}function Ll(e){for(;e===Ja;)Ja=kr[--Sr],kr[Sr]=null,Za=kr[--Sr],kr[Sr]=null;for(;e===lr;)lr=Mt[--Ot],Mt[Ot]=null,mn=Mt[--Ot],Mt[Ot]=null,un=Mt[--Ot],Mt[Ot]=null}var It=null,At=null,Oe=!1,Kt=null;function f0(e,t){var r=Ft(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function ed(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,It=e,At=Fn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,It=e,At=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=lr!==null?{id:un,overflow:mn}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=Ft(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,It=e,At=null,!0):!1;default:return!1}}function Yi(e){return(e.mode&1)!==0&&(e.flags&128)===0}function qi(e){if(Oe){var t=At;if(t){var r=t;if(!ed(e,t)){if(Yi(e))throw Error(re(418));t=Fn(r.nextSibling);var s=It;t&&ed(e,t)?f0(s,r):(e.flags=e.flags&-4097|2,Oe=!1,It=e)}}else{if(Yi(e))throw Error(re(418));e.flags=e.flags&-4097|2,Oe=!1,It=e}}}function td(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;It=e}function ca(e){if(e!==It)return!1;if(!Oe)return td(e),Oe=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Fi(e.type,e.memoizedProps)),t&&(t=At)){if(Yi(e))throw h0(),Error(re(418));for(;t;)f0(e,t),t=Fn(t.nextSibling)}if(td(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(re(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){At=Fn(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}At=null}}else At=It?Fn(e.stateNode.nextSibling):null;return!0}function h0(){for(var e=At;e;)e=Fn(e.nextSibling)}function Mr(){At=It=null,Oe=!1}function Dl(e){Kt===null?Kt=[e]:Kt.push(e)}var zh=bn.ReactCurrentBatchConfig;function ss(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(re(309));var s=r.stateNode}if(!s)throw Error(re(147,e));var a=s,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(i){var l=a.refs;i===null?delete l[o]:l[o]=i},t._stringRef=o,t)}if(typeof e!="string")throw Error(re(284));if(!r._owner)throw Error(re(290,e))}return e}function da(e,t){throw e=Object.prototype.toString.call(t),Error(re(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function nd(e){var t=e._init;return t(e._payload)}function p0(e){function t(y,g){if(e){var v=y.deletions;v===null?(y.deletions=[g],y.flags|=16):v.push(g)}}function r(y,g){if(!e)return null;for(;g!==null;)t(y,g),g=g.sibling;return null}function s(y,g){for(y=new Map;g!==null;)g.key!==null?y.set(g.key,g):y.set(g.index,g),g=g.sibling;return y}function a(y,g){return y=Yn(y,g),y.index=0,y.sibling=null,y}function o(y,g,v){return y.index=v,e?(v=y.alternate,v!==null?(v=v.index,v<g?(y.flags|=2,g):v):(y.flags|=2,g)):(y.flags|=1048576,g)}function i(y){return e&&y.alternate===null&&(y.flags|=2),y}function l(y,g,v,N){return g===null||g.tag!==6?(g=ai(v,y.mode,N),g.return=y,g):(g=a(g,v),g.return=y,g)}function c(y,g,v,N){var C=v.type;return C===vr?m(y,g,v.props.children,N,v.key):g!==null&&(g.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===En&&nd(C)===g.type)?(N=a(g,v.props),N.ref=ss(y,g,v),N.return=y,N):(N=za(v.type,v.key,v.props,null,y.mode,N),N.ref=ss(y,g,v),N.return=y,N)}function u(y,g,v,N){return g===null||g.tag!==4||g.stateNode.containerInfo!==v.containerInfo||g.stateNode.implementation!==v.implementation?(g=oi(v,y.mode,N),g.return=y,g):(g=a(g,v.children||[]),g.return=y,g)}function m(y,g,v,N,C){return g===null||g.tag!==7?(g=or(v,y.mode,N,C),g.return=y,g):(g=a(g,v),g.return=y,g)}function p(y,g,v){if(typeof g=="string"&&g!==""||typeof g=="number")return g=ai(""+g,y.mode,v),g.return=y,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Zs:return v=za(g.type,g.key,g.props,null,y.mode,v),v.ref=ss(y,null,g),v.return=y,v;case gr:return g=oi(g,y.mode,v),g.return=y,g;case En:var N=g._init;return p(y,N(g._payload),v)}if(fs(g)||Zr(g))return g=or(g,y.mode,v,null),g.return=y,g;da(y,g)}return null}function f(y,g,v,N){var C=g!==null?g.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return C!==null?null:l(y,g,""+v,N);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Zs:return v.key===C?c(y,g,v,N):null;case gr:return v.key===C?u(y,g,v,N):null;case En:return C=v._init,f(y,g,C(v._payload),N)}if(fs(v)||Zr(v))return C!==null?null:m(y,g,v,N,null);da(y,v)}return null}function w(y,g,v,N,C){if(typeof N=="string"&&N!==""||typeof N=="number")return y=y.get(v)||null,l(g,y,""+N,C);if(typeof N=="object"&&N!==null){switch(N.$$typeof){case Zs:return y=y.get(N.key===null?v:N.key)||null,c(g,y,N,C);case gr:return y=y.get(N.key===null?v:N.key)||null,u(g,y,N,C);case En:var R=N._init;return w(y,g,v,R(N._payload),C)}if(fs(N)||Zr(N))return y=y.get(v)||null,m(g,y,N,C,null);da(g,N)}return null}function x(y,g,v,N){for(var C=null,R=null,E=g,h=g=0,b=null;E!==null&&h<v.length;h++){E.index>h?(b=E,E=null):b=E.sibling;var k=f(y,E,v[h],N);if(k===null){E===null&&(E=b);break}e&&E&&k.alternate===null&&t(y,E),g=o(k,g,h),R===null?C=k:R.sibling=k,R=k,E=b}if(h===v.length)return r(y,E),Oe&&Jn(y,h),C;if(E===null){for(;h<v.length;h++)E=p(y,v[h],N),E!==null&&(g=o(E,g,h),R===null?C=E:R.sibling=E,R=E);return Oe&&Jn(y,h),C}for(E=s(y,E);h<v.length;h++)b=w(E,y,h,v[h],N),b!==null&&(e&&b.alternate!==null&&E.delete(b.key===null?h:b.key),g=o(b,g,h),R===null?C=b:R.sibling=b,R=b);return e&&E.forEach(function(_){return t(y,_)}),Oe&&Jn(y,h),C}function j(y,g,v,N){var C=Zr(v);if(typeof C!="function")throw Error(re(150));if(v=C.call(v),v==null)throw Error(re(151));for(var R=C=null,E=g,h=g=0,b=null,k=v.next();E!==null&&!k.done;h++,k=v.next()){E.index>h?(b=E,E=null):b=E.sibling;var _=f(y,E,k.value,N);if(_===null){E===null&&(E=b);break}e&&E&&_.alternate===null&&t(y,E),g=o(_,g,h),R===null?C=_:R.sibling=_,R=_,E=b}if(k.done)return r(y,E),Oe&&Jn(y,h),C;if(E===null){for(;!k.done;h++,k=v.next())k=p(y,k.value,N),k!==null&&(g=o(k,g,h),R===null?C=k:R.sibling=k,R=k);return Oe&&Jn(y,h),C}for(E=s(y,E);!k.done;h++,k=v.next())k=w(E,y,h,k.value,N),k!==null&&(e&&k.alternate!==null&&E.delete(k.key===null?h:k.key),g=o(k,g,h),R===null?C=k:R.sibling=k,R=k);return e&&E.forEach(function(P){return t(y,P)}),Oe&&Jn(y,h),C}function S(y,g,v,N){if(typeof v=="object"&&v!==null&&v.type===vr&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case Zs:e:{for(var C=v.key,R=g;R!==null;){if(R.key===C){if(C=v.type,C===vr){if(R.tag===7){r(y,R.sibling),g=a(R,v.props.children),g.return=y,y=g;break e}}else if(R.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===En&&nd(C)===R.type){r(y,R.sibling),g=a(R,v.props),g.ref=ss(y,R,v),g.return=y,y=g;break e}r(y,R);break}else t(y,R);R=R.sibling}v.type===vr?(g=or(v.props.children,y.mode,N,v.key),g.return=y,y=g):(N=za(v.type,v.key,v.props,null,y.mode,N),N.ref=ss(y,g,v),N.return=y,y=N)}return i(y);case gr:e:{for(R=v.key;g!==null;){if(g.key===R)if(g.tag===4&&g.stateNode.containerInfo===v.containerInfo&&g.stateNode.implementation===v.implementation){r(y,g.sibling),g=a(g,v.children||[]),g.return=y,y=g;break e}else{r(y,g);break}else t(y,g);g=g.sibling}g=oi(v,y.mode,N),g.return=y,y=g}return i(y);case En:return R=v._init,S(y,g,R(v._payload),N)}if(fs(v))return x(y,g,v,N);if(Zr(v))return j(y,g,v,N);da(y,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,g!==null&&g.tag===6?(r(y,g.sibling),g=a(g,v),g.return=y,y=g):(r(y,g),g=ai(v,y.mode,N),g.return=y,y=g),i(y)):r(y,g)}return S}var Or=p0(!0),x0=p0(!1),eo=Hn(null),to=null,Cr=null,zl=null;function Ml(){zl=Cr=to=null}function Ol(e){var t=eo.current;ze(eo),e._currentValue=t}function Qi(e,t,r){for(;e!==null;){var s=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,s!==null&&(s.childLanes|=t)):s!==null&&(s.childLanes&t)!==t&&(s.childLanes|=t),e===r)break;e=e.return}}function Ir(e,t){to=e,zl=Cr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(St=!0),e.firstContext=null)}function Bt(e){var t=e._currentValue;if(zl!==e)if(e={context:e,memoizedValue:t,next:null},Cr===null){if(to===null)throw Error(re(308));Cr=e,to.dependencies={lanes:0,firstContext:e}}else Cr=Cr.next=e;return t}var tr=null;function Fl(e){tr===null?tr=[e]:tr.push(e)}function g0(e,t,r,s){var a=t.interleaved;return a===null?(r.next=r,Fl(t)):(r.next=a.next,a.next=r),t.interleaved=r,gn(e,s)}function gn(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}var Tn=!1;function $l(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function v0(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function fn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function $n(e,t,r){var s=e.updateQueue;if(s===null)return null;if(s=s.shared,be&2){var a=s.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),s.pending=t,gn(e,r)}return a=s.interleaved,a===null?(t.next=t,Fl(s)):(t.next=a.next,a.next=t),s.interleaved=t,gn(e,r)}function Ra(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var s=t.lanes;s&=e.pendingLanes,r|=s,t.lanes=r,Sl(e,r)}}function rd(e,t){var r=e.updateQueue,s=e.alternate;if(s!==null&&(s=s.updateQueue,r===s)){var a=null,o=null;if(r=r.firstBaseUpdate,r!==null){do{var i={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};o===null?a=o=i:o=o.next=i,r=r.next}while(r!==null);o===null?a=o=t:o=o.next=t}else a=o=t;r={baseState:s.baseState,firstBaseUpdate:a,lastBaseUpdate:o,shared:s.shared,effects:s.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function no(e,t,r,s){var a=e.updateQueue;Tn=!1;var o=a.firstBaseUpdate,i=a.lastBaseUpdate,l=a.shared.pending;if(l!==null){a.shared.pending=null;var c=l,u=c.next;c.next=null,i===null?o=u:i.next=u,i=c;var m=e.alternate;m!==null&&(m=m.updateQueue,l=m.lastBaseUpdate,l!==i&&(l===null?m.firstBaseUpdate=u:l.next=u,m.lastBaseUpdate=c))}if(o!==null){var p=a.baseState;i=0,m=u=c=null,l=o;do{var f=l.lane,w=l.eventTime;if((s&f)===f){m!==null&&(m=m.next={eventTime:w,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var x=e,j=l;switch(f=t,w=r,j.tag){case 1:if(x=j.payload,typeof x=="function"){p=x.call(w,p,f);break e}p=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=j.payload,f=typeof x=="function"?x.call(w,p,f):x,f==null)break e;p=Qe({},p,f);break e;case 2:Tn=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,f=a.effects,f===null?a.effects=[l]:f.push(l))}else w={eventTime:w,lane:f,tag:l.tag,payload:l.payload,callback:l.callback,next:null},m===null?(u=m=w,c=p):m=m.next=w,i|=f;if(l=l.next,l===null){if(l=a.shared.pending,l===null)break;f=l,l=f.next,f.next=null,a.lastBaseUpdate=f,a.shared.pending=null}}while(1);if(m===null&&(c=p),a.baseState=c,a.firstBaseUpdate=u,a.lastBaseUpdate=m,t=a.shared.interleaved,t!==null){a=t;do i|=a.lane,a=a.next;while(a!==t)}else o===null&&(a.shared.lanes=0);dr|=i,e.lanes=i,e.memoizedState=p}}function sd(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var s=e[t],a=s.callback;if(a!==null){if(s.callback=null,s=r,typeof a!="function")throw Error(re(191,a));a.call(s)}}}var Hs={},an=Hn(Hs),Ms=Hn(Hs),Os=Hn(Hs);function nr(e){if(e===Hs)throw Error(re(174));return e}function Bl(e,t){switch(Ie(Os,t),Ie(Ms,e),Ie(an,Hs),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Si(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Si(t,e)}ze(an),Ie(an,t)}function Fr(){ze(an),ze(Ms),ze(Os)}function y0(e){nr(Os.current);var t=nr(an.current),r=Si(t,e.type);t!==r&&(Ie(Ms,e),Ie(an,r))}function Ul(e){Ms.current===e&&(ze(an),ze(Ms))}var Ye=Hn(0);function ro(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Zo=[];function Yl(){for(var e=0;e<Zo.length;e++)Zo[e]._workInProgressVersionPrimary=null;Zo.length=0}var _a=bn.ReactCurrentDispatcher,ei=bn.ReactCurrentBatchConfig,cr=0,qe=null,nt=null,ot=null,so=!1,ws=!1,Fs=0,Mh=0;function ht(){throw Error(re(321))}function ql(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!Jt(e[r],t[r]))return!1;return!0}function Ql(e,t,r,s,a,o){if(cr=o,qe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,_a.current=e===null||e.memoizedState===null?Bh:Uh,e=r(s,a),ws){o=0;do{if(ws=!1,Fs=0,25<=o)throw Error(re(301));o+=1,ot=nt=null,t.updateQueue=null,_a.current=Yh,e=r(s,a)}while(ws)}if(_a.current=ao,t=nt!==null&&nt.next!==null,cr=0,ot=nt=qe=null,so=!1,t)throw Error(re(300));return e}function Gl(){var e=Fs!==0;return Fs=0,e}function nn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ot===null?qe.memoizedState=ot=e:ot=ot.next=e,ot}function Ut(){if(nt===null){var e=qe.alternate;e=e!==null?e.memoizedState:null}else e=nt.next;var t=ot===null?qe.memoizedState:ot.next;if(t!==null)ot=t,nt=e;else{if(e===null)throw Error(re(310));nt=e,e={memoizedState:nt.memoizedState,baseState:nt.baseState,baseQueue:nt.baseQueue,queue:nt.queue,next:null},ot===null?qe.memoizedState=ot=e:ot=ot.next=e}return ot}function $s(e,t){return typeof t=="function"?t(e):t}function ti(e){var t=Ut(),r=t.queue;if(r===null)throw Error(re(311));r.lastRenderedReducer=e;var s=nt,a=s.baseQueue,o=r.pending;if(o!==null){if(a!==null){var i=a.next;a.next=o.next,o.next=i}s.baseQueue=a=o,r.pending=null}if(a!==null){o=a.next,s=s.baseState;var l=i=null,c=null,u=o;do{var m=u.lane;if((cr&m)===m)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),s=u.hasEagerState?u.eagerState:e(s,u.action);else{var p={lane:m,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(l=c=p,i=s):c=c.next=p,qe.lanes|=m,dr|=m}u=u.next}while(u!==null&&u!==o);c===null?i=s:c.next=l,Jt(s,t.memoizedState)||(St=!0),t.memoizedState=s,t.baseState=i,t.baseQueue=c,r.lastRenderedState=s}if(e=r.interleaved,e!==null){a=e;do o=a.lane,qe.lanes|=o,dr|=o,a=a.next;while(a!==e)}else a===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function ni(e){var t=Ut(),r=t.queue;if(r===null)throw Error(re(311));r.lastRenderedReducer=e;var s=r.dispatch,a=r.pending,o=t.memoizedState;if(a!==null){r.pending=null;var i=a=a.next;do o=e(o,i.action),i=i.next;while(i!==a);Jt(o,t.memoizedState)||(St=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),r.lastRenderedState=o}return[o,s]}function b0(){}function w0(e,t){var r=qe,s=Ut(),a=t(),o=!Jt(s.memoizedState,a);if(o&&(s.memoizedState=a,St=!0),s=s.queue,Wl(k0.bind(null,r,s,e),[e]),s.getSnapshot!==t||o||ot!==null&&ot.memoizedState.tag&1){if(r.flags|=2048,Bs(9,N0.bind(null,r,s,a,t),void 0,null),it===null)throw Error(re(349));cr&30||j0(r,t,a)}return a}function j0(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=qe.updateQueue,t===null?(t={lastEffect:null,stores:null},qe.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function N0(e,t,r,s){t.value=r,t.getSnapshot=s,S0(t)&&C0(e)}function k0(e,t,r){return r(function(){S0(t)&&C0(e)})}function S0(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!Jt(e,r)}catch{return!0}}function C0(e){var t=gn(e,1);t!==null&&Vt(t,e,1,-1)}function ad(e){var t=nn();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:$s,lastRenderedState:e},t.queue=e,e=e.dispatch=$h.bind(null,qe,e),[t.memoizedState,e]}function Bs(e,t,r,s){return e={tag:e,create:t,destroy:r,deps:s,next:null},t=qe.updateQueue,t===null?(t={lastEffect:null,stores:null},qe.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(s=r.next,r.next=e,e.next=s,t.lastEffect=e)),e}function E0(){return Ut().memoizedState}function Aa(e,t,r,s){var a=nn();qe.flags|=e,a.memoizedState=Bs(1|t,r,void 0,s===void 0?null:s)}function wo(e,t,r,s){var a=Ut();s=s===void 0?null:s;var o=void 0;if(nt!==null){var i=nt.memoizedState;if(o=i.destroy,s!==null&&ql(s,i.deps)){a.memoizedState=Bs(t,r,o,s);return}}qe.flags|=e,a.memoizedState=Bs(1|t,r,o,s)}function od(e,t){return Aa(8390656,8,e,t)}function Wl(e,t){return wo(2048,8,e,t)}function T0(e,t){return wo(4,2,e,t)}function P0(e,t){return wo(4,4,e,t)}function R0(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function _0(e,t,r){return r=r!=null?r.concat([e]):null,wo(4,4,R0.bind(null,t,e),r)}function Hl(){}function A0(e,t){var r=Ut();t=t===void 0?null:t;var s=r.memoizedState;return s!==null&&t!==null&&ql(t,s[1])?s[0]:(r.memoizedState=[e,t],e)}function I0(e,t){var r=Ut();t=t===void 0?null:t;var s=r.memoizedState;return s!==null&&t!==null&&ql(t,s[1])?s[0]:(e=e(),r.memoizedState=[e,t],e)}function L0(e,t,r){return cr&21?(Jt(r,t)||(r=Fu(),qe.lanes|=r,dr|=r,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,St=!0),e.memoizedState=r)}function Oh(e,t){var r=Re;Re=r!==0&&4>r?r:4,e(!0);var s=ei.transition;ei.transition={};try{e(!1),t()}finally{Re=r,ei.transition=s}}function D0(){return Ut().memoizedState}function Fh(e,t,r){var s=Un(e);if(r={lane:s,action:r,hasEagerState:!1,eagerState:null,next:null},z0(e))M0(t,r);else if(r=g0(e,t,r,s),r!==null){var a=wt();Vt(r,e,s,a),O0(r,t,s)}}function $h(e,t,r){var s=Un(e),a={lane:s,action:r,hasEagerState:!1,eagerState:null,next:null};if(z0(e))M0(t,a);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var i=t.lastRenderedState,l=o(i,r);if(a.hasEagerState=!0,a.eagerState=l,Jt(l,i)){var c=t.interleaved;c===null?(a.next=a,Fl(t)):(a.next=c.next,c.next=a),t.interleaved=a;return}}catch{}finally{}r=g0(e,t,a,s),r!==null&&(a=wt(),Vt(r,e,s,a),O0(r,t,s))}}function z0(e){var t=e.alternate;return e===qe||t!==null&&t===qe}function M0(e,t){ws=so=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function O0(e,t,r){if(r&4194240){var s=t.lanes;s&=e.pendingLanes,r|=s,t.lanes=r,Sl(e,r)}}var ao={readContext:Bt,useCallback:ht,useContext:ht,useEffect:ht,useImperativeHandle:ht,useInsertionEffect:ht,useLayoutEffect:ht,useMemo:ht,useReducer:ht,useRef:ht,useState:ht,useDebugValue:ht,useDeferredValue:ht,useTransition:ht,useMutableSource:ht,useSyncExternalStore:ht,useId:ht,unstable_isNewReconciler:!1},Bh={readContext:Bt,useCallback:function(e,t){return nn().memoizedState=[e,t===void 0?null:t],e},useContext:Bt,useEffect:od,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,Aa(4194308,4,R0.bind(null,t,e),r)},useLayoutEffect:function(e,t){return Aa(4194308,4,e,t)},useInsertionEffect:function(e,t){return Aa(4,2,e,t)},useMemo:function(e,t){var r=nn();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var s=nn();return t=r!==void 0?r(t):t,s.memoizedState=s.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},s.queue=e,e=e.dispatch=Fh.bind(null,qe,e),[s.memoizedState,e]},useRef:function(e){var t=nn();return e={current:e},t.memoizedState=e},useState:ad,useDebugValue:Hl,useDeferredValue:function(e){return nn().memoizedState=e},useTransition:function(){var e=ad(!1),t=e[0];return e=Oh.bind(null,e[1]),nn().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var s=qe,a=nn();if(Oe){if(r===void 0)throw Error(re(407));r=r()}else{if(r=t(),it===null)throw Error(re(349));cr&30||j0(s,t,r)}a.memoizedState=r;var o={value:r,getSnapshot:t};return a.queue=o,od(k0.bind(null,s,o,e),[e]),s.flags|=2048,Bs(9,N0.bind(null,s,o,r,t),void 0,null),r},useId:function(){var e=nn(),t=it.identifierPrefix;if(Oe){var r=mn,s=un;r=(s&~(1<<32-Xt(s)-1)).toString(32)+r,t=":"+t+"R"+r,r=Fs++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=Mh++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Uh={readContext:Bt,useCallback:A0,useContext:Bt,useEffect:Wl,useImperativeHandle:_0,useInsertionEffect:T0,useLayoutEffect:P0,useMemo:I0,useReducer:ti,useRef:E0,useState:function(){return ti($s)},useDebugValue:Hl,useDeferredValue:function(e){var t=Ut();return L0(t,nt.memoizedState,e)},useTransition:function(){var e=ti($s)[0],t=Ut().memoizedState;return[e,t]},useMutableSource:b0,useSyncExternalStore:w0,useId:D0,unstable_isNewReconciler:!1},Yh={readContext:Bt,useCallback:A0,useContext:Bt,useEffect:Wl,useImperativeHandle:_0,useInsertionEffect:T0,useLayoutEffect:P0,useMemo:I0,useReducer:ni,useRef:E0,useState:function(){return ni($s)},useDebugValue:Hl,useDeferredValue:function(e){var t=Ut();return nt===null?t.memoizedState=e:L0(t,nt.memoizedState,e)},useTransition:function(){var e=ni($s)[0],t=Ut().memoizedState;return[e,t]},useMutableSource:b0,useSyncExternalStore:w0,useId:D0,unstable_isNewReconciler:!1};function Gt(e,t){if(e&&e.defaultProps){t=Qe({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}function Gi(e,t,r,s){t=e.memoizedState,r=r(s,t),r=r==null?t:Qe({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var jo={isMounted:function(e){return(e=e._reactInternals)?fr(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var s=wt(),a=Un(e),o=fn(s,a);o.payload=t,r!=null&&(o.callback=r),t=$n(e,o,a),t!==null&&(Vt(t,e,a,s),Ra(t,e,a))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var s=wt(),a=Un(e),o=fn(s,a);o.tag=1,o.payload=t,r!=null&&(o.callback=r),t=$n(e,o,a),t!==null&&(Vt(t,e,a,s),Ra(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=wt(),s=Un(e),a=fn(r,s);a.tag=2,t!=null&&(a.callback=t),t=$n(e,a,s),t!==null&&(Vt(t,e,s,r),Ra(t,e,s))}};function id(e,t,r,s,a,o,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(s,o,i):t.prototype&&t.prototype.isPureReactComponent?!Is(r,s)||!Is(a,o):!0}function F0(e,t,r){var s=!1,a=Qn,o=t.contextType;return typeof o=="object"&&o!==null?o=Bt(o):(a=Et(t)?ir:vt.current,s=t.contextTypes,o=(s=s!=null)?zr(e,a):Qn),t=new t(r,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=jo,e.stateNode=t,t._reactInternals=e,s&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=o),t}function ld(e,t,r,s){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,s),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,s),t.state!==e&&jo.enqueueReplaceState(t,t.state,null)}function Wi(e,t,r,s){var a=e.stateNode;a.props=r,a.state=e.memoizedState,a.refs={},$l(e);var o=t.contextType;typeof o=="object"&&o!==null?a.context=Bt(o):(o=Et(t)?ir:vt.current,a.context=zr(e,o)),a.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Gi(e,t,o,r),a.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(t=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),t!==a.state&&jo.enqueueReplaceState(a,a.state,null),no(e,r,a,s),a.state=e.memoizedState),typeof a.componentDidMount=="function"&&(e.flags|=4194308)}function $r(e,t){try{var r="",s=t;do r+=gf(s),s=s.return;while(s);var a=r}catch(o){a=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:a,digest:null}}function ri(e,t,r){return{value:e,source:null,stack:r??null,digest:t??null}}function Hi(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var qh=typeof WeakMap=="function"?WeakMap:Map;function $0(e,t,r){r=fn(-1,r),r.tag=3,r.payload={element:null};var s=t.value;return r.callback=function(){io||(io=!0,sl=s),Hi(e,t)},r}function B0(e,t,r){r=fn(-1,r),r.tag=3;var s=e.type.getDerivedStateFromError;if(typeof s=="function"){var a=t.value;r.payload=function(){return s(a)},r.callback=function(){Hi(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(r.callback=function(){Hi(e,t),typeof s!="function"&&(Bn===null?Bn=new Set([this]):Bn.add(this));var i=t.stack;this.componentDidCatch(t.value,{componentStack:i!==null?i:""})}),r}function cd(e,t,r){var s=e.pingCache;if(s===null){s=e.pingCache=new qh;var a=new Set;s.set(t,a)}else a=s.get(t),a===void 0&&(a=new Set,s.set(t,a));a.has(r)||(a.add(r),e=sp.bind(null,e,t,r),t.then(e,e))}function dd(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function ud(e,t,r,s,a){return e.mode&1?(e.flags|=65536,e.lanes=a,e):(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=fn(-1,1),t.tag=2,$n(r,t,1))),r.lanes|=1),e)}var Qh=bn.ReactCurrentOwner,St=!1;function bt(e,t,r,s){t.child=e===null?x0(t,null,r,s):Or(t,e.child,r,s)}function md(e,t,r,s,a){r=r.render;var o=t.ref;return Ir(t,a),s=Ql(e,t,r,s,o,a),r=Gl(),e!==null&&!St?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,vn(e,t,a)):(Oe&&r&&Il(t),t.flags|=1,bt(e,t,s,a),t.child)}function fd(e,t,r,s,a){if(e===null){var o=r.type;return typeof o=="function"&&!nc(o)&&o.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=o,U0(e,t,o,s,a)):(e=za(r.type,null,s,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&a)){var i=o.memoizedProps;if(r=r.compare,r=r!==null?r:Is,r(i,s)&&e.ref===t.ref)return vn(e,t,a)}return t.flags|=1,e=Yn(o,s),e.ref=t.ref,e.return=t,t.child=e}function U0(e,t,r,s,a){if(e!==null){var o=e.memoizedProps;if(Is(o,s)&&e.ref===t.ref)if(St=!1,t.pendingProps=s=o,(e.lanes&a)!==0)e.flags&131072&&(St=!0);else return t.lanes=e.lanes,vn(e,t,a)}return Ki(e,t,r,s,a)}function Y0(e,t,r){var s=t.pendingProps,a=s.children,o=e!==null?e.memoizedState:null;if(s.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ie(Tr,_t),_t|=r;else{if(!(r&1073741824))return e=o!==null?o.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Ie(Tr,_t),_t|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},s=o!==null?o.baseLanes:r,Ie(Tr,_t),_t|=s}else o!==null?(s=o.baseLanes|r,t.memoizedState=null):s=r,Ie(Tr,_t),_t|=s;return bt(e,t,a,r),t.child}function q0(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function Ki(e,t,r,s,a){var o=Et(r)?ir:vt.current;return o=zr(t,o),Ir(t,a),r=Ql(e,t,r,s,o,a),s=Gl(),e!==null&&!St?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,vn(e,t,a)):(Oe&&s&&Il(t),t.flags|=1,bt(e,t,r,a),t.child)}function hd(e,t,r,s,a){if(Et(r)){var o=!0;Va(t)}else o=!1;if(Ir(t,a),t.stateNode===null)Ia(e,t),F0(t,r,s),Wi(t,r,s,a),s=!0;else if(e===null){var i=t.stateNode,l=t.memoizedProps;i.props=l;var c=i.context,u=r.contextType;typeof u=="object"&&u!==null?u=Bt(u):(u=Et(r)?ir:vt.current,u=zr(t,u));var m=r.getDerivedStateFromProps,p=typeof m=="function"||typeof i.getSnapshotBeforeUpdate=="function";p||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(l!==s||c!==u)&&ld(t,i,s,u),Tn=!1;var f=t.memoizedState;i.state=f,no(t,s,i,a),c=t.memoizedState,l!==s||f!==c||Ct.current||Tn?(typeof m=="function"&&(Gi(t,r,m,s),c=t.memoizedState),(l=Tn||id(t,r,l,s,f,c,u))?(p||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=s,t.memoizedState=c),i.props=s,i.state=c,i.context=u,s=l):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),s=!1)}else{i=t.stateNode,v0(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:Gt(t.type,l),i.props=u,p=t.pendingProps,f=i.context,c=r.contextType,typeof c=="object"&&c!==null?c=Bt(c):(c=Et(r)?ir:vt.current,c=zr(t,c));var w=r.getDerivedStateFromProps;(m=typeof w=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(l!==p||f!==c)&&ld(t,i,s,c),Tn=!1,f=t.memoizedState,i.state=f,no(t,s,i,a);var x=t.memoizedState;l!==p||f!==x||Ct.current||Tn?(typeof w=="function"&&(Gi(t,r,w,s),x=t.memoizedState),(u=Tn||id(t,r,u,s,f,x,c)||!1)?(m||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(s,x,c),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(s,x,c)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=s,t.memoizedState=x),i.props=s,i.state=x,i.context=c,s=u):(typeof i.componentDidUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),s=!1)}return Xi(e,t,r,s,o,a)}function Xi(e,t,r,s,a,o){q0(e,t);var i=(t.flags&128)!==0;if(!s&&!i)return a&&Zc(t,r,!1),vn(e,t,o);s=t.stateNode,Qh.current=t;var l=i&&typeof r.getDerivedStateFromError!="function"?null:s.render();return t.flags|=1,e!==null&&i?(t.child=Or(t,e.child,null,o),t.child=Or(t,null,l,o)):bt(e,t,l,o),t.memoizedState=s.state,a&&Zc(t,r,!0),t.child}function Q0(e){var t=e.stateNode;t.pendingContext?Jc(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Jc(e,t.context,!1),Bl(e,t.containerInfo)}function pd(e,t,r,s,a){return Mr(),Dl(a),t.flags|=256,bt(e,t,r,s),t.child}var Vi={dehydrated:null,treeContext:null,retryLane:0};function Ji(e){return{baseLanes:e,cachePool:null,transitions:null}}function G0(e,t,r){var s=t.pendingProps,a=Ye.current,o=!1,i=(t.flags&128)!==0,l;if((l=i)||(l=e!==null&&e.memoizedState===null?!1:(a&2)!==0),l?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(a|=1),Ie(Ye,a&1),e===null)return qi(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(i=s.children,e=s.fallback,o?(s=t.mode,o=t.child,i={mode:"hidden",children:i},!(s&1)&&o!==null?(o.childLanes=0,o.pendingProps=i):o=So(i,s,0,null),e=or(e,s,r,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Ji(r),t.memoizedState=Vi,e):Kl(t,i));if(a=e.memoizedState,a!==null&&(l=a.dehydrated,l!==null))return Gh(e,t,i,s,l,a,r);if(o){o=s.fallback,i=t.mode,a=e.child,l=a.sibling;var c={mode:"hidden",children:s.children};return!(i&1)&&t.child!==a?(s=t.child,s.childLanes=0,s.pendingProps=c,t.deletions=null):(s=Yn(a,c),s.subtreeFlags=a.subtreeFlags&14680064),l!==null?o=Yn(l,o):(o=or(o,i,r,null),o.flags|=2),o.return=t,s.return=t,s.sibling=o,t.child=s,s=o,o=t.child,i=e.child.memoizedState,i=i===null?Ji(r):{baseLanes:i.baseLanes|r,cachePool:null,transitions:i.transitions},o.memoizedState=i,o.childLanes=e.childLanes&~r,t.memoizedState=Vi,s}return o=e.child,e=o.sibling,s=Yn(o,{mode:"visible",children:s.children}),!(t.mode&1)&&(s.lanes=r),s.return=t,s.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=s,t.memoizedState=null,s}function Kl(e,t){return t=So({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ua(e,t,r,s){return s!==null&&Dl(s),Or(t,e.child,null,r),e=Kl(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Gh(e,t,r,s,a,o,i){if(r)return t.flags&256?(t.flags&=-257,s=ri(Error(re(422))),ua(e,t,i,s)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=s.fallback,a=t.mode,s=So({mode:"visible",children:s.children},a,0,null),o=or(o,a,i,null),o.flags|=2,s.return=t,o.return=t,s.sibling=o,t.child=s,t.mode&1&&Or(t,e.child,null,i),t.child.memoizedState=Ji(i),t.memoizedState=Vi,o);if(!(t.mode&1))return ua(e,t,i,null);if(a.data==="$!"){if(s=a.nextSibling&&a.nextSibling.dataset,s)var l=s.dgst;return s=l,o=Error(re(419)),s=ri(o,s,void 0),ua(e,t,i,s)}if(l=(i&e.childLanes)!==0,St||l){if(s=it,s!==null){switch(i&-i){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=a&(s.suspendedLanes|i)?0:a,a!==0&&a!==o.retryLane&&(o.retryLane=a,gn(e,a),Vt(s,e,a,-1))}return tc(),s=ri(Error(re(421))),ua(e,t,i,s)}return a.data==="$?"?(t.flags|=128,t.child=e.child,t=ap.bind(null,e),a._reactRetry=t,null):(e=o.treeContext,At=Fn(a.nextSibling),It=t,Oe=!0,Kt=null,e!==null&&(Mt[Ot++]=un,Mt[Ot++]=mn,Mt[Ot++]=lr,un=e.id,mn=e.overflow,lr=t),t=Kl(t,s.children),t.flags|=4096,t)}function xd(e,t,r){e.lanes|=t;var s=e.alternate;s!==null&&(s.lanes|=t),Qi(e.return,t,r)}function si(e,t,r,s,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:s,tail:r,tailMode:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=s,o.tail=r,o.tailMode=a)}function W0(e,t,r){var s=t.pendingProps,a=s.revealOrder,o=s.tail;if(bt(e,t,s.children,r),s=Ye.current,s&2)s=s&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&xd(e,r,t);else if(e.tag===19)xd(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}s&=1}if(Ie(Ye,s),!(t.mode&1))t.memoizedState=null;else switch(a){case"forwards":for(r=t.child,a=null;r!==null;)e=r.alternate,e!==null&&ro(e)===null&&(a=r),r=r.sibling;r=a,r===null?(a=t.child,t.child=null):(a=r.sibling,r.sibling=null),si(t,!1,a,r,o);break;case"backwards":for(r=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&ro(e)===null){t.child=a;break}e=a.sibling,a.sibling=r,r=a,a=e}si(t,!0,r,null,o);break;case"together":si(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ia(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function vn(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),dr|=t.lanes,!(r&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(re(153));if(t.child!==null){for(e=t.child,r=Yn(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=Yn(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function Wh(e,t,r){switch(t.tag){case 3:Q0(t),Mr();break;case 5:y0(t);break;case 1:Et(t.type)&&Va(t);break;case 4:Bl(t,t.stateNode.containerInfo);break;case 10:var s=t.type._context,a=t.memoizedProps.value;Ie(eo,s._currentValue),s._currentValue=a;break;case 13:if(s=t.memoizedState,s!==null)return s.dehydrated!==null?(Ie(Ye,Ye.current&1),t.flags|=128,null):r&t.child.childLanes?G0(e,t,r):(Ie(Ye,Ye.current&1),e=vn(e,t,r),e!==null?e.sibling:null);Ie(Ye,Ye.current&1);break;case 19:if(s=(r&t.childLanes)!==0,e.flags&128){if(s)return W0(e,t,r);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),Ie(Ye,Ye.current),s)break;return null;case 22:case 23:return t.lanes=0,Y0(e,t,r)}return vn(e,t,r)}var H0,Zi,K0,X0;H0=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}};Zi=function(){};K0=function(e,t,r,s){var a=e.memoizedProps;if(a!==s){e=t.stateNode,nr(an.current);var o=null;switch(r){case"input":a=wi(e,a),s=wi(e,s),o=[];break;case"select":a=Qe({},a,{value:void 0}),s=Qe({},s,{value:void 0}),o=[];break;case"textarea":a=ki(e,a),s=ki(e,s),o=[];break;default:typeof a.onClick!="function"&&typeof s.onClick=="function"&&(e.onclick=Ka)}Ci(r,s);var i;r=null;for(u in a)if(!s.hasOwnProperty(u)&&a.hasOwnProperty(u)&&a[u]!=null)if(u==="style"){var l=a[u];for(i in l)l.hasOwnProperty(i)&&(r||(r={}),r[i]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Cs.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in s){var c=s[u];if(l=a!=null?a[u]:void 0,s.hasOwnProperty(u)&&c!==l&&(c!=null||l!=null))if(u==="style")if(l){for(i in l)!l.hasOwnProperty(i)||c&&c.hasOwnProperty(i)||(r||(r={}),r[i]="");for(i in c)c.hasOwnProperty(i)&&l[i]!==c[i]&&(r||(r={}),r[i]=c[i])}else r||(o||(o=[]),o.push(u,r)),r=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,l=l?l.__html:void 0,c!=null&&l!==c&&(o=o||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(o=o||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Cs.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&Le("scroll",e),o||l===c||(o=[])):(o=o||[]).push(u,c))}r&&(o=o||[]).push("style",r);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};X0=function(e,t,r,s){r!==s&&(t.flags|=4)};function as(e,t){if(!Oe)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var s=null;r!==null;)r.alternate!==null&&(s=r),r=r.sibling;s===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:s.sibling=null}}function pt(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,s=0;if(t)for(var a=e.child;a!==null;)r|=a.lanes|a.childLanes,s|=a.subtreeFlags&14680064,s|=a.flags&14680064,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)r|=a.lanes|a.childLanes,s|=a.subtreeFlags,s|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=s,e.childLanes=r,t}function Hh(e,t,r){var s=t.pendingProps;switch(Ll(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return pt(t),null;case 1:return Et(t.type)&&Xa(),pt(t),null;case 3:return s=t.stateNode,Fr(),ze(Ct),ze(vt),Yl(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(e===null||e.child===null)&&(ca(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Kt!==null&&(il(Kt),Kt=null))),Zi(e,t),pt(t),null;case 5:Ul(t);var a=nr(Os.current);if(r=t.type,e!==null&&t.stateNode!=null)K0(e,t,r,s,a),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!s){if(t.stateNode===null)throw Error(re(166));return pt(t),null}if(e=nr(an.current),ca(t)){s=t.stateNode,r=t.type;var o=t.memoizedProps;switch(s[rn]=t,s[zs]=o,e=(t.mode&1)!==0,r){case"dialog":Le("cancel",s),Le("close",s);break;case"iframe":case"object":case"embed":Le("load",s);break;case"video":case"audio":for(a=0;a<ps.length;a++)Le(ps[a],s);break;case"source":Le("error",s);break;case"img":case"image":case"link":Le("error",s),Le("load",s);break;case"details":Le("toggle",s);break;case"input":Sc(s,o),Le("invalid",s);break;case"select":s._wrapperState={wasMultiple:!!o.multiple},Le("invalid",s);break;case"textarea":Ec(s,o),Le("invalid",s)}Ci(r,o),a=null;for(var i in o)if(o.hasOwnProperty(i)){var l=o[i];i==="children"?typeof l=="string"?s.textContent!==l&&(o.suppressHydrationWarning!==!0&&la(s.textContent,l,e),a=["children",l]):typeof l=="number"&&s.textContent!==""+l&&(o.suppressHydrationWarning!==!0&&la(s.textContent,l,e),a=["children",""+l]):Cs.hasOwnProperty(i)&&l!=null&&i==="onScroll"&&Le("scroll",s)}switch(r){case"input":ea(s),Cc(s,o,!0);break;case"textarea":ea(s),Tc(s);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(s.onclick=Ka)}s=a,t.updateQueue=s,s!==null&&(t.flags|=4)}else{i=a.nodeType===9?a:a.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=ku(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof s.is=="string"?e=i.createElement(r,{is:s.is}):(e=i.createElement(r),r==="select"&&(i=e,s.multiple?i.multiple=!0:s.size&&(i.size=s.size))):e=i.createElementNS(e,r),e[rn]=t,e[zs]=s,H0(e,t,!1,!1),t.stateNode=e;e:{switch(i=Ei(r,s),r){case"dialog":Le("cancel",e),Le("close",e),a=s;break;case"iframe":case"object":case"embed":Le("load",e),a=s;break;case"video":case"audio":for(a=0;a<ps.length;a++)Le(ps[a],e);a=s;break;case"source":Le("error",e),a=s;break;case"img":case"image":case"link":Le("error",e),Le("load",e),a=s;break;case"details":Le("toggle",e),a=s;break;case"input":Sc(e,s),a=wi(e,s),Le("invalid",e);break;case"option":a=s;break;case"select":e._wrapperState={wasMultiple:!!s.multiple},a=Qe({},s,{value:void 0}),Le("invalid",e);break;case"textarea":Ec(e,s),a=ki(e,s),Le("invalid",e);break;default:a=s}Ci(r,a),l=a;for(o in l)if(l.hasOwnProperty(o)){var c=l[o];o==="style"?Eu(e,c):o==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&Su(e,c)):o==="children"?typeof c=="string"?(r!=="textarea"||c!=="")&&Es(e,c):typeof c=="number"&&Es(e,""+c):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Cs.hasOwnProperty(o)?c!=null&&o==="onScroll"&&Le("scroll",e):c!=null&&yl(e,o,c,i))}switch(r){case"input":ea(e),Cc(e,s,!1);break;case"textarea":ea(e),Tc(e);break;case"option":s.value!=null&&e.setAttribute("value",""+qn(s.value));break;case"select":e.multiple=!!s.multiple,o=s.value,o!=null?Pr(e,!!s.multiple,o,!1):s.defaultValue!=null&&Pr(e,!!s.multiple,s.defaultValue,!0);break;default:typeof a.onClick=="function"&&(e.onclick=Ka)}switch(r){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break e;case"img":s=!0;break e;default:s=!1}}s&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return pt(t),null;case 6:if(e&&t.stateNode!=null)X0(e,t,e.memoizedProps,s);else{if(typeof s!="string"&&t.stateNode===null)throw Error(re(166));if(r=nr(Os.current),nr(an.current),ca(t)){if(s=t.stateNode,r=t.memoizedProps,s[rn]=t,(o=s.nodeValue!==r)&&(e=It,e!==null))switch(e.tag){case 3:la(s.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&la(s.nodeValue,r,(e.mode&1)!==0)}o&&(t.flags|=4)}else s=(r.nodeType===9?r:r.ownerDocument).createTextNode(s),s[rn]=t,t.stateNode=s}return pt(t),null;case 13:if(ze(Ye),s=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Oe&&At!==null&&t.mode&1&&!(t.flags&128))h0(),Mr(),t.flags|=98560,o=!1;else if(o=ca(t),s!==null&&s.dehydrated!==null){if(e===null){if(!o)throw Error(re(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(re(317));o[rn]=t}else Mr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;pt(t),o=!1}else Kt!==null&&(il(Kt),Kt=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=r,t):(s=s!==null,s!==(e!==null&&e.memoizedState!==null)&&s&&(t.child.flags|=8192,t.mode&1&&(e===null||Ye.current&1?st===0&&(st=3):tc())),t.updateQueue!==null&&(t.flags|=4),pt(t),null);case 4:return Fr(),Zi(e,t),e===null&&Ls(t.stateNode.containerInfo),pt(t),null;case 10:return Ol(t.type._context),pt(t),null;case 17:return Et(t.type)&&Xa(),pt(t),null;case 19:if(ze(Ye),o=t.memoizedState,o===null)return pt(t),null;if(s=(t.flags&128)!==0,i=o.rendering,i===null)if(s)as(o,!1);else{if(st!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(i=ro(e),i!==null){for(t.flags|=128,as(o,!1),s=i.updateQueue,s!==null&&(t.updateQueue=s,t.flags|=4),t.subtreeFlags=0,s=r,r=t.child;r!==null;)o=r,e=s,o.flags&=14680066,i=o.alternate,i===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=i.childLanes,o.lanes=i.lanes,o.child=i.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=i.memoizedProps,o.memoizedState=i.memoizedState,o.updateQueue=i.updateQueue,o.type=i.type,e=i.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return Ie(Ye,Ye.current&1|2),t.child}e=e.sibling}o.tail!==null&&Ve()>Br&&(t.flags|=128,s=!0,as(o,!1),t.lanes=4194304)}else{if(!s)if(e=ro(i),e!==null){if(t.flags|=128,s=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),as(o,!0),o.tail===null&&o.tailMode==="hidden"&&!i.alternate&&!Oe)return pt(t),null}else 2*Ve()-o.renderingStartTime>Br&&r!==1073741824&&(t.flags|=128,s=!0,as(o,!1),t.lanes=4194304);o.isBackwards?(i.sibling=t.child,t.child=i):(r=o.last,r!==null?r.sibling=i:t.child=i,o.last=i)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Ve(),t.sibling=null,r=Ye.current,Ie(Ye,s?r&1|2:r&1),t):(pt(t),null);case 22:case 23:return ec(),s=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==s&&(t.flags|=8192),s&&t.mode&1?_t&1073741824&&(pt(t),t.subtreeFlags&6&&(t.flags|=8192)):pt(t),null;case 24:return null;case 25:return null}throw Error(re(156,t.tag))}function Kh(e,t){switch(Ll(t),t.tag){case 1:return Et(t.type)&&Xa(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Fr(),ze(Ct),ze(vt),Yl(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Ul(t),null;case 13:if(ze(Ye),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(re(340));Mr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ze(Ye),null;case 4:return Fr(),null;case 10:return Ol(t.type._context),null;case 22:case 23:return ec(),null;case 24:return null;default:return null}}var ma=!1,gt=!1,Xh=typeof WeakSet=="function"?WeakSet:Set,oe=null;function Er(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(s){Ke(e,t,s)}else r.current=null}function el(e,t,r){try{r()}catch(s){Ke(e,t,s)}}var gd=!1;function Vh(e,t){if(Mi=Ga,e=t0(),Al(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var s=r.getSelection&&r.getSelection();if(s&&s.rangeCount!==0){r=s.anchorNode;var a=s.anchorOffset,o=s.focusNode;s=s.focusOffset;try{r.nodeType,o.nodeType}catch{r=null;break e}var i=0,l=-1,c=-1,u=0,m=0,p=e,f=null;t:for(;;){for(var w;p!==r||a!==0&&p.nodeType!==3||(l=i+a),p!==o||s!==0&&p.nodeType!==3||(c=i+s),p.nodeType===3&&(i+=p.nodeValue.length),(w=p.firstChild)!==null;)f=p,p=w;for(;;){if(p===e)break t;if(f===r&&++u===a&&(l=i),f===o&&++m===s&&(c=i),(w=p.nextSibling)!==null)break;p=f,f=p.parentNode}p=w}r=l===-1||c===-1?null:{start:l,end:c}}else r=null}r=r||{start:0,end:0}}else r=null;for(Oi={focusedElem:e,selectionRange:r},Ga=!1,oe=t;oe!==null;)if(t=oe,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,oe=e;else for(;oe!==null;){t=oe;try{var x=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var j=x.memoizedProps,S=x.memoizedState,y=t.stateNode,g=y.getSnapshotBeforeUpdate(t.elementType===t.type?j:Gt(t.type,j),S);y.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var v=t.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(re(163))}}catch(N){Ke(t,t.return,N)}if(e=t.sibling,e!==null){e.return=t.return,oe=e;break}oe=t.return}return x=gd,gd=!1,x}function js(e,t,r){var s=t.updateQueue;if(s=s!==null?s.lastEffect:null,s!==null){var a=s=s.next;do{if((a.tag&e)===e){var o=a.destroy;a.destroy=void 0,o!==void 0&&el(t,r,o)}a=a.next}while(a!==s)}}function No(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var s=r.create;r.destroy=s()}r=r.next}while(r!==t)}}function tl(e){var t=e.ref;if(t!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof t=="function"?t(e):t.current=e}}function V0(e){var t=e.alternate;t!==null&&(e.alternate=null,V0(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[rn],delete t[zs],delete t[Bi],delete t[Ih],delete t[Lh])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function J0(e){return e.tag===5||e.tag===3||e.tag===4}function vd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||J0(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function nl(e,t,r){var s=e.tag;if(s===5||s===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=Ka));else if(s!==4&&(e=e.child,e!==null))for(nl(e,t,r),e=e.sibling;e!==null;)nl(e,t,r),e=e.sibling}function rl(e,t,r){var s=e.tag;if(s===5||s===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(s!==4&&(e=e.child,e!==null))for(rl(e,t,r),e=e.sibling;e!==null;)rl(e,t,r),e=e.sibling}var ct=null,Wt=!1;function jn(e,t,r){for(r=r.child;r!==null;)Z0(e,t,r),r=r.sibling}function Z0(e,t,r){if(sn&&typeof sn.onCommitFiberUnmount=="function")try{sn.onCommitFiberUnmount(po,r)}catch{}switch(r.tag){case 5:gt||Er(r,t);case 6:var s=ct,a=Wt;ct=null,jn(e,t,r),ct=s,Wt=a,ct!==null&&(Wt?(e=ct,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):ct.removeChild(r.stateNode));break;case 18:ct!==null&&(Wt?(e=ct,r=r.stateNode,e.nodeType===8?Vo(e.parentNode,r):e.nodeType===1&&Vo(e,r),_s(e)):Vo(ct,r.stateNode));break;case 4:s=ct,a=Wt,ct=r.stateNode.containerInfo,Wt=!0,jn(e,t,r),ct=s,Wt=a;break;case 0:case 11:case 14:case 15:if(!gt&&(s=r.updateQueue,s!==null&&(s=s.lastEffect,s!==null))){a=s=s.next;do{var o=a,i=o.destroy;o=o.tag,i!==void 0&&(o&2||o&4)&&el(r,t,i),a=a.next}while(a!==s)}jn(e,t,r);break;case 1:if(!gt&&(Er(r,t),s=r.stateNode,typeof s.componentWillUnmount=="function"))try{s.props=r.memoizedProps,s.state=r.memoizedState,s.componentWillUnmount()}catch(l){Ke(r,t,l)}jn(e,t,r);break;case 21:jn(e,t,r);break;case 22:r.mode&1?(gt=(s=gt)||r.memoizedState!==null,jn(e,t,r),gt=s):jn(e,t,r);break;default:jn(e,t,r)}}function yd(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new Xh),t.forEach(function(s){var a=op.bind(null,e,s);r.has(s)||(r.add(s),s.then(a,a))})}}function Qt(e,t){var r=t.deletions;if(r!==null)for(var s=0;s<r.length;s++){var a=r[s];try{var o=e,i=t,l=i;e:for(;l!==null;){switch(l.tag){case 5:ct=l.stateNode,Wt=!1;break e;case 3:ct=l.stateNode.containerInfo,Wt=!0;break e;case 4:ct=l.stateNode.containerInfo,Wt=!0;break e}l=l.return}if(ct===null)throw Error(re(160));Z0(o,i,a),ct=null,Wt=!1;var c=a.alternate;c!==null&&(c.return=null),a.return=null}catch(u){Ke(a,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)em(t,e),t=t.sibling}function em(e,t){var r=e.alternate,s=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Qt(t,e),tn(e),s&4){try{js(3,e,e.return),No(3,e)}catch(j){Ke(e,e.return,j)}try{js(5,e,e.return)}catch(j){Ke(e,e.return,j)}}break;case 1:Qt(t,e),tn(e),s&512&&r!==null&&Er(r,r.return);break;case 5:if(Qt(t,e),tn(e),s&512&&r!==null&&Er(r,r.return),e.flags&32){var a=e.stateNode;try{Es(a,"")}catch(j){Ke(e,e.return,j)}}if(s&4&&(a=e.stateNode,a!=null)){var o=e.memoizedProps,i=r!==null?r.memoizedProps:o,l=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{l==="input"&&o.type==="radio"&&o.name!=null&&ju(a,o),Ei(l,i);var u=Ei(l,o);for(i=0;i<c.length;i+=2){var m=c[i],p=c[i+1];m==="style"?Eu(a,p):m==="dangerouslySetInnerHTML"?Su(a,p):m==="children"?Es(a,p):yl(a,m,p,u)}switch(l){case"input":ji(a,o);break;case"textarea":Nu(a,o);break;case"select":var f=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!o.multiple;var w=o.value;w!=null?Pr(a,!!o.multiple,w,!1):f!==!!o.multiple&&(o.defaultValue!=null?Pr(a,!!o.multiple,o.defaultValue,!0):Pr(a,!!o.multiple,o.multiple?[]:"",!1))}a[zs]=o}catch(j){Ke(e,e.return,j)}}break;case 6:if(Qt(t,e),tn(e),s&4){if(e.stateNode===null)throw Error(re(162));a=e.stateNode,o=e.memoizedProps;try{a.nodeValue=o}catch(j){Ke(e,e.return,j)}}break;case 3:if(Qt(t,e),tn(e),s&4&&r!==null&&r.memoizedState.isDehydrated)try{_s(t.containerInfo)}catch(j){Ke(e,e.return,j)}break;case 4:Qt(t,e),tn(e);break;case 13:Qt(t,e),tn(e),a=e.child,a.flags&8192&&(o=a.memoizedState!==null,a.stateNode.isHidden=o,!o||a.alternate!==null&&a.alternate.memoizedState!==null||(Jl=Ve())),s&4&&yd(e);break;case 22:if(m=r!==null&&r.memoizedState!==null,e.mode&1?(gt=(u=gt)||m,Qt(t,e),gt=u):Qt(t,e),tn(e),s&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!m&&e.mode&1)for(oe=e,m=e.child;m!==null;){for(p=oe=m;oe!==null;){switch(f=oe,w=f.child,f.tag){case 0:case 11:case 14:case 15:js(4,f,f.return);break;case 1:Er(f,f.return);var x=f.stateNode;if(typeof x.componentWillUnmount=="function"){s=f,r=f.return;try{t=s,x.props=t.memoizedProps,x.state=t.memoizedState,x.componentWillUnmount()}catch(j){Ke(s,r,j)}}break;case 5:Er(f,f.return);break;case 22:if(f.memoizedState!==null){wd(p);continue}}w!==null?(w.return=f,oe=w):wd(p)}m=m.sibling}e:for(m=null,p=e;;){if(p.tag===5){if(m===null){m=p;try{a=p.stateNode,u?(o=a.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(l=p.stateNode,c=p.memoizedProps.style,i=c!=null&&c.hasOwnProperty("display")?c.display:null,l.style.display=Cu("display",i))}catch(j){Ke(e,e.return,j)}}}else if(p.tag===6){if(m===null)try{p.stateNode.nodeValue=u?"":p.memoizedProps}catch(j){Ke(e,e.return,j)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;m===p&&(m=null),p=p.return}m===p&&(m=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Qt(t,e),tn(e),s&4&&yd(e);break;case 21:break;default:Qt(t,e),tn(e)}}function tn(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if(J0(r)){var s=r;break e}r=r.return}throw Error(re(160))}switch(s.tag){case 5:var a=s.stateNode;s.flags&32&&(Es(a,""),s.flags&=-33);var o=vd(e);rl(e,o,a);break;case 3:case 4:var i=s.stateNode.containerInfo,l=vd(e);nl(e,l,i);break;default:throw Error(re(161))}}catch(c){Ke(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Jh(e,t,r){oe=e,tm(e)}function tm(e,t,r){for(var s=(e.mode&1)!==0;oe!==null;){var a=oe,o=a.child;if(a.tag===22&&s){var i=a.memoizedState!==null||ma;if(!i){var l=a.alternate,c=l!==null&&l.memoizedState!==null||gt;l=ma;var u=gt;if(ma=i,(gt=c)&&!u)for(oe=a;oe!==null;)i=oe,c=i.child,i.tag===22&&i.memoizedState!==null?jd(a):c!==null?(c.return=i,oe=c):jd(a);for(;o!==null;)oe=o,tm(o),o=o.sibling;oe=a,ma=l,gt=u}bd(e)}else a.subtreeFlags&8772&&o!==null?(o.return=a,oe=o):bd(e)}}function bd(e){for(;oe!==null;){var t=oe;if(t.flags&8772){var r=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:gt||No(5,t);break;case 1:var s=t.stateNode;if(t.flags&4&&!gt)if(r===null)s.componentDidMount();else{var a=t.elementType===t.type?r.memoizedProps:Gt(t.type,r.memoizedProps);s.componentDidUpdate(a,r.memoizedState,s.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&sd(t,o,s);break;case 3:var i=t.updateQueue;if(i!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}sd(t,i,r)}break;case 5:var l=t.stateNode;if(r===null&&t.flags&4){r=l;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&r.focus();break;case"img":c.src&&(r.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var m=u.memoizedState;if(m!==null){var p=m.dehydrated;p!==null&&_s(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(re(163))}gt||t.flags&512&&tl(t)}catch(f){Ke(t,t.return,f)}}if(t===e){oe=null;break}if(r=t.sibling,r!==null){r.return=t.return,oe=r;break}oe=t.return}}function wd(e){for(;oe!==null;){var t=oe;if(t===e){oe=null;break}var r=t.sibling;if(r!==null){r.return=t.return,oe=r;break}oe=t.return}}function jd(e){for(;oe!==null;){var t=oe;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{No(4,t)}catch(c){Ke(t,r,c)}break;case 1:var s=t.stateNode;if(typeof s.componentDidMount=="function"){var a=t.return;try{s.componentDidMount()}catch(c){Ke(t,a,c)}}var o=t.return;try{tl(t)}catch(c){Ke(t,o,c)}break;case 5:var i=t.return;try{tl(t)}catch(c){Ke(t,i,c)}}}catch(c){Ke(t,t.return,c)}if(t===e){oe=null;break}var l=t.sibling;if(l!==null){l.return=t.return,oe=l;break}oe=t.return}}var Zh=Math.ceil,oo=bn.ReactCurrentDispatcher,Xl=bn.ReactCurrentOwner,$t=bn.ReactCurrentBatchConfig,be=0,it=null,Je=null,dt=0,_t=0,Tr=Hn(0),st=0,Us=null,dr=0,ko=0,Vl=0,Ns=null,kt=null,Jl=0,Br=1/0,cn=null,io=!1,sl=null,Bn=null,fa=!1,In=null,lo=0,ks=0,al=null,La=-1,Da=0;function wt(){return be&6?Ve():La!==-1?La:La=Ve()}function Un(e){return e.mode&1?be&2&&dt!==0?dt&-dt:zh.transition!==null?(Da===0&&(Da=Fu()),Da):(e=Re,e!==0||(e=window.event,e=e===void 0?16:Gu(e.type)),e):1}function Vt(e,t,r,s){if(50<ks)throw ks=0,al=null,Error(re(185));Qs(e,r,s),(!(be&2)||e!==it)&&(e===it&&(!(be&2)&&(ko|=r),st===4&&_n(e,dt)),Tt(e,s),r===1&&be===0&&!(t.mode&1)&&(Br=Ve()+500,bo&&Kn()))}function Tt(e,t){var r=e.callbackNode;zf(e,t);var s=Qa(e,e===it?dt:0);if(s===0)r!==null&&_c(r),e.callbackNode=null,e.callbackPriority=0;else if(t=s&-s,e.callbackPriority!==t){if(r!=null&&_c(r),t===1)e.tag===0?Dh(Nd.bind(null,e)):u0(Nd.bind(null,e)),_h(function(){!(be&6)&&Kn()}),r=null;else{switch($u(s)){case 1:r=kl;break;case 4:r=Mu;break;case 16:r=qa;break;case 536870912:r=Ou;break;default:r=qa}r=cm(r,nm.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function nm(e,t){if(La=-1,Da=0,be&6)throw Error(re(327));var r=e.callbackNode;if(Lr()&&e.callbackNode!==r)return null;var s=Qa(e,e===it?dt:0);if(s===0)return null;if(s&30||s&e.expiredLanes||t)t=co(e,s);else{t=s;var a=be;be|=2;var o=sm();(it!==e||dt!==t)&&(cn=null,Br=Ve()+500,ar(e,t));do try{np();break}catch(l){rm(e,l)}while(1);Ml(),oo.current=o,be=a,Je!==null?t=0:(it=null,dt=0,t=st)}if(t!==0){if(t===2&&(a=Ai(e),a!==0&&(s=a,t=ol(e,a))),t===1)throw r=Us,ar(e,0),_n(e,s),Tt(e,Ve()),r;if(t===6)_n(e,s);else{if(a=e.current.alternate,!(s&30)&&!ep(a)&&(t=co(e,s),t===2&&(o=Ai(e),o!==0&&(s=o,t=ol(e,o))),t===1))throw r=Us,ar(e,0),_n(e,s),Tt(e,Ve()),r;switch(e.finishedWork=a,e.finishedLanes=s,t){case 0:case 1:throw Error(re(345));case 2:Zn(e,kt,cn);break;case 3:if(_n(e,s),(s&130023424)===s&&(t=Jl+500-Ve(),10<t)){if(Qa(e,0)!==0)break;if(a=e.suspendedLanes,(a&s)!==s){wt(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=$i(Zn.bind(null,e,kt,cn),t);break}Zn(e,kt,cn);break;case 4:if(_n(e,s),(s&4194240)===s)break;for(t=e.eventTimes,a=-1;0<s;){var i=31-Xt(s);o=1<<i,i=t[i],i>a&&(a=i),s&=~o}if(s=a,s=Ve()-s,s=(120>s?120:480>s?480:1080>s?1080:1920>s?1920:3e3>s?3e3:4320>s?4320:1960*Zh(s/1960))-s,10<s){e.timeoutHandle=$i(Zn.bind(null,e,kt,cn),s);break}Zn(e,kt,cn);break;case 5:Zn(e,kt,cn);break;default:throw Error(re(329))}}}return Tt(e,Ve()),e.callbackNode===r?nm.bind(null,e):null}function ol(e,t){var r=Ns;return e.current.memoizedState.isDehydrated&&(ar(e,t).flags|=256),e=co(e,t),e!==2&&(t=kt,kt=r,t!==null&&il(t)),e}function il(e){kt===null?kt=e:kt.push.apply(kt,e)}function ep(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var s=0;s<r.length;s++){var a=r[s],o=a.getSnapshot;a=a.value;try{if(!Jt(o(),a))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function _n(e,t){for(t&=~Vl,t&=~ko,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-Xt(t),s=1<<r;e[r]=-1,t&=~s}}function Nd(e){if(be&6)throw Error(re(327));Lr();var t=Qa(e,0);if(!(t&1))return Tt(e,Ve()),null;var r=co(e,t);if(e.tag!==0&&r===2){var s=Ai(e);s!==0&&(t=s,r=ol(e,s))}if(r===1)throw r=Us,ar(e,0),_n(e,t),Tt(e,Ve()),r;if(r===6)throw Error(re(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Zn(e,kt,cn),Tt(e,Ve()),null}function Zl(e,t){var r=be;be|=1;try{return e(t)}finally{be=r,be===0&&(Br=Ve()+500,bo&&Kn())}}function ur(e){In!==null&&In.tag===0&&!(be&6)&&Lr();var t=be;be|=1;var r=$t.transition,s=Re;try{if($t.transition=null,Re=1,e)return e()}finally{Re=s,$t.transition=r,be=t,!(be&6)&&Kn()}}function ec(){_t=Tr.current,ze(Tr)}function ar(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,Rh(r)),Je!==null)for(r=Je.return;r!==null;){var s=r;switch(Ll(s),s.tag){case 1:s=s.type.childContextTypes,s!=null&&Xa();break;case 3:Fr(),ze(Ct),ze(vt),Yl();break;case 5:Ul(s);break;case 4:Fr();break;case 13:ze(Ye);break;case 19:ze(Ye);break;case 10:Ol(s.type._context);break;case 22:case 23:ec()}r=r.return}if(it=e,Je=e=Yn(e.current,null),dt=_t=t,st=0,Us=null,Vl=ko=dr=0,kt=Ns=null,tr!==null){for(t=0;t<tr.length;t++)if(r=tr[t],s=r.interleaved,s!==null){r.interleaved=null;var a=s.next,o=r.pending;if(o!==null){var i=o.next;o.next=a,s.next=i}r.pending=s}tr=null}return e}function rm(e,t){do{var r=Je;try{if(Ml(),_a.current=ao,so){for(var s=qe.memoizedState;s!==null;){var a=s.queue;a!==null&&(a.pending=null),s=s.next}so=!1}if(cr=0,ot=nt=qe=null,ws=!1,Fs=0,Xl.current=null,r===null||r.return===null){st=1,Us=t,Je=null;break}e:{var o=e,i=r.return,l=r,c=t;if(t=dt,l.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,m=l,p=m.tag;if(!(m.mode&1)&&(p===0||p===11||p===15)){var f=m.alternate;f?(m.updateQueue=f.updateQueue,m.memoizedState=f.memoizedState,m.lanes=f.lanes):(m.updateQueue=null,m.memoizedState=null)}var w=dd(i);if(w!==null){w.flags&=-257,ud(w,i,l,o,t),w.mode&1&&cd(o,u,t),t=w,c=u;var x=t.updateQueue;if(x===null){var j=new Set;j.add(c),t.updateQueue=j}else x.add(c);break e}else{if(!(t&1)){cd(o,u,t),tc();break e}c=Error(re(426))}}else if(Oe&&l.mode&1){var S=dd(i);if(S!==null){!(S.flags&65536)&&(S.flags|=256),ud(S,i,l,o,t),Dl($r(c,l));break e}}o=c=$r(c,l),st!==4&&(st=2),Ns===null?Ns=[o]:Ns.push(o),o=i;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var y=$0(o,c,t);rd(o,y);break e;case 1:l=c;var g=o.type,v=o.stateNode;if(!(o.flags&128)&&(typeof g.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(Bn===null||!Bn.has(v)))){o.flags|=65536,t&=-t,o.lanes|=t;var N=B0(o,l,t);rd(o,N);break e}}o=o.return}while(o!==null)}om(r)}catch(C){t=C,Je===r&&r!==null&&(Je=r=r.return);continue}break}while(1)}function sm(){var e=oo.current;return oo.current=ao,e===null?ao:e}function tc(){(st===0||st===3||st===2)&&(st=4),it===null||!(dr&268435455)&&!(ko&268435455)||_n(it,dt)}function co(e,t){var r=be;be|=2;var s=sm();(it!==e||dt!==t)&&(cn=null,ar(e,t));do try{tp();break}catch(a){rm(e,a)}while(1);if(Ml(),be=r,oo.current=s,Je!==null)throw Error(re(261));return it=null,dt=0,st}function tp(){for(;Je!==null;)am(Je)}function np(){for(;Je!==null&&!Ef();)am(Je)}function am(e){var t=lm(e.alternate,e,_t);e.memoizedProps=e.pendingProps,t===null?om(e):Je=t,Xl.current=null}function om(e){var t=e;do{var r=t.alternate;if(e=t.return,t.flags&32768){if(r=Kh(r,t),r!==null){r.flags&=32767,Je=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{st=6,Je=null;return}}else if(r=Hh(r,t,_t),r!==null){Je=r;return}if(t=t.sibling,t!==null){Je=t;return}Je=t=e}while(t!==null);st===0&&(st=5)}function Zn(e,t,r){var s=Re,a=$t.transition;try{$t.transition=null,Re=1,rp(e,t,r,s)}finally{$t.transition=a,Re=s}return null}function rp(e,t,r,s){do Lr();while(In!==null);if(be&6)throw Error(re(327));r=e.finishedWork;var a=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(re(177));e.callbackNode=null,e.callbackPriority=0;var o=r.lanes|r.childLanes;if(Mf(e,o),e===it&&(Je=it=null,dt=0),!(r.subtreeFlags&2064)&&!(r.flags&2064)||fa||(fa=!0,cm(qa,function(){return Lr(),null})),o=(r.flags&15990)!==0,r.subtreeFlags&15990||o){o=$t.transition,$t.transition=null;var i=Re;Re=1;var l=be;be|=4,Xl.current=null,Vh(e,r),em(r,e),Nh(Oi),Ga=!!Mi,Oi=Mi=null,e.current=r,Jh(r),Tf(),be=l,Re=i,$t.transition=o}else e.current=r;if(fa&&(fa=!1,In=e,lo=a),o=e.pendingLanes,o===0&&(Bn=null),_f(r.stateNode),Tt(e,Ve()),t!==null)for(s=e.onRecoverableError,r=0;r<t.length;r++)a=t[r],s(a.value,{componentStack:a.stack,digest:a.digest});if(io)throw io=!1,e=sl,sl=null,e;return lo&1&&e.tag!==0&&Lr(),o=e.pendingLanes,o&1?e===al?ks++:(ks=0,al=e):ks=0,Kn(),null}function Lr(){if(In!==null){var e=$u(lo),t=$t.transition,r=Re;try{if($t.transition=null,Re=16>e?16:e,In===null)var s=!1;else{if(e=In,In=null,lo=0,be&6)throw Error(re(331));var a=be;for(be|=4,oe=e.current;oe!==null;){var o=oe,i=o.child;if(oe.flags&16){var l=o.deletions;if(l!==null){for(var c=0;c<l.length;c++){var u=l[c];for(oe=u;oe!==null;){var m=oe;switch(m.tag){case 0:case 11:case 15:js(8,m,o)}var p=m.child;if(p!==null)p.return=m,oe=p;else for(;oe!==null;){m=oe;var f=m.sibling,w=m.return;if(V0(m),m===u){oe=null;break}if(f!==null){f.return=w,oe=f;break}oe=w}}}var x=o.alternate;if(x!==null){var j=x.child;if(j!==null){x.child=null;do{var S=j.sibling;j.sibling=null,j=S}while(j!==null)}}oe=o}}if(o.subtreeFlags&2064&&i!==null)i.return=o,oe=i;else e:for(;oe!==null;){if(o=oe,o.flags&2048)switch(o.tag){case 0:case 11:case 15:js(9,o,o.return)}var y=o.sibling;if(y!==null){y.return=o.return,oe=y;break e}oe=o.return}}var g=e.current;for(oe=g;oe!==null;){i=oe;var v=i.child;if(i.subtreeFlags&2064&&v!==null)v.return=i,oe=v;else e:for(i=g;oe!==null;){if(l=oe,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:No(9,l)}}catch(C){Ke(l,l.return,C)}if(l===i){oe=null;break e}var N=l.sibling;if(N!==null){N.return=l.return,oe=N;break e}oe=l.return}}if(be=a,Kn(),sn&&typeof sn.onPostCommitFiberRoot=="function")try{sn.onPostCommitFiberRoot(po,e)}catch{}s=!0}return s}finally{Re=r,$t.transition=t}}return!1}function kd(e,t,r){t=$r(r,t),t=$0(e,t,1),e=$n(e,t,1),t=wt(),e!==null&&(Qs(e,1,t),Tt(e,t))}function Ke(e,t,r){if(e.tag===3)kd(e,e,r);else for(;t!==null;){if(t.tag===3){kd(t,e,r);break}else if(t.tag===1){var s=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(Bn===null||!Bn.has(s))){e=$r(r,e),e=B0(t,e,1),t=$n(t,e,1),e=wt(),t!==null&&(Qs(t,1,e),Tt(t,e));break}}t=t.return}}function sp(e,t,r){var s=e.pingCache;s!==null&&s.delete(t),t=wt(),e.pingedLanes|=e.suspendedLanes&r,it===e&&(dt&r)===r&&(st===4||st===3&&(dt&130023424)===dt&&500>Ve()-Jl?ar(e,0):Vl|=r),Tt(e,t)}function im(e,t){t===0&&(e.mode&1?(t=ra,ra<<=1,!(ra&130023424)&&(ra=4194304)):t=1);var r=wt();e=gn(e,t),e!==null&&(Qs(e,t,r),Tt(e,r))}function ap(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),im(e,r)}function op(e,t){var r=0;switch(e.tag){case 13:var s=e.stateNode,a=e.memoizedState;a!==null&&(r=a.retryLane);break;case 19:s=e.stateNode;break;default:throw Error(re(314))}s!==null&&s.delete(t),im(e,r)}var lm;lm=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ct.current)St=!0;else{if(!(e.lanes&r)&&!(t.flags&128))return St=!1,Wh(e,t,r);St=!!(e.flags&131072)}else St=!1,Oe&&t.flags&1048576&&m0(t,Za,t.index);switch(t.lanes=0,t.tag){case 2:var s=t.type;Ia(e,t),e=t.pendingProps;var a=zr(t,vt.current);Ir(t,r),a=Ql(null,t,s,e,a,r);var o=Gl();return t.flags|=1,typeof a=="object"&&a!==null&&typeof a.render=="function"&&a.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Et(s)?(o=!0,Va(t)):o=!1,t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,$l(t),a.updater=jo,t.stateNode=a,a._reactInternals=t,Wi(t,s,e,r),t=Xi(null,t,s,!0,o,r)):(t.tag=0,Oe&&o&&Il(t),bt(null,t,a,r),t=t.child),t;case 16:s=t.elementType;e:{switch(Ia(e,t),e=t.pendingProps,a=s._init,s=a(s._payload),t.type=s,a=t.tag=lp(s),e=Gt(s,e),a){case 0:t=Ki(null,t,s,e,r);break e;case 1:t=hd(null,t,s,e,r);break e;case 11:t=md(null,t,s,e,r);break e;case 14:t=fd(null,t,s,Gt(s.type,e),r);break e}throw Error(re(306,s,""))}return t;case 0:return s=t.type,a=t.pendingProps,a=t.elementType===s?a:Gt(s,a),Ki(e,t,s,a,r);case 1:return s=t.type,a=t.pendingProps,a=t.elementType===s?a:Gt(s,a),hd(e,t,s,a,r);case 3:e:{if(Q0(t),e===null)throw Error(re(387));s=t.pendingProps,o=t.memoizedState,a=o.element,v0(e,t),no(t,s,null,r);var i=t.memoizedState;if(s=i.element,o.isDehydrated)if(o={element:s,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){a=$r(Error(re(423)),t),t=pd(e,t,s,r,a);break e}else if(s!==a){a=$r(Error(re(424)),t),t=pd(e,t,s,r,a);break e}else for(At=Fn(t.stateNode.containerInfo.firstChild),It=t,Oe=!0,Kt=null,r=x0(t,null,s,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(Mr(),s===a){t=vn(e,t,r);break e}bt(e,t,s,r)}t=t.child}return t;case 5:return y0(t),e===null&&qi(t),s=t.type,a=t.pendingProps,o=e!==null?e.memoizedProps:null,i=a.children,Fi(s,a)?i=null:o!==null&&Fi(s,o)&&(t.flags|=32),q0(e,t),bt(e,t,i,r),t.child;case 6:return e===null&&qi(t),null;case 13:return G0(e,t,r);case 4:return Bl(t,t.stateNode.containerInfo),s=t.pendingProps,e===null?t.child=Or(t,null,s,r):bt(e,t,s,r),t.child;case 11:return s=t.type,a=t.pendingProps,a=t.elementType===s?a:Gt(s,a),md(e,t,s,a,r);case 7:return bt(e,t,t.pendingProps,r),t.child;case 8:return bt(e,t,t.pendingProps.children,r),t.child;case 12:return bt(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(s=t.type._context,a=t.pendingProps,o=t.memoizedProps,i=a.value,Ie(eo,s._currentValue),s._currentValue=i,o!==null)if(Jt(o.value,i)){if(o.children===a.children&&!Ct.current){t=vn(e,t,r);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var l=o.dependencies;if(l!==null){i=o.child;for(var c=l.firstContext;c!==null;){if(c.context===s){if(o.tag===1){c=fn(-1,r&-r),c.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var m=u.pending;m===null?c.next=c:(c.next=m.next,m.next=c),u.pending=c}}o.lanes|=r,c=o.alternate,c!==null&&(c.lanes|=r),Qi(o.return,r,t),l.lanes|=r;break}c=c.next}}else if(o.tag===10)i=o.type===t.type?null:o.child;else if(o.tag===18){if(i=o.return,i===null)throw Error(re(341));i.lanes|=r,l=i.alternate,l!==null&&(l.lanes|=r),Qi(i,r,t),i=o.sibling}else i=o.child;if(i!==null)i.return=o;else for(i=o;i!==null;){if(i===t){i=null;break}if(o=i.sibling,o!==null){o.return=i.return,i=o;break}i=i.return}o=i}bt(e,t,a.children,r),t=t.child}return t;case 9:return a=t.type,s=t.pendingProps.children,Ir(t,r),a=Bt(a),s=s(a),t.flags|=1,bt(e,t,s,r),t.child;case 14:return s=t.type,a=Gt(s,t.pendingProps),a=Gt(s.type,a),fd(e,t,s,a,r);case 15:return U0(e,t,t.type,t.pendingProps,r);case 17:return s=t.type,a=t.pendingProps,a=t.elementType===s?a:Gt(s,a),Ia(e,t),t.tag=1,Et(s)?(e=!0,Va(t)):e=!1,Ir(t,r),F0(t,s,a),Wi(t,s,a,r),Xi(null,t,s,!0,e,r);case 19:return W0(e,t,r);case 22:return Y0(e,t,r)}throw Error(re(156,t.tag))};function cm(e,t){return zu(e,t)}function ip(e,t,r,s){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ft(e,t,r,s){return new ip(e,t,r,s)}function nc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function lp(e){if(typeof e=="function")return nc(e)?1:0;if(e!=null){if(e=e.$$typeof,e===wl)return 11;if(e===jl)return 14}return 2}function Yn(e,t){var r=e.alternate;return r===null?(r=Ft(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function za(e,t,r,s,a,o){var i=2;if(s=e,typeof e=="function")nc(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case vr:return or(r.children,a,o,t);case bl:i=8,a|=8;break;case gi:return e=Ft(12,r,t,a|2),e.elementType=gi,e.lanes=o,e;case vi:return e=Ft(13,r,t,a),e.elementType=vi,e.lanes=o,e;case yi:return e=Ft(19,r,t,a),e.elementType=yi,e.lanes=o,e;case yu:return So(r,a,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case gu:i=10;break e;case vu:i=9;break e;case wl:i=11;break e;case jl:i=14;break e;case En:i=16,s=null;break e}throw Error(re(130,e==null?e:typeof e,""))}return t=Ft(i,r,t,a),t.elementType=e,t.type=s,t.lanes=o,t}function or(e,t,r,s){return e=Ft(7,e,s,t),e.lanes=r,e}function So(e,t,r,s){return e=Ft(22,e,s,t),e.elementType=yu,e.lanes=r,e.stateNode={isHidden:!1},e}function ai(e,t,r){return e=Ft(6,e,null,t),e.lanes=r,e}function oi(e,t,r){return t=Ft(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function cp(e,t,r,s,a){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=$o(0),this.expirationTimes=$o(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=$o(0),this.identifierPrefix=s,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function rc(e,t,r,s,a,o,i,l,c){return e=new cp(e,t,r,l,c),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Ft(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:s,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},$l(o),e}function dp(e,t,r){var s=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:gr,key:s==null?null:""+s,children:e,containerInfo:t,implementation:r}}function dm(e){if(!e)return Qn;e=e._reactInternals;e:{if(fr(e)!==e||e.tag!==1)throw Error(re(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Et(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(re(171))}if(e.tag===1){var r=e.type;if(Et(r))return d0(e,r,t)}return t}function um(e,t,r,s,a,o,i,l,c){return e=rc(r,s,!0,e,a,o,i,l,c),e.context=dm(null),r=e.current,s=wt(),a=Un(r),o=fn(s,a),o.callback=t??null,$n(r,o,a),e.current.lanes=a,Qs(e,a,s),Tt(e,s),e}function Co(e,t,r,s){var a=t.current,o=wt(),i=Un(a);return r=dm(r),t.context===null?t.context=r:t.pendingContext=r,t=fn(o,i),t.payload={element:e},s=s===void 0?null:s,s!==null&&(t.callback=s),e=$n(a,t,i),e!==null&&(Vt(e,a,i,o),Ra(e,a,i)),i}function uo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Sd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function sc(e,t){Sd(e,t),(e=e.alternate)&&Sd(e,t)}function up(){return null}var mm=typeof reportError=="function"?reportError:function(e){console.error(e)};function ac(e){this._internalRoot=e}Eo.prototype.render=ac.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(re(409));Co(e,t,null,null)};Eo.prototype.unmount=ac.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;ur(function(){Co(null,e,null,null)}),t[xn]=null}};function Eo(e){this._internalRoot=e}Eo.prototype.unstable_scheduleHydration=function(e){if(e){var t=Yu();e={blockedOn:null,target:e,priority:t};for(var r=0;r<Rn.length&&t!==0&&t<Rn[r].priority;r++);Rn.splice(r,0,e),r===0&&Qu(e)}};function oc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function To(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Cd(){}function mp(e,t,r,s,a){if(a){if(typeof s=="function"){var o=s;s=function(){var u=uo(i);o.call(u)}}var i=um(t,s,e,0,null,!1,!1,"",Cd);return e._reactRootContainer=i,e[xn]=i.current,Ls(e.nodeType===8?e.parentNode:e),ur(),i}for(;a=e.lastChild;)e.removeChild(a);if(typeof s=="function"){var l=s;s=function(){var u=uo(c);l.call(u)}}var c=rc(e,0,!1,null,null,!1,!1,"",Cd);return e._reactRootContainer=c,e[xn]=c.current,Ls(e.nodeType===8?e.parentNode:e),ur(function(){Co(t,c,r,s)}),c}function Po(e,t,r,s,a){var o=r._reactRootContainer;if(o){var i=o;if(typeof a=="function"){var l=a;a=function(){var c=uo(i);l.call(c)}}Co(t,i,e,a)}else i=mp(r,t,e,a,s);return uo(i)}Bu=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=hs(t.pendingLanes);r!==0&&(Sl(t,r|1),Tt(t,Ve()),!(be&6)&&(Br=Ve()+500,Kn()))}break;case 13:ur(function(){var s=gn(e,1);if(s!==null){var a=wt();Vt(s,e,1,a)}}),sc(e,1)}};Cl=function(e){if(e.tag===13){var t=gn(e,134217728);if(t!==null){var r=wt();Vt(t,e,134217728,r)}sc(e,134217728)}};Uu=function(e){if(e.tag===13){var t=Un(e),r=gn(e,t);if(r!==null){var s=wt();Vt(r,e,t,s)}sc(e,t)}};Yu=function(){return Re};qu=function(e,t){var r=Re;try{return Re=e,t()}finally{Re=r}};Pi=function(e,t,r){switch(t){case"input":if(ji(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var s=r[t];if(s!==e&&s.form===e.form){var a=yo(s);if(!a)throw Error(re(90));wu(s),ji(s,a)}}}break;case"textarea":Nu(e,r);break;case"select":t=r.value,t!=null&&Pr(e,!!r.multiple,t,!1)}};Ru=Zl;_u=ur;var fp={usingClientEntryPoint:!1,Events:[Ws,jr,yo,Tu,Pu,Zl]},os={findFiberByHostInstance:er,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},hp={bundleType:os.bundleType,version:os.version,rendererPackageName:os.rendererPackageName,rendererConfig:os.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:bn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Lu(e),e===null?null:e.stateNode},findFiberByHostInstance:os.findFiberByHostInstance||up,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ha=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ha.isDisabled&&ha.supportsFiber)try{po=ha.inject(hp),sn=ha}catch{}}Dt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=fp;Dt.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!oc(t))throw Error(re(200));return dp(e,t,null,r)};Dt.createRoot=function(e,t){if(!oc(e))throw Error(re(299));var r=!1,s="",a=mm;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),t=rc(e,1,!1,null,null,r,!1,s,a),e[xn]=t.current,Ls(e.nodeType===8?e.parentNode:e),new ac(t)};Dt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(re(188)):(e=Object.keys(e).join(","),Error(re(268,e)));return e=Lu(t),e=e===null?null:e.stateNode,e};Dt.flushSync=function(e){return ur(e)};Dt.hydrate=function(e,t,r){if(!To(t))throw Error(re(200));return Po(null,e,t,!0,r)};Dt.hydrateRoot=function(e,t,r){if(!oc(e))throw Error(re(405));var s=r!=null&&r.hydratedSources||null,a=!1,o="",i=mm;if(r!=null&&(r.unstable_strictMode===!0&&(a=!0),r.identifierPrefix!==void 0&&(o=r.identifierPrefix),r.onRecoverableError!==void 0&&(i=r.onRecoverableError)),t=um(t,null,e,1,r??null,a,!1,o,i),e[xn]=t.current,Ls(e),s)for(e=0;e<s.length;e++)r=s[e],a=r._getVersion,a=a(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,a]:t.mutableSourceEagerHydrationData.push(r,a);return new Eo(t)};Dt.render=function(e,t,r){if(!To(t))throw Error(re(200));return Po(null,e,t,!1,r)};Dt.unmountComponentAtNode=function(e){if(!To(e))throw Error(re(40));return e._reactRootContainer?(ur(function(){Po(null,null,e,!1,function(){e._reactRootContainer=null,e[xn]=null})}),!0):!1};Dt.unstable_batchedUpdates=Zl;Dt.unstable_renderSubtreeIntoContainer=function(e,t,r,s){if(!To(r))throw Error(re(200));if(e==null||e._reactInternals===void 0)throw Error(re(38));return Po(e,t,r,!1,s)};Dt.version="18.3.1-next-f1338f8080-20240426";function fm(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(fm)}catch(e){console.error(e)}}fm(),fu.exports=Dt;var pp=fu.exports,Ed=pp;pi.createRoot=Ed.createRoot,pi.hydrateRoot=Ed.hydrateRoot;const xp="modulepreload",gp=function(e){return"/"+e},Td={},ic=function(t,r,s){if(!r||r.length===0)return t();const a=document.getElementsByTagName("link");return Promise.all(r.map(o=>{if(o=gp(o),o in Td)return;Td[o]=!0;const i=o.endsWith(".css"),l=i?'[rel="stylesheet"]':"";if(!!s)for(let m=a.length-1;m>=0;m--){const p=a[m];if(p.href===o&&(!i||p.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${l}`))return;const u=document.createElement("link");if(u.rel=i?"stylesheet":xp,i||(u.as="script",u.crossOrigin=""),u.href=o,document.head.appendChild(u),i)return new Promise((m,p)=>{u.addEventListener("load",m),u.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>t()).catch(o=>{const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=o,window.dispatchEvent(i),!i.defaultPrevented)throw o})};var Pd="popstate";function vp(e={}){function t(s,a){let{pathname:o,search:i,hash:l}=s.location;return ll("",{pathname:o,search:i,hash:l},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}function r(s,a){return typeof a=="string"?a:Ys(a)}return bp(t,r,null,e)}function Fe(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Yt(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function yp(){return Math.random().toString(36).substring(2,10)}function Rd(e,t){return{usr:e.state,key:e.key,idx:t}}function ll(e,t,r=null,s){return{pathname:typeof e=="string"?e:e.pathname,search:"",hash:"",...typeof t=="string"?Gr(t):t,state:r,key:t&&t.key||s||yp()}}function Ys({pathname:e="/",search:t="",hash:r=""}){return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Gr(e){let t={};if(e){let r=e.indexOf("#");r>=0&&(t.hash=e.substring(r),e=e.substring(0,r));let s=e.indexOf("?");s>=0&&(t.search=e.substring(s),e=e.substring(0,s)),e&&(t.pathname=e)}return t}function bp(e,t,r,s={}){let{window:a=document.defaultView,v5Compat:o=!1}=s,i=a.history,l="POP",c=null,u=m();u==null&&(u=0,i.replaceState({...i.state,idx:u},""));function m(){return(i.state||{idx:null}).idx}function p(){l="POP";let S=m(),y=S==null?null:S-u;u=S,c&&c({action:l,location:j.location,delta:y})}function f(S,y){l="PUSH";let g=ll(j.location,S,y);r&&r(g,S),u=m()+1;let v=Rd(g,u),N=j.createHref(g);try{i.pushState(v,"",N)}catch(C){if(C instanceof DOMException&&C.name==="DataCloneError")throw C;a.location.assign(N)}o&&c&&c({action:l,location:j.location,delta:1})}function w(S,y){l="REPLACE";let g=ll(j.location,S,y);r&&r(g,S),u=m();let v=Rd(g,u),N=j.createHref(g);i.replaceState(v,"",N),o&&c&&c({action:l,location:j.location,delta:0})}function x(S){return wp(S)}let j={get action(){return l},get location(){return e(a,i)},listen(S){if(c)throw new Error("A history only accepts one active listener");return a.addEventListener(Pd,p),c=S,()=>{a.removeEventListener(Pd,p),c=null}},createHref(S){return t(a,S)},createURL:x,encodeLocation(S){let y=x(S);return{pathname:y.pathname,search:y.search,hash:y.hash}},push:f,replace:w,go(S){return i.go(S)}};return j}function wp(e,t=!1){let r="http://localhost";typeof window<"u"&&(r=window.location.origin!=="null"?window.location.origin:window.location.href),Fe(r,"No window.location.(origin|href) available to create URL");let s=typeof e=="string"?e:Ys(e);return s=s.replace(/ $/,"%20"),!t&&s.startsWith("//")&&(s=r+s),new URL(s,r)}function hm(e,t,r="/"){return jp(e,t,r,!1)}function jp(e,t,r,s){let a=typeof t=="string"?Gr(t):t,o=yn(a.pathname||"/",r);if(o==null)return null;let i=pm(e);Np(i);let l=null;for(let c=0;l==null&&c<i.length;++c){let u=Lp(o);l=Ap(i[c],u,s)}return l}function pm(e,t=[],r=[],s=""){let a=(o,i,l)=>{let c={relativePath:l===void 0?o.path||"":l,caseSensitive:o.caseSensitive===!0,childrenIndex:i,route:o};c.relativePath.startsWith("/")&&(Fe(c.relativePath.startsWith(s),`Absolute route path "${c.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),c.relativePath=c.relativePath.slice(s.length));let u=hn([s,c.relativePath]),m=r.concat(c);o.children&&o.children.length>0&&(Fe(o.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${u}".`),pm(o.children,t,m,u)),!(o.path==null&&!o.index)&&t.push({path:u,score:Rp(u,o.index),routesMeta:m})};return e.forEach((o,i)=>{var l;if(o.path===""||!((l=o.path)!=null&&l.includes("?")))a(o,i);else for(let c of xm(o.path))a(o,i,c)}),t}function xm(e){let t=e.split("/");if(t.length===0)return[];let[r,...s]=t,a=r.endsWith("?"),o=r.replace(/\?$/,"");if(s.length===0)return a?[o,""]:[o];let i=xm(s.join("/")),l=[];return l.push(...i.map(c=>c===""?o:[o,c].join("/"))),a&&l.push(...i),l.map(c=>e.startsWith("/")&&c===""?"/":c)}function Np(e){e.sort((t,r)=>t.score!==r.score?r.score-t.score:_p(t.routesMeta.map(s=>s.childrenIndex),r.routesMeta.map(s=>s.childrenIndex)))}var kp=/^:[\w-]+$/,Sp=3,Cp=2,Ep=1,Tp=10,Pp=-2,_d=e=>e==="*";function Rp(e,t){let r=e.split("/"),s=r.length;return r.some(_d)&&(s+=Pp),t&&(s+=Cp),r.filter(a=>!_d(a)).reduce((a,o)=>a+(kp.test(o)?Sp:o===""?Ep:Tp),s)}function _p(e,t){return e.length===t.length&&e.slice(0,-1).every((s,a)=>s===t[a])?e[e.length-1]-t[t.length-1]:0}function Ap(e,t,r=!1){let{routesMeta:s}=e,a={},o="/",i=[];for(let l=0;l<s.length;++l){let c=s[l],u=l===s.length-1,m=o==="/"?t:t.slice(o.length)||"/",p=mo({path:c.relativePath,caseSensitive:c.caseSensitive,end:u},m),f=c.route;if(!p&&u&&r&&!s[s.length-1].route.index&&(p=mo({path:c.relativePath,caseSensitive:c.caseSensitive,end:!1},m)),!p)return null;Object.assign(a,p.params),i.push({params:a,pathname:hn([o,p.pathname]),pathnameBase:Op(hn([o,p.pathnameBase])),route:f}),p.pathnameBase!=="/"&&(o=hn([o,p.pathnameBase]))}return i}function mo(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[r,s]=Ip(e.path,e.caseSensitive,e.end),a=t.match(r);if(!a)return null;let o=a[0],i=o.replace(/(.)\/+$/,"$1"),l=a.slice(1);return{params:s.reduce((u,{paramName:m,isOptional:p},f)=>{if(m==="*"){let x=l[f]||"";i=o.slice(0,o.length-x.length).replace(/(.)\/+$/,"$1")}const w=l[f];return p&&!w?u[m]=void 0:u[m]=(w||"").replace(/%2F/g,"/"),u},{}),pathname:o,pathnameBase:i,pattern:e}}function Ip(e,t=!1,r=!0){Yt(e==="*"||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let s=[],a="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(i,l,c)=>(s.push({paramName:l,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(s.push({paramName:"*"}),a+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?a+="\\/*$":e!==""&&e!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,t?void 0:"i"),s]}function Lp(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Yt(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function yn(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let r=t.endsWith("/")?t.length-1:t.length,s=e.charAt(r);return s&&s!=="/"?null:e.slice(r)||"/"}function Dp(e,t="/"){let{pathname:r,search:s="",hash:a=""}=typeof e=="string"?Gr(e):e;return{pathname:r?r.startsWith("/")?r:zp(r,t):t,search:Fp(s),hash:$p(a)}}function zp(e,t){let r=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(a=>{a===".."?r.length>1&&r.pop():a!=="."&&r.push(a)}),r.length>1?r.join("/"):"/"}function ii(e,t,r,s){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${r}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Mp(e){return e.filter((t,r)=>r===0||t.route.path&&t.route.path.length>0)}function lc(e){let t=Mp(e);return t.map((r,s)=>s===t.length-1?r.pathname:r.pathnameBase)}function cc(e,t,r,s=!1){let a;typeof e=="string"?a=Gr(e):(a={...e},Fe(!a.pathname||!a.pathname.includes("?"),ii("?","pathname","search",a)),Fe(!a.pathname||!a.pathname.includes("#"),ii("#","pathname","hash",a)),Fe(!a.search||!a.search.includes("#"),ii("#","search","hash",a)));let o=e===""||a.pathname==="",i=o?"/":a.pathname,l;if(i==null)l=r;else{let p=t.length-1;if(!s&&i.startsWith("..")){let f=i.split("/");for(;f[0]==="..";)f.shift(),p-=1;a.pathname=f.join("/")}l=p>=0?t[p]:"/"}let c=Dp(a,l),u=i&&i!=="/"&&i.endsWith("/"),m=(o||i===".")&&r.endsWith("/");return!c.pathname.endsWith("/")&&(u||m)&&(c.pathname+="/"),c}var hn=e=>e.join("/").replace(/\/\/+/g,"/"),Op=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Fp=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,$p=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Bp(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}var gm=["POST","PUT","PATCH","DELETE"];new Set(gm);var Up=["GET",...gm];new Set(Up);var Wr=d.createContext(null);Wr.displayName="DataRouter";var Ro=d.createContext(null);Ro.displayName="DataRouterState";d.createContext(!1);var vm=d.createContext({isTransitioning:!1});vm.displayName="ViewTransition";var Yp=d.createContext(new Map);Yp.displayName="Fetchers";var qp=d.createContext(null);qp.displayName="Await";var Zt=d.createContext(null);Zt.displayName="Navigation";var Ks=d.createContext(null);Ks.displayName="Location";var qt=d.createContext({outlet:null,matches:[],isDataRoute:!1});qt.displayName="Route";var dc=d.createContext(null);dc.displayName="RouteError";function Qp(e,{relative:t}={}){Fe(Hr(),"useHref() may be used only in the context of a <Router> component.");let{basename:r,navigator:s}=d.useContext(Zt),{hash:a,pathname:o,search:i}=Xs(e,{relative:t}),l=o;return r!=="/"&&(l=o==="/"?r:hn([r,o])),s.createHref({pathname:l,search:i,hash:a})}function Hr(){return d.useContext(Ks)!=null}function et(){return Fe(Hr(),"useLocation() may be used only in the context of a <Router> component."),d.useContext(Ks).location}var ym="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function bm(e){d.useContext(Zt).static||d.useLayoutEffect(e)}function ke(){let{isDataRoute:e}=d.useContext(qt);return e?ix():Gp()}function Gp(){Fe(Hr(),"useNavigate() may be used only in the context of a <Router> component.");let e=d.useContext(Wr),{basename:t,navigator:r}=d.useContext(Zt),{matches:s}=d.useContext(qt),{pathname:a}=et(),o=JSON.stringify(lc(s)),i=d.useRef(!1);return bm(()=>{i.current=!0}),d.useCallback((c,u={})=>{if(Yt(i.current,ym),!i.current)return;if(typeof c=="number"){r.go(c);return}let m=cc(c,JSON.parse(o),a,u.relative==="path");e==null&&t!=="/"&&(m.pathname=m.pathname==="/"?t:hn([t,m.pathname])),(u.replace?r.replace:r.push)(m,u.state,u)},[t,r,o,a,e])}var Wp=d.createContext(null);function Hp(e){let t=d.useContext(qt).outlet;return t&&d.createElement(Wp.Provider,{value:e},t)}function Kp(){let{matches:e}=d.useContext(qt),t=e[e.length-1];return t?t.params:{}}function Xs(e,{relative:t}={}){let{matches:r}=d.useContext(qt),{pathname:s}=et(),a=JSON.stringify(lc(r));return d.useMemo(()=>cc(e,JSON.parse(a),s,t==="path"),[e,a,s,t])}function Xp(e,t){return wm(e,t)}function wm(e,t,r,s){var y;Fe(Hr(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:a}=d.useContext(Zt),{matches:o}=d.useContext(qt),i=o[o.length-1],l=i?i.params:{},c=i?i.pathname:"/",u=i?i.pathnameBase:"/",m=i&&i.route;{let g=m&&m.path||"";jm(c,!m||g.endsWith("*")||g.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${c}" (under <Route path="${g}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${g}"> to <Route path="${g==="/"?"*":`${g}/*`}">.`)}let p=et(),f;if(t){let g=typeof t=="string"?Gr(t):t;Fe(u==="/"||((y=g.pathname)==null?void 0:y.startsWith(u)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${u}" but pathname "${g.pathname}" was given in the \`location\` prop.`),f=g}else f=p;let w=f.pathname||"/",x=w;if(u!=="/"){let g=u.replace(/^\//,"").split("/");x="/"+w.replace(/^\//,"").split("/").slice(g.length).join("/")}let j=hm(e,{pathname:x});Yt(m||j!=null,`No routes matched location "${f.pathname}${f.search}${f.hash}" `),Yt(j==null||j[j.length-1].route.element!==void 0||j[j.length-1].route.Component!==void 0||j[j.length-1].route.lazy!==void 0,`Matched leaf route at location "${f.pathname}${f.search}${f.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let S=tx(j&&j.map(g=>Object.assign({},g,{params:Object.assign({},l,g.params),pathname:hn([u,a.encodeLocation?a.encodeLocation(g.pathname).pathname:g.pathname]),pathnameBase:g.pathnameBase==="/"?u:hn([u,a.encodeLocation?a.encodeLocation(g.pathnameBase).pathname:g.pathnameBase])})),o,r,s);return t&&S?d.createElement(Ks.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...f},navigationType:"POP"}},S):S}function Vp(){let e=ox(),t=Bp(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,s="rgba(200,200,200, 0.5)",a={padding:"0.5rem",backgroundColor:s},o={padding:"2px 4px",backgroundColor:s},i=null;return console.error("Error handled by React Router default ErrorBoundary:",e),i=d.createElement(d.Fragment,null,d.createElement("p",null,"💿 Hey developer 👋"),d.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",d.createElement("code",{style:o},"ErrorBoundary")," or"," ",d.createElement("code",{style:o},"errorElement")," prop on your route.")),d.createElement(d.Fragment,null,d.createElement("h2",null,"Unexpected Application Error!"),d.createElement("h3",{style:{fontStyle:"italic"}},t),r?d.createElement("pre",{style:a},r):null,i)}var Jp=d.createElement(Vp,null),Zp=class extends d.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return this.state.error!==void 0?d.createElement(qt.Provider,{value:this.props.routeContext},d.createElement(dc.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function ex({routeContext:e,match:t,children:r}){let s=d.useContext(Wr);return s&&s.static&&s.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=t.route.id),d.createElement(qt.Provider,{value:e},r)}function tx(e,t=[],r=null,s=null){if(e==null){if(!r)return null;if(r.errors)e=r.matches;else if(t.length===0&&!r.initialized&&r.matches.length>0)e=r.matches;else return null}let a=e,o=r==null?void 0:r.errors;if(o!=null){let c=a.findIndex(u=>u.route.id&&(o==null?void 0:o[u.route.id])!==void 0);Fe(c>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(o).join(",")}`),a=a.slice(0,Math.min(a.length,c+1))}let i=!1,l=-1;if(r)for(let c=0;c<a.length;c++){let u=a[c];if((u.route.HydrateFallback||u.route.hydrateFallbackElement)&&(l=c),u.route.id){let{loaderData:m,errors:p}=r,f=u.route.loader&&!m.hasOwnProperty(u.route.id)&&(!p||p[u.route.id]===void 0);if(u.route.lazy||f){i=!0,l>=0?a=a.slice(0,l+1):a=[a[0]];break}}}return a.reduceRight((c,u,m)=>{let p,f=!1,w=null,x=null;r&&(p=o&&u.route.id?o[u.route.id]:void 0,w=u.route.errorElement||Jp,i&&(l<0&&m===0?(jm("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),f=!0,x=null):l===m&&(f=!0,x=u.route.hydrateFallbackElement||null)));let j=t.concat(a.slice(0,m+1)),S=()=>{let y;return p?y=w:f?y=x:u.route.Component?y=d.createElement(u.route.Component,null):u.route.element?y=u.route.element:y=c,d.createElement(ex,{match:u,routeContext:{outlet:c,matches:j,isDataRoute:r!=null},children:y})};return r&&(u.route.ErrorBoundary||u.route.errorElement||m===0)?d.createElement(Zp,{location:r.location,revalidation:r.revalidation,component:w,error:p,children:S(),routeContext:{outlet:null,matches:j,isDataRoute:!0}}):S()},null)}function uc(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function nx(e){let t=d.useContext(Wr);return Fe(t,uc(e)),t}function rx(e){let t=d.useContext(Ro);return Fe(t,uc(e)),t}function sx(e){let t=d.useContext(qt);return Fe(t,uc(e)),t}function mc(e){let t=sx(e),r=t.matches[t.matches.length-1];return Fe(r.route.id,`${e} can only be used on routes that contain a unique "id"`),r.route.id}function ax(){return mc("useRouteId")}function ox(){var s;let e=d.useContext(dc),t=rx("useRouteError"),r=mc("useRouteError");return e!==void 0?e:(s=t.errors)==null?void 0:s[r]}function ix(){let{router:e}=nx("useNavigate"),t=mc("useNavigate"),r=d.useRef(!1);return bm(()=>{r.current=!0}),d.useCallback(async(a,o={})=>{Yt(r.current,ym),r.current&&(typeof a=="number"?e.navigate(a):await e.navigate(a,{fromRouteId:t,...o}))},[e,t])}var Ad={};function jm(e,t,r){!t&&!Ad[e]&&(Ad[e]=!0,Yt(!1,r))}d.memo(lx);function lx({routes:e,future:t,state:r}){return wm(e,void 0,r,t)}function cx({to:e,replace:t,state:r,relative:s}){Fe(Hr(),"<Navigate> may be used only in the context of a <Router> component.");let{static:a}=d.useContext(Zt);Yt(!a,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:o}=d.useContext(qt),{pathname:i}=et(),l=ke(),c=cc(e,lc(o),i,s==="path"),u=JSON.stringify(c);return d.useEffect(()=>{l(JSON.parse(u),{replace:t,state:r,relative:s})},[l,u,s,t,r]),null}function dx(e){return Hp(e.context)}function _e(e){Fe(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function ux({basename:e="/",children:t=null,location:r,navigationType:s="POP",navigator:a,static:o=!1}){Fe(!Hr(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let i=e.replace(/^\/*/,"/"),l=d.useMemo(()=>({basename:i,navigator:a,static:o,future:{}}),[i,a,o]);typeof r=="string"&&(r=Gr(r));let{pathname:c="/",search:u="",hash:m="",state:p=null,key:f="default"}=r,w=d.useMemo(()=>{let x=yn(c,i);return x==null?null:{location:{pathname:x,search:u,hash:m,state:p,key:f},navigationType:s}},[i,c,u,m,p,f,s]);return Yt(w!=null,`<Router basename="${i}"> is not able to match the URL "${c}${u}${m}" because it does not start with the basename, so the <Router> won't render anything.`),w==null?null:d.createElement(Zt.Provider,{value:l},d.createElement(Ks.Provider,{children:t,value:w}))}function mx({children:e,location:t}){return Xp(cl(e),t)}function cl(e,t=[]){let r=[];return d.Children.forEach(e,(s,a)=>{if(!d.isValidElement(s))return;let o=[...t,a];if(s.type===d.Fragment){r.push.apply(r,cl(s.props.children,o));return}Fe(s.type===_e,`[${typeof s.type=="string"?s.type:s.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Fe(!s.props.index||!s.props.children,"An index route cannot have child routes.");let i={id:s.props.id||o.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,loader:s.props.loader,action:s.props.action,hydrateFallbackElement:s.props.hydrateFallbackElement,HydrateFallback:s.props.HydrateFallback,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.hasErrorBoundary===!0||s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(i.children=cl(s.props.children,o)),r.push(i)}),r}var Ma="get",Oa="application/x-www-form-urlencoded";function _o(e){return e!=null&&typeof e.tagName=="string"}function fx(e){return _o(e)&&e.tagName.toLowerCase()==="button"}function hx(e){return _o(e)&&e.tagName.toLowerCase()==="form"}function px(e){return _o(e)&&e.tagName.toLowerCase()==="input"}function xx(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function gx(e,t){return e.button===0&&(!t||t==="_self")&&!xx(e)}function dl(e=""){return new URLSearchParams(typeof e=="string"||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce((t,r)=>{let s=e[r];return t.concat(Array.isArray(s)?s.map(a=>[r,a]):[[r,s]])},[]))}function vx(e,t){let r=dl(e);return t&&t.forEach((s,a)=>{r.has(a)||t.getAll(a).forEach(o=>{r.append(a,o)})}),r}var pa=null;function yx(){if(pa===null)try{new FormData(document.createElement("form"),0),pa=!1}catch{pa=!0}return pa}var bx=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function li(e){return e!=null&&!bx.has(e)?(Yt(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Oa}"`),null):e}function wx(e,t){let r,s,a,o,i;if(hx(e)){let l=e.getAttribute("action");s=l?yn(l,t):null,r=e.getAttribute("method")||Ma,a=li(e.getAttribute("enctype"))||Oa,o=new FormData(e)}else if(fx(e)||px(e)&&(e.type==="submit"||e.type==="image")){let l=e.form;if(l==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let c=e.getAttribute("formaction")||l.getAttribute("action");if(s=c?yn(c,t):null,r=e.getAttribute("formmethod")||l.getAttribute("method")||Ma,a=li(e.getAttribute("formenctype"))||li(l.getAttribute("enctype"))||Oa,o=new FormData(l,e),!yx()){let{name:u,type:m,value:p}=e;if(m==="image"){let f=u?`${u}.`:"";o.append(`${f}x`,"0"),o.append(`${f}y`,"0")}else u&&o.append(u,p)}}else{if(_o(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');r=Ma,s=null,a=Oa,i=e}return o&&a==="text/plain"&&(i=o,o=void 0),{action:s,method:r.toLowerCase(),encType:a,formData:o,body:i}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function fc(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function jx(e,t,r){let s=typeof e=="string"?new URL(e,typeof window>"u"?"server://singlefetch/":window.location.origin):e;return s.pathname==="/"?s.pathname=`_root.${r}`:t&&yn(s.pathname,t)==="/"?s.pathname=`${t.replace(/\/$/,"")}/_root.${r}`:s.pathname=`${s.pathname.replace(/\/$/,"")}.${r}`,s}async function Nx(e,t){if(e.id in t)return t[e.id];try{let r=await ic(()=>import(e.module),[]);return t[e.id]=r,r}catch(r){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(r),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function kx(e){return e!=null&&typeof e.page=="string"}function Sx(e){return e==null?!1:e.href==null?e.rel==="preload"&&typeof e.imageSrcSet=="string"&&typeof e.imageSizes=="string":typeof e.rel=="string"&&typeof e.href=="string"}async function Cx(e,t,r){let s=await Promise.all(e.map(async a=>{let o=t.routes[a.route.id];if(o){let i=await Nx(o,r);return i.links?i.links():[]}return[]}));return Rx(s.flat(1).filter(Sx).filter(a=>a.rel==="stylesheet"||a.rel==="preload").map(a=>a.rel==="stylesheet"?{...a,rel:"prefetch",as:"style"}:{...a,rel:"prefetch"}))}function Id(e,t,r,s,a,o){let i=(c,u)=>r[u]?c.route.id!==r[u].route.id:!0,l=(c,u)=>{var m;return r[u].pathname!==c.pathname||((m=r[u].route.path)==null?void 0:m.endsWith("*"))&&r[u].params["*"]!==c.params["*"]};return o==="assets"?t.filter((c,u)=>i(c,u)||l(c,u)):o==="data"?t.filter((c,u)=>{var p;let m=s.routes[c.route.id];if(!m||!m.hasLoader)return!1;if(i(c,u)||l(c,u))return!0;if(c.route.shouldRevalidate){let f=c.route.shouldRevalidate({currentUrl:new URL(a.pathname+a.search+a.hash,window.origin),currentParams:((p=r[0])==null?void 0:p.params)||{},nextUrl:new URL(e,window.origin),nextParams:c.params,defaultShouldRevalidate:!0});if(typeof f=="boolean")return f}return!0}):[]}function Ex(e,t,{includeHydrateFallback:r}={}){return Tx(e.map(s=>{let a=t.routes[s.route.id];if(!a)return[];let o=[a.module];return a.clientActionModule&&(o=o.concat(a.clientActionModule)),a.clientLoaderModule&&(o=o.concat(a.clientLoaderModule)),r&&a.hydrateFallbackModule&&(o=o.concat(a.hydrateFallbackModule)),a.imports&&(o=o.concat(a.imports)),o}).flat(1))}function Tx(e){return[...new Set(e)]}function Px(e){let t={},r=Object.keys(e).sort();for(let s of r)t[s]=e[s];return t}function Rx(e,t){let r=new Set,s=new Set(t);return e.reduce((a,o)=>{if(t&&!kx(o)&&o.as==="script"&&o.href&&s.has(o.href))return a;let l=JSON.stringify(Px(o));return r.has(l)||(r.add(l),a.push({key:l,link:o})),a},[])}function Nm(){let e=d.useContext(Wr);return fc(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}function _x(){let e=d.useContext(Ro);return fc(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}var hc=d.createContext(void 0);hc.displayName="FrameworkContext";function km(){let e=d.useContext(hc);return fc(e,"You must render this element inside a <HydratedRouter> element"),e}function Ax(e,t){let r=d.useContext(hc),[s,a]=d.useState(!1),[o,i]=d.useState(!1),{onFocus:l,onBlur:c,onMouseEnter:u,onMouseLeave:m,onTouchStart:p}=t,f=d.useRef(null);d.useEffect(()=>{if(e==="render"&&i(!0),e==="viewport"){let j=y=>{y.forEach(g=>{i(g.isIntersecting)})},S=new IntersectionObserver(j,{threshold:.5});return f.current&&S.observe(f.current),()=>{S.disconnect()}}},[e]),d.useEffect(()=>{if(s){let j=setTimeout(()=>{i(!0)},100);return()=>{clearTimeout(j)}}},[s]);let w=()=>{a(!0)},x=()=>{a(!1),i(!1)};return r?e!=="intent"?[o,f,{}]:[o,f,{onFocus:is(l,w),onBlur:is(c,x),onMouseEnter:is(u,w),onMouseLeave:is(m,x),onTouchStart:is(p,w)}]:[!1,f,{}]}function is(e,t){return r=>{e&&e(r),r.defaultPrevented||t(r)}}function Ix({page:e,...t}){let{router:r}=Nm(),s=d.useMemo(()=>hm(r.routes,e,r.basename),[r.routes,e,r.basename]);return s?d.createElement(Dx,{page:e,matches:s,...t}):null}function Lx(e){let{manifest:t,routeModules:r}=km(),[s,a]=d.useState([]);return d.useEffect(()=>{let o=!1;return Cx(e,t,r).then(i=>{o||a(i)}),()=>{o=!0}},[e,t,r]),s}function Dx({page:e,matches:t,...r}){let s=et(),{manifest:a,routeModules:o}=km(),{basename:i}=Nm(),{loaderData:l,matches:c}=_x(),u=d.useMemo(()=>Id(e,t,c,a,s,"data"),[e,t,c,a,s]),m=d.useMemo(()=>Id(e,t,c,a,s,"assets"),[e,t,c,a,s]),p=d.useMemo(()=>{if(e===s.pathname+s.search+s.hash)return[];let x=new Set,j=!1;if(t.forEach(y=>{var v;let g=a.routes[y.route.id];!g||!g.hasLoader||(!u.some(N=>N.route.id===y.route.id)&&y.route.id in l&&((v=o[y.route.id])!=null&&v.shouldRevalidate)||g.hasClientLoader?j=!0:x.add(y.route.id))}),x.size===0)return[];let S=jx(e,i,"data");return j&&x.size>0&&S.searchParams.set("_routes",t.filter(y=>x.has(y.route.id)).map(y=>y.route.id).join(",")),[S.pathname+S.search]},[i,l,s,a,u,t,e,o]),f=d.useMemo(()=>Ex(m,a),[m,a]),w=Lx(m);return d.createElement(d.Fragment,null,p.map(x=>d.createElement("link",{key:x,rel:"prefetch",as:"fetch",href:x,...r})),f.map(x=>d.createElement("link",{key:x,rel:"modulepreload",href:x,...r})),w.map(({key:x,link:j})=>d.createElement("link",{key:x,...j})))}function zx(...e){return t=>{e.forEach(r=>{typeof r=="function"?r(t):r!=null&&(r.current=t)})}}var Sm=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Sm&&(window.__reactRouterVersion="7.7.1")}catch{}function Mx({basename:e,children:t,window:r}){let s=d.useRef();s.current==null&&(s.current=vp({window:r,v5Compat:!0}));let a=s.current,[o,i]=d.useState({action:a.action,location:a.location}),l=d.useCallback(c=>{d.startTransition(()=>i(c))},[i]);return d.useLayoutEffect(()=>a.listen(l),[a,l]),d.createElement(ux,{basename:e,children:t,location:o.location,navigationType:o.action,navigator:a})}var Cm=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Em=d.forwardRef(function({onClick:t,discover:r="render",prefetch:s="none",relative:a,reloadDocument:o,replace:i,state:l,target:c,to:u,preventScrollReset:m,viewTransition:p,...f},w){let{basename:x}=d.useContext(Zt),j=typeof u=="string"&&Cm.test(u),S,y=!1;if(typeof u=="string"&&j&&(S=u,Sm))try{let b=new URL(window.location.href),k=u.startsWith("//")?new URL(b.protocol+u):new URL(u),_=yn(k.pathname,x);k.origin===b.origin&&_!=null?u=_+k.search+k.hash:y=!0}catch{Yt(!1,`<Link to="${u}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let g=Qp(u,{relative:a}),[v,N,C]=Ax(s,f),R=Bx(u,{replace:i,state:l,target:c,preventScrollReset:m,relative:a,viewTransition:p});function E(b){t&&t(b),b.defaultPrevented||R(b)}let h=d.createElement("a",{...f,...C,href:S||g,onClick:y||o?t:E,ref:zx(w,N),target:c,"data-discover":!j&&r==="render"?"true":void 0});return v&&!j?d.createElement(d.Fragment,null,h,d.createElement(Ix,{page:g})):h});Em.displayName="Link";var Ox=d.forwardRef(function({"aria-current":t="page",caseSensitive:r=!1,className:s="",end:a=!1,style:o,to:i,viewTransition:l,children:c,...u},m){let p=Xs(i,{relative:u.relative}),f=et(),w=d.useContext(Ro),{navigator:x,basename:j}=d.useContext(Zt),S=w!=null&&Gx(p)&&l===!0,y=x.encodeLocation?x.encodeLocation(p).pathname:p.pathname,g=f.pathname,v=w&&w.navigation&&w.navigation.location?w.navigation.location.pathname:null;r||(g=g.toLowerCase(),v=v?v.toLowerCase():null,y=y.toLowerCase()),v&&j&&(v=yn(v,j)||v);const N=y!=="/"&&y.endsWith("/")?y.length-1:y.length;let C=g===y||!a&&g.startsWith(y)&&g.charAt(N)==="/",R=v!=null&&(v===y||!a&&v.startsWith(y)&&v.charAt(y.length)==="/"),E={isActive:C,isPending:R,isTransitioning:S},h=C?t:void 0,b;typeof s=="function"?b=s(E):b=[s,C?"active":null,R?"pending":null,S?"transitioning":null].filter(Boolean).join(" ");let k=typeof o=="function"?o(E):o;return d.createElement(Em,{...u,"aria-current":h,className:b,ref:m,style:k,to:i,viewTransition:l},typeof c=="function"?c(E):c)});Ox.displayName="NavLink";var Fx=d.forwardRef(({discover:e="render",fetcherKey:t,navigate:r,reloadDocument:s,replace:a,state:o,method:i=Ma,action:l,onSubmit:c,relative:u,preventScrollReset:m,viewTransition:p,...f},w)=>{let x=qx(),j=Qx(l,{relative:u}),S=i.toLowerCase()==="get"?"get":"post",y=typeof l=="string"&&Cm.test(l),g=v=>{if(c&&c(v),v.defaultPrevented)return;v.preventDefault();let N=v.nativeEvent.submitter,C=(N==null?void 0:N.getAttribute("formmethod"))||i;x(N||v.currentTarget,{fetcherKey:t,method:C,navigate:r,replace:a,state:o,relative:u,preventScrollReset:m,viewTransition:p})};return d.createElement("form",{ref:w,method:S,action:j,onSubmit:s?c:g,...f,"data-discover":!y&&e==="render"?"true":void 0})});Fx.displayName="Form";function $x(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Tm(e){let t=d.useContext(Wr);return Fe(t,$x(e)),t}function Bx(e,{target:t,replace:r,state:s,preventScrollReset:a,relative:o,viewTransition:i}={}){let l=ke(),c=et(),u=Xs(e,{relative:o});return d.useCallback(m=>{if(gx(m,t)){m.preventDefault();let p=r!==void 0?r:Ys(c)===Ys(u);l(e,{replace:p,state:s,preventScrollReset:a,relative:o,viewTransition:i})}},[c,l,u,r,s,t,e,a,o,i])}function Pm(e){Yt(typeof URLSearchParams<"u","You cannot use the `useSearchParams` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params.");let t=d.useRef(dl(e)),r=d.useRef(!1),s=et(),a=d.useMemo(()=>vx(s.search,r.current?null:t.current),[s.search]),o=ke(),i=d.useCallback((l,c)=>{const u=dl(typeof l=="function"?l(new URLSearchParams(a)):l);r.current=!0,o("?"+u,c)},[o,a]);return[a,i]}var Ux=0,Yx=()=>`__${String(++Ux)}__`;function qx(){let{router:e}=Tm("useSubmit"),{basename:t}=d.useContext(Zt),r=ax();return d.useCallback(async(s,a={})=>{let{action:o,method:i,encType:l,formData:c,body:u}=wx(s,t);if(a.navigate===!1){let m=a.fetcherKey||Yx();await e.fetch(m,r,a.action||o,{preventScrollReset:a.preventScrollReset,formData:c,body:u,formMethod:a.method||i,formEncType:a.encType||l,flushSync:a.flushSync})}else await e.navigate(a.action||o,{preventScrollReset:a.preventScrollReset,formData:c,body:u,formMethod:a.method||i,formEncType:a.encType||l,replace:a.replace,state:a.state,fromRouteId:r,flushSync:a.flushSync,viewTransition:a.viewTransition})},[e,t,r])}function Qx(e,{relative:t}={}){let{basename:r}=d.useContext(Zt),s=d.useContext(qt);Fe(s,"useFormAction must be used inside a RouteContext");let[a]=s.matches.slice(-1),o={...Xs(e||".",{relative:t})},i=et();if(e==null){o.search=i.search;let l=new URLSearchParams(o.search),c=l.getAll("index");if(c.some(m=>m==="")){l.delete("index"),c.filter(p=>p).forEach(p=>l.append("index",p));let m=l.toString();o.search=m?`?${m}`:""}}return(!e||e===".")&&a.route.index&&(o.search=o.search?o.search.replace(/^\?/,"?index&"):"?index"),r!=="/"&&(o.pathname=o.pathname==="/"?r:hn([r,o.pathname])),Ys(o)}function Gx(e,{relative:t}={}){let r=d.useContext(vm);Fe(r!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:s}=Tm("useViewTransitionState"),a=Xs(e,{relative:t});if(!r.isTransitioning)return!1;let o=yn(r.currentLocation.pathname,s)||r.currentLocation.pathname,i=yn(r.nextLocation.pathname,s)||r.nextLocation.pathname;return mo(a.pathname,i)!=null||mo(a.pathname,o)!=null}function Wx({size:e=22,spinning:t=!1}){return n.jsx("div",{style:{width:e,height:e},className:"grid place-items-center",children:n.jsxs("svg",{viewBox:"0 0 100 100",className:`${t?"animate-[spin_0.8s_ease-out]":"motion-safe:animate-[spin_9s_linear_infinite]"} group-active:motion-safe:animate-[spin_1.2s_linear_infinite]`,style:{filter:"drop-shadow(0 2px 4px rgba(0,0,0,0.2))"},children:[n.jsx("path",{d:"M50,50 L50,5 A45,45 0 0,1 86.97,25.98 Z",fill:"#6366F1"}),n.jsx("path",{d:"M50,50 L86.97,25.98 A45,45 0 0,1 86.97,74.02 Z",fill:"#22C55E"}),n.jsx("path",{d:"M50,50 L86.97,74.02 A45,45 0 0,1 50,95 Z",fill:"#F59E0B"}),n.jsx("path",{d:"M50,50 L50,95 A45,45 0 0,1 13.03,74.02 Z",fill:"#EF4444"}),n.jsx("path",{d:"M50,50 L13.03,74.02 A45,45 0 0,1 13.03,25.98 Z",fill:"#3B82F6"}),n.jsx("path",{d:"M50,50 L13.03,25.98 A45,45 0 0,1 50,5 Z",fill:"#8B5CF6"}),n.jsx("circle",{cx:"50",cy:"50",r:"9",fill:"#111827",stroke:"white",strokeWidth:"2"})]})})}function Hx(){const e=ke(),{pathname:t}=et(),r=d.useRef({}),s=d.useRef({}),[a,o]=d.useState(!1),i=d.useRef(null);d.useEffect(()=>{const v=i.current;if(!v)return;const N=C=>{C.preventDefault();const R=.1;v.scrollTop+=C.deltaY*R};return v.addEventListener("wheel",N,{passive:!1}),()=>{v.removeEventListener("wheel",N)}},[]);const l=v=>{if(navigator.vibrate)switch(v){case"light":navigator.vibrate(20);break;case"medium":navigator.vibrate(35);break;case"heavy":navigator.vibrate(50);break;case"double":navigator.vibrate([30,50,30]);break;case"success":navigator.vibrate([20,50,20,50,20]);break;default:navigator.vibrate(25)}};d.useCallback(()=>{var v;if(["/","/play","/swipe","/profile"].includes(t)){const N=((v=i.current)==null?void 0:v.scrollTop)||0,C=window.scrollY||window.pageYOffset||0,R=N>0?N:C;console.log(`Saving scroll for ${t}: main=${N}, window=${C}, saved=${R}`),r.current[t]=R}},[t]),d.useEffect(()=>{let v=null;const N=()=>{v&&cancelAnimationFrame(v),v=requestAnimationFrame(()=>{var R;if(["/","/play","/swipe","/profile"].includes(t)){const E=((R=i.current)==null?void 0:R.scrollTop)||0,h=window.scrollY||window.pageYOffset||0,b=E>0?E:h;r.current[t]=b,console.log(`Scroll position updated for ${t}: ${b}`)}})};window.addEventListener("scroll",N,{passive:!0});const C=i.current;return C&&C.addEventListener("scroll",N,{passive:!0}),()=>{v&&cancelAnimationFrame(v),window.removeEventListener("scroll",N),C&&C.removeEventListener("scroll",N)}},[t]),d.useEffect(()=>{if(i.current&&i.current.classList.add("navigating"),["/profile/","/quiz/","/practice/","/play/classic","/settings","/about"].some(C=>t.startsWith(C)))window.scrollTo(0,0),i.current&&(i.current.scrollTop=0),setTimeout(()=>{i.current&&i.current.classList.remove("navigating")},20);else{const C=r.current[t];if(console.log(`Attempting to restore scroll for ${t}: ${C}`),C!=null&&C>0){const R=(E=0)=>{E>=5||(i.current?(i.current.scrollTop=C,setTimeout(()=>{var b;const h=((b=i.current)==null?void 0:b.scrollTop)||0;Math.abs(h-C)>10?(window.scrollTo(0,C),setTimeout(()=>{const k=window.scrollY||window.pageYOffset||0;console.log(`Restore attempt ${E+1}: main=${h}, window=${k}, target=${C}`),Math.abs(k-C)>10&&Math.abs(h-C)>10&&R(E+1)},20)):console.log(`Successfully restored scroll to ${h}`)},20)):window.scrollTo(0,C))};R(0),setTimeout(()=>{i.current&&i.current.classList.remove("navigating")},20)}else window.scrollTo(0,0),i.current&&(i.current.scrollTop=0),setTimeout(()=>{i.current&&i.current.classList.remove("navigating")},20)}},[t]);const[c,u]=d.useState(!1),[m,p]=d.useState({open:!1,go:null}),[f,w]=d.useState(!1);d.useEffect(()=>{const v=()=>{w(document.body.classList.contains("hide-bottom-nav"))};v();const N=new MutationObserver(v);return N.observe(document.body,{attributes:!0,attributeFilter:["class"]}),()=>N.disconnect()},[]),d.useEffect(()=>{const v=new MutationObserver(()=>{u(document.body.classList.contains("modal-open"))});return v.observe(document.body,{attributes:!0,attributeFilter:["class"]}),()=>v.disconnect()},[]);const j=c||f||[/^\/quiz\//,/^\/practice\//,/^\/profile\//,/^\/play\/classic/].some(v=>v.test(t)),S=v=>v==="/"?t==="/":t.startsWith(v),y=d.useCallback(()=>{console.log("Scrolling to top"),window.scrollTo({top:0,behavior:"smooth"}),i.current&&i.current.scrollTo({top:0,behavior:"smooth"}),document.documentElement.scrollTop=0,document.body.scrollTop=0},[]),g=({path:v,icon:N,label:C,emoji:R})=>{const E=S(v),[h,b]=d.useState(!1),k=d.useCallback(()=>{var J;const _=Date.now();if(E){const H=s.current[v]||0;console.log(`Active tab clicked. Time since last tap: ${_-H}ms`),_-H<500?(console.log("Double tap detected!"),y(),l("double"),s.current[v]=0):s.current[v]=_;return}if(["/","/play","/swipe","/profile"].includes(t)){const H=((J=i.current)==null?void 0:J.scrollTop)||0,q=window.scrollY||window.pageYOffset||0,O=H>0?H:q;console.log(`Manually saving scroll before navigation from ${t}: ${O}`),r.current[t]=O}const P=s.current[v]||0;if(_-P<500){console.log("Double tap on inactive tab - navigating and scrolling to top"),r.current[v]=0,v==="/play"?(o(!0),l("double"),setTimeout(()=>{e(`/play?view=modes&reset=${Date.now()}`),o(!1),setTimeout(y,100)},200)):(l("double"),e(v),setTimeout(y,100)),s.current[v]=0;return}s.current[v]=_,b(!0),setTimeout(()=>b(!1),600);const F=()=>{if(v==="/play"){o(!0),l("heavy"),setTimeout(()=>{e(`/play?view=modes&reset=${Date.now()}`),o(!1)},200);return}l("medium"),e(v)};if(localStorage.getItem("qp_in_question")==="true"){p({open:!0,go:F});return}F()},[E,v,t,e,y,l]);return n.jsxs("button",{type:"button",onClick:k,className:`group relative flex h-14 w-20 flex-col items-center justify-center rounded-xl transition-all
          ${E?"scale-110":"scale-100 hover:scale-105"}
          ${h?"animate-bounce":""}`,"aria-current":E?"page":void 0,children:[E&&n.jsxs(n.Fragment,{children:[n.jsx("span",{className:"absolute -top-2 h-1.5 w-10 rounded-full bg-gradient-to-r from-transparent via-white to-transparent opacity-60"}),n.jsx("div",{className:"absolute inset-0 rounded-xl bg-white/10 blur-xl"})]}),n.jsx("div",{className:`leading-none text-2xl transition-transform ${E?"scale-125":""} ${v==="/play"&&a?"animate-spin":""}`,children:R||N}),n.jsx("span",{className:`mt-1 text-[10px] font-medium transition-all ${E?"text-white":"text-base-muted/80"}`,children:C})]})};return n.jsxs("div",{className:"min-h-screen bg-base-bg text-base-text",children:[n.jsx("style",{children:`
        .hide-bottom-nav nav[role="navigation"] {
         display: none !important;
        }
        main.navigating {
          visibility: hidden;
        }
        main {
          scroll-behavior: auto !important;
        }
      `}),n.jsx("main",{ref:i,className:"mx-auto w-full max-w-none px-1 sm:px-3 md:px-4 overscroll-y-contain",style:{height:j||document.body.classList.contains("hide-bottom-nav")?"100dvh":"calc(100dvh - (5.5rem + env(safe-area-inset-bottom)))",paddingTop:"calc(env(safe-area-inset-top) + 12px)",paddingBottom:j||document.body.classList.contains("hide-bottom-nav")?0:void 0,overflowY:"auto"},children:n.jsx(dx,{})}),m.open&&n.jsxs("div",{className:"fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center px-6",style:{animation:"fadeIn 0.2s ease-out"},children:[n.jsxs("div",{className:"w-full max-w-sm rounded-3xl bg-gradient-to-b from-base-card to-base-card/90 border border-base-border p-6 text-center shadow-2xl",style:{animation:"slideUp 0.3s ease-out"},children:[n.jsx("div",{className:"text-5xl mb-4",style:{animation:"bounce 0.6s ease-out"},children:"😟"}),n.jsx("div",{className:"text-xl font-bold mb-2 bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent",children:"Leave the game?"}),n.jsx("p",{className:"text-base-muted mb-6 text-sm",children:"You'll lose your current progress!"}),n.jsxs("div",{className:"flex gap-3",children:[n.jsx("button",{onClick:()=>{l("medium"),p({open:!1,go:null})},className:"flex-1 py-3 rounded-2xl border-2 border-green-500/30 bg-green-500/10 hover:bg-green-500/20 transition-all font-semibold text-green-400",children:"Keep Playing! 🎮"}),n.jsx("button",{onClick:()=>{l("heavy");const v=m.go;p({open:!1,go:null}),v==null||v()},className:"flex-1 py-3 rounded-2xl bg-gradient-to-r from-red-500/80 to-orange-500/80 text-white font-semibold hover:from-red-500 hover:to-orange-500 transition-all",children:"Leave 👋"})]})]}),n.jsx("style",{children:`
            @keyframes fadeIn {
              from { opacity: 0; }
              to { opacity: 1; }
            }
            @keyframes slideUp {
              from { transform: translateY(20px); opacity: 0; }
              to { transform: translateY(0); opacity: 1; }
            }
          `})]}),!j&&n.jsxs("nav",{role:"navigation","aria-label":"Bottom navigation",className:"fixed inset-x-0 bottom-0 z-50",children:[n.jsx("div",{className:"absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0B0F1A] to-[#0B0F1A]/95 backdrop-blur-lg",style:{height:"calc(5.5rem + env(safe-area-inset-bottom))"},"aria-hidden":!0}),n.jsx("div",{className:"relative mx-auto max-w-md px-4 pb-[calc(env(safe-area-inset-bottom)+0.5rem)] pt-2",children:n.jsxs("div",{className:"relative",children:[n.jsx("div",{className:"absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-green-500/20 blur-2xl"}),n.jsxs("div",{className:"relative flex h-[72px] items-center justify-around rounded-3xl border border-white/10 bg-gradient-to-b from-base-card/95 to-base-card/80 shadow-2xl backdrop-blur-xl",children:[n.jsx(g,{path:"/",emoji:"🏠",label:"Home"}),n.jsx(g,{path:"/play",icon:n.jsx(Wx,{size:26,spinning:a}),label:"Play"}),n.jsx(g,{path:"/swipe",emoji:"📚",label:"Swipe"}),n.jsx(g,{path:"/profile",emoji:"👤",label:"Profile"})]})]})})]})]})}function fo(){return fo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var s in r)({}).hasOwnProperty.call(r,s)&&(e[s]=r[s])}return e},fo.apply(null,arguments)}function Kx(e,t){if(e==null)return{};var r={};for(var s in e)if({}.hasOwnProperty.call(e,s)){if(t.indexOf(s)!==-1)continue;r[s]=e[s]}return r}function Xx(e){d.useEffect(e,[])}var Vx=["id","volume","playbackRate","soundEnabled","interrupt","onload"];function Ze(e,t){var r=t===void 0?{}:t,s=r.volume,a=s===void 0?1:s,o=r.playbackRate,i=o===void 0?1:o,l=r.soundEnabled,c=l===void 0?!0:l,u=r.interrupt,m=u===void 0?!1:u,p=r.onload,f=Kx(r,Vx),w=yt.useRef(null),x=yt.useRef(!1),j=yt.useState(null),S=j[0],y=j[1],g=yt.useState(null),v=g[0],N=g[1],C=function(){typeof p=="function"&&p.call(this),x.current&&y(this.duration()*1e3),N(this)};Xx(function(){return ic(()=>import("./howler-c5388cc4.js").then(k=>k.h),[]).then(function(k){if(!x.current){var _;w.current=(_=k.Howl)!==null&&_!==void 0?_:k.default.Howl,x.current=!0,new w.current(fo({src:Array.isArray(e)?e:[e],volume:a,rate:i,onload:C},f))}}),function(){x.current=!1}}),yt.useEffect(function(){w.current&&v&&N(new w.current(fo({src:Array.isArray(e)?e:[e],volume:a,onload:C},f)))},[JSON.stringify(e)]),yt.useEffect(function(){v&&(v.volume(a),f.sprite||v.rate(i))},[v,a,i]);var R=yt.useCallback(function(k){typeof k>"u"&&(k={}),!(!v||!c&&!k.forceSoundEnabled)&&(m&&v.stop(),k.playbackRate&&v.rate(k.playbackRate),v.play(k.id))},[v,c,m]),E=yt.useCallback(function(k){v&&v.stop(k)},[v]),h=yt.useCallback(function(k){v&&v.pause(k)},[v]),b=[R,{sound:v,stop:E,pause:h,duration:S}];return b}class Jx{constructor(){console.log("UserService initialized")}getUserData(t){try{if(!t)return console.log("No phone provided to getUserData"),null;const s=JSON.parse(localStorage.getItem("users")||"{}")[t]||{},a=JSON.parse(localStorage.getItem(`user_profile_${t}`)||"{}"),o={...s,phone:t,username:a.name||s.username||"",email:a.email||"",city:a.city||"",state:a.state||"",country:a.country||""};return console.log("getUserData merged result:",o),o}catch(r){return console.error("Error in getUserData:",r),null}}getUserDataByIdentifier(t){try{const r=this.getUserData(t);if(r)return r;const s=JSON.parse(localStorage.getItem("users")||"{}");for(let a in s)if(s[a].username===t)return this.getUserData(a);return null}catch(r){return console.error("Error in getUserDataByIdentifier:",r),null}}userExists(t){try{return JSON.parse(localStorage.getItem("users")||"{}").hasOwnProperty(t)}catch(r){return console.error("Error checking if user exists:",r),!1}}createUser(t,r){try{console.log("Creating user:",t,r);const s=JSON.parse(localStorage.getItem("users")||"{}");return s[t]={username:r.username,password:r.password||"123456",avatar:r.avatar,gender:r.gender,ageGroup:r.ageGroup,phone:t,createdAt:new Date().toISOString()},localStorage.setItem("users",JSON.stringify(s)),this.setCurrentUser(t),console.log("User created successfully"),!0}catch(s){return console.error("Error creating user:",s),!1}}setCurrentUser(t){try{const r=this.getUserData(t);if(!r)return!1;const s={phone:t,username:r.username,avatar:r.avatar,gender:r.gender,ageGroup:r.ageGroup};localStorage.setItem("currentUser",JSON.stringify(s));const a=JSON.parse(localStorage.getItem("qp_player")||"{}");return a.name=r.username,localStorage.setItem("qp_player",JSON.stringify(a)),console.log("Current user set:",s),!0}catch(r){return console.error("Error setting current user:",r),!1}}updateUserProfile(t,r){try{if(console.log("Updating profile for:",t,r),r.name){const l=JSON.parse(localStorage.getItem("users")||"{}");if(l[t]){l[t].username=r.name;const c=l[t].password;l[t].password=c,localStorage.setItem("users",JSON.stringify(l))}}const s=`user_profile_${t}`,o={...JSON.parse(localStorage.getItem(s)||"{}"),...r};localStorage.setItem(s,JSON.stringify(o));const i=JSON.parse(localStorage.getItem("currentUser")||"{}");if(i.phone===t){i.username=r.name||i.username,localStorage.setItem("currentUser",JSON.stringify(i));const l=JSON.parse(localStorage.getItem("qp_player")||"{}");l.name=r.name||l.name,localStorage.setItem("qp_player",JSON.stringify(l))}return console.log("Profile updated successfully"),!0}catch(s){return console.error("Error updating profile:",s),!1}}getCurrentUser(){try{const t=JSON.parse(localStorage.getItem("currentUser")||"{}");return t.phone?this.getUserData(t.phone):null}catch(t){return console.error("Error getting current user:",t),null}}signOut(){try{return localStorage.removeItem("currentUser"),localStorage.removeItem("rememberCredentials"),sessionStorage.clear(),console.log("User signed out"),!0}catch(t){return console.error("Error signing out:",t),!1}}}const rt=new Jx;window.userService=rt;class Zx{constructor(){this.STORAGE_KEYS={COINS:"qp_coins",XP:"qp_xp",LEVEL:"qp_level",OWNED_CHARACTERS:"owned_characters",SOUND:"play_sound_on",GAME_STATS:"game_stats_",DAILY_PROGRESS:"daily_progress_",QUEST_DATA:"quest_data_",STREAK_DATA:"streak_data_",GAME_HISTORY:"game_history_",QUIZ_RESULTS:"quiz_current_results"}}getCoins(){return this.safeGet(this.STORAGE_KEYS.COINS,0)}setCoins(t){return this.safeSet(this.STORAGE_KEYS.COINS,t),t}addCoins(t,r=""){const a=this.getCoins()+t;this.setCoins(a);const o=rt.getCurrentUser();return o!=null&&o.phone&&(this.logCoinTransaction(o.phone,t,r),this.updateDailyCoins(o.phone,t)),a}spendCoins(t,r=""){const s=this.getCoins();if(s<t)return!1;const a=s-t;this.setCoins(a);const o=rt.getCurrentUser();return o!=null&&o.phone&&this.logCoinTransaction(o.phone,-t,r),!0}getXP(){return this.safeGet(this.STORAGE_KEYS.XP,0)}setXP(t){return this.safeSet(this.STORAGE_KEYS.XP,t),t}addXP(t){const s=this.getXP()+t;this.setXP(s),this.checkAndUpdateLevel(s);const a=rt.getCurrentUser();return a!=null&&a.phone&&this.updateDailyXP(a.phone,t),s}getLevel(){return this.safeGet(this.STORAGE_KEYS.LEVEL,1)}setLevel(t){return this.safeSet(this.STORAGE_KEYS.LEVEL,t),t}checkAndUpdateLevel(t=null){const r=t||this.getXP(),s=this.getLevel();let a=1,o=0;for(;o<=r;)a++,o=100*a*(a-1);if(a--,a>s){this.setLevel(a);const i=50*(a-s);return this.addCoins(i,`Level up to ${a}!`),!0}return!1}initializeUserData(t){if(!t)return;const r=this.getUserStats(t);if(r)return r;const s={stats:{totalQuizzes:0,totalPractice:0,totalCorrect:0,totalWrong:0,winStreak:0,bestStreak:0,highScore:0,gamesPlayed:0},quests:{daily:[{id:"quiz_3",type:"quiz",target:3,current:0,reward:60,completed:!1},{id:"practice_15",type:"practice",target:15,current:0,reward:100,completed:!1},{id:"win_5",type:"win_streak",target:5,current:0,reward:150,completed:!1},{id:"speed_run",type:"speed_run",target:1,current:0,reward:80,completed:!1}]},streak:{current:0,lastPlayedDate:null,longestStreak:0}};return this.safeSet(this.STORAGE_KEYS.GAME_STATS+t,s.stats),this.safeSet(this.STORAGE_KEYS.QUEST_DATA+t,s.quests),this.safeSet(this.STORAGE_KEYS.STREAK_DATA+t,s.streak),this.resetDailyProgress(t),s}getUserStats(t){return t?this.safeGet(this.STORAGE_KEYS.GAME_STATS+t,null):null}updateUserStats(t,r){if(!t)return null;const a={...this.getUserStats(t)||{},...r};return this.safeSet(this.STORAGE_KEYS.GAME_STATS+t,a),a}getDailyProgress(t){if(!t)return null;const r=this.safeGet(this.STORAGE_KEYS.DAILY_PROGRESS+t,null),s=new Date().toDateString();return!r||r.date!==s?this.resetDailyProgress(t):r}resetDailyProgress(t){if(!t)return null;const r={date:new Date().toDateString(),quizzesPlayed:0,practiceCompleted:0,coinsEarned:0,xpEarned:0,questsCompleted:[]};return this.safeSet(this.STORAGE_KEYS.DAILY_PROGRESS+t,r),this.resetDailyQuests(t),r}updateDailyCoins(t,r){if(!t)return;const s=this.getDailyProgress(t);s&&(s.coinsEarned+=r,this.safeSet(this.STORAGE_KEYS.DAILY_PROGRESS+t,s))}updateDailyXP(t,r){if(!t)return;const s=this.getDailyProgress(t);s&&(s.xpEarned+=r,this.safeSet(this.STORAGE_KEYS.DAILY_PROGRESS+t,s))}getQuestData(t){return t?this.safeGet(this.STORAGE_KEYS.QUEST_DATA+t,null):null}resetDailyQuests(t){if(!t)return null;const r={daily:[{id:"quiz_3",type:"quiz",target:3,current:0,reward:60,completed:!1},{id:"practice_15",type:"practice",target:15,current:0,reward:100,completed:!1},{id:"win_5",type:"win_streak",target:5,current:0,reward:150,completed:!1},{id:"speed_run",type:"speed_run",target:1,current:0,reward:80,completed:!1}]};return this.safeSet(this.STORAGE_KEYS.QUEST_DATA+t,r),r}updateQuestProgress(t,r,s=1){if(!t)return null;const a=this.getQuestData(t);if(!(a!=null&&a.daily))return null;let o=0;const i={...a,daily:a.daily.map(l=>{if(l.type===r&&!l.completed){const c=Math.min(l.current+s,l.target),u=c>=l.target;return u&&!l.completed&&(o+=l.reward,this.addCoins(l.reward,`Quest completed: ${l.id}`)),{...l,current:c,completed:u}}return l})};return this.safeSet(this.STORAGE_KEYS.QUEST_DATA+t,i),{updatedQuests:i,coinsEarned:o}}getStreakData(t){return t?this.safeGet(this.STORAGE_KEYS.STREAK_DATA+t,{current:0,lastPlayedDate:null,longestStreak:0}):null}updateStreak(t){if(!t)return null;const r=this.getStreakData(t),s=new Date().toDateString(),a=new Date(Date.now()-864e5).toDateString();return r.lastPlayedDate===s||(r.lastPlayedDate===a?r.current++:r.current=1,r.lastPlayedDate=s,r.longestStreak=Math.max(r.current,r.longestStreak),this.safeSet(this.STORAGE_KEYS.STREAK_DATA+t,r),r.current%7===0&&this.addCoins(100,"7-day streak bonus!")),r}recordQuizSession(t,r){const{score:s,totalQuestions:a,category:o,difficulty:i="medium",mode:l="classic"}=r,m=s*5+(s===a?20:0),p=s*10;if(this.addCoins(m,`Quiz: ${s}/${a}`),this.addXP(p),t){const f=this.getUserStats(t)||this.initializeUserData(t).stats;f.totalQuizzes++,f.totalCorrect+=s,f.totalWrong+=a-s,f.gamesPlayed++,s>=a*.7?(f.winStreak++,f.bestStreak=Math.max(f.winStreak,f.bestStreak)):f.winStreak=0,f.highScore=Math.max(f.highScore,s),this.updateUserStats(t,f);const w=this.getDailyProgress(t);w.quizzesPlayed++,this.safeSet(this.STORAGE_KEYS.DAILY_PROGRESS+t,w),this.updateQuestProgress(t,"quiz",1),f.winStreak>=5&&this.updateQuestProgress(t,"win_streak",f.winStreak),this.updateStreak(t),this.addToHistory(t,{type:"quiz",mode:l,category:o,score:s,totalQuestions:a,difficulty:i,coinsEarned:m,xpEarned:p,timestamp:new Date().toISOString()})}return{coinsEarned:m,xpEarned:p,newTotal:this.getCoins(),newXP:this.getXP(),newLevel:this.getLevel()}}recordPracticeSession(t,r){const{questionsCompleted:s,correctAnswers:a,category:o="general"}=r,i=s*2,l=s*5;if(this.addCoins(i,`Practice: ${s} questions`),this.addXP(l),t){const c=this.getUserStats(t)||this.initializeUserData(t).stats;c.totalPractice+=s,c.totalCorrect+=a,c.totalWrong+=s-a,this.updateUserStats(t,c);const u=this.getDailyProgress(t);u.practiceCompleted+=s,this.safeSet(this.STORAGE_KEYS.DAILY_PROGRESS+t,u),this.updateQuestProgress(t,"practice",s),this.updateStreak(t),this.addToHistory(t,{type:"practice",category:o,questionsCompleted:s,correctAnswers:a,coinsEarned:i,xpEarned:l,timestamp:new Date().toISOString()})}return{coinsEarned:i,xpEarned:l,newTotal:this.getCoins(),newXP:this.getXP()}}getGameHistory(t){return t?this.safeGet(this.STORAGE_KEYS.GAME_HISTORY+t,[]):[]}addToHistory(t,r){if(!t)return;const s=this.getGameHistory(t);s.unshift(r),s.length>50&&s.pop(),this.safeSet(this.STORAGE_KEYS.GAME_HISTORY+t,s)}getTodaySummary(t){var a;const r=t||((a=rt.getCurrentUser())==null?void 0:a.phone),s={totalCoins:this.getCoins(),totalXP:this.getXP(),level:this.getLevel(),xpProgress:this.getXP()%100,xpNeeded:100,todayCoins:0,todayXP:0,streak:0,questProgress:0,activeQuests:0};if(r){const o=this.getDailyProgress(r),i=this.getStreakData(r),l=this.getQuestData(r),c=this.getUserStats(r);if(o&&(s.todayCoins=o.coinsEarned,s.todayXP=o.xpEarned),i&&(s.streak=i.current),l!=null&&l.daily){const u=l.daily.filter(m=>m.completed).length;s.questProgress=Math.round(u/l.daily.length*100),s.activeQuests=l.daily.filter(m=>!m.completed).length}c&&(s.rank=23,s.winStreak=c.winStreak)}return s}logCoinTransaction(t,r,s){if(!t)return;const a="coin_transactions_"+t,o=this.safeGet(a,[]);o.push({amount:r,reason:s,timestamp:new Date().toISOString(),balance:this.getCoins()}),o.length>100&&o.shift(),this.safeSet(a,o)}storeCurrentResults(t){return this.safeSet(this.STORAGE_KEYS.QUIZ_RESULTS,{...t,timestamp:Date.now(),expiresAt:Date.now()+30*60*1e3}),!0}getCurrentResults(){const t=this.safeGet(this.STORAGE_KEYS.QUIZ_RESULTS,null);return t?t.expiresAt&&t.expiresAt<Date.now()?(this.clearCurrentResults(),null):t:null}clearCurrentResults(){localStorage.removeItem(this.STORAGE_KEYS.QUIZ_RESULTS)}safeGet(t,r=null){try{const s=localStorage.getItem(t);return s?JSON.parse(s):r}catch{return r}}safeSet(t,r){try{return localStorage.setItem(t,JSON.stringify(r)),!0}catch{return!1}}clearAllData(){Object.values(this.STORAGE_KEYS).forEach(t=>{typeof t=="string"&&!t.includes("_")&&localStorage.removeItem(t)})}clearUserData(t){if(!t)return;[this.STORAGE_KEYS.GAME_STATS+t,this.STORAGE_KEYS.DAILY_PROGRESS+t,this.STORAGE_KEYS.QUEST_DATA+t,this.STORAGE_KEYS.STREAK_DATA+t,this.STORAGE_KEYS.GAME_HISTORY+t,"coin_transactions_"+t].forEach(s=>localStorage.removeItem(s))}}const ie=new Zx;var Rm={exports:{}};/* @license
Papa Parse
v5.5.3
https://github.com/mholt/PapaParse
License: MIT
*/(function(e,t){((r,s)=>{e.exports=s()})(Um,function r(){var s=typeof self<"u"?self:typeof window<"u"?window:s!==void 0?s:{},a,o=!s.document&&!!s.postMessage,i=s.IS_PAPA_WORKER||!1,l={},c=0,u={};function m(h){this._handle=null,this._finished=!1,this._completed=!1,this._halted=!1,this._input=null,this._baseIndex=0,this._partialLine="",this._rowCount=0,this._start=0,this._nextChunk=null,this.isFirstChunk=!0,this._completeResults={data:[],errors:[],meta:{}},(function(b){var k=C(b);k.chunkSize=parseInt(k.chunkSize),b.step||b.chunk||(k.chunkSize=null),this._handle=new j(k),(this._handle.streamer=this)._config=k}).call(this,h),this.parseChunk=function(b,k){var _=parseInt(this._config.skipFirstNLines)||0;if(this.isFirstChunk&&0<_){let F=this._config.newline;F||(P=this._config.quoteChar||'"',F=this._handle.guessLineEndings(b,P)),b=[...b.split(F).slice(_)].join(F)}this.isFirstChunk&&E(this._config.beforeFirstChunk)&&(P=this._config.beforeFirstChunk(b))!==void 0&&(b=P),this.isFirstChunk=!1,this._halted=!1;var _=this._partialLine+b,P=(this._partialLine="",this._handle.parse(_,this._baseIndex,!this._finished));if(!this._handle.paused()&&!this._handle.aborted()){if(b=P.meta.cursor,_=(this._finished||(this._partialLine=_.substring(b-this._baseIndex),this._baseIndex=b),P&&P.data&&(this._rowCount+=P.data.length),this._finished||this._config.preview&&this._rowCount>=this._config.preview),i)s.postMessage({results:P,workerId:u.WORKER_ID,finished:_});else if(E(this._config.chunk)&&!k){if(this._config.chunk(P,this._handle),this._handle.paused()||this._handle.aborted())return void(this._halted=!0);this._completeResults=P=void 0}return this._config.step||this._config.chunk||(this._completeResults.data=this._completeResults.data.concat(P.data),this._completeResults.errors=this._completeResults.errors.concat(P.errors),this._completeResults.meta=P.meta),this._completed||!_||!E(this._config.complete)||P&&P.meta.aborted||(this._config.complete(this._completeResults,this._input),this._completed=!0),_||P&&P.meta.paused||this._nextChunk(),P}this._halted=!0},this._sendError=function(b){E(this._config.error)?this._config.error(b):i&&this._config.error&&s.postMessage({workerId:u.WORKER_ID,error:b,finished:!1})}}function p(h){var b;(h=h||{}).chunkSize||(h.chunkSize=u.RemoteChunkSize),m.call(this,h),this._nextChunk=o?function(){this._readChunk(),this._chunkLoaded()}:function(){this._readChunk()},this.stream=function(k){this._input=k,this._nextChunk()},this._readChunk=function(){if(this._finished)this._chunkLoaded();else{if(b=new XMLHttpRequest,this._config.withCredentials&&(b.withCredentials=this._config.withCredentials),o||(b.onload=R(this._chunkLoaded,this),b.onerror=R(this._chunkError,this)),b.open(this._config.downloadRequestBody?"POST":"GET",this._input,!o),this._config.downloadRequestHeaders){var k,_=this._config.downloadRequestHeaders;for(k in _)b.setRequestHeader(k,_[k])}var P;this._config.chunkSize&&(P=this._start+this._config.chunkSize-1,b.setRequestHeader("Range","bytes="+this._start+"-"+P));try{b.send(this._config.downloadRequestBody)}catch(F){this._chunkError(F.message)}o&&b.status===0&&this._chunkError()}},this._chunkLoaded=function(){b.readyState===4&&(b.status<200||400<=b.status?this._chunkError():(this._start+=this._config.chunkSize||b.responseText.length,this._finished=!this._config.chunkSize||this._start>=(k=>(k=k.getResponseHeader("Content-Range"))!==null?parseInt(k.substring(k.lastIndexOf("/")+1)):-1)(b),this.parseChunk(b.responseText)))},this._chunkError=function(k){k=b.statusText||k,this._sendError(new Error(k))}}function f(h){(h=h||{}).chunkSize||(h.chunkSize=u.LocalChunkSize),m.call(this,h);var b,k,_=typeof FileReader<"u";this.stream=function(P){this._input=P,k=P.slice||P.webkitSlice||P.mozSlice,_?((b=new FileReader).onload=R(this._chunkLoaded,this),b.onerror=R(this._chunkError,this)):b=new FileReaderSync,this._nextChunk()},this._nextChunk=function(){this._finished||this._config.preview&&!(this._rowCount<this._config.preview)||this._readChunk()},this._readChunk=function(){var P=this._input,F=(this._config.chunkSize&&(F=Math.min(this._start+this._config.chunkSize,this._input.size),P=k.call(P,this._start,F)),b.readAsText(P,this._config.encoding));_||this._chunkLoaded({target:{result:F}})},this._chunkLoaded=function(P){this._start+=this._config.chunkSize,this._finished=!this._config.chunkSize||this._start>=this._input.size,this.parseChunk(P.target.result)},this._chunkError=function(){this._sendError(b.error)}}function w(h){var b;m.call(this,h=h||{}),this.stream=function(k){return b=k,this._nextChunk()},this._nextChunk=function(){var k,_;if(!this._finished)return k=this._config.chunkSize,b=k?(_=b.substring(0,k),b.substring(k)):(_=b,""),this._finished=!b,this.parseChunk(_)}}function x(h){m.call(this,h=h||{});var b=[],k=!0,_=!1;this.pause=function(){m.prototype.pause.apply(this,arguments),this._input.pause()},this.resume=function(){m.prototype.resume.apply(this,arguments),this._input.resume()},this.stream=function(P){this._input=P,this._input.on("data",this._streamData),this._input.on("end",this._streamEnd),this._input.on("error",this._streamError)},this._checkIsFinished=function(){_&&b.length===1&&(this._finished=!0)},this._nextChunk=function(){this._checkIsFinished(),b.length?this.parseChunk(b.shift()):k=!0},this._streamData=R(function(P){try{b.push(typeof P=="string"?P:P.toString(this._config.encoding)),k&&(k=!1,this._checkIsFinished(),this.parseChunk(b.shift()))}catch(F){this._streamError(F)}},this),this._streamError=R(function(P){this._streamCleanUp(),this._sendError(P)},this),this._streamEnd=R(function(){this._streamCleanUp(),_=!0,this._streamData("")},this),this._streamCleanUp=R(function(){this._input.removeListener("data",this._streamData),this._input.removeListener("end",this._streamEnd),this._input.removeListener("error",this._streamError)},this)}function j(h){var b,k,_,P,F=Math.pow(2,53),Q=-F,J=/^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/,H=/^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/,q=this,O=0,I=0,D=!1,L=!1,T=[],z={data:[],errors:[],meta:{}};function B(U){return h.skipEmptyLines==="greedy"?U.join("").trim()==="":U.length===1&&U[0].length===0}function W(){if(z&&_&&(Z("Delimiter","UndetectableDelimiter","Unable to auto-detect delimiting character; defaulted to '"+u.DefaultDelimiter+"'"),_=!1),h.skipEmptyLines&&(z.data=z.data.filter(function(G){return!B(G)})),$()){let G=function(K,X){E(h.transformHeader)&&(K=h.transformHeader(K,X)),T.push(K)};if(z)if(Array.isArray(z.data[0])){for(var U=0;$()&&U<z.data.length;U++)z.data[U].forEach(G);z.data.splice(0,1)}else z.data.forEach(G)}function M(G,K){for(var X=h.header?{}:[],V=0;V<G.length;V++){var Y=V,A=G[V],A=((te,se)=>(le=>(h.dynamicTypingFunction&&h.dynamicTyping[le]===void 0&&(h.dynamicTyping[le]=h.dynamicTypingFunction(le)),(h.dynamicTyping[le]||h.dynamicTyping)===!0))(te)?se==="true"||se==="TRUE"||se!=="false"&&se!=="FALSE"&&((le=>{if(J.test(le)&&(le=parseFloat(le),Q<le&&le<F))return 1})(se)?parseFloat(se):H.test(se)?new Date(se):se===""?null:se):se)(Y=h.header?V>=T.length?"__parsed_extra":T[V]:Y,A=h.transform?h.transform(A,Y):A);Y==="__parsed_extra"?(X[Y]=X[Y]||[],X[Y].push(A)):X[Y]=A}return h.header&&(V>T.length?Z("FieldMismatch","TooManyFields","Too many fields: expected "+T.length+" fields but parsed "+V,I+K):V<T.length&&Z("FieldMismatch","TooFewFields","Too few fields: expected "+T.length+" fields but parsed "+V,I+K)),X}var ee;z&&(h.header||h.dynamicTyping||h.transform)&&(ee=1,!z.data.length||Array.isArray(z.data[0])?(z.data=z.data.map(M),ee=z.data.length):z.data=M(z.data,0),h.header&&z.meta&&(z.meta.fields=T),I+=ee)}function $(){return h.header&&T.length===0}function Z(U,M,ee,G){U={type:U,code:M,message:ee},G!==void 0&&(U.row=G),z.errors.push(U)}E(h.step)&&(P=h.step,h.step=function(U){z=U,$()?W():(W(),z.data.length!==0&&(O+=U.data.length,h.preview&&O>h.preview?k.abort():(z.data=z.data[0],P(z,q))))}),this.parse=function(U,M,ee){var G=h.quoteChar||'"',G=(h.newline||(h.newline=this.guessLineEndings(U,G)),_=!1,h.delimiter?E(h.delimiter)&&(h.delimiter=h.delimiter(U),z.meta.delimiter=h.delimiter):((G=((K,X,V,Y,A)=>{var te,se,le,de;A=A||[",","	","|",";",u.RECORD_SEP,u.UNIT_SEP];for(var ve=0;ve<A.length;ve++){for(var Se,mt=A[ve],we=0,Ge=0,Ce=0,$e=(le=void 0,new y({comments:Y,delimiter:mt,newline:X,preview:10}).parse(K)),ft=0;ft<$e.data.length;ft++)V&&B($e.data[ft])?Ce++:(Se=$e.data[ft].length,Ge+=Se,le===void 0?le=Se:0<Se&&(we+=Math.abs(Se-le),le=Se));0<$e.data.length&&(Ge/=$e.data.length-Ce),(se===void 0||we<=se)&&(de===void 0||de<Ge)&&1.99<Ge&&(se=we,te=mt,de=Ge)}return{successful:!!(h.delimiter=te),bestDelimiter:te}})(U,h.newline,h.skipEmptyLines,h.comments,h.delimitersToGuess)).successful?h.delimiter=G.bestDelimiter:(_=!0,h.delimiter=u.DefaultDelimiter),z.meta.delimiter=h.delimiter),C(h));return h.preview&&h.header&&G.preview++,b=U,k=new y(G),z=k.parse(b,M,ee),W(),D?{meta:{paused:!0}}:z||{meta:{paused:!1}}},this.paused=function(){return D},this.pause=function(){D=!0,k.abort(),b=E(h.chunk)?"":b.substring(k.getCharIndex())},this.resume=function(){q.streamer._halted?(D=!1,q.streamer.parseChunk(b,!0)):setTimeout(q.resume,3)},this.aborted=function(){return L},this.abort=function(){L=!0,k.abort(),z.meta.aborted=!0,E(h.complete)&&h.complete(z),b=""},this.guessLineEndings=function(K,G){K=K.substring(0,1048576);var G=new RegExp(S(G)+"([^]*?)"+S(G),"gm"),ee=(K=K.replace(G,"")).split("\r"),G=K.split(`
`),K=1<G.length&&G[0].length<ee[0].length;if(ee.length===1||K)return`
`;for(var X=0,V=0;V<ee.length;V++)ee[V][0]===`
`&&X++;return X>=ee.length/2?`\r
`:"\r"}}function S(h){return h.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function y(h){var b=(h=h||{}).delimiter,k=h.newline,_=h.comments,P=h.step,F=h.preview,Q=h.fastMode,J=null,H=!1,q=h.quoteChar==null?'"':h.quoteChar,O=q;if(h.escapeChar!==void 0&&(O=h.escapeChar),(typeof b!="string"||-1<u.BAD_DELIMITERS.indexOf(b))&&(b=","),_===b)throw new Error("Comment character same as delimiter");_===!0?_="#":(typeof _!="string"||-1<u.BAD_DELIMITERS.indexOf(_))&&(_=!1),k!==`
`&&k!=="\r"&&k!==`\r
`&&(k=`
`);var I=0,D=!1;this.parse=function(L,T,z){if(typeof L!="string")throw new Error("Input must be a string");var B=L.length,W=b.length,$=k.length,Z=_.length,U=E(P),M=[],ee=[],G=[],K=I=0;if(!L)return we();if(Q||Q!==!1&&L.indexOf(q)===-1){for(var X=L.split(k),V=0;V<X.length;V++){if(G=X[V],I+=G.length,V!==X.length-1)I+=k.length;else if(z)return we();if(!_||G.substring(0,Z)!==_){if(U){if(M=[],de(G.split(b)),Ge(),D)return we()}else de(G.split(b));if(F&&F<=V)return M=M.slice(0,F),we(!0)}}return we()}for(var Y=L.indexOf(b,I),A=L.indexOf(k,I),te=new RegExp(S(O)+S(q),"g"),se=L.indexOf(q,I);;)if(L[I]===q)for(se=I,I++;;){if((se=L.indexOf(q,se+1))===-1)return z||ee.push({type:"Quotes",code:"MissingQuotes",message:"Quoted field unterminated",row:M.length,index:I}),Se();if(se===B-1)return Se(L.substring(I,se).replace(te,q));if(q===O&&L[se+1]===O)se++;else if(q===O||se===0||L[se-1]!==O){Y!==-1&&Y<se+1&&(Y=L.indexOf(b,se+1));var le=ve((A=A!==-1&&A<se+1?L.indexOf(k,se+1):A)===-1?Y:Math.min(Y,A));if(L.substr(se+1+le,W)===b){G.push(L.substring(I,se).replace(te,q)),L[I=se+1+le+W]!==q&&(se=L.indexOf(q,I)),Y=L.indexOf(b,I),A=L.indexOf(k,I);break}if(le=ve(A),L.substring(se+1+le,se+1+le+$)===k){if(G.push(L.substring(I,se).replace(te,q)),mt(se+1+le+$),Y=L.indexOf(b,I),se=L.indexOf(q,I),U&&(Ge(),D))return we();if(F&&M.length>=F)return we(!0);break}ee.push({type:"Quotes",code:"InvalidQuotes",message:"Trailing quote on quoted field is malformed",row:M.length,index:I}),se++}}else if(_&&G.length===0&&L.substring(I,I+Z)===_){if(A===-1)return we();I=A+$,A=L.indexOf(k,I),Y=L.indexOf(b,I)}else if(Y!==-1&&(Y<A||A===-1))G.push(L.substring(I,Y)),I=Y+W,Y=L.indexOf(b,I);else{if(A===-1)break;if(G.push(L.substring(I,A)),mt(A+$),U&&(Ge(),D))return we();if(F&&M.length>=F)return we(!0)}return Se();function de(Ce){M.push(Ce),K=I}function ve(Ce){var $e=0;return $e=Ce!==-1&&(Ce=L.substring(se+1,Ce))&&Ce.trim()===""?Ce.length:$e}function Se(Ce){return z||(Ce===void 0&&(Ce=L.substring(I)),G.push(Ce),I=B,de(G),U&&Ge()),we()}function mt(Ce){I=Ce,de(G),G=[],A=L.indexOf(k,I)}function we(Ce){if(h.header&&!T&&M.length&&!H){var $e=M[0],ft=Object.create(null),lt=new Set($e);let Ee=!1;for(let Be=0;Be<$e.length;Be++){let tt=$e[Be];if(ft[tt=E(h.transformHeader)?h.transformHeader(tt,Be):tt]){let Pt,Ae=ft[tt];for(;Pt=tt+"_"+Ae,Ae++,lt.has(Pt););lt.add(Pt),$e[Be]=Pt,ft[tt]++,Ee=!0,(J=J===null?{}:J)[Pt]=tt}else ft[tt]=1,$e[Be]=tt;lt.add(tt)}Ee&&console.warn("Duplicate headers found and renamed."),H=!0}return{data:M,errors:ee,meta:{delimiter:b,linebreak:k,aborted:D,truncated:!!Ce,cursor:K+(T||0),renamedHeaders:J}}}function Ge(){P(we()),M=[],ee=[]}},this.abort=function(){D=!0},this.getCharIndex=function(){return I}}function g(h){var b=h.data,k=l[b.workerId],_=!1;if(b.error)k.userError(b.error,b.file);else if(b.results&&b.results.data){var P={abort:function(){_=!0,v(b.workerId,{data:[],errors:[],meta:{aborted:!0}})},pause:N,resume:N};if(E(k.userStep)){for(var F=0;F<b.results.data.length&&(k.userStep({data:b.results.data[F],errors:b.results.errors,meta:b.results.meta},P),!_);F++);delete b.results}else E(k.userChunk)&&(k.userChunk(b.results,P,b.file),delete b.results)}b.finished&&!_&&v(b.workerId,b.results)}function v(h,b){var k=l[h];E(k.userComplete)&&k.userComplete(b),k.terminate(),delete l[h]}function N(){throw new Error("Not implemented.")}function C(h){if(typeof h!="object"||h===null)return h;var b,k=Array.isArray(h)?[]:{};for(b in h)k[b]=C(h[b]);return k}function R(h,b){return function(){h.apply(b,arguments)}}function E(h){return typeof h=="function"}return u.parse=function(h,b){var k=(b=b||{}).dynamicTyping||!1;if(E(k)&&(b.dynamicTypingFunction=k,k={}),b.dynamicTyping=k,b.transform=!!E(b.transform)&&b.transform,!b.worker||!u.WORKERS_SUPPORTED)return k=null,u.NODE_STREAM_INPUT,typeof h=="string"?(h=(_=>_.charCodeAt(0)!==65279?_:_.slice(1))(h),k=new(b.download?p:w)(b)):h.readable===!0&&E(h.read)&&E(h.on)?k=new x(b):(s.File&&h instanceof File||h instanceof Object)&&(k=new f(b)),k.stream(h);(k=(()=>{var _;return!!u.WORKERS_SUPPORTED&&(_=(()=>{var P=s.URL||s.webkitURL||null,F=r.toString();return u.BLOB_URL||(u.BLOB_URL=P.createObjectURL(new Blob(["var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; ","(",F,")();"],{type:"text/javascript"})))})(),(_=new s.Worker(_)).onmessage=g,_.id=c++,l[_.id]=_)})()).userStep=b.step,k.userChunk=b.chunk,k.userComplete=b.complete,k.userError=b.error,b.step=E(b.step),b.chunk=E(b.chunk),b.complete=E(b.complete),b.error=E(b.error),delete b.worker,k.postMessage({input:h,config:b,workerId:k.id})},u.unparse=function(h,b){var k=!1,_=!0,P=",",F=`\r
`,Q='"',J=Q+Q,H=!1,q=null,O=!1,I=((()=>{if(typeof b=="object"){if(typeof b.delimiter!="string"||u.BAD_DELIMITERS.filter(function(T){return b.delimiter.indexOf(T)!==-1}).length||(P=b.delimiter),typeof b.quotes!="boolean"&&typeof b.quotes!="function"&&!Array.isArray(b.quotes)||(k=b.quotes),typeof b.skipEmptyLines!="boolean"&&typeof b.skipEmptyLines!="string"||(H=b.skipEmptyLines),typeof b.newline=="string"&&(F=b.newline),typeof b.quoteChar=="string"&&(Q=b.quoteChar),typeof b.header=="boolean"&&(_=b.header),Array.isArray(b.columns)){if(b.columns.length===0)throw new Error("Option columns is empty");q=b.columns}b.escapeChar!==void 0&&(J=b.escapeChar+Q),b.escapeFormulae instanceof RegExp?O=b.escapeFormulae:typeof b.escapeFormulae=="boolean"&&b.escapeFormulae&&(O=/^[=+\-@\t\r].*$/)}})(),new RegExp(S(Q),"g"));if(typeof h=="string"&&(h=JSON.parse(h)),Array.isArray(h)){if(!h.length||Array.isArray(h[0]))return D(null,h,H);if(typeof h[0]=="object")return D(q||Object.keys(h[0]),h,H)}else if(typeof h=="object")return typeof h.data=="string"&&(h.data=JSON.parse(h.data)),Array.isArray(h.data)&&(h.fields||(h.fields=h.meta&&h.meta.fields||q),h.fields||(h.fields=Array.isArray(h.data[0])?h.fields:typeof h.data[0]=="object"?Object.keys(h.data[0]):[]),Array.isArray(h.data[0])||typeof h.data[0]=="object"||(h.data=[h.data])),D(h.fields||[],h.data||[],H);throw new Error("Unable to serialize unrecognized input");function D(T,z,B){var W="",$=(typeof T=="string"&&(T=JSON.parse(T)),typeof z=="string"&&(z=JSON.parse(z)),Array.isArray(T)&&0<T.length),Z=!Array.isArray(z[0]);if($&&_){for(var U=0;U<T.length;U++)0<U&&(W+=P),W+=L(T[U],U);0<z.length&&(W+=F)}for(var M=0;M<z.length;M++){var ee=($?T:z[M]).length,G=!1,K=$?Object.keys(z[M]).length===0:z[M].length===0;if(B&&!$&&(G=B==="greedy"?z[M].join("").trim()==="":z[M].length===1&&z[M][0].length===0),B==="greedy"&&$){for(var X=[],V=0;V<ee;V++){var Y=Z?T[V]:V;X.push(z[M][Y])}G=X.join("").trim()===""}if(!G){for(var A=0;A<ee;A++){0<A&&!K&&(W+=P);var te=$&&Z?T[A]:A;W+=L(z[M][te],A)}M<z.length-1&&(!B||0<ee&&!K)&&(W+=F)}}return W}function L(T,z){var B,W;return T==null?"":T.constructor===Date?JSON.stringify(T).slice(1,25):(W=!1,O&&typeof T=="string"&&O.test(T)&&(T="'"+T,W=!0),B=T.toString().replace(I,J),(W=W||k===!0||typeof k=="function"&&k(T,z)||Array.isArray(k)&&k[z]||(($,Z)=>{for(var U=0;U<Z.length;U++)if(-1<$.indexOf(Z[U]))return!0;return!1})(B,u.BAD_DELIMITERS)||-1<B.indexOf(P)||B.charAt(0)===" "||B.charAt(B.length-1)===" ")?Q+B+Q:B)}},u.RECORD_SEP=String.fromCharCode(30),u.UNIT_SEP=String.fromCharCode(31),u.BYTE_ORDER_MARK="\uFEFF",u.BAD_DELIMITERS=["\r",`
`,'"',u.BYTE_ORDER_MARK],u.WORKERS_SUPPORTED=!o&&!!s.Worker,u.NODE_STREAM_INPUT=1,u.LocalChunkSize=10485760,u.RemoteChunkSize=5242880,u.DefaultDelimiter=",",u.Parser=y,u.ParserHandle=j,u.NetworkStreamer=p,u.FileStreamer=f,u.StringStreamer=w,u.ReadableStreamStreamer=x,s.jQuery&&((a=s.jQuery).fn.parse=function(h){var b=h.config||{},k=[];return this.each(function(F){if(!(a(this).prop("tagName").toUpperCase()==="INPUT"&&a(this).attr("type").toLowerCase()==="file"&&s.FileReader)||!this.files||this.files.length===0)return!0;for(var Q=0;Q<this.files.length;Q++)k.push({file:this.files[Q],inputElem:this,instanceConfig:a.extend({},b)})}),_(),this;function _(){if(k.length===0)E(h.complete)&&h.complete();else{var F,Q,J,H,q=k[0];if(E(h.before)){var O=h.before(q.file,q.inputElem);if(typeof O=="object"){if(O.action==="abort")return F="AbortError",Q=q.file,J=q.inputElem,H=O.reason,void(E(h.error)&&h.error({name:F},Q,J,H));if(O.action==="skip")return void P();typeof O.config=="object"&&(q.instanceConfig=a.extend(q.instanceConfig,O.config))}else if(O==="skip")return void P()}var I=q.instanceConfig.complete;q.instanceConfig.complete=function(D){E(I)&&I(D,q.file,q.inputElem),P()},u.parse(q.file,q.instanceConfig)}}function P(){k.splice(0,1),_()}}),i&&(s.onmessage=function(h){h=h.data,u.WORKER_ID===void 0&&h&&(u.WORKER_ID=h.workerId),typeof h.input=="string"?s.postMessage({workerId:u.WORKER_ID,results:u.parse(h.input,h.config),finished:!0}):(s.File&&h.input instanceof File||h.input instanceof Object)&&(h=u.parse(h.input,h.config))&&s.postMessage({workerId:u.WORKER_ID,results:h,finished:!0})}),(p.prototype=Object.create(m.prototype)).constructor=p,(f.prototype=Object.create(m.prototype)).constructor=f,(w.prototype=Object.create(w.prototype)).constructor=w,(x.prototype=Object.create(m.prototype)).constructor=x,u})})(Rm);var eg=Rm.exports;const hr=tu(eg);function Gn({startRect:e,targetRef:t,count:r=12,onDone:s}){return d.useEffect(()=>{const a=t==null?void 0:t.current;if(!e||!a){s==null||s();return}const o=a.getBoundingClientRect(),i=document.createElement("div");i.style.position="fixed",i.style.inset="0",i.style.pointerEvents="none",i.style.zIndex="9999",document.body.appendChild(i);const l=o.left+o.width/2,c=o.top+o.height/2,u=e.left+e.width/2,m=e.top+e.height/2,p=200;let f=0;function w(x){const j=document.createElement("div");j.textContent="🪙",Object.assign(j.style,{position:"fixed",left:"0px",top:"0px",zIndex:"10000",pointerEvents:"none",fontSize:"22px",opacity:"1",willChange:"transform, opacity",transform:"translate(0px, 0px)"});const S=u,y=m,g=l,v=c;j.style.transform=`translate(${S}px, ${y}px) scale(1)`,i.appendChild(j),j.getBoundingClientRect(),j.style.transition=`transform ${p}ms cubic-bezier(.2,.8,.2,1), opacity ${p}ms linear`,requestAnimationFrame(()=>{j.style.transform=`translate(${g}px, ${v}px) scale(.6)`,j.style.opacity="0.1"}),setTimeout(()=>{j.remove(),f+=1,f===r&&(i.remove(),s==null||s())},p+50)}for(let x=0;x<r;x++)setTimeout(()=>w(),x*60);return()=>{try{i.remove()}catch{}}},[e,t,r,s]),null}const xt={XP_PER_CORRECT:10,XP_PER_LEVEL:100,MAX_LEVEL:100,COINS_PER_CORRECT:5,MAX_ENERGY:5,ENERGY_REGEN_TIME:36e5,ENERGY_COST:{quiz:1,practice:0,daily:0},COMBO_MULTIPLIERS:{2:{multiplier:1.2,text:"Nice!"},3:{multiplier:1.5,text:"Great!"},5:{multiplier:2,text:"On Fire!"},10:{multiplier:3,text:"Legendary!"}},AVATARS:[{id:"wizard",emoji:"🧙",name:"Knowledge Wizard",unlockLevel:1,bgColor:"from-purple-500 to-indigo-500"},{id:"knight",emoji:"⚔️",name:"Quiz Knight",unlockLevel:1,bgColor:"from-blue-500 to-cyan-500"},{id:"explorer",emoji:"🗺️",name:"Fact Explorer",unlockLevel:5,bgColor:"from-green-500 to-emerald-500"},{id:"scientist",emoji:"🔬",name:"Science Master",unlockLevel:10,bgColor:"from-orange-500 to-red-500"},{id:"artist",emoji:"🎨",name:"Creative Mind",unlockLevel:15,bgColor:"from-pink-500 to-rose-500"}],STORAGE_KEYS:{PLAYER:"qp_player",GAME_STATE:"qp_game_state",ENERGY:"qp_energy",CURRENT_COMBO:"qp_combo"}},Ld=e=>Math.floor(e/xt.XP_PER_LEVEL)+1,tg=e=>{const t=e%xt.XP_PER_LEVEL;return{current:t,required:xt.XP_PER_LEVEL,percentage:t/xt.XP_PER_LEVEL*100}};function ng({player:e,size:t="normal",showLevel:r=!0,showName:s=!0}){const a=xt.AVATARS.find(i=>i.id===e.avatar)||xt.AVATARS[0],o={small:"w-10 h-10 text-xl",normal:"w-14 h-14 text-2xl",large:"w-20 h-20 text-4xl"};return n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsxs("div",{className:"relative",children:[n.jsx("div",{className:`${o[t]} rounded-full bg-gradient-to-br ${a.bgColor} flex items-center justify-center shadow-lg`,children:n.jsx("span",{children:a.emoji})}),r&&n.jsx("div",{className:"absolute -bottom-1 -right-1 bg-yellow-500 text-black text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center border-2 border-base-bg",children:e.level})]}),s&&n.jsxs("div",{children:[n.jsx("div",{className:"font-bold text-sm",children:(()=>{const i=JSON.parse(localStorage.getItem("currentUser")||"{}");return i.username?i.username.split(" ")[0]:e.name})()}),n.jsx("div",{className:"text-xs text-base-muted",children:a.name})]})]})}function rg({current:e,required:t,level:r,animate:s=!0}){const[a,o]=d.useState(0),i=e/t*100;return d.useEffect(()=>{if(s){const l=setTimeout(()=>{o(i)},100);return()=>clearTimeout(l)}else o(i)},[i,s]),n.jsxs("div",{className:"w-full",children:[n.jsxs("div",{className:"flex justify-between items-center mb-1",children:[n.jsxs("span",{className:"text-xs font-medium",children:["Level ",r]}),n.jsxs("span",{className:"text-xs text-base-muted",children:[e,"/",t," XP"]})]}),n.jsx("div",{className:"h-2 bg-black/20 rounded-full overflow-hidden",children:n.jsx("div",{className:"h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-700 ease-out relative",style:{width:`${a}%`},children:n.jsx("div",{className:"absolute inset-0 bg-white/20 animate-pulse"})})})]})}const _m=[{name:"GK",slug:"general-knowledge",questions:50,icon:"🧠",color:"#FF6B6B",gradient:"from-red-500 to-pink-500"},{name:"Science",slug:"science",questions:45,icon:"🧪",color:"#4ECDC4",gradient:"from-cyan-500 to-teal-500"},{name:"Fun Facts",slug:"fun-facts",questions:30,icon:"🎉",color:"#FFD93D",gradient:"from-yellow-400 to-orange-500"},{name:"History",slug:"history",questions:42,icon:"🏺",color:"#A8E6CF",gradient:"from-green-400 to-emerald-500"},{name:"AI & Tech",slug:"artificial-intelligence",questions:28,icon:"🤖",color:"#C7B8FF",gradient:"from-purple-400 to-indigo-500"},{name:"More",slug:"more",questions:0,icon:"✨",color:"#FF8CC3",gradient:"from-pink-400 to-rose-500"}],Am=[{name:"Geography",slug:"geography",questions:38,icon:"🗺️",color:"#FACC15",gradient:"from-yellow-400 to-amber-500"},{name:"Computer",slug:"computer",questions:34,icon:"💻",color:"#3B82F6",gradient:"from-blue-400 to-blue-600"},{name:"Aptitude",slug:"aptitude",questions:36,icon:"📐",color:"#EC4899",gradient:"from-pink-500 to-rose-500"},{name:"Iconic Figures",slug:"iconic-figures",questions:26,icon:"🌟",color:"#8B5CF6",gradient:"from-purple-500 to-violet-600"}],Im=[..._m.filter(e=>e.slug!=="more"),...Am];function sg({onClick:e}){return n.jsxs("div",{className:"relative overflow-hidden rounded-3xl p-8 mb-6 cursor-pointer transform transition-all hover:scale-[1.02]",style:{background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",boxShadow:"0 10px 40px rgba(102, 126, 234, 0.3)",animation:"pulse 3s infinite"},onClick:e,children:[n.jsx("div",{className:"absolute top-[-50px] right-[-50px] w-[200px] h-[200px] rounded-full bg-white/10",style:{animation:"float 4s ease-in-out infinite"}}),n.jsx("div",{className:"absolute bottom-[-30px] left-[-30px] w-[150px] h-[150px] rounded-full bg-white/10",style:{animation:"float 4s ease-in-out infinite reverse"}}),n.jsx("h2",{className:"text-3xl font-bold mb-2",children:"🎰 Spin & Win"}),n.jsx("p",{className:"text-base opacity-90 mb-4",children:"Test your luck, win amazing prizes!"}),n.jsx("div",{className:"inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium",style:{background:"linear-gradient(90deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0.3) 100%)",backgroundSize:"200% auto",animation:"shimmer 2s linear infinite"},children:"Play Now →"})]})}function ag({actions:e}){return n.jsx("div",{className:"grid grid-cols-4 gap-3 mb-8",children:e.map((t,r)=>n.jsxs("button",{onClick:t.action,className:`${t.color} aspect-square rounded-2xl flex flex-col items-center justify-center gap-1 transform transition-all hover:scale-105`,children:[n.jsx("div",{className:"text-2xl",children:t.icon}),n.jsx("div",{className:"text-[10px] font-medium text-white",children:t.label})]},r))})}function og({categories:e,onCategorySelect:t}){return n.jsxs("div",{className:"mb-6",children:[n.jsx("h3",{className:"text-lg font-bold mb-4",children:"Choose Your Adventure"}),n.jsx("div",{className:"grid grid-cols-3 gap-3",children:e.map(r=>n.jsxs("button",{onClick:()=>t(r),className:`bg-gradient-to-br ${r.gradient} aspect-square rounded-2xl p-4 flex flex-col items-center justify-center gap-2 transform transition-all hover:scale-105 hover:shadow-lg relative`,children:[n.jsx("div",{className:"text-3xl",children:r.icon}),n.jsx("div",{className:"text-xs font-bold text-white text-center",children:r.name}),r.questions>0&&n.jsxs("div",{className:"text-[10px] bg-white/20 px-2 py-0.5 rounded-full",children:[r.questions," Qs"]})]},r.name))})]})}function ig({onClick:e,isPulsing:t}){return n.jsxs("button",{onClick:e,className:`w-full rounded-2xl p-5 flex justify-between items-center transition-all ${t?"bg-green-500/20 border-2 border-green-500 animate-pulse":"bg-white/5 border border-base-border hover:bg-white/10"}`,children:[n.jsxs("div",{className:"flex items-center gap-4",children:[n.jsx("div",{className:"w-12 h-12 bg-gradient-to-br from-green-400 to-teal-500 rounded-xl grid place-items-center text-2xl",children:"📚"}),n.jsxs("div",{className:"text-left",children:[n.jsx("div",{className:"font-medium",children:"Practice Mode"}),n.jsx("div",{className:"text-xs text-base-muted",children:"No timer • No energy cost • Learn at your pace"})]})]}),n.jsx("div",{className:"text-xl",children:"→"})]})}function lg({coinPillRef:e}){const[t,r]=d.useState("idle"),[s,a]=d.useState([]),[o,i]=d.useState(0),[l,c]=d.useState([]),[u,m]=d.useState(0),[p,f]=d.useState(""),[w,x]=d.useState(null),[j,S]=d.useState(null),[y,g]=d.useState(!1),[v,N]=d.useState(!1),[C,R]=d.useState(!1),[E,h]=d.useState(null),[b,k]=d.useState(0),_=d.useRef(null),P=d.useRef(null),[F]=Ze("/sounds/correct.mp3",{volume:.6}),[Q]=Ze("/sounds/wrong.mp3",{volume:.6}),[J]=Ze("/sounds/win.mp3",{volume:.7,duration:1e3}),[H]=Ze("/sounds/coin.mp3",{volume:.75}),q=3,O=10,I=2,D=50;d.useEffect(()=>{L()},[]),d.useEffect(()=>{if(t==="complete"){const K=()=>{const V=new Date,Y=new Date(V);Y.setDate(Y.getDate()+1),Y.setHours(0,0,0,0);const A=Y-V,te=Math.floor(A/(1e3*60*60)),se=Math.floor(A%(1e3*60*60)/(1e3*60));f(`${te}h ${se}m`)};K();const X=setInterval(K,6e4);return()=>clearInterval(X)}},[t]);const L=async()=>{try{const X=await(await fetch("/data/quiz_questions_bank.csv")).text(),{data:V}=hr.parse(X,{header:!0,skipEmptyLines:!0}),Y=V.filter(A=>A.question&&A.option1&&A.option2&&A.option3&&A.option4).map((A,te)=>{var se;return{id:te,question:A.question,options:[A.option1,A.option2,A.option3,A.option4],correct:["A","B","C","D"].indexOf((se=A.answer)==null?void 0:se.toUpperCase())}}).filter(A=>A.correct>=0).sort(()=>Math.random()-.5).slice(0,q);a(Y)}catch{a([{id:1,question:"What is the capital of France?",options:["London","Paris","Berlin","Madrid"],correct:1},{id:2,question:"What is 2 + 2?",options:["3","4","5","6"],correct:1},{id:3,question:"What color is the sky?",options:["Red","Green","Blue","Yellow"],correct:2}])}},T=()=>{r("playing"),i(0),c(new Array(q).fill(null)),m(0),g(!1),k(0)},z=K=>{const X=[...l];X[o]=K,c(X);const V=K===s[o].correct;N(V),g(!0),V?(F&&F(),R(!0),setTimeout(()=>R(!1),500)):Q&&Q();const Y=X.filter(A=>A!==null).length;setTimeout(()=>{g(!1),Y===q?(r("celebrating"),J&&J(),setTimeout(()=>{W(X)},2e3)):B(X)},600)},B=K=>{for(let X=o+1;X<q;X++)if(K[X]===null){i(X);return}for(let X=0;X<o;X++)if(K[X]===null){i(X);return}},W=K=>{const X=K.reduce((A,te,se)=>A+(te===s[se].correct?1:0),0);m(X);const Y=X===q?X*O*I:X*O;k(Y),r("complete"),setTimeout(()=>{if(Y>0&&_.current&&(e!=null&&e.current)){const A=_.current.getBoundingClientRect();h({startRect:A,count:Math.min(Y/5,10),amount:Y}),H&&H()}},500)},$=()=>{L(),r("idle"),i(0),c([]),m(0),g(!1),k(0)},Z=K=>{S(null),x(K.targetTouches[0].clientX)},U=K=>{S(K.targetTouches[0].clientX)},M=()=>{if(!w||!j)return;const K=w-j,X=K>D,V=K<-D;if(X){const Y=(o+1)%q;i(Y)}else if(V){const Y=(o-1+q)%q;i(Y)}},ee=({parentRef:K})=>{var te;if(!C)return null;const X=(te=K==null?void 0:K.current)==null?void 0:te.getBoundingClientRect(),V=X?X.top:100,Y=X?X.left:0,A=X?X.width:window.innerWidth;return n.jsx("div",{className:"fixed inset-0 pointer-events-none z-50",children:[...Array(12)].map((se,le)=>n.jsx("div",{className:"absolute",style:{left:`${Y+Math.random()*A}px`,top:`${V}px`,animation:`confettiFall ${2+Math.random()*1}s ease-out forwards`,animationDelay:`${Math.random()*.3}s`,fontSize:"24px",opacity:.9},children:["🎉","✨","🌟","⭐","🎊"][Math.floor(Math.random()*5)]},`${Date.now()}-${le}`))})};if(t==="celebrating")return n.jsxs("div",{className:"relative rounded-2xl bg-gradient-to-br from-purple-600/20 to-blue-600/20 backdrop-blur border border-white/10 p-8 mb-4 text-center",children:[n.jsx("div",{className:"animate-bounce-slow",children:n.jsx("span",{className:"text-5xl",children:"🎉"})}),n.jsx("h2",{className:"text-2xl font-bold mt-4 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent",children:"Congratulations!"}),n.jsx("p",{className:"text-sm text-gray-400 mt-2",children:"You've completed today's challenge"})]});if(t==="complete"){const K=Math.round(u/q*100),X=u===q;return n.jsxs(n.Fragment,{children:[E&&n.jsx(Gn,{startRect:E.startRect,targetRef:e,count:E.count,onDone:()=>{if(!E.processed){E.processed=!0;const V=rt.getCurrentUser();V!=null&&V.phone?(ie.addCoins(E.amount,"Daily Challenge"),ie.updateQuestProgress(V.phone,"daily_challenge",1)):ie.addCoins(E.amount,"Daily Challenge"),window.dispatchEvent(new Event("coinsUpdated"))}h(null)}}),n.jsxs("div",{className:"relative rounded-2xl bg-gradient-to-br from-purple-600/10 to-blue-600/10 backdrop-blur border border-white/10 p-4 mb-4",children:[n.jsxs("div",{ref:_,className:"flex items-center justify-between",children:[n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsx("div",{className:"w-12 h-12 rounded-full bg-gradient-to-br from-yellow-400/20 to-orange-400/20 flex items-center justify-center",children:n.jsx("span",{className:"text-2xl",children:X?"🏆":u>=2?"🥈":"🥉"})}),n.jsxs("div",{children:[n.jsx("h3",{className:"text-lg font-semibold text-yellow-400",children:"Challenge Complete!"}),n.jsxs("p",{className:"text-xs text-gray-400",children:["Come back in ",p]})]})]}),n.jsxs("div",{className:"flex gap-4",children:[n.jsxs("div",{className:"text-center",children:[n.jsxs("div",{className:"text-lg font-bold text-green-400",children:[K,"%"]}),n.jsx("div",{className:"text-[10px] text-gray-500",children:"Accuracy"})]}),n.jsxs("div",{className:"text-center",children:[n.jsxs("div",{className:"text-lg font-bold text-yellow-400",children:["+",b]}),n.jsx("div",{className:"text-[10px] text-gray-500",children:"Coins"})]}),n.jsxs("div",{className:"text-center",children:[n.jsx("div",{className:"text-lg font-bold text-orange-400 whitespace-nowrap",children:"🔥2"}),n.jsx("div",{className:"text-[10px] text-gray-500",children:"Streak"})]})]})]}),n.jsx("button",{onClick:$,className:"absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-[10px] text-gray-600 hover:text-gray-400",children:"[Test: Replay]"})]})]})}if(t==="idle")return n.jsx("div",{className:"relative overflow-hidden rounded-2xl bg-gradient-to-br from-violet-500/30 to-blue-500/15 backdrop-blur border border-white/10 p-8 mb-4",children:n.jsxs("div",{className:"flex items-center justify-between",children:[n.jsxs("div",{children:[n.jsx("h3",{className:"text-lg font-semibold mb-2",children:"Daily Challenge"}),n.jsxs("p",{className:"text-xs text-gray-400",children:[q," questions • Up to ",q*O*I," coins"]})]}),n.jsx("button",{onClick:T,className:"w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center cursor-pointer hover:scale-110 active:scale-95 transition-transform",children:n.jsx("span",{className:"text-white",children:"▶"})})]})});const G=s[o];return n.jsxs(n.Fragment,{children:[n.jsx(ee,{parentRef:P}),n.jsxs("div",{ref:P,className:"relative rounded-2xl bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur border border-white/10 p-4 mb-4",onTouchStart:Z,onTouchMove:U,onTouchEnd:M,children:[n.jsx("div",{className:"flex gap-1 mb-4",children:[...Array(q)].map((K,X)=>{var V;return n.jsx("div",{className:`h-1 flex-1 rounded-full transition-all ${l[X]!==null?l[X]===((V=s[X])==null?void 0:V.correct)?"bg-green-500":"bg-red-500":X===o?"bg-blue-500":"bg-gray-700"}`},X)})}),n.jsx("h3",{className:"text-base font-medium mb-4",children:G.question}),n.jsx("div",{className:"grid gap-2",children:G.options.map((K,X)=>{const V=l[o]===X,Y=l[o]!==null,A=X===G.correct,te=y&&(V||A);return n.jsx("button",{onClick:()=>!Y&&z(X),disabled:Y,className:`
                  relative p-3 rounded-xl text-left text-sm font-medium transition-all
                  ${te&&A?"bg-green-500/30 border border-green-500 animate-pulse-once":te&&V&&!A?"bg-red-500/30 border border-red-500 animate-shake":V&&!y?"bg-blue-500/20 border border-blue-500":Y?"bg-white/5 border border-transparent opacity-50":"bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/10 active:scale-[0.98]"}
                `,children:n.jsxs("div",{className:"flex items-center justify-between",children:[n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx("span",{className:"opacity-50",children:String.fromCharCode(65+X)}),n.jsx("span",{children:K})]}),te&&A&&n.jsx("span",{className:"text-green-400 animate-fade-in",children:"✓"}),te&&V&&!A&&n.jsx("span",{className:"text-red-400 animate-fade-in",children:"✗"})]})},X)})}),n.jsx("style",{jsx:!0,children:`
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
        `})]})]})}function cg({show:e,onClose:t,player:r,changeAvatar:s,GAME_CONSTANTS:a}){return e?n.jsx("div",{className:"fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4",onClick:o=>{o.target===o.currentTarget&&t()},children:n.jsxs("div",{className:"bg-base-card rounded-3xl p-6 w-full max-w-md border border-base-border max-h-[80vh] overflow-y-auto",onClick:o=>o.stopPropagation(),children:[n.jsxs("div",{className:"flex justify-between items-center mb-4",children:[n.jsx("h3",{className:"text-xl font-bold",children:"Choose Your Avatar"}),n.jsx("button",{onClick:t,className:"w-8 h-8 rounded-lg bg-white/5 border border-base-border grid place-items-center hover:bg-white/10 transition",children:"✕"})]}),n.jsx("div",{className:"grid grid-cols-2 gap-4",children:a.AVATARS.map(o=>{const i=!r.unlockedAvatars||!r.unlockedAvatars.includes(o.id),l=r.avatar===o.id;return n.jsxs("button",{onClick:()=>{i||(s(o.id),t())},className:`p-4 rounded-2xl border-2 transition-all ${l?"border-brand-blue bg-brand-blue/20":i?"border-gray-600 bg-gray-800/50 opacity-50":"border-base-border bg-white/5 hover:bg-white/10"}`,disabled:i,children:[n.jsx("div",{className:`text-4xl mb-2 ${i?"grayscale":""}`,children:o.emoji}),n.jsx("div",{className:"text-sm font-medium",children:o.name}),i&&n.jsxs("div",{className:"text-xs text-gray-400 mt-1",children:["Unlock at Level ",o.unlockLevel]}),l&&n.jsx("div",{className:"text-xs text-brand-blue mt-1",children:"Current"})]},o.id)})})]})}):null}function dg({show:e,onClose:t,categories:r,onCategorySelect:s}){return e?n.jsx("div",{className:"fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4",onClick:a=>{a.target===a.currentTarget&&t()},children:n.jsxs("div",{className:"bg-base-card rounded-3xl p-6 w-full max-w-md border border-base-border",onClick:a=>a.stopPropagation(),children:[n.jsxs("div",{className:"flex justify-between items-center mb-4",children:[n.jsx("h3",{className:"text-xl font-bold",children:"More categories"}),n.jsx("button",{onClick:t,className:"w-8 h-8 rounded-lg bg-white/5 border border-base-border grid place-items-center hover:bg-white/10 transition",children:"✕"})]}),n.jsx("div",{className:"grid grid-cols-2 gap-3 mb-4",children:r.map(a=>n.jsxs("button",{onClick:()=>{t(),s(a)},className:`bg-gradient-to-br ${a.gradient} p-4 rounded-2xl flex flex-col items-center gap-2 hover:scale-105 transition-transform relative`,children:[n.jsx("div",{className:"text-3xl",children:a.icon}),n.jsx("div",{className:"text-sm font-bold text-white",children:a.name}),n.jsxs("div",{className:"text-xs text-white/80",children:[a.questions," questions"]})]},a.name))})]})}):null}function ug({show:e,onClose:t,coins:r,onNavigateToPlay:s}){return e?n.jsx("div",{className:"fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4",onClick:a=>{a.target===a.currentTarget&&t()},children:n.jsxs("div",{className:"bg-base-card rounded-3xl p-6 w-full max-w-md border border-base-border relative overflow-hidden",onClick:a=>a.stopPropagation(),children:[n.jsx("div",{className:"absolute inset-0 opacity-10",children:n.jsx("div",{className:"magic-gradient h-full"})}),n.jsxs("div",{className:"relative",children:[n.jsxs("div",{className:"flex items-center justify-between mb-6",children:[n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsx("div",{className:"coin-3d text-5xl",style:{animation:"coinRotate 2s linear infinite, glow 2s ease-in-out infinite"},children:"🪙"}),n.jsxs("div",{children:[n.jsx("h3",{className:"text-2xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent",children:"Your Treasure"}),n.jsxs("p",{className:"text-3xl font-bold text-white mt-1",children:[ie.getCoins()," Coins"]})]})]}),n.jsx("button",{onClick:t,className:"w-8 h-8 rounded-lg bg-white/5 border border-base-border grid place-items-center hover:bg-white/10 transition",children:"✕"})]}),n.jsxs("div",{className:"mb-6",children:[n.jsx("h4",{className:"text-sm font-medium text-base-muted mb-3",children:"Ways to Earn"}),n.jsxs("div",{className:"space-y-3",children:[n.jsx("div",{className:"p-4 rounded-xl bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 hover:scale-[1.02] transition-transform",children:n.jsxs("div",{className:"flex items-center justify-between",children:[n.jsxs("div",{children:[n.jsxs("div",{className:"font-medium flex items-center gap-2",children:[n.jsx("span",{className:"text-2xl",children:"✅"}),"Complete Quizzes"]}),n.jsx("div",{className:"text-xs text-base-muted mt-1",children:"+5 coins per correct answer"})]}),n.jsx("div",{className:"text-green-400 font-bold",children:"+5"})]})}),n.jsx("div",{className:"p-4 rounded-xl bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 hover:scale-[1.02] transition-transform",children:n.jsxs("div",{className:"flex items-center justify-between",children:[n.jsxs("div",{children:[n.jsxs("div",{className:"font-medium flex items-center gap-2",children:[n.jsx("span",{className:"text-2xl",children:"🎯"}),"Daily Challenge"]}),n.jsx("div",{className:"text-xs text-base-muted mt-1",children:"Complete daily for bonus"})]}),n.jsx("div",{className:"text-blue-400 font-bold",children:"+5"})]})}),n.jsx("div",{className:"p-4 rounded-xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 hover:scale-[1.02] transition-transform",children:n.jsxs("div",{className:"flex items-center justify-between",children:[n.jsxs("div",{children:[n.jsxs("div",{className:"font-medium flex items-center gap-2",children:[n.jsx("span",{className:"text-2xl",children:"🎰"}),"Spin & Play"]}),n.jsx("div",{className:"text-xs text-base-muted mt-1",children:"Test your luck!"})]}),n.jsx("div",{className:"text-purple-400 font-bold",children:"+50"})]})}),n.jsx("div",{className:"p-4 rounded-xl bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/20 hover:scale-[1.02] transition-transform",children:n.jsxs("div",{className:"flex items-center justify-between",children:[n.jsxs("div",{children:[n.jsxs("div",{className:"font-medium flex items-center gap-2",children:[n.jsx("span",{className:"text-2xl",children:"🏆"}),"Achievements"]}),n.jsx("div",{className:"text-xs text-base-muted mt-1",children:"Unlock special rewards"})]}),n.jsx("div",{className:"text-orange-400 font-bold",children:"+???"})]})})]})]}),n.jsxs("div",{className:"mb-6",children:[n.jsxs("div",{className:"flex justify-between text-xs text-base-muted mb-2",children:[n.jsx("span",{children:"Next reward"}),n.jsxs("span",{children:[100-r%100," coins to go"]})]}),n.jsx("div",{className:"h-2 bg-white/10 rounded-full overflow-hidden",children:n.jsx("div",{className:"h-full bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full transition-all",style:{width:`${r%100}%`}})})]}),n.jsx("button",{onClick:s,className:"w-full py-3 rounded-xl bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-bold hover:scale-[1.02] transition-transform shadow-lg",style:{boxShadow:"0 10px 30px rgba(251, 191, 36, 0.3)"},children:"Start Earning Now! 🚀"})]})]})}):null}function mg({show:e,onClose:t,selectedCategory:r,difficulty:s,setDifficulty:a,count:o,setCount:i,timer:l,setTimer:c,onStart:u}){return!e||!r?null:n.jsx("div",{className:"fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4",style:{position:"fixed",top:0,left:0,right:0,bottom:0,display:"flex",alignItems:"center",justifyContent:"center",zIndex:9999},onClick:m=>{m.target===m.currentTarget&&t()},children:n.jsxs("div",{className:"bg-base-card rounded-3xl p-6 w-full max-w-md border border-base-border",onClick:m=>m.stopPropagation(),children:[n.jsxs("div",{className:"flex justify-between items-center mb-4",children:[n.jsx("h3",{className:"text-xl font-bold",children:"Quiz Mode"}),n.jsx("button",{onClick:t,className:"w-8 h-8 rounded-lg bg-white/5 border border-base-border grid place-items-center hover:bg-white/10 transition",children:"✕"})]}),n.jsx("div",{className:"mb-4 p-3 rounded-xl bg-blue-500/10 border border-blue-500/30",children:n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsx("div",{className:"text-2xl",children:r.icon}),n.jsxs("div",{children:[n.jsxs("div",{className:"font-medium",children:["Category: ",r.name]}),n.jsxs("div",{className:"text-xs text-base-muted",children:[r.questions," questions available"]})]})]})}),n.jsxs("div",{className:"mb-4",children:[n.jsx("label",{className:"text-sm text-base-muted mb-2 block",children:"Difficulty"}),n.jsx("div",{className:"grid grid-cols-3 gap-2",children:["easy","medium","hard"].map(m=>n.jsx("button",{onClick:()=>a(m),className:`py-2 rounded-xl border ${s===m?"bg-brand-blue/30 border-brand-blue":"bg-white/5 border-base-border"}`,children:m.charAt(0).toUpperCase()+m.slice(1)},m))})]}),n.jsxs("div",{className:"mb-4",children:[n.jsx("label",{className:"text-sm text-base-muted mb-2 block",children:"Questions"}),n.jsx("div",{className:"grid grid-cols-4 gap-2",children:[5,10,20,30].map(m=>n.jsx("button",{onClick:()=>i(m),className:`py-2 rounded-xl border ${o===m?"bg-brand-blue/30 border-brand-blue":"bg-white/5 border-base-border"}`,children:m},m))})]}),n.jsxs("div",{className:"mb-6",children:[n.jsx("label",{className:"text-sm text-base-muted mb-2 block",children:"Timer (seconds per question)"}),n.jsx("input",{type:"number",value:l,onChange:m=>c(Number(m.target.value)||45),min:10,max:120,className:"w-full px-4 py-2 rounded-xl bg-white/5 border border-base-border"})]}),n.jsxs("div",{className:"flex gap-3",children:[n.jsx("button",{onClick:t,className:"flex-1 py-3 rounded-xl border border-base-border bg-white/5",children:"Cancel"}),n.jsx("button",{onClick:u,className:"flex-1 py-3 rounded-xl bg-gradient-to-r from-brand-blue to-brand-purple text-white font-medium",children:"Start Quiz"})]})]})})}function fg({show:e,onClose:t,allCategories:r,category:s,setCategory:a,difficulty:o,setDifficulty:i,count:l,setCount:c,onStart:u}){return e?n.jsx("div",{className:"fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4",onClick:m=>{m.target===m.currentTarget&&t()},children:n.jsxs("div",{className:"bg-base-card rounded-3xl p-6 w-full max-w-md border border-base-border max-h-[90vh] overflow-y-auto",onClick:m=>m.stopPropagation(),children:[n.jsxs("div",{className:"flex justify-between items-center mb-4",children:[n.jsx("h3",{className:"text-xl font-bold",children:"Practice Mode"}),n.jsx("button",{onClick:t,className:"w-8 h-8 rounded-lg bg-white/5 border border-base-border grid place-items-center hover:bg-white/10 transition",children:"✕"})]}),n.jsxs("div",{className:"mb-4",children:[n.jsx("label",{className:"text-sm text-base-muted mb-2 block",children:"Category"}),n.jsx("div",{className:"grid grid-cols-3 gap-2 max-h-[200px] overflow-y-auto",children:r.map(m=>n.jsxs("button",{onClick:()=>a(m.slug),className:`p-3 rounded-xl border flex flex-col items-center gap-1 ${s===m.slug?"bg-brand-blue/30 border-brand-blue":"bg-white/5 border-base-border"}`,children:[n.jsx("div",{className:"text-xl",children:m.icon}),n.jsx("div",{className:"text-[10px] text-center",children:m.name})]},m.slug))})]}),n.jsxs("div",{className:"mb-4",children:[n.jsx("label",{className:"text-sm text-base-muted mb-2 block",children:"Difficulty"}),n.jsx("div",{className:"grid grid-cols-3 gap-2",children:["easy","medium","hard"].map(m=>n.jsx("button",{onClick:()=>i(m),className:`py-2 rounded-xl border ${o===m?"bg-brand-blue/30 border-brand-blue":"bg-white/5 border-base-border"}`,children:m.charAt(0).toUpperCase()+m.slice(1)},m))})]}),n.jsxs("div",{className:"mb-6",children:[n.jsx("label",{className:"text-sm text-base-muted mb-2 block",children:"Questions"}),n.jsx("div",{className:"grid grid-cols-4 gap-2",children:[5,10,20,30].map(m=>n.jsx("button",{onClick:()=>c(m),className:`py-2 rounded-xl border ${l===m?"bg-brand-blue/30 border-brand-blue":"bg-white/5 border-base-border"}`,children:m},m))})]}),n.jsxs("div",{className:"flex gap-3",children:[n.jsx("button",{onClick:t,className:"flex-1 py-3 rounded-xl border border-base-border bg-white/5",children:"Cancel"}),n.jsx("button",{onClick:u,className:"flex-1 py-3 rounded-xl bg-gradient-to-r from-brand-blue to-brand-purple text-white font-medium",children:"Start Practice"})]})]})}):null}function hg({player:e,onContinue:t}){const[r,s]=d.useState(()=>sessionStorage.getItem("justSignedUp")==="true"?(sessionStorage.removeItem("justSignedUp"),!1):sessionStorage.getItem("welcomeShown")!=="true"),[a,o]=d.useState(!1),[i,l]=d.useState(!1),[c,u]=d.useState(""),[m,p]=d.useState(""),[f,w]=d.useState("Champion"),[x,j]=d.useState(1),[S,y]=d.useState(0),[g,v]=d.useState(0),N=()=>{try{const h=new Audio("/sounds/welcome.mp3");h.volume=.6,h.play()}catch{console.log("Welcome sound not available")}},C=()=>{navigator.vibrate&&navigator.vibrate([100,50,100])};d.useEffect(()=>{if((()=>{const F=JSON.parse(localStorage.getItem("currentUser")||"{}");let Q="Champion",J=1,H=0,q=0;if(F.phone){const I=JSON.parse(localStorage.getItem(`user_profile_${F.phone}`)||"{}"),L=JSON.parse(localStorage.getItem("users")||"{}")[F.phone]||{};I.name?Q=I.name.split(" ")[0]:L.username?Q=L.username.split(" ")[0]:F.username&&(Q=F.username.split(" ")[0]),Q&&Q!=="Champion"&&(Q=Q.charAt(0).toUpperCase()+Q.slice(1).toLowerCase())}else F.username&&(Q=F.username.split(" ")[0]);const O=JSON.parse(localStorage.getItem("qp_player")||"{}");J=(e==null?void 0:e.level)||O.level||1,H=ie.getCoins(),q=(e==null?void 0:e.currentStreak)||O.currentStreak||0,Q!=="Champion"&&Q!==O.name&&(O.name=Q,localStorage.setItem("qp_player",JSON.stringify(O))),w(Q),j(J),y(H),v(q)})(),!r){t();return}sessionStorage.setItem("welcomeShown","true"),document.body.classList.add("hide-bottom-nav"),N(),C();const b=["🦉","🐧","🦝","🦜","🦕","🐙","🦊","🐸","🦁","🐨"];p(b[Math.floor(Math.random()*b.length)]);const k=setInterval(()=>{l(F=>!F)},2e3),_=["🎯 New challenges await!","🏆 Ready to be a champion?","🌟 Your brain adventure starts now!","🎨 Time for fun learning!","🎪 The quiz circus is open!","🚀 Blast off to knowledge!","🎭 Let's play and learn!","🌈 Rainbow of questions ahead!"];u(_[Math.floor(Math.random()*_.length)]);const P=setInterval(()=>{u(_[Math.floor(Math.random()*_.length)])},3e3);return()=>{document.body.classList.remove("hide-bottom-nav"),clearInterval(k),clearInterval(P)}},[r,t,e]);const R=()=>{try{const h=new Audio("/sounds/tap.mp3");h.volume=.5,h.play()}catch{console.log("Click sound not available")}navigator.vibrate&&navigator.vibrate(20),o(!0),document.body.classList.remove("hide-bottom-nav"),setTimeout(()=>{s(!1),t()},400)};if(!r)return null;const E=()=>{const h=new Date().getHours();return h<12?"Good morning":h<17?"Good afternoon":"Good evening"};return n.jsxs("div",{className:`fixed inset-0 z-50 flex items-center justify-center transition-all duration-500
      ${a?"opacity-0 scale-95":"opacity-100 scale-100"}`,children:[n.jsx("div",{className:"absolute inset-0",style:{background:"linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #fda085 75%, #f5a375 90%, #e08060 100%)"}}),n.jsxs("div",{className:"absolute inset-0 overflow-hidden",children:[[{top:"10%",left:"15%",size:"24px",delay:"0s"},{top:"20%",left:"75%",size:"20px",delay:"0.5s"},{top:"15%",left:"45%",size:"28px",delay:"1s"},{top:"30%",left:"85%",size:"22px",delay:"1.5s"},{top:"8%",left:"60%",size:"26px",delay:"2s"}].map((h,b)=>n.jsx("div",{className:"absolute animate-twinkle",style:{top:h.top,left:h.left,fontSize:h.size,animationDelay:h.delay},children:"⭐"},`star-${b}`)),n.jsxs("div",{className:"absolute top-10 left-0 w-full",children:[n.jsx("div",{className:"cloud cloud1",children:"☁️"}),n.jsx("div",{className:"cloud cloud2",children:"☁️"})]})]}),n.jsxs("div",{className:"relative z-10 text-center px-6 w-full max-w-sm mx-auto",children:[n.jsx("div",{className:`text-8xl mb-4 transition-transform duration-500 ${i?"scale-110 rotate-6":"scale-100 rotate-0"}`,children:m}),n.jsxs("div",{className:"relative rounded-3xl px-6 py-4 mb-6 shadow-xl overflow-hidden",children:[n.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100"}),n.jsx("div",{className:"absolute -top-3 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-br from-purple-100 to-pink-100 rotate-45"}),n.jsxs("div",{className:"relative",children:[n.jsxs("h1",{className:"text-3xl font-bold text-purple-800",children:["Hello, ",f,"! 👋"]}),n.jsx("p",{className:"text-sm text-purple-600 mt-1",children:E()})]})]}),n.jsxs("div",{className:"grid grid-cols-3 gap-3 mb-6",children:[n.jsxs("div",{className:"relative rounded-2xl p-3 transform hover:scale-105 transition-transform overflow-hidden",children:[n.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-yellow-200 via-yellow-100 to-orange-100"}),n.jsxs("div",{className:"relative",children:[n.jsx("div",{className:"text-3xl mb-1",children:"⭐"}),n.jsx("div",{className:"text-2xl font-bold text-orange-800",children:x}),n.jsx("div",{className:"text-xs text-orange-600",children:"Level"})]})]}),n.jsxs("div",{className:"relative rounded-2xl p-3 transform hover:scale-105 transition-transform overflow-hidden",children:[n.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-blue-200 via-cyan-100 to-teal-100"}),n.jsxs("div",{className:"relative",children:[n.jsx("div",{className:"text-3xl mb-1",children:"🪙"}),n.jsx("div",{className:"text-2xl font-bold text-teal-800",children:S}),n.jsx("div",{className:"text-xs text-teal-600",children:"Coins"})]})]}),n.jsxs("div",{className:"relative rounded-2xl p-3 transform hover:scale-105 transition-transform overflow-hidden",children:[n.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-orange-200 via-red-100 to-pink-100"}),n.jsxs("div",{className:"relative",children:[n.jsx("div",{className:"text-3xl mb-1",children:"🔥"}),n.jsx("div",{className:"text-2xl font-bold text-orange-800",children:g}),n.jsx("div",{className:"text-xs text-orange-600",children:"Streak"})]})]})]}),n.jsx("div",{className:"h-4"}),n.jsx("div",{className:"text-white/90 font-medium animate-fade-slide mb-6",children:c}),n.jsxs("button",{onClick:R,className:"group relative w-full",children:[n.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 rounded-full blur-lg opacity-75 group-hover:opacity-100 transition-opacity"}),n.jsxs("div",{className:`relative bg-gradient-to-r from-green-400 to-blue-500 text-white py-5 px-8 rounded-full font-bold text-xl shadow-2xl 
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
      `})]})}function Dd(){const[e,t]=d.useState(()=>{const B=sessionStorage.getItem("justSignedUp"),W=sessionStorage.getItem("justSignedIn");return B==="true"||W==="true"?(sessionStorage.removeItem("justSignedUp"),sessionStorage.removeItem("justSignedIn"),sessionStorage.setItem("welcomeShown","true"),!1):sessionStorage.getItem("welcomeShown")!=="true"}),r=ke(),s=wn(),{player:a,levelProgress:o,useEnergy:i,changeAvatar:l}=s,[,c]=d.useState({});Ze("/sounds/correct.mp3",{volume:.6}),Ze("/sounds/wrong.mp3",{volume:.6}),Ze("/sounds/coin.mp3",{volume:.75});const[u]=Ze("/sounds/levelup.mp3",{volume:.8}),m=d.useRef(a.level),p=d.useRef(null);d.useEffect(()=>{const B=()=>{};return window.addEventListener("focus",B),()=>window.removeEventListener("focus",B)},[]),d.useEffect(()=>{a.level>m.current&&(u==null||u(),m.current=a.level)},[a.level,u]),d.useEffect(()=>{const B=()=>{c({})};return window.addEventListener("storage",B),window.addEventListener("coinsUpdated",B),()=>{window.removeEventListener("storage",B),window.removeEventListener("coinsUpdated",B)}},[]);const[f,w]=d.useState(!1),[x,j]=d.useState(null),[S,y]=d.useState(!1),[g,v]=d.useState("medium"),[N,C]=d.useState(10),[R,E]=d.useState(45),[h,b]=d.useState(!1),[k,_]=d.useState(!1),[P,F]=d.useState(!1),[Q,J]=d.useState("general-knowledge"),[H,q]=d.useState("medium"),[O,I]=d.useState(10);d.useEffect(()=>{const B=sessionStorage.getItem("homeScrollPosition");B&&window.scrollTo(0,parseInt(B));const W=()=>{sessionStorage.setItem("homeScrollPosition",window.scrollY.toString())};return window.addEventListener("scroll",W),()=>window.removeEventListener("scroll",W)},[]);const D=B=>{if(B.slug==="more"){w(!0);return}j(B),y(!0)},L=()=>{console.log("Starting quiz with energy:",a.energy),console.log("Category:",x.slug),r(`/quiz/${x.slug}`,{state:{mode:"quiz",difficulty:g,count:N,timer:{type:"per_q",seconds:R},source:"adventure"}}),y(!1)},T=()=>{console.log("Starting practice, category:",Q),r(`/quiz/${Q}`,{state:{mode:"practice",difficulty:H,count:O,timer:{type:"off",seconds:0}}}),F(!1)},z=[{icon:"🎯",label:"Quests",color:"bg-gradient-to-br from-orange-500 to-pink-500",action:()=>{sessionStorage.setItem("questsFromHome","true"),r("/profile/quests")}},{icon:"🔥",label:"Streak",color:"bg-gradient-to-br from-red-500 to-orange-500",action:()=>r("/profile/streaks")},{icon:"🏆",label:"Achieve",color:"bg-gradient-to-br from-blue-500 to-purple-500",action:()=>r("/profile/achievements")},{icon:"🎁",label:"Rewards",color:"bg-gradient-to-br from-green-500 to-teal-500",action:()=>r("/profile/rewards")}];return n.jsxs(n.Fragment,{children:[e&&n.jsx(hg,{player:a,onContinue:()=>t(!1)}),n.jsxs("div",{className:"min-h-screen bg-base-bg text-base-text",children:[n.jsx("div",{className:"fixed inset-0 -z-10 pointer-events-none",style:{background:"linear-gradient(to bottom, #0B0F1A, #111827)"}}),n.jsxs("div",{className:"relative z-10 px-4 pt-10 pb-24",children:[n.jsx("style",{jsx:!0,children:`
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
        `}),n.jsxs("div",{className:"mb-8",children:[n.jsxs("div",{className:"flex justify-between items-start mb-4",children:[n.jsx("div",{className:"cursor-pointer hover:scale-105 transition-transform",onClick:()=>_(!0),children:n.jsx(ng,{player:a,size:"small",showLevel:!0,showName:!0})}),n.jsx("div",{className:"flex gap-2",children:n.jsxs("button",{ref:p,onClick:()=>b(!0),className:"px-3 py-1.5 rounded-xl bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/30 flex items-center gap-2 hover:from-yellow-500/20 hover:to-orange-500/20 transition",children:[n.jsx("span",{className:"text-lg",children:"🪙"}),n.jsx("span",{className:"font-bold",children:ie.getCoins()})]})})]}),n.jsx(rg,{current:o.current,required:o.required,level:a.level,animate:!0})]}),n.jsx(sg,{onClick:()=>r("/play")}),n.jsx(ag,{actions:z}),n.jsx(lg,{coinPillRef:p}),n.jsx(og,{categories:_m,onCategorySelect:D}),n.jsx(ig,{onClick:()=>F(!0),isPulsing:a.energy<10}),n.jsxs("div",{onClick:()=>r("/surprise"),className:"mt-6 relative overflow-hidden rounded-3xl bg-gradient-to-br from-purple-500/20 via-pink-500/20 to-yellow-500/20 backdrop-blur border border-white/10 p-12 mb-4 cursor-pointer hover:scale-[1.02] transition-all group",children:[n.jsxs("div",{className:"absolute inset-0 opacity-30",children:[n.jsx("div",{className:"absolute top-4 left-4 w-2 h-2 bg-yellow-400 rounded-full animate-pulse"}),n.jsx("div",{className:"absolute top-8 right-8 w-3 h-3 bg-pink-400 rounded-full animate-pulse",style:{animationDelay:"0.5s"}}),n.jsx("div",{className:"absolute bottom-6 left-12 w-2 h-2 bg-purple-400 rounded-full animate-pulse",style:{animationDelay:"1s"}}),n.jsx("div",{className:"absolute bottom-4 right-6 w-2 h-2 bg-blue-400 rounded-full animate-pulse",style:{animationDelay:"1.5s"}})]}),n.jsxs("div",{className:"relative flex items-center justify-between",children:[n.jsxs("div",{children:[n.jsx("h3",{className:"text-xl font-bold mb-1 bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400 bg-clip-text text-transparent",children:"✨ Surprise Zone"}),n.jsx("p",{className:"text-sm text-gray-400",children:"Mystery Box • Avatar Room • Fun Facts"})]}),n.jsx("div",{className:"text-4xl group-hover:rotate-12 transition-transform",children:"🎁"})]})]}),n.jsx(cg,{show:k,onClose:()=>_(!1),player:a,changeAvatar:l,GAME_CONSTANTS:xt}),n.jsx(mg,{show:S,onClose:()=>y(!1),selectedCategory:x,difficulty:g,setDifficulty:v,count:N,setCount:C,timer:R,setTimer:E,onStart:L}),n.jsx(fg,{show:P,onClose:()=>F(!1),allCategories:Im,category:Q,setCategory:J,difficulty:H,setDifficulty:q,count:O,setCount:I,onStart:T}),n.jsx(dg,{show:f,onClose:()=>w(!1),categories:Am,onCategorySelect:D}),n.jsx(ug,{show:h,onClose:()=>b(!1),coins:a.coins,onNavigateToPlay:()=>{b(!1),r("/play")}})]})]})]})}const xa={OWNED_CHARACTERS:"owned_characters",SOUND:"play_sound_on"},ga={get:(e,t=null)=>{try{const r=localStorage.getItem(e);return r?JSON.parse(r):t}catch{return t}},set:(e,t)=>{try{localStorage.setItem(e,JSON.stringify(t))}catch{}}};function Ao(){const[e,t]=d.useState(()=>ie.getCoins()),[r,s]=d.useState(()=>ie.getXP()),[a,o]=d.useState(()=>ie.getLevel()),[i,l]=d.useState(()=>ga.get(xa.OWNED_CHARACTERS,[])),[c,u]=d.useState(()=>ga.get(xa.SOUND,!0));d.useEffect(()=>{const N=rt.getCurrentUser();N!=null&&N.phone&&ie.initializeUserData(N.phone)},[]);const m=d.useCallback(N=>{const C=ie.addCoins(N,"Game reward");return t(C),C},[]),p=d.useCallback(N=>{const C=ie.addXP(N);s(C);const R=ie.getLevel();return R>a&&o(R),C},[a]),f=d.useCallback((N,C="Purchase")=>{if(ie.spendCoins(N,C)){const R=ie.getCoins();return t(R),!0}return!1},[]),w=d.useCallback(N=>{l(C=>{const R=[...new Set([...C,N])];return ga.set(xa.OWNED_CHARACTERS,R),R})},[]),x=d.useCallback(()=>ie.checkAndUpdateLevel(),[]);d.useEffect(()=>{ga.set(xa.SOUND,c)},[c]);const j=d.useCallback((N,C,R,E,h)=>{const b=rt.getCurrentUser(),k=ie.recordQuizSession(b==null?void 0:b.phone,{score:N,totalQuestions:C,category:R,difficulty:E,mode:h});return t(k.newTotal),s(k.newXP),o(k.newLevel),k},[]),S=d.useCallback((N,C,R)=>{const E=rt.getCurrentUser(),h=ie.recordPracticeSession(E==null?void 0:E.phone,{questionsCompleted:N,correctAnswers:C,category:R});return t(h.newTotal),s(h.newXP),h},[]),y=d.useCallback(()=>{const N=rt.getCurrentUser();return N!=null&&N.phone?ie.getUserStats(N.phone):null},[]),g=d.useCallback(()=>{const N=rt.getCurrentUser();return N!=null&&N.phone?ie.getQuestData(N.phone):null},[]),v=d.useCallback(()=>{const N=rt.getCurrentUser();return ie.getTodaySummary(N==null?void 0:N.phone)},[]);return{coins:e,xp:r,level:a,ownedCharacters:i,soundOn:c,addCoins:m,addXp:p,spendCoins:f,unlockCharacter:w,setSoundOn:u,checkLevelUp:x,recordQuizComplete:j,recordPracticeComplete:S,getUserStats:y,getQuestData:g,getTodaySummary:v,nextLevelThreshold:100*a*(a-1),xpProgress:r/Math.max(1,100*a*(a-1))}}const pg=[{name:"General Knowledge",questions:50,icon:"🧠",color:"#7C3AED"},{name:"Artificial Intelligence",questions:28,icon:"🤖",color:"#10B981"},{name:"Fun facts",questions:30,icon:"🎉",color:"#EF4444"},{name:"Science",questions:45,icon:"🧪",color:"#F59E0B"},{name:"History",questions:42,icon:"🏺",color:"#2563EB"},{name:"Geography",questions:38,icon:"🗺️",color:"#FACC15"}],Ht=pg.slice(0,6),rr=360/Ht.length,xg={"general-knowledge":"TINA","artificial-intelligence":"ALBERT","fun-facts":"BONZO",science:"POP",history:"TITO",geography:"HECTOR"},Nn={FULL_TURNS:6,DURATION:2800,OVERSHOOT:12,SETTLE_DURATION:350},Ln=(e,t=.7)=>{try{const r=new Audio(e);return r.volume=t,r.play().catch(()=>{})}catch{}},Io=e=>{navigator.vibrate&&navigator.vibrate(e)},Dn=e=>e.toLowerCase().replace(/[^\w\s-]/g,"").replace(/\s+/g,"-"),zd=e=>(e%360+360)%360;function gg({run:e,coins:t,xp:r,level:s,ownedCharacters:a,onSpin:o,onBack:i,spinning:l,angle:c,transition:u,result:m,showCallout:p,glowColor:f,soundOn:w,setSoundOn:x,showSparkle:j,pulseIdx:S,nextProgressIdx:y,pendingProgressIdx:g,coinBurstTick:v,lastAnswerWasCorrect:N,coinPillRef:C,wheelRef:R}){const E=100*s*(s-1),[h,b]=d.useState(!1),[k,_]=d.useState(ie.getCoins());return d.useEffect(()=>{const P=()=>_(ie.getCoins());window.addEventListener("coinsUpdated",P),window.addEventListener("storage",P);const F=setInterval(P,1e3);return()=>{window.removeEventListener("coinsUpdated",P),window.removeEventListener("storage",P),clearInterval(F)}},[]),d.useEffect(()=>(document.body.classList.add("hide-bottom-nav"),()=>{document.body.classList.remove("hide-bottom-nav")}),[]),d.useEffect(()=>{if(g==null)return;b(!1);const P=setTimeout(()=>b(!0),30);return()=>clearTimeout(P)},[g]),n.jsxs("div",{className:"fixed inset-0 bg-gradient-to-b from-gray-900 via-purple-900/20 to-gray-900 text-white overflow-hidden",children:[n.jsx("style",{children:`
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
      `}),n.jsxs("div",{className:"h-full flex flex-col mx-auto max-w-md px-5 pt-[calc(env(safe-area-inset-top)+2rem)]",children:[n.jsxs("header",{className:"flex items-center justify-between mb-4 mt-6",children:[n.jsx("button",{onClick:i,className:"h-12 w-12 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 grid place-items-center hover:bg-white/20 transition-all",children:n.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:n.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2.5,d:"M15 19l-7-7 7-7"})})}),n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsx("div",{className:"px-4 py-2 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20",children:n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsxs("span",{className:"text-xs text-white/70",children:["Lvl ",s]}),n.jsx("div",{className:"w-16 h-1.5 bg-white/20 rounded-full overflow-hidden",children:n.jsx("div",{className:"h-full bg-gradient-to-r from-blue-400 to-purple-400 rounded-full transition-all duration-500",style:{width:`${Math.min(r/E,1)*100}%`}})})]})}),n.jsxs("button",{ref:C,className:"px-4 py-2 rounded-2xl bg-gradient-to-r from-yellow-500/20 to-orange-500/20 backdrop-blur-xl border border-yellow-500/30 flex items-center gap-2 hover:scale-105 transition-transform",children:[n.jsx("span",{className:"text-lg",children:"🪙"}),n.jsx("span",{className:"font-bold text-yellow-300",children:k})]})]}),n.jsx("button",{onClick:()=>x(!w),className:"h-12 w-12 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 grid place-items-center hover:bg-white/20 transition-all",children:n.jsx("span",{className:"text-xl",children:w?"🔊":"🔇"})})]}),a.length>0&&n.jsx("div",{className:"flex justify-center mb-4",children:n.jsxs("div",{className:"inline-flex gap-3 px-5 py-3 bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10",children:[n.jsx("span",{className:"text-xs text-white/50 self-center",children:"Unlocked:"}),a.map(P=>{const F=Ht.find(Q=>Dn(Q.name)===P);return n.jsx("div",{className:"relative group",children:n.jsx("div",{className:"w-10 h-10 rounded-xl bg-gradient-to-br from-white/20 to-white/10 flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform",children:n.jsx("span",{className:"text-lg",children:F==null?void 0:F.icon})})},P)})]})}),n.jsx("div",{className:"flex justify-center gap-3 mb-6",children:[0,1,2].map(P=>{const F=!!e.progress[P],Q=P===g;return n.jsxs("div",{className:"relative flex items-center",children:[P<2&&n.jsx("div",{className:"absolute left-full w-3 h-0.5 bg-white/20 top-1/2 z-0"}),n.jsxs("div",{className:"relative z-10",children:[n.jsx("div",{className:`
                    w-12 h-12 rounded-full flex items-center justify-center
                    transition-all duration-700 transform
                    ${F?"bg-gradient-to-br from-green-400 to-emerald-500 scale-110":"bg-white/10 backdrop-blur border border-white/20"}
                    ${Q?"animate-pulse scale-125":""}
                  `,children:F?n.jsx("span",{className:"text-xl",style:{animation:Q?"star-bounce 1s ease-in-out":"none"},children:"⭐"}):n.jsx("span",{className:"text-white/40 font-bold text-sm",children:P+1})}),Q&&n.jsx("div",{className:"absolute inset-0 rounded-full overflow-hidden",children:n.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent",style:{animation:"shimmer 1s ease-out"}})}),j===P&&n.jsxs(n.Fragment,{children:[n.jsx("div",{className:"absolute -top-1 -right-1 text-yellow-400 animate-ping",children:"✨"}),n.jsx("div",{className:"absolute -bottom-1 -left-1 text-yellow-400 animate-ping",style:{animationDelay:"0.2s"},children:"✨"})]})]})]},P)})}),n.jsx("section",{className:"flex-1 flex items-center justify-center pb-12",children:n.jsxs("div",{className:"relative w-full max-w-sm",children:[n.jsx("div",{className:"absolute inset-0",style:{animation:"pulse-glow 4s ease-in-out infinite"},children:n.jsx("div",{className:"absolute inset-6 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-full blur-3xl"})}),n.jsxs("div",{ref:R,className:"relative w-full aspect-square",style:{animation:l?"none":"float 6s ease-in-out infinite"},children:[n.jsx("div",{className:"absolute -bottom-6 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-black/20 rounded-full blur-xl"}),f&&n.jsx("div",{className:"pointer-events-none absolute -inset-4 rounded-full animate-pulse",style:{boxShadow:`0 0 60px 20px ${f}40`,background:`radial-gradient(circle, ${f}20, transparent 70%)`}}),n.jsx("div",{className:"absolute inset-0 rounded-full border-4 border-white/30 shadow-2xl overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900",style:{transform:`rotate(${c}deg)`,transition:u,boxShadow:"inset 0 0 40px rgba(0,0,0,0.5), 0 20px 40px rgba(0,0,0,0.3)"},children:n.jsx("svg",{width:"100%",height:"100%",viewBox:"0 0 100 100",className:"block",children:Ht.map((P,F)=>{const Q=F*rr,J=Q+rr,H=rr>180?1:0,q=Math.PI*Q/180,O=Math.PI*J/180,I=50+48*Math.cos(q),D=50-48*Math.sin(q),L=50+48*Math.cos(O),T=50-48*Math.sin(O),z=Q+rr/2,B=30,W=50+B*Math.cos(z*Math.PI/180),$=50-B*Math.sin(z*Math.PI/180);return n.jsxs("g",{children:[n.jsx("defs",{children:n.jsxs("linearGradient",{id:`grad${F}`,x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[n.jsx("stop",{offset:"0%",stopColor:P.color,stopOpacity:"0.9"}),n.jsx("stop",{offset:"100%",stopColor:P.color,stopOpacity:"0.7"})]})}),n.jsx("path",{d:`M50,50 L${I},${D} A48,48 0 ${H} 0 ${L},${T} Z`,fill:`url(#grad${F})`,stroke:"rgba(255,255,255,0.2)",strokeWidth:"0.5"}),n.jsx("text",{x:W,y:$,fill:"white",fontSize:"20",dominantBaseline:"middle",textAnchor:"middle",style:{filter:"drop-shadow(0 2px 4px rgba(0,0,0,0.3))"},children:P.icon})]},F)})})}),n.jsxs("button",{onClick:o,disabled:l,className:"absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group",children:[n.jsx("div",{className:`
                  w-20 h-20 rounded-full 
                  bg-gradient-to-br from-white to-gray-100
                  shadow-2xl flex items-center justify-center
                  transition-all duration-300
                  ${l?"scale-90 opacity-80":"hover:scale-110 active:scale-95 hover:shadow-3xl"}
                `,children:n.jsx("span",{className:"font-black text-gray-800 text-sm",children:"SPIN"})}),!l&&n.jsx("div",{className:"absolute inset-0 rounded-full bg-white/30 animate-ping"})]}),p&&m&&n.jsx("div",{className:"absolute left-1/2 -translate-x-1/2 -top-20 z-30",children:n.jsx("div",{className:"px-5 py-2 rounded-2xl bg-white/95 backdrop-blur-xl shadow-2xl animate-bounce",children:n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx("span",{className:"text-2xl",children:m.cat.icon}),n.jsx("span",{className:"font-bold text-gray-800",children:m.cat.name})]})})})]})]})}),n.jsx("div",{className:"text-center pb-12",children:n.jsx("p",{className:"text-white/30 text-xs",children:"Tap SPIN to begin your adventure"})})]})]})}var Fa={linear:function(e,t,r,s){var a=r-t;return a*e/s+t},easeInQuad:function(e,t,r,s){var a=r-t;return a*(e/=s)*e+t},easeOutQuad:function(e,t,r,s){var a=r-t;return-a*(e/=s)*(e-2)+t},easeInOutQuad:function(e,t,r,s){var a=r-t;return(e/=s/2)<1?a/2*e*e+t:-a/2*(--e*(e-2)-1)+t},easeInCubic:function(e,t,r,s){var a=r-t;return a*(e/=s)*e*e+t},easeOutCubic:function(e,t,r,s){var a=r-t;return a*((e=e/s-1)*e*e+1)+t},easeInOutCubic:function(e,t,r,s){var a=r-t;return(e/=s/2)<1?a/2*e*e*e+t:a/2*((e-=2)*e*e+2)+t},easeInQuart:function(e,t,r,s){var a=r-t;return a*(e/=s)*e*e*e+t},easeOutQuart:function(e,t,r,s){var a=r-t;return-a*((e=e/s-1)*e*e*e-1)+t},easeInOutQuart:function(e,t,r,s){var a=r-t;return(e/=s/2)<1?a/2*e*e*e*e+t:-a/2*((e-=2)*e*e*e-2)+t},easeInQuint:function(e,t,r,s){var a=r-t;return a*(e/=s)*e*e*e*e+t},easeOutQuint:function(e,t,r,s){var a=r-t;return a*((e=e/s-1)*e*e*e*e+1)+t},easeInOutQuint:function(e,t,r,s){var a=r-t;return(e/=s/2)<1?a/2*e*e*e*e*e+t:a/2*((e-=2)*e*e*e*e+2)+t},easeInSine:function(e,t,r,s){var a=r-t;return-a*Math.cos(e/s*(Math.PI/2))+a+t},easeOutSine:function(e,t,r,s){var a=r-t;return a*Math.sin(e/s*(Math.PI/2))+t},easeInOutSine:function(e,t,r,s){var a=r-t;return-a/2*(Math.cos(Math.PI*e/s)-1)+t},easeInExpo:function(e,t,r,s){var a=r-t;return e==0?t:a*Math.pow(2,10*(e/s-1))+t},easeOutExpo:function(e,t,r,s){var a=r-t;return e==s?t+a:a*(-Math.pow(2,-10*e/s)+1)+t},easeInOutExpo:function(e,t,r,s){var a=r-t;return e===0?t:e===s?t+a:(e/=s/2)<1?a/2*Math.pow(2,10*(e-1))+t:a/2*(-Math.pow(2,-10*--e)+2)+t},easeInCirc:function(e,t,r,s){var a=r-t;return-a*(Math.sqrt(1-(e/=s)*e)-1)+t},easeOutCirc:function(e,t,r,s){var a=r-t;return a*Math.sqrt(1-(e=e/s-1)*e)+t},easeInOutCirc:function(e,t,r,s){var a=r-t;return(e/=s/2)<1?-a/2*(Math.sqrt(1-e*e)-1)+t:a/2*(Math.sqrt(1-(e-=2)*e)+1)+t},easeInElastic:function(e,t,r,s){var a=r-t,o,i,l;return l=1.70158,i=0,o=a,e===0?t:(e/=s)===1?t+a:(i||(i=s*.3),o<Math.abs(a)?(o=a,l=i/4):l=i/(2*Math.PI)*Math.asin(a/o),-(o*Math.pow(2,10*(e-=1))*Math.sin((e*s-l)*(2*Math.PI)/i))+t)},easeOutElastic:function(e,t,r,s){var a=r-t,o,i,l;return l=1.70158,i=0,o=a,e===0?t:(e/=s)===1?t+a:(i||(i=s*.3),o<Math.abs(a)?(o=a,l=i/4):l=i/(2*Math.PI)*Math.asin(a/o),o*Math.pow(2,-10*e)*Math.sin((e*s-l)*(2*Math.PI)/i)+a+t)},easeInOutElastic:function(e,t,r,s){var a=r-t,o,i,l;return l=1.70158,i=0,o=a,e===0?t:(e/=s/2)===2?t+a:(i||(i=s*(.3*1.5)),o<Math.abs(a)?(o=a,l=i/4):l=i/(2*Math.PI)*Math.asin(a/o),e<1?-.5*(o*Math.pow(2,10*(e-=1))*Math.sin((e*s-l)*(2*Math.PI)/i))+t:o*Math.pow(2,-10*(e-=1))*Math.sin((e*s-l)*(2*Math.PI)/i)*.5+a+t)},easeInBack:function(e,t,r,s,a){var o=r-t;return a===void 0&&(a=1.70158),o*(e/=s)*e*((a+1)*e-a)+t},easeOutBack:function(e,t,r,s,a){var o=r-t;return a===void 0&&(a=1.70158),o*((e=e/s-1)*e*((a+1)*e+a)+1)+t},easeInOutBack:function(e,t,r,s,a){var o=r-t;return a===void 0&&(a=1.70158),(e/=s/2)<1?o/2*(e*e*(((a*=1.525)+1)*e-a))+t:o/2*((e-=2)*e*(((a*=1.525)+1)*e+a)+2)+t},easeInBounce:function(e,t,r,s){var a=r-t,o;return o=Fa.easeOutBounce(s-e,0,a,s),a-o+t},easeOutBounce:function(e,t,r,s){var a=r-t;return(e/=s)<1/2.75?a*(7.5625*e*e)+t:e<2/2.75?a*(7.5625*(e-=1.5/2.75)*e+.75)+t:e<2.5/2.75?a*(7.5625*(e-=2.25/2.75)*e+.9375)+t:a*(7.5625*(e-=2.625/2.75)*e+.984375)+t},easeInOutBounce:function(e,t,r,s){var a=r-t,o;return e<s/2?(o=Fa.easeInBounce(e*2,0,a,s),o*.5+t):(o=Fa.easeOutBounce(e*2-s,0,a,s),o*.5+a*.5+t)}},vg=Fa;function yg(e){return e*Math.PI/180}function Rt(e,t){return e+Math.random()*(t-e)}function bg(e,t){return Math.floor(e+Math.random()*(t-e+1))}var Ss;(function(e){e[e.Circle=0]="Circle",e[e.Square=1]="Square",e[e.Strip=2]="Strip"})(Ss||(Ss={}));var Pn;(function(e){e[e.Positive=1]="Positive",e[e.Negative=-1]="Negative"})(Pn||(Pn={}));const wg=1e3/60;class jg{constructor(t,r,s,a){this.getOptions=r;const{colors:o,initialVelocityX:i,initialVelocityY:l}=this.getOptions();this.context=t,this.x=s,this.y=a,this.w=Rt(5,20),this.h=Rt(5,20),this.radius=Rt(5,10),this.vx=typeof i=="number"?Rt(-i,i):Rt(i.min,i.max),this.vy=typeof l=="number"?Rt(-l,0):Rt(l.min,l.max),this.shape=bg(0,2),this.angle=yg(Rt(0,360)),this.angularSpin=Rt(-.2,.2),this.color=o[Math.floor(Math.random()*o.length)],this.rotateY=Rt(0,1),this.rotationDirection=Rt(0,1)?Pn.Positive:Pn.Negative}update(t){const{gravity:r,wind:s,friction:a,opacity:o,drawShape:i}=this.getOptions(),l=t/wg;this.x+=this.vx*l,this.y+=this.vy*l,this.vy+=r*l,this.vx+=s*l,this.vx*=a**l,this.vy*=a**l,this.rotateY>=1&&this.rotationDirection===Pn.Positive?this.rotationDirection=Pn.Negative:this.rotateY<=-1&&this.rotationDirection===Pn.Negative&&(this.rotationDirection=Pn.Positive);const c=.1*this.rotationDirection*l;if(this.rotateY+=c,this.angle+=this.angularSpin,this.context.save(),this.context.translate(this.x,this.y),this.context.rotate(this.angle),this.context.scale(1,this.rotateY),this.context.rotate(this.angle),this.context.beginPath(),this.context.fillStyle=this.color,this.context.strokeStyle=this.color,this.context.globalAlpha=o,this.context.lineCap="round",this.context.lineWidth=2,i&&typeof i=="function")i.call(this,this.context);else switch(this.shape){case Ss.Circle:{this.context.beginPath(),this.context.arc(0,0,this.radius,0,2*Math.PI),this.context.fill();break}case Ss.Square:{this.context.fillRect(-this.w/2,-this.h/2,this.w,this.h);break}case Ss.Strip:{this.context.fillRect(-this.w/6,-this.h/2,this.w/3,this.h);break}}this.context.closePath(),this.context.restore()}}class Ng{constructor(t,r){this.x=0,this.y=0,this.w=0,this.h=0,this.lastNumberOfPieces=0,this.tweenProgress=0,this.tweenFrom=0,this.particles=[],this.particlesGenerated=0,this.removeParticleAt=a=>{this.particles.splice(a,1)},this.getParticle=()=>{const a=Rt(this.x,this.w+this.x),o=Rt(this.y,this.h+this.y);return new jg(this.context,this.getOptions,a,o)},this.animate=a=>{const{canvas:o,context:i,particlesGenerated:l,lastNumberOfPieces:c}=this,{run:u,recycle:m,numberOfPieces:p,debug:f,tweenFunction:w,tweenDuration:x}=this.getOptions();if(!u)return!1;const j=this.particles.length,S=m?j:l;if(S<p){c!==p&&(this.tweenProgress=0,this.tweenFrom=S,this.lastNumberOfPieces=p),this.tweenProgress=Math.min(x,Math.max(0,this.tweenProgress+a));const y=w(this.tweenProgress,this.tweenFrom,p,x),g=Math.round(y-S);for(let v=0;v<g;v++)this.particles.push(this.getParticle());this.particlesGenerated+=g}f&&(i.font="12px sans-serif",i.fillStyle="#333",i.textAlign="right",i.fillText(`Particles: ${j}`,o.width-10,o.height-20));for(let y=this.particles.length-1;y>=0;y--){const g=this.particles[y];g.update(a),(g.y>o.height||g.y<-100||g.x>o.width+100||g.x<-100)&&(m&&S<=p?this.particles[y]=this.getParticle():this.removeParticleAt(y))}return j>0||S<p},this.canvas=t;const s=this.canvas.getContext("2d");if(!s)throw new Error("Could not get canvas context");this.context=s,this.getOptions=r}}const pc={width:typeof window<"u"?window.innerWidth:300,height:typeof window<"u"?window.innerHeight:200,numberOfPieces:200,friction:.99,wind:0,gravity:.1,initialVelocityX:4,initialVelocityY:10,colors:["#f44336","#e91e63","#9c27b0","#673ab7","#3f51b5","#2196f3","#03a9f4","#00bcd4","#009688","#4CAF50","#8BC34A","#CDDC39","#FFEB3B","#FFC107","#FF9800","#FF5722","#795548"],opacity:1,debug:!1,tweenFunction:vg.easeInOutQuad,tweenDuration:5e3,recycle:!0,run:!0};class kg{constructor(t,r){this.lastFrameTime=0,this.setOptionsWithDefaults=a=>{const o={confettiSource:{x:0,y:0,w:this.canvas.width,h:0}};this._options={...o,...pc,...a},Object.assign(this,a.confettiSource)},this.update=(a=0)=>{const{options:{run:o,onConfettiComplete:i,frameRate:l},canvas:c,context:u}=this,m=Math.min(a-this.lastFrameTime,50);if(l&&m<1e3/l){this.rafId=requestAnimationFrame(this.update);return}this.lastFrameTime=a-(l?m%l:0),o&&(u.fillStyle="white",u.clearRect(0,0,c.width,c.height)),this.generator.animate(m)?this.rafId=requestAnimationFrame(this.update):(i&&typeof i=="function"&&this.generator.particlesGenerated>0&&i.call(this,this),this._options.run=!1)},this.reset=()=>{this.generator&&this.generator.particlesGenerated>0&&(this.generator.particlesGenerated=0,this.generator.particles=[],this.generator.lastNumberOfPieces=0)},this.stop=()=>{this.options={run:!1},this.rafId&&(cancelAnimationFrame(this.rafId),this.rafId=void 0)},this.canvas=t;const s=this.canvas.getContext("2d");if(!s)throw new Error("Could not get canvas context");this.context=s,this.generator=new Ng(this.canvas,()=>this.options),this.options=r,this.update()}get options(){return this._options}set options(t){var a,o;const r=(a=this._options)==null?void 0:a.run,s=(o=this._options)==null?void 0:o.recycle;this.setOptionsWithDefaults(t),this.generator&&(Object.assign(this.generator,this.options.confettiSource),typeof t.recycle=="boolean"&&t.recycle&&s===!1&&(this.generator.lastNumberOfPieces=this.generator.particles.length)),typeof t.run=="boolean"&&t.run&&r===!1&&this.update()}}const Sg=yt.createRef();class xc extends yt.Component{constructor(t){super(t),this.canvas=yt.createRef(),this.canvas=t.canvasRef||Sg}componentDidMount(){if(this.canvas.current){const t=ci(this.props)[0];this.confetti=new kg(this.canvas.current,t)}}componentDidUpdate(){const t=ci(this.props)[0];this.confetti&&(this.confetti.options=t)}componentWillUnmount(){this.confetti&&this.confetti.stop(),this.confetti=void 0}render(){const[t,r]=ci(this.props),s={zIndex:2,position:"absolute",pointerEvents:"none",top:0,left:0,bottom:0,right:0,...r.style};return n.jsx("canvas",{width:t.width,height:t.height,ref:this.canvas,...r,style:s})}}xc.defaultProps={...pc};xc.displayName="ReactConfetti";function ci(e){const t={},r={},s={},a=[...Object.keys(pc),"confettiSource","drawShape","onConfettiComplete","frameRate"],o=["canvasRef"];for(const i in e){const l=e[i];a.includes(i)?t[i]=l:o.includes(i)?o[i]=l:s[i]=l}return[t,s,r]}const Lm=yt.forwardRef((e,t)=>n.jsx(xc,{canvasRef:t,...e}));function Md({question:e,category:t,onAnswer:r,run:s,timeLeft:a,usedLifelines:o,onUseLifeline:i,eliminatedOptions:l,audienceData:c,onBack:u,timeUp:m,onTimeUpBackToWheel:p,soundOn:f}){const[w,x]=d.useState(null),[j,S]=d.useState(!1),[y,g]=d.useState(!1),v=d.useRef(null),N=d.useRef(null),[C,R]=d.useState(null);d.useEffect(()=>(document.body.classList.add("hide-bottom-nav"),()=>{document.body.classList.remove("hide-bottom-nav")}),[]),d.useEffect(()=>{if(!j||!v.current)return;const b=v.current.getBoundingClientRect();R({x:b.left,y:b.top-300,w:b.width,h:8})},[j]);const E=b=>{if(j)return;x(b),S(!0);const k=b===e.correctIndex;Io(k?[50,30,50]:[200]),f&&Ln(k?"/sounds/correct.mp3":"/sounds/wrong.mp3",.7),setTimeout(()=>{r(k,null)},1500)},h=w===e.correctIndex;return n.jsx("div",{className:"fixed inset-0 bg-gradient-to-br from-gray-900 to-black text-white overflow-hidden",children:n.jsxs("div",{ref:N,className:"relative h-full overflow-y-auto px-5 pt-16 pb-[calc(env(safe-area-inset-bottom)+5.25rem)]",children:[n.jsx("div",{className:"mb-4",children:n.jsx("button",{onClick:()=>g(!0),className:"h-10 w-10 rounded-full border border-base-border grid place-items-center bg-white/5 hover:bg-white/10 transition",children:"←"})}),n.jsxs("div",{className:"text-center mb-6",children:[n.jsx("div",{className:`text-4xl font-black mb-2 ${a<=10?"text-red-400 animate-pulse":"text-white"}`,children:a}),n.jsx("div",{className:"w-full bg-white/20 rounded-full h-2",children:n.jsx("div",{className:`h-full rounded-full transition-all duration-1000 ${a<=10?"bg-red-400":"bg-blue-400"}`,style:{width:`${a/30*100}%`}})})]}),n.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[n.jsx("div",{className:"w-12 h-12 rounded-full flex items-center justify-center text-2xl",style:{backgroundColor:t.color},children:t.icon}),n.jsxs("div",{children:[n.jsx("div",{className:"text-lg font-bold",children:t.name}),n.jsxs("div",{className:"text-sm text-gray-400",children:["Question ",s.qIndex+1,"/3"]})]})]}),n.jsx("h2",{ref:v,className:"text-xl font-semibold mb-6 leading-relaxed",children:e.prompt}),n.jsx("div",{className:"space-y-3 mb-6",children:e.options.map((b,k)=>{const _=l.includes(k),P=w===k,F=k===e.correctIndex;let Q="bg-white/10 border-white/20",J="opacity-100";return _?J="opacity-30":j&&P?Q=F?"bg-green-500/30 border-green-400":"bg-red-500/30 border-red-400":j&&F?Q="bg-green-500/30 border-green-400":P&&(Q="bg-white/20 border-white/40"),n.jsx("button",{onClick:()=>E(k),disabled:j||_,className:`w-full p-4 rounded-xl border-2 text-left transition-all duration-300 ${Q} ${J} ${!j&&!_?"hover:bg-white/15 active:scale-98":""}`,children:n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsx("div",{className:"w-8 h-8 rounded-full bg-white/20 flex items-center justify-center font-bold text-sm",children:String.fromCharCode(65+k)}),n.jsx("span",{className:"font-medium flex-1",children:b}),c&&n.jsxs("span",{className:"text-xs text-base-muted",children:[Math.round(c[k]),"%"]})]})},k)})}),!j&&n.jsxs("div",{className:"flex gap-4 mb-8",children:[n.jsx("button",{onClick:()=>i("fifty"),disabled:o.fifty,className:`flex-1 p-4 rounded-2xl border-2 font-bold transition-all ${o.fifty?"bg-gray-700 border-gray-600 text-gray-400":"bg-purple-600 border-purple-400 text-white hover:bg-purple-500 active:scale-95"}`,children:"50:50"}),n.jsx("button",{onClick:()=>i("audience"),disabled:o.audience,className:`flex-1 p-4 rounded-2xl border-2 font-bold transition-all ${o.audience?"bg-gray-700 border-gray-600 text-gray-400":"bg-blue-600 border-blue-400 text-white hover:bg-blue-500 active:scale-95"}`,children:"👥 Ask"})]}),j&&n.jsxs("div",{className:"relative text-center",children:[h&&n.jsx("div",{className:"absolute inset-0 pointer-events-none",children:n.jsx(Lm,{recycle:!1,numberOfPieces:120,gravity:.9,tweenDuration:1800,confettiSource:C||{x:0,y:0,w:typeof window<"u"?window.innerWidth:320,h:1}})}),n.jsx("button",{onClick:()=>r(h,null,!0),className:"relative z-10 bg-white text-black font-black py-4 px-8 rounded-2xl text-lg hover:bg-gray-100 transition-all active:scale-95",children:"Continue"})]}),m&&n.jsx("div",{className:"fixed inset-0 z-50 bg-black/60 flex items-center justify-center px-6",children:n.jsxs("div",{className:"w-full max-w-sm rounded-2xl bg-base-card border border-base-border p-5 text-center",children:[n.jsx("div",{className:"text-lg font-bold mb-2",children:"Time's up"}),n.jsx("p",{className:"text-base-muted mb-5",children:"You ran out of time."}),n.jsx("button",{onClick:p,className:"mx-auto w-48 py-3 rounded-xl bg-brand-blue text-white font-semibold hover:bg-brand-blue/90 transition",children:"Back to Wheel"})]})}),y&&n.jsx("div",{className:"fixed inset-0 z-50 bg-black/60 flex items-center justify-center px-6",children:n.jsxs("div",{className:"w-full max-w-sm rounded-2xl bg-base-card border border-base-border p-5 text-center",children:[n.jsx("div",{className:"text-lg font-bold mb-2",children:"Want to quit?"}),n.jsx("p",{className:"text-base-muted mb-5",children:"You'll lose this question's progress."}),n.jsxs("div",{className:"flex gap-3",children:[n.jsx("button",{onClick:()=>g(!1),className:"flex-1 py-3 rounded-xl border border-base-border bg-white/5 hover:bg-white/10 transition",children:"No"}),n.jsx("button",{onClick:u,className:"flex-1 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-500 transition",children:"Yes"})]})]})})]})})}function Od({category:e,onComplete:t,isBonus:r=!1,soundOn:s=!0}){const[a,o]=d.useState(!1);return d.useEffect(()=>{document.body.classList.add("hide-bottom-nav"),o(!0),s&&Ln("/sounds/flush.mp3",.8),Io([50]);const i=setTimeout(t,2e3);return()=>{clearTimeout(i),document.body.classList.remove("hide-bottom-nav")}},[t,s]),r?n.jsxs("div",{className:"min-h-screen bg-gradient-to-b from-gray-900 via-purple-900/20 to-gray-900 flex flex-col items-center justify-center text-white relative overflow-hidden",children:[n.jsx("div",{className:"absolute inset-0",children:[...Array(20)].map((i,l)=>n.jsx("div",{className:"absolute w-2 h-2 bg-white/10 rounded-full animate-pulse",style:{left:`${Math.random()*100}%`,top:`${Math.random()*100}%`,animationDelay:`${Math.random()*3}s`,animationDuration:`${3+Math.random()*2}s`}},l))}),n.jsxs("div",{className:`relative z-10 text-center transform transition-all duration-700 ${a?"scale-100 opacity-100":"scale-50 opacity-0"}`,children:[n.jsx("h2",{className:"text-4xl font-black mb-8 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent",children:"Bonus Round!"}),n.jsxs("div",{className:"relative",children:[n.jsx("div",{className:"w-32 h-32 bg-gradient-to-br from-yellow-400/30 to-orange-400/30 rounded-full relative backdrop-blur-xl border-2 border-yellow-400/50",children:n.jsx("span",{className:"absolute top-1/2 left-1/2 text-6xl animate-pulse",style:{transform:"translate(-46%, -50%)"},children:"⭐"})}),n.jsx("div",{className:"absolute inset-0 rounded-full bg-yellow-400/20 animate-ping"})]}),n.jsx("p",{className:"mt-6 text-lg text-white/80",children:"Get ready for a special challenge!"})]})]}):n.jsxs("div",{className:"min-h-screen bg-gradient-to-b from-gray-900 via-purple-900/20 to-gray-900 text-white flex items-center justify-center relative overflow-hidden",children:[n.jsx("style",{children:`
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
      `}),n.jsx("div",{className:"absolute inset-0 overflow-hidden",children:[...Array(8)].map((i,l)=>n.jsx("div",{className:"absolute w-4 h-4 rounded-full",style:{backgroundColor:`${e.color}40`,left:`${10+l*12}%`,animation:`float-up ${8+l*2}s linear infinite`,animationDelay:`${l*.5}s`}},l))}),n.jsxs("div",{className:"relative",style:{animation:a?"category-bounce 0.8s ease-out":"none"},children:[n.jsx("div",{className:"absolute -inset-20 rounded-full blur-3xl",style:{backgroundColor:`${e.color}20`}}),n.jsxs("div",{className:"relative w-96 h-96 rounded-full flex items-center justify-center shadow-2xl",style:{background:`linear-gradient(135deg, ${e.color}dd, ${e.color}99)`,boxShadow:`0 20px 60px ${e.color}40, inset 0 0 60px rgba(255,255,255,0.1)`},children:[n.jsx("div",{className:"absolute inset-4 rounded-full border-2 border-white/10"}),n.jsx("div",{className:"absolute inset-8 rounded-full border border-white/5"}),n.jsxs("div",{className:"relative z-10 text-center",children:[n.jsx("div",{className:"text-3xl font-black mb-4 text-white drop-shadow-lg",children:e.name}),n.jsx("div",{className:"w-24 h-24 bg-white/20 backdrop-blur rounded-2xl grid place-items-center mx-auto transform hover:scale-110 transition-transform",children:n.jsx("span",{className:"text-5xl filter drop-shadow-lg",children:e.icon})})]})]})]}),n.jsxs("div",{className:"absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-2",children:[n.jsx("div",{className:"w-2 h-2 rounded-full bg-white/30"}),n.jsx("div",{className:"w-2 h-2 rounded-full bg-white/60 animate-pulse"}),n.jsx("div",{className:"w-2 h-2 rounded-full bg-white/30"})]})]})}function Cg({onDone:e}){const[t,r]=d.useState([!1,!1,!1,!1]);return d.useEffect(()=>{const s=[setTimeout(()=>r([!0,!1,!1,!1]),100),setTimeout(()=>r([!0,!0,!1,!1]),300),setTimeout(()=>r([!0,!0,!0,!1]),500),setTimeout(()=>r([!0,!0,!0,!0]),700),setTimeout(e,2500)];return()=>s.forEach(clearTimeout)},[e]),n.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-emerald-600 via-green-600 to-teal-600 flex items-center justify-center text-white relative overflow-hidden",children:[n.jsx("style",{children:`
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
      `}),n.jsx("div",{className:"absolute inset-0",children:[...Array(30)].map((s,a)=>n.jsx("div",{className:"absolute text-4xl",style:{left:`${Math.random()*100}%`,animation:`confetti-fall ${3+Math.random()*2}s linear infinite`,animationDelay:`${Math.random()*2}s`},children:["🎉","🎊","✨","⭐","🌟"][Math.floor(Math.random()*5)]},a))}),n.jsxs("div",{className:"relative z-10 text-center",children:[n.jsx("div",{className:"flex justify-center gap-6 mb-8",children:[0,1,2].map(s=>n.jsx("div",{className:`transform transition-all duration-500 ${t[s]?"scale-100 opacity-100":"scale-0 opacity-0"}`,style:{animation:t[s]?"star-pop 0.6s ease-out":"none"},children:n.jsx("div",{className:"w-20 h-20 bg-white/20 backdrop-blur rounded-2xl flex items-center justify-center",children:n.jsx("span",{className:"text-4xl",children:"⭐"})})},s))}),n.jsxs("div",{className:`transform transition-all duration-700 ${t[3]?"scale-100 opacity-100":"scale-0 opacity-0"}`,children:[n.jsxs("h2",{className:"text-4xl font-black mb-2",children:[n.jsx("span",{style:{animation:"text-wave 1s ease-in-out infinite"},children:"Perfect"})," ",n.jsx("span",{style:{animation:"text-wave 1s ease-in-out 0.1s infinite"},children:"Streak!"})]}),n.jsx("p",{className:"text-xl opacity-90",children:"3 correct in a row!"}),n.jsxs("div",{className:"mt-6 flex justify-center gap-4 text-3xl",children:[n.jsx("span",{className:"animate-bounce",style:{animationDelay:"0s"},children:"🎯"}),n.jsx("span",{className:"animate-bounce",style:{animationDelay:"0.1s"},children:"💯"}),n.jsx("span",{className:"animate-bounce",style:{animationDelay:"0.2s"},children:"🔥"})]})]})]})]})}function Eg({onSelect:e}){const[t,r]=d.useState(null);return n.jsxs("div",{className:"min-h-screen bg-gradient-to-b from-gray-900 via-purple-900/20 to-gray-900 text-white",children:[n.jsx("style",{children:`
        @keyframes character-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
      `}),n.jsxs("div",{className:"mx-auto max-w-md px-5 pt-16 pb-8",children:[n.jsxs("header",{className:"text-center mb-10",children:[n.jsxs("div",{className:"relative inline-block mb-6",children:[n.jsx("div",{className:"absolute inset-0 bg-yellow-400/30 rounded-full blur-2xl animate-pulse"}),n.jsx("div",{className:"relative text-6xl animate-bounce",children:"🏆"})]}),n.jsx("h1",{className:"text-3xl font-black mb-3 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent",children:"Perfect Round!"}),n.jsx("p",{className:"text-lg text-white/80",children:"Choose your reward character"})]}),n.jsx("div",{className:"grid grid-cols-2 gap-4",children:Ht.map((s,a)=>{const o=xg[Dn(s.name)],i=t===a;return n.jsxs("button",{onClick:()=>{Io([20]),Ln("/sounds/select.mp3",.5),e(Dn(s.name))},onMouseEnter:()=>r(a),onMouseLeave:()=>r(null),className:`
                  relative p-6 rounded-2xl backdrop-blur-xl
                  bg-white/10 border border-white/20
                  transform transition-all duration-300
                  hover:scale-105 hover:bg-white/15 active:scale-95
                  ${i?"shadow-2xl":"shadow-lg"}
                `,style:{animation:i?"character-float 2s ease-in-out infinite":"none",boxShadow:i?`0 10px 40px ${s.color}40`:""},children:[i&&n.jsx("div",{className:"absolute inset-0 rounded-2xl opacity-30",style:{background:"linear-gradient(105deg, transparent 40%, white 50%, transparent 60%)",animation:"shimmer 1s ease-out"}}),n.jsx("div",{className:"w-16 h-16 mx-auto mb-3 rounded-xl flex items-center justify-center",style:{background:`linear-gradient(135deg, ${s.color}40, ${s.color}20)`},children:n.jsx("span",{className:"text-3xl",children:s.icon})}),n.jsx("div",{className:"font-bold text-base mb-1",children:o}),n.jsx("div",{className:"text-xs text-white/60",children:s.name}),n.jsx("div",{className:"absolute top-2 right-2",children:n.jsx("span",{className:"text-xs",children:"🔓"})})]},Dn(s.name))})}),n.jsx("p",{className:"text-center text-xs text-white/40 mt-6",children:"Tap to unlock and play bonus round!"})]})]})}function Tg({stats:e,onPlayAgain:t,onExit:r,soundOn:s=!0}){const[a,o]=d.useState([!1,!1,!1,!1]),i=e||{correctAnswers:0,totalQuestions:3,coinsEarned:0,xpEarned:0,perfectRound:!1,characterUnlocked:null,bonusCorrect:!1},l=Math.round(i.correctAnswers/i.totalQuestions*100),c=i.perfectRound;return d.useEffect(()=>{document.body.classList.add("hide-bottom-nav"),s&&Ln(c?"/sounds/win.mp3":"/sounds/complete.mp3",.7);const u=[setTimeout(()=>o([!0,!1,!1,!1]),200),setTimeout(()=>o([!0,!0,!1,!1]),500),setTimeout(()=>o([!0,!0,!0,!1]),800),setTimeout(()=>o([!0,!0,!0,!0]),1100)];return()=>{u.forEach(clearTimeout),document.body.classList.remove("hide-bottom-nav")}},[s,c]),n.jsxs("div",{className:"min-h-screen bg-gradient-to-b from-gray-900 via-purple-900/20 to-gray-900 text-white relative overflow-hidden",children:[n.jsx("style",{children:`
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
      `}),c&&n.jsx("div",{className:"absolute inset-0",children:[...Array(20)].map((u,m)=>n.jsx("div",{className:"absolute text-2xl",style:{left:`${Math.random()*100}%`,animation:`star-rain ${5+Math.random()*3}s linear infinite`,animationDelay:`${Math.random()*3}s`},children:["⭐","✨","🌟"][Math.floor(Math.random()*3)]},m))}),n.jsxs("div",{className:"relative z-10 max-w-md mx-auto px-5 pt-16 pb-8",children:[n.jsxs("div",{className:`text-center mb-8 transform transition-all duration-700 ${a[0]?"translate-y-0 opacity-100":"translate-y-10 opacity-0"}`,children:[n.jsx("div",{className:"text-6xl mb-4",children:c?"🏆":l>=66?"⭐":"✅"}),n.jsx("h1",{className:"text-3xl font-black mb-2 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent",children:c?"Perfect Game!":l>=66?"Great Job!":"Good Try!"}),n.jsx("p",{className:"text-lg text-white/70",children:"Round Complete"})]}),n.jsxs("div",{className:"space-y-4 mb-8",children:[n.jsxs("div",{className:`bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 transform transition-all duration-700 ${a[1]?"translate-y-0 opacity-100":"translate-y-10 opacity-0"}`,children:[n.jsxs("div",{className:"flex justify-between items-center mb-4",children:[n.jsx("span",{className:"text-white/60",children:"Score"}),n.jsxs("span",{className:"text-2xl font-bold",children:[i.correctAnswers,"/",i.totalQuestions]})]}),n.jsx("div",{className:"h-3 bg-white/20 rounded-full overflow-hidden",children:n.jsx("div",{className:"h-full bg-gradient-to-r from-green-400 to-emerald-500 transition-all duration-1000",style:{width:`${a[1]?l:0}%`}})}),n.jsxs("div",{className:"text-right text-sm text-white/60 mt-2",children:[l,"% Accuracy"]})]}),n.jsxs("div",{className:`bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 transform transition-all duration-700 ${a[2]?"translate-y-0 opacity-100":"translate-y-10 opacity-0"}`,children:[n.jsx("div",{className:"text-white/60 mb-4",children:"Rewards Earned"}),n.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[n.jsxs("div",{className:"text-center",children:[n.jsx("div",{className:"text-3xl mb-2",children:"🪙"}),n.jsxs("div",{className:"text-2xl font-bold text-yellow-400",children:["+",i.coinsEarned]}),n.jsx("div",{className:"text-xs text-white/60",children:"Coins"})]}),n.jsxs("div",{className:"text-center",children:[n.jsx("div",{className:"text-3xl mb-2",children:"⚡"}),n.jsxs("div",{className:"text-2xl font-bold text-blue-400",children:["+",i.xpEarned]}),n.jsx("div",{className:"text-xs text-white/60",children:"XP"})]})]})]}),i.characterUnlocked&&n.jsx("div",{className:`bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-xl rounded-2xl p-6 border border-purple-400/30 transform transition-all duration-700 ${a[2]?"translate-y-0 opacity-100":"translate-y-10 opacity-0"}`,children:n.jsxs("div",{className:"text-center",children:[n.jsx("div",{className:"text-4xl mb-2",children:i.characterUnlocked.icon}),n.jsx("div",{className:"text-lg font-bold text-purple-300",children:"Character Unlocked!"}),n.jsx("div",{className:"text-sm text-white/60",children:i.characterUnlocked.name})]})})]}),n.jsxs("div",{className:`space-y-3 transform transition-all duration-700 ${a[3]?"translate-y-0 opacity-100":"translate-y-10 opacity-0"}`,children:[n.jsx("button",{onClick:t,className:"w-full py-3 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold text-lg shadow-xl hover:scale-105 active:scale-95 transition-transform -mt-4",children:"Play Again"}),n.jsx("button",{onClick:r,className:"w-full py-3 rounded-2xl bg-white/10 backdrop-blur border border-white/20 text-white font-bold text-lg hover:bg-white/20 active:scale-95 transition-all",children:"Back to Games"})]})]})]})}function Pg({onBack:e}){const{coins:t,xp:r,level:s,ownedCharacters:a,soundOn:o,unlockCharacter:i,setSoundOn:l}=Ao(),[c,u]=d.useState("wheel"),[m,p]=d.useState({qIndex:0,progress:[!1,!1,!1],lifelines:{fifty:!1,audience:!1}}),[f,w]=d.useState([]),[x,j]=d.useState(null),[S,y]=d.useState(null),[g,v]=d.useState(30),[N,C]=d.useState([]),[R,E]=d.useState(null),[h,b]=d.useState(null),[k,_]=d.useState(!1),[P,F]=d.useState(0),[Q,J]=d.useState(!1),[H,q]=d.useState(0),[O,I]=d.useState("none"),[D,L]=d.useState(!1),[T,z]=d.useState(null),[B,W]=d.useState(null),[$,Z]=d.useState(!1),[U,M]=d.useState(null),[ee,G]=d.useState(-1),[K,X]=d.useState(0),[V,Y]=d.useState(null),[A,te]=d.useState(null),[se,le]=d.useState(!1),[de,ve]=d.useState(null),[Se,mt]=d.useState(-1),[we,Ge]=d.useState([!1,!1,!1]),[Ce,$e]=d.useState(!1),[ft,lt]=d.useState(!1),[Ee,Be]=d.useState(null),tt=d.useRef(null),Pt=d.useRef(null),Ae=d.useRef(null),Te=d.useRef(null),Ue=d.useRef(null),on=d.useMemo(()=>{var ne;return((ne=window.matchMedia)==null?void 0:ne.call(window,"(prefers-reduced-motion: reduce)").matches)||!1},[]);d.useEffect(()=>(Xr(),Vr(),window.history.pushState({mode:"classic"},"",window.location.href),()=>Jr()),[]),d.useEffect(()=>{const ne=ce=>{ce.preventDefault(),e()};return window.addEventListener("popstate",ne),()=>window.removeEventListener("popstate",ne)},[e]),d.useEffect(()=>(c==="question"&&g>0&&!ft?Ae.current=setTimeout(()=>{v(ne=>{const ce=ne-1;return ce===10&&o&&Ln("/sounds/tick.mp3",.8),ce})},1e3):c==="question"&&g===0&&_(!0),()=>{Ae.current&&clearTimeout(Ae.current)}),[c,g,o,ft]),d.useEffect(()=>{if(c!=="wheel"||V==null)return;G(V),o&&Ln("/sounds/progress.mp3",.6),mt(V);const ne=setTimeout(()=>mt(-1),900),ce=setTimeout(()=>G(-1),900),xe=setTimeout(()=>{de&&(de==="streakFlash"?u("streakFlash"):de==="characterPicker"?u("characterPicker"):de==="summary"?u("summary"):me(),ve(null)),Y(null)},1800);return()=>{clearTimeout(ne),clearTimeout(ce),clearTimeout(xe)}},[c,V,de,o]),d.useEffect(()=>{c!=="wheel"||!Ce||(X(ne=>ne+1),$e(!1))},[c,Ce]),d.useEffect(()=>{if(c!=="wheel"||A==null)return;const ce=setTimeout(()=>{Y(A),te(null)},se?1800:0);return()=>clearTimeout(ce)},[c,A,se]);const Xr=async()=>{try{const ce=await(await fetch("/data/quiz_questions_bank.csv")).text(),{data:xe}=hr.parse(ce,{header:!0,skipEmptyLines:!0,transformHeader:fe=>fe.trim().toLowerCase()}),pe=xe.map((fe,Me)=>{var Vs;const at=[fe.option1,fe.option2,fe.option3,fe.option4].map(Lo=>(Lo||"").trim()).filter(Boolean);if(at.length<4)return null;let Xn={a:0,b:1,c:2,d:3}[(Vs=fe.answer)==null?void 0:Vs.toLowerCase()];return Xn===void 0&&(Xn=at.findIndex(Lo=>Lo.toLowerCase()===(fe.answer||"").toLowerCase())),Xn===-1&&(Xn=0),{id:fe.id||`q_${Me}`,prompt:(fe.question||"").trim(),options:at,correctIndex:Xn,category:(fe.category||fe.subject||"general knowledge").trim(),difficulty:(fe.difficulty||"medium").toLowerCase(),explanation:(fe.explanation||"").trim()}}).filter(Boolean);w(pe)}catch(ne){console.error("Failed to load questions:",ne),w([])}},Vr=()=>{const ne=new Audio("/sounds/spin.mp3");ne.loop=!0,ne.volume=.6,Te.current=ne},Jr=()=>{if(Ae.current&&clearTimeout(Ae.current),Ue.current&&(clearTimeout(Ue.current),Ue.current=null),Te.current){try{Te.current.pause()}catch{}Te.current=null}},ae=()=>{p({qIndex:0,progress:[!1,!1,!1],lifelines:{fifty:!1,audience:!1}}),Ge([!1,!1,!1]),j(null),y(null),b(null),C([]),E(null),_(!1),X(0),F(0),J(!1),W(null)},me=()=>{e(),ae()},Ne=()=>{if(o&&Te.current){try{Te.current.currentTime=0,Te.current.play()}catch{}Ue.current&&clearTimeout(Ue.current),Ue.current=setTimeout(()=>{ye()},2e3)}},ye=()=>{if(Ue.current&&(clearTimeout(Ue.current),Ue.current=null),Te.current)try{Te.current.pause(),Te.current.currentTime=0}catch{}},We=()=>{if(D)return;z(null),Z(!1),M(null),L(!0),Ne();const ne=Math.floor(Math.random()*Ht.length),ce=Ht[ne],xe=zd(H),pe=ne*rr+rr/2,fe=(Math.random()-.5)*(rr*.3),Me=360-pe+fe;let at=zd(Me-xe);const en=Nn.FULL_TURNS*360+at,Xn=H+en+Nn.OVERSHOOT;I(`transform ${on?1e3:Nn.DURATION}ms cubic-bezier(0.25, 0.46, 0.45, 0.94)`),q(Xn),Io([20,50,20]),setTimeout(()=>{I(`transform ${on?200:Nn.SETTLE_DURATION}ms cubic-bezier(0.68, -0.55, 0.265, 1.55)`),q(Vs=>Vs-Nn.OVERSHOOT)},on?1e3:Nn.DURATION),setTimeout(()=>{ye(),L(!1),z({cat:ce,index:ne}),y(ce),M(ce.color),Z(!0),setTimeout(()=>{Z(!1),u("interstitial")},1500),setTimeout(()=>M(null),1e3)},(on?1e3:Nn.DURATION)+(on?200:Nn.SETTLE_DURATION)+100)},je=()=>{const ne=f.filter(xe=>{const pe=xe.category.toLowerCase(),fe=S.name.toLowerCase();return pe.includes(fe)||fe.includes(pe)});let ce;ne.length>0?ce=ne[Math.floor(Math.random()*ne.length)]:ce=f[Math.floor(Math.random()*f.length)],ce?(j(ce),v(30),C([]),E(null),_(!1),lt(!1),u("question")):u("wheel")},He=(ne,ce,xe=!1)=>{if(!xe){lt(!0);return}const pe=m.qIndex,fe=[...m.progress];fe[pe]=!0;const Me=[...we];if(Me[pe]=!!ne,Ge(Me),p(at=>({...at,progress:fe,qIndex:at.qIndex+1})),ne&&(F(at=>at+5),setTimeout(()=>{var en;const at=(en=Pt.current)==null?void 0:en.getBoundingClientRect();at?Be({startRect:at,targetRef:tt,count:5,amount:5}):(ie.addCoins(5,"Classic Mode - Correct Answer"),ie.addXP(1),window.dispatchEvent(new Event("coinsUpdated")),Ln("/sounds/coin.mp3",.7))},100)),te(pe),le(!!ne),pe===2)if(Me.every(Boolean))ve("streakFlash");else{const en={correctAnswers:Me.filter(Boolean).length,totalQuestions:3,coinsEarned:P,xpEarned:Me.filter(Boolean).length,perfectRound:!1,characterUnlocked:null,bonusCorrect:!1};W(en),ve("summary")}else ve(null);u("wheel")},Pe=ne=>{if(!(m.lifelines[ne]||!x)){if(p(ce=>({...ce,lifelines:{...ce.lifelines,[ne]:!0}})),ne==="fifty"){const xe=x.options.map((pe,fe)=>fe).filter(pe=>pe!==x.correctIndex).slice(0,2);C(xe)}else if(ne==="audience"){const ce=40+Math.random()*25;let xe=100-ce;const pe=[0,0,0,0];pe[x.correctIndex]=Math.round(ce);const fe=[0,1,2,3].filter(Me=>Me!==x.correctIndex);fe.forEach((Me,at)=>{if(at===fe.length-1)pe[Me]=xe;else{const en=Math.floor(Math.random()*xe);pe[Me]=en,xe-=en}}),E(pe)}}},Xe=ne=>{b(ne),u("bonusInterstitial")},ue=ne=>{J(ne),ne&&h&&(i(h),F(xe=>xe+10));const ce={correctAnswers:we.filter(Boolean).length+(ne?1:0),totalQuestions:4,coinsEarned:P+(ne?10:0),xpEarned:we.filter(Boolean).length+(ne?2:0),perfectRound:we.every(Boolean),characterUnlocked:h?Ht.find(xe=>Dn(xe.name)===h):null,bonusCorrect:ne};W(ce),u("summary")},he=()=>{u("wheel")};switch(c){case"wheel":return n.jsxs(n.Fragment,{children:[Ee&&n.jsx(Gn,{startRect:Ee.startRect,targetRef:Ee.targetRef,count:Ee.count,onDone:()=>{ie.addCoins(Ee.amount,"Classic Mode - Correct Answer"),ie.addXP(1),window.dispatchEvent(new Event("coinsUpdated")),Ln("/sounds/coin.mp3",.7),Be(null)}}),n.jsx(gg,{run:m,coins:t,xp:r,level:s,ownedCharacters:a,onSpin:We,onBack:e,spinning:D,angle:H,transition:O,result:T,showCallout:$,glowColor:U,soundOn:o,setSoundOn:l,showSparkle:ee,pulseIdx:Se,coinBurstTick:K,pendingProgressIdx:V,lastAnswerWasCorrect:se,nextProgressIdx:A,coinPillRef:tt,wheelRef:Pt})]});case"interstitial":return n.jsx(Od,{category:S,onComplete:je,soundOn:o});case"streakFlash":return n.jsx(Cg,{onDone:()=>u("characterPicker")});case"question":return n.jsx(Md,{question:x,category:S,onAnswer:He,run:m,timeLeft:g,usedLifelines:m.lifelines,onUseLifeline:Pe,eliminatedOptions:N,audienceData:R,onBack:he,timeUp:k,onTimeUpBackToWheel:()=>{_(!1),u("wheel")},soundOn:o});case"characterPicker":return n.jsx(Eg,{onSelect:Xe});case"bonusInterstitial":return n.jsx(Od,{category:Ht.find(ne=>Dn(ne.name)===h),onComplete:()=>u("bonusQuestion"),isBonus:!0,soundOn:o});case"bonusQuestion":if(!x){const ne=Ht.find(ce=>Dn(ce.name)===h);if(ne&&f.length>0){const ce=f.filter(pe=>{const fe=pe.category.toLowerCase(),Me=ne.name.toLowerCase();return fe.includes(Me)||Me.includes(fe)}),xe=ce.length>0?ce[Math.floor(Math.random()*ce.length)]:f[Math.floor(Math.random()*f.length)];j(xe),v(30)}return n.jsx("div",{className:"min-h-screen bg-base-bg text-base-text flex items-center justify-center",children:n.jsx("div",{className:"text-lg",children:"Loading bonus question..."})})}return n.jsx(Md,{question:x,category:Ht.find(ne=>Dn(ne.name)===h)||Ht[0],onAnswer:ue,run:{...m,lifelines:{fifty:!0,audience:!0}},timeLeft:g,usedLifelines:{fifty:!0,audience:!0},onUseLifeline:()=>{},eliminatedOptions:[],audienceData:null,onBack:e,soundOn:o});case"summary":return n.jsx(Tg,{stats:B,onPlayAgain:()=>{ae(),u("wheel")},onExit:e,soundOn:o});default:return n.jsx("div",{className:"min-h-screen bg-base-bg text-white flex items-center justify-center",children:n.jsxs("div",{className:"text-center",children:[n.jsx("div",{className:"text-2xl mb-4",children:"Unknown State"}),n.jsx("button",{onClick:()=>u("wheel"),className:"px-6 py-3 bg-blue-600 rounded-lg",children:"Back to Wheel"})]})})}}function Rg({lives:e,maxLives:t=3}){const[r,s]=d.useState(null),[a,o]=d.useState(e);return d.useEffect(()=>{e<a?(s(a-1),setTimeout(()=>s(null),600)):e>a&&(s(e-1),setTimeout(()=>s(null),1e3)),o(e)},[e,a]),n.jsxs("div",{className:"relative",children:[n.jsx("style",{jsx:!0,children:`
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
      `}),n.jsxs("div",{className:"flex items-center gap-3 px-5 py-1.5 bg-gradient-to-r from-red-500/20 to-pink-500/20 rounded-full backdrop-blur-md border border-white/10 shadow-xl",children:[n.jsx("div",{className:"flex items-center gap-1.5",children:[...Array(t)].map((i,l)=>n.jsx("div",{className:`relative transition-all duration-300 ${l<e?"scale-100":"scale-75"}`,children:n.jsxs("div",{className:"relative",children:[l<e?n.jsxs("div",{className:`relative ${l===r&&e>a?"heart-gained":""}`,children:[n.jsx("span",{className:`text-3xl drop-shadow-lg ${l===e-1?"heart-beat":""}`,children:"❤️"}),l===e-1&&e===1&&n.jsx("div",{className:"absolute inset-0 rounded-full heart-glow"})]}):n.jsx("div",{className:`relative ${l===r&&e<a?"heart-lost":""}`,children:n.jsx("span",{className:"text-3xl opacity-20 grayscale",children:"💔"})}),l===r&&e>a&&n.jsxs("div",{className:"absolute inset-0 flex items-center justify-center pointer-events-none",children:[n.jsx("div",{className:"absolute w-10 h-10 bg-green-400 rounded-full animate-ping opacity-30"}),n.jsx("span",{className:"absolute text-sm font-bold text-green-400 animate-bounce",children:"+1"})]})]})},l))}),n.jsx("div",{className:"pr-1",children:n.jsxs("div",{className:`text-sm font-bold ${e===1?"text-red-400 animate-pulse":e===t?"text-green-400":"text-white"}`,children:[e,"/",t]})})]}),e===1&&n.jsx("div",{className:"absolute -bottom-10 left-1/2 -translate-x-1/2 whitespace-nowrap",children:n.jsx("div",{className:"px-3 py-1 bg-red-500/20 border border-red-500/50 rounded-full backdrop-blur-sm",children:n.jsx("span",{className:"text-xs font-medium text-red-400 animate-pulse",children:"Last life! Be careful! ⚠️"})})})]})}function _g({question:e,onAnswer:t,lives:r,questionCount:s,correctStreak:a,totalScore:o,currentDifficulty:i,timeLeft:l,showFeedback:c,lastAnswerCorrect:u,checkpoint:m,onBack:p,soundOn:f,setSoundOn:w}){const[x,j]=d.useState(null),[S,y]=d.useState(!1),[g,v]=d.useState(!1),N={EASY:{emoji:"🌱",color:"from-emerald-400 to-green-500",accentGradient:"from-emerald-500/20 to-green-600/20",label:"Sprout",motivationalText:"Great start! Keep growing! 🌱"},MEDIUM:{emoji:"🌻",color:"from-yellow-400 to-amber-500",accentGradient:"from-yellow-500/20 to-amber-600/20",label:"Blooming",motivationalText:"You're blooming beautifully! 🌻"},HARD:{emoji:"🔥",color:"from-orange-400 to-red-500",accentGradient:"from-orange-500/20 to-red-600/20",label:"On Fire",motivationalText:"You're on fire! Keep it up! 🔥"},EXPERT:{emoji:"⚡",color:"from-purple-400 to-indigo-500",accentGradient:"from-purple-500/20 to-indigo-600/20",label:"Lightning",motivationalText:"Lightning fast thinking! ⚡"},LEGENDARY:{emoji:"👑",color:"from-pink-400 to-purple-600",accentGradient:"from-pink-500/20 to-purple-600/20",label:"Legendary",motivationalText:"Legendary performance! 👑"}},C=N[i];d.useEffect(()=>{a>0&&a%5===0&&c&&u&&(y(!0),setTimeout(()=>y(!1),3e3))},[a,c,u]),d.useEffect(()=>{c&&u&&(v(!0),setTimeout(()=>v(!1),1e3))},[c,u]);const R=E=>{c||(j(E),t(E))};return d.useEffect(()=>(document.body.classList.add("hide-bottom-nav"),()=>{document.body.classList.remove("hide-bottom-nav")}),[]),n.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-black text-white relative overflow-hidden",children:[n.jsx("style",{jsx:!0,children:`
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
      `}),n.jsxs("div",{className:"fixed inset-0 pointer-events-none",children:[n.jsx("div",{className:"absolute top-20 left-10 text-[100px] opacity-10 float-animation",children:C.emoji}),n.jsx("div",{className:"absolute top-40 right-20 text-[80px] opacity-10 float-animation",style:{animationDelay:"1s"},children:"⭐"}),n.jsx("div",{className:"absolute bottom-40 left-20 text-[90px] opacity-10 float-animation",style:{animationDelay:"2s"},children:"🎯"}),n.jsx("div",{className:"absolute bottom-20 right-10 text-[70px] opacity-10 float-animation",style:{animationDelay:"3s"},children:"🏆"})]}),n.jsxs("div",{className:"relative z-10 px-4 pt-[calc(env(safe-area-inset-top)+2rem)]",children:[n.jsxs("div",{className:"flex justify-between items-center mb-8 slide-in",children:[n.jsx("button",{onClick:p,className:"w-12 h-12 glass-card rounded-2xl shadow-lg flex items-center justify-center hover:scale-105 transition-transform",children:n.jsx("span",{className:"text-xl",children:"◀️"})}),n.jsx(Rg,{lives:r}),n.jsx("button",{onClick:()=>w(!f),className:"w-12 h-12 glass-card rounded-2xl shadow-lg flex items-center justify-center hover:scale-105 transition-transform",children:n.jsx("span",{className:"text-xl",children:f?"🔊":"🔇"})})]}),n.jsx("div",{className:`glass-card rounded-3xl p-2 shadow-xl mb-2 mt-12 slide-in bg-gradient-to-r ${C.accentGradient}`,style:{animationDelay:"0.1s"},children:n.jsxs("div",{className:"grid grid-cols-3 gap-3",children:[n.jsxs("div",{className:"text-center",children:[n.jsx("div",{className:`text-3xl font-black bg-gradient-to-r ${C.color} bg-clip-text text-transparent ${g?"score-pulse":""}`,children:o}),n.jsx("div",{className:"text-xs text-white/60 font-medium mt-1",children:"Points"}),c&&u&&n.jsx("div",{className:"absolute -top-2 left-1/2 -translate-x-1/2",children:n.jsxs("span",{className:"text-green-400 font-bold text-sm coin-animation",children:["+",N[i]?i==="EASY"?10:i==="MEDIUM"?20:i==="HARD"?30:i==="EXPERT"?50:100:10]})})]}),n.jsxs("div",{className:"text-center",children:[n.jsx("div",{className:"text-3xl font-black text-white",children:s}),n.jsx("div",{className:"text-xs text-white/60 font-medium mt-1",children:"Questions"})]}),n.jsxs("div",{className:"text-center relative",children:[n.jsx("div",{className:`text-3xl font-black text-orange-400 ${a>0?"streak-flame":""}`,children:a}),n.jsx("div",{className:"text-xs text-white/60 font-medium mt-1",children:"Streak 🔥"})]})]})}),n.jsxs("div",{className:"flex justify-between items-center mb-1 slide-in",style:{animationDelay:"0.2s"},children:[n.jsx("div",{className:`px-4 py-3 rounded-full bg-gradient-to-r ${C.color} text-white shadow-lg`,children:n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx("span",{className:"text-2xl",children:C.emoji}),n.jsxs("div",{children:[n.jsx("div",{className:"font-bold text-sm",children:C.label}),n.jsxs("div",{className:"text-[10px] opacity-90",children:["Level ",s+1]})]})]})}),n.jsx("div",{className:"relative",children:n.jsxs("div",{className:"w-20 h-20 glass-card rounded-full shadow-xl flex items-center justify-center",children:[n.jsxs("svg",{className:"absolute inset-0 w-full h-full",children:[n.jsx("circle",{cx:"40",cy:"40",r:"35",fill:"none",stroke:"rgba(255, 255, 255, 0.1)",strokeWidth:"6",className:"progress-ring"}),n.jsx("circle",{cx:"40",cy:"40",r:"35",fill:"none",stroke:l<=5?"#ef4444":l<=10?"#f59e0b":"#10b981",strokeWidth:"6",strokeDasharray:`${l/30*220} 220`,strokeLinecap:"round",className:"progress-ring transition-all duration-1000"})]}),n.jsx("div",{className:"relative z-10",children:n.jsx("span",{className:`text-2xl font-black ${l<=5?"text-red-400 animate-pulse":l<=10?"text-amber-400":"text-white"}`,children:l})})]})})]})]}),n.jsxs("div",{className:"px-4 slide-in",style:{animationDelay:"0.3s"},children:[n.jsxs("div",{className:"glass-card rounded-3xl shadow-xl p-6 mb-6 border border-white/10",children:[n.jsx("div",{className:"text-center mb-2",children:n.jsxs("span",{className:"text-xs font-bold text-white/40 uppercase tracking-wider",children:["Question ",s+1]})}),n.jsx("h2",{className:"text-xl font-bold text-center text-white leading-relaxed",children:e.prompt})]}),n.jsx("div",{className:"space-y-3",children:e.options.map((E,h)=>{const b=["A","B","C","D"],k=["from-blue-400 to-blue-500","from-green-400 to-green-500","from-yellow-400 to-yellow-500","from-purple-400 to-purple-500"];let _="glass-card border border-white/10",P="";return c&&(h===e.correctIndex?(_="bg-gradient-to-r from-green-500/20 to-emerald-500/20 border-2 border-green-400",P="correct-bounce"):x===h&&!u&&(_="bg-gradient-to-r from-red-500/20 to-pink-500/20 border-2 border-red-400",P="wrong-shake")),n.jsx("button",{onClick:()=>R(h),disabled:c,className:`w-full p-4 rounded-2xl shadow-lg transition-all ${_} ${P} 
                  ${c?"":"hover:scale-[1.02] active:scale-[0.98] hover:bg-white/10"} slide-in`,style:{animationDelay:`${.4+h*.05}s`},children:n.jsxs("div",{className:"flex items-center gap-4",children:[n.jsx("div",{className:`w-12 h-12 rounded-xl bg-gradient-to-br ${k[h]} 
                    text-white font-bold text-xl flex items-center justify-center shadow-md`,children:b[h]}),n.jsx("span",{className:"flex-1 text-left font-medium text-white",children:E}),c&&h===e.correctIndex&&n.jsx("span",{className:"text-2xl",children:"✅"}),c&&x===h&&!u&&n.jsx("span",{className:"text-2xl",children:"❌"})]})},h)})}),c&&n.jsx("div",{className:"mt-6 text-center slide-in",children:n.jsx("p",{className:"text-sm font-medium text-white/70",children:u?C.motivationalText:"No worries! Keep trying! 💪"})}),m>0&&n.jsx("div",{className:"mt-4 flex justify-center slide-in",style:{animationDelay:"0.6s"},children:n.jsx("div",{className:"glass-card rounded-full px-4 py-2 shadow-lg border border-white/10",children:n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx("span",{className:"text-xl",children:"🏁"}),n.jsxs("span",{className:"text-sm font-bold text-white/80",children:["Checkpoint: Question ",m]})]})})})]}),S&&n.jsx("div",{className:"fixed inset-0 pointer-events-none flex items-center justify-center z-50",children:n.jsx("div",{className:"bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-8 py-6 rounded-3xl shadow-2xl animate-bounce",children:n.jsxs("div",{className:"text-center",children:[n.jsx("div",{className:"text-5xl mb-3",children:"🎉"}),n.jsx("div",{className:"text-2xl font-black mb-2",children:"AMAZING STREAK!"}),n.jsx("div",{className:"text-lg",children:"You earned a life back! ❤️"})]})})})]})}function Ag({score:e,questionsAnswered:t,highScore:r,checkpoint:s,onRestart:a,onContinue:o,onBack:i}){const l=e>r,[c,u]=d.useState(!1),[m,p]=d.useState(0),[f,w]=d.useState(!1),x=d.useRef(null);d.useEffect(()=>{const v=e/60;let N=0;const C=setInterval(()=>{N+=v,N>=e?(p(e),clearInterval(C),l&&(u(!0),setTimeout(()=>u(!1),5e3))):p(Math.floor(N))},2e3/60);return setTimeout(()=>w(!0),2200),()=>clearInterval(C)},[e,l]),d.useEffect(()=>(document.body.classList.add("hide-bottom-nav"),()=>{document.body.classList.remove("hide-bottom-nav")}),[]);const S=(()=>t>=100?{emoji:"👑",title:"LEGENDARY!",subtitle:"You're a true Quiz Legend!",color:"from-purple-400 to-pink-500",stars:5}:t>=50?{emoji:"🏆",title:"CHAMPION!",subtitle:"Outstanding performance!",color:"from-yellow-400 to-amber-500",stars:5}:t>=30?{emoji:"💎",title:"EXPERT!",subtitle:"You're getting really good!",color:"from-blue-400 to-cyan-500",stars:4}:t>=20?{emoji:"⭐",title:"STAR PLAYER!",subtitle:"Keep up the great work!",color:"from-green-400 to-emerald-500",stars:3}:t>=10?{emoji:"🎯",title:"NICE TRY!",subtitle:"You're improving fast!",color:"from-orange-400 to-red-500",stars:2}:{emoji:"🌟",title:"GOOD START!",subtitle:"Every expert was once a beginner!",color:"from-indigo-400 to-purple-500",stars:1})();return n.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-black text-white relative overflow-hidden",children:[n.jsx("style",{jsx:!0,children:`
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
      `}),n.jsxs("div",{className:"absolute inset-0 overflow-hidden",children:[n.jsx("div",{className:"absolute top-20 left-10 text-[150px] opacity-5 float-animation",children:"🏆"}),n.jsx("div",{className:"absolute bottom-20 right-10 text-[120px] opacity-5 float-animation",style:{animationDelay:"1s"},children:"⭐"}),n.jsx("div",{className:"absolute top-40 right-20 text-[100px] opacity-5 float-animation",style:{animationDelay:"2s"},children:"🎯"})]}),c&&n.jsx("div",{className:"fixed inset-0 pointer-events-none z-50",children:[...Array(40)].map((y,g)=>n.jsx("div",{className:"absolute confetti-fall",style:{left:`${Math.random()*100}%`,animationDelay:`${Math.random()*3}s`,animationDuration:`${3+Math.random()*2}s`},children:n.jsx("span",{className:"text-3xl",children:["🎉","⭐","🎊","✨","🎈","💫","🌟"][Math.floor(Math.random()*7)]})},g))}),n.jsxs("div",{className:"relative z-10 flex flex-col items-center justify-center min-h-screen px-6 text-center",children:[n.jsxs("div",{className:"mb-8 slide-up",children:[n.jsx("h1",{className:"text-6xl font-black mb-4 bg-gradient-to-r from-red-400 to-pink-500 bg-clip-text text-transparent",children:"GAME OVER"}),l&&n.jsx("div",{className:"fade-in",style:{animationDelay:"1s"},children:n.jsx("div",{className:"inline-block px-6 py-3 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-bold shadow-2xl glow-text",children:n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsx("span",{className:"text-3xl",children:"🏆"}),n.jsx("span",{className:"text-xl",children:"NEW HIGH SCORE!"}),n.jsx("span",{className:"text-3xl",children:"🏆"})]})})})]}),f&&n.jsx("div",{className:"mb-8 slide-up",style:{animationDelay:"0.3s"},children:n.jsxs("div",{className:`glass-card rounded-3xl p-6 bg-gradient-to-r ${S.color} bg-opacity-20 border-2 border-white/20 shadow-2xl`,children:[n.jsx("div",{className:"text-6xl mb-3 bounce-animation",children:S.emoji}),n.jsx("h2",{className:"text-3xl font-black mb-2",children:S.title}),n.jsx("p",{className:"text-white/80 mb-4",children:S.subtitle}),n.jsx("div",{className:"flex justify-center gap-1",children:[...Array(5)].map((y,g)=>n.jsx("span",{className:`text-2xl ${g<S.stars?"star-pop":""}`,style:{animationDelay:`${2.5+g*.1}s`},children:g<S.stars?"⭐":"☆"},g))})]})}),n.jsxs("div",{className:"grid grid-cols-2 gap-4 mb-8 w-full max-w-md",children:[n.jsxs("div",{className:"glass-card rounded-2xl p-6 shadow-xl slide-up",style:{animationDelay:"0.4s"},children:[n.jsx("div",{className:"text-4xl mb-2",children:"🎯"}),n.jsx("div",{ref:x,className:`text-4xl font-black ${l?"text-yellow-400":"text-white"}`,children:m}),n.jsx("div",{className:"text-sm text-white/60 font-medium",children:"Points Earned"}),n.jsx("div",{className:"mt-3 pt-3 border-t border-white/10",children:n.jsxs("div",{className:"text-xs text-white/50",children:[t," questions"]})})]}),n.jsxs("div",{className:"glass-card rounded-2xl p-6 shadow-xl slide-up",style:{animationDelay:"0.5s"},children:[n.jsx("div",{className:"text-4xl mb-2",children:"📊"}),n.jsx("div",{className:"text-4xl font-black text-white",children:t}),n.jsx("div",{className:"text-sm text-white/60 font-medium",children:"Questions"}),n.jsx("div",{className:"mt-3 pt-3 border-t border-white/10",children:n.jsxs("div",{className:"text-xs text-white/50",children:["Best: ",Math.max(r,e)]})})]})]}),n.jsx("div",{className:"glass-card rounded-2xl px-6 py-4 mb-8 w-full max-w-md slide-up",style:{animationDelay:"0.6s"},children:n.jsx("p",{className:"text-white/80 font-medium",children:t>=50?"Incredible performance! You're a quiz master! 🌟":t>=20?"Great job! You're getting stronger! 💪":"Keep practicing! Every attempt makes you better! 🚀"})}),n.jsxs("div",{className:"space-y-3 w-full max-w-md",children:[s>0&&o&&n.jsx("button",{onClick:o,className:"w-full py-4 bg-gradient-to-r from-green-400 to-emerald-500 text-white rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all hover:scale-[1.02] active:scale-[0.98] slide-up",style:{animationDelay:"0.7s"},children:n.jsxs("div",{className:"flex items-center justify-center gap-3",children:[n.jsx("span",{className:"text-2xl",children:"🏁"}),n.jsxs("span",{children:["Continue from Question ",s]})]})}),n.jsx("button",{onClick:a,className:"w-full py-4 bg-gradient-to-r from-blue-400 to-indigo-500 text-white rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all hover:scale-[1.02] active:scale-[0.98] slide-up",style:{animationDelay:"0.8s"},children:n.jsxs("div",{className:"flex items-center justify-center gap-3",children:[n.jsx("span",{className:"text-2xl",children:"🎮"}),n.jsx("span",{children:"Play Again"})]})}),n.jsx("button",{onClick:i,className:"w-full py-4 glass-card text-white rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl transition-all hover:scale-[1.02] active:scale-[0.98] hover:bg-white/10 slide-up",style:{animationDelay:"0.9s"},children:n.jsxs("div",{className:"flex items-center justify-center gap-3",children:[n.jsx("span",{className:"text-2xl",children:"🏠"}),n.jsx("span",{children:"Back to Games"})]})})]})]})]})}const Fd={EASY:{min:0,max:9,timer:30,points:10},MEDIUM:{min:10,max:24,timer:25,points:20},HARD:{min:25,max:49,timer:20,points:30},EXPERT:{min:50,max:99,timer:15,points:50},LEGENDARY:{min:100,max:1/0,timer:10,points:100}};function Ig({onBack:e,isFromQuest:t}){const{coins:r,xp:s,level:a,soundOn:o,setSoundOn:i}=Ao(),[l,c]=d.useState("playing"),[u,m]=d.useState(3),[p,f]=d.useState(0),[w,x]=d.useState(0),[j,S]=d.useState(0),[y,g]=d.useState("EASY"),[v,N]=d.useState([]),[C,R]=d.useState(null),[E,h]=d.useState(30),[b,k]=d.useState(!1),[_,P]=d.useState(!1),[F,Q]=d.useState(0),[J,H]=d.useState(!1),q=d.useRef(null),O=d.useRef(new Set);d.useEffect(()=>(D(),Z(),window.history.pushState({mode:"survival"},"",window.location.href),()=>{q.current&&clearTimeout(q.current)}),[]),d.useEffect(()=>(l==="playing"&&C&&E>0&&!b&&(q.current=setTimeout(()=>{h(A=>A<=1?(W(),0):(A===6&&o&&V("/sounds/tick.mp3",.8),A-1))},1e3)),()=>{q.current&&clearTimeout(q.current)}),[l,C,E,b,o]),d.useEffect(()=>{const A=I(p);A!==y&&(g(A),o&&V("/sounds/levelup.mp3",.6))},[p,y,o]),d.useEffect(()=>{p>0&&p%10===0&&($(),Q(p),o&&V("/sounds/checkpoint.mp3",.7))},[p,o]),d.useEffect(()=>{const A=te=>{te.preventDefault(),H(!0),window.history.pushState({mode:"survival"},"",window.location.href)};return window.addEventListener("popstate",A),()=>{window.removeEventListener("popstate",A)}},[]);const I=A=>A>=100?"LEGENDARY":A>=50?"EXPERT":A>=25?"HARD":A>=10?"MEDIUM":"EASY",D=async()=>{try{const te=await(await fetch("/data/quiz_questions_bank.csv")).text(),{data:se}=hr.parse(te,{header:!0,skipEmptyLines:!0,transformHeader:de=>de.trim().toLowerCase()}),le=se.map((de,ve)=>{var Ge;const Se=[de.option1,de.option2,de.option3,de.option4].map(Ce=>(Ce||"").trim()).filter(Boolean);if(Se.length<4)return null;let we={a:0,b:1,c:2,d:3}[(Ge=de.answer)==null?void 0:Ge.toLowerCase()];return we===void 0&&(we=Se.findIndex(Ce=>Ce.toLowerCase()===(de.answer||"").toLowerCase())),we===-1&&(we=0),{id:de.id||`q_${ve}`,prompt:(de.question||"").trim(),options:Se,correctIndex:we,category:(de.category||de.subject||"general").trim(),difficulty:(de.difficulty||"medium").toLowerCase()}}).filter(Boolean);N(le),L(le)}catch(A){console.error("Failed to load questions:",A)}},L=(A=v)=>{const te=A.filter(ve=>!O.current.has(ve.id));te.length===0&&(O.current.clear(),te.push(...A));const se=y.toLowerCase();let le=te.filter(ve=>ve.difficulty===se||ve.difficulty==="medium");le.length===0&&(le=te);const de=le[Math.floor(Math.random()*le.length)];de&&(O.current.add(de.id),R(de),h(Fd[y].timer),k(!1))},T=A=>{if(b)return;const te=A===C.correctIndex;P(te),k(!0),te?z():B(),setTimeout(()=>{(u>0||te)&&(f(se=>se+1),L())},1500)},z=()=>{const A=Fd[y].points;S(te=>te+A),x(te=>{const se=te+1;if(t){const le=JSON.parse(localStorage.getItem("questProgress")||"{}");le.winStreak=Math.max(le.winStreak||0,se),le.date=`${new Date().getFullYear()}-${new Date().getMonth()+1}-${new Date().getDate()}`,localStorage.setItem("questProgress",JSON.stringify(le)),se>=5&&console.log("Win streak quest completed!")}return se%5===0&&u<3&&(m(le=>Math.min(le+1,3)),o&&V("/sounds/lifeup.mp3",.8)),se}),ie.addCoins(Math.floor(A/10),"Survival Mode - Correct Answer"),ie.addXP(1),o&&V("/sounds/correct.mp3",.7)},B=()=>{x(0),m(A=>{const te=A-1;return te<=0&&(c("gameOver"),M()),te}),o&&V("/sounds/wrong.mp3",.7),Y([200])},W=()=>{B()},$=()=>{const A={questionCount:p,totalScore:j,lives:u,correctStreak:w,timestamp:Date.now()};localStorage.setItem("survival_checkpoint",JSON.stringify(A))},Z=()=>{const A=localStorage.getItem("survival_checkpoint");if(A)try{const te=JSON.parse(A);Date.now()-te.timestamp<864e5?(f(te.questionCount),S(te.totalScore),m(te.lives),x(te.correctStreak),Q(te.questionCount)):localStorage.removeItem("survival_checkpoint")}catch(te){console.error("Failed to load checkpoint:",te)}},U=()=>{localStorage.removeItem("survival_checkpoint"),Q(0)},M=()=>{const A=parseInt(localStorage.getItem("survival_highscore")||"0");j>A&&(localStorage.setItem("survival_highscore",j.toString()),localStorage.setItem("survival_highquestions",p.toString()))},ee=()=>{c("playing"),m(3),f(0),x(0),S(0),g("EASY"),O.current.clear(),U(),L()},G=()=>{c("playing"),L()},K=()=>{H(!0)},X=()=>{if(t){const A=JSON.parse(localStorage.getItem("questProgress")||"{}");A.winStreak=Math.max(A.winStreak||0,w),A.date=`${new Date().getFullYear()}-${new Date().getMonth()+1}-${new Date().getDate()}`,localStorage.setItem("questProgress",JSON.stringify(A)),window.location.href="/profile/quests"}else window.history.go(-1),e()},V=(A,te=.5)=>{try{const se=new Audio(A);se.volume=te,se.play()}catch{}},Y=A=>{navigator.vibrate&&navigator.vibrate(A)};return d.useEffect(()=>(document.body.classList.add("hide-bottom-nav"),()=>{document.body.classList.remove("hide-bottom-nav")}),[]),l==="gameOver"?n.jsxs(n.Fragment,{children:[n.jsx(Ag,{score:j,questionsAnswered:p,highScore:parseInt(localStorage.getItem("survival_highscore")||"0"),checkpoint:F,onRestart:ee,onContinue:F>0?G:null,onBack:K}),J&&n.jsx("div",{className:"fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 px-6",children:n.jsxs("div",{className:"bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-6 max-w-sm w-full shadow-2xl slide-in border border-white/10",children:[n.jsxs("div",{className:"text-center mb-6",children:[n.jsx("div",{className:"text-5xl mb-3",children:"🚪"}),n.jsx("h3",{className:"text-xl font-bold text-white mb-2",children:"Leave the game?"}),n.jsx("p",{className:"text-white/70",children:"Your progress saves at checkpoints!"})]}),n.jsxs("div",{className:"flex gap-3",children:[n.jsx("button",{onClick:()=>H(!1),className:"flex-1 py-3 bg-gradient-to-r from-green-400 to-emerald-500 text-white rounded-2xl font-bold shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]",children:"Keep Playing"}),n.jsx("button",{onClick:X,className:"flex-1 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-2xl font-bold shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]",children:"Exit"})]})]})})]}):C?n.jsxs(n.Fragment,{children:[n.jsx(_g,{question:C,onAnswer:T,lives:u,questionCount:p,correctStreak:w,totalScore:j,currentDifficulty:y,timeLeft:E,showFeedback:b,lastAnswerCorrect:_,checkpoint:F,onBack:K,soundOn:o,setSoundOn:i}),J&&n.jsx("div",{className:"fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 px-6",children:n.jsxs("div",{className:"bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-6 max-w-sm w-full shadow-2xl slide-in border border-white/10",children:[n.jsxs("div",{className:"text-center mb-6",children:[n.jsx("div",{className:"text-5xl mb-3",children:"🚪"}),n.jsx("h3",{className:"text-xl font-bold text-white mb-2",children:"Leave the game?"}),n.jsx("p",{className:"text-white/70",children:"Your progress saves at checkpoints!"})]}),n.jsxs("div",{className:"flex gap-3",children:[n.jsx("button",{onClick:()=>H(!1),className:"flex-1 py-3 bg-gradient-to-r from-green-400 to-emerald-500 text-white rounded-2xl font-bold shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]",children:"Keep Playing"}),n.jsx("button",{onClick:X,className:"flex-1 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-2xl font-bold shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]",children:"Exit"})]})]})})]}):n.jsx("div",{className:"min-h-screen bg-base-bg text-white flex items-center justify-center",children:n.jsx("div",{className:"text-xl",children:"Loading questions..."})})}const sr=[{id:1,name:"Sandy Beach",emoji:"🏖️",theme:{background:"from-yellow-300 via-orange-300 to-blue-400",accent:"from-yellow-400 to-orange-400",cardBg:"from-amber-500/20 to-yellow-500/20",unlockGradient:"from-yellow-400 to-amber-500"},difficulty:"EASY",difficultyRange:{min:0,max:9},questionDifficulty:["easy"],requiredCorrect:2,timeLimit:300,rewards:{perCorrectAnswer:10,gemChance:.3,gemBonus:5,speedBonus:3,perfectBonus:50,treasurePiece:"🧩",completionCoins:30},description:"Start your adventure on the sunny shores! Easy questions to warm up.",unlockRequirement:null,visualElements:{bgEmojis:["🌊","🐚","🦀","⛱️","🌺"],diggingEmoji:"⛏️",foundEmojis:["💎","🪙","✨"]}},{id:2,name:"Jungle Cave",emoji:"🌴",theme:{background:"from-green-400 via-emerald-500 to-teal-600",accent:"from-green-500 to-emerald-600",cardBg:"from-green-500/20 to-emerald-500/20",unlockGradient:"from-green-400 to-emerald-500"},difficulty:"EASY-MEDIUM",difficultyRange:{min:10,max:24},questionDifficulty:["easy","medium"],requiredCorrect:2,timeLimit:300,rewards:{perCorrectAnswer:15,gemChance:.35,gemBonus:7,speedBonus:5,perfectBonus:75,treasurePiece:"🗝️",completionCoins:50},description:"Explore the mysterious jungle caves! Watch out for tricky vines!",unlockRequirement:{island:1,treasurePiece:!0},visualElements:{bgEmojis:["🌿","🦜","🐒","🦋","🌺"],diggingEmoji:"⛏️",foundEmojis:["💎","🪙","🌟"]}},{id:3,name:"Crystal Mountain",emoji:"⛰️",theme:{background:"from-purple-400 via-pink-400 to-indigo-500",accent:"from-purple-500 to-pink-500",cardBg:"from-purple-500/20 to-pink-500/20",unlockGradient:"from-purple-400 to-pink-500"},difficulty:"MEDIUM",difficultyRange:{min:25,max:49},questionDifficulty:["medium"],requiredCorrect:2,timeLimit:300,rewards:{perCorrectAnswer:20,gemChance:.4,gemBonus:10,speedBonus:7,perfectBonus:100,treasurePiece:"💎",completionCoins:75},description:"Climb the sparkling crystal peaks! Medium challenges await!",unlockRequirement:{island:2,treasurePiece:!0},visualElements:{bgEmojis:["✨","🔮","⭐","🌟","💫"],diggingEmoji:"⚒️",foundEmojis:["💎","🪙","🌈"]}},{id:4,name:"Pirate Ship",emoji:"🏴‍☠️",theme:{background:"from-slate-600 via-blue-600 to-cyan-500",accent:"from-slate-700 to-blue-700",cardBg:"from-slate-500/20 to-blue-500/20",unlockGradient:"from-slate-500 to-blue-600"},difficulty:"MEDIUM-HARD",difficultyRange:{min:50,max:99},questionDifficulty:["medium","hard"],requiredCorrect:2,timeLimit:300,rewards:{perCorrectAnswer:30,gemChance:.45,gemBonus:15,speedBonus:10,perfectBonus:150,treasurePiece:"🗺️",completionCoins:100},description:"Ahoy matey! Navigate the pirate ship's challenging puzzles!",unlockRequirement:{island:3,treasurePiece:!0},visualElements:{bgEmojis:["⚓","🦜","💀","🌊","⛵"],diggingEmoji:"🗡️",foundEmojis:["💎","🪙","👑"]}},{id:5,name:"Volcano Peak",emoji:"🌋",theme:{background:"from-red-500 via-orange-500 to-yellow-500",accent:"from-red-600 to-orange-600",cardBg:"from-red-500/20 to-orange-500/20",unlockGradient:"from-red-500 to-orange-500"},difficulty:"HARD",difficultyRange:{min:100,max:1/0},questionDifficulty:["hard"],requiredCorrect:2,timeLimit:300,rewards:{perCorrectAnswer:50,gemChance:.5,gemBonus:25,speedBonus:15,perfectBonus:200,treasurePiece:"👑",completionCoins:150},description:"The ultimate challenge! Can you conquer the volcano?",unlockRequirement:{island:4,treasurePiece:!0},visualElements:{bgEmojis:["🔥","🌋","💥","⚡","🔴"],diggingEmoji:"⛏️",foundEmojis:["💎","🪙","🏆"]}}],De={SHOVELS_PER_ISLAND:3,QUESTIONS_PER_ISLAND:3,SPEED_BONUS_THRESHOLD:5,MIN_CORRECT_FOR_TREASURE:2,FINAL_TREASURE_REWARD:200,FINAL_TREASURE_TITLE:"Treasure Master",DIGGING_ANIMATION_DURATION:1500,REWARD_DISPLAY_DURATION:2e3,TRANSITION_DURATION:500,STORAGE_KEYS:{PROGRESS:"treasureHunt_progress",STATS:"treasureHunt_stats",UNLOCKED_ISLANDS:"treasureHunt_unlocked",COMPLETED_ISLANDS:"treasureHunt_completed",TREASURE_PIECES:"treasureHunt_pieces"},SOUNDS:{DIG:"/sounds/dig.mp3",TREASURE_FOUND:"/sounds/treasure.mp3",GEM_FOUND:"/sounds/gem.mp3",WRONG:"/sounds/wrong.mp3",ISLAND_COMPLETE:"/sounds/islandcomplete.mp3",ISLAND_UNLOCK:"/sounds/unlock.mp3",FINAL_TREASURE:"/sounds/victory.mp3",TICK:"/sounds/tick.mp3",SHOVEL_BREAK:"/sounds/break.mp3"}},ln=e=>sr.find(t=>t.id===e),Lg=(e,t)=>{const r=ln(e);if(!r.unlockRequirement)return!0;const s=t[r.unlockRequirement.island];return s&&s.treasurePiece},Dg=(e,t)=>{const r={0:["Keep trying! You'll get it! 💪","Don't give up! Adventure awaits! 🌟","Practice makes perfect! 🎯"],1:["Good effort! Almost there! 🌈","Nice try! Keep going! ⭐","You're learning fast! 🚀"],2:["Awesome! You found treasure! 🏆","Great job, explorer! 🎉","You're amazing! ✨"],3:["PERFECT! You're a champion! 👑","INCREDIBLE! Master explorer! 🌟","LEGENDARY performance! 🏆"]},s=r[e]||r[0];return s[Math.floor(Math.random()*s.length)]},zg=e=>sr.map(t=>{var r;return{id:t.id,piece:t.rewards.treasurePiece,collected:((r=e[t.id])==null?void 0:r.treasurePiece)||!1}});function Mg({islands:e,islandProgress:t,onSelectIsland:r,onBack:s,soundOn:a,setSoundOn:o,totalStats:i}){const[l,c]=d.useState(!1),u=zg(t),m=u.filter(f=>f.collected).length,p=Math.round(m/e.length*100);return d.useEffect(()=>(document.body.style.position="fixed",document.body.style.overflow="hidden",document.body.style.width="100%",document.body.style.height="100%",()=>{document.body.style.position="",document.body.style.overflow="",document.body.style.width="",document.body.style.height=""}),[]),n.jsxs("div",{className:"fixed inset-0 bg-gradient-to-b from-sky-400 via-blue-500 to-blue-600 overflow-hidden flex flex-col",children:[n.jsx("style",{jsx:!0,children:`
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
      `}),n.jsxs("div",{className:"absolute inset-0",children:[n.jsx("div",{className:"absolute top-10 cloud-drift",style:{animationDelay:"0s"},children:n.jsx("div",{className:"text-6xl opacity-40",children:"☁️"})}),n.jsx("div",{className:"absolute top-12 cloud-drift",style:{animationDelay:"7s",animationDuration:"25s"},children:n.jsx("div",{className:"text-5xl opacity-40",children:"☁️"})}),n.jsx("div",{className:"absolute top-10 right-12",children:n.jsx("div",{className:"text-6xl pulse-animation opacity-80",children:"☀️"})}),n.jsx("div",{className:"absolute top-16 left-20 float-animation opacity-60",children:n.jsx("div",{className:"text-2xl",children:"🦜"})})]}),n.jsxs("div",{className:"relative z-20 px-4 pt-[calc(env(safe-area-inset-top)+3rem)]",children:[n.jsxs("div",{className:"flex justify-between items-center mb-3",children:[n.jsx("button",{onClick:s,className:"w-11 h-11 glass-card rounded-2xl shadow-lg flex items-center justify-center hover:scale-105 transition-transform",children:n.jsx("span",{className:"text-xl",children:"⬅"})}),n.jsx("div",{className:"glass-card rounded-2xl px-3 py-2 shadow-lg",children:n.jsxs("div",{className:"text-white font-bold text-center",children:[n.jsx("div",{className:"text-[10px] opacity-90",children:"TREASURE HUNT"}),n.jsx("div",{className:"text-sm",children:"🏝️ Island Explorer 🏝️"})]})}),n.jsx("button",{onClick:()=>o(!a),className:"w-11 h-11 glass-card rounded-2xl shadow-lg flex items-center justify-center hover:scale-105 transition-transform",children:n.jsx("span",{className:"text-xl",children:a?"🔊":"🔇"})})]}),n.jsxs("div",{className:"glass-card rounded-2xl p-3 shadow-xl mt-2",children:[n.jsxs("div",{className:"flex items-center justify-between mb-2",children:[n.jsx("span",{className:"text-white font-bold text-sm",children:"Adventure Progress"}),n.jsxs("span",{className:"text-white font-bold text-sm",children:[p,"%"]})]}),n.jsx("div",{className:"w-full h-2.5 bg-white/20 rounded-full overflow-hidden",children:n.jsx("div",{className:"h-full bg-gradient-to-r from-yellow-400 to-amber-500 transition-all duration-1000",style:{width:`${p}%`}})}),n.jsx("button",{onClick:()=>c(!0),className:"mt-2.5 w-full py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-bold text-sm hover:scale-[1.02] transition-transform",children:n.jsxs("div",{className:"flex items-center justify-center gap-2",children:[n.jsx("span",{children:"🏆"}),n.jsxs("span",{children:["Treasure Pieces: ",m,"/5"]}),n.jsx("span",{children:"🏆"})]})})]})]}),n.jsx("div",{className:"flex-1 flex items-center justify-center px-4 py-4",children:n.jsxs("div",{className:"w-full max-w-md",children:[n.jsx("div",{className:"grid grid-cols-2 gap-3",children:e.slice(0,4).map(f=>{const w=t[f.id],x=w==null?void 0:w.unlocked,j=w==null?void 0:w.treasurePiece,S=w==null?void 0:w.perfectScore;return n.jsxs("button",{onClick:()=>r(f.id),disabled:!x,className:`relative aspect-square rounded-2xl transition-all ${x?"hover:scale-105 active:scale-95 shadow-xl":"opacity-50 grayscale"}`,children:[n.jsx("div",{className:`absolute inset-0 rounded-2xl bg-gradient-to-br ${x?f.theme.background:"from-gray-400 to-gray-500"}`,children:x&&n.jsxs(n.Fragment,{children:[n.jsx("div",{className:"absolute top-1 right-1 text-lg sparkle-animation",children:"✨"}),n.jsx("div",{className:"absolute bottom-1 left-1 text-sm sparkle-animation",style:{animationDelay:"1s"},children:"⭐"})]})}),!x&&n.jsx("div",{className:"absolute inset-0 rounded-2xl bg-black/30 flex items-center justify-center",children:n.jsx("div",{className:"text-4xl",children:"🔒"})}),n.jsxs("div",{className:"relative h-full flex flex-col items-center justify-center p-3",children:[n.jsx("div",{className:"absolute top-1 left-1 w-7 h-7 bg-white/30 rounded-full flex items-center justify-center",children:n.jsx("span",{className:"text-white font-bold text-sm",children:f.id})}),S&&n.jsx("div",{className:"absolute top-1 right-1 text-lg",children:"💯"}),n.jsx("div",{className:`text-5xl mb-1 ${x?"bounce-animation":""}`,children:x?f.emoji:"❓"}),n.jsx("div",{className:"text-white font-bold text-sm text-center mb-1",children:f.name}),n.jsx("div",{className:`px-2 py-0.5 rounded-full text-[10px] font-bold ${x?"bg-white/30":"bg-black/30"} text-white`,children:f.difficulty}),j&&n.jsx("div",{className:"absolute bottom-1 text-2xl pulse-animation",children:f.rewards.treasurePiece}),(w==null?void 0:w.attempts)>0&&n.jsxs("div",{className:"absolute -bottom-1 -right-1 bg-white/90 text-gray-800 rounded-full px-2 py-0.5 text-[10px] font-bold flex items-center gap-1",children:[n.jsxs("span",{children:[w.bestScore,"/3"]}),n.jsx("span",{children:"⭐"})]})]})]},f.id)})}),n.jsx("div",{className:"flex justify-center mt-3",children:e.slice(4,5).map(f=>{const w=t[f.id],x=w==null?void 0:w.unlocked,j=w==null?void 0:w.treasurePiece,S=w==null?void 0:w.perfectScore;return n.jsxs("button",{onClick:()=>r(f.id),disabled:!x,className:`relative w-[calc(50%-6px)] aspect-square rounded-2xl transition-all ${x?"hover:scale-105 active:scale-95 shadow-xl":"opacity-50 grayscale"}`,children:[n.jsxs("div",{className:`absolute inset-0 rounded-2xl bg-gradient-to-br ${x?f.theme.background:"from-gray-400 to-gray-500"}`,children:[x&&n.jsxs(n.Fragment,{children:[n.jsx("div",{className:"absolute top-1 right-1 text-lg sparkle-animation",children:"✨"}),n.jsx("div",{className:"absolute bottom-1 left-1 text-sm sparkle-animation",style:{animationDelay:"1s"},children:"⭐"})]}),!x&&n.jsx("div",{className:"absolute inset-0 rounded-2xl bg-gradient-to-t from-yellow-400/20 to-transparent animate-pulse"})]}),!x&&n.jsx("div",{className:"absolute inset-0 rounded-2xl bg-black/30 flex items-center justify-center",children:n.jsx("div",{className:"text-4xl",children:"🔒"})}),n.jsxs("div",{className:"relative h-full flex flex-col items-center justify-center p-3",children:[n.jsx("div",{className:"absolute top-1 left-1 w-7 h-7 bg-white/30 rounded-full flex items-center justify-center",children:n.jsx("span",{className:"text-white font-bold text-sm",children:f.id})}),S&&n.jsx("div",{className:"absolute top-1 right-1 text-lg",children:"💯"}),n.jsx("div",{className:`text-5xl mb-1 ${x?"bounce-animation":""}`,children:x?f.emoji:"👑"}),n.jsx("div",{className:"text-white font-bold text-sm text-center mb-1",children:f.name}),n.jsx("div",{className:`px-2 py-0.5 rounded-full text-[10px] font-bold ${x?"bg-white/30":"bg-black/30"} text-white`,children:f.difficulty}),j&&n.jsx("div",{className:"absolute bottom-1 text-2xl pulse-animation",children:f.rewards.treasurePiece}),(w==null?void 0:w.attempts)>0&&n.jsxs("div",{className:"absolute -bottom-1 -right-1 bg-white/90 text-gray-800 rounded-full px-2 py-0.5 text-[10px] font-bold flex items-center gap-1",children:[n.jsxs("span",{children:[w.bestScore,"/3"]}),n.jsx("span",{children:"⭐"})]})]})]},f.id)})})]})}),n.jsx("div",{className:"relative z-20 px-4 pb-[calc(env(safe-area-inset-bottom)+3rem)]",children:n.jsx("div",{className:"bg-gradient-to-r from-indigo-500/30 to-purple-500/30 backdrop-blur-lg rounded-2xl shadow-xl border border-white/20",children:n.jsxs("div",{className:"grid grid-cols-3 gap-2 text-center",children:[n.jsxs("div",{className:"relative",children:[n.jsx("div",{className:"text-2xl mb-0.5 filter drop-shadow-lg",children:"💰"}),n.jsx("div",{className:"text-yellow-300 font-black text-lg",children:i.totalCoinsEarned}),n.jsx("div",{className:"text-white/80 text-[10px] font-medium",children:"Total Coins"})]}),n.jsxs("div",{className:"relative",children:[n.jsx("div",{className:"text-2xl mb-0.5 filter drop-shadow-lg",children:"💎"}),n.jsx("div",{className:"text-cyan-300 font-black text-lg",children:i.totalGemsFound}),n.jsx("div",{className:"text-white/80 text-[10px] font-medium",children:"Gems Found"})]}),n.jsxs("div",{className:"relative",children:[n.jsx("div",{className:"text-2xl mb-0.5 filter drop-shadow-lg",children:"📝"}),n.jsxs("div",{className:"text-green-300 font-black text-lg",children:[i.totalCorrectAnswers,"/",i.totalQuestionsAnswered]}),n.jsx("div",{className:"text-white/80 text-[10px] font-medium",children:"Correct"})]})]})})}),l&&n.jsx("div",{className:"fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 px-6",children:n.jsxs("div",{className:"bg-gradient-to-br from-purple-600 to-pink-600 rounded-3xl p-6 max-w-sm w-full shadow-2xl",children:[n.jsx("h3",{className:"text-2xl font-bold text-white text-center mb-6",children:"🏆 Treasure Collection 🏆"}),n.jsx("div",{className:"flex justify-center gap-4 mb-6",children:u.map((f,w)=>n.jsx("div",{className:`text-5xl ${f.collected?"":"opacity-30 grayscale"}`,children:f.collected?f.piece:"❓"},f.id))}),n.jsx("div",{className:"text-center text-white mb-6",children:m===5?n.jsxs("div",{children:[n.jsx("p",{className:"text-lg font-bold mb-2",children:"🎉 COMPLETE! 🎉"}),n.jsx("p",{className:"text-sm opacity-90",children:"You're a true Treasure Master!"})]}):n.jsx("p",{className:"text-sm opacity-90",children:"Collect all 5 pieces to unlock the final treasure!"})}),n.jsx("button",{onClick:()=>c(!1),className:"w-full py-3 bg-white/20 backdrop-blur rounded-2xl text-white font-bold hover:bg-white/30 transition-colors",children:"Close"})]})})]})}function Og({island:e,progress:t,onStart:r,onClose:s,soundOn:a}){const[o,i]=d.useState(!1);d.useEffect(()=>{i(!0)},[]),d.useEffect(()=>{const f=w=>{s()};return window.history.pushState({islandDetail:!0},"",window.location.pathname),window.addEventListener("popstate",f),()=>window.removeEventListener("popstate",f)},[s]);const l=(t==null?void 0:t.attempts)>0,c=t==null?void 0:t.treasurePiece;t==null||t.perfectScore;const u=(t==null?void 0:t.bestScore)||0,m=()=>{if(a){const f=new Audio("/sounds/start.mp3");f.volume=.5,f.play().catch(()=>{})}r()},p=f=>{const w=Math.floor(f/60),x=f%60;return`${w}:${x.toString().padStart(2,"0")}`};return n.jsxs("div",{className:"fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50 p-4",children:[n.jsx("style",{jsx:!0,children:`
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
      `}),n.jsxs("div",{className:`relative w-full max-w-sm bg-gradient-to-br ${e.theme.background} rounded-2xl shadow-2xl ${o?"slide-up":""}`,children:[n.jsx("div",{className:"relative p-4 pb-2",children:n.jsxs("div",{className:"text-center",children:[n.jsx("div",{className:"text-6xl mb-2 pulse-animation",children:e.emoji}),n.jsx("h2",{className:"text-2xl font-black text-white",children:e.name}),n.jsx("div",{className:"inline-block px-3 py-1 bg-white/20 backdrop-blur rounded-full mt-2",children:n.jsxs("span",{className:"text-white font-bold text-sm",children:["Level ",e.id," • ",e.difficulty]})})]})}),n.jsxs("div",{className:"px-4 py-3 space-y-2",children:[n.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[n.jsxs("div",{className:"bg-black/10 backdrop-blur rounded-xl p-3 text-center",children:[n.jsx("div",{className:"text-white/70 text-xs mb-1",children:"Time"}),n.jsx("div",{className:"text-white font-bold",children:p(e.timeLimit)})]}),n.jsxs("div",{className:"bg-black/10 backdrop-blur rounded-xl p-3 text-center",children:[n.jsx("div",{className:"text-white/70 text-xs mb-1",children:"Questions"}),n.jsx("div",{className:"text-white font-bold",children:De.QUESTIONS_PER_ISLAND})]})]}),n.jsxs("div",{className:"bg-black/10 backdrop-blur rounded-xl p-3 flex items-center justify-between",children:[n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx("span",{className:"text-2xl",children:e.rewards.treasurePiece}),n.jsx("span",{className:"text-white font-medium",children:"To Win"})]}),n.jsxs("span",{className:"text-white font-bold",children:[e.requiredCorrect,"/3 Correct"]})]}),n.jsxs("div",{className:"bg-black/10 backdrop-blur rounded-xl p-3",children:[n.jsx("div",{className:"text-white font-bold text-sm mb-2",children:"Rewards"}),n.jsxs("div",{className:"grid grid-cols-4 gap-2 text-center",children:[n.jsxs("div",{children:[n.jsx("div",{className:"text-xl",children:"💰"}),n.jsx("div",{className:"text-white/70 text-xs",children:e.rewards.perCorrectAnswer})]}),n.jsxs("div",{children:[n.jsx("div",{className:"text-xl",children:"💎"}),n.jsxs("div",{className:"text-white/70 text-xs",children:[Math.round(e.rewards.gemChance*100),"%"]})]}),n.jsxs("div",{children:[n.jsx("div",{className:"text-xl",children:"⚡"}),n.jsxs("div",{className:"text-white/70 text-xs",children:["+",e.rewards.speedBonus]})]}),n.jsxs("div",{children:[n.jsx("div",{className:"text-xl",children:"🏆"}),n.jsxs("div",{className:"text-white/70 text-xs",children:["+",e.rewards.perfectBonus]})]})]})]}),l&&n.jsx("div",{className:"bg-black/10 backdrop-blur rounded-xl p-3",children:n.jsxs("div",{className:"flex items-center justify-between",children:[n.jsx("div",{className:"flex gap-1",children:[...Array(3)].map((f,w)=>n.jsx("span",{className:"text-lg",children:w<u?"⭐":"☆"},w))}),n.jsxs("div",{className:"text-white text-sm",children:[n.jsxs("span",{className:"font-bold",children:[u,"/3"]})," • ",t.attempts," tries"]}),c&&n.jsx("div",{className:"text-2xl",children:e.rewards.treasurePiece})]})})]}),n.jsxs("div",{className:"p-4 pt-2 space-y-2",children:[n.jsx("button",{onClick:m,className:"w-full py-3 bg-gradient-to-r from-green-400 to-emerald-500 text-white rounded-xl font-black text-base shadow-lg hover:shadow-xl transition-all hover:scale-[1.02] active:scale-[0.98]",children:n.jsxs("span",{className:"flex items-center justify-center gap-2",children:[n.jsx("span",{className:"text-xl",children:"🏴‍☠️"}),n.jsx("span",{children:l?"Play Again":"Start Adventure"}),n.jsx("span",{className:"text-xl",children:"🏴‍☠️"})]})}),n.jsx("button",{onClick:s,className:"w-full py-2 bg-white/20 backdrop-blur text-white rounded-xl font-bold text-sm hover:bg-white/30 transition-colors",children:"Back to Map"})]})]})]})}function Fg({shovelsRemaining:e,showBreak:t=!1}){const[r,s]=d.useState(!1),[a,o]=d.useState(e),i=3;return d.useEffect(()=>{e<a&&(s(!0),setTimeout(()=>s(!1),1e3)),o(e)},[e,a]),n.jsxs("div",{className:"inline-block",children:[n.jsx("style",{jsx:!0,children:`
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
                  `,children:u||m?"⛏️":"🪦"}),m&&n.jsxs(n.Fragment,{children:[n.jsx("div",{className:"absolute inset-0 pointer-events-none",children:n.jsxs("svg",{className:"w-full h-full",viewBox:"0 0 40 40",children:[n.jsx("path",{d:"M20,10 L18,20 L22,30",stroke:"#ff4444",strokeWidth:"2",fill:"none",opacity:"0.8",className:"shovel-crack"}),n.jsx("path",{d:"M15,15 L20,20 L25,18",stroke:"#ff4444",strokeWidth:"1.5",fill:"none",opacity:"0.6",className:"shovel-crack",style:{animationDelay:"0.1s"}})]})}),n.jsxs("div",{className:"absolute inset-0 pointer-events-none",children:[n.jsx("span",{className:"absolute top-0 left-1/2 text-xs shovel-fall",children:"💔"}),n.jsx("span",{className:"absolute top-1/2 left-0 text-xs shovel-fall",style:{animationDelay:"0.2s"},children:"✨"}),n.jsx("span",{className:"absolute top-1/2 right-0 text-xs shovel-fall",style:{animationDelay:"0.3s"},children:"💥"})]})]}),n.jsx("div",{className:"absolute -bottom-1 left-1/2 -translate-x-1/2",children:n.jsx("span",{className:`text-xs font-bold ${u?"text-blue-600":"text-white/30"}`,children:c+1})})]},c)})}),e===0&&n.jsx("span",{className:"text-red-400 text-sm font-bold animate-pulse ml-2",children:"No shovels left!"}),e===1&&n.jsx("span",{className:"text-red-500 text-sm font-bold ml-2",children:"Last chance!"})]})})]})}function $g({island:e,foundGem:t,onComplete:r}){const[s,a]=d.useState("digging"),[o,i]=d.useState(!1),[l,c]=d.useState(!1);return d.useEffect(()=>{(async()=>{await new Promise(m=>setTimeout(m,800)),a("revealing"),i(!0),t&&(await new Promise(m=>setTimeout(m,400)),c(!0)),await new Promise(m=>setTimeout(m,1e3)),a("complete"),await new Promise(m=>setTimeout(m,300)),r()})()},[t,r]),n.jsxs("div",{className:"fixed inset-0 z-40 pointer-events-none flex items-center justify-center",children:[n.jsx("style",{jsx:!0,children:`
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
      `}),s==="digging"&&n.jsxs("div",{className:"relative",children:[n.jsx("div",{className:"text-8xl dig-animation",children:e.visualElements.diggingEmoji}),[...Array(8)].map((u,m)=>n.jsx("div",{className:"dirt-particle text-4xl",style:{"--fly-x":`${(Math.random()-.5)*200}px`,"--fly-y":`${-Math.random()*150-50}px`,left:"50%",top:"60%",animationDelay:`${m*.1}s`},children:"🟫"},m)),n.jsx("div",{className:"absolute -bottom-4 left-1/2 -translate-x-1/2",children:n.jsx("div",{className:"text-6xl opacity-50",children:"💨"})})]}),s==="revealing"&&n.jsxs("div",{className:"relative",children:[o&&n.jsxs("div",{className:"relative",children:[n.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:n.jsx("div",{className:"w-32 h-32 rounded-full bg-yellow-400/30 blur-xl glow-effect"})}),n.jsxs("div",{className:"relative flex items-center justify-center",children:[n.jsx("div",{className:"text-7xl treasure-reveal treasure-float",children:"💰"}),n.jsx("div",{className:"absolute text-5xl coin-spin",style:{left:"-30px"},children:"🪙"}),n.jsx("div",{className:"absolute text-5xl coin-spin",style:{right:"-30px",animationDelay:"0.5s"},children:"🪙"}),n.jsx("div",{className:"absolute text-4xl coin-spin",style:{top:"-30px",animationDelay:"1s"},children:"🪙"})]}),[...Array(6)].map((u,m)=>n.jsx("div",{className:"absolute text-3xl star-burst",style:{left:"50%",top:"50%",transform:`translate(-50%, -50%) rotate(${m*60}deg) translateY(-40px)`,animationDelay:`${m*.1}s`},children:"⭐"},m))]}),l&&n.jsxs("div",{className:"absolute -top-10 left-1/2 -translate-x-1/2",children:[n.jsxs("div",{className:"relative",children:[n.jsx("div",{className:"text-6xl gem-sparkle",children:"💎"}),n.jsx("div",{className:"absolute -top-2 -left-2 text-2xl animate-pulse",children:"✨"}),n.jsx("div",{className:"absolute -top-2 -right-2 text-2xl animate-pulse",style:{animationDelay:"0.3s"},children:"✨"}),n.jsx("div",{className:"absolute -bottom-2 left-1/2 -translate-x-1/2 text-2xl animate-pulse",style:{animationDelay:"0.6s"},children:"✨"})]}),n.jsx("div",{className:"absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap",children:n.jsx("span",{className:"text-cyan-300 font-black text-lg drop-shadow-lg",children:"RARE GEM!"})})]}),n.jsx("div",{className:"absolute -bottom-16 left-1/2 -translate-x-1/2 text-center",children:n.jsx("div",{className:"text-white font-black text-2xl drop-shadow-lg",children:t?"AMAZING FIND!":"TREASURE FOUND!"})})]}),s==="complete"&&n.jsx("div",{className:"relative opacity-0 transition-opacity duration-300",children:n.jsx("div",{className:"text-7xl",children:"✅"})})]})}function Bg({island:e,question:t,questionNumber:r,totalQuestions:s,shovelsRemaining:a,timeRemaining:o,coinsEarned:i,gemsFound:l,onAnswer:c,onQuit:u,soundOn:m,setSoundOn:p}){const[f,w]=d.useState(null),[x,j]=d.useState(!1),[S,y]=d.useState(!1),[g,v]=d.useState(!1),[N,C]=d.useState(!1),[R,E]=d.useState(!1),[h,b]=d.useState(!1),k=d.useRef(null);d.useEffect(()=>{w(null),j(!1),y(!1),v(!1),C(!1),b(!1)},[t]),d.useEffect(()=>{const J=H=>{H.stopImmediatePropagation(),R||(E(!0),window.history.pushState({questionScreen:!0},"",window.location.pathname))};return window.history.pushState({questionScreen:!0},"",window.location.pathname),window.addEventListener("popstate",J,!0),()=>window.removeEventListener("popstate",J,!0)},[R]);const _=J=>{const H=Math.floor(J/60),q=J%60;return`${H}:${q.toString().padStart(2,"0")}`},P=()=>o<=10?"critical":o<=30?"warning":"normal",F=J=>{if(h||x)return;w(J),b(!0);const H=J===t.correctIndex;y(H),setTimeout(()=>{if(j(!0),m)if(H){const q=new Audio("/sounds/dig.mp3");q.volume=.5,q.play().catch(()=>{})}else{const q=new Audio("/sounds/wrong.mp3");q.volume=.5,q.play().catch(()=>{})}H&&(v(!0),Math.random()<e.rewards.gemChance&&setTimeout(()=>{if(C(!0),m){const O=new Audio("/sounds/gem.mp3");O.volume=.6,O.play().catch(()=>{})}},800)),setTimeout(()=>{c(J)},H?2e3:1500)},300)},Q=P();return n.jsxs("div",{className:`min-h-screen bg-gradient-to-br ${e.theme.background} relative overflow-hidden`,children:[n.jsx("style",{jsx:!0,children:`
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
      `}),n.jsx("div",{className:"absolute inset-0 pointer-events-none",children:e.visualElements.bgEmojis.map((J,H)=>n.jsx("div",{className:"absolute text-7xl opacity-10 float-animation",style:{top:`${20+H*15}%`,left:`${10+H*18}%`,animationDelay:`${H*.5}s`,animationDuration:`${3+H}s`},children:J},H))}),n.jsxs("div",{className:"relative z-10 px-3 pt-[calc(env(safe-area-inset-top)+4rem)]",children:[n.jsxs("div",{className:"flex justify-between items-center mb-3",children:[n.jsx("button",{onClick:()=>E(!0),className:"w-10 h-10 glass-card rounded-xl shadow-lg flex items-center justify-center hover:scale-105 transition-transform",children:n.jsx("span",{className:"text-xl",children:"⬅️"})}),n.jsx("div",{className:"glass-card rounded-xl px-3 py-1.5 shadow-lg",children:n.jsxs("div",{className:"flex items-center gap-1.5",children:[n.jsx("span",{className:"text-xl",children:e.emoji}),n.jsx("span",{className:"text-gray-800 font-bold text-sm",children:e.name})]})}),n.jsx("button",{onClick:()=>p(!m),className:"w-10 h-10 glass-card rounded-xl shadow-lg flex items-center justify-center hover:scale-105 transition-transform",children:n.jsx("span",{className:"text-xl",children:m?"🔊":"🔇"})})]}),n.jsxs("div",{className:"glass-card rounded-xl p-3 shadow-xl mb-3",children:[n.jsxs("div",{className:"grid grid-cols-4 gap-2",children:[n.jsxs("div",{className:"text-center",children:[n.jsx("div",{className:`text-xl font-black ${Q==="critical"?"text-red-600 time-pulse-critical":Q==="warning"?"text-orange-600":"text-gray-800"}`,children:_(o)}),n.jsx("div",{className:"text-[10px] text-gray-700 font-medium",children:"Time"})]}),n.jsxs("div",{className:"text-center",children:[n.jsxs("div",{className:"text-xl font-black text-gray-800",children:[r,"/",s]}),n.jsx("div",{className:"text-[10px] text-gray-700 font-medium",children:"Question"})]}),n.jsxs("div",{className:"text-center relative",children:[n.jsx("div",{className:"text-xl font-black text-orange-600",children:i}),n.jsx("div",{className:"text-[10px] text-gray-700 font-medium",children:"Coins"}),x&&S&&n.jsx("div",{className:"absolute -top-3 left-1/2 -translate-x-1/2",children:n.jsxs("span",{className:"text-orange-600 font-bold text-xs coin-float",children:["+",e.rewards.perCorrectAnswer]})})]}),n.jsxs("div",{className:"text-center relative",children:[n.jsx("div",{className:"text-xl font-black text-blue-600",children:l}),n.jsx("div",{className:"text-[10px] text-gray-700 font-medium",children:"Gems"}),N&&n.jsx("div",{className:"absolute -top-3 left-1/2 -translate-x-1/2",children:n.jsx("span",{className:"text-blue-600 text-xl gem-sparkle",children:"💎"})})]})]}),n.jsx("div",{className:"mt-2",children:n.jsx("div",{className:"w-full h-1.5 bg-gray-800/20 rounded-full overflow-hidden",children:n.jsx("div",{className:"h-full bg-gradient-to-r from-green-500 to-emerald-600 progress-bar",style:{width:`${(r-1)/s*100}%`}})})})]}),n.jsx("div",{className:"flex justify-center mb-3 pt-2",children:n.jsx(Fg,{shovelsRemaining:a,showBreak:x&&!S})})]}),n.jsxs("div",{className:"px-3 pt-8 slide-in",children:[n.jsxs("div",{ref:k,className:`glass-card rounded-2xl shadow-xl p-4 mb-4 ${x&&!S?"wrong-shake":""}`,children:[n.jsx("div",{className:"text-center mb-2",children:n.jsxs("span",{className:"text-xs font-bold text-gray-600 uppercase tracking-wider",children:["Question ",r]})}),n.jsx("h2",{className:"text-lg font-bold text-center text-gray-800 leading-relaxed",children:t.prompt})]}),n.jsx("div",{className:"space-y-2.5",children:t.options.map((J,H)=>{const q=["A","B","C","D"],O=f===H,I=H===t.correctIndex;let D="glass-card option-card",L="border border-gray-800/20";return x&&(I?(D+=" correct-pulse",L="border-2 border-green-500 bg-green-400/20"):O&&!S&&(D+=" wrong-shake",L="border-2 border-red-500 bg-red-400/20"),D+=" disabled"),n.jsx("button",{onClick:()=>F(H),disabled:h,className:`w-full p-3 rounded-xl shadow-lg ${D} ${L}`,children:n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsx("div",{className:`w-10 h-10 rounded-lg bg-gradient-to-br ${H===0?"from-blue-400 to-blue-500":H===1?"from-green-400 to-green-500":H===2?"from-yellow-400 to-yellow-500":"from-purple-400 to-purple-500"} text-white font-bold text-lg flex items-center justify-center shadow-md`,children:q[H]}),n.jsx("span",{className:"flex-1 text-left font-medium text-gray-800 text-sm",children:J}),x&&I&&n.jsx("span",{className:"text-2xl",children:"✅"}),x&&O&&!S&&n.jsx("span",{className:"text-2xl",children:"❌"})]})},H)})}),x&&n.jsx("div",{className:"mt-3 text-center slide-in",children:n.jsx("p",{className:"text-base font-bold text-gray-800",children:S?`Great job! Let's dig for treasure! ${e.visualElements.diggingEmoji}`:"Oops! Your shovel broke! Try the next question! 💪"})})]}),g&&n.jsx($g,{island:e,foundGem:N,onComplete:()=>v(!1)}),R&&n.jsx("div",{className:"fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 px-6",children:n.jsxs("div",{className:"bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-6 max-w-sm w-full shadow-2xl slide-in border border-white/10",children:[n.jsxs("div",{className:"text-center mb-6",children:[n.jsx("div",{className:"text-5xl mb-3",children:"🗺️"}),n.jsx("h3",{className:"text-xl font-bold text-white mb-2",children:"Leave the Island?"}),n.jsx("p",{className:"text-white/70",children:"Your progress won't be saved!"})]}),n.jsxs("div",{className:"flex gap-3",children:[n.jsx("button",{onClick:()=>E(!1),className:"flex-1 py-3 bg-gradient-to-r from-green-400 to-emerald-500 text-white rounded-2xl font-bold shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]",children:"Keep Playing"}),n.jsx("button",{onClick:u,className:"flex-1 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-2xl font-bold shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]",children:"Leave Island"})]})]})})]})}function Ug({island:e,session:t,earnedTreasure:r,onRetry:s,onContinue:a,soundOn:o}){const[i,l]=d.useState(0),[c,u]=d.useState(!1),[m,p]=d.useState(!1),f=t.correctAnswers===De.QUESTIONS_PER_ISLAND,w=Dg(t.correctAnswers,e.id);return d.useEffect(()=>{const x=t.coinsEarned,j=2e3,S=30,y=x/S;let g=0;const v=setInterval(()=>{g+=y,g>=x?(l(x),clearInterval(v),r&&setTimeout(()=>u(!0),500),setTimeout(()=>p(!0),r?1500:500)):l(Math.floor(g))},j/S);return()=>clearInterval(v)},[t.coinsEarned,r]),n.jsxs("div",{className:`fixed inset-0 bg-gradient-to-br ${e.theme.background} overflow-hidden flex flex-col`,children:[n.jsx("style",{jsx:!0,children:`
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
      `}),n.jsx("div",{className:"absolute inset-0 pointer-events-none",children:f&&[...Array(10)].map((x,j)=>n.jsx("div",{className:"absolute confetti-fall",style:{left:`${Math.random()*100}%`,animationDelay:`${Math.random()*3}s`,fontSize:`${20+Math.random()*20}px`},children:["🎉","⭐","🎊","✨"][Math.floor(Math.random()*4)]},j))}),n.jsxs("div",{className:"relative z-10 flex-1 flex flex-col items-center justify-center px-4 py-4",children:[n.jsxs("div",{className:"mb-3 text-center slide-up",children:[n.jsx("h1",{className:"text-2xl font-black text-white mb-2",children:r?"TREASURE FOUND!":"ISLAND COMPLETE!"}),n.jsx("div",{className:"text-5xl bounce-animation",children:r?e.rewards.treasurePiece:"🏝️"})]}),n.jsxs("div",{className:"glass-card rounded-2xl p-3 max-w-md w-full mb-2 slide-up",style:{animationDelay:"0.2s",background:"rgba(46, 46, 32, 0.25)"},children:[n.jsxs("div",{className:"text-center mb-2",children:[n.jsxs("div",{className:"text-3xl font-black text-white mb-1",children:[t.correctAnswers,"/",De.QUESTIONS_PER_ISLAND]}),n.jsx("div",{className:"text-white/80 font-medium",children:"Questions Correct"})]}),m&&n.jsx("div",{className:"flex justify-center gap-2 mb-2",children:[...Array(3)].map((x,j)=>n.jsx("div",{className:`text-3xl ${j<t.correctAnswers?"star-pop":""}`,style:{animationDelay:`${j*.2}s`},children:j<t.correctAnswers?"⭐":"☆"},j))}),c&&r&&n.jsxs("div",{className:"text-center mb-2",children:[n.jsx("div",{className:"text-5xl treasure-shine mb-1",children:e.rewards.treasurePiece}),n.jsx("div",{className:"text-white font-bold text-lg",children:"Treasure Piece Earned!"})]}),n.jsxs("div",{className:"grid grid-cols-2 gap-2 mb-2",children:[n.jsxs("div",{className:"glass-card rounded-2xl p-4 text-center",children:[n.jsx("div",{className:"text-4xl mb-1",children:"🪙"}),n.jsx("div",{className:"text-3xl font-black text-yellow-300",children:i}),n.jsx("div",{className:"text-white/70 text-sm",children:"Coins Earned"})]}),n.jsxs("div",{className:"glass-card rounded-2xl p-4 text-center",children:[n.jsx("div",{className:"text-4xl mb-2",children:"💎"}),n.jsx("div",{className:"text-3xl font-black text-cyan-300",children:t.gemsFound}),n.jsx("div",{className:"text-white/70 text-sm",children:"Gems Found"})]})]}),n.jsx("div",{className:"text-center p-4 bg-white/10 rounded-1xl",children:n.jsx("p",{className:"text-white font-medium text-lg",children:w})}),f&&n.jsx("div",{className:"mt-4 text-center",children:n.jsx("div",{className:"inline-block px-6 py-3 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full",children:n.jsx("span",{className:"text-white font-black text-lg",children:"💯 PERFECT SCORE! 💯"})})})]}),n.jsxs("div",{className:"space-y-3 w-full max-w-md slide-up",style:{animationDelay:"0.4s"},children:[!r&&n.jsx("button",{onClick:s,className:"w-full py-4 bg-gradient-to-r from-orange-400 to-red-500 text-white rounded-2xl font-black text-lg shadow-xl hover:shadow-2xl transition-all hover:scale-[1.02] active:scale-[0.98]",children:n.jsxs("div",{className:"flex items-center justify-center gap-3",children:[n.jsx("span",{className:"text-2xl",children:"🔄"}),n.jsx("span",{children:"Try Again"})]})}),n.jsx("button",{onClick:a,className:"w-full py-3 bg-gradient-to-r from-white to-gray-100 text-gray-800 rounded-2xl font-black text-lg shadow-xl hover:shadow-2xl transition-all hover:scale-[1.02] active:scale-[0.98]",children:n.jsxs("div",{className:"flex items-center justify-center gap-3",children:[n.jsx("span",{className:"text-2xl",children:"🗺️"}),n.jsx("span",{children:"Back to Map"})]})})]})]})]})}function Yg({totalStats:e,onContinue:t,soundOn:r}){const[s,a]=d.useState(!1),[o,i]=d.useState(!1),[l,c]=d.useState(!1),[u,m]=d.useState(!1),[p,f]=d.useState(!1);return d.useEffect(()=>{(async()=>{await new Promise(x=>setTimeout(x,500)),a(!0),await new Promise(x=>setTimeout(x,1e3)),i(!0),f(!0),await new Promise(x=>setTimeout(x,800)),c(!0),await new Promise(x=>setTimeout(x,1e3)),m(!0)})()},[]),n.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-purple-600 via-pink-600 to-yellow-500 relative overflow-hidden",children:[n.jsx("style",{jsx:!0,children:`
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
      `}),p&&n.jsx("div",{className:"fixed inset-0 pointer-events-none",children:[...Array(15)].map((w,x)=>n.jsx("div",{className:"absolute firework",style:{left:`${20+Math.random()*60}%`,top:`${20+Math.random()*60}%`,animationDelay:`${Math.random()*2}s`,fontSize:`${40+Math.random()*40}px`},children:["✨","⭐","💫","🌟"][Math.floor(Math.random()*4)]},x))}),n.jsx("div",{className:"fixed inset-0 pointer-events-none",children:[...Array(20)].map((w,x)=>n.jsx("div",{className:"absolute coin-rain",style:{left:`${Math.random()*100}%`,animationDelay:`${Math.random()*3}s`,animationDuration:`${3+Math.random()*2}s`,fontSize:`${20+Math.random()*20}px`},children:["🪙","💰","💎"][Math.floor(Math.random()*3)]},x))}),n.jsxs("div",{className:"relative z-10 flex flex-col items-center justify-center min-h-screen px-6",children:[n.jsxs("div",{className:"text-center mb-8",children:[n.jsx("h1",{className:"text-6xl font-black text-white mb-4",children:"LEGENDARY!"}),n.jsx("div",{className:"text-8xl bounce-animation",children:"👑"})]}),s&&n.jsxs("div",{className:`relative mb-8 ${s?"chest-appear":""}`,children:[n.jsx("div",{className:`text-[150px] ${o?"chest-open":""}`,children:"📦"}),o&&n.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:sr.map((w,x)=>n.jsx("div",{className:"absolute text-6xl float-animation treasure-glow",style:{transform:`rotate(${x*72}deg) translateY(-100px)`,animationDelay:`${x*.2}s`},children:w.rewards.treasurePiece},w.id))})]}),l&&n.jsxs("div",{className:"glass-card rounded-3xl p-6 max-w-md w-full mb-6",children:[n.jsx("h2",{className:"text-2xl font-black text-white text-center mb-6",children:"🏆 FINAL TREASURE UNLOCKED! 🏆"}),n.jsx("div",{className:"bg-gradient-to-r from-yellow-400 to-amber-500 rounded-2xl p-4 mb-4",children:n.jsxs("div",{className:"text-center",children:[n.jsx("div",{className:"text-5xl mb-2",children:"💰"}),n.jsx("div",{className:"text-4xl font-black text-white",children:De.FINAL_TREASURE_REWARD}),n.jsx("div",{className:"text-white/90 font-medium",children:"Bonus Coins!"})]})}),n.jsxs("div",{className:"grid grid-cols-2 gap-3 mb-4",children:[n.jsxs("div",{className:"glass-card rounded-xl p-3 text-center",children:[n.jsx("div",{className:"text-3xl mb-1",children:"🏝️"}),n.jsx("div",{className:"text-2xl font-black text-white",children:"5/5"}),n.jsx("div",{className:"text-white/70 text-xs",children:"Islands"})]}),n.jsxs("div",{className:"glass-card rounded-xl p-3 text-center",children:[n.jsx("div",{className:"text-3xl mb-1",children:"🧩"}),n.jsx("div",{className:"text-2xl font-black text-white",children:"5/5"}),n.jsx("div",{className:"text-white/70 text-xs",children:"Treasures"})]}),n.jsxs("div",{className:"glass-card rounded-xl p-3 text-center",children:[n.jsx("div",{className:"text-3xl mb-1",children:"💰"}),n.jsx("div",{className:"text-2xl font-black text-yellow-300",children:e.totalCoinsEarned+De.FINAL_TREASURE_REWARD}),n.jsx("div",{className:"text-white/70 text-xs",children:"Total Coins"})]}),n.jsxs("div",{className:"glass-card rounded-xl p-3 text-center",children:[n.jsx("div",{className:"text-3xl mb-1",children:"💎"}),n.jsx("div",{className:"text-2xl font-black text-cyan-300",children:e.totalGemsFound}),n.jsx("div",{className:"text-white/70 text-xs",children:"Total Gems"})]})]}),u&&n.jsxs("div",{className:"text-center p-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl",children:[n.jsx("div",{className:"text-3xl mb-2",children:"🏆"}),n.jsx("div",{className:"text-xl font-black text-white title-shine",children:De.FINAL_TREASURE_TITLE}),n.jsx("div",{className:"text-white/90 text-sm mt-1",children:"New Title Unlocked!"})]})]}),l&&n.jsx("button",{onClick:t,className:"w-full max-w-md py-4 bg-gradient-to-r from-white to-gray-100 text-gray-800 rounded-2xl font-black text-lg shadow-xl hover:shadow-2xl transition-all hover:scale-[1.02] active:scale-[0.98]",children:n.jsxs("div",{className:"flex items-center justify-center gap-3",children:[n.jsx("span",{className:"text-2xl",children:"🎉"}),n.jsx("span",{children:"Complete Adventure"}),n.jsx("span",{className:"text-2xl",children:"🎉"})]})}),n.jsx("div",{className:"absolute inset-0 pointer-events-none",children:[...Array(10)].map((w,x)=>n.jsx("div",{className:"absolute text-2xl sparkle-animation",style:{left:`${Math.random()*100}%`,top:`${Math.random()*100}%`,animationDelay:`${Math.random()*2}s`},children:"✨"},x))})]})]})}function qg({onBack:e}){const{coins:t,xp:r,level:s,soundOn:a,setSoundOn:o}=Ao(),[i,l]=d.useState(!1),[c,u]=d.useState("map"),[m,p]=d.useState(null),[f,w]=d.useState([]),[x,j]=d.useState(()=>{const D=localStorage.getItem(De.STORAGE_KEYS.PROGRESS);if(D)try{return JSON.parse(D)}catch(L){console.error("Failed to load progress:",L)}return sr.reduce((L,T)=>(L[T.id]={unlocked:T.id===1,completed:!1,treasurePiece:!1,perfectScore:!1,bestScore:0,attempts:0},L),{})}),[S,y]=d.useState({islandId:null,questions:[],currentQuestionIndex:0,shovelsRemaining:De.SHOVELS_PER_ISLAND,correctAnswers:0,wrongAnswers:0,timeRemaining:300,gemsFound:0,coinsEarned:0,questionTimes:[],startTime:null}),[g,v]=d.useState(()=>{const D=localStorage.getItem(De.STORAGE_KEYS.STATS);if(D)try{return JSON.parse(D)}catch(L){console.error("Failed to load stats:",L)}return{totalCoinsEarned:0,totalGemsFound:0,totalTreasurePieces:0,totalQuestionsAnswered:0,totalCorrectAnswers:0,islandsCompleted:0,gameCompleted:!1}}),N=d.useRef(null),C=d.useRef(null);d.useEffect(()=>(R(),window.history.pushState({mode:"treasureHunt"},"",window.location.href),()=>{N.current&&clearInterval(N.current)}),[]),d.useEffect(()=>{localStorage.setItem(De.STORAGE_KEYS.PROGRESS,JSON.stringify(x))},[x]),d.useEffect(()=>{localStorage.setItem(De.STORAGE_KEYS.STATS,JSON.stringify(g))},[g]),d.useEffect(()=>(c==="playing"&&S.timeRemaining>0?N.current=setInterval(()=>{y(D=>{const L=D.timeRemaining-1;return L<=0?(_(),{...D,timeRemaining:0}):(L===30&&a&&q(De.SOUNDS.TICK,.6),{...D,timeRemaining:L})})},1e3):N.current&&clearInterval(N.current),()=>{N.current&&clearInterval(N.current)}),[c,S.timeRemaining,a]),d.useEffect(()=>{const D=L=>{L.preventDefault(),c==="map"&&!i?(l(!0),window.history.pushState({mode:"treasureHunt"},"",window.location.href)):c!=="map"&&(u("map"),p(null),window.history.pushState({mode:"treasureHunt"},"",window.location.href))};return window.addEventListener("popstate",D),()=>window.removeEventListener("popstate",D)},[c,i]);const R=async()=>{try{const L=await(await fetch("/data/quiz_questions_bank.csv")).text(),{data:T}=hr.parse(L,{header:!0,skipEmptyLines:!0,transformHeader:B=>B.trim().toLowerCase()}),z=T.map((B,W)=>{var M;const $=[B.option1,B.option2,B.option3,B.option4].map(ee=>(ee||"").trim()).filter(Boolean);if($.length<4)return null;let U={a:0,b:1,c:2,d:3}[(M=B.answer)==null?void 0:M.toLowerCase()];return U===void 0&&(U=$.findIndex(ee=>ee.toLowerCase()===(B.answer||"").toLowerCase())),U===-1&&(U=0),{id:B.id||`q_${W}`,prompt:(B.question||"").trim(),options:$,correctIndex:U,category:(B.category||B.subject||"general").trim(),difficulty:(B.difficulty||"medium").toLowerCase()}}).filter(Boolean);w(z)}catch(D){console.error("Failed to load questions:",D)}},E=D=>{const L=ln(D);if(!L||f.length===0)return[];let T=f.filter(B=>L.questionDifficulty.includes(B.difficulty));return T.length<De.QUESTIONS_PER_ISLAND&&(T=f),[...T].sort(()=>Math.random()-.5).slice(0,De.QUESTIONS_PER_ISLAND)},h=D=>{if(!Lg(D,x)){a&&q("/sounds/locked.mp3",.5),O([100]);return}p(D),u("island-detail"),a&&q("/sounds/select.mp3",.5)},b=D=>{const L=ln(D),T=E(D);y({islandId:D,questions:T,currentQuestionIndex:0,shovelsRemaining:De.SHOVELS_PER_ISLAND,correctAnswers:0,wrongAnswers:0,timeRemaining:L.timeLimit,gemsFound:0,coinsEarned:0,questionTimes:[],startTime:Date.now()}),C.current=Date.now(),u("playing"),a&&q("/sounds/start.mp3",.6)},k=D=>{const L=S.questions[S.currentQuestionIndex],T=D===L.correctIndex,z=(Date.now()-C.current)/1e3;y(B=>{const W={...B,questionTimes:[...B.questionTimes,z]};if(T){const $=ln(B.islandId);let Z=$.rewards.perCorrectAnswer;z<De.SPEED_BONUS_THRESHOLD&&(Z+=$.rewards.speedBonus),Math.random()<$.rewards.gemChance&&(Z+=$.rewards.gemBonus,W.gemsFound=B.gemsFound+1),W.correctAnswers=B.correctAnswers+1,W.coinsEarned=B.coinsEarned+Z}else W.wrongAnswers=B.wrongAnswers+1,W.shovelsRemaining=B.shovelsRemaining-1,O([200]);return W}),setTimeout(()=>{const B=S.currentQuestionIndex+1;S.shovelsRemaining===0&&!T||B>=De.QUESTIONS_PER_ISLAND?P():(y(W=>({...W,currentQuestionIndex:B})),C.current=Date.now())},T?2e3:1500)},_=()=>{P()},P=()=>{const D=ln(S.islandId),L=S.correctAnswers>=D.requiredCorrect,T=S.correctAnswers===De.QUESTIONS_PER_ISLAND;let z=S.coinsEarned;T&&(z+=D.rewards.perfectBonus),L&&(z+=D.rewards.completionCoins),j(W=>{const $={...W},Z=$[S.islandId];if(Z.completed=!0,Z.attempts+=1,L&&!Z.treasurePiece){Z.treasurePiece=!0;const U=sr.find(M=>M.id===S.islandId+1);U&&$[U.id]&&($[U.id].unlocked=!0,a&&setTimeout(()=>q(De.SOUNDS.ISLAND_UNLOCK,.7),2e3))}return T&&(Z.perfectScore=!0),Z.bestScore=Math.max(Z.bestScore||0,S.correctAnswers),$}),v(W=>({...W,totalCoinsEarned:W.totalCoinsEarned+z,totalGemsFound:W.totalGemsFound+S.gemsFound,totalTreasurePieces:W.totalTreasurePieces+(L&&!x[S.islandId].treasurePiece?1:0),totalQuestionsAnswered:W.totalQuestionsAnswered+(S.correctAnswers+S.wrongAnswers),totalCorrectAnswers:W.totalCorrectAnswers+S.correctAnswers,islandsCompleted:W.islandsCompleted+(x[S.islandId].completed?0:1)})),ie.addCoins(z,`Treasure Hunt - ${D.name} Island`),ie.addXP(S.correctAnswers),y(W=>({...W,coinsEarned:z})),a&&q(L?De.SOUNDS.TREASURE_FOUND:De.SOUNDS.ISLAND_COMPLETE,.7),sr.every(W=>{var $;return(($=x[W.id])==null?void 0:$.treasurePiece)===!0})&&!g.gameCompleted?(v(W=>({...W,gameCompleted:!0})),setTimeout(()=>{u("final-treasure"),a&&q(De.SOUNDS.FINAL_TREASURE,.8)},3e3)):u("reward")},F=()=>{b(S.islandId)},Q=()=>{u("map"),p(null)},J=()=>{ie.addCoins(De.FINAL_TREASURE_REWARD,"Treasure Hunt - Final Treasure"),ie.addXP(10),v(D=>({...D,totalCoinsEarned:D.totalCoinsEarned+De.FINAL_TREASURE_REWARD})),u("map")},H=()=>{window.history.go(-1),e()},q=(D,L=.5)=>{try{const T=new Audio(D);T.volume=L,T.play()}catch(T){console.error("Failed to play sound:",T)}},O=D=>{navigator.vibrate&&navigator.vibrate(D)};d.useEffect(()=>(document.body.classList.add("hide-bottom-nav"),()=>{document.body.classList.remove("hide-bottom-nav")}),[]);let I=null;switch(c){case"map":I=n.jsx(Mg,{islands:sr,islandProgress:x,onSelectIsland:h,onBack:()=>l(!0),soundOn:a,setSoundOn:o,totalStats:g});break;case"island-detail":I=n.jsx(Og,{island:ln(m),progress:x[m],onStart:()=>b(m),onClose:()=>u("map"),soundOn:a});break;case"playing":I=n.jsx(Bg,{island:ln(S.islandId),question:S.questions[S.currentQuestionIndex],questionNumber:S.currentQuestionIndex+1,totalQuestions:De.QUESTIONS_PER_ISLAND,shovelsRemaining:S.shovelsRemaining,timeRemaining:S.timeRemaining,coinsEarned:S.coinsEarned,gemsFound:S.gemsFound,onAnswer:k,onQuit:()=>u("map"),soundOn:a,setSoundOn:o});break;case"reward":I=n.jsx(Ug,{island:ln(S.islandId),session:S,earnedTreasure:S.correctAnswers>=ln(S.islandId).requiredCorrect,onRetry:F,onContinue:Q,soundOn:a});break;case"final-treasure":I=n.jsx(Yg,{totalStats:g,onContinue:J,soundOn:a});break;default:I=null}return n.jsxs(n.Fragment,{children:[I,i&&n.jsx("div",{className:"fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 px-6",children:n.jsxs("div",{className:"bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-6 max-w-sm w-full shadow-2xl border border-white/10",children:[n.jsxs("div",{className:"text-center mb-6",children:[n.jsx("div",{className:"text-5xl mb-3",children:"🏝️"}),n.jsx("h3",{className:"text-xl font-bold text-white mb-2",children:"Leave Treasure Hunt?"}),n.jsx("p",{className:"text-white/70",children:"Your island progress is saved!"})]}),n.jsxs("div",{className:"flex gap-3",children:[n.jsx("button",{onClick:()=>l(!1),className:"flex-1 py-3 bg-gradient-to-r from-green-400 to-emerald-500 text-white rounded-2xl font-bold shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]",children:"Keep Playing"}),n.jsx("button",{onClick:H,className:"flex-1 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-2xl font-bold shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]",children:"Exit"})]})]})})]})}const Qg=[{name:"General Knowledge",questions:50,icon:"🧠",color:"#7C3AED"},{name:"Artificial Intelligence",questions:28,icon:"🤖",color:"#10B981"},{name:"Fun facts",questions:30,icon:"🎉",color:"#EF4444"},{name:"Science",questions:45,icon:"🧪",color:"#F59E0B"},{name:"History",questions:42,icon:"🏺",color:"#2563EB"},{name:"Geography",questions:38,icon:"🗺️",color:"#FACC15"}],Dm=Qg.slice(0,6),di=360/Dm.length;function Gg({onModeSelect:e,onNavigateHome:t}){return n.jsx("div",{className:"fixed inset-0 bg-base-bg text-base-text overflow-hidden",children:n.jsxs("div",{className:"h-full overflow-y-auto mx-auto max-w-md px-4 pt-[calc(env(safe-area-inset-top)+5rem)] pb-[calc(env(safe-area-inset-bottom)+5.25rem)]",children:[n.jsx("header",{className:"flex items-center mb-8",children:n.jsx("h1",{className:"text-center text-xl font-bold w-full",children:"Choose a quiz mode"})}),n.jsxs("div",{className:"space-y-8",children:[n.jsxs("button",{onClick:()=>e("classic"),className:"w-full relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-400 to-blue-500 p-8 text-left shadow-lg hover:shadow-xl transition-all active:scale-[0.98]",children:[n.jsx("div",{className:"absolute top-0 right-0 w-32 h-32 opacity-30",children:n.jsxs("svg",{viewBox:"0 0 100 100",className:"w-full h-full animate-spin",style:{animationDuration:"20s"},children:[Dm.map((r,s)=>{const a=s*di,o=a+di,i=di>180?1:0,l=Math.PI*a/180,c=Math.PI*o/180,u=50+40*Math.cos(l),m=50-40*Math.sin(l),p=50+40*Math.cos(c),f=50-40*Math.sin(c);return n.jsx("path",{d:`M50,50 L${u},${m} A40,40 0 ${i} 0 ${p},${f} Z`,fill:r.color,stroke:"white",strokeWidth:"0.5"},s)}),n.jsx("circle",{cx:"50",cy:"50",r:"8",fill:"white"})]})}),n.jsx("div",{className:"absolute top-4 left-8 text-3xl opacity-60",children:"🏆"}),n.jsx("div",{className:"absolute top-12 right-16 text-xl opacity-40",children:"⭐"}),n.jsx("div",{className:"absolute bottom-6 left-6 text-2xl opacity-50",children:"🎲"}),n.jsx("div",{className:"absolute bottom-4 right-12 text-3xl opacity-60",children:"🍪"}),n.jsx("div",{className:"absolute top-1/2 left-4 text-lg opacity-40",children:"🥨"}),n.jsx("h2",{className:"text-5xl font-black text-white mb-10 relative z-10",style:{transform:"translateX(-20px)"},children:"CLASSIC"})]}),n.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[n.jsxs("button",{onClick:()=>e("survival"),className:"aspect-square rounded-3xl bg-gradient-to-br from-yellow-400 to-orange-400 p-4 text-left hover:shadow-xl transition-all active:scale-[0.98] relative overflow-hidden",children:[n.jsx("div",{className:"text-2xl mb-2",children:"💀"}),n.jsx("h4",{className:"text-lg font-black text-white",children:"SURVIVAL"})]}),n.jsxs("button",{onClick:()=>e("treasureHunt"),className:"aspect-square rounded-3xl bg-gradient-to-br from-purple-400 to-green-500 p-4 text-left hover:shadow-xl transition-all active:scale-[0.98] relative overflow-hidden",children:[n.jsxs("div",{className:"absolute inset-0 opacity-20",children:[n.jsx("div",{className:"absolute top-2 right-2 text-4xl animate-pulse",children:"🏝️"}),n.jsx("div",{className:"absolute bottom-2 left-2 text-3xl animate-bounce",style:{animationDelay:"0.5s"},children:"⛏️"}),n.jsx("div",{className:"absolute top-1/2 right-4 text-2xl animate-pulse",style:{animationDelay:"1s"},children:"💎"})]}),n.jsx("div",{className:"text-2xl mb-2 relative z-10",children:"🏴‍☠️"}),n.jsx("h4",{className:"text-lg font-black text-white relative z-10",children:"TREASURE HUNT"}),n.jsx("div",{className:"absolute bottom-2 right-2",children:n.jsx("span",{className:"text-xs bg-white/20 px-2 py-1 rounded-full text-white font-bold",children:"NEW!"})})]}),n.jsxs("button",{disabled:!0,className:"aspect-square rounded-3xl bg-gradient-to-br from-pink-500 to-purple-500 p-4 text-left opacity-60",children:[n.jsx("div",{className:"text-2xl mb-2",children:"⚔️"}),n.jsx("h4",{className:"text-lg font-black text-white",children:"SURVIVAL ARENA"})]}),n.jsxs("button",{disabled:!0,className:"aspect-square rounded-3xl bg-gradient-to-br from-blue-400 to-cyan-400 p-4 text-left opacity-60",children:[n.jsx("div",{className:"text-2xl mb-2",children:"📱"}),n.jsx("h4",{className:"text-lg font-black text-white",children:"TRIVIA VIDEO"})]})]})]})]})})}function Wg(){const[e,t]=d.useState(null),r=ke(),s=et();d.useEffect(()=>{const l=new URLSearchParams(s.search);l.get("mode")==="survival"&&l.get("from")==="quest"&&t("survival")},[s]);const a=l=>{l==="classic"?t("classic"):l==="survival"?t("survival"):l==="treasureHunt"&&t("treasureHunt")},o=()=>{r("/")},i=()=>{t(null)};if(e==="classic")return n.jsx(Pg,{onBack:i});if(e==="survival"){const c=new URLSearchParams(s.search).get("from")==="quest";return n.jsx(Ig,{onBack:i,isFromQuest:c})}return e==="treasureHunt"?n.jsx(qg,{onBack:i}):n.jsx(Gg,{onModeSelect:a,onNavigateHome:o})}const Hg=({session:e,mode:t,category:r,difficulty:s,timerConfig:a,onComplete:o,onQuit:i})=>{const l=ke(),[c,u]=d.useState(0),[m,p]=d.useState([]),[f,w]=d.useState([]),[x,j]=d.useState([]),[S,y]=d.useState(!1),[g,v]=d.useState(null),[N,C]=d.useState(Date.now()),[R,E]=d.useState(0),[h,b]=d.useState([]);d.useState(!1),d.useState(!1);const[k,_]=d.useState({}),[P,F]=d.useState({}),[Q,J]=d.useState([]);d.useState(!0);const[H,q]=d.useState([]),[O,I]=d.useState(0),[D,L]=d.useState(0),[T,z]=d.useState(!1),[B,W]=d.useState(!1),[$,Z]=d.useState(""),[U,M]=d.useState(!1),[ee,G]=d.useState(!1),[K,X]=d.useState(!0),[V,Y]=d.useState(!1),[A,te]=d.useState(0),[se,le]=d.useState(0),[de,ve]=d.useState(0),[Se,mt]=d.useState(0),[we,Ge]=d.useState(null),[Ce,$e]=d.useState(0),ft=d.useRef(null),lt=d.useRef(null),Ee=t==="practice",Be=m[c],tt=ue=>{try{const he=new Audio(ue);he.volume=.6,he.play()}catch{console.log("Sound not available:",ue)}},Pt=[{id:1,category:"General Knowledge",difficulty:"medium",prompt:"Which element has the atomic number 1?",options:["Helium","Carbon","Hydrogen","Oxygen"],answerIndex:2,explanation:"Hydrogen is the first element on the periodic table with atomic number 1!"},{id:2,category:"General Knowledge",difficulty:"medium",prompt:"What is the largest ocean on Earth?",options:["Atlantic","Pacific","Indian","Arctic"],answerIndex:1,explanation:"The Pacific Ocean covers about one-third of Earth's surface!"},{id:3,category:"General Knowledge",difficulty:"easy",prompt:"What color do you get when you mix red and yellow?",options:["Purple","Orange","Green","Pink"],answerIndex:1,explanation:"Red and yellow make orange - like a beautiful sunset!"}],Ae=e&&e.questions&&Array.isArray(e.questions)&&e.questions.length>0?e.questions:Pt,Te=Ae[c]||Ae[0]||Pt[0],Ue=Ae.length;d.useEffect(()=>{const ue=ie.getCoins();ve(ue)},[]),d.useEffect(()=>{Ae.length>0&&(p(new Array(Ae.length).fill(null)),w(new Array(Ae.length).fill(!1)),J(new Array(Ae.length).fill(!1)),j(new Array(Ae.length).fill((a==null?void 0:a.seconds)||45)))},[Ae.length,a==null?void 0:a.seconds]);const on=()=>{const ue=new Date;return`${ue.getFullYear()}-${ue.getMonth()+1}-${ue.getDate()}`},Xr=()=>{Ee&&window.location.search.includes("from=quest")?l("/profile/quests",{state:{questCompleted:!0,questType:"practiceQuestions"}}):i()},Vr=d.useCallback((ue,he)=>{if(!Te||Ee&&Q[c]||k[c]&&k[c].includes(ue))return;const ne=[...m];if(ne[c]=m[c]===ue?null:ue,p(ne),C(Date.now()),Ee&&!h.includes(c)&&ne[c]!==null){const xe=h.length+1;if(E(xe),b(pe=>[...pe,c]),window.location.search.includes("from=quest")){let pe={};try{const Me=localStorage.getItem("questProgress");Me&&(pe=JSON.parse(Me))}catch(Me){console.error("Error reading progress:",Me)}const fe=pe.practiceQuestions||0;pe.practiceQuestions=Math.max(fe,xe),pe.date=`${new Date().getFullYear()}-${new Date().getMonth()+1}-${new Date().getDate()}`,localStorage.setItem("questProgress",JSON.stringify(pe)),console.log("Saved practice progress:",pe.practiceQuestions),window.dispatchEvent(new CustomEvent("questProgressUpdate",{detail:{practiceQuestions:pe.practiceQuestions}}))}}ne[c]!==null&&(X(!1),clearInterval(lt.current));const ce=ne[c]===Te.answerIndex;if(ce){const xe=Se+1;if(mt(xe),I(pe=>pe+1),L(0),Ee){te(fe=>fe+1);const pe=2;le(fe=>fe+pe),ve(fe=>fe+pe),tt("/sounds/correct.mp3"),setTimeout(()=>tt("/sounds/coin.mp3"),500),G(!0),setTimeout(()=>G(!1),2e3),Ge({type:"correct",stars:1,coins:2}),setTimeout(()=>Ge(null),2e3)}}else ne[c]!==null&&(mt(0),I(0),L(xe=>xe+1),Ee&&tt("/sounds/wrong.mp3"));if(q(xe=>[...xe.slice(-2),ce]),ne[c]!==null&&f[c]){const xe=[...f];xe[c]=!1,w(xe)}Ee&&ne[c]!==null&&(M(!0),J(xe=>{const pe=[...xe];return pe[c]=!0,pe})),!Ee&&ne[c]!==null&&(clearTimeout(ft.current),ft.current=setTimeout(()=>{c<Ue-1?ae():(z(!0),y(!0))},5e3))},[Te,Ee,Q,c,m,f,Ue,Se,k,H,O,R,h]),Jr=()=>{C(Date.now()),c>0&&(clearInterval(lt.current),X(!1),u(ue=>ue-1),M(!1),Ee&&m[c-1]!==null&&setTimeout(()=>M(!0),100))},ae=()=>{if(C(Date.now()),clearInterval(lt.current),Be===null){const ue=[...f];ue[c]=!0,w(ue),mt(0)}X(!1),M(!1),c<Ue-1?(u(ue=>ue+1),Ee&&m[c+1]!==null?setTimeout(()=>M(!0),100):setTimeout(()=>X(!0),100)):z(!0)},me=()=>{C(Date.now());const ue=[...f];ue[c]=!0,w(ue),mt(0),ae()},Ne=()=>{const ue=Ae.reduce((he,ne,ce)=>he+(m[ce]===ne.answerIndex?1:0),0);if(Ee&&window.location.search.includes("from=quest")){const he=m.filter(ce=>ce!==null).length,ne=JSON.parse(localStorage.getItem("questProgress")||"{}");ne.practiceQuestions=Math.min(he,15),ne.date=on(),localStorage.setItem("questProgress",JSON.stringify(ne)),console.log("Final practice progress saved:",ne.practiceQuestions)}if(Ee)o&&o({questions:Ae,answers:m,skipped:f,correct:ue,total:Ue,mode:t,category:r,difficulty:s,earnedStars:A,earnedCoins:se,finalStreak:Se});else{const he=ue*10;$e(he),o&&o({questions:Ae,answers:m,skipped:f,correct:ue,total:Ue,mode:t,category:r,difficulty:s,earnedStars:0,earnedCoins:he,finalStreak:Se})}};d.useEffect(()=>{if(!(S||g!==null||T||!K||m[c]!==null))return lt.current=setInterval(()=>{j(ue=>{const he=[...ue],ne=he[c];return ne<=1?(clearInterval(lt.current),c===Ue-1?(Date.now()-N>=5e3&&z(!0),he):(v(c),he)):(he[c]=ne-1,he)})},1e3),()=>clearInterval(lt.current)},[S,g,c,T,Ue,K,m,N]),d.useEffect(()=>{m[c]===null&&!T&&!g?X(!0):X(!1)},[c,m,T,g]);const ye=ue=>{const he=Math.floor(ue/60),ne=ue%60;return`${he}:${ne.toString().padStart(2,"0")}`},We=(c+1)/Ae.length*100,je=m.filter(ue=>ue!==null).length,He=f.filter(Boolean).length,Pe=x[c]||0;Ae.reduce((ue,he,ne)=>ue+(m[ne]===he.answerIndex?1:0),0);const Xe=Ee&&U&&Be!==null;return n.jsxs("div",{className:"h-dvh bg-gray-900 text-white flex flex-col overflow-hidden pt-[env(safe-area-inset-top,0px)]",children:[we&&n.jsx("div",{className:"fixed inset-0 flex items-center justify-center z-50 pointer-events-none",children:n.jsxs("div",{className:"bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-8 py-4 rounded-full text-xl font-bold animate-bounce shadow-2xl",children:["+",we.coins," Coins!"]})}),ee&&n.jsx("div",{className:"fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-40 pointer-events-none",children:[...Array(8)].map((ue,he)=>n.jsx("div",{className:"absolute text-3xl animate-ping",style:{left:`${-30+Math.random()*60}px`,top:`${-30+Math.random()*60}px`,animationDelay:`${he*150}ms`,animationDuration:"2s"},children:"🪙"},he))}),n.jsxs("div",{className:"bg-gray-900 flex-shrink-0 pt-10",children:[n.jsxs("div",{className:"flex items-center justify-between px-4 py-2 border-b border-gray-800 shadow-lg",children:[n.jsxs("button",{onClick:()=>W(!0),className:"bg-gray-700 hover:bg-gray-600 px-3 py-1.5 rounded-full flex items-center gap-2 transition-colors text-sm",children:[n.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:n.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 19l-7-7 7-7"})}),n.jsx("span",{className:"font-medium",children:"Back"})]}),n.jsx("div",{className:"flex-1"}),n.jsxs("div",{className:"flex items-center gap-2",children:[Ee&&n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:"bg-yellow-600/20 px-2 py-1 rounded-full flex items-center gap-1",children:[n.jsx("span",{className:"text-yellow-400 text-sm",children:"🪙"}),n.jsx("span",{className:"text-yellow-200 font-semibold text-sm",children:de})]}),n.jsxs("div",{className:"bg-orange-600/20 px-2 py-1 rounded-full flex items-center gap-1",children:[n.jsx("span",{className:"text-orange-400 text-sm",children:"🔥"}),n.jsx("span",{className:"text-orange-200 font-semibold text-sm",children:Se})]})]}),n.jsx("div",{className:`px-2 py-1 rounded-full font-mono font-semibold text-sm ${Pe<=10?"bg-red-600/20 text-red-400 animate-pulse":Pe<=30?"bg-yellow-600/20 text-yellow-400":"bg-green-600/20 text-green-400"}`,children:ye(Pe)})]})]}),n.jsxs("div",{className:"px-4 pb-1 bg-gray-900",children:[n.jsxs("div",{className:"flex justify-between items-center mb-1",children:[n.jsxs("span",{className:"text-xs text-gray-400",children:["Question ",c+1," of ",Ue]}),n.jsxs("span",{className:"text-xs text-gray-400",children:[Math.round(We),"% Complete"]})]}),n.jsx("div",{className:"h-2 bg-gray-700 rounded-full overflow-hidden",children:n.jsx("div",{className:"h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-500",style:{width:`${We}%`}})}),n.jsx("div",{className:"flex justify-center gap-1 mt-1",children:Array.from({length:Ue}).map((ue,he)=>n.jsx("div",{className:`w-1.5 h-1.5 rounded-full transition-all ${he===c?"bg-white scale-125":m[he]!==null?"bg-green-500":f[he]?"bg-yellow-500":"bg-gray-600"}`},he))}),n.jsx("div",{className:"text-center mt-4",children:n.jsx("span",{className:"text-xs text-gray-500",children:Te.category})})]})]}),n.jsx("div",{className:`flex-1 flex flex-col ${Xe?"overflow-y-auto":"overflow-hidden"}`,children:n.jsxs("div",{className:"px-4 py-4 flex-1 flex flex-col",children:[n.jsxs("div",{className:"relative bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 rounded-3xl p-6 mb-4 shadow-2xl shadow-blue-600/20 border border-blue-400/20",children:[n.jsx("div",{className:"absolute top-2 right-2 w-16 h-16 bg-white/10 rounded-full blur-xl"}),n.jsx("div",{className:"absolute bottom-2 left-2 w-12 h-12 bg-white/5 rounded-full blur-lg"}),n.jsxs("div",{className:"relative text-center",children:[n.jsxs("div",{className:"inline-block bg-white/10 px-3 py-1 rounded-full text-xs font-medium text-blue-100 mb-3",children:["Question ",c+1]}),n.jsx("h2",{className:"text-xl font-bold leading-relaxed text-white tracking-wide",children:Te.prompt}),Te.difficulty&&n.jsx("div",{className:"mt-3 inline-block",children:n.jsx("span",{className:`px-2 py-1 rounded-full text-xs font-semibold ${Te.difficulty==="easy"?"bg-green-500/20 text-green-300":Te.difficulty==="medium"?"bg-yellow-500/20 text-yellow-300":"bg-red-500/20 text-red-300"}`,children:Te.difficulty.toUpperCase()})})]})]}),n.jsx("div",{className:"grid grid-cols-1 gap-3 mb-4",children:Te.options.map((ue,he)=>{const ne=Be===he,ce=he===Te.answerIndex,xe=Ee&&Be!==null&&U,pe=k[c]&&k[c].includes(he);let fe="p-4 rounded-xl transition-all duration-300 border-2 min-h-[64px] flex items-center ";pe?fe+="bg-gray-700/30 border-gray-600/30 text-gray-500/50 cursor-not-allowed":(fe+="cursor-pointer ",xe?ne&&ce?fe+="bg-green-600 border-green-500 text-white shadow-lg shadow-green-600/25":ne&&!ce?fe+="bg-red-600 border-red-500 text-white shadow-lg shadow-red-600/25":!ne&&ce?fe+="bg-green-600/20 border-green-500 text-green-300 animate-pulse":fe+="bg-gray-700 border-gray-600 text-gray-400":ne?fe+="bg-gray-600 border-gray-500 text-white":fe+="bg-gray-800 border-gray-700 text-gray-200 hover:bg-gray-750 hover:border-gray-600");const Me=["🅰️","🅱️","🅲️","🅳️"];return n.jsx("button",{onClick:at=>Vr(he,at),disabled:Ee&&Q[c],className:fe,children:n.jsxs("div",{className:"flex items-center gap-2 w-full",children:[n.jsx("div",{className:"text-lg flex-shrink-0 mr-1",children:Me[he]}),n.jsx("div",{className:"flex-1 text-left font-semibold text-base leading-relaxed",children:ue}),P[c]&&P[c][he]>0&&!pe&&n.jsxs("div",{className:"bg-purple-600/20 px-2 py-1 rounded-full text-xs text-purple-300",children:[P[c][he],"%"]}),xe&&ne&&ce&&!pe&&n.jsx("div",{className:"text-lg animate-bounce",children:"🎉"}),xe&&ne&&!ce&&!pe&&n.jsx("div",{className:"text-lg",children:"😔"}),xe&&!ne&&ce&&!pe&&n.jsx("div",{className:"text-base animate-pulse",children:"✨"})]})},he)})}),Ee&&U&&Be!==null&&n.jsx("div",{className:"bg-gray-800 rounded-xl p-4 mb-4 border border-gray-700",children:n.jsxs("div",{className:"flex gap-3",children:[n.jsx("div",{className:"text-lg flex-shrink-0",children:Be===Te.answerIndex?"🎊":"💡"}),n.jsxs("div",{className:"flex-1",children:[n.jsx("h4",{className:`font-semibold mb-3 text-sm ${Be===Te.answerIndex?"text-green-400":"text-blue-400"}`,children:Be===Te.answerIndex?"Perfect! Well done!":"Good try! Here's why:"}),Te.explanation&&n.jsx("p",{className:"text-gray-300 text-sm leading-relaxed",children:Te.explanation})]})]})}),n.jsx("div",{className:"h-[200px]"})]})}),n.jsxs("div",{className:"fixed bottom-0 left-0 right-0 z-50",children:[n.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/95 to-gray-900/80 backdrop-blur-xl"}),n.jsxs("div",{className:"relative p-4 pb-8",children:[n.jsxs("div",{className:"flex gap-2 mb-3",children:[n.jsx("button",{onClick:Jr,disabled:c===0,className:`flex-1 bg-white/10 backdrop-blur-md border border-white/20 
                disabled:opacity-30 disabled:cursor-not-allowed
                py-3.5 rounded-2xl font-semibold transition-all transform active:scale-95
                hover:bg-white/15 text-white shadow-xl`,children:"Previous"}),n.jsx("button",{onClick:me,disabled:Be!==null,className:`flex-1 py-3.5 rounded-2xl font-semibold transition-all transform active:scale-95 shadow-xl ${Be!==null?"bg-white/5 text-gray-500 cursor-not-allowed":"bg-gradient-to-r from-amber-500 to-yellow-500 text-white hover:from-amber-600 hover:to-yellow-600"}`,children:"Skip"}),n.jsx("button",{onClick:ae,className:`flex-1 bg-gradient-to-r from-blue-500 to-indigo-500 
                hover:from-blue-600 hover:to-indigo-600
                py-3.5 rounded-2xl font-semibold transition-all transform active:scale-95
                text-white shadow-xl`,children:c===Ue-1?"Finish":"Next"})]}),n.jsxs("button",{onClick:()=>z(!0),className:`w-full bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500
              hover:from-emerald-600 hover:via-green-600 hover:to-teal-600
              py-4 rounded-2xl font-bold text-white transition-all transform active:scale-[0.98]
              shadow-2xl shadow-green-500/25 relative overflow-hidden group`,children:[n.jsx("div",{className:"absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent"}),n.jsx("span",{className:"relative",children:"Submit Quiz"})]})]})]}),B&&n.jsx("div",{className:"fixed inset-0 bg-black/75 flex items-center justify-center z-50 p-4",children:n.jsxs("div",{className:"bg-gray-800 rounded-3xl p-6 max-w-sm w-full text-center border border-gray-700",children:[n.jsx("div",{className:"text-4xl mb-4",children:"🤔"}),n.jsx("h3",{className:"text-xl font-bold mb-2",children:"Leave Quiz?"}),n.jsx("p",{className:"text-gray-400 mb-6",children:"Your progress will be lost"}),n.jsxs("div",{className:"flex gap-3",children:[n.jsx("button",{onClick:()=>W(!1),className:"flex-1 bg-blue-600 hover:bg-blue-700 py-3 rounded-xl font-medium",children:"Stay"}),n.jsx("button",{onClick:Xr,className:"flex-1 bg-gray-700 hover:bg-gray-600 py-3 rounded-xl font-medium",children:"Leave"})]})]})}),T&&!V&&n.jsx("div",{className:"fixed inset-0 bg-black/75 flex items-center justify-center z-50 p-4",children:n.jsxs("div",{className:"bg-gray-800 rounded-3xl p-6 max-w-sm w-full text-center border border-gray-700",children:[n.jsx("div",{className:"text-4xl mb-4",children:"🏆"}),n.jsx("h3",{className:"text-xl font-bold mb-2",children:"Ready to finish?"}),n.jsxs("p",{className:"text-gray-400 mb-4",children:[je," of ",Ue," answered • ",He," skipped"]}),Ee&&n.jsx("div",{className:"bg-gradient-to-r from-yellow-600/20 to-orange-600/20 p-4 rounded-2xl mb-6 border border-yellow-600/30",children:n.jsxs("div",{className:"flex justify-center gap-6",children:[n.jsxs("div",{className:"text-center",children:[n.jsx("div",{className:"text-2xl mb-1",children:"⭐"}),n.jsx("div",{className:"text-yellow-400 font-bold",children:A}),n.jsx("div",{className:"text-xs text-gray-400",children:"Stars"})]}),n.jsxs("div",{className:"text-center",children:[n.jsx("div",{className:"text-2xl mb-1",children:"🪙"}),n.jsx("div",{className:"text-yellow-400 font-bold",children:se}),n.jsx("div",{className:"text-xs text-gray-400",children:"Coins"})]})]})}),n.jsxs("div",{className:"flex gap-3",children:[n.jsx("button",{onClick:()=>{z(!1),v(null),C(Date.now())},className:"flex-1 bg-gray-700 hover:bg-gray-600 py-3 rounded-xl font-medium",children:"Back"}),n.jsx("button",{onClick:ue=>{ue.preventDefault(),ue.stopPropagation(),console.log("Submit button clicked"),Ne()},className:"flex-1 bg-green-600 hover:bg-green-700 py-3 rounded-xl font-medium",children:"Submit"})]})]})}),g===c&&!T&&n.jsx("div",{className:"fixed inset-0 bg-black/75 flex items-center justify-center z-50 p-4",children:n.jsxs("div",{className:"bg-gray-800 rounded-3xl p-6 max-w-sm w-full text-center border border-gray-700",children:[n.jsx("div",{className:"text-4xl mb-4 animate-pulse",children:"⏰"}),n.jsx("h3",{className:"text-xl font-bold mb-2",children:"Time's Up!"}),n.jsx("p",{className:"text-gray-400 mb-6",children:"Let's move to the next question"}),n.jsx("button",{onClick:()=>{v(null),C(Date.now()),c<Ae.length-1?ae():z(!0)},className:"w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-xl font-medium",children:c<Ae.length-1?"Continue":"See Results"})]})}),$&&n.jsx("div",{className:"fixed top-20 left-1/2 transform -translate-x-1/2 bg-red-600 text-white px-4 py-2 rounded-full font-medium animate-bounce z-50",children:$}),n.jsx("style",{jsx:!0,children:`
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
      `})]})},ls=[{name:"GK",slug:"general-knowledge",questions:50,icon:"🧠",color:"#FF6B6B",gradient:"from-red-500 to-pink-500"},{name:"Science",slug:"science",questions:45,icon:"🧪",color:"#4ECDC4",gradient:"from-cyan-500 to-teal-500"},{name:"Fun Facts",slug:"fun-facts",questions:30,icon:"🎉",color:"#FFD93D",gradient:"from-yellow-400 to-orange-500"},{name:"History",slug:"history",questions:42,icon:"🏺",color:"#A8E6CF",gradient:"from-green-400 to-emerald-500"},{name:"AI & Tech",slug:"artificial-intelligence",questions:28,icon:"🤖",color:"#C7B8FF",gradient:"from-purple-400 to-indigo-500"},{name:"Geography",slug:"geography",questions:38,icon:"🗺️",color:"#FACC15",gradient:"from-yellow-400 to-amber-500"},{name:"Computer",slug:"computer",questions:34,icon:"💻",color:"#3B82F6",gradient:"from-blue-400 to-blue-600"},{name:"Aptitude",slug:"aptitude",questions:36,icon:"📐",color:"#EC4899",gradient:"from-pink-500 to-rose-500"},{name:"Iconic Figures",slug:"iconic-figures",questions:26,icon:"🌟",color:"#8B5CF6",gradient:"from-purple-500 to-violet-600"}],Kg=()=>n.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:n.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5l7 7-7 7"})}),Xg=()=>n.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:n.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"})}),Vg=()=>n.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:n.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"})}),Jg=()=>n.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:n.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"})}),Zg=()=>n.jsx("svg",{className:"w-3 h-3",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:n.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 10V3L4 14h7v7l9-11h-7z"})}),ev=({results:e={correct:8,total:10,category:"general-knowledge",mode:"quiz",elapsedMs:125e3,questions:[],returnPath:null,fromQuest:!1},onRetake:t=()=>{},onReview:r=()=>{},onNavigate:s=(c,u)=>{},isRetake:a=!1,isPractice:o=!1,player:i={level:1,coins:0,combo:0,energy:5},categories:l=[]})=>{const[c,u]=d.useState(ie.getCoins()),m=d.useRef(null),[p,f]=d.useState(null),[w]=Ze("/sounds/coin.mp3",{volume:.75}),[x,j]=d.useState(!1),[S,y]=d.useState(!1),[g,v]=d.useState(0),[N,C]=d.useState(!1),[R,E]=d.useState(!1),h=()=>{if(console.log("QuizResults handleBack:",{fromQuest:e.fromQuest,returnPath:e.returnPath,isPractice:e.isPractice||o}),e.fromQuest){const M=e.isPractice||o?"practiceQuestions":"dailyQuizzes";e.isPractice||o?s("/profile/quests"):s("/profile/quests",{state:{questCompleted:!0,questType:M,increment:1}})}else{const M=e.returnPath||"/";s(M)}},{correct:b,total:k,category:_,categorySlug:P,difficulty:F,mode:Q,elapsedMs:J}=e,H=k?Math.round(b/k*100):0,q=H===100,O=H>=80,I=Math.floor(J/1e3),D=k>0?Math.floor(I/k):0,L=o?e.earnedCoins||0:Math.round(b*5*(q?1.5:O?1.2:1)),T=ls.find(M=>M.slug===_)||ls[0],B=(()=>q?{emoji:"🏆",text:"Perfect!",color:"text-yellow-400"}:H>=90?{emoji:"🌟",text:"Excellent!",color:"text-purple-400"}:H>=80?{emoji:"✨",text:"Great job!",color:"text-blue-400"}:H>=70?{emoji:"👍",text:"Good effort!",color:"text-green-400"}:H>=60?{emoji:"💪",text:"Keep going!",color:"text-orange-400"}:{emoji:"📚",text:"Keep practicing!",color:"text-gray-400"})();d.useEffect(()=>{const M=ie.getCoins();u(M)},[]),d.useEffect(()=>{e.coinsProcessed||L>0&&m.current&&setTimeout(()=>{m.current.getBoundingClientRect();const M=new Audio("/sounds/coin.mp3");M.volume=.75,M.play().catch(ee=>{if(console.error("Audio play failed:",ee),w)try{w()}catch(G){console.error("Hook play failed:",G)}}),f({startRect:{left:window.innerWidth/2-50,top:window.innerHeight/2,width:100,height:100},count:Math.min(L,10),amount:L}),j(!0),e.coinsProcessed=!0},500)},[]),d.useEffect(()=>{document.documentElement.scrollIntoView({behavior:"smooth",block:"start"}),(q||O)&&(y(!0),setTimeout(()=>y(!1),3e3));let M=0;const ee=b/20,G=setInterval(()=>{M+=ee,M>=b?(v(b),clearInterval(G)):v(Math.floor(M))},50);return()=>clearInterval(G)},[b,q,O]);const W=[{score:7,total:10},{score:6,total:10},{score:8,total:10},{score:9,total:10},{score:b,total:k}],$=()=>{try{const M=localStorage.getItem("qp_recent");if(M)return JSON.parse(M).slice(0,10).map(G=>G.slug||G.cat).filter(G=>G&&G!==e.categorySlug)}catch(M){console.error("Error reading recent categories:",M)}return[]},Z=()=>{const M=P||_,ee=F||"medium",G=$(),K=(l||ls||[]).filter(Y=>Y.slug!==M&&!G.slice(0,3).includes(Y.slug)),V=(()=>{if(K.length===0){const Y=(l||ls||[]).filter(A=>A.slug!==M);return Y[Math.floor(Math.random()*Y.length)]||(l||ls)[0]}return K[Math.floor(Math.random()*K.length)]})();if(H<60)return o?[{icon:"🎯",title:"Try Fewer Questions",desc:"Start with just 5",color:"from-blue-500 to-cyan-500",action:()=>s(`/quiz/${M}`,{state:{mode:"practice",difficulty:"easy",count:5,timer:{type:"off",seconds:0}}})},{icon:V.icon,title:V.name,desc:"Fresh start with new topic",color:V.gradient,action:()=>s(`/quiz/${V.slug}`,{state:{mode:"practice",difficulty:"easy",count:10,timer:{type:"off",seconds:0}}})},{icon:"📖",title:"Review Mistakes",desc:"Learn from errors",color:"from-purple-500 to-pink-500",action:()=>r()}]:[{icon:"📚",title:"Practice Mode",desc:"No timer, learn at your pace",color:"from-green-500 to-teal-500",action:()=>s(`/quiz/${M}`,{state:{mode:"practice",difficulty:"easy",count:10,timer:{type:"off",seconds:0}}})},{icon:ee!=="easy"?"🎯":"🔄",title:ee!=="easy"?"Easy Mode":"Try Again",desc:ee!=="easy"?"Build confidence":"You can do this!",color:"from-blue-500 to-cyan-500",action:()=>ee!=="easy"?s(`/quiz/${M}`,{state:{mode:"quiz",difficulty:"easy",count:5,timer:{type:"per_q",seconds:60}}}):t()},{icon:V.icon,title:V.name,desc:"Try something different",color:V.gradient,action:()=>s(`/quiz/${V.slug}`,{state:{mode:"practice",difficulty:"easy",count:10,timer:{type:"off",seconds:0}}})}];if(H>=80)return ee==="hard"&&H>=90?[{icon:"⚡",title:"Lightning Round",desc:"20 questions, 10s each",color:"from-yellow-500 to-red-500",action:()=>s(`/quiz/${M}`,{state:{mode:"quiz",difficulty:"hard",count:20,timer:{type:"per_q",seconds:10}}})},{icon:V.icon,title:`${V.name} Challenge`,desc:"Hard mode, new topic",color:V.gradient,action:()=>s(`/quiz/${V.slug}`,{state:{mode:"quiz",difficulty:"hard",count:15,timer:{type:"per_q",seconds:30}}})},{icon:"🎲",title:"Mixed Categories",desc:"Test all your knowledge",color:"from-purple-500 to-indigo-500",action:()=>s("/quiz/mixed",{state:{mode:"quiz",difficulty:"hard",count:20,timer:{type:"per_q",seconds:30}}})}]:[{icon:ee==="hard"?"🔥":"🎯",title:ee==="hard"?"Perfect Score Challenge":"Hard Mode",desc:ee==="hard"?"Can you get 100%?":"Level up your skills",color:"from-red-500 to-orange-500",action:()=>s(`/quiz/${M}`,{state:{mode:"quiz",difficulty:"hard",count:ee==="hard"?10:20,timer:{type:"per_q",seconds:30}}})},{icon:V.icon,title:V.name,desc:"Master new topics",color:V.gradient,action:()=>s(`/quiz/${V.slug}`,{state:{mode:"practice",difficulty:"easy",count:10,timer:{type:"off",seconds:0}}})},{icon:"⚡",title:"Speed Challenge",desc:"10 questions, 15s each",color:"from-purple-500 to-pink-500",action:()=>s(`/quiz/${M}`,{state:{mode:"quiz",difficulty:"medium",count:10,timer:{type:"per_q",seconds:15}}})}];{const Y=H<70;return[{icon:Y?"📚":"🎯",title:Y?"Practice More":"Try Again",desc:Y?"Improve accuracy":"Beat your score",color:Y?"from-green-500 to-teal-500":"from-blue-500 to-purple-500",action:Y?()=>s(`/quiz/${M}`,{state:{mode:"practice",difficulty:ee,count:10,timer:{type:"off",seconds:0}}}):()=>t()},{icon:V.icon,title:V.name,desc:"Explore new topics",color:V.gradient,action:()=>s(`/quiz/${V.slug}`,{state:{mode:"practice",difficulty:"easy",count:10,timer:{type:"off",seconds:0}}})},{icon:ee==="easy"?"⬆️":"💪",title:ee==="easy"?"Medium Difficulty":"More Questions",desc:ee==="easy"?"Ready for more?":"Test endurance",color:"from-indigo-500 to-purple-500",action:()=>s(`/quiz/${M}`,{state:{mode:"quiz",difficulty:ee==="easy"?"medium":ee,count:ee==="easy"?10:20,timer:{type:"per_q",seconds:45}}})}]}},U=yt.useMemo(()=>Z(),[H,o,e.categorySlug,e.difficulty]);return n.jsx("div",{className:"h-screen overflow-y-auto bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white",children:n.jsxs("div",{className:"min-h-full p-4 pt-10",children:[p&&n.jsx(Gn,{startRect:p.startRect,targetRef:m,count:p.count,onDone:()=>{if(p.amount>0&&!R){console.log("[QuizResults] Updating display with current total"),E(!0);const M=ie.getCoins();u(M)}f(null)}}),n.jsx("style",{children:`
        @keyframes coinRotate {
          from { transform: rotateY(0deg); }
          to { transform: rotateY(360deg); }
        }
      `}),S&&n.jsx("div",{className:"fixed inset-0 pointer-events-none z-50 flex items-center justify-center",children:n.jsx("div",{className:"text-8xl animate-bounce",children:q?"🎉":"⭐"})}),n.jsxs("div",{className:"flex justify-between items-center mb-6 mt-1",children:[n.jsxs("button",{onClick:h,className:"p-2 rounded-xl bg-white/10 backdrop-blur hover:bg-white/20 transition-all flex items-center gap-2",children:[n.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:n.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 19l-7-7 7-7"})}),n.jsx("span",{className:"text-sm font-medium",children:"Back"})]}),n.jsxs("div",{className:"flex gap-2",children:[n.jsxs("div",{className:"px-3 py-1.5 rounded-full bg-white/10 backdrop-blur text-sm font-medium",children:["Level ",i.level]}),n.jsxs("button",{ref:m,onClick:()=>C(!0),className:"px-3 py-1.5 rounded-full bg-yellow-500/20 backdrop-blur text-sm font-medium text-yellow-300 hover:bg-yellow-500/30 transition-all cursor-pointer",children:[c," 🪙"]})]})]}),n.jsxs("div",{className:"relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 p-8 mb-6",children:[n.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-blue-500/10 animate-pulse"}),n.jsxs("div",{className:"relative text-center",children:[n.jsxs("div",{className:`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur mb-4 ${B.color}`,children:[n.jsx("span",{className:"text-2xl",children:B.emoji}),n.jsx("span",{className:"font-semibold",children:B.text})]}),n.jsxs("div",{className:"mb-6",children:[n.jsxs("div",{className:"text-7xl font-bold mb-2 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent",children:[g,"/",k]}),n.jsxs("div",{className:"flex items-center justify-center gap-2 text-sm text-white/60",children:[n.jsx("span",{className:"text-xl",children:T.icon}),n.jsx("span",{children:T.name})]})]}),n.jsxs("div",{className:"grid grid-cols-3 gap-4 max-w-md mx-auto",children:[n.jsxs("div",{className:"text-center",children:[n.jsxs("div",{className:"text-3xl font-bold",children:[H,"%"]}),n.jsx("div",{className:"text-xs text-white/60",children:"Accuracy"})]}),n.jsxs("div",{className:"text-center",children:[n.jsxs("div",{className:"text-3xl font-bold",children:[D,"s"]}),n.jsx("div",{className:"text-xs text-white/60",children:"Avg Speed"})]}),n.jsxs("div",{className:"text-center",children:[n.jsx("div",{className:"text-3xl font-bold text-yellow-400",children:L>0?`+${L}`:"0"}),n.jsx("div",{className:"text-xs text-white/60",children:"Coins"})]})]})]})]}),n.jsxs("div",{className:"rounded-2xl bg-white/5 backdrop-blur border border-white/10 p-4 mb-6",children:[n.jsxs("div",{className:"flex items-center justify-between mb-3",children:[n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx(Jg,{}),n.jsx("span",{className:"text-sm font-medium",children:"Your Progress"})]}),i.combo>0&&n.jsxs("div",{className:"flex items-center gap-1 px-2 py-1 rounded-full bg-orange-500/20 text-orange-400 text-xs",children:[n.jsx(Zg,{}),i.combo," streak"]})]}),n.jsx("div",{className:"flex items-end gap-1 h-12 mb-2",children:W.map((M,ee)=>n.jsx("div",{className:`flex-1 rounded-t transition-all ${ee===W.length-1?"bg-gradient-to-t from-purple-500 to-purple-400":"bg-white/20"}`,style:{height:`${M.score/M.total*100}%`,minHeight:"4px"}},ee))}),n.jsx("div",{className:"text-xs text-white/40 text-center",children:"Last 5 quizzes"})]}),n.jsxs("div",{className:"grid grid-cols-2 gap-3 mb-6",children:[n.jsxs("button",{onClick:r,className:"relative overflow-hidden group rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 p-4 transition-all hover:scale-105 active:scale-95",children:[n.jsx("div",{className:"absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform"}),n.jsxs("div",{className:"relative flex items-center justify-between",children:[n.jsxs("div",{className:"text-left",children:[n.jsx("div",{className:"font-semibold",children:"Review"}),n.jsx("div",{className:"text-xs opacity-80",children:"Check answers"})]}),n.jsx(Vg,{})]})]}),n.jsx("button",{onClick:t,className:"relative overflow-hidden group rounded-2xl bg-white/10 backdrop-blur border border-white/20 p-4 transition-all hover:scale-105 active:scale-95 hover:bg-white/15",children:n.jsxs("div",{className:"flex items-center justify-between",children:[n.jsxs("div",{className:"text-left",children:[n.jsx("div",{className:"font-semibold",children:"Try Again"}),n.jsx("div",{className:"text-xs opacity-60",children:"New questions"})]}),n.jsx(Xg,{})]})})]}),n.jsxs("div",{className:"space-y-3",children:[n.jsx("div",{className:"text-sm font-medium text-white/60 px-1",children:"Recommended for you"}),U.map((M,ee)=>n.jsx("button",{onClick:M.action,className:"w-full group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur border border-white/10 p-4 transition-all hover:bg-white/10 hover:border-white/20",children:n.jsxs("div",{className:"flex items-center justify-between",children:[n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsx("div",{className:`p-2 rounded-xl bg-gradient-to-r ${M.color} opacity-20 group-hover:opacity-30 transition-opacity`,children:n.jsx("span",{className:"text-xl",children:M.icon})}),n.jsxs("div",{className:"text-left",children:[n.jsx("div",{className:"font-medium text-sm",children:M.title}),n.jsx("div",{className:"text-xs text-white/40",children:M.desc})]})]}),n.jsx(Kg,{})]})},ee))]}),n.jsx("div",{className:"mt-6 pt-6 border-t border-white/10",children:n.jsx("button",{onClick:()=>s("/profile/history",{state:{from:"results",returnToResults:!0}}),className:"w-full text-center text-sm text-white/40 hover:text-white/60 transition-colors",children:"View all history →"})}),N&&n.jsx("div",{className:"fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4",onClick:M=>{M.target===M.currentTarget&&C(!1)},children:n.jsxs("div",{className:"bg-gray-800 rounded-3xl p-6 w-full max-w-md border border-gray-700 relative overflow-hidden",onClick:M=>M.stopPropagation(),children:[n.jsx("div",{className:"absolute inset-0 opacity-10",children:n.jsx("div",{className:"h-full bg-gradient-to-br from-yellow-400 to-orange-500"})}),n.jsxs("div",{className:"relative",children:[n.jsxs("div",{className:"flex items-center justify-between mb-6",children:[n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsx("div",{className:"text-5xl",style:{animation:"coinRotate 2s linear infinite"},children:"🪙"}),n.jsxs("div",{children:[n.jsx("h3",{className:"text-2xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent",children:"Your Treasure"}),n.jsxs("p",{className:"text-3xl font-bold text-white mt-1",children:[c," Coins"]})]})]}),n.jsx("button",{onClick:()=>C(!1),className:"w-8 h-8 rounded-lg bg-white/5 border border-gray-600 grid place-items-center hover:bg-white/10 transition",children:"✕"})]}),n.jsxs("div",{className:"mb-6",children:[n.jsx("h4",{className:"text-sm font-medium text-gray-400 mb-3",children:"Ways to Earn"}),n.jsxs("div",{className:"space-y-3",children:[n.jsx("div",{className:"p-4 rounded-xl bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 hover:scale-[1.02] transition-transform",children:n.jsxs("div",{className:"flex items-center justify-between",children:[n.jsxs("div",{children:[n.jsxs("div",{className:"font-medium flex items-center gap-2",children:[n.jsx("span",{className:"text-2xl",children:"✅"}),"Complete Quizzes"]}),n.jsx("div",{className:"text-xs text-gray-400 mt-1",children:"+5 coins per correct answer"})]}),n.jsx("div",{className:"text-green-400 font-bold",children:"+5"})]})}),n.jsx("div",{className:"p-4 rounded-xl bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 hover:scale-[1.02] transition-transform",children:n.jsxs("div",{className:"flex items-center justify-between",children:[n.jsxs("div",{children:[n.jsxs("div",{className:"font-medium flex items-center gap-2",children:[n.jsx("span",{className:"text-2xl",children:"🎯"}),"Daily Challenge"]}),n.jsx("div",{className:"text-xs text-gray-400 mt-1",children:"Complete daily for bonus"})]}),n.jsx("div",{className:"text-blue-400 font-bold",children:"+5"})]})}),n.jsx("div",{className:"p-4 rounded-xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 hover:scale-[1.02] transition-transform",children:n.jsxs("div",{className:"flex items-center justify-between",children:[n.jsxs("div",{children:[n.jsxs("div",{className:"font-medium flex items-center gap-2",children:[n.jsx("span",{className:"text-2xl",children:"🎰"}),"Spin & Play"]}),n.jsx("div",{className:"text-xs text-gray-400 mt-1",children:"Test your luck!"})]}),n.jsx("div",{className:"text-purple-400 font-bold",children:"+50"})]})}),n.jsx("div",{className:"p-4 rounded-xl bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/20 hover:scale-[1.02] transition-transform",children:n.jsxs("div",{className:"flex items-center justify-between",children:[n.jsxs("div",{children:[n.jsxs("div",{className:"font-medium flex items-center gap-2",children:[n.jsx("span",{className:"text-2xl",children:"🏆"}),"Achievements"]}),n.jsx("div",{className:"text-xs text-gray-400 mt-1",children:"Unlock special rewards"})]}),n.jsx("div",{className:"text-orange-400 font-bold",children:"+???"})]})})]})]}),n.jsxs("div",{className:"mb-6",children:[n.jsxs("div",{className:"flex justify-between text-xs text-gray-400 mb-2",children:[n.jsx("span",{children:"Next reward"}),n.jsxs("span",{children:[100-i.coins%100," coins to go"]})]}),n.jsx("div",{className:"h-2 bg-white/10 rounded-full overflow-hidden",children:n.jsx("div",{className:"h-full bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full transition-all",style:{width:`${i.coins%100}%`}})})]}),n.jsx("button",{onClick:()=>{C(!1),s("/play")},className:"w-full py-3 rounded-xl bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-bold hover:scale-[1.02] transition-transform shadow-lg",children:"Start Earning Now! 🚀"})]})]})})]})})},tv=({questions:e,answers:t,skipped:r,onBack:s,onRetake:a,fromHistory:o=!1})=>{const i=ke(),l=()=>{o?i("/profile/history",{replace:!0}):s?s():i(-1)},c=e.reduce((p,f,w)=>p+(t[w]===f.answerIndex?1:0),0),u=(r==null?void 0:r.filter(Boolean).length)||0,m=e.length-c-u;return n.jsxs("div",{className:"mt-2 card rounded-3xl p-5 w-full max-w-none mx-auto pb-24 h-full overflow-y-auto",children:[n.jsxs("div",{className:"flex items-center justify-between mb-4 pt-6",children:[n.jsx("button",{className:"px-3 py-1 rounded-xl border border-base-border bg-white/5",onClick:l,children:"← Back"}),n.jsx("h2",{className:"text-lg font-semibold",children:"Review Answers"}),n.jsx("div",{className:"w-16"})," "]}),n.jsxs("div",{className:"grid grid-cols-3 gap-2 mb-4",children:[n.jsxs("div",{className:"rounded-xl bg-green-600/10 border border-green-500/30 p-2 text-center",children:[n.jsx("div",{className:"text-xs text-green-400",children:"Correct"}),n.jsx("div",{className:"text-lg font-bold text-green-400",children:c})]}),n.jsxs("div",{className:"rounded-xl bg-red-600/10 border border-red-500/30 p-2 text-center",children:[n.jsx("div",{className:"text-xs text-red-400",children:"Incorrect"}),n.jsx("div",{className:"text-lg font-bold text-red-400",children:m})]}),n.jsxs("div",{className:"rounded-xl bg-amber-600/10 border border-amber-500/30 p-2 text-center",children:[n.jsx("div",{className:"text-xs text-amber-400",children:"Skipped"}),n.jsx("div",{className:"text-lg font-bold text-amber-400",children:u})]})]}),n.jsx("ol",{className:"space-y-4",children:e.map((p,f)=>{const w=t[f],x=!w&&w!==0,j=w===p.answerIndex;return n.jsxs("li",{className:"rounded-2xl border border-base-border bg-white/5 p-4 md:p-5",children:[n.jsxs("div",{className:"flex items-start justify-between mb-3",children:[n.jsxs("div",{className:"flex-1",children:[n.jsxs("div",{className:"text-sm md:text-base font-medium",children:["Q",f+1,". ",p.prompt]}),p.category&&n.jsxs("div",{className:"text-xs text-base-muted mt-1",children:["Category: ",p.category," • Difficulty: ",p.difficulty||"Medium"]})]}),n.jsx("div",{className:"ml-2",children:x?n.jsx("span",{className:"px-2 py-1 rounded text-xs bg-amber-600/20 text-amber-400",children:"Skipped"}):j?n.jsx("span",{className:"px-2 py-1 rounded text-xs bg-green-600/20 text-green-400",children:"✓ Correct"}):n.jsx("span",{className:"px-2 py-1 rounded text-xs bg-red-600/20 text-red-400",children:"✗ Wrong"})})]}),n.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-3",children:p.options.map((S,y)=>{const g=w===y,v=y===p.answerIndex;let N="w-full text-left px-3 py-2 rounded-xl border transition-all ";return v?N+="bg-green-600/20 border-green-500/50 text-green-300":g&&!v?N+="bg-red-600/20 border-red-500/50 text-red-300":N+="bg-base-bg/40 border-base-border text-base-muted",n.jsxs("div",{className:N,children:[n.jsxs("span",{className:"font-semibold mr-2",children:[["A","B","C","D"][y],"."]}),S,v&&n.jsx("span",{className:"ml-2 text-green-400",children:"✓"}),g&&!v&&n.jsx("span",{className:"ml-2 text-red-400",children:"✗"})]},y)})}),p.explanation&&n.jsxs("div",{className:"mt-3 p-3 rounded-xl bg-white/5 border border-base-border",children:[n.jsx("div",{className:"text-xs font-semibold text-brand-blue mb-1",children:"Explanation:"}),n.jsx("div",{className:"text-sm text-base-muted",children:p.explanation})]})]},p.id||f)})}),n.jsxs("div",{className:"mt-6 flex gap-2 justify-center sticky bottom-4",children:[n.jsx("button",{className:"px-4 py-2.5 rounded-xl border border-base-border bg-base-card backdrop-blur",onClick:l,children:"Back to Results"}),a&&n.jsx("button",{className:"px-4 py-2.5 rounded-xl bg-gradient-to-r from-brand-blue to-brand-purple text-white font-medium",onClick:a,children:"Retake Quiz"})]})]})},nv="qp_resume",$d="qp_mistakes",Bd="qp_stats",Ud="qp_lastset",Yd="qp_recent",qd="qp_review_snapshot",rv=50,cs=(e="")=>e.replace(/-/g," ").replace(/\b\w/g,t=>t.toUpperCase()),$a=(e="")=>e.toLowerCase().trim().replace(/[^\w\s-]/g,"").replace(/\s+/g,"-"),sv=(e,t)=>e.slice().sort(()=>Math.random()-.5).slice(0,t),zm=e=>{const t=e.slice();for(let r=t.length-1;r>0;r--){const s=Math.floor(Math.random()*(r+1));[t[r],t[s]]=[t[s],t[r]]}return t},av=(e,t,r)=>Math.max(t,Math.min(r,e)),ds=(e,t)=>{try{const r=localStorage.getItem(e);return r?JSON.parse(r):t}catch{return t}};async function ov(){const e="/data/quiz_questions_bank.csv",t=await fetch(e);if(!t.ok)throw new Error(`CSV not found at ${e}`);const r=await t.text(),{data:s}=hr.parse(r,{header:!0,skipEmptyLines:!0,transformHeader:o=>String(o).trim().toLowerCase()}),a={a:0,b:1,c:2,d:3};return s.map((o,i)=>{var f;const l=[o.option1,o.option2,o.option3,o.option4].map(w=>(w??"").trim());if(l.some(w=>!w))return null;let c=-1;const u=String(o.answer??"").trim();if(a[u.toLowerCase()]!==void 0)c=a[u.toLowerCase()];else{const w=l.findIndex(x=>x.toLowerCase()===u.toLowerCase());c=w>=0?w:0}const m=String(o.category??o.subject??"General Knowledge").trim(),p=String(o.difficulty??"medium").toLowerCase().trim();return{id:((f=o.id)==null?void 0:f.trim())||`q_${i}`,category:m,difficulty:p,prompt:String(o.question??"").trim(),options:l,answerIndex:c,explanation:String(o.explanation??"").trim()}}).filter(Boolean)}function iv(e,{categorySlug:t,difficulty:r,count:s}){console.log("=== BUILD SESSION DEBUG ==="),console.log("categorySlug:",t),console.log("difficulty:",r),console.log("count:",s),console.log("Total questions available:",e.length);const o=t==="mixed"?()=>!0:m=>$a(m.category)===t,i=r?m=>(m.difficulty||"medium")===r:()=>!0,l=e.filter(m=>o(m)&&i(m));if(console.log("Filtered pool size:",l.length),console.log("Sample categories from all questions:",[...new Set(e.slice(0,10).map(m=>`"${m.category}" -> "${$a(m.category)}"`))]),l.length===0)return console.error("No questions match the filter criteria!"),console.log("Available categories:",[...new Set(e.map(m=>$a(m.category)))]),{questions:[],poolSize:0};const u=sv(l,Math.min(s,l.length)).map(m=>{const p=zm([0,1,2,3]),f=p.map(x=>m.options[x]),w=p.indexOf(m.answerIndex);return{...m,options:f,answerIndex:w}});return console.log("Final questions:",u.length),{questions:u,poolSize:l.length}}function lv(){const e=ke(),{category:t}=Kp(),r=et(),{energy:s,useEnergy:a,player:o,updateDailyStreak:i}=wn(),l=new URLSearchParams(r.search),c=l.get("review")==="1",u=l.get("retake")==="1",m=r.state||{},p=m.mode||"quiz",f=String(m.difficulty||"medium").toLowerCase(),w=m.returnPath||null,x=m.fromQuest||!1,j=av(Number(m.count||10),1,50),S=m.timer||{type:"per_q",seconds:45};m.resume,m.daily,m.source;const y=u||!!m.retake,g=!!m.fromHistory,v=p==="practice";console.log("Quiz Component - Mode Detection:",{routerState:m,mode:p,isPractice:v,location:r.pathname,state:r.state});const[N,C]=d.useState([]),[R,E]=d.useState(!0),[h,b]=d.useState(""),[k,_]=d.useState({questions:[]}),[P,F]=d.useState("quiz"),[Q,J]=d.useState(null),[H,q]=d.useState(null),[O,I]=d.useState(0);d.useEffect(()=>{let $=!0;return(async()=>{try{const Z=await ov();if(!$)return;C(Z)}catch(Z){console.error(Z),b("Failed to load questions. Check /public/data/quiz_questions_bank.csv")}finally{E(!1)}})(),()=>{$=!1}},[]),d.useEffect(()=>{var $;if(($=r.state)!=null&&$.returnToResults){const Z=ie.getCurrentResults();Z&&(J(Z),F("results"),E(!1),_({questions:[]}))}},[r.state]),d.useEffect(()=>{var Z;if(R||h||c||(Z=r.state)!=null&&Z.returnToResults||N.length===0)return;console.log("=== SESSION INIT ==="),console.log("Category:",t),console.log("Mode:",p),console.log("Difficulty:",f),console.log("Count:",j);const $=iv(N,{categorySlug:t,difficulty:f,count:j});if($.questions.length===0){console.error("No questions found!"),console.log("Looking for category:",t),console.log("Available categories (first 10):",[...new Set(N.map(U=>$a(U.category)))].slice(0,10)),b(`No questions found for "${cs(t)}" with difficulty "${f}"`);return}console.log("Session built with",$.questions.length,"questions"),F("quiz"),J(null),_($),q(Date.now()),I(0)},[N,t,p,f,j,r.pathname]),d.useEffect(()=>{if(P!=="quiz"||!H)return;const $=setInterval(()=>{I(Date.now()-H)},1e3);return()=>clearInterval($)},[P,H]);const D=d.useCallback($=>{if(console.log("Quiz completed - Mode:",p,"isPractice:",v,"Results:",$),console.log("handleQuizComplete called at:",new Date().toISOString()),window._quizCompleting){console.warn("Quiz completion already in progress, ignoring duplicate call");return}if(window._quizCompleting=!0,setTimeout(()=>{window._quizCompleting=!1},1e3),!$||!$.questions){console.error("Invalid results object:",$);return}const Z=$.questions.filter((G,K)=>$.answers[K]!==null&&$.answers[K]!==G.answerIndex).map(G=>G.id);try{const G=ds($d,[]),K=Array.from(new Set([...Z,...G]));localStorage.setItem($d,JSON.stringify(K))}catch(G){console.error("Error saving mistakes:",G)}try{const G=ds(Bd,{sessions:[]});G.sessions.push({cat:cs(t),mode:v?"practice":"quiz",total:$.total,correct:$.correct,skipped:$.skipped.filter(Boolean).length,ms:O,timestamp:Date.now(),earnedXP:v?0:$.correct*10,earnedCoins:v?0:$.correct*5}),localStorage.setItem(Bd,JSON.stringify(G))}catch(G){console.error("Error saving stats:",G)}const U={ts:Date.now(),slug:t,categoryLabel:cs(t),mode:v?"practice":"quiz",difficulty:f,total:$.total,timer:v?null:S,ms:O,attempted:$.answers.filter(G=>G!==null).length,correct:$.correct,questions:$.questions,answers:$.answers,skipped:$.skipped,isPractice:v};try{localStorage.setItem(Ud,JSON.stringify(U)),localStorage.setItem(qd,JSON.stringify({questions:$.questions,answers:$.answers,skipped:$.skipped}));const G=ds(Yd,[]),X=[{id:U.ts,ts:U.ts,cat:U.categoryLabel,slug:t,mode:v?"Practice":"Quiz",total:$.total,correct:$.correct,ms:O,snapshot:U},...G].slice(0,rv);localStorage.setItem(Yd,JSON.stringify(X))}catch(G){console.error("Error saving snapshot:",G)}localStorage.removeItem(nv);const M=rt.getCurrentUser();if(M!=null&&M.phone)if(v){const G=ie.recordPracticeSession(M.phone,{questionsCompleted:$.correct,correctAnswers:$.correct,category:t});$.earnedCoins=G.coinsEarned}else{const G=ie.recordQuizSession(M.phone,{score:$.correct,totalQuestions:$.total,category:t,difficulty:f,mode:"quiz"});$.earnedCoins=G.coinsEarned}else $.earnedCoins=0;i(),console.log("Setting review snapshot with:",{returnPath:w||"/",fromQuest:x||!1});const ee={...$,category:cs(t),categorySlug:t,difficulty:f,mode:v?"practice":"quiz",elapsedMs:O,isPractice:v,hasTimer:!v,earnedXP:v?0:$.correct*10,earnedCoins:v?$.earnedCoins||0:$.correct*5,returnPath:w||"/",fromQuest:x||!1};ie.storeCurrentResults(ee),J(ee),F("results")},[t,p,S,O,v,w,x]),L=()=>{const $=new Date;return`${$.getFullYear()}-${$.getMonth()+1}-${$.getDate()}`};d.useCallback($=>{if(v&&x){const Z=JSON.parse(localStorage.getItem("questProgress")||"{}"),U=Z.practiceQuestions||0,M=Math.min(U+$,15);Z.practiceQuestions=M,Z.date=L(),localStorage.setItem("questProgress",JSON.stringify(Z)),console.log("Practice progress updated:",M)}},[v,x]);const T=d.useCallback(()=>{w?e(w,{replace:!0}):g?e("/profile/history",{replace:!0,state:null}):e("/")},[g,e,w]),z=d.useCallback(()=>{console.log("Retake requested - Mode:",p,"isPractice:",v);const $=ds(Ud,null);if(!$||$.slug!==t){e(`/quiz/${t}?r=${Date.now()}`,{replace:!0,state:{mode:v?"practice":"quiz",difficulty:f,count:j,timer:v?null:S,retake:!0}});return}const Z=$.questions.map(U=>{const M=zm([0,1,2,3]);return{...U,options:M.map(ee=>U.options[ee]),answerIndex:M.indexOf(U.answerIndex)}});_({questions:Z,poolSize:Z.length}),q(Date.now()),I(0),F("quiz"),window.scrollTo(0,0)},[t,p,f,j,S,e,v]),B=d.useCallback(($=null)=>{if($)J($);else if(!Q){const Z=ds(qd,null);Z&&J({questions:Z.questions||[],answers:Z.answers||[],skipped:Z.skipped||[]})}F("review")},[Q]),W=d.useCallback(()=>{g?e("/profile/history",{replace:!0}):F("results")},[g,e]);return R?n.jsx("div",{className:"fixed inset-0 bg-inherit text-white flex items-center justify-center",children:n.jsx("div",{className:"text-sm text-base-muted",children:"Loading questions…"})}):h?n.jsx("div",{className:"fixed inset-0 bg-inherit text-white flex items-center justify-center",children:n.jsx("div",{className:"text-sm text-red-400",children:h})}):(console.log("Render - Current view:",P,"Session questions:",k.questions.length,"Mode:",p,"isPractice:",v),n.jsx("div",{className:"fixed inset-0 bg-inherit text-white z-0 overflow-hidden max-w-[100vw]",children:n.jsxs("div",{className:"h-full overflow-hidden px-0",children:[P==="quiz"&&k.questions.length>0&&n.jsx("div",{className:"h-full",children:n.jsx(Hg,{session:k,mode:v?"practice":"quiz",category:cs(t),difficulty:f,timerConfig:v?null:S,onComplete:D,onQuit:T,isPractice:v})}),P==="results"&&Q&&n.jsx(ev,{results:Q,onRetake:z,onReview:()=>B(Q),isRetake:y,isPractice:v,player:o,categories:Im,onNavigate:($,Z)=>{console.log("onNavigate called with:",$,Z),Z!=null&&Z.state?e($,{state:Z.state,replace:Z.replace||!1}):e($)}}),P==="review"&&Q&&n.jsx(tv,{questions:Q.questions||[],answers:Q.answers||[],skipped:Q.skipped||[],onBack:W,onRetake:z,fromHistory:g,isPractice:v})]})}))}const Cn=[{label:"General Knowledge",slug:"general-knowledge",color:"#7C3AED",soon:!1},{label:"Current Affairs",slug:"current-affairs",color:"#2563EB",soon:!1},{label:"Fun Facts",slug:"fun-facts",color:"#EF4444",soon:!1},{label:"Science",slug:"science",color:"#10B981",soon:!1},{label:"History",slug:"history",color:"#F59E0B",soon:!0},{label:"Geography",slug:"geography",color:"#FACC15",soon:!0},{label:"Cat 1",slug:"cat-1",color:"#06B6D4",soon:!0},{label:"Cat 2",slug:"cat-2",color:"#D946EF",soon:!0}],Vn=360/Cn.length,cv=42,ui=3e3,Qd=10,Gd=260,dv="cubic-bezier(.15,.7,.1,1)",uv="cubic-bezier(.2,.7,.2,1)",kn=5,mv=5,fv=(e="")=>String(e).toLowerCase().trim().replace(/[^\w\s-]/g,"").replace(/\s+/g,"-");function hv({muted:e=!1,size:t=18}){return n.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24","aria-hidden":"true",children:[n.jsx("path",{d:"M3 9h4l5-4v14l-5-4H3z",fill:"currentColor"}),!e&&n.jsxs(n.Fragment,{children:[n.jsx("path",{d:"M16 8c1.5 1.5 1.5 6 0 7.5",stroke:"currentColor",strokeWidth:"2",fill:"none",strokeLinecap:"round"}),n.jsx("path",{d:"M19 6c3 3 3 10 0 13",stroke:"currentColor",strokeWidth:"2",fill:"none",strokeLinecap:"round"})]}),e&&n.jsx("line",{x1:"3",y1:"21",x2:"21",y2:"3",stroke:"#EF4444",strokeWidth:"2.5",strokeLinecap:"round"})]})}function pv({q:e,locked:t,onPick:r,result:s}){if(!e)return null;const a=[e.option1,e.option2,e.option3,e.option4];return n.jsxs("div",{className:"mt-5 rounded-3xl bg-white/5 border border-white/10 p-4",children:[n.jsx("div",{className:"text-sm text-base-muted mb-1",children:"Quick question"}),n.jsx("div",{className:"text-xl font-semibold mb-4",children:e.question}),a.map((o,i)=>{const l=s&&o===e.answer,c=s&&s.pick===o&&o!==e.answer;return n.jsx("button",{disabled:t||!!s,onClick:()=>r(o),className:["w-full text-left px-4 py-2 rounded-xl mb-2 border transition",!s&&!t?"bg-white/5 hover:bg-white/10 border-white/10":"bg-white/5 border-white/10",l?"bg-green-600/20 border-green-400/60 text-green-200":"",c?"bg-red-600/20 border-red-400/60 text-red-200":""].join(" "),children:o},i)}),s&&n.jsxs("div",{className:"mt-3 text-sm",children:[s.correct?n.jsx("span",{className:"text-green-400 font-medium",children:"✅ Correct!"}):n.jsxs("span",{className:"text-red-400 font-medium",children:["❌ Not quite. Answer: ",n.jsx("b",{children:e.answer})]}),e.explanation&&n.jsxs("div",{className:"text-xs text-base-muted mt-1",children:["Tip: ",e.explanation]})]})]})}function xv(){const e=ke(),[t]=Ze("/sounds/correct.mp3",{volume:.7}),[r]=Ze("/sounds/wrong.mp3",{volume:.7}),[s,a]=d.useState(()=>[{name:"Player 1",color:"#60A5FA",scores:Array(kn).fill(null)},{name:"Player 2",color:"#F472B6",scores:Array(kn).fill(null)}]),[o,i]=d.useState(0),[l,c]=d.useState(1),u=s.reduce((U,M)=>U+M.scores.reduce((ee,G)=>ee+(G??0),0),0),[m,p]=d.useState(!0),f=d.useRef(null);d.useEffect(()=>{const U=new Audio("/sounds/spin.mp3");return U.loop=!0,U.volume=.7,f.current=U,()=>{try{U.pause(),U.src=""}catch{}}},[]);const w=()=>{if(m&&f.current)try{f.current.currentTime=0,f.current.play()}catch{}},x=()=>{if(f.current)try{f.current.pause(),f.current.currentTime=0}catch{}},[j,S]=d.useState(0),[y,g]=d.useState("none"),[v,N]=d.useState(!1),[C,R]=d.useState(null),[E,h]=d.useState(null),b=d.useMemo(()=>typeof window<"u"?window.matchMedia("(prefers-reduced-motion: reduce)").matches:!1,[]),[k,_]=d.useState([]);d.useEffect(()=>{(async()=>{try{const U=await fetch("/data/quiz_questions_bank.csv").then(K=>K.text()),{data:M}=hr.parse(U,{header:!0,skipEmptyLines:!0,transformHeader:K=>String(K).trim().toLowerCase()}),ee={a:0,b:1,c:2,d:3},G=M.map((K,X)=>{var le;const V=(K.question??"").trim();if(!V)return null;const Y=[K.option1,K.option2,K.option3,K.option4].map(de=>String(de??"").trim());if(Y.some(de=>!de))return null;let A=String(K.answer??"").trim(),te=ee[A.toLowerCase()];if(te===void 0){const de=Y.findIndex(ve=>ve.toLowerCase()===A.toLowerCase());te=de>=0?de:0}const se=Y[te];return{id:((le=K.id)==null?void 0:le.trim())||`ps_${X}`,question:V,option1:Y[0],option2:Y[1],option3:Y[2],option4:Y[3],answer:se,explanation:String(K.explanation??"").trim(),catSlug:fv(K.category??K.subject??"general knowledge"),difficulty:String(K.difficulty??"medium").toLowerCase().trim()}}).filter(Boolean);_(G)}catch{_([])}})()},[]);const[P,F]=d.useState(null),[Q,J]=d.useState(null),[H,q]=d.useState(!1),O=U=>(U%360+360)%360,I=U=>O(U),D=l>kn;function L(){if(s.length>=4)return;const U=["#60A5FA","#F472B6","#F59E0B","#34D399","#F87171","#A78BFA"],M=U[(s.length*2+1)%U.length];a(ee=>[...ee,{name:`Player ${ee.length+1}`,color:M,scores:Array(kn).fill(null)}])}function T(){s.length<=2||(a(U=>U.slice(0,-1)),i(U=>Math.min(U,s.length-2)))}function z(U){a(M=>M.map((ee,G)=>G===o?{...ee,scores:ee.scores.map((K,X)=>X===l-1?U:K)}:ee))}function B(){if(v||D)return;R(null),h(null),F(null),J(null),N(!0),w();const U=Math.floor(Math.random()*Cn.length),M=Cn[U],ee=Vn*.28,G=(Math.random()*2-1)*ee,K=O(j),X=180,Y=U*Vn+Vn/2+G;let A=I(Y-K-X);const te=cv*360+A,se=j+te+Qd;g(`transform ${b?800:ui}ms ${dv}`),S(se);try{navigator.vibrate&&!b&&navigator.vibrate([10,40,10])}catch{}setTimeout(()=>{g(`transform ${b?160:Gd}ms ${uv}`),S(le=>le-Qd)},b?800:ui),setTimeout(()=>{if(x(),N(!1),R(U),h(M.color),M.soon)return;const le=k.filter(ve=>ve.catSlug===M.slug&&ve.difficulty==="easy"),de=le.length?le:k.filter(ve=>ve.catSlug===M.slug);if(de.length){const ve=de[Math.floor(Math.random()*de.length)];F(ve)}else F({question:"No question found for this category yet. Try re-spinning!",option1:"Okay",option2:"Okay",option3:"Okay",option4:"Okay",answer:"Okay",explanation:""})},(b?800:ui)+(b?160:Gd)+40)}function W(U){if(!P||Q)return;const M=U===P.answer;if(J({correct:M,pick:U}),M){t(),q(!0),setTimeout(()=>q(!1),900);try{navigator.vibrate&&navigator.vibrate([8,16])}catch{}z(mv)}else{r();try{navigator.vibrate&&navigator.vibrate([4])}catch{}z(0)}}function $(){const U=(o+1)%s.length,M=U===0?l+1:l;i(U),c(M),R(null),h(null),F(null),J(null)}function Z(){const U=s.map(G=>G.scores.reduce((K,X)=>K+(X??0),0)),M=Math.max(...U),ee=s.filter((G,K)=>U[K]===M).map(G=>G.name).join(", ");alert(`${ee} win${ee.includes(",")?"":"s"} the pot of ${u} coins! 🎉`),e("/play")}return n.jsxs("div",{className:"min-h-screen bg-black text-white",children:[H&&n.jsx(Lm,{numberOfPieces:120,recycle:!1}),n.jsxs("div",{className:"mx-auto max-w-md px-5 pt-[calc(env(safe-area-inset-top)+1.25rem)] pb-[calc(5.25rem+env(safe-area-inset-bottom))]",children:[n.jsxs("header",{className:"flex items-center justify-between mb-4",children:[n.jsx("button",{onClick:()=>e("/play"),className:"h-10 w-10 grid place-items-center rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition","aria-label":"Back",children:"←"}),n.jsxs("div",{className:"text-center",children:[n.jsx("h1",{className:"text-2xl font-bold",children:"Party Spin"}),n.jsx("p",{className:"text-sm text-base-muted",children:"Pass & play • Winner takes the pot"})]}),n.jsx("button",{onClick:()=>p(U=>!U),className:"h-10 w-10 grid place-items-center rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition","aria-label":m?"Mute sound":"Unmute sound",title:m?"Sound on":"Sound off",children:n.jsx(hv,{muted:!m})})]}),n.jsxs("section",{className:"rounded-2xl border border-white/10 bg-white/5 p-3 mb-4",children:[n.jsxs("div",{className:"flex items-center justify-between mb-2",children:[n.jsxs("div",{className:"text-sm",children:["Round ",n.jsx("b",{children:Math.min(l,kn)}),"/",n.jsx("b",{children:kn})]}),n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx("button",{onClick:L,className:"btn-ghost px-2 py-1 text-sm",children:"+"}),n.jsx("span",{className:"text-sm text-base-muted",children:"Player"}),n.jsx("button",{onClick:T,className:"btn-ghost px-2 py-1 text-sm",children:"−"})]}),n.jsxs("div",{className:"text-sm",children:["Pot: ",n.jsx("b",{className:"text-yellow-300",children:u})," 🪙"]})]}),n.jsx("div",{className:"overflow-x-auto",children:n.jsxs("table",{className:"w-full table-fixed text-sm tracking-tight tabular-nums",children:[n.jsxs("colgroup",{children:[n.jsx("col",{style:{width:"42%"}}),n.jsx("col",{style:{width:"9%"}}),n.jsx("col",{style:{width:"9%"}}),n.jsx("col",{style:{width:"9%"}}),n.jsx("col",{style:{width:"9%"}}),n.jsx("col",{style:{width:"9%"}}),n.jsx("col",{style:{width:"13%"}})]}),n.jsx("thead",{children:n.jsxs("tr",{className:"text-base-muted",children:[n.jsx("th",{className:"text-left font-medium py-1 pr-1",children:"Player"}),Array.from({length:kn}).map((U,M)=>n.jsxs("th",{className:"font-medium text-center",children:["R",M+1]},M)),n.jsx("th",{className:"font-medium text-right pr-1",children:"Total"})]})}),n.jsx("tbody",{children:s.map((U,M)=>{const ee=U.scores.reduce((K,X)=>K+(X??0),0),G=M===o;return n.jsxs("tr",{className:G?"bg-white/6":"",children:[n.jsx("td",{className:"py-1 pr-1",children:n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx("span",{className:"inline-block h-3 w-3 rounded-full shrink-0",style:{background:U.color}}),n.jsx("input",{className:"bg-transparent outline-none font-semibold w-full",value:U.name,onChange:K=>a(X=>X.map((V,Y)=>Y===M?{...V,name:K.target.value}:V))})]})}),U.scores.map((K,X)=>n.jsx("td",{className:"text-center",children:K===null?"–":K},X)),n.jsx("td",{className:"text-right pr-1 font-semibold",children:ee})]},M)})})]})})]}),n.jsx("section",{className:"flex flex-col items-center",children:n.jsxs("div",{className:"relative w-[320px] h-[320px] md:w-[380px] md:h-[380px] rounded-full select-none",children:[E&&n.jsx("div",{className:"pointer-events-none absolute -inset-2 rounded-full",style:{boxShadow:`0 0 0 6px ${E}33, 0 0 30px 8px ${E}44`}}),n.jsx("div",{className:"absolute inset-0 rounded-full border border-white/10 shadow-2xl bg-black/20 overflow-hidden will-change-transform",style:{transform:`rotate(${j}deg)`,transition:y},"aria-label":"Category wheel",role:"group",children:n.jsxs("svg",{width:"100%",height:"100%",viewBox:"0 0 100 100",className:"block",children:[Cn.map((U,M)=>{const ee=M*Vn,G=ee+Vn,K=Vn>180?1:0,X=Math.PI*ee/180,V=Math.PI*G/180,Y=50+50*Math.cos(X),A=50-50*Math.sin(X),te=50+50*Math.cos(V),se=50-50*Math.sin(V),le=C===M;return n.jsxs("g",{style:{opacity:C==null?.95:le?1:.78,filter:C!=null&&!le?"blur(0.6px)":"none"},children:[n.jsx("path",{d:`M50,50 L${Y},${A} A50,50 0 ${K} 0 ${te},${se} Z`,fill:U.color,stroke:le?`${U.color}AA`:"rgba(255,255,255,0.14)",strokeWidth:le?"1.2":"0.6"}),n.jsx("text",{x:"50",y:"50",fill:"#ffffff",fontSize:"4",fontWeight:"700",dominantBaseline:"middle",transform:`rotate(${ee+Vn/2} 50 50) translate(12 0)`,children:n.jsxs("tspan",{children:[U.label,U.soon?" (soon)":""]})})]},U.slug)}),n.jsx("circle",{cx:"50",cy:"50",r:"9",fill:"rgba(0,0,0,0.55)",stroke:"white",strokeOpacity:"0.25"})]})}),n.jsx("button",{onClick:B,disabled:v||D,className:["absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2","h-16 w-16 rounded-full grid place-items-center","bg-white text-black font-extrabold shadow-soft transition active:scale-[0.98]",v||D?"opacity-60 cursor-not-allowed":"hover:bg-gray-200"].join(" "),"aria-label":"Spin the wheel",children:"SPIN"}),n.jsx("div",{className:"absolute left-1/2 -translate-x-1/2 -bottom-3 z-20",children:n.jsx("svg",{width:"22",height:"22",viewBox:"0 0 24 24",children:n.jsx("path",{d:"M12 4 L20 20 L4 20 Z",fill:"#ffffff"})})}),C!=null&&!v&&n.jsx("div",{className:"absolute left-1/2 -translate-x-1/2 -bottom-10",children:n.jsxs("div",{className:"px-3 py-1 rounded-full bg-white/10 border border-white/20 text-sm backdrop-blur",children:[n.jsx("span",{className:"inline-block h-2.5 w-2.5 rounded-full mr-2 align-middle",style:{background:Cn[C].color}}),Cn[C].label]})})]})}),n.jsx("section",{className:"mt-4",children:D?n.jsxs("div",{className:"rounded-2xl border border-white/10 bg-white/5 p-4",children:[n.jsx("div",{className:"text-xl font-semibold mb-2",children:"Match Over"}),n.jsxs("p",{className:"text-sm text-base-muted mb-3",children:["Top score takes the pot of ",n.jsx("b",{className:"text-yellow-300",children:u})," coins."]}),n.jsx("button",{className:"btn-primary w-full",onClick:Z,children:"End match"})]}):C!=null&&Cn[C].soon?n.jsxs("div",{className:"rounded-2xl border border-white/10 bg-white/5 p-4",children:[n.jsx("div",{className:"text-lg font-semibold mb-1",children:Cn[C].label}),n.jsx("p",{className:"text-sm text-base-muted mb-3",children:"This category is arriving soon. Spin again!"}),n.jsx("button",{className:"btn-primary",onClick:B,disabled:v,children:"Re-spin"})]}):n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:"text-sm text-center text-base-muted mb-1",children:["Turn: ",n.jsx("span",{style:{color:s[o].color},children:s[o].name})," ","| Round ",l,"/",kn]}),n.jsx(pv,{q:P,locked:v||!P,onPick:W,result:Q}),Q&&n.jsx("div",{className:"mt-3 flex justify-center",children:n.jsx("button",{className:"btn-primary",onClick:$,children:"Next turn"})})]})})]}),n.jsx("div",{className:"pointer-events-none fixed inset-x-0 bottom-0 bg-[#0B0F1A]",style:{height:"calc(5.25rem + env(safe-area-inset-bottom))"},"aria-hidden":!0})]})}const gv=({onSelect:e})=>{const t=[{id:"random",emoji:"🎲",title:"Random Mix",color:"from-purple-500 to-pink-500"},{id:"trending",emoji:"📈",title:"Trending Now",color:"from-blue-500 to-cyan-500"},{id:"level",emoji:"📊",title:"Your Level",color:"from-green-500 to-teal-500"},{id:"daily",emoji:"🎯",title:"Daily Challenge",color:"from-orange-500 to-red-500"}];return n.jsxs("div",{className:"fixed inset-0 bg-gray-900 overflow-hidden flex flex-col justify-center items-center px-4",children:[n.jsx("h1",{className:"text-2xl font-bold text-white mb-20",children:"Choose a swipe mode"}),n.jsx("div",{className:"grid grid-cols-2 gap-4 w-full max-w-md h-[55vh]",children:t.map(r=>n.jsxs("button",{onClick:()=>e(r.id,r.title),className:`rounded-3xl bg-gradient-to-br ${r.color} p-6 flex flex-col items-center justify-center gap-3 transform hover:scale-105 transition-all shadow-xl`,children:[n.jsx("span",{className:"text-5xl",children:r.emoji}),n.jsx("span",{className:"text-white font-bold text-lg text-center",children:r.title})]},r.id))})]})},vv=()=>{ke(),wn();const[e,t]=d.useState([]),[r,s]=d.useState(0),[a,o]=d.useState({}),[i,l]=d.useState(0),[c,u]=d.useState(5),[m,p]=d.useState(0),[f,w]=d.useState(!0),[x,j]=d.useState(null),[S,y]=d.useState(!0),[g,v]=d.useState(null),[N,C]=d.useState(""),[R,E]=d.useState(!1),[h,b]=d.useState(""),[k,_]=d.useState(!1),[P,F]=d.useState(!1),[Q,J]=d.useState(!1),[H,q]=d.useState(!1),[O,I]=d.useState(!1),[D,L]=d.useState(!1),[T,z]=d.useState(0),[B,W]=d.useState(0),[$,Z]=d.useState(-1),[U,M]=d.useState(-1),[ee,G]=d.useState({}),[K,X]=d.useState({}),[V,Y]=d.useState(ie.getCoins()),A=d.useRef(null),[te,se]=d.useState(null),[le,de]=d.useState(!1),ve=d.useRef(null),Se=d.useRef(null),[mt]=Ze("/sounds/correct.mp3",{volume:.6}),[we]=Ze("/sounds/wrong.mp3",{volume:.6}),[Ge]=Ze("/sounds/coin.mp3",{volume:.75}),Ce=["🐼","🐱","🐶","🦊","🐰","🐨","🐯","🦁","🐸","🐵"],$e=()=>{t([]),s(0),o({}),l(0),u(5),p(0),w(!0),j(null),E(!1),b(""),_(!1),F(!1),J(!1),q(!1),I(!1),L(!1),z(0),W(0),Z(-1),M(-1),G({}),X({}),v(null),C(""),lt(null),de(!1)};d.useEffect(()=>($e(),y(!0),()=>{document.body.classList.remove("hide-bottom-nav"),$e(),Se.current&&clearTimeout(Se.current)}),[]),d.useEffect(()=>{const ae=me=>{!S&&e.length>0&&(me.preventDefault(),F(!0))};return!S&&e.length>0&&window.history.pushState({inQuiz:!0},"",window.location.pathname),window.addEventListener("popstate",ae),()=>window.removeEventListener("popstate",ae)},[S,e.length]),d.useEffect(()=>{!S&&e.length>0?document.body.classList.add("hide-bottom-nav"):document.body.classList.remove("hide-bottom-nav")},[S,e.length]),d.useEffect(()=>{!S&&e.length>0&&q(!0)},[S,e.length]);const[ft,lt]=d.useState(null);d.useEffect(()=>{const ae=me=>{var Ne;if(H&&!Q){const ye=me.target.closest('button[type="button"]'),We=(Ne=ye==null?void 0:ye.querySelector(".text-\\[10px\\]"))==null?void 0:Ne.textContent;We&&["Home","Play","Profile","Swipe"].includes(We)&&(me.preventDefault(),me.stopPropagation(),lt({Home:"/",Play:"/play",Profile:"/profile",Swipe:"/swipe"}[We]),F(!0))}};return document.addEventListener("click",ae,!0),()=>document.removeEventListener("click",ae,!0)},[H,Q]),d.useEffect(()=>{const ae=ve.current;if(!ae)return;let me=!1,Ne=0,ye=null;const We=Xe=>{!S&&e.length>0&&Xe.preventDefault()},je=Xe=>{Ne=Xe.touches[0].clientY,me=!1},He=Xe=>{!S&&e.length>0&&!P&&!k&&Xe.preventDefault()},Pe=Xe=>{if(me||P||k)return;const ue=Xe.changedTouches[0].clientY,he=Ne-ue;if(Math.abs(he)>30){if(me=!0,ye&&clearTimeout(ye),he>0&&r<e.length-1){const ne=r+1;s(ne),ae.scrollTo({top:ne*window.innerHeight,behavior:"smooth"})}else if(he<0&&r>0){const ne=r-1;s(ne),ae.scrollTo({top:ne*window.innerHeight,behavior:"smooth"})}ye=setTimeout(()=>{me=!1},800)}};return ae.addEventListener("touchstart",je,{passive:!1}),ae.addEventListener("touchmove",He,{passive:!1}),ae.addEventListener("touchend",Pe,{passive:!1}),ae.addEventListener("wheel",We,{passive:!1}),()=>{ae.removeEventListener("touchstart",je),ae.removeEventListener("touchmove",He),ae.removeEventListener("touchend",Pe),ae.removeEventListener("wheel",We),ye&&clearTimeout(ye)}},[r,e.length,S]),d.useEffect(()=>{const ae=ve.current;ae&&(P||k?(ae.style.overflow="hidden",ae.style.touchAction="none"):(ae.style.overflow="auto",ae.style.touchAction="auto"))},[P,k]),d.useEffect(()=>{(P||k)&&Se.current&&(clearTimeout(Se.current),Se.current=null)},[P,k]);const Ee=async ae=>{try{const Ne=await(await fetch("/data/quiz_questions_bank.csv")).text(),{data:ye}=hr.parse(Ne,{header:!0,skipEmptyLines:!0}),He=ye.map((Pe,Xe)=>{var ne,ce;const ue=[Pe.option1,Pe.option2,Pe.option3,Pe.option4].filter(Boolean),he={A:0,B:1,C:2,D:3};return{id:Pe.id||`q_${Xe}`,prompt:Pe.question,options:ue,answerIndex:he[(ne=Pe.answer)==null?void 0:ne.toUpperCase()]||0,category:Pe.category||"General Knowledge",difficulty:((ce=Pe.difficulty)==null?void 0:ce.toLowerCase())||"medium",explanation:Pe.explanation||"",stats:{views:Math.floor(Math.random()*1e4)+1e3,attempted:Math.floor(Math.random()*5e3)+500,correctRate:Math.floor(Math.random()*40)+30}}}).filter(Pe=>Pe.prompt&&Pe.options.length===4).sort(()=>Math.random()-.5).slice(0,50).map(Pe=>({...Pe,mascot:Ce[Math.floor(Math.random()*Ce.length)]}));t(He),w(!1)}catch(me){console.error("Failed to load questions:",me),w(!1)}},Be=ae=>ae===1||ae===3||ae===7||ae===10||ae===15||ae===20||ae>20&&ae%5===0,tt=(ae,me)=>{if(a[ae]!==void 0)return;const Ne=e.find(je=>je.id===ae),ye=me===Ne.answerIndex,We=e.findIndex(je=>je.id===ae);if(o(je=>({...je,[ae]:me})),z(je=>je+1),W(je=>je+1),ye){mt(),l(He=>He+1),p(He=>He+2),ie.addCoins(2,"Swipe Quiz Correct Answer");const je=ie.getCoins();if(Y(je),L(!0),setTimeout(()=>{Ge(),console.log("Coin pill ref:",A.current),A.current?se({startRect:{left:window.innerWidth/2-50,top:window.innerHeight/2,width:100,height:100},count:2,amount:2}):console.log("Coin pill ref not available")},300),setTimeout(()=>L(!1),2e3),Pt(),Be(We+1)){const He=["Awesome!","Perfect!","Brilliant!","Outstanding!","Incredible!"];b(He[Math.floor(Math.random()*He.length)]),E(!0),setTimeout(()=>E(!1),2e3)}}else if(we(),l(0),I(!0),setTimeout(()=>I(!1),1500),u(je=>{const He=Math.max(0,je-1);return He===0&&setTimeout(()=>_(!0),500),He}),c>1&&Be(We+1)){const je=["Keep trying!","You got this!","Don't give up!","Stay strong!","Keep going!"];b(je[Math.floor(Math.random()*je.length)]),E(!0),setTimeout(()=>E(!1),2e3)}(c>1||ye)&&(Se.current=setTimeout(()=>{Ae()},2500))},Pt=()=>{const ae=document.createElement("div");ae.style.position="fixed",ae.style.inset="0",ae.style.pointerEvents="none",ae.style.zIndex="1000",document.body.appendChild(ae);const me=["🎉","✨","⭐","🎊","🌟"];for(let Ne=0;Ne<20;Ne++){const ye=document.createElement("div");ye.textContent=me[Math.floor(Math.random()*me.length)],ye.style.position="fixed",ye.style.left=`${Math.random()*100}%`,ye.style.top="-50px",ye.style.fontSize="24px",ye.style.animation=`fall ${2+Math.random()*2}s ease-out`,ae.appendChild(ye)}setTimeout(()=>ae.remove(),4e3)},Ae=()=>{if(!(P||k)&&r<e.length-1){const ae=r+1,me=document.getElementById(`question-${ae}`);me==null||me.scrollIntoView({behavior:"smooth"}),s(ae)}},Te=ae=>{const me=e.findIndex(je=>je.id===ae);if($>=0&&T<5){j(`After ${5-T} attempts`),setTimeout(()=>j(null),2e3);return}const Ne=e[me],We=[0,1,2,3].filter(je=>je!==Ne.answerIndex).sort(()=>Math.random()-.5).slice(0,2);G({...ee,[ae]:We}),Z(me),z(0)},Ue=ae=>{const me=e.findIndex(Xe=>Xe.id===ae);if(U>=0&&B<5){j(`After ${5-B} attempts`),setTimeout(()=>j(null),2e3);return}const ye=e[me].answerIndex,We=[0,0,0,0],je=40+Math.floor(Math.random()*31);We[ye]=je;let He=100-je;const Pe=[0,1,2,3].filter(Xe=>Xe!==ye);for(let Xe=0;Xe<Pe.length-1;Xe++){const ue=Math.floor(Math.random()*(He/2));We[Pe[Xe]]=ue,He-=ue}We[Pe[Pe.length-1]]=He,X({...K,[ae]:We}),M(me),W(0)},on=(ae,me)=>{$e(),v(ae),C(me),y(!1),Ee()},Xr=()=>{lt("/swipe"),F(!0)},Vr=()=>{J(!0),F(!1),document.body.classList.remove("hide-bottom-nav")},Jr=()=>{const ae=Object.keys(a).filter(me=>{const Ne=e.find(ye=>ye.id===me);return a[me]===(Ne==null?void 0:Ne.answerIndex)}).length;return d.useEffect(()=>{const me=ie.getCoins();Y(me)},[]),d.useEffect(()=>{document.body.classList.add("hide-bottom-nav"),m>0&&A.current&&!le&&(de(!0),setTimeout(()=>{se({startRect:{left:window.innerWidth/2-50,top:window.innerHeight/2,width:100,height:100},count:Math.min(m,10),amount:m}),Ge()},100));const me=setTimeout(()=>{const Ne=ie.getCoins();Y(Ne),$e(),q(!1),J(!1),y(!0),document.body.classList.remove("hide-bottom-nav")},2e3);return()=>{clearTimeout(me),document.body.classList.remove("hide-bottom-nav")}},[m,le]),n.jsxs("div",{className:"fixed inset-0 bg-gray-900 z-50",children:[te&&n.jsx(Gn,{startRect:te.startRect,targetRef:A,count:te.count,onDone:()=>{se(null)}}),n.jsx("div",{className:"fixed top-12 right-4 z-50",children:n.jsxs("div",{ref:A,className:"flex items-center gap-1 bg-yellow-500/20 px-3 py-1.5 rounded-full backdrop-blur",children:[n.jsx("span",{children:"🪙"}),n.jsx("span",{className:"font-bold text-yellow-400",children:V})]})}),n.jsx("div",{className:"flex items-center justify-center p-4 h-full",children:n.jsxs("div",{className:"bg-gray-800 rounded-3xl p-8 max-w-md w-full text-center border border-gray-700",children:[n.jsx("div",{className:"text-5xl mb-4",children:"🎉"}),n.jsx("h2",{className:"text-2xl font-bold text-white mb-4",children:"Session Complete!"}),n.jsxs("div",{className:"space-y-4",children:[n.jsxs("div",{className:"bg-gray-700/50 rounded-xl p-4",children:[n.jsx("div",{className:"text-gray-400 text-sm mb-1",children:"Questions Answered"}),n.jsx("div",{className:"text-2xl font-bold text-white",children:Object.keys(a).length})]}),n.jsxs("div",{className:"bg-gray-700/50 rounded-xl p-4",children:[n.jsx("div",{className:"text-gray-400 text-sm mb-1",children:"Correct Answers"}),n.jsx("div",{className:"text-2xl font-bold text-green-400",children:ae})]}),n.jsxs("div",{className:"bg-gray-700/50 rounded-xl p-4",children:[n.jsx("div",{className:"text-gray-400 text-sm mb-1",children:"Coins Earned"}),n.jsxs("div",{className:"text-2xl font-bold text-yellow-400",children:["🪙 ",m]})]}),n.jsxs("div",{className:"bg-gray-700/50 rounded-xl p-4",children:[n.jsx("div",{className:"text-gray-400 text-sm mb-1",children:"Lives Remaining"}),n.jsx("div",{className:"text-2xl font-bold text-red-400",children:Array.from({length:5},(me,Ne)=>n.jsx("span",{className:Ne<c?"":"opacity-30",children:"❤️"},Ne))})]})]})]})})]})};return Q?n.jsx(Jr,{}):S?n.jsx(gv,{onSelect:on}):f?n.jsx("div",{className:"h-screen bg-gray-900 flex items-center justify-center",children:n.jsx("div",{className:"text-white",children:"Loading questions..."})}):n.jsxs("div",{className:"h-screen bg-gray-900 relative",children:[te&&n.jsx(Gn,{startRect:te.startRect,targetRef:A,count:te.count,onDone:()=>{const ae=ie.getCoins();Y(ae),se(null)}}),n.jsxs("div",{className:"fixed top-0 left-0 right-0 bg-gray-900/95 backdrop-blur z-50 border-b border-gray-800 pt-12",children:[n.jsxs("div",{className:"flex items-center justify-between px-4 py-3",children:[n.jsx("button",{onClick:Xr,className:"inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/15 rounded-xl text-white text-sm font-medium hover:bg-white/15 transition-all",children:"← Back"}),n.jsxs("div",{className:"flex items-center gap-4",children:[n.jsxs("div",{ref:A,className:"flex items-center gap-1 bg-yellow-500/20 px-3 py-1 rounded-full",children:[n.jsx("span",{children:"🪙"}),n.jsx("span",{className:"font-bold text-yellow-400",children:V})]}),n.jsxs("div",{className:"flex items-center gap-1 bg-orange-500/20 px-3 py-1 rounded-full",children:[n.jsx("span",{children:"🔥"}),n.jsx("span",{className:"font-bold text-orange-400",children:i})]})]}),n.jsx("div",{className:"flex items-center gap-1",children:Array.from({length:5},(ae,me)=>n.jsx("span",{className:`${me<c?"text-red-500":"text-gray-600 opacity-30"} ${O&&me===c-1?"animate-heartLoss":""}`,children:"❤️"},me))})]}),N&&n.jsx("div",{className:"text-center py-1",children:n.jsx("span",{className:"text-xs text-gray-400",children:N})})]}),D&&n.jsx("div",{className:"fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[100] pointer-events-none",children:n.jsx("div",{className:"bg-yellow-500 text-white px-6 py-3 rounded-full font-bold text-2xl animate-coinFloat",children:"+2 🪙"})}),n.jsx("div",{ref:ve,className:"h-full overflow-y-hidden snap-y snap-mandatory pt-32",style:{scrollBehavior:"smooth",overscrollBehavior:"none",WebkitOverflowScrolling:"touch",touchAction:"none"},children:e.map((ae,me)=>n.jsx(yv,{question:ae,index:me,answered:a[ae.id],onAnswer:Ne=>tt(ae.id,Ne),onFiftyFifty:()=>Te(ae.id),onAudience:()=>Ue(ae.id),eliminated:ee[ae.id]||[],audiencePercentages:K[ae.id],canUseFiftyFifty:$<0||T>=5,canUseAudience:U<0||B>=5},ae.id))}),k&&n.jsx("div",{className:"fixed inset-0 bg-black/75 flex items-center justify-center z-50 p-4",children:n.jsxs("div",{className:"bg-gray-800 rounded-3xl p-6 max-w-sm w-full text-center border border-gray-700",children:[n.jsx("div",{className:"text-5xl mb-4",children:"😔"}),n.jsx("h3",{className:"text-xl font-bold mb-2 text-white",children:"No Lives Left!"}),n.jsx("p",{className:"text-gray-400 mb-6",children:"Sorry, you have no lives left to continue swiping."}),n.jsx("button",{onClick:()=>{J(!0),document.body.classList.remove("hide-bottom-nav")},className:"w-full bg-gradient-to-r from-blue-600 to-purple-600 py-3 rounded-xl text-white font-medium",children:"View Results"})]})}),P&&n.jsx("div",{className:"fixed inset-0 bg-black/75 flex items-center justify-center z-50 p-4",children:n.jsxs("div",{className:"bg-gray-800 rounded-3xl p-6 max-w-sm w-full text-center border border-gray-700",children:[n.jsx("div",{className:"text-4xl mb-4",children:"🤔"}),n.jsx("h3",{className:"text-xl font-bold mb-2 text-white",children:"Leave Swipe Mode?"}),n.jsx("p",{className:"text-gray-400 mb-6",children:"Your progress will be saved"}),n.jsxs("div",{className:"flex gap-3",children:[n.jsx("button",{onClick:()=>F(!1),className:"flex-1 bg-blue-600 hover:bg-blue-700 py-3 rounded-xl font-medium text-white",children:"Stay"}),n.jsx("button",{onClick:Vr,className:"flex-1 bg-gray-700 hover:bg-gray-600 py-3 rounded-xl font-medium text-white",children:"Leave"})]})]})}),R&&n.jsx("div",{className:"fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50",children:n.jsx("div",{className:"bg-gradient-to-br from-purple-600 to-pink-600 px-8 py-6 rounded-3xl text-white font-bold text-2xl shadow-2xl animate-fadeIn",children:h})}),x&&n.jsx("div",{className:"fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 pointer-events-none",children:n.jsx("div",{className:"bg-gray-800/90 px-6 py-3 rounded-full text-white font-bold animate-fadeIn",children:x})}),n.jsx("style",{jsx:!0,children:`
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
      `})]})},yv=({question:e,index:t,answered:r,onAnswer:s,onFiftyFifty:a,onAudience:o,eliminated:i,audiencePercentages:l,canUseFiftyFifty:c,canUseAudience:u})=>{const m=p=>{switch(p){case"easy":return"from-green-500 to-green-600";case"hard":return"from-red-500 to-red-600";default:return"from-yellow-500 to-yellow-600"}};return n.jsxs("div",{id:`question-${t}`,className:"h-screen snap-start flex flex-col px-4 pb-4",style:{paddingTop:"150px"},children:[n.jsx("div",{className:"flex justify-center py-2",children:n.jsx("span",{className:"text-8xl",style:{animation:"float 3s ease-in-out infinite"},children:e.mascot})}),n.jsxs("div",{className:"flex-1 flex flex-col justify-start max-w-md mx-auto w-full",children:[n.jsxs("div",{className:`bg-gradient-to-br ${m(e.difficulty)} p-6 rounded-3xl mb-4`,children:[n.jsxs("div",{className:"text-white/80 text-sm mb-2",children:["Question ",t+1]}),n.jsx("h2",{className:"text-2xl font-bold text-white",children:e.prompt})]}),n.jsx("div",{className:"space-y-3 mb-3",children:e.options.map((p,f)=>{const w=r!==void 0,x=r===f,j=f===e.answerIndex,S=i.includes(f);let y="w-full p-4 rounded-2xl font-medium transition-all ";return S?y+="bg-gray-700/30 text-gray-500/50 cursor-not-allowed":w?j?y+="bg-green-500 text-white":x?y+="bg-red-500 text-white":y+="bg-gray-700 text-gray-400":y+="bg-gray-800 text-white hover:bg-gray-700",n.jsx("button",{onClick:()=>!w&&!S&&s(f),disabled:w||S,className:y,children:n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsx("span",{className:"text-lg",children:["🅰️","🅱️","🅲️","🅳️"][f]}),n.jsx("span",{className:"flex-1 text-left",children:p}),l&&l[f]>0&&n.jsxs("span",{className:"bg-purple-600/20 px-2 py-1 rounded-full text-xs",children:[l[f],"%"]}),w&&j&&n.jsx("span",{children:"✓"})]})},f)})}),!r&&n.jsxs("div",{className:"flex justify-center gap-3 mb-3",children:[n.jsx("button",{onClick:a,disabled:!c,className:`px-4 py-2 rounded-lg font-medium text-sm ${c?"bg-orange-600 text-white":"bg-gray-700 text-gray-500"}`,children:"⚡ 50:50"}),n.jsx("button",{onClick:o,disabled:!u,className:`px-4 py-2 rounded-lg font-medium text-sm ${u?"bg-purple-600 text-white":"bg-gray-700 text-gray-500"}`,children:"👥 Audience"})]}),n.jsx("div",{className:"text-center mt-3 mb-2",children:n.jsxs("div",{className:"text-gray-500 text-xs",children:[e.stats.views.toLocaleString()," views • ",e.stats.attempted.toLocaleString()," attempted • ",e.stats.correctRate,"% correct"]})}),n.jsx("div",{className:"text-center mt-12 mb-4",children:n.jsx("div",{className:"text-gray-500 text-sm animate-bounce",children:"Swipe up for next"})})]})]})};function bv(){const[e]=Pm(),t=ke();return et(),d.useEffect(()=>{const r=e.get("category"),s=e.get("difficulty"),a=e.get("from")==="quest",o=["general-knowledge","fun-facts","science","history","geography","computer","artificial-intelligence","sports","mixed"],i=["easy","medium","hard"],l=r==="random"?o[Math.floor(Math.random()*o.length)]:r||"mixed",c=s==="random"?i[Math.floor(Math.random()*i.length)]:s||"medium";console.log("QuizPlay - fromQuest:",a),console.log("QuizPlay - returnPath will be:",a?"/quests":"/"),t(`/quiz/${l}`,{replace:!0,state:{mode:"quiz",difficulty:c,count:5,timer:{type:"per_q",seconds:45},fromQuest:a,returnPath:a?"/profile/quests":"/"}})},[e,t]),n.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh",background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",color:"white",fontSize:"20px"},children:"Starting your quiz..."})}function wv(){const[e]=Pm(),t=ke();return d.useEffect(()=>{const r=e.get("questions")||"15",s=e.get("difficulty")||"easy",a=e.get("category")||"mixed",o=e.get("from")==="quest",i=["general-knowledge","fun-facts","science","history","geography","computer","artificial-intelligence","sports"],l=a==="random"?i[Math.floor(Math.random()*i.length)]:a;console.log("PracticeStart - Launching practice mode:",{category:l,difficulty:s,questions:r,fromQuest:o}),t(`/quiz/${l}`,{replace:!0,state:{mode:"practice",difficulty:s,count:parseInt(r),timer:{type:"off",seconds:0},fromQuest:o,questType:o?"practiceQuestions":null,returnPath:o?"/profile/quests":"/"}})},[e,t]),n.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh",background:"linear-gradient(135deg, #10B981 0%, #059669 100%)",color:"white",fontSize:"20px"},children:"Loading practice questions..."})}/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jv=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Nv=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,r,s)=>s?s.toUpperCase():r.toLowerCase()),Wd=e=>{const t=Nv(e);return t.charAt(0).toUpperCase()+t.slice(1)},Mm=(...e)=>e.filter((t,r,s)=>!!t&&t.trim()!==""&&s.indexOf(t)===r).join(" ").trim(),kv=e=>{for(const t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0};/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Sv={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cv=d.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:r=2,absoluteStrokeWidth:s,className:a="",children:o,iconNode:i,...l},c)=>d.createElement("svg",{ref:c,...Sv,width:t,height:t,stroke:e,strokeWidth:s?Number(r)*24/Number(t):r,className:Mm("lucide",a),...!o&&!kv(l)&&{"aria-hidden":"true"},...l},[...i.map(([u,m])=>d.createElement(u,m)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kr=(e,t)=>{const r=d.forwardRef(({className:s,...a},o)=>d.createElement(Cv,{ref:o,iconNode:t,className:Mm(`lucide-${jv(Wd(e))}`,`lucide-${e}`,s),...a}));return r.displayName=Wd(e),r};/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ev=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],Tv=Kr("chevron-left",Ev);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pv=[["rect",{x:"3",y:"8",width:"18",height:"4",rx:"1",key:"bkv52"}],["path",{d:"M12 8v13",key:"1c76mn"}],["path",{d:"M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7",key:"6wjy6b"}],["path",{d:"M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5",key:"1ihvrl"}]],Rv=Kr("gift",Pv);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _v=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],Av=Kr("lock",_v);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iv=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]],Lv=Kr("shield",Iv);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dv=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],Hd=Kr("sparkles",Dv);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zv=[["line",{x1:"10",x2:"14",y1:"2",y2:"2",key:"14vaq8"}],["line",{x1:"12",x2:"15",y1:"14",y2:"11",key:"17fdiu"}],["circle",{cx:"12",cy:"14",r:"8",key:"1e1u0o"}]],Mv=Kr("timer",zv);function Ov({show:e,onClose:t,coins:r,onNavigateToPlay:s}){return e?n.jsxs("div",{className:"fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4",onClick:a=>{a.target===a.currentTarget&&t()},children:[n.jsxs("div",{className:"bg-gray-800 rounded-3xl p-6 w-full max-w-md border border-gray-700 relative overflow-hidden",onClick:a=>a.stopPropagation(),children:[n.jsx("div",{className:"absolute inset-0 opacity-10",children:n.jsx("div",{className:"h-full bg-gradient-to-br from-yellow-400 to-orange-500"})}),n.jsxs("div",{className:"relative",children:[n.jsxs("div",{className:"flex items-center justify-between mb-6",children:[n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsx("div",{className:"text-5xl",style:{animation:"coinRotate 2s linear infinite"},children:"🪙"}),n.jsxs("div",{children:[n.jsx("h3",{className:"text-2xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent",children:"Your Treasure"}),n.jsxs("p",{className:"text-3xl font-bold text-white mt-1",children:[r," Coins"]})]})]}),n.jsx("button",{onClick:t,className:"w-8 h-8 rounded-lg bg-white/5 border border-gray-600 grid place-items-center hover:bg-white/10 transition",children:"✕"})]}),n.jsxs("div",{className:"mb-6",children:[n.jsx("h4",{className:"text-sm font-medium text-gray-400 mb-3",children:"Ways to Earn"}),n.jsxs("div",{className:"space-y-3",children:[n.jsx("div",{className:"p-4 rounded-xl bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 hover:scale-[1.02] transition-transform",children:n.jsxs("div",{className:"flex items-center justify-between",children:[n.jsxs("div",{children:[n.jsxs("div",{className:"font-medium flex items-center gap-2",children:[n.jsx("span",{className:"text-2xl",children:"✅"}),"Complete Quizzes"]}),n.jsx("div",{className:"text-xs text-gray-400 mt-1",children:"+5 coins per correct answer"})]}),n.jsx("div",{className:"text-green-400 font-bold",children:"+5"})]})}),n.jsx("div",{className:"p-4 rounded-xl bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 hover:scale-[1.02] transition-transform",children:n.jsxs("div",{className:"flex items-center justify-between",children:[n.jsxs("div",{children:[n.jsxs("div",{className:"font-medium flex items-center gap-2",children:[n.jsx("span",{className:"text-2xl",children:"🎯"}),"Daily Challenge"]}),n.jsx("div",{className:"text-xs text-gray-400 mt-1",children:"Complete daily for bonus"})]}),n.jsx("div",{className:"text-blue-400 font-bold",children:"+5"})]})}),n.jsx("div",{className:"p-4 rounded-xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 hover:scale-[1.02] transition-transform",children:n.jsxs("div",{className:"flex items-center justify-between",children:[n.jsxs("div",{children:[n.jsxs("div",{className:"font-medium flex items-center gap-2",children:[n.jsx("span",{className:"text-2xl",children:"🎰"}),"Spin & Play"]}),n.jsx("div",{className:"text-xs text-gray-400 mt-1",children:"Test your luck!"})]}),n.jsx("div",{className:"text-purple-400 font-bold",children:"+50"})]})}),n.jsx("div",{className:"p-4 rounded-xl bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/20 hover:scale-[1.02] transition-transform",children:n.jsxs("div",{className:"flex items-center justify-between",children:[n.jsxs("div",{children:[n.jsxs("div",{className:"font-medium flex items-center gap-2",children:[n.jsx("span",{className:"text-2xl",children:"🏆"}),"Achievements"]}),n.jsx("div",{className:"text-xs text-gray-400 mt-1",children:"Unlock special rewards"})]}),n.jsx("div",{className:"text-orange-400 font-bold",children:"+???"})]})})]})]}),n.jsxs("div",{className:"mb-6",children:[n.jsxs("div",{className:"flex justify-between text-xs text-gray-400 mb-2",children:[n.jsx("span",{children:"Next reward"}),n.jsxs("span",{children:[100-r%100," coins to go"]})]}),n.jsx("div",{className:"h-2 bg-white/10 rounded-full overflow-hidden",children:n.jsx("div",{className:"h-full bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full transition-all",style:{width:`${r%100}%`}})})]}),n.jsx("button",{onClick:s,className:"w-full py-3 rounded-xl bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-bold hover:scale-[1.02] transition-transform shadow-lg",children:"Start Earning Now! 🚀"})]})]}),n.jsx("style",{children:`
        @keyframes coinRotate {
          from { transform: rotateY(0deg); }
          to { transform: rotateY(360deg); }
        }
      `})]}):null}function Fv(){const e=ke();d.useEffect(()=>(document.body.classList.add("hide-bottom-nav"),()=>{document.body.classList.remove("hide-bottom-nav")}),[]);const[t]=Ze("/sounds/correct.mp3",{volume:.6}),[r]=Ze("/sounds/coin.mp3",{volume:.7}),[s]=Ze("/sounds/click.mp3",{volume:.5}),[a]=Ze("/sounds/wrong.mp3",{volume:.5}),o=d.useRef(null),i=d.useRef({}),[l,c]=d.useState(!1),[u,m]=d.useState(ie.getCoins()),[p,f]=d.useState(null),[w,x]=d.useState([{id:"bronze",name:"Bronze",opened:!1,reward:null,minCoins:5,maxCoins:15,color:"from-amber-600 to-amber-700",glow:"shadow-amber-500/30",miniGame:"tap",tapsRequired:3,tapsCount:0},{id:"silver",name:"Silver",opened:!1,reward:null,minCoins:20,maxCoins:40,color:"from-gray-400 to-gray-500",glow:"shadow-gray-400/30",miniGame:"swipe",swipePattern:null,swipeComplete:!1},{id:"gold",name:"Gold",opened:!1,reward:null,minCoins:50,maxCoins:100,color:"from-yellow-400 to-yellow-500",glow:"shadow-yellow-400/30",xpChance:.7,miniGame:"hold",holdDuration:2,holdProgress:0,isHolding:!1}]),[j,S]=d.useState(!1),[y,g]=d.useState(0),[v,N]=d.useState(null),[C,R]=d.useState(""),[E,h]=d.useState(null),[b,k]=d.useState(null),[_,P]=d.useState(null);d.useEffect(()=>{F();const T=setInterval(Q,1e3);return()=>clearInterval(T)},[]);const F=()=>{const T=[{id:"bronze",name:"Bronze",opened:!1,reward:null,minCoins:5,maxCoins:15,color:"from-amber-600 to-amber-700",glow:"shadow-amber-500/30",miniGame:"tap",tapsRequired:3,tapsCount:0},{id:"silver",name:"Silver",opened:!1,reward:null,minCoins:20,maxCoins:40,color:"from-gray-400 to-gray-500",glow:"shadow-gray-400/30",miniGame:"tap",tapsRequired:3,tapsCount:0},{id:"gold",name:"Gold",opened:!1,reward:null,minCoins:50,maxCoins:100,color:"from-yellow-400 to-yellow-500",glow:"shadow-yellow-400/30",xpChance:.7,miniGame:"tap",tapsRequired:3,tapsCount:0}];x(T),g(0);const z=new Date().toDateString();N(z),ie.safeSet("surprise_zone_data",{date:z,boxes:T,totalEarned:0})},Q=()=>{const T=new Date,z=new Date(T);z.setDate(z.getDate()+1),z.setHours(0,0,0,0);const B=z-T,W=Math.floor(B/(1e3*60*60)),$=Math.floor(B%(1e3*60*60)/(1e3*60)),Z=Math.floor(B%(1e3*60)/1e3);R(`${W.toString().padStart(2,"0")}:${$.toString().padStart(2,"0")}:${Z.toString().padStart(2,"0")}`)};d.useEffect(()=>{const T=setInterval(()=>{const z=ie.getCoins();z!==u&&m(z)},100);return()=>clearInterval(T)},[u]);const J=(T,z)=>{if(j)return;const B=w.findIndex($=>$.id===T),W=w[B];W.opened||(k(T),W.miniGame==="tap"&&z==="tap"?H(B):W.miniGame==="swipe"&&z==="swipe"?q(B):W.miniGame==="hold"&&(z==="holdStart"?O(B):z==="holdEnd"&&I(B)))},H=T=>{const z=w[T],B=z.tapsCount+1;s();const W=[...w];W[T]={...z,tapsCount:B},x(W),B>=z.tapsRequired&&setTimeout(()=>D(z.id),300)},q=T=>{const z=w[T];s();const B=[...w];B[T]={...z,swipeComplete:!0},x(B),setTimeout(()=>D(z.id),300)},O=T=>{const z=w[T],B=[...w];B[T]={...z,isHolding:!0,holdProgress:0},x(B);let W=0;const $=setInterval(()=>{W+=.05;const Z=[...w],U=Z[T];W>=z.holdDuration?(clearInterval($),Z[T]={...U,holdProgress:z.holdDuration,isHolding:!1},x(Z),D(z.id)):U.isHolding?(Z[T]={...U,holdProgress:W},x(Z)):clearInterval($)},50);P($)},I=T=>{_&&(clearInterval(_),P(null));const z=w[T];if(z.holdProgress<z.holdDuration){a();const B=[...w];B[T]={...z,isHolding:!1,holdProgress:0},x(B)}},D=async T=>{if(j)return;const z=w.findIndex(M=>M.id===T),B=w[z];if(B.opened)return;S(!0);const W=Math.floor(Math.random()*(B.maxCoins-B.minCoins+1))+B.minCoins,Z=B.xpChance&&Math.random()<B.xpChance?Math.floor(Math.random()*50)+25:0;if(h({boxId:T,coins:W,xpBonus:Z}),t(),await new Promise(M=>setTimeout(M,600)),i.current[T]&&o.current){const M=i.current[T].getBoundingClientRect();r(),f({startRect:M,count:Math.min(W,15),amount:W,xpBonus:Z})}const U=[...w];U[z]={...B,opened:!0,reward:{coins:W,xpBonus:Z}},x(U),g(M=>M+W),ie.safeSet("surprise_zone_data",{date:v,boxes:U,totalEarned:y+W}),setTimeout(()=>{h(null),k(null)},2e3),S(!1)},L=w.every(T=>T.opened);return n.jsxs("div",{className:"min-h-screen bg-black text-white",children:[n.jsx("div",{className:"fixed inset-0 bg-gradient-to-b from-gray-900/50 to-black pointer-events-none"}),p&&n.jsx(Gn,{startRect:p.startRect,targetRef:o,count:p.count,onDone:()=>{ie.addCoins(p.amount,"Lucky Box"),p.xpBonus>0&&ie.addXP(p.xpBonus),m(ie.getCoins()),f(null)}}),E&&n.jsx("div",{className:"fixed inset-0 z-50 pointer-events-none flex items-center justify-center",children:n.jsx("div",{className:"animate-bounce",children:n.jsx("div",{className:"bg-black/90 backdrop-blur-xl rounded-3xl p-6 border border-white/20",children:n.jsxs("div",{className:"text-center",children:[n.jsx(Hd,{className:"w-12 h-12 text-yellow-400 mx-auto mb-3"}),n.jsxs("p",{className:"text-3xl font-bold text-yellow-400",children:["+",E.coins]}),n.jsx("p",{className:"text-sm text-gray-400 mt-1",children:"coins"}),E.xpBonus>0&&n.jsxs("p",{className:"text-lg text-blue-400 mt-2",children:["+",E.xpBonus," XP"]})]})})})}),n.jsxs("div",{className:"relative z-10 px-6 pt-14 pb-8",children:[n.jsxs("div",{className:"flex items-center justify-between mb-6",children:[n.jsx("button",{onClick:()=>e("/"),className:"w-10 h-10 rounded-full bg-white/10 backdrop-blur-xl flex items-center justify-center hover:bg-white/20 transition-all active:scale-95",children:n.jsx(Tv,{className:"w-5 h-5"})}),n.jsxs("div",{className:"text-center",children:[n.jsx("p",{className:"text-sm text-gray-400 mb-1",children:"Daily Surprise"}),n.jsx("h1",{className:"text-2xl font-semibold",children:"Lucky Boxes"})]}),n.jsxs("button",{ref:o,onClick:()=>c(!0),className:"px-3 py-1.5 rounded-full bg-yellow-500/20 backdrop-blur-xl flex items-center gap-2 hover:bg-yellow-500/30 transition-all border border-yellow-500/30",children:[n.jsx("span",{className:"text-lg",children:"🪙"}),n.jsx("span",{className:"font-bold text-yellow-400",children:u})]})]}),n.jsx("div",{className:"mx-auto max-w-sm mb-8",children:n.jsx("div",{className:"bg-white/5 backdrop-blur-xl rounded-2xl p-4 border border-white/10",children:n.jsxs("div",{className:"flex items-center justify-between",children:[n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx(Mv,{className:"w-4 h-4 text-gray-400"}),n.jsxs("div",{children:[n.jsx("p",{className:"text-xs text-gray-400",children:"Next reset in"}),n.jsx("p",{className:"text-lg font-mono font-semibold",children:C||"00:00:00"})]})]}),n.jsxs("div",{className:"text-right",children:[n.jsx("p",{className:"text-xs text-gray-400",children:"Earned today"}),n.jsxs("p",{className:"text-lg font-semibold text-yellow-400",children:[y," coins"]})]})]})})}),!L&&n.jsx("div",{className:"text-center mb-6",children:n.jsx("p",{className:"text-sm text-gray-500",children:"Complete mini-games to unlock rewards!"})})]}),n.jsxs("div",{className:"relative z-10 px-6 pb-8",children:[n.jsx("div",{className:"max-w-sm mx-auto space-y-6",children:w.map((T,z)=>{var B,W;return n.jsx("div",{ref:$=>i.current[T.id]=$,className:"relative",style:{animation:`fadeInUp 0.5s ease-out ${z*100}ms both`},children:n.jsxs("button",{onClick:()=>J(T.id,"tap"),onMouseDown:()=>T.miniGame==="hold"&&J(T.id,"holdStart"),onMouseUp:()=>T.miniGame==="hold"&&J(T.id,"holdEnd"),onMouseLeave:()=>T.miniGame==="hold"&&J(T.id,"holdEnd"),onTouchStart:()=>T.miniGame==="hold"&&J(T.id,"holdStart"),onTouchEnd:()=>T.miniGame==="hold"&&J(T.id,"holdEnd"),disabled:T.opened||j,className:`
                  w-full relative overflow-hidden rounded-3xl p-8
                  transition-all duration-500 transform
                  ${T.opened?"bg-white/5 scale-95 opacity-60":`bg-gradient-to-br ${T.color} hover:scale-[1.02] active:scale-[0.98] shadow-2xl ${T.glow}`}
                  ${j&&!T.opened?"animate-pulse":""}
                  ${!T.opened&&T.id==="bronze"&&T.tapsCount===0?"animate-pulse ring-2 ring-yellow-400/50":""}
                  disabled:cursor-not-allowed
                `,children:[!T.opened&&b===T.id&&n.jsxs("div",{className:"absolute inset-0 pointer-events-none",children:[T.miniGame==="tap"&&n.jsx("div",{className:"absolute top-2 right-2 flex gap-1",children:[...Array(T.tapsRequired)].map(($,Z)=>n.jsx("div",{className:`w-2 h-2 rounded-full ${Z<T.tapsCount?"bg-white":"bg-white/30"}`},Z))}),T.miniGame==="hold"&&T.isHolding&&n.jsx("div",{className:"absolute inset-x-0 bottom-0 h-1 bg-white/20",children:n.jsx("div",{className:"h-full bg-white transition-all",style:{width:`${T.holdProgress/T.holdDuration*100}%`}})})]}),!T.opened&&n.jsx("div",{className:"absolute inset-0 opacity-10",children:n.jsx("div",{className:"absolute inset-0",style:{backgroundImage:`radial-gradient(circle at 20% 50%, white 1px, transparent 1px),
                                       radial-gradient(circle at 80% 80%, white 1px, transparent 1px),
                                       radial-gradient(circle at 40% 80%, white 1px, transparent 1px)`,backgroundSize:"50px 50px"}})}),n.jsxs("div",{className:"relative z-10 flex items-center justify-between",children:[n.jsxs("div",{className:"text-left",children:[n.jsxs("p",{className:`text-sm font-medium ${T.opened?"text-gray-400":"text-white/80"}`,children:[T.name," Box"]}),n.jsx("p",{className:`text-2xl font-bold mt-1 ${T.opened?"text-gray-300":"text-white"}`,children:T.opened?n.jsxs("span",{className:"flex items-center gap-2",children:[n.jsxs("span",{className:"text-yellow-400",children:["+",(B=T.reward)==null?void 0:B.coins]}),n.jsx("span",{className:"text-sm",children:"coins"}),((W=T.reward)==null?void 0:W.xpBonus)>0&&n.jsxs("span",{className:"text-sm text-blue-400 ml-2",children:["+",T.reward.xpBonus," XP"]})]}):n.jsxs("span",{className:"flex items-center gap-2",children:[n.jsxs("span",{children:[T.minCoins,"-",T.maxCoins]}),n.jsx("span",{className:"text-sm",children:"coins"})]})}),!T.opened&&n.jsxs("p",{className:"text-xs text-white/50 mt-1",children:[T.miniGame==="tap"&&`Tap ${T.tapsRequired} times`,T.miniGame==="hold"&&`Hold for ${T.holdDuration} seconds`]})]}),n.jsx("div",{className:`
                    w-16 h-16 rounded-2xl flex items-center justify-center
                    ${T.opened?"bg-white/10":"bg-white/20 backdrop-blur-xl"}
                    transition-all duration-300
                  `,children:T.opened?n.jsx(Hd,{className:"w-8 h-8 text-yellow-400"}):b===T.id?n.jsx(Lv,{className:"w-8 h-8 text-white animate-pulse"}):n.jsx(Rv,{className:`w-8 h-8 text-white ${j?"":"animate-pulse"}`})})]})]})},T.id)})}),L&&n.jsxs("div",{className:"mt-12 text-center space-y-4",children:[n.jsxs("div",{className:"inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 backdrop-blur-xl border border-white/10",children:[n.jsx(Av,{className:"w-4 h-4 text-gray-400"}),n.jsx("p",{className:"text-sm text-gray-400",children:"All boxes opened! Come back tomorrow"})]}),n.jsx("div",{className:"text-center",children:n.jsxs("p",{className:"text-2xl font-bold text-yellow-400",children:["🎉 ",y," coins earned!"]})})]})]}),n.jsx(Ov,{show:l,onClose:()=>c(!1),coins:u,onNavigateToPlay:()=>{c(!1),e("/play")}}),n.jsx("style",{jsx:!0,children:`
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
      `})]})}function $v(){var w;const e=ke(),[t,r]=d.useState(""),[s,a]=d.useState(null),{player:o,levelProgress:i}=wn(),c=(()=>{const x=JSON.parse(localStorage.getItem("currentUser")||"{}");return((x.phone?JSON.parse(localStorage.getItem(`user_profile_${x.phone}`)||"{}"):{}).name||x.username||(o==null?void 0:o.name)||"Player").split(" ")[0]})(),u=()=>{if((s==null?void 0:s.todayCoins)!==void 0)return s.todayCoins;try{const x=JSON.parse(localStorage.getItem("qp_stats")||'{"sessions":[]}'),j=new Date().setHours(0,0,0,0);return x.sessions.filter(y=>new Date(y.timestamp).setHours(0,0,0,0)===j).reduce((y,g)=>y+(g.earnedCoins||0),0)}catch{return 0}},m={name:c,rank:(s==null?void 0:s.rank)||23,streak:(s==null?void 0:s.streak)||(o==null?void 0:o.currentStreak)||0,todayQuizzes:((w=s==null?void 0:s.daily)==null?void 0:w.quizzesPlayed)||3,todayCoins:u()};d.useEffect(()=>{const x=new Date().getHours();x<12?r("Good morning"):x<17?r("Good afternoon"):r("Good evening")},[]),d.useEffect(()=>{const x=()=>{const j=rt.getCurrentUser();if(j!=null&&j.phone){ie.initializeUserData(j.phone);const S=ie.getTodaySummary(j.phone);a(S)}};return x(),window.addEventListener("focus",x),()=>window.removeEventListener("focus",x)},[]);const p=`
    rounded-3xl p-5 text-left text-white 
    transition-all duration-300 ease-out
    active:scale-[0.97] hover:scale-[1.02]
    shadow-[0_8px_32px_rgba(0,0,0,0.3)]
    hover:shadow-[0_12px_48px_rgba(0,0,0,0.4)]
    relative overflow-hidden
    before:absolute before:inset-0 before:bg-white/5 before:opacity-0 
    hover:before:opacity-100 before:transition-opacity before:duration-300
  `,f=s!=null&&s.xpProgress?s.xpProgress/(s.xpNeeded||100)*100:i.required>0?i.current/i.required*100:0;return n.jsxs("div",{className:"min-h-full bg-[#0B0C10] text-white pt-10 px-3",children:[n.jsxs("div",{className:"mb-6",children:[n.jsxs("div",{className:"flex items-center justify-between mb-4",children:[n.jsx("div",{children:n.jsxs("h1",{className:"text-2xl font-bold px-3",children:[t,", ",c," 👋"]})}),n.jsx("button",{onClick:()=>e("/profile/settings"),className:"w-10 h-10 rounded-2xl bg-white/10 border border-white/20 grid place-items-center hover:bg-white/20 transition",children:n.jsx("span",{className:"text-xl",children:"⚙️"})})]}),n.jsxs("div",{className:"rounded-3xl bg-gradient-to-r from-slate-800/50 to-slate-900/50 border border-white/10 p-4 backdrop-blur-sm",children:[n.jsxs("div",{className:"flex items-center gap-4 mb-3",children:[n.jsx("div",{className:"w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 grid place-items-center text-2xl font-bold",children:c[0].toUpperCase()}),n.jsxs("div",{className:"flex-1",children:[n.jsx("div",{className:"text-lg font-semibold",children:c}),n.jsxs("div",{className:"text-white/60 text-sm",children:["Level ",(s==null?void 0:s.level)||o.level||1]})]}),n.jsxs("div",{className:"text-right",children:[n.jsxs("div",{className:"text-yellow-400 font-bold text-lg",children:[(s==null?void 0:s.totalCoins)||o.coins||0," 🪙"]}),n.jsxs("div",{className:"text-white/60 text-sm",children:["Rank #",m.rank]})]})]}),n.jsxs("div",{className:"mb-3",children:[n.jsxs("div",{className:"flex justify-between text-xs text-white/60 mb-1",children:[n.jsx("span",{children:"XP Progress"}),n.jsxs("span",{children:[(s==null?void 0:s.xpProgress)||i.current,"/",(s==null?void 0:s.xpNeeded)||i.required]})]}),n.jsx("div",{className:"h-2 bg-white/10 rounded-full overflow-hidden",children:n.jsx("div",{className:"h-full bg-gradient-to-r from-blue-400 to-purple-500 rounded-full transition-all duration-1000 ease-out",style:{width:`${f}%`}})})]}),n.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[n.jsxs("div",{className:"text-center p-2 rounded-xl bg-white/5",children:[n.jsxs("div",{className:"text-orange-400 font-bold text-lg",children:["🔥 ",m.streak]}),n.jsx("div",{className:"text-white/60 text-xs",children:"Day Streak"})]}),n.jsxs("div",{className:"text-center p-2 rounded-xl bg-white/5",children:[n.jsxs("div",{className:"text-green-400 font-bold text-lg",children:["+",m.todayCoins]}),n.jsx("div",{className:"text-white/60 text-xs",children:"Today"})]})]})]})]}),n.jsxs("button",{onClick:()=>e("/profile/leaderboard"),className:`${p} w-full mb-4 bg-gradient-to-br from-[#5AA9FF] via-[#6C63FF] to-[#9C6BFF]`,children:[n.jsx("div",{className:"absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-8 translate-x-8 animate-pulse"}),n.jsxs("div",{className:"relative flex items-start justify-between",children:[n.jsxs("div",{children:[n.jsx("div",{className:"text-xs opacity-90 mb-1",children:"🏆 Rank & Coins"}),n.jsx("div",{className:"text-3xl font-extrabold tracking-tight mb-2",children:"LEADERBOARD"}),n.jsxs("div",{className:"text-xs opacity-75 flex items-center gap-2",children:[n.jsx("span",{className:"w-2 h-2 bg-green-400 rounded-full animate-pulse"}),"Weekly reset · Ends in 2d 14h"]})]}),n.jsx("div",{className:"w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm grid place-items-center text-2xl border border-white/30",children:"🏆"})]})]}),n.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[n.jsxs("button",{onClick:()=>e("/profile/history"),className:`${p} bg-gradient-to-br from-[#D19A00] to-[#C94B4B] relative`,children:[n.jsx("div",{className:"absolute top-2 right-2 w-3 h-3 bg-white/20 rounded-full"}),n.jsx("div",{className:"text-3xl mb-3",children:"📊"}),n.jsx("div",{className:"text-sm font-bold mb-1",children:"HISTORY"}),n.jsx("div",{className:"text-[11px] opacity-80",children:"Quizzes & Practice"}),n.jsxs("div",{className:"text-[10px] opacity-60 mt-1",children:["+",m.todayQuizzes," today"]})]}),n.jsxs("button",{onClick:()=>e("/profile/rewards"),className:`${p} bg-gradient-to-br from-[#2EB872] to-[#1EA07A] relative`,children:[n.jsx("div",{className:"absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full animate-bounce"}),n.jsx("div",{className:"text-3xl mb-3",children:"🎁"}),n.jsx("div",{className:"text-sm font-bold mb-1",children:"REWARDS"}),n.jsx("div",{className:"text-[11px] opacity-80",children:"Claim & Redeem"}),n.jsx("div",{className:"text-[10px] opacity-60 mt-1",children:"2 available"})]}),n.jsxs("button",{onClick:()=>e("/profile/badges"),className:`${p} bg-gradient-to-br from-[#E65C00] to-[#F9D423] relative`,children:[n.jsx("div",{className:"absolute -top-1 -right-1 w-6 h-6 bg-purple-600 rounded-full grid place-items-center text-[10px] font-bold animate-pulse",children:"NEW"}),n.jsx("div",{className:"text-3xl mb-3",children:"🏅"}),n.jsx("div",{className:"text-sm font-bold mb-1",children:"BADGES"}),n.jsx("div",{className:"text-[11px] opacity-80",children:"Collectables"}),n.jsx("div",{className:"text-[10px] opacity-60 mt-1",children:"4/15 unlocked"})]}),n.jsxs("button",{onClick:()=>e("/profile/achievements"),className:`${p} bg-gradient-to-br from-[#5D26C1] to-[#A17FE0] relative`,children:[n.jsx("div",{className:"text-3xl mb-3",children:"🎯"}),n.jsx("div",{className:"text-sm font-bold mb-1",children:"ACHIEVEMENTS"}),n.jsx("div",{className:"text-[11px] opacity-80",children:"Milestones"}),n.jsx("div",{className:"text-[10px] opacity-60 mt-1",children:"67% complete"})]})]}),n.jsxs("div",{className:"mt-4 space-y-3",children:[n.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[n.jsx("button",{onClick:()=>e("/profile/streaks"),className:`${p} bg-gradient-to-r from-orange-600/80 to-red-600/80 backdrop-blur-sm border border-orange-500/30`,children:n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsx("div",{className:"text-2xl",children:"🔥"}),n.jsxs("div",{children:[n.jsx("div",{className:"text-sm font-bold",children:"STREAK"}),n.jsxs("div",{className:"text-[11px] opacity-80",children:[m.streak," days strong"]})]})]})}),n.jsx("button",{onClick:()=>e("/profile/quests"),className:`${p} bg-gradient-to-r from-blue-600/80 to-cyan-600/80 backdrop-blur-sm border border-blue-500/30`,children:n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsx("div",{className:"text-2xl",children:"⚡"}),n.jsxs("div",{children:[n.jsx("div",{className:"text-sm font-bold",children:"QUESTS"}),n.jsxs("div",{className:"text-[11px] opacity-80",children:[(s==null?void 0:s.activeQuests)||2," active goals"]})]})]})})]}),n.jsx("button",{onClick:()=>e("/profile/settings"),className:`${p} w-full bg-gradient-to-r from-slate-700/50 to-slate-800/50 backdrop-blur-sm border border-white/10`,children:n.jsxs("div",{className:"flex items-center justify-between",children:[n.jsxs("div",{className:"flex items-center gap-4",children:[n.jsx("div",{className:"w-12 h-12 rounded-2xl bg-white/10 grid place-items-center text-xl",children:"⚙️"}),n.jsxs("div",{children:[n.jsx("div",{className:"text-sm font-bold",children:"SETTINGS"}),n.jsx("div",{className:"text-[11px] opacity-70",children:"Customize your experience"})]})]}),n.jsx("div",{className:"text-white/40",children:"→"})]})})]}),n.jsx("div",{className:"h-6"})]})}const us="🪙",va={global:[{rank:1,name:"Bryan Wolf",handle:"@bryan",score:43,avatar:"/profile/rank1.png",trend:"+5",streak:12,country:"🇺🇸"},{rank:2,name:"Meghan Jess…",handle:"@meghan",score:40,avatar:"/profile/rank2.png",trend:"+2",streak:8,country:"🇨🇦"},{rank:3,name:"Alex Turner",handle:"@alex",score:38,avatar:"/profile/rank3.png",trend:"±0",streak:15,country:"🇬🇧"},{rank:4,name:"Marsha Fisher",handle:"@marsha",score:36,trend:"-1",streak:5,country:"🇦🇺"},{rank:5,name:"Juanita Cormier",handle:"@juanita",score:35,trend:"+1",streak:3,country:"🇲🇽"},{rank:6,name:"You",handle:"@you",score:34,you:!0,avatar:"/profile/avatar.png",trend:"+3",streak:7,country:"🇮🇳"},{rank:7,name:"Tamara Schmidt",handle:"@tamara",score:33,trend:"-2",streak:2,country:"🇩🇪"},{rank:8,name:"Ricardo Veum",handle:"@ricardo",score:32,trend:"+1",streak:4,country:"🇧🇷"}],friends:[{rank:1,name:"You",handle:"@you",score:34,you:!0,avatar:"/profile/avatar.png",trend:"+2",streak:7,country:"🇮🇳"},{rank:2,name:"Sarah Chen",handle:"@sarah",score:31,trend:"-1",streak:4,country:"🇸🇬",friend:!0},{rank:3,name:"Mike Johnson",handle:"@mike",score:29,trend:"+3",streak:2,country:"🇺🇸",friend:!0},{rank:4,name:"Priya Sharma",handle:"@priya",score:27,trend:"±0",streak:5,country:"🇮🇳",friend:!0},{rank:5,name:"David Kim",handle:"@david",score:25,trend:"+1",streak:3,country:"🇰🇷",friend:!0},{rank:6,name:"Emma Wilson",handle:"@emma",score:23,trend:"-2",streak:1,country:"🇬🇧",friend:!0}],india:[{rank:1,name:"Rohit Sharma",handle:"@rohit",score:45,trend:"+4",streak:10,country:"🇮🇳"},{rank:2,name:"Priya Patel",handle:"@priya",score:42,trend:"+1",streak:8,country:"🇮🇳"},{rank:3,name:"You",handle:"@you",score:34,you:!0,avatar:"/profile/avatar.png",trend:"+3",streak:7,country:"🇮🇳"},{rank:4,name:"Arjun Singh",handle:"@arjun",score:32,trend:"-1",streak:5,country:"🇮🇳"},{rank:5,name:"Kavya Reddy",handle:"@kavya",score:30,trend:"+2",streak:3,country:"🇮🇳"},{rank:6,name:"Vikram Gupta",handle:"@vikram",score:28,trend:"±0",streak:4,country:"🇮🇳"}]},ya=[{name:"Diamond",min:40,color:"from-cyan-400 to-blue-600",icon:"💎"},{name:"Gold",min:30,color:"from-yellow-400 to-orange-500",icon:"🥇"},{name:"Silver",min:20,color:"from-gray-300 to-gray-500",icon:"🥈"},{name:"Bronze",min:10,color:"from-orange-600 to-red-600",icon:"🥉"}];function Bv(){var f,w;const e=ke(),{player:t}=wn(),r={global:va.global.map(x=>x.you?{...x,name:(t==null?void 0:t.name)||"You",score:(t==null?void 0:t.coins)||0,streak:(t==null?void 0:t.currentStreak)||0}:x),friends:va.friends.map(x=>x.you?{...x,name:(t==null?void 0:t.name)||"You",score:(t==null?void 0:t.coins)||0,streak:(t==null?void 0:t.currentStreak)||0}:x),india:va.india.map(x=>x.you?{...x,name:(t==null?void 0:t.name)||"You",score:(t==null?void 0:t.coins)||0,streak:(t==null?void 0:t.currentStreak)||0}:x)};console.log("Debug - Player coins:",t==null?void 0:t.coins),console.log("Debug - Friends data:",r.friends[0]);const[s,a]=d.useState({days:2,hours:14,minutes:17}),[o,i]=d.useState("global"),l=r[o]||r.global;console.log("Player coins:",t==null?void 0:t.coins,"Current user score:",(f=l.find(x=>x.you))==null?void 0:f.score);const c=l.find(x=>x.you),u=l.slice(0,3),m=l.slice(3);d.useEffect(()=>{const x=setInterval(()=>{a(j=>j.minutes>0?{...j,minutes:j.minutes-1}:j.hours>0?{...j,hours:j.hours-1,minutes:59}:j.days>0?{...j,days:j.days-1,hours:23,minutes:59}:j)},6e4);return()=>clearInterval(x)},[]);const p=x=>{const j=Math.max(...l.map(y=>y.score)),S=x/j*100;return S>=90?ya[0]:S>=70?ya[1]:S>=40?ya[2]:ya[3]};return n.jsxs("div",{className:"min-h-screen bg-black text-white pt-12",children:[n.jsxs("div",{className:"flex items-center justify-between mb-5",children:[n.jsx("button",{onClick:()=>e(-1),className:"px-3 py-1.5 rounded-xl border border-white/10 bg-white/5 text-sm hover:bg-white/10 transition",children:"← Back"}),n.jsxs("div",{className:"text-center",children:[n.jsx("div",{className:"text-lg font-bold",children:"🏆 Leaderboard"}),n.jsxs("div",{className:"text-xs text-white/60",children:["Ends in ",s.days,"d ",s.hours,"h ",s.minutes,"m"]})]}),n.jsx("button",{className:"px-3 py-1.5 rounded-xl border border-white/10 bg-white/5 text-sm hover:bg-white/10 transition",children:"📊"})]}),n.jsxs("div",{className:`mb-5 rounded-2xl bg-gradient-to-r ${p(c==null?void 0:c.score).color} p-4 text-center relative overflow-hidden`,children:[n.jsx("div",{className:"absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -translate-y-10 translate-x-10 animate-pulse"}),n.jsx("div",{className:"absolute bottom-0 left-0 w-16 h-16 bg-white/5 rounded-full translate-y-8 -translate-x-8"}),n.jsxs("div",{className:"relative z-10",children:[n.jsx("div",{className:"text-2xl mb-1",children:p(c==null?void 0:c.score).icon}),n.jsxs("div",{className:"text-sm font-bold text-white",children:[p(c==null?void 0:c.score).name," League"]}),n.jsx("div",{className:"text-xs text-white/80",children:o==="friends"?"Competing with friends!":"You're competing with the best!"})]})]}),n.jsx("div",{className:"flex gap-2 mb-5",children:[{key:"global",label:"🌍 Global",count:"10M+"},{key:"friends",label:"👥 Friends",count:va.friends.length},{key:"india",label:"🇮🇳 India",count:"2.5M"}].map(x=>n.jsxs("button",{onClick:()=>i(x.key),className:`flex-1 px-2 py-2 rounded-xl text-xs font-semibold transition-all duration-300 ${o===x.key?"bg-lime-500 text-black shadow-lg scale-105":"border border-white/10 bg-white/5 hover:bg-white/10"}`,children:[n.jsx("div",{children:x.label}),n.jsx("div",{className:`text-[10px] ${o===x.key?"text-black/70":"text-white/60"}`,children:x.count})]},x.key))}),n.jsx("div",{className:"mb-5 rounded-2xl bg-gradient-to-r from-lime-500/20 to-green-500/20 border border-lime-500/30 p-3",children:n.jsxs("div",{className:"flex items-center justify-between",children:[n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsx("div",{className:"w-10 h-10 rounded-xl bg-lime-500/20 grid place-items-center text-lg",children:"🧑‍💻"}),n.jsxs("div",{children:[n.jsx("div",{className:"font-bold text-lime-400 text-sm",children:"Your Position"}),n.jsxs("div",{className:"text-xs text-white/70 flex items-center gap-2",children:[n.jsxs("span",{children:["Rank #",c==null?void 0:c.rank]}),n.jsx("span",{className:`px-1.5 py-0.5 rounded-full text-[9px] font-bold ${c!=null&&c.trend.startsWith("+")?"bg-green-500/20 text-green-400":c!=null&&c.trend.startsWith("-")?"bg-red-500/20 text-red-400":"bg-gray-500/20 text-gray-400"}`,children:c==null?void 0:c.trend}),n.jsxs("span",{className:"text-white/50 text-[10px]",children:["in ",o==="global"?"Global":o==="friends"?"Friends":"India"]})]})]})]}),n.jsxs("div",{className:"text-right",children:[n.jsxs("div",{className:"text-lg font-bold text-lime-400",children:[c==null?void 0:c.score," ",us]}),n.jsxs("div",{className:"text-xs text-white/60",children:["🔥 ",c==null?void 0:c.streak," streak"]})]})]})}),n.jsxs("div",{className:"mb-6",children:[n.jsx("h3",{className:"text-center text-sm font-semibold text-white/80 mb-4",children:"👑 Hall of Fame"}),n.jsxs("div",{className:"bg-gradient-to-b from-white/5 to-white/10 rounded-2xl p-4 border border-white/10 relative overflow-hidden",children:[n.jsx("div",{className:"absolute top-4 left-6 text-2xl opacity-40 animate-pulse",children:"🏆"}),n.jsx("div",{className:"absolute top-8 right-8 text-lg opacity-40 animate-bounce",style:{animationDelay:"1s"},children:"✨"}),n.jsx("div",{className:"absolute bottom-6 left-12 text-xl opacity-10 animate-pulse",style:{animationDelay:"2s"},children:"🥇"}),n.jsx("div",{className:"absolute bottom-4 right-6 text-lg opacity-40 animate-bounce",style:{animationDelay:"0.5s"},children:"⭐"}),n.jsxs("div",{className:"flex items-end justify-center gap-8 relative z-10",children:[u[1]&&n.jsxs("div",{className:"flex flex-col items-center",children:[n.jsxs("div",{className:"relative mb-2",children:[n.jsx(ba,{src:u[1].avatar,fallback:u[1].name,size:56}),n.jsx("div",{className:"absolute -bottom-1 left-1/2 -translate-x-1/2 w-7 h-7 bg-gradient-to-br from-gray-300 to-gray-500 rounded-full grid place-items-center text-sm font-bold text-black shadow-lg",children:"2"})]}),n.jsx("div",{className:"text-sm font-semibold mb-1 mt-1",children:wa(u[1].name,8)}),n.jsxs("div",{className:"text-xs text-lime-400 font-bold",children:[u[1].score," ",us]})]}),u[0]&&n.jsxs("div",{className:"flex flex-col items-center -mb-3",children:[n.jsxs("div",{className:"relative mb-2",children:[n.jsx(ba,{src:u[0].avatar,fallback:u[0].name,size:72}),n.jsx("div",{className:"absolute -top-3 left-1/2 -translate-x-1/2",children:n.jsx(Uv,{})}),n.jsx("div",{className:"absolute -bottom-1 left-1/2 -translate-x-1/2 w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full grid place-items-center text-base font-bold text-black shadow-lg animate-pulse",children:"1"})]}),n.jsx("div",{className:"text-sm font-bold mb-1 mt-1",children:wa(u[0].name,8)}),n.jsxs("div",{className:"text-sm text-lime-400 font-bold mb-1",children:[u[0].score," ",us]}),n.jsx("div",{className:"px-2 py-1 bg-yellow-400/20 rounded-full text-[9px] text-yellow-400 font-bold",children:"CHAMPION"})]}),u[2]&&n.jsxs("div",{className:"flex flex-col items-center",children:[n.jsxs("div",{className:"relative mb-2",children:[n.jsx(ba,{src:u[2].avatar,fallback:u[2].name,size:56}),n.jsx("div",{className:"absolute -bottom-1 left-1/2 -translate-x-1/2 w-7 h-7 bg-gradient-to-br from-orange-600 to-red-600 rounded-full grid place-items-center text-sm font-bold text-white shadow-lg",children:"3"})]}),n.jsx("div",{className:"text-sm font-semibold mb-1 mt-1",children:wa(u[2].name,8)}),n.jsxs("div",{className:"text-xs text-lime-400 font-bold",children:[u[2].score," ",us]})]})]})]})]}),m.length>0&&n.jsxs("div",{className:"rounded-3xl bg-white/5 border border-white/10 p-2 mb-4",children:[n.jsxs("div",{className:"flex justify-between items-center mb-2 px-2",children:[n.jsx("h3",{className:"text-sm font-semibold",children:"Rankings"}),n.jsx("div",{className:"text-xs text-white/60",children:"Live updates"})]}),n.jsx("ul",{className:"space-y-1.5",children:m.map((x,j)=>n.jsxs("li",{className:`flex items-center justify-between px-3 py-2.5 rounded-xl transition-all duration-300 ${x.you?"bg-lime-500/90 text-black shadow-lg shadow-lime-500/20 scale-[1.02]":"bg-white/5 hover:bg-white/10"}`,style:{animationDelay:`${j*100}ms`,animation:"fadeInUp 0.6s ease-out forwards"},children:[n.jsxs("div",{className:"flex items-center gap-2.5",children:[n.jsx(Yv,{n:x.rank,you:x.you}),n.jsx(ba,{src:x.avatar,fallback:x.name,size:36}),n.jsxs("div",{className:"flex flex-col leading-tight",children:[n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx("span",{className:"text-sm font-semibold",children:wa(x.name,12)}),n.jsx("span",{className:"text-xs",children:x.country}),x.friend&&n.jsx("span",{className:"text-[9px] bg-blue-500/20 text-blue-400 px-1 py-0.5 rounded-full",children:"Friend"})]}),n.jsxs("div",{className:`text-xs flex items-center gap-1.5 ${x.you?"text-black/70":"text-white/60"}`,children:[n.jsx("span",{children:x.handle}),n.jsxs("span",{children:["🔥",x.streak]})]})]})]}),n.jsxs("div",{className:"flex flex-col items-end",children:[n.jsxs("div",{className:"flex items-center gap-1 text-sm font-bold",children:[n.jsx("span",{children:x.score}),n.jsx("span",{className:x.you?"opacity-90":"opacity-80",children:us})]}),n.jsx("div",{className:`text-xs px-1.5 py-0.5 rounded-full font-bold ${x.trend.startsWith("+")?"bg-green-500/20 text-green-400":x.trend.startsWith("-")?"bg-red-500/20 text-red-400":"bg-gray-500/20 text-gray-400"}`,children:x.trend})]})]},`${o}-${x.rank}`))})]}),c&&c.rank>1&&n.jsxs("div",{className:"mb-4 p-3 rounded-2xl bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 text-center",children:[n.jsx("div",{className:"text-sm font-semibold mb-2",children:"🚀 Climb Higher!"}),n.jsx("div",{className:"text-xs text-white/70 mb-3",children:o==="friends"&&c.rank===1?"🎉 You're #1 among friends!":`You need ${Math.max(0,(((w=l[c.rank-2])==null?void 0:w.score)||0)-c.score+1)} more coins to reach rank #${c.rank-1}`}),!(o==="friends"&&c.rank===1)&&n.jsx("button",{onClick:()=>e("/play"),className:"px-5 py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl text-sm font-bold hover:scale-105 transition-transform",children:"Play Now 🎮"})]}),n.jsx("style",{jsx:!0,children:`
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
      `})]})}function ba({src:e,fallback:t,size:r=56}){const s=qv(t);return n.jsx("div",{className:"grid place-items-center rounded-full bg-white/10 overflow-hidden border-2 border-white/20",style:{width:r,height:r},children:e?n.jsx("img",{src:e,alt:"",className:"w-full h-full object-cover"}):n.jsx("span",{className:"text-sm font-semibold",children:s})})}function Uv(){return n.jsxs("div",{className:"w-7 h-5 bg-gradient-to-t from-yellow-400 to-yellow-300 rounded-b-lg shadow-lg relative",children:[n.jsxs("svg",{viewBox:"0 0 100 40",className:"w-full h-full",children:[n.jsx("path",{d:"M15,35 L15,18 L35,28 L50,10 L65,28 L85,18 L85,35 Z",fill:"url(#crownGradient)"}),n.jsx("defs",{children:n.jsxs("linearGradient",{id:"crownGradient",x1:"0%",y1:"0%",x2:"0%",y2:"100%",children:[n.jsx("stop",{offset:"0%",stopColor:"#FCD34D"}),n.jsx("stop",{offset:"100%",stopColor:"#F59E0B"})]})})]}),n.jsx("div",{className:"absolute top-0.5 left-1/2 -translate-x-1/2 w-1 h-1 bg-red-400 rounded-full animate-pulse"})]})}function Yv({n:e,you:t}){return n.jsx("div",{className:`w-7 h-7 grid place-items-center rounded-full text-sm font-bold ${t?"bg-black/10 text-black":"bg-white/10 text-white"}`,children:e})}function wa(e,t=12){return(e==null?void 0:e.length)>t?e.slice(0,t-1)+"…":e}function qv(e=""){var r;const t=e.trim().split(/\s+/);return t.length===1?t[0].slice(0,2).toUpperCase():(t[0][0]+(((r=t[1])==null?void 0:r[0])||"")).toUpperCase()}const Qv="qp_recent",Gv="qp_review_snapshot",Kd=[{id:Date.now()-864e5,type:"quiz",category:"General Knowledge",difficulty:"easy",score:8,total:10,accuracy:80,time:"02:31",ms:151e3,date:"Yesterday",timestamp:Date.now()-864e5,mode:"Quiz"},{id:Date.now()-1728e5,type:"practice",category:"Science",difficulty:"medium",score:12,total:15,accuracy:80,time:"06:02",ms:362e3,date:"2 days ago",timestamp:Date.now()-1728e5,mode:"Practice"},{id:Date.now()-2592e5,type:"quiz",category:"Fun Facts",difficulty:"easy",score:9,total:10,accuracy:90,time:"02:05",ms:125e3,date:"3 days ago",timestamp:Date.now()-2592e5,mode:"Quiz"}];function Wv(){const[e,t]=d.useState("quizzes"),[r,s]=d.useState(null),[a,o]=d.useState(!1),[i,l]=d.useState("all"),[c,u]=d.useState("all"),[m,p]=d.useState("date"),[f,w]=d.useState([]),[x,j]=d.useState(!0),S=ke(),y=et(),g=h=>{if(!h)return"00:00";const b=Math.floor(h/1e3),k=Math.floor(b/60),_=b%60;return`${String(k).padStart(2,"0")}:${String(_).padStart(2,"0")}`},v=h=>{if(!h)return"Unknown";const b=new Date(h),_=Math.floor((new Date-b)/(1e3*60*60*24));return _===0?"Today":_===1?"Yesterday":_<7?`${_} days ago`:`${["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][b.getMonth()]} ${b.getDate()}`};d.useEffect(()=>{let h=!1;j(!0);const b=P=>{try{return JSON.parse(P)}catch{return null}},k=P=>encodeURIComponent(String(P).trim().toLowerCase().replace(/\s+/g,"-")),_=P=>{var T,z,B,W;const F=Number(P.ts??P.timestamp??P.id)||Date.now(),Q=Number(P.ms)||0,J=Number(P.total)||0,H=Number(P.correct)||0,O=String(P.mode||"").toLowerCase().includes("practice")?"practice":"quiz",I=((T=P.snapshot)==null?void 0:T.category)||((z=P.snapshot)==null?void 0:z.categoryLabel)||P.cat||P.category||"Unknown",D=((B=P.snapshot)==null?void 0:B.categoryParam)||k(I),L=String(((W=P.snapshot)==null?void 0:W.difficulty)||P.difficulty||"medium").toLowerCase();return{id:P.id??F,type:O,category:I,categoryParam:D,difficulty:L,score:H,total:J,accuracy:J?Math.round(H/J*100):0,time:g(Q),ms:Q,date:v(F),timestamp:F,snapshot:P.snapshot??null,mode:P.mode||(O==="practice"?"Practice":"Quiz")}};try{const P=localStorage.getItem(Qv),F=P?b(P):null,J=(Array.isArray(F)&&F.length?F:Kd).map(_).filter(H=>H&&H.timestamp).sort((H,q)=>q.timestamp-H.timestamp);h||w(J)}catch(P){console.error("Error loading history:",P),h||w(Kd)}finally{h||j(!1)}return()=>{h=!0}},[]);const N=d.useMemo(()=>{const h=new Set(f.map(b=>b.category));return Array.from(h)},[f]),C=d.useMemo(()=>{let h=f.filter(b=>e==="quizzes"?b.type==="quiz":b.type==="practice");return i!=="all"&&(h=h.filter(b=>b.category===i)),c!=="all"&&(h=h.filter(b=>b.difficulty===c)),h.sort((b,k)=>m==="date"?k.timestamp-b.timestamp:m==="score"?k.accuracy-b.accuracy:m==="time"?b.ms-k.ms:0),h},[f,e,i,c,m]),R=d.useMemo(()=>{if(C.length===0)return null;const h=C.reduce((P,F)=>P+F.score,0),b=C.reduce((P,F)=>P+F.total,0),k=b?Math.round(h/b*100):0,_=C.reduce((P,F)=>P+F.ms,0);return{count:C.length,avgAccuracy:k,totalTime:g(_),bestScore:Math.max(...C.map(P=>P.accuracy))}},[C]),E=h=>h>=80?"text-green-400":h>=60?"text-blue-400":h>=40?"text-yellow-400":"text-red-400";return x?n.jsx("div",{className:"min-h-full bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900 flex items-center justify-center",children:n.jsx("div",{className:"text-white",children:"Loading history..."})}):n.jsxs("div",{className:"min-h-full bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900 pt-12",children:[n.jsx("div",{className:"",children:n.jsxs("div",{className:"px-4 pt-4 pb-4",children:[n.jsxs("div",{className:"flex items-center justify-between mb-3",children:[n.jsx("button",{onClick:()=>{var h;if(((h=y.state)==null?void 0:h.from)==="results"){const b=ie.getCurrentResults();b?S(`/quiz/${b.categorySlug}`,{state:{returnToResults:!0}}):S("/profile")}else S("/profile")},className:"px-3 py-1.5 rounded-xl border border-white/20 bg-white/10 text-white text-sm flex items-center gap-1",children:"← Back"}),n.jsx("button",{onClick:()=>o(!a),className:"p-2 rounded-xl border border-white/20 bg-white/10 text-white",children:n.jsx(Xv,{})})]}),n.jsx("h1",{className:"text-2xl font-bold text-white mb-1",children:"History"}),n.jsx("p",{className:"text-white/70 text-sm",children:"Track your progress"})]})}),n.jsxs("div",{className:"px-4 pb-20",children:[n.jsx("div",{className:`
             sticky top-0 z-[60] isolate
            -mx-4 px-4
            py-4 mb-2
            bg-gray-900/95
            backdrop-blur-md
            border-b border-white/10
        `,children:n.jsx("div",{className:"flex items-center",children:n.jsx("div",{className:"inline-flex p-1 rounded-2xl bg-white/10 border border-white/20",children:[{value:"quizzes",label:"Quizzes",icon:"🎯"},{value:"practice",label:"Practice",icon:"📝"}].map(h=>n.jsxs("button",{onClick:()=>t(h.value),className:`px-12 py-2 text-sm rounded-xl transition-all duration-200 ${e===h.value?"bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg":"text-white/70 hover:text-white"}`,children:[n.jsx("span",{className:"mr-1",children:h.icon}),h.label]},h.value))})})}),R&&n.jsx("div",{className:"mb-4 p-4 rounded-2xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-white/20",children:n.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-3",children:[n.jsx(ja,{label:"Total",value:R.count}),n.jsx(ja,{label:"Avg Score",value:`${R.avgAccuracy}%`,color:E(R.avgAccuracy)}),n.jsx(ja,{label:"Best Score",value:`${R.bestScore}%`,color:"text-green-400"}),n.jsx(ja,{label:"Total Time",value:R.totalTime})]})}),a&&n.jsx("div",{className:"mb-4 p-4 rounded-2xl bg-white/10 border border-white/20",children:n.jsxs("div",{className:"space-y-3",children:[n.jsxs("div",{children:[n.jsx("label",{className:"text-xs text-white/60 mb-1 block",children:"Category"}),n.jsxs("select",{value:i,onChange:h=>l(h.target.value),className:"w-full px-3 py-2 rounded-xl bg-black/30 border border-white/20 text-white text-sm",children:[n.jsx("option",{value:"all",children:"All Categories"}),N.map(h=>n.jsx("option",{value:h,children:h},h))]})]}),n.jsxs("div",{className:"flex gap-2",children:[n.jsxs("div",{className:"flex-1",children:[n.jsx("label",{className:"text-xs text-white/60 mb-1 block",children:"Difficulty"}),n.jsxs("select",{value:c,onChange:h=>u(h.target.value),className:"w-full px-3 py-2 rounded-xl bg-black/30 border border-white/20 text-white text-sm",children:[n.jsx("option",{value:"all",children:"All"}),n.jsx("option",{value:"easy",children:"Easy"}),n.jsx("option",{value:"medium",children:"Medium"}),n.jsx("option",{value:"hard",children:"Hard"})]})]}),n.jsxs("div",{className:"flex-1",children:[n.jsx("label",{className:"text-xs text-white/60 mb-1 block",children:"Sort By"}),n.jsxs("select",{value:m,onChange:h=>p(h.target.value),className:"w-full px-3 py-2 rounded-xl bg-black/30 border border-white/20 text-white text-sm",children:[n.jsx("option",{value:"date",children:"Date"}),n.jsx("option",{value:"score",children:"Score"}),n.jsx("option",{value:"time",children:"Time"})]})]})]})]})}),C.length===0?n.jsxs("div",{className:"text-center py-12",children:[n.jsx("div",{className:"text-4xl mb-3",children:"📚"}),n.jsxs("p",{className:"text-white/60",children:["No ",e," history yet"]}),n.jsx("p",{className:"text-white/40 text-sm mt-1",children:"Start playing to see your progress here!"})]}):n.jsx("div",{className:"space-y-3",children:C.map((h,b)=>n.jsx(Hv,{item:h,index:b,onClick:()=>s(h)},h.id))})]}),r&&n.jsx(Kv,{item:r,onClose:()=>s(null)})]})}function ja({label:e,value:t,color:r="text-white"}){return n.jsxs("div",{className:"text-center",children:[n.jsx("div",{className:"text-xs text-white/60 mb-1",children:e}),n.jsx("div",{className:`text-lg font-bold ${r}`,children:t})]})}function Hv({item:e,index:t,onClick:r}){const s=i=>i>=80?"from-green-500/20 to-green-600/10 border-green-500/30":i>=60?"from-blue-500/20 to-blue-600/10 border-blue-500/30":i>=40?"from-yellow-500/20 to-yellow-600/10 border-yellow-500/30":"from-red-500/20 to-red-600/10 border-red-500/30",o=(i=>{const l=i==null?void 0:i.toLowerCase();return l==="easy"?{bg:"bg-green-500/20",text:"text-green-400",border:"border-green-500/30"}:l==="medium"?{bg:"bg-yellow-500/20",text:"text-yellow-400",border:"border-yellow-500/30"}:l==="hard"?{bg:"bg-red-500/20",text:"text-red-400",border:"border-red-500/30"}:{bg:"bg-gray-500/20",text:"text-gray-400",border:"border-gray-500/30"}})(e.difficulty);return n.jsxs("div",{onClick:r,className:`
        relative rounded-2xl p-4 cursor-pointer
        bg-gradient-to-br ${s(e.accuracy)}
        border transform transition-all duration-300 hover:scale-[1.02]
      `,children:[n.jsxs("div",{className:"flex items-start justify-between mb-3",children:[n.jsxs("div",{className:"flex-1",children:[n.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[n.jsx("span",{className:"text-lg",children:e.type==="quiz"?"🎯":"📝"}),n.jsx("h3",{className:"font-semibold text-white",children:e.category})]}),n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx("span",{className:`px-2 py-0.5 rounded-full text-xs ${o.bg} ${o.text} ${o.border} border`,children:e.difficulty}),n.jsx("span",{className:"text-xs text-white/50",children:e.date})]})]}),n.jsxs("div",{className:"text-right",children:[n.jsxs("div",{className:`text-2xl font-bold ${e.accuracy>=80?"text-green-400":e.accuracy>=60?"text-blue-400":e.accuracy>=40?"text-yellow-400":"text-red-400"}`,children:[e.accuracy,"%"]}),n.jsxs("div",{className:"text-xs text-white/60",children:[e.score,"/",e.total]})]})]}),n.jsxs("div",{className:"flex items-center justify-between text-xs",children:[n.jsxs("div",{className:"flex items-center gap-3 text-white/60",children:[n.jsxs("span",{children:["⏱ ",e.time]}),n.jsx("span",{children:e.mode})]}),n.jsx("span",{className:"text-white/40",children:"Tap to review →"})]})]})}function Kv({item:e,onClose:t}){const r=ke();return d.useEffect(()=>{const s=a=>{a.key==="Escape"&&t()};return document.addEventListener("keydown",s),()=>document.removeEventListener("keydown",s)},[t]),n.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80",onClick:t,children:n.jsxs("div",{className:"w-full max-w-md bg-gray-900 rounded-3xl p-6 border border-white/20",onClick:s=>s.stopPropagation(),children:[n.jsxs("div",{className:"flex items-center justify-between mb-4",children:[n.jsx("h2",{className:"text-xl font-bold text-white",children:"Quiz Details"}),n.jsx("button",{onClick:t,className:"p-2 rounded-xl bg-white/10 hover:bg-white/20 transition-colors text-white",children:"✕"})]}),n.jsxs("div",{className:"space-y-4",children:[n.jsxs("div",{className:"p-4 rounded-2xl bg-white/5 border border-white/10",children:[n.jsxs("div",{className:"flex items-center justify-between mb-2",children:[n.jsx("span",{className:"text-white/60",children:"Category"}),n.jsx("span",{className:"text-white font-medium",children:e.category})]}),n.jsxs("div",{className:"flex items-center justify-between mb-2",children:[n.jsx("span",{className:"text-white/60",children:"Difficulty"}),n.jsx("span",{className:`${e.difficulty==="easy"?"text-green-400":e.difficulty==="medium"?"text-yellow-400":"text-red-400"} font-medium`,children:e.difficulty})]}),n.jsxs("div",{className:"flex items-center justify-between mb-2",children:[n.jsx("span",{className:"text-white/60",children:"Score"}),n.jsxs("span",{className:"text-white font-medium",children:[e.score,"/",e.total]})]}),n.jsxs("div",{className:"flex items-center justify-between mb-2",children:[n.jsx("span",{className:"text-white/60",children:"Accuracy"}),n.jsxs("span",{className:`${e.accuracy>=80?"text-green-400":e.accuracy>=60?"text-blue-400":"text-yellow-400"} font-medium`,children:[e.accuracy,"%"]})]}),n.jsxs("div",{className:"flex items-center justify-between",children:[n.jsx("span",{className:"text-white/60",children:"Time"}),n.jsx("span",{className:"text-white font-medium",children:e.time})]})]}),e.snapshot&&n.jsx("button",{onClick:()=>{t(),localStorage.setItem(Gv,JSON.stringify(e.snapshot)),r(`/quiz/${e.categoryParam}/start?review=1&attempt=${e.id}`,{state:{reviewFrom:"history",historyPath:"/profile/history"}})},className:"w-full py-3 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium hover:opacity-90 transition-opacity",children:"Review Answers"}),n.jsx("button",{onClick:()=>{var s;t(),r(`/quiz/${e.categoryParam}/start`,{state:{mode:"quiz",retake:!0,difficulty:e.difficulty,count:e.total,timer:((s=e.snapshot)==null?void 0:s.timer)||{type:"per_q",seconds:45},fromHistory:!0}})},className:"w-full py-3 rounded-2xl border border-white/20 text-white font-medium hover:bg-white/10 transition-colors",children:"Retake Quiz"})]})]})})}function Xv(){return n.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:n.jsx("path",{d:"M3 6h18M7 12h10M10 18h4",strokeLinecap:"round",strokeLinejoin:"round"})})}const Vv=d.createContext({});function Om(e){const t=d.useRef(null);return t.current===null&&(t.current=e()),t.current}const Jv=typeof window<"u",Zv=Jv?d.useLayoutEffect:d.useEffect,Fm=d.createContext(null);function ey(e){return typeof e=="object"&&e!==null}function ty(e){return ey(e)&&"offsetHeight"in e}const ny=d.createContext({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"});class ry extends d.Component{getSnapshotBeforeUpdate(t){const r=this.props.childRef.current;if(r&&t.isPresent&&!this.props.isPresent){const s=r.offsetParent,a=ty(s)&&s.offsetWidth||0,o=this.props.sizeRef.current;o.height=r.offsetHeight||0,o.width=r.offsetWidth||0,o.top=r.offsetTop,o.left=r.offsetLeft,o.right=a-o.width-o.left}return null}componentDidUpdate(){}render(){return this.props.children}}function sy({children:e,isPresent:t,anchorX:r,root:s}){const a=d.useId(),o=d.useRef(null),i=d.useRef({width:0,height:0,top:0,left:0,right:0}),{nonce:l}=d.useContext(ny);return d.useInsertionEffect(()=>{const{width:c,height:u,top:m,left:p,right:f}=i.current;if(t||!o.current||!c||!u)return;const w=r==="left"?`left: ${p}`:`right: ${f}`;o.current.dataset.motionPopId=a;const x=document.createElement("style");l&&(x.nonce=l);const j=s??document.head;return j.appendChild(x),x.sheet&&x.sheet.insertRule(`
          [data-motion-pop-id="${a}"] {
            position: absolute !important;
            width: ${c}px !important;
            height: ${u}px !important;
            ${w}px !important;
            top: ${m}px !important;
          }
        `),()=>{j.contains(x)&&j.removeChild(x)}},[t]),n.jsx(ry,{isPresent:t,childRef:o,sizeRef:i,children:d.cloneElement(e,{ref:o})})}const ay=({children:e,initial:t,isPresent:r,onExitComplete:s,custom:a,presenceAffectsLayout:o,mode:i,anchorX:l,root:c})=>{const u=Om(oy),m=d.useId();let p=!0,f=d.useMemo(()=>(p=!1,{id:m,initial:t,isPresent:r,custom:a,onExitComplete:w=>{u.set(w,!0);for(const x of u.values())if(!x)return;s&&s()},register:w=>(u.set(w,!1),()=>u.delete(w))}),[r,u,s]);return o&&p&&(f={...f}),d.useMemo(()=>{u.forEach((w,x)=>u.set(x,!1))},[r]),d.useEffect(()=>{!r&&!u.size&&s&&s()},[r]),i==="popLayout"&&(e=n.jsx(sy,{isPresent:r,anchorX:l,root:c,children:e})),n.jsx(Fm.Provider,{value:f,children:e})};function oy(){return new Map}function iy(e=!0){const t=d.useContext(Fm);if(t===null)return[!0,null];const{isPresent:r,onExitComplete:s,register:a}=t,o=d.useId();d.useEffect(()=>{if(e)return a(o)},[e]);const i=d.useCallback(()=>e&&s&&s(o),[o,s,e]);return!r&&s?[!1,i]:[!0]}const Na=e=>e.key||"";function Xd(e){const t=[];return d.Children.forEach(e,r=>{d.isValidElement(r)&&t.push(r)}),t}const mi=({children:e,custom:t,initial:r=!0,onExitComplete:s,presenceAffectsLayout:a=!0,mode:o="sync",propagate:i=!1,anchorX:l="left",root:c})=>{const[u,m]=iy(i),p=d.useMemo(()=>Xd(e),[e]),f=i&&!u?[]:p.map(Na),w=d.useRef(!0),x=d.useRef(p),j=Om(()=>new Map),[S,y]=d.useState(p),[g,v]=d.useState(p);Zv(()=>{w.current=!1,x.current=p;for(let R=0;R<g.length;R++){const E=Na(g[R]);f.includes(E)?j.delete(E):j.get(E)!==!0&&j.set(E,!1)}},[g,f.length,f.join("-")]);const N=[];if(p!==S){let R=[...p];for(let E=0;E<g.length;E++){const h=g[E],b=Na(h);f.includes(b)||(R.splice(E,0,h),N.push(h))}return o==="wait"&&N.length&&(R=N),v(Xd(R)),y(p),null}const{forceRender:C}=d.useContext(Vv);return n.jsx(n.Fragment,{children:g.map(R=>{const E=Na(R),h=i&&!u?!1:p===g||f.includes(E),b=()=>{if(j.has(E))j.set(E,!0);else return;let k=!0;j.forEach(_=>{_||(k=!1)}),k&&(C==null||C(),v(x.current),i&&(m==null||m()),s&&s())};return n.jsx(ay,{isPresent:h,initial:!w.current||r?void 0:!1,custom:t,presenceAffectsLayout:a,mode:o,root:c,onExitComplete:h?void 0:b,anchorX:l,children:R},E)})})},ly=()=>{const e=ke(),[t,r]=d.useState(null);d.useEffect(()=>{if(typeof window<"u"){const Y=sessionStorage.getItem("navigationSource");Y&&r(Y)}},[]);const s=Y=>{typeof window<"u"&&(sessionStorage.setItem("navigationSource","/rewards"),window.location.href=Y)},a=()=>{e(-1)},o=[{id:1,type:"coins",value:100,icon:"🪙",label:"100 Coins",cost:0},{id:2,type:"life",value:1,icon:"❤️",label:"1 Life",cost:50},{id:3,type:"coins",value:200,icon:"🪙",label:"200 Coins",cost:0},{id:4,type:"wildcard",value:1,icon:"🃏",label:"Wild Card",cost:100},{id:5,type:"coins",value:500,icon:"💰",label:"500 Coins",cost:0,milestone:!0},{id:6,type:"fifty-fifty",value:1,icon:"➗",label:"50:50",cost:150},{id:7,type:"life",value:2,icon:"❤️",label:"2 Lives",cost:100},{id:8,type:"vehicle",value:"bike",icon:"🏍️",label:"Motorcycle",cost:300},{id:9,type:"mystery",value:1,icon:"🎁",label:"Mystery Box",cost:200},{id:10,type:"coins",value:750,icon:"💰",label:"750 Coins",cost:0,milestone:!0},{id:11,type:"life",value:3,icon:"❤️",label:"3 Lives",cost:150},{id:12,type:"wildcard",value:2,icon:"🃏",label:"2x Wild Card",cost:250},{id:13,type:"vehicle",value:"car",icon:"🚗",label:"Car",cost:500},{id:14,type:"fifty-fifty",value:2,icon:"➗",label:"2x 50:50",cost:300},{id:15,type:"coins",value:1e3,icon:"💎",label:"1000 Coins",cost:0,milestone:!0}],i={cycle:{icon:"🚴",name:"Bicycle"},bike:{icon:"🏍️",name:"Motorcycle"},car:{icon:"🚗",name:"Car"}};wn();const[l,c]=d.useState(4),[u,m]=d.useState(ie.getCoins()),[p,f]=d.useState(4),[w,x]=d.useState(!1),[j,S]=d.useState(!1),[y,g]=d.useState(0),[v,N]=d.useState(0),[C,R]=d.useState("cycle"),[E,h]=d.useState([{type:"vehicle",icon:"🚴",name:"Bicycle",count:1},{type:"wildcard",icon:"🃏",name:"Wild Card",count:2},{type:"fifty-fifty",icon:"➗",name:"50:50 Helper",count:1}]),[b,k]=d.useState([0,1,2,3]),[_,P]=d.useState(!1),[F,Q]=d.useState(!1),[J,H]=d.useState(null),[q,O]=d.useState(null),[I,D]=d.useState(!1),[L,T]=d.useState(null),[z,B]=d.useState(!1),W=d.useRef(null),$=d.useRef(null),Z=d.useRef(null);d.useEffect(()=>{W.current=new Audio("/sounds/reward.mp3"),$.current=new Audio("/sounds/reward_progress.mp3"),[W,$].forEach(Y=>{var A;(A=Y.current)==null||A.addEventListener("error",()=>{console.log("Sound file not found")})})},[]);const U=Y=>{try{Y.current&&(Y.current.currentTime=0,Y.current.play().catch(A=>console.log("Audio play failed:",A)))}catch(A){console.log("Sound play error:",A)}},M=(Y,A)=>{if(Y>l){O(A),Q(!0);return}Y===l&&G(Y,A)},ee=Y=>{var te;const A=(te=Z.current)==null?void 0:te.querySelector(`[data-index="${Y}"]`);if(A){const se=A.getBoundingClientRect(),le=window.pageYOffset||document.documentElement.scrollTop,de=se.top+le-window.innerHeight/2+50;window.scrollTo({top:de,behavior:"smooth"})}},G=(Y,A)=>{if(!b.includes(Y)){if(A.cost>0&&u<A.cost){O(A),Q(!0);return}A.cost>0&&(m(te=>te-A.cost),ie.addCoins(-A.cost,`Reward Purchase: ${A.label}`)),U(W),P(!0),O(A),k(te=>[...te,Y]),setTimeout(()=>{P(!1),A.type==="coins"?(g(A.value),x(!0),setTimeout(()=>{m(te=>te+A.value),ie.addCoins(A.value,`Reward Claimed: ${A.label}`),setTimeout(()=>{x(!1),g(0)},500)},300)):A.type==="life"?(N(A.value),S(!0),setTimeout(()=>{f(te=>te+A.value),setTimeout(()=>{S(!1),N(0)},500)},300)):(T({icon:A.icon,startX:window.innerWidth/2,startY:window.innerHeight/2}),setTimeout(()=>{T(null),B(!0),K(A),A.type==="vehicle"&&R(A.value),setTimeout(()=>{B(!1)},500)},800)),setTimeout(()=>{if(l<o.length-1){const te=l+1;ee(te),setTimeout(()=>{D(!0),U($),c(te),setTimeout(()=>{D(!1)},500)},300)}},1200)},1500)}},K=Y=>{h(A=>A.find(se=>se.icon===Y.icon)?A.map(se=>se.icon===Y.icon?{...se,count:se.count+1}:se):[...A,{type:Y.type,icon:Y.icon,name:Y.label,count:1}])},X=Y=>30+Y*100,V=()=>30+l*100;return n.jsxs("div",{className:"rewards-page",children:[n.jsx("style",{jsx:!0,children:`
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
      `}),n.jsx("div",{className:"non-sticky-header",children:n.jsx("button",{className:"back-button",onClick:a,children:"← Back"})}),n.jsxs("div",{className:"sticky-section",children:[n.jsxs("div",{className:"header-wrapper",children:[n.jsxs("div",{className:"title-row",children:[n.jsxs("div",{children:[n.jsx("h1",{className:"title",children:"Rewards"}),n.jsx("p",{className:"subtitle",children:"Claim amazing prizes"})]}),n.jsx("button",{className:"play-quiz-btn",onClick:()=>s("/play"),children:"Play Quiz"})]}),n.jsx("div",{className:"balance-row",children:n.jsx("div",{className:"balance-item",children:n.jsxs("div",{children:[n.jsx("div",{className:"balance-label",children:"Balance"}),n.jsxs("div",{className:`balance-value ${w?"animating":""}`,children:[u.toLocaleString()," 🪙",w&&n.jsxs("span",{className:"value-change",children:["+",y]})]})]})})})]}),n.jsx("div",{className:"stats-cards-container",children:n.jsxs("div",{className:"info-grid",children:[n.jsxs("div",{className:"info-card",children:[n.jsx("div",{className:"info-icon",children:"❤️"}),n.jsxs("div",{className:`info-value ${j?"animating":""}`,children:[p,j&&n.jsxs("span",{className:"value-change",children:["+",v]})]}),n.jsx("div",{className:"info-label",children:"Lives"})]}),n.jsxs("div",{className:"info-card",children:[n.jsx("div",{className:"info-icon",children:"⭐"}),n.jsx("div",{className:"info-value",children:"5"}),n.jsx("div",{className:"info-label",children:"Level"})]}),n.jsxs("div",{className:"info-card",children:[n.jsx("div",{className:"info-icon",children:i[C].icon}),n.jsx("div",{className:"info-value",children:i[C].name}),n.jsx("div",{className:"info-label",children:"Vehicle"})]}),n.jsxs("div",{className:`cards-section ${z?"animating":""}`,children:[n.jsx("div",{className:"cards-label",children:"Your Cards"}),n.jsx("div",{className:"card-grid",children:E.map((Y,A)=>n.jsxs("div",{className:"card-item",onClick:()=>H(Y),children:[n.jsxs("div",{className:"large-card",children:[n.jsx("div",{className:"large-card-icon",children:Y.icon}),n.jsx("div",{className:"large-card-name",children:Y.name})]}),Y.count>1&&n.jsx("div",{className:"card-count-badge",children:Y.count})]},A))})]})]})})]}),n.jsx("div",{className:"scrollable-journey",children:n.jsx("div",{className:"journey-container",ref:Z,children:n.jsxs("div",{className:"journey-track",children:[n.jsx("div",{className:"curvy-road",children:n.jsxs("svg",{className:"road-svg",viewBox:"0 0 60 1500",preserveAspectRatio:"none",children:[n.jsx("defs",{children:n.jsxs("linearGradient",{id:"roadGradient",x1:"0%",y1:"0%",x2:"0%",y2:"100%",children:[n.jsx("stop",{offset:"0%",stopColor:"#5E5CE6"}),n.jsx("stop",{offset:"100%",stopColor:"#5E5CE6"})]})}),n.jsx("path",{className:"road-path",d:"M 30 0 Q 45 50, 30 100 T 30 200 Q 15 250, 30 300 T 30 400 Q 45 450, 30 500 T 30 600 Q 15 650, 30 700 T 30 800 Q 45 850, 30 900 T 30 1000 Q 15 1050, 30 1100 T 30 1200 Q 45 1250, 30 1300 T 30 1400 L 30 1500"}),n.jsx("path",{className:"road-progress",d:"M 30 0 Q 45 50, 30 100 T 30 200 Q 15 250, 30 300 T 30 400 Q 45 450, 30 500 T 30 600 Q 15 650, 30 700 T 30 800 Q 45 850, 30 900 T 30 1000 Q 15 1050, 30 1100 T 30 1200 Q 45 1250, 30 1300 T 30 1400 L 30 1500",strokeDasharray:"1500",strokeDashoffset:1500-l/(o.length-1)*1500})]})}),n.jsxs("div",{className:"avatar-tracker",style:{top:`${V()}px`},children:[n.jsx("img",{className:"avatar-img",src:"/profile/avatar.png",alt:"You",onError:Y=>{Y.target.style.display="none"}}),n.jsx("div",{className:"tracker-vehicle",children:i[C].icon})]}),n.jsx("div",{className:"rewards-list",children:o.map((Y,A)=>{const te=A%2===0,se=A>l,le=b.includes(A),de=A===l;return n.jsx("div",{className:"reward-row","data-index":A,style:{top:`${X(A)}px`},children:n.jsxs("div",{className:`reward-item ${te?"left":"right"}`,children:[n.jsxs("div",{className:`checkpoint ${de?"current":le?"claimed":se?"locked":""}`,onClick:()=>M(A,Y),children:[n.jsx("div",{className:"checkpoint-icon",children:Y.icon}),n.jsx("div",{className:"checkpoint-value",children:Y.label.split(" ")[0]}),Y.milestone&&n.jsx("div",{className:"milestone-badge",children:"BONUS"}),se&&n.jsx("div",{className:"lock-icon",children:"🔒"})]}),n.jsxs("div",{className:"reward-info",children:[n.jsx("div",{className:"reward-name",children:Y.label}),n.jsxs("div",{className:"step-label",children:["Step ",A+1]})]})]})},Y.id)})})]})})}),L&&n.jsx("div",{className:"flying-card",style:{left:`${L.startX}px`,top:`${L.startY}px`,"--startX":`${L.startX}px`},children:L.icon}),n.jsx(mi,{children:J&&n.jsx("div",{className:"claim-overlay",onClick:()=>H(null),children:n.jsxs("div",{className:"modal",onClick:Y=>Y.stopPropagation(),children:[n.jsx("div",{className:"modal-icon",children:J.icon}),n.jsx("div",{className:"card-detail-name",children:J.name}),n.jsxs("div",{className:"card-detail-desc",children:["You have ",J.count," of these cards"]}),n.jsx("div",{className:"modal-buttons",children:n.jsx("button",{className:"modal-btn modal-btn-secondary",onClick:()=>H(null),children:"Close"})})]})})}),n.jsx(mi,{children:_&&q&&n.jsx("div",{className:"claim-overlay",children:n.jsxs("div",{className:"modal",children:[n.jsx("div",{className:"modal-title",children:"WELL DONE!"}),n.jsx("div",{className:"modal-subtitle",children:"Here's a reward for you."}),n.jsx("div",{className:"modal-icon",children:q.icon}),n.jsxs("div",{className:"modal-value",children:["+",q.value," ",q.type==="coins"?"Coins":q.type==="life"?"Lives":q.label]})]})})}),n.jsx(mi,{children:F&&q&&n.jsx("div",{className:"claim-overlay",onClick:()=>Q(!1),children:n.jsxs("div",{className:"modal",onClick:Y=>Y.stopPropagation(),children:[n.jsx("div",{className:"modal-icon",children:"🪙"}),n.jsx("div",{className:"modal-title",children:"Need More Coins"}),n.jsx("div",{className:"modal-subtitle",children:q.cost>0?`You need ${q.cost-u} more coins`:"Complete previous rewards first"}),n.jsxs("div",{className:"modal-buttons",children:[n.jsx("button",{className:"modal-btn modal-btn-primary",onClick:()=>s("/play"),children:"Play Quiz"}),n.jsx("button",{className:"modal-btn modal-btn-secondary",onClick:()=>Q(!1),children:"Cancel"})]})]})})})]})},ka=[{id:1,name:"First Win",emoji:"🏆",unlocked:!0,hint:"Win your first quiz",progress:100,color:"#FFD700"},{id:2,name:"On Fire",emoji:"🔥",unlocked:!0,hint:"3-day winning streak",progress:100,color:"#FF6B35"},{id:3,name:"Perfectionist",emoji:"⭐",unlocked:!1,hint:"Score 10/10 in any quiz",progress:75,color:"#9333EA"},{id:4,name:"Early Bird",emoji:"🌅",unlocked:!0,hint:"Play before 9 AM",progress:100,color:"#F59E0B"},{id:5,name:"Scholar",emoji:"🎓",unlocked:!1,hint:"Master 5 categories",progress:40,color:"#3B82F6"},{id:6,name:"Lightning",emoji:"⚡",unlocked:!1,hint:"Complete in under 2 minutes",progress:20,color:"#10B981"},{id:7,name:"Champion",emoji:"👑",unlocked:!1,hint:"Win 50 quizzes",progress:30,color:"#EC4899"},{id:8,name:"Explorer",emoji:"🗺️",unlocked:!1,hint:"Try all categories",progress:60,color:"#06B6D4"},{id:9,name:"Strategist",emoji:"🧠",unlocked:!0,hint:"Use 3 power-ups wisely",progress:100,color:"#8B5CF6"}];function cy(){const[e,t]=d.useState(null),r=ka.filter(a=>a.unlocked).length,s=Math.round(r/ka.length*100);return n.jsxs("div",{className:"badges-screen",children:[n.jsx("style",{jsx:!0,children:`
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
      `}),n.jsxs("div",{className:"header",children:[n.jsx("button",{className:"back-button",onClick:()=>window.history.back(),children:"← Back"}),n.jsxs("div",{className:"title-section",children:[n.jsx("h1",{className:"main-title",children:"Badge Collection"}),n.jsx("p",{className:"subtitle",children:"Unlock achievements and show your skills"})]})]}),n.jsxs("div",{className:"progress-card",children:[n.jsxs("div",{className:"progress-header",children:[n.jsx("span",{className:"progress-label",children:"Collection Progress"}),n.jsxs("span",{className:"progress-value",children:[r,"/",ka.length]})]}),n.jsx("div",{className:"progress-bar-container",children:n.jsx("div",{className:"progress-bar-fill",style:{width:`${s}%`}})})]}),n.jsx("div",{className:"badges-grid",children:ka.map(a=>n.jsxs("div",{className:`badge-card ${a.unlocked?"unlocked":""}`,style:{"--badge-color":a.color},onClick:()=>t(a),children:[n.jsx("div",{className:"badge-glow"}),n.jsx("div",{className:"badge-emoji",children:a.emoji}),n.jsx("div",{className:"badge-name",children:a.name}),!a.unlocked&&n.jsxs(n.Fragment,{children:[n.jsx("div",{className:"badge-progress",children:n.jsx("div",{className:"badge-progress-fill",style:{width:`${a.progress}%`}})}),n.jsx("div",{className:"lock-indicator",children:"🔒"})]})]},a.id))}),n.jsxs("div",{className:"tips-card",children:[n.jsxs("div",{className:"tips-title",children:[n.jsx("span",{children:"💡"}),n.jsx("span",{children:"Pro Tip"})]}),n.jsx("div",{className:"tips-content",children:"Complete daily challenges and maintain streaks to unlock rare badges faster. Each badge gives you bonus XP and special rewards!"})]}),e&&n.jsx("div",{className:"badge-modal",onClick:()=>t(null),children:n.jsxs("div",{className:"modal-content",onClick:a=>a.stopPropagation(),children:[n.jsx("div",{className:`modal-badge ${e.unlocked?"":"locked"}`,children:e.emoji}),n.jsx("h3",{className:"modal-title",children:e.name}),n.jsx("span",{className:`modal-status ${e.unlocked?"":"locked"}`,children:e.unlocked?"✓ Unlocked":"🔒 Locked"}),n.jsx("p",{className:"modal-description",children:e.hint}),!e.unlocked&&n.jsxs("div",{className:"modal-progress-section",children:[n.jsx("div",{className:"modal-progress-label",children:"Progress"}),n.jsx("div",{className:"modal-progress-bar",children:n.jsx("div",{className:"modal-progress-fill",style:{width:`${e.progress}%`,"--badge-color":e.color}})}),n.jsxs("div",{className:"modal-progress-text",children:[e.progress,"%"]})]}),n.jsx("button",{className:"modal-close",onClick:()=>t(null),children:e.unlocked?"Awesome!":"Keep Going!"})]})})]})}const dy=[{id:1,title:"Quiz Master",subtitle:"Play 10 quizzes",current:7,target:10,reward:150,claimed:!1,icon:"🎯",color:"#FF6B6B"},{id:2,title:"Coin Collector",subtitle:"Earn 2,000 coins",current:1240,target:2e3,reward:200,claimed:!1,icon:"💰",color:"#4ECDC4"},{id:3,title:"Winning Streak",subtitle:"Win 3 in a row",current:3,target:3,reward:100,claimed:!0,icon:"🔥",color:"#FFD93D"},{id:4,title:"Speed Demon",subtitle:"Complete 5 under 2min",current:2,target:5,reward:300,claimed:!1,icon:"⚡",color:"#A8E6CF"},{id:5,title:"Perfect Score",subtitle:"Get 100% accuracy",current:0,target:1,reward:250,claimed:!1,icon:"⭐",color:"#C7B8FF"}];function uy(){wn();const[e,t]=d.useState(dy),[r,s]=d.useState(null),[a,o]=d.useState(ie.getCoins()),[i,l]=d.useState(!1),[c,u]=d.useState([]),m=e.length,p=e.filter(x=>x.current>=x.target).length,f=Math.round(p/m*100);d.useEffect(()=>{const x=setInterval(()=>{u(j=>{const S={id:Date.now(),x:Math.random()*100,y:Math.random()*100,size:Math.random()*20+10};return[...j.slice(-4),S]})},3e3);return()=>clearInterval(x)},[]);const w=(x,j)=>{s(x),navigator.vibrate&&navigator.vibrate([20,10,20]),setTimeout(()=>{var S;t(y=>y.map(g=>g.id===x?{...g,claimed:!0}:g)),o(y=>y+j),ie.addCoins(j,`Achievement: ${((S=e.find(y=>y.id===x))==null?void 0:S.title)||"Completed"}`),s(null),l(!0),setTimeout(()=>l(!1),2e3)},600)};return n.jsxs("div",{className:"achievements-screen",children:[n.jsx("style",{jsx:!0,children:`
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
      `}),n.jsxs("div",{className:"floating-shapes",children:[n.jsx("div",{className:"shape shape-1"}),n.jsx("div",{className:"shape shape-2"})]}),n.jsxs("div",{className:"header",children:[n.jsx("button",{className:"back-button",onClick:()=>window.history.back(),children:"← Back"}),n.jsxs("div",{className:"coins-display",children:["🪙 ",a.toLocaleString()]}),n.jsxs("div",{className:"title-section",children:[n.jsx("h1",{className:"main-title",children:"ACHIEVEMENTS"}),n.jsx("p",{className:"subtitle",children:"Complete challenges and earn awesome rewards!"})]})]}),n.jsxs("div",{className:"progress-overview",children:[n.jsx("div",{className:"card-glow",style:{"--card-color":"#FFD93D"}}),n.jsxs("div",{className:"overview-header",children:[n.jsx("span",{className:"overview-label",children:"🎮 Progress Tracker"}),n.jsxs("div",{className:"overview-stats",children:[n.jsx("span",{className:"trophy-icon",children:"🏆"}),n.jsxs("span",{className:"overview-value",children:[p,"/",m]})]})]}),n.jsx("div",{className:"progress-bar-main",children:n.jsx("div",{className:"progress-fill-main",style:{width:`${f}%`}})})]}),n.jsx("div",{className:"achievements-list",children:e.map(x=>{const j=Math.min(100,Math.round(x.current/x.target*100)),S=j===100,y=x.color+"CC";return n.jsxs("div",{className:`achievement-card ${S?"completed":""}`,style:{"--card-color":x.color,"--card-color-dark":y},children:[n.jsx("div",{className:"card-glow"}),S&&x.claimed&&n.jsx("div",{className:"completed-badge",children:"✓"}),n.jsxs("div",{className:"card-content",children:[n.jsx("div",{className:"achievement-icon",children:x.icon}),n.jsxs("div",{className:"achievement-details",children:[n.jsx("div",{className:"achievement-title",children:x.title}),n.jsx("div",{className:"achievement-subtitle",children:x.subtitle}),n.jsxs("div",{className:"progress-container",children:[n.jsx("div",{className:"progress-bar",children:n.jsx("div",{className:"progress-fill",style:{width:`${j}%`}})}),n.jsxs("div",{className:"progress-text",children:[n.jsxs("span",{children:[x.current,"/",x.target]}),n.jsxs("span",{className:"reward-badge",children:["🪙 ",x.reward]})]})]})]}),n.jsx("button",{onClick:()=>w(x.id,x.reward),disabled:!S||x.claimed,className:`claim-button ${x.claimed?"claimed":S?"can-claim":"in-progress"} ${r===x.id?"claiming":""}`,children:x.claimed?"✓":S?"CLAIM!":`${j}%`})]})]},x.id)})}),i&&n.jsx("div",{className:"celebration",children:"🎉"})]})}function my(){const{player:e,updateDailyStreak:t}=wn(),r=(e==null?void 0:e.currentStreak)||0,s=(e==null?void 0:e.bestStreak)||0,a=(e==null?void 0:e.totalDays)||0;e!=null&&e.coins;const o=ke(),i=new Date,l=i.getDay(),c=()=>{const I=new Date(i);return I.setDate(i.getDate()-i.getDay()),I.toISOString().split("T")[0]},[u,m]=d.useState(null),[p,f]=d.useState(!1),[w,x]=d.useState(null),[j,S]=d.useState(null),[y,g]=d.useState(!1),v=d.useRef(null),N=d.useRef(null),[C]=Ze("/sounds/coin.mp3",{volume:.75}),[R]=Ze("/sounds/correct.mp3",{volume:.6}),[E,h]=d.useState(()=>{const I=localStorage.getItem("streaks_claimed")||"[]",D=JSON.parse(I),L=c(),T=D.filter(z=>z!==`week_${L}_day_0`);return localStorage.setItem("streaks_claimed",JSON.stringify(T)),T});d.useEffect(()=>{const I=()=>{window.scrollTo(0,0),document.documentElement.scrollTop=0,document.body.scrollTop=0;const L=document.querySelector("main");L&&(L.scrollTop=0)};I(),requestAnimationFrame(I);const D=setTimeout(I,100);return()=>clearTimeout(D)},[]),d.useEffect(()=>{g(!0),setTimeout(()=>g(!1),3e3)},[]);const b=[{label:"Mon",short:"M",dayIndex:1},{label:"Tue",short:"T",dayIndex:2},{label:"Wed",short:"W",dayIndex:3},{label:"Thu",short:"T",dayIndex:4},{label:"Fri",short:"F",dayIndex:5},{label:"Sat",short:"S",dayIndex:6},{label:"Sun",short:"S",dayIndex:0}],k=[{day:0,reward:"10",type:"coins",icon:"🎯",label:"Welcome Bonus"},{day:1,reward:"50",type:"coins",icon:"🪙",label:"50 Coins"},{day:2,reward:"100",type:"coins",icon:"🪙",label:"100 Coins"},{day:3,reward:"2x",type:"xp",icon:"⭐",label:"2x XP Boost"},{day:4,reward:"150",type:"coins",icon:"🪙",label:"150 Coins"},{day:5,reward:"Full",type:"energy",icon:"⚡",label:"Energy Refill"},{day:6,reward:"200",type:"coins",icon:"🪙",label:"200 Coins"},{day:7,reward:"Mystery",type:"mystery",icon:"🎁",label:"Mystery Box"}],_=I=>{const D=E.includes(`week_${c()}_day_${I}`);if(I===0)return{isCompleted:!0,isClaimed:D,canClaim:!D,isLocked:!1};const L=r>=I,T=L&&!D,z=r<I;return{isCompleted:L,isClaimed:D,canClaim:T,isLocked:z}},P=(I,D,L)=>{const T=_(D);if(T.isLocked){S({day:D,currentStreak:r}),setTimeout(()=>S(null),2e3);return}T.isClaimed||T.canClaim&&(m({...I,day:D}),f(!1),setTimeout(()=>{f(!0),R(),setTimeout(()=>{if(I.type==="coins"){const W=parseInt(I.reward);if(N.current&&v.current){const $=N.current.getBoundingClientRect();C(),x({startRect:$,count:10,amount:W})}}const z=`week_${c()}_day_${D}`,B=[...E,z];h(B),localStorage.setItem("streaks_claimed",JSON.stringify(B))},500),setTimeout(()=>{m(null),f(!1)},2500)},500))},F=(I,D)=>{if(b[D].dayIndex===l)return r>0?"today-completed":"today-pending";if(D<b.findIndex(T=>T.dayIndex===l)){const T=b.findIndex(z=>z.dayIndex===l)-D;return r>=T?"completed":"missed"}else return"future"},Q=[{days:3,emoji:"⚡",label:"Starter",achieved:r>=3},{days:7,emoji:"🔥",label:"Week Warrior",achieved:r>=7},{days:30,emoji:"💎",label:"Champion",achieved:r>=30},{days:100,emoji:"👑",label:"Legend",achieved:r>=100}],J=Q.find(I=>I.days>r)||Q[Q.length-1],H=Math.min(100,r/J.days*100),q=()=>{window.location.href="/play"},O=()=>{o(-1)};return n.jsxs("div",{className:"streaks-screen",children:[n.jsx("style",{jsx:!0,children:`
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
      `}),w&&n.jsx(Gn,{startRect:w.startRect,targetRef:v,count:w.count,onDone:()=>{ie.addCoins(w.amount,`Streak Reward - Day ${w.day||""}`),x(null)}}),n.jsxs("div",{className:"header",children:[n.jsxs("div",{className:"header-top",children:[n.jsx("button",{className:"back-button",onClick:O,children:"← Back"}),n.jsxs("div",{className:"coin-pill",ref:v,id:"coin-pill",children:[n.jsx("span",{className:"coin-icon",children:"🪙"}),n.jsx("span",{className:"coin-amount",children:ie.getCoins()})]})]}),n.jsxs("div",{className:"title-section",children:[n.jsx("h1",{className:"main-title",children:"STREAKS"}),n.jsx("p",{className:"subtitle",children:"Keep the fire burning!"})]})]}),n.jsxs("div",{className:"streak-hero",children:[n.jsx("div",{className:"fire-animation",children:"🔥"}),n.jsx("div",{className:"streak-number",children:r}),n.jsx("div",{className:"streak-label",children:"DAY STREAK"}),n.jsxs("div",{className:"stats-row",children:[n.jsxs("div",{className:"stat-card",children:[n.jsx("div",{className:"stat-value",children:s}),n.jsx("div",{className:"stat-label",children:"Best Streak"})]}),n.jsxs("div",{className:"stat-card",children:[n.jsx("div",{className:"stat-value",children:a}),n.jsx("div",{className:"stat-label",children:"Total Days"})]})]})]}),n.jsxs("div",{className:"weekly-progress-card",children:[n.jsxs("div",{className:"weekly-header",children:[n.jsx("div",{className:"weekly-title",children:"This Week's Progress"}),n.jsxs("div",{className:"weekly-counter",children:[n.jsx("span",{className:"weekly-counter-icon",children:"🔥"}),n.jsxs("span",{className:"weekly-counter-text",children:[Math.min(r,7),"/7"]})]})]}),n.jsx("div",{className:"weekly-days",children:b.map((I,D)=>{const L=F(I.dayIndex,D),T=I.dayIndex===l;return n.jsxs("div",{className:"day-item",children:[n.jsx("div",{className:`day-circle ${L}`,children:L==="completed"||L==="today-completed"?"":I.short}),n.jsx("div",{className:`day-label ${T?"today":""}`,children:I.label})]},D)})}),n.jsx("div",{className:"milestone-header",children:"Daily Rewards"}),n.jsx("div",{className:"rewards-grid",children:k.map((I,D)=>{const L=_(I.day);return n.jsxs("div",{className:`reward-item ${L.isLocked?"locked":L.canClaim?"can-claim":L.isClaimed?"completed":""}`,onClick:T=>P(I,I.day),children:[n.jsxs("div",{className:"reward-day",children:["Day ",I.day]}),n.jsx("div",{className:"reward-icon",children:I.icon}),n.jsx("div",{className:"reward-text",children:I.label})]},D)})})]}),n.jsxs("div",{className:"milestone-section",children:[n.jsx("div",{className:"milestone-header",children:"Next Milestone"}),n.jsxs("div",{className:"milestone-progress",children:[n.jsxs("div",{className:"milestone-info",children:[n.jsxs("div",{className:"milestone-current",children:[n.jsx("span",{className:"milestone-emoji",children:J.emoji}),n.jsx("span",{className:"milestone-text",children:J.label})]}),n.jsxs("span",{className:"milestone-target",children:[r,"/",J.days," days"]})]}),n.jsx("div",{className:"progress-bar-container",children:n.jsx("div",{className:"progress-bar-fill",style:{width:`${H}%`}})})]})]}),n.jsx("div",{className:"motivational-text",children:r===0?"Start your journey! Claim your Day 0 bonus and complete a quiz!":`Day ${r} strong! Keep going to unlock more rewards!`}),n.jsxs("button",{className:"play-button",onClick:q,children:[n.jsx("span",{children:"Continue Streak"}),n.jsx("span",{children:"→"})]}),j&&n.jsxs("div",{className:"locked-message",children:[n.jsx("span",{className:"locked-message-icon",children:"🔒"}),n.jsx("span",{className:"locked-message-text",children:j.day===1&&j.currentStreak===0?"Complete your first quiz to unlock this reward!":`Reach Day ${j.day} streak to unlock this reward!`})]}),u&&n.jsxs(n.Fragment,{children:[n.jsx("div",{className:"modal-overlay"}),n.jsx("div",{className:"reward-modal",ref:N,children:n.jsxs("div",{className:"gift-box",children:[n.jsxs("div",{className:"gift-box-body",children:[n.jsx("div",{className:"gift-box-ribbon"}),n.jsx("div",{className:"gift-box-ribbon-horizontal"})]}),n.jsx("div",{className:`gift-box-lid ${p?"opening":""}`,children:n.jsx("div",{className:"gift-box-bow",children:"🎀"})}),n.jsxs("div",{className:`gift-content ${p?"show":""}`,children:[n.jsx("div",{className:"gift-content-icon",children:u.icon}),n.jsxs("div",{className:"gift-content-title",children:["Day ",u.day]}),n.jsx("div",{className:"gift-content-desc",children:u.label})]})]})})]}),y&&n.jsx("div",{className:"celebration",children:"🎉"})]})}const fy=()=>{const e=new Date;return`${e.getFullYear()}-${e.getMonth()+1}-${e.getDate()}`},ul=()=>{const e=localStorage.getItem("questProgress");return e?JSON.parse(e):{}},Vd=(e,t)=>{const r=ul();r[e]=t,r.date=fy(),localStorage.setItem("questProgress",JSON.stringify(r))};function hy(){const{player:e}=wn(),t=ke(),r=et(),s=ul(),[a,o]=d.useState([{id:1,title:"Play 3 quizzes today",progress:s.dailyQuizzes||0,target:3,reward:60,claimed:s.dailyQuizzesClaimed||!1,icon:"🎮",color:"#FF6B6B",difficulty:"Easy",questType:"dailyQuizzes",route:"/quiz/play",routeParams:"?category=random&difficulty=random&from=quest"},{id:3,title:"Practice 15 questions",progress:s.practiceQuestions||0,target:15,reward:100,claimed:s.practiceQuestionsClaimed||!1,icon:"📚",color:"#FFD93D",difficulty:"Easy",questType:"practiceQuestions",route:"/practice/start",routeParams:"?questions=15&difficulty=easy&category=random&from=quest"},{id:4,title:"Win 5 in a row",progress:s.winStreak||0,target:5,reward:150,claimed:s.winStreakClaimed||!1,icon:"🔥",color:"#A8E6CF",difficulty:"Hard",questType:"winStreak",route:"/play",routeParams:"?mode=survival&from=quest"},{id:5,title:"Complete a speed run",progress:s.speedRun||0,target:1,reward:120,claimed:s.speedRunClaimed||!1,icon:"⚡",color:"#C7B8FF",difficulty:"Medium",questType:"speedRun",route:"/swipe/random-mix",routeParams:"?from=quest"}]),[i,l]=d.useState(ie.getCoins()),[c,u]=d.useState(null),[m,p]=d.useState(0),f=d.useRef(null),[w,x]=d.useState(null);d.useEffect(()=>{const N=()=>{const R=ul();o(E=>E.map(h=>{const b=h.questType;return R[b]!==void 0?{...h,progress:R[b]}:h}))};window.addEventListener("storage",N);const C=()=>N();return window.addEventListener("focus",C),()=>{window.removeEventListener("storage",N),window.removeEventListener("focus",C)}},[]),d.useEffect(()=>{const N=R=>{console.log("Quest progress update received:",R.detail),o(E=>E.map(h=>h.questType==="practiceQuestions"&&R.detail.practiceQuestions?{...h,progress:R.detail.practiceQuestions}:h))};window.addEventListener("questProgressUpdate",N);const C=setInterval(()=>{try{const R=localStorage.getItem("questProgress");if(R){const E=JSON.parse(R);o(h=>h.map(b=>b.questType==="practiceQuestions"&&E.practiceQuestions&&b.progress!==E.practiceQuestions?{...b,progress:E.practiceQuestions}:b))}}catch(R){console.error("Error checking progress:",R)}},1e3);return()=>{window.removeEventListener("questProgressUpdate",N),clearInterval(C)}},[]),d.useEffect(()=>{var N;if((N=r.state)!=null&&N.questCompleted){const{questType:C,increment:R}=r.state;o(E=>E.map(h=>{if(h.questType===C){const b=Math.min(h.progress+(R||1),h.target);return Vd(C,b),{...h,progress:b}}return h})),window.history.replaceState({},document.title)}},[r]),d.useEffect(()=>{const N=a.filter(C=>C.progress>=C.target).length;p(Math.round(N/a.length*100))},[a]),d.useEffect(()=>{l((e==null?void 0:e.coins)||0)},[e==null?void 0:e.coins]);const j=N=>{navigator.vibrate&&navigator.vibrate([20]),sessionStorage.setItem("activeQuest",JSON.stringify({id:N.id,type:N.questType,title:N.title,currentProgress:N.progress,target:N.target})),t(N.route+N.routeParams)},S=()=>{sessionStorage.getItem("questsFromHome")==="true"?(sessionStorage.removeItem("questsFromHome"),t("/")):t("/profile")},y=N=>{navigator.vibrate&&navigator.vibrate([20,10,20]);try{const C=new Audio("/sounds/coin.mp3");C.volume=.75,C.play()}catch{console.log("Sound not available")}u(N.id),x({startRect:{left:window.innerWidth/2-50,top:window.innerHeight/2,width:100,height:100},count:Math.min(N.reward/10,10),amount:N.reward,questTitle:N.title}),setTimeout(()=>{o(C=>C.map(R=>R.id===N.id?(Vd(R.questType+"Claimed",!0),{...R,claimed:!0}):R)),u(null)},600)},g=N=>{switch(N){case"Easy":return"#10B981";case"Medium":return"#F59E0B";case"Hard":return"#EF4444";default:return"#6B7280"}},v=()=>{const N=new Date,C=new Date(N);C.setDate(C.getDate()+1),C.setHours(5,0,0,0);const R=C-N,E=Math.floor(R/(1e3*60*60)),h=Math.floor(R%(1e3*60*60)/(1e3*60));return`${E}h ${h}m`};return n.jsxs("div",{className:"quests-screen",children:[w&&n.jsx(Gn,{startRect:w.startRect,targetRef:f,count:w.count,onDone:()=>{l(N=>N+w.amount),ie.addCoins(w.amount,`Quest Reward: ${w.questTitle||"Completed"}`),x(null)}}),n.jsx("style",{jsx:!0,children:`
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
      `}),n.jsxs("div",{className:"animated-bg",children:[n.jsx("div",{className:"floating-icon",children:"🎮"}),n.jsx("div",{className:"floating-icon",children:"🎯"}),n.jsx("div",{className:"floating-icon",children:"🏆"}),n.jsx("div",{className:"floating-icon",children:"⭐"})]}),n.jsxs("div",{className:"header",children:[n.jsx("button",{className:"back-button",onClick:S,children:"← Back"}),n.jsxs("div",{className:"coins-display",ref:f,children:["🪙 ",i]}),n.jsxs("div",{className:"title-section",children:[n.jsx("h1",{className:"main-title",children:"Daily Quests"}),n.jsx("p",{className:"subtitle",children:"Complete challenges, earn rewards!"})]})]}),n.jsxs("div",{className:"daily-progress-card",children:[n.jsxs("div",{className:"progress-header",children:[n.jsx("span",{className:"progress-label",children:"Today's Progress"}),n.jsxs("span",{className:"progress-value",children:[m,"%"]})]}),n.jsx("div",{className:"progress-bar-container",children:n.jsx("div",{className:"progress-bar-fill",style:{width:`${m}%`}})})]}),n.jsx("div",{className:"quests-list",children:a.map(N=>{const C=Math.min(100,Math.round(N.progress/N.target*100)),R=C===100,E=N.color+"CC";return n.jsxs("div",{className:`quest-card ${R?"completed":""}`,style:{"--quest-color":N.color,"--quest-color-dark":E},children:[n.jsx("div",{className:"quest-accent"}),R&&N.claimed&&n.jsx("div",{className:"completed-checkmark",children:"✓"}),n.jsxs("div",{className:"quest-content",children:[n.jsx("div",{className:`quest-icon-container ${c===N.id?"animating":""}`,children:N.icon}),n.jsxs("div",{className:"quest-details",children:[n.jsxs("div",{className:"quest-header",children:[n.jsx("span",{className:"quest-title",children:N.title}),n.jsx("span",{className:"difficulty-badge",style:{background:`${g(N.difficulty)}20`,color:g(N.difficulty)},children:N.difficulty})]}),n.jsxs("div",{className:"progress-info",children:[n.jsx("div",{className:"mini-progress-bar",children:n.jsx("div",{className:"mini-progress-fill",style:{width:`${C}%`}})}),n.jsxs("div",{className:"progress-text",children:[n.jsxs("span",{className:"progress-numbers",children:[N.progress,"/",N.target]}),n.jsxs("span",{className:"reward-display",children:["🪙 ",N.reward]})]})]})]}),n.jsx("button",{onClick:()=>{R&&!N.claimed?y(N):R||j(N)},disabled:N.claimed,className:`action-button ${N.claimed?"claimed":R?"can-claim":"in-progress"}`,style:!R&&!N.claimed?{"--quest-color":N.color,"--quest-color-dark":E}:{},children:N.claimed?"✓":R?"Claim":"Do it"})]})]},N.id)})}),n.jsxs("div",{className:"timer-card",children:[n.jsx("div",{className:"timer-icon",children:"⏰"}),n.jsx("div",{className:"timer-label",children:"New Quests In"}),n.jsx("div",{className:"timer-value",children:v()})]}),c&&n.jsx("div",{className:"reward-animation",children:"🪙"})]})}function gc({title:e,subtitle:t,children:r}){const s=ke();return n.jsxs("div",{className:"min-h-full bg-black text-white px-4 pt-12",children:[n.jsxs("div",{className:"flex items-center justify-between mb-4",children:[n.jsx("button",{onClick:()=>s(-1),className:"px-3 py-1.5 rounded-xl border border-white/10 bg-white/5 text-sm",children:"← Back"}),n.jsxs("div",{className:"text-center",children:[n.jsx("div",{className:"text-base font-semibold leading-tight",children:e}),t&&n.jsx("div",{className:"text-xs text-white/60 leading-tight",children:t})]}),n.jsx("div",{className:"w-[68px]"})]}),r]})}function py(){const e=ke(),[t,r]=d.useState(!0),[s,a]=d.useState(!0),[o,i]=d.useState(!0),[l,c]=d.useState(!1),[u,m]=d.useState("");d.useEffect(()=>{const f=rt.getCurrentUser();f&&f.phone&&m(f.phone)},[]);const p=()=>{const w=JSON.parse(localStorage.getItem("currentUser")||"{}").phone;localStorage.removeItem("currentUser"),localStorage.removeItem("qp_player"),localStorage.removeItem("rememberCredentials"),sessionStorage.clear(),w?e("/auth/signin",{replace:!0,state:{phone:w}}):e("/auth",{replace:!0})};return n.jsxs(n.Fragment,{children:[n.jsx(gc,{title:"Settings",subtitle:"Make it yours",children:n.jsx("div",{className:"flex flex-col justify-center min-h-[calc(100vh-200px)]",children:n.jsxs("div",{className:"space-y-4",children:[n.jsxs("div",{className:"rounded-3xl border border-white/10 bg-gradient-to-br from-purple-900/20 to-indigo-900/20 backdrop-blur-sm p-2",children:[n.jsx("div",{className:"px-4 pt-3 pb-1",children:n.jsx("h3",{className:"text-xs font-semibold text-white/50 uppercase tracking-wider",children:"Preferences"})}),n.jsxs("div",{className:"divide-y divide-white/10",children:[n.jsx(xr,{icon:"🔊",label:"Sound",subtitle:"Game sounds & effects",right:n.jsx(fi,{on:t,set:r})}),n.jsx(xr,{icon:"📳",label:"Haptics",subtitle:"Vibration feedback",right:n.jsx(fi,{on:s,set:a})}),n.jsx(xr,{icon:"🔔",label:"Notifications",subtitle:"Daily reminders",right:n.jsx(fi,{on:o,set:i})})]})]}),n.jsxs("div",{className:"rounded-3xl border border-white/10 bg-gradient-to-br from-blue-900/20 to-purple-900/20 backdrop-blur-sm p-2",children:[n.jsx("div",{className:"px-4 pt-3 pb-1",children:n.jsx("h3",{className:"text-xs font-semibold text-white/50 uppercase tracking-wider",children:"Account"})}),n.jsxs("div",{className:"divide-y divide-white/10",children:[n.jsx(xr,{icon:"📱",label:"Phone Number",subtitle:u||"Not available",right:n.jsx("span",{className:"text-white/40 text-sm",children:"🔒"})}),n.jsx(xr,{icon:"✏️",label:"Edit Profile",subtitle:"Update your details",right:n.jsx("span",{className:"text-white/40 text-lg",children:"→"}),onClick:()=>e("/profile/edit")}),n.jsx(xr,{icon:"🔒",label:"Privacy Policy",subtitle:"Your data is safe",right:n.jsx("span",{className:"text-white/40 text-lg",children:"→"}),onClick:()=>e("/profile/privacy")})]})]}),n.jsxs("button",{className:`w-full rounded-3xl border border-red-500/30 bg-gradient-to-r from-red-900/30 to-pink-900/30 
                       py-4 text-red-300 font-semibold backdrop-blur-sm
                       transition-all duration-200 hover:from-red-900/40 hover:to-pink-900/40 
                       active:scale-[0.98] flex items-center justify-center gap-2`,onClick:()=>c(!0),children:[n.jsx("span",{children:"🚪"}),n.jsx("span",{children:"Sign Out"})]})]})})}),l&&n.jsx("div",{className:"fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-6 z-50",children:n.jsxs("div",{className:"bg-gradient-to-br from-gray-900 to-purple-900 rounded-3xl p-6 w-full max-w-sm border border-white/20 shadow-2xl",children:[n.jsxs("div",{className:"text-center mb-6",children:[n.jsx("div",{className:"text-5xl mb-4 animate-bounce",children:"👋"}),n.jsx("h3",{className:"text-xl font-bold mb-2 text-white",children:"Leaving Already?"}),n.jsx("p",{className:"text-white/60 text-sm",children:"You'll need to sign in again to continue your quiz journey"})]}),n.jsxs("div",{className:"flex gap-3",children:[n.jsx("button",{onClick:()=>c(!1),className:`flex-1 py-3 rounded-2xl bg-white/10 hover:bg-white/20 
                         transition-all duration-200 font-semibold text-white`,children:"Stay"}),n.jsx("button",{onClick:p,className:`flex-1 py-3 rounded-2xl bg-gradient-to-r from-red-500 to-pink-500 
                         hover:from-red-600 hover:to-pink-600 transition-all duration-200 
                         font-semibold text-white shadow-lg`,children:"Sign Out"})]})]})})]})}function xr({icon:e,label:t,subtitle:r,right:s,onClick:a}){return n.jsxs("button",{type:"button",onClick:a,className:`w-full flex items-center justify-between px-4 py-4 text-left
                 hover:bg-white/5 first:rounded-t-2xl last:rounded-b-2xl transition-all duration-200`,children:[n.jsxs("div",{className:"flex items-center gap-3",children:[e&&n.jsx("span",{className:"text-xl",children:e}),n.jsxs("div",{children:[n.jsx("div",{className:"text-sm font-semibold text-white",children:t}),r&&n.jsx("div",{className:"text-xs text-white/50 mt-0.5",children:r})]})]}),s]})}function fi({on:e,set:t}){return n.jsx("span",{onClick:r=>{r.stopPropagation(),t(s=>!s),navigator.vibrate&&navigator.vibrate(10)},className:["inline-flex w-12 h-7 items-center rounded-full transition-all duration-300 px-1 shadow-inner",e?"bg-gradient-to-r from-green-400 to-emerald-500 justify-end":"bg-gray-600 justify-start"].join(" "),role:"switch","aria-checked":e,children:n.jsx("span",{className:["w-5 h-5 rounded-full bg-white shadow-md transition-transform duration-300",e?"scale-110":"scale-100"].join(" ")})})}/*! Capacitor: https://capacitorjs.com/ - MIT License */var Ur;(function(e){e.Unimplemented="UNIMPLEMENTED",e.Unavailable="UNAVAILABLE"})(Ur||(Ur={}));class hi extends Error{constructor(t,r,s){super(t),this.message=t,this.code=r,this.data=s}}const xy=e=>{var t,r;return e!=null&&e.androidBridge?"android":!((r=(t=e==null?void 0:e.webkit)===null||t===void 0?void 0:t.messageHandlers)===null||r===void 0)&&r.bridge?"ios":"web"},gy=e=>{const t=e.CapacitorCustomPlatform||null,r=e.Capacitor||{},s=r.Plugins=r.Plugins||{},a=()=>t!==null?t.name:xy(e),o=()=>a()!=="web",i=p=>{const f=u.get(p);return!!(f!=null&&f.platforms.has(a())||l(p))},l=p=>{var f;return(f=r.PluginHeaders)===null||f===void 0?void 0:f.find(w=>w.name===p)},c=p=>e.console.error(p),u=new Map,m=(p,f={})=>{const w=u.get(p);if(w)return console.warn(`Capacitor plugin "${p}" already registered. Cannot register plugins twice.`),w.proxy;const x=a(),j=l(p);let S;const y=async()=>(!S&&x in f?S=typeof f[x]=="function"?S=await f[x]():S=f[x]:t!==null&&!S&&"web"in f&&(S=typeof f.web=="function"?S=await f.web():S=f.web),S),g=(h,b)=>{var k,_;if(j){const P=j==null?void 0:j.methods.find(F=>b===F.name);if(P)return P.rtype==="promise"?F=>r.nativePromise(p,b.toString(),F):(F,Q)=>r.nativeCallback(p,b.toString(),F,Q);if(h)return(k=h[b])===null||k===void 0?void 0:k.bind(h)}else{if(h)return(_=h[b])===null||_===void 0?void 0:_.bind(h);throw new hi(`"${p}" plugin is not implemented on ${x}`,Ur.Unimplemented)}},v=h=>{let b;const k=(..._)=>{const P=y().then(F=>{const Q=g(F,h);if(Q){const J=Q(..._);return b=J==null?void 0:J.remove,J}else throw new hi(`"${p}.${h}()" is not implemented on ${x}`,Ur.Unimplemented)});return h==="addListener"&&(P.remove=async()=>b()),P};return k.toString=()=>`${h.toString()}() { [capacitor code] }`,Object.defineProperty(k,"name",{value:h,writable:!1,configurable:!1}),k},N=v("addListener"),C=v("removeListener"),R=(h,b)=>{const k=N({eventName:h},b),_=async()=>{const F=await k;C({eventName:h,callbackId:F},b)},P=new Promise(F=>k.then(()=>F({remove:_})));return P.remove=async()=>{console.warn("Using addListener() without 'await' is deprecated."),await _()},P},E=new Proxy({},{get(h,b){switch(b){case"$$typeof":return;case"toJSON":return()=>({});case"addListener":return j?R:N;case"removeListener":return C;default:return v(b)}}});return s[p]=E,u.set(p,{name:p,proxy:E,platforms:new Set([...Object.keys(f),...j?[x]:[]])}),E};return r.convertFileSrc||(r.convertFileSrc=p=>p),r.getPlatform=a,r.handleError=c,r.isNativePlatform=o,r.isPluginAvailable=i,r.registerPlugin=m,r.Exception=hi,r.DEBUG=!!r.DEBUG,r.isLoggingEnabled=!!r.isLoggingEnabled,r},vy=e=>e.Capacitor=gy(e),ml=vy(typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}),vc=ml.registerPlugin;class $m{constructor(){this.listeners={},this.retainedEventArguments={},this.windowListeners={}}addListener(t,r){let s=!1;this.listeners[t]||(this.listeners[t]=[],s=!0),this.listeners[t].push(r);const o=this.windowListeners[t];o&&!o.registered&&this.addWindowListener(o),s&&this.sendRetainedArgumentsForEvent(t);const i=async()=>this.removeListener(t,r);return Promise.resolve({remove:i})}async removeAllListeners(){this.listeners={};for(const t in this.windowListeners)this.removeWindowListener(this.windowListeners[t]);this.windowListeners={}}notifyListeners(t,r,s){const a=this.listeners[t];if(!a){if(s){let o=this.retainedEventArguments[t];o||(o=[]),o.push(r),this.retainedEventArguments[t]=o}return}a.forEach(o=>o(r))}hasListeners(t){var r;return!!(!((r=this.listeners[t])===null||r===void 0)&&r.length)}registerWindowListener(t,r){this.windowListeners[r]={registered:!1,windowEventName:t,pluginEventName:r,handler:s=>{this.notifyListeners(r,s)}}}unimplemented(t="not implemented"){return new ml.Exception(t,Ur.Unimplemented)}unavailable(t="not available"){return new ml.Exception(t,Ur.Unavailable)}async removeListener(t,r){const s=this.listeners[t];if(!s)return;const a=s.indexOf(r);this.listeners[t].splice(a,1),this.listeners[t].length||this.removeWindowListener(this.windowListeners[t])}addWindowListener(t){window.addEventListener(t.windowEventName,t.handler),t.registered=!0}removeWindowListener(t){t&&(window.removeEventListener(t.windowEventName,t.handler),t.registered=!1)}sendRetainedArgumentsForEvent(t){const r=this.retainedEventArguments[t];r&&(delete this.retainedEventArguments[t],r.forEach(s=>{this.notifyListeners(t,s)}))}}const Jd=e=>encodeURIComponent(e).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape),Zd=e=>e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent);class yy extends $m{async getCookies(){const t=document.cookie,r={};return t.split(";").forEach(s=>{if(s.length<=0)return;let[a,o]=s.replace(/=/,"CAP_COOKIE").split("CAP_COOKIE");a=Zd(a).trim(),o=Zd(o).trim(),r[a]=o}),r}async setCookie(t){try{const r=Jd(t.key),s=Jd(t.value),a=`; expires=${(t.expires||"").replace("expires=","")}`,o=(t.path||"/").replace("path=",""),i=t.url!=null&&t.url.length>0?`domain=${t.url}`:"";document.cookie=`${r}=${s||""}${a}; path=${o}; ${i};`}catch(r){return Promise.reject(r)}}async deleteCookie(t){try{document.cookie=`${t.key}=; Max-Age=0`}catch(r){return Promise.reject(r)}}async clearCookies(){try{const t=document.cookie.split(";")||[];for(const r of t)document.cookie=r.replace(/^ +/,"").replace(/=.*/,`=;expires=${new Date().toUTCString()};path=/`)}catch(t){return Promise.reject(t)}}async clearAllCookies(){try{await this.clearCookies()}catch(t){return Promise.reject(t)}}}vc("CapacitorCookies",{web:()=>new yy});const by=async e=>new Promise((t,r)=>{const s=new FileReader;s.onload=()=>{const a=s.result;t(a.indexOf(",")>=0?a.split(",")[1]:a)},s.onerror=a=>r(a),s.readAsDataURL(e)}),wy=(e={})=>{const t=Object.keys(e);return Object.keys(e).map(a=>a.toLocaleLowerCase()).reduce((a,o,i)=>(a[o]=e[t[i]],a),{})},jy=(e,t=!0)=>e?Object.entries(e).reduce((s,a)=>{const[o,i]=a;let l,c;return Array.isArray(i)?(c="",i.forEach(u=>{l=t?encodeURIComponent(u):u,c+=`${o}=${l}&`}),c.slice(0,-1)):(l=t?encodeURIComponent(i):i,c=`${o}=${l}`),`${s}&${c}`},"").substr(1):null,Ny=(e,t={})=>{const r=Object.assign({method:e.method||"GET",headers:e.headers},t),a=wy(e.headers)["content-type"]||"";if(typeof e.data=="string")r.body=e.data;else if(a.includes("application/x-www-form-urlencoded")){const o=new URLSearchParams;for(const[i,l]of Object.entries(e.data||{}))o.set(i,l);r.body=o.toString()}else if(a.includes("multipart/form-data")||e.data instanceof FormData){const o=new FormData;if(e.data instanceof FormData)e.data.forEach((l,c)=>{o.append(c,l)});else for(const l of Object.keys(e.data))o.append(l,e.data[l]);r.body=o;const i=new Headers(r.headers);i.delete("content-type"),r.headers=i}else(a.includes("application/json")||typeof e.data=="object")&&(r.body=JSON.stringify(e.data));return r};class ky extends $m{async request(t){const r=Ny(t,t.webFetchExtra),s=jy(t.params,t.shouldEncodeUrlParams),a=s?`${t.url}?${s}`:t.url,o=await fetch(a,r),i=o.headers.get("content-type")||"";let{responseType:l="text"}=o.ok?t:{};i.includes("application/json")&&(l="json");let c,u;switch(l){case"arraybuffer":case"blob":u=await o.blob(),c=await by(u);break;case"json":c=await o.json();break;case"document":case"text":default:c=await o.text()}const m={};return o.headers.forEach((p,f)=>{m[f]=p}),{data:c,headers:m,status:o.status,url:o.url}}async get(t){return this.request(Object.assign(Object.assign({},t),{method:"GET"}))}async post(t){return this.request(Object.assign(Object.assign({},t),{method:"POST"}))}async put(t){return this.request(Object.assign(Object.assign({},t),{method:"PUT"}))}async patch(t){return this.request(Object.assign(Object.assign({},t),{method:"PATCH"}))}async delete(t){return this.request(Object.assign(Object.assign({},t),{method:"DELETE"}))}}vc("CapacitorHttp",{web:()=>new ky});const eu=vc("App",{web:()=>ic(()=>import("./web-f046c9f2.js"),[]).then(e=>new e.AppWeb)});function Sy(){const e=ke(),[t,r]=d.useState(!1),[s,a]=d.useState(!1),[o,i]=d.useState(!1),[l,c]=d.useState({name:"",phone:"",gender:"",ageGroup:"",city:"",email:"",state:"",country:""}),[u,m]=d.useState({name:"",phone:"",gender:"",ageGroup:"",city:"",email:"",state:"",country:""});d.useEffect(()=>{const j=JSON.parse(localStorage.getItem("currentUser")||"{}");if(!j.phone){const N=JSON.parse(localStorage.getItem("users")||"{}"),C=Object.keys(N).find(R=>N[R].username===j.username);if(C)j.phone=C,localStorage.setItem("currentUser",JSON.stringify(j));else{e("/profile");return}}const S=rt.getUserData(j.phone);S.password;const y=JSON.parse(localStorage.getItem(`user_profile_${j.phone}`)||"{}"),g=N=>N?N.charAt(0).toUpperCase()+N.slice(1).toLowerCase():"",v={name:y.name||j.username||S.username||"",phone:j.phone||"",gender:g(y.gender||j.gender||S.gender||""),ageGroup:y.ageGroup||j.ageGroup||S.ageGroup||"",city:y.city||"",email:y.email||"",state:y.state||"",country:y.country||""};c(v),m(v)},[e]),d.useEffect(()=>{if(t){const j=JSON.stringify(l)!==JSON.stringify(u);i(j)}},[u,l,t]);const p=()=>{r(!0),m({...l}),i(!1)},f=()=>{r(!1),m({...l}),i(!1)},w=()=>{const j=JSON.parse(localStorage.getItem("currentUser")||"{}");if(!j.phone)return;rt.updateUserProfile(j.phone,u)&&(c({...u}),r(!1),i(!1),a(!0),setTimeout(()=>a(!1),3e3))},x=(j,S)=>{m(y=>({...y,[j]:S}))};return n.jsxs(gc,{title:"Edit Profile",subtitle:"Update your information",children:[s&&n.jsx("div",{className:"fixed inset-0 flex items-center justify-center z-50 pointer-events-none",children:n.jsx("div",{className:"bg-green-500/20 border border-green-500/50 rounded-2xl px-8 py-4 backdrop-blur-sm animate-bounce",children:n.jsxs("div",{className:"flex items-center gap-2 text-green-400 font-semibold text-lg",children:[n.jsx("span",{children:"Profile updated"}),n.jsx("span",{className:"text-2xl",children:"✓"})]})})}),n.jsx("div",{className:"flex flex-col justify-center min-h-[calc(100vh-200px)]",children:n.jsxs("div",{className:"space-y-4",children:[n.jsxs("div",{className:"rounded-3xl border border-white/10 bg-gradient-to-br from-purple-900/20 to-indigo-900/20 backdrop-blur-sm p-4",children:[n.jsx("h3",{className:"text-xs font-semibold text-white/50 uppercase tracking-wider mb-4",children:"Basic Information"}),n.jsxs("div",{className:"space-y-3",children:[n.jsx(Sn,{label:"Name",value:t?u.name:l.name,onChange:j=>x("name",j),placeholder:"Your full name",disabled:!t}),n.jsx(Sn,{label:"Phone",value:l.phone,disabled:!0,icon:"🔒",helperText:"Cannot be changed"}),n.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[t?n.jsxs("div",{children:[n.jsx("label",{className:"text-xs text-white/60 mb-1 block",children:"Gender"}),n.jsxs("select",{value:u.gender||"",onChange:j=>x("gender",j.target.value),className:`w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 
                                text-white transition-all duration-200 hover:bg-white/10 
                                focus:bg-white/10 focus:border-white/30 focus:outline-none`,children:[n.jsx("option",{value:"",children:"Not set"}),n.jsx("option",{value:"Male",children:"Male"}),n.jsx("option",{value:"Female",children:"Female"}),n.jsx("option",{value:"Other",children:"Other"})]})]}):n.jsx(Sn,{label:"Gender",value:l.gender||"Not set",disabled:!0}),t?n.jsxs("div",{children:[n.jsx("label",{className:"text-xs text-white/60 mb-1 block",children:"Age Group"}),n.jsxs("select",{value:u.ageGroup||"",onChange:j=>x("ageGroup",j.target.value),className:`w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 
                                text-white transition-all duration-200 hover:bg-white/10 
                                focus:bg-white/10 focus:border-white/30 focus:outline-none`,children:[n.jsx("option",{value:"",children:"Not set"}),n.jsx("option",{value:"under-5",children:"Under 5 yrs"}),n.jsx("option",{value:"5-10",children:"5-10 yrs"}),n.jsx("option",{value:"11-15",children:"11-15 yrs"}),n.jsx("option",{value:"16-20",children:"16-20 yrs"}),n.jsx("option",{value:"20+",children:"20+ yrs"})]})]}):n.jsx(Sn,{label:"Age Group",value:l.ageGroup||"Not set",disabled:!0})]})]})]}),n.jsxs("div",{className:"rounded-3xl border border-white/10 bg-gradient-to-br from-blue-900/20 to-purple-900/20 backdrop-blur-sm p-4",children:[n.jsx("h3",{className:"text-xs font-semibold text-white/50 uppercase tracking-wider mb-4",children:"Contact & Location"}),n.jsxs("div",{className:"space-y-3",children:[n.jsx(Sn,{label:"Email",value:t?u.email:l.email,onChange:j=>x("email",j),placeholder:"yourname@example.com",type:"email",helperText:t?"Optional":l.email?"":"Not provided",disabled:!t}),n.jsx(Sn,{label:"City",value:t?u.city:l.city,onChange:j=>x("city",j),placeholder:"Add your city name",disabled:!t}),n.jsx(Sn,{label:"State",value:t?u.state:l.state,onChange:j=>x("state",j),placeholder:"Your state/province",disabled:!t}),n.jsx(Sn,{label:"Country",value:t?u.country:l.country,onChange:j=>x("country",j),placeholder:"Your country",disabled:!t})]})]}),t?n.jsxs("div",{className:"flex gap-3",children:[n.jsx("button",{onClick:f,className:`flex-1 py-3 rounded-2xl bg-white/10 hover:bg-white/20 
                         transition-all duration-200 font-semibold text-white`,children:"Cancel"}),n.jsx("button",{onClick:w,disabled:!o,className:`flex-1 py-3 rounded-2xl font-semibold text-white shadow-lg
                         transition-all duration-200 ${o?"bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 cursor-pointer":"bg-gray-600 cursor-not-allowed opacity-50"}`,children:"Save Changes"})]}):n.jsx("button",{onClick:p,className:`w-full py-3 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 
                       hover:from-purple-600 hover:to-pink-600 transition-all duration-200 
                       font-semibold text-white shadow-lg`,children:"Edit"})]})})]})}function Sn({label:e,value:t,onChange:r,disabled:s,placeholder:a,type:o="text",icon:i,helperText:l}){return n.jsxs("div",{children:[n.jsx("label",{className:"text-xs text-white/60 mb-1 block",children:e}),n.jsxs("div",{className:"relative",children:[n.jsx("input",{type:o,value:t||"",onChange:c=>r&&r(c.target.value),disabled:s,placeholder:a,className:`w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 
                   text-white placeholder-white/30 transition-all duration-200
                   ${s?"opacity-50 cursor-not-allowed":"hover:bg-white/10 focus:bg-white/10 focus:border-white/30 focus:outline-none"}`}),i&&n.jsx("span",{className:"absolute right-3 top-1/2 -translate-y-1/2 text-white/50",children:i})]}),l&&n.jsx("p",{className:"text-xs text-white/40 mt-1",children:l})]})}function Cy(){const e=ke();return n.jsx(gc,{title:"Privacy Policy",subtitle:"Your data, your control",children:n.jsx("div",{className:"flex flex-col justify-center min-h-[calc(100vh-200px)]",children:n.jsx("div",{className:"rounded-3xl border border-white/10 bg-gradient-to-br from-purple-900/20 to-indigo-900/20 backdrop-blur-sm p-8",children:n.jsxs("div",{className:"text-center",children:[n.jsx("div",{className:"text-6xl mb-4",children:"🔒"}),n.jsx("h2",{className:"text-2xl font-bold text-white mb-2",children:"Privacy Policy"}),n.jsx("p",{className:"text-white/60 text-lg mb-6",children:"Will be updated soon"}),n.jsxs("div",{className:"space-y-3 text-left text-white/50 text-sm",children:[n.jsx("p",{children:"• Your data is encrypted and secure"}),n.jsx("p",{children:"• We never share your personal information"}),n.jsx("p",{children:"• You can delete your account anytime"}),n.jsx("p",{children:"• Minimal data collection for best experience"})]}),n.jsx("button",{onClick:()=>e(-1),className:`mt-8 px-8 py-3 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 
                       hover:from-purple-600 hover:to-pink-600 transition-all duration-200 
                       font-semibold text-white shadow-lg`,children:"Got it"})]})})})})}const Ey=async e=>!!JSON.parse(localStorage.getItem("users")||"{}")[e],Ty=e=>JSON.parse(localStorage.getItem("users")||"{}")[e],Py=()=>!!localStorage.getItem("currentUser");function Ry(){const e=ke(),t=et(),[r,s]=d.useState(()=>{var p;return sessionStorage.getItem("tempPhone")||((p=t.state)==null?void 0:p.phone)||""}),[a,o]=d.useState(()=>sessionStorage.getItem("tempCountryCode")||"+91"),[i,l]=d.useState(!1),[c,u]=d.useState("");d.useEffect(()=>{sessionStorage.setItem("tempPhone",r),sessionStorage.setItem("tempCountryCode",a)},[r,a]);const m=async()=>{u("");const p=r.replace(/\D/g,"");if(p.length!==10){u("Please enter a 10 digit phone number");return}l(!0);const f=a+p;await Ey(f)?e("/auth/signin",{state:{phone:f}}):e("/auth/avatar",{state:{phone:f}}),l(!1)};return d.useEffect(()=>{var p,f;if(!((p=t.state)!=null&&p.preventAutoSubmit)&&!((f=t.state)!=null&&f.fromAvatar)&&r&&r.length===10){const w=setTimeout(()=>{m()},500);return()=>clearTimeout(w)}},[]),n.jsxs("div",{className:"auth-screen",style:{background:"linear-gradient(135deg, #aa529bff 0%, #6d4397ff 100%)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},children:[n.jsxs("div",{className:"decorative-icons",children:[n.jsx("div",{className:"floating-icon",style:{top:"5%",left:"10%",animationDelay:"0s"},children:"🎮"}),n.jsx("div",{className:"floating-icon",style:{top:"15%",right:"10%",animationDelay:"5s"},children:"🏆"}),n.jsx("div",{className:"floating-icon",style:{top:"20%",left:"15%",animationDelay:"10s"},children:"⭐"}),n.jsx("div",{className:"floating-icon",style:{top:"75%",right:"20%",animationDelay:"15s"},children:"🎯"}),n.jsx("div",{className:"floating-icon",style:{top:"85%",left:"25%",animationDelay:"20s"},children:"🪙"})]}),n.jsx("div",{className:"mascot",style:{display:"flex",alignItems:"center",justifyContent:"center",marginBottom:"24px"},children:n.jsx("div",{style:{fontSize:"100px"},children:"🎮"})}),n.jsxs("div",{className:"content-card",children:[n.jsx("h1",{className:"title",children:"Ready to Play?"}),n.jsx("p",{className:"subtitle",children:"Enter your phone to start!"}),n.jsxs("div",{className:"phone-input-group",style:{display:"flex",gap:"8px",marginBottom:"24px",alignItems:"center",justifyContent:"center"},children:[n.jsxs("select",{className:"country-select",value:a,onChange:p=>o(p.target.value),style:{width:"auto",minWidth:"95px",padding:"16px 8px",border:"2px solid #e2e8f0",borderRadius:"16px",fontSize:"16px",fontWeight:"600",background:"white",transition:"all 0.3s",color:"#333",textAlign:"center"},children:[n.jsx("option",{value:"+91",children:"🇮🇳 +91"}),n.jsx("option",{value:"+1",children:"🇺🇸 +1"}),n.jsx("option",{value:"+44",children:"🇬🇧 +44"}),n.jsx("option",{value:"+86",children:"🇨🇳 +86"}),n.jsx("option",{value:"+81",children:"🇯🇵 +81"})]}),n.jsx("input",{type:"tel",className:"phone-input",placeholder:"Phone number",value:r,onChange:p=>{const f=p.target.value.replace(/\D/g,"");f.length<=10&&(s(f),c&&u(""))},maxLength:"10",inputMode:"numeric",pattern:"[0-9]*",style:{flex:1,padding:"16px",paddingLeft:"12px",border:"2px solid #e2e8f0",borderRadius:"16px",fontSize:"18px",fontWeight:"600",transition:"all 0.3s",background:"white",color:"#333",WebkitTextFillColor:"#333"}})]}),r.length>0&&r.length<10&&n.jsxs("p",{style:{color:"#f59e0b",fontSize:"14px",textAlign:"center",marginTop:"-16px",marginBottom:"16px"},children:["Enter ",10-r.length," more digit",10-r.length>1?"s":""]}),n.jsxs("button",{className:"submit-button",onClick:m,disabled:i,style:{width:"100%",padding:"18px",background:r.length===10?"linear-gradient(135deg, #667eea 0%, #764ba2 100%)":"linear-gradient(135deg, #94a3b8 0%, #cbd5e1 100%)",color:"white",border:"none",borderRadius:"16px",fontSize:"18px",fontWeight:"700",cursor:r.length===10?"pointer":"not-allowed",transition:"all 0.3s",display:"flex",alignItems:"center",justifyContent:"center",gap:"8px"},children:[i?"Loading...":"Start Adventure!",n.jsx("span",{children:"→"})]}),c&&n.jsx("p",{className:"error-message",style:{color:"#ef4444",fontSize:"14px",textAlign:"center",marginTop:"12px",fontWeight:"600"},children:c})]})]})}function _y(){const e=et(),t=ke(),{phone:r}=e.state||{},[s,a]=d.useState(""),[o,i]=d.useState(!1),[l,c]=d.useState(""),[u,m]=d.useState(!1),[p,f]=d.useState(!1),[w,x]=d.useState(""),j=Ty(r),[S,y]=d.useState(!1),[g,v]=d.useState(""),[N,C]=d.useState(!1);d.useEffect(()=>{if(localStorage.getItem("rememberCredentials")==="true"&&f(!0),r){const P=JSON.parse(localStorage.getItem(`user_profile_${r}`)||"{}"),Q=JSON.parse(localStorage.getItem("users")||"{}")[r]||{},J=P.name||Q.username||(j==null?void 0:j.username)||"";x(J)}},[r,j]);const R=async()=>{if(!s){c("Please enter your password");return}m(!0),c(""),await new Promise(_=>setTimeout(_,500)),j&&j.password===s?(rt.setCurrentUser(r),p&&localStorage.setItem("rememberCredentials","true"),t("/",{replace:!0})):(c("Wrong password"),m(!1),setTimeout(()=>c(""),3e3))},E=()=>{alert("OTP feature coming soon!")},h=()=>{sessionStorage.removeItem("tempPhone"),sessionStorage.removeItem("tempCountryCode");const _=(r==null?void 0:r.slice(-10))||"";t("/auth",{replace:!0,state:{phone:_,preventAutoSubmit:!0}})},b=()=>{sessionStorage.removeItem("tempPhone"),sessionStorage.removeItem("tempCountryCode"),t("/auth",{replace:!0,state:{isNewAccount:!0}})},k=_=>{_.key==="Enter"&&R()};return n.jsxs("div",{className:"auth-screen",style:{background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)"},children:[n.jsx("button",{className:"back-button",onClick:h,style:{position:"absolute",top:"40px",left:"20px",background:"rgba(255,255,255,0.2)",border:"none",borderRadius:"50%",width:"40px",height:"40px",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",zIndex:10,backdropFilter:"blur(10px)",transition:"all 0.3s ease"},onMouseEnter:_=>_.target.style.background="rgba(255,255,255,0.3)",onMouseLeave:_=>_.target.style.background="rgba(255,255,255,0.2)",children:n.jsx("span",{style:{fontSize:"24px",color:"white"},children:"‹"})}),n.jsxs("div",{className:"decorative-icons",children:[n.jsx("div",{className:"floating-icon",style:{top:"10%",left:"5%",animationDelay:"0s"},children:"🎮"}),n.jsx("div",{className:"floating-icon",style:{top:"20%",right:"10%",animationDelay:"2s"},children:"🏆"}),n.jsx("div",{className:"floating-icon",style:{top:"70%",left:"8%",animationDelay:"4s"},children:"⭐"}),n.jsx("div",{className:"floating-icon",style:{top:"80%",right:"5%",animationDelay:"6s"},children:"🎯"})]}),n.jsxs("div",{className:"content-card",style:{background:"rgba(255, 255, 255, 0.95)",backdropFilter:"blur(20px)",borderRadius:"32px",padding:"32px",width:"90%",maxWidth:"400px",boxShadow:"0 20px 60px rgba(0, 0, 0, 0.3)",margin:"0 auto"},children:[(j==null?void 0:j.avatar)&&n.jsx("div",{style:{fontSize:"60px",textAlign:"center",marginBottom:"16px",animation:"bounce 2s infinite"},children:j.avatar.emoji}),n.jsxs("div",{className:"welcome-back",children:[n.jsx("h1",{className:"title",style:{fontSize:"28px",fontWeight:"800",textAlign:"center",marginBottom:"8px",background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"},children:"Welcome Back! 👋"}),n.jsx("p",{className:"subtitle",style:{fontSize:"16px",color:"#64748b",textAlign:"center",marginBottom:"24px"},children:w?`Hey ${w}!`:"Good to see you again!"})]}),n.jsx("div",{className:"phone-display",style:{fontSize:"18px",fontWeight:"600",color:"#667eea",marginBottom:"24px",textAlign:"center",padding:"12px",background:"rgba(102, 126, 234, 0.1)",borderRadius:"12px"},children:r}),n.jsxs("div",{style:{position:"relative",marginBottom:"16px"},children:[n.jsx("input",{type:o?"text":"password",className:"phone-input",placeholder:"Enter your password",value:s,onChange:_=>{a(_.target.value),l&&c("")},onKeyPress:k,style:{width:"100%",paddingRight:"45px",border:l?"2px solid #ef4444":"2px solid #e2e8f0",color:"#333",fontSize:"16px",WebkitTextFillColor:"#333",backgroundColor:"white"},autoFocus:!0}),n.jsx("button",{type:"button",onClick:()=>i(!o),style:{position:"absolute",right:"12px",top:"50%",transform:"translateY(-50%)",background:"none",border:"none",cursor:"pointer",padding:"5px",fontSize:"20px",color:"#667eea"},"aria-label":o?"Hide password":"Show password",children:o?"👁️":"👁️‍🗨️"})]}),n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",marginBottom:"20px"},children:[n.jsx("input",{type:"checkbox",id:"rememberMe",checked:p,onChange:_=>f(_.target.checked),style:{width:"18px",height:"18px",cursor:"pointer",accentColor:"#667eea"}}),n.jsx("label",{htmlFor:"rememberMe",style:{fontSize:"14px",color:"#64748b",cursor:"pointer",userSelect:"none"},children:"Remember me"})]}),l&&n.jsxs("div",{style:{color:"#f59e0b",fontSize:"13px",textAlign:"center",marginTop:"-12px",marginBottom:"16px",fontWeight:"500"},children:["⚠️ ",l]}),n.jsx("button",{className:"submit-button",onClick:R,disabled:u,style:{width:"100%",padding:"18px",background:u?"linear-gradient(135deg, #94a3b8 0%, #cbd5e1 100%)":"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",color:"white",border:"none",borderRadius:"16px",fontSize:"18px",fontWeight:"700",cursor:u?"not-allowed":"pointer",transition:"all 0.3s",display:"flex",alignItems:"center",justifyContent:"center",gap:"8px",marginBottom:"20px"},children:u?n.jsxs(n.Fragment,{children:[n.jsx("span",{children:"Signing in..."}),n.jsx("span",{className:"animate-spin",children:"⚙️"})]}):n.jsxs(n.Fragment,{children:[n.jsx("span",{children:"Sign In"}),n.jsx("span",{children:"🎮"})]})}),n.jsx("div",{className:"divider",style:{textAlign:"center",margin:"20px 0",position:"relative"},children:n.jsx("span",{className:"divider-text",style:{background:"rgba(255, 255, 255, 0.95)",padding:"0 16px",position:"relative",color:"#94a3b8",fontSize:"14px"},children:"OR"})}),n.jsx("button",{className:"otp-button",onClick:E,style:{width:"100%",padding:"16px",background:"white",border:"2px solid #e2e8f0",borderRadius:"16px",fontSize:"16px",fontWeight:"600",color:"#667eea",cursor:"pointer",transition:"all 0.3s",marginBottom:"12px"},onMouseEnter:_=>{_.currentTarget.style.background="rgba(102, 126, 234, 0.05)",_.currentTarget.style.borderColor="#667eea"},onMouseLeave:_=>{_.currentTarget.style.background="white",_.currentTarget.style.borderColor="#e2e8f0"},children:"Send OTP Instead"}),n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:"20px",paddingTop:"20px",borderTop:"1px solid #e2e8f0"},children:[n.jsx("a",{href:"#",onClick:_=>{_.preventDefault(),y(!0)},style:{color:"#7c3aed",fontSize:"14px",textDecoration:"none",fontWeight:"600"},children:"Forgot password?"}),n.jsx("a",{href:"#",onClick:_=>{_.preventDefault(),b()},style:{color:"#7c3aed",fontSize:"14px",textDecoration:"none",fontWeight:"600"},children:"Create new account"})]})]}),S&&n.jsx("div",{className:"fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-6 z-50",children:n.jsxs("div",{className:"bg-gradient-to-br from-gray-900 to-purple-900 rounded-3xl p-6 w-full max-w-sm border border-white/20 shadow-2xl",children:[n.jsxs("div",{className:"text-center mb-6",children:[n.jsx("div",{className:"text-5xl mb-4",children:"🔐"}),n.jsx("h3",{className:"text-xl font-bold mb-2 text-white",children:"Reset Password"}),n.jsx("p",{className:"text-white/60 text-sm",children:"Enter your new password"})]}),n.jsxs("div",{className:"relative mb-4",children:[n.jsx("input",{type:o?"text":"password",value:g,onChange:_=>v(_.target.value),placeholder:"New password (min 6 characters)",className:`w-full px-4 py-3 pr-12 rounded-xl bg-white/10 border border-white/20 
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
      `})]})}function Ay(){const e=et(),t=ke(),{phone:r}=e.state||{},[s,a]=d.useState(()=>{var c;if((c=e.state)!=null&&c.avatar)return e.state.avatar;const l=sessionStorage.getItem("tempAvatar");return l?JSON.parse(l):null}),o=[{id:1,emoji:"🤖",name:"Robot",color:"#667eea"},{id:2,emoji:"🦄",name:"Unicorn",color:"#ec4899"},{id:3,emoji:"🐉",name:"Dragon",color:"#10b981"},{id:4,emoji:"🧙",name:"Wizard",color:"#8b5cf6"},{id:5,emoji:"👨‍🚀",name:"Astronaut",color:"#3b82f6"},{id:6,emoji:"🥷",name:"Ninja",color:"#1f2937"}];d.useEffect(()=>{s&&sessionStorage.setItem("tempAvatar",JSON.stringify(s))},[s]);const i=()=>{s&&t("/auth/username",{state:{phone:r,avatar:s}})};return n.jsxs("div",{className:"auth-screen",style:{background:"linear-gradient(135deg, #1e3a8a 0%, #3730a3 35%, #6d28d9 70%, #a78bfa 100%)"},children:[n.jsx("button",{className:"back-button",onClick:()=>t("/auth",{state:{phone:r==null?void 0:r.replace(/^\+\d{1,3}/,""),fromAvatar:!0}}),style:{position:"absolute",top:"40px",left:"20px",background:"rgba(255,255,255,0.15)",border:"none",borderRadius:"50%",width:"40px",height:"40px",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",zIndex:10,backdropFilter:"blur(10px)",transition:"all 0.3s ease"},onMouseEnter:l=>l.target.style.background="rgba(255,255,255,0.25)",onMouseLeave:l=>l.target.style.background="rgba(255,255,255,0.15)",children:n.jsx("span",{style:{fontSize:"24px",color:"rgba(194, 128, 190, 0.9)"},children:"‹"})}),n.jsxs("div",{className:"content-card",style:{background:"rgba(248, 250, 252, 0.95)",backdropFilter:"blur(20px)",borderRadius:"32px",padding:"24px 20px",width:"95%",maxWidth:"100%",boxShadow:"0 20px 60px rgba(0, 0, 0, 0.3)"},children:[n.jsxs("div",{className:"progress-dots",children:[n.jsx("div",{className:"dot active",style:{background:"#3730a3"}}),n.jsx("div",{className:"dot",style:{background:"#bf89ceff"}})]}),n.jsx("h1",{className:"title",style:{fontSize:"28px",fontWeight:"800",textAlign:"center",marginBottom:"8px",background:"linear-gradient(135deg, #1e3a8a 0%, #6d28d9 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"},children:"Pick Your Hero!"}),n.jsx("p",{className:"subtitle",style:{fontSize:"16px",color:"#64748b",textAlign:"center",marginBottom:"32px"},children:"Choose your quiz champion"}),n.jsx("div",{className:"avatar-grid",style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"10px",marginBottom:"32px",padding:"0",maxWidth:"500px",margin:"0 auto 32px auto"},children:o.map(l=>n.jsxs("div",{className:`avatar-card ${(s==null?void 0:s.id)===l.id?"selected":""}`,onClick:()=>a(l),style:{aspectRatio:"1",borderRadius:"20px",background:(s==null?void 0:s.id)===l.id?"linear-gradient(135deg, rgba(55, 48, 163, 0.1), rgba(109, 40, 217, 0.1))":"white",border:(s==null?void 0:s.id)===l.id?"3px solid #3730a3":"3px solid transparent",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",cursor:"pointer",transition:"all 0.3s",boxShadow:(s==null?void 0:s.id)===l.id?"0 4px 20px rgba(55, 48, 163, 0.2)":"0 2px 10px rgba(0, 0, 0, 0.05)",transform:(s==null?void 0:s.id)===l.id?"scale(1.05)":"scale(1)"},onMouseEnter:c=>{(s==null?void 0:s.id)!==l.id&&(c.currentTarget.style.transform="scale(1.05)",c.currentTarget.style.boxShadow="0 4px 20px rgba(55, 48, 163, 0.15)")},onMouseLeave:c=>{(s==null?void 0:s.id)!==l.id&&(c.currentTarget.style.transform="scale(1)",c.currentTarget.style.boxShadow="0 2px 10px rgba(0, 0, 0, 0.05)")},children:[n.jsx("div",{className:"avatar-emoji",style:{fontSize:"40px",marginBottom:"8px"},children:l.emoji}),n.jsx("div",{className:"avatar-name",style:{fontSize:"14px",fontWeight:"600",color:(s==null?void 0:s.id)===l.id?"#3730a3":"#64748b"},children:l.name})]},l.id))}),n.jsxs("button",{className:"submit-button",disabled:!s,onClick:i,style:{width:"100%",padding:"18px",background:s?"linear-gradient(135deg, #3730a3 0%, #6d28d9 100%)":"linear-gradient(135deg, #94a3b8 0%, #cbd5e1 100%)",color:"white",border:"none",borderRadius:"16px",fontSize:"18px",fontWeight:"700",cursor:s?"pointer":"not-allowed",transition:"all 0.3s",display:"flex",alignItems:"center",justifyContent:"center",gap:"8px",boxShadow:s?"0 4px 20px rgba(55, 48, 163, 0.3)":"none"},onMouseEnter:l=>{s&&(l.currentTarget.style.transform="translateY(-2px)",l.currentTarget.style.boxShadow="0 6px 30px rgba(55, 48, 163, 0.4)")},onMouseLeave:l=>{s&&(l.currentTarget.style.transform="translateY(0)",l.currentTarget.style.boxShadow="0 4px 20px rgba(55, 48, 163, 0.3)")},children:["Continue",n.jsx("span",{children:"→"})]})]})]})}function Iy(){const e=et(),t=ke(),{phone:r,avatar:s}=e.state||{},[a,o]=d.useState(""),[i,l]=d.useState(""),[c,u]=d.useState(""),[m,p]=d.useState(""),[f,w]=d.useState(""),x=[{value:"under-5",label:"Under 5 yrs"},{value:"5-10",label:"5-10 yrs"},{value:"11-15",label:"11-15 yrs"},{value:"16-20",label:"16-20 yrs"},{value:"20+",label:"20+ yrs"}],j=()=>{if(w(""),!a){w("Please enter your name");return}if(!i||i.length<6){w("Password must be at least 6 characters");return}if(!c){w("Please select your gender");return}if(!m){w("Please select your age group");return}const y=i||"123456",g=JSON.parse(localStorage.getItem("users")||"{}");g[r]={username:a,gender:c,ageGroup:m,avatar:s,password:y,phone:r,createdAt:new Date().toISOString()},localStorage.setItem("users",JSON.stringify(g)),localStorage.setItem("currentUser",JSON.stringify({phone:r,username:a,gender:c,ageGroup:m,avatar:s}));const v={name:a,level:1,coins:0,currentStreak:0,xp:0};localStorage.setItem("qp_player",JSON.stringify(v)),localStorage.setItem("userName",a),t("/welcome",{state:{username:a},replace:!0})},S=()=>{t("/auth/avatar",{state:{phone:r,avatar:s}})};return n.jsxs("div",{className:"auth-screen",style:{background:"linear-gradient(135deg, #6b46c1 0%, #9333ea 50%, #ec4899 100%)"},children:[n.jsx("button",{className:"back-button",onClick:S,style:{position:"absolute",top:"40px",left:"20px",background:"rgba(255,255,255,0.2)",border:"none",borderRadius:"50%",width:"40px",height:"40px",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",zIndex:10,backdropFilter:"blur(10px)",transition:"all 0.3s ease"},onMouseEnter:y=>y.target.style.background="rgba(255,255,255,0.3)",onMouseLeave:y=>y.target.style.background="rgba(255,255,255,0.2)",children:n.jsx("span",{style:{fontSize:"24px",color:"white"},children:"‹"})}),n.jsxs("div",{className:"content-card",children:[n.jsxs("div",{className:"progress-dots",children:[n.jsx("div",{className:"dot"}),n.jsx("div",{className:"dot active",style:{background:"#9333ea"}})]}),n.jsx("div",{style:{fontSize:"60px",textAlign:"center",marginBottom:"16px"},children:s==null?void 0:s.emoji}),n.jsx("h1",{className:"title",style:{background:"linear-gradient(135deg, #6b46c1 0%, #ec4899 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"},children:"Almost Done!"}),n.jsx("p",{className:"subtitle",children:"Tell us about yourself"}),n.jsxs("div",{style:{marginBottom:"24px"},children:[n.jsx("input",{type:"text",className:"phone-input",placeholder:"Enter your name...",value:a,onChange:y=>o(y.target.value),style:{width:"100%",marginBottom:"20px",color:"#333",fontSize:"16px",WebkitTextFillColor:"#333",backgroundColor:"white"}}),n.jsx("input",{type:"password",className:"phone-input",placeholder:"Create a password...",value:i,onChange:y=>l(y.target.value),style:{width:"100%",marginBottom:"20px",marginTop:"10px"}}),n.jsxs("div",{style:{marginBottom:"20px"},children:[n.jsx("label",{style:{fontSize:"14px",color:"#64748b",marginBottom:"8px",display:"block"},children:"Gender"}),n.jsxs("div",{style:{display:"flex",gap:"8px"},children:[n.jsx("button",{onClick:()=>u("male"),style:{flex:1,padding:"12px",border:"2px solid",borderColor:c==="male"?"#9333ea":"#e9d5ff",borderRadius:"12px",background:c==="male"?"rgba(147, 51, 234, 0.1)":"white",cursor:"pointer",fontSize:"14px",fontWeight:"600",color:c==="male"?"#9333ea":"#64748b",transition:"all 0.3s"},children:"👦 Male"}),n.jsx("button",{onClick:()=>u("female"),style:{flex:1,padding:"12px",border:"2px solid",borderColor:c==="female"?"#9333ea":"#e9d5ff",borderRadius:"12px",background:c==="female"?"rgba(147, 51, 234, 0.1)":"white",cursor:"pointer",fontSize:"14px",fontWeight:"600",color:c==="female"?"#9333ea":"#64748b",transition:"all 0.3s"},children:"👧 Female"}),n.jsx("button",{onClick:()=>u("other"),style:{flex:1,padding:"12px",border:"2px solid",borderColor:c==="other"?"#9333ea":"#e9d5ff",borderRadius:"12px",background:c==="other"?"rgba(147, 51, 234, 0.1)":"white",cursor:"pointer",fontSize:"14px",fontWeight:"600",color:c==="other"?"#9333ea":"#64748b",transition:"all 0.3s"},children:"🌈 Other"})]})]}),n.jsxs("div",{style:{marginBottom:"20px"},children:[n.jsx("label",{style:{fontSize:"14px",color:"#64748b",marginBottom:"8px",display:"block"},children:"Age Group"}),n.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"8px"},children:x.map(y=>n.jsx("button",{onClick:()=>p(y.value),style:{padding:"10px 4px",border:"2px solid",borderColor:m===y.value?"#9333ea":"#e9d5ff",borderRadius:"12px",background:m===y.value?"rgba(147, 51, 234, 0.1)":"white",cursor:"pointer",fontSize:"12px",fontWeight:"600",color:m===y.value?"#9333ea":"#64748b",transition:"all 0.3s"},children:y.label},y.value))})]}),f&&n.jsx("div",{style:{color:"#ef4444",fontSize:"14px",textAlign:"center",marginBottom:"16px"},children:f})]}),n.jsx("button",{className:"submit-button",onClick:j,disabled:!a||!c||!m,style:{width:"100%",padding:"18px",background:a&&c&&m?"linear-gradient(135deg, #6b46c1 0%, #ec4899 100%)":"linear-gradient(135deg, #94a3b8 0%, #cbd5e1 100%)",color:"white",border:"none",borderRadius:"16px",fontSize:"18px",fontWeight:"700",cursor:a&&c&&m?"pointer":"not-allowed",transition:"all 0.3s",display:"flex",alignItems:"center",justifyContent:"center",gap:"8px"},children:"Let's Start! 🚀"})]})]})}function Ly(){var p;const e=ke(),t=et(),[r,s]=d.useState(!1),[a,o]=d.useState(!1),[i,l]=d.useState(!1),c=((p=t.state)==null?void 0:p.username)||localStorage.getItem("userName")||"Champion",u=c.length>12;d.useEffect(()=>{sessionStorage.setItem("justSignedUp","true"),setTimeout(()=>s(!0),100),setTimeout(()=>o(!0),2e3)},[]);const m=()=>{l(!0),setTimeout(()=>{e("/",{replace:!0})},350)};return n.jsxs("div",{className:"fixed inset-0 z-50 flex items-center justify-center overflow-hidden transition-opacity",style:{background:"radial-gradient(circle at center, #1a1a2e 0%, #0f0f0f 100%)",opacity:i?.3:1,transitionDuration:"400ms"},children:[n.jsxs("div",{className:"absolute inset-0 flex items-center justify-center",children:[n.jsx("div",{className:"absolute",style:{width:"100px",height:"100px",borderRadius:"50%",background:"radial-gradient(circle, rgba(147, 51, 234, 0.8), transparent)",animation:"pulseExpand 2.5s ease-out infinite"}}),n.jsx("div",{className:"absolute",style:{width:"100px",height:"100px",borderRadius:"50%",background:"radial-gradient(circle, rgba(236, 72, 153, 0.8), transparent)",animation:"pulseExpand 2.5s ease-out 0.5s infinite"}}),n.jsx("div",{className:"absolute",style:{width:"100px",height:"100px",borderRadius:"50%",background:"radial-gradient(circle, rgba(59, 130, 246, 0.8), transparent)",animation:"pulseExpand 2.5s ease-out 1s infinite"}}),n.jsx("div",{className:"absolute",style:{width:"80px",height:"80px",borderRadius:"50%",background:"radial-gradient(circle, rgba(255, 255, 255, 0.9), rgba(147, 51, 234, 0.4))",boxShadow:"0 0 60px 20px rgba(147, 51, 234, 0.6)",animation:"glow 2s ease-in-out infinite"}})]}),n.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:[...Array(12)].map((f,w)=>n.jsx("div",{className:"absolute",style:{width:"2px",height:"100%",background:"linear-gradient(to bottom, transparent, rgba(147, 51, 234, 0.3), transparent)",transform:`rotate(${w*30}deg)`,animation:`fadeInOut 2.5s ease-in-out ${w*.1}s infinite`}},w))}),n.jsx("div",{className:`absolute z-10 transition-all duration-1000
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
      `})]})}function Dy(){return d.useState(!1),null}const zy={name:(()=>{const e=JSON.parse(localStorage.getItem("currentUser")||"{}");return e.username?e.username.split(" ")[0]:"Player"})(),avatar:"wizard",level:1,totalXP:0,energy:xt.MAX_ENERGY,energyRegenAt:null,comboStreak:0,bestCombo:0,currentStreak:0,bestStreak:0,totalDays:0,lastPlayedDate:null,totalQuizzes:0,totalCorrect:0,achievements:[],unlockedAvatars:["wizard","knight"],createdAt:Date.now()};function My(){const[e,t]=d.useState(()=>{const u=localStorage.getItem(xt.STORAGE_KEYS.PLAYER),m=JSON.parse(localStorage.getItem("currentUser")||"{}");if(u){const p=JSON.parse(u);return m.username&&(p.name=m.username.split(" ")[0]),p.unlockedAvatars||(p.unlockedAvatars=["wizard","knight"]),p}return zy});d.useEffect(()=>{localStorage.setItem(xt.STORAGE_KEYS.PLAYER,JSON.stringify(e))},[e]),d.useEffect(()=>{if(e.energy<xt.MAX_ENERGY&&e.energyRegenAt){const u=setInterval(()=>{const m=Date.now();m>=e.energyRegenAt&&t(p=>({...p,energy:Math.min(p.energy+1,xt.MAX_ENERGY),energyRegenAt:p.energy+1<xt.MAX_ENERGY?m+xt.ENERGY_REGEN_TIME:null}))},6e4);return()=>clearInterval(u)}},[e.energy,e.energyRegenAt]);const r=d.useCallback(u=>{t(m=>{const p=m.totalXP+u,f=Ld(m.totalXP),w=Ld(p);let x=[...m.unlockedAvatars];return w>f&&xt.AVATARS.forEach(j=>{j.unlockLevel<=w&&!x.includes(j.id)&&x.push(j.id)}),{...m,totalXP:p,level:w,unlockedAvatars:x}})},[]),s=d.useCallback(u=>{console.log("[DEPRECATED] addCoins called with:",u)},[]),a=d.useCallback((u=1)=>e.energy<u?!1:(t(m=>({...m,energy:m.energy-u,energyRegenAt:m.energyRegenAt||Date.now()+xt.ENERGY_REGEN_TIME})),!0),[e.energy]),o=d.useCallback(u=>{t(m=>{const p=u?m.comboStreak+1:0;return{...m,comboStreak:p,bestCombo:Math.max(m.bestCombo,p)}})},[]),i=d.useCallback(()=>{t(u=>({...u,comboStreak:0}))},[]),l=d.useCallback(u=>{e.unlockedAvatars.includes(u)&&t(m=>({...m,avatar:u}))},[e.unlockedAvatars]),c=d.useCallback(()=>{const u=new Date().toDateString();t(m=>{if(m.lastPlayedDate===u)return m;const p=new Date;p.setDate(p.getDate()-1);const f=p.toDateString();let w=m.currentStreak;return m.lastPlayedDate===f?w=m.currentStreak+1:(m.lastPlayedDate,w=1),{...m,currentStreak:w,bestStreak:Math.max(m.bestStreak,w),totalDays:m.totalDays+1,lastPlayedDate:u}})},[]);return{player:e,addXP:r,addCoins:s,useEnergy:a,updateCombo:o,resetCombo:i,changeAvatar:l,updateDailyStreak:c,levelProgress:tg(e.totalXP)}}window.history.replaceState({path:window.location.pathname,preventBack:!0},"",window.location.pathname);window.history.pushState({path:window.location.pathname,preventBack:!0},"",window.location.pathname);window.userService=rt;const Bm=d.createContext(null),wn=()=>{const e=d.useContext(Bm);if(!e)throw new Error("useGame must be used within GameProvider");return e};function Oy({children:e}){const t=My(),r=Ao(),s={...t,coins:r.coins,xp:r.xp,level:r.level,recordQuizComplete:r.recordQuizComplete,recordPracticeComplete:r.recordPracticeComplete,getTodaySummary:r.getTodaySummary};return n.jsx(Bm.Provider,{value:s,children:e})}function Fy(){const[e,t]=d.useState(!1),[r,s]=d.useState(!1);return d.useEffect(()=>{(()=>{const o=Py();s(o),t(!0)})()},[]),d.useEffect(()=>{let a=0,o=null,i=null;return(async()=>{try{i=await eu.addListener("backButton",()=>{const c=window.location.pathname;c==="/"||c==="/home"?(a++,a===1?(console.log("Press back again to exit"),o=setTimeout(()=>{a=0},2e3)):a===2&&(clearTimeout(o),eu.minimizeApp())):window.history.back()})}catch(c){console.error("Error setting up back button handler:",c)}})(),()=>{i&&typeof i.remove=="function"&&i.remove(),o&&clearTimeout(o)}},[]),e?!r&&!window.location.pathname.startsWith("/auth")?(window.location.href="/auth",null):n.jsxs(Oy,{children:[n.jsxs(mx,{children:[n.jsx(_e,{path:"/auth",element:n.jsx(Ry,{})}),n.jsx(_e,{path:"/auth/signin",element:n.jsx(_y,{})}),n.jsx(_e,{path:"/auth/avatar",element:n.jsx(Ay,{})}),n.jsx(_e,{path:"/auth/username",element:n.jsx(Iy,{})}),n.jsx(_e,{path:"/welcome",element:n.jsx(Ly,{})}),n.jsxs(_e,{element:n.jsx(Hx,{}),children:[n.jsx(_e,{path:"/",element:n.jsx(Dd,{})}),n.jsx(_e,{path:"/play",element:n.jsx(Wg,{})}),n.jsx(_e,{path:"/play/party",element:n.jsx(xv,{})}),n.jsx(_e,{path:"/profile",element:n.jsx($v,{})}),n.jsx(_e,{path:"/profile/leaderboard",element:n.jsx(Bv,{})}),n.jsx(_e,{path:"/profile/history",element:n.jsx(Wv,{})}),n.jsx(_e,{path:"/profile/rewards",element:n.jsx(ly,{})}),n.jsx(_e,{path:"/profile/badges",element:n.jsx(cy,{})}),n.jsx(_e,{path:"/profile/achievements",element:n.jsx(uy,{})}),n.jsx(_e,{path:"/profile/streaks",element:n.jsx(my,{})}),n.jsx(_e,{path:"/profile/quests",element:n.jsx(hy,{})}),n.jsx(_e,{path:"/profile/settings",element:n.jsx(py,{})}),n.jsx(_e,{path:"/profile/edit",element:n.jsx(Sy,{})}),n.jsx(_e,{path:"/profile/privacy",element:n.jsx(Cy,{})}),n.jsx(_e,{path:"/swipe",element:n.jsx(vv,{})}),n.jsx(_e,{path:"/leaders",element:n.jsx(cx,{to:"/profile/leaderboard",replace:!0})}),n.jsx(_e,{path:"/quiz/:category",element:n.jsx(lv,{})}),n.jsx(_e,{path:"/quiz/play",element:n.jsx(bv,{})}),n.jsx(_e,{path:"/practice/start",element:n.jsx(wv,{})}),n.jsx(_e,{path:"/surprise",element:n.jsx(Fv,{})}),n.jsx(_e,{path:"*",element:n.jsx(Dd,{})})]})]}),n.jsx(Dy,{})]}):n.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh",backgroundColor:"#000"},children:n.jsx("div",{style:{color:"#fff"},children:"Loading..."})})}pi.createRoot(document.getElementById("root")).render(n.jsx(yt.StrictMode,{children:n.jsx(Mx,{children:n.jsx(Fy,{})})}));export{$m as W,Um as c,tu as g};
