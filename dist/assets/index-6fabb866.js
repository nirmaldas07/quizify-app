(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function r(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(a){if(a.ep)return;a.ep=!0;const i=r(a);fetch(a.href,i)}})();var Om=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Xd(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Kd={exports:{}},ci={},Jd={exports:{}},je={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qs=Symbol.for("react.element"),$m=Symbol.for("react.portal"),Bm=Symbol.for("react.fragment"),Um=Symbol.for("react.strict_mode"),qm=Symbol.for("react.profiler"),Qm=Symbol.for("react.provider"),Ym=Symbol.for("react.context"),Wm=Symbol.for("react.forward_ref"),Hm=Symbol.for("react.suspense"),Gm=Symbol.for("react.memo"),Vm=Symbol.for("react.lazy"),hc=Symbol.iterator;function Xm(e){return e===null||typeof e!="object"?null:(e=hc&&e[hc]||e["@@iterator"],typeof e=="function"?e:null)}var Zd={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},eu=Object.assign,tu={};function Yr(e,t,r){this.props=e,this.context=t,this.refs=tu,this.updater=r||Zd}Yr.prototype.isReactComponent={};Yr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Yr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function nu(){}nu.prototype=Yr.prototype;function ol(e,t,r){this.props=e,this.context=t,this.refs=tu,this.updater=r||Zd}var ll=ol.prototype=new nu;ll.constructor=ol;eu(ll,Yr.prototype);ll.isPureReactComponent=!0;var pc=Array.isArray,ru=Object.prototype.hasOwnProperty,cl={current:null},su={key:!0,ref:!0,__self:!0,__source:!0};function au(e,t,r){var s,a={},i=null,o=null;if(t!=null)for(s in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(i=""+t.key),t)ru.call(t,s)&&!su.hasOwnProperty(s)&&(a[s]=t[s]);var l=arguments.length-2;if(l===1)a.children=r;else if(1<l){for(var c=Array(l),u=0;u<l;u++)c[u]=arguments[u+2];a.children=c}if(e&&e.defaultProps)for(s in l=e.defaultProps,l)a[s]===void 0&&(a[s]=l[s]);return{$$typeof:qs,type:e,key:i,ref:o,props:a,_owner:cl.current}}function Km(e,t){return{$$typeof:qs,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function dl(e){return typeof e=="object"&&e!==null&&e.$$typeof===qs}function Jm(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(r){return t[r]})}var xc=/\/+/g;function Pi(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Jm(""+e.key):t.toString(36)}function wa(e,t,r,s,a){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case qs:case $m:o=!0}}if(o)return o=e,a=a(o),e=s===""?"."+Pi(o,0):s,pc(a)?(r="",e!=null&&(r=e.replace(xc,"$&/")+"/"),wa(a,t,r,"",function(u){return u})):a!=null&&(dl(a)&&(a=Km(a,r+(!a.key||o&&o.key===a.key?"":(""+a.key).replace(xc,"$&/")+"/")+e)),t.push(a)),1;if(o=0,s=s===""?".":s+":",pc(e))for(var l=0;l<e.length;l++){i=e[l];var c=s+Pi(i,l);o+=wa(i,t,r,c,a)}else if(c=Xm(e),typeof c=="function")for(e=c.call(e),l=0;!(i=e.next()).done;)i=i.value,c=s+Pi(i,l++),o+=wa(i,t,r,c,a);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function Xs(e,t,r){if(e==null)return e;var s=[],a=0;return wa(e,s,"","",function(i){return t.call(r,i,a++)}),s}function Zm(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(r){(e._status===0||e._status===-1)&&(e._status=1,e._result=r)},function(r){(e._status===0||e._status===-1)&&(e._status=2,e._result=r)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var bt={current:null},ja={transition:null},e0={ReactCurrentDispatcher:bt,ReactCurrentBatchConfig:ja,ReactCurrentOwner:cl};function iu(){throw Error("act(...) is not supported in production builds of React.")}je.Children={map:Xs,forEach:function(e,t,r){Xs(e,function(){t.apply(this,arguments)},r)},count:function(e){var t=0;return Xs(e,function(){t++}),t},toArray:function(e){return Xs(e,function(t){return t})||[]},only:function(e){if(!dl(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};je.Component=Yr;je.Fragment=Bm;je.Profiler=qm;je.PureComponent=ol;je.StrictMode=Um;je.Suspense=Hm;je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=e0;je.act=iu;je.cloneElement=function(e,t,r){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var s=eu({},e.props),a=e.key,i=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,o=cl.current),t.key!==void 0&&(a=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(c in t)ru.call(t,c)&&!su.hasOwnProperty(c)&&(s[c]=t[c]===void 0&&l!==void 0?l[c]:t[c])}var c=arguments.length-2;if(c===1)s.children=r;else if(1<c){l=Array(c);for(var u=0;u<c;u++)l[u]=arguments[u+2];s.children=l}return{$$typeof:qs,type:e.type,key:a,ref:i,props:s,_owner:o}};je.createContext=function(e){return e={$$typeof:Ym,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Qm,_context:e},e.Consumer=e};je.createElement=au;je.createFactory=function(e){var t=au.bind(null,e);return t.type=e,t};je.createRef=function(){return{current:null}};je.forwardRef=function(e){return{$$typeof:Wm,render:e}};je.isValidElement=dl;je.lazy=function(e){return{$$typeof:Vm,_payload:{_status:-1,_result:e},_init:Zm}};je.memo=function(e,t){return{$$typeof:Gm,type:e,compare:t===void 0?null:t}};je.startTransition=function(e){var t=ja.transition;ja.transition={};try{e()}finally{ja.transition=t}};je.unstable_act=iu;je.useCallback=function(e,t){return bt.current.useCallback(e,t)};je.useContext=function(e){return bt.current.useContext(e)};je.useDebugValue=function(){};je.useDeferredValue=function(e){return bt.current.useDeferredValue(e)};je.useEffect=function(e,t){return bt.current.useEffect(e,t)};je.useId=function(){return bt.current.useId()};je.useImperativeHandle=function(e,t,r){return bt.current.useImperativeHandle(e,t,r)};je.useInsertionEffect=function(e,t){return bt.current.useInsertionEffect(e,t)};je.useLayoutEffect=function(e,t){return bt.current.useLayoutEffect(e,t)};je.useMemo=function(e,t){return bt.current.useMemo(e,t)};je.useReducer=function(e,t,r){return bt.current.useReducer(e,t,r)};je.useRef=function(e){return bt.current.useRef(e)};je.useState=function(e){return bt.current.useState(e)};je.useSyncExternalStore=function(e,t,r){return bt.current.useSyncExternalStore(e,t,r)};je.useTransition=function(){return bt.current.useTransition()};je.version="18.3.1";Jd.exports=je;var d=Jd.exports;const gt=Xd(d);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var t0=d,n0=Symbol.for("react.element"),r0=Symbol.for("react.fragment"),s0=Object.prototype.hasOwnProperty,a0=t0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i0={key:!0,ref:!0,__self:!0,__source:!0};function ou(e,t,r){var s,a={},i=null,o=null;r!==void 0&&(i=""+r),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(o=t.ref);for(s in t)s0.call(t,s)&&!i0.hasOwnProperty(s)&&(a[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps,t)a[s]===void 0&&(a[s]=t[s]);return{$$typeof:n0,type:e,key:i,ref:o,props:a,_owner:a0.current}}ci.Fragment=r0;ci.jsx=ou;ci.jsxs=ou;Kd.exports=ci;var n=Kd.exports,lo={},lu={exports:{}},Lt={},cu={exports:{}},du={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(_,M){var q=_.length;_.push(M);e:for(;0<q;){var D=q-1>>>1,L=_[D];if(0<a(L,M))_[D]=M,_[q]=L,q=D;else break e}}function r(_){return _.length===0?null:_[0]}function s(_){if(_.length===0)return null;var M=_[0],q=_.pop();if(q!==M){_[0]=q;e:for(var D=0,L=_.length,A=L>>>1;D<A;){var H=2*(D+1)-1,re=_[H],J=H+1,O=_[J];if(0>a(re,q))J<L&&0>a(O,re)?(_[D]=O,_[J]=q,D=J):(_[D]=re,_[H]=q,D=H);else if(J<L&&0>a(O,q))_[D]=O,_[J]=q,D=J;else break e}}return M}function a(_,M){var q=_.sortIndex-M.sortIndex;return q!==0?q:_.id-M.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var o=Date,l=o.now();e.unstable_now=function(){return o.now()-l}}var c=[],u=[],f=1,p=null,h=3,b=!1,v=!1,j=!1,C=typeof setTimeout=="function"?setTimeout:null,y=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(_){for(var M=r(u);M!==null;){if(M.callback===null)s(u);else if(M.startTime<=_)s(u),M.sortIndex=M.expirationTime,t(c,M);else break;M=r(u)}}function E(_){if(j=!1,x(_),!v)if(r(c)!==null)v=!0,U(N);else{var M=r(u);M!==null&&B(E,M.startTime-_)}}function N(_,M){v=!1,j&&(j=!1,y(g),g=-1),b=!0;var q=h;try{for(x(M),p=r(c);p!==null&&(!(p.expirationTime>M)||_&&!P());){var D=p.callback;if(typeof D=="function"){p.callback=null,h=p.priorityLevel;var L=D(p.expirationTime<=M);M=e.unstable_now(),typeof L=="function"?p.callback=L:p===r(c)&&s(c),x(M)}else s(c);p=r(c)}if(p!==null)var A=!0;else{var H=r(u);H!==null&&B(E,H.startTime-M),A=!1}return A}finally{p=null,h=q,b=!1}}var T=!1,S=null,g=-1,w=5,k=-1;function P(){return!(e.unstable_now()-k<w)}function F(){if(S!==null){var _=e.unstable_now();k=_;var M=!0;try{M=S(!0,_)}finally{M?Y():(T=!1,S=null)}}else T=!1}var Y;if(typeof m=="function")Y=function(){m(F)};else if(typeof MessageChannel<"u"){var ee=new MessageChannel,Q=ee.port2;ee.port1.onmessage=F,Y=function(){Q.postMessage(null)}}else Y=function(){C(F,0)};function U(_){S=_,T||(T=!0,Y())}function B(_,M){g=C(function(){_(e.unstable_now())},M)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(_){_.callback=null},e.unstable_continueExecution=function(){v||b||(v=!0,U(N))},e.unstable_forceFrameRate=function(_){0>_||125<_?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):w=0<_?Math.floor(1e3/_):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return r(c)},e.unstable_next=function(_){switch(h){case 1:case 2:case 3:var M=3;break;default:M=h}var q=h;h=M;try{return _()}finally{h=q}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(_,M){switch(_){case 1:case 2:case 3:case 4:case 5:break;default:_=3}var q=h;h=_;try{return M()}finally{h=q}},e.unstable_scheduleCallback=function(_,M,q){var D=e.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?D+q:D):q=D,_){case 1:var L=-1;break;case 2:L=250;break;case 5:L=1073741823;break;case 4:L=1e4;break;default:L=5e3}return L=q+L,_={id:f++,callback:M,priorityLevel:_,startTime:q,expirationTime:L,sortIndex:-1},q>D?(_.sortIndex=q,t(u,_),r(c)===null&&_===r(u)&&(j?(y(g),g=-1):j=!0,B(E,q-D))):(_.sortIndex=L,t(c,_),v||b||(v=!0,U(N))),_},e.unstable_shouldYield=P,e.unstable_wrapCallback=function(_){var M=h;return function(){var q=h;h=M;try{return _.apply(this,arguments)}finally{h=q}}}})(du);cu.exports=du;var o0=cu.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var l0=d,_t=o0;function V(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var uu=new Set,Ss={};function fr(e,t){Dr(e,t),Dr(e+"Capture",t)}function Dr(e,t){for(Ss[e]=t,e=0;e<t.length;e++)uu.add(t[e])}var vn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),co=Object.prototype.hasOwnProperty,c0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,gc={},vc={};function d0(e){return co.call(vc,e)?!0:co.call(gc,e)?!1:c0.test(e)?vc[e]=!0:(gc[e]=!0,!1)}function u0(e,t,r,s){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return s?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function f0(e,t,r,s){if(t===null||typeof t>"u"||u0(e,t,r,s))return!0;if(s)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function wt(e,t,r,s,a,i,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=s,this.attributeNamespace=a,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=o}var lt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){lt[e]=new wt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];lt[t]=new wt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){lt[e]=new wt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){lt[e]=new wt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){lt[e]=new wt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){lt[e]=new wt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){lt[e]=new wt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){lt[e]=new wt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){lt[e]=new wt(e,5,!1,e.toLowerCase(),null,!1,!1)});var ul=/[\-:]([a-z])/g;function fl(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(ul,fl);lt[t]=new wt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(ul,fl);lt[t]=new wt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(ul,fl);lt[t]=new wt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){lt[e]=new wt(e,1,!1,e.toLowerCase(),null,!1,!1)});lt.xlinkHref=new wt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){lt[e]=new wt(e,1,!1,e.toLowerCase(),null,!0,!0)});function ml(e,t,r,s){var a=lt.hasOwnProperty(t)?lt[t]:null;(a!==null?a.type!==0:s||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(f0(t,r,a,s)&&(r=null),s||a===null?d0(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):a.mustUseProperty?e[a.propertyName]=r===null?a.type===3?!1:"":r:(t=a.attributeName,s=a.attributeNamespace,r===null?e.removeAttribute(t):(a=a.type,r=a===3||a===4&&r===!0?"":""+r,s?e.setAttributeNS(s,t,r):e.setAttribute(t,r))))}var Nn=l0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ks=Symbol.for("react.element"),vr=Symbol.for("react.portal"),yr=Symbol.for("react.fragment"),hl=Symbol.for("react.strict_mode"),uo=Symbol.for("react.profiler"),fu=Symbol.for("react.provider"),mu=Symbol.for("react.context"),pl=Symbol.for("react.forward_ref"),fo=Symbol.for("react.suspense"),mo=Symbol.for("react.suspense_list"),xl=Symbol.for("react.memo"),Rn=Symbol.for("react.lazy"),hu=Symbol.for("react.offscreen"),yc=Symbol.iterator;function Kr(e){return e===null||typeof e!="object"?null:(e=yc&&e[yc]||e["@@iterator"],typeof e=="function"?e:null)}var Ye=Object.assign,Ti;function us(e){if(Ti===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);Ti=t&&t[1]||""}return`
`+Ti+e}var Ri=!1;function _i(e,t){if(!e||Ri)return"";Ri=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var s=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){s=u}e.call(t.prototype)}else{try{throw Error()}catch(u){s=u}e()}}catch(u){if(u&&s&&typeof u.stack=="string"){for(var a=u.stack.split(`
`),i=s.stack.split(`
`),o=a.length-1,l=i.length-1;1<=o&&0<=l&&a[o]!==i[l];)l--;for(;1<=o&&0<=l;o--,l--)if(a[o]!==i[l]){if(o!==1||l!==1)do if(o--,l--,0>l||a[o]!==i[l]){var c=`
`+a[o].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=o&&0<=l);break}}}finally{Ri=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?us(e):""}function m0(e){switch(e.tag){case 5:return us(e.type);case 16:return us("Lazy");case 13:return us("Suspense");case 19:return us("SuspenseList");case 0:case 2:case 15:return e=_i(e.type,!1),e;case 11:return e=_i(e.type.render,!1),e;case 1:return e=_i(e.type,!0),e;default:return""}}function ho(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case yr:return"Fragment";case vr:return"Portal";case uo:return"Profiler";case hl:return"StrictMode";case fo:return"Suspense";case mo:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case mu:return(e.displayName||"Context")+".Consumer";case fu:return(e._context.displayName||"Context")+".Provider";case pl:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case xl:return t=e.displayName||null,t!==null?t:ho(e.type)||"Memo";case Rn:t=e._payload,e=e._init;try{return ho(e(t))}catch{}}return null}function h0(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ho(t);case 8:return t===hl?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Yn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function pu(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function p0(e){var t=pu(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),s=""+e[t];if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var a=r.get,i=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(o){s=""+o,i.call(this,o)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return s},setValue:function(o){s=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Js(e){e._valueTracker||(e._valueTracker=p0(e))}function xu(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),s="";return e&&(s=pu(e)?e.checked?"true":"false":e.value),e=s,e!==r?(t.setValue(e),!0):!1}function Da(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function po(e,t){var r=t.checked;return Ye({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function bc(e,t){var r=t.defaultValue==null?"":t.defaultValue,s=t.checked!=null?t.checked:t.defaultChecked;r=Yn(t.value!=null?t.value:r),e._wrapperState={initialChecked:s,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function gu(e,t){t=t.checked,t!=null&&ml(e,"checked",t,!1)}function xo(e,t){gu(e,t);var r=Yn(t.value),s=t.type;if(r!=null)s==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(s==="submit"||s==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?go(e,t.type,r):t.hasOwnProperty("defaultValue")&&go(e,t.type,Yn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function wc(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var s=t.type;if(!(s!=="submit"&&s!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function go(e,t,r){(t!=="number"||Da(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var fs=Array.isArray;function Rr(e,t,r,s){if(e=e.options,t){t={};for(var a=0;a<r.length;a++)t["$"+r[a]]=!0;for(r=0;r<e.length;r++)a=t.hasOwnProperty("$"+e[r].value),e[r].selected!==a&&(e[r].selected=a),a&&s&&(e[r].defaultSelected=!0)}else{for(r=""+Yn(r),t=null,a=0;a<e.length;a++){if(e[a].value===r){e[a].selected=!0,s&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function vo(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(V(91));return Ye({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function jc(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(V(92));if(fs(r)){if(1<r.length)throw Error(V(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:Yn(r)}}function vu(e,t){var r=Yn(t.value),s=Yn(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),s!=null&&(e.defaultValue=""+s)}function Nc(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function yu(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function yo(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?yu(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Zs,bu=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,r,s,a){MSApp.execUnsafeLocalFunction(function(){return e(t,r,s,a)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Zs=Zs||document.createElement("div"),Zs.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Zs.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Cs(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var ps={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},x0=["Webkit","ms","Moz","O"];Object.keys(ps).forEach(function(e){x0.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),ps[t]=ps[e]})});function wu(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||ps.hasOwnProperty(e)&&ps[e]?(""+t).trim():t+"px"}function ju(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var s=r.indexOf("--")===0,a=wu(r,t[r],s);r==="float"&&(r="cssFloat"),s?e.setProperty(r,a):e[r]=a}}var g0=Ye({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function bo(e,t){if(t){if(g0[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(V(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(V(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(V(61))}if(t.style!=null&&typeof t.style!="object")throw Error(V(62))}}function wo(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var jo=null;function gl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var No=null,_r=null,Lr=null;function kc(e){if(e=Ws(e)){if(typeof No!="function")throw Error(V(280));var t=e.stateNode;t&&(t=hi(t),No(e.stateNode,e.type,t))}}function Nu(e){_r?Lr?Lr.push(e):Lr=[e]:_r=e}function ku(){if(_r){var e=_r,t=Lr;if(Lr=_r=null,kc(e),t)for(e=0;e<t.length;e++)kc(t[e])}}function Su(e,t){return e(t)}function Cu(){}var Li=!1;function Eu(e,t,r){if(Li)return e(t,r);Li=!0;try{return Su(e,t,r)}finally{Li=!1,(_r!==null||Lr!==null)&&(Cu(),ku())}}function Es(e,t){var r=e.stateNode;if(r===null)return null;var s=hi(r);if(s===null)return null;r=s[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(e=e.type,s=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!s;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(V(231,t,typeof r));return r}var ko=!1;if(vn)try{var Jr={};Object.defineProperty(Jr,"passive",{get:function(){ko=!0}}),window.addEventListener("test",Jr,Jr),window.removeEventListener("test",Jr,Jr)}catch{ko=!1}function v0(e,t,r,s,a,i,o,l,c){var u=Array.prototype.slice.call(arguments,3);try{t.apply(r,u)}catch(f){this.onError(f)}}var xs=!1,Fa=null,Oa=!1,So=null,y0={onError:function(e){xs=!0,Fa=e}};function b0(e,t,r,s,a,i,o,l,c){xs=!1,Fa=null,v0.apply(y0,arguments)}function w0(e,t,r,s,a,i,o,l,c){if(b0.apply(this,arguments),xs){if(xs){var u=Fa;xs=!1,Fa=null}else throw Error(V(198));Oa||(Oa=!0,So=u)}}function mr(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function Pu(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Sc(e){if(mr(e)!==e)throw Error(V(188))}function j0(e){var t=e.alternate;if(!t){if(t=mr(e),t===null)throw Error(V(188));return t!==e?null:e}for(var r=e,s=t;;){var a=r.return;if(a===null)break;var i=a.alternate;if(i===null){if(s=a.return,s!==null){r=s;continue}break}if(a.child===i.child){for(i=a.child;i;){if(i===r)return Sc(a),e;if(i===s)return Sc(a),t;i=i.sibling}throw Error(V(188))}if(r.return!==s.return)r=a,s=i;else{for(var o=!1,l=a.child;l;){if(l===r){o=!0,r=a,s=i;break}if(l===s){o=!0,s=a,r=i;break}l=l.sibling}if(!o){for(l=i.child;l;){if(l===r){o=!0,r=i,s=a;break}if(l===s){o=!0,s=i,r=a;break}l=l.sibling}if(!o)throw Error(V(189))}}if(r.alternate!==s)throw Error(V(190))}if(r.tag!==3)throw Error(V(188));return r.stateNode.current===r?e:t}function Tu(e){return e=j0(e),e!==null?Ru(e):null}function Ru(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Ru(e);if(t!==null)return t;e=e.sibling}return null}var _u=_t.unstable_scheduleCallback,Cc=_t.unstable_cancelCallback,N0=_t.unstable_shouldYield,k0=_t.unstable_requestPaint,Ve=_t.unstable_now,S0=_t.unstable_getCurrentPriorityLevel,vl=_t.unstable_ImmediatePriority,Lu=_t.unstable_UserBlockingPriority,$a=_t.unstable_NormalPriority,C0=_t.unstable_LowPriority,Iu=_t.unstable_IdlePriority,di=null,on=null;function E0(e){if(on&&typeof on.onCommitFiberRoot=="function")try{on.onCommitFiberRoot(di,e,void 0,(e.current.flags&128)===128)}catch{}}var Vt=Math.clz32?Math.clz32:R0,P0=Math.log,T0=Math.LN2;function R0(e){return e>>>=0,e===0?32:31-(P0(e)/T0|0)|0}var ea=64,ta=4194304;function ms(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ba(e,t){var r=e.pendingLanes;if(r===0)return 0;var s=0,a=e.suspendedLanes,i=e.pingedLanes,o=r&268435455;if(o!==0){var l=o&~a;l!==0?s=ms(l):(i&=o,i!==0&&(s=ms(i)))}else o=r&~a,o!==0?s=ms(o):i!==0&&(s=ms(i));if(s===0)return 0;if(t!==0&&t!==s&&!(t&a)&&(a=s&-s,i=t&-t,a>=i||a===16&&(i&4194240)!==0))return t;if(s&4&&(s|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=s;0<t;)r=31-Vt(t),a=1<<r,s|=e[r],t&=~a;return s}function _0(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function L0(e,t){for(var r=e.suspendedLanes,s=e.pingedLanes,a=e.expirationTimes,i=e.pendingLanes;0<i;){var o=31-Vt(i),l=1<<o,c=a[o];c===-1?(!(l&r)||l&s)&&(a[o]=_0(l,t)):c<=t&&(e.expiredLanes|=l),i&=~l}}function Co(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Au(){var e=ea;return ea<<=1,!(ea&4194240)&&(ea=64),e}function Ii(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function Qs(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Vt(t),e[t]=r}function I0(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var s=e.eventTimes;for(e=e.expirationTimes;0<r;){var a=31-Vt(r),i=1<<a;t[a]=0,s[a]=-1,e[a]=-1,r&=~i}}function yl(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var s=31-Vt(r),a=1<<s;a&t|e[s]&t&&(e[s]|=t),r&=~a}}var Re=0;function zu(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Mu,bl,Du,Fu,Ou,Eo=!1,na=[],Dn=null,Fn=null,On=null,Ps=new Map,Ts=new Map,In=[],A0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ec(e,t){switch(e){case"focusin":case"focusout":Dn=null;break;case"dragenter":case"dragleave":Fn=null;break;case"mouseover":case"mouseout":On=null;break;case"pointerover":case"pointerout":Ps.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ts.delete(t.pointerId)}}function Zr(e,t,r,s,a,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:r,eventSystemFlags:s,nativeEvent:i,targetContainers:[a]},t!==null&&(t=Ws(t),t!==null&&bl(t)),e):(e.eventSystemFlags|=s,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function z0(e,t,r,s,a){switch(t){case"focusin":return Dn=Zr(Dn,e,t,r,s,a),!0;case"dragenter":return Fn=Zr(Fn,e,t,r,s,a),!0;case"mouseover":return On=Zr(On,e,t,r,s,a),!0;case"pointerover":var i=a.pointerId;return Ps.set(i,Zr(Ps.get(i)||null,e,t,r,s,a)),!0;case"gotpointercapture":return i=a.pointerId,Ts.set(i,Zr(Ts.get(i)||null,e,t,r,s,a)),!0}return!1}function $u(e){var t=Zn(e.target);if(t!==null){var r=mr(t);if(r!==null){if(t=r.tag,t===13){if(t=Pu(r),t!==null){e.blockedOn=t,Ou(e.priority,function(){Du(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Na(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=Po(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var s=new r.constructor(r.type,r);jo=s,r.target.dispatchEvent(s),jo=null}else return t=Ws(r),t!==null&&bl(t),e.blockedOn=r,!1;t.shift()}return!0}function Pc(e,t,r){Na(e)&&r.delete(t)}function M0(){Eo=!1,Dn!==null&&Na(Dn)&&(Dn=null),Fn!==null&&Na(Fn)&&(Fn=null),On!==null&&Na(On)&&(On=null),Ps.forEach(Pc),Ts.forEach(Pc)}function es(e,t){e.blockedOn===t&&(e.blockedOn=null,Eo||(Eo=!0,_t.unstable_scheduleCallback(_t.unstable_NormalPriority,M0)))}function Rs(e){function t(a){return es(a,e)}if(0<na.length){es(na[0],e);for(var r=1;r<na.length;r++){var s=na[r];s.blockedOn===e&&(s.blockedOn=null)}}for(Dn!==null&&es(Dn,e),Fn!==null&&es(Fn,e),On!==null&&es(On,e),Ps.forEach(t),Ts.forEach(t),r=0;r<In.length;r++)s=In[r],s.blockedOn===e&&(s.blockedOn=null);for(;0<In.length&&(r=In[0],r.blockedOn===null);)$u(r),r.blockedOn===null&&In.shift()}var Ir=Nn.ReactCurrentBatchConfig,Ua=!0;function D0(e,t,r,s){var a=Re,i=Ir.transition;Ir.transition=null;try{Re=1,wl(e,t,r,s)}finally{Re=a,Ir.transition=i}}function F0(e,t,r,s){var a=Re,i=Ir.transition;Ir.transition=null;try{Re=4,wl(e,t,r,s)}finally{Re=a,Ir.transition=i}}function wl(e,t,r,s){if(Ua){var a=Po(e,t,r,s);if(a===null)qi(e,t,s,qa,r),Ec(e,s);else if(z0(a,e,t,r,s))s.stopPropagation();else if(Ec(e,s),t&4&&-1<A0.indexOf(e)){for(;a!==null;){var i=Ws(a);if(i!==null&&Mu(i),i=Po(e,t,r,s),i===null&&qi(e,t,s,qa,r),i===a)break;a=i}a!==null&&s.stopPropagation()}else qi(e,t,s,null,r)}}var qa=null;function Po(e,t,r,s){if(qa=null,e=gl(s),e=Zn(e),e!==null)if(t=mr(e),t===null)e=null;else if(r=t.tag,r===13){if(e=Pu(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return qa=e,null}function Bu(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(S0()){case vl:return 1;case Lu:return 4;case $a:case C0:return 16;case Iu:return 536870912;default:return 16}default:return 16}}var zn=null,jl=null,ka=null;function Uu(){if(ka)return ka;var e,t=jl,r=t.length,s,a="value"in zn?zn.value:zn.textContent,i=a.length;for(e=0;e<r&&t[e]===a[e];e++);var o=r-e;for(s=1;s<=o&&t[r-s]===a[i-s];s++);return ka=a.slice(e,1<s?1-s:void 0)}function Sa(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ra(){return!0}function Tc(){return!1}function It(e){function t(r,s,a,i,o){this._reactName=r,this._targetInst=a,this.type=s,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(r=e[l],this[l]=r?r(i):i[l]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?ra:Tc,this.isPropagationStopped=Tc,this}return Ye(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=ra)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=ra)},persist:function(){},isPersistent:ra}),t}var Wr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Nl=It(Wr),Ys=Ye({},Wr,{view:0,detail:0}),O0=It(Ys),Ai,zi,ts,ui=Ye({},Ys,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:kl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ts&&(ts&&e.type==="mousemove"?(Ai=e.screenX-ts.screenX,zi=e.screenY-ts.screenY):zi=Ai=0,ts=e),Ai)},movementY:function(e){return"movementY"in e?e.movementY:zi}}),Rc=It(ui),$0=Ye({},ui,{dataTransfer:0}),B0=It($0),U0=Ye({},Ys,{relatedTarget:0}),Mi=It(U0),q0=Ye({},Wr,{animationName:0,elapsedTime:0,pseudoElement:0}),Q0=It(q0),Y0=Ye({},Wr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),W0=It(Y0),H0=Ye({},Wr,{data:0}),_c=It(H0),G0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},V0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},X0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function K0(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=X0[e])?!!t[e]:!1}function kl(){return K0}var J0=Ye({},Ys,{key:function(e){if(e.key){var t=G0[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Sa(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?V0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:kl,charCode:function(e){return e.type==="keypress"?Sa(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Sa(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Z0=It(J0),eh=Ye({},ui,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Lc=It(eh),th=Ye({},Ys,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:kl}),nh=It(th),rh=Ye({},Wr,{propertyName:0,elapsedTime:0,pseudoElement:0}),sh=It(rh),ah=Ye({},ui,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),ih=It(ah),oh=[9,13,27,32],Sl=vn&&"CompositionEvent"in window,gs=null;vn&&"documentMode"in document&&(gs=document.documentMode);var lh=vn&&"TextEvent"in window&&!gs,qu=vn&&(!Sl||gs&&8<gs&&11>=gs),Ic=String.fromCharCode(32),Ac=!1;function Qu(e,t){switch(e){case"keyup":return oh.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Yu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var br=!1;function ch(e,t){switch(e){case"compositionend":return Yu(t);case"keypress":return t.which!==32?null:(Ac=!0,Ic);case"textInput":return e=t.data,e===Ic&&Ac?null:e;default:return null}}function dh(e,t){if(br)return e==="compositionend"||!Sl&&Qu(e,t)?(e=Uu(),ka=jl=zn=null,br=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return qu&&t.locale!=="ko"?null:t.data;default:return null}}var uh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function zc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!uh[e.type]:t==="textarea"}function Wu(e,t,r,s){Nu(s),t=Qa(t,"onChange"),0<t.length&&(r=new Nl("onChange","change",null,r,s),e.push({event:r,listeners:t}))}var vs=null,_s=null;function fh(e){rf(e,0)}function fi(e){var t=Nr(e);if(xu(t))return e}function mh(e,t){if(e==="change")return t}var Hu=!1;if(vn){var Di;if(vn){var Fi="oninput"in document;if(!Fi){var Mc=document.createElement("div");Mc.setAttribute("oninput","return;"),Fi=typeof Mc.oninput=="function"}Di=Fi}else Di=!1;Hu=Di&&(!document.documentMode||9<document.documentMode)}function Dc(){vs&&(vs.detachEvent("onpropertychange",Gu),_s=vs=null)}function Gu(e){if(e.propertyName==="value"&&fi(_s)){var t=[];Wu(t,_s,e,gl(e)),Eu(fh,t)}}function hh(e,t,r){e==="focusin"?(Dc(),vs=t,_s=r,vs.attachEvent("onpropertychange",Gu)):e==="focusout"&&Dc()}function ph(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return fi(_s)}function xh(e,t){if(e==="click")return fi(t)}function gh(e,t){if(e==="input"||e==="change")return fi(t)}function vh(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Kt=typeof Object.is=="function"?Object.is:vh;function Ls(e,t){if(Kt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),s=Object.keys(t);if(r.length!==s.length)return!1;for(s=0;s<r.length;s++){var a=r[s];if(!co.call(t,a)||!Kt(e[a],t[a]))return!1}return!0}function Fc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Oc(e,t){var r=Fc(e);e=0;for(var s;r;){if(r.nodeType===3){if(s=e+r.textContent.length,e<=t&&s>=t)return{node:r,offset:t-e};e=s}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=Fc(r)}}function Vu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Vu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Xu(){for(var e=window,t=Da();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=Da(e.document)}return t}function Cl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function yh(e){var t=Xu(),r=e.focusedElem,s=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&Vu(r.ownerDocument.documentElement,r)){if(s!==null&&Cl(r)){if(t=s.start,e=s.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var a=r.textContent.length,i=Math.min(s.start,a);s=s.end===void 0?i:Math.min(s.end,a),!e.extend&&i>s&&(a=s,s=i,i=a),a=Oc(r,i);var o=Oc(r,s);a&&o&&(e.rangeCount!==1||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(a.node,a.offset),e.removeAllRanges(),i>s?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var bh=vn&&"documentMode"in document&&11>=document.documentMode,wr=null,To=null,ys=null,Ro=!1;function $c(e,t,r){var s=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;Ro||wr==null||wr!==Da(s)||(s=wr,"selectionStart"in s&&Cl(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),ys&&Ls(ys,s)||(ys=s,s=Qa(To,"onSelect"),0<s.length&&(t=new Nl("onSelect","select",null,t,r),e.push({event:t,listeners:s}),t.target=wr)))}function sa(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var jr={animationend:sa("Animation","AnimationEnd"),animationiteration:sa("Animation","AnimationIteration"),animationstart:sa("Animation","AnimationStart"),transitionend:sa("Transition","TransitionEnd")},Oi={},Ku={};vn&&(Ku=document.createElement("div").style,"AnimationEvent"in window||(delete jr.animationend.animation,delete jr.animationiteration.animation,delete jr.animationstart.animation),"TransitionEvent"in window||delete jr.transitionend.transition);function mi(e){if(Oi[e])return Oi[e];if(!jr[e])return e;var t=jr[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in Ku)return Oi[e]=t[r];return e}var Ju=mi("animationend"),Zu=mi("animationiteration"),ef=mi("animationstart"),tf=mi("transitionend"),nf=new Map,Bc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Hn(e,t){nf.set(e,t),fr(t,[e])}for(var $i=0;$i<Bc.length;$i++){var Bi=Bc[$i],wh=Bi.toLowerCase(),jh=Bi[0].toUpperCase()+Bi.slice(1);Hn(wh,"on"+jh)}Hn(Ju,"onAnimationEnd");Hn(Zu,"onAnimationIteration");Hn(ef,"onAnimationStart");Hn("dblclick","onDoubleClick");Hn("focusin","onFocus");Hn("focusout","onBlur");Hn(tf,"onTransitionEnd");Dr("onMouseEnter",["mouseout","mouseover"]);Dr("onMouseLeave",["mouseout","mouseover"]);Dr("onPointerEnter",["pointerout","pointerover"]);Dr("onPointerLeave",["pointerout","pointerover"]);fr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));fr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));fr("onBeforeInput",["compositionend","keypress","textInput","paste"]);fr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));fr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));fr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var hs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Nh=new Set("cancel close invalid load scroll toggle".split(" ").concat(hs));function Uc(e,t,r){var s=e.type||"unknown-event";e.currentTarget=r,w0(s,t,void 0,e),e.currentTarget=null}function rf(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var s=e[r],a=s.event;s=s.listeners;e:{var i=void 0;if(t)for(var o=s.length-1;0<=o;o--){var l=s[o],c=l.instance,u=l.currentTarget;if(l=l.listener,c!==i&&a.isPropagationStopped())break e;Uc(a,l,u),i=c}else for(o=0;o<s.length;o++){if(l=s[o],c=l.instance,u=l.currentTarget,l=l.listener,c!==i&&a.isPropagationStopped())break e;Uc(a,l,u),i=c}}}if(Oa)throw e=So,Oa=!1,So=null,e}function Me(e,t){var r=t[zo];r===void 0&&(r=t[zo]=new Set);var s=e+"__bubble";r.has(s)||(sf(t,e,2,!1),r.add(s))}function Ui(e,t,r){var s=0;t&&(s|=4),sf(r,e,s,t)}var aa="_reactListening"+Math.random().toString(36).slice(2);function Is(e){if(!e[aa]){e[aa]=!0,uu.forEach(function(r){r!=="selectionchange"&&(Nh.has(r)||Ui(r,!1,e),Ui(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[aa]||(t[aa]=!0,Ui("selectionchange",!1,t))}}function sf(e,t,r,s){switch(Bu(t)){case 1:var a=D0;break;case 4:a=F0;break;default:a=wl}r=a.bind(null,t,r,e),a=void 0,!ko||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),s?a!==void 0?e.addEventListener(t,r,{capture:!0,passive:a}):e.addEventListener(t,r,!0):a!==void 0?e.addEventListener(t,r,{passive:a}):e.addEventListener(t,r,!1)}function qi(e,t,r,s,a){var i=s;if(!(t&1)&&!(t&2)&&s!==null)e:for(;;){if(s===null)return;var o=s.tag;if(o===3||o===4){var l=s.stateNode.containerInfo;if(l===a||l.nodeType===8&&l.parentNode===a)break;if(o===4)for(o=s.return;o!==null;){var c=o.tag;if((c===3||c===4)&&(c=o.stateNode.containerInfo,c===a||c.nodeType===8&&c.parentNode===a))return;o=o.return}for(;l!==null;){if(o=Zn(l),o===null)return;if(c=o.tag,c===5||c===6){s=i=o;continue e}l=l.parentNode}}s=s.return}Eu(function(){var u=i,f=gl(r),p=[];e:{var h=nf.get(e);if(h!==void 0){var b=Nl,v=e;switch(e){case"keypress":if(Sa(r)===0)break e;case"keydown":case"keyup":b=Z0;break;case"focusin":v="focus",b=Mi;break;case"focusout":v="blur",b=Mi;break;case"beforeblur":case"afterblur":b=Mi;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":b=Rc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":b=B0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":b=nh;break;case Ju:case Zu:case ef:b=Q0;break;case tf:b=sh;break;case"scroll":b=O0;break;case"wheel":b=ih;break;case"copy":case"cut":case"paste":b=W0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":b=Lc}var j=(t&4)!==0,C=!j&&e==="scroll",y=j?h!==null?h+"Capture":null:h;j=[];for(var m=u,x;m!==null;){x=m;var E=x.stateNode;if(x.tag===5&&E!==null&&(x=E,y!==null&&(E=Es(m,y),E!=null&&j.push(As(m,E,x)))),C)break;m=m.return}0<j.length&&(h=new b(h,v,null,r,f),p.push({event:h,listeners:j}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",b=e==="mouseout"||e==="pointerout",h&&r!==jo&&(v=r.relatedTarget||r.fromElement)&&(Zn(v)||v[yn]))break e;if((b||h)&&(h=f.window===f?f:(h=f.ownerDocument)?h.defaultView||h.parentWindow:window,b?(v=r.relatedTarget||r.toElement,b=u,v=v?Zn(v):null,v!==null&&(C=mr(v),v!==C||v.tag!==5&&v.tag!==6)&&(v=null)):(b=null,v=u),b!==v)){if(j=Rc,E="onMouseLeave",y="onMouseEnter",m="mouse",(e==="pointerout"||e==="pointerover")&&(j=Lc,E="onPointerLeave",y="onPointerEnter",m="pointer"),C=b==null?h:Nr(b),x=v==null?h:Nr(v),h=new j(E,m+"leave",b,r,f),h.target=C,h.relatedTarget=x,E=null,Zn(f)===u&&(j=new j(y,m+"enter",v,r,f),j.target=x,j.relatedTarget=C,E=j),C=E,b&&v)t:{for(j=b,y=v,m=0,x=j;x;x=gr(x))m++;for(x=0,E=y;E;E=gr(E))x++;for(;0<m-x;)j=gr(j),m--;for(;0<x-m;)y=gr(y),x--;for(;m--;){if(j===y||y!==null&&j===y.alternate)break t;j=gr(j),y=gr(y)}j=null}else j=null;b!==null&&qc(p,h,b,j,!1),v!==null&&C!==null&&qc(p,C,v,j,!0)}}e:{if(h=u?Nr(u):window,b=h.nodeName&&h.nodeName.toLowerCase(),b==="select"||b==="input"&&h.type==="file")var N=mh;else if(zc(h))if(Hu)N=gh;else{N=ph;var T=hh}else(b=h.nodeName)&&b.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(N=xh);if(N&&(N=N(e,u))){Wu(p,N,r,f);break e}T&&T(e,h,u),e==="focusout"&&(T=h._wrapperState)&&T.controlled&&h.type==="number"&&go(h,"number",h.value)}switch(T=u?Nr(u):window,e){case"focusin":(zc(T)||T.contentEditable==="true")&&(wr=T,To=u,ys=null);break;case"focusout":ys=To=wr=null;break;case"mousedown":Ro=!0;break;case"contextmenu":case"mouseup":case"dragend":Ro=!1,$c(p,r,f);break;case"selectionchange":if(bh)break;case"keydown":case"keyup":$c(p,r,f)}var S;if(Sl)e:{switch(e){case"compositionstart":var g="onCompositionStart";break e;case"compositionend":g="onCompositionEnd";break e;case"compositionupdate":g="onCompositionUpdate";break e}g=void 0}else br?Qu(e,r)&&(g="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(g="onCompositionStart");g&&(qu&&r.locale!=="ko"&&(br||g!=="onCompositionStart"?g==="onCompositionEnd"&&br&&(S=Uu()):(zn=f,jl="value"in zn?zn.value:zn.textContent,br=!0)),T=Qa(u,g),0<T.length&&(g=new _c(g,e,null,r,f),p.push({event:g,listeners:T}),S?g.data=S:(S=Yu(r),S!==null&&(g.data=S)))),(S=lh?ch(e,r):dh(e,r))&&(u=Qa(u,"onBeforeInput"),0<u.length&&(f=new _c("onBeforeInput","beforeinput",null,r,f),p.push({event:f,listeners:u}),f.data=S))}rf(p,t)})}function As(e,t,r){return{instance:e,listener:t,currentTarget:r}}function Qa(e,t){for(var r=t+"Capture",s=[];e!==null;){var a=e,i=a.stateNode;a.tag===5&&i!==null&&(a=i,i=Es(e,r),i!=null&&s.unshift(As(e,i,a)),i=Es(e,t),i!=null&&s.push(As(e,i,a))),e=e.return}return s}function gr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function qc(e,t,r,s,a){for(var i=t._reactName,o=[];r!==null&&r!==s;){var l=r,c=l.alternate,u=l.stateNode;if(c!==null&&c===s)break;l.tag===5&&u!==null&&(l=u,a?(c=Es(r,i),c!=null&&o.unshift(As(r,c,l))):a||(c=Es(r,i),c!=null&&o.push(As(r,c,l)))),r=r.return}o.length!==0&&e.push({event:t,listeners:o})}var kh=/\r\n?/g,Sh=/\u0000|\uFFFD/g;function Qc(e){return(typeof e=="string"?e:""+e).replace(kh,`
`).replace(Sh,"")}function ia(e,t,r){if(t=Qc(t),Qc(e)!==t&&r)throw Error(V(425))}function Ya(){}var _o=null,Lo=null;function Io(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ao=typeof setTimeout=="function"?setTimeout:void 0,Ch=typeof clearTimeout=="function"?clearTimeout:void 0,Yc=typeof Promise=="function"?Promise:void 0,Eh=typeof queueMicrotask=="function"?queueMicrotask:typeof Yc<"u"?function(e){return Yc.resolve(null).then(e).catch(Ph)}:Ao;function Ph(e){setTimeout(function(){throw e})}function Qi(e,t){var r=t,s=0;do{var a=r.nextSibling;if(e.removeChild(r),a&&a.nodeType===8)if(r=a.data,r==="/$"){if(s===0){e.removeChild(a),Rs(t);return}s--}else r!=="$"&&r!=="$?"&&r!=="$!"||s++;r=a}while(r);Rs(t)}function $n(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Wc(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var Hr=Math.random().toString(36).slice(2),an="__reactFiber$"+Hr,zs="__reactProps$"+Hr,yn="__reactContainer$"+Hr,zo="__reactEvents$"+Hr,Th="__reactListeners$"+Hr,Rh="__reactHandles$"+Hr;function Zn(e){var t=e[an];if(t)return t;for(var r=e.parentNode;r;){if(t=r[yn]||r[an]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=Wc(e);e!==null;){if(r=e[an])return r;e=Wc(e)}return t}e=r,r=e.parentNode}return null}function Ws(e){return e=e[an]||e[yn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Nr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(V(33))}function hi(e){return e[zs]||null}var Mo=[],kr=-1;function Gn(e){return{current:e}}function Oe(e){0>kr||(e.current=Mo[kr],Mo[kr]=null,kr--)}function Ae(e,t){kr++,Mo[kr]=e.current,e.current=t}var Wn={},mt=Gn(Wn),kt=Gn(!1),or=Wn;function Fr(e,t){var r=e.type.contextTypes;if(!r)return Wn;var s=e.stateNode;if(s&&s.__reactInternalMemoizedUnmaskedChildContext===t)return s.__reactInternalMemoizedMaskedChildContext;var a={},i;for(i in r)a[i]=t[i];return s&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=a),a}function St(e){return e=e.childContextTypes,e!=null}function Wa(){Oe(kt),Oe(mt)}function Hc(e,t,r){if(mt.current!==Wn)throw Error(V(168));Ae(mt,t),Ae(kt,r)}function af(e,t,r){var s=e.stateNode;if(t=t.childContextTypes,typeof s.getChildContext!="function")return r;s=s.getChildContext();for(var a in s)if(!(a in t))throw Error(V(108,h0(e)||"Unknown",a));return Ye({},r,s)}function Ha(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Wn,or=mt.current,Ae(mt,e),Ae(kt,kt.current),!0}function Gc(e,t,r){var s=e.stateNode;if(!s)throw Error(V(169));r?(e=af(e,t,or),s.__reactInternalMemoizedMergedChildContext=e,Oe(kt),Oe(mt),Ae(mt,e)):Oe(kt),Ae(kt,r)}var mn=null,pi=!1,Yi=!1;function of(e){mn===null?mn=[e]:mn.push(e)}function _h(e){pi=!0,of(e)}function Vn(){if(!Yi&&mn!==null){Yi=!0;var e=0,t=Re;try{var r=mn;for(Re=1;e<r.length;e++){var s=r[e];do s=s(!0);while(s!==null)}mn=null,pi=!1}catch(a){throw mn!==null&&(mn=mn.slice(e+1)),_u(vl,Vn),a}finally{Re=t,Yi=!1}}return null}var Sr=[],Cr=0,Ga=null,Va=0,zt=[],Mt=0,lr=null,hn=1,pn="";function Kn(e,t){Sr[Cr++]=Va,Sr[Cr++]=Ga,Ga=e,Va=t}function lf(e,t,r){zt[Mt++]=hn,zt[Mt++]=pn,zt[Mt++]=lr,lr=e;var s=hn;e=pn;var a=32-Vt(s)-1;s&=~(1<<a),r+=1;var i=32-Vt(t)+a;if(30<i){var o=a-a%5;i=(s&(1<<o)-1).toString(32),s>>=o,a-=o,hn=1<<32-Vt(t)+a|r<<a|s,pn=i+e}else hn=1<<i|r<<a|s,pn=e}function El(e){e.return!==null&&(Kn(e,1),lf(e,1,0))}function Pl(e){for(;e===Ga;)Ga=Sr[--Cr],Sr[Cr]=null,Va=Sr[--Cr],Sr[Cr]=null;for(;e===lr;)lr=zt[--Mt],zt[Mt]=null,pn=zt[--Mt],zt[Mt]=null,hn=zt[--Mt],zt[Mt]=null}var Rt=null,Tt=null,Be=!1,Gt=null;function cf(e,t){var r=Dt(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function Vc(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Rt=e,Tt=$n(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Rt=e,Tt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=lr!==null?{id:hn,overflow:pn}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=Dt(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,Rt=e,Tt=null,!0):!1;default:return!1}}function Do(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Fo(e){if(Be){var t=Tt;if(t){var r=t;if(!Vc(e,t)){if(Do(e))throw Error(V(418));t=$n(r.nextSibling);var s=Rt;t&&Vc(e,t)?cf(s,r):(e.flags=e.flags&-4097|2,Be=!1,Rt=e)}}else{if(Do(e))throw Error(V(418));e.flags=e.flags&-4097|2,Be=!1,Rt=e}}}function Xc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Rt=e}function oa(e){if(e!==Rt)return!1;if(!Be)return Xc(e),Be=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Io(e.type,e.memoizedProps)),t&&(t=Tt)){if(Do(e))throw df(),Error(V(418));for(;t;)cf(e,t),t=$n(t.nextSibling)}if(Xc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(V(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){Tt=$n(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}Tt=null}}else Tt=Rt?$n(e.stateNode.nextSibling):null;return!0}function df(){for(var e=Tt;e;)e=$n(e.nextSibling)}function Or(){Tt=Rt=null,Be=!1}function Tl(e){Gt===null?Gt=[e]:Gt.push(e)}var Lh=Nn.ReactCurrentBatchConfig;function ns(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(V(309));var s=r.stateNode}if(!s)throw Error(V(147,e));var a=s,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(o){var l=a.refs;o===null?delete l[i]:l[i]=o},t._stringRef=i,t)}if(typeof e!="string")throw Error(V(284));if(!r._owner)throw Error(V(290,e))}return e}function la(e,t){throw e=Object.prototype.toString.call(t),Error(V(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Kc(e){var t=e._init;return t(e._payload)}function uf(e){function t(y,m){if(e){var x=y.deletions;x===null?(y.deletions=[m],y.flags|=16):x.push(m)}}function r(y,m){if(!e)return null;for(;m!==null;)t(y,m),m=m.sibling;return null}function s(y,m){for(y=new Map;m!==null;)m.key!==null?y.set(m.key,m):y.set(m.index,m),m=m.sibling;return y}function a(y,m){return y=Qn(y,m),y.index=0,y.sibling=null,y}function i(y,m,x){return y.index=x,e?(x=y.alternate,x!==null?(x=x.index,x<m?(y.flags|=2,m):x):(y.flags|=2,m)):(y.flags|=1048576,m)}function o(y){return e&&y.alternate===null&&(y.flags|=2),y}function l(y,m,x,E){return m===null||m.tag!==6?(m=Ji(x,y.mode,E),m.return=y,m):(m=a(m,x),m.return=y,m)}function c(y,m,x,E){var N=x.type;return N===yr?f(y,m,x.props.children,E,x.key):m!==null&&(m.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===Rn&&Kc(N)===m.type)?(E=a(m,x.props),E.ref=ns(y,m,x),E.return=y,E):(E=La(x.type,x.key,x.props,null,y.mode,E),E.ref=ns(y,m,x),E.return=y,E)}function u(y,m,x,E){return m===null||m.tag!==4||m.stateNode.containerInfo!==x.containerInfo||m.stateNode.implementation!==x.implementation?(m=Zi(x,y.mode,E),m.return=y,m):(m=a(m,x.children||[]),m.return=y,m)}function f(y,m,x,E,N){return m===null||m.tag!==7?(m=ar(x,y.mode,E,N),m.return=y,m):(m=a(m,x),m.return=y,m)}function p(y,m,x){if(typeof m=="string"&&m!==""||typeof m=="number")return m=Ji(""+m,y.mode,x),m.return=y,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Ks:return x=La(m.type,m.key,m.props,null,y.mode,x),x.ref=ns(y,null,m),x.return=y,x;case vr:return m=Zi(m,y.mode,x),m.return=y,m;case Rn:var E=m._init;return p(y,E(m._payload),x)}if(fs(m)||Kr(m))return m=ar(m,y.mode,x,null),m.return=y,m;la(y,m)}return null}function h(y,m,x,E){var N=m!==null?m.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return N!==null?null:l(y,m,""+x,E);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Ks:return x.key===N?c(y,m,x,E):null;case vr:return x.key===N?u(y,m,x,E):null;case Rn:return N=x._init,h(y,m,N(x._payload),E)}if(fs(x)||Kr(x))return N!==null?null:f(y,m,x,E,null);la(y,x)}return null}function b(y,m,x,E,N){if(typeof E=="string"&&E!==""||typeof E=="number")return y=y.get(x)||null,l(m,y,""+E,N);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case Ks:return y=y.get(E.key===null?x:E.key)||null,c(m,y,E,N);case vr:return y=y.get(E.key===null?x:E.key)||null,u(m,y,E,N);case Rn:var T=E._init;return b(y,m,x,T(E._payload),N)}if(fs(E)||Kr(E))return y=y.get(x)||null,f(m,y,E,N,null);la(m,E)}return null}function v(y,m,x,E){for(var N=null,T=null,S=m,g=m=0,w=null;S!==null&&g<x.length;g++){S.index>g?(w=S,S=null):w=S.sibling;var k=h(y,S,x[g],E);if(k===null){S===null&&(S=w);break}e&&S&&k.alternate===null&&t(y,S),m=i(k,m,g),T===null?N=k:T.sibling=k,T=k,S=w}if(g===x.length)return r(y,S),Be&&Kn(y,g),N;if(S===null){for(;g<x.length;g++)S=p(y,x[g],E),S!==null&&(m=i(S,m,g),T===null?N=S:T.sibling=S,T=S);return Be&&Kn(y,g),N}for(S=s(y,S);g<x.length;g++)w=b(S,y,g,x[g],E),w!==null&&(e&&w.alternate!==null&&S.delete(w.key===null?g:w.key),m=i(w,m,g),T===null?N=w:T.sibling=w,T=w);return e&&S.forEach(function(P){return t(y,P)}),Be&&Kn(y,g),N}function j(y,m,x,E){var N=Kr(x);if(typeof N!="function")throw Error(V(150));if(x=N.call(x),x==null)throw Error(V(151));for(var T=N=null,S=m,g=m=0,w=null,k=x.next();S!==null&&!k.done;g++,k=x.next()){S.index>g?(w=S,S=null):w=S.sibling;var P=h(y,S,k.value,E);if(P===null){S===null&&(S=w);break}e&&S&&P.alternate===null&&t(y,S),m=i(P,m,g),T===null?N=P:T.sibling=P,T=P,S=w}if(k.done)return r(y,S),Be&&Kn(y,g),N;if(S===null){for(;!k.done;g++,k=x.next())k=p(y,k.value,E),k!==null&&(m=i(k,m,g),T===null?N=k:T.sibling=k,T=k);return Be&&Kn(y,g),N}for(S=s(y,S);!k.done;g++,k=x.next())k=b(S,y,g,k.value,E),k!==null&&(e&&k.alternate!==null&&S.delete(k.key===null?g:k.key),m=i(k,m,g),T===null?N=k:T.sibling=k,T=k);return e&&S.forEach(function(F){return t(y,F)}),Be&&Kn(y,g),N}function C(y,m,x,E){if(typeof x=="object"&&x!==null&&x.type===yr&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case Ks:e:{for(var N=x.key,T=m;T!==null;){if(T.key===N){if(N=x.type,N===yr){if(T.tag===7){r(y,T.sibling),m=a(T,x.props.children),m.return=y,y=m;break e}}else if(T.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===Rn&&Kc(N)===T.type){r(y,T.sibling),m=a(T,x.props),m.ref=ns(y,T,x),m.return=y,y=m;break e}r(y,T);break}else t(y,T);T=T.sibling}x.type===yr?(m=ar(x.props.children,y.mode,E,x.key),m.return=y,y=m):(E=La(x.type,x.key,x.props,null,y.mode,E),E.ref=ns(y,m,x),E.return=y,y=E)}return o(y);case vr:e:{for(T=x.key;m!==null;){if(m.key===T)if(m.tag===4&&m.stateNode.containerInfo===x.containerInfo&&m.stateNode.implementation===x.implementation){r(y,m.sibling),m=a(m,x.children||[]),m.return=y,y=m;break e}else{r(y,m);break}else t(y,m);m=m.sibling}m=Zi(x,y.mode,E),m.return=y,y=m}return o(y);case Rn:return T=x._init,C(y,m,T(x._payload),E)}if(fs(x))return v(y,m,x,E);if(Kr(x))return j(y,m,x,E);la(y,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,m!==null&&m.tag===6?(r(y,m.sibling),m=a(m,x),m.return=y,y=m):(r(y,m),m=Ji(x,y.mode,E),m.return=y,y=m),o(y)):r(y,m)}return C}var $r=uf(!0),ff=uf(!1),Xa=Gn(null),Ka=null,Er=null,Rl=null;function _l(){Rl=Er=Ka=null}function Ll(e){var t=Xa.current;Oe(Xa),e._currentValue=t}function Oo(e,t,r){for(;e!==null;){var s=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,s!==null&&(s.childLanes|=t)):s!==null&&(s.childLanes&t)!==t&&(s.childLanes|=t),e===r)break;e=e.return}}function Ar(e,t){Ka=e,Rl=Er=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Nt=!0),e.firstContext=null)}function $t(e){var t=e._currentValue;if(Rl!==e)if(e={context:e,memoizedValue:t,next:null},Er===null){if(Ka===null)throw Error(V(308));Er=e,Ka.dependencies={lanes:0,firstContext:e}}else Er=Er.next=e;return t}var er=null;function Il(e){er===null?er=[e]:er.push(e)}function mf(e,t,r,s){var a=t.interleaved;return a===null?(r.next=r,Il(t)):(r.next=a.next,a.next=r),t.interleaved=r,bn(e,s)}function bn(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}var _n=!1;function Al(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function hf(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function xn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Bn(e,t,r){var s=e.updateQueue;if(s===null)return null;if(s=s.shared,Se&2){var a=s.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),s.pending=t,bn(e,r)}return a=s.interleaved,a===null?(t.next=t,Il(s)):(t.next=a.next,a.next=t),s.interleaved=t,bn(e,r)}function Ca(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var s=t.lanes;s&=e.pendingLanes,r|=s,t.lanes=r,yl(e,r)}}function Jc(e,t){var r=e.updateQueue,s=e.alternate;if(s!==null&&(s=s.updateQueue,r===s)){var a=null,i=null;if(r=r.firstBaseUpdate,r!==null){do{var o={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};i===null?a=i=o:i=i.next=o,r=r.next}while(r!==null);i===null?a=i=t:i=i.next=t}else a=i=t;r={baseState:s.baseState,firstBaseUpdate:a,lastBaseUpdate:i,shared:s.shared,effects:s.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function Ja(e,t,r,s){var a=e.updateQueue;_n=!1;var i=a.firstBaseUpdate,o=a.lastBaseUpdate,l=a.shared.pending;if(l!==null){a.shared.pending=null;var c=l,u=c.next;c.next=null,o===null?i=u:o.next=u,o=c;var f=e.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==o&&(l===null?f.firstBaseUpdate=u:l.next=u,f.lastBaseUpdate=c))}if(i!==null){var p=a.baseState;o=0,f=u=c=null,l=i;do{var h=l.lane,b=l.eventTime;if((s&h)===h){f!==null&&(f=f.next={eventTime:b,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var v=e,j=l;switch(h=t,b=r,j.tag){case 1:if(v=j.payload,typeof v=="function"){p=v.call(b,p,h);break e}p=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=j.payload,h=typeof v=="function"?v.call(b,p,h):v,h==null)break e;p=Ye({},p,h);break e;case 2:_n=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,h=a.effects,h===null?a.effects=[l]:h.push(l))}else b={eventTime:b,lane:h,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(u=f=b,c=p):f=f.next=b,o|=h;if(l=l.next,l===null){if(l=a.shared.pending,l===null)break;h=l,l=h.next,h.next=null,a.lastBaseUpdate=h,a.shared.pending=null}}while(1);if(f===null&&(c=p),a.baseState=c,a.firstBaseUpdate=u,a.lastBaseUpdate=f,t=a.shared.interleaved,t!==null){a=t;do o|=a.lane,a=a.next;while(a!==t)}else i===null&&(a.shared.lanes=0);dr|=o,e.lanes=o,e.memoizedState=p}}function Zc(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var s=e[t],a=s.callback;if(a!==null){if(s.callback=null,s=r,typeof a!="function")throw Error(V(191,a));a.call(s)}}}var Hs={},ln=Gn(Hs),Ms=Gn(Hs),Ds=Gn(Hs);function tr(e){if(e===Hs)throw Error(V(174));return e}function zl(e,t){switch(Ae(Ds,t),Ae(Ms,e),Ae(ln,Hs),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:yo(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=yo(t,e)}Oe(ln),Ae(ln,t)}function Br(){Oe(ln),Oe(Ms),Oe(Ds)}function pf(e){tr(Ds.current);var t=tr(ln.current),r=yo(t,e.type);t!==r&&(Ae(Ms,e),Ae(ln,r))}function Ml(e){Ms.current===e&&(Oe(ln),Oe(Ms))}var qe=Gn(0);function Za(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Wi=[];function Dl(){for(var e=0;e<Wi.length;e++)Wi[e]._workInProgressVersionPrimary=null;Wi.length=0}var Ea=Nn.ReactCurrentDispatcher,Hi=Nn.ReactCurrentBatchConfig,cr=0,Qe=null,et=null,rt=null,ei=!1,bs=!1,Fs=0,Ih=0;function ct(){throw Error(V(321))}function Fl(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!Kt(e[r],t[r]))return!1;return!0}function Ol(e,t,r,s,a,i){if(cr=i,Qe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ea.current=e===null||e.memoizedState===null?Dh:Fh,e=r(s,a),bs){i=0;do{if(bs=!1,Fs=0,25<=i)throw Error(V(301));i+=1,rt=et=null,t.updateQueue=null,Ea.current=Oh,e=r(s,a)}while(bs)}if(Ea.current=ti,t=et!==null&&et.next!==null,cr=0,rt=et=Qe=null,ei=!1,t)throw Error(V(300));return e}function $l(){var e=Fs!==0;return Fs=0,e}function rn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return rt===null?Qe.memoizedState=rt=e:rt=rt.next=e,rt}function Bt(){if(et===null){var e=Qe.alternate;e=e!==null?e.memoizedState:null}else e=et.next;var t=rt===null?Qe.memoizedState:rt.next;if(t!==null)rt=t,et=e;else{if(e===null)throw Error(V(310));et=e,e={memoizedState:et.memoizedState,baseState:et.baseState,baseQueue:et.baseQueue,queue:et.queue,next:null},rt===null?Qe.memoizedState=rt=e:rt=rt.next=e}return rt}function Os(e,t){return typeof t=="function"?t(e):t}function Gi(e){var t=Bt(),r=t.queue;if(r===null)throw Error(V(311));r.lastRenderedReducer=e;var s=et,a=s.baseQueue,i=r.pending;if(i!==null){if(a!==null){var o=a.next;a.next=i.next,i.next=o}s.baseQueue=a=i,r.pending=null}if(a!==null){i=a.next,s=s.baseState;var l=o=null,c=null,u=i;do{var f=u.lane;if((cr&f)===f)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),s=u.hasEagerState?u.eagerState:e(s,u.action);else{var p={lane:f,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(l=c=p,o=s):c=c.next=p,Qe.lanes|=f,dr|=f}u=u.next}while(u!==null&&u!==i);c===null?o=s:c.next=l,Kt(s,t.memoizedState)||(Nt=!0),t.memoizedState=s,t.baseState=o,t.baseQueue=c,r.lastRenderedState=s}if(e=r.interleaved,e!==null){a=e;do i=a.lane,Qe.lanes|=i,dr|=i,a=a.next;while(a!==e)}else a===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function Vi(e){var t=Bt(),r=t.queue;if(r===null)throw Error(V(311));r.lastRenderedReducer=e;var s=r.dispatch,a=r.pending,i=t.memoizedState;if(a!==null){r.pending=null;var o=a=a.next;do i=e(i,o.action),o=o.next;while(o!==a);Kt(i,t.memoizedState)||(Nt=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),r.lastRenderedState=i}return[i,s]}function xf(){}function gf(e,t){var r=Qe,s=Bt(),a=t(),i=!Kt(s.memoizedState,a);if(i&&(s.memoizedState=a,Nt=!0),s=s.queue,Bl(bf.bind(null,r,s,e),[e]),s.getSnapshot!==t||i||rt!==null&&rt.memoizedState.tag&1){if(r.flags|=2048,$s(9,yf.bind(null,r,s,a,t),void 0,null),st===null)throw Error(V(349));cr&30||vf(r,t,a)}return a}function vf(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=Qe.updateQueue,t===null?(t={lastEffect:null,stores:null},Qe.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function yf(e,t,r,s){t.value=r,t.getSnapshot=s,wf(t)&&jf(e)}function bf(e,t,r){return r(function(){wf(t)&&jf(e)})}function wf(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!Kt(e,r)}catch{return!0}}function jf(e){var t=bn(e,1);t!==null&&Xt(t,e,1,-1)}function ed(e){var t=rn();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Os,lastRenderedState:e},t.queue=e,e=e.dispatch=Mh.bind(null,Qe,e),[t.memoizedState,e]}function $s(e,t,r,s){return e={tag:e,create:t,destroy:r,deps:s,next:null},t=Qe.updateQueue,t===null?(t={lastEffect:null,stores:null},Qe.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(s=r.next,r.next=e,e.next=s,t.lastEffect=e)),e}function Nf(){return Bt().memoizedState}function Pa(e,t,r,s){var a=rn();Qe.flags|=e,a.memoizedState=$s(1|t,r,void 0,s===void 0?null:s)}function xi(e,t,r,s){var a=Bt();s=s===void 0?null:s;var i=void 0;if(et!==null){var o=et.memoizedState;if(i=o.destroy,s!==null&&Fl(s,o.deps)){a.memoizedState=$s(t,r,i,s);return}}Qe.flags|=e,a.memoizedState=$s(1|t,r,i,s)}function td(e,t){return Pa(8390656,8,e,t)}function Bl(e,t){return xi(2048,8,e,t)}function kf(e,t){return xi(4,2,e,t)}function Sf(e,t){return xi(4,4,e,t)}function Cf(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Ef(e,t,r){return r=r!=null?r.concat([e]):null,xi(4,4,Cf.bind(null,t,e),r)}function Ul(){}function Pf(e,t){var r=Bt();t=t===void 0?null:t;var s=r.memoizedState;return s!==null&&t!==null&&Fl(t,s[1])?s[0]:(r.memoizedState=[e,t],e)}function Tf(e,t){var r=Bt();t=t===void 0?null:t;var s=r.memoizedState;return s!==null&&t!==null&&Fl(t,s[1])?s[0]:(e=e(),r.memoizedState=[e,t],e)}function Rf(e,t,r){return cr&21?(Kt(r,t)||(r=Au(),Qe.lanes|=r,dr|=r,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Nt=!0),e.memoizedState=r)}function Ah(e,t){var r=Re;Re=r!==0&&4>r?r:4,e(!0);var s=Hi.transition;Hi.transition={};try{e(!1),t()}finally{Re=r,Hi.transition=s}}function _f(){return Bt().memoizedState}function zh(e,t,r){var s=qn(e);if(r={lane:s,action:r,hasEagerState:!1,eagerState:null,next:null},Lf(e))If(t,r);else if(r=mf(e,t,r,s),r!==null){var a=yt();Xt(r,e,s,a),Af(r,t,s)}}function Mh(e,t,r){var s=qn(e),a={lane:s,action:r,hasEagerState:!1,eagerState:null,next:null};if(Lf(e))If(t,a);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var o=t.lastRenderedState,l=i(o,r);if(a.hasEagerState=!0,a.eagerState=l,Kt(l,o)){var c=t.interleaved;c===null?(a.next=a,Il(t)):(a.next=c.next,c.next=a),t.interleaved=a;return}}catch{}finally{}r=mf(e,t,a,s),r!==null&&(a=yt(),Xt(r,e,s,a),Af(r,t,s))}}function Lf(e){var t=e.alternate;return e===Qe||t!==null&&t===Qe}function If(e,t){bs=ei=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function Af(e,t,r){if(r&4194240){var s=t.lanes;s&=e.pendingLanes,r|=s,t.lanes=r,yl(e,r)}}var ti={readContext:$t,useCallback:ct,useContext:ct,useEffect:ct,useImperativeHandle:ct,useInsertionEffect:ct,useLayoutEffect:ct,useMemo:ct,useReducer:ct,useRef:ct,useState:ct,useDebugValue:ct,useDeferredValue:ct,useTransition:ct,useMutableSource:ct,useSyncExternalStore:ct,useId:ct,unstable_isNewReconciler:!1},Dh={readContext:$t,useCallback:function(e,t){return rn().memoizedState=[e,t===void 0?null:t],e},useContext:$t,useEffect:td,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,Pa(4194308,4,Cf.bind(null,t,e),r)},useLayoutEffect:function(e,t){return Pa(4194308,4,e,t)},useInsertionEffect:function(e,t){return Pa(4,2,e,t)},useMemo:function(e,t){var r=rn();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var s=rn();return t=r!==void 0?r(t):t,s.memoizedState=s.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},s.queue=e,e=e.dispatch=zh.bind(null,Qe,e),[s.memoizedState,e]},useRef:function(e){var t=rn();return e={current:e},t.memoizedState=e},useState:ed,useDebugValue:Ul,useDeferredValue:function(e){return rn().memoizedState=e},useTransition:function(){var e=ed(!1),t=e[0];return e=Ah.bind(null,e[1]),rn().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var s=Qe,a=rn();if(Be){if(r===void 0)throw Error(V(407));r=r()}else{if(r=t(),st===null)throw Error(V(349));cr&30||vf(s,t,r)}a.memoizedState=r;var i={value:r,getSnapshot:t};return a.queue=i,td(bf.bind(null,s,i,e),[e]),s.flags|=2048,$s(9,yf.bind(null,s,i,r,t),void 0,null),r},useId:function(){var e=rn(),t=st.identifierPrefix;if(Be){var r=pn,s=hn;r=(s&~(1<<32-Vt(s)-1)).toString(32)+r,t=":"+t+"R"+r,r=Fs++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=Ih++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Fh={readContext:$t,useCallback:Pf,useContext:$t,useEffect:Bl,useImperativeHandle:Ef,useInsertionEffect:kf,useLayoutEffect:Sf,useMemo:Tf,useReducer:Gi,useRef:Nf,useState:function(){return Gi(Os)},useDebugValue:Ul,useDeferredValue:function(e){var t=Bt();return Rf(t,et.memoizedState,e)},useTransition:function(){var e=Gi(Os)[0],t=Bt().memoizedState;return[e,t]},useMutableSource:xf,useSyncExternalStore:gf,useId:_f,unstable_isNewReconciler:!1},Oh={readContext:$t,useCallback:Pf,useContext:$t,useEffect:Bl,useImperativeHandle:Ef,useInsertionEffect:kf,useLayoutEffect:Sf,useMemo:Tf,useReducer:Vi,useRef:Nf,useState:function(){return Vi(Os)},useDebugValue:Ul,useDeferredValue:function(e){var t=Bt();return et===null?t.memoizedState=e:Rf(t,et.memoizedState,e)},useTransition:function(){var e=Vi(Os)[0],t=Bt().memoizedState;return[e,t]},useMutableSource:xf,useSyncExternalStore:gf,useId:_f,unstable_isNewReconciler:!1};function Wt(e,t){if(e&&e.defaultProps){t=Ye({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}function $o(e,t,r,s){t=e.memoizedState,r=r(s,t),r=r==null?t:Ye({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var gi={isMounted:function(e){return(e=e._reactInternals)?mr(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var s=yt(),a=qn(e),i=xn(s,a);i.payload=t,r!=null&&(i.callback=r),t=Bn(e,i,a),t!==null&&(Xt(t,e,a,s),Ca(t,e,a))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var s=yt(),a=qn(e),i=xn(s,a);i.tag=1,i.payload=t,r!=null&&(i.callback=r),t=Bn(e,i,a),t!==null&&(Xt(t,e,a,s),Ca(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=yt(),s=qn(e),a=xn(r,s);a.tag=2,t!=null&&(a.callback=t),t=Bn(e,a,s),t!==null&&(Xt(t,e,s,r),Ca(t,e,s))}};function nd(e,t,r,s,a,i,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(s,i,o):t.prototype&&t.prototype.isPureReactComponent?!Ls(r,s)||!Ls(a,i):!0}function zf(e,t,r){var s=!1,a=Wn,i=t.contextType;return typeof i=="object"&&i!==null?i=$t(i):(a=St(t)?or:mt.current,s=t.contextTypes,i=(s=s!=null)?Fr(e,a):Wn),t=new t(r,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=gi,e.stateNode=t,t._reactInternals=e,s&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=i),t}function rd(e,t,r,s){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,s),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,s),t.state!==e&&gi.enqueueReplaceState(t,t.state,null)}function Bo(e,t,r,s){var a=e.stateNode;a.props=r,a.state=e.memoizedState,a.refs={},Al(e);var i=t.contextType;typeof i=="object"&&i!==null?a.context=$t(i):(i=St(t)?or:mt.current,a.context=Fr(e,i)),a.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&($o(e,t,i,r),a.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(t=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),t!==a.state&&gi.enqueueReplaceState(a,a.state,null),Ja(e,r,a,s),a.state=e.memoizedState),typeof a.componentDidMount=="function"&&(e.flags|=4194308)}function Ur(e,t){try{var r="",s=t;do r+=m0(s),s=s.return;while(s);var a=r}catch(i){a=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:a,digest:null}}function Xi(e,t,r){return{value:e,source:null,stack:r??null,digest:t??null}}function Uo(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var $h=typeof WeakMap=="function"?WeakMap:Map;function Mf(e,t,r){r=xn(-1,r),r.tag=3,r.payload={element:null};var s=t.value;return r.callback=function(){ri||(ri=!0,Jo=s),Uo(e,t)},r}function Df(e,t,r){r=xn(-1,r),r.tag=3;var s=e.type.getDerivedStateFromError;if(typeof s=="function"){var a=t.value;r.payload=function(){return s(a)},r.callback=function(){Uo(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(r.callback=function(){Uo(e,t),typeof s!="function"&&(Un===null?Un=new Set([this]):Un.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),r}function sd(e,t,r){var s=e.pingCache;if(s===null){s=e.pingCache=new $h;var a=new Set;s.set(t,a)}else a=s.get(t),a===void 0&&(a=new Set,s.set(t,a));a.has(r)||(a.add(r),e=ep.bind(null,e,t,r),t.then(e,e))}function ad(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function id(e,t,r,s,a){return e.mode&1?(e.flags|=65536,e.lanes=a,e):(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=xn(-1,1),t.tag=2,Bn(r,t,1))),r.lanes|=1),e)}var Bh=Nn.ReactCurrentOwner,Nt=!1;function vt(e,t,r,s){t.child=e===null?ff(t,null,r,s):$r(t,e.child,r,s)}function od(e,t,r,s,a){r=r.render;var i=t.ref;return Ar(t,a),s=Ol(e,t,r,s,i,a),r=$l(),e!==null&&!Nt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,wn(e,t,a)):(Be&&r&&El(t),t.flags|=1,vt(e,t,s,a),t.child)}function ld(e,t,r,s,a){if(e===null){var i=r.type;return typeof i=="function"&&!Xl(i)&&i.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=i,Ff(e,t,i,s,a)):(e=La(r.type,null,s,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&a)){var o=i.memoizedProps;if(r=r.compare,r=r!==null?r:Ls,r(o,s)&&e.ref===t.ref)return wn(e,t,a)}return t.flags|=1,e=Qn(i,s),e.ref=t.ref,e.return=t,t.child=e}function Ff(e,t,r,s,a){if(e!==null){var i=e.memoizedProps;if(Ls(i,s)&&e.ref===t.ref)if(Nt=!1,t.pendingProps=s=i,(e.lanes&a)!==0)e.flags&131072&&(Nt=!0);else return t.lanes=e.lanes,wn(e,t,a)}return qo(e,t,r,s,a)}function Of(e,t,r){var s=t.pendingProps,a=s.children,i=e!==null?e.memoizedState:null;if(s.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ae(Tr,Pt),Pt|=r;else{if(!(r&1073741824))return e=i!==null?i.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Ae(Tr,Pt),Pt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},s=i!==null?i.baseLanes:r,Ae(Tr,Pt),Pt|=s}else i!==null?(s=i.baseLanes|r,t.memoizedState=null):s=r,Ae(Tr,Pt),Pt|=s;return vt(e,t,a,r),t.child}function $f(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function qo(e,t,r,s,a){var i=St(r)?or:mt.current;return i=Fr(t,i),Ar(t,a),r=Ol(e,t,r,s,i,a),s=$l(),e!==null&&!Nt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,wn(e,t,a)):(Be&&s&&El(t),t.flags|=1,vt(e,t,r,a),t.child)}function cd(e,t,r,s,a){if(St(r)){var i=!0;Ha(t)}else i=!1;if(Ar(t,a),t.stateNode===null)Ta(e,t),zf(t,r,s),Bo(t,r,s,a),s=!0;else if(e===null){var o=t.stateNode,l=t.memoizedProps;o.props=l;var c=o.context,u=r.contextType;typeof u=="object"&&u!==null?u=$t(u):(u=St(r)?or:mt.current,u=Fr(t,u));var f=r.getDerivedStateFromProps,p=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==s||c!==u)&&rd(t,o,s,u),_n=!1;var h=t.memoizedState;o.state=h,Ja(t,s,o,a),c=t.memoizedState,l!==s||h!==c||kt.current||_n?(typeof f=="function"&&($o(t,r,f,s),c=t.memoizedState),(l=_n||nd(t,r,l,s,h,c,u))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=s,t.memoizedState=c),o.props=s,o.state=c,o.context=u,s=l):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),s=!1)}else{o=t.stateNode,hf(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:Wt(t.type,l),o.props=u,p=t.pendingProps,h=o.context,c=r.contextType,typeof c=="object"&&c!==null?c=$t(c):(c=St(r)?or:mt.current,c=Fr(t,c));var b=r.getDerivedStateFromProps;(f=typeof b=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==p||h!==c)&&rd(t,o,s,c),_n=!1,h=t.memoizedState,o.state=h,Ja(t,s,o,a);var v=t.memoizedState;l!==p||h!==v||kt.current||_n?(typeof b=="function"&&($o(t,r,b,s),v=t.memoizedState),(u=_n||nd(t,r,u,s,h,v,c)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(s,v,c),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(s,v,c)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=s,t.memoizedState=v),o.props=s,o.state=v,o.context=c,s=u):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),s=!1)}return Qo(e,t,r,s,i,a)}function Qo(e,t,r,s,a,i){$f(e,t);var o=(t.flags&128)!==0;if(!s&&!o)return a&&Gc(t,r,!1),wn(e,t,i);s=t.stateNode,Bh.current=t;var l=o&&typeof r.getDerivedStateFromError!="function"?null:s.render();return t.flags|=1,e!==null&&o?(t.child=$r(t,e.child,null,i),t.child=$r(t,null,l,i)):vt(e,t,l,i),t.memoizedState=s.state,a&&Gc(t,r,!0),t.child}function Bf(e){var t=e.stateNode;t.pendingContext?Hc(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Hc(e,t.context,!1),zl(e,t.containerInfo)}function dd(e,t,r,s,a){return Or(),Tl(a),t.flags|=256,vt(e,t,r,s),t.child}var Yo={dehydrated:null,treeContext:null,retryLane:0};function Wo(e){return{baseLanes:e,cachePool:null,transitions:null}}function Uf(e,t,r){var s=t.pendingProps,a=qe.current,i=!1,o=(t.flags&128)!==0,l;if((l=o)||(l=e!==null&&e.memoizedState===null?!1:(a&2)!==0),l?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(a|=1),Ae(qe,a&1),e===null)return Fo(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=s.children,e=s.fallback,i?(s=t.mode,i=t.child,o={mode:"hidden",children:o},!(s&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=bi(o,s,0,null),e=ar(e,s,r,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Wo(r),t.memoizedState=Yo,e):ql(t,o));if(a=e.memoizedState,a!==null&&(l=a.dehydrated,l!==null))return Uh(e,t,o,s,l,a,r);if(i){i=s.fallback,o=t.mode,a=e.child,l=a.sibling;var c={mode:"hidden",children:s.children};return!(o&1)&&t.child!==a?(s=t.child,s.childLanes=0,s.pendingProps=c,t.deletions=null):(s=Qn(a,c),s.subtreeFlags=a.subtreeFlags&14680064),l!==null?i=Qn(l,i):(i=ar(i,o,r,null),i.flags|=2),i.return=t,s.return=t,s.sibling=i,t.child=s,s=i,i=t.child,o=e.child.memoizedState,o=o===null?Wo(r):{baseLanes:o.baseLanes|r,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=e.childLanes&~r,t.memoizedState=Yo,s}return i=e.child,e=i.sibling,s=Qn(i,{mode:"visible",children:s.children}),!(t.mode&1)&&(s.lanes=r),s.return=t,s.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=s,t.memoizedState=null,s}function ql(e,t){return t=bi({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ca(e,t,r,s){return s!==null&&Tl(s),$r(t,e.child,null,r),e=ql(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Uh(e,t,r,s,a,i,o){if(r)return t.flags&256?(t.flags&=-257,s=Xi(Error(V(422))),ca(e,t,o,s)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=s.fallback,a=t.mode,s=bi({mode:"visible",children:s.children},a,0,null),i=ar(i,a,o,null),i.flags|=2,s.return=t,i.return=t,s.sibling=i,t.child=s,t.mode&1&&$r(t,e.child,null,o),t.child.memoizedState=Wo(o),t.memoizedState=Yo,i);if(!(t.mode&1))return ca(e,t,o,null);if(a.data==="$!"){if(s=a.nextSibling&&a.nextSibling.dataset,s)var l=s.dgst;return s=l,i=Error(V(419)),s=Xi(i,s,void 0),ca(e,t,o,s)}if(l=(o&e.childLanes)!==0,Nt||l){if(s=st,s!==null){switch(o&-o){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=a&(s.suspendedLanes|o)?0:a,a!==0&&a!==i.retryLane&&(i.retryLane=a,bn(e,a),Xt(s,e,a,-1))}return Vl(),s=Xi(Error(V(421))),ca(e,t,o,s)}return a.data==="$?"?(t.flags|=128,t.child=e.child,t=tp.bind(null,e),a._reactRetry=t,null):(e=i.treeContext,Tt=$n(a.nextSibling),Rt=t,Be=!0,Gt=null,e!==null&&(zt[Mt++]=hn,zt[Mt++]=pn,zt[Mt++]=lr,hn=e.id,pn=e.overflow,lr=t),t=ql(t,s.children),t.flags|=4096,t)}function ud(e,t,r){e.lanes|=t;var s=e.alternate;s!==null&&(s.lanes|=t),Oo(e.return,t,r)}function Ki(e,t,r,s,a){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:s,tail:r,tailMode:a}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=s,i.tail=r,i.tailMode=a)}function qf(e,t,r){var s=t.pendingProps,a=s.revealOrder,i=s.tail;if(vt(e,t,s.children,r),s=qe.current,s&2)s=s&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ud(e,r,t);else if(e.tag===19)ud(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}s&=1}if(Ae(qe,s),!(t.mode&1))t.memoizedState=null;else switch(a){case"forwards":for(r=t.child,a=null;r!==null;)e=r.alternate,e!==null&&Za(e)===null&&(a=r),r=r.sibling;r=a,r===null?(a=t.child,t.child=null):(a=r.sibling,r.sibling=null),Ki(t,!1,a,r,i);break;case"backwards":for(r=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&Za(e)===null){t.child=a;break}e=a.sibling,a.sibling=r,r=a,a=e}Ki(t,!0,r,null,i);break;case"together":Ki(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ta(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function wn(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),dr|=t.lanes,!(r&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(V(153));if(t.child!==null){for(e=t.child,r=Qn(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=Qn(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function qh(e,t,r){switch(t.tag){case 3:Bf(t),Or();break;case 5:pf(t);break;case 1:St(t.type)&&Ha(t);break;case 4:zl(t,t.stateNode.containerInfo);break;case 10:var s=t.type._context,a=t.memoizedProps.value;Ae(Xa,s._currentValue),s._currentValue=a;break;case 13:if(s=t.memoizedState,s!==null)return s.dehydrated!==null?(Ae(qe,qe.current&1),t.flags|=128,null):r&t.child.childLanes?Uf(e,t,r):(Ae(qe,qe.current&1),e=wn(e,t,r),e!==null?e.sibling:null);Ae(qe,qe.current&1);break;case 19:if(s=(r&t.childLanes)!==0,e.flags&128){if(s)return qf(e,t,r);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),Ae(qe,qe.current),s)break;return null;case 22:case 23:return t.lanes=0,Of(e,t,r)}return wn(e,t,r)}var Qf,Ho,Yf,Wf;Qf=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}};Ho=function(){};Yf=function(e,t,r,s){var a=e.memoizedProps;if(a!==s){e=t.stateNode,tr(ln.current);var i=null;switch(r){case"input":a=po(e,a),s=po(e,s),i=[];break;case"select":a=Ye({},a,{value:void 0}),s=Ye({},s,{value:void 0}),i=[];break;case"textarea":a=vo(e,a),s=vo(e,s),i=[];break;default:typeof a.onClick!="function"&&typeof s.onClick=="function"&&(e.onclick=Ya)}bo(r,s);var o;r=null;for(u in a)if(!s.hasOwnProperty(u)&&a.hasOwnProperty(u)&&a[u]!=null)if(u==="style"){var l=a[u];for(o in l)l.hasOwnProperty(o)&&(r||(r={}),r[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Ss.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in s){var c=s[u];if(l=a!=null?a[u]:void 0,s.hasOwnProperty(u)&&c!==l&&(c!=null||l!=null))if(u==="style")if(l){for(o in l)!l.hasOwnProperty(o)||c&&c.hasOwnProperty(o)||(r||(r={}),r[o]="");for(o in c)c.hasOwnProperty(o)&&l[o]!==c[o]&&(r||(r={}),r[o]=c[o])}else r||(i||(i=[]),i.push(u,r)),r=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,l=l?l.__html:void 0,c!=null&&l!==c&&(i=i||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(i=i||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Ss.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&Me("scroll",e),i||l===c||(i=[])):(i=i||[]).push(u,c))}r&&(i=i||[]).push("style",r);var u=i;(t.updateQueue=u)&&(t.flags|=4)}};Wf=function(e,t,r,s){r!==s&&(t.flags|=4)};function rs(e,t){if(!Be)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var s=null;r!==null;)r.alternate!==null&&(s=r),r=r.sibling;s===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:s.sibling=null}}function dt(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,s=0;if(t)for(var a=e.child;a!==null;)r|=a.lanes|a.childLanes,s|=a.subtreeFlags&14680064,s|=a.flags&14680064,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)r|=a.lanes|a.childLanes,s|=a.subtreeFlags,s|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=s,e.childLanes=r,t}function Qh(e,t,r){var s=t.pendingProps;switch(Pl(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return dt(t),null;case 1:return St(t.type)&&Wa(),dt(t),null;case 3:return s=t.stateNode,Br(),Oe(kt),Oe(mt),Dl(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(e===null||e.child===null)&&(oa(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Gt!==null&&(tl(Gt),Gt=null))),Ho(e,t),dt(t),null;case 5:Ml(t);var a=tr(Ds.current);if(r=t.type,e!==null&&t.stateNode!=null)Yf(e,t,r,s,a),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!s){if(t.stateNode===null)throw Error(V(166));return dt(t),null}if(e=tr(ln.current),oa(t)){s=t.stateNode,r=t.type;var i=t.memoizedProps;switch(s[an]=t,s[zs]=i,e=(t.mode&1)!==0,r){case"dialog":Me("cancel",s),Me("close",s);break;case"iframe":case"object":case"embed":Me("load",s);break;case"video":case"audio":for(a=0;a<hs.length;a++)Me(hs[a],s);break;case"source":Me("error",s);break;case"img":case"image":case"link":Me("error",s),Me("load",s);break;case"details":Me("toggle",s);break;case"input":bc(s,i),Me("invalid",s);break;case"select":s._wrapperState={wasMultiple:!!i.multiple},Me("invalid",s);break;case"textarea":jc(s,i),Me("invalid",s)}bo(r,i),a=null;for(var o in i)if(i.hasOwnProperty(o)){var l=i[o];o==="children"?typeof l=="string"?s.textContent!==l&&(i.suppressHydrationWarning!==!0&&ia(s.textContent,l,e),a=["children",l]):typeof l=="number"&&s.textContent!==""+l&&(i.suppressHydrationWarning!==!0&&ia(s.textContent,l,e),a=["children",""+l]):Ss.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&Me("scroll",s)}switch(r){case"input":Js(s),wc(s,i,!0);break;case"textarea":Js(s),Nc(s);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(s.onclick=Ya)}s=a,t.updateQueue=s,s!==null&&(t.flags|=4)}else{o=a.nodeType===9?a:a.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=yu(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof s.is=="string"?e=o.createElement(r,{is:s.is}):(e=o.createElement(r),r==="select"&&(o=e,s.multiple?o.multiple=!0:s.size&&(o.size=s.size))):e=o.createElementNS(e,r),e[an]=t,e[zs]=s,Qf(e,t,!1,!1),t.stateNode=e;e:{switch(o=wo(r,s),r){case"dialog":Me("cancel",e),Me("close",e),a=s;break;case"iframe":case"object":case"embed":Me("load",e),a=s;break;case"video":case"audio":for(a=0;a<hs.length;a++)Me(hs[a],e);a=s;break;case"source":Me("error",e),a=s;break;case"img":case"image":case"link":Me("error",e),Me("load",e),a=s;break;case"details":Me("toggle",e),a=s;break;case"input":bc(e,s),a=po(e,s),Me("invalid",e);break;case"option":a=s;break;case"select":e._wrapperState={wasMultiple:!!s.multiple},a=Ye({},s,{value:void 0}),Me("invalid",e);break;case"textarea":jc(e,s),a=vo(e,s),Me("invalid",e);break;default:a=s}bo(r,a),l=a;for(i in l)if(l.hasOwnProperty(i)){var c=l[i];i==="style"?ju(e,c):i==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&bu(e,c)):i==="children"?typeof c=="string"?(r!=="textarea"||c!=="")&&Cs(e,c):typeof c=="number"&&Cs(e,""+c):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Ss.hasOwnProperty(i)?c!=null&&i==="onScroll"&&Me("scroll",e):c!=null&&ml(e,i,c,o))}switch(r){case"input":Js(e),wc(e,s,!1);break;case"textarea":Js(e),Nc(e);break;case"option":s.value!=null&&e.setAttribute("value",""+Yn(s.value));break;case"select":e.multiple=!!s.multiple,i=s.value,i!=null?Rr(e,!!s.multiple,i,!1):s.defaultValue!=null&&Rr(e,!!s.multiple,s.defaultValue,!0);break;default:typeof a.onClick=="function"&&(e.onclick=Ya)}switch(r){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break e;case"img":s=!0;break e;default:s=!1}}s&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return dt(t),null;case 6:if(e&&t.stateNode!=null)Wf(e,t,e.memoizedProps,s);else{if(typeof s!="string"&&t.stateNode===null)throw Error(V(166));if(r=tr(Ds.current),tr(ln.current),oa(t)){if(s=t.stateNode,r=t.memoizedProps,s[an]=t,(i=s.nodeValue!==r)&&(e=Rt,e!==null))switch(e.tag){case 3:ia(s.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ia(s.nodeValue,r,(e.mode&1)!==0)}i&&(t.flags|=4)}else s=(r.nodeType===9?r:r.ownerDocument).createTextNode(s),s[an]=t,t.stateNode=s}return dt(t),null;case 13:if(Oe(qe),s=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Be&&Tt!==null&&t.mode&1&&!(t.flags&128))df(),Or(),t.flags|=98560,i=!1;else if(i=oa(t),s!==null&&s.dehydrated!==null){if(e===null){if(!i)throw Error(V(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(V(317));i[an]=t}else Or(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;dt(t),i=!1}else Gt!==null&&(tl(Gt),Gt=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=r,t):(s=s!==null,s!==(e!==null&&e.memoizedState!==null)&&s&&(t.child.flags|=8192,t.mode&1&&(e===null||qe.current&1?tt===0&&(tt=3):Vl())),t.updateQueue!==null&&(t.flags|=4),dt(t),null);case 4:return Br(),Ho(e,t),e===null&&Is(t.stateNode.containerInfo),dt(t),null;case 10:return Ll(t.type._context),dt(t),null;case 17:return St(t.type)&&Wa(),dt(t),null;case 19:if(Oe(qe),i=t.memoizedState,i===null)return dt(t),null;if(s=(t.flags&128)!==0,o=i.rendering,o===null)if(s)rs(i,!1);else{if(tt!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=Za(e),o!==null){for(t.flags|=128,rs(i,!1),s=o.updateQueue,s!==null&&(t.updateQueue=s,t.flags|=4),t.subtreeFlags=0,s=r,r=t.child;r!==null;)i=r,e=s,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,e=o.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return Ae(qe,qe.current&1|2),t.child}e=e.sibling}i.tail!==null&&Ve()>qr&&(t.flags|=128,s=!0,rs(i,!1),t.lanes=4194304)}else{if(!s)if(e=Za(o),e!==null){if(t.flags|=128,s=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),rs(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!Be)return dt(t),null}else 2*Ve()-i.renderingStartTime>qr&&r!==1073741824&&(t.flags|=128,s=!0,rs(i,!1),t.lanes=4194304);i.isBackwards?(o.sibling=t.child,t.child=o):(r=i.last,r!==null?r.sibling=o:t.child=o,i.last=o)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=Ve(),t.sibling=null,r=qe.current,Ae(qe,s?r&1|2:r&1),t):(dt(t),null);case 22:case 23:return Gl(),s=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==s&&(t.flags|=8192),s&&t.mode&1?Pt&1073741824&&(dt(t),t.subtreeFlags&6&&(t.flags|=8192)):dt(t),null;case 24:return null;case 25:return null}throw Error(V(156,t.tag))}function Yh(e,t){switch(Pl(t),t.tag){case 1:return St(t.type)&&Wa(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Br(),Oe(kt),Oe(mt),Dl(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Ml(t),null;case 13:if(Oe(qe),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(V(340));Or()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Oe(qe),null;case 4:return Br(),null;case 10:return Ll(t.type._context),null;case 22:case 23:return Gl(),null;case 24:return null;default:return null}}var da=!1,ft=!1,Wh=typeof WeakSet=="function"?WeakSet:Set,ae=null;function Pr(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(s){He(e,t,s)}else r.current=null}function Go(e,t,r){try{r()}catch(s){He(e,t,s)}}var fd=!1;function Hh(e,t){if(_o=Ua,e=Xu(),Cl(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var s=r.getSelection&&r.getSelection();if(s&&s.rangeCount!==0){r=s.anchorNode;var a=s.anchorOffset,i=s.focusNode;s=s.focusOffset;try{r.nodeType,i.nodeType}catch{r=null;break e}var o=0,l=-1,c=-1,u=0,f=0,p=e,h=null;t:for(;;){for(var b;p!==r||a!==0&&p.nodeType!==3||(l=o+a),p!==i||s!==0&&p.nodeType!==3||(c=o+s),p.nodeType===3&&(o+=p.nodeValue.length),(b=p.firstChild)!==null;)h=p,p=b;for(;;){if(p===e)break t;if(h===r&&++u===a&&(l=o),h===i&&++f===s&&(c=o),(b=p.nextSibling)!==null)break;p=h,h=p.parentNode}p=b}r=l===-1||c===-1?null:{start:l,end:c}}else r=null}r=r||{start:0,end:0}}else r=null;for(Lo={focusedElem:e,selectionRange:r},Ua=!1,ae=t;ae!==null;)if(t=ae,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,ae=e;else for(;ae!==null;){t=ae;try{var v=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var j=v.memoizedProps,C=v.memoizedState,y=t.stateNode,m=y.getSnapshotBeforeUpdate(t.elementType===t.type?j:Wt(t.type,j),C);y.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var x=t.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(V(163))}}catch(E){He(t,t.return,E)}if(e=t.sibling,e!==null){e.return=t.return,ae=e;break}ae=t.return}return v=fd,fd=!1,v}function ws(e,t,r){var s=t.updateQueue;if(s=s!==null?s.lastEffect:null,s!==null){var a=s=s.next;do{if((a.tag&e)===e){var i=a.destroy;a.destroy=void 0,i!==void 0&&Go(t,r,i)}a=a.next}while(a!==s)}}function vi(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var s=r.create;r.destroy=s()}r=r.next}while(r!==t)}}function Vo(e){var t=e.ref;if(t!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof t=="function"?t(e):t.current=e}}function Hf(e){var t=e.alternate;t!==null&&(e.alternate=null,Hf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[an],delete t[zs],delete t[zo],delete t[Th],delete t[Rh])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Gf(e){return e.tag===5||e.tag===3||e.tag===4}function md(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Gf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Xo(e,t,r){var s=e.tag;if(s===5||s===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=Ya));else if(s!==4&&(e=e.child,e!==null))for(Xo(e,t,r),e=e.sibling;e!==null;)Xo(e,t,r),e=e.sibling}function Ko(e,t,r){var s=e.tag;if(s===5||s===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(s!==4&&(e=e.child,e!==null))for(Ko(e,t,r),e=e.sibling;e!==null;)Ko(e,t,r),e=e.sibling}var it=null,Ht=!1;function Cn(e,t,r){for(r=r.child;r!==null;)Vf(e,t,r),r=r.sibling}function Vf(e,t,r){if(on&&typeof on.onCommitFiberUnmount=="function")try{on.onCommitFiberUnmount(di,r)}catch{}switch(r.tag){case 5:ft||Pr(r,t);case 6:var s=it,a=Ht;it=null,Cn(e,t,r),it=s,Ht=a,it!==null&&(Ht?(e=it,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):it.removeChild(r.stateNode));break;case 18:it!==null&&(Ht?(e=it,r=r.stateNode,e.nodeType===8?Qi(e.parentNode,r):e.nodeType===1&&Qi(e,r),Rs(e)):Qi(it,r.stateNode));break;case 4:s=it,a=Ht,it=r.stateNode.containerInfo,Ht=!0,Cn(e,t,r),it=s,Ht=a;break;case 0:case 11:case 14:case 15:if(!ft&&(s=r.updateQueue,s!==null&&(s=s.lastEffect,s!==null))){a=s=s.next;do{var i=a,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&Go(r,t,o),a=a.next}while(a!==s)}Cn(e,t,r);break;case 1:if(!ft&&(Pr(r,t),s=r.stateNode,typeof s.componentWillUnmount=="function"))try{s.props=r.memoizedProps,s.state=r.memoizedState,s.componentWillUnmount()}catch(l){He(r,t,l)}Cn(e,t,r);break;case 21:Cn(e,t,r);break;case 22:r.mode&1?(ft=(s=ft)||r.memoizedState!==null,Cn(e,t,r),ft=s):Cn(e,t,r);break;default:Cn(e,t,r)}}function hd(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new Wh),t.forEach(function(s){var a=np.bind(null,e,s);r.has(s)||(r.add(s),s.then(a,a))})}}function Yt(e,t){var r=t.deletions;if(r!==null)for(var s=0;s<r.length;s++){var a=r[s];try{var i=e,o=t,l=o;e:for(;l!==null;){switch(l.tag){case 5:it=l.stateNode,Ht=!1;break e;case 3:it=l.stateNode.containerInfo,Ht=!0;break e;case 4:it=l.stateNode.containerInfo,Ht=!0;break e}l=l.return}if(it===null)throw Error(V(160));Vf(i,o,a),it=null,Ht=!1;var c=a.alternate;c!==null&&(c.return=null),a.return=null}catch(u){He(a,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Xf(t,e),t=t.sibling}function Xf(e,t){var r=e.alternate,s=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Yt(t,e),en(e),s&4){try{ws(3,e,e.return),vi(3,e)}catch(j){He(e,e.return,j)}try{ws(5,e,e.return)}catch(j){He(e,e.return,j)}}break;case 1:Yt(t,e),en(e),s&512&&r!==null&&Pr(r,r.return);break;case 5:if(Yt(t,e),en(e),s&512&&r!==null&&Pr(r,r.return),e.flags&32){var a=e.stateNode;try{Cs(a,"")}catch(j){He(e,e.return,j)}}if(s&4&&(a=e.stateNode,a!=null)){var i=e.memoizedProps,o=r!==null?r.memoizedProps:i,l=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{l==="input"&&i.type==="radio"&&i.name!=null&&gu(a,i),wo(l,o);var u=wo(l,i);for(o=0;o<c.length;o+=2){var f=c[o],p=c[o+1];f==="style"?ju(a,p):f==="dangerouslySetInnerHTML"?bu(a,p):f==="children"?Cs(a,p):ml(a,f,p,u)}switch(l){case"input":xo(a,i);break;case"textarea":vu(a,i);break;case"select":var h=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!i.multiple;var b=i.value;b!=null?Rr(a,!!i.multiple,b,!1):h!==!!i.multiple&&(i.defaultValue!=null?Rr(a,!!i.multiple,i.defaultValue,!0):Rr(a,!!i.multiple,i.multiple?[]:"",!1))}a[zs]=i}catch(j){He(e,e.return,j)}}break;case 6:if(Yt(t,e),en(e),s&4){if(e.stateNode===null)throw Error(V(162));a=e.stateNode,i=e.memoizedProps;try{a.nodeValue=i}catch(j){He(e,e.return,j)}}break;case 3:if(Yt(t,e),en(e),s&4&&r!==null&&r.memoizedState.isDehydrated)try{Rs(t.containerInfo)}catch(j){He(e,e.return,j)}break;case 4:Yt(t,e),en(e);break;case 13:Yt(t,e),en(e),a=e.child,a.flags&8192&&(i=a.memoizedState!==null,a.stateNode.isHidden=i,!i||a.alternate!==null&&a.alternate.memoizedState!==null||(Wl=Ve())),s&4&&hd(e);break;case 22:if(f=r!==null&&r.memoizedState!==null,e.mode&1?(ft=(u=ft)||f,Yt(t,e),ft=u):Yt(t,e),en(e),s&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!f&&e.mode&1)for(ae=e,f=e.child;f!==null;){for(p=ae=f;ae!==null;){switch(h=ae,b=h.child,h.tag){case 0:case 11:case 14:case 15:ws(4,h,h.return);break;case 1:Pr(h,h.return);var v=h.stateNode;if(typeof v.componentWillUnmount=="function"){s=h,r=h.return;try{t=s,v.props=t.memoizedProps,v.state=t.memoizedState,v.componentWillUnmount()}catch(j){He(s,r,j)}}break;case 5:Pr(h,h.return);break;case 22:if(h.memoizedState!==null){xd(p);continue}}b!==null?(b.return=h,ae=b):xd(p)}f=f.sibling}e:for(f=null,p=e;;){if(p.tag===5){if(f===null){f=p;try{a=p.stateNode,u?(i=a.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(l=p.stateNode,c=p.memoizedProps.style,o=c!=null&&c.hasOwnProperty("display")?c.display:null,l.style.display=wu("display",o))}catch(j){He(e,e.return,j)}}}else if(p.tag===6){if(f===null)try{p.stateNode.nodeValue=u?"":p.memoizedProps}catch(j){He(e,e.return,j)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;f===p&&(f=null),p=p.return}f===p&&(f=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Yt(t,e),en(e),s&4&&hd(e);break;case 21:break;default:Yt(t,e),en(e)}}function en(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if(Gf(r)){var s=r;break e}r=r.return}throw Error(V(160))}switch(s.tag){case 5:var a=s.stateNode;s.flags&32&&(Cs(a,""),s.flags&=-33);var i=md(e);Ko(e,i,a);break;case 3:case 4:var o=s.stateNode.containerInfo,l=md(e);Xo(e,l,o);break;default:throw Error(V(161))}}catch(c){He(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Gh(e,t,r){ae=e,Kf(e)}function Kf(e,t,r){for(var s=(e.mode&1)!==0;ae!==null;){var a=ae,i=a.child;if(a.tag===22&&s){var o=a.memoizedState!==null||da;if(!o){var l=a.alternate,c=l!==null&&l.memoizedState!==null||ft;l=da;var u=ft;if(da=o,(ft=c)&&!u)for(ae=a;ae!==null;)o=ae,c=o.child,o.tag===22&&o.memoizedState!==null?gd(a):c!==null?(c.return=o,ae=c):gd(a);for(;i!==null;)ae=i,Kf(i),i=i.sibling;ae=a,da=l,ft=u}pd(e)}else a.subtreeFlags&8772&&i!==null?(i.return=a,ae=i):pd(e)}}function pd(e){for(;ae!==null;){var t=ae;if(t.flags&8772){var r=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ft||vi(5,t);break;case 1:var s=t.stateNode;if(t.flags&4&&!ft)if(r===null)s.componentDidMount();else{var a=t.elementType===t.type?r.memoizedProps:Wt(t.type,r.memoizedProps);s.componentDidUpdate(a,r.memoizedState,s.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Zc(t,i,s);break;case 3:var o=t.updateQueue;if(o!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}Zc(t,o,r)}break;case 5:var l=t.stateNode;if(r===null&&t.flags&4){r=l;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&r.focus();break;case"img":c.src&&(r.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var f=u.memoizedState;if(f!==null){var p=f.dehydrated;p!==null&&Rs(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(V(163))}ft||t.flags&512&&Vo(t)}catch(h){He(t,t.return,h)}}if(t===e){ae=null;break}if(r=t.sibling,r!==null){r.return=t.return,ae=r;break}ae=t.return}}function xd(e){for(;ae!==null;){var t=ae;if(t===e){ae=null;break}var r=t.sibling;if(r!==null){r.return=t.return,ae=r;break}ae=t.return}}function gd(e){for(;ae!==null;){var t=ae;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{vi(4,t)}catch(c){He(t,r,c)}break;case 1:var s=t.stateNode;if(typeof s.componentDidMount=="function"){var a=t.return;try{s.componentDidMount()}catch(c){He(t,a,c)}}var i=t.return;try{Vo(t)}catch(c){He(t,i,c)}break;case 5:var o=t.return;try{Vo(t)}catch(c){He(t,o,c)}}}catch(c){He(t,t.return,c)}if(t===e){ae=null;break}var l=t.sibling;if(l!==null){l.return=t.return,ae=l;break}ae=t.return}}var Vh=Math.ceil,ni=Nn.ReactCurrentDispatcher,Ql=Nn.ReactCurrentOwner,Ot=Nn.ReactCurrentBatchConfig,Se=0,st=null,Je=null,ot=0,Pt=0,Tr=Gn(0),tt=0,Bs=null,dr=0,yi=0,Yl=0,js=null,jt=null,Wl=0,qr=1/0,fn=null,ri=!1,Jo=null,Un=null,ua=!1,Mn=null,si=0,Ns=0,Zo=null,Ra=-1,_a=0;function yt(){return Se&6?Ve():Ra!==-1?Ra:Ra=Ve()}function qn(e){return e.mode&1?Se&2&&ot!==0?ot&-ot:Lh.transition!==null?(_a===0&&(_a=Au()),_a):(e=Re,e!==0||(e=window.event,e=e===void 0?16:Bu(e.type)),e):1}function Xt(e,t,r,s){if(50<Ns)throw Ns=0,Zo=null,Error(V(185));Qs(e,r,s),(!(Se&2)||e!==st)&&(e===st&&(!(Se&2)&&(yi|=r),tt===4&&An(e,ot)),Ct(e,s),r===1&&Se===0&&!(t.mode&1)&&(qr=Ve()+500,pi&&Vn()))}function Ct(e,t){var r=e.callbackNode;L0(e,t);var s=Ba(e,e===st?ot:0);if(s===0)r!==null&&Cc(r),e.callbackNode=null,e.callbackPriority=0;else if(t=s&-s,e.callbackPriority!==t){if(r!=null&&Cc(r),t===1)e.tag===0?_h(vd.bind(null,e)):of(vd.bind(null,e)),Eh(function(){!(Se&6)&&Vn()}),r=null;else{switch(zu(s)){case 1:r=vl;break;case 4:r=Lu;break;case 16:r=$a;break;case 536870912:r=Iu;break;default:r=$a}r=am(r,Jf.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function Jf(e,t){if(Ra=-1,_a=0,Se&6)throw Error(V(327));var r=e.callbackNode;if(zr()&&e.callbackNode!==r)return null;var s=Ba(e,e===st?ot:0);if(s===0)return null;if(s&30||s&e.expiredLanes||t)t=ai(e,s);else{t=s;var a=Se;Se|=2;var i=em();(st!==e||ot!==t)&&(fn=null,qr=Ve()+500,sr(e,t));do try{Jh();break}catch(l){Zf(e,l)}while(1);_l(),ni.current=i,Se=a,Je!==null?t=0:(st=null,ot=0,t=tt)}if(t!==0){if(t===2&&(a=Co(e),a!==0&&(s=a,t=el(e,a))),t===1)throw r=Bs,sr(e,0),An(e,s),Ct(e,Ve()),r;if(t===6)An(e,s);else{if(a=e.current.alternate,!(s&30)&&!Xh(a)&&(t=ai(e,s),t===2&&(i=Co(e),i!==0&&(s=i,t=el(e,i))),t===1))throw r=Bs,sr(e,0),An(e,s),Ct(e,Ve()),r;switch(e.finishedWork=a,e.finishedLanes=s,t){case 0:case 1:throw Error(V(345));case 2:Jn(e,jt,fn);break;case 3:if(An(e,s),(s&130023424)===s&&(t=Wl+500-Ve(),10<t)){if(Ba(e,0)!==0)break;if(a=e.suspendedLanes,(a&s)!==s){yt(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=Ao(Jn.bind(null,e,jt,fn),t);break}Jn(e,jt,fn);break;case 4:if(An(e,s),(s&4194240)===s)break;for(t=e.eventTimes,a=-1;0<s;){var o=31-Vt(s);i=1<<o,o=t[o],o>a&&(a=o),s&=~i}if(s=a,s=Ve()-s,s=(120>s?120:480>s?480:1080>s?1080:1920>s?1920:3e3>s?3e3:4320>s?4320:1960*Vh(s/1960))-s,10<s){e.timeoutHandle=Ao(Jn.bind(null,e,jt,fn),s);break}Jn(e,jt,fn);break;case 5:Jn(e,jt,fn);break;default:throw Error(V(329))}}}return Ct(e,Ve()),e.callbackNode===r?Jf.bind(null,e):null}function el(e,t){var r=js;return e.current.memoizedState.isDehydrated&&(sr(e,t).flags|=256),e=ai(e,t),e!==2&&(t=jt,jt=r,t!==null&&tl(t)),e}function tl(e){jt===null?jt=e:jt.push.apply(jt,e)}function Xh(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var s=0;s<r.length;s++){var a=r[s],i=a.getSnapshot;a=a.value;try{if(!Kt(i(),a))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function An(e,t){for(t&=~Yl,t&=~yi,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-Vt(t),s=1<<r;e[r]=-1,t&=~s}}function vd(e){if(Se&6)throw Error(V(327));zr();var t=Ba(e,0);if(!(t&1))return Ct(e,Ve()),null;var r=ai(e,t);if(e.tag!==0&&r===2){var s=Co(e);s!==0&&(t=s,r=el(e,s))}if(r===1)throw r=Bs,sr(e,0),An(e,t),Ct(e,Ve()),r;if(r===6)throw Error(V(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Jn(e,jt,fn),Ct(e,Ve()),null}function Hl(e,t){var r=Se;Se|=1;try{return e(t)}finally{Se=r,Se===0&&(qr=Ve()+500,pi&&Vn())}}function ur(e){Mn!==null&&Mn.tag===0&&!(Se&6)&&zr();var t=Se;Se|=1;var r=Ot.transition,s=Re;try{if(Ot.transition=null,Re=1,e)return e()}finally{Re=s,Ot.transition=r,Se=t,!(Se&6)&&Vn()}}function Gl(){Pt=Tr.current,Oe(Tr)}function sr(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,Ch(r)),Je!==null)for(r=Je.return;r!==null;){var s=r;switch(Pl(s),s.tag){case 1:s=s.type.childContextTypes,s!=null&&Wa();break;case 3:Br(),Oe(kt),Oe(mt),Dl();break;case 5:Ml(s);break;case 4:Br();break;case 13:Oe(qe);break;case 19:Oe(qe);break;case 10:Ll(s.type._context);break;case 22:case 23:Gl()}r=r.return}if(st=e,Je=e=Qn(e.current,null),ot=Pt=t,tt=0,Bs=null,Yl=yi=dr=0,jt=js=null,er!==null){for(t=0;t<er.length;t++)if(r=er[t],s=r.interleaved,s!==null){r.interleaved=null;var a=s.next,i=r.pending;if(i!==null){var o=i.next;i.next=a,s.next=o}r.pending=s}er=null}return e}function Zf(e,t){do{var r=Je;try{if(_l(),Ea.current=ti,ei){for(var s=Qe.memoizedState;s!==null;){var a=s.queue;a!==null&&(a.pending=null),s=s.next}ei=!1}if(cr=0,rt=et=Qe=null,bs=!1,Fs=0,Ql.current=null,r===null||r.return===null){tt=1,Bs=t,Je=null;break}e:{var i=e,o=r.return,l=r,c=t;if(t=ot,l.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,f=l,p=f.tag;if(!(f.mode&1)&&(p===0||p===11||p===15)){var h=f.alternate;h?(f.updateQueue=h.updateQueue,f.memoizedState=h.memoizedState,f.lanes=h.lanes):(f.updateQueue=null,f.memoizedState=null)}var b=ad(o);if(b!==null){b.flags&=-257,id(b,o,l,i,t),b.mode&1&&sd(i,u,t),t=b,c=u;var v=t.updateQueue;if(v===null){var j=new Set;j.add(c),t.updateQueue=j}else v.add(c);break e}else{if(!(t&1)){sd(i,u,t),Vl();break e}c=Error(V(426))}}else if(Be&&l.mode&1){var C=ad(o);if(C!==null){!(C.flags&65536)&&(C.flags|=256),id(C,o,l,i,t),Tl(Ur(c,l));break e}}i=c=Ur(c,l),tt!==4&&(tt=2),js===null?js=[i]:js.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var y=Mf(i,c,t);Jc(i,y);break e;case 1:l=c;var m=i.type,x=i.stateNode;if(!(i.flags&128)&&(typeof m.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(Un===null||!Un.has(x)))){i.flags|=65536,t&=-t,i.lanes|=t;var E=Df(i,l,t);Jc(i,E);break e}}i=i.return}while(i!==null)}nm(r)}catch(N){t=N,Je===r&&r!==null&&(Je=r=r.return);continue}break}while(1)}function em(){var e=ni.current;return ni.current=ti,e===null?ti:e}function Vl(){(tt===0||tt===3||tt===2)&&(tt=4),st===null||!(dr&268435455)&&!(yi&268435455)||An(st,ot)}function ai(e,t){var r=Se;Se|=2;var s=em();(st!==e||ot!==t)&&(fn=null,sr(e,t));do try{Kh();break}catch(a){Zf(e,a)}while(1);if(_l(),Se=r,ni.current=s,Je!==null)throw Error(V(261));return st=null,ot=0,tt}function Kh(){for(;Je!==null;)tm(Je)}function Jh(){for(;Je!==null&&!N0();)tm(Je)}function tm(e){var t=sm(e.alternate,e,Pt);e.memoizedProps=e.pendingProps,t===null?nm(e):Je=t,Ql.current=null}function nm(e){var t=e;do{var r=t.alternate;if(e=t.return,t.flags&32768){if(r=Yh(r,t),r!==null){r.flags&=32767,Je=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{tt=6,Je=null;return}}else if(r=Qh(r,t,Pt),r!==null){Je=r;return}if(t=t.sibling,t!==null){Je=t;return}Je=t=e}while(t!==null);tt===0&&(tt=5)}function Jn(e,t,r){var s=Re,a=Ot.transition;try{Ot.transition=null,Re=1,Zh(e,t,r,s)}finally{Ot.transition=a,Re=s}return null}function Zh(e,t,r,s){do zr();while(Mn!==null);if(Se&6)throw Error(V(327));r=e.finishedWork;var a=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(V(177));e.callbackNode=null,e.callbackPriority=0;var i=r.lanes|r.childLanes;if(I0(e,i),e===st&&(Je=st=null,ot=0),!(r.subtreeFlags&2064)&&!(r.flags&2064)||ua||(ua=!0,am($a,function(){return zr(),null})),i=(r.flags&15990)!==0,r.subtreeFlags&15990||i){i=Ot.transition,Ot.transition=null;var o=Re;Re=1;var l=Se;Se|=4,Ql.current=null,Hh(e,r),Xf(r,e),yh(Lo),Ua=!!_o,Lo=_o=null,e.current=r,Gh(r),k0(),Se=l,Re=o,Ot.transition=i}else e.current=r;if(ua&&(ua=!1,Mn=e,si=a),i=e.pendingLanes,i===0&&(Un=null),E0(r.stateNode),Ct(e,Ve()),t!==null)for(s=e.onRecoverableError,r=0;r<t.length;r++)a=t[r],s(a.value,{componentStack:a.stack,digest:a.digest});if(ri)throw ri=!1,e=Jo,Jo=null,e;return si&1&&e.tag!==0&&zr(),i=e.pendingLanes,i&1?e===Zo?Ns++:(Ns=0,Zo=e):Ns=0,Vn(),null}function zr(){if(Mn!==null){var e=zu(si),t=Ot.transition,r=Re;try{if(Ot.transition=null,Re=16>e?16:e,Mn===null)var s=!1;else{if(e=Mn,Mn=null,si=0,Se&6)throw Error(V(331));var a=Se;for(Se|=4,ae=e.current;ae!==null;){var i=ae,o=i.child;if(ae.flags&16){var l=i.deletions;if(l!==null){for(var c=0;c<l.length;c++){var u=l[c];for(ae=u;ae!==null;){var f=ae;switch(f.tag){case 0:case 11:case 15:ws(8,f,i)}var p=f.child;if(p!==null)p.return=f,ae=p;else for(;ae!==null;){f=ae;var h=f.sibling,b=f.return;if(Hf(f),f===u){ae=null;break}if(h!==null){h.return=b,ae=h;break}ae=b}}}var v=i.alternate;if(v!==null){var j=v.child;if(j!==null){v.child=null;do{var C=j.sibling;j.sibling=null,j=C}while(j!==null)}}ae=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,ae=o;else e:for(;ae!==null;){if(i=ae,i.flags&2048)switch(i.tag){case 0:case 11:case 15:ws(9,i,i.return)}var y=i.sibling;if(y!==null){y.return=i.return,ae=y;break e}ae=i.return}}var m=e.current;for(ae=m;ae!==null;){o=ae;var x=o.child;if(o.subtreeFlags&2064&&x!==null)x.return=o,ae=x;else e:for(o=m;ae!==null;){if(l=ae,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:vi(9,l)}}catch(N){He(l,l.return,N)}if(l===o){ae=null;break e}var E=l.sibling;if(E!==null){E.return=l.return,ae=E;break e}ae=l.return}}if(Se=a,Vn(),on&&typeof on.onPostCommitFiberRoot=="function")try{on.onPostCommitFiberRoot(di,e)}catch{}s=!0}return s}finally{Re=r,Ot.transition=t}}return!1}function yd(e,t,r){t=Ur(r,t),t=Mf(e,t,1),e=Bn(e,t,1),t=yt(),e!==null&&(Qs(e,1,t),Ct(e,t))}function He(e,t,r){if(e.tag===3)yd(e,e,r);else for(;t!==null;){if(t.tag===3){yd(t,e,r);break}else if(t.tag===1){var s=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(Un===null||!Un.has(s))){e=Ur(r,e),e=Df(t,e,1),t=Bn(t,e,1),e=yt(),t!==null&&(Qs(t,1,e),Ct(t,e));break}}t=t.return}}function ep(e,t,r){var s=e.pingCache;s!==null&&s.delete(t),t=yt(),e.pingedLanes|=e.suspendedLanes&r,st===e&&(ot&r)===r&&(tt===4||tt===3&&(ot&130023424)===ot&&500>Ve()-Wl?sr(e,0):Yl|=r),Ct(e,t)}function rm(e,t){t===0&&(e.mode&1?(t=ta,ta<<=1,!(ta&130023424)&&(ta=4194304)):t=1);var r=yt();e=bn(e,t),e!==null&&(Qs(e,t,r),Ct(e,r))}function tp(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),rm(e,r)}function np(e,t){var r=0;switch(e.tag){case 13:var s=e.stateNode,a=e.memoizedState;a!==null&&(r=a.retryLane);break;case 19:s=e.stateNode;break;default:throw Error(V(314))}s!==null&&s.delete(t),rm(e,r)}var sm;sm=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||kt.current)Nt=!0;else{if(!(e.lanes&r)&&!(t.flags&128))return Nt=!1,qh(e,t,r);Nt=!!(e.flags&131072)}else Nt=!1,Be&&t.flags&1048576&&lf(t,Va,t.index);switch(t.lanes=0,t.tag){case 2:var s=t.type;Ta(e,t),e=t.pendingProps;var a=Fr(t,mt.current);Ar(t,r),a=Ol(null,t,s,e,a,r);var i=$l();return t.flags|=1,typeof a=="object"&&a!==null&&typeof a.render=="function"&&a.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,St(s)?(i=!0,Ha(t)):i=!1,t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,Al(t),a.updater=gi,t.stateNode=a,a._reactInternals=t,Bo(t,s,e,r),t=Qo(null,t,s,!0,i,r)):(t.tag=0,Be&&i&&El(t),vt(null,t,a,r),t=t.child),t;case 16:s=t.elementType;e:{switch(Ta(e,t),e=t.pendingProps,a=s._init,s=a(s._payload),t.type=s,a=t.tag=sp(s),e=Wt(s,e),a){case 0:t=qo(null,t,s,e,r);break e;case 1:t=cd(null,t,s,e,r);break e;case 11:t=od(null,t,s,e,r);break e;case 14:t=ld(null,t,s,Wt(s.type,e),r);break e}throw Error(V(306,s,""))}return t;case 0:return s=t.type,a=t.pendingProps,a=t.elementType===s?a:Wt(s,a),qo(e,t,s,a,r);case 1:return s=t.type,a=t.pendingProps,a=t.elementType===s?a:Wt(s,a),cd(e,t,s,a,r);case 3:e:{if(Bf(t),e===null)throw Error(V(387));s=t.pendingProps,i=t.memoizedState,a=i.element,hf(e,t),Ja(t,s,null,r);var o=t.memoizedState;if(s=o.element,i.isDehydrated)if(i={element:s,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){a=Ur(Error(V(423)),t),t=dd(e,t,s,r,a);break e}else if(s!==a){a=Ur(Error(V(424)),t),t=dd(e,t,s,r,a);break e}else for(Tt=$n(t.stateNode.containerInfo.firstChild),Rt=t,Be=!0,Gt=null,r=ff(t,null,s,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(Or(),s===a){t=wn(e,t,r);break e}vt(e,t,s,r)}t=t.child}return t;case 5:return pf(t),e===null&&Fo(t),s=t.type,a=t.pendingProps,i=e!==null?e.memoizedProps:null,o=a.children,Io(s,a)?o=null:i!==null&&Io(s,i)&&(t.flags|=32),$f(e,t),vt(e,t,o,r),t.child;case 6:return e===null&&Fo(t),null;case 13:return Uf(e,t,r);case 4:return zl(t,t.stateNode.containerInfo),s=t.pendingProps,e===null?t.child=$r(t,null,s,r):vt(e,t,s,r),t.child;case 11:return s=t.type,a=t.pendingProps,a=t.elementType===s?a:Wt(s,a),od(e,t,s,a,r);case 7:return vt(e,t,t.pendingProps,r),t.child;case 8:return vt(e,t,t.pendingProps.children,r),t.child;case 12:return vt(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(s=t.type._context,a=t.pendingProps,i=t.memoizedProps,o=a.value,Ae(Xa,s._currentValue),s._currentValue=o,i!==null)if(Kt(i.value,o)){if(i.children===a.children&&!kt.current){t=wn(e,t,r);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var l=i.dependencies;if(l!==null){o=i.child;for(var c=l.firstContext;c!==null;){if(c.context===s){if(i.tag===1){c=xn(-1,r&-r),c.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var f=u.pending;f===null?c.next=c:(c.next=f.next,f.next=c),u.pending=c}}i.lanes|=r,c=i.alternate,c!==null&&(c.lanes|=r),Oo(i.return,r,t),l.lanes|=r;break}c=c.next}}else if(i.tag===10)o=i.type===t.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(V(341));o.lanes|=r,l=o.alternate,l!==null&&(l.lanes|=r),Oo(o,r,t),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===t){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}vt(e,t,a.children,r),t=t.child}return t;case 9:return a=t.type,s=t.pendingProps.children,Ar(t,r),a=$t(a),s=s(a),t.flags|=1,vt(e,t,s,r),t.child;case 14:return s=t.type,a=Wt(s,t.pendingProps),a=Wt(s.type,a),ld(e,t,s,a,r);case 15:return Ff(e,t,t.type,t.pendingProps,r);case 17:return s=t.type,a=t.pendingProps,a=t.elementType===s?a:Wt(s,a),Ta(e,t),t.tag=1,St(s)?(e=!0,Ha(t)):e=!1,Ar(t,r),zf(t,s,a),Bo(t,s,a,r),Qo(null,t,s,!0,e,r);case 19:return qf(e,t,r);case 22:return Of(e,t,r)}throw Error(V(156,t.tag))};function am(e,t){return _u(e,t)}function rp(e,t,r,s){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Dt(e,t,r,s){return new rp(e,t,r,s)}function Xl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function sp(e){if(typeof e=="function")return Xl(e)?1:0;if(e!=null){if(e=e.$$typeof,e===pl)return 11;if(e===xl)return 14}return 2}function Qn(e,t){var r=e.alternate;return r===null?(r=Dt(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function La(e,t,r,s,a,i){var o=2;if(s=e,typeof e=="function")Xl(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case yr:return ar(r.children,a,i,t);case hl:o=8,a|=8;break;case uo:return e=Dt(12,r,t,a|2),e.elementType=uo,e.lanes=i,e;case fo:return e=Dt(13,r,t,a),e.elementType=fo,e.lanes=i,e;case mo:return e=Dt(19,r,t,a),e.elementType=mo,e.lanes=i,e;case hu:return bi(r,a,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case fu:o=10;break e;case mu:o=9;break e;case pl:o=11;break e;case xl:o=14;break e;case Rn:o=16,s=null;break e}throw Error(V(130,e==null?e:typeof e,""))}return t=Dt(o,r,t,a),t.elementType=e,t.type=s,t.lanes=i,t}function ar(e,t,r,s){return e=Dt(7,e,s,t),e.lanes=r,e}function bi(e,t,r,s){return e=Dt(22,e,s,t),e.elementType=hu,e.lanes=r,e.stateNode={isHidden:!1},e}function Ji(e,t,r){return e=Dt(6,e,null,t),e.lanes=r,e}function Zi(e,t,r){return t=Dt(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function ap(e,t,r,s,a){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ii(0),this.expirationTimes=Ii(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ii(0),this.identifierPrefix=s,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function Kl(e,t,r,s,a,i,o,l,c){return e=new ap(e,t,r,l,c),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Dt(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:s,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},Al(i),e}function ip(e,t,r){var s=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:vr,key:s==null?null:""+s,children:e,containerInfo:t,implementation:r}}function im(e){if(!e)return Wn;e=e._reactInternals;e:{if(mr(e)!==e||e.tag!==1)throw Error(V(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(St(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(V(171))}if(e.tag===1){var r=e.type;if(St(r))return af(e,r,t)}return t}function om(e,t,r,s,a,i,o,l,c){return e=Kl(r,s,!0,e,a,i,o,l,c),e.context=im(null),r=e.current,s=yt(),a=qn(r),i=xn(s,a),i.callback=t??null,Bn(r,i,a),e.current.lanes=a,Qs(e,a,s),Ct(e,s),e}function wi(e,t,r,s){var a=t.current,i=yt(),o=qn(a);return r=im(r),t.context===null?t.context=r:t.pendingContext=r,t=xn(i,o),t.payload={element:e},s=s===void 0?null:s,s!==null&&(t.callback=s),e=Bn(a,t,o),e!==null&&(Xt(e,a,o,i),Ca(e,a,o)),o}function ii(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function bd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function Jl(e,t){bd(e,t),(e=e.alternate)&&bd(e,t)}function op(){return null}var lm=typeof reportError=="function"?reportError:function(e){console.error(e)};function Zl(e){this._internalRoot=e}ji.prototype.render=Zl.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(V(409));wi(e,t,null,null)};ji.prototype.unmount=Zl.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;ur(function(){wi(null,e,null,null)}),t[yn]=null}};function ji(e){this._internalRoot=e}ji.prototype.unstable_scheduleHydration=function(e){if(e){var t=Fu();e={blockedOn:null,target:e,priority:t};for(var r=0;r<In.length&&t!==0&&t<In[r].priority;r++);In.splice(r,0,e),r===0&&$u(e)}};function ec(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ni(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function wd(){}function lp(e,t,r,s,a){if(a){if(typeof s=="function"){var i=s;s=function(){var u=ii(o);i.call(u)}}var o=om(t,s,e,0,null,!1,!1,"",wd);return e._reactRootContainer=o,e[yn]=o.current,Is(e.nodeType===8?e.parentNode:e),ur(),o}for(;a=e.lastChild;)e.removeChild(a);if(typeof s=="function"){var l=s;s=function(){var u=ii(c);l.call(u)}}var c=Kl(e,0,!1,null,null,!1,!1,"",wd);return e._reactRootContainer=c,e[yn]=c.current,Is(e.nodeType===8?e.parentNode:e),ur(function(){wi(t,c,r,s)}),c}function ki(e,t,r,s,a){var i=r._reactRootContainer;if(i){var o=i;if(typeof a=="function"){var l=a;a=function(){var c=ii(o);l.call(c)}}wi(t,o,e,a)}else o=lp(r,t,e,a,s);return ii(o)}Mu=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=ms(t.pendingLanes);r!==0&&(yl(t,r|1),Ct(t,Ve()),!(Se&6)&&(qr=Ve()+500,Vn()))}break;case 13:ur(function(){var s=bn(e,1);if(s!==null){var a=yt();Xt(s,e,1,a)}}),Jl(e,1)}};bl=function(e){if(e.tag===13){var t=bn(e,134217728);if(t!==null){var r=yt();Xt(t,e,134217728,r)}Jl(e,134217728)}};Du=function(e){if(e.tag===13){var t=qn(e),r=bn(e,t);if(r!==null){var s=yt();Xt(r,e,t,s)}Jl(e,t)}};Fu=function(){return Re};Ou=function(e,t){var r=Re;try{return Re=e,t()}finally{Re=r}};No=function(e,t,r){switch(t){case"input":if(xo(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var s=r[t];if(s!==e&&s.form===e.form){var a=hi(s);if(!a)throw Error(V(90));xu(s),xo(s,a)}}}break;case"textarea":vu(e,r);break;case"select":t=r.value,t!=null&&Rr(e,!!r.multiple,t,!1)}};Su=Hl;Cu=ur;var cp={usingClientEntryPoint:!1,Events:[Ws,Nr,hi,Nu,ku,Hl]},ss={findFiberByHostInstance:Zn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},dp={bundleType:ss.bundleType,version:ss.version,rendererPackageName:ss.rendererPackageName,rendererConfig:ss.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Nn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Tu(e),e===null?null:e.stateNode},findFiberByHostInstance:ss.findFiberByHostInstance||op,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var fa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!fa.isDisabled&&fa.supportsFiber)try{di=fa.inject(dp),on=fa}catch{}}Lt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=cp;Lt.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ec(t))throw Error(V(200));return ip(e,t,null,r)};Lt.createRoot=function(e,t){if(!ec(e))throw Error(V(299));var r=!1,s="",a=lm;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),t=Kl(e,1,!1,null,null,r,!1,s,a),e[yn]=t.current,Is(e.nodeType===8?e.parentNode:e),new Zl(t)};Lt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(V(188)):(e=Object.keys(e).join(","),Error(V(268,e)));return e=Tu(t),e=e===null?null:e.stateNode,e};Lt.flushSync=function(e){return ur(e)};Lt.hydrate=function(e,t,r){if(!Ni(t))throw Error(V(200));return ki(null,e,t,!0,r)};Lt.hydrateRoot=function(e,t,r){if(!ec(e))throw Error(V(405));var s=r!=null&&r.hydratedSources||null,a=!1,i="",o=lm;if(r!=null&&(r.unstable_strictMode===!0&&(a=!0),r.identifierPrefix!==void 0&&(i=r.identifierPrefix),r.onRecoverableError!==void 0&&(o=r.onRecoverableError)),t=om(t,null,e,1,r??null,a,!1,i,o),e[yn]=t.current,Is(e),s)for(e=0;e<s.length;e++)r=s[e],a=r._getVersion,a=a(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,a]:t.mutableSourceEagerHydrationData.push(r,a);return new ji(t)};Lt.render=function(e,t,r){if(!Ni(t))throw Error(V(200));return ki(null,e,t,!1,r)};Lt.unmountComponentAtNode=function(e){if(!Ni(e))throw Error(V(40));return e._reactRootContainer?(ur(function(){ki(null,null,e,!1,function(){e._reactRootContainer=null,e[yn]=null})}),!0):!1};Lt.unstable_batchedUpdates=Hl;Lt.unstable_renderSubtreeIntoContainer=function(e,t,r,s){if(!Ni(r))throw Error(V(200));if(e==null||e._reactInternals===void 0)throw Error(V(38));return ki(e,t,r,!1,s)};Lt.version="18.3.1-next-f1338f8080-20240426";function cm(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(cm)}catch(e){console.error(e)}}cm(),lu.exports=Lt;var up=lu.exports,jd=up;lo.createRoot=jd.createRoot,lo.hydrateRoot=jd.hydrateRoot;const fp="modulepreload",mp=function(e){return"/"+e},Nd={},tc=function(t,r,s){if(!r||r.length===0)return t();const a=document.getElementsByTagName("link");return Promise.all(r.map(i=>{if(i=mp(i),i in Nd)return;Nd[i]=!0;const o=i.endsWith(".css"),l=o?'[rel="stylesheet"]':"";if(!!s)for(let f=a.length-1;f>=0;f--){const p=a[f];if(p.href===i&&(!o||p.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${l}`))return;const u=document.createElement("link");if(u.rel=o?"stylesheet":fp,o||(u.as="script",u.crossOrigin=""),u.href=i,document.head.appendChild(u),o)return new Promise((f,p)=>{u.addEventListener("load",f),u.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>t()).catch(i=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=i,window.dispatchEvent(o),!o.defaultPrevented)throw i})};var kd="popstate";function hp(e={}){function t(s,a){let{pathname:i,search:o,hash:l}=s.location;return nl("",{pathname:i,search:o,hash:l},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}function r(s,a){return typeof a=="string"?a:Us(a)}return xp(t,r,null,e)}function Ue(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Ut(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function pp(){return Math.random().toString(36).substring(2,10)}function Sd(e,t){return{usr:e.state,key:e.key,idx:t}}function nl(e,t,r=null,s){return{pathname:typeof e=="string"?e:e.pathname,search:"",hash:"",...typeof t=="string"?Gr(t):t,state:r,key:t&&t.key||s||pp()}}function Us({pathname:e="/",search:t="",hash:r=""}){return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Gr(e){let t={};if(e){let r=e.indexOf("#");r>=0&&(t.hash=e.substring(r),e=e.substring(0,r));let s=e.indexOf("?");s>=0&&(t.search=e.substring(s),e=e.substring(0,s)),e&&(t.pathname=e)}return t}function xp(e,t,r,s={}){let{window:a=document.defaultView,v5Compat:i=!1}=s,o=a.history,l="POP",c=null,u=f();u==null&&(u=0,o.replaceState({...o.state,idx:u},""));function f(){return(o.state||{idx:null}).idx}function p(){l="POP";let C=f(),y=C==null?null:C-u;u=C,c&&c({action:l,location:j.location,delta:y})}function h(C,y){l="PUSH";let m=nl(j.location,C,y);r&&r(m,C),u=f()+1;let x=Sd(m,u),E=j.createHref(m);try{o.pushState(x,"",E)}catch(N){if(N instanceof DOMException&&N.name==="DataCloneError")throw N;a.location.assign(E)}i&&c&&c({action:l,location:j.location,delta:1})}function b(C,y){l="REPLACE";let m=nl(j.location,C,y);r&&r(m,C),u=f();let x=Sd(m,u),E=j.createHref(m);o.replaceState(x,"",E),i&&c&&c({action:l,location:j.location,delta:0})}function v(C){return gp(C)}let j={get action(){return l},get location(){return e(a,o)},listen(C){if(c)throw new Error("A history only accepts one active listener");return a.addEventListener(kd,p),c=C,()=>{a.removeEventListener(kd,p),c=null}},createHref(C){return t(a,C)},createURL:v,encodeLocation(C){let y=v(C);return{pathname:y.pathname,search:y.search,hash:y.hash}},push:h,replace:b,go(C){return o.go(C)}};return j}function gp(e,t=!1){let r="http://localhost";typeof window<"u"&&(r=window.location.origin!=="null"?window.location.origin:window.location.href),Ue(r,"No window.location.(origin|href) available to create URL");let s=typeof e=="string"?e:Us(e);return s=s.replace(/ $/,"%20"),!t&&s.startsWith("//")&&(s=r+s),new URL(s,r)}function dm(e,t,r="/"){return vp(e,t,r,!1)}function vp(e,t,r,s){let a=typeof t=="string"?Gr(t):t,i=jn(a.pathname||"/",r);if(i==null)return null;let o=um(e);yp(o);let l=null;for(let c=0;l==null&&c<o.length;++c){let u=Rp(i);l=Pp(o[c],u,s)}return l}function um(e,t=[],r=[],s=""){let a=(i,o,l)=>{let c={relativePath:l===void 0?i.path||"":l,caseSensitive:i.caseSensitive===!0,childrenIndex:o,route:i};c.relativePath.startsWith("/")&&(Ue(c.relativePath.startsWith(s),`Absolute route path "${c.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),c.relativePath=c.relativePath.slice(s.length));let u=gn([s,c.relativePath]),f=r.concat(c);i.children&&i.children.length>0&&(Ue(i.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${u}".`),um(i.children,t,f,u)),!(i.path==null&&!i.index)&&t.push({path:u,score:Cp(u,i.index),routesMeta:f})};return e.forEach((i,o)=>{var l;if(i.path===""||!((l=i.path)!=null&&l.includes("?")))a(i,o);else for(let c of fm(i.path))a(i,o,c)}),t}function fm(e){let t=e.split("/");if(t.length===0)return[];let[r,...s]=t,a=r.endsWith("?"),i=r.replace(/\?$/,"");if(s.length===0)return a?[i,""]:[i];let o=fm(s.join("/")),l=[];return l.push(...o.map(c=>c===""?i:[i,c].join("/"))),a&&l.push(...o),l.map(c=>e.startsWith("/")&&c===""?"/":c)}function yp(e){e.sort((t,r)=>t.score!==r.score?r.score-t.score:Ep(t.routesMeta.map(s=>s.childrenIndex),r.routesMeta.map(s=>s.childrenIndex)))}var bp=/^:[\w-]+$/,wp=3,jp=2,Np=1,kp=10,Sp=-2,Cd=e=>e==="*";function Cp(e,t){let r=e.split("/"),s=r.length;return r.some(Cd)&&(s+=Sp),t&&(s+=jp),r.filter(a=>!Cd(a)).reduce((a,i)=>a+(bp.test(i)?wp:i===""?Np:kp),s)}function Ep(e,t){return e.length===t.length&&e.slice(0,-1).every((s,a)=>s===t[a])?e[e.length-1]-t[t.length-1]:0}function Pp(e,t,r=!1){let{routesMeta:s}=e,a={},i="/",o=[];for(let l=0;l<s.length;++l){let c=s[l],u=l===s.length-1,f=i==="/"?t:t.slice(i.length)||"/",p=oi({path:c.relativePath,caseSensitive:c.caseSensitive,end:u},f),h=c.route;if(!p&&u&&r&&!s[s.length-1].route.index&&(p=oi({path:c.relativePath,caseSensitive:c.caseSensitive,end:!1},f)),!p)return null;Object.assign(a,p.params),o.push({params:a,pathname:gn([i,p.pathname]),pathnameBase:Ap(gn([i,p.pathnameBase])),route:h}),p.pathnameBase!=="/"&&(i=gn([i,p.pathnameBase]))}return o}function oi(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[r,s]=Tp(e.path,e.caseSensitive,e.end),a=t.match(r);if(!a)return null;let i=a[0],o=i.replace(/(.)\/+$/,"$1"),l=a.slice(1);return{params:s.reduce((u,{paramName:f,isOptional:p},h)=>{if(f==="*"){let v=l[h]||"";o=i.slice(0,i.length-v.length).replace(/(.)\/+$/,"$1")}const b=l[h];return p&&!b?u[f]=void 0:u[f]=(b||"").replace(/%2F/g,"/"),u},{}),pathname:i,pathnameBase:o,pattern:e}}function Tp(e,t=!1,r=!0){Ut(e==="*"||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let s=[],a="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,l,c)=>(s.push({paramName:l,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(s.push({paramName:"*"}),a+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?a+="\\/*$":e!==""&&e!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,t?void 0:"i"),s]}function Rp(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Ut(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function jn(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let r=t.endsWith("/")?t.length-1:t.length,s=e.charAt(r);return s&&s!=="/"?null:e.slice(r)||"/"}function _p(e,t="/"){let{pathname:r,search:s="",hash:a=""}=typeof e=="string"?Gr(e):e;return{pathname:r?r.startsWith("/")?r:Lp(r,t):t,search:zp(s),hash:Mp(a)}}function Lp(e,t){let r=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(a=>{a===".."?r.length>1&&r.pop():a!=="."&&r.push(a)}),r.length>1?r.join("/"):"/"}function eo(e,t,r,s){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${r}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Ip(e){return e.filter((t,r)=>r===0||t.route.path&&t.route.path.length>0)}function nc(e){let t=Ip(e);return t.map((r,s)=>s===t.length-1?r.pathname:r.pathnameBase)}function rc(e,t,r,s=!1){let a;typeof e=="string"?a=Gr(e):(a={...e},Ue(!a.pathname||!a.pathname.includes("?"),eo("?","pathname","search",a)),Ue(!a.pathname||!a.pathname.includes("#"),eo("#","pathname","hash",a)),Ue(!a.search||!a.search.includes("#"),eo("#","search","hash",a)));let i=e===""||a.pathname==="",o=i?"/":a.pathname,l;if(o==null)l=r;else{let p=t.length-1;if(!s&&o.startsWith("..")){let h=o.split("/");for(;h[0]==="..";)h.shift(),p-=1;a.pathname=h.join("/")}l=p>=0?t[p]:"/"}let c=_p(a,l),u=o&&o!=="/"&&o.endsWith("/"),f=(i||o===".")&&r.endsWith("/");return!c.pathname.endsWith("/")&&(u||f)&&(c.pathname+="/"),c}var gn=e=>e.join("/").replace(/\/\/+/g,"/"),Ap=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),zp=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Mp=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Dp(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}var mm=["POST","PUT","PATCH","DELETE"];new Set(mm);var Fp=["GET",...mm];new Set(Fp);var Vr=d.createContext(null);Vr.displayName="DataRouter";var Si=d.createContext(null);Si.displayName="DataRouterState";d.createContext(!1);var hm=d.createContext({isTransitioning:!1});hm.displayName="ViewTransition";var Op=d.createContext(new Map);Op.displayName="Fetchers";var $p=d.createContext(null);$p.displayName="Await";var Jt=d.createContext(null);Jt.displayName="Navigation";var Gs=d.createContext(null);Gs.displayName="Location";var qt=d.createContext({outlet:null,matches:[],isDataRoute:!1});qt.displayName="Route";var sc=d.createContext(null);sc.displayName="RouteError";function Bp(e,{relative:t}={}){Ue(Xr(),"useHref() may be used only in the context of a <Router> component.");let{basename:r,navigator:s}=d.useContext(Jt),{hash:a,pathname:i,search:o}=Vs(e,{relative:t}),l=i;return r!=="/"&&(l=i==="/"?r:gn([r,i])),s.createHref({pathname:l,search:o,hash:a})}function Xr(){return d.useContext(Gs)!=null}function nt(){return Ue(Xr(),"useLocation() may be used only in the context of a <Router> component."),d.useContext(Gs).location}var pm="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function xm(e){d.useContext(Jt).static||d.useLayoutEffect(e)}function Le(){let{isDataRoute:e}=d.useContext(qt);return e?rx():Up()}function Up(){Ue(Xr(),"useNavigate() may be used only in the context of a <Router> component.");let e=d.useContext(Vr),{basename:t,navigator:r}=d.useContext(Jt),{matches:s}=d.useContext(qt),{pathname:a}=nt(),i=JSON.stringify(nc(s)),o=d.useRef(!1);return xm(()=>{o.current=!0}),d.useCallback((c,u={})=>{if(Ut(o.current,pm),!o.current)return;if(typeof c=="number"){r.go(c);return}let f=rc(c,JSON.parse(i),a,u.relative==="path");e==null&&t!=="/"&&(f.pathname=f.pathname==="/"?t:gn([t,f.pathname])),(u.replace?r.replace:r.push)(f,u.state,u)},[t,r,i,a,e])}var qp=d.createContext(null);function Qp(e){let t=d.useContext(qt).outlet;return t&&d.createElement(qp.Provider,{value:e},t)}function Yp(){let{matches:e}=d.useContext(qt),t=e[e.length-1];return t?t.params:{}}function Vs(e,{relative:t}={}){let{matches:r}=d.useContext(qt),{pathname:s}=nt(),a=JSON.stringify(nc(r));return d.useMemo(()=>rc(e,JSON.parse(a),s,t==="path"),[e,a,s,t])}function Wp(e,t){return gm(e,t)}function gm(e,t,r,s){var y;Ue(Xr(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:a}=d.useContext(Jt),{matches:i}=d.useContext(qt),o=i[i.length-1],l=o?o.params:{},c=o?o.pathname:"/",u=o?o.pathnameBase:"/",f=o&&o.route;{let m=f&&f.path||"";vm(c,!f||m.endsWith("*")||m.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${c}" (under <Route path="${m}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${m}"> to <Route path="${m==="/"?"*":`${m}/*`}">.`)}let p=nt(),h;if(t){let m=typeof t=="string"?Gr(t):t;Ue(u==="/"||((y=m.pathname)==null?void 0:y.startsWith(u)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${u}" but pathname "${m.pathname}" was given in the \`location\` prop.`),h=m}else h=p;let b=h.pathname||"/",v=b;if(u!=="/"){let m=u.replace(/^\//,"").split("/");v="/"+b.replace(/^\//,"").split("/").slice(m.length).join("/")}let j=dm(e,{pathname:v});Ut(f||j!=null,`No routes matched location "${h.pathname}${h.search}${h.hash}" `),Ut(j==null||j[j.length-1].route.element!==void 0||j[j.length-1].route.Component!==void 0||j[j.length-1].route.lazy!==void 0,`Matched leaf route at location "${h.pathname}${h.search}${h.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let C=Kp(j&&j.map(m=>Object.assign({},m,{params:Object.assign({},l,m.params),pathname:gn([u,a.encodeLocation?a.encodeLocation(m.pathname).pathname:m.pathname]),pathnameBase:m.pathnameBase==="/"?u:gn([u,a.encodeLocation?a.encodeLocation(m.pathnameBase).pathname:m.pathnameBase])})),i,r,s);return t&&C?d.createElement(Gs.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...h},navigationType:"POP"}},C):C}function Hp(){let e=nx(),t=Dp(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,s="rgba(200,200,200, 0.5)",a={padding:"0.5rem",backgroundColor:s},i={padding:"2px 4px",backgroundColor:s},o=null;return console.error("Error handled by React Router default ErrorBoundary:",e),o=d.createElement(d.Fragment,null,d.createElement("p",null,"💿 Hey developer 👋"),d.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",d.createElement("code",{style:i},"ErrorBoundary")," or"," ",d.createElement("code",{style:i},"errorElement")," prop on your route.")),d.createElement(d.Fragment,null,d.createElement("h2",null,"Unexpected Application Error!"),d.createElement("h3",{style:{fontStyle:"italic"}},t),r?d.createElement("pre",{style:a},r):null,o)}var Gp=d.createElement(Hp,null),Vp=class extends d.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return this.state.error!==void 0?d.createElement(qt.Provider,{value:this.props.routeContext},d.createElement(sc.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function Xp({routeContext:e,match:t,children:r}){let s=d.useContext(Vr);return s&&s.static&&s.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=t.route.id),d.createElement(qt.Provider,{value:e},r)}function Kp(e,t=[],r=null,s=null){if(e==null){if(!r)return null;if(r.errors)e=r.matches;else if(t.length===0&&!r.initialized&&r.matches.length>0)e=r.matches;else return null}let a=e,i=r==null?void 0:r.errors;if(i!=null){let c=a.findIndex(u=>u.route.id&&(i==null?void 0:i[u.route.id])!==void 0);Ue(c>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(i).join(",")}`),a=a.slice(0,Math.min(a.length,c+1))}let o=!1,l=-1;if(r)for(let c=0;c<a.length;c++){let u=a[c];if((u.route.HydrateFallback||u.route.hydrateFallbackElement)&&(l=c),u.route.id){let{loaderData:f,errors:p}=r,h=u.route.loader&&!f.hasOwnProperty(u.route.id)&&(!p||p[u.route.id]===void 0);if(u.route.lazy||h){o=!0,l>=0?a=a.slice(0,l+1):a=[a[0]];break}}}return a.reduceRight((c,u,f)=>{let p,h=!1,b=null,v=null;r&&(p=i&&u.route.id?i[u.route.id]:void 0,b=u.route.errorElement||Gp,o&&(l<0&&f===0?(vm("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),h=!0,v=null):l===f&&(h=!0,v=u.route.hydrateFallbackElement||null)));let j=t.concat(a.slice(0,f+1)),C=()=>{let y;return p?y=b:h?y=v:u.route.Component?y=d.createElement(u.route.Component,null):u.route.element?y=u.route.element:y=c,d.createElement(Xp,{match:u,routeContext:{outlet:c,matches:j,isDataRoute:r!=null},children:y})};return r&&(u.route.ErrorBoundary||u.route.errorElement||f===0)?d.createElement(Vp,{location:r.location,revalidation:r.revalidation,component:b,error:p,children:C(),routeContext:{outlet:null,matches:j,isDataRoute:!0}}):C()},null)}function ac(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Jp(e){let t=d.useContext(Vr);return Ue(t,ac(e)),t}function Zp(e){let t=d.useContext(Si);return Ue(t,ac(e)),t}function ex(e){let t=d.useContext(qt);return Ue(t,ac(e)),t}function ic(e){let t=ex(e),r=t.matches[t.matches.length-1];return Ue(r.route.id,`${e} can only be used on routes that contain a unique "id"`),r.route.id}function tx(){return ic("useRouteId")}function nx(){var s;let e=d.useContext(sc),t=Zp("useRouteError"),r=ic("useRouteError");return e!==void 0?e:(s=t.errors)==null?void 0:s[r]}function rx(){let{router:e}=Jp("useNavigate"),t=ic("useNavigate"),r=d.useRef(!1);return xm(()=>{r.current=!0}),d.useCallback(async(a,i={})=>{Ut(r.current,pm),r.current&&(typeof a=="number"?e.navigate(a):await e.navigate(a,{fromRouteId:t,...i}))},[e,t])}var Ed={};function vm(e,t,r){!t&&!Ed[e]&&(Ed[e]=!0,Ut(!1,r))}d.memo(sx);function sx({routes:e,future:t,state:r}){return gm(e,void 0,r,t)}function ax({to:e,replace:t,state:r,relative:s}){Ue(Xr(),"<Navigate> may be used only in the context of a <Router> component.");let{static:a}=d.useContext(Jt);Ut(!a,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:i}=d.useContext(qt),{pathname:o}=nt(),l=Le(),c=rc(e,nc(i),o,s==="path"),u=JSON.stringify(c);return d.useEffect(()=>{l(JSON.parse(u),{replace:t,state:r,relative:s})},[l,u,s,t,r]),null}function ix(e){return Qp(e.context)}function De(e){Ue(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function ox({basename:e="/",children:t=null,location:r,navigationType:s="POP",navigator:a,static:i=!1}){Ue(!Xr(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let o=e.replace(/^\/*/,"/"),l=d.useMemo(()=>({basename:o,navigator:a,static:i,future:{}}),[o,a,i]);typeof r=="string"&&(r=Gr(r));let{pathname:c="/",search:u="",hash:f="",state:p=null,key:h="default"}=r,b=d.useMemo(()=>{let v=jn(c,o);return v==null?null:{location:{pathname:v,search:u,hash:f,state:p,key:h},navigationType:s}},[o,c,u,f,p,h,s]);return Ut(b!=null,`<Router basename="${o}"> is not able to match the URL "${c}${u}${f}" because it does not start with the basename, so the <Router> won't render anything.`),b==null?null:d.createElement(Jt.Provider,{value:l},d.createElement(Gs.Provider,{children:t,value:b}))}function lx({children:e,location:t}){return Wp(rl(e),t)}function rl(e,t=[]){let r=[];return d.Children.forEach(e,(s,a)=>{if(!d.isValidElement(s))return;let i=[...t,a];if(s.type===d.Fragment){r.push.apply(r,rl(s.props.children,i));return}Ue(s.type===De,`[${typeof s.type=="string"?s.type:s.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Ue(!s.props.index||!s.props.children,"An index route cannot have child routes.");let o={id:s.props.id||i.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,loader:s.props.loader,action:s.props.action,hydrateFallbackElement:s.props.hydrateFallbackElement,HydrateFallback:s.props.HydrateFallback,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.hasErrorBoundary===!0||s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(o.children=rl(s.props.children,i)),r.push(o)}),r}var Ia="get",Aa="application/x-www-form-urlencoded";function Ci(e){return e!=null&&typeof e.tagName=="string"}function cx(e){return Ci(e)&&e.tagName.toLowerCase()==="button"}function dx(e){return Ci(e)&&e.tagName.toLowerCase()==="form"}function ux(e){return Ci(e)&&e.tagName.toLowerCase()==="input"}function fx(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function mx(e,t){return e.button===0&&(!t||t==="_self")&&!fx(e)}function sl(e=""){return new URLSearchParams(typeof e=="string"||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce((t,r)=>{let s=e[r];return t.concat(Array.isArray(s)?s.map(a=>[r,a]):[[r,s]])},[]))}function hx(e,t){let r=sl(e);return t&&t.forEach((s,a)=>{r.has(a)||t.getAll(a).forEach(i=>{r.append(a,i)})}),r}var ma=null;function px(){if(ma===null)try{new FormData(document.createElement("form"),0),ma=!1}catch{ma=!0}return ma}var xx=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function to(e){return e!=null&&!xx.has(e)?(Ut(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Aa}"`),null):e}function gx(e,t){let r,s,a,i,o;if(dx(e)){let l=e.getAttribute("action");s=l?jn(l,t):null,r=e.getAttribute("method")||Ia,a=to(e.getAttribute("enctype"))||Aa,i=new FormData(e)}else if(cx(e)||ux(e)&&(e.type==="submit"||e.type==="image")){let l=e.form;if(l==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let c=e.getAttribute("formaction")||l.getAttribute("action");if(s=c?jn(c,t):null,r=e.getAttribute("formmethod")||l.getAttribute("method")||Ia,a=to(e.getAttribute("formenctype"))||to(l.getAttribute("enctype"))||Aa,i=new FormData(l,e),!px()){let{name:u,type:f,value:p}=e;if(f==="image"){let h=u?`${u}.`:"";i.append(`${h}x`,"0"),i.append(`${h}y`,"0")}else u&&i.append(u,p)}}else{if(Ci(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');r=Ia,s=null,a=Aa,o=e}return i&&a==="text/plain"&&(o=i,i=void 0),{action:s,method:r.toLowerCase(),encType:a,formData:i,body:o}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function oc(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function vx(e,t,r){let s=typeof e=="string"?new URL(e,typeof window>"u"?"server://singlefetch/":window.location.origin):e;return s.pathname==="/"?s.pathname=`_root.${r}`:t&&jn(s.pathname,t)==="/"?s.pathname=`${t.replace(/\/$/,"")}/_root.${r}`:s.pathname=`${s.pathname.replace(/\/$/,"")}.${r}`,s}async function yx(e,t){if(e.id in t)return t[e.id];try{let r=await tc(()=>import(e.module),[]);return t[e.id]=r,r}catch(r){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(r),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function bx(e){return e!=null&&typeof e.page=="string"}function wx(e){return e==null?!1:e.href==null?e.rel==="preload"&&typeof e.imageSrcSet=="string"&&typeof e.imageSizes=="string":typeof e.rel=="string"&&typeof e.href=="string"}async function jx(e,t,r){let s=await Promise.all(e.map(async a=>{let i=t.routes[a.route.id];if(i){let o=await yx(i,r);return o.links?o.links():[]}return[]}));return Cx(s.flat(1).filter(wx).filter(a=>a.rel==="stylesheet"||a.rel==="preload").map(a=>a.rel==="stylesheet"?{...a,rel:"prefetch",as:"style"}:{...a,rel:"prefetch"}))}function Pd(e,t,r,s,a,i){let o=(c,u)=>r[u]?c.route.id!==r[u].route.id:!0,l=(c,u)=>{var f;return r[u].pathname!==c.pathname||((f=r[u].route.path)==null?void 0:f.endsWith("*"))&&r[u].params["*"]!==c.params["*"]};return i==="assets"?t.filter((c,u)=>o(c,u)||l(c,u)):i==="data"?t.filter((c,u)=>{var p;let f=s.routes[c.route.id];if(!f||!f.hasLoader)return!1;if(o(c,u)||l(c,u))return!0;if(c.route.shouldRevalidate){let h=c.route.shouldRevalidate({currentUrl:new URL(a.pathname+a.search+a.hash,window.origin),currentParams:((p=r[0])==null?void 0:p.params)||{},nextUrl:new URL(e,window.origin),nextParams:c.params,defaultShouldRevalidate:!0});if(typeof h=="boolean")return h}return!0}):[]}function Nx(e,t,{includeHydrateFallback:r}={}){return kx(e.map(s=>{let a=t.routes[s.route.id];if(!a)return[];let i=[a.module];return a.clientActionModule&&(i=i.concat(a.clientActionModule)),a.clientLoaderModule&&(i=i.concat(a.clientLoaderModule)),r&&a.hydrateFallbackModule&&(i=i.concat(a.hydrateFallbackModule)),a.imports&&(i=i.concat(a.imports)),i}).flat(1))}function kx(e){return[...new Set(e)]}function Sx(e){let t={},r=Object.keys(e).sort();for(let s of r)t[s]=e[s];return t}function Cx(e,t){let r=new Set,s=new Set(t);return e.reduce((a,i)=>{if(t&&!bx(i)&&i.as==="script"&&i.href&&s.has(i.href))return a;let l=JSON.stringify(Sx(i));return r.has(l)||(r.add(l),a.push({key:l,link:i})),a},[])}function ym(){let e=d.useContext(Vr);return oc(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}function Ex(){let e=d.useContext(Si);return oc(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}var lc=d.createContext(void 0);lc.displayName="FrameworkContext";function bm(){let e=d.useContext(lc);return oc(e,"You must render this element inside a <HydratedRouter> element"),e}function Px(e,t){let r=d.useContext(lc),[s,a]=d.useState(!1),[i,o]=d.useState(!1),{onFocus:l,onBlur:c,onMouseEnter:u,onMouseLeave:f,onTouchStart:p}=t,h=d.useRef(null);d.useEffect(()=>{if(e==="render"&&o(!0),e==="viewport"){let j=y=>{y.forEach(m=>{o(m.isIntersecting)})},C=new IntersectionObserver(j,{threshold:.5});return h.current&&C.observe(h.current),()=>{C.disconnect()}}},[e]),d.useEffect(()=>{if(s){let j=setTimeout(()=>{o(!0)},100);return()=>{clearTimeout(j)}}},[s]);let b=()=>{a(!0)},v=()=>{a(!1),o(!1)};return r?e!=="intent"?[i,h,{}]:[i,h,{onFocus:as(l,b),onBlur:as(c,v),onMouseEnter:as(u,b),onMouseLeave:as(f,v),onTouchStart:as(p,b)}]:[!1,h,{}]}function as(e,t){return r=>{e&&e(r),r.defaultPrevented||t(r)}}function Tx({page:e,...t}){let{router:r}=ym(),s=d.useMemo(()=>dm(r.routes,e,r.basename),[r.routes,e,r.basename]);return s?d.createElement(_x,{page:e,matches:s,...t}):null}function Rx(e){let{manifest:t,routeModules:r}=bm(),[s,a]=d.useState([]);return d.useEffect(()=>{let i=!1;return jx(e,t,r).then(o=>{i||a(o)}),()=>{i=!0}},[e,t,r]),s}function _x({page:e,matches:t,...r}){let s=nt(),{manifest:a,routeModules:i}=bm(),{basename:o}=ym(),{loaderData:l,matches:c}=Ex(),u=d.useMemo(()=>Pd(e,t,c,a,s,"data"),[e,t,c,a,s]),f=d.useMemo(()=>Pd(e,t,c,a,s,"assets"),[e,t,c,a,s]),p=d.useMemo(()=>{if(e===s.pathname+s.search+s.hash)return[];let v=new Set,j=!1;if(t.forEach(y=>{var x;let m=a.routes[y.route.id];!m||!m.hasLoader||(!u.some(E=>E.route.id===y.route.id)&&y.route.id in l&&((x=i[y.route.id])!=null&&x.shouldRevalidate)||m.hasClientLoader?j=!0:v.add(y.route.id))}),v.size===0)return[];let C=vx(e,o,"data");return j&&v.size>0&&C.searchParams.set("_routes",t.filter(y=>v.has(y.route.id)).map(y=>y.route.id).join(",")),[C.pathname+C.search]},[o,l,s,a,u,t,e,i]),h=d.useMemo(()=>Nx(f,a),[f,a]),b=Rx(f);return d.createElement(d.Fragment,null,p.map(v=>d.createElement("link",{key:v,rel:"prefetch",as:"fetch",href:v,...r})),h.map(v=>d.createElement("link",{key:v,rel:"modulepreload",href:v,...r})),b.map(({key:v,link:j})=>d.createElement("link",{key:v,...j})))}function Lx(...e){return t=>{e.forEach(r=>{typeof r=="function"?r(t):r!=null&&(r.current=t)})}}var wm=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{wm&&(window.__reactRouterVersion="7.7.1")}catch{}function Ix({basename:e,children:t,window:r}){let s=d.useRef();s.current==null&&(s.current=hp({window:r,v5Compat:!0}));let a=s.current,[i,o]=d.useState({action:a.action,location:a.location}),l=d.useCallback(c=>{d.startTransition(()=>o(c))},[o]);return d.useLayoutEffect(()=>a.listen(l),[a,l]),d.createElement(ox,{basename:e,children:t,location:i.location,navigationType:i.action,navigator:a})}var jm=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Nm=d.forwardRef(function({onClick:t,discover:r="render",prefetch:s="none",relative:a,reloadDocument:i,replace:o,state:l,target:c,to:u,preventScrollReset:f,viewTransition:p,...h},b){let{basename:v}=d.useContext(Jt),j=typeof u=="string"&&jm.test(u),C,y=!1;if(typeof u=="string"&&j&&(C=u,wm))try{let w=new URL(window.location.href),k=u.startsWith("//")?new URL(w.protocol+u):new URL(u),P=jn(k.pathname,v);k.origin===w.origin&&P!=null?u=P+k.search+k.hash:y=!0}catch{Ut(!1,`<Link to="${u}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let m=Bp(u,{relative:a}),[x,E,N]=Px(s,h),T=Dx(u,{replace:o,state:l,target:c,preventScrollReset:f,relative:a,viewTransition:p});function S(w){t&&t(w),w.defaultPrevented||T(w)}let g=d.createElement("a",{...h,...N,href:C||m,onClick:y||i?t:S,ref:Lx(b,E),target:c,"data-discover":!j&&r==="render"?"true":void 0});return x&&!j?d.createElement(d.Fragment,null,g,d.createElement(Tx,{page:m})):g});Nm.displayName="Link";var Ax=d.forwardRef(function({"aria-current":t="page",caseSensitive:r=!1,className:s="",end:a=!1,style:i,to:o,viewTransition:l,children:c,...u},f){let p=Vs(o,{relative:u.relative}),h=nt(),b=d.useContext(Si),{navigator:v,basename:j}=d.useContext(Jt),C=b!=null&&Ux(p)&&l===!0,y=v.encodeLocation?v.encodeLocation(p).pathname:p.pathname,m=h.pathname,x=b&&b.navigation&&b.navigation.location?b.navigation.location.pathname:null;r||(m=m.toLowerCase(),x=x?x.toLowerCase():null,y=y.toLowerCase()),x&&j&&(x=jn(x,j)||x);const E=y!=="/"&&y.endsWith("/")?y.length-1:y.length;let N=m===y||!a&&m.startsWith(y)&&m.charAt(E)==="/",T=x!=null&&(x===y||!a&&x.startsWith(y)&&x.charAt(y.length)==="/"),S={isActive:N,isPending:T,isTransitioning:C},g=N?t:void 0,w;typeof s=="function"?w=s(S):w=[s,N?"active":null,T?"pending":null,C?"transitioning":null].filter(Boolean).join(" ");let k=typeof i=="function"?i(S):i;return d.createElement(Nm,{...u,"aria-current":g,className:w,ref:f,style:k,to:o,viewTransition:l},typeof c=="function"?c(S):c)});Ax.displayName="NavLink";var zx=d.forwardRef(({discover:e="render",fetcherKey:t,navigate:r,reloadDocument:s,replace:a,state:i,method:o=Ia,action:l,onSubmit:c,relative:u,preventScrollReset:f,viewTransition:p,...h},b)=>{let v=$x(),j=Bx(l,{relative:u}),C=o.toLowerCase()==="get"?"get":"post",y=typeof l=="string"&&jm.test(l),m=x=>{if(c&&c(x),x.defaultPrevented)return;x.preventDefault();let E=x.nativeEvent.submitter,N=(E==null?void 0:E.getAttribute("formmethod"))||o;v(E||x.currentTarget,{fetcherKey:t,method:N,navigate:r,replace:a,state:i,relative:u,preventScrollReset:f,viewTransition:p})};return d.createElement("form",{ref:b,method:C,action:j,onSubmit:s?c:m,...h,"data-discover":!y&&e==="render"?"true":void 0})});zx.displayName="Form";function Mx(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function km(e){let t=d.useContext(Vr);return Ue(t,Mx(e)),t}function Dx(e,{target:t,replace:r,state:s,preventScrollReset:a,relative:i,viewTransition:o}={}){let l=Le(),c=nt(),u=Vs(e,{relative:i});return d.useCallback(f=>{if(mx(f,t)){f.preventDefault();let p=r!==void 0?r:Us(c)===Us(u);l(e,{replace:p,state:s,preventScrollReset:a,relative:i,viewTransition:o})}},[c,l,u,r,s,t,e,a,i,o])}function Sm(e){Ut(typeof URLSearchParams<"u","You cannot use the `useSearchParams` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params.");let t=d.useRef(sl(e)),r=d.useRef(!1),s=nt(),a=d.useMemo(()=>hx(s.search,r.current?null:t.current),[s.search]),i=Le(),o=d.useCallback((l,c)=>{const u=sl(typeof l=="function"?l(new URLSearchParams(a)):l);r.current=!0,i("?"+u,c)},[i,a]);return[a,o]}var Fx=0,Ox=()=>`__${String(++Fx)}__`;function $x(){let{router:e}=km("useSubmit"),{basename:t}=d.useContext(Jt),r=tx();return d.useCallback(async(s,a={})=>{let{action:i,method:o,encType:l,formData:c,body:u}=gx(s,t);if(a.navigate===!1){let f=a.fetcherKey||Ox();await e.fetch(f,r,a.action||i,{preventScrollReset:a.preventScrollReset,formData:c,body:u,formMethod:a.method||o,formEncType:a.encType||l,flushSync:a.flushSync})}else await e.navigate(a.action||i,{preventScrollReset:a.preventScrollReset,formData:c,body:u,formMethod:a.method||o,formEncType:a.encType||l,replace:a.replace,state:a.state,fromRouteId:r,flushSync:a.flushSync,viewTransition:a.viewTransition})},[e,t,r])}function Bx(e,{relative:t}={}){let{basename:r}=d.useContext(Jt),s=d.useContext(qt);Ue(s,"useFormAction must be used inside a RouteContext");let[a]=s.matches.slice(-1),i={...Vs(e||".",{relative:t})},o=nt();if(e==null){i.search=o.search;let l=new URLSearchParams(i.search),c=l.getAll("index");if(c.some(f=>f==="")){l.delete("index"),c.filter(p=>p).forEach(p=>l.append("index",p));let f=l.toString();i.search=f?`?${f}`:""}}return(!e||e===".")&&a.route.index&&(i.search=i.search?i.search.replace(/^\?/,"?index&"):"?index"),r!=="/"&&(i.pathname=i.pathname==="/"?r:gn([r,i.pathname])),Us(i)}function Ux(e,{relative:t}={}){let r=d.useContext(hm);Ue(r!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:s}=km("useViewTransitionState"),a=Vs(e,{relative:t});if(!r.isTransitioning)return!1;let i=jn(r.currentLocation.pathname,s)||r.currentLocation.pathname,o=jn(r.nextLocation.pathname,s)||r.nextLocation.pathname;return oi(a.pathname,o)!=null||oi(a.pathname,i)!=null}function qx({size:e=22,spinning:t=!1}){return n.jsx("div",{style:{width:e,height:e},className:"grid place-items-center",children:n.jsxs("svg",{viewBox:"0 0 100 100",className:`${t?"animate-[spin_0.8s_ease-out]":"motion-safe:animate-[spin_9s_linear_infinite]"} group-active:motion-safe:animate-[spin_1.2s_linear_infinite]`,style:{filter:"drop-shadow(0 2px 4px rgba(0,0,0,0.2))"},children:[n.jsx("path",{d:"M50,50 L50,5 A45,45 0 0,1 86.97,25.98 Z",fill:"#6366F1"}),n.jsx("path",{d:"M50,50 L86.97,25.98 A45,45 0 0,1 86.97,74.02 Z",fill:"#22C55E"}),n.jsx("path",{d:"M50,50 L86.97,74.02 A45,45 0 0,1 50,95 Z",fill:"#F59E0B"}),n.jsx("path",{d:"M50,50 L50,95 A45,45 0 0,1 13.03,74.02 Z",fill:"#EF4444"}),n.jsx("path",{d:"M50,50 L13.03,74.02 A45,45 0 0,1 13.03,25.98 Z",fill:"#3B82F6"}),n.jsx("path",{d:"M50,50 L13.03,25.98 A45,45 0 0,1 50,5 Z",fill:"#8B5CF6"}),n.jsx("circle",{cx:"50",cy:"50",r:"9",fill:"#111827",stroke:"white",strokeWidth:"2"})]})})}function Qx(){const e=Le(),{pathname:t}=nt(),r=d.useRef({}),s=d.useRef({}),[a,i]=d.useState(!1),o=d.useRef(null),l=x=>{if(navigator.vibrate)switch(x){case"light":navigator.vibrate(20);break;case"medium":navigator.vibrate(35);break;case"heavy":navigator.vibrate(50);break;case"double":navigator.vibrate([30,50,30]);break;case"success":navigator.vibrate([20,50,20,50,20]);break;default:navigator.vibrate(25)}};d.useCallback(()=>{var x;if(["/","/play","/swipe","/profile"].includes(t)){const E=((x=o.current)==null?void 0:x.scrollTop)||0,N=window.scrollY||window.pageYOffset||0,T=E>0?E:N;console.log(`Saving scroll for ${t}: main=${E}, window=${N}, saved=${T}`),r.current[t]=T}},[t]),d.useEffect(()=>{let x=null;const E=()=>{x&&cancelAnimationFrame(x),x=requestAnimationFrame(()=>{var T;if(["/","/play","/swipe","/profile"].includes(t)){const S=((T=o.current)==null?void 0:T.scrollTop)||0,g=window.scrollY||window.pageYOffset||0,w=S>0?S:g;r.current[t]=w,console.log(`Scroll position updated for ${t}: ${w}`)}})};window.addEventListener("scroll",E,{passive:!0});const N=o.current;return N&&N.addEventListener("scroll",E,{passive:!0}),()=>{x&&cancelAnimationFrame(x),window.removeEventListener("scroll",E),N&&N.removeEventListener("scroll",E)}},[t]),d.useEffect(()=>{if(o.current&&o.current.classList.add("navigating"),["/profile/","/quiz/","/practice/","/play/classic","/settings","/about"].some(N=>t.startsWith(N)))window.scrollTo(0,0),o.current&&(o.current.scrollTop=0),setTimeout(()=>{o.current&&o.current.classList.remove("navigating")},20);else{const N=r.current[t];if(console.log(`Attempting to restore scroll for ${t}: ${N}`),N!=null&&N>0){const T=(S=0)=>{S>=5||(o.current?(o.current.scrollTop=N,setTimeout(()=>{var w;const g=((w=o.current)==null?void 0:w.scrollTop)||0;Math.abs(g-N)>10?(window.scrollTo(0,N),setTimeout(()=>{const k=window.scrollY||window.pageYOffset||0;console.log(`Restore attempt ${S+1}: main=${g}, window=${k}, target=${N}`),Math.abs(k-N)>10&&Math.abs(g-N)>10&&T(S+1)},20)):console.log(`Successfully restored scroll to ${g}`)},20)):window.scrollTo(0,N))};T(0),setTimeout(()=>{o.current&&o.current.classList.remove("navigating")},20)}else window.scrollTo(0,0),o.current&&(o.current.scrollTop=0),setTimeout(()=>{o.current&&o.current.classList.remove("navigating")},20)}},[t]);const[c,u]=d.useState(!1),[f,p]=d.useState({open:!1,go:null}),[h,b]=d.useState(!1);d.useEffect(()=>{const x=()=>{b(document.body.classList.contains("hide-bottom-nav"))};x();const E=new MutationObserver(x);return E.observe(document.body,{attributes:!0,attributeFilter:["class"]}),()=>E.disconnect()},[]),d.useEffect(()=>{const x=new MutationObserver(()=>{u(document.body.classList.contains("modal-open"))});return x.observe(document.body,{attributes:!0,attributeFilter:["class"]}),()=>x.disconnect()},[]);const j=c||h||[/^\/quiz\//,/^\/practice\//,/^\/profile\//,/^\/play\/classic/].some(x=>x.test(t)),C=x=>x==="/"?t==="/":t.startsWith(x),y=d.useCallback(()=>{console.log("Scrolling to top"),window.scrollTo({top:0,behavior:"smooth"}),o.current&&o.current.scrollTo({top:0,behavior:"smooth"}),document.documentElement.scrollTop=0,document.body.scrollTop=0},[]),m=({path:x,icon:E,label:N,emoji:T})=>{const S=C(x),[g,w]=d.useState(!1),k=d.useCallback(()=>{var Q;const P=Date.now();if(S){const U=s.current[x]||0;console.log(`Active tab clicked. Time since last tap: ${P-U}ms`),P-U<500?(console.log("Double tap detected!"),y(),l("double"),s.current[x]=0):s.current[x]=P;return}if(["/","/play","/swipe","/profile"].includes(t)){const U=((Q=o.current)==null?void 0:Q.scrollTop)||0,B=window.scrollY||window.pageYOffset||0,_=U>0?U:B;console.log(`Manually saving scroll before navigation from ${t}: ${_}`),r.current[t]=_}const F=s.current[x]||0;if(P-F<500){console.log("Double tap on inactive tab - navigating and scrolling to top"),r.current[x]=0,x==="/play"?(i(!0),l("double"),setTimeout(()=>{e(`/play?view=modes&reset=${Date.now()}`),i(!1),setTimeout(y,100)},200)):(l("double"),e(x),setTimeout(y,100)),s.current[x]=0;return}s.current[x]=P,w(!0),setTimeout(()=>w(!1),600);const Y=()=>{if(x==="/play"){i(!0),l("heavy"),setTimeout(()=>{e(`/play?view=modes&reset=${Date.now()}`),i(!1)},200);return}l("medium"),e(x)};if(localStorage.getItem("qp_in_question")==="true"){p({open:!0,go:Y});return}Y()},[S,x,t,e,y,l]);return n.jsxs("button",{type:"button",onClick:k,className:`group relative flex h-14 w-20 flex-col items-center justify-center rounded-xl transition-all
          ${S?"scale-110":"scale-100 hover:scale-105"}
          ${g?"animate-bounce":""}`,"aria-current":S?"page":void 0,children:[S&&n.jsxs(n.Fragment,{children:[n.jsx("span",{className:"absolute -top-2 h-1.5 w-10 rounded-full bg-gradient-to-r from-transparent via-white to-transparent opacity-60"}),n.jsx("div",{className:"absolute inset-0 rounded-xl bg-white/10 blur-xl"})]}),n.jsx("div",{className:`leading-none text-2xl transition-transform ${S?"scale-125":""} ${x==="/play"&&a?"animate-spin":""}`,children:T||E}),n.jsx("span",{className:`mt-1 text-[10px] font-medium transition-all ${S?"text-white":"text-base-muted/80"}`,children:N})]})};return n.jsxs("div",{className:"min-h-screen bg-base-bg text-base-text",children:[n.jsx("style",{children:`
        .hide-bottom-nav nav[role="navigation"] {
         display: none !important;
        }
        main.navigating {
          visibility: hidden;
        }
        main {
          scroll-behavior: auto !important;
        }
      `}),n.jsx("main",{ref:o,className:"mx-auto w-full max-w-none px-1 sm:px-3 md:px-4 overscroll-y-contain",style:{height:j||document.body.classList.contains("hide-bottom-nav")?"100dvh":"calc(100dvh - (5.5rem + env(safe-area-inset-bottom)))",paddingTop:"calc(env(safe-area-inset-top) + 12px)",paddingBottom:j||document.body.classList.contains("hide-bottom-nav")?0:void 0,overflowY:"auto"},children:n.jsx(ix,{})}),f.open&&n.jsxs("div",{className:"fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center px-6",style:{animation:"fadeIn 0.2s ease-out"},children:[n.jsxs("div",{className:"w-full max-w-sm rounded-3xl bg-gradient-to-b from-base-card to-base-card/90 border border-base-border p-6 text-center shadow-2xl",style:{animation:"slideUp 0.3s ease-out"},children:[n.jsx("div",{className:"text-5xl mb-4",style:{animation:"bounce 0.6s ease-out"},children:"😟"}),n.jsx("div",{className:"text-xl font-bold mb-2 bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent",children:"Leave the game?"}),n.jsx("p",{className:"text-base-muted mb-6 text-sm",children:"You'll lose your current progress!"}),n.jsxs("div",{className:"flex gap-3",children:[n.jsx("button",{onClick:()=>{l("medium"),p({open:!1,go:null})},className:"flex-1 py-3 rounded-2xl border-2 border-green-500/30 bg-green-500/10 hover:bg-green-500/20 transition-all font-semibold text-green-400",children:"Keep Playing! 🎮"}),n.jsx("button",{onClick:()=>{l("heavy");const x=f.go;p({open:!1,go:null}),x==null||x()},className:"flex-1 py-3 rounded-2xl bg-gradient-to-r from-red-500/80 to-orange-500/80 text-white font-semibold hover:from-red-500 hover:to-orange-500 transition-all",children:"Leave 👋"})]})]}),n.jsx("style",{children:`
            @keyframes fadeIn {
              from { opacity: 0; }
              to { opacity: 1; }
            }
            @keyframes slideUp {
              from { transform: translateY(20px); opacity: 0; }
              to { transform: translateY(0); opacity: 1; }
            }
          `})]}),!j&&n.jsxs("nav",{role:"navigation","aria-label":"Bottom navigation",className:"fixed inset-x-0 bottom-0 z-50",children:[n.jsx("div",{className:"absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0B0F1A] to-[#0B0F1A]/95 backdrop-blur-lg",style:{height:"calc(5.5rem + env(safe-area-inset-bottom))"},"aria-hidden":!0}),n.jsx("div",{className:"relative mx-auto max-w-md px-4 pb-[calc(env(safe-area-inset-bottom)+0.5rem)] pt-2",children:n.jsxs("div",{className:"relative",children:[n.jsx("div",{className:"absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-green-500/20 blur-2xl"}),n.jsxs("div",{className:"relative flex h-[72px] items-center justify-around rounded-3xl border border-white/10 bg-gradient-to-b from-base-card/95 to-base-card/80 shadow-2xl backdrop-blur-xl",children:[n.jsx(m,{path:"/",emoji:"🏠",label:"Home"}),n.jsx(m,{path:"/play",icon:n.jsx(qx,{size:26,spinning:a}),label:"Play"}),n.jsx(m,{path:"/swipe",emoji:"📚",label:"Swipe"}),n.jsx(m,{path:"/profile",emoji:"👤",label:"Profile"})]})]})})]})]})}function li(){return li=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var s in r)({}).hasOwnProperty.call(r,s)&&(e[s]=r[s])}return e},li.apply(null,arguments)}function Yx(e,t){if(e==null)return{};var r={};for(var s in e)if({}.hasOwnProperty.call(e,s)){if(t.indexOf(s)!==-1)continue;r[s]=e[s]}return r}function Wx(e){d.useEffect(e,[])}var Hx=["id","volume","playbackRate","soundEnabled","interrupt","onload"];function Ft(e,t){var r=t===void 0?{}:t,s=r.volume,a=s===void 0?1:s,i=r.playbackRate,o=i===void 0?1:i,l=r.soundEnabled,c=l===void 0?!0:l,u=r.interrupt,f=u===void 0?!1:u,p=r.onload,h=Yx(r,Hx),b=gt.useRef(null),v=gt.useRef(!1),j=gt.useState(null),C=j[0],y=j[1],m=gt.useState(null),x=m[0],E=m[1],N=function(){typeof p=="function"&&p.call(this),v.current&&y(this.duration()*1e3),E(this)};Wx(function(){return tc(()=>import("./howler-669ee863.js").then(k=>k.h),[]).then(function(k){if(!v.current){var P;b.current=(P=k.Howl)!==null&&P!==void 0?P:k.default.Howl,v.current=!0,new b.current(li({src:Array.isArray(e)?e:[e],volume:a,rate:o,onload:N},h))}}),function(){v.current=!1}}),gt.useEffect(function(){b.current&&x&&E(new b.current(li({src:Array.isArray(e)?e:[e],volume:a,onload:N},h)))},[JSON.stringify(e)]),gt.useEffect(function(){x&&(x.volume(a),h.sprite||x.rate(o))},[x,a,o]);var T=gt.useCallback(function(k){typeof k>"u"&&(k={}),!(!x||!c&&!k.forceSoundEnabled)&&(f&&x.stop(),k.playbackRate&&x.rate(k.playbackRate),x.play(k.id))},[x,c,f]),S=gt.useCallback(function(k){x&&x.stop(k)},[x]),g=gt.useCallback(function(k){x&&x.pause(k)},[x]),w=[T,{sound:x,stop:S,pause:g,duration:C}];return w}var Cm={exports:{}};/* @license
Papa Parse
v5.5.3
https://github.com/mholt/PapaParse
License: MIT
*/(function(e,t){((r,s)=>{e.exports=s()})(Om,function r(){var s=typeof self<"u"?self:typeof window<"u"?window:s!==void 0?s:{},a,i=!s.document&&!!s.postMessage,o=s.IS_PAPA_WORKER||!1,l={},c=0,u={};function f(g){this._handle=null,this._finished=!1,this._completed=!1,this._halted=!1,this._input=null,this._baseIndex=0,this._partialLine="",this._rowCount=0,this._start=0,this._nextChunk=null,this.isFirstChunk=!0,this._completeResults={data:[],errors:[],meta:{}},(function(w){var k=N(w);k.chunkSize=parseInt(k.chunkSize),w.step||w.chunk||(k.chunkSize=null),this._handle=new j(k),(this._handle.streamer=this)._config=k}).call(this,g),this.parseChunk=function(w,k){var P=parseInt(this._config.skipFirstNLines)||0;if(this.isFirstChunk&&0<P){let Y=this._config.newline;Y||(F=this._config.quoteChar||'"',Y=this._handle.guessLineEndings(w,F)),w=[...w.split(Y).slice(P)].join(Y)}this.isFirstChunk&&S(this._config.beforeFirstChunk)&&(F=this._config.beforeFirstChunk(w))!==void 0&&(w=F),this.isFirstChunk=!1,this._halted=!1;var P=this._partialLine+w,F=(this._partialLine="",this._handle.parse(P,this._baseIndex,!this._finished));if(!this._handle.paused()&&!this._handle.aborted()){if(w=F.meta.cursor,P=(this._finished||(this._partialLine=P.substring(w-this._baseIndex),this._baseIndex=w),F&&F.data&&(this._rowCount+=F.data.length),this._finished||this._config.preview&&this._rowCount>=this._config.preview),o)s.postMessage({results:F,workerId:u.WORKER_ID,finished:P});else if(S(this._config.chunk)&&!k){if(this._config.chunk(F,this._handle),this._handle.paused()||this._handle.aborted())return void(this._halted=!0);this._completeResults=F=void 0}return this._config.step||this._config.chunk||(this._completeResults.data=this._completeResults.data.concat(F.data),this._completeResults.errors=this._completeResults.errors.concat(F.errors),this._completeResults.meta=F.meta),this._completed||!P||!S(this._config.complete)||F&&F.meta.aborted||(this._config.complete(this._completeResults,this._input),this._completed=!0),P||F&&F.meta.paused||this._nextChunk(),F}this._halted=!0},this._sendError=function(w){S(this._config.error)?this._config.error(w):o&&this._config.error&&s.postMessage({workerId:u.WORKER_ID,error:w,finished:!1})}}function p(g){var w;(g=g||{}).chunkSize||(g.chunkSize=u.RemoteChunkSize),f.call(this,g),this._nextChunk=i?function(){this._readChunk(),this._chunkLoaded()}:function(){this._readChunk()},this.stream=function(k){this._input=k,this._nextChunk()},this._readChunk=function(){if(this._finished)this._chunkLoaded();else{if(w=new XMLHttpRequest,this._config.withCredentials&&(w.withCredentials=this._config.withCredentials),i||(w.onload=T(this._chunkLoaded,this),w.onerror=T(this._chunkError,this)),w.open(this._config.downloadRequestBody?"POST":"GET",this._input,!i),this._config.downloadRequestHeaders){var k,P=this._config.downloadRequestHeaders;for(k in P)w.setRequestHeader(k,P[k])}var F;this._config.chunkSize&&(F=this._start+this._config.chunkSize-1,w.setRequestHeader("Range","bytes="+this._start+"-"+F));try{w.send(this._config.downloadRequestBody)}catch(Y){this._chunkError(Y.message)}i&&w.status===0&&this._chunkError()}},this._chunkLoaded=function(){w.readyState===4&&(w.status<200||400<=w.status?this._chunkError():(this._start+=this._config.chunkSize||w.responseText.length,this._finished=!this._config.chunkSize||this._start>=(k=>(k=k.getResponseHeader("Content-Range"))!==null?parseInt(k.substring(k.lastIndexOf("/")+1)):-1)(w),this.parseChunk(w.responseText)))},this._chunkError=function(k){k=w.statusText||k,this._sendError(new Error(k))}}function h(g){(g=g||{}).chunkSize||(g.chunkSize=u.LocalChunkSize),f.call(this,g);var w,k,P=typeof FileReader<"u";this.stream=function(F){this._input=F,k=F.slice||F.webkitSlice||F.mozSlice,P?((w=new FileReader).onload=T(this._chunkLoaded,this),w.onerror=T(this._chunkError,this)):w=new FileReaderSync,this._nextChunk()},this._nextChunk=function(){this._finished||this._config.preview&&!(this._rowCount<this._config.preview)||this._readChunk()},this._readChunk=function(){var F=this._input,Y=(this._config.chunkSize&&(Y=Math.min(this._start+this._config.chunkSize,this._input.size),F=k.call(F,this._start,Y)),w.readAsText(F,this._config.encoding));P||this._chunkLoaded({target:{result:Y}})},this._chunkLoaded=function(F){this._start+=this._config.chunkSize,this._finished=!this._config.chunkSize||this._start>=this._input.size,this.parseChunk(F.target.result)},this._chunkError=function(){this._sendError(w.error)}}function b(g){var w;f.call(this,g=g||{}),this.stream=function(k){return w=k,this._nextChunk()},this._nextChunk=function(){var k,P;if(!this._finished)return k=this._config.chunkSize,w=k?(P=w.substring(0,k),w.substring(k)):(P=w,""),this._finished=!w,this.parseChunk(P)}}function v(g){f.call(this,g=g||{});var w=[],k=!0,P=!1;this.pause=function(){f.prototype.pause.apply(this,arguments),this._input.pause()},this.resume=function(){f.prototype.resume.apply(this,arguments),this._input.resume()},this.stream=function(F){this._input=F,this._input.on("data",this._streamData),this._input.on("end",this._streamEnd),this._input.on("error",this._streamError)},this._checkIsFinished=function(){P&&w.length===1&&(this._finished=!0)},this._nextChunk=function(){this._checkIsFinished(),w.length?this.parseChunk(w.shift()):k=!0},this._streamData=T(function(F){try{w.push(typeof F=="string"?F:F.toString(this._config.encoding)),k&&(k=!1,this._checkIsFinished(),this.parseChunk(w.shift()))}catch(Y){this._streamError(Y)}},this),this._streamError=T(function(F){this._streamCleanUp(),this._sendError(F)},this),this._streamEnd=T(function(){this._streamCleanUp(),P=!0,this._streamData("")},this),this._streamCleanUp=T(function(){this._input.removeListener("data",this._streamData),this._input.removeListener("end",this._streamEnd),this._input.removeListener("error",this._streamError)},this)}function j(g){var w,k,P,F,Y=Math.pow(2,53),ee=-Y,Q=/^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/,U=/^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/,B=this,_=0,M=0,q=!1,D=!1,L=[],A={data:[],errors:[],meta:{}};function H(I){return g.skipEmptyLines==="greedy"?I.join("").trim()==="":I.length===1&&I[0].length===0}function re(){if(A&&P&&(O("Delimiter","UndetectableDelimiter","Unable to auto-detect delimiting character; defaulted to '"+u.DefaultDelimiter+"'"),P=!1),g.skipEmptyLines&&(A.data=A.data.filter(function($){return!H($)})),J()){let $=function(Z,ie){S(g.transformHeader)&&(Z=g.transformHeader(Z,ie)),L.push(Z)};if(A)if(Array.isArray(A.data[0])){for(var I=0;J()&&I<A.data.length;I++)A.data[I].forEach($);A.data.splice(0,1)}else A.data.forEach($)}function W($,Z){for(var ie=g.header?{}:[],de=0;de<$.length;de++){var te=de,ne=$[de],ne=((K,R)=>(G=>(g.dynamicTypingFunction&&g.dynamicTyping[G]===void 0&&(g.dynamicTyping[G]=g.dynamicTypingFunction(G)),(g.dynamicTyping[G]||g.dynamicTyping)===!0))(K)?R==="true"||R==="TRUE"||R!=="false"&&R!=="FALSE"&&((G=>{if(Q.test(G)&&(G=parseFloat(G),ee<G&&G<Y))return 1})(R)?parseFloat(R):U.test(R)?new Date(R):R===""?null:R):R)(te=g.header?de>=L.length?"__parsed_extra":L[de]:te,ne=g.transform?g.transform(ne,te):ne);te==="__parsed_extra"?(ie[te]=ie[te]||[],ie[te].push(ne)):ie[te]=ne}return g.header&&(de>L.length?O("FieldMismatch","TooManyFields","Too many fields: expected "+L.length+" fields but parsed "+de,M+Z):de<L.length&&O("FieldMismatch","TooFewFields","Too few fields: expected "+L.length+" fields but parsed "+de,M+Z)),ie}var z;A&&(g.header||g.dynamicTyping||g.transform)&&(z=1,!A.data.length||Array.isArray(A.data[0])?(A.data=A.data.map(W),z=A.data.length):A.data=W(A.data,0),g.header&&A.meta&&(A.meta.fields=L),M+=z)}function J(){return g.header&&L.length===0}function O(I,W,z,$){I={type:I,code:W,message:z},$!==void 0&&(I.row=$),A.errors.push(I)}S(g.step)&&(F=g.step,g.step=function(I){A=I,J()?re():(re(),A.data.length!==0&&(_+=I.data.length,g.preview&&_>g.preview?k.abort():(A.data=A.data[0],F(A,B))))}),this.parse=function(I,W,z){var $=g.quoteChar||'"',$=(g.newline||(g.newline=this.guessLineEndings(I,$)),P=!1,g.delimiter?S(g.delimiter)&&(g.delimiter=g.delimiter(I),A.meta.delimiter=g.delimiter):(($=((Z,ie,de,te,ne)=>{var K,R,G,ce;ne=ne||[",","	","|",";",u.RECORD_SEP,u.UNIT_SEP];for(var pe=0;pe<ne.length;pe++){for(var me,$e=ne[pe],he=0,ke=0,ve=0,xe=(G=void 0,new y({comments:te,delimiter:$e,newline:ie,preview:10}).parse(Z)),ye=0;ye<xe.data.length;ye++)de&&H(xe.data[ye])?ve++:(me=xe.data[ye].length,ke+=me,G===void 0?G=me:0<me&&(he+=Math.abs(me-G),G=me));0<xe.data.length&&(ke/=xe.data.length-ve),(R===void 0||he<=R)&&(ce===void 0||ce<ke)&&1.99<ke&&(R=he,K=$e,ce=ke)}return{successful:!!(g.delimiter=K),bestDelimiter:K}})(I,g.newline,g.skipEmptyLines,g.comments,g.delimitersToGuess)).successful?g.delimiter=$.bestDelimiter:(P=!0,g.delimiter=u.DefaultDelimiter),A.meta.delimiter=g.delimiter),N(g));return g.preview&&g.header&&$.preview++,w=I,k=new y($),A=k.parse(w,W,z),re(),q?{meta:{paused:!0}}:A||{meta:{paused:!1}}},this.paused=function(){return q},this.pause=function(){q=!0,k.abort(),w=S(g.chunk)?"":w.substring(k.getCharIndex())},this.resume=function(){B.streamer._halted?(q=!1,B.streamer.parseChunk(w,!0)):setTimeout(B.resume,3)},this.aborted=function(){return D},this.abort=function(){D=!0,k.abort(),A.meta.aborted=!0,S(g.complete)&&g.complete(A),w=""},this.guessLineEndings=function(Z,$){Z=Z.substring(0,1048576);var $=new RegExp(C($)+"([^]*?)"+C($),"gm"),z=(Z=Z.replace($,"")).split("\r"),$=Z.split(`
`),Z=1<$.length&&$[0].length<z[0].length;if(z.length===1||Z)return`
`;for(var ie=0,de=0;de<z.length;de++)z[de][0]===`
`&&ie++;return ie>=z.length/2?`\r
`:"\r"}}function C(g){return g.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function y(g){var w=(g=g||{}).delimiter,k=g.newline,P=g.comments,F=g.step,Y=g.preview,ee=g.fastMode,Q=null,U=!1,B=g.quoteChar==null?'"':g.quoteChar,_=B;if(g.escapeChar!==void 0&&(_=g.escapeChar),(typeof w!="string"||-1<u.BAD_DELIMITERS.indexOf(w))&&(w=","),P===w)throw new Error("Comment character same as delimiter");P===!0?P="#":(typeof P!="string"||-1<u.BAD_DELIMITERS.indexOf(P))&&(P=!1),k!==`
`&&k!=="\r"&&k!==`\r
`&&(k=`
`);var M=0,q=!1;this.parse=function(D,L,A){if(typeof D!="string")throw new Error("Input must be a string");var H=D.length,re=w.length,J=k.length,O=P.length,I=S(F),W=[],z=[],$=[],Z=M=0;if(!D)return he();if(ee||ee!==!1&&D.indexOf(B)===-1){for(var ie=D.split(k),de=0;de<ie.length;de++){if($=ie[de],M+=$.length,de!==ie.length-1)M+=k.length;else if(A)return he();if(!P||$.substring(0,O)!==P){if(I){if(W=[],ce($.split(w)),ke(),q)return he()}else ce($.split(w));if(Y&&Y<=de)return W=W.slice(0,Y),he(!0)}}return he()}for(var te=D.indexOf(w,M),ne=D.indexOf(k,M),K=new RegExp(C(_)+C(B),"g"),R=D.indexOf(B,M);;)if(D[M]===B)for(R=M,M++;;){if((R=D.indexOf(B,R+1))===-1)return A||z.push({type:"Quotes",code:"MissingQuotes",message:"Quoted field unterminated",row:W.length,index:M}),me();if(R===H-1)return me(D.substring(M,R).replace(K,B));if(B===_&&D[R+1]===_)R++;else if(B===_||R===0||D[R-1]!==_){te!==-1&&te<R+1&&(te=D.indexOf(w,R+1));var G=pe((ne=ne!==-1&&ne<R+1?D.indexOf(k,R+1):ne)===-1?te:Math.min(te,ne));if(D.substr(R+1+G,re)===w){$.push(D.substring(M,R).replace(K,B)),D[M=R+1+G+re]!==B&&(R=D.indexOf(B,M)),te=D.indexOf(w,M),ne=D.indexOf(k,M);break}if(G=pe(ne),D.substring(R+1+G,R+1+G+J)===k){if($.push(D.substring(M,R).replace(K,B)),$e(R+1+G+J),te=D.indexOf(w,M),R=D.indexOf(B,M),I&&(ke(),q))return he();if(Y&&W.length>=Y)return he(!0);break}z.push({type:"Quotes",code:"InvalidQuotes",message:"Trailing quote on quoted field is malformed",row:W.length,index:M}),R++}}else if(P&&$.length===0&&D.substring(M,M+O)===P){if(ne===-1)return he();M=ne+J,ne=D.indexOf(k,M),te=D.indexOf(w,M)}else if(te!==-1&&(te<ne||ne===-1))$.push(D.substring(M,te)),M=te+re,te=D.indexOf(w,M);else{if(ne===-1)break;if($.push(D.substring(M,ne)),$e(ne+J),I&&(ke(),q))return he();if(Y&&W.length>=Y)return he(!0)}return me();function ce(ve){W.push(ve),Z=M}function pe(ve){var xe=0;return xe=ve!==-1&&(ve=D.substring(R+1,ve))&&ve.trim()===""?ve.length:xe}function me(ve){return A||(ve===void 0&&(ve=D.substring(M)),$.push(ve),M=H,ce($),I&&ke()),he()}function $e(ve){M=ve,ce($),$=[],ne=D.indexOf(k,M)}function he(ve){if(g.header&&!L&&W.length&&!U){var xe=W[0],ye=Object.create(null),ht=new Set(xe);let Qt=!1;for(let at=0;at<xe.length;at++){let Ne=xe[at];if(ye[Ne=S(g.transformHeader)?g.transformHeader(Ne,at):Ne]){let ze,At=ye[Ne];for(;ze=Ne+"_"+At,At++,ht.has(ze););ht.add(ze),xe[at]=ze,ye[Ne]++,Qt=!0,(Q=Q===null?{}:Q)[ze]=Ne}else ye[Ne]=1,xe[at]=Ne;ht.add(Ne)}Qt&&console.warn("Duplicate headers found and renamed."),U=!0}return{data:W,errors:z,meta:{delimiter:w,linebreak:k,aborted:q,truncated:!!ve,cursor:Z+(L||0),renamedHeaders:Q}}}function ke(){F(he()),W=[],z=[]}},this.abort=function(){q=!0},this.getCharIndex=function(){return M}}function m(g){var w=g.data,k=l[w.workerId],P=!1;if(w.error)k.userError(w.error,w.file);else if(w.results&&w.results.data){var F={abort:function(){P=!0,x(w.workerId,{data:[],errors:[],meta:{aborted:!0}})},pause:E,resume:E};if(S(k.userStep)){for(var Y=0;Y<w.results.data.length&&(k.userStep({data:w.results.data[Y],errors:w.results.errors,meta:w.results.meta},F),!P);Y++);delete w.results}else S(k.userChunk)&&(k.userChunk(w.results,F,w.file),delete w.results)}w.finished&&!P&&x(w.workerId,w.results)}function x(g,w){var k=l[g];S(k.userComplete)&&k.userComplete(w),k.terminate(),delete l[g]}function E(){throw new Error("Not implemented.")}function N(g){if(typeof g!="object"||g===null)return g;var w,k=Array.isArray(g)?[]:{};for(w in g)k[w]=N(g[w]);return k}function T(g,w){return function(){g.apply(w,arguments)}}function S(g){return typeof g=="function"}return u.parse=function(g,w){var k=(w=w||{}).dynamicTyping||!1;if(S(k)&&(w.dynamicTypingFunction=k,k={}),w.dynamicTyping=k,w.transform=!!S(w.transform)&&w.transform,!w.worker||!u.WORKERS_SUPPORTED)return k=null,u.NODE_STREAM_INPUT,typeof g=="string"?(g=(P=>P.charCodeAt(0)!==65279?P:P.slice(1))(g),k=new(w.download?p:b)(w)):g.readable===!0&&S(g.read)&&S(g.on)?k=new v(w):(s.File&&g instanceof File||g instanceof Object)&&(k=new h(w)),k.stream(g);(k=(()=>{var P;return!!u.WORKERS_SUPPORTED&&(P=(()=>{var F=s.URL||s.webkitURL||null,Y=r.toString();return u.BLOB_URL||(u.BLOB_URL=F.createObjectURL(new Blob(["var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; ","(",Y,")();"],{type:"text/javascript"})))})(),(P=new s.Worker(P)).onmessage=m,P.id=c++,l[P.id]=P)})()).userStep=w.step,k.userChunk=w.chunk,k.userComplete=w.complete,k.userError=w.error,w.step=S(w.step),w.chunk=S(w.chunk),w.complete=S(w.complete),w.error=S(w.error),delete w.worker,k.postMessage({input:g,config:w,workerId:k.id})},u.unparse=function(g,w){var k=!1,P=!0,F=",",Y=`\r
`,ee='"',Q=ee+ee,U=!1,B=null,_=!1,M=((()=>{if(typeof w=="object"){if(typeof w.delimiter!="string"||u.BAD_DELIMITERS.filter(function(L){return w.delimiter.indexOf(L)!==-1}).length||(F=w.delimiter),typeof w.quotes!="boolean"&&typeof w.quotes!="function"&&!Array.isArray(w.quotes)||(k=w.quotes),typeof w.skipEmptyLines!="boolean"&&typeof w.skipEmptyLines!="string"||(U=w.skipEmptyLines),typeof w.newline=="string"&&(Y=w.newline),typeof w.quoteChar=="string"&&(ee=w.quoteChar),typeof w.header=="boolean"&&(P=w.header),Array.isArray(w.columns)){if(w.columns.length===0)throw new Error("Option columns is empty");B=w.columns}w.escapeChar!==void 0&&(Q=w.escapeChar+ee),w.escapeFormulae instanceof RegExp?_=w.escapeFormulae:typeof w.escapeFormulae=="boolean"&&w.escapeFormulae&&(_=/^[=+\-@\t\r].*$/)}})(),new RegExp(C(ee),"g"));if(typeof g=="string"&&(g=JSON.parse(g)),Array.isArray(g)){if(!g.length||Array.isArray(g[0]))return q(null,g,U);if(typeof g[0]=="object")return q(B||Object.keys(g[0]),g,U)}else if(typeof g=="object")return typeof g.data=="string"&&(g.data=JSON.parse(g.data)),Array.isArray(g.data)&&(g.fields||(g.fields=g.meta&&g.meta.fields||B),g.fields||(g.fields=Array.isArray(g.data[0])?g.fields:typeof g.data[0]=="object"?Object.keys(g.data[0]):[]),Array.isArray(g.data[0])||typeof g.data[0]=="object"||(g.data=[g.data])),q(g.fields||[],g.data||[],U);throw new Error("Unable to serialize unrecognized input");function q(L,A,H){var re="",J=(typeof L=="string"&&(L=JSON.parse(L)),typeof A=="string"&&(A=JSON.parse(A)),Array.isArray(L)&&0<L.length),O=!Array.isArray(A[0]);if(J&&P){for(var I=0;I<L.length;I++)0<I&&(re+=F),re+=D(L[I],I);0<A.length&&(re+=Y)}for(var W=0;W<A.length;W++){var z=(J?L:A[W]).length,$=!1,Z=J?Object.keys(A[W]).length===0:A[W].length===0;if(H&&!J&&($=H==="greedy"?A[W].join("").trim()==="":A[W].length===1&&A[W][0].length===0),H==="greedy"&&J){for(var ie=[],de=0;de<z;de++){var te=O?L[de]:de;ie.push(A[W][te])}$=ie.join("").trim()===""}if(!$){for(var ne=0;ne<z;ne++){0<ne&&!Z&&(re+=F);var K=J&&O?L[ne]:ne;re+=D(A[W][K],ne)}W<A.length-1&&(!H||0<z&&!Z)&&(re+=Y)}}return re}function D(L,A){var H,re;return L==null?"":L.constructor===Date?JSON.stringify(L).slice(1,25):(re=!1,_&&typeof L=="string"&&_.test(L)&&(L="'"+L,re=!0),H=L.toString().replace(M,Q),(re=re||k===!0||typeof k=="function"&&k(L,A)||Array.isArray(k)&&k[A]||((J,O)=>{for(var I=0;I<O.length;I++)if(-1<J.indexOf(O[I]))return!0;return!1})(H,u.BAD_DELIMITERS)||-1<H.indexOf(F)||H.charAt(0)===" "||H.charAt(H.length-1)===" ")?ee+H+ee:H)}},u.RECORD_SEP=String.fromCharCode(30),u.UNIT_SEP=String.fromCharCode(31),u.BYTE_ORDER_MARK="\uFEFF",u.BAD_DELIMITERS=["\r",`
`,'"',u.BYTE_ORDER_MARK],u.WORKERS_SUPPORTED=!i&&!!s.Worker,u.NODE_STREAM_INPUT=1,u.LocalChunkSize=10485760,u.RemoteChunkSize=5242880,u.DefaultDelimiter=",",u.Parser=y,u.ParserHandle=j,u.NetworkStreamer=p,u.FileStreamer=h,u.StringStreamer=b,u.ReadableStreamStreamer=v,s.jQuery&&((a=s.jQuery).fn.parse=function(g){var w=g.config||{},k=[];return this.each(function(Y){if(!(a(this).prop("tagName").toUpperCase()==="INPUT"&&a(this).attr("type").toLowerCase()==="file"&&s.FileReader)||!this.files||this.files.length===0)return!0;for(var ee=0;ee<this.files.length;ee++)k.push({file:this.files[ee],inputElem:this,instanceConfig:a.extend({},w)})}),P(),this;function P(){if(k.length===0)S(g.complete)&&g.complete();else{var Y,ee,Q,U,B=k[0];if(S(g.before)){var _=g.before(B.file,B.inputElem);if(typeof _=="object"){if(_.action==="abort")return Y="AbortError",ee=B.file,Q=B.inputElem,U=_.reason,void(S(g.error)&&g.error({name:Y},ee,Q,U));if(_.action==="skip")return void F();typeof _.config=="object"&&(B.instanceConfig=a.extend(B.instanceConfig,_.config))}else if(_==="skip")return void F()}var M=B.instanceConfig.complete;B.instanceConfig.complete=function(q){S(M)&&M(q,B.file,B.inputElem),F()},u.parse(B.file,B.instanceConfig)}}function F(){k.splice(0,1),P()}}),o&&(s.onmessage=function(g){g=g.data,u.WORKER_ID===void 0&&g&&(u.WORKER_ID=g.workerId),typeof g.input=="string"?s.postMessage({workerId:u.WORKER_ID,results:u.parse(g.input,g.config),finished:!0}):(s.File&&g.input instanceof File||g.input instanceof Object)&&(g=u.parse(g.input,g.config))&&s.postMessage({workerId:u.WORKER_ID,results:g,finished:!0})}),(p.prototype=Object.create(f.prototype)).constructor=p,(h.prototype=Object.create(f.prototype)).constructor=h,(b.prototype=Object.create(b.prototype)).constructor=b,(v.prototype=Object.create(f.prototype)).constructor=v,u})})(Cm);var Gx=Cm.exports;const hr=Xd(Gx);function Ei({startRect:e,targetRef:t,count:r=12,onDone:s}){return d.useEffect(()=>{const a=t==null?void 0:t.current;if(!e||!a){s==null||s();return}const i=a.getBoundingClientRect(),o=document.createElement("div");o.style.position="fixed",o.style.inset="0",o.style.pointerEvents="none",o.style.zIndex="9999",document.body.appendChild(o);const l=i.left+i.width/2,c=i.top+i.height/2,u=e.left+e.width/2,f=e.top+e.height/2,p=200;let h=0;function b(v){const j=document.createElement("div");j.textContent="🪙",Object.assign(j.style,{position:"fixed",left:"0px",top:"0px",zIndex:"10000",pointerEvents:"none",fontSize:"22px",opacity:"1",willChange:"transform, opacity",transform:"translate(0px, 0px)"});const C=u,y=f,m=l,x=c;j.style.transform=`translate(${C}px, ${y}px) scale(1)`,o.appendChild(j),j.getBoundingClientRect(),j.style.transition=`transform ${p}ms cubic-bezier(.2,.8,.2,1), opacity ${p}ms linear`,requestAnimationFrame(()=>{j.style.transform=`translate(${m}px, ${x}px) scale(.6)`,j.style.opacity="0.1"}),setTimeout(()=>{j.remove(),h+=1,h===r&&(o.remove(),s==null||s())},p+50)}for(let v=0;v<r;v++)setTimeout(()=>b(),v*60);return()=>{try{o.remove()}catch{}}},[e,t,r,s]),null}const ut={XP_PER_CORRECT:10,XP_PER_LEVEL:100,MAX_LEVEL:100,COINS_PER_CORRECT:5,MAX_ENERGY:5,ENERGY_REGEN_TIME:36e5,ENERGY_COST:{quiz:1,practice:0,daily:0},COMBO_MULTIPLIERS:{2:{multiplier:1.2,text:"Nice!"},3:{multiplier:1.5,text:"Great!"},5:{multiplier:2,text:"On Fire!"},10:{multiplier:3,text:"Legendary!"}},AVATARS:[{id:"wizard",emoji:"🧙",name:"Knowledge Wizard",unlocked:!0,bgColor:"from-purple-500 to-indigo-500"},{id:"knight",emoji:"⚔️",name:"Quiz Knight",unlocked:!0,bgColor:"from-blue-500 to-cyan-500"},{id:"explorer",emoji:"🗺️",name:"Fact Explorer",unlockLevel:5,unlocked:!1,bgColor:"from-green-500 to-emerald-500"},{id:"scientist",emoji:"🔬",name:"Science Master",unlockLevel:10,unlocked:!1,bgColor:"from-orange-500 to-red-500"},{id:"artist",emoji:"🎨",name:"Creative Mind",unlockLevel:15,unlocked:!1,bgColor:"from-pink-500 to-rose-500"}],STORAGE_KEYS:{PLAYER:"qp_player",GAME_STATE:"qp_game_state",ENERGY:"qp_energy",CURRENT_COMBO:"qp_combo"}},Td=e=>Math.floor(e/ut.XP_PER_LEVEL)+1,Vx=e=>{const t=e%ut.XP_PER_LEVEL;return{current:t,required:ut.XP_PER_LEVEL,percentage:t/ut.XP_PER_LEVEL*100}};function Xx({player:e,size:t="normal",showLevel:r=!0,showName:s=!0}){const a=ut.AVATARS.find(o=>o.id===e.avatar)||ut.AVATARS[0],i={small:"w-10 h-10 text-xl",normal:"w-14 h-14 text-2xl",large:"w-20 h-20 text-4xl"};return n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsxs("div",{className:"relative",children:[n.jsx("div",{className:`${i[t]} rounded-full bg-gradient-to-br ${a.bgColor} flex items-center justify-center shadow-lg`,children:n.jsx("span",{children:a.emoji})}),r&&n.jsx("div",{className:"absolute -bottom-1 -right-1 bg-yellow-500 text-black text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center border-2 border-base-bg",children:e.level})]}),s&&n.jsxs("div",{children:[n.jsx("div",{className:"font-bold text-sm",children:e.name}),n.jsx("div",{className:"text-xs text-base-muted",children:a.name})]})]})}function Kx({current:e,required:t,level:r,animate:s=!0}){const[a,i]=d.useState(0),o=e/t*100;return d.useEffect(()=>{if(s){const l=setTimeout(()=>{i(o)},100);return()=>clearTimeout(l)}else i(o)},[o,s]),n.jsxs("div",{className:"w-full",children:[n.jsxs("div",{className:"flex justify-between items-center mb-1",children:[n.jsxs("span",{className:"text-xs font-medium",children:["Level ",r]}),n.jsxs("span",{className:"text-xs text-base-muted",children:[e,"/",t," XP"]})]}),n.jsx("div",{className:"h-2 bg-black/20 rounded-full overflow-hidden",children:n.jsx("div",{className:"h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-700 ease-out relative",style:{width:`${a}%`},children:n.jsx("div",{className:"absolute inset-0 bg-white/20 animate-pulse"})})})]})}const Em=[{name:"GK",slug:"general-knowledge",questions:50,icon:"🧠",color:"#FF6B6B",gradient:"from-red-500 to-pink-500"},{name:"Science",slug:"science",questions:45,icon:"🧪",color:"#4ECDC4",gradient:"from-cyan-500 to-teal-500"},{name:"Fun Facts",slug:"fun-facts",questions:30,icon:"🎉",color:"#FFD93D",gradient:"from-yellow-400 to-orange-500"},{name:"History",slug:"history",questions:42,icon:"🏺",color:"#A8E6CF",gradient:"from-green-400 to-emerald-500"},{name:"AI & Tech",slug:"artificial-intelligence",questions:28,icon:"🤖",color:"#C7B8FF",gradient:"from-purple-400 to-indigo-500"},{name:"More",slug:"more",questions:0,icon:"✨",color:"#FF8CC3",gradient:"from-pink-400 to-rose-500"}],Pm=[{name:"Geography",slug:"geography",questions:38,icon:"🗺️",color:"#FACC15",gradient:"from-yellow-400 to-amber-500"},{name:"Computer",slug:"computer",questions:34,icon:"💻",color:"#3B82F6",gradient:"from-blue-400 to-blue-600"},{name:"Aptitude",slug:"aptitude",questions:36,icon:"📐",color:"#EC4899",gradient:"from-pink-500 to-rose-500"},{name:"Iconic Figures",slug:"iconic-figures",questions:26,icon:"🌟",color:"#8B5CF6",gradient:"from-purple-500 to-violet-600"}],Tm=[...Em.filter(e=>e.slug!=="more"),...Pm];function Jx({onClick:e}){return n.jsxs("div",{className:"relative overflow-hidden rounded-3xl p-8 mb-6 cursor-pointer transform transition-all hover:scale-[1.02]",style:{background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",boxShadow:"0 10px 40px rgba(102, 126, 234, 0.3)",animation:"pulse 3s infinite"},onClick:e,children:[n.jsx("div",{className:"absolute top-[-50px] right-[-50px] w-[200px] h-[200px] rounded-full bg-white/10",style:{animation:"float 4s ease-in-out infinite"}}),n.jsx("div",{className:"absolute bottom-[-30px] left-[-30px] w-[150px] h-[150px] rounded-full bg-white/10",style:{animation:"float 4s ease-in-out infinite reverse"}}),n.jsx("h2",{className:"text-3xl font-bold mb-2",children:"🎰 Spin & Win"}),n.jsx("p",{className:"text-base opacity-90 mb-4",children:"Test your luck, win amazing prizes!"}),n.jsx("div",{className:"inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium",style:{background:"linear-gradient(90deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0.3) 100%)",backgroundSize:"200% auto",animation:"shimmer 2s linear infinite"},children:"Play Now →"})]})}function Zx({actions:e}){return n.jsx("div",{className:"grid grid-cols-4 gap-3 mb-8",children:e.map((t,r)=>n.jsxs("button",{onClick:t.action,className:`${t.color} aspect-square rounded-2xl flex flex-col items-center justify-center gap-1 transform transition-all hover:scale-105`,children:[n.jsx("div",{className:"text-2xl",children:t.icon}),n.jsx("div",{className:"text-[10px] font-medium text-white",children:t.label})]},r))})}function eg({categories:e,onCategorySelect:t}){return n.jsxs("div",{className:"mb-6",children:[n.jsx("h3",{className:"text-lg font-bold mb-4",children:"Choose Your Adventure"}),n.jsx("div",{className:"grid grid-cols-3 gap-3",children:e.map(r=>n.jsxs("button",{onClick:()=>t(r),className:`bg-gradient-to-br ${r.gradient} aspect-square rounded-2xl p-4 flex flex-col items-center justify-center gap-2 transform transition-all hover:scale-105 hover:shadow-lg relative`,children:[n.jsx("div",{className:"text-3xl",children:r.icon}),n.jsx("div",{className:"text-xs font-bold text-white text-center",children:r.name}),r.questions>0&&n.jsxs("div",{className:"text-[10px] bg-white/20 px-2 py-0.5 rounded-full",children:[r.questions," Qs"]})]},r.name))})]})}function tg({onClick:e,isPulsing:t}){return n.jsxs("button",{onClick:e,className:`w-full rounded-2xl p-5 flex justify-between items-center transition-all ${t?"bg-green-500/20 border-2 border-green-500 animate-pulse":"bg-white/5 border border-base-border hover:bg-white/10"}`,children:[n.jsxs("div",{className:"flex items-center gap-4",children:[n.jsx("div",{className:"w-12 h-12 bg-gradient-to-br from-green-400 to-teal-500 rounded-xl grid place-items-center text-2xl",children:"📚"}),n.jsxs("div",{className:"text-left",children:[n.jsx("div",{className:"font-medium",children:"Practice Mode"}),n.jsx("div",{className:"text-xs text-base-muted",children:"No timer • No energy cost • Learn at your pace"})]})]}),n.jsx("div",{className:"text-xl",children:"→"})]})}function ng({dailyQ:e,isFlipped:t,picked:r,onAnswer:s,dailyCompleted:a,DAILY_Q_COINS:i,DAILY_Q_XP:o}){return a?n.jsx("div",{className:"rounded-3xl bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/30 p-6 mb-6",children:n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsx("span",{className:"text-3xl",children:"✅"}),n.jsxs("div",{children:[n.jsx("h3",{className:"font-bold",children:"Daily Challenge Complete!"}),n.jsx("p",{className:"text-sm text-base-muted",children:"Come back tomorrow for a new challenge"})]})]})}):e?n.jsx("div",{className:"flip-card mb-6",children:n.jsxs("div",{className:`flip-card-inner ${t?"flipped":""}`,children:[n.jsx("div",{className:"flip-card-front",children:n.jsxs("div",{className:"rounded-3xl bg-white/5 border border-base-border p-6",children:[n.jsxs("div",{className:"flex justify-between items-center mb-4",children:[n.jsx("h3",{className:"text-lg font-bold",children:"🎯 Daily Challenge"}),n.jsxs("span",{className:"px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-xs font-medium",children:["+",i," coins +",o," XP"]})]}),n.jsx("p",{className:"text-sm mb-4 text-base-muted",children:e.prompt}),n.jsx("div",{className:"grid grid-cols-2 gap-3",children:e.options.map((l,c)=>{const u=c===e.answerIndex,f=r===c,p=r!==null;return n.jsx("button",{onClick:h=>s(c,h),disabled:r!==null,className:`p-3 rounded-xl border-2 text-sm font-medium transition-all ${p?u?"border-green-500 bg-green-500/20":f?"border-red-500 bg-red-500/20":"border-base-border bg-white/5":"border-base-border bg-white/5 hover:bg-white/10"} ${r!==null?"cursor-not-allowed":"cursor-pointer"}`,children:l},c)})})]})}),n.jsx("div",{className:"flip-card-back absolute inset-0",children:n.jsxs("div",{className:"rounded-3xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/30 p-6 h-full flex flex-col items-center justify-center",children:[n.jsx("div",{className:"text-6xl mb-4",style:{animation:"float 2s ease-in-out infinite"},children:"🎉"}),n.jsx("h3",{className:"text-2xl font-bold text-green-400 mb-2",children:"Awesome!"}),n.jsxs("p",{className:"text-sm text-base-muted text-center",children:["You've earned ",i," coins & ",o," XP!"]}),n.jsx("p",{className:"text-xs text-base-muted/70 mt-2",children:"Come back tomorrow for more"})]})})]})}):null}function rg({show:e,onClose:t,player:r,changeAvatar:s,GAME_CONSTANTS:a}){return e?n.jsx("div",{className:"fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4",onClick:i=>{i.target===i.currentTarget&&t()},children:n.jsxs("div",{className:"bg-base-card rounded-3xl p-6 w-full max-w-md border border-base-border max-h-[80vh] overflow-y-auto",onClick:i=>i.stopPropagation(),children:[n.jsxs("div",{className:"flex justify-between items-center mb-4",children:[n.jsx("h3",{className:"text-xl font-bold",children:"Choose Your Avatar"}),n.jsx("button",{onClick:t,className:"w-8 h-8 rounded-lg bg-white/5 border border-base-border grid place-items-center hover:bg-white/10 transition",children:"✕"})]}),n.jsx("div",{className:"grid grid-cols-2 gap-4",children:a.AVATARS.map(i=>{const o=!r.unlockedAvatars.includes(i.id),l=r.avatar===i.id;return n.jsxs("button",{onClick:()=>{o||(s(i.id),t())},className:`p-4 rounded-2xl border-2 transition-all ${l?"border-brand-blue bg-brand-blue/20":o?"border-gray-600 bg-gray-800/50 opacity-50":"border-base-border bg-white/5 hover:bg-white/10"}`,disabled:o,children:[n.jsx("div",{className:`text-4xl mb-2 ${o?"grayscale":""}`,children:i.emoji}),n.jsx("div",{className:"text-sm font-medium",children:i.name}),o&&n.jsxs("div",{className:"text-xs text-gray-400 mt-1",children:["Unlock at Level ",i.unlockLevel]}),l&&n.jsx("div",{className:"text-xs text-brand-blue mt-1",children:"Current"})]},i.id)})})]})}):null}function sg({show:e,onClose:t,categories:r,onCategorySelect:s}){return e?n.jsx("div",{className:"fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4",onClick:a=>{a.target===a.currentTarget&&t()},children:n.jsxs("div",{className:"bg-base-card rounded-3xl p-6 w-full max-w-md border border-base-border",onClick:a=>a.stopPropagation(),children:[n.jsxs("div",{className:"flex justify-between items-center mb-4",children:[n.jsx("h3",{className:"text-xl font-bold",children:"More categories"}),n.jsx("button",{onClick:t,className:"w-8 h-8 rounded-lg bg-white/5 border border-base-border grid place-items-center hover:bg-white/10 transition",children:"✕"})]}),n.jsx("div",{className:"grid grid-cols-2 gap-3 mb-4",children:r.map(a=>n.jsxs("button",{onClick:()=>{t(),s(a)},className:`bg-gradient-to-br ${a.gradient} p-4 rounded-2xl flex flex-col items-center gap-2 hover:scale-105 transition-transform relative`,children:[n.jsx("div",{className:"text-3xl",children:a.icon}),n.jsx("div",{className:"text-sm font-bold text-white",children:a.name}),n.jsxs("div",{className:"text-xs text-white/80",children:[a.questions," questions"]})]},a.name))})]})}):null}function ag({show:e,onClose:t,coins:r,onNavigateToPlay:s}){return e?n.jsx("div",{className:"fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4",onClick:a=>{a.target===a.currentTarget&&t()},children:n.jsxs("div",{className:"bg-base-card rounded-3xl p-6 w-full max-w-md border border-base-border relative overflow-hidden",onClick:a=>a.stopPropagation(),children:[n.jsx("div",{className:"absolute inset-0 opacity-10",children:n.jsx("div",{className:"magic-gradient h-full"})}),n.jsxs("div",{className:"relative",children:[n.jsxs("div",{className:"flex items-center justify-between mb-6",children:[n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsx("div",{className:"coin-3d text-5xl",style:{animation:"coinRotate 2s linear infinite, glow 2s ease-in-out infinite"},children:"🪙"}),n.jsxs("div",{children:[n.jsx("h3",{className:"text-2xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent",children:"Your Treasure"}),n.jsxs("p",{className:"text-3xl font-bold text-white mt-1",children:[r," Coins"]})]})]}),n.jsx("button",{onClick:t,className:"w-8 h-8 rounded-lg bg-white/5 border border-base-border grid place-items-center hover:bg-white/10 transition",children:"✕"})]}),n.jsxs("div",{className:"mb-6",children:[n.jsx("h4",{className:"text-sm font-medium text-base-muted mb-3",children:"Ways to Earn"}),n.jsxs("div",{className:"space-y-3",children:[n.jsx("div",{className:"p-4 rounded-xl bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 hover:scale-[1.02] transition-transform",children:n.jsxs("div",{className:"flex items-center justify-between",children:[n.jsxs("div",{children:[n.jsxs("div",{className:"font-medium flex items-center gap-2",children:[n.jsx("span",{className:"text-2xl",children:"✅"}),"Complete Quizzes"]}),n.jsx("div",{className:"text-xs text-base-muted mt-1",children:"+5 coins per correct answer"})]}),n.jsx("div",{className:"text-green-400 font-bold",children:"+5"})]})}),n.jsx("div",{className:"p-4 rounded-xl bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 hover:scale-[1.02] transition-transform",children:n.jsxs("div",{className:"flex items-center justify-between",children:[n.jsxs("div",{children:[n.jsxs("div",{className:"font-medium flex items-center gap-2",children:[n.jsx("span",{className:"text-2xl",children:"🎯"}),"Daily Challenge"]}),n.jsx("div",{className:"text-xs text-base-muted mt-1",children:"Complete daily for bonus"})]}),n.jsx("div",{className:"text-blue-400 font-bold",children:"+5"})]})}),n.jsx("div",{className:"p-4 rounded-xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 hover:scale-[1.02] transition-transform",children:n.jsxs("div",{className:"flex items-center justify-between",children:[n.jsxs("div",{children:[n.jsxs("div",{className:"font-medium flex items-center gap-2",children:[n.jsx("span",{className:"text-2xl",children:"🎰"}),"Spin & Play"]}),n.jsx("div",{className:"text-xs text-base-muted mt-1",children:"Test your luck!"})]}),n.jsx("div",{className:"text-purple-400 font-bold",children:"+50"})]})}),n.jsx("div",{className:"p-4 rounded-xl bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/20 hover:scale-[1.02] transition-transform",children:n.jsxs("div",{className:"flex items-center justify-between",children:[n.jsxs("div",{children:[n.jsxs("div",{className:"font-medium flex items-center gap-2",children:[n.jsx("span",{className:"text-2xl",children:"🏆"}),"Achievements"]}),n.jsx("div",{className:"text-xs text-base-muted mt-1",children:"Unlock special rewards"})]}),n.jsx("div",{className:"text-orange-400 font-bold",children:"+???"})]})})]})]}),n.jsxs("div",{className:"mb-6",children:[n.jsxs("div",{className:"flex justify-between text-xs text-base-muted mb-2",children:[n.jsx("span",{children:"Next reward"}),n.jsxs("span",{children:[100-r%100," coins to go"]})]}),n.jsx("div",{className:"h-2 bg-white/10 rounded-full overflow-hidden",children:n.jsx("div",{className:"h-full bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full transition-all",style:{width:`${r%100}%`}})})]}),n.jsx("button",{onClick:s,className:"w-full py-3 rounded-xl bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-bold hover:scale-[1.02] transition-transform shadow-lg",style:{boxShadow:"0 10px 30px rgba(251, 191, 36, 0.3)"},children:"Start Earning Now! 🚀"})]})]})}):null}function ig({show:e,onClose:t,selectedCategory:r,difficulty:s,setDifficulty:a,count:i,setCount:o,timer:l,setTimer:c,onStart:u}){return!e||!r?null:n.jsx("div",{className:"fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4",onClick:f=>{f.target===f.currentTarget&&t()},children:n.jsxs("div",{className:"bg-base-card rounded-3xl p-6 w-full max-w-md border border-base-border",onClick:f=>f.stopPropagation(),children:[n.jsxs("div",{className:"flex justify-between items-center mb-4",children:[n.jsx("h3",{className:"text-xl font-bold",children:"Quiz Mode"}),n.jsx("button",{onClick:t,className:"w-8 h-8 rounded-lg bg-white/5 border border-base-border grid place-items-center hover:bg-white/10 transition",children:"✕"})]}),n.jsx("div",{className:"mb-4 p-3 rounded-xl bg-blue-500/10 border border-blue-500/30",children:n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsx("div",{className:"text-2xl",children:r.icon}),n.jsxs("div",{children:[n.jsxs("div",{className:"font-medium",children:["Category: ",r.name]}),n.jsxs("div",{className:"text-xs text-base-muted",children:[r.questions," questions available"]})]})]})}),n.jsxs("div",{className:"mb-4",children:[n.jsx("label",{className:"text-sm text-base-muted mb-2 block",children:"Difficulty"}),n.jsx("div",{className:"grid grid-cols-3 gap-2",children:["easy","medium","hard"].map(f=>n.jsx("button",{onClick:()=>a(f),className:`py-2 rounded-xl border ${s===f?"bg-brand-blue/30 border-brand-blue":"bg-white/5 border-base-border"}`,children:f.charAt(0).toUpperCase()+f.slice(1)},f))})]}),n.jsxs("div",{className:"mb-4",children:[n.jsx("label",{className:"text-sm text-base-muted mb-2 block",children:"Questions"}),n.jsx("div",{className:"grid grid-cols-4 gap-2",children:[5,10,20,30].map(f=>n.jsx("button",{onClick:()=>o(f),className:`py-2 rounded-xl border ${i===f?"bg-brand-blue/30 border-brand-blue":"bg-white/5 border-base-border"}`,children:f},f))})]}),n.jsxs("div",{className:"mb-6",children:[n.jsx("label",{className:"text-sm text-base-muted mb-2 block",children:"Timer (seconds per question)"}),n.jsx("input",{type:"number",value:l,onChange:f=>c(Number(f.target.value)||45),min:10,max:120,className:"w-full px-4 py-2 rounded-xl bg-white/5 border border-base-border"})]}),n.jsxs("div",{className:"flex gap-3",children:[n.jsx("button",{onClick:t,className:"flex-1 py-3 rounded-xl border border-base-border bg-white/5",children:"Cancel"}),n.jsx("button",{onClick:u,className:"flex-1 py-3 rounded-xl bg-gradient-to-r from-brand-blue to-brand-purple text-white font-medium",children:"Start Quiz"})]})]})})}function og({show:e,onClose:t,allCategories:r,category:s,setCategory:a,difficulty:i,setDifficulty:o,count:l,setCount:c,onStart:u}){return e?n.jsx("div",{className:"fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4",onClick:f=>{f.target===f.currentTarget&&t()},children:n.jsxs("div",{className:"bg-base-card rounded-3xl p-6 w-full max-w-md border border-base-border max-h-[90vh] overflow-y-auto",onClick:f=>f.stopPropagation(),children:[n.jsxs("div",{className:"flex justify-between items-center mb-4",children:[n.jsx("h3",{className:"text-xl font-bold",children:"Practice Mode"}),n.jsx("button",{onClick:t,className:"w-8 h-8 rounded-lg bg-white/5 border border-base-border grid place-items-center hover:bg-white/10 transition",children:"✕"})]}),n.jsxs("div",{className:"mb-4",children:[n.jsx("label",{className:"text-sm text-base-muted mb-2 block",children:"Category"}),n.jsx("div",{className:"grid grid-cols-3 gap-2 max-h-[200px] overflow-y-auto",children:r.map(f=>n.jsxs("button",{onClick:()=>a(f.slug),className:`p-3 rounded-xl border flex flex-col items-center gap-1 ${s===f.slug?"bg-brand-blue/30 border-brand-blue":"bg-white/5 border-base-border"}`,children:[n.jsx("div",{className:"text-xl",children:f.icon}),n.jsx("div",{className:"text-[10px] text-center",children:f.name})]},f.slug))})]}),n.jsxs("div",{className:"mb-4",children:[n.jsx("label",{className:"text-sm text-base-muted mb-2 block",children:"Difficulty"}),n.jsx("div",{className:"grid grid-cols-3 gap-2",children:["easy","medium","hard"].map(f=>n.jsx("button",{onClick:()=>o(f),className:`py-2 rounded-xl border ${i===f?"bg-brand-blue/30 border-brand-blue":"bg-white/5 border-base-border"}`,children:f.charAt(0).toUpperCase()+f.slice(1)},f))})]}),n.jsxs("div",{className:"mb-6",children:[n.jsx("label",{className:"text-sm text-base-muted mb-2 block",children:"Questions"}),n.jsx("div",{className:"grid grid-cols-4 gap-2",children:[5,10,20,30].map(f=>n.jsx("button",{onClick:()=>c(f),className:`py-2 rounded-xl border ${l===f?"bg-brand-blue/30 border-brand-blue":"bg-white/5 border-base-border"}`,children:f},f))})]}),n.jsxs("div",{className:"flex gap-3",children:[n.jsx("button",{onClick:t,className:"flex-1 py-3 rounded-xl border border-base-border bg-white/5",children:"Cancel"}),n.jsx("button",{onClick:u,className:"flex-1 py-3 rounded-xl bg-gradient-to-r from-brand-blue to-brand-purple text-white font-medium",children:"Start Practice"})]})]})}):null}function lg({player:e,onContinue:t}){const[r,s]=d.useState(()=>sessionStorage.getItem("welcomeShown")!=="true"),[a,i]=d.useState(!1),[o,l]=d.useState(!1),[c,u]=d.useState(""),[f,p]=d.useState(""),h=()=>{try{const x=new Audio("/sounds/welcome.mp3");x.volume=.6,x.play()}catch{console.log("Welcome sound not available")}},b=()=>{navigator.vibrate&&navigator.vibrate([100,50,100])},j=(()=>{if(e!=null&&e.name)return e.name;let x=localStorage.getItem("userName");return x||(x="Champion",localStorage.setItem("userName",x)),x})(),C=(e==null?void 0:e.currentStreak)||0;d.useEffect(()=>{if(!r){t();return}sessionStorage.setItem("welcomeShown","true"),document.body.classList.add("hide-bottom-nav"),h(),b();const x=["🦉","🐧","🦝","🦜","🦕","🐙","🦊","🐸","🦁","🐨"];p(x[Math.floor(Math.random()*x.length)]);const E=setInterval(()=>{l(S=>!S)},2e3),N=["🎯 New challenges await!","🏆 Ready to be a champion?","🌟 Your brain adventure starts now!","🎨 Time for fun learning!","🎪 The quiz circus is open!","🚀 Blast off to knowledge!","🎭 Let's play and learn!","🌈 Rainbow of questions ahead!"];u(N[Math.floor(Math.random()*N.length)]);const T=setInterval(()=>{u(N[Math.floor(Math.random()*N.length)])},3e3);return()=>{document.body.classList.remove("hide-bottom-nav"),clearInterval(E),clearInterval(T)}},[r,t]);const y=()=>{try{const x=new Audio("/sounds/tap.mp3");x.volume=.5,x.play()}catch{console.log("Click sound not available")}navigator.vibrate&&navigator.vibrate(20),i(!0),document.body.classList.remove("hide-bottom-nav"),setTimeout(()=>{s(!1),t()},400)};if(!r)return null;const m=()=>{const x=new Date().getHours();return x<12?"Good morning":x<17?"Good afternoon":"Good evening"};return n.jsxs("div",{className:`fixed inset-0 z-50 flex items-center justify-center transition-all duration-500
      ${a?"opacity-0 scale-95":"opacity-100 scale-100"}`,children:[n.jsx("div",{className:"absolute inset-0",style:{background:"linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #fda085 75%, #f5a375 90%, #e08060 100%)"}}),n.jsxs("div",{className:"absolute inset-0 overflow-hidden",children:[[{top:"10%",left:"15%",size:"24px",delay:"0s"},{top:"20%",left:"75%",size:"20px",delay:"0.5s"},{top:"15%",left:"45%",size:"28px",delay:"1s"},{top:"30%",left:"85%",size:"22px",delay:"1.5s"},{top:"8%",left:"60%",size:"26px",delay:"2s"}].map((x,E)=>n.jsx("div",{className:"absolute animate-twinkle",style:{top:x.top,left:x.left,fontSize:x.size,animationDelay:x.delay},children:"⭐"},`star-${E}`)),n.jsxs("div",{className:"absolute top-10 left-0 w-full",children:[n.jsx("div",{className:"cloud cloud1",children:"☁️"}),n.jsx("div",{className:"cloud cloud2",children:"☁️"})]})]}),n.jsxs("div",{className:"relative z-10 text-center px-6 w-full max-w-sm mx-auto",children:[n.jsx("div",{className:`text-8xl mb-4 transition-transform duration-500 ${o?"scale-110 rotate-6":"scale-100 rotate-0"}`,children:f}),n.jsxs("div",{className:"relative rounded-3xl px-6 py-4 mb-6 shadow-xl overflow-hidden",children:[n.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100"}),n.jsx("div",{className:"absolute -top-3 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-br from-purple-100 to-pink-100 rotate-45"}),n.jsxs("div",{className:"relative",children:[n.jsxs("h1",{className:"text-3xl font-bold text-purple-800",children:["Hello, ",j,"! 👋"]}),n.jsx("p",{className:"text-sm text-purple-600 mt-1",children:m()})]})]}),n.jsxs("div",{className:"grid grid-cols-3 gap-3 mb-6",children:[n.jsxs("div",{className:"relative rounded-2xl p-3 transform hover:scale-105 transition-transform overflow-hidden",children:[n.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-yellow-200 via-yellow-100 to-orange-100"}),n.jsxs("div",{className:"relative",children:[n.jsx("div",{className:"text-3xl mb-1",children:"⭐"}),n.jsx("div",{className:"text-2xl font-bold text-orange-800",children:(e==null?void 0:e.level)||1}),n.jsx("div",{className:"text-xs text-orange-600",children:"Level"})]})]}),n.jsxs("div",{className:"relative rounded-2xl p-3 transform hover:scale-105 transition-transform overflow-hidden",children:[n.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-blue-200 via-cyan-100 to-teal-100"}),n.jsxs("div",{className:"relative",children:[n.jsx("div",{className:"text-3xl mb-1",children:"🪙"}),n.jsx("div",{className:"text-2xl font-bold text-teal-800",children:(e==null?void 0:e.coins)||0}),n.jsx("div",{className:"text-xs text-teal-600",children:"Coins"})]})]}),n.jsxs("div",{className:"relative rounded-2xl p-3 transform hover:scale-105 transition-transform overflow-hidden",children:[n.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-orange-200 via-red-100 to-pink-100"}),n.jsxs("div",{className:"relative",children:[n.jsx("div",{className:"text-3xl mb-1",children:"🔥"}),n.jsx("div",{className:"text-2xl font-bold text-orange-800",children:C}),n.jsx("div",{className:"text-xs text-orange-600",children:"Streak"})]})]})]}),n.jsx("div",{className:"h-4"}),n.jsx("div",{className:"text-white/90 font-medium animate-fade-slide mb-6",children:c}),n.jsxs("button",{onClick:y,className:"group relative w-full",children:[n.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 rounded-full blur-lg opacity-75 group-hover:opacity-100 transition-opacity"}),n.jsxs("div",{className:`relative bg-gradient-to-r from-green-400 to-blue-500 text-white py-5 px-8 rounded-full font-bold text-xl shadow-2xl 
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
      `})]})}const Rd=(e=new Date)=>e.toLocaleDateString("en-CA"),_d=(e,t=null)=>{try{const r=localStorage.getItem(e);return r?JSON.parse(r):t}catch{return t}},cg=(e,t)=>localStorage.setItem(e,JSON.stringify(t));function Ld(){const[e,t]=d.useState(!0),r=Le(),{player:s,addXP:a,addCoins:i,levelProgress:o,useEnergy:l,changeAvatar:c}=kn(),[u]=Ft("/sounds/correct.mp3",{volume:.6}),[f]=Ft("/sounds/wrong.mp3",{volume:.6}),[p]=Ft("/sounds/coin.mp3",{volume:.75}),[h]=Ft("/sounds/levelup.mp3",{volume:.8}),b=d.useRef(s.level),v=d.useRef(null);d.useEffect(()=>{const he=()=>{};return window.addEventListener("focus",he),()=>window.removeEventListener("focus",he)},[]),d.useEffect(()=>{s.level>b.current&&(h==null||h(),b.current=s.level)},[s.level,h]);const[j,C]=d.useState(!1),[y,m]=d.useState(null),[x,E]=d.useState(!1),[N,T]=d.useState("medium"),[S,g]=d.useState(10),[w,k]=d.useState(45),[P,F]=d.useState(!1),[Y,ee]=d.useState(!1),[Q,U]=d.useState(null),[B,_]=d.useState(null),[M,q]=d.useState(!1),[D,L]=d.useState(!1),[A,H]=d.useState(null),re=10,J=5,[O,I]=d.useState(!1),[W,z]=d.useState(!1),[$,Z]=d.useState("general-knowledge"),[ie,de]=d.useState("medium"),[te,ne]=d.useState(10),[K,R]=d.useState(()=>_d("dq_daily_log",{})[Rd()]===!0);d.useEffect(()=>{const he=sessionStorage.getItem("homeScrollPosition");he&&window.scrollTo(0,parseInt(he));const ke=()=>{sessionStorage.setItem("homeScrollPosition",window.scrollY.toString())};return window.addEventListener("scroll",ke),()=>window.removeEventListener("scroll",ke)},[]),d.useEffect(()=>{if(K)return;(async()=>{var ke;try{const ve=await fetch("/data/quiz_questions_bank.csv").then(Qt=>Qt.text()),{data:xe}=hr.parse(ve,{header:!0,skipEmptyLines:!0});if(!xe.length)throw new Error("empty");const ye=xe[Math.floor(Math.random()*xe.length)],ht=[ye.option1,ye.option2,ye.option3,ye.option4].filter(Boolean);U({category:ye.category||"General",prompt:ye.question,options:ht,answerIndex:["A","B","C","D"].indexOf((ke=ye.answer)==null?void 0:ke.toUpperCase())||0})}catch{U({category:"Science",prompt:"Which planet is known as the Red Planet?",options:["Earth","Mars","Jupiter","Venus"],answerIndex:1})}})()},[K]);const G=(he,ke)=>{if(B!==null)return;_(he);const ve=he===Q.answerIndex;if(ve){if(u(),ke!=null&&ke.currentTarget&&v.current){const xe=ke.currentTarget.getBoundingClientRect();p(),H({startRect:xe,count:10,amount:J})}}else f();setTimeout(()=>{if(L(!0),q(!0),ve){const xe=Rd();cg("dq_daily_log",{..._d("dq_daily_log",{}),[xe]:!0}),R(!0);const ye=Number(localStorage.getItem("dq_streak")||0);localStorage.setItem("dq_streak",String(ye+1))}},600)},ce=he=>{if(he.slug==="more"){C(!0);return}m(he),E(!0)},pe=()=>{console.log("Starting quiz with energy:",s.energy),console.log("Category:",y.slug),r(`/quiz/${y.slug}`,{state:{mode:"quiz",difficulty:N,count:S,timer:{type:"per_q",seconds:w},source:"adventure"}}),E(!1)},me=()=>{console.log("Starting practice, category:",$),r(`/quiz/${$}`,{state:{mode:"practice",difficulty:ie,count:te,timer:{type:"off",seconds:0}}}),z(!1)},$e=[{icon:"🎯",label:"Quests",color:"bg-gradient-to-br from-orange-500 to-pink-500",action:()=>{sessionStorage.setItem("questsFromHome","true"),r("/profile/quests")}},{icon:"🔥",label:"Streak",color:"bg-gradient-to-br from-red-500 to-orange-500",action:()=>r("/profile/streaks")},{icon:"🏆",label:"Achieve",color:"bg-gradient-to-br from-blue-500 to-purple-500",action:()=>r("/profile/achievements")},{icon:"🎁",label:"Rewards",color:"bg-gradient-to-br from-green-500 to-teal-500",action:()=>r("/profile/rewards")}];return n.jsxs(n.Fragment,{children:[e&&n.jsx(lg,{player:s,onContinue:()=>t(!1)}),n.jsxs("div",{className:"min-h-screen bg-base-bg text-base-text",children:[n.jsx("div",{className:"fixed inset-0 -z-10 pointer-events-none",style:{background:"linear-gradient(to bottom, #0B0F1A, #111827)"}}),n.jsxs("div",{className:"relative z-10 px-4 pt-10 pb-24",children:[n.jsx("style",{jsx:!0,children:`
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
        `}),A&&n.jsx(Ei,{startRect:A.startRect,targetRef:v,count:A.count,onDone:()=>{O||(a(re),i(A.amount),I(!0)),H(null)}}),n.jsxs("div",{className:"mb-8",children:[n.jsxs("div",{className:"flex justify-between items-start mb-4",children:[n.jsx("div",{className:"cursor-pointer hover:scale-105 transition-transform",onClick:()=>ee(!0),children:n.jsx(Xx,{player:s,size:"small",showLevel:!0,showName:!0})}),n.jsx("div",{className:"flex gap-2",children:n.jsxs("button",{ref:v,onClick:()=>F(!0),className:"px-3 py-1.5 rounded-xl bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/30 flex items-center gap-2 hover:from-yellow-500/20 hover:to-orange-500/20 transition",children:[n.jsx("span",{className:"text-lg",children:"🪙"}),n.jsx("span",{className:"font-bold",children:s.coins})]})})]}),n.jsx(Kx,{current:o.current,required:o.required,level:s.level,animate:!0})]}),n.jsx(Jx,{onClick:()=>r("/play")}),n.jsx(Zx,{actions:$e}),n.jsx(ng,{dailyQ:Q,isFlipped:D,picked:B,onAnswer:G,dailyCompleted:K,DAILY_Q_COINS:J,DAILY_Q_XP:re}),n.jsx(eg,{categories:Em,onCategorySelect:ce}),n.jsx(tg,{onClick:()=>z(!0),isPulsing:s.energy<10}),n.jsx(rg,{show:Y,onClose:()=>ee(!1),player:s,changeAvatar:c,GAME_CONSTANTS:ut}),n.jsx(ig,{show:x,onClose:()=>E(!1),selectedCategory:y,difficulty:N,setDifficulty:T,count:S,setCount:g,timer:w,setTimer:k,onStart:pe}),n.jsx(og,{show:W,onClose:()=>z(!1),allCategories:Tm,category:$,setCategory:Z,difficulty:ie,setDifficulty:de,count:te,setCount:ne,onStart:me}),n.jsx(sg,{show:j,onClose:()=>C(!1),categories:Pm,onCategorySelect:ce}),n.jsx(ag,{show:P,onClose:()=>F(!1),coins:s.coins,onNavigateToPlay:()=>{F(!1),r("/play")}})]})]})]})}const tn={COINS:"qp_coins",XP:"qp_xp",LEVEL:"qp_level",OWNED_CHARACTERS:"owned_characters",SOUND:"play_sound_on"},nn={get:(e,t=null)=>{try{const r=localStorage.getItem(e);return r?JSON.parse(r):t}catch{return t}},set:(e,t)=>{try{localStorage.setItem(e,JSON.stringify(t))}catch{}}};function cc(){const[e,t]=d.useState(()=>nn.get(tn.COINS,0)),[r,s]=d.useState(()=>nn.get(tn.XP,0)),[a,i]=d.useState(()=>nn.get(tn.LEVEL,1)),[o,l]=d.useState(()=>nn.get(tn.OWNED_CHARACTERS,[])),[c,u]=d.useState(()=>nn.get(tn.SOUND,!0));return d.useEffect(()=>nn.set(tn.COINS,e),[e]),d.useEffect(()=>nn.set(tn.XP,r),[r]),d.useEffect(()=>nn.set(tn.LEVEL,a),[a]),d.useEffect(()=>nn.set(tn.OWNED_CHARACTERS,o),[o]),d.useEffect(()=>nn.set(tn.SOUND,c),[c]),{coins:e,xp:r,level:a,ownedCharacters:o,soundOn:c,addCoins:v=>t(j=>j+v),addXp:v=>s(j=>j+v),unlockCharacter:v=>{l(j=>[...new Set([...j,v])])},setSoundOn:u,checkLevelUp:()=>{const v=100*a*(a-1);return r>=v?(i(j=>j+1),!0):!1},nextLevelThreshold:100*a*(a-1),xpProgress:r/(100*a*(a-1))}}const dg=[{name:"General Knowledge",questions:50,icon:"🧠",color:"#7C3AED"},{name:"Artificial Intelligence",questions:28,icon:"🤖",color:"#10B981"},{name:"Fun facts",questions:30,icon:"🎉",color:"#EF4444"},{name:"Science",questions:45,icon:"🧪",color:"#F59E0B"},{name:"History",questions:42,icon:"🏺",color:"#2563EB"},{name:"Geography",questions:38,icon:"🗺️",color:"#FACC15"}],sn=dg.slice(0,6),nr=360/sn.length,Rm={"general-knowledge":"TINA","artificial-intelligence":"ALBERT","fun-facts":"BONZO",science:"POP",history:"TITO",geography:"HECTOR"},En={FULL_TURNS:6,DURATION:2800,OVERSHOOT:12,SETTLE_DURATION:350},ir=e=>e.toLowerCase().replace(/[^\w\s-]/g,"").replace(/\s+/g,"-"),Id=e=>(e%360+360)%360,dc=e=>{try{navigator.vibrate&&navigator.vibrate(e)}catch{}},Mr=(e,t=.7)=>{try{const r=new Audio(e);r.volume=t,r.play()}catch{}};function ug({run:e,coins:t,xp:r,level:s,ownedCharacters:a,onSpin:i,onBack:o,spinning:l,angle:c,transition:u,result:f,showCallout:p,glowColor:h,soundOn:b,setSoundOn:v,showSparkle:j,pulseIdx:C,nextProgressIdx:y,pendingProgressIdx:m,coinBurstTick:x,lastAnswerWasCorrect:E}){const N=100*s*(s-1),[T,S]=d.useState(!1),g=d.useRef(0),w=d.useRef(null),k=d.useRef(null),[P,F]=d.useState({dx:110,dy:-260}),[Y,ee]=d.useState(!1);return d.useEffect(()=>(document.body.classList.add("hide-bottom-nav"),()=>{document.body.classList.remove("hide-bottom-nav")}),[]),d.useEffect(()=>{if(m==null)return;S(!1);const Q=setTimeout(()=>S(!0),30);return()=>clearTimeout(Q)},[m]),d.useEffect(()=>{var U,B,_,M;if(!x||!E||x===g.current)return;g.current=x;try{const q=(B=(U=k==null?void 0:k.current)==null?void 0:U.getBoundingClientRect)==null?void 0:B.call(U),D=(M=(_=w==null?void 0:w.current)==null?void 0:_.getBoundingClientRect)==null?void 0:M.call(_);if(q&&D){const L=q.left+q.width/2,A=q.top+q.height/2,H=D.left+D.width/2,re=D.top+D.height/2;F({dx:H-L,dy:re-A})}}catch{}b&&Mr("/sounds/coin.mp3",.7),ee(!0);const Q=setTimeout(()=>ee(!1),700);return()=>clearTimeout(Q)},[x,b,E]),n.jsx("div",{className:"fixed inset-0 bg-base-bg text-base-text overflow-hidden",children:n.jsxs("div",{className:"h-full overflow-y-auto mx-auto max-w-md px-5 pt-[calc(env(safe-area-inset-top)+3rem)] pb-[calc(env(safe-area-inset-bottom)+5.25rem)]",children:[n.jsxs("header",{className:"flex items-center justify-between mb-8",children:[n.jsx("button",{onClick:o,className:"h-10 w-10 rounded-full border border-base-border grid place-items-center bg-white/5 hover:bg-white/10 transition translate-y-[4px]",children:"←"}),n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsxs("button",{className:"px-3 py-1 rounded-2xl bg-white/5 border border-base-border text-left translate-y-[4px]",children:[n.jsxs("div",{className:"text-[11px]",children:["Lvl ",s," • ",r,"/",N]}),n.jsx("div",{className:"mt-1 h-1 w-full bg-white/10 rounded",children:n.jsx("div",{className:"h-1 bg-brand-blue rounded",style:{width:`${Math.min(r/N,1)*100}%`}})})]}),n.jsxs("button",{ref:w,className:"px-3 py-1 rounded-2xl bg-white/5 border border-base-border translate-y-[4px]",children:["🪙 ",t]})]}),n.jsx("button",{onClick:()=>v(!b),className:"h-10 w-10 rounded-full border border-base-border grid place-items-center bg-white/5 hover:bg-white/10 transition translate-y-[4px]",children:n.jsx("span",{className:"text-lg",children:b?"🔊":"🔇"})})]}),a.length>0&&n.jsx("div",{className:"flex justify-center mb-6",children:n.jsx("div",{className:"flex gap-2 px-4 py-2 bg-white/10 rounded-2xl backdrop-blur border border-base-border",children:a.map(Q=>{const U=sn.find(_=>ir(_.name)===Q),B=Rm[Q];return n.jsxs("div",{className:"flex flex-col items-center",children:[n.jsx("div",{className:"w-8 h-8 rounded-full bg-white/20 flex items-center justify-center border border-white/30",children:n.jsx("span",{className:"text-sm",children:U==null?void 0:U.icon})}),n.jsx("span",{className:"text-[10px] text-base-muted mt-1",children:B})]},Q)})})}),n.jsx("div",{className:"flex justify-center mt-12 sm:mt-16 mb-6",children:n.jsxs("div",{className:"w-80 max-w-full",children:[n.jsx("style",{children:`
              @keyframes qp_sweep { from { transform: translateX(0); } to { transform: translateX(100%); } }
            `}),n.jsx("div",{className:"relative grid grid-cols-3 gap-1 h-3 rounded-full overflow-hidden bg-white/10 border border-white/15",children:[0,1,2].map(Q=>{const U=["#FF9800","#FFC107","#cadd75ff"],B=!!e.progress[Q];return n.jsxs("div",{className:"relative h-full bg-white/10",children:[n.jsx("div",{className:"absolute inset-y-0 left-0 rounded-[6px]",style:{width:B?Q===m?T?"100%":"0%":y===Q&&m==null?"0%":"100%":"0%",backgroundColor:U[Q],transition:Q===m?"width 1200ms ease-out":"none"}}),C===Q&&n.jsx("span",{className:"absolute inset-y-0 left-0 w-full overflow-hidden pointer-events-none",children:n.jsx("span",{className:"absolute inset-y-0 left-0 w-1 rounded bg-white/80",style:{animation:"qp_sweep 1200ms ease-out forwards"}})}),j===Q&&n.jsx("span",{className:"absolute right-[-2px] top-1/2 -translate-y-1/2 text-xs select-none",children:"✨"})]},Q)})},e.qIndex)]})}),n.jsx("section",{className:"flex flex-col items-center mt-28 sm:mt-32 mb-10",children:n.jsxs("div",{ref:k,className:"relative w-96 h-96 rounded-full select-none",children:[h&&n.jsx("div",{className:"pointer-events-none absolute -inset-4 rounded-full",style:{boxShadow:`0 0 0 8px ${h}40, 0 0 40px 12px ${h}60`}}),n.jsx("div",{className:"absolute inset-0 rounded-full border-4 border-white/20 shadow-2xl overflow-hidden will-change-transform bg-base-card",style:{transform:`rotate(${c}deg)`,transition:u},children:n.jsxs("svg",{width:"100%",height:"100%",viewBox:"0 0 100 100",className:"block",children:[sn.map((Q,U)=>{const B=U*nr,_=B+nr,M=nr>180?1:0,q=Math.PI*B/180,D=Math.PI*_/180,L=50+45*Math.cos(q),A=50-45*Math.sin(q),H=50+45*Math.cos(D),re=50-45*Math.sin(D),J=B+nr/2,O=28,I=50+O*Math.cos(J*Math.PI/180),W=50-O*Math.sin(J*Math.PI/180);return n.jsxs("g",{children:[n.jsx("path",{d:`M50,50 L${L},${A} A45,45 0 ${M} 0 ${H},${re} Z`,fill:Q.color,stroke:"rgba(255,255,255,0.3)",strokeWidth:"0.5"}),n.jsx("text",{x:I,y:W,fill:"white",fontSize:"8",dominantBaseline:"middle",textAnchor:"middle",className:"font-bold",children:Q.icon})]},U)}),n.jsx("circle",{cx:"50",cy:"50",r:"12",fill:"white",stroke:"#ddd",strokeWidth:"1"})]})}),n.jsx("button",{onClick:i,disabled:l,className:`absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                      w-24 h-24 rounded-full bg-white text-black font-black text-lg shadow-lg transition-all ${l?"opacity-60 cursor-not-allowed scale-95":"hover:scale-105 active:scale-95"}`,children:"SPIN"}),n.jsx("div",{className:"absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-2 z-20",children:n.jsx("div",{className:"w-6 h-8 bg-white rounded-lg shadow-md flex items-start justify-center pt-1",children:n.jsx("div",{className:"w-0 h-0 border-l-[6px] border-r-[6px] border-b-[8px] border-l-transparent border-r-transparent border-b-gray-600"})})}),p&&f&&n.jsx("div",{className:"absolute left-1/2 -translate-x-1/2 -top-16 z-30",children:n.jsxs("div",{className:"px-4 py-2 rounded-2xl bg-base-card border border-base-border shadow-lg font-semibold",children:[n.jsx("span",{className:"mr-2",children:f.cat.icon}),f.cat.name]})}),Y&&n.jsxs(n.Fragment,{children:[n.jsx("style",{children:`
                    @keyframes coinFly {
                      0%   { transform: translate(-50%, -50%) scale(0.9); opacity: 1; }
                      100% { transform: translate(var(--coin-dx), var(--coin-dy)) scale(0.4); opacity: 0; }
                    }
                `}),[0,1,2].map(Q=>n.jsx("div",{className:"pointer-events-none absolute z-30 top-1/2 left-1/2",style:{animation:`coinFly 600ms ease-out ${Q*80}ms forwards`,"--coin-dx":`${P.dx}px`,"--coin-dy":`${P.dy}px`},children:n.jsx("div",{className:"w-6 h-6 rounded-full grid place-items-center bg-yellow-400 text-black font-bold",children:"🪙"})},Q))]})]})}),n.jsx("div",{className:"text-center",children:n.jsx("button",{disabled:!0,className:"text-base-muted underline opacity-60 cursor-not-allowed text-sm",children:"Party Spin (pass & play)"})})]})})}var za={linear:function(e,t,r,s){var a=r-t;return a*e/s+t},easeInQuad:function(e,t,r,s){var a=r-t;return a*(e/=s)*e+t},easeOutQuad:function(e,t,r,s){var a=r-t;return-a*(e/=s)*(e-2)+t},easeInOutQuad:function(e,t,r,s){var a=r-t;return(e/=s/2)<1?a/2*e*e+t:-a/2*(--e*(e-2)-1)+t},easeInCubic:function(e,t,r,s){var a=r-t;return a*(e/=s)*e*e+t},easeOutCubic:function(e,t,r,s){var a=r-t;return a*((e=e/s-1)*e*e+1)+t},easeInOutCubic:function(e,t,r,s){var a=r-t;return(e/=s/2)<1?a/2*e*e*e+t:a/2*((e-=2)*e*e+2)+t},easeInQuart:function(e,t,r,s){var a=r-t;return a*(e/=s)*e*e*e+t},easeOutQuart:function(e,t,r,s){var a=r-t;return-a*((e=e/s-1)*e*e*e-1)+t},easeInOutQuart:function(e,t,r,s){var a=r-t;return(e/=s/2)<1?a/2*e*e*e*e+t:-a/2*((e-=2)*e*e*e-2)+t},easeInQuint:function(e,t,r,s){var a=r-t;return a*(e/=s)*e*e*e*e+t},easeOutQuint:function(e,t,r,s){var a=r-t;return a*((e=e/s-1)*e*e*e*e+1)+t},easeInOutQuint:function(e,t,r,s){var a=r-t;return(e/=s/2)<1?a/2*e*e*e*e*e+t:a/2*((e-=2)*e*e*e*e+2)+t},easeInSine:function(e,t,r,s){var a=r-t;return-a*Math.cos(e/s*(Math.PI/2))+a+t},easeOutSine:function(e,t,r,s){var a=r-t;return a*Math.sin(e/s*(Math.PI/2))+t},easeInOutSine:function(e,t,r,s){var a=r-t;return-a/2*(Math.cos(Math.PI*e/s)-1)+t},easeInExpo:function(e,t,r,s){var a=r-t;return e==0?t:a*Math.pow(2,10*(e/s-1))+t},easeOutExpo:function(e,t,r,s){var a=r-t;return e==s?t+a:a*(-Math.pow(2,-10*e/s)+1)+t},easeInOutExpo:function(e,t,r,s){var a=r-t;return e===0?t:e===s?t+a:(e/=s/2)<1?a/2*Math.pow(2,10*(e-1))+t:a/2*(-Math.pow(2,-10*--e)+2)+t},easeInCirc:function(e,t,r,s){var a=r-t;return-a*(Math.sqrt(1-(e/=s)*e)-1)+t},easeOutCirc:function(e,t,r,s){var a=r-t;return a*Math.sqrt(1-(e=e/s-1)*e)+t},easeInOutCirc:function(e,t,r,s){var a=r-t;return(e/=s/2)<1?-a/2*(Math.sqrt(1-e*e)-1)+t:a/2*(Math.sqrt(1-(e-=2)*e)+1)+t},easeInElastic:function(e,t,r,s){var a=r-t,i,o,l;return l=1.70158,o=0,i=a,e===0?t:(e/=s)===1?t+a:(o||(o=s*.3),i<Math.abs(a)?(i=a,l=o/4):l=o/(2*Math.PI)*Math.asin(a/i),-(i*Math.pow(2,10*(e-=1))*Math.sin((e*s-l)*(2*Math.PI)/o))+t)},easeOutElastic:function(e,t,r,s){var a=r-t,i,o,l;return l=1.70158,o=0,i=a,e===0?t:(e/=s)===1?t+a:(o||(o=s*.3),i<Math.abs(a)?(i=a,l=o/4):l=o/(2*Math.PI)*Math.asin(a/i),i*Math.pow(2,-10*e)*Math.sin((e*s-l)*(2*Math.PI)/o)+a+t)},easeInOutElastic:function(e,t,r,s){var a=r-t,i,o,l;return l=1.70158,o=0,i=a,e===0?t:(e/=s/2)===2?t+a:(o||(o=s*(.3*1.5)),i<Math.abs(a)?(i=a,l=o/4):l=o/(2*Math.PI)*Math.asin(a/i),e<1?-.5*(i*Math.pow(2,10*(e-=1))*Math.sin((e*s-l)*(2*Math.PI)/o))+t:i*Math.pow(2,-10*(e-=1))*Math.sin((e*s-l)*(2*Math.PI)/o)*.5+a+t)},easeInBack:function(e,t,r,s,a){var i=r-t;return a===void 0&&(a=1.70158),i*(e/=s)*e*((a+1)*e-a)+t},easeOutBack:function(e,t,r,s,a){var i=r-t;return a===void 0&&(a=1.70158),i*((e=e/s-1)*e*((a+1)*e+a)+1)+t},easeInOutBack:function(e,t,r,s,a){var i=r-t;return a===void 0&&(a=1.70158),(e/=s/2)<1?i/2*(e*e*(((a*=1.525)+1)*e-a))+t:i/2*((e-=2)*e*(((a*=1.525)+1)*e+a)+2)+t},easeInBounce:function(e,t,r,s){var a=r-t,i;return i=za.easeOutBounce(s-e,0,a,s),a-i+t},easeOutBounce:function(e,t,r,s){var a=r-t;return(e/=s)<1/2.75?a*(7.5625*e*e)+t:e<2/2.75?a*(7.5625*(e-=1.5/2.75)*e+.75)+t:e<2.5/2.75?a*(7.5625*(e-=2.25/2.75)*e+.9375)+t:a*(7.5625*(e-=2.625/2.75)*e+.984375)+t},easeInOutBounce:function(e,t,r,s){var a=r-t,i;return e<s/2?(i=za.easeInBounce(e*2,0,a,s),i*.5+t):(i=za.easeOutBounce(e*2-s,0,a,s),i*.5+a*.5+t)}},fg=za;function mg(e){return e*Math.PI/180}function Et(e,t){return e+Math.random()*(t-e)}function hg(e,t){return Math.floor(e+Math.random()*(t-e+1))}var ks;(function(e){e[e.Circle=0]="Circle",e[e.Square=1]="Square",e[e.Strip=2]="Strip"})(ks||(ks={}));var Ln;(function(e){e[e.Positive=1]="Positive",e[e.Negative=-1]="Negative"})(Ln||(Ln={}));const pg=1e3/60;class xg{constructor(t,r,s,a){this.getOptions=r;const{colors:i,initialVelocityX:o,initialVelocityY:l}=this.getOptions();this.context=t,this.x=s,this.y=a,this.w=Et(5,20),this.h=Et(5,20),this.radius=Et(5,10),this.vx=typeof o=="number"?Et(-o,o):Et(o.min,o.max),this.vy=typeof l=="number"?Et(-l,0):Et(l.min,l.max),this.shape=hg(0,2),this.angle=mg(Et(0,360)),this.angularSpin=Et(-.2,.2),this.color=i[Math.floor(Math.random()*i.length)],this.rotateY=Et(0,1),this.rotationDirection=Et(0,1)?Ln.Positive:Ln.Negative}update(t){const{gravity:r,wind:s,friction:a,opacity:i,drawShape:o}=this.getOptions(),l=t/pg;this.x+=this.vx*l,this.y+=this.vy*l,this.vy+=r*l,this.vx+=s*l,this.vx*=a**l,this.vy*=a**l,this.rotateY>=1&&this.rotationDirection===Ln.Positive?this.rotationDirection=Ln.Negative:this.rotateY<=-1&&this.rotationDirection===Ln.Negative&&(this.rotationDirection=Ln.Positive);const c=.1*this.rotationDirection*l;if(this.rotateY+=c,this.angle+=this.angularSpin,this.context.save(),this.context.translate(this.x,this.y),this.context.rotate(this.angle),this.context.scale(1,this.rotateY),this.context.rotate(this.angle),this.context.beginPath(),this.context.fillStyle=this.color,this.context.strokeStyle=this.color,this.context.globalAlpha=i,this.context.lineCap="round",this.context.lineWidth=2,o&&typeof o=="function")o.call(this,this.context);else switch(this.shape){case ks.Circle:{this.context.beginPath(),this.context.arc(0,0,this.radius,0,2*Math.PI),this.context.fill();break}case ks.Square:{this.context.fillRect(-this.w/2,-this.h/2,this.w,this.h);break}case ks.Strip:{this.context.fillRect(-this.w/6,-this.h/2,this.w/3,this.h);break}}this.context.closePath(),this.context.restore()}}class gg{constructor(t,r){this.x=0,this.y=0,this.w=0,this.h=0,this.lastNumberOfPieces=0,this.tweenProgress=0,this.tweenFrom=0,this.particles=[],this.particlesGenerated=0,this.removeParticleAt=a=>{this.particles.splice(a,1)},this.getParticle=()=>{const a=Et(this.x,this.w+this.x),i=Et(this.y,this.h+this.y);return new xg(this.context,this.getOptions,a,i)},this.animate=a=>{const{canvas:i,context:o,particlesGenerated:l,lastNumberOfPieces:c}=this,{run:u,recycle:f,numberOfPieces:p,debug:h,tweenFunction:b,tweenDuration:v}=this.getOptions();if(!u)return!1;const j=this.particles.length,C=f?j:l;if(C<p){c!==p&&(this.tweenProgress=0,this.tweenFrom=C,this.lastNumberOfPieces=p),this.tweenProgress=Math.min(v,Math.max(0,this.tweenProgress+a));const y=b(this.tweenProgress,this.tweenFrom,p,v),m=Math.round(y-C);for(let x=0;x<m;x++)this.particles.push(this.getParticle());this.particlesGenerated+=m}h&&(o.font="12px sans-serif",o.fillStyle="#333",o.textAlign="right",o.fillText(`Particles: ${j}`,i.width-10,i.height-20));for(let y=this.particles.length-1;y>=0;y--){const m=this.particles[y];m.update(a),(m.y>i.height||m.y<-100||m.x>i.width+100||m.x<-100)&&(f&&C<=p?this.particles[y]=this.getParticle():this.removeParticleAt(y))}return j>0||C<p},this.canvas=t;const s=this.canvas.getContext("2d");if(!s)throw new Error("Could not get canvas context");this.context=s,this.getOptions=r}}const uc={width:typeof window<"u"?window.innerWidth:300,height:typeof window<"u"?window.innerHeight:200,numberOfPieces:200,friction:.99,wind:0,gravity:.1,initialVelocityX:4,initialVelocityY:10,colors:["#f44336","#e91e63","#9c27b0","#673ab7","#3f51b5","#2196f3","#03a9f4","#00bcd4","#009688","#4CAF50","#8BC34A","#CDDC39","#FFEB3B","#FFC107","#FF9800","#FF5722","#795548"],opacity:1,debug:!1,tweenFunction:fg.easeInOutQuad,tweenDuration:5e3,recycle:!0,run:!0};class vg{constructor(t,r){this.lastFrameTime=0,this.setOptionsWithDefaults=a=>{const i={confettiSource:{x:0,y:0,w:this.canvas.width,h:0}};this._options={...i,...uc,...a},Object.assign(this,a.confettiSource)},this.update=(a=0)=>{const{options:{run:i,onConfettiComplete:o,frameRate:l},canvas:c,context:u}=this,f=Math.min(a-this.lastFrameTime,50);if(l&&f<1e3/l){this.rafId=requestAnimationFrame(this.update);return}this.lastFrameTime=a-(l?f%l:0),i&&(u.fillStyle="white",u.clearRect(0,0,c.width,c.height)),this.generator.animate(f)?this.rafId=requestAnimationFrame(this.update):(o&&typeof o=="function"&&this.generator.particlesGenerated>0&&o.call(this,this),this._options.run=!1)},this.reset=()=>{this.generator&&this.generator.particlesGenerated>0&&(this.generator.particlesGenerated=0,this.generator.particles=[],this.generator.lastNumberOfPieces=0)},this.stop=()=>{this.options={run:!1},this.rafId&&(cancelAnimationFrame(this.rafId),this.rafId=void 0)},this.canvas=t;const s=this.canvas.getContext("2d");if(!s)throw new Error("Could not get canvas context");this.context=s,this.generator=new gg(this.canvas,()=>this.options),this.options=r,this.update()}get options(){return this._options}set options(t){var a,i;const r=(a=this._options)==null?void 0:a.run,s=(i=this._options)==null?void 0:i.recycle;this.setOptionsWithDefaults(t),this.generator&&(Object.assign(this.generator,this.options.confettiSource),typeof t.recycle=="boolean"&&t.recycle&&s===!1&&(this.generator.lastNumberOfPieces=this.generator.particles.length)),typeof t.run=="boolean"&&t.run&&r===!1&&this.update()}}const yg=gt.createRef();class fc extends gt.Component{constructor(t){super(t),this.canvas=gt.createRef(),this.canvas=t.canvasRef||yg}componentDidMount(){if(this.canvas.current){const t=no(this.props)[0];this.confetti=new vg(this.canvas.current,t)}}componentDidUpdate(){const t=no(this.props)[0];this.confetti&&(this.confetti.options=t)}componentWillUnmount(){this.confetti&&this.confetti.stop(),this.confetti=void 0}render(){const[t,r]=no(this.props),s={zIndex:2,position:"absolute",pointerEvents:"none",top:0,left:0,bottom:0,right:0,...r.style};return n.jsx("canvas",{width:t.width,height:t.height,ref:this.canvas,...r,style:s})}}fc.defaultProps={...uc};fc.displayName="ReactConfetti";function no(e){const t={},r={},s={},a=[...Object.keys(uc),"confettiSource","drawShape","onConfettiComplete","frameRate"],i=["canvasRef"];for(const o in e){const l=e[o];a.includes(o)?t[o]=l:i.includes(o)?i[o]=l:s[o]=l}return[t,s,r]}const _m=gt.forwardRef((e,t)=>n.jsx(fc,{canvasRef:t,...e}));function Ad({question:e,category:t,onAnswer:r,run:s,timeLeft:a,usedLifelines:i,onUseLifeline:o,eliminatedOptions:l,audienceData:c,onBack:u,timeUp:f,onTimeUpBackToWheel:p,soundOn:h}){const[b,v]=d.useState(null),[j,C]=d.useState(!1),[y,m]=d.useState(!1),x=d.useRef(null),E=d.useRef(null),[N,T]=d.useState(null);d.useEffect(()=>(document.body.classList.add("hide-bottom-nav"),()=>{document.body.classList.remove("hide-bottom-nav")}),[]),d.useEffect(()=>{if(!j||!x.current)return;const w=x.current.getBoundingClientRect();T({x:w.left,y:w.top-300,w:w.width,h:8})},[j]);const S=w=>{if(j)return;v(w),C(!0);const k=w===e.correctIndex;dc(k?[50,30,50]:[200]),h&&Mr(k?"/sounds/correct.mp3":"/sounds/wrong.mp3",.7),setTimeout(()=>{r(k,null)},1500)},g=b===e.correctIndex;return n.jsx("div",{className:"fixed inset-0 bg-gradient-to-br from-gray-900 to-black text-white overflow-hidden",children:n.jsxs("div",{ref:E,className:"relative h-full overflow-y-auto px-5 pt-16 pb-[calc(env(safe-area-inset-bottom)+5.25rem)]",children:[n.jsx("div",{className:"mb-4",children:n.jsx("button",{onClick:()=>m(!0),className:"h-10 w-10 rounded-full border border-base-border grid place-items-center bg-white/5 hover:bg-white/10 transition",children:"←"})}),n.jsxs("div",{className:"text-center mb-6",children:[n.jsx("div",{className:`text-4xl font-black mb-2 ${a<=10?"text-red-400 animate-pulse":"text-white"}`,children:a}),n.jsx("div",{className:"w-full bg-white/20 rounded-full h-2",children:n.jsx("div",{className:`h-full rounded-full transition-all duration-1000 ${a<=10?"bg-red-400":"bg-blue-400"}`,style:{width:`${a/30*100}%`}})})]}),n.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[n.jsx("div",{className:"w-12 h-12 rounded-full flex items-center justify-center text-2xl",style:{backgroundColor:t.color},children:t.icon}),n.jsxs("div",{children:[n.jsx("div",{className:"text-lg font-bold",children:t.name}),n.jsxs("div",{className:"text-sm text-gray-400",children:["Question ",s.qIndex+1,"/3"]})]})]}),n.jsx("h2",{ref:x,className:"text-xl font-semibold mb-6 leading-relaxed",children:e.prompt}),n.jsx("div",{className:"space-y-3 mb-6",children:e.options.map((w,k)=>{const P=l.includes(k),F=b===k,Y=k===e.correctIndex;let ee="bg-white/10 border-white/20",Q="opacity-100";return P?Q="opacity-30":j&&F?ee=Y?"bg-green-500/30 border-green-400":"bg-red-500/30 border-red-400":j&&Y?ee="bg-green-500/30 border-green-400":F&&(ee="bg-white/20 border-white/40"),n.jsx("button",{onClick:()=>S(k),disabled:j||P,className:`w-full p-4 rounded-xl border-2 text-left transition-all duration-300 ${ee} ${Q} ${!j&&!P?"hover:bg-white/15 active:scale-98":""}`,children:n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsx("div",{className:"w-8 h-8 rounded-full bg-white/20 flex items-center justify-center font-bold text-sm",children:String.fromCharCode(65+k)}),n.jsx("span",{className:"font-medium flex-1",children:w}),c&&n.jsxs("span",{className:"text-xs text-base-muted",children:[Math.round(c[k]),"%"]})]})},k)})}),!j&&n.jsxs("div",{className:"flex gap-4 mb-8",children:[n.jsx("button",{onClick:()=>o("fifty"),disabled:i.fifty,className:`flex-1 p-4 rounded-2xl border-2 font-bold transition-all ${i.fifty?"bg-gray-700 border-gray-600 text-gray-400":"bg-purple-600 border-purple-400 text-white hover:bg-purple-500 active:scale-95"}`,children:"50:50"}),n.jsx("button",{onClick:()=>o("audience"),disabled:i.audience,className:`flex-1 p-4 rounded-2xl border-2 font-bold transition-all ${i.audience?"bg-gray-700 border-gray-600 text-gray-400":"bg-blue-600 border-blue-400 text-white hover:bg-blue-500 active:scale-95"}`,children:"👥 Ask"})]}),j&&n.jsxs("div",{className:"relative text-center",children:[g&&n.jsx("div",{className:"absolute inset-0 pointer-events-none",children:n.jsx(_m,{recycle:!1,numberOfPieces:120,gravity:.9,tweenDuration:1800,confettiSource:N||{x:0,y:0,w:typeof window<"u"?window.innerWidth:320,h:1}})}),n.jsx("button",{onClick:()=>r(g,null,!0),className:"relative z-10 bg-white text-black font-black py-4 px-8 rounded-2xl text-lg hover:bg-gray-100 transition-all active:scale-95",children:"Continue"})]}),f&&n.jsx("div",{className:"fixed inset-0 z-50 bg-black/60 flex items-center justify-center px-6",children:n.jsxs("div",{className:"w-full max-w-sm rounded-2xl bg-base-card border border-base-border p-5 text-center",children:[n.jsx("div",{className:"text-lg font-bold mb-2",children:"Time's up"}),n.jsx("p",{className:"text-base-muted mb-5",children:"You ran out of time."}),n.jsx("button",{onClick:p,className:"mx-auto w-48 py-3 rounded-xl bg-brand-blue text-white font-semibold hover:bg-brand-blue/90 transition",children:"Back to Wheel"})]})}),y&&n.jsx("div",{className:"fixed inset-0 z-50 bg-black/60 flex items-center justify-center px-6",children:n.jsxs("div",{className:"w-full max-w-sm rounded-2xl bg-base-card border border-base-border p-5 text-center",children:[n.jsx("div",{className:"text-lg font-bold mb-2",children:"Want to quit?"}),n.jsx("p",{className:"text-base-muted mb-5",children:"You'll lose this question's progress."}),n.jsxs("div",{className:"flex gap-3",children:[n.jsx("button",{onClick:()=>m(!1),className:"flex-1 py-3 rounded-xl border border-base-border bg-white/5 hover:bg-white/10 transition",children:"No"}),n.jsx("button",{onClick:u,className:"flex-1 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-500 transition",children:"Yes"})]})]})})]})})}function zd({category:e,onComplete:t,isBonus:r=!1,soundOn:s=!0}){return d.useEffect(()=>{s&&Mr("/sounds/flush.mp3",.8);const a=setTimeout(t,1e3);return dc([50]),()=>clearTimeout(a)},[t,s]),d.useEffect(()=>(document.body.classList.add("hide-bottom-nav"),()=>{document.body.classList.remove("hide-bottom-nav")}),[]),r?n.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-purple-500 to-blue-600 flex flex-col items-center justify-center text-white",children:[n.jsx("h2",{className:"text-5xl font-black mb-8",children:"Bonus Question"}),n.jsx("div",{className:"w-32 h-32 bg-white/20 rounded-full flex items-center justify-center animate-pulse",children:n.jsx("span",{className:"text-6xl",children:"⭐"})})]}):n.jsx("div",{className:"min-h-screen bg-base-bg text-white flex items-center justify-center",children:n.jsxs("div",{className:"relative w-96 h-96 rounded-full flex items-center justify-center",style:{backgroundColor:e.color},children:[n.jsxs("div",{className:"absolute inset-0 opacity-10 pointer-events-none",children:[n.jsx("div",{className:"absolute top-8 left-10 w-20 h-20 bg-white/20 rounded-full"}),n.jsx("div",{className:"absolute bottom-10 right-12 w-24 h-24 bg-white/20 rounded-full"})]}),n.jsxs("div",{className:"relative z-10 text-center",children:[n.jsx("div",{className:"text-4xl font-black mb-2",children:e.name}),n.jsx("div",{className:"w-20 h-20 bg-white/20 rounded-full grid place-items-center mx-auto",children:n.jsx("span",{className:"text-4xl",children:e.icon})})]})]})})}function bg({onDone:e}){return d.useEffect(()=>{const t=setTimeout(e,1e3);return()=>clearTimeout(t)},[e]),n.jsx("div",{className:"min-h-screen flex items-center justify-center bg-green-600 text-white",children:n.jsx("h2",{className:"text-2xl font-black",children:"Whohoo!! 3 correct in a row 🎉"})})}function wg({onSelect:e}){return n.jsx("div",{className:"min-h-screen bg-gradient-to-br from-purple-600 to-pink-600 text-white",children:n.jsxs("div",{className:"mx-auto max-w-md px-5 pt-16 pb-8",children:[n.jsxs("header",{className:"text-center mb-12",children:[n.jsx("div",{className:"text-6xl mb-4",children:"🏆"}),n.jsx("h1",{className:"text-4xl font-black mb-4",children:"Perfect Round!"}),n.jsx("p",{className:"text-xl opacity-90",children:"Choose a character to unlock"})]}),n.jsx("div",{className:"grid grid-cols-2 gap-6",children:sn.map(t=>{const r=Rm[ir(t.name)];return n.jsxs("button",{onClick:()=>e(ir(t.name)),className:"p-6 rounded-3xl border-2 border-white/20 bg-white/10 backdrop-blur text-center hover:bg-white/20 hover:scale-105 transition-all duration-300 active:scale-95",children:[n.jsx("div",{className:"text-4xl mb-3",children:t.icon}),n.jsx("div",{className:"font-black text-lg mb-1",children:r}),n.jsx("div",{className:"text-sm opacity-75",children:t.name})]},ir(t.name))})})]})})}function jg({onBack:e}){const{coins:t,xp:r,level:s,ownedCharacters:a,soundOn:i,addCoins:o,addXp:l,unlockCharacter:c,setSoundOn:u}=cc(),[f,p]=d.useState("wheel"),[h,b]=d.useState({qIndex:0,progress:[!1,!1,!1],lifelines:{fifty:!1,audience:!1}}),[v,j]=d.useState([]),[C,y]=d.useState(null),[m,x]=d.useState(null),[E,N]=d.useState(30),[T,S]=d.useState([]),[g,w]=d.useState(null),[k,P]=d.useState(null),[F,Y]=d.useState(!1),[ee,Q]=d.useState(0),[U,B]=d.useState("none"),[_,M]=d.useState(!1),[q,D]=d.useState(null),[L,A]=d.useState(!1),[H,re]=d.useState(null),[J,O]=d.useState(-1),[I,W]=d.useState(0),[z,$]=d.useState(null),[Z,ie]=d.useState(null),[de,te]=d.useState(!1),[ne,K]=d.useState(null),[R,G]=d.useState(-1),[ce,pe]=d.useState([!1,!1,!1]),[me,$e]=d.useState(!1),[he,ke]=d.useState(!1),ve=d.useRef(null),xe=d.useRef(null),ye=d.useRef(null),ht=d.useMemo(()=>{var se;return((se=window.matchMedia)==null?void 0:se.call(window,"(prefers-reduced-motion: reduce)").matches)||!1},[]);d.useEffect(()=>(Qt(),at(),window.history.pushState({mode:"classic"},"",window.location.href),()=>Ne()),[]),d.useEffect(()=>{const se=le=>{le.preventDefault(),e()};return window.addEventListener("popstate",se),()=>window.removeEventListener("popstate",se)},[e]),d.useEffect(()=>(f==="question"&&E>0&&!he?ve.current=setTimeout(()=>{N(se=>{const le=se-1;return le===10&&i&&Mr("/sounds/tick.mp3",.8),le})},1e3):f==="question"&&E===0&&Y(!0),()=>{ve.current&&clearTimeout(ve.current)}),[f,E,i,he]),d.useEffect(()=>{if(f!=="wheel"||z==null)return;O(z),i&&Mr("/sounds/progress.mp3",.6),G(z);const se=setTimeout(()=>G(-1),900),le=setTimeout(()=>O(-1),900),Ie=setTimeout(()=>{ne&&(ne==="streakFlash"?p("streakFlash"):ne==="characterPicker"?p("characterPicker"):At(),K(null)),$(null)},1800);return()=>{clearTimeout(se),clearTimeout(le),clearTimeout(Ie)}},[f,z,ne,i]),d.useEffect(()=>{f!=="wheel"||!me||(W(se=>se+1),$e(!1))},[f,me]),d.useEffect(()=>{if(f!=="wheel"||Z==null)return;const le=setTimeout(()=>{$(Z),ie(null)},de?1800:0);return()=>clearTimeout(le)},[f,Z,de]);const Qt=async()=>{try{const le=await(await fetch("/data/quiz_questions_bank.csv")).text(),{data:Ie}=hr.parse(le,{header:!0,skipEmptyLines:!0,transformHeader:ge=>ge.trim().toLowerCase()}),Pe=Ie.map((ge,Xe)=>{var Sn;const xt=[ge.option1,ge.option2,ge.option3,ge.option4].map(xr=>(xr||"").trim()).filter(Boolean);if(xt.length<4)return null;let cn={a:0,b:1,c:2,d:3}[(Sn=ge.answer)==null?void 0:Sn.toLowerCase()];return cn===void 0&&(cn=xt.findIndex(xr=>xr.toLowerCase()===(ge.answer||"").toLowerCase())),cn===-1&&(cn=0),{id:ge.id||`q_${Xe}`,prompt:(ge.question||"").trim(),options:xt,correctIndex:cn,category:(ge.category||ge.subject||"general knowledge").trim(),difficulty:(ge.difficulty||"medium").toLowerCase(),explanation:(ge.explanation||"").trim()}}).filter(Boolean);j(Pe)}catch(se){console.error("Failed to load questions:",se),j([])}},at=()=>{const se=new Audio("/sounds/spin.mp3");se.loop=!0,se.volume=.6,xe.current=se},Ne=()=>{if(ve.current&&clearTimeout(ve.current),ye.current&&(clearTimeout(ye.current),ye.current=null),xe.current){try{xe.current.pause()}catch{}xe.current=null}},ze=()=>{b({qIndex:0,progress:[!1,!1,!1],lifelines:{fifty:!1,audience:!1}}),pe([!1,!1,!1]),y(null),x(null),P(null),S([]),w(null),Y(!1),W(0)},At=()=>{e(),ze()},pr=()=>{if(i&&xe.current){try{xe.current.currentTime=0,xe.current.play()}catch{}ye.current&&clearTimeout(ye.current),ye.current=setTimeout(()=>{We()},2e3)}},We=()=>{if(ye.current&&(clearTimeout(ye.current),ye.current=null),xe.current)try{xe.current.pause(),xe.current.currentTime=0}catch{}},X=()=>{if(_)return;D(null),A(!1),re(null),M(!0),pr();const se=Math.floor(Math.random()*sn.length),le=sn[se],Ie=Id(ee),Pe=se*nr+nr/2,ge=(Math.random()-.5)*(nr*.3),Xe=360-Pe+ge;let xt=Id(Xe-Ie);const Zt=En.FULL_TURNS*360+xt,cn=ee+Zt+En.OVERSHOOT;B(`transform ${ht?1e3:En.DURATION}ms cubic-bezier(0.25, 0.46, 0.45, 0.94)`),Q(cn),dc([20,50,20]),setTimeout(()=>{B(`transform ${ht?200:En.SETTLE_DURATION}ms cubic-bezier(0.68, -0.55, 0.265, 1.55)`),Q(Sn=>Sn-En.OVERSHOOT)},ht?1e3:En.DURATION),setTimeout(()=>{We(),M(!1),D({cat:le,index:se}),x(le),re(le.color),A(!0),setTimeout(()=>{A(!1),p("interstitial")},1500),setTimeout(()=>re(null),1e3)},(ht?1e3:En.DURATION)+(ht?200:En.SETTLE_DURATION)+100)},oe=()=>{const se=v.filter(Ie=>{const Pe=Ie.category.toLowerCase(),ge=m.name.toLowerCase();return Pe.includes(ge)||ge.includes(Pe)});let le;se.length>0?le=se[Math.floor(Math.random()*se.length)]:le=v[Math.floor(Math.random()*v.length)],le?(y(le),N(30),S([]),w(null),Y(!1),ke(!1),p("question")):p("wheel")},_e=(se,le,Ie=!1)=>{if(!Ie){ke(!0);return}const Pe=h.qIndex,ge=[...h.progress];ge[Pe]=!0;const Xe=[...ce];if(Xe[Pe]=!!se,pe(Xe),b(xt=>({...xt,progress:ge,qIndex:xt.qIndex+1})),se&&(o(5),l(1),$e(!0)),ie(Pe),te(!!se),Pe===2){const xt=Xe.every(Boolean);K(xt?"streakFlash":"modes")}else K(null);p("wheel")},Ce=se=>{if(!(h.lifelines[se]||!C)){if(b(le=>({...le,lifelines:{...le.lifelines,[se]:!0}})),se==="fifty"){const Ie=C.options.map((Pe,ge)=>ge).filter(Pe=>Pe!==C.correctIndex).slice(0,2);S(Ie)}else if(se==="audience"){const le=40+Math.random()*25;let Ie=100-le;const Pe=[0,0,0,0];Pe[C.correctIndex]=Math.round(le);const ge=[0,1,2,3].filter(Xe=>Xe!==C.correctIndex);ge.forEach((Xe,xt)=>{if(xt===ge.length-1)Pe[Xe]=Ie;else{const Zt=Math.floor(Math.random()*Ie);Pe[Xe]=Zt,Ie-=Zt}}),w(Pe)}}},Ge=se=>{P(se),p("bonusInterstitial")},we=se=>{se&&k&&(c(k),i&&Mr("/sounds/coin.mp3",1)),setTimeout(()=>{At()},3e3)},pt=()=>{p("wheel")};switch(f){case"wheel":return n.jsx(ug,{run:h,coins:t,xp:r,level:s,ownedCharacters:a,onSpin:X,onBack:e,spinning:_,angle:ee,transition:U,result:q,showCallout:L,glowColor:H,soundOn:i,setSoundOn:u,showSparkle:J,pulseIdx:R,coinBurstTick:I,pendingProgressIdx:z,lastAnswerWasCorrect:de,nextProgressIdx:Z});case"interstitial":return n.jsx(zd,{category:m,onComplete:oe,soundOn:i});case"streakFlash":return n.jsx(bg,{onDone:()=>p("characterPicker")});case"question":return n.jsx(Ad,{question:C,category:m,onAnswer:_e,run:h,timeLeft:E,usedLifelines:h.lifelines,onUseLifeline:Ce,eliminatedOptions:T,audienceData:g,onBack:pt,timeUp:F,onTimeUpBackToWheel:()=>{Y(!1),p("wheel")},soundOn:i});case"characterPicker":return n.jsx(wg,{onSelect:Ge});case"bonusInterstitial":return n.jsx(zd,{category:sn.find(se=>ir(se.name)===k),onComplete:()=>p("bonusQuestion"),isBonus:!0,soundOn:i});case"bonusQuestion":if(!C){const se=sn.find(le=>ir(le.name)===k);if(se&&v.length>0){const le=v.filter(Pe=>{const ge=Pe.category.toLowerCase(),Xe=se.name.toLowerCase();return ge.includes(Xe)||Xe.includes(ge)}),Ie=le.length>0?le[Math.floor(Math.random()*le.length)]:v[Math.floor(Math.random()*v.length)];y(Ie),N(30)}return n.jsx("div",{className:"min-h-screen bg-base-bg text-base-text flex items-center justify-center",children:n.jsx("div",{className:"text-lg",children:"Loading bonus question..."})})}return n.jsx(Ad,{question:C,category:sn.find(se=>ir(se.name)===k)||sn[0],onAnswer:we,run:{...h,lifelines:{fifty:!0,audience:!0}},timeLeft:E,usedLifelines:{fifty:!0,audience:!0},onUseLifeline:()=>{},eliminatedOptions:[],audienceData:null,onBack:e,soundOn:i});default:return n.jsx("div",{className:"min-h-screen bg-base-bg text-white flex items-center justify-center",children:n.jsxs("div",{className:"text-center",children:[n.jsx("div",{className:"text-2xl mb-4",children:"Unknown State"}),n.jsx("button",{onClick:()=>p("wheel"),className:"px-6 py-3 bg-blue-600 rounded-lg",children:"Back to Wheel"})]})})}}function Ng({lives:e,maxLives:t=3}){const[r,s]=d.useState(null),[a,i]=d.useState(e);return d.useEffect(()=>{e<a?(s(a-1),setTimeout(()=>s(null),600)):e>a&&(s(e-1),setTimeout(()=>s(null),1e3)),i(e)},[e,a]),n.jsxs("div",{className:"relative",children:[n.jsx("style",{jsx:!0,children:`
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
      `}),n.jsxs("div",{className:"flex items-center gap-3 px-5 py-1.5 bg-gradient-to-r from-red-500/20 to-pink-500/20 rounded-full backdrop-blur-md border border-white/10 shadow-xl",children:[n.jsx("div",{className:"flex items-center gap-1.5",children:[...Array(t)].map((o,l)=>n.jsx("div",{className:`relative transition-all duration-300 ${l<e?"scale-100":"scale-75"}`,children:n.jsxs("div",{className:"relative",children:[l<e?n.jsxs("div",{className:`relative ${l===r&&e>a?"heart-gained":""}`,children:[n.jsx("span",{className:`text-3xl drop-shadow-lg ${l===e-1?"heart-beat":""}`,children:"❤️"}),l===e-1&&e===1&&n.jsx("div",{className:"absolute inset-0 rounded-full heart-glow"})]}):n.jsx("div",{className:`relative ${l===r&&e<a?"heart-lost":""}`,children:n.jsx("span",{className:"text-3xl opacity-20 grayscale",children:"💔"})}),l===r&&e>a&&n.jsxs("div",{className:"absolute inset-0 flex items-center justify-center pointer-events-none",children:[n.jsx("div",{className:"absolute w-10 h-10 bg-green-400 rounded-full animate-ping opacity-30"}),n.jsx("span",{className:"absolute text-sm font-bold text-green-400 animate-bounce",children:"+1"})]})]})},l))}),n.jsx("div",{className:"pr-1",children:n.jsxs("div",{className:`text-sm font-bold ${e===1?"text-red-400 animate-pulse":e===t?"text-green-400":"text-white"}`,children:[e,"/",t]})})]}),e===1&&n.jsx("div",{className:"absolute -bottom-10 left-1/2 -translate-x-1/2 whitespace-nowrap",children:n.jsx("div",{className:"px-3 py-1 bg-red-500/20 border border-red-500/50 rounded-full backdrop-blur-sm",children:n.jsx("span",{className:"text-xs font-medium text-red-400 animate-pulse",children:"Last life! Be careful! ⚠️"})})})]})}function kg({question:e,onAnswer:t,lives:r,questionCount:s,correctStreak:a,totalScore:i,currentDifficulty:o,timeLeft:l,showFeedback:c,lastAnswerCorrect:u,checkpoint:f,onBack:p,soundOn:h,setSoundOn:b}){const[v,j]=d.useState(null),[C,y]=d.useState(!1),[m,x]=d.useState(!1),E={EASY:{emoji:"🌱",color:"from-emerald-400 to-green-500",accentGradient:"from-emerald-500/20 to-green-600/20",label:"Sprout",motivationalText:"Great start! Keep growing! 🌱"},MEDIUM:{emoji:"🌻",color:"from-yellow-400 to-amber-500",accentGradient:"from-yellow-500/20 to-amber-600/20",label:"Blooming",motivationalText:"You're blooming beautifully! 🌻"},HARD:{emoji:"🔥",color:"from-orange-400 to-red-500",accentGradient:"from-orange-500/20 to-red-600/20",label:"On Fire",motivationalText:"You're on fire! Keep it up! 🔥"},EXPERT:{emoji:"⚡",color:"from-purple-400 to-indigo-500",accentGradient:"from-purple-500/20 to-indigo-600/20",label:"Lightning",motivationalText:"Lightning fast thinking! ⚡"},LEGENDARY:{emoji:"👑",color:"from-pink-400 to-purple-600",accentGradient:"from-pink-500/20 to-purple-600/20",label:"Legendary",motivationalText:"Legendary performance! 👑"}},N=E[o];d.useEffect(()=>{a>0&&a%5===0&&c&&u&&(y(!0),setTimeout(()=>y(!1),3e3))},[a,c,u]),d.useEffect(()=>{c&&u&&(x(!0),setTimeout(()=>x(!1),1e3))},[c,u]);const T=S=>{c||(j(S),t(S))};return d.useEffect(()=>(document.body.classList.add("hide-bottom-nav"),()=>{document.body.classList.remove("hide-bottom-nav")}),[]),n.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-black text-white relative overflow-hidden",children:[n.jsx("style",{jsx:!0,children:`
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
      `}),n.jsxs("div",{className:"fixed inset-0 pointer-events-none",children:[n.jsx("div",{className:"absolute top-20 left-10 text-[100px] opacity-10 float-animation",children:N.emoji}),n.jsx("div",{className:"absolute top-40 right-20 text-[80px] opacity-10 float-animation",style:{animationDelay:"1s"},children:"⭐"}),n.jsx("div",{className:"absolute bottom-40 left-20 text-[90px] opacity-10 float-animation",style:{animationDelay:"2s"},children:"🎯"}),n.jsx("div",{className:"absolute bottom-20 right-10 text-[70px] opacity-10 float-animation",style:{animationDelay:"3s"},children:"🏆"})]}),n.jsxs("div",{className:"relative z-10 px-4 pt-[calc(env(safe-area-inset-top)+2rem)]",children:[n.jsxs("div",{className:"flex justify-between items-center mb-8 slide-in",children:[n.jsx("button",{onClick:p,className:"w-12 h-12 glass-card rounded-2xl shadow-lg flex items-center justify-center hover:scale-105 transition-transform",children:n.jsx("span",{className:"text-xl",children:"◀️"})}),n.jsx(Ng,{lives:r}),n.jsx("button",{onClick:()=>b(!h),className:"w-12 h-12 glass-card rounded-2xl shadow-lg flex items-center justify-center hover:scale-105 transition-transform",children:n.jsx("span",{className:"text-xl",children:h?"🔊":"🔇"})})]}),n.jsx("div",{className:`glass-card rounded-3xl p-2 shadow-xl mb-2 mt-12 slide-in bg-gradient-to-r ${N.accentGradient}`,style:{animationDelay:"0.1s"},children:n.jsxs("div",{className:"grid grid-cols-3 gap-3",children:[n.jsxs("div",{className:"text-center",children:[n.jsx("div",{className:`text-3xl font-black bg-gradient-to-r ${N.color} bg-clip-text text-transparent ${m?"score-pulse":""}`,children:i}),n.jsx("div",{className:"text-xs text-white/60 font-medium mt-1",children:"Points"}),c&&u&&n.jsx("div",{className:"absolute -top-2 left-1/2 -translate-x-1/2",children:n.jsxs("span",{className:"text-green-400 font-bold text-sm coin-animation",children:["+",E[o]?o==="EASY"?10:o==="MEDIUM"?20:o==="HARD"?30:o==="EXPERT"?50:100:10]})})]}),n.jsxs("div",{className:"text-center",children:[n.jsx("div",{className:"text-3xl font-black text-white",children:s}),n.jsx("div",{className:"text-xs text-white/60 font-medium mt-1",children:"Questions"})]}),n.jsxs("div",{className:"text-center relative",children:[n.jsx("div",{className:`text-3xl font-black text-orange-400 ${a>0?"streak-flame":""}`,children:a}),n.jsx("div",{className:"text-xs text-white/60 font-medium mt-1",children:"Streak 🔥"})]})]})}),n.jsxs("div",{className:"flex justify-between items-center mb-1 slide-in",style:{animationDelay:"0.2s"},children:[n.jsx("div",{className:`px-4 py-3 rounded-full bg-gradient-to-r ${N.color} text-white shadow-lg`,children:n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx("span",{className:"text-2xl",children:N.emoji}),n.jsxs("div",{children:[n.jsx("div",{className:"font-bold text-sm",children:N.label}),n.jsxs("div",{className:"text-[10px] opacity-90",children:["Level ",s+1]})]})]})}),n.jsx("div",{className:"relative",children:n.jsxs("div",{className:"w-20 h-20 glass-card rounded-full shadow-xl flex items-center justify-center",children:[n.jsxs("svg",{className:"absolute inset-0 w-full h-full",children:[n.jsx("circle",{cx:"40",cy:"40",r:"35",fill:"none",stroke:"rgba(255, 255, 255, 0.1)",strokeWidth:"6",className:"progress-ring"}),n.jsx("circle",{cx:"40",cy:"40",r:"35",fill:"none",stroke:l<=5?"#ef4444":l<=10?"#f59e0b":"#10b981",strokeWidth:"6",strokeDasharray:`${l/30*220} 220`,strokeLinecap:"round",className:"progress-ring transition-all duration-1000"})]}),n.jsx("div",{className:"relative z-10",children:n.jsx("span",{className:`text-2xl font-black ${l<=5?"text-red-400 animate-pulse":l<=10?"text-amber-400":"text-white"}`,children:l})})]})})]})]}),n.jsxs("div",{className:"px-4 slide-in",style:{animationDelay:"0.3s"},children:[n.jsxs("div",{className:"glass-card rounded-3xl shadow-xl p-6 mb-6 border border-white/10",children:[n.jsx("div",{className:"text-center mb-2",children:n.jsxs("span",{className:"text-xs font-bold text-white/40 uppercase tracking-wider",children:["Question ",s+1]})}),n.jsx("h2",{className:"text-xl font-bold text-center text-white leading-relaxed",children:e.prompt})]}),n.jsx("div",{className:"space-y-3",children:e.options.map((S,g)=>{const w=["A","B","C","D"],k=["from-blue-400 to-blue-500","from-green-400 to-green-500","from-yellow-400 to-yellow-500","from-purple-400 to-purple-500"];let P="glass-card border border-white/10",F="";return c&&(g===e.correctIndex?(P="bg-gradient-to-r from-green-500/20 to-emerald-500/20 border-2 border-green-400",F="correct-bounce"):v===g&&!u&&(P="bg-gradient-to-r from-red-500/20 to-pink-500/20 border-2 border-red-400",F="wrong-shake")),n.jsx("button",{onClick:()=>T(g),disabled:c,className:`w-full p-4 rounded-2xl shadow-lg transition-all ${P} ${F} 
                  ${c?"":"hover:scale-[1.02] active:scale-[0.98] hover:bg-white/10"} slide-in`,style:{animationDelay:`${.4+g*.05}s`},children:n.jsxs("div",{className:"flex items-center gap-4",children:[n.jsx("div",{className:`w-12 h-12 rounded-xl bg-gradient-to-br ${k[g]} 
                    text-white font-bold text-xl flex items-center justify-center shadow-md`,children:w[g]}),n.jsx("span",{className:"flex-1 text-left font-medium text-white",children:S}),c&&g===e.correctIndex&&n.jsx("span",{className:"text-2xl",children:"✅"}),c&&v===g&&!u&&n.jsx("span",{className:"text-2xl",children:"❌"})]})},g)})}),c&&n.jsx("div",{className:"mt-6 text-center slide-in",children:n.jsx("p",{className:"text-sm font-medium text-white/70",children:u?N.motivationalText:"No worries! Keep trying! 💪"})}),f>0&&n.jsx("div",{className:"mt-4 flex justify-center slide-in",style:{animationDelay:"0.6s"},children:n.jsx("div",{className:"glass-card rounded-full px-4 py-2 shadow-lg border border-white/10",children:n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx("span",{className:"text-xl",children:"🏁"}),n.jsxs("span",{className:"text-sm font-bold text-white/80",children:["Checkpoint: Question ",f]})]})})})]}),C&&n.jsx("div",{className:"fixed inset-0 pointer-events-none flex items-center justify-center z-50",children:n.jsx("div",{className:"bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-8 py-6 rounded-3xl shadow-2xl animate-bounce",children:n.jsxs("div",{className:"text-center",children:[n.jsx("div",{className:"text-5xl mb-3",children:"🎉"}),n.jsx("div",{className:"text-2xl font-black mb-2",children:"AMAZING STREAK!"}),n.jsx("div",{className:"text-lg",children:"You earned a life back! ❤️"})]})})})]})}function Sg({score:e,questionsAnswered:t,highScore:r,checkpoint:s,onRestart:a,onContinue:i,onBack:o}){const l=e>r,[c,u]=d.useState(!1),[f,p]=d.useState(0),[h,b]=d.useState(!1),v=d.useRef(null);d.useEffect(()=>{const x=e/60;let E=0;const N=setInterval(()=>{E+=x,E>=e?(p(e),clearInterval(N),l&&(u(!0),setTimeout(()=>u(!1),5e3))):p(Math.floor(E))},2e3/60);return setTimeout(()=>b(!0),2200),()=>clearInterval(N)},[e,l]),d.useEffect(()=>(document.body.classList.add("hide-bottom-nav"),()=>{document.body.classList.remove("hide-bottom-nav")}),[]);const C=(()=>t>=100?{emoji:"👑",title:"LEGENDARY!",subtitle:"You're a true Quiz Legend!",color:"from-purple-400 to-pink-500",stars:5}:t>=50?{emoji:"🏆",title:"CHAMPION!",subtitle:"Outstanding performance!",color:"from-yellow-400 to-amber-500",stars:5}:t>=30?{emoji:"💎",title:"EXPERT!",subtitle:"You're getting really good!",color:"from-blue-400 to-cyan-500",stars:4}:t>=20?{emoji:"⭐",title:"STAR PLAYER!",subtitle:"Keep up the great work!",color:"from-green-400 to-emerald-500",stars:3}:t>=10?{emoji:"🎯",title:"NICE TRY!",subtitle:"You're improving fast!",color:"from-orange-400 to-red-500",stars:2}:{emoji:"🌟",title:"GOOD START!",subtitle:"Every expert was once a beginner!",color:"from-indigo-400 to-purple-500",stars:1})();return n.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-black text-white relative overflow-hidden",children:[n.jsx("style",{jsx:!0,children:`
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
      `}),n.jsxs("div",{className:"absolute inset-0 overflow-hidden",children:[n.jsx("div",{className:"absolute top-20 left-10 text-[150px] opacity-5 float-animation",children:"🏆"}),n.jsx("div",{className:"absolute bottom-20 right-10 text-[120px] opacity-5 float-animation",style:{animationDelay:"1s"},children:"⭐"}),n.jsx("div",{className:"absolute top-40 right-20 text-[100px] opacity-5 float-animation",style:{animationDelay:"2s"},children:"🎯"})]}),c&&n.jsx("div",{className:"fixed inset-0 pointer-events-none z-50",children:[...Array(40)].map((y,m)=>n.jsx("div",{className:"absolute confetti-fall",style:{left:`${Math.random()*100}%`,animationDelay:`${Math.random()*3}s`,animationDuration:`${3+Math.random()*2}s`},children:n.jsx("span",{className:"text-3xl",children:["🎉","⭐","🎊","✨","🎈","💫","🌟"][Math.floor(Math.random()*7)]})},m))}),n.jsxs("div",{className:"relative z-10 flex flex-col items-center justify-center min-h-screen px-6 text-center",children:[n.jsxs("div",{className:"mb-8 slide-up",children:[n.jsx("h1",{className:"text-6xl font-black mb-4 bg-gradient-to-r from-red-400 to-pink-500 bg-clip-text text-transparent",children:"GAME OVER"}),l&&n.jsx("div",{className:"fade-in",style:{animationDelay:"1s"},children:n.jsx("div",{className:"inline-block px-6 py-3 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-bold shadow-2xl glow-text",children:n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsx("span",{className:"text-3xl",children:"🏆"}),n.jsx("span",{className:"text-xl",children:"NEW HIGH SCORE!"}),n.jsx("span",{className:"text-3xl",children:"🏆"})]})})})]}),h&&n.jsx("div",{className:"mb-8 slide-up",style:{animationDelay:"0.3s"},children:n.jsxs("div",{className:`glass-card rounded-3xl p-6 bg-gradient-to-r ${C.color} bg-opacity-20 border-2 border-white/20 shadow-2xl`,children:[n.jsx("div",{className:"text-6xl mb-3 bounce-animation",children:C.emoji}),n.jsx("h2",{className:"text-3xl font-black mb-2",children:C.title}),n.jsx("p",{className:"text-white/80 mb-4",children:C.subtitle}),n.jsx("div",{className:"flex justify-center gap-1",children:[...Array(5)].map((y,m)=>n.jsx("span",{className:`text-2xl ${m<C.stars?"star-pop":""}`,style:{animationDelay:`${2.5+m*.1}s`},children:m<C.stars?"⭐":"☆"},m))})]})}),n.jsxs("div",{className:"grid grid-cols-2 gap-4 mb-8 w-full max-w-md",children:[n.jsxs("div",{className:"glass-card rounded-2xl p-6 shadow-xl slide-up",style:{animationDelay:"0.4s"},children:[n.jsx("div",{className:"text-4xl mb-2",children:"🎯"}),n.jsx("div",{ref:v,className:`text-4xl font-black ${l?"text-yellow-400":"text-white"}`,children:f}),n.jsx("div",{className:"text-sm text-white/60 font-medium",children:"Points Earned"}),n.jsx("div",{className:"mt-3 pt-3 border-t border-white/10",children:n.jsxs("div",{className:"text-xs text-white/50",children:[t," questions"]})})]}),n.jsxs("div",{className:"glass-card rounded-2xl p-6 shadow-xl slide-up",style:{animationDelay:"0.5s"},children:[n.jsx("div",{className:"text-4xl mb-2",children:"📊"}),n.jsx("div",{className:"text-4xl font-black text-white",children:t}),n.jsx("div",{className:"text-sm text-white/60 font-medium",children:"Questions"}),n.jsx("div",{className:"mt-3 pt-3 border-t border-white/10",children:n.jsxs("div",{className:"text-xs text-white/50",children:["Best: ",Math.max(r,e)]})})]})]}),n.jsx("div",{className:"glass-card rounded-2xl px-6 py-4 mb-8 w-full max-w-md slide-up",style:{animationDelay:"0.6s"},children:n.jsx("p",{className:"text-white/80 font-medium",children:t>=50?"Incredible performance! You're a quiz master! 🌟":t>=20?"Great job! You're getting stronger! 💪":"Keep practicing! Every attempt makes you better! 🚀"})}),n.jsxs("div",{className:"space-y-3 w-full max-w-md",children:[s>0&&i&&n.jsx("button",{onClick:i,className:"w-full py-4 bg-gradient-to-r from-green-400 to-emerald-500 text-white rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all hover:scale-[1.02] active:scale-[0.98] slide-up",style:{animationDelay:"0.7s"},children:n.jsxs("div",{className:"flex items-center justify-center gap-3",children:[n.jsx("span",{className:"text-2xl",children:"🏁"}),n.jsxs("span",{children:["Continue from Question ",s]})]})}),n.jsx("button",{onClick:a,className:"w-full py-4 bg-gradient-to-r from-blue-400 to-indigo-500 text-white rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all hover:scale-[1.02] active:scale-[0.98] slide-up",style:{animationDelay:"0.8s"},children:n.jsxs("div",{className:"flex items-center justify-center gap-3",children:[n.jsx("span",{className:"text-2xl",children:"🎮"}),n.jsx("span",{children:"Play Again"})]})}),n.jsx("button",{onClick:o,className:"w-full py-4 glass-card text-white rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl transition-all hover:scale-[1.02] active:scale-[0.98] hover:bg-white/10 slide-up",style:{animationDelay:"0.9s"},children:n.jsxs("div",{className:"flex items-center justify-center gap-3",children:[n.jsx("span",{className:"text-2xl",children:"🏠"}),n.jsx("span",{children:"Back to Games"})]})})]})]})]})}const Md={EASY:{min:0,max:9,timer:30,points:10},MEDIUM:{min:10,max:24,timer:25,points:20},HARD:{min:25,max:49,timer:20,points:30},EXPERT:{min:50,max:99,timer:15,points:50},LEGENDARY:{min:100,max:1/0,timer:10,points:100}};function Cg({onBack:e,isFromQuest:t}){const{coins:r,xp:s,level:a,soundOn:i,addCoins:o,addXp:l,setSoundOn:c}=cc(),[u,f]=d.useState("playing"),[p,h]=d.useState(3),[b,v]=d.useState(0),[j,C]=d.useState(0),[y,m]=d.useState(0),[x,E]=d.useState("EASY"),[N,T]=d.useState([]),[S,g]=d.useState(null),[w,k]=d.useState(30),[P,F]=d.useState(!1),[Y,ee]=d.useState(!1),[Q,U]=d.useState(0),[B,_]=d.useState(!1),M=d.useRef(null),q=d.useRef(new Set);d.useEffect(()=>(L(),W(),window.history.pushState({mode:"survival"},"",window.location.href),()=>{M.current&&clearTimeout(M.current)}),[]),d.useEffect(()=>(u==="playing"&&S&&w>0&&!P&&(M.current=setTimeout(()=>{k(R=>R<=1?(O(),0):(R===6&&i&&ne("/sounds/tick.mp3",.8),R-1))},1e3)),()=>{M.current&&clearTimeout(M.current)}),[u,S,w,P,i]),d.useEffect(()=>{const R=D(b);R!==x&&(E(R),i&&ne("/sounds/levelup.mp3",.6))},[b,x,i]),d.useEffect(()=>{b>0&&b%10===0&&(I(),U(b),i&&ne("/sounds/checkpoint.mp3",.7))},[b,i]),d.useEffect(()=>{const R=G=>{G.preventDefault(),_(!0),window.history.pushState({mode:"survival"},"",window.location.href)};return window.addEventListener("popstate",R),()=>{window.removeEventListener("popstate",R)}},[]);const D=R=>R>=100?"LEGENDARY":R>=50?"EXPERT":R>=25?"HARD":R>=10?"MEDIUM":"EASY",L=async()=>{try{const G=await(await fetch("/data/quiz_questions_bank.csv")).text(),{data:ce}=hr.parse(G,{header:!0,skipEmptyLines:!0,transformHeader:me=>me.trim().toLowerCase()}),pe=ce.map((me,$e)=>{var xe;const he=[me.option1,me.option2,me.option3,me.option4].map(ye=>(ye||"").trim()).filter(Boolean);if(he.length<4)return null;let ve={a:0,b:1,c:2,d:3}[(xe=me.answer)==null?void 0:xe.toLowerCase()];return ve===void 0&&(ve=he.findIndex(ye=>ye.toLowerCase()===(me.answer||"").toLowerCase())),ve===-1&&(ve=0),{id:me.id||`q_${$e}`,prompt:(me.question||"").trim(),options:he,correctIndex:ve,category:(me.category||me.subject||"general").trim(),difficulty:(me.difficulty||"medium").toLowerCase()}}).filter(Boolean);T(pe),A(pe)}catch(R){console.error("Failed to load questions:",R)}},A=(R=N)=>{const G=R.filter($e=>!q.current.has($e.id));G.length===0&&(q.current.clear(),G.push(...R));const ce=x.toLowerCase();let pe=G.filter($e=>$e.difficulty===ce||$e.difficulty==="medium");pe.length===0&&(pe=G);const me=pe[Math.floor(Math.random()*pe.length)];me&&(q.current.add(me.id),g(me),k(Md[x].timer),F(!1))},H=R=>{if(P)return;const G=R===S.correctIndex;ee(G),F(!0),G?re():J(),setTimeout(()=>{(p>0||G)&&(v(ce=>ce+1),A())},1500)},re=()=>{const R=Md[x].points;m(G=>G+R),C(G=>{const ce=G+1;if(t){const pe=JSON.parse(localStorage.getItem("questProgress")||"{}");pe.winStreak=Math.max(pe.winStreak||0,ce),pe.date=`${new Date().getFullYear()}-${new Date().getMonth()+1}-${new Date().getDate()}`,localStorage.setItem("questProgress",JSON.stringify(pe)),ce>=5&&console.log("Win streak quest completed!")}return ce%5===0&&p<3&&(h(pe=>Math.min(pe+1,3)),i&&ne("/sounds/lifeup.mp3",.8)),ce}),o(Math.floor(R/10)),l(1),i&&ne("/sounds/correct.mp3",.7)},J=()=>{C(0),h(R=>{const G=R-1;return G<=0&&(f("gameOver"),$()),G}),i&&ne("/sounds/wrong.mp3",.7),K([200])},O=()=>{J()},I=()=>{const R={questionCount:b,totalScore:y,lives:p,correctStreak:j,timestamp:Date.now()};localStorage.setItem("survival_checkpoint",JSON.stringify(R))},W=()=>{const R=localStorage.getItem("survival_checkpoint");if(R)try{const G=JSON.parse(R);Date.now()-G.timestamp<864e5?(v(G.questionCount),m(G.totalScore),h(G.lives),C(G.correctStreak),U(G.questionCount)):localStorage.removeItem("survival_checkpoint")}catch(G){console.error("Failed to load checkpoint:",G)}},z=()=>{localStorage.removeItem("survival_checkpoint"),U(0)},$=()=>{const R=parseInt(localStorage.getItem("survival_highscore")||"0");y>R&&(localStorage.setItem("survival_highscore",y.toString()),localStorage.setItem("survival_highquestions",b.toString()))},Z=()=>{f("playing"),h(3),v(0),C(0),m(0),E("EASY"),q.current.clear(),z(),A()},ie=()=>{f("playing"),A()},de=()=>{_(!0)},te=()=>{if(t){const R=JSON.parse(localStorage.getItem("questProgress")||"{}");R.winStreak=Math.max(R.winStreak||0,j),R.date=`${new Date().getFullYear()}-${new Date().getMonth()+1}-${new Date().getDate()}`,localStorage.setItem("questProgress",JSON.stringify(R)),window.location.href="/profile/quests"}else window.history.go(-1),e()},ne=(R,G=.5)=>{try{const ce=new Audio(R);ce.volume=G,ce.play()}catch{}},K=R=>{navigator.vibrate&&navigator.vibrate(R)};return d.useEffect(()=>(document.body.classList.add("hide-bottom-nav"),()=>{document.body.classList.remove("hide-bottom-nav")}),[]),u==="gameOver"?n.jsxs(n.Fragment,{children:[n.jsx(Sg,{score:y,questionsAnswered:b,highScore:parseInt(localStorage.getItem("survival_highscore")||"0"),checkpoint:Q,onRestart:Z,onContinue:Q>0?ie:null,onBack:de}),B&&n.jsx("div",{className:"fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 px-6",children:n.jsxs("div",{className:"bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-6 max-w-sm w-full shadow-2xl slide-in border border-white/10",children:[n.jsxs("div",{className:"text-center mb-6",children:[n.jsx("div",{className:"text-5xl mb-3",children:"🚪"}),n.jsx("h3",{className:"text-xl font-bold text-white mb-2",children:"Leave the game?"}),n.jsx("p",{className:"text-white/70",children:"Your progress saves at checkpoints!"})]}),n.jsxs("div",{className:"flex gap-3",children:[n.jsx("button",{onClick:()=>_(!1),className:"flex-1 py-3 bg-gradient-to-r from-green-400 to-emerald-500 text-white rounded-2xl font-bold shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]",children:"Keep Playing"}),n.jsx("button",{onClick:te,className:"flex-1 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-2xl font-bold shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]",children:"Exit"})]})]})})]}):S?n.jsxs(n.Fragment,{children:[n.jsx(kg,{question:S,onAnswer:H,lives:p,questionCount:b,correctStreak:j,totalScore:y,currentDifficulty:x,timeLeft:w,showFeedback:P,lastAnswerCorrect:Y,checkpoint:Q,onBack:de,soundOn:i,setSoundOn:c}),B&&n.jsx("div",{className:"fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 px-6",children:n.jsxs("div",{className:"bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-6 max-w-sm w-full shadow-2xl slide-in border border-white/10",children:[n.jsxs("div",{className:"text-center mb-6",children:[n.jsx("div",{className:"text-5xl mb-3",children:"🚪"}),n.jsx("h3",{className:"text-xl font-bold text-white mb-2",children:"Leave the game?"}),n.jsx("p",{className:"text-white/70",children:"Your progress saves at checkpoints!"})]}),n.jsxs("div",{className:"flex gap-3",children:[n.jsx("button",{onClick:()=>_(!1),className:"flex-1 py-3 bg-gradient-to-r from-green-400 to-emerald-500 text-white rounded-2xl font-bold shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]",children:"Keep Playing"}),n.jsx("button",{onClick:te,className:"flex-1 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-2xl font-bold shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]",children:"Exit"})]})]})})]}):n.jsx("div",{className:"min-h-screen bg-base-bg text-white flex items-center justify-center",children:n.jsx("div",{className:"text-xl",children:"Loading questions..."})})}const rr=[{id:1,name:"Sandy Beach",emoji:"🏖️",theme:{background:"from-yellow-300 via-orange-300 to-blue-400",accent:"from-yellow-400 to-orange-400",cardBg:"from-amber-500/20 to-yellow-500/20",unlockGradient:"from-yellow-400 to-amber-500"},difficulty:"EASY",difficultyRange:{min:0,max:9},questionDifficulty:["easy"],requiredCorrect:2,timeLimit:300,rewards:{perCorrectAnswer:10,gemChance:.3,gemBonus:5,speedBonus:3,perfectBonus:50,treasurePiece:"🧩",completionCoins:30},description:"Start your adventure on the sunny shores! Easy questions to warm up.",unlockRequirement:null,visualElements:{bgEmojis:["🌊","🐚","🦀","⛱️","🌺"],diggingEmoji:"⛏️",foundEmojis:["💎","🪙","✨"]}},{id:2,name:"Jungle Cave",emoji:"🌴",theme:{background:"from-green-400 via-emerald-500 to-teal-600",accent:"from-green-500 to-emerald-600",cardBg:"from-green-500/20 to-emerald-500/20",unlockGradient:"from-green-400 to-emerald-500"},difficulty:"EASY-MEDIUM",difficultyRange:{min:10,max:24},questionDifficulty:["easy","medium"],requiredCorrect:2,timeLimit:300,rewards:{perCorrectAnswer:15,gemChance:.35,gemBonus:7,speedBonus:5,perfectBonus:75,treasurePiece:"🗝️",completionCoins:50},description:"Explore the mysterious jungle caves! Watch out for tricky vines!",unlockRequirement:{island:1,treasurePiece:!0},visualElements:{bgEmojis:["🌿","🦜","🐒","🦋","🌺"],diggingEmoji:"⛏️",foundEmojis:["💎","🪙","🌟"]}},{id:3,name:"Crystal Mountain",emoji:"⛰️",theme:{background:"from-purple-400 via-pink-400 to-indigo-500",accent:"from-purple-500 to-pink-500",cardBg:"from-purple-500/20 to-pink-500/20",unlockGradient:"from-purple-400 to-pink-500"},difficulty:"MEDIUM",difficultyRange:{min:25,max:49},questionDifficulty:["medium"],requiredCorrect:2,timeLimit:300,rewards:{perCorrectAnswer:20,gemChance:.4,gemBonus:10,speedBonus:7,perfectBonus:100,treasurePiece:"💎",completionCoins:75},description:"Climb the sparkling crystal peaks! Medium challenges await!",unlockRequirement:{island:2,treasurePiece:!0},visualElements:{bgEmojis:["✨","🔮","⭐","🌟","💫"],diggingEmoji:"⚒️",foundEmojis:["💎","🪙","🌈"]}},{id:4,name:"Pirate Ship",emoji:"🏴‍☠️",theme:{background:"from-slate-600 via-blue-600 to-cyan-500",accent:"from-slate-700 to-blue-700",cardBg:"from-slate-500/20 to-blue-500/20",unlockGradient:"from-slate-500 to-blue-600"},difficulty:"MEDIUM-HARD",difficultyRange:{min:50,max:99},questionDifficulty:["medium","hard"],requiredCorrect:2,timeLimit:300,rewards:{perCorrectAnswer:30,gemChance:.45,gemBonus:15,speedBonus:10,perfectBonus:150,treasurePiece:"🗺️",completionCoins:100},description:"Ahoy matey! Navigate the pirate ship's challenging puzzles!",unlockRequirement:{island:3,treasurePiece:!0},visualElements:{bgEmojis:["⚓","🦜","💀","🌊","⛵"],diggingEmoji:"🗡️",foundEmojis:["💎","🪙","👑"]}},{id:5,name:"Volcano Peak",emoji:"🌋",theme:{background:"from-red-500 via-orange-500 to-yellow-500",accent:"from-red-600 to-orange-600",cardBg:"from-red-500/20 to-orange-500/20",unlockGradient:"from-red-500 to-orange-500"},difficulty:"HARD",difficultyRange:{min:100,max:1/0},questionDifficulty:["hard"],requiredCorrect:2,timeLimit:300,rewards:{perCorrectAnswer:50,gemChance:.5,gemBonus:25,speedBonus:15,perfectBonus:200,treasurePiece:"👑",completionCoins:150},description:"The ultimate challenge! Can you conquer the volcano?",unlockRequirement:{island:4,treasurePiece:!0},visualElements:{bgEmojis:["🔥","🌋","💥","⚡","🔴"],diggingEmoji:"⛏️",foundEmojis:["💎","🪙","🏆"]}}],Fe={SHOVELS_PER_ISLAND:3,QUESTIONS_PER_ISLAND:3,SPEED_BONUS_THRESHOLD:5,MIN_CORRECT_FOR_TREASURE:2,FINAL_TREASURE_REWARD:200,FINAL_TREASURE_TITLE:"Treasure Master",DIGGING_ANIMATION_DURATION:1500,REWARD_DISPLAY_DURATION:2e3,TRANSITION_DURATION:500,STORAGE_KEYS:{PROGRESS:"treasureHunt_progress",STATS:"treasureHunt_stats",UNLOCKED_ISLANDS:"treasureHunt_unlocked",COMPLETED_ISLANDS:"treasureHunt_completed",TREASURE_PIECES:"treasureHunt_pieces"},SOUNDS:{DIG:"/sounds/dig.mp3",TREASURE_FOUND:"/sounds/treasure.mp3",GEM_FOUND:"/sounds/gem.mp3",WRONG:"/sounds/wrong.mp3",ISLAND_COMPLETE:"/sounds/islandcomplete.mp3",ISLAND_UNLOCK:"/sounds/unlock.mp3",FINAL_TREASURE:"/sounds/victory.mp3",TICK:"/sounds/tick.mp3",SHOVEL_BREAK:"/sounds/break.mp3"}},un=e=>rr.find(t=>t.id===e),Eg=(e,t)=>{const r=un(e);if(!r.unlockRequirement)return!0;const s=t[r.unlockRequirement.island];return s&&s.treasurePiece},Pg=(e,t)=>{const r={0:["Keep trying! You'll get it! 💪","Don't give up! Adventure awaits! 🌟","Practice makes perfect! 🎯"],1:["Good effort! Almost there! 🌈","Nice try! Keep going! ⭐","You're learning fast! 🚀"],2:["Awesome! You found treasure! 🏆","Great job, explorer! 🎉","You're amazing! ✨"],3:["PERFECT! You're a champion! 👑","INCREDIBLE! Master explorer! 🌟","LEGENDARY performance! 🏆"]},s=r[e]||r[0];return s[Math.floor(Math.random()*s.length)]},Tg=e=>rr.map(t=>{var r;return{id:t.id,piece:t.rewards.treasurePiece,collected:((r=e[t.id])==null?void 0:r.treasurePiece)||!1}});function Rg({islands:e,islandProgress:t,onSelectIsland:r,onBack:s,soundOn:a,setSoundOn:i,totalStats:o}){const[l,c]=d.useState(!1),u=Tg(t),f=u.filter(h=>h.collected).length,p=Math.round(f/e.length*100);return d.useEffect(()=>(document.body.style.position="fixed",document.body.style.overflow="hidden",document.body.style.width="100%",document.body.style.height="100%",()=>{document.body.style.position="",document.body.style.overflow="",document.body.style.width="",document.body.style.height=""}),[]),n.jsxs("div",{className:"fixed inset-0 bg-gradient-to-b from-sky-400 via-blue-500 to-blue-600 overflow-hidden flex flex-col",children:[n.jsx("style",{jsx:!0,children:`
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
      `}),n.jsxs("div",{className:"absolute inset-0",children:[n.jsx("div",{className:"absolute top-10 cloud-drift",style:{animationDelay:"0s"},children:n.jsx("div",{className:"text-6xl opacity-40",children:"☁️"})}),n.jsx("div",{className:"absolute top-12 cloud-drift",style:{animationDelay:"7s",animationDuration:"25s"},children:n.jsx("div",{className:"text-5xl opacity-40",children:"☁️"})}),n.jsx("div",{className:"absolute top-10 right-12",children:n.jsx("div",{className:"text-6xl pulse-animation opacity-80",children:"☀️"})}),n.jsx("div",{className:"absolute top-16 left-20 float-animation opacity-60",children:n.jsx("div",{className:"text-2xl",children:"🦜"})})]}),n.jsxs("div",{className:"relative z-20 px-4 pt-[calc(env(safe-area-inset-top)+3rem)]",children:[n.jsxs("div",{className:"flex justify-between items-center mb-3",children:[n.jsx("button",{onClick:s,className:"w-11 h-11 glass-card rounded-2xl shadow-lg flex items-center justify-center hover:scale-105 transition-transform",children:n.jsx("span",{className:"text-xl",children:"⬅"})}),n.jsx("div",{className:"glass-card rounded-2xl px-3 py-2 shadow-lg",children:n.jsxs("div",{className:"text-white font-bold text-center",children:[n.jsx("div",{className:"text-[10px] opacity-90",children:"TREASURE HUNT"}),n.jsx("div",{className:"text-sm",children:"🏝️ Island Explorer 🏝️"})]})}),n.jsx("button",{onClick:()=>i(!a),className:"w-11 h-11 glass-card rounded-2xl shadow-lg flex items-center justify-center hover:scale-105 transition-transform",children:n.jsx("span",{className:"text-xl",children:a?"🔊":"🔇"})})]}),n.jsxs("div",{className:"glass-card rounded-2xl p-3 shadow-xl mt-2",children:[n.jsxs("div",{className:"flex items-center justify-between mb-2",children:[n.jsx("span",{className:"text-white font-bold text-sm",children:"Adventure Progress"}),n.jsxs("span",{className:"text-white font-bold text-sm",children:[p,"%"]})]}),n.jsx("div",{className:"w-full h-2.5 bg-white/20 rounded-full overflow-hidden",children:n.jsx("div",{className:"h-full bg-gradient-to-r from-yellow-400 to-amber-500 transition-all duration-1000",style:{width:`${p}%`}})}),n.jsx("button",{onClick:()=>c(!0),className:"mt-2.5 w-full py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-bold text-sm hover:scale-[1.02] transition-transform",children:n.jsxs("div",{className:"flex items-center justify-center gap-2",children:[n.jsx("span",{children:"🏆"}),n.jsxs("span",{children:["Treasure Pieces: ",f,"/5"]}),n.jsx("span",{children:"🏆"})]})})]})]}),n.jsx("div",{className:"flex-1 flex items-center justify-center px-4 py-4",children:n.jsxs("div",{className:"w-full max-w-md",children:[n.jsx("div",{className:"grid grid-cols-2 gap-3",children:e.slice(0,4).map(h=>{const b=t[h.id],v=b==null?void 0:b.unlocked,j=b==null?void 0:b.treasurePiece,C=b==null?void 0:b.perfectScore;return n.jsxs("button",{onClick:()=>r(h.id),disabled:!v,className:`relative aspect-square rounded-2xl transition-all ${v?"hover:scale-105 active:scale-95 shadow-xl":"opacity-50 grayscale"}`,children:[n.jsx("div",{className:`absolute inset-0 rounded-2xl bg-gradient-to-br ${v?h.theme.background:"from-gray-400 to-gray-500"}`,children:v&&n.jsxs(n.Fragment,{children:[n.jsx("div",{className:"absolute top-1 right-1 text-lg sparkle-animation",children:"✨"}),n.jsx("div",{className:"absolute bottom-1 left-1 text-sm sparkle-animation",style:{animationDelay:"1s"},children:"⭐"})]})}),!v&&n.jsx("div",{className:"absolute inset-0 rounded-2xl bg-black/30 flex items-center justify-center",children:n.jsx("div",{className:"text-4xl",children:"🔒"})}),n.jsxs("div",{className:"relative h-full flex flex-col items-center justify-center p-3",children:[n.jsx("div",{className:"absolute top-1 left-1 w-7 h-7 bg-white/30 rounded-full flex items-center justify-center",children:n.jsx("span",{className:"text-white font-bold text-sm",children:h.id})}),C&&n.jsx("div",{className:"absolute top-1 right-1 text-lg",children:"💯"}),n.jsx("div",{className:`text-5xl mb-1 ${v?"bounce-animation":""}`,children:v?h.emoji:"❓"}),n.jsx("div",{className:"text-white font-bold text-sm text-center mb-1",children:h.name}),n.jsx("div",{className:`px-2 py-0.5 rounded-full text-[10px] font-bold ${v?"bg-white/30":"bg-black/30"} text-white`,children:h.difficulty}),j&&n.jsx("div",{className:"absolute bottom-1 text-2xl pulse-animation",children:h.rewards.treasurePiece}),(b==null?void 0:b.attempts)>0&&n.jsxs("div",{className:"absolute -bottom-1 -right-1 bg-white/90 text-gray-800 rounded-full px-2 py-0.5 text-[10px] font-bold flex items-center gap-1",children:[n.jsxs("span",{children:[b.bestScore,"/3"]}),n.jsx("span",{children:"⭐"})]})]})]},h.id)})}),n.jsx("div",{className:"flex justify-center mt-3",children:e.slice(4,5).map(h=>{const b=t[h.id],v=b==null?void 0:b.unlocked,j=b==null?void 0:b.treasurePiece,C=b==null?void 0:b.perfectScore;return n.jsxs("button",{onClick:()=>r(h.id),disabled:!v,className:`relative w-[calc(50%-6px)] aspect-square rounded-2xl transition-all ${v?"hover:scale-105 active:scale-95 shadow-xl":"opacity-50 grayscale"}`,children:[n.jsxs("div",{className:`absolute inset-0 rounded-2xl bg-gradient-to-br ${v?h.theme.background:"from-gray-400 to-gray-500"}`,children:[v&&n.jsxs(n.Fragment,{children:[n.jsx("div",{className:"absolute top-1 right-1 text-lg sparkle-animation",children:"✨"}),n.jsx("div",{className:"absolute bottom-1 left-1 text-sm sparkle-animation",style:{animationDelay:"1s"},children:"⭐"})]}),!v&&n.jsx("div",{className:"absolute inset-0 rounded-2xl bg-gradient-to-t from-yellow-400/20 to-transparent animate-pulse"})]}),!v&&n.jsx("div",{className:"absolute inset-0 rounded-2xl bg-black/30 flex items-center justify-center",children:n.jsx("div",{className:"text-4xl",children:"🔒"})}),n.jsxs("div",{className:"relative h-full flex flex-col items-center justify-center p-3",children:[n.jsx("div",{className:"absolute top-1 left-1 w-7 h-7 bg-white/30 rounded-full flex items-center justify-center",children:n.jsx("span",{className:"text-white font-bold text-sm",children:h.id})}),C&&n.jsx("div",{className:"absolute top-1 right-1 text-lg",children:"💯"}),n.jsx("div",{className:`text-5xl mb-1 ${v?"bounce-animation":""}`,children:v?h.emoji:"👑"}),n.jsx("div",{className:"text-white font-bold text-sm text-center mb-1",children:h.name}),n.jsx("div",{className:`px-2 py-0.5 rounded-full text-[10px] font-bold ${v?"bg-white/30":"bg-black/30"} text-white`,children:h.difficulty}),j&&n.jsx("div",{className:"absolute bottom-1 text-2xl pulse-animation",children:h.rewards.treasurePiece}),(b==null?void 0:b.attempts)>0&&n.jsxs("div",{className:"absolute -bottom-1 -right-1 bg-white/90 text-gray-800 rounded-full px-2 py-0.5 text-[10px] font-bold flex items-center gap-1",children:[n.jsxs("span",{children:[b.bestScore,"/3"]}),n.jsx("span",{children:"⭐"})]})]})]},h.id)})})]})}),n.jsx("div",{className:"relative z-20 px-4 pb-[calc(env(safe-area-inset-bottom)+3rem)]",children:n.jsx("div",{className:"bg-gradient-to-r from-indigo-500/30 to-purple-500/30 backdrop-blur-lg rounded-2xl shadow-xl border border-white/20",children:n.jsxs("div",{className:"grid grid-cols-3 gap-2 text-center",children:[n.jsxs("div",{className:"relative",children:[n.jsx("div",{className:"text-2xl mb-0.5 filter drop-shadow-lg",children:"💰"}),n.jsx("div",{className:"text-yellow-300 font-black text-lg",children:o.totalCoinsEarned}),n.jsx("div",{className:"text-white/80 text-[10px] font-medium",children:"Total Coins"})]}),n.jsxs("div",{className:"relative",children:[n.jsx("div",{className:"text-2xl mb-0.5 filter drop-shadow-lg",children:"💎"}),n.jsx("div",{className:"text-cyan-300 font-black text-lg",children:o.totalGemsFound}),n.jsx("div",{className:"text-white/80 text-[10px] font-medium",children:"Gems Found"})]}),n.jsxs("div",{className:"relative",children:[n.jsx("div",{className:"text-2xl mb-0.5 filter drop-shadow-lg",children:"📝"}),n.jsxs("div",{className:"text-green-300 font-black text-lg",children:[o.totalCorrectAnswers,"/",o.totalQuestionsAnswered]}),n.jsx("div",{className:"text-white/80 text-[10px] font-medium",children:"Correct"})]})]})})}),l&&n.jsx("div",{className:"fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 px-6",children:n.jsxs("div",{className:"bg-gradient-to-br from-purple-600 to-pink-600 rounded-3xl p-6 max-w-sm w-full shadow-2xl",children:[n.jsx("h3",{className:"text-2xl font-bold text-white text-center mb-6",children:"🏆 Treasure Collection 🏆"}),n.jsx("div",{className:"flex justify-center gap-4 mb-6",children:u.map((h,b)=>n.jsx("div",{className:`text-5xl ${h.collected?"":"opacity-30 grayscale"}`,children:h.collected?h.piece:"❓"},h.id))}),n.jsx("div",{className:"text-center text-white mb-6",children:f===5?n.jsxs("div",{children:[n.jsx("p",{className:"text-lg font-bold mb-2",children:"🎉 COMPLETE! 🎉"}),n.jsx("p",{className:"text-sm opacity-90",children:"You're a true Treasure Master!"})]}):n.jsx("p",{className:"text-sm opacity-90",children:"Collect all 5 pieces to unlock the final treasure!"})}),n.jsx("button",{onClick:()=>c(!1),className:"w-full py-3 bg-white/20 backdrop-blur rounded-2xl text-white font-bold hover:bg-white/30 transition-colors",children:"Close"})]})})]})}function _g({island:e,progress:t,onStart:r,onClose:s,soundOn:a}){const[i,o]=d.useState(!1);d.useEffect(()=>{o(!0)},[]),d.useEffect(()=>{const h=b=>{s()};return window.history.pushState({islandDetail:!0},"",window.location.pathname),window.addEventListener("popstate",h),()=>window.removeEventListener("popstate",h)},[s]);const l=(t==null?void 0:t.attempts)>0,c=t==null?void 0:t.treasurePiece;t==null||t.perfectScore;const u=(t==null?void 0:t.bestScore)||0,f=()=>{if(a){const h=new Audio("/sounds/start.mp3");h.volume=.5,h.play().catch(()=>{})}r()},p=h=>{const b=Math.floor(h/60),v=h%60;return`${b}:${v.toString().padStart(2,"0")}`};return n.jsxs("div",{className:"fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50 p-4",children:[n.jsx("style",{jsx:!0,children:`
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
      `}),n.jsxs("div",{className:`relative w-full max-w-sm bg-gradient-to-br ${e.theme.background} rounded-2xl shadow-2xl ${i?"slide-up":""}`,children:[n.jsx("div",{className:"relative p-4 pb-2",children:n.jsxs("div",{className:"text-center",children:[n.jsx("div",{className:"text-6xl mb-2 pulse-animation",children:e.emoji}),n.jsx("h2",{className:"text-2xl font-black text-white",children:e.name}),n.jsx("div",{className:"inline-block px-3 py-1 bg-white/20 backdrop-blur rounded-full mt-2",children:n.jsxs("span",{className:"text-white font-bold text-sm",children:["Level ",e.id," • ",e.difficulty]})})]})}),n.jsxs("div",{className:"px-4 py-3 space-y-2",children:[n.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[n.jsxs("div",{className:"bg-black/10 backdrop-blur rounded-xl p-3 text-center",children:[n.jsx("div",{className:"text-white/70 text-xs mb-1",children:"Time"}),n.jsx("div",{className:"text-white font-bold",children:p(e.timeLimit)})]}),n.jsxs("div",{className:"bg-black/10 backdrop-blur rounded-xl p-3 text-center",children:[n.jsx("div",{className:"text-white/70 text-xs mb-1",children:"Questions"}),n.jsx("div",{className:"text-white font-bold",children:Fe.QUESTIONS_PER_ISLAND})]})]}),n.jsxs("div",{className:"bg-black/10 backdrop-blur rounded-xl p-3 flex items-center justify-between",children:[n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx("span",{className:"text-2xl",children:e.rewards.treasurePiece}),n.jsx("span",{className:"text-white font-medium",children:"To Win"})]}),n.jsxs("span",{className:"text-white font-bold",children:[e.requiredCorrect,"/3 Correct"]})]}),n.jsxs("div",{className:"bg-black/10 backdrop-blur rounded-xl p-3",children:[n.jsx("div",{className:"text-white font-bold text-sm mb-2",children:"Rewards"}),n.jsxs("div",{className:"grid grid-cols-4 gap-2 text-center",children:[n.jsxs("div",{children:[n.jsx("div",{className:"text-xl",children:"💰"}),n.jsx("div",{className:"text-white/70 text-xs",children:e.rewards.perCorrectAnswer})]}),n.jsxs("div",{children:[n.jsx("div",{className:"text-xl",children:"💎"}),n.jsxs("div",{className:"text-white/70 text-xs",children:[Math.round(e.rewards.gemChance*100),"%"]})]}),n.jsxs("div",{children:[n.jsx("div",{className:"text-xl",children:"⚡"}),n.jsxs("div",{className:"text-white/70 text-xs",children:["+",e.rewards.speedBonus]})]}),n.jsxs("div",{children:[n.jsx("div",{className:"text-xl",children:"🏆"}),n.jsxs("div",{className:"text-white/70 text-xs",children:["+",e.rewards.perfectBonus]})]})]})]}),l&&n.jsx("div",{className:"bg-black/10 backdrop-blur rounded-xl p-3",children:n.jsxs("div",{className:"flex items-center justify-between",children:[n.jsx("div",{className:"flex gap-1",children:[...Array(3)].map((h,b)=>n.jsx("span",{className:"text-lg",children:b<u?"⭐":"☆"},b))}),n.jsxs("div",{className:"text-white text-sm",children:[n.jsxs("span",{className:"font-bold",children:[u,"/3"]})," • ",t.attempts," tries"]}),c&&n.jsx("div",{className:"text-2xl",children:e.rewards.treasurePiece})]})})]}),n.jsxs("div",{className:"p-4 pt-2 space-y-2",children:[n.jsx("button",{onClick:f,className:"w-full py-3 bg-gradient-to-r from-green-400 to-emerald-500 text-white rounded-xl font-black text-base shadow-lg hover:shadow-xl transition-all hover:scale-[1.02] active:scale-[0.98]",children:n.jsxs("span",{className:"flex items-center justify-center gap-2",children:[n.jsx("span",{className:"text-xl",children:"🏴‍☠️"}),n.jsx("span",{children:l?"Play Again":"Start Adventure"}),n.jsx("span",{className:"text-xl",children:"🏴‍☠️"})]})}),n.jsx("button",{onClick:s,className:"w-full py-2 bg-white/20 backdrop-blur text-white rounded-xl font-bold text-sm hover:bg-white/30 transition-colors",children:"Back to Map"})]})]})]})}function Lg({shovelsRemaining:e,showBreak:t=!1}){const[r,s]=d.useState(!1),[a,i]=d.useState(e),o=3;return d.useEffect(()=>{e<a&&(s(!0),setTimeout(()=>s(!1),1e3)),i(e)},[e,a]),n.jsxs("div",{className:"inline-block",children:[n.jsx("style",{jsx:!0,children:`
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
      `}),s==="digging"&&n.jsxs("div",{className:"relative",children:[n.jsx("div",{className:"text-8xl dig-animation",children:e.visualElements.diggingEmoji}),[...Array(8)].map((u,f)=>n.jsx("div",{className:"dirt-particle text-4xl",style:{"--fly-x":`${(Math.random()-.5)*200}px`,"--fly-y":`${-Math.random()*150-50}px`,left:"50%",top:"60%",animationDelay:`${f*.1}s`},children:"🟫"},f)),n.jsx("div",{className:"absolute -bottom-4 left-1/2 -translate-x-1/2",children:n.jsx("div",{className:"text-6xl opacity-50",children:"💨"})})]}),s==="revealing"&&n.jsxs("div",{className:"relative",children:[i&&n.jsxs("div",{className:"relative",children:[n.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:n.jsx("div",{className:"w-32 h-32 rounded-full bg-yellow-400/30 blur-xl glow-effect"})}),n.jsxs("div",{className:"relative flex items-center justify-center",children:[n.jsx("div",{className:"text-7xl treasure-reveal treasure-float",children:"💰"}),n.jsx("div",{className:"absolute text-5xl coin-spin",style:{left:"-30px"},children:"🪙"}),n.jsx("div",{className:"absolute text-5xl coin-spin",style:{right:"-30px",animationDelay:"0.5s"},children:"🪙"}),n.jsx("div",{className:"absolute text-4xl coin-spin",style:{top:"-30px",animationDelay:"1s"},children:"🪙"})]}),[...Array(6)].map((u,f)=>n.jsx("div",{className:"absolute text-3xl star-burst",style:{left:"50%",top:"50%",transform:`translate(-50%, -50%) rotate(${f*60}deg) translateY(-40px)`,animationDelay:`${f*.1}s`},children:"⭐"},f))]}),l&&n.jsxs("div",{className:"absolute -top-10 left-1/2 -translate-x-1/2",children:[n.jsxs("div",{className:"relative",children:[n.jsx("div",{className:"text-6xl gem-sparkle",children:"💎"}),n.jsx("div",{className:"absolute -top-2 -left-2 text-2xl animate-pulse",children:"✨"}),n.jsx("div",{className:"absolute -top-2 -right-2 text-2xl animate-pulse",style:{animationDelay:"0.3s"},children:"✨"}),n.jsx("div",{className:"absolute -bottom-2 left-1/2 -translate-x-1/2 text-2xl animate-pulse",style:{animationDelay:"0.6s"},children:"✨"})]}),n.jsx("div",{className:"absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap",children:n.jsx("span",{className:"text-cyan-300 font-black text-lg drop-shadow-lg",children:"RARE GEM!"})})]}),n.jsx("div",{className:"absolute -bottom-16 left-1/2 -translate-x-1/2 text-center",children:n.jsx("div",{className:"text-white font-black text-2xl drop-shadow-lg",children:t?"AMAZING FIND!":"TREASURE FOUND!"})})]}),s==="complete"&&n.jsx("div",{className:"relative opacity-0 transition-opacity duration-300",children:n.jsx("div",{className:"text-7xl",children:"✅"})})]})}function Ag({island:e,question:t,questionNumber:r,totalQuestions:s,shovelsRemaining:a,timeRemaining:i,coinsEarned:o,gemsFound:l,onAnswer:c,onQuit:u,soundOn:f,setSoundOn:p}){const[h,b]=d.useState(null),[v,j]=d.useState(!1),[C,y]=d.useState(!1),[m,x]=d.useState(!1),[E,N]=d.useState(!1),[T,S]=d.useState(!1),[g,w]=d.useState(!1),k=d.useRef(null);d.useEffect(()=>{b(null),j(!1),y(!1),x(!1),N(!1),w(!1)},[t]),d.useEffect(()=>{const Q=U=>{U.stopImmediatePropagation(),T||(S(!0),window.history.pushState({questionScreen:!0},"",window.location.pathname))};return window.history.pushState({questionScreen:!0},"",window.location.pathname),window.addEventListener("popstate",Q,!0),()=>window.removeEventListener("popstate",Q,!0)},[T]);const P=Q=>{const U=Math.floor(Q/60),B=Q%60;return`${U}:${B.toString().padStart(2,"0")}`},F=()=>i<=10?"critical":i<=30?"warning":"normal",Y=Q=>{if(g||v)return;b(Q),w(!0);const U=Q===t.correctIndex;y(U),setTimeout(()=>{if(j(!0),f)if(U){const B=new Audio("/sounds/dig.mp3");B.volume=.5,B.play().catch(()=>{})}else{const B=new Audio("/sounds/wrong.mp3");B.volume=.5,B.play().catch(()=>{})}U&&(x(!0),Math.random()<e.rewards.gemChance&&setTimeout(()=>{if(N(!0),f){const _=new Audio("/sounds/gem.mp3");_.volume=.6,_.play().catch(()=>{})}},800)),setTimeout(()=>{c(Q)},U?2e3:1500)},300)},ee=F();return n.jsxs("div",{className:`min-h-screen bg-gradient-to-br ${e.theme.background} relative overflow-hidden`,children:[n.jsx("style",{jsx:!0,children:`
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
      `}),n.jsx("div",{className:"absolute inset-0 pointer-events-none",children:e.visualElements.bgEmojis.map((Q,U)=>n.jsx("div",{className:"absolute text-7xl opacity-10 float-animation",style:{top:`${20+U*15}%`,left:`${10+U*18}%`,animationDelay:`${U*.5}s`,animationDuration:`${3+U}s`},children:Q},U))}),n.jsxs("div",{className:"relative z-10 px-3 pt-[calc(env(safe-area-inset-top)+4rem)]",children:[n.jsxs("div",{className:"flex justify-between items-center mb-3",children:[n.jsx("button",{onClick:()=>S(!0),className:"w-10 h-10 glass-card rounded-xl shadow-lg flex items-center justify-center hover:scale-105 transition-transform",children:n.jsx("span",{className:"text-xl",children:"⬅️"})}),n.jsx("div",{className:"glass-card rounded-xl px-3 py-1.5 shadow-lg",children:n.jsxs("div",{className:"flex items-center gap-1.5",children:[n.jsx("span",{className:"text-xl",children:e.emoji}),n.jsx("span",{className:"text-gray-800 font-bold text-sm",children:e.name})]})}),n.jsx("button",{onClick:()=>p(!f),className:"w-10 h-10 glass-card rounded-xl shadow-lg flex items-center justify-center hover:scale-105 transition-transform",children:n.jsx("span",{className:"text-xl",children:f?"🔊":"🔇"})})]}),n.jsxs("div",{className:"glass-card rounded-xl p-3 shadow-xl mb-3",children:[n.jsxs("div",{className:"grid grid-cols-4 gap-2",children:[n.jsxs("div",{className:"text-center",children:[n.jsx("div",{className:`text-xl font-black ${ee==="critical"?"text-red-600 time-pulse-critical":ee==="warning"?"text-orange-600":"text-gray-800"}`,children:P(i)}),n.jsx("div",{className:"text-[10px] text-gray-700 font-medium",children:"Time"})]}),n.jsxs("div",{className:"text-center",children:[n.jsxs("div",{className:"text-xl font-black text-gray-800",children:[r,"/",s]}),n.jsx("div",{className:"text-[10px] text-gray-700 font-medium",children:"Question"})]}),n.jsxs("div",{className:"text-center relative",children:[n.jsx("div",{className:"text-xl font-black text-orange-600",children:o}),n.jsx("div",{className:"text-[10px] text-gray-700 font-medium",children:"Coins"}),v&&C&&n.jsx("div",{className:"absolute -top-3 left-1/2 -translate-x-1/2",children:n.jsxs("span",{className:"text-orange-600 font-bold text-xs coin-float",children:["+",e.rewards.perCorrectAnswer]})})]}),n.jsxs("div",{className:"text-center relative",children:[n.jsx("div",{className:"text-xl font-black text-blue-600",children:l}),n.jsx("div",{className:"text-[10px] text-gray-700 font-medium",children:"Gems"}),E&&n.jsx("div",{className:"absolute -top-3 left-1/2 -translate-x-1/2",children:n.jsx("span",{className:"text-blue-600 text-xl gem-sparkle",children:"💎"})})]})]}),n.jsx("div",{className:"mt-2",children:n.jsx("div",{className:"w-full h-1.5 bg-gray-800/20 rounded-full overflow-hidden",children:n.jsx("div",{className:"h-full bg-gradient-to-r from-green-500 to-emerald-600 progress-bar",style:{width:`${(r-1)/s*100}%`}})})})]}),n.jsx("div",{className:"flex justify-center mb-3 pt-2",children:n.jsx(Lg,{shovelsRemaining:a,showBreak:v&&!C})})]}),n.jsxs("div",{className:"px-3 pt-8 slide-in",children:[n.jsxs("div",{ref:k,className:`glass-card rounded-2xl shadow-xl p-4 mb-4 ${v&&!C?"wrong-shake":""}`,children:[n.jsx("div",{className:"text-center mb-2",children:n.jsxs("span",{className:"text-xs font-bold text-gray-600 uppercase tracking-wider",children:["Question ",r]})}),n.jsx("h2",{className:"text-lg font-bold text-center text-gray-800 leading-relaxed",children:t.prompt})]}),n.jsx("div",{className:"space-y-2.5",children:t.options.map((Q,U)=>{const B=["A","B","C","D"],_=h===U,M=U===t.correctIndex;let q="glass-card option-card",D="border border-gray-800/20";return v&&(M?(q+=" correct-pulse",D="border-2 border-green-500 bg-green-400/20"):_&&!C&&(q+=" wrong-shake",D="border-2 border-red-500 bg-red-400/20"),q+=" disabled"),n.jsx("button",{onClick:()=>Y(U),disabled:g,className:`w-full p-3 rounded-xl shadow-lg ${q} ${D}`,children:n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsx("div",{className:`w-10 h-10 rounded-lg bg-gradient-to-br ${U===0?"from-blue-400 to-blue-500":U===1?"from-green-400 to-green-500":U===2?"from-yellow-400 to-yellow-500":"from-purple-400 to-purple-500"} text-white font-bold text-lg flex items-center justify-center shadow-md`,children:B[U]}),n.jsx("span",{className:"flex-1 text-left font-medium text-gray-800 text-sm",children:Q}),v&&M&&n.jsx("span",{className:"text-2xl",children:"✅"}),v&&_&&!C&&n.jsx("span",{className:"text-2xl",children:"❌"})]})},U)})}),v&&n.jsx("div",{className:"mt-3 text-center slide-in",children:n.jsx("p",{className:"text-base font-bold text-gray-800",children:C?`Great job! Let's dig for treasure! ${e.visualElements.diggingEmoji}`:"Oops! Your shovel broke! Try the next question! 💪"})})]}),m&&n.jsx(Ig,{island:e,foundGem:E,onComplete:()=>x(!1)}),T&&n.jsx("div",{className:"fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 px-6",children:n.jsxs("div",{className:"bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-6 max-w-sm w-full shadow-2xl slide-in border border-white/10",children:[n.jsxs("div",{className:"text-center mb-6",children:[n.jsx("div",{className:"text-5xl mb-3",children:"🗺️"}),n.jsx("h3",{className:"text-xl font-bold text-white mb-2",children:"Leave the Island?"}),n.jsx("p",{className:"text-white/70",children:"Your progress won't be saved!"})]}),n.jsxs("div",{className:"flex gap-3",children:[n.jsx("button",{onClick:()=>S(!1),className:"flex-1 py-3 bg-gradient-to-r from-green-400 to-emerald-500 text-white rounded-2xl font-bold shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]",children:"Keep Playing"}),n.jsx("button",{onClick:u,className:"flex-1 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-2xl font-bold shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]",children:"Leave Island"})]})]})})]})}function zg({island:e,session:t,earnedTreasure:r,onRetry:s,onContinue:a,soundOn:i}){const[o,l]=d.useState(0),[c,u]=d.useState(!1),[f,p]=d.useState(!1),h=t.correctAnswers===Fe.QUESTIONS_PER_ISLAND,b=Pg(t.correctAnswers,e.id);return d.useEffect(()=>{const v=t.coinsEarned,j=2e3,C=30,y=v/C;let m=0;const x=setInterval(()=>{m+=y,m>=v?(l(v),clearInterval(x),r&&setTimeout(()=>u(!0),500),setTimeout(()=>p(!0),r?1500:500)):l(Math.floor(m))},j/C);return()=>clearInterval(x)},[t.coinsEarned,r]),n.jsxs("div",{className:`fixed inset-0 bg-gradient-to-br ${e.theme.background} overflow-hidden flex flex-col`,children:[n.jsx("style",{jsx:!0,children:`
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
      `}),n.jsx("div",{className:"absolute inset-0 pointer-events-none",children:h&&[...Array(10)].map((v,j)=>n.jsx("div",{className:"absolute confetti-fall",style:{left:`${Math.random()*100}%`,animationDelay:`${Math.random()*3}s`,fontSize:`${20+Math.random()*20}px`},children:["🎉","⭐","🎊","✨"][Math.floor(Math.random()*4)]},j))}),n.jsxs("div",{className:"relative z-10 flex-1 flex flex-col items-center justify-center px-4 py-4",children:[n.jsxs("div",{className:"mb-3 text-center slide-up",children:[n.jsx("h1",{className:"text-2xl font-black text-white mb-2",children:r?"TREASURE FOUND!":"ISLAND COMPLETE!"}),n.jsx("div",{className:"text-5xl bounce-animation",children:r?e.rewards.treasurePiece:"🏝️"})]}),n.jsxs("div",{className:"glass-card rounded-2xl p-3 max-w-md w-full mb-2 slide-up",style:{animationDelay:"0.2s",background:"rgba(46, 46, 32, 0.25)"},children:[n.jsxs("div",{className:"text-center mb-2",children:[n.jsxs("div",{className:"text-3xl font-black text-white mb-1",children:[t.correctAnswers,"/",Fe.QUESTIONS_PER_ISLAND]}),n.jsx("div",{className:"text-white/80 font-medium",children:"Questions Correct"})]}),f&&n.jsx("div",{className:"flex justify-center gap-2 mb-2",children:[...Array(3)].map((v,j)=>n.jsx("div",{className:`text-3xl ${j<t.correctAnswers?"star-pop":""}`,style:{animationDelay:`${j*.2}s`},children:j<t.correctAnswers?"⭐":"☆"},j))}),c&&r&&n.jsxs("div",{className:"text-center mb-2",children:[n.jsx("div",{className:"text-5xl treasure-shine mb-1",children:e.rewards.treasurePiece}),n.jsx("div",{className:"text-white font-bold text-lg",children:"Treasure Piece Earned!"})]}),n.jsxs("div",{className:"grid grid-cols-2 gap-2 mb-2",children:[n.jsxs("div",{className:"glass-card rounded-2xl p-4 text-center",children:[n.jsx("div",{className:"text-4xl mb-1",children:"🪙"}),n.jsx("div",{className:"text-3xl font-black text-yellow-300",children:o}),n.jsx("div",{className:"text-white/70 text-sm",children:"Coins Earned"})]}),n.jsxs("div",{className:"glass-card rounded-2xl p-4 text-center",children:[n.jsx("div",{className:"text-4xl mb-2",children:"💎"}),n.jsx("div",{className:"text-3xl font-black text-cyan-300",children:t.gemsFound}),n.jsx("div",{className:"text-white/70 text-sm",children:"Gems Found"})]})]}),n.jsx("div",{className:"text-center p-4 bg-white/10 rounded-1xl",children:n.jsx("p",{className:"text-white font-medium text-lg",children:b})}),h&&n.jsx("div",{className:"mt-4 text-center",children:n.jsx("div",{className:"inline-block px-6 py-3 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full",children:n.jsx("span",{className:"text-white font-black text-lg",children:"💯 PERFECT SCORE! 💯"})})})]}),n.jsxs("div",{className:"space-y-3 w-full max-w-md slide-up",style:{animationDelay:"0.4s"},children:[!r&&n.jsx("button",{onClick:s,className:"w-full py-4 bg-gradient-to-r from-orange-400 to-red-500 text-white rounded-2xl font-black text-lg shadow-xl hover:shadow-2xl transition-all hover:scale-[1.02] active:scale-[0.98]",children:n.jsxs("div",{className:"flex items-center justify-center gap-3",children:[n.jsx("span",{className:"text-2xl",children:"🔄"}),n.jsx("span",{children:"Try Again"})]})}),n.jsx("button",{onClick:a,className:"w-full py-3 bg-gradient-to-r from-white to-gray-100 text-gray-800 rounded-2xl font-black text-lg shadow-xl hover:shadow-2xl transition-all hover:scale-[1.02] active:scale-[0.98]",children:n.jsxs("div",{className:"flex items-center justify-center gap-3",children:[n.jsx("span",{className:"text-2xl",children:"🗺️"}),n.jsx("span",{children:"Back to Map"})]})})]})]})]})}function Mg({totalStats:e,onContinue:t,soundOn:r}){const[s,a]=d.useState(!1),[i,o]=d.useState(!1),[l,c]=d.useState(!1),[u,f]=d.useState(!1),[p,h]=d.useState(!1);return d.useEffect(()=>{(async()=>{await new Promise(v=>setTimeout(v,500)),a(!0),await new Promise(v=>setTimeout(v,1e3)),o(!0),h(!0),await new Promise(v=>setTimeout(v,800)),c(!0),await new Promise(v=>setTimeout(v,1e3)),f(!0)})()},[]),n.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-purple-600 via-pink-600 to-yellow-500 relative overflow-hidden",children:[n.jsx("style",{jsx:!0,children:`
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
      `}),p&&n.jsx("div",{className:"fixed inset-0 pointer-events-none",children:[...Array(15)].map((b,v)=>n.jsx("div",{className:"absolute firework",style:{left:`${20+Math.random()*60}%`,top:`${20+Math.random()*60}%`,animationDelay:`${Math.random()*2}s`,fontSize:`${40+Math.random()*40}px`},children:["✨","⭐","💫","🌟"][Math.floor(Math.random()*4)]},v))}),n.jsx("div",{className:"fixed inset-0 pointer-events-none",children:[...Array(20)].map((b,v)=>n.jsx("div",{className:"absolute coin-rain",style:{left:`${Math.random()*100}%`,animationDelay:`${Math.random()*3}s`,animationDuration:`${3+Math.random()*2}s`,fontSize:`${20+Math.random()*20}px`},children:["🪙","💰","💎"][Math.floor(Math.random()*3)]},v))}),n.jsxs("div",{className:"relative z-10 flex flex-col items-center justify-center min-h-screen px-6",children:[n.jsxs("div",{className:"text-center mb-8",children:[n.jsx("h1",{className:"text-6xl font-black text-white mb-4",children:"LEGENDARY!"}),n.jsx("div",{className:"text-8xl bounce-animation",children:"👑"})]}),s&&n.jsxs("div",{className:`relative mb-8 ${s?"chest-appear":""}`,children:[n.jsx("div",{className:`text-[150px] ${i?"chest-open":""}`,children:"📦"}),i&&n.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:rr.map((b,v)=>n.jsx("div",{className:"absolute text-6xl float-animation treasure-glow",style:{transform:`rotate(${v*72}deg) translateY(-100px)`,animationDelay:`${v*.2}s`},children:b.rewards.treasurePiece},b.id))})]}),l&&n.jsxs("div",{className:"glass-card rounded-3xl p-6 max-w-md w-full mb-6",children:[n.jsx("h2",{className:"text-2xl font-black text-white text-center mb-6",children:"🏆 FINAL TREASURE UNLOCKED! 🏆"}),n.jsx("div",{className:"bg-gradient-to-r from-yellow-400 to-amber-500 rounded-2xl p-4 mb-4",children:n.jsxs("div",{className:"text-center",children:[n.jsx("div",{className:"text-5xl mb-2",children:"💰"}),n.jsx("div",{className:"text-4xl font-black text-white",children:Fe.FINAL_TREASURE_REWARD}),n.jsx("div",{className:"text-white/90 font-medium",children:"Bonus Coins!"})]})}),n.jsxs("div",{className:"grid grid-cols-2 gap-3 mb-4",children:[n.jsxs("div",{className:"glass-card rounded-xl p-3 text-center",children:[n.jsx("div",{className:"text-3xl mb-1",children:"🏝️"}),n.jsx("div",{className:"text-2xl font-black text-white",children:"5/5"}),n.jsx("div",{className:"text-white/70 text-xs",children:"Islands"})]}),n.jsxs("div",{className:"glass-card rounded-xl p-3 text-center",children:[n.jsx("div",{className:"text-3xl mb-1",children:"🧩"}),n.jsx("div",{className:"text-2xl font-black text-white",children:"5/5"}),n.jsx("div",{className:"text-white/70 text-xs",children:"Treasures"})]}),n.jsxs("div",{className:"glass-card rounded-xl p-3 text-center",children:[n.jsx("div",{className:"text-3xl mb-1",children:"💰"}),n.jsx("div",{className:"text-2xl font-black text-yellow-300",children:e.totalCoinsEarned+Fe.FINAL_TREASURE_REWARD}),n.jsx("div",{className:"text-white/70 text-xs",children:"Total Coins"})]}),n.jsxs("div",{className:"glass-card rounded-xl p-3 text-center",children:[n.jsx("div",{className:"text-3xl mb-1",children:"💎"}),n.jsx("div",{className:"text-2xl font-black text-cyan-300",children:e.totalGemsFound}),n.jsx("div",{className:"text-white/70 text-xs",children:"Total Gems"})]})]}),u&&n.jsxs("div",{className:"text-center p-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl",children:[n.jsx("div",{className:"text-3xl mb-2",children:"🏆"}),n.jsx("div",{className:"text-xl font-black text-white title-shine",children:Fe.FINAL_TREASURE_TITLE}),n.jsx("div",{className:"text-white/90 text-sm mt-1",children:"New Title Unlocked!"})]})]}),l&&n.jsx("button",{onClick:t,className:"w-full max-w-md py-4 bg-gradient-to-r from-white to-gray-100 text-gray-800 rounded-2xl font-black text-lg shadow-xl hover:shadow-2xl transition-all hover:scale-[1.02] active:scale-[0.98]",children:n.jsxs("div",{className:"flex items-center justify-center gap-3",children:[n.jsx("span",{className:"text-2xl",children:"🎉"}),n.jsx("span",{children:"Complete Adventure"}),n.jsx("span",{className:"text-2xl",children:"🎉"})]})}),n.jsx("div",{className:"absolute inset-0 pointer-events-none",children:[...Array(10)].map((b,v)=>n.jsx("div",{className:"absolute text-2xl sparkle-animation",style:{left:`${Math.random()*100}%`,top:`${Math.random()*100}%`,animationDelay:`${Math.random()*2}s`},children:"✨"},v))})]})]})}function Dg({onBack:e}){const{coins:t,xp:r,level:s,soundOn:a,addCoins:i,addXp:o,setSoundOn:l}=cc(),[c,u]=d.useState(!1),[f,p]=d.useState("map"),[h,b]=d.useState(null),[v,j]=d.useState([]),[C,y]=d.useState(()=>{const L=localStorage.getItem(Fe.STORAGE_KEYS.PROGRESS);if(L)try{return JSON.parse(L)}catch(A){console.error("Failed to load progress:",A)}return rr.reduce((A,H)=>(A[H.id]={unlocked:H.id===1,completed:!1,treasurePiece:!1,perfectScore:!1,bestScore:0,attempts:0},A),{})}),[m,x]=d.useState({islandId:null,questions:[],currentQuestionIndex:0,shovelsRemaining:Fe.SHOVELS_PER_ISLAND,correctAnswers:0,wrongAnswers:0,timeRemaining:300,gemsFound:0,coinsEarned:0,questionTimes:[],startTime:null}),[E,N]=d.useState(()=>{const L=localStorage.getItem(Fe.STORAGE_KEYS.STATS);if(L)try{return JSON.parse(L)}catch(A){console.error("Failed to load stats:",A)}return{totalCoinsEarned:0,totalGemsFound:0,totalTreasurePieces:0,totalQuestionsAnswered:0,totalCorrectAnswers:0,islandsCompleted:0,gameCompleted:!1}}),T=d.useRef(null),S=d.useRef(null);d.useEffect(()=>(g(),window.history.pushState({mode:"treasureHunt"},"",window.location.href),()=>{T.current&&clearInterval(T.current)}),[]),d.useEffect(()=>{localStorage.setItem(Fe.STORAGE_KEYS.PROGRESS,JSON.stringify(C))},[C]),d.useEffect(()=>{localStorage.setItem(Fe.STORAGE_KEYS.STATS,JSON.stringify(E))},[E]),d.useEffect(()=>(f==="playing"&&m.timeRemaining>0?T.current=setInterval(()=>{x(L=>{const A=L.timeRemaining-1;return A<=0?(Y(),{...L,timeRemaining:0}):(A===30&&a&&M(Fe.SOUNDS.TICK,.6),{...L,timeRemaining:A})})},1e3):T.current&&clearInterval(T.current),()=>{T.current&&clearInterval(T.current)}),[f,m.timeRemaining,a]),d.useEffect(()=>{const L=A=>{A.preventDefault(),f==="map"&&!c?(u(!0),window.history.pushState({mode:"treasureHunt"},"",window.location.href)):f!=="map"&&(p("map"),b(null),window.history.pushState({mode:"treasureHunt"},"",window.location.href))};return window.addEventListener("popstate",L),()=>window.removeEventListener("popstate",L)},[f,c]);const g=async()=>{try{const A=await(await fetch("/data/quiz_questions_bank.csv")).text(),{data:H}=hr.parse(A,{header:!0,skipEmptyLines:!0,transformHeader:J=>J.trim().toLowerCase()}),re=H.map((J,O)=>{var $;const I=[J.option1,J.option2,J.option3,J.option4].map(Z=>(Z||"").trim()).filter(Boolean);if(I.length<4)return null;let z={a:0,b:1,c:2,d:3}[($=J.answer)==null?void 0:$.toLowerCase()];return z===void 0&&(z=I.findIndex(Z=>Z.toLowerCase()===(J.answer||"").toLowerCase())),z===-1&&(z=0),{id:J.id||`q_${O}`,prompt:(J.question||"").trim(),options:I,correctIndex:z,category:(J.category||J.subject||"general").trim(),difficulty:(J.difficulty||"medium").toLowerCase()}}).filter(Boolean);j(re)}catch(L){console.error("Failed to load questions:",L)}},w=L=>{const A=un(L);if(!A||v.length===0)return[];let H=v.filter(J=>A.questionDifficulty.includes(J.difficulty));return H.length<Fe.QUESTIONS_PER_ISLAND&&(H=v),[...H].sort(()=>Math.random()-.5).slice(0,Fe.QUESTIONS_PER_ISLAND)},k=L=>{if(!Eg(L,C)){a&&M("/sounds/locked.mp3",.5),q([100]);return}b(L),p("island-detail"),a&&M("/sounds/select.mp3",.5)},P=L=>{const A=un(L),H=w(L);x({islandId:L,questions:H,currentQuestionIndex:0,shovelsRemaining:Fe.SHOVELS_PER_ISLAND,correctAnswers:0,wrongAnswers:0,timeRemaining:A.timeLimit,gemsFound:0,coinsEarned:0,questionTimes:[],startTime:Date.now()}),S.current=Date.now(),p("playing"),a&&M("/sounds/start.mp3",.6)},F=L=>{const A=m.questions[m.currentQuestionIndex],H=L===A.correctIndex,re=(Date.now()-S.current)/1e3;x(J=>{const O={...J,questionTimes:[...J.questionTimes,re]};if(H){const I=un(J.islandId);let W=I.rewards.perCorrectAnswer;re<Fe.SPEED_BONUS_THRESHOLD&&(W+=I.rewards.speedBonus),Math.random()<I.rewards.gemChance&&(W+=I.rewards.gemBonus,O.gemsFound=J.gemsFound+1),O.correctAnswers=J.correctAnswers+1,O.coinsEarned=J.coinsEarned+W}else O.wrongAnswers=J.wrongAnswers+1,O.shovelsRemaining=J.shovelsRemaining-1,q([200]);return O}),setTimeout(()=>{const J=m.currentQuestionIndex+1;m.shovelsRemaining===0&&!H||J>=Fe.QUESTIONS_PER_ISLAND?ee():(x(O=>({...O,currentQuestionIndex:J})),S.current=Date.now())},H?2e3:1500)},Y=()=>{ee()},ee=()=>{const L=un(m.islandId),A=m.correctAnswers>=L.requiredCorrect,H=m.correctAnswers===Fe.QUESTIONS_PER_ISLAND;let re=m.coinsEarned;H&&(re+=L.rewards.perfectBonus),A&&(re+=L.rewards.completionCoins),y(O=>{const I={...O},W=I[m.islandId];if(W.completed=!0,W.attempts+=1,A&&!W.treasurePiece){W.treasurePiece=!0;const z=rr.find($=>$.id===m.islandId+1);z&&I[z.id]&&(I[z.id].unlocked=!0,a&&setTimeout(()=>M(Fe.SOUNDS.ISLAND_UNLOCK,.7),2e3))}return H&&(W.perfectScore=!0),W.bestScore=Math.max(W.bestScore||0,m.correctAnswers),I}),N(O=>({...O,totalCoinsEarned:O.totalCoinsEarned+re,totalGemsFound:O.totalGemsFound+m.gemsFound,totalTreasurePieces:O.totalTreasurePieces+(A&&!C[m.islandId].treasurePiece?1:0),totalQuestionsAnswered:O.totalQuestionsAnswered+(m.correctAnswers+m.wrongAnswers),totalCorrectAnswers:O.totalCorrectAnswers+m.correctAnswers,islandsCompleted:O.islandsCompleted+(C[m.islandId].completed?0:1)})),i(re),o(m.correctAnswers),x(O=>({...O,coinsEarned:re})),a&&M(A?Fe.SOUNDS.TREASURE_FOUND:Fe.SOUNDS.ISLAND_COMPLETE,.7),rr.every(O=>{var I;return((I=C[O.id])==null?void 0:I.treasurePiece)===!0})&&!E.gameCompleted?(N(O=>({...O,gameCompleted:!0})),setTimeout(()=>{p("final-treasure"),a&&M(Fe.SOUNDS.FINAL_TREASURE,.8)},3e3)):p("reward")},Q=()=>{P(m.islandId)},U=()=>{p("map"),b(null)},B=()=>{i(Fe.FINAL_TREASURE_REWARD),o(10),N(L=>({...L,totalCoinsEarned:L.totalCoinsEarned+Fe.FINAL_TREASURE_REWARD})),p("map")},_=()=>{window.history.go(-1),e()},M=(L,A=.5)=>{try{const H=new Audio(L);H.volume=A,H.play()}catch(H){console.error("Failed to play sound:",H)}},q=L=>{navigator.vibrate&&navigator.vibrate(L)};d.useEffect(()=>(document.body.classList.add("hide-bottom-nav"),()=>{document.body.classList.remove("hide-bottom-nav")}),[]);let D=null;switch(f){case"map":D=n.jsx(Rg,{islands:rr,islandProgress:C,onSelectIsland:k,onBack:()=>u(!0),soundOn:a,setSoundOn:l,totalStats:E});break;case"island-detail":D=n.jsx(_g,{island:un(h),progress:C[h],onStart:()=>P(h),onClose:()=>p("map"),soundOn:a});break;case"playing":D=n.jsx(Ag,{island:un(m.islandId),question:m.questions[m.currentQuestionIndex],questionNumber:m.currentQuestionIndex+1,totalQuestions:Fe.QUESTIONS_PER_ISLAND,shovelsRemaining:m.shovelsRemaining,timeRemaining:m.timeRemaining,coinsEarned:m.coinsEarned,gemsFound:m.gemsFound,onAnswer:F,onQuit:()=>p("map"),soundOn:a,setSoundOn:l});break;case"reward":D=n.jsx(zg,{island:un(m.islandId),session:m,earnedTreasure:m.correctAnswers>=un(m.islandId).requiredCorrect,onRetry:Q,onContinue:U,soundOn:a});break;case"final-treasure":D=n.jsx(Mg,{totalStats:E,onContinue:B,soundOn:a});break;default:D=null}return n.jsxs(n.Fragment,{children:[D,c&&n.jsx("div",{className:"fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 px-6",children:n.jsxs("div",{className:"bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-6 max-w-sm w-full shadow-2xl border border-white/10",children:[n.jsxs("div",{className:"text-center mb-6",children:[n.jsx("div",{className:"text-5xl mb-3",children:"🏝️"}),n.jsx("h3",{className:"text-xl font-bold text-white mb-2",children:"Leave Treasure Hunt?"}),n.jsx("p",{className:"text-white/70",children:"Your island progress is saved!"})]}),n.jsxs("div",{className:"flex gap-3",children:[n.jsx("button",{onClick:()=>u(!1),className:"flex-1 py-3 bg-gradient-to-r from-green-400 to-emerald-500 text-white rounded-2xl font-bold shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]",children:"Keep Playing"}),n.jsx("button",{onClick:_,className:"flex-1 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-2xl font-bold shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]",children:"Exit"})]})]})})]})}const Fg=[{name:"General Knowledge",questions:50,icon:"🧠",color:"#7C3AED"},{name:"Artificial Intelligence",questions:28,icon:"🤖",color:"#10B981"},{name:"Fun facts",questions:30,icon:"🎉",color:"#EF4444"},{name:"Science",questions:45,icon:"🧪",color:"#F59E0B"},{name:"History",questions:42,icon:"🏺",color:"#2563EB"},{name:"Geography",questions:38,icon:"🗺️",color:"#FACC15"}],Lm=Fg.slice(0,6),ro=360/Lm.length;function Og({onModeSelect:e,onNavigateHome:t}){return n.jsx("div",{className:"fixed inset-0 bg-base-bg text-base-text overflow-hidden",children:n.jsxs("div",{className:"h-full overflow-y-auto mx-auto max-w-md px-4 pt-[calc(env(safe-area-inset-top)+5rem)] pb-[calc(env(safe-area-inset-bottom)+5.25rem)]",children:[n.jsx("header",{className:"flex items-center mb-8",children:n.jsx("h1",{className:"text-center text-xl font-bold w-full",children:"Choose a quiz mode"})}),n.jsxs("div",{className:"space-y-8",children:[n.jsxs("button",{onClick:()=>e("classic"),className:"w-full relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-400 to-blue-500 p-8 text-left shadow-lg hover:shadow-xl transition-all active:scale-[0.98]",children:[n.jsx("div",{className:"absolute top-0 right-0 w-32 h-32 opacity-30",children:n.jsxs("svg",{viewBox:"0 0 100 100",className:"w-full h-full animate-spin",style:{animationDuration:"20s"},children:[Lm.map((r,s)=>{const a=s*ro,i=a+ro,o=ro>180?1:0,l=Math.PI*a/180,c=Math.PI*i/180,u=50+40*Math.cos(l),f=50-40*Math.sin(l),p=50+40*Math.cos(c),h=50-40*Math.sin(c);return n.jsx("path",{d:`M50,50 L${u},${f} A40,40 0 ${o} 0 ${p},${h} Z`,fill:r.color,stroke:"white",strokeWidth:"0.5"},s)}),n.jsx("circle",{cx:"50",cy:"50",r:"8",fill:"white"})]})}),n.jsx("div",{className:"absolute top-4 left-8 text-3xl opacity-60",children:"🏆"}),n.jsx("div",{className:"absolute top-12 right-16 text-xl opacity-40",children:"⭐"}),n.jsx("div",{className:"absolute bottom-6 left-6 text-2xl opacity-50",children:"🎲"}),n.jsx("div",{className:"absolute bottom-4 right-12 text-3xl opacity-60",children:"🍪"}),n.jsx("div",{className:"absolute top-1/2 left-4 text-lg opacity-40",children:"🥨"}),n.jsx("h2",{className:"text-5xl font-black text-white mb-10 relative z-10",style:{transform:"translateX(-20px)"},children:"CLASSIC"})]}),n.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[n.jsxs("button",{onClick:()=>e("survival"),className:"aspect-square rounded-3xl bg-gradient-to-br from-yellow-400 to-orange-400 p-4 text-left hover:shadow-xl transition-all active:scale-[0.98] relative overflow-hidden",children:[n.jsx("div",{className:"text-2xl mb-2",children:"💀"}),n.jsx("h4",{className:"text-lg font-black text-white",children:"SURVIVAL"})]}),n.jsxs("button",{onClick:()=>e("treasureHunt"),className:"aspect-square rounded-3xl bg-gradient-to-br from-purple-400 to-green-500 p-4 text-left hover:shadow-xl transition-all active:scale-[0.98] relative overflow-hidden",children:[n.jsxs("div",{className:"absolute inset-0 opacity-20",children:[n.jsx("div",{className:"absolute top-2 right-2 text-4xl animate-pulse",children:"🏝️"}),n.jsx("div",{className:"absolute bottom-2 left-2 text-3xl animate-bounce",style:{animationDelay:"0.5s"},children:"⛏️"}),n.jsx("div",{className:"absolute top-1/2 right-4 text-2xl animate-pulse",style:{animationDelay:"1s"},children:"💎"})]}),n.jsx("div",{className:"text-2xl mb-2 relative z-10",children:"🏴‍☠️"}),n.jsx("h4",{className:"text-lg font-black text-white relative z-10",children:"TREASURE HUNT"}),n.jsx("div",{className:"absolute bottom-2 right-2",children:n.jsx("span",{className:"text-xs bg-white/20 px-2 py-1 rounded-full text-white font-bold",children:"NEW!"})})]}),n.jsxs("button",{disabled:!0,className:"aspect-square rounded-3xl bg-gradient-to-br from-pink-500 to-purple-500 p-4 text-left opacity-60",children:[n.jsx("div",{className:"text-2xl mb-2",children:"⚔️"}),n.jsx("h4",{className:"text-lg font-black text-white",children:"SURVIVAL ARENA"})]}),n.jsxs("button",{disabled:!0,className:"aspect-square rounded-3xl bg-gradient-to-br from-blue-400 to-cyan-400 p-4 text-left opacity-60",children:[n.jsx("div",{className:"text-2xl mb-2",children:"📱"}),n.jsx("h4",{className:"text-lg font-black text-white",children:"TRIVIA VIDEO"})]})]})]})]})})}function $g(){const[e,t]=d.useState(null),r=Le(),s=nt();d.useEffect(()=>{const l=new URLSearchParams(s.search);l.get("mode")==="survival"&&l.get("from")==="quest"&&t("survival")},[s]);const a=l=>{l==="classic"?t("classic"):l==="survival"?t("survival"):l==="treasureHunt"&&t("treasureHunt")},i=()=>{r("/")},o=()=>{t(null)};if(e==="classic")return n.jsx(jg,{onBack:o});if(e==="survival"){const c=new URLSearchParams(s.search).get("from")==="quest";return n.jsx(Cg,{onBack:o,isFromQuest:c})}return e==="treasureHunt"?n.jsx(Dg,{onBack:o}):n.jsx(Og,{onModeSelect:a,onNavigateHome:i})}const Bg=({session:e,mode:t,category:r,difficulty:s,timerConfig:a,onComplete:i,onQuit:o})=>{const l=Le(),[c,u]=d.useState(0),[f,p]=d.useState([]),[h,b]=d.useState([]),[v,j]=d.useState([]),[C,y]=d.useState(!1),[m,x]=d.useState(null),[E,N]=d.useState(Date.now()),[T,S]=d.useState(0),[g,w]=d.useState([]),[k,P]=d.useState(!1),[F,Y]=d.useState(!1),[ee,Q]=d.useState({}),[U,B]=d.useState({}),[_,M]=d.useState([]);d.useState(!0);const[q,D]=d.useState([]),[L,A]=d.useState(0),[H,re]=d.useState(0),[J,O]=d.useState(!1),[I,W]=d.useState(!1),[z,$]=d.useState(""),[Z,ie]=d.useState(!1),[de,te]=d.useState(!1),[ne,K]=d.useState(!0),[R,G]=d.useState(!1),[ce,pe]=d.useState(0),[me,$e]=d.useState(0),[he,ke]=d.useState(0),[ve,xe]=d.useState(null),[ye,ht]=d.useState(0),Qt=d.useRef(null),at=d.useRef(null),Ne=t==="practice",ze=f[c],At=fe=>{try{const ue=new Audio(fe);ue.volume=.6,ue.play()}catch{console.log("Sound not available:",fe)}},pr=[{id:1,category:"General Knowledge",difficulty:"medium",prompt:"Which element has the atomic number 1?",options:["Helium","Carbon","Hydrogen","Oxygen"],answerIndex:2,explanation:"Hydrogen is the first element on the periodic table with atomic number 1!"},{id:2,category:"General Knowledge",difficulty:"medium",prompt:"What is the largest ocean on Earth?",options:["Atlantic","Pacific","Indian","Arctic"],answerIndex:1,explanation:"The Pacific Ocean covers about one-third of Earth's surface!"},{id:3,category:"General Knowledge",difficulty:"easy",prompt:"What color do you get when you mix red and yellow?",options:["Purple","Orange","Green","Pink"],answerIndex:1,explanation:"Red and yellow make orange - like a beautiful sunset!"}],We=e&&e.questions&&Array.isArray(e.questions)&&e.questions.length>0?e.questions:pr,X=We[c]||We[0]||pr[0],oe=We.length;d.useEffect(()=>{We.length>0&&(p(new Array(We.length).fill(null)),b(new Array(We.length).fill(!1)),M(new Array(We.length).fill(!1)),j(new Array(We.length).fill((a==null?void 0:a.seconds)||45)))},[We.length,a==null?void 0:a.seconds]);const _e=()=>{if(k){$("Once per quiz"),setTimeout(()=>$(""),1e3);return}if(ze!==null){$("Already answered"),setTimeout(()=>$(""),1e3);return}if(!X)return;const ue=[0,1,2,3].filter(be=>be!==X.answerIndex).sort(()=>Math.random()-.5).slice(0,2);Q({...ee,[c]:ue}),P(!0)},Ce=()=>{if(F){$("Once per quiz"),setTimeout(()=>$(""),1e3);return}if(ze!==null){$("Already answered"),setTimeout(()=>$(""),1e3);return}if(!X)return;const fe=X.answerIndex,ue=[0,0,0,0],be=40+Math.floor(Math.random()*31);ue[fe]=be;let Ze=100-be;const Te=[0,1,2,3].filter(Ee=>Ee!==fe);for(let Ee=0;Ee<Te.length-1;Ee++){const Ke=Math.min(Ze-(Te.length-1-Ee),Ze/2),dn=Math.floor(Math.random()*(Ke+1));ue[Te[Ee]]=dn,Ze-=dn}ue[Te[Te.length-1]]=Ze,B({...U,[c]:ue}),Y(!0)},Ge=()=>{const fe=new Date;return`${fe.getFullYear()}-${fe.getMonth()+1}-${fe.getDate()}`},we=()=>{Ne&&window.location.search.includes("from=quest")?l("/profile/quests",{state:{questCompleted:!0,questType:"practiceQuestions"}}):o()},pt=d.useCallback((fe,ue)=>{if(!X||Ne&&_[c]||ee[c]&&ee[c].includes(fe))return;const be=[...f];if(be[c]=f[c]===fe?null:fe,p(be),N(Date.now()),Ne&&!g.includes(c)&&be[c]!==null){const Te=g.length+1;if(S(Te),w(Ee=>[...Ee,c]),window.location.search.includes("from=quest")){let Ee={};try{const dn=localStorage.getItem("questProgress");dn&&(Ee=JSON.parse(dn))}catch(dn){console.error("Error reading progress:",dn)}const Ke=Ee.practiceQuestions||0;Ee.practiceQuestions=Math.max(Ke,Te),Ee.date=`${new Date().getFullYear()}-${new Date().getMonth()+1}-${new Date().getDate()}`,localStorage.setItem("questProgress",JSON.stringify(Ee)),console.log("Saved practice progress:",Ee.practiceQuestions),window.dispatchEvent(new CustomEvent("questProgressUpdate",{detail:{practiceQuestions:Ee.practiceQuestions}}))}}be[c]!==null&&(K(!1),clearInterval(at.current));const Ze=be[c]===X.answerIndex;if(Ze){const Te=he+1;if(ke(Te),A(Ee=>Ee+1),re(0),Ne){pe(Ke=>Ke+1);const Ee=10;$e(Ke=>Ke+Ee),At("/sounds/correct.mp3"),setTimeout(()=>At("/sounds/coin.mp3"),500),te(!0),setTimeout(()=>te(!1),2e3),xe({type:"correct",stars:1,coins:10}),setTimeout(()=>xe(null),2e3)}}else be[c]!==null&&(ke(0),A(0),re(Te=>Te+1),Ne&&(c===0&&q.length,At("/sounds/wrong.mp3")));if(D(Te=>[...Te.slice(-2),Ze]),be[c]!==null&&h[c]){const Te=[...h];Te[c]=!1,b(Te)}Ne&&be[c]!==null&&(ie(!0),M(Te=>{const Ee=[...Te];return Ee[c]=!0,Ee}),setTimeout(()=>{const Te=document.querySelector(".main-scrollable-container");if(Te){const Ee=Te.scrollHeight,Ke=Te.clientHeight;Ee>Ke&&Te.scrollTo({top:Ee-Ke,behavior:"smooth"})}},300)),!Ne&&be[c]!==null&&(clearTimeout(Qt.current),Qt.current=setTimeout(()=>{c<oe-1?le():(O(!0),y(!0))},5e3))},[X,Ne,_,c,f,h,oe,he,ee,q,L,T,g]),se=()=>{N(Date.now()),c>0&&(clearInterval(at.current),K(!1),u(fe=>fe-1),ie(!1),Ne&&f[c-1]!==null&&setTimeout(()=>ie(!0),100))},le=()=>{if(N(Date.now()),clearInterval(at.current),ze===null){const fe=[...h];fe[c]=!0,b(fe),ke(0)}K(!1),ie(!1),c<oe-1?(u(fe=>fe+1),Ne&&f[c+1]!==null?setTimeout(()=>ie(!0),100):setTimeout(()=>K(!0),100)):O(!0)},Ie=()=>{N(Date.now());const fe=[...h];fe[c]=!0,b(fe),ke(0),le()},Pe=()=>{const fe=We.reduce((ue,be,Ze)=>ue+(f[Ze]===be.answerIndex?1:0),0);if(Ne&&window.location.search.includes("from=quest")){const ue=f.filter(Ze=>Ze!==null).length,be=JSON.parse(localStorage.getItem("questProgress")||"{}");be.practiceQuestions=Math.min(ue,15),be.date=Ge(),localStorage.setItem("questProgress",JSON.stringify(be)),console.log("Final practice progress saved:",be.practiceQuestions)}if(Ne)i&&i({questions:We,answers:f,skipped:h,correct:fe,total:oe,mode:t,category:r,difficulty:s,earnedStars:ce,earnedCoins:me,finalStreak:he});else{const ue=fe*10;ht(ue),G(!0),setTimeout(()=>{At("/sounds/coin.mp3"),te(!0),setTimeout(()=>te(!1),3e3)},1e3)}},ge=()=>{i&&i({questions:We,answers:f,skipped:h,correct:We.reduce((fe,ue,be)=>fe+(f[be]===ue.answerIndex?1:0),0),total:oe,mode:t,category:r,difficulty:s,earnedStars:0,earnedCoins:ye,finalStreak:he})};d.useEffect(()=>{if(!(C||m!==null||J||!ne||f[c]!==null))return at.current=setInterval(()=>{j(fe=>{const ue=[...fe],be=ue[c];return be<=1?(clearInterval(at.current),c===oe-1?(Date.now()-E>=5e3&&O(!0),ue):(x(c),ue)):(ue[c]=be-1,ue)})},1e3),()=>clearInterval(at.current)},[C,m,c,J,oe,ne,f,E]),d.useEffect(()=>{f[c]===null&&!J&&!m?K(!0):K(!1)},[c,f,J,m]);const Xe=fe=>{const ue=Math.floor(fe/60),be=fe%60;return`${ue}:${be.toString().padStart(2,"0")}`},xt=(c+1)/We.length*100,Zt=f.filter(fe=>fe!==null).length,cn=h.filter(Boolean).length,Sn=v[c]||0,xr=We.reduce((fe,ue,be)=>fe+(f[be]===ue.answerIndex?1:0),0);return n.jsxs("div",{className:"h-dvh bg-gray-900 text-white relative flex flex-col",children:[ve&&n.jsx("div",{className:"fixed inset-0 flex items-center justify-center z-50 pointer-events-none",children:n.jsxs("div",{className:"bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-8 py-4 rounded-full text-xl font-bold animate-bounce shadow-2xl",children:["+",ve.coins," Coins!"]})}),de&&n.jsx("div",{className:"fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-40 pointer-events-none",children:[...Array(8)].map((fe,ue)=>n.jsx("div",{className:"absolute text-3xl animate-ping",style:{left:`${-30+Math.random()*60}px`,top:`${-30+Math.random()*60}px`,animationDelay:`${ue*150}ms`,animationDuration:"2s"},children:"🪙"},ue))}),n.jsxs("div",{className:`main-scrollable-container flex-1 flex flex-col ${Ne&&ze!==null?"overflow-y-auto":"overflow-hidden"}`,children:[n.jsxs("div",{className:"bg-gray-900 flex-shrink-0",children:[n.jsxs("div",{className:"flex items-center justify-between px-4 py-2 border-b border-gray-800 shadow-lg",children:[n.jsxs("button",{onClick:()=>W(!0),className:"bg-gray-700 hover:bg-gray-600 px-3 py-1.5 rounded-full flex items-center gap-2 transition-colors text-sm",children:[n.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:n.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 19l-7-7 7-7"})}),n.jsx("span",{className:"font-medium",children:"Back"})]}),n.jsx("div",{className:"flex-1"}),n.jsxs("div",{className:"flex items-center gap-2",children:[Ne&&n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:"bg-yellow-600/20 px-2 py-1 rounded-full flex items-center gap-1",children:[n.jsx("span",{className:"text-yellow-400 text-sm",children:"🪙"}),n.jsx("span",{className:"text-yellow-200 font-semibold text-sm",children:me})]}),n.jsxs("div",{className:"bg-orange-600/20 px-2 py-1 rounded-full flex items-center gap-1",children:[n.jsx("span",{className:"text-orange-400 text-sm",children:"🔥"}),n.jsx("span",{className:"text-orange-200 font-semibold text-sm",children:he})]})]}),n.jsx("div",{className:`px-2 py-1 rounded-full font-mono font-semibold text-sm ${Sn<=10?"bg-red-600/20 text-red-400 animate-pulse":Sn<=30?"bg-yellow-600/20 text-yellow-400":"bg-green-600/20 text-green-400"}`,children:Xe(Sn)})]})]}),n.jsxs("div",{className:"px-4 pb-1 bg-gray-900",children:[n.jsxs("div",{className:"flex justify-between items-center mb-1",children:[n.jsxs("span",{className:"text-xs text-gray-400",children:["Question ",c+1," of ",oe]}),n.jsxs("span",{className:"text-xs text-gray-400",children:[Math.round(xt),"% Complete"]})]}),n.jsx("div",{className:"h-2 bg-gray-700 rounded-full overflow-hidden",children:n.jsx("div",{className:"h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-500",style:{width:`${xt}%`}})}),n.jsx("div",{className:"flex justify-center gap-1 mt-1",children:Array.from({length:oe}).map((fe,ue)=>n.jsx("div",{className:`w-1.5 h-1.5 rounded-full transition-all ${ue===c?"bg-white scale-125":f[ue]!==null?"bg-green-500":h[ue]?"bg-yellow-500":"bg-gray-600"}`},ue))}),n.jsx("div",{className:"text-center mt-4",children:n.jsx("span",{className:"text-xs text-gray-500",children:X.category})})]})]}),n.jsx("div",{className:`px-4 flex flex-col ${Ne&&ze!==null?"pb-36":"flex-1 justify-between pb-[180px]"}`,children:n.jsxs("div",{className:"flex-1 flex flex-col justify-center max-h-full",children:[n.jsxs("div",{className:"relative bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 rounded-3xl p-6 mb-6 flex-shrink-0 shadow-2xl shadow-blue-600/20 border border-blue-400/20",children:[n.jsx("div",{className:"absolute top-2 right-2 w-16 h-16 bg-white/10 rounded-full blur-xl"}),n.jsx("div",{className:"absolute bottom-2 left-2 w-12 h-12 bg-white/5 rounded-full blur-lg"}),n.jsxs("div",{className:"relative text-center",children:[n.jsxs("div",{className:"inline-block bg-white/10 px-3 py-1 rounded-full text-xs font-medium text-blue-100 mb-3",children:["Question ",c+1]}),n.jsx("h2",{className:"text-xl font-bold leading-relaxed text-white tracking-wide",children:X.prompt}),X.difficulty&&n.jsx("div",{className:"mt-3 inline-block",children:n.jsx("span",{className:`px-2 py-1 rounded-full text-xs font-semibold ${X.difficulty==="easy"?"bg-green-500/20 text-green-300":X.difficulty==="medium"?"bg-yellow-500/20 text-yellow-300":"bg-red-500/20 text-red-300"}`,children:X.difficulty.toUpperCase()})})]})]}),n.jsx("div",{className:"grid grid-cols-1 gap-3 mb-2 flex-shrink-0",children:X.options.map((fe,ue)=>{const be=ze===ue,Ze=ue===X.answerIndex,Te=Ne&&ze!==null&&Z,Ee=ee[c]&&ee[c].includes(ue);let Ke="p-4 rounded-xl transition-all duration-300 border-2 min-h-[64px] flex items-center ";Ee?Ke+="bg-gray-700/30 border-gray-600/30 text-gray-500/50 cursor-not-allowed":(Ke+="cursor-pointer ",Te?be&&Ze?Ke+="bg-green-600 border-green-500 text-white shadow-lg shadow-green-600/25":be&&!Ze?Ke+="bg-red-600 border-red-500 text-white shadow-lg shadow-red-600/25":!be&&Ze?Ke+="bg-green-600/20 border-green-500 text-green-300 animate-pulse":Ke+="bg-gray-700 border-gray-600 text-gray-400":be?Ke+="bg-gray-600 border-gray-500 text-white":Ke+="bg-gray-800 border-gray-700 text-gray-200 hover:bg-gray-750 hover:border-gray-600");const dn=["🅰️","🅱️","🅲️","🅳️"];return n.jsx("button",{onClick:Fm=>pt(ue,Fm),disabled:Ne&&_[c],className:Ke,children:n.jsxs("div",{className:"flex items-center gap-2 w-full",children:[n.jsx("div",{className:"text-lg flex-shrink-0 mr-1",children:dn[ue]}),n.jsx("div",{className:"flex-1 text-left font-semibold text-base leading-relaxed",children:fe}),U[c]&&U[c][ue]>0&&!Ee&&n.jsxs("div",{className:"bg-purple-600/20 px-2 py-1 rounded-full text-xs text-purple-300",children:[U[c][ue],"%"]}),Te&&be&&Ze&&!Ee&&n.jsx("div",{className:"text-lg animate-bounce",children:"🎉"}),Te&&be&&!Ze&&!Ee&&n.jsx("div",{className:"text-lg",children:"😔"}),Te&&!be&&Ze&&!Ee&&n.jsx("div",{className:"text-base animate-pulse",children:"✨"})]})},ue)})}),Ne&&Z&&ze!==null&&n.jsx("div",{className:"bg-gray-800 rounded-xl p-4 mb-2 mt-4 border border-gray-700 flex-shrink-0",children:n.jsxs("div",{className:"flex gap-3",children:[n.jsx("div",{className:"text-lg flex-shrink-0",children:ze===X.answerIndex?"🎊":"💡"}),n.jsxs("div",{className:"flex-1",children:[n.jsx("h4",{className:`font-semibold mb-3 text-sm ${ze===X.answerIndex?"text-green-400":"text-blue-400"}`,children:ze===X.answerIndex?"Perfect! Well done!":"Good try! Here's why:"}),X.explanation&&n.jsx("p",{className:"text-gray-300 text-sm leading-relaxed",children:X.explanation})]})]})})]})})]}),n.jsxs("div",{className:"fixed bottom-0 left-0 right-0 z-50",children:[n.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/95 to-gray-900/80 backdrop-blur-xl"}),n.jsxs("div",{className:"relative p-4 pb-8",children:[!Ne&&n.jsxs("div",{className:"flex justify-center gap-3 mb-4",children:[n.jsxs("button",{onClick:_e,disabled:ze!==null,className:`${k?"bg-white/5 text-gray-500":"bg-gradient-to-r from-orange-500 to-orange-600"} 
                  disabled:bg-white/5 disabled:text-gray-500
                  px-4 py-2.5 rounded-2xl font-semibold transition-all transform active:scale-95
                  shadow-lg flex items-center gap-2 text-sm`,children:[n.jsx("span",{children:"⚡"}),"50:50"]}),n.jsxs("button",{onClick:Ce,disabled:ze!==null,className:`${F?"bg-white/5 text-gray-500":"bg-gradient-to-r from-purple-500 to-purple-600"} 
                  disabled:bg-white/5 disabled:text-gray-500
                  px-4 py-2.5 rounded-2xl font-semibold transition-all transform active:scale-95
                  shadow-lg flex items-center gap-2 text-sm`,children:[n.jsx("span",{children:"👥"}),"Ask Friends"]})]}),n.jsxs("div",{className:"flex gap-2 mb-3",children:[n.jsx("button",{onClick:se,disabled:c===0,className:`flex-1 bg-white/10 backdrop-blur-md border border-white/20 
                disabled:opacity-30 disabled:cursor-not-allowed
                py-3.5 rounded-2xl font-semibold transition-all transform active:scale-95
                hover:bg-white/15 text-white shadow-xl`,children:"Previous"}),n.jsx("button",{onClick:Ie,disabled:ze!==null,className:`flex-1 py-3.5 rounded-2xl font-semibold transition-all transform active:scale-95 shadow-xl ${ze!==null?"bg-white/5 text-gray-500 cursor-not-allowed":"bg-gradient-to-r from-amber-500 to-yellow-500 text-white hover:from-amber-600 hover:to-yellow-600"}`,children:"Skip"}),n.jsx("button",{onClick:le,className:`flex-1 bg-gradient-to-r from-blue-500 to-indigo-500 
                hover:from-blue-600 hover:to-indigo-600
                py-3.5 rounded-2xl font-semibold transition-all transform active:scale-95
                text-white shadow-xl`,children:c===oe-1?"Finish":"Next"})]}),n.jsxs("button",{onClick:()=>O(!0),className:`w-full bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500
              hover:from-emerald-600 hover:via-green-600 hover:to-teal-600
              py-4 rounded-2xl font-bold text-white transition-all transform active:scale-[0.98]
              shadow-2xl shadow-green-500/25 relative overflow-hidden group`,children:[n.jsx("div",{className:"absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent"}),n.jsx("span",{className:"relative",children:"Submit Quiz"})]})]})]}),R&&n.jsx("div",{className:"fixed inset-0 bg-black/75 flex items-center justify-center z-50 p-4",children:n.jsxs("div",{className:"bg-gray-800 rounded-3xl p-6 max-w-sm w-full text-center border border-gray-700",children:[n.jsx("div",{className:"text-4xl mb-4",children:"🎉"}),n.jsx("h3",{className:"text-xl font-bold mb-2",children:"Quiz Complete!"}),n.jsx("p",{className:"text-gray-400 mb-6",children:"Here's how you performed"}),n.jsxs("div",{className:"bg-gray-700/50 rounded-2xl p-4 mb-6 space-y-3",children:[n.jsxs("div",{className:"flex justify-between items-center",children:[n.jsx("span",{className:"text-gray-300",children:"Questions Attempted:"}),n.jsxs("span",{className:"text-white font-semibold",children:[Zt," / ",oe]})]}),n.jsxs("div",{className:"flex justify-between items-center",children:[n.jsx("span",{className:"text-gray-300",children:"Correct Answers:"}),n.jsx("span",{className:"text-green-400 font-semibold",children:xr})]}),n.jsxs("div",{className:"flex justify-between items-center",children:[n.jsx("span",{className:"text-gray-300",children:"Accuracy:"}),n.jsxs("span",{className:"text-blue-400 font-semibold",children:[Zt>0?Math.round(xr/Zt*100):0,"%"]})]}),n.jsx("div",{className:"border-t border-gray-600 pt-3 mt-3",children:n.jsxs("div",{className:"flex justify-between items-center",children:[n.jsx("span",{className:"text-yellow-300 flex items-center gap-1",children:"🪙 Coins Earned:"}),n.jsx("span",{className:"text-yellow-400 font-bold text-lg",children:ye})]})})]}),n.jsx("button",{onClick:ge,className:"w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 py-3 rounded-xl font-medium transition-colors",children:"Continue"})]})}),I&&n.jsx("div",{className:"fixed inset-0 bg-black/75 flex items-center justify-center z-50 p-4",children:n.jsxs("div",{className:"bg-gray-800 rounded-3xl p-6 max-w-sm w-full text-center border border-gray-700",children:[n.jsx("div",{className:"text-4xl mb-4",children:"🤔"}),n.jsx("h3",{className:"text-xl font-bold mb-2",children:"Leave Quiz?"}),n.jsx("p",{className:"text-gray-400 mb-6",children:"Your progress will be lost"}),n.jsxs("div",{className:"flex gap-3",children:[n.jsx("button",{onClick:()=>W(!1),className:"flex-1 bg-blue-600 hover:bg-blue-700 py-3 rounded-xl font-medium",children:"Stay"}),n.jsx("button",{onClick:we,className:"flex-1 bg-gray-700 hover:bg-gray-600 py-3 rounded-xl font-medium",children:"Leave"})]})]})}),J&&!R&&n.jsx("div",{className:"fixed inset-0 bg-black/75 flex items-center justify-center z-50 p-4",children:n.jsxs("div",{className:"bg-gray-800 rounded-3xl p-6 max-w-sm w-full text-center border border-gray-700",children:[n.jsx("div",{className:"text-4xl mb-4",children:"🏆"}),n.jsx("h3",{className:"text-xl font-bold mb-2",children:"Ready to finish?"}),n.jsxs("p",{className:"text-gray-400 mb-4",children:[Zt," of ",oe," answered • ",cn," skipped"]}),Ne&&n.jsx("div",{className:"bg-gradient-to-r from-yellow-600/20 to-orange-600/20 p-4 rounded-2xl mb-6 border border-yellow-600/30",children:n.jsxs("div",{className:"flex justify-center gap-6",children:[n.jsxs("div",{className:"text-center",children:[n.jsx("div",{className:"text-2xl mb-1",children:"⭐"}),n.jsx("div",{className:"text-yellow-400 font-bold",children:ce}),n.jsx("div",{className:"text-xs text-gray-400",children:"Stars"})]}),n.jsxs("div",{className:"text-center",children:[n.jsx("div",{className:"text-2xl mb-1",children:"🪙"}),n.jsx("div",{className:"text-yellow-400 font-bold",children:me}),n.jsx("div",{className:"text-xs text-gray-400",children:"Coins"})]})]})}),n.jsxs("div",{className:"flex gap-3",children:[n.jsx("button",{onClick:()=>{O(!1),x(null),N(Date.now())},className:"flex-1 bg-gray-700 hover:bg-gray-600 py-3 rounded-xl font-medium",children:"Back"}),n.jsx("button",{onClick:fe=>{fe.preventDefault(),fe.stopPropagation(),console.log("Submit button clicked"),Pe()},className:"flex-1 bg-green-600 hover:bg-green-700 py-3 rounded-xl font-medium",children:"Submit"})]})]})}),m===c&&!J&&n.jsx("div",{className:"fixed inset-0 bg-black/75 flex items-center justify-center z-50 p-4",children:n.jsxs("div",{className:"bg-gray-800 rounded-3xl p-6 max-w-sm w-full text-center border border-gray-700",children:[n.jsx("div",{className:"text-4xl mb-4 animate-pulse",children:"⏰"}),n.jsx("h3",{className:"text-xl font-bold mb-2",children:"Time's Up!"}),n.jsx("p",{className:"text-gray-400 mb-6",children:"Let's move to the next question"}),n.jsx("button",{onClick:()=>{x(null),N(Date.now()),c<We.length-1?le():O(!0)},className:"w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-xl font-medium",children:c<We.length-1?"Continue":"See Results"})]})}),z&&n.jsx("div",{className:"fixed top-20 left-1/2 transform -translate-x-1/2 bg-red-600 text-white px-4 py-2 rounded-full font-medium animate-bounce z-50",children:z}),n.jsx("style",{jsx:!0,children:`
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
      `})]})},is=[{name:"GK",slug:"general-knowledge",questions:50,icon:"🧠",color:"#FF6B6B",gradient:"from-red-500 to-pink-500"},{name:"Science",slug:"science",questions:45,icon:"🧪",color:"#4ECDC4",gradient:"from-cyan-500 to-teal-500"},{name:"Fun Facts",slug:"fun-facts",questions:30,icon:"🎉",color:"#FFD93D",gradient:"from-yellow-400 to-orange-500"},{name:"History",slug:"history",questions:42,icon:"🏺",color:"#A8E6CF",gradient:"from-green-400 to-emerald-500"},{name:"AI & Tech",slug:"artificial-intelligence",questions:28,icon:"🤖",color:"#C7B8FF",gradient:"from-purple-400 to-indigo-500"},{name:"Geography",slug:"geography",questions:38,icon:"🗺️",color:"#FACC15",gradient:"from-yellow-400 to-amber-500"},{name:"Computer",slug:"computer",questions:34,icon:"💻",color:"#3B82F6",gradient:"from-blue-400 to-blue-600"},{name:"Aptitude",slug:"aptitude",questions:36,icon:"📐",color:"#EC4899",gradient:"from-pink-500 to-rose-500"},{name:"Iconic Figures",slug:"iconic-figures",questions:26,icon:"🌟",color:"#8B5CF6",gradient:"from-purple-500 to-violet-600"}],Ug=()=>n.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:n.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5l7 7-7 7"})}),qg=()=>n.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:n.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"})}),Qg=()=>n.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:n.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"})}),Yg=()=>n.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:n.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"})}),Wg=()=>n.jsx("svg",{className:"w-3 h-3",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:n.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 10V3L4 14h7v7l9-11h-7z"})}),Hg=({results:e={correct:8,total:10,category:"general-knowledge",mode:"quiz",elapsedMs:125e3,questions:[],returnPath:null,fromQuest:!1},onRetake:t=()=>{},onReview:r=()=>{},onNavigate:s=(u,f)=>{},isRetake:a=!1,isPractice:i=!1,player:o={level:1,coins:0,combo:0,energy:5},categories:l=[],addCoins:c=()=>{}})=>{const[u,f]=d.useState(o.coins),p=d.useRef(null),[h,b]=d.useState(null),[v]=Ft("/sounds/coin.mp3",{volume:.75}),[j,C]=d.useState(!1),[y,m]=d.useState(!1),[x,E]=d.useState(0),[N,T]=d.useState(!1),[S,g]=d.useState(!1),w=()=>{if(console.log("QuizResults handleBack:",{fromQuest:e.fromQuest,returnPath:e.returnPath,isPractice:e.isPractice||i}),e.fromQuest){const z=e.isPractice||i?"practiceQuestions":"dailyQuizzes";e.isPractice||i?s("/profile/quests"):s("/profile/quests",{state:{questCompleted:!0,questType:z,increment:1}})}else{const z=e.returnPath||"/";s(z)}},{correct:k,total:P,category:F,categorySlug:Y,difficulty:ee,mode:Q,elapsedMs:U}=e,B=P?Math.round(k/P*100):0,_=B===100,M=B>=80,q=Math.floor(U/1e3),D=P>0?Math.floor(q/P):0,L=i?e.earnedCoins||0:Math.round(k*5*(_?1.5:M?1.2:1)),A=is.find(z=>z.slug===F)||is[0],re=(()=>_?{emoji:"🏆",text:"Perfect!",color:"text-yellow-400"}:B>=90?{emoji:"🌟",text:"Excellent!",color:"text-purple-400"}:B>=80?{emoji:"✨",text:"Great job!",color:"text-blue-400"}:B>=70?{emoji:"👍",text:"Good effort!",color:"text-green-400"}:B>=60?{emoji:"💪",text:"Keep going!",color:"text-orange-400"}:{emoji:"📚",text:"Keep practicing!",color:"text-gray-400"})();d.useEffect(()=>{!h&&!j&&f(o.coins)},[o.coins,h,j]),d.useEffect(()=>{e.coinsProcessed||L>0&&p.current&&setTimeout(()=>{if(p.current.getBoundingClientRect(),v)try{v()}catch(z){console.error("Error playing coin sound:",z)}else console.warn("Coin sound not loaded");b({startRect:{left:window.innerWidth/2-50,top:window.innerHeight/2,width:100,height:100},count:Math.min(L,10),amount:L}),C(!0),e.coinsProcessed=!0},500)},[]),d.useEffect(()=>{document.documentElement.scrollIntoView({behavior:"smooth",block:"start"}),(_||M)&&(m(!0),setTimeout(()=>m(!1),3e3));let z=0;const $=k/20,Z=setInterval(()=>{z+=$,z>=k?(E(k),clearInterval(Z)):E(Math.floor(z))},50);return()=>clearInterval(Z)},[k,_,M]);const J=[{score:7,total:10},{score:6,total:10},{score:8,total:10},{score:9,total:10},{score:k,total:P}],O=()=>{try{const z=localStorage.getItem("qp_recent");if(z)return JSON.parse(z).slice(0,10).map(Z=>Z.slug||Z.cat).filter(Z=>Z&&Z!==e.categorySlug)}catch(z){console.error("Error reading recent categories:",z)}return[]},I=()=>{const z=Y||F,$=ee||"medium",Z=O(),ie=(l||is||[]).filter(ne=>ne.slug!==z&&!Z.slice(0,3).includes(ne.slug)),te=(()=>{if(ie.length===0){const ne=(l||is||[]).filter(K=>K.slug!==z);return ne[Math.floor(Math.random()*ne.length)]||(l||is)[0]}return ie[Math.floor(Math.random()*ie.length)]})();if(B<60)return i?[{icon:"🎯",title:"Try Fewer Questions",desc:"Start with just 5",color:"from-blue-500 to-cyan-500",action:()=>s(`/quiz/${z}`,{mode:"practice",difficulty:"easy",count:5,timer:{type:"off",seconds:0}})},{icon:te.icon,title:te.name,desc:"Fresh start with new topic",color:te.gradient,action:()=>s(`/quiz/${te.slug}`,{mode:"practice",difficulty:"easy",count:10,timer:{type:"off",seconds:0}})},{icon:"📖",title:"Review Mistakes",desc:"Learn from errors",color:"from-purple-500 to-pink-500",action:()=>r()}]:[{icon:"📚",title:"Practice Mode",desc:"No timer, learn at your pace",color:"from-green-500 to-teal-500",action:()=>s(`/quiz/${z}`,{mode:"practice",difficulty:"easy",count:10,timer:{type:"off",seconds:0}})},{icon:$!=="easy"?"🎯":"🔄",title:$!=="easy"?"Easy Mode":"Try Again",desc:$!=="easy"?"Build confidence":"You can do this!",color:"from-blue-500 to-cyan-500",action:()=>$!=="easy"?s(`/quiz/${z}`,{mode:"quiz",difficulty:"easy",count:5,timer:{type:"per_q",seconds:60}}):t()},{icon:te.icon,title:te.name,desc:"Try something different",color:te.gradient,action:()=>s(`/quiz/${te.slug}`,{mode:"quiz",difficulty:"easy",count:10,timer:{type:"per_q",seconds:45}})}];if(B>=80)return $==="hard"&&B>=90?[{icon:"⚡",title:"Lightning Round",desc:"20 questions, 10s each",color:"from-yellow-500 to-red-500",action:()=>s(`/quiz/${z}`,{mode:"quiz",difficulty:"hard",count:20,timer:{type:"per_q",seconds:10}})},{icon:te.icon,title:`${te.name} Challenge`,desc:"Hard mode, new topic",color:te.gradient,action:()=>s(`/quiz/${te.slug}`,{mode:"quiz",difficulty:"hard",count:15,timer:{type:"per_q",seconds:30}})},{icon:"🎲",title:"Mixed Categories",desc:"Test all your knowledge",color:"from-purple-500 to-indigo-500",action:()=>s("/quiz/mixed",{mode:"quiz",difficulty:"hard",count:20,timer:{type:"per_q",seconds:30}})}]:[{icon:$==="hard"?"🔥":"🎯",title:$==="hard"?"Perfect Score Challenge":"Hard Mode",desc:$==="hard"?"Can you get 100%?":"Level up your skills",color:"from-red-500 to-orange-500",action:()=>s(`/quiz/${z}`,{mode:"quiz",difficulty:"hard",count:$==="hard"?10:20,timer:{type:"per_q",seconds:30}})},{icon:te.icon,title:te.name,desc:"Master new topics",color:te.gradient,action:()=>s(`/quiz/${te.slug}`,{mode:"quiz",difficulty:$,count:10,timer:{type:"per_q",seconds:45}})},{icon:"⚡",title:"Speed Challenge",desc:"10 questions, 15s each",color:"from-purple-500 to-pink-500",action:()=>s(`/quiz/${z}`,{mode:"quiz",difficulty:"medium",count:10,timer:{type:"per_q",seconds:15}})}];{const ne=B<70;return[{icon:ne?"📚":"🎯",title:ne?"Practice More":"Try Again",desc:ne?"Improve accuracy":"Beat your score",color:ne?"from-green-500 to-teal-500":"from-blue-500 to-purple-500",action:ne?()=>s(`/quiz/${z}`,{mode:"practice",difficulty:$,count:10,timer:{type:"off",seconds:0}}):()=>t()},{icon:te.icon,title:te.name,desc:"Explore new topics",color:te.gradient,action:()=>s(`/quiz/${te.slug}`,{mode:"quiz",difficulty:"medium",count:10,timer:{type:"per_q",seconds:45}})},{icon:$==="easy"?"⬆️":"💪",title:$==="easy"?"Medium Difficulty":"More Questions",desc:$==="easy"?"Ready for more?":"Test endurance",color:"from-indigo-500 to-purple-500",action:()=>s(`/quiz/${z}`,{mode:"quiz",difficulty:$==="easy"?"medium":$,count:$==="easy"?10:20,timer:{type:"per_q",seconds:45}})}]}},W=gt.useMemo(()=>I(),[B,i,e.categorySlug,e.difficulty]);return n.jsxs("div",{className:"min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white p-4",children:[h&&n.jsx(Ei,{startRect:h.startRect,targetRef:p,count:h.count,onDone:()=>{h.amount>0&&!S&&(console.log("[QuizResults] Adding coins once:",h.amount),c(h.amount),g(!0),f(o.coins+h.amount)),b(null)}}),n.jsx("style",{children:`
        @keyframes coinRotate {
          from { transform: rotateY(0deg); }
          to { transform: rotateY(360deg); }
        }
      `}),y&&n.jsx("div",{className:"fixed inset-0 pointer-events-none z-50 flex items-center justify-center",children:n.jsx("div",{className:"text-8xl animate-bounce",children:_?"🎉":"⭐"})}),n.jsxs("div",{className:"flex justify-between items-center mb-6",children:[n.jsxs("button",{onClick:w,className:"p-2 rounded-xl bg-white/10 backdrop-blur hover:bg-white/20 transition-all flex items-center gap-2",children:[n.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:n.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 19l-7-7 7-7"})}),n.jsx("span",{className:"text-sm font-medium",children:"Back"})]}),n.jsxs("div",{className:"flex gap-2",children:[n.jsxs("div",{className:"px-3 py-1.5 rounded-full bg-white/10 backdrop-blur text-sm font-medium",children:["Level ",o.level]}),n.jsxs("button",{ref:p,onClick:()=>T(!0),className:"px-3 py-1.5 rounded-full bg-yellow-500/20 backdrop-blur text-sm font-medium text-yellow-300 hover:bg-yellow-500/30 transition-all cursor-pointer",children:[u," 🪙"]})]})]}),n.jsxs("div",{className:"relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 p-8 mb-6",children:[n.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-blue-500/10 animate-pulse"}),n.jsxs("div",{className:"relative text-center",children:[n.jsxs("div",{className:`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur mb-4 ${re.color}`,children:[n.jsx("span",{className:"text-2xl",children:re.emoji}),n.jsx("span",{className:"font-semibold",children:re.text})]}),n.jsxs("div",{className:"mb-6",children:[n.jsxs("div",{className:"text-7xl font-bold mb-2 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent",children:[x,"/",P]}),n.jsxs("div",{className:"flex items-center justify-center gap-2 text-sm text-white/60",children:[n.jsx("span",{className:"text-xl",children:A.icon}),n.jsx("span",{children:A.name})]})]}),n.jsxs("div",{className:"grid grid-cols-3 gap-4 max-w-md mx-auto",children:[n.jsxs("div",{className:"text-center",children:[n.jsxs("div",{className:"text-3xl font-bold",children:[B,"%"]}),n.jsx("div",{className:"text-xs text-white/60",children:"Accuracy"})]}),n.jsxs("div",{className:"text-center",children:[n.jsxs("div",{className:"text-3xl font-bold",children:[D,"s"]}),n.jsx("div",{className:"text-xs text-white/60",children:"Avg Speed"})]}),n.jsxs("div",{className:"text-center",children:[n.jsx("div",{className:"text-3xl font-bold text-yellow-400",children:L>0?`+${L}`:"0"}),n.jsx("div",{className:"text-xs text-white/60",children:"Coins"})]})]})]})]}),n.jsxs("div",{className:"rounded-2xl bg-white/5 backdrop-blur border border-white/10 p-4 mb-6",children:[n.jsxs("div",{className:"flex items-center justify-between mb-3",children:[n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx(Yg,{}),n.jsx("span",{className:"text-sm font-medium",children:"Your Progress"})]}),o.combo>0&&n.jsxs("div",{className:"flex items-center gap-1 px-2 py-1 rounded-full bg-orange-500/20 text-orange-400 text-xs",children:[n.jsx(Wg,{}),o.combo," streak"]})]}),n.jsx("div",{className:"flex items-end gap-1 h-12 mb-2",children:J.map((z,$)=>n.jsx("div",{className:`flex-1 rounded-t transition-all ${$===J.length-1?"bg-gradient-to-t from-purple-500 to-purple-400":"bg-white/20"}`,style:{height:`${z.score/z.total*100}%`,minHeight:"4px"}},$))}),n.jsx("div",{className:"text-xs text-white/40 text-center",children:"Last 5 quizzes"})]}),n.jsxs("div",{className:"grid grid-cols-2 gap-3 mb-6",children:[n.jsxs("button",{onClick:r,className:"relative overflow-hidden group rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 p-4 transition-all hover:scale-105 active:scale-95",children:[n.jsx("div",{className:"absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform"}),n.jsxs("div",{className:"relative flex items-center justify-between",children:[n.jsxs("div",{className:"text-left",children:[n.jsx("div",{className:"font-semibold",children:"Review"}),n.jsx("div",{className:"text-xs opacity-80",children:"Check answers"})]}),n.jsx(Qg,{})]})]}),n.jsx("button",{onClick:t,className:"relative overflow-hidden group rounded-2xl bg-white/10 backdrop-blur border border-white/20 p-4 transition-all hover:scale-105 active:scale-95 hover:bg-white/15",children:n.jsxs("div",{className:"flex items-center justify-between",children:[n.jsxs("div",{className:"text-left",children:[n.jsx("div",{className:"font-semibold",children:"Try Again"}),n.jsx("div",{className:"text-xs opacity-60",children:"New questions"})]}),n.jsx(qg,{})]})})]}),n.jsxs("div",{className:"space-y-3",children:[n.jsx("div",{className:"text-sm font-medium text-white/60 px-1",children:"Recommended for you"}),W.map((z,$)=>n.jsx("button",{onClick:z.action,className:"w-full group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur border border-white/10 p-4 transition-all hover:bg-white/10 hover:border-white/20",children:n.jsxs("div",{className:"flex items-center justify-between",children:[n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsx("div",{className:`p-2 rounded-xl bg-gradient-to-r ${z.color} opacity-20 group-hover:opacity-30 transition-opacity`,children:n.jsx("span",{className:"text-xl",children:z.icon})}),n.jsxs("div",{className:"text-left",children:[n.jsx("div",{className:"font-medium text-sm",children:z.title}),n.jsx("div",{className:"text-xs text-white/40",children:z.desc})]})]}),n.jsx(Ug,{})]})},$))]}),n.jsx("div",{className:"mt-6 pt-6 border-t border-white/10",children:n.jsx("button",{onClick:()=>s("/profile/history",{replace:!0}),className:"w-full text-center text-sm text-white/40 hover:text-white/60 transition-colors",children:"View all history →"})}),N&&n.jsx("div",{className:"fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4",onClick:z=>{z.target===z.currentTarget&&T(!1)},children:n.jsxs("div",{className:"bg-gray-800 rounded-3xl p-6 w-full max-w-md border border-gray-700 relative overflow-hidden",onClick:z=>z.stopPropagation(),children:[n.jsx("div",{className:"absolute inset-0 opacity-10",children:n.jsx("div",{className:"h-full bg-gradient-to-br from-yellow-400 to-orange-500"})}),n.jsxs("div",{className:"relative",children:[n.jsxs("div",{className:"flex items-center justify-between mb-6",children:[n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsx("div",{className:"text-5xl",style:{animation:"coinRotate 2s linear infinite"},children:"🪙"}),n.jsxs("div",{children:[n.jsx("h3",{className:"text-2xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent",children:"Your Treasure"}),n.jsxs("p",{className:"text-3xl font-bold text-white mt-1",children:[o.coins," Coins"]})]})]}),n.jsx("button",{onClick:()=>T(!1),className:"w-8 h-8 rounded-lg bg-white/5 border border-gray-600 grid place-items-center hover:bg-white/10 transition",children:"✕"})]}),n.jsxs("div",{className:"mb-6",children:[n.jsx("h4",{className:"text-sm font-medium text-gray-400 mb-3",children:"Ways to Earn"}),n.jsxs("div",{className:"space-y-3",children:[n.jsx("div",{className:"p-4 rounded-xl bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 hover:scale-[1.02] transition-transform",children:n.jsxs("div",{className:"flex items-center justify-between",children:[n.jsxs("div",{children:[n.jsxs("div",{className:"font-medium flex items-center gap-2",children:[n.jsx("span",{className:"text-2xl",children:"✅"}),"Complete Quizzes"]}),n.jsx("div",{className:"text-xs text-gray-400 mt-1",children:"+5 coins per correct answer"})]}),n.jsx("div",{className:"text-green-400 font-bold",children:"+5"})]})}),n.jsx("div",{className:"p-4 rounded-xl bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 hover:scale-[1.02] transition-transform",children:n.jsxs("div",{className:"flex items-center justify-between",children:[n.jsxs("div",{children:[n.jsxs("div",{className:"font-medium flex items-center gap-2",children:[n.jsx("span",{className:"text-2xl",children:"🎯"}),"Daily Challenge"]}),n.jsx("div",{className:"text-xs text-gray-400 mt-1",children:"Complete daily for bonus"})]}),n.jsx("div",{className:"text-blue-400 font-bold",children:"+5"})]})}),n.jsx("div",{className:"p-4 rounded-xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 hover:scale-[1.02] transition-transform",children:n.jsxs("div",{className:"flex items-center justify-between",children:[n.jsxs("div",{children:[n.jsxs("div",{className:"font-medium flex items-center gap-2",children:[n.jsx("span",{className:"text-2xl",children:"🎰"}),"Spin & Play"]}),n.jsx("div",{className:"text-xs text-gray-400 mt-1",children:"Test your luck!"})]}),n.jsx("div",{className:"text-purple-400 font-bold",children:"+50"})]})}),n.jsx("div",{className:"p-4 rounded-xl bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/20 hover:scale-[1.02] transition-transform",children:n.jsxs("div",{className:"flex items-center justify-between",children:[n.jsxs("div",{children:[n.jsxs("div",{className:"font-medium flex items-center gap-2",children:[n.jsx("span",{className:"text-2xl",children:"🏆"}),"Achievements"]}),n.jsx("div",{className:"text-xs text-gray-400 mt-1",children:"Unlock special rewards"})]}),n.jsx("div",{className:"text-orange-400 font-bold",children:"+???"})]})})]})]}),n.jsxs("div",{className:"mb-6",children:[n.jsxs("div",{className:"flex justify-between text-xs text-gray-400 mb-2",children:[n.jsx("span",{children:"Next reward"}),n.jsxs("span",{children:[100-o.coins%100," coins to go"]})]}),n.jsx("div",{className:"h-2 bg-white/10 rounded-full overflow-hidden",children:n.jsx("div",{className:"h-full bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full transition-all",style:{width:`${o.coins%100}%`}})})]}),n.jsx("button",{onClick:()=>{T(!1),s("/play")},className:"w-full py-3 rounded-xl bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-bold hover:scale-[1.02] transition-transform shadow-lg",children:"Start Earning Now! 🚀"})]})]})})]})},Gg=({questions:e,answers:t,skipped:r,onBack:s,onRetake:a,fromHistory:i=!1})=>{const o=Le(),l=()=>{i?o("/profile/history",{replace:!0}):s?s():o(-1)},c=e.reduce((p,h,b)=>p+(t[b]===h.answerIndex?1:0),0),u=(r==null?void 0:r.filter(Boolean).length)||0,f=e.length-c-u;return n.jsxs("div",{className:"mt-2 card rounded-3xl p-5 w-full max-w-none mx-auto pb-24",children:[n.jsxs("div",{className:"flex items-center justify-between mb-4",children:[n.jsx("button",{className:"px-3 py-1.5 rounded-xl border border-base-border bg-white/5",onClick:l,children:"← Back"}),n.jsx("h2",{className:"text-lg font-semibold",children:"Review Answers"}),n.jsx("div",{className:"w-16"})," "]}),n.jsxs("div",{className:"grid grid-cols-3 gap-2 mb-4",children:[n.jsxs("div",{className:"rounded-xl bg-green-600/10 border border-green-500/30 p-2 text-center",children:[n.jsx("div",{className:"text-xs text-green-400",children:"Correct"}),n.jsx("div",{className:"text-lg font-bold text-green-400",children:c})]}),n.jsxs("div",{className:"rounded-xl bg-red-600/10 border border-red-500/30 p-2 text-center",children:[n.jsx("div",{className:"text-xs text-red-400",children:"Incorrect"}),n.jsx("div",{className:"text-lg font-bold text-red-400",children:f})]}),n.jsxs("div",{className:"rounded-xl bg-amber-600/10 border border-amber-500/30 p-2 text-center",children:[n.jsx("div",{className:"text-xs text-amber-400",children:"Skipped"}),n.jsx("div",{className:"text-lg font-bold text-amber-400",children:u})]})]}),n.jsx("ol",{className:"space-y-4",children:e.map((p,h)=>{const b=t[h],v=!b&&b!==0,j=b===p.answerIndex;return n.jsxs("li",{className:"rounded-2xl border border-base-border bg-white/5 p-4 md:p-5",children:[n.jsxs("div",{className:"flex items-start justify-between mb-3",children:[n.jsxs("div",{className:"flex-1",children:[n.jsxs("div",{className:"text-sm md:text-base font-medium",children:["Q",h+1,". ",p.prompt]}),p.category&&n.jsxs("div",{className:"text-xs text-base-muted mt-1",children:["Category: ",p.category," • Difficulty: ",p.difficulty||"Medium"]})]}),n.jsx("div",{className:"ml-2",children:v?n.jsx("span",{className:"px-2 py-1 rounded text-xs bg-amber-600/20 text-amber-400",children:"Skipped"}):j?n.jsx("span",{className:"px-2 py-1 rounded text-xs bg-green-600/20 text-green-400",children:"✓ Correct"}):n.jsx("span",{className:"px-2 py-1 rounded text-xs bg-red-600/20 text-red-400",children:"✗ Wrong"})})]}),n.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-3",children:p.options.map((C,y)=>{const m=b===y,x=y===p.answerIndex;let E="w-full text-left px-3 py-2 rounded-xl border transition-all ";return x?E+="bg-green-600/20 border-green-500/50 text-green-300":m&&!x?E+="bg-red-600/20 border-red-500/50 text-red-300":E+="bg-base-bg/40 border-base-border text-base-muted",n.jsxs("div",{className:E,children:[n.jsxs("span",{className:"font-semibold mr-2",children:[["A","B","C","D"][y],"."]}),C,x&&n.jsx("span",{className:"ml-2 text-green-400",children:"✓"}),m&&!x&&n.jsx("span",{className:"ml-2 text-red-400",children:"✗"})]},y)})}),p.explanation&&n.jsxs("div",{className:"mt-3 p-3 rounded-xl bg-white/5 border border-base-border",children:[n.jsx("div",{className:"text-xs font-semibold text-brand-blue mb-1",children:"Explanation:"}),n.jsx("div",{className:"text-sm text-base-muted",children:p.explanation})]})]},p.id||h)})}),n.jsxs("div",{className:"mt-6 flex gap-2 justify-center sticky bottom-4",children:[n.jsx("button",{className:"px-4 py-2.5 rounded-xl border border-base-border bg-base-card backdrop-blur",onClick:l,children:"Back to Results"}),a&&n.jsx("button",{className:"px-4 py-2.5 rounded-xl bg-gradient-to-r from-brand-blue to-brand-purple text-white font-medium",onClick:a,children:"Retake Quiz"})]})]})},Vg="qp_resume",Dd="qp_mistakes",Fd="qp_stats",Od="qp_lastset",$d="qp_recent",Bd="qp_review_snapshot",Xg=50,os=(e="")=>e.replace(/-/g," ").replace(/\b\w/g,t=>t.toUpperCase()),Ma=(e="")=>e.toLowerCase().trim().replace(/[^\w\s-]/g,"").replace(/\s+/g,"-"),Kg=(e,t)=>e.slice().sort(()=>Math.random()-.5).slice(0,t),Im=e=>{const t=e.slice();for(let r=t.length-1;r>0;r--){const s=Math.floor(Math.random()*(r+1));[t[r],t[s]]=[t[s],t[r]]}return t},Jg=(e,t,r)=>Math.max(t,Math.min(r,e)),ls=(e,t)=>{try{const r=localStorage.getItem(e);return r?JSON.parse(r):t}catch{return t}};async function Zg(){const e="/data/quiz_questions_bank.csv",t=await fetch(e);if(!t.ok)throw new Error(`CSV not found at ${e}`);const r=await t.text(),{data:s}=hr.parse(r,{header:!0,skipEmptyLines:!0,transformHeader:i=>String(i).trim().toLowerCase()}),a={a:0,b:1,c:2,d:3};return s.map((i,o)=>{var h;const l=[i.option1,i.option2,i.option3,i.option4].map(b=>(b??"").trim());if(l.some(b=>!b))return null;let c=-1;const u=String(i.answer??"").trim();if(a[u.toLowerCase()]!==void 0)c=a[u.toLowerCase()];else{const b=l.findIndex(v=>v.toLowerCase()===u.toLowerCase());c=b>=0?b:0}const f=String(i.category??i.subject??"General Knowledge").trim(),p=String(i.difficulty??"medium").toLowerCase().trim();return{id:((h=i.id)==null?void 0:h.trim())||`q_${o}`,category:f,difficulty:p,prompt:String(i.question??"").trim(),options:l,answerIndex:c,explanation:String(i.explanation??"").trim()}}).filter(Boolean)}function ev(e,{categorySlug:t,difficulty:r,count:s}){console.log("=== BUILD SESSION DEBUG ==="),console.log("categorySlug:",t),console.log("difficulty:",r),console.log("count:",s),console.log("Total questions available:",e.length);const i=t==="mixed"?()=>!0:f=>Ma(f.category)===t,o=r?f=>(f.difficulty||"medium")===r:()=>!0,l=e.filter(f=>i(f)&&o(f));if(console.log("Filtered pool size:",l.length),console.log("Sample categories from all questions:",[...new Set(e.slice(0,10).map(f=>`"${f.category}" -> "${Ma(f.category)}"`))]),l.length===0)return console.error("No questions match the filter criteria!"),console.log("Available categories:",[...new Set(e.map(f=>Ma(f.category)))]),{questions:[],poolSize:0};const u=Kg(l,Math.min(s,l.length)).map(f=>{const p=Im([0,1,2,3]),h=p.map(v=>f.options[v]),b=p.indexOf(f.answerIndex);return{...f,options:h,answerIndex:b}});return console.log("Final questions:",u.length),{questions:u,poolSize:l.length}}function tv(){const e=Le(),{category:t}=Yp(),r=nt(),{energy:s,useEnergy:a,player:i,addCoins:o,addXP:l,updateDailyStreak:c}=kn(),u=new URLSearchParams(r.search),f=u.get("review")==="1",p=u.get("retake")==="1",h=r.state||{},b=h.mode||"quiz",v=String(h.difficulty||"medium").toLowerCase(),j=h.returnPath||null,C=h.fromQuest||!1,y=Jg(Number(h.count||10),1,50),m=h.timer||{type:"per_q",seconds:45};h.resume,h.daily,h.source;const x=p||!!h.retake,E=!!h.fromHistory,N=b==="practice";console.log("Quiz Component - Mode Detection:",{routerState:h,mode:b,isPractice:N,location:r.pathname,state:r.state});const[T,S]=d.useState([]),[g,w]=d.useState(!0),[k,P]=d.useState(""),[F,Y]=d.useState({questions:[]}),[ee,Q]=d.useState("quiz"),[U,B]=d.useState(null),[_,M]=d.useState(null),[q,D]=d.useState(0);d.useEffect(()=>{let O=!0;return(async()=>{try{const I=await Zg();if(!O)return;S(I)}catch(I){console.error(I),P("Failed to load questions. Check /public/data/quiz_questions_bank.csv")}finally{w(!1)}})(),()=>{O=!1}},[]),d.useEffect(()=>{if(g||k||f||T.length===0)return;console.log("=== SESSION INIT ==="),console.log("Category:",t),console.log("Mode:",b),console.log("Difficulty:",v),console.log("Count:",y);const O=ev(T,{categorySlug:t,difficulty:v,count:y});if(O.questions.length===0){console.error("No questions found!"),console.log("Looking for category:",t),console.log("Available categories (first 10):",[...new Set(T.map(I=>Ma(I.category)))].slice(0,10)),P(`No questions found for "${os(t)}" with difficulty "${v}"`);return}console.log("Session built with",O.questions.length,"questions"),Y(O),M(Date.now()),D(0),Q("quiz")},[T,t,b,v,y,r.state,r.search]),d.useEffect(()=>{if(ee!=="quiz"||!_)return;const O=setInterval(()=>{D(Date.now()-_)},1e3);return()=>clearInterval(O)},[ee,_]);const L=d.useCallback(O=>{if(console.log("Quiz completed - Mode:",b,"isPractice:",N,"Results:",O),!O||!O.questions){console.error("Invalid results object:",O);return}const I=O.questions.filter((z,$)=>O.answers[$]!==null&&O.answers[$]!==z.answerIndex).map(z=>z.id);try{const z=ls(Dd,[]),$=Array.from(new Set([...I,...z]));localStorage.setItem(Dd,JSON.stringify($))}catch(z){console.error("Error saving mistakes:",z)}try{const z=ls(Fd,{sessions:[]});z.sessions.push({cat:os(t),mode:N?"practice":"quiz",total:O.total,correct:O.correct,skipped:O.skipped.filter(Boolean).length,ms:q,timestamp:Date.now(),earnedXP:N?0:O.correct*10,earnedCoins:N?0:O.correct*5}),localStorage.setItem(Fd,JSON.stringify(z))}catch(z){console.error("Error saving stats:",z)}const W={ts:Date.now(),slug:t,categoryLabel:os(t),mode:N?"practice":"quiz",difficulty:v,total:O.total,timer:N?null:m,ms:q,attempted:O.answers.filter(z=>z!==null).length,correct:O.correct,questions:O.questions,answers:O.answers,skipped:O.skipped,isPractice:N};try{localStorage.setItem(Od,JSON.stringify(W)),localStorage.setItem(Bd,JSON.stringify({questions:O.questions,answers:O.answers,skipped:O.skipped}));const z=ls($d,[]),Z=[{id:W.ts,ts:W.ts,cat:W.categoryLabel,slug:t,mode:N?"Practice":"Quiz",total:O.total,correct:O.correct,ms:q,snapshot:W},...z].slice(0,Xg);localStorage.setItem($d,JSON.stringify(Z))}catch(z){console.error("Error saving snapshot:",z)}if(localStorage.removeItem(Vg),N&&O.earnedCoins?O.earnedCoins:!N&&O.correct>0&&O.correct*5,!N&&O.correct>0){const z=O.correct*10;l(z)}c(),console.log("Setting review snapshot with:",{returnPath:j||"/",fromQuest:C||!1}),B({...O,category:os(t),categorySlug:t,difficulty:v,mode:N?"practice":"quiz",elapsedMs:q,isPractice:N,hasTimer:!N,earnedXP:N?0:O.correct*10,earnedCoins:N?O.earnedCoins||0:O.correct*5,returnPath:j||"/",fromQuest:C||!1}),Q("results")},[t,b,m,q,N,j,C]),A=d.useCallback(()=>{j?e(j,{replace:!0}):E?e("/profile/history",{replace:!0,state:null}):e("/")},[E,e,j]),H=d.useCallback(()=>{console.log("Retake requested - Mode:",b,"isPractice:",N);const O=ls(Od,null);if(!O||O.slug!==t){e(`/quiz/${t}?r=${Date.now()}`,{replace:!0,state:{mode:N?"practice":"quiz",difficulty:v,count:y,timer:N?null:m,retake:!0}});return}const I=O.questions.map(W=>{const z=Im([0,1,2,3]);return{...W,options:z.map($=>W.options[$]),answerIndex:z.indexOf(W.answerIndex)}});Y({questions:I,poolSize:I.length}),M(Date.now()),D(0),Q("quiz"),window.scrollTo(0,0)},[t,b,v,y,m,e,N]),re=d.useCallback((O=null)=>{if(O)B(O);else if(!U){const I=ls(Bd,null);I&&B({questions:I.questions||[],answers:I.answers||[],skipped:I.skipped||[]})}Q("review")},[U]),J=d.useCallback(()=>{E?e("/profile/history",{replace:!0}):Q("results")},[E,e]);return g?n.jsx("div",{className:"fixed inset-0 bg-inherit text-white flex items-center justify-center",children:n.jsx("div",{className:"text-sm text-base-muted",children:"Loading questions…"})}):k?n.jsx("div",{className:"fixed inset-0 bg-inherit text-white flex items-center justify-center",children:n.jsx("div",{className:"text-sm text-red-400",children:k})}):(console.log("Render - Current view:",ee,"Session questions:",F.questions.length,"Mode:",b,"isPractice:",N),n.jsx("div",{className:"fixed inset-0 bg-inherit text-white z-0 overflow-x-hidden max-w-[100vw]",children:n.jsxs("div",{className:"h-full overflow-y-auto overscroll-y-none overflow-x-hidden touch-pan-y px-0 pt-[max(env(safe-area-inset-top),72px)] pb-[clamp(12px,env(safe-area-inset-bottom),20px)]",children:[ee==="quiz"&&F.questions.length>0&&n.jsx(Bg,{session:F,mode:N?"practice":"quiz",category:os(t),difficulty:v,timerConfig:N?null:m,onComplete:L,onQuit:A,isPractice:N}),ee==="results"&&U&&n.jsx(Hg,{results:U,onRetake:H,onReview:()=>re(U),isRetake:x,isPractice:N,player:i,categories:Tm,addCoins:o,onNavigate:(O,I)=>{console.log("onNavigate called with:",O,I),I!=null&&I.state?e(O,{state:I.state,replace:I.replace||!1}):e(O)}}),ee==="review"&&U&&n.jsx(Gg,{questions:U.questions||[],answers:U.answers||[],skipped:U.skipped||[],onBack:J,onRetake:H,fromHistory:E,isPractice:N})]})}))}const Tn=[{label:"General Knowledge",slug:"general-knowledge",color:"#7C3AED",soon:!1},{label:"Current Affairs",slug:"current-affairs",color:"#2563EB",soon:!1},{label:"Fun Facts",slug:"fun-facts",color:"#EF4444",soon:!1},{label:"Science",slug:"science",color:"#10B981",soon:!1},{label:"History",slug:"history",color:"#F59E0B",soon:!0},{label:"Geography",slug:"geography",color:"#FACC15",soon:!0},{label:"Cat 1",slug:"cat-1",color:"#06B6D4",soon:!0},{label:"Cat 2",slug:"cat-2",color:"#D946EF",soon:!0}],Xn=360/Tn.length,nv=42,so=3e3,Ud=10,qd=260,rv="cubic-bezier(.15,.7,.1,1)",sv="cubic-bezier(.2,.7,.2,1)",Pn=5,av=5,iv=(e="")=>String(e).toLowerCase().trim().replace(/[^\w\s-]/g,"").replace(/\s+/g,"-");function ov({muted:e=!1,size:t=18}){return n.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24","aria-hidden":"true",children:[n.jsx("path",{d:"M3 9h4l5-4v14l-5-4H3z",fill:"currentColor"}),!e&&n.jsxs(n.Fragment,{children:[n.jsx("path",{d:"M16 8c1.5 1.5 1.5 6 0 7.5",stroke:"currentColor",strokeWidth:"2",fill:"none",strokeLinecap:"round"}),n.jsx("path",{d:"M19 6c3 3 3 10 0 13",stroke:"currentColor",strokeWidth:"2",fill:"none",strokeLinecap:"round"})]}),e&&n.jsx("line",{x1:"3",y1:"21",x2:"21",y2:"3",stroke:"#EF4444",strokeWidth:"2.5",strokeLinecap:"round"})]})}function lv({q:e,locked:t,onPick:r,result:s}){if(!e)return null;const a=[e.option1,e.option2,e.option3,e.option4];return n.jsxs("div",{className:"mt-5 rounded-3xl bg-white/5 border border-white/10 p-4",children:[n.jsx("div",{className:"text-sm text-base-muted mb-1",children:"Quick question"}),n.jsx("div",{className:"text-xl font-semibold mb-4",children:e.question}),a.map((i,o)=>{const l=s&&i===e.answer,c=s&&s.pick===i&&i!==e.answer;return n.jsx("button",{disabled:t||!!s,onClick:()=>r(i),className:["w-full text-left px-4 py-2 rounded-xl mb-2 border transition",!s&&!t?"bg-white/5 hover:bg-white/10 border-white/10":"bg-white/5 border-white/10",l?"bg-green-600/20 border-green-400/60 text-green-200":"",c?"bg-red-600/20 border-red-400/60 text-red-200":""].join(" "),children:i},o)}),s&&n.jsxs("div",{className:"mt-3 text-sm",children:[s.correct?n.jsx("span",{className:"text-green-400 font-medium",children:"✅ Correct!"}):n.jsxs("span",{className:"text-red-400 font-medium",children:["❌ Not quite. Answer: ",n.jsx("b",{children:e.answer})]}),e.explanation&&n.jsxs("div",{className:"text-xs text-base-muted mt-1",children:["Tip: ",e.explanation]})]})]})}function cv(){const e=Le(),[t]=Ft("/sounds/correct.mp3",{volume:.7}),[r]=Ft("/sounds/wrong.mp3",{volume:.7}),[s,a]=d.useState(()=>[{name:"Player 1",color:"#60A5FA",scores:Array(Pn).fill(null)},{name:"Player 2",color:"#F472B6",scores:Array(Pn).fill(null)}]),[i,o]=d.useState(0),[l,c]=d.useState(1),u=s.reduce((I,W)=>I+W.scores.reduce((z,$)=>z+($??0),0),0),[f,p]=d.useState(!0),h=d.useRef(null);d.useEffect(()=>{const I=new Audio("/sounds/spin.mp3");return I.loop=!0,I.volume=.7,h.current=I,()=>{try{I.pause(),I.src=""}catch{}}},[]);const b=()=>{if(f&&h.current)try{h.current.currentTime=0,h.current.play()}catch{}},v=()=>{if(h.current)try{h.current.pause(),h.current.currentTime=0}catch{}},[j,C]=d.useState(0),[y,m]=d.useState("none"),[x,E]=d.useState(!1),[N,T]=d.useState(null),[S,g]=d.useState(null),w=d.useMemo(()=>typeof window<"u"?window.matchMedia("(prefers-reduced-motion: reduce)").matches:!1,[]),[k,P]=d.useState([]);d.useEffect(()=>{(async()=>{try{const I=await fetch("/data/quiz_questions_bank.csv").then(Z=>Z.text()),{data:W}=hr.parse(I,{header:!0,skipEmptyLines:!0,transformHeader:Z=>String(Z).trim().toLowerCase()}),z={a:0,b:1,c:2,d:3},$=W.map((Z,ie)=>{var G;const de=(Z.question??"").trim();if(!de)return null;const te=[Z.option1,Z.option2,Z.option3,Z.option4].map(ce=>String(ce??"").trim());if(te.some(ce=>!ce))return null;let ne=String(Z.answer??"").trim(),K=z[ne.toLowerCase()];if(K===void 0){const ce=te.findIndex(pe=>pe.toLowerCase()===ne.toLowerCase());K=ce>=0?ce:0}const R=te[K];return{id:((G=Z.id)==null?void 0:G.trim())||`ps_${ie}`,question:de,option1:te[0],option2:te[1],option3:te[2],option4:te[3],answer:R,explanation:String(Z.explanation??"").trim(),catSlug:iv(Z.category??Z.subject??"general knowledge"),difficulty:String(Z.difficulty??"medium").toLowerCase().trim()}}).filter(Boolean);P($)}catch{P([])}})()},[]);const[F,Y]=d.useState(null),[ee,Q]=d.useState(null),[U,B]=d.useState(!1),_=I=>(I%360+360)%360,M=I=>_(I),q=l>Pn;function D(){if(s.length>=4)return;const I=["#60A5FA","#F472B6","#F59E0B","#34D399","#F87171","#A78BFA"],W=I[(s.length*2+1)%I.length];a(z=>[...z,{name:`Player ${z.length+1}`,color:W,scores:Array(Pn).fill(null)}])}function L(){s.length<=2||(a(I=>I.slice(0,-1)),o(I=>Math.min(I,s.length-2)))}function A(I){a(W=>W.map((z,$)=>$===i?{...z,scores:z.scores.map((Z,ie)=>ie===l-1?I:Z)}:z))}function H(){if(x||q)return;T(null),g(null),Y(null),Q(null),E(!0),b();const I=Math.floor(Math.random()*Tn.length),W=Tn[I],z=Xn*.28,$=(Math.random()*2-1)*z,Z=_(j),ie=180,te=I*Xn+Xn/2+$;let ne=M(te-Z-ie);const K=nv*360+ne,R=j+K+Ud;m(`transform ${w?800:so}ms ${rv}`),C(R);try{navigator.vibrate&&!w&&navigator.vibrate([10,40,10])}catch{}setTimeout(()=>{m(`transform ${w?160:qd}ms ${sv}`),C(G=>G-Ud)},w?800:so),setTimeout(()=>{if(v(),E(!1),T(I),g(W.color),W.soon)return;const G=k.filter(pe=>pe.catSlug===W.slug&&pe.difficulty==="easy"),ce=G.length?G:k.filter(pe=>pe.catSlug===W.slug);if(ce.length){const pe=ce[Math.floor(Math.random()*ce.length)];Y(pe)}else Y({question:"No question found for this category yet. Try re-spinning!",option1:"Okay",option2:"Okay",option3:"Okay",option4:"Okay",answer:"Okay",explanation:""})},(w?800:so)+(w?160:qd)+40)}function re(I){if(!F||ee)return;const W=I===F.answer;if(Q({correct:W,pick:I}),W){t(),B(!0),setTimeout(()=>B(!1),900);try{navigator.vibrate&&navigator.vibrate([8,16])}catch{}A(av)}else{r();try{navigator.vibrate&&navigator.vibrate([4])}catch{}A(0)}}function J(){const I=(i+1)%s.length,W=I===0?l+1:l;o(I),c(W),T(null),g(null),Y(null),Q(null)}function O(){const I=s.map($=>$.scores.reduce((Z,ie)=>Z+(ie??0),0)),W=Math.max(...I),z=s.filter(($,Z)=>I[Z]===W).map($=>$.name).join(", ");alert(`${z} win${z.includes(",")?"":"s"} the pot of ${u} coins! 🎉`),e("/play")}return n.jsxs("div",{className:"min-h-screen bg-black text-white",children:[U&&n.jsx(_m,{numberOfPieces:120,recycle:!1}),n.jsxs("div",{className:"mx-auto max-w-md px-5 pt-[calc(env(safe-area-inset-top)+1.25rem)] pb-[calc(5.25rem+env(safe-area-inset-bottom))]",children:[n.jsxs("header",{className:"flex items-center justify-between mb-4",children:[n.jsx("button",{onClick:()=>e("/play"),className:"h-10 w-10 grid place-items-center rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition","aria-label":"Back",children:"←"}),n.jsxs("div",{className:"text-center",children:[n.jsx("h1",{className:"text-2xl font-bold",children:"Party Spin"}),n.jsx("p",{className:"text-sm text-base-muted",children:"Pass & play • Winner takes the pot"})]}),n.jsx("button",{onClick:()=>p(I=>!I),className:"h-10 w-10 grid place-items-center rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition","aria-label":f?"Mute sound":"Unmute sound",title:f?"Sound on":"Sound off",children:n.jsx(ov,{muted:!f})})]}),n.jsxs("section",{className:"rounded-2xl border border-white/10 bg-white/5 p-3 mb-4",children:[n.jsxs("div",{className:"flex items-center justify-between mb-2",children:[n.jsxs("div",{className:"text-sm",children:["Round ",n.jsx("b",{children:Math.min(l,Pn)}),"/",n.jsx("b",{children:Pn})]}),n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx("button",{onClick:D,className:"btn-ghost px-2 py-1 text-sm",children:"+"}),n.jsx("span",{className:"text-sm text-base-muted",children:"Player"}),n.jsx("button",{onClick:L,className:"btn-ghost px-2 py-1 text-sm",children:"−"})]}),n.jsxs("div",{className:"text-sm",children:["Pot: ",n.jsx("b",{className:"text-yellow-300",children:u})," 🪙"]})]}),n.jsx("div",{className:"overflow-x-auto",children:n.jsxs("table",{className:"w-full table-fixed text-sm tracking-tight tabular-nums",children:[n.jsxs("colgroup",{children:[n.jsx("col",{style:{width:"42%"}}),n.jsx("col",{style:{width:"9%"}}),n.jsx("col",{style:{width:"9%"}}),n.jsx("col",{style:{width:"9%"}}),n.jsx("col",{style:{width:"9%"}}),n.jsx("col",{style:{width:"9%"}}),n.jsx("col",{style:{width:"13%"}})]}),n.jsx("thead",{children:n.jsxs("tr",{className:"text-base-muted",children:[n.jsx("th",{className:"text-left font-medium py-1 pr-1",children:"Player"}),Array.from({length:Pn}).map((I,W)=>n.jsxs("th",{className:"font-medium text-center",children:["R",W+1]},W)),n.jsx("th",{className:"font-medium text-right pr-1",children:"Total"})]})}),n.jsx("tbody",{children:s.map((I,W)=>{const z=I.scores.reduce((Z,ie)=>Z+(ie??0),0),$=W===i;return n.jsxs("tr",{className:$?"bg-white/6":"",children:[n.jsx("td",{className:"py-1 pr-1",children:n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx("span",{className:"inline-block h-3 w-3 rounded-full shrink-0",style:{background:I.color}}),n.jsx("input",{className:"bg-transparent outline-none font-semibold w-full",value:I.name,onChange:Z=>a(ie=>ie.map((de,te)=>te===W?{...de,name:Z.target.value}:de))})]})}),I.scores.map((Z,ie)=>n.jsx("td",{className:"text-center",children:Z===null?"–":Z},ie)),n.jsx("td",{className:"text-right pr-1 font-semibold",children:z})]},W)})})]})})]}),n.jsx("section",{className:"flex flex-col items-center",children:n.jsxs("div",{className:"relative w-[320px] h-[320px] md:w-[380px] md:h-[380px] rounded-full select-none",children:[S&&n.jsx("div",{className:"pointer-events-none absolute -inset-2 rounded-full",style:{boxShadow:`0 0 0 6px ${S}33, 0 0 30px 8px ${S}44`}}),n.jsx("div",{className:"absolute inset-0 rounded-full border border-white/10 shadow-2xl bg-black/20 overflow-hidden will-change-transform",style:{transform:`rotate(${j}deg)`,transition:y},"aria-label":"Category wheel",role:"group",children:n.jsxs("svg",{width:"100%",height:"100%",viewBox:"0 0 100 100",className:"block",children:[Tn.map((I,W)=>{const z=W*Xn,$=z+Xn,Z=Xn>180?1:0,ie=Math.PI*z/180,de=Math.PI*$/180,te=50+50*Math.cos(ie),ne=50-50*Math.sin(ie),K=50+50*Math.cos(de),R=50-50*Math.sin(de),G=N===W;return n.jsxs("g",{style:{opacity:N==null?.95:G?1:.78,filter:N!=null&&!G?"blur(0.6px)":"none"},children:[n.jsx("path",{d:`M50,50 L${te},${ne} A50,50 0 ${Z} 0 ${K},${R} Z`,fill:I.color,stroke:G?`${I.color}AA`:"rgba(255,255,255,0.14)",strokeWidth:G?"1.2":"0.6"}),n.jsx("text",{x:"50",y:"50",fill:"#ffffff",fontSize:"4",fontWeight:"700",dominantBaseline:"middle",transform:`rotate(${z+Xn/2} 50 50) translate(12 0)`,children:n.jsxs("tspan",{children:[I.label,I.soon?" (soon)":""]})})]},I.slug)}),n.jsx("circle",{cx:"50",cy:"50",r:"9",fill:"rgba(0,0,0,0.55)",stroke:"white",strokeOpacity:"0.25"})]})}),n.jsx("button",{onClick:H,disabled:x||q,className:["absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2","h-16 w-16 rounded-full grid place-items-center","bg-white text-black font-extrabold shadow-soft transition active:scale-[0.98]",x||q?"opacity-60 cursor-not-allowed":"hover:bg-gray-200"].join(" "),"aria-label":"Spin the wheel",children:"SPIN"}),n.jsx("div",{className:"absolute left-1/2 -translate-x-1/2 -bottom-3 z-20",children:n.jsx("svg",{width:"22",height:"22",viewBox:"0 0 24 24",children:n.jsx("path",{d:"M12 4 L20 20 L4 20 Z",fill:"#ffffff"})})}),N!=null&&!x&&n.jsx("div",{className:"absolute left-1/2 -translate-x-1/2 -bottom-10",children:n.jsxs("div",{className:"px-3 py-1 rounded-full bg-white/10 border border-white/20 text-sm backdrop-blur",children:[n.jsx("span",{className:"inline-block h-2.5 w-2.5 rounded-full mr-2 align-middle",style:{background:Tn[N].color}}),Tn[N].label]})})]})}),n.jsx("section",{className:"mt-4",children:q?n.jsxs("div",{className:"rounded-2xl border border-white/10 bg-white/5 p-4",children:[n.jsx("div",{className:"text-xl font-semibold mb-2",children:"Match Over"}),n.jsxs("p",{className:"text-sm text-base-muted mb-3",children:["Top score takes the pot of ",n.jsx("b",{className:"text-yellow-300",children:u})," coins."]}),n.jsx("button",{className:"btn-primary w-full",onClick:O,children:"End match"})]}):N!=null&&Tn[N].soon?n.jsxs("div",{className:"rounded-2xl border border-white/10 bg-white/5 p-4",children:[n.jsx("div",{className:"text-lg font-semibold mb-1",children:Tn[N].label}),n.jsx("p",{className:"text-sm text-base-muted mb-3",children:"This category is arriving soon. Spin again!"}),n.jsx("button",{className:"btn-primary",onClick:H,disabled:x,children:"Re-spin"})]}):n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:"text-sm text-center text-base-muted mb-1",children:["Turn: ",n.jsx("span",{style:{color:s[i].color},children:s[i].name})," ","| Round ",l,"/",Pn]}),n.jsx(lv,{q:F,locked:x||!F,onPick:re,result:ee}),ee&&n.jsx("div",{className:"mt-3 flex justify-center",children:n.jsx("button",{className:"btn-primary",onClick:J,children:"Next turn"})})]})})]}),n.jsx("div",{className:"pointer-events-none fixed inset-x-0 bottom-0 bg-[#0B0F1A]",style:{height:"calc(5.25rem + env(safe-area-inset-bottom))"},"aria-hidden":!0})]})}const dv=({onSelect:e})=>{const t=[{id:"random",emoji:"🎲",title:"Random Mix",color:"from-purple-500 to-pink-500"},{id:"trending",emoji:"📈",title:"Trending Now",color:"from-blue-500 to-cyan-500"},{id:"level",emoji:"📊",title:"Your Level",color:"from-green-500 to-teal-500"},{id:"daily",emoji:"🎯",title:"Daily Challenge",color:"from-orange-500 to-red-500"}];return n.jsxs("div",{className:"fixed inset-0 bg-gray-900 overflow-hidden flex flex-col justify-center items-center px-4",children:[n.jsx("h1",{className:"text-2xl font-bold text-white mb-20",children:"Choose a swipe mode"}),n.jsx("div",{className:"grid grid-cols-2 gap-4 w-full max-w-md h-[55vh]",children:t.map(r=>n.jsxs("button",{onClick:()=>e(r.id,r.title),className:`rounded-3xl bg-gradient-to-br ${r.color} p-6 flex flex-col items-center justify-center gap-3 transform hover:scale-105 transition-all shadow-xl`,children:[n.jsx("span",{className:"text-5xl",children:r.emoji}),n.jsx("span",{className:"text-white font-bold text-lg text-center",children:r.title})]},r.id))})]})},uv=()=>{Le();const{player:e,addCoins:t,addXP:r}=kn(),[s,a]=d.useState([]),[i,o]=d.useState(0),[l,c]=d.useState({}),[u,f]=d.useState(0),[p,h]=d.useState(5),[b,v]=d.useState(0),[j,C]=d.useState(!0),[y,m]=d.useState(null),[x,E]=d.useState(!0),[N,T]=d.useState(null),[S,g]=d.useState(""),[w,k]=d.useState(!1),[P,F]=d.useState(""),[Y,ee]=d.useState(!1),[Q,U]=d.useState(!1),[B,_]=d.useState(!1),[M,q]=d.useState(!1),[D,L]=d.useState(!1),[A,H]=d.useState(!1),[re,J]=d.useState(0),[O,I]=d.useState(0),[W,z]=d.useState(-1),[$,Z]=d.useState(-1),[ie,de]=d.useState({}),[te,ne]=d.useState({}),K=d.useRef(null),R=d.useRef(null),[G]=Ft("/sounds/correct.mp3",{volume:.6}),[ce]=Ft("/sounds/wrong.mp3",{volume:.6}),[pe]=Ft("/sounds/coin.mp3",{volume:.75}),me=["🐼","🐱","🐶","🦊","🐰","🐨","🐯","🦁","🐸","🐵"],$e=()=>{a([]),o(0),c({}),f(0),h(5),v(0),C(!0),m(null),k(!1),F(""),ee(!1),U(!1),_(!1),q(!1),L(!1),H(!1),J(0),I(0),z(-1),Z(-1),de({}),ne({}),T(null),g(""),ke(null)};d.useEffect(()=>($e(),E(!0),()=>{document.body.classList.remove("hide-bottom-nav"),$e(),R.current&&clearTimeout(R.current)}),[]),d.useEffect(()=>{const X=oe=>{!x&&s.length>0&&(oe.preventDefault(),U(!0))};return!x&&s.length>0&&window.history.pushState({inQuiz:!0},"",window.location.pathname),window.addEventListener("popstate",X),()=>window.removeEventListener("popstate",X)},[x,s.length]),d.useEffect(()=>{!x&&s.length>0?document.body.classList.add("hide-bottom-nav"):document.body.classList.remove("hide-bottom-nav")},[x,s.length]),d.useEffect(()=>{!x&&s.length>0&&q(!0)},[x,s.length]);const[he,ke]=d.useState(null);d.useEffect(()=>{const X=oe=>{var _e;if(M&&!B){const Ce=oe.target.closest('button[type="button"]'),Ge=(_e=Ce==null?void 0:Ce.querySelector(".text-\\[10px\\]"))==null?void 0:_e.textContent;Ge&&["Home","Play","Profile","Swipe"].includes(Ge)&&(oe.preventDefault(),oe.stopPropagation(),ke({Home:"/",Play:"/play",Profile:"/profile",Swipe:"/swipe"}[Ge]),U(!0))}};return document.addEventListener("click",X,!0),()=>document.removeEventListener("click",X,!0)},[M,B]),d.useEffect(()=>{const X=K.current;if(!X)return;let oe=!1,_e=0,Ce=null;const Ge=le=>{!x&&s.length>0&&le.preventDefault()},we=le=>{_e=le.touches[0].clientY,oe=!1},pt=le=>{!x&&s.length>0&&!Q&&!Y&&le.preventDefault()},se=le=>{if(oe||Q||Y)return;const Ie=le.changedTouches[0].clientY,Pe=_e-Ie;if(Math.abs(Pe)>30){if(oe=!0,Ce&&clearTimeout(Ce),Pe>0&&i<s.length-1){const ge=i+1;o(ge),X.scrollTo({top:ge*window.innerHeight,behavior:"smooth"})}else if(Pe<0&&i>0){const ge=i-1;o(ge),X.scrollTo({top:ge*window.innerHeight,behavior:"smooth"})}Ce=setTimeout(()=>{oe=!1},800)}};return X.addEventListener("touchstart",we,{passive:!1}),X.addEventListener("touchmove",pt,{passive:!1}),X.addEventListener("touchend",se,{passive:!1}),X.addEventListener("wheel",Ge,{passive:!1}),()=>{X.removeEventListener("touchstart",we),X.removeEventListener("touchmove",pt),X.removeEventListener("touchend",se),X.removeEventListener("wheel",Ge),Ce&&clearTimeout(Ce)}},[i,s.length,x]),d.useEffect(()=>{const X=K.current;X&&(Q||Y?(X.style.overflow="hidden",X.style.touchAction="none"):(X.style.overflow="auto",X.style.touchAction="auto"))},[Q,Y]),d.useEffect(()=>{(Q||Y)&&R.current&&(clearTimeout(R.current),R.current=null)},[Q,Y]);const ve=async X=>{try{const _e=await(await fetch("/data/quiz_questions_bank.csv")).text(),{data:Ce}=hr.parse(_e,{header:!0,skipEmptyLines:!0}),pt=Ce.map((se,le)=>{var ge,Xe;const Ie=[se.option1,se.option2,se.option3,se.option4].filter(Boolean),Pe={A:0,B:1,C:2,D:3};return{id:se.id||`q_${le}`,prompt:se.question,options:Ie,answerIndex:Pe[(ge=se.answer)==null?void 0:ge.toUpperCase()]||0,category:se.category||"General Knowledge",difficulty:((Xe=se.difficulty)==null?void 0:Xe.toLowerCase())||"medium",explanation:se.explanation||"",stats:{views:Math.floor(Math.random()*1e4)+1e3,attempted:Math.floor(Math.random()*5e3)+500,correctRate:Math.floor(Math.random()*40)+30}}}).filter(se=>se.prompt&&se.options.length===4).sort(()=>Math.random()-.5).slice(0,50).map(se=>({...se,mascot:me[Math.floor(Math.random()*me.length)]}));a(pt),C(!1)}catch(oe){console.error("Failed to load questions:",oe),C(!1)}},xe=X=>X===1||X===3||X===7||X===10||X===15||X===20||X>20&&X%5===0,ye=(X,oe)=>{if(l[X]!==void 0)return;const _e=s.find(we=>we.id===X),Ce=oe===_e.answerIndex,Ge=s.findIndex(we=>we.id===X);if(c(we=>({...we,[X]:oe})),J(we=>we+1),I(we=>we+1),Ce){if(G(),f(we=>we+1),v(we=>we+10),H(!0),setTimeout(()=>{pe()},300),setTimeout(()=>H(!1),2e3),ht(),xe(Ge+1)){const we=["Awesome!","Perfect!","Brilliant!","Outstanding!","Incredible!"];F(we[Math.floor(Math.random()*we.length)]),k(!0),setTimeout(()=>k(!1),2e3)}}else if(ce(),f(0),L(!0),setTimeout(()=>L(!1),1500),h(we=>{const pt=Math.max(0,we-1);return pt===0&&setTimeout(()=>ee(!0),500),pt}),p>1&&xe(Ge+1)){const we=["Keep trying!","You got this!","Don't give up!","Stay strong!","Keep going!"];F(we[Math.floor(Math.random()*we.length)]),k(!0),setTimeout(()=>k(!1),2e3)}(p>1||Ce)&&(R.current=setTimeout(()=>{Qt()},2500))},ht=()=>{const X=document.createElement("div");X.style.position="fixed",X.style.inset="0",X.style.pointerEvents="none",X.style.zIndex="1000",document.body.appendChild(X);const oe=["🎉","✨","⭐","🎊","🌟"];for(let _e=0;_e<20;_e++){const Ce=document.createElement("div");Ce.textContent=oe[Math.floor(Math.random()*oe.length)],Ce.style.position="fixed",Ce.style.left=`${Math.random()*100}%`,Ce.style.top="-50px",Ce.style.fontSize="24px",Ce.style.animation=`fall ${2+Math.random()*2}s ease-out`,X.appendChild(Ce)}setTimeout(()=>X.remove(),4e3)},Qt=()=>{if(!(Q||Y)&&i<s.length-1){const X=i+1,oe=document.getElementById(`question-${X}`);oe==null||oe.scrollIntoView({behavior:"smooth"}),o(X)}},at=X=>{const oe=s.findIndex(we=>we.id===X);if(W>=0&&re<5){m(`After ${5-re} attempts`),setTimeout(()=>m(null),2e3);return}const _e=s[oe],Ge=[0,1,2,3].filter(we=>we!==_e.answerIndex).sort(()=>Math.random()-.5).slice(0,2);de({...ie,[X]:Ge}),z(oe),J(0)},Ne=X=>{const oe=s.findIndex(le=>le.id===X);if($>=0&&O<5){m(`After ${5-O} attempts`),setTimeout(()=>m(null),2e3);return}const Ce=s[oe].answerIndex,Ge=[0,0,0,0],we=40+Math.floor(Math.random()*31);Ge[Ce]=we;let pt=100-we;const se=[0,1,2,3].filter(le=>le!==Ce);for(let le=0;le<se.length-1;le++){const Ie=Math.floor(Math.random()*(pt/2));Ge[se[le]]=Ie,pt-=Ie}Ge[se[se.length-1]]=pt,ne({...te,[X]:Ge}),Z(oe),I(0)},ze=(X,oe)=>{$e(),T(X),g(oe),E(!1),ve()},At=()=>{ke("/swipe"),U(!0)},pr=()=>{_(!0),U(!1),document.body.classList.remove("hide-bottom-nav")},We=()=>{const X=Object.keys(l).filter(oe=>{const _e=s.find(Ce=>Ce.id===oe);return l[oe]===(_e==null?void 0:_e.answerIndex)}).length;return d.useEffect(()=>{document.body.classList.add("hide-bottom-nav");const oe=setTimeout(()=>{t(b),$e(),q(!1),_(!1),E(!0),document.body.classList.remove("hide-bottom-nav")},2e3);return()=>{clearTimeout(oe),document.body.classList.remove("hide-bottom-nav")}},[]),n.jsx("div",{className:"fixed inset-0 bg-gray-900 z-50 flex items-center justify-center p-4",children:n.jsxs("div",{className:"bg-gray-800 rounded-3xl p-8 max-w-md w-full text-center border border-gray-700",children:[n.jsx("div",{className:"text-5xl mb-4",children:"🎉"}),n.jsx("h2",{className:"text-2xl font-bold text-white mb-4",children:"Session Complete!"}),n.jsxs("div",{className:"space-y-4",children:[n.jsxs("div",{className:"bg-gray-700/50 rounded-xl p-4",children:[n.jsx("div",{className:"text-gray-400 text-sm mb-1",children:"Questions Answered"}),n.jsx("div",{className:"text-2xl font-bold text-white",children:Object.keys(l).length})]}),n.jsxs("div",{className:"bg-gray-700/50 rounded-xl p-4",children:[n.jsx("div",{className:"text-gray-400 text-sm mb-1",children:"Correct Answers"}),n.jsx("div",{className:"text-2xl font-bold text-green-400",children:X})]}),n.jsxs("div",{className:"bg-gray-700/50 rounded-xl p-4",children:[n.jsx("div",{className:"text-gray-400 text-sm mb-1",children:"Coins Earned"}),n.jsxs("div",{className:"text-2xl font-bold text-yellow-400",children:["🪙 ",b]})]}),n.jsxs("div",{className:"bg-gray-700/50 rounded-xl p-4",children:[n.jsx("div",{className:"text-gray-400 text-sm mb-1",children:"Lives Remaining"}),n.jsx("div",{className:"text-2xl font-bold text-red-400",children:Array.from({length:5},(oe,_e)=>n.jsx("span",{className:_e<p?"":"opacity-30",children:"❤️"},_e))})]})]})]})})};return B?n.jsx(We,{}):x?n.jsx(dv,{onSelect:ze}):j?n.jsx("div",{className:"h-screen bg-gray-900 flex items-center justify-center",children:n.jsx("div",{className:"text-white",children:"Loading questions..."})}):n.jsxs("div",{className:"h-screen bg-gray-900 relative",children:[n.jsxs("div",{className:"fixed top-0 left-0 right-0 bg-gray-900/95 backdrop-blur z-50 border-b border-gray-800 pt-12",children:[n.jsxs("div",{className:"flex items-center justify-between px-4 py-3",children:[n.jsx("button",{onClick:At,className:"inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/15 rounded-xl text-white text-sm font-medium hover:bg-white/15 transition-all",children:"← Back"}),n.jsxs("div",{className:"flex items-center gap-4",children:[n.jsxs("div",{className:"flex items-center gap-1 bg-yellow-500/20 px-3 py-1 rounded-full",children:[n.jsx("span",{children:"🪙"}),n.jsx("span",{className:"font-bold text-yellow-400",children:b})]}),n.jsxs("div",{className:"flex items-center gap-1 bg-orange-500/20 px-3 py-1 rounded-full",children:[n.jsx("span",{children:"🔥"}),n.jsx("span",{className:"font-bold text-orange-400",children:u})]})]}),n.jsx("div",{className:"flex items-center gap-1",children:Array.from({length:5},(X,oe)=>n.jsx("span",{className:`${oe<p?"text-red-500":"text-gray-600 opacity-30"} ${D&&oe===p-1?"animate-heartLoss":""}`,children:"❤️"},oe))})]}),S&&n.jsx("div",{className:"text-center py-1",children:n.jsx("span",{className:"text-xs text-gray-400",children:S})})]}),A&&n.jsx("div",{className:"fixed top-24 left-1/2 transform -translate-x-1/2 z-50 pointer-events-none",children:n.jsx("div",{className:"bg-yellow-500 text-white px-4 py-2 rounded-full font-bold animate-coinFloat",children:"+10 🪙"})}),n.jsx("div",{ref:K,className:"h-full overflow-y-hidden snap-y snap-mandatory pt-32",style:{scrollBehavior:"smooth",overscrollBehavior:"none",WebkitOverflowScrolling:"touch",touchAction:"none"},children:s.map((X,oe)=>n.jsx(fv,{question:X,index:oe,answered:l[X.id],onAnswer:_e=>ye(X.id,_e),onFiftyFifty:()=>at(X.id),onAudience:()=>Ne(X.id),eliminated:ie[X.id]||[],audiencePercentages:te[X.id],canUseFiftyFifty:W<0||re>=5,canUseAudience:$<0||O>=5},X.id))}),Y&&n.jsx("div",{className:"fixed inset-0 bg-black/75 flex items-center justify-center z-50 p-4",children:n.jsxs("div",{className:"bg-gray-800 rounded-3xl p-6 max-w-sm w-full text-center border border-gray-700",children:[n.jsx("div",{className:"text-5xl mb-4",children:"😔"}),n.jsx("h3",{className:"text-xl font-bold mb-2 text-white",children:"No Lives Left!"}),n.jsx("p",{className:"text-gray-400 mb-6",children:"Sorry, you have no lives left to continue swiping."}),n.jsx("button",{onClick:()=>{_(!0),document.body.classList.remove("hide-bottom-nav")},className:"w-full bg-gradient-to-r from-blue-600 to-purple-600 py-3 rounded-xl text-white font-medium",children:"View Results"})]})}),Q&&n.jsx("div",{className:"fixed inset-0 bg-black/75 flex items-center justify-center z-50 p-4",children:n.jsxs("div",{className:"bg-gray-800 rounded-3xl p-6 max-w-sm w-full text-center border border-gray-700",children:[n.jsx("div",{className:"text-4xl mb-4",children:"🤔"}),n.jsx("h3",{className:"text-xl font-bold mb-2 text-white",children:"Leave Swipe Mode?"}),n.jsx("p",{className:"text-gray-400 mb-6",children:"Your progress will be saved"}),n.jsxs("div",{className:"flex gap-3",children:[n.jsx("button",{onClick:()=>U(!1),className:"flex-1 bg-blue-600 hover:bg-blue-700 py-3 rounded-xl font-medium text-white",children:"Stay"}),n.jsx("button",{onClick:pr,className:"flex-1 bg-gray-700 hover:bg-gray-600 py-3 rounded-xl font-medium text-white",children:"Leave"})]})]})}),w&&n.jsx("div",{className:"fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50",children:n.jsx("div",{className:"bg-gradient-to-br from-purple-600 to-pink-600 px-8 py-6 rounded-3xl text-white font-bold text-2xl shadow-2xl animate-fadeIn",children:P})}),y&&n.jsx("div",{className:"fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 pointer-events-none",children:n.jsx("div",{className:"bg-gray-800/90 px-6 py-3 rounded-full text-white font-bold animate-fadeIn",children:y})}),n.jsx("style",{jsx:!0,children:`
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
      `})]})},fv=({question:e,index:t,answered:r,onAnswer:s,onFiftyFifty:a,onAudience:i,eliminated:o,audiencePercentages:l,canUseFiftyFifty:c,canUseAudience:u})=>{const f=p=>{switch(p){case"easy":return"from-green-500 to-green-600";case"hard":return"from-red-500 to-red-600";default:return"from-yellow-500 to-yellow-600"}};return n.jsxs("div",{id:`question-${t}`,className:"h-screen snap-start flex flex-col px-4 pb-4",style:{paddingTop:"150px"},children:[n.jsx("div",{className:"flex justify-center py-2",children:n.jsx("span",{className:"text-8xl",style:{animation:"float 3s ease-in-out infinite"},children:e.mascot})}),n.jsxs("div",{className:"flex-1 flex flex-col justify-start max-w-md mx-auto w-full",children:[n.jsxs("div",{className:`bg-gradient-to-br ${f(e.difficulty)} p-6 rounded-3xl mb-4`,children:[n.jsxs("div",{className:"text-white/80 text-sm mb-2",children:["Question ",t+1]}),n.jsx("h2",{className:"text-2xl font-bold text-white",children:e.prompt})]}),n.jsx("div",{className:"space-y-3 mb-3",children:e.options.map((p,h)=>{const b=r!==void 0,v=r===h,j=h===e.answerIndex,C=o.includes(h);let y="w-full p-4 rounded-2xl font-medium transition-all ";return C?y+="bg-gray-700/30 text-gray-500/50 cursor-not-allowed":b?j?y+="bg-green-500 text-white":v?y+="bg-red-500 text-white":y+="bg-gray-700 text-gray-400":y+="bg-gray-800 text-white hover:bg-gray-700",n.jsx("button",{onClick:()=>!b&&!C&&s(h),disabled:b||C,className:y,children:n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsx("span",{className:"text-lg",children:["🅰️","🅱️","🅲️","🅳️"][h]}),n.jsx("span",{className:"flex-1 text-left",children:p}),l&&l[h]>0&&n.jsxs("span",{className:"bg-purple-600/20 px-2 py-1 rounded-full text-xs",children:[l[h],"%"]}),b&&j&&n.jsx("span",{children:"✓"})]})},h)})}),!r&&n.jsxs("div",{className:"flex justify-center gap-3 mb-3",children:[n.jsx("button",{onClick:a,disabled:!c,className:`px-4 py-2 rounded-lg font-medium text-sm ${c?"bg-orange-600 text-white":"bg-gray-700 text-gray-500"}`,children:"⚡ 50:50"}),n.jsx("button",{onClick:i,disabled:!u,className:`px-4 py-2 rounded-lg font-medium text-sm ${u?"bg-purple-600 text-white":"bg-gray-700 text-gray-500"}`,children:"👥 Audience"})]}),n.jsx("div",{className:"text-center mt-3 mb-2",children:n.jsxs("div",{className:"text-gray-500 text-xs",children:[e.stats.views.toLocaleString()," views • ",e.stats.attempted.toLocaleString()," attempted • ",e.stats.correctRate,"% correct"]})}),n.jsx("div",{className:"text-center mt-12 mb-4",children:n.jsx("div",{className:"text-gray-500 text-sm animate-bounce",children:"Swipe up for next"})})]})]})};function mv(){const[e]=Sm(),t=Le();return nt(),d.useEffect(()=>{const r=e.get("category"),s=e.get("difficulty"),a=e.get("from")==="quest",i=["general-knowledge","fun-facts","science","history","geography","computer","artificial-intelligence","sports","mixed"],o=["easy","medium","hard"],l=r==="random"?i[Math.floor(Math.random()*i.length)]:r||"mixed",c=s==="random"?o[Math.floor(Math.random()*o.length)]:s||"medium";console.log("QuizPlay - fromQuest:",a),console.log("QuizPlay - returnPath will be:",a?"/quests":"/"),t(`/quiz/${l}`,{replace:!0,state:{mode:"quiz",difficulty:c,count:5,timer:{type:"per_q",seconds:45},fromQuest:a,returnPath:a?"/profile/quests":"/"}})},[e,t]),n.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh",background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",color:"white",fontSize:"20px"},children:"Starting your quiz..."})}function hv(){const[e]=Sm(),t=Le();return d.useEffect(()=>{const r=e.get("questions")||"15",s=e.get("difficulty")||"easy",a=e.get("category")||"mixed",i=e.get("from")==="quest",o=["general-knowledge","fun-facts","science","history","geography","computer","artificial-intelligence","sports"],l=a==="random"?o[Math.floor(Math.random()*o.length)]:a;console.log("PracticeStart - Launching practice mode:",{category:l,difficulty:s,questions:r,fromQuest:i}),t(`/quiz/${l}`,{replace:!0,state:{mode:"practice",difficulty:s,count:parseInt(r),timer:{type:"off",seconds:0},fromQuest:i,questType:i?"practiceQuestions":null,returnPath:i?"/profile/quests":"/"}})},[e,t]),n.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh",background:"linear-gradient(135deg, #10B981 0%, #059669 100%)",color:"white",fontSize:"20px"},children:"Loading practice questions..."})}function pv(){const e=Le(),[t,r]=d.useState(""),{player:s,levelProgress:a}=kn(),i=()=>{try{const u=JSON.parse(localStorage.getItem("qp_stats")||'{"sessions":[]}'),f=new Date().setHours(0,0,0,0);return u.sessions.filter(h=>new Date(h.timestamp).setHours(0,0,0,0)===f).reduce((h,b)=>h+(b.earnedCoins||0),0)}catch{return 0}},o={name:(s==null?void 0:s.name)||"Player",rank:23,streak:(s==null?void 0:s.currentStreak)||0,todayQuizzes:3,todayCoins:i()};d.useEffect(()=>{const u=new Date().getHours();u<12?r("Good morning"):u<17?r("Good afternoon"):r("Good evening")},[]);const l=`
    rounded-3xl p-5 text-left text-white 
    transition-all duration-300 ease-out
    active:scale-[0.97] hover:scale-[1.02]
    shadow-[0_8px_32px_rgba(0,0,0,0.3)]
    hover:shadow-[0_12px_48px_rgba(0,0,0,0.4)]
    relative overflow-hidden
    before:absolute before:inset-0 before:bg-white/5 before:opacity-0 
    hover:before:opacity-100 before:transition-opacity before:duration-300
  `,c=a.required>0?a.current/a.required*100:0;return n.jsxs("div",{className:"min-h-full bg-[#0B0C10] text-white pt-10 px-3",children:[n.jsxs("div",{className:"mb-6",children:[n.jsxs("div",{className:"flex items-center justify-between mb-4",children:[n.jsx("div",{children:n.jsxs("h1",{className:"text-2xl font-bold px-3",children:[t,", ",(s==null?void 0:s.name)||"Player"," 👋"]})}),n.jsx("button",{onClick:()=>e("/profile/settings"),className:"w-10 h-10 rounded-2xl bg-white/10 border border-white/20 grid place-items-center hover:bg-white/20 transition",children:n.jsx("span",{className:"text-xl",children:"⚙️"})})]}),n.jsxs("div",{className:"rounded-3xl bg-gradient-to-r from-slate-800/50 to-slate-900/50 border border-white/10 p-4 backdrop-blur-sm",children:[n.jsxs("div",{className:"flex items-center gap-4 mb-3",children:[n.jsx("div",{className:"w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 grid place-items-center text-2xl font-bold",children:o.name[0]}),n.jsxs("div",{className:"flex-1",children:[n.jsx("div",{className:"text-lg font-semibold",children:s.name||"Player"}),n.jsxs("div",{className:"text-white/60 text-sm",children:["Level ",s.level]})]}),n.jsxs("div",{className:"text-right",children:[n.jsxs("div",{className:"text-yellow-400 font-bold text-lg",children:[s.coins," 🪙"]}),n.jsxs("div",{className:"text-white/60 text-sm",children:["Rank #",o.rank]})]})]}),n.jsxs("div",{className:"mb-3",children:[n.jsxs("div",{className:"flex justify-between text-xs text-white/60 mb-1",children:[n.jsx("span",{children:"XP Progress"}),n.jsxs("span",{children:[a.current,"/",a.required]})]}),n.jsx("div",{className:"h-2 bg-white/10 rounded-full overflow-hidden",children:n.jsx("div",{className:"h-full bg-gradient-to-r from-blue-400 to-purple-500 rounded-full transition-all duration-1000 ease-out",style:{width:`${c}%`}})})]}),n.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[n.jsxs("div",{className:"text-center p-2 rounded-xl bg-white/5",children:[n.jsxs("div",{className:"text-orange-400 font-bold text-lg",children:["🔥 ",o.streak]}),n.jsx("div",{className:"text-white/60 text-xs",children:"Day Streak"})]}),n.jsxs("div",{className:"text-center p-2 rounded-xl bg-white/5",children:[n.jsxs("div",{className:"text-green-400 font-bold text-lg",children:["+",o.todayCoins]}),n.jsx("div",{className:"text-white/60 text-xs",children:"Today"})]})]})]})]}),n.jsxs("button",{onClick:()=>e("/profile/leaderboard"),className:`${l} w-full mb-4 bg-gradient-to-br from-[#5AA9FF] via-[#6C63FF] to-[#9C6BFF]`,children:[n.jsx("div",{className:"absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-8 translate-x-8 animate-pulse"}),n.jsxs("div",{className:"relative flex items-start justify-between",children:[n.jsxs("div",{children:[n.jsx("div",{className:"text-xs opacity-90 mb-1",children:"🏆 Rank & Coins"}),n.jsx("div",{className:"text-3xl font-extrabold tracking-tight mb-2",children:"LEADERBOARD"}),n.jsxs("div",{className:"text-xs opacity-75 flex items-center gap-2",children:[n.jsx("span",{className:"w-2 h-2 bg-green-400 rounded-full animate-pulse"}),"Weekly reset · Ends in 2d 14h"]})]}),n.jsx("div",{className:"w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm grid place-items-center text-2xl border border-white/30",children:"🏆"})]})]}),n.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[n.jsxs("button",{onClick:()=>e("/profile/history"),className:`${l} bg-gradient-to-br from-[#D19A00] to-[#C94B4B] relative`,children:[n.jsx("div",{className:"absolute top-2 right-2 w-3 h-3 bg-white/20 rounded-full"}),n.jsx("div",{className:"text-3xl mb-3",children:"📊"}),n.jsx("div",{className:"text-sm font-bold mb-1",children:"HISTORY"}),n.jsx("div",{className:"text-[11px] opacity-80",children:"Quizzes & Practice"}),n.jsxs("div",{className:"text-[10px] opacity-60 mt-1",children:["+",o.todayQuizzes," today"]})]}),n.jsxs("button",{onClick:()=>e("/profile/rewards"),className:`${l} bg-gradient-to-br from-[#2EB872] to-[#1EA07A] relative`,children:[n.jsx("div",{className:"absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full animate-bounce"}),n.jsx("div",{className:"text-3xl mb-3",children:"🎁"}),n.jsx("div",{className:"text-sm font-bold mb-1",children:"REWARDS"}),n.jsx("div",{className:"text-[11px] opacity-80",children:"Claim & Redeem"}),n.jsx("div",{className:"text-[10px] opacity-60 mt-1",children:"2 available"})]}),n.jsxs("button",{onClick:()=>e("/profile/badges"),className:`${l} bg-gradient-to-br from-[#E65C00] to-[#F9D423] relative`,children:[n.jsx("div",{className:"absolute -top-1 -right-1 w-6 h-6 bg-purple-600 rounded-full grid place-items-center text-[10px] font-bold animate-pulse",children:"NEW"}),n.jsx("div",{className:"text-3xl mb-3",children:"🏅"}),n.jsx("div",{className:"text-sm font-bold mb-1",children:"BADGES"}),n.jsx("div",{className:"text-[11px] opacity-80",children:"Collectables"}),n.jsx("div",{className:"text-[10px] opacity-60 mt-1",children:"4/15 unlocked"})]}),n.jsxs("button",{onClick:()=>e("/profile/achievements"),className:`${l} bg-gradient-to-br from-[#5D26C1] to-[#A17FE0] relative`,children:[n.jsx("div",{className:"text-3xl mb-3",children:"🎯"}),n.jsx("div",{className:"text-sm font-bold mb-1",children:"ACHIEVEMENTS"}),n.jsx("div",{className:"text-[11px] opacity-80",children:"Milestones"}),n.jsx("div",{className:"text-[10px] opacity-60 mt-1",children:"67% complete"})]})]}),n.jsxs("div",{className:"mt-4 space-y-3",children:[n.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[n.jsx("button",{onClick:()=>e("/profile/streaks"),className:`${l} bg-gradient-to-r from-orange-600/80 to-red-600/80 backdrop-blur-sm border border-orange-500/30`,children:n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsx("div",{className:"text-2xl",children:"🔥"}),n.jsxs("div",{children:[n.jsx("div",{className:"text-sm font-bold",children:"STREAK"}),n.jsxs("div",{className:"text-[11px] opacity-80",children:[o.streak," days strong"]})]})]})}),n.jsx("button",{onClick:()=>e("/profile/quests"),className:`${l} bg-gradient-to-r from-blue-600/80 to-cyan-600/80 backdrop-blur-sm border border-blue-500/30`,children:n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsx("div",{className:"text-2xl",children:"⚡"}),n.jsxs("div",{children:[n.jsx("div",{className:"text-sm font-bold",children:"QUESTS"}),n.jsx("div",{className:"text-[11px] opacity-80",children:"2 active goals"})]})]})})]}),n.jsx("button",{onClick:()=>e("/profile/settings"),className:`${l} w-full bg-gradient-to-r from-slate-700/50 to-slate-800/50 backdrop-blur-sm border border-white/10`,children:n.jsxs("div",{className:"flex items-center justify-between",children:[n.jsxs("div",{className:"flex items-center gap-4",children:[n.jsx("div",{className:"w-12 h-12 rounded-2xl bg-white/10 grid place-items-center text-xl",children:"⚙️"}),n.jsxs("div",{children:[n.jsx("div",{className:"text-sm font-bold",children:"SETTINGS"}),n.jsx("div",{className:"text-[11px] opacity-70",children:"Customize your experience"})]})]}),n.jsx("div",{className:"text-white/40",children:"→"})]})})]}),n.jsx("div",{className:"h-6"})]})}const cs="🪙",ha={global:[{rank:1,name:"Bryan Wolf",handle:"@bryan",score:43,avatar:"/profile/rank1.png",trend:"+5",streak:12,country:"🇺🇸"},{rank:2,name:"Meghan Jess…",handle:"@meghan",score:40,avatar:"/profile/rank2.png",trend:"+2",streak:8,country:"🇨🇦"},{rank:3,name:"Alex Turner",handle:"@alex",score:38,avatar:"/profile/rank3.png",trend:"±0",streak:15,country:"🇬🇧"},{rank:4,name:"Marsha Fisher",handle:"@marsha",score:36,trend:"-1",streak:5,country:"🇦🇺"},{rank:5,name:"Juanita Cormier",handle:"@juanita",score:35,trend:"+1",streak:3,country:"🇲🇽"},{rank:6,name:"You",handle:"@you",score:34,you:!0,avatar:"/profile/avatar.png",trend:"+3",streak:7,country:"🇮🇳"},{rank:7,name:"Tamara Schmidt",handle:"@tamara",score:33,trend:"-2",streak:2,country:"🇩🇪"},{rank:8,name:"Ricardo Veum",handle:"@ricardo",score:32,trend:"+1",streak:4,country:"🇧🇷"}],friends:[{rank:1,name:"You",handle:"@you",score:34,you:!0,avatar:"/profile/avatar.png",trend:"+2",streak:7,country:"🇮🇳"},{rank:2,name:"Sarah Chen",handle:"@sarah",score:31,trend:"-1",streak:4,country:"🇸🇬",friend:!0},{rank:3,name:"Mike Johnson",handle:"@mike",score:29,trend:"+3",streak:2,country:"🇺🇸",friend:!0},{rank:4,name:"Priya Sharma",handle:"@priya",score:27,trend:"±0",streak:5,country:"🇮🇳",friend:!0},{rank:5,name:"David Kim",handle:"@david",score:25,trend:"+1",streak:3,country:"🇰🇷",friend:!0},{rank:6,name:"Emma Wilson",handle:"@emma",score:23,trend:"-2",streak:1,country:"🇬🇧",friend:!0}],india:[{rank:1,name:"Rohit Sharma",handle:"@rohit",score:45,trend:"+4",streak:10,country:"🇮🇳"},{rank:2,name:"Priya Patel",handle:"@priya",score:42,trend:"+1",streak:8,country:"🇮🇳"},{rank:3,name:"You",handle:"@you",score:34,you:!0,avatar:"/profile/avatar.png",trend:"+3",streak:7,country:"🇮🇳"},{rank:4,name:"Arjun Singh",handle:"@arjun",score:32,trend:"-1",streak:5,country:"🇮🇳"},{rank:5,name:"Kavya Reddy",handle:"@kavya",score:30,trend:"+2",streak:3,country:"🇮🇳"},{rank:6,name:"Vikram Gupta",handle:"@vikram",score:28,trend:"±0",streak:4,country:"🇮🇳"}]},pa=[{name:"Diamond",min:40,color:"from-cyan-400 to-blue-600",icon:"💎"},{name:"Gold",min:30,color:"from-yellow-400 to-orange-500",icon:"🥇"},{name:"Silver",min:20,color:"from-gray-300 to-gray-500",icon:"🥈"},{name:"Bronze",min:10,color:"from-orange-600 to-red-600",icon:"🥉"}];function xv(){var h,b;const e=Le(),{player:t}=kn(),r={global:ha.global.map(v=>v.you?{...v,name:(t==null?void 0:t.name)||"You",score:(t==null?void 0:t.coins)||0,streak:(t==null?void 0:t.currentStreak)||0}:v),friends:ha.friends.map(v=>v.you?{...v,name:(t==null?void 0:t.name)||"You",score:(t==null?void 0:t.coins)||0,streak:(t==null?void 0:t.currentStreak)||0}:v),india:ha.india.map(v=>v.you?{...v,name:(t==null?void 0:t.name)||"You",score:(t==null?void 0:t.coins)||0,streak:(t==null?void 0:t.currentStreak)||0}:v)};console.log("Debug - Player coins:",t==null?void 0:t.coins),console.log("Debug - Friends data:",r.friends[0]);const[s,a]=d.useState({days:2,hours:14,minutes:17}),[i,o]=d.useState("global"),l=r[i]||r.global;console.log("Player coins:",t==null?void 0:t.coins,"Current user score:",(h=l.find(v=>v.you))==null?void 0:h.score);const c=l.find(v=>v.you),u=l.slice(0,3),f=l.slice(3);d.useEffect(()=>{const v=setInterval(()=>{a(j=>j.minutes>0?{...j,minutes:j.minutes-1}:j.hours>0?{...j,hours:j.hours-1,minutes:59}:j.days>0?{...j,days:j.days-1,hours:23,minutes:59}:j)},6e4);return()=>clearInterval(v)},[]);const p=v=>{const j=Math.max(...l.map(y=>y.score)),C=v/j*100;return C>=90?pa[0]:C>=70?pa[1]:C>=40?pa[2]:pa[3]};return n.jsxs("div",{className:"min-h-screen bg-black text-white pt-12",children:[n.jsxs("div",{className:"flex items-center justify-between mb-5",children:[n.jsx("button",{onClick:()=>e(-1),className:"px-3 py-1.5 rounded-xl border border-white/10 bg-white/5 text-sm hover:bg-white/10 transition",children:"← Back"}),n.jsxs("div",{className:"text-center",children:[n.jsx("div",{className:"text-lg font-bold",children:"🏆 Leaderboard"}),n.jsxs("div",{className:"text-xs text-white/60",children:["Ends in ",s.days,"d ",s.hours,"h ",s.minutes,"m"]})]}),n.jsx("button",{className:"px-3 py-1.5 rounded-xl border border-white/10 bg-white/5 text-sm hover:bg-white/10 transition",children:"📊"})]}),n.jsxs("div",{className:`mb-5 rounded-2xl bg-gradient-to-r ${p(c==null?void 0:c.score).color} p-4 text-center relative overflow-hidden`,children:[n.jsx("div",{className:"absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -translate-y-10 translate-x-10 animate-pulse"}),n.jsx("div",{className:"absolute bottom-0 left-0 w-16 h-16 bg-white/5 rounded-full translate-y-8 -translate-x-8"}),n.jsxs("div",{className:"relative z-10",children:[n.jsx("div",{className:"text-2xl mb-1",children:p(c==null?void 0:c.score).icon}),n.jsxs("div",{className:"text-sm font-bold text-white",children:[p(c==null?void 0:c.score).name," League"]}),n.jsx("div",{className:"text-xs text-white/80",children:i==="friends"?"Competing with friends!":"You're competing with the best!"})]})]}),n.jsx("div",{className:"flex gap-2 mb-5",children:[{key:"global",label:"🌍 Global",count:"10M+"},{key:"friends",label:"👥 Friends",count:ha.friends.length},{key:"india",label:"🇮🇳 India",count:"2.5M"}].map(v=>n.jsxs("button",{onClick:()=>o(v.key),className:`flex-1 px-2 py-2 rounded-xl text-xs font-semibold transition-all duration-300 ${i===v.key?"bg-lime-500 text-black shadow-lg scale-105":"border border-white/10 bg-white/5 hover:bg-white/10"}`,children:[n.jsx("div",{children:v.label}),n.jsx("div",{className:`text-[10px] ${i===v.key?"text-black/70":"text-white/60"}`,children:v.count})]},v.key))}),n.jsx("div",{className:"mb-5 rounded-2xl bg-gradient-to-r from-lime-500/20 to-green-500/20 border border-lime-500/30 p-3",children:n.jsxs("div",{className:"flex items-center justify-between",children:[n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsx("div",{className:"w-10 h-10 rounded-xl bg-lime-500/20 grid place-items-center text-lg",children:"🧑‍💻"}),n.jsxs("div",{children:[n.jsx("div",{className:"font-bold text-lime-400 text-sm",children:"Your Position"}),n.jsxs("div",{className:"text-xs text-white/70 flex items-center gap-2",children:[n.jsxs("span",{children:["Rank #",c==null?void 0:c.rank]}),n.jsx("span",{className:`px-1.5 py-0.5 rounded-full text-[9px] font-bold ${c!=null&&c.trend.startsWith("+")?"bg-green-500/20 text-green-400":c!=null&&c.trend.startsWith("-")?"bg-red-500/20 text-red-400":"bg-gray-500/20 text-gray-400"}`,children:c==null?void 0:c.trend}),n.jsxs("span",{className:"text-white/50 text-[10px]",children:["in ",i==="global"?"Global":i==="friends"?"Friends":"India"]})]})]})]}),n.jsxs("div",{className:"text-right",children:[n.jsxs("div",{className:"text-lg font-bold text-lime-400",children:[c==null?void 0:c.score," ",cs]}),n.jsxs("div",{className:"text-xs text-white/60",children:["🔥 ",c==null?void 0:c.streak," streak"]})]})]})}),n.jsxs("div",{className:"mb-6",children:[n.jsx("h3",{className:"text-center text-sm font-semibold text-white/80 mb-4",children:"👑 Hall of Fame"}),n.jsxs("div",{className:"bg-gradient-to-b from-white/5 to-white/10 rounded-2xl p-4 border border-white/10 relative overflow-hidden",children:[n.jsx("div",{className:"absolute top-4 left-6 text-2xl opacity-40 animate-pulse",children:"🏆"}),n.jsx("div",{className:"absolute top-8 right-8 text-lg opacity-40 animate-bounce",style:{animationDelay:"1s"},children:"✨"}),n.jsx("div",{className:"absolute bottom-6 left-12 text-xl opacity-10 animate-pulse",style:{animationDelay:"2s"},children:"🥇"}),n.jsx("div",{className:"absolute bottom-4 right-6 text-lg opacity-40 animate-bounce",style:{animationDelay:"0.5s"},children:"⭐"}),n.jsxs("div",{className:"flex items-end justify-center gap-8 relative z-10",children:[u[1]&&n.jsxs("div",{className:"flex flex-col items-center",children:[n.jsxs("div",{className:"relative mb-2",children:[n.jsx(xa,{src:u[1].avatar,fallback:u[1].name,size:56}),n.jsx("div",{className:"absolute -bottom-1 left-1/2 -translate-x-1/2 w-7 h-7 bg-gradient-to-br from-gray-300 to-gray-500 rounded-full grid place-items-center text-sm font-bold text-black shadow-lg",children:"2"})]}),n.jsx("div",{className:"text-sm font-semibold mb-1 mt-1",children:ga(u[1].name,8)}),n.jsxs("div",{className:"text-xs text-lime-400 font-bold",children:[u[1].score," ",cs]})]}),u[0]&&n.jsxs("div",{className:"flex flex-col items-center -mb-3",children:[n.jsxs("div",{className:"relative mb-2",children:[n.jsx(xa,{src:u[0].avatar,fallback:u[0].name,size:72}),n.jsx("div",{className:"absolute -top-3 left-1/2 -translate-x-1/2",children:n.jsx(gv,{})}),n.jsx("div",{className:"absolute -bottom-1 left-1/2 -translate-x-1/2 w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full grid place-items-center text-base font-bold text-black shadow-lg animate-pulse",children:"1"})]}),n.jsx("div",{className:"text-sm font-bold mb-1 mt-1",children:ga(u[0].name,8)}),n.jsxs("div",{className:"text-sm text-lime-400 font-bold mb-1",children:[u[0].score," ",cs]}),n.jsx("div",{className:"px-2 py-1 bg-yellow-400/20 rounded-full text-[9px] text-yellow-400 font-bold",children:"CHAMPION"})]}),u[2]&&n.jsxs("div",{className:"flex flex-col items-center",children:[n.jsxs("div",{className:"relative mb-2",children:[n.jsx(xa,{src:u[2].avatar,fallback:u[2].name,size:56}),n.jsx("div",{className:"absolute -bottom-1 left-1/2 -translate-x-1/2 w-7 h-7 bg-gradient-to-br from-orange-600 to-red-600 rounded-full grid place-items-center text-sm font-bold text-white shadow-lg",children:"3"})]}),n.jsx("div",{className:"text-sm font-semibold mb-1 mt-1",children:ga(u[2].name,8)}),n.jsxs("div",{className:"text-xs text-lime-400 font-bold",children:[u[2].score," ",cs]})]})]})]})]}),f.length>0&&n.jsxs("div",{className:"rounded-3xl bg-white/5 border border-white/10 p-2 mb-4",children:[n.jsxs("div",{className:"flex justify-between items-center mb-2 px-2",children:[n.jsx("h3",{className:"text-sm font-semibold",children:"Rankings"}),n.jsx("div",{className:"text-xs text-white/60",children:"Live updates"})]}),n.jsx("ul",{className:"space-y-1.5",children:f.map((v,j)=>n.jsxs("li",{className:`flex items-center justify-between px-3 py-2.5 rounded-xl transition-all duration-300 ${v.you?"bg-lime-500/90 text-black shadow-lg shadow-lime-500/20 scale-[1.02]":"bg-white/5 hover:bg-white/10"}`,style:{animationDelay:`${j*100}ms`,animation:"fadeInUp 0.6s ease-out forwards"},children:[n.jsxs("div",{className:"flex items-center gap-2.5",children:[n.jsx(vv,{n:v.rank,you:v.you}),n.jsx(xa,{src:v.avatar,fallback:v.name,size:36}),n.jsxs("div",{className:"flex flex-col leading-tight",children:[n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx("span",{className:"text-sm font-semibold",children:ga(v.name,12)}),n.jsx("span",{className:"text-xs",children:v.country}),v.friend&&n.jsx("span",{className:"text-[9px] bg-blue-500/20 text-blue-400 px-1 py-0.5 rounded-full",children:"Friend"})]}),n.jsxs("div",{className:`text-xs flex items-center gap-1.5 ${v.you?"text-black/70":"text-white/60"}`,children:[n.jsx("span",{children:v.handle}),n.jsxs("span",{children:["🔥",v.streak]})]})]})]}),n.jsxs("div",{className:"flex flex-col items-end",children:[n.jsxs("div",{className:"flex items-center gap-1 text-sm font-bold",children:[n.jsx("span",{children:v.score}),n.jsx("span",{className:v.you?"opacity-90":"opacity-80",children:cs})]}),n.jsx("div",{className:`text-xs px-1.5 py-0.5 rounded-full font-bold ${v.trend.startsWith("+")?"bg-green-500/20 text-green-400":v.trend.startsWith("-")?"bg-red-500/20 text-red-400":"bg-gray-500/20 text-gray-400"}`,children:v.trend})]})]},`${i}-${v.rank}`))})]}),c&&c.rank>1&&n.jsxs("div",{className:"mb-4 p-3 rounded-2xl bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 text-center",children:[n.jsx("div",{className:"text-sm font-semibold mb-2",children:"🚀 Climb Higher!"}),n.jsx("div",{className:"text-xs text-white/70 mb-3",children:i==="friends"&&c.rank===1?"🎉 You're #1 among friends!":`You need ${Math.max(0,(((b=l[c.rank-2])==null?void 0:b.score)||0)-c.score+1)} more coins to reach rank #${c.rank-1}`}),!(i==="friends"&&c.rank===1)&&n.jsx("button",{onClick:()=>e("/play"),className:"px-5 py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl text-sm font-bold hover:scale-105 transition-transform",children:"Play Now 🎮"})]}),n.jsx("style",{jsx:!0,children:`
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
      `})]})}function xa({src:e,fallback:t,size:r=56}){const s=yv(t);return n.jsx("div",{className:"grid place-items-center rounded-full bg-white/10 overflow-hidden border-2 border-white/20",style:{width:r,height:r},children:e?n.jsx("img",{src:e,alt:"",className:"w-full h-full object-cover"}):n.jsx("span",{className:"text-sm font-semibold",children:s})})}function gv(){return n.jsxs("div",{className:"w-7 h-5 bg-gradient-to-t from-yellow-400 to-yellow-300 rounded-b-lg shadow-lg relative",children:[n.jsxs("svg",{viewBox:"0 0 100 40",className:"w-full h-full",children:[n.jsx("path",{d:"M15,35 L15,18 L35,28 L50,10 L65,28 L85,18 L85,35 Z",fill:"url(#crownGradient)"}),n.jsx("defs",{children:n.jsxs("linearGradient",{id:"crownGradient",x1:"0%",y1:"0%",x2:"0%",y2:"100%",children:[n.jsx("stop",{offset:"0%",stopColor:"#FCD34D"}),n.jsx("stop",{offset:"100%",stopColor:"#F59E0B"})]})})]}),n.jsx("div",{className:"absolute top-0.5 left-1/2 -translate-x-1/2 w-1 h-1 bg-red-400 rounded-full animate-pulse"})]})}function vv({n:e,you:t}){return n.jsx("div",{className:`w-7 h-7 grid place-items-center rounded-full text-sm font-bold ${t?"bg-black/10 text-black":"bg-white/10 text-white"}`,children:e})}function ga(e,t=12){return(e==null?void 0:e.length)>t?e.slice(0,t-1)+"…":e}function yv(e=""){var r;const t=e.trim().split(/\s+/);return t.length===1?t[0].slice(0,2).toUpperCase():(t[0][0]+(((r=t[1])==null?void 0:r[0])||"")).toUpperCase()}const bv="qp_recent",wv="qp_review_snapshot",Qd=[{id:Date.now()-864e5,type:"quiz",category:"General Knowledge",difficulty:"easy",score:8,total:10,accuracy:80,time:"02:31",ms:151e3,date:"Yesterday",timestamp:Date.now()-864e5,mode:"Quiz"},{id:Date.now()-1728e5,type:"practice",category:"Science",difficulty:"medium",score:12,total:15,accuracy:80,time:"06:02",ms:362e3,date:"2 days ago",timestamp:Date.now()-1728e5,mode:"Practice"},{id:Date.now()-2592e5,type:"quiz",category:"Fun Facts",difficulty:"easy",score:9,total:10,accuracy:90,time:"02:05",ms:125e3,date:"3 days ago",timestamp:Date.now()-2592e5,mode:"Quiz"}];function jv(){const[e,t]=d.useState("quizzes"),[r,s]=d.useState(null),[a,i]=d.useState(!1),[o,l]=d.useState("all"),[c,u]=d.useState("all"),[f,p]=d.useState("date"),[h,b]=d.useState([]),[v,j]=d.useState(!0),C=Le(),y=S=>{if(!S)return"00:00";const g=Math.floor(S/1e3),w=Math.floor(g/60),k=g%60;return`${String(w).padStart(2,"0")}:${String(k).padStart(2,"0")}`},m=S=>{if(!S)return"Unknown";const g=new Date(S),k=Math.floor((new Date-g)/(1e3*60*60*24));return k===0?"Today":k===1?"Yesterday":k<7?`${k} days ago`:`${["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][g.getMonth()]} ${g.getDate()}`};d.useEffect(()=>{let S=!1;j(!0);const g=P=>{try{return JSON.parse(P)}catch{return null}},w=P=>encodeURIComponent(String(P).trim().toLowerCase().replace(/\s+/g,"-")),k=P=>{var D,L,A,H;const F=Number(P.ts??P.timestamp??P.id)||Date.now(),Y=Number(P.ms)||0,ee=Number(P.total)||0,Q=Number(P.correct)||0,B=String(P.mode||"").toLowerCase().includes("practice")?"practice":"quiz",_=((D=P.snapshot)==null?void 0:D.category)||((L=P.snapshot)==null?void 0:L.categoryLabel)||P.cat||P.category||"Unknown",M=((A=P.snapshot)==null?void 0:A.categoryParam)||w(_),q=String(((H=P.snapshot)==null?void 0:H.difficulty)||P.difficulty||"medium").toLowerCase();return{id:P.id??F,type:B,category:_,categoryParam:M,difficulty:q,score:Q,total:ee,accuracy:ee?Math.round(Q/ee*100):0,time:y(Y),ms:Y,date:m(F),timestamp:F,snapshot:P.snapshot??null,mode:P.mode||(B==="practice"?"Practice":"Quiz")}};try{const P=localStorage.getItem(bv),F=P?g(P):null,ee=(Array.isArray(F)&&F.length?F:Qd).map(k).filter(Q=>Q&&Q.timestamp).sort((Q,U)=>U.timestamp-Q.timestamp);S||b(ee)}catch(P){console.error("Error loading history:",P),S||b(Qd)}finally{S||j(!1)}return()=>{S=!0}},[]);const x=d.useMemo(()=>{const S=new Set(h.map(g=>g.category));return Array.from(S)},[h]),E=d.useMemo(()=>{let S=h.filter(g=>e==="quizzes"?g.type==="quiz":g.type==="practice");return o!=="all"&&(S=S.filter(g=>g.category===o)),c!=="all"&&(S=S.filter(g=>g.difficulty===c)),S.sort((g,w)=>f==="date"?w.timestamp-g.timestamp:f==="score"?w.accuracy-g.accuracy:f==="time"?g.ms-w.ms:0),S},[h,e,o,c,f]),N=d.useMemo(()=>{if(E.length===0)return null;const S=E.reduce((P,F)=>P+F.score,0),g=E.reduce((P,F)=>P+F.total,0),w=g?Math.round(S/g*100):0,k=E.reduce((P,F)=>P+F.ms,0);return{count:E.length,avgAccuracy:w,totalTime:y(k),bestScore:Math.max(...E.map(P=>P.accuracy))}},[E]),T=S=>S>=80?"text-green-400":S>=60?"text-blue-400":S>=40?"text-yellow-400":"text-red-400";return v?n.jsx("div",{className:"min-h-full bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900 flex items-center justify-center",children:n.jsx("div",{className:"text-white",children:"Loading history..."})}):n.jsxs("div",{className:"min-h-full bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900 pt-12",children:[n.jsx("div",{className:"",children:n.jsxs("div",{className:"px-4 pt-4 pb-4",children:[n.jsxs("div",{className:"flex items-center justify-between mb-3",children:[n.jsx("button",{onClick:()=>C("/profile",{replace:!0}),className:"px-3 py-1.5 rounded-xl border border-white/20 bg-white/10 text-white text-sm flex items-center gap-1",children:"← Back"}),n.jsx("button",{onClick:()=>i(!a),className:"p-2 rounded-xl border border-white/20 bg-white/10 text-white",children:n.jsx(Sv,{})})]}),n.jsx("h1",{className:"text-2xl font-bold text-white mb-1",children:"History"}),n.jsx("p",{className:"text-white/70 text-sm",children:"Track your progress"})]})}),n.jsxs("div",{className:"px-4 pb-20",children:[n.jsx("div",{className:`
             sticky top-0 z-[60] isolate
            -mx-4 px-4
            py-4 mb-2
            bg-gray-900/95
            backdrop-blur-md
            border-b border-white/10
        `,children:n.jsx("div",{className:"flex items-center",children:n.jsx("div",{className:"inline-flex p-1 rounded-2xl bg-white/10 border border-white/20",children:[{value:"quizzes",label:"Quizzes",icon:"🎯"},{value:"practice",label:"Practice",icon:"📝"}].map(S=>n.jsxs("button",{onClick:()=>t(S.value),className:`px-12 py-2 text-sm rounded-xl transition-all duration-200 ${e===S.value?"bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg":"text-white/70 hover:text-white"}`,children:[n.jsx("span",{className:"mr-1",children:S.icon}),S.label]},S.value))})})}),N&&n.jsx("div",{className:"mb-4 p-4 rounded-2xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-white/20",children:n.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-3",children:[n.jsx(va,{label:"Total",value:N.count}),n.jsx(va,{label:"Avg Score",value:`${N.avgAccuracy}%`,color:T(N.avgAccuracy)}),n.jsx(va,{label:"Best Score",value:`${N.bestScore}%`,color:"text-green-400"}),n.jsx(va,{label:"Total Time",value:N.totalTime})]})}),a&&n.jsx("div",{className:"mb-4 p-4 rounded-2xl bg-white/10 border border-white/20",children:n.jsxs("div",{className:"space-y-3",children:[n.jsxs("div",{children:[n.jsx("label",{className:"text-xs text-white/60 mb-1 block",children:"Category"}),n.jsxs("select",{value:o,onChange:S=>l(S.target.value),className:"w-full px-3 py-2 rounded-xl bg-black/30 border border-white/20 text-white text-sm",children:[n.jsx("option",{value:"all",children:"All Categories"}),x.map(S=>n.jsx("option",{value:S,children:S},S))]})]}),n.jsxs("div",{className:"flex gap-2",children:[n.jsxs("div",{className:"flex-1",children:[n.jsx("label",{className:"text-xs text-white/60 mb-1 block",children:"Difficulty"}),n.jsxs("select",{value:c,onChange:S=>u(S.target.value),className:"w-full px-3 py-2 rounded-xl bg-black/30 border border-white/20 text-white text-sm",children:[n.jsx("option",{value:"all",children:"All"}),n.jsx("option",{value:"easy",children:"Easy"}),n.jsx("option",{value:"medium",children:"Medium"}),n.jsx("option",{value:"hard",children:"Hard"})]})]}),n.jsxs("div",{className:"flex-1",children:[n.jsx("label",{className:"text-xs text-white/60 mb-1 block",children:"Sort By"}),n.jsxs("select",{value:f,onChange:S=>p(S.target.value),className:"w-full px-3 py-2 rounded-xl bg-black/30 border border-white/20 text-white text-sm",children:[n.jsx("option",{value:"date",children:"Date"}),n.jsx("option",{value:"score",children:"Score"}),n.jsx("option",{value:"time",children:"Time"})]})]})]})]})}),E.length===0?n.jsxs("div",{className:"text-center py-12",children:[n.jsx("div",{className:"text-4xl mb-3",children:"📚"}),n.jsxs("p",{className:"text-white/60",children:["No ",e," history yet"]}),n.jsx("p",{className:"text-white/40 text-sm mt-1",children:"Start playing to see your progress here!"})]}):n.jsx("div",{className:"space-y-3",children:E.map((S,g)=>n.jsx(Nv,{item:S,index:g,onClick:()=>s(S)},S.id))})]}),r&&n.jsx(kv,{item:r,onClose:()=>s(null)})]})}function va({label:e,value:t,color:r="text-white"}){return n.jsxs("div",{className:"text-center",children:[n.jsx("div",{className:"text-xs text-white/60 mb-1",children:e}),n.jsx("div",{className:`text-lg font-bold ${r}`,children:t})]})}function Nv({item:e,index:t,onClick:r}){const s=o=>o>=80?"from-green-500/20 to-green-600/10 border-green-500/30":o>=60?"from-blue-500/20 to-blue-600/10 border-blue-500/30":o>=40?"from-yellow-500/20 to-yellow-600/10 border-yellow-500/30":"from-red-500/20 to-red-600/10 border-red-500/30",i=(o=>{const l=o==null?void 0:o.toLowerCase();return l==="easy"?{bg:"bg-green-500/20",text:"text-green-400",border:"border-green-500/30"}:l==="medium"?{bg:"bg-yellow-500/20",text:"text-yellow-400",border:"border-yellow-500/30"}:l==="hard"?{bg:"bg-red-500/20",text:"text-red-400",border:"border-red-500/30"}:{bg:"bg-gray-500/20",text:"text-gray-400",border:"border-gray-500/30"}})(e.difficulty);return n.jsxs("div",{onClick:r,className:`
        relative rounded-2xl p-4 cursor-pointer
        bg-gradient-to-br ${s(e.accuracy)}
        border transform transition-all duration-300 hover:scale-[1.02]
      `,children:[n.jsxs("div",{className:"flex items-start justify-between mb-3",children:[n.jsxs("div",{className:"flex-1",children:[n.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[n.jsx("span",{className:"text-lg",children:e.type==="quiz"?"🎯":"📝"}),n.jsx("h3",{className:"font-semibold text-white",children:e.category})]}),n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx("span",{className:`px-2 py-0.5 rounded-full text-xs ${i.bg} ${i.text} ${i.border} border`,children:e.difficulty}),n.jsx("span",{className:"text-xs text-white/50",children:e.date})]})]}),n.jsxs("div",{className:"text-right",children:[n.jsxs("div",{className:`text-2xl font-bold ${e.accuracy>=80?"text-green-400":e.accuracy>=60?"text-blue-400":e.accuracy>=40?"text-yellow-400":"text-red-400"}`,children:[e.accuracy,"%"]}),n.jsxs("div",{className:"text-xs text-white/60",children:[e.score,"/",e.total]})]})]}),n.jsxs("div",{className:"flex items-center justify-between text-xs",children:[n.jsxs("div",{className:"flex items-center gap-3 text-white/60",children:[n.jsxs("span",{children:["⏱ ",e.time]}),n.jsx("span",{children:e.mode})]}),n.jsx("span",{className:"text-white/40",children:"Tap to review →"})]})]})}function kv({item:e,onClose:t}){const r=Le();return d.useEffect(()=>{const s=a=>{a.key==="Escape"&&t()};return document.addEventListener("keydown",s),()=>document.removeEventListener("keydown",s)},[t]),n.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80",onClick:t,children:n.jsxs("div",{className:"w-full max-w-md bg-gray-900 rounded-3xl p-6 border border-white/20",onClick:s=>s.stopPropagation(),children:[n.jsxs("div",{className:"flex items-center justify-between mb-4",children:[n.jsx("h2",{className:"text-xl font-bold text-white",children:"Quiz Details"}),n.jsx("button",{onClick:t,className:"p-2 rounded-xl bg-white/10 hover:bg-white/20 transition-colors text-white",children:"✕"})]}),n.jsxs("div",{className:"space-y-4",children:[n.jsxs("div",{className:"p-4 rounded-2xl bg-white/5 border border-white/10",children:[n.jsxs("div",{className:"flex items-center justify-between mb-2",children:[n.jsx("span",{className:"text-white/60",children:"Category"}),n.jsx("span",{className:"text-white font-medium",children:e.category})]}),n.jsxs("div",{className:"flex items-center justify-between mb-2",children:[n.jsx("span",{className:"text-white/60",children:"Difficulty"}),n.jsx("span",{className:`${e.difficulty==="easy"?"text-green-400":e.difficulty==="medium"?"text-yellow-400":"text-red-400"} font-medium`,children:e.difficulty})]}),n.jsxs("div",{className:"flex items-center justify-between mb-2",children:[n.jsx("span",{className:"text-white/60",children:"Score"}),n.jsxs("span",{className:"text-white font-medium",children:[e.score,"/",e.total]})]}),n.jsxs("div",{className:"flex items-center justify-between mb-2",children:[n.jsx("span",{className:"text-white/60",children:"Accuracy"}),n.jsxs("span",{className:`${e.accuracy>=80?"text-green-400":e.accuracy>=60?"text-blue-400":"text-yellow-400"} font-medium`,children:[e.accuracy,"%"]})]}),n.jsxs("div",{className:"flex items-center justify-between",children:[n.jsx("span",{className:"text-white/60",children:"Time"}),n.jsx("span",{className:"text-white font-medium",children:e.time})]})]}),e.snapshot&&n.jsx("button",{onClick:()=>{t(),localStorage.setItem(wv,JSON.stringify(e.snapshot)),r(`/quiz/${e.categoryParam}/start?review=1&attempt=${e.id}`,{state:{reviewFrom:"history",historyPath:"/profile/history"}})},className:"w-full py-3 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium hover:opacity-90 transition-opacity",children:"Review Answers"}),n.jsx("button",{onClick:()=>{var s;t(),r(`/quiz/${e.categoryParam}/start`,{state:{mode:"quiz",retake:!0,difficulty:e.difficulty,count:e.total,timer:((s=e.snapshot)==null?void 0:s.timer)||{type:"per_q",seconds:45},fromHistory:!0}})},className:"w-full py-3 rounded-2xl border border-white/20 text-white font-medium hover:bg-white/10 transition-colors",children:"Retake Quiz"})]})]})})}function Sv(){return n.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:n.jsx("path",{d:"M3 6h18M7 12h10M10 18h4",strokeLinecap:"round",strokeLinejoin:"round"})})}const Cv=d.createContext({});function Am(e){const t=d.useRef(null);return t.current===null&&(t.current=e()),t.current}const Ev=typeof window<"u",Pv=Ev?d.useLayoutEffect:d.useEffect,zm=d.createContext(null);function Tv(e){return typeof e=="object"&&e!==null}function Rv(e){return Tv(e)&&"offsetHeight"in e}const _v=d.createContext({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"});class Lv extends d.Component{getSnapshotBeforeUpdate(t){const r=this.props.childRef.current;if(r&&t.isPresent&&!this.props.isPresent){const s=r.offsetParent,a=Rv(s)&&s.offsetWidth||0,i=this.props.sizeRef.current;i.height=r.offsetHeight||0,i.width=r.offsetWidth||0,i.top=r.offsetTop,i.left=r.offsetLeft,i.right=a-i.width-i.left}return null}componentDidUpdate(){}render(){return this.props.children}}function Iv({children:e,isPresent:t,anchorX:r,root:s}){const a=d.useId(),i=d.useRef(null),o=d.useRef({width:0,height:0,top:0,left:0,right:0}),{nonce:l}=d.useContext(_v);return d.useInsertionEffect(()=>{const{width:c,height:u,top:f,left:p,right:h}=o.current;if(t||!i.current||!c||!u)return;const b=r==="left"?`left: ${p}`:`right: ${h}`;i.current.dataset.motionPopId=a;const v=document.createElement("style");l&&(v.nonce=l);const j=s??document.head;return j.appendChild(v),v.sheet&&v.sheet.insertRule(`
          [data-motion-pop-id="${a}"] {
            position: absolute !important;
            width: ${c}px !important;
            height: ${u}px !important;
            ${b}px !important;
            top: ${f}px !important;
          }
        `),()=>{j.contains(v)&&j.removeChild(v)}},[t]),n.jsx(Lv,{isPresent:t,childRef:i,sizeRef:o,children:d.cloneElement(e,{ref:i})})}const Av=({children:e,initial:t,isPresent:r,onExitComplete:s,custom:a,presenceAffectsLayout:i,mode:o,anchorX:l,root:c})=>{const u=Am(zv),f=d.useId();let p=!0,h=d.useMemo(()=>(p=!1,{id:f,initial:t,isPresent:r,custom:a,onExitComplete:b=>{u.set(b,!0);for(const v of u.values())if(!v)return;s&&s()},register:b=>(u.set(b,!1),()=>u.delete(b))}),[r,u,s]);return i&&p&&(h={...h}),d.useMemo(()=>{u.forEach((b,v)=>u.set(v,!1))},[r]),d.useEffect(()=>{!r&&!u.size&&s&&s()},[r]),o==="popLayout"&&(e=n.jsx(Iv,{isPresent:r,anchorX:l,root:c,children:e})),n.jsx(zm.Provider,{value:h,children:e})};function zv(){return new Map}function Mv(e=!0){const t=d.useContext(zm);if(t===null)return[!0,null];const{isPresent:r,onExitComplete:s,register:a}=t,i=d.useId();d.useEffect(()=>{if(e)return a(i)},[e]);const o=d.useCallback(()=>e&&s&&s(i),[i,s,e]);return!r&&s?[!1,o]:[!0]}const ya=e=>e.key||"";function Yd(e){const t=[];return d.Children.forEach(e,r=>{d.isValidElement(r)&&t.push(r)}),t}const ao=({children:e,custom:t,initial:r=!0,onExitComplete:s,presenceAffectsLayout:a=!0,mode:i="sync",propagate:o=!1,anchorX:l="left",root:c})=>{const[u,f]=Mv(o),p=d.useMemo(()=>Yd(e),[e]),h=o&&!u?[]:p.map(ya),b=d.useRef(!0),v=d.useRef(p),j=Am(()=>new Map),[C,y]=d.useState(p),[m,x]=d.useState(p);Pv(()=>{b.current=!1,v.current=p;for(let T=0;T<m.length;T++){const S=ya(m[T]);h.includes(S)?j.delete(S):j.get(S)!==!0&&j.set(S,!1)}},[m,h.length,h.join("-")]);const E=[];if(p!==C){let T=[...p];for(let S=0;S<m.length;S++){const g=m[S],w=ya(g);h.includes(w)||(T.splice(S,0,g),E.push(g))}return i==="wait"&&E.length&&(T=E),x(Yd(T)),y(p),null}const{forceRender:N}=d.useContext(Cv);return n.jsx(n.Fragment,{children:m.map(T=>{const S=ya(T),g=o&&!u?!1:p===m||h.includes(S),w=()=>{if(j.has(S))j.set(S,!0);else return;let k=!0;j.forEach(P=>{P||(k=!1)}),k&&(N==null||N(),x(v.current),o&&(f==null||f()),s&&s())};return n.jsx(Av,{isPresent:g,initial:!b.current||r?void 0:!1,custom:t,presenceAffectsLayout:a,mode:i,root:c,onExitComplete:g?void 0:w,anchorX:l,children:T},S)})})},Dv=()=>{const e=Le(),[t,r]=d.useState(null);d.useEffect(()=>{if(typeof window<"u"){const K=sessionStorage.getItem("navigationSource");K&&r(K)}},[]);const s=K=>{typeof window<"u"&&(sessionStorage.setItem("navigationSource","/rewards"),window.location.href=K)},a=()=>{e(-1)},i=[{id:1,type:"coins",value:100,icon:"🪙",label:"100 Coins",cost:0},{id:2,type:"life",value:1,icon:"❤️",label:"1 Life",cost:50},{id:3,type:"coins",value:200,icon:"🪙",label:"200 Coins",cost:0},{id:4,type:"wildcard",value:1,icon:"🃏",label:"Wild Card",cost:100},{id:5,type:"coins",value:500,icon:"💰",label:"500 Coins",cost:0,milestone:!0},{id:6,type:"fifty-fifty",value:1,icon:"➗",label:"50:50",cost:150},{id:7,type:"life",value:2,icon:"❤️",label:"2 Lives",cost:100},{id:8,type:"vehicle",value:"bike",icon:"🏍️",label:"Motorcycle",cost:300},{id:9,type:"mystery",value:1,icon:"🎁",label:"Mystery Box",cost:200},{id:10,type:"coins",value:750,icon:"💰",label:"750 Coins",cost:0,milestone:!0},{id:11,type:"life",value:3,icon:"❤️",label:"3 Lives",cost:150},{id:12,type:"wildcard",value:2,icon:"🃏",label:"2x Wild Card",cost:250},{id:13,type:"vehicle",value:"car",icon:"🚗",label:"Car",cost:500},{id:14,type:"fifty-fifty",value:2,icon:"➗",label:"2x 50:50",cost:300},{id:15,type:"coins",value:1e3,icon:"💎",label:"1000 Coins",cost:0,milestone:!0}],o={cycle:{icon:"🚴",name:"Bicycle"},bike:{icon:"🏍️",name:"Motorcycle"},car:{icon:"🚗",name:"Car"}},{player:l,addCoins:c}=kn(),[u,f]=d.useState(4),[p,h]=d.useState((l==null?void 0:l.coins)||0),[b,v]=d.useState(4),[j,C]=d.useState(!1),[y,m]=d.useState(!1),[x,E]=d.useState(0),[N,T]=d.useState(0),[S,g]=d.useState("cycle"),[w,k]=d.useState([{type:"vehicle",icon:"🚴",name:"Bicycle",count:1},{type:"wildcard",icon:"🃏",name:"Wild Card",count:2},{type:"fifty-fifty",icon:"➗",name:"50:50 Helper",count:1}]),[P,F]=d.useState([0,1,2,3]),[Y,ee]=d.useState(!1),[Q,U]=d.useState(!1),[B,_]=d.useState(null),[M,q]=d.useState(null),[D,L]=d.useState(!1),[A,H]=d.useState(null),[re,J]=d.useState(!1),O=d.useRef(null),I=d.useRef(null),W=d.useRef(null);d.useEffect(()=>{O.current=new Audio("/sounds/reward.mp3"),I.current=new Audio("/sounds/reward_progress.mp3"),[O,I].forEach(K=>{var R;(R=K.current)==null||R.addEventListener("error",()=>{console.log("Sound file not found")})})},[]);const z=K=>{try{K.current&&(K.current.currentTime=0,K.current.play().catch(R=>console.log("Audio play failed:",R)))}catch(R){console.log("Sound play error:",R)}},$=(K,R)=>{if(K>u){q(R),U(!0);return}K===u&&ie(K,R)},Z=K=>{var G;const R=(G=W.current)==null?void 0:G.querySelector(`[data-index="${K}"]`);if(R){const ce=R.getBoundingClientRect(),pe=window.pageYOffset||document.documentElement.scrollTop,me=ce.top+pe-window.innerHeight/2+50;window.scrollTo({top:me,behavior:"smooth"})}},ie=(K,R)=>{if(!P.includes(K)){if(R.cost>0&&p<R.cost){q(R),U(!0);return}R.cost>0&&(h(G=>G-R.cost),c(-R.cost)),z(O),ee(!0),q(R),F(G=>[...G,K]),setTimeout(()=>{ee(!1),R.type==="coins"?(E(R.value),C(!0),setTimeout(()=>{h(G=>G+R.value),c(R.value),setTimeout(()=>{C(!1),E(0)},500)},300)):R.type==="life"?(T(R.value),m(!0),setTimeout(()=>{v(G=>G+R.value),setTimeout(()=>{m(!1),T(0)},500)},300)):(H({icon:R.icon,startX:window.innerWidth/2,startY:window.innerHeight/2}),setTimeout(()=>{H(null),J(!0),de(R),R.type==="vehicle"&&g(R.value),setTimeout(()=>{J(!1)},500)},800)),setTimeout(()=>{if(u<i.length-1){const G=u+1;Z(G),setTimeout(()=>{L(!0),z(I),f(G),setTimeout(()=>{L(!1)},500)},300)}},1200)},1500)}},de=K=>{k(R=>R.find(ce=>ce.icon===K.icon)?R.map(ce=>ce.icon===K.icon?{...ce,count:ce.count+1}:ce):[...R,{type:K.type,icon:K.icon,name:K.label,count:1}])},te=K=>30+K*100,ne=()=>30+u*100;return n.jsxs("div",{className:"rewards-page",children:[n.jsx("style",{jsx:!0,children:`
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
      `}),n.jsx("div",{className:"non-sticky-header",children:n.jsx("button",{className:"back-button",onClick:a,children:"← Back"})}),n.jsxs("div",{className:"sticky-section",children:[n.jsxs("div",{className:"header-wrapper",children:[n.jsxs("div",{className:"title-row",children:[n.jsxs("div",{children:[n.jsx("h1",{className:"title",children:"Rewards"}),n.jsx("p",{className:"subtitle",children:"Claim amazing prizes"})]}),n.jsx("button",{className:"play-quiz-btn",onClick:()=>s("/play"),children:"Play Quiz"})]}),n.jsx("div",{className:"balance-row",children:n.jsx("div",{className:"balance-item",children:n.jsxs("div",{children:[n.jsx("div",{className:"balance-label",children:"Balance"}),n.jsxs("div",{className:`balance-value ${j?"animating":""}`,children:[p.toLocaleString()," 🪙",j&&n.jsxs("span",{className:"value-change",children:["+",x]})]})]})})})]}),n.jsx("div",{className:"stats-cards-container",children:n.jsxs("div",{className:"info-grid",children:[n.jsxs("div",{className:"info-card",children:[n.jsx("div",{className:"info-icon",children:"❤️"}),n.jsxs("div",{className:`info-value ${y?"animating":""}`,children:[b,y&&n.jsxs("span",{className:"value-change",children:["+",N]})]}),n.jsx("div",{className:"info-label",children:"Lives"})]}),n.jsxs("div",{className:"info-card",children:[n.jsx("div",{className:"info-icon",children:"⭐"}),n.jsx("div",{className:"info-value",children:"5"}),n.jsx("div",{className:"info-label",children:"Level"})]}),n.jsxs("div",{className:"info-card",children:[n.jsx("div",{className:"info-icon",children:o[S].icon}),n.jsx("div",{className:"info-value",children:o[S].name}),n.jsx("div",{className:"info-label",children:"Vehicle"})]}),n.jsxs("div",{className:`cards-section ${re?"animating":""}`,children:[n.jsx("div",{className:"cards-label",children:"Your Cards"}),n.jsx("div",{className:"card-grid",children:w.map((K,R)=>n.jsxs("div",{className:"card-item",onClick:()=>_(K),children:[n.jsxs("div",{className:"large-card",children:[n.jsx("div",{className:"large-card-icon",children:K.icon}),n.jsx("div",{className:"large-card-name",children:K.name})]}),K.count>1&&n.jsx("div",{className:"card-count-badge",children:K.count})]},R))})]})]})})]}),n.jsx("div",{className:"scrollable-journey",children:n.jsx("div",{className:"journey-container",ref:W,children:n.jsxs("div",{className:"journey-track",children:[n.jsx("div",{className:"curvy-road",children:n.jsxs("svg",{className:"road-svg",viewBox:"0 0 60 1500",preserveAspectRatio:"none",children:[n.jsx("defs",{children:n.jsxs("linearGradient",{id:"roadGradient",x1:"0%",y1:"0%",x2:"0%",y2:"100%",children:[n.jsx("stop",{offset:"0%",stopColor:"#5E5CE6"}),n.jsx("stop",{offset:"100%",stopColor:"#5E5CE6"})]})}),n.jsx("path",{className:"road-path",d:"M 30 0 Q 45 50, 30 100 T 30 200 Q 15 250, 30 300 T 30 400 Q 45 450, 30 500 T 30 600 Q 15 650, 30 700 T 30 800 Q 45 850, 30 900 T 30 1000 Q 15 1050, 30 1100 T 30 1200 Q 45 1250, 30 1300 T 30 1400 L 30 1500"}),n.jsx("path",{className:"road-progress",d:"M 30 0 Q 45 50, 30 100 T 30 200 Q 15 250, 30 300 T 30 400 Q 45 450, 30 500 T 30 600 Q 15 650, 30 700 T 30 800 Q 45 850, 30 900 T 30 1000 Q 15 1050, 30 1100 T 30 1200 Q 45 1250, 30 1300 T 30 1400 L 30 1500",strokeDasharray:"1500",strokeDashoffset:1500-u/(i.length-1)*1500})]})}),n.jsxs("div",{className:"avatar-tracker",style:{top:`${ne()}px`},children:[n.jsx("img",{className:"avatar-img",src:"/profile/avatar.png",alt:"You",onError:K=>{K.target.style.display="none"}}),n.jsx("div",{className:"tracker-vehicle",children:o[S].icon})]}),n.jsx("div",{className:"rewards-list",children:i.map((K,R)=>{const G=R%2===0,ce=R>u,pe=P.includes(R),me=R===u;return n.jsx("div",{className:"reward-row","data-index":R,style:{top:`${te(R)}px`},children:n.jsxs("div",{className:`reward-item ${G?"left":"right"}`,children:[n.jsxs("div",{className:`checkpoint ${me?"current":pe?"claimed":ce?"locked":""}`,onClick:()=>$(R,K),children:[n.jsx("div",{className:"checkpoint-icon",children:K.icon}),n.jsx("div",{className:"checkpoint-value",children:K.label.split(" ")[0]}),K.milestone&&n.jsx("div",{className:"milestone-badge",children:"BONUS"}),ce&&n.jsx("div",{className:"lock-icon",children:"🔒"})]}),n.jsxs("div",{className:"reward-info",children:[n.jsx("div",{className:"reward-name",children:K.label}),n.jsxs("div",{className:"step-label",children:["Step ",R+1]})]})]})},K.id)})})]})})}),A&&n.jsx("div",{className:"flying-card",style:{left:`${A.startX}px`,top:`${A.startY}px`,"--startX":`${A.startX}px`},children:A.icon}),n.jsx(ao,{children:B&&n.jsx("div",{className:"claim-overlay",onClick:()=>_(null),children:n.jsxs("div",{className:"modal",onClick:K=>K.stopPropagation(),children:[n.jsx("div",{className:"modal-icon",children:B.icon}),n.jsx("div",{className:"card-detail-name",children:B.name}),n.jsxs("div",{className:"card-detail-desc",children:["You have ",B.count," of these cards"]}),n.jsx("div",{className:"modal-buttons",children:n.jsx("button",{className:"modal-btn modal-btn-secondary",onClick:()=>_(null),children:"Close"})})]})})}),n.jsx(ao,{children:Y&&M&&n.jsx("div",{className:"claim-overlay",children:n.jsxs("div",{className:"modal",children:[n.jsx("div",{className:"modal-title",children:"WELL DONE!"}),n.jsx("div",{className:"modal-subtitle",children:"Here's a reward for you."}),n.jsx("div",{className:"modal-icon",children:M.icon}),n.jsxs("div",{className:"modal-value",children:["+",M.value," ",M.type==="coins"?"Coins":M.type==="life"?"Lives":M.label]})]})})}),n.jsx(ao,{children:Q&&M&&n.jsx("div",{className:"claim-overlay",onClick:()=>U(!1),children:n.jsxs("div",{className:"modal",onClick:K=>K.stopPropagation(),children:[n.jsx("div",{className:"modal-icon",children:"🪙"}),n.jsx("div",{className:"modal-title",children:"Need More Coins"}),n.jsx("div",{className:"modal-subtitle",children:M.cost>0?`You need ${M.cost-p} more coins`:"Complete previous rewards first"}),n.jsxs("div",{className:"modal-buttons",children:[n.jsx("button",{className:"modal-btn modal-btn-primary",onClick:()=>s("/play"),children:"Play Quiz"}),n.jsx("button",{className:"modal-btn modal-btn-secondary",onClick:()=>U(!1),children:"Cancel"})]})]})})})]})},ba=[{id:1,name:"First Win",emoji:"🏆",unlocked:!0,hint:"Win your first quiz",progress:100,color:"#FFD700"},{id:2,name:"On Fire",emoji:"🔥",unlocked:!0,hint:"3-day winning streak",progress:100,color:"#FF6B35"},{id:3,name:"Perfectionist",emoji:"⭐",unlocked:!1,hint:"Score 10/10 in any quiz",progress:75,color:"#9333EA"},{id:4,name:"Early Bird",emoji:"🌅",unlocked:!0,hint:"Play before 9 AM",progress:100,color:"#F59E0B"},{id:5,name:"Scholar",emoji:"🎓",unlocked:!1,hint:"Master 5 categories",progress:40,color:"#3B82F6"},{id:6,name:"Lightning",emoji:"⚡",unlocked:!1,hint:"Complete in under 2 minutes",progress:20,color:"#10B981"},{id:7,name:"Champion",emoji:"👑",unlocked:!1,hint:"Win 50 quizzes",progress:30,color:"#EC4899"},{id:8,name:"Explorer",emoji:"🗺️",unlocked:!1,hint:"Try all categories",progress:60,color:"#06B6D4"},{id:9,name:"Strategist",emoji:"🧠",unlocked:!0,hint:"Use 3 power-ups wisely",progress:100,color:"#8B5CF6"}];function Fv(){const[e,t]=d.useState(null),r=ba.filter(a=>a.unlocked).length,s=Math.round(r/ba.length*100);return n.jsxs("div",{className:"badges-screen",children:[n.jsx("style",{jsx:!0,children:`
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
      `}),n.jsxs("div",{className:"header",children:[n.jsx("button",{className:"back-button",onClick:()=>window.history.back(),children:"← Back"}),n.jsxs("div",{className:"title-section",children:[n.jsx("h1",{className:"main-title",children:"Badge Collection"}),n.jsx("p",{className:"subtitle",children:"Unlock achievements and show your skills"})]})]}),n.jsxs("div",{className:"progress-card",children:[n.jsxs("div",{className:"progress-header",children:[n.jsx("span",{className:"progress-label",children:"Collection Progress"}),n.jsxs("span",{className:"progress-value",children:[r,"/",ba.length]})]}),n.jsx("div",{className:"progress-bar-container",children:n.jsx("div",{className:"progress-bar-fill",style:{width:`${s}%`}})})]}),n.jsx("div",{className:"badges-grid",children:ba.map(a=>n.jsxs("div",{className:`badge-card ${a.unlocked?"unlocked":""}`,style:{"--badge-color":a.color},onClick:()=>t(a),children:[n.jsx("div",{className:"badge-glow"}),n.jsx("div",{className:"badge-emoji",children:a.emoji}),n.jsx("div",{className:"badge-name",children:a.name}),!a.unlocked&&n.jsxs(n.Fragment,{children:[n.jsx("div",{className:"badge-progress",children:n.jsx("div",{className:"badge-progress-fill",style:{width:`${a.progress}%`}})}),n.jsx("div",{className:"lock-indicator",children:"🔒"})]})]},a.id))}),n.jsxs("div",{className:"tips-card",children:[n.jsxs("div",{className:"tips-title",children:[n.jsx("span",{children:"💡"}),n.jsx("span",{children:"Pro Tip"})]}),n.jsx("div",{className:"tips-content",children:"Complete daily challenges and maintain streaks to unlock rare badges faster. Each badge gives you bonus XP and special rewards!"})]}),e&&n.jsx("div",{className:"badge-modal",onClick:()=>t(null),children:n.jsxs("div",{className:"modal-content",onClick:a=>a.stopPropagation(),children:[n.jsx("div",{className:`modal-badge ${e.unlocked?"":"locked"}`,children:e.emoji}),n.jsx("h3",{className:"modal-title",children:e.name}),n.jsx("span",{className:`modal-status ${e.unlocked?"":"locked"}`,children:e.unlocked?"✓ Unlocked":"🔒 Locked"}),n.jsx("p",{className:"modal-description",children:e.hint}),!e.unlocked&&n.jsxs("div",{className:"modal-progress-section",children:[n.jsx("div",{className:"modal-progress-label",children:"Progress"}),n.jsx("div",{className:"modal-progress-bar",children:n.jsx("div",{className:"modal-progress-fill",style:{width:`${e.progress}%`,"--badge-color":e.color}})}),n.jsxs("div",{className:"modal-progress-text",children:[e.progress,"%"]})]}),n.jsx("button",{className:"modal-close",onClick:()=>t(null),children:e.unlocked?"Awesome!":"Keep Going!"})]})})]})}const Ov=[{id:1,title:"Quiz Master",subtitle:"Play 10 quizzes",current:7,target:10,reward:150,claimed:!1,icon:"🎯",color:"#FF6B6B"},{id:2,title:"Coin Collector",subtitle:"Earn 2,000 coins",current:1240,target:2e3,reward:200,claimed:!1,icon:"💰",color:"#4ECDC4"},{id:3,title:"Winning Streak",subtitle:"Win 3 in a row",current:3,target:3,reward:100,claimed:!0,icon:"🔥",color:"#FFD93D"},{id:4,title:"Speed Demon",subtitle:"Complete 5 under 2min",current:2,target:5,reward:300,claimed:!1,icon:"⚡",color:"#A8E6CF"},{id:5,title:"Perfect Score",subtitle:"Get 100% accuracy",current:0,target:1,reward:250,claimed:!1,icon:"⭐",color:"#C7B8FF"}];function $v(){const{player:e,addCoins:t}=kn(),[r,s]=d.useState(Ov),[a,i]=d.useState(null),[o,l]=d.useState((e==null?void 0:e.coins)||0),[c,u]=d.useState(!1),[f,p]=d.useState([]),h=r.length,b=r.filter(C=>C.current>=C.target).length,v=Math.round(b/h*100);d.useEffect(()=>{const C=setInterval(()=>{p(y=>{const m={id:Date.now(),x:Math.random()*100,y:Math.random()*100,size:Math.random()*20+10};return[...y.slice(-4),m]})},3e3);return()=>clearInterval(C)},[]);const j=(C,y)=>{i(C),navigator.vibrate&&navigator.vibrate([20,10,20]),setTimeout(()=>{s(m=>m.map(x=>x.id===C?{...x,claimed:!0}:x)),l(m=>m+y),i(null),u(!0),setTimeout(()=>u(!1),2e3)},600)};return n.jsxs("div",{className:"achievements-screen",children:[n.jsx("style",{jsx:!0,children:`
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
      `}),n.jsxs("div",{className:"floating-shapes",children:[n.jsx("div",{className:"shape shape-1"}),n.jsx("div",{className:"shape shape-2"})]}),n.jsxs("div",{className:"header",children:[n.jsx("button",{className:"back-button",onClick:()=>window.history.back(),children:"← Back"}),n.jsxs("div",{className:"coins-display",children:["🪙 ",o.toLocaleString()]}),n.jsxs("div",{className:"title-section",children:[n.jsx("h1",{className:"main-title",children:"ACHIEVEMENTS"}),n.jsx("p",{className:"subtitle",children:"Complete challenges and earn awesome rewards!"})]})]}),n.jsxs("div",{className:"progress-overview",children:[n.jsx("div",{className:"card-glow",style:{"--card-color":"#FFD93D"}}),n.jsxs("div",{className:"overview-header",children:[n.jsx("span",{className:"overview-label",children:"🎮 Progress Tracker"}),n.jsxs("div",{className:"overview-stats",children:[n.jsx("span",{className:"trophy-icon",children:"🏆"}),n.jsxs("span",{className:"overview-value",children:[b,"/",h]})]})]}),n.jsx("div",{className:"progress-bar-main",children:n.jsx("div",{className:"progress-fill-main",style:{width:`${v}%`}})})]}),n.jsx("div",{className:"achievements-list",children:r.map(C=>{const y=Math.min(100,Math.round(C.current/C.target*100)),m=y===100,x=C.color+"CC";return n.jsxs("div",{className:`achievement-card ${m?"completed":""}`,style:{"--card-color":C.color,"--card-color-dark":x},children:[n.jsx("div",{className:"card-glow"}),m&&C.claimed&&n.jsx("div",{className:"completed-badge",children:"✓"}),n.jsxs("div",{className:"card-content",children:[n.jsx("div",{className:"achievement-icon",children:C.icon}),n.jsxs("div",{className:"achievement-details",children:[n.jsx("div",{className:"achievement-title",children:C.title}),n.jsx("div",{className:"achievement-subtitle",children:C.subtitle}),n.jsxs("div",{className:"progress-container",children:[n.jsx("div",{className:"progress-bar",children:n.jsx("div",{className:"progress-fill",style:{width:`${y}%`}})}),n.jsxs("div",{className:"progress-text",children:[n.jsxs("span",{children:[C.current,"/",C.target]}),n.jsxs("span",{className:"reward-badge",children:["🪙 ",C.reward]})]})]})]}),n.jsx("button",{onClick:()=>j(C.id,C.reward),disabled:!m||C.claimed,className:`claim-button ${C.claimed?"claimed":m?"can-claim":"in-progress"} ${a===C.id?"claiming":""}`,children:C.claimed?"✓":m?"CLAIM!":`${y}%`})]})]},C.id)})}),c&&n.jsx("div",{className:"celebration",children:"🎉"})]})}function Bv(){const{player:e,addCoins:t,updateDailyStreak:r}=kn(),s=(e==null?void 0:e.currentStreak)||0,a=(e==null?void 0:e.bestStreak)||0,i=(e==null?void 0:e.totalDays)||0,o=(e==null?void 0:e.coins)||0,l=Le(),c=new Date,u=c.getDay(),f=()=>{const D=new Date(c);return D.setDate(c.getDate()-c.getDay()),D.toISOString().split("T")[0]},[p,h]=d.useState(null),[b,v]=d.useState(!1),[j,C]=d.useState(null),[y,m]=d.useState(null),[x,E]=d.useState(!1),N=d.useRef(null),T=d.useRef(null),[S]=Ft("/sounds/coin.mp3",{volume:.75}),[g]=Ft("/sounds/correct.mp3",{volume:.6}),[w,k]=d.useState(()=>{const D=localStorage.getItem("streaks_claimed")||"[]",L=JSON.parse(D),A=f(),H=L.filter(re=>re!==`week_${A}_day_0`);return localStorage.setItem("streaks_claimed",JSON.stringify(H)),H});d.useEffect(()=>{const D=()=>{window.scrollTo(0,0),document.documentElement.scrollTop=0,document.body.scrollTop=0;const A=document.querySelector("main");A&&(A.scrollTop=0)};D(),requestAnimationFrame(D);const L=setTimeout(D,100);return()=>clearTimeout(L)},[]),d.useEffect(()=>{E(!0),setTimeout(()=>E(!1),3e3)},[]);const P=[{label:"Mon",short:"M",dayIndex:1},{label:"Tue",short:"T",dayIndex:2},{label:"Wed",short:"W",dayIndex:3},{label:"Thu",short:"T",dayIndex:4},{label:"Fri",short:"F",dayIndex:5},{label:"Sat",short:"S",dayIndex:6},{label:"Sun",short:"S",dayIndex:0}],F=[{day:0,reward:"10",type:"coins",icon:"🎯",label:"Welcome Bonus"},{day:1,reward:"50",type:"coins",icon:"🪙",label:"50 Coins"},{day:2,reward:"100",type:"coins",icon:"🪙",label:"100 Coins"},{day:3,reward:"2x",type:"xp",icon:"⭐",label:"2x XP Boost"},{day:4,reward:"150",type:"coins",icon:"🪙",label:"150 Coins"},{day:5,reward:"Full",type:"energy",icon:"⚡",label:"Energy Refill"},{day:6,reward:"200",type:"coins",icon:"🪙",label:"200 Coins"},{day:7,reward:"Mystery",type:"mystery",icon:"🎁",label:"Mystery Box"}],Y=D=>{const L=w.includes(`week_${f()}_day_${D}`);if(D===0)return{isCompleted:!0,isClaimed:L,canClaim:!L,isLocked:!1};const A=s>=D,H=A&&!L,re=s<D;return{isCompleted:A,isClaimed:L,canClaim:H,isLocked:re}},ee=(D,L,A)=>{const H=Y(L);if(H.isLocked){m({day:L,currentStreak:s}),setTimeout(()=>m(null),2e3);return}H.isClaimed||H.canClaim&&(h({...D,day:L}),v(!1),setTimeout(()=>{v(!0),g(),setTimeout(()=>{if(D.type==="coins"){const O=parseInt(D.reward);if(T.current&&N.current){const I=T.current.getBoundingClientRect();S(),C({startRect:I,count:10,amount:O})}}const re=`week_${f()}_day_${L}`,J=[...w,re];k(J),localStorage.setItem("streaks_claimed",JSON.stringify(J))},500),setTimeout(()=>{h(null),v(!1)},2500)},500))},Q=(D,L)=>{if(P[L].dayIndex===u)return s>0?"today-completed":"today-pending";if(L<P.findIndex(H=>H.dayIndex===u)){const H=P.findIndex(re=>re.dayIndex===u)-L;return s>=H?"completed":"missed"}else return"future"},U=[{days:3,emoji:"⚡",label:"Starter",achieved:s>=3},{days:7,emoji:"🔥",label:"Week Warrior",achieved:s>=7},{days:30,emoji:"💎",label:"Champion",achieved:s>=30},{days:100,emoji:"👑",label:"Legend",achieved:s>=100}],B=U.find(D=>D.days>s)||U[U.length-1],_=Math.min(100,s/B.days*100),M=()=>{window.location.href="/play"},q=()=>{l(-1)};return n.jsxs("div",{className:"streaks-screen",children:[n.jsx("style",{jsx:!0,children:`
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
      `}),j&&n.jsx(Ei,{startRect:j.startRect,targetRef:N,count:j.count,onDone:()=>{t(j.amount),C(null)}}),n.jsxs("div",{className:"header",children:[n.jsxs("div",{className:"header-top",children:[n.jsx("button",{className:"back-button",onClick:q,children:"← Back"}),n.jsxs("div",{className:"coin-pill",ref:N,id:"coin-pill",children:[n.jsx("span",{className:"coin-icon",children:"🪙"}),n.jsx("span",{className:"coin-amount",children:o})]})]}),n.jsxs("div",{className:"title-section",children:[n.jsx("h1",{className:"main-title",children:"STREAKS"}),n.jsx("p",{className:"subtitle",children:"Keep the fire burning!"})]})]}),n.jsxs("div",{className:"streak-hero",children:[n.jsx("div",{className:"fire-animation",children:"🔥"}),n.jsx("div",{className:"streak-number",children:s}),n.jsx("div",{className:"streak-label",children:"DAY STREAK"}),n.jsxs("div",{className:"stats-row",children:[n.jsxs("div",{className:"stat-card",children:[n.jsx("div",{className:"stat-value",children:a}),n.jsx("div",{className:"stat-label",children:"Best Streak"})]}),n.jsxs("div",{className:"stat-card",children:[n.jsx("div",{className:"stat-value",children:i}),n.jsx("div",{className:"stat-label",children:"Total Days"})]})]})]}),n.jsxs("div",{className:"weekly-progress-card",children:[n.jsxs("div",{className:"weekly-header",children:[n.jsx("div",{className:"weekly-title",children:"This Week's Progress"}),n.jsxs("div",{className:"weekly-counter",children:[n.jsx("span",{className:"weekly-counter-icon",children:"🔥"}),n.jsxs("span",{className:"weekly-counter-text",children:[Math.min(s,7),"/7"]})]})]}),n.jsx("div",{className:"weekly-days",children:P.map((D,L)=>{const A=Q(D.dayIndex,L),H=D.dayIndex===u;return n.jsxs("div",{className:"day-item",children:[n.jsx("div",{className:`day-circle ${A}`,children:A==="completed"||A==="today-completed"?"":D.short}),n.jsx("div",{className:`day-label ${H?"today":""}`,children:D.label})]},L)})}),n.jsx("div",{className:"milestone-header",children:"Daily Rewards"}),n.jsx("div",{className:"rewards-grid",children:F.map((D,L)=>{const A=Y(D.day);return n.jsxs("div",{className:`reward-item ${A.isLocked?"locked":A.canClaim?"can-claim":A.isClaimed?"completed":""}`,onClick:H=>ee(D,D.day),children:[n.jsxs("div",{className:"reward-day",children:["Day ",D.day]}),n.jsx("div",{className:"reward-icon",children:D.icon}),n.jsx("div",{className:"reward-text",children:D.label})]},L)})})]}),n.jsxs("div",{className:"milestone-section",children:[n.jsx("div",{className:"milestone-header",children:"Next Milestone"}),n.jsxs("div",{className:"milestone-progress",children:[n.jsxs("div",{className:"milestone-info",children:[n.jsxs("div",{className:"milestone-current",children:[n.jsx("span",{className:"milestone-emoji",children:B.emoji}),n.jsx("span",{className:"milestone-text",children:B.label})]}),n.jsxs("span",{className:"milestone-target",children:[s,"/",B.days," days"]})]}),n.jsx("div",{className:"progress-bar-container",children:n.jsx("div",{className:"progress-bar-fill",style:{width:`${_}%`}})})]})]}),n.jsx("div",{className:"motivational-text",children:s===0?"Start your journey! Claim your Day 0 bonus and complete a quiz!":`Day ${s} strong! Keep going to unlock more rewards!`}),n.jsxs("button",{className:"play-button",onClick:M,children:[n.jsx("span",{children:"Continue Streak"}),n.jsx("span",{children:"→"})]}),y&&n.jsxs("div",{className:"locked-message",children:[n.jsx("span",{className:"locked-message-icon",children:"🔒"}),n.jsx("span",{className:"locked-message-text",children:y.day===1&&y.currentStreak===0?"Complete your first quiz to unlock this reward!":`Reach Day ${y.day} streak to unlock this reward!`})]}),p&&n.jsxs(n.Fragment,{children:[n.jsx("div",{className:"modal-overlay"}),n.jsx("div",{className:"reward-modal",ref:T,children:n.jsxs("div",{className:"gift-box",children:[n.jsxs("div",{className:"gift-box-body",children:[n.jsx("div",{className:"gift-box-ribbon"}),n.jsx("div",{className:"gift-box-ribbon-horizontal"})]}),n.jsx("div",{className:`gift-box-lid ${b?"opening":""}`,children:n.jsx("div",{className:"gift-box-bow",children:"🎀"})}),n.jsxs("div",{className:`gift-content ${b?"show":""}`,children:[n.jsx("div",{className:"gift-content-icon",children:p.icon}),n.jsxs("div",{className:"gift-content-title",children:["Day ",p.day]}),n.jsx("div",{className:"gift-content-desc",children:p.label})]})]})})]}),x&&n.jsx("div",{className:"celebration",children:"🎉"})]})}const Uv=()=>{const e=new Date;return`${e.getFullYear()}-${e.getMonth()+1}-${e.getDate()}`},al=()=>{const e=localStorage.getItem("questProgress");return e?JSON.parse(e):{}},Wd=(e,t)=>{const r=al();r[e]=t,r.date=Uv(),localStorage.setItem("questProgress",JSON.stringify(r))};function qv(){const{player:e,addCoins:t}=kn(),r=Le(),s=nt(),a=al(),[i,o]=d.useState([{id:1,title:"Play 3 quizzes today",progress:a.dailyQuizzes||0,target:3,reward:60,claimed:a.dailyQuizzesClaimed||!1,icon:"🎮",color:"#FF6B6B",difficulty:"Easy",questType:"dailyQuizzes",route:"/quiz/play",routeParams:"?category=random&difficulty=random&from=quest"},{id:3,title:"Practice 15 questions",progress:a.practiceQuestions||0,target:15,reward:100,claimed:a.practiceQuestionsClaimed||!1,icon:"📚",color:"#FFD93D",difficulty:"Easy",questType:"practiceQuestions",route:"/practice/start",routeParams:"?questions=15&difficulty=easy&category=random&from=quest"},{id:4,title:"Win 5 in a row",progress:a.winStreak||0,target:5,reward:150,claimed:a.winStreakClaimed||!1,icon:"🔥",color:"#A8E6CF",difficulty:"Hard",questType:"winStreak",route:"/play",routeParams:"?mode=survival&from=quest"},{id:5,title:"Complete a speed run",progress:a.speedRun||0,target:1,reward:120,claimed:a.speedRunClaimed||!1,icon:"⚡",color:"#C7B8FF",difficulty:"Medium",questType:"speedRun",route:"/swipe/random-mix",routeParams:"?from=quest"}]),[l,c]=d.useState((e==null?void 0:e.coins)||0),[u,f]=d.useState(null),[p,h]=d.useState(0),b=d.useRef(null),[v,j]=d.useState(null);d.useEffect(()=>{const N=()=>{const S=al();o(g=>g.map(w=>{const k=w.questType;return S[k]!==void 0?{...w,progress:S[k]}:w}))};window.addEventListener("storage",N);const T=()=>N();return window.addEventListener("focus",T),()=>{window.removeEventListener("storage",N),window.removeEventListener("focus",T)}},[]),d.useEffect(()=>{const N=S=>{console.log("Quest progress update received:",S.detail),o(g=>g.map(w=>w.questType==="practiceQuestions"&&S.detail.practiceQuestions?{...w,progress:S.detail.practiceQuestions}:w))};window.addEventListener("questProgressUpdate",N);const T=setInterval(()=>{try{const S=localStorage.getItem("questProgress");if(S){const g=JSON.parse(S);o(w=>w.map(k=>k.questType==="practiceQuestions"&&g.practiceQuestions&&k.progress!==g.practiceQuestions?{...k,progress:g.practiceQuestions}:k))}}catch(S){console.error("Error checking progress:",S)}},1e3);return()=>{window.removeEventListener("questProgressUpdate",N),clearInterval(T)}},[]),d.useEffect(()=>{var N;if((N=s.state)!=null&&N.questCompleted){const{questType:T,increment:S}=s.state;o(g=>g.map(w=>{if(w.questType===T){const k=Math.min(w.progress+(S||1),w.target);return Wd(T,k),{...w,progress:k}}return w})),window.history.replaceState({},document.title)}},[s]),d.useEffect(()=>{const N=i.filter(T=>T.progress>=T.target).length;h(Math.round(N/i.length*100))},[i]),d.useEffect(()=>{c((e==null?void 0:e.coins)||0)},[e==null?void 0:e.coins]);const C=N=>{navigator.vibrate&&navigator.vibrate([20]),sessionStorage.setItem("activeQuest",JSON.stringify({id:N.id,type:N.questType,title:N.title,currentProgress:N.progress,target:N.target})),r(N.route+N.routeParams)},y=()=>{sessionStorage.getItem("questsFromHome")==="true"?(sessionStorage.removeItem("questsFromHome"),r("/")):r("/profile")},m=N=>{navigator.vibrate&&navigator.vibrate([20,10,20]);try{const T=new Audio("/sounds/coin.mp3");T.volume=.75,T.play()}catch{console.log("Sound not available")}f(N.id),j({startRect:{left:window.innerWidth/2-50,top:window.innerHeight/2,width:100,height:100},count:Math.min(N.reward/10,10),amount:N.reward}),setTimeout(()=>{o(T=>T.map(S=>S.id===N.id?(Wd(S.questType+"Claimed",!0),{...S,claimed:!0}):S)),f(null)},600)},x=N=>{switch(N){case"Easy":return"#10B981";case"Medium":return"#F59E0B";case"Hard":return"#EF4444";default:return"#6B7280"}},E=()=>{const N=new Date,T=new Date(N);T.setDate(T.getDate()+1),T.setHours(5,0,0,0);const S=T-N,g=Math.floor(S/(1e3*60*60)),w=Math.floor(S%(1e3*60*60)/(1e3*60));return`${g}h ${w}m`};return n.jsxs("div",{className:"quests-screen",children:[v&&n.jsx(Ei,{startRect:v.startRect,targetRef:b,count:v.count,onDone:()=>{c(N=>N+v.amount),t(v.amount),j(null)}}),n.jsx("style",{jsx:!0,children:`
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
      `}),n.jsxs("div",{className:"animated-bg",children:[n.jsx("div",{className:"floating-icon",children:"🎮"}),n.jsx("div",{className:"floating-icon",children:"🎯"}),n.jsx("div",{className:"floating-icon",children:"🏆"}),n.jsx("div",{className:"floating-icon",children:"⭐"})]}),n.jsxs("div",{className:"header",children:[n.jsx("button",{className:"back-button",onClick:y,children:"← Back"}),n.jsxs("div",{className:"coins-display",ref:b,children:["🪙 ",l]}),n.jsxs("div",{className:"title-section",children:[n.jsx("h1",{className:"main-title",children:"Daily Quests"}),n.jsx("p",{className:"subtitle",children:"Complete challenges, earn rewards!"})]})]}),n.jsxs("div",{className:"daily-progress-card",children:[n.jsxs("div",{className:"progress-header",children:[n.jsx("span",{className:"progress-label",children:"Today's Progress"}),n.jsxs("span",{className:"progress-value",children:[p,"%"]})]}),n.jsx("div",{className:"progress-bar-container",children:n.jsx("div",{className:"progress-bar-fill",style:{width:`${p}%`}})})]}),n.jsx("div",{className:"quests-list",children:i.map(N=>{const T=Math.min(100,Math.round(N.progress/N.target*100)),S=T===100,g=N.color+"CC";return n.jsxs("div",{className:`quest-card ${S?"completed":""}`,style:{"--quest-color":N.color,"--quest-color-dark":g},children:[n.jsx("div",{className:"quest-accent"}),S&&N.claimed&&n.jsx("div",{className:"completed-checkmark",children:"✓"}),n.jsxs("div",{className:"quest-content",children:[n.jsx("div",{className:`quest-icon-container ${u===N.id?"animating":""}`,children:N.icon}),n.jsxs("div",{className:"quest-details",children:[n.jsxs("div",{className:"quest-header",children:[n.jsx("span",{className:"quest-title",children:N.title}),n.jsx("span",{className:"difficulty-badge",style:{background:`${x(N.difficulty)}20`,color:x(N.difficulty)},children:N.difficulty})]}),n.jsxs("div",{className:"progress-info",children:[n.jsx("div",{className:"mini-progress-bar",children:n.jsx("div",{className:"mini-progress-fill",style:{width:`${T}%`}})}),n.jsxs("div",{className:"progress-text",children:[n.jsxs("span",{className:"progress-numbers",children:[N.progress,"/",N.target]}),n.jsxs("span",{className:"reward-display",children:["🪙 ",N.reward]})]})]})]}),n.jsx("button",{onClick:()=>{S&&!N.claimed?m(N):S||C(N)},disabled:N.claimed,className:`action-button ${N.claimed?"claimed":S?"can-claim":"in-progress"}`,style:!S&&!N.claimed?{"--quest-color":N.color,"--quest-color-dark":g}:{},children:N.claimed?"✓":S?"Claim":"Do it"})]})]},N.id)})}),n.jsxs("div",{className:"timer-card",children:[n.jsx("div",{className:"timer-icon",children:"⏰"}),n.jsx("div",{className:"timer-label",children:"New Quests In"}),n.jsx("div",{className:"timer-value",children:E()})]}),u&&n.jsx("div",{className:"reward-animation",children:"🪙"})]})}function Qv({title:e,subtitle:t,children:r}){const s=Le();return n.jsxs("div",{className:"min-h-full bg-black text-white px-4 pt-12",children:[n.jsxs("div",{className:"flex items-center justify-between mb-4",children:[n.jsx("button",{onClick:()=>s(-1),className:"px-3 py-1.5 rounded-xl border border-white/10 bg-white/5 text-sm",children:"← Back"}),n.jsxs("div",{className:"text-center",children:[n.jsx("div",{className:"text-base font-semibold leading-tight",children:e}),t&&n.jsx("div",{className:"text-xs text-white/60 leading-tight",children:t})]}),n.jsx("div",{className:"w-[68px]"})]}),r]})}function Yv(){const e=Le(),[t,r]=d.useState(!0),[s,a]=d.useState(!0),[i,o]=d.useState(!0);return n.jsxs(Qv,{title:"Settings",subtitle:"Make it yours",children:[n.jsxs("div",{className:"rounded-2xl border border-white/10 bg-white/5 divide-y divide-white/10",children:[n.jsx(ds,{label:"Sound",right:n.jsx(io,{on:t,set:r})}),n.jsx(ds,{label:"Haptics",right:n.jsx(io,{on:s,set:a})}),n.jsx(ds,{label:"Notifications",right:n.jsx(io,{on:i,set:o})}),n.jsx(ds,{label:"Edit Profile",right:n.jsx("span",{className:"text-white/60",children:"→"}),onClick:()=>e("/profile")}),n.jsx(ds,{label:"Privacy Policy",right:n.jsx("span",{className:"text-white/60",children:"→"}),onClick:()=>window.open("#","_blank")})]}),n.jsx("button",{className:`mt-3 w-full rounded-2xl border border-white/10 bg-white/5 py-3 text-red-300 font-semibold
                   transition-transform duration-150 active:scale-[0.99]`,onClick:()=>alert("Sign out hook here"),children:"Sign out"})]})}function ds({label:e,right:t,onClick:r}){return n.jsxs("button",{type:"button",onClick:r,className:`w-full flex items-center justify-between px-4 py-4 text-left
                 hover:bg-white/5 first:rounded-t-2xl last:rounded-b-2xl transition`,children:[n.jsx("span",{className:"text-sm font-semibold",children:e}),t]})}function io({on:e,set:t}){return n.jsx("span",{onClick:r=>{r.stopPropagation(),t(s=>!s),navigator.vibrate&&navigator.vibrate(10)},className:["inline-flex w-11 h-6 items-center rounded-full border transition px-0.5",e?"bg-lime-400 border-lime-400 justify-end":"bg-white/10 border-white/10 justify-start"].join(" "),role:"switch","aria-checked":e,children:n.jsx("span",{className:["w-5 h-5 rounded-full bg-white",e?"":"bg-white"].join(" ")})})}/*! Capacitor: https://capacitorjs.com/ - MIT License */var Qr;(function(e){e.Unimplemented="UNIMPLEMENTED",e.Unavailable="UNAVAILABLE"})(Qr||(Qr={}));class oo extends Error{constructor(t,r,s){super(t),this.message=t,this.code=r,this.data=s}}const Wv=e=>{var t,r;return e!=null&&e.androidBridge?"android":!((r=(t=e==null?void 0:e.webkit)===null||t===void 0?void 0:t.messageHandlers)===null||r===void 0)&&r.bridge?"ios":"web"},Hv=e=>{const t=e.CapacitorCustomPlatform||null,r=e.Capacitor||{},s=r.Plugins=r.Plugins||{},a=()=>t!==null?t.name:Wv(e),i=()=>a()!=="web",o=p=>{const h=u.get(p);return!!(h!=null&&h.platforms.has(a())||l(p))},l=p=>{var h;return(h=r.PluginHeaders)===null||h===void 0?void 0:h.find(b=>b.name===p)},c=p=>e.console.error(p),u=new Map,f=(p,h={})=>{const b=u.get(p);if(b)return console.warn(`Capacitor plugin "${p}" already registered. Cannot register plugins twice.`),b.proxy;const v=a(),j=l(p);let C;const y=async()=>(!C&&v in h?C=typeof h[v]=="function"?C=await h[v]():C=h[v]:t!==null&&!C&&"web"in h&&(C=typeof h.web=="function"?C=await h.web():C=h.web),C),m=(g,w)=>{var k,P;if(j){const F=j==null?void 0:j.methods.find(Y=>w===Y.name);if(F)return F.rtype==="promise"?Y=>r.nativePromise(p,w.toString(),Y):(Y,ee)=>r.nativeCallback(p,w.toString(),Y,ee);if(g)return(k=g[w])===null||k===void 0?void 0:k.bind(g)}else{if(g)return(P=g[w])===null||P===void 0?void 0:P.bind(g);throw new oo(`"${p}" plugin is not implemented on ${v}`,Qr.Unimplemented)}},x=g=>{let w;const k=(...P)=>{const F=y().then(Y=>{const ee=m(Y,g);if(ee){const Q=ee(...P);return w=Q==null?void 0:Q.remove,Q}else throw new oo(`"${p}.${g}()" is not implemented on ${v}`,Qr.Unimplemented)});return g==="addListener"&&(F.remove=async()=>w()),F};return k.toString=()=>`${g.toString()}() { [capacitor code] }`,Object.defineProperty(k,"name",{value:g,writable:!1,configurable:!1}),k},E=x("addListener"),N=x("removeListener"),T=(g,w)=>{const k=E({eventName:g},w),P=async()=>{const Y=await k;N({eventName:g,callbackId:Y},w)},F=new Promise(Y=>k.then(()=>Y({remove:P})));return F.remove=async()=>{console.warn("Using addListener() without 'await' is deprecated."),await P()},F},S=new Proxy({},{get(g,w){switch(w){case"$$typeof":return;case"toJSON":return()=>({});case"addListener":return j?T:E;case"removeListener":return N;default:return x(w)}}});return s[p]=S,u.set(p,{name:p,proxy:S,platforms:new Set([...Object.keys(h),...j?[v]:[]])}),S};return r.convertFileSrc||(r.convertFileSrc=p=>p),r.getPlatform=a,r.handleError=c,r.isNativePlatform=i,r.isPluginAvailable=o,r.registerPlugin=f,r.Exception=oo,r.DEBUG=!!r.DEBUG,r.isLoggingEnabled=!!r.isLoggingEnabled,r},Gv=e=>e.Capacitor=Hv(e),il=Gv(typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}),mc=il.registerPlugin;class Mm{constructor(){this.listeners={},this.retainedEventArguments={},this.windowListeners={}}addListener(t,r){let s=!1;this.listeners[t]||(this.listeners[t]=[],s=!0),this.listeners[t].push(r);const i=this.windowListeners[t];i&&!i.registered&&this.addWindowListener(i),s&&this.sendRetainedArgumentsForEvent(t);const o=async()=>this.removeListener(t,r);return Promise.resolve({remove:o})}async removeAllListeners(){this.listeners={};for(const t in this.windowListeners)this.removeWindowListener(this.windowListeners[t]);this.windowListeners={}}notifyListeners(t,r,s){const a=this.listeners[t];if(!a){if(s){let i=this.retainedEventArguments[t];i||(i=[]),i.push(r),this.retainedEventArguments[t]=i}return}a.forEach(i=>i(r))}hasListeners(t){var r;return!!(!((r=this.listeners[t])===null||r===void 0)&&r.length)}registerWindowListener(t,r){this.windowListeners[r]={registered:!1,windowEventName:t,pluginEventName:r,handler:s=>{this.notifyListeners(r,s)}}}unimplemented(t="not implemented"){return new il.Exception(t,Qr.Unimplemented)}unavailable(t="not available"){return new il.Exception(t,Qr.Unavailable)}async removeListener(t,r){const s=this.listeners[t];if(!s)return;const a=s.indexOf(r);this.listeners[t].splice(a,1),this.listeners[t].length||this.removeWindowListener(this.windowListeners[t])}addWindowListener(t){window.addEventListener(t.windowEventName,t.handler),t.registered=!0}removeWindowListener(t){t&&(window.removeEventListener(t.windowEventName,t.handler),t.registered=!1)}sendRetainedArgumentsForEvent(t){const r=this.retainedEventArguments[t];r&&(delete this.retainedEventArguments[t],r.forEach(s=>{this.notifyListeners(t,s)}))}}const Hd=e=>encodeURIComponent(e).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape),Gd=e=>e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent);class Vv extends Mm{async getCookies(){const t=document.cookie,r={};return t.split(";").forEach(s=>{if(s.length<=0)return;let[a,i]=s.replace(/=/,"CAP_COOKIE").split("CAP_COOKIE");a=Gd(a).trim(),i=Gd(i).trim(),r[a]=i}),r}async setCookie(t){try{const r=Hd(t.key),s=Hd(t.value),a=`; expires=${(t.expires||"").replace("expires=","")}`,i=(t.path||"/").replace("path=",""),o=t.url!=null&&t.url.length>0?`domain=${t.url}`:"";document.cookie=`${r}=${s||""}${a}; path=${i}; ${o};`}catch(r){return Promise.reject(r)}}async deleteCookie(t){try{document.cookie=`${t.key}=; Max-Age=0`}catch(r){return Promise.reject(r)}}async clearCookies(){try{const t=document.cookie.split(";")||[];for(const r of t)document.cookie=r.replace(/^ +/,"").replace(/=.*/,`=;expires=${new Date().toUTCString()};path=/`)}catch(t){return Promise.reject(t)}}async clearAllCookies(){try{await this.clearCookies()}catch(t){return Promise.reject(t)}}}mc("CapacitorCookies",{web:()=>new Vv});const Xv=async e=>new Promise((t,r)=>{const s=new FileReader;s.onload=()=>{const a=s.result;t(a.indexOf(",")>=0?a.split(",")[1]:a)},s.onerror=a=>r(a),s.readAsDataURL(e)}),Kv=(e={})=>{const t=Object.keys(e);return Object.keys(e).map(a=>a.toLocaleLowerCase()).reduce((a,i,o)=>(a[i]=e[t[o]],a),{})},Jv=(e,t=!0)=>e?Object.entries(e).reduce((s,a)=>{const[i,o]=a;let l,c;return Array.isArray(o)?(c="",o.forEach(u=>{l=t?encodeURIComponent(u):u,c+=`${i}=${l}&`}),c.slice(0,-1)):(l=t?encodeURIComponent(o):o,c=`${i}=${l}`),`${s}&${c}`},"").substr(1):null,Zv=(e,t={})=>{const r=Object.assign({method:e.method||"GET",headers:e.headers},t),a=Kv(e.headers)["content-type"]||"";if(typeof e.data=="string")r.body=e.data;else if(a.includes("application/x-www-form-urlencoded")){const i=new URLSearchParams;for(const[o,l]of Object.entries(e.data||{}))i.set(o,l);r.body=i.toString()}else if(a.includes("multipart/form-data")||e.data instanceof FormData){const i=new FormData;if(e.data instanceof FormData)e.data.forEach((l,c)=>{i.append(c,l)});else for(const l of Object.keys(e.data))i.append(l,e.data[l]);r.body=i;const o=new Headers(r.headers);o.delete("content-type"),r.headers=o}else(a.includes("application/json")||typeof e.data=="object")&&(r.body=JSON.stringify(e.data));return r};class ey extends Mm{async request(t){const r=Zv(t,t.webFetchExtra),s=Jv(t.params,t.shouldEncodeUrlParams),a=s?`${t.url}?${s}`:t.url,i=await fetch(a,r),o=i.headers.get("content-type")||"";let{responseType:l="text"}=i.ok?t:{};o.includes("application/json")&&(l="json");let c,u;switch(l){case"arraybuffer":case"blob":u=await i.blob(),c=await Xv(u);break;case"json":c=await i.json();break;case"document":case"text":default:c=await i.text()}const f={};return i.headers.forEach((p,h)=>{f[h]=p}),{data:c,headers:f,status:i.status,url:i.url}}async get(t){return this.request(Object.assign(Object.assign({},t),{method:"GET"}))}async post(t){return this.request(Object.assign(Object.assign({},t),{method:"POST"}))}async put(t){return this.request(Object.assign(Object.assign({},t),{method:"PUT"}))}async patch(t){return this.request(Object.assign(Object.assign({},t),{method:"PATCH"}))}async delete(t){return this.request(Object.assign(Object.assign({},t),{method:"DELETE"}))}}mc("CapacitorHttp",{web:()=>new ey});const Vd=mc("App",{web:()=>tc(()=>import("./web-956b7305.js"),[]).then(e=>new e.AppWeb)}),ty=async e=>!!JSON.parse(localStorage.getItem("users")||"{}")[e],ny=(e,t)=>{const r=JSON.parse(localStorage.getItem("users")||"{}");r[e]=t,localStorage.setItem("users",JSON.stringify(r))},ry=e=>JSON.parse(localStorage.getItem("users")||"{}")[e],sy=()=>!!localStorage.getItem("currentUser");function ay(){const e=Le(),t=nt(),[r,s]=d.useState(()=>{var p;return sessionStorage.getItem("tempPhone")||((p=t.state)==null?void 0:p.phone)||""}),[a,i]=d.useState(()=>sessionStorage.getItem("tempCountryCode")||"+91"),[o,l]=d.useState(!1),[c,u]=d.useState("");d.useEffect(()=>{sessionStorage.setItem("tempPhone",r),sessionStorage.setItem("tempCountryCode",a)},[r,a]);const f=async()=>{u("");const p=r.replace(/\D/g,"");if(p.length!==10){u("Please enter a 10 digit phone number");return}l(!0);const h=a+p;await ty(h)?e("/auth/signin",{state:{phone:h}}):e("/auth/avatar",{state:{phone:h}}),l(!1)};return n.jsxs("div",{className:"auth-screen",style:{background:"linear-gradient(135deg, #aa529bff 0%, #6d4397ff 100%)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},children:[n.jsxs("div",{className:"decorative-icons",children:[n.jsx("div",{className:"floating-icon",style:{top:"5%",left:"10%",animationDelay:"0s"},children:"🎮"}),n.jsx("div",{className:"floating-icon",style:{top:"15%",right:"10%",animationDelay:"5s"},children:"🏆"}),n.jsx("div",{className:"floating-icon",style:{top:"20%",left:"15%",animationDelay:"10s"},children:"⭐"}),n.jsx("div",{className:"floating-icon",style:{top:"75%",right:"20%",animationDelay:"15s"},children:"🎯"}),n.jsx("div",{className:"floating-icon",style:{top:"85%",left:"25%",animationDelay:"20s"},children:"🪙"})]}),n.jsx("div",{className:"mascot",style:{display:"flex",alignItems:"center",justifyContent:"center",marginBottom:"24px"},children:n.jsx("div",{style:{fontSize:"100px"},children:"🎮"})}),n.jsxs("div",{className:"content-card",children:[n.jsx("h1",{className:"title",children:"Ready to Play?"}),n.jsx("p",{className:"subtitle",children:"Enter your phone to start!"}),n.jsxs("div",{className:"phone-input-group",style:{display:"flex",gap:"8px",marginBottom:"24px",alignItems:"center",justifyContent:"center"},children:[n.jsxs("select",{className:"country-select",value:a,onChange:p=>i(p.target.value),style:{width:"auto",minWidth:"95px",padding:"16px 8px",border:"2px solid #e2e8f0",borderRadius:"16px",fontSize:"16px",fontWeight:"600",background:"white",transition:"all 0.3s",color:"#333",textAlign:"center"},children:[n.jsx("option",{value:"+91",children:"🇮🇳 +91"}),n.jsx("option",{value:"+1",children:"🇺🇸 +1"}),n.jsx("option",{value:"+44",children:"🇬🇧 +44"}),n.jsx("option",{value:"+86",children:"🇨🇳 +86"}),n.jsx("option",{value:"+81",children:"🇯🇵 +81"})]}),n.jsx("input",{type:"tel",className:"phone-input",placeholder:"Phone number",value:r,onChange:p=>{const h=p.target.value.replace(/\D/g,"");h.length<=10&&(s(h),c&&u(""))},maxLength:"10",inputMode:"numeric",pattern:"[0-9]*",style:{flex:1,padding:"16px",paddingLeft:"12px",border:"2px solid #e2e8f0",borderRadius:"16px",fontSize:"18px",fontWeight:"600",transition:"all 0.3s",background:"white",color:"#333",WebkitTextFillColor:"#333"}})]}),r.length>0&&r.length<10&&n.jsxs("p",{style:{color:"#f59e0b",fontSize:"14px",textAlign:"center",marginTop:"-16px",marginBottom:"16px"},children:["Enter ",10-r.length," more digit",10-r.length>1?"s":""]}),n.jsxs("button",{className:"submit-button",onClick:f,disabled:o,style:{width:"100%",padding:"18px",background:r.length===10?"linear-gradient(135deg, #667eea 0%, #764ba2 100%)":"linear-gradient(135deg, #94a3b8 0%, #cbd5e1 100%)",color:"white",border:"none",borderRadius:"16px",fontSize:"18px",fontWeight:"700",cursor:r.length===10?"pointer":"not-allowed",transition:"all 0.3s",display:"flex",alignItems:"center",justifyContent:"center",gap:"8px"},children:[o?"Loading...":"Start Adventure!",n.jsx("span",{children:"→"})]}),c&&n.jsx("p",{className:"error-message",style:{color:"#ef4444",fontSize:"14px",textAlign:"center",marginTop:"12px",fontWeight:"600"},children:c})]})]})}function iy(){const e=nt(),t=Le(),{phone:r}=e.state||{},[s,a]=d.useState(""),[i,o]=d.useState(!1),[l,c]=d.useState(""),[u,f]=d.useState(!1),[p,h]=d.useState(!1),b=ry(r);d.useEffect(()=>{localStorage.getItem("rememberCredentials")==="true"&&h(!0)},[]);const v=async()=>{if(!s){c("Please enter your password");return}f(!0),c(""),await new Promise(m=>setTimeout(m,500)),b&&b.password===s?(localStorage.setItem("currentUser",JSON.stringify({phone:r,username:b.username,avatar:b.avatar})),p&&localStorage.setItem("rememberCredentials","true"),t("/",{replace:!0})):(c("Wrong password"),f(!1),setTimeout(()=>c(""),3e3))},j=()=>{t("/auth/otp",{state:{phone:r}})},C=()=>{t("/auth",{state:{phone:r}})},y=m=>{m.key==="Enter"&&v()};return n.jsxs("div",{className:"auth-screen",style:{background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)"},children:[n.jsx("button",{className:"back-button",onClick:C,style:{position:"absolute",top:"20px",left:"20px",background:"rgba(255,255,255,0.2)",border:"none",borderRadius:"50%",width:"40px",height:"40px",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",zIndex:10,backdropFilter:"blur(10px)",transition:"all 0.3s ease"},onMouseEnter:m=>m.target.style.background="rgba(255,255,255,0.3)",onMouseLeave:m=>m.target.style.background="rgba(255,255,255,0.2)",children:n.jsx("span",{style:{fontSize:"24px",color:"white"},children:"‹"})}),n.jsxs("div",{className:"decorative-icons",children:[n.jsx("div",{className:"floating-icon",style:{top:"10%",left:"5%",animationDelay:"0s"},children:"🎮"}),n.jsx("div",{className:"floating-icon",style:{top:"20%",right:"10%",animationDelay:"2s"},children:"🏆"}),n.jsx("div",{className:"floating-icon",style:{top:"70%",left:"8%",animationDelay:"4s"},children:"⭐"}),n.jsx("div",{className:"floating-icon",style:{top:"80%",right:"5%",animationDelay:"6s"},children:"🎯"})]}),n.jsxs("div",{className:"content-card",style:{background:"rgba(255, 255, 255, 0.95)",backdropFilter:"blur(20px)",borderRadius:"32px",padding:"32px",width:"90%",maxWidth:"400px",boxShadow:"0 20px 60px rgba(0, 0, 0, 0.3)",margin:"0 auto"},children:[(b==null?void 0:b.avatar)&&n.jsx("div",{style:{fontSize:"60px",textAlign:"center",marginBottom:"16px",animation:"bounce 2s infinite"},children:b.avatar.emoji}),n.jsxs("div",{className:"welcome-back",children:[n.jsx("h1",{className:"title",style:{fontSize:"28px",fontWeight:"800",textAlign:"center",marginBottom:"8px",background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"},children:"Welcome Back! 👋"}),n.jsx("p",{className:"subtitle",style:{fontSize:"16px",color:"#64748b",textAlign:"center",marginBottom:"24px"},children:b!=null&&b.username?`Hey ${b.username}!`:"Good to see you again!"})]}),n.jsx("div",{className:"phone-display",style:{fontSize:"18px",fontWeight:"600",color:"#667eea",marginBottom:"24px",textAlign:"center",padding:"12px",background:"rgba(102, 126, 234, 0.1)",borderRadius:"12px"},children:r}),n.jsxs("div",{style:{position:"relative",marginBottom:"16px"},children:[n.jsx("input",{type:i?"text":"password",className:"phone-input",placeholder:"Enter your password",value:s,onChange:m=>{a(m.target.value),l&&c("")},onKeyPress:y,style:{width:"100%",paddingRight:"45px",border:l?"2px solid #ef4444":"2px solid #e2e8f0",color:"#333",fontSize:"16px",WebkitTextFillColor:"#333",backgroundColor:"white"},autoFocus:!0}),n.jsx("button",{type:"button",onClick:()=>o(!i),style:{position:"absolute",right:"12px",top:"50%",transform:"translateY(-50%)",background:"none",border:"none",cursor:"pointer",padding:"5px",fontSize:"20px",color:"#667eea"},"aria-label":i?"Hide password":"Show password",children:i?"👁️":"👁️‍🗨️"})]}),n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",marginBottom:"20px"},children:[n.jsx("input",{type:"checkbox",id:"rememberMe",checked:p,onChange:m=>h(m.target.checked),style:{width:"18px",height:"18px",cursor:"pointer",accentColor:"#667eea"}}),n.jsx("label",{htmlFor:"rememberMe",style:{fontSize:"14px",color:"#64748b",cursor:"pointer",userSelect:"none"},children:"Remember me"})]}),l&&n.jsxs("div",{style:{color:"#f59e0b",fontSize:"13px",textAlign:"center",marginTop:"-12px",marginBottom:"16px",fontWeight:"500"},children:["⚠️ ",l]}),n.jsx("button",{className:"submit-button",onClick:v,disabled:u,style:{width:"100%",padding:"18px",background:u?"linear-gradient(135deg, #94a3b8 0%, #cbd5e1 100%)":"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",color:"white",border:"none",borderRadius:"16px",fontSize:"18px",fontWeight:"700",cursor:u?"not-allowed":"pointer",transition:"all 0.3s",display:"flex",alignItems:"center",justifyContent:"center",gap:"8px",marginBottom:"20px"},children:u?n.jsxs(n.Fragment,{children:[n.jsx("span",{children:"Signing in..."}),n.jsx("span",{className:"animate-spin",children:"⚙️"})]}):n.jsxs(n.Fragment,{children:[n.jsx("span",{children:"Sign In"}),n.jsx("span",{children:"🎮"})]})}),n.jsx("div",{className:"divider",style:{textAlign:"center",margin:"20px 0",position:"relative"},children:n.jsx("span",{className:"divider-text",style:{background:"rgba(255, 255, 255, 0.95)",padding:"0 16px",position:"relative",color:"#94a3b8",fontSize:"14px"},children:"OR"})}),n.jsx("button",{className:"otp-button",onClick:j,style:{width:"100%",padding:"16px",background:"white",border:"2px solid #e2e8f0",borderRadius:"16px",fontSize:"16px",fontWeight:"600",color:"#667eea",cursor:"pointer",transition:"all 0.3s"},onMouseEnter:m=>{m.currentTarget.style.background="rgba(102, 126, 234, 0.05)",m.currentTarget.style.borderColor="#667eea"},onMouseLeave:m=>{m.currentTarget.style.background="white",m.currentTarget.style.borderColor="#e2e8f0"},children:"Send OTP Instead"}),n.jsx("div",{style:{textAlign:"center",marginTop:"20px"},children:n.jsx("a",{href:"#",onClick:m=>{m.preventDefault()},style:{color:"#667eea",fontSize:"14px",textDecoration:"none",fontWeight:"600"},children:"Forgot password?"})})]}),n.jsx("style",{jsx:!0,children:`
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
      `})]})}function oy(){const e=nt(),t=Le(),{phone:r}=e.state||{},[s,a]=d.useState(()=>{var c;if((c=e.state)!=null&&c.avatar)return e.state.avatar;const l=sessionStorage.getItem("tempAvatar");return l?JSON.parse(l):null}),i=[{id:1,emoji:"🤖",name:"Robot",color:"#667eea"},{id:2,emoji:"🦄",name:"Unicorn",color:"#ec4899"},{id:3,emoji:"🐉",name:"Dragon",color:"#10b981"},{id:4,emoji:"🧙",name:"Wizard",color:"#8b5cf6"},{id:5,emoji:"👨‍🚀",name:"Astronaut",color:"#3b82f6"},{id:6,emoji:"🥷",name:"Ninja",color:"#1f2937"}];d.useEffect(()=>{s&&sessionStorage.setItem("tempAvatar",JSON.stringify(s))},[s]);const o=()=>{s&&t("/auth/username",{state:{phone:r,avatar:s}})};return n.jsxs("div",{className:"auth-screen",style:{background:"linear-gradient(135deg, #1e3a8a 0%, #3730a3 35%, #6d28d9 70%, #a78bfa 100%)"},children:[n.jsx("button",{className:"back-button",onClick:()=>t("/auth",{state:{phone:r}}),style:{position:"absolute",top:"20px",left:"20px",background:"rgba(255,255,255,0.15)",border:"none",borderRadius:"50%",width:"40px",height:"40px",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",zIndex:10,backdropFilter:"blur(10px)",transition:"all 0.3s ease"},onMouseEnter:l=>l.target.style.background="rgba(255,255,255,0.25)",onMouseLeave:l=>l.target.style.background="rgba(255,255,255,0.15)",children:n.jsx("span",{style:{fontSize:"24px",color:"rgba(194, 128, 190, 0.9)"},children:"‹"})}),n.jsxs("div",{className:"content-card",style:{background:"rgba(248, 250, 252, 0.95)",backdropFilter:"blur(20px)",borderRadius:"32px",padding:"24px 20px",width:"95%",maxWidth:"100%",boxShadow:"0 20px 60px rgba(0, 0, 0, 0.3)"},children:[n.jsxs("div",{className:"progress-dots",children:[n.jsx("div",{className:"dot active",style:{background:"#3730a3"}}),n.jsx("div",{className:"dot",style:{background:"#bf89ceff"}})]}),n.jsx("h1",{className:"title",style:{fontSize:"28px",fontWeight:"800",textAlign:"center",marginBottom:"8px",background:"linear-gradient(135deg, #1e3a8a 0%, #6d28d9 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"},children:"Pick Your Hero!"}),n.jsx("p",{className:"subtitle",style:{fontSize:"16px",color:"#64748b",textAlign:"center",marginBottom:"32px"},children:"Choose your quiz champion"}),n.jsx("div",{className:"avatar-grid",style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"10px",marginBottom:"32px",padding:"0",maxWidth:"500px",margin:"0 auto 32px auto"},children:i.map(l=>n.jsxs("div",{className:`avatar-card ${(s==null?void 0:s.id)===l.id?"selected":""}`,onClick:()=>a(l),style:{aspectRatio:"1",borderRadius:"20px",background:(s==null?void 0:s.id)===l.id?"linear-gradient(135deg, rgba(55, 48, 163, 0.1), rgba(109, 40, 217, 0.1))":"white",border:(s==null?void 0:s.id)===l.id?"3px solid #3730a3":"3px solid transparent",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",cursor:"pointer",transition:"all 0.3s",boxShadow:(s==null?void 0:s.id)===l.id?"0 4px 20px rgba(55, 48, 163, 0.2)":"0 2px 10px rgba(0, 0, 0, 0.05)",transform:(s==null?void 0:s.id)===l.id?"scale(1.05)":"scale(1)"},onMouseEnter:c=>{(s==null?void 0:s.id)!==l.id&&(c.currentTarget.style.transform="scale(1.05)",c.currentTarget.style.boxShadow="0 4px 20px rgba(55, 48, 163, 0.15)")},onMouseLeave:c=>{(s==null?void 0:s.id)!==l.id&&(c.currentTarget.style.transform="scale(1)",c.currentTarget.style.boxShadow="0 2px 10px rgba(0, 0, 0, 0.05)")},children:[n.jsx("div",{className:"avatar-emoji",style:{fontSize:"40px",marginBottom:"8px"},children:l.emoji}),n.jsx("div",{className:"avatar-name",style:{fontSize:"14px",fontWeight:"600",color:(s==null?void 0:s.id)===l.id?"#3730a3":"#64748b"},children:l.name})]},l.id))}),n.jsxs("button",{className:"submit-button",disabled:!s,onClick:o,style:{width:"100%",padding:"18px",background:s?"linear-gradient(135deg, #3730a3 0%, #6d28d9 100%)":"linear-gradient(135deg, #94a3b8 0%, #cbd5e1 100%)",color:"white",border:"none",borderRadius:"16px",fontSize:"18px",fontWeight:"700",cursor:s?"pointer":"not-allowed",transition:"all 0.3s",display:"flex",alignItems:"center",justifyContent:"center",gap:"8px",boxShadow:s?"0 4px 20px rgba(55, 48, 163, 0.3)":"none"},onMouseEnter:l=>{s&&(l.currentTarget.style.transform="translateY(-2px)",l.currentTarget.style.boxShadow="0 6px 30px rgba(55, 48, 163, 0.4)")},onMouseLeave:l=>{s&&(l.currentTarget.style.transform="translateY(0)",l.currentTarget.style.boxShadow="0 4px 20px rgba(55, 48, 163, 0.3)")},children:["Continue",n.jsx("span",{children:"→"})]})]})]})}function ly(){const e=nt(),t=Le(),{phone:r,avatar:s}=e.state||{},[a,i]=d.useState(""),[o,l]=d.useState(""),[c,u]=d.useState(!1),[f,p]=d.useState(!1),h=d.useMemo(()=>["QuizMaster"+Math.floor(Math.random()*1e3),"BrainStorm"+Math.floor(Math.random()*1e3),"SmartCookie"+Math.floor(Math.random()*1e3),"QuizWhiz"+Math.floor(Math.random()*1e3)],[]),b=()=>{if(!a||!o){alert("Please enter username and password");return}ny(r,{username:a,password:o,avatar:s,createdAt:new Date().toISOString()}),localStorage.setItem("currentUser",JSON.stringify({phone:r,username:a,avatar:s})),f&&localStorage.setItem("rememberCredentials","true"),t("/welcome",{state:{username:a},replace:!0})},v=()=>{t("/auth/avatar",{state:{phone:r,avatar:s}})};return n.jsxs("div",{className:"auth-screen",style:{background:"linear-gradient(135deg, #ba5174ff 0%, #a9822dff 50%, #ca52baff 100%)"},children:[n.jsx("button",{className:"back-button",onClick:v,style:{position:"absolute",top:"20px",left:"20px",background:"rgba(255,255,255,0.2)",border:"none",borderRadius:"50%",width:"40px",height:"40px",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",zIndex:10,backdropFilter:"blur(10px)",transition:"all 0.3s ease"},onMouseEnter:j=>j.target.style.background="rgba(255,255,255,0.3)",onMouseLeave:j=>j.target.style.background="rgba(255,255,255,0.2)",children:n.jsx("span",{style:{fontSize:"24px",color:"white"},children:"‹"})}),n.jsxs("div",{className:"content-card",children:[n.jsxs("div",{className:"progress-dots",children:[n.jsx("div",{className:"dot"}),n.jsx("div",{className:"dot active",style:{background:"#ff6b9d"}})]}),n.jsx("div",{style:{fontSize:"60px",textAlign:"center",marginBottom:"16px"},children:s==null?void 0:s.emoji}),n.jsx("h1",{className:"title",style:{background:"linear-gradient(135deg, #ff6b9d 0%, #ff9ff3 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"},children:"Almost Done!"}),n.jsx("p",{className:"subtitle",children:"Pick a username & password"}),n.jsxs("div",{style:{marginBottom:"24px"},children:[n.jsx("input",{type:"text",className:"phone-input",placeholder:"Choose a username...",value:a,onChange:j=>i(j.target.value),style:{width:"100%",marginBottom:"16px",color:"#333",fontSize:"16px",WebkitTextFillColor:"#333",backgroundColor:"white"}}),n.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"8px",marginBottom:"16px"},children:h.map((j,C)=>n.jsx("button",{onClick:()=>i(j),className:"suggestion-button",style:{padding:"10px",border:"2px solid #ffe0ec",borderRadius:"12px",background:a===j?"rgba(255, 107, 157, 0.1)":"white",borderColor:a===j?"#ff6b9d":"#ffe0ec",cursor:"pointer",fontSize:"13px",fontWeight:"600",transition:"all 0.3s",color:"#333",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:j},C))}),n.jsxs("div",{style:{position:"relative",marginBottom:"16px"},children:[n.jsx("input",{type:c?"text":"password",className:"phone-input",placeholder:"Create a password...",value:o,onChange:j=>l(j.target.value),style:{width:"100%",paddingRight:"45px",color:"#333",fontSize:"16px",WebkitTextFillColor:"#333",backgroundColor:"white"}}),n.jsx("button",{type:"button",onClick:()=>u(!c),style:{position:"absolute",right:"12px",top:"50%",transform:"translateY(-50%)",background:"none",border:"none",cursor:"pointer",padding:"5px",fontSize:"20px",color:"#ff6b9d"},"aria-label":c?"Hide password":"Show password",children:c?"👁️":"👁️‍🗨️"})]}),n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",marginBottom:"20px"},children:[n.jsx("input",{type:"checkbox",id:"rememberMe",checked:f,onChange:j=>p(j.target.checked),style:{width:"18px",height:"18px",cursor:"pointer",accentColor:"#ff6b9d"}}),n.jsx("label",{htmlFor:"rememberMe",style:{fontSize:"14px",color:"#64748b",cursor:"pointer",userSelect:"none"},children:"Remember me"})]})]}),n.jsx("button",{className:"submit-button",onClick:b,disabled:!a||!o,style:{background:"linear-gradient(135deg, #ff6b9d 0%, #ff9ff3 100%)"},children:"Start Playing! 🎯"})]})]})}function cy(){var c;const e=Le(),t=nt(),[r,s]=d.useState(!0),[a,i]=d.useState(!1),o=((c=t.state)==null?void 0:c.username)||localStorage.getItem("userName")||"Champion";d.useEffect(()=>{setTimeout(()=>i(!0),100);const u=setTimeout(()=>{s(!1),setTimeout(()=>e("/",{replace:!0}),300)},3e3);return()=>clearTimeout(u)},[e]);const l=()=>{s(!1),setTimeout(()=>e("/",{replace:!0}),300)};return r?n.jsxs("div",{className:`fixed inset-0 z-50 flex items-center justify-center transition-all duration-500
      ${a?"opacity-100":"opacity-0"}`,style:{background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)"},children:[n.jsx("div",{className:"absolute inset-0 overflow-hidden",children:[...Array(5)].map((u,f)=>n.jsx("div",{className:"absolute animate-pulse",style:{top:`${20+f*15}%`,left:`${10+f*20}%`,fontSize:"20px",animationDelay:`${f*.2}s`},children:"✨"},f))}),n.jsxs("div",{className:`text-center px-6 transform transition-all duration-700
        ${a?"scale-100 translate-y-0":"scale-90 translate-y-10"}`,style:{maxWidth:"400px"},children:[n.jsx("div",{className:"text-8xl mb-6",style:{animation:"bounce 2s infinite",display:"inline-block"},children:"🎮"}),n.jsxs("h1",{className:"text-4xl font-bold text-white mb-3",style:{fontFamily:"system-ui, -apple-system, sans-serif"},children:["Hello, ",o,"! 👋"]}),n.jsx("h2",{className:"text-2xl text-white/90 mb-4",children:"Welcome to Quizify"}),n.jsx("p",{className:"text-white/80 mb-8 text-lg",children:"Where learning meets fun - Let's make your brain sparkle! ✨"}),n.jsxs("button",{onClick:l,className:"welcome-start-button",style:{background:"rgba(255, 255, 255, 0.2)",backdropFilter:"blur(10px)",color:"white",padding:"16px 32px",borderRadius:"50px",fontSize:"18px",fontWeight:"bold",border:"2px solid rgba(255, 255, 255, 0.3)",cursor:"pointer",transform:"scale(1)",transition:"all 0.3s ease",display:"inline-flex",alignItems:"center",gap:"10px"},onMouseEnter:u=>{u.currentTarget.style.transform="scale(1.05)",u.currentTarget.style.background="rgba(255, 255, 255, 0.3)"},onMouseLeave:u=>{u.currentTarget.style.transform="scale(1)",u.currentTarget.style.background="rgba(255, 255, 255, 0.2)"},children:["Start Learning ",n.jsx("span",{style:{fontSize:"24px"},children:"→"})]})]}),n.jsx("style",{jsx:!0,children:`
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
      `})]}):null}const dy={name:"Player",avatar:"wizard",level:1,totalXP:0,coins:0,energy:ut.MAX_ENERGY,energyRegenAt:null,comboStreak:0,bestCombo:0,currentStreak:0,bestStreak:0,totalDays:0,lastPlayedDate:null,totalQuizzes:0,totalCorrect:0,achievements:[],unlockedAvatars:["wizard","knight"],createdAt:Date.now()};function uy(){const[e,t]=d.useState(()=>{const u=localStorage.getItem(ut.STORAGE_KEYS.PLAYER);return u?JSON.parse(u):dy});d.useEffect(()=>{localStorage.setItem(ut.STORAGE_KEYS.PLAYER,JSON.stringify(e))},[e]),d.useEffect(()=>{if(e.energy<ut.MAX_ENERGY&&e.energyRegenAt){const u=setInterval(()=>{const f=Date.now();f>=e.energyRegenAt&&t(p=>({...p,energy:Math.min(p.energy+1,ut.MAX_ENERGY),energyRegenAt:p.energy+1<ut.MAX_ENERGY?f+ut.ENERGY_REGEN_TIME:null}))},6e4);return()=>clearInterval(u)}},[e.energy,e.energyRegenAt]);const r=d.useCallback(u=>{t(f=>{const p=f.totalXP+u,h=Td(f.totalXP),b=Td(p);let v=[...f.unlockedAvatars];return b>h&&ut.AVATARS.forEach(j=>{j.unlockLevel===b&&!v.includes(j.id)&&v.push(j.id)}),{...f,totalXP:p,level:b,unlockedAvatars:v}})},[]),s=d.useCallback(u=>{const p=new Error().stack;console.log("[COINS DEBUG] ================"),console.log("[COINS DEBUG] Amount:",u),console.log("[COINS DEBUG] Called from:",p.split(`
`)[2]),console.log("[COINS DEBUG] Full trace:",p),t(h=>(console.log("[COINS DEBUG] Current:",h.coins,"→ New:",h.coins+u),{...h,coins:h.coins+u}))},[]),a=d.useCallback((u=1)=>e.energy<u?!1:(t(f=>({...f,energy:f.energy-u,energyRegenAt:f.energyRegenAt||Date.now()+ut.ENERGY_REGEN_TIME})),!0),[e.energy]),i=d.useCallback(u=>{t(f=>{const p=u?f.comboStreak+1:0;return{...f,comboStreak:p,bestCombo:Math.max(f.bestCombo,p)}})},[]),o=d.useCallback(()=>{t(u=>({...u,comboStreak:0}))},[]),l=d.useCallback(u=>{e.unlockedAvatars.includes(u)&&t(f=>({...f,avatar:u}))},[e.unlockedAvatars]),c=d.useCallback(()=>{const u=new Date().toDateString();t(f=>{if(f.lastPlayedDate===u)return f;const p=new Date;p.setDate(p.getDate()-1);const h=p.toDateString();let b=f.currentStreak;return f.lastPlayedDate===h?b=f.currentStreak+1:(f.lastPlayedDate,b=1),{...f,currentStreak:b,bestStreak:Math.max(f.bestStreak,b),totalDays:f.totalDays+1,lastPlayedDate:u}})},[]);return{player:e,addXP:r,addCoins:s,useEnergy:a,updateCombo:i,resetCombo:o,changeAvatar:l,updateDailyStreak:c,levelProgress:Vx(e.totalXP)}}window.history.replaceState({path:window.location.pathname,preventBack:!0},"",window.location.pathname);window.history.pushState({path:window.location.pathname,preventBack:!0},"",window.location.pathname);const Dm=d.createContext(null),kn=()=>{const e=d.useContext(Dm);if(!e)throw new Error("useGame must be used within GameProvider");return e};function fy({children:e}){const t=uy();return n.jsx(Dm.Provider,{value:t,children:e})}function my(){const[e,t]=d.useState(!1),[r,s]=d.useState(!1);return d.useEffect(()=>{(()=>{const i=sy();s(i),t(!0)})()},[]),d.useEffect(()=>{let a=0,i=null;const o=Vd.addListener("backButton",()=>{const l=window.location.pathname;l==="/"||l==="/home"?(a++,a===1?(console.log("Press back again to exit"),i=setTimeout(()=>{a=0},2e3)):a===2&&(clearTimeout(i),Vd.minimizeApp())):window.history.back()});return()=>{o.remove(),i&&clearTimeout(i)}},[]),e?!r&&!window.location.pathname.startsWith("/auth")?(window.location.href="/auth",null):n.jsx(fy,{children:n.jsxs(lx,{children:[n.jsx(De,{path:"/auth",element:n.jsx(ay,{})}),n.jsx(De,{path:"/auth/signin",element:n.jsx(iy,{})}),n.jsx(De,{path:"/auth/avatar",element:n.jsx(oy,{})}),n.jsx(De,{path:"/auth/username",element:n.jsx(ly,{})}),n.jsx(De,{path:"/welcome",element:n.jsx(cy,{})}),n.jsxs(De,{element:n.jsx(Qx,{}),children:[n.jsx(De,{path:"/",element:n.jsx(Ld,{})}),n.jsx(De,{path:"/play",element:n.jsx($g,{})}),n.jsx(De,{path:"/play/party",element:n.jsx(cv,{})}),n.jsx(De,{path:"/profile",element:n.jsx(pv,{})}),n.jsx(De,{path:"/profile/leaderboard",element:n.jsx(xv,{})}),n.jsx(De,{path:"/profile/history",element:n.jsx(jv,{})}),n.jsx(De,{path:"/profile/rewards",element:n.jsx(Dv,{})}),n.jsx(De,{path:"/profile/badges",element:n.jsx(Fv,{})}),n.jsx(De,{path:"/profile/achievements",element:n.jsx($v,{})}),n.jsx(De,{path:"/profile/streaks",element:n.jsx(Bv,{})}),n.jsx(De,{path:"/profile/quests",element:n.jsx(qv,{})}),n.jsx(De,{path:"/profile/settings",element:n.jsx(Yv,{})}),n.jsx(De,{path:"/swipe",element:n.jsx(uv,{})}),n.jsx(De,{path:"/leaders",element:n.jsx(ax,{to:"/profile/leaderboard",replace:!0})}),n.jsx(De,{path:"/quiz/:category",element:n.jsx(tv,{})}),n.jsx(De,{path:"/quiz/play",element:n.jsx(mv,{})}),n.jsx(De,{path:"/practice/start",element:n.jsx(hv,{})}),n.jsx(De,{path:"*",element:n.jsx(Ld,{})})]})]})}):n.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh",backgroundColor:"#000"},children:n.jsx("div",{style:{color:"#fff"},children:"Loading..."})})}lo.createRoot(document.getElementById("root")).render(n.jsx(gt.StrictMode,{children:n.jsx(Ix,{children:n.jsx(my,{})})}));export{Mm as W,Om as c,Xd as g};
