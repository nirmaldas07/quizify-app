(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function r(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(a){if(a.ep)return;a.ep=!0;const i=r(a);fetch(a.href,i)}})();var Om=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Kd(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Vd={exports:{}},oi={},Xd={exports:{}},ye={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fs=Symbol.for("react.element"),Fm=Symbol.for("react.portal"),$m=Symbol.for("react.fragment"),Bm=Symbol.for("react.strict_mode"),Um=Symbol.for("react.profiler"),qm=Symbol.for("react.provider"),Ym=Symbol.for("react.context"),Qm=Symbol.for("react.forward_ref"),Wm=Symbol.for("react.suspense"),Gm=Symbol.for("react.memo"),Hm=Symbol.for("react.lazy"),mc=Symbol.iterator;function Km(e){return e===null||typeof e!="object"?null:(e=mc&&e[mc]||e["@@iterator"],typeof e=="function"?e:null)}var Jd={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Zd=Object.assign,eu={};function Ur(e,t,r){this.props=e,this.context=t,this.refs=eu,this.updater=r||Jd}Ur.prototype.isReactComponent={};Ur.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Ur.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function tu(){}tu.prototype=Ur.prototype;function il(e,t,r){this.props=e,this.context=t,this.refs=eu,this.updater=r||Jd}var ol=il.prototype=new tu;ol.constructor=il;Zd(ol,Ur.prototype);ol.isPureReactComponent=!0;var hc=Array.isArray,nu=Object.prototype.hasOwnProperty,ll={current:null},ru={key:!0,ref:!0,__self:!0,__source:!0};function su(e,t,r){var s,a={},i=null,o=null;if(t!=null)for(s in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(i=""+t.key),t)nu.call(t,s)&&!ru.hasOwnProperty(s)&&(a[s]=t[s]);var l=arguments.length-2;if(l===1)a.children=r;else if(1<l){for(var c=Array(l),u=0;u<l;u++)c[u]=arguments[u+2];a.children=c}if(e&&e.defaultProps)for(s in l=e.defaultProps,l)a[s]===void 0&&(a[s]=l[s]);return{$$typeof:Fs,type:e,key:i,ref:o,props:a,_owner:ll.current}}function Vm(e,t){return{$$typeof:Fs,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function cl(e){return typeof e=="object"&&e!==null&&e.$$typeof===Fs}function Xm(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(r){return t[r]})}var pc=/\/+/g;function Ei(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Xm(""+e.key):t.toString(36)}function ya(e,t,r,s,a){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case Fs:case Fm:o=!0}}if(o)return o=e,a=a(o),e=s===""?"."+Ei(o,0):s,hc(a)?(r="",e!=null&&(r=e.replace(pc,"$&/")+"/"),ya(a,t,r,"",function(u){return u})):a!=null&&(cl(a)&&(a=Vm(a,r+(!a.key||o&&o.key===a.key?"":(""+a.key).replace(pc,"$&/")+"/")+e)),t.push(a)),1;if(o=0,s=s===""?".":s+":",hc(e))for(var l=0;l<e.length;l++){i=e[l];var c=s+Ei(i,l);o+=ya(i,t,r,c,a)}else if(c=Km(e),typeof c=="function")for(e=c.call(e),l=0;!(i=e.next()).done;)i=i.value,c=s+Ei(i,l++),o+=ya(i,t,r,c,a);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function Ws(e,t,r){if(e==null)return e;var s=[],a=0;return ya(e,s,"","",function(i){return t.call(r,i,a++)}),s}function Jm(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(r){(e._status===0||e._status===-1)&&(e._status=1,e._result=r)},function(r){(e._status===0||e._status===-1)&&(e._status=2,e._result=r)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var wt={current:null},ba={transition:null},Zm={ReactCurrentDispatcher:wt,ReactCurrentBatchConfig:ba,ReactCurrentOwner:ll};function au(){throw Error("act(...) is not supported in production builds of React.")}ye.Children={map:Ws,forEach:function(e,t,r){Ws(e,function(){t.apply(this,arguments)},r)},count:function(e){var t=0;return Ws(e,function(){t++}),t},toArray:function(e){return Ws(e,function(t){return t})||[]},only:function(e){if(!cl(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};ye.Component=Ur;ye.Fragment=$m;ye.Profiler=Um;ye.PureComponent=il;ye.StrictMode=Bm;ye.Suspense=Wm;ye.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Zm;ye.act=au;ye.cloneElement=function(e,t,r){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var s=Zd({},e.props),a=e.key,i=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,o=ll.current),t.key!==void 0&&(a=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(c in t)nu.call(t,c)&&!ru.hasOwnProperty(c)&&(s[c]=t[c]===void 0&&l!==void 0?l[c]:t[c])}var c=arguments.length-2;if(c===1)s.children=r;else if(1<c){l=Array(c);for(var u=0;u<c;u++)l[u]=arguments[u+2];s.children=l}return{$$typeof:Fs,type:e.type,key:a,ref:i,props:s,_owner:o}};ye.createContext=function(e){return e={$$typeof:Ym,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:qm,_context:e},e.Consumer=e};ye.createElement=su;ye.createFactory=function(e){var t=su.bind(null,e);return t.type=e,t};ye.createRef=function(){return{current:null}};ye.forwardRef=function(e){return{$$typeof:Qm,render:e}};ye.isValidElement=cl;ye.lazy=function(e){return{$$typeof:Hm,_payload:{_status:-1,_result:e},_init:Jm}};ye.memo=function(e,t){return{$$typeof:Gm,type:e,compare:t===void 0?null:t}};ye.startTransition=function(e){var t=ba.transition;ba.transition={};try{e()}finally{ba.transition=t}};ye.unstable_act=au;ye.useCallback=function(e,t){return wt.current.useCallback(e,t)};ye.useContext=function(e){return wt.current.useContext(e)};ye.useDebugValue=function(){};ye.useDeferredValue=function(e){return wt.current.useDeferredValue(e)};ye.useEffect=function(e,t){return wt.current.useEffect(e,t)};ye.useId=function(){return wt.current.useId()};ye.useImperativeHandle=function(e,t,r){return wt.current.useImperativeHandle(e,t,r)};ye.useInsertionEffect=function(e,t){return wt.current.useInsertionEffect(e,t)};ye.useLayoutEffect=function(e,t){return wt.current.useLayoutEffect(e,t)};ye.useMemo=function(e,t){return wt.current.useMemo(e,t)};ye.useReducer=function(e,t,r){return wt.current.useReducer(e,t,r)};ye.useRef=function(e){return wt.current.useRef(e)};ye.useState=function(e){return wt.current.useState(e)};ye.useSyncExternalStore=function(e,t,r){return wt.current.useSyncExternalStore(e,t,r)};ye.useTransition=function(){return wt.current.useTransition()};ye.version="18.3.1";Xd.exports=ye;var d=Xd.exports;const vt=Kd(d);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var e0=d,t0=Symbol.for("react.element"),n0=Symbol.for("react.fragment"),r0=Object.prototype.hasOwnProperty,s0=e0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a0={key:!0,ref:!0,__self:!0,__source:!0};function iu(e,t,r){var s,a={},i=null,o=null;r!==void 0&&(i=""+r),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(o=t.ref);for(s in t)r0.call(t,s)&&!a0.hasOwnProperty(s)&&(a[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps,t)a[s]===void 0&&(a[s]=t[s]);return{$$typeof:t0,type:e,key:i,ref:o,props:a,_owner:s0.current}}oi.Fragment=n0;oi.jsx=iu;oi.jsxs=iu;Vd.exports=oi;var n=Vd.exports,oo={},ou={exports:{}},Lt={},lu={exports:{}},cu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(I,_){var L=I.length;I.push(_);e:for(;0<L;){var A=L-1>>>1,M=I[A];if(0<a(M,_))I[A]=_,I[L]=M,L=A;else break e}}function r(I){return I.length===0?null:I[0]}function s(I){if(I.length===0)return null;var _=I[0],L=I.pop();if(L!==_){I[0]=L;e:for(var A=0,M=I.length,U=M>>>1;A<U;){var K=2*(A+1)-1,J=I[K],$=K+1,Z=I[$];if(0>a(J,L))$<M&&0>a(Z,J)?(I[A]=Z,I[$]=L,A=$):(I[A]=J,I[K]=L,A=K);else if($<M&&0>a(Z,L))I[A]=Z,I[$]=L,A=$;else break e}}return _}function a(I,_){var L=I.sortIndex-_.sortIndex;return L!==0?L:I.id-_.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var o=Date,l=o.now();e.unstable_now=function(){return o.now()-l}}var c=[],u=[],f=1,p=null,m=3,j=!1,x=!1,w=!1,S=typeof setTimeout=="function"?setTimeout:null,y=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(I){for(var _=r(u);_!==null;){if(_.callback===null)s(u);else if(_.startTime<=I)s(u),_.sortIndex=_.expirationTime,t(c,_);else break;_=r(u)}}function N(I){if(w=!1,g(I),!x)if(r(c)!==null)x=!0,W(C);else{var _=r(u);_!==null&&F(N,_.startTime-I)}}function C(I,_){x=!1,w&&(w=!1,y(h),h=-1),j=!0;var L=m;try{for(g(_),p=r(c);p!==null&&(!(p.expirationTime>_)||I&&!T());){var A=p.callback;if(typeof A=="function"){p.callback=null,m=p.priorityLevel;var M=A(p.expirationTime<=_);_=e.unstable_now(),typeof M=="function"?p.callback=M:p===r(c)&&s(c),g(_)}else s(c);p=r(c)}if(p!==null)var U=!0;else{var K=r(u);K!==null&&F(N,K.startTime-_),U=!1}return U}finally{p=null,m=L,j=!1}}var P=!1,E=null,h=-1,b=5,k=-1;function T(){return!(e.unstable_now()-k<b)}function R(){if(E!==null){var I=e.unstable_now();k=I;var _=!0;try{_=E(!0,I)}finally{_?B():(P=!1,E=null)}}else P=!1}var B;if(typeof v=="function")B=function(){v(R)};else if(typeof MessageChannel<"u"){var Q=new MessageChannel,H=Q.port2;Q.port1.onmessage=R,B=function(){H.postMessage(null)}}else B=function(){S(R,0)};function W(I){E=I,P||(P=!0,B())}function F(I,_){h=S(function(){I(e.unstable_now())},_)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(I){I.callback=null},e.unstable_continueExecution=function(){x||j||(x=!0,W(C))},e.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<I?Math.floor(1e3/I):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return r(c)},e.unstable_next=function(I){switch(m){case 1:case 2:case 3:var _=3;break;default:_=m}var L=m;m=_;try{return I()}finally{m=L}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(I,_){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var L=m;m=I;try{return _()}finally{m=L}},e.unstable_scheduleCallback=function(I,_,L){var A=e.unstable_now();switch(typeof L=="object"&&L!==null?(L=L.delay,L=typeof L=="number"&&0<L?A+L:A):L=A,I){case 1:var M=-1;break;case 2:M=250;break;case 5:M=1073741823;break;case 4:M=1e4;break;default:M=5e3}return M=L+M,I={id:f++,callback:_,priorityLevel:I,startTime:L,expirationTime:M,sortIndex:-1},L>A?(I.sortIndex=L,t(u,I),r(c)===null&&I===r(u)&&(w?(y(h),h=-1):w=!0,F(N,L-A))):(I.sortIndex=M,t(c,I),x||j||(x=!0,W(C))),I},e.unstable_shouldYield=T,e.unstable_wrapCallback=function(I){var _=m;return function(){var L=m;m=_;try{return I.apply(this,arguments)}finally{m=L}}}})(cu);lu.exports=cu;var i0=lu.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var o0=d,It=i0;function V(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var du=new Set,ws={};function cr(e,t){Lr(e,t),Lr(e+"Capture",t)}function Lr(e,t){for(ws[e]=t,e=0;e<t.length;e++)du.add(t[e])}var hn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),lo=Object.prototype.hasOwnProperty,l0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,xc={},gc={};function c0(e){return lo.call(gc,e)?!0:lo.call(xc,e)?!1:l0.test(e)?gc[e]=!0:(xc[e]=!0,!1)}function d0(e,t,r,s){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return s?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function u0(e,t,r,s){if(t===null||typeof t>"u"||d0(e,t,r,s))return!0;if(s)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function jt(e,t,r,s,a,i,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=s,this.attributeNamespace=a,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=o}var ct={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ct[e]=new jt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ct[t]=new jt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ct[e]=new jt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ct[e]=new jt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ct[e]=new jt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ct[e]=new jt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ct[e]=new jt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ct[e]=new jt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ct[e]=new jt(e,5,!1,e.toLowerCase(),null,!1,!1)});var dl=/[\-:]([a-z])/g;function ul(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(dl,ul);ct[t]=new jt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(dl,ul);ct[t]=new jt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(dl,ul);ct[t]=new jt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ct[e]=new jt(e,1,!1,e.toLowerCase(),null,!1,!1)});ct.xlinkHref=new jt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ct[e]=new jt(e,1,!1,e.toLowerCase(),null,!0,!0)});function fl(e,t,r,s){var a=ct.hasOwnProperty(t)?ct[t]:null;(a!==null?a.type!==0:s||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(u0(t,r,a,s)&&(r=null),s||a===null?c0(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):a.mustUseProperty?e[a.propertyName]=r===null?a.type===3?!1:"":r:(t=a.attributeName,s=a.attributeNamespace,r===null?e.removeAttribute(t):(a=a.type,r=a===3||a===4&&r===!0?"":""+r,s?e.setAttributeNS(s,t,r):e.setAttribute(t,r))))}var yn=o0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Gs=Symbol.for("react.element"),pr=Symbol.for("react.portal"),xr=Symbol.for("react.fragment"),ml=Symbol.for("react.strict_mode"),co=Symbol.for("react.profiler"),uu=Symbol.for("react.provider"),fu=Symbol.for("react.context"),hl=Symbol.for("react.forward_ref"),uo=Symbol.for("react.suspense"),fo=Symbol.for("react.suspense_list"),pl=Symbol.for("react.memo"),Cn=Symbol.for("react.lazy"),mu=Symbol.for("react.offscreen"),vc=Symbol.iterator;function Hr(e){return e===null||typeof e!="object"?null:(e=vc&&e[vc]||e["@@iterator"],typeof e=="function"?e:null)}var Qe=Object.assign,Pi;function os(e){if(Pi===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);Pi=t&&t[1]||""}return`
`+Pi+e}var Ti=!1;function Ri(e,t){if(!e||Ti)return"";Ti=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var s=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){s=u}e.call(t.prototype)}else{try{throw Error()}catch(u){s=u}e()}}catch(u){if(u&&s&&typeof u.stack=="string"){for(var a=u.stack.split(`
`),i=s.stack.split(`
`),o=a.length-1,l=i.length-1;1<=o&&0<=l&&a[o]!==i[l];)l--;for(;1<=o&&0<=l;o--,l--)if(a[o]!==i[l]){if(o!==1||l!==1)do if(o--,l--,0>l||a[o]!==i[l]){var c=`
`+a[o].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=o&&0<=l);break}}}finally{Ti=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?os(e):""}function f0(e){switch(e.tag){case 5:return os(e.type);case 16:return os("Lazy");case 13:return os("Suspense");case 19:return os("SuspenseList");case 0:case 2:case 15:return e=Ri(e.type,!1),e;case 11:return e=Ri(e.type.render,!1),e;case 1:return e=Ri(e.type,!0),e;default:return""}}function mo(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case xr:return"Fragment";case pr:return"Portal";case co:return"Profiler";case ml:return"StrictMode";case uo:return"Suspense";case fo:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case fu:return(e.displayName||"Context")+".Consumer";case uu:return(e._context.displayName||"Context")+".Provider";case hl:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case pl:return t=e.displayName||null,t!==null?t:mo(e.type)||"Memo";case Cn:t=e._payload,e=e._init;try{return mo(e(t))}catch{}}return null}function m0(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return mo(t);case 8:return t===ml?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Bn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function hu(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function h0(e){var t=hu(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),s=""+e[t];if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var a=r.get,i=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(o){s=""+o,i.call(this,o)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return s},setValue:function(o){s=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Hs(e){e._valueTracker||(e._valueTracker=h0(e))}function pu(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),s="";return e&&(s=hu(e)?e.checked?"true":"false":e.value),e=s,e!==r?(t.setValue(e),!0):!1}function Da(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ho(e,t){var r=t.checked;return Qe({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function yc(e,t){var r=t.defaultValue==null?"":t.defaultValue,s=t.checked!=null?t.checked:t.defaultChecked;r=Bn(t.value!=null?t.value:r),e._wrapperState={initialChecked:s,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function xu(e,t){t=t.checked,t!=null&&fl(e,"checked",t,!1)}function po(e,t){xu(e,t);var r=Bn(t.value),s=t.type;if(r!=null)s==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(s==="submit"||s==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?xo(e,t.type,r):t.hasOwnProperty("defaultValue")&&xo(e,t.type,Bn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function bc(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var s=t.type;if(!(s!=="submit"&&s!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function xo(e,t,r){(t!=="number"||Da(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var ls=Array.isArray;function Er(e,t,r,s){if(e=e.options,t){t={};for(var a=0;a<r.length;a++)t["$"+r[a]]=!0;for(r=0;r<e.length;r++)a=t.hasOwnProperty("$"+e[r].value),e[r].selected!==a&&(e[r].selected=a),a&&s&&(e[r].defaultSelected=!0)}else{for(r=""+Bn(r),t=null,a=0;a<e.length;a++){if(e[a].value===r){e[a].selected=!0,s&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function go(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(V(91));return Qe({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function wc(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(V(92));if(ls(r)){if(1<r.length)throw Error(V(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:Bn(r)}}function gu(e,t){var r=Bn(t.value),s=Bn(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),s!=null&&(e.defaultValue=""+s)}function jc(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function vu(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function vo(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?vu(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Ks,yu=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,r,s,a){MSApp.execUnsafeLocalFunction(function(){return e(t,r,s,a)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Ks=Ks||document.createElement("div"),Ks.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Ks.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function js(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var us={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},p0=["Webkit","ms","Moz","O"];Object.keys(us).forEach(function(e){p0.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),us[t]=us[e]})});function bu(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||us.hasOwnProperty(e)&&us[e]?(""+t).trim():t+"px"}function wu(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var s=r.indexOf("--")===0,a=bu(r,t[r],s);r==="float"&&(r="cssFloat"),s?e.setProperty(r,a):e[r]=a}}var x0=Qe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function yo(e,t){if(t){if(x0[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(V(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(V(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(V(61))}if(t.style!=null&&typeof t.style!="object")throw Error(V(62))}}function bo(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var wo=null;function xl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var jo=null,Pr=null,Tr=null;function Nc(e){if(e=Us(e)){if(typeof jo!="function")throw Error(V(280));var t=e.stateNode;t&&(t=fi(t),jo(e.stateNode,e.type,t))}}function ju(e){Pr?Tr?Tr.push(e):Tr=[e]:Pr=e}function Nu(){if(Pr){var e=Pr,t=Tr;if(Tr=Pr=null,Nc(e),t)for(e=0;e<t.length;e++)Nc(t[e])}}function ku(e,t){return e(t)}function Su(){}var _i=!1;function Cu(e,t,r){if(_i)return e(t,r);_i=!0;try{return ku(e,t,r)}finally{_i=!1,(Pr!==null||Tr!==null)&&(Su(),Nu())}}function Ns(e,t){var r=e.stateNode;if(r===null)return null;var s=fi(r);if(s===null)return null;r=s[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(e=e.type,s=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!s;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(V(231,t,typeof r));return r}var No=!1;if(hn)try{var Kr={};Object.defineProperty(Kr,"passive",{get:function(){No=!0}}),window.addEventListener("test",Kr,Kr),window.removeEventListener("test",Kr,Kr)}catch{No=!1}function g0(e,t,r,s,a,i,o,l,c){var u=Array.prototype.slice.call(arguments,3);try{t.apply(r,u)}catch(f){this.onError(f)}}var fs=!1,za=null,Ma=!1,ko=null,v0={onError:function(e){fs=!0,za=e}};function y0(e,t,r,s,a,i,o,l,c){fs=!1,za=null,g0.apply(v0,arguments)}function b0(e,t,r,s,a,i,o,l,c){if(y0.apply(this,arguments),fs){if(fs){var u=za;fs=!1,za=null}else throw Error(V(198));Ma||(Ma=!0,ko=u)}}function dr(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function Eu(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function kc(e){if(dr(e)!==e)throw Error(V(188))}function w0(e){var t=e.alternate;if(!t){if(t=dr(e),t===null)throw Error(V(188));return t!==e?null:e}for(var r=e,s=t;;){var a=r.return;if(a===null)break;var i=a.alternate;if(i===null){if(s=a.return,s!==null){r=s;continue}break}if(a.child===i.child){for(i=a.child;i;){if(i===r)return kc(a),e;if(i===s)return kc(a),t;i=i.sibling}throw Error(V(188))}if(r.return!==s.return)r=a,s=i;else{for(var o=!1,l=a.child;l;){if(l===r){o=!0,r=a,s=i;break}if(l===s){o=!0,s=a,r=i;break}l=l.sibling}if(!o){for(l=i.child;l;){if(l===r){o=!0,r=i,s=a;break}if(l===s){o=!0,s=i,r=a;break}l=l.sibling}if(!o)throw Error(V(189))}}if(r.alternate!==s)throw Error(V(190))}if(r.tag!==3)throw Error(V(188));return r.stateNode.current===r?e:t}function Pu(e){return e=w0(e),e!==null?Tu(e):null}function Tu(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Tu(e);if(t!==null)return t;e=e.sibling}return null}var Ru=It.unstable_scheduleCallback,Sc=It.unstable_cancelCallback,j0=It.unstable_shouldYield,N0=It.unstable_requestPaint,Ke=It.unstable_now,k0=It.unstable_getCurrentPriorityLevel,gl=It.unstable_ImmediatePriority,_u=It.unstable_UserBlockingPriority,Oa=It.unstable_NormalPriority,S0=It.unstable_LowPriority,Au=It.unstable_IdlePriority,li=null,sn=null;function C0(e){if(sn&&typeof sn.onCommitFiberRoot=="function")try{sn.onCommitFiberRoot(li,e,void 0,(e.current.flags&128)===128)}catch{}}var Vt=Math.clz32?Math.clz32:T0,E0=Math.log,P0=Math.LN2;function T0(e){return e>>>=0,e===0?32:31-(E0(e)/P0|0)|0}var Vs=64,Xs=4194304;function cs(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Fa(e,t){var r=e.pendingLanes;if(r===0)return 0;var s=0,a=e.suspendedLanes,i=e.pingedLanes,o=r&268435455;if(o!==0){var l=o&~a;l!==0?s=cs(l):(i&=o,i!==0&&(s=cs(i)))}else o=r&~a,o!==0?s=cs(o):i!==0&&(s=cs(i));if(s===0)return 0;if(t!==0&&t!==s&&!(t&a)&&(a=s&-s,i=t&-t,a>=i||a===16&&(i&4194240)!==0))return t;if(s&4&&(s|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=s;0<t;)r=31-Vt(t),a=1<<r,s|=e[r],t&=~a;return s}function R0(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function _0(e,t){for(var r=e.suspendedLanes,s=e.pingedLanes,a=e.expirationTimes,i=e.pendingLanes;0<i;){var o=31-Vt(i),l=1<<o,c=a[o];c===-1?(!(l&r)||l&s)&&(a[o]=R0(l,t)):c<=t&&(e.expiredLanes|=l),i&=~l}}function So(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Iu(){var e=Vs;return Vs<<=1,!(Vs&4194240)&&(Vs=64),e}function Ai(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function $s(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Vt(t),e[t]=r}function A0(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var s=e.eventTimes;for(e=e.expirationTimes;0<r;){var a=31-Vt(r),i=1<<a;t[a]=0,s[a]=-1,e[a]=-1,r&=~i}}function vl(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var s=31-Vt(r),a=1<<s;a&t|e[s]&t&&(e[s]|=t),r&=~a}}var Re=0;function Lu(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Du,yl,zu,Mu,Ou,Co=!1,Js=[],In=null,Ln=null,Dn=null,ks=new Map,Ss=new Map,Tn=[],I0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Cc(e,t){switch(e){case"focusin":case"focusout":In=null;break;case"dragenter":case"dragleave":Ln=null;break;case"mouseover":case"mouseout":Dn=null;break;case"pointerover":case"pointerout":ks.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ss.delete(t.pointerId)}}function Vr(e,t,r,s,a,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:r,eventSystemFlags:s,nativeEvent:i,targetContainers:[a]},t!==null&&(t=Us(t),t!==null&&yl(t)),e):(e.eventSystemFlags|=s,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function L0(e,t,r,s,a){switch(t){case"focusin":return In=Vr(In,e,t,r,s,a),!0;case"dragenter":return Ln=Vr(Ln,e,t,r,s,a),!0;case"mouseover":return Dn=Vr(Dn,e,t,r,s,a),!0;case"pointerover":var i=a.pointerId;return ks.set(i,Vr(ks.get(i)||null,e,t,r,s,a)),!0;case"gotpointercapture":return i=a.pointerId,Ss.set(i,Vr(Ss.get(i)||null,e,t,r,s,a)),!0}return!1}function Fu(e){var t=Vn(e.target);if(t!==null){var r=dr(t);if(r!==null){if(t=r.tag,t===13){if(t=Eu(r),t!==null){e.blockedOn=t,Ou(e.priority,function(){zu(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function wa(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=Eo(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var s=new r.constructor(r.type,r);wo=s,r.target.dispatchEvent(s),wo=null}else return t=Us(r),t!==null&&yl(t),e.blockedOn=r,!1;t.shift()}return!0}function Ec(e,t,r){wa(e)&&r.delete(t)}function D0(){Co=!1,In!==null&&wa(In)&&(In=null),Ln!==null&&wa(Ln)&&(Ln=null),Dn!==null&&wa(Dn)&&(Dn=null),ks.forEach(Ec),Ss.forEach(Ec)}function Xr(e,t){e.blockedOn===t&&(e.blockedOn=null,Co||(Co=!0,It.unstable_scheduleCallback(It.unstable_NormalPriority,D0)))}function Cs(e){function t(a){return Xr(a,e)}if(0<Js.length){Xr(Js[0],e);for(var r=1;r<Js.length;r++){var s=Js[r];s.blockedOn===e&&(s.blockedOn=null)}}for(In!==null&&Xr(In,e),Ln!==null&&Xr(Ln,e),Dn!==null&&Xr(Dn,e),ks.forEach(t),Ss.forEach(t),r=0;r<Tn.length;r++)s=Tn[r],s.blockedOn===e&&(s.blockedOn=null);for(;0<Tn.length&&(r=Tn[0],r.blockedOn===null);)Fu(r),r.blockedOn===null&&Tn.shift()}var Rr=yn.ReactCurrentBatchConfig,$a=!0;function z0(e,t,r,s){var a=Re,i=Rr.transition;Rr.transition=null;try{Re=1,bl(e,t,r,s)}finally{Re=a,Rr.transition=i}}function M0(e,t,r,s){var a=Re,i=Rr.transition;Rr.transition=null;try{Re=4,bl(e,t,r,s)}finally{Re=a,Rr.transition=i}}function bl(e,t,r,s){if($a){var a=Eo(e,t,r,s);if(a===null)Ui(e,t,s,Ba,r),Cc(e,s);else if(L0(a,e,t,r,s))s.stopPropagation();else if(Cc(e,s),t&4&&-1<I0.indexOf(e)){for(;a!==null;){var i=Us(a);if(i!==null&&Du(i),i=Eo(e,t,r,s),i===null&&Ui(e,t,s,Ba,r),i===a)break;a=i}a!==null&&s.stopPropagation()}else Ui(e,t,s,null,r)}}var Ba=null;function Eo(e,t,r,s){if(Ba=null,e=xl(s),e=Vn(e),e!==null)if(t=dr(e),t===null)e=null;else if(r=t.tag,r===13){if(e=Eu(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ba=e,null}function $u(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(k0()){case gl:return 1;case _u:return 4;case Oa:case S0:return 16;case Au:return 536870912;default:return 16}default:return 16}}var _n=null,wl=null,ja=null;function Bu(){if(ja)return ja;var e,t=wl,r=t.length,s,a="value"in _n?_n.value:_n.textContent,i=a.length;for(e=0;e<r&&t[e]===a[e];e++);var o=r-e;for(s=1;s<=o&&t[r-s]===a[i-s];s++);return ja=a.slice(e,1<s?1-s:void 0)}function Na(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Zs(){return!0}function Pc(){return!1}function Dt(e){function t(r,s,a,i,o){this._reactName=r,this._targetInst=a,this.type=s,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(r=e[l],this[l]=r?r(i):i[l]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Zs:Pc,this.isPropagationStopped=Pc,this}return Qe(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=Zs)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=Zs)},persist:function(){},isPersistent:Zs}),t}var qr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},jl=Dt(qr),Bs=Qe({},qr,{view:0,detail:0}),O0=Dt(Bs),Ii,Li,Jr,ci=Qe({},Bs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Nl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Jr&&(Jr&&e.type==="mousemove"?(Ii=e.screenX-Jr.screenX,Li=e.screenY-Jr.screenY):Li=Ii=0,Jr=e),Ii)},movementY:function(e){return"movementY"in e?e.movementY:Li}}),Tc=Dt(ci),F0=Qe({},ci,{dataTransfer:0}),$0=Dt(F0),B0=Qe({},Bs,{relatedTarget:0}),Di=Dt(B0),U0=Qe({},qr,{animationName:0,elapsedTime:0,pseudoElement:0}),q0=Dt(U0),Y0=Qe({},qr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Q0=Dt(Y0),W0=Qe({},qr,{data:0}),Rc=Dt(W0),G0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},H0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},K0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function V0(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=K0[e])?!!t[e]:!1}function Nl(){return V0}var X0=Qe({},Bs,{key:function(e){if(e.key){var t=G0[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Na(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?H0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Nl,charCode:function(e){return e.type==="keypress"?Na(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Na(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),J0=Dt(X0),Z0=Qe({},ci,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),_c=Dt(Z0),eh=Qe({},Bs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Nl}),th=Dt(eh),nh=Qe({},qr,{propertyName:0,elapsedTime:0,pseudoElement:0}),rh=Dt(nh),sh=Qe({},ci,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),ah=Dt(sh),ih=[9,13,27,32],kl=hn&&"CompositionEvent"in window,ms=null;hn&&"documentMode"in document&&(ms=document.documentMode);var oh=hn&&"TextEvent"in window&&!ms,Uu=hn&&(!kl||ms&&8<ms&&11>=ms),Ac=String.fromCharCode(32),Ic=!1;function qu(e,t){switch(e){case"keyup":return ih.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Yu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var gr=!1;function lh(e,t){switch(e){case"compositionend":return Yu(t);case"keypress":return t.which!==32?null:(Ic=!0,Ac);case"textInput":return e=t.data,e===Ac&&Ic?null:e;default:return null}}function ch(e,t){if(gr)return e==="compositionend"||!kl&&qu(e,t)?(e=Bu(),ja=wl=_n=null,gr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Uu&&t.locale!=="ko"?null:t.data;default:return null}}var dh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Lc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!dh[e.type]:t==="textarea"}function Qu(e,t,r,s){ju(s),t=Ua(t,"onChange"),0<t.length&&(r=new jl("onChange","change",null,r,s),e.push({event:r,listeners:t}))}var hs=null,Es=null;function uh(e){nf(e,0)}function di(e){var t=br(e);if(pu(t))return e}function fh(e,t){if(e==="change")return t}var Wu=!1;if(hn){var zi;if(hn){var Mi="oninput"in document;if(!Mi){var Dc=document.createElement("div");Dc.setAttribute("oninput","return;"),Mi=typeof Dc.oninput=="function"}zi=Mi}else zi=!1;Wu=zi&&(!document.documentMode||9<document.documentMode)}function zc(){hs&&(hs.detachEvent("onpropertychange",Gu),Es=hs=null)}function Gu(e){if(e.propertyName==="value"&&di(Es)){var t=[];Qu(t,Es,e,xl(e)),Cu(uh,t)}}function mh(e,t,r){e==="focusin"?(zc(),hs=t,Es=r,hs.attachEvent("onpropertychange",Gu)):e==="focusout"&&zc()}function hh(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return di(Es)}function ph(e,t){if(e==="click")return di(t)}function xh(e,t){if(e==="input"||e==="change")return di(t)}function gh(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Jt=typeof Object.is=="function"?Object.is:gh;function Ps(e,t){if(Jt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),s=Object.keys(t);if(r.length!==s.length)return!1;for(s=0;s<r.length;s++){var a=r[s];if(!lo.call(t,a)||!Jt(e[a],t[a]))return!1}return!0}function Mc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Oc(e,t){var r=Mc(e);e=0;for(var s;r;){if(r.nodeType===3){if(s=e+r.textContent.length,e<=t&&s>=t)return{node:r,offset:t-e};e=s}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=Mc(r)}}function Hu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Hu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ku(){for(var e=window,t=Da();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=Da(e.document)}return t}function Sl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function vh(e){var t=Ku(),r=e.focusedElem,s=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&Hu(r.ownerDocument.documentElement,r)){if(s!==null&&Sl(r)){if(t=s.start,e=s.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var a=r.textContent.length,i=Math.min(s.start,a);s=s.end===void 0?i:Math.min(s.end,a),!e.extend&&i>s&&(a=s,s=i,i=a),a=Oc(r,i);var o=Oc(r,s);a&&o&&(e.rangeCount!==1||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(a.node,a.offset),e.removeAllRanges(),i>s?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var yh=hn&&"documentMode"in document&&11>=document.documentMode,vr=null,Po=null,ps=null,To=!1;function Fc(e,t,r){var s=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;To||vr==null||vr!==Da(s)||(s=vr,"selectionStart"in s&&Sl(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),ps&&Ps(ps,s)||(ps=s,s=Ua(Po,"onSelect"),0<s.length&&(t=new jl("onSelect","select",null,t,r),e.push({event:t,listeners:s}),t.target=vr)))}function ea(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var yr={animationend:ea("Animation","AnimationEnd"),animationiteration:ea("Animation","AnimationIteration"),animationstart:ea("Animation","AnimationStart"),transitionend:ea("Transition","TransitionEnd")},Oi={},Vu={};hn&&(Vu=document.createElement("div").style,"AnimationEvent"in window||(delete yr.animationend.animation,delete yr.animationiteration.animation,delete yr.animationstart.animation),"TransitionEvent"in window||delete yr.transitionend.transition);function ui(e){if(Oi[e])return Oi[e];if(!yr[e])return e;var t=yr[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in Vu)return Oi[e]=t[r];return e}var Xu=ui("animationend"),Ju=ui("animationiteration"),Zu=ui("animationstart"),ef=ui("transitionend"),tf=new Map,$c="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function qn(e,t){tf.set(e,t),cr(t,[e])}for(var Fi=0;Fi<$c.length;Fi++){var $i=$c[Fi],bh=$i.toLowerCase(),wh=$i[0].toUpperCase()+$i.slice(1);qn(bh,"on"+wh)}qn(Xu,"onAnimationEnd");qn(Ju,"onAnimationIteration");qn(Zu,"onAnimationStart");qn("dblclick","onDoubleClick");qn("focusin","onFocus");qn("focusout","onBlur");qn(ef,"onTransitionEnd");Lr("onMouseEnter",["mouseout","mouseover"]);Lr("onMouseLeave",["mouseout","mouseover"]);Lr("onPointerEnter",["pointerout","pointerover"]);Lr("onPointerLeave",["pointerout","pointerover"]);cr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));cr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));cr("onBeforeInput",["compositionend","keypress","textInput","paste"]);cr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));cr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));cr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ds="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),jh=new Set("cancel close invalid load scroll toggle".split(" ").concat(ds));function Bc(e,t,r){var s=e.type||"unknown-event";e.currentTarget=r,b0(s,t,void 0,e),e.currentTarget=null}function nf(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var s=e[r],a=s.event;s=s.listeners;e:{var i=void 0;if(t)for(var o=s.length-1;0<=o;o--){var l=s[o],c=l.instance,u=l.currentTarget;if(l=l.listener,c!==i&&a.isPropagationStopped())break e;Bc(a,l,u),i=c}else for(o=0;o<s.length;o++){if(l=s[o],c=l.instance,u=l.currentTarget,l=l.listener,c!==i&&a.isPropagationStopped())break e;Bc(a,l,u),i=c}}}if(Ma)throw e=ko,Ma=!1,ko=null,e}function ze(e,t){var r=t[Lo];r===void 0&&(r=t[Lo]=new Set);var s=e+"__bubble";r.has(s)||(rf(t,e,2,!1),r.add(s))}function Bi(e,t,r){var s=0;t&&(s|=4),rf(r,e,s,t)}var ta="_reactListening"+Math.random().toString(36).slice(2);function Ts(e){if(!e[ta]){e[ta]=!0,du.forEach(function(r){r!=="selectionchange"&&(jh.has(r)||Bi(r,!1,e),Bi(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ta]||(t[ta]=!0,Bi("selectionchange",!1,t))}}function rf(e,t,r,s){switch($u(t)){case 1:var a=z0;break;case 4:a=M0;break;default:a=bl}r=a.bind(null,t,r,e),a=void 0,!No||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),s?a!==void 0?e.addEventListener(t,r,{capture:!0,passive:a}):e.addEventListener(t,r,!0):a!==void 0?e.addEventListener(t,r,{passive:a}):e.addEventListener(t,r,!1)}function Ui(e,t,r,s,a){var i=s;if(!(t&1)&&!(t&2)&&s!==null)e:for(;;){if(s===null)return;var o=s.tag;if(o===3||o===4){var l=s.stateNode.containerInfo;if(l===a||l.nodeType===8&&l.parentNode===a)break;if(o===4)for(o=s.return;o!==null;){var c=o.tag;if((c===3||c===4)&&(c=o.stateNode.containerInfo,c===a||c.nodeType===8&&c.parentNode===a))return;o=o.return}for(;l!==null;){if(o=Vn(l),o===null)return;if(c=o.tag,c===5||c===6){s=i=o;continue e}l=l.parentNode}}s=s.return}Cu(function(){var u=i,f=xl(r),p=[];e:{var m=tf.get(e);if(m!==void 0){var j=jl,x=e;switch(e){case"keypress":if(Na(r)===0)break e;case"keydown":case"keyup":j=J0;break;case"focusin":x="focus",j=Di;break;case"focusout":x="blur",j=Di;break;case"beforeblur":case"afterblur":j=Di;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":j=Tc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":j=$0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":j=th;break;case Xu:case Ju:case Zu:j=q0;break;case ef:j=rh;break;case"scroll":j=O0;break;case"wheel":j=ah;break;case"copy":case"cut":case"paste":j=Q0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":j=_c}var w=(t&4)!==0,S=!w&&e==="scroll",y=w?m!==null?m+"Capture":null:m;w=[];for(var v=u,g;v!==null;){g=v;var N=g.stateNode;if(g.tag===5&&N!==null&&(g=N,y!==null&&(N=Ns(v,y),N!=null&&w.push(Rs(v,N,g)))),S)break;v=v.return}0<w.length&&(m=new j(m,x,null,r,f),p.push({event:m,listeners:w}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",j=e==="mouseout"||e==="pointerout",m&&r!==wo&&(x=r.relatedTarget||r.fromElement)&&(Vn(x)||x[pn]))break e;if((j||m)&&(m=f.window===f?f:(m=f.ownerDocument)?m.defaultView||m.parentWindow:window,j?(x=r.relatedTarget||r.toElement,j=u,x=x?Vn(x):null,x!==null&&(S=dr(x),x!==S||x.tag!==5&&x.tag!==6)&&(x=null)):(j=null,x=u),j!==x)){if(w=Tc,N="onMouseLeave",y="onMouseEnter",v="mouse",(e==="pointerout"||e==="pointerover")&&(w=_c,N="onPointerLeave",y="onPointerEnter",v="pointer"),S=j==null?m:br(j),g=x==null?m:br(x),m=new w(N,v+"leave",j,r,f),m.target=S,m.relatedTarget=g,N=null,Vn(f)===u&&(w=new w(y,v+"enter",x,r,f),w.target=g,w.relatedTarget=S,N=w),S=N,j&&x)t:{for(w=j,y=x,v=0,g=w;g;g=mr(g))v++;for(g=0,N=y;N;N=mr(N))g++;for(;0<v-g;)w=mr(w),v--;for(;0<g-v;)y=mr(y),g--;for(;v--;){if(w===y||y!==null&&w===y.alternate)break t;w=mr(w),y=mr(y)}w=null}else w=null;j!==null&&Uc(p,m,j,w,!1),x!==null&&S!==null&&Uc(p,S,x,w,!0)}}e:{if(m=u?br(u):window,j=m.nodeName&&m.nodeName.toLowerCase(),j==="select"||j==="input"&&m.type==="file")var C=fh;else if(Lc(m))if(Wu)C=xh;else{C=hh;var P=mh}else(j=m.nodeName)&&j.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(C=ph);if(C&&(C=C(e,u))){Qu(p,C,r,f);break e}P&&P(e,m,u),e==="focusout"&&(P=m._wrapperState)&&P.controlled&&m.type==="number"&&xo(m,"number",m.value)}switch(P=u?br(u):window,e){case"focusin":(Lc(P)||P.contentEditable==="true")&&(vr=P,Po=u,ps=null);break;case"focusout":ps=Po=vr=null;break;case"mousedown":To=!0;break;case"contextmenu":case"mouseup":case"dragend":To=!1,Fc(p,r,f);break;case"selectionchange":if(yh)break;case"keydown":case"keyup":Fc(p,r,f)}var E;if(kl)e:{switch(e){case"compositionstart":var h="onCompositionStart";break e;case"compositionend":h="onCompositionEnd";break e;case"compositionupdate":h="onCompositionUpdate";break e}h=void 0}else gr?qu(e,r)&&(h="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(h="onCompositionStart");h&&(Uu&&r.locale!=="ko"&&(gr||h!=="onCompositionStart"?h==="onCompositionEnd"&&gr&&(E=Bu()):(_n=f,wl="value"in _n?_n.value:_n.textContent,gr=!0)),P=Ua(u,h),0<P.length&&(h=new Rc(h,e,null,r,f),p.push({event:h,listeners:P}),E?h.data=E:(E=Yu(r),E!==null&&(h.data=E)))),(E=oh?lh(e,r):ch(e,r))&&(u=Ua(u,"onBeforeInput"),0<u.length&&(f=new Rc("onBeforeInput","beforeinput",null,r,f),p.push({event:f,listeners:u}),f.data=E))}nf(p,t)})}function Rs(e,t,r){return{instance:e,listener:t,currentTarget:r}}function Ua(e,t){for(var r=t+"Capture",s=[];e!==null;){var a=e,i=a.stateNode;a.tag===5&&i!==null&&(a=i,i=Ns(e,r),i!=null&&s.unshift(Rs(e,i,a)),i=Ns(e,t),i!=null&&s.push(Rs(e,i,a))),e=e.return}return s}function mr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Uc(e,t,r,s,a){for(var i=t._reactName,o=[];r!==null&&r!==s;){var l=r,c=l.alternate,u=l.stateNode;if(c!==null&&c===s)break;l.tag===5&&u!==null&&(l=u,a?(c=Ns(r,i),c!=null&&o.unshift(Rs(r,c,l))):a||(c=Ns(r,i),c!=null&&o.push(Rs(r,c,l)))),r=r.return}o.length!==0&&e.push({event:t,listeners:o})}var Nh=/\r\n?/g,kh=/\u0000|\uFFFD/g;function qc(e){return(typeof e=="string"?e:""+e).replace(Nh,`
`).replace(kh,"")}function na(e,t,r){if(t=qc(t),qc(e)!==t&&r)throw Error(V(425))}function qa(){}var Ro=null,_o=null;function Ao(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Io=typeof setTimeout=="function"?setTimeout:void 0,Sh=typeof clearTimeout=="function"?clearTimeout:void 0,Yc=typeof Promise=="function"?Promise:void 0,Ch=typeof queueMicrotask=="function"?queueMicrotask:typeof Yc<"u"?function(e){return Yc.resolve(null).then(e).catch(Eh)}:Io;function Eh(e){setTimeout(function(){throw e})}function qi(e,t){var r=t,s=0;do{var a=r.nextSibling;if(e.removeChild(r),a&&a.nodeType===8)if(r=a.data,r==="/$"){if(s===0){e.removeChild(a),Cs(t);return}s--}else r!=="$"&&r!=="$?"&&r!=="$!"||s++;r=a}while(r);Cs(t)}function zn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Qc(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var Yr=Math.random().toString(36).slice(2),rn="__reactFiber$"+Yr,_s="__reactProps$"+Yr,pn="__reactContainer$"+Yr,Lo="__reactEvents$"+Yr,Ph="__reactListeners$"+Yr,Th="__reactHandles$"+Yr;function Vn(e){var t=e[rn];if(t)return t;for(var r=e.parentNode;r;){if(t=r[pn]||r[rn]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=Qc(e);e!==null;){if(r=e[rn])return r;e=Qc(e)}return t}e=r,r=e.parentNode}return null}function Us(e){return e=e[rn]||e[pn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function br(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(V(33))}function fi(e){return e[_s]||null}var Do=[],wr=-1;function Yn(e){return{current:e}}function Oe(e){0>wr||(e.current=Do[wr],Do[wr]=null,wr--)}function Ie(e,t){wr++,Do[wr]=e.current,e.current=t}var Un={},xt=Yn(Un),Ct=Yn(!1),sr=Un;function Dr(e,t){var r=e.type.contextTypes;if(!r)return Un;var s=e.stateNode;if(s&&s.__reactInternalMemoizedUnmaskedChildContext===t)return s.__reactInternalMemoizedMaskedChildContext;var a={},i;for(i in r)a[i]=t[i];return s&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=a),a}function Et(e){return e=e.childContextTypes,e!=null}function Ya(){Oe(Ct),Oe(xt)}function Wc(e,t,r){if(xt.current!==Un)throw Error(V(168));Ie(xt,t),Ie(Ct,r)}function sf(e,t,r){var s=e.stateNode;if(t=t.childContextTypes,typeof s.getChildContext!="function")return r;s=s.getChildContext();for(var a in s)if(!(a in t))throw Error(V(108,m0(e)||"Unknown",a));return Qe({},r,s)}function Qa(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Un,sr=xt.current,Ie(xt,e),Ie(Ct,Ct.current),!0}function Gc(e,t,r){var s=e.stateNode;if(!s)throw Error(V(169));r?(e=sf(e,t,sr),s.__reactInternalMemoizedMergedChildContext=e,Oe(Ct),Oe(xt),Ie(xt,e)):Oe(Ct),Ie(Ct,r)}var cn=null,mi=!1,Yi=!1;function af(e){cn===null?cn=[e]:cn.push(e)}function Rh(e){mi=!0,af(e)}function Qn(){if(!Yi&&cn!==null){Yi=!0;var e=0,t=Re;try{var r=cn;for(Re=1;e<r.length;e++){var s=r[e];do s=s(!0);while(s!==null)}cn=null,mi=!1}catch(a){throw cn!==null&&(cn=cn.slice(e+1)),Ru(gl,Qn),a}finally{Re=t,Yi=!1}}return null}var jr=[],Nr=0,Wa=null,Ga=0,Mt=[],Ot=0,ar=null,dn=1,un="";function Hn(e,t){jr[Nr++]=Ga,jr[Nr++]=Wa,Wa=e,Ga=t}function of(e,t,r){Mt[Ot++]=dn,Mt[Ot++]=un,Mt[Ot++]=ar,ar=e;var s=dn;e=un;var a=32-Vt(s)-1;s&=~(1<<a),r+=1;var i=32-Vt(t)+a;if(30<i){var o=a-a%5;i=(s&(1<<o)-1).toString(32),s>>=o,a-=o,dn=1<<32-Vt(t)+a|r<<a|s,un=i+e}else dn=1<<i|r<<a|s,un=e}function Cl(e){e.return!==null&&(Hn(e,1),of(e,1,0))}function El(e){for(;e===Wa;)Wa=jr[--Nr],jr[Nr]=null,Ga=jr[--Nr],jr[Nr]=null;for(;e===ar;)ar=Mt[--Ot],Mt[Ot]=null,un=Mt[--Ot],Mt[Ot]=null,dn=Mt[--Ot],Mt[Ot]=null}var At=null,_t=null,Fe=!1,Kt=null;function lf(e,t){var r=Ft(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function Hc(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,At=e,_t=zn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,At=e,_t=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=ar!==null?{id:dn,overflow:un}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=Ft(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,At=e,_t=null,!0):!1;default:return!1}}function zo(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Mo(e){if(Fe){var t=_t;if(t){var r=t;if(!Hc(e,t)){if(zo(e))throw Error(V(418));t=zn(r.nextSibling);var s=At;t&&Hc(e,t)?lf(s,r):(e.flags=e.flags&-4097|2,Fe=!1,At=e)}}else{if(zo(e))throw Error(V(418));e.flags=e.flags&-4097|2,Fe=!1,At=e}}}function Kc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;At=e}function ra(e){if(e!==At)return!1;if(!Fe)return Kc(e),Fe=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ao(e.type,e.memoizedProps)),t&&(t=_t)){if(zo(e))throw cf(),Error(V(418));for(;t;)lf(e,t),t=zn(t.nextSibling)}if(Kc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(V(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){_t=zn(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}_t=null}}else _t=At?zn(e.stateNode.nextSibling):null;return!0}function cf(){for(var e=_t;e;)e=zn(e.nextSibling)}function zr(){_t=At=null,Fe=!1}function Pl(e){Kt===null?Kt=[e]:Kt.push(e)}var _h=yn.ReactCurrentBatchConfig;function Zr(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(V(309));var s=r.stateNode}if(!s)throw Error(V(147,e));var a=s,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(o){var l=a.refs;o===null?delete l[i]:l[i]=o},t._stringRef=i,t)}if(typeof e!="string")throw Error(V(284));if(!r._owner)throw Error(V(290,e))}return e}function sa(e,t){throw e=Object.prototype.toString.call(t),Error(V(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Vc(e){var t=e._init;return t(e._payload)}function df(e){function t(y,v){if(e){var g=y.deletions;g===null?(y.deletions=[v],y.flags|=16):g.push(v)}}function r(y,v){if(!e)return null;for(;v!==null;)t(y,v),v=v.sibling;return null}function s(y,v){for(y=new Map;v!==null;)v.key!==null?y.set(v.key,v):y.set(v.index,v),v=v.sibling;return y}function a(y,v){return y=$n(y,v),y.index=0,y.sibling=null,y}function i(y,v,g){return y.index=g,e?(g=y.alternate,g!==null?(g=g.index,g<v?(y.flags|=2,v):g):(y.flags|=2,v)):(y.flags|=1048576,v)}function o(y){return e&&y.alternate===null&&(y.flags|=2),y}function l(y,v,g,N){return v===null||v.tag!==6?(v=Xi(g,y.mode,N),v.return=y,v):(v=a(v,g),v.return=y,v)}function c(y,v,g,N){var C=g.type;return C===xr?f(y,v,g.props.children,N,g.key):v!==null&&(v.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Cn&&Vc(C)===v.type)?(N=a(v,g.props),N.ref=Zr(y,v,g),N.return=y,N):(N=Ra(g.type,g.key,g.props,null,y.mode,N),N.ref=Zr(y,v,g),N.return=y,N)}function u(y,v,g,N){return v===null||v.tag!==4||v.stateNode.containerInfo!==g.containerInfo||v.stateNode.implementation!==g.implementation?(v=Ji(g,y.mode,N),v.return=y,v):(v=a(v,g.children||[]),v.return=y,v)}function f(y,v,g,N,C){return v===null||v.tag!==7?(v=nr(g,y.mode,N,C),v.return=y,v):(v=a(v,g),v.return=y,v)}function p(y,v,g){if(typeof v=="string"&&v!==""||typeof v=="number")return v=Xi(""+v,y.mode,g),v.return=y,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Gs:return g=Ra(v.type,v.key,v.props,null,y.mode,g),g.ref=Zr(y,null,v),g.return=y,g;case pr:return v=Ji(v,y.mode,g),v.return=y,v;case Cn:var N=v._init;return p(y,N(v._payload),g)}if(ls(v)||Hr(v))return v=nr(v,y.mode,g,null),v.return=y,v;sa(y,v)}return null}function m(y,v,g,N){var C=v!==null?v.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return C!==null?null:l(y,v,""+g,N);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Gs:return g.key===C?c(y,v,g,N):null;case pr:return g.key===C?u(y,v,g,N):null;case Cn:return C=g._init,m(y,v,C(g._payload),N)}if(ls(g)||Hr(g))return C!==null?null:f(y,v,g,N,null);sa(y,g)}return null}function j(y,v,g,N,C){if(typeof N=="string"&&N!==""||typeof N=="number")return y=y.get(g)||null,l(v,y,""+N,C);if(typeof N=="object"&&N!==null){switch(N.$$typeof){case Gs:return y=y.get(N.key===null?g:N.key)||null,c(v,y,N,C);case pr:return y=y.get(N.key===null?g:N.key)||null,u(v,y,N,C);case Cn:var P=N._init;return j(y,v,g,P(N._payload),C)}if(ls(N)||Hr(N))return y=y.get(g)||null,f(v,y,N,C,null);sa(v,N)}return null}function x(y,v,g,N){for(var C=null,P=null,E=v,h=v=0,b=null;E!==null&&h<g.length;h++){E.index>h?(b=E,E=null):b=E.sibling;var k=m(y,E,g[h],N);if(k===null){E===null&&(E=b);break}e&&E&&k.alternate===null&&t(y,E),v=i(k,v,h),P===null?C=k:P.sibling=k,P=k,E=b}if(h===g.length)return r(y,E),Fe&&Hn(y,h),C;if(E===null){for(;h<g.length;h++)E=p(y,g[h],N),E!==null&&(v=i(E,v,h),P===null?C=E:P.sibling=E,P=E);return Fe&&Hn(y,h),C}for(E=s(y,E);h<g.length;h++)b=j(E,y,h,g[h],N),b!==null&&(e&&b.alternate!==null&&E.delete(b.key===null?h:b.key),v=i(b,v,h),P===null?C=b:P.sibling=b,P=b);return e&&E.forEach(function(T){return t(y,T)}),Fe&&Hn(y,h),C}function w(y,v,g,N){var C=Hr(g);if(typeof C!="function")throw Error(V(150));if(g=C.call(g),g==null)throw Error(V(151));for(var P=C=null,E=v,h=v=0,b=null,k=g.next();E!==null&&!k.done;h++,k=g.next()){E.index>h?(b=E,E=null):b=E.sibling;var T=m(y,E,k.value,N);if(T===null){E===null&&(E=b);break}e&&E&&T.alternate===null&&t(y,E),v=i(T,v,h),P===null?C=T:P.sibling=T,P=T,E=b}if(k.done)return r(y,E),Fe&&Hn(y,h),C;if(E===null){for(;!k.done;h++,k=g.next())k=p(y,k.value,N),k!==null&&(v=i(k,v,h),P===null?C=k:P.sibling=k,P=k);return Fe&&Hn(y,h),C}for(E=s(y,E);!k.done;h++,k=g.next())k=j(E,y,h,k.value,N),k!==null&&(e&&k.alternate!==null&&E.delete(k.key===null?h:k.key),v=i(k,v,h),P===null?C=k:P.sibling=k,P=k);return e&&E.forEach(function(R){return t(y,R)}),Fe&&Hn(y,h),C}function S(y,v,g,N){if(typeof g=="object"&&g!==null&&g.type===xr&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Gs:e:{for(var C=g.key,P=v;P!==null;){if(P.key===C){if(C=g.type,C===xr){if(P.tag===7){r(y,P.sibling),v=a(P,g.props.children),v.return=y,y=v;break e}}else if(P.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Cn&&Vc(C)===P.type){r(y,P.sibling),v=a(P,g.props),v.ref=Zr(y,P,g),v.return=y,y=v;break e}r(y,P);break}else t(y,P);P=P.sibling}g.type===xr?(v=nr(g.props.children,y.mode,N,g.key),v.return=y,y=v):(N=Ra(g.type,g.key,g.props,null,y.mode,N),N.ref=Zr(y,v,g),N.return=y,y=N)}return o(y);case pr:e:{for(P=g.key;v!==null;){if(v.key===P)if(v.tag===4&&v.stateNode.containerInfo===g.containerInfo&&v.stateNode.implementation===g.implementation){r(y,v.sibling),v=a(v,g.children||[]),v.return=y,y=v;break e}else{r(y,v);break}else t(y,v);v=v.sibling}v=Ji(g,y.mode,N),v.return=y,y=v}return o(y);case Cn:return P=g._init,S(y,v,P(g._payload),N)}if(ls(g))return x(y,v,g,N);if(Hr(g))return w(y,v,g,N);sa(y,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,v!==null&&v.tag===6?(r(y,v.sibling),v=a(v,g),v.return=y,y=v):(r(y,v),v=Xi(g,y.mode,N),v.return=y,y=v),o(y)):r(y,v)}return S}var Mr=df(!0),uf=df(!1),Ha=Yn(null),Ka=null,kr=null,Tl=null;function Rl(){Tl=kr=Ka=null}function _l(e){var t=Ha.current;Oe(Ha),e._currentValue=t}function Oo(e,t,r){for(;e!==null;){var s=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,s!==null&&(s.childLanes|=t)):s!==null&&(s.childLanes&t)!==t&&(s.childLanes|=t),e===r)break;e=e.return}}function _r(e,t){Ka=e,Tl=kr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(St=!0),e.firstContext=null)}function Ut(e){var t=e._currentValue;if(Tl!==e)if(e={context:e,memoizedValue:t,next:null},kr===null){if(Ka===null)throw Error(V(308));kr=e,Ka.dependencies={lanes:0,firstContext:e}}else kr=kr.next=e;return t}var Xn=null;function Al(e){Xn===null?Xn=[e]:Xn.push(e)}function ff(e,t,r,s){var a=t.interleaved;return a===null?(r.next=r,Al(t)):(r.next=a.next,a.next=r),t.interleaved=r,xn(e,s)}function xn(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}var En=!1;function Il(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function mf(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function fn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Mn(e,t,r){var s=e.updateQueue;if(s===null)return null;if(s=s.shared,Se&2){var a=s.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),s.pending=t,xn(e,r)}return a=s.interleaved,a===null?(t.next=t,Al(s)):(t.next=a.next,a.next=t),s.interleaved=t,xn(e,r)}function ka(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var s=t.lanes;s&=e.pendingLanes,r|=s,t.lanes=r,vl(e,r)}}function Xc(e,t){var r=e.updateQueue,s=e.alternate;if(s!==null&&(s=s.updateQueue,r===s)){var a=null,i=null;if(r=r.firstBaseUpdate,r!==null){do{var o={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};i===null?a=i=o:i=i.next=o,r=r.next}while(r!==null);i===null?a=i=t:i=i.next=t}else a=i=t;r={baseState:s.baseState,firstBaseUpdate:a,lastBaseUpdate:i,shared:s.shared,effects:s.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function Va(e,t,r,s){var a=e.updateQueue;En=!1;var i=a.firstBaseUpdate,o=a.lastBaseUpdate,l=a.shared.pending;if(l!==null){a.shared.pending=null;var c=l,u=c.next;c.next=null,o===null?i=u:o.next=u,o=c;var f=e.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==o&&(l===null?f.firstBaseUpdate=u:l.next=u,f.lastBaseUpdate=c))}if(i!==null){var p=a.baseState;o=0,f=u=c=null,l=i;do{var m=l.lane,j=l.eventTime;if((s&m)===m){f!==null&&(f=f.next={eventTime:j,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var x=e,w=l;switch(m=t,j=r,w.tag){case 1:if(x=w.payload,typeof x=="function"){p=x.call(j,p,m);break e}p=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=w.payload,m=typeof x=="function"?x.call(j,p,m):x,m==null)break e;p=Qe({},p,m);break e;case 2:En=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,m=a.effects,m===null?a.effects=[l]:m.push(l))}else j={eventTime:j,lane:m,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(u=f=j,c=p):f=f.next=j,o|=m;if(l=l.next,l===null){if(l=a.shared.pending,l===null)break;m=l,l=m.next,m.next=null,a.lastBaseUpdate=m,a.shared.pending=null}}while(1);if(f===null&&(c=p),a.baseState=c,a.firstBaseUpdate=u,a.lastBaseUpdate=f,t=a.shared.interleaved,t!==null){a=t;do o|=a.lane,a=a.next;while(a!==t)}else i===null&&(a.shared.lanes=0);or|=o,e.lanes=o,e.memoizedState=p}}function Jc(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var s=e[t],a=s.callback;if(a!==null){if(s.callback=null,s=r,typeof a!="function")throw Error(V(191,a));a.call(s)}}}var qs={},an=Yn(qs),As=Yn(qs),Is=Yn(qs);function Jn(e){if(e===qs)throw Error(V(174));return e}function Ll(e,t){switch(Ie(Is,t),Ie(As,e),Ie(an,qs),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:vo(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=vo(t,e)}Oe(an),Ie(an,t)}function Or(){Oe(an),Oe(As),Oe(Is)}function hf(e){Jn(Is.current);var t=Jn(an.current),r=vo(t,e.type);t!==r&&(Ie(As,e),Ie(an,r))}function Dl(e){As.current===e&&(Oe(an),Oe(As))}var qe=Yn(0);function Xa(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Qi=[];function zl(){for(var e=0;e<Qi.length;e++)Qi[e]._workInProgressVersionPrimary=null;Qi.length=0}var Sa=yn.ReactCurrentDispatcher,Wi=yn.ReactCurrentBatchConfig,ir=0,Ye=null,et=null,rt=null,Ja=!1,xs=!1,Ls=0,Ah=0;function ft(){throw Error(V(321))}function Ml(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!Jt(e[r],t[r]))return!1;return!0}function Ol(e,t,r,s,a,i){if(ir=i,Ye=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Sa.current=e===null||e.memoizedState===null?zh:Mh,e=r(s,a),xs){i=0;do{if(xs=!1,Ls=0,25<=i)throw Error(V(301));i+=1,rt=et=null,t.updateQueue=null,Sa.current=Oh,e=r(s,a)}while(xs)}if(Sa.current=Za,t=et!==null&&et.next!==null,ir=0,rt=et=Ye=null,Ja=!1,t)throw Error(V(300));return e}function Fl(){var e=Ls!==0;return Ls=0,e}function tn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return rt===null?Ye.memoizedState=rt=e:rt=rt.next=e,rt}function qt(){if(et===null){var e=Ye.alternate;e=e!==null?e.memoizedState:null}else e=et.next;var t=rt===null?Ye.memoizedState:rt.next;if(t!==null)rt=t,et=e;else{if(e===null)throw Error(V(310));et=e,e={memoizedState:et.memoizedState,baseState:et.baseState,baseQueue:et.baseQueue,queue:et.queue,next:null},rt===null?Ye.memoizedState=rt=e:rt=rt.next=e}return rt}function Ds(e,t){return typeof t=="function"?t(e):t}function Gi(e){var t=qt(),r=t.queue;if(r===null)throw Error(V(311));r.lastRenderedReducer=e;var s=et,a=s.baseQueue,i=r.pending;if(i!==null){if(a!==null){var o=a.next;a.next=i.next,i.next=o}s.baseQueue=a=i,r.pending=null}if(a!==null){i=a.next,s=s.baseState;var l=o=null,c=null,u=i;do{var f=u.lane;if((ir&f)===f)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),s=u.hasEagerState?u.eagerState:e(s,u.action);else{var p={lane:f,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(l=c=p,o=s):c=c.next=p,Ye.lanes|=f,or|=f}u=u.next}while(u!==null&&u!==i);c===null?o=s:c.next=l,Jt(s,t.memoizedState)||(St=!0),t.memoizedState=s,t.baseState=o,t.baseQueue=c,r.lastRenderedState=s}if(e=r.interleaved,e!==null){a=e;do i=a.lane,Ye.lanes|=i,or|=i,a=a.next;while(a!==e)}else a===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function Hi(e){var t=qt(),r=t.queue;if(r===null)throw Error(V(311));r.lastRenderedReducer=e;var s=r.dispatch,a=r.pending,i=t.memoizedState;if(a!==null){r.pending=null;var o=a=a.next;do i=e(i,o.action),o=o.next;while(o!==a);Jt(i,t.memoizedState)||(St=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),r.lastRenderedState=i}return[i,s]}function pf(){}function xf(e,t){var r=Ye,s=qt(),a=t(),i=!Jt(s.memoizedState,a);if(i&&(s.memoizedState=a,St=!0),s=s.queue,$l(yf.bind(null,r,s,e),[e]),s.getSnapshot!==t||i||rt!==null&&rt.memoizedState.tag&1){if(r.flags|=2048,zs(9,vf.bind(null,r,s,a,t),void 0,null),st===null)throw Error(V(349));ir&30||gf(r,t,a)}return a}function gf(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=Ye.updateQueue,t===null?(t={lastEffect:null,stores:null},Ye.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function vf(e,t,r,s){t.value=r,t.getSnapshot=s,bf(t)&&wf(e)}function yf(e,t,r){return r(function(){bf(t)&&wf(e)})}function bf(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!Jt(e,r)}catch{return!0}}function wf(e){var t=xn(e,1);t!==null&&Xt(t,e,1,-1)}function Zc(e){var t=tn();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ds,lastRenderedState:e},t.queue=e,e=e.dispatch=Dh.bind(null,Ye,e),[t.memoizedState,e]}function zs(e,t,r,s){return e={tag:e,create:t,destroy:r,deps:s,next:null},t=Ye.updateQueue,t===null?(t={lastEffect:null,stores:null},Ye.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(s=r.next,r.next=e,e.next=s,t.lastEffect=e)),e}function jf(){return qt().memoizedState}function Ca(e,t,r,s){var a=tn();Ye.flags|=e,a.memoizedState=zs(1|t,r,void 0,s===void 0?null:s)}function hi(e,t,r,s){var a=qt();s=s===void 0?null:s;var i=void 0;if(et!==null){var o=et.memoizedState;if(i=o.destroy,s!==null&&Ml(s,o.deps)){a.memoizedState=zs(t,r,i,s);return}}Ye.flags|=e,a.memoizedState=zs(1|t,r,i,s)}function ed(e,t){return Ca(8390656,8,e,t)}function $l(e,t){return hi(2048,8,e,t)}function Nf(e,t){return hi(4,2,e,t)}function kf(e,t){return hi(4,4,e,t)}function Sf(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Cf(e,t,r){return r=r!=null?r.concat([e]):null,hi(4,4,Sf.bind(null,t,e),r)}function Bl(){}function Ef(e,t){var r=qt();t=t===void 0?null:t;var s=r.memoizedState;return s!==null&&t!==null&&Ml(t,s[1])?s[0]:(r.memoizedState=[e,t],e)}function Pf(e,t){var r=qt();t=t===void 0?null:t;var s=r.memoizedState;return s!==null&&t!==null&&Ml(t,s[1])?s[0]:(e=e(),r.memoizedState=[e,t],e)}function Tf(e,t,r){return ir&21?(Jt(r,t)||(r=Iu(),Ye.lanes|=r,or|=r,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,St=!0),e.memoizedState=r)}function Ih(e,t){var r=Re;Re=r!==0&&4>r?r:4,e(!0);var s=Wi.transition;Wi.transition={};try{e(!1),t()}finally{Re=r,Wi.transition=s}}function Rf(){return qt().memoizedState}function Lh(e,t,r){var s=Fn(e);if(r={lane:s,action:r,hasEagerState:!1,eagerState:null,next:null},_f(e))Af(t,r);else if(r=ff(e,t,r,s),r!==null){var a=bt();Xt(r,e,s,a),If(r,t,s)}}function Dh(e,t,r){var s=Fn(e),a={lane:s,action:r,hasEagerState:!1,eagerState:null,next:null};if(_f(e))Af(t,a);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var o=t.lastRenderedState,l=i(o,r);if(a.hasEagerState=!0,a.eagerState=l,Jt(l,o)){var c=t.interleaved;c===null?(a.next=a,Al(t)):(a.next=c.next,c.next=a),t.interleaved=a;return}}catch{}finally{}r=ff(e,t,a,s),r!==null&&(a=bt(),Xt(r,e,s,a),If(r,t,s))}}function _f(e){var t=e.alternate;return e===Ye||t!==null&&t===Ye}function Af(e,t){xs=Ja=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function If(e,t,r){if(r&4194240){var s=t.lanes;s&=e.pendingLanes,r|=s,t.lanes=r,vl(e,r)}}var Za={readContext:Ut,useCallback:ft,useContext:ft,useEffect:ft,useImperativeHandle:ft,useInsertionEffect:ft,useLayoutEffect:ft,useMemo:ft,useReducer:ft,useRef:ft,useState:ft,useDebugValue:ft,useDeferredValue:ft,useTransition:ft,useMutableSource:ft,useSyncExternalStore:ft,useId:ft,unstable_isNewReconciler:!1},zh={readContext:Ut,useCallback:function(e,t){return tn().memoizedState=[e,t===void 0?null:t],e},useContext:Ut,useEffect:ed,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,Ca(4194308,4,Sf.bind(null,t,e),r)},useLayoutEffect:function(e,t){return Ca(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ca(4,2,e,t)},useMemo:function(e,t){var r=tn();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var s=tn();return t=r!==void 0?r(t):t,s.memoizedState=s.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},s.queue=e,e=e.dispatch=Lh.bind(null,Ye,e),[s.memoizedState,e]},useRef:function(e){var t=tn();return e={current:e},t.memoizedState=e},useState:Zc,useDebugValue:Bl,useDeferredValue:function(e){return tn().memoizedState=e},useTransition:function(){var e=Zc(!1),t=e[0];return e=Ih.bind(null,e[1]),tn().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var s=Ye,a=tn();if(Fe){if(r===void 0)throw Error(V(407));r=r()}else{if(r=t(),st===null)throw Error(V(349));ir&30||gf(s,t,r)}a.memoizedState=r;var i={value:r,getSnapshot:t};return a.queue=i,ed(yf.bind(null,s,i,e),[e]),s.flags|=2048,zs(9,vf.bind(null,s,i,r,t),void 0,null),r},useId:function(){var e=tn(),t=st.identifierPrefix;if(Fe){var r=un,s=dn;r=(s&~(1<<32-Vt(s)-1)).toString(32)+r,t=":"+t+"R"+r,r=Ls++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=Ah++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Mh={readContext:Ut,useCallback:Ef,useContext:Ut,useEffect:$l,useImperativeHandle:Cf,useInsertionEffect:Nf,useLayoutEffect:kf,useMemo:Pf,useReducer:Gi,useRef:jf,useState:function(){return Gi(Ds)},useDebugValue:Bl,useDeferredValue:function(e){var t=qt();return Tf(t,et.memoizedState,e)},useTransition:function(){var e=Gi(Ds)[0],t=qt().memoizedState;return[e,t]},useMutableSource:pf,useSyncExternalStore:xf,useId:Rf,unstable_isNewReconciler:!1},Oh={readContext:Ut,useCallback:Ef,useContext:Ut,useEffect:$l,useImperativeHandle:Cf,useInsertionEffect:Nf,useLayoutEffect:kf,useMemo:Pf,useReducer:Hi,useRef:jf,useState:function(){return Hi(Ds)},useDebugValue:Bl,useDeferredValue:function(e){var t=qt();return et===null?t.memoizedState=e:Tf(t,et.memoizedState,e)},useTransition:function(){var e=Hi(Ds)[0],t=qt().memoizedState;return[e,t]},useMutableSource:pf,useSyncExternalStore:xf,useId:Rf,unstable_isNewReconciler:!1};function Gt(e,t){if(e&&e.defaultProps){t=Qe({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}function Fo(e,t,r,s){t=e.memoizedState,r=r(s,t),r=r==null?t:Qe({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var pi={isMounted:function(e){return(e=e._reactInternals)?dr(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var s=bt(),a=Fn(e),i=fn(s,a);i.payload=t,r!=null&&(i.callback=r),t=Mn(e,i,a),t!==null&&(Xt(t,e,a,s),ka(t,e,a))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var s=bt(),a=Fn(e),i=fn(s,a);i.tag=1,i.payload=t,r!=null&&(i.callback=r),t=Mn(e,i,a),t!==null&&(Xt(t,e,a,s),ka(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=bt(),s=Fn(e),a=fn(r,s);a.tag=2,t!=null&&(a.callback=t),t=Mn(e,a,s),t!==null&&(Xt(t,e,s,r),ka(t,e,s))}};function td(e,t,r,s,a,i,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(s,i,o):t.prototype&&t.prototype.isPureReactComponent?!Ps(r,s)||!Ps(a,i):!0}function Lf(e,t,r){var s=!1,a=Un,i=t.contextType;return typeof i=="object"&&i!==null?i=Ut(i):(a=Et(t)?sr:xt.current,s=t.contextTypes,i=(s=s!=null)?Dr(e,a):Un),t=new t(r,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=pi,e.stateNode=t,t._reactInternals=e,s&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=i),t}function nd(e,t,r,s){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,s),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,s),t.state!==e&&pi.enqueueReplaceState(t,t.state,null)}function $o(e,t,r,s){var a=e.stateNode;a.props=r,a.state=e.memoizedState,a.refs={},Il(e);var i=t.contextType;typeof i=="object"&&i!==null?a.context=Ut(i):(i=Et(t)?sr:xt.current,a.context=Dr(e,i)),a.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Fo(e,t,i,r),a.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(t=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),t!==a.state&&pi.enqueueReplaceState(a,a.state,null),Va(e,r,a,s),a.state=e.memoizedState),typeof a.componentDidMount=="function"&&(e.flags|=4194308)}function Fr(e,t){try{var r="",s=t;do r+=f0(s),s=s.return;while(s);var a=r}catch(i){a=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:a,digest:null}}function Ki(e,t,r){return{value:e,source:null,stack:r??null,digest:t??null}}function Bo(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var Fh=typeof WeakMap=="function"?WeakMap:Map;function Df(e,t,r){r=fn(-1,r),r.tag=3,r.payload={element:null};var s=t.value;return r.callback=function(){ti||(ti=!0,Xo=s),Bo(e,t)},r}function zf(e,t,r){r=fn(-1,r),r.tag=3;var s=e.type.getDerivedStateFromError;if(typeof s=="function"){var a=t.value;r.payload=function(){return s(a)},r.callback=function(){Bo(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(r.callback=function(){Bo(e,t),typeof s!="function"&&(On===null?On=new Set([this]):On.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),r}function rd(e,t,r){var s=e.pingCache;if(s===null){s=e.pingCache=new Fh;var a=new Set;s.set(t,a)}else a=s.get(t),a===void 0&&(a=new Set,s.set(t,a));a.has(r)||(a.add(r),e=Zh.bind(null,e,t,r),t.then(e,e))}function sd(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function ad(e,t,r,s,a){return e.mode&1?(e.flags|=65536,e.lanes=a,e):(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=fn(-1,1),t.tag=2,Mn(r,t,1))),r.lanes|=1),e)}var $h=yn.ReactCurrentOwner,St=!1;function yt(e,t,r,s){t.child=e===null?uf(t,null,r,s):Mr(t,e.child,r,s)}function id(e,t,r,s,a){r=r.render;var i=t.ref;return _r(t,a),s=Ol(e,t,r,s,i,a),r=Fl(),e!==null&&!St?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,gn(e,t,a)):(Fe&&r&&Cl(t),t.flags|=1,yt(e,t,s,a),t.child)}function od(e,t,r,s,a){if(e===null){var i=r.type;return typeof i=="function"&&!Kl(i)&&i.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=i,Mf(e,t,i,s,a)):(e=Ra(r.type,null,s,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&a)){var o=i.memoizedProps;if(r=r.compare,r=r!==null?r:Ps,r(o,s)&&e.ref===t.ref)return gn(e,t,a)}return t.flags|=1,e=$n(i,s),e.ref=t.ref,e.return=t,t.child=e}function Mf(e,t,r,s,a){if(e!==null){var i=e.memoizedProps;if(Ps(i,s)&&e.ref===t.ref)if(St=!1,t.pendingProps=s=i,(e.lanes&a)!==0)e.flags&131072&&(St=!0);else return t.lanes=e.lanes,gn(e,t,a)}return Uo(e,t,r,s,a)}function Of(e,t,r){var s=t.pendingProps,a=s.children,i=e!==null?e.memoizedState:null;if(s.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ie(Cr,Rt),Rt|=r;else{if(!(r&1073741824))return e=i!==null?i.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Ie(Cr,Rt),Rt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},s=i!==null?i.baseLanes:r,Ie(Cr,Rt),Rt|=s}else i!==null?(s=i.baseLanes|r,t.memoizedState=null):s=r,Ie(Cr,Rt),Rt|=s;return yt(e,t,a,r),t.child}function Ff(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function Uo(e,t,r,s,a){var i=Et(r)?sr:xt.current;return i=Dr(t,i),_r(t,a),r=Ol(e,t,r,s,i,a),s=Fl(),e!==null&&!St?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,gn(e,t,a)):(Fe&&s&&Cl(t),t.flags|=1,yt(e,t,r,a),t.child)}function ld(e,t,r,s,a){if(Et(r)){var i=!0;Qa(t)}else i=!1;if(_r(t,a),t.stateNode===null)Ea(e,t),Lf(t,r,s),$o(t,r,s,a),s=!0;else if(e===null){var o=t.stateNode,l=t.memoizedProps;o.props=l;var c=o.context,u=r.contextType;typeof u=="object"&&u!==null?u=Ut(u):(u=Et(r)?sr:xt.current,u=Dr(t,u));var f=r.getDerivedStateFromProps,p=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==s||c!==u)&&nd(t,o,s,u),En=!1;var m=t.memoizedState;o.state=m,Va(t,s,o,a),c=t.memoizedState,l!==s||m!==c||Ct.current||En?(typeof f=="function"&&(Fo(t,r,f,s),c=t.memoizedState),(l=En||td(t,r,l,s,m,c,u))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=s,t.memoizedState=c),o.props=s,o.state=c,o.context=u,s=l):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),s=!1)}else{o=t.stateNode,mf(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:Gt(t.type,l),o.props=u,p=t.pendingProps,m=o.context,c=r.contextType,typeof c=="object"&&c!==null?c=Ut(c):(c=Et(r)?sr:xt.current,c=Dr(t,c));var j=r.getDerivedStateFromProps;(f=typeof j=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==p||m!==c)&&nd(t,o,s,c),En=!1,m=t.memoizedState,o.state=m,Va(t,s,o,a);var x=t.memoizedState;l!==p||m!==x||Ct.current||En?(typeof j=="function"&&(Fo(t,r,j,s),x=t.memoizedState),(u=En||td(t,r,u,s,m,x,c)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(s,x,c),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(s,x,c)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=s,t.memoizedState=x),o.props=s,o.state=x,o.context=c,s=u):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),s=!1)}return qo(e,t,r,s,i,a)}function qo(e,t,r,s,a,i){Ff(e,t);var o=(t.flags&128)!==0;if(!s&&!o)return a&&Gc(t,r,!1),gn(e,t,i);s=t.stateNode,$h.current=t;var l=o&&typeof r.getDerivedStateFromError!="function"?null:s.render();return t.flags|=1,e!==null&&o?(t.child=Mr(t,e.child,null,i),t.child=Mr(t,null,l,i)):yt(e,t,l,i),t.memoizedState=s.state,a&&Gc(t,r,!0),t.child}function $f(e){var t=e.stateNode;t.pendingContext?Wc(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Wc(e,t.context,!1),Ll(e,t.containerInfo)}function cd(e,t,r,s,a){return zr(),Pl(a),t.flags|=256,yt(e,t,r,s),t.child}var Yo={dehydrated:null,treeContext:null,retryLane:0};function Qo(e){return{baseLanes:e,cachePool:null,transitions:null}}function Bf(e,t,r){var s=t.pendingProps,a=qe.current,i=!1,o=(t.flags&128)!==0,l;if((l=o)||(l=e!==null&&e.memoizedState===null?!1:(a&2)!==0),l?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(a|=1),Ie(qe,a&1),e===null)return Mo(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=s.children,e=s.fallback,i?(s=t.mode,i=t.child,o={mode:"hidden",children:o},!(s&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=vi(o,s,0,null),e=nr(e,s,r,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Qo(r),t.memoizedState=Yo,e):Ul(t,o));if(a=e.memoizedState,a!==null&&(l=a.dehydrated,l!==null))return Bh(e,t,o,s,l,a,r);if(i){i=s.fallback,o=t.mode,a=e.child,l=a.sibling;var c={mode:"hidden",children:s.children};return!(o&1)&&t.child!==a?(s=t.child,s.childLanes=0,s.pendingProps=c,t.deletions=null):(s=$n(a,c),s.subtreeFlags=a.subtreeFlags&14680064),l!==null?i=$n(l,i):(i=nr(i,o,r,null),i.flags|=2),i.return=t,s.return=t,s.sibling=i,t.child=s,s=i,i=t.child,o=e.child.memoizedState,o=o===null?Qo(r):{baseLanes:o.baseLanes|r,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=e.childLanes&~r,t.memoizedState=Yo,s}return i=e.child,e=i.sibling,s=$n(i,{mode:"visible",children:s.children}),!(t.mode&1)&&(s.lanes=r),s.return=t,s.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=s,t.memoizedState=null,s}function Ul(e,t){return t=vi({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function aa(e,t,r,s){return s!==null&&Pl(s),Mr(t,e.child,null,r),e=Ul(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Bh(e,t,r,s,a,i,o){if(r)return t.flags&256?(t.flags&=-257,s=Ki(Error(V(422))),aa(e,t,o,s)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=s.fallback,a=t.mode,s=vi({mode:"visible",children:s.children},a,0,null),i=nr(i,a,o,null),i.flags|=2,s.return=t,i.return=t,s.sibling=i,t.child=s,t.mode&1&&Mr(t,e.child,null,o),t.child.memoizedState=Qo(o),t.memoizedState=Yo,i);if(!(t.mode&1))return aa(e,t,o,null);if(a.data==="$!"){if(s=a.nextSibling&&a.nextSibling.dataset,s)var l=s.dgst;return s=l,i=Error(V(419)),s=Ki(i,s,void 0),aa(e,t,o,s)}if(l=(o&e.childLanes)!==0,St||l){if(s=st,s!==null){switch(o&-o){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=a&(s.suspendedLanes|o)?0:a,a!==0&&a!==i.retryLane&&(i.retryLane=a,xn(e,a),Xt(s,e,a,-1))}return Hl(),s=Ki(Error(V(421))),aa(e,t,o,s)}return a.data==="$?"?(t.flags|=128,t.child=e.child,t=ep.bind(null,e),a._reactRetry=t,null):(e=i.treeContext,_t=zn(a.nextSibling),At=t,Fe=!0,Kt=null,e!==null&&(Mt[Ot++]=dn,Mt[Ot++]=un,Mt[Ot++]=ar,dn=e.id,un=e.overflow,ar=t),t=Ul(t,s.children),t.flags|=4096,t)}function dd(e,t,r){e.lanes|=t;var s=e.alternate;s!==null&&(s.lanes|=t),Oo(e.return,t,r)}function Vi(e,t,r,s,a){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:s,tail:r,tailMode:a}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=s,i.tail=r,i.tailMode=a)}function Uf(e,t,r){var s=t.pendingProps,a=s.revealOrder,i=s.tail;if(yt(e,t,s.children,r),s=qe.current,s&2)s=s&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&dd(e,r,t);else if(e.tag===19)dd(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}s&=1}if(Ie(qe,s),!(t.mode&1))t.memoizedState=null;else switch(a){case"forwards":for(r=t.child,a=null;r!==null;)e=r.alternate,e!==null&&Xa(e)===null&&(a=r),r=r.sibling;r=a,r===null?(a=t.child,t.child=null):(a=r.sibling,r.sibling=null),Vi(t,!1,a,r,i);break;case"backwards":for(r=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&Xa(e)===null){t.child=a;break}e=a.sibling,a.sibling=r,r=a,a=e}Vi(t,!0,r,null,i);break;case"together":Vi(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ea(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function gn(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),or|=t.lanes,!(r&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(V(153));if(t.child!==null){for(e=t.child,r=$n(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=$n(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function Uh(e,t,r){switch(t.tag){case 3:$f(t),zr();break;case 5:hf(t);break;case 1:Et(t.type)&&Qa(t);break;case 4:Ll(t,t.stateNode.containerInfo);break;case 10:var s=t.type._context,a=t.memoizedProps.value;Ie(Ha,s._currentValue),s._currentValue=a;break;case 13:if(s=t.memoizedState,s!==null)return s.dehydrated!==null?(Ie(qe,qe.current&1),t.flags|=128,null):r&t.child.childLanes?Bf(e,t,r):(Ie(qe,qe.current&1),e=gn(e,t,r),e!==null?e.sibling:null);Ie(qe,qe.current&1);break;case 19:if(s=(r&t.childLanes)!==0,e.flags&128){if(s)return Uf(e,t,r);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),Ie(qe,qe.current),s)break;return null;case 22:case 23:return t.lanes=0,Of(e,t,r)}return gn(e,t,r)}var qf,Wo,Yf,Qf;qf=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}};Wo=function(){};Yf=function(e,t,r,s){var a=e.memoizedProps;if(a!==s){e=t.stateNode,Jn(an.current);var i=null;switch(r){case"input":a=ho(e,a),s=ho(e,s),i=[];break;case"select":a=Qe({},a,{value:void 0}),s=Qe({},s,{value:void 0}),i=[];break;case"textarea":a=go(e,a),s=go(e,s),i=[];break;default:typeof a.onClick!="function"&&typeof s.onClick=="function"&&(e.onclick=qa)}yo(r,s);var o;r=null;for(u in a)if(!s.hasOwnProperty(u)&&a.hasOwnProperty(u)&&a[u]!=null)if(u==="style"){var l=a[u];for(o in l)l.hasOwnProperty(o)&&(r||(r={}),r[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(ws.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in s){var c=s[u];if(l=a!=null?a[u]:void 0,s.hasOwnProperty(u)&&c!==l&&(c!=null||l!=null))if(u==="style")if(l){for(o in l)!l.hasOwnProperty(o)||c&&c.hasOwnProperty(o)||(r||(r={}),r[o]="");for(o in c)c.hasOwnProperty(o)&&l[o]!==c[o]&&(r||(r={}),r[o]=c[o])}else r||(i||(i=[]),i.push(u,r)),r=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,l=l?l.__html:void 0,c!=null&&l!==c&&(i=i||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(i=i||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(ws.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&ze("scroll",e),i||l===c||(i=[])):(i=i||[]).push(u,c))}r&&(i=i||[]).push("style",r);var u=i;(t.updateQueue=u)&&(t.flags|=4)}};Qf=function(e,t,r,s){r!==s&&(t.flags|=4)};function es(e,t){if(!Fe)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var s=null;r!==null;)r.alternate!==null&&(s=r),r=r.sibling;s===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:s.sibling=null}}function mt(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,s=0;if(t)for(var a=e.child;a!==null;)r|=a.lanes|a.childLanes,s|=a.subtreeFlags&14680064,s|=a.flags&14680064,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)r|=a.lanes|a.childLanes,s|=a.subtreeFlags,s|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=s,e.childLanes=r,t}function qh(e,t,r){var s=t.pendingProps;switch(El(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return mt(t),null;case 1:return Et(t.type)&&Ya(),mt(t),null;case 3:return s=t.stateNode,Or(),Oe(Ct),Oe(xt),zl(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(e===null||e.child===null)&&(ra(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Kt!==null&&(el(Kt),Kt=null))),Wo(e,t),mt(t),null;case 5:Dl(t);var a=Jn(Is.current);if(r=t.type,e!==null&&t.stateNode!=null)Yf(e,t,r,s,a),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!s){if(t.stateNode===null)throw Error(V(166));return mt(t),null}if(e=Jn(an.current),ra(t)){s=t.stateNode,r=t.type;var i=t.memoizedProps;switch(s[rn]=t,s[_s]=i,e=(t.mode&1)!==0,r){case"dialog":ze("cancel",s),ze("close",s);break;case"iframe":case"object":case"embed":ze("load",s);break;case"video":case"audio":for(a=0;a<ds.length;a++)ze(ds[a],s);break;case"source":ze("error",s);break;case"img":case"image":case"link":ze("error",s),ze("load",s);break;case"details":ze("toggle",s);break;case"input":yc(s,i),ze("invalid",s);break;case"select":s._wrapperState={wasMultiple:!!i.multiple},ze("invalid",s);break;case"textarea":wc(s,i),ze("invalid",s)}yo(r,i),a=null;for(var o in i)if(i.hasOwnProperty(o)){var l=i[o];o==="children"?typeof l=="string"?s.textContent!==l&&(i.suppressHydrationWarning!==!0&&na(s.textContent,l,e),a=["children",l]):typeof l=="number"&&s.textContent!==""+l&&(i.suppressHydrationWarning!==!0&&na(s.textContent,l,e),a=["children",""+l]):ws.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&ze("scroll",s)}switch(r){case"input":Hs(s),bc(s,i,!0);break;case"textarea":Hs(s),jc(s);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(s.onclick=qa)}s=a,t.updateQueue=s,s!==null&&(t.flags|=4)}else{o=a.nodeType===9?a:a.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=vu(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof s.is=="string"?e=o.createElement(r,{is:s.is}):(e=o.createElement(r),r==="select"&&(o=e,s.multiple?o.multiple=!0:s.size&&(o.size=s.size))):e=o.createElementNS(e,r),e[rn]=t,e[_s]=s,qf(e,t,!1,!1),t.stateNode=e;e:{switch(o=bo(r,s),r){case"dialog":ze("cancel",e),ze("close",e),a=s;break;case"iframe":case"object":case"embed":ze("load",e),a=s;break;case"video":case"audio":for(a=0;a<ds.length;a++)ze(ds[a],e);a=s;break;case"source":ze("error",e),a=s;break;case"img":case"image":case"link":ze("error",e),ze("load",e),a=s;break;case"details":ze("toggle",e),a=s;break;case"input":yc(e,s),a=ho(e,s),ze("invalid",e);break;case"option":a=s;break;case"select":e._wrapperState={wasMultiple:!!s.multiple},a=Qe({},s,{value:void 0}),ze("invalid",e);break;case"textarea":wc(e,s),a=go(e,s),ze("invalid",e);break;default:a=s}yo(r,a),l=a;for(i in l)if(l.hasOwnProperty(i)){var c=l[i];i==="style"?wu(e,c):i==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&yu(e,c)):i==="children"?typeof c=="string"?(r!=="textarea"||c!=="")&&js(e,c):typeof c=="number"&&js(e,""+c):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(ws.hasOwnProperty(i)?c!=null&&i==="onScroll"&&ze("scroll",e):c!=null&&fl(e,i,c,o))}switch(r){case"input":Hs(e),bc(e,s,!1);break;case"textarea":Hs(e),jc(e);break;case"option":s.value!=null&&e.setAttribute("value",""+Bn(s.value));break;case"select":e.multiple=!!s.multiple,i=s.value,i!=null?Er(e,!!s.multiple,i,!1):s.defaultValue!=null&&Er(e,!!s.multiple,s.defaultValue,!0);break;default:typeof a.onClick=="function"&&(e.onclick=qa)}switch(r){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break e;case"img":s=!0;break e;default:s=!1}}s&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return mt(t),null;case 6:if(e&&t.stateNode!=null)Qf(e,t,e.memoizedProps,s);else{if(typeof s!="string"&&t.stateNode===null)throw Error(V(166));if(r=Jn(Is.current),Jn(an.current),ra(t)){if(s=t.stateNode,r=t.memoizedProps,s[rn]=t,(i=s.nodeValue!==r)&&(e=At,e!==null))switch(e.tag){case 3:na(s.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&na(s.nodeValue,r,(e.mode&1)!==0)}i&&(t.flags|=4)}else s=(r.nodeType===9?r:r.ownerDocument).createTextNode(s),s[rn]=t,t.stateNode=s}return mt(t),null;case 13:if(Oe(qe),s=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Fe&&_t!==null&&t.mode&1&&!(t.flags&128))cf(),zr(),t.flags|=98560,i=!1;else if(i=ra(t),s!==null&&s.dehydrated!==null){if(e===null){if(!i)throw Error(V(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(V(317));i[rn]=t}else zr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;mt(t),i=!1}else Kt!==null&&(el(Kt),Kt=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=r,t):(s=s!==null,s!==(e!==null&&e.memoizedState!==null)&&s&&(t.child.flags|=8192,t.mode&1&&(e===null||qe.current&1?tt===0&&(tt=3):Hl())),t.updateQueue!==null&&(t.flags|=4),mt(t),null);case 4:return Or(),Wo(e,t),e===null&&Ts(t.stateNode.containerInfo),mt(t),null;case 10:return _l(t.type._context),mt(t),null;case 17:return Et(t.type)&&Ya(),mt(t),null;case 19:if(Oe(qe),i=t.memoizedState,i===null)return mt(t),null;if(s=(t.flags&128)!==0,o=i.rendering,o===null)if(s)es(i,!1);else{if(tt!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=Xa(e),o!==null){for(t.flags|=128,es(i,!1),s=o.updateQueue,s!==null&&(t.updateQueue=s,t.flags|=4),t.subtreeFlags=0,s=r,r=t.child;r!==null;)i=r,e=s,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,e=o.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return Ie(qe,qe.current&1|2),t.child}e=e.sibling}i.tail!==null&&Ke()>$r&&(t.flags|=128,s=!0,es(i,!1),t.lanes=4194304)}else{if(!s)if(e=Xa(o),e!==null){if(t.flags|=128,s=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),es(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!Fe)return mt(t),null}else 2*Ke()-i.renderingStartTime>$r&&r!==1073741824&&(t.flags|=128,s=!0,es(i,!1),t.lanes=4194304);i.isBackwards?(o.sibling=t.child,t.child=o):(r=i.last,r!==null?r.sibling=o:t.child=o,i.last=o)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=Ke(),t.sibling=null,r=qe.current,Ie(qe,s?r&1|2:r&1),t):(mt(t),null);case 22:case 23:return Gl(),s=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==s&&(t.flags|=8192),s&&t.mode&1?Rt&1073741824&&(mt(t),t.subtreeFlags&6&&(t.flags|=8192)):mt(t),null;case 24:return null;case 25:return null}throw Error(V(156,t.tag))}function Yh(e,t){switch(El(t),t.tag){case 1:return Et(t.type)&&Ya(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Or(),Oe(Ct),Oe(xt),zl(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Dl(t),null;case 13:if(Oe(qe),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(V(340));zr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Oe(qe),null;case 4:return Or(),null;case 10:return _l(t.type._context),null;case 22:case 23:return Gl(),null;case 24:return null;default:return null}}var ia=!1,pt=!1,Qh=typeof WeakSet=="function"?WeakSet:Set,ie=null;function Sr(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(s){We(e,t,s)}else r.current=null}function Go(e,t,r){try{r()}catch(s){We(e,t,s)}}var ud=!1;function Wh(e,t){if(Ro=$a,e=Ku(),Sl(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var s=r.getSelection&&r.getSelection();if(s&&s.rangeCount!==0){r=s.anchorNode;var a=s.anchorOffset,i=s.focusNode;s=s.focusOffset;try{r.nodeType,i.nodeType}catch{r=null;break e}var o=0,l=-1,c=-1,u=0,f=0,p=e,m=null;t:for(;;){for(var j;p!==r||a!==0&&p.nodeType!==3||(l=o+a),p!==i||s!==0&&p.nodeType!==3||(c=o+s),p.nodeType===3&&(o+=p.nodeValue.length),(j=p.firstChild)!==null;)m=p,p=j;for(;;){if(p===e)break t;if(m===r&&++u===a&&(l=o),m===i&&++f===s&&(c=o),(j=p.nextSibling)!==null)break;p=m,m=p.parentNode}p=j}r=l===-1||c===-1?null:{start:l,end:c}}else r=null}r=r||{start:0,end:0}}else r=null;for(_o={focusedElem:e,selectionRange:r},$a=!1,ie=t;ie!==null;)if(t=ie,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,ie=e;else for(;ie!==null;){t=ie;try{var x=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var w=x.memoizedProps,S=x.memoizedState,y=t.stateNode,v=y.getSnapshotBeforeUpdate(t.elementType===t.type?w:Gt(t.type,w),S);y.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var g=t.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(V(163))}}catch(N){We(t,t.return,N)}if(e=t.sibling,e!==null){e.return=t.return,ie=e;break}ie=t.return}return x=ud,ud=!1,x}function gs(e,t,r){var s=t.updateQueue;if(s=s!==null?s.lastEffect:null,s!==null){var a=s=s.next;do{if((a.tag&e)===e){var i=a.destroy;a.destroy=void 0,i!==void 0&&Go(t,r,i)}a=a.next}while(a!==s)}}function xi(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var s=r.create;r.destroy=s()}r=r.next}while(r!==t)}}function Ho(e){var t=e.ref;if(t!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof t=="function"?t(e):t.current=e}}function Wf(e){var t=e.alternate;t!==null&&(e.alternate=null,Wf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[rn],delete t[_s],delete t[Lo],delete t[Ph],delete t[Th])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Gf(e){return e.tag===5||e.tag===3||e.tag===4}function fd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Gf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ko(e,t,r){var s=e.tag;if(s===5||s===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=qa));else if(s!==4&&(e=e.child,e!==null))for(Ko(e,t,r),e=e.sibling;e!==null;)Ko(e,t,r),e=e.sibling}function Vo(e,t,r){var s=e.tag;if(s===5||s===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(s!==4&&(e=e.child,e!==null))for(Vo(e,t,r),e=e.sibling;e!==null;)Vo(e,t,r),e=e.sibling}var ot=null,Ht=!1;function wn(e,t,r){for(r=r.child;r!==null;)Hf(e,t,r),r=r.sibling}function Hf(e,t,r){if(sn&&typeof sn.onCommitFiberUnmount=="function")try{sn.onCommitFiberUnmount(li,r)}catch{}switch(r.tag){case 5:pt||Sr(r,t);case 6:var s=ot,a=Ht;ot=null,wn(e,t,r),ot=s,Ht=a,ot!==null&&(Ht?(e=ot,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):ot.removeChild(r.stateNode));break;case 18:ot!==null&&(Ht?(e=ot,r=r.stateNode,e.nodeType===8?qi(e.parentNode,r):e.nodeType===1&&qi(e,r),Cs(e)):qi(ot,r.stateNode));break;case 4:s=ot,a=Ht,ot=r.stateNode.containerInfo,Ht=!0,wn(e,t,r),ot=s,Ht=a;break;case 0:case 11:case 14:case 15:if(!pt&&(s=r.updateQueue,s!==null&&(s=s.lastEffect,s!==null))){a=s=s.next;do{var i=a,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&Go(r,t,o),a=a.next}while(a!==s)}wn(e,t,r);break;case 1:if(!pt&&(Sr(r,t),s=r.stateNode,typeof s.componentWillUnmount=="function"))try{s.props=r.memoizedProps,s.state=r.memoizedState,s.componentWillUnmount()}catch(l){We(r,t,l)}wn(e,t,r);break;case 21:wn(e,t,r);break;case 22:r.mode&1?(pt=(s=pt)||r.memoizedState!==null,wn(e,t,r),pt=s):wn(e,t,r);break;default:wn(e,t,r)}}function md(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new Qh),t.forEach(function(s){var a=tp.bind(null,e,s);r.has(s)||(r.add(s),s.then(a,a))})}}function Wt(e,t){var r=t.deletions;if(r!==null)for(var s=0;s<r.length;s++){var a=r[s];try{var i=e,o=t,l=o;e:for(;l!==null;){switch(l.tag){case 5:ot=l.stateNode,Ht=!1;break e;case 3:ot=l.stateNode.containerInfo,Ht=!0;break e;case 4:ot=l.stateNode.containerInfo,Ht=!0;break e}l=l.return}if(ot===null)throw Error(V(160));Hf(i,o,a),ot=null,Ht=!1;var c=a.alternate;c!==null&&(c.return=null),a.return=null}catch(u){We(a,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Kf(t,e),t=t.sibling}function Kf(e,t){var r=e.alternate,s=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Wt(t,e),en(e),s&4){try{gs(3,e,e.return),xi(3,e)}catch(w){We(e,e.return,w)}try{gs(5,e,e.return)}catch(w){We(e,e.return,w)}}break;case 1:Wt(t,e),en(e),s&512&&r!==null&&Sr(r,r.return);break;case 5:if(Wt(t,e),en(e),s&512&&r!==null&&Sr(r,r.return),e.flags&32){var a=e.stateNode;try{js(a,"")}catch(w){We(e,e.return,w)}}if(s&4&&(a=e.stateNode,a!=null)){var i=e.memoizedProps,o=r!==null?r.memoizedProps:i,l=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{l==="input"&&i.type==="radio"&&i.name!=null&&xu(a,i),bo(l,o);var u=bo(l,i);for(o=0;o<c.length;o+=2){var f=c[o],p=c[o+1];f==="style"?wu(a,p):f==="dangerouslySetInnerHTML"?yu(a,p):f==="children"?js(a,p):fl(a,f,p,u)}switch(l){case"input":po(a,i);break;case"textarea":gu(a,i);break;case"select":var m=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!i.multiple;var j=i.value;j!=null?Er(a,!!i.multiple,j,!1):m!==!!i.multiple&&(i.defaultValue!=null?Er(a,!!i.multiple,i.defaultValue,!0):Er(a,!!i.multiple,i.multiple?[]:"",!1))}a[_s]=i}catch(w){We(e,e.return,w)}}break;case 6:if(Wt(t,e),en(e),s&4){if(e.stateNode===null)throw Error(V(162));a=e.stateNode,i=e.memoizedProps;try{a.nodeValue=i}catch(w){We(e,e.return,w)}}break;case 3:if(Wt(t,e),en(e),s&4&&r!==null&&r.memoizedState.isDehydrated)try{Cs(t.containerInfo)}catch(w){We(e,e.return,w)}break;case 4:Wt(t,e),en(e);break;case 13:Wt(t,e),en(e),a=e.child,a.flags&8192&&(i=a.memoizedState!==null,a.stateNode.isHidden=i,!i||a.alternate!==null&&a.alternate.memoizedState!==null||(Ql=Ke())),s&4&&md(e);break;case 22:if(f=r!==null&&r.memoizedState!==null,e.mode&1?(pt=(u=pt)||f,Wt(t,e),pt=u):Wt(t,e),en(e),s&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!f&&e.mode&1)for(ie=e,f=e.child;f!==null;){for(p=ie=f;ie!==null;){switch(m=ie,j=m.child,m.tag){case 0:case 11:case 14:case 15:gs(4,m,m.return);break;case 1:Sr(m,m.return);var x=m.stateNode;if(typeof x.componentWillUnmount=="function"){s=m,r=m.return;try{t=s,x.props=t.memoizedProps,x.state=t.memoizedState,x.componentWillUnmount()}catch(w){We(s,r,w)}}break;case 5:Sr(m,m.return);break;case 22:if(m.memoizedState!==null){pd(p);continue}}j!==null?(j.return=m,ie=j):pd(p)}f=f.sibling}e:for(f=null,p=e;;){if(p.tag===5){if(f===null){f=p;try{a=p.stateNode,u?(i=a.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(l=p.stateNode,c=p.memoizedProps.style,o=c!=null&&c.hasOwnProperty("display")?c.display:null,l.style.display=bu("display",o))}catch(w){We(e,e.return,w)}}}else if(p.tag===6){if(f===null)try{p.stateNode.nodeValue=u?"":p.memoizedProps}catch(w){We(e,e.return,w)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;f===p&&(f=null),p=p.return}f===p&&(f=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Wt(t,e),en(e),s&4&&md(e);break;case 21:break;default:Wt(t,e),en(e)}}function en(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if(Gf(r)){var s=r;break e}r=r.return}throw Error(V(160))}switch(s.tag){case 5:var a=s.stateNode;s.flags&32&&(js(a,""),s.flags&=-33);var i=fd(e);Vo(e,i,a);break;case 3:case 4:var o=s.stateNode.containerInfo,l=fd(e);Ko(e,l,o);break;default:throw Error(V(161))}}catch(c){We(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Gh(e,t,r){ie=e,Vf(e)}function Vf(e,t,r){for(var s=(e.mode&1)!==0;ie!==null;){var a=ie,i=a.child;if(a.tag===22&&s){var o=a.memoizedState!==null||ia;if(!o){var l=a.alternate,c=l!==null&&l.memoizedState!==null||pt;l=ia;var u=pt;if(ia=o,(pt=c)&&!u)for(ie=a;ie!==null;)o=ie,c=o.child,o.tag===22&&o.memoizedState!==null?xd(a):c!==null?(c.return=o,ie=c):xd(a);for(;i!==null;)ie=i,Vf(i),i=i.sibling;ie=a,ia=l,pt=u}hd(e)}else a.subtreeFlags&8772&&i!==null?(i.return=a,ie=i):hd(e)}}function hd(e){for(;ie!==null;){var t=ie;if(t.flags&8772){var r=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:pt||xi(5,t);break;case 1:var s=t.stateNode;if(t.flags&4&&!pt)if(r===null)s.componentDidMount();else{var a=t.elementType===t.type?r.memoizedProps:Gt(t.type,r.memoizedProps);s.componentDidUpdate(a,r.memoizedState,s.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Jc(t,i,s);break;case 3:var o=t.updateQueue;if(o!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}Jc(t,o,r)}break;case 5:var l=t.stateNode;if(r===null&&t.flags&4){r=l;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&r.focus();break;case"img":c.src&&(r.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var f=u.memoizedState;if(f!==null){var p=f.dehydrated;p!==null&&Cs(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(V(163))}pt||t.flags&512&&Ho(t)}catch(m){We(t,t.return,m)}}if(t===e){ie=null;break}if(r=t.sibling,r!==null){r.return=t.return,ie=r;break}ie=t.return}}function pd(e){for(;ie!==null;){var t=ie;if(t===e){ie=null;break}var r=t.sibling;if(r!==null){r.return=t.return,ie=r;break}ie=t.return}}function xd(e){for(;ie!==null;){var t=ie;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{xi(4,t)}catch(c){We(t,r,c)}break;case 1:var s=t.stateNode;if(typeof s.componentDidMount=="function"){var a=t.return;try{s.componentDidMount()}catch(c){We(t,a,c)}}var i=t.return;try{Ho(t)}catch(c){We(t,i,c)}break;case 5:var o=t.return;try{Ho(t)}catch(c){We(t,o,c)}}}catch(c){We(t,t.return,c)}if(t===e){ie=null;break}var l=t.sibling;if(l!==null){l.return=t.return,ie=l;break}ie=t.return}}var Hh=Math.ceil,ei=yn.ReactCurrentDispatcher,ql=yn.ReactCurrentOwner,Bt=yn.ReactCurrentBatchConfig,Se=0,st=null,Xe=null,lt=0,Rt=0,Cr=Yn(0),tt=0,Ms=null,or=0,gi=0,Yl=0,vs=null,kt=null,Ql=0,$r=1/0,ln=null,ti=!1,Xo=null,On=null,oa=!1,An=null,ni=0,ys=0,Jo=null,Pa=-1,Ta=0;function bt(){return Se&6?Ke():Pa!==-1?Pa:Pa=Ke()}function Fn(e){return e.mode&1?Se&2&&lt!==0?lt&-lt:_h.transition!==null?(Ta===0&&(Ta=Iu()),Ta):(e=Re,e!==0||(e=window.event,e=e===void 0?16:$u(e.type)),e):1}function Xt(e,t,r,s){if(50<ys)throw ys=0,Jo=null,Error(V(185));$s(e,r,s),(!(Se&2)||e!==st)&&(e===st&&(!(Se&2)&&(gi|=r),tt===4&&Rn(e,lt)),Pt(e,s),r===1&&Se===0&&!(t.mode&1)&&($r=Ke()+500,mi&&Qn()))}function Pt(e,t){var r=e.callbackNode;_0(e,t);var s=Fa(e,e===st?lt:0);if(s===0)r!==null&&Sc(r),e.callbackNode=null,e.callbackPriority=0;else if(t=s&-s,e.callbackPriority!==t){if(r!=null&&Sc(r),t===1)e.tag===0?Rh(gd.bind(null,e)):af(gd.bind(null,e)),Ch(function(){!(Se&6)&&Qn()}),r=null;else{switch(Lu(s)){case 1:r=gl;break;case 4:r=_u;break;case 16:r=Oa;break;case 536870912:r=Au;break;default:r=Oa}r=sm(r,Xf.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function Xf(e,t){if(Pa=-1,Ta=0,Se&6)throw Error(V(327));var r=e.callbackNode;if(Ar()&&e.callbackNode!==r)return null;var s=Fa(e,e===st?lt:0);if(s===0)return null;if(s&30||s&e.expiredLanes||t)t=ri(e,s);else{t=s;var a=Se;Se|=2;var i=Zf();(st!==e||lt!==t)&&(ln=null,$r=Ke()+500,tr(e,t));do try{Xh();break}catch(l){Jf(e,l)}while(1);Rl(),ei.current=i,Se=a,Xe!==null?t=0:(st=null,lt=0,t=tt)}if(t!==0){if(t===2&&(a=So(e),a!==0&&(s=a,t=Zo(e,a))),t===1)throw r=Ms,tr(e,0),Rn(e,s),Pt(e,Ke()),r;if(t===6)Rn(e,s);else{if(a=e.current.alternate,!(s&30)&&!Kh(a)&&(t=ri(e,s),t===2&&(i=So(e),i!==0&&(s=i,t=Zo(e,i))),t===1))throw r=Ms,tr(e,0),Rn(e,s),Pt(e,Ke()),r;switch(e.finishedWork=a,e.finishedLanes=s,t){case 0:case 1:throw Error(V(345));case 2:Kn(e,kt,ln);break;case 3:if(Rn(e,s),(s&130023424)===s&&(t=Ql+500-Ke(),10<t)){if(Fa(e,0)!==0)break;if(a=e.suspendedLanes,(a&s)!==s){bt(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=Io(Kn.bind(null,e,kt,ln),t);break}Kn(e,kt,ln);break;case 4:if(Rn(e,s),(s&4194240)===s)break;for(t=e.eventTimes,a=-1;0<s;){var o=31-Vt(s);i=1<<o,o=t[o],o>a&&(a=o),s&=~i}if(s=a,s=Ke()-s,s=(120>s?120:480>s?480:1080>s?1080:1920>s?1920:3e3>s?3e3:4320>s?4320:1960*Hh(s/1960))-s,10<s){e.timeoutHandle=Io(Kn.bind(null,e,kt,ln),s);break}Kn(e,kt,ln);break;case 5:Kn(e,kt,ln);break;default:throw Error(V(329))}}}return Pt(e,Ke()),e.callbackNode===r?Xf.bind(null,e):null}function Zo(e,t){var r=vs;return e.current.memoizedState.isDehydrated&&(tr(e,t).flags|=256),e=ri(e,t),e!==2&&(t=kt,kt=r,t!==null&&el(t)),e}function el(e){kt===null?kt=e:kt.push.apply(kt,e)}function Kh(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var s=0;s<r.length;s++){var a=r[s],i=a.getSnapshot;a=a.value;try{if(!Jt(i(),a))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Rn(e,t){for(t&=~Yl,t&=~gi,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-Vt(t),s=1<<r;e[r]=-1,t&=~s}}function gd(e){if(Se&6)throw Error(V(327));Ar();var t=Fa(e,0);if(!(t&1))return Pt(e,Ke()),null;var r=ri(e,t);if(e.tag!==0&&r===2){var s=So(e);s!==0&&(t=s,r=Zo(e,s))}if(r===1)throw r=Ms,tr(e,0),Rn(e,t),Pt(e,Ke()),r;if(r===6)throw Error(V(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Kn(e,kt,ln),Pt(e,Ke()),null}function Wl(e,t){var r=Se;Se|=1;try{return e(t)}finally{Se=r,Se===0&&($r=Ke()+500,mi&&Qn())}}function lr(e){An!==null&&An.tag===0&&!(Se&6)&&Ar();var t=Se;Se|=1;var r=Bt.transition,s=Re;try{if(Bt.transition=null,Re=1,e)return e()}finally{Re=s,Bt.transition=r,Se=t,!(Se&6)&&Qn()}}function Gl(){Rt=Cr.current,Oe(Cr)}function tr(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,Sh(r)),Xe!==null)for(r=Xe.return;r!==null;){var s=r;switch(El(s),s.tag){case 1:s=s.type.childContextTypes,s!=null&&Ya();break;case 3:Or(),Oe(Ct),Oe(xt),zl();break;case 5:Dl(s);break;case 4:Or();break;case 13:Oe(qe);break;case 19:Oe(qe);break;case 10:_l(s.type._context);break;case 22:case 23:Gl()}r=r.return}if(st=e,Xe=e=$n(e.current,null),lt=Rt=t,tt=0,Ms=null,Yl=gi=or=0,kt=vs=null,Xn!==null){for(t=0;t<Xn.length;t++)if(r=Xn[t],s=r.interleaved,s!==null){r.interleaved=null;var a=s.next,i=r.pending;if(i!==null){var o=i.next;i.next=a,s.next=o}r.pending=s}Xn=null}return e}function Jf(e,t){do{var r=Xe;try{if(Rl(),Sa.current=Za,Ja){for(var s=Ye.memoizedState;s!==null;){var a=s.queue;a!==null&&(a.pending=null),s=s.next}Ja=!1}if(ir=0,rt=et=Ye=null,xs=!1,Ls=0,ql.current=null,r===null||r.return===null){tt=1,Ms=t,Xe=null;break}e:{var i=e,o=r.return,l=r,c=t;if(t=lt,l.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,f=l,p=f.tag;if(!(f.mode&1)&&(p===0||p===11||p===15)){var m=f.alternate;m?(f.updateQueue=m.updateQueue,f.memoizedState=m.memoizedState,f.lanes=m.lanes):(f.updateQueue=null,f.memoizedState=null)}var j=sd(o);if(j!==null){j.flags&=-257,ad(j,o,l,i,t),j.mode&1&&rd(i,u,t),t=j,c=u;var x=t.updateQueue;if(x===null){var w=new Set;w.add(c),t.updateQueue=w}else x.add(c);break e}else{if(!(t&1)){rd(i,u,t),Hl();break e}c=Error(V(426))}}else if(Fe&&l.mode&1){var S=sd(o);if(S!==null){!(S.flags&65536)&&(S.flags|=256),ad(S,o,l,i,t),Pl(Fr(c,l));break e}}i=c=Fr(c,l),tt!==4&&(tt=2),vs===null?vs=[i]:vs.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var y=Df(i,c,t);Xc(i,y);break e;case 1:l=c;var v=i.type,g=i.stateNode;if(!(i.flags&128)&&(typeof v.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(On===null||!On.has(g)))){i.flags|=65536,t&=-t,i.lanes|=t;var N=zf(i,l,t);Xc(i,N);break e}}i=i.return}while(i!==null)}tm(r)}catch(C){t=C,Xe===r&&r!==null&&(Xe=r=r.return);continue}break}while(1)}function Zf(){var e=ei.current;return ei.current=Za,e===null?Za:e}function Hl(){(tt===0||tt===3||tt===2)&&(tt=4),st===null||!(or&268435455)&&!(gi&268435455)||Rn(st,lt)}function ri(e,t){var r=Se;Se|=2;var s=Zf();(st!==e||lt!==t)&&(ln=null,tr(e,t));do try{Vh();break}catch(a){Jf(e,a)}while(1);if(Rl(),Se=r,ei.current=s,Xe!==null)throw Error(V(261));return st=null,lt=0,tt}function Vh(){for(;Xe!==null;)em(Xe)}function Xh(){for(;Xe!==null&&!j0();)em(Xe)}function em(e){var t=rm(e.alternate,e,Rt);e.memoizedProps=e.pendingProps,t===null?tm(e):Xe=t,ql.current=null}function tm(e){var t=e;do{var r=t.alternate;if(e=t.return,t.flags&32768){if(r=Yh(r,t),r!==null){r.flags&=32767,Xe=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{tt=6,Xe=null;return}}else if(r=qh(r,t,Rt),r!==null){Xe=r;return}if(t=t.sibling,t!==null){Xe=t;return}Xe=t=e}while(t!==null);tt===0&&(tt=5)}function Kn(e,t,r){var s=Re,a=Bt.transition;try{Bt.transition=null,Re=1,Jh(e,t,r,s)}finally{Bt.transition=a,Re=s}return null}function Jh(e,t,r,s){do Ar();while(An!==null);if(Se&6)throw Error(V(327));r=e.finishedWork;var a=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(V(177));e.callbackNode=null,e.callbackPriority=0;var i=r.lanes|r.childLanes;if(A0(e,i),e===st&&(Xe=st=null,lt=0),!(r.subtreeFlags&2064)&&!(r.flags&2064)||oa||(oa=!0,sm(Oa,function(){return Ar(),null})),i=(r.flags&15990)!==0,r.subtreeFlags&15990||i){i=Bt.transition,Bt.transition=null;var o=Re;Re=1;var l=Se;Se|=4,ql.current=null,Wh(e,r),Kf(r,e),vh(_o),$a=!!Ro,_o=Ro=null,e.current=r,Gh(r),N0(),Se=l,Re=o,Bt.transition=i}else e.current=r;if(oa&&(oa=!1,An=e,ni=a),i=e.pendingLanes,i===0&&(On=null),C0(r.stateNode),Pt(e,Ke()),t!==null)for(s=e.onRecoverableError,r=0;r<t.length;r++)a=t[r],s(a.value,{componentStack:a.stack,digest:a.digest});if(ti)throw ti=!1,e=Xo,Xo=null,e;return ni&1&&e.tag!==0&&Ar(),i=e.pendingLanes,i&1?e===Jo?ys++:(ys=0,Jo=e):ys=0,Qn(),null}function Ar(){if(An!==null){var e=Lu(ni),t=Bt.transition,r=Re;try{if(Bt.transition=null,Re=16>e?16:e,An===null)var s=!1;else{if(e=An,An=null,ni=0,Se&6)throw Error(V(331));var a=Se;for(Se|=4,ie=e.current;ie!==null;){var i=ie,o=i.child;if(ie.flags&16){var l=i.deletions;if(l!==null){for(var c=0;c<l.length;c++){var u=l[c];for(ie=u;ie!==null;){var f=ie;switch(f.tag){case 0:case 11:case 15:gs(8,f,i)}var p=f.child;if(p!==null)p.return=f,ie=p;else for(;ie!==null;){f=ie;var m=f.sibling,j=f.return;if(Wf(f),f===u){ie=null;break}if(m!==null){m.return=j,ie=m;break}ie=j}}}var x=i.alternate;if(x!==null){var w=x.child;if(w!==null){x.child=null;do{var S=w.sibling;w.sibling=null,w=S}while(w!==null)}}ie=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,ie=o;else e:for(;ie!==null;){if(i=ie,i.flags&2048)switch(i.tag){case 0:case 11:case 15:gs(9,i,i.return)}var y=i.sibling;if(y!==null){y.return=i.return,ie=y;break e}ie=i.return}}var v=e.current;for(ie=v;ie!==null;){o=ie;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,ie=g;else e:for(o=v;ie!==null;){if(l=ie,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:xi(9,l)}}catch(C){We(l,l.return,C)}if(l===o){ie=null;break e}var N=l.sibling;if(N!==null){N.return=l.return,ie=N;break e}ie=l.return}}if(Se=a,Qn(),sn&&typeof sn.onPostCommitFiberRoot=="function")try{sn.onPostCommitFiberRoot(li,e)}catch{}s=!0}return s}finally{Re=r,Bt.transition=t}}return!1}function vd(e,t,r){t=Fr(r,t),t=Df(e,t,1),e=Mn(e,t,1),t=bt(),e!==null&&($s(e,1,t),Pt(e,t))}function We(e,t,r){if(e.tag===3)vd(e,e,r);else for(;t!==null;){if(t.tag===3){vd(t,e,r);break}else if(t.tag===1){var s=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(On===null||!On.has(s))){e=Fr(r,e),e=zf(t,e,1),t=Mn(t,e,1),e=bt(),t!==null&&($s(t,1,e),Pt(t,e));break}}t=t.return}}function Zh(e,t,r){var s=e.pingCache;s!==null&&s.delete(t),t=bt(),e.pingedLanes|=e.suspendedLanes&r,st===e&&(lt&r)===r&&(tt===4||tt===3&&(lt&130023424)===lt&&500>Ke()-Ql?tr(e,0):Yl|=r),Pt(e,t)}function nm(e,t){t===0&&(e.mode&1?(t=Xs,Xs<<=1,!(Xs&130023424)&&(Xs=4194304)):t=1);var r=bt();e=xn(e,t),e!==null&&($s(e,t,r),Pt(e,r))}function ep(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),nm(e,r)}function tp(e,t){var r=0;switch(e.tag){case 13:var s=e.stateNode,a=e.memoizedState;a!==null&&(r=a.retryLane);break;case 19:s=e.stateNode;break;default:throw Error(V(314))}s!==null&&s.delete(t),nm(e,r)}var rm;rm=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ct.current)St=!0;else{if(!(e.lanes&r)&&!(t.flags&128))return St=!1,Uh(e,t,r);St=!!(e.flags&131072)}else St=!1,Fe&&t.flags&1048576&&of(t,Ga,t.index);switch(t.lanes=0,t.tag){case 2:var s=t.type;Ea(e,t),e=t.pendingProps;var a=Dr(t,xt.current);_r(t,r),a=Ol(null,t,s,e,a,r);var i=Fl();return t.flags|=1,typeof a=="object"&&a!==null&&typeof a.render=="function"&&a.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Et(s)?(i=!0,Qa(t)):i=!1,t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,Il(t),a.updater=pi,t.stateNode=a,a._reactInternals=t,$o(t,s,e,r),t=qo(null,t,s,!0,i,r)):(t.tag=0,Fe&&i&&Cl(t),yt(null,t,a,r),t=t.child),t;case 16:s=t.elementType;e:{switch(Ea(e,t),e=t.pendingProps,a=s._init,s=a(s._payload),t.type=s,a=t.tag=rp(s),e=Gt(s,e),a){case 0:t=Uo(null,t,s,e,r);break e;case 1:t=ld(null,t,s,e,r);break e;case 11:t=id(null,t,s,e,r);break e;case 14:t=od(null,t,s,Gt(s.type,e),r);break e}throw Error(V(306,s,""))}return t;case 0:return s=t.type,a=t.pendingProps,a=t.elementType===s?a:Gt(s,a),Uo(e,t,s,a,r);case 1:return s=t.type,a=t.pendingProps,a=t.elementType===s?a:Gt(s,a),ld(e,t,s,a,r);case 3:e:{if($f(t),e===null)throw Error(V(387));s=t.pendingProps,i=t.memoizedState,a=i.element,mf(e,t),Va(t,s,null,r);var o=t.memoizedState;if(s=o.element,i.isDehydrated)if(i={element:s,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){a=Fr(Error(V(423)),t),t=cd(e,t,s,r,a);break e}else if(s!==a){a=Fr(Error(V(424)),t),t=cd(e,t,s,r,a);break e}else for(_t=zn(t.stateNode.containerInfo.firstChild),At=t,Fe=!0,Kt=null,r=uf(t,null,s,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(zr(),s===a){t=gn(e,t,r);break e}yt(e,t,s,r)}t=t.child}return t;case 5:return hf(t),e===null&&Mo(t),s=t.type,a=t.pendingProps,i=e!==null?e.memoizedProps:null,o=a.children,Ao(s,a)?o=null:i!==null&&Ao(s,i)&&(t.flags|=32),Ff(e,t),yt(e,t,o,r),t.child;case 6:return e===null&&Mo(t),null;case 13:return Bf(e,t,r);case 4:return Ll(t,t.stateNode.containerInfo),s=t.pendingProps,e===null?t.child=Mr(t,null,s,r):yt(e,t,s,r),t.child;case 11:return s=t.type,a=t.pendingProps,a=t.elementType===s?a:Gt(s,a),id(e,t,s,a,r);case 7:return yt(e,t,t.pendingProps,r),t.child;case 8:return yt(e,t,t.pendingProps.children,r),t.child;case 12:return yt(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(s=t.type._context,a=t.pendingProps,i=t.memoizedProps,o=a.value,Ie(Ha,s._currentValue),s._currentValue=o,i!==null)if(Jt(i.value,o)){if(i.children===a.children&&!Ct.current){t=gn(e,t,r);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var l=i.dependencies;if(l!==null){o=i.child;for(var c=l.firstContext;c!==null;){if(c.context===s){if(i.tag===1){c=fn(-1,r&-r),c.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var f=u.pending;f===null?c.next=c:(c.next=f.next,f.next=c),u.pending=c}}i.lanes|=r,c=i.alternate,c!==null&&(c.lanes|=r),Oo(i.return,r,t),l.lanes|=r;break}c=c.next}}else if(i.tag===10)o=i.type===t.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(V(341));o.lanes|=r,l=o.alternate,l!==null&&(l.lanes|=r),Oo(o,r,t),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===t){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}yt(e,t,a.children,r),t=t.child}return t;case 9:return a=t.type,s=t.pendingProps.children,_r(t,r),a=Ut(a),s=s(a),t.flags|=1,yt(e,t,s,r),t.child;case 14:return s=t.type,a=Gt(s,t.pendingProps),a=Gt(s.type,a),od(e,t,s,a,r);case 15:return Mf(e,t,t.type,t.pendingProps,r);case 17:return s=t.type,a=t.pendingProps,a=t.elementType===s?a:Gt(s,a),Ea(e,t),t.tag=1,Et(s)?(e=!0,Qa(t)):e=!1,_r(t,r),Lf(t,s,a),$o(t,s,a,r),qo(null,t,s,!0,e,r);case 19:return Uf(e,t,r);case 22:return Of(e,t,r)}throw Error(V(156,t.tag))};function sm(e,t){return Ru(e,t)}function np(e,t,r,s){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ft(e,t,r,s){return new np(e,t,r,s)}function Kl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function rp(e){if(typeof e=="function")return Kl(e)?1:0;if(e!=null){if(e=e.$$typeof,e===hl)return 11;if(e===pl)return 14}return 2}function $n(e,t){var r=e.alternate;return r===null?(r=Ft(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function Ra(e,t,r,s,a,i){var o=2;if(s=e,typeof e=="function")Kl(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case xr:return nr(r.children,a,i,t);case ml:o=8,a|=8;break;case co:return e=Ft(12,r,t,a|2),e.elementType=co,e.lanes=i,e;case uo:return e=Ft(13,r,t,a),e.elementType=uo,e.lanes=i,e;case fo:return e=Ft(19,r,t,a),e.elementType=fo,e.lanes=i,e;case mu:return vi(r,a,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case uu:o=10;break e;case fu:o=9;break e;case hl:o=11;break e;case pl:o=14;break e;case Cn:o=16,s=null;break e}throw Error(V(130,e==null?e:typeof e,""))}return t=Ft(o,r,t,a),t.elementType=e,t.type=s,t.lanes=i,t}function nr(e,t,r,s){return e=Ft(7,e,s,t),e.lanes=r,e}function vi(e,t,r,s){return e=Ft(22,e,s,t),e.elementType=mu,e.lanes=r,e.stateNode={isHidden:!1},e}function Xi(e,t,r){return e=Ft(6,e,null,t),e.lanes=r,e}function Ji(e,t,r){return t=Ft(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function sp(e,t,r,s,a){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ai(0),this.expirationTimes=Ai(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ai(0),this.identifierPrefix=s,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function Vl(e,t,r,s,a,i,o,l,c){return e=new sp(e,t,r,l,c),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Ft(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:s,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},Il(i),e}function ap(e,t,r){var s=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:pr,key:s==null?null:""+s,children:e,containerInfo:t,implementation:r}}function am(e){if(!e)return Un;e=e._reactInternals;e:{if(dr(e)!==e||e.tag!==1)throw Error(V(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Et(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(V(171))}if(e.tag===1){var r=e.type;if(Et(r))return sf(e,r,t)}return t}function im(e,t,r,s,a,i,o,l,c){return e=Vl(r,s,!0,e,a,i,o,l,c),e.context=am(null),r=e.current,s=bt(),a=Fn(r),i=fn(s,a),i.callback=t??null,Mn(r,i,a),e.current.lanes=a,$s(e,a,s),Pt(e,s),e}function yi(e,t,r,s){var a=t.current,i=bt(),o=Fn(a);return r=am(r),t.context===null?t.context=r:t.pendingContext=r,t=fn(i,o),t.payload={element:e},s=s===void 0?null:s,s!==null&&(t.callback=s),e=Mn(a,t,o),e!==null&&(Xt(e,a,o,i),ka(e,a,o)),o}function si(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function yd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function Xl(e,t){yd(e,t),(e=e.alternate)&&yd(e,t)}function ip(){return null}var om=typeof reportError=="function"?reportError:function(e){console.error(e)};function Jl(e){this._internalRoot=e}bi.prototype.render=Jl.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(V(409));yi(e,t,null,null)};bi.prototype.unmount=Jl.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;lr(function(){yi(null,e,null,null)}),t[pn]=null}};function bi(e){this._internalRoot=e}bi.prototype.unstable_scheduleHydration=function(e){if(e){var t=Mu();e={blockedOn:null,target:e,priority:t};for(var r=0;r<Tn.length&&t!==0&&t<Tn[r].priority;r++);Tn.splice(r,0,e),r===0&&Fu(e)}};function Zl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function wi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function bd(){}function op(e,t,r,s,a){if(a){if(typeof s=="function"){var i=s;s=function(){var u=si(o);i.call(u)}}var o=im(t,s,e,0,null,!1,!1,"",bd);return e._reactRootContainer=o,e[pn]=o.current,Ts(e.nodeType===8?e.parentNode:e),lr(),o}for(;a=e.lastChild;)e.removeChild(a);if(typeof s=="function"){var l=s;s=function(){var u=si(c);l.call(u)}}var c=Vl(e,0,!1,null,null,!1,!1,"",bd);return e._reactRootContainer=c,e[pn]=c.current,Ts(e.nodeType===8?e.parentNode:e),lr(function(){yi(t,c,r,s)}),c}function ji(e,t,r,s,a){var i=r._reactRootContainer;if(i){var o=i;if(typeof a=="function"){var l=a;a=function(){var c=si(o);l.call(c)}}yi(t,o,e,a)}else o=op(r,t,e,a,s);return si(o)}Du=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=cs(t.pendingLanes);r!==0&&(vl(t,r|1),Pt(t,Ke()),!(Se&6)&&($r=Ke()+500,Qn()))}break;case 13:lr(function(){var s=xn(e,1);if(s!==null){var a=bt();Xt(s,e,1,a)}}),Xl(e,1)}};yl=function(e){if(e.tag===13){var t=xn(e,134217728);if(t!==null){var r=bt();Xt(t,e,134217728,r)}Xl(e,134217728)}};zu=function(e){if(e.tag===13){var t=Fn(e),r=xn(e,t);if(r!==null){var s=bt();Xt(r,e,t,s)}Xl(e,t)}};Mu=function(){return Re};Ou=function(e,t){var r=Re;try{return Re=e,t()}finally{Re=r}};jo=function(e,t,r){switch(t){case"input":if(po(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var s=r[t];if(s!==e&&s.form===e.form){var a=fi(s);if(!a)throw Error(V(90));pu(s),po(s,a)}}}break;case"textarea":gu(e,r);break;case"select":t=r.value,t!=null&&Er(e,!!r.multiple,t,!1)}};ku=Wl;Su=lr;var lp={usingClientEntryPoint:!1,Events:[Us,br,fi,ju,Nu,Wl]},ts={findFiberByHostInstance:Vn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},cp={bundleType:ts.bundleType,version:ts.version,rendererPackageName:ts.rendererPackageName,rendererConfig:ts.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:yn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Pu(e),e===null?null:e.stateNode},findFiberByHostInstance:ts.findFiberByHostInstance||ip,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var la=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!la.isDisabled&&la.supportsFiber)try{li=la.inject(cp),sn=la}catch{}}Lt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=lp;Lt.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Zl(t))throw Error(V(200));return ap(e,t,null,r)};Lt.createRoot=function(e,t){if(!Zl(e))throw Error(V(299));var r=!1,s="",a=om;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),t=Vl(e,1,!1,null,null,r,!1,s,a),e[pn]=t.current,Ts(e.nodeType===8?e.parentNode:e),new Jl(t)};Lt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(V(188)):(e=Object.keys(e).join(","),Error(V(268,e)));return e=Pu(t),e=e===null?null:e.stateNode,e};Lt.flushSync=function(e){return lr(e)};Lt.hydrate=function(e,t,r){if(!wi(t))throw Error(V(200));return ji(null,e,t,!0,r)};Lt.hydrateRoot=function(e,t,r){if(!Zl(e))throw Error(V(405));var s=r!=null&&r.hydratedSources||null,a=!1,i="",o=om;if(r!=null&&(r.unstable_strictMode===!0&&(a=!0),r.identifierPrefix!==void 0&&(i=r.identifierPrefix),r.onRecoverableError!==void 0&&(o=r.onRecoverableError)),t=im(t,null,e,1,r??null,a,!1,i,o),e[pn]=t.current,Ts(e),s)for(e=0;e<s.length;e++)r=s[e],a=r._getVersion,a=a(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,a]:t.mutableSourceEagerHydrationData.push(r,a);return new bi(t)};Lt.render=function(e,t,r){if(!wi(t))throw Error(V(200));return ji(null,e,t,!1,r)};Lt.unmountComponentAtNode=function(e){if(!wi(e))throw Error(V(40));return e._reactRootContainer?(lr(function(){ji(null,null,e,!1,function(){e._reactRootContainer=null,e[pn]=null})}),!0):!1};Lt.unstable_batchedUpdates=Wl;Lt.unstable_renderSubtreeIntoContainer=function(e,t,r,s){if(!wi(r))throw Error(V(200));if(e==null||e._reactInternals===void 0)throw Error(V(38));return ji(e,t,r,!1,s)};Lt.version="18.3.1-next-f1338f8080-20240426";function lm(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(lm)}catch(e){console.error(e)}}lm(),ou.exports=Lt;var dp=ou.exports,wd=dp;oo.createRoot=wd.createRoot,oo.hydrateRoot=wd.hydrateRoot;const up="modulepreload",fp=function(e){return"/"+e},jd={},ec=function(t,r,s){if(!r||r.length===0)return t();const a=document.getElementsByTagName("link");return Promise.all(r.map(i=>{if(i=fp(i),i in jd)return;jd[i]=!0;const o=i.endsWith(".css"),l=o?'[rel="stylesheet"]':"";if(!!s)for(let f=a.length-1;f>=0;f--){const p=a[f];if(p.href===i&&(!o||p.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${l}`))return;const u=document.createElement("link");if(u.rel=o?"stylesheet":up,o||(u.as="script",u.crossOrigin=""),u.href=i,document.head.appendChild(u),o)return new Promise((f,p)=>{u.addEventListener("load",f),u.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>t()).catch(i=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=i,window.dispatchEvent(o),!o.defaultPrevented)throw i})};var Nd="popstate";function mp(e={}){function t(s,a){let{pathname:i,search:o,hash:l}=s.location;return tl("",{pathname:i,search:o,hash:l},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}function r(s,a){return typeof a=="string"?a:Os(a)}return pp(t,r,null,e)}function $e(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Yt(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function hp(){return Math.random().toString(36).substring(2,10)}function kd(e,t){return{usr:e.state,key:e.key,idx:t}}function tl(e,t,r=null,s){return{pathname:typeof e=="string"?e:e.pathname,search:"",hash:"",...typeof t=="string"?Qr(t):t,state:r,key:t&&t.key||s||hp()}}function Os({pathname:e="/",search:t="",hash:r=""}){return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Qr(e){let t={};if(e){let r=e.indexOf("#");r>=0&&(t.hash=e.substring(r),e=e.substring(0,r));let s=e.indexOf("?");s>=0&&(t.search=e.substring(s),e=e.substring(0,s)),e&&(t.pathname=e)}return t}function pp(e,t,r,s={}){let{window:a=document.defaultView,v5Compat:i=!1}=s,o=a.history,l="POP",c=null,u=f();u==null&&(u=0,o.replaceState({...o.state,idx:u},""));function f(){return(o.state||{idx:null}).idx}function p(){l="POP";let S=f(),y=S==null?null:S-u;u=S,c&&c({action:l,location:w.location,delta:y})}function m(S,y){l="PUSH";let v=tl(w.location,S,y);r&&r(v,S),u=f()+1;let g=kd(v,u),N=w.createHref(v);try{o.pushState(g,"",N)}catch(C){if(C instanceof DOMException&&C.name==="DataCloneError")throw C;a.location.assign(N)}i&&c&&c({action:l,location:w.location,delta:1})}function j(S,y){l="REPLACE";let v=tl(w.location,S,y);r&&r(v,S),u=f();let g=kd(v,u),N=w.createHref(v);o.replaceState(g,"",N),i&&c&&c({action:l,location:w.location,delta:0})}function x(S){return xp(S)}let w={get action(){return l},get location(){return e(a,o)},listen(S){if(c)throw new Error("A history only accepts one active listener");return a.addEventListener(Nd,p),c=S,()=>{a.removeEventListener(Nd,p),c=null}},createHref(S){return t(a,S)},createURL:x,encodeLocation(S){let y=x(S);return{pathname:y.pathname,search:y.search,hash:y.hash}},push:m,replace:j,go(S){return o.go(S)}};return w}function xp(e,t=!1){let r="http://localhost";typeof window<"u"&&(r=window.location.origin!=="null"?window.location.origin:window.location.href),$e(r,"No window.location.(origin|href) available to create URL");let s=typeof e=="string"?e:Os(e);return s=s.replace(/ $/,"%20"),!t&&s.startsWith("//")&&(s=r+s),new URL(s,r)}function cm(e,t,r="/"){return gp(e,t,r,!1)}function gp(e,t,r,s){let a=typeof t=="string"?Qr(t):t,i=vn(a.pathname||"/",r);if(i==null)return null;let o=dm(e);vp(o);let l=null;for(let c=0;l==null&&c<o.length;++c){let u=Tp(i);l=Ep(o[c],u,s)}return l}function dm(e,t=[],r=[],s=""){let a=(i,o,l)=>{let c={relativePath:l===void 0?i.path||"":l,caseSensitive:i.caseSensitive===!0,childrenIndex:o,route:i};c.relativePath.startsWith("/")&&($e(c.relativePath.startsWith(s),`Absolute route path "${c.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),c.relativePath=c.relativePath.slice(s.length));let u=mn([s,c.relativePath]),f=r.concat(c);i.children&&i.children.length>0&&($e(i.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${u}".`),dm(i.children,t,f,u)),!(i.path==null&&!i.index)&&t.push({path:u,score:Sp(u,i.index),routesMeta:f})};return e.forEach((i,o)=>{var l;if(i.path===""||!((l=i.path)!=null&&l.includes("?")))a(i,o);else for(let c of um(i.path))a(i,o,c)}),t}function um(e){let t=e.split("/");if(t.length===0)return[];let[r,...s]=t,a=r.endsWith("?"),i=r.replace(/\?$/,"");if(s.length===0)return a?[i,""]:[i];let o=um(s.join("/")),l=[];return l.push(...o.map(c=>c===""?i:[i,c].join("/"))),a&&l.push(...o),l.map(c=>e.startsWith("/")&&c===""?"/":c)}function vp(e){e.sort((t,r)=>t.score!==r.score?r.score-t.score:Cp(t.routesMeta.map(s=>s.childrenIndex),r.routesMeta.map(s=>s.childrenIndex)))}var yp=/^:[\w-]+$/,bp=3,wp=2,jp=1,Np=10,kp=-2,Sd=e=>e==="*";function Sp(e,t){let r=e.split("/"),s=r.length;return r.some(Sd)&&(s+=kp),t&&(s+=wp),r.filter(a=>!Sd(a)).reduce((a,i)=>a+(yp.test(i)?bp:i===""?jp:Np),s)}function Cp(e,t){return e.length===t.length&&e.slice(0,-1).every((s,a)=>s===t[a])?e[e.length-1]-t[t.length-1]:0}function Ep(e,t,r=!1){let{routesMeta:s}=e,a={},i="/",o=[];for(let l=0;l<s.length;++l){let c=s[l],u=l===s.length-1,f=i==="/"?t:t.slice(i.length)||"/",p=ai({path:c.relativePath,caseSensitive:c.caseSensitive,end:u},f),m=c.route;if(!p&&u&&r&&!s[s.length-1].route.index&&(p=ai({path:c.relativePath,caseSensitive:c.caseSensitive,end:!1},f)),!p)return null;Object.assign(a,p.params),o.push({params:a,pathname:mn([i,p.pathname]),pathnameBase:Ip(mn([i,p.pathnameBase])),route:m}),p.pathnameBase!=="/"&&(i=mn([i,p.pathnameBase]))}return o}function ai(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[r,s]=Pp(e.path,e.caseSensitive,e.end),a=t.match(r);if(!a)return null;let i=a[0],o=i.replace(/(.)\/+$/,"$1"),l=a.slice(1);return{params:s.reduce((u,{paramName:f,isOptional:p},m)=>{if(f==="*"){let x=l[m]||"";o=i.slice(0,i.length-x.length).replace(/(.)\/+$/,"$1")}const j=l[m];return p&&!j?u[f]=void 0:u[f]=(j||"").replace(/%2F/g,"/"),u},{}),pathname:i,pathnameBase:o,pattern:e}}function Pp(e,t=!1,r=!0){Yt(e==="*"||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let s=[],a="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,l,c)=>(s.push({paramName:l,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(s.push({paramName:"*"}),a+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?a+="\\/*$":e!==""&&e!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,t?void 0:"i"),s]}function Tp(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Yt(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function vn(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let r=t.endsWith("/")?t.length-1:t.length,s=e.charAt(r);return s&&s!=="/"?null:e.slice(r)||"/"}function Rp(e,t="/"){let{pathname:r,search:s="",hash:a=""}=typeof e=="string"?Qr(e):e;return{pathname:r?r.startsWith("/")?r:_p(r,t):t,search:Lp(s),hash:Dp(a)}}function _p(e,t){let r=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(a=>{a===".."?r.length>1&&r.pop():a!=="."&&r.push(a)}),r.length>1?r.join("/"):"/"}function Zi(e,t,r,s){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${r}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Ap(e){return e.filter((t,r)=>r===0||t.route.path&&t.route.path.length>0)}function tc(e){let t=Ap(e);return t.map((r,s)=>s===t.length-1?r.pathname:r.pathnameBase)}function nc(e,t,r,s=!1){let a;typeof e=="string"?a=Qr(e):(a={...e},$e(!a.pathname||!a.pathname.includes("?"),Zi("?","pathname","search",a)),$e(!a.pathname||!a.pathname.includes("#"),Zi("#","pathname","hash",a)),$e(!a.search||!a.search.includes("#"),Zi("#","search","hash",a)));let i=e===""||a.pathname==="",o=i?"/":a.pathname,l;if(o==null)l=r;else{let p=t.length-1;if(!s&&o.startsWith("..")){let m=o.split("/");for(;m[0]==="..";)m.shift(),p-=1;a.pathname=m.join("/")}l=p>=0?t[p]:"/"}let c=Rp(a,l),u=o&&o!=="/"&&o.endsWith("/"),f=(i||o===".")&&r.endsWith("/");return!c.pathname.endsWith("/")&&(u||f)&&(c.pathname+="/"),c}var mn=e=>e.join("/").replace(/\/\/+/g,"/"),Ip=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Lp=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Dp=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function zp(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}var fm=["POST","PUT","PATCH","DELETE"];new Set(fm);var Mp=["GET",...fm];new Set(Mp);var Wr=d.createContext(null);Wr.displayName="DataRouter";var Ni=d.createContext(null);Ni.displayName="DataRouterState";d.createContext(!1);var mm=d.createContext({isTransitioning:!1});mm.displayName="ViewTransition";var Op=d.createContext(new Map);Op.displayName="Fetchers";var Fp=d.createContext(null);Fp.displayName="Await";var Zt=d.createContext(null);Zt.displayName="Navigation";var Ys=d.createContext(null);Ys.displayName="Location";var Qt=d.createContext({outlet:null,matches:[],isDataRoute:!1});Qt.displayName="Route";var rc=d.createContext(null);rc.displayName="RouteError";function $p(e,{relative:t}={}){$e(Gr(),"useHref() may be used only in the context of a <Router> component.");let{basename:r,navigator:s}=d.useContext(Zt),{hash:a,pathname:i,search:o}=Qs(e,{relative:t}),l=i;return r!=="/"&&(l=i==="/"?r:mn([r,i])),s.createHref({pathname:l,search:o,hash:a})}function Gr(){return d.useContext(Ys)!=null}function Je(){return $e(Gr(),"useLocation() may be used only in the context of a <Router> component."),d.useContext(Ys).location}var hm="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function pm(e){d.useContext(Zt).static||d.useLayoutEffect(e)}function _e(){let{isDataRoute:e}=d.useContext(Qt);return e?nx():Bp()}function Bp(){$e(Gr(),"useNavigate() may be used only in the context of a <Router> component.");let e=d.useContext(Wr),{basename:t,navigator:r}=d.useContext(Zt),{matches:s}=d.useContext(Qt),{pathname:a}=Je(),i=JSON.stringify(tc(s)),o=d.useRef(!1);return pm(()=>{o.current=!0}),d.useCallback((c,u={})=>{if(Yt(o.current,hm),!o.current)return;if(typeof c=="number"){r.go(c);return}let f=nc(c,JSON.parse(i),a,u.relative==="path");e==null&&t!=="/"&&(f.pathname=f.pathname==="/"?t:mn([t,f.pathname])),(u.replace?r.replace:r.push)(f,u.state,u)},[t,r,i,a,e])}var Up=d.createContext(null);function qp(e){let t=d.useContext(Qt).outlet;return t&&d.createElement(Up.Provider,{value:e},t)}function Yp(){let{matches:e}=d.useContext(Qt),t=e[e.length-1];return t?t.params:{}}function Qs(e,{relative:t}={}){let{matches:r}=d.useContext(Qt),{pathname:s}=Je(),a=JSON.stringify(tc(r));return d.useMemo(()=>nc(e,JSON.parse(a),s,t==="path"),[e,a,s,t])}function Qp(e,t){return xm(e,t)}function xm(e,t,r,s){var y;$e(Gr(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:a}=d.useContext(Zt),{matches:i}=d.useContext(Qt),o=i[i.length-1],l=o?o.params:{},c=o?o.pathname:"/",u=o?o.pathnameBase:"/",f=o&&o.route;{let v=f&&f.path||"";gm(c,!f||v.endsWith("*")||v.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${c}" (under <Route path="${v}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${v}"> to <Route path="${v==="/"?"*":`${v}/*`}">.`)}let p=Je(),m;if(t){let v=typeof t=="string"?Qr(t):t;$e(u==="/"||((y=v.pathname)==null?void 0:y.startsWith(u)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${u}" but pathname "${v.pathname}" was given in the \`location\` prop.`),m=v}else m=p;let j=m.pathname||"/",x=j;if(u!=="/"){let v=u.replace(/^\//,"").split("/");x="/"+j.replace(/^\//,"").split("/").slice(v.length).join("/")}let w=cm(e,{pathname:x});Yt(f||w!=null,`No routes matched location "${m.pathname}${m.search}${m.hash}" `),Yt(w==null||w[w.length-1].route.element!==void 0||w[w.length-1].route.Component!==void 0||w[w.length-1].route.lazy!==void 0,`Matched leaf route at location "${m.pathname}${m.search}${m.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let S=Vp(w&&w.map(v=>Object.assign({},v,{params:Object.assign({},l,v.params),pathname:mn([u,a.encodeLocation?a.encodeLocation(v.pathname).pathname:v.pathname]),pathnameBase:v.pathnameBase==="/"?u:mn([u,a.encodeLocation?a.encodeLocation(v.pathnameBase).pathname:v.pathnameBase])})),i,r,s);return t&&S?d.createElement(Ys.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...m},navigationType:"POP"}},S):S}function Wp(){let e=tx(),t=zp(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,s="rgba(200,200,200, 0.5)",a={padding:"0.5rem",backgroundColor:s},i={padding:"2px 4px",backgroundColor:s},o=null;return console.error("Error handled by React Router default ErrorBoundary:",e),o=d.createElement(d.Fragment,null,d.createElement("p",null,"💿 Hey developer 👋"),d.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",d.createElement("code",{style:i},"ErrorBoundary")," or"," ",d.createElement("code",{style:i},"errorElement")," prop on your route.")),d.createElement(d.Fragment,null,d.createElement("h2",null,"Unexpected Application Error!"),d.createElement("h3",{style:{fontStyle:"italic"}},t),r?d.createElement("pre",{style:a},r):null,o)}var Gp=d.createElement(Wp,null),Hp=class extends d.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return this.state.error!==void 0?d.createElement(Qt.Provider,{value:this.props.routeContext},d.createElement(rc.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function Kp({routeContext:e,match:t,children:r}){let s=d.useContext(Wr);return s&&s.static&&s.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=t.route.id),d.createElement(Qt.Provider,{value:e},r)}function Vp(e,t=[],r=null,s=null){if(e==null){if(!r)return null;if(r.errors)e=r.matches;else if(t.length===0&&!r.initialized&&r.matches.length>0)e=r.matches;else return null}let a=e,i=r==null?void 0:r.errors;if(i!=null){let c=a.findIndex(u=>u.route.id&&(i==null?void 0:i[u.route.id])!==void 0);$e(c>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(i).join(",")}`),a=a.slice(0,Math.min(a.length,c+1))}let o=!1,l=-1;if(r)for(let c=0;c<a.length;c++){let u=a[c];if((u.route.HydrateFallback||u.route.hydrateFallbackElement)&&(l=c),u.route.id){let{loaderData:f,errors:p}=r,m=u.route.loader&&!f.hasOwnProperty(u.route.id)&&(!p||p[u.route.id]===void 0);if(u.route.lazy||m){o=!0,l>=0?a=a.slice(0,l+1):a=[a[0]];break}}}return a.reduceRight((c,u,f)=>{let p,m=!1,j=null,x=null;r&&(p=i&&u.route.id?i[u.route.id]:void 0,j=u.route.errorElement||Gp,o&&(l<0&&f===0?(gm("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),m=!0,x=null):l===f&&(m=!0,x=u.route.hydrateFallbackElement||null)));let w=t.concat(a.slice(0,f+1)),S=()=>{let y;return p?y=j:m?y=x:u.route.Component?y=d.createElement(u.route.Component,null):u.route.element?y=u.route.element:y=c,d.createElement(Kp,{match:u,routeContext:{outlet:c,matches:w,isDataRoute:r!=null},children:y})};return r&&(u.route.ErrorBoundary||u.route.errorElement||f===0)?d.createElement(Hp,{location:r.location,revalidation:r.revalidation,component:j,error:p,children:S(),routeContext:{outlet:null,matches:w,isDataRoute:!0}}):S()},null)}function sc(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Xp(e){let t=d.useContext(Wr);return $e(t,sc(e)),t}function Jp(e){let t=d.useContext(Ni);return $e(t,sc(e)),t}function Zp(e){let t=d.useContext(Qt);return $e(t,sc(e)),t}function ac(e){let t=Zp(e),r=t.matches[t.matches.length-1];return $e(r.route.id,`${e} can only be used on routes that contain a unique "id"`),r.route.id}function ex(){return ac("useRouteId")}function tx(){var s;let e=d.useContext(rc),t=Jp("useRouteError"),r=ac("useRouteError");return e!==void 0?e:(s=t.errors)==null?void 0:s[r]}function nx(){let{router:e}=Xp("useNavigate"),t=ac("useNavigate"),r=d.useRef(!1);return pm(()=>{r.current=!0}),d.useCallback(async(a,i={})=>{Yt(r.current,hm),r.current&&(typeof a=="number"?e.navigate(a):await e.navigate(a,{fromRouteId:t,...i}))},[e,t])}var Cd={};function gm(e,t,r){!t&&!Cd[e]&&(Cd[e]=!0,Yt(!1,r))}d.memo(rx);function rx({routes:e,future:t,state:r}){return xm(e,void 0,r,t)}function sx({to:e,replace:t,state:r,relative:s}){$e(Gr(),"<Navigate> may be used only in the context of a <Router> component.");let{static:a}=d.useContext(Zt);Yt(!a,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:i}=d.useContext(Qt),{pathname:o}=Je(),l=_e(),c=nc(e,tc(i),o,s==="path"),u=JSON.stringify(c);return d.useEffect(()=>{l(JSON.parse(u),{replace:t,state:r,relative:s})},[l,u,s,t,r]),null}function ax(e){return qp(e.context)}function Ae(e){$e(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function ix({basename:e="/",children:t=null,location:r,navigationType:s="POP",navigator:a,static:i=!1}){$e(!Gr(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let o=e.replace(/^\/*/,"/"),l=d.useMemo(()=>({basename:o,navigator:a,static:i,future:{}}),[o,a,i]);typeof r=="string"&&(r=Qr(r));let{pathname:c="/",search:u="",hash:f="",state:p=null,key:m="default"}=r,j=d.useMemo(()=>{let x=vn(c,o);return x==null?null:{location:{pathname:x,search:u,hash:f,state:p,key:m},navigationType:s}},[o,c,u,f,p,m,s]);return Yt(j!=null,`<Router basename="${o}"> is not able to match the URL "${c}${u}${f}" because it does not start with the basename, so the <Router> won't render anything.`),j==null?null:d.createElement(Zt.Provider,{value:l},d.createElement(Ys.Provider,{children:t,value:j}))}function ox({children:e,location:t}){return Qp(nl(e),t)}function nl(e,t=[]){let r=[];return d.Children.forEach(e,(s,a)=>{if(!d.isValidElement(s))return;let i=[...t,a];if(s.type===d.Fragment){r.push.apply(r,nl(s.props.children,i));return}$e(s.type===Ae,`[${typeof s.type=="string"?s.type:s.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),$e(!s.props.index||!s.props.children,"An index route cannot have child routes.");let o={id:s.props.id||i.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,loader:s.props.loader,action:s.props.action,hydrateFallbackElement:s.props.hydrateFallbackElement,HydrateFallback:s.props.HydrateFallback,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.hasErrorBoundary===!0||s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(o.children=nl(s.props.children,i)),r.push(o)}),r}var _a="get",Aa="application/x-www-form-urlencoded";function ki(e){return e!=null&&typeof e.tagName=="string"}function lx(e){return ki(e)&&e.tagName.toLowerCase()==="button"}function cx(e){return ki(e)&&e.tagName.toLowerCase()==="form"}function dx(e){return ki(e)&&e.tagName.toLowerCase()==="input"}function ux(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function fx(e,t){return e.button===0&&(!t||t==="_self")&&!ux(e)}function rl(e=""){return new URLSearchParams(typeof e=="string"||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce((t,r)=>{let s=e[r];return t.concat(Array.isArray(s)?s.map(a=>[r,a]):[[r,s]])},[]))}function mx(e,t){let r=rl(e);return t&&t.forEach((s,a)=>{r.has(a)||t.getAll(a).forEach(i=>{r.append(a,i)})}),r}var ca=null;function hx(){if(ca===null)try{new FormData(document.createElement("form"),0),ca=!1}catch{ca=!0}return ca}var px=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function eo(e){return e!=null&&!px.has(e)?(Yt(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Aa}"`),null):e}function xx(e,t){let r,s,a,i,o;if(cx(e)){let l=e.getAttribute("action");s=l?vn(l,t):null,r=e.getAttribute("method")||_a,a=eo(e.getAttribute("enctype"))||Aa,i=new FormData(e)}else if(lx(e)||dx(e)&&(e.type==="submit"||e.type==="image")){let l=e.form;if(l==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let c=e.getAttribute("formaction")||l.getAttribute("action");if(s=c?vn(c,t):null,r=e.getAttribute("formmethod")||l.getAttribute("method")||_a,a=eo(e.getAttribute("formenctype"))||eo(l.getAttribute("enctype"))||Aa,i=new FormData(l,e),!hx()){let{name:u,type:f,value:p}=e;if(f==="image"){let m=u?`${u}.`:"";i.append(`${m}x`,"0"),i.append(`${m}y`,"0")}else u&&i.append(u,p)}}else{if(ki(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');r=_a,s=null,a=Aa,o=e}return i&&a==="text/plain"&&(o=i,i=void 0),{action:s,method:r.toLowerCase(),encType:a,formData:i,body:o}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function ic(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function gx(e,t,r){let s=typeof e=="string"?new URL(e,typeof window>"u"?"server://singlefetch/":window.location.origin):e;return s.pathname==="/"?s.pathname=`_root.${r}`:t&&vn(s.pathname,t)==="/"?s.pathname=`${t.replace(/\/$/,"")}/_root.${r}`:s.pathname=`${s.pathname.replace(/\/$/,"")}.${r}`,s}async function vx(e,t){if(e.id in t)return t[e.id];try{let r=await ec(()=>import(e.module),[]);return t[e.id]=r,r}catch(r){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(r),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function yx(e){return e!=null&&typeof e.page=="string"}function bx(e){return e==null?!1:e.href==null?e.rel==="preload"&&typeof e.imageSrcSet=="string"&&typeof e.imageSizes=="string":typeof e.rel=="string"&&typeof e.href=="string"}async function wx(e,t,r){let s=await Promise.all(e.map(async a=>{let i=t.routes[a.route.id];if(i){let o=await vx(i,r);return o.links?o.links():[]}return[]}));return Sx(s.flat(1).filter(bx).filter(a=>a.rel==="stylesheet"||a.rel==="preload").map(a=>a.rel==="stylesheet"?{...a,rel:"prefetch",as:"style"}:{...a,rel:"prefetch"}))}function Ed(e,t,r,s,a,i){let o=(c,u)=>r[u]?c.route.id!==r[u].route.id:!0,l=(c,u)=>{var f;return r[u].pathname!==c.pathname||((f=r[u].route.path)==null?void 0:f.endsWith("*"))&&r[u].params["*"]!==c.params["*"]};return i==="assets"?t.filter((c,u)=>o(c,u)||l(c,u)):i==="data"?t.filter((c,u)=>{var p;let f=s.routes[c.route.id];if(!f||!f.hasLoader)return!1;if(o(c,u)||l(c,u))return!0;if(c.route.shouldRevalidate){let m=c.route.shouldRevalidate({currentUrl:new URL(a.pathname+a.search+a.hash,window.origin),currentParams:((p=r[0])==null?void 0:p.params)||{},nextUrl:new URL(e,window.origin),nextParams:c.params,defaultShouldRevalidate:!0});if(typeof m=="boolean")return m}return!0}):[]}function jx(e,t,{includeHydrateFallback:r}={}){return Nx(e.map(s=>{let a=t.routes[s.route.id];if(!a)return[];let i=[a.module];return a.clientActionModule&&(i=i.concat(a.clientActionModule)),a.clientLoaderModule&&(i=i.concat(a.clientLoaderModule)),r&&a.hydrateFallbackModule&&(i=i.concat(a.hydrateFallbackModule)),a.imports&&(i=i.concat(a.imports)),i}).flat(1))}function Nx(e){return[...new Set(e)]}function kx(e){let t={},r=Object.keys(e).sort();for(let s of r)t[s]=e[s];return t}function Sx(e,t){let r=new Set,s=new Set(t);return e.reduce((a,i)=>{if(t&&!yx(i)&&i.as==="script"&&i.href&&s.has(i.href))return a;let l=JSON.stringify(kx(i));return r.has(l)||(r.add(l),a.push({key:l,link:i})),a},[])}function vm(){let e=d.useContext(Wr);return ic(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}function Cx(){let e=d.useContext(Ni);return ic(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}var oc=d.createContext(void 0);oc.displayName="FrameworkContext";function ym(){let e=d.useContext(oc);return ic(e,"You must render this element inside a <HydratedRouter> element"),e}function Ex(e,t){let r=d.useContext(oc),[s,a]=d.useState(!1),[i,o]=d.useState(!1),{onFocus:l,onBlur:c,onMouseEnter:u,onMouseLeave:f,onTouchStart:p}=t,m=d.useRef(null);d.useEffect(()=>{if(e==="render"&&o(!0),e==="viewport"){let w=y=>{y.forEach(v=>{o(v.isIntersecting)})},S=new IntersectionObserver(w,{threshold:.5});return m.current&&S.observe(m.current),()=>{S.disconnect()}}},[e]),d.useEffect(()=>{if(s){let w=setTimeout(()=>{o(!0)},100);return()=>{clearTimeout(w)}}},[s]);let j=()=>{a(!0)},x=()=>{a(!1),o(!1)};return r?e!=="intent"?[i,m,{}]:[i,m,{onFocus:ns(l,j),onBlur:ns(c,x),onMouseEnter:ns(u,j),onMouseLeave:ns(f,x),onTouchStart:ns(p,j)}]:[!1,m,{}]}function ns(e,t){return r=>{e&&e(r),r.defaultPrevented||t(r)}}function Px({page:e,...t}){let{router:r}=vm(),s=d.useMemo(()=>cm(r.routes,e,r.basename),[r.routes,e,r.basename]);return s?d.createElement(Rx,{page:e,matches:s,...t}):null}function Tx(e){let{manifest:t,routeModules:r}=ym(),[s,a]=d.useState([]);return d.useEffect(()=>{let i=!1;return wx(e,t,r).then(o=>{i||a(o)}),()=>{i=!0}},[e,t,r]),s}function Rx({page:e,matches:t,...r}){let s=Je(),{manifest:a,routeModules:i}=ym(),{basename:o}=vm(),{loaderData:l,matches:c}=Cx(),u=d.useMemo(()=>Ed(e,t,c,a,s,"data"),[e,t,c,a,s]),f=d.useMemo(()=>Ed(e,t,c,a,s,"assets"),[e,t,c,a,s]),p=d.useMemo(()=>{if(e===s.pathname+s.search+s.hash)return[];let x=new Set,w=!1;if(t.forEach(y=>{var g;let v=a.routes[y.route.id];!v||!v.hasLoader||(!u.some(N=>N.route.id===y.route.id)&&y.route.id in l&&((g=i[y.route.id])!=null&&g.shouldRevalidate)||v.hasClientLoader?w=!0:x.add(y.route.id))}),x.size===0)return[];let S=gx(e,o,"data");return w&&x.size>0&&S.searchParams.set("_routes",t.filter(y=>x.has(y.route.id)).map(y=>y.route.id).join(",")),[S.pathname+S.search]},[o,l,s,a,u,t,e,i]),m=d.useMemo(()=>jx(f,a),[f,a]),j=Tx(f);return d.createElement(d.Fragment,null,p.map(x=>d.createElement("link",{key:x,rel:"prefetch",as:"fetch",href:x,...r})),m.map(x=>d.createElement("link",{key:x,rel:"modulepreload",href:x,...r})),j.map(({key:x,link:w})=>d.createElement("link",{key:x,...w})))}function _x(...e){return t=>{e.forEach(r=>{typeof r=="function"?r(t):r!=null&&(r.current=t)})}}var bm=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{bm&&(window.__reactRouterVersion="7.7.1")}catch{}function Ax({basename:e,children:t,window:r}){let s=d.useRef();s.current==null&&(s.current=mp({window:r,v5Compat:!0}));let a=s.current,[i,o]=d.useState({action:a.action,location:a.location}),l=d.useCallback(c=>{d.startTransition(()=>o(c))},[o]);return d.useLayoutEffect(()=>a.listen(l),[a,l]),d.createElement(ix,{basename:e,children:t,location:i.location,navigationType:i.action,navigator:a})}var wm=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,jm=d.forwardRef(function({onClick:t,discover:r="render",prefetch:s="none",relative:a,reloadDocument:i,replace:o,state:l,target:c,to:u,preventScrollReset:f,viewTransition:p,...m},j){let{basename:x}=d.useContext(Zt),w=typeof u=="string"&&wm.test(u),S,y=!1;if(typeof u=="string"&&w&&(S=u,bm))try{let b=new URL(window.location.href),k=u.startsWith("//")?new URL(b.protocol+u):new URL(u),T=vn(k.pathname,x);k.origin===b.origin&&T!=null?u=T+k.search+k.hash:y=!0}catch{Yt(!1,`<Link to="${u}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let v=$p(u,{relative:a}),[g,N,C]=Ex(s,m),P=zx(u,{replace:o,state:l,target:c,preventScrollReset:f,relative:a,viewTransition:p});function E(b){t&&t(b),b.defaultPrevented||P(b)}let h=d.createElement("a",{...m,...C,href:S||v,onClick:y||i?t:E,ref:_x(j,N),target:c,"data-discover":!w&&r==="render"?"true":void 0});return g&&!w?d.createElement(d.Fragment,null,h,d.createElement(Px,{page:v})):h});jm.displayName="Link";var Ix=d.forwardRef(function({"aria-current":t="page",caseSensitive:r=!1,className:s="",end:a=!1,style:i,to:o,viewTransition:l,children:c,...u},f){let p=Qs(o,{relative:u.relative}),m=Je(),j=d.useContext(Ni),{navigator:x,basename:w}=d.useContext(Zt),S=j!=null&&Bx(p)&&l===!0,y=x.encodeLocation?x.encodeLocation(p).pathname:p.pathname,v=m.pathname,g=j&&j.navigation&&j.navigation.location?j.navigation.location.pathname:null;r||(v=v.toLowerCase(),g=g?g.toLowerCase():null,y=y.toLowerCase()),g&&w&&(g=vn(g,w)||g);const N=y!=="/"&&y.endsWith("/")?y.length-1:y.length;let C=v===y||!a&&v.startsWith(y)&&v.charAt(N)==="/",P=g!=null&&(g===y||!a&&g.startsWith(y)&&g.charAt(y.length)==="/"),E={isActive:C,isPending:P,isTransitioning:S},h=C?t:void 0,b;typeof s=="function"?b=s(E):b=[s,C?"active":null,P?"pending":null,S?"transitioning":null].filter(Boolean).join(" ");let k=typeof i=="function"?i(E):i;return d.createElement(jm,{...u,"aria-current":h,className:b,ref:f,style:k,to:o,viewTransition:l},typeof c=="function"?c(E):c)});Ix.displayName="NavLink";var Lx=d.forwardRef(({discover:e="render",fetcherKey:t,navigate:r,reloadDocument:s,replace:a,state:i,method:o=_a,action:l,onSubmit:c,relative:u,preventScrollReset:f,viewTransition:p,...m},j)=>{let x=Fx(),w=$x(l,{relative:u}),S=o.toLowerCase()==="get"?"get":"post",y=typeof l=="string"&&wm.test(l),v=g=>{if(c&&c(g),g.defaultPrevented)return;g.preventDefault();let N=g.nativeEvent.submitter,C=(N==null?void 0:N.getAttribute("formmethod"))||o;x(N||g.currentTarget,{fetcherKey:t,method:C,navigate:r,replace:a,state:i,relative:u,preventScrollReset:f,viewTransition:p})};return d.createElement("form",{ref:j,method:S,action:w,onSubmit:s?c:v,...m,"data-discover":!y&&e==="render"?"true":void 0})});Lx.displayName="Form";function Dx(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Nm(e){let t=d.useContext(Wr);return $e(t,Dx(e)),t}function zx(e,{target:t,replace:r,state:s,preventScrollReset:a,relative:i,viewTransition:o}={}){let l=_e(),c=Je(),u=Qs(e,{relative:i});return d.useCallback(f=>{if(fx(f,t)){f.preventDefault();let p=r!==void 0?r:Os(c)===Os(u);l(e,{replace:p,state:s,preventScrollReset:a,relative:i,viewTransition:o})}},[c,l,u,r,s,t,e,a,i,o])}function km(e){Yt(typeof URLSearchParams<"u","You cannot use the `useSearchParams` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params.");let t=d.useRef(rl(e)),r=d.useRef(!1),s=Je(),a=d.useMemo(()=>mx(s.search,r.current?null:t.current),[s.search]),i=_e(),o=d.useCallback((l,c)=>{const u=rl(typeof l=="function"?l(new URLSearchParams(a)):l);r.current=!0,i("?"+u,c)},[i,a]);return[a,o]}var Mx=0,Ox=()=>`__${String(++Mx)}__`;function Fx(){let{router:e}=Nm("useSubmit"),{basename:t}=d.useContext(Zt),r=ex();return d.useCallback(async(s,a={})=>{let{action:i,method:o,encType:l,formData:c,body:u}=xx(s,t);if(a.navigate===!1){let f=a.fetcherKey||Ox();await e.fetch(f,r,a.action||i,{preventScrollReset:a.preventScrollReset,formData:c,body:u,formMethod:a.method||o,formEncType:a.encType||l,flushSync:a.flushSync})}else await e.navigate(a.action||i,{preventScrollReset:a.preventScrollReset,formData:c,body:u,formMethod:a.method||o,formEncType:a.encType||l,replace:a.replace,state:a.state,fromRouteId:r,flushSync:a.flushSync,viewTransition:a.viewTransition})},[e,t,r])}function $x(e,{relative:t}={}){let{basename:r}=d.useContext(Zt),s=d.useContext(Qt);$e(s,"useFormAction must be used inside a RouteContext");let[a]=s.matches.slice(-1),i={...Qs(e||".",{relative:t})},o=Je();if(e==null){i.search=o.search;let l=new URLSearchParams(i.search),c=l.getAll("index");if(c.some(f=>f==="")){l.delete("index"),c.filter(p=>p).forEach(p=>l.append("index",p));let f=l.toString();i.search=f?`?${f}`:""}}return(!e||e===".")&&a.route.index&&(i.search=i.search?i.search.replace(/^\?/,"?index&"):"?index"),r!=="/"&&(i.pathname=i.pathname==="/"?r:mn([r,i.pathname])),Os(i)}function Bx(e,{relative:t}={}){let r=d.useContext(mm);$e(r!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:s}=Nm("useViewTransitionState"),a=Qs(e,{relative:t});if(!r.isTransitioning)return!1;let i=vn(r.currentLocation.pathname,s)||r.currentLocation.pathname,o=vn(r.nextLocation.pathname,s)||r.nextLocation.pathname;return ai(a.pathname,o)!=null||ai(a.pathname,i)!=null}function Ux({size:e=22,spinning:t=!1}){return n.jsx("div",{style:{width:e,height:e},className:"grid place-items-center",children:n.jsxs("svg",{viewBox:"0 0 100 100",className:`${t?"animate-[spin_0.8s_ease-out]":"motion-safe:animate-[spin_9s_linear_infinite]"} group-active:motion-safe:animate-[spin_1.2s_linear_infinite]`,style:{filter:"drop-shadow(0 2px 4px rgba(0,0,0,0.2))"},children:[n.jsx("path",{d:"M50,50 L50,5 A45,45 0 0,1 86.97,25.98 Z",fill:"#6366F1"}),n.jsx("path",{d:"M50,50 L86.97,25.98 A45,45 0 0,1 86.97,74.02 Z",fill:"#22C55E"}),n.jsx("path",{d:"M50,50 L86.97,74.02 A45,45 0 0,1 50,95 Z",fill:"#F59E0B"}),n.jsx("path",{d:"M50,50 L50,95 A45,45 0 0,1 13.03,74.02 Z",fill:"#EF4444"}),n.jsx("path",{d:"M50,50 L13.03,74.02 A45,45 0 0,1 13.03,25.98 Z",fill:"#3B82F6"}),n.jsx("path",{d:"M50,50 L13.03,25.98 A45,45 0 0,1 50,5 Z",fill:"#8B5CF6"}),n.jsx("circle",{cx:"50",cy:"50",r:"9",fill:"#111827",stroke:"white",strokeWidth:"2"})]})})}function qx(){const e=_e(),{pathname:t}=Je(),r=d.useRef({}),s=d.useRef({}),[a,i]=d.useState(!1),o=d.useRef(null),l=g=>{if(navigator.vibrate)switch(g){case"light":navigator.vibrate(20);break;case"medium":navigator.vibrate(35);break;case"heavy":navigator.vibrate(50);break;case"double":navigator.vibrate([30,50,30]);break;case"success":navigator.vibrate([20,50,20,50,20]);break;default:navigator.vibrate(25)}};d.useCallback(()=>{var g;if(["/","/play","/swipe","/profile"].includes(t)){const N=((g=o.current)==null?void 0:g.scrollTop)||0,C=window.scrollY||window.pageYOffset||0,P=N>0?N:C;console.log(`Saving scroll for ${t}: main=${N}, window=${C}, saved=${P}`),r.current[t]=P}},[t]),d.useEffect(()=>{let g=null;const N=()=>{g&&cancelAnimationFrame(g),g=requestAnimationFrame(()=>{var P;if(["/","/play","/swipe","/profile"].includes(t)){const E=((P=o.current)==null?void 0:P.scrollTop)||0,h=window.scrollY||window.pageYOffset||0,b=E>0?E:h;r.current[t]=b,console.log(`Scroll position updated for ${t}: ${b}`)}})};window.addEventListener("scroll",N,{passive:!0});const C=o.current;return C&&C.addEventListener("scroll",N,{passive:!0}),()=>{g&&cancelAnimationFrame(g),window.removeEventListener("scroll",N),C&&C.removeEventListener("scroll",N)}},[t]),d.useEffect(()=>{if(o.current&&o.current.classList.add("navigating"),["/profile/","/quiz/","/practice/","/play/classic","/settings","/about"].some(C=>t.startsWith(C)))window.scrollTo(0,0),o.current&&(o.current.scrollTop=0),setTimeout(()=>{o.current&&o.current.classList.remove("navigating")},20);else{const C=r.current[t];if(console.log(`Attempting to restore scroll for ${t}: ${C}`),C!=null&&C>0){const P=(E=0)=>{E>=5||(o.current?(o.current.scrollTop=C,setTimeout(()=>{var b;const h=((b=o.current)==null?void 0:b.scrollTop)||0;Math.abs(h-C)>10?(window.scrollTo(0,C),setTimeout(()=>{const k=window.scrollY||window.pageYOffset||0;console.log(`Restore attempt ${E+1}: main=${h}, window=${k}, target=${C}`),Math.abs(k-C)>10&&Math.abs(h-C)>10&&P(E+1)},20)):console.log(`Successfully restored scroll to ${h}`)},20)):window.scrollTo(0,C))};P(0),setTimeout(()=>{o.current&&o.current.classList.remove("navigating")},20)}else window.scrollTo(0,0),o.current&&(o.current.scrollTop=0),setTimeout(()=>{o.current&&o.current.classList.remove("navigating")},20)}},[t]);const[c,u]=d.useState(!1),[f,p]=d.useState({open:!1,go:null}),[m,j]=d.useState(!1);d.useEffect(()=>{const g=()=>{j(document.body.classList.contains("hide-bottom-nav"))};g();const N=new MutationObserver(g);return N.observe(document.body,{attributes:!0,attributeFilter:["class"]}),()=>N.disconnect()},[]),d.useEffect(()=>{const g=new MutationObserver(()=>{u(document.body.classList.contains("modal-open"))});return g.observe(document.body,{attributes:!0,attributeFilter:["class"]}),()=>g.disconnect()},[]);const w=c||m||[/^\/quiz\//,/^\/practice\//,/^\/profile\//,/^\/play\/classic/].some(g=>g.test(t)),S=g=>g==="/"?t==="/":t.startsWith(g),y=d.useCallback(()=>{console.log("Scrolling to top"),window.scrollTo({top:0,behavior:"smooth"}),o.current&&o.current.scrollTo({top:0,behavior:"smooth"}),document.documentElement.scrollTop=0,document.body.scrollTop=0},[]),v=({path:g,icon:N,label:C,emoji:P})=>{const E=S(g),[h,b]=d.useState(!1),k=d.useCallback(()=>{var H;const T=Date.now();if(E){const W=s.current[g]||0;console.log(`Active tab clicked. Time since last tap: ${T-W}ms`),T-W<500?(console.log("Double tap detected!"),y(),l("double"),s.current[g]=0):s.current[g]=T;return}if(["/","/play","/swipe","/profile"].includes(t)){const W=((H=o.current)==null?void 0:H.scrollTop)||0,F=window.scrollY||window.pageYOffset||0,I=W>0?W:F;console.log(`Manually saving scroll before navigation from ${t}: ${I}`),r.current[t]=I}const R=s.current[g]||0;if(T-R<500){console.log("Double tap on inactive tab - navigating and scrolling to top"),r.current[g]=0,g==="/play"?(i(!0),l("double"),setTimeout(()=>{e(`/play?view=modes&reset=${Date.now()}`),i(!1),setTimeout(y,100)},200)):(l("double"),e(g),setTimeout(y,100)),s.current[g]=0;return}s.current[g]=T,b(!0),setTimeout(()=>b(!1),600);const B=()=>{if(g==="/play"){i(!0),l("heavy"),setTimeout(()=>{e(`/play?view=modes&reset=${Date.now()}`),i(!1)},200);return}l("medium"),e(g)};if(localStorage.getItem("qp_in_question")==="true"){p({open:!0,go:B});return}B()},[E,g,t,e,y,l]);return n.jsxs("button",{type:"button",onClick:k,className:`group relative flex h-14 w-20 flex-col items-center justify-center rounded-xl transition-all
          ${E?"scale-110":"scale-100 hover:scale-105"}
          ${h?"animate-bounce":""}`,"aria-current":E?"page":void 0,children:[E&&n.jsxs(n.Fragment,{children:[n.jsx("span",{className:"absolute -top-2 h-1.5 w-10 rounded-full bg-gradient-to-r from-transparent via-white to-transparent opacity-60"}),n.jsx("div",{className:"absolute inset-0 rounded-xl bg-white/10 blur-xl"})]}),n.jsx("div",{className:`leading-none text-2xl transition-transform ${E?"scale-125":""} ${g==="/play"&&a?"animate-spin":""}`,children:P||N}),n.jsx("span",{className:`mt-1 text-[10px] font-medium transition-all ${E?"text-white":"text-base-muted/80"}`,children:C})]})};return n.jsxs("div",{className:"min-h-screen bg-base-bg text-base-text",children:[n.jsx("style",{children:`
        .hide-bottom-nav nav[role="navigation"] {
         display: none !important;
        }
        main.navigating {
          visibility: hidden;
        }
        main {
          scroll-behavior: auto !important;
        }
      `}),n.jsx("main",{ref:o,className:"mx-auto w-full max-w-none px-1 sm:px-3 md:px-4 overscroll-y-contain",style:{height:w||document.body.classList.contains("hide-bottom-nav")?"100dvh":"calc(100dvh - (5.5rem + env(safe-area-inset-bottom)))",paddingTop:"calc(env(safe-area-inset-top) + 12px)",paddingBottom:w||document.body.classList.contains("hide-bottom-nav")?0:void 0,overflowY:"auto"},children:n.jsx(ax,{})}),f.open&&n.jsxs("div",{className:"fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center px-6",style:{animation:"fadeIn 0.2s ease-out"},children:[n.jsxs("div",{className:"w-full max-w-sm rounded-3xl bg-gradient-to-b from-base-card to-base-card/90 border border-base-border p-6 text-center shadow-2xl",style:{animation:"slideUp 0.3s ease-out"},children:[n.jsx("div",{className:"text-5xl mb-4",style:{animation:"bounce 0.6s ease-out"},children:"😟"}),n.jsx("div",{className:"text-xl font-bold mb-2 bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent",children:"Leave the game?"}),n.jsx("p",{className:"text-base-muted mb-6 text-sm",children:"You'll lose your current progress!"}),n.jsxs("div",{className:"flex gap-3",children:[n.jsx("button",{onClick:()=>{l("medium"),p({open:!1,go:null})},className:"flex-1 py-3 rounded-2xl border-2 border-green-500/30 bg-green-500/10 hover:bg-green-500/20 transition-all font-semibold text-green-400",children:"Keep Playing! 🎮"}),n.jsx("button",{onClick:()=>{l("heavy");const g=f.go;p({open:!1,go:null}),g==null||g()},className:"flex-1 py-3 rounded-2xl bg-gradient-to-r from-red-500/80 to-orange-500/80 text-white font-semibold hover:from-red-500 hover:to-orange-500 transition-all",children:"Leave 👋"})]})]}),n.jsx("style",{children:`
            @keyframes fadeIn {
              from { opacity: 0; }
              to { opacity: 1; }
            }
            @keyframes slideUp {
              from { transform: translateY(20px); opacity: 0; }
              to { transform: translateY(0); opacity: 1; }
            }
          `})]}),!w&&n.jsxs("nav",{role:"navigation","aria-label":"Bottom navigation",className:"fixed inset-x-0 bottom-0 z-50",children:[n.jsx("div",{className:"absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0B0F1A] to-[#0B0F1A]/95 backdrop-blur-lg",style:{height:"calc(5.5rem + env(safe-area-inset-bottom))"},"aria-hidden":!0}),n.jsx("div",{className:"relative mx-auto max-w-md px-4 pb-[calc(env(safe-area-inset-bottom)+0.5rem)] pt-2",children:n.jsxs("div",{className:"relative",children:[n.jsx("div",{className:"absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-green-500/20 blur-2xl"}),n.jsxs("div",{className:"relative flex h-[72px] items-center justify-around rounded-3xl border border-white/10 bg-gradient-to-b from-base-card/95 to-base-card/80 shadow-2xl backdrop-blur-xl",children:[n.jsx(v,{path:"/",emoji:"🏠",label:"Home"}),n.jsx(v,{path:"/play",icon:n.jsx(Ux,{size:26,spinning:a}),label:"Play"}),n.jsx(v,{path:"/swipe",emoji:"📚",label:"Swipe"}),n.jsx(v,{path:"/profile",emoji:"👤",label:"Profile"})]})]})})]})]})}function ii(){return ii=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var s in r)({}).hasOwnProperty.call(r,s)&&(e[s]=r[s])}return e},ii.apply(null,arguments)}function Yx(e,t){if(e==null)return{};var r={};for(var s in e)if({}.hasOwnProperty.call(e,s)){if(t.indexOf(s)!==-1)continue;r[s]=e[s]}return r}function Qx(e){d.useEffect(e,[])}var Wx=["id","volume","playbackRate","soundEnabled","interrupt","onload"];function $t(e,t){var r=t===void 0?{}:t,s=r.volume,a=s===void 0?1:s,i=r.playbackRate,o=i===void 0?1:i,l=r.soundEnabled,c=l===void 0?!0:l,u=r.interrupt,f=u===void 0?!1:u,p=r.onload,m=Yx(r,Wx),j=vt.useRef(null),x=vt.useRef(!1),w=vt.useState(null),S=w[0],y=w[1],v=vt.useState(null),g=v[0],N=v[1],C=function(){typeof p=="function"&&p.call(this),x.current&&y(this.duration()*1e3),N(this)};Qx(function(){return ec(()=>import("./howler-e2ced02b.js").then(k=>k.h),[]).then(function(k){if(!x.current){var T;j.current=(T=k.Howl)!==null&&T!==void 0?T:k.default.Howl,x.current=!0,new j.current(ii({src:Array.isArray(e)?e:[e],volume:a,rate:o,onload:C},m))}}),function(){x.current=!1}}),vt.useEffect(function(){j.current&&g&&N(new j.current(ii({src:Array.isArray(e)?e:[e],volume:a,onload:C},m)))},[JSON.stringify(e)]),vt.useEffect(function(){g&&(g.volume(a),m.sprite||g.rate(o))},[g,a,o]);var P=vt.useCallback(function(k){typeof k>"u"&&(k={}),!(!g||!c&&!k.forceSoundEnabled)&&(f&&g.stop(),k.playbackRate&&g.rate(k.playbackRate),g.play(k.id))},[g,c,f]),E=vt.useCallback(function(k){g&&g.stop(k)},[g]),h=vt.useCallback(function(k){g&&g.pause(k)},[g]),b=[P,{sound:g,stop:E,pause:h,duration:S}];return b}class Gx{constructor(){console.log("UserService initialized")}getUserData(t){try{if(!t)return console.log("No phone provided to getUserData"),null;const s=JSON.parse(localStorage.getItem("users")||"{}")[t]||{},a=JSON.parse(localStorage.getItem(`user_profile_${t}`)||"{}"),i={...s,phone:t,username:a.name||s.username||"",email:a.email||"",city:a.city||"",state:a.state||"",country:a.country||""};return console.log("getUserData merged result:",i),i}catch(r){return console.error("Error in getUserData:",r),null}}getUserDataByIdentifier(t){try{const r=this.getUserData(t);if(r)return r;const s=JSON.parse(localStorage.getItem("users")||"{}");for(let a in s)if(s[a].username===t)return this.getUserData(a);return null}catch(r){return console.error("Error in getUserDataByIdentifier:",r),null}}userExists(t){try{return JSON.parse(localStorage.getItem("users")||"{}").hasOwnProperty(t)}catch(r){return console.error("Error checking if user exists:",r),!1}}createUser(t,r){try{console.log("Creating user:",t,r);const s=JSON.parse(localStorage.getItem("users")||"{}");return s[t]={username:r.username,password:r.password||"123456",avatar:r.avatar,gender:r.gender,ageGroup:r.ageGroup,phone:t,createdAt:new Date().toISOString()},localStorage.setItem("users",JSON.stringify(s)),this.setCurrentUser(t),console.log("User created successfully"),!0}catch(s){return console.error("Error creating user:",s),!1}}setCurrentUser(t){try{const r=this.getUserData(t);if(!r)return!1;const s={phone:t,username:r.username,avatar:r.avatar,gender:r.gender,ageGroup:r.ageGroup};localStorage.setItem("currentUser",JSON.stringify(s));const a=JSON.parse(localStorage.getItem("qp_player")||"{}");return a.name=r.username,localStorage.setItem("qp_player",JSON.stringify(a)),console.log("Current user set:",s),!0}catch(r){return console.error("Error setting current user:",r),!1}}updateUserProfile(t,r){try{if(console.log("Updating profile for:",t,r),r.name){const l=JSON.parse(localStorage.getItem("users")||"{}");if(l[t]){l[t].username=r.name;const c=l[t].password;l[t].password=c,localStorage.setItem("users",JSON.stringify(l))}}const s=`user_profile_${t}`,i={...JSON.parse(localStorage.getItem(s)||"{}"),...r};localStorage.setItem(s,JSON.stringify(i));const o=JSON.parse(localStorage.getItem("currentUser")||"{}");if(o.phone===t){o.username=r.name||o.username,localStorage.setItem("currentUser",JSON.stringify(o));const l=JSON.parse(localStorage.getItem("qp_player")||"{}");l.name=r.name||l.name,localStorage.setItem("qp_player",JSON.stringify(l))}return console.log("Profile updated successfully"),!0}catch(s){return console.error("Error updating profile:",s),!1}}getCurrentUser(){try{const t=JSON.parse(localStorage.getItem("currentUser")||"{}");return t.phone?this.getUserData(t.phone):null}catch(t){return console.error("Error getting current user:",t),null}}signOut(){try{return localStorage.removeItem("currentUser"),localStorage.removeItem("rememberCredentials"),sessionStorage.clear(),console.log("User signed out"),!0}catch(t){return console.error("Error signing out:",t),!1}}}const Ve=new Gx;window.userService=Ve;class Hx{constructor(){this.STORAGE_KEYS={COINS:"qp_coins",XP:"qp_xp",LEVEL:"qp_level",OWNED_CHARACTERS:"owned_characters",SOUND:"play_sound_on",GAME_STATS:"game_stats_",DAILY_PROGRESS:"daily_progress_",QUEST_DATA:"quest_data_",STREAK_DATA:"streak_data_",GAME_HISTORY:"game_history_",QUIZ_RESULTS:"quiz_current_results"}}getCoins(){return this.safeGet(this.STORAGE_KEYS.COINS,0)}setCoins(t){return this.safeSet(this.STORAGE_KEYS.COINS,t),t}addCoins(t,r=""){const a=this.getCoins()+t;this.setCoins(a);const i=Ve.getCurrentUser();return i!=null&&i.phone&&(this.logCoinTransaction(i.phone,t,r),this.updateDailyCoins(i.phone,t)),a}spendCoins(t,r=""){const s=this.getCoins();if(s<t)return!1;const a=s-t;this.setCoins(a);const i=Ve.getCurrentUser();return i!=null&&i.phone&&this.logCoinTransaction(i.phone,-t,r),!0}getXP(){return this.safeGet(this.STORAGE_KEYS.XP,0)}setXP(t){return this.safeSet(this.STORAGE_KEYS.XP,t),t}addXP(t){const s=this.getXP()+t;this.setXP(s),this.checkAndUpdateLevel(s);const a=Ve.getCurrentUser();return a!=null&&a.phone&&this.updateDailyXP(a.phone,t),s}getLevel(){return this.safeGet(this.STORAGE_KEYS.LEVEL,1)}setLevel(t){return this.safeSet(this.STORAGE_KEYS.LEVEL,t),t}checkAndUpdateLevel(t=null){const r=t||this.getXP(),s=this.getLevel();let a=1,i=0;for(;i<=r;)a++,i=100*a*(a-1);if(a--,a>s){this.setLevel(a);const o=50*(a-s);return this.addCoins(o,`Level up to ${a}!`),!0}return!1}initializeUserData(t){if(!t)return;const r=this.getUserStats(t);if(r)return r;const s={stats:{totalQuizzes:0,totalPractice:0,totalCorrect:0,totalWrong:0,winStreak:0,bestStreak:0,highScore:0,gamesPlayed:0},quests:{daily:[{id:"quiz_3",type:"quiz",target:3,current:0,reward:60,completed:!1},{id:"practice_15",type:"practice",target:15,current:0,reward:100,completed:!1},{id:"win_5",type:"win_streak",target:5,current:0,reward:150,completed:!1},{id:"speed_run",type:"speed_run",target:1,current:0,reward:80,completed:!1}]},streak:{current:0,lastPlayedDate:null,longestStreak:0}};return this.safeSet(this.STORAGE_KEYS.GAME_STATS+t,s.stats),this.safeSet(this.STORAGE_KEYS.QUEST_DATA+t,s.quests),this.safeSet(this.STORAGE_KEYS.STREAK_DATA+t,s.streak),this.resetDailyProgress(t),s}getUserStats(t){return t?this.safeGet(this.STORAGE_KEYS.GAME_STATS+t,null):null}updateUserStats(t,r){if(!t)return null;const a={...this.getUserStats(t)||{},...r};return this.safeSet(this.STORAGE_KEYS.GAME_STATS+t,a),a}getDailyProgress(t){if(!t)return null;const r=this.safeGet(this.STORAGE_KEYS.DAILY_PROGRESS+t,null),s=new Date().toDateString();return!r||r.date!==s?this.resetDailyProgress(t):r}resetDailyProgress(t){if(!t)return null;const r={date:new Date().toDateString(),quizzesPlayed:0,practiceCompleted:0,coinsEarned:0,xpEarned:0,questsCompleted:[]};return this.safeSet(this.STORAGE_KEYS.DAILY_PROGRESS+t,r),this.resetDailyQuests(t),r}updateDailyCoins(t,r){if(!t)return;const s=this.getDailyProgress(t);s&&(s.coinsEarned+=r,this.safeSet(this.STORAGE_KEYS.DAILY_PROGRESS+t,s))}updateDailyXP(t,r){if(!t)return;const s=this.getDailyProgress(t);s&&(s.xpEarned+=r,this.safeSet(this.STORAGE_KEYS.DAILY_PROGRESS+t,s))}getQuestData(t){return t?this.safeGet(this.STORAGE_KEYS.QUEST_DATA+t,null):null}resetDailyQuests(t){if(!t)return null;const r={daily:[{id:"quiz_3",type:"quiz",target:3,current:0,reward:60,completed:!1},{id:"practice_15",type:"practice",target:15,current:0,reward:100,completed:!1},{id:"win_5",type:"win_streak",target:5,current:0,reward:150,completed:!1},{id:"speed_run",type:"speed_run",target:1,current:0,reward:80,completed:!1}]};return this.safeSet(this.STORAGE_KEYS.QUEST_DATA+t,r),r}updateQuestProgress(t,r,s=1){if(!t)return null;const a=this.getQuestData(t);if(!(a!=null&&a.daily))return null;let i=0;const o={...a,daily:a.daily.map(l=>{if(l.type===r&&!l.completed){const c=Math.min(l.current+s,l.target),u=c>=l.target;return u&&!l.completed&&(i+=l.reward,this.addCoins(l.reward,`Quest completed: ${l.id}`)),{...l,current:c,completed:u}}return l})};return this.safeSet(this.STORAGE_KEYS.QUEST_DATA+t,o),{updatedQuests:o,coinsEarned:i}}getStreakData(t){return t?this.safeGet(this.STORAGE_KEYS.STREAK_DATA+t,{current:0,lastPlayedDate:null,longestStreak:0}):null}updateStreak(t){if(!t)return null;const r=this.getStreakData(t),s=new Date().toDateString(),a=new Date(Date.now()-864e5).toDateString();return r.lastPlayedDate===s||(r.lastPlayedDate===a?r.current++:r.current=1,r.lastPlayedDate=s,r.longestStreak=Math.max(r.current,r.longestStreak),this.safeSet(this.STORAGE_KEYS.STREAK_DATA+t,r),r.current%7===0&&this.addCoins(100,"7-day streak bonus!")),r}recordQuizSession(t,r){const{score:s,totalQuestions:a,category:i,difficulty:o="medium",mode:l="classic"}=r,f=s*5+(s===a?20:0),p=s*10;if(this.addCoins(f,`Quiz: ${s}/${a}`),this.addXP(p),t){const m=this.getUserStats(t)||this.initializeUserData(t).stats;m.totalQuizzes++,m.totalCorrect+=s,m.totalWrong+=a-s,m.gamesPlayed++,s>=a*.7?(m.winStreak++,m.bestStreak=Math.max(m.winStreak,m.bestStreak)):m.winStreak=0,m.highScore=Math.max(m.highScore,s),this.updateUserStats(t,m);const j=this.getDailyProgress(t);j.quizzesPlayed++,this.safeSet(this.STORAGE_KEYS.DAILY_PROGRESS+t,j),this.updateQuestProgress(t,"quiz",1),m.winStreak>=5&&this.updateQuestProgress(t,"win_streak",m.winStreak),this.updateStreak(t),this.addToHistory(t,{type:"quiz",mode:l,category:i,score:s,totalQuestions:a,difficulty:o,coinsEarned:f,xpEarned:p,timestamp:new Date().toISOString()})}return{coinsEarned:f,xpEarned:p,newTotal:this.getCoins(),newXP:this.getXP(),newLevel:this.getLevel()}}recordPracticeSession(t,r){const{questionsCompleted:s,correctAnswers:a,category:i="general"}=r,o=s*2,l=s*5;if(this.addCoins(o,`Practice: ${s} questions`),this.addXP(l),t){const c=this.getUserStats(t)||this.initializeUserData(t).stats;c.totalPractice+=s,c.totalCorrect+=a,c.totalWrong+=s-a,this.updateUserStats(t,c);const u=this.getDailyProgress(t);u.practiceCompleted+=s,this.safeSet(this.STORAGE_KEYS.DAILY_PROGRESS+t,u),this.updateQuestProgress(t,"practice",s),this.updateStreak(t),this.addToHistory(t,{type:"practice",category:i,questionsCompleted:s,correctAnswers:a,coinsEarned:o,xpEarned:l,timestamp:new Date().toISOString()})}return{coinsEarned:o,xpEarned:l,newTotal:this.getCoins(),newXP:this.getXP()}}getGameHistory(t){return t?this.safeGet(this.STORAGE_KEYS.GAME_HISTORY+t,[]):[]}addToHistory(t,r){if(!t)return;const s=this.getGameHistory(t);s.unshift(r),s.length>50&&s.pop(),this.safeSet(this.STORAGE_KEYS.GAME_HISTORY+t,s)}getTodaySummary(t){var a;const r=t||((a=Ve.getCurrentUser())==null?void 0:a.phone),s={totalCoins:this.getCoins(),totalXP:this.getXP(),level:this.getLevel(),xpProgress:this.getXP()%100,xpNeeded:100,todayCoins:0,todayXP:0,streak:0,questProgress:0,activeQuests:0};if(r){const i=this.getDailyProgress(r),o=this.getStreakData(r),l=this.getQuestData(r),c=this.getUserStats(r);if(i&&(s.todayCoins=i.coinsEarned,s.todayXP=i.xpEarned),o&&(s.streak=o.current),l!=null&&l.daily){const u=l.daily.filter(f=>f.completed).length;s.questProgress=Math.round(u/l.daily.length*100),s.activeQuests=l.daily.filter(f=>!f.completed).length}c&&(s.rank=23,s.winStreak=c.winStreak)}return s}logCoinTransaction(t,r,s){if(!t)return;const a="coin_transactions_"+t,i=this.safeGet(a,[]);i.push({amount:r,reason:s,timestamp:new Date().toISOString(),balance:this.getCoins()}),i.length>100&&i.shift(),this.safeSet(a,i)}storeCurrentResults(t){return this.safeSet(this.STORAGE_KEYS.QUIZ_RESULTS,{...t,timestamp:Date.now(),expiresAt:Date.now()+30*60*1e3}),!0}getCurrentResults(){const t=this.safeGet(this.STORAGE_KEYS.QUIZ_RESULTS,null);return t?t.expiresAt&&t.expiresAt<Date.now()?(this.clearCurrentResults(),null):t:null}clearCurrentResults(){localStorage.removeItem(this.STORAGE_KEYS.QUIZ_RESULTS)}safeGet(t,r=null){try{const s=localStorage.getItem(t);return s?JSON.parse(s):r}catch{return r}}safeSet(t,r){try{return localStorage.setItem(t,JSON.stringify(r)),!0}catch{return!1}}clearAllData(){Object.values(this.STORAGE_KEYS).forEach(t=>{typeof t=="string"&&!t.includes("_")&&localStorage.removeItem(t)})}clearUserData(t){if(!t)return;[this.STORAGE_KEYS.GAME_STATS+t,this.STORAGE_KEYS.DAILY_PROGRESS+t,this.STORAGE_KEYS.QUEST_DATA+t,this.STORAGE_KEYS.STREAK_DATA+t,this.STORAGE_KEYS.GAME_HISTORY+t,"coin_transactions_"+t].forEach(s=>localStorage.removeItem(s))}}const ce=new Hx;var Sm={exports:{}};/* @license
Papa Parse
v5.5.3
https://github.com/mholt/PapaParse
License: MIT
*/(function(e,t){((r,s)=>{e.exports=s()})(Om,function r(){var s=typeof self<"u"?self:typeof window<"u"?window:s!==void 0?s:{},a,i=!s.document&&!!s.postMessage,o=s.IS_PAPA_WORKER||!1,l={},c=0,u={};function f(h){this._handle=null,this._finished=!1,this._completed=!1,this._halted=!1,this._input=null,this._baseIndex=0,this._partialLine="",this._rowCount=0,this._start=0,this._nextChunk=null,this.isFirstChunk=!0,this._completeResults={data:[],errors:[],meta:{}},(function(b){var k=C(b);k.chunkSize=parseInt(k.chunkSize),b.step||b.chunk||(k.chunkSize=null),this._handle=new w(k),(this._handle.streamer=this)._config=k}).call(this,h),this.parseChunk=function(b,k){var T=parseInt(this._config.skipFirstNLines)||0;if(this.isFirstChunk&&0<T){let B=this._config.newline;B||(R=this._config.quoteChar||'"',B=this._handle.guessLineEndings(b,R)),b=[...b.split(B).slice(T)].join(B)}this.isFirstChunk&&E(this._config.beforeFirstChunk)&&(R=this._config.beforeFirstChunk(b))!==void 0&&(b=R),this.isFirstChunk=!1,this._halted=!1;var T=this._partialLine+b,R=(this._partialLine="",this._handle.parse(T,this._baseIndex,!this._finished));if(!this._handle.paused()&&!this._handle.aborted()){if(b=R.meta.cursor,T=(this._finished||(this._partialLine=T.substring(b-this._baseIndex),this._baseIndex=b),R&&R.data&&(this._rowCount+=R.data.length),this._finished||this._config.preview&&this._rowCount>=this._config.preview),o)s.postMessage({results:R,workerId:u.WORKER_ID,finished:T});else if(E(this._config.chunk)&&!k){if(this._config.chunk(R,this._handle),this._handle.paused()||this._handle.aborted())return void(this._halted=!0);this._completeResults=R=void 0}return this._config.step||this._config.chunk||(this._completeResults.data=this._completeResults.data.concat(R.data),this._completeResults.errors=this._completeResults.errors.concat(R.errors),this._completeResults.meta=R.meta),this._completed||!T||!E(this._config.complete)||R&&R.meta.aborted||(this._config.complete(this._completeResults,this._input),this._completed=!0),T||R&&R.meta.paused||this._nextChunk(),R}this._halted=!0},this._sendError=function(b){E(this._config.error)?this._config.error(b):o&&this._config.error&&s.postMessage({workerId:u.WORKER_ID,error:b,finished:!1})}}function p(h){var b;(h=h||{}).chunkSize||(h.chunkSize=u.RemoteChunkSize),f.call(this,h),this._nextChunk=i?function(){this._readChunk(),this._chunkLoaded()}:function(){this._readChunk()},this.stream=function(k){this._input=k,this._nextChunk()},this._readChunk=function(){if(this._finished)this._chunkLoaded();else{if(b=new XMLHttpRequest,this._config.withCredentials&&(b.withCredentials=this._config.withCredentials),i||(b.onload=P(this._chunkLoaded,this),b.onerror=P(this._chunkError,this)),b.open(this._config.downloadRequestBody?"POST":"GET",this._input,!i),this._config.downloadRequestHeaders){var k,T=this._config.downloadRequestHeaders;for(k in T)b.setRequestHeader(k,T[k])}var R;this._config.chunkSize&&(R=this._start+this._config.chunkSize-1,b.setRequestHeader("Range","bytes="+this._start+"-"+R));try{b.send(this._config.downloadRequestBody)}catch(B){this._chunkError(B.message)}i&&b.status===0&&this._chunkError()}},this._chunkLoaded=function(){b.readyState===4&&(b.status<200||400<=b.status?this._chunkError():(this._start+=this._config.chunkSize||b.responseText.length,this._finished=!this._config.chunkSize||this._start>=(k=>(k=k.getResponseHeader("Content-Range"))!==null?parseInt(k.substring(k.lastIndexOf("/")+1)):-1)(b),this.parseChunk(b.responseText)))},this._chunkError=function(k){k=b.statusText||k,this._sendError(new Error(k))}}function m(h){(h=h||{}).chunkSize||(h.chunkSize=u.LocalChunkSize),f.call(this,h);var b,k,T=typeof FileReader<"u";this.stream=function(R){this._input=R,k=R.slice||R.webkitSlice||R.mozSlice,T?((b=new FileReader).onload=P(this._chunkLoaded,this),b.onerror=P(this._chunkError,this)):b=new FileReaderSync,this._nextChunk()},this._nextChunk=function(){this._finished||this._config.preview&&!(this._rowCount<this._config.preview)||this._readChunk()},this._readChunk=function(){var R=this._input,B=(this._config.chunkSize&&(B=Math.min(this._start+this._config.chunkSize,this._input.size),R=k.call(R,this._start,B)),b.readAsText(R,this._config.encoding));T||this._chunkLoaded({target:{result:B}})},this._chunkLoaded=function(R){this._start+=this._config.chunkSize,this._finished=!this._config.chunkSize||this._start>=this._input.size,this.parseChunk(R.target.result)},this._chunkError=function(){this._sendError(b.error)}}function j(h){var b;f.call(this,h=h||{}),this.stream=function(k){return b=k,this._nextChunk()},this._nextChunk=function(){var k,T;if(!this._finished)return k=this._config.chunkSize,b=k?(T=b.substring(0,k),b.substring(k)):(T=b,""),this._finished=!b,this.parseChunk(T)}}function x(h){f.call(this,h=h||{});var b=[],k=!0,T=!1;this.pause=function(){f.prototype.pause.apply(this,arguments),this._input.pause()},this.resume=function(){f.prototype.resume.apply(this,arguments),this._input.resume()},this.stream=function(R){this._input=R,this._input.on("data",this._streamData),this._input.on("end",this._streamEnd),this._input.on("error",this._streamError)},this._checkIsFinished=function(){T&&b.length===1&&(this._finished=!0)},this._nextChunk=function(){this._checkIsFinished(),b.length?this.parseChunk(b.shift()):k=!0},this._streamData=P(function(R){try{b.push(typeof R=="string"?R:R.toString(this._config.encoding)),k&&(k=!1,this._checkIsFinished(),this.parseChunk(b.shift()))}catch(B){this._streamError(B)}},this),this._streamError=P(function(R){this._streamCleanUp(),this._sendError(R)},this),this._streamEnd=P(function(){this._streamCleanUp(),T=!0,this._streamData("")},this),this._streamCleanUp=P(function(){this._input.removeListener("data",this._streamData),this._input.removeListener("end",this._streamEnd),this._input.removeListener("error",this._streamError)},this)}function w(h){var b,k,T,R,B=Math.pow(2,53),Q=-B,H=/^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/,W=/^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/,F=this,I=0,_=0,L=!1,A=!1,M=[],U={data:[],errors:[],meta:{}};function K(O){return h.skipEmptyLines==="greedy"?O.join("").trim()==="":O.length===1&&O[0].length===0}function J(){if(U&&T&&(Z("Delimiter","UndetectableDelimiter","Unable to auto-detect delimiting character; defaulted to '"+u.DefaultDelimiter+"'"),T=!1),h.skipEmptyLines&&(U.data=U.data.filter(function(Y){return!K(Y)})),$()){let Y=function(ee,le){E(h.transformHeader)&&(ee=h.transformHeader(ee,le)),M.push(ee)};if(U)if(Array.isArray(U.data[0])){for(var O=0;$()&&O<U.data.length;O++)U.data[O].forEach(Y);U.data.splice(0,1)}else U.data.forEach(Y)}function z(Y,ee){for(var le=h.header?{}:[],te=0;te<Y.length;te++){var q=te,D=Y[te],D=((re,ne)=>(ae=>(h.dynamicTypingFunction&&h.dynamicTyping[ae]===void 0&&(h.dynamicTyping[ae]=h.dynamicTypingFunction(ae)),(h.dynamicTyping[ae]||h.dynamicTyping)===!0))(re)?ne==="true"||ne==="TRUE"||ne!=="false"&&ne!=="FALSE"&&((ae=>{if(H.test(ae)&&(ae=parseFloat(ae),Q<ae&&ae<B))return 1})(ne)?parseFloat(ne):W.test(ne)?new Date(ne):ne===""?null:ne):ne)(q=h.header?te>=M.length?"__parsed_extra":M[te]:q,D=h.transform?h.transform(D,q):D);q==="__parsed_extra"?(le[q]=le[q]||[],le[q].push(D)):le[q]=D}return h.header&&(te>M.length?Z("FieldMismatch","TooManyFields","Too many fields: expected "+M.length+" fields but parsed "+te,_+ee):te<M.length&&Z("FieldMismatch","TooFewFields","Too few fields: expected "+M.length+" fields but parsed "+te,_+ee)),le}var G;U&&(h.header||h.dynamicTyping||h.transform)&&(G=1,!U.data.length||Array.isArray(U.data[0])?(U.data=U.data.map(z),G=U.data.length):U.data=z(U.data,0),h.header&&U.meta&&(U.meta.fields=M),_+=G)}function $(){return h.header&&M.length===0}function Z(O,z,G,Y){O={type:O,code:z,message:G},Y!==void 0&&(O.row=Y),U.errors.push(O)}E(h.step)&&(R=h.step,h.step=function(O){U=O,$()?J():(J(),U.data.length!==0&&(I+=O.data.length,h.preview&&I>h.preview?k.abort():(U.data=U.data[0],R(U,F))))}),this.parse=function(O,z,G){var Y=h.quoteChar||'"',Y=(h.newline||(h.newline=this.guessLineEndings(O,Y)),T=!1,h.delimiter?E(h.delimiter)&&(h.delimiter=h.delimiter(O),U.meta.delimiter=h.delimiter):((Y=((ee,le,te,q,D)=>{var re,ne,ae,de;D=D||[",","	","|",";",u.RECORD_SEP,u.UNIT_SEP];for(var Ee=0;Ee<D.length;Ee++){for(var Te,ge=D[Ee],fe=0,be=0,me=0,Ne=(ae=void 0,new y({comments:q,delimiter:ge,newline:le,preview:10}).parse(ee)),Be=0;Be<Ne.data.length;Be++)te&&K(Ne.data[Be])?me++:(Te=Ne.data[Be].length,be+=Te,ae===void 0?ae=Te:0<Te&&(fe+=Math.abs(Te-ae),ae=Te));0<Ne.data.length&&(be/=Ne.data.length-me),(ne===void 0||fe<=ne)&&(de===void 0||de<be)&&1.99<be&&(ne=fe,re=ge,de=be)}return{successful:!!(h.delimiter=re),bestDelimiter:re}})(O,h.newline,h.skipEmptyLines,h.comments,h.delimitersToGuess)).successful?h.delimiter=Y.bestDelimiter:(T=!0,h.delimiter=u.DefaultDelimiter),U.meta.delimiter=h.delimiter),C(h));return h.preview&&h.header&&Y.preview++,b=O,k=new y(Y),U=k.parse(b,z,G),J(),L?{meta:{paused:!0}}:U||{meta:{paused:!1}}},this.paused=function(){return L},this.pause=function(){L=!0,k.abort(),b=E(h.chunk)?"":b.substring(k.getCharIndex())},this.resume=function(){F.streamer._halted?(L=!1,F.streamer.parseChunk(b,!0)):setTimeout(F.resume,3)},this.aborted=function(){return A},this.abort=function(){A=!0,k.abort(),U.meta.aborted=!0,E(h.complete)&&h.complete(U),b=""},this.guessLineEndings=function(ee,Y){ee=ee.substring(0,1048576);var Y=new RegExp(S(Y)+"([^]*?)"+S(Y),"gm"),G=(ee=ee.replace(Y,"")).split("\r"),Y=ee.split(`
`),ee=1<Y.length&&Y[0].length<G[0].length;if(G.length===1||ee)return`
`;for(var le=0,te=0;te<G.length;te++)G[te][0]===`
`&&le++;return le>=G.length/2?`\r
`:"\r"}}function S(h){return h.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function y(h){var b=(h=h||{}).delimiter,k=h.newline,T=h.comments,R=h.step,B=h.preview,Q=h.fastMode,H=null,W=!1,F=h.quoteChar==null?'"':h.quoteChar,I=F;if(h.escapeChar!==void 0&&(I=h.escapeChar),(typeof b!="string"||-1<u.BAD_DELIMITERS.indexOf(b))&&(b=","),T===b)throw new Error("Comment character same as delimiter");T===!0?T="#":(typeof T!="string"||-1<u.BAD_DELIMITERS.indexOf(T))&&(T=!1),k!==`
`&&k!=="\r"&&k!==`\r
`&&(k=`
`);var _=0,L=!1;this.parse=function(A,M,U){if(typeof A!="string")throw new Error("Input must be a string");var K=A.length,J=b.length,$=k.length,Z=T.length,O=E(R),z=[],G=[],Y=[],ee=_=0;if(!A)return fe();if(Q||Q!==!1&&A.indexOf(F)===-1){for(var le=A.split(k),te=0;te<le.length;te++){if(Y=le[te],_+=Y.length,te!==le.length-1)_+=k.length;else if(U)return fe();if(!T||Y.substring(0,Z)!==T){if(O){if(z=[],de(Y.split(b)),be(),L)return fe()}else de(Y.split(b));if(B&&B<=te)return z=z.slice(0,B),fe(!0)}}return fe()}for(var q=A.indexOf(b,_),D=A.indexOf(k,_),re=new RegExp(S(I)+S(F),"g"),ne=A.indexOf(F,_);;)if(A[_]===F)for(ne=_,_++;;){if((ne=A.indexOf(F,ne+1))===-1)return U||G.push({type:"Quotes",code:"MissingQuotes",message:"Quoted field unterminated",row:z.length,index:_}),Te();if(ne===K-1)return Te(A.substring(_,ne).replace(re,F));if(F===I&&A[ne+1]===I)ne++;else if(F===I||ne===0||A[ne-1]!==I){q!==-1&&q<ne+1&&(q=A.indexOf(b,ne+1));var ae=Ee((D=D!==-1&&D<ne+1?A.indexOf(k,ne+1):D)===-1?q:Math.min(q,D));if(A.substr(ne+1+ae,J)===b){Y.push(A.substring(_,ne).replace(re,F)),A[_=ne+1+ae+J]!==F&&(ne=A.indexOf(F,_)),q=A.indexOf(b,_),D=A.indexOf(k,_);break}if(ae=Ee(D),A.substring(ne+1+ae,ne+1+ae+$)===k){if(Y.push(A.substring(_,ne).replace(re,F)),ge(ne+1+ae+$),q=A.indexOf(b,_),ne=A.indexOf(F,_),O&&(be(),L))return fe();if(B&&z.length>=B)return fe(!0);break}G.push({type:"Quotes",code:"InvalidQuotes",message:"Trailing quote on quoted field is malformed",row:z.length,index:_}),ne++}}else if(T&&Y.length===0&&A.substring(_,_+Z)===T){if(D===-1)return fe();_=D+$,D=A.indexOf(k,_),q=A.indexOf(b,_)}else if(q!==-1&&(q<D||D===-1))Y.push(A.substring(_,q)),_=q+J,q=A.indexOf(b,_);else{if(D===-1)break;if(Y.push(A.substring(_,D)),ge(D+$),O&&(be(),L))return fe();if(B&&z.length>=B)return fe(!0)}return Te();function de(me){z.push(me),ee=_}function Ee(me){var Ne=0;return Ne=me!==-1&&(me=A.substring(ne+1,me))&&me.trim()===""?me.length:Ne}function Te(me){return U||(me===void 0&&(me=A.substring(_)),Y.push(me),_=K,de(Y),O&&be()),fe()}function ge(me){_=me,de(Y),Y=[],D=A.indexOf(k,_)}function fe(me){if(h.header&&!M&&z.length&&!W){var Ne=z[0],Be=Object.create(null),dt=new Set(Ne);let Le=!1;for(let Ge=0;Ge<Ne.length;Ge++){let Ze=Ne[Ge];if(Be[Ze=E(h.transformHeader)?h.transformHeader(Ze,Ge):Ze]){let zt,X=Be[Ze];for(;zt=Ze+"_"+X,X++,dt.has(zt););dt.add(zt),Ne[Ge]=zt,Be[Ze]++,Le=!0,(H=H===null?{}:H)[zt]=Ze}else Be[Ze]=1,Ne[Ge]=Ze;dt.add(Ze)}Le&&console.warn("Duplicate headers found and renamed."),W=!0}return{data:z,errors:G,meta:{delimiter:b,linebreak:k,aborted:L,truncated:!!me,cursor:ee+(M||0),renamedHeaders:H}}}function be(){R(fe()),z=[],G=[]}},this.abort=function(){L=!0},this.getCharIndex=function(){return _}}function v(h){var b=h.data,k=l[b.workerId],T=!1;if(b.error)k.userError(b.error,b.file);else if(b.results&&b.results.data){var R={abort:function(){T=!0,g(b.workerId,{data:[],errors:[],meta:{aborted:!0}})},pause:N,resume:N};if(E(k.userStep)){for(var B=0;B<b.results.data.length&&(k.userStep({data:b.results.data[B],errors:b.results.errors,meta:b.results.meta},R),!T);B++);delete b.results}else E(k.userChunk)&&(k.userChunk(b.results,R,b.file),delete b.results)}b.finished&&!T&&g(b.workerId,b.results)}function g(h,b){var k=l[h];E(k.userComplete)&&k.userComplete(b),k.terminate(),delete l[h]}function N(){throw new Error("Not implemented.")}function C(h){if(typeof h!="object"||h===null)return h;var b,k=Array.isArray(h)?[]:{};for(b in h)k[b]=C(h[b]);return k}function P(h,b){return function(){h.apply(b,arguments)}}function E(h){return typeof h=="function"}return u.parse=function(h,b){var k=(b=b||{}).dynamicTyping||!1;if(E(k)&&(b.dynamicTypingFunction=k,k={}),b.dynamicTyping=k,b.transform=!!E(b.transform)&&b.transform,!b.worker||!u.WORKERS_SUPPORTED)return k=null,u.NODE_STREAM_INPUT,typeof h=="string"?(h=(T=>T.charCodeAt(0)!==65279?T:T.slice(1))(h),k=new(b.download?p:j)(b)):h.readable===!0&&E(h.read)&&E(h.on)?k=new x(b):(s.File&&h instanceof File||h instanceof Object)&&(k=new m(b)),k.stream(h);(k=(()=>{var T;return!!u.WORKERS_SUPPORTED&&(T=(()=>{var R=s.URL||s.webkitURL||null,B=r.toString();return u.BLOB_URL||(u.BLOB_URL=R.createObjectURL(new Blob(["var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; ","(",B,")();"],{type:"text/javascript"})))})(),(T=new s.Worker(T)).onmessage=v,T.id=c++,l[T.id]=T)})()).userStep=b.step,k.userChunk=b.chunk,k.userComplete=b.complete,k.userError=b.error,b.step=E(b.step),b.chunk=E(b.chunk),b.complete=E(b.complete),b.error=E(b.error),delete b.worker,k.postMessage({input:h,config:b,workerId:k.id})},u.unparse=function(h,b){var k=!1,T=!0,R=",",B=`\r
`,Q='"',H=Q+Q,W=!1,F=null,I=!1,_=((()=>{if(typeof b=="object"){if(typeof b.delimiter!="string"||u.BAD_DELIMITERS.filter(function(M){return b.delimiter.indexOf(M)!==-1}).length||(R=b.delimiter),typeof b.quotes!="boolean"&&typeof b.quotes!="function"&&!Array.isArray(b.quotes)||(k=b.quotes),typeof b.skipEmptyLines!="boolean"&&typeof b.skipEmptyLines!="string"||(W=b.skipEmptyLines),typeof b.newline=="string"&&(B=b.newline),typeof b.quoteChar=="string"&&(Q=b.quoteChar),typeof b.header=="boolean"&&(T=b.header),Array.isArray(b.columns)){if(b.columns.length===0)throw new Error("Option columns is empty");F=b.columns}b.escapeChar!==void 0&&(H=b.escapeChar+Q),b.escapeFormulae instanceof RegExp?I=b.escapeFormulae:typeof b.escapeFormulae=="boolean"&&b.escapeFormulae&&(I=/^[=+\-@\t\r].*$/)}})(),new RegExp(S(Q),"g"));if(typeof h=="string"&&(h=JSON.parse(h)),Array.isArray(h)){if(!h.length||Array.isArray(h[0]))return L(null,h,W);if(typeof h[0]=="object")return L(F||Object.keys(h[0]),h,W)}else if(typeof h=="object")return typeof h.data=="string"&&(h.data=JSON.parse(h.data)),Array.isArray(h.data)&&(h.fields||(h.fields=h.meta&&h.meta.fields||F),h.fields||(h.fields=Array.isArray(h.data[0])?h.fields:typeof h.data[0]=="object"?Object.keys(h.data[0]):[]),Array.isArray(h.data[0])||typeof h.data[0]=="object"||(h.data=[h.data])),L(h.fields||[],h.data||[],W);throw new Error("Unable to serialize unrecognized input");function L(M,U,K){var J="",$=(typeof M=="string"&&(M=JSON.parse(M)),typeof U=="string"&&(U=JSON.parse(U)),Array.isArray(M)&&0<M.length),Z=!Array.isArray(U[0]);if($&&T){for(var O=0;O<M.length;O++)0<O&&(J+=R),J+=A(M[O],O);0<U.length&&(J+=B)}for(var z=0;z<U.length;z++){var G=($?M:U[z]).length,Y=!1,ee=$?Object.keys(U[z]).length===0:U[z].length===0;if(K&&!$&&(Y=K==="greedy"?U[z].join("").trim()==="":U[z].length===1&&U[z][0].length===0),K==="greedy"&&$){for(var le=[],te=0;te<G;te++){var q=Z?M[te]:te;le.push(U[z][q])}Y=le.join("").trim()===""}if(!Y){for(var D=0;D<G;D++){0<D&&!ee&&(J+=R);var re=$&&Z?M[D]:D;J+=A(U[z][re],D)}z<U.length-1&&(!K||0<G&&!ee)&&(J+=B)}}return J}function A(M,U){var K,J;return M==null?"":M.constructor===Date?JSON.stringify(M).slice(1,25):(J=!1,I&&typeof M=="string"&&I.test(M)&&(M="'"+M,J=!0),K=M.toString().replace(_,H),(J=J||k===!0||typeof k=="function"&&k(M,U)||Array.isArray(k)&&k[U]||(($,Z)=>{for(var O=0;O<Z.length;O++)if(-1<$.indexOf(Z[O]))return!0;return!1})(K,u.BAD_DELIMITERS)||-1<K.indexOf(R)||K.charAt(0)===" "||K.charAt(K.length-1)===" ")?Q+K+Q:K)}},u.RECORD_SEP=String.fromCharCode(30),u.UNIT_SEP=String.fromCharCode(31),u.BYTE_ORDER_MARK="\uFEFF",u.BAD_DELIMITERS=["\r",`
`,'"',u.BYTE_ORDER_MARK],u.WORKERS_SUPPORTED=!i&&!!s.Worker,u.NODE_STREAM_INPUT=1,u.LocalChunkSize=10485760,u.RemoteChunkSize=5242880,u.DefaultDelimiter=",",u.Parser=y,u.ParserHandle=w,u.NetworkStreamer=p,u.FileStreamer=m,u.StringStreamer=j,u.ReadableStreamStreamer=x,s.jQuery&&((a=s.jQuery).fn.parse=function(h){var b=h.config||{},k=[];return this.each(function(B){if(!(a(this).prop("tagName").toUpperCase()==="INPUT"&&a(this).attr("type").toLowerCase()==="file"&&s.FileReader)||!this.files||this.files.length===0)return!0;for(var Q=0;Q<this.files.length;Q++)k.push({file:this.files[Q],inputElem:this,instanceConfig:a.extend({},b)})}),T(),this;function T(){if(k.length===0)E(h.complete)&&h.complete();else{var B,Q,H,W,F=k[0];if(E(h.before)){var I=h.before(F.file,F.inputElem);if(typeof I=="object"){if(I.action==="abort")return B="AbortError",Q=F.file,H=F.inputElem,W=I.reason,void(E(h.error)&&h.error({name:B},Q,H,W));if(I.action==="skip")return void R();typeof I.config=="object"&&(F.instanceConfig=a.extend(F.instanceConfig,I.config))}else if(I==="skip")return void R()}var _=F.instanceConfig.complete;F.instanceConfig.complete=function(L){E(_)&&_(L,F.file,F.inputElem),R()},u.parse(F.file,F.instanceConfig)}}function R(){k.splice(0,1),T()}}),o&&(s.onmessage=function(h){h=h.data,u.WORKER_ID===void 0&&h&&(u.WORKER_ID=h.workerId),typeof h.input=="string"?s.postMessage({workerId:u.WORKER_ID,results:u.parse(h.input,h.config),finished:!0}):(s.File&&h.input instanceof File||h.input instanceof Object)&&(h=u.parse(h.input,h.config))&&s.postMessage({workerId:u.WORKER_ID,results:h,finished:!0})}),(p.prototype=Object.create(f.prototype)).constructor=p,(m.prototype=Object.create(f.prototype)).constructor=m,(j.prototype=Object.create(j.prototype)).constructor=j,(x.prototype=Object.create(f.prototype)).constructor=x,u})})(Sm);var Kx=Sm.exports;const ur=Kd(Kx);function Si({startRect:e,targetRef:t,count:r=12,onDone:s}){return d.useEffect(()=>{const a=t==null?void 0:t.current;if(!e||!a){s==null||s();return}const i=a.getBoundingClientRect(),o=document.createElement("div");o.style.position="fixed",o.style.inset="0",o.style.pointerEvents="none",o.style.zIndex="9999",document.body.appendChild(o);const l=i.left+i.width/2,c=i.top+i.height/2,u=e.left+e.width/2,f=e.top+e.height/2,p=200;let m=0;function j(x){const w=document.createElement("div");w.textContent="🪙",Object.assign(w.style,{position:"fixed",left:"0px",top:"0px",zIndex:"10000",pointerEvents:"none",fontSize:"22px",opacity:"1",willChange:"transform, opacity",transform:"translate(0px, 0px)"});const S=u,y=f,v=l,g=c;w.style.transform=`translate(${S}px, ${y}px) scale(1)`,o.appendChild(w),w.getBoundingClientRect(),w.style.transition=`transform ${p}ms cubic-bezier(.2,.8,.2,1), opacity ${p}ms linear`,requestAnimationFrame(()=>{w.style.transform=`translate(${v}px, ${g}px) scale(.6)`,w.style.opacity="0.1"}),setTimeout(()=>{w.remove(),m+=1,m===r&&(o.remove(),s==null||s())},p+50)}for(let x=0;x<r;x++)setTimeout(()=>j(),x*60);return()=>{try{o.remove()}catch{}}},[e,t,r,s]),null}const ht={XP_PER_CORRECT:10,XP_PER_LEVEL:100,MAX_LEVEL:100,COINS_PER_CORRECT:5,MAX_ENERGY:5,ENERGY_REGEN_TIME:36e5,ENERGY_COST:{quiz:1,practice:0,daily:0},COMBO_MULTIPLIERS:{2:{multiplier:1.2,text:"Nice!"},3:{multiplier:1.5,text:"Great!"},5:{multiplier:2,text:"On Fire!"},10:{multiplier:3,text:"Legendary!"}},AVATARS:[{id:"wizard",emoji:"🧙",name:"Knowledge Wizard",unlockLevel:1,bgColor:"from-purple-500 to-indigo-500"},{id:"knight",emoji:"⚔️",name:"Quiz Knight",unlockLevel:1,bgColor:"from-blue-500 to-cyan-500"},{id:"explorer",emoji:"🗺️",name:"Fact Explorer",unlockLevel:5,bgColor:"from-green-500 to-emerald-500"},{id:"scientist",emoji:"🔬",name:"Science Master",unlockLevel:10,bgColor:"from-orange-500 to-red-500"},{id:"artist",emoji:"🎨",name:"Creative Mind",unlockLevel:15,bgColor:"from-pink-500 to-rose-500"}],STORAGE_KEYS:{PLAYER:"qp_player",GAME_STATE:"qp_game_state",ENERGY:"qp_energy",CURRENT_COMBO:"qp_combo"}},Pd=e=>Math.floor(e/ht.XP_PER_LEVEL)+1,Vx=e=>{const t=e%ht.XP_PER_LEVEL;return{current:t,required:ht.XP_PER_LEVEL,percentage:t/ht.XP_PER_LEVEL*100}};function Xx({player:e,size:t="normal",showLevel:r=!0,showName:s=!0}){const a=ht.AVATARS.find(o=>o.id===e.avatar)||ht.AVATARS[0],i={small:"w-10 h-10 text-xl",normal:"w-14 h-14 text-2xl",large:"w-20 h-20 text-4xl"};return n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsxs("div",{className:"relative",children:[n.jsx("div",{className:`${i[t]} rounded-full bg-gradient-to-br ${a.bgColor} flex items-center justify-center shadow-lg`,children:n.jsx("span",{children:a.emoji})}),r&&n.jsx("div",{className:"absolute -bottom-1 -right-1 bg-yellow-500 text-black text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center border-2 border-base-bg",children:e.level})]}),s&&n.jsxs("div",{children:[n.jsx("div",{className:"font-bold text-sm",children:(()=>{const o=JSON.parse(localStorage.getItem("currentUser")||"{}");return o.username?o.username.split(" ")[0]:e.name})()}),n.jsx("div",{className:"text-xs text-base-muted",children:a.name})]})]})}function Jx({current:e,required:t,level:r,animate:s=!0}){const[a,i]=d.useState(0),o=e/t*100;return d.useEffect(()=>{if(s){const l=setTimeout(()=>{i(o)},100);return()=>clearTimeout(l)}else i(o)},[o,s]),n.jsxs("div",{className:"w-full",children:[n.jsxs("div",{className:"flex justify-between items-center mb-1",children:[n.jsxs("span",{className:"text-xs font-medium",children:["Level ",r]}),n.jsxs("span",{className:"text-xs text-base-muted",children:[e,"/",t," XP"]})]}),n.jsx("div",{className:"h-2 bg-black/20 rounded-full overflow-hidden",children:n.jsx("div",{className:"h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-700 ease-out relative",style:{width:`${a}%`},children:n.jsx("div",{className:"absolute inset-0 bg-white/20 animate-pulse"})})})]})}const Cm=[{name:"GK",slug:"general-knowledge",questions:50,icon:"🧠",color:"#FF6B6B",gradient:"from-red-500 to-pink-500"},{name:"Science",slug:"science",questions:45,icon:"🧪",color:"#4ECDC4",gradient:"from-cyan-500 to-teal-500"},{name:"Fun Facts",slug:"fun-facts",questions:30,icon:"🎉",color:"#FFD93D",gradient:"from-yellow-400 to-orange-500"},{name:"History",slug:"history",questions:42,icon:"🏺",color:"#A8E6CF",gradient:"from-green-400 to-emerald-500"},{name:"AI & Tech",slug:"artificial-intelligence",questions:28,icon:"🤖",color:"#C7B8FF",gradient:"from-purple-400 to-indigo-500"},{name:"More",slug:"more",questions:0,icon:"✨",color:"#FF8CC3",gradient:"from-pink-400 to-rose-500"}],Em=[{name:"Geography",slug:"geography",questions:38,icon:"🗺️",color:"#FACC15",gradient:"from-yellow-400 to-amber-500"},{name:"Computer",slug:"computer",questions:34,icon:"💻",color:"#3B82F6",gradient:"from-blue-400 to-blue-600"},{name:"Aptitude",slug:"aptitude",questions:36,icon:"📐",color:"#EC4899",gradient:"from-pink-500 to-rose-500"},{name:"Iconic Figures",slug:"iconic-figures",questions:26,icon:"🌟",color:"#8B5CF6",gradient:"from-purple-500 to-violet-600"}],Pm=[...Cm.filter(e=>e.slug!=="more"),...Em];function Zx({onClick:e}){return n.jsxs("div",{className:"relative overflow-hidden rounded-3xl p-8 mb-6 cursor-pointer transform transition-all hover:scale-[1.02]",style:{background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",boxShadow:"0 10px 40px rgba(102, 126, 234, 0.3)",animation:"pulse 3s infinite"},onClick:e,children:[n.jsx("div",{className:"absolute top-[-50px] right-[-50px] w-[200px] h-[200px] rounded-full bg-white/10",style:{animation:"float 4s ease-in-out infinite"}}),n.jsx("div",{className:"absolute bottom-[-30px] left-[-30px] w-[150px] h-[150px] rounded-full bg-white/10",style:{animation:"float 4s ease-in-out infinite reverse"}}),n.jsx("h2",{className:"text-3xl font-bold mb-2",children:"🎰 Spin & Win"}),n.jsx("p",{className:"text-base opacity-90 mb-4",children:"Test your luck, win amazing prizes!"}),n.jsx("div",{className:"inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium",style:{background:"linear-gradient(90deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0.3) 100%)",backgroundSize:"200% auto",animation:"shimmer 2s linear infinite"},children:"Play Now →"})]})}function eg({actions:e}){return n.jsx("div",{className:"grid grid-cols-4 gap-3 mb-8",children:e.map((t,r)=>n.jsxs("button",{onClick:t.action,className:`${t.color} aspect-square rounded-2xl flex flex-col items-center justify-center gap-1 transform transition-all hover:scale-105`,children:[n.jsx("div",{className:"text-2xl",children:t.icon}),n.jsx("div",{className:"text-[10px] font-medium text-white",children:t.label})]},r))})}function tg({categories:e,onCategorySelect:t}){return n.jsxs("div",{className:"mb-6",children:[n.jsx("h3",{className:"text-lg font-bold mb-4",children:"Choose Your Adventure"}),n.jsx("div",{className:"grid grid-cols-3 gap-3",children:e.map(r=>n.jsxs("button",{onClick:()=>t(r),className:`bg-gradient-to-br ${r.gradient} aspect-square rounded-2xl p-4 flex flex-col items-center justify-center gap-2 transform transition-all hover:scale-105 hover:shadow-lg relative`,children:[n.jsx("div",{className:"text-3xl",children:r.icon}),n.jsx("div",{className:"text-xs font-bold text-white text-center",children:r.name}),r.questions>0&&n.jsxs("div",{className:"text-[10px] bg-white/20 px-2 py-0.5 rounded-full",children:[r.questions," Qs"]})]},r.name))})]})}function ng({onClick:e,isPulsing:t}){return n.jsxs("button",{onClick:e,className:`w-full rounded-2xl p-5 flex justify-between items-center transition-all ${t?"bg-green-500/20 border-2 border-green-500 animate-pulse":"bg-white/5 border border-base-border hover:bg-white/10"}`,children:[n.jsxs("div",{className:"flex items-center gap-4",children:[n.jsx("div",{className:"w-12 h-12 bg-gradient-to-br from-green-400 to-teal-500 rounded-xl grid place-items-center text-2xl",children:"📚"}),n.jsxs("div",{className:"text-left",children:[n.jsx("div",{className:"font-medium",children:"Practice Mode"}),n.jsx("div",{className:"text-xs text-base-muted",children:"No timer • No energy cost • Learn at your pace"})]})]}),n.jsx("div",{className:"text-xl",children:"→"})]})}function rg({dailyQ:e,isFlipped:t,picked:r,onAnswer:s,dailyCompleted:a,DAILY_Q_COINS:i,DAILY_Q_XP:o}){return a?n.jsx("div",{className:"rounded-3xl bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/30 p-6 mb-6",children:n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsx("span",{className:"text-3xl",children:"✅"}),n.jsxs("div",{children:[n.jsx("h3",{className:"font-bold",children:"Daily Challenge Complete!"}),n.jsx("p",{className:"text-sm text-base-muted",children:"Come back tomorrow for a new challenge"})]})]})}):e?n.jsx("div",{className:"flip-card mb-6",children:n.jsxs("div",{className:`flip-card-inner ${t?"flipped":""}`,children:[n.jsx("div",{className:"flip-card-front",children:n.jsxs("div",{className:"rounded-3xl bg-white/5 border border-base-border p-6",children:[n.jsxs("div",{className:"flex justify-between items-center mb-4",children:[n.jsx("h3",{className:"text-lg font-bold",children:"🎯 Daily Challenge"}),n.jsxs("span",{className:"px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-xs font-medium",children:["+",i," coins +",o," XP"]})]}),n.jsx("p",{className:"text-sm mb-4 text-base-muted",children:e.prompt}),n.jsx("div",{className:"grid grid-cols-2 gap-3",children:e.options.map((l,c)=>{const u=c===e.answerIndex,f=r===c,p=r!==null;return n.jsx("button",{onClick:m=>s(c,m),disabled:r!==null,className:`p-3 rounded-xl border-2 text-sm font-medium transition-all ${p?u?"border-green-500 bg-green-500/20":f?"border-red-500 bg-red-500/20":"border-base-border bg-white/5":"border-base-border bg-white/5 hover:bg-white/10"} ${r!==null?"cursor-not-allowed":"cursor-pointer"}`,children:l},c)})})]})}),n.jsx("div",{className:"flip-card-back absolute inset-0",children:n.jsxs("div",{className:"rounded-3xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/30 p-6 h-full flex flex-col items-center justify-center",children:[n.jsx("div",{className:"text-6xl mb-4",style:{animation:"float 2s ease-in-out infinite"},children:"🎉"}),n.jsx("h3",{className:"text-2xl font-bold text-green-400 mb-2",children:"Awesome!"}),n.jsxs("p",{className:"text-sm text-base-muted text-center",children:["You've earned ",i," coins & ",o," XP!"]}),n.jsx("p",{className:"text-xs text-base-muted/70 mt-2",children:"Come back tomorrow for more"})]})})]})}):null}function sg({show:e,onClose:t,player:r,changeAvatar:s,GAME_CONSTANTS:a}){return e?n.jsx("div",{className:"fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4",onClick:i=>{i.target===i.currentTarget&&t()},children:n.jsxs("div",{className:"bg-base-card rounded-3xl p-6 w-full max-w-md border border-base-border max-h-[80vh] overflow-y-auto",onClick:i=>i.stopPropagation(),children:[n.jsxs("div",{className:"flex justify-between items-center mb-4",children:[n.jsx("h3",{className:"text-xl font-bold",children:"Choose Your Avatar"}),n.jsx("button",{onClick:t,className:"w-8 h-8 rounded-lg bg-white/5 border border-base-border grid place-items-center hover:bg-white/10 transition",children:"✕"})]}),n.jsx("div",{className:"grid grid-cols-2 gap-4",children:a.AVATARS.map(i=>{const o=!r.unlockedAvatars||!r.unlockedAvatars.includes(i.id),l=r.avatar===i.id;return n.jsxs("button",{onClick:()=>{o||(s(i.id),t())},className:`p-4 rounded-2xl border-2 transition-all ${l?"border-brand-blue bg-brand-blue/20":o?"border-gray-600 bg-gray-800/50 opacity-50":"border-base-border bg-white/5 hover:bg-white/10"}`,disabled:o,children:[n.jsx("div",{className:`text-4xl mb-2 ${o?"grayscale":""}`,children:i.emoji}),n.jsx("div",{className:"text-sm font-medium",children:i.name}),o&&n.jsxs("div",{className:"text-xs text-gray-400 mt-1",children:["Unlock at Level ",i.unlockLevel]}),l&&n.jsx("div",{className:"text-xs text-brand-blue mt-1",children:"Current"})]},i.id)})})]})}):null}function ag({show:e,onClose:t,categories:r,onCategorySelect:s}){return e?n.jsx("div",{className:"fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4",onClick:a=>{a.target===a.currentTarget&&t()},children:n.jsxs("div",{className:"bg-base-card rounded-3xl p-6 w-full max-w-md border border-base-border",onClick:a=>a.stopPropagation(),children:[n.jsxs("div",{className:"flex justify-between items-center mb-4",children:[n.jsx("h3",{className:"text-xl font-bold",children:"More categories"}),n.jsx("button",{onClick:t,className:"w-8 h-8 rounded-lg bg-white/5 border border-base-border grid place-items-center hover:bg-white/10 transition",children:"✕"})]}),n.jsx("div",{className:"grid grid-cols-2 gap-3 mb-4",children:r.map(a=>n.jsxs("button",{onClick:()=>{t(),s(a)},className:`bg-gradient-to-br ${a.gradient} p-4 rounded-2xl flex flex-col items-center gap-2 hover:scale-105 transition-transform relative`,children:[n.jsx("div",{className:"text-3xl",children:a.icon}),n.jsx("div",{className:"text-sm font-bold text-white",children:a.name}),n.jsxs("div",{className:"text-xs text-white/80",children:[a.questions," questions"]})]},a.name))})]})}):null}function ig({show:e,onClose:t,coins:r,onNavigateToPlay:s}){return e?n.jsx("div",{className:"fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4",onClick:a=>{a.target===a.currentTarget&&t()},children:n.jsxs("div",{className:"bg-base-card rounded-3xl p-6 w-full max-w-md border border-base-border relative overflow-hidden",onClick:a=>a.stopPropagation(),children:[n.jsx("div",{className:"absolute inset-0 opacity-10",children:n.jsx("div",{className:"magic-gradient h-full"})}),n.jsxs("div",{className:"relative",children:[n.jsxs("div",{className:"flex items-center justify-between mb-6",children:[n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsx("div",{className:"coin-3d text-5xl",style:{animation:"coinRotate 2s linear infinite, glow 2s ease-in-out infinite"},children:"🪙"}),n.jsxs("div",{children:[n.jsx("h3",{className:"text-2xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent",children:"Your Treasure"}),n.jsxs("p",{className:"text-3xl font-bold text-white mt-1",children:[ce.getCoins()," Coins"]})]})]}),n.jsx("button",{onClick:t,className:"w-8 h-8 rounded-lg bg-white/5 border border-base-border grid place-items-center hover:bg-white/10 transition",children:"✕"})]}),n.jsxs("div",{className:"mb-6",children:[n.jsx("h4",{className:"text-sm font-medium text-base-muted mb-3",children:"Ways to Earn"}),n.jsxs("div",{className:"space-y-3",children:[n.jsx("div",{className:"p-4 rounded-xl bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 hover:scale-[1.02] transition-transform",children:n.jsxs("div",{className:"flex items-center justify-between",children:[n.jsxs("div",{children:[n.jsxs("div",{className:"font-medium flex items-center gap-2",children:[n.jsx("span",{className:"text-2xl",children:"✅"}),"Complete Quizzes"]}),n.jsx("div",{className:"text-xs text-base-muted mt-1",children:"+5 coins per correct answer"})]}),n.jsx("div",{className:"text-green-400 font-bold",children:"+5"})]})}),n.jsx("div",{className:"p-4 rounded-xl bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 hover:scale-[1.02] transition-transform",children:n.jsxs("div",{className:"flex items-center justify-between",children:[n.jsxs("div",{children:[n.jsxs("div",{className:"font-medium flex items-center gap-2",children:[n.jsx("span",{className:"text-2xl",children:"🎯"}),"Daily Challenge"]}),n.jsx("div",{className:"text-xs text-base-muted mt-1",children:"Complete daily for bonus"})]}),n.jsx("div",{className:"text-blue-400 font-bold",children:"+5"})]})}),n.jsx("div",{className:"p-4 rounded-xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 hover:scale-[1.02] transition-transform",children:n.jsxs("div",{className:"flex items-center justify-between",children:[n.jsxs("div",{children:[n.jsxs("div",{className:"font-medium flex items-center gap-2",children:[n.jsx("span",{className:"text-2xl",children:"🎰"}),"Spin & Play"]}),n.jsx("div",{className:"text-xs text-base-muted mt-1",children:"Test your luck!"})]}),n.jsx("div",{className:"text-purple-400 font-bold",children:"+50"})]})}),n.jsx("div",{className:"p-4 rounded-xl bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/20 hover:scale-[1.02] transition-transform",children:n.jsxs("div",{className:"flex items-center justify-between",children:[n.jsxs("div",{children:[n.jsxs("div",{className:"font-medium flex items-center gap-2",children:[n.jsx("span",{className:"text-2xl",children:"🏆"}),"Achievements"]}),n.jsx("div",{className:"text-xs text-base-muted mt-1",children:"Unlock special rewards"})]}),n.jsx("div",{className:"text-orange-400 font-bold",children:"+???"})]})})]})]}),n.jsxs("div",{className:"mb-6",children:[n.jsxs("div",{className:"flex justify-between text-xs text-base-muted mb-2",children:[n.jsx("span",{children:"Next reward"}),n.jsxs("span",{children:[100-r%100," coins to go"]})]}),n.jsx("div",{className:"h-2 bg-white/10 rounded-full overflow-hidden",children:n.jsx("div",{className:"h-full bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full transition-all",style:{width:`${r%100}%`}})})]}),n.jsx("button",{onClick:s,className:"w-full py-3 rounded-xl bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-bold hover:scale-[1.02] transition-transform shadow-lg",style:{boxShadow:"0 10px 30px rgba(251, 191, 36, 0.3)"},children:"Start Earning Now! 🚀"})]})]})}):null}function og({show:e,onClose:t,selectedCategory:r,difficulty:s,setDifficulty:a,count:i,setCount:o,timer:l,setTimer:c,onStart:u}){return!e||!r?null:n.jsx("div",{className:"fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4",onClick:f=>{f.target===f.currentTarget&&t()},children:n.jsxs("div",{className:"bg-base-card rounded-3xl p-6 w-full max-w-md border border-base-border",onClick:f=>f.stopPropagation(),children:[n.jsxs("div",{className:"flex justify-between items-center mb-4",children:[n.jsx("h3",{className:"text-xl font-bold",children:"Quiz Mode"}),n.jsx("button",{onClick:t,className:"w-8 h-8 rounded-lg bg-white/5 border border-base-border grid place-items-center hover:bg-white/10 transition",children:"✕"})]}),n.jsx("div",{className:"mb-4 p-3 rounded-xl bg-blue-500/10 border border-blue-500/30",children:n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsx("div",{className:"text-2xl",children:r.icon}),n.jsxs("div",{children:[n.jsxs("div",{className:"font-medium",children:["Category: ",r.name]}),n.jsxs("div",{className:"text-xs text-base-muted",children:[r.questions," questions available"]})]})]})}),n.jsxs("div",{className:"mb-4",children:[n.jsx("label",{className:"text-sm text-base-muted mb-2 block",children:"Difficulty"}),n.jsx("div",{className:"grid grid-cols-3 gap-2",children:["easy","medium","hard"].map(f=>n.jsx("button",{onClick:()=>a(f),className:`py-2 rounded-xl border ${s===f?"bg-brand-blue/30 border-brand-blue":"bg-white/5 border-base-border"}`,children:f.charAt(0).toUpperCase()+f.slice(1)},f))})]}),n.jsxs("div",{className:"mb-4",children:[n.jsx("label",{className:"text-sm text-base-muted mb-2 block",children:"Questions"}),n.jsx("div",{className:"grid grid-cols-4 gap-2",children:[5,10,20,30].map(f=>n.jsx("button",{onClick:()=>o(f),className:`py-2 rounded-xl border ${i===f?"bg-brand-blue/30 border-brand-blue":"bg-white/5 border-base-border"}`,children:f},f))})]}),n.jsxs("div",{className:"mb-6",children:[n.jsx("label",{className:"text-sm text-base-muted mb-2 block",children:"Timer (seconds per question)"}),n.jsx("input",{type:"number",value:l,onChange:f=>c(Number(f.target.value)||45),min:10,max:120,className:"w-full px-4 py-2 rounded-xl bg-white/5 border border-base-border"})]}),n.jsxs("div",{className:"flex gap-3",children:[n.jsx("button",{onClick:t,className:"flex-1 py-3 rounded-xl border border-base-border bg-white/5",children:"Cancel"}),n.jsx("button",{onClick:u,className:"flex-1 py-3 rounded-xl bg-gradient-to-r from-brand-blue to-brand-purple text-white font-medium",children:"Start Quiz"})]})]})})}function lg({show:e,onClose:t,allCategories:r,category:s,setCategory:a,difficulty:i,setDifficulty:o,count:l,setCount:c,onStart:u}){return e?n.jsx("div",{className:"fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4",onClick:f=>{f.target===f.currentTarget&&t()},children:n.jsxs("div",{className:"bg-base-card rounded-3xl p-6 w-full max-w-md border border-base-border max-h-[90vh] overflow-y-auto",onClick:f=>f.stopPropagation(),children:[n.jsxs("div",{className:"flex justify-between items-center mb-4",children:[n.jsx("h3",{className:"text-xl font-bold",children:"Practice Mode"}),n.jsx("button",{onClick:t,className:"w-8 h-8 rounded-lg bg-white/5 border border-base-border grid place-items-center hover:bg-white/10 transition",children:"✕"})]}),n.jsxs("div",{className:"mb-4",children:[n.jsx("label",{className:"text-sm text-base-muted mb-2 block",children:"Category"}),n.jsx("div",{className:"grid grid-cols-3 gap-2 max-h-[200px] overflow-y-auto",children:r.map(f=>n.jsxs("button",{onClick:()=>a(f.slug),className:`p-3 rounded-xl border flex flex-col items-center gap-1 ${s===f.slug?"bg-brand-blue/30 border-brand-blue":"bg-white/5 border-base-border"}`,children:[n.jsx("div",{className:"text-xl",children:f.icon}),n.jsx("div",{className:"text-[10px] text-center",children:f.name})]},f.slug))})]}),n.jsxs("div",{className:"mb-4",children:[n.jsx("label",{className:"text-sm text-base-muted mb-2 block",children:"Difficulty"}),n.jsx("div",{className:"grid grid-cols-3 gap-2",children:["easy","medium","hard"].map(f=>n.jsx("button",{onClick:()=>o(f),className:`py-2 rounded-xl border ${i===f?"bg-brand-blue/30 border-brand-blue":"bg-white/5 border-base-border"}`,children:f.charAt(0).toUpperCase()+f.slice(1)},f))})]}),n.jsxs("div",{className:"mb-6",children:[n.jsx("label",{className:"text-sm text-base-muted mb-2 block",children:"Questions"}),n.jsx("div",{className:"grid grid-cols-4 gap-2",children:[5,10,20,30].map(f=>n.jsx("button",{onClick:()=>c(f),className:`py-2 rounded-xl border ${l===f?"bg-brand-blue/30 border-brand-blue":"bg-white/5 border-base-border"}`,children:f},f))})]}),n.jsxs("div",{className:"flex gap-3",children:[n.jsx("button",{onClick:t,className:"flex-1 py-3 rounded-xl border border-base-border bg-white/5",children:"Cancel"}),n.jsx("button",{onClick:u,className:"flex-1 py-3 rounded-xl bg-gradient-to-r from-brand-blue to-brand-purple text-white font-medium",children:"Start Practice"})]})]})}):null}function cg({player:e,onContinue:t}){const[r,s]=d.useState(()=>sessionStorage.getItem("justSignedUp")==="true"?(sessionStorage.removeItem("justSignedUp"),!1):sessionStorage.getItem("welcomeShown")!=="true"),[a,i]=d.useState(!1),[o,l]=d.useState(!1),[c,u]=d.useState(""),[f,p]=d.useState(""),[m,j]=d.useState("Champion"),[x,w]=d.useState(1),[S,y]=d.useState(0),[v,g]=d.useState(0),N=()=>{try{const h=new Audio("/sounds/welcome.mp3");h.volume=.6,h.play()}catch{console.log("Welcome sound not available")}},C=()=>{navigator.vibrate&&navigator.vibrate([100,50,100])};d.useEffect(()=>{if((()=>{const B=JSON.parse(localStorage.getItem("currentUser")||"{}");let Q="Champion",H=1,W=0,F=0;if(B.phone){const _=JSON.parse(localStorage.getItem(`user_profile_${B.phone}`)||"{}"),A=JSON.parse(localStorage.getItem("users")||"{}")[B.phone]||{};_.name?Q=_.name.split(" ")[0]:A.username?Q=A.username.split(" ")[0]:B.username&&(Q=B.username.split(" ")[0]),Q&&Q!=="Champion"&&(Q=Q.charAt(0).toUpperCase()+Q.slice(1).toLowerCase())}else B.username&&(Q=B.username.split(" ")[0]);const I=JSON.parse(localStorage.getItem("qp_player")||"{}");H=(e==null?void 0:e.level)||I.level||1,W=ce.getCoins(),F=(e==null?void 0:e.currentStreak)||I.currentStreak||0,Q!=="Champion"&&Q!==I.name&&(I.name=Q,localStorage.setItem("qp_player",JSON.stringify(I))),j(Q),w(H),y(W),g(F)})(),!r){t();return}sessionStorage.setItem("welcomeShown","true"),document.body.classList.add("hide-bottom-nav"),N(),C();const b=["🦉","🐧","🦝","🦜","🦕","🐙","🦊","🐸","🦁","🐨"];p(b[Math.floor(Math.random()*b.length)]);const k=setInterval(()=>{l(B=>!B)},2e3),T=["🎯 New challenges await!","🏆 Ready to be a champion?","🌟 Your brain adventure starts now!","🎨 Time for fun learning!","🎪 The quiz circus is open!","🚀 Blast off to knowledge!","🎭 Let's play and learn!","🌈 Rainbow of questions ahead!"];u(T[Math.floor(Math.random()*T.length)]);const R=setInterval(()=>{u(T[Math.floor(Math.random()*T.length)])},3e3);return()=>{document.body.classList.remove("hide-bottom-nav"),clearInterval(k),clearInterval(R)}},[r,t,e]);const P=()=>{try{const h=new Audio("/sounds/tap.mp3");h.volume=.5,h.play()}catch{console.log("Click sound not available")}navigator.vibrate&&navigator.vibrate(20),i(!0),document.body.classList.remove("hide-bottom-nav"),setTimeout(()=>{s(!1),t()},400)};if(!r)return null;const E=()=>{const h=new Date().getHours();return h<12?"Good morning":h<17?"Good afternoon":"Good evening"};return n.jsxs("div",{className:`fixed inset-0 z-50 flex items-center justify-center transition-all duration-500
      ${a?"opacity-0 scale-95":"opacity-100 scale-100"}`,children:[n.jsx("div",{className:"absolute inset-0",style:{background:"linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #fda085 75%, #f5a375 90%, #e08060 100%)"}}),n.jsxs("div",{className:"absolute inset-0 overflow-hidden",children:[[{top:"10%",left:"15%",size:"24px",delay:"0s"},{top:"20%",left:"75%",size:"20px",delay:"0.5s"},{top:"15%",left:"45%",size:"28px",delay:"1s"},{top:"30%",left:"85%",size:"22px",delay:"1.5s"},{top:"8%",left:"60%",size:"26px",delay:"2s"}].map((h,b)=>n.jsx("div",{className:"absolute animate-twinkle",style:{top:h.top,left:h.left,fontSize:h.size,animationDelay:h.delay},children:"⭐"},`star-${b}`)),n.jsxs("div",{className:"absolute top-10 left-0 w-full",children:[n.jsx("div",{className:"cloud cloud1",children:"☁️"}),n.jsx("div",{className:"cloud cloud2",children:"☁️"})]})]}),n.jsxs("div",{className:"relative z-10 text-center px-6 w-full max-w-sm mx-auto",children:[n.jsx("div",{className:`text-8xl mb-4 transition-transform duration-500 ${o?"scale-110 rotate-6":"scale-100 rotate-0"}`,children:f}),n.jsxs("div",{className:"relative rounded-3xl px-6 py-4 mb-6 shadow-xl overflow-hidden",children:[n.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100"}),n.jsx("div",{className:"absolute -top-3 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-br from-purple-100 to-pink-100 rotate-45"}),n.jsxs("div",{className:"relative",children:[n.jsxs("h1",{className:"text-3xl font-bold text-purple-800",children:["Hello, ",m,"! 👋"]}),n.jsx("p",{className:"text-sm text-purple-600 mt-1",children:E()})]})]}),n.jsxs("div",{className:"grid grid-cols-3 gap-3 mb-6",children:[n.jsxs("div",{className:"relative rounded-2xl p-3 transform hover:scale-105 transition-transform overflow-hidden",children:[n.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-yellow-200 via-yellow-100 to-orange-100"}),n.jsxs("div",{className:"relative",children:[n.jsx("div",{className:"text-3xl mb-1",children:"⭐"}),n.jsx("div",{className:"text-2xl font-bold text-orange-800",children:x}),n.jsx("div",{className:"text-xs text-orange-600",children:"Level"})]})]}),n.jsxs("div",{className:"relative rounded-2xl p-3 transform hover:scale-105 transition-transform overflow-hidden",children:[n.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-blue-200 via-cyan-100 to-teal-100"}),n.jsxs("div",{className:"relative",children:[n.jsx("div",{className:"text-3xl mb-1",children:"🪙"}),n.jsx("div",{className:"text-2xl font-bold text-teal-800",children:S}),n.jsx("div",{className:"text-xs text-teal-600",children:"Coins"})]})]}),n.jsxs("div",{className:"relative rounded-2xl p-3 transform hover:scale-105 transition-transform overflow-hidden",children:[n.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-orange-200 via-red-100 to-pink-100"}),n.jsxs("div",{className:"relative",children:[n.jsx("div",{className:"text-3xl mb-1",children:"🔥"}),n.jsx("div",{className:"text-2xl font-bold text-orange-800",children:v}),n.jsx("div",{className:"text-xs text-orange-600",children:"Streak"})]})]})]}),n.jsx("div",{className:"h-4"}),n.jsx("div",{className:"text-white/90 font-medium animate-fade-slide mb-6",children:c}),n.jsxs("button",{onClick:P,className:"group relative w-full",children:[n.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 rounded-full blur-lg opacity-75 group-hover:opacity-100 transition-opacity"}),n.jsxs("div",{className:`relative bg-gradient-to-r from-green-400 to-blue-500 text-white py-5 px-8 rounded-full font-bold text-xl shadow-2xl 
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
      `})]})}const Td=(e=new Date)=>e.toLocaleDateString("en-CA"),Rd=(e,t=null)=>{try{const r=localStorage.getItem(e);return r?JSON.parse(r):t}catch{return t}},dg=(e,t)=>localStorage.setItem(e,JSON.stringify(t));function _d(){const[e,t]=d.useState(()=>{const ge=sessionStorage.getItem("justSignedUp"),fe=sessionStorage.getItem("justSignedIn");return ge==="true"||fe==="true"?(sessionStorage.removeItem("justSignedUp"),sessionStorage.removeItem("justSignedIn"),sessionStorage.setItem("welcomeShown","true"),!1):sessionStorage.getItem("welcomeShown")!=="true"}),r=_e(),s=bn(),{player:a,levelProgress:i,useEnergy:o,changeAvatar:l}=s,[c]=$t("/sounds/correct.mp3",{volume:.6}),[u]=$t("/sounds/wrong.mp3",{volume:.6}),[f]=$t("/sounds/coin.mp3",{volume:.75}),[p]=$t("/sounds/levelup.mp3",{volume:.8}),m=d.useRef(a.level),j=d.useRef(null);d.useEffect(()=>{const ge=()=>{};return window.addEventListener("focus",ge),()=>window.removeEventListener("focus",ge)},[]),d.useEffect(()=>{a.level>m.current&&(p==null||p(),m.current=a.level)},[a.level,p]);const[x,w]=d.useState(!1),[S,y]=d.useState(null),[v,g]=d.useState(!1),[N,C]=d.useState("medium"),[P,E]=d.useState(10),[h,b]=d.useState(45),[k,T]=d.useState(!1),[R,B]=d.useState(!1),[Q,H]=d.useState(null),[W,F]=d.useState(null),[I,_]=d.useState(!1),[L,A]=d.useState(!1),[M,U]=d.useState(null),K=10,J=5,[$,Z]=d.useState(!1),[O,z]=d.useState(!1),[G,Y]=d.useState("general-knowledge"),[ee,le]=d.useState("medium"),[te,q]=d.useState(10),[D,re]=d.useState(()=>Rd("dq_daily_log",{})[Td()]===!0);d.useEffect(()=>{const ge=sessionStorage.getItem("homeScrollPosition");ge&&window.scrollTo(0,parseInt(ge));const fe=()=>{sessionStorage.setItem("homeScrollPosition",window.scrollY.toString())};return window.addEventListener("scroll",fe),()=>window.removeEventListener("scroll",fe)},[]),d.useEffect(()=>{if(D)return;(async()=>{var fe;try{const be=await fetch("/data/quiz_questions_bank.csv").then(dt=>dt.text()),{data:me}=ur.parse(be,{header:!0,skipEmptyLines:!0});if(!me.length)throw new Error("empty");const Ne=me[Math.floor(Math.random()*me.length)],Be=[Ne.option1,Ne.option2,Ne.option3,Ne.option4].filter(Boolean);H({category:Ne.category||"General",prompt:Ne.question,options:Be,answerIndex:["A","B","C","D"].indexOf((fe=Ne.answer)==null?void 0:fe.toUpperCase())||0})}catch{H({category:"Science",prompt:"Which planet is known as the Red Planet?",options:["Earth","Mars","Jupiter","Venus"],answerIndex:1})}})()},[D]);const ne=(ge,fe)=>{if(W!==null)return;F(ge);const be=ge===Q.answerIndex;if(be){if(c(),fe!=null&&fe.currentTarget&&j.current){const me=fe.currentTarget.getBoundingClientRect();f(),U({startRect:me,count:10,amount:J})}}else u();setTimeout(()=>{if(A(!0),_(!0),be){const me=Td();dg("dq_daily_log",{...Rd("dq_daily_log",{}),[me]:!0}),re(!0);const Ne=Number(localStorage.getItem("dq_streak")||0);localStorage.setItem("dq_streak",String(Ne+1));const Be=Ve.getCurrentUser();Be!=null&&Be.phone&&ce.updateStreak(Be.phone)}},600)},ae=ge=>{if(ge.slug==="more"){w(!0);return}y(ge),g(!0)},de=()=>{console.log("Starting quiz with energy:",a.energy),console.log("Category:",S.slug),r(`/quiz/${S.slug}`,{state:{mode:"quiz",difficulty:N,count:P,timer:{type:"per_q",seconds:h},source:"adventure"}}),g(!1)},Ee=()=>{console.log("Starting practice, category:",G),r(`/quiz/${G}`,{state:{mode:"practice",difficulty:ee,count:te,timer:{type:"off",seconds:0}}}),z(!1)},Te=[{icon:"🎯",label:"Quests",color:"bg-gradient-to-br from-orange-500 to-pink-500",action:()=>{sessionStorage.setItem("questsFromHome","true"),r("/profile/quests")}},{icon:"🔥",label:"Streak",color:"bg-gradient-to-br from-red-500 to-orange-500",action:()=>r("/profile/streaks")},{icon:"🏆",label:"Achieve",color:"bg-gradient-to-br from-blue-500 to-purple-500",action:()=>r("/profile/achievements")},{icon:"🎁",label:"Rewards",color:"bg-gradient-to-br from-green-500 to-teal-500",action:()=>r("/profile/rewards")}];return n.jsxs(n.Fragment,{children:[e&&n.jsx(cg,{player:a,onContinue:()=>t(!1)}),n.jsxs("div",{className:"min-h-screen bg-base-bg text-base-text",children:[n.jsx("div",{className:"fixed inset-0 -z-10 pointer-events-none",style:{background:"linear-gradient(to bottom, #0B0F1A, #111827)"}}),n.jsxs("div",{className:"relative z-10 px-4 pt-10 pb-24",children:[n.jsx("style",{jsx:!0,children:`
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
        `}),M&&n.jsx(Si,{startRect:M.startRect,targetRef:j,count:M.count,onDone:()=>{if(!$){const ge=Ve.getCurrentUser();ge!=null&&ge.phone?(ce.addCoins(M.amount,"Daily Challenge"),ce.addXP(K),ce.updateQuestProgress(ge.phone,"daily_challenge",1)):(ce.addCoins(M.amount,"Daily Challenge"),ce.addXP(K)),Z(!0)}U(null)}}),n.jsxs("div",{className:"mb-8",children:[n.jsxs("div",{className:"flex justify-between items-start mb-4",children:[n.jsx("div",{className:"cursor-pointer hover:scale-105 transition-transform",onClick:()=>B(!0),children:n.jsx(Xx,{player:a,size:"small",showLevel:!0,showName:!0})}),n.jsx("div",{className:"flex gap-2",children:n.jsxs("button",{ref:j,onClick:()=>T(!0),className:"px-3 py-1.5 rounded-xl bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/30 flex items-center gap-2 hover:from-yellow-500/20 hover:to-orange-500/20 transition",children:[n.jsx("span",{className:"text-lg",children:"🪙"}),n.jsx("span",{className:"font-bold",children:ce.getCoins()})]})})]}),n.jsx(Jx,{current:i.current,required:i.required,level:a.level,animate:!0})]}),n.jsx(Zx,{onClick:()=>r("/play")}),n.jsx(eg,{actions:Te}),n.jsx(rg,{dailyQ:Q,isFlipped:L,picked:W,onAnswer:ne,dailyCompleted:D,DAILY_Q_COINS:J,DAILY_Q_XP:K}),n.jsx(tg,{categories:Cm,onCategorySelect:ae}),n.jsx(ng,{onClick:()=>z(!0),isPulsing:a.energy<10}),n.jsx(sg,{show:R,onClose:()=>B(!1),player:a,changeAvatar:l,GAME_CONSTANTS:ht}),n.jsx(og,{show:v,onClose:()=>g(!1),selectedCategory:S,difficulty:N,setDifficulty:C,count:P,setCount:E,timer:h,setTimer:b,onStart:de}),n.jsx(lg,{show:O,onClose:()=>z(!1),allCategories:Pm,category:G,setCategory:Y,difficulty:ee,setDifficulty:le,count:te,setCount:q,onStart:Ee}),n.jsx(ag,{show:x,onClose:()=>w(!1),categories:Em,onCategorySelect:ae}),n.jsx(ig,{show:k,onClose:()=>T(!1),coins:a.coins,onNavigateToPlay:()=>{T(!1),r("/play")}})]})]})]})}const da={OWNED_CHARACTERS:"owned_characters",SOUND:"play_sound_on"},ua={get:(e,t=null)=>{try{const r=localStorage.getItem(e);return r?JSON.parse(r):t}catch{return t}},set:(e,t)=>{try{localStorage.setItem(e,JSON.stringify(t))}catch{}}};function Ci(){const[e,t]=d.useState(()=>ce.getCoins()),[r,s]=d.useState(()=>ce.getXP()),[a,i]=d.useState(()=>ce.getLevel()),[o,l]=d.useState(()=>ua.get(da.OWNED_CHARACTERS,[])),[c,u]=d.useState(()=>ua.get(da.SOUND,!0));d.useEffect(()=>{const N=Ve.getCurrentUser();N!=null&&N.phone&&ce.initializeUserData(N.phone)},[]);const f=d.useCallback(N=>{const C=ce.addCoins(N,"Game reward");return t(C),C},[]),p=d.useCallback(N=>{const C=ce.addXP(N);s(C);const P=ce.getLevel();return P>a&&i(P),C},[a]),m=d.useCallback((N,C="Purchase")=>{if(ce.spendCoins(N,C)){const P=ce.getCoins();return t(P),!0}return!1},[]),j=d.useCallback(N=>{l(C=>{const P=[...new Set([...C,N])];return ua.set(da.OWNED_CHARACTERS,P),P})},[]),x=d.useCallback(()=>ce.checkAndUpdateLevel(),[]);d.useEffect(()=>{ua.set(da.SOUND,c)},[c]);const w=d.useCallback((N,C,P,E,h)=>{const b=Ve.getCurrentUser(),k=ce.recordQuizSession(b==null?void 0:b.phone,{score:N,totalQuestions:C,category:P,difficulty:E,mode:h});return t(k.newTotal),s(k.newXP),i(k.newLevel),k},[]),S=d.useCallback((N,C,P)=>{const E=Ve.getCurrentUser(),h=ce.recordPracticeSession(E==null?void 0:E.phone,{questionsCompleted:N,correctAnswers:C,category:P});return t(h.newTotal),s(h.newXP),h},[]),y=d.useCallback(()=>{const N=Ve.getCurrentUser();return N!=null&&N.phone?ce.getUserStats(N.phone):null},[]),v=d.useCallback(()=>{const N=Ve.getCurrentUser();return N!=null&&N.phone?ce.getQuestData(N.phone):null},[]),g=d.useCallback(()=>{const N=Ve.getCurrentUser();return ce.getTodaySummary(N==null?void 0:N.phone)},[]);return{coins:e,xp:r,level:a,ownedCharacters:o,soundOn:c,addCoins:f,addXp:p,spendCoins:m,unlockCharacter:j,setSoundOn:u,checkLevelUp:x,recordQuizComplete:w,recordPracticeComplete:S,getUserStats:y,getQuestData:v,getTodaySummary:g,nextLevelThreshold:100*a*(a-1),xpProgress:r/Math.max(1,100*a*(a-1))}}const ug=[{name:"General Knowledge",questions:50,icon:"🧠",color:"#7C3AED"},{name:"Artificial Intelligence",questions:28,icon:"🤖",color:"#10B981"},{name:"Fun facts",questions:30,icon:"🎉",color:"#EF4444"},{name:"Science",questions:45,icon:"🧪",color:"#F59E0B"},{name:"History",questions:42,icon:"🏺",color:"#2563EB"},{name:"Geography",questions:38,icon:"🗺️",color:"#FACC15"}],nn=ug.slice(0,6),Zn=360/nn.length,Tm={"general-knowledge":"TINA","artificial-intelligence":"ALBERT","fun-facts":"BONZO",science:"POP",history:"TITO",geography:"HECTOR"},jn={FULL_TURNS:6,DURATION:2800,OVERSHOOT:12,SETTLE_DURATION:350},rr=e=>e.toLowerCase().replace(/[^\w\s-]/g,"").replace(/\s+/g,"-"),Ad=e=>(e%360+360)%360,lc=e=>{try{navigator.vibrate&&navigator.vibrate(e)}catch{}},Ir=(e,t=.7)=>{try{const r=new Audio(e);r.volume=t,r.play()}catch{}};function fg({run:e,coins:t,xp:r,level:s,ownedCharacters:a,onSpin:i,onBack:o,spinning:l,angle:c,transition:u,result:f,showCallout:p,glowColor:m,soundOn:j,setSoundOn:x,showSparkle:w,pulseIdx:S,nextProgressIdx:y,pendingProgressIdx:v,coinBurstTick:g,lastAnswerWasCorrect:N}){const C=100*s*(s-1),[P,E]=d.useState(!1),h=d.useRef(0),b=d.useRef(null),k=d.useRef(null),[T,R]=d.useState({dx:110,dy:-260}),[B,Q]=d.useState(!1),[H,W]=d.useState(ce.getCoins());return d.useEffect(()=>{const I=setInterval(()=>{W(ce.getCoins())},1e3);return()=>clearInterval(I)},[]),d.useEffect(()=>(document.body.classList.add("hide-bottom-nav"),()=>{document.body.classList.remove("hide-bottom-nav")}),[]),d.useEffect(()=>{if(v==null)return;E(!1);const F=setTimeout(()=>E(!0),30);return()=>clearTimeout(F)},[v]),d.useEffect(()=>{var I,_,L,A;if(!g||!N||g===h.current)return;h.current=g;try{const M=(_=(I=k==null?void 0:k.current)==null?void 0:I.getBoundingClientRect)==null?void 0:_.call(I),U=(A=(L=b==null?void 0:b.current)==null?void 0:L.getBoundingClientRect)==null?void 0:A.call(L);if(M&&U){const K=M.left+M.width/2,J=M.top+M.height/2,$=U.left+U.width/2,Z=U.top+U.height/2;R({dx:$-K,dy:Z-J})}}catch{}j&&Ir("/sounds/coin.mp3",.7),Q(!0);const F=setTimeout(()=>Q(!1),700);return()=>clearTimeout(F)},[g,j,N]),n.jsx("div",{className:"fixed inset-0 bg-base-bg text-base-text overflow-hidden",children:n.jsxs("div",{className:"h-full overflow-y-auto mx-auto max-w-md px-5 pt-[calc(env(safe-area-inset-top)+3rem)] pb-[calc(env(safe-area-inset-bottom)+5.25rem)]",children:[n.jsxs("header",{className:"flex items-center justify-between mb-8",children:[n.jsx("button",{onClick:o,className:"h-10 w-10 rounded-full border border-base-border grid place-items-center bg-white/5 hover:bg-white/10 transition translate-y-[4px]",children:"←"}),n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsxs("button",{className:"px-3 py-1 rounded-2xl bg-white/5 border border-base-border text-left translate-y-[4px]",children:[n.jsxs("div",{className:"text-[11px]",children:["Lvl ",s," • ",r,"/",C]}),n.jsx("div",{className:"mt-1 h-1 w-full bg-white/10 rounded",children:n.jsx("div",{className:"h-1 bg-brand-blue rounded",style:{width:`${Math.min(r/C,1)*100}%`}})})]}),n.jsxs("button",{ref:b,className:"px-3 py-1 rounded-2xl bg-white/5 border border-base-border translate-y-[4px]",children:["🪙 ",H]})]}),n.jsx("button",{onClick:()=>x(!j),className:"h-10 w-10 rounded-full border border-base-border grid place-items-center bg-white/5 hover:bg-white/10 transition translate-y-[4px]",children:n.jsx("span",{className:"text-lg",children:j?"🔊":"🔇"})})]}),a.length>0&&n.jsx("div",{className:"flex justify-center mb-6",children:n.jsx("div",{className:"flex gap-2 px-4 py-2 bg-white/10 rounded-2xl backdrop-blur border border-base-border",children:a.map(F=>{const I=nn.find(L=>rr(L.name)===F),_=Tm[F];return n.jsxs("div",{className:"flex flex-col items-center",children:[n.jsx("div",{className:"w-8 h-8 rounded-full bg-white/20 flex items-center justify-center border border-white/30",children:n.jsx("span",{className:"text-sm",children:I==null?void 0:I.icon})}),n.jsx("span",{className:"text-[10px] text-base-muted mt-1",children:_})]},F)})})}),n.jsx("div",{className:"flex justify-center mt-12 sm:mt-16 mb-6",children:n.jsxs("div",{className:"w-80 max-w-full",children:[n.jsx("style",{children:`
              @keyframes qp_sweep { from { transform: translateX(0); } to { transform: translateX(100%); } }
            `}),n.jsx("div",{className:"relative grid grid-cols-3 gap-1 h-3 rounded-full overflow-hidden bg-white/10 border border-white/15",children:[0,1,2].map(F=>{const I=["#FF9800","#FFC107","#cadd75ff"],_=!!e.progress[F];return n.jsxs("div",{className:"relative h-full bg-white/10",children:[n.jsx("div",{className:"absolute inset-y-0 left-0 rounded-[6px]",style:{width:_?F===v?P?"100%":"0%":y===F&&v==null?"0%":"100%":"0%",backgroundColor:I[F],transition:F===v?"width 1200ms ease-out":"none"}}),S===F&&n.jsx("span",{className:"absolute inset-y-0 left-0 w-full overflow-hidden pointer-events-none",children:n.jsx("span",{className:"absolute inset-y-0 left-0 w-1 rounded bg-white/80",style:{animation:"qp_sweep 1200ms ease-out forwards"}})}),w===F&&n.jsx("span",{className:"absolute right-[-2px] top-1/2 -translate-y-1/2 text-xs select-none",children:"✨"})]},F)})},e.qIndex)]})}),n.jsx("section",{className:"flex flex-col items-center mt-28 sm:mt-32 mb-10",children:n.jsxs("div",{ref:k,className:"relative w-96 h-96 rounded-full select-none",children:[m&&n.jsx("div",{className:"pointer-events-none absolute -inset-4 rounded-full",style:{boxShadow:`0 0 0 8px ${m}40, 0 0 40px 12px ${m}60`}}),n.jsx("div",{className:"absolute inset-0 rounded-full border-4 border-white/20 shadow-2xl overflow-hidden will-change-transform bg-base-card",style:{transform:`rotate(${c}deg)`,transition:u},children:n.jsxs("svg",{width:"100%",height:"100%",viewBox:"0 0 100 100",className:"block",children:[nn.map((F,I)=>{const _=I*Zn,L=_+Zn,A=Zn>180?1:0,M=Math.PI*_/180,U=Math.PI*L/180,K=50+45*Math.cos(M),J=50-45*Math.sin(M),$=50+45*Math.cos(U),Z=50-45*Math.sin(U),O=_+Zn/2,z=28,G=50+z*Math.cos(O*Math.PI/180),Y=50-z*Math.sin(O*Math.PI/180);return n.jsxs("g",{children:[n.jsx("path",{d:`M50,50 L${K},${J} A45,45 0 ${A} 0 ${$},${Z} Z`,fill:F.color,stroke:"rgba(255,255,255,0.3)",strokeWidth:"0.5"}),n.jsx("text",{x:G,y:Y,fill:"white",fontSize:"8",dominantBaseline:"middle",textAnchor:"middle",className:"font-bold",children:F.icon})]},I)}),n.jsx("circle",{cx:"50",cy:"50",r:"12",fill:"white",stroke:"#ddd",strokeWidth:"1"})]})}),n.jsx("button",{onClick:i,disabled:l,className:`absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                      w-24 h-24 rounded-full bg-white text-black font-black text-lg shadow-lg transition-all ${l?"opacity-60 cursor-not-allowed scale-95":"hover:scale-105 active:scale-95"}`,children:"SPIN"}),n.jsx("div",{className:"absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-2 z-20",children:n.jsx("div",{className:"w-6 h-8 bg-white rounded-lg shadow-md flex items-start justify-center pt-1",children:n.jsx("div",{className:"w-0 h-0 border-l-[6px] border-r-[6px] border-b-[8px] border-l-transparent border-r-transparent border-b-gray-600"})})}),p&&f&&n.jsx("div",{className:"absolute left-1/2 -translate-x-1/2 -top-16 z-30",children:n.jsxs("div",{className:"px-4 py-2 rounded-2xl bg-base-card border border-base-border shadow-lg font-semibold",children:[n.jsx("span",{className:"mr-2",children:f.cat.icon}),f.cat.name]})}),B&&n.jsxs(n.Fragment,{children:[n.jsx("style",{children:`
                    @keyframes coinFly {
                      0%   { transform: translate(-50%, -50%) scale(0.9); opacity: 1; }
                      100% { transform: translate(var(--coin-dx), var(--coin-dy)) scale(0.4); opacity: 0; }
                    }
                `}),[0,1,2].map(F=>n.jsx("div",{className:"pointer-events-none absolute z-30 top-1/2 left-1/2",style:{animation:`coinFly 600ms ease-out ${F*80}ms forwards`,"--coin-dx":`${T.dx}px`,"--coin-dy":`${T.dy}px`},children:n.jsx("div",{className:"w-6 h-6 rounded-full grid place-items-center bg-yellow-400 text-black font-bold",children:"🪙"})},F))]})]})}),n.jsx("div",{className:"text-center",children:n.jsx("button",{disabled:!0,className:"text-base-muted underline opacity-60 cursor-not-allowed text-sm",children:"Party Spin (pass & play)"})})]})})}var Ia={linear:function(e,t,r,s){var a=r-t;return a*e/s+t},easeInQuad:function(e,t,r,s){var a=r-t;return a*(e/=s)*e+t},easeOutQuad:function(e,t,r,s){var a=r-t;return-a*(e/=s)*(e-2)+t},easeInOutQuad:function(e,t,r,s){var a=r-t;return(e/=s/2)<1?a/2*e*e+t:-a/2*(--e*(e-2)-1)+t},easeInCubic:function(e,t,r,s){var a=r-t;return a*(e/=s)*e*e+t},easeOutCubic:function(e,t,r,s){var a=r-t;return a*((e=e/s-1)*e*e+1)+t},easeInOutCubic:function(e,t,r,s){var a=r-t;return(e/=s/2)<1?a/2*e*e*e+t:a/2*((e-=2)*e*e+2)+t},easeInQuart:function(e,t,r,s){var a=r-t;return a*(e/=s)*e*e*e+t},easeOutQuart:function(e,t,r,s){var a=r-t;return-a*((e=e/s-1)*e*e*e-1)+t},easeInOutQuart:function(e,t,r,s){var a=r-t;return(e/=s/2)<1?a/2*e*e*e*e+t:-a/2*((e-=2)*e*e*e-2)+t},easeInQuint:function(e,t,r,s){var a=r-t;return a*(e/=s)*e*e*e*e+t},easeOutQuint:function(e,t,r,s){var a=r-t;return a*((e=e/s-1)*e*e*e*e+1)+t},easeInOutQuint:function(e,t,r,s){var a=r-t;return(e/=s/2)<1?a/2*e*e*e*e*e+t:a/2*((e-=2)*e*e*e*e+2)+t},easeInSine:function(e,t,r,s){var a=r-t;return-a*Math.cos(e/s*(Math.PI/2))+a+t},easeOutSine:function(e,t,r,s){var a=r-t;return a*Math.sin(e/s*(Math.PI/2))+t},easeInOutSine:function(e,t,r,s){var a=r-t;return-a/2*(Math.cos(Math.PI*e/s)-1)+t},easeInExpo:function(e,t,r,s){var a=r-t;return e==0?t:a*Math.pow(2,10*(e/s-1))+t},easeOutExpo:function(e,t,r,s){var a=r-t;return e==s?t+a:a*(-Math.pow(2,-10*e/s)+1)+t},easeInOutExpo:function(e,t,r,s){var a=r-t;return e===0?t:e===s?t+a:(e/=s/2)<1?a/2*Math.pow(2,10*(e-1))+t:a/2*(-Math.pow(2,-10*--e)+2)+t},easeInCirc:function(e,t,r,s){var a=r-t;return-a*(Math.sqrt(1-(e/=s)*e)-1)+t},easeOutCirc:function(e,t,r,s){var a=r-t;return a*Math.sqrt(1-(e=e/s-1)*e)+t},easeInOutCirc:function(e,t,r,s){var a=r-t;return(e/=s/2)<1?-a/2*(Math.sqrt(1-e*e)-1)+t:a/2*(Math.sqrt(1-(e-=2)*e)+1)+t},easeInElastic:function(e,t,r,s){var a=r-t,i,o,l;return l=1.70158,o=0,i=a,e===0?t:(e/=s)===1?t+a:(o||(o=s*.3),i<Math.abs(a)?(i=a,l=o/4):l=o/(2*Math.PI)*Math.asin(a/i),-(i*Math.pow(2,10*(e-=1))*Math.sin((e*s-l)*(2*Math.PI)/o))+t)},easeOutElastic:function(e,t,r,s){var a=r-t,i,o,l;return l=1.70158,o=0,i=a,e===0?t:(e/=s)===1?t+a:(o||(o=s*.3),i<Math.abs(a)?(i=a,l=o/4):l=o/(2*Math.PI)*Math.asin(a/i),i*Math.pow(2,-10*e)*Math.sin((e*s-l)*(2*Math.PI)/o)+a+t)},easeInOutElastic:function(e,t,r,s){var a=r-t,i,o,l;return l=1.70158,o=0,i=a,e===0?t:(e/=s/2)===2?t+a:(o||(o=s*(.3*1.5)),i<Math.abs(a)?(i=a,l=o/4):l=o/(2*Math.PI)*Math.asin(a/i),e<1?-.5*(i*Math.pow(2,10*(e-=1))*Math.sin((e*s-l)*(2*Math.PI)/o))+t:i*Math.pow(2,-10*(e-=1))*Math.sin((e*s-l)*(2*Math.PI)/o)*.5+a+t)},easeInBack:function(e,t,r,s,a){var i=r-t;return a===void 0&&(a=1.70158),i*(e/=s)*e*((a+1)*e-a)+t},easeOutBack:function(e,t,r,s,a){var i=r-t;return a===void 0&&(a=1.70158),i*((e=e/s-1)*e*((a+1)*e+a)+1)+t},easeInOutBack:function(e,t,r,s,a){var i=r-t;return a===void 0&&(a=1.70158),(e/=s/2)<1?i/2*(e*e*(((a*=1.525)+1)*e-a))+t:i/2*((e-=2)*e*(((a*=1.525)+1)*e+a)+2)+t},easeInBounce:function(e,t,r,s){var a=r-t,i;return i=Ia.easeOutBounce(s-e,0,a,s),a-i+t},easeOutBounce:function(e,t,r,s){var a=r-t;return(e/=s)<1/2.75?a*(7.5625*e*e)+t:e<2/2.75?a*(7.5625*(e-=1.5/2.75)*e+.75)+t:e<2.5/2.75?a*(7.5625*(e-=2.25/2.75)*e+.9375)+t:a*(7.5625*(e-=2.625/2.75)*e+.984375)+t},easeInOutBounce:function(e,t,r,s){var a=r-t,i;return e<s/2?(i=Ia.easeInBounce(e*2,0,a,s),i*.5+t):(i=Ia.easeOutBounce(e*2-s,0,a,s),i*.5+a*.5+t)}},mg=Ia;function hg(e){return e*Math.PI/180}function Tt(e,t){return e+Math.random()*(t-e)}function pg(e,t){return Math.floor(e+Math.random()*(t-e+1))}var bs;(function(e){e[e.Circle=0]="Circle",e[e.Square=1]="Square",e[e.Strip=2]="Strip"})(bs||(bs={}));var Pn;(function(e){e[e.Positive=1]="Positive",e[e.Negative=-1]="Negative"})(Pn||(Pn={}));const xg=1e3/60;class gg{constructor(t,r,s,a){this.getOptions=r;const{colors:i,initialVelocityX:o,initialVelocityY:l}=this.getOptions();this.context=t,this.x=s,this.y=a,this.w=Tt(5,20),this.h=Tt(5,20),this.radius=Tt(5,10),this.vx=typeof o=="number"?Tt(-o,o):Tt(o.min,o.max),this.vy=typeof l=="number"?Tt(-l,0):Tt(l.min,l.max),this.shape=pg(0,2),this.angle=hg(Tt(0,360)),this.angularSpin=Tt(-.2,.2),this.color=i[Math.floor(Math.random()*i.length)],this.rotateY=Tt(0,1),this.rotationDirection=Tt(0,1)?Pn.Positive:Pn.Negative}update(t){const{gravity:r,wind:s,friction:a,opacity:i,drawShape:o}=this.getOptions(),l=t/xg;this.x+=this.vx*l,this.y+=this.vy*l,this.vy+=r*l,this.vx+=s*l,this.vx*=a**l,this.vy*=a**l,this.rotateY>=1&&this.rotationDirection===Pn.Positive?this.rotationDirection=Pn.Negative:this.rotateY<=-1&&this.rotationDirection===Pn.Negative&&(this.rotationDirection=Pn.Positive);const c=.1*this.rotationDirection*l;if(this.rotateY+=c,this.angle+=this.angularSpin,this.context.save(),this.context.translate(this.x,this.y),this.context.rotate(this.angle),this.context.scale(1,this.rotateY),this.context.rotate(this.angle),this.context.beginPath(),this.context.fillStyle=this.color,this.context.strokeStyle=this.color,this.context.globalAlpha=i,this.context.lineCap="round",this.context.lineWidth=2,o&&typeof o=="function")o.call(this,this.context);else switch(this.shape){case bs.Circle:{this.context.beginPath(),this.context.arc(0,0,this.radius,0,2*Math.PI),this.context.fill();break}case bs.Square:{this.context.fillRect(-this.w/2,-this.h/2,this.w,this.h);break}case bs.Strip:{this.context.fillRect(-this.w/6,-this.h/2,this.w/3,this.h);break}}this.context.closePath(),this.context.restore()}}class vg{constructor(t,r){this.x=0,this.y=0,this.w=0,this.h=0,this.lastNumberOfPieces=0,this.tweenProgress=0,this.tweenFrom=0,this.particles=[],this.particlesGenerated=0,this.removeParticleAt=a=>{this.particles.splice(a,1)},this.getParticle=()=>{const a=Tt(this.x,this.w+this.x),i=Tt(this.y,this.h+this.y);return new gg(this.context,this.getOptions,a,i)},this.animate=a=>{const{canvas:i,context:o,particlesGenerated:l,lastNumberOfPieces:c}=this,{run:u,recycle:f,numberOfPieces:p,debug:m,tweenFunction:j,tweenDuration:x}=this.getOptions();if(!u)return!1;const w=this.particles.length,S=f?w:l;if(S<p){c!==p&&(this.tweenProgress=0,this.tweenFrom=S,this.lastNumberOfPieces=p),this.tweenProgress=Math.min(x,Math.max(0,this.tweenProgress+a));const y=j(this.tweenProgress,this.tweenFrom,p,x),v=Math.round(y-S);for(let g=0;g<v;g++)this.particles.push(this.getParticle());this.particlesGenerated+=v}m&&(o.font="12px sans-serif",o.fillStyle="#333",o.textAlign="right",o.fillText(`Particles: ${w}`,i.width-10,i.height-20));for(let y=this.particles.length-1;y>=0;y--){const v=this.particles[y];v.update(a),(v.y>i.height||v.y<-100||v.x>i.width+100||v.x<-100)&&(f&&S<=p?this.particles[y]=this.getParticle():this.removeParticleAt(y))}return w>0||S<p},this.canvas=t;const s=this.canvas.getContext("2d");if(!s)throw new Error("Could not get canvas context");this.context=s,this.getOptions=r}}const cc={width:typeof window<"u"?window.innerWidth:300,height:typeof window<"u"?window.innerHeight:200,numberOfPieces:200,friction:.99,wind:0,gravity:.1,initialVelocityX:4,initialVelocityY:10,colors:["#f44336","#e91e63","#9c27b0","#673ab7","#3f51b5","#2196f3","#03a9f4","#00bcd4","#009688","#4CAF50","#8BC34A","#CDDC39","#FFEB3B","#FFC107","#FF9800","#FF5722","#795548"],opacity:1,debug:!1,tweenFunction:mg.easeInOutQuad,tweenDuration:5e3,recycle:!0,run:!0};class yg{constructor(t,r){this.lastFrameTime=0,this.setOptionsWithDefaults=a=>{const i={confettiSource:{x:0,y:0,w:this.canvas.width,h:0}};this._options={...i,...cc,...a},Object.assign(this,a.confettiSource)},this.update=(a=0)=>{const{options:{run:i,onConfettiComplete:o,frameRate:l},canvas:c,context:u}=this,f=Math.min(a-this.lastFrameTime,50);if(l&&f<1e3/l){this.rafId=requestAnimationFrame(this.update);return}this.lastFrameTime=a-(l?f%l:0),i&&(u.fillStyle="white",u.clearRect(0,0,c.width,c.height)),this.generator.animate(f)?this.rafId=requestAnimationFrame(this.update):(o&&typeof o=="function"&&this.generator.particlesGenerated>0&&o.call(this,this),this._options.run=!1)},this.reset=()=>{this.generator&&this.generator.particlesGenerated>0&&(this.generator.particlesGenerated=0,this.generator.particles=[],this.generator.lastNumberOfPieces=0)},this.stop=()=>{this.options={run:!1},this.rafId&&(cancelAnimationFrame(this.rafId),this.rafId=void 0)},this.canvas=t;const s=this.canvas.getContext("2d");if(!s)throw new Error("Could not get canvas context");this.context=s,this.generator=new vg(this.canvas,()=>this.options),this.options=r,this.update()}get options(){return this._options}set options(t){var a,i;const r=(a=this._options)==null?void 0:a.run,s=(i=this._options)==null?void 0:i.recycle;this.setOptionsWithDefaults(t),this.generator&&(Object.assign(this.generator,this.options.confettiSource),typeof t.recycle=="boolean"&&t.recycle&&s===!1&&(this.generator.lastNumberOfPieces=this.generator.particles.length)),typeof t.run=="boolean"&&t.run&&r===!1&&this.update()}}const bg=vt.createRef();class dc extends vt.Component{constructor(t){super(t),this.canvas=vt.createRef(),this.canvas=t.canvasRef||bg}componentDidMount(){if(this.canvas.current){const t=to(this.props)[0];this.confetti=new yg(this.canvas.current,t)}}componentDidUpdate(){const t=to(this.props)[0];this.confetti&&(this.confetti.options=t)}componentWillUnmount(){this.confetti&&this.confetti.stop(),this.confetti=void 0}render(){const[t,r]=to(this.props),s={zIndex:2,position:"absolute",pointerEvents:"none",top:0,left:0,bottom:0,right:0,...r.style};return n.jsx("canvas",{width:t.width,height:t.height,ref:this.canvas,...r,style:s})}}dc.defaultProps={...cc};dc.displayName="ReactConfetti";function to(e){const t={},r={},s={},a=[...Object.keys(cc),"confettiSource","drawShape","onConfettiComplete","frameRate"],i=["canvasRef"];for(const o in e){const l=e[o];a.includes(o)?t[o]=l:i.includes(o)?i[o]=l:s[o]=l}return[t,s,r]}const Rm=vt.forwardRef((e,t)=>n.jsx(dc,{canvasRef:t,...e}));function Id({question:e,category:t,onAnswer:r,run:s,timeLeft:a,usedLifelines:i,onUseLifeline:o,eliminatedOptions:l,audienceData:c,onBack:u,timeUp:f,onTimeUpBackToWheel:p,soundOn:m}){const[j,x]=d.useState(null),[w,S]=d.useState(!1),[y,v]=d.useState(!1),g=d.useRef(null),N=d.useRef(null),[C,P]=d.useState(null);d.useEffect(()=>(document.body.classList.add("hide-bottom-nav"),()=>{document.body.classList.remove("hide-bottom-nav")}),[]),d.useEffect(()=>{if(!w||!g.current)return;const b=g.current.getBoundingClientRect();P({x:b.left,y:b.top-300,w:b.width,h:8})},[w]);const E=b=>{if(w)return;x(b),S(!0);const k=b===e.correctIndex;lc(k?[50,30,50]:[200]),m&&Ir(k?"/sounds/correct.mp3":"/sounds/wrong.mp3",.7),setTimeout(()=>{r(k,null)},1500)},h=j===e.correctIndex;return n.jsx("div",{className:"fixed inset-0 bg-gradient-to-br from-gray-900 to-black text-white overflow-hidden",children:n.jsxs("div",{ref:N,className:"relative h-full overflow-y-auto px-5 pt-16 pb-[calc(env(safe-area-inset-bottom)+5.25rem)]",children:[n.jsx("div",{className:"mb-4",children:n.jsx("button",{onClick:()=>v(!0),className:"h-10 w-10 rounded-full border border-base-border grid place-items-center bg-white/5 hover:bg-white/10 transition",children:"←"})}),n.jsxs("div",{className:"text-center mb-6",children:[n.jsx("div",{className:`text-4xl font-black mb-2 ${a<=10?"text-red-400 animate-pulse":"text-white"}`,children:a}),n.jsx("div",{className:"w-full bg-white/20 rounded-full h-2",children:n.jsx("div",{className:`h-full rounded-full transition-all duration-1000 ${a<=10?"bg-red-400":"bg-blue-400"}`,style:{width:`${a/30*100}%`}})})]}),n.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[n.jsx("div",{className:"w-12 h-12 rounded-full flex items-center justify-center text-2xl",style:{backgroundColor:t.color},children:t.icon}),n.jsxs("div",{children:[n.jsx("div",{className:"text-lg font-bold",children:t.name}),n.jsxs("div",{className:"text-sm text-gray-400",children:["Question ",s.qIndex+1,"/3"]})]})]}),n.jsx("h2",{ref:g,className:"text-xl font-semibold mb-6 leading-relaxed",children:e.prompt}),n.jsx("div",{className:"space-y-3 mb-6",children:e.options.map((b,k)=>{const T=l.includes(k),R=j===k,B=k===e.correctIndex;let Q="bg-white/10 border-white/20",H="opacity-100";return T?H="opacity-30":w&&R?Q=B?"bg-green-500/30 border-green-400":"bg-red-500/30 border-red-400":w&&B?Q="bg-green-500/30 border-green-400":R&&(Q="bg-white/20 border-white/40"),n.jsx("button",{onClick:()=>E(k),disabled:w||T,className:`w-full p-4 rounded-xl border-2 text-left transition-all duration-300 ${Q} ${H} ${!w&&!T?"hover:bg-white/15 active:scale-98":""}`,children:n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsx("div",{className:"w-8 h-8 rounded-full bg-white/20 flex items-center justify-center font-bold text-sm",children:String.fromCharCode(65+k)}),n.jsx("span",{className:"font-medium flex-1",children:b}),c&&n.jsxs("span",{className:"text-xs text-base-muted",children:[Math.round(c[k]),"%"]})]})},k)})}),!w&&n.jsxs("div",{className:"flex gap-4 mb-8",children:[n.jsx("button",{onClick:()=>o("fifty"),disabled:i.fifty,className:`flex-1 p-4 rounded-2xl border-2 font-bold transition-all ${i.fifty?"bg-gray-700 border-gray-600 text-gray-400":"bg-purple-600 border-purple-400 text-white hover:bg-purple-500 active:scale-95"}`,children:"50:50"}),n.jsx("button",{onClick:()=>o("audience"),disabled:i.audience,className:`flex-1 p-4 rounded-2xl border-2 font-bold transition-all ${i.audience?"bg-gray-700 border-gray-600 text-gray-400":"bg-blue-600 border-blue-400 text-white hover:bg-blue-500 active:scale-95"}`,children:"👥 Ask"})]}),w&&n.jsxs("div",{className:"relative text-center",children:[h&&n.jsx("div",{className:"absolute inset-0 pointer-events-none",children:n.jsx(Rm,{recycle:!1,numberOfPieces:120,gravity:.9,tweenDuration:1800,confettiSource:C||{x:0,y:0,w:typeof window<"u"?window.innerWidth:320,h:1}})}),n.jsx("button",{onClick:()=>r(h,null,!0),className:"relative z-10 bg-white text-black font-black py-4 px-8 rounded-2xl text-lg hover:bg-gray-100 transition-all active:scale-95",children:"Continue"})]}),f&&n.jsx("div",{className:"fixed inset-0 z-50 bg-black/60 flex items-center justify-center px-6",children:n.jsxs("div",{className:"w-full max-w-sm rounded-2xl bg-base-card border border-base-border p-5 text-center",children:[n.jsx("div",{className:"text-lg font-bold mb-2",children:"Time's up"}),n.jsx("p",{className:"text-base-muted mb-5",children:"You ran out of time."}),n.jsx("button",{onClick:p,className:"mx-auto w-48 py-3 rounded-xl bg-brand-blue text-white font-semibold hover:bg-brand-blue/90 transition",children:"Back to Wheel"})]})}),y&&n.jsx("div",{className:"fixed inset-0 z-50 bg-black/60 flex items-center justify-center px-6",children:n.jsxs("div",{className:"w-full max-w-sm rounded-2xl bg-base-card border border-base-border p-5 text-center",children:[n.jsx("div",{className:"text-lg font-bold mb-2",children:"Want to quit?"}),n.jsx("p",{className:"text-base-muted mb-5",children:"You'll lose this question's progress."}),n.jsxs("div",{className:"flex gap-3",children:[n.jsx("button",{onClick:()=>v(!1),className:"flex-1 py-3 rounded-xl border border-base-border bg-white/5 hover:bg-white/10 transition",children:"No"}),n.jsx("button",{onClick:u,className:"flex-1 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-500 transition",children:"Yes"})]})]})})]})})}function Ld({category:e,onComplete:t,isBonus:r=!1,soundOn:s=!0}){return d.useEffect(()=>{s&&Ir("/sounds/flush.mp3",.8);const a=setTimeout(t,1e3);return lc([50]),()=>clearTimeout(a)},[t,s]),d.useEffect(()=>(document.body.classList.add("hide-bottom-nav"),()=>{document.body.classList.remove("hide-bottom-nav")}),[]),r?n.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-purple-500 to-blue-600 flex flex-col items-center justify-center text-white",children:[n.jsx("h2",{className:"text-5xl font-black mb-8",children:"Bonus Question"}),n.jsx("div",{className:"w-32 h-32 bg-white/20 rounded-full flex items-center justify-center animate-pulse",children:n.jsx("span",{className:"text-6xl",children:"⭐"})})]}):n.jsx("div",{className:"min-h-screen bg-base-bg text-white flex items-center justify-center",children:n.jsxs("div",{className:"relative w-96 h-96 rounded-full flex items-center justify-center",style:{backgroundColor:e.color},children:[n.jsxs("div",{className:"absolute inset-0 opacity-10 pointer-events-none",children:[n.jsx("div",{className:"absolute top-8 left-10 w-20 h-20 bg-white/20 rounded-full"}),n.jsx("div",{className:"absolute bottom-10 right-12 w-24 h-24 bg-white/20 rounded-full"})]}),n.jsxs("div",{className:"relative z-10 text-center",children:[n.jsx("div",{className:"text-4xl font-black mb-2",children:e.name}),n.jsx("div",{className:"w-20 h-20 bg-white/20 rounded-full grid place-items-center mx-auto",children:n.jsx("span",{className:"text-4xl",children:e.icon})})]})]})})}function wg({onDone:e}){return d.useEffect(()=>{const t=setTimeout(e,1e3);return()=>clearTimeout(t)},[e]),n.jsx("div",{className:"min-h-screen flex items-center justify-center bg-green-600 text-white",children:n.jsx("h2",{className:"text-2xl font-black",children:"Whohoo!! 3 correct in a row 🎉"})})}function jg({onSelect:e}){return n.jsx("div",{className:"min-h-screen bg-gradient-to-br from-purple-600 to-pink-600 text-white",children:n.jsxs("div",{className:"mx-auto max-w-md px-5 pt-16 pb-8",children:[n.jsxs("header",{className:"text-center mb-12",children:[n.jsx("div",{className:"text-6xl mb-4",children:"🏆"}),n.jsx("h1",{className:"text-4xl font-black mb-4",children:"Perfect Round!"}),n.jsx("p",{className:"text-xl opacity-90",children:"Choose a character to unlock"})]}),n.jsx("div",{className:"grid grid-cols-2 gap-6",children:nn.map(t=>{const r=Tm[rr(t.name)];return n.jsxs("button",{onClick:()=>e(rr(t.name)),className:"p-6 rounded-3xl border-2 border-white/20 bg-white/10 backdrop-blur text-center hover:bg-white/20 hover:scale-105 transition-all duration-300 active:scale-95",children:[n.jsx("div",{className:"text-4xl mb-3",children:t.icon}),n.jsx("div",{className:"font-black text-lg mb-1",children:r}),n.jsx("div",{className:"text-sm opacity-75",children:t.name})]},rr(t.name))})})]})})}function Ng({onBack:e}){const{coins:t,xp:r,level:s,ownedCharacters:a,soundOn:i,unlockCharacter:o,setSoundOn:l}=Ci(),[c,u]=d.useState("wheel"),[f,p]=d.useState({qIndex:0,progress:[!1,!1,!1],lifelines:{fifty:!1,audience:!1}}),[m,j]=d.useState([]),[x,w]=d.useState(null),[S,y]=d.useState(null),[v,g]=d.useState(30),[N,C]=d.useState([]),[P,E]=d.useState(null),[h,b]=d.useState(null),[k,T]=d.useState(!1),[R,B]=d.useState(0),[Q,H]=d.useState("none"),[W,F]=d.useState(!1),[I,_]=d.useState(null),[L,A]=d.useState(!1),[M,U]=d.useState(null),[K,J]=d.useState(-1),[$,Z]=d.useState(0),[O,z]=d.useState(null),[G,Y]=d.useState(null),[ee,le]=d.useState(!1),[te,q]=d.useState(null),[D,re]=d.useState(-1),[ne,ae]=d.useState([!1,!1,!1]),[de,Ee]=d.useState(!1),[Te,ge]=d.useState(!1),fe=d.useRef(null),be=d.useRef(null),me=d.useRef(null),Ne=d.useMemo(()=>{var se;return((se=window.matchMedia)==null?void 0:se.call(window,"(prefers-reduced-motion: reduce)").matches)||!1},[]);d.useEffect(()=>(Be(),dt(),window.history.pushState({mode:"classic"},"",window.location.href),()=>Le()),[]),d.useEffect(()=>{const se=pe=>{pe.preventDefault(),e()};return window.addEventListener("popstate",se),()=>window.removeEventListener("popstate",se)},[e]),d.useEffect(()=>(c==="question"&&v>0&&!Te?fe.current=setTimeout(()=>{g(se=>{const pe=se-1;return pe===10&&i&&Ir("/sounds/tick.mp3",.8),pe})},1e3):c==="question"&&v===0&&T(!0),()=>{fe.current&&clearTimeout(fe.current)}),[c,v,i,Te]),d.useEffect(()=>{if(c!=="wheel"||O==null)return;J(O),i&&Ir("/sounds/progress.mp3",.6),re(O);const se=setTimeout(()=>re(-1),900),pe=setTimeout(()=>J(-1),900),De=setTimeout(()=>{te&&(te==="streakFlash"?u("streakFlash"):te==="characterPicker"?u("characterPicker"):Ze(),q(null)),z(null)},1800);return()=>{clearTimeout(se),clearTimeout(pe),clearTimeout(De)}},[c,O,te,i]),d.useEffect(()=>{c!=="wheel"||!de||(Z(se=>se+1),Ee(!1))},[c,de]),d.useEffect(()=>{if(c!=="wheel"||G==null)return;const pe=setTimeout(()=>{z(G),Y(null)},ee?1800:0);return()=>clearTimeout(pe)},[c,G,ee]);const Be=async()=>{try{const pe=await(await fetch("/data/quiz_questions_bank.csv")).text(),{data:De}=ur.parse(pe,{header:!0,skipEmptyLines:!0,transformHeader:we=>we.trim().toLowerCase()}),ke=De.map((we,at)=>{var he;const ut=[we.option1,we.option2,we.option3,we.option4].map(je=>(je||"").trim()).filter(Boolean);if(ut.length<4)return null;let ue={a:0,b:1,c:2,d:3}[(he=we.answer)==null?void 0:he.toLowerCase()];return ue===void 0&&(ue=ut.findIndex(je=>je.toLowerCase()===(we.answer||"").toLowerCase())),ue===-1&&(ue=0),{id:we.id||`q_${at}`,prompt:(we.question||"").trim(),options:ut,correctIndex:ue,category:(we.category||we.subject||"general knowledge").trim(),difficulty:(we.difficulty||"medium").toLowerCase(),explanation:(we.explanation||"").trim()}}).filter(Boolean);j(ke)}catch(se){console.error("Failed to load questions:",se),j([])}},dt=()=>{const se=new Audio("/sounds/spin.mp3");se.loop=!0,se.volume=.6,be.current=se},Le=()=>{if(fe.current&&clearTimeout(fe.current),me.current&&(clearTimeout(me.current),me.current=null),be.current){try{be.current.pause()}catch{}be.current=null}},Ge=()=>{p({qIndex:0,progress:[!1,!1,!1],lifelines:{fifty:!1,audience:!1}}),ae([!1,!1,!1]),w(null),y(null),b(null),C([]),E(null),T(!1),Z(0)},Ze=()=>{e(),Ge()},zt=()=>{if(i&&be.current){try{be.current.currentTime=0,be.current.play()}catch{}me.current&&clearTimeout(me.current),me.current=setTimeout(()=>{X()},2e3)}},X=()=>{if(me.current&&(clearTimeout(me.current),me.current=null),be.current)try{be.current.pause(),be.current.currentTime=0}catch{}},oe=()=>{if(W)return;_(null),A(!1),U(null),F(!0),zt();const se=Math.floor(Math.random()*nn.length),pe=nn[se],De=Ad(R),ke=se*Zn+Zn/2,we=(Math.random()-.5)*(Zn*.3),at=360-ke+we;let ut=Ad(at-De);const Wn=jn.FULL_TURNS*360+ut,ue=R+Wn+jn.OVERSHOOT;H(`transform ${Ne?1e3:jn.DURATION}ms cubic-bezier(0.25, 0.46, 0.45, 0.94)`),B(ue),lc([20,50,20]),setTimeout(()=>{H(`transform ${Ne?200:jn.SETTLE_DURATION}ms cubic-bezier(0.68, -0.55, 0.265, 1.55)`),B(he=>he-jn.OVERSHOOT)},Ne?1e3:jn.DURATION),setTimeout(()=>{X(),F(!1),_({cat:pe,index:se}),y(pe),U(pe.color),A(!0),setTimeout(()=>{A(!1),u("interstitial")},1500),setTimeout(()=>U(null),1e3)},(Ne?1e3:jn.DURATION)+(Ne?200:jn.SETTLE_DURATION)+100)},xe=()=>{const se=m.filter(De=>{const ke=De.category.toLowerCase(),we=S.name.toLowerCase();return ke.includes(we)||we.includes(ke)});let pe;se.length>0?pe=se[Math.floor(Math.random()*se.length)]:pe=m[Math.floor(Math.random()*m.length)],pe?(w(pe),g(30),C([]),E(null),T(!1),ge(!1),u("question")):u("wheel")},Ce=(se,pe,De=!1)=>{if(!De){ge(!0);return}const ke=f.qIndex,we=[...f.progress];we[ke]=!0;const at=[...ne];if(at[ke]=!!se,ae(at),p(ut=>({...ut,progress:we,qIndex:ut.qIndex+1})),se&&(ce.addCoins(5,"Classic Mode - Correct Answer"),ce.addXP(1),Ee(!0)),Y(ke),le(!!se),ke===2){const ut=at.every(Boolean);q(ut?"streakFlash":"modes")}else q(null);u("wheel")},He=se=>{if(!(f.lifelines[se]||!x)){if(p(pe=>({...pe,lifelines:{...pe.lifelines,[se]:!0}})),se==="fifty"){const De=x.options.map((ke,we)=>we).filter(ke=>ke!==x.correctIndex).slice(0,2);C(De)}else if(se==="audience"){const pe=40+Math.random()*25;let De=100-pe;const ke=[0,0,0,0];ke[x.correctIndex]=Math.round(pe);const we=[0,1,2,3].filter(at=>at!==x.correctIndex);we.forEach((at,ut)=>{if(ut===we.length-1)ke[at]=De;else{const Wn=Math.floor(Math.random()*De);ke[at]=Wn,De-=Wn}}),E(ke)}}},ve=se=>{b(se),u("bonusInterstitial")},gt=se=>{se&&h&&(o(h),i&&Ir("/sounds/coin.mp3",1)),setTimeout(()=>{Ze()},3e3)},Pe=()=>{u("wheel")};switch(c){case"wheel":return n.jsx(fg,{run:f,coins:t,xp:r,level:s,ownedCharacters:a,onSpin:oe,onBack:e,spinning:W,angle:R,transition:Q,result:I,showCallout:L,glowColor:M,soundOn:i,setSoundOn:l,showSparkle:K,pulseIdx:D,coinBurstTick:$,pendingProgressIdx:O,lastAnswerWasCorrect:ee,nextProgressIdx:G});case"interstitial":return n.jsx(Ld,{category:S,onComplete:xe,soundOn:i});case"streakFlash":return n.jsx(wg,{onDone:()=>u("characterPicker")});case"question":return n.jsx(Id,{question:x,category:S,onAnswer:Ce,run:f,timeLeft:v,usedLifelines:f.lifelines,onUseLifeline:He,eliminatedOptions:N,audienceData:P,onBack:Pe,timeUp:k,onTimeUpBackToWheel:()=>{T(!1),u("wheel")},soundOn:i});case"characterPicker":return n.jsx(jg,{onSelect:ve});case"bonusInterstitial":return n.jsx(Ld,{category:nn.find(se=>rr(se.name)===h),onComplete:()=>u("bonusQuestion"),isBonus:!0,soundOn:i});case"bonusQuestion":if(!x){const se=nn.find(pe=>rr(pe.name)===h);if(se&&m.length>0){const pe=m.filter(ke=>{const we=ke.category.toLowerCase(),at=se.name.toLowerCase();return we.includes(at)||at.includes(we)}),De=pe.length>0?pe[Math.floor(Math.random()*pe.length)]:m[Math.floor(Math.random()*m.length)];w(De),g(30)}return n.jsx("div",{className:"min-h-screen bg-base-bg text-base-text flex items-center justify-center",children:n.jsx("div",{className:"text-lg",children:"Loading bonus question..."})})}return n.jsx(Id,{question:x,category:nn.find(se=>rr(se.name)===h)||nn[0],onAnswer:gt,run:{...f,lifelines:{fifty:!0,audience:!0}},timeLeft:v,usedLifelines:{fifty:!0,audience:!0},onUseLifeline:()=>{},eliminatedOptions:[],audienceData:null,onBack:e,soundOn:i});default:return n.jsx("div",{className:"min-h-screen bg-base-bg text-white flex items-center justify-center",children:n.jsxs("div",{className:"text-center",children:[n.jsx("div",{className:"text-2xl mb-4",children:"Unknown State"}),n.jsx("button",{onClick:()=>u("wheel"),className:"px-6 py-3 bg-blue-600 rounded-lg",children:"Back to Wheel"})]})})}}function kg({lives:e,maxLives:t=3}){const[r,s]=d.useState(null),[a,i]=d.useState(e);return d.useEffect(()=>{e<a?(s(a-1),setTimeout(()=>s(null),600)):e>a&&(s(e-1),setTimeout(()=>s(null),1e3)),i(e)},[e,a]),n.jsxs("div",{className:"relative",children:[n.jsx("style",{jsx:!0,children:`
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
      `}),n.jsxs("div",{className:"flex items-center gap-3 px-5 py-1.5 bg-gradient-to-r from-red-500/20 to-pink-500/20 rounded-full backdrop-blur-md border border-white/10 shadow-xl",children:[n.jsx("div",{className:"flex items-center gap-1.5",children:[...Array(t)].map((o,l)=>n.jsx("div",{className:`relative transition-all duration-300 ${l<e?"scale-100":"scale-75"}`,children:n.jsxs("div",{className:"relative",children:[l<e?n.jsxs("div",{className:`relative ${l===r&&e>a?"heart-gained":""}`,children:[n.jsx("span",{className:`text-3xl drop-shadow-lg ${l===e-1?"heart-beat":""}`,children:"❤️"}),l===e-1&&e===1&&n.jsx("div",{className:"absolute inset-0 rounded-full heart-glow"})]}):n.jsx("div",{className:`relative ${l===r&&e<a?"heart-lost":""}`,children:n.jsx("span",{className:"text-3xl opacity-20 grayscale",children:"💔"})}),l===r&&e>a&&n.jsxs("div",{className:"absolute inset-0 flex items-center justify-center pointer-events-none",children:[n.jsx("div",{className:"absolute w-10 h-10 bg-green-400 rounded-full animate-ping opacity-30"}),n.jsx("span",{className:"absolute text-sm font-bold text-green-400 animate-bounce",children:"+1"})]})]})},l))}),n.jsx("div",{className:"pr-1",children:n.jsxs("div",{className:`text-sm font-bold ${e===1?"text-red-400 animate-pulse":e===t?"text-green-400":"text-white"}`,children:[e,"/",t]})})]}),e===1&&n.jsx("div",{className:"absolute -bottom-10 left-1/2 -translate-x-1/2 whitespace-nowrap",children:n.jsx("div",{className:"px-3 py-1 bg-red-500/20 border border-red-500/50 rounded-full backdrop-blur-sm",children:n.jsx("span",{className:"text-xs font-medium text-red-400 animate-pulse",children:"Last life! Be careful! ⚠️"})})})]})}function Sg({question:e,onAnswer:t,lives:r,questionCount:s,correctStreak:a,totalScore:i,currentDifficulty:o,timeLeft:l,showFeedback:c,lastAnswerCorrect:u,checkpoint:f,onBack:p,soundOn:m,setSoundOn:j}){const[x,w]=d.useState(null),[S,y]=d.useState(!1),[v,g]=d.useState(!1),N={EASY:{emoji:"🌱",color:"from-emerald-400 to-green-500",accentGradient:"from-emerald-500/20 to-green-600/20",label:"Sprout",motivationalText:"Great start! Keep growing! 🌱"},MEDIUM:{emoji:"🌻",color:"from-yellow-400 to-amber-500",accentGradient:"from-yellow-500/20 to-amber-600/20",label:"Blooming",motivationalText:"You're blooming beautifully! 🌻"},HARD:{emoji:"🔥",color:"from-orange-400 to-red-500",accentGradient:"from-orange-500/20 to-red-600/20",label:"On Fire",motivationalText:"You're on fire! Keep it up! 🔥"},EXPERT:{emoji:"⚡",color:"from-purple-400 to-indigo-500",accentGradient:"from-purple-500/20 to-indigo-600/20",label:"Lightning",motivationalText:"Lightning fast thinking! ⚡"},LEGENDARY:{emoji:"👑",color:"from-pink-400 to-purple-600",accentGradient:"from-pink-500/20 to-purple-600/20",label:"Legendary",motivationalText:"Legendary performance! 👑"}},C=N[o];d.useEffect(()=>{a>0&&a%5===0&&c&&u&&(y(!0),setTimeout(()=>y(!1),3e3))},[a,c,u]),d.useEffect(()=>{c&&u&&(g(!0),setTimeout(()=>g(!1),1e3))},[c,u]);const P=E=>{c||(w(E),t(E))};return d.useEffect(()=>(document.body.classList.add("hide-bottom-nav"),()=>{document.body.classList.remove("hide-bottom-nav")}),[]),n.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-black text-white relative overflow-hidden",children:[n.jsx("style",{jsx:!0,children:`
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
      `}),n.jsxs("div",{className:"fixed inset-0 pointer-events-none",children:[n.jsx("div",{className:"absolute top-20 left-10 text-[100px] opacity-10 float-animation",children:C.emoji}),n.jsx("div",{className:"absolute top-40 right-20 text-[80px] opacity-10 float-animation",style:{animationDelay:"1s"},children:"⭐"}),n.jsx("div",{className:"absolute bottom-40 left-20 text-[90px] opacity-10 float-animation",style:{animationDelay:"2s"},children:"🎯"}),n.jsx("div",{className:"absolute bottom-20 right-10 text-[70px] opacity-10 float-animation",style:{animationDelay:"3s"},children:"🏆"})]}),n.jsxs("div",{className:"relative z-10 px-4 pt-[calc(env(safe-area-inset-top)+2rem)]",children:[n.jsxs("div",{className:"flex justify-between items-center mb-8 slide-in",children:[n.jsx("button",{onClick:p,className:"w-12 h-12 glass-card rounded-2xl shadow-lg flex items-center justify-center hover:scale-105 transition-transform",children:n.jsx("span",{className:"text-xl",children:"◀️"})}),n.jsx(kg,{lives:r}),n.jsx("button",{onClick:()=>j(!m),className:"w-12 h-12 glass-card rounded-2xl shadow-lg flex items-center justify-center hover:scale-105 transition-transform",children:n.jsx("span",{className:"text-xl",children:m?"🔊":"🔇"})})]}),n.jsx("div",{className:`glass-card rounded-3xl p-2 shadow-xl mb-2 mt-12 slide-in bg-gradient-to-r ${C.accentGradient}`,style:{animationDelay:"0.1s"},children:n.jsxs("div",{className:"grid grid-cols-3 gap-3",children:[n.jsxs("div",{className:"text-center",children:[n.jsx("div",{className:`text-3xl font-black bg-gradient-to-r ${C.color} bg-clip-text text-transparent ${v?"score-pulse":""}`,children:i}),n.jsx("div",{className:"text-xs text-white/60 font-medium mt-1",children:"Points"}),c&&u&&n.jsx("div",{className:"absolute -top-2 left-1/2 -translate-x-1/2",children:n.jsxs("span",{className:"text-green-400 font-bold text-sm coin-animation",children:["+",N[o]?o==="EASY"?10:o==="MEDIUM"?20:o==="HARD"?30:o==="EXPERT"?50:100:10]})})]}),n.jsxs("div",{className:"text-center",children:[n.jsx("div",{className:"text-3xl font-black text-white",children:s}),n.jsx("div",{className:"text-xs text-white/60 font-medium mt-1",children:"Questions"})]}),n.jsxs("div",{className:"text-center relative",children:[n.jsx("div",{className:`text-3xl font-black text-orange-400 ${a>0?"streak-flame":""}`,children:a}),n.jsx("div",{className:"text-xs text-white/60 font-medium mt-1",children:"Streak 🔥"})]})]})}),n.jsxs("div",{className:"flex justify-between items-center mb-1 slide-in",style:{animationDelay:"0.2s"},children:[n.jsx("div",{className:`px-4 py-3 rounded-full bg-gradient-to-r ${C.color} text-white shadow-lg`,children:n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx("span",{className:"text-2xl",children:C.emoji}),n.jsxs("div",{children:[n.jsx("div",{className:"font-bold text-sm",children:C.label}),n.jsxs("div",{className:"text-[10px] opacity-90",children:["Level ",s+1]})]})]})}),n.jsx("div",{className:"relative",children:n.jsxs("div",{className:"w-20 h-20 glass-card rounded-full shadow-xl flex items-center justify-center",children:[n.jsxs("svg",{className:"absolute inset-0 w-full h-full",children:[n.jsx("circle",{cx:"40",cy:"40",r:"35",fill:"none",stroke:"rgba(255, 255, 255, 0.1)",strokeWidth:"6",className:"progress-ring"}),n.jsx("circle",{cx:"40",cy:"40",r:"35",fill:"none",stroke:l<=5?"#ef4444":l<=10?"#f59e0b":"#10b981",strokeWidth:"6",strokeDasharray:`${l/30*220} 220`,strokeLinecap:"round",className:"progress-ring transition-all duration-1000"})]}),n.jsx("div",{className:"relative z-10",children:n.jsx("span",{className:`text-2xl font-black ${l<=5?"text-red-400 animate-pulse":l<=10?"text-amber-400":"text-white"}`,children:l})})]})})]})]}),n.jsxs("div",{className:"px-4 slide-in",style:{animationDelay:"0.3s"},children:[n.jsxs("div",{className:"glass-card rounded-3xl shadow-xl p-6 mb-6 border border-white/10",children:[n.jsx("div",{className:"text-center mb-2",children:n.jsxs("span",{className:"text-xs font-bold text-white/40 uppercase tracking-wider",children:["Question ",s+1]})}),n.jsx("h2",{className:"text-xl font-bold text-center text-white leading-relaxed",children:e.prompt})]}),n.jsx("div",{className:"space-y-3",children:e.options.map((E,h)=>{const b=["A","B","C","D"],k=["from-blue-400 to-blue-500","from-green-400 to-green-500","from-yellow-400 to-yellow-500","from-purple-400 to-purple-500"];let T="glass-card border border-white/10",R="";return c&&(h===e.correctIndex?(T="bg-gradient-to-r from-green-500/20 to-emerald-500/20 border-2 border-green-400",R="correct-bounce"):x===h&&!u&&(T="bg-gradient-to-r from-red-500/20 to-pink-500/20 border-2 border-red-400",R="wrong-shake")),n.jsx("button",{onClick:()=>P(h),disabled:c,className:`w-full p-4 rounded-2xl shadow-lg transition-all ${T} ${R} 
                  ${c?"":"hover:scale-[1.02] active:scale-[0.98] hover:bg-white/10"} slide-in`,style:{animationDelay:`${.4+h*.05}s`},children:n.jsxs("div",{className:"flex items-center gap-4",children:[n.jsx("div",{className:`w-12 h-12 rounded-xl bg-gradient-to-br ${k[h]} 
                    text-white font-bold text-xl flex items-center justify-center shadow-md`,children:b[h]}),n.jsx("span",{className:"flex-1 text-left font-medium text-white",children:E}),c&&h===e.correctIndex&&n.jsx("span",{className:"text-2xl",children:"✅"}),c&&x===h&&!u&&n.jsx("span",{className:"text-2xl",children:"❌"})]})},h)})}),c&&n.jsx("div",{className:"mt-6 text-center slide-in",children:n.jsx("p",{className:"text-sm font-medium text-white/70",children:u?C.motivationalText:"No worries! Keep trying! 💪"})}),f>0&&n.jsx("div",{className:"mt-4 flex justify-center slide-in",style:{animationDelay:"0.6s"},children:n.jsx("div",{className:"glass-card rounded-full px-4 py-2 shadow-lg border border-white/10",children:n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx("span",{className:"text-xl",children:"🏁"}),n.jsxs("span",{className:"text-sm font-bold text-white/80",children:["Checkpoint: Question ",f]})]})})})]}),S&&n.jsx("div",{className:"fixed inset-0 pointer-events-none flex items-center justify-center z-50",children:n.jsx("div",{className:"bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-8 py-6 rounded-3xl shadow-2xl animate-bounce",children:n.jsxs("div",{className:"text-center",children:[n.jsx("div",{className:"text-5xl mb-3",children:"🎉"}),n.jsx("div",{className:"text-2xl font-black mb-2",children:"AMAZING STREAK!"}),n.jsx("div",{className:"text-lg",children:"You earned a life back! ❤️"})]})})})]})}function Cg({score:e,questionsAnswered:t,highScore:r,checkpoint:s,onRestart:a,onContinue:i,onBack:o}){const l=e>r,[c,u]=d.useState(!1),[f,p]=d.useState(0),[m,j]=d.useState(!1),x=d.useRef(null);d.useEffect(()=>{const g=e/60;let N=0;const C=setInterval(()=>{N+=g,N>=e?(p(e),clearInterval(C),l&&(u(!0),setTimeout(()=>u(!1),5e3))):p(Math.floor(N))},2e3/60);return setTimeout(()=>j(!0),2200),()=>clearInterval(C)},[e,l]),d.useEffect(()=>(document.body.classList.add("hide-bottom-nav"),()=>{document.body.classList.remove("hide-bottom-nav")}),[]);const S=(()=>t>=100?{emoji:"👑",title:"LEGENDARY!",subtitle:"You're a true Quiz Legend!",color:"from-purple-400 to-pink-500",stars:5}:t>=50?{emoji:"🏆",title:"CHAMPION!",subtitle:"Outstanding performance!",color:"from-yellow-400 to-amber-500",stars:5}:t>=30?{emoji:"💎",title:"EXPERT!",subtitle:"You're getting really good!",color:"from-blue-400 to-cyan-500",stars:4}:t>=20?{emoji:"⭐",title:"STAR PLAYER!",subtitle:"Keep up the great work!",color:"from-green-400 to-emerald-500",stars:3}:t>=10?{emoji:"🎯",title:"NICE TRY!",subtitle:"You're improving fast!",color:"from-orange-400 to-red-500",stars:2}:{emoji:"🌟",title:"GOOD START!",subtitle:"Every expert was once a beginner!",color:"from-indigo-400 to-purple-500",stars:1})();return n.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-black text-white relative overflow-hidden",children:[n.jsx("style",{jsx:!0,children:`
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
      `}),n.jsxs("div",{className:"absolute inset-0 overflow-hidden",children:[n.jsx("div",{className:"absolute top-20 left-10 text-[150px] opacity-5 float-animation",children:"🏆"}),n.jsx("div",{className:"absolute bottom-20 right-10 text-[120px] opacity-5 float-animation",style:{animationDelay:"1s"},children:"⭐"}),n.jsx("div",{className:"absolute top-40 right-20 text-[100px] opacity-5 float-animation",style:{animationDelay:"2s"},children:"🎯"})]}),c&&n.jsx("div",{className:"fixed inset-0 pointer-events-none z-50",children:[...Array(40)].map((y,v)=>n.jsx("div",{className:"absolute confetti-fall",style:{left:`${Math.random()*100}%`,animationDelay:`${Math.random()*3}s`,animationDuration:`${3+Math.random()*2}s`},children:n.jsx("span",{className:"text-3xl",children:["🎉","⭐","🎊","✨","🎈","💫","🌟"][Math.floor(Math.random()*7)]})},v))}),n.jsxs("div",{className:"relative z-10 flex flex-col items-center justify-center min-h-screen px-6 text-center",children:[n.jsxs("div",{className:"mb-8 slide-up",children:[n.jsx("h1",{className:"text-6xl font-black mb-4 bg-gradient-to-r from-red-400 to-pink-500 bg-clip-text text-transparent",children:"GAME OVER"}),l&&n.jsx("div",{className:"fade-in",style:{animationDelay:"1s"},children:n.jsx("div",{className:"inline-block px-6 py-3 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-bold shadow-2xl glow-text",children:n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsx("span",{className:"text-3xl",children:"🏆"}),n.jsx("span",{className:"text-xl",children:"NEW HIGH SCORE!"}),n.jsx("span",{className:"text-3xl",children:"🏆"})]})})})]}),m&&n.jsx("div",{className:"mb-8 slide-up",style:{animationDelay:"0.3s"},children:n.jsxs("div",{className:`glass-card rounded-3xl p-6 bg-gradient-to-r ${S.color} bg-opacity-20 border-2 border-white/20 shadow-2xl`,children:[n.jsx("div",{className:"text-6xl mb-3 bounce-animation",children:S.emoji}),n.jsx("h2",{className:"text-3xl font-black mb-2",children:S.title}),n.jsx("p",{className:"text-white/80 mb-4",children:S.subtitle}),n.jsx("div",{className:"flex justify-center gap-1",children:[...Array(5)].map((y,v)=>n.jsx("span",{className:`text-2xl ${v<S.stars?"star-pop":""}`,style:{animationDelay:`${2.5+v*.1}s`},children:v<S.stars?"⭐":"☆"},v))})]})}),n.jsxs("div",{className:"grid grid-cols-2 gap-4 mb-8 w-full max-w-md",children:[n.jsxs("div",{className:"glass-card rounded-2xl p-6 shadow-xl slide-up",style:{animationDelay:"0.4s"},children:[n.jsx("div",{className:"text-4xl mb-2",children:"🎯"}),n.jsx("div",{ref:x,className:`text-4xl font-black ${l?"text-yellow-400":"text-white"}`,children:f}),n.jsx("div",{className:"text-sm text-white/60 font-medium",children:"Points Earned"}),n.jsx("div",{className:"mt-3 pt-3 border-t border-white/10",children:n.jsxs("div",{className:"text-xs text-white/50",children:[t," questions"]})})]}),n.jsxs("div",{className:"glass-card rounded-2xl p-6 shadow-xl slide-up",style:{animationDelay:"0.5s"},children:[n.jsx("div",{className:"text-4xl mb-2",children:"📊"}),n.jsx("div",{className:"text-4xl font-black text-white",children:t}),n.jsx("div",{className:"text-sm text-white/60 font-medium",children:"Questions"}),n.jsx("div",{className:"mt-3 pt-3 border-t border-white/10",children:n.jsxs("div",{className:"text-xs text-white/50",children:["Best: ",Math.max(r,e)]})})]})]}),n.jsx("div",{className:"glass-card rounded-2xl px-6 py-4 mb-8 w-full max-w-md slide-up",style:{animationDelay:"0.6s"},children:n.jsx("p",{className:"text-white/80 font-medium",children:t>=50?"Incredible performance! You're a quiz master! 🌟":t>=20?"Great job! You're getting stronger! 💪":"Keep practicing! Every attempt makes you better! 🚀"})}),n.jsxs("div",{className:"space-y-3 w-full max-w-md",children:[s>0&&i&&n.jsx("button",{onClick:i,className:"w-full py-4 bg-gradient-to-r from-green-400 to-emerald-500 text-white rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all hover:scale-[1.02] active:scale-[0.98] slide-up",style:{animationDelay:"0.7s"},children:n.jsxs("div",{className:"flex items-center justify-center gap-3",children:[n.jsx("span",{className:"text-2xl",children:"🏁"}),n.jsxs("span",{children:["Continue from Question ",s]})]})}),n.jsx("button",{onClick:a,className:"w-full py-4 bg-gradient-to-r from-blue-400 to-indigo-500 text-white rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all hover:scale-[1.02] active:scale-[0.98] slide-up",style:{animationDelay:"0.8s"},children:n.jsxs("div",{className:"flex items-center justify-center gap-3",children:[n.jsx("span",{className:"text-2xl",children:"🎮"}),n.jsx("span",{children:"Play Again"})]})}),n.jsx("button",{onClick:o,className:"w-full py-4 glass-card text-white rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl transition-all hover:scale-[1.02] active:scale-[0.98] hover:bg-white/10 slide-up",style:{animationDelay:"0.9s"},children:n.jsxs("div",{className:"flex items-center justify-center gap-3",children:[n.jsx("span",{className:"text-2xl",children:"🏠"}),n.jsx("span",{children:"Back to Games"})]})})]})]})]})}const Dd={EASY:{min:0,max:9,timer:30,points:10},MEDIUM:{min:10,max:24,timer:25,points:20},HARD:{min:25,max:49,timer:20,points:30},EXPERT:{min:50,max:99,timer:15,points:50},LEGENDARY:{min:100,max:1/0,timer:10,points:100}};function Eg({onBack:e,isFromQuest:t}){const{coins:r,xp:s,level:a,soundOn:i,setSoundOn:o}=Ci(),[l,c]=d.useState("playing"),[u,f]=d.useState(3),[p,m]=d.useState(0),[j,x]=d.useState(0),[w,S]=d.useState(0),[y,v]=d.useState("EASY"),[g,N]=d.useState([]),[C,P]=d.useState(null),[E,h]=d.useState(30),[b,k]=d.useState(!1),[T,R]=d.useState(!1),[B,Q]=d.useState(0),[H,W]=d.useState(!1),F=d.useRef(null),I=d.useRef(new Set);d.useEffect(()=>(L(),Z(),window.history.pushState({mode:"survival"},"",window.location.href),()=>{F.current&&clearTimeout(F.current)}),[]),d.useEffect(()=>(l==="playing"&&C&&E>0&&!b&&(F.current=setTimeout(()=>{h(D=>D<=1?(J(),0):(D===6&&i&&te("/sounds/tick.mp3",.8),D-1))},1e3)),()=>{F.current&&clearTimeout(F.current)}),[l,C,E,b,i]),d.useEffect(()=>{const D=_(p);D!==y&&(v(D),i&&te("/sounds/levelup.mp3",.6))},[p,y,i]),d.useEffect(()=>{p>0&&p%10===0&&($(),Q(p),i&&te("/sounds/checkpoint.mp3",.7))},[p,i]),d.useEffect(()=>{const D=re=>{re.preventDefault(),W(!0),window.history.pushState({mode:"survival"},"",window.location.href)};return window.addEventListener("popstate",D),()=>{window.removeEventListener("popstate",D)}},[]);const _=D=>D>=100?"LEGENDARY":D>=50?"EXPERT":D>=25?"HARD":D>=10?"MEDIUM":"EASY",L=async()=>{try{const re=await(await fetch("/data/quiz_questions_bank.csv")).text(),{data:ne}=ur.parse(re,{header:!0,skipEmptyLines:!0,transformHeader:de=>de.trim().toLowerCase()}),ae=ne.map((de,Ee)=>{var be;const Te=[de.option1,de.option2,de.option3,de.option4].map(me=>(me||"").trim()).filter(Boolean);if(Te.length<4)return null;let fe={a:0,b:1,c:2,d:3}[(be=de.answer)==null?void 0:be.toLowerCase()];return fe===void 0&&(fe=Te.findIndex(me=>me.toLowerCase()===(de.answer||"").toLowerCase())),fe===-1&&(fe=0),{id:de.id||`q_${Ee}`,prompt:(de.question||"").trim(),options:Te,correctIndex:fe,category:(de.category||de.subject||"general").trim(),difficulty:(de.difficulty||"medium").toLowerCase()}}).filter(Boolean);N(ae),A(ae)}catch(D){console.error("Failed to load questions:",D)}},A=(D=g)=>{const re=D.filter(Ee=>!I.current.has(Ee.id));re.length===0&&(I.current.clear(),re.push(...D));const ne=y.toLowerCase();let ae=re.filter(Ee=>Ee.difficulty===ne||Ee.difficulty==="medium");ae.length===0&&(ae=re);const de=ae[Math.floor(Math.random()*ae.length)];de&&(I.current.add(de.id),P(de),h(Dd[y].timer),k(!1))},M=D=>{if(b)return;const re=D===C.correctIndex;R(re),k(!0),re?U():K(),setTimeout(()=>{(u>0||re)&&(m(ne=>ne+1),A())},1500)},U=()=>{const D=Dd[y].points;S(re=>re+D),x(re=>{const ne=re+1;if(t){const ae=JSON.parse(localStorage.getItem("questProgress")||"{}");ae.winStreak=Math.max(ae.winStreak||0,ne),ae.date=`${new Date().getFullYear()}-${new Date().getMonth()+1}-${new Date().getDate()}`,localStorage.setItem("questProgress",JSON.stringify(ae)),ne>=5&&console.log("Win streak quest completed!")}return ne%5===0&&u<3&&(f(ae=>Math.min(ae+1,3)),i&&te("/sounds/lifeup.mp3",.8)),ne}),ce.addCoins(Math.floor(D/10),"Survival Mode - Correct Answer"),ce.addXP(1),i&&te("/sounds/correct.mp3",.7)},K=()=>{x(0),f(D=>{const re=D-1;return re<=0&&(c("gameOver"),z()),re}),i&&te("/sounds/wrong.mp3",.7),q([200])},J=()=>{K()},$=()=>{const D={questionCount:p,totalScore:w,lives:u,correctStreak:j,timestamp:Date.now()};localStorage.setItem("survival_checkpoint",JSON.stringify(D))},Z=()=>{const D=localStorage.getItem("survival_checkpoint");if(D)try{const re=JSON.parse(D);Date.now()-re.timestamp<864e5?(m(re.questionCount),S(re.totalScore),f(re.lives),x(re.correctStreak),Q(re.questionCount)):localStorage.removeItem("survival_checkpoint")}catch(re){console.error("Failed to load checkpoint:",re)}},O=()=>{localStorage.removeItem("survival_checkpoint"),Q(0)},z=()=>{const D=parseInt(localStorage.getItem("survival_highscore")||"0");w>D&&(localStorage.setItem("survival_highscore",w.toString()),localStorage.setItem("survival_highquestions",p.toString()))},G=()=>{c("playing"),f(3),m(0),x(0),S(0),v("EASY"),I.current.clear(),O(),A()},Y=()=>{c("playing"),A()},ee=()=>{W(!0)},le=()=>{if(t){const D=JSON.parse(localStorage.getItem("questProgress")||"{}");D.winStreak=Math.max(D.winStreak||0,j),D.date=`${new Date().getFullYear()}-${new Date().getMonth()+1}-${new Date().getDate()}`,localStorage.setItem("questProgress",JSON.stringify(D)),window.location.href="/profile/quests"}else window.history.go(-1),e()},te=(D,re=.5)=>{try{const ne=new Audio(D);ne.volume=re,ne.play()}catch{}},q=D=>{navigator.vibrate&&navigator.vibrate(D)};return d.useEffect(()=>(document.body.classList.add("hide-bottom-nav"),()=>{document.body.classList.remove("hide-bottom-nav")}),[]),l==="gameOver"?n.jsxs(n.Fragment,{children:[n.jsx(Cg,{score:w,questionsAnswered:p,highScore:parseInt(localStorage.getItem("survival_highscore")||"0"),checkpoint:B,onRestart:G,onContinue:B>0?Y:null,onBack:ee}),H&&n.jsx("div",{className:"fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 px-6",children:n.jsxs("div",{className:"bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-6 max-w-sm w-full shadow-2xl slide-in border border-white/10",children:[n.jsxs("div",{className:"text-center mb-6",children:[n.jsx("div",{className:"text-5xl mb-3",children:"🚪"}),n.jsx("h3",{className:"text-xl font-bold text-white mb-2",children:"Leave the game?"}),n.jsx("p",{className:"text-white/70",children:"Your progress saves at checkpoints!"})]}),n.jsxs("div",{className:"flex gap-3",children:[n.jsx("button",{onClick:()=>W(!1),className:"flex-1 py-3 bg-gradient-to-r from-green-400 to-emerald-500 text-white rounded-2xl font-bold shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]",children:"Keep Playing"}),n.jsx("button",{onClick:le,className:"flex-1 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-2xl font-bold shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]",children:"Exit"})]})]})})]}):C?n.jsxs(n.Fragment,{children:[n.jsx(Sg,{question:C,onAnswer:M,lives:u,questionCount:p,correctStreak:j,totalScore:w,currentDifficulty:y,timeLeft:E,showFeedback:b,lastAnswerCorrect:T,checkpoint:B,onBack:ee,soundOn:i,setSoundOn:o}),H&&n.jsx("div",{className:"fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 px-6",children:n.jsxs("div",{className:"bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-6 max-w-sm w-full shadow-2xl slide-in border border-white/10",children:[n.jsxs("div",{className:"text-center mb-6",children:[n.jsx("div",{className:"text-5xl mb-3",children:"🚪"}),n.jsx("h3",{className:"text-xl font-bold text-white mb-2",children:"Leave the game?"}),n.jsx("p",{className:"text-white/70",children:"Your progress saves at checkpoints!"})]}),n.jsxs("div",{className:"flex gap-3",children:[n.jsx("button",{onClick:()=>W(!1),className:"flex-1 py-3 bg-gradient-to-r from-green-400 to-emerald-500 text-white rounded-2xl font-bold shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]",children:"Keep Playing"}),n.jsx("button",{onClick:le,className:"flex-1 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-2xl font-bold shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]",children:"Exit"})]})]})})]}):n.jsx("div",{className:"min-h-screen bg-base-bg text-white flex items-center justify-center",children:n.jsx("div",{className:"text-xl",children:"Loading questions..."})})}const er=[{id:1,name:"Sandy Beach",emoji:"🏖️",theme:{background:"from-yellow-300 via-orange-300 to-blue-400",accent:"from-yellow-400 to-orange-400",cardBg:"from-amber-500/20 to-yellow-500/20",unlockGradient:"from-yellow-400 to-amber-500"},difficulty:"EASY",difficultyRange:{min:0,max:9},questionDifficulty:["easy"],requiredCorrect:2,timeLimit:300,rewards:{perCorrectAnswer:10,gemChance:.3,gemBonus:5,speedBonus:3,perfectBonus:50,treasurePiece:"🧩",completionCoins:30},description:"Start your adventure on the sunny shores! Easy questions to warm up.",unlockRequirement:null,visualElements:{bgEmojis:["🌊","🐚","🦀","⛱️","🌺"],diggingEmoji:"⛏️",foundEmojis:["💎","🪙","✨"]}},{id:2,name:"Jungle Cave",emoji:"🌴",theme:{background:"from-green-400 via-emerald-500 to-teal-600",accent:"from-green-500 to-emerald-600",cardBg:"from-green-500/20 to-emerald-500/20",unlockGradient:"from-green-400 to-emerald-500"},difficulty:"EASY-MEDIUM",difficultyRange:{min:10,max:24},questionDifficulty:["easy","medium"],requiredCorrect:2,timeLimit:300,rewards:{perCorrectAnswer:15,gemChance:.35,gemBonus:7,speedBonus:5,perfectBonus:75,treasurePiece:"🗝️",completionCoins:50},description:"Explore the mysterious jungle caves! Watch out for tricky vines!",unlockRequirement:{island:1,treasurePiece:!0},visualElements:{bgEmojis:["🌿","🦜","🐒","🦋","🌺"],diggingEmoji:"⛏️",foundEmojis:["💎","🪙","🌟"]}},{id:3,name:"Crystal Mountain",emoji:"⛰️",theme:{background:"from-purple-400 via-pink-400 to-indigo-500",accent:"from-purple-500 to-pink-500",cardBg:"from-purple-500/20 to-pink-500/20",unlockGradient:"from-purple-400 to-pink-500"},difficulty:"MEDIUM",difficultyRange:{min:25,max:49},questionDifficulty:["medium"],requiredCorrect:2,timeLimit:300,rewards:{perCorrectAnswer:20,gemChance:.4,gemBonus:10,speedBonus:7,perfectBonus:100,treasurePiece:"💎",completionCoins:75},description:"Climb the sparkling crystal peaks! Medium challenges await!",unlockRequirement:{island:2,treasurePiece:!0},visualElements:{bgEmojis:["✨","🔮","⭐","🌟","💫"],diggingEmoji:"⚒️",foundEmojis:["💎","🪙","🌈"]}},{id:4,name:"Pirate Ship",emoji:"🏴‍☠️",theme:{background:"from-slate-600 via-blue-600 to-cyan-500",accent:"from-slate-700 to-blue-700",cardBg:"from-slate-500/20 to-blue-500/20",unlockGradient:"from-slate-500 to-blue-600"},difficulty:"MEDIUM-HARD",difficultyRange:{min:50,max:99},questionDifficulty:["medium","hard"],requiredCorrect:2,timeLimit:300,rewards:{perCorrectAnswer:30,gemChance:.45,gemBonus:15,speedBonus:10,perfectBonus:150,treasurePiece:"🗺️",completionCoins:100},description:"Ahoy matey! Navigate the pirate ship's challenging puzzles!",unlockRequirement:{island:3,treasurePiece:!0},visualElements:{bgEmojis:["⚓","🦜","💀","🌊","⛵"],diggingEmoji:"🗡️",foundEmojis:["💎","🪙","👑"]}},{id:5,name:"Volcano Peak",emoji:"🌋",theme:{background:"from-red-500 via-orange-500 to-yellow-500",accent:"from-red-600 to-orange-600",cardBg:"from-red-500/20 to-orange-500/20",unlockGradient:"from-red-500 to-orange-500"},difficulty:"HARD",difficultyRange:{min:100,max:1/0},questionDifficulty:["hard"],requiredCorrect:2,timeLimit:300,rewards:{perCorrectAnswer:50,gemChance:.5,gemBonus:25,speedBonus:15,perfectBonus:200,treasurePiece:"👑",completionCoins:150},description:"The ultimate challenge! Can you conquer the volcano?",unlockRequirement:{island:4,treasurePiece:!0},visualElements:{bgEmojis:["🔥","🌋","💥","⚡","🔴"],diggingEmoji:"⛏️",foundEmojis:["💎","🪙","🏆"]}}],Me={SHOVELS_PER_ISLAND:3,QUESTIONS_PER_ISLAND:3,SPEED_BONUS_THRESHOLD:5,MIN_CORRECT_FOR_TREASURE:2,FINAL_TREASURE_REWARD:200,FINAL_TREASURE_TITLE:"Treasure Master",DIGGING_ANIMATION_DURATION:1500,REWARD_DISPLAY_DURATION:2e3,TRANSITION_DURATION:500,STORAGE_KEYS:{PROGRESS:"treasureHunt_progress",STATS:"treasureHunt_stats",UNLOCKED_ISLANDS:"treasureHunt_unlocked",COMPLETED_ISLANDS:"treasureHunt_completed",TREASURE_PIECES:"treasureHunt_pieces"},SOUNDS:{DIG:"/sounds/dig.mp3",TREASURE_FOUND:"/sounds/treasure.mp3",GEM_FOUND:"/sounds/gem.mp3",WRONG:"/sounds/wrong.mp3",ISLAND_COMPLETE:"/sounds/islandcomplete.mp3",ISLAND_UNLOCK:"/sounds/unlock.mp3",FINAL_TREASURE:"/sounds/victory.mp3",TICK:"/sounds/tick.mp3",SHOVEL_BREAK:"/sounds/break.mp3"}},on=e=>er.find(t=>t.id===e),Pg=(e,t)=>{const r=on(e);if(!r.unlockRequirement)return!0;const s=t[r.unlockRequirement.island];return s&&s.treasurePiece},Tg=(e,t)=>{const r={0:["Keep trying! You'll get it! 💪","Don't give up! Adventure awaits! 🌟","Practice makes perfect! 🎯"],1:["Good effort! Almost there! 🌈","Nice try! Keep going! ⭐","You're learning fast! 🚀"],2:["Awesome! You found treasure! 🏆","Great job, explorer! 🎉","You're amazing! ✨"],3:["PERFECT! You're a champion! 👑","INCREDIBLE! Master explorer! 🌟","LEGENDARY performance! 🏆"]},s=r[e]||r[0];return s[Math.floor(Math.random()*s.length)]},Rg=e=>er.map(t=>{var r;return{id:t.id,piece:t.rewards.treasurePiece,collected:((r=e[t.id])==null?void 0:r.treasurePiece)||!1}});function _g({islands:e,islandProgress:t,onSelectIsland:r,onBack:s,soundOn:a,setSoundOn:i,totalStats:o}){const[l,c]=d.useState(!1),u=Rg(t),f=u.filter(m=>m.collected).length,p=Math.round(f/e.length*100);return d.useEffect(()=>(document.body.style.position="fixed",document.body.style.overflow="hidden",document.body.style.width="100%",document.body.style.height="100%",()=>{document.body.style.position="",document.body.style.overflow="",document.body.style.width="",document.body.style.height=""}),[]),n.jsxs("div",{className:"fixed inset-0 bg-gradient-to-b from-sky-400 via-blue-500 to-blue-600 overflow-hidden flex flex-col",children:[n.jsx("style",{jsx:!0,children:`
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
      `}),n.jsxs("div",{className:"absolute inset-0",children:[n.jsx("div",{className:"absolute top-10 cloud-drift",style:{animationDelay:"0s"},children:n.jsx("div",{className:"text-6xl opacity-40",children:"☁️"})}),n.jsx("div",{className:"absolute top-12 cloud-drift",style:{animationDelay:"7s",animationDuration:"25s"},children:n.jsx("div",{className:"text-5xl opacity-40",children:"☁️"})}),n.jsx("div",{className:"absolute top-10 right-12",children:n.jsx("div",{className:"text-6xl pulse-animation opacity-80",children:"☀️"})}),n.jsx("div",{className:"absolute top-16 left-20 float-animation opacity-60",children:n.jsx("div",{className:"text-2xl",children:"🦜"})})]}),n.jsxs("div",{className:"relative z-20 px-4 pt-[calc(env(safe-area-inset-top)+3rem)]",children:[n.jsxs("div",{className:"flex justify-between items-center mb-3",children:[n.jsx("button",{onClick:s,className:"w-11 h-11 glass-card rounded-2xl shadow-lg flex items-center justify-center hover:scale-105 transition-transform",children:n.jsx("span",{className:"text-xl",children:"⬅"})}),n.jsx("div",{className:"glass-card rounded-2xl px-3 py-2 shadow-lg",children:n.jsxs("div",{className:"text-white font-bold text-center",children:[n.jsx("div",{className:"text-[10px] opacity-90",children:"TREASURE HUNT"}),n.jsx("div",{className:"text-sm",children:"🏝️ Island Explorer 🏝️"})]})}),n.jsx("button",{onClick:()=>i(!a),className:"w-11 h-11 glass-card rounded-2xl shadow-lg flex items-center justify-center hover:scale-105 transition-transform",children:n.jsx("span",{className:"text-xl",children:a?"🔊":"🔇"})})]}),n.jsxs("div",{className:"glass-card rounded-2xl p-3 shadow-xl mt-2",children:[n.jsxs("div",{className:"flex items-center justify-between mb-2",children:[n.jsx("span",{className:"text-white font-bold text-sm",children:"Adventure Progress"}),n.jsxs("span",{className:"text-white font-bold text-sm",children:[p,"%"]})]}),n.jsx("div",{className:"w-full h-2.5 bg-white/20 rounded-full overflow-hidden",children:n.jsx("div",{className:"h-full bg-gradient-to-r from-yellow-400 to-amber-500 transition-all duration-1000",style:{width:`${p}%`}})}),n.jsx("button",{onClick:()=>c(!0),className:"mt-2.5 w-full py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-bold text-sm hover:scale-[1.02] transition-transform",children:n.jsxs("div",{className:"flex items-center justify-center gap-2",children:[n.jsx("span",{children:"🏆"}),n.jsxs("span",{children:["Treasure Pieces: ",f,"/5"]}),n.jsx("span",{children:"🏆"})]})})]})]}),n.jsx("div",{className:"flex-1 flex items-center justify-center px-4 py-4",children:n.jsxs("div",{className:"w-full max-w-md",children:[n.jsx("div",{className:"grid grid-cols-2 gap-3",children:e.slice(0,4).map(m=>{const j=t[m.id],x=j==null?void 0:j.unlocked,w=j==null?void 0:j.treasurePiece,S=j==null?void 0:j.perfectScore;return n.jsxs("button",{onClick:()=>r(m.id),disabled:!x,className:`relative aspect-square rounded-2xl transition-all ${x?"hover:scale-105 active:scale-95 shadow-xl":"opacity-50 grayscale"}`,children:[n.jsx("div",{className:`absolute inset-0 rounded-2xl bg-gradient-to-br ${x?m.theme.background:"from-gray-400 to-gray-500"}`,children:x&&n.jsxs(n.Fragment,{children:[n.jsx("div",{className:"absolute top-1 right-1 text-lg sparkle-animation",children:"✨"}),n.jsx("div",{className:"absolute bottom-1 left-1 text-sm sparkle-animation",style:{animationDelay:"1s"},children:"⭐"})]})}),!x&&n.jsx("div",{className:"absolute inset-0 rounded-2xl bg-black/30 flex items-center justify-center",children:n.jsx("div",{className:"text-4xl",children:"🔒"})}),n.jsxs("div",{className:"relative h-full flex flex-col items-center justify-center p-3",children:[n.jsx("div",{className:"absolute top-1 left-1 w-7 h-7 bg-white/30 rounded-full flex items-center justify-center",children:n.jsx("span",{className:"text-white font-bold text-sm",children:m.id})}),S&&n.jsx("div",{className:"absolute top-1 right-1 text-lg",children:"💯"}),n.jsx("div",{className:`text-5xl mb-1 ${x?"bounce-animation":""}`,children:x?m.emoji:"❓"}),n.jsx("div",{className:"text-white font-bold text-sm text-center mb-1",children:m.name}),n.jsx("div",{className:`px-2 py-0.5 rounded-full text-[10px] font-bold ${x?"bg-white/30":"bg-black/30"} text-white`,children:m.difficulty}),w&&n.jsx("div",{className:"absolute bottom-1 text-2xl pulse-animation",children:m.rewards.treasurePiece}),(j==null?void 0:j.attempts)>0&&n.jsxs("div",{className:"absolute -bottom-1 -right-1 bg-white/90 text-gray-800 rounded-full px-2 py-0.5 text-[10px] font-bold flex items-center gap-1",children:[n.jsxs("span",{children:[j.bestScore,"/3"]}),n.jsx("span",{children:"⭐"})]})]})]},m.id)})}),n.jsx("div",{className:"flex justify-center mt-3",children:e.slice(4,5).map(m=>{const j=t[m.id],x=j==null?void 0:j.unlocked,w=j==null?void 0:j.treasurePiece,S=j==null?void 0:j.perfectScore;return n.jsxs("button",{onClick:()=>r(m.id),disabled:!x,className:`relative w-[calc(50%-6px)] aspect-square rounded-2xl transition-all ${x?"hover:scale-105 active:scale-95 shadow-xl":"opacity-50 grayscale"}`,children:[n.jsxs("div",{className:`absolute inset-0 rounded-2xl bg-gradient-to-br ${x?m.theme.background:"from-gray-400 to-gray-500"}`,children:[x&&n.jsxs(n.Fragment,{children:[n.jsx("div",{className:"absolute top-1 right-1 text-lg sparkle-animation",children:"✨"}),n.jsx("div",{className:"absolute bottom-1 left-1 text-sm sparkle-animation",style:{animationDelay:"1s"},children:"⭐"})]}),!x&&n.jsx("div",{className:"absolute inset-0 rounded-2xl bg-gradient-to-t from-yellow-400/20 to-transparent animate-pulse"})]}),!x&&n.jsx("div",{className:"absolute inset-0 rounded-2xl bg-black/30 flex items-center justify-center",children:n.jsx("div",{className:"text-4xl",children:"🔒"})}),n.jsxs("div",{className:"relative h-full flex flex-col items-center justify-center p-3",children:[n.jsx("div",{className:"absolute top-1 left-1 w-7 h-7 bg-white/30 rounded-full flex items-center justify-center",children:n.jsx("span",{className:"text-white font-bold text-sm",children:m.id})}),S&&n.jsx("div",{className:"absolute top-1 right-1 text-lg",children:"💯"}),n.jsx("div",{className:`text-5xl mb-1 ${x?"bounce-animation":""}`,children:x?m.emoji:"👑"}),n.jsx("div",{className:"text-white font-bold text-sm text-center mb-1",children:m.name}),n.jsx("div",{className:`px-2 py-0.5 rounded-full text-[10px] font-bold ${x?"bg-white/30":"bg-black/30"} text-white`,children:m.difficulty}),w&&n.jsx("div",{className:"absolute bottom-1 text-2xl pulse-animation",children:m.rewards.treasurePiece}),(j==null?void 0:j.attempts)>0&&n.jsxs("div",{className:"absolute -bottom-1 -right-1 bg-white/90 text-gray-800 rounded-full px-2 py-0.5 text-[10px] font-bold flex items-center gap-1",children:[n.jsxs("span",{children:[j.bestScore,"/3"]}),n.jsx("span",{children:"⭐"})]})]})]},m.id)})})]})}),n.jsx("div",{className:"relative z-20 px-4 pb-[calc(env(safe-area-inset-bottom)+3rem)]",children:n.jsx("div",{className:"bg-gradient-to-r from-indigo-500/30 to-purple-500/30 backdrop-blur-lg rounded-2xl shadow-xl border border-white/20",children:n.jsxs("div",{className:"grid grid-cols-3 gap-2 text-center",children:[n.jsxs("div",{className:"relative",children:[n.jsx("div",{className:"text-2xl mb-0.5 filter drop-shadow-lg",children:"💰"}),n.jsx("div",{className:"text-yellow-300 font-black text-lg",children:o.totalCoinsEarned}),n.jsx("div",{className:"text-white/80 text-[10px] font-medium",children:"Total Coins"})]}),n.jsxs("div",{className:"relative",children:[n.jsx("div",{className:"text-2xl mb-0.5 filter drop-shadow-lg",children:"💎"}),n.jsx("div",{className:"text-cyan-300 font-black text-lg",children:o.totalGemsFound}),n.jsx("div",{className:"text-white/80 text-[10px] font-medium",children:"Gems Found"})]}),n.jsxs("div",{className:"relative",children:[n.jsx("div",{className:"text-2xl mb-0.5 filter drop-shadow-lg",children:"📝"}),n.jsxs("div",{className:"text-green-300 font-black text-lg",children:[o.totalCorrectAnswers,"/",o.totalQuestionsAnswered]}),n.jsx("div",{className:"text-white/80 text-[10px] font-medium",children:"Correct"})]})]})})}),l&&n.jsx("div",{className:"fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 px-6",children:n.jsxs("div",{className:"bg-gradient-to-br from-purple-600 to-pink-600 rounded-3xl p-6 max-w-sm w-full shadow-2xl",children:[n.jsx("h3",{className:"text-2xl font-bold text-white text-center mb-6",children:"🏆 Treasure Collection 🏆"}),n.jsx("div",{className:"flex justify-center gap-4 mb-6",children:u.map((m,j)=>n.jsx("div",{className:`text-5xl ${m.collected?"":"opacity-30 grayscale"}`,children:m.collected?m.piece:"❓"},m.id))}),n.jsx("div",{className:"text-center text-white mb-6",children:f===5?n.jsxs("div",{children:[n.jsx("p",{className:"text-lg font-bold mb-2",children:"🎉 COMPLETE! 🎉"}),n.jsx("p",{className:"text-sm opacity-90",children:"You're a true Treasure Master!"})]}):n.jsx("p",{className:"text-sm opacity-90",children:"Collect all 5 pieces to unlock the final treasure!"})}),n.jsx("button",{onClick:()=>c(!1),className:"w-full py-3 bg-white/20 backdrop-blur rounded-2xl text-white font-bold hover:bg-white/30 transition-colors",children:"Close"})]})})]})}function Ag({island:e,progress:t,onStart:r,onClose:s,soundOn:a}){const[i,o]=d.useState(!1);d.useEffect(()=>{o(!0)},[]),d.useEffect(()=>{const m=j=>{s()};return window.history.pushState({islandDetail:!0},"",window.location.pathname),window.addEventListener("popstate",m),()=>window.removeEventListener("popstate",m)},[s]);const l=(t==null?void 0:t.attempts)>0,c=t==null?void 0:t.treasurePiece;t==null||t.perfectScore;const u=(t==null?void 0:t.bestScore)||0,f=()=>{if(a){const m=new Audio("/sounds/start.mp3");m.volume=.5,m.play().catch(()=>{})}r()},p=m=>{const j=Math.floor(m/60),x=m%60;return`${j}:${x.toString().padStart(2,"0")}`};return n.jsxs("div",{className:"fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50 p-4",children:[n.jsx("style",{jsx:!0,children:`
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
      `}),n.jsxs("div",{className:`relative w-full max-w-sm bg-gradient-to-br ${e.theme.background} rounded-2xl shadow-2xl ${i?"slide-up":""}`,children:[n.jsx("div",{className:"relative p-4 pb-2",children:n.jsxs("div",{className:"text-center",children:[n.jsx("div",{className:"text-6xl mb-2 pulse-animation",children:e.emoji}),n.jsx("h2",{className:"text-2xl font-black text-white",children:e.name}),n.jsx("div",{className:"inline-block px-3 py-1 bg-white/20 backdrop-blur rounded-full mt-2",children:n.jsxs("span",{className:"text-white font-bold text-sm",children:["Level ",e.id," • ",e.difficulty]})})]})}),n.jsxs("div",{className:"px-4 py-3 space-y-2",children:[n.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[n.jsxs("div",{className:"bg-black/10 backdrop-blur rounded-xl p-3 text-center",children:[n.jsx("div",{className:"text-white/70 text-xs mb-1",children:"Time"}),n.jsx("div",{className:"text-white font-bold",children:p(e.timeLimit)})]}),n.jsxs("div",{className:"bg-black/10 backdrop-blur rounded-xl p-3 text-center",children:[n.jsx("div",{className:"text-white/70 text-xs mb-1",children:"Questions"}),n.jsx("div",{className:"text-white font-bold",children:Me.QUESTIONS_PER_ISLAND})]})]}),n.jsxs("div",{className:"bg-black/10 backdrop-blur rounded-xl p-3 flex items-center justify-between",children:[n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx("span",{className:"text-2xl",children:e.rewards.treasurePiece}),n.jsx("span",{className:"text-white font-medium",children:"To Win"})]}),n.jsxs("span",{className:"text-white font-bold",children:[e.requiredCorrect,"/3 Correct"]})]}),n.jsxs("div",{className:"bg-black/10 backdrop-blur rounded-xl p-3",children:[n.jsx("div",{className:"text-white font-bold text-sm mb-2",children:"Rewards"}),n.jsxs("div",{className:"grid grid-cols-4 gap-2 text-center",children:[n.jsxs("div",{children:[n.jsx("div",{className:"text-xl",children:"💰"}),n.jsx("div",{className:"text-white/70 text-xs",children:e.rewards.perCorrectAnswer})]}),n.jsxs("div",{children:[n.jsx("div",{className:"text-xl",children:"💎"}),n.jsxs("div",{className:"text-white/70 text-xs",children:[Math.round(e.rewards.gemChance*100),"%"]})]}),n.jsxs("div",{children:[n.jsx("div",{className:"text-xl",children:"⚡"}),n.jsxs("div",{className:"text-white/70 text-xs",children:["+",e.rewards.speedBonus]})]}),n.jsxs("div",{children:[n.jsx("div",{className:"text-xl",children:"🏆"}),n.jsxs("div",{className:"text-white/70 text-xs",children:["+",e.rewards.perfectBonus]})]})]})]}),l&&n.jsx("div",{className:"bg-black/10 backdrop-blur rounded-xl p-3",children:n.jsxs("div",{className:"flex items-center justify-between",children:[n.jsx("div",{className:"flex gap-1",children:[...Array(3)].map((m,j)=>n.jsx("span",{className:"text-lg",children:j<u?"⭐":"☆"},j))}),n.jsxs("div",{className:"text-white text-sm",children:[n.jsxs("span",{className:"font-bold",children:[u,"/3"]})," • ",t.attempts," tries"]}),c&&n.jsx("div",{className:"text-2xl",children:e.rewards.treasurePiece})]})})]}),n.jsxs("div",{className:"p-4 pt-2 space-y-2",children:[n.jsx("button",{onClick:f,className:"w-full py-3 bg-gradient-to-r from-green-400 to-emerald-500 text-white rounded-xl font-black text-base shadow-lg hover:shadow-xl transition-all hover:scale-[1.02] active:scale-[0.98]",children:n.jsxs("span",{className:"flex items-center justify-center gap-2",children:[n.jsx("span",{className:"text-xl",children:"🏴‍☠️"}),n.jsx("span",{children:l?"Play Again":"Start Adventure"}),n.jsx("span",{className:"text-xl",children:"🏴‍☠️"})]})}),n.jsx("button",{onClick:s,className:"w-full py-2 bg-white/20 backdrop-blur text-white rounded-xl font-bold text-sm hover:bg-white/30 transition-colors",children:"Back to Map"})]})]})]})}function Ig({shovelsRemaining:e,showBreak:t=!1}){const[r,s]=d.useState(!1),[a,i]=d.useState(e),o=3;return d.useEffect(()=>{e<a&&(s(!0),setTimeout(()=>s(!1),1e3)),i(e)},[e,a]),n.jsxs("div",{className:"inline-block",children:[n.jsx("style",{jsx:!0,children:`
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
      `}),n.jsx("div",{className:"glass-badge rounded-xl px-4 py-2 shadow-lg",children:n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx("span",{className:"text-gray-800 font-bold text-xs",children:"Shovels:"}),n.jsx("div",{className:"flex gap-2",children:[...Array(o)].map((l,c)=>{const u=c<e,f=r&&c===e;return n.jsxs("div",{className:"relative w-10 h-10 flex items-center justify-center",children:[n.jsx("div",{className:`
                    text-3xl transition-all duration-300
                    ${u?"shovel-pulse":""}
                    ${f?"shovel-break":""}
                    ${!u&&!f?"opacity-30 grayscale":""}
                  `,children:u||f?"⛏️":"🪦"}),f&&n.jsxs(n.Fragment,{children:[n.jsx("div",{className:"absolute inset-0 pointer-events-none",children:n.jsxs("svg",{className:"w-full h-full",viewBox:"0 0 40 40",children:[n.jsx("path",{d:"M20,10 L18,20 L22,30",stroke:"#ff4444",strokeWidth:"2",fill:"none",opacity:"0.8",className:"shovel-crack"}),n.jsx("path",{d:"M15,15 L20,20 L25,18",stroke:"#ff4444",strokeWidth:"1.5",fill:"none",opacity:"0.6",className:"shovel-crack",style:{animationDelay:"0.1s"}})]})}),n.jsxs("div",{className:"absolute inset-0 pointer-events-none",children:[n.jsx("span",{className:"absolute top-0 left-1/2 text-xs shovel-fall",children:"💔"}),n.jsx("span",{className:"absolute top-1/2 left-0 text-xs shovel-fall",style:{animationDelay:"0.2s"},children:"✨"}),n.jsx("span",{className:"absolute top-1/2 right-0 text-xs shovel-fall",style:{animationDelay:"0.3s"},children:"💥"})]})]}),n.jsx("div",{className:"absolute -bottom-1 left-1/2 -translate-x-1/2",children:n.jsx("span",{className:`text-xs font-bold ${u?"text-blue-600":"text-white/30"}`,children:c+1})})]},c)})}),e===0&&n.jsx("span",{className:"text-red-400 text-sm font-bold animate-pulse ml-2",children:"No shovels left!"}),e===1&&n.jsx("span",{className:"text-red-500 text-sm font-bold ml-2",children:"Last chance!"})]})})]})}function Lg({island:e,foundGem:t,onComplete:r}){const[s,a]=d.useState("digging"),[i,o]=d.useState(!1),[l,c]=d.useState(!1);return d.useEffect(()=>{(async()=>{await new Promise(f=>setTimeout(f,800)),a("revealing"),o(!0),t&&(await new Promise(f=>setTimeout(f,400)),c(!0)),await new Promise(f=>setTimeout(f,1e3)),a("complete"),await new Promise(f=>setTimeout(f,300)),r()})()},[t,r]),n.jsxs("div",{className:"fixed inset-0 z-40 pointer-events-none flex items-center justify-center",children:[n.jsx("style",{jsx:!0,children:`
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
      `}),s==="digging"&&n.jsxs("div",{className:"relative",children:[n.jsx("div",{className:"text-8xl dig-animation",children:e.visualElements.diggingEmoji}),[...Array(8)].map((u,f)=>n.jsx("div",{className:"dirt-particle text-4xl",style:{"--fly-x":`${(Math.random()-.5)*200}px`,"--fly-y":`${-Math.random()*150-50}px`,left:"50%",top:"60%",animationDelay:`${f*.1}s`},children:"🟫"},f)),n.jsx("div",{className:"absolute -bottom-4 left-1/2 -translate-x-1/2",children:n.jsx("div",{className:"text-6xl opacity-50",children:"💨"})})]}),s==="revealing"&&n.jsxs("div",{className:"relative",children:[i&&n.jsxs("div",{className:"relative",children:[n.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:n.jsx("div",{className:"w-32 h-32 rounded-full bg-yellow-400/30 blur-xl glow-effect"})}),n.jsxs("div",{className:"relative flex items-center justify-center",children:[n.jsx("div",{className:"text-7xl treasure-reveal treasure-float",children:"💰"}),n.jsx("div",{className:"absolute text-5xl coin-spin",style:{left:"-30px"},children:"🪙"}),n.jsx("div",{className:"absolute text-5xl coin-spin",style:{right:"-30px",animationDelay:"0.5s"},children:"🪙"}),n.jsx("div",{className:"absolute text-4xl coin-spin",style:{top:"-30px",animationDelay:"1s"},children:"🪙"})]}),[...Array(6)].map((u,f)=>n.jsx("div",{className:"absolute text-3xl star-burst",style:{left:"50%",top:"50%",transform:`translate(-50%, -50%) rotate(${f*60}deg) translateY(-40px)`,animationDelay:`${f*.1}s`},children:"⭐"},f))]}),l&&n.jsxs("div",{className:"absolute -top-10 left-1/2 -translate-x-1/2",children:[n.jsxs("div",{className:"relative",children:[n.jsx("div",{className:"text-6xl gem-sparkle",children:"💎"}),n.jsx("div",{className:"absolute -top-2 -left-2 text-2xl animate-pulse",children:"✨"}),n.jsx("div",{className:"absolute -top-2 -right-2 text-2xl animate-pulse",style:{animationDelay:"0.3s"},children:"✨"}),n.jsx("div",{className:"absolute -bottom-2 left-1/2 -translate-x-1/2 text-2xl animate-pulse",style:{animationDelay:"0.6s"},children:"✨"})]}),n.jsx("div",{className:"absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap",children:n.jsx("span",{className:"text-cyan-300 font-black text-lg drop-shadow-lg",children:"RARE GEM!"})})]}),n.jsx("div",{className:"absolute -bottom-16 left-1/2 -translate-x-1/2 text-center",children:n.jsx("div",{className:"text-white font-black text-2xl drop-shadow-lg",children:t?"AMAZING FIND!":"TREASURE FOUND!"})})]}),s==="complete"&&n.jsx("div",{className:"relative opacity-0 transition-opacity duration-300",children:n.jsx("div",{className:"text-7xl",children:"✅"})})]})}function Dg({island:e,question:t,questionNumber:r,totalQuestions:s,shovelsRemaining:a,timeRemaining:i,coinsEarned:o,gemsFound:l,onAnswer:c,onQuit:u,soundOn:f,setSoundOn:p}){const[m,j]=d.useState(null),[x,w]=d.useState(!1),[S,y]=d.useState(!1),[v,g]=d.useState(!1),[N,C]=d.useState(!1),[P,E]=d.useState(!1),[h,b]=d.useState(!1),k=d.useRef(null);d.useEffect(()=>{j(null),w(!1),y(!1),g(!1),C(!1),b(!1)},[t]),d.useEffect(()=>{const H=W=>{W.stopImmediatePropagation(),P||(E(!0),window.history.pushState({questionScreen:!0},"",window.location.pathname))};return window.history.pushState({questionScreen:!0},"",window.location.pathname),window.addEventListener("popstate",H,!0),()=>window.removeEventListener("popstate",H,!0)},[P]);const T=H=>{const W=Math.floor(H/60),F=H%60;return`${W}:${F.toString().padStart(2,"0")}`},R=()=>i<=10?"critical":i<=30?"warning":"normal",B=H=>{if(h||x)return;j(H),b(!0);const W=H===t.correctIndex;y(W),setTimeout(()=>{if(w(!0),f)if(W){const F=new Audio("/sounds/dig.mp3");F.volume=.5,F.play().catch(()=>{})}else{const F=new Audio("/sounds/wrong.mp3");F.volume=.5,F.play().catch(()=>{})}W&&(g(!0),Math.random()<e.rewards.gemChance&&setTimeout(()=>{if(C(!0),f){const I=new Audio("/sounds/gem.mp3");I.volume=.6,I.play().catch(()=>{})}},800)),setTimeout(()=>{c(H)},W?2e3:1500)},300)},Q=R();return n.jsxs("div",{className:`min-h-screen bg-gradient-to-br ${e.theme.background} relative overflow-hidden`,children:[n.jsx("style",{jsx:!0,children:`
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
      `}),n.jsx("div",{className:"absolute inset-0 pointer-events-none",children:e.visualElements.bgEmojis.map((H,W)=>n.jsx("div",{className:"absolute text-7xl opacity-10 float-animation",style:{top:`${20+W*15}%`,left:`${10+W*18}%`,animationDelay:`${W*.5}s`,animationDuration:`${3+W}s`},children:H},W))}),n.jsxs("div",{className:"relative z-10 px-3 pt-[calc(env(safe-area-inset-top)+4rem)]",children:[n.jsxs("div",{className:"flex justify-between items-center mb-3",children:[n.jsx("button",{onClick:()=>E(!0),className:"w-10 h-10 glass-card rounded-xl shadow-lg flex items-center justify-center hover:scale-105 transition-transform",children:n.jsx("span",{className:"text-xl",children:"⬅️"})}),n.jsx("div",{className:"glass-card rounded-xl px-3 py-1.5 shadow-lg",children:n.jsxs("div",{className:"flex items-center gap-1.5",children:[n.jsx("span",{className:"text-xl",children:e.emoji}),n.jsx("span",{className:"text-gray-800 font-bold text-sm",children:e.name})]})}),n.jsx("button",{onClick:()=>p(!f),className:"w-10 h-10 glass-card rounded-xl shadow-lg flex items-center justify-center hover:scale-105 transition-transform",children:n.jsx("span",{className:"text-xl",children:f?"🔊":"🔇"})})]}),n.jsxs("div",{className:"glass-card rounded-xl p-3 shadow-xl mb-3",children:[n.jsxs("div",{className:"grid grid-cols-4 gap-2",children:[n.jsxs("div",{className:"text-center",children:[n.jsx("div",{className:`text-xl font-black ${Q==="critical"?"text-red-600 time-pulse-critical":Q==="warning"?"text-orange-600":"text-gray-800"}`,children:T(i)}),n.jsx("div",{className:"text-[10px] text-gray-700 font-medium",children:"Time"})]}),n.jsxs("div",{className:"text-center",children:[n.jsxs("div",{className:"text-xl font-black text-gray-800",children:[r,"/",s]}),n.jsx("div",{className:"text-[10px] text-gray-700 font-medium",children:"Question"})]}),n.jsxs("div",{className:"text-center relative",children:[n.jsx("div",{className:"text-xl font-black text-orange-600",children:o}),n.jsx("div",{className:"text-[10px] text-gray-700 font-medium",children:"Coins"}),x&&S&&n.jsx("div",{className:"absolute -top-3 left-1/2 -translate-x-1/2",children:n.jsxs("span",{className:"text-orange-600 font-bold text-xs coin-float",children:["+",e.rewards.perCorrectAnswer]})})]}),n.jsxs("div",{className:"text-center relative",children:[n.jsx("div",{className:"text-xl font-black text-blue-600",children:l}),n.jsx("div",{className:"text-[10px] text-gray-700 font-medium",children:"Gems"}),N&&n.jsx("div",{className:"absolute -top-3 left-1/2 -translate-x-1/2",children:n.jsx("span",{className:"text-blue-600 text-xl gem-sparkle",children:"💎"})})]})]}),n.jsx("div",{className:"mt-2",children:n.jsx("div",{className:"w-full h-1.5 bg-gray-800/20 rounded-full overflow-hidden",children:n.jsx("div",{className:"h-full bg-gradient-to-r from-green-500 to-emerald-600 progress-bar",style:{width:`${(r-1)/s*100}%`}})})})]}),n.jsx("div",{className:"flex justify-center mb-3 pt-2",children:n.jsx(Ig,{shovelsRemaining:a,showBreak:x&&!S})})]}),n.jsxs("div",{className:"px-3 pt-8 slide-in",children:[n.jsxs("div",{ref:k,className:`glass-card rounded-2xl shadow-xl p-4 mb-4 ${x&&!S?"wrong-shake":""}`,children:[n.jsx("div",{className:"text-center mb-2",children:n.jsxs("span",{className:"text-xs font-bold text-gray-600 uppercase tracking-wider",children:["Question ",r]})}),n.jsx("h2",{className:"text-lg font-bold text-center text-gray-800 leading-relaxed",children:t.prompt})]}),n.jsx("div",{className:"space-y-2.5",children:t.options.map((H,W)=>{const F=["A","B","C","D"],I=m===W,_=W===t.correctIndex;let L="glass-card option-card",A="border border-gray-800/20";return x&&(_?(L+=" correct-pulse",A="border-2 border-green-500 bg-green-400/20"):I&&!S&&(L+=" wrong-shake",A="border-2 border-red-500 bg-red-400/20"),L+=" disabled"),n.jsx("button",{onClick:()=>B(W),disabled:h,className:`w-full p-3 rounded-xl shadow-lg ${L} ${A}`,children:n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsx("div",{className:`w-10 h-10 rounded-lg bg-gradient-to-br ${W===0?"from-blue-400 to-blue-500":W===1?"from-green-400 to-green-500":W===2?"from-yellow-400 to-yellow-500":"from-purple-400 to-purple-500"} text-white font-bold text-lg flex items-center justify-center shadow-md`,children:F[W]}),n.jsx("span",{className:"flex-1 text-left font-medium text-gray-800 text-sm",children:H}),x&&_&&n.jsx("span",{className:"text-2xl",children:"✅"}),x&&I&&!S&&n.jsx("span",{className:"text-2xl",children:"❌"})]})},W)})}),x&&n.jsx("div",{className:"mt-3 text-center slide-in",children:n.jsx("p",{className:"text-base font-bold text-gray-800",children:S?`Great job! Let's dig for treasure! ${e.visualElements.diggingEmoji}`:"Oops! Your shovel broke! Try the next question! 💪"})})]}),v&&n.jsx(Lg,{island:e,foundGem:N,onComplete:()=>g(!1)}),P&&n.jsx("div",{className:"fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 px-6",children:n.jsxs("div",{className:"bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-6 max-w-sm w-full shadow-2xl slide-in border border-white/10",children:[n.jsxs("div",{className:"text-center mb-6",children:[n.jsx("div",{className:"text-5xl mb-3",children:"🗺️"}),n.jsx("h3",{className:"text-xl font-bold text-white mb-2",children:"Leave the Island?"}),n.jsx("p",{className:"text-white/70",children:"Your progress won't be saved!"})]}),n.jsxs("div",{className:"flex gap-3",children:[n.jsx("button",{onClick:()=>E(!1),className:"flex-1 py-3 bg-gradient-to-r from-green-400 to-emerald-500 text-white rounded-2xl font-bold shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]",children:"Keep Playing"}),n.jsx("button",{onClick:u,className:"flex-1 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-2xl font-bold shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]",children:"Leave Island"})]})]})})]})}function zg({island:e,session:t,earnedTreasure:r,onRetry:s,onContinue:a,soundOn:i}){const[o,l]=d.useState(0),[c,u]=d.useState(!1),[f,p]=d.useState(!1),m=t.correctAnswers===Me.QUESTIONS_PER_ISLAND,j=Tg(t.correctAnswers,e.id);return d.useEffect(()=>{const x=t.coinsEarned,w=2e3,S=30,y=x/S;let v=0;const g=setInterval(()=>{v+=y,v>=x?(l(x),clearInterval(g),r&&setTimeout(()=>u(!0),500),setTimeout(()=>p(!0),r?1500:500)):l(Math.floor(v))},w/S);return()=>clearInterval(g)},[t.coinsEarned,r]),n.jsxs("div",{className:`fixed inset-0 bg-gradient-to-br ${e.theme.background} overflow-hidden flex flex-col`,children:[n.jsx("style",{jsx:!0,children:`
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
      `}),n.jsx("div",{className:"absolute inset-0 pointer-events-none",children:m&&[...Array(10)].map((x,w)=>n.jsx("div",{className:"absolute confetti-fall",style:{left:`${Math.random()*100}%`,animationDelay:`${Math.random()*3}s`,fontSize:`${20+Math.random()*20}px`},children:["🎉","⭐","🎊","✨"][Math.floor(Math.random()*4)]},w))}),n.jsxs("div",{className:"relative z-10 flex-1 flex flex-col items-center justify-center px-4 py-4",children:[n.jsxs("div",{className:"mb-3 text-center slide-up",children:[n.jsx("h1",{className:"text-2xl font-black text-white mb-2",children:r?"TREASURE FOUND!":"ISLAND COMPLETE!"}),n.jsx("div",{className:"text-5xl bounce-animation",children:r?e.rewards.treasurePiece:"🏝️"})]}),n.jsxs("div",{className:"glass-card rounded-2xl p-3 max-w-md w-full mb-2 slide-up",style:{animationDelay:"0.2s",background:"rgba(46, 46, 32, 0.25)"},children:[n.jsxs("div",{className:"text-center mb-2",children:[n.jsxs("div",{className:"text-3xl font-black text-white mb-1",children:[t.correctAnswers,"/",Me.QUESTIONS_PER_ISLAND]}),n.jsx("div",{className:"text-white/80 font-medium",children:"Questions Correct"})]}),f&&n.jsx("div",{className:"flex justify-center gap-2 mb-2",children:[...Array(3)].map((x,w)=>n.jsx("div",{className:`text-3xl ${w<t.correctAnswers?"star-pop":""}`,style:{animationDelay:`${w*.2}s`},children:w<t.correctAnswers?"⭐":"☆"},w))}),c&&r&&n.jsxs("div",{className:"text-center mb-2",children:[n.jsx("div",{className:"text-5xl treasure-shine mb-1",children:e.rewards.treasurePiece}),n.jsx("div",{className:"text-white font-bold text-lg",children:"Treasure Piece Earned!"})]}),n.jsxs("div",{className:"grid grid-cols-2 gap-2 mb-2",children:[n.jsxs("div",{className:"glass-card rounded-2xl p-4 text-center",children:[n.jsx("div",{className:"text-4xl mb-1",children:"🪙"}),n.jsx("div",{className:"text-3xl font-black text-yellow-300",children:o}),n.jsx("div",{className:"text-white/70 text-sm",children:"Coins Earned"})]}),n.jsxs("div",{className:"glass-card rounded-2xl p-4 text-center",children:[n.jsx("div",{className:"text-4xl mb-2",children:"💎"}),n.jsx("div",{className:"text-3xl font-black text-cyan-300",children:t.gemsFound}),n.jsx("div",{className:"text-white/70 text-sm",children:"Gems Found"})]})]}),n.jsx("div",{className:"text-center p-4 bg-white/10 rounded-1xl",children:n.jsx("p",{className:"text-white font-medium text-lg",children:j})}),m&&n.jsx("div",{className:"mt-4 text-center",children:n.jsx("div",{className:"inline-block px-6 py-3 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full",children:n.jsx("span",{className:"text-white font-black text-lg",children:"💯 PERFECT SCORE! 💯"})})})]}),n.jsxs("div",{className:"space-y-3 w-full max-w-md slide-up",style:{animationDelay:"0.4s"},children:[!r&&n.jsx("button",{onClick:s,className:"w-full py-4 bg-gradient-to-r from-orange-400 to-red-500 text-white rounded-2xl font-black text-lg shadow-xl hover:shadow-2xl transition-all hover:scale-[1.02] active:scale-[0.98]",children:n.jsxs("div",{className:"flex items-center justify-center gap-3",children:[n.jsx("span",{className:"text-2xl",children:"🔄"}),n.jsx("span",{children:"Try Again"})]})}),n.jsx("button",{onClick:a,className:"w-full py-3 bg-gradient-to-r from-white to-gray-100 text-gray-800 rounded-2xl font-black text-lg shadow-xl hover:shadow-2xl transition-all hover:scale-[1.02] active:scale-[0.98]",children:n.jsxs("div",{className:"flex items-center justify-center gap-3",children:[n.jsx("span",{className:"text-2xl",children:"🗺️"}),n.jsx("span",{children:"Back to Map"})]})})]})]})]})}function Mg({totalStats:e,onContinue:t,soundOn:r}){const[s,a]=d.useState(!1),[i,o]=d.useState(!1),[l,c]=d.useState(!1),[u,f]=d.useState(!1),[p,m]=d.useState(!1);return d.useEffect(()=>{(async()=>{await new Promise(x=>setTimeout(x,500)),a(!0),await new Promise(x=>setTimeout(x,1e3)),o(!0),m(!0),await new Promise(x=>setTimeout(x,800)),c(!0),await new Promise(x=>setTimeout(x,1e3)),f(!0)})()},[]),n.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-purple-600 via-pink-600 to-yellow-500 relative overflow-hidden",children:[n.jsx("style",{jsx:!0,children:`
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
      `}),p&&n.jsx("div",{className:"fixed inset-0 pointer-events-none",children:[...Array(15)].map((j,x)=>n.jsx("div",{className:"absolute firework",style:{left:`${20+Math.random()*60}%`,top:`${20+Math.random()*60}%`,animationDelay:`${Math.random()*2}s`,fontSize:`${40+Math.random()*40}px`},children:["✨","⭐","💫","🌟"][Math.floor(Math.random()*4)]},x))}),n.jsx("div",{className:"fixed inset-0 pointer-events-none",children:[...Array(20)].map((j,x)=>n.jsx("div",{className:"absolute coin-rain",style:{left:`${Math.random()*100}%`,animationDelay:`${Math.random()*3}s`,animationDuration:`${3+Math.random()*2}s`,fontSize:`${20+Math.random()*20}px`},children:["🪙","💰","💎"][Math.floor(Math.random()*3)]},x))}),n.jsxs("div",{className:"relative z-10 flex flex-col items-center justify-center min-h-screen px-6",children:[n.jsxs("div",{className:"text-center mb-8",children:[n.jsx("h1",{className:"text-6xl font-black text-white mb-4",children:"LEGENDARY!"}),n.jsx("div",{className:"text-8xl bounce-animation",children:"👑"})]}),s&&n.jsxs("div",{className:`relative mb-8 ${s?"chest-appear":""}`,children:[n.jsx("div",{className:`text-[150px] ${i?"chest-open":""}`,children:"📦"}),i&&n.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:er.map((j,x)=>n.jsx("div",{className:"absolute text-6xl float-animation treasure-glow",style:{transform:`rotate(${x*72}deg) translateY(-100px)`,animationDelay:`${x*.2}s`},children:j.rewards.treasurePiece},j.id))})]}),l&&n.jsxs("div",{className:"glass-card rounded-3xl p-6 max-w-md w-full mb-6",children:[n.jsx("h2",{className:"text-2xl font-black text-white text-center mb-6",children:"🏆 FINAL TREASURE UNLOCKED! 🏆"}),n.jsx("div",{className:"bg-gradient-to-r from-yellow-400 to-amber-500 rounded-2xl p-4 mb-4",children:n.jsxs("div",{className:"text-center",children:[n.jsx("div",{className:"text-5xl mb-2",children:"💰"}),n.jsx("div",{className:"text-4xl font-black text-white",children:Me.FINAL_TREASURE_REWARD}),n.jsx("div",{className:"text-white/90 font-medium",children:"Bonus Coins!"})]})}),n.jsxs("div",{className:"grid grid-cols-2 gap-3 mb-4",children:[n.jsxs("div",{className:"glass-card rounded-xl p-3 text-center",children:[n.jsx("div",{className:"text-3xl mb-1",children:"🏝️"}),n.jsx("div",{className:"text-2xl font-black text-white",children:"5/5"}),n.jsx("div",{className:"text-white/70 text-xs",children:"Islands"})]}),n.jsxs("div",{className:"glass-card rounded-xl p-3 text-center",children:[n.jsx("div",{className:"text-3xl mb-1",children:"🧩"}),n.jsx("div",{className:"text-2xl font-black text-white",children:"5/5"}),n.jsx("div",{className:"text-white/70 text-xs",children:"Treasures"})]}),n.jsxs("div",{className:"glass-card rounded-xl p-3 text-center",children:[n.jsx("div",{className:"text-3xl mb-1",children:"💰"}),n.jsx("div",{className:"text-2xl font-black text-yellow-300",children:e.totalCoinsEarned+Me.FINAL_TREASURE_REWARD}),n.jsx("div",{className:"text-white/70 text-xs",children:"Total Coins"})]}),n.jsxs("div",{className:"glass-card rounded-xl p-3 text-center",children:[n.jsx("div",{className:"text-3xl mb-1",children:"💎"}),n.jsx("div",{className:"text-2xl font-black text-cyan-300",children:e.totalGemsFound}),n.jsx("div",{className:"text-white/70 text-xs",children:"Total Gems"})]})]}),u&&n.jsxs("div",{className:"text-center p-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl",children:[n.jsx("div",{className:"text-3xl mb-2",children:"🏆"}),n.jsx("div",{className:"text-xl font-black text-white title-shine",children:Me.FINAL_TREASURE_TITLE}),n.jsx("div",{className:"text-white/90 text-sm mt-1",children:"New Title Unlocked!"})]})]}),l&&n.jsx("button",{onClick:t,className:"w-full max-w-md py-4 bg-gradient-to-r from-white to-gray-100 text-gray-800 rounded-2xl font-black text-lg shadow-xl hover:shadow-2xl transition-all hover:scale-[1.02] active:scale-[0.98]",children:n.jsxs("div",{className:"flex items-center justify-center gap-3",children:[n.jsx("span",{className:"text-2xl",children:"🎉"}),n.jsx("span",{children:"Complete Adventure"}),n.jsx("span",{className:"text-2xl",children:"🎉"})]})}),n.jsx("div",{className:"absolute inset-0 pointer-events-none",children:[...Array(10)].map((j,x)=>n.jsx("div",{className:"absolute text-2xl sparkle-animation",style:{left:`${Math.random()*100}%`,top:`${Math.random()*100}%`,animationDelay:`${Math.random()*2}s`},children:"✨"},x))})]})]})}function Og({onBack:e}){const{coins:t,xp:r,level:s,soundOn:a,setSoundOn:i}=Ci(),[o,l]=d.useState(!1),[c,u]=d.useState("map"),[f,p]=d.useState(null),[m,j]=d.useState([]),[x,w]=d.useState(()=>{const L=localStorage.getItem(Me.STORAGE_KEYS.PROGRESS);if(L)try{return JSON.parse(L)}catch(A){console.error("Failed to load progress:",A)}return er.reduce((A,M)=>(A[M.id]={unlocked:M.id===1,completed:!1,treasurePiece:!1,perfectScore:!1,bestScore:0,attempts:0},A),{})}),[S,y]=d.useState({islandId:null,questions:[],currentQuestionIndex:0,shovelsRemaining:Me.SHOVELS_PER_ISLAND,correctAnswers:0,wrongAnswers:0,timeRemaining:300,gemsFound:0,coinsEarned:0,questionTimes:[],startTime:null}),[v,g]=d.useState(()=>{const L=localStorage.getItem(Me.STORAGE_KEYS.STATS);if(L)try{return JSON.parse(L)}catch(A){console.error("Failed to load stats:",A)}return{totalCoinsEarned:0,totalGemsFound:0,totalTreasurePieces:0,totalQuestionsAnswered:0,totalCorrectAnswers:0,islandsCompleted:0,gameCompleted:!1}}),N=d.useRef(null),C=d.useRef(null);d.useEffect(()=>(P(),window.history.pushState({mode:"treasureHunt"},"",window.location.href),()=>{N.current&&clearInterval(N.current)}),[]),d.useEffect(()=>{localStorage.setItem(Me.STORAGE_KEYS.PROGRESS,JSON.stringify(x))},[x]),d.useEffect(()=>{localStorage.setItem(Me.STORAGE_KEYS.STATS,JSON.stringify(v))},[v]),d.useEffect(()=>(c==="playing"&&S.timeRemaining>0?N.current=setInterval(()=>{y(L=>{const A=L.timeRemaining-1;return A<=0?(T(),{...L,timeRemaining:0}):(A===30&&a&&F(Me.SOUNDS.TICK,.6),{...L,timeRemaining:A})})},1e3):N.current&&clearInterval(N.current),()=>{N.current&&clearInterval(N.current)}),[c,S.timeRemaining,a]),d.useEffect(()=>{const L=A=>{A.preventDefault(),c==="map"&&!o?(l(!0),window.history.pushState({mode:"treasureHunt"},"",window.location.href)):c!=="map"&&(u("map"),p(null),window.history.pushState({mode:"treasureHunt"},"",window.location.href))};return window.addEventListener("popstate",L),()=>window.removeEventListener("popstate",L)},[c,o]);const P=async()=>{try{const A=await(await fetch("/data/quiz_questions_bank.csv")).text(),{data:M}=ur.parse(A,{header:!0,skipEmptyLines:!0,transformHeader:K=>K.trim().toLowerCase()}),U=M.map((K,J)=>{var z;const $=[K.option1,K.option2,K.option3,K.option4].map(G=>(G||"").trim()).filter(Boolean);if($.length<4)return null;let O={a:0,b:1,c:2,d:3}[(z=K.answer)==null?void 0:z.toLowerCase()];return O===void 0&&(O=$.findIndex(G=>G.toLowerCase()===(K.answer||"").toLowerCase())),O===-1&&(O=0),{id:K.id||`q_${J}`,prompt:(K.question||"").trim(),options:$,correctIndex:O,category:(K.category||K.subject||"general").trim(),difficulty:(K.difficulty||"medium").toLowerCase()}}).filter(Boolean);j(U)}catch(L){console.error("Failed to load questions:",L)}},E=L=>{const A=on(L);if(!A||m.length===0)return[];let M=m.filter(K=>A.questionDifficulty.includes(K.difficulty));return M.length<Me.QUESTIONS_PER_ISLAND&&(M=m),[...M].sort(()=>Math.random()-.5).slice(0,Me.QUESTIONS_PER_ISLAND)},h=L=>{if(!Pg(L,x)){a&&F("/sounds/locked.mp3",.5),I([100]);return}p(L),u("island-detail"),a&&F("/sounds/select.mp3",.5)},b=L=>{const A=on(L),M=E(L);y({islandId:L,questions:M,currentQuestionIndex:0,shovelsRemaining:Me.SHOVELS_PER_ISLAND,correctAnswers:0,wrongAnswers:0,timeRemaining:A.timeLimit,gemsFound:0,coinsEarned:0,questionTimes:[],startTime:Date.now()}),C.current=Date.now(),u("playing"),a&&F("/sounds/start.mp3",.6)},k=L=>{const A=S.questions[S.currentQuestionIndex],M=L===A.correctIndex,U=(Date.now()-C.current)/1e3;y(K=>{const J={...K,questionTimes:[...K.questionTimes,U]};if(M){const $=on(K.islandId);let Z=$.rewards.perCorrectAnswer;U<Me.SPEED_BONUS_THRESHOLD&&(Z+=$.rewards.speedBonus),Math.random()<$.rewards.gemChance&&(Z+=$.rewards.gemBonus,J.gemsFound=K.gemsFound+1),J.correctAnswers=K.correctAnswers+1,J.coinsEarned=K.coinsEarned+Z}else J.wrongAnswers=K.wrongAnswers+1,J.shovelsRemaining=K.shovelsRemaining-1,I([200]);return J}),setTimeout(()=>{const K=S.currentQuestionIndex+1;S.shovelsRemaining===0&&!M||K>=Me.QUESTIONS_PER_ISLAND?R():(y(J=>({...J,currentQuestionIndex:K})),C.current=Date.now())},M?2e3:1500)},T=()=>{R()},R=()=>{const L=on(S.islandId),A=S.correctAnswers>=L.requiredCorrect,M=S.correctAnswers===Me.QUESTIONS_PER_ISLAND;let U=S.coinsEarned;M&&(U+=L.rewards.perfectBonus),A&&(U+=L.rewards.completionCoins),w(J=>{const $={...J},Z=$[S.islandId];if(Z.completed=!0,Z.attempts+=1,A&&!Z.treasurePiece){Z.treasurePiece=!0;const O=er.find(z=>z.id===S.islandId+1);O&&$[O.id]&&($[O.id].unlocked=!0,a&&setTimeout(()=>F(Me.SOUNDS.ISLAND_UNLOCK,.7),2e3))}return M&&(Z.perfectScore=!0),Z.bestScore=Math.max(Z.bestScore||0,S.correctAnswers),$}),g(J=>({...J,totalCoinsEarned:J.totalCoinsEarned+U,totalGemsFound:J.totalGemsFound+S.gemsFound,totalTreasurePieces:J.totalTreasurePieces+(A&&!x[S.islandId].treasurePiece?1:0),totalQuestionsAnswered:J.totalQuestionsAnswered+(S.correctAnswers+S.wrongAnswers),totalCorrectAnswers:J.totalCorrectAnswers+S.correctAnswers,islandsCompleted:J.islandsCompleted+(x[S.islandId].completed?0:1)})),ce.addCoins(U,`Treasure Hunt - ${L.name} Island`),ce.addXP(S.correctAnswers),y(J=>({...J,coinsEarned:U})),a&&F(A?Me.SOUNDS.TREASURE_FOUND:Me.SOUNDS.ISLAND_COMPLETE,.7),er.every(J=>{var $;return(($=x[J.id])==null?void 0:$.treasurePiece)===!0})&&!v.gameCompleted?(g(J=>({...J,gameCompleted:!0})),setTimeout(()=>{u("final-treasure"),a&&F(Me.SOUNDS.FINAL_TREASURE,.8)},3e3)):u("reward")},B=()=>{b(S.islandId)},Q=()=>{u("map"),p(null)},H=()=>{ce.addCoins(Me.FINAL_TREASURE_REWARD,"Treasure Hunt - Final Treasure"),ce.addXP(10),g(L=>({...L,totalCoinsEarned:L.totalCoinsEarned+Me.FINAL_TREASURE_REWARD})),u("map")},W=()=>{window.history.go(-1),e()},F=(L,A=.5)=>{try{const M=new Audio(L);M.volume=A,M.play()}catch(M){console.error("Failed to play sound:",M)}},I=L=>{navigator.vibrate&&navigator.vibrate(L)};d.useEffect(()=>(document.body.classList.add("hide-bottom-nav"),()=>{document.body.classList.remove("hide-bottom-nav")}),[]);let _=null;switch(c){case"map":_=n.jsx(_g,{islands:er,islandProgress:x,onSelectIsland:h,onBack:()=>l(!0),soundOn:a,setSoundOn:i,totalStats:v});break;case"island-detail":_=n.jsx(Ag,{island:on(f),progress:x[f],onStart:()=>b(f),onClose:()=>u("map"),soundOn:a});break;case"playing":_=n.jsx(Dg,{island:on(S.islandId),question:S.questions[S.currentQuestionIndex],questionNumber:S.currentQuestionIndex+1,totalQuestions:Me.QUESTIONS_PER_ISLAND,shovelsRemaining:S.shovelsRemaining,timeRemaining:S.timeRemaining,coinsEarned:S.coinsEarned,gemsFound:S.gemsFound,onAnswer:k,onQuit:()=>u("map"),soundOn:a,setSoundOn:i});break;case"reward":_=n.jsx(zg,{island:on(S.islandId),session:S,earnedTreasure:S.correctAnswers>=on(S.islandId).requiredCorrect,onRetry:B,onContinue:Q,soundOn:a});break;case"final-treasure":_=n.jsx(Mg,{totalStats:v,onContinue:H,soundOn:a});break;default:_=null}return n.jsxs(n.Fragment,{children:[_,o&&n.jsx("div",{className:"fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 px-6",children:n.jsxs("div",{className:"bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-6 max-w-sm w-full shadow-2xl border border-white/10",children:[n.jsxs("div",{className:"text-center mb-6",children:[n.jsx("div",{className:"text-5xl mb-3",children:"🏝️"}),n.jsx("h3",{className:"text-xl font-bold text-white mb-2",children:"Leave Treasure Hunt?"}),n.jsx("p",{className:"text-white/70",children:"Your island progress is saved!"})]}),n.jsxs("div",{className:"flex gap-3",children:[n.jsx("button",{onClick:()=>l(!1),className:"flex-1 py-3 bg-gradient-to-r from-green-400 to-emerald-500 text-white rounded-2xl font-bold shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]",children:"Keep Playing"}),n.jsx("button",{onClick:W,className:"flex-1 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-2xl font-bold shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]",children:"Exit"})]})]})})]})}const Fg=[{name:"General Knowledge",questions:50,icon:"🧠",color:"#7C3AED"},{name:"Artificial Intelligence",questions:28,icon:"🤖",color:"#10B981"},{name:"Fun facts",questions:30,icon:"🎉",color:"#EF4444"},{name:"Science",questions:45,icon:"🧪",color:"#F59E0B"},{name:"History",questions:42,icon:"🏺",color:"#2563EB"},{name:"Geography",questions:38,icon:"🗺️",color:"#FACC15"}],_m=Fg.slice(0,6),no=360/_m.length;function $g({onModeSelect:e,onNavigateHome:t}){return n.jsx("div",{className:"fixed inset-0 bg-base-bg text-base-text overflow-hidden",children:n.jsxs("div",{className:"h-full overflow-y-auto mx-auto max-w-md px-4 pt-[calc(env(safe-area-inset-top)+5rem)] pb-[calc(env(safe-area-inset-bottom)+5.25rem)]",children:[n.jsx("header",{className:"flex items-center mb-8",children:n.jsx("h1",{className:"text-center text-xl font-bold w-full",children:"Choose a quiz mode"})}),n.jsxs("div",{className:"space-y-8",children:[n.jsxs("button",{onClick:()=>e("classic"),className:"w-full relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-400 to-blue-500 p-8 text-left shadow-lg hover:shadow-xl transition-all active:scale-[0.98]",children:[n.jsx("div",{className:"absolute top-0 right-0 w-32 h-32 opacity-30",children:n.jsxs("svg",{viewBox:"0 0 100 100",className:"w-full h-full animate-spin",style:{animationDuration:"20s"},children:[_m.map((r,s)=>{const a=s*no,i=a+no,o=no>180?1:0,l=Math.PI*a/180,c=Math.PI*i/180,u=50+40*Math.cos(l),f=50-40*Math.sin(l),p=50+40*Math.cos(c),m=50-40*Math.sin(c);return n.jsx("path",{d:`M50,50 L${u},${f} A40,40 0 ${o} 0 ${p},${m} Z`,fill:r.color,stroke:"white",strokeWidth:"0.5"},s)}),n.jsx("circle",{cx:"50",cy:"50",r:"8",fill:"white"})]})}),n.jsx("div",{className:"absolute top-4 left-8 text-3xl opacity-60",children:"🏆"}),n.jsx("div",{className:"absolute top-12 right-16 text-xl opacity-40",children:"⭐"}),n.jsx("div",{className:"absolute bottom-6 left-6 text-2xl opacity-50",children:"🎲"}),n.jsx("div",{className:"absolute bottom-4 right-12 text-3xl opacity-60",children:"🍪"}),n.jsx("div",{className:"absolute top-1/2 left-4 text-lg opacity-40",children:"🥨"}),n.jsx("h2",{className:"text-5xl font-black text-white mb-10 relative z-10",style:{transform:"translateX(-20px)"},children:"CLASSIC"})]}),n.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[n.jsxs("button",{onClick:()=>e("survival"),className:"aspect-square rounded-3xl bg-gradient-to-br from-yellow-400 to-orange-400 p-4 text-left hover:shadow-xl transition-all active:scale-[0.98] relative overflow-hidden",children:[n.jsx("div",{className:"text-2xl mb-2",children:"💀"}),n.jsx("h4",{className:"text-lg font-black text-white",children:"SURVIVAL"})]}),n.jsxs("button",{onClick:()=>e("treasureHunt"),className:"aspect-square rounded-3xl bg-gradient-to-br from-purple-400 to-green-500 p-4 text-left hover:shadow-xl transition-all active:scale-[0.98] relative overflow-hidden",children:[n.jsxs("div",{className:"absolute inset-0 opacity-20",children:[n.jsx("div",{className:"absolute top-2 right-2 text-4xl animate-pulse",children:"🏝️"}),n.jsx("div",{className:"absolute bottom-2 left-2 text-3xl animate-bounce",style:{animationDelay:"0.5s"},children:"⛏️"}),n.jsx("div",{className:"absolute top-1/2 right-4 text-2xl animate-pulse",style:{animationDelay:"1s"},children:"💎"})]}),n.jsx("div",{className:"text-2xl mb-2 relative z-10",children:"🏴‍☠️"}),n.jsx("h4",{className:"text-lg font-black text-white relative z-10",children:"TREASURE HUNT"}),n.jsx("div",{className:"absolute bottom-2 right-2",children:n.jsx("span",{className:"text-xs bg-white/20 px-2 py-1 rounded-full text-white font-bold",children:"NEW!"})})]}),n.jsxs("button",{disabled:!0,className:"aspect-square rounded-3xl bg-gradient-to-br from-pink-500 to-purple-500 p-4 text-left opacity-60",children:[n.jsx("div",{className:"text-2xl mb-2",children:"⚔️"}),n.jsx("h4",{className:"text-lg font-black text-white",children:"SURVIVAL ARENA"})]}),n.jsxs("button",{disabled:!0,className:"aspect-square rounded-3xl bg-gradient-to-br from-blue-400 to-cyan-400 p-4 text-left opacity-60",children:[n.jsx("div",{className:"text-2xl mb-2",children:"📱"}),n.jsx("h4",{className:"text-lg font-black text-white",children:"TRIVIA VIDEO"})]})]})]})]})})}function Bg(){const[e,t]=d.useState(null),r=_e(),s=Je();d.useEffect(()=>{const l=new URLSearchParams(s.search);l.get("mode")==="survival"&&l.get("from")==="quest"&&t("survival")},[s]);const a=l=>{l==="classic"?t("classic"):l==="survival"?t("survival"):l==="treasureHunt"&&t("treasureHunt")},i=()=>{r("/")},o=()=>{t(null)};if(e==="classic")return n.jsx(Ng,{onBack:o});if(e==="survival"){const c=new URLSearchParams(s.search).get("from")==="quest";return n.jsx(Eg,{onBack:o,isFromQuest:c})}return e==="treasureHunt"?n.jsx(Og,{onBack:o}):n.jsx($g,{onModeSelect:a,onNavigateHome:i})}const Ug=({session:e,mode:t,category:r,difficulty:s,timerConfig:a,onComplete:i,onQuit:o})=>{const l=_e(),[c,u]=d.useState(0),[f,p]=d.useState([]),[m,j]=d.useState([]),[x,w]=d.useState([]),[S,y]=d.useState(!1),[v,g]=d.useState(null),[N,C]=d.useState(Date.now()),[P,E]=d.useState(0),[h,b]=d.useState([]);d.useState(!1),d.useState(!1);const[k,T]=d.useState({}),[R,B]=d.useState({}),[Q,H]=d.useState([]);d.useState(!0);const[W,F]=d.useState([]),[I,_]=d.useState(0),[L,A]=d.useState(0),[M,U]=d.useState(!1),[K,J]=d.useState(!1),[$,Z]=d.useState(""),[O,z]=d.useState(!1),[G,Y]=d.useState(!1),[ee,le]=d.useState(!0),[te,q]=d.useState(!1),[D,re]=d.useState(0),[ne,ae]=d.useState(0),[de,Ee]=d.useState(0),[Te,ge]=d.useState(0),[fe,be]=d.useState(null),[me,Ne]=d.useState(0),Be=d.useRef(null),dt=d.useRef(null),Le=t==="practice",Ge=f[c],Ze=ue=>{try{const he=new Audio(ue);he.volume=.6,he.play()}catch{console.log("Sound not available:",ue)}},zt=[{id:1,category:"General Knowledge",difficulty:"medium",prompt:"Which element has the atomic number 1?",options:["Helium","Carbon","Hydrogen","Oxygen"],answerIndex:2,explanation:"Hydrogen is the first element on the periodic table with atomic number 1!"},{id:2,category:"General Knowledge",difficulty:"medium",prompt:"What is the largest ocean on Earth?",options:["Atlantic","Pacific","Indian","Arctic"],answerIndex:1,explanation:"The Pacific Ocean covers about one-third of Earth's surface!"},{id:3,category:"General Knowledge",difficulty:"easy",prompt:"What color do you get when you mix red and yellow?",options:["Purple","Orange","Green","Pink"],answerIndex:1,explanation:"Red and yellow make orange - like a beautiful sunset!"}],X=e&&e.questions&&Array.isArray(e.questions)&&e.questions.length>0?e.questions:zt,oe=X[c]||X[0]||zt[0],xe=X.length;d.useEffect(()=>{const ue=ce.getCoins();Ee(ue)},[]),d.useEffect(()=>{X.length>0&&(p(new Array(X.length).fill(null)),j(new Array(X.length).fill(!1)),H(new Array(X.length).fill(!1)),w(new Array(X.length).fill((a==null?void 0:a.seconds)||45)))},[X.length,a==null?void 0:a.seconds]);const Ce=()=>{const ue=new Date;return`${ue.getFullYear()}-${ue.getMonth()+1}-${ue.getDate()}`},He=()=>{Le&&window.location.search.includes("from=quest")?l("/profile/quests",{state:{questCompleted:!0,questType:"practiceQuestions"}}):o()},ve=d.useCallback((ue,he)=>{if(!oe||Le&&Q[c]||k[c]&&k[c].includes(ue))return;const je=[...f];if(je[c]=f[c]===ue?null:ue,p(je),C(Date.now()),Le&&!h.includes(c)&&je[c]!==null){const nt=h.length+1;if(E(nt),b(Ue=>[...Ue,c]),window.location.search.includes("from=quest")){let Ue={};try{const fr=localStorage.getItem("questProgress");fr&&(Ue=JSON.parse(fr))}catch(fr){console.error("Error reading progress:",fr)}const it=Ue.practiceQuestions||0;Ue.practiceQuestions=Math.max(it,nt),Ue.date=`${new Date().getFullYear()}-${new Date().getMonth()+1}-${new Date().getDate()}`,localStorage.setItem("questProgress",JSON.stringify(Ue)),console.log("Saved practice progress:",Ue.practiceQuestions),window.dispatchEvent(new CustomEvent("questProgressUpdate",{detail:{practiceQuestions:Ue.practiceQuestions}}))}}je[c]!==null&&(le(!1),clearInterval(dt.current));const Nt=je[c]===oe.answerIndex;if(Nt){const nt=Te+1;if(ge(nt),_(Ue=>Ue+1),A(0),Le){re(it=>it+1);const Ue=2;ae(it=>it+Ue),Ee(it=>it+Ue),Ze("/sounds/correct.mp3"),setTimeout(()=>Ze("/sounds/coin.mp3"),500),Y(!0),setTimeout(()=>Y(!1),2e3),be({type:"correct",stars:1,coins:2}),setTimeout(()=>be(null),2e3)}}else je[c]!==null&&(ge(0),_(0),A(nt=>nt+1),Le&&Ze("/sounds/wrong.mp3"));if(F(nt=>[...nt.slice(-2),Nt]),je[c]!==null&&m[c]){const nt=[...m];nt[c]=!1,j(nt)}Le&&je[c]!==null&&(z(!0),H(nt=>{const Ue=[...nt];return Ue[c]=!0,Ue})),!Le&&je[c]!==null&&(clearTimeout(Be.current),Be.current=setTimeout(()=>{c<xe-1?Pe():(U(!0),y(!0))},5e3))},[oe,Le,Q,c,f,m,xe,Te,k,W,I,P,h]),gt=()=>{C(Date.now()),c>0&&(clearInterval(dt.current),le(!1),u(ue=>ue-1),z(!1),Le&&f[c-1]!==null&&setTimeout(()=>z(!0),100))},Pe=()=>{if(C(Date.now()),clearInterval(dt.current),Ge===null){const ue=[...m];ue[c]=!0,j(ue),ge(0)}le(!1),z(!1),c<xe-1?(u(ue=>ue+1),Le&&f[c+1]!==null?setTimeout(()=>z(!0),100):setTimeout(()=>le(!0),100)):U(!0)},se=()=>{C(Date.now());const ue=[...m];ue[c]=!0,j(ue),ge(0),Pe()},pe=()=>{const ue=X.reduce((he,je,Nt)=>he+(f[Nt]===je.answerIndex?1:0),0);if(Le&&window.location.search.includes("from=quest")){const he=f.filter(Nt=>Nt!==null).length,je=JSON.parse(localStorage.getItem("questProgress")||"{}");je.practiceQuestions=Math.min(he,15),je.date=Ce(),localStorage.setItem("questProgress",JSON.stringify(je)),console.log("Final practice progress saved:",je.practiceQuestions)}if(Le)i&&i({questions:X,answers:f,skipped:m,correct:ue,total:xe,mode:t,category:r,difficulty:s,earnedStars:D,earnedCoins:ne,finalStreak:Te});else{const he=ue*10;Ne(he),i&&i({questions:X,answers:f,skipped:m,correct:ue,total:xe,mode:t,category:r,difficulty:s,earnedStars:0,earnedCoins:he,finalStreak:Te})}};d.useEffect(()=>{if(!(S||v!==null||M||!ee||f[c]!==null))return dt.current=setInterval(()=>{w(ue=>{const he=[...ue],je=he[c];return je<=1?(clearInterval(dt.current),c===xe-1?(Date.now()-N>=5e3&&U(!0),he):(g(c),he)):(he[c]=je-1,he)})},1e3),()=>clearInterval(dt.current)},[S,v,c,M,xe,ee,f,N]),d.useEffect(()=>{f[c]===null&&!M&&!v?le(!0):le(!1)},[c,f,M,v]);const De=ue=>{const he=Math.floor(ue/60),je=ue%60;return`${he}:${je.toString().padStart(2,"0")}`},ke=(c+1)/X.length*100,we=f.filter(ue=>ue!==null).length,at=m.filter(Boolean).length,ut=x[c]||0;X.reduce((ue,he,je)=>ue+(f[je]===he.answerIndex?1:0),0);const Wn=Le&&O&&Ge!==null;return n.jsxs("div",{className:"h-dvh bg-gray-900 text-white flex flex-col overflow-hidden pt-[env(safe-area-inset-top,0px)]",children:[fe&&n.jsx("div",{className:"fixed inset-0 flex items-center justify-center z-50 pointer-events-none",children:n.jsxs("div",{className:"bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-8 py-4 rounded-full text-xl font-bold animate-bounce shadow-2xl",children:["+",fe.coins," Coins!"]})}),G&&n.jsx("div",{className:"fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-40 pointer-events-none",children:[...Array(8)].map((ue,he)=>n.jsx("div",{className:"absolute text-3xl animate-ping",style:{left:`${-30+Math.random()*60}px`,top:`${-30+Math.random()*60}px`,animationDelay:`${he*150}ms`,animationDuration:"2s"},children:"🪙"},he))}),n.jsxs("div",{className:"bg-gray-900 flex-shrink-0 pt-10",children:[n.jsxs("div",{className:"flex items-center justify-between px-4 py-2 border-b border-gray-800 shadow-lg",children:[n.jsxs("button",{onClick:()=>J(!0),className:"bg-gray-700 hover:bg-gray-600 px-3 py-1.5 rounded-full flex items-center gap-2 transition-colors text-sm",children:[n.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:n.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 19l-7-7 7-7"})}),n.jsx("span",{className:"font-medium",children:"Back"})]}),n.jsx("div",{className:"flex-1"}),n.jsxs("div",{className:"flex items-center gap-2",children:[Le&&n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:"bg-yellow-600/20 px-2 py-1 rounded-full flex items-center gap-1",children:[n.jsx("span",{className:"text-yellow-400 text-sm",children:"🪙"}),n.jsx("span",{className:"text-yellow-200 font-semibold text-sm",children:de})]}),n.jsxs("div",{className:"bg-orange-600/20 px-2 py-1 rounded-full flex items-center gap-1",children:[n.jsx("span",{className:"text-orange-400 text-sm",children:"🔥"}),n.jsx("span",{className:"text-orange-200 font-semibold text-sm",children:Te})]})]}),n.jsx("div",{className:`px-2 py-1 rounded-full font-mono font-semibold text-sm ${ut<=10?"bg-red-600/20 text-red-400 animate-pulse":ut<=30?"bg-yellow-600/20 text-yellow-400":"bg-green-600/20 text-green-400"}`,children:De(ut)})]})]}),n.jsxs("div",{className:"px-4 pb-1 bg-gray-900",children:[n.jsxs("div",{className:"flex justify-between items-center mb-1",children:[n.jsxs("span",{className:"text-xs text-gray-400",children:["Question ",c+1," of ",xe]}),n.jsxs("span",{className:"text-xs text-gray-400",children:[Math.round(ke),"% Complete"]})]}),n.jsx("div",{className:"h-2 bg-gray-700 rounded-full overflow-hidden",children:n.jsx("div",{className:"h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-500",style:{width:`${ke}%`}})}),n.jsx("div",{className:"flex justify-center gap-1 mt-1",children:Array.from({length:xe}).map((ue,he)=>n.jsx("div",{className:`w-1.5 h-1.5 rounded-full transition-all ${he===c?"bg-white scale-125":f[he]!==null?"bg-green-500":m[he]?"bg-yellow-500":"bg-gray-600"}`},he))}),n.jsx("div",{className:"text-center mt-4",children:n.jsx("span",{className:"text-xs text-gray-500",children:oe.category})})]})]}),n.jsx("div",{className:`flex-1 flex flex-col ${Wn?"overflow-y-auto":"overflow-hidden"}`,children:n.jsxs("div",{className:"px-4 py-4 flex-1 flex flex-col",children:[n.jsxs("div",{className:"relative bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 rounded-3xl p-6 mb-4 shadow-2xl shadow-blue-600/20 border border-blue-400/20",children:[n.jsx("div",{className:"absolute top-2 right-2 w-16 h-16 bg-white/10 rounded-full blur-xl"}),n.jsx("div",{className:"absolute bottom-2 left-2 w-12 h-12 bg-white/5 rounded-full blur-lg"}),n.jsxs("div",{className:"relative text-center",children:[n.jsxs("div",{className:"inline-block bg-white/10 px-3 py-1 rounded-full text-xs font-medium text-blue-100 mb-3",children:["Question ",c+1]}),n.jsx("h2",{className:"text-xl font-bold leading-relaxed text-white tracking-wide",children:oe.prompt}),oe.difficulty&&n.jsx("div",{className:"mt-3 inline-block",children:n.jsx("span",{className:`px-2 py-1 rounded-full text-xs font-semibold ${oe.difficulty==="easy"?"bg-green-500/20 text-green-300":oe.difficulty==="medium"?"bg-yellow-500/20 text-yellow-300":"bg-red-500/20 text-red-300"}`,children:oe.difficulty.toUpperCase()})})]})]}),n.jsx("div",{className:"grid grid-cols-1 gap-3 mb-4",children:oe.options.map((ue,he)=>{const je=Ge===he,Nt=he===oe.answerIndex,nt=Le&&Ge!==null&&O,Ue=k[c]&&k[c].includes(he);let it="p-4 rounded-xl transition-all duration-300 border-2 min-h-[64px] flex items-center ";Ue?it+="bg-gray-700/30 border-gray-600/30 text-gray-500/50 cursor-not-allowed":(it+="cursor-pointer ",nt?je&&Nt?it+="bg-green-600 border-green-500 text-white shadow-lg shadow-green-600/25":je&&!Nt?it+="bg-red-600 border-red-500 text-white shadow-lg shadow-red-600/25":!je&&Nt?it+="bg-green-600/20 border-green-500 text-green-300 animate-pulse":it+="bg-gray-700 border-gray-600 text-gray-400":je?it+="bg-gray-600 border-gray-500 text-white":it+="bg-gray-800 border-gray-700 text-gray-200 hover:bg-gray-750 hover:border-gray-600");const fr=["🅰️","🅱️","🅲️","🅳️"];return n.jsx("button",{onClick:Mm=>ve(he,Mm),disabled:Le&&Q[c],className:it,children:n.jsxs("div",{className:"flex items-center gap-2 w-full",children:[n.jsx("div",{className:"text-lg flex-shrink-0 mr-1",children:fr[he]}),n.jsx("div",{className:"flex-1 text-left font-semibold text-base leading-relaxed",children:ue}),R[c]&&R[c][he]>0&&!Ue&&n.jsxs("div",{className:"bg-purple-600/20 px-2 py-1 rounded-full text-xs text-purple-300",children:[R[c][he],"%"]}),nt&&je&&Nt&&!Ue&&n.jsx("div",{className:"text-lg animate-bounce",children:"🎉"}),nt&&je&&!Nt&&!Ue&&n.jsx("div",{className:"text-lg",children:"😔"}),nt&&!je&&Nt&&!Ue&&n.jsx("div",{className:"text-base animate-pulse",children:"✨"})]})},he)})}),Le&&O&&Ge!==null&&n.jsx("div",{className:"bg-gray-800 rounded-xl p-4 mb-4 border border-gray-700",children:n.jsxs("div",{className:"flex gap-3",children:[n.jsx("div",{className:"text-lg flex-shrink-0",children:Ge===oe.answerIndex?"🎊":"💡"}),n.jsxs("div",{className:"flex-1",children:[n.jsx("h4",{className:`font-semibold mb-3 text-sm ${Ge===oe.answerIndex?"text-green-400":"text-blue-400"}`,children:Ge===oe.answerIndex?"Perfect! Well done!":"Good try! Here's why:"}),oe.explanation&&n.jsx("p",{className:"text-gray-300 text-sm leading-relaxed",children:oe.explanation})]})]})}),n.jsx("div",{className:"h-[200px]"})]})}),n.jsxs("div",{className:"fixed bottom-0 left-0 right-0 z-50",children:[n.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/95 to-gray-900/80 backdrop-blur-xl"}),n.jsxs("div",{className:"relative p-4 pb-8",children:[n.jsxs("div",{className:"flex gap-2 mb-3",children:[n.jsx("button",{onClick:gt,disabled:c===0,className:`flex-1 bg-white/10 backdrop-blur-md border border-white/20 
                disabled:opacity-30 disabled:cursor-not-allowed
                py-3.5 rounded-2xl font-semibold transition-all transform active:scale-95
                hover:bg-white/15 text-white shadow-xl`,children:"Previous"}),n.jsx("button",{onClick:se,disabled:Ge!==null,className:`flex-1 py-3.5 rounded-2xl font-semibold transition-all transform active:scale-95 shadow-xl ${Ge!==null?"bg-white/5 text-gray-500 cursor-not-allowed":"bg-gradient-to-r from-amber-500 to-yellow-500 text-white hover:from-amber-600 hover:to-yellow-600"}`,children:"Skip"}),n.jsx("button",{onClick:Pe,className:`flex-1 bg-gradient-to-r from-blue-500 to-indigo-500 
                hover:from-blue-600 hover:to-indigo-600
                py-3.5 rounded-2xl font-semibold transition-all transform active:scale-95
                text-white shadow-xl`,children:c===xe-1?"Finish":"Next"})]}),n.jsxs("button",{onClick:()=>U(!0),className:`w-full bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500
              hover:from-emerald-600 hover:via-green-600 hover:to-teal-600
              py-4 rounded-2xl font-bold text-white transition-all transform active:scale-[0.98]
              shadow-2xl shadow-green-500/25 relative overflow-hidden group`,children:[n.jsx("div",{className:"absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent"}),n.jsx("span",{className:"relative",children:"Submit Quiz"})]})]})]}),K&&n.jsx("div",{className:"fixed inset-0 bg-black/75 flex items-center justify-center z-50 p-4",children:n.jsxs("div",{className:"bg-gray-800 rounded-3xl p-6 max-w-sm w-full text-center border border-gray-700",children:[n.jsx("div",{className:"text-4xl mb-4",children:"🤔"}),n.jsx("h3",{className:"text-xl font-bold mb-2",children:"Leave Quiz?"}),n.jsx("p",{className:"text-gray-400 mb-6",children:"Your progress will be lost"}),n.jsxs("div",{className:"flex gap-3",children:[n.jsx("button",{onClick:()=>J(!1),className:"flex-1 bg-blue-600 hover:bg-blue-700 py-3 rounded-xl font-medium",children:"Stay"}),n.jsx("button",{onClick:He,className:"flex-1 bg-gray-700 hover:bg-gray-600 py-3 rounded-xl font-medium",children:"Leave"})]})]})}),M&&!te&&n.jsx("div",{className:"fixed inset-0 bg-black/75 flex items-center justify-center z-50 p-4",children:n.jsxs("div",{className:"bg-gray-800 rounded-3xl p-6 max-w-sm w-full text-center border border-gray-700",children:[n.jsx("div",{className:"text-4xl mb-4",children:"🏆"}),n.jsx("h3",{className:"text-xl font-bold mb-2",children:"Ready to finish?"}),n.jsxs("p",{className:"text-gray-400 mb-4",children:[we," of ",xe," answered • ",at," skipped"]}),Le&&n.jsx("div",{className:"bg-gradient-to-r from-yellow-600/20 to-orange-600/20 p-4 rounded-2xl mb-6 border border-yellow-600/30",children:n.jsxs("div",{className:"flex justify-center gap-6",children:[n.jsxs("div",{className:"text-center",children:[n.jsx("div",{className:"text-2xl mb-1",children:"⭐"}),n.jsx("div",{className:"text-yellow-400 font-bold",children:D}),n.jsx("div",{className:"text-xs text-gray-400",children:"Stars"})]}),n.jsxs("div",{className:"text-center",children:[n.jsx("div",{className:"text-2xl mb-1",children:"🪙"}),n.jsx("div",{className:"text-yellow-400 font-bold",children:ne}),n.jsx("div",{className:"text-xs text-gray-400",children:"Coins"})]})]})}),n.jsxs("div",{className:"flex gap-3",children:[n.jsx("button",{onClick:()=>{U(!1),g(null),C(Date.now())},className:"flex-1 bg-gray-700 hover:bg-gray-600 py-3 rounded-xl font-medium",children:"Back"}),n.jsx("button",{onClick:ue=>{ue.preventDefault(),ue.stopPropagation(),console.log("Submit button clicked"),pe()},className:"flex-1 bg-green-600 hover:bg-green-700 py-3 rounded-xl font-medium",children:"Submit"})]})]})}),v===c&&!M&&n.jsx("div",{className:"fixed inset-0 bg-black/75 flex items-center justify-center z-50 p-4",children:n.jsxs("div",{className:"bg-gray-800 rounded-3xl p-6 max-w-sm w-full text-center border border-gray-700",children:[n.jsx("div",{className:"text-4xl mb-4 animate-pulse",children:"⏰"}),n.jsx("h3",{className:"text-xl font-bold mb-2",children:"Time's Up!"}),n.jsx("p",{className:"text-gray-400 mb-6",children:"Let's move to the next question"}),n.jsx("button",{onClick:()=>{g(null),C(Date.now()),c<X.length-1?Pe():U(!0)},className:"w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-xl font-medium",children:c<X.length-1?"Continue":"See Results"})]})}),$&&n.jsx("div",{className:"fixed top-20 left-1/2 transform -translate-x-1/2 bg-red-600 text-white px-4 py-2 rounded-full font-medium animate-bounce z-50",children:$}),n.jsx("style",{jsx:!0,children:`
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
      `})]})},rs=[{name:"GK",slug:"general-knowledge",questions:50,icon:"🧠",color:"#FF6B6B",gradient:"from-red-500 to-pink-500"},{name:"Science",slug:"science",questions:45,icon:"🧪",color:"#4ECDC4",gradient:"from-cyan-500 to-teal-500"},{name:"Fun Facts",slug:"fun-facts",questions:30,icon:"🎉",color:"#FFD93D",gradient:"from-yellow-400 to-orange-500"},{name:"History",slug:"history",questions:42,icon:"🏺",color:"#A8E6CF",gradient:"from-green-400 to-emerald-500"},{name:"AI & Tech",slug:"artificial-intelligence",questions:28,icon:"🤖",color:"#C7B8FF",gradient:"from-purple-400 to-indigo-500"},{name:"Geography",slug:"geography",questions:38,icon:"🗺️",color:"#FACC15",gradient:"from-yellow-400 to-amber-500"},{name:"Computer",slug:"computer",questions:34,icon:"💻",color:"#3B82F6",gradient:"from-blue-400 to-blue-600"},{name:"Aptitude",slug:"aptitude",questions:36,icon:"📐",color:"#EC4899",gradient:"from-pink-500 to-rose-500"},{name:"Iconic Figures",slug:"iconic-figures",questions:26,icon:"🌟",color:"#8B5CF6",gradient:"from-purple-500 to-violet-600"}],qg=()=>n.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:n.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5l7 7-7 7"})}),Yg=()=>n.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:n.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"})}),Qg=()=>n.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:n.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"})}),Wg=()=>n.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:n.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"})}),Gg=()=>n.jsx("svg",{className:"w-3 h-3",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:n.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 10V3L4 14h7v7l9-11h-7z"})}),Hg=({results:e={correct:8,total:10,category:"general-knowledge",mode:"quiz",elapsedMs:125e3,questions:[],returnPath:null,fromQuest:!1},onRetake:t=()=>{},onReview:r=()=>{},onNavigate:s=(c,u)=>{},isRetake:a=!1,isPractice:i=!1,player:o={level:1,coins:0,combo:0,energy:5},categories:l=[]})=>{const[c,u]=d.useState(ce.getCoins()),f=d.useRef(null),[p,m]=d.useState(null),[j]=$t("/sounds/coin.mp3",{volume:.75}),[x,w]=d.useState(!1),[S,y]=d.useState(!1),[v,g]=d.useState(0),[N,C]=d.useState(!1),[P,E]=d.useState(!1),h=()=>{if(console.log("QuizResults handleBack:",{fromQuest:e.fromQuest,returnPath:e.returnPath,isPractice:e.isPractice||i}),e.fromQuest){const z=e.isPractice||i?"practiceQuestions":"dailyQuizzes";e.isPractice||i?s("/profile/quests"):s("/profile/quests",{state:{questCompleted:!0,questType:z,increment:1}})}else{const z=e.returnPath||"/";s(z)}},{correct:b,total:k,category:T,categorySlug:R,difficulty:B,mode:Q,elapsedMs:H}=e,W=k?Math.round(b/k*100):0,F=W===100,I=W>=80,_=Math.floor(H/1e3),L=k>0?Math.floor(_/k):0,A=i?e.earnedCoins||0:Math.round(b*5*(F?1.5:I?1.2:1)),M=rs.find(z=>z.slug===T)||rs[0],K=(()=>F?{emoji:"🏆",text:"Perfect!",color:"text-yellow-400"}:W>=90?{emoji:"🌟",text:"Excellent!",color:"text-purple-400"}:W>=80?{emoji:"✨",text:"Great job!",color:"text-blue-400"}:W>=70?{emoji:"👍",text:"Good effort!",color:"text-green-400"}:W>=60?{emoji:"💪",text:"Keep going!",color:"text-orange-400"}:{emoji:"📚",text:"Keep practicing!",color:"text-gray-400"})();d.useEffect(()=>{const z=ce.getCoins();u(z)},[]),d.useEffect(()=>{e.coinsProcessed||A>0&&f.current&&setTimeout(()=>{f.current.getBoundingClientRect();const z=new Audio("/sounds/coin.mp3");z.volume=.75,z.play().catch(G=>{if(console.error("Audio play failed:",G),j)try{j()}catch(Y){console.error("Hook play failed:",Y)}}),m({startRect:{left:window.innerWidth/2-50,top:window.innerHeight/2,width:100,height:100},count:Math.min(A,10),amount:A}),w(!0),e.coinsProcessed=!0},500)},[]),d.useEffect(()=>{document.documentElement.scrollIntoView({behavior:"smooth",block:"start"}),(F||I)&&(y(!0),setTimeout(()=>y(!1),3e3));let z=0;const G=b/20,Y=setInterval(()=>{z+=G,z>=b?(g(b),clearInterval(Y)):g(Math.floor(z))},50);return()=>clearInterval(Y)},[b,F,I]);const J=[{score:7,total:10},{score:6,total:10},{score:8,total:10},{score:9,total:10},{score:b,total:k}],$=()=>{try{const z=localStorage.getItem("qp_recent");if(z)return JSON.parse(z).slice(0,10).map(Y=>Y.slug||Y.cat).filter(Y=>Y&&Y!==e.categorySlug)}catch(z){console.error("Error reading recent categories:",z)}return[]},Z=()=>{const z=R||T,G=B||"medium",Y=$(),ee=(l||rs||[]).filter(q=>q.slug!==z&&!Y.slice(0,3).includes(q.slug)),te=(()=>{if(ee.length===0){const q=(l||rs||[]).filter(D=>D.slug!==z);return q[Math.floor(Math.random()*q.length)]||(l||rs)[0]}return ee[Math.floor(Math.random()*ee.length)]})();if(W<60)return i?[{icon:"🎯",title:"Try Fewer Questions",desc:"Start with just 5",color:"from-blue-500 to-cyan-500",action:()=>s(`/quiz/${z}`,{state:{mode:"practice",difficulty:"easy",count:5,timer:{type:"off",seconds:0}}})},{icon:te.icon,title:te.name,desc:"Fresh start with new topic",color:te.gradient,action:()=>s(`/quiz/${te.slug}`,{state:{mode:"practice",difficulty:"easy",count:10,timer:{type:"off",seconds:0}}})},{icon:"📖",title:"Review Mistakes",desc:"Learn from errors",color:"from-purple-500 to-pink-500",action:()=>r()}]:[{icon:"📚",title:"Practice Mode",desc:"No timer, learn at your pace",color:"from-green-500 to-teal-500",action:()=>s(`/quiz/${z}`,{state:{mode:"practice",difficulty:"easy",count:10,timer:{type:"off",seconds:0}}})},{icon:G!=="easy"?"🎯":"🔄",title:G!=="easy"?"Easy Mode":"Try Again",desc:G!=="easy"?"Build confidence":"You can do this!",color:"from-blue-500 to-cyan-500",action:()=>G!=="easy"?s(`/quiz/${z}`,{state:{mode:"quiz",difficulty:"easy",count:5,timer:{type:"per_q",seconds:60}}}):t()},{icon:te.icon,title:te.name,desc:"Try something different",color:te.gradient,action:()=>s(`/quiz/${te.slug}`,{state:{mode:"practice",difficulty:"easy",count:10,timer:{type:"off",seconds:0}}})}];if(W>=80)return G==="hard"&&W>=90?[{icon:"⚡",title:"Lightning Round",desc:"20 questions, 10s each",color:"from-yellow-500 to-red-500",action:()=>s(`/quiz/${z}`,{state:{mode:"quiz",difficulty:"hard",count:20,timer:{type:"per_q",seconds:10}}})},{icon:te.icon,title:`${te.name} Challenge`,desc:"Hard mode, new topic",color:te.gradient,action:()=>s(`/quiz/${te.slug}`,{state:{mode:"quiz",difficulty:"hard",count:15,timer:{type:"per_q",seconds:30}}})},{icon:"🎲",title:"Mixed Categories",desc:"Test all your knowledge",color:"from-purple-500 to-indigo-500",action:()=>s("/quiz/mixed",{state:{mode:"quiz",difficulty:"hard",count:20,timer:{type:"per_q",seconds:30}}})}]:[{icon:G==="hard"?"🔥":"🎯",title:G==="hard"?"Perfect Score Challenge":"Hard Mode",desc:G==="hard"?"Can you get 100%?":"Level up your skills",color:"from-red-500 to-orange-500",action:()=>s(`/quiz/${z}`,{state:{mode:"quiz",difficulty:"hard",count:G==="hard"?10:20,timer:{type:"per_q",seconds:30}}})},{icon:te.icon,title:te.name,desc:"Master new topics",color:te.gradient,action:()=>s(`/quiz/${te.slug}`,{state:{mode:"practice",difficulty:"easy",count:10,timer:{type:"off",seconds:0}}})},{icon:"⚡",title:"Speed Challenge",desc:"10 questions, 15s each",color:"from-purple-500 to-pink-500",action:()=>s(`/quiz/${z}`,{state:{mode:"quiz",difficulty:"medium",count:10,timer:{type:"per_q",seconds:15}}})}];{const q=W<70;return[{icon:q?"📚":"🎯",title:q?"Practice More":"Try Again",desc:q?"Improve accuracy":"Beat your score",color:q?"from-green-500 to-teal-500":"from-blue-500 to-purple-500",action:q?()=>s(`/quiz/${z}`,{state:{mode:"practice",difficulty:G,count:10,timer:{type:"off",seconds:0}}}):()=>t()},{icon:te.icon,title:te.name,desc:"Explore new topics",color:te.gradient,action:()=>s(`/quiz/${te.slug}`,{state:{mode:"practice",difficulty:"easy",count:10,timer:{type:"off",seconds:0}}})},{icon:G==="easy"?"⬆️":"💪",title:G==="easy"?"Medium Difficulty":"More Questions",desc:G==="easy"?"Ready for more?":"Test endurance",color:"from-indigo-500 to-purple-500",action:()=>s(`/quiz/${z}`,{state:{mode:"quiz",difficulty:G==="easy"?"medium":G,count:G==="easy"?10:20,timer:{type:"per_q",seconds:45}}})}]}},O=vt.useMemo(()=>Z(),[W,i,e.categorySlug,e.difficulty]);return n.jsx("div",{className:"h-screen overflow-y-auto bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white",children:n.jsxs("div",{className:"min-h-full p-4 pt-10",children:[p&&n.jsx(Si,{startRect:p.startRect,targetRef:f,count:p.count,onDone:()=>{if(p.amount>0&&!P){console.log("[QuizResults] Updating display with current total"),E(!0);const z=ce.getCoins();u(z)}m(null)}}),n.jsx("style",{children:`
        @keyframes coinRotate {
          from { transform: rotateY(0deg); }
          to { transform: rotateY(360deg); }
        }
      `}),S&&n.jsx("div",{className:"fixed inset-0 pointer-events-none z-50 flex items-center justify-center",children:n.jsx("div",{className:"text-8xl animate-bounce",children:F?"🎉":"⭐"})}),n.jsxs("div",{className:"flex justify-between items-center mb-6",children:[n.jsxs("button",{onClick:h,className:"p-2 rounded-xl bg-white/10 backdrop-blur hover:bg-white/20 transition-all flex items-center gap-2",children:[n.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:n.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 19l-7-7 7-7"})}),n.jsx("span",{className:"text-sm font-medium",children:"Back"})]}),n.jsxs("div",{className:"flex gap-2",children:[n.jsxs("div",{className:"px-3 py-1.5 rounded-full bg-white/10 backdrop-blur text-sm font-medium",children:["Level ",o.level]}),n.jsxs("button",{ref:f,onClick:()=>C(!0),className:"px-3 py-1.5 rounded-full bg-yellow-500/20 backdrop-blur text-sm font-medium text-yellow-300 hover:bg-yellow-500/30 transition-all cursor-pointer",children:[c," 🪙"]})]})]}),n.jsxs("div",{className:"relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 p-8 mb-6",children:[n.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-blue-500/10 animate-pulse"}),n.jsxs("div",{className:"relative text-center",children:[n.jsxs("div",{className:`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur mb-4 ${K.color}`,children:[n.jsx("span",{className:"text-2xl",children:K.emoji}),n.jsx("span",{className:"font-semibold",children:K.text})]}),n.jsxs("div",{className:"mb-6",children:[n.jsxs("div",{className:"text-7xl font-bold mb-2 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent",children:[v,"/",k]}),n.jsxs("div",{className:"flex items-center justify-center gap-2 text-sm text-white/60",children:[n.jsx("span",{className:"text-xl",children:M.icon}),n.jsx("span",{children:M.name})]})]}),n.jsxs("div",{className:"grid grid-cols-3 gap-4 max-w-md mx-auto",children:[n.jsxs("div",{className:"text-center",children:[n.jsxs("div",{className:"text-3xl font-bold",children:[W,"%"]}),n.jsx("div",{className:"text-xs text-white/60",children:"Accuracy"})]}),n.jsxs("div",{className:"text-center",children:[n.jsxs("div",{className:"text-3xl font-bold",children:[L,"s"]}),n.jsx("div",{className:"text-xs text-white/60",children:"Avg Speed"})]}),n.jsxs("div",{className:"text-center",children:[n.jsx("div",{className:"text-3xl font-bold text-yellow-400",children:A>0?`+${A}`:"0"}),n.jsx("div",{className:"text-xs text-white/60",children:"Coins"})]})]})]})]}),n.jsxs("div",{className:"rounded-2xl bg-white/5 backdrop-blur border border-white/10 p-4 mb-6",children:[n.jsxs("div",{className:"flex items-center justify-between mb-3",children:[n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx(Wg,{}),n.jsx("span",{className:"text-sm font-medium",children:"Your Progress"})]}),o.combo>0&&n.jsxs("div",{className:"flex items-center gap-1 px-2 py-1 rounded-full bg-orange-500/20 text-orange-400 text-xs",children:[n.jsx(Gg,{}),o.combo," streak"]})]}),n.jsx("div",{className:"flex items-end gap-1 h-12 mb-2",children:J.map((z,G)=>n.jsx("div",{className:`flex-1 rounded-t transition-all ${G===J.length-1?"bg-gradient-to-t from-purple-500 to-purple-400":"bg-white/20"}`,style:{height:`${z.score/z.total*100}%`,minHeight:"4px"}},G))}),n.jsx("div",{className:"text-xs text-white/40 text-center",children:"Last 5 quizzes"})]}),n.jsxs("div",{className:"grid grid-cols-2 gap-3 mb-6",children:[n.jsxs("button",{onClick:r,className:"relative overflow-hidden group rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 p-4 transition-all hover:scale-105 active:scale-95",children:[n.jsx("div",{className:"absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform"}),n.jsxs("div",{className:"relative flex items-center justify-between",children:[n.jsxs("div",{className:"text-left",children:[n.jsx("div",{className:"font-semibold",children:"Review"}),n.jsx("div",{className:"text-xs opacity-80",children:"Check answers"})]}),n.jsx(Qg,{})]})]}),n.jsx("button",{onClick:t,className:"relative overflow-hidden group rounded-2xl bg-white/10 backdrop-blur border border-white/20 p-4 transition-all hover:scale-105 active:scale-95 hover:bg-white/15",children:n.jsxs("div",{className:"flex items-center justify-between",children:[n.jsxs("div",{className:"text-left",children:[n.jsx("div",{className:"font-semibold",children:"Try Again"}),n.jsx("div",{className:"text-xs opacity-60",children:"New questions"})]}),n.jsx(Yg,{})]})})]}),n.jsxs("div",{className:"space-y-3",children:[n.jsx("div",{className:"text-sm font-medium text-white/60 px-1",children:"Recommended for you"}),O.map((z,G)=>n.jsx("button",{onClick:z.action,className:"w-full group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur border border-white/10 p-4 transition-all hover:bg-white/10 hover:border-white/20",children:n.jsxs("div",{className:"flex items-center justify-between",children:[n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsx("div",{className:`p-2 rounded-xl bg-gradient-to-r ${z.color} opacity-20 group-hover:opacity-30 transition-opacity`,children:n.jsx("span",{className:"text-xl",children:z.icon})}),n.jsxs("div",{className:"text-left",children:[n.jsx("div",{className:"font-medium text-sm",children:z.title}),n.jsx("div",{className:"text-xs text-white/40",children:z.desc})]})]}),n.jsx(qg,{})]})},G))]}),n.jsx("div",{className:"mt-6 pt-6 border-t border-white/10",children:n.jsx("button",{onClick:()=>s("/profile/history",{state:{from:"results",returnToResults:!0}}),className:"w-full text-center text-sm text-white/40 hover:text-white/60 transition-colors",children:"View all history →"})}),N&&n.jsx("div",{className:"fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4",onClick:z=>{z.target===z.currentTarget&&C(!1)},children:n.jsxs("div",{className:"bg-gray-800 rounded-3xl p-6 w-full max-w-md border border-gray-700 relative overflow-hidden",onClick:z=>z.stopPropagation(),children:[n.jsx("div",{className:"absolute inset-0 opacity-10",children:n.jsx("div",{className:"h-full bg-gradient-to-br from-yellow-400 to-orange-500"})}),n.jsxs("div",{className:"relative",children:[n.jsxs("div",{className:"flex items-center justify-between mb-6",children:[n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsx("div",{className:"text-5xl",style:{animation:"coinRotate 2s linear infinite"},children:"🪙"}),n.jsxs("div",{children:[n.jsx("h3",{className:"text-2xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent",children:"Your Treasure"}),n.jsxs("p",{className:"text-3xl font-bold text-white mt-1",children:[c," Coins"]})]})]}),n.jsx("button",{onClick:()=>C(!1),className:"w-8 h-8 rounded-lg bg-white/5 border border-gray-600 grid place-items-center hover:bg-white/10 transition",children:"✕"})]}),n.jsxs("div",{className:"mb-6",children:[n.jsx("h4",{className:"text-sm font-medium text-gray-400 mb-3",children:"Ways to Earn"}),n.jsxs("div",{className:"space-y-3",children:[n.jsx("div",{className:"p-4 rounded-xl bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 hover:scale-[1.02] transition-transform",children:n.jsxs("div",{className:"flex items-center justify-between",children:[n.jsxs("div",{children:[n.jsxs("div",{className:"font-medium flex items-center gap-2",children:[n.jsx("span",{className:"text-2xl",children:"✅"}),"Complete Quizzes"]}),n.jsx("div",{className:"text-xs text-gray-400 mt-1",children:"+5 coins per correct answer"})]}),n.jsx("div",{className:"text-green-400 font-bold",children:"+5"})]})}),n.jsx("div",{className:"p-4 rounded-xl bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 hover:scale-[1.02] transition-transform",children:n.jsxs("div",{className:"flex items-center justify-between",children:[n.jsxs("div",{children:[n.jsxs("div",{className:"font-medium flex items-center gap-2",children:[n.jsx("span",{className:"text-2xl",children:"🎯"}),"Daily Challenge"]}),n.jsx("div",{className:"text-xs text-gray-400 mt-1",children:"Complete daily for bonus"})]}),n.jsx("div",{className:"text-blue-400 font-bold",children:"+5"})]})}),n.jsx("div",{className:"p-4 rounded-xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 hover:scale-[1.02] transition-transform",children:n.jsxs("div",{className:"flex items-center justify-between",children:[n.jsxs("div",{children:[n.jsxs("div",{className:"font-medium flex items-center gap-2",children:[n.jsx("span",{className:"text-2xl",children:"🎰"}),"Spin & Play"]}),n.jsx("div",{className:"text-xs text-gray-400 mt-1",children:"Test your luck!"})]}),n.jsx("div",{className:"text-purple-400 font-bold",children:"+50"})]})}),n.jsx("div",{className:"p-4 rounded-xl bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/20 hover:scale-[1.02] transition-transform",children:n.jsxs("div",{className:"flex items-center justify-between",children:[n.jsxs("div",{children:[n.jsxs("div",{className:"font-medium flex items-center gap-2",children:[n.jsx("span",{className:"text-2xl",children:"🏆"}),"Achievements"]}),n.jsx("div",{className:"text-xs text-gray-400 mt-1",children:"Unlock special rewards"})]}),n.jsx("div",{className:"text-orange-400 font-bold",children:"+???"})]})})]})]}),n.jsxs("div",{className:"mb-6",children:[n.jsxs("div",{className:"flex justify-between text-xs text-gray-400 mb-2",children:[n.jsx("span",{children:"Next reward"}),n.jsxs("span",{children:[100-o.coins%100," coins to go"]})]}),n.jsx("div",{className:"h-2 bg-white/10 rounded-full overflow-hidden",children:n.jsx("div",{className:"h-full bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full transition-all",style:{width:`${o.coins%100}%`}})})]}),n.jsx("button",{onClick:()=>{C(!1),s("/play")},className:"w-full py-3 rounded-xl bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-bold hover:scale-[1.02] transition-transform shadow-lg",children:"Start Earning Now! 🚀"})]})]})})]})})},Kg=({questions:e,answers:t,skipped:r,onBack:s,onRetake:a,fromHistory:i=!1})=>{const o=_e(),l=()=>{i?o("/profile/history",{replace:!0}):s?s():o(-1)},c=e.reduce((p,m,j)=>p+(t[j]===m.answerIndex?1:0),0),u=(r==null?void 0:r.filter(Boolean).length)||0,f=e.length-c-u;return n.jsxs("div",{className:"mt-2 card rounded-3xl p-5 w-full max-w-none mx-auto pb-24 h-full overflow-y-auto",children:[n.jsxs("div",{className:"flex items-center justify-between mb-4 pt-6",children:[n.jsx("button",{className:"px-3 py-1 rounded-xl border border-base-border bg-white/5",onClick:l,children:"← Back"}),n.jsx("h2",{className:"text-lg font-semibold",children:"Review Answers"}),n.jsx("div",{className:"w-16"})," "]}),n.jsxs("div",{className:"grid grid-cols-3 gap-2 mb-4",children:[n.jsxs("div",{className:"rounded-xl bg-green-600/10 border border-green-500/30 p-2 text-center",children:[n.jsx("div",{className:"text-xs text-green-400",children:"Correct"}),n.jsx("div",{className:"text-lg font-bold text-green-400",children:c})]}),n.jsxs("div",{className:"rounded-xl bg-red-600/10 border border-red-500/30 p-2 text-center",children:[n.jsx("div",{className:"text-xs text-red-400",children:"Incorrect"}),n.jsx("div",{className:"text-lg font-bold text-red-400",children:f})]}),n.jsxs("div",{className:"rounded-xl bg-amber-600/10 border border-amber-500/30 p-2 text-center",children:[n.jsx("div",{className:"text-xs text-amber-400",children:"Skipped"}),n.jsx("div",{className:"text-lg font-bold text-amber-400",children:u})]})]}),n.jsx("ol",{className:"space-y-4",children:e.map((p,m)=>{const j=t[m],x=!j&&j!==0,w=j===p.answerIndex;return n.jsxs("li",{className:"rounded-2xl border border-base-border bg-white/5 p-4 md:p-5",children:[n.jsxs("div",{className:"flex items-start justify-between mb-3",children:[n.jsxs("div",{className:"flex-1",children:[n.jsxs("div",{className:"text-sm md:text-base font-medium",children:["Q",m+1,". ",p.prompt]}),p.category&&n.jsxs("div",{className:"text-xs text-base-muted mt-1",children:["Category: ",p.category," • Difficulty: ",p.difficulty||"Medium"]})]}),n.jsx("div",{className:"ml-2",children:x?n.jsx("span",{className:"px-2 py-1 rounded text-xs bg-amber-600/20 text-amber-400",children:"Skipped"}):w?n.jsx("span",{className:"px-2 py-1 rounded text-xs bg-green-600/20 text-green-400",children:"✓ Correct"}):n.jsx("span",{className:"px-2 py-1 rounded text-xs bg-red-600/20 text-red-400",children:"✗ Wrong"})})]}),n.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-3",children:p.options.map((S,y)=>{const v=j===y,g=y===p.answerIndex;let N="w-full text-left px-3 py-2 rounded-xl border transition-all ";return g?N+="bg-green-600/20 border-green-500/50 text-green-300":v&&!g?N+="bg-red-600/20 border-red-500/50 text-red-300":N+="bg-base-bg/40 border-base-border text-base-muted",n.jsxs("div",{className:N,children:[n.jsxs("span",{className:"font-semibold mr-2",children:[["A","B","C","D"][y],"."]}),S,g&&n.jsx("span",{className:"ml-2 text-green-400",children:"✓"}),v&&!g&&n.jsx("span",{className:"ml-2 text-red-400",children:"✗"})]},y)})}),p.explanation&&n.jsxs("div",{className:"mt-3 p-3 rounded-xl bg-white/5 border border-base-border",children:[n.jsx("div",{className:"text-xs font-semibold text-brand-blue mb-1",children:"Explanation:"}),n.jsx("div",{className:"text-sm text-base-muted",children:p.explanation})]})]},p.id||m)})}),n.jsxs("div",{className:"mt-6 flex gap-2 justify-center sticky bottom-4",children:[n.jsx("button",{className:"px-4 py-2.5 rounded-xl border border-base-border bg-base-card backdrop-blur",onClick:l,children:"Back to Results"}),a&&n.jsx("button",{className:"px-4 py-2.5 rounded-xl bg-gradient-to-r from-brand-blue to-brand-purple text-white font-medium",onClick:a,children:"Retake Quiz"})]})]})},Vg="qp_resume",zd="qp_mistakes",Md="qp_stats",Od="qp_lastset",Fd="qp_recent",$d="qp_review_snapshot",Xg=50,ss=(e="")=>e.replace(/-/g," ").replace(/\b\w/g,t=>t.toUpperCase()),La=(e="")=>e.toLowerCase().trim().replace(/[^\w\s-]/g,"").replace(/\s+/g,"-"),Jg=(e,t)=>e.slice().sort(()=>Math.random()-.5).slice(0,t),Am=e=>{const t=e.slice();for(let r=t.length-1;r>0;r--){const s=Math.floor(Math.random()*(r+1));[t[r],t[s]]=[t[s],t[r]]}return t},Zg=(e,t,r)=>Math.max(t,Math.min(r,e)),as=(e,t)=>{try{const r=localStorage.getItem(e);return r?JSON.parse(r):t}catch{return t}};async function ev(){const e="/data/quiz_questions_bank.csv",t=await fetch(e);if(!t.ok)throw new Error(`CSV not found at ${e}`);const r=await t.text(),{data:s}=ur.parse(r,{header:!0,skipEmptyLines:!0,transformHeader:i=>String(i).trim().toLowerCase()}),a={a:0,b:1,c:2,d:3};return s.map((i,o)=>{var m;const l=[i.option1,i.option2,i.option3,i.option4].map(j=>(j??"").trim());if(l.some(j=>!j))return null;let c=-1;const u=String(i.answer??"").trim();if(a[u.toLowerCase()]!==void 0)c=a[u.toLowerCase()];else{const j=l.findIndex(x=>x.toLowerCase()===u.toLowerCase());c=j>=0?j:0}const f=String(i.category??i.subject??"General Knowledge").trim(),p=String(i.difficulty??"medium").toLowerCase().trim();return{id:((m=i.id)==null?void 0:m.trim())||`q_${o}`,category:f,difficulty:p,prompt:String(i.question??"").trim(),options:l,answerIndex:c,explanation:String(i.explanation??"").trim()}}).filter(Boolean)}function tv(e,{categorySlug:t,difficulty:r,count:s}){console.log("=== BUILD SESSION DEBUG ==="),console.log("categorySlug:",t),console.log("difficulty:",r),console.log("count:",s),console.log("Total questions available:",e.length);const i=t==="mixed"?()=>!0:f=>La(f.category)===t,o=r?f=>(f.difficulty||"medium")===r:()=>!0,l=e.filter(f=>i(f)&&o(f));if(console.log("Filtered pool size:",l.length),console.log("Sample categories from all questions:",[...new Set(e.slice(0,10).map(f=>`"${f.category}" -> "${La(f.category)}"`))]),l.length===0)return console.error("No questions match the filter criteria!"),console.log("Available categories:",[...new Set(e.map(f=>La(f.category)))]),{questions:[],poolSize:0};const u=Jg(l,Math.min(s,l.length)).map(f=>{const p=Am([0,1,2,3]),m=p.map(x=>f.options[x]),j=p.indexOf(f.answerIndex);return{...f,options:m,answerIndex:j}});return console.log("Final questions:",u.length),{questions:u,poolSize:l.length}}function nv(){const e=_e(),{category:t}=Yp(),r=Je(),{energy:s,useEnergy:a,player:i,updateDailyStreak:o}=bn(),l=new URLSearchParams(r.search),c=l.get("review")==="1",u=l.get("retake")==="1",f=r.state||{},p=f.mode||"quiz",m=String(f.difficulty||"medium").toLowerCase(),j=f.returnPath||null,x=f.fromQuest||!1,w=Zg(Number(f.count||10),1,50),S=f.timer||{type:"per_q",seconds:45};f.resume,f.daily,f.source;const y=u||!!f.retake,v=!!f.fromHistory,g=p==="practice";console.log("Quiz Component - Mode Detection:",{routerState:f,mode:p,isPractice:g,location:r.pathname,state:r.state});const[N,C]=d.useState([]),[P,E]=d.useState(!0),[h,b]=d.useState(""),[k,T]=d.useState({questions:[]}),[R,B]=d.useState("quiz"),[Q,H]=d.useState(null),[W,F]=d.useState(null),[I,_]=d.useState(0);d.useEffect(()=>{let $=!0;return(async()=>{try{const Z=await ev();if(!$)return;C(Z)}catch(Z){console.error(Z),b("Failed to load questions. Check /public/data/quiz_questions_bank.csv")}finally{E(!1)}})(),()=>{$=!1}},[]),d.useEffect(()=>{var $;if(($=r.state)!=null&&$.returnToResults){const Z=ce.getCurrentResults();Z&&(H(Z),B("results"),E(!1),T({questions:[]}))}},[r.state]),d.useEffect(()=>{var Z;if(P||h||c||(Z=r.state)!=null&&Z.returnToResults||N.length===0)return;console.log("=== SESSION INIT ==="),console.log("Category:",t),console.log("Mode:",p),console.log("Difficulty:",m),console.log("Count:",w);const $=tv(N,{categorySlug:t,difficulty:m,count:w});if($.questions.length===0){console.error("No questions found!"),console.log("Looking for category:",t),console.log("Available categories (first 10):",[...new Set(N.map(O=>La(O.category)))].slice(0,10)),b(`No questions found for "${ss(t)}" with difficulty "${m}"`);return}console.log("Session built with",$.questions.length,"questions"),B("quiz"),H(null),T($),F(Date.now()),_(0)},[N,t,p,m,w,r.pathname]),d.useEffect(()=>{if(R!=="quiz"||!W)return;const $=setInterval(()=>{_(Date.now()-W)},1e3);return()=>clearInterval($)},[R,W]);const L=d.useCallback($=>{if(console.log("Quiz completed - Mode:",p,"isPractice:",g,"Results:",$),console.log("handleQuizComplete called at:",new Date().toISOString()),window._quizCompleting){console.warn("Quiz completion already in progress, ignoring duplicate call");return}if(window._quizCompleting=!0,setTimeout(()=>{window._quizCompleting=!1},1e3),!$||!$.questions){console.error("Invalid results object:",$);return}const Z=$.questions.filter((Y,ee)=>$.answers[ee]!==null&&$.answers[ee]!==Y.answerIndex).map(Y=>Y.id);try{const Y=as(zd,[]),ee=Array.from(new Set([...Z,...Y]));localStorage.setItem(zd,JSON.stringify(ee))}catch(Y){console.error("Error saving mistakes:",Y)}try{const Y=as(Md,{sessions:[]});Y.sessions.push({cat:ss(t),mode:g?"practice":"quiz",total:$.total,correct:$.correct,skipped:$.skipped.filter(Boolean).length,ms:I,timestamp:Date.now(),earnedXP:g?0:$.correct*10,earnedCoins:g?0:$.correct*5}),localStorage.setItem(Md,JSON.stringify(Y))}catch(Y){console.error("Error saving stats:",Y)}const O={ts:Date.now(),slug:t,categoryLabel:ss(t),mode:g?"practice":"quiz",difficulty:m,total:$.total,timer:g?null:S,ms:I,attempted:$.answers.filter(Y=>Y!==null).length,correct:$.correct,questions:$.questions,answers:$.answers,skipped:$.skipped,isPractice:g};try{localStorage.setItem(Od,JSON.stringify(O)),localStorage.setItem($d,JSON.stringify({questions:$.questions,answers:$.answers,skipped:$.skipped}));const Y=as(Fd,[]),le=[{id:O.ts,ts:O.ts,cat:O.categoryLabel,slug:t,mode:g?"Practice":"Quiz",total:$.total,correct:$.correct,ms:I,snapshot:O},...Y].slice(0,Xg);localStorage.setItem(Fd,JSON.stringify(le))}catch(Y){console.error("Error saving snapshot:",Y)}localStorage.removeItem(Vg);const z=Ve.getCurrentUser();if(z!=null&&z.phone)if(g){const Y=ce.recordPracticeSession(z.phone,{questionsCompleted:$.correct,correctAnswers:$.correct,category:t});$.earnedCoins=Y.coinsEarned}else{const Y=ce.recordQuizSession(z.phone,{score:$.correct,totalQuestions:$.total,category:t,difficulty:m,mode:"quiz"});$.earnedCoins=Y.coinsEarned}else $.earnedCoins=0;o(),console.log("Setting review snapshot with:",{returnPath:j||"/",fromQuest:x||!1});const G={...$,category:ss(t),categorySlug:t,difficulty:m,mode:g?"practice":"quiz",elapsedMs:I,isPractice:g,hasTimer:!g,earnedXP:g?0:$.correct*10,earnedCoins:g?$.earnedCoins||0:$.correct*5,returnPath:j||"/",fromQuest:x||!1};ce.storeCurrentResults(G),H(G),B("results")},[t,p,S,I,g,j,x]),A=()=>{const $=new Date;return`${$.getFullYear()}-${$.getMonth()+1}-${$.getDate()}`};d.useCallback($=>{if(g&&x){const Z=JSON.parse(localStorage.getItem("questProgress")||"{}"),O=Z.practiceQuestions||0,z=Math.min(O+$,15);Z.practiceQuestions=z,Z.date=A(),localStorage.setItem("questProgress",JSON.stringify(Z)),console.log("Practice progress updated:",z)}},[g,x]);const M=d.useCallback(()=>{j?e(j,{replace:!0}):v?e("/profile/history",{replace:!0,state:null}):e("/")},[v,e,j]),U=d.useCallback(()=>{console.log("Retake requested - Mode:",p,"isPractice:",g);const $=as(Od,null);if(!$||$.slug!==t){e(`/quiz/${t}?r=${Date.now()}`,{replace:!0,state:{mode:g?"practice":"quiz",difficulty:m,count:w,timer:g?null:S,retake:!0}});return}const Z=$.questions.map(O=>{const z=Am([0,1,2,3]);return{...O,options:z.map(G=>O.options[G]),answerIndex:z.indexOf(O.answerIndex)}});T({questions:Z,poolSize:Z.length}),F(Date.now()),_(0),B("quiz"),window.scrollTo(0,0)},[t,p,m,w,S,e,g]),K=d.useCallback(($=null)=>{if($)H($);else if(!Q){const Z=as($d,null);Z&&H({questions:Z.questions||[],answers:Z.answers||[],skipped:Z.skipped||[]})}B("review")},[Q]),J=d.useCallback(()=>{v?e("/profile/history",{replace:!0}):B("results")},[v,e]);return P?n.jsx("div",{className:"fixed inset-0 bg-inherit text-white flex items-center justify-center",children:n.jsx("div",{className:"text-sm text-base-muted",children:"Loading questions…"})}):h?n.jsx("div",{className:"fixed inset-0 bg-inherit text-white flex items-center justify-center",children:n.jsx("div",{className:"text-sm text-red-400",children:h})}):(console.log("Render - Current view:",R,"Session questions:",k.questions.length,"Mode:",p,"isPractice:",g),n.jsx("div",{className:"fixed inset-0 bg-inherit text-white z-0 overflow-hidden max-w-[100vw]",children:n.jsxs("div",{className:"h-full overflow-hidden px-0",children:[R==="quiz"&&k.questions.length>0&&n.jsx("div",{className:"h-full",children:n.jsx(Ug,{session:k,mode:g?"practice":"quiz",category:ss(t),difficulty:m,timerConfig:g?null:S,onComplete:L,onQuit:M,isPractice:g})}),R==="results"&&Q&&n.jsx(Hg,{results:Q,onRetake:U,onReview:()=>K(Q),isRetake:y,isPractice:g,player:i,categories:Pm,onNavigate:($,Z)=>{console.log("onNavigate called with:",$,Z),Z!=null&&Z.state?e($,{state:Z.state,replace:Z.replace||!1}):e($)}}),R==="review"&&Q&&n.jsx(Kg,{questions:Q.questions||[],answers:Q.answers||[],skipped:Q.skipped||[],onBack:J,onRetake:U,fromHistory:v,isPractice:g})]})}))}const Sn=[{label:"General Knowledge",slug:"general-knowledge",color:"#7C3AED",soon:!1},{label:"Current Affairs",slug:"current-affairs",color:"#2563EB",soon:!1},{label:"Fun Facts",slug:"fun-facts",color:"#EF4444",soon:!1},{label:"Science",slug:"science",color:"#10B981",soon:!1},{label:"History",slug:"history",color:"#F59E0B",soon:!0},{label:"Geography",slug:"geography",color:"#FACC15",soon:!0},{label:"Cat 1",slug:"cat-1",color:"#06B6D4",soon:!0},{label:"Cat 2",slug:"cat-2",color:"#D946EF",soon:!0}],Gn=360/Sn.length,rv=42,ro=3e3,Bd=10,Ud=260,sv="cubic-bezier(.15,.7,.1,1)",av="cubic-bezier(.2,.7,.2,1)",Nn=5,iv=5,ov=(e="")=>String(e).toLowerCase().trim().replace(/[^\w\s-]/g,"").replace(/\s+/g,"-");function lv({muted:e=!1,size:t=18}){return n.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24","aria-hidden":"true",children:[n.jsx("path",{d:"M3 9h4l5-4v14l-5-4H3z",fill:"currentColor"}),!e&&n.jsxs(n.Fragment,{children:[n.jsx("path",{d:"M16 8c1.5 1.5 1.5 6 0 7.5",stroke:"currentColor",strokeWidth:"2",fill:"none",strokeLinecap:"round"}),n.jsx("path",{d:"M19 6c3 3 3 10 0 13",stroke:"currentColor",strokeWidth:"2",fill:"none",strokeLinecap:"round"})]}),e&&n.jsx("line",{x1:"3",y1:"21",x2:"21",y2:"3",stroke:"#EF4444",strokeWidth:"2.5",strokeLinecap:"round"})]})}function cv({q:e,locked:t,onPick:r,result:s}){if(!e)return null;const a=[e.option1,e.option2,e.option3,e.option4];return n.jsxs("div",{className:"mt-5 rounded-3xl bg-white/5 border border-white/10 p-4",children:[n.jsx("div",{className:"text-sm text-base-muted mb-1",children:"Quick question"}),n.jsx("div",{className:"text-xl font-semibold mb-4",children:e.question}),a.map((i,o)=>{const l=s&&i===e.answer,c=s&&s.pick===i&&i!==e.answer;return n.jsx("button",{disabled:t||!!s,onClick:()=>r(i),className:["w-full text-left px-4 py-2 rounded-xl mb-2 border transition",!s&&!t?"bg-white/5 hover:bg-white/10 border-white/10":"bg-white/5 border-white/10",l?"bg-green-600/20 border-green-400/60 text-green-200":"",c?"bg-red-600/20 border-red-400/60 text-red-200":""].join(" "),children:i},o)}),s&&n.jsxs("div",{className:"mt-3 text-sm",children:[s.correct?n.jsx("span",{className:"text-green-400 font-medium",children:"✅ Correct!"}):n.jsxs("span",{className:"text-red-400 font-medium",children:["❌ Not quite. Answer: ",n.jsx("b",{children:e.answer})]}),e.explanation&&n.jsxs("div",{className:"text-xs text-base-muted mt-1",children:["Tip: ",e.explanation]})]})]})}function dv(){const e=_e(),[t]=$t("/sounds/correct.mp3",{volume:.7}),[r]=$t("/sounds/wrong.mp3",{volume:.7}),[s,a]=d.useState(()=>[{name:"Player 1",color:"#60A5FA",scores:Array(Nn).fill(null)},{name:"Player 2",color:"#F472B6",scores:Array(Nn).fill(null)}]),[i,o]=d.useState(0),[l,c]=d.useState(1),u=s.reduce((O,z)=>O+z.scores.reduce((G,Y)=>G+(Y??0),0),0),[f,p]=d.useState(!0),m=d.useRef(null);d.useEffect(()=>{const O=new Audio("/sounds/spin.mp3");return O.loop=!0,O.volume=.7,m.current=O,()=>{try{O.pause(),O.src=""}catch{}}},[]);const j=()=>{if(f&&m.current)try{m.current.currentTime=0,m.current.play()}catch{}},x=()=>{if(m.current)try{m.current.pause(),m.current.currentTime=0}catch{}},[w,S]=d.useState(0),[y,v]=d.useState("none"),[g,N]=d.useState(!1),[C,P]=d.useState(null),[E,h]=d.useState(null),b=d.useMemo(()=>typeof window<"u"?window.matchMedia("(prefers-reduced-motion: reduce)").matches:!1,[]),[k,T]=d.useState([]);d.useEffect(()=>{(async()=>{try{const O=await fetch("/data/quiz_questions_bank.csv").then(ee=>ee.text()),{data:z}=ur.parse(O,{header:!0,skipEmptyLines:!0,transformHeader:ee=>String(ee).trim().toLowerCase()}),G={a:0,b:1,c:2,d:3},Y=z.map((ee,le)=>{var ae;const te=(ee.question??"").trim();if(!te)return null;const q=[ee.option1,ee.option2,ee.option3,ee.option4].map(de=>String(de??"").trim());if(q.some(de=>!de))return null;let D=String(ee.answer??"").trim(),re=G[D.toLowerCase()];if(re===void 0){const de=q.findIndex(Ee=>Ee.toLowerCase()===D.toLowerCase());re=de>=0?de:0}const ne=q[re];return{id:((ae=ee.id)==null?void 0:ae.trim())||`ps_${le}`,question:te,option1:q[0],option2:q[1],option3:q[2],option4:q[3],answer:ne,explanation:String(ee.explanation??"").trim(),catSlug:ov(ee.category??ee.subject??"general knowledge"),difficulty:String(ee.difficulty??"medium").toLowerCase().trim()}}).filter(Boolean);T(Y)}catch{T([])}})()},[]);const[R,B]=d.useState(null),[Q,H]=d.useState(null),[W,F]=d.useState(!1),I=O=>(O%360+360)%360,_=O=>I(O),L=l>Nn;function A(){if(s.length>=4)return;const O=["#60A5FA","#F472B6","#F59E0B","#34D399","#F87171","#A78BFA"],z=O[(s.length*2+1)%O.length];a(G=>[...G,{name:`Player ${G.length+1}`,color:z,scores:Array(Nn).fill(null)}])}function M(){s.length<=2||(a(O=>O.slice(0,-1)),o(O=>Math.min(O,s.length-2)))}function U(O){a(z=>z.map((G,Y)=>Y===i?{...G,scores:G.scores.map((ee,le)=>le===l-1?O:ee)}:G))}function K(){if(g||L)return;P(null),h(null),B(null),H(null),N(!0),j();const O=Math.floor(Math.random()*Sn.length),z=Sn[O],G=Gn*.28,Y=(Math.random()*2-1)*G,ee=I(w),le=180,q=O*Gn+Gn/2+Y;let D=_(q-ee-le);const re=rv*360+D,ne=w+re+Bd;v(`transform ${b?800:ro}ms ${sv}`),S(ne);try{navigator.vibrate&&!b&&navigator.vibrate([10,40,10])}catch{}setTimeout(()=>{v(`transform ${b?160:Ud}ms ${av}`),S(ae=>ae-Bd)},b?800:ro),setTimeout(()=>{if(x(),N(!1),P(O),h(z.color),z.soon)return;const ae=k.filter(Ee=>Ee.catSlug===z.slug&&Ee.difficulty==="easy"),de=ae.length?ae:k.filter(Ee=>Ee.catSlug===z.slug);if(de.length){const Ee=de[Math.floor(Math.random()*de.length)];B(Ee)}else B({question:"No question found for this category yet. Try re-spinning!",option1:"Okay",option2:"Okay",option3:"Okay",option4:"Okay",answer:"Okay",explanation:""})},(b?800:ro)+(b?160:Ud)+40)}function J(O){if(!R||Q)return;const z=O===R.answer;if(H({correct:z,pick:O}),z){t(),F(!0),setTimeout(()=>F(!1),900);try{navigator.vibrate&&navigator.vibrate([8,16])}catch{}U(iv)}else{r();try{navigator.vibrate&&navigator.vibrate([4])}catch{}U(0)}}function $(){const O=(i+1)%s.length,z=O===0?l+1:l;o(O),c(z),P(null),h(null),B(null),H(null)}function Z(){const O=s.map(Y=>Y.scores.reduce((ee,le)=>ee+(le??0),0)),z=Math.max(...O),G=s.filter((Y,ee)=>O[ee]===z).map(Y=>Y.name).join(", ");alert(`${G} win${G.includes(",")?"":"s"} the pot of ${u} coins! 🎉`),e("/play")}return n.jsxs("div",{className:"min-h-screen bg-black text-white",children:[W&&n.jsx(Rm,{numberOfPieces:120,recycle:!1}),n.jsxs("div",{className:"mx-auto max-w-md px-5 pt-[calc(env(safe-area-inset-top)+1.25rem)] pb-[calc(5.25rem+env(safe-area-inset-bottom))]",children:[n.jsxs("header",{className:"flex items-center justify-between mb-4",children:[n.jsx("button",{onClick:()=>e("/play"),className:"h-10 w-10 grid place-items-center rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition","aria-label":"Back",children:"←"}),n.jsxs("div",{className:"text-center",children:[n.jsx("h1",{className:"text-2xl font-bold",children:"Party Spin"}),n.jsx("p",{className:"text-sm text-base-muted",children:"Pass & play • Winner takes the pot"})]}),n.jsx("button",{onClick:()=>p(O=>!O),className:"h-10 w-10 grid place-items-center rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition","aria-label":f?"Mute sound":"Unmute sound",title:f?"Sound on":"Sound off",children:n.jsx(lv,{muted:!f})})]}),n.jsxs("section",{className:"rounded-2xl border border-white/10 bg-white/5 p-3 mb-4",children:[n.jsxs("div",{className:"flex items-center justify-between mb-2",children:[n.jsxs("div",{className:"text-sm",children:["Round ",n.jsx("b",{children:Math.min(l,Nn)}),"/",n.jsx("b",{children:Nn})]}),n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx("button",{onClick:A,className:"btn-ghost px-2 py-1 text-sm",children:"+"}),n.jsx("span",{className:"text-sm text-base-muted",children:"Player"}),n.jsx("button",{onClick:M,className:"btn-ghost px-2 py-1 text-sm",children:"−"})]}),n.jsxs("div",{className:"text-sm",children:["Pot: ",n.jsx("b",{className:"text-yellow-300",children:u})," 🪙"]})]}),n.jsx("div",{className:"overflow-x-auto",children:n.jsxs("table",{className:"w-full table-fixed text-sm tracking-tight tabular-nums",children:[n.jsxs("colgroup",{children:[n.jsx("col",{style:{width:"42%"}}),n.jsx("col",{style:{width:"9%"}}),n.jsx("col",{style:{width:"9%"}}),n.jsx("col",{style:{width:"9%"}}),n.jsx("col",{style:{width:"9%"}}),n.jsx("col",{style:{width:"9%"}}),n.jsx("col",{style:{width:"13%"}})]}),n.jsx("thead",{children:n.jsxs("tr",{className:"text-base-muted",children:[n.jsx("th",{className:"text-left font-medium py-1 pr-1",children:"Player"}),Array.from({length:Nn}).map((O,z)=>n.jsxs("th",{className:"font-medium text-center",children:["R",z+1]},z)),n.jsx("th",{className:"font-medium text-right pr-1",children:"Total"})]})}),n.jsx("tbody",{children:s.map((O,z)=>{const G=O.scores.reduce((ee,le)=>ee+(le??0),0),Y=z===i;return n.jsxs("tr",{className:Y?"bg-white/6":"",children:[n.jsx("td",{className:"py-1 pr-1",children:n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx("span",{className:"inline-block h-3 w-3 rounded-full shrink-0",style:{background:O.color}}),n.jsx("input",{className:"bg-transparent outline-none font-semibold w-full",value:O.name,onChange:ee=>a(le=>le.map((te,q)=>q===z?{...te,name:ee.target.value}:te))})]})}),O.scores.map((ee,le)=>n.jsx("td",{className:"text-center",children:ee===null?"–":ee},le)),n.jsx("td",{className:"text-right pr-1 font-semibold",children:G})]},z)})})]})})]}),n.jsx("section",{className:"flex flex-col items-center",children:n.jsxs("div",{className:"relative w-[320px] h-[320px] md:w-[380px] md:h-[380px] rounded-full select-none",children:[E&&n.jsx("div",{className:"pointer-events-none absolute -inset-2 rounded-full",style:{boxShadow:`0 0 0 6px ${E}33, 0 0 30px 8px ${E}44`}}),n.jsx("div",{className:"absolute inset-0 rounded-full border border-white/10 shadow-2xl bg-black/20 overflow-hidden will-change-transform",style:{transform:`rotate(${w}deg)`,transition:y},"aria-label":"Category wheel",role:"group",children:n.jsxs("svg",{width:"100%",height:"100%",viewBox:"0 0 100 100",className:"block",children:[Sn.map((O,z)=>{const G=z*Gn,Y=G+Gn,ee=Gn>180?1:0,le=Math.PI*G/180,te=Math.PI*Y/180,q=50+50*Math.cos(le),D=50-50*Math.sin(le),re=50+50*Math.cos(te),ne=50-50*Math.sin(te),ae=C===z;return n.jsxs("g",{style:{opacity:C==null?.95:ae?1:.78,filter:C!=null&&!ae?"blur(0.6px)":"none"},children:[n.jsx("path",{d:`M50,50 L${q},${D} A50,50 0 ${ee} 0 ${re},${ne} Z`,fill:O.color,stroke:ae?`${O.color}AA`:"rgba(255,255,255,0.14)",strokeWidth:ae?"1.2":"0.6"}),n.jsx("text",{x:"50",y:"50",fill:"#ffffff",fontSize:"4",fontWeight:"700",dominantBaseline:"middle",transform:`rotate(${G+Gn/2} 50 50) translate(12 0)`,children:n.jsxs("tspan",{children:[O.label,O.soon?" (soon)":""]})})]},O.slug)}),n.jsx("circle",{cx:"50",cy:"50",r:"9",fill:"rgba(0,0,0,0.55)",stroke:"white",strokeOpacity:"0.25"})]})}),n.jsx("button",{onClick:K,disabled:g||L,className:["absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2","h-16 w-16 rounded-full grid place-items-center","bg-white text-black font-extrabold shadow-soft transition active:scale-[0.98]",g||L?"opacity-60 cursor-not-allowed":"hover:bg-gray-200"].join(" "),"aria-label":"Spin the wheel",children:"SPIN"}),n.jsx("div",{className:"absolute left-1/2 -translate-x-1/2 -bottom-3 z-20",children:n.jsx("svg",{width:"22",height:"22",viewBox:"0 0 24 24",children:n.jsx("path",{d:"M12 4 L20 20 L4 20 Z",fill:"#ffffff"})})}),C!=null&&!g&&n.jsx("div",{className:"absolute left-1/2 -translate-x-1/2 -bottom-10",children:n.jsxs("div",{className:"px-3 py-1 rounded-full bg-white/10 border border-white/20 text-sm backdrop-blur",children:[n.jsx("span",{className:"inline-block h-2.5 w-2.5 rounded-full mr-2 align-middle",style:{background:Sn[C].color}}),Sn[C].label]})})]})}),n.jsx("section",{className:"mt-4",children:L?n.jsxs("div",{className:"rounded-2xl border border-white/10 bg-white/5 p-4",children:[n.jsx("div",{className:"text-xl font-semibold mb-2",children:"Match Over"}),n.jsxs("p",{className:"text-sm text-base-muted mb-3",children:["Top score takes the pot of ",n.jsx("b",{className:"text-yellow-300",children:u})," coins."]}),n.jsx("button",{className:"btn-primary w-full",onClick:Z,children:"End match"})]}):C!=null&&Sn[C].soon?n.jsxs("div",{className:"rounded-2xl border border-white/10 bg-white/5 p-4",children:[n.jsx("div",{className:"text-lg font-semibold mb-1",children:Sn[C].label}),n.jsx("p",{className:"text-sm text-base-muted mb-3",children:"This category is arriving soon. Spin again!"}),n.jsx("button",{className:"btn-primary",onClick:K,disabled:g,children:"Re-spin"})]}):n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:"text-sm text-center text-base-muted mb-1",children:["Turn: ",n.jsx("span",{style:{color:s[i].color},children:s[i].name})," ","| Round ",l,"/",Nn]}),n.jsx(cv,{q:R,locked:g||!R,onPick:J,result:Q}),Q&&n.jsx("div",{className:"mt-3 flex justify-center",children:n.jsx("button",{className:"btn-primary",onClick:$,children:"Next turn"})})]})})]}),n.jsx("div",{className:"pointer-events-none fixed inset-x-0 bottom-0 bg-[#0B0F1A]",style:{height:"calc(5.25rem + env(safe-area-inset-bottom))"},"aria-hidden":!0})]})}const uv=({onSelect:e})=>{const t=[{id:"random",emoji:"🎲",title:"Random Mix",color:"from-purple-500 to-pink-500"},{id:"trending",emoji:"📈",title:"Trending Now",color:"from-blue-500 to-cyan-500"},{id:"level",emoji:"📊",title:"Your Level",color:"from-green-500 to-teal-500"},{id:"daily",emoji:"🎯",title:"Daily Challenge",color:"from-orange-500 to-red-500"}];return n.jsxs("div",{className:"fixed inset-0 bg-gray-900 overflow-hidden flex flex-col justify-center items-center px-4",children:[n.jsx("h1",{className:"text-2xl font-bold text-white mb-20",children:"Choose a swipe mode"}),n.jsx("div",{className:"grid grid-cols-2 gap-4 w-full max-w-md h-[55vh]",children:t.map(r=>n.jsxs("button",{onClick:()=>e(r.id,r.title),className:`rounded-3xl bg-gradient-to-br ${r.color} p-6 flex flex-col items-center justify-center gap-3 transform hover:scale-105 transition-all shadow-xl`,children:[n.jsx("span",{className:"text-5xl",children:r.emoji}),n.jsx("span",{className:"text-white font-bold text-lg text-center",children:r.title})]},r.id))})]})},fv=()=>{_e(),bn();const[e,t]=d.useState([]),[r,s]=d.useState(0),[a,i]=d.useState({}),[o,l]=d.useState(0),[c,u]=d.useState(5),[f,p]=d.useState(0),[m,j]=d.useState(!0),[x,w]=d.useState(null),[S,y]=d.useState(!0),[v,g]=d.useState(null),[N,C]=d.useState(""),[P,E]=d.useState(!1),[h,b]=d.useState(""),[k,T]=d.useState(!1),[R,B]=d.useState(!1),[Q,H]=d.useState(!1),[W,F]=d.useState(!1),[I,_]=d.useState(!1),[L,A]=d.useState(!1),[M,U]=d.useState(0),[K,J]=d.useState(0),[$,Z]=d.useState(-1),[O,z]=d.useState(-1),[G,Y]=d.useState({}),[ee,le]=d.useState({}),te=d.useRef(null),q=d.useRef(null),[D]=$t("/sounds/correct.mp3",{volume:.6}),[re]=$t("/sounds/wrong.mp3",{volume:.6}),[ne]=$t("/sounds/coin.mp3",{volume:.75}),ae=["🐼","🐱","🐶","🦊","🐰","🐨","🐯","🦁","🐸","🐵"],de=()=>{t([]),s(0),i({}),l(0),u(5),p(0),j(!0),w(null),E(!1),b(""),T(!1),B(!1),H(!1),F(!1),_(!1),A(!1),U(0),J(0),Z(-1),z(-1),Y({}),le({}),g(null),C(""),Te(null)};d.useEffect(()=>(de(),y(!0),()=>{document.body.classList.remove("hide-bottom-nav"),de(),q.current&&clearTimeout(q.current)}),[]),d.useEffect(()=>{const X=oe=>{!S&&e.length>0&&(oe.preventDefault(),B(!0))};return!S&&e.length>0&&window.history.pushState({inQuiz:!0},"",window.location.pathname),window.addEventListener("popstate",X),()=>window.removeEventListener("popstate",X)},[S,e.length]),d.useEffect(()=>{!S&&e.length>0?document.body.classList.add("hide-bottom-nav"):document.body.classList.remove("hide-bottom-nav")},[S,e.length]),d.useEffect(()=>{!S&&e.length>0&&F(!0)},[S,e.length]);const[Ee,Te]=d.useState(null);d.useEffect(()=>{const X=oe=>{var xe;if(W&&!Q){const Ce=oe.target.closest('button[type="button"]'),He=(xe=Ce==null?void 0:Ce.querySelector(".text-\\[10px\\]"))==null?void 0:xe.textContent;He&&["Home","Play","Profile","Swipe"].includes(He)&&(oe.preventDefault(),oe.stopPropagation(),Te({Home:"/",Play:"/play",Profile:"/profile",Swipe:"/swipe"}[He]),B(!0))}};return document.addEventListener("click",X,!0),()=>document.removeEventListener("click",X,!0)},[W,Q]),d.useEffect(()=>{const X=te.current;if(!X)return;let oe=!1,xe=0,Ce=null;const He=se=>{!S&&e.length>0&&se.preventDefault()},ve=se=>{xe=se.touches[0].clientY,oe=!1},gt=se=>{!S&&e.length>0&&!R&&!k&&se.preventDefault()},Pe=se=>{if(oe||R||k)return;const pe=se.changedTouches[0].clientY,De=xe-pe;if(Math.abs(De)>30){if(oe=!0,Ce&&clearTimeout(Ce),De>0&&r<e.length-1){const ke=r+1;s(ke),X.scrollTo({top:ke*window.innerHeight,behavior:"smooth"})}else if(De<0&&r>0){const ke=r-1;s(ke),X.scrollTo({top:ke*window.innerHeight,behavior:"smooth"})}Ce=setTimeout(()=>{oe=!1},800)}};return X.addEventListener("touchstart",ve,{passive:!1}),X.addEventListener("touchmove",gt,{passive:!1}),X.addEventListener("touchend",Pe,{passive:!1}),X.addEventListener("wheel",He,{passive:!1}),()=>{X.removeEventListener("touchstart",ve),X.removeEventListener("touchmove",gt),X.removeEventListener("touchend",Pe),X.removeEventListener("wheel",He),Ce&&clearTimeout(Ce)}},[r,e.length,S]),d.useEffect(()=>{const X=te.current;X&&(R||k?(X.style.overflow="hidden",X.style.touchAction="none"):(X.style.overflow="auto",X.style.touchAction="auto"))},[R,k]),d.useEffect(()=>{(R||k)&&q.current&&(clearTimeout(q.current),q.current=null)},[R,k]);const ge=async X=>{try{const xe=await(await fetch("/data/quiz_questions_bank.csv")).text(),{data:Ce}=ur.parse(xe,{header:!0,skipEmptyLines:!0}),gt=Ce.map((Pe,se)=>{var ke,we;const pe=[Pe.option1,Pe.option2,Pe.option3,Pe.option4].filter(Boolean),De={A:0,B:1,C:2,D:3};return{id:Pe.id||`q_${se}`,prompt:Pe.question,options:pe,answerIndex:De[(ke=Pe.answer)==null?void 0:ke.toUpperCase()]||0,category:Pe.category||"General Knowledge",difficulty:((we=Pe.difficulty)==null?void 0:we.toLowerCase())||"medium",explanation:Pe.explanation||"",stats:{views:Math.floor(Math.random()*1e4)+1e3,attempted:Math.floor(Math.random()*5e3)+500,correctRate:Math.floor(Math.random()*40)+30}}}).filter(Pe=>Pe.prompt&&Pe.options.length===4).sort(()=>Math.random()-.5).slice(0,50).map(Pe=>({...Pe,mascot:ae[Math.floor(Math.random()*ae.length)]}));t(gt),j(!1)}catch(oe){console.error("Failed to load questions:",oe),j(!1)}},fe=X=>X===1||X===3||X===7||X===10||X===15||X===20||X>20&&X%5===0,be=(X,oe)=>{if(a[X]!==void 0)return;const xe=e.find(ve=>ve.id===X),Ce=oe===xe.answerIndex,He=e.findIndex(ve=>ve.id===X);if(i(ve=>({...ve,[X]:oe})),U(ve=>ve+1),J(ve=>ve+1),Ce){if(D(),l(ve=>ve+1),p(ve=>ve+10),A(!0),setTimeout(()=>{ne()},300),setTimeout(()=>A(!1),2e3),me(),fe(He+1)){const ve=["Awesome!","Perfect!","Brilliant!","Outstanding!","Incredible!"];b(ve[Math.floor(Math.random()*ve.length)]),E(!0),setTimeout(()=>E(!1),2e3)}}else if(re(),l(0),_(!0),setTimeout(()=>_(!1),1500),u(ve=>{const gt=Math.max(0,ve-1);return gt===0&&setTimeout(()=>T(!0),500),gt}),c>1&&fe(He+1)){const ve=["Keep trying!","You got this!","Don't give up!","Stay strong!","Keep going!"];b(ve[Math.floor(Math.random()*ve.length)]),E(!0),setTimeout(()=>E(!1),2e3)}(c>1||Ce)&&(q.current=setTimeout(()=>{Ne()},2500))},me=()=>{const X=document.createElement("div");X.style.position="fixed",X.style.inset="0",X.style.pointerEvents="none",X.style.zIndex="1000",document.body.appendChild(X);const oe=["🎉","✨","⭐","🎊","🌟"];for(let xe=0;xe<20;xe++){const Ce=document.createElement("div");Ce.textContent=oe[Math.floor(Math.random()*oe.length)],Ce.style.position="fixed",Ce.style.left=`${Math.random()*100}%`,Ce.style.top="-50px",Ce.style.fontSize="24px",Ce.style.animation=`fall ${2+Math.random()*2}s ease-out`,X.appendChild(Ce)}setTimeout(()=>X.remove(),4e3)},Ne=()=>{if(!(R||k)&&r<e.length-1){const X=r+1,oe=document.getElementById(`question-${X}`);oe==null||oe.scrollIntoView({behavior:"smooth"}),s(X)}},Be=X=>{const oe=e.findIndex(ve=>ve.id===X);if($>=0&&M<5){w(`After ${5-M} attempts`),setTimeout(()=>w(null),2e3);return}const xe=e[oe],He=[0,1,2,3].filter(ve=>ve!==xe.answerIndex).sort(()=>Math.random()-.5).slice(0,2);Y({...G,[X]:He}),Z(oe),U(0)},dt=X=>{const oe=e.findIndex(se=>se.id===X);if(O>=0&&K<5){w(`After ${5-K} attempts`),setTimeout(()=>w(null),2e3);return}const Ce=e[oe].answerIndex,He=[0,0,0,0],ve=40+Math.floor(Math.random()*31);He[Ce]=ve;let gt=100-ve;const Pe=[0,1,2,3].filter(se=>se!==Ce);for(let se=0;se<Pe.length-1;se++){const pe=Math.floor(Math.random()*(gt/2));He[Pe[se]]=pe,gt-=pe}He[Pe[Pe.length-1]]=gt,le({...ee,[X]:He}),z(oe),J(0)},Le=(X,oe)=>{de(),g(X),C(oe),y(!1),ge()},Ge=()=>{Te("/swipe"),B(!0)},Ze=()=>{H(!0),B(!1),document.body.classList.remove("hide-bottom-nav")},zt=()=>{const X=Object.keys(a).filter(oe=>{const xe=e.find(Ce=>Ce.id===oe);return a[oe]===(xe==null?void 0:xe.answerIndex)}).length;return d.useEffect(()=>{document.body.classList.add("hide-bottom-nav");const oe=setTimeout(()=>{f>0&&ce.addCoins(f,"Swipe Quiz Session"),de(),F(!1),H(!1),y(!0),document.body.classList.remove("hide-bottom-nav")},2e3);return()=>{clearTimeout(oe),document.body.classList.remove("hide-bottom-nav")}},[]),n.jsx("div",{className:"fixed inset-0 bg-gray-900 z-50 flex items-center justify-center p-4",children:n.jsxs("div",{className:"bg-gray-800 rounded-3xl p-8 max-w-md w-full text-center border border-gray-700",children:[n.jsx("div",{className:"text-5xl mb-4",children:"🎉"}),n.jsx("h2",{className:"text-2xl font-bold text-white mb-4",children:"Session Complete!"}),n.jsxs("div",{className:"space-y-4",children:[n.jsxs("div",{className:"bg-gray-700/50 rounded-xl p-4",children:[n.jsx("div",{className:"text-gray-400 text-sm mb-1",children:"Questions Answered"}),n.jsx("div",{className:"text-2xl font-bold text-white",children:Object.keys(a).length})]}),n.jsxs("div",{className:"bg-gray-700/50 rounded-xl p-4",children:[n.jsx("div",{className:"text-gray-400 text-sm mb-1",children:"Correct Answers"}),n.jsx("div",{className:"text-2xl font-bold text-green-400",children:X})]}),n.jsxs("div",{className:"bg-gray-700/50 rounded-xl p-4",children:[n.jsx("div",{className:"text-gray-400 text-sm mb-1",children:"Coins Earned"}),n.jsxs("div",{className:"text-2xl font-bold text-yellow-400",children:["🪙 ",f]})]}),n.jsxs("div",{className:"bg-gray-700/50 rounded-xl p-4",children:[n.jsx("div",{className:"text-gray-400 text-sm mb-1",children:"Lives Remaining"}),n.jsx("div",{className:"text-2xl font-bold text-red-400",children:Array.from({length:5},(oe,xe)=>n.jsx("span",{className:xe<c?"":"opacity-30",children:"❤️"},xe))})]})]})]})})};return Q?n.jsx(zt,{}):S?n.jsx(uv,{onSelect:Le}):m?n.jsx("div",{className:"h-screen bg-gray-900 flex items-center justify-center",children:n.jsx("div",{className:"text-white",children:"Loading questions..."})}):n.jsxs("div",{className:"h-screen bg-gray-900 relative",children:[n.jsxs("div",{className:"fixed top-0 left-0 right-0 bg-gray-900/95 backdrop-blur z-50 border-b border-gray-800 pt-12",children:[n.jsxs("div",{className:"flex items-center justify-between px-4 py-3",children:[n.jsx("button",{onClick:Ge,className:"inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/15 rounded-xl text-white text-sm font-medium hover:bg-white/15 transition-all",children:"← Back"}),n.jsxs("div",{className:"flex items-center gap-4",children:[n.jsxs("div",{className:"flex items-center gap-1 bg-yellow-500/20 px-3 py-1 rounded-full",children:[n.jsx("span",{children:"🪙"}),n.jsx("span",{className:"font-bold text-yellow-400",children:f})]}),n.jsxs("div",{className:"flex items-center gap-1 bg-orange-500/20 px-3 py-1 rounded-full",children:[n.jsx("span",{children:"🔥"}),n.jsx("span",{className:"font-bold text-orange-400",children:o})]})]}),n.jsx("div",{className:"flex items-center gap-1",children:Array.from({length:5},(X,oe)=>n.jsx("span",{className:`${oe<c?"text-red-500":"text-gray-600 opacity-30"} ${I&&oe===c-1?"animate-heartLoss":""}`,children:"❤️"},oe))})]}),N&&n.jsx("div",{className:"text-center py-1",children:n.jsx("span",{className:"text-xs text-gray-400",children:N})})]}),L&&n.jsx("div",{className:"fixed top-24 left-1/2 transform -translate-x-1/2 z-50 pointer-events-none",children:n.jsx("div",{className:"bg-yellow-500 text-white px-4 py-2 rounded-full font-bold animate-coinFloat",children:"+10 🪙"})}),n.jsx("div",{ref:te,className:"h-full overflow-y-hidden snap-y snap-mandatory pt-32",style:{scrollBehavior:"smooth",overscrollBehavior:"none",WebkitOverflowScrolling:"touch",touchAction:"none"},children:e.map((X,oe)=>n.jsx(mv,{question:X,index:oe,answered:a[X.id],onAnswer:xe=>be(X.id,xe),onFiftyFifty:()=>Be(X.id),onAudience:()=>dt(X.id),eliminated:G[X.id]||[],audiencePercentages:ee[X.id],canUseFiftyFifty:$<0||M>=5,canUseAudience:O<0||K>=5},X.id))}),k&&n.jsx("div",{className:"fixed inset-0 bg-black/75 flex items-center justify-center z-50 p-4",children:n.jsxs("div",{className:"bg-gray-800 rounded-3xl p-6 max-w-sm w-full text-center border border-gray-700",children:[n.jsx("div",{className:"text-5xl mb-4",children:"😔"}),n.jsx("h3",{className:"text-xl font-bold mb-2 text-white",children:"No Lives Left!"}),n.jsx("p",{className:"text-gray-400 mb-6",children:"Sorry, you have no lives left to continue swiping."}),n.jsx("button",{onClick:()=>{H(!0),document.body.classList.remove("hide-bottom-nav")},className:"w-full bg-gradient-to-r from-blue-600 to-purple-600 py-3 rounded-xl text-white font-medium",children:"View Results"})]})}),R&&n.jsx("div",{className:"fixed inset-0 bg-black/75 flex items-center justify-center z-50 p-4",children:n.jsxs("div",{className:"bg-gray-800 rounded-3xl p-6 max-w-sm w-full text-center border border-gray-700",children:[n.jsx("div",{className:"text-4xl mb-4",children:"🤔"}),n.jsx("h3",{className:"text-xl font-bold mb-2 text-white",children:"Leave Swipe Mode?"}),n.jsx("p",{className:"text-gray-400 mb-6",children:"Your progress will be saved"}),n.jsxs("div",{className:"flex gap-3",children:[n.jsx("button",{onClick:()=>B(!1),className:"flex-1 bg-blue-600 hover:bg-blue-700 py-3 rounded-xl font-medium text-white",children:"Stay"}),n.jsx("button",{onClick:Ze,className:"flex-1 bg-gray-700 hover:bg-gray-600 py-3 rounded-xl font-medium text-white",children:"Leave"})]})]})}),P&&n.jsx("div",{className:"fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50",children:n.jsx("div",{className:"bg-gradient-to-br from-purple-600 to-pink-600 px-8 py-6 rounded-3xl text-white font-bold text-2xl shadow-2xl animate-fadeIn",children:h})}),x&&n.jsx("div",{className:"fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 pointer-events-none",children:n.jsx("div",{className:"bg-gray-800/90 px-6 py-3 rounded-full text-white font-bold animate-fadeIn",children:x})}),n.jsx("style",{jsx:!0,children:`
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
          0% { transform: translateX(-50%) translateY(0) scale(0.5); opacity: 0; }
          50% { transform: translateX(-50%) translateY(-20px) scale(1.2); opacity: 1; }
          100% { transform: translateX(-50%) translateY(-40px) scale(0.8); opacity: 0; }
        }
        
        .animate-heartLoss {
          animation: heartLoss 1.5s ease-out;
        }
        
        .animate-coinFloat {
          animation: coinFloat 2s ease-out;
        }
      `})]})},mv=({question:e,index:t,answered:r,onAnswer:s,onFiftyFifty:a,onAudience:i,eliminated:o,audiencePercentages:l,canUseFiftyFifty:c,canUseAudience:u})=>{const f=p=>{switch(p){case"easy":return"from-green-500 to-green-600";case"hard":return"from-red-500 to-red-600";default:return"from-yellow-500 to-yellow-600"}};return n.jsxs("div",{id:`question-${t}`,className:"h-screen snap-start flex flex-col px-4 pb-4",style:{paddingTop:"150px"},children:[n.jsx("div",{className:"flex justify-center py-2",children:n.jsx("span",{className:"text-8xl",style:{animation:"float 3s ease-in-out infinite"},children:e.mascot})}),n.jsxs("div",{className:"flex-1 flex flex-col justify-start max-w-md mx-auto w-full",children:[n.jsxs("div",{className:`bg-gradient-to-br ${f(e.difficulty)} p-6 rounded-3xl mb-4`,children:[n.jsxs("div",{className:"text-white/80 text-sm mb-2",children:["Question ",t+1]}),n.jsx("h2",{className:"text-2xl font-bold text-white",children:e.prompt})]}),n.jsx("div",{className:"space-y-3 mb-3",children:e.options.map((p,m)=>{const j=r!==void 0,x=r===m,w=m===e.answerIndex,S=o.includes(m);let y="w-full p-4 rounded-2xl font-medium transition-all ";return S?y+="bg-gray-700/30 text-gray-500/50 cursor-not-allowed":j?w?y+="bg-green-500 text-white":x?y+="bg-red-500 text-white":y+="bg-gray-700 text-gray-400":y+="bg-gray-800 text-white hover:bg-gray-700",n.jsx("button",{onClick:()=>!j&&!S&&s(m),disabled:j||S,className:y,children:n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsx("span",{className:"text-lg",children:["🅰️","🅱️","🅲️","🅳️"][m]}),n.jsx("span",{className:"flex-1 text-left",children:p}),l&&l[m]>0&&n.jsxs("span",{className:"bg-purple-600/20 px-2 py-1 rounded-full text-xs",children:[l[m],"%"]}),j&&w&&n.jsx("span",{children:"✓"})]})},m)})}),!r&&n.jsxs("div",{className:"flex justify-center gap-3 mb-3",children:[n.jsx("button",{onClick:a,disabled:!c,className:`px-4 py-2 rounded-lg font-medium text-sm ${c?"bg-orange-600 text-white":"bg-gray-700 text-gray-500"}`,children:"⚡ 50:50"}),n.jsx("button",{onClick:i,disabled:!u,className:`px-4 py-2 rounded-lg font-medium text-sm ${u?"bg-purple-600 text-white":"bg-gray-700 text-gray-500"}`,children:"👥 Audience"})]}),n.jsx("div",{className:"text-center mt-3 mb-2",children:n.jsxs("div",{className:"text-gray-500 text-xs",children:[e.stats.views.toLocaleString()," views • ",e.stats.attempted.toLocaleString()," attempted • ",e.stats.correctRate,"% correct"]})}),n.jsx("div",{className:"text-center mt-12 mb-4",children:n.jsx("div",{className:"text-gray-500 text-sm animate-bounce",children:"Swipe up for next"})})]})]})};function hv(){const[e]=km(),t=_e();return Je(),d.useEffect(()=>{const r=e.get("category"),s=e.get("difficulty"),a=e.get("from")==="quest",i=["general-knowledge","fun-facts","science","history","geography","computer","artificial-intelligence","sports","mixed"],o=["easy","medium","hard"],l=r==="random"?i[Math.floor(Math.random()*i.length)]:r||"mixed",c=s==="random"?o[Math.floor(Math.random()*o.length)]:s||"medium";console.log("QuizPlay - fromQuest:",a),console.log("QuizPlay - returnPath will be:",a?"/quests":"/"),t(`/quiz/${l}`,{replace:!0,state:{mode:"quiz",difficulty:c,count:5,timer:{type:"per_q",seconds:45},fromQuest:a,returnPath:a?"/profile/quests":"/"}})},[e,t]),n.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh",background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",color:"white",fontSize:"20px"},children:"Starting your quiz..."})}function pv(){const[e]=km(),t=_e();return d.useEffect(()=>{const r=e.get("questions")||"15",s=e.get("difficulty")||"easy",a=e.get("category")||"mixed",i=e.get("from")==="quest",o=["general-knowledge","fun-facts","science","history","geography","computer","artificial-intelligence","sports"],l=a==="random"?o[Math.floor(Math.random()*o.length)]:a;console.log("PracticeStart - Launching practice mode:",{category:l,difficulty:s,questions:r,fromQuest:i}),t(`/quiz/${l}`,{replace:!0,state:{mode:"practice",difficulty:s,count:parseInt(r),timer:{type:"off",seconds:0},fromQuest:i,questType:i?"practiceQuestions":null,returnPath:i?"/profile/quests":"/"}})},[e,t]),n.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh",background:"linear-gradient(135deg, #10B981 0%, #059669 100%)",color:"white",fontSize:"20px"},children:"Loading practice questions..."})}function xv(){var j;const e=_e(),[t,r]=d.useState(""),[s,a]=d.useState(null),{player:i,levelProgress:o}=bn(),c=(()=>{const x=JSON.parse(localStorage.getItem("currentUser")||"{}");return((x.phone?JSON.parse(localStorage.getItem(`user_profile_${x.phone}`)||"{}"):{}).name||x.username||(i==null?void 0:i.name)||"Player").split(" ")[0]})(),u=()=>{if((s==null?void 0:s.todayCoins)!==void 0)return s.todayCoins;try{const x=JSON.parse(localStorage.getItem("qp_stats")||'{"sessions":[]}'),w=new Date().setHours(0,0,0,0);return x.sessions.filter(y=>new Date(y.timestamp).setHours(0,0,0,0)===w).reduce((y,v)=>y+(v.earnedCoins||0),0)}catch{return 0}},f={name:c,rank:(s==null?void 0:s.rank)||23,streak:(s==null?void 0:s.streak)||(i==null?void 0:i.currentStreak)||0,todayQuizzes:((j=s==null?void 0:s.daily)==null?void 0:j.quizzesPlayed)||3,todayCoins:u()};d.useEffect(()=>{const x=new Date().getHours();x<12?r("Good morning"):x<17?r("Good afternoon"):r("Good evening")},[]),d.useEffect(()=>{const x=()=>{const w=Ve.getCurrentUser();if(w!=null&&w.phone){ce.initializeUserData(w.phone);const S=ce.getTodaySummary(w.phone);a(S)}};return x(),window.addEventListener("focus",x),()=>window.removeEventListener("focus",x)},[]);const p=`
    rounded-3xl p-5 text-left text-white 
    transition-all duration-300 ease-out
    active:scale-[0.97] hover:scale-[1.02]
    shadow-[0_8px_32px_rgba(0,0,0,0.3)]
    hover:shadow-[0_12px_48px_rgba(0,0,0,0.4)]
    relative overflow-hidden
    before:absolute before:inset-0 before:bg-white/5 before:opacity-0 
    hover:before:opacity-100 before:transition-opacity before:duration-300
  `,m=s!=null&&s.xpProgress?s.xpProgress/(s.xpNeeded||100)*100:o.required>0?o.current/o.required*100:0;return n.jsxs("div",{className:"min-h-full bg-[#0B0C10] text-white pt-10 px-3",children:[n.jsxs("div",{className:"mb-6",children:[n.jsxs("div",{className:"flex items-center justify-between mb-4",children:[n.jsx("div",{children:n.jsxs("h1",{className:"text-2xl font-bold px-3",children:[t,", ",c," 👋"]})}),n.jsx("button",{onClick:()=>e("/profile/settings"),className:"w-10 h-10 rounded-2xl bg-white/10 border border-white/20 grid place-items-center hover:bg-white/20 transition",children:n.jsx("span",{className:"text-xl",children:"⚙️"})})]}),n.jsxs("div",{className:"rounded-3xl bg-gradient-to-r from-slate-800/50 to-slate-900/50 border border-white/10 p-4 backdrop-blur-sm",children:[n.jsxs("div",{className:"flex items-center gap-4 mb-3",children:[n.jsx("div",{className:"w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 grid place-items-center text-2xl font-bold",children:c[0].toUpperCase()}),n.jsxs("div",{className:"flex-1",children:[n.jsx("div",{className:"text-lg font-semibold",children:c}),n.jsxs("div",{className:"text-white/60 text-sm",children:["Level ",(s==null?void 0:s.level)||i.level||1]})]}),n.jsxs("div",{className:"text-right",children:[n.jsxs("div",{className:"text-yellow-400 font-bold text-lg",children:[(s==null?void 0:s.totalCoins)||i.coins||0," 🪙"]}),n.jsxs("div",{className:"text-white/60 text-sm",children:["Rank #",f.rank]})]})]}),n.jsxs("div",{className:"mb-3",children:[n.jsxs("div",{className:"flex justify-between text-xs text-white/60 mb-1",children:[n.jsx("span",{children:"XP Progress"}),n.jsxs("span",{children:[(s==null?void 0:s.xpProgress)||o.current,"/",(s==null?void 0:s.xpNeeded)||o.required]})]}),n.jsx("div",{className:"h-2 bg-white/10 rounded-full overflow-hidden",children:n.jsx("div",{className:"h-full bg-gradient-to-r from-blue-400 to-purple-500 rounded-full transition-all duration-1000 ease-out",style:{width:`${m}%`}})})]}),n.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[n.jsxs("div",{className:"text-center p-2 rounded-xl bg-white/5",children:[n.jsxs("div",{className:"text-orange-400 font-bold text-lg",children:["🔥 ",f.streak]}),n.jsx("div",{className:"text-white/60 text-xs",children:"Day Streak"})]}),n.jsxs("div",{className:"text-center p-2 rounded-xl bg-white/5",children:[n.jsxs("div",{className:"text-green-400 font-bold text-lg",children:["+",f.todayCoins]}),n.jsx("div",{className:"text-white/60 text-xs",children:"Today"})]})]})]})]}),n.jsxs("button",{onClick:()=>e("/profile/leaderboard"),className:`${p} w-full mb-4 bg-gradient-to-br from-[#5AA9FF] via-[#6C63FF] to-[#9C6BFF]`,children:[n.jsx("div",{className:"absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-8 translate-x-8 animate-pulse"}),n.jsxs("div",{className:"relative flex items-start justify-between",children:[n.jsxs("div",{children:[n.jsx("div",{className:"text-xs opacity-90 mb-1",children:"🏆 Rank & Coins"}),n.jsx("div",{className:"text-3xl font-extrabold tracking-tight mb-2",children:"LEADERBOARD"}),n.jsxs("div",{className:"text-xs opacity-75 flex items-center gap-2",children:[n.jsx("span",{className:"w-2 h-2 bg-green-400 rounded-full animate-pulse"}),"Weekly reset · Ends in 2d 14h"]})]}),n.jsx("div",{className:"w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm grid place-items-center text-2xl border border-white/30",children:"🏆"})]})]}),n.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[n.jsxs("button",{onClick:()=>e("/profile/history"),className:`${p} bg-gradient-to-br from-[#D19A00] to-[#C94B4B] relative`,children:[n.jsx("div",{className:"absolute top-2 right-2 w-3 h-3 bg-white/20 rounded-full"}),n.jsx("div",{className:"text-3xl mb-3",children:"📊"}),n.jsx("div",{className:"text-sm font-bold mb-1",children:"HISTORY"}),n.jsx("div",{className:"text-[11px] opacity-80",children:"Quizzes & Practice"}),n.jsxs("div",{className:"text-[10px] opacity-60 mt-1",children:["+",f.todayQuizzes," today"]})]}),n.jsxs("button",{onClick:()=>e("/profile/rewards"),className:`${p} bg-gradient-to-br from-[#2EB872] to-[#1EA07A] relative`,children:[n.jsx("div",{className:"absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full animate-bounce"}),n.jsx("div",{className:"text-3xl mb-3",children:"🎁"}),n.jsx("div",{className:"text-sm font-bold mb-1",children:"REWARDS"}),n.jsx("div",{className:"text-[11px] opacity-80",children:"Claim & Redeem"}),n.jsx("div",{className:"text-[10px] opacity-60 mt-1",children:"2 available"})]}),n.jsxs("button",{onClick:()=>e("/profile/badges"),className:`${p} bg-gradient-to-br from-[#E65C00] to-[#F9D423] relative`,children:[n.jsx("div",{className:"absolute -top-1 -right-1 w-6 h-6 bg-purple-600 rounded-full grid place-items-center text-[10px] font-bold animate-pulse",children:"NEW"}),n.jsx("div",{className:"text-3xl mb-3",children:"🏅"}),n.jsx("div",{className:"text-sm font-bold mb-1",children:"BADGES"}),n.jsx("div",{className:"text-[11px] opacity-80",children:"Collectables"}),n.jsx("div",{className:"text-[10px] opacity-60 mt-1",children:"4/15 unlocked"})]}),n.jsxs("button",{onClick:()=>e("/profile/achievements"),className:`${p} bg-gradient-to-br from-[#5D26C1] to-[#A17FE0] relative`,children:[n.jsx("div",{className:"text-3xl mb-3",children:"🎯"}),n.jsx("div",{className:"text-sm font-bold mb-1",children:"ACHIEVEMENTS"}),n.jsx("div",{className:"text-[11px] opacity-80",children:"Milestones"}),n.jsx("div",{className:"text-[10px] opacity-60 mt-1",children:"67% complete"})]})]}),n.jsxs("div",{className:"mt-4 space-y-3",children:[n.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[n.jsx("button",{onClick:()=>e("/profile/streaks"),className:`${p} bg-gradient-to-r from-orange-600/80 to-red-600/80 backdrop-blur-sm border border-orange-500/30`,children:n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsx("div",{className:"text-2xl",children:"🔥"}),n.jsxs("div",{children:[n.jsx("div",{className:"text-sm font-bold",children:"STREAK"}),n.jsxs("div",{className:"text-[11px] opacity-80",children:[f.streak," days strong"]})]})]})}),n.jsx("button",{onClick:()=>e("/profile/quests"),className:`${p} bg-gradient-to-r from-blue-600/80 to-cyan-600/80 backdrop-blur-sm border border-blue-500/30`,children:n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsx("div",{className:"text-2xl",children:"⚡"}),n.jsxs("div",{children:[n.jsx("div",{className:"text-sm font-bold",children:"QUESTS"}),n.jsxs("div",{className:"text-[11px] opacity-80",children:[(s==null?void 0:s.activeQuests)||2," active goals"]})]})]})})]}),n.jsx("button",{onClick:()=>e("/profile/settings"),className:`${p} w-full bg-gradient-to-r from-slate-700/50 to-slate-800/50 backdrop-blur-sm border border-white/10`,children:n.jsxs("div",{className:"flex items-center justify-between",children:[n.jsxs("div",{className:"flex items-center gap-4",children:[n.jsx("div",{className:"w-12 h-12 rounded-2xl bg-white/10 grid place-items-center text-xl",children:"⚙️"}),n.jsxs("div",{children:[n.jsx("div",{className:"text-sm font-bold",children:"SETTINGS"}),n.jsx("div",{className:"text-[11px] opacity-70",children:"Customize your experience"})]})]}),n.jsx("div",{className:"text-white/40",children:"→"})]})})]}),n.jsx("div",{className:"h-6"})]})}const is="🪙",fa={global:[{rank:1,name:"Bryan Wolf",handle:"@bryan",score:43,avatar:"/profile/rank1.png",trend:"+5",streak:12,country:"🇺🇸"},{rank:2,name:"Meghan Jess…",handle:"@meghan",score:40,avatar:"/profile/rank2.png",trend:"+2",streak:8,country:"🇨🇦"},{rank:3,name:"Alex Turner",handle:"@alex",score:38,avatar:"/profile/rank3.png",trend:"±0",streak:15,country:"🇬🇧"},{rank:4,name:"Marsha Fisher",handle:"@marsha",score:36,trend:"-1",streak:5,country:"🇦🇺"},{rank:5,name:"Juanita Cormier",handle:"@juanita",score:35,trend:"+1",streak:3,country:"🇲🇽"},{rank:6,name:"You",handle:"@you",score:34,you:!0,avatar:"/profile/avatar.png",trend:"+3",streak:7,country:"🇮🇳"},{rank:7,name:"Tamara Schmidt",handle:"@tamara",score:33,trend:"-2",streak:2,country:"🇩🇪"},{rank:8,name:"Ricardo Veum",handle:"@ricardo",score:32,trend:"+1",streak:4,country:"🇧🇷"}],friends:[{rank:1,name:"You",handle:"@you",score:34,you:!0,avatar:"/profile/avatar.png",trend:"+2",streak:7,country:"🇮🇳"},{rank:2,name:"Sarah Chen",handle:"@sarah",score:31,trend:"-1",streak:4,country:"🇸🇬",friend:!0},{rank:3,name:"Mike Johnson",handle:"@mike",score:29,trend:"+3",streak:2,country:"🇺🇸",friend:!0},{rank:4,name:"Priya Sharma",handle:"@priya",score:27,trend:"±0",streak:5,country:"🇮🇳",friend:!0},{rank:5,name:"David Kim",handle:"@david",score:25,trend:"+1",streak:3,country:"🇰🇷",friend:!0},{rank:6,name:"Emma Wilson",handle:"@emma",score:23,trend:"-2",streak:1,country:"🇬🇧",friend:!0}],india:[{rank:1,name:"Rohit Sharma",handle:"@rohit",score:45,trend:"+4",streak:10,country:"🇮🇳"},{rank:2,name:"Priya Patel",handle:"@priya",score:42,trend:"+1",streak:8,country:"🇮🇳"},{rank:3,name:"You",handle:"@you",score:34,you:!0,avatar:"/profile/avatar.png",trend:"+3",streak:7,country:"🇮🇳"},{rank:4,name:"Arjun Singh",handle:"@arjun",score:32,trend:"-1",streak:5,country:"🇮🇳"},{rank:5,name:"Kavya Reddy",handle:"@kavya",score:30,trend:"+2",streak:3,country:"🇮🇳"},{rank:6,name:"Vikram Gupta",handle:"@vikram",score:28,trend:"±0",streak:4,country:"🇮🇳"}]},ma=[{name:"Diamond",min:40,color:"from-cyan-400 to-blue-600",icon:"💎"},{name:"Gold",min:30,color:"from-yellow-400 to-orange-500",icon:"🥇"},{name:"Silver",min:20,color:"from-gray-300 to-gray-500",icon:"🥈"},{name:"Bronze",min:10,color:"from-orange-600 to-red-600",icon:"🥉"}];function gv(){var m,j;const e=_e(),{player:t}=bn(),r={global:fa.global.map(x=>x.you?{...x,name:(t==null?void 0:t.name)||"You",score:(t==null?void 0:t.coins)||0,streak:(t==null?void 0:t.currentStreak)||0}:x),friends:fa.friends.map(x=>x.you?{...x,name:(t==null?void 0:t.name)||"You",score:(t==null?void 0:t.coins)||0,streak:(t==null?void 0:t.currentStreak)||0}:x),india:fa.india.map(x=>x.you?{...x,name:(t==null?void 0:t.name)||"You",score:(t==null?void 0:t.coins)||0,streak:(t==null?void 0:t.currentStreak)||0}:x)};console.log("Debug - Player coins:",t==null?void 0:t.coins),console.log("Debug - Friends data:",r.friends[0]);const[s,a]=d.useState({days:2,hours:14,minutes:17}),[i,o]=d.useState("global"),l=r[i]||r.global;console.log("Player coins:",t==null?void 0:t.coins,"Current user score:",(m=l.find(x=>x.you))==null?void 0:m.score);const c=l.find(x=>x.you),u=l.slice(0,3),f=l.slice(3);d.useEffect(()=>{const x=setInterval(()=>{a(w=>w.minutes>0?{...w,minutes:w.minutes-1}:w.hours>0?{...w,hours:w.hours-1,minutes:59}:w.days>0?{...w,days:w.days-1,hours:23,minutes:59}:w)},6e4);return()=>clearInterval(x)},[]);const p=x=>{const w=Math.max(...l.map(y=>y.score)),S=x/w*100;return S>=90?ma[0]:S>=70?ma[1]:S>=40?ma[2]:ma[3]};return n.jsxs("div",{className:"min-h-screen bg-black text-white pt-12",children:[n.jsxs("div",{className:"flex items-center justify-between mb-5",children:[n.jsx("button",{onClick:()=>e(-1),className:"px-3 py-1.5 rounded-xl border border-white/10 bg-white/5 text-sm hover:bg-white/10 transition",children:"← Back"}),n.jsxs("div",{className:"text-center",children:[n.jsx("div",{className:"text-lg font-bold",children:"🏆 Leaderboard"}),n.jsxs("div",{className:"text-xs text-white/60",children:["Ends in ",s.days,"d ",s.hours,"h ",s.minutes,"m"]})]}),n.jsx("button",{className:"px-3 py-1.5 rounded-xl border border-white/10 bg-white/5 text-sm hover:bg-white/10 transition",children:"📊"})]}),n.jsxs("div",{className:`mb-5 rounded-2xl bg-gradient-to-r ${p(c==null?void 0:c.score).color} p-4 text-center relative overflow-hidden`,children:[n.jsx("div",{className:"absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -translate-y-10 translate-x-10 animate-pulse"}),n.jsx("div",{className:"absolute bottom-0 left-0 w-16 h-16 bg-white/5 rounded-full translate-y-8 -translate-x-8"}),n.jsxs("div",{className:"relative z-10",children:[n.jsx("div",{className:"text-2xl mb-1",children:p(c==null?void 0:c.score).icon}),n.jsxs("div",{className:"text-sm font-bold text-white",children:[p(c==null?void 0:c.score).name," League"]}),n.jsx("div",{className:"text-xs text-white/80",children:i==="friends"?"Competing with friends!":"You're competing with the best!"})]})]}),n.jsx("div",{className:"flex gap-2 mb-5",children:[{key:"global",label:"🌍 Global",count:"10M+"},{key:"friends",label:"👥 Friends",count:fa.friends.length},{key:"india",label:"🇮🇳 India",count:"2.5M"}].map(x=>n.jsxs("button",{onClick:()=>o(x.key),className:`flex-1 px-2 py-2 rounded-xl text-xs font-semibold transition-all duration-300 ${i===x.key?"bg-lime-500 text-black shadow-lg scale-105":"border border-white/10 bg-white/5 hover:bg-white/10"}`,children:[n.jsx("div",{children:x.label}),n.jsx("div",{className:`text-[10px] ${i===x.key?"text-black/70":"text-white/60"}`,children:x.count})]},x.key))}),n.jsx("div",{className:"mb-5 rounded-2xl bg-gradient-to-r from-lime-500/20 to-green-500/20 border border-lime-500/30 p-3",children:n.jsxs("div",{className:"flex items-center justify-between",children:[n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsx("div",{className:"w-10 h-10 rounded-xl bg-lime-500/20 grid place-items-center text-lg",children:"🧑‍💻"}),n.jsxs("div",{children:[n.jsx("div",{className:"font-bold text-lime-400 text-sm",children:"Your Position"}),n.jsxs("div",{className:"text-xs text-white/70 flex items-center gap-2",children:[n.jsxs("span",{children:["Rank #",c==null?void 0:c.rank]}),n.jsx("span",{className:`px-1.5 py-0.5 rounded-full text-[9px] font-bold ${c!=null&&c.trend.startsWith("+")?"bg-green-500/20 text-green-400":c!=null&&c.trend.startsWith("-")?"bg-red-500/20 text-red-400":"bg-gray-500/20 text-gray-400"}`,children:c==null?void 0:c.trend}),n.jsxs("span",{className:"text-white/50 text-[10px]",children:["in ",i==="global"?"Global":i==="friends"?"Friends":"India"]})]})]})]}),n.jsxs("div",{className:"text-right",children:[n.jsxs("div",{className:"text-lg font-bold text-lime-400",children:[c==null?void 0:c.score," ",is]}),n.jsxs("div",{className:"text-xs text-white/60",children:["🔥 ",c==null?void 0:c.streak," streak"]})]})]})}),n.jsxs("div",{className:"mb-6",children:[n.jsx("h3",{className:"text-center text-sm font-semibold text-white/80 mb-4",children:"👑 Hall of Fame"}),n.jsxs("div",{className:"bg-gradient-to-b from-white/5 to-white/10 rounded-2xl p-4 border border-white/10 relative overflow-hidden",children:[n.jsx("div",{className:"absolute top-4 left-6 text-2xl opacity-40 animate-pulse",children:"🏆"}),n.jsx("div",{className:"absolute top-8 right-8 text-lg opacity-40 animate-bounce",style:{animationDelay:"1s"},children:"✨"}),n.jsx("div",{className:"absolute bottom-6 left-12 text-xl opacity-10 animate-pulse",style:{animationDelay:"2s"},children:"🥇"}),n.jsx("div",{className:"absolute bottom-4 right-6 text-lg opacity-40 animate-bounce",style:{animationDelay:"0.5s"},children:"⭐"}),n.jsxs("div",{className:"flex items-end justify-center gap-8 relative z-10",children:[u[1]&&n.jsxs("div",{className:"flex flex-col items-center",children:[n.jsxs("div",{className:"relative mb-2",children:[n.jsx(ha,{src:u[1].avatar,fallback:u[1].name,size:56}),n.jsx("div",{className:"absolute -bottom-1 left-1/2 -translate-x-1/2 w-7 h-7 bg-gradient-to-br from-gray-300 to-gray-500 rounded-full grid place-items-center text-sm font-bold text-black shadow-lg",children:"2"})]}),n.jsx("div",{className:"text-sm font-semibold mb-1 mt-1",children:pa(u[1].name,8)}),n.jsxs("div",{className:"text-xs text-lime-400 font-bold",children:[u[1].score," ",is]})]}),u[0]&&n.jsxs("div",{className:"flex flex-col items-center -mb-3",children:[n.jsxs("div",{className:"relative mb-2",children:[n.jsx(ha,{src:u[0].avatar,fallback:u[0].name,size:72}),n.jsx("div",{className:"absolute -top-3 left-1/2 -translate-x-1/2",children:n.jsx(vv,{})}),n.jsx("div",{className:"absolute -bottom-1 left-1/2 -translate-x-1/2 w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full grid place-items-center text-base font-bold text-black shadow-lg animate-pulse",children:"1"})]}),n.jsx("div",{className:"text-sm font-bold mb-1 mt-1",children:pa(u[0].name,8)}),n.jsxs("div",{className:"text-sm text-lime-400 font-bold mb-1",children:[u[0].score," ",is]}),n.jsx("div",{className:"px-2 py-1 bg-yellow-400/20 rounded-full text-[9px] text-yellow-400 font-bold",children:"CHAMPION"})]}),u[2]&&n.jsxs("div",{className:"flex flex-col items-center",children:[n.jsxs("div",{className:"relative mb-2",children:[n.jsx(ha,{src:u[2].avatar,fallback:u[2].name,size:56}),n.jsx("div",{className:"absolute -bottom-1 left-1/2 -translate-x-1/2 w-7 h-7 bg-gradient-to-br from-orange-600 to-red-600 rounded-full grid place-items-center text-sm font-bold text-white shadow-lg",children:"3"})]}),n.jsx("div",{className:"text-sm font-semibold mb-1 mt-1",children:pa(u[2].name,8)}),n.jsxs("div",{className:"text-xs text-lime-400 font-bold",children:[u[2].score," ",is]})]})]})]})]}),f.length>0&&n.jsxs("div",{className:"rounded-3xl bg-white/5 border border-white/10 p-2 mb-4",children:[n.jsxs("div",{className:"flex justify-between items-center mb-2 px-2",children:[n.jsx("h3",{className:"text-sm font-semibold",children:"Rankings"}),n.jsx("div",{className:"text-xs text-white/60",children:"Live updates"})]}),n.jsx("ul",{className:"space-y-1.5",children:f.map((x,w)=>n.jsxs("li",{className:`flex items-center justify-between px-3 py-2.5 rounded-xl transition-all duration-300 ${x.you?"bg-lime-500/90 text-black shadow-lg shadow-lime-500/20 scale-[1.02]":"bg-white/5 hover:bg-white/10"}`,style:{animationDelay:`${w*100}ms`,animation:"fadeInUp 0.6s ease-out forwards"},children:[n.jsxs("div",{className:"flex items-center gap-2.5",children:[n.jsx(yv,{n:x.rank,you:x.you}),n.jsx(ha,{src:x.avatar,fallback:x.name,size:36}),n.jsxs("div",{className:"flex flex-col leading-tight",children:[n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx("span",{className:"text-sm font-semibold",children:pa(x.name,12)}),n.jsx("span",{className:"text-xs",children:x.country}),x.friend&&n.jsx("span",{className:"text-[9px] bg-blue-500/20 text-blue-400 px-1 py-0.5 rounded-full",children:"Friend"})]}),n.jsxs("div",{className:`text-xs flex items-center gap-1.5 ${x.you?"text-black/70":"text-white/60"}`,children:[n.jsx("span",{children:x.handle}),n.jsxs("span",{children:["🔥",x.streak]})]})]})]}),n.jsxs("div",{className:"flex flex-col items-end",children:[n.jsxs("div",{className:"flex items-center gap-1 text-sm font-bold",children:[n.jsx("span",{children:x.score}),n.jsx("span",{className:x.you?"opacity-90":"opacity-80",children:is})]}),n.jsx("div",{className:`text-xs px-1.5 py-0.5 rounded-full font-bold ${x.trend.startsWith("+")?"bg-green-500/20 text-green-400":x.trend.startsWith("-")?"bg-red-500/20 text-red-400":"bg-gray-500/20 text-gray-400"}`,children:x.trend})]})]},`${i}-${x.rank}`))})]}),c&&c.rank>1&&n.jsxs("div",{className:"mb-4 p-3 rounded-2xl bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 text-center",children:[n.jsx("div",{className:"text-sm font-semibold mb-2",children:"🚀 Climb Higher!"}),n.jsx("div",{className:"text-xs text-white/70 mb-3",children:i==="friends"&&c.rank===1?"🎉 You're #1 among friends!":`You need ${Math.max(0,(((j=l[c.rank-2])==null?void 0:j.score)||0)-c.score+1)} more coins to reach rank #${c.rank-1}`}),!(i==="friends"&&c.rank===1)&&n.jsx("button",{onClick:()=>e("/play"),className:"px-5 py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl text-sm font-bold hover:scale-105 transition-transform",children:"Play Now 🎮"})]}),n.jsx("style",{jsx:!0,children:`
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
      `})]})}function ha({src:e,fallback:t,size:r=56}){const s=bv(t);return n.jsx("div",{className:"grid place-items-center rounded-full bg-white/10 overflow-hidden border-2 border-white/20",style:{width:r,height:r},children:e?n.jsx("img",{src:e,alt:"",className:"w-full h-full object-cover"}):n.jsx("span",{className:"text-sm font-semibold",children:s})})}function vv(){return n.jsxs("div",{className:"w-7 h-5 bg-gradient-to-t from-yellow-400 to-yellow-300 rounded-b-lg shadow-lg relative",children:[n.jsxs("svg",{viewBox:"0 0 100 40",className:"w-full h-full",children:[n.jsx("path",{d:"M15,35 L15,18 L35,28 L50,10 L65,28 L85,18 L85,35 Z",fill:"url(#crownGradient)"}),n.jsx("defs",{children:n.jsxs("linearGradient",{id:"crownGradient",x1:"0%",y1:"0%",x2:"0%",y2:"100%",children:[n.jsx("stop",{offset:"0%",stopColor:"#FCD34D"}),n.jsx("stop",{offset:"100%",stopColor:"#F59E0B"})]})})]}),n.jsx("div",{className:"absolute top-0.5 left-1/2 -translate-x-1/2 w-1 h-1 bg-red-400 rounded-full animate-pulse"})]})}function yv({n:e,you:t}){return n.jsx("div",{className:`w-7 h-7 grid place-items-center rounded-full text-sm font-bold ${t?"bg-black/10 text-black":"bg-white/10 text-white"}`,children:e})}function pa(e,t=12){return(e==null?void 0:e.length)>t?e.slice(0,t-1)+"…":e}function bv(e=""){var r;const t=e.trim().split(/\s+/);return t.length===1?t[0].slice(0,2).toUpperCase():(t[0][0]+(((r=t[1])==null?void 0:r[0])||"")).toUpperCase()}const wv="qp_recent",jv="qp_review_snapshot",qd=[{id:Date.now()-864e5,type:"quiz",category:"General Knowledge",difficulty:"easy",score:8,total:10,accuracy:80,time:"02:31",ms:151e3,date:"Yesterday",timestamp:Date.now()-864e5,mode:"Quiz"},{id:Date.now()-1728e5,type:"practice",category:"Science",difficulty:"medium",score:12,total:15,accuracy:80,time:"06:02",ms:362e3,date:"2 days ago",timestamp:Date.now()-1728e5,mode:"Practice"},{id:Date.now()-2592e5,type:"quiz",category:"Fun Facts",difficulty:"easy",score:9,total:10,accuracy:90,time:"02:05",ms:125e3,date:"3 days ago",timestamp:Date.now()-2592e5,mode:"Quiz"}];function Nv(){const[e,t]=d.useState("quizzes"),[r,s]=d.useState(null),[a,i]=d.useState(!1),[o,l]=d.useState("all"),[c,u]=d.useState("all"),[f,p]=d.useState("date"),[m,j]=d.useState([]),[x,w]=d.useState(!0),S=_e(),y=Je(),v=h=>{if(!h)return"00:00";const b=Math.floor(h/1e3),k=Math.floor(b/60),T=b%60;return`${String(k).padStart(2,"0")}:${String(T).padStart(2,"0")}`},g=h=>{if(!h)return"Unknown";const b=new Date(h),T=Math.floor((new Date-b)/(1e3*60*60*24));return T===0?"Today":T===1?"Yesterday":T<7?`${T} days ago`:`${["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][b.getMonth()]} ${b.getDate()}`};d.useEffect(()=>{let h=!1;w(!0);const b=R=>{try{return JSON.parse(R)}catch{return null}},k=R=>encodeURIComponent(String(R).trim().toLowerCase().replace(/\s+/g,"-")),T=R=>{var M,U,K,J;const B=Number(R.ts??R.timestamp??R.id)||Date.now(),Q=Number(R.ms)||0,H=Number(R.total)||0,W=Number(R.correct)||0,I=String(R.mode||"").toLowerCase().includes("practice")?"practice":"quiz",_=((M=R.snapshot)==null?void 0:M.category)||((U=R.snapshot)==null?void 0:U.categoryLabel)||R.cat||R.category||"Unknown",L=((K=R.snapshot)==null?void 0:K.categoryParam)||k(_),A=String(((J=R.snapshot)==null?void 0:J.difficulty)||R.difficulty||"medium").toLowerCase();return{id:R.id??B,type:I,category:_,categoryParam:L,difficulty:A,score:W,total:H,accuracy:H?Math.round(W/H*100):0,time:v(Q),ms:Q,date:g(B),timestamp:B,snapshot:R.snapshot??null,mode:R.mode||(I==="practice"?"Practice":"Quiz")}};try{const R=localStorage.getItem(wv),B=R?b(R):null,H=(Array.isArray(B)&&B.length?B:qd).map(T).filter(W=>W&&W.timestamp).sort((W,F)=>F.timestamp-W.timestamp);h||j(H)}catch(R){console.error("Error loading history:",R),h||j(qd)}finally{h||w(!1)}return()=>{h=!0}},[]);const N=d.useMemo(()=>{const h=new Set(m.map(b=>b.category));return Array.from(h)},[m]),C=d.useMemo(()=>{let h=m.filter(b=>e==="quizzes"?b.type==="quiz":b.type==="practice");return o!=="all"&&(h=h.filter(b=>b.category===o)),c!=="all"&&(h=h.filter(b=>b.difficulty===c)),h.sort((b,k)=>f==="date"?k.timestamp-b.timestamp:f==="score"?k.accuracy-b.accuracy:f==="time"?b.ms-k.ms:0),h},[m,e,o,c,f]),P=d.useMemo(()=>{if(C.length===0)return null;const h=C.reduce((R,B)=>R+B.score,0),b=C.reduce((R,B)=>R+B.total,0),k=b?Math.round(h/b*100):0,T=C.reduce((R,B)=>R+B.ms,0);return{count:C.length,avgAccuracy:k,totalTime:v(T),bestScore:Math.max(...C.map(R=>R.accuracy))}},[C]),E=h=>h>=80?"text-green-400":h>=60?"text-blue-400":h>=40?"text-yellow-400":"text-red-400";return x?n.jsx("div",{className:"min-h-full bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900 flex items-center justify-center",children:n.jsx("div",{className:"text-white",children:"Loading history..."})}):n.jsxs("div",{className:"min-h-full bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900 pt-12",children:[n.jsx("div",{className:"",children:n.jsxs("div",{className:"px-4 pt-4 pb-4",children:[n.jsxs("div",{className:"flex items-center justify-between mb-3",children:[n.jsx("button",{onClick:()=>{var h;if(((h=y.state)==null?void 0:h.from)==="results"){const b=ce.getCurrentResults();b?S(`/quiz/${b.categorySlug}`,{state:{returnToResults:!0}}):S("/profile")}else S("/profile")},className:"px-3 py-1.5 rounded-xl border border-white/20 bg-white/10 text-white text-sm flex items-center gap-1",children:"← Back"}),n.jsx("button",{onClick:()=>i(!a),className:"p-2 rounded-xl border border-white/20 bg-white/10 text-white",children:n.jsx(Cv,{})})]}),n.jsx("h1",{className:"text-2xl font-bold text-white mb-1",children:"History"}),n.jsx("p",{className:"text-white/70 text-sm",children:"Track your progress"})]})}),n.jsxs("div",{className:"px-4 pb-20",children:[n.jsx("div",{className:`
             sticky top-0 z-[60] isolate
            -mx-4 px-4
            py-4 mb-2
            bg-gray-900/95
            backdrop-blur-md
            border-b border-white/10
        `,children:n.jsx("div",{className:"flex items-center",children:n.jsx("div",{className:"inline-flex p-1 rounded-2xl bg-white/10 border border-white/20",children:[{value:"quizzes",label:"Quizzes",icon:"🎯"},{value:"practice",label:"Practice",icon:"📝"}].map(h=>n.jsxs("button",{onClick:()=>t(h.value),className:`px-12 py-2 text-sm rounded-xl transition-all duration-200 ${e===h.value?"bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg":"text-white/70 hover:text-white"}`,children:[n.jsx("span",{className:"mr-1",children:h.icon}),h.label]},h.value))})})}),P&&n.jsx("div",{className:"mb-4 p-4 rounded-2xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-white/20",children:n.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-3",children:[n.jsx(xa,{label:"Total",value:P.count}),n.jsx(xa,{label:"Avg Score",value:`${P.avgAccuracy}%`,color:E(P.avgAccuracy)}),n.jsx(xa,{label:"Best Score",value:`${P.bestScore}%`,color:"text-green-400"}),n.jsx(xa,{label:"Total Time",value:P.totalTime})]})}),a&&n.jsx("div",{className:"mb-4 p-4 rounded-2xl bg-white/10 border border-white/20",children:n.jsxs("div",{className:"space-y-3",children:[n.jsxs("div",{children:[n.jsx("label",{className:"text-xs text-white/60 mb-1 block",children:"Category"}),n.jsxs("select",{value:o,onChange:h=>l(h.target.value),className:"w-full px-3 py-2 rounded-xl bg-black/30 border border-white/20 text-white text-sm",children:[n.jsx("option",{value:"all",children:"All Categories"}),N.map(h=>n.jsx("option",{value:h,children:h},h))]})]}),n.jsxs("div",{className:"flex gap-2",children:[n.jsxs("div",{className:"flex-1",children:[n.jsx("label",{className:"text-xs text-white/60 mb-1 block",children:"Difficulty"}),n.jsxs("select",{value:c,onChange:h=>u(h.target.value),className:"w-full px-3 py-2 rounded-xl bg-black/30 border border-white/20 text-white text-sm",children:[n.jsx("option",{value:"all",children:"All"}),n.jsx("option",{value:"easy",children:"Easy"}),n.jsx("option",{value:"medium",children:"Medium"}),n.jsx("option",{value:"hard",children:"Hard"})]})]}),n.jsxs("div",{className:"flex-1",children:[n.jsx("label",{className:"text-xs text-white/60 mb-1 block",children:"Sort By"}),n.jsxs("select",{value:f,onChange:h=>p(h.target.value),className:"w-full px-3 py-2 rounded-xl bg-black/30 border border-white/20 text-white text-sm",children:[n.jsx("option",{value:"date",children:"Date"}),n.jsx("option",{value:"score",children:"Score"}),n.jsx("option",{value:"time",children:"Time"})]})]})]})]})}),C.length===0?n.jsxs("div",{className:"text-center py-12",children:[n.jsx("div",{className:"text-4xl mb-3",children:"📚"}),n.jsxs("p",{className:"text-white/60",children:["No ",e," history yet"]}),n.jsx("p",{className:"text-white/40 text-sm mt-1",children:"Start playing to see your progress here!"})]}):n.jsx("div",{className:"space-y-3",children:C.map((h,b)=>n.jsx(kv,{item:h,index:b,onClick:()=>s(h)},h.id))})]}),r&&n.jsx(Sv,{item:r,onClose:()=>s(null)})]})}function xa({label:e,value:t,color:r="text-white"}){return n.jsxs("div",{className:"text-center",children:[n.jsx("div",{className:"text-xs text-white/60 mb-1",children:e}),n.jsx("div",{className:`text-lg font-bold ${r}`,children:t})]})}function kv({item:e,index:t,onClick:r}){const s=o=>o>=80?"from-green-500/20 to-green-600/10 border-green-500/30":o>=60?"from-blue-500/20 to-blue-600/10 border-blue-500/30":o>=40?"from-yellow-500/20 to-yellow-600/10 border-yellow-500/30":"from-red-500/20 to-red-600/10 border-red-500/30",i=(o=>{const l=o==null?void 0:o.toLowerCase();return l==="easy"?{bg:"bg-green-500/20",text:"text-green-400",border:"border-green-500/30"}:l==="medium"?{bg:"bg-yellow-500/20",text:"text-yellow-400",border:"border-yellow-500/30"}:l==="hard"?{bg:"bg-red-500/20",text:"text-red-400",border:"border-red-500/30"}:{bg:"bg-gray-500/20",text:"text-gray-400",border:"border-gray-500/30"}})(e.difficulty);return n.jsxs("div",{onClick:r,className:`
        relative rounded-2xl p-4 cursor-pointer
        bg-gradient-to-br ${s(e.accuracy)}
        border transform transition-all duration-300 hover:scale-[1.02]
      `,children:[n.jsxs("div",{className:"flex items-start justify-between mb-3",children:[n.jsxs("div",{className:"flex-1",children:[n.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[n.jsx("span",{className:"text-lg",children:e.type==="quiz"?"🎯":"📝"}),n.jsx("h3",{className:"font-semibold text-white",children:e.category})]}),n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx("span",{className:`px-2 py-0.5 rounded-full text-xs ${i.bg} ${i.text} ${i.border} border`,children:e.difficulty}),n.jsx("span",{className:"text-xs text-white/50",children:e.date})]})]}),n.jsxs("div",{className:"text-right",children:[n.jsxs("div",{className:`text-2xl font-bold ${e.accuracy>=80?"text-green-400":e.accuracy>=60?"text-blue-400":e.accuracy>=40?"text-yellow-400":"text-red-400"}`,children:[e.accuracy,"%"]}),n.jsxs("div",{className:"text-xs text-white/60",children:[e.score,"/",e.total]})]})]}),n.jsxs("div",{className:"flex items-center justify-between text-xs",children:[n.jsxs("div",{className:"flex items-center gap-3 text-white/60",children:[n.jsxs("span",{children:["⏱ ",e.time]}),n.jsx("span",{children:e.mode})]}),n.jsx("span",{className:"text-white/40",children:"Tap to review →"})]})]})}function Sv({item:e,onClose:t}){const r=_e();return d.useEffect(()=>{const s=a=>{a.key==="Escape"&&t()};return document.addEventListener("keydown",s),()=>document.removeEventListener("keydown",s)},[t]),n.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80",onClick:t,children:n.jsxs("div",{className:"w-full max-w-md bg-gray-900 rounded-3xl p-6 border border-white/20",onClick:s=>s.stopPropagation(),children:[n.jsxs("div",{className:"flex items-center justify-between mb-4",children:[n.jsx("h2",{className:"text-xl font-bold text-white",children:"Quiz Details"}),n.jsx("button",{onClick:t,className:"p-2 rounded-xl bg-white/10 hover:bg-white/20 transition-colors text-white",children:"✕"})]}),n.jsxs("div",{className:"space-y-4",children:[n.jsxs("div",{className:"p-4 rounded-2xl bg-white/5 border border-white/10",children:[n.jsxs("div",{className:"flex items-center justify-between mb-2",children:[n.jsx("span",{className:"text-white/60",children:"Category"}),n.jsx("span",{className:"text-white font-medium",children:e.category})]}),n.jsxs("div",{className:"flex items-center justify-between mb-2",children:[n.jsx("span",{className:"text-white/60",children:"Difficulty"}),n.jsx("span",{className:`${e.difficulty==="easy"?"text-green-400":e.difficulty==="medium"?"text-yellow-400":"text-red-400"} font-medium`,children:e.difficulty})]}),n.jsxs("div",{className:"flex items-center justify-between mb-2",children:[n.jsx("span",{className:"text-white/60",children:"Score"}),n.jsxs("span",{className:"text-white font-medium",children:[e.score,"/",e.total]})]}),n.jsxs("div",{className:"flex items-center justify-between mb-2",children:[n.jsx("span",{className:"text-white/60",children:"Accuracy"}),n.jsxs("span",{className:`${e.accuracy>=80?"text-green-400":e.accuracy>=60?"text-blue-400":"text-yellow-400"} font-medium`,children:[e.accuracy,"%"]})]}),n.jsxs("div",{className:"flex items-center justify-between",children:[n.jsx("span",{className:"text-white/60",children:"Time"}),n.jsx("span",{className:"text-white font-medium",children:e.time})]})]}),e.snapshot&&n.jsx("button",{onClick:()=>{t(),localStorage.setItem(jv,JSON.stringify(e.snapshot)),r(`/quiz/${e.categoryParam}/start?review=1&attempt=${e.id}`,{state:{reviewFrom:"history",historyPath:"/profile/history"}})},className:"w-full py-3 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium hover:opacity-90 transition-opacity",children:"Review Answers"}),n.jsx("button",{onClick:()=>{var s;t(),r(`/quiz/${e.categoryParam}/start`,{state:{mode:"quiz",retake:!0,difficulty:e.difficulty,count:e.total,timer:((s=e.snapshot)==null?void 0:s.timer)||{type:"per_q",seconds:45},fromHistory:!0}})},className:"w-full py-3 rounded-2xl border border-white/20 text-white font-medium hover:bg-white/10 transition-colors",children:"Retake Quiz"})]})]})})}function Cv(){return n.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:n.jsx("path",{d:"M3 6h18M7 12h10M10 18h4",strokeLinecap:"round",strokeLinejoin:"round"})})}const Ev=d.createContext({});function Im(e){const t=d.useRef(null);return t.current===null&&(t.current=e()),t.current}const Pv=typeof window<"u",Tv=Pv?d.useLayoutEffect:d.useEffect,Lm=d.createContext(null);function Rv(e){return typeof e=="object"&&e!==null}function _v(e){return Rv(e)&&"offsetHeight"in e}const Av=d.createContext({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"});class Iv extends d.Component{getSnapshotBeforeUpdate(t){const r=this.props.childRef.current;if(r&&t.isPresent&&!this.props.isPresent){const s=r.offsetParent,a=_v(s)&&s.offsetWidth||0,i=this.props.sizeRef.current;i.height=r.offsetHeight||0,i.width=r.offsetWidth||0,i.top=r.offsetTop,i.left=r.offsetLeft,i.right=a-i.width-i.left}return null}componentDidUpdate(){}render(){return this.props.children}}function Lv({children:e,isPresent:t,anchorX:r,root:s}){const a=d.useId(),i=d.useRef(null),o=d.useRef({width:0,height:0,top:0,left:0,right:0}),{nonce:l}=d.useContext(Av);return d.useInsertionEffect(()=>{const{width:c,height:u,top:f,left:p,right:m}=o.current;if(t||!i.current||!c||!u)return;const j=r==="left"?`left: ${p}`:`right: ${m}`;i.current.dataset.motionPopId=a;const x=document.createElement("style");l&&(x.nonce=l);const w=s??document.head;return w.appendChild(x),x.sheet&&x.sheet.insertRule(`
          [data-motion-pop-id="${a}"] {
            position: absolute !important;
            width: ${c}px !important;
            height: ${u}px !important;
            ${j}px !important;
            top: ${f}px !important;
          }
        `),()=>{w.contains(x)&&w.removeChild(x)}},[t]),n.jsx(Iv,{isPresent:t,childRef:i,sizeRef:o,children:d.cloneElement(e,{ref:i})})}const Dv=({children:e,initial:t,isPresent:r,onExitComplete:s,custom:a,presenceAffectsLayout:i,mode:o,anchorX:l,root:c})=>{const u=Im(zv),f=d.useId();let p=!0,m=d.useMemo(()=>(p=!1,{id:f,initial:t,isPresent:r,custom:a,onExitComplete:j=>{u.set(j,!0);for(const x of u.values())if(!x)return;s&&s()},register:j=>(u.set(j,!1),()=>u.delete(j))}),[r,u,s]);return i&&p&&(m={...m}),d.useMemo(()=>{u.forEach((j,x)=>u.set(x,!1))},[r]),d.useEffect(()=>{!r&&!u.size&&s&&s()},[r]),o==="popLayout"&&(e=n.jsx(Lv,{isPresent:r,anchorX:l,root:c,children:e})),n.jsx(Lm.Provider,{value:m,children:e})};function zv(){return new Map}function Mv(e=!0){const t=d.useContext(Lm);if(t===null)return[!0,null];const{isPresent:r,onExitComplete:s,register:a}=t,i=d.useId();d.useEffect(()=>{if(e)return a(i)},[e]);const o=d.useCallback(()=>e&&s&&s(i),[i,s,e]);return!r&&s?[!1,o]:[!0]}const ga=e=>e.key||"";function Yd(e){const t=[];return d.Children.forEach(e,r=>{d.isValidElement(r)&&t.push(r)}),t}const so=({children:e,custom:t,initial:r=!0,onExitComplete:s,presenceAffectsLayout:a=!0,mode:i="sync",propagate:o=!1,anchorX:l="left",root:c})=>{const[u,f]=Mv(o),p=d.useMemo(()=>Yd(e),[e]),m=o&&!u?[]:p.map(ga),j=d.useRef(!0),x=d.useRef(p),w=Im(()=>new Map),[S,y]=d.useState(p),[v,g]=d.useState(p);Tv(()=>{j.current=!1,x.current=p;for(let P=0;P<v.length;P++){const E=ga(v[P]);m.includes(E)?w.delete(E):w.get(E)!==!0&&w.set(E,!1)}},[v,m.length,m.join("-")]);const N=[];if(p!==S){let P=[...p];for(let E=0;E<v.length;E++){const h=v[E],b=ga(h);m.includes(b)||(P.splice(E,0,h),N.push(h))}return i==="wait"&&N.length&&(P=N),g(Yd(P)),y(p),null}const{forceRender:C}=d.useContext(Ev);return n.jsx(n.Fragment,{children:v.map(P=>{const E=ga(P),h=o&&!u?!1:p===v||m.includes(E),b=()=>{if(w.has(E))w.set(E,!0);else return;let k=!0;w.forEach(T=>{T||(k=!1)}),k&&(C==null||C(),g(x.current),o&&(f==null||f()),s&&s())};return n.jsx(Dv,{isPresent:h,initial:!j.current||r?void 0:!1,custom:t,presenceAffectsLayout:a,mode:i,root:c,onExitComplete:h?void 0:b,anchorX:l,children:P},E)})})},Ov=()=>{const e=_e(),[t,r]=d.useState(null);d.useEffect(()=>{if(typeof window<"u"){const q=sessionStorage.getItem("navigationSource");q&&r(q)}},[]);const s=q=>{typeof window<"u"&&(sessionStorage.setItem("navigationSource","/rewards"),window.location.href=q)},a=()=>{e(-1)},i=[{id:1,type:"coins",value:100,icon:"🪙",label:"100 Coins",cost:0},{id:2,type:"life",value:1,icon:"❤️",label:"1 Life",cost:50},{id:3,type:"coins",value:200,icon:"🪙",label:"200 Coins",cost:0},{id:4,type:"wildcard",value:1,icon:"🃏",label:"Wild Card",cost:100},{id:5,type:"coins",value:500,icon:"💰",label:"500 Coins",cost:0,milestone:!0},{id:6,type:"fifty-fifty",value:1,icon:"➗",label:"50:50",cost:150},{id:7,type:"life",value:2,icon:"❤️",label:"2 Lives",cost:100},{id:8,type:"vehicle",value:"bike",icon:"🏍️",label:"Motorcycle",cost:300},{id:9,type:"mystery",value:1,icon:"🎁",label:"Mystery Box",cost:200},{id:10,type:"coins",value:750,icon:"💰",label:"750 Coins",cost:0,milestone:!0},{id:11,type:"life",value:3,icon:"❤️",label:"3 Lives",cost:150},{id:12,type:"wildcard",value:2,icon:"🃏",label:"2x Wild Card",cost:250},{id:13,type:"vehicle",value:"car",icon:"🚗",label:"Car",cost:500},{id:14,type:"fifty-fifty",value:2,icon:"➗",label:"2x 50:50",cost:300},{id:15,type:"coins",value:1e3,icon:"💎",label:"1000 Coins",cost:0,milestone:!0}],o={cycle:{icon:"🚴",name:"Bicycle"},bike:{icon:"🏍️",name:"Motorcycle"},car:{icon:"🚗",name:"Car"}};bn();const[l,c]=d.useState(4),[u,f]=d.useState(ce.getCoins()),[p,m]=d.useState(4),[j,x]=d.useState(!1),[w,S]=d.useState(!1),[y,v]=d.useState(0),[g,N]=d.useState(0),[C,P]=d.useState("cycle"),[E,h]=d.useState([{type:"vehicle",icon:"🚴",name:"Bicycle",count:1},{type:"wildcard",icon:"🃏",name:"Wild Card",count:2},{type:"fifty-fifty",icon:"➗",name:"50:50 Helper",count:1}]),[b,k]=d.useState([0,1,2,3]),[T,R]=d.useState(!1),[B,Q]=d.useState(!1),[H,W]=d.useState(null),[F,I]=d.useState(null),[_,L]=d.useState(!1),[A,M]=d.useState(null),[U,K]=d.useState(!1),J=d.useRef(null),$=d.useRef(null),Z=d.useRef(null);d.useEffect(()=>{J.current=new Audio("/sounds/reward.mp3"),$.current=new Audio("/sounds/reward_progress.mp3"),[J,$].forEach(q=>{var D;(D=q.current)==null||D.addEventListener("error",()=>{console.log("Sound file not found")})})},[]);const O=q=>{try{q.current&&(q.current.currentTime=0,q.current.play().catch(D=>console.log("Audio play failed:",D)))}catch(D){console.log("Sound play error:",D)}},z=(q,D)=>{if(q>l){I(D),Q(!0);return}q===l&&Y(q,D)},G=q=>{var re;const D=(re=Z.current)==null?void 0:re.querySelector(`[data-index="${q}"]`);if(D){const ne=D.getBoundingClientRect(),ae=window.pageYOffset||document.documentElement.scrollTop,de=ne.top+ae-window.innerHeight/2+50;window.scrollTo({top:de,behavior:"smooth"})}},Y=(q,D)=>{if(!b.includes(q)){if(D.cost>0&&u<D.cost){I(D),Q(!0);return}D.cost>0&&(f(re=>re-D.cost),ce.addCoins(-D.cost,`Reward Purchase: ${D.label}`)),O(J),R(!0),I(D),k(re=>[...re,q]),setTimeout(()=>{R(!1),D.type==="coins"?(v(D.value),x(!0),setTimeout(()=>{f(re=>re+D.value),ce.addCoins(D.value,`Reward Claimed: ${D.label}`),setTimeout(()=>{x(!1),v(0)},500)},300)):D.type==="life"?(N(D.value),S(!0),setTimeout(()=>{m(re=>re+D.value),setTimeout(()=>{S(!1),N(0)},500)},300)):(M({icon:D.icon,startX:window.innerWidth/2,startY:window.innerHeight/2}),setTimeout(()=>{M(null),K(!0),ee(D),D.type==="vehicle"&&P(D.value),setTimeout(()=>{K(!1)},500)},800)),setTimeout(()=>{if(l<i.length-1){const re=l+1;G(re),setTimeout(()=>{L(!0),O($),c(re),setTimeout(()=>{L(!1)},500)},300)}},1200)},1500)}},ee=q=>{h(D=>D.find(ne=>ne.icon===q.icon)?D.map(ne=>ne.icon===q.icon?{...ne,count:ne.count+1}:ne):[...D,{type:q.type,icon:q.icon,name:q.label,count:1}])},le=q=>30+q*100,te=()=>30+l*100;return n.jsxs("div",{className:"rewards-page",children:[n.jsx("style",{jsx:!0,children:`
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
          min-height: ${i.length*100+200}px;
        }

        .journey-track {
          position: relative;
          width: 100%;
          height: ${i.length*100+100}px;
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
      `}),n.jsx("div",{className:"non-sticky-header",children:n.jsx("button",{className:"back-button",onClick:a,children:"← Back"})}),n.jsxs("div",{className:"sticky-section",children:[n.jsxs("div",{className:"header-wrapper",children:[n.jsxs("div",{className:"title-row",children:[n.jsxs("div",{children:[n.jsx("h1",{className:"title",children:"Rewards"}),n.jsx("p",{className:"subtitle",children:"Claim amazing prizes"})]}),n.jsx("button",{className:"play-quiz-btn",onClick:()=>s("/play"),children:"Play Quiz"})]}),n.jsx("div",{className:"balance-row",children:n.jsx("div",{className:"balance-item",children:n.jsxs("div",{children:[n.jsx("div",{className:"balance-label",children:"Balance"}),n.jsxs("div",{className:`balance-value ${j?"animating":""}`,children:[u.toLocaleString()," 🪙",j&&n.jsxs("span",{className:"value-change",children:["+",y]})]})]})})})]}),n.jsx("div",{className:"stats-cards-container",children:n.jsxs("div",{className:"info-grid",children:[n.jsxs("div",{className:"info-card",children:[n.jsx("div",{className:"info-icon",children:"❤️"}),n.jsxs("div",{className:`info-value ${w?"animating":""}`,children:[p,w&&n.jsxs("span",{className:"value-change",children:["+",g]})]}),n.jsx("div",{className:"info-label",children:"Lives"})]}),n.jsxs("div",{className:"info-card",children:[n.jsx("div",{className:"info-icon",children:"⭐"}),n.jsx("div",{className:"info-value",children:"5"}),n.jsx("div",{className:"info-label",children:"Level"})]}),n.jsxs("div",{className:"info-card",children:[n.jsx("div",{className:"info-icon",children:o[C].icon}),n.jsx("div",{className:"info-value",children:o[C].name}),n.jsx("div",{className:"info-label",children:"Vehicle"})]}),n.jsxs("div",{className:`cards-section ${U?"animating":""}`,children:[n.jsx("div",{className:"cards-label",children:"Your Cards"}),n.jsx("div",{className:"card-grid",children:E.map((q,D)=>n.jsxs("div",{className:"card-item",onClick:()=>W(q),children:[n.jsxs("div",{className:"large-card",children:[n.jsx("div",{className:"large-card-icon",children:q.icon}),n.jsx("div",{className:"large-card-name",children:q.name})]}),q.count>1&&n.jsx("div",{className:"card-count-badge",children:q.count})]},D))})]})]})})]}),n.jsx("div",{className:"scrollable-journey",children:n.jsx("div",{className:"journey-container",ref:Z,children:n.jsxs("div",{className:"journey-track",children:[n.jsx("div",{className:"curvy-road",children:n.jsxs("svg",{className:"road-svg",viewBox:"0 0 60 1500",preserveAspectRatio:"none",children:[n.jsx("defs",{children:n.jsxs("linearGradient",{id:"roadGradient",x1:"0%",y1:"0%",x2:"0%",y2:"100%",children:[n.jsx("stop",{offset:"0%",stopColor:"#5E5CE6"}),n.jsx("stop",{offset:"100%",stopColor:"#5E5CE6"})]})}),n.jsx("path",{className:"road-path",d:"M 30 0 Q 45 50, 30 100 T 30 200 Q 15 250, 30 300 T 30 400 Q 45 450, 30 500 T 30 600 Q 15 650, 30 700 T 30 800 Q 45 850, 30 900 T 30 1000 Q 15 1050, 30 1100 T 30 1200 Q 45 1250, 30 1300 T 30 1400 L 30 1500"}),n.jsx("path",{className:"road-progress",d:"M 30 0 Q 45 50, 30 100 T 30 200 Q 15 250, 30 300 T 30 400 Q 45 450, 30 500 T 30 600 Q 15 650, 30 700 T 30 800 Q 45 850, 30 900 T 30 1000 Q 15 1050, 30 1100 T 30 1200 Q 45 1250, 30 1300 T 30 1400 L 30 1500",strokeDasharray:"1500",strokeDashoffset:1500-l/(i.length-1)*1500})]})}),n.jsxs("div",{className:"avatar-tracker",style:{top:`${te()}px`},children:[n.jsx("img",{className:"avatar-img",src:"/profile/avatar.png",alt:"You",onError:q=>{q.target.style.display="none"}}),n.jsx("div",{className:"tracker-vehicle",children:o[C].icon})]}),n.jsx("div",{className:"rewards-list",children:i.map((q,D)=>{const re=D%2===0,ne=D>l,ae=b.includes(D),de=D===l;return n.jsx("div",{className:"reward-row","data-index":D,style:{top:`${le(D)}px`},children:n.jsxs("div",{className:`reward-item ${re?"left":"right"}`,children:[n.jsxs("div",{className:`checkpoint ${de?"current":ae?"claimed":ne?"locked":""}`,onClick:()=>z(D,q),children:[n.jsx("div",{className:"checkpoint-icon",children:q.icon}),n.jsx("div",{className:"checkpoint-value",children:q.label.split(" ")[0]}),q.milestone&&n.jsx("div",{className:"milestone-badge",children:"BONUS"}),ne&&n.jsx("div",{className:"lock-icon",children:"🔒"})]}),n.jsxs("div",{className:"reward-info",children:[n.jsx("div",{className:"reward-name",children:q.label}),n.jsxs("div",{className:"step-label",children:["Step ",D+1]})]})]})},q.id)})})]})})}),A&&n.jsx("div",{className:"flying-card",style:{left:`${A.startX}px`,top:`${A.startY}px`,"--startX":`${A.startX}px`},children:A.icon}),n.jsx(so,{children:H&&n.jsx("div",{className:"claim-overlay",onClick:()=>W(null),children:n.jsxs("div",{className:"modal",onClick:q=>q.stopPropagation(),children:[n.jsx("div",{className:"modal-icon",children:H.icon}),n.jsx("div",{className:"card-detail-name",children:H.name}),n.jsxs("div",{className:"card-detail-desc",children:["You have ",H.count," of these cards"]}),n.jsx("div",{className:"modal-buttons",children:n.jsx("button",{className:"modal-btn modal-btn-secondary",onClick:()=>W(null),children:"Close"})})]})})}),n.jsx(so,{children:T&&F&&n.jsx("div",{className:"claim-overlay",children:n.jsxs("div",{className:"modal",children:[n.jsx("div",{className:"modal-title",children:"WELL DONE!"}),n.jsx("div",{className:"modal-subtitle",children:"Here's a reward for you."}),n.jsx("div",{className:"modal-icon",children:F.icon}),n.jsxs("div",{className:"modal-value",children:["+",F.value," ",F.type==="coins"?"Coins":F.type==="life"?"Lives":F.label]})]})})}),n.jsx(so,{children:B&&F&&n.jsx("div",{className:"claim-overlay",onClick:()=>Q(!1),children:n.jsxs("div",{className:"modal",onClick:q=>q.stopPropagation(),children:[n.jsx("div",{className:"modal-icon",children:"🪙"}),n.jsx("div",{className:"modal-title",children:"Need More Coins"}),n.jsx("div",{className:"modal-subtitle",children:F.cost>0?`You need ${F.cost-u} more coins`:"Complete previous rewards first"}),n.jsxs("div",{className:"modal-buttons",children:[n.jsx("button",{className:"modal-btn modal-btn-primary",onClick:()=>s("/play"),children:"Play Quiz"}),n.jsx("button",{className:"modal-btn modal-btn-secondary",onClick:()=>Q(!1),children:"Cancel"})]})]})})})]})},va=[{id:1,name:"First Win",emoji:"🏆",unlocked:!0,hint:"Win your first quiz",progress:100,color:"#FFD700"},{id:2,name:"On Fire",emoji:"🔥",unlocked:!0,hint:"3-day winning streak",progress:100,color:"#FF6B35"},{id:3,name:"Perfectionist",emoji:"⭐",unlocked:!1,hint:"Score 10/10 in any quiz",progress:75,color:"#9333EA"},{id:4,name:"Early Bird",emoji:"🌅",unlocked:!0,hint:"Play before 9 AM",progress:100,color:"#F59E0B"},{id:5,name:"Scholar",emoji:"🎓",unlocked:!1,hint:"Master 5 categories",progress:40,color:"#3B82F6"},{id:6,name:"Lightning",emoji:"⚡",unlocked:!1,hint:"Complete in under 2 minutes",progress:20,color:"#10B981"},{id:7,name:"Champion",emoji:"👑",unlocked:!1,hint:"Win 50 quizzes",progress:30,color:"#EC4899"},{id:8,name:"Explorer",emoji:"🗺️",unlocked:!1,hint:"Try all categories",progress:60,color:"#06B6D4"},{id:9,name:"Strategist",emoji:"🧠",unlocked:!0,hint:"Use 3 power-ups wisely",progress:100,color:"#8B5CF6"}];function Fv(){const[e,t]=d.useState(null),r=va.filter(a=>a.unlocked).length,s=Math.round(r/va.length*100);return n.jsxs("div",{className:"badges-screen",children:[n.jsx("style",{jsx:!0,children:`
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
      `}),n.jsxs("div",{className:"header",children:[n.jsx("button",{className:"back-button",onClick:()=>window.history.back(),children:"← Back"}),n.jsxs("div",{className:"title-section",children:[n.jsx("h1",{className:"main-title",children:"Badge Collection"}),n.jsx("p",{className:"subtitle",children:"Unlock achievements and show your skills"})]})]}),n.jsxs("div",{className:"progress-card",children:[n.jsxs("div",{className:"progress-header",children:[n.jsx("span",{className:"progress-label",children:"Collection Progress"}),n.jsxs("span",{className:"progress-value",children:[r,"/",va.length]})]}),n.jsx("div",{className:"progress-bar-container",children:n.jsx("div",{className:"progress-bar-fill",style:{width:`${s}%`}})})]}),n.jsx("div",{className:"badges-grid",children:va.map(a=>n.jsxs("div",{className:`badge-card ${a.unlocked?"unlocked":""}`,style:{"--badge-color":a.color},onClick:()=>t(a),children:[n.jsx("div",{className:"badge-glow"}),n.jsx("div",{className:"badge-emoji",children:a.emoji}),n.jsx("div",{className:"badge-name",children:a.name}),!a.unlocked&&n.jsxs(n.Fragment,{children:[n.jsx("div",{className:"badge-progress",children:n.jsx("div",{className:"badge-progress-fill",style:{width:`${a.progress}%`}})}),n.jsx("div",{className:"lock-indicator",children:"🔒"})]})]},a.id))}),n.jsxs("div",{className:"tips-card",children:[n.jsxs("div",{className:"tips-title",children:[n.jsx("span",{children:"💡"}),n.jsx("span",{children:"Pro Tip"})]}),n.jsx("div",{className:"tips-content",children:"Complete daily challenges and maintain streaks to unlock rare badges faster. Each badge gives you bonus XP and special rewards!"})]}),e&&n.jsx("div",{className:"badge-modal",onClick:()=>t(null),children:n.jsxs("div",{className:"modal-content",onClick:a=>a.stopPropagation(),children:[n.jsx("div",{className:`modal-badge ${e.unlocked?"":"locked"}`,children:e.emoji}),n.jsx("h3",{className:"modal-title",children:e.name}),n.jsx("span",{className:`modal-status ${e.unlocked?"":"locked"}`,children:e.unlocked?"✓ Unlocked":"🔒 Locked"}),n.jsx("p",{className:"modal-description",children:e.hint}),!e.unlocked&&n.jsxs("div",{className:"modal-progress-section",children:[n.jsx("div",{className:"modal-progress-label",children:"Progress"}),n.jsx("div",{className:"modal-progress-bar",children:n.jsx("div",{className:"modal-progress-fill",style:{width:`${e.progress}%`,"--badge-color":e.color}})}),n.jsxs("div",{className:"modal-progress-text",children:[e.progress,"%"]})]}),n.jsx("button",{className:"modal-close",onClick:()=>t(null),children:e.unlocked?"Awesome!":"Keep Going!"})]})})]})}const $v=[{id:1,title:"Quiz Master",subtitle:"Play 10 quizzes",current:7,target:10,reward:150,claimed:!1,icon:"🎯",color:"#FF6B6B"},{id:2,title:"Coin Collector",subtitle:"Earn 2,000 coins",current:1240,target:2e3,reward:200,claimed:!1,icon:"💰",color:"#4ECDC4"},{id:3,title:"Winning Streak",subtitle:"Win 3 in a row",current:3,target:3,reward:100,claimed:!0,icon:"🔥",color:"#FFD93D"},{id:4,title:"Speed Demon",subtitle:"Complete 5 under 2min",current:2,target:5,reward:300,claimed:!1,icon:"⚡",color:"#A8E6CF"},{id:5,title:"Perfect Score",subtitle:"Get 100% accuracy",current:0,target:1,reward:250,claimed:!1,icon:"⭐",color:"#C7B8FF"}];function Bv(){bn();const[e,t]=d.useState($v),[r,s]=d.useState(null),[a,i]=d.useState(ce.getCoins()),[o,l]=d.useState(!1),[c,u]=d.useState([]),f=e.length,p=e.filter(x=>x.current>=x.target).length,m=Math.round(p/f*100);d.useEffect(()=>{const x=setInterval(()=>{u(w=>{const S={id:Date.now(),x:Math.random()*100,y:Math.random()*100,size:Math.random()*20+10};return[...w.slice(-4),S]})},3e3);return()=>clearInterval(x)},[]);const j=(x,w)=>{s(x),navigator.vibrate&&navigator.vibrate([20,10,20]),setTimeout(()=>{var S;t(y=>y.map(v=>v.id===x?{...v,claimed:!0}:v)),i(y=>y+w),ce.addCoins(w,`Achievement: ${((S=e.find(y=>y.id===x))==null?void 0:S.title)||"Completed"}`),s(null),l(!0),setTimeout(()=>l(!1),2e3)},600)};return n.jsxs("div",{className:"achievements-screen",children:[n.jsx("style",{jsx:!0,children:`
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
      `}),n.jsxs("div",{className:"floating-shapes",children:[n.jsx("div",{className:"shape shape-1"}),n.jsx("div",{className:"shape shape-2"})]}),n.jsxs("div",{className:"header",children:[n.jsx("button",{className:"back-button",onClick:()=>window.history.back(),children:"← Back"}),n.jsxs("div",{className:"coins-display",children:["🪙 ",a.toLocaleString()]}),n.jsxs("div",{className:"title-section",children:[n.jsx("h1",{className:"main-title",children:"ACHIEVEMENTS"}),n.jsx("p",{className:"subtitle",children:"Complete challenges and earn awesome rewards!"})]})]}),n.jsxs("div",{className:"progress-overview",children:[n.jsx("div",{className:"card-glow",style:{"--card-color":"#FFD93D"}}),n.jsxs("div",{className:"overview-header",children:[n.jsx("span",{className:"overview-label",children:"🎮 Progress Tracker"}),n.jsxs("div",{className:"overview-stats",children:[n.jsx("span",{className:"trophy-icon",children:"🏆"}),n.jsxs("span",{className:"overview-value",children:[p,"/",f]})]})]}),n.jsx("div",{className:"progress-bar-main",children:n.jsx("div",{className:"progress-fill-main",style:{width:`${m}%`}})})]}),n.jsx("div",{className:"achievements-list",children:e.map(x=>{const w=Math.min(100,Math.round(x.current/x.target*100)),S=w===100,y=x.color+"CC";return n.jsxs("div",{className:`achievement-card ${S?"completed":""}`,style:{"--card-color":x.color,"--card-color-dark":y},children:[n.jsx("div",{className:"card-glow"}),S&&x.claimed&&n.jsx("div",{className:"completed-badge",children:"✓"}),n.jsxs("div",{className:"card-content",children:[n.jsx("div",{className:"achievement-icon",children:x.icon}),n.jsxs("div",{className:"achievement-details",children:[n.jsx("div",{className:"achievement-title",children:x.title}),n.jsx("div",{className:"achievement-subtitle",children:x.subtitle}),n.jsxs("div",{className:"progress-container",children:[n.jsx("div",{className:"progress-bar",children:n.jsx("div",{className:"progress-fill",style:{width:`${w}%`}})}),n.jsxs("div",{className:"progress-text",children:[n.jsxs("span",{children:[x.current,"/",x.target]}),n.jsxs("span",{className:"reward-badge",children:["🪙 ",x.reward]})]})]})]}),n.jsx("button",{onClick:()=>j(x.id,x.reward),disabled:!S||x.claimed,className:`claim-button ${x.claimed?"claimed":S?"can-claim":"in-progress"} ${r===x.id?"claiming":""}`,children:x.claimed?"✓":S?"CLAIM!":`${w}%`})]})]},x.id)})}),o&&n.jsx("div",{className:"celebration",children:"🎉"})]})}function Uv(){const{player:e,updateDailyStreak:t}=bn(),r=(e==null?void 0:e.currentStreak)||0,s=(e==null?void 0:e.bestStreak)||0,a=(e==null?void 0:e.totalDays)||0;e!=null&&e.coins;const i=_e(),o=new Date,l=o.getDay(),c=()=>{const _=new Date(o);return _.setDate(o.getDate()-o.getDay()),_.toISOString().split("T")[0]},[u,f]=d.useState(null),[p,m]=d.useState(!1),[j,x]=d.useState(null),[w,S]=d.useState(null),[y,v]=d.useState(!1),g=d.useRef(null),N=d.useRef(null),[C]=$t("/sounds/coin.mp3",{volume:.75}),[P]=$t("/sounds/correct.mp3",{volume:.6}),[E,h]=d.useState(()=>{const _=localStorage.getItem("streaks_claimed")||"[]",L=JSON.parse(_),A=c(),M=L.filter(U=>U!==`week_${A}_day_0`);return localStorage.setItem("streaks_claimed",JSON.stringify(M)),M});d.useEffect(()=>{const _=()=>{window.scrollTo(0,0),document.documentElement.scrollTop=0,document.body.scrollTop=0;const A=document.querySelector("main");A&&(A.scrollTop=0)};_(),requestAnimationFrame(_);const L=setTimeout(_,100);return()=>clearTimeout(L)},[]),d.useEffect(()=>{v(!0),setTimeout(()=>v(!1),3e3)},[]);const b=[{label:"Mon",short:"M",dayIndex:1},{label:"Tue",short:"T",dayIndex:2},{label:"Wed",short:"W",dayIndex:3},{label:"Thu",short:"T",dayIndex:4},{label:"Fri",short:"F",dayIndex:5},{label:"Sat",short:"S",dayIndex:6},{label:"Sun",short:"S",dayIndex:0}],k=[{day:0,reward:"10",type:"coins",icon:"🎯",label:"Welcome Bonus"},{day:1,reward:"50",type:"coins",icon:"🪙",label:"50 Coins"},{day:2,reward:"100",type:"coins",icon:"🪙",label:"100 Coins"},{day:3,reward:"2x",type:"xp",icon:"⭐",label:"2x XP Boost"},{day:4,reward:"150",type:"coins",icon:"🪙",label:"150 Coins"},{day:5,reward:"Full",type:"energy",icon:"⚡",label:"Energy Refill"},{day:6,reward:"200",type:"coins",icon:"🪙",label:"200 Coins"},{day:7,reward:"Mystery",type:"mystery",icon:"🎁",label:"Mystery Box"}],T=_=>{const L=E.includes(`week_${c()}_day_${_}`);if(_===0)return{isCompleted:!0,isClaimed:L,canClaim:!L,isLocked:!1};const A=r>=_,M=A&&!L,U=r<_;return{isCompleted:A,isClaimed:L,canClaim:M,isLocked:U}},R=(_,L,A)=>{const M=T(L);if(M.isLocked){S({day:L,currentStreak:r}),setTimeout(()=>S(null),2e3);return}M.isClaimed||M.canClaim&&(f({..._,day:L}),m(!1),setTimeout(()=>{m(!0),P(),setTimeout(()=>{if(_.type==="coins"){const J=parseInt(_.reward);if(N.current&&g.current){const $=N.current.getBoundingClientRect();C(),x({startRect:$,count:10,amount:J})}}const U=`week_${c()}_day_${L}`,K=[...E,U];h(K),localStorage.setItem("streaks_claimed",JSON.stringify(K))},500),setTimeout(()=>{f(null),m(!1)},2500)},500))},B=(_,L)=>{if(b[L].dayIndex===l)return r>0?"today-completed":"today-pending";if(L<b.findIndex(M=>M.dayIndex===l)){const M=b.findIndex(U=>U.dayIndex===l)-L;return r>=M?"completed":"missed"}else return"future"},Q=[{days:3,emoji:"⚡",label:"Starter",achieved:r>=3},{days:7,emoji:"🔥",label:"Week Warrior",achieved:r>=7},{days:30,emoji:"💎",label:"Champion",achieved:r>=30},{days:100,emoji:"👑",label:"Legend",achieved:r>=100}],H=Q.find(_=>_.days>r)||Q[Q.length-1],W=Math.min(100,r/H.days*100),F=()=>{window.location.href="/play"},I=()=>{i(-1)};return n.jsxs("div",{className:"streaks-screen",children:[n.jsx("style",{jsx:!0,children:`
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
      `}),j&&n.jsx(Si,{startRect:j.startRect,targetRef:g,count:j.count,onDone:()=>{ce.addCoins(j.amount,`Streak Reward - Day ${j.day||""}`),x(null)}}),n.jsxs("div",{className:"header",children:[n.jsxs("div",{className:"header-top",children:[n.jsx("button",{className:"back-button",onClick:I,children:"← Back"}),n.jsxs("div",{className:"coin-pill",ref:g,id:"coin-pill",children:[n.jsx("span",{className:"coin-icon",children:"🪙"}),n.jsx("span",{className:"coin-amount",children:ce.getCoins()})]})]}),n.jsxs("div",{className:"title-section",children:[n.jsx("h1",{className:"main-title",children:"STREAKS"}),n.jsx("p",{className:"subtitle",children:"Keep the fire burning!"})]})]}),n.jsxs("div",{className:"streak-hero",children:[n.jsx("div",{className:"fire-animation",children:"🔥"}),n.jsx("div",{className:"streak-number",children:r}),n.jsx("div",{className:"streak-label",children:"DAY STREAK"}),n.jsxs("div",{className:"stats-row",children:[n.jsxs("div",{className:"stat-card",children:[n.jsx("div",{className:"stat-value",children:s}),n.jsx("div",{className:"stat-label",children:"Best Streak"})]}),n.jsxs("div",{className:"stat-card",children:[n.jsx("div",{className:"stat-value",children:a}),n.jsx("div",{className:"stat-label",children:"Total Days"})]})]})]}),n.jsxs("div",{className:"weekly-progress-card",children:[n.jsxs("div",{className:"weekly-header",children:[n.jsx("div",{className:"weekly-title",children:"This Week's Progress"}),n.jsxs("div",{className:"weekly-counter",children:[n.jsx("span",{className:"weekly-counter-icon",children:"🔥"}),n.jsxs("span",{className:"weekly-counter-text",children:[Math.min(r,7),"/7"]})]})]}),n.jsx("div",{className:"weekly-days",children:b.map((_,L)=>{const A=B(_.dayIndex,L),M=_.dayIndex===l;return n.jsxs("div",{className:"day-item",children:[n.jsx("div",{className:`day-circle ${A}`,children:A==="completed"||A==="today-completed"?"":_.short}),n.jsx("div",{className:`day-label ${M?"today":""}`,children:_.label})]},L)})}),n.jsx("div",{className:"milestone-header",children:"Daily Rewards"}),n.jsx("div",{className:"rewards-grid",children:k.map((_,L)=>{const A=T(_.day);return n.jsxs("div",{className:`reward-item ${A.isLocked?"locked":A.canClaim?"can-claim":A.isClaimed?"completed":""}`,onClick:M=>R(_,_.day),children:[n.jsxs("div",{className:"reward-day",children:["Day ",_.day]}),n.jsx("div",{className:"reward-icon",children:_.icon}),n.jsx("div",{className:"reward-text",children:_.label})]},L)})})]}),n.jsxs("div",{className:"milestone-section",children:[n.jsx("div",{className:"milestone-header",children:"Next Milestone"}),n.jsxs("div",{className:"milestone-progress",children:[n.jsxs("div",{className:"milestone-info",children:[n.jsxs("div",{className:"milestone-current",children:[n.jsx("span",{className:"milestone-emoji",children:H.emoji}),n.jsx("span",{className:"milestone-text",children:H.label})]}),n.jsxs("span",{className:"milestone-target",children:[r,"/",H.days," days"]})]}),n.jsx("div",{className:"progress-bar-container",children:n.jsx("div",{className:"progress-bar-fill",style:{width:`${W}%`}})})]})]}),n.jsx("div",{className:"motivational-text",children:r===0?"Start your journey! Claim your Day 0 bonus and complete a quiz!":`Day ${r} strong! Keep going to unlock more rewards!`}),n.jsxs("button",{className:"play-button",onClick:F,children:[n.jsx("span",{children:"Continue Streak"}),n.jsx("span",{children:"→"})]}),w&&n.jsxs("div",{className:"locked-message",children:[n.jsx("span",{className:"locked-message-icon",children:"🔒"}),n.jsx("span",{className:"locked-message-text",children:w.day===1&&w.currentStreak===0?"Complete your first quiz to unlock this reward!":`Reach Day ${w.day} streak to unlock this reward!`})]}),u&&n.jsxs(n.Fragment,{children:[n.jsx("div",{className:"modal-overlay"}),n.jsx("div",{className:"reward-modal",ref:N,children:n.jsxs("div",{className:"gift-box",children:[n.jsxs("div",{className:"gift-box-body",children:[n.jsx("div",{className:"gift-box-ribbon"}),n.jsx("div",{className:"gift-box-ribbon-horizontal"})]}),n.jsx("div",{className:`gift-box-lid ${p?"opening":""}`,children:n.jsx("div",{className:"gift-box-bow",children:"🎀"})}),n.jsxs("div",{className:`gift-content ${p?"show":""}`,children:[n.jsx("div",{className:"gift-content-icon",children:u.icon}),n.jsxs("div",{className:"gift-content-title",children:["Day ",u.day]}),n.jsx("div",{className:"gift-content-desc",children:u.label})]})]})})]}),y&&n.jsx("div",{className:"celebration",children:"🎉"})]})}const qv=()=>{const e=new Date;return`${e.getFullYear()}-${e.getMonth()+1}-${e.getDate()}`},sl=()=>{const e=localStorage.getItem("questProgress");return e?JSON.parse(e):{}},Qd=(e,t)=>{const r=sl();r[e]=t,r.date=qv(),localStorage.setItem("questProgress",JSON.stringify(r))};function Yv(){const{player:e}=bn(),t=_e(),r=Je(),s=sl(),[a,i]=d.useState([{id:1,title:"Play 3 quizzes today",progress:s.dailyQuizzes||0,target:3,reward:60,claimed:s.dailyQuizzesClaimed||!1,icon:"🎮",color:"#FF6B6B",difficulty:"Easy",questType:"dailyQuizzes",route:"/quiz/play",routeParams:"?category=random&difficulty=random&from=quest"},{id:3,title:"Practice 15 questions",progress:s.practiceQuestions||0,target:15,reward:100,claimed:s.practiceQuestionsClaimed||!1,icon:"📚",color:"#FFD93D",difficulty:"Easy",questType:"practiceQuestions",route:"/practice/start",routeParams:"?questions=15&difficulty=easy&category=random&from=quest"},{id:4,title:"Win 5 in a row",progress:s.winStreak||0,target:5,reward:150,claimed:s.winStreakClaimed||!1,icon:"🔥",color:"#A8E6CF",difficulty:"Hard",questType:"winStreak",route:"/play",routeParams:"?mode=survival&from=quest"},{id:5,title:"Complete a speed run",progress:s.speedRun||0,target:1,reward:120,claimed:s.speedRunClaimed||!1,icon:"⚡",color:"#C7B8FF",difficulty:"Medium",questType:"speedRun",route:"/swipe/random-mix",routeParams:"?from=quest"}]),[o,l]=d.useState(ce.getCoins()),[c,u]=d.useState(null),[f,p]=d.useState(0),m=d.useRef(null),[j,x]=d.useState(null);d.useEffect(()=>{const N=()=>{const P=sl();i(E=>E.map(h=>{const b=h.questType;return P[b]!==void 0?{...h,progress:P[b]}:h}))};window.addEventListener("storage",N);const C=()=>N();return window.addEventListener("focus",C),()=>{window.removeEventListener("storage",N),window.removeEventListener("focus",C)}},[]),d.useEffect(()=>{const N=P=>{console.log("Quest progress update received:",P.detail),i(E=>E.map(h=>h.questType==="practiceQuestions"&&P.detail.practiceQuestions?{...h,progress:P.detail.practiceQuestions}:h))};window.addEventListener("questProgressUpdate",N);const C=setInterval(()=>{try{const P=localStorage.getItem("questProgress");if(P){const E=JSON.parse(P);i(h=>h.map(b=>b.questType==="practiceQuestions"&&E.practiceQuestions&&b.progress!==E.practiceQuestions?{...b,progress:E.practiceQuestions}:b))}}catch(P){console.error("Error checking progress:",P)}},1e3);return()=>{window.removeEventListener("questProgressUpdate",N),clearInterval(C)}},[]),d.useEffect(()=>{var N;if((N=r.state)!=null&&N.questCompleted){const{questType:C,increment:P}=r.state;i(E=>E.map(h=>{if(h.questType===C){const b=Math.min(h.progress+(P||1),h.target);return Qd(C,b),{...h,progress:b}}return h})),window.history.replaceState({},document.title)}},[r]),d.useEffect(()=>{const N=a.filter(C=>C.progress>=C.target).length;p(Math.round(N/a.length*100))},[a]),d.useEffect(()=>{l((e==null?void 0:e.coins)||0)},[e==null?void 0:e.coins]);const w=N=>{navigator.vibrate&&navigator.vibrate([20]),sessionStorage.setItem("activeQuest",JSON.stringify({id:N.id,type:N.questType,title:N.title,currentProgress:N.progress,target:N.target})),t(N.route+N.routeParams)},S=()=>{sessionStorage.getItem("questsFromHome")==="true"?(sessionStorage.removeItem("questsFromHome"),t("/")):t("/profile")},y=N=>{navigator.vibrate&&navigator.vibrate([20,10,20]);try{const C=new Audio("/sounds/coin.mp3");C.volume=.75,C.play()}catch{console.log("Sound not available")}u(N.id),x({startRect:{left:window.innerWidth/2-50,top:window.innerHeight/2,width:100,height:100},count:Math.min(N.reward/10,10),amount:N.reward,questTitle:N.title}),setTimeout(()=>{i(C=>C.map(P=>P.id===N.id?(Qd(P.questType+"Claimed",!0),{...P,claimed:!0}):P)),u(null)},600)},v=N=>{switch(N){case"Easy":return"#10B981";case"Medium":return"#F59E0B";case"Hard":return"#EF4444";default:return"#6B7280"}},g=()=>{const N=new Date,C=new Date(N);C.setDate(C.getDate()+1),C.setHours(5,0,0,0);const P=C-N,E=Math.floor(P/(1e3*60*60)),h=Math.floor(P%(1e3*60*60)/(1e3*60));return`${E}h ${h}m`};return n.jsxs("div",{className:"quests-screen",children:[j&&n.jsx(Si,{startRect:j.startRect,targetRef:m,count:j.count,onDone:()=>{l(N=>N+j.amount),ce.addCoins(j.amount,`Quest Reward: ${j.questTitle||"Completed"}`),x(null)}}),n.jsx("style",{jsx:!0,children:`
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
      `}),n.jsxs("div",{className:"animated-bg",children:[n.jsx("div",{className:"floating-icon",children:"🎮"}),n.jsx("div",{className:"floating-icon",children:"🎯"}),n.jsx("div",{className:"floating-icon",children:"🏆"}),n.jsx("div",{className:"floating-icon",children:"⭐"})]}),n.jsxs("div",{className:"header",children:[n.jsx("button",{className:"back-button",onClick:S,children:"← Back"}),n.jsxs("div",{className:"coins-display",ref:m,children:["🪙 ",o]}),n.jsxs("div",{className:"title-section",children:[n.jsx("h1",{className:"main-title",children:"Daily Quests"}),n.jsx("p",{className:"subtitle",children:"Complete challenges, earn rewards!"})]})]}),n.jsxs("div",{className:"daily-progress-card",children:[n.jsxs("div",{className:"progress-header",children:[n.jsx("span",{className:"progress-label",children:"Today's Progress"}),n.jsxs("span",{className:"progress-value",children:[f,"%"]})]}),n.jsx("div",{className:"progress-bar-container",children:n.jsx("div",{className:"progress-bar-fill",style:{width:`${f}%`}})})]}),n.jsx("div",{className:"quests-list",children:a.map(N=>{const C=Math.min(100,Math.round(N.progress/N.target*100)),P=C===100,E=N.color+"CC";return n.jsxs("div",{className:`quest-card ${P?"completed":""}`,style:{"--quest-color":N.color,"--quest-color-dark":E},children:[n.jsx("div",{className:"quest-accent"}),P&&N.claimed&&n.jsx("div",{className:"completed-checkmark",children:"✓"}),n.jsxs("div",{className:"quest-content",children:[n.jsx("div",{className:`quest-icon-container ${c===N.id?"animating":""}`,children:N.icon}),n.jsxs("div",{className:"quest-details",children:[n.jsxs("div",{className:"quest-header",children:[n.jsx("span",{className:"quest-title",children:N.title}),n.jsx("span",{className:"difficulty-badge",style:{background:`${v(N.difficulty)}20`,color:v(N.difficulty)},children:N.difficulty})]}),n.jsxs("div",{className:"progress-info",children:[n.jsx("div",{className:"mini-progress-bar",children:n.jsx("div",{className:"mini-progress-fill",style:{width:`${C}%`}})}),n.jsxs("div",{className:"progress-text",children:[n.jsxs("span",{className:"progress-numbers",children:[N.progress,"/",N.target]}),n.jsxs("span",{className:"reward-display",children:["🪙 ",N.reward]})]})]})]}),n.jsx("button",{onClick:()=>{P&&!N.claimed?y(N):P||w(N)},disabled:N.claimed,className:`action-button ${N.claimed?"claimed":P?"can-claim":"in-progress"}`,style:!P&&!N.claimed?{"--quest-color":N.color,"--quest-color-dark":E}:{},children:N.claimed?"✓":P?"Claim":"Do it"})]})]},N.id)})}),n.jsxs("div",{className:"timer-card",children:[n.jsx("div",{className:"timer-icon",children:"⏰"}),n.jsx("div",{className:"timer-label",children:"New Quests In"}),n.jsx("div",{className:"timer-value",children:g()})]}),c&&n.jsx("div",{className:"reward-animation",children:"🪙"})]})}function uc({title:e,subtitle:t,children:r}){const s=_e();return n.jsxs("div",{className:"min-h-full bg-black text-white px-4 pt-12",children:[n.jsxs("div",{className:"flex items-center justify-between mb-4",children:[n.jsx("button",{onClick:()=>s(-1),className:"px-3 py-1.5 rounded-xl border border-white/10 bg-white/5 text-sm",children:"← Back"}),n.jsxs("div",{className:"text-center",children:[n.jsx("div",{className:"text-base font-semibold leading-tight",children:e}),t&&n.jsx("div",{className:"text-xs text-white/60 leading-tight",children:t})]}),n.jsx("div",{className:"w-[68px]"})]}),r]})}function Qv(){const e=_e(),[t,r]=d.useState(!0),[s,a]=d.useState(!0),[i,o]=d.useState(!0),[l,c]=d.useState(!1),[u,f]=d.useState("");d.useEffect(()=>{const m=Ve.getCurrentUser();m&&m.phone&&f(m.phone)},[]);const p=()=>{const j=JSON.parse(localStorage.getItem("currentUser")||"{}").phone;localStorage.removeItem("currentUser"),localStorage.removeItem("qp_player"),localStorage.removeItem("rememberCredentials"),sessionStorage.clear(),j?e("/auth/signin",{replace:!0,state:{phone:j}}):e("/auth",{replace:!0})};return n.jsxs(n.Fragment,{children:[n.jsx(uc,{title:"Settings",subtitle:"Make it yours",children:n.jsx("div",{className:"flex flex-col justify-center min-h-[calc(100vh-200px)]",children:n.jsxs("div",{className:"space-y-4",children:[n.jsxs("div",{className:"rounded-3xl border border-white/10 bg-gradient-to-br from-purple-900/20 to-indigo-900/20 backdrop-blur-sm p-2",children:[n.jsx("div",{className:"px-4 pt-3 pb-1",children:n.jsx("h3",{className:"text-xs font-semibold text-white/50 uppercase tracking-wider",children:"Preferences"})}),n.jsxs("div",{className:"divide-y divide-white/10",children:[n.jsx(hr,{icon:"🔊",label:"Sound",subtitle:"Game sounds & effects",right:n.jsx(ao,{on:t,set:r})}),n.jsx(hr,{icon:"📳",label:"Haptics",subtitle:"Vibration feedback",right:n.jsx(ao,{on:s,set:a})}),n.jsx(hr,{icon:"🔔",label:"Notifications",subtitle:"Daily reminders",right:n.jsx(ao,{on:i,set:o})})]})]}),n.jsxs("div",{className:"rounded-3xl border border-white/10 bg-gradient-to-br from-blue-900/20 to-purple-900/20 backdrop-blur-sm p-2",children:[n.jsx("div",{className:"px-4 pt-3 pb-1",children:n.jsx("h3",{className:"text-xs font-semibold text-white/50 uppercase tracking-wider",children:"Account"})}),n.jsxs("div",{className:"divide-y divide-white/10",children:[n.jsx(hr,{icon:"📱",label:"Phone Number",subtitle:u||"Not available",right:n.jsx("span",{className:"text-white/40 text-sm",children:"🔒"})}),n.jsx(hr,{icon:"✏️",label:"Edit Profile",subtitle:"Update your details",right:n.jsx("span",{className:"text-white/40 text-lg",children:"→"}),onClick:()=>e("/profile/edit")}),n.jsx(hr,{icon:"🔒",label:"Privacy Policy",subtitle:"Your data is safe",right:n.jsx("span",{className:"text-white/40 text-lg",children:"→"}),onClick:()=>e("/profile/privacy")})]})]}),n.jsxs("button",{className:`w-full rounded-3xl border border-red-500/30 bg-gradient-to-r from-red-900/30 to-pink-900/30 
                       py-4 text-red-300 font-semibold backdrop-blur-sm
                       transition-all duration-200 hover:from-red-900/40 hover:to-pink-900/40 
                       active:scale-[0.98] flex items-center justify-center gap-2`,onClick:()=>c(!0),children:[n.jsx("span",{children:"🚪"}),n.jsx("span",{children:"Sign Out"})]})]})})}),l&&n.jsx("div",{className:"fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-6 z-50",children:n.jsxs("div",{className:"bg-gradient-to-br from-gray-900 to-purple-900 rounded-3xl p-6 w-full max-w-sm border border-white/20 shadow-2xl",children:[n.jsxs("div",{className:"text-center mb-6",children:[n.jsx("div",{className:"text-5xl mb-4 animate-bounce",children:"👋"}),n.jsx("h3",{className:"text-xl font-bold mb-2 text-white",children:"Leaving Already?"}),n.jsx("p",{className:"text-white/60 text-sm",children:"You'll need to sign in again to continue your quiz journey"})]}),n.jsxs("div",{className:"flex gap-3",children:[n.jsx("button",{onClick:()=>c(!1),className:`flex-1 py-3 rounded-2xl bg-white/10 hover:bg-white/20 
                         transition-all duration-200 font-semibold text-white`,children:"Stay"}),n.jsx("button",{onClick:p,className:`flex-1 py-3 rounded-2xl bg-gradient-to-r from-red-500 to-pink-500 
                         hover:from-red-600 hover:to-pink-600 transition-all duration-200 
                         font-semibold text-white shadow-lg`,children:"Sign Out"})]})]})})]})}function hr({icon:e,label:t,subtitle:r,right:s,onClick:a}){return n.jsxs("button",{type:"button",onClick:a,className:`w-full flex items-center justify-between px-4 py-4 text-left
                 hover:bg-white/5 first:rounded-t-2xl last:rounded-b-2xl transition-all duration-200`,children:[n.jsxs("div",{className:"flex items-center gap-3",children:[e&&n.jsx("span",{className:"text-xl",children:e}),n.jsxs("div",{children:[n.jsx("div",{className:"text-sm font-semibold text-white",children:t}),r&&n.jsx("div",{className:"text-xs text-white/50 mt-0.5",children:r})]})]}),s]})}function ao({on:e,set:t}){return n.jsx("span",{onClick:r=>{r.stopPropagation(),t(s=>!s),navigator.vibrate&&navigator.vibrate(10)},className:["inline-flex w-12 h-7 items-center rounded-full transition-all duration-300 px-1 shadow-inner",e?"bg-gradient-to-r from-green-400 to-emerald-500 justify-end":"bg-gray-600 justify-start"].join(" "),role:"switch","aria-checked":e,children:n.jsx("span",{className:["w-5 h-5 rounded-full bg-white shadow-md transition-transform duration-300",e?"scale-110":"scale-100"].join(" ")})})}/*! Capacitor: https://capacitorjs.com/ - MIT License */var Br;(function(e){e.Unimplemented="UNIMPLEMENTED",e.Unavailable="UNAVAILABLE"})(Br||(Br={}));class io extends Error{constructor(t,r,s){super(t),this.message=t,this.code=r,this.data=s}}const Wv=e=>{var t,r;return e!=null&&e.androidBridge?"android":!((r=(t=e==null?void 0:e.webkit)===null||t===void 0?void 0:t.messageHandlers)===null||r===void 0)&&r.bridge?"ios":"web"},Gv=e=>{const t=e.CapacitorCustomPlatform||null,r=e.Capacitor||{},s=r.Plugins=r.Plugins||{},a=()=>t!==null?t.name:Wv(e),i=()=>a()!=="web",o=p=>{const m=u.get(p);return!!(m!=null&&m.platforms.has(a())||l(p))},l=p=>{var m;return(m=r.PluginHeaders)===null||m===void 0?void 0:m.find(j=>j.name===p)},c=p=>e.console.error(p),u=new Map,f=(p,m={})=>{const j=u.get(p);if(j)return console.warn(`Capacitor plugin "${p}" already registered. Cannot register plugins twice.`),j.proxy;const x=a(),w=l(p);let S;const y=async()=>(!S&&x in m?S=typeof m[x]=="function"?S=await m[x]():S=m[x]:t!==null&&!S&&"web"in m&&(S=typeof m.web=="function"?S=await m.web():S=m.web),S),v=(h,b)=>{var k,T;if(w){const R=w==null?void 0:w.methods.find(B=>b===B.name);if(R)return R.rtype==="promise"?B=>r.nativePromise(p,b.toString(),B):(B,Q)=>r.nativeCallback(p,b.toString(),B,Q);if(h)return(k=h[b])===null||k===void 0?void 0:k.bind(h)}else{if(h)return(T=h[b])===null||T===void 0?void 0:T.bind(h);throw new io(`"${p}" plugin is not implemented on ${x}`,Br.Unimplemented)}},g=h=>{let b;const k=(...T)=>{const R=y().then(B=>{const Q=v(B,h);if(Q){const H=Q(...T);return b=H==null?void 0:H.remove,H}else throw new io(`"${p}.${h}()" is not implemented on ${x}`,Br.Unimplemented)});return h==="addListener"&&(R.remove=async()=>b()),R};return k.toString=()=>`${h.toString()}() { [capacitor code] }`,Object.defineProperty(k,"name",{value:h,writable:!1,configurable:!1}),k},N=g("addListener"),C=g("removeListener"),P=(h,b)=>{const k=N({eventName:h},b),T=async()=>{const B=await k;C({eventName:h,callbackId:B},b)},R=new Promise(B=>k.then(()=>B({remove:T})));return R.remove=async()=>{console.warn("Using addListener() without 'await' is deprecated."),await T()},R},E=new Proxy({},{get(h,b){switch(b){case"$$typeof":return;case"toJSON":return()=>({});case"addListener":return w?P:N;case"removeListener":return C;default:return g(b)}}});return s[p]=E,u.set(p,{name:p,proxy:E,platforms:new Set([...Object.keys(m),...w?[x]:[]])}),E};return r.convertFileSrc||(r.convertFileSrc=p=>p),r.getPlatform=a,r.handleError=c,r.isNativePlatform=i,r.isPluginAvailable=o,r.registerPlugin=f,r.Exception=io,r.DEBUG=!!r.DEBUG,r.isLoggingEnabled=!!r.isLoggingEnabled,r},Hv=e=>e.Capacitor=Gv(e),al=Hv(typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}),fc=al.registerPlugin;class Dm{constructor(){this.listeners={},this.retainedEventArguments={},this.windowListeners={}}addListener(t,r){let s=!1;this.listeners[t]||(this.listeners[t]=[],s=!0),this.listeners[t].push(r);const i=this.windowListeners[t];i&&!i.registered&&this.addWindowListener(i),s&&this.sendRetainedArgumentsForEvent(t);const o=async()=>this.removeListener(t,r);return Promise.resolve({remove:o})}async removeAllListeners(){this.listeners={};for(const t in this.windowListeners)this.removeWindowListener(this.windowListeners[t]);this.windowListeners={}}notifyListeners(t,r,s){const a=this.listeners[t];if(!a){if(s){let i=this.retainedEventArguments[t];i||(i=[]),i.push(r),this.retainedEventArguments[t]=i}return}a.forEach(i=>i(r))}hasListeners(t){var r;return!!(!((r=this.listeners[t])===null||r===void 0)&&r.length)}registerWindowListener(t,r){this.windowListeners[r]={registered:!1,windowEventName:t,pluginEventName:r,handler:s=>{this.notifyListeners(r,s)}}}unimplemented(t="not implemented"){return new al.Exception(t,Br.Unimplemented)}unavailable(t="not available"){return new al.Exception(t,Br.Unavailable)}async removeListener(t,r){const s=this.listeners[t];if(!s)return;const a=s.indexOf(r);this.listeners[t].splice(a,1),this.listeners[t].length||this.removeWindowListener(this.windowListeners[t])}addWindowListener(t){window.addEventListener(t.windowEventName,t.handler),t.registered=!0}removeWindowListener(t){t&&(window.removeEventListener(t.windowEventName,t.handler),t.registered=!1)}sendRetainedArgumentsForEvent(t){const r=this.retainedEventArguments[t];r&&(delete this.retainedEventArguments[t],r.forEach(s=>{this.notifyListeners(t,s)}))}}const Wd=e=>encodeURIComponent(e).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape),Gd=e=>e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent);class Kv extends Dm{async getCookies(){const t=document.cookie,r={};return t.split(";").forEach(s=>{if(s.length<=0)return;let[a,i]=s.replace(/=/,"CAP_COOKIE").split("CAP_COOKIE");a=Gd(a).trim(),i=Gd(i).trim(),r[a]=i}),r}async setCookie(t){try{const r=Wd(t.key),s=Wd(t.value),a=`; expires=${(t.expires||"").replace("expires=","")}`,i=(t.path||"/").replace("path=",""),o=t.url!=null&&t.url.length>0?`domain=${t.url}`:"";document.cookie=`${r}=${s||""}${a}; path=${i}; ${o};`}catch(r){return Promise.reject(r)}}async deleteCookie(t){try{document.cookie=`${t.key}=; Max-Age=0`}catch(r){return Promise.reject(r)}}async clearCookies(){try{const t=document.cookie.split(";")||[];for(const r of t)document.cookie=r.replace(/^ +/,"").replace(/=.*/,`=;expires=${new Date().toUTCString()};path=/`)}catch(t){return Promise.reject(t)}}async clearAllCookies(){try{await this.clearCookies()}catch(t){return Promise.reject(t)}}}fc("CapacitorCookies",{web:()=>new Kv});const Vv=async e=>new Promise((t,r)=>{const s=new FileReader;s.onload=()=>{const a=s.result;t(a.indexOf(",")>=0?a.split(",")[1]:a)},s.onerror=a=>r(a),s.readAsDataURL(e)}),Xv=(e={})=>{const t=Object.keys(e);return Object.keys(e).map(a=>a.toLocaleLowerCase()).reduce((a,i,o)=>(a[i]=e[t[o]],a),{})},Jv=(e,t=!0)=>e?Object.entries(e).reduce((s,a)=>{const[i,o]=a;let l,c;return Array.isArray(o)?(c="",o.forEach(u=>{l=t?encodeURIComponent(u):u,c+=`${i}=${l}&`}),c.slice(0,-1)):(l=t?encodeURIComponent(o):o,c=`${i}=${l}`),`${s}&${c}`},"").substr(1):null,Zv=(e,t={})=>{const r=Object.assign({method:e.method||"GET",headers:e.headers},t),a=Xv(e.headers)["content-type"]||"";if(typeof e.data=="string")r.body=e.data;else if(a.includes("application/x-www-form-urlencoded")){const i=new URLSearchParams;for(const[o,l]of Object.entries(e.data||{}))i.set(o,l);r.body=i.toString()}else if(a.includes("multipart/form-data")||e.data instanceof FormData){const i=new FormData;if(e.data instanceof FormData)e.data.forEach((l,c)=>{i.append(c,l)});else for(const l of Object.keys(e.data))i.append(l,e.data[l]);r.body=i;const o=new Headers(r.headers);o.delete("content-type"),r.headers=o}else(a.includes("application/json")||typeof e.data=="object")&&(r.body=JSON.stringify(e.data));return r};class ey extends Dm{async request(t){const r=Zv(t,t.webFetchExtra),s=Jv(t.params,t.shouldEncodeUrlParams),a=s?`${t.url}?${s}`:t.url,i=await fetch(a,r),o=i.headers.get("content-type")||"";let{responseType:l="text"}=i.ok?t:{};o.includes("application/json")&&(l="json");let c,u;switch(l){case"arraybuffer":case"blob":u=await i.blob(),c=await Vv(u);break;case"json":c=await i.json();break;case"document":case"text":default:c=await i.text()}const f={};return i.headers.forEach((p,m)=>{f[m]=p}),{data:c,headers:f,status:i.status,url:i.url}}async get(t){return this.request(Object.assign(Object.assign({},t),{method:"GET"}))}async post(t){return this.request(Object.assign(Object.assign({},t),{method:"POST"}))}async put(t){return this.request(Object.assign(Object.assign({},t),{method:"PUT"}))}async patch(t){return this.request(Object.assign(Object.assign({},t),{method:"PATCH"}))}async delete(t){return this.request(Object.assign(Object.assign({},t),{method:"DELETE"}))}}fc("CapacitorHttp",{web:()=>new ey});const Hd=fc("App",{web:()=>ec(()=>import("./web-92aace12.js"),[]).then(e=>new e.AppWeb)});function ty(){const e=_e(),[t,r]=d.useState(!1),[s,a]=d.useState(!1),[i,o]=d.useState(!1),[l,c]=d.useState({name:"",phone:"",gender:"",ageGroup:"",city:"",email:"",state:"",country:""}),[u,f]=d.useState({name:"",phone:"",gender:"",ageGroup:"",city:"",email:"",state:"",country:""});d.useEffect(()=>{const w=JSON.parse(localStorage.getItem("currentUser")||"{}");if(!w.phone){const N=JSON.parse(localStorage.getItem("users")||"{}"),C=Object.keys(N).find(P=>N[P].username===w.username);if(C)w.phone=C,localStorage.setItem("currentUser",JSON.stringify(w));else{e("/profile");return}}const S=Ve.getUserData(w.phone);S.password;const y=JSON.parse(localStorage.getItem(`user_profile_${w.phone}`)||"{}"),v=N=>N?N.charAt(0).toUpperCase()+N.slice(1).toLowerCase():"",g={name:y.name||w.username||S.username||"",phone:w.phone||"",gender:v(y.gender||w.gender||S.gender||""),ageGroup:y.ageGroup||w.ageGroup||S.ageGroup||"",city:y.city||"",email:y.email||"",state:y.state||"",country:y.country||""};c(g),f(g)},[e]),d.useEffect(()=>{if(t){const w=JSON.stringify(l)!==JSON.stringify(u);o(w)}},[u,l,t]);const p=()=>{r(!0),f({...l}),o(!1)},m=()=>{r(!1),f({...l}),o(!1)},j=()=>{const w=JSON.parse(localStorage.getItem("currentUser")||"{}");if(!w.phone)return;Ve.updateUserProfile(w.phone,u)&&(c({...u}),r(!1),o(!1),a(!0),setTimeout(()=>a(!1),3e3))},x=(w,S)=>{f(y=>({...y,[w]:S}))};return n.jsxs(uc,{title:"Edit Profile",subtitle:"Update your information",children:[s&&n.jsx("div",{className:"fixed inset-0 flex items-center justify-center z-50 pointer-events-none",children:n.jsx("div",{className:"bg-green-500/20 border border-green-500/50 rounded-2xl px-8 py-4 backdrop-blur-sm animate-bounce",children:n.jsxs("div",{className:"flex items-center gap-2 text-green-400 font-semibold text-lg",children:[n.jsx("span",{children:"Profile updated"}),n.jsx("span",{className:"text-2xl",children:"✓"})]})})}),n.jsx("div",{className:"flex flex-col justify-center min-h-[calc(100vh-200px)]",children:n.jsxs("div",{className:"space-y-4",children:[n.jsxs("div",{className:"rounded-3xl border border-white/10 bg-gradient-to-br from-purple-900/20 to-indigo-900/20 backdrop-blur-sm p-4",children:[n.jsx("h3",{className:"text-xs font-semibold text-white/50 uppercase tracking-wider mb-4",children:"Basic Information"}),n.jsxs("div",{className:"space-y-3",children:[n.jsx(kn,{label:"Name",value:t?u.name:l.name,onChange:w=>x("name",w),placeholder:"Your full name",disabled:!t}),n.jsx(kn,{label:"Phone",value:l.phone,disabled:!0,icon:"🔒",helperText:"Cannot be changed"}),n.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[t?n.jsxs("div",{children:[n.jsx("label",{className:"text-xs text-white/60 mb-1 block",children:"Gender"}),n.jsxs("select",{value:u.gender||"",onChange:w=>x("gender",w.target.value),className:`w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 
                                text-white transition-all duration-200 hover:bg-white/10 
                                focus:bg-white/10 focus:border-white/30 focus:outline-none`,children:[n.jsx("option",{value:"",children:"Not set"}),n.jsx("option",{value:"Male",children:"Male"}),n.jsx("option",{value:"Female",children:"Female"}),n.jsx("option",{value:"Other",children:"Other"})]})]}):n.jsx(kn,{label:"Gender",value:l.gender||"Not set",disabled:!0}),t?n.jsxs("div",{children:[n.jsx("label",{className:"text-xs text-white/60 mb-1 block",children:"Age Group"}),n.jsxs("select",{value:u.ageGroup||"",onChange:w=>x("ageGroup",w.target.value),className:`w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 
                                text-white transition-all duration-200 hover:bg-white/10 
                                focus:bg-white/10 focus:border-white/30 focus:outline-none`,children:[n.jsx("option",{value:"",children:"Not set"}),n.jsx("option",{value:"under-5",children:"Under 5 yrs"}),n.jsx("option",{value:"5-10",children:"5-10 yrs"}),n.jsx("option",{value:"11-15",children:"11-15 yrs"}),n.jsx("option",{value:"16-20",children:"16-20 yrs"}),n.jsx("option",{value:"20+",children:"20+ yrs"})]})]}):n.jsx(kn,{label:"Age Group",value:l.ageGroup||"Not set",disabled:!0})]})]})]}),n.jsxs("div",{className:"rounded-3xl border border-white/10 bg-gradient-to-br from-blue-900/20 to-purple-900/20 backdrop-blur-sm p-4",children:[n.jsx("h3",{className:"text-xs font-semibold text-white/50 uppercase tracking-wider mb-4",children:"Contact & Location"}),n.jsxs("div",{className:"space-y-3",children:[n.jsx(kn,{label:"Email",value:t?u.email:l.email,onChange:w=>x("email",w),placeholder:"yourname@example.com",type:"email",helperText:t?"Optional":l.email?"":"Not provided",disabled:!t}),n.jsx(kn,{label:"City",value:t?u.city:l.city,onChange:w=>x("city",w),placeholder:"Add your city name",disabled:!t}),n.jsx(kn,{label:"State",value:t?u.state:l.state,onChange:w=>x("state",w),placeholder:"Your state/province",disabled:!t}),n.jsx(kn,{label:"Country",value:t?u.country:l.country,onChange:w=>x("country",w),placeholder:"Your country",disabled:!t})]})]}),t?n.jsxs("div",{className:"flex gap-3",children:[n.jsx("button",{onClick:m,className:`flex-1 py-3 rounded-2xl bg-white/10 hover:bg-white/20 
                         transition-all duration-200 font-semibold text-white`,children:"Cancel"}),n.jsx("button",{onClick:j,disabled:!i,className:`flex-1 py-3 rounded-2xl font-semibold text-white shadow-lg
                         transition-all duration-200 ${i?"bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 cursor-pointer":"bg-gray-600 cursor-not-allowed opacity-50"}`,children:"Save Changes"})]}):n.jsx("button",{onClick:p,className:`w-full py-3 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 
                       hover:from-purple-600 hover:to-pink-600 transition-all duration-200 
                       font-semibold text-white shadow-lg`,children:"Edit"})]})})]})}function kn({label:e,value:t,onChange:r,disabled:s,placeholder:a,type:i="text",icon:o,helperText:l}){return n.jsxs("div",{children:[n.jsx("label",{className:"text-xs text-white/60 mb-1 block",children:e}),n.jsxs("div",{className:"relative",children:[n.jsx("input",{type:i,value:t||"",onChange:c=>r&&r(c.target.value),disabled:s,placeholder:a,className:`w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 
                   text-white placeholder-white/30 transition-all duration-200
                   ${s?"opacity-50 cursor-not-allowed":"hover:bg-white/10 focus:bg-white/10 focus:border-white/30 focus:outline-none"}`}),o&&n.jsx("span",{className:"absolute right-3 top-1/2 -translate-y-1/2 text-white/50",children:o})]}),l&&n.jsx("p",{className:"text-xs text-white/40 mt-1",children:l})]})}function ny(){const e=_e();return n.jsx(uc,{title:"Privacy Policy",subtitle:"Your data, your control",children:n.jsx("div",{className:"flex flex-col justify-center min-h-[calc(100vh-200px)]",children:n.jsx("div",{className:"rounded-3xl border border-white/10 bg-gradient-to-br from-purple-900/20 to-indigo-900/20 backdrop-blur-sm p-8",children:n.jsxs("div",{className:"text-center",children:[n.jsx("div",{className:"text-6xl mb-4",children:"🔒"}),n.jsx("h2",{className:"text-2xl font-bold text-white mb-2",children:"Privacy Policy"}),n.jsx("p",{className:"text-white/60 text-lg mb-6",children:"Will be updated soon"}),n.jsxs("div",{className:"space-y-3 text-left text-white/50 text-sm",children:[n.jsx("p",{children:"• Your data is encrypted and secure"}),n.jsx("p",{children:"• We never share your personal information"}),n.jsx("p",{children:"• You can delete your account anytime"}),n.jsx("p",{children:"• Minimal data collection for best experience"})]}),n.jsx("button",{onClick:()=>e(-1),className:`mt-8 px-8 py-3 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 
                       hover:from-purple-600 hover:to-pink-600 transition-all duration-200 
                       font-semibold text-white shadow-lg`,children:"Got it"})]})})})})}const ry=async e=>!!JSON.parse(localStorage.getItem("users")||"{}")[e],sy=e=>JSON.parse(localStorage.getItem("users")||"{}")[e],ay=()=>!!localStorage.getItem("currentUser");function iy(){const e=_e(),t=Je(),[r,s]=d.useState(()=>{var p;return sessionStorage.getItem("tempPhone")||((p=t.state)==null?void 0:p.phone)||""}),[a,i]=d.useState(()=>sessionStorage.getItem("tempCountryCode")||"+91"),[o,l]=d.useState(!1),[c,u]=d.useState("");d.useEffect(()=>{sessionStorage.setItem("tempPhone",r),sessionStorage.setItem("tempCountryCode",a)},[r,a]);const f=async()=>{u("");const p=r.replace(/\D/g,"");if(p.length!==10){u("Please enter a 10 digit phone number");return}l(!0);const m=a+p;await ry(m)?e("/auth/signin",{state:{phone:m}}):e("/auth/avatar",{state:{phone:m}}),l(!1)};return d.useEffect(()=>{var p,m;if(!((p=t.state)!=null&&p.preventAutoSubmit)&&!((m=t.state)!=null&&m.fromAvatar)&&r&&r.length===10){const j=setTimeout(()=>{f()},500);return()=>clearTimeout(j)}},[]),n.jsxs("div",{className:"auth-screen",style:{background:"linear-gradient(135deg, #aa529bff 0%, #6d4397ff 100%)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},children:[n.jsxs("div",{className:"decorative-icons",children:[n.jsx("div",{className:"floating-icon",style:{top:"5%",left:"10%",animationDelay:"0s"},children:"🎮"}),n.jsx("div",{className:"floating-icon",style:{top:"15%",right:"10%",animationDelay:"5s"},children:"🏆"}),n.jsx("div",{className:"floating-icon",style:{top:"20%",left:"15%",animationDelay:"10s"},children:"⭐"}),n.jsx("div",{className:"floating-icon",style:{top:"75%",right:"20%",animationDelay:"15s"},children:"🎯"}),n.jsx("div",{className:"floating-icon",style:{top:"85%",left:"25%",animationDelay:"20s"},children:"🪙"})]}),n.jsx("div",{className:"mascot",style:{display:"flex",alignItems:"center",justifyContent:"center",marginBottom:"24px"},children:n.jsx("div",{style:{fontSize:"100px"},children:"🎮"})}),n.jsxs("div",{className:"content-card",children:[n.jsx("h1",{className:"title",children:"Ready to Play?"}),n.jsx("p",{className:"subtitle",children:"Enter your phone to start!"}),n.jsxs("div",{className:"phone-input-group",style:{display:"flex",gap:"8px",marginBottom:"24px",alignItems:"center",justifyContent:"center"},children:[n.jsxs("select",{className:"country-select",value:a,onChange:p=>i(p.target.value),style:{width:"auto",minWidth:"95px",padding:"16px 8px",border:"2px solid #e2e8f0",borderRadius:"16px",fontSize:"16px",fontWeight:"600",background:"white",transition:"all 0.3s",color:"#333",textAlign:"center"},children:[n.jsx("option",{value:"+91",children:"🇮🇳 +91"}),n.jsx("option",{value:"+1",children:"🇺🇸 +1"}),n.jsx("option",{value:"+44",children:"🇬🇧 +44"}),n.jsx("option",{value:"+86",children:"🇨🇳 +86"}),n.jsx("option",{value:"+81",children:"🇯🇵 +81"})]}),n.jsx("input",{type:"tel",className:"phone-input",placeholder:"Phone number",value:r,onChange:p=>{const m=p.target.value.replace(/\D/g,"");m.length<=10&&(s(m),c&&u(""))},maxLength:"10",inputMode:"numeric",pattern:"[0-9]*",style:{flex:1,padding:"16px",paddingLeft:"12px",border:"2px solid #e2e8f0",borderRadius:"16px",fontSize:"18px",fontWeight:"600",transition:"all 0.3s",background:"white",color:"#333",WebkitTextFillColor:"#333"}})]}),r.length>0&&r.length<10&&n.jsxs("p",{style:{color:"#f59e0b",fontSize:"14px",textAlign:"center",marginTop:"-16px",marginBottom:"16px"},children:["Enter ",10-r.length," more digit",10-r.length>1?"s":""]}),n.jsxs("button",{className:"submit-button",onClick:f,disabled:o,style:{width:"100%",padding:"18px",background:r.length===10?"linear-gradient(135deg, #667eea 0%, #764ba2 100%)":"linear-gradient(135deg, #94a3b8 0%, #cbd5e1 100%)",color:"white",border:"none",borderRadius:"16px",fontSize:"18px",fontWeight:"700",cursor:r.length===10?"pointer":"not-allowed",transition:"all 0.3s",display:"flex",alignItems:"center",justifyContent:"center",gap:"8px"},children:[o?"Loading...":"Start Adventure!",n.jsx("span",{children:"→"})]}),c&&n.jsx("p",{className:"error-message",style:{color:"#ef4444",fontSize:"14px",textAlign:"center",marginTop:"12px",fontWeight:"600"},children:c})]})]})}function oy(){const e=Je(),t=_e(),{phone:r}=e.state||{},[s,a]=d.useState(""),[i,o]=d.useState(!1),[l,c]=d.useState(""),[u,f]=d.useState(!1),[p,m]=d.useState(!1),[j,x]=d.useState(""),w=sy(r),[S,y]=d.useState(!1),[v,g]=d.useState(""),[N,C]=d.useState(!1);d.useEffect(()=>{if(localStorage.getItem("rememberCredentials")==="true"&&m(!0),r){const R=JSON.parse(localStorage.getItem(`user_profile_${r}`)||"{}"),Q=JSON.parse(localStorage.getItem("users")||"{}")[r]||{},H=R.name||Q.username||(w==null?void 0:w.username)||"";x(H)}},[r,w]);const P=async()=>{if(!s){c("Please enter your password");return}f(!0),c(""),await new Promise(T=>setTimeout(T,500)),w&&w.password===s?(Ve.setCurrentUser(r),p&&localStorage.setItem("rememberCredentials","true"),t("/",{replace:!0})):(c("Wrong password"),f(!1),setTimeout(()=>c(""),3e3))},E=()=>{alert("OTP feature coming soon!")},h=()=>{sessionStorage.removeItem("tempPhone"),sessionStorage.removeItem("tempCountryCode");const T=(r==null?void 0:r.slice(-10))||"";t("/auth",{replace:!0,state:{phone:T,preventAutoSubmit:!0}})},b=()=>{sessionStorage.removeItem("tempPhone"),sessionStorage.removeItem("tempCountryCode"),t("/auth",{replace:!0,state:{isNewAccount:!0}})},k=T=>{T.key==="Enter"&&P()};return n.jsxs("div",{className:"auth-screen",style:{background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)"},children:[n.jsx("button",{className:"back-button",onClick:h,style:{position:"absolute",top:"40px",left:"20px",background:"rgba(255,255,255,0.2)",border:"none",borderRadius:"50%",width:"40px",height:"40px",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",zIndex:10,backdropFilter:"blur(10px)",transition:"all 0.3s ease"},onMouseEnter:T=>T.target.style.background="rgba(255,255,255,0.3)",onMouseLeave:T=>T.target.style.background="rgba(255,255,255,0.2)",children:n.jsx("span",{style:{fontSize:"24px",color:"white"},children:"‹"})}),n.jsxs("div",{className:"decorative-icons",children:[n.jsx("div",{className:"floating-icon",style:{top:"10%",left:"5%",animationDelay:"0s"},children:"🎮"}),n.jsx("div",{className:"floating-icon",style:{top:"20%",right:"10%",animationDelay:"2s"},children:"🏆"}),n.jsx("div",{className:"floating-icon",style:{top:"70%",left:"8%",animationDelay:"4s"},children:"⭐"}),n.jsx("div",{className:"floating-icon",style:{top:"80%",right:"5%",animationDelay:"6s"},children:"🎯"})]}),n.jsxs("div",{className:"content-card",style:{background:"rgba(255, 255, 255, 0.95)",backdropFilter:"blur(20px)",borderRadius:"32px",padding:"32px",width:"90%",maxWidth:"400px",boxShadow:"0 20px 60px rgba(0, 0, 0, 0.3)",margin:"0 auto"},children:[(w==null?void 0:w.avatar)&&n.jsx("div",{style:{fontSize:"60px",textAlign:"center",marginBottom:"16px",animation:"bounce 2s infinite"},children:w.avatar.emoji}),n.jsxs("div",{className:"welcome-back",children:[n.jsx("h1",{className:"title",style:{fontSize:"28px",fontWeight:"800",textAlign:"center",marginBottom:"8px",background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"},children:"Welcome Back! 👋"}),n.jsx("p",{className:"subtitle",style:{fontSize:"16px",color:"#64748b",textAlign:"center",marginBottom:"24px"},children:j?`Hey ${j}!`:"Good to see you again!"})]}),n.jsx("div",{className:"phone-display",style:{fontSize:"18px",fontWeight:"600",color:"#667eea",marginBottom:"24px",textAlign:"center",padding:"12px",background:"rgba(102, 126, 234, 0.1)",borderRadius:"12px"},children:r}),n.jsxs("div",{style:{position:"relative",marginBottom:"16px"},children:[n.jsx("input",{type:i?"text":"password",className:"phone-input",placeholder:"Enter your password",value:s,onChange:T=>{a(T.target.value),l&&c("")},onKeyPress:k,style:{width:"100%",paddingRight:"45px",border:l?"2px solid #ef4444":"2px solid #e2e8f0",color:"#333",fontSize:"16px",WebkitTextFillColor:"#333",backgroundColor:"white"},autoFocus:!0}),n.jsx("button",{type:"button",onClick:()=>o(!i),style:{position:"absolute",right:"12px",top:"50%",transform:"translateY(-50%)",background:"none",border:"none",cursor:"pointer",padding:"5px",fontSize:"20px",color:"#667eea"},"aria-label":i?"Hide password":"Show password",children:i?"👁️":"👁️‍🗨️"})]}),n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",marginBottom:"20px"},children:[n.jsx("input",{type:"checkbox",id:"rememberMe",checked:p,onChange:T=>m(T.target.checked),style:{width:"18px",height:"18px",cursor:"pointer",accentColor:"#667eea"}}),n.jsx("label",{htmlFor:"rememberMe",style:{fontSize:"14px",color:"#64748b",cursor:"pointer",userSelect:"none"},children:"Remember me"})]}),l&&n.jsxs("div",{style:{color:"#f59e0b",fontSize:"13px",textAlign:"center",marginTop:"-12px",marginBottom:"16px",fontWeight:"500"},children:["⚠️ ",l]}),n.jsx("button",{className:"submit-button",onClick:P,disabled:u,style:{width:"100%",padding:"18px",background:u?"linear-gradient(135deg, #94a3b8 0%, #cbd5e1 100%)":"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",color:"white",border:"none",borderRadius:"16px",fontSize:"18px",fontWeight:"700",cursor:u?"not-allowed":"pointer",transition:"all 0.3s",display:"flex",alignItems:"center",justifyContent:"center",gap:"8px",marginBottom:"20px"},children:u?n.jsxs(n.Fragment,{children:[n.jsx("span",{children:"Signing in..."}),n.jsx("span",{className:"animate-spin",children:"⚙️"})]}):n.jsxs(n.Fragment,{children:[n.jsx("span",{children:"Sign In"}),n.jsx("span",{children:"🎮"})]})}),n.jsx("div",{className:"divider",style:{textAlign:"center",margin:"20px 0",position:"relative"},children:n.jsx("span",{className:"divider-text",style:{background:"rgba(255, 255, 255, 0.95)",padding:"0 16px",position:"relative",color:"#94a3b8",fontSize:"14px"},children:"OR"})}),n.jsx("button",{className:"otp-button",onClick:E,style:{width:"100%",padding:"16px",background:"white",border:"2px solid #e2e8f0",borderRadius:"16px",fontSize:"16px",fontWeight:"600",color:"#667eea",cursor:"pointer",transition:"all 0.3s",marginBottom:"12px"},onMouseEnter:T=>{T.currentTarget.style.background="rgba(102, 126, 234, 0.05)",T.currentTarget.style.borderColor="#667eea"},onMouseLeave:T=>{T.currentTarget.style.background="white",T.currentTarget.style.borderColor="#e2e8f0"},children:"Send OTP Instead"}),n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:"20px",paddingTop:"20px",borderTop:"1px solid #e2e8f0"},children:[n.jsx("a",{href:"#",onClick:T=>{T.preventDefault(),y(!0)},style:{color:"#7c3aed",fontSize:"14px",textDecoration:"none",fontWeight:"600"},children:"Forgot password?"}),n.jsx("a",{href:"#",onClick:T=>{T.preventDefault(),b()},style:{color:"#7c3aed",fontSize:"14px",textDecoration:"none",fontWeight:"600"},children:"Create new account"})]})]}),S&&n.jsx("div",{className:"fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-6 z-50",children:n.jsxs("div",{className:"bg-gradient-to-br from-gray-900 to-purple-900 rounded-3xl p-6 w-full max-w-sm border border-white/20 shadow-2xl",children:[n.jsxs("div",{className:"text-center mb-6",children:[n.jsx("div",{className:"text-5xl mb-4",children:"🔐"}),n.jsx("h3",{className:"text-xl font-bold mb-2 text-white",children:"Reset Password"}),n.jsx("p",{className:"text-white/60 text-sm",children:"Enter your new password"})]}),n.jsxs("div",{className:"relative mb-4",children:[n.jsx("input",{type:i?"text":"password",value:v,onChange:T=>g(T.target.value),placeholder:"New password (min 6 characters)",className:`w-full px-4 py-3 pr-12 rounded-xl bg-white/10 border border-white/20 
                        text-white placeholder-white/50`,autoFocus:!0}),n.jsx("button",{type:"button",onClick:()=>o(!i),className:"absolute right-3 top-1/2 -translate-y-1/2 text-white/70 hover:text-white",style:{background:"none",border:"none",cursor:"pointer",padding:"5px",fontSize:"20px"},children:i?"👁️":"👁️‍🗨️"})]}),n.jsxs("div",{className:"flex gap-3",children:[n.jsx("button",{onClick:()=>{y(!1),g("")},className:`flex-1 py-3 rounded-2xl bg-white/10 hover:bg-white/20 
                         transition-all duration-200 font-semibold text-white`,children:"Cancel"}),n.jsx("button",{onClick:()=>{if(v.length>=6){const T=JSON.parse(localStorage.getItem("users")||"{}");T[r]&&(T[r].password=v,localStorage.setItem("users",JSON.stringify(T)),y(!1),g(""),a(v),C(!0),setTimeout(()=>C(!1),2e3))}else alert("Password must be at least 6 characters")},className:`flex-1 py-3 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-500 
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
      `})]})}function ly(){const e=Je(),t=_e(),{phone:r}=e.state||{},[s,a]=d.useState(()=>{var c;if((c=e.state)!=null&&c.avatar)return e.state.avatar;const l=sessionStorage.getItem("tempAvatar");return l?JSON.parse(l):null}),i=[{id:1,emoji:"🤖",name:"Robot",color:"#667eea"},{id:2,emoji:"🦄",name:"Unicorn",color:"#ec4899"},{id:3,emoji:"🐉",name:"Dragon",color:"#10b981"},{id:4,emoji:"🧙",name:"Wizard",color:"#8b5cf6"},{id:5,emoji:"👨‍🚀",name:"Astronaut",color:"#3b82f6"},{id:6,emoji:"🥷",name:"Ninja",color:"#1f2937"}];d.useEffect(()=>{s&&sessionStorage.setItem("tempAvatar",JSON.stringify(s))},[s]);const o=()=>{s&&t("/auth/username",{state:{phone:r,avatar:s}})};return n.jsxs("div",{className:"auth-screen",style:{background:"linear-gradient(135deg, #1e3a8a 0%, #3730a3 35%, #6d28d9 70%, #a78bfa 100%)"},children:[n.jsx("button",{className:"back-button",onClick:()=>t("/auth",{state:{phone:r==null?void 0:r.replace(/^\+\d{1,3}/,""),fromAvatar:!0}}),style:{position:"absolute",top:"40px",left:"20px",background:"rgba(255,255,255,0.15)",border:"none",borderRadius:"50%",width:"40px",height:"40px",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",zIndex:10,backdropFilter:"blur(10px)",transition:"all 0.3s ease"},onMouseEnter:l=>l.target.style.background="rgba(255,255,255,0.25)",onMouseLeave:l=>l.target.style.background="rgba(255,255,255,0.15)",children:n.jsx("span",{style:{fontSize:"24px",color:"rgba(194, 128, 190, 0.9)"},children:"‹"})}),n.jsxs("div",{className:"content-card",style:{background:"rgba(248, 250, 252, 0.95)",backdropFilter:"blur(20px)",borderRadius:"32px",padding:"24px 20px",width:"95%",maxWidth:"100%",boxShadow:"0 20px 60px rgba(0, 0, 0, 0.3)"},children:[n.jsxs("div",{className:"progress-dots",children:[n.jsx("div",{className:"dot active",style:{background:"#3730a3"}}),n.jsx("div",{className:"dot",style:{background:"#bf89ceff"}})]}),n.jsx("h1",{className:"title",style:{fontSize:"28px",fontWeight:"800",textAlign:"center",marginBottom:"8px",background:"linear-gradient(135deg, #1e3a8a 0%, #6d28d9 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"},children:"Pick Your Hero!"}),n.jsx("p",{className:"subtitle",style:{fontSize:"16px",color:"#64748b",textAlign:"center",marginBottom:"32px"},children:"Choose your quiz champion"}),n.jsx("div",{className:"avatar-grid",style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"10px",marginBottom:"32px",padding:"0",maxWidth:"500px",margin:"0 auto 32px auto"},children:i.map(l=>n.jsxs("div",{className:`avatar-card ${(s==null?void 0:s.id)===l.id?"selected":""}`,onClick:()=>a(l),style:{aspectRatio:"1",borderRadius:"20px",background:(s==null?void 0:s.id)===l.id?"linear-gradient(135deg, rgba(55, 48, 163, 0.1), rgba(109, 40, 217, 0.1))":"white",border:(s==null?void 0:s.id)===l.id?"3px solid #3730a3":"3px solid transparent",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",cursor:"pointer",transition:"all 0.3s",boxShadow:(s==null?void 0:s.id)===l.id?"0 4px 20px rgba(55, 48, 163, 0.2)":"0 2px 10px rgba(0, 0, 0, 0.05)",transform:(s==null?void 0:s.id)===l.id?"scale(1.05)":"scale(1)"},onMouseEnter:c=>{(s==null?void 0:s.id)!==l.id&&(c.currentTarget.style.transform="scale(1.05)",c.currentTarget.style.boxShadow="0 4px 20px rgba(55, 48, 163, 0.15)")},onMouseLeave:c=>{(s==null?void 0:s.id)!==l.id&&(c.currentTarget.style.transform="scale(1)",c.currentTarget.style.boxShadow="0 2px 10px rgba(0, 0, 0, 0.05)")},children:[n.jsx("div",{className:"avatar-emoji",style:{fontSize:"40px",marginBottom:"8px"},children:l.emoji}),n.jsx("div",{className:"avatar-name",style:{fontSize:"14px",fontWeight:"600",color:(s==null?void 0:s.id)===l.id?"#3730a3":"#64748b"},children:l.name})]},l.id))}),n.jsxs("button",{className:"submit-button",disabled:!s,onClick:o,style:{width:"100%",padding:"18px",background:s?"linear-gradient(135deg, #3730a3 0%, #6d28d9 100%)":"linear-gradient(135deg, #94a3b8 0%, #cbd5e1 100%)",color:"white",border:"none",borderRadius:"16px",fontSize:"18px",fontWeight:"700",cursor:s?"pointer":"not-allowed",transition:"all 0.3s",display:"flex",alignItems:"center",justifyContent:"center",gap:"8px",boxShadow:s?"0 4px 20px rgba(55, 48, 163, 0.3)":"none"},onMouseEnter:l=>{s&&(l.currentTarget.style.transform="translateY(-2px)",l.currentTarget.style.boxShadow="0 6px 30px rgba(55, 48, 163, 0.4)")},onMouseLeave:l=>{s&&(l.currentTarget.style.transform="translateY(0)",l.currentTarget.style.boxShadow="0 4px 20px rgba(55, 48, 163, 0.3)")},children:["Continue",n.jsx("span",{children:"→"})]})]})]})}function cy(){const e=Je(),t=_e(),{phone:r,avatar:s}=e.state||{},[a,i]=d.useState(""),[o,l]=d.useState(""),[c,u]=d.useState(""),[f,p]=d.useState(""),[m,j]=d.useState(""),x=[{value:"under-5",label:"Under 5 yrs"},{value:"5-10",label:"5-10 yrs"},{value:"11-15",label:"11-15 yrs"},{value:"16-20",label:"16-20 yrs"},{value:"20+",label:"20+ yrs"}],w=()=>{if(j(""),!a){j("Please enter your name");return}if(!o||o.length<6){j("Password must be at least 6 characters");return}if(!c){j("Please select your gender");return}if(!f){j("Please select your age group");return}const y=o||"123456",v=JSON.parse(localStorage.getItem("users")||"{}");v[r]={username:a,gender:c,ageGroup:f,avatar:s,password:y,phone:r,createdAt:new Date().toISOString()},localStorage.setItem("users",JSON.stringify(v)),localStorage.setItem("currentUser",JSON.stringify({phone:r,username:a,gender:c,ageGroup:f,avatar:s}));const g={name:a,level:1,coins:0,currentStreak:0,xp:0};localStorage.setItem("qp_player",JSON.stringify(g)),localStorage.setItem("userName",a),t("/welcome",{state:{username:a},replace:!0})},S=()=>{t("/auth/avatar",{state:{phone:r,avatar:s}})};return n.jsxs("div",{className:"auth-screen",style:{background:"linear-gradient(135deg, #6b46c1 0%, #9333ea 50%, #ec4899 100%)"},children:[n.jsx("button",{className:"back-button",onClick:S,style:{position:"absolute",top:"40px",left:"20px",background:"rgba(255,255,255,0.2)",border:"none",borderRadius:"50%",width:"40px",height:"40px",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",zIndex:10,backdropFilter:"blur(10px)",transition:"all 0.3s ease"},onMouseEnter:y=>y.target.style.background="rgba(255,255,255,0.3)",onMouseLeave:y=>y.target.style.background="rgba(255,255,255,0.2)",children:n.jsx("span",{style:{fontSize:"24px",color:"white"},children:"‹"})}),n.jsxs("div",{className:"content-card",children:[n.jsxs("div",{className:"progress-dots",children:[n.jsx("div",{className:"dot"}),n.jsx("div",{className:"dot active",style:{background:"#9333ea"}})]}),n.jsx("div",{style:{fontSize:"60px",textAlign:"center",marginBottom:"16px"},children:s==null?void 0:s.emoji}),n.jsx("h1",{className:"title",style:{background:"linear-gradient(135deg, #6b46c1 0%, #ec4899 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"},children:"Almost Done!"}),n.jsx("p",{className:"subtitle",children:"Tell us about yourself"}),n.jsxs("div",{style:{marginBottom:"24px"},children:[n.jsx("input",{type:"text",className:"phone-input",placeholder:"Enter your name...",value:a,onChange:y=>i(y.target.value),style:{width:"100%",marginBottom:"20px",color:"#333",fontSize:"16px",WebkitTextFillColor:"#333",backgroundColor:"white"}}),n.jsx("input",{type:"password",className:"phone-input",placeholder:"Create a password...",value:o,onChange:y=>l(y.target.value),style:{width:"100%",marginBottom:"20px",marginTop:"10px"}}),n.jsxs("div",{style:{marginBottom:"20px"},children:[n.jsx("label",{style:{fontSize:"14px",color:"#64748b",marginBottom:"8px",display:"block"},children:"Gender"}),n.jsxs("div",{style:{display:"flex",gap:"8px"},children:[n.jsx("button",{onClick:()=>u("male"),style:{flex:1,padding:"12px",border:"2px solid",borderColor:c==="male"?"#9333ea":"#e9d5ff",borderRadius:"12px",background:c==="male"?"rgba(147, 51, 234, 0.1)":"white",cursor:"pointer",fontSize:"14px",fontWeight:"600",color:c==="male"?"#9333ea":"#64748b",transition:"all 0.3s"},children:"👦 Male"}),n.jsx("button",{onClick:()=>u("female"),style:{flex:1,padding:"12px",border:"2px solid",borderColor:c==="female"?"#9333ea":"#e9d5ff",borderRadius:"12px",background:c==="female"?"rgba(147, 51, 234, 0.1)":"white",cursor:"pointer",fontSize:"14px",fontWeight:"600",color:c==="female"?"#9333ea":"#64748b",transition:"all 0.3s"},children:"👧 Female"}),n.jsx("button",{onClick:()=>u("other"),style:{flex:1,padding:"12px",border:"2px solid",borderColor:c==="other"?"#9333ea":"#e9d5ff",borderRadius:"12px",background:c==="other"?"rgba(147, 51, 234, 0.1)":"white",cursor:"pointer",fontSize:"14px",fontWeight:"600",color:c==="other"?"#9333ea":"#64748b",transition:"all 0.3s"},children:"🌈 Other"})]})]}),n.jsxs("div",{style:{marginBottom:"20px"},children:[n.jsx("label",{style:{fontSize:"14px",color:"#64748b",marginBottom:"8px",display:"block"},children:"Age Group"}),n.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"8px"},children:x.map(y=>n.jsx("button",{onClick:()=>p(y.value),style:{padding:"10px 4px",border:"2px solid",borderColor:f===y.value?"#9333ea":"#e9d5ff",borderRadius:"12px",background:f===y.value?"rgba(147, 51, 234, 0.1)":"white",cursor:"pointer",fontSize:"12px",fontWeight:"600",color:f===y.value?"#9333ea":"#64748b",transition:"all 0.3s"},children:y.label},y.value))})]}),m&&n.jsx("div",{style:{color:"#ef4444",fontSize:"14px",textAlign:"center",marginBottom:"16px"},children:m})]}),n.jsx("button",{className:"submit-button",onClick:w,disabled:!a||!c||!f,style:{width:"100%",padding:"18px",background:a&&c&&f?"linear-gradient(135deg, #6b46c1 0%, #ec4899 100%)":"linear-gradient(135deg, #94a3b8 0%, #cbd5e1 100%)",color:"white",border:"none",borderRadius:"16px",fontSize:"18px",fontWeight:"700",cursor:a&&c&&f?"pointer":"not-allowed",transition:"all 0.3s",display:"flex",alignItems:"center",justifyContent:"center",gap:"8px"},children:"Let's Start! 🚀"})]})]})}function dy(){var p;const e=_e(),t=Je(),[r,s]=d.useState(!1),[a,i]=d.useState(!1),[o,l]=d.useState(!1),c=((p=t.state)==null?void 0:p.username)||localStorage.getItem("userName")||"Champion",u=c.length>12;d.useEffect(()=>{sessionStorage.setItem("justSignedUp","true"),setTimeout(()=>s(!0),100),setTimeout(()=>i(!0),2e3)},[]);const f=()=>{l(!0),setTimeout(()=>{e("/",{replace:!0})},350)};return n.jsxs("div",{className:"fixed inset-0 z-50 flex items-center justify-center overflow-hidden transition-opacity",style:{background:"radial-gradient(circle at center, #1a1a2e 0%, #0f0f0f 100%)",opacity:o?.3:1,transitionDuration:"400ms"},children:[n.jsxs("div",{className:"absolute inset-0 flex items-center justify-center",children:[n.jsx("div",{className:"absolute",style:{width:"100px",height:"100px",borderRadius:"50%",background:"radial-gradient(circle, rgba(147, 51, 234, 0.8), transparent)",animation:"pulseExpand 2.5s ease-out infinite"}}),n.jsx("div",{className:"absolute",style:{width:"100px",height:"100px",borderRadius:"50%",background:"radial-gradient(circle, rgba(236, 72, 153, 0.8), transparent)",animation:"pulseExpand 2.5s ease-out 0.5s infinite"}}),n.jsx("div",{className:"absolute",style:{width:"100px",height:"100px",borderRadius:"50%",background:"radial-gradient(circle, rgba(59, 130, 246, 0.8), transparent)",animation:"pulseExpand 2.5s ease-out 1s infinite"}}),n.jsx("div",{className:"absolute",style:{width:"80px",height:"80px",borderRadius:"50%",background:"radial-gradient(circle, rgba(255, 255, 255, 0.9), rgba(147, 51, 234, 0.4))",boxShadow:"0 0 60px 20px rgba(147, 51, 234, 0.6)",animation:"glow 2s ease-in-out infinite"}})]}),n.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:[...Array(12)].map((m,j)=>n.jsx("div",{className:"absolute",style:{width:"2px",height:"100%",background:"linear-gradient(to bottom, transparent, rgba(147, 51, 234, 0.3), transparent)",transform:`rotate(${j*30}deg)`,animation:`fadeInOut 2.5s ease-in-out ${j*.1}s infinite`}},j))}),n.jsx("div",{className:`absolute z-10 transition-all duration-1000
        ${r?"opacity-100":"opacity-0"}`,style:{top:"calc(50% - 200px)",left:"50%",transform:"translateX(-50%)",textAlign:"center",width:"90%",maxWidth:"500px"},children:n.jsxs("h1",{style:{color:"#fff",fontFamily:"system-ui, -apple-system, sans-serif",letterSpacing:"1px",textShadow:"0 0 30px rgba(147, 51, 234, 0.5)",animation:"fadeInUp 1s ease-out forwards",margin:0},children:[n.jsx("div",{style:{fontSize:"48px",fontWeight:"bold",marginBottom:u?"-5px":"-10px"},children:"Welcome"}),n.jsx("div",{style:{fontSize:"48px",fontWeight:"bold",wordWrap:"break-word",overflowWrap:"break-word",lineHeight:u?"1.2":"1.1",padding:"0 20px",marginTop:u?"5px":"0"},children:c})]})}),a&&n.jsx("div",{className:"absolute z-10",style:{bottom:"250px",left:"50%",transform:"translateX(-50%)"},children:n.jsxs("button",{onClick:f,className:"welcome-start-button",style:{background:"linear-gradient(135deg, #9333ea 0%, #ec4899 100%)",color:"white",padding:"18px 40px",borderRadius:"50px",fontSize:"20px",fontWeight:"bold",border:"none",cursor:"pointer",transform:"scale(1)",transition:"all 0.3s ease",display:"inline-flex",alignItems:"center",gap:"12px",boxShadow:"0 4px 30px rgba(147, 51, 234, 0.4)",animation:"slideUp 0.5s ease-out forwards",whiteSpace:"nowrap"},onMouseEnter:m=>{m.currentTarget.style.transform="scale(1.05)",m.currentTarget.style.boxShadow="0 6px 40px rgba(147, 51, 234, 0.6)"},onMouseLeave:m=>{m.currentTarget.style.transform="scale(1)",m.currentTarget.style.boxShadow="0 4px 30px rgba(147, 51, 234, 0.4)"},children:["Let's Learn ",n.jsx("span",{style:{fontSize:"24px"},children:"🚀"})]})}),n.jsx("style",{jsx:!0,children:`
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
      `})]})}function uy(){return d.useState(!1),null}const fy={name:(()=>{const e=JSON.parse(localStorage.getItem("currentUser")||"{}");return e.username?e.username.split(" ")[0]:"Player"})(),avatar:"wizard",level:1,totalXP:0,energy:ht.MAX_ENERGY,energyRegenAt:null,comboStreak:0,bestCombo:0,currentStreak:0,bestStreak:0,totalDays:0,lastPlayedDate:null,totalQuizzes:0,totalCorrect:0,achievements:[],unlockedAvatars:["wizard","knight"],createdAt:Date.now()};function my(){const[e,t]=d.useState(()=>{const u=localStorage.getItem(ht.STORAGE_KEYS.PLAYER),f=JSON.parse(localStorage.getItem("currentUser")||"{}");if(u){const p=JSON.parse(u);return f.username&&(p.name=f.username.split(" ")[0]),p.unlockedAvatars||(p.unlockedAvatars=["wizard","knight"]),p}return fy});d.useEffect(()=>{localStorage.setItem(ht.STORAGE_KEYS.PLAYER,JSON.stringify(e))},[e]),d.useEffect(()=>{if(e.energy<ht.MAX_ENERGY&&e.energyRegenAt){const u=setInterval(()=>{const f=Date.now();f>=e.energyRegenAt&&t(p=>({...p,energy:Math.min(p.energy+1,ht.MAX_ENERGY),energyRegenAt:p.energy+1<ht.MAX_ENERGY?f+ht.ENERGY_REGEN_TIME:null}))},6e4);return()=>clearInterval(u)}},[e.energy,e.energyRegenAt]);const r=d.useCallback(u=>{t(f=>{const p=f.totalXP+u,m=Pd(f.totalXP),j=Pd(p);let x=[...f.unlockedAvatars];return j>m&&ht.AVATARS.forEach(w=>{w.unlockLevel<=j&&!x.includes(w.id)&&x.push(w.id)}),{...f,totalXP:p,level:j,unlockedAvatars:x}})},[]),s=d.useCallback(u=>{console.log("[DEPRECATED] addCoins called with:",u)},[]),a=d.useCallback((u=1)=>e.energy<u?!1:(t(f=>({...f,energy:f.energy-u,energyRegenAt:f.energyRegenAt||Date.now()+ht.ENERGY_REGEN_TIME})),!0),[e.energy]),i=d.useCallback(u=>{t(f=>{const p=u?f.comboStreak+1:0;return{...f,comboStreak:p,bestCombo:Math.max(f.bestCombo,p)}})},[]),o=d.useCallback(()=>{t(u=>({...u,comboStreak:0}))},[]),l=d.useCallback(u=>{e.unlockedAvatars.includes(u)&&t(f=>({...f,avatar:u}))},[e.unlockedAvatars]),c=d.useCallback(()=>{const u=new Date().toDateString();t(f=>{if(f.lastPlayedDate===u)return f;const p=new Date;p.setDate(p.getDate()-1);const m=p.toDateString();let j=f.currentStreak;return f.lastPlayedDate===m?j=f.currentStreak+1:(f.lastPlayedDate,j=1),{...f,currentStreak:j,bestStreak:Math.max(f.bestStreak,j),totalDays:f.totalDays+1,lastPlayedDate:u}})},[]);return{player:e,addXP:r,addCoins:s,useEnergy:a,updateCombo:i,resetCombo:o,changeAvatar:l,updateDailyStreak:c,levelProgress:Vx(e.totalXP)}}window.history.replaceState({path:window.location.pathname,preventBack:!0},"",window.location.pathname);window.history.pushState({path:window.location.pathname,preventBack:!0},"",window.location.pathname);window.userService=Ve;const zm=d.createContext(null),bn=()=>{const e=d.useContext(zm);if(!e)throw new Error("useGame must be used within GameProvider");return e};function hy({children:e}){const t=my(),r=Ci(),s={...t,coins:r.coins,xp:r.xp,level:r.level,recordQuizComplete:r.recordQuizComplete,recordPracticeComplete:r.recordPracticeComplete,getTodaySummary:r.getTodaySummary};return n.jsx(zm.Provider,{value:s,children:e})}function py(){const[e,t]=d.useState(!1),[r,s]=d.useState(!1);return d.useEffect(()=>{(()=>{const i=ay();s(i),t(!0)})()},[]),d.useEffect(()=>{let a=0,i=null,o=null;return(async()=>{try{o=await Hd.addListener("backButton",()=>{const c=window.location.pathname;c==="/"||c==="/home"?(a++,a===1?(console.log("Press back again to exit"),i=setTimeout(()=>{a=0},2e3)):a===2&&(clearTimeout(i),Hd.minimizeApp())):window.history.back()})}catch(c){console.error("Error setting up back button handler:",c)}})(),()=>{o&&typeof o.remove=="function"&&o.remove(),i&&clearTimeout(i)}},[]),e?!r&&!window.location.pathname.startsWith("/auth")?(window.location.href="/auth",null):n.jsxs(hy,{children:[n.jsxs(ox,{children:[n.jsx(Ae,{path:"/auth",element:n.jsx(iy,{})}),n.jsx(Ae,{path:"/auth/signin",element:n.jsx(oy,{})}),n.jsx(Ae,{path:"/auth/avatar",element:n.jsx(ly,{})}),n.jsx(Ae,{path:"/auth/username",element:n.jsx(cy,{})}),n.jsx(Ae,{path:"/welcome",element:n.jsx(dy,{})}),n.jsxs(Ae,{element:n.jsx(qx,{}),children:[n.jsx(Ae,{path:"/",element:n.jsx(_d,{})}),n.jsx(Ae,{path:"/play",element:n.jsx(Bg,{})}),n.jsx(Ae,{path:"/play/party",element:n.jsx(dv,{})}),n.jsx(Ae,{path:"/profile",element:n.jsx(xv,{})}),n.jsx(Ae,{path:"/profile/leaderboard",element:n.jsx(gv,{})}),n.jsx(Ae,{path:"/profile/history",element:n.jsx(Nv,{})}),n.jsx(Ae,{path:"/profile/rewards",element:n.jsx(Ov,{})}),n.jsx(Ae,{path:"/profile/badges",element:n.jsx(Fv,{})}),n.jsx(Ae,{path:"/profile/achievements",element:n.jsx(Bv,{})}),n.jsx(Ae,{path:"/profile/streaks",element:n.jsx(Uv,{})}),n.jsx(Ae,{path:"/profile/quests",element:n.jsx(Yv,{})}),n.jsx(Ae,{path:"/profile/settings",element:n.jsx(Qv,{})}),n.jsx(Ae,{path:"/profile/edit",element:n.jsx(ty,{})}),n.jsx(Ae,{path:"/profile/privacy",element:n.jsx(ny,{})}),n.jsx(Ae,{path:"/swipe",element:n.jsx(fv,{})}),n.jsx(Ae,{path:"/leaders",element:n.jsx(sx,{to:"/profile/leaderboard",replace:!0})}),n.jsx(Ae,{path:"/quiz/:category",element:n.jsx(nv,{})}),n.jsx(Ae,{path:"/quiz/play",element:n.jsx(hv,{})}),n.jsx(Ae,{path:"/practice/start",element:n.jsx(pv,{})}),n.jsx(Ae,{path:"*",element:n.jsx(_d,{})})]})]}),n.jsx(uy,{})]}):n.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh",backgroundColor:"#000"},children:n.jsx("div",{style:{color:"#fff"},children:"Loading..."})})}oo.createRoot(document.getElementById("root")).render(n.jsx(vt.StrictMode,{children:n.jsx(Ax,{children:n.jsx(py,{})})}));export{Dm as W,Om as c,Kd as g};
