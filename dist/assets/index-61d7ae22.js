(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function r(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(a){if(a.ep)return;a.ep=!0;const i=r(a);fetch(a.href,i)}})();var Om=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Xd(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Kd={exports:{}},li={},Jd={exports:{}},je={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Us=Symbol.for("react.element"),$m=Symbol.for("react.portal"),Bm=Symbol.for("react.fragment"),Um=Symbol.for("react.strict_mode"),qm=Symbol.for("react.profiler"),Qm=Symbol.for("react.provider"),Ym=Symbol.for("react.context"),Hm=Symbol.for("react.forward_ref"),Wm=Symbol.for("react.suspense"),Gm=Symbol.for("react.memo"),Vm=Symbol.for("react.lazy"),hc=Symbol.iterator;function Xm(e){return e===null||typeof e!="object"?null:(e=hc&&e[hc]||e["@@iterator"],typeof e=="function"?e:null)}var Zd={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},eu=Object.assign,tu={};function Qr(e,t,r){this.props=e,this.context=t,this.refs=tu,this.updater=r||Zd}Qr.prototype.isReactComponent={};Qr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Qr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function nu(){}nu.prototype=Qr.prototype;function il(e,t,r){this.props=e,this.context=t,this.refs=tu,this.updater=r||Zd}var ol=il.prototype=new nu;ol.constructor=il;eu(ol,Qr.prototype);ol.isPureReactComponent=!0;var pc=Array.isArray,ru=Object.prototype.hasOwnProperty,ll={current:null},su={key:!0,ref:!0,__self:!0,__source:!0};function au(e,t,r){var s,a={},i=null,o=null;if(t!=null)for(s in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(i=""+t.key),t)ru.call(t,s)&&!su.hasOwnProperty(s)&&(a[s]=t[s]);var l=arguments.length-2;if(l===1)a.children=r;else if(1<l){for(var c=Array(l),u=0;u<l;u++)c[u]=arguments[u+2];a.children=c}if(e&&e.defaultProps)for(s in l=e.defaultProps,l)a[s]===void 0&&(a[s]=l[s]);return{$$typeof:Us,type:e,key:i,ref:o,props:a,_owner:ll.current}}function Km(e,t){return{$$typeof:Us,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function cl(e){return typeof e=="object"&&e!==null&&e.$$typeof===Us}function Jm(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(r){return t[r]})}var xc=/\/+/g;function Ei(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Jm(""+e.key):t.toString(36)}function ba(e,t,r,s,a){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case Us:case $m:o=!0}}if(o)return o=e,a=a(o),e=s===""?"."+Ei(o,0):s,pc(a)?(r="",e!=null&&(r=e.replace(xc,"$&/")+"/"),ba(a,t,r,"",function(u){return u})):a!=null&&(cl(a)&&(a=Km(a,r+(!a.key||o&&o.key===a.key?"":(""+a.key).replace(xc,"$&/")+"/")+e)),t.push(a)),1;if(o=0,s=s===""?".":s+":",pc(e))for(var l=0;l<e.length;l++){i=e[l];var c=s+Ei(i,l);o+=ba(i,t,r,c,a)}else if(c=Xm(e),typeof c=="function")for(e=c.call(e),l=0;!(i=e.next()).done;)i=i.value,c=s+Ei(i,l++),o+=ba(i,t,r,c,a);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function Vs(e,t,r){if(e==null)return e;var s=[],a=0;return ba(e,s,"","",function(i){return t.call(r,i,a++)}),s}function Zm(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(r){(e._status===0||e._status===-1)&&(e._status=1,e._result=r)},function(r){(e._status===0||e._status===-1)&&(e._status=2,e._result=r)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var vt={current:null},wa={transition:null},e0={ReactCurrentDispatcher:vt,ReactCurrentBatchConfig:wa,ReactCurrentOwner:ll};function iu(){throw Error("act(...) is not supported in production builds of React.")}je.Children={map:Vs,forEach:function(e,t,r){Vs(e,function(){t.apply(this,arguments)},r)},count:function(e){var t=0;return Vs(e,function(){t++}),t},toArray:function(e){return Vs(e,function(t){return t})||[]},only:function(e){if(!cl(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};je.Component=Qr;je.Fragment=Bm;je.Profiler=qm;je.PureComponent=il;je.StrictMode=Um;je.Suspense=Wm;je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=e0;je.act=iu;je.cloneElement=function(e,t,r){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var s=eu({},e.props),a=e.key,i=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,o=ll.current),t.key!==void 0&&(a=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(c in t)ru.call(t,c)&&!su.hasOwnProperty(c)&&(s[c]=t[c]===void 0&&l!==void 0?l[c]:t[c])}var c=arguments.length-2;if(c===1)s.children=r;else if(1<c){l=Array(c);for(var u=0;u<c;u++)l[u]=arguments[u+2];s.children=l}return{$$typeof:Us,type:e.type,key:a,ref:i,props:s,_owner:o}};je.createContext=function(e){return e={$$typeof:Ym,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Qm,_context:e},e.Consumer=e};je.createElement=au;je.createFactory=function(e){var t=au.bind(null,e);return t.type=e,t};je.createRef=function(){return{current:null}};je.forwardRef=function(e){return{$$typeof:Hm,render:e}};je.isValidElement=cl;je.lazy=function(e){return{$$typeof:Vm,_payload:{_status:-1,_result:e},_init:Zm}};je.memo=function(e,t){return{$$typeof:Gm,type:e,compare:t===void 0?null:t}};je.startTransition=function(e){var t=wa.transition;wa.transition={};try{e()}finally{wa.transition=t}};je.unstable_act=iu;je.useCallback=function(e,t){return vt.current.useCallback(e,t)};je.useContext=function(e){return vt.current.useContext(e)};je.useDebugValue=function(){};je.useDeferredValue=function(e){return vt.current.useDeferredValue(e)};je.useEffect=function(e,t){return vt.current.useEffect(e,t)};je.useId=function(){return vt.current.useId()};je.useImperativeHandle=function(e,t,r){return vt.current.useImperativeHandle(e,t,r)};je.useInsertionEffect=function(e,t){return vt.current.useInsertionEffect(e,t)};je.useLayoutEffect=function(e,t){return vt.current.useLayoutEffect(e,t)};je.useMemo=function(e,t){return vt.current.useMemo(e,t)};je.useReducer=function(e,t,r){return vt.current.useReducer(e,t,r)};je.useRef=function(e){return vt.current.useRef(e)};je.useState=function(e){return vt.current.useState(e)};je.useSyncExternalStore=function(e,t,r){return vt.current.useSyncExternalStore(e,t,r)};je.useTransition=function(){return vt.current.useTransition()};je.version="18.3.1";Jd.exports=je;var d=Jd.exports;const pt=Xd(d);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var t0=d,n0=Symbol.for("react.element"),r0=Symbol.for("react.fragment"),s0=Object.prototype.hasOwnProperty,a0=t0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i0={key:!0,ref:!0,__self:!0,__source:!0};function ou(e,t,r){var s,a={},i=null,o=null;r!==void 0&&(i=""+r),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(o=t.ref);for(s in t)s0.call(t,s)&&!i0.hasOwnProperty(s)&&(a[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps,t)a[s]===void 0&&(a[s]=t[s]);return{$$typeof:n0,type:e,key:i,ref:o,props:a,_owner:a0.current}}li.Fragment=r0;li.jsx=ou;li.jsxs=ou;Kd.exports=li;var n=Kd.exports,oo={},lu={exports:{}},_t={},cu={exports:{}},du={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(_,I){var B=_.length;_.push(I);e:for(;0<B;){var T=B-1>>>1,z=_[T];if(0<a(z,I))_[T]=I,_[B]=z,B=T;else break e}}function r(_){return _.length===0?null:_[0]}function s(_){if(_.length===0)return null;var I=_[0],B=_.pop();if(B!==I){_[0]=B;e:for(var T=0,z=_.length,D=z>>>1;T<D;){var te=2*(T+1)-1,X=_[te],J=te+1,$=_[J];if(0>a(X,B))J<z&&0>a($,X)?(_[T]=$,_[J]=B,T=J):(_[T]=X,_[te]=B,T=te);else if(J<z&&0>a($,B))_[T]=$,_[J]=B,T=J;else break e}}return I}function a(_,I){var B=_.sortIndex-I.sortIndex;return B!==0?B:_.id-I.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var o=Date,l=o.now();e.unstable_now=function(){return o.now()-l}}var c=[],u=[],f=1,p=null,h=3,b=!1,g=!1,N=!1,C=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(_){for(var I=r(u);I!==null;){if(I.callback===null)s(u);else if(I.startTime<=_)s(u),I.sortIndex=I.expirationTime,t(c,I);else break;I=r(u)}}function E(_){if(N=!1,y(_),!g)if(r(c)!==null)g=!0,Y(j);else{var I=r(u);I!==null&&U(E,I.startTime-_)}}function j(_,I){g=!1,N&&(N=!1,v(x),x=-1),b=!0;var B=h;try{for(y(I),p=r(c);p!==null&&(!(p.expirationTime>I)||_&&!R());){var T=p.callback;if(typeof T=="function"){p.callback=null,h=p.priorityLevel;var z=T(p.expirationTime<=I);I=e.unstable_now(),typeof z=="function"?p.callback=z:p===r(c)&&s(c),y(I)}else s(c);p=r(c)}if(p!==null)var D=!0;else{var te=r(u);te!==null&&U(E,te.startTime-I),D=!1}return D}finally{p=null,h=B,b=!1}}var P=!1,S=null,x=-1,w=5,k=-1;function R(){return!(e.unstable_now()-k<w)}function M(){if(S!==null){var _=e.unstable_now();k=_;var I=!0;try{I=S(!0,_)}finally{I?q():(P=!1,S=null)}}else P=!1}var q;if(typeof m=="function")q=function(){m(M)};else if(typeof MessageChannel<"u"){var ee=new MessageChannel,Q=ee.port2;ee.port1.onmessage=M,q=function(){Q.postMessage(null)}}else q=function(){C(M,0)};function Y(_){S=_,P||(P=!0,q())}function U(_,I){x=C(function(){_(e.unstable_now())},I)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(_){_.callback=null},e.unstable_continueExecution=function(){g||b||(g=!0,Y(j))},e.unstable_forceFrameRate=function(_){0>_||125<_?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):w=0<_?Math.floor(1e3/_):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return r(c)},e.unstable_next=function(_){switch(h){case 1:case 2:case 3:var I=3;break;default:I=h}var B=h;h=I;try{return _()}finally{h=B}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(_,I){switch(_){case 1:case 2:case 3:case 4:case 5:break;default:_=3}var B=h;h=_;try{return I()}finally{h=B}},e.unstable_scheduleCallback=function(_,I,B){var T=e.unstable_now();switch(typeof B=="object"&&B!==null?(B=B.delay,B=typeof B=="number"&&0<B?T+B:T):B=T,_){case 1:var z=-1;break;case 2:z=250;break;case 5:z=1073741823;break;case 4:z=1e4;break;default:z=5e3}return z=B+z,_={id:f++,callback:I,priorityLevel:_,startTime:B,expirationTime:z,sortIndex:-1},B>T?(_.sortIndex=B,t(u,_),r(c)===null&&_===r(u)&&(N?(v(x),x=-1):N=!0,U(E,B-T))):(_.sortIndex=z,t(c,_),g||b||(g=!0,Y(j))),_},e.unstable_shouldYield=R,e.unstable_wrapCallback=function(_){var I=h;return function(){var B=h;h=I;try{return _.apply(this,arguments)}finally{h=B}}}})(du);cu.exports=du;var o0=cu.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var l0=d,Tt=o0;function W(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var uu=new Set,ks={};function fr(e,t){Mr(e,t),Mr(e+"Capture",t)}function Mr(e,t){for(ks[e]=t,e=0;e<t.length;e++)uu.add(t[e])}var xn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),lo=Object.prototype.hasOwnProperty,c0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,gc={},vc={};function d0(e){return lo.call(vc,e)?!0:lo.call(gc,e)?!1:c0.test(e)?vc[e]=!0:(gc[e]=!0,!1)}function u0(e,t,r,s){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return s?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function f0(e,t,r,s){if(t===null||typeof t>"u"||u0(e,t,r,s))return!0;if(s)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function yt(e,t,r,s,a,i,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=s,this.attributeNamespace=a,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=o}var ct={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ct[e]=new yt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ct[t]=new yt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ct[e]=new yt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ct[e]=new yt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ct[e]=new yt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ct[e]=new yt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ct[e]=new yt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ct[e]=new yt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ct[e]=new yt(e,5,!1,e.toLowerCase(),null,!1,!1)});var dl=/[\-:]([a-z])/g;function ul(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(dl,ul);ct[t]=new yt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(dl,ul);ct[t]=new yt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(dl,ul);ct[t]=new yt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ct[e]=new yt(e,1,!1,e.toLowerCase(),null,!1,!1)});ct.xlinkHref=new yt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ct[e]=new yt(e,1,!1,e.toLowerCase(),null,!0,!0)});function fl(e,t,r,s){var a=ct.hasOwnProperty(t)?ct[t]:null;(a!==null?a.type!==0:s||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(f0(t,r,a,s)&&(r=null),s||a===null?d0(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):a.mustUseProperty?e[a.propertyName]=r===null?a.type===3?!1:"":r:(t=a.attributeName,s=a.attributeNamespace,r===null?e.removeAttribute(t):(a=a.type,r=a===3||a===4&&r===!0?"":""+r,s?e.setAttributeNS(s,t,r):e.setAttribute(t,r))))}var wn=l0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Xs=Symbol.for("react.element"),gr=Symbol.for("react.portal"),vr=Symbol.for("react.fragment"),ml=Symbol.for("react.strict_mode"),co=Symbol.for("react.profiler"),fu=Symbol.for("react.provider"),mu=Symbol.for("react.context"),hl=Symbol.for("react.forward_ref"),uo=Symbol.for("react.suspense"),fo=Symbol.for("react.suspense_list"),pl=Symbol.for("react.memo"),Pn=Symbol.for("react.lazy"),hu=Symbol.for("react.offscreen"),yc=Symbol.iterator;function Xr(e){return e===null||typeof e!="object"?null:(e=yc&&e[yc]||e["@@iterator"],typeof e=="function"?e:null)}var Ye=Object.assign,Pi;function ds(e){if(Pi===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);Pi=t&&t[1]||""}return`
`+Pi+e}var Ri=!1;function Ti(e,t){if(!e||Ri)return"";Ri=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var s=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){s=u}e.call(t.prototype)}else{try{throw Error()}catch(u){s=u}e()}}catch(u){if(u&&s&&typeof u.stack=="string"){for(var a=u.stack.split(`
`),i=s.stack.split(`
`),o=a.length-1,l=i.length-1;1<=o&&0<=l&&a[o]!==i[l];)l--;for(;1<=o&&0<=l;o--,l--)if(a[o]!==i[l]){if(o!==1||l!==1)do if(o--,l--,0>l||a[o]!==i[l]){var c=`
`+a[o].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=o&&0<=l);break}}}finally{Ri=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?ds(e):""}function m0(e){switch(e.tag){case 5:return ds(e.type);case 16:return ds("Lazy");case 13:return ds("Suspense");case 19:return ds("SuspenseList");case 0:case 2:case 15:return e=Ti(e.type,!1),e;case 11:return e=Ti(e.type.render,!1),e;case 1:return e=Ti(e.type,!0),e;default:return""}}function mo(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case vr:return"Fragment";case gr:return"Portal";case co:return"Profiler";case ml:return"StrictMode";case uo:return"Suspense";case fo:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case mu:return(e.displayName||"Context")+".Consumer";case fu:return(e._context.displayName||"Context")+".Provider";case hl:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case pl:return t=e.displayName||null,t!==null?t:mo(e.type)||"Memo";case Pn:t=e._payload,e=e._init;try{return mo(e(t))}catch{}}return null}function h0(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return mo(t);case 8:return t===ml?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function qn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function pu(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function p0(e){var t=pu(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),s=""+e[t];if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var a=r.get,i=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(o){s=""+o,i.call(this,o)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return s},setValue:function(o){s=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ks(e){e._valueTracker||(e._valueTracker=p0(e))}function xu(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),s="";return e&&(s=pu(e)?e.checked?"true":"false":e.value),e=s,e!==r?(t.setValue(e),!0):!1}function Ma(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ho(e,t){var r=t.checked;return Ye({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function bc(e,t){var r=t.defaultValue==null?"":t.defaultValue,s=t.checked!=null?t.checked:t.defaultChecked;r=qn(t.value!=null?t.value:r),e._wrapperState={initialChecked:s,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function gu(e,t){t=t.checked,t!=null&&fl(e,"checked",t,!1)}function po(e,t){gu(e,t);var r=qn(t.value),s=t.type;if(r!=null)s==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(s==="submit"||s==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?xo(e,t.type,r):t.hasOwnProperty("defaultValue")&&xo(e,t.type,qn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function wc(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var s=t.type;if(!(s!=="submit"&&s!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function xo(e,t,r){(t!=="number"||Ma(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var us=Array.isArray;function Rr(e,t,r,s){if(e=e.options,t){t={};for(var a=0;a<r.length;a++)t["$"+r[a]]=!0;for(r=0;r<e.length;r++)a=t.hasOwnProperty("$"+e[r].value),e[r].selected!==a&&(e[r].selected=a),a&&s&&(e[r].defaultSelected=!0)}else{for(r=""+qn(r),t=null,a=0;a<e.length;a++){if(e[a].value===r){e[a].selected=!0,s&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function go(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(W(91));return Ye({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function jc(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(W(92));if(us(r)){if(1<r.length)throw Error(W(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:qn(r)}}function vu(e,t){var r=qn(t.value),s=qn(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),s!=null&&(e.defaultValue=""+s)}function Nc(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function yu(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function vo(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?yu(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Js,bu=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,r,s,a){MSApp.execUnsafeLocalFunction(function(){return e(t,r,s,a)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Js=Js||document.createElement("div"),Js.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Js.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Ss(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var hs={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},x0=["Webkit","ms","Moz","O"];Object.keys(hs).forEach(function(e){x0.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),hs[t]=hs[e]})});function wu(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||hs.hasOwnProperty(e)&&hs[e]?(""+t).trim():t+"px"}function ju(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var s=r.indexOf("--")===0,a=wu(r,t[r],s);r==="float"&&(r="cssFloat"),s?e.setProperty(r,a):e[r]=a}}var g0=Ye({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function yo(e,t){if(t){if(g0[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(W(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(W(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(W(61))}if(t.style!=null&&typeof t.style!="object")throw Error(W(62))}}function bo(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var wo=null;function xl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var jo=null,Tr=null,_r=null;function kc(e){if(e=Ys(e)){if(typeof jo!="function")throw Error(W(280));var t=e.stateNode;t&&(t=mi(t),jo(e.stateNode,e.type,t))}}function Nu(e){Tr?_r?_r.push(e):_r=[e]:Tr=e}function ku(){if(Tr){var e=Tr,t=_r;if(_r=Tr=null,kc(e),t)for(e=0;e<t.length;e++)kc(t[e])}}function Su(e,t){return e(t)}function Cu(){}var _i=!1;function Eu(e,t,r){if(_i)return e(t,r);_i=!0;try{return Su(e,t,r)}finally{_i=!1,(Tr!==null||_r!==null)&&(Cu(),ku())}}function Cs(e,t){var r=e.stateNode;if(r===null)return null;var s=mi(r);if(s===null)return null;r=s[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(e=e.type,s=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!s;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(W(231,t,typeof r));return r}var No=!1;if(xn)try{var Kr={};Object.defineProperty(Kr,"passive",{get:function(){No=!0}}),window.addEventListener("test",Kr,Kr),window.removeEventListener("test",Kr,Kr)}catch{No=!1}function v0(e,t,r,s,a,i,o,l,c){var u=Array.prototype.slice.call(arguments,3);try{t.apply(r,u)}catch(f){this.onError(f)}}var ps=!1,za=null,Fa=!1,ko=null,y0={onError:function(e){ps=!0,za=e}};function b0(e,t,r,s,a,i,o,l,c){ps=!1,za=null,v0.apply(y0,arguments)}function w0(e,t,r,s,a,i,o,l,c){if(b0.apply(this,arguments),ps){if(ps){var u=za;ps=!1,za=null}else throw Error(W(198));Fa||(Fa=!0,ko=u)}}function mr(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function Pu(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Sc(e){if(mr(e)!==e)throw Error(W(188))}function j0(e){var t=e.alternate;if(!t){if(t=mr(e),t===null)throw Error(W(188));return t!==e?null:e}for(var r=e,s=t;;){var a=r.return;if(a===null)break;var i=a.alternate;if(i===null){if(s=a.return,s!==null){r=s;continue}break}if(a.child===i.child){for(i=a.child;i;){if(i===r)return Sc(a),e;if(i===s)return Sc(a),t;i=i.sibling}throw Error(W(188))}if(r.return!==s.return)r=a,s=i;else{for(var o=!1,l=a.child;l;){if(l===r){o=!0,r=a,s=i;break}if(l===s){o=!0,s=a,r=i;break}l=l.sibling}if(!o){for(l=i.child;l;){if(l===r){o=!0,r=i,s=a;break}if(l===s){o=!0,s=i,r=a;break}l=l.sibling}if(!o)throw Error(W(189))}}if(r.alternate!==s)throw Error(W(190))}if(r.tag!==3)throw Error(W(188));return r.stateNode.current===r?e:t}function Ru(e){return e=j0(e),e!==null?Tu(e):null}function Tu(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Tu(e);if(t!==null)return t;e=e.sibling}return null}var _u=Tt.unstable_scheduleCallback,Cc=Tt.unstable_cancelCallback,N0=Tt.unstable_shouldYield,k0=Tt.unstable_requestPaint,Xe=Tt.unstable_now,S0=Tt.unstable_getCurrentPriorityLevel,gl=Tt.unstable_ImmediatePriority,Lu=Tt.unstable_UserBlockingPriority,Oa=Tt.unstable_NormalPriority,C0=Tt.unstable_LowPriority,Au=Tt.unstable_IdlePriority,ci=null,an=null;function E0(e){if(an&&typeof an.onCommitFiberRoot=="function")try{an.onCommitFiberRoot(ci,e,void 0,(e.current.flags&128)===128)}catch{}}var Vt=Math.clz32?Math.clz32:T0,P0=Math.log,R0=Math.LN2;function T0(e){return e>>>=0,e===0?32:31-(P0(e)/R0|0)|0}var Zs=64,ea=4194304;function fs(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function $a(e,t){var r=e.pendingLanes;if(r===0)return 0;var s=0,a=e.suspendedLanes,i=e.pingedLanes,o=r&268435455;if(o!==0){var l=o&~a;l!==0?s=fs(l):(i&=o,i!==0&&(s=fs(i)))}else o=r&~a,o!==0?s=fs(o):i!==0&&(s=fs(i));if(s===0)return 0;if(t!==0&&t!==s&&!(t&a)&&(a=s&-s,i=t&-t,a>=i||a===16&&(i&4194240)!==0))return t;if(s&4&&(s|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=s;0<t;)r=31-Vt(t),a=1<<r,s|=e[r],t&=~a;return s}function _0(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function L0(e,t){for(var r=e.suspendedLanes,s=e.pingedLanes,a=e.expirationTimes,i=e.pendingLanes;0<i;){var o=31-Vt(i),l=1<<o,c=a[o];c===-1?(!(l&r)||l&s)&&(a[o]=_0(l,t)):c<=t&&(e.expiredLanes|=l),i&=~l}}function So(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Iu(){var e=Zs;return Zs<<=1,!(Zs&4194240)&&(Zs=64),e}function Li(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function qs(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Vt(t),e[t]=r}function A0(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var s=e.eventTimes;for(e=e.expirationTimes;0<r;){var a=31-Vt(r),i=1<<a;t[a]=0,s[a]=-1,e[a]=-1,r&=~i}}function vl(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var s=31-Vt(r),a=1<<s;a&t|e[s]&t&&(e[s]|=t),r&=~a}}var _e=0;function Du(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Mu,yl,zu,Fu,Ou,Co=!1,ta=[],Dn=null,Mn=null,zn=null,Es=new Map,Ps=new Map,_n=[],I0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ec(e,t){switch(e){case"focusin":case"focusout":Dn=null;break;case"dragenter":case"dragleave":Mn=null;break;case"mouseover":case"mouseout":zn=null;break;case"pointerover":case"pointerout":Es.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ps.delete(t.pointerId)}}function Jr(e,t,r,s,a,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:r,eventSystemFlags:s,nativeEvent:i,targetContainers:[a]},t!==null&&(t=Ys(t),t!==null&&yl(t)),e):(e.eventSystemFlags|=s,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function D0(e,t,r,s,a){switch(t){case"focusin":return Dn=Jr(Dn,e,t,r,s,a),!0;case"dragenter":return Mn=Jr(Mn,e,t,r,s,a),!0;case"mouseover":return zn=Jr(zn,e,t,r,s,a),!0;case"pointerover":var i=a.pointerId;return Es.set(i,Jr(Es.get(i)||null,e,t,r,s,a)),!0;case"gotpointercapture":return i=a.pointerId,Ps.set(i,Jr(Ps.get(i)||null,e,t,r,s,a)),!0}return!1}function $u(e){var t=Zn(e.target);if(t!==null){var r=mr(t);if(r!==null){if(t=r.tag,t===13){if(t=Pu(r),t!==null){e.blockedOn=t,Ou(e.priority,function(){zu(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ja(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=Eo(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var s=new r.constructor(r.type,r);wo=s,r.target.dispatchEvent(s),wo=null}else return t=Ys(r),t!==null&&yl(t),e.blockedOn=r,!1;t.shift()}return!0}function Pc(e,t,r){ja(e)&&r.delete(t)}function M0(){Co=!1,Dn!==null&&ja(Dn)&&(Dn=null),Mn!==null&&ja(Mn)&&(Mn=null),zn!==null&&ja(zn)&&(zn=null),Es.forEach(Pc),Ps.forEach(Pc)}function Zr(e,t){e.blockedOn===t&&(e.blockedOn=null,Co||(Co=!0,Tt.unstable_scheduleCallback(Tt.unstable_NormalPriority,M0)))}function Rs(e){function t(a){return Zr(a,e)}if(0<ta.length){Zr(ta[0],e);for(var r=1;r<ta.length;r++){var s=ta[r];s.blockedOn===e&&(s.blockedOn=null)}}for(Dn!==null&&Zr(Dn,e),Mn!==null&&Zr(Mn,e),zn!==null&&Zr(zn,e),Es.forEach(t),Ps.forEach(t),r=0;r<_n.length;r++)s=_n[r],s.blockedOn===e&&(s.blockedOn=null);for(;0<_n.length&&(r=_n[0],r.blockedOn===null);)$u(r),r.blockedOn===null&&_n.shift()}var Lr=wn.ReactCurrentBatchConfig,Ba=!0;function z0(e,t,r,s){var a=_e,i=Lr.transition;Lr.transition=null;try{_e=1,bl(e,t,r,s)}finally{_e=a,Lr.transition=i}}function F0(e,t,r,s){var a=_e,i=Lr.transition;Lr.transition=null;try{_e=4,bl(e,t,r,s)}finally{_e=a,Lr.transition=i}}function bl(e,t,r,s){if(Ba){var a=Eo(e,t,r,s);if(a===null)Ui(e,t,s,Ua,r),Ec(e,s);else if(D0(a,e,t,r,s))s.stopPropagation();else if(Ec(e,s),t&4&&-1<I0.indexOf(e)){for(;a!==null;){var i=Ys(a);if(i!==null&&Mu(i),i=Eo(e,t,r,s),i===null&&Ui(e,t,s,Ua,r),i===a)break;a=i}a!==null&&s.stopPropagation()}else Ui(e,t,s,null,r)}}var Ua=null;function Eo(e,t,r,s){if(Ua=null,e=xl(s),e=Zn(e),e!==null)if(t=mr(e),t===null)e=null;else if(r=t.tag,r===13){if(e=Pu(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ua=e,null}function Bu(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(S0()){case gl:return 1;case Lu:return 4;case Oa:case C0:return 16;case Au:return 536870912;default:return 16}default:return 16}}var An=null,wl=null,Na=null;function Uu(){if(Na)return Na;var e,t=wl,r=t.length,s,a="value"in An?An.value:An.textContent,i=a.length;for(e=0;e<r&&t[e]===a[e];e++);var o=r-e;for(s=1;s<=o&&t[r-s]===a[i-s];s++);return Na=a.slice(e,1<s?1-s:void 0)}function ka(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function na(){return!0}function Rc(){return!1}function Lt(e){function t(r,s,a,i,o){this._reactName=r,this._targetInst=a,this.type=s,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(r=e[l],this[l]=r?r(i):i[l]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?na:Rc,this.isPropagationStopped=Rc,this}return Ye(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=na)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=na)},persist:function(){},isPersistent:na}),t}var Yr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},jl=Lt(Yr),Qs=Ye({},Yr,{view:0,detail:0}),O0=Lt(Qs),Ai,Ii,es,di=Ye({},Qs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Nl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==es&&(es&&e.type==="mousemove"?(Ai=e.screenX-es.screenX,Ii=e.screenY-es.screenY):Ii=Ai=0,es=e),Ai)},movementY:function(e){return"movementY"in e?e.movementY:Ii}}),Tc=Lt(di),$0=Ye({},di,{dataTransfer:0}),B0=Lt($0),U0=Ye({},Qs,{relatedTarget:0}),Di=Lt(U0),q0=Ye({},Yr,{animationName:0,elapsedTime:0,pseudoElement:0}),Q0=Lt(q0),Y0=Ye({},Yr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),H0=Lt(Y0),W0=Ye({},Yr,{data:0}),_c=Lt(W0),G0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},V0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},X0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function K0(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=X0[e])?!!t[e]:!1}function Nl(){return K0}var J0=Ye({},Qs,{key:function(e){if(e.key){var t=G0[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ka(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?V0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Nl,charCode:function(e){return e.type==="keypress"?ka(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ka(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Z0=Lt(J0),eh=Ye({},di,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Lc=Lt(eh),th=Ye({},Qs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Nl}),nh=Lt(th),rh=Ye({},Yr,{propertyName:0,elapsedTime:0,pseudoElement:0}),sh=Lt(rh),ah=Ye({},di,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),ih=Lt(ah),oh=[9,13,27,32],kl=xn&&"CompositionEvent"in window,xs=null;xn&&"documentMode"in document&&(xs=document.documentMode);var lh=xn&&"TextEvent"in window&&!xs,qu=xn&&(!kl||xs&&8<xs&&11>=xs),Ac=String.fromCharCode(32),Ic=!1;function Qu(e,t){switch(e){case"keyup":return oh.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Yu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var yr=!1;function ch(e,t){switch(e){case"compositionend":return Yu(t);case"keypress":return t.which!==32?null:(Ic=!0,Ac);case"textInput":return e=t.data,e===Ac&&Ic?null:e;default:return null}}function dh(e,t){if(yr)return e==="compositionend"||!kl&&Qu(e,t)?(e=Uu(),Na=wl=An=null,yr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return qu&&t.locale!=="ko"?null:t.data;default:return null}}var uh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Dc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!uh[e.type]:t==="textarea"}function Hu(e,t,r,s){Nu(s),t=qa(t,"onChange"),0<t.length&&(r=new jl("onChange","change",null,r,s),e.push({event:r,listeners:t}))}var gs=null,Ts=null;function fh(e){rf(e,0)}function ui(e){var t=jr(e);if(xu(t))return e}function mh(e,t){if(e==="change")return t}var Wu=!1;if(xn){var Mi;if(xn){var zi="oninput"in document;if(!zi){var Mc=document.createElement("div");Mc.setAttribute("oninput","return;"),zi=typeof Mc.oninput=="function"}Mi=zi}else Mi=!1;Wu=Mi&&(!document.documentMode||9<document.documentMode)}function zc(){gs&&(gs.detachEvent("onpropertychange",Gu),Ts=gs=null)}function Gu(e){if(e.propertyName==="value"&&ui(Ts)){var t=[];Hu(t,Ts,e,xl(e)),Eu(fh,t)}}function hh(e,t,r){e==="focusin"?(zc(),gs=t,Ts=r,gs.attachEvent("onpropertychange",Gu)):e==="focusout"&&zc()}function ph(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ui(Ts)}function xh(e,t){if(e==="click")return ui(t)}function gh(e,t){if(e==="input"||e==="change")return ui(t)}function vh(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Kt=typeof Object.is=="function"?Object.is:vh;function _s(e,t){if(Kt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),s=Object.keys(t);if(r.length!==s.length)return!1;for(s=0;s<r.length;s++){var a=r[s];if(!lo.call(t,a)||!Kt(e[a],t[a]))return!1}return!0}function Fc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Oc(e,t){var r=Fc(e);e=0;for(var s;r;){if(r.nodeType===3){if(s=e+r.textContent.length,e<=t&&s>=t)return{node:r,offset:t-e};e=s}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=Fc(r)}}function Vu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Vu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Xu(){for(var e=window,t=Ma();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=Ma(e.document)}return t}function Sl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function yh(e){var t=Xu(),r=e.focusedElem,s=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&Vu(r.ownerDocument.documentElement,r)){if(s!==null&&Sl(r)){if(t=s.start,e=s.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var a=r.textContent.length,i=Math.min(s.start,a);s=s.end===void 0?i:Math.min(s.end,a),!e.extend&&i>s&&(a=s,s=i,i=a),a=Oc(r,i);var o=Oc(r,s);a&&o&&(e.rangeCount!==1||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(a.node,a.offset),e.removeAllRanges(),i>s?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var bh=xn&&"documentMode"in document&&11>=document.documentMode,br=null,Po=null,vs=null,Ro=!1;function $c(e,t,r){var s=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;Ro||br==null||br!==Ma(s)||(s=br,"selectionStart"in s&&Sl(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),vs&&_s(vs,s)||(vs=s,s=qa(Po,"onSelect"),0<s.length&&(t=new jl("onSelect","select",null,t,r),e.push({event:t,listeners:s}),t.target=br)))}function ra(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var wr={animationend:ra("Animation","AnimationEnd"),animationiteration:ra("Animation","AnimationIteration"),animationstart:ra("Animation","AnimationStart"),transitionend:ra("Transition","TransitionEnd")},Fi={},Ku={};xn&&(Ku=document.createElement("div").style,"AnimationEvent"in window||(delete wr.animationend.animation,delete wr.animationiteration.animation,delete wr.animationstart.animation),"TransitionEvent"in window||delete wr.transitionend.transition);function fi(e){if(Fi[e])return Fi[e];if(!wr[e])return e;var t=wr[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in Ku)return Fi[e]=t[r];return e}var Ju=fi("animationend"),Zu=fi("animationiteration"),ef=fi("animationstart"),tf=fi("transitionend"),nf=new Map,Bc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Yn(e,t){nf.set(e,t),fr(t,[e])}for(var Oi=0;Oi<Bc.length;Oi++){var $i=Bc[Oi],wh=$i.toLowerCase(),jh=$i[0].toUpperCase()+$i.slice(1);Yn(wh,"on"+jh)}Yn(Ju,"onAnimationEnd");Yn(Zu,"onAnimationIteration");Yn(ef,"onAnimationStart");Yn("dblclick","onDoubleClick");Yn("focusin","onFocus");Yn("focusout","onBlur");Yn(tf,"onTransitionEnd");Mr("onMouseEnter",["mouseout","mouseover"]);Mr("onMouseLeave",["mouseout","mouseover"]);Mr("onPointerEnter",["pointerout","pointerover"]);Mr("onPointerLeave",["pointerout","pointerover"]);fr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));fr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));fr("onBeforeInput",["compositionend","keypress","textInput","paste"]);fr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));fr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));fr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ms="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Nh=new Set("cancel close invalid load scroll toggle".split(" ").concat(ms));function Uc(e,t,r){var s=e.type||"unknown-event";e.currentTarget=r,w0(s,t,void 0,e),e.currentTarget=null}function rf(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var s=e[r],a=s.event;s=s.listeners;e:{var i=void 0;if(t)for(var o=s.length-1;0<=o;o--){var l=s[o],c=l.instance,u=l.currentTarget;if(l=l.listener,c!==i&&a.isPropagationStopped())break e;Uc(a,l,u),i=c}else for(o=0;o<s.length;o++){if(l=s[o],c=l.instance,u=l.currentTarget,l=l.listener,c!==i&&a.isPropagationStopped())break e;Uc(a,l,u),i=c}}}if(Fa)throw e=ko,Fa=!1,ko=null,e}function Me(e,t){var r=t[Io];r===void 0&&(r=t[Io]=new Set);var s=e+"__bubble";r.has(s)||(sf(t,e,2,!1),r.add(s))}function Bi(e,t,r){var s=0;t&&(s|=4),sf(r,e,s,t)}var sa="_reactListening"+Math.random().toString(36).slice(2);function Ls(e){if(!e[sa]){e[sa]=!0,uu.forEach(function(r){r!=="selectionchange"&&(Nh.has(r)||Bi(r,!1,e),Bi(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[sa]||(t[sa]=!0,Bi("selectionchange",!1,t))}}function sf(e,t,r,s){switch(Bu(t)){case 1:var a=z0;break;case 4:a=F0;break;default:a=bl}r=a.bind(null,t,r,e),a=void 0,!No||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),s?a!==void 0?e.addEventListener(t,r,{capture:!0,passive:a}):e.addEventListener(t,r,!0):a!==void 0?e.addEventListener(t,r,{passive:a}):e.addEventListener(t,r,!1)}function Ui(e,t,r,s,a){var i=s;if(!(t&1)&&!(t&2)&&s!==null)e:for(;;){if(s===null)return;var o=s.tag;if(o===3||o===4){var l=s.stateNode.containerInfo;if(l===a||l.nodeType===8&&l.parentNode===a)break;if(o===4)for(o=s.return;o!==null;){var c=o.tag;if((c===3||c===4)&&(c=o.stateNode.containerInfo,c===a||c.nodeType===8&&c.parentNode===a))return;o=o.return}for(;l!==null;){if(o=Zn(l),o===null)return;if(c=o.tag,c===5||c===6){s=i=o;continue e}l=l.parentNode}}s=s.return}Eu(function(){var u=i,f=xl(r),p=[];e:{var h=nf.get(e);if(h!==void 0){var b=jl,g=e;switch(e){case"keypress":if(ka(r)===0)break e;case"keydown":case"keyup":b=Z0;break;case"focusin":g="focus",b=Di;break;case"focusout":g="blur",b=Di;break;case"beforeblur":case"afterblur":b=Di;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":b=Tc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":b=B0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":b=nh;break;case Ju:case Zu:case ef:b=Q0;break;case tf:b=sh;break;case"scroll":b=O0;break;case"wheel":b=ih;break;case"copy":case"cut":case"paste":b=H0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":b=Lc}var N=(t&4)!==0,C=!N&&e==="scroll",v=N?h!==null?h+"Capture":null:h;N=[];for(var m=u,y;m!==null;){y=m;var E=y.stateNode;if(y.tag===5&&E!==null&&(y=E,v!==null&&(E=Cs(m,v),E!=null&&N.push(As(m,E,y)))),C)break;m=m.return}0<N.length&&(h=new b(h,g,null,r,f),p.push({event:h,listeners:N}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",b=e==="mouseout"||e==="pointerout",h&&r!==wo&&(g=r.relatedTarget||r.fromElement)&&(Zn(g)||g[gn]))break e;if((b||h)&&(h=f.window===f?f:(h=f.ownerDocument)?h.defaultView||h.parentWindow:window,b?(g=r.relatedTarget||r.toElement,b=u,g=g?Zn(g):null,g!==null&&(C=mr(g),g!==C||g.tag!==5&&g.tag!==6)&&(g=null)):(b=null,g=u),b!==g)){if(N=Tc,E="onMouseLeave",v="onMouseEnter",m="mouse",(e==="pointerout"||e==="pointerover")&&(N=Lc,E="onPointerLeave",v="onPointerEnter",m="pointer"),C=b==null?h:jr(b),y=g==null?h:jr(g),h=new N(E,m+"leave",b,r,f),h.target=C,h.relatedTarget=y,E=null,Zn(f)===u&&(N=new N(v,m+"enter",g,r,f),N.target=y,N.relatedTarget=C,E=N),C=E,b&&g)t:{for(N=b,v=g,m=0,y=N;y;y=xr(y))m++;for(y=0,E=v;E;E=xr(E))y++;for(;0<m-y;)N=xr(N),m--;for(;0<y-m;)v=xr(v),y--;for(;m--;){if(N===v||v!==null&&N===v.alternate)break t;N=xr(N),v=xr(v)}N=null}else N=null;b!==null&&qc(p,h,b,N,!1),g!==null&&C!==null&&qc(p,C,g,N,!0)}}e:{if(h=u?jr(u):window,b=h.nodeName&&h.nodeName.toLowerCase(),b==="select"||b==="input"&&h.type==="file")var j=mh;else if(Dc(h))if(Wu)j=gh;else{j=ph;var P=hh}else(b=h.nodeName)&&b.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(j=xh);if(j&&(j=j(e,u))){Hu(p,j,r,f);break e}P&&P(e,h,u),e==="focusout"&&(P=h._wrapperState)&&P.controlled&&h.type==="number"&&xo(h,"number",h.value)}switch(P=u?jr(u):window,e){case"focusin":(Dc(P)||P.contentEditable==="true")&&(br=P,Po=u,vs=null);break;case"focusout":vs=Po=br=null;break;case"mousedown":Ro=!0;break;case"contextmenu":case"mouseup":case"dragend":Ro=!1,$c(p,r,f);break;case"selectionchange":if(bh)break;case"keydown":case"keyup":$c(p,r,f)}var S;if(kl)e:{switch(e){case"compositionstart":var x="onCompositionStart";break e;case"compositionend":x="onCompositionEnd";break e;case"compositionupdate":x="onCompositionUpdate";break e}x=void 0}else yr?Qu(e,r)&&(x="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(x="onCompositionStart");x&&(qu&&r.locale!=="ko"&&(yr||x!=="onCompositionStart"?x==="onCompositionEnd"&&yr&&(S=Uu()):(An=f,wl="value"in An?An.value:An.textContent,yr=!0)),P=qa(u,x),0<P.length&&(x=new _c(x,e,null,r,f),p.push({event:x,listeners:P}),S?x.data=S:(S=Yu(r),S!==null&&(x.data=S)))),(S=lh?ch(e,r):dh(e,r))&&(u=qa(u,"onBeforeInput"),0<u.length&&(f=new _c("onBeforeInput","beforeinput",null,r,f),p.push({event:f,listeners:u}),f.data=S))}rf(p,t)})}function As(e,t,r){return{instance:e,listener:t,currentTarget:r}}function qa(e,t){for(var r=t+"Capture",s=[];e!==null;){var a=e,i=a.stateNode;a.tag===5&&i!==null&&(a=i,i=Cs(e,r),i!=null&&s.unshift(As(e,i,a)),i=Cs(e,t),i!=null&&s.push(As(e,i,a))),e=e.return}return s}function xr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function qc(e,t,r,s,a){for(var i=t._reactName,o=[];r!==null&&r!==s;){var l=r,c=l.alternate,u=l.stateNode;if(c!==null&&c===s)break;l.tag===5&&u!==null&&(l=u,a?(c=Cs(r,i),c!=null&&o.unshift(As(r,c,l))):a||(c=Cs(r,i),c!=null&&o.push(As(r,c,l)))),r=r.return}o.length!==0&&e.push({event:t,listeners:o})}var kh=/\r\n?/g,Sh=/\u0000|\uFFFD/g;function Qc(e){return(typeof e=="string"?e:""+e).replace(kh,`
`).replace(Sh,"")}function aa(e,t,r){if(t=Qc(t),Qc(e)!==t&&r)throw Error(W(425))}function Qa(){}var To=null,_o=null;function Lo(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ao=typeof setTimeout=="function"?setTimeout:void 0,Ch=typeof clearTimeout=="function"?clearTimeout:void 0,Yc=typeof Promise=="function"?Promise:void 0,Eh=typeof queueMicrotask=="function"?queueMicrotask:typeof Yc<"u"?function(e){return Yc.resolve(null).then(e).catch(Ph)}:Ao;function Ph(e){setTimeout(function(){throw e})}function qi(e,t){var r=t,s=0;do{var a=r.nextSibling;if(e.removeChild(r),a&&a.nodeType===8)if(r=a.data,r==="/$"){if(s===0){e.removeChild(a),Rs(t);return}s--}else r!=="$"&&r!=="$?"&&r!=="$!"||s++;r=a}while(r);Rs(t)}function Fn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Hc(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var Hr=Math.random().toString(36).slice(2),sn="__reactFiber$"+Hr,Is="__reactProps$"+Hr,gn="__reactContainer$"+Hr,Io="__reactEvents$"+Hr,Rh="__reactListeners$"+Hr,Th="__reactHandles$"+Hr;function Zn(e){var t=e[sn];if(t)return t;for(var r=e.parentNode;r;){if(t=r[gn]||r[sn]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=Hc(e);e!==null;){if(r=e[sn])return r;e=Hc(e)}return t}e=r,r=e.parentNode}return null}function Ys(e){return e=e[sn]||e[gn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function jr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(W(33))}function mi(e){return e[Is]||null}var Do=[],Nr=-1;function Hn(e){return{current:e}}function Fe(e){0>Nr||(e.current=Do[Nr],Do[Nr]=null,Nr--)}function De(e,t){Nr++,Do[Nr]=e.current,e.current=t}var Qn={},ht=Hn(Qn),Nt=Hn(!1),or=Qn;function zr(e,t){var r=e.type.contextTypes;if(!r)return Qn;var s=e.stateNode;if(s&&s.__reactInternalMemoizedUnmaskedChildContext===t)return s.__reactInternalMemoizedMaskedChildContext;var a={},i;for(i in r)a[i]=t[i];return s&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=a),a}function kt(e){return e=e.childContextTypes,e!=null}function Ya(){Fe(Nt),Fe(ht)}function Wc(e,t,r){if(ht.current!==Qn)throw Error(W(168));De(ht,t),De(Nt,r)}function af(e,t,r){var s=e.stateNode;if(t=t.childContextTypes,typeof s.getChildContext!="function")return r;s=s.getChildContext();for(var a in s)if(!(a in t))throw Error(W(108,h0(e)||"Unknown",a));return Ye({},r,s)}function Ha(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Qn,or=ht.current,De(ht,e),De(Nt,Nt.current),!0}function Gc(e,t,r){var s=e.stateNode;if(!s)throw Error(W(169));r?(e=af(e,t,or),s.__reactInternalMemoizedMergedChildContext=e,Fe(Nt),Fe(ht),De(ht,e)):Fe(Nt),De(Nt,r)}var un=null,hi=!1,Qi=!1;function of(e){un===null?un=[e]:un.push(e)}function _h(e){hi=!0,of(e)}function Wn(){if(!Qi&&un!==null){Qi=!0;var e=0,t=_e;try{var r=un;for(_e=1;e<r.length;e++){var s=r[e];do s=s(!0);while(s!==null)}un=null,hi=!1}catch(a){throw un!==null&&(un=un.slice(e+1)),_u(gl,Wn),a}finally{_e=t,Qi=!1}}return null}var kr=[],Sr=0,Wa=null,Ga=0,It=[],Dt=0,lr=null,fn=1,mn="";function Kn(e,t){kr[Sr++]=Ga,kr[Sr++]=Wa,Wa=e,Ga=t}function lf(e,t,r){It[Dt++]=fn,It[Dt++]=mn,It[Dt++]=lr,lr=e;var s=fn;e=mn;var a=32-Vt(s)-1;s&=~(1<<a),r+=1;var i=32-Vt(t)+a;if(30<i){var o=a-a%5;i=(s&(1<<o)-1).toString(32),s>>=o,a-=o,fn=1<<32-Vt(t)+a|r<<a|s,mn=i+e}else fn=1<<i|r<<a|s,mn=e}function Cl(e){e.return!==null&&(Kn(e,1),lf(e,1,0))}function El(e){for(;e===Wa;)Wa=kr[--Sr],kr[Sr]=null,Ga=kr[--Sr],kr[Sr]=null;for(;e===lr;)lr=It[--Dt],It[Dt]=null,mn=It[--Dt],It[Dt]=null,fn=It[--Dt],It[Dt]=null}var Rt=null,Pt=null,$e=!1,Gt=null;function cf(e,t){var r=Mt(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function Vc(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Rt=e,Pt=Fn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Rt=e,Pt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=lr!==null?{id:fn,overflow:mn}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=Mt(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,Rt=e,Pt=null,!0):!1;default:return!1}}function Mo(e){return(e.mode&1)!==0&&(e.flags&128)===0}function zo(e){if($e){var t=Pt;if(t){var r=t;if(!Vc(e,t)){if(Mo(e))throw Error(W(418));t=Fn(r.nextSibling);var s=Rt;t&&Vc(e,t)?cf(s,r):(e.flags=e.flags&-4097|2,$e=!1,Rt=e)}}else{if(Mo(e))throw Error(W(418));e.flags=e.flags&-4097|2,$e=!1,Rt=e}}}function Xc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Rt=e}function ia(e){if(e!==Rt)return!1;if(!$e)return Xc(e),$e=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Lo(e.type,e.memoizedProps)),t&&(t=Pt)){if(Mo(e))throw df(),Error(W(418));for(;t;)cf(e,t),t=Fn(t.nextSibling)}if(Xc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(W(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){Pt=Fn(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}Pt=null}}else Pt=Rt?Fn(e.stateNode.nextSibling):null;return!0}function df(){for(var e=Pt;e;)e=Fn(e.nextSibling)}function Fr(){Pt=Rt=null,$e=!1}function Pl(e){Gt===null?Gt=[e]:Gt.push(e)}var Lh=wn.ReactCurrentBatchConfig;function ts(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(W(309));var s=r.stateNode}if(!s)throw Error(W(147,e));var a=s,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(o){var l=a.refs;o===null?delete l[i]:l[i]=o},t._stringRef=i,t)}if(typeof e!="string")throw Error(W(284));if(!r._owner)throw Error(W(290,e))}return e}function oa(e,t){throw e=Object.prototype.toString.call(t),Error(W(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Kc(e){var t=e._init;return t(e._payload)}function uf(e){function t(v,m){if(e){var y=v.deletions;y===null?(v.deletions=[m],v.flags|=16):y.push(m)}}function r(v,m){if(!e)return null;for(;m!==null;)t(v,m),m=m.sibling;return null}function s(v,m){for(v=new Map;m!==null;)m.key!==null?v.set(m.key,m):v.set(m.index,m),m=m.sibling;return v}function a(v,m){return v=Un(v,m),v.index=0,v.sibling=null,v}function i(v,m,y){return v.index=y,e?(y=v.alternate,y!==null?(y=y.index,y<m?(v.flags|=2,m):y):(v.flags|=2,m)):(v.flags|=1048576,m)}function o(v){return e&&v.alternate===null&&(v.flags|=2),v}function l(v,m,y,E){return m===null||m.tag!==6?(m=Ki(y,v.mode,E),m.return=v,m):(m=a(m,y),m.return=v,m)}function c(v,m,y,E){var j=y.type;return j===vr?f(v,m,y.props.children,E,y.key):m!==null&&(m.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===Pn&&Kc(j)===m.type)?(E=a(m,y.props),E.ref=ts(v,m,y),E.return=v,E):(E=_a(y.type,y.key,y.props,null,v.mode,E),E.ref=ts(v,m,y),E.return=v,E)}function u(v,m,y,E){return m===null||m.tag!==4||m.stateNode.containerInfo!==y.containerInfo||m.stateNode.implementation!==y.implementation?(m=Ji(y,v.mode,E),m.return=v,m):(m=a(m,y.children||[]),m.return=v,m)}function f(v,m,y,E,j){return m===null||m.tag!==7?(m=ar(y,v.mode,E,j),m.return=v,m):(m=a(m,y),m.return=v,m)}function p(v,m,y){if(typeof m=="string"&&m!==""||typeof m=="number")return m=Ki(""+m,v.mode,y),m.return=v,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Xs:return y=_a(m.type,m.key,m.props,null,v.mode,y),y.ref=ts(v,null,m),y.return=v,y;case gr:return m=Ji(m,v.mode,y),m.return=v,m;case Pn:var E=m._init;return p(v,E(m._payload),y)}if(us(m)||Xr(m))return m=ar(m,v.mode,y,null),m.return=v,m;oa(v,m)}return null}function h(v,m,y,E){var j=m!==null?m.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return j!==null?null:l(v,m,""+y,E);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Xs:return y.key===j?c(v,m,y,E):null;case gr:return y.key===j?u(v,m,y,E):null;case Pn:return j=y._init,h(v,m,j(y._payload),E)}if(us(y)||Xr(y))return j!==null?null:f(v,m,y,E,null);oa(v,y)}return null}function b(v,m,y,E,j){if(typeof E=="string"&&E!==""||typeof E=="number")return v=v.get(y)||null,l(m,v,""+E,j);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case Xs:return v=v.get(E.key===null?y:E.key)||null,c(m,v,E,j);case gr:return v=v.get(E.key===null?y:E.key)||null,u(m,v,E,j);case Pn:var P=E._init;return b(v,m,y,P(E._payload),j)}if(us(E)||Xr(E))return v=v.get(y)||null,f(m,v,E,j,null);oa(m,E)}return null}function g(v,m,y,E){for(var j=null,P=null,S=m,x=m=0,w=null;S!==null&&x<y.length;x++){S.index>x?(w=S,S=null):w=S.sibling;var k=h(v,S,y[x],E);if(k===null){S===null&&(S=w);break}e&&S&&k.alternate===null&&t(v,S),m=i(k,m,x),P===null?j=k:P.sibling=k,P=k,S=w}if(x===y.length)return r(v,S),$e&&Kn(v,x),j;if(S===null){for(;x<y.length;x++)S=p(v,y[x],E),S!==null&&(m=i(S,m,x),P===null?j=S:P.sibling=S,P=S);return $e&&Kn(v,x),j}for(S=s(v,S);x<y.length;x++)w=b(S,v,x,y[x],E),w!==null&&(e&&w.alternate!==null&&S.delete(w.key===null?x:w.key),m=i(w,m,x),P===null?j=w:P.sibling=w,P=w);return e&&S.forEach(function(R){return t(v,R)}),$e&&Kn(v,x),j}function N(v,m,y,E){var j=Xr(y);if(typeof j!="function")throw Error(W(150));if(y=j.call(y),y==null)throw Error(W(151));for(var P=j=null,S=m,x=m=0,w=null,k=y.next();S!==null&&!k.done;x++,k=y.next()){S.index>x?(w=S,S=null):w=S.sibling;var R=h(v,S,k.value,E);if(R===null){S===null&&(S=w);break}e&&S&&R.alternate===null&&t(v,S),m=i(R,m,x),P===null?j=R:P.sibling=R,P=R,S=w}if(k.done)return r(v,S),$e&&Kn(v,x),j;if(S===null){for(;!k.done;x++,k=y.next())k=p(v,k.value,E),k!==null&&(m=i(k,m,x),P===null?j=k:P.sibling=k,P=k);return $e&&Kn(v,x),j}for(S=s(v,S);!k.done;x++,k=y.next())k=b(S,v,x,k.value,E),k!==null&&(e&&k.alternate!==null&&S.delete(k.key===null?x:k.key),m=i(k,m,x),P===null?j=k:P.sibling=k,P=k);return e&&S.forEach(function(M){return t(v,M)}),$e&&Kn(v,x),j}function C(v,m,y,E){if(typeof y=="object"&&y!==null&&y.type===vr&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case Xs:e:{for(var j=y.key,P=m;P!==null;){if(P.key===j){if(j=y.type,j===vr){if(P.tag===7){r(v,P.sibling),m=a(P,y.props.children),m.return=v,v=m;break e}}else if(P.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===Pn&&Kc(j)===P.type){r(v,P.sibling),m=a(P,y.props),m.ref=ts(v,P,y),m.return=v,v=m;break e}r(v,P);break}else t(v,P);P=P.sibling}y.type===vr?(m=ar(y.props.children,v.mode,E,y.key),m.return=v,v=m):(E=_a(y.type,y.key,y.props,null,v.mode,E),E.ref=ts(v,m,y),E.return=v,v=E)}return o(v);case gr:e:{for(P=y.key;m!==null;){if(m.key===P)if(m.tag===4&&m.stateNode.containerInfo===y.containerInfo&&m.stateNode.implementation===y.implementation){r(v,m.sibling),m=a(m,y.children||[]),m.return=v,v=m;break e}else{r(v,m);break}else t(v,m);m=m.sibling}m=Ji(y,v.mode,E),m.return=v,v=m}return o(v);case Pn:return P=y._init,C(v,m,P(y._payload),E)}if(us(y))return g(v,m,y,E);if(Xr(y))return N(v,m,y,E);oa(v,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,m!==null&&m.tag===6?(r(v,m.sibling),m=a(m,y),m.return=v,v=m):(r(v,m),m=Ki(y,v.mode,E),m.return=v,v=m),o(v)):r(v,m)}return C}var Or=uf(!0),ff=uf(!1),Va=Hn(null),Xa=null,Cr=null,Rl=null;function Tl(){Rl=Cr=Xa=null}function _l(e){var t=Va.current;Fe(Va),e._currentValue=t}function Fo(e,t,r){for(;e!==null;){var s=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,s!==null&&(s.childLanes|=t)):s!==null&&(s.childLanes&t)!==t&&(s.childLanes|=t),e===r)break;e=e.return}}function Ar(e,t){Xa=e,Rl=Cr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(jt=!0),e.firstContext=null)}function Ot(e){var t=e._currentValue;if(Rl!==e)if(e={context:e,memoizedValue:t,next:null},Cr===null){if(Xa===null)throw Error(W(308));Cr=e,Xa.dependencies={lanes:0,firstContext:e}}else Cr=Cr.next=e;return t}var er=null;function Ll(e){er===null?er=[e]:er.push(e)}function mf(e,t,r,s){var a=t.interleaved;return a===null?(r.next=r,Ll(t)):(r.next=a.next,a.next=r),t.interleaved=r,vn(e,s)}function vn(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}var Rn=!1;function Al(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function hf(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function hn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function On(e,t,r){var s=e.updateQueue;if(s===null)return null;if(s=s.shared,Se&2){var a=s.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),s.pending=t,vn(e,r)}return a=s.interleaved,a===null?(t.next=t,Ll(s)):(t.next=a.next,a.next=t),s.interleaved=t,vn(e,r)}function Sa(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var s=t.lanes;s&=e.pendingLanes,r|=s,t.lanes=r,vl(e,r)}}function Jc(e,t){var r=e.updateQueue,s=e.alternate;if(s!==null&&(s=s.updateQueue,r===s)){var a=null,i=null;if(r=r.firstBaseUpdate,r!==null){do{var o={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};i===null?a=i=o:i=i.next=o,r=r.next}while(r!==null);i===null?a=i=t:i=i.next=t}else a=i=t;r={baseState:s.baseState,firstBaseUpdate:a,lastBaseUpdate:i,shared:s.shared,effects:s.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function Ka(e,t,r,s){var a=e.updateQueue;Rn=!1;var i=a.firstBaseUpdate,o=a.lastBaseUpdate,l=a.shared.pending;if(l!==null){a.shared.pending=null;var c=l,u=c.next;c.next=null,o===null?i=u:o.next=u,o=c;var f=e.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==o&&(l===null?f.firstBaseUpdate=u:l.next=u,f.lastBaseUpdate=c))}if(i!==null){var p=a.baseState;o=0,f=u=c=null,l=i;do{var h=l.lane,b=l.eventTime;if((s&h)===h){f!==null&&(f=f.next={eventTime:b,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var g=e,N=l;switch(h=t,b=r,N.tag){case 1:if(g=N.payload,typeof g=="function"){p=g.call(b,p,h);break e}p=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=N.payload,h=typeof g=="function"?g.call(b,p,h):g,h==null)break e;p=Ye({},p,h);break e;case 2:Rn=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,h=a.effects,h===null?a.effects=[l]:h.push(l))}else b={eventTime:b,lane:h,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(u=f=b,c=p):f=f.next=b,o|=h;if(l=l.next,l===null){if(l=a.shared.pending,l===null)break;h=l,l=h.next,h.next=null,a.lastBaseUpdate=h,a.shared.pending=null}}while(1);if(f===null&&(c=p),a.baseState=c,a.firstBaseUpdate=u,a.lastBaseUpdate=f,t=a.shared.interleaved,t!==null){a=t;do o|=a.lane,a=a.next;while(a!==t)}else i===null&&(a.shared.lanes=0);dr|=o,e.lanes=o,e.memoizedState=p}}function Zc(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var s=e[t],a=s.callback;if(a!==null){if(s.callback=null,s=r,typeof a!="function")throw Error(W(191,a));a.call(s)}}}var Hs={},on=Hn(Hs),Ds=Hn(Hs),Ms=Hn(Hs);function tr(e){if(e===Hs)throw Error(W(174));return e}function Il(e,t){switch(De(Ms,t),De(Ds,e),De(on,Hs),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:vo(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=vo(t,e)}Fe(on),De(on,t)}function $r(){Fe(on),Fe(Ds),Fe(Ms)}function pf(e){tr(Ms.current);var t=tr(on.current),r=vo(t,e.type);t!==r&&(De(Ds,e),De(on,r))}function Dl(e){Ds.current===e&&(Fe(on),Fe(Ds))}var qe=Hn(0);function Ja(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Yi=[];function Ml(){for(var e=0;e<Yi.length;e++)Yi[e]._workInProgressVersionPrimary=null;Yi.length=0}var Ca=wn.ReactCurrentDispatcher,Hi=wn.ReactCurrentBatchConfig,cr=0,Qe=null,nt=null,st=null,Za=!1,ys=!1,zs=0,Ah=0;function dt(){throw Error(W(321))}function zl(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!Kt(e[r],t[r]))return!1;return!0}function Fl(e,t,r,s,a,i){if(cr=i,Qe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ca.current=e===null||e.memoizedState===null?zh:Fh,e=r(s,a),ys){i=0;do{if(ys=!1,zs=0,25<=i)throw Error(W(301));i+=1,st=nt=null,t.updateQueue=null,Ca.current=Oh,e=r(s,a)}while(ys)}if(Ca.current=ei,t=nt!==null&&nt.next!==null,cr=0,st=nt=Qe=null,Za=!1,t)throw Error(W(300));return e}function Ol(){var e=zs!==0;return zs=0,e}function nn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return st===null?Qe.memoizedState=st=e:st=st.next=e,st}function $t(){if(nt===null){var e=Qe.alternate;e=e!==null?e.memoizedState:null}else e=nt.next;var t=st===null?Qe.memoizedState:st.next;if(t!==null)st=t,nt=e;else{if(e===null)throw Error(W(310));nt=e,e={memoizedState:nt.memoizedState,baseState:nt.baseState,baseQueue:nt.baseQueue,queue:nt.queue,next:null},st===null?Qe.memoizedState=st=e:st=st.next=e}return st}function Fs(e,t){return typeof t=="function"?t(e):t}function Wi(e){var t=$t(),r=t.queue;if(r===null)throw Error(W(311));r.lastRenderedReducer=e;var s=nt,a=s.baseQueue,i=r.pending;if(i!==null){if(a!==null){var o=a.next;a.next=i.next,i.next=o}s.baseQueue=a=i,r.pending=null}if(a!==null){i=a.next,s=s.baseState;var l=o=null,c=null,u=i;do{var f=u.lane;if((cr&f)===f)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),s=u.hasEagerState?u.eagerState:e(s,u.action);else{var p={lane:f,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(l=c=p,o=s):c=c.next=p,Qe.lanes|=f,dr|=f}u=u.next}while(u!==null&&u!==i);c===null?o=s:c.next=l,Kt(s,t.memoizedState)||(jt=!0),t.memoizedState=s,t.baseState=o,t.baseQueue=c,r.lastRenderedState=s}if(e=r.interleaved,e!==null){a=e;do i=a.lane,Qe.lanes|=i,dr|=i,a=a.next;while(a!==e)}else a===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function Gi(e){var t=$t(),r=t.queue;if(r===null)throw Error(W(311));r.lastRenderedReducer=e;var s=r.dispatch,a=r.pending,i=t.memoizedState;if(a!==null){r.pending=null;var o=a=a.next;do i=e(i,o.action),o=o.next;while(o!==a);Kt(i,t.memoizedState)||(jt=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),r.lastRenderedState=i}return[i,s]}function xf(){}function gf(e,t){var r=Qe,s=$t(),a=t(),i=!Kt(s.memoizedState,a);if(i&&(s.memoizedState=a,jt=!0),s=s.queue,$l(bf.bind(null,r,s,e),[e]),s.getSnapshot!==t||i||st!==null&&st.memoizedState.tag&1){if(r.flags|=2048,Os(9,yf.bind(null,r,s,a,t),void 0,null),at===null)throw Error(W(349));cr&30||vf(r,t,a)}return a}function vf(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=Qe.updateQueue,t===null?(t={lastEffect:null,stores:null},Qe.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function yf(e,t,r,s){t.value=r,t.getSnapshot=s,wf(t)&&jf(e)}function bf(e,t,r){return r(function(){wf(t)&&jf(e)})}function wf(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!Kt(e,r)}catch{return!0}}function jf(e){var t=vn(e,1);t!==null&&Xt(t,e,1,-1)}function ed(e){var t=nn();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Fs,lastRenderedState:e},t.queue=e,e=e.dispatch=Mh.bind(null,Qe,e),[t.memoizedState,e]}function Os(e,t,r,s){return e={tag:e,create:t,destroy:r,deps:s,next:null},t=Qe.updateQueue,t===null?(t={lastEffect:null,stores:null},Qe.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(s=r.next,r.next=e,e.next=s,t.lastEffect=e)),e}function Nf(){return $t().memoizedState}function Ea(e,t,r,s){var a=nn();Qe.flags|=e,a.memoizedState=Os(1|t,r,void 0,s===void 0?null:s)}function pi(e,t,r,s){var a=$t();s=s===void 0?null:s;var i=void 0;if(nt!==null){var o=nt.memoizedState;if(i=o.destroy,s!==null&&zl(s,o.deps)){a.memoizedState=Os(t,r,i,s);return}}Qe.flags|=e,a.memoizedState=Os(1|t,r,i,s)}function td(e,t){return Ea(8390656,8,e,t)}function $l(e,t){return pi(2048,8,e,t)}function kf(e,t){return pi(4,2,e,t)}function Sf(e,t){return pi(4,4,e,t)}function Cf(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Ef(e,t,r){return r=r!=null?r.concat([e]):null,pi(4,4,Cf.bind(null,t,e),r)}function Bl(){}function Pf(e,t){var r=$t();t=t===void 0?null:t;var s=r.memoizedState;return s!==null&&t!==null&&zl(t,s[1])?s[0]:(r.memoizedState=[e,t],e)}function Rf(e,t){var r=$t();t=t===void 0?null:t;var s=r.memoizedState;return s!==null&&t!==null&&zl(t,s[1])?s[0]:(e=e(),r.memoizedState=[e,t],e)}function Tf(e,t,r){return cr&21?(Kt(r,t)||(r=Iu(),Qe.lanes|=r,dr|=r,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,jt=!0),e.memoizedState=r)}function Ih(e,t){var r=_e;_e=r!==0&&4>r?r:4,e(!0);var s=Hi.transition;Hi.transition={};try{e(!1),t()}finally{_e=r,Hi.transition=s}}function _f(){return $t().memoizedState}function Dh(e,t,r){var s=Bn(e);if(r={lane:s,action:r,hasEagerState:!1,eagerState:null,next:null},Lf(e))Af(t,r);else if(r=mf(e,t,r,s),r!==null){var a=gt();Xt(r,e,s,a),If(r,t,s)}}function Mh(e,t,r){var s=Bn(e),a={lane:s,action:r,hasEagerState:!1,eagerState:null,next:null};if(Lf(e))Af(t,a);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var o=t.lastRenderedState,l=i(o,r);if(a.hasEagerState=!0,a.eagerState=l,Kt(l,o)){var c=t.interleaved;c===null?(a.next=a,Ll(t)):(a.next=c.next,c.next=a),t.interleaved=a;return}}catch{}finally{}r=mf(e,t,a,s),r!==null&&(a=gt(),Xt(r,e,s,a),If(r,t,s))}}function Lf(e){var t=e.alternate;return e===Qe||t!==null&&t===Qe}function Af(e,t){ys=Za=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function If(e,t,r){if(r&4194240){var s=t.lanes;s&=e.pendingLanes,r|=s,t.lanes=r,vl(e,r)}}var ei={readContext:Ot,useCallback:dt,useContext:dt,useEffect:dt,useImperativeHandle:dt,useInsertionEffect:dt,useLayoutEffect:dt,useMemo:dt,useReducer:dt,useRef:dt,useState:dt,useDebugValue:dt,useDeferredValue:dt,useTransition:dt,useMutableSource:dt,useSyncExternalStore:dt,useId:dt,unstable_isNewReconciler:!1},zh={readContext:Ot,useCallback:function(e,t){return nn().memoizedState=[e,t===void 0?null:t],e},useContext:Ot,useEffect:td,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,Ea(4194308,4,Cf.bind(null,t,e),r)},useLayoutEffect:function(e,t){return Ea(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ea(4,2,e,t)},useMemo:function(e,t){var r=nn();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var s=nn();return t=r!==void 0?r(t):t,s.memoizedState=s.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},s.queue=e,e=e.dispatch=Dh.bind(null,Qe,e),[s.memoizedState,e]},useRef:function(e){var t=nn();return e={current:e},t.memoizedState=e},useState:ed,useDebugValue:Bl,useDeferredValue:function(e){return nn().memoizedState=e},useTransition:function(){var e=ed(!1),t=e[0];return e=Ih.bind(null,e[1]),nn().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var s=Qe,a=nn();if($e){if(r===void 0)throw Error(W(407));r=r()}else{if(r=t(),at===null)throw Error(W(349));cr&30||vf(s,t,r)}a.memoizedState=r;var i={value:r,getSnapshot:t};return a.queue=i,td(bf.bind(null,s,i,e),[e]),s.flags|=2048,Os(9,yf.bind(null,s,i,r,t),void 0,null),r},useId:function(){var e=nn(),t=at.identifierPrefix;if($e){var r=mn,s=fn;r=(s&~(1<<32-Vt(s)-1)).toString(32)+r,t=":"+t+"R"+r,r=zs++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=Ah++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Fh={readContext:Ot,useCallback:Pf,useContext:Ot,useEffect:$l,useImperativeHandle:Ef,useInsertionEffect:kf,useLayoutEffect:Sf,useMemo:Rf,useReducer:Wi,useRef:Nf,useState:function(){return Wi(Fs)},useDebugValue:Bl,useDeferredValue:function(e){var t=$t();return Tf(t,nt.memoizedState,e)},useTransition:function(){var e=Wi(Fs)[0],t=$t().memoizedState;return[e,t]},useMutableSource:xf,useSyncExternalStore:gf,useId:_f,unstable_isNewReconciler:!1},Oh={readContext:Ot,useCallback:Pf,useContext:Ot,useEffect:$l,useImperativeHandle:Ef,useInsertionEffect:kf,useLayoutEffect:Sf,useMemo:Rf,useReducer:Gi,useRef:Nf,useState:function(){return Gi(Fs)},useDebugValue:Bl,useDeferredValue:function(e){var t=$t();return nt===null?t.memoizedState=e:Tf(t,nt.memoizedState,e)},useTransition:function(){var e=Gi(Fs)[0],t=$t().memoizedState;return[e,t]},useMutableSource:xf,useSyncExternalStore:gf,useId:_f,unstable_isNewReconciler:!1};function Ht(e,t){if(e&&e.defaultProps){t=Ye({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}function Oo(e,t,r,s){t=e.memoizedState,r=r(s,t),r=r==null?t:Ye({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var xi={isMounted:function(e){return(e=e._reactInternals)?mr(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var s=gt(),a=Bn(e),i=hn(s,a);i.payload=t,r!=null&&(i.callback=r),t=On(e,i,a),t!==null&&(Xt(t,e,a,s),Sa(t,e,a))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var s=gt(),a=Bn(e),i=hn(s,a);i.tag=1,i.payload=t,r!=null&&(i.callback=r),t=On(e,i,a),t!==null&&(Xt(t,e,a,s),Sa(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=gt(),s=Bn(e),a=hn(r,s);a.tag=2,t!=null&&(a.callback=t),t=On(e,a,s),t!==null&&(Xt(t,e,s,r),Sa(t,e,s))}};function nd(e,t,r,s,a,i,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(s,i,o):t.prototype&&t.prototype.isPureReactComponent?!_s(r,s)||!_s(a,i):!0}function Df(e,t,r){var s=!1,a=Qn,i=t.contextType;return typeof i=="object"&&i!==null?i=Ot(i):(a=kt(t)?or:ht.current,s=t.contextTypes,i=(s=s!=null)?zr(e,a):Qn),t=new t(r,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=xi,e.stateNode=t,t._reactInternals=e,s&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=i),t}function rd(e,t,r,s){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,s),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,s),t.state!==e&&xi.enqueueReplaceState(t,t.state,null)}function $o(e,t,r,s){var a=e.stateNode;a.props=r,a.state=e.memoizedState,a.refs={},Al(e);var i=t.contextType;typeof i=="object"&&i!==null?a.context=Ot(i):(i=kt(t)?or:ht.current,a.context=zr(e,i)),a.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Oo(e,t,i,r),a.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(t=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),t!==a.state&&xi.enqueueReplaceState(a,a.state,null),Ka(e,r,a,s),a.state=e.memoizedState),typeof a.componentDidMount=="function"&&(e.flags|=4194308)}function Br(e,t){try{var r="",s=t;do r+=m0(s),s=s.return;while(s);var a=r}catch(i){a=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:a,digest:null}}function Vi(e,t,r){return{value:e,source:null,stack:r??null,digest:t??null}}function Bo(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var $h=typeof WeakMap=="function"?WeakMap:Map;function Mf(e,t,r){r=hn(-1,r),r.tag=3,r.payload={element:null};var s=t.value;return r.callback=function(){ni||(ni=!0,Ko=s),Bo(e,t)},r}function zf(e,t,r){r=hn(-1,r),r.tag=3;var s=e.type.getDerivedStateFromError;if(typeof s=="function"){var a=t.value;r.payload=function(){return s(a)},r.callback=function(){Bo(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(r.callback=function(){Bo(e,t),typeof s!="function"&&($n===null?$n=new Set([this]):$n.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),r}function sd(e,t,r){var s=e.pingCache;if(s===null){s=e.pingCache=new $h;var a=new Set;s.set(t,a)}else a=s.get(t),a===void 0&&(a=new Set,s.set(t,a));a.has(r)||(a.add(r),e=ep.bind(null,e,t,r),t.then(e,e))}function ad(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function id(e,t,r,s,a){return e.mode&1?(e.flags|=65536,e.lanes=a,e):(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=hn(-1,1),t.tag=2,On(r,t,1))),r.lanes|=1),e)}var Bh=wn.ReactCurrentOwner,jt=!1;function xt(e,t,r,s){t.child=e===null?ff(t,null,r,s):Or(t,e.child,r,s)}function od(e,t,r,s,a){r=r.render;var i=t.ref;return Ar(t,a),s=Fl(e,t,r,s,i,a),r=Ol(),e!==null&&!jt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,yn(e,t,a)):($e&&r&&Cl(t),t.flags|=1,xt(e,t,s,a),t.child)}function ld(e,t,r,s,a){if(e===null){var i=r.type;return typeof i=="function"&&!Vl(i)&&i.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=i,Ff(e,t,i,s,a)):(e=_a(r.type,null,s,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&a)){var o=i.memoizedProps;if(r=r.compare,r=r!==null?r:_s,r(o,s)&&e.ref===t.ref)return yn(e,t,a)}return t.flags|=1,e=Un(i,s),e.ref=t.ref,e.return=t,t.child=e}function Ff(e,t,r,s,a){if(e!==null){var i=e.memoizedProps;if(_s(i,s)&&e.ref===t.ref)if(jt=!1,t.pendingProps=s=i,(e.lanes&a)!==0)e.flags&131072&&(jt=!0);else return t.lanes=e.lanes,yn(e,t,a)}return Uo(e,t,r,s,a)}function Of(e,t,r){var s=t.pendingProps,a=s.children,i=e!==null?e.memoizedState:null;if(s.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},De(Pr,Et),Et|=r;else{if(!(r&1073741824))return e=i!==null?i.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,De(Pr,Et),Et|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},s=i!==null?i.baseLanes:r,De(Pr,Et),Et|=s}else i!==null?(s=i.baseLanes|r,t.memoizedState=null):s=r,De(Pr,Et),Et|=s;return xt(e,t,a,r),t.child}function $f(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function Uo(e,t,r,s,a){var i=kt(r)?or:ht.current;return i=zr(t,i),Ar(t,a),r=Fl(e,t,r,s,i,a),s=Ol(),e!==null&&!jt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,yn(e,t,a)):($e&&s&&Cl(t),t.flags|=1,xt(e,t,r,a),t.child)}function cd(e,t,r,s,a){if(kt(r)){var i=!0;Ha(t)}else i=!1;if(Ar(t,a),t.stateNode===null)Pa(e,t),Df(t,r,s),$o(t,r,s,a),s=!0;else if(e===null){var o=t.stateNode,l=t.memoizedProps;o.props=l;var c=o.context,u=r.contextType;typeof u=="object"&&u!==null?u=Ot(u):(u=kt(r)?or:ht.current,u=zr(t,u));var f=r.getDerivedStateFromProps,p=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==s||c!==u)&&rd(t,o,s,u),Rn=!1;var h=t.memoizedState;o.state=h,Ka(t,s,o,a),c=t.memoizedState,l!==s||h!==c||Nt.current||Rn?(typeof f=="function"&&(Oo(t,r,f,s),c=t.memoizedState),(l=Rn||nd(t,r,l,s,h,c,u))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=s,t.memoizedState=c),o.props=s,o.state=c,o.context=u,s=l):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),s=!1)}else{o=t.stateNode,hf(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:Ht(t.type,l),o.props=u,p=t.pendingProps,h=o.context,c=r.contextType,typeof c=="object"&&c!==null?c=Ot(c):(c=kt(r)?or:ht.current,c=zr(t,c));var b=r.getDerivedStateFromProps;(f=typeof b=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==p||h!==c)&&rd(t,o,s,c),Rn=!1,h=t.memoizedState,o.state=h,Ka(t,s,o,a);var g=t.memoizedState;l!==p||h!==g||Nt.current||Rn?(typeof b=="function"&&(Oo(t,r,b,s),g=t.memoizedState),(u=Rn||nd(t,r,u,s,h,g,c)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(s,g,c),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(s,g,c)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=s,t.memoizedState=g),o.props=s,o.state=g,o.context=c,s=u):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),s=!1)}return qo(e,t,r,s,i,a)}function qo(e,t,r,s,a,i){$f(e,t);var o=(t.flags&128)!==0;if(!s&&!o)return a&&Gc(t,r,!1),yn(e,t,i);s=t.stateNode,Bh.current=t;var l=o&&typeof r.getDerivedStateFromError!="function"?null:s.render();return t.flags|=1,e!==null&&o?(t.child=Or(t,e.child,null,i),t.child=Or(t,null,l,i)):xt(e,t,l,i),t.memoizedState=s.state,a&&Gc(t,r,!0),t.child}function Bf(e){var t=e.stateNode;t.pendingContext?Wc(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Wc(e,t.context,!1),Il(e,t.containerInfo)}function dd(e,t,r,s,a){return Fr(),Pl(a),t.flags|=256,xt(e,t,r,s),t.child}var Qo={dehydrated:null,treeContext:null,retryLane:0};function Yo(e){return{baseLanes:e,cachePool:null,transitions:null}}function Uf(e,t,r){var s=t.pendingProps,a=qe.current,i=!1,o=(t.flags&128)!==0,l;if((l=o)||(l=e!==null&&e.memoizedState===null?!1:(a&2)!==0),l?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(a|=1),De(qe,a&1),e===null)return zo(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=s.children,e=s.fallback,i?(s=t.mode,i=t.child,o={mode:"hidden",children:o},!(s&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=yi(o,s,0,null),e=ar(e,s,r,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Yo(r),t.memoizedState=Qo,e):Ul(t,o));if(a=e.memoizedState,a!==null&&(l=a.dehydrated,l!==null))return Uh(e,t,o,s,l,a,r);if(i){i=s.fallback,o=t.mode,a=e.child,l=a.sibling;var c={mode:"hidden",children:s.children};return!(o&1)&&t.child!==a?(s=t.child,s.childLanes=0,s.pendingProps=c,t.deletions=null):(s=Un(a,c),s.subtreeFlags=a.subtreeFlags&14680064),l!==null?i=Un(l,i):(i=ar(i,o,r,null),i.flags|=2),i.return=t,s.return=t,s.sibling=i,t.child=s,s=i,i=t.child,o=e.child.memoizedState,o=o===null?Yo(r):{baseLanes:o.baseLanes|r,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=e.childLanes&~r,t.memoizedState=Qo,s}return i=e.child,e=i.sibling,s=Un(i,{mode:"visible",children:s.children}),!(t.mode&1)&&(s.lanes=r),s.return=t,s.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=s,t.memoizedState=null,s}function Ul(e,t){return t=yi({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function la(e,t,r,s){return s!==null&&Pl(s),Or(t,e.child,null,r),e=Ul(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Uh(e,t,r,s,a,i,o){if(r)return t.flags&256?(t.flags&=-257,s=Vi(Error(W(422))),la(e,t,o,s)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=s.fallback,a=t.mode,s=yi({mode:"visible",children:s.children},a,0,null),i=ar(i,a,o,null),i.flags|=2,s.return=t,i.return=t,s.sibling=i,t.child=s,t.mode&1&&Or(t,e.child,null,o),t.child.memoizedState=Yo(o),t.memoizedState=Qo,i);if(!(t.mode&1))return la(e,t,o,null);if(a.data==="$!"){if(s=a.nextSibling&&a.nextSibling.dataset,s)var l=s.dgst;return s=l,i=Error(W(419)),s=Vi(i,s,void 0),la(e,t,o,s)}if(l=(o&e.childLanes)!==0,jt||l){if(s=at,s!==null){switch(o&-o){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=a&(s.suspendedLanes|o)?0:a,a!==0&&a!==i.retryLane&&(i.retryLane=a,vn(e,a),Xt(s,e,a,-1))}return Gl(),s=Vi(Error(W(421))),la(e,t,o,s)}return a.data==="$?"?(t.flags|=128,t.child=e.child,t=tp.bind(null,e),a._reactRetry=t,null):(e=i.treeContext,Pt=Fn(a.nextSibling),Rt=t,$e=!0,Gt=null,e!==null&&(It[Dt++]=fn,It[Dt++]=mn,It[Dt++]=lr,fn=e.id,mn=e.overflow,lr=t),t=Ul(t,s.children),t.flags|=4096,t)}function ud(e,t,r){e.lanes|=t;var s=e.alternate;s!==null&&(s.lanes|=t),Fo(e.return,t,r)}function Xi(e,t,r,s,a){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:s,tail:r,tailMode:a}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=s,i.tail=r,i.tailMode=a)}function qf(e,t,r){var s=t.pendingProps,a=s.revealOrder,i=s.tail;if(xt(e,t,s.children,r),s=qe.current,s&2)s=s&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ud(e,r,t);else if(e.tag===19)ud(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}s&=1}if(De(qe,s),!(t.mode&1))t.memoizedState=null;else switch(a){case"forwards":for(r=t.child,a=null;r!==null;)e=r.alternate,e!==null&&Ja(e)===null&&(a=r),r=r.sibling;r=a,r===null?(a=t.child,t.child=null):(a=r.sibling,r.sibling=null),Xi(t,!1,a,r,i);break;case"backwards":for(r=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&Ja(e)===null){t.child=a;break}e=a.sibling,a.sibling=r,r=a,a=e}Xi(t,!0,r,null,i);break;case"together":Xi(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Pa(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function yn(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),dr|=t.lanes,!(r&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(W(153));if(t.child!==null){for(e=t.child,r=Un(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=Un(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function qh(e,t,r){switch(t.tag){case 3:Bf(t),Fr();break;case 5:pf(t);break;case 1:kt(t.type)&&Ha(t);break;case 4:Il(t,t.stateNode.containerInfo);break;case 10:var s=t.type._context,a=t.memoizedProps.value;De(Va,s._currentValue),s._currentValue=a;break;case 13:if(s=t.memoizedState,s!==null)return s.dehydrated!==null?(De(qe,qe.current&1),t.flags|=128,null):r&t.child.childLanes?Uf(e,t,r):(De(qe,qe.current&1),e=yn(e,t,r),e!==null?e.sibling:null);De(qe,qe.current&1);break;case 19:if(s=(r&t.childLanes)!==0,e.flags&128){if(s)return qf(e,t,r);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),De(qe,qe.current),s)break;return null;case 22:case 23:return t.lanes=0,Of(e,t,r)}return yn(e,t,r)}var Qf,Ho,Yf,Hf;Qf=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}};Ho=function(){};Yf=function(e,t,r,s){var a=e.memoizedProps;if(a!==s){e=t.stateNode,tr(on.current);var i=null;switch(r){case"input":a=ho(e,a),s=ho(e,s),i=[];break;case"select":a=Ye({},a,{value:void 0}),s=Ye({},s,{value:void 0}),i=[];break;case"textarea":a=go(e,a),s=go(e,s),i=[];break;default:typeof a.onClick!="function"&&typeof s.onClick=="function"&&(e.onclick=Qa)}yo(r,s);var o;r=null;for(u in a)if(!s.hasOwnProperty(u)&&a.hasOwnProperty(u)&&a[u]!=null)if(u==="style"){var l=a[u];for(o in l)l.hasOwnProperty(o)&&(r||(r={}),r[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(ks.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in s){var c=s[u];if(l=a!=null?a[u]:void 0,s.hasOwnProperty(u)&&c!==l&&(c!=null||l!=null))if(u==="style")if(l){for(o in l)!l.hasOwnProperty(o)||c&&c.hasOwnProperty(o)||(r||(r={}),r[o]="");for(o in c)c.hasOwnProperty(o)&&l[o]!==c[o]&&(r||(r={}),r[o]=c[o])}else r||(i||(i=[]),i.push(u,r)),r=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,l=l?l.__html:void 0,c!=null&&l!==c&&(i=i||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(i=i||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(ks.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&Me("scroll",e),i||l===c||(i=[])):(i=i||[]).push(u,c))}r&&(i=i||[]).push("style",r);var u=i;(t.updateQueue=u)&&(t.flags|=4)}};Hf=function(e,t,r,s){r!==s&&(t.flags|=4)};function ns(e,t){if(!$e)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var s=null;r!==null;)r.alternate!==null&&(s=r),r=r.sibling;s===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:s.sibling=null}}function ut(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,s=0;if(t)for(var a=e.child;a!==null;)r|=a.lanes|a.childLanes,s|=a.subtreeFlags&14680064,s|=a.flags&14680064,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)r|=a.lanes|a.childLanes,s|=a.subtreeFlags,s|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=s,e.childLanes=r,t}function Qh(e,t,r){var s=t.pendingProps;switch(El(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ut(t),null;case 1:return kt(t.type)&&Ya(),ut(t),null;case 3:return s=t.stateNode,$r(),Fe(Nt),Fe(ht),Ml(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(e===null||e.child===null)&&(ia(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Gt!==null&&(el(Gt),Gt=null))),Ho(e,t),ut(t),null;case 5:Dl(t);var a=tr(Ms.current);if(r=t.type,e!==null&&t.stateNode!=null)Yf(e,t,r,s,a),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!s){if(t.stateNode===null)throw Error(W(166));return ut(t),null}if(e=tr(on.current),ia(t)){s=t.stateNode,r=t.type;var i=t.memoizedProps;switch(s[sn]=t,s[Is]=i,e=(t.mode&1)!==0,r){case"dialog":Me("cancel",s),Me("close",s);break;case"iframe":case"object":case"embed":Me("load",s);break;case"video":case"audio":for(a=0;a<ms.length;a++)Me(ms[a],s);break;case"source":Me("error",s);break;case"img":case"image":case"link":Me("error",s),Me("load",s);break;case"details":Me("toggle",s);break;case"input":bc(s,i),Me("invalid",s);break;case"select":s._wrapperState={wasMultiple:!!i.multiple},Me("invalid",s);break;case"textarea":jc(s,i),Me("invalid",s)}yo(r,i),a=null;for(var o in i)if(i.hasOwnProperty(o)){var l=i[o];o==="children"?typeof l=="string"?s.textContent!==l&&(i.suppressHydrationWarning!==!0&&aa(s.textContent,l,e),a=["children",l]):typeof l=="number"&&s.textContent!==""+l&&(i.suppressHydrationWarning!==!0&&aa(s.textContent,l,e),a=["children",""+l]):ks.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&Me("scroll",s)}switch(r){case"input":Ks(s),wc(s,i,!0);break;case"textarea":Ks(s),Nc(s);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(s.onclick=Qa)}s=a,t.updateQueue=s,s!==null&&(t.flags|=4)}else{o=a.nodeType===9?a:a.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=yu(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof s.is=="string"?e=o.createElement(r,{is:s.is}):(e=o.createElement(r),r==="select"&&(o=e,s.multiple?o.multiple=!0:s.size&&(o.size=s.size))):e=o.createElementNS(e,r),e[sn]=t,e[Is]=s,Qf(e,t,!1,!1),t.stateNode=e;e:{switch(o=bo(r,s),r){case"dialog":Me("cancel",e),Me("close",e),a=s;break;case"iframe":case"object":case"embed":Me("load",e),a=s;break;case"video":case"audio":for(a=0;a<ms.length;a++)Me(ms[a],e);a=s;break;case"source":Me("error",e),a=s;break;case"img":case"image":case"link":Me("error",e),Me("load",e),a=s;break;case"details":Me("toggle",e),a=s;break;case"input":bc(e,s),a=ho(e,s),Me("invalid",e);break;case"option":a=s;break;case"select":e._wrapperState={wasMultiple:!!s.multiple},a=Ye({},s,{value:void 0}),Me("invalid",e);break;case"textarea":jc(e,s),a=go(e,s),Me("invalid",e);break;default:a=s}yo(r,a),l=a;for(i in l)if(l.hasOwnProperty(i)){var c=l[i];i==="style"?ju(e,c):i==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&bu(e,c)):i==="children"?typeof c=="string"?(r!=="textarea"||c!=="")&&Ss(e,c):typeof c=="number"&&Ss(e,""+c):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(ks.hasOwnProperty(i)?c!=null&&i==="onScroll"&&Me("scroll",e):c!=null&&fl(e,i,c,o))}switch(r){case"input":Ks(e),wc(e,s,!1);break;case"textarea":Ks(e),Nc(e);break;case"option":s.value!=null&&e.setAttribute("value",""+qn(s.value));break;case"select":e.multiple=!!s.multiple,i=s.value,i!=null?Rr(e,!!s.multiple,i,!1):s.defaultValue!=null&&Rr(e,!!s.multiple,s.defaultValue,!0);break;default:typeof a.onClick=="function"&&(e.onclick=Qa)}switch(r){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break e;case"img":s=!0;break e;default:s=!1}}s&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ut(t),null;case 6:if(e&&t.stateNode!=null)Hf(e,t,e.memoizedProps,s);else{if(typeof s!="string"&&t.stateNode===null)throw Error(W(166));if(r=tr(Ms.current),tr(on.current),ia(t)){if(s=t.stateNode,r=t.memoizedProps,s[sn]=t,(i=s.nodeValue!==r)&&(e=Rt,e!==null))switch(e.tag){case 3:aa(s.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&aa(s.nodeValue,r,(e.mode&1)!==0)}i&&(t.flags|=4)}else s=(r.nodeType===9?r:r.ownerDocument).createTextNode(s),s[sn]=t,t.stateNode=s}return ut(t),null;case 13:if(Fe(qe),s=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if($e&&Pt!==null&&t.mode&1&&!(t.flags&128))df(),Fr(),t.flags|=98560,i=!1;else if(i=ia(t),s!==null&&s.dehydrated!==null){if(e===null){if(!i)throw Error(W(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(W(317));i[sn]=t}else Fr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ut(t),i=!1}else Gt!==null&&(el(Gt),Gt=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=r,t):(s=s!==null,s!==(e!==null&&e.memoizedState!==null)&&s&&(t.child.flags|=8192,t.mode&1&&(e===null||qe.current&1?rt===0&&(rt=3):Gl())),t.updateQueue!==null&&(t.flags|=4),ut(t),null);case 4:return $r(),Ho(e,t),e===null&&Ls(t.stateNode.containerInfo),ut(t),null;case 10:return _l(t.type._context),ut(t),null;case 17:return kt(t.type)&&Ya(),ut(t),null;case 19:if(Fe(qe),i=t.memoizedState,i===null)return ut(t),null;if(s=(t.flags&128)!==0,o=i.rendering,o===null)if(s)ns(i,!1);else{if(rt!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=Ja(e),o!==null){for(t.flags|=128,ns(i,!1),s=o.updateQueue,s!==null&&(t.updateQueue=s,t.flags|=4),t.subtreeFlags=0,s=r,r=t.child;r!==null;)i=r,e=s,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,e=o.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return De(qe,qe.current&1|2),t.child}e=e.sibling}i.tail!==null&&Xe()>Ur&&(t.flags|=128,s=!0,ns(i,!1),t.lanes=4194304)}else{if(!s)if(e=Ja(o),e!==null){if(t.flags|=128,s=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),ns(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!$e)return ut(t),null}else 2*Xe()-i.renderingStartTime>Ur&&r!==1073741824&&(t.flags|=128,s=!0,ns(i,!1),t.lanes=4194304);i.isBackwards?(o.sibling=t.child,t.child=o):(r=i.last,r!==null?r.sibling=o:t.child=o,i.last=o)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=Xe(),t.sibling=null,r=qe.current,De(qe,s?r&1|2:r&1),t):(ut(t),null);case 22:case 23:return Wl(),s=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==s&&(t.flags|=8192),s&&t.mode&1?Et&1073741824&&(ut(t),t.subtreeFlags&6&&(t.flags|=8192)):ut(t),null;case 24:return null;case 25:return null}throw Error(W(156,t.tag))}function Yh(e,t){switch(El(t),t.tag){case 1:return kt(t.type)&&Ya(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return $r(),Fe(Nt),Fe(ht),Ml(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Dl(t),null;case 13:if(Fe(qe),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(W(340));Fr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Fe(qe),null;case 4:return $r(),null;case 10:return _l(t.type._context),null;case 22:case 23:return Wl(),null;case 24:return null;default:return null}}var ca=!1,mt=!1,Hh=typeof WeakSet=="function"?WeakSet:Set,se=null;function Er(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(s){We(e,t,s)}else r.current=null}function Wo(e,t,r){try{r()}catch(s){We(e,t,s)}}var fd=!1;function Wh(e,t){if(To=Ba,e=Xu(),Sl(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var s=r.getSelection&&r.getSelection();if(s&&s.rangeCount!==0){r=s.anchorNode;var a=s.anchorOffset,i=s.focusNode;s=s.focusOffset;try{r.nodeType,i.nodeType}catch{r=null;break e}var o=0,l=-1,c=-1,u=0,f=0,p=e,h=null;t:for(;;){for(var b;p!==r||a!==0&&p.nodeType!==3||(l=o+a),p!==i||s!==0&&p.nodeType!==3||(c=o+s),p.nodeType===3&&(o+=p.nodeValue.length),(b=p.firstChild)!==null;)h=p,p=b;for(;;){if(p===e)break t;if(h===r&&++u===a&&(l=o),h===i&&++f===s&&(c=o),(b=p.nextSibling)!==null)break;p=h,h=p.parentNode}p=b}r=l===-1||c===-1?null:{start:l,end:c}}else r=null}r=r||{start:0,end:0}}else r=null;for(_o={focusedElem:e,selectionRange:r},Ba=!1,se=t;se!==null;)if(t=se,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,se=e;else for(;se!==null;){t=se;try{var g=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var N=g.memoizedProps,C=g.memoizedState,v=t.stateNode,m=v.getSnapshotBeforeUpdate(t.elementType===t.type?N:Ht(t.type,N),C);v.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var y=t.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(W(163))}}catch(E){We(t,t.return,E)}if(e=t.sibling,e!==null){e.return=t.return,se=e;break}se=t.return}return g=fd,fd=!1,g}function bs(e,t,r){var s=t.updateQueue;if(s=s!==null?s.lastEffect:null,s!==null){var a=s=s.next;do{if((a.tag&e)===e){var i=a.destroy;a.destroy=void 0,i!==void 0&&Wo(t,r,i)}a=a.next}while(a!==s)}}function gi(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var s=r.create;r.destroy=s()}r=r.next}while(r!==t)}}function Go(e){var t=e.ref;if(t!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof t=="function"?t(e):t.current=e}}function Wf(e){var t=e.alternate;t!==null&&(e.alternate=null,Wf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[sn],delete t[Is],delete t[Io],delete t[Rh],delete t[Th])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Gf(e){return e.tag===5||e.tag===3||e.tag===4}function md(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Gf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Vo(e,t,r){var s=e.tag;if(s===5||s===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=Qa));else if(s!==4&&(e=e.child,e!==null))for(Vo(e,t,r),e=e.sibling;e!==null;)Vo(e,t,r),e=e.sibling}function Xo(e,t,r){var s=e.tag;if(s===5||s===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(s!==4&&(e=e.child,e!==null))for(Xo(e,t,r),e=e.sibling;e!==null;)Xo(e,t,r),e=e.sibling}var ot=null,Wt=!1;function kn(e,t,r){for(r=r.child;r!==null;)Vf(e,t,r),r=r.sibling}function Vf(e,t,r){if(an&&typeof an.onCommitFiberUnmount=="function")try{an.onCommitFiberUnmount(ci,r)}catch{}switch(r.tag){case 5:mt||Er(r,t);case 6:var s=ot,a=Wt;ot=null,kn(e,t,r),ot=s,Wt=a,ot!==null&&(Wt?(e=ot,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):ot.removeChild(r.stateNode));break;case 18:ot!==null&&(Wt?(e=ot,r=r.stateNode,e.nodeType===8?qi(e.parentNode,r):e.nodeType===1&&qi(e,r),Rs(e)):qi(ot,r.stateNode));break;case 4:s=ot,a=Wt,ot=r.stateNode.containerInfo,Wt=!0,kn(e,t,r),ot=s,Wt=a;break;case 0:case 11:case 14:case 15:if(!mt&&(s=r.updateQueue,s!==null&&(s=s.lastEffect,s!==null))){a=s=s.next;do{var i=a,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&Wo(r,t,o),a=a.next}while(a!==s)}kn(e,t,r);break;case 1:if(!mt&&(Er(r,t),s=r.stateNode,typeof s.componentWillUnmount=="function"))try{s.props=r.memoizedProps,s.state=r.memoizedState,s.componentWillUnmount()}catch(l){We(r,t,l)}kn(e,t,r);break;case 21:kn(e,t,r);break;case 22:r.mode&1?(mt=(s=mt)||r.memoizedState!==null,kn(e,t,r),mt=s):kn(e,t,r);break;default:kn(e,t,r)}}function hd(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new Hh),t.forEach(function(s){var a=np.bind(null,e,s);r.has(s)||(r.add(s),s.then(a,a))})}}function Yt(e,t){var r=t.deletions;if(r!==null)for(var s=0;s<r.length;s++){var a=r[s];try{var i=e,o=t,l=o;e:for(;l!==null;){switch(l.tag){case 5:ot=l.stateNode,Wt=!1;break e;case 3:ot=l.stateNode.containerInfo,Wt=!0;break e;case 4:ot=l.stateNode.containerInfo,Wt=!0;break e}l=l.return}if(ot===null)throw Error(W(160));Vf(i,o,a),ot=null,Wt=!1;var c=a.alternate;c!==null&&(c.return=null),a.return=null}catch(u){We(a,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Xf(t,e),t=t.sibling}function Xf(e,t){var r=e.alternate,s=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Yt(t,e),Zt(e),s&4){try{bs(3,e,e.return),gi(3,e)}catch(N){We(e,e.return,N)}try{bs(5,e,e.return)}catch(N){We(e,e.return,N)}}break;case 1:Yt(t,e),Zt(e),s&512&&r!==null&&Er(r,r.return);break;case 5:if(Yt(t,e),Zt(e),s&512&&r!==null&&Er(r,r.return),e.flags&32){var a=e.stateNode;try{Ss(a,"")}catch(N){We(e,e.return,N)}}if(s&4&&(a=e.stateNode,a!=null)){var i=e.memoizedProps,o=r!==null?r.memoizedProps:i,l=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{l==="input"&&i.type==="radio"&&i.name!=null&&gu(a,i),bo(l,o);var u=bo(l,i);for(o=0;o<c.length;o+=2){var f=c[o],p=c[o+1];f==="style"?ju(a,p):f==="dangerouslySetInnerHTML"?bu(a,p):f==="children"?Ss(a,p):fl(a,f,p,u)}switch(l){case"input":po(a,i);break;case"textarea":vu(a,i);break;case"select":var h=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!i.multiple;var b=i.value;b!=null?Rr(a,!!i.multiple,b,!1):h!==!!i.multiple&&(i.defaultValue!=null?Rr(a,!!i.multiple,i.defaultValue,!0):Rr(a,!!i.multiple,i.multiple?[]:"",!1))}a[Is]=i}catch(N){We(e,e.return,N)}}break;case 6:if(Yt(t,e),Zt(e),s&4){if(e.stateNode===null)throw Error(W(162));a=e.stateNode,i=e.memoizedProps;try{a.nodeValue=i}catch(N){We(e,e.return,N)}}break;case 3:if(Yt(t,e),Zt(e),s&4&&r!==null&&r.memoizedState.isDehydrated)try{Rs(t.containerInfo)}catch(N){We(e,e.return,N)}break;case 4:Yt(t,e),Zt(e);break;case 13:Yt(t,e),Zt(e),a=e.child,a.flags&8192&&(i=a.memoizedState!==null,a.stateNode.isHidden=i,!i||a.alternate!==null&&a.alternate.memoizedState!==null||(Yl=Xe())),s&4&&hd(e);break;case 22:if(f=r!==null&&r.memoizedState!==null,e.mode&1?(mt=(u=mt)||f,Yt(t,e),mt=u):Yt(t,e),Zt(e),s&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!f&&e.mode&1)for(se=e,f=e.child;f!==null;){for(p=se=f;se!==null;){switch(h=se,b=h.child,h.tag){case 0:case 11:case 14:case 15:bs(4,h,h.return);break;case 1:Er(h,h.return);var g=h.stateNode;if(typeof g.componentWillUnmount=="function"){s=h,r=h.return;try{t=s,g.props=t.memoizedProps,g.state=t.memoizedState,g.componentWillUnmount()}catch(N){We(s,r,N)}}break;case 5:Er(h,h.return);break;case 22:if(h.memoizedState!==null){xd(p);continue}}b!==null?(b.return=h,se=b):xd(p)}f=f.sibling}e:for(f=null,p=e;;){if(p.tag===5){if(f===null){f=p;try{a=p.stateNode,u?(i=a.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(l=p.stateNode,c=p.memoizedProps.style,o=c!=null&&c.hasOwnProperty("display")?c.display:null,l.style.display=wu("display",o))}catch(N){We(e,e.return,N)}}}else if(p.tag===6){if(f===null)try{p.stateNode.nodeValue=u?"":p.memoizedProps}catch(N){We(e,e.return,N)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;f===p&&(f=null),p=p.return}f===p&&(f=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Yt(t,e),Zt(e),s&4&&hd(e);break;case 21:break;default:Yt(t,e),Zt(e)}}function Zt(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if(Gf(r)){var s=r;break e}r=r.return}throw Error(W(160))}switch(s.tag){case 5:var a=s.stateNode;s.flags&32&&(Ss(a,""),s.flags&=-33);var i=md(e);Xo(e,i,a);break;case 3:case 4:var o=s.stateNode.containerInfo,l=md(e);Vo(e,l,o);break;default:throw Error(W(161))}}catch(c){We(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Gh(e,t,r){se=e,Kf(e)}function Kf(e,t,r){for(var s=(e.mode&1)!==0;se!==null;){var a=se,i=a.child;if(a.tag===22&&s){var o=a.memoizedState!==null||ca;if(!o){var l=a.alternate,c=l!==null&&l.memoizedState!==null||mt;l=ca;var u=mt;if(ca=o,(mt=c)&&!u)for(se=a;se!==null;)o=se,c=o.child,o.tag===22&&o.memoizedState!==null?gd(a):c!==null?(c.return=o,se=c):gd(a);for(;i!==null;)se=i,Kf(i),i=i.sibling;se=a,ca=l,mt=u}pd(e)}else a.subtreeFlags&8772&&i!==null?(i.return=a,se=i):pd(e)}}function pd(e){for(;se!==null;){var t=se;if(t.flags&8772){var r=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:mt||gi(5,t);break;case 1:var s=t.stateNode;if(t.flags&4&&!mt)if(r===null)s.componentDidMount();else{var a=t.elementType===t.type?r.memoizedProps:Ht(t.type,r.memoizedProps);s.componentDidUpdate(a,r.memoizedState,s.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Zc(t,i,s);break;case 3:var o=t.updateQueue;if(o!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}Zc(t,o,r)}break;case 5:var l=t.stateNode;if(r===null&&t.flags&4){r=l;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&r.focus();break;case"img":c.src&&(r.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var f=u.memoizedState;if(f!==null){var p=f.dehydrated;p!==null&&Rs(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(W(163))}mt||t.flags&512&&Go(t)}catch(h){We(t,t.return,h)}}if(t===e){se=null;break}if(r=t.sibling,r!==null){r.return=t.return,se=r;break}se=t.return}}function xd(e){for(;se!==null;){var t=se;if(t===e){se=null;break}var r=t.sibling;if(r!==null){r.return=t.return,se=r;break}se=t.return}}function gd(e){for(;se!==null;){var t=se;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{gi(4,t)}catch(c){We(t,r,c)}break;case 1:var s=t.stateNode;if(typeof s.componentDidMount=="function"){var a=t.return;try{s.componentDidMount()}catch(c){We(t,a,c)}}var i=t.return;try{Go(t)}catch(c){We(t,i,c)}break;case 5:var o=t.return;try{Go(t)}catch(c){We(t,o,c)}}}catch(c){We(t,t.return,c)}if(t===e){se=null;break}var l=t.sibling;if(l!==null){l.return=t.return,se=l;break}se=t.return}}var Vh=Math.ceil,ti=wn.ReactCurrentDispatcher,ql=wn.ReactCurrentOwner,Ft=wn.ReactCurrentBatchConfig,Se=0,at=null,Ze=null,lt=0,Et=0,Pr=Hn(0),rt=0,$s=null,dr=0,vi=0,Ql=0,ws=null,wt=null,Yl=0,Ur=1/0,dn=null,ni=!1,Ko=null,$n=null,da=!1,In=null,ri=0,js=0,Jo=null,Ra=-1,Ta=0;function gt(){return Se&6?Xe():Ra!==-1?Ra:Ra=Xe()}function Bn(e){return e.mode&1?Se&2&&lt!==0?lt&-lt:Lh.transition!==null?(Ta===0&&(Ta=Iu()),Ta):(e=_e,e!==0||(e=window.event,e=e===void 0?16:Bu(e.type)),e):1}function Xt(e,t,r,s){if(50<js)throw js=0,Jo=null,Error(W(185));qs(e,r,s),(!(Se&2)||e!==at)&&(e===at&&(!(Se&2)&&(vi|=r),rt===4&&Ln(e,lt)),St(e,s),r===1&&Se===0&&!(t.mode&1)&&(Ur=Xe()+500,hi&&Wn()))}function St(e,t){var r=e.callbackNode;L0(e,t);var s=$a(e,e===at?lt:0);if(s===0)r!==null&&Cc(r),e.callbackNode=null,e.callbackPriority=0;else if(t=s&-s,e.callbackPriority!==t){if(r!=null&&Cc(r),t===1)e.tag===0?_h(vd.bind(null,e)):of(vd.bind(null,e)),Eh(function(){!(Se&6)&&Wn()}),r=null;else{switch(Du(s)){case 1:r=gl;break;case 4:r=Lu;break;case 16:r=Oa;break;case 536870912:r=Au;break;default:r=Oa}r=am(r,Jf.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function Jf(e,t){if(Ra=-1,Ta=0,Se&6)throw Error(W(327));var r=e.callbackNode;if(Ir()&&e.callbackNode!==r)return null;var s=$a(e,e===at?lt:0);if(s===0)return null;if(s&30||s&e.expiredLanes||t)t=si(e,s);else{t=s;var a=Se;Se|=2;var i=em();(at!==e||lt!==t)&&(dn=null,Ur=Xe()+500,sr(e,t));do try{Jh();break}catch(l){Zf(e,l)}while(1);Tl(),ti.current=i,Se=a,Ze!==null?t=0:(at=null,lt=0,t=rt)}if(t!==0){if(t===2&&(a=So(e),a!==0&&(s=a,t=Zo(e,a))),t===1)throw r=$s,sr(e,0),Ln(e,s),St(e,Xe()),r;if(t===6)Ln(e,s);else{if(a=e.current.alternate,!(s&30)&&!Xh(a)&&(t=si(e,s),t===2&&(i=So(e),i!==0&&(s=i,t=Zo(e,i))),t===1))throw r=$s,sr(e,0),Ln(e,s),St(e,Xe()),r;switch(e.finishedWork=a,e.finishedLanes=s,t){case 0:case 1:throw Error(W(345));case 2:Jn(e,wt,dn);break;case 3:if(Ln(e,s),(s&130023424)===s&&(t=Yl+500-Xe(),10<t)){if($a(e,0)!==0)break;if(a=e.suspendedLanes,(a&s)!==s){gt(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=Ao(Jn.bind(null,e,wt,dn),t);break}Jn(e,wt,dn);break;case 4:if(Ln(e,s),(s&4194240)===s)break;for(t=e.eventTimes,a=-1;0<s;){var o=31-Vt(s);i=1<<o,o=t[o],o>a&&(a=o),s&=~i}if(s=a,s=Xe()-s,s=(120>s?120:480>s?480:1080>s?1080:1920>s?1920:3e3>s?3e3:4320>s?4320:1960*Vh(s/1960))-s,10<s){e.timeoutHandle=Ao(Jn.bind(null,e,wt,dn),s);break}Jn(e,wt,dn);break;case 5:Jn(e,wt,dn);break;default:throw Error(W(329))}}}return St(e,Xe()),e.callbackNode===r?Jf.bind(null,e):null}function Zo(e,t){var r=ws;return e.current.memoizedState.isDehydrated&&(sr(e,t).flags|=256),e=si(e,t),e!==2&&(t=wt,wt=r,t!==null&&el(t)),e}function el(e){wt===null?wt=e:wt.push.apply(wt,e)}function Xh(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var s=0;s<r.length;s++){var a=r[s],i=a.getSnapshot;a=a.value;try{if(!Kt(i(),a))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Ln(e,t){for(t&=~Ql,t&=~vi,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-Vt(t),s=1<<r;e[r]=-1,t&=~s}}function vd(e){if(Se&6)throw Error(W(327));Ir();var t=$a(e,0);if(!(t&1))return St(e,Xe()),null;var r=si(e,t);if(e.tag!==0&&r===2){var s=So(e);s!==0&&(t=s,r=Zo(e,s))}if(r===1)throw r=$s,sr(e,0),Ln(e,t),St(e,Xe()),r;if(r===6)throw Error(W(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Jn(e,wt,dn),St(e,Xe()),null}function Hl(e,t){var r=Se;Se|=1;try{return e(t)}finally{Se=r,Se===0&&(Ur=Xe()+500,hi&&Wn())}}function ur(e){In!==null&&In.tag===0&&!(Se&6)&&Ir();var t=Se;Se|=1;var r=Ft.transition,s=_e;try{if(Ft.transition=null,_e=1,e)return e()}finally{_e=s,Ft.transition=r,Se=t,!(Se&6)&&Wn()}}function Wl(){Et=Pr.current,Fe(Pr)}function sr(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,Ch(r)),Ze!==null)for(r=Ze.return;r!==null;){var s=r;switch(El(s),s.tag){case 1:s=s.type.childContextTypes,s!=null&&Ya();break;case 3:$r(),Fe(Nt),Fe(ht),Ml();break;case 5:Dl(s);break;case 4:$r();break;case 13:Fe(qe);break;case 19:Fe(qe);break;case 10:_l(s.type._context);break;case 22:case 23:Wl()}r=r.return}if(at=e,Ze=e=Un(e.current,null),lt=Et=t,rt=0,$s=null,Ql=vi=dr=0,wt=ws=null,er!==null){for(t=0;t<er.length;t++)if(r=er[t],s=r.interleaved,s!==null){r.interleaved=null;var a=s.next,i=r.pending;if(i!==null){var o=i.next;i.next=a,s.next=o}r.pending=s}er=null}return e}function Zf(e,t){do{var r=Ze;try{if(Tl(),Ca.current=ei,Za){for(var s=Qe.memoizedState;s!==null;){var a=s.queue;a!==null&&(a.pending=null),s=s.next}Za=!1}if(cr=0,st=nt=Qe=null,ys=!1,zs=0,ql.current=null,r===null||r.return===null){rt=1,$s=t,Ze=null;break}e:{var i=e,o=r.return,l=r,c=t;if(t=lt,l.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,f=l,p=f.tag;if(!(f.mode&1)&&(p===0||p===11||p===15)){var h=f.alternate;h?(f.updateQueue=h.updateQueue,f.memoizedState=h.memoizedState,f.lanes=h.lanes):(f.updateQueue=null,f.memoizedState=null)}var b=ad(o);if(b!==null){b.flags&=-257,id(b,o,l,i,t),b.mode&1&&sd(i,u,t),t=b,c=u;var g=t.updateQueue;if(g===null){var N=new Set;N.add(c),t.updateQueue=N}else g.add(c);break e}else{if(!(t&1)){sd(i,u,t),Gl();break e}c=Error(W(426))}}else if($e&&l.mode&1){var C=ad(o);if(C!==null){!(C.flags&65536)&&(C.flags|=256),id(C,o,l,i,t),Pl(Br(c,l));break e}}i=c=Br(c,l),rt!==4&&(rt=2),ws===null?ws=[i]:ws.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var v=Mf(i,c,t);Jc(i,v);break e;case 1:l=c;var m=i.type,y=i.stateNode;if(!(i.flags&128)&&(typeof m.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&($n===null||!$n.has(y)))){i.flags|=65536,t&=-t,i.lanes|=t;var E=zf(i,l,t);Jc(i,E);break e}}i=i.return}while(i!==null)}nm(r)}catch(j){t=j,Ze===r&&r!==null&&(Ze=r=r.return);continue}break}while(1)}function em(){var e=ti.current;return ti.current=ei,e===null?ei:e}function Gl(){(rt===0||rt===3||rt===2)&&(rt=4),at===null||!(dr&268435455)&&!(vi&268435455)||Ln(at,lt)}function si(e,t){var r=Se;Se|=2;var s=em();(at!==e||lt!==t)&&(dn=null,sr(e,t));do try{Kh();break}catch(a){Zf(e,a)}while(1);if(Tl(),Se=r,ti.current=s,Ze!==null)throw Error(W(261));return at=null,lt=0,rt}function Kh(){for(;Ze!==null;)tm(Ze)}function Jh(){for(;Ze!==null&&!N0();)tm(Ze)}function tm(e){var t=sm(e.alternate,e,Et);e.memoizedProps=e.pendingProps,t===null?nm(e):Ze=t,ql.current=null}function nm(e){var t=e;do{var r=t.alternate;if(e=t.return,t.flags&32768){if(r=Yh(r,t),r!==null){r.flags&=32767,Ze=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{rt=6,Ze=null;return}}else if(r=Qh(r,t,Et),r!==null){Ze=r;return}if(t=t.sibling,t!==null){Ze=t;return}Ze=t=e}while(t!==null);rt===0&&(rt=5)}function Jn(e,t,r){var s=_e,a=Ft.transition;try{Ft.transition=null,_e=1,Zh(e,t,r,s)}finally{Ft.transition=a,_e=s}return null}function Zh(e,t,r,s){do Ir();while(In!==null);if(Se&6)throw Error(W(327));r=e.finishedWork;var a=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(W(177));e.callbackNode=null,e.callbackPriority=0;var i=r.lanes|r.childLanes;if(A0(e,i),e===at&&(Ze=at=null,lt=0),!(r.subtreeFlags&2064)&&!(r.flags&2064)||da||(da=!0,am(Oa,function(){return Ir(),null})),i=(r.flags&15990)!==0,r.subtreeFlags&15990||i){i=Ft.transition,Ft.transition=null;var o=_e;_e=1;var l=Se;Se|=4,ql.current=null,Wh(e,r),Xf(r,e),yh(_o),Ba=!!To,_o=To=null,e.current=r,Gh(r),k0(),Se=l,_e=o,Ft.transition=i}else e.current=r;if(da&&(da=!1,In=e,ri=a),i=e.pendingLanes,i===0&&($n=null),E0(r.stateNode),St(e,Xe()),t!==null)for(s=e.onRecoverableError,r=0;r<t.length;r++)a=t[r],s(a.value,{componentStack:a.stack,digest:a.digest});if(ni)throw ni=!1,e=Ko,Ko=null,e;return ri&1&&e.tag!==0&&Ir(),i=e.pendingLanes,i&1?e===Jo?js++:(js=0,Jo=e):js=0,Wn(),null}function Ir(){if(In!==null){var e=Du(ri),t=Ft.transition,r=_e;try{if(Ft.transition=null,_e=16>e?16:e,In===null)var s=!1;else{if(e=In,In=null,ri=0,Se&6)throw Error(W(331));var a=Se;for(Se|=4,se=e.current;se!==null;){var i=se,o=i.child;if(se.flags&16){var l=i.deletions;if(l!==null){for(var c=0;c<l.length;c++){var u=l[c];for(se=u;se!==null;){var f=se;switch(f.tag){case 0:case 11:case 15:bs(8,f,i)}var p=f.child;if(p!==null)p.return=f,se=p;else for(;se!==null;){f=se;var h=f.sibling,b=f.return;if(Wf(f),f===u){se=null;break}if(h!==null){h.return=b,se=h;break}se=b}}}var g=i.alternate;if(g!==null){var N=g.child;if(N!==null){g.child=null;do{var C=N.sibling;N.sibling=null,N=C}while(N!==null)}}se=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,se=o;else e:for(;se!==null;){if(i=se,i.flags&2048)switch(i.tag){case 0:case 11:case 15:bs(9,i,i.return)}var v=i.sibling;if(v!==null){v.return=i.return,se=v;break e}se=i.return}}var m=e.current;for(se=m;se!==null;){o=se;var y=o.child;if(o.subtreeFlags&2064&&y!==null)y.return=o,se=y;else e:for(o=m;se!==null;){if(l=se,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:gi(9,l)}}catch(j){We(l,l.return,j)}if(l===o){se=null;break e}var E=l.sibling;if(E!==null){E.return=l.return,se=E;break e}se=l.return}}if(Se=a,Wn(),an&&typeof an.onPostCommitFiberRoot=="function")try{an.onPostCommitFiberRoot(ci,e)}catch{}s=!0}return s}finally{_e=r,Ft.transition=t}}return!1}function yd(e,t,r){t=Br(r,t),t=Mf(e,t,1),e=On(e,t,1),t=gt(),e!==null&&(qs(e,1,t),St(e,t))}function We(e,t,r){if(e.tag===3)yd(e,e,r);else for(;t!==null;){if(t.tag===3){yd(t,e,r);break}else if(t.tag===1){var s=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&($n===null||!$n.has(s))){e=Br(r,e),e=zf(t,e,1),t=On(t,e,1),e=gt(),t!==null&&(qs(t,1,e),St(t,e));break}}t=t.return}}function ep(e,t,r){var s=e.pingCache;s!==null&&s.delete(t),t=gt(),e.pingedLanes|=e.suspendedLanes&r,at===e&&(lt&r)===r&&(rt===4||rt===3&&(lt&130023424)===lt&&500>Xe()-Yl?sr(e,0):Ql|=r),St(e,t)}function rm(e,t){t===0&&(e.mode&1?(t=ea,ea<<=1,!(ea&130023424)&&(ea=4194304)):t=1);var r=gt();e=vn(e,t),e!==null&&(qs(e,t,r),St(e,r))}function tp(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),rm(e,r)}function np(e,t){var r=0;switch(e.tag){case 13:var s=e.stateNode,a=e.memoizedState;a!==null&&(r=a.retryLane);break;case 19:s=e.stateNode;break;default:throw Error(W(314))}s!==null&&s.delete(t),rm(e,r)}var sm;sm=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||Nt.current)jt=!0;else{if(!(e.lanes&r)&&!(t.flags&128))return jt=!1,qh(e,t,r);jt=!!(e.flags&131072)}else jt=!1,$e&&t.flags&1048576&&lf(t,Ga,t.index);switch(t.lanes=0,t.tag){case 2:var s=t.type;Pa(e,t),e=t.pendingProps;var a=zr(t,ht.current);Ar(t,r),a=Fl(null,t,s,e,a,r);var i=Ol();return t.flags|=1,typeof a=="object"&&a!==null&&typeof a.render=="function"&&a.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,kt(s)?(i=!0,Ha(t)):i=!1,t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,Al(t),a.updater=xi,t.stateNode=a,a._reactInternals=t,$o(t,s,e,r),t=qo(null,t,s,!0,i,r)):(t.tag=0,$e&&i&&Cl(t),xt(null,t,a,r),t=t.child),t;case 16:s=t.elementType;e:{switch(Pa(e,t),e=t.pendingProps,a=s._init,s=a(s._payload),t.type=s,a=t.tag=sp(s),e=Ht(s,e),a){case 0:t=Uo(null,t,s,e,r);break e;case 1:t=cd(null,t,s,e,r);break e;case 11:t=od(null,t,s,e,r);break e;case 14:t=ld(null,t,s,Ht(s.type,e),r);break e}throw Error(W(306,s,""))}return t;case 0:return s=t.type,a=t.pendingProps,a=t.elementType===s?a:Ht(s,a),Uo(e,t,s,a,r);case 1:return s=t.type,a=t.pendingProps,a=t.elementType===s?a:Ht(s,a),cd(e,t,s,a,r);case 3:e:{if(Bf(t),e===null)throw Error(W(387));s=t.pendingProps,i=t.memoizedState,a=i.element,hf(e,t),Ka(t,s,null,r);var o=t.memoizedState;if(s=o.element,i.isDehydrated)if(i={element:s,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){a=Br(Error(W(423)),t),t=dd(e,t,s,r,a);break e}else if(s!==a){a=Br(Error(W(424)),t),t=dd(e,t,s,r,a);break e}else for(Pt=Fn(t.stateNode.containerInfo.firstChild),Rt=t,$e=!0,Gt=null,r=ff(t,null,s,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(Fr(),s===a){t=yn(e,t,r);break e}xt(e,t,s,r)}t=t.child}return t;case 5:return pf(t),e===null&&zo(t),s=t.type,a=t.pendingProps,i=e!==null?e.memoizedProps:null,o=a.children,Lo(s,a)?o=null:i!==null&&Lo(s,i)&&(t.flags|=32),$f(e,t),xt(e,t,o,r),t.child;case 6:return e===null&&zo(t),null;case 13:return Uf(e,t,r);case 4:return Il(t,t.stateNode.containerInfo),s=t.pendingProps,e===null?t.child=Or(t,null,s,r):xt(e,t,s,r),t.child;case 11:return s=t.type,a=t.pendingProps,a=t.elementType===s?a:Ht(s,a),od(e,t,s,a,r);case 7:return xt(e,t,t.pendingProps,r),t.child;case 8:return xt(e,t,t.pendingProps.children,r),t.child;case 12:return xt(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(s=t.type._context,a=t.pendingProps,i=t.memoizedProps,o=a.value,De(Va,s._currentValue),s._currentValue=o,i!==null)if(Kt(i.value,o)){if(i.children===a.children&&!Nt.current){t=yn(e,t,r);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var l=i.dependencies;if(l!==null){o=i.child;for(var c=l.firstContext;c!==null;){if(c.context===s){if(i.tag===1){c=hn(-1,r&-r),c.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var f=u.pending;f===null?c.next=c:(c.next=f.next,f.next=c),u.pending=c}}i.lanes|=r,c=i.alternate,c!==null&&(c.lanes|=r),Fo(i.return,r,t),l.lanes|=r;break}c=c.next}}else if(i.tag===10)o=i.type===t.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(W(341));o.lanes|=r,l=o.alternate,l!==null&&(l.lanes|=r),Fo(o,r,t),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===t){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}xt(e,t,a.children,r),t=t.child}return t;case 9:return a=t.type,s=t.pendingProps.children,Ar(t,r),a=Ot(a),s=s(a),t.flags|=1,xt(e,t,s,r),t.child;case 14:return s=t.type,a=Ht(s,t.pendingProps),a=Ht(s.type,a),ld(e,t,s,a,r);case 15:return Ff(e,t,t.type,t.pendingProps,r);case 17:return s=t.type,a=t.pendingProps,a=t.elementType===s?a:Ht(s,a),Pa(e,t),t.tag=1,kt(s)?(e=!0,Ha(t)):e=!1,Ar(t,r),Df(t,s,a),$o(t,s,a,r),qo(null,t,s,!0,e,r);case 19:return qf(e,t,r);case 22:return Of(e,t,r)}throw Error(W(156,t.tag))};function am(e,t){return _u(e,t)}function rp(e,t,r,s){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Mt(e,t,r,s){return new rp(e,t,r,s)}function Vl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function sp(e){if(typeof e=="function")return Vl(e)?1:0;if(e!=null){if(e=e.$$typeof,e===hl)return 11;if(e===pl)return 14}return 2}function Un(e,t){var r=e.alternate;return r===null?(r=Mt(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function _a(e,t,r,s,a,i){var o=2;if(s=e,typeof e=="function")Vl(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case vr:return ar(r.children,a,i,t);case ml:o=8,a|=8;break;case co:return e=Mt(12,r,t,a|2),e.elementType=co,e.lanes=i,e;case uo:return e=Mt(13,r,t,a),e.elementType=uo,e.lanes=i,e;case fo:return e=Mt(19,r,t,a),e.elementType=fo,e.lanes=i,e;case hu:return yi(r,a,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case fu:o=10;break e;case mu:o=9;break e;case hl:o=11;break e;case pl:o=14;break e;case Pn:o=16,s=null;break e}throw Error(W(130,e==null?e:typeof e,""))}return t=Mt(o,r,t,a),t.elementType=e,t.type=s,t.lanes=i,t}function ar(e,t,r,s){return e=Mt(7,e,s,t),e.lanes=r,e}function yi(e,t,r,s){return e=Mt(22,e,s,t),e.elementType=hu,e.lanes=r,e.stateNode={isHidden:!1},e}function Ki(e,t,r){return e=Mt(6,e,null,t),e.lanes=r,e}function Ji(e,t,r){return t=Mt(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function ap(e,t,r,s,a){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Li(0),this.expirationTimes=Li(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Li(0),this.identifierPrefix=s,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function Xl(e,t,r,s,a,i,o,l,c){return e=new ap(e,t,r,l,c),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Mt(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:s,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},Al(i),e}function ip(e,t,r){var s=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:gr,key:s==null?null:""+s,children:e,containerInfo:t,implementation:r}}function im(e){if(!e)return Qn;e=e._reactInternals;e:{if(mr(e)!==e||e.tag!==1)throw Error(W(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(kt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(W(171))}if(e.tag===1){var r=e.type;if(kt(r))return af(e,r,t)}return t}function om(e,t,r,s,a,i,o,l,c){return e=Xl(r,s,!0,e,a,i,o,l,c),e.context=im(null),r=e.current,s=gt(),a=Bn(r),i=hn(s,a),i.callback=t??null,On(r,i,a),e.current.lanes=a,qs(e,a,s),St(e,s),e}function bi(e,t,r,s){var a=t.current,i=gt(),o=Bn(a);return r=im(r),t.context===null?t.context=r:t.pendingContext=r,t=hn(i,o),t.payload={element:e},s=s===void 0?null:s,s!==null&&(t.callback=s),e=On(a,t,o),e!==null&&(Xt(e,a,o,i),Sa(e,a,o)),o}function ai(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function bd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function Kl(e,t){bd(e,t),(e=e.alternate)&&bd(e,t)}function op(){return null}var lm=typeof reportError=="function"?reportError:function(e){console.error(e)};function Jl(e){this._internalRoot=e}wi.prototype.render=Jl.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(W(409));bi(e,t,null,null)};wi.prototype.unmount=Jl.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;ur(function(){bi(null,e,null,null)}),t[gn]=null}};function wi(e){this._internalRoot=e}wi.prototype.unstable_scheduleHydration=function(e){if(e){var t=Fu();e={blockedOn:null,target:e,priority:t};for(var r=0;r<_n.length&&t!==0&&t<_n[r].priority;r++);_n.splice(r,0,e),r===0&&$u(e)}};function Zl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ji(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function wd(){}function lp(e,t,r,s,a){if(a){if(typeof s=="function"){var i=s;s=function(){var u=ai(o);i.call(u)}}var o=om(t,s,e,0,null,!1,!1,"",wd);return e._reactRootContainer=o,e[gn]=o.current,Ls(e.nodeType===8?e.parentNode:e),ur(),o}for(;a=e.lastChild;)e.removeChild(a);if(typeof s=="function"){var l=s;s=function(){var u=ai(c);l.call(u)}}var c=Xl(e,0,!1,null,null,!1,!1,"",wd);return e._reactRootContainer=c,e[gn]=c.current,Ls(e.nodeType===8?e.parentNode:e),ur(function(){bi(t,c,r,s)}),c}function Ni(e,t,r,s,a){var i=r._reactRootContainer;if(i){var o=i;if(typeof a=="function"){var l=a;a=function(){var c=ai(o);l.call(c)}}bi(t,o,e,a)}else o=lp(r,t,e,a,s);return ai(o)}Mu=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=fs(t.pendingLanes);r!==0&&(vl(t,r|1),St(t,Xe()),!(Se&6)&&(Ur=Xe()+500,Wn()))}break;case 13:ur(function(){var s=vn(e,1);if(s!==null){var a=gt();Xt(s,e,1,a)}}),Kl(e,1)}};yl=function(e){if(e.tag===13){var t=vn(e,134217728);if(t!==null){var r=gt();Xt(t,e,134217728,r)}Kl(e,134217728)}};zu=function(e){if(e.tag===13){var t=Bn(e),r=vn(e,t);if(r!==null){var s=gt();Xt(r,e,t,s)}Kl(e,t)}};Fu=function(){return _e};Ou=function(e,t){var r=_e;try{return _e=e,t()}finally{_e=r}};jo=function(e,t,r){switch(t){case"input":if(po(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var s=r[t];if(s!==e&&s.form===e.form){var a=mi(s);if(!a)throw Error(W(90));xu(s),po(s,a)}}}break;case"textarea":vu(e,r);break;case"select":t=r.value,t!=null&&Rr(e,!!r.multiple,t,!1)}};Su=Hl;Cu=ur;var cp={usingClientEntryPoint:!1,Events:[Ys,jr,mi,Nu,ku,Hl]},rs={findFiberByHostInstance:Zn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},dp={bundleType:rs.bundleType,version:rs.version,rendererPackageName:rs.rendererPackageName,rendererConfig:rs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:wn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Ru(e),e===null?null:e.stateNode},findFiberByHostInstance:rs.findFiberByHostInstance||op,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ua=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ua.isDisabled&&ua.supportsFiber)try{ci=ua.inject(dp),an=ua}catch{}}_t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=cp;_t.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Zl(t))throw Error(W(200));return ip(e,t,null,r)};_t.createRoot=function(e,t){if(!Zl(e))throw Error(W(299));var r=!1,s="",a=lm;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),t=Xl(e,1,!1,null,null,r,!1,s,a),e[gn]=t.current,Ls(e.nodeType===8?e.parentNode:e),new Jl(t)};_t.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(W(188)):(e=Object.keys(e).join(","),Error(W(268,e)));return e=Ru(t),e=e===null?null:e.stateNode,e};_t.flushSync=function(e){return ur(e)};_t.hydrate=function(e,t,r){if(!ji(t))throw Error(W(200));return Ni(null,e,t,!0,r)};_t.hydrateRoot=function(e,t,r){if(!Zl(e))throw Error(W(405));var s=r!=null&&r.hydratedSources||null,a=!1,i="",o=lm;if(r!=null&&(r.unstable_strictMode===!0&&(a=!0),r.identifierPrefix!==void 0&&(i=r.identifierPrefix),r.onRecoverableError!==void 0&&(o=r.onRecoverableError)),t=om(t,null,e,1,r??null,a,!1,i,o),e[gn]=t.current,Ls(e),s)for(e=0;e<s.length;e++)r=s[e],a=r._getVersion,a=a(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,a]:t.mutableSourceEagerHydrationData.push(r,a);return new wi(t)};_t.render=function(e,t,r){if(!ji(t))throw Error(W(200));return Ni(null,e,t,!1,r)};_t.unmountComponentAtNode=function(e){if(!ji(e))throw Error(W(40));return e._reactRootContainer?(ur(function(){Ni(null,null,e,!1,function(){e._reactRootContainer=null,e[gn]=null})}),!0):!1};_t.unstable_batchedUpdates=Hl;_t.unstable_renderSubtreeIntoContainer=function(e,t,r,s){if(!ji(r))throw Error(W(200));if(e==null||e._reactInternals===void 0)throw Error(W(38));return Ni(e,t,r,!1,s)};_t.version="18.3.1-next-f1338f8080-20240426";function cm(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(cm)}catch(e){console.error(e)}}cm(),lu.exports=_t;var up=lu.exports,jd=up;oo.createRoot=jd.createRoot,oo.hydrateRoot=jd.hydrateRoot;const fp="modulepreload",mp=function(e){return"/"+e},Nd={},ec=function(t,r,s){if(!r||r.length===0)return t();const a=document.getElementsByTagName("link");return Promise.all(r.map(i=>{if(i=mp(i),i in Nd)return;Nd[i]=!0;const o=i.endsWith(".css"),l=o?'[rel="stylesheet"]':"";if(!!s)for(let f=a.length-1;f>=0;f--){const p=a[f];if(p.href===i&&(!o||p.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${l}`))return;const u=document.createElement("link");if(u.rel=o?"stylesheet":fp,o||(u.as="script",u.crossOrigin=""),u.href=i,document.head.appendChild(u),o)return new Promise((f,p)=>{u.addEventListener("load",f),u.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>t()).catch(i=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=i,window.dispatchEvent(o),!o.defaultPrevented)throw i})};var kd="popstate";function hp(e={}){function t(s,a){let{pathname:i,search:o,hash:l}=s.location;return tl("",{pathname:i,search:o,hash:l},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}function r(s,a){return typeof a=="string"?a:Bs(a)}return xp(t,r,null,e)}function Be(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Bt(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function pp(){return Math.random().toString(36).substring(2,10)}function Sd(e,t){return{usr:e.state,key:e.key,idx:t}}function tl(e,t,r=null,s){return{pathname:typeof e=="string"?e:e.pathname,search:"",hash:"",...typeof t=="string"?Wr(t):t,state:r,key:t&&t.key||s||pp()}}function Bs({pathname:e="/",search:t="",hash:r=""}){return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Wr(e){let t={};if(e){let r=e.indexOf("#");r>=0&&(t.hash=e.substring(r),e=e.substring(0,r));let s=e.indexOf("?");s>=0&&(t.search=e.substring(s),e=e.substring(0,s)),e&&(t.pathname=e)}return t}function xp(e,t,r,s={}){let{window:a=document.defaultView,v5Compat:i=!1}=s,o=a.history,l="POP",c=null,u=f();u==null&&(u=0,o.replaceState({...o.state,idx:u},""));function f(){return(o.state||{idx:null}).idx}function p(){l="POP";let C=f(),v=C==null?null:C-u;u=C,c&&c({action:l,location:N.location,delta:v})}function h(C,v){l="PUSH";let m=tl(N.location,C,v);r&&r(m,C),u=f()+1;let y=Sd(m,u),E=N.createHref(m);try{o.pushState(y,"",E)}catch(j){if(j instanceof DOMException&&j.name==="DataCloneError")throw j;a.location.assign(E)}i&&c&&c({action:l,location:N.location,delta:1})}function b(C,v){l="REPLACE";let m=tl(N.location,C,v);r&&r(m,C),u=f();let y=Sd(m,u),E=N.createHref(m);o.replaceState(y,"",E),i&&c&&c({action:l,location:N.location,delta:0})}function g(C){return gp(C)}let N={get action(){return l},get location(){return e(a,o)},listen(C){if(c)throw new Error("A history only accepts one active listener");return a.addEventListener(kd,p),c=C,()=>{a.removeEventListener(kd,p),c=null}},createHref(C){return t(a,C)},createURL:g,encodeLocation(C){let v=g(C);return{pathname:v.pathname,search:v.search,hash:v.hash}},push:h,replace:b,go(C){return o.go(C)}};return N}function gp(e,t=!1){let r="http://localhost";typeof window<"u"&&(r=window.location.origin!=="null"?window.location.origin:window.location.href),Be(r,"No window.location.(origin|href) available to create URL");let s=typeof e=="string"?e:Bs(e);return s=s.replace(/ $/,"%20"),!t&&s.startsWith("//")&&(s=r+s),new URL(s,r)}function dm(e,t,r="/"){return vp(e,t,r,!1)}function vp(e,t,r,s){let a=typeof t=="string"?Wr(t):t,i=bn(a.pathname||"/",r);if(i==null)return null;let o=um(e);yp(o);let l=null;for(let c=0;l==null&&c<o.length;++c){let u=Tp(i);l=Pp(o[c],u,s)}return l}function um(e,t=[],r=[],s=""){let a=(i,o,l)=>{let c={relativePath:l===void 0?i.path||"":l,caseSensitive:i.caseSensitive===!0,childrenIndex:o,route:i};c.relativePath.startsWith("/")&&(Be(c.relativePath.startsWith(s),`Absolute route path "${c.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),c.relativePath=c.relativePath.slice(s.length));let u=pn([s,c.relativePath]),f=r.concat(c);i.children&&i.children.length>0&&(Be(i.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${u}".`),um(i.children,t,f,u)),!(i.path==null&&!i.index)&&t.push({path:u,score:Cp(u,i.index),routesMeta:f})};return e.forEach((i,o)=>{var l;if(i.path===""||!((l=i.path)!=null&&l.includes("?")))a(i,o);else for(let c of fm(i.path))a(i,o,c)}),t}function fm(e){let t=e.split("/");if(t.length===0)return[];let[r,...s]=t,a=r.endsWith("?"),i=r.replace(/\?$/,"");if(s.length===0)return a?[i,""]:[i];let o=fm(s.join("/")),l=[];return l.push(...o.map(c=>c===""?i:[i,c].join("/"))),a&&l.push(...o),l.map(c=>e.startsWith("/")&&c===""?"/":c)}function yp(e){e.sort((t,r)=>t.score!==r.score?r.score-t.score:Ep(t.routesMeta.map(s=>s.childrenIndex),r.routesMeta.map(s=>s.childrenIndex)))}var bp=/^:[\w-]+$/,wp=3,jp=2,Np=1,kp=10,Sp=-2,Cd=e=>e==="*";function Cp(e,t){let r=e.split("/"),s=r.length;return r.some(Cd)&&(s+=Sp),t&&(s+=jp),r.filter(a=>!Cd(a)).reduce((a,i)=>a+(bp.test(i)?wp:i===""?Np:kp),s)}function Ep(e,t){return e.length===t.length&&e.slice(0,-1).every((s,a)=>s===t[a])?e[e.length-1]-t[t.length-1]:0}function Pp(e,t,r=!1){let{routesMeta:s}=e,a={},i="/",o=[];for(let l=0;l<s.length;++l){let c=s[l],u=l===s.length-1,f=i==="/"?t:t.slice(i.length)||"/",p=ii({path:c.relativePath,caseSensitive:c.caseSensitive,end:u},f),h=c.route;if(!p&&u&&r&&!s[s.length-1].route.index&&(p=ii({path:c.relativePath,caseSensitive:c.caseSensitive,end:!1},f)),!p)return null;Object.assign(a,p.params),o.push({params:a,pathname:pn([i,p.pathname]),pathnameBase:Ip(pn([i,p.pathnameBase])),route:h}),p.pathnameBase!=="/"&&(i=pn([i,p.pathnameBase]))}return o}function ii(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[r,s]=Rp(e.path,e.caseSensitive,e.end),a=t.match(r);if(!a)return null;let i=a[0],o=i.replace(/(.)\/+$/,"$1"),l=a.slice(1);return{params:s.reduce((u,{paramName:f,isOptional:p},h)=>{if(f==="*"){let g=l[h]||"";o=i.slice(0,i.length-g.length).replace(/(.)\/+$/,"$1")}const b=l[h];return p&&!b?u[f]=void 0:u[f]=(b||"").replace(/%2F/g,"/"),u},{}),pathname:i,pathnameBase:o,pattern:e}}function Rp(e,t=!1,r=!0){Bt(e==="*"||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let s=[],a="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,l,c)=>(s.push({paramName:l,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(s.push({paramName:"*"}),a+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?a+="\\/*$":e!==""&&e!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,t?void 0:"i"),s]}function Tp(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Bt(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function bn(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let r=t.endsWith("/")?t.length-1:t.length,s=e.charAt(r);return s&&s!=="/"?null:e.slice(r)||"/"}function _p(e,t="/"){let{pathname:r,search:s="",hash:a=""}=typeof e=="string"?Wr(e):e;return{pathname:r?r.startsWith("/")?r:Lp(r,t):t,search:Dp(s),hash:Mp(a)}}function Lp(e,t){let r=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(a=>{a===".."?r.length>1&&r.pop():a!=="."&&r.push(a)}),r.length>1?r.join("/"):"/"}function Zi(e,t,r,s){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${r}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Ap(e){return e.filter((t,r)=>r===0||t.route.path&&t.route.path.length>0)}function tc(e){let t=Ap(e);return t.map((r,s)=>s===t.length-1?r.pathname:r.pathnameBase)}function nc(e,t,r,s=!1){let a;typeof e=="string"?a=Wr(e):(a={...e},Be(!a.pathname||!a.pathname.includes("?"),Zi("?","pathname","search",a)),Be(!a.pathname||!a.pathname.includes("#"),Zi("#","pathname","hash",a)),Be(!a.search||!a.search.includes("#"),Zi("#","search","hash",a)));let i=e===""||a.pathname==="",o=i?"/":a.pathname,l;if(o==null)l=r;else{let p=t.length-1;if(!s&&o.startsWith("..")){let h=o.split("/");for(;h[0]==="..";)h.shift(),p-=1;a.pathname=h.join("/")}l=p>=0?t[p]:"/"}let c=_p(a,l),u=o&&o!=="/"&&o.endsWith("/"),f=(i||o===".")&&r.endsWith("/");return!c.pathname.endsWith("/")&&(u||f)&&(c.pathname+="/"),c}var pn=e=>e.join("/").replace(/\/\/+/g,"/"),Ip=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Dp=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Mp=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function zp(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}var mm=["POST","PUT","PATCH","DELETE"];new Set(mm);var Fp=["GET",...mm];new Set(Fp);var Gr=d.createContext(null);Gr.displayName="DataRouter";var ki=d.createContext(null);ki.displayName="DataRouterState";d.createContext(!1);var hm=d.createContext({isTransitioning:!1});hm.displayName="ViewTransition";var Op=d.createContext(new Map);Op.displayName="Fetchers";var $p=d.createContext(null);$p.displayName="Await";var Jt=d.createContext(null);Jt.displayName="Navigation";var Ws=d.createContext(null);Ws.displayName="Location";var Ut=d.createContext({outlet:null,matches:[],isDataRoute:!1});Ut.displayName="Route";var rc=d.createContext(null);rc.displayName="RouteError";function Bp(e,{relative:t}={}){Be(Vr(),"useHref() may be used only in the context of a <Router> component.");let{basename:r,navigator:s}=d.useContext(Jt),{hash:a,pathname:i,search:o}=Gs(e,{relative:t}),l=i;return r!=="/"&&(l=i==="/"?r:pn([r,i])),s.createHref({pathname:l,search:o,hash:a})}function Vr(){return d.useContext(Ws)!=null}function bt(){return Be(Vr(),"useLocation() may be used only in the context of a <Router> component."),d.useContext(Ws).location}var pm="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function xm(e){d.useContext(Jt).static||d.useLayoutEffect(e)}function He(){let{isDataRoute:e}=d.useContext(Ut);return e?rx():Up()}function Up(){Be(Vr(),"useNavigate() may be used only in the context of a <Router> component.");let e=d.useContext(Gr),{basename:t,navigator:r}=d.useContext(Jt),{matches:s}=d.useContext(Ut),{pathname:a}=bt(),i=JSON.stringify(tc(s)),o=d.useRef(!1);return xm(()=>{o.current=!0}),d.useCallback((c,u={})=>{if(Bt(o.current,pm),!o.current)return;if(typeof c=="number"){r.go(c);return}let f=nc(c,JSON.parse(i),a,u.relative==="path");e==null&&t!=="/"&&(f.pathname=f.pathname==="/"?t:pn([t,f.pathname])),(u.replace?r.replace:r.push)(f,u.state,u)},[t,r,i,a,e])}var qp=d.createContext(null);function Qp(e){let t=d.useContext(Ut).outlet;return t&&d.createElement(qp.Provider,{value:e},t)}function Yp(){let{matches:e}=d.useContext(Ut),t=e[e.length-1];return t?t.params:{}}function Gs(e,{relative:t}={}){let{matches:r}=d.useContext(Ut),{pathname:s}=bt(),a=JSON.stringify(tc(r));return d.useMemo(()=>nc(e,JSON.parse(a),s,t==="path"),[e,a,s,t])}function Hp(e,t){return gm(e,t)}function gm(e,t,r,s){var v;Be(Vr(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:a}=d.useContext(Jt),{matches:i}=d.useContext(Ut),o=i[i.length-1],l=o?o.params:{},c=o?o.pathname:"/",u=o?o.pathnameBase:"/",f=o&&o.route;{let m=f&&f.path||"";vm(c,!f||m.endsWith("*")||m.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${c}" (under <Route path="${m}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${m}"> to <Route path="${m==="/"?"*":`${m}/*`}">.`)}let p=bt(),h;if(t){let m=typeof t=="string"?Wr(t):t;Be(u==="/"||((v=m.pathname)==null?void 0:v.startsWith(u)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${u}" but pathname "${m.pathname}" was given in the \`location\` prop.`),h=m}else h=p;let b=h.pathname||"/",g=b;if(u!=="/"){let m=u.replace(/^\//,"").split("/");g="/"+b.replace(/^\//,"").split("/").slice(m.length).join("/")}let N=dm(e,{pathname:g});Bt(f||N!=null,`No routes matched location "${h.pathname}${h.search}${h.hash}" `),Bt(N==null||N[N.length-1].route.element!==void 0||N[N.length-1].route.Component!==void 0||N[N.length-1].route.lazy!==void 0,`Matched leaf route at location "${h.pathname}${h.search}${h.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let C=Kp(N&&N.map(m=>Object.assign({},m,{params:Object.assign({},l,m.params),pathname:pn([u,a.encodeLocation?a.encodeLocation(m.pathname).pathname:m.pathname]),pathnameBase:m.pathnameBase==="/"?u:pn([u,a.encodeLocation?a.encodeLocation(m.pathnameBase).pathname:m.pathnameBase])})),i,r,s);return t&&C?d.createElement(Ws.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...h},navigationType:"POP"}},C):C}function Wp(){let e=nx(),t=zp(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,s="rgba(200,200,200, 0.5)",a={padding:"0.5rem",backgroundColor:s},i={padding:"2px 4px",backgroundColor:s},o=null;return console.error("Error handled by React Router default ErrorBoundary:",e),o=d.createElement(d.Fragment,null,d.createElement("p",null,"💿 Hey developer 👋"),d.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",d.createElement("code",{style:i},"ErrorBoundary")," or"," ",d.createElement("code",{style:i},"errorElement")," prop on your route.")),d.createElement(d.Fragment,null,d.createElement("h2",null,"Unexpected Application Error!"),d.createElement("h3",{style:{fontStyle:"italic"}},t),r?d.createElement("pre",{style:a},r):null,o)}var Gp=d.createElement(Wp,null),Vp=class extends d.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return this.state.error!==void 0?d.createElement(Ut.Provider,{value:this.props.routeContext},d.createElement(rc.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function Xp({routeContext:e,match:t,children:r}){let s=d.useContext(Gr);return s&&s.static&&s.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=t.route.id),d.createElement(Ut.Provider,{value:e},r)}function Kp(e,t=[],r=null,s=null){if(e==null){if(!r)return null;if(r.errors)e=r.matches;else if(t.length===0&&!r.initialized&&r.matches.length>0)e=r.matches;else return null}let a=e,i=r==null?void 0:r.errors;if(i!=null){let c=a.findIndex(u=>u.route.id&&(i==null?void 0:i[u.route.id])!==void 0);Be(c>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(i).join(",")}`),a=a.slice(0,Math.min(a.length,c+1))}let o=!1,l=-1;if(r)for(let c=0;c<a.length;c++){let u=a[c];if((u.route.HydrateFallback||u.route.hydrateFallbackElement)&&(l=c),u.route.id){let{loaderData:f,errors:p}=r,h=u.route.loader&&!f.hasOwnProperty(u.route.id)&&(!p||p[u.route.id]===void 0);if(u.route.lazy||h){o=!0,l>=0?a=a.slice(0,l+1):a=[a[0]];break}}}return a.reduceRight((c,u,f)=>{let p,h=!1,b=null,g=null;r&&(p=i&&u.route.id?i[u.route.id]:void 0,b=u.route.errorElement||Gp,o&&(l<0&&f===0?(vm("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),h=!0,g=null):l===f&&(h=!0,g=u.route.hydrateFallbackElement||null)));let N=t.concat(a.slice(0,f+1)),C=()=>{let v;return p?v=b:h?v=g:u.route.Component?v=d.createElement(u.route.Component,null):u.route.element?v=u.route.element:v=c,d.createElement(Xp,{match:u,routeContext:{outlet:c,matches:N,isDataRoute:r!=null},children:v})};return r&&(u.route.ErrorBoundary||u.route.errorElement||f===0)?d.createElement(Vp,{location:r.location,revalidation:r.revalidation,component:b,error:p,children:C(),routeContext:{outlet:null,matches:N,isDataRoute:!0}}):C()},null)}function sc(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Jp(e){let t=d.useContext(Gr);return Be(t,sc(e)),t}function Zp(e){let t=d.useContext(ki);return Be(t,sc(e)),t}function ex(e){let t=d.useContext(Ut);return Be(t,sc(e)),t}function ac(e){let t=ex(e),r=t.matches[t.matches.length-1];return Be(r.route.id,`${e} can only be used on routes that contain a unique "id"`),r.route.id}function tx(){return ac("useRouteId")}function nx(){var s;let e=d.useContext(rc),t=Zp("useRouteError"),r=ac("useRouteError");return e!==void 0?e:(s=t.errors)==null?void 0:s[r]}function rx(){let{router:e}=Jp("useNavigate"),t=ac("useNavigate"),r=d.useRef(!1);return xm(()=>{r.current=!0}),d.useCallback(async(a,i={})=>{Bt(r.current,pm),r.current&&(typeof a=="number"?e.navigate(a):await e.navigate(a,{fromRouteId:t,...i}))},[e,t])}var Ed={};function vm(e,t,r){!t&&!Ed[e]&&(Ed[e]=!0,Bt(!1,r))}d.memo(sx);function sx({routes:e,future:t,state:r}){return gm(e,void 0,r,t)}function ax({to:e,replace:t,state:r,relative:s}){Be(Vr(),"<Navigate> may be used only in the context of a <Router> component.");let{static:a}=d.useContext(Jt);Bt(!a,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:i}=d.useContext(Ut),{pathname:o}=bt(),l=He(),c=nc(e,tc(i),o,s==="path"),u=JSON.stringify(c);return d.useEffect(()=>{l(JSON.parse(u),{replace:t,state:r,relative:s})},[l,u,s,t,r]),null}function ix(e){return Qp(e.context)}function Je(e){Be(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function ox({basename:e="/",children:t=null,location:r,navigationType:s="POP",navigator:a,static:i=!1}){Be(!Vr(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let o=e.replace(/^\/*/,"/"),l=d.useMemo(()=>({basename:o,navigator:a,static:i,future:{}}),[o,a,i]);typeof r=="string"&&(r=Wr(r));let{pathname:c="/",search:u="",hash:f="",state:p=null,key:h="default"}=r,b=d.useMemo(()=>{let g=bn(c,o);return g==null?null:{location:{pathname:g,search:u,hash:f,state:p,key:h},navigationType:s}},[o,c,u,f,p,h,s]);return Bt(b!=null,`<Router basename="${o}"> is not able to match the URL "${c}${u}${f}" because it does not start with the basename, so the <Router> won't render anything.`),b==null?null:d.createElement(Jt.Provider,{value:l},d.createElement(Ws.Provider,{children:t,value:b}))}function lx({children:e,location:t}){return Hp(nl(e),t)}function nl(e,t=[]){let r=[];return d.Children.forEach(e,(s,a)=>{if(!d.isValidElement(s))return;let i=[...t,a];if(s.type===d.Fragment){r.push.apply(r,nl(s.props.children,i));return}Be(s.type===Je,`[${typeof s.type=="string"?s.type:s.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Be(!s.props.index||!s.props.children,"An index route cannot have child routes.");let o={id:s.props.id||i.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,loader:s.props.loader,action:s.props.action,hydrateFallbackElement:s.props.hydrateFallbackElement,HydrateFallback:s.props.HydrateFallback,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.hasErrorBoundary===!0||s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(o.children=nl(s.props.children,i)),r.push(o)}),r}var La="get",Aa="application/x-www-form-urlencoded";function Si(e){return e!=null&&typeof e.tagName=="string"}function cx(e){return Si(e)&&e.tagName.toLowerCase()==="button"}function dx(e){return Si(e)&&e.tagName.toLowerCase()==="form"}function ux(e){return Si(e)&&e.tagName.toLowerCase()==="input"}function fx(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function mx(e,t){return e.button===0&&(!t||t==="_self")&&!fx(e)}function rl(e=""){return new URLSearchParams(typeof e=="string"||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce((t,r)=>{let s=e[r];return t.concat(Array.isArray(s)?s.map(a=>[r,a]):[[r,s]])},[]))}function hx(e,t){let r=rl(e);return t&&t.forEach((s,a)=>{r.has(a)||t.getAll(a).forEach(i=>{r.append(a,i)})}),r}var fa=null;function px(){if(fa===null)try{new FormData(document.createElement("form"),0),fa=!1}catch{fa=!0}return fa}var xx=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function eo(e){return e!=null&&!xx.has(e)?(Bt(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Aa}"`),null):e}function gx(e,t){let r,s,a,i,o;if(dx(e)){let l=e.getAttribute("action");s=l?bn(l,t):null,r=e.getAttribute("method")||La,a=eo(e.getAttribute("enctype"))||Aa,i=new FormData(e)}else if(cx(e)||ux(e)&&(e.type==="submit"||e.type==="image")){let l=e.form;if(l==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let c=e.getAttribute("formaction")||l.getAttribute("action");if(s=c?bn(c,t):null,r=e.getAttribute("formmethod")||l.getAttribute("method")||La,a=eo(e.getAttribute("formenctype"))||eo(l.getAttribute("enctype"))||Aa,i=new FormData(l,e),!px()){let{name:u,type:f,value:p}=e;if(f==="image"){let h=u?`${u}.`:"";i.append(`${h}x`,"0"),i.append(`${h}y`,"0")}else u&&i.append(u,p)}}else{if(Si(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');r=La,s=null,a=Aa,o=e}return i&&a==="text/plain"&&(o=i,i=void 0),{action:s,method:r.toLowerCase(),encType:a,formData:i,body:o}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function ic(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function vx(e,t,r){let s=typeof e=="string"?new URL(e,typeof window>"u"?"server://singlefetch/":window.location.origin):e;return s.pathname==="/"?s.pathname=`_root.${r}`:t&&bn(s.pathname,t)==="/"?s.pathname=`${t.replace(/\/$/,"")}/_root.${r}`:s.pathname=`${s.pathname.replace(/\/$/,"")}.${r}`,s}async function yx(e,t){if(e.id in t)return t[e.id];try{let r=await ec(()=>import(e.module),[]);return t[e.id]=r,r}catch(r){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(r),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function bx(e){return e!=null&&typeof e.page=="string"}function wx(e){return e==null?!1:e.href==null?e.rel==="preload"&&typeof e.imageSrcSet=="string"&&typeof e.imageSizes=="string":typeof e.rel=="string"&&typeof e.href=="string"}async function jx(e,t,r){let s=await Promise.all(e.map(async a=>{let i=t.routes[a.route.id];if(i){let o=await yx(i,r);return o.links?o.links():[]}return[]}));return Cx(s.flat(1).filter(wx).filter(a=>a.rel==="stylesheet"||a.rel==="preload").map(a=>a.rel==="stylesheet"?{...a,rel:"prefetch",as:"style"}:{...a,rel:"prefetch"}))}function Pd(e,t,r,s,a,i){let o=(c,u)=>r[u]?c.route.id!==r[u].route.id:!0,l=(c,u)=>{var f;return r[u].pathname!==c.pathname||((f=r[u].route.path)==null?void 0:f.endsWith("*"))&&r[u].params["*"]!==c.params["*"]};return i==="assets"?t.filter((c,u)=>o(c,u)||l(c,u)):i==="data"?t.filter((c,u)=>{var p;let f=s.routes[c.route.id];if(!f||!f.hasLoader)return!1;if(o(c,u)||l(c,u))return!0;if(c.route.shouldRevalidate){let h=c.route.shouldRevalidate({currentUrl:new URL(a.pathname+a.search+a.hash,window.origin),currentParams:((p=r[0])==null?void 0:p.params)||{},nextUrl:new URL(e,window.origin),nextParams:c.params,defaultShouldRevalidate:!0});if(typeof h=="boolean")return h}return!0}):[]}function Nx(e,t,{includeHydrateFallback:r}={}){return kx(e.map(s=>{let a=t.routes[s.route.id];if(!a)return[];let i=[a.module];return a.clientActionModule&&(i=i.concat(a.clientActionModule)),a.clientLoaderModule&&(i=i.concat(a.clientLoaderModule)),r&&a.hydrateFallbackModule&&(i=i.concat(a.hydrateFallbackModule)),a.imports&&(i=i.concat(a.imports)),i}).flat(1))}function kx(e){return[...new Set(e)]}function Sx(e){let t={},r=Object.keys(e).sort();for(let s of r)t[s]=e[s];return t}function Cx(e,t){let r=new Set,s=new Set(t);return e.reduce((a,i)=>{if(t&&!bx(i)&&i.as==="script"&&i.href&&s.has(i.href))return a;let l=JSON.stringify(Sx(i));return r.has(l)||(r.add(l),a.push({key:l,link:i})),a},[])}function ym(){let e=d.useContext(Gr);return ic(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}function Ex(){let e=d.useContext(ki);return ic(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}var oc=d.createContext(void 0);oc.displayName="FrameworkContext";function bm(){let e=d.useContext(oc);return ic(e,"You must render this element inside a <HydratedRouter> element"),e}function Px(e,t){let r=d.useContext(oc),[s,a]=d.useState(!1),[i,o]=d.useState(!1),{onFocus:l,onBlur:c,onMouseEnter:u,onMouseLeave:f,onTouchStart:p}=t,h=d.useRef(null);d.useEffect(()=>{if(e==="render"&&o(!0),e==="viewport"){let N=v=>{v.forEach(m=>{o(m.isIntersecting)})},C=new IntersectionObserver(N,{threshold:.5});return h.current&&C.observe(h.current),()=>{C.disconnect()}}},[e]),d.useEffect(()=>{if(s){let N=setTimeout(()=>{o(!0)},100);return()=>{clearTimeout(N)}}},[s]);let b=()=>{a(!0)},g=()=>{a(!1),o(!1)};return r?e!=="intent"?[i,h,{}]:[i,h,{onFocus:ss(l,b),onBlur:ss(c,g),onMouseEnter:ss(u,b),onMouseLeave:ss(f,g),onTouchStart:ss(p,b)}]:[!1,h,{}]}function ss(e,t){return r=>{e&&e(r),r.defaultPrevented||t(r)}}function Rx({page:e,...t}){let{router:r}=ym(),s=d.useMemo(()=>dm(r.routes,e,r.basename),[r.routes,e,r.basename]);return s?d.createElement(_x,{page:e,matches:s,...t}):null}function Tx(e){let{manifest:t,routeModules:r}=bm(),[s,a]=d.useState([]);return d.useEffect(()=>{let i=!1;return jx(e,t,r).then(o=>{i||a(o)}),()=>{i=!0}},[e,t,r]),s}function _x({page:e,matches:t,...r}){let s=bt(),{manifest:a,routeModules:i}=bm(),{basename:o}=ym(),{loaderData:l,matches:c}=Ex(),u=d.useMemo(()=>Pd(e,t,c,a,s,"data"),[e,t,c,a,s]),f=d.useMemo(()=>Pd(e,t,c,a,s,"assets"),[e,t,c,a,s]),p=d.useMemo(()=>{if(e===s.pathname+s.search+s.hash)return[];let g=new Set,N=!1;if(t.forEach(v=>{var y;let m=a.routes[v.route.id];!m||!m.hasLoader||(!u.some(E=>E.route.id===v.route.id)&&v.route.id in l&&((y=i[v.route.id])!=null&&y.shouldRevalidate)||m.hasClientLoader?N=!0:g.add(v.route.id))}),g.size===0)return[];let C=vx(e,o,"data");return N&&g.size>0&&C.searchParams.set("_routes",t.filter(v=>g.has(v.route.id)).map(v=>v.route.id).join(",")),[C.pathname+C.search]},[o,l,s,a,u,t,e,i]),h=d.useMemo(()=>Nx(f,a),[f,a]),b=Tx(f);return d.createElement(d.Fragment,null,p.map(g=>d.createElement("link",{key:g,rel:"prefetch",as:"fetch",href:g,...r})),h.map(g=>d.createElement("link",{key:g,rel:"modulepreload",href:g,...r})),b.map(({key:g,link:N})=>d.createElement("link",{key:g,...N})))}function Lx(...e){return t=>{e.forEach(r=>{typeof r=="function"?r(t):r!=null&&(r.current=t)})}}var wm=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{wm&&(window.__reactRouterVersion="7.7.1")}catch{}function Ax({basename:e,children:t,window:r}){let s=d.useRef();s.current==null&&(s.current=hp({window:r,v5Compat:!0}));let a=s.current,[i,o]=d.useState({action:a.action,location:a.location}),l=d.useCallback(c=>{d.startTransition(()=>o(c))},[o]);return d.useLayoutEffect(()=>a.listen(l),[a,l]),d.createElement(ox,{basename:e,children:t,location:i.location,navigationType:i.action,navigator:a})}var jm=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Nm=d.forwardRef(function({onClick:t,discover:r="render",prefetch:s="none",relative:a,reloadDocument:i,replace:o,state:l,target:c,to:u,preventScrollReset:f,viewTransition:p,...h},b){let{basename:g}=d.useContext(Jt),N=typeof u=="string"&&jm.test(u),C,v=!1;if(typeof u=="string"&&N&&(C=u,wm))try{let w=new URL(window.location.href),k=u.startsWith("//")?new URL(w.protocol+u):new URL(u),R=bn(k.pathname,g);k.origin===w.origin&&R!=null?u=R+k.search+k.hash:v=!0}catch{Bt(!1,`<Link to="${u}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let m=Bp(u,{relative:a}),[y,E,j]=Px(s,h),P=zx(u,{replace:o,state:l,target:c,preventScrollReset:f,relative:a,viewTransition:p});function S(w){t&&t(w),w.defaultPrevented||P(w)}let x=d.createElement("a",{...h,...j,href:C||m,onClick:v||i?t:S,ref:Lx(b,E),target:c,"data-discover":!N&&r==="render"?"true":void 0});return y&&!N?d.createElement(d.Fragment,null,x,d.createElement(Rx,{page:m})):x});Nm.displayName="Link";var Ix=d.forwardRef(function({"aria-current":t="page",caseSensitive:r=!1,className:s="",end:a=!1,style:i,to:o,viewTransition:l,children:c,...u},f){let p=Gs(o,{relative:u.relative}),h=bt(),b=d.useContext(ki),{navigator:g,basename:N}=d.useContext(Jt),C=b!=null&&Ux(p)&&l===!0,v=g.encodeLocation?g.encodeLocation(p).pathname:p.pathname,m=h.pathname,y=b&&b.navigation&&b.navigation.location?b.navigation.location.pathname:null;r||(m=m.toLowerCase(),y=y?y.toLowerCase():null,v=v.toLowerCase()),y&&N&&(y=bn(y,N)||y);const E=v!=="/"&&v.endsWith("/")?v.length-1:v.length;let j=m===v||!a&&m.startsWith(v)&&m.charAt(E)==="/",P=y!=null&&(y===v||!a&&y.startsWith(v)&&y.charAt(v.length)==="/"),S={isActive:j,isPending:P,isTransitioning:C},x=j?t:void 0,w;typeof s=="function"?w=s(S):w=[s,j?"active":null,P?"pending":null,C?"transitioning":null].filter(Boolean).join(" ");let k=typeof i=="function"?i(S):i;return d.createElement(Nm,{...u,"aria-current":x,className:w,ref:f,style:k,to:o,viewTransition:l},typeof c=="function"?c(S):c)});Ix.displayName="NavLink";var Dx=d.forwardRef(({discover:e="render",fetcherKey:t,navigate:r,reloadDocument:s,replace:a,state:i,method:o=La,action:l,onSubmit:c,relative:u,preventScrollReset:f,viewTransition:p,...h},b)=>{let g=$x(),N=Bx(l,{relative:u}),C=o.toLowerCase()==="get"?"get":"post",v=typeof l=="string"&&jm.test(l),m=y=>{if(c&&c(y),y.defaultPrevented)return;y.preventDefault();let E=y.nativeEvent.submitter,j=(E==null?void 0:E.getAttribute("formmethod"))||o;g(E||y.currentTarget,{fetcherKey:t,method:j,navigate:r,replace:a,state:i,relative:u,preventScrollReset:f,viewTransition:p})};return d.createElement("form",{ref:b,method:C,action:N,onSubmit:s?c:m,...h,"data-discover":!v&&e==="render"?"true":void 0})});Dx.displayName="Form";function Mx(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function km(e){let t=d.useContext(Gr);return Be(t,Mx(e)),t}function zx(e,{target:t,replace:r,state:s,preventScrollReset:a,relative:i,viewTransition:o}={}){let l=He(),c=bt(),u=Gs(e,{relative:i});return d.useCallback(f=>{if(mx(f,t)){f.preventDefault();let p=r!==void 0?r:Bs(c)===Bs(u);l(e,{replace:p,state:s,preventScrollReset:a,relative:i,viewTransition:o})}},[c,l,u,r,s,t,e,a,i,o])}function Sm(e){Bt(typeof URLSearchParams<"u","You cannot use the `useSearchParams` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params.");let t=d.useRef(rl(e)),r=d.useRef(!1),s=bt(),a=d.useMemo(()=>hx(s.search,r.current?null:t.current),[s.search]),i=He(),o=d.useCallback((l,c)=>{const u=rl(typeof l=="function"?l(new URLSearchParams(a)):l);r.current=!0,i("?"+u,c)},[i,a]);return[a,o]}var Fx=0,Ox=()=>`__${String(++Fx)}__`;function $x(){let{router:e}=km("useSubmit"),{basename:t}=d.useContext(Jt),r=tx();return d.useCallback(async(s,a={})=>{let{action:i,method:o,encType:l,formData:c,body:u}=gx(s,t);if(a.navigate===!1){let f=a.fetcherKey||Ox();await e.fetch(f,r,a.action||i,{preventScrollReset:a.preventScrollReset,formData:c,body:u,formMethod:a.method||o,formEncType:a.encType||l,flushSync:a.flushSync})}else await e.navigate(a.action||i,{preventScrollReset:a.preventScrollReset,formData:c,body:u,formMethod:a.method||o,formEncType:a.encType||l,replace:a.replace,state:a.state,fromRouteId:r,flushSync:a.flushSync,viewTransition:a.viewTransition})},[e,t,r])}function Bx(e,{relative:t}={}){let{basename:r}=d.useContext(Jt),s=d.useContext(Ut);Be(s,"useFormAction must be used inside a RouteContext");let[a]=s.matches.slice(-1),i={...Gs(e||".",{relative:t})},o=bt();if(e==null){i.search=o.search;let l=new URLSearchParams(i.search),c=l.getAll("index");if(c.some(f=>f==="")){l.delete("index"),c.filter(p=>p).forEach(p=>l.append("index",p));let f=l.toString();i.search=f?`?${f}`:""}}return(!e||e===".")&&a.route.index&&(i.search=i.search?i.search.replace(/^\?/,"?index&"):"?index"),r!=="/"&&(i.pathname=i.pathname==="/"?r:pn([r,i.pathname])),Bs(i)}function Ux(e,{relative:t}={}){let r=d.useContext(hm);Be(r!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:s}=km("useViewTransitionState"),a=Gs(e,{relative:t});if(!r.isTransitioning)return!1;let i=bn(r.currentLocation.pathname,s)||r.currentLocation.pathname,o=bn(r.nextLocation.pathname,s)||r.nextLocation.pathname;return ii(a.pathname,o)!=null||ii(a.pathname,i)!=null}function qx({size:e=22,spinning:t=!1}){return n.jsx("div",{style:{width:e,height:e},className:"grid place-items-center",children:n.jsxs("svg",{viewBox:"0 0 100 100",className:`${t?"animate-[spin_0.8s_ease-out]":"motion-safe:animate-[spin_9s_linear_infinite]"} group-active:motion-safe:animate-[spin_1.2s_linear_infinite]`,style:{filter:"drop-shadow(0 2px 4px rgba(0,0,0,0.2))"},children:[n.jsx("path",{d:"M50,50 L50,5 A45,45 0 0,1 86.97,25.98 Z",fill:"#6366F1"}),n.jsx("path",{d:"M50,50 L86.97,25.98 A45,45 0 0,1 86.97,74.02 Z",fill:"#22C55E"}),n.jsx("path",{d:"M50,50 L86.97,74.02 A45,45 0 0,1 50,95 Z",fill:"#F59E0B"}),n.jsx("path",{d:"M50,50 L50,95 A45,45 0 0,1 13.03,74.02 Z",fill:"#EF4444"}),n.jsx("path",{d:"M50,50 L13.03,74.02 A45,45 0 0,1 13.03,25.98 Z",fill:"#3B82F6"}),n.jsx("path",{d:"M50,50 L13.03,25.98 A45,45 0 0,1 50,5 Z",fill:"#8B5CF6"}),n.jsx("circle",{cx:"50",cy:"50",r:"9",fill:"#111827",stroke:"white",strokeWidth:"2"})]})})}function Qx(){const e=He(),{pathname:t}=bt(),r=d.useRef({}),s=d.useRef({}),[a,i]=d.useState(!1),o=d.useRef(null),l=d.useRef({});d.useEffect(()=>{l.current={tap:new Audio("/sounds/tap.mp3"),whoosh:new Audio("/sounds/whoosh.mp3")},Object.values(l.current).forEach(j=>{j.volume=.5})},[]);const c=j=>{const P=l.current[j];P&&(P.currentTime=0,P.play().catch(()=>{}))},u=j=>{if(navigator.vibrate)switch(j){case"light":navigator.vibrate(10);break;case"medium":navigator.vibrate(20);break;case"heavy":navigator.vibrate(40);break;case"double":navigator.vibrate([20,50,20]);break;case"success":navigator.vibrate([10,50,10,50,10]);break;default:navigator.vibrate(15)}};d.useCallback(()=>{var j;if(["/","/play","/swipe","/profile"].includes(t)){const P=((j=o.current)==null?void 0:j.scrollTop)||0,S=window.scrollY||window.pageYOffset||0,x=P>0?P:S;console.log(`Saving scroll for ${t}: main=${P}, window=${S}, saved=${x}`),r.current[t]=x}},[t]),d.useEffect(()=>{let j=null;const P=()=>{j&&cancelAnimationFrame(j),j=requestAnimationFrame(()=>{var x;if(["/","/play","/swipe","/profile"].includes(t)){const w=((x=o.current)==null?void 0:x.scrollTop)||0,k=window.scrollY||window.pageYOffset||0,R=w>0?w:k;r.current[t]=R,console.log(`Scroll position updated for ${t}: ${R}`)}})};window.addEventListener("scroll",P,{passive:!0});const S=o.current;return S&&S.addEventListener("scroll",P,{passive:!0}),()=>{j&&cancelAnimationFrame(j),window.removeEventListener("scroll",P),S&&S.removeEventListener("scroll",P)}},[t]),d.useEffect(()=>{if(o.current&&o.current.classList.add("navigating"),["/profile/","/quiz/","/practice/","/play/classic","/settings","/about"].some(S=>t.startsWith(S)))window.scrollTo(0,0),o.current&&(o.current.scrollTop=0),setTimeout(()=>{o.current&&o.current.classList.remove("navigating")},20);else{const S=r.current[t];if(console.log(`Attempting to restore scroll for ${t}: ${S}`),S!=null&&S>0){const x=(w=0)=>{w>=5||(o.current?(o.current.scrollTop=S,setTimeout(()=>{var R;const k=((R=o.current)==null?void 0:R.scrollTop)||0;Math.abs(k-S)>10?(window.scrollTo(0,S),setTimeout(()=>{const M=window.scrollY||window.pageYOffset||0;console.log(`Restore attempt ${w+1}: main=${k}, window=${M}, target=${S}`),Math.abs(M-S)>10&&Math.abs(k-S)>10&&x(w+1)},20)):console.log(`Successfully restored scroll to ${k}`)},20)):window.scrollTo(0,S))};x(0),setTimeout(()=>{o.current&&o.current.classList.remove("navigating")},20)}else window.scrollTo(0,0),o.current&&(o.current.scrollTop=0),setTimeout(()=>{o.current&&o.current.classList.remove("navigating")},20)}},[t]);const[f,p]=d.useState(!1),[h,b]=d.useState({open:!1,go:null}),[g,N]=d.useState(!1);d.useEffect(()=>{const j=()=>{N(document.body.classList.contains("hide-bottom-nav"))};j();const P=new MutationObserver(j);return P.observe(document.body,{attributes:!0,attributeFilter:["class"]}),()=>P.disconnect()},[]),d.useEffect(()=>{const j=new MutationObserver(()=>{p(document.body.classList.contains("modal-open"))});return j.observe(document.body,{attributes:!0,attributeFilter:["class"]}),()=>j.disconnect()},[]);const v=f||g||[/^\/quiz\//,/^\/practice\//,/^\/profile\//,/^\/play\/classic/].some(j=>j.test(t)),m=j=>j==="/"?t==="/":t.startsWith(j),y=d.useCallback(()=>{console.log("Scrolling to top"),window.scrollTo({top:0,behavior:"smooth"}),o.current&&o.current.scrollTo({top:0,behavior:"smooth"}),document.documentElement.scrollTop=0,document.body.scrollTop=0},[]),E=({path:j,icon:P,label:S,emoji:x})=>{const w=m(j),[k,R]=d.useState(!1),M=d.useCallback(()=>{var U;const q=Date.now();if(w){const _=s.current[j]||0;console.log(`Active tab clicked. Time since last tap: ${q-_}ms`),q-_<500?(console.log("Double tap detected!"),y(),c("tap"),u("double"),s.current[j]=0):s.current[j]=q;return}if(["/","/play","/swipe","/profile"].includes(t)){const _=((U=o.current)==null?void 0:U.scrollTop)||0,I=window.scrollY||window.pageYOffset||0,B=_>0?_:I;console.log(`Manually saving scroll before navigation from ${t}: ${B}`),r.current[t]=B}const ee=s.current[j]||0;if(q-ee<500){console.log("Double tap on inactive tab - navigating and scrolling to top"),r.current[j]=0,j==="/play"?(i(!0),c("whoosh"),u("double"),setTimeout(()=>{e(`/play?view=modes&reset=${Date.now()}`),i(!1),setTimeout(y,100)},200)):(c("tap"),u("double"),e(j),setTimeout(y,100)),s.current[j]=0;return}s.current[j]=q,R(!0),setTimeout(()=>R(!1),600);const Q=()=>{if(j==="/play"){i(!0),c("whoosh"),u("medium"),setTimeout(()=>{e(`/play?view=modes&reset=${Date.now()}`),i(!1)},200);return}c("tap"),u("light"),e(j)};if(localStorage.getItem("qp_in_question")==="true"){b({open:!0,go:Q});return}Q()},[w,j,t,e,y,c,u]);return n.jsxs("button",{type:"button",onClick:M,className:`group relative flex h-14 w-20 flex-col items-center justify-center rounded-xl transition-all
          ${w?"scale-110":"scale-100 hover:scale-105"}
          ${k?"animate-bounce":""}`,"aria-current":w?"page":void 0,children:[w&&n.jsxs(n.Fragment,{children:[n.jsx("span",{className:"absolute -top-2 h-1.5 w-10 rounded-full bg-gradient-to-r from-transparent via-white to-transparent opacity-60"}),n.jsx("div",{className:"absolute inset-0 rounded-xl bg-white/10 blur-xl"})]}),n.jsx("div",{className:`leading-none text-2xl transition-transform ${w?"scale-125":""} ${j==="/play"&&a?"animate-spin":""}`,children:x||P}),n.jsx("span",{className:`mt-1 text-[10px] font-medium transition-all ${w?"text-white":"text-base-muted/80"}`,children:S})]})};return n.jsxs("div",{className:"min-h-screen bg-base-bg text-base-text",children:[n.jsx("style",{children:`
        .hide-bottom-nav nav[role="navigation"] {
         display: none !important;
        }
        main.navigating {
          visibility: hidden;
        }
        main {
          scroll-behavior: auto !important;
        }
      `}),n.jsx("main",{ref:o,className:"mx-auto w-full max-w-none px-1 sm:px-3 md:px-4 overscroll-y-contain",style:{height:v||document.body.classList.contains("hide-bottom-nav")?"100dvh":"calc(100dvh - (5.5rem + env(safe-area-inset-bottom)))",paddingTop:"calc(env(safe-area-inset-top) + 12px)",paddingBottom:v||document.body.classList.contains("hide-bottom-nav")?0:void 0,overflowY:"auto"},children:n.jsx(ix,{})}),h.open&&n.jsxs("div",{className:"fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center px-6",style:{animation:"fadeIn 0.2s ease-out"},children:[n.jsxs("div",{className:"w-full max-w-sm rounded-3xl bg-gradient-to-b from-base-card to-base-card/90 border border-base-border p-6 text-center shadow-2xl",style:{animation:"slideUp 0.3s ease-out"},children:[n.jsx("div",{className:"text-5xl mb-4",style:{animation:"bounce 0.6s ease-out"},children:"😟"}),n.jsx("div",{className:"text-xl font-bold mb-2 bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent",children:"Leave the game?"}),n.jsx("p",{className:"text-base-muted mb-6 text-sm",children:"You'll lose your current progress!"}),n.jsxs("div",{className:"flex gap-3",children:[n.jsx("button",{onClick:()=>{u("light"),b({open:!1,go:null})},className:"flex-1 py-3 rounded-2xl border-2 border-green-500/30 bg-green-500/10 hover:bg-green-500/20 transition-all font-semibold text-green-400",children:"Keep Playing! 🎮"}),n.jsx("button",{onClick:()=>{u("medium");const j=h.go;b({open:!1,go:null}),j==null||j()},className:"flex-1 py-3 rounded-2xl bg-gradient-to-r from-red-500/80 to-orange-500/80 text-white font-semibold hover:from-red-500 hover:to-orange-500 transition-all",children:"Leave 👋"})]})]}),n.jsx("style",{children:`
            @keyframes fadeIn {
              from { opacity: 0; }
              to { opacity: 1; }
            }
            @keyframes slideUp {
              from { transform: translateY(20px); opacity: 0; }
              to { transform: translateY(0); opacity: 1; }
            }
          `})]}),!v&&n.jsxs("nav",{role:"navigation","aria-label":"Bottom navigation",className:"fixed inset-x-0 bottom-0 z-50",children:[n.jsx("div",{className:"absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0B0F1A] to-[#0B0F1A]/95 backdrop-blur-lg",style:{height:"calc(5.5rem + env(safe-area-inset-bottom))"},"aria-hidden":!0}),n.jsx("div",{className:"relative mx-auto max-w-md px-4 pb-[calc(env(safe-area-inset-bottom)+0.5rem)] pt-2",children:n.jsxs("div",{className:"relative",children:[n.jsx("div",{className:"absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-green-500/20 blur-2xl"}),n.jsxs("div",{className:"relative flex h-[72px] items-center justify-around rounded-3xl border border-white/10 bg-gradient-to-b from-base-card/95 to-base-card/80 shadow-2xl backdrop-blur-xl",children:[n.jsx(E,{path:"/",emoji:"🏠",label:"Home"}),n.jsx(E,{path:"/play",icon:n.jsx(qx,{size:26,spinning:a}),label:"Play"}),n.jsx(E,{path:"/swipe",emoji:"📚",label:"Swipe"}),n.jsx(E,{path:"/profile",emoji:"👤",label:"Profile"})]})]})})]})]})}function oi(){return oi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var s in r)({}).hasOwnProperty.call(r,s)&&(e[s]=r[s])}return e},oi.apply(null,arguments)}function Yx(e,t){if(e==null)return{};var r={};for(var s in e)if({}.hasOwnProperty.call(e,s)){if(t.indexOf(s)!==-1)continue;r[s]=e[s]}return r}function Hx(e){d.useEffect(e,[])}var Wx=["id","volume","playbackRate","soundEnabled","interrupt","onload"];function zt(e,t){var r=t===void 0?{}:t,s=r.volume,a=s===void 0?1:s,i=r.playbackRate,o=i===void 0?1:i,l=r.soundEnabled,c=l===void 0?!0:l,u=r.interrupt,f=u===void 0?!1:u,p=r.onload,h=Yx(r,Wx),b=pt.useRef(null),g=pt.useRef(!1),N=pt.useState(null),C=N[0],v=N[1],m=pt.useState(null),y=m[0],E=m[1],j=function(){typeof p=="function"&&p.call(this),g.current&&v(this.duration()*1e3),E(this)};Hx(function(){return ec(()=>import("./howler-32b87317.js").then(k=>k.h),[]).then(function(k){if(!g.current){var R;b.current=(R=k.Howl)!==null&&R!==void 0?R:k.default.Howl,g.current=!0,new b.current(oi({src:Array.isArray(e)?e:[e],volume:a,rate:o,onload:j},h))}}),function(){g.current=!1}}),pt.useEffect(function(){b.current&&y&&E(new b.current(oi({src:Array.isArray(e)?e:[e],volume:a,onload:j},h)))},[JSON.stringify(e)]),pt.useEffect(function(){y&&(y.volume(a),h.sprite||y.rate(o))},[y,a,o]);var P=pt.useCallback(function(k){typeof k>"u"&&(k={}),!(!y||!c&&!k.forceSoundEnabled)&&(f&&y.stop(),k.playbackRate&&y.rate(k.playbackRate),y.play(k.id))},[y,c,f]),S=pt.useCallback(function(k){y&&y.stop(k)},[y]),x=pt.useCallback(function(k){y&&y.pause(k)},[y]),w=[P,{sound:y,stop:S,pause:x,duration:C}];return w}var Cm={exports:{}};/* @license
Papa Parse
v5.5.3
https://github.com/mholt/PapaParse
License: MIT
*/(function(e,t){((r,s)=>{e.exports=s()})(Om,function r(){var s=typeof self<"u"?self:typeof window<"u"?window:s!==void 0?s:{},a,i=!s.document&&!!s.postMessage,o=s.IS_PAPA_WORKER||!1,l={},c=0,u={};function f(x){this._handle=null,this._finished=!1,this._completed=!1,this._halted=!1,this._input=null,this._baseIndex=0,this._partialLine="",this._rowCount=0,this._start=0,this._nextChunk=null,this.isFirstChunk=!0,this._completeResults={data:[],errors:[],meta:{}},(function(w){var k=j(w);k.chunkSize=parseInt(k.chunkSize),w.step||w.chunk||(k.chunkSize=null),this._handle=new N(k),(this._handle.streamer=this)._config=k}).call(this,x),this.parseChunk=function(w,k){var R=parseInt(this._config.skipFirstNLines)||0;if(this.isFirstChunk&&0<R){let q=this._config.newline;q||(M=this._config.quoteChar||'"',q=this._handle.guessLineEndings(w,M)),w=[...w.split(q).slice(R)].join(q)}this.isFirstChunk&&S(this._config.beforeFirstChunk)&&(M=this._config.beforeFirstChunk(w))!==void 0&&(w=M),this.isFirstChunk=!1,this._halted=!1;var R=this._partialLine+w,M=(this._partialLine="",this._handle.parse(R,this._baseIndex,!this._finished));if(!this._handle.paused()&&!this._handle.aborted()){if(w=M.meta.cursor,R=(this._finished||(this._partialLine=R.substring(w-this._baseIndex),this._baseIndex=w),M&&M.data&&(this._rowCount+=M.data.length),this._finished||this._config.preview&&this._rowCount>=this._config.preview),o)s.postMessage({results:M,workerId:u.WORKER_ID,finished:R});else if(S(this._config.chunk)&&!k){if(this._config.chunk(M,this._handle),this._handle.paused()||this._handle.aborted())return void(this._halted=!0);this._completeResults=M=void 0}return this._config.step||this._config.chunk||(this._completeResults.data=this._completeResults.data.concat(M.data),this._completeResults.errors=this._completeResults.errors.concat(M.errors),this._completeResults.meta=M.meta),this._completed||!R||!S(this._config.complete)||M&&M.meta.aborted||(this._config.complete(this._completeResults,this._input),this._completed=!0),R||M&&M.meta.paused||this._nextChunk(),M}this._halted=!0},this._sendError=function(w){S(this._config.error)?this._config.error(w):o&&this._config.error&&s.postMessage({workerId:u.WORKER_ID,error:w,finished:!1})}}function p(x){var w;(x=x||{}).chunkSize||(x.chunkSize=u.RemoteChunkSize),f.call(this,x),this._nextChunk=i?function(){this._readChunk(),this._chunkLoaded()}:function(){this._readChunk()},this.stream=function(k){this._input=k,this._nextChunk()},this._readChunk=function(){if(this._finished)this._chunkLoaded();else{if(w=new XMLHttpRequest,this._config.withCredentials&&(w.withCredentials=this._config.withCredentials),i||(w.onload=P(this._chunkLoaded,this),w.onerror=P(this._chunkError,this)),w.open(this._config.downloadRequestBody?"POST":"GET",this._input,!i),this._config.downloadRequestHeaders){var k,R=this._config.downloadRequestHeaders;for(k in R)w.setRequestHeader(k,R[k])}var M;this._config.chunkSize&&(M=this._start+this._config.chunkSize-1,w.setRequestHeader("Range","bytes="+this._start+"-"+M));try{w.send(this._config.downloadRequestBody)}catch(q){this._chunkError(q.message)}i&&w.status===0&&this._chunkError()}},this._chunkLoaded=function(){w.readyState===4&&(w.status<200||400<=w.status?this._chunkError():(this._start+=this._config.chunkSize||w.responseText.length,this._finished=!this._config.chunkSize||this._start>=(k=>(k=k.getResponseHeader("Content-Range"))!==null?parseInt(k.substring(k.lastIndexOf("/")+1)):-1)(w),this.parseChunk(w.responseText)))},this._chunkError=function(k){k=w.statusText||k,this._sendError(new Error(k))}}function h(x){(x=x||{}).chunkSize||(x.chunkSize=u.LocalChunkSize),f.call(this,x);var w,k,R=typeof FileReader<"u";this.stream=function(M){this._input=M,k=M.slice||M.webkitSlice||M.mozSlice,R?((w=new FileReader).onload=P(this._chunkLoaded,this),w.onerror=P(this._chunkError,this)):w=new FileReaderSync,this._nextChunk()},this._nextChunk=function(){this._finished||this._config.preview&&!(this._rowCount<this._config.preview)||this._readChunk()},this._readChunk=function(){var M=this._input,q=(this._config.chunkSize&&(q=Math.min(this._start+this._config.chunkSize,this._input.size),M=k.call(M,this._start,q)),w.readAsText(M,this._config.encoding));R||this._chunkLoaded({target:{result:q}})},this._chunkLoaded=function(M){this._start+=this._config.chunkSize,this._finished=!this._config.chunkSize||this._start>=this._input.size,this.parseChunk(M.target.result)},this._chunkError=function(){this._sendError(w.error)}}function b(x){var w;f.call(this,x=x||{}),this.stream=function(k){return w=k,this._nextChunk()},this._nextChunk=function(){var k,R;if(!this._finished)return k=this._config.chunkSize,w=k?(R=w.substring(0,k),w.substring(k)):(R=w,""),this._finished=!w,this.parseChunk(R)}}function g(x){f.call(this,x=x||{});var w=[],k=!0,R=!1;this.pause=function(){f.prototype.pause.apply(this,arguments),this._input.pause()},this.resume=function(){f.prototype.resume.apply(this,arguments),this._input.resume()},this.stream=function(M){this._input=M,this._input.on("data",this._streamData),this._input.on("end",this._streamEnd),this._input.on("error",this._streamError)},this._checkIsFinished=function(){R&&w.length===1&&(this._finished=!0)},this._nextChunk=function(){this._checkIsFinished(),w.length?this.parseChunk(w.shift()):k=!0},this._streamData=P(function(M){try{w.push(typeof M=="string"?M:M.toString(this._config.encoding)),k&&(k=!1,this._checkIsFinished(),this.parseChunk(w.shift()))}catch(q){this._streamError(q)}},this),this._streamError=P(function(M){this._streamCleanUp(),this._sendError(M)},this),this._streamEnd=P(function(){this._streamCleanUp(),R=!0,this._streamData("")},this),this._streamCleanUp=P(function(){this._input.removeListener("data",this._streamData),this._input.removeListener("end",this._streamEnd),this._input.removeListener("error",this._streamError)},this)}function N(x){var w,k,R,M,q=Math.pow(2,53),ee=-q,Q=/^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/,Y=/^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/,U=this,_=0,I=0,B=!1,T=!1,z=[],D={data:[],errors:[],meta:{}};function te(A){return x.skipEmptyLines==="greedy"?A.join("").trim()==="":A.length===1&&A[0].length===0}function X(){if(D&&R&&($("Delimiter","UndetectableDelimiter","Unable to auto-detect delimiting character; defaulted to '"+u.DefaultDelimiter+"'"),R=!1),x.skipEmptyLines&&(D.data=D.data.filter(function(O){return!te(O)})),J()){let O=function(Z,ae){S(x.transformHeader)&&(Z=x.transformHeader(Z,ae)),z.push(Z)};if(D)if(Array.isArray(D.data[0])){for(var A=0;J()&&A<D.data.length;A++)D.data[A].forEach(O);D.data.splice(0,1)}else D.data.forEach(O)}function H(O,Z){for(var ae=x.header?{}:[],ce=0;ce<O.length;ce++){var ne=ce,re=O[ce],re=((K,L)=>(G=>(x.dynamicTypingFunction&&x.dynamicTyping[G]===void 0&&(x.dynamicTyping[G]=x.dynamicTypingFunction(G)),(x.dynamicTyping[G]||x.dynamicTyping)===!0))(K)?L==="true"||L==="TRUE"||L!=="false"&&L!=="FALSE"&&((G=>{if(Q.test(G)&&(G=parseFloat(G),ee<G&&G<q))return 1})(L)?parseFloat(L):Y.test(L)?new Date(L):L===""?null:L):L)(ne=x.header?ce>=z.length?"__parsed_extra":z[ce]:ne,re=x.transform?x.transform(re,ne):re);ne==="__parsed_extra"?(ae[ne]=ae[ne]||[],ae[ne].push(re)):ae[ne]=re}return x.header&&(ce>z.length?$("FieldMismatch","TooManyFields","Too many fields: expected "+z.length+" fields but parsed "+ce,I+Z):ce<z.length&&$("FieldMismatch","TooFewFields","Too few fields: expected "+z.length+" fields but parsed "+ce,I+Z)),ae}var F;D&&(x.header||x.dynamicTyping||x.transform)&&(F=1,!D.data.length||Array.isArray(D.data[0])?(D.data=D.data.map(H),F=D.data.length):D.data=H(D.data,0),x.header&&D.meta&&(D.meta.fields=z),I+=F)}function J(){return x.header&&z.length===0}function $(A,H,F,O){A={type:A,code:H,message:F},O!==void 0&&(A.row=O),D.errors.push(A)}S(x.step)&&(M=x.step,x.step=function(A){D=A,J()?X():(X(),D.data.length!==0&&(_+=A.data.length,x.preview&&_>x.preview?k.abort():(D.data=D.data[0],M(D,U))))}),this.parse=function(A,H,F){var O=x.quoteChar||'"',O=(x.newline||(x.newline=this.guessLineEndings(A,O)),R=!1,x.delimiter?S(x.delimiter)&&(x.delimiter=x.delimiter(A),D.meta.delimiter=x.delimiter):((O=((Z,ae,ce,ne,re)=>{var K,L,G,de;re=re||[",","	","|",";",u.RECORD_SEP,u.UNIT_SEP];for(var he=0;he<re.length;he++){for(var pe,Oe=re[he],Ce=0,be=0,ue=0,ge=(G=void 0,new v({comments:ne,delimiter:Oe,newline:ae,preview:10}).parse(Z)),Ne=0;Ne<ge.data.length;Ne++)ce&&te(ge.data[Ne])?ue++:(pe=ge.data[Ne].length,be+=pe,G===void 0?G=pe:0<pe&&(Ce+=Math.abs(pe-G),G=pe));0<ge.data.length&&(be/=ge.data.length-ue),(L===void 0||Ce<=L)&&(de===void 0||de<be)&&1.99<be&&(L=Ce,K=Oe,de=be)}return{successful:!!(x.delimiter=K),bestDelimiter:K}})(A,x.newline,x.skipEmptyLines,x.comments,x.delimitersToGuess)).successful?x.delimiter=O.bestDelimiter:(R=!0,x.delimiter=u.DefaultDelimiter),D.meta.delimiter=x.delimiter),j(x));return x.preview&&x.header&&O.preview++,w=A,k=new v(O),D=k.parse(w,H,F),X(),B?{meta:{paused:!0}}:D||{meta:{paused:!1}}},this.paused=function(){return B},this.pause=function(){B=!0,k.abort(),w=S(x.chunk)?"":w.substring(k.getCharIndex())},this.resume=function(){U.streamer._halted?(B=!1,U.streamer.parseChunk(w,!0)):setTimeout(U.resume,3)},this.aborted=function(){return T},this.abort=function(){T=!0,k.abort(),D.meta.aborted=!0,S(x.complete)&&x.complete(D),w=""},this.guessLineEndings=function(Z,O){Z=Z.substring(0,1048576);var O=new RegExp(C(O)+"([^]*?)"+C(O),"gm"),F=(Z=Z.replace(O,"")).split("\r"),O=Z.split(`
`),Z=1<O.length&&O[0].length<F[0].length;if(F.length===1||Z)return`
`;for(var ae=0,ce=0;ce<F.length;ce++)F[ce][0]===`
`&&ae++;return ae>=F.length/2?`\r
`:"\r"}}function C(x){return x.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function v(x){var w=(x=x||{}).delimiter,k=x.newline,R=x.comments,M=x.step,q=x.preview,ee=x.fastMode,Q=null,Y=!1,U=x.quoteChar==null?'"':x.quoteChar,_=U;if(x.escapeChar!==void 0&&(_=x.escapeChar),(typeof w!="string"||-1<u.BAD_DELIMITERS.indexOf(w))&&(w=","),R===w)throw new Error("Comment character same as delimiter");R===!0?R="#":(typeof R!="string"||-1<u.BAD_DELIMITERS.indexOf(R))&&(R=!1),k!==`
`&&k!=="\r"&&k!==`\r
`&&(k=`
`);var I=0,B=!1;this.parse=function(T,z,D){if(typeof T!="string")throw new Error("Input must be a string");var te=T.length,X=w.length,J=k.length,$=R.length,A=S(M),H=[],F=[],O=[],Z=I=0;if(!T)return Ce();if(ee||ee!==!1&&T.indexOf(U)===-1){for(var ae=T.split(k),ce=0;ce<ae.length;ce++){if(O=ae[ce],I+=O.length,ce!==ae.length-1)I+=k.length;else if(D)return Ce();if(!R||O.substring(0,$)!==R){if(A){if(H=[],de(O.split(w)),be(),B)return Ce()}else de(O.split(w));if(q&&q<=ce)return H=H.slice(0,q),Ce(!0)}}return Ce()}for(var ne=T.indexOf(w,I),re=T.indexOf(k,I),K=new RegExp(C(_)+C(U),"g"),L=T.indexOf(U,I);;)if(T[I]===U)for(L=I,I++;;){if((L=T.indexOf(U,L+1))===-1)return D||F.push({type:"Quotes",code:"MissingQuotes",message:"Quoted field unterminated",row:H.length,index:I}),pe();if(L===te-1)return pe(T.substring(I,L).replace(K,U));if(U===_&&T[L+1]===_)L++;else if(U===_||L===0||T[L-1]!==_){ne!==-1&&ne<L+1&&(ne=T.indexOf(w,L+1));var G=he((re=re!==-1&&re<L+1?T.indexOf(k,L+1):re)===-1?ne:Math.min(ne,re));if(T.substr(L+1+G,X)===w){O.push(T.substring(I,L).replace(K,U)),T[I=L+1+G+X]!==U&&(L=T.indexOf(U,I)),ne=T.indexOf(w,I),re=T.indexOf(k,I);break}if(G=he(re),T.substring(L+1+G,L+1+G+J)===k){if(O.push(T.substring(I,L).replace(K,U)),Oe(L+1+G+J),ne=T.indexOf(w,I),L=T.indexOf(U,I),A&&(be(),B))return Ce();if(q&&H.length>=q)return Ce(!0);break}F.push({type:"Quotes",code:"InvalidQuotes",message:"Trailing quote on quoted field is malformed",row:H.length,index:I}),L++}}else if(R&&O.length===0&&T.substring(I,I+$)===R){if(re===-1)return Ce();I=re+J,re=T.indexOf(k,I),ne=T.indexOf(w,I)}else if(ne!==-1&&(ne<re||re===-1))O.push(T.substring(I,ne)),I=ne+X,ne=T.indexOf(w,I);else{if(re===-1)break;if(O.push(T.substring(I,re)),Oe(re+J),A&&(be(),B))return Ce();if(q&&H.length>=q)return Ce(!0)}return pe();function de(ue){H.push(ue),Z=I}function he(ue){var ge=0;return ge=ue!==-1&&(ue=T.substring(L+1,ue))&&ue.trim()===""?ue.length:ge}function pe(ue){return D||(ue===void 0&&(ue=T.substring(I)),O.push(ue),I=te,de(O),A&&be()),Ce()}function Oe(ue){I=ue,de(O),O=[],re=T.indexOf(k,I)}function Ce(ue){if(x.header&&!z&&H.length&&!Y){var ge=H[0],Ne=Object.create(null),Ue=new Set(ge);let qt=!1;for(let et=0;et<ge.length;et++){let ke=ge[et];if(Ne[ke=S(x.transformHeader)?x.transformHeader(ke,et):ke]){let Ae,Qt=Ne[ke];for(;Ae=ke+"_"+Qt,Qt++,Ue.has(Ae););Ue.add(Ae),ge[et]=Ae,Ne[ke]++,qt=!0,(Q=Q===null?{}:Q)[Ae]=ke}else Ne[ke]=1,ge[et]=ke;Ue.add(ke)}qt&&console.warn("Duplicate headers found and renamed."),Y=!0}return{data:H,errors:F,meta:{delimiter:w,linebreak:k,aborted:B,truncated:!!ue,cursor:Z+(z||0),renamedHeaders:Q}}}function be(){M(Ce()),H=[],F=[]}},this.abort=function(){B=!0},this.getCharIndex=function(){return I}}function m(x){var w=x.data,k=l[w.workerId],R=!1;if(w.error)k.userError(w.error,w.file);else if(w.results&&w.results.data){var M={abort:function(){R=!0,y(w.workerId,{data:[],errors:[],meta:{aborted:!0}})},pause:E,resume:E};if(S(k.userStep)){for(var q=0;q<w.results.data.length&&(k.userStep({data:w.results.data[q],errors:w.results.errors,meta:w.results.meta},M),!R);q++);delete w.results}else S(k.userChunk)&&(k.userChunk(w.results,M,w.file),delete w.results)}w.finished&&!R&&y(w.workerId,w.results)}function y(x,w){var k=l[x];S(k.userComplete)&&k.userComplete(w),k.terminate(),delete l[x]}function E(){throw new Error("Not implemented.")}function j(x){if(typeof x!="object"||x===null)return x;var w,k=Array.isArray(x)?[]:{};for(w in x)k[w]=j(x[w]);return k}function P(x,w){return function(){x.apply(w,arguments)}}function S(x){return typeof x=="function"}return u.parse=function(x,w){var k=(w=w||{}).dynamicTyping||!1;if(S(k)&&(w.dynamicTypingFunction=k,k={}),w.dynamicTyping=k,w.transform=!!S(w.transform)&&w.transform,!w.worker||!u.WORKERS_SUPPORTED)return k=null,u.NODE_STREAM_INPUT,typeof x=="string"?(x=(R=>R.charCodeAt(0)!==65279?R:R.slice(1))(x),k=new(w.download?p:b)(w)):x.readable===!0&&S(x.read)&&S(x.on)?k=new g(w):(s.File&&x instanceof File||x instanceof Object)&&(k=new h(w)),k.stream(x);(k=(()=>{var R;return!!u.WORKERS_SUPPORTED&&(R=(()=>{var M=s.URL||s.webkitURL||null,q=r.toString();return u.BLOB_URL||(u.BLOB_URL=M.createObjectURL(new Blob(["var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; ","(",q,")();"],{type:"text/javascript"})))})(),(R=new s.Worker(R)).onmessage=m,R.id=c++,l[R.id]=R)})()).userStep=w.step,k.userChunk=w.chunk,k.userComplete=w.complete,k.userError=w.error,w.step=S(w.step),w.chunk=S(w.chunk),w.complete=S(w.complete),w.error=S(w.error),delete w.worker,k.postMessage({input:x,config:w,workerId:k.id})},u.unparse=function(x,w){var k=!1,R=!0,M=",",q=`\r
`,ee='"',Q=ee+ee,Y=!1,U=null,_=!1,I=((()=>{if(typeof w=="object"){if(typeof w.delimiter!="string"||u.BAD_DELIMITERS.filter(function(z){return w.delimiter.indexOf(z)!==-1}).length||(M=w.delimiter),typeof w.quotes!="boolean"&&typeof w.quotes!="function"&&!Array.isArray(w.quotes)||(k=w.quotes),typeof w.skipEmptyLines!="boolean"&&typeof w.skipEmptyLines!="string"||(Y=w.skipEmptyLines),typeof w.newline=="string"&&(q=w.newline),typeof w.quoteChar=="string"&&(ee=w.quoteChar),typeof w.header=="boolean"&&(R=w.header),Array.isArray(w.columns)){if(w.columns.length===0)throw new Error("Option columns is empty");U=w.columns}w.escapeChar!==void 0&&(Q=w.escapeChar+ee),w.escapeFormulae instanceof RegExp?_=w.escapeFormulae:typeof w.escapeFormulae=="boolean"&&w.escapeFormulae&&(_=/^[=+\-@\t\r].*$/)}})(),new RegExp(C(ee),"g"));if(typeof x=="string"&&(x=JSON.parse(x)),Array.isArray(x)){if(!x.length||Array.isArray(x[0]))return B(null,x,Y);if(typeof x[0]=="object")return B(U||Object.keys(x[0]),x,Y)}else if(typeof x=="object")return typeof x.data=="string"&&(x.data=JSON.parse(x.data)),Array.isArray(x.data)&&(x.fields||(x.fields=x.meta&&x.meta.fields||U),x.fields||(x.fields=Array.isArray(x.data[0])?x.fields:typeof x.data[0]=="object"?Object.keys(x.data[0]):[]),Array.isArray(x.data[0])||typeof x.data[0]=="object"||(x.data=[x.data])),B(x.fields||[],x.data||[],Y);throw new Error("Unable to serialize unrecognized input");function B(z,D,te){var X="",J=(typeof z=="string"&&(z=JSON.parse(z)),typeof D=="string"&&(D=JSON.parse(D)),Array.isArray(z)&&0<z.length),$=!Array.isArray(D[0]);if(J&&R){for(var A=0;A<z.length;A++)0<A&&(X+=M),X+=T(z[A],A);0<D.length&&(X+=q)}for(var H=0;H<D.length;H++){var F=(J?z:D[H]).length,O=!1,Z=J?Object.keys(D[H]).length===0:D[H].length===0;if(te&&!J&&(O=te==="greedy"?D[H].join("").trim()==="":D[H].length===1&&D[H][0].length===0),te==="greedy"&&J){for(var ae=[],ce=0;ce<F;ce++){var ne=$?z[ce]:ce;ae.push(D[H][ne])}O=ae.join("").trim()===""}if(!O){for(var re=0;re<F;re++){0<re&&!Z&&(X+=M);var K=J&&$?z[re]:re;X+=T(D[H][K],re)}H<D.length-1&&(!te||0<F&&!Z)&&(X+=q)}}return X}function T(z,D){var te,X;return z==null?"":z.constructor===Date?JSON.stringify(z).slice(1,25):(X=!1,_&&typeof z=="string"&&_.test(z)&&(z="'"+z,X=!0),te=z.toString().replace(I,Q),(X=X||k===!0||typeof k=="function"&&k(z,D)||Array.isArray(k)&&k[D]||((J,$)=>{for(var A=0;A<$.length;A++)if(-1<J.indexOf($[A]))return!0;return!1})(te,u.BAD_DELIMITERS)||-1<te.indexOf(M)||te.charAt(0)===" "||te.charAt(te.length-1)===" ")?ee+te+ee:te)}},u.RECORD_SEP=String.fromCharCode(30),u.UNIT_SEP=String.fromCharCode(31),u.BYTE_ORDER_MARK="\uFEFF",u.BAD_DELIMITERS=["\r",`
`,'"',u.BYTE_ORDER_MARK],u.WORKERS_SUPPORTED=!i&&!!s.Worker,u.NODE_STREAM_INPUT=1,u.LocalChunkSize=10485760,u.RemoteChunkSize=5242880,u.DefaultDelimiter=",",u.Parser=v,u.ParserHandle=N,u.NetworkStreamer=p,u.FileStreamer=h,u.StringStreamer=b,u.ReadableStreamStreamer=g,s.jQuery&&((a=s.jQuery).fn.parse=function(x){var w=x.config||{},k=[];return this.each(function(q){if(!(a(this).prop("tagName").toUpperCase()==="INPUT"&&a(this).attr("type").toLowerCase()==="file"&&s.FileReader)||!this.files||this.files.length===0)return!0;for(var ee=0;ee<this.files.length;ee++)k.push({file:this.files[ee],inputElem:this,instanceConfig:a.extend({},w)})}),R(),this;function R(){if(k.length===0)S(x.complete)&&x.complete();else{var q,ee,Q,Y,U=k[0];if(S(x.before)){var _=x.before(U.file,U.inputElem);if(typeof _=="object"){if(_.action==="abort")return q="AbortError",ee=U.file,Q=U.inputElem,Y=_.reason,void(S(x.error)&&x.error({name:q},ee,Q,Y));if(_.action==="skip")return void M();typeof _.config=="object"&&(U.instanceConfig=a.extend(U.instanceConfig,_.config))}else if(_==="skip")return void M()}var I=U.instanceConfig.complete;U.instanceConfig.complete=function(B){S(I)&&I(B,U.file,U.inputElem),M()},u.parse(U.file,U.instanceConfig)}}function M(){k.splice(0,1),R()}}),o&&(s.onmessage=function(x){x=x.data,u.WORKER_ID===void 0&&x&&(u.WORKER_ID=x.workerId),typeof x.input=="string"?s.postMessage({workerId:u.WORKER_ID,results:u.parse(x.input,x.config),finished:!0}):(s.File&&x.input instanceof File||x.input instanceof Object)&&(x=u.parse(x.input,x.config))&&s.postMessage({workerId:u.WORKER_ID,results:x,finished:!0})}),(p.prototype=Object.create(f.prototype)).constructor=p,(h.prototype=Object.create(f.prototype)).constructor=h,(b.prototype=Object.create(b.prototype)).constructor=b,(g.prototype=Object.create(f.prototype)).constructor=g,u})})(Cm);var Gx=Cm.exports;const hr=Xd(Gx);function Ci({startRect:e,targetRef:t,count:r=12,onDone:s}){return d.useEffect(()=>{const a=t==null?void 0:t.current;if(!e||!a){s==null||s();return}const i=a.getBoundingClientRect(),o=document.createElement("div");o.style.position="fixed",o.style.inset="0",o.style.pointerEvents="none",o.style.zIndex="9999",document.body.appendChild(o);const l=i.left+i.width/2,c=i.top+i.height/2,u=e.left+e.width/2,f=e.top+e.height/2,p=200;let h=0;function b(g){const N=document.createElement("div");N.textContent="🪙",Object.assign(N.style,{position:"fixed",left:"0px",top:"0px",zIndex:"10000",pointerEvents:"none",fontSize:"22px",opacity:"1",willChange:"transform, opacity",transform:"translate(0px, 0px)"});const C=u,v=f,m=l,y=c;N.style.transform=`translate(${C}px, ${v}px) scale(1)`,o.appendChild(N),N.getBoundingClientRect(),N.style.transition=`transform ${p}ms cubic-bezier(.2,.8,.2,1), opacity ${p}ms linear`,requestAnimationFrame(()=>{N.style.transform=`translate(${m}px, ${y}px) scale(.6)`,N.style.opacity="0.1"}),setTimeout(()=>{N.remove(),h+=1,h===r&&(o.remove(),s==null||s())},p+50)}for(let g=0;g<r;g++)setTimeout(()=>b(),g*60);return()=>{try{o.remove()}catch{}}},[e,t,r,s]),null}const ft={XP_PER_CORRECT:10,XP_PER_LEVEL:100,MAX_LEVEL:100,COINS_PER_CORRECT:5,MAX_ENERGY:5,ENERGY_REGEN_TIME:36e5,ENERGY_COST:{quiz:1,practice:0,daily:0},COMBO_MULTIPLIERS:{2:{multiplier:1.2,text:"Nice!"},3:{multiplier:1.5,text:"Great!"},5:{multiplier:2,text:"On Fire!"},10:{multiplier:3,text:"Legendary!"}},AVATARS:[{id:"wizard",emoji:"🧙",name:"Knowledge Wizard",unlocked:!0,bgColor:"from-purple-500 to-indigo-500"},{id:"knight",emoji:"⚔️",name:"Quiz Knight",unlocked:!0,bgColor:"from-blue-500 to-cyan-500"},{id:"explorer",emoji:"🗺️",name:"Fact Explorer",unlockLevel:5,unlocked:!1,bgColor:"from-green-500 to-emerald-500"},{id:"scientist",emoji:"🔬",name:"Science Master",unlockLevel:10,unlocked:!1,bgColor:"from-orange-500 to-red-500"},{id:"artist",emoji:"🎨",name:"Creative Mind",unlockLevel:15,unlocked:!1,bgColor:"from-pink-500 to-rose-500"}],STORAGE_KEYS:{PLAYER:"qp_player",GAME_STATE:"qp_game_state",ENERGY:"qp_energy",CURRENT_COMBO:"qp_combo"}},Rd=e=>Math.floor(e/ft.XP_PER_LEVEL)+1,Vx=e=>{const t=e%ft.XP_PER_LEVEL;return{current:t,required:ft.XP_PER_LEVEL,percentage:t/ft.XP_PER_LEVEL*100}};function Xx({player:e,size:t="normal",showLevel:r=!0,showName:s=!0}){const a=ft.AVATARS.find(o=>o.id===e.avatar)||ft.AVATARS[0],i={small:"w-10 h-10 text-xl",normal:"w-14 h-14 text-2xl",large:"w-20 h-20 text-4xl"};return n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsxs("div",{className:"relative",children:[n.jsx("div",{className:`${i[t]} rounded-full bg-gradient-to-br ${a.bgColor} flex items-center justify-center shadow-lg`,children:n.jsx("span",{children:a.emoji})}),r&&n.jsx("div",{className:"absolute -bottom-1 -right-1 bg-yellow-500 text-black text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center border-2 border-base-bg",children:e.level})]}),s&&n.jsxs("div",{children:[n.jsx("div",{className:"font-bold text-sm",children:e.name}),n.jsx("div",{className:"text-xs text-base-muted",children:a.name})]})]})}function Kx({current:e,required:t,level:r,animate:s=!0}){const[a,i]=d.useState(0),o=e/t*100;return d.useEffect(()=>{if(s){const l=setTimeout(()=>{i(o)},100);return()=>clearTimeout(l)}else i(o)},[o,s]),n.jsxs("div",{className:"w-full",children:[n.jsxs("div",{className:"flex justify-between items-center mb-1",children:[n.jsxs("span",{className:"text-xs font-medium",children:["Level ",r]}),n.jsxs("span",{className:"text-xs text-base-muted",children:[e,"/",t," XP"]})]}),n.jsx("div",{className:"h-2 bg-black/20 rounded-full overflow-hidden",children:n.jsx("div",{className:"h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-700 ease-out relative",style:{width:`${a}%`},children:n.jsx("div",{className:"absolute inset-0 bg-white/20 animate-pulse"})})})]})}const Em=[{name:"GK",slug:"general-knowledge",questions:50,icon:"🧠",color:"#FF6B6B",gradient:"from-red-500 to-pink-500"},{name:"Science",slug:"science",questions:45,icon:"🧪",color:"#4ECDC4",gradient:"from-cyan-500 to-teal-500"},{name:"Fun Facts",slug:"fun-facts",questions:30,icon:"🎉",color:"#FFD93D",gradient:"from-yellow-400 to-orange-500"},{name:"History",slug:"history",questions:42,icon:"🏺",color:"#A8E6CF",gradient:"from-green-400 to-emerald-500"},{name:"AI & Tech",slug:"artificial-intelligence",questions:28,icon:"🤖",color:"#C7B8FF",gradient:"from-purple-400 to-indigo-500"},{name:"More",slug:"more",questions:0,icon:"✨",color:"#FF8CC3",gradient:"from-pink-400 to-rose-500"}],Pm=[{name:"Geography",slug:"geography",questions:38,icon:"🗺️",color:"#FACC15",gradient:"from-yellow-400 to-amber-500"},{name:"Computer",slug:"computer",questions:34,icon:"💻",color:"#3B82F6",gradient:"from-blue-400 to-blue-600"},{name:"Aptitude",slug:"aptitude",questions:36,icon:"📐",color:"#EC4899",gradient:"from-pink-500 to-rose-500"},{name:"Iconic Figures",slug:"iconic-figures",questions:26,icon:"🌟",color:"#8B5CF6",gradient:"from-purple-500 to-violet-600"}],Rm=[...Em.filter(e=>e.slug!=="more"),...Pm];function Jx({onClick:e}){return n.jsxs("div",{className:"relative overflow-hidden rounded-3xl p-8 mb-6 cursor-pointer transform transition-all hover:scale-[1.02]",style:{background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",boxShadow:"0 10px 40px rgba(102, 126, 234, 0.3)",animation:"pulse 3s infinite"},onClick:e,children:[n.jsx("div",{className:"absolute top-[-50px] right-[-50px] w-[200px] h-[200px] rounded-full bg-white/10",style:{animation:"float 4s ease-in-out infinite"}}),n.jsx("div",{className:"absolute bottom-[-30px] left-[-30px] w-[150px] h-[150px] rounded-full bg-white/10",style:{animation:"float 4s ease-in-out infinite reverse"}}),n.jsx("h2",{className:"text-3xl font-bold mb-2",children:"🎰 Spin & Win"}),n.jsx("p",{className:"text-base opacity-90 mb-4",children:"Test your luck, win amazing prizes!"}),n.jsx("div",{className:"inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium",style:{background:"linear-gradient(90deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0.3) 100%)",backgroundSize:"200% auto",animation:"shimmer 2s linear infinite"},children:"Play Now →"})]})}function Zx({actions:e}){return n.jsx("div",{className:"grid grid-cols-4 gap-3 mb-8",children:e.map((t,r)=>n.jsxs("button",{onClick:t.action,className:`${t.color} aspect-square rounded-2xl flex flex-col items-center justify-center gap-1 transform transition-all hover:scale-105`,children:[n.jsx("div",{className:"text-2xl",children:t.icon}),n.jsx("div",{className:"text-[10px] font-medium text-white",children:t.label})]},r))})}function eg({categories:e,onCategorySelect:t}){return n.jsxs("div",{className:"mb-6",children:[n.jsx("h3",{className:"text-lg font-bold mb-4",children:"Choose Your Adventure"}),n.jsx("div",{className:"grid grid-cols-3 gap-3",children:e.map(r=>n.jsxs("button",{onClick:()=>t(r),className:`bg-gradient-to-br ${r.gradient} aspect-square rounded-2xl p-4 flex flex-col items-center justify-center gap-2 transform transition-all hover:scale-105 hover:shadow-lg relative`,children:[n.jsx("div",{className:"text-3xl",children:r.icon}),n.jsx("div",{className:"text-xs font-bold text-white text-center",children:r.name}),r.questions>0&&n.jsxs("div",{className:"text-[10px] bg-white/20 px-2 py-0.5 rounded-full",children:[r.questions," Qs"]})]},r.name))})]})}function tg({onClick:e,isPulsing:t}){return n.jsxs("button",{onClick:e,className:`w-full rounded-2xl p-5 flex justify-between items-center transition-all ${t?"bg-green-500/20 border-2 border-green-500 animate-pulse":"bg-white/5 border border-base-border hover:bg-white/10"}`,children:[n.jsxs("div",{className:"flex items-center gap-4",children:[n.jsx("div",{className:"w-12 h-12 bg-gradient-to-br from-green-400 to-teal-500 rounded-xl grid place-items-center text-2xl",children:"📚"}),n.jsxs("div",{className:"text-left",children:[n.jsx("div",{className:"font-medium",children:"Practice Mode"}),n.jsx("div",{className:"text-xs text-base-muted",children:"No timer • No energy cost • Learn at your pace"})]})]}),n.jsx("div",{className:"text-xl",children:"→"})]})}function ng({dailyQ:e,isFlipped:t,picked:r,onAnswer:s,dailyCompleted:a,DAILY_Q_COINS:i,DAILY_Q_XP:o}){return a?n.jsx("div",{className:"rounded-3xl bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/30 p-6 mb-6",children:n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsx("span",{className:"text-3xl",children:"✅"}),n.jsxs("div",{children:[n.jsx("h3",{className:"font-bold",children:"Daily Challenge Complete!"}),n.jsx("p",{className:"text-sm text-base-muted",children:"Come back tomorrow for a new challenge"})]})]})}):e?n.jsx("div",{className:"flip-card mb-6",children:n.jsxs("div",{className:`flip-card-inner ${t?"flipped":""}`,children:[n.jsx("div",{className:"flip-card-front",children:n.jsxs("div",{className:"rounded-3xl bg-white/5 border border-base-border p-6",children:[n.jsxs("div",{className:"flex justify-between items-center mb-4",children:[n.jsx("h3",{className:"text-lg font-bold",children:"🎯 Daily Challenge"}),n.jsxs("span",{className:"px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-xs font-medium",children:["+",i," coins +",o," XP"]})]}),n.jsx("p",{className:"text-sm mb-4 text-base-muted",children:e.prompt}),n.jsx("div",{className:"grid grid-cols-2 gap-3",children:e.options.map((l,c)=>{const u=c===e.answerIndex,f=r===c,p=r!==null;return n.jsx("button",{onClick:h=>s(c,h),disabled:r!==null,className:`p-3 rounded-xl border-2 text-sm font-medium transition-all ${p?u?"border-green-500 bg-green-500/20":f?"border-red-500 bg-red-500/20":"border-base-border bg-white/5":"border-base-border bg-white/5 hover:bg-white/10"} ${r!==null?"cursor-not-allowed":"cursor-pointer"}`,children:l},c)})})]})}),n.jsx("div",{className:"flip-card-back absolute inset-0",children:n.jsxs("div",{className:"rounded-3xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/30 p-6 h-full flex flex-col items-center justify-center",children:[n.jsx("div",{className:"text-6xl mb-4",style:{animation:"float 2s ease-in-out infinite"},children:"🎉"}),n.jsx("h3",{className:"text-2xl font-bold text-green-400 mb-2",children:"Awesome!"}),n.jsxs("p",{className:"text-sm text-base-muted text-center",children:["You've earned ",i," coins & ",o," XP!"]}),n.jsx("p",{className:"text-xs text-base-muted/70 mt-2",children:"Come back tomorrow for more"})]})})]})}):null}function rg({show:e,onClose:t,player:r,changeAvatar:s,GAME_CONSTANTS:a}){return e?n.jsx("div",{className:"fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4",onClick:i=>{i.target===i.currentTarget&&t()},children:n.jsxs("div",{className:"bg-base-card rounded-3xl p-6 w-full max-w-md border border-base-border max-h-[80vh] overflow-y-auto",onClick:i=>i.stopPropagation(),children:[n.jsxs("div",{className:"flex justify-between items-center mb-4",children:[n.jsx("h3",{className:"text-xl font-bold",children:"Choose Your Avatar"}),n.jsx("button",{onClick:t,className:"w-8 h-8 rounded-lg bg-white/5 border border-base-border grid place-items-center hover:bg-white/10 transition",children:"✕"})]}),n.jsx("div",{className:"grid grid-cols-2 gap-4",children:a.AVATARS.map(i=>{const o=!r.unlockedAvatars.includes(i.id),l=r.avatar===i.id;return n.jsxs("button",{onClick:()=>{o||(s(i.id),t())},className:`p-4 rounded-2xl border-2 transition-all ${l?"border-brand-blue bg-brand-blue/20":o?"border-gray-600 bg-gray-800/50 opacity-50":"border-base-border bg-white/5 hover:bg-white/10"}`,disabled:o,children:[n.jsx("div",{className:`text-4xl mb-2 ${o?"grayscale":""}`,children:i.emoji}),n.jsx("div",{className:"text-sm font-medium",children:i.name}),o&&n.jsxs("div",{className:"text-xs text-gray-400 mt-1",children:["Unlock at Level ",i.unlockLevel]}),l&&n.jsx("div",{className:"text-xs text-brand-blue mt-1",children:"Current"})]},i.id)})})]})}):null}function sg({show:e,onClose:t,categories:r,onCategorySelect:s}){return e?n.jsx("div",{className:"fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4",onClick:a=>{a.target===a.currentTarget&&t()},children:n.jsxs("div",{className:"bg-base-card rounded-3xl p-6 w-full max-w-md border border-base-border",onClick:a=>a.stopPropagation(),children:[n.jsxs("div",{className:"flex justify-between items-center mb-4",children:[n.jsx("h3",{className:"text-xl font-bold",children:"More categories"}),n.jsx("button",{onClick:t,className:"w-8 h-8 rounded-lg bg-white/5 border border-base-border grid place-items-center hover:bg-white/10 transition",children:"✕"})]}),n.jsx("div",{className:"grid grid-cols-2 gap-3 mb-4",children:r.map(a=>n.jsxs("button",{onClick:()=>{t(),s(a)},className:`bg-gradient-to-br ${a.gradient} p-4 rounded-2xl flex flex-col items-center gap-2 hover:scale-105 transition-transform relative`,children:[n.jsx("div",{className:"text-3xl",children:a.icon}),n.jsx("div",{className:"text-sm font-bold text-white",children:a.name}),n.jsxs("div",{className:"text-xs text-white/80",children:[a.questions," questions"]})]},a.name))})]})}):null}function ag({show:e,onClose:t,coins:r,onNavigateToPlay:s}){return e?n.jsx("div",{className:"fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4",onClick:a=>{a.target===a.currentTarget&&t()},children:n.jsxs("div",{className:"bg-base-card rounded-3xl p-6 w-full max-w-md border border-base-border relative overflow-hidden",onClick:a=>a.stopPropagation(),children:[n.jsx("div",{className:"absolute inset-0 opacity-10",children:n.jsx("div",{className:"magic-gradient h-full"})}),n.jsxs("div",{className:"relative",children:[n.jsxs("div",{className:"flex items-center justify-between mb-6",children:[n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsx("div",{className:"coin-3d text-5xl",style:{animation:"coinRotate 2s linear infinite, glow 2s ease-in-out infinite"},children:"🪙"}),n.jsxs("div",{children:[n.jsx("h3",{className:"text-2xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent",children:"Your Treasure"}),n.jsxs("p",{className:"text-3xl font-bold text-white mt-1",children:[r," Coins"]})]})]}),n.jsx("button",{onClick:t,className:"w-8 h-8 rounded-lg bg-white/5 border border-base-border grid place-items-center hover:bg-white/10 transition",children:"✕"})]}),n.jsxs("div",{className:"mb-6",children:[n.jsx("h4",{className:"text-sm font-medium text-base-muted mb-3",children:"Ways to Earn"}),n.jsxs("div",{className:"space-y-3",children:[n.jsx("div",{className:"p-4 rounded-xl bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 hover:scale-[1.02] transition-transform",children:n.jsxs("div",{className:"flex items-center justify-between",children:[n.jsxs("div",{children:[n.jsxs("div",{className:"font-medium flex items-center gap-2",children:[n.jsx("span",{className:"text-2xl",children:"✅"}),"Complete Quizzes"]}),n.jsx("div",{className:"text-xs text-base-muted mt-1",children:"+5 coins per correct answer"})]}),n.jsx("div",{className:"text-green-400 font-bold",children:"+5"})]})}),n.jsx("div",{className:"p-4 rounded-xl bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 hover:scale-[1.02] transition-transform",children:n.jsxs("div",{className:"flex items-center justify-between",children:[n.jsxs("div",{children:[n.jsxs("div",{className:"font-medium flex items-center gap-2",children:[n.jsx("span",{className:"text-2xl",children:"🎯"}),"Daily Challenge"]}),n.jsx("div",{className:"text-xs text-base-muted mt-1",children:"Complete daily for bonus"})]}),n.jsx("div",{className:"text-blue-400 font-bold",children:"+5"})]})}),n.jsx("div",{className:"p-4 rounded-xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 hover:scale-[1.02] transition-transform",children:n.jsxs("div",{className:"flex items-center justify-between",children:[n.jsxs("div",{children:[n.jsxs("div",{className:"font-medium flex items-center gap-2",children:[n.jsx("span",{className:"text-2xl",children:"🎰"}),"Spin & Play"]}),n.jsx("div",{className:"text-xs text-base-muted mt-1",children:"Test your luck!"})]}),n.jsx("div",{className:"text-purple-400 font-bold",children:"+50"})]})}),n.jsx("div",{className:"p-4 rounded-xl bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/20 hover:scale-[1.02] transition-transform",children:n.jsxs("div",{className:"flex items-center justify-between",children:[n.jsxs("div",{children:[n.jsxs("div",{className:"font-medium flex items-center gap-2",children:[n.jsx("span",{className:"text-2xl",children:"🏆"}),"Achievements"]}),n.jsx("div",{className:"text-xs text-base-muted mt-1",children:"Unlock special rewards"})]}),n.jsx("div",{className:"text-orange-400 font-bold",children:"+???"})]})})]})]}),n.jsxs("div",{className:"mb-6",children:[n.jsxs("div",{className:"flex justify-between text-xs text-base-muted mb-2",children:[n.jsx("span",{children:"Next reward"}),n.jsxs("span",{children:[100-r%100," coins to go"]})]}),n.jsx("div",{className:"h-2 bg-white/10 rounded-full overflow-hidden",children:n.jsx("div",{className:"h-full bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full transition-all",style:{width:`${r%100}%`}})})]}),n.jsx("button",{onClick:s,className:"w-full py-3 rounded-xl bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-bold hover:scale-[1.02] transition-transform shadow-lg",style:{boxShadow:"0 10px 30px rgba(251, 191, 36, 0.3)"},children:"Start Earning Now! 🚀"})]})]})}):null}function ig({show:e,onClose:t,selectedCategory:r,difficulty:s,setDifficulty:a,count:i,setCount:o,timer:l,setTimer:c,onStart:u}){return!e||!r?null:n.jsx("div",{className:"fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4",onClick:f=>{f.target===f.currentTarget&&t()},children:n.jsxs("div",{className:"bg-base-card rounded-3xl p-6 w-full max-w-md border border-base-border",onClick:f=>f.stopPropagation(),children:[n.jsxs("div",{className:"flex justify-between items-center mb-4",children:[n.jsx("h3",{className:"text-xl font-bold",children:"Quiz Mode"}),n.jsx("button",{onClick:t,className:"w-8 h-8 rounded-lg bg-white/5 border border-base-border grid place-items-center hover:bg-white/10 transition",children:"✕"})]}),n.jsx("div",{className:"mb-4 p-3 rounded-xl bg-blue-500/10 border border-blue-500/30",children:n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsx("div",{className:"text-2xl",children:r.icon}),n.jsxs("div",{children:[n.jsxs("div",{className:"font-medium",children:["Category: ",r.name]}),n.jsxs("div",{className:"text-xs text-base-muted",children:[r.questions," questions available"]})]})]})}),n.jsxs("div",{className:"mb-4",children:[n.jsx("label",{className:"text-sm text-base-muted mb-2 block",children:"Difficulty"}),n.jsx("div",{className:"grid grid-cols-3 gap-2",children:["easy","medium","hard"].map(f=>n.jsx("button",{onClick:()=>a(f),className:`py-2 rounded-xl border ${s===f?"bg-brand-blue/30 border-brand-blue":"bg-white/5 border-base-border"}`,children:f.charAt(0).toUpperCase()+f.slice(1)},f))})]}),n.jsxs("div",{className:"mb-4",children:[n.jsx("label",{className:"text-sm text-base-muted mb-2 block",children:"Questions"}),n.jsx("div",{className:"grid grid-cols-4 gap-2",children:[5,10,20,30].map(f=>n.jsx("button",{onClick:()=>o(f),className:`py-2 rounded-xl border ${i===f?"bg-brand-blue/30 border-brand-blue":"bg-white/5 border-base-border"}`,children:f},f))})]}),n.jsxs("div",{className:"mb-6",children:[n.jsx("label",{className:"text-sm text-base-muted mb-2 block",children:"Timer (seconds per question)"}),n.jsx("input",{type:"number",value:l,onChange:f=>c(Number(f.target.value)||45),min:10,max:120,className:"w-full px-4 py-2 rounded-xl bg-white/5 border border-base-border"})]}),n.jsxs("div",{className:"flex gap-3",children:[n.jsx("button",{onClick:t,className:"flex-1 py-3 rounded-xl border border-base-border bg-white/5",children:"Cancel"}),n.jsx("button",{onClick:u,className:"flex-1 py-3 rounded-xl bg-gradient-to-r from-brand-blue to-brand-purple text-white font-medium",children:"Start Quiz"})]})]})})}function og({show:e,onClose:t,allCategories:r,category:s,setCategory:a,difficulty:i,setDifficulty:o,count:l,setCount:c,onStart:u}){return e?n.jsx("div",{className:"fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4",onClick:f=>{f.target===f.currentTarget&&t()},children:n.jsxs("div",{className:"bg-base-card rounded-3xl p-6 w-full max-w-md border border-base-border max-h-[90vh] overflow-y-auto",onClick:f=>f.stopPropagation(),children:[n.jsxs("div",{className:"flex justify-between items-center mb-4",children:[n.jsx("h3",{className:"text-xl font-bold",children:"Practice Mode"}),n.jsx("button",{onClick:t,className:"w-8 h-8 rounded-lg bg-white/5 border border-base-border grid place-items-center hover:bg-white/10 transition",children:"✕"})]}),n.jsxs("div",{className:"mb-4",children:[n.jsx("label",{className:"text-sm text-base-muted mb-2 block",children:"Category"}),n.jsx("div",{className:"grid grid-cols-3 gap-2 max-h-[200px] overflow-y-auto",children:r.map(f=>n.jsxs("button",{onClick:()=>a(f.slug),className:`p-3 rounded-xl border flex flex-col items-center gap-1 ${s===f.slug?"bg-brand-blue/30 border-brand-blue":"bg-white/5 border-base-border"}`,children:[n.jsx("div",{className:"text-xl",children:f.icon}),n.jsx("div",{className:"text-[10px] text-center",children:f.name})]},f.slug))})]}),n.jsxs("div",{className:"mb-4",children:[n.jsx("label",{className:"text-sm text-base-muted mb-2 block",children:"Difficulty"}),n.jsx("div",{className:"grid grid-cols-3 gap-2",children:["easy","medium","hard"].map(f=>n.jsx("button",{onClick:()=>o(f),className:`py-2 rounded-xl border ${i===f?"bg-brand-blue/30 border-brand-blue":"bg-white/5 border-base-border"}`,children:f.charAt(0).toUpperCase()+f.slice(1)},f))})]}),n.jsxs("div",{className:"mb-6",children:[n.jsx("label",{className:"text-sm text-base-muted mb-2 block",children:"Questions"}),n.jsx("div",{className:"grid grid-cols-4 gap-2",children:[5,10,20,30].map(f=>n.jsx("button",{onClick:()=>c(f),className:`py-2 rounded-xl border ${l===f?"bg-brand-blue/30 border-brand-blue":"bg-white/5 border-base-border"}`,children:f},f))})]}),n.jsxs("div",{className:"flex gap-3",children:[n.jsx("button",{onClick:t,className:"flex-1 py-3 rounded-xl border border-base-border bg-white/5",children:"Cancel"}),n.jsx("button",{onClick:u,className:"flex-1 py-3 rounded-xl bg-gradient-to-r from-brand-blue to-brand-purple text-white font-medium",children:"Start Practice"})]})]})}):null}function lg({player:e,onContinue:t}){const[r,s]=d.useState(!0),[a,i]=d.useState(!1),[o,l]=d.useState(!1),[c,u]=d.useState(""),[f,p]=d.useState(""),h=()=>{try{const m=new Audio("/sounds/welcome.mp3");m.volume=.6,m.play()}catch{console.log("Welcome sound not available")}},b=()=>{navigator.vibrate&&navigator.vibrate([100,50,100])},N=(()=>{if(e!=null&&e.name)return e.name;let m=localStorage.getItem("userName");return m||(m="Champion",localStorage.setItem("userName",m)),m})();d.useEffect(()=>{document.body.classList.add("hide-bottom-nav"),h(),b();const m=["🦉","🐧","🦝","🦜","🦕","🐙","🦊","🐸","🦁","🐨"];p(m[Math.floor(Math.random()*m.length)]);const y=setInterval(()=>{l(P=>!P)},2e3),E=["🎯 New challenges await!","🏆 Ready to be a champion?","🌟 Your brain adventure starts now!","🎨 Time for fun learning!","🎪 The quiz circus is open!","🚀 Blast off to knowledge!","🎭 Let's play and learn!","🌈 Rainbow of questions ahead!"];u(E[Math.floor(Math.random()*E.length)]);const j=setInterval(()=>{u(E[Math.floor(Math.random()*E.length)])},3e3);return()=>{document.body.classList.remove("hide-bottom-nav"),clearInterval(y),clearInterval(j)}},[t]);const C=()=>{try{const m=new Audio("/sounds/tap.mp3");m.volume=.5,m.play()}catch{console.log("Click sound not available")}navigator.vibrate&&navigator.vibrate(20),i(!0),setTimeout(()=>{document.body.classList.remove("hide-bottom-nav"),s(!1),t()},400)};if(!r)return null;const v=()=>{const m=new Date().getHours();return m<12?"Good morning":m<17?"Good afternoon":"Good evening"};return n.jsxs("div",{className:`fixed inset-0 z-50 flex items-center justify-center transition-all duration-500
      ${a?"opacity-0 scale-95":"opacity-100 scale-100"}`,children:[n.jsx("div",{className:"absolute inset-0",style:{background:"linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #fda085 75%, #f5a375 90%, #e08060 100%)"}}),n.jsxs("div",{className:"absolute inset-0 overflow-hidden",children:[[{top:"10%",left:"15%",size:"24px",delay:"0s"},{top:"20%",left:"75%",size:"20px",delay:"0.5s"},{top:"15%",left:"45%",size:"28px",delay:"1s"},{top:"30%",left:"85%",size:"22px",delay:"1.5s"},{top:"8%",left:"60%",size:"26px",delay:"2s"}].map((m,y)=>n.jsx("div",{className:"absolute animate-twinkle",style:{top:m.top,left:m.left,fontSize:m.size,animationDelay:m.delay},children:"⭐"},`star-${y}`)),n.jsxs("div",{className:"absolute top-10 left-0 w-full",children:[n.jsx("div",{className:"cloud cloud1",children:"☁️"}),n.jsx("div",{className:"cloud cloud2",children:"☁️"})]})]}),n.jsxs("div",{className:"relative z-10 text-center px-6 w-full max-w-sm mx-auto",children:[n.jsx("div",{className:`text-8xl mb-4 transition-transform duration-500 ${o?"scale-110 rotate-6":"scale-100 rotate-0"}`,children:f}),n.jsxs("div",{className:"relative rounded-3xl px-6 py-4 mb-6 shadow-xl overflow-hidden",children:[n.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100"}),n.jsx("div",{className:"absolute -top-3 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-br from-purple-100 to-pink-100 rotate-45"}),n.jsxs("div",{className:"relative",children:[n.jsxs("h1",{className:"text-3xl font-bold text-purple-800",children:["Hello, ",N,"! 👋"]}),n.jsx("p",{className:"text-sm text-purple-600 mt-1",children:v()})]})]}),n.jsxs("div",{className:"grid grid-cols-2 gap-3 mb-6",children:[n.jsxs("div",{className:"relative rounded-2xl p-3 transform hover:scale-105 transition-transform overflow-hidden",children:[n.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-yellow-200 via-yellow-100 to-orange-100"}),n.jsxs("div",{className:"relative",children:[n.jsx("div",{className:"text-3xl mb-1",children:"⭐"}),n.jsx("div",{className:"text-2xl font-bold text-orange-800",children:(e==null?void 0:e.level)||1}),n.jsx("div",{className:"text-xs text-orange-600",children:"Level"})]})]}),n.jsxs("div",{className:"relative rounded-2xl p-3 transform hover:scale-105 transition-transform overflow-hidden",children:[n.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-blue-200 via-cyan-100 to-teal-100"}),n.jsxs("div",{className:"relative",children:[n.jsx("div",{className:"text-3xl mb-1",children:"🪙"}),n.jsx("div",{className:"text-2xl font-bold text-teal-800",children:(e==null?void 0:e.coins)||0}),n.jsx("div",{className:"text-xs text-teal-600",children:"Coins"})]})]})]}),n.jsx("div",{className:"h-4"}),n.jsx("div",{className:"text-white/90 font-medium animate-fade-slide mb-6",children:c}),n.jsxs("button",{onClick:C,className:"group relative w-full",children:[n.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 rounded-full blur-lg opacity-75 group-hover:opacity-100 transition-opacity"}),n.jsxs("div",{className:`relative bg-gradient-to-r from-green-400 to-blue-500 text-white py-5 px-8 rounded-full font-bold text-xl shadow-2xl 
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
      `})]})}function cg(){const e=He(),t=bt(),[r,s]=d.useState(!1),[a,i]=d.useState(0);d.useEffect(()=>{t.pathname==="/"&&(window.history.replaceState({path:"/",preventBack:!0},"","/"),window.history.pushState({path:"/",preventBack:!0},"","/"));const u=h=>{var b;if(t.pathname==="/"||(b=h.state)!=null&&b.preventBack){const g=new Date().getTime();g-a<2e3&&a>0?(h.preventDefault(),s(!0),window.history.pushState({path:"/",preventBack:!0},"","/")):(h.preventDefault(),o(),i(g),window.history.pushState({path:"/",preventBack:!0},"","/"))}};window.addEventListener("popstate",u);const f=()=>{document.hidden&&t.pathname==="/"&&window.history.pushState({path:"/",preventBack:!0},"","/")};document.addEventListener("visibilitychange",f);const p=h=>{if(t.pathname==="/"){h.preventDefault(),h.stopPropagation();const b=new Date().getTime();return b-a<2e3&&a>0?s(!0):(o(),i(b)),!1}};return document.addEventListener("backbutton",p,!1),()=>{window.removeEventListener("popstate",u),document.removeEventListener("visibilitychange",f),document.removeEventListener("backbutton",p)}},[t.pathname,a]),d.useEffect(()=>{const f=setInterval(()=>{var p;t.pathname==="/"&&!((p=window.history.state)!=null&&p.preventBack)&&window.history.pushState({path:"/",preventBack:!0},"","/")},1e3);return()=>clearInterval(f)},[t.pathname]);const o=()=>{const u=document.getElementById("exit-toast");u&&u.remove();const f=document.createElement("div");f.id="exit-toast",f.className="exit-toast",f.textContent="Press back again to exit",f.style.cssText=`
      position: fixed;
      bottom: 80px;
      left: 50%;
      transform: translateX(-50%);
      background: rgba(0, 0, 0, 0.8);
      color: white;
      padding: 12px 24px;
      border-radius: 24px;
      font-size: 14px;
      z-index: 10000;
      animation: slideUp 0.3s ease-out;
      pointer-events: none;
    `;const p=document.createElement("style");p.textContent=`
      @keyframes slideUp {
        from {
          transform: translateX(-50%) translateY(100%);
          opacity: 0;
        }
        to {
          transform: translateX(-50%) translateY(0);
          opacity: 1;
        }
      }
      @keyframes slideDown {
        from {
          transform: translateX(-50%) translateY(0);
          opacity: 1;
        }
        to {
          transform: translateX(-50%) translateY(100%);
          opacity: 0;
        }
      }
    `,document.getElementById("exit-toast-styles")||(p.id="exit-toast-styles",document.head.appendChild(p)),document.body.appendChild(f),setTimeout(()=>{const h=document.getElementById("exit-toast");h&&(h.style.animation="slideDown 0.3s ease-out",h.style.animationFillMode="forwards",setTimeout(()=>h.remove(),300))},2e3)},l=()=>{if(!r)return null;const u=()=>{var p,h,b,g;try{if((h=(p=window.navigator)==null?void 0:p.app)!=null&&h.exitApp){window.navigator.app.exitApp();return}if((g=(b=window.navigator)==null?void 0:b.app)!=null&&g.backHistory){window.navigator.app.backHistory();return}const N=window.history.length;window.history.go(-N),window.close(),setTimeout(()=>{window.location.href="about:blank"},100)}catch(N){console.log("Exit failed:",N),window.location.href="about:blank"}},f=()=>{s(!1),window.history.pushState({path:"/",preventBack:!0},"","/")};return n.jsxs("div",{style:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(0, 0, 0, 0.5)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:9999,animation:"fadeIn 0.2s ease-out"},onClick:f,children:[n.jsxs("div",{style:{background:"linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)",borderRadius:"16px",padding:"24px",maxWidth:"320px",width:"90%",boxShadow:"0 10px 40px rgba(0, 0, 0, 0.3)",animation:"slideIn 0.3s ease-out"},onClick:p=>p.stopPropagation(),children:[n.jsx("h3",{style:{color:"white",fontSize:"20px",fontWeight:"bold",marginBottom:"12px",textAlign:"center"},children:"Exit App?"}),n.jsx("p",{style:{color:"rgba(255, 255, 255, 0.9)",fontSize:"14px",marginBottom:"24px",textAlign:"center",lineHeight:"1.5"},children:"Are you sure you want to exit the Quiz Game?"}),n.jsxs("div",{style:{display:"flex",gap:"12px"},children:[n.jsx("button",{onClick:f,style:{flex:1,padding:"12px",border:"2px solid rgba(255, 255, 255, 0.3)",borderRadius:"8px",background:"transparent",color:"white",fontSize:"16px",fontWeight:"600",cursor:"pointer",transition:"all 0.2s"},onMouseOver:p=>p.target.style.backgroundColor="rgba(255, 255, 255, 0.1)",onMouseOut:p=>p.target.style.backgroundColor="transparent",children:"Stay"}),n.jsx("button",{onClick:u,style:{flex:1,padding:"12px",border:"none",borderRadius:"8px",background:"linear-gradient(135deg, #ff6b6b 0%, #ff4444 100%)",color:"white",fontSize:"16px",fontWeight:"600",cursor:"pointer",transition:"transform 0.2s",boxShadow:"0 4px 15px rgba(255, 68, 68, 0.3)"},onMouseOver:p=>p.target.style.transform="scale(1.05)",onMouseOut:p=>p.target.style.transform="scale(1)",children:"Exit"})]})]}),n.jsx("style",{children:`
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          
          @keyframes slideIn {
            from {
              transform: scale(0.9);
              opacity: 0;
            }
            to {
              transform: scale(1);
              opacity: 1;
            }
          }
        `})]})};return{goBack:d.useCallback(()=>{if(t.pathname==="/"){s(!0);return}e(-1)},[t.pathname,e]),ExitDialog:l}}const Td=(e=new Date)=>e.toLocaleDateString("en-CA"),_d=(e,t=null)=>{try{const r=localStorage.getItem(e);return r?JSON.parse(r):t}catch{return t}},dg=(e,t)=>localStorage.setItem(e,JSON.stringify(t));function Ld(){const{ExitDialog:e}=cg(),[t,r]=d.useState(!0),s=He(),{player:a,addXP:i,addCoins:o,levelProgress:l,useEnergy:c,changeAvatar:u}=jn(),[f]=zt("/sounds/correct.mp3",{volume:.6}),[p]=zt("/sounds/wrong.mp3",{volume:.6}),[h]=zt("/sounds/coin.mp3",{volume:.75}),[b]=zt("/sounds/levelup.mp3",{volume:.8}),g=d.useRef(a.level),N=d.useRef(null);d.useEffect(()=>{const be=()=>{};return window.addEventListener("focus",be),()=>window.removeEventListener("focus",be)},[]),d.useEffect(()=>{a.level>g.current&&(b==null||b(),g.current=a.level)},[a.level,b]);const[C,v]=d.useState(!1),[m,y]=d.useState(null),[E,j]=d.useState(!1),[P,S]=d.useState("medium"),[x,w]=d.useState(10),[k,R]=d.useState(45),[M,q]=d.useState(!1),[ee,Q]=d.useState(!1),[Y,U]=d.useState(null),[_,I]=d.useState(null),[B,T]=d.useState(!1),[z,D]=d.useState(!1),[te,X]=d.useState(null),J=10,$=5,[A,H]=d.useState(!1),[F,O]=d.useState(!1),[Z,ae]=d.useState("general-knowledge"),[ce,ne]=d.useState("medium"),[re,K]=d.useState(10),[L,G]=d.useState(()=>_d("dq_daily_log",{})[Td()]===!0);d.useEffect(()=>{const be=sessionStorage.getItem("homeScrollPosition");be&&window.scrollTo(0,parseInt(be));const ue=()=>{sessionStorage.setItem("homeScrollPosition",window.scrollY.toString())};return window.addEventListener("scroll",ue),()=>window.removeEventListener("scroll",ue)},[]),d.useEffect(()=>{if(L)return;(async()=>{var ue;try{const ge=await fetch("/data/quiz_questions_bank.csv").then(et=>et.text()),{data:Ne}=hr.parse(ge,{header:!0,skipEmptyLines:!0});if(!Ne.length)throw new Error("empty");const Ue=Ne[Math.floor(Math.random()*Ne.length)],qt=[Ue.option1,Ue.option2,Ue.option3,Ue.option4].filter(Boolean);U({category:Ue.category||"General",prompt:Ue.question,options:qt,answerIndex:["A","B","C","D"].indexOf((ue=Ue.answer)==null?void 0:ue.toUpperCase())||0})}catch{U({category:"Science",prompt:"Which planet is known as the Red Planet?",options:["Earth","Mars","Jupiter","Venus"],answerIndex:1})}})()},[L]);const de=(be,ue)=>{if(_!==null)return;I(be);const ge=be===Y.answerIndex;if(ge){if(f(),ue!=null&&ue.currentTarget&&N.current){const Ne=ue.currentTarget.getBoundingClientRect();h(),X({startRect:Ne,count:10,amount:$})}}else p();setTimeout(()=>{if(D(!0),T(!0),ge){const Ne=Td();dg("dq_daily_log",{..._d("dq_daily_log",{}),[Ne]:!0}),G(!0);const Ue=Number(localStorage.getItem("dq_streak")||0);localStorage.setItem("dq_streak",String(Ue+1))}},600)},he=be=>{if(be.slug==="more"){v(!0);return}y(be),j(!0)},pe=()=>{console.log("Starting quiz with energy:",a.energy),console.log("Category:",m.slug),s(`/quiz/${m.slug}`,{state:{mode:"quiz",difficulty:P,count:x,timer:{type:"per_q",seconds:k},source:"adventure"}}),j(!1)},Oe=()=>{console.log("Starting practice, category:",Z),s(`/quiz/${Z}`,{state:{mode:"practice",difficulty:ce,count:re,timer:{type:"off",seconds:0}}}),O(!1)},Ce=[{icon:"🎯",label:"Quests",color:"bg-gradient-to-br from-orange-500 to-pink-500",action:()=>{sessionStorage.setItem("questsFromHome","true"),s("/profile/quests")}},{icon:"🔥",label:"Streak",color:"bg-gradient-to-br from-red-500 to-orange-500",action:()=>s("/profile/streaks")},{icon:"🏆",label:"Achieve",color:"bg-gradient-to-br from-blue-500 to-purple-500",action:()=>s("/profile/achievements")},{icon:"🎁",label:"Rewards",color:"bg-gradient-to-br from-green-500 to-teal-500",action:()=>s("/profile/rewards")}];return n.jsxs(n.Fragment,{children:[n.jsx(e,{}),t&&n.jsx(lg,{player:a,onContinue:()=>r(!1)}),n.jsxs("div",{className:"min-h-screen bg-base-bg text-base-text",children:[n.jsx("div",{className:"fixed inset-0 -z-10 pointer-events-none",style:{background:"linear-gradient(to bottom, #0B0F1A, #111827)"}}),n.jsxs("div",{className:"relative z-10 px-4 pt-10 pb-24",children:[n.jsx("style",{jsx:!0,children:`
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
        `}),te&&n.jsx(Ci,{startRect:te.startRect,targetRef:N,count:te.count,onDone:()=>{A||(i(J),o(te.amount),H(!0)),X(null)}}),n.jsxs("div",{className:"mb-8",children:[n.jsxs("div",{className:"flex justify-between items-start mb-4",children:[n.jsx("div",{className:"cursor-pointer hover:scale-105 transition-transform",onClick:()=>Q(!0),children:n.jsx(Xx,{player:a,size:"small",showLevel:!0,showName:!0})}),n.jsx("div",{className:"flex gap-2",children:n.jsxs("button",{ref:N,onClick:()=>q(!0),className:"px-3 py-1.5 rounded-xl bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/30 flex items-center gap-2 hover:from-yellow-500/20 hover:to-orange-500/20 transition",children:[n.jsx("span",{className:"text-lg",children:"🪙"}),n.jsx("span",{className:"font-bold",children:a.coins})]})})]}),n.jsx(Kx,{current:l.current,required:l.required,level:a.level,animate:!0})]}),n.jsx(Jx,{onClick:()=>s("/play")}),n.jsx(Zx,{actions:Ce}),n.jsx(ng,{dailyQ:Y,isFlipped:z,picked:_,onAnswer:de,dailyCompleted:L,DAILY_Q_COINS:$,DAILY_Q_XP:J}),n.jsx(eg,{categories:Em,onCategorySelect:he}),n.jsx(tg,{onClick:()=>O(!0),isPulsing:a.energy<10}),n.jsx(rg,{show:ee,onClose:()=>Q(!1),player:a,changeAvatar:u,GAME_CONSTANTS:ft}),n.jsx(ig,{show:E,onClose:()=>j(!1),selectedCategory:m,difficulty:P,setDifficulty:S,count:x,setCount:w,timer:k,setTimer:R,onStart:pe}),n.jsx(og,{show:F,onClose:()=>O(!1),allCategories:Rm,category:Z,setCategory:ae,difficulty:ce,setDifficulty:ne,count:re,setCount:K,onStart:Oe}),n.jsx(sg,{show:C,onClose:()=>v(!1),categories:Pm,onCategorySelect:he}),n.jsx(ag,{show:M,onClose:()=>q(!1),coins:a.coins,onNavigateToPlay:()=>{q(!1),s("/play")}})]})]})]})}const en={COINS:"qp_coins",XP:"qp_xp",LEVEL:"qp_level",OWNED_CHARACTERS:"owned_characters",SOUND:"play_sound_on"},tn={get:(e,t=null)=>{try{const r=localStorage.getItem(e);return r?JSON.parse(r):t}catch{return t}},set:(e,t)=>{try{localStorage.setItem(e,JSON.stringify(t))}catch{}}};function lc(){const[e,t]=d.useState(()=>tn.get(en.COINS,0)),[r,s]=d.useState(()=>tn.get(en.XP,0)),[a,i]=d.useState(()=>tn.get(en.LEVEL,1)),[o,l]=d.useState(()=>tn.get(en.OWNED_CHARACTERS,[])),[c,u]=d.useState(()=>tn.get(en.SOUND,!0));return d.useEffect(()=>tn.set(en.COINS,e),[e]),d.useEffect(()=>tn.set(en.XP,r),[r]),d.useEffect(()=>tn.set(en.LEVEL,a),[a]),d.useEffect(()=>tn.set(en.OWNED_CHARACTERS,o),[o]),d.useEffect(()=>tn.set(en.SOUND,c),[c]),{coins:e,xp:r,level:a,ownedCharacters:o,soundOn:c,addCoins:g=>t(N=>N+g),addXp:g=>s(N=>N+g),unlockCharacter:g=>{l(N=>[...new Set([...N,g])])},setSoundOn:u,checkLevelUp:()=>{const g=100*a*(a-1);return r>=g?(i(N=>N+1),!0):!1},nextLevelThreshold:100*a*(a-1),xpProgress:r/(100*a*(a-1))}}const ug=[{name:"General Knowledge",questions:50,icon:"🧠",color:"#7C3AED"},{name:"Artificial Intelligence",questions:28,icon:"🤖",color:"#10B981"},{name:"Fun facts",questions:30,icon:"🎉",color:"#EF4444"},{name:"Science",questions:45,icon:"🧪",color:"#F59E0B"},{name:"History",questions:42,icon:"🏺",color:"#2563EB"},{name:"Geography",questions:38,icon:"🗺️",color:"#FACC15"}],rn=ug.slice(0,6),nr=360/rn.length,Tm={"general-knowledge":"TINA","artificial-intelligence":"ALBERT","fun-facts":"BONZO",science:"POP",history:"TITO",geography:"HECTOR"},Sn={FULL_TURNS:6,DURATION:2800,OVERSHOOT:12,SETTLE_DURATION:350},ir=e=>e.toLowerCase().replace(/[^\w\s-]/g,"").replace(/\s+/g,"-"),Ad=e=>(e%360+360)%360,cc=e=>{try{navigator.vibrate&&navigator.vibrate(e)}catch{}},Dr=(e,t=.7)=>{try{const r=new Audio(e);r.volume=t,r.play()}catch{}};function fg({run:e,coins:t,xp:r,level:s,ownedCharacters:a,onSpin:i,onBack:o,spinning:l,angle:c,transition:u,result:f,showCallout:p,glowColor:h,soundOn:b,setSoundOn:g,showSparkle:N,pulseIdx:C,nextProgressIdx:v,pendingProgressIdx:m,coinBurstTick:y,lastAnswerWasCorrect:E}){const j=100*s*(s-1),[P,S]=d.useState(!1),x=d.useRef(0),w=d.useRef(null),k=d.useRef(null),[R,M]=d.useState({dx:110,dy:-260}),[q,ee]=d.useState(!1);return d.useEffect(()=>(document.body.classList.add("hide-bottom-nav"),()=>{document.body.classList.remove("hide-bottom-nav")}),[]),d.useEffect(()=>{if(m==null)return;S(!1);const Q=setTimeout(()=>S(!0),30);return()=>clearTimeout(Q)},[m]),d.useEffect(()=>{var Y,U,_,I;if(!y||!E||y===x.current)return;x.current=y;try{const B=(U=(Y=k==null?void 0:k.current)==null?void 0:Y.getBoundingClientRect)==null?void 0:U.call(Y),T=(I=(_=w==null?void 0:w.current)==null?void 0:_.getBoundingClientRect)==null?void 0:I.call(_);if(B&&T){const z=B.left+B.width/2,D=B.top+B.height/2,te=T.left+T.width/2,X=T.top+T.height/2;M({dx:te-z,dy:X-D})}}catch{}b&&Dr("/sounds/coin.mp3",.7),ee(!0);const Q=setTimeout(()=>ee(!1),700);return()=>clearTimeout(Q)},[y,b,E]),n.jsx("div",{className:"fixed inset-0 bg-base-bg text-base-text overflow-hidden",children:n.jsxs("div",{className:"h-full overflow-y-auto mx-auto max-w-md px-5 pt-[calc(env(safe-area-inset-top)+3rem)] pb-[calc(env(safe-area-inset-bottom)+5.25rem)]",children:[n.jsxs("header",{className:"flex items-center justify-between mb-8",children:[n.jsx("button",{onClick:o,className:"h-10 w-10 rounded-full border border-base-border grid place-items-center bg-white/5 hover:bg-white/10 transition translate-y-[4px]",children:"←"}),n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsxs("button",{className:"px-3 py-1 rounded-2xl bg-white/5 border border-base-border text-left translate-y-[4px]",children:[n.jsxs("div",{className:"text-[11px]",children:["Lvl ",s," • ",r,"/",j]}),n.jsx("div",{className:"mt-1 h-1 w-full bg-white/10 rounded",children:n.jsx("div",{className:"h-1 bg-brand-blue rounded",style:{width:`${Math.min(r/j,1)*100}%`}})})]}),n.jsxs("button",{ref:w,className:"px-3 py-1 rounded-2xl bg-white/5 border border-base-border translate-y-[4px]",children:["🪙 ",t]})]}),n.jsx("button",{onClick:()=>g(!b),className:"h-10 w-10 rounded-full border border-base-border grid place-items-center bg-white/5 hover:bg-white/10 transition translate-y-[4px]",children:n.jsx("span",{className:"text-lg",children:b?"🔊":"🔇"})})]}),a.length>0&&n.jsx("div",{className:"flex justify-center mb-6",children:n.jsx("div",{className:"flex gap-2 px-4 py-2 bg-white/10 rounded-2xl backdrop-blur border border-base-border",children:a.map(Q=>{const Y=rn.find(_=>ir(_.name)===Q),U=Tm[Q];return n.jsxs("div",{className:"flex flex-col items-center",children:[n.jsx("div",{className:"w-8 h-8 rounded-full bg-white/20 flex items-center justify-center border border-white/30",children:n.jsx("span",{className:"text-sm",children:Y==null?void 0:Y.icon})}),n.jsx("span",{className:"text-[10px] text-base-muted mt-1",children:U})]},Q)})})}),n.jsx("div",{className:"flex justify-center mt-12 sm:mt-16 mb-6",children:n.jsxs("div",{className:"w-80 max-w-full",children:[n.jsx("style",{children:`
              @keyframes qp_sweep { from { transform: translateX(0); } to { transform: translateX(100%); } }
            `}),n.jsx("div",{className:"relative grid grid-cols-3 gap-1 h-3 rounded-full overflow-hidden bg-white/10 border border-white/15",children:[0,1,2].map(Q=>{const Y=["#FF9800","#FFC107","#cadd75ff"],U=!!e.progress[Q];return n.jsxs("div",{className:"relative h-full bg-white/10",children:[n.jsx("div",{className:"absolute inset-y-0 left-0 rounded-[6px]",style:{width:U?Q===m?P?"100%":"0%":v===Q&&m==null?"0%":"100%":"0%",backgroundColor:Y[Q],transition:Q===m?"width 1200ms ease-out":"none"}}),C===Q&&n.jsx("span",{className:"absolute inset-y-0 left-0 w-full overflow-hidden pointer-events-none",children:n.jsx("span",{className:"absolute inset-y-0 left-0 w-1 rounded bg-white/80",style:{animation:"qp_sweep 1200ms ease-out forwards"}})}),N===Q&&n.jsx("span",{className:"absolute right-[-2px] top-1/2 -translate-y-1/2 text-xs select-none",children:"✨"})]},Q)})},e.qIndex)]})}),n.jsx("section",{className:"flex flex-col items-center mt-28 sm:mt-32 mb-10",children:n.jsxs("div",{ref:k,className:"relative w-96 h-96 rounded-full select-none",children:[h&&n.jsx("div",{className:"pointer-events-none absolute -inset-4 rounded-full",style:{boxShadow:`0 0 0 8px ${h}40, 0 0 40px 12px ${h}60`}}),n.jsx("div",{className:"absolute inset-0 rounded-full border-4 border-white/20 shadow-2xl overflow-hidden will-change-transform bg-base-card",style:{transform:`rotate(${c}deg)`,transition:u},children:n.jsxs("svg",{width:"100%",height:"100%",viewBox:"0 0 100 100",className:"block",children:[rn.map((Q,Y)=>{const U=Y*nr,_=U+nr,I=nr>180?1:0,B=Math.PI*U/180,T=Math.PI*_/180,z=50+45*Math.cos(B),D=50-45*Math.sin(B),te=50+45*Math.cos(T),X=50-45*Math.sin(T),J=U+nr/2,$=28,A=50+$*Math.cos(J*Math.PI/180),H=50-$*Math.sin(J*Math.PI/180);return n.jsxs("g",{children:[n.jsx("path",{d:`M50,50 L${z},${D} A45,45 0 ${I} 0 ${te},${X} Z`,fill:Q.color,stroke:"rgba(255,255,255,0.3)",strokeWidth:"0.5"}),n.jsx("text",{x:A,y:H,fill:"white",fontSize:"8",dominantBaseline:"middle",textAnchor:"middle",className:"font-bold",children:Q.icon})]},Y)}),n.jsx("circle",{cx:"50",cy:"50",r:"12",fill:"white",stroke:"#ddd",strokeWidth:"1"})]})}),n.jsx("button",{onClick:i,disabled:l,className:`absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                      w-24 h-24 rounded-full bg-white text-black font-black text-lg shadow-lg transition-all ${l?"opacity-60 cursor-not-allowed scale-95":"hover:scale-105 active:scale-95"}`,children:"SPIN"}),n.jsx("div",{className:"absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-2 z-20",children:n.jsx("div",{className:"w-6 h-8 bg-white rounded-lg shadow-md flex items-start justify-center pt-1",children:n.jsx("div",{className:"w-0 h-0 border-l-[6px] border-r-[6px] border-b-[8px] border-l-transparent border-r-transparent border-b-gray-600"})})}),p&&f&&n.jsx("div",{className:"absolute left-1/2 -translate-x-1/2 -top-16 z-30",children:n.jsxs("div",{className:"px-4 py-2 rounded-2xl bg-base-card border border-base-border shadow-lg font-semibold",children:[n.jsx("span",{className:"mr-2",children:f.cat.icon}),f.cat.name]})}),q&&n.jsxs(n.Fragment,{children:[n.jsx("style",{children:`
                    @keyframes coinFly {
                      0%   { transform: translate(-50%, -50%) scale(0.9); opacity: 1; }
                      100% { transform: translate(var(--coin-dx), var(--coin-dy)) scale(0.4); opacity: 0; }
                    }
                `}),[0,1,2].map(Q=>n.jsx("div",{className:"pointer-events-none absolute z-30 top-1/2 left-1/2",style:{animation:`coinFly 600ms ease-out ${Q*80}ms forwards`,"--coin-dx":`${R.dx}px`,"--coin-dy":`${R.dy}px`},children:n.jsx("div",{className:"w-6 h-6 rounded-full grid place-items-center bg-yellow-400 text-black font-bold",children:"🪙"})},Q))]})]})}),n.jsx("div",{className:"text-center",children:n.jsx("button",{disabled:!0,className:"text-base-muted underline opacity-60 cursor-not-allowed text-sm",children:"Party Spin (pass & play)"})})]})})}var Ia={linear:function(e,t,r,s){var a=r-t;return a*e/s+t},easeInQuad:function(e,t,r,s){var a=r-t;return a*(e/=s)*e+t},easeOutQuad:function(e,t,r,s){var a=r-t;return-a*(e/=s)*(e-2)+t},easeInOutQuad:function(e,t,r,s){var a=r-t;return(e/=s/2)<1?a/2*e*e+t:-a/2*(--e*(e-2)-1)+t},easeInCubic:function(e,t,r,s){var a=r-t;return a*(e/=s)*e*e+t},easeOutCubic:function(e,t,r,s){var a=r-t;return a*((e=e/s-1)*e*e+1)+t},easeInOutCubic:function(e,t,r,s){var a=r-t;return(e/=s/2)<1?a/2*e*e*e+t:a/2*((e-=2)*e*e+2)+t},easeInQuart:function(e,t,r,s){var a=r-t;return a*(e/=s)*e*e*e+t},easeOutQuart:function(e,t,r,s){var a=r-t;return-a*((e=e/s-1)*e*e*e-1)+t},easeInOutQuart:function(e,t,r,s){var a=r-t;return(e/=s/2)<1?a/2*e*e*e*e+t:-a/2*((e-=2)*e*e*e-2)+t},easeInQuint:function(e,t,r,s){var a=r-t;return a*(e/=s)*e*e*e*e+t},easeOutQuint:function(e,t,r,s){var a=r-t;return a*((e=e/s-1)*e*e*e*e+1)+t},easeInOutQuint:function(e,t,r,s){var a=r-t;return(e/=s/2)<1?a/2*e*e*e*e*e+t:a/2*((e-=2)*e*e*e*e+2)+t},easeInSine:function(e,t,r,s){var a=r-t;return-a*Math.cos(e/s*(Math.PI/2))+a+t},easeOutSine:function(e,t,r,s){var a=r-t;return a*Math.sin(e/s*(Math.PI/2))+t},easeInOutSine:function(e,t,r,s){var a=r-t;return-a/2*(Math.cos(Math.PI*e/s)-1)+t},easeInExpo:function(e,t,r,s){var a=r-t;return e==0?t:a*Math.pow(2,10*(e/s-1))+t},easeOutExpo:function(e,t,r,s){var a=r-t;return e==s?t+a:a*(-Math.pow(2,-10*e/s)+1)+t},easeInOutExpo:function(e,t,r,s){var a=r-t;return e===0?t:e===s?t+a:(e/=s/2)<1?a/2*Math.pow(2,10*(e-1))+t:a/2*(-Math.pow(2,-10*--e)+2)+t},easeInCirc:function(e,t,r,s){var a=r-t;return-a*(Math.sqrt(1-(e/=s)*e)-1)+t},easeOutCirc:function(e,t,r,s){var a=r-t;return a*Math.sqrt(1-(e=e/s-1)*e)+t},easeInOutCirc:function(e,t,r,s){var a=r-t;return(e/=s/2)<1?-a/2*(Math.sqrt(1-e*e)-1)+t:a/2*(Math.sqrt(1-(e-=2)*e)+1)+t},easeInElastic:function(e,t,r,s){var a=r-t,i,o,l;return l=1.70158,o=0,i=a,e===0?t:(e/=s)===1?t+a:(o||(o=s*.3),i<Math.abs(a)?(i=a,l=o/4):l=o/(2*Math.PI)*Math.asin(a/i),-(i*Math.pow(2,10*(e-=1))*Math.sin((e*s-l)*(2*Math.PI)/o))+t)},easeOutElastic:function(e,t,r,s){var a=r-t,i,o,l;return l=1.70158,o=0,i=a,e===0?t:(e/=s)===1?t+a:(o||(o=s*.3),i<Math.abs(a)?(i=a,l=o/4):l=o/(2*Math.PI)*Math.asin(a/i),i*Math.pow(2,-10*e)*Math.sin((e*s-l)*(2*Math.PI)/o)+a+t)},easeInOutElastic:function(e,t,r,s){var a=r-t,i,o,l;return l=1.70158,o=0,i=a,e===0?t:(e/=s/2)===2?t+a:(o||(o=s*(.3*1.5)),i<Math.abs(a)?(i=a,l=o/4):l=o/(2*Math.PI)*Math.asin(a/i),e<1?-.5*(i*Math.pow(2,10*(e-=1))*Math.sin((e*s-l)*(2*Math.PI)/o))+t:i*Math.pow(2,-10*(e-=1))*Math.sin((e*s-l)*(2*Math.PI)/o)*.5+a+t)},easeInBack:function(e,t,r,s,a){var i=r-t;return a===void 0&&(a=1.70158),i*(e/=s)*e*((a+1)*e-a)+t},easeOutBack:function(e,t,r,s,a){var i=r-t;return a===void 0&&(a=1.70158),i*((e=e/s-1)*e*((a+1)*e+a)+1)+t},easeInOutBack:function(e,t,r,s,a){var i=r-t;return a===void 0&&(a=1.70158),(e/=s/2)<1?i/2*(e*e*(((a*=1.525)+1)*e-a))+t:i/2*((e-=2)*e*(((a*=1.525)+1)*e+a)+2)+t},easeInBounce:function(e,t,r,s){var a=r-t,i;return i=Ia.easeOutBounce(s-e,0,a,s),a-i+t},easeOutBounce:function(e,t,r,s){var a=r-t;return(e/=s)<1/2.75?a*(7.5625*e*e)+t:e<2/2.75?a*(7.5625*(e-=1.5/2.75)*e+.75)+t:e<2.5/2.75?a*(7.5625*(e-=2.25/2.75)*e+.9375)+t:a*(7.5625*(e-=2.625/2.75)*e+.984375)+t},easeInOutBounce:function(e,t,r,s){var a=r-t,i;return e<s/2?(i=Ia.easeInBounce(e*2,0,a,s),i*.5+t):(i=Ia.easeOutBounce(e*2-s,0,a,s),i*.5+a*.5+t)}},mg=Ia;function hg(e){return e*Math.PI/180}function Ct(e,t){return e+Math.random()*(t-e)}function pg(e,t){return Math.floor(e+Math.random()*(t-e+1))}var Ns;(function(e){e[e.Circle=0]="Circle",e[e.Square=1]="Square",e[e.Strip=2]="Strip"})(Ns||(Ns={}));var Tn;(function(e){e[e.Positive=1]="Positive",e[e.Negative=-1]="Negative"})(Tn||(Tn={}));const xg=1e3/60;class gg{constructor(t,r,s,a){this.getOptions=r;const{colors:i,initialVelocityX:o,initialVelocityY:l}=this.getOptions();this.context=t,this.x=s,this.y=a,this.w=Ct(5,20),this.h=Ct(5,20),this.radius=Ct(5,10),this.vx=typeof o=="number"?Ct(-o,o):Ct(o.min,o.max),this.vy=typeof l=="number"?Ct(-l,0):Ct(l.min,l.max),this.shape=pg(0,2),this.angle=hg(Ct(0,360)),this.angularSpin=Ct(-.2,.2),this.color=i[Math.floor(Math.random()*i.length)],this.rotateY=Ct(0,1),this.rotationDirection=Ct(0,1)?Tn.Positive:Tn.Negative}update(t){const{gravity:r,wind:s,friction:a,opacity:i,drawShape:o}=this.getOptions(),l=t/xg;this.x+=this.vx*l,this.y+=this.vy*l,this.vy+=r*l,this.vx+=s*l,this.vx*=a**l,this.vy*=a**l,this.rotateY>=1&&this.rotationDirection===Tn.Positive?this.rotationDirection=Tn.Negative:this.rotateY<=-1&&this.rotationDirection===Tn.Negative&&(this.rotationDirection=Tn.Positive);const c=.1*this.rotationDirection*l;if(this.rotateY+=c,this.angle+=this.angularSpin,this.context.save(),this.context.translate(this.x,this.y),this.context.rotate(this.angle),this.context.scale(1,this.rotateY),this.context.rotate(this.angle),this.context.beginPath(),this.context.fillStyle=this.color,this.context.strokeStyle=this.color,this.context.globalAlpha=i,this.context.lineCap="round",this.context.lineWidth=2,o&&typeof o=="function")o.call(this,this.context);else switch(this.shape){case Ns.Circle:{this.context.beginPath(),this.context.arc(0,0,this.radius,0,2*Math.PI),this.context.fill();break}case Ns.Square:{this.context.fillRect(-this.w/2,-this.h/2,this.w,this.h);break}case Ns.Strip:{this.context.fillRect(-this.w/6,-this.h/2,this.w/3,this.h);break}}this.context.closePath(),this.context.restore()}}class vg{constructor(t,r){this.x=0,this.y=0,this.w=0,this.h=0,this.lastNumberOfPieces=0,this.tweenProgress=0,this.tweenFrom=0,this.particles=[],this.particlesGenerated=0,this.removeParticleAt=a=>{this.particles.splice(a,1)},this.getParticle=()=>{const a=Ct(this.x,this.w+this.x),i=Ct(this.y,this.h+this.y);return new gg(this.context,this.getOptions,a,i)},this.animate=a=>{const{canvas:i,context:o,particlesGenerated:l,lastNumberOfPieces:c}=this,{run:u,recycle:f,numberOfPieces:p,debug:h,tweenFunction:b,tweenDuration:g}=this.getOptions();if(!u)return!1;const N=this.particles.length,C=f?N:l;if(C<p){c!==p&&(this.tweenProgress=0,this.tweenFrom=C,this.lastNumberOfPieces=p),this.tweenProgress=Math.min(g,Math.max(0,this.tweenProgress+a));const v=b(this.tweenProgress,this.tweenFrom,p,g),m=Math.round(v-C);for(let y=0;y<m;y++)this.particles.push(this.getParticle());this.particlesGenerated+=m}h&&(o.font="12px sans-serif",o.fillStyle="#333",o.textAlign="right",o.fillText(`Particles: ${N}`,i.width-10,i.height-20));for(let v=this.particles.length-1;v>=0;v--){const m=this.particles[v];m.update(a),(m.y>i.height||m.y<-100||m.x>i.width+100||m.x<-100)&&(f&&C<=p?this.particles[v]=this.getParticle():this.removeParticleAt(v))}return N>0||C<p},this.canvas=t;const s=this.canvas.getContext("2d");if(!s)throw new Error("Could not get canvas context");this.context=s,this.getOptions=r}}const dc={width:typeof window<"u"?window.innerWidth:300,height:typeof window<"u"?window.innerHeight:200,numberOfPieces:200,friction:.99,wind:0,gravity:.1,initialVelocityX:4,initialVelocityY:10,colors:["#f44336","#e91e63","#9c27b0","#673ab7","#3f51b5","#2196f3","#03a9f4","#00bcd4","#009688","#4CAF50","#8BC34A","#CDDC39","#FFEB3B","#FFC107","#FF9800","#FF5722","#795548"],opacity:1,debug:!1,tweenFunction:mg.easeInOutQuad,tweenDuration:5e3,recycle:!0,run:!0};class yg{constructor(t,r){this.lastFrameTime=0,this.setOptionsWithDefaults=a=>{const i={confettiSource:{x:0,y:0,w:this.canvas.width,h:0}};this._options={...i,...dc,...a},Object.assign(this,a.confettiSource)},this.update=(a=0)=>{const{options:{run:i,onConfettiComplete:o,frameRate:l},canvas:c,context:u}=this,f=Math.min(a-this.lastFrameTime,50);if(l&&f<1e3/l){this.rafId=requestAnimationFrame(this.update);return}this.lastFrameTime=a-(l?f%l:0),i&&(u.fillStyle="white",u.clearRect(0,0,c.width,c.height)),this.generator.animate(f)?this.rafId=requestAnimationFrame(this.update):(o&&typeof o=="function"&&this.generator.particlesGenerated>0&&o.call(this,this),this._options.run=!1)},this.reset=()=>{this.generator&&this.generator.particlesGenerated>0&&(this.generator.particlesGenerated=0,this.generator.particles=[],this.generator.lastNumberOfPieces=0)},this.stop=()=>{this.options={run:!1},this.rafId&&(cancelAnimationFrame(this.rafId),this.rafId=void 0)},this.canvas=t;const s=this.canvas.getContext("2d");if(!s)throw new Error("Could not get canvas context");this.context=s,this.generator=new vg(this.canvas,()=>this.options),this.options=r,this.update()}get options(){return this._options}set options(t){var a,i;const r=(a=this._options)==null?void 0:a.run,s=(i=this._options)==null?void 0:i.recycle;this.setOptionsWithDefaults(t),this.generator&&(Object.assign(this.generator,this.options.confettiSource),typeof t.recycle=="boolean"&&t.recycle&&s===!1&&(this.generator.lastNumberOfPieces=this.generator.particles.length)),typeof t.run=="boolean"&&t.run&&r===!1&&this.update()}}const bg=pt.createRef();class uc extends pt.Component{constructor(t){super(t),this.canvas=pt.createRef(),this.canvas=t.canvasRef||bg}componentDidMount(){if(this.canvas.current){const t=to(this.props)[0];this.confetti=new yg(this.canvas.current,t)}}componentDidUpdate(){const t=to(this.props)[0];this.confetti&&(this.confetti.options=t)}componentWillUnmount(){this.confetti&&this.confetti.stop(),this.confetti=void 0}render(){const[t,r]=to(this.props),s={zIndex:2,position:"absolute",pointerEvents:"none",top:0,left:0,bottom:0,right:0,...r.style};return n.jsx("canvas",{width:t.width,height:t.height,ref:this.canvas,...r,style:s})}}uc.defaultProps={...dc};uc.displayName="ReactConfetti";function to(e){const t={},r={},s={},a=[...Object.keys(dc),"confettiSource","drawShape","onConfettiComplete","frameRate"],i=["canvasRef"];for(const o in e){const l=e[o];a.includes(o)?t[o]=l:i.includes(o)?i[o]=l:s[o]=l}return[t,s,r]}const _m=pt.forwardRef((e,t)=>n.jsx(uc,{canvasRef:t,...e}));function Id({question:e,category:t,onAnswer:r,run:s,timeLeft:a,usedLifelines:i,onUseLifeline:o,eliminatedOptions:l,audienceData:c,onBack:u,timeUp:f,onTimeUpBackToWheel:p,soundOn:h}){const[b,g]=d.useState(null),[N,C]=d.useState(!1),[v,m]=d.useState(!1),y=d.useRef(null),E=d.useRef(null),[j,P]=d.useState(null);d.useEffect(()=>(document.body.classList.add("hide-bottom-nav"),()=>{document.body.classList.remove("hide-bottom-nav")}),[]),d.useEffect(()=>{if(!N||!y.current)return;const w=y.current.getBoundingClientRect();P({x:w.left,y:w.top-300,w:w.width,h:8})},[N]);const S=w=>{if(N)return;g(w),C(!0);const k=w===e.correctIndex;cc(k?[50,30,50]:[200]),h&&Dr(k?"/sounds/correct.mp3":"/sounds/wrong.mp3",.7),setTimeout(()=>{r(k,null)},1500)},x=b===e.correctIndex;return n.jsx("div",{className:"fixed inset-0 bg-gradient-to-br from-gray-900 to-black text-white overflow-hidden",children:n.jsxs("div",{ref:E,className:"relative h-full overflow-y-auto px-5 pt-16 pb-[calc(env(safe-area-inset-bottom)+5.25rem)]",children:[n.jsx("div",{className:"mb-4",children:n.jsx("button",{onClick:()=>m(!0),className:"h-10 w-10 rounded-full border border-base-border grid place-items-center bg-white/5 hover:bg-white/10 transition",children:"←"})}),n.jsxs("div",{className:"text-center mb-6",children:[n.jsx("div",{className:`text-4xl font-black mb-2 ${a<=10?"text-red-400 animate-pulse":"text-white"}`,children:a}),n.jsx("div",{className:"w-full bg-white/20 rounded-full h-2",children:n.jsx("div",{className:`h-full rounded-full transition-all duration-1000 ${a<=10?"bg-red-400":"bg-blue-400"}`,style:{width:`${a/30*100}%`}})})]}),n.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[n.jsx("div",{className:"w-12 h-12 rounded-full flex items-center justify-center text-2xl",style:{backgroundColor:t.color},children:t.icon}),n.jsxs("div",{children:[n.jsx("div",{className:"text-lg font-bold",children:t.name}),n.jsxs("div",{className:"text-sm text-gray-400",children:["Question ",s.qIndex+1,"/3"]})]})]}),n.jsx("h2",{ref:y,className:"text-xl font-semibold mb-6 leading-relaxed",children:e.prompt}),n.jsx("div",{className:"space-y-3 mb-6",children:e.options.map((w,k)=>{const R=l.includes(k),M=b===k,q=k===e.correctIndex;let ee="bg-white/10 border-white/20",Q="opacity-100";return R?Q="opacity-30":N&&M?ee=q?"bg-green-500/30 border-green-400":"bg-red-500/30 border-red-400":N&&q?ee="bg-green-500/30 border-green-400":M&&(ee="bg-white/20 border-white/40"),n.jsx("button",{onClick:()=>S(k),disabled:N||R,className:`w-full p-4 rounded-xl border-2 text-left transition-all duration-300 ${ee} ${Q} ${!N&&!R?"hover:bg-white/15 active:scale-98":""}`,children:n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsx("div",{className:"w-8 h-8 rounded-full bg-white/20 flex items-center justify-center font-bold text-sm",children:String.fromCharCode(65+k)}),n.jsx("span",{className:"font-medium flex-1",children:w}),c&&n.jsxs("span",{className:"text-xs text-base-muted",children:[Math.round(c[k]),"%"]})]})},k)})}),!N&&n.jsxs("div",{className:"flex gap-4 mb-8",children:[n.jsx("button",{onClick:()=>o("fifty"),disabled:i.fifty,className:`flex-1 p-4 rounded-2xl border-2 font-bold transition-all ${i.fifty?"bg-gray-700 border-gray-600 text-gray-400":"bg-purple-600 border-purple-400 text-white hover:bg-purple-500 active:scale-95"}`,children:"50:50"}),n.jsx("button",{onClick:()=>o("audience"),disabled:i.audience,className:`flex-1 p-4 rounded-2xl border-2 font-bold transition-all ${i.audience?"bg-gray-700 border-gray-600 text-gray-400":"bg-blue-600 border-blue-400 text-white hover:bg-blue-500 active:scale-95"}`,children:"👥 Ask"})]}),N&&n.jsxs("div",{className:"relative text-center",children:[x&&n.jsx("div",{className:"absolute inset-0 pointer-events-none",children:n.jsx(_m,{recycle:!1,numberOfPieces:120,gravity:.9,tweenDuration:1800,confettiSource:j||{x:0,y:0,w:typeof window<"u"?window.innerWidth:320,h:1}})}),n.jsx("button",{onClick:()=>r(x,null,!0),className:"relative z-10 bg-white text-black font-black py-4 px-8 rounded-2xl text-lg hover:bg-gray-100 transition-all active:scale-95",children:"Continue"})]}),f&&n.jsx("div",{className:"fixed inset-0 z-50 bg-black/60 flex items-center justify-center px-6",children:n.jsxs("div",{className:"w-full max-w-sm rounded-2xl bg-base-card border border-base-border p-5 text-center",children:[n.jsx("div",{className:"text-lg font-bold mb-2",children:"Time's up"}),n.jsx("p",{className:"text-base-muted mb-5",children:"You ran out of time."}),n.jsx("button",{onClick:p,className:"mx-auto w-48 py-3 rounded-xl bg-brand-blue text-white font-semibold hover:bg-brand-blue/90 transition",children:"Back to Wheel"})]})}),v&&n.jsx("div",{className:"fixed inset-0 z-50 bg-black/60 flex items-center justify-center px-6",children:n.jsxs("div",{className:"w-full max-w-sm rounded-2xl bg-base-card border border-base-border p-5 text-center",children:[n.jsx("div",{className:"text-lg font-bold mb-2",children:"Want to quit?"}),n.jsx("p",{className:"text-base-muted mb-5",children:"You'll lose this question's progress."}),n.jsxs("div",{className:"flex gap-3",children:[n.jsx("button",{onClick:()=>m(!1),className:"flex-1 py-3 rounded-xl border border-base-border bg-white/5 hover:bg-white/10 transition",children:"No"}),n.jsx("button",{onClick:u,className:"flex-1 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-500 transition",children:"Yes"})]})]})})]})})}function Dd({category:e,onComplete:t,isBonus:r=!1,soundOn:s=!0}){return d.useEffect(()=>{s&&Dr("/sounds/flush.mp3",.8);const a=setTimeout(t,1e3);return cc([50]),()=>clearTimeout(a)},[t,s]),d.useEffect(()=>(document.body.classList.add("hide-bottom-nav"),()=>{document.body.classList.remove("hide-bottom-nav")}),[]),r?n.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-purple-500 to-blue-600 flex flex-col items-center justify-center text-white",children:[n.jsx("h2",{className:"text-5xl font-black mb-8",children:"Bonus Question"}),n.jsx("div",{className:"w-32 h-32 bg-white/20 rounded-full flex items-center justify-center animate-pulse",children:n.jsx("span",{className:"text-6xl",children:"⭐"})})]}):n.jsx("div",{className:"min-h-screen bg-base-bg text-white flex items-center justify-center",children:n.jsxs("div",{className:"relative w-96 h-96 rounded-full flex items-center justify-center",style:{backgroundColor:e.color},children:[n.jsxs("div",{className:"absolute inset-0 opacity-10 pointer-events-none",children:[n.jsx("div",{className:"absolute top-8 left-10 w-20 h-20 bg-white/20 rounded-full"}),n.jsx("div",{className:"absolute bottom-10 right-12 w-24 h-24 bg-white/20 rounded-full"})]}),n.jsxs("div",{className:"relative z-10 text-center",children:[n.jsx("div",{className:"text-4xl font-black mb-2",children:e.name}),n.jsx("div",{className:"w-20 h-20 bg-white/20 rounded-full grid place-items-center mx-auto",children:n.jsx("span",{className:"text-4xl",children:e.icon})})]})]})})}function wg({onDone:e}){return d.useEffect(()=>{const t=setTimeout(e,1e3);return()=>clearTimeout(t)},[e]),n.jsx("div",{className:"min-h-screen flex items-center justify-center bg-green-600 text-white",children:n.jsx("h2",{className:"text-2xl font-black",children:"Whohoo!! 3 correct in a row 🎉"})})}function jg({onSelect:e}){return n.jsx("div",{className:"min-h-screen bg-gradient-to-br from-purple-600 to-pink-600 text-white",children:n.jsxs("div",{className:"mx-auto max-w-md px-5 pt-16 pb-8",children:[n.jsxs("header",{className:"text-center mb-12",children:[n.jsx("div",{className:"text-6xl mb-4",children:"🏆"}),n.jsx("h1",{className:"text-4xl font-black mb-4",children:"Perfect Round!"}),n.jsx("p",{className:"text-xl opacity-90",children:"Choose a character to unlock"})]}),n.jsx("div",{className:"grid grid-cols-2 gap-6",children:rn.map(t=>{const r=Tm[ir(t.name)];return n.jsxs("button",{onClick:()=>e(ir(t.name)),className:"p-6 rounded-3xl border-2 border-white/20 bg-white/10 backdrop-blur text-center hover:bg-white/20 hover:scale-105 transition-all duration-300 active:scale-95",children:[n.jsx("div",{className:"text-4xl mb-3",children:t.icon}),n.jsx("div",{className:"font-black text-lg mb-1",children:r}),n.jsx("div",{className:"text-sm opacity-75",children:t.name})]},ir(t.name))})})]})})}function Ng({onBack:e}){const{coins:t,xp:r,level:s,ownedCharacters:a,soundOn:i,addCoins:o,addXp:l,unlockCharacter:c,setSoundOn:u}=lc(),[f,p]=d.useState("wheel"),[h,b]=d.useState({qIndex:0,progress:[!1,!1,!1],lifelines:{fifty:!1,audience:!1}}),[g,N]=d.useState([]),[C,v]=d.useState(null),[m,y]=d.useState(null),[E,j]=d.useState(30),[P,S]=d.useState([]),[x,w]=d.useState(null),[k,R]=d.useState(null),[M,q]=d.useState(!1),[ee,Q]=d.useState(0),[Y,U]=d.useState("none"),[_,I]=d.useState(!1),[B,T]=d.useState(null),[z,D]=d.useState(!1),[te,X]=d.useState(null),[J,$]=d.useState(-1),[A,H]=d.useState(0),[F,O]=d.useState(null),[Z,ae]=d.useState(null),[ce,ne]=d.useState(!1),[re,K]=d.useState(null),[L,G]=d.useState(-1),[de,he]=d.useState([!1,!1,!1]),[pe,Oe]=d.useState(!1),[Ce,be]=d.useState(!1),ue=d.useRef(null),ge=d.useRef(null),Ne=d.useRef(null),Ue=d.useMemo(()=>{var oe;return((oe=window.matchMedia)==null?void 0:oe.call(window,"(prefers-reduced-motion: reduce)").matches)||!1},[]);d.useEffect(()=>(qt(),et(),()=>ke()),[]),d.useEffect(()=>(f==="question"&&E>0&&!Ce?ue.current=setTimeout(()=>{j(oe=>{const le=oe-1;return le===10&&i&&Dr("/sounds/tick.mp3",.8),le})},1e3):f==="question"&&E===0&&q(!0),()=>{ue.current&&clearTimeout(ue.current)}),[f,E,i,Ce]),d.useEffect(()=>{if(f!=="wheel"||F==null)return;$(F),i&&Dr("/sounds/progress.mp3",.6),G(F);const oe=setTimeout(()=>G(-1),900),le=setTimeout(()=>$(-1),900),xe=setTimeout(()=>{re&&(re==="streakFlash"?p("streakFlash"):re==="characterPicker"?p("characterPicker"):(e(),Ae()),K(null)),O(null)},1800);return()=>{clearTimeout(oe),clearTimeout(le),clearTimeout(xe)}},[f,F,re,i,e]),d.useEffect(()=>{f!=="wheel"||!pe||(H(oe=>oe+1),Oe(!1))},[f,pe]),d.useEffect(()=>{if(f!=="wheel"||Z==null)return;const le=setTimeout(()=>{O(Z),ae(null)},ce?1800:0);return()=>clearTimeout(le)},[f,Z,ce]);const qt=async()=>{try{const le=await(await fetch("/data/quiz_questions_bank.csv")).text(),{data:xe}=hr.parse(le,{header:!0,skipEmptyLines:!0,transformHeader:ve=>ve.trim().toLowerCase()}),Re=xe.map((ve,Ie)=>{var pr;const it=[ve.option1,ve.option2,ve.option3,ve.option4].map(Vn=>(Vn||"").trim()).filter(Boolean);if(it.length<4)return null;let At={a:0,b:1,c:2,d:3}[(pr=ve.answer)==null?void 0:pr.toLowerCase()];return At===void 0&&(At=it.findIndex(Vn=>Vn.toLowerCase()===(ve.answer||"").toLowerCase())),At===-1&&(At=0),{id:ve.id||`q_${Ie}`,prompt:(ve.question||"").trim(),options:it,correctIndex:At,category:(ve.category||ve.subject||"general knowledge").trim(),difficulty:(ve.difficulty||"medium").toLowerCase(),explanation:(ve.explanation||"").trim()}}).filter(Boolean);N(Re)}catch(oe){console.error("Failed to load questions:",oe),N([])}},et=()=>{const oe=new Audio("/sounds/spin.mp3");oe.loop=!0,oe.volume=.6,ge.current=oe},ke=()=>{if(ue.current&&clearTimeout(ue.current),Ne.current&&(clearTimeout(Ne.current),Ne.current=null),ge.current){try{ge.current.pause()}catch{}ge.current=null}},Ae=()=>{b({qIndex:0,progress:[!1,!1,!1],lifelines:{fifty:!1,audience:!1}}),he([!1,!1,!1]),v(null),y(null),R(null),S([]),w(null),q(!1),H(0)},Qt=()=>{if(i&&ge.current){try{ge.current.currentTime=0,ge.current.play()}catch{}Ne.current&&clearTimeout(Ne.current),Ne.current=setTimeout(()=>{Gn()},2e3)}},Gn=()=>{if(Ne.current&&(clearTimeout(Ne.current),Ne.current=null),ge.current)try{ge.current.pause(),ge.current.currentTime=0}catch{}},Ge=()=>{if(_)return;T(null),D(!1),X(null),I(!0),Qt();const oe=Math.floor(Math.random()*rn.length),le=rn[oe],xe=Ad(ee),Re=oe*nr+nr/2,ve=(Math.random()-.5)*(nr*.3),Ie=360-Re+ve;let it=Ad(Ie-xe);const Nn=Sn.FULL_TURNS*360+it,At=ee+Nn+Sn.OVERSHOOT;U(`transform ${Ue?1e3:Sn.DURATION}ms cubic-bezier(0.25, 0.46, 0.45, 0.94)`),Q(At),cc([20,50,20]),setTimeout(()=>{U(`transform ${Ue?200:Sn.SETTLE_DURATION}ms cubic-bezier(0.68, -0.55, 0.265, 1.55)`),Q(pr=>pr-Sn.OVERSHOOT)},Ue?1e3:Sn.DURATION),setTimeout(()=>{Gn(),I(!1),T({cat:le,index:oe}),y(le),X(le.color),D(!0),setTimeout(()=>{D(!1),p("interstitial")},1500),setTimeout(()=>X(null),1e3)},(Ue?1e3:Sn.DURATION)+(Ue?200:Sn.SETTLE_DURATION)+100)},V=()=>{const oe=g.filter(xe=>{const Re=xe.category.toLowerCase(),ve=m.name.toLowerCase();return Re.includes(ve)||ve.includes(Re)});let le;oe.length>0?le=oe[Math.floor(Math.random()*oe.length)]:le=g[Math.floor(Math.random()*g.length)],le?(v(le),j(30),S([]),w(null),q(!1),be(!1),p("question")):p("wheel")},ie=(oe,le,xe=!1)=>{if(!xe){be(!0);return}const Re=h.qIndex,ve=[...h.progress];ve[Re]=!0;const Ie=[...de];if(Ie[Re]=!!oe,he(Ie),b(it=>({...it,progress:ve,qIndex:it.qIndex+1})),oe&&(o(5),l(1),Oe(!0)),ae(Re),ne(!!oe),Re===2){const it=Ie.every(Boolean);K(it?"streakFlash":"modes")}else K(null);p("wheel")},Le=oe=>{if(!(h.lifelines[oe]||!C)){if(b(le=>({...le,lifelines:{...le.lifelines,[oe]:!0}})),oe==="fifty"){const xe=C.options.map((Re,ve)=>ve).filter(Re=>Re!==C.correctIndex).slice(0,2);S(xe)}else if(oe==="audience"){const le=40+Math.random()*25;let xe=100-le;const Re=[0,0,0,0];Re[C.correctIndex]=Math.round(le);const ve=[0,1,2,3].filter(Ie=>Ie!==C.correctIndex);ve.forEach((Ie,it)=>{if(it===ve.length-1)Re[Ie]=xe;else{const Nn=Math.floor(Math.random()*xe);Re[Ie]=Nn,xe-=Nn}}),w(Re)}}},Ee=oe=>{R(oe),p("bonusInterstitial")},Ve=oe=>{oe&&k&&(c(k),i&&Dr("/sounds/coin.mp3",1)),setTimeout(()=>{e(),Ae()},3e3)},we=()=>{p("wheel")};switch(f){case"wheel":return n.jsx(fg,{run:h,coins:t,xp:r,level:s,ownedCharacters:a,onSpin:Ge,onBack:e,spinning:_,angle:ee,transition:Y,result:B,showCallout:z,glowColor:te,soundOn:i,setSoundOn:u,showSparkle:J,pulseIdx:L,coinBurstTick:A,pendingProgressIdx:F,lastAnswerWasCorrect:ce,nextProgressIdx:Z});case"interstitial":return n.jsx(Dd,{category:m,onComplete:V,soundOn:i});case"streakFlash":return n.jsx(wg,{onDone:()=>p("characterPicker")});case"question":return n.jsx(Id,{question:C,category:m,onAnswer:ie,run:h,timeLeft:E,usedLifelines:h.lifelines,onUseLifeline:Le,eliminatedOptions:P,audienceData:x,onBack:we,timeUp:M,onTimeUpBackToWheel:()=>{q(!1),p("wheel")},soundOn:i});case"characterPicker":return n.jsx(jg,{onSelect:Ee});case"bonusInterstitial":return n.jsx(Dd,{category:rn.find(oe=>ir(oe.name)===k),onComplete:()=>p("bonusQuestion"),isBonus:!0,soundOn:i});case"bonusQuestion":if(!C){const oe=rn.find(le=>ir(le.name)===k);if(oe&&g.length>0){const le=g.filter(Re=>{const ve=Re.category.toLowerCase(),Ie=oe.name.toLowerCase();return ve.includes(Ie)||Ie.includes(ve)}),xe=le.length>0?le[Math.floor(Math.random()*le.length)]:g[Math.floor(Math.random()*g.length)];v(xe),j(30)}return n.jsx("div",{className:"min-h-screen bg-base-bg text-base-text flex items-center justify-center",children:n.jsx("div",{className:"text-lg",children:"Loading bonus question..."})})}return n.jsx(Id,{question:C,category:rn.find(oe=>ir(oe.name)===k)||rn[0],onAnswer:Ve,run:{...h,lifelines:{fifty:!0,audience:!0}},timeLeft:E,usedLifelines:{fifty:!0,audience:!0},onUseLifeline:()=>{},eliminatedOptions:[],audienceData:null,onBack:e,soundOn:i});default:return n.jsx("div",{className:"min-h-screen bg-base-bg text-white flex items-center justify-center",children:n.jsxs("div",{className:"text-center",children:[n.jsx("div",{className:"text-2xl mb-4",children:"Unknown State"}),n.jsx("button",{onClick:()=>p("wheel"),className:"px-6 py-3 bg-blue-600 rounded-lg",children:"Back to Wheel"})]})})}}function kg({lives:e,maxLives:t=3}){const[r,s]=d.useState(null),[a,i]=d.useState(e);return d.useEffect(()=>{e<a?(s(a-1),setTimeout(()=>s(null),600)):e>a&&(s(e-1),setTimeout(()=>s(null),1e3)),i(e)},[e,a]),n.jsxs("div",{className:"relative",children:[n.jsx("style",{jsx:!0,children:`
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
      `}),n.jsxs("div",{className:"flex items-center gap-3 px-5 py-1.5 bg-gradient-to-r from-red-500/20 to-pink-500/20 rounded-full backdrop-blur-md border border-white/10 shadow-xl",children:[n.jsx("div",{className:"flex items-center gap-1.5",children:[...Array(t)].map((o,l)=>n.jsx("div",{className:`relative transition-all duration-300 ${l<e?"scale-100":"scale-75"}`,children:n.jsxs("div",{className:"relative",children:[l<e?n.jsxs("div",{className:`relative ${l===r&&e>a?"heart-gained":""}`,children:[n.jsx("span",{className:`text-3xl drop-shadow-lg ${l===e-1?"heart-beat":""}`,children:"❤️"}),l===e-1&&e===1&&n.jsx("div",{className:"absolute inset-0 rounded-full heart-glow"})]}):n.jsx("div",{className:`relative ${l===r&&e<a?"heart-lost":""}`,children:n.jsx("span",{className:"text-3xl opacity-20 grayscale",children:"💔"})}),l===r&&e>a&&n.jsxs("div",{className:"absolute inset-0 flex items-center justify-center pointer-events-none",children:[n.jsx("div",{className:"absolute w-10 h-10 bg-green-400 rounded-full animate-ping opacity-30"}),n.jsx("span",{className:"absolute text-sm font-bold text-green-400 animate-bounce",children:"+1"})]})]})},l))}),n.jsx("div",{className:"pr-1",children:n.jsxs("div",{className:`text-sm font-bold ${e===1?"text-red-400 animate-pulse":e===t?"text-green-400":"text-white"}`,children:[e,"/",t]})})]}),e===1&&n.jsx("div",{className:"absolute -bottom-10 left-1/2 -translate-x-1/2 whitespace-nowrap",children:n.jsx("div",{className:"px-3 py-1 bg-red-500/20 border border-red-500/50 rounded-full backdrop-blur-sm",children:n.jsx("span",{className:"text-xs font-medium text-red-400 animate-pulse",children:"Last life! Be careful! ⚠️"})})})]})}function Sg({question:e,onAnswer:t,lives:r,questionCount:s,correctStreak:a,totalScore:i,currentDifficulty:o,timeLeft:l,showFeedback:c,lastAnswerCorrect:u,checkpoint:f,onBack:p,soundOn:h,setSoundOn:b}){const[g,N]=d.useState(null),[C,v]=d.useState(!1),[m,y]=d.useState(!1),E={EASY:{emoji:"🌱",color:"from-emerald-400 to-green-500",accentGradient:"from-emerald-500/20 to-green-600/20",label:"Sprout",motivationalText:"Great start! Keep growing! 🌱"},MEDIUM:{emoji:"🌻",color:"from-yellow-400 to-amber-500",accentGradient:"from-yellow-500/20 to-amber-600/20",label:"Blooming",motivationalText:"You're blooming beautifully! 🌻"},HARD:{emoji:"🔥",color:"from-orange-400 to-red-500",accentGradient:"from-orange-500/20 to-red-600/20",label:"On Fire",motivationalText:"You're on fire! Keep it up! 🔥"},EXPERT:{emoji:"⚡",color:"from-purple-400 to-indigo-500",accentGradient:"from-purple-500/20 to-indigo-600/20",label:"Lightning",motivationalText:"Lightning fast thinking! ⚡"},LEGENDARY:{emoji:"👑",color:"from-pink-400 to-purple-600",accentGradient:"from-pink-500/20 to-purple-600/20",label:"Legendary",motivationalText:"Legendary performance! 👑"}},j=E[o];d.useEffect(()=>{a>0&&a%5===0&&c&&u&&(v(!0),setTimeout(()=>v(!1),3e3))},[a,c,u]),d.useEffect(()=>{c&&u&&(y(!0),setTimeout(()=>y(!1),1e3))},[c,u]);const P=S=>{c||(N(S),t(S))};return d.useEffect(()=>(document.body.classList.add("hide-bottom-nav"),()=>{document.body.classList.remove("hide-bottom-nav")}),[]),n.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-black text-white relative overflow-hidden",children:[n.jsx("style",{jsx:!0,children:`
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
      `}),n.jsxs("div",{className:"fixed inset-0 pointer-events-none",children:[n.jsx("div",{className:"absolute top-20 left-10 text-[100px] opacity-10 float-animation",children:j.emoji}),n.jsx("div",{className:"absolute top-40 right-20 text-[80px] opacity-10 float-animation",style:{animationDelay:"1s"},children:"⭐"}),n.jsx("div",{className:"absolute bottom-40 left-20 text-[90px] opacity-10 float-animation",style:{animationDelay:"2s"},children:"🎯"}),n.jsx("div",{className:"absolute bottom-20 right-10 text-[70px] opacity-10 float-animation",style:{animationDelay:"3s"},children:"🏆"})]}),n.jsxs("div",{className:"relative z-10 px-4 pt-[calc(env(safe-area-inset-top)+2rem)]",children:[n.jsxs("div",{className:"flex justify-between items-center mb-8 slide-in",children:[n.jsx("button",{onClick:p,className:"w-12 h-12 glass-card rounded-2xl shadow-lg flex items-center justify-center hover:scale-105 transition-transform",children:n.jsx("span",{className:"text-xl",children:"◀️"})}),n.jsx(kg,{lives:r}),n.jsx("button",{onClick:()=>b(!h),className:"w-12 h-12 glass-card rounded-2xl shadow-lg flex items-center justify-center hover:scale-105 transition-transform",children:n.jsx("span",{className:"text-xl",children:h?"🔊":"🔇"})})]}),n.jsx("div",{className:`glass-card rounded-3xl p-2 shadow-xl mb-2 mt-12 slide-in bg-gradient-to-r ${j.accentGradient}`,style:{animationDelay:"0.1s"},children:n.jsxs("div",{className:"grid grid-cols-3 gap-3",children:[n.jsxs("div",{className:"text-center",children:[n.jsx("div",{className:`text-3xl font-black bg-gradient-to-r ${j.color} bg-clip-text text-transparent ${m?"score-pulse":""}`,children:i}),n.jsx("div",{className:"text-xs text-white/60 font-medium mt-1",children:"Points"}),c&&u&&n.jsx("div",{className:"absolute -top-2 left-1/2 -translate-x-1/2",children:n.jsxs("span",{className:"text-green-400 font-bold text-sm coin-animation",children:["+",E[o]?o==="EASY"?10:o==="MEDIUM"?20:o==="HARD"?30:o==="EXPERT"?50:100:10]})})]}),n.jsxs("div",{className:"text-center",children:[n.jsx("div",{className:"text-3xl font-black text-white",children:s}),n.jsx("div",{className:"text-xs text-white/60 font-medium mt-1",children:"Questions"})]}),n.jsxs("div",{className:"text-center relative",children:[n.jsx("div",{className:`text-3xl font-black text-orange-400 ${a>0?"streak-flame":""}`,children:a}),n.jsx("div",{className:"text-xs text-white/60 font-medium mt-1",children:"Streak 🔥"})]})]})}),n.jsxs("div",{className:"flex justify-between items-center mb-1 slide-in",style:{animationDelay:"0.2s"},children:[n.jsx("div",{className:`px-4 py-3 rounded-full bg-gradient-to-r ${j.color} text-white shadow-lg`,children:n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx("span",{className:"text-2xl",children:j.emoji}),n.jsxs("div",{children:[n.jsx("div",{className:"font-bold text-sm",children:j.label}),n.jsxs("div",{className:"text-[10px] opacity-90",children:["Level ",s+1]})]})]})}),n.jsx("div",{className:"relative",children:n.jsxs("div",{className:"w-20 h-20 glass-card rounded-full shadow-xl flex items-center justify-center",children:[n.jsxs("svg",{className:"absolute inset-0 w-full h-full",children:[n.jsx("circle",{cx:"40",cy:"40",r:"35",fill:"none",stroke:"rgba(255, 255, 255, 0.1)",strokeWidth:"6",className:"progress-ring"}),n.jsx("circle",{cx:"40",cy:"40",r:"35",fill:"none",stroke:l<=5?"#ef4444":l<=10?"#f59e0b":"#10b981",strokeWidth:"6",strokeDasharray:`${l/30*220} 220`,strokeLinecap:"round",className:"progress-ring transition-all duration-1000"})]}),n.jsx("div",{className:"relative z-10",children:n.jsx("span",{className:`text-2xl font-black ${l<=5?"text-red-400 animate-pulse":l<=10?"text-amber-400":"text-white"}`,children:l})})]})})]})]}),n.jsxs("div",{className:"px-4 slide-in",style:{animationDelay:"0.3s"},children:[n.jsxs("div",{className:"glass-card rounded-3xl shadow-xl p-6 mb-6 border border-white/10",children:[n.jsx("div",{className:"text-center mb-2",children:n.jsxs("span",{className:"text-xs font-bold text-white/40 uppercase tracking-wider",children:["Question ",s+1]})}),n.jsx("h2",{className:"text-xl font-bold text-center text-white leading-relaxed",children:e.prompt})]}),n.jsx("div",{className:"space-y-3",children:e.options.map((S,x)=>{const w=["A","B","C","D"],k=["from-blue-400 to-blue-500","from-green-400 to-green-500","from-yellow-400 to-yellow-500","from-purple-400 to-purple-500"];let R="glass-card border border-white/10",M="";return c&&(x===e.correctIndex?(R="bg-gradient-to-r from-green-500/20 to-emerald-500/20 border-2 border-green-400",M="correct-bounce"):g===x&&!u&&(R="bg-gradient-to-r from-red-500/20 to-pink-500/20 border-2 border-red-400",M="wrong-shake")),n.jsx("button",{onClick:()=>P(x),disabled:c,className:`w-full p-4 rounded-2xl shadow-lg transition-all ${R} ${M} 
                  ${c?"":"hover:scale-[1.02] active:scale-[0.98] hover:bg-white/10"} slide-in`,style:{animationDelay:`${.4+x*.05}s`},children:n.jsxs("div",{className:"flex items-center gap-4",children:[n.jsx("div",{className:`w-12 h-12 rounded-xl bg-gradient-to-br ${k[x]} 
                    text-white font-bold text-xl flex items-center justify-center shadow-md`,children:w[x]}),n.jsx("span",{className:"flex-1 text-left font-medium text-white",children:S}),c&&x===e.correctIndex&&n.jsx("span",{className:"text-2xl",children:"✅"}),c&&g===x&&!u&&n.jsx("span",{className:"text-2xl",children:"❌"})]})},x)})}),c&&n.jsx("div",{className:"mt-6 text-center slide-in",children:n.jsx("p",{className:"text-sm font-medium text-white/70",children:u?j.motivationalText:"No worries! Keep trying! 💪"})}),f>0&&n.jsx("div",{className:"mt-4 flex justify-center slide-in",style:{animationDelay:"0.6s"},children:n.jsx("div",{className:"glass-card rounded-full px-4 py-2 shadow-lg border border-white/10",children:n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx("span",{className:"text-xl",children:"🏁"}),n.jsxs("span",{className:"text-sm font-bold text-white/80",children:["Checkpoint: Question ",f]})]})})})]}),C&&n.jsx("div",{className:"fixed inset-0 pointer-events-none flex items-center justify-center z-50",children:n.jsx("div",{className:"bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-8 py-6 rounded-3xl shadow-2xl animate-bounce",children:n.jsxs("div",{className:"text-center",children:[n.jsx("div",{className:"text-5xl mb-3",children:"🎉"}),n.jsx("div",{className:"text-2xl font-black mb-2",children:"AMAZING STREAK!"}),n.jsx("div",{className:"text-lg",children:"You earned a life back! ❤️"})]})})})]})}function Cg({score:e,questionsAnswered:t,highScore:r,checkpoint:s,onRestart:a,onContinue:i,onBack:o}){const l=e>r,[c,u]=d.useState(!1),[f,p]=d.useState(0),[h,b]=d.useState(!1),g=d.useRef(null);d.useEffect(()=>{const y=e/60;let E=0;const j=setInterval(()=>{E+=y,E>=e?(p(e),clearInterval(j),l&&(u(!0),setTimeout(()=>u(!1),5e3))):p(Math.floor(E))},2e3/60);return setTimeout(()=>b(!0),2200),()=>clearInterval(j)},[e,l]),d.useEffect(()=>(document.body.classList.add("hide-bottom-nav"),()=>{document.body.classList.remove("hide-bottom-nav")}),[]);const C=(()=>t>=100?{emoji:"👑",title:"LEGENDARY!",subtitle:"You're a true Quiz Legend!",color:"from-purple-400 to-pink-500",stars:5}:t>=50?{emoji:"🏆",title:"CHAMPION!",subtitle:"Outstanding performance!",color:"from-yellow-400 to-amber-500",stars:5}:t>=30?{emoji:"💎",title:"EXPERT!",subtitle:"You're getting really good!",color:"from-blue-400 to-cyan-500",stars:4}:t>=20?{emoji:"⭐",title:"STAR PLAYER!",subtitle:"Keep up the great work!",color:"from-green-400 to-emerald-500",stars:3}:t>=10?{emoji:"🎯",title:"NICE TRY!",subtitle:"You're improving fast!",color:"from-orange-400 to-red-500",stars:2}:{emoji:"🌟",title:"GOOD START!",subtitle:"Every expert was once a beginner!",color:"from-indigo-400 to-purple-500",stars:1})();return n.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-black text-white relative overflow-hidden",children:[n.jsx("style",{jsx:!0,children:`
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
      `}),n.jsxs("div",{className:"absolute inset-0 overflow-hidden",children:[n.jsx("div",{className:"absolute top-20 left-10 text-[150px] opacity-5 float-animation",children:"🏆"}),n.jsx("div",{className:"absolute bottom-20 right-10 text-[120px] opacity-5 float-animation",style:{animationDelay:"1s"},children:"⭐"}),n.jsx("div",{className:"absolute top-40 right-20 text-[100px] opacity-5 float-animation",style:{animationDelay:"2s"},children:"🎯"})]}),c&&n.jsx("div",{className:"fixed inset-0 pointer-events-none z-50",children:[...Array(40)].map((v,m)=>n.jsx("div",{className:"absolute confetti-fall",style:{left:`${Math.random()*100}%`,animationDelay:`${Math.random()*3}s`,animationDuration:`${3+Math.random()*2}s`},children:n.jsx("span",{className:"text-3xl",children:["🎉","⭐","🎊","✨","🎈","💫","🌟"][Math.floor(Math.random()*7)]})},m))}),n.jsxs("div",{className:"relative z-10 flex flex-col items-center justify-center min-h-screen px-6 text-center",children:[n.jsxs("div",{className:"mb-8 slide-up",children:[n.jsx("h1",{className:"text-6xl font-black mb-4 bg-gradient-to-r from-red-400 to-pink-500 bg-clip-text text-transparent",children:"GAME OVER"}),l&&n.jsx("div",{className:"fade-in",style:{animationDelay:"1s"},children:n.jsx("div",{className:"inline-block px-6 py-3 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-bold shadow-2xl glow-text",children:n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsx("span",{className:"text-3xl",children:"🏆"}),n.jsx("span",{className:"text-xl",children:"NEW HIGH SCORE!"}),n.jsx("span",{className:"text-3xl",children:"🏆"})]})})})]}),h&&n.jsx("div",{className:"mb-8 slide-up",style:{animationDelay:"0.3s"},children:n.jsxs("div",{className:`glass-card rounded-3xl p-6 bg-gradient-to-r ${C.color} bg-opacity-20 border-2 border-white/20 shadow-2xl`,children:[n.jsx("div",{className:"text-6xl mb-3 bounce-animation",children:C.emoji}),n.jsx("h2",{className:"text-3xl font-black mb-2",children:C.title}),n.jsx("p",{className:"text-white/80 mb-4",children:C.subtitle}),n.jsx("div",{className:"flex justify-center gap-1",children:[...Array(5)].map((v,m)=>n.jsx("span",{className:`text-2xl ${m<C.stars?"star-pop":""}`,style:{animationDelay:`${2.5+m*.1}s`},children:m<C.stars?"⭐":"☆"},m))})]})}),n.jsxs("div",{className:"grid grid-cols-2 gap-4 mb-8 w-full max-w-md",children:[n.jsxs("div",{className:"glass-card rounded-2xl p-6 shadow-xl slide-up",style:{animationDelay:"0.4s"},children:[n.jsx("div",{className:"text-4xl mb-2",children:"🎯"}),n.jsx("div",{ref:g,className:`text-4xl font-black ${l?"text-yellow-400":"text-white"}`,children:f}),n.jsx("div",{className:"text-sm text-white/60 font-medium",children:"Points Earned"}),n.jsx("div",{className:"mt-3 pt-3 border-t border-white/10",children:n.jsxs("div",{className:"text-xs text-white/50",children:[t," questions"]})})]}),n.jsxs("div",{className:"glass-card rounded-2xl p-6 shadow-xl slide-up",style:{animationDelay:"0.5s"},children:[n.jsx("div",{className:"text-4xl mb-2",children:"📊"}),n.jsx("div",{className:"text-4xl font-black text-white",children:t}),n.jsx("div",{className:"text-sm text-white/60 font-medium",children:"Questions"}),n.jsx("div",{className:"mt-3 pt-3 border-t border-white/10",children:n.jsxs("div",{className:"text-xs text-white/50",children:["Best: ",Math.max(r,e)]})})]})]}),n.jsx("div",{className:"glass-card rounded-2xl px-6 py-4 mb-8 w-full max-w-md slide-up",style:{animationDelay:"0.6s"},children:n.jsx("p",{className:"text-white/80 font-medium",children:t>=50?"Incredible performance! You're a quiz master! 🌟":t>=20?"Great job! You're getting stronger! 💪":"Keep practicing! Every attempt makes you better! 🚀"})}),n.jsxs("div",{className:"space-y-3 w-full max-w-md",children:[s>0&&i&&n.jsx("button",{onClick:i,className:"w-full py-4 bg-gradient-to-r from-green-400 to-emerald-500 text-white rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all hover:scale-[1.02] active:scale-[0.98] slide-up",style:{animationDelay:"0.7s"},children:n.jsxs("div",{className:"flex items-center justify-center gap-3",children:[n.jsx("span",{className:"text-2xl",children:"🏁"}),n.jsxs("span",{children:["Continue from Question ",s]})]})}),n.jsx("button",{onClick:a,className:"w-full py-4 bg-gradient-to-r from-blue-400 to-indigo-500 text-white rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all hover:scale-[1.02] active:scale-[0.98] slide-up",style:{animationDelay:"0.8s"},children:n.jsxs("div",{className:"flex items-center justify-center gap-3",children:[n.jsx("span",{className:"text-2xl",children:"🎮"}),n.jsx("span",{children:"Play Again"})]})}),n.jsx("button",{onClick:o,className:"w-full py-4 glass-card text-white rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl transition-all hover:scale-[1.02] active:scale-[0.98] hover:bg-white/10 slide-up",style:{animationDelay:"0.9s"},children:n.jsxs("div",{className:"flex items-center justify-center gap-3",children:[n.jsx("span",{className:"text-2xl",children:"🏠"}),n.jsx("span",{children:"Back to Games"})]})})]})]})]})}const Md={EASY:{min:0,max:9,timer:30,points:10},MEDIUM:{min:10,max:24,timer:25,points:20},HARD:{min:25,max:49,timer:20,points:30},EXPERT:{min:50,max:99,timer:15,points:50},LEGENDARY:{min:100,max:1/0,timer:10,points:100}};function Eg({onBack:e,isFromQuest:t}){const{coins:r,xp:s,level:a,soundOn:i,addCoins:o,addXp:l,setSoundOn:c}=lc(),[u,f]=d.useState("playing"),[p,h]=d.useState(3),[b,g]=d.useState(0),[N,C]=d.useState(0),[v,m]=d.useState(0),[y,E]=d.useState("EASY"),[j,P]=d.useState([]),[S,x]=d.useState(null),[w,k]=d.useState(30),[R,M]=d.useState(!1),[q,ee]=d.useState(!1),[Q,Y]=d.useState(0),[U,_]=d.useState(!1),I=d.useRef(null),B=d.useRef(new Set);d.useEffect(()=>(z(),H(),()=>{I.current&&clearTimeout(I.current)}),[]),d.useEffect(()=>(u==="playing"&&S&&w>0&&!R&&(I.current=setTimeout(()=>{k(L=>L<=1?($(),0):(L===6&&i&&re("/sounds/tick.mp3",.8),L-1))},1e3)),()=>{I.current&&clearTimeout(I.current)}),[u,S,w,R,i]),d.useEffect(()=>{const L=T(b);L!==y&&(E(L),i&&re("/sounds/levelup.mp3",.6))},[b,y,i]),d.useEffect(()=>{b>0&&b%10===0&&(A(),Y(b),i&&re("/sounds/checkpoint.mp3",.7))},[b,i]);const T=L=>L>=100?"LEGENDARY":L>=50?"EXPERT":L>=25?"HARD":L>=10?"MEDIUM":"EASY",z=async()=>{try{const G=await(await fetch("/data/quiz_questions_bank.csv")).text(),{data:de}=hr.parse(G,{header:!0,skipEmptyLines:!0,transformHeader:pe=>pe.trim().toLowerCase()}),he=de.map((pe,Oe)=>{var ge;const Ce=[pe.option1,pe.option2,pe.option3,pe.option4].map(Ne=>(Ne||"").trim()).filter(Boolean);if(Ce.length<4)return null;let ue={a:0,b:1,c:2,d:3}[(ge=pe.answer)==null?void 0:ge.toLowerCase()];return ue===void 0&&(ue=Ce.findIndex(Ne=>Ne.toLowerCase()===(pe.answer||"").toLowerCase())),ue===-1&&(ue=0),{id:pe.id||`q_${Oe}`,prompt:(pe.question||"").trim(),options:Ce,correctIndex:ue,category:(pe.category||pe.subject||"general").trim(),difficulty:(pe.difficulty||"medium").toLowerCase()}}).filter(Boolean);P(he),D(he)}catch(L){console.error("Failed to load questions:",L)}},D=(L=j)=>{const G=L.filter(Oe=>!B.current.has(Oe.id));G.length===0&&(B.current.clear(),G.push(...L));const de=y.toLowerCase();let he=G.filter(Oe=>Oe.difficulty===de||Oe.difficulty==="medium");he.length===0&&(he=G);const pe=he[Math.floor(Math.random()*he.length)];pe&&(B.current.add(pe.id),x(pe),k(Md[y].timer),M(!1))},te=L=>{if(R)return;const G=L===S.correctIndex;ee(G),M(!0),G?X():J(),setTimeout(()=>{(p>0||G)&&(g(de=>de+1),D())},1500)},X=()=>{const L=Md[y].points;m(G=>G+L),C(G=>{const de=G+1;if(t){const he=JSON.parse(localStorage.getItem("questProgress")||"{}");he.winStreak=Math.max(he.winStreak||0,de),he.date=`${new Date().getFullYear()}-${new Date().getMonth()+1}-${new Date().getDate()}`,localStorage.setItem("questProgress",JSON.stringify(he)),de>=5&&console.log("Win streak quest completed!")}return de%5===0&&p<3&&(h(he=>Math.min(he+1,3)),i&&re("/sounds/lifeup.mp3",.8)),de}),o(Math.floor(L/10)),l(1),i&&re("/sounds/correct.mp3",.7)},J=()=>{C(0),h(L=>{const G=L-1;return G<=0&&(f("gameOver"),O()),G}),i&&re("/sounds/wrong.mp3",.7),K([200])},$=()=>{J()},A=()=>{const L={questionCount:b,totalScore:v,lives:p,correctStreak:N,timestamp:Date.now()};localStorage.setItem("survival_checkpoint",JSON.stringify(L))},H=()=>{const L=localStorage.getItem("survival_checkpoint");if(L)try{const G=JSON.parse(L);Date.now()-G.timestamp<864e5?(g(G.questionCount),m(G.totalScore),h(G.lives),C(G.correctStreak),Y(G.questionCount)):localStorage.removeItem("survival_checkpoint")}catch(G){console.error("Failed to load checkpoint:",G)}},F=()=>{localStorage.removeItem("survival_checkpoint"),Y(0)},O=()=>{const L=parseInt(localStorage.getItem("survival_highscore")||"0");v>L&&(localStorage.setItem("survival_highscore",v.toString()),localStorage.setItem("survival_highquestions",b.toString()))},Z=()=>{f("playing"),h(3),g(0),C(0),m(0),E("EASY"),B.current.clear(),F(),D()},ae=()=>{f("playing"),D()},ce=()=>{_(!0)},ne=()=>{if(t){const L=JSON.parse(localStorage.getItem("questProgress")||"{}");L.winStreak=Math.max(L.winStreak||0,N),L.date=`${new Date().getFullYear()}-${new Date().getMonth()+1}-${new Date().getDate()}`,localStorage.setItem("questProgress",JSON.stringify(L)),window.location.href="/profile/quests"}else e()},re=(L,G=.5)=>{try{const de=new Audio(L);de.volume=G,de.play()}catch{}},K=L=>{navigator.vibrate&&navigator.vibrate(L)};return d.useEffect(()=>(document.body.classList.add("hide-bottom-nav"),()=>{document.body.classList.remove("hide-bottom-nav")}),[]),d.useEffect(()=>{window.history.pushState({survivalMode:!0},"",window.location.pathname);const L=G=>{_(!0)};return window.addEventListener("popstate",L),()=>window.removeEventListener("popstate",L)},[]),u==="gameOver"?n.jsxs(n.Fragment,{children:[n.jsx(Cg,{score:v,questionsAnswered:b,highScore:parseInt(localStorage.getItem("survival_highscore")||"0"),checkpoint:Q,onRestart:Z,onContinue:Q>0?ae:null,onBack:ce}),U&&n.jsx("div",{className:"fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 px-6",children:n.jsxs("div",{className:"bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-6 max-w-sm w-full shadow-2xl slide-in border border-white/10",children:[n.jsxs("div",{className:"text-center mb-6",children:[n.jsx("div",{className:"text-5xl mb-3",children:"🚪"}),n.jsx("h3",{className:"text-xl font-bold text-white mb-2",children:"Leave the game?"}),n.jsx("p",{className:"text-white/70",children:"Your progress saves at checkpoints!"})]}),n.jsxs("div",{className:"flex gap-3",children:[n.jsx("button",{onClick:()=>_(!1),className:"flex-1 py-3 bg-gradient-to-r from-green-400 to-emerald-500 text-white rounded-2xl font-bold shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]",children:"Keep Playing"}),n.jsx("button",{onClick:ne,className:"flex-1 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-2xl font-bold shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]",children:"Exit"})]})]})})]}):S?n.jsxs(n.Fragment,{children:[n.jsx(Sg,{question:S,onAnswer:te,lives:p,questionCount:b,correctStreak:N,totalScore:v,currentDifficulty:y,timeLeft:w,showFeedback:R,lastAnswerCorrect:q,checkpoint:Q,onBack:ce,soundOn:i,setSoundOn:c}),U&&n.jsx("div",{className:"fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 px-6",children:n.jsxs("div",{className:"bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-6 max-w-sm w-full shadow-2xl slide-in border border-white/10",children:[n.jsxs("div",{className:"text-center mb-6",children:[n.jsx("div",{className:"text-5xl mb-3",children:"🚪"}),n.jsx("h3",{className:"text-xl font-bold text-white mb-2",children:"Leave the game?"}),n.jsx("p",{className:"text-white/70",children:"Your progress saves at checkpoints!"})]}),n.jsxs("div",{className:"flex gap-3",children:[n.jsx("button",{onClick:()=>_(!1),className:"flex-1 py-3 bg-gradient-to-r from-green-400 to-emerald-500 text-white rounded-2xl font-bold shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]",children:"Keep Playing"}),n.jsx("button",{onClick:ne,className:"flex-1 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-2xl font-bold shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]",children:"Exit"})]})]})})]}):n.jsx("div",{className:"min-h-screen bg-base-bg text-white flex items-center justify-center",children:n.jsx("div",{className:"text-xl",children:"Loading questions..."})})}const rr=[{id:1,name:"Sandy Beach",emoji:"🏖️",theme:{background:"from-yellow-300 via-orange-300 to-blue-400",accent:"from-yellow-400 to-orange-400",cardBg:"from-amber-500/20 to-yellow-500/20",unlockGradient:"from-yellow-400 to-amber-500"},difficulty:"EASY",difficultyRange:{min:0,max:9},questionDifficulty:["easy"],requiredCorrect:2,timeLimit:300,rewards:{perCorrectAnswer:10,gemChance:.3,gemBonus:5,speedBonus:3,perfectBonus:50,treasurePiece:"🧩",completionCoins:30},description:"Start your adventure on the sunny shores! Easy questions to warm up.",unlockRequirement:null,visualElements:{bgEmojis:["🌊","🐚","🦀","⛱️","🌺"],diggingEmoji:"⛏️",foundEmojis:["💎","🪙","✨"]}},{id:2,name:"Jungle Cave",emoji:"🌴",theme:{background:"from-green-400 via-emerald-500 to-teal-600",accent:"from-green-500 to-emerald-600",cardBg:"from-green-500/20 to-emerald-500/20",unlockGradient:"from-green-400 to-emerald-500"},difficulty:"EASY-MEDIUM",difficultyRange:{min:10,max:24},questionDifficulty:["easy","medium"],requiredCorrect:2,timeLimit:300,rewards:{perCorrectAnswer:15,gemChance:.35,gemBonus:7,speedBonus:5,perfectBonus:75,treasurePiece:"🗝️",completionCoins:50},description:"Explore the mysterious jungle caves! Watch out for tricky vines!",unlockRequirement:{island:1,treasurePiece:!0},visualElements:{bgEmojis:["🌿","🦜","🐒","🦋","🌺"],diggingEmoji:"⛏️",foundEmojis:["💎","🪙","🌟"]}},{id:3,name:"Crystal Mountain",emoji:"⛰️",theme:{background:"from-purple-400 via-pink-400 to-indigo-500",accent:"from-purple-500 to-pink-500",cardBg:"from-purple-500/20 to-pink-500/20",unlockGradient:"from-purple-400 to-pink-500"},difficulty:"MEDIUM",difficultyRange:{min:25,max:49},questionDifficulty:["medium"],requiredCorrect:2,timeLimit:300,rewards:{perCorrectAnswer:20,gemChance:.4,gemBonus:10,speedBonus:7,perfectBonus:100,treasurePiece:"💎",completionCoins:75},description:"Climb the sparkling crystal peaks! Medium challenges await!",unlockRequirement:{island:2,treasurePiece:!0},visualElements:{bgEmojis:["✨","🔮","⭐","🌟","💫"],diggingEmoji:"⚒️",foundEmojis:["💎","🪙","🌈"]}},{id:4,name:"Pirate Ship",emoji:"🏴‍☠️",theme:{background:"from-slate-600 via-blue-600 to-cyan-500",accent:"from-slate-700 to-blue-700",cardBg:"from-slate-500/20 to-blue-500/20",unlockGradient:"from-slate-500 to-blue-600"},difficulty:"MEDIUM-HARD",difficultyRange:{min:50,max:99},questionDifficulty:["medium","hard"],requiredCorrect:2,timeLimit:300,rewards:{perCorrectAnswer:30,gemChance:.45,gemBonus:15,speedBonus:10,perfectBonus:150,treasurePiece:"🗺️",completionCoins:100},description:"Ahoy matey! Navigate the pirate ship's challenging puzzles!",unlockRequirement:{island:3,treasurePiece:!0},visualElements:{bgEmojis:["⚓","🦜","💀","🌊","⛵"],diggingEmoji:"🗡️",foundEmojis:["💎","🪙","👑"]}},{id:5,name:"Volcano Peak",emoji:"🌋",theme:{background:"from-red-500 via-orange-500 to-yellow-500",accent:"from-red-600 to-orange-600",cardBg:"from-red-500/20 to-orange-500/20",unlockGradient:"from-red-500 to-orange-500"},difficulty:"HARD",difficultyRange:{min:100,max:1/0},questionDifficulty:["hard"],requiredCorrect:2,timeLimit:300,rewards:{perCorrectAnswer:50,gemChance:.5,gemBonus:25,speedBonus:15,perfectBonus:200,treasurePiece:"👑",completionCoins:150},description:"The ultimate challenge! Can you conquer the volcano?",unlockRequirement:{island:4,treasurePiece:!0},visualElements:{bgEmojis:["🔥","🌋","💥","⚡","🔴"],diggingEmoji:"⛏️",foundEmojis:["💎","🪙","🏆"]}}],ze={SHOVELS_PER_ISLAND:3,QUESTIONS_PER_ISLAND:3,SPEED_BONUS_THRESHOLD:5,MIN_CORRECT_FOR_TREASURE:2,FINAL_TREASURE_REWARD:200,FINAL_TREASURE_TITLE:"Treasure Master",DIGGING_ANIMATION_DURATION:1500,REWARD_DISPLAY_DURATION:2e3,TRANSITION_DURATION:500,STORAGE_KEYS:{PROGRESS:"treasureHunt_progress",STATS:"treasureHunt_stats",UNLOCKED_ISLANDS:"treasureHunt_unlocked",COMPLETED_ISLANDS:"treasureHunt_completed",TREASURE_PIECES:"treasureHunt_pieces"},SOUNDS:{DIG:"/sounds/dig.mp3",TREASURE_FOUND:"/sounds/treasure.mp3",GEM_FOUND:"/sounds/gem.mp3",WRONG:"/sounds/wrong.mp3",ISLAND_COMPLETE:"/sounds/islandcomplete.mp3",ISLAND_UNLOCK:"/sounds/unlock.mp3",FINAL_TREASURE:"/sounds/victory.mp3",TICK:"/sounds/tick.mp3",SHOVEL_BREAK:"/sounds/break.mp3"}},cn=e=>rr.find(t=>t.id===e),Pg=(e,t)=>{const r=cn(e);if(!r.unlockRequirement)return!0;const s=t[r.unlockRequirement.island];return s&&s.treasurePiece},Rg=(e,t)=>{const r={0:["Keep trying! You'll get it! 💪","Don't give up! Adventure awaits! 🌟","Practice makes perfect! 🎯"],1:["Good effort! Almost there! 🌈","Nice try! Keep going! ⭐","You're learning fast! 🚀"],2:["Awesome! You found treasure! 🏆","Great job, explorer! 🎉","You're amazing! ✨"],3:["PERFECT! You're a champion! 👑","INCREDIBLE! Master explorer! 🌟","LEGENDARY performance! 🏆"]},s=r[e]||r[0];return s[Math.floor(Math.random()*s.length)]},Tg=e=>rr.map(t=>{var r;return{id:t.id,piece:t.rewards.treasurePiece,collected:((r=e[t.id])==null?void 0:r.treasurePiece)||!1}});function _g({islands:e,islandProgress:t,onSelectIsland:r,onBack:s,soundOn:a,setSoundOn:i,totalStats:o}){const[l,c]=d.useState(!1),u=Tg(t),f=u.filter(h=>h.collected).length,p=Math.round(f/e.length*100);return d.useEffect(()=>(document.body.style.position="fixed",document.body.style.overflow="hidden",document.body.style.width="100%",document.body.style.height="100%",()=>{document.body.style.position="",document.body.style.overflow="",document.body.style.width="",document.body.style.height=""}),[]),n.jsxs("div",{className:"fixed inset-0 bg-gradient-to-b from-sky-400 via-blue-500 to-blue-600 overflow-hidden flex flex-col",children:[n.jsx("style",{jsx:!0,children:`
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
      `}),n.jsxs("div",{className:"absolute inset-0",children:[n.jsx("div",{className:"absolute top-10 cloud-drift",style:{animationDelay:"0s"},children:n.jsx("div",{className:"text-6xl opacity-40",children:"☁️"})}),n.jsx("div",{className:"absolute top-12 cloud-drift",style:{animationDelay:"7s",animationDuration:"25s"},children:n.jsx("div",{className:"text-5xl opacity-40",children:"☁️"})}),n.jsx("div",{className:"absolute top-10 right-12",children:n.jsx("div",{className:"text-6xl pulse-animation opacity-80",children:"☀️"})}),n.jsx("div",{className:"absolute top-16 left-20 float-animation opacity-60",children:n.jsx("div",{className:"text-2xl",children:"🦜"})})]}),n.jsxs("div",{className:"relative z-20 px-4 pt-[calc(env(safe-area-inset-top)+3rem)]",children:[n.jsxs("div",{className:"flex justify-between items-center mb-3",children:[n.jsx("button",{onClick:s,className:"w-11 h-11 glass-card rounded-2xl shadow-lg flex items-center justify-center hover:scale-105 transition-transform",children:n.jsx("span",{className:"text-xl",children:"⬅"})}),n.jsx("div",{className:"glass-card rounded-2xl px-3 py-2 shadow-lg",children:n.jsxs("div",{className:"text-white font-bold text-center",children:[n.jsx("div",{className:"text-[10px] opacity-90",children:"TREASURE HUNT"}),n.jsx("div",{className:"text-sm",children:"🏝️ Island Explorer 🏝️"})]})}),n.jsx("button",{onClick:()=>i(!a),className:"w-11 h-11 glass-card rounded-2xl shadow-lg flex items-center justify-center hover:scale-105 transition-transform",children:n.jsx("span",{className:"text-xl",children:a?"🔊":"🔇"})})]}),n.jsxs("div",{className:"glass-card rounded-2xl p-3 shadow-xl mt-2",children:[n.jsxs("div",{className:"flex items-center justify-between mb-2",children:[n.jsx("span",{className:"text-white font-bold text-sm",children:"Adventure Progress"}),n.jsxs("span",{className:"text-white font-bold text-sm",children:[p,"%"]})]}),n.jsx("div",{className:"w-full h-2.5 bg-white/20 rounded-full overflow-hidden",children:n.jsx("div",{className:"h-full bg-gradient-to-r from-yellow-400 to-amber-500 transition-all duration-1000",style:{width:`${p}%`}})}),n.jsx("button",{onClick:()=>c(!0),className:"mt-2.5 w-full py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-bold text-sm hover:scale-[1.02] transition-transform",children:n.jsxs("div",{className:"flex items-center justify-center gap-2",children:[n.jsx("span",{children:"🏆"}),n.jsxs("span",{children:["Treasure Pieces: ",f,"/5"]}),n.jsx("span",{children:"🏆"})]})})]})]}),n.jsx("div",{className:"flex-1 flex items-center justify-center px-4 py-4",children:n.jsxs("div",{className:"w-full max-w-md",children:[n.jsx("div",{className:"grid grid-cols-2 gap-3",children:e.slice(0,4).map(h=>{const b=t[h.id],g=b==null?void 0:b.unlocked,N=b==null?void 0:b.treasurePiece,C=b==null?void 0:b.perfectScore;return n.jsxs("button",{onClick:()=>r(h.id),disabled:!g,className:`relative aspect-square rounded-2xl transition-all ${g?"hover:scale-105 active:scale-95 shadow-xl":"opacity-50 grayscale"}`,children:[n.jsx("div",{className:`absolute inset-0 rounded-2xl bg-gradient-to-br ${g?h.theme.background:"from-gray-400 to-gray-500"}`,children:g&&n.jsxs(n.Fragment,{children:[n.jsx("div",{className:"absolute top-1 right-1 text-lg sparkle-animation",children:"✨"}),n.jsx("div",{className:"absolute bottom-1 left-1 text-sm sparkle-animation",style:{animationDelay:"1s"},children:"⭐"})]})}),!g&&n.jsx("div",{className:"absolute inset-0 rounded-2xl bg-black/30 flex items-center justify-center",children:n.jsx("div",{className:"text-4xl",children:"🔒"})}),n.jsxs("div",{className:"relative h-full flex flex-col items-center justify-center p-3",children:[n.jsx("div",{className:"absolute top-1 left-1 w-7 h-7 bg-white/30 rounded-full flex items-center justify-center",children:n.jsx("span",{className:"text-white font-bold text-sm",children:h.id})}),C&&n.jsx("div",{className:"absolute top-1 right-1 text-lg",children:"💯"}),n.jsx("div",{className:`text-5xl mb-1 ${g?"bounce-animation":""}`,children:g?h.emoji:"❓"}),n.jsx("div",{className:"text-white font-bold text-sm text-center mb-1",children:h.name}),n.jsx("div",{className:`px-2 py-0.5 rounded-full text-[10px] font-bold ${g?"bg-white/30":"bg-black/30"} text-white`,children:h.difficulty}),N&&n.jsx("div",{className:"absolute bottom-1 text-2xl pulse-animation",children:h.rewards.treasurePiece}),(b==null?void 0:b.attempts)>0&&n.jsxs("div",{className:"absolute -bottom-1 -right-1 bg-white/90 text-gray-800 rounded-full px-2 py-0.5 text-[10px] font-bold flex items-center gap-1",children:[n.jsxs("span",{children:[b.bestScore,"/3"]}),n.jsx("span",{children:"⭐"})]})]})]},h.id)})}),n.jsx("div",{className:"flex justify-center mt-3",children:e.slice(4,5).map(h=>{const b=t[h.id],g=b==null?void 0:b.unlocked,N=b==null?void 0:b.treasurePiece,C=b==null?void 0:b.perfectScore;return n.jsxs("button",{onClick:()=>r(h.id),disabled:!g,className:`relative w-[calc(50%-6px)] aspect-square rounded-2xl transition-all ${g?"hover:scale-105 active:scale-95 shadow-xl":"opacity-50 grayscale"}`,children:[n.jsxs("div",{className:`absolute inset-0 rounded-2xl bg-gradient-to-br ${g?h.theme.background:"from-gray-400 to-gray-500"}`,children:[g&&n.jsxs(n.Fragment,{children:[n.jsx("div",{className:"absolute top-1 right-1 text-lg sparkle-animation",children:"✨"}),n.jsx("div",{className:"absolute bottom-1 left-1 text-sm sparkle-animation",style:{animationDelay:"1s"},children:"⭐"})]}),!g&&n.jsx("div",{className:"absolute inset-0 rounded-2xl bg-gradient-to-t from-yellow-400/20 to-transparent animate-pulse"})]}),!g&&n.jsx("div",{className:"absolute inset-0 rounded-2xl bg-black/30 flex items-center justify-center",children:n.jsx("div",{className:"text-4xl",children:"🔒"})}),n.jsxs("div",{className:"relative h-full flex flex-col items-center justify-center p-3",children:[n.jsx("div",{className:"absolute top-1 left-1 w-7 h-7 bg-white/30 rounded-full flex items-center justify-center",children:n.jsx("span",{className:"text-white font-bold text-sm",children:h.id})}),C&&n.jsx("div",{className:"absolute top-1 right-1 text-lg",children:"💯"}),n.jsx("div",{className:`text-5xl mb-1 ${g?"bounce-animation":""}`,children:g?h.emoji:"👑"}),n.jsx("div",{className:"text-white font-bold text-sm text-center mb-1",children:h.name}),n.jsx("div",{className:`px-2 py-0.5 rounded-full text-[10px] font-bold ${g?"bg-white/30":"bg-black/30"} text-white`,children:h.difficulty}),N&&n.jsx("div",{className:"absolute bottom-1 text-2xl pulse-animation",children:h.rewards.treasurePiece}),(b==null?void 0:b.attempts)>0&&n.jsxs("div",{className:"absolute -bottom-1 -right-1 bg-white/90 text-gray-800 rounded-full px-2 py-0.5 text-[10px] font-bold flex items-center gap-1",children:[n.jsxs("span",{children:[b.bestScore,"/3"]}),n.jsx("span",{children:"⭐"})]})]})]},h.id)})})]})}),n.jsx("div",{className:"relative z-20 px-4 pb-[calc(env(safe-area-inset-bottom)+3rem)]",children:n.jsx("div",{className:"bg-gradient-to-r from-indigo-500/30 to-purple-500/30 backdrop-blur-lg rounded-2xl shadow-xl border border-white/20",children:n.jsxs("div",{className:"grid grid-cols-3 gap-2 text-center",children:[n.jsxs("div",{className:"relative",children:[n.jsx("div",{className:"text-2xl mb-0.5 filter drop-shadow-lg",children:"💰"}),n.jsx("div",{className:"text-yellow-300 font-black text-lg",children:o.totalCoinsEarned}),n.jsx("div",{className:"text-white/80 text-[10px] font-medium",children:"Total Coins"})]}),n.jsxs("div",{className:"relative",children:[n.jsx("div",{className:"text-2xl mb-0.5 filter drop-shadow-lg",children:"💎"}),n.jsx("div",{className:"text-cyan-300 font-black text-lg",children:o.totalGemsFound}),n.jsx("div",{className:"text-white/80 text-[10px] font-medium",children:"Gems Found"})]}),n.jsxs("div",{className:"relative",children:[n.jsx("div",{className:"text-2xl mb-0.5 filter drop-shadow-lg",children:"📝"}),n.jsxs("div",{className:"text-green-300 font-black text-lg",children:[o.totalCorrectAnswers,"/",o.totalQuestionsAnswered]}),n.jsx("div",{className:"text-white/80 text-[10px] font-medium",children:"Correct"})]})]})})}),l&&n.jsx("div",{className:"fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 px-6",children:n.jsxs("div",{className:"bg-gradient-to-br from-purple-600 to-pink-600 rounded-3xl p-6 max-w-sm w-full shadow-2xl",children:[n.jsx("h3",{className:"text-2xl font-bold text-white text-center mb-6",children:"🏆 Treasure Collection 🏆"}),n.jsx("div",{className:"flex justify-center gap-4 mb-6",children:u.map((h,b)=>n.jsx("div",{className:`text-5xl ${h.collected?"":"opacity-30 grayscale"}`,children:h.collected?h.piece:"❓"},h.id))}),n.jsx("div",{className:"text-center text-white mb-6",children:f===5?n.jsxs("div",{children:[n.jsx("p",{className:"text-lg font-bold mb-2",children:"🎉 COMPLETE! 🎉"}),n.jsx("p",{className:"text-sm opacity-90",children:"You're a true Treasure Master!"})]}):n.jsx("p",{className:"text-sm opacity-90",children:"Collect all 5 pieces to unlock the final treasure!"})}),n.jsx("button",{onClick:()=>c(!1),className:"w-full py-3 bg-white/20 backdrop-blur rounded-2xl text-white font-bold hover:bg-white/30 transition-colors",children:"Close"})]})})]})}function Lg({island:e,progress:t,onStart:r,onClose:s,soundOn:a}){const[i,o]=d.useState(!1);d.useEffect(()=>{o(!0)},[]),d.useEffect(()=>{const h=b=>{s()};return window.history.pushState({islandDetail:!0},"",window.location.pathname),window.addEventListener("popstate",h),()=>window.removeEventListener("popstate",h)},[s]);const l=(t==null?void 0:t.attempts)>0,c=t==null?void 0:t.treasurePiece;t==null||t.perfectScore;const u=(t==null?void 0:t.bestScore)||0,f=()=>{if(a){const h=new Audio("/sounds/start.mp3");h.volume=.5,h.play().catch(()=>{})}r()},p=h=>{const b=Math.floor(h/60),g=h%60;return`${b}:${g.toString().padStart(2,"0")}`};return n.jsxs("div",{className:"fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50 p-4",children:[n.jsx("style",{jsx:!0,children:`
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
      `}),n.jsxs("div",{className:`relative w-full max-w-sm bg-gradient-to-br ${e.theme.background} rounded-2xl shadow-2xl ${i?"slide-up":""}`,children:[n.jsx("div",{className:"relative p-4 pb-2",children:n.jsxs("div",{className:"text-center",children:[n.jsx("div",{className:"text-6xl mb-2 pulse-animation",children:e.emoji}),n.jsx("h2",{className:"text-2xl font-black text-white",children:e.name}),n.jsx("div",{className:"inline-block px-3 py-1 bg-white/20 backdrop-blur rounded-full mt-2",children:n.jsxs("span",{className:"text-white font-bold text-sm",children:["Level ",e.id," • ",e.difficulty]})})]})}),n.jsxs("div",{className:"px-4 py-3 space-y-2",children:[n.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[n.jsxs("div",{className:"bg-black/10 backdrop-blur rounded-xl p-3 text-center",children:[n.jsx("div",{className:"text-white/70 text-xs mb-1",children:"Time"}),n.jsx("div",{className:"text-white font-bold",children:p(e.timeLimit)})]}),n.jsxs("div",{className:"bg-black/10 backdrop-blur rounded-xl p-3 text-center",children:[n.jsx("div",{className:"text-white/70 text-xs mb-1",children:"Questions"}),n.jsx("div",{className:"text-white font-bold",children:ze.QUESTIONS_PER_ISLAND})]})]}),n.jsxs("div",{className:"bg-black/10 backdrop-blur rounded-xl p-3 flex items-center justify-between",children:[n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx("span",{className:"text-2xl",children:e.rewards.treasurePiece}),n.jsx("span",{className:"text-white font-medium",children:"To Win"})]}),n.jsxs("span",{className:"text-white font-bold",children:[e.requiredCorrect,"/3 Correct"]})]}),n.jsxs("div",{className:"bg-black/10 backdrop-blur rounded-xl p-3",children:[n.jsx("div",{className:"text-white font-bold text-sm mb-2",children:"Rewards"}),n.jsxs("div",{className:"grid grid-cols-4 gap-2 text-center",children:[n.jsxs("div",{children:[n.jsx("div",{className:"text-xl",children:"💰"}),n.jsx("div",{className:"text-white/70 text-xs",children:e.rewards.perCorrectAnswer})]}),n.jsxs("div",{children:[n.jsx("div",{className:"text-xl",children:"💎"}),n.jsxs("div",{className:"text-white/70 text-xs",children:[Math.round(e.rewards.gemChance*100),"%"]})]}),n.jsxs("div",{children:[n.jsx("div",{className:"text-xl",children:"⚡"}),n.jsxs("div",{className:"text-white/70 text-xs",children:["+",e.rewards.speedBonus]})]}),n.jsxs("div",{children:[n.jsx("div",{className:"text-xl",children:"🏆"}),n.jsxs("div",{className:"text-white/70 text-xs",children:["+",e.rewards.perfectBonus]})]})]})]}),l&&n.jsx("div",{className:"bg-black/10 backdrop-blur rounded-xl p-3",children:n.jsxs("div",{className:"flex items-center justify-between",children:[n.jsx("div",{className:"flex gap-1",children:[...Array(3)].map((h,b)=>n.jsx("span",{className:"text-lg",children:b<u?"⭐":"☆"},b))}),n.jsxs("div",{className:"text-white text-sm",children:[n.jsxs("span",{className:"font-bold",children:[u,"/3"]})," • ",t.attempts," tries"]}),c&&n.jsx("div",{className:"text-2xl",children:e.rewards.treasurePiece})]})})]}),n.jsxs("div",{className:"p-4 pt-2 space-y-2",children:[n.jsx("button",{onClick:f,className:"w-full py-3 bg-gradient-to-r from-green-400 to-emerald-500 text-white rounded-xl font-black text-base shadow-lg hover:shadow-xl transition-all hover:scale-[1.02] active:scale-[0.98]",children:n.jsxs("span",{className:"flex items-center justify-center gap-2",children:[n.jsx("span",{className:"text-xl",children:"🏴‍☠️"}),n.jsx("span",{children:l?"Play Again":"Start Adventure"}),n.jsx("span",{className:"text-xl",children:"🏴‍☠️"})]})}),n.jsx("button",{onClick:s,className:"w-full py-2 bg-white/20 backdrop-blur text-white rounded-xl font-bold text-sm hover:bg-white/30 transition-colors",children:"Back to Map"})]})]})]})}function Ag({shovelsRemaining:e,showBreak:t=!1}){const[r,s]=d.useState(!1),[a,i]=d.useState(e),o=3;return d.useEffect(()=>{e<a&&(s(!0),setTimeout(()=>s(!1),1e3)),i(e)},[e,a]),n.jsxs("div",{className:"inline-block",children:[n.jsx("style",{jsx:!0,children:`
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
                  `,children:u||f?"⛏️":"🪦"}),f&&n.jsxs(n.Fragment,{children:[n.jsx("div",{className:"absolute inset-0 pointer-events-none",children:n.jsxs("svg",{className:"w-full h-full",viewBox:"0 0 40 40",children:[n.jsx("path",{d:"M20,10 L18,20 L22,30",stroke:"#ff4444",strokeWidth:"2",fill:"none",opacity:"0.8",className:"shovel-crack"}),n.jsx("path",{d:"M15,15 L20,20 L25,18",stroke:"#ff4444",strokeWidth:"1.5",fill:"none",opacity:"0.6",className:"shovel-crack",style:{animationDelay:"0.1s"}})]})}),n.jsxs("div",{className:"absolute inset-0 pointer-events-none",children:[n.jsx("span",{className:"absolute top-0 left-1/2 text-xs shovel-fall",children:"💔"}),n.jsx("span",{className:"absolute top-1/2 left-0 text-xs shovel-fall",style:{animationDelay:"0.2s"},children:"✨"}),n.jsx("span",{className:"absolute top-1/2 right-0 text-xs shovel-fall",style:{animationDelay:"0.3s"},children:"💥"})]})]}),n.jsx("div",{className:"absolute -bottom-1 left-1/2 -translate-x-1/2",children:n.jsx("span",{className:`text-xs font-bold ${u?"text-blue-600":"text-white/30"}`,children:c+1})})]},c)})}),e===0&&n.jsx("span",{className:"text-red-400 text-sm font-bold animate-pulse ml-2",children:"No shovels left!"}),e===1&&n.jsx("span",{className:"text-red-500 text-sm font-bold ml-2",children:"Last chance!"})]})})]})}function Ig({island:e,foundGem:t,onComplete:r}){const[s,a]=d.useState("digging"),[i,o]=d.useState(!1),[l,c]=d.useState(!1);return d.useEffect(()=>{(async()=>{await new Promise(f=>setTimeout(f,800)),a("revealing"),o(!0),t&&(await new Promise(f=>setTimeout(f,400)),c(!0)),await new Promise(f=>setTimeout(f,1e3)),a("complete"),await new Promise(f=>setTimeout(f,300)),r()})()},[t,r]),n.jsxs("div",{className:"fixed inset-0 z-40 pointer-events-none flex items-center justify-center",children:[n.jsx("style",{jsx:!0,children:`
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
      `}),s==="digging"&&n.jsxs("div",{className:"relative",children:[n.jsx("div",{className:"text-8xl dig-animation",children:e.visualElements.diggingEmoji}),[...Array(8)].map((u,f)=>n.jsx("div",{className:"dirt-particle text-4xl",style:{"--fly-x":`${(Math.random()-.5)*200}px`,"--fly-y":`${-Math.random()*150-50}px`,left:"50%",top:"60%",animationDelay:`${f*.1}s`},children:"🟫"},f)),n.jsx("div",{className:"absolute -bottom-4 left-1/2 -translate-x-1/2",children:n.jsx("div",{className:"text-6xl opacity-50",children:"💨"})})]}),s==="revealing"&&n.jsxs("div",{className:"relative",children:[i&&n.jsxs("div",{className:"relative",children:[n.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:n.jsx("div",{className:"w-32 h-32 rounded-full bg-yellow-400/30 blur-xl glow-effect"})}),n.jsxs("div",{className:"relative flex items-center justify-center",children:[n.jsx("div",{className:"text-7xl treasure-reveal treasure-float",children:"💰"}),n.jsx("div",{className:"absolute text-5xl coin-spin",style:{left:"-30px"},children:"🪙"}),n.jsx("div",{className:"absolute text-5xl coin-spin",style:{right:"-30px",animationDelay:"0.5s"},children:"🪙"}),n.jsx("div",{className:"absolute text-4xl coin-spin",style:{top:"-30px",animationDelay:"1s"},children:"🪙"})]}),[...Array(6)].map((u,f)=>n.jsx("div",{className:"absolute text-3xl star-burst",style:{left:"50%",top:"50%",transform:`translate(-50%, -50%) rotate(${f*60}deg) translateY(-40px)`,animationDelay:`${f*.1}s`},children:"⭐"},f))]}),l&&n.jsxs("div",{className:"absolute -top-10 left-1/2 -translate-x-1/2",children:[n.jsxs("div",{className:"relative",children:[n.jsx("div",{className:"text-6xl gem-sparkle",children:"💎"}),n.jsx("div",{className:"absolute -top-2 -left-2 text-2xl animate-pulse",children:"✨"}),n.jsx("div",{className:"absolute -top-2 -right-2 text-2xl animate-pulse",style:{animationDelay:"0.3s"},children:"✨"}),n.jsx("div",{className:"absolute -bottom-2 left-1/2 -translate-x-1/2 text-2xl animate-pulse",style:{animationDelay:"0.6s"},children:"✨"})]}),n.jsx("div",{className:"absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap",children:n.jsx("span",{className:"text-cyan-300 font-black text-lg drop-shadow-lg",children:"RARE GEM!"})})]}),n.jsx("div",{className:"absolute -bottom-16 left-1/2 -translate-x-1/2 text-center",children:n.jsx("div",{className:"text-white font-black text-2xl drop-shadow-lg",children:t?"AMAZING FIND!":"TREASURE FOUND!"})})]}),s==="complete"&&n.jsx("div",{className:"relative opacity-0 transition-opacity duration-300",children:n.jsx("div",{className:"text-7xl",children:"✅"})})]})}function Dg({island:e,question:t,questionNumber:r,totalQuestions:s,shovelsRemaining:a,timeRemaining:i,coinsEarned:o,gemsFound:l,onAnswer:c,onQuit:u,soundOn:f,setSoundOn:p}){const[h,b]=d.useState(null),[g,N]=d.useState(!1),[C,v]=d.useState(!1),[m,y]=d.useState(!1),[E,j]=d.useState(!1),[P,S]=d.useState(!1),[x,w]=d.useState(!1),k=d.useRef(null);d.useEffect(()=>{b(null),N(!1),v(!1),y(!1),j(!1),w(!1)},[t]),d.useEffect(()=>{const Q=Y=>{Y.stopImmediatePropagation(),P||(S(!0),window.history.pushState({questionScreen:!0},"",window.location.pathname))};return window.history.pushState({questionScreen:!0},"",window.location.pathname),window.addEventListener("popstate",Q,!0),()=>window.removeEventListener("popstate",Q,!0)},[P]);const R=Q=>{const Y=Math.floor(Q/60),U=Q%60;return`${Y}:${U.toString().padStart(2,"0")}`},M=()=>i<=10?"critical":i<=30?"warning":"normal",q=Q=>{if(x||g)return;b(Q),w(!0);const Y=Q===t.correctIndex;v(Y),setTimeout(()=>{if(N(!0),f)if(Y){const U=new Audio("/sounds/dig.mp3");U.volume=.5,U.play().catch(()=>{})}else{const U=new Audio("/sounds/wrong.mp3");U.volume=.5,U.play().catch(()=>{})}Y&&(y(!0),Math.random()<e.rewards.gemChance&&setTimeout(()=>{if(j(!0),f){const _=new Audio("/sounds/gem.mp3");_.volume=.6,_.play().catch(()=>{})}},800)),setTimeout(()=>{c(Q)},Y?2e3:1500)},300)},ee=M();return n.jsxs("div",{className:`min-h-screen bg-gradient-to-br ${e.theme.background} relative overflow-hidden`,children:[n.jsx("style",{jsx:!0,children:`
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
      `}),n.jsx("div",{className:"absolute inset-0 pointer-events-none",children:e.visualElements.bgEmojis.map((Q,Y)=>n.jsx("div",{className:"absolute text-7xl opacity-10 float-animation",style:{top:`${20+Y*15}%`,left:`${10+Y*18}%`,animationDelay:`${Y*.5}s`,animationDuration:`${3+Y}s`},children:Q},Y))}),n.jsxs("div",{className:"relative z-10 px-3 pt-[calc(env(safe-area-inset-top)+4rem)]",children:[n.jsxs("div",{className:"flex justify-between items-center mb-3",children:[n.jsx("button",{onClick:()=>S(!0),className:"w-10 h-10 glass-card rounded-xl shadow-lg flex items-center justify-center hover:scale-105 transition-transform",children:n.jsx("span",{className:"text-xl",children:"⬅️"})}),n.jsx("div",{className:"glass-card rounded-xl px-3 py-1.5 shadow-lg",children:n.jsxs("div",{className:"flex items-center gap-1.5",children:[n.jsx("span",{className:"text-xl",children:e.emoji}),n.jsx("span",{className:"text-gray-800 font-bold text-sm",children:e.name})]})}),n.jsx("button",{onClick:()=>p(!f),className:"w-10 h-10 glass-card rounded-xl shadow-lg flex items-center justify-center hover:scale-105 transition-transform",children:n.jsx("span",{className:"text-xl",children:f?"🔊":"🔇"})})]}),n.jsxs("div",{className:"glass-card rounded-xl p-3 shadow-xl mb-3",children:[n.jsxs("div",{className:"grid grid-cols-4 gap-2",children:[n.jsxs("div",{className:"text-center",children:[n.jsx("div",{className:`text-xl font-black ${ee==="critical"?"text-red-600 time-pulse-critical":ee==="warning"?"text-orange-600":"text-gray-800"}`,children:R(i)}),n.jsx("div",{className:"text-[10px] text-gray-700 font-medium",children:"Time"})]}),n.jsxs("div",{className:"text-center",children:[n.jsxs("div",{className:"text-xl font-black text-gray-800",children:[r,"/",s]}),n.jsx("div",{className:"text-[10px] text-gray-700 font-medium",children:"Question"})]}),n.jsxs("div",{className:"text-center relative",children:[n.jsx("div",{className:"text-xl font-black text-orange-600",children:o}),n.jsx("div",{className:"text-[10px] text-gray-700 font-medium",children:"Coins"}),g&&C&&n.jsx("div",{className:"absolute -top-3 left-1/2 -translate-x-1/2",children:n.jsxs("span",{className:"text-orange-600 font-bold text-xs coin-float",children:["+",e.rewards.perCorrectAnswer]})})]}),n.jsxs("div",{className:"text-center relative",children:[n.jsx("div",{className:"text-xl font-black text-blue-600",children:l}),n.jsx("div",{className:"text-[10px] text-gray-700 font-medium",children:"Gems"}),E&&n.jsx("div",{className:"absolute -top-3 left-1/2 -translate-x-1/2",children:n.jsx("span",{className:"text-blue-600 text-xl gem-sparkle",children:"💎"})})]})]}),n.jsx("div",{className:"mt-2",children:n.jsx("div",{className:"w-full h-1.5 bg-gray-800/20 rounded-full overflow-hidden",children:n.jsx("div",{className:"h-full bg-gradient-to-r from-green-500 to-emerald-600 progress-bar",style:{width:`${(r-1)/s*100}%`}})})})]}),n.jsx("div",{className:"flex justify-center mb-3 pt-2",children:n.jsx(Ag,{shovelsRemaining:a,showBreak:g&&!C})})]}),n.jsxs("div",{className:"px-3 pt-8 slide-in",children:[n.jsxs("div",{ref:k,className:`glass-card rounded-2xl shadow-xl p-4 mb-4 ${g&&!C?"wrong-shake":""}`,children:[n.jsx("div",{className:"text-center mb-2",children:n.jsxs("span",{className:"text-xs font-bold text-gray-600 uppercase tracking-wider",children:["Question ",r]})}),n.jsx("h2",{className:"text-lg font-bold text-center text-gray-800 leading-relaxed",children:t.prompt})]}),n.jsx("div",{className:"space-y-2.5",children:t.options.map((Q,Y)=>{const U=["A","B","C","D"],_=h===Y,I=Y===t.correctIndex;let B="glass-card option-card",T="border border-gray-800/20";return g&&(I?(B+=" correct-pulse",T="border-2 border-green-500 bg-green-400/20"):_&&!C&&(B+=" wrong-shake",T="border-2 border-red-500 bg-red-400/20"),B+=" disabled"),n.jsx("button",{onClick:()=>q(Y),disabled:x,className:`w-full p-3 rounded-xl shadow-lg ${B} ${T}`,children:n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsx("div",{className:`w-10 h-10 rounded-lg bg-gradient-to-br ${Y===0?"from-blue-400 to-blue-500":Y===1?"from-green-400 to-green-500":Y===2?"from-yellow-400 to-yellow-500":"from-purple-400 to-purple-500"} text-white font-bold text-lg flex items-center justify-center shadow-md`,children:U[Y]}),n.jsx("span",{className:"flex-1 text-left font-medium text-gray-800 text-sm",children:Q}),g&&I&&n.jsx("span",{className:"text-2xl",children:"✅"}),g&&_&&!C&&n.jsx("span",{className:"text-2xl",children:"❌"})]})},Y)})}),g&&n.jsx("div",{className:"mt-3 text-center slide-in",children:n.jsx("p",{className:"text-base font-bold text-gray-800",children:C?`Great job! Let's dig for treasure! ${e.visualElements.diggingEmoji}`:"Oops! Your shovel broke! Try the next question! 💪"})})]}),m&&n.jsx(Ig,{island:e,foundGem:E,onComplete:()=>y(!1)}),P&&n.jsx("div",{className:"fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 px-6",children:n.jsxs("div",{className:"bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-6 max-w-sm w-full shadow-2xl slide-in border border-white/10",children:[n.jsxs("div",{className:"text-center mb-6",children:[n.jsx("div",{className:"text-5xl mb-3",children:"🗺️"}),n.jsx("h3",{className:"text-xl font-bold text-white mb-2",children:"Leave the Island?"}),n.jsx("p",{className:"text-white/70",children:"Your progress won't be saved!"})]}),n.jsxs("div",{className:"flex gap-3",children:[n.jsx("button",{onClick:()=>S(!1),className:"flex-1 py-3 bg-gradient-to-r from-green-400 to-emerald-500 text-white rounded-2xl font-bold shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]",children:"Keep Playing"}),n.jsx("button",{onClick:u,className:"flex-1 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-2xl font-bold shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]",children:"Leave Island"})]})]})})]})}function Mg({island:e,session:t,earnedTreasure:r,onRetry:s,onContinue:a,soundOn:i}){const[o,l]=d.useState(0),[c,u]=d.useState(!1),[f,p]=d.useState(!1),h=t.correctAnswers===ze.QUESTIONS_PER_ISLAND,b=Rg(t.correctAnswers,e.id);return d.useEffect(()=>{const g=t.coinsEarned,N=2e3,C=30,v=g/C;let m=0;const y=setInterval(()=>{m+=v,m>=g?(l(g),clearInterval(y),r&&setTimeout(()=>u(!0),500),setTimeout(()=>p(!0),r?1500:500)):l(Math.floor(m))},N/C);return()=>clearInterval(y)},[t.coinsEarned,r]),n.jsxs("div",{className:`fixed inset-0 bg-gradient-to-br ${e.theme.background} overflow-hidden flex flex-col`,children:[n.jsx("style",{jsx:!0,children:`
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
      `}),n.jsx("div",{className:"absolute inset-0 pointer-events-none",children:h&&[...Array(10)].map((g,N)=>n.jsx("div",{className:"absolute confetti-fall",style:{left:`${Math.random()*100}%`,animationDelay:`${Math.random()*3}s`,fontSize:`${20+Math.random()*20}px`},children:["🎉","⭐","🎊","✨"][Math.floor(Math.random()*4)]},N))}),n.jsxs("div",{className:"relative z-10 flex-1 flex flex-col items-center justify-center px-4 py-4",children:[n.jsxs("div",{className:"mb-3 text-center slide-up",children:[n.jsx("h1",{className:"text-2xl font-black text-white mb-2",children:r?"TREASURE FOUND!":"ISLAND COMPLETE!"}),n.jsx("div",{className:"text-5xl bounce-animation",children:r?e.rewards.treasurePiece:"🏝️"})]}),n.jsxs("div",{className:"glass-card rounded-2xl p-3 max-w-md w-full mb-2 slide-up",style:{animationDelay:"0.2s",background:"rgba(46, 46, 32, 0.25)"},children:[n.jsxs("div",{className:"text-center mb-2",children:[n.jsxs("div",{className:"text-3xl font-black text-white mb-1",children:[t.correctAnswers,"/",ze.QUESTIONS_PER_ISLAND]}),n.jsx("div",{className:"text-white/80 font-medium",children:"Questions Correct"})]}),f&&n.jsx("div",{className:"flex justify-center gap-2 mb-2",children:[...Array(3)].map((g,N)=>n.jsx("div",{className:`text-3xl ${N<t.correctAnswers?"star-pop":""}`,style:{animationDelay:`${N*.2}s`},children:N<t.correctAnswers?"⭐":"☆"},N))}),c&&r&&n.jsxs("div",{className:"text-center mb-2",children:[n.jsx("div",{className:"text-5xl treasure-shine mb-1",children:e.rewards.treasurePiece}),n.jsx("div",{className:"text-white font-bold text-lg",children:"Treasure Piece Earned!"})]}),n.jsxs("div",{className:"grid grid-cols-2 gap-2 mb-2",children:[n.jsxs("div",{className:"glass-card rounded-2xl p-4 text-center",children:[n.jsx("div",{className:"text-4xl mb-1",children:"🪙"}),n.jsx("div",{className:"text-3xl font-black text-yellow-300",children:o}),n.jsx("div",{className:"text-white/70 text-sm",children:"Coins Earned"})]}),n.jsxs("div",{className:"glass-card rounded-2xl p-4 text-center",children:[n.jsx("div",{className:"text-4xl mb-2",children:"💎"}),n.jsx("div",{className:"text-3xl font-black text-cyan-300",children:t.gemsFound}),n.jsx("div",{className:"text-white/70 text-sm",children:"Gems Found"})]})]}),n.jsx("div",{className:"text-center p-4 bg-white/10 rounded-1xl",children:n.jsx("p",{className:"text-white font-medium text-lg",children:b})}),h&&n.jsx("div",{className:"mt-4 text-center",children:n.jsx("div",{className:"inline-block px-6 py-3 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full",children:n.jsx("span",{className:"text-white font-black text-lg",children:"💯 PERFECT SCORE! 💯"})})})]}),n.jsxs("div",{className:"space-y-3 w-full max-w-md slide-up",style:{animationDelay:"0.4s"},children:[!r&&n.jsx("button",{onClick:s,className:"w-full py-4 bg-gradient-to-r from-orange-400 to-red-500 text-white rounded-2xl font-black text-lg shadow-xl hover:shadow-2xl transition-all hover:scale-[1.02] active:scale-[0.98]",children:n.jsxs("div",{className:"flex items-center justify-center gap-3",children:[n.jsx("span",{className:"text-2xl",children:"🔄"}),n.jsx("span",{children:"Try Again"})]})}),n.jsx("button",{onClick:a,className:"w-full py-3 bg-gradient-to-r from-white to-gray-100 text-gray-800 rounded-2xl font-black text-lg shadow-xl hover:shadow-2xl transition-all hover:scale-[1.02] active:scale-[0.98]",children:n.jsxs("div",{className:"flex items-center justify-center gap-3",children:[n.jsx("span",{className:"text-2xl",children:"🗺️"}),n.jsx("span",{children:"Back to Map"})]})})]})]})]})}function zg({totalStats:e,onContinue:t,soundOn:r}){const[s,a]=d.useState(!1),[i,o]=d.useState(!1),[l,c]=d.useState(!1),[u,f]=d.useState(!1),[p,h]=d.useState(!1);return d.useEffect(()=>{(async()=>{await new Promise(g=>setTimeout(g,500)),a(!0),await new Promise(g=>setTimeout(g,1e3)),o(!0),h(!0),await new Promise(g=>setTimeout(g,800)),c(!0),await new Promise(g=>setTimeout(g,1e3)),f(!0)})()},[]),n.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-purple-600 via-pink-600 to-yellow-500 relative overflow-hidden",children:[n.jsx("style",{jsx:!0,children:`
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
      `}),p&&n.jsx("div",{className:"fixed inset-0 pointer-events-none",children:[...Array(15)].map((b,g)=>n.jsx("div",{className:"absolute firework",style:{left:`${20+Math.random()*60}%`,top:`${20+Math.random()*60}%`,animationDelay:`${Math.random()*2}s`,fontSize:`${40+Math.random()*40}px`},children:["✨","⭐","💫","🌟"][Math.floor(Math.random()*4)]},g))}),n.jsx("div",{className:"fixed inset-0 pointer-events-none",children:[...Array(20)].map((b,g)=>n.jsx("div",{className:"absolute coin-rain",style:{left:`${Math.random()*100}%`,animationDelay:`${Math.random()*3}s`,animationDuration:`${3+Math.random()*2}s`,fontSize:`${20+Math.random()*20}px`},children:["🪙","💰","💎"][Math.floor(Math.random()*3)]},g))}),n.jsxs("div",{className:"relative z-10 flex flex-col items-center justify-center min-h-screen px-6",children:[n.jsxs("div",{className:"text-center mb-8",children:[n.jsx("h1",{className:"text-6xl font-black text-white mb-4",children:"LEGENDARY!"}),n.jsx("div",{className:"text-8xl bounce-animation",children:"👑"})]}),s&&n.jsxs("div",{className:`relative mb-8 ${s?"chest-appear":""}`,children:[n.jsx("div",{className:`text-[150px] ${i?"chest-open":""}`,children:"📦"}),i&&n.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:rr.map((b,g)=>n.jsx("div",{className:"absolute text-6xl float-animation treasure-glow",style:{transform:`rotate(${g*72}deg) translateY(-100px)`,animationDelay:`${g*.2}s`},children:b.rewards.treasurePiece},b.id))})]}),l&&n.jsxs("div",{className:"glass-card rounded-3xl p-6 max-w-md w-full mb-6",children:[n.jsx("h2",{className:"text-2xl font-black text-white text-center mb-6",children:"🏆 FINAL TREASURE UNLOCKED! 🏆"}),n.jsx("div",{className:"bg-gradient-to-r from-yellow-400 to-amber-500 rounded-2xl p-4 mb-4",children:n.jsxs("div",{className:"text-center",children:[n.jsx("div",{className:"text-5xl mb-2",children:"💰"}),n.jsx("div",{className:"text-4xl font-black text-white",children:ze.FINAL_TREASURE_REWARD}),n.jsx("div",{className:"text-white/90 font-medium",children:"Bonus Coins!"})]})}),n.jsxs("div",{className:"grid grid-cols-2 gap-3 mb-4",children:[n.jsxs("div",{className:"glass-card rounded-xl p-3 text-center",children:[n.jsx("div",{className:"text-3xl mb-1",children:"🏝️"}),n.jsx("div",{className:"text-2xl font-black text-white",children:"5/5"}),n.jsx("div",{className:"text-white/70 text-xs",children:"Islands"})]}),n.jsxs("div",{className:"glass-card rounded-xl p-3 text-center",children:[n.jsx("div",{className:"text-3xl mb-1",children:"🧩"}),n.jsx("div",{className:"text-2xl font-black text-white",children:"5/5"}),n.jsx("div",{className:"text-white/70 text-xs",children:"Treasures"})]}),n.jsxs("div",{className:"glass-card rounded-xl p-3 text-center",children:[n.jsx("div",{className:"text-3xl mb-1",children:"💰"}),n.jsx("div",{className:"text-2xl font-black text-yellow-300",children:e.totalCoinsEarned+ze.FINAL_TREASURE_REWARD}),n.jsx("div",{className:"text-white/70 text-xs",children:"Total Coins"})]}),n.jsxs("div",{className:"glass-card rounded-xl p-3 text-center",children:[n.jsx("div",{className:"text-3xl mb-1",children:"💎"}),n.jsx("div",{className:"text-2xl font-black text-cyan-300",children:e.totalGemsFound}),n.jsx("div",{className:"text-white/70 text-xs",children:"Total Gems"})]})]}),u&&n.jsxs("div",{className:"text-center p-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl",children:[n.jsx("div",{className:"text-3xl mb-2",children:"🏆"}),n.jsx("div",{className:"text-xl font-black text-white title-shine",children:ze.FINAL_TREASURE_TITLE}),n.jsx("div",{className:"text-white/90 text-sm mt-1",children:"New Title Unlocked!"})]})]}),l&&n.jsx("button",{onClick:t,className:"w-full max-w-md py-4 bg-gradient-to-r from-white to-gray-100 text-gray-800 rounded-2xl font-black text-lg shadow-xl hover:shadow-2xl transition-all hover:scale-[1.02] active:scale-[0.98]",children:n.jsxs("div",{className:"flex items-center justify-center gap-3",children:[n.jsx("span",{className:"text-2xl",children:"🎉"}),n.jsx("span",{children:"Complete Adventure"}),n.jsx("span",{className:"text-2xl",children:"🎉"})]})}),n.jsx("div",{className:"absolute inset-0 pointer-events-none",children:[...Array(10)].map((b,g)=>n.jsx("div",{className:"absolute text-2xl sparkle-animation",style:{left:`${Math.random()*100}%`,top:`${Math.random()*100}%`,animationDelay:`${Math.random()*2}s`},children:"✨"},g))})]})]})}function Fg({onBack:e}){const{coins:t,xp:r,level:s,soundOn:a,addCoins:i,addXp:o,setSoundOn:l}=lc(),[c,u]=d.useState(!1),[f,p]=d.useState("map"),[h,b]=d.useState(null),[g,N]=d.useState([]),[C,v]=d.useState(()=>{const T=localStorage.getItem(ze.STORAGE_KEYS.PROGRESS);if(T)try{return JSON.parse(T)}catch(z){console.error("Failed to load progress:",z)}return rr.reduce((z,D)=>(z[D.id]={unlocked:D.id===1,completed:!1,treasurePiece:!1,perfectScore:!1,bestScore:0,attempts:0},z),{})}),[m,y]=d.useState({islandId:null,questions:[],currentQuestionIndex:0,shovelsRemaining:ze.SHOVELS_PER_ISLAND,correctAnswers:0,wrongAnswers:0,timeRemaining:300,gemsFound:0,coinsEarned:0,questionTimes:[],startTime:null}),[E,j]=d.useState(()=>{const T=localStorage.getItem(ze.STORAGE_KEYS.STATS);if(T)try{return JSON.parse(T)}catch(z){console.error("Failed to load stats:",z)}return{totalCoinsEarned:0,totalGemsFound:0,totalTreasurePieces:0,totalQuestionsAnswered:0,totalCorrectAnswers:0,islandsCompleted:0,gameCompleted:!1}}),P=d.useRef(null),S=d.useRef(null);d.useEffect(()=>(x(),()=>{P.current&&clearInterval(P.current)}),[]),d.useEffect(()=>{localStorage.setItem(ze.STORAGE_KEYS.PROGRESS,JSON.stringify(C))},[C]),d.useEffect(()=>{localStorage.setItem(ze.STORAGE_KEYS.STATS,JSON.stringify(E))},[E]),d.useEffect(()=>(f==="playing"&&m.timeRemaining>0?P.current=setInterval(()=>{y(T=>{const z=T.timeRemaining-1;return z<=0?(q(),{...T,timeRemaining:0}):(z===30&&a&&_(ze.SOUNDS.TICK,.6),{...T,timeRemaining:z})})},1e3):P.current&&clearInterval(P.current),()=>{P.current&&clearInterval(P.current)}),[f,m.timeRemaining,a]);const x=async()=>{try{const z=await(await fetch("/data/quiz_questions_bank.csv")).text(),{data:D}=hr.parse(z,{header:!0,skipEmptyLines:!0,transformHeader:X=>X.trim().toLowerCase()}),te=D.map((X,J)=>{var F;const $=[X.option1,X.option2,X.option3,X.option4].map(O=>(O||"").trim()).filter(Boolean);if($.length<4)return null;let H={a:0,b:1,c:2,d:3}[(F=X.answer)==null?void 0:F.toLowerCase()];return H===void 0&&(H=$.findIndex(O=>O.toLowerCase()===(X.answer||"").toLowerCase())),H===-1&&(H=0),{id:X.id||`q_${J}`,prompt:(X.question||"").trim(),options:$,correctIndex:H,category:(X.category||X.subject||"general").trim(),difficulty:(X.difficulty||"medium").toLowerCase()}}).filter(Boolean);N(te)}catch(T){console.error("Failed to load questions:",T)}},w=T=>{const z=cn(T);if(!z||g.length===0)return[];let D=g.filter(X=>z.questionDifficulty.includes(X.difficulty));return D.length<ze.QUESTIONS_PER_ISLAND&&(D=g),[...D].sort(()=>Math.random()-.5).slice(0,ze.QUESTIONS_PER_ISLAND)},k=T=>{if(!Pg(T,C)){a&&_("/sounds/locked.mp3",.5),I([100]);return}b(T),p("island-detail"),a&&_("/sounds/select.mp3",.5)},R=T=>{const z=cn(T),D=w(T);y({islandId:T,questions:D,currentQuestionIndex:0,shovelsRemaining:ze.SHOVELS_PER_ISLAND,correctAnswers:0,wrongAnswers:0,timeRemaining:z.timeLimit,gemsFound:0,coinsEarned:0,questionTimes:[],startTime:Date.now()}),S.current=Date.now(),p("playing"),a&&_("/sounds/start.mp3",.6)},M=T=>{const z=m.questions[m.currentQuestionIndex],D=T===z.correctIndex,te=(Date.now()-S.current)/1e3;y(X=>{const J={...X,questionTimes:[...X.questionTimes,te]};if(D){const $=cn(X.islandId);let A=$.rewards.perCorrectAnswer;te<ze.SPEED_BONUS_THRESHOLD&&(A+=$.rewards.speedBonus),Math.random()<$.rewards.gemChance&&(A+=$.rewards.gemBonus,J.gemsFound=X.gemsFound+1),J.correctAnswers=X.correctAnswers+1,J.coinsEarned=X.coinsEarned+A}else J.wrongAnswers=X.wrongAnswers+1,J.shovelsRemaining=X.shovelsRemaining-1,I([200]);return J}),setTimeout(()=>{const X=m.currentQuestionIndex+1;m.shovelsRemaining===0&&!D||X>=ze.QUESTIONS_PER_ISLAND?ee():(y(J=>({...J,currentQuestionIndex:X})),S.current=Date.now())},D?2e3:1500)},q=()=>{ee()},ee=()=>{const T=cn(m.islandId),z=m.correctAnswers>=T.requiredCorrect,D=m.correctAnswers===ze.QUESTIONS_PER_ISLAND;let te=m.coinsEarned;D&&(te+=T.rewards.perfectBonus),z&&(te+=T.rewards.completionCoins),v(J=>{const $={...J},A=$[m.islandId];if(A.completed=!0,A.attempts+=1,z&&!A.treasurePiece){A.treasurePiece=!0;const H=rr.find(F=>F.id===m.islandId+1);H&&$[H.id]&&($[H.id].unlocked=!0,a&&setTimeout(()=>_(ze.SOUNDS.ISLAND_UNLOCK,.7),2e3))}return D&&(A.perfectScore=!0),A.bestScore=Math.max(A.bestScore||0,m.correctAnswers),$}),j(J=>({...J,totalCoinsEarned:J.totalCoinsEarned+te,totalGemsFound:J.totalGemsFound+m.gemsFound,totalTreasurePieces:J.totalTreasurePieces+(z&&!C[m.islandId].treasurePiece?1:0),totalQuestionsAnswered:J.totalQuestionsAnswered+(m.correctAnswers+m.wrongAnswers),totalCorrectAnswers:J.totalCorrectAnswers+m.correctAnswers,islandsCompleted:J.islandsCompleted+(C[m.islandId].completed?0:1)})),i(te),o(m.correctAnswers),y(J=>({...J,coinsEarned:te})),a&&_(z?ze.SOUNDS.TREASURE_FOUND:ze.SOUNDS.ISLAND_COMPLETE,.7),rr.every(J=>{var $;return(($=C[J.id])==null?void 0:$.treasurePiece)===!0})&&!E.gameCompleted?(j(J=>({...J,gameCompleted:!0})),setTimeout(()=>{p("final-treasure"),a&&_(ze.SOUNDS.FINAL_TREASURE,.8)},3e3)):p("reward")},Q=()=>{R(m.islandId)},Y=()=>{p("map"),b(null)},U=()=>{i(ze.FINAL_TREASURE_REWARD),o(10),j(T=>({...T,totalCoinsEarned:T.totalCoinsEarned+ze.FINAL_TREASURE_REWARD})),p("map")},_=(T,z=.5)=>{try{const D=new Audio(T);D.volume=z,D.play()}catch(D){console.error("Failed to play sound:",D)}},I=T=>{navigator.vibrate&&navigator.vibrate(T)};d.useEffect(()=>(document.body.classList.add("hide-bottom-nav"),()=>{document.body.classList.remove("hide-bottom-nav")}),[]),d.useEffect(()=>{window.history.pushState({treasureMode:!0},"",window.location.pathname);const T=z=>{c||(u(!0),window.history.pushState({treasureMode:!0},"",window.location.pathname))};return window.addEventListener("popstate",T),()=>window.removeEventListener("popstate",T)},[c]);let B=null;switch(f){case"map":B=n.jsx(_g,{islands:rr,islandProgress:C,onSelectIsland:k,onBack:()=>u(!0),soundOn:a,setSoundOn:l,totalStats:E});break;case"island-detail":B=n.jsx(Lg,{island:cn(h),progress:C[h],onStart:()=>R(h),onClose:()=>p("map"),soundOn:a});break;case"playing":B=n.jsx(Dg,{island:cn(m.islandId),question:m.questions[m.currentQuestionIndex],questionNumber:m.currentQuestionIndex+1,totalQuestions:ze.QUESTIONS_PER_ISLAND,shovelsRemaining:m.shovelsRemaining,timeRemaining:m.timeRemaining,coinsEarned:m.coinsEarned,gemsFound:m.gemsFound,onAnswer:M,onQuit:()=>p("map"),soundOn:a,setSoundOn:l});break;case"reward":B=n.jsx(Mg,{island:cn(m.islandId),session:m,earnedTreasure:m.correctAnswers>=cn(m.islandId).requiredCorrect,onRetry:Q,onContinue:Y,soundOn:a});break;case"final-treasure":B=n.jsx(zg,{totalStats:E,onContinue:U,soundOn:a});break;default:B=null}return n.jsxs(n.Fragment,{children:[B,c&&n.jsx("div",{className:"fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 px-6",children:n.jsxs("div",{className:"bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-6 max-w-sm w-full shadow-2xl border border-white/10",children:[n.jsxs("div",{className:"text-center mb-6",children:[n.jsx("div",{className:"text-5xl mb-3",children:"🏝️"}),n.jsx("h3",{className:"text-xl font-bold text-white mb-2",children:"Leave Treasure Hunt?"}),n.jsx("p",{className:"text-white/70",children:"Your island progress is saved!"})]}),n.jsxs("div",{className:"flex gap-3",children:[n.jsx("button",{onClick:()=>u(!1),className:"flex-1 py-3 bg-gradient-to-r from-green-400 to-emerald-500 text-white rounded-2xl font-bold shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]",children:"Keep Playing"}),n.jsx("button",{onClick:e,className:"flex-1 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-2xl font-bold shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]",children:"Exit"})]})]})})]})}const Og=[{name:"General Knowledge",questions:50,icon:"🧠",color:"#7C3AED"},{name:"Artificial Intelligence",questions:28,icon:"🤖",color:"#10B981"},{name:"Fun facts",questions:30,icon:"🎉",color:"#EF4444"},{name:"Science",questions:45,icon:"🧪",color:"#F59E0B"},{name:"History",questions:42,icon:"🏺",color:"#2563EB"},{name:"Geography",questions:38,icon:"🗺️",color:"#FACC15"}],Lm=Og.slice(0,6),no=360/Lm.length;function $g({onModeSelect:e,onNavigateHome:t}){return n.jsx("div",{className:"fixed inset-0 bg-base-bg text-base-text overflow-hidden",children:n.jsxs("div",{className:"h-full overflow-y-auto mx-auto max-w-md px-4 pt-[calc(env(safe-area-inset-top)+5rem)] pb-[calc(env(safe-area-inset-bottom)+5.25rem)]",children:[n.jsx("header",{className:"flex items-center mb-8",children:n.jsx("h1",{className:"text-center text-xl font-bold w-full",children:"Choose a quiz mode"})}),n.jsxs("div",{className:"space-y-8",children:[n.jsxs("button",{onClick:()=>e("classic"),className:"w-full relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-400 to-blue-500 p-8 text-left shadow-lg hover:shadow-xl transition-all active:scale-[0.98]",children:[n.jsx("div",{className:"absolute top-0 right-0 w-32 h-32 opacity-30",children:n.jsxs("svg",{viewBox:"0 0 100 100",className:"w-full h-full animate-spin",style:{animationDuration:"20s"},children:[Lm.map((r,s)=>{const a=s*no,i=a+no,o=no>180?1:0,l=Math.PI*a/180,c=Math.PI*i/180,u=50+40*Math.cos(l),f=50-40*Math.sin(l),p=50+40*Math.cos(c),h=50-40*Math.sin(c);return n.jsx("path",{d:`M50,50 L${u},${f} A40,40 0 ${o} 0 ${p},${h} Z`,fill:r.color,stroke:"white",strokeWidth:"0.5"},s)}),n.jsx("circle",{cx:"50",cy:"50",r:"8",fill:"white"})]})}),n.jsx("div",{className:"absolute top-4 left-8 text-3xl opacity-60",children:"🏆"}),n.jsx("div",{className:"absolute top-12 right-16 text-xl opacity-40",children:"⭐"}),n.jsx("div",{className:"absolute bottom-6 left-6 text-2xl opacity-50",children:"🎲"}),n.jsx("div",{className:"absolute bottom-4 right-12 text-3xl opacity-60",children:"🍪"}),n.jsx("div",{className:"absolute top-1/2 left-4 text-lg opacity-40",children:"🥨"}),n.jsx("h2",{className:"text-5xl font-black text-white mb-10 relative z-10",style:{transform:"translateX(-20px)"},children:"CLASSIC"})]}),n.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[n.jsxs("button",{onClick:()=>e("survival"),className:"aspect-square rounded-3xl bg-gradient-to-br from-yellow-400 to-orange-400 p-4 text-left hover:shadow-xl transition-all active:scale-[0.98] relative overflow-hidden",children:[n.jsx("div",{className:"text-2xl mb-2",children:"💀"}),n.jsx("h4",{className:"text-lg font-black text-white",children:"SURVIVAL"})]}),n.jsxs("button",{onClick:()=>e("treasureHunt"),className:"aspect-square rounded-3xl bg-gradient-to-br from-purple-400 to-green-500 p-4 text-left hover:shadow-xl transition-all active:scale-[0.98] relative overflow-hidden",children:[n.jsxs("div",{className:"absolute inset-0 opacity-20",children:[n.jsx("div",{className:"absolute top-2 right-2 text-4xl animate-pulse",children:"🏝️"}),n.jsx("div",{className:"absolute bottom-2 left-2 text-3xl animate-bounce",style:{animationDelay:"0.5s"},children:"⛏️"}),n.jsx("div",{className:"absolute top-1/2 right-4 text-2xl animate-pulse",style:{animationDelay:"1s"},children:"💎"})]}),n.jsx("div",{className:"text-2xl mb-2 relative z-10",children:"🏴‍☠️"}),n.jsx("h4",{className:"text-lg font-black text-white relative z-10",children:"TREASURE HUNT"}),n.jsx("div",{className:"absolute bottom-2 right-2",children:n.jsx("span",{className:"text-xs bg-white/20 px-2 py-1 rounded-full text-white font-bold",children:"NEW!"})})]}),n.jsxs("button",{disabled:!0,className:"aspect-square rounded-3xl bg-gradient-to-br from-pink-500 to-purple-500 p-4 text-left opacity-60",children:[n.jsx("div",{className:"text-2xl mb-2",children:"⚔️"}),n.jsx("h4",{className:"text-lg font-black text-white",children:"SURVIVAL ARENA"})]}),n.jsxs("button",{disabled:!0,className:"aspect-square rounded-3xl bg-gradient-to-br from-blue-400 to-cyan-400 p-4 text-left opacity-60",children:[n.jsx("div",{className:"text-2xl mb-2",children:"📱"}),n.jsx("h4",{className:"text-lg font-black text-white",children:"TRIVIA VIDEO"})]})]})]})]})})}function Bg(){const[e,t]=d.useState(null),r=He(),s=bt();d.useEffect(()=>{const l=new URLSearchParams(s.search);l.get("mode")==="survival"&&l.get("from")==="quest"&&t("survival")},[s]);const a=l=>{l==="classic"?t("classic"):l==="survival"?t("survival"):l==="treasureHunt"&&t("treasureHunt")},i=()=>{r("/")},o=()=>{t(null)};if(e==="classic")return n.jsx(Ng,{onBack:o});if(e==="survival"){const c=new URLSearchParams(s.search).get("from")==="quest";return n.jsx(Eg,{onBack:o,isFromQuest:c})}return e==="treasureHunt"?n.jsx(Fg,{onBack:o}):n.jsx($g,{onModeSelect:a,onNavigateHome:i})}const Ug=({session:e,mode:t,category:r,difficulty:s,timerConfig:a,onComplete:i,onQuit:o})=>{const l=He(),[c,u]=d.useState(0),[f,p]=d.useState([]),[h,b]=d.useState([]),[g,N]=d.useState([]),[C,v]=d.useState(!1),[m,y]=d.useState(null),[E,j]=d.useState(Date.now()),[P,S]=d.useState(0),[x,w]=d.useState([]),[k,R]=d.useState(!1),[M,q]=d.useState(!1),[ee,Q]=d.useState({}),[Y,U]=d.useState({}),[_,I]=d.useState([]);d.useState(!0);const[B,T]=d.useState([]),[z,D]=d.useState(0),[te,X]=d.useState(0),[J,$]=d.useState(!1),[A,H]=d.useState(!1),[F,O]=d.useState(""),[Z,ae]=d.useState(!1),[ce,ne]=d.useState(!1),[re,K]=d.useState(!0),[L,G]=d.useState(!1),[de,he]=d.useState(0),[pe,Oe]=d.useState(0),[Ce,be]=d.useState(0),[ue,ge]=d.useState(null),[Ne,Ue]=d.useState(0),qt=d.useRef(null),et=d.useRef(null),ke=t==="practice",Ae=f[c],Qt=me=>{try{const fe=new Audio(me);fe.volume=.6,fe.play()}catch{console.log("Sound not available:",me)}},Gn=[{id:1,category:"General Knowledge",difficulty:"medium",prompt:"Which element has the atomic number 1?",options:["Helium","Carbon","Hydrogen","Oxygen"],answerIndex:2,explanation:"Hydrogen is the first element on the periodic table with atomic number 1!"},{id:2,category:"General Knowledge",difficulty:"medium",prompt:"What is the largest ocean on Earth?",options:["Atlantic","Pacific","Indian","Arctic"],answerIndex:1,explanation:"The Pacific Ocean covers about one-third of Earth's surface!"},{id:3,category:"General Knowledge",difficulty:"easy",prompt:"What color do you get when you mix red and yellow?",options:["Purple","Orange","Green","Pink"],answerIndex:1,explanation:"Red and yellow make orange - like a beautiful sunset!"}],Ge=e&&e.questions&&Array.isArray(e.questions)&&e.questions.length>0?e.questions:Gn,V=Ge[c]||Ge[0]||Gn[0],ie=Ge.length;d.useEffect(()=>{Ge.length>0&&(p(new Array(Ge.length).fill(null)),b(new Array(Ge.length).fill(!1)),I(new Array(Ge.length).fill(!1)),N(new Array(Ge.length).fill((a==null?void 0:a.seconds)||45)))},[Ge.length,a==null?void 0:a.seconds]);const Le=()=>{if(k){O("Once per quiz"),setTimeout(()=>O(""),1e3);return}if(Ae!==null){O("Already answered"),setTimeout(()=>O(""),1e3);return}if(!V)return;const fe=[0,1,2,3].filter(ye=>ye!==V.answerIndex).sort(()=>Math.random()-.5).slice(0,2);Q({...ee,[c]:fe}),R(!0)},Ee=()=>{if(M){O("Once per quiz"),setTimeout(()=>O(""),1e3);return}if(Ae!==null){O("Already answered"),setTimeout(()=>O(""),1e3);return}if(!V)return;const me=V.answerIndex,fe=[0,0,0,0],ye=40+Math.floor(Math.random()*31);fe[me]=ye;let tt=100-ye;const Te=[0,1,2,3].filter(Pe=>Pe!==me);for(let Pe=0;Pe<Te.length-1;Pe++){const Ke=Math.min(tt-(Te.length-1-Pe),tt/2),ln=Math.floor(Math.random()*(Ke+1));fe[Te[Pe]]=ln,tt-=ln}fe[Te[Te.length-1]]=tt,U({...Y,[c]:fe}),q(!0)},Ve=()=>{const me=new Date;return`${me.getFullYear()}-${me.getMonth()+1}-${me.getDate()}`},we=()=>{ke&&window.location.search.includes("from=quest")?l("/profile/quests",{state:{questCompleted:!0,questType:"practiceQuestions"}}):o()},oe=d.useCallback((me,fe)=>{if(!V||ke&&_[c]||ee[c]&&ee[c].includes(me))return;const ye=[...f];if(ye[c]=f[c]===me?null:me,p(ye),j(Date.now()),ke&&!x.includes(c)&&ye[c]!==null){const Te=x.length+1;if(S(Te),w(Pe=>[...Pe,c]),window.location.search.includes("from=quest")){let Pe={};try{const ln=localStorage.getItem("questProgress");ln&&(Pe=JSON.parse(ln))}catch(ln){console.error("Error reading progress:",ln)}const Ke=Pe.practiceQuestions||0;Pe.practiceQuestions=Math.max(Ke,Te),Pe.date=`${new Date().getFullYear()}-${new Date().getMonth()+1}-${new Date().getDate()}`,localStorage.setItem("questProgress",JSON.stringify(Pe)),console.log("Saved practice progress:",Pe.practiceQuestions),window.dispatchEvent(new CustomEvent("questProgressUpdate",{detail:{practiceQuestions:Pe.practiceQuestions}}))}}ye[c]!==null&&(K(!1),clearInterval(et.current));const tt=ye[c]===V.answerIndex;if(tt){const Te=Ce+1;if(be(Te),D(Pe=>Pe+1),X(0),ke){he(Ke=>Ke+1);const Pe=10;Oe(Ke=>Ke+Pe),Qt("/sounds/correct.mp3"),setTimeout(()=>Qt("/sounds/coin.mp3"),500),ne(!0),setTimeout(()=>ne(!1),2e3),ge({type:"correct",stars:1,coins:10}),setTimeout(()=>ge(null),2e3)}}else ye[c]!==null&&(be(0),D(0),X(Te=>Te+1),ke&&(c===0&&B.length,Qt("/sounds/wrong.mp3")));if(T(Te=>[...Te.slice(-2),tt]),ye[c]!==null&&h[c]){const Te=[...h];Te[c]=!1,b(Te)}ke&&ye[c]!==null&&(ae(!0),I(Te=>{const Pe=[...Te];return Pe[c]=!0,Pe}),setTimeout(()=>{const Te=document.querySelector(".main-scrollable-container");if(Te){const Pe=Te.scrollHeight,Ke=Te.clientHeight;Pe>Ke&&Te.scrollTo({top:Pe-Ke,behavior:"smooth"})}},300)),!ke&&ye[c]!==null&&(clearTimeout(qt.current),qt.current=setTimeout(()=>{c<ie-1?xe():($(!0),v(!0))},5e3))},[V,ke,_,c,f,h,ie,Ce,ee,B,z,P,x]),le=()=>{j(Date.now()),c>0&&(clearInterval(et.current),K(!1),u(me=>me-1),ae(!1),ke&&f[c-1]!==null&&setTimeout(()=>ae(!0),100))},xe=()=>{if(j(Date.now()),clearInterval(et.current),Ae===null){const me=[...h];me[c]=!0,b(me),be(0)}K(!1),ae(!1),c<ie-1?(u(me=>me+1),ke&&f[c+1]!==null?setTimeout(()=>ae(!0),100):setTimeout(()=>K(!0),100)):$(!0)},Re=()=>{j(Date.now());const me=[...h];me[c]=!0,b(me),be(0),xe()},ve=()=>{const me=Ge.reduce((fe,ye,tt)=>fe+(f[tt]===ye.answerIndex?1:0),0);if(ke&&window.location.search.includes("from=quest")){const fe=f.filter(tt=>tt!==null).length,ye=JSON.parse(localStorage.getItem("questProgress")||"{}");ye.practiceQuestions=Math.min(fe,15),ye.date=Ve(),localStorage.setItem("questProgress",JSON.stringify(ye)),console.log("Final practice progress saved:",ye.practiceQuestions)}if(ke)i&&i({questions:Ge,answers:f,skipped:h,correct:me,total:ie,mode:t,category:r,difficulty:s,earnedStars:de,earnedCoins:pe,finalStreak:Ce});else{const fe=me*10;Ue(fe),G(!0),setTimeout(()=>{Qt("/sounds/coin.mp3"),ne(!0),setTimeout(()=>ne(!1),3e3)},1e3)}},Ie=()=>{i&&i({questions:Ge,answers:f,skipped:h,correct:Ge.reduce((me,fe,ye)=>me+(f[ye]===fe.answerIndex?1:0),0),total:ie,mode:t,category:r,difficulty:s,earnedStars:0,earnedCoins:Ne,finalStreak:Ce})};d.useEffect(()=>{if(!(C||m!==null||J||!re||f[c]!==null))return et.current=setInterval(()=>{N(me=>{const fe=[...me],ye=fe[c];return ye<=1?(clearInterval(et.current),c===ie-1?(Date.now()-E>=5e3&&$(!0),fe):(y(c),fe)):(fe[c]=ye-1,fe)})},1e3),()=>clearInterval(et.current)},[C,m,c,J,ie,re,f,E]),d.useEffect(()=>{f[c]===null&&!J&&!m?K(!0):K(!1)},[c,f,J,m]);const it=me=>{const fe=Math.floor(me/60),ye=me%60;return`${fe}:${ye.toString().padStart(2,"0")}`},Nn=(c+1)/Ge.length*100,At=f.filter(me=>me!==null).length,pr=h.filter(Boolean).length,Vn=g[c]||0,mc=Ge.reduce((me,fe,ye)=>me+(f[ye]===fe.answerIndex?1:0),0);return n.jsxs("div",{className:"h-dvh bg-gray-900 text-white relative flex flex-col",children:[ue&&n.jsx("div",{className:"fixed inset-0 flex items-center justify-center z-50 pointer-events-none",children:n.jsxs("div",{className:"bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-8 py-4 rounded-full text-xl font-bold animate-bounce shadow-2xl",children:["+",ue.coins," Coins!"]})}),ce&&n.jsx("div",{className:"fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-40 pointer-events-none",children:[...Array(8)].map((me,fe)=>n.jsx("div",{className:"absolute text-3xl animate-ping",style:{left:`${-30+Math.random()*60}px`,top:`${-30+Math.random()*60}px`,animationDelay:`${fe*150}ms`,animationDuration:"2s"},children:"🪙"},fe))}),n.jsxs("div",{className:`main-scrollable-container flex-1 flex flex-col ${ke&&Ae!==null?"overflow-y-auto":"overflow-hidden"}`,children:[n.jsxs("div",{className:"bg-gray-900 flex-shrink-0",children:[n.jsxs("div",{className:"flex items-center justify-between px-4 py-2 border-b border-gray-800 shadow-lg",children:[n.jsxs("button",{onClick:()=>H(!0),className:"bg-gray-700 hover:bg-gray-600 px-3 py-1.5 rounded-full flex items-center gap-2 transition-colors text-sm",children:[n.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:n.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 19l-7-7 7-7"})}),n.jsx("span",{className:"font-medium",children:"Back"})]}),n.jsx("div",{className:"flex-1"}),n.jsxs("div",{className:"flex items-center gap-2",children:[ke&&n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:"bg-yellow-600/20 px-2 py-1 rounded-full flex items-center gap-1",children:[n.jsx("span",{className:"text-yellow-400 text-sm",children:"🪙"}),n.jsx("span",{className:"text-yellow-200 font-semibold text-sm",children:pe})]}),n.jsxs("div",{className:"bg-orange-600/20 px-2 py-1 rounded-full flex items-center gap-1",children:[n.jsx("span",{className:"text-orange-400 text-sm",children:"🔥"}),n.jsx("span",{className:"text-orange-200 font-semibold text-sm",children:Ce})]})]}),n.jsx("div",{className:`px-2 py-1 rounded-full font-mono font-semibold text-sm ${Vn<=10?"bg-red-600/20 text-red-400 animate-pulse":Vn<=30?"bg-yellow-600/20 text-yellow-400":"bg-green-600/20 text-green-400"}`,children:it(Vn)})]})]}),n.jsxs("div",{className:"px-4 pb-1 bg-gray-900",children:[n.jsxs("div",{className:"flex justify-between items-center mb-1",children:[n.jsxs("span",{className:"text-xs text-gray-400",children:["Question ",c+1," of ",ie]}),n.jsxs("span",{className:"text-xs text-gray-400",children:[Math.round(Nn),"% Complete"]})]}),n.jsx("div",{className:"h-2 bg-gray-700 rounded-full overflow-hidden",children:n.jsx("div",{className:"h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-500",style:{width:`${Nn}%`}})}),n.jsx("div",{className:"flex justify-center gap-1 mt-1",children:Array.from({length:ie}).map((me,fe)=>n.jsx("div",{className:`w-1.5 h-1.5 rounded-full transition-all ${fe===c?"bg-white scale-125":f[fe]!==null?"bg-green-500":h[fe]?"bg-yellow-500":"bg-gray-600"}`},fe))}),n.jsx("div",{className:"text-center mt-4",children:n.jsx("span",{className:"text-xs text-gray-500",children:V.category})})]})]}),n.jsx("div",{className:`px-4 flex flex-col ${ke&&Ae!==null?"pb-36":"flex-1 justify-between pb-[180px]"}`,children:n.jsxs("div",{className:"flex-1 flex flex-col justify-center max-h-full",children:[n.jsxs("div",{className:"relative bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 rounded-3xl p-6 mb-6 flex-shrink-0 shadow-2xl shadow-blue-600/20 border border-blue-400/20",children:[n.jsx("div",{className:"absolute top-2 right-2 w-16 h-16 bg-white/10 rounded-full blur-xl"}),n.jsx("div",{className:"absolute bottom-2 left-2 w-12 h-12 bg-white/5 rounded-full blur-lg"}),n.jsxs("div",{className:"relative text-center",children:[n.jsxs("div",{className:"inline-block bg-white/10 px-3 py-1 rounded-full text-xs font-medium text-blue-100 mb-3",children:["Question ",c+1]}),n.jsx("h2",{className:"text-xl font-bold leading-relaxed text-white tracking-wide",children:V.prompt}),V.difficulty&&n.jsx("div",{className:"mt-3 inline-block",children:n.jsx("span",{className:`px-2 py-1 rounded-full text-xs font-semibold ${V.difficulty==="easy"?"bg-green-500/20 text-green-300":V.difficulty==="medium"?"bg-yellow-500/20 text-yellow-300":"bg-red-500/20 text-red-300"}`,children:V.difficulty.toUpperCase()})})]})]}),n.jsx("div",{className:"grid grid-cols-1 gap-3 mb-2 flex-shrink-0",children:V.options.map((me,fe)=>{const ye=Ae===fe,tt=fe===V.answerIndex,Te=ke&&Ae!==null&&Z,Pe=ee[c]&&ee[c].includes(fe);let Ke="p-4 rounded-xl transition-all duration-300 border-2 min-h-[64px] flex items-center ";Pe?Ke+="bg-gray-700/30 border-gray-600/30 text-gray-500/50 cursor-not-allowed":(Ke+="cursor-pointer ",Te?ye&&tt?Ke+="bg-green-600 border-green-500 text-white shadow-lg shadow-green-600/25":ye&&!tt?Ke+="bg-red-600 border-red-500 text-white shadow-lg shadow-red-600/25":!ye&&tt?Ke+="bg-green-600/20 border-green-500 text-green-300 animate-pulse":Ke+="bg-gray-700 border-gray-600 text-gray-400":ye?Ke+="bg-gray-600 border-gray-500 text-white":Ke+="bg-gray-800 border-gray-700 text-gray-200 hover:bg-gray-750 hover:border-gray-600");const ln=["🅰️","🅱️","🅲️","🅳️"];return n.jsx("button",{onClick:Fm=>oe(fe,Fm),disabled:ke&&_[c],className:Ke,children:n.jsxs("div",{className:"flex items-center gap-2 w-full",children:[n.jsx("div",{className:"text-lg flex-shrink-0 mr-1",children:ln[fe]}),n.jsx("div",{className:"flex-1 text-left font-semibold text-base leading-relaxed",children:me}),Y[c]&&Y[c][fe]>0&&!Pe&&n.jsxs("div",{className:"bg-purple-600/20 px-2 py-1 rounded-full text-xs text-purple-300",children:[Y[c][fe],"%"]}),Te&&ye&&tt&&!Pe&&n.jsx("div",{className:"text-lg animate-bounce",children:"🎉"}),Te&&ye&&!tt&&!Pe&&n.jsx("div",{className:"text-lg",children:"😔"}),Te&&!ye&&tt&&!Pe&&n.jsx("div",{className:"text-base animate-pulse",children:"✨"})]})},fe)})}),ke&&Z&&Ae!==null&&n.jsx("div",{className:"bg-gray-800 rounded-xl p-4 mb-2 mt-4 border border-gray-700 flex-shrink-0",children:n.jsxs("div",{className:"flex gap-3",children:[n.jsx("div",{className:"text-lg flex-shrink-0",children:Ae===V.answerIndex?"🎊":"💡"}),n.jsxs("div",{className:"flex-1",children:[n.jsx("h4",{className:`font-semibold mb-3 text-sm ${Ae===V.answerIndex?"text-green-400":"text-blue-400"}`,children:Ae===V.answerIndex?"Perfect! Well done!":"Good try! Here's why:"}),V.explanation&&n.jsx("p",{className:"text-gray-300 text-sm leading-relaxed",children:V.explanation})]})]})})]})})]}),n.jsxs("div",{className:"fixed bottom-0 left-0 right-0 z-50",children:[n.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/95 to-gray-900/80 backdrop-blur-xl"}),n.jsxs("div",{className:"relative p-4 pb-8",children:[!ke&&n.jsxs("div",{className:"flex justify-center gap-3 mb-4",children:[n.jsxs("button",{onClick:Le,disabled:Ae!==null,className:`${k?"bg-white/5 text-gray-500":"bg-gradient-to-r from-orange-500 to-orange-600"} 
                  disabled:bg-white/5 disabled:text-gray-500
                  px-4 py-2.5 rounded-2xl font-semibold transition-all transform active:scale-95
                  shadow-lg flex items-center gap-2 text-sm`,children:[n.jsx("span",{children:"⚡"}),"50:50"]}),n.jsxs("button",{onClick:Ee,disabled:Ae!==null,className:`${M?"bg-white/5 text-gray-500":"bg-gradient-to-r from-purple-500 to-purple-600"} 
                  disabled:bg-white/5 disabled:text-gray-500
                  px-4 py-2.5 rounded-2xl font-semibold transition-all transform active:scale-95
                  shadow-lg flex items-center gap-2 text-sm`,children:[n.jsx("span",{children:"👥"}),"Ask Friends"]})]}),n.jsxs("div",{className:"flex gap-2 mb-3",children:[n.jsx("button",{onClick:le,disabled:c===0,className:`flex-1 bg-white/10 backdrop-blur-md border border-white/20 
                disabled:opacity-30 disabled:cursor-not-allowed
                py-3.5 rounded-2xl font-semibold transition-all transform active:scale-95
                hover:bg-white/15 text-white shadow-xl`,children:"Previous"}),n.jsx("button",{onClick:Re,disabled:Ae!==null,className:`flex-1 py-3.5 rounded-2xl font-semibold transition-all transform active:scale-95 shadow-xl ${Ae!==null?"bg-white/5 text-gray-500 cursor-not-allowed":"bg-gradient-to-r from-amber-500 to-yellow-500 text-white hover:from-amber-600 hover:to-yellow-600"}`,children:"Skip"}),n.jsx("button",{onClick:xe,className:`flex-1 bg-gradient-to-r from-blue-500 to-indigo-500 
                hover:from-blue-600 hover:to-indigo-600
                py-3.5 rounded-2xl font-semibold transition-all transform active:scale-95
                text-white shadow-xl`,children:c===ie-1?"Finish":"Next"})]}),n.jsxs("button",{onClick:()=>$(!0),className:`w-full bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500
              hover:from-emerald-600 hover:via-green-600 hover:to-teal-600
              py-4 rounded-2xl font-bold text-white transition-all transform active:scale-[0.98]
              shadow-2xl shadow-green-500/25 relative overflow-hidden group`,children:[n.jsx("div",{className:"absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent"}),n.jsx("span",{className:"relative",children:"Submit Quiz"})]})]})]}),L&&n.jsx("div",{className:"fixed inset-0 bg-black/75 flex items-center justify-center z-50 p-4",children:n.jsxs("div",{className:"bg-gray-800 rounded-3xl p-6 max-w-sm w-full text-center border border-gray-700",children:[n.jsx("div",{className:"text-4xl mb-4",children:"🎉"}),n.jsx("h3",{className:"text-xl font-bold mb-2",children:"Quiz Complete!"}),n.jsx("p",{className:"text-gray-400 mb-6",children:"Here's how you performed"}),n.jsxs("div",{className:"bg-gray-700/50 rounded-2xl p-4 mb-6 space-y-3",children:[n.jsxs("div",{className:"flex justify-between items-center",children:[n.jsx("span",{className:"text-gray-300",children:"Questions Attempted:"}),n.jsxs("span",{className:"text-white font-semibold",children:[At," / ",ie]})]}),n.jsxs("div",{className:"flex justify-between items-center",children:[n.jsx("span",{className:"text-gray-300",children:"Correct Answers:"}),n.jsx("span",{className:"text-green-400 font-semibold",children:mc})]}),n.jsxs("div",{className:"flex justify-between items-center",children:[n.jsx("span",{className:"text-gray-300",children:"Accuracy:"}),n.jsxs("span",{className:"text-blue-400 font-semibold",children:[At>0?Math.round(mc/At*100):0,"%"]})]}),n.jsx("div",{className:"border-t border-gray-600 pt-3 mt-3",children:n.jsxs("div",{className:"flex justify-between items-center",children:[n.jsx("span",{className:"text-yellow-300 flex items-center gap-1",children:"🪙 Coins Earned:"}),n.jsx("span",{className:"text-yellow-400 font-bold text-lg",children:Ne})]})})]}),n.jsx("button",{onClick:Ie,className:"w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 py-3 rounded-xl font-medium transition-colors",children:"Continue"})]})}),A&&n.jsx("div",{className:"fixed inset-0 bg-black/75 flex items-center justify-center z-50 p-4",children:n.jsxs("div",{className:"bg-gray-800 rounded-3xl p-6 max-w-sm w-full text-center border border-gray-700",children:[n.jsx("div",{className:"text-4xl mb-4",children:"🤔"}),n.jsx("h3",{className:"text-xl font-bold mb-2",children:"Leave Quiz?"}),n.jsx("p",{className:"text-gray-400 mb-6",children:"Your progress will be lost"}),n.jsxs("div",{className:"flex gap-3",children:[n.jsx("button",{onClick:()=>H(!1),className:"flex-1 bg-blue-600 hover:bg-blue-700 py-3 rounded-xl font-medium",children:"Stay"}),n.jsx("button",{onClick:we,className:"flex-1 bg-gray-700 hover:bg-gray-600 py-3 rounded-xl font-medium",children:"Leave"})]})]})}),J&&!L&&n.jsx("div",{className:"fixed inset-0 bg-black/75 flex items-center justify-center z-50 p-4",children:n.jsxs("div",{className:"bg-gray-800 rounded-3xl p-6 max-w-sm w-full text-center border border-gray-700",children:[n.jsx("div",{className:"text-4xl mb-4",children:"🏆"}),n.jsx("h3",{className:"text-xl font-bold mb-2",children:"Ready to finish?"}),n.jsxs("p",{className:"text-gray-400 mb-4",children:[At," of ",ie," answered • ",pr," skipped"]}),ke&&n.jsx("div",{className:"bg-gradient-to-r from-yellow-600/20 to-orange-600/20 p-4 rounded-2xl mb-6 border border-yellow-600/30",children:n.jsxs("div",{className:"flex justify-center gap-6",children:[n.jsxs("div",{className:"text-center",children:[n.jsx("div",{className:"text-2xl mb-1",children:"⭐"}),n.jsx("div",{className:"text-yellow-400 font-bold",children:de}),n.jsx("div",{className:"text-xs text-gray-400",children:"Stars"})]}),n.jsxs("div",{className:"text-center",children:[n.jsx("div",{className:"text-2xl mb-1",children:"🪙"}),n.jsx("div",{className:"text-yellow-400 font-bold",children:pe}),n.jsx("div",{className:"text-xs text-gray-400",children:"Coins"})]})]})}),n.jsxs("div",{className:"flex gap-3",children:[n.jsx("button",{onClick:()=>{$(!1),y(null),j(Date.now())},className:"flex-1 bg-gray-700 hover:bg-gray-600 py-3 rounded-xl font-medium",children:"Back"}),n.jsx("button",{onClick:me=>{me.preventDefault(),me.stopPropagation(),console.log("Submit button clicked"),ve()},className:"flex-1 bg-green-600 hover:bg-green-700 py-3 rounded-xl font-medium",children:"Submit"})]})]})}),m===c&&!J&&n.jsx("div",{className:"fixed inset-0 bg-black/75 flex items-center justify-center z-50 p-4",children:n.jsxs("div",{className:"bg-gray-800 rounded-3xl p-6 max-w-sm w-full text-center border border-gray-700",children:[n.jsx("div",{className:"text-4xl mb-4 animate-pulse",children:"⏰"}),n.jsx("h3",{className:"text-xl font-bold mb-2",children:"Time's Up!"}),n.jsx("p",{className:"text-gray-400 mb-6",children:"Let's move to the next question"}),n.jsx("button",{onClick:()=>{y(null),j(Date.now()),c<Ge.length-1?xe():$(!0)},className:"w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-xl font-medium",children:c<Ge.length-1?"Continue":"See Results"})]})}),F&&n.jsx("div",{className:"fixed top-20 left-1/2 transform -translate-x-1/2 bg-red-600 text-white px-4 py-2 rounded-full font-medium animate-bounce z-50",children:F}),n.jsx("style",{jsx:!0,children:`
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
      `})]})},as=[{name:"GK",slug:"general-knowledge",questions:50,icon:"🧠",color:"#FF6B6B",gradient:"from-red-500 to-pink-500"},{name:"Science",slug:"science",questions:45,icon:"🧪",color:"#4ECDC4",gradient:"from-cyan-500 to-teal-500"},{name:"Fun Facts",slug:"fun-facts",questions:30,icon:"🎉",color:"#FFD93D",gradient:"from-yellow-400 to-orange-500"},{name:"History",slug:"history",questions:42,icon:"🏺",color:"#A8E6CF",gradient:"from-green-400 to-emerald-500"},{name:"AI & Tech",slug:"artificial-intelligence",questions:28,icon:"🤖",color:"#C7B8FF",gradient:"from-purple-400 to-indigo-500"},{name:"Geography",slug:"geography",questions:38,icon:"🗺️",color:"#FACC15",gradient:"from-yellow-400 to-amber-500"},{name:"Computer",slug:"computer",questions:34,icon:"💻",color:"#3B82F6",gradient:"from-blue-400 to-blue-600"},{name:"Aptitude",slug:"aptitude",questions:36,icon:"📐",color:"#EC4899",gradient:"from-pink-500 to-rose-500"},{name:"Iconic Figures",slug:"iconic-figures",questions:26,icon:"🌟",color:"#8B5CF6",gradient:"from-purple-500 to-violet-600"}],qg=()=>n.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:n.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5l7 7-7 7"})}),Qg=()=>n.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:n.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"})}),Yg=()=>n.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:n.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"})}),Hg=()=>n.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:n.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"})}),Wg=()=>n.jsx("svg",{className:"w-3 h-3",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:n.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 10V3L4 14h7v7l9-11h-7z"})}),Gg=({results:e={correct:8,total:10,category:"general-knowledge",mode:"quiz",elapsedMs:125e3,questions:[],returnPath:null,fromQuest:!1},onRetake:t=()=>{},onReview:r=()=>{},onNavigate:s=(u,f)=>{},isRetake:a=!1,isPractice:i=!1,player:o={level:1,coins:0,combo:0,energy:5},categories:l=[],addCoins:c=()=>{}})=>{const[u,f]=d.useState(o.coins),p=d.useRef(null),[h,b]=d.useState(null),[g]=zt("/sounds/coin.mp3",{volume:.75}),[N,C]=d.useState(!1),[v,m]=d.useState(!1),[y,E]=d.useState(0),[j,P]=d.useState(!1),[S,x]=d.useState(!1),w=()=>{if(console.log("QuizResults handleBack:",{fromQuest:e.fromQuest,returnPath:e.returnPath,isPractice:e.isPractice||i}),e.fromQuest){const F=e.isPractice||i?"practiceQuestions":"dailyQuizzes";e.isPractice||i?s("/profile/quests"):s("/profile/quests",{state:{questCompleted:!0,questType:F,increment:1}})}else{const F=e.returnPath||"/";s(F)}},{correct:k,total:R,category:M,categorySlug:q,difficulty:ee,mode:Q,elapsedMs:Y}=e,U=R?Math.round(k/R*100):0,_=U===100,I=U>=80,B=Math.floor(Y/1e3),T=R>0?Math.floor(B/R):0,z=i?e.earnedCoins||0:Math.round(k*5*(_?1.5:I?1.2:1)),D=as.find(F=>F.slug===M)||as[0],X=(()=>_?{emoji:"🏆",text:"Perfect!",color:"text-yellow-400"}:U>=90?{emoji:"🌟",text:"Excellent!",color:"text-purple-400"}:U>=80?{emoji:"✨",text:"Great job!",color:"text-blue-400"}:U>=70?{emoji:"👍",text:"Good effort!",color:"text-green-400"}:U>=60?{emoji:"💪",text:"Keep going!",color:"text-orange-400"}:{emoji:"📚",text:"Keep practicing!",color:"text-gray-400"})();d.useEffect(()=>{!h&&!N&&f(o.coins)},[o.coins,h,N]),d.useEffect(()=>{e.coinsProcessed||z>0&&p.current&&setTimeout(()=>{if(p.current.getBoundingClientRect(),g)try{g()}catch(F){console.error("Error playing coin sound:",F)}else console.warn("Coin sound not loaded");b({startRect:{left:window.innerWidth/2-50,top:window.innerHeight/2,width:100,height:100},count:Math.min(z,10),amount:z}),C(!0),e.coinsProcessed=!0},500)},[]),d.useEffect(()=>{document.documentElement.scrollIntoView({behavior:"smooth",block:"start"}),(_||I)&&(m(!0),setTimeout(()=>m(!1),3e3));let F=0;const O=k/20,Z=setInterval(()=>{F+=O,F>=k?(E(k),clearInterval(Z)):E(Math.floor(F))},50);return()=>clearInterval(Z)},[k,_,I]);const J=[{score:7,total:10},{score:6,total:10},{score:8,total:10},{score:9,total:10},{score:k,total:R}],$=()=>{try{const F=localStorage.getItem("qp_recent");if(F)return JSON.parse(F).slice(0,10).map(Z=>Z.slug||Z.cat).filter(Z=>Z&&Z!==e.categorySlug)}catch(F){console.error("Error reading recent categories:",F)}return[]},A=()=>{const F=q||M,O=ee||"medium",Z=$(),ae=(l||as||[]).filter(re=>re.slug!==F&&!Z.slice(0,3).includes(re.slug)),ne=(()=>{if(ae.length===0){const re=(l||as||[]).filter(K=>K.slug!==F);return re[Math.floor(Math.random()*re.length)]||(l||as)[0]}return ae[Math.floor(Math.random()*ae.length)]})();if(U<60)return i?[{icon:"🎯",title:"Try Fewer Questions",desc:"Start with just 5",color:"from-blue-500 to-cyan-500",action:()=>s(`/quiz/${F}`,{mode:"practice",difficulty:"easy",count:5,timer:{type:"off",seconds:0}})},{icon:ne.icon,title:ne.name,desc:"Fresh start with new topic",color:ne.gradient,action:()=>s(`/quiz/${ne.slug}`,{mode:"practice",difficulty:"easy",count:10,timer:{type:"off",seconds:0}})},{icon:"📖",title:"Review Mistakes",desc:"Learn from errors",color:"from-purple-500 to-pink-500",action:()=>r()}]:[{icon:"📚",title:"Practice Mode",desc:"No timer, learn at your pace",color:"from-green-500 to-teal-500",action:()=>s(`/quiz/${F}`,{mode:"practice",difficulty:"easy",count:10,timer:{type:"off",seconds:0}})},{icon:O!=="easy"?"🎯":"🔄",title:O!=="easy"?"Easy Mode":"Try Again",desc:O!=="easy"?"Build confidence":"You can do this!",color:"from-blue-500 to-cyan-500",action:()=>O!=="easy"?s(`/quiz/${F}`,{mode:"quiz",difficulty:"easy",count:5,timer:{type:"per_q",seconds:60}}):t()},{icon:ne.icon,title:ne.name,desc:"Try something different",color:ne.gradient,action:()=>s(`/quiz/${ne.slug}`,{mode:"quiz",difficulty:"easy",count:10,timer:{type:"per_q",seconds:45}})}];if(U>=80)return O==="hard"&&U>=90?[{icon:"⚡",title:"Lightning Round",desc:"20 questions, 10s each",color:"from-yellow-500 to-red-500",action:()=>s(`/quiz/${F}`,{mode:"quiz",difficulty:"hard",count:20,timer:{type:"per_q",seconds:10}})},{icon:ne.icon,title:`${ne.name} Challenge`,desc:"Hard mode, new topic",color:ne.gradient,action:()=>s(`/quiz/${ne.slug}`,{mode:"quiz",difficulty:"hard",count:15,timer:{type:"per_q",seconds:30}})},{icon:"🎲",title:"Mixed Categories",desc:"Test all your knowledge",color:"from-purple-500 to-indigo-500",action:()=>s("/quiz/mixed",{mode:"quiz",difficulty:"hard",count:20,timer:{type:"per_q",seconds:30}})}]:[{icon:O==="hard"?"🔥":"🎯",title:O==="hard"?"Perfect Score Challenge":"Hard Mode",desc:O==="hard"?"Can you get 100%?":"Level up your skills",color:"from-red-500 to-orange-500",action:()=>s(`/quiz/${F}`,{mode:"quiz",difficulty:"hard",count:O==="hard"?10:20,timer:{type:"per_q",seconds:30}})},{icon:ne.icon,title:ne.name,desc:"Master new topics",color:ne.gradient,action:()=>s(`/quiz/${ne.slug}`,{mode:"quiz",difficulty:O,count:10,timer:{type:"per_q",seconds:45}})},{icon:"⚡",title:"Speed Challenge",desc:"10 questions, 15s each",color:"from-purple-500 to-pink-500",action:()=>s(`/quiz/${F}`,{mode:"quiz",difficulty:"medium",count:10,timer:{type:"per_q",seconds:15}})}];{const re=U<70;return[{icon:re?"📚":"🎯",title:re?"Practice More":"Try Again",desc:re?"Improve accuracy":"Beat your score",color:re?"from-green-500 to-teal-500":"from-blue-500 to-purple-500",action:re?()=>s(`/quiz/${F}`,{mode:"practice",difficulty:O,count:10,timer:{type:"off",seconds:0}}):()=>t()},{icon:ne.icon,title:ne.name,desc:"Explore new topics",color:ne.gradient,action:()=>s(`/quiz/${ne.slug}`,{mode:"quiz",difficulty:"medium",count:10,timer:{type:"per_q",seconds:45}})},{icon:O==="easy"?"⬆️":"💪",title:O==="easy"?"Medium Difficulty":"More Questions",desc:O==="easy"?"Ready for more?":"Test endurance",color:"from-indigo-500 to-purple-500",action:()=>s(`/quiz/${F}`,{mode:"quiz",difficulty:O==="easy"?"medium":O,count:O==="easy"?10:20,timer:{type:"per_q",seconds:45}})}]}},H=pt.useMemo(()=>A(),[U,i,e.categorySlug,e.difficulty]);return n.jsxs("div",{className:"min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white p-4",children:[h&&n.jsx(Ci,{startRect:h.startRect,targetRef:p,count:h.count,onDone:()=>{h.amount>0&&!S&&(console.log("[QuizResults] Adding coins once:",h.amount),c(h.amount),x(!0),f(o.coins+h.amount)),b(null)}}),n.jsx("style",{children:`
        @keyframes coinRotate {
          from { transform: rotateY(0deg); }
          to { transform: rotateY(360deg); }
        }
      `}),v&&n.jsx("div",{className:"fixed inset-0 pointer-events-none z-50 flex items-center justify-center",children:n.jsx("div",{className:"text-8xl animate-bounce",children:_?"🎉":"⭐"})}),n.jsxs("div",{className:"flex justify-between items-center mb-6",children:[n.jsxs("button",{onClick:w,className:"p-2 rounded-xl bg-white/10 backdrop-blur hover:bg-white/20 transition-all flex items-center gap-2",children:[n.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:n.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 19l-7-7 7-7"})}),n.jsx("span",{className:"text-sm font-medium",children:"Back"})]}),n.jsxs("div",{className:"flex gap-2",children:[n.jsxs("div",{className:"px-3 py-1.5 rounded-full bg-white/10 backdrop-blur text-sm font-medium",children:["Level ",o.level]}),n.jsxs("button",{ref:p,onClick:()=>P(!0),className:"px-3 py-1.5 rounded-full bg-yellow-500/20 backdrop-blur text-sm font-medium text-yellow-300 hover:bg-yellow-500/30 transition-all cursor-pointer",children:[u," 🪙"]})]})]}),n.jsxs("div",{className:"relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 p-8 mb-6",children:[n.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-blue-500/10 animate-pulse"}),n.jsxs("div",{className:"relative text-center",children:[n.jsxs("div",{className:`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur mb-4 ${X.color}`,children:[n.jsx("span",{className:"text-2xl",children:X.emoji}),n.jsx("span",{className:"font-semibold",children:X.text})]}),n.jsxs("div",{className:"mb-6",children:[n.jsxs("div",{className:"text-7xl font-bold mb-2 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent",children:[y,"/",R]}),n.jsxs("div",{className:"flex items-center justify-center gap-2 text-sm text-white/60",children:[n.jsx("span",{className:"text-xl",children:D.icon}),n.jsx("span",{children:D.name})]})]}),n.jsxs("div",{className:"grid grid-cols-3 gap-4 max-w-md mx-auto",children:[n.jsxs("div",{className:"text-center",children:[n.jsxs("div",{className:"text-3xl font-bold",children:[U,"%"]}),n.jsx("div",{className:"text-xs text-white/60",children:"Accuracy"})]}),n.jsxs("div",{className:"text-center",children:[n.jsxs("div",{className:"text-3xl font-bold",children:[T,"s"]}),n.jsx("div",{className:"text-xs text-white/60",children:"Avg Speed"})]}),n.jsxs("div",{className:"text-center",children:[n.jsx("div",{className:"text-3xl font-bold text-yellow-400",children:z>0?`+${z}`:"0"}),n.jsx("div",{className:"text-xs text-white/60",children:"Coins"})]})]})]})]}),n.jsxs("div",{className:"rounded-2xl bg-white/5 backdrop-blur border border-white/10 p-4 mb-6",children:[n.jsxs("div",{className:"flex items-center justify-between mb-3",children:[n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx(Hg,{}),n.jsx("span",{className:"text-sm font-medium",children:"Your Progress"})]}),o.combo>0&&n.jsxs("div",{className:"flex items-center gap-1 px-2 py-1 rounded-full bg-orange-500/20 text-orange-400 text-xs",children:[n.jsx(Wg,{}),o.combo," streak"]})]}),n.jsx("div",{className:"flex items-end gap-1 h-12 mb-2",children:J.map((F,O)=>n.jsx("div",{className:`flex-1 rounded-t transition-all ${O===J.length-1?"bg-gradient-to-t from-purple-500 to-purple-400":"bg-white/20"}`,style:{height:`${F.score/F.total*100}%`,minHeight:"4px"}},O))}),n.jsx("div",{className:"text-xs text-white/40 text-center",children:"Last 5 quizzes"})]}),n.jsxs("div",{className:"grid grid-cols-2 gap-3 mb-6",children:[n.jsxs("button",{onClick:r,className:"relative overflow-hidden group rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 p-4 transition-all hover:scale-105 active:scale-95",children:[n.jsx("div",{className:"absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform"}),n.jsxs("div",{className:"relative flex items-center justify-between",children:[n.jsxs("div",{className:"text-left",children:[n.jsx("div",{className:"font-semibold",children:"Review"}),n.jsx("div",{className:"text-xs opacity-80",children:"Check answers"})]}),n.jsx(Yg,{})]})]}),n.jsx("button",{onClick:t,className:"relative overflow-hidden group rounded-2xl bg-white/10 backdrop-blur border border-white/20 p-4 transition-all hover:scale-105 active:scale-95 hover:bg-white/15",children:n.jsxs("div",{className:"flex items-center justify-between",children:[n.jsxs("div",{className:"text-left",children:[n.jsx("div",{className:"font-semibold",children:"Try Again"}),n.jsx("div",{className:"text-xs opacity-60",children:"New questions"})]}),n.jsx(Qg,{})]})})]}),n.jsxs("div",{className:"space-y-3",children:[n.jsx("div",{className:"text-sm font-medium text-white/60 px-1",children:"Recommended for you"}),H.map((F,O)=>n.jsx("button",{onClick:F.action,className:"w-full group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur border border-white/10 p-4 transition-all hover:bg-white/10 hover:border-white/20",children:n.jsxs("div",{className:"flex items-center justify-between",children:[n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsx("div",{className:`p-2 rounded-xl bg-gradient-to-r ${F.color} opacity-20 group-hover:opacity-30 transition-opacity`,children:n.jsx("span",{className:"text-xl",children:F.icon})}),n.jsxs("div",{className:"text-left",children:[n.jsx("div",{className:"font-medium text-sm",children:F.title}),n.jsx("div",{className:"text-xs text-white/40",children:F.desc})]})]}),n.jsx(qg,{})]})},O))]}),n.jsx("div",{className:"mt-6 pt-6 border-t border-white/10",children:n.jsx("button",{onClick:()=>s("/profile/history",{replace:!0}),className:"w-full text-center text-sm text-white/40 hover:text-white/60 transition-colors",children:"View all history →"})}),j&&n.jsx("div",{className:"fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4",onClick:F=>{F.target===F.currentTarget&&P(!1)},children:n.jsxs("div",{className:"bg-gray-800 rounded-3xl p-6 w-full max-w-md border border-gray-700 relative overflow-hidden",onClick:F=>F.stopPropagation(),children:[n.jsx("div",{className:"absolute inset-0 opacity-10",children:n.jsx("div",{className:"h-full bg-gradient-to-br from-yellow-400 to-orange-500"})}),n.jsxs("div",{className:"relative",children:[n.jsxs("div",{className:"flex items-center justify-between mb-6",children:[n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsx("div",{className:"text-5xl",style:{animation:"coinRotate 2s linear infinite"},children:"🪙"}),n.jsxs("div",{children:[n.jsx("h3",{className:"text-2xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent",children:"Your Treasure"}),n.jsxs("p",{className:"text-3xl font-bold text-white mt-1",children:[o.coins," Coins"]})]})]}),n.jsx("button",{onClick:()=>P(!1),className:"w-8 h-8 rounded-lg bg-white/5 border border-gray-600 grid place-items-center hover:bg-white/10 transition",children:"✕"})]}),n.jsxs("div",{className:"mb-6",children:[n.jsx("h4",{className:"text-sm font-medium text-gray-400 mb-3",children:"Ways to Earn"}),n.jsxs("div",{className:"space-y-3",children:[n.jsx("div",{className:"p-4 rounded-xl bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 hover:scale-[1.02] transition-transform",children:n.jsxs("div",{className:"flex items-center justify-between",children:[n.jsxs("div",{children:[n.jsxs("div",{className:"font-medium flex items-center gap-2",children:[n.jsx("span",{className:"text-2xl",children:"✅"}),"Complete Quizzes"]}),n.jsx("div",{className:"text-xs text-gray-400 mt-1",children:"+5 coins per correct answer"})]}),n.jsx("div",{className:"text-green-400 font-bold",children:"+5"})]})}),n.jsx("div",{className:"p-4 rounded-xl bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 hover:scale-[1.02] transition-transform",children:n.jsxs("div",{className:"flex items-center justify-between",children:[n.jsxs("div",{children:[n.jsxs("div",{className:"font-medium flex items-center gap-2",children:[n.jsx("span",{className:"text-2xl",children:"🎯"}),"Daily Challenge"]}),n.jsx("div",{className:"text-xs text-gray-400 mt-1",children:"Complete daily for bonus"})]}),n.jsx("div",{className:"text-blue-400 font-bold",children:"+5"})]})}),n.jsx("div",{className:"p-4 rounded-xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 hover:scale-[1.02] transition-transform",children:n.jsxs("div",{className:"flex items-center justify-between",children:[n.jsxs("div",{children:[n.jsxs("div",{className:"font-medium flex items-center gap-2",children:[n.jsx("span",{className:"text-2xl",children:"🎰"}),"Spin & Play"]}),n.jsx("div",{className:"text-xs text-gray-400 mt-1",children:"Test your luck!"})]}),n.jsx("div",{className:"text-purple-400 font-bold",children:"+50"})]})}),n.jsx("div",{className:"p-4 rounded-xl bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/20 hover:scale-[1.02] transition-transform",children:n.jsxs("div",{className:"flex items-center justify-between",children:[n.jsxs("div",{children:[n.jsxs("div",{className:"font-medium flex items-center gap-2",children:[n.jsx("span",{className:"text-2xl",children:"🏆"}),"Achievements"]}),n.jsx("div",{className:"text-xs text-gray-400 mt-1",children:"Unlock special rewards"})]}),n.jsx("div",{className:"text-orange-400 font-bold",children:"+???"})]})})]})]}),n.jsxs("div",{className:"mb-6",children:[n.jsxs("div",{className:"flex justify-between text-xs text-gray-400 mb-2",children:[n.jsx("span",{children:"Next reward"}),n.jsxs("span",{children:[100-o.coins%100," coins to go"]})]}),n.jsx("div",{className:"h-2 bg-white/10 rounded-full overflow-hidden",children:n.jsx("div",{className:"h-full bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full transition-all",style:{width:`${o.coins%100}%`}})})]}),n.jsx("button",{onClick:()=>{P(!1),s("/play")},className:"w-full py-3 rounded-xl bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-bold hover:scale-[1.02] transition-transform shadow-lg",children:"Start Earning Now! 🚀"})]})]})})]})},Vg=({questions:e,answers:t,skipped:r,onBack:s,onRetake:a,fromHistory:i=!1})=>{const o=He(),l=()=>{i?o("/profile/history",{replace:!0}):s?s():o(-1)},c=e.reduce((p,h,b)=>p+(t[b]===h.answerIndex?1:0),0),u=(r==null?void 0:r.filter(Boolean).length)||0,f=e.length-c-u;return n.jsxs("div",{className:"mt-2 card rounded-3xl p-5 w-full max-w-none mx-auto pb-24",children:[n.jsxs("div",{className:"flex items-center justify-between mb-4",children:[n.jsx("button",{className:"px-3 py-1.5 rounded-xl border border-base-border bg-white/5",onClick:l,children:"← Back"}),n.jsx("h2",{className:"text-lg font-semibold",children:"Review Answers"}),n.jsx("div",{className:"w-16"})," "]}),n.jsxs("div",{className:"grid grid-cols-3 gap-2 mb-4",children:[n.jsxs("div",{className:"rounded-xl bg-green-600/10 border border-green-500/30 p-2 text-center",children:[n.jsx("div",{className:"text-xs text-green-400",children:"Correct"}),n.jsx("div",{className:"text-lg font-bold text-green-400",children:c})]}),n.jsxs("div",{className:"rounded-xl bg-red-600/10 border border-red-500/30 p-2 text-center",children:[n.jsx("div",{className:"text-xs text-red-400",children:"Incorrect"}),n.jsx("div",{className:"text-lg font-bold text-red-400",children:f})]}),n.jsxs("div",{className:"rounded-xl bg-amber-600/10 border border-amber-500/30 p-2 text-center",children:[n.jsx("div",{className:"text-xs text-amber-400",children:"Skipped"}),n.jsx("div",{className:"text-lg font-bold text-amber-400",children:u})]})]}),n.jsx("ol",{className:"space-y-4",children:e.map((p,h)=>{const b=t[h],g=!b&&b!==0,N=b===p.answerIndex;return n.jsxs("li",{className:"rounded-2xl border border-base-border bg-white/5 p-4 md:p-5",children:[n.jsxs("div",{className:"flex items-start justify-between mb-3",children:[n.jsxs("div",{className:"flex-1",children:[n.jsxs("div",{className:"text-sm md:text-base font-medium",children:["Q",h+1,". ",p.prompt]}),p.category&&n.jsxs("div",{className:"text-xs text-base-muted mt-1",children:["Category: ",p.category," • Difficulty: ",p.difficulty||"Medium"]})]}),n.jsx("div",{className:"ml-2",children:g?n.jsx("span",{className:"px-2 py-1 rounded text-xs bg-amber-600/20 text-amber-400",children:"Skipped"}):N?n.jsx("span",{className:"px-2 py-1 rounded text-xs bg-green-600/20 text-green-400",children:"✓ Correct"}):n.jsx("span",{className:"px-2 py-1 rounded text-xs bg-red-600/20 text-red-400",children:"✗ Wrong"})})]}),n.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-3",children:p.options.map((C,v)=>{const m=b===v,y=v===p.answerIndex;let E="w-full text-left px-3 py-2 rounded-xl border transition-all ";return y?E+="bg-green-600/20 border-green-500/50 text-green-300":m&&!y?E+="bg-red-600/20 border-red-500/50 text-red-300":E+="bg-base-bg/40 border-base-border text-base-muted",n.jsxs("div",{className:E,children:[n.jsxs("span",{className:"font-semibold mr-2",children:[["A","B","C","D"][v],"."]}),C,y&&n.jsx("span",{className:"ml-2 text-green-400",children:"✓"}),m&&!y&&n.jsx("span",{className:"ml-2 text-red-400",children:"✗"})]},v)})}),p.explanation&&n.jsxs("div",{className:"mt-3 p-3 rounded-xl bg-white/5 border border-base-border",children:[n.jsx("div",{className:"text-xs font-semibold text-brand-blue mb-1",children:"Explanation:"}),n.jsx("div",{className:"text-sm text-base-muted",children:p.explanation})]})]},p.id||h)})}),n.jsxs("div",{className:"mt-6 flex gap-2 justify-center sticky bottom-4",children:[n.jsx("button",{className:"px-4 py-2.5 rounded-xl border border-base-border bg-base-card backdrop-blur",onClick:l,children:"Back to Results"}),a&&n.jsx("button",{className:"px-4 py-2.5 rounded-xl bg-gradient-to-r from-brand-blue to-brand-purple text-white font-medium",onClick:a,children:"Retake Quiz"})]})]})},Xg="qp_resume",zd="qp_mistakes",Fd="qp_stats",Od="qp_lastset",$d="qp_recent",Bd="qp_review_snapshot",Kg=50,is=(e="")=>e.replace(/-/g," ").replace(/\b\w/g,t=>t.toUpperCase()),Da=(e="")=>e.toLowerCase().trim().replace(/[^\w\s-]/g,"").replace(/\s+/g,"-"),Jg=(e,t)=>e.slice().sort(()=>Math.random()-.5).slice(0,t),Am=e=>{const t=e.slice();for(let r=t.length-1;r>0;r--){const s=Math.floor(Math.random()*(r+1));[t[r],t[s]]=[t[s],t[r]]}return t},Zg=(e,t,r)=>Math.max(t,Math.min(r,e)),os=(e,t)=>{try{const r=localStorage.getItem(e);return r?JSON.parse(r):t}catch{return t}};async function ev(){const e="/data/quiz_questions_bank.csv",t=await fetch(e);if(!t.ok)throw new Error(`CSV not found at ${e}`);const r=await t.text(),{data:s}=hr.parse(r,{header:!0,skipEmptyLines:!0,transformHeader:i=>String(i).trim().toLowerCase()}),a={a:0,b:1,c:2,d:3};return s.map((i,o)=>{var h;const l=[i.option1,i.option2,i.option3,i.option4].map(b=>(b??"").trim());if(l.some(b=>!b))return null;let c=-1;const u=String(i.answer??"").trim();if(a[u.toLowerCase()]!==void 0)c=a[u.toLowerCase()];else{const b=l.findIndex(g=>g.toLowerCase()===u.toLowerCase());c=b>=0?b:0}const f=String(i.category??i.subject??"General Knowledge").trim(),p=String(i.difficulty??"medium").toLowerCase().trim();return{id:((h=i.id)==null?void 0:h.trim())||`q_${o}`,category:f,difficulty:p,prompt:String(i.question??"").trim(),options:l,answerIndex:c,explanation:String(i.explanation??"").trim()}}).filter(Boolean)}function tv(e,{categorySlug:t,difficulty:r,count:s}){console.log("=== BUILD SESSION DEBUG ==="),console.log("categorySlug:",t),console.log("difficulty:",r),console.log("count:",s),console.log("Total questions available:",e.length);const i=t==="mixed"?()=>!0:f=>Da(f.category)===t,o=r?f=>(f.difficulty||"medium")===r:()=>!0,l=e.filter(f=>i(f)&&o(f));if(console.log("Filtered pool size:",l.length),console.log("Sample categories from all questions:",[...new Set(e.slice(0,10).map(f=>`"${f.category}" -> "${Da(f.category)}"`))]),l.length===0)return console.error("No questions match the filter criteria!"),console.log("Available categories:",[...new Set(e.map(f=>Da(f.category)))]),{questions:[],poolSize:0};const u=Jg(l,Math.min(s,l.length)).map(f=>{const p=Am([0,1,2,3]),h=p.map(g=>f.options[g]),b=p.indexOf(f.answerIndex);return{...f,options:h,answerIndex:b}});return console.log("Final questions:",u.length),{questions:u,poolSize:l.length}}function nv(){const e=He(),{category:t}=Yp(),r=bt(),{energy:s,useEnergy:a,player:i,addCoins:o,addXP:l,updateDailyStreak:c}=jn(),u=new URLSearchParams(r.search),f=u.get("review")==="1",p=u.get("retake")==="1",h=r.state||{},b=h.mode||"quiz",g=String(h.difficulty||"medium").toLowerCase(),N=h.returnPath||null,C=h.fromQuest||!1,v=Zg(Number(h.count||10),1,50),m=h.timer||{type:"per_q",seconds:45};h.resume,h.daily,h.source;const y=p||!!h.retake,E=!!h.fromHistory,j=b==="practice";console.log("Quiz Component - Mode Detection:",{routerState:h,mode:b,isPractice:j,location:r.pathname,state:r.state});const[P,S]=d.useState([]),[x,w]=d.useState(!0),[k,R]=d.useState(""),[M,q]=d.useState({questions:[]}),[ee,Q]=d.useState("quiz"),[Y,U]=d.useState(null),[_,I]=d.useState(null),[B,T]=d.useState(0);d.useEffect(()=>{let $=!0;return(async()=>{try{const A=await ev();if(!$)return;S(A)}catch(A){console.error(A),R("Failed to load questions. Check /public/data/quiz_questions_bank.csv")}finally{w(!1)}})(),()=>{$=!1}},[]),d.useEffect(()=>{if(x||k||f||P.length===0)return;console.log("=== SESSION INIT ==="),console.log("Category:",t),console.log("Mode:",b),console.log("Difficulty:",g),console.log("Count:",v);const $=tv(P,{categorySlug:t,difficulty:g,count:v});if($.questions.length===0){console.error("No questions found!"),console.log("Looking for category:",t),console.log("Available categories (first 10):",[...new Set(P.map(A=>Da(A.category)))].slice(0,10)),R(`No questions found for "${is(t)}" with difficulty "${g}"`);return}console.log("Session built with",$.questions.length,"questions"),q($),I(Date.now()),T(0),Q("quiz")},[P,t,b,g,v,r.state,r.search]),d.useEffect(()=>{if(ee!=="quiz"||!_)return;const $=setInterval(()=>{T(Date.now()-_)},1e3);return()=>clearInterval($)},[ee,_]);const z=d.useCallback($=>{if(console.log("Quiz completed - Mode:",b,"isPractice:",j,"Results:",$),!$||!$.questions){console.error("Invalid results object:",$);return}const A=$.questions.filter((F,O)=>$.answers[O]!==null&&$.answers[O]!==F.answerIndex).map(F=>F.id);try{const F=os(zd,[]),O=Array.from(new Set([...A,...F]));localStorage.setItem(zd,JSON.stringify(O))}catch(F){console.error("Error saving mistakes:",F)}try{const F=os(Fd,{sessions:[]});F.sessions.push({cat:is(t),mode:j?"practice":"quiz",total:$.total,correct:$.correct,skipped:$.skipped.filter(Boolean).length,ms:B,timestamp:Date.now(),earnedXP:j?0:$.correct*10,earnedCoins:j?0:$.correct*5}),localStorage.setItem(Fd,JSON.stringify(F))}catch(F){console.error("Error saving stats:",F)}const H={ts:Date.now(),slug:t,categoryLabel:is(t),mode:j?"practice":"quiz",difficulty:g,total:$.total,timer:j?null:m,ms:B,attempted:$.answers.filter(F=>F!==null).length,correct:$.correct,questions:$.questions,answers:$.answers,skipped:$.skipped,isPractice:j};try{localStorage.setItem(Od,JSON.stringify(H)),localStorage.setItem(Bd,JSON.stringify({questions:$.questions,answers:$.answers,skipped:$.skipped}));const F=os($d,[]),Z=[{id:H.ts,ts:H.ts,cat:H.categoryLabel,slug:t,mode:j?"Practice":"Quiz",total:$.total,correct:$.correct,ms:B,snapshot:H},...F].slice(0,Kg);localStorage.setItem($d,JSON.stringify(Z))}catch(F){console.error("Error saving snapshot:",F)}if(localStorage.removeItem(Xg),j&&$.earnedCoins?$.earnedCoins:!j&&$.correct>0&&$.correct*5,!j&&$.correct>0){const F=$.correct*10;l(F)}c(),console.log("Setting review snapshot with:",{returnPath:N||"/",fromQuest:C||!1}),U({...$,category:is(t),categorySlug:t,difficulty:g,mode:j?"practice":"quiz",elapsedMs:B,isPractice:j,hasTimer:!j,earnedXP:j?0:$.correct*10,earnedCoins:j?$.earnedCoins||0:$.correct*5,returnPath:N||"/",fromQuest:C||!1}),Q("results")},[t,b,m,B,j,N,C]),D=d.useCallback(()=>{N?e(N,{replace:!0}):E?e("/profile/history",{replace:!0,state:null}):e("/")},[E,e,N]),te=d.useCallback(()=>{console.log("Retake requested - Mode:",b,"isPractice:",j);const $=os(Od,null);if(!$||$.slug!==t){e(`/quiz/${t}?r=${Date.now()}`,{replace:!0,state:{mode:j?"practice":"quiz",difficulty:g,count:v,timer:j?null:m,retake:!0}});return}const A=$.questions.map(H=>{const F=Am([0,1,2,3]);return{...H,options:F.map(O=>H.options[O]),answerIndex:F.indexOf(H.answerIndex)}});q({questions:A,poolSize:A.length}),I(Date.now()),T(0),Q("quiz"),window.scrollTo(0,0)},[t,b,g,v,m,e,j]),X=d.useCallback(($=null)=>{if($)U($);else if(!Y){const A=os(Bd,null);A&&U({questions:A.questions||[],answers:A.answers||[],skipped:A.skipped||[]})}Q("review")},[Y]),J=d.useCallback(()=>{E?e("/profile/history",{replace:!0}):Q("results")},[E,e]);return x?n.jsx("div",{className:"fixed inset-0 bg-inherit text-white flex items-center justify-center",children:n.jsx("div",{className:"text-sm text-base-muted",children:"Loading questions…"})}):k?n.jsx("div",{className:"fixed inset-0 bg-inherit text-white flex items-center justify-center",children:n.jsx("div",{className:"text-sm text-red-400",children:k})}):(console.log("Render - Current view:",ee,"Session questions:",M.questions.length,"Mode:",b,"isPractice:",j),n.jsx("div",{className:"fixed inset-0 bg-inherit text-white z-0 overflow-x-hidden max-w-[100vw]",children:n.jsxs("div",{className:"h-full overflow-y-auto overscroll-y-none overflow-x-hidden touch-pan-y px-0 pt-[max(env(safe-area-inset-top),72px)] pb-[clamp(12px,env(safe-area-inset-bottom),20px)]",children:[ee==="quiz"&&M.questions.length>0&&n.jsx(Ug,{session:M,mode:j?"practice":"quiz",category:is(t),difficulty:g,timerConfig:j?null:m,onComplete:z,onQuit:D,isPractice:j}),ee==="results"&&Y&&n.jsx(Gg,{results:Y,onRetake:te,onReview:()=>X(Y),isRetake:y,isPractice:j,player:i,categories:Rm,addCoins:o,onNavigate:($,A)=>{console.log("onNavigate called with:",$,A),A!=null&&A.state?e($,{state:A.state,replace:A.replace||!1}):e($)}}),ee==="review"&&Y&&n.jsx(Vg,{questions:Y.questions||[],answers:Y.answers||[],skipped:Y.skipped||[],onBack:J,onRetake:te,fromHistory:E,isPractice:j})]})}))}const En=[{label:"General Knowledge",slug:"general-knowledge",color:"#7C3AED",soon:!1},{label:"Current Affairs",slug:"current-affairs",color:"#2563EB",soon:!1},{label:"Fun Facts",slug:"fun-facts",color:"#EF4444",soon:!1},{label:"Science",slug:"science",color:"#10B981",soon:!1},{label:"History",slug:"history",color:"#F59E0B",soon:!0},{label:"Geography",slug:"geography",color:"#FACC15",soon:!0},{label:"Cat 1",slug:"cat-1",color:"#06B6D4",soon:!0},{label:"Cat 2",slug:"cat-2",color:"#D946EF",soon:!0}],Xn=360/En.length,rv=42,ro=3e3,Ud=10,qd=260,sv="cubic-bezier(.15,.7,.1,1)",av="cubic-bezier(.2,.7,.2,1)",Cn=5,iv=5,ov=(e="")=>String(e).toLowerCase().trim().replace(/[^\w\s-]/g,"").replace(/\s+/g,"-");function lv({muted:e=!1,size:t=18}){return n.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24","aria-hidden":"true",children:[n.jsx("path",{d:"M3 9h4l5-4v14l-5-4H3z",fill:"currentColor"}),!e&&n.jsxs(n.Fragment,{children:[n.jsx("path",{d:"M16 8c1.5 1.5 1.5 6 0 7.5",stroke:"currentColor",strokeWidth:"2",fill:"none",strokeLinecap:"round"}),n.jsx("path",{d:"M19 6c3 3 3 10 0 13",stroke:"currentColor",strokeWidth:"2",fill:"none",strokeLinecap:"round"})]}),e&&n.jsx("line",{x1:"3",y1:"21",x2:"21",y2:"3",stroke:"#EF4444",strokeWidth:"2.5",strokeLinecap:"round"})]})}function cv({q:e,locked:t,onPick:r,result:s}){if(!e)return null;const a=[e.option1,e.option2,e.option3,e.option4];return n.jsxs("div",{className:"mt-5 rounded-3xl bg-white/5 border border-white/10 p-4",children:[n.jsx("div",{className:"text-sm text-base-muted mb-1",children:"Quick question"}),n.jsx("div",{className:"text-xl font-semibold mb-4",children:e.question}),a.map((i,o)=>{const l=s&&i===e.answer,c=s&&s.pick===i&&i!==e.answer;return n.jsx("button",{disabled:t||!!s,onClick:()=>r(i),className:["w-full text-left px-4 py-2 rounded-xl mb-2 border transition",!s&&!t?"bg-white/5 hover:bg-white/10 border-white/10":"bg-white/5 border-white/10",l?"bg-green-600/20 border-green-400/60 text-green-200":"",c?"bg-red-600/20 border-red-400/60 text-red-200":""].join(" "),children:i},o)}),s&&n.jsxs("div",{className:"mt-3 text-sm",children:[s.correct?n.jsx("span",{className:"text-green-400 font-medium",children:"✅ Correct!"}):n.jsxs("span",{className:"text-red-400 font-medium",children:["❌ Not quite. Answer: ",n.jsx("b",{children:e.answer})]}),e.explanation&&n.jsxs("div",{className:"text-xs text-base-muted mt-1",children:["Tip: ",e.explanation]})]})]})}function dv(){const e=He(),[t]=zt("/sounds/correct.mp3",{volume:.7}),[r]=zt("/sounds/wrong.mp3",{volume:.7}),[s,a]=d.useState(()=>[{name:"Player 1",color:"#60A5FA",scores:Array(Cn).fill(null)},{name:"Player 2",color:"#F472B6",scores:Array(Cn).fill(null)}]),[i,o]=d.useState(0),[l,c]=d.useState(1),u=s.reduce((A,H)=>A+H.scores.reduce((F,O)=>F+(O??0),0),0),[f,p]=d.useState(!0),h=d.useRef(null);d.useEffect(()=>{const A=new Audio("/sounds/spin.mp3");return A.loop=!0,A.volume=.7,h.current=A,()=>{try{A.pause(),A.src=""}catch{}}},[]);const b=()=>{if(f&&h.current)try{h.current.currentTime=0,h.current.play()}catch{}},g=()=>{if(h.current)try{h.current.pause(),h.current.currentTime=0}catch{}},[N,C]=d.useState(0),[v,m]=d.useState("none"),[y,E]=d.useState(!1),[j,P]=d.useState(null),[S,x]=d.useState(null),w=d.useMemo(()=>typeof window<"u"?window.matchMedia("(prefers-reduced-motion: reduce)").matches:!1,[]),[k,R]=d.useState([]);d.useEffect(()=>{(async()=>{try{const A=await fetch("/data/quiz_questions_bank.csv").then(Z=>Z.text()),{data:H}=hr.parse(A,{header:!0,skipEmptyLines:!0,transformHeader:Z=>String(Z).trim().toLowerCase()}),F={a:0,b:1,c:2,d:3},O=H.map((Z,ae)=>{var G;const ce=(Z.question??"").trim();if(!ce)return null;const ne=[Z.option1,Z.option2,Z.option3,Z.option4].map(de=>String(de??"").trim());if(ne.some(de=>!de))return null;let re=String(Z.answer??"").trim(),K=F[re.toLowerCase()];if(K===void 0){const de=ne.findIndex(he=>he.toLowerCase()===re.toLowerCase());K=de>=0?de:0}const L=ne[K];return{id:((G=Z.id)==null?void 0:G.trim())||`ps_${ae}`,question:ce,option1:ne[0],option2:ne[1],option3:ne[2],option4:ne[3],answer:L,explanation:String(Z.explanation??"").trim(),catSlug:ov(Z.category??Z.subject??"general knowledge"),difficulty:String(Z.difficulty??"medium").toLowerCase().trim()}}).filter(Boolean);R(O)}catch{R([])}})()},[]);const[M,q]=d.useState(null),[ee,Q]=d.useState(null),[Y,U]=d.useState(!1),_=A=>(A%360+360)%360,I=A=>_(A),B=l>Cn;function T(){if(s.length>=4)return;const A=["#60A5FA","#F472B6","#F59E0B","#34D399","#F87171","#A78BFA"],H=A[(s.length*2+1)%A.length];a(F=>[...F,{name:`Player ${F.length+1}`,color:H,scores:Array(Cn).fill(null)}])}function z(){s.length<=2||(a(A=>A.slice(0,-1)),o(A=>Math.min(A,s.length-2)))}function D(A){a(H=>H.map((F,O)=>O===i?{...F,scores:F.scores.map((Z,ae)=>ae===l-1?A:Z)}:F))}function te(){if(y||B)return;P(null),x(null),q(null),Q(null),E(!0),b();const A=Math.floor(Math.random()*En.length),H=En[A],F=Xn*.28,O=(Math.random()*2-1)*F,Z=_(N),ae=180,ne=A*Xn+Xn/2+O;let re=I(ne-Z-ae);const K=rv*360+re,L=N+K+Ud;m(`transform ${w?800:ro}ms ${sv}`),C(L);try{navigator.vibrate&&!w&&navigator.vibrate([10,40,10])}catch{}setTimeout(()=>{m(`transform ${w?160:qd}ms ${av}`),C(G=>G-Ud)},w?800:ro),setTimeout(()=>{if(g(),E(!1),P(A),x(H.color),H.soon)return;const G=k.filter(he=>he.catSlug===H.slug&&he.difficulty==="easy"),de=G.length?G:k.filter(he=>he.catSlug===H.slug);if(de.length){const he=de[Math.floor(Math.random()*de.length)];q(he)}else q({question:"No question found for this category yet. Try re-spinning!",option1:"Okay",option2:"Okay",option3:"Okay",option4:"Okay",answer:"Okay",explanation:""})},(w?800:ro)+(w?160:qd)+40)}function X(A){if(!M||ee)return;const H=A===M.answer;if(Q({correct:H,pick:A}),H){t(),U(!0),setTimeout(()=>U(!1),900);try{navigator.vibrate&&navigator.vibrate([8,16])}catch{}D(iv)}else{r();try{navigator.vibrate&&navigator.vibrate([4])}catch{}D(0)}}function J(){const A=(i+1)%s.length,H=A===0?l+1:l;o(A),c(H),P(null),x(null),q(null),Q(null)}function $(){const A=s.map(O=>O.scores.reduce((Z,ae)=>Z+(ae??0),0)),H=Math.max(...A),F=s.filter((O,Z)=>A[Z]===H).map(O=>O.name).join(", ");alert(`${F} win${F.includes(",")?"":"s"} the pot of ${u} coins! 🎉`),e("/play")}return n.jsxs("div",{className:"min-h-screen bg-black text-white",children:[Y&&n.jsx(_m,{numberOfPieces:120,recycle:!1}),n.jsxs("div",{className:"mx-auto max-w-md px-5 pt-[calc(env(safe-area-inset-top)+1.25rem)] pb-[calc(5.25rem+env(safe-area-inset-bottom))]",children:[n.jsxs("header",{className:"flex items-center justify-between mb-4",children:[n.jsx("button",{onClick:()=>e("/play"),className:"h-10 w-10 grid place-items-center rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition","aria-label":"Back",children:"←"}),n.jsxs("div",{className:"text-center",children:[n.jsx("h1",{className:"text-2xl font-bold",children:"Party Spin"}),n.jsx("p",{className:"text-sm text-base-muted",children:"Pass & play • Winner takes the pot"})]}),n.jsx("button",{onClick:()=>p(A=>!A),className:"h-10 w-10 grid place-items-center rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition","aria-label":f?"Mute sound":"Unmute sound",title:f?"Sound on":"Sound off",children:n.jsx(lv,{muted:!f})})]}),n.jsxs("section",{className:"rounded-2xl border border-white/10 bg-white/5 p-3 mb-4",children:[n.jsxs("div",{className:"flex items-center justify-between mb-2",children:[n.jsxs("div",{className:"text-sm",children:["Round ",n.jsx("b",{children:Math.min(l,Cn)}),"/",n.jsx("b",{children:Cn})]}),n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx("button",{onClick:T,className:"btn-ghost px-2 py-1 text-sm",children:"+"}),n.jsx("span",{className:"text-sm text-base-muted",children:"Player"}),n.jsx("button",{onClick:z,className:"btn-ghost px-2 py-1 text-sm",children:"−"})]}),n.jsxs("div",{className:"text-sm",children:["Pot: ",n.jsx("b",{className:"text-yellow-300",children:u})," 🪙"]})]}),n.jsx("div",{className:"overflow-x-auto",children:n.jsxs("table",{className:"w-full table-fixed text-sm tracking-tight tabular-nums",children:[n.jsxs("colgroup",{children:[n.jsx("col",{style:{width:"42%"}}),n.jsx("col",{style:{width:"9%"}}),n.jsx("col",{style:{width:"9%"}}),n.jsx("col",{style:{width:"9%"}}),n.jsx("col",{style:{width:"9%"}}),n.jsx("col",{style:{width:"9%"}}),n.jsx("col",{style:{width:"13%"}})]}),n.jsx("thead",{children:n.jsxs("tr",{className:"text-base-muted",children:[n.jsx("th",{className:"text-left font-medium py-1 pr-1",children:"Player"}),Array.from({length:Cn}).map((A,H)=>n.jsxs("th",{className:"font-medium text-center",children:["R",H+1]},H)),n.jsx("th",{className:"font-medium text-right pr-1",children:"Total"})]})}),n.jsx("tbody",{children:s.map((A,H)=>{const F=A.scores.reduce((Z,ae)=>Z+(ae??0),0),O=H===i;return n.jsxs("tr",{className:O?"bg-white/6":"",children:[n.jsx("td",{className:"py-1 pr-1",children:n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx("span",{className:"inline-block h-3 w-3 rounded-full shrink-0",style:{background:A.color}}),n.jsx("input",{className:"bg-transparent outline-none font-semibold w-full",value:A.name,onChange:Z=>a(ae=>ae.map((ce,ne)=>ne===H?{...ce,name:Z.target.value}:ce))})]})}),A.scores.map((Z,ae)=>n.jsx("td",{className:"text-center",children:Z===null?"–":Z},ae)),n.jsx("td",{className:"text-right pr-1 font-semibold",children:F})]},H)})})]})})]}),n.jsx("section",{className:"flex flex-col items-center",children:n.jsxs("div",{className:"relative w-[320px] h-[320px] md:w-[380px] md:h-[380px] rounded-full select-none",children:[S&&n.jsx("div",{className:"pointer-events-none absolute -inset-2 rounded-full",style:{boxShadow:`0 0 0 6px ${S}33, 0 0 30px 8px ${S}44`}}),n.jsx("div",{className:"absolute inset-0 rounded-full border border-white/10 shadow-2xl bg-black/20 overflow-hidden will-change-transform",style:{transform:`rotate(${N}deg)`,transition:v},"aria-label":"Category wheel",role:"group",children:n.jsxs("svg",{width:"100%",height:"100%",viewBox:"0 0 100 100",className:"block",children:[En.map((A,H)=>{const F=H*Xn,O=F+Xn,Z=Xn>180?1:0,ae=Math.PI*F/180,ce=Math.PI*O/180,ne=50+50*Math.cos(ae),re=50-50*Math.sin(ae),K=50+50*Math.cos(ce),L=50-50*Math.sin(ce),G=j===H;return n.jsxs("g",{style:{opacity:j==null?.95:G?1:.78,filter:j!=null&&!G?"blur(0.6px)":"none"},children:[n.jsx("path",{d:`M50,50 L${ne},${re} A50,50 0 ${Z} 0 ${K},${L} Z`,fill:A.color,stroke:G?`${A.color}AA`:"rgba(255,255,255,0.14)",strokeWidth:G?"1.2":"0.6"}),n.jsx("text",{x:"50",y:"50",fill:"#ffffff",fontSize:"4",fontWeight:"700",dominantBaseline:"middle",transform:`rotate(${F+Xn/2} 50 50) translate(12 0)`,children:n.jsxs("tspan",{children:[A.label,A.soon?" (soon)":""]})})]},A.slug)}),n.jsx("circle",{cx:"50",cy:"50",r:"9",fill:"rgba(0,0,0,0.55)",stroke:"white",strokeOpacity:"0.25"})]})}),n.jsx("button",{onClick:te,disabled:y||B,className:["absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2","h-16 w-16 rounded-full grid place-items-center","bg-white text-black font-extrabold shadow-soft transition active:scale-[0.98]",y||B?"opacity-60 cursor-not-allowed":"hover:bg-gray-200"].join(" "),"aria-label":"Spin the wheel",children:"SPIN"}),n.jsx("div",{className:"absolute left-1/2 -translate-x-1/2 -bottom-3 z-20",children:n.jsx("svg",{width:"22",height:"22",viewBox:"0 0 24 24",children:n.jsx("path",{d:"M12 4 L20 20 L4 20 Z",fill:"#ffffff"})})}),j!=null&&!y&&n.jsx("div",{className:"absolute left-1/2 -translate-x-1/2 -bottom-10",children:n.jsxs("div",{className:"px-3 py-1 rounded-full bg-white/10 border border-white/20 text-sm backdrop-blur",children:[n.jsx("span",{className:"inline-block h-2.5 w-2.5 rounded-full mr-2 align-middle",style:{background:En[j].color}}),En[j].label]})})]})}),n.jsx("section",{className:"mt-4",children:B?n.jsxs("div",{className:"rounded-2xl border border-white/10 bg-white/5 p-4",children:[n.jsx("div",{className:"text-xl font-semibold mb-2",children:"Match Over"}),n.jsxs("p",{className:"text-sm text-base-muted mb-3",children:["Top score takes the pot of ",n.jsx("b",{className:"text-yellow-300",children:u})," coins."]}),n.jsx("button",{className:"btn-primary w-full",onClick:$,children:"End match"})]}):j!=null&&En[j].soon?n.jsxs("div",{className:"rounded-2xl border border-white/10 bg-white/5 p-4",children:[n.jsx("div",{className:"text-lg font-semibold mb-1",children:En[j].label}),n.jsx("p",{className:"text-sm text-base-muted mb-3",children:"This category is arriving soon. Spin again!"}),n.jsx("button",{className:"btn-primary",onClick:te,disabled:y,children:"Re-spin"})]}):n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:"text-sm text-center text-base-muted mb-1",children:["Turn: ",n.jsx("span",{style:{color:s[i].color},children:s[i].name})," ","| Round ",l,"/",Cn]}),n.jsx(cv,{q:M,locked:y||!M,onPick:X,result:ee}),ee&&n.jsx("div",{className:"mt-3 flex justify-center",children:n.jsx("button",{className:"btn-primary",onClick:J,children:"Next turn"})})]})})]}),n.jsx("div",{className:"pointer-events-none fixed inset-x-0 bottom-0 bg-[#0B0F1A]",style:{height:"calc(5.25rem + env(safe-area-inset-bottom))"},"aria-hidden":!0})]})}const uv=({onSelect:e})=>{const t=[{id:"random",emoji:"🎲",title:"Random Mix",color:"from-purple-500 to-pink-500"},{id:"trending",emoji:"📈",title:"Trending Now",color:"from-blue-500 to-cyan-500"},{id:"level",emoji:"📊",title:"Your Level",color:"from-green-500 to-teal-500"},{id:"daily",emoji:"🎯",title:"Daily Challenge",color:"from-orange-500 to-red-500"}];return n.jsxs("div",{className:"fixed inset-0 bg-gray-900 overflow-hidden flex flex-col justify-center items-center px-4",children:[n.jsx("h1",{className:"text-2xl font-bold text-white mb-20",children:"Choose a swipe mode"}),n.jsx("div",{className:"grid grid-cols-2 gap-4 w-full max-w-md h-[55vh]",children:t.map(r=>n.jsxs("button",{onClick:()=>e(r.id,r.title),className:`rounded-3xl bg-gradient-to-br ${r.color} p-6 flex flex-col items-center justify-center gap-3 transform hover:scale-105 transition-all shadow-xl`,children:[n.jsx("span",{className:"text-5xl",children:r.emoji}),n.jsx("span",{className:"text-white font-bold text-lg text-center",children:r.title})]},r.id))})]})},fv=()=>{He();const{player:e,addCoins:t,addXP:r}=jn(),[s,a]=d.useState([]),[i,o]=d.useState(0),[l,c]=d.useState({}),[u,f]=d.useState(0),[p,h]=d.useState(5),[b,g]=d.useState(0),[N,C]=d.useState(!0),[v,m]=d.useState(null),[y,E]=d.useState(!0),[j,P]=d.useState(null),[S,x]=d.useState(""),[w,k]=d.useState(!1),[R,M]=d.useState(""),[q,ee]=d.useState(!1),[Q,Y]=d.useState(!1),[U,_]=d.useState(!1),[I,B]=d.useState(!1),[T,z]=d.useState(!1),[D,te]=d.useState(!1),[X,J]=d.useState(0),[$,A]=d.useState(0),[H,F]=d.useState(-1),[O,Z]=d.useState(-1),[ae,ce]=d.useState({}),[ne,re]=d.useState({}),K=d.useRef(null),L=d.useRef(null),[G]=zt("/sounds/correct.mp3",{volume:.6}),[de]=zt("/sounds/wrong.mp3",{volume:.6}),[he]=zt("/sounds/coin.mp3",{volume:.75}),pe=["🐼","🐱","🐶","🦊","🐰","🐨","🐯","🦁","🐸","🐵"],Oe=()=>{a([]),o(0),c({}),f(0),h(5),g(0),C(!0),m(null),k(!1),M(""),ee(!1),Y(!1),_(!1),B(!1),z(!1),te(!1),J(0),A(0),F(-1),Z(-1),ce({}),re({}),P(null),x(""),be(null)};d.useEffect(()=>(Oe(),E(!0),()=>{document.body.classList.remove("hide-bottom-nav"),Oe(),L.current&&clearTimeout(L.current)}),[]),d.useEffect(()=>{const V=ie=>{!y&&s.length>0&&(ie.preventDefault(),Y(!0))};return!y&&s.length>0&&window.history.pushState({inQuiz:!0},"",window.location.pathname),window.addEventListener("popstate",V),()=>window.removeEventListener("popstate",V)},[y,s.length]),d.useEffect(()=>{!y&&s.length>0?document.body.classList.add("hide-bottom-nav"):document.body.classList.remove("hide-bottom-nav")},[y,s.length]),d.useEffect(()=>{!y&&s.length>0&&B(!0)},[y,s.length]);const[Ce,be]=d.useState(null);d.useEffect(()=>{const V=ie=>{var Le;if(I&&!U){const Ee=ie.target.closest('button[type="button"]'),Ve=(Le=Ee==null?void 0:Ee.querySelector(".text-\\[10px\\]"))==null?void 0:Le.textContent;Ve&&["Home","Play","Profile","Swipe"].includes(Ve)&&(ie.preventDefault(),ie.stopPropagation(),be({Home:"/",Play:"/play",Profile:"/profile",Swipe:"/swipe"}[Ve]),Y(!0))}};return document.addEventListener("click",V,!0),()=>document.removeEventListener("click",V,!0)},[I,U]),d.useEffect(()=>{const V=K.current;if(!V)return;let ie=!1,Le=0,Ee=null;const Ve=xe=>{!y&&s.length>0&&xe.preventDefault()},we=xe=>{Le=xe.touches[0].clientY,ie=!1},oe=xe=>{!y&&s.length>0&&!Q&&!q&&xe.preventDefault()},le=xe=>{if(ie||Q||q)return;const Re=xe.changedTouches[0].clientY,ve=Le-Re;if(Math.abs(ve)>30){if(ie=!0,Ee&&clearTimeout(Ee),ve>0&&i<s.length-1){const Ie=i+1;o(Ie),V.scrollTo({top:Ie*window.innerHeight,behavior:"smooth"})}else if(ve<0&&i>0){const Ie=i-1;o(Ie),V.scrollTo({top:Ie*window.innerHeight,behavior:"smooth"})}Ee=setTimeout(()=>{ie=!1},800)}};return V.addEventListener("touchstart",we,{passive:!1}),V.addEventListener("touchmove",oe,{passive:!1}),V.addEventListener("touchend",le,{passive:!1}),V.addEventListener("wheel",Ve,{passive:!1}),()=>{V.removeEventListener("touchstart",we),V.removeEventListener("touchmove",oe),V.removeEventListener("touchend",le),V.removeEventListener("wheel",Ve),Ee&&clearTimeout(Ee)}},[i,s.length,y]),d.useEffect(()=>{const V=K.current;V&&(Q||q?(V.style.overflow="hidden",V.style.touchAction="none"):(V.style.overflow="auto",V.style.touchAction="auto"))},[Q,q]),d.useEffect(()=>{(Q||q)&&L.current&&(clearTimeout(L.current),L.current=null)},[Q,q]);const ue=async V=>{try{const Le=await(await fetch("/data/quiz_questions_bank.csv")).text(),{data:Ee}=hr.parse(Le,{header:!0,skipEmptyLines:!0}),oe=Ee.map((le,xe)=>{var Ie,it;const Re=[le.option1,le.option2,le.option3,le.option4].filter(Boolean),ve={A:0,B:1,C:2,D:3};return{id:le.id||`q_${xe}`,prompt:le.question,options:Re,answerIndex:ve[(Ie=le.answer)==null?void 0:Ie.toUpperCase()]||0,category:le.category||"General Knowledge",difficulty:((it=le.difficulty)==null?void 0:it.toLowerCase())||"medium",explanation:le.explanation||"",stats:{views:Math.floor(Math.random()*1e4)+1e3,attempted:Math.floor(Math.random()*5e3)+500,correctRate:Math.floor(Math.random()*40)+30}}}).filter(le=>le.prompt&&le.options.length===4).sort(()=>Math.random()-.5).slice(0,50).map(le=>({...le,mascot:pe[Math.floor(Math.random()*pe.length)]}));a(oe),C(!1)}catch(ie){console.error("Failed to load questions:",ie),C(!1)}},ge=V=>V===1||V===3||V===7||V===10||V===15||V===20||V>20&&V%5===0,Ne=(V,ie)=>{if(l[V]!==void 0)return;const Le=s.find(we=>we.id===V),Ee=ie===Le.answerIndex,Ve=s.findIndex(we=>we.id===V);if(c(we=>({...we,[V]:ie})),J(we=>we+1),A(we=>we+1),Ee){if(G(),f(we=>we+1),g(we=>we+10),te(!0),setTimeout(()=>{he()},300),setTimeout(()=>te(!1),2e3),Ue(),ge(Ve+1)){const we=["Awesome!","Perfect!","Brilliant!","Outstanding!","Incredible!"];M(we[Math.floor(Math.random()*we.length)]),k(!0),setTimeout(()=>k(!1),2e3)}}else if(de(),f(0),z(!0),setTimeout(()=>z(!1),1500),h(we=>{const oe=Math.max(0,we-1);return oe===0&&setTimeout(()=>ee(!0),500),oe}),p>1&&ge(Ve+1)){const we=["Keep trying!","You got this!","Don't give up!","Stay strong!","Keep going!"];M(we[Math.floor(Math.random()*we.length)]),k(!0),setTimeout(()=>k(!1),2e3)}(p>1||Ee)&&(L.current=setTimeout(()=>{qt()},2500))},Ue=()=>{const V=document.createElement("div");V.style.position="fixed",V.style.inset="0",V.style.pointerEvents="none",V.style.zIndex="1000",document.body.appendChild(V);const ie=["🎉","✨","⭐","🎊","🌟"];for(let Le=0;Le<20;Le++){const Ee=document.createElement("div");Ee.textContent=ie[Math.floor(Math.random()*ie.length)],Ee.style.position="fixed",Ee.style.left=`${Math.random()*100}%`,Ee.style.top="-50px",Ee.style.fontSize="24px",Ee.style.animation=`fall ${2+Math.random()*2}s ease-out`,V.appendChild(Ee)}setTimeout(()=>V.remove(),4e3)},qt=()=>{if(!(Q||q)&&i<s.length-1){const V=i+1,ie=document.getElementById(`question-${V}`);ie==null||ie.scrollIntoView({behavior:"smooth"}),o(V)}},et=V=>{const ie=s.findIndex(we=>we.id===V);if(H>=0&&X<5){m(`After ${5-X} attempts`),setTimeout(()=>m(null),2e3);return}const Le=s[ie],Ve=[0,1,2,3].filter(we=>we!==Le.answerIndex).sort(()=>Math.random()-.5).slice(0,2);ce({...ae,[V]:Ve}),F(ie),J(0)},ke=V=>{const ie=s.findIndex(xe=>xe.id===V);if(O>=0&&$<5){m(`After ${5-$} attempts`),setTimeout(()=>m(null),2e3);return}const Ee=s[ie].answerIndex,Ve=[0,0,0,0],we=40+Math.floor(Math.random()*31);Ve[Ee]=we;let oe=100-we;const le=[0,1,2,3].filter(xe=>xe!==Ee);for(let xe=0;xe<le.length-1;xe++){const Re=Math.floor(Math.random()*(oe/2));Ve[le[xe]]=Re,oe-=Re}Ve[le[le.length-1]]=oe,re({...ne,[V]:Ve}),Z(ie),A(0)},Ae=(V,ie)=>{Oe(),P(V),x(ie),E(!1),ue()},Qt=()=>{be("/swipe"),Y(!0)},Gn=()=>{_(!0),Y(!1),document.body.classList.remove("hide-bottom-nav")},Ge=()=>{const V=Object.keys(l).filter(ie=>{const Le=s.find(Ee=>Ee.id===ie);return l[ie]===(Le==null?void 0:Le.answerIndex)}).length;return d.useEffect(()=>{document.body.classList.add("hide-bottom-nav");const ie=setTimeout(()=>{t(b),Oe(),B(!1),_(!1),E(!0),document.body.classList.remove("hide-bottom-nav")},2e3);return()=>{clearTimeout(ie),document.body.classList.remove("hide-bottom-nav")}},[]),n.jsx("div",{className:"fixed inset-0 bg-gray-900 z-50 flex items-center justify-center p-4",children:n.jsxs("div",{className:"bg-gray-800 rounded-3xl p-8 max-w-md w-full text-center border border-gray-700",children:[n.jsx("div",{className:"text-5xl mb-4",children:"🎉"}),n.jsx("h2",{className:"text-2xl font-bold text-white mb-4",children:"Session Complete!"}),n.jsxs("div",{className:"space-y-4",children:[n.jsxs("div",{className:"bg-gray-700/50 rounded-xl p-4",children:[n.jsx("div",{className:"text-gray-400 text-sm mb-1",children:"Questions Answered"}),n.jsx("div",{className:"text-2xl font-bold text-white",children:Object.keys(l).length})]}),n.jsxs("div",{className:"bg-gray-700/50 rounded-xl p-4",children:[n.jsx("div",{className:"text-gray-400 text-sm mb-1",children:"Correct Answers"}),n.jsx("div",{className:"text-2xl font-bold text-green-400",children:V})]}),n.jsxs("div",{className:"bg-gray-700/50 rounded-xl p-4",children:[n.jsx("div",{className:"text-gray-400 text-sm mb-1",children:"Coins Earned"}),n.jsxs("div",{className:"text-2xl font-bold text-yellow-400",children:["🪙 ",b]})]}),n.jsxs("div",{className:"bg-gray-700/50 rounded-xl p-4",children:[n.jsx("div",{className:"text-gray-400 text-sm mb-1",children:"Lives Remaining"}),n.jsx("div",{className:"text-2xl font-bold text-red-400",children:Array.from({length:5},(ie,Le)=>n.jsx("span",{className:Le<p?"":"opacity-30",children:"❤️"},Le))})]})]})]})})};return U?n.jsx(Ge,{}):y?n.jsx(uv,{onSelect:Ae}):N?n.jsx("div",{className:"h-screen bg-gray-900 flex items-center justify-center",children:n.jsx("div",{className:"text-white",children:"Loading questions..."})}):n.jsxs("div",{className:"h-screen bg-gray-900 relative",children:[n.jsxs("div",{className:"fixed top-0 left-0 right-0 bg-gray-900/95 backdrop-blur z-50 border-b border-gray-800 pt-12",children:[n.jsxs("div",{className:"flex items-center justify-between px-4 py-3",children:[n.jsx("button",{onClick:Qt,className:"inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/15 rounded-xl text-white text-sm font-medium hover:bg-white/15 transition-all",children:"← Back"}),n.jsxs("div",{className:"flex items-center gap-4",children:[n.jsxs("div",{className:"flex items-center gap-1 bg-yellow-500/20 px-3 py-1 rounded-full",children:[n.jsx("span",{children:"🪙"}),n.jsx("span",{className:"font-bold text-yellow-400",children:b})]}),n.jsxs("div",{className:"flex items-center gap-1 bg-orange-500/20 px-3 py-1 rounded-full",children:[n.jsx("span",{children:"🔥"}),n.jsx("span",{className:"font-bold text-orange-400",children:u})]})]}),n.jsx("div",{className:"flex items-center gap-1",children:Array.from({length:5},(V,ie)=>n.jsx("span",{className:`${ie<p?"text-red-500":"text-gray-600 opacity-30"} ${T&&ie===p-1?"animate-heartLoss":""}`,children:"❤️"},ie))})]}),S&&n.jsx("div",{className:"text-center py-1",children:n.jsx("span",{className:"text-xs text-gray-400",children:S})})]}),D&&n.jsx("div",{className:"fixed top-24 left-1/2 transform -translate-x-1/2 z-50 pointer-events-none",children:n.jsx("div",{className:"bg-yellow-500 text-white px-4 py-2 rounded-full font-bold animate-coinFloat",children:"+10 🪙"})}),n.jsx("div",{ref:K,className:"h-full overflow-y-hidden snap-y snap-mandatory pt-32",style:{scrollBehavior:"smooth",overscrollBehavior:"none",WebkitOverflowScrolling:"touch",touchAction:"none"},children:s.map((V,ie)=>n.jsx(mv,{question:V,index:ie,answered:l[V.id],onAnswer:Le=>Ne(V.id,Le),onFiftyFifty:()=>et(V.id),onAudience:()=>ke(V.id),eliminated:ae[V.id]||[],audiencePercentages:ne[V.id],canUseFiftyFifty:H<0||X>=5,canUseAudience:O<0||$>=5},V.id))}),q&&n.jsx("div",{className:"fixed inset-0 bg-black/75 flex items-center justify-center z-50 p-4",children:n.jsxs("div",{className:"bg-gray-800 rounded-3xl p-6 max-w-sm w-full text-center border border-gray-700",children:[n.jsx("div",{className:"text-5xl mb-4",children:"😔"}),n.jsx("h3",{className:"text-xl font-bold mb-2 text-white",children:"No Lives Left!"}),n.jsx("p",{className:"text-gray-400 mb-6",children:"Sorry, you have no lives left to continue swiping."}),n.jsx("button",{onClick:()=>{_(!0),document.body.classList.remove("hide-bottom-nav")},className:"w-full bg-gradient-to-r from-blue-600 to-purple-600 py-3 rounded-xl text-white font-medium",children:"View Results"})]})}),Q&&n.jsx("div",{className:"fixed inset-0 bg-black/75 flex items-center justify-center z-50 p-4",children:n.jsxs("div",{className:"bg-gray-800 rounded-3xl p-6 max-w-sm w-full text-center border border-gray-700",children:[n.jsx("div",{className:"text-4xl mb-4",children:"🤔"}),n.jsx("h3",{className:"text-xl font-bold mb-2 text-white",children:"Leave Swipe Mode?"}),n.jsx("p",{className:"text-gray-400 mb-6",children:"Your progress will be saved"}),n.jsxs("div",{className:"flex gap-3",children:[n.jsx("button",{onClick:()=>Y(!1),className:"flex-1 bg-blue-600 hover:bg-blue-700 py-3 rounded-xl font-medium text-white",children:"Stay"}),n.jsx("button",{onClick:Gn,className:"flex-1 bg-gray-700 hover:bg-gray-600 py-3 rounded-xl font-medium text-white",children:"Leave"})]})]})}),w&&n.jsx("div",{className:"fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50",children:n.jsx("div",{className:"bg-gradient-to-br from-purple-600 to-pink-600 px-8 py-6 rounded-3xl text-white font-bold text-2xl shadow-2xl animate-fadeIn",children:R})}),v&&n.jsx("div",{className:"fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 pointer-events-none",children:n.jsx("div",{className:"bg-gray-800/90 px-6 py-3 rounded-full text-white font-bold animate-fadeIn",children:v})}),n.jsx("style",{jsx:!0,children:`
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
      `})]})},mv=({question:e,index:t,answered:r,onAnswer:s,onFiftyFifty:a,onAudience:i,eliminated:o,audiencePercentages:l,canUseFiftyFifty:c,canUseAudience:u})=>{const f=p=>{switch(p){case"easy":return"from-green-500 to-green-600";case"hard":return"from-red-500 to-red-600";default:return"from-yellow-500 to-yellow-600"}};return n.jsxs("div",{id:`question-${t}`,className:"h-screen snap-start flex flex-col px-4 pb-4",style:{paddingTop:"150px"},children:[n.jsx("div",{className:"flex justify-center py-2",children:n.jsx("span",{className:"text-8xl",style:{animation:"float 3s ease-in-out infinite"},children:e.mascot})}),n.jsxs("div",{className:"flex-1 flex flex-col justify-start max-w-md mx-auto w-full",children:[n.jsxs("div",{className:`bg-gradient-to-br ${f(e.difficulty)} p-6 rounded-3xl mb-4`,children:[n.jsxs("div",{className:"text-white/80 text-sm mb-2",children:["Question ",t+1]}),n.jsx("h2",{className:"text-2xl font-bold text-white",children:e.prompt})]}),n.jsx("div",{className:"space-y-3 mb-3",children:e.options.map((p,h)=>{const b=r!==void 0,g=r===h,N=h===e.answerIndex,C=o.includes(h);let v="w-full p-4 rounded-2xl font-medium transition-all ";return C?v+="bg-gray-700/30 text-gray-500/50 cursor-not-allowed":b?N?v+="bg-green-500 text-white":g?v+="bg-red-500 text-white":v+="bg-gray-700 text-gray-400":v+="bg-gray-800 text-white hover:bg-gray-700",n.jsx("button",{onClick:()=>!b&&!C&&s(h),disabled:b||C,className:v,children:n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsx("span",{className:"text-lg",children:["🅰️","🅱️","🅲️","🅳️"][h]}),n.jsx("span",{className:"flex-1 text-left",children:p}),l&&l[h]>0&&n.jsxs("span",{className:"bg-purple-600/20 px-2 py-1 rounded-full text-xs",children:[l[h],"%"]}),b&&N&&n.jsx("span",{children:"✓"})]})},h)})}),!r&&n.jsxs("div",{className:"flex justify-center gap-3 mb-3",children:[n.jsx("button",{onClick:a,disabled:!c,className:`px-4 py-2 rounded-lg font-medium text-sm ${c?"bg-orange-600 text-white":"bg-gray-700 text-gray-500"}`,children:"⚡ 50:50"}),n.jsx("button",{onClick:i,disabled:!u,className:`px-4 py-2 rounded-lg font-medium text-sm ${u?"bg-purple-600 text-white":"bg-gray-700 text-gray-500"}`,children:"👥 Audience"})]}),n.jsx("div",{className:"text-center mt-3 mb-2",children:n.jsxs("div",{className:"text-gray-500 text-xs",children:[e.stats.views.toLocaleString()," views • ",e.stats.attempted.toLocaleString()," attempted • ",e.stats.correctRate,"% correct"]})}),n.jsx("div",{className:"text-center mt-12 mb-4",children:n.jsx("div",{className:"text-gray-500 text-sm animate-bounce",children:"Swipe up for next"})})]})]})};function hv(){const[e]=Sm(),t=He();return bt(),d.useEffect(()=>{const r=e.get("category"),s=e.get("difficulty"),a=e.get("from")==="quest",i=["general-knowledge","fun-facts","science","history","geography","computer","artificial-intelligence","sports","mixed"],o=["easy","medium","hard"],l=r==="random"?i[Math.floor(Math.random()*i.length)]:r||"mixed",c=s==="random"?o[Math.floor(Math.random()*o.length)]:s||"medium";console.log("QuizPlay - fromQuest:",a),console.log("QuizPlay - returnPath will be:",a?"/quests":"/"),t(`/quiz/${l}`,{replace:!0,state:{mode:"quiz",difficulty:c,count:5,timer:{type:"per_q",seconds:45},fromQuest:a,returnPath:a?"/profile/quests":"/"}})},[e,t]),n.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh",background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",color:"white",fontSize:"20px"},children:"Starting your quiz..."})}function pv(){const[e]=Sm(),t=He();return d.useEffect(()=>{const r=e.get("questions")||"15",s=e.get("difficulty")||"easy",a=e.get("category")||"mixed",i=e.get("from")==="quest",o=["general-knowledge","fun-facts","science","history","geography","computer","artificial-intelligence","sports"],l=a==="random"?o[Math.floor(Math.random()*o.length)]:a;console.log("PracticeStart - Launching practice mode:",{category:l,difficulty:s,questions:r,fromQuest:i}),t(`/quiz/${l}`,{replace:!0,state:{mode:"practice",difficulty:s,count:parseInt(r),timer:{type:"off",seconds:0},fromQuest:i,questType:i?"practiceQuestions":null,returnPath:i?"/profile/quests":"/"}})},[e,t]),n.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh",background:"linear-gradient(135deg, #10B981 0%, #059669 100%)",color:"white",fontSize:"20px"},children:"Loading practice questions..."})}function xv(){const e=He(),[t,r]=d.useState(""),{player:s,levelProgress:a}=jn(),i=()=>{try{const u=JSON.parse(localStorage.getItem("qp_stats")||'{"sessions":[]}'),f=new Date().setHours(0,0,0,0);return u.sessions.filter(h=>new Date(h.timestamp).setHours(0,0,0,0)===f).reduce((h,b)=>h+(b.earnedCoins||0),0)}catch{return 0}},o={name:(s==null?void 0:s.name)||"Player",rank:23,streak:(s==null?void 0:s.currentStreak)||0,todayQuizzes:3,todayCoins:i()};d.useEffect(()=>{const u=new Date().getHours();u<12?r("Good morning"):u<17?r("Good afternoon"):r("Good evening")},[]);const l=`
    rounded-3xl p-5 text-left text-white 
    transition-all duration-300 ease-out
    active:scale-[0.97] hover:scale-[1.02]
    shadow-[0_8px_32px_rgba(0,0,0,0.3)]
    hover:shadow-[0_12px_48px_rgba(0,0,0,0.4)]
    relative overflow-hidden
    before:absolute before:inset-0 before:bg-white/5 before:opacity-0 
    hover:before:opacity-100 before:transition-opacity before:duration-300
  `,c=a.required>0?a.current/a.required*100:0;return n.jsxs("div",{className:"min-h-full bg-[#0B0C10] text-white pt-10 px-3",children:[n.jsxs("div",{className:"mb-6",children:[n.jsxs("div",{className:"flex items-center justify-between mb-4",children:[n.jsx("div",{children:n.jsxs("h1",{className:"text-2xl font-bold px-3",children:[t,", ",(s==null?void 0:s.name)||"Player"," 👋"]})}),n.jsx("button",{onClick:()=>e("/profile/settings"),className:"w-10 h-10 rounded-2xl bg-white/10 border border-white/20 grid place-items-center hover:bg-white/20 transition",children:n.jsx("span",{className:"text-xl",children:"⚙️"})})]}),n.jsxs("div",{className:"rounded-3xl bg-gradient-to-r from-slate-800/50 to-slate-900/50 border border-white/10 p-4 backdrop-blur-sm",children:[n.jsxs("div",{className:"flex items-center gap-4 mb-3",children:[n.jsx("div",{className:"w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 grid place-items-center text-2xl font-bold",children:o.name[0]}),n.jsxs("div",{className:"flex-1",children:[n.jsx("div",{className:"text-lg font-semibold",children:s.name||"Player"}),n.jsxs("div",{className:"text-white/60 text-sm",children:["Level ",s.level]})]}),n.jsxs("div",{className:"text-right",children:[n.jsxs("div",{className:"text-yellow-400 font-bold text-lg",children:[s.coins," 🪙"]}),n.jsxs("div",{className:"text-white/60 text-sm",children:["Rank #",o.rank]})]})]}),n.jsxs("div",{className:"mb-3",children:[n.jsxs("div",{className:"flex justify-between text-xs text-white/60 mb-1",children:[n.jsx("span",{children:"XP Progress"}),n.jsxs("span",{children:[a.current,"/",a.required]})]}),n.jsx("div",{className:"h-2 bg-white/10 rounded-full overflow-hidden",children:n.jsx("div",{className:"h-full bg-gradient-to-r from-blue-400 to-purple-500 rounded-full transition-all duration-1000 ease-out",style:{width:`${c}%`}})})]}),n.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[n.jsxs("div",{className:"text-center p-2 rounded-xl bg-white/5",children:[n.jsxs("div",{className:"text-orange-400 font-bold text-lg",children:["🔥 ",o.streak]}),n.jsx("div",{className:"text-white/60 text-xs",children:"Day Streak"})]}),n.jsxs("div",{className:"text-center p-2 rounded-xl bg-white/5",children:[n.jsxs("div",{className:"text-green-400 font-bold text-lg",children:["+",o.todayCoins]}),n.jsx("div",{className:"text-white/60 text-xs",children:"Today"})]})]})]})]}),n.jsxs("button",{onClick:()=>e("/profile/leaderboard"),className:`${l} w-full mb-4 bg-gradient-to-br from-[#5AA9FF] via-[#6C63FF] to-[#9C6BFF]`,children:[n.jsx("div",{className:"absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-8 translate-x-8 animate-pulse"}),n.jsxs("div",{className:"relative flex items-start justify-between",children:[n.jsxs("div",{children:[n.jsx("div",{className:"text-xs opacity-90 mb-1",children:"🏆 Rank & Coins"}),n.jsx("div",{className:"text-3xl font-extrabold tracking-tight mb-2",children:"LEADERBOARD"}),n.jsxs("div",{className:"text-xs opacity-75 flex items-center gap-2",children:[n.jsx("span",{className:"w-2 h-2 bg-green-400 rounded-full animate-pulse"}),"Weekly reset · Ends in 2d 14h"]})]}),n.jsx("div",{className:"w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm grid place-items-center text-2xl border border-white/30",children:"🏆"})]})]}),n.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[n.jsxs("button",{onClick:()=>e("/profile/history"),className:`${l} bg-gradient-to-br from-[#D19A00] to-[#C94B4B] relative`,children:[n.jsx("div",{className:"absolute top-2 right-2 w-3 h-3 bg-white/20 rounded-full"}),n.jsx("div",{className:"text-3xl mb-3",children:"📊"}),n.jsx("div",{className:"text-sm font-bold mb-1",children:"HISTORY"}),n.jsx("div",{className:"text-[11px] opacity-80",children:"Quizzes & Practice"}),n.jsxs("div",{className:"text-[10px] opacity-60 mt-1",children:["+",o.todayQuizzes," today"]})]}),n.jsxs("button",{onClick:()=>e("/profile/rewards"),className:`${l} bg-gradient-to-br from-[#2EB872] to-[#1EA07A] relative`,children:[n.jsx("div",{className:"absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full animate-bounce"}),n.jsx("div",{className:"text-3xl mb-3",children:"🎁"}),n.jsx("div",{className:"text-sm font-bold mb-1",children:"REWARDS"}),n.jsx("div",{className:"text-[11px] opacity-80",children:"Claim & Redeem"}),n.jsx("div",{className:"text-[10px] opacity-60 mt-1",children:"2 available"})]}),n.jsxs("button",{onClick:()=>e("/profile/badges"),className:`${l} bg-gradient-to-br from-[#E65C00] to-[#F9D423] relative`,children:[n.jsx("div",{className:"absolute -top-1 -right-1 w-6 h-6 bg-purple-600 rounded-full grid place-items-center text-[10px] font-bold animate-pulse",children:"NEW"}),n.jsx("div",{className:"text-3xl mb-3",children:"🏅"}),n.jsx("div",{className:"text-sm font-bold mb-1",children:"BADGES"}),n.jsx("div",{className:"text-[11px] opacity-80",children:"Collectables"}),n.jsx("div",{className:"text-[10px] opacity-60 mt-1",children:"4/15 unlocked"})]}),n.jsxs("button",{onClick:()=>e("/profile/achievements"),className:`${l} bg-gradient-to-br from-[#5D26C1] to-[#A17FE0] relative`,children:[n.jsx("div",{className:"text-3xl mb-3",children:"🎯"}),n.jsx("div",{className:"text-sm font-bold mb-1",children:"ACHIEVEMENTS"}),n.jsx("div",{className:"text-[11px] opacity-80",children:"Milestones"}),n.jsx("div",{className:"text-[10px] opacity-60 mt-1",children:"67% complete"})]})]}),n.jsxs("div",{className:"mt-4 space-y-3",children:[n.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[n.jsx("button",{onClick:()=>e("/profile/streaks"),className:`${l} bg-gradient-to-r from-orange-600/80 to-red-600/80 backdrop-blur-sm border border-orange-500/30`,children:n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsx("div",{className:"text-2xl",children:"🔥"}),n.jsxs("div",{children:[n.jsx("div",{className:"text-sm font-bold",children:"STREAK"}),n.jsxs("div",{className:"text-[11px] opacity-80",children:[o.streak," days strong"]})]})]})}),n.jsx("button",{onClick:()=>e("/profile/quests"),className:`${l} bg-gradient-to-r from-blue-600/80 to-cyan-600/80 backdrop-blur-sm border border-blue-500/30`,children:n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsx("div",{className:"text-2xl",children:"⚡"}),n.jsxs("div",{children:[n.jsx("div",{className:"text-sm font-bold",children:"QUESTS"}),n.jsx("div",{className:"text-[11px] opacity-80",children:"2 active goals"})]})]})})]}),n.jsx("button",{onClick:()=>e("/profile/settings"),className:`${l} w-full bg-gradient-to-r from-slate-700/50 to-slate-800/50 backdrop-blur-sm border border-white/10`,children:n.jsxs("div",{className:"flex items-center justify-between",children:[n.jsxs("div",{className:"flex items-center gap-4",children:[n.jsx("div",{className:"w-12 h-12 rounded-2xl bg-white/10 grid place-items-center text-xl",children:"⚙️"}),n.jsxs("div",{children:[n.jsx("div",{className:"text-sm font-bold",children:"SETTINGS"}),n.jsx("div",{className:"text-[11px] opacity-70",children:"Customize your experience"})]})]}),n.jsx("div",{className:"text-white/40",children:"→"})]})})]}),n.jsx("div",{className:"h-6"})]})}const ls="🪙",ma={global:[{rank:1,name:"Bryan Wolf",handle:"@bryan",score:43,avatar:"/profile/rank1.png",trend:"+5",streak:12,country:"🇺🇸"},{rank:2,name:"Meghan Jess…",handle:"@meghan",score:40,avatar:"/profile/rank2.png",trend:"+2",streak:8,country:"🇨🇦"},{rank:3,name:"Alex Turner",handle:"@alex",score:38,avatar:"/profile/rank3.png",trend:"±0",streak:15,country:"🇬🇧"},{rank:4,name:"Marsha Fisher",handle:"@marsha",score:36,trend:"-1",streak:5,country:"🇦🇺"},{rank:5,name:"Juanita Cormier",handle:"@juanita",score:35,trend:"+1",streak:3,country:"🇲🇽"},{rank:6,name:"You",handle:"@you",score:34,you:!0,avatar:"/profile/avatar.png",trend:"+3",streak:7,country:"🇮🇳"},{rank:7,name:"Tamara Schmidt",handle:"@tamara",score:33,trend:"-2",streak:2,country:"🇩🇪"},{rank:8,name:"Ricardo Veum",handle:"@ricardo",score:32,trend:"+1",streak:4,country:"🇧🇷"}],friends:[{rank:1,name:"You",handle:"@you",score:34,you:!0,avatar:"/profile/avatar.png",trend:"+2",streak:7,country:"🇮🇳"},{rank:2,name:"Sarah Chen",handle:"@sarah",score:31,trend:"-1",streak:4,country:"🇸🇬",friend:!0},{rank:3,name:"Mike Johnson",handle:"@mike",score:29,trend:"+3",streak:2,country:"🇺🇸",friend:!0},{rank:4,name:"Priya Sharma",handle:"@priya",score:27,trend:"±0",streak:5,country:"🇮🇳",friend:!0},{rank:5,name:"David Kim",handle:"@david",score:25,trend:"+1",streak:3,country:"🇰🇷",friend:!0},{rank:6,name:"Emma Wilson",handle:"@emma",score:23,trend:"-2",streak:1,country:"🇬🇧",friend:!0}],india:[{rank:1,name:"Rohit Sharma",handle:"@rohit",score:45,trend:"+4",streak:10,country:"🇮🇳"},{rank:2,name:"Priya Patel",handle:"@priya",score:42,trend:"+1",streak:8,country:"🇮🇳"},{rank:3,name:"You",handle:"@you",score:34,you:!0,avatar:"/profile/avatar.png",trend:"+3",streak:7,country:"🇮🇳"},{rank:4,name:"Arjun Singh",handle:"@arjun",score:32,trend:"-1",streak:5,country:"🇮🇳"},{rank:5,name:"Kavya Reddy",handle:"@kavya",score:30,trend:"+2",streak:3,country:"🇮🇳"},{rank:6,name:"Vikram Gupta",handle:"@vikram",score:28,trend:"±0",streak:4,country:"🇮🇳"}]},ha=[{name:"Diamond",min:40,color:"from-cyan-400 to-blue-600",icon:"💎"},{name:"Gold",min:30,color:"from-yellow-400 to-orange-500",icon:"🥇"},{name:"Silver",min:20,color:"from-gray-300 to-gray-500",icon:"🥈"},{name:"Bronze",min:10,color:"from-orange-600 to-red-600",icon:"🥉"}];function gv(){var h,b;const e=He(),{player:t}=jn(),r={global:ma.global.map(g=>g.you?{...g,name:(t==null?void 0:t.name)||"You",score:(t==null?void 0:t.coins)||0,streak:(t==null?void 0:t.currentStreak)||0}:g),friends:ma.friends.map(g=>g.you?{...g,name:(t==null?void 0:t.name)||"You",score:(t==null?void 0:t.coins)||0,streak:(t==null?void 0:t.currentStreak)||0}:g),india:ma.india.map(g=>g.you?{...g,name:(t==null?void 0:t.name)||"You",score:(t==null?void 0:t.coins)||0,streak:(t==null?void 0:t.currentStreak)||0}:g)};console.log("Debug - Player coins:",t==null?void 0:t.coins),console.log("Debug - Friends data:",r.friends[0]);const[s,a]=d.useState({days:2,hours:14,minutes:17}),[i,o]=d.useState("global"),l=r[i]||r.global;console.log("Player coins:",t==null?void 0:t.coins,"Current user score:",(h=l.find(g=>g.you))==null?void 0:h.score);const c=l.find(g=>g.you),u=l.slice(0,3),f=l.slice(3);d.useEffect(()=>{const g=setInterval(()=>{a(N=>N.minutes>0?{...N,minutes:N.minutes-1}:N.hours>0?{...N,hours:N.hours-1,minutes:59}:N.days>0?{...N,days:N.days-1,hours:23,minutes:59}:N)},6e4);return()=>clearInterval(g)},[]);const p=g=>{const N=Math.max(...l.map(v=>v.score)),C=g/N*100;return C>=90?ha[0]:C>=70?ha[1]:C>=40?ha[2]:ha[3]};return n.jsxs("div",{className:"min-h-screen bg-black text-white pt-12",children:[n.jsxs("div",{className:"flex items-center justify-between mb-5",children:[n.jsx("button",{onClick:()=>e(-1),className:"px-3 py-1.5 rounded-xl border border-white/10 bg-white/5 text-sm hover:bg-white/10 transition",children:"← Back"}),n.jsxs("div",{className:"text-center",children:[n.jsx("div",{className:"text-lg font-bold",children:"🏆 Leaderboard"}),n.jsxs("div",{className:"text-xs text-white/60",children:["Ends in ",s.days,"d ",s.hours,"h ",s.minutes,"m"]})]}),n.jsx("button",{className:"px-3 py-1.5 rounded-xl border border-white/10 bg-white/5 text-sm hover:bg-white/10 transition",children:"📊"})]}),n.jsxs("div",{className:`mb-5 rounded-2xl bg-gradient-to-r ${p(c==null?void 0:c.score).color} p-4 text-center relative overflow-hidden`,children:[n.jsx("div",{className:"absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -translate-y-10 translate-x-10 animate-pulse"}),n.jsx("div",{className:"absolute bottom-0 left-0 w-16 h-16 bg-white/5 rounded-full translate-y-8 -translate-x-8"}),n.jsxs("div",{className:"relative z-10",children:[n.jsx("div",{className:"text-2xl mb-1",children:p(c==null?void 0:c.score).icon}),n.jsxs("div",{className:"text-sm font-bold text-white",children:[p(c==null?void 0:c.score).name," League"]}),n.jsx("div",{className:"text-xs text-white/80",children:i==="friends"?"Competing with friends!":"You're competing with the best!"})]})]}),n.jsx("div",{className:"flex gap-2 mb-5",children:[{key:"global",label:"🌍 Global",count:"10M+"},{key:"friends",label:"👥 Friends",count:ma.friends.length},{key:"india",label:"🇮🇳 India",count:"2.5M"}].map(g=>n.jsxs("button",{onClick:()=>o(g.key),className:`flex-1 px-2 py-2 rounded-xl text-xs font-semibold transition-all duration-300 ${i===g.key?"bg-lime-500 text-black shadow-lg scale-105":"border border-white/10 bg-white/5 hover:bg-white/10"}`,children:[n.jsx("div",{children:g.label}),n.jsx("div",{className:`text-[10px] ${i===g.key?"text-black/70":"text-white/60"}`,children:g.count})]},g.key))}),n.jsx("div",{className:"mb-5 rounded-2xl bg-gradient-to-r from-lime-500/20 to-green-500/20 border border-lime-500/30 p-3",children:n.jsxs("div",{className:"flex items-center justify-between",children:[n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsx("div",{className:"w-10 h-10 rounded-xl bg-lime-500/20 grid place-items-center text-lg",children:"🧑‍💻"}),n.jsxs("div",{children:[n.jsx("div",{className:"font-bold text-lime-400 text-sm",children:"Your Position"}),n.jsxs("div",{className:"text-xs text-white/70 flex items-center gap-2",children:[n.jsxs("span",{children:["Rank #",c==null?void 0:c.rank]}),n.jsx("span",{className:`px-1.5 py-0.5 rounded-full text-[9px] font-bold ${c!=null&&c.trend.startsWith("+")?"bg-green-500/20 text-green-400":c!=null&&c.trend.startsWith("-")?"bg-red-500/20 text-red-400":"bg-gray-500/20 text-gray-400"}`,children:c==null?void 0:c.trend}),n.jsxs("span",{className:"text-white/50 text-[10px]",children:["in ",i==="global"?"Global":i==="friends"?"Friends":"India"]})]})]})]}),n.jsxs("div",{className:"text-right",children:[n.jsxs("div",{className:"text-lg font-bold text-lime-400",children:[c==null?void 0:c.score," ",ls]}),n.jsxs("div",{className:"text-xs text-white/60",children:["🔥 ",c==null?void 0:c.streak," streak"]})]})]})}),n.jsxs("div",{className:"mb-6",children:[n.jsx("h3",{className:"text-center text-sm font-semibold text-white/80 mb-4",children:"👑 Hall of Fame"}),n.jsxs("div",{className:"bg-gradient-to-b from-white/5 to-white/10 rounded-2xl p-4 border border-white/10 relative overflow-hidden",children:[n.jsx("div",{className:"absolute top-4 left-6 text-2xl opacity-40 animate-pulse",children:"🏆"}),n.jsx("div",{className:"absolute top-8 right-8 text-lg opacity-40 animate-bounce",style:{animationDelay:"1s"},children:"✨"}),n.jsx("div",{className:"absolute bottom-6 left-12 text-xl opacity-10 animate-pulse",style:{animationDelay:"2s"},children:"🥇"}),n.jsx("div",{className:"absolute bottom-4 right-6 text-lg opacity-40 animate-bounce",style:{animationDelay:"0.5s"},children:"⭐"}),n.jsxs("div",{className:"flex items-end justify-center gap-8 relative z-10",children:[u[1]&&n.jsxs("div",{className:"flex flex-col items-center",children:[n.jsxs("div",{className:"relative mb-2",children:[n.jsx(pa,{src:u[1].avatar,fallback:u[1].name,size:56}),n.jsx("div",{className:"absolute -bottom-1 left-1/2 -translate-x-1/2 w-7 h-7 bg-gradient-to-br from-gray-300 to-gray-500 rounded-full grid place-items-center text-sm font-bold text-black shadow-lg",children:"2"})]}),n.jsx("div",{className:"text-sm font-semibold mb-1 mt-1",children:xa(u[1].name,8)}),n.jsxs("div",{className:"text-xs text-lime-400 font-bold",children:[u[1].score," ",ls]})]}),u[0]&&n.jsxs("div",{className:"flex flex-col items-center -mb-3",children:[n.jsxs("div",{className:"relative mb-2",children:[n.jsx(pa,{src:u[0].avatar,fallback:u[0].name,size:72}),n.jsx("div",{className:"absolute -top-3 left-1/2 -translate-x-1/2",children:n.jsx(vv,{})}),n.jsx("div",{className:"absolute -bottom-1 left-1/2 -translate-x-1/2 w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full grid place-items-center text-base font-bold text-black shadow-lg animate-pulse",children:"1"})]}),n.jsx("div",{className:"text-sm font-bold mb-1 mt-1",children:xa(u[0].name,8)}),n.jsxs("div",{className:"text-sm text-lime-400 font-bold mb-1",children:[u[0].score," ",ls]}),n.jsx("div",{className:"px-2 py-1 bg-yellow-400/20 rounded-full text-[9px] text-yellow-400 font-bold",children:"CHAMPION"})]}),u[2]&&n.jsxs("div",{className:"flex flex-col items-center",children:[n.jsxs("div",{className:"relative mb-2",children:[n.jsx(pa,{src:u[2].avatar,fallback:u[2].name,size:56}),n.jsx("div",{className:"absolute -bottom-1 left-1/2 -translate-x-1/2 w-7 h-7 bg-gradient-to-br from-orange-600 to-red-600 rounded-full grid place-items-center text-sm font-bold text-white shadow-lg",children:"3"})]}),n.jsx("div",{className:"text-sm font-semibold mb-1 mt-1",children:xa(u[2].name,8)}),n.jsxs("div",{className:"text-xs text-lime-400 font-bold",children:[u[2].score," ",ls]})]})]})]})]}),f.length>0&&n.jsxs("div",{className:"rounded-3xl bg-white/5 border border-white/10 p-2 mb-4",children:[n.jsxs("div",{className:"flex justify-between items-center mb-2 px-2",children:[n.jsx("h3",{className:"text-sm font-semibold",children:"Rankings"}),n.jsx("div",{className:"text-xs text-white/60",children:"Live updates"})]}),n.jsx("ul",{className:"space-y-1.5",children:f.map((g,N)=>n.jsxs("li",{className:`flex items-center justify-between px-3 py-2.5 rounded-xl transition-all duration-300 ${g.you?"bg-lime-500/90 text-black shadow-lg shadow-lime-500/20 scale-[1.02]":"bg-white/5 hover:bg-white/10"}`,style:{animationDelay:`${N*100}ms`,animation:"fadeInUp 0.6s ease-out forwards"},children:[n.jsxs("div",{className:"flex items-center gap-2.5",children:[n.jsx(yv,{n:g.rank,you:g.you}),n.jsx(pa,{src:g.avatar,fallback:g.name,size:36}),n.jsxs("div",{className:"flex flex-col leading-tight",children:[n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx("span",{className:"text-sm font-semibold",children:xa(g.name,12)}),n.jsx("span",{className:"text-xs",children:g.country}),g.friend&&n.jsx("span",{className:"text-[9px] bg-blue-500/20 text-blue-400 px-1 py-0.5 rounded-full",children:"Friend"})]}),n.jsxs("div",{className:`text-xs flex items-center gap-1.5 ${g.you?"text-black/70":"text-white/60"}`,children:[n.jsx("span",{children:g.handle}),n.jsxs("span",{children:["🔥",g.streak]})]})]})]}),n.jsxs("div",{className:"flex flex-col items-end",children:[n.jsxs("div",{className:"flex items-center gap-1 text-sm font-bold",children:[n.jsx("span",{children:g.score}),n.jsx("span",{className:g.you?"opacity-90":"opacity-80",children:ls})]}),n.jsx("div",{className:`text-xs px-1.5 py-0.5 rounded-full font-bold ${g.trend.startsWith("+")?"bg-green-500/20 text-green-400":g.trend.startsWith("-")?"bg-red-500/20 text-red-400":"bg-gray-500/20 text-gray-400"}`,children:g.trend})]})]},`${i}-${g.rank}`))})]}),c&&c.rank>1&&n.jsxs("div",{className:"mb-4 p-3 rounded-2xl bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 text-center",children:[n.jsx("div",{className:"text-sm font-semibold mb-2",children:"🚀 Climb Higher!"}),n.jsx("div",{className:"text-xs text-white/70 mb-3",children:i==="friends"&&c.rank===1?"🎉 You're #1 among friends!":`You need ${Math.max(0,(((b=l[c.rank-2])==null?void 0:b.score)||0)-c.score+1)} more coins to reach rank #${c.rank-1}`}),!(i==="friends"&&c.rank===1)&&n.jsx("button",{onClick:()=>e("/play"),className:"px-5 py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl text-sm font-bold hover:scale-105 transition-transform",children:"Play Now 🎮"})]}),n.jsx("style",{jsx:!0,children:`
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
      `})]})}function pa({src:e,fallback:t,size:r=56}){const s=bv(t);return n.jsx("div",{className:"grid place-items-center rounded-full bg-white/10 overflow-hidden border-2 border-white/20",style:{width:r,height:r},children:e?n.jsx("img",{src:e,alt:"",className:"w-full h-full object-cover"}):n.jsx("span",{className:"text-sm font-semibold",children:s})})}function vv(){return n.jsxs("div",{className:"w-7 h-5 bg-gradient-to-t from-yellow-400 to-yellow-300 rounded-b-lg shadow-lg relative",children:[n.jsxs("svg",{viewBox:"0 0 100 40",className:"w-full h-full",children:[n.jsx("path",{d:"M15,35 L15,18 L35,28 L50,10 L65,28 L85,18 L85,35 Z",fill:"url(#crownGradient)"}),n.jsx("defs",{children:n.jsxs("linearGradient",{id:"crownGradient",x1:"0%",y1:"0%",x2:"0%",y2:"100%",children:[n.jsx("stop",{offset:"0%",stopColor:"#FCD34D"}),n.jsx("stop",{offset:"100%",stopColor:"#F59E0B"})]})})]}),n.jsx("div",{className:"absolute top-0.5 left-1/2 -translate-x-1/2 w-1 h-1 bg-red-400 rounded-full animate-pulse"})]})}function yv({n:e,you:t}){return n.jsx("div",{className:`w-7 h-7 grid place-items-center rounded-full text-sm font-bold ${t?"bg-black/10 text-black":"bg-white/10 text-white"}`,children:e})}function xa(e,t=12){return(e==null?void 0:e.length)>t?e.slice(0,t-1)+"…":e}function bv(e=""){var r;const t=e.trim().split(/\s+/);return t.length===1?t[0].slice(0,2).toUpperCase():(t[0][0]+(((r=t[1])==null?void 0:r[0])||"")).toUpperCase()}const wv="qp_recent",jv="qp_review_snapshot",Qd=[{id:Date.now()-864e5,type:"quiz",category:"General Knowledge",difficulty:"easy",score:8,total:10,accuracy:80,time:"02:31",ms:151e3,date:"Yesterday",timestamp:Date.now()-864e5,mode:"Quiz"},{id:Date.now()-1728e5,type:"practice",category:"Science",difficulty:"medium",score:12,total:15,accuracy:80,time:"06:02",ms:362e3,date:"2 days ago",timestamp:Date.now()-1728e5,mode:"Practice"},{id:Date.now()-2592e5,type:"quiz",category:"Fun Facts",difficulty:"easy",score:9,total:10,accuracy:90,time:"02:05",ms:125e3,date:"3 days ago",timestamp:Date.now()-2592e5,mode:"Quiz"}];function Nv(){const[e,t]=d.useState("quizzes"),[r,s]=d.useState(null),[a,i]=d.useState(!1),[o,l]=d.useState("all"),[c,u]=d.useState("all"),[f,p]=d.useState("date"),[h,b]=d.useState([]),[g,N]=d.useState(!0),C=He(),v=S=>{if(!S)return"00:00";const x=Math.floor(S/1e3),w=Math.floor(x/60),k=x%60;return`${String(w).padStart(2,"0")}:${String(k).padStart(2,"0")}`},m=S=>{if(!S)return"Unknown";const x=new Date(S),k=Math.floor((new Date-x)/(1e3*60*60*24));return k===0?"Today":k===1?"Yesterday":k<7?`${k} days ago`:`${["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][x.getMonth()]} ${x.getDate()}`};d.useEffect(()=>{let S=!1;N(!0);const x=R=>{try{return JSON.parse(R)}catch{return null}},w=R=>encodeURIComponent(String(R).trim().toLowerCase().replace(/\s+/g,"-")),k=R=>{var T,z,D,te;const M=Number(R.ts??R.timestamp??R.id)||Date.now(),q=Number(R.ms)||0,ee=Number(R.total)||0,Q=Number(R.correct)||0,U=String(R.mode||"").toLowerCase().includes("practice")?"practice":"quiz",_=((T=R.snapshot)==null?void 0:T.category)||((z=R.snapshot)==null?void 0:z.categoryLabel)||R.cat||R.category||"Unknown",I=((D=R.snapshot)==null?void 0:D.categoryParam)||w(_),B=String(((te=R.snapshot)==null?void 0:te.difficulty)||R.difficulty||"medium").toLowerCase();return{id:R.id??M,type:U,category:_,categoryParam:I,difficulty:B,score:Q,total:ee,accuracy:ee?Math.round(Q/ee*100):0,time:v(q),ms:q,date:m(M),timestamp:M,snapshot:R.snapshot??null,mode:R.mode||(U==="practice"?"Practice":"Quiz")}};try{const R=localStorage.getItem(wv),M=R?x(R):null,ee=(Array.isArray(M)&&M.length?M:Qd).map(k).filter(Q=>Q&&Q.timestamp).sort((Q,Y)=>Y.timestamp-Q.timestamp);S||b(ee)}catch(R){console.error("Error loading history:",R),S||b(Qd)}finally{S||N(!1)}return()=>{S=!0}},[]);const y=d.useMemo(()=>{const S=new Set(h.map(x=>x.category));return Array.from(S)},[h]),E=d.useMemo(()=>{let S=h.filter(x=>e==="quizzes"?x.type==="quiz":x.type==="practice");return o!=="all"&&(S=S.filter(x=>x.category===o)),c!=="all"&&(S=S.filter(x=>x.difficulty===c)),S.sort((x,w)=>f==="date"?w.timestamp-x.timestamp:f==="score"?w.accuracy-x.accuracy:f==="time"?x.ms-w.ms:0),S},[h,e,o,c,f]),j=d.useMemo(()=>{if(E.length===0)return null;const S=E.reduce((R,M)=>R+M.score,0),x=E.reduce((R,M)=>R+M.total,0),w=x?Math.round(S/x*100):0,k=E.reduce((R,M)=>R+M.ms,0);return{count:E.length,avgAccuracy:w,totalTime:v(k),bestScore:Math.max(...E.map(R=>R.accuracy))}},[E]),P=S=>S>=80?"text-green-400":S>=60?"text-blue-400":S>=40?"text-yellow-400":"text-red-400";return g?n.jsx("div",{className:"min-h-full bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900 flex items-center justify-center",children:n.jsx("div",{className:"text-white",children:"Loading history..."})}):n.jsxs("div",{className:"min-h-full bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900 pt-12",children:[n.jsx("div",{className:"",children:n.jsxs("div",{className:"px-4 pt-4 pb-4",children:[n.jsxs("div",{className:"flex items-center justify-between mb-3",children:[n.jsx("button",{onClick:()=>C("/profile",{replace:!0}),className:"px-3 py-1.5 rounded-xl border border-white/20 bg-white/10 text-white text-sm flex items-center gap-1",children:"← Back"}),n.jsx("button",{onClick:()=>i(!a),className:"p-2 rounded-xl border border-white/20 bg-white/10 text-white",children:n.jsx(Cv,{})})]}),n.jsx("h1",{className:"text-2xl font-bold text-white mb-1",children:"History"}),n.jsx("p",{className:"text-white/70 text-sm",children:"Track your progress"})]})}),n.jsxs("div",{className:"px-4 pb-20",children:[n.jsx("div",{className:`
             sticky top-0 z-[60] isolate
            -mx-4 px-4
            py-4 mb-2
            bg-gray-900/95
            backdrop-blur-md
            border-b border-white/10
        `,children:n.jsx("div",{className:"flex items-center",children:n.jsx("div",{className:"inline-flex p-1 rounded-2xl bg-white/10 border border-white/20",children:[{value:"quizzes",label:"Quizzes",icon:"🎯"},{value:"practice",label:"Practice",icon:"📝"}].map(S=>n.jsxs("button",{onClick:()=>t(S.value),className:`px-12 py-2 text-sm rounded-xl transition-all duration-200 ${e===S.value?"bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg":"text-white/70 hover:text-white"}`,children:[n.jsx("span",{className:"mr-1",children:S.icon}),S.label]},S.value))})})}),j&&n.jsx("div",{className:"mb-4 p-4 rounded-2xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-white/20",children:n.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-3",children:[n.jsx(ga,{label:"Total",value:j.count}),n.jsx(ga,{label:"Avg Score",value:`${j.avgAccuracy}%`,color:P(j.avgAccuracy)}),n.jsx(ga,{label:"Best Score",value:`${j.bestScore}%`,color:"text-green-400"}),n.jsx(ga,{label:"Total Time",value:j.totalTime})]})}),a&&n.jsx("div",{className:"mb-4 p-4 rounded-2xl bg-white/10 border border-white/20",children:n.jsxs("div",{className:"space-y-3",children:[n.jsxs("div",{children:[n.jsx("label",{className:"text-xs text-white/60 mb-1 block",children:"Category"}),n.jsxs("select",{value:o,onChange:S=>l(S.target.value),className:"w-full px-3 py-2 rounded-xl bg-black/30 border border-white/20 text-white text-sm",children:[n.jsx("option",{value:"all",children:"All Categories"}),y.map(S=>n.jsx("option",{value:S,children:S},S))]})]}),n.jsxs("div",{className:"flex gap-2",children:[n.jsxs("div",{className:"flex-1",children:[n.jsx("label",{className:"text-xs text-white/60 mb-1 block",children:"Difficulty"}),n.jsxs("select",{value:c,onChange:S=>u(S.target.value),className:"w-full px-3 py-2 rounded-xl bg-black/30 border border-white/20 text-white text-sm",children:[n.jsx("option",{value:"all",children:"All"}),n.jsx("option",{value:"easy",children:"Easy"}),n.jsx("option",{value:"medium",children:"Medium"}),n.jsx("option",{value:"hard",children:"Hard"})]})]}),n.jsxs("div",{className:"flex-1",children:[n.jsx("label",{className:"text-xs text-white/60 mb-1 block",children:"Sort By"}),n.jsxs("select",{value:f,onChange:S=>p(S.target.value),className:"w-full px-3 py-2 rounded-xl bg-black/30 border border-white/20 text-white text-sm",children:[n.jsx("option",{value:"date",children:"Date"}),n.jsx("option",{value:"score",children:"Score"}),n.jsx("option",{value:"time",children:"Time"})]})]})]})]})}),E.length===0?n.jsxs("div",{className:"text-center py-12",children:[n.jsx("div",{className:"text-4xl mb-3",children:"📚"}),n.jsxs("p",{className:"text-white/60",children:["No ",e," history yet"]}),n.jsx("p",{className:"text-white/40 text-sm mt-1",children:"Start playing to see your progress here!"})]}):n.jsx("div",{className:"space-y-3",children:E.map((S,x)=>n.jsx(kv,{item:S,index:x,onClick:()=>s(S)},S.id))})]}),r&&n.jsx(Sv,{item:r,onClose:()=>s(null)})]})}function ga({label:e,value:t,color:r="text-white"}){return n.jsxs("div",{className:"text-center",children:[n.jsx("div",{className:"text-xs text-white/60 mb-1",children:e}),n.jsx("div",{className:`text-lg font-bold ${r}`,children:t})]})}function kv({item:e,index:t,onClick:r}){const s=o=>o>=80?"from-green-500/20 to-green-600/10 border-green-500/30":o>=60?"from-blue-500/20 to-blue-600/10 border-blue-500/30":o>=40?"from-yellow-500/20 to-yellow-600/10 border-yellow-500/30":"from-red-500/20 to-red-600/10 border-red-500/30",i=(o=>{const l=o==null?void 0:o.toLowerCase();return l==="easy"?{bg:"bg-green-500/20",text:"text-green-400",border:"border-green-500/30"}:l==="medium"?{bg:"bg-yellow-500/20",text:"text-yellow-400",border:"border-yellow-500/30"}:l==="hard"?{bg:"bg-red-500/20",text:"text-red-400",border:"border-red-500/30"}:{bg:"bg-gray-500/20",text:"text-gray-400",border:"border-gray-500/30"}})(e.difficulty);return n.jsxs("div",{onClick:r,className:`
        relative rounded-2xl p-4 cursor-pointer
        bg-gradient-to-br ${s(e.accuracy)}
        border transform transition-all duration-300 hover:scale-[1.02]
      `,children:[n.jsxs("div",{className:"flex items-start justify-between mb-3",children:[n.jsxs("div",{className:"flex-1",children:[n.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[n.jsx("span",{className:"text-lg",children:e.type==="quiz"?"🎯":"📝"}),n.jsx("h3",{className:"font-semibold text-white",children:e.category})]}),n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx("span",{className:`px-2 py-0.5 rounded-full text-xs ${i.bg} ${i.text} ${i.border} border`,children:e.difficulty}),n.jsx("span",{className:"text-xs text-white/50",children:e.date})]})]}),n.jsxs("div",{className:"text-right",children:[n.jsxs("div",{className:`text-2xl font-bold ${e.accuracy>=80?"text-green-400":e.accuracy>=60?"text-blue-400":e.accuracy>=40?"text-yellow-400":"text-red-400"}`,children:[e.accuracy,"%"]}),n.jsxs("div",{className:"text-xs text-white/60",children:[e.score,"/",e.total]})]})]}),n.jsxs("div",{className:"flex items-center justify-between text-xs",children:[n.jsxs("div",{className:"flex items-center gap-3 text-white/60",children:[n.jsxs("span",{children:["⏱ ",e.time]}),n.jsx("span",{children:e.mode})]}),n.jsx("span",{className:"text-white/40",children:"Tap to review →"})]})]})}function Sv({item:e,onClose:t}){const r=He();return d.useEffect(()=>{const s=a=>{a.key==="Escape"&&t()};return document.addEventListener("keydown",s),()=>document.removeEventListener("keydown",s)},[t]),n.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80",onClick:t,children:n.jsxs("div",{className:"w-full max-w-md bg-gray-900 rounded-3xl p-6 border border-white/20",onClick:s=>s.stopPropagation(),children:[n.jsxs("div",{className:"flex items-center justify-between mb-4",children:[n.jsx("h2",{className:"text-xl font-bold text-white",children:"Quiz Details"}),n.jsx("button",{onClick:t,className:"p-2 rounded-xl bg-white/10 hover:bg-white/20 transition-colors text-white",children:"✕"})]}),n.jsxs("div",{className:"space-y-4",children:[n.jsxs("div",{className:"p-4 rounded-2xl bg-white/5 border border-white/10",children:[n.jsxs("div",{className:"flex items-center justify-between mb-2",children:[n.jsx("span",{className:"text-white/60",children:"Category"}),n.jsx("span",{className:"text-white font-medium",children:e.category})]}),n.jsxs("div",{className:"flex items-center justify-between mb-2",children:[n.jsx("span",{className:"text-white/60",children:"Difficulty"}),n.jsx("span",{className:`${e.difficulty==="easy"?"text-green-400":e.difficulty==="medium"?"text-yellow-400":"text-red-400"} font-medium`,children:e.difficulty})]}),n.jsxs("div",{className:"flex items-center justify-between mb-2",children:[n.jsx("span",{className:"text-white/60",children:"Score"}),n.jsxs("span",{className:"text-white font-medium",children:[e.score,"/",e.total]})]}),n.jsxs("div",{className:"flex items-center justify-between mb-2",children:[n.jsx("span",{className:"text-white/60",children:"Accuracy"}),n.jsxs("span",{className:`${e.accuracy>=80?"text-green-400":e.accuracy>=60?"text-blue-400":"text-yellow-400"} font-medium`,children:[e.accuracy,"%"]})]}),n.jsxs("div",{className:"flex items-center justify-between",children:[n.jsx("span",{className:"text-white/60",children:"Time"}),n.jsx("span",{className:"text-white font-medium",children:e.time})]})]}),e.snapshot&&n.jsx("button",{onClick:()=>{t(),localStorage.setItem(jv,JSON.stringify(e.snapshot)),r(`/quiz/${e.categoryParam}/start?review=1&attempt=${e.id}`,{state:{reviewFrom:"history",historyPath:"/profile/history"}})},className:"w-full py-3 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium hover:opacity-90 transition-opacity",children:"Review Answers"}),n.jsx("button",{onClick:()=>{var s;t(),r(`/quiz/${e.categoryParam}/start`,{state:{mode:"quiz",retake:!0,difficulty:e.difficulty,count:e.total,timer:((s=e.snapshot)==null?void 0:s.timer)||{type:"per_q",seconds:45},fromHistory:!0}})},className:"w-full py-3 rounded-2xl border border-white/20 text-white font-medium hover:bg-white/10 transition-colors",children:"Retake Quiz"})]})]})})}function Cv(){return n.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:n.jsx("path",{d:"M3 6h18M7 12h10M10 18h4",strokeLinecap:"round",strokeLinejoin:"round"})})}const Ev=d.createContext({});function Im(e){const t=d.useRef(null);return t.current===null&&(t.current=e()),t.current}const Pv=typeof window<"u",Rv=Pv?d.useLayoutEffect:d.useEffect,Dm=d.createContext(null);function Tv(e){return typeof e=="object"&&e!==null}function _v(e){return Tv(e)&&"offsetHeight"in e}const Lv=d.createContext({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"});class Av extends d.Component{getSnapshotBeforeUpdate(t){const r=this.props.childRef.current;if(r&&t.isPresent&&!this.props.isPresent){const s=r.offsetParent,a=_v(s)&&s.offsetWidth||0,i=this.props.sizeRef.current;i.height=r.offsetHeight||0,i.width=r.offsetWidth||0,i.top=r.offsetTop,i.left=r.offsetLeft,i.right=a-i.width-i.left}return null}componentDidUpdate(){}render(){return this.props.children}}function Iv({children:e,isPresent:t,anchorX:r,root:s}){const a=d.useId(),i=d.useRef(null),o=d.useRef({width:0,height:0,top:0,left:0,right:0}),{nonce:l}=d.useContext(Lv);return d.useInsertionEffect(()=>{const{width:c,height:u,top:f,left:p,right:h}=o.current;if(t||!i.current||!c||!u)return;const b=r==="left"?`left: ${p}`:`right: ${h}`;i.current.dataset.motionPopId=a;const g=document.createElement("style");l&&(g.nonce=l);const N=s??document.head;return N.appendChild(g),g.sheet&&g.sheet.insertRule(`
          [data-motion-pop-id="${a}"] {
            position: absolute !important;
            width: ${c}px !important;
            height: ${u}px !important;
            ${b}px !important;
            top: ${f}px !important;
          }
        `),()=>{N.contains(g)&&N.removeChild(g)}},[t]),n.jsx(Av,{isPresent:t,childRef:i,sizeRef:o,children:d.cloneElement(e,{ref:i})})}const Dv=({children:e,initial:t,isPresent:r,onExitComplete:s,custom:a,presenceAffectsLayout:i,mode:o,anchorX:l,root:c})=>{const u=Im(Mv),f=d.useId();let p=!0,h=d.useMemo(()=>(p=!1,{id:f,initial:t,isPresent:r,custom:a,onExitComplete:b=>{u.set(b,!0);for(const g of u.values())if(!g)return;s&&s()},register:b=>(u.set(b,!1),()=>u.delete(b))}),[r,u,s]);return i&&p&&(h={...h}),d.useMemo(()=>{u.forEach((b,g)=>u.set(g,!1))},[r]),d.useEffect(()=>{!r&&!u.size&&s&&s()},[r]),o==="popLayout"&&(e=n.jsx(Iv,{isPresent:r,anchorX:l,root:c,children:e})),n.jsx(Dm.Provider,{value:h,children:e})};function Mv(){return new Map}function zv(e=!0){const t=d.useContext(Dm);if(t===null)return[!0,null];const{isPresent:r,onExitComplete:s,register:a}=t,i=d.useId();d.useEffect(()=>{if(e)return a(i)},[e]);const o=d.useCallback(()=>e&&s&&s(i),[i,s,e]);return!r&&s?[!1,o]:[!0]}const va=e=>e.key||"";function Yd(e){const t=[];return d.Children.forEach(e,r=>{d.isValidElement(r)&&t.push(r)}),t}const so=({children:e,custom:t,initial:r=!0,onExitComplete:s,presenceAffectsLayout:a=!0,mode:i="sync",propagate:o=!1,anchorX:l="left",root:c})=>{const[u,f]=zv(o),p=d.useMemo(()=>Yd(e),[e]),h=o&&!u?[]:p.map(va),b=d.useRef(!0),g=d.useRef(p),N=Im(()=>new Map),[C,v]=d.useState(p),[m,y]=d.useState(p);Rv(()=>{b.current=!1,g.current=p;for(let P=0;P<m.length;P++){const S=va(m[P]);h.includes(S)?N.delete(S):N.get(S)!==!0&&N.set(S,!1)}},[m,h.length,h.join("-")]);const E=[];if(p!==C){let P=[...p];for(let S=0;S<m.length;S++){const x=m[S],w=va(x);h.includes(w)||(P.splice(S,0,x),E.push(x))}return i==="wait"&&E.length&&(P=E),y(Yd(P)),v(p),null}const{forceRender:j}=d.useContext(Ev);return n.jsx(n.Fragment,{children:m.map(P=>{const S=va(P),x=o&&!u?!1:p===m||h.includes(S),w=()=>{if(N.has(S))N.set(S,!0);else return;let k=!0;N.forEach(R=>{R||(k=!1)}),k&&(j==null||j(),y(g.current),o&&(f==null||f()),s&&s())};return n.jsx(Dv,{isPresent:x,initial:!b.current||r?void 0:!1,custom:t,presenceAffectsLayout:a,mode:i,root:c,onExitComplete:x?void 0:w,anchorX:l,children:P},S)})})},Fv=()=>{const e=He(),[t,r]=d.useState(null);d.useEffect(()=>{if(typeof window<"u"){const K=sessionStorage.getItem("navigationSource");K&&r(K)}},[]);const s=K=>{typeof window<"u"&&(sessionStorage.setItem("navigationSource","/rewards"),window.location.href=K)},a=()=>{e(-1)},i=[{id:1,type:"coins",value:100,icon:"🪙",label:"100 Coins",cost:0},{id:2,type:"life",value:1,icon:"❤️",label:"1 Life",cost:50},{id:3,type:"coins",value:200,icon:"🪙",label:"200 Coins",cost:0},{id:4,type:"wildcard",value:1,icon:"🃏",label:"Wild Card",cost:100},{id:5,type:"coins",value:500,icon:"💰",label:"500 Coins",cost:0,milestone:!0},{id:6,type:"fifty-fifty",value:1,icon:"➗",label:"50:50",cost:150},{id:7,type:"life",value:2,icon:"❤️",label:"2 Lives",cost:100},{id:8,type:"vehicle",value:"bike",icon:"🏍️",label:"Motorcycle",cost:300},{id:9,type:"mystery",value:1,icon:"🎁",label:"Mystery Box",cost:200},{id:10,type:"coins",value:750,icon:"💰",label:"750 Coins",cost:0,milestone:!0},{id:11,type:"life",value:3,icon:"❤️",label:"3 Lives",cost:150},{id:12,type:"wildcard",value:2,icon:"🃏",label:"2x Wild Card",cost:250},{id:13,type:"vehicle",value:"car",icon:"🚗",label:"Car",cost:500},{id:14,type:"fifty-fifty",value:2,icon:"➗",label:"2x 50:50",cost:300},{id:15,type:"coins",value:1e3,icon:"💎",label:"1000 Coins",cost:0,milestone:!0}],o={cycle:{icon:"🚴",name:"Bicycle"},bike:{icon:"🏍️",name:"Motorcycle"},car:{icon:"🚗",name:"Car"}},{player:l,addCoins:c}=jn(),[u,f]=d.useState(4),[p,h]=d.useState((l==null?void 0:l.coins)||0),[b,g]=d.useState(4),[N,C]=d.useState(!1),[v,m]=d.useState(!1),[y,E]=d.useState(0),[j,P]=d.useState(0),[S,x]=d.useState("cycle"),[w,k]=d.useState([{type:"vehicle",icon:"🚴",name:"Bicycle",count:1},{type:"wildcard",icon:"🃏",name:"Wild Card",count:2},{type:"fifty-fifty",icon:"➗",name:"50:50 Helper",count:1}]),[R,M]=d.useState([0,1,2,3]),[q,ee]=d.useState(!1),[Q,Y]=d.useState(!1),[U,_]=d.useState(null),[I,B]=d.useState(null),[T,z]=d.useState(!1),[D,te]=d.useState(null),[X,J]=d.useState(!1),$=d.useRef(null),A=d.useRef(null),H=d.useRef(null);d.useEffect(()=>{$.current=new Audio("/sounds/reward.mp3"),A.current=new Audio("/sounds/reward_progress.mp3"),[$,A].forEach(K=>{var L;(L=K.current)==null||L.addEventListener("error",()=>{console.log("Sound file not found")})})},[]);const F=K=>{try{K.current&&(K.current.currentTime=0,K.current.play().catch(L=>console.log("Audio play failed:",L)))}catch(L){console.log("Sound play error:",L)}},O=(K,L)=>{if(K>u){B(L),Y(!0);return}K===u&&ae(K,L)},Z=K=>{var G;const L=(G=H.current)==null?void 0:G.querySelector(`[data-index="${K}"]`);if(L){const de=L.getBoundingClientRect(),he=window.pageYOffset||document.documentElement.scrollTop,pe=de.top+he-window.innerHeight/2+50;window.scrollTo({top:pe,behavior:"smooth"})}},ae=(K,L)=>{if(!R.includes(K)){if(L.cost>0&&p<L.cost){B(L),Y(!0);return}L.cost>0&&(h(G=>G-L.cost),c(-L.cost)),F($),ee(!0),B(L),M(G=>[...G,K]),setTimeout(()=>{ee(!1),L.type==="coins"?(E(L.value),C(!0),setTimeout(()=>{h(G=>G+L.value),c(L.value),setTimeout(()=>{C(!1),E(0)},500)},300)):L.type==="life"?(P(L.value),m(!0),setTimeout(()=>{g(G=>G+L.value),setTimeout(()=>{m(!1),P(0)},500)},300)):(te({icon:L.icon,startX:window.innerWidth/2,startY:window.innerHeight/2}),setTimeout(()=>{te(null),J(!0),ce(L),L.type==="vehicle"&&x(L.value),setTimeout(()=>{J(!1)},500)},800)),setTimeout(()=>{if(u<i.length-1){const G=u+1;Z(G),setTimeout(()=>{z(!0),F(A),f(G),setTimeout(()=>{z(!1)},500)},300)}},1200)},1500)}},ce=K=>{k(L=>L.find(de=>de.icon===K.icon)?L.map(de=>de.icon===K.icon?{...de,count:de.count+1}:de):[...L,{type:K.type,icon:K.icon,name:K.label,count:1}])},ne=K=>30+K*100,re=()=>30+u*100;return n.jsxs("div",{className:"rewards-page",children:[n.jsx("style",{jsx:!0,children:`
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
      `}),n.jsx("div",{className:"non-sticky-header",children:n.jsx("button",{className:"back-button",onClick:a,children:"← Back"})}),n.jsxs("div",{className:"sticky-section",children:[n.jsxs("div",{className:"header-wrapper",children:[n.jsxs("div",{className:"title-row",children:[n.jsxs("div",{children:[n.jsx("h1",{className:"title",children:"Rewards"}),n.jsx("p",{className:"subtitle",children:"Claim amazing prizes"})]}),n.jsx("button",{className:"play-quiz-btn",onClick:()=>s("/play"),children:"Play Quiz"})]}),n.jsx("div",{className:"balance-row",children:n.jsx("div",{className:"balance-item",children:n.jsxs("div",{children:[n.jsx("div",{className:"balance-label",children:"Balance"}),n.jsxs("div",{className:`balance-value ${N?"animating":""}`,children:[p.toLocaleString()," 🪙",N&&n.jsxs("span",{className:"value-change",children:["+",y]})]})]})})})]}),n.jsx("div",{className:"stats-cards-container",children:n.jsxs("div",{className:"info-grid",children:[n.jsxs("div",{className:"info-card",children:[n.jsx("div",{className:"info-icon",children:"❤️"}),n.jsxs("div",{className:`info-value ${v?"animating":""}`,children:[b,v&&n.jsxs("span",{className:"value-change",children:["+",j]})]}),n.jsx("div",{className:"info-label",children:"Lives"})]}),n.jsxs("div",{className:"info-card",children:[n.jsx("div",{className:"info-icon",children:"⭐"}),n.jsx("div",{className:"info-value",children:"5"}),n.jsx("div",{className:"info-label",children:"Level"})]}),n.jsxs("div",{className:"info-card",children:[n.jsx("div",{className:"info-icon",children:o[S].icon}),n.jsx("div",{className:"info-value",children:o[S].name}),n.jsx("div",{className:"info-label",children:"Vehicle"})]}),n.jsxs("div",{className:`cards-section ${X?"animating":""}`,children:[n.jsx("div",{className:"cards-label",children:"Your Cards"}),n.jsx("div",{className:"card-grid",children:w.map((K,L)=>n.jsxs("div",{className:"card-item",onClick:()=>_(K),children:[n.jsxs("div",{className:"large-card",children:[n.jsx("div",{className:"large-card-icon",children:K.icon}),n.jsx("div",{className:"large-card-name",children:K.name})]}),K.count>1&&n.jsx("div",{className:"card-count-badge",children:K.count})]},L))})]})]})})]}),n.jsx("div",{className:"scrollable-journey",children:n.jsx("div",{className:"journey-container",ref:H,children:n.jsxs("div",{className:"journey-track",children:[n.jsx("div",{className:"curvy-road",children:n.jsxs("svg",{className:"road-svg",viewBox:"0 0 60 1500",preserveAspectRatio:"none",children:[n.jsx("defs",{children:n.jsxs("linearGradient",{id:"roadGradient",x1:"0%",y1:"0%",x2:"0%",y2:"100%",children:[n.jsx("stop",{offset:"0%",stopColor:"#5E5CE6"}),n.jsx("stop",{offset:"100%",stopColor:"#5E5CE6"})]})}),n.jsx("path",{className:"road-path",d:"M 30 0 Q 45 50, 30 100 T 30 200 Q 15 250, 30 300 T 30 400 Q 45 450, 30 500 T 30 600 Q 15 650, 30 700 T 30 800 Q 45 850, 30 900 T 30 1000 Q 15 1050, 30 1100 T 30 1200 Q 45 1250, 30 1300 T 30 1400 L 30 1500"}),n.jsx("path",{className:"road-progress",d:"M 30 0 Q 45 50, 30 100 T 30 200 Q 15 250, 30 300 T 30 400 Q 45 450, 30 500 T 30 600 Q 15 650, 30 700 T 30 800 Q 45 850, 30 900 T 30 1000 Q 15 1050, 30 1100 T 30 1200 Q 45 1250, 30 1300 T 30 1400 L 30 1500",strokeDasharray:"1500",strokeDashoffset:1500-u/(i.length-1)*1500})]})}),n.jsxs("div",{className:"avatar-tracker",style:{top:`${re()}px`},children:[n.jsx("img",{className:"avatar-img",src:"/profile/avatar.png",alt:"You",onError:K=>{K.target.style.display="none"}}),n.jsx("div",{className:"tracker-vehicle",children:o[S].icon})]}),n.jsx("div",{className:"rewards-list",children:i.map((K,L)=>{const G=L%2===0,de=L>u,he=R.includes(L),pe=L===u;return n.jsx("div",{className:"reward-row","data-index":L,style:{top:`${ne(L)}px`},children:n.jsxs("div",{className:`reward-item ${G?"left":"right"}`,children:[n.jsxs("div",{className:`checkpoint ${pe?"current":he?"claimed":de?"locked":""}`,onClick:()=>O(L,K),children:[n.jsx("div",{className:"checkpoint-icon",children:K.icon}),n.jsx("div",{className:"checkpoint-value",children:K.label.split(" ")[0]}),K.milestone&&n.jsx("div",{className:"milestone-badge",children:"BONUS"}),de&&n.jsx("div",{className:"lock-icon",children:"🔒"})]}),n.jsxs("div",{className:"reward-info",children:[n.jsx("div",{className:"reward-name",children:K.label}),n.jsxs("div",{className:"step-label",children:["Step ",L+1]})]})]})},K.id)})})]})})}),D&&n.jsx("div",{className:"flying-card",style:{left:`${D.startX}px`,top:`${D.startY}px`,"--startX":`${D.startX}px`},children:D.icon}),n.jsx(so,{children:U&&n.jsx("div",{className:"claim-overlay",onClick:()=>_(null),children:n.jsxs("div",{className:"modal",onClick:K=>K.stopPropagation(),children:[n.jsx("div",{className:"modal-icon",children:U.icon}),n.jsx("div",{className:"card-detail-name",children:U.name}),n.jsxs("div",{className:"card-detail-desc",children:["You have ",U.count," of these cards"]}),n.jsx("div",{className:"modal-buttons",children:n.jsx("button",{className:"modal-btn modal-btn-secondary",onClick:()=>_(null),children:"Close"})})]})})}),n.jsx(so,{children:q&&I&&n.jsx("div",{className:"claim-overlay",children:n.jsxs("div",{className:"modal",children:[n.jsx("div",{className:"modal-title",children:"WELL DONE!"}),n.jsx("div",{className:"modal-subtitle",children:"Here's a reward for you."}),n.jsx("div",{className:"modal-icon",children:I.icon}),n.jsxs("div",{className:"modal-value",children:["+",I.value," ",I.type==="coins"?"Coins":I.type==="life"?"Lives":I.label]})]})})}),n.jsx(so,{children:Q&&I&&n.jsx("div",{className:"claim-overlay",onClick:()=>Y(!1),children:n.jsxs("div",{className:"modal",onClick:K=>K.stopPropagation(),children:[n.jsx("div",{className:"modal-icon",children:"🪙"}),n.jsx("div",{className:"modal-title",children:"Need More Coins"}),n.jsx("div",{className:"modal-subtitle",children:I.cost>0?`You need ${I.cost-p} more coins`:"Complete previous rewards first"}),n.jsxs("div",{className:"modal-buttons",children:[n.jsx("button",{className:"modal-btn modal-btn-primary",onClick:()=>s("/play"),children:"Play Quiz"}),n.jsx("button",{className:"modal-btn modal-btn-secondary",onClick:()=>Y(!1),children:"Cancel"})]})]})})})]})},ya=[{id:1,name:"First Win",emoji:"🏆",unlocked:!0,hint:"Win your first quiz",progress:100,color:"#FFD700"},{id:2,name:"On Fire",emoji:"🔥",unlocked:!0,hint:"3-day winning streak",progress:100,color:"#FF6B35"},{id:3,name:"Perfectionist",emoji:"⭐",unlocked:!1,hint:"Score 10/10 in any quiz",progress:75,color:"#9333EA"},{id:4,name:"Early Bird",emoji:"🌅",unlocked:!0,hint:"Play before 9 AM",progress:100,color:"#F59E0B"},{id:5,name:"Scholar",emoji:"🎓",unlocked:!1,hint:"Master 5 categories",progress:40,color:"#3B82F6"},{id:6,name:"Lightning",emoji:"⚡",unlocked:!1,hint:"Complete in under 2 minutes",progress:20,color:"#10B981"},{id:7,name:"Champion",emoji:"👑",unlocked:!1,hint:"Win 50 quizzes",progress:30,color:"#EC4899"},{id:8,name:"Explorer",emoji:"🗺️",unlocked:!1,hint:"Try all categories",progress:60,color:"#06B6D4"},{id:9,name:"Strategist",emoji:"🧠",unlocked:!0,hint:"Use 3 power-ups wisely",progress:100,color:"#8B5CF6"}];function Ov(){const[e,t]=d.useState(null),r=ya.filter(a=>a.unlocked).length,s=Math.round(r/ya.length*100);return n.jsxs("div",{className:"badges-screen",children:[n.jsx("style",{jsx:!0,children:`
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
      `}),n.jsxs("div",{className:"header",children:[n.jsx("button",{className:"back-button",onClick:()=>window.history.back(),children:"← Back"}),n.jsxs("div",{className:"title-section",children:[n.jsx("h1",{className:"main-title",children:"Badge Collection"}),n.jsx("p",{className:"subtitle",children:"Unlock achievements and show your skills"})]})]}),n.jsxs("div",{className:"progress-card",children:[n.jsxs("div",{className:"progress-header",children:[n.jsx("span",{className:"progress-label",children:"Collection Progress"}),n.jsxs("span",{className:"progress-value",children:[r,"/",ya.length]})]}),n.jsx("div",{className:"progress-bar-container",children:n.jsx("div",{className:"progress-bar-fill",style:{width:`${s}%`}})})]}),n.jsx("div",{className:"badges-grid",children:ya.map(a=>n.jsxs("div",{className:`badge-card ${a.unlocked?"unlocked":""}`,style:{"--badge-color":a.color},onClick:()=>t(a),children:[n.jsx("div",{className:"badge-glow"}),n.jsx("div",{className:"badge-emoji",children:a.emoji}),n.jsx("div",{className:"badge-name",children:a.name}),!a.unlocked&&n.jsxs(n.Fragment,{children:[n.jsx("div",{className:"badge-progress",children:n.jsx("div",{className:"badge-progress-fill",style:{width:`${a.progress}%`}})}),n.jsx("div",{className:"lock-indicator",children:"🔒"})]})]},a.id))}),n.jsxs("div",{className:"tips-card",children:[n.jsxs("div",{className:"tips-title",children:[n.jsx("span",{children:"💡"}),n.jsx("span",{children:"Pro Tip"})]}),n.jsx("div",{className:"tips-content",children:"Complete daily challenges and maintain streaks to unlock rare badges faster. Each badge gives you bonus XP and special rewards!"})]}),e&&n.jsx("div",{className:"badge-modal",onClick:()=>t(null),children:n.jsxs("div",{className:"modal-content",onClick:a=>a.stopPropagation(),children:[n.jsx("div",{className:`modal-badge ${e.unlocked?"":"locked"}`,children:e.emoji}),n.jsx("h3",{className:"modal-title",children:e.name}),n.jsx("span",{className:`modal-status ${e.unlocked?"":"locked"}`,children:e.unlocked?"✓ Unlocked":"🔒 Locked"}),n.jsx("p",{className:"modal-description",children:e.hint}),!e.unlocked&&n.jsxs("div",{className:"modal-progress-section",children:[n.jsx("div",{className:"modal-progress-label",children:"Progress"}),n.jsx("div",{className:"modal-progress-bar",children:n.jsx("div",{className:"modal-progress-fill",style:{width:`${e.progress}%`,"--badge-color":e.color}})}),n.jsxs("div",{className:"modal-progress-text",children:[e.progress,"%"]})]}),n.jsx("button",{className:"modal-close",onClick:()=>t(null),children:e.unlocked?"Awesome!":"Keep Going!"})]})})]})}const $v=[{id:1,title:"Quiz Master",subtitle:"Play 10 quizzes",current:7,target:10,reward:150,claimed:!1,icon:"🎯",color:"#FF6B6B"},{id:2,title:"Coin Collector",subtitle:"Earn 2,000 coins",current:1240,target:2e3,reward:200,claimed:!1,icon:"💰",color:"#4ECDC4"},{id:3,title:"Winning Streak",subtitle:"Win 3 in a row",current:3,target:3,reward:100,claimed:!0,icon:"🔥",color:"#FFD93D"},{id:4,title:"Speed Demon",subtitle:"Complete 5 under 2min",current:2,target:5,reward:300,claimed:!1,icon:"⚡",color:"#A8E6CF"},{id:5,title:"Perfect Score",subtitle:"Get 100% accuracy",current:0,target:1,reward:250,claimed:!1,icon:"⭐",color:"#C7B8FF"}];function Bv(){const{player:e,addCoins:t}=jn(),[r,s]=d.useState($v),[a,i]=d.useState(null),[o,l]=d.useState((e==null?void 0:e.coins)||0),[c,u]=d.useState(!1),[f,p]=d.useState([]),h=r.length,b=r.filter(C=>C.current>=C.target).length,g=Math.round(b/h*100);d.useEffect(()=>{const C=setInterval(()=>{p(v=>{const m={id:Date.now(),x:Math.random()*100,y:Math.random()*100,size:Math.random()*20+10};return[...v.slice(-4),m]})},3e3);return()=>clearInterval(C)},[]);const N=(C,v)=>{i(C),navigator.vibrate&&navigator.vibrate([20,10,20]),setTimeout(()=>{s(m=>m.map(y=>y.id===C?{...y,claimed:!0}:y)),l(m=>m+v),i(null),u(!0),setTimeout(()=>u(!1),2e3)},600)};return n.jsxs("div",{className:"achievements-screen",children:[n.jsx("style",{jsx:!0,children:`
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
      `}),n.jsxs("div",{className:"floating-shapes",children:[n.jsx("div",{className:"shape shape-1"}),n.jsx("div",{className:"shape shape-2"})]}),n.jsxs("div",{className:"header",children:[n.jsx("button",{className:"back-button",onClick:()=>window.history.back(),children:"← Back"}),n.jsxs("div",{className:"coins-display",children:["🪙 ",o.toLocaleString()]}),n.jsxs("div",{className:"title-section",children:[n.jsx("h1",{className:"main-title",children:"ACHIEVEMENTS"}),n.jsx("p",{className:"subtitle",children:"Complete challenges and earn awesome rewards!"})]})]}),n.jsxs("div",{className:"progress-overview",children:[n.jsx("div",{className:"card-glow",style:{"--card-color":"#FFD93D"}}),n.jsxs("div",{className:"overview-header",children:[n.jsx("span",{className:"overview-label",children:"🎮 Progress Tracker"}),n.jsxs("div",{className:"overview-stats",children:[n.jsx("span",{className:"trophy-icon",children:"🏆"}),n.jsxs("span",{className:"overview-value",children:[b,"/",h]})]})]}),n.jsx("div",{className:"progress-bar-main",children:n.jsx("div",{className:"progress-fill-main",style:{width:`${g}%`}})})]}),n.jsx("div",{className:"achievements-list",children:r.map(C=>{const v=Math.min(100,Math.round(C.current/C.target*100)),m=v===100,y=C.color+"CC";return n.jsxs("div",{className:`achievement-card ${m?"completed":""}`,style:{"--card-color":C.color,"--card-color-dark":y},children:[n.jsx("div",{className:"card-glow"}),m&&C.claimed&&n.jsx("div",{className:"completed-badge",children:"✓"}),n.jsxs("div",{className:"card-content",children:[n.jsx("div",{className:"achievement-icon",children:C.icon}),n.jsxs("div",{className:"achievement-details",children:[n.jsx("div",{className:"achievement-title",children:C.title}),n.jsx("div",{className:"achievement-subtitle",children:C.subtitle}),n.jsxs("div",{className:"progress-container",children:[n.jsx("div",{className:"progress-bar",children:n.jsx("div",{className:"progress-fill",style:{width:`${v}%`}})}),n.jsxs("div",{className:"progress-text",children:[n.jsxs("span",{children:[C.current,"/",C.target]}),n.jsxs("span",{className:"reward-badge",children:["🪙 ",C.reward]})]})]})]}),n.jsx("button",{onClick:()=>N(C.id,C.reward),disabled:!m||C.claimed,className:`claim-button ${C.claimed?"claimed":m?"can-claim":"in-progress"} ${a===C.id?"claiming":""}`,children:C.claimed?"✓":m?"CLAIM!":`${v}%`})]})]},C.id)})}),c&&n.jsx("div",{className:"celebration",children:"🎉"})]})}function Uv(){const{player:e,addCoins:t,updateDailyStreak:r}=jn(),s=(e==null?void 0:e.currentStreak)||0,a=(e==null?void 0:e.bestStreak)||0,i=(e==null?void 0:e.totalDays)||0,o=(e==null?void 0:e.coins)||0,l=He(),c=new Date,u=c.getDay(),f=()=>{const T=new Date(c);return T.setDate(c.getDate()-c.getDay()),T.toISOString().split("T")[0]},[p,h]=d.useState(null),[b,g]=d.useState(!1),[N,C]=d.useState(null),[v,m]=d.useState(null),[y,E]=d.useState(!1),j=d.useRef(null),P=d.useRef(null),[S]=zt("/sounds/coin.mp3",{volume:.75}),[x]=zt("/sounds/correct.mp3",{volume:.6}),[w,k]=d.useState(()=>{const T=localStorage.getItem("streaks_claimed")||"[]",z=JSON.parse(T),D=f(),te=z.filter(X=>X!==`week_${D}_day_0`);return localStorage.setItem("streaks_claimed",JSON.stringify(te)),te});d.useEffect(()=>{const T=()=>{window.scrollTo(0,0),document.documentElement.scrollTop=0,document.body.scrollTop=0;const D=document.querySelector("main");D&&(D.scrollTop=0)};T(),requestAnimationFrame(T);const z=setTimeout(T,100);return()=>clearTimeout(z)},[]),d.useEffect(()=>{E(!0),setTimeout(()=>E(!1),3e3)},[]);const R=[{label:"Mon",short:"M",dayIndex:1},{label:"Tue",short:"T",dayIndex:2},{label:"Wed",short:"W",dayIndex:3},{label:"Thu",short:"T",dayIndex:4},{label:"Fri",short:"F",dayIndex:5},{label:"Sat",short:"S",dayIndex:6},{label:"Sun",short:"S",dayIndex:0}],M=[{day:0,reward:"10",type:"coins",icon:"🎯",label:"Welcome Bonus"},{day:1,reward:"50",type:"coins",icon:"🪙",label:"50 Coins"},{day:2,reward:"100",type:"coins",icon:"🪙",label:"100 Coins"},{day:3,reward:"2x",type:"xp",icon:"⭐",label:"2x XP Boost"},{day:4,reward:"150",type:"coins",icon:"🪙",label:"150 Coins"},{day:5,reward:"Full",type:"energy",icon:"⚡",label:"Energy Refill"},{day:6,reward:"200",type:"coins",icon:"🪙",label:"200 Coins"},{day:7,reward:"Mystery",type:"mystery",icon:"🎁",label:"Mystery Box"}],q=T=>{const z=w.includes(`week_${f()}_day_${T}`);if(T===0)return{isCompleted:!0,isClaimed:z,canClaim:!z,isLocked:!1};const D=s>=T,te=D&&!z,X=s<T;return{isCompleted:D,isClaimed:z,canClaim:te,isLocked:X}},ee=(T,z,D)=>{const te=q(z);if(te.isLocked){m({day:z,currentStreak:s}),setTimeout(()=>m(null),2e3);return}te.isClaimed||te.canClaim&&(h({...T,day:z}),g(!1),setTimeout(()=>{g(!0),x(),setTimeout(()=>{if(T.type==="coins"){const $=parseInt(T.reward);if(P.current&&j.current){const A=P.current.getBoundingClientRect();S(),C({startRect:A,count:10,amount:$})}}const X=`week_${f()}_day_${z}`,J=[...w,X];k(J),localStorage.setItem("streaks_claimed",JSON.stringify(J))},500),setTimeout(()=>{h(null),g(!1)},2500)},500))},Q=(T,z)=>{const D=z+1,te=R[z].dayIndex===u;return s>=D?te?"today-completed":"completed":te?"today-pending":D<=s+1?"pending":"future"},Y=[{days:3,emoji:"⚡",label:"Starter",achieved:s>=3},{days:7,emoji:"🔥",label:"Week Warrior",achieved:s>=7},{days:30,emoji:"💎",label:"Champion",achieved:s>=30},{days:100,emoji:"👑",label:"Legend",achieved:s>=100}],U=Y.find(T=>T.days>s)||Y[Y.length-1],_=Math.min(100,s/U.days*100),I=()=>{window.location.href="/play"},B=()=>{l(-1)};return n.jsxs("div",{className:"streaks-screen",children:[n.jsx("style",{jsx:!0,children:`
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
      `}),N&&n.jsx(Ci,{startRect:N.startRect,targetRef:j,count:N.count,onDone:()=>{t(N.amount),C(null)}}),n.jsxs("div",{className:"header",children:[n.jsxs("div",{className:"header-top",children:[n.jsx("button",{className:"back-button",onClick:B,children:"← Back"}),n.jsxs("div",{className:"coin-pill",ref:j,id:"coin-pill",children:[n.jsx("span",{className:"coin-icon",children:"🪙"}),n.jsx("span",{className:"coin-amount",children:o})]})]}),n.jsxs("div",{className:"title-section",children:[n.jsx("h1",{className:"main-title",children:"STREAKS"}),n.jsx("p",{className:"subtitle",children:"Keep the fire burning!"})]})]}),n.jsxs("div",{className:"streak-hero",children:[n.jsx("div",{className:"fire-animation",children:"🔥"}),n.jsx("div",{className:"streak-number",children:s}),n.jsx("div",{className:"streak-label",children:"DAY STREAK"}),n.jsxs("div",{className:"stats-row",children:[n.jsxs("div",{className:"stat-card",children:[n.jsx("div",{className:"stat-value",children:a}),n.jsx("div",{className:"stat-label",children:"Best Streak"})]}),n.jsxs("div",{className:"stat-card",children:[n.jsx("div",{className:"stat-value",children:i}),n.jsx("div",{className:"stat-label",children:"Total Days"})]})]})]}),n.jsxs("div",{className:"weekly-progress-card",children:[n.jsxs("div",{className:"weekly-header",children:[n.jsx("div",{className:"weekly-title",children:"This Week's Progress"}),n.jsxs("div",{className:"weekly-counter",children:[n.jsx("span",{className:"weekly-counter-icon",children:"🔥"}),n.jsxs("span",{className:"weekly-counter-text",children:[Math.min(s,7),"/7"]})]})]}),n.jsx("div",{className:"weekly-days",children:R.map((T,z)=>{const D=Q(T.dayIndex,z),te=T.dayIndex===u;return n.jsxs("div",{className:"day-item",children:[n.jsx("div",{className:`day-circle ${D}`,children:D==="completed"||D==="today-completed"?"":T.short}),n.jsx("div",{className:`day-label ${te?"today":""}`,children:T.label})]},z)})}),n.jsx("div",{className:"milestone-header",children:"Daily Rewards"}),n.jsx("div",{className:"rewards-grid",children:M.map((T,z)=>{const D=q(T.day);return n.jsxs("div",{className:`reward-item ${D.isLocked?"locked":D.canClaim?"can-claim":D.isClaimed?"completed":""}`,onClick:te=>ee(T,T.day),children:[n.jsxs("div",{className:"reward-day",children:["Day ",T.day]}),n.jsx("div",{className:"reward-icon",children:T.icon}),n.jsx("div",{className:"reward-text",children:T.label})]},z)})})]}),n.jsxs("div",{className:"milestone-section",children:[n.jsx("div",{className:"milestone-header",children:"Next Milestone"}),n.jsxs("div",{className:"milestone-progress",children:[n.jsxs("div",{className:"milestone-info",children:[n.jsxs("div",{className:"milestone-current",children:[n.jsx("span",{className:"milestone-emoji",children:U.emoji}),n.jsx("span",{className:"milestone-text",children:U.label})]}),n.jsxs("span",{className:"milestone-target",children:[s,"/",U.days," days"]})]}),n.jsx("div",{className:"progress-bar-container",children:n.jsx("div",{className:"progress-bar-fill",style:{width:`${_}%`}})})]})]}),n.jsx("div",{className:"motivational-text",children:s===0?"Start your journey! Claim your Day 0 bonus and complete a quiz!":`Day ${s} strong! Keep going to unlock more rewards!`}),n.jsxs("button",{className:"play-button",onClick:I,children:[n.jsx("span",{children:"Continue Streak"}),n.jsx("span",{children:"→"})]}),v&&n.jsxs("div",{className:"locked-message",children:[n.jsx("span",{className:"locked-message-icon",children:"🔒"}),n.jsx("span",{className:"locked-message-text",children:v.day===1&&v.currentStreak===0?"Complete your first quiz to unlock this reward!":`Reach Day ${v.day} streak to unlock this reward!`})]}),p&&n.jsxs(n.Fragment,{children:[n.jsx("div",{className:"modal-overlay"}),n.jsx("div",{className:"reward-modal",ref:P,children:n.jsxs("div",{className:"gift-box",children:[n.jsxs("div",{className:"gift-box-body",children:[n.jsx("div",{className:"gift-box-ribbon"}),n.jsx("div",{className:"gift-box-ribbon-horizontal"})]}),n.jsx("div",{className:`gift-box-lid ${b?"opening":""}`,children:n.jsx("div",{className:"gift-box-bow",children:"🎀"})}),n.jsxs("div",{className:`gift-content ${b?"show":""}`,children:[n.jsx("div",{className:"gift-content-icon",children:p.icon}),n.jsxs("div",{className:"gift-content-title",children:["Day ",p.day]}),n.jsx("div",{className:"gift-content-desc",children:p.label})]})]})})]}),y&&n.jsx("div",{className:"celebration",children:"🎉"})]})}const qv=()=>{const e=new Date;return`${e.getFullYear()}-${e.getMonth()+1}-${e.getDate()}`},sl=()=>{const e=localStorage.getItem("questProgress");return e?JSON.parse(e):{}},Hd=(e,t)=>{const r=sl();r[e]=t,r.date=qv(),localStorage.setItem("questProgress",JSON.stringify(r))};function Qv(){const{player:e,addCoins:t}=jn(),r=He(),s=bt(),a=sl(),[i,o]=d.useState([{id:1,title:"Play 3 quizzes today",progress:a.dailyQuizzes||0,target:3,reward:60,claimed:a.dailyQuizzesClaimed||!1,icon:"🎮",color:"#FF6B6B",difficulty:"Easy",questType:"dailyQuizzes",route:"/quiz/play",routeParams:"?category=random&difficulty=random&from=quest"},{id:3,title:"Practice 15 questions",progress:a.practiceQuestions||0,target:15,reward:100,claimed:a.practiceQuestionsClaimed||!1,icon:"📚",color:"#FFD93D",difficulty:"Easy",questType:"practiceQuestions",route:"/practice/start",routeParams:"?questions=15&difficulty=easy&category=random&from=quest"},{id:4,title:"Win 5 in a row",progress:a.winStreak||0,target:5,reward:150,claimed:a.winStreakClaimed||!1,icon:"🔥",color:"#A8E6CF",difficulty:"Hard",questType:"winStreak",route:"/play",routeParams:"?mode=survival&from=quest"},{id:5,title:"Complete a speed run",progress:a.speedRun||0,target:1,reward:120,claimed:a.speedRunClaimed||!1,icon:"⚡",color:"#C7B8FF",difficulty:"Medium",questType:"speedRun",route:"/swipe/random-mix",routeParams:"?from=quest"}]),[l,c]=d.useState((e==null?void 0:e.coins)||0),[u,f]=d.useState(null),[p,h]=d.useState(0),b=d.useRef(null),[g,N]=d.useState(null);d.useEffect(()=>{const j=()=>{const S=sl();o(x=>x.map(w=>{const k=w.questType;return S[k]!==void 0?{...w,progress:S[k]}:w}))};window.addEventListener("storage",j);const P=()=>j();return window.addEventListener("focus",P),()=>{window.removeEventListener("storage",j),window.removeEventListener("focus",P)}},[]),d.useEffect(()=>{const j=S=>{console.log("Quest progress update received:",S.detail),o(x=>x.map(w=>w.questType==="practiceQuestions"&&S.detail.practiceQuestions?{...w,progress:S.detail.practiceQuestions}:w))};window.addEventListener("questProgressUpdate",j);const P=setInterval(()=>{try{const S=localStorage.getItem("questProgress");if(S){const x=JSON.parse(S);o(w=>w.map(k=>k.questType==="practiceQuestions"&&x.practiceQuestions&&k.progress!==x.practiceQuestions?{...k,progress:x.practiceQuestions}:k))}}catch(S){console.error("Error checking progress:",S)}},1e3);return()=>{window.removeEventListener("questProgressUpdate",j),clearInterval(P)}},[]),d.useEffect(()=>{var j;if((j=s.state)!=null&&j.questCompleted){const{questType:P,increment:S}=s.state;o(x=>x.map(w=>{if(w.questType===P){const k=Math.min(w.progress+(S||1),w.target);return Hd(P,k),{...w,progress:k}}return w})),window.history.replaceState({},document.title)}},[s]),d.useEffect(()=>{const j=i.filter(P=>P.progress>=P.target).length;h(Math.round(j/i.length*100))},[i]),d.useEffect(()=>{c((e==null?void 0:e.coins)||0)},[e==null?void 0:e.coins]);const C=j=>{navigator.vibrate&&navigator.vibrate([20]),sessionStorage.setItem("activeQuest",JSON.stringify({id:j.id,type:j.questType,title:j.title,currentProgress:j.progress,target:j.target})),r(j.route+j.routeParams)},v=()=>{sessionStorage.getItem("questsFromHome")==="true"?(sessionStorage.removeItem("questsFromHome"),r("/")):r("/profile")},m=j=>{navigator.vibrate&&navigator.vibrate([20,10,20]);try{const P=new Audio("/sounds/coin.mp3");P.volume=.75,P.play()}catch{console.log("Sound not available")}f(j.id),N({startRect:{left:window.innerWidth/2-50,top:window.innerHeight/2,width:100,height:100},count:Math.min(j.reward/10,10),amount:j.reward}),setTimeout(()=>{o(P=>P.map(S=>S.id===j.id?(Hd(S.questType+"Claimed",!0),{...S,claimed:!0}):S)),f(null)},600)},y=j=>{switch(j){case"Easy":return"#10B981";case"Medium":return"#F59E0B";case"Hard":return"#EF4444";default:return"#6B7280"}},E=()=>{const j=new Date,P=new Date(j);P.setDate(P.getDate()+1),P.setHours(5,0,0,0);const S=P-j,x=Math.floor(S/(1e3*60*60)),w=Math.floor(S%(1e3*60*60)/(1e3*60));return`${x}h ${w}m`};return n.jsxs("div",{className:"quests-screen",children:[g&&n.jsx(Ci,{startRect:g.startRect,targetRef:b,count:g.count,onDone:()=>{c(j=>j+g.amount),t(g.amount),N(null)}}),n.jsx("style",{jsx:!0,children:`
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
      `}),n.jsxs("div",{className:"animated-bg",children:[n.jsx("div",{className:"floating-icon",children:"🎮"}),n.jsx("div",{className:"floating-icon",children:"🎯"}),n.jsx("div",{className:"floating-icon",children:"🏆"}),n.jsx("div",{className:"floating-icon",children:"⭐"})]}),n.jsxs("div",{className:"header",children:[n.jsx("button",{className:"back-button",onClick:v,children:"← Back"}),n.jsxs("div",{className:"coins-display",ref:b,children:["🪙 ",l]}),n.jsxs("div",{className:"title-section",children:[n.jsx("h1",{className:"main-title",children:"Daily Quests"}),n.jsx("p",{className:"subtitle",children:"Complete challenges, earn rewards!"})]})]}),n.jsxs("div",{className:"daily-progress-card",children:[n.jsxs("div",{className:"progress-header",children:[n.jsx("span",{className:"progress-label",children:"Today's Progress"}),n.jsxs("span",{className:"progress-value",children:[p,"%"]})]}),n.jsx("div",{className:"progress-bar-container",children:n.jsx("div",{className:"progress-bar-fill",style:{width:`${p}%`}})})]}),n.jsx("div",{className:"quests-list",children:i.map(j=>{const P=Math.min(100,Math.round(j.progress/j.target*100)),S=P===100,x=j.color+"CC";return n.jsxs("div",{className:`quest-card ${S?"completed":""}`,style:{"--quest-color":j.color,"--quest-color-dark":x},children:[n.jsx("div",{className:"quest-accent"}),S&&j.claimed&&n.jsx("div",{className:"completed-checkmark",children:"✓"}),n.jsxs("div",{className:"quest-content",children:[n.jsx("div",{className:`quest-icon-container ${u===j.id?"animating":""}`,children:j.icon}),n.jsxs("div",{className:"quest-details",children:[n.jsxs("div",{className:"quest-header",children:[n.jsx("span",{className:"quest-title",children:j.title}),n.jsx("span",{className:"difficulty-badge",style:{background:`${y(j.difficulty)}20`,color:y(j.difficulty)},children:j.difficulty})]}),n.jsxs("div",{className:"progress-info",children:[n.jsx("div",{className:"mini-progress-bar",children:n.jsx("div",{className:"mini-progress-fill",style:{width:`${P}%`}})}),n.jsxs("div",{className:"progress-text",children:[n.jsxs("span",{className:"progress-numbers",children:[j.progress,"/",j.target]}),n.jsxs("span",{className:"reward-display",children:["🪙 ",j.reward]})]})]})]}),n.jsx("button",{onClick:()=>{S&&!j.claimed?m(j):S||C(j)},disabled:j.claimed,className:`action-button ${j.claimed?"claimed":S?"can-claim":"in-progress"}`,style:!S&&!j.claimed?{"--quest-color":j.color,"--quest-color-dark":x}:{},children:j.claimed?"✓":S?"Claim":"Do it"})]})]},j.id)})}),n.jsxs("div",{className:"timer-card",children:[n.jsx("div",{className:"timer-icon",children:"⏰"}),n.jsx("div",{className:"timer-label",children:"New Quests In"}),n.jsx("div",{className:"timer-value",children:E()})]}),u&&n.jsx("div",{className:"reward-animation",children:"🪙"})]})}function Yv({title:e,subtitle:t,children:r}){const s=He();return n.jsxs("div",{className:"min-h-full bg-black text-white px-4 pt-12",children:[n.jsxs("div",{className:"flex items-center justify-between mb-4",children:[n.jsx("button",{onClick:()=>s(-1),className:"px-3 py-1.5 rounded-xl border border-white/10 bg-white/5 text-sm",children:"← Back"}),n.jsxs("div",{className:"text-center",children:[n.jsx("div",{className:"text-base font-semibold leading-tight",children:e}),t&&n.jsx("div",{className:"text-xs text-white/60 leading-tight",children:t})]}),n.jsx("div",{className:"w-[68px]"})]}),r]})}function Hv(){const e=He(),[t,r]=d.useState(!0),[s,a]=d.useState(!0),[i,o]=d.useState(!0);return n.jsxs(Yv,{title:"Settings",subtitle:"Make it yours",children:[n.jsxs("div",{className:"rounded-2xl border border-white/10 bg-white/5 divide-y divide-white/10",children:[n.jsx(cs,{label:"Sound",right:n.jsx(ao,{on:t,set:r})}),n.jsx(cs,{label:"Haptics",right:n.jsx(ao,{on:s,set:a})}),n.jsx(cs,{label:"Notifications",right:n.jsx(ao,{on:i,set:o})}),n.jsx(cs,{label:"Edit Profile",right:n.jsx("span",{className:"text-white/60",children:"→"}),onClick:()=>e("/profile")}),n.jsx(cs,{label:"Privacy Policy",right:n.jsx("span",{className:"text-white/60",children:"→"}),onClick:()=>window.open("#","_blank")})]}),n.jsx("button",{className:`mt-3 w-full rounded-2xl border border-white/10 bg-white/5 py-3 text-red-300 font-semibold
                   transition-transform duration-150 active:scale-[0.99]`,onClick:()=>alert("Sign out hook here"),children:"Sign out"})]})}function cs({label:e,right:t,onClick:r}){return n.jsxs("button",{type:"button",onClick:r,className:`w-full flex items-center justify-between px-4 py-4 text-left
                 hover:bg-white/5 first:rounded-t-2xl last:rounded-b-2xl transition`,children:[n.jsx("span",{className:"text-sm font-semibold",children:e}),t]})}function ao({on:e,set:t}){return n.jsx("span",{onClick:r=>{r.stopPropagation(),t(s=>!s),navigator.vibrate&&navigator.vibrate(10)},className:["inline-flex w-11 h-6 items-center rounded-full border transition px-0.5",e?"bg-lime-400 border-lime-400 justify-end":"bg-white/10 border-white/10 justify-start"].join(" "),role:"switch","aria-checked":e,children:n.jsx("span",{className:["w-5 h-5 rounded-full bg-white",e?"":"bg-white"].join(" ")})})}/*! Capacitor: https://capacitorjs.com/ - MIT License */var qr;(function(e){e.Unimplemented="UNIMPLEMENTED",e.Unavailable="UNAVAILABLE"})(qr||(qr={}));class io extends Error{constructor(t,r,s){super(t),this.message=t,this.code=r,this.data=s}}const Wv=e=>{var t,r;return e!=null&&e.androidBridge?"android":!((r=(t=e==null?void 0:e.webkit)===null||t===void 0?void 0:t.messageHandlers)===null||r===void 0)&&r.bridge?"ios":"web"},Gv=e=>{const t=e.CapacitorCustomPlatform||null,r=e.Capacitor||{},s=r.Plugins=r.Plugins||{},a=()=>t!==null?t.name:Wv(e),i=()=>a()!=="web",o=p=>{const h=u.get(p);return!!(h!=null&&h.platforms.has(a())||l(p))},l=p=>{var h;return(h=r.PluginHeaders)===null||h===void 0?void 0:h.find(b=>b.name===p)},c=p=>e.console.error(p),u=new Map,f=(p,h={})=>{const b=u.get(p);if(b)return console.warn(`Capacitor plugin "${p}" already registered. Cannot register plugins twice.`),b.proxy;const g=a(),N=l(p);let C;const v=async()=>(!C&&g in h?C=typeof h[g]=="function"?C=await h[g]():C=h[g]:t!==null&&!C&&"web"in h&&(C=typeof h.web=="function"?C=await h.web():C=h.web),C),m=(x,w)=>{var k,R;if(N){const M=N==null?void 0:N.methods.find(q=>w===q.name);if(M)return M.rtype==="promise"?q=>r.nativePromise(p,w.toString(),q):(q,ee)=>r.nativeCallback(p,w.toString(),q,ee);if(x)return(k=x[w])===null||k===void 0?void 0:k.bind(x)}else{if(x)return(R=x[w])===null||R===void 0?void 0:R.bind(x);throw new io(`"${p}" plugin is not implemented on ${g}`,qr.Unimplemented)}},y=x=>{let w;const k=(...R)=>{const M=v().then(q=>{const ee=m(q,x);if(ee){const Q=ee(...R);return w=Q==null?void 0:Q.remove,Q}else throw new io(`"${p}.${x}()" is not implemented on ${g}`,qr.Unimplemented)});return x==="addListener"&&(M.remove=async()=>w()),M};return k.toString=()=>`${x.toString()}() { [capacitor code] }`,Object.defineProperty(k,"name",{value:x,writable:!1,configurable:!1}),k},E=y("addListener"),j=y("removeListener"),P=(x,w)=>{const k=E({eventName:x},w),R=async()=>{const q=await k;j({eventName:x,callbackId:q},w)},M=new Promise(q=>k.then(()=>q({remove:R})));return M.remove=async()=>{console.warn("Using addListener() without 'await' is deprecated."),await R()},M},S=new Proxy({},{get(x,w){switch(w){case"$$typeof":return;case"toJSON":return()=>({});case"addListener":return N?P:E;case"removeListener":return j;default:return y(w)}}});return s[p]=S,u.set(p,{name:p,proxy:S,platforms:new Set([...Object.keys(h),...N?[g]:[]])}),S};return r.convertFileSrc||(r.convertFileSrc=p=>p),r.getPlatform=a,r.handleError=c,r.isNativePlatform=i,r.isPluginAvailable=o,r.registerPlugin=f,r.Exception=io,r.DEBUG=!!r.DEBUG,r.isLoggingEnabled=!!r.isLoggingEnabled,r},Vv=e=>e.Capacitor=Gv(e),al=Vv(typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}),fc=al.registerPlugin;class Mm{constructor(){this.listeners={},this.retainedEventArguments={},this.windowListeners={}}addListener(t,r){let s=!1;this.listeners[t]||(this.listeners[t]=[],s=!0),this.listeners[t].push(r);const i=this.windowListeners[t];i&&!i.registered&&this.addWindowListener(i),s&&this.sendRetainedArgumentsForEvent(t);const o=async()=>this.removeListener(t,r);return Promise.resolve({remove:o})}async removeAllListeners(){this.listeners={};for(const t in this.windowListeners)this.removeWindowListener(this.windowListeners[t]);this.windowListeners={}}notifyListeners(t,r,s){const a=this.listeners[t];if(!a){if(s){let i=this.retainedEventArguments[t];i||(i=[]),i.push(r),this.retainedEventArguments[t]=i}return}a.forEach(i=>i(r))}hasListeners(t){var r;return!!(!((r=this.listeners[t])===null||r===void 0)&&r.length)}registerWindowListener(t,r){this.windowListeners[r]={registered:!1,windowEventName:t,pluginEventName:r,handler:s=>{this.notifyListeners(r,s)}}}unimplemented(t="not implemented"){return new al.Exception(t,qr.Unimplemented)}unavailable(t="not available"){return new al.Exception(t,qr.Unavailable)}async removeListener(t,r){const s=this.listeners[t];if(!s)return;const a=s.indexOf(r);this.listeners[t].splice(a,1),this.listeners[t].length||this.removeWindowListener(this.windowListeners[t])}addWindowListener(t){window.addEventListener(t.windowEventName,t.handler),t.registered=!0}removeWindowListener(t){t&&(window.removeEventListener(t.windowEventName,t.handler),t.registered=!1)}sendRetainedArgumentsForEvent(t){const r=this.retainedEventArguments[t];r&&(delete this.retainedEventArguments[t],r.forEach(s=>{this.notifyListeners(t,s)}))}}const Wd=e=>encodeURIComponent(e).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape),Gd=e=>e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent);class Xv extends Mm{async getCookies(){const t=document.cookie,r={};return t.split(";").forEach(s=>{if(s.length<=0)return;let[a,i]=s.replace(/=/,"CAP_COOKIE").split("CAP_COOKIE");a=Gd(a).trim(),i=Gd(i).trim(),r[a]=i}),r}async setCookie(t){try{const r=Wd(t.key),s=Wd(t.value),a=`; expires=${(t.expires||"").replace("expires=","")}`,i=(t.path||"/").replace("path=",""),o=t.url!=null&&t.url.length>0?`domain=${t.url}`:"";document.cookie=`${r}=${s||""}${a}; path=${i}; ${o};`}catch(r){return Promise.reject(r)}}async deleteCookie(t){try{document.cookie=`${t.key}=; Max-Age=0`}catch(r){return Promise.reject(r)}}async clearCookies(){try{const t=document.cookie.split(";")||[];for(const r of t)document.cookie=r.replace(/^ +/,"").replace(/=.*/,`=;expires=${new Date().toUTCString()};path=/`)}catch(t){return Promise.reject(t)}}async clearAllCookies(){try{await this.clearCookies()}catch(t){return Promise.reject(t)}}}fc("CapacitorCookies",{web:()=>new Xv});const Kv=async e=>new Promise((t,r)=>{const s=new FileReader;s.onload=()=>{const a=s.result;t(a.indexOf(",")>=0?a.split(",")[1]:a)},s.onerror=a=>r(a),s.readAsDataURL(e)}),Jv=(e={})=>{const t=Object.keys(e);return Object.keys(e).map(a=>a.toLocaleLowerCase()).reduce((a,i,o)=>(a[i]=e[t[o]],a),{})},Zv=(e,t=!0)=>e?Object.entries(e).reduce((s,a)=>{const[i,o]=a;let l,c;return Array.isArray(o)?(c="",o.forEach(u=>{l=t?encodeURIComponent(u):u,c+=`${i}=${l}&`}),c.slice(0,-1)):(l=t?encodeURIComponent(o):o,c=`${i}=${l}`),`${s}&${c}`},"").substr(1):null,ey=(e,t={})=>{const r=Object.assign({method:e.method||"GET",headers:e.headers},t),a=Jv(e.headers)["content-type"]||"";if(typeof e.data=="string")r.body=e.data;else if(a.includes("application/x-www-form-urlencoded")){const i=new URLSearchParams;for(const[o,l]of Object.entries(e.data||{}))i.set(o,l);r.body=i.toString()}else if(a.includes("multipart/form-data")||e.data instanceof FormData){const i=new FormData;if(e.data instanceof FormData)e.data.forEach((l,c)=>{i.append(c,l)});else for(const l of Object.keys(e.data))i.append(l,e.data[l]);r.body=i;const o=new Headers(r.headers);o.delete("content-type"),r.headers=o}else(a.includes("application/json")||typeof e.data=="object")&&(r.body=JSON.stringify(e.data));return r};class ty extends Mm{async request(t){const r=ey(t,t.webFetchExtra),s=Zv(t.params,t.shouldEncodeUrlParams),a=s?`${t.url}?${s}`:t.url,i=await fetch(a,r),o=i.headers.get("content-type")||"";let{responseType:l="text"}=i.ok?t:{};o.includes("application/json")&&(l="json");let c,u;switch(l){case"arraybuffer":case"blob":u=await i.blob(),c=await Kv(u);break;case"json":c=await i.json();break;case"document":case"text":default:c=await i.text()}const f={};return i.headers.forEach((p,h)=>{f[h]=p}),{data:c,headers:f,status:i.status,url:i.url}}async get(t){return this.request(Object.assign(Object.assign({},t),{method:"GET"}))}async post(t){return this.request(Object.assign(Object.assign({},t),{method:"POST"}))}async put(t){return this.request(Object.assign(Object.assign({},t),{method:"PUT"}))}async patch(t){return this.request(Object.assign(Object.assign({},t),{method:"PATCH"}))}async delete(t){return this.request(Object.assign(Object.assign({},t),{method:"DELETE"}))}}fc("CapacitorHttp",{web:()=>new ty});const Vd=fc("App",{web:()=>ec(()=>import("./web-cbde6617.js"),[]).then(e=>new e.AppWeb)}),ny={name:"Player",avatar:"wizard",level:1,totalXP:0,coins:0,energy:ft.MAX_ENERGY,energyRegenAt:null,comboStreak:0,bestCombo:0,currentStreak:0,bestStreak:0,totalDays:0,lastPlayedDate:null,totalQuizzes:0,totalCorrect:0,achievements:[],unlockedAvatars:["wizard","knight"],createdAt:Date.now()};function ry(){const[e,t]=d.useState(()=>{const u=localStorage.getItem(ft.STORAGE_KEYS.PLAYER);return u?JSON.parse(u):ny});d.useEffect(()=>{localStorage.setItem(ft.STORAGE_KEYS.PLAYER,JSON.stringify(e))},[e]),d.useEffect(()=>{if(e.energy<ft.MAX_ENERGY&&e.energyRegenAt){const u=setInterval(()=>{const f=Date.now();f>=e.energyRegenAt&&t(p=>({...p,energy:Math.min(p.energy+1,ft.MAX_ENERGY),energyRegenAt:p.energy+1<ft.MAX_ENERGY?f+ft.ENERGY_REGEN_TIME:null}))},6e4);return()=>clearInterval(u)}},[e.energy,e.energyRegenAt]);const r=d.useCallback(u=>{t(f=>{const p=f.totalXP+u,h=Rd(f.totalXP),b=Rd(p);let g=[...f.unlockedAvatars];return b>h&&ft.AVATARS.forEach(N=>{N.unlockLevel===b&&!g.includes(N.id)&&g.push(N.id)}),{...f,totalXP:p,level:b,unlockedAvatars:g}})},[]),s=d.useCallback(u=>{const p=new Error().stack;console.log("[COINS DEBUG] ================"),console.log("[COINS DEBUG] Amount:",u),console.log("[COINS DEBUG] Called from:",p.split(`
`)[2]),console.log("[COINS DEBUG] Full trace:",p),t(h=>(console.log("[COINS DEBUG] Current:",h.coins,"→ New:",h.coins+u),{...h,coins:h.coins+u}))},[]),a=d.useCallback((u=1)=>e.energy<u?!1:(t(f=>({...f,energy:f.energy-u,energyRegenAt:f.energyRegenAt||Date.now()+ft.ENERGY_REGEN_TIME})),!0),[e.energy]),i=d.useCallback(u=>{t(f=>{const p=u?f.comboStreak+1:0;return{...f,comboStreak:p,bestCombo:Math.max(f.bestCombo,p)}})},[]),o=d.useCallback(()=>{t(u=>({...u,comboStreak:0}))},[]),l=d.useCallback(u=>{e.unlockedAvatars.includes(u)&&t(f=>({...f,avatar:u}))},[e.unlockedAvatars]),c=d.useCallback(()=>{const u=new Date().toDateString();t(f=>{if(f.lastPlayedDate===u)return f;const p=new Date;p.setDate(p.getDate()-1);const h=p.toDateString();let b=f.currentStreak;return f.lastPlayedDate===h?b=f.currentStreak+1:(f.lastPlayedDate,b=1),{...f,currentStreak:b,bestStreak:Math.max(f.bestStreak,b),totalDays:f.totalDays+1,lastPlayedDate:u}})},[]);return{player:e,addXP:r,addCoins:s,useEnergy:a,updateCombo:i,resetCombo:o,changeAvatar:l,updateDailyStreak:c,levelProgress:Vx(e.totalXP)}}window.history.replaceState({path:window.location.pathname,preventBack:!0},"",window.location.pathname);window.history.pushState({path:window.location.pathname,preventBack:!0},"",window.location.pathname);const zm=d.createContext(null),jn=()=>{const e=d.useContext(zm);if(!e)throw new Error("useGame must be used within GameProvider");return e};function sy({children:e}){const t=ry();return n.jsx(zm.Provider,{value:t,children:e})}function ay(){return d.useEffect(()=>{let e=0,t=null;const r=Vd.addListener("backButton",()=>{const s=window.location.pathname;s==="/"||s==="/home"?(e++,e===1?(console.log("Press back again to exit"),t=setTimeout(()=>{e=0},2e3)):e===2&&(clearTimeout(t),Vd.minimizeApp())):window.history.back()});return()=>{r.remove(),t&&clearTimeout(t)}},[]),n.jsx(sy,{children:n.jsx(lx,{children:n.jsxs(Je,{element:n.jsx(Qx,{}),children:[n.jsx(Je,{path:"/",element:n.jsx(Ld,{})}),n.jsx(Je,{path:"/play",element:n.jsx(Bg,{})}),n.jsx(Je,{path:"/play/party",element:n.jsx(dv,{})}),n.jsx(Je,{path:"/profile",element:n.jsx(xv,{})}),n.jsx(Je,{path:"/profile/leaderboard",element:n.jsx(gv,{})}),n.jsx(Je,{path:"/profile/history",element:n.jsx(Nv,{})}),n.jsx(Je,{path:"/profile/rewards",element:n.jsx(Fv,{})}),n.jsx(Je,{path:"/profile/badges",element:n.jsx(Ov,{})}),n.jsx(Je,{path:"/profile/achievements",element:n.jsx(Bv,{})}),n.jsx(Je,{path:"/profile/streaks",element:n.jsx(Uv,{})}),n.jsx(Je,{path:"/profile/quests",element:n.jsx(Qv,{})}),n.jsx(Je,{path:"/profile/settings",element:n.jsx(Hv,{})}),n.jsx(Je,{path:"/swipe",element:n.jsx(fv,{})}),n.jsx(Je,{path:"/leaders",element:n.jsx(ax,{to:"/profile/leaderboard",replace:!0})}),n.jsx(Je,{path:"/quiz/:category",element:n.jsx(nv,{})}),n.jsx(Je,{path:"/quiz/play",element:n.jsx(hv,{})}),n.jsx(Je,{path:"/practice/start",element:n.jsx(pv,{})}),n.jsx(Je,{path:"*",element:n.jsx(Ld,{})})]})})})}oo.createRoot(document.getElementById("root")).render(n.jsx(pt.StrictMode,{children:n.jsx(Ax,{children:n.jsx(ay,{})})}));export{Mm as W,Om as c,Xd as g};
