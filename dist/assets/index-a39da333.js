(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function r(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(a){if(a.ep)return;a.ep=!0;const i=r(a);fetch(a.href,i)}})();var jm=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Id(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Md={exports:{}},ri={},Dd={exports:{}},ye={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zs=Symbol.for("react.element"),Nm=Symbol.for("react.portal"),km=Symbol.for("react.fragment"),Sm=Symbol.for("react.strict_mode"),Cm=Symbol.for("react.profiler"),Em=Symbol.for("react.provider"),Rm=Symbol.for("react.context"),Tm=Symbol.for("react.forward_ref"),_m=Symbol.for("react.suspense"),Pm=Symbol.for("react.memo"),Am=Symbol.for("react.lazy"),nc=Symbol.iterator;function Lm(e){return e===null||typeof e!="object"?null:(e=nc&&e[nc]||e["@@iterator"],typeof e=="function"?e:null)}var zd={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Fd=Object.assign,Od={};function Fr(e,t,r){this.props=e,this.context=t,this.refs=Od,this.updater=r||zd}Fr.prototype.isReactComponent={};Fr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Fr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function $d(){}$d.prototype=Fr.prototype;function Xo(e,t,r){this.props=e,this.context=t,this.refs=Od,this.updater=r||zd}var Ko=Xo.prototype=new $d;Ko.constructor=Xo;Fd(Ko,Fr.prototype);Ko.isPureReactComponent=!0;var rc=Array.isArray,Bd=Object.prototype.hasOwnProperty,Jo={current:null},Ud={key:!0,ref:!0,__self:!0,__source:!0};function qd(e,t,r){var s,a={},i=null,o=null;if(t!=null)for(s in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(i=""+t.key),t)Bd.call(t,s)&&!Ud.hasOwnProperty(s)&&(a[s]=t[s]);var l=arguments.length-2;if(l===1)a.children=r;else if(1<l){for(var c=Array(l),u=0;u<l;u++)c[u]=arguments[u+2];a.children=c}if(e&&e.defaultProps)for(s in l=e.defaultProps,l)a[s]===void 0&&(a[s]=l[s]);return{$$typeof:zs,type:e,key:i,ref:o,props:a,_owner:Jo.current}}function Im(e,t){return{$$typeof:zs,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Zo(e){return typeof e=="object"&&e!==null&&e.$$typeof===zs}function Mm(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(r){return t[r]})}var sc=/\/+/g;function wi(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Mm(""+e.key):t.toString(36)}function pa(e,t,r,s,a){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case zs:case Nm:o=!0}}if(o)return o=e,a=a(o),e=s===""?"."+wi(o,0):s,rc(a)?(r="",e!=null&&(r=e.replace(sc,"$&/")+"/"),pa(a,t,r,"",function(u){return u})):a!=null&&(Zo(a)&&(a=Im(a,r+(!a.key||o&&o.key===a.key?"":(""+a.key).replace(sc,"$&/")+"/")+e)),t.push(a)),1;if(o=0,s=s===""?".":s+":",rc(e))for(var l=0;l<e.length;l++){i=e[l];var c=s+wi(i,l);o+=pa(i,t,r,c,a)}else if(c=Lm(e),typeof c=="function")for(e=c.call(e),l=0;!(i=e.next()).done;)i=i.value,c=s+wi(i,l++),o+=pa(i,t,r,c,a);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function Ys(e,t,r){if(e==null)return e;var s=[],a=0;return pa(e,s,"","",function(i){return t.call(r,i,a++)}),s}function Dm(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(r){(e._status===0||e._status===-1)&&(e._status=1,e._result=r)},function(r){(e._status===0||e._status===-1)&&(e._status=2,e._result=r)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var yt={current:null},xa={transition:null},zm={ReactCurrentDispatcher:yt,ReactCurrentBatchConfig:xa,ReactCurrentOwner:Jo};function Yd(){throw Error("act(...) is not supported in production builds of React.")}ye.Children={map:Ys,forEach:function(e,t,r){Ys(e,function(){t.apply(this,arguments)},r)},count:function(e){var t=0;return Ys(e,function(){t++}),t},toArray:function(e){return Ys(e,function(t){return t})||[]},only:function(e){if(!Zo(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};ye.Component=Fr;ye.Fragment=km;ye.Profiler=Cm;ye.PureComponent=Xo;ye.StrictMode=Sm;ye.Suspense=_m;ye.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=zm;ye.act=Yd;ye.cloneElement=function(e,t,r){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var s=Fd({},e.props),a=e.key,i=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,o=Jo.current),t.key!==void 0&&(a=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(c in t)Bd.call(t,c)&&!Ud.hasOwnProperty(c)&&(s[c]=t[c]===void 0&&l!==void 0?l[c]:t[c])}var c=arguments.length-2;if(c===1)s.children=r;else if(1<c){l=Array(c);for(var u=0;u<c;u++)l[u]=arguments[u+2];s.children=l}return{$$typeof:zs,type:e.type,key:a,ref:i,props:s,_owner:o}};ye.createContext=function(e){return e={$$typeof:Rm,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Em,_context:e},e.Consumer=e};ye.createElement=qd;ye.createFactory=function(e){var t=qd.bind(null,e);return t.type=e,t};ye.createRef=function(){return{current:null}};ye.forwardRef=function(e){return{$$typeof:Tm,render:e}};ye.isValidElement=Zo;ye.lazy=function(e){return{$$typeof:Am,_payload:{_status:-1,_result:e},_init:Dm}};ye.memo=function(e,t){return{$$typeof:Pm,type:e,compare:t===void 0?null:t}};ye.startTransition=function(e){var t=xa.transition;xa.transition={};try{e()}finally{xa.transition=t}};ye.unstable_act=Yd;ye.useCallback=function(e,t){return yt.current.useCallback(e,t)};ye.useContext=function(e){return yt.current.useContext(e)};ye.useDebugValue=function(){};ye.useDeferredValue=function(e){return yt.current.useDeferredValue(e)};ye.useEffect=function(e,t){return yt.current.useEffect(e,t)};ye.useId=function(){return yt.current.useId()};ye.useImperativeHandle=function(e,t,r){return yt.current.useImperativeHandle(e,t,r)};ye.useInsertionEffect=function(e,t){return yt.current.useInsertionEffect(e,t)};ye.useLayoutEffect=function(e,t){return yt.current.useLayoutEffect(e,t)};ye.useMemo=function(e,t){return yt.current.useMemo(e,t)};ye.useReducer=function(e,t,r){return yt.current.useReducer(e,t,r)};ye.useRef=function(e){return yt.current.useRef(e)};ye.useState=function(e){return yt.current.useState(e)};ye.useSyncExternalStore=function(e,t,r){return yt.current.useSyncExternalStore(e,t,r)};ye.useTransition=function(){return yt.current.useTransition()};ye.version="18.3.1";Dd.exports=ye;var d=Dd.exports;const xt=Id(d);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fm=d,Om=Symbol.for("react.element"),$m=Symbol.for("react.fragment"),Bm=Object.prototype.hasOwnProperty,Um=Fm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,qm={key:!0,ref:!0,__self:!0,__source:!0};function Qd(e,t,r){var s,a={},i=null,o=null;r!==void 0&&(i=""+r),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(o=t.ref);for(s in t)Bm.call(t,s)&&!qm.hasOwnProperty(s)&&(a[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps,t)a[s]===void 0&&(a[s]=t[s]);return{$$typeof:Om,type:e,key:i,ref:o,props:a,_owner:Um.current}}ri.Fragment=$m;ri.jsx=Qd;ri.jsxs=Qd;Md.exports=ri;var n=Md.exports,eo={},Hd={exports:{}},At={},Wd={exports:{}},Gd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(C,T){var _=C.length;C.push(T);e:for(;0<_;){var A=_-1>>>1,M=C[A];if(0<a(M,T))C[A]=T,C[_]=M,_=A;else break e}}function r(C){return C.length===0?null:C[0]}function s(C){if(C.length===0)return null;var T=C[0],_=C.pop();if(_!==T){C[0]=_;e:for(var A=0,M=C.length,D=M>>>1;A<D;){var X=2*(A+1)-1,$=C[X],J=X+1,ie=C[J];if(0>a($,_))J<M&&0>a(ie,$)?(C[A]=ie,C[J]=_,A=J):(C[A]=$,C[X]=_,A=X);else if(J<M&&0>a(ie,_))C[A]=ie,C[J]=_,A=J;else break e}}return T}function a(C,T){var _=C.sortIndex-T.sortIndex;return _!==0?_:C.id-T.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var o=Date,l=o.now();e.unstable_now=function(){return o.now()-l}}var c=[],u=[],f=1,x=null,m=3,y=!1,p=!1,j=!1,k=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(C){for(var T=r(u);T!==null;){if(T.callback===null)s(u);else if(T.startTime<=C)s(u),T.sortIndex=T.expirationTime,t(c,T);else break;T=r(u)}}function E(C){if(j=!1,g(C),!p)if(r(c)!==null)p=!0,B(P);else{var T=r(u);T!==null&&L(E,T.startTime-C)}}function P(C,T){p=!1,j&&(j=!1,v(b),b=-1),y=!0;var _=m;try{for(g(T),x=r(c);x!==null&&(!(x.expirationTime>T)||C&&!R());){var A=x.callback;if(typeof A=="function"){x.callback=null,m=x.priorityLevel;var M=A(x.expirationTime<=T);T=e.unstable_now(),typeof M=="function"?x.callback=M:x===r(c)&&s(c),g(T)}else s(c);x=r(c)}if(x!==null)var D=!0;else{var X=r(u);X!==null&&L(E,X.startTime-T),D=!1}return D}finally{x=null,m=_,y=!1}}var z=!1,S=null,b=-1,w=5,N=-1;function R(){return!(e.unstable_now()-N<w)}function F(){if(S!==null){var C=e.unstable_now();N=C;var T=!0;try{T=S(!0,C)}finally{T?Q():(z=!1,S=null)}}else z=!1}var Q;if(typeof h=="function")Q=function(){h(F)};else if(typeof MessageChannel<"u"){var ee=new MessageChannel,q=ee.port2;ee.port1.onmessage=F,Q=function(){q.postMessage(null)}}else Q=function(){k(F,0)};function B(C){S=C,z||(z=!0,Q())}function L(C,T){b=k(function(){C(e.unstable_now())},T)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(C){C.callback=null},e.unstable_continueExecution=function(){p||y||(p=!0,B(P))},e.unstable_forceFrameRate=function(C){0>C||125<C?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):w=0<C?Math.floor(1e3/C):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return r(c)},e.unstable_next=function(C){switch(m){case 1:case 2:case 3:var T=3;break;default:T=m}var _=m;m=T;try{return C()}finally{m=_}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(C,T){switch(C){case 1:case 2:case 3:case 4:case 5:break;default:C=3}var _=m;m=C;try{return T()}finally{m=_}},e.unstable_scheduleCallback=function(C,T,_){var A=e.unstable_now();switch(typeof _=="object"&&_!==null?(_=_.delay,_=typeof _=="number"&&0<_?A+_:A):_=A,C){case 1:var M=-1;break;case 2:M=250;break;case 5:M=1073741823;break;case 4:M=1e4;break;default:M=5e3}return M=_+M,C={id:f++,callback:T,priorityLevel:C,startTime:_,expirationTime:M,sortIndex:-1},_>A?(C.sortIndex=_,t(u,C),r(c)===null&&C===r(u)&&(j?(v(b),b=-1):j=!0,L(E,_-A))):(C.sortIndex=M,t(c,C),p||y||(p=!0,B(P))),C},e.unstable_shouldYield=R,e.unstable_wrapCallback=function(C){var T=m;return function(){var _=m;m=T;try{return C.apply(this,arguments)}finally{m=_}}}})(Gd);Wd.exports=Gd;var Ym=Wd.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qm=d,Pt=Ym;function G(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Vd=new Set,ys={};function lr(e,t){Pr(e,t),Pr(e+"Capture",t)}function Pr(e,t){for(ys[e]=t,e=0;e<t.length;e++)Vd.add(t[e])}var pn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),to=Object.prototype.hasOwnProperty,Hm=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ac={},ic={};function Wm(e){return to.call(ic,e)?!0:to.call(ac,e)?!1:Hm.test(e)?ic[e]=!0:(ac[e]=!0,!1)}function Gm(e,t,r,s){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return s?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Vm(e,t,r,s){if(t===null||typeof t>"u"||Gm(e,t,r,s))return!0;if(s)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function bt(e,t,r,s,a,i,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=s,this.attributeNamespace=a,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=o}var ct={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ct[e]=new bt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ct[t]=new bt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ct[e]=new bt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ct[e]=new bt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ct[e]=new bt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ct[e]=new bt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ct[e]=new bt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ct[e]=new bt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ct[e]=new bt(e,5,!1,e.toLowerCase(),null,!1,!1)});var el=/[\-:]([a-z])/g;function tl(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(el,tl);ct[t]=new bt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(el,tl);ct[t]=new bt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(el,tl);ct[t]=new bt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ct[e]=new bt(e,1,!1,e.toLowerCase(),null,!1,!1)});ct.xlinkHref=new bt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ct[e]=new bt(e,1,!1,e.toLowerCase(),null,!0,!0)});function nl(e,t,r,s){var a=ct.hasOwnProperty(t)?ct[t]:null;(a!==null?a.type!==0:s||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Vm(t,r,a,s)&&(r=null),s||a===null?Wm(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):a.mustUseProperty?e[a.propertyName]=r===null?a.type===3?!1:"":r:(t=a.attributeName,s=a.attributeNamespace,r===null?e.removeAttribute(t):(a=a.type,r=a===3||a===4&&r===!0?"":""+r,s?e.setAttributeNS(s,t,r):e.setAttribute(t,r))))}var bn=Qm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Qs=Symbol.for("react.element"),fr=Symbol.for("react.portal"),mr=Symbol.for("react.fragment"),rl=Symbol.for("react.strict_mode"),no=Symbol.for("react.profiler"),Xd=Symbol.for("react.provider"),Kd=Symbol.for("react.context"),sl=Symbol.for("react.forward_ref"),ro=Symbol.for("react.suspense"),so=Symbol.for("react.suspense_list"),al=Symbol.for("react.memo"),Cn=Symbol.for("react.lazy"),Jd=Symbol.for("react.offscreen"),oc=Symbol.iterator;function Qr(e){return e===null||typeof e!="object"?null:(e=oc&&e[oc]||e["@@iterator"],typeof e=="function"?e:null)}var Qe=Object.assign,ji;function as(e){if(ji===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);ji=t&&t[1]||""}return`
`+ji+e}var Ni=!1;function ki(e,t){if(!e||Ni)return"";Ni=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var s=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){s=u}e.call(t.prototype)}else{try{throw Error()}catch(u){s=u}e()}}catch(u){if(u&&s&&typeof u.stack=="string"){for(var a=u.stack.split(`
`),i=s.stack.split(`
`),o=a.length-1,l=i.length-1;1<=o&&0<=l&&a[o]!==i[l];)l--;for(;1<=o&&0<=l;o--,l--)if(a[o]!==i[l]){if(o!==1||l!==1)do if(o--,l--,0>l||a[o]!==i[l]){var c=`
`+a[o].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=o&&0<=l);break}}}finally{Ni=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?as(e):""}function Xm(e){switch(e.tag){case 5:return as(e.type);case 16:return as("Lazy");case 13:return as("Suspense");case 19:return as("SuspenseList");case 0:case 2:case 15:return e=ki(e.type,!1),e;case 11:return e=ki(e.type.render,!1),e;case 1:return e=ki(e.type,!0),e;default:return""}}function ao(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case mr:return"Fragment";case fr:return"Portal";case no:return"Profiler";case rl:return"StrictMode";case ro:return"Suspense";case so:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Kd:return(e.displayName||"Context")+".Consumer";case Xd:return(e._context.displayName||"Context")+".Provider";case sl:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case al:return t=e.displayName||null,t!==null?t:ao(e.type)||"Memo";case Cn:t=e._payload,e=e._init;try{return ao(e(t))}catch{}}return null}function Km(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ao(t);case 8:return t===rl?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Bn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Zd(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Jm(e){var t=Zd(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),s=""+e[t];if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var a=r.get,i=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(o){s=""+o,i.call(this,o)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return s},setValue:function(o){s=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Hs(e){e._valueTracker||(e._valueTracker=Jm(e))}function eu(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),s="";return e&&(s=Zd(e)?e.checked?"true":"false":e.value),e=s,e!==r?(t.setValue(e),!0):!1}function Pa(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function io(e,t){var r=t.checked;return Qe({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function lc(e,t){var r=t.defaultValue==null?"":t.defaultValue,s=t.checked!=null?t.checked:t.defaultChecked;r=Bn(t.value!=null?t.value:r),e._wrapperState={initialChecked:s,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function tu(e,t){t=t.checked,t!=null&&nl(e,"checked",t,!1)}function oo(e,t){tu(e,t);var r=Bn(t.value),s=t.type;if(r!=null)s==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(s==="submit"||s==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?lo(e,t.type,r):t.hasOwnProperty("defaultValue")&&lo(e,t.type,Bn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function cc(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var s=t.type;if(!(s!=="submit"&&s!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function lo(e,t,r){(t!=="number"||Pa(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var is=Array.isArray;function kr(e,t,r,s){if(e=e.options,t){t={};for(var a=0;a<r.length;a++)t["$"+r[a]]=!0;for(r=0;r<e.length;r++)a=t.hasOwnProperty("$"+e[r].value),e[r].selected!==a&&(e[r].selected=a),a&&s&&(e[r].defaultSelected=!0)}else{for(r=""+Bn(r),t=null,a=0;a<e.length;a++){if(e[a].value===r){e[a].selected=!0,s&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function co(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(G(91));return Qe({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function dc(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(G(92));if(is(r)){if(1<r.length)throw Error(G(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:Bn(r)}}function nu(e,t){var r=Bn(t.value),s=Bn(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),s!=null&&(e.defaultValue=""+s)}function uc(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function ru(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function uo(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?ru(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Ws,su=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,r,s,a){MSApp.execUnsafeLocalFunction(function(){return e(t,r,s,a)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Ws=Ws||document.createElement("div"),Ws.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Ws.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function bs(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var cs={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Zm=["Webkit","ms","Moz","O"];Object.keys(cs).forEach(function(e){Zm.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),cs[t]=cs[e]})});function au(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||cs.hasOwnProperty(e)&&cs[e]?(""+t).trim():t+"px"}function iu(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var s=r.indexOf("--")===0,a=au(r,t[r],s);r==="float"&&(r="cssFloat"),s?e.setProperty(r,a):e[r]=a}}var e0=Qe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function fo(e,t){if(t){if(e0[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(G(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(G(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(G(61))}if(t.style!=null&&typeof t.style!="object")throw Error(G(62))}}function mo(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ho=null;function il(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var po=null,Sr=null,Cr=null;function fc(e){if(e=$s(e)){if(typeof po!="function")throw Error(G(280));var t=e.stateNode;t&&(t=li(t),po(e.stateNode,e.type,t))}}function ou(e){Sr?Cr?Cr.push(e):Cr=[e]:Sr=e}function lu(){if(Sr){var e=Sr,t=Cr;if(Cr=Sr=null,fc(e),t)for(e=0;e<t.length;e++)fc(t[e])}}function cu(e,t){return e(t)}function du(){}var Si=!1;function uu(e,t,r){if(Si)return e(t,r);Si=!0;try{return cu(e,t,r)}finally{Si=!1,(Sr!==null||Cr!==null)&&(du(),lu())}}function ws(e,t){var r=e.stateNode;if(r===null)return null;var s=li(r);if(s===null)return null;r=s[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(e=e.type,s=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!s;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(G(231,t,typeof r));return r}var xo=!1;if(pn)try{var Hr={};Object.defineProperty(Hr,"passive",{get:function(){xo=!0}}),window.addEventListener("test",Hr,Hr),window.removeEventListener("test",Hr,Hr)}catch{xo=!1}function t0(e,t,r,s,a,i,o,l,c){var u=Array.prototype.slice.call(arguments,3);try{t.apply(r,u)}catch(f){this.onError(f)}}var ds=!1,Aa=null,La=!1,go=null,n0={onError:function(e){ds=!0,Aa=e}};function r0(e,t,r,s,a,i,o,l,c){ds=!1,Aa=null,t0.apply(n0,arguments)}function s0(e,t,r,s,a,i,o,l,c){if(r0.apply(this,arguments),ds){if(ds){var u=Aa;ds=!1,Aa=null}else throw Error(G(198));La||(La=!0,go=u)}}function cr(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function fu(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function mc(e){if(cr(e)!==e)throw Error(G(188))}function a0(e){var t=e.alternate;if(!t){if(t=cr(e),t===null)throw Error(G(188));return t!==e?null:e}for(var r=e,s=t;;){var a=r.return;if(a===null)break;var i=a.alternate;if(i===null){if(s=a.return,s!==null){r=s;continue}break}if(a.child===i.child){for(i=a.child;i;){if(i===r)return mc(a),e;if(i===s)return mc(a),t;i=i.sibling}throw Error(G(188))}if(r.return!==s.return)r=a,s=i;else{for(var o=!1,l=a.child;l;){if(l===r){o=!0,r=a,s=i;break}if(l===s){o=!0,s=a,r=i;break}l=l.sibling}if(!o){for(l=i.child;l;){if(l===r){o=!0,r=i,s=a;break}if(l===s){o=!0,s=i,r=a;break}l=l.sibling}if(!o)throw Error(G(189))}}if(r.alternate!==s)throw Error(G(190))}if(r.tag!==3)throw Error(G(188));return r.stateNode.current===r?e:t}function mu(e){return e=a0(e),e!==null?hu(e):null}function hu(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=hu(e);if(t!==null)return t;e=e.sibling}return null}var pu=Pt.unstable_scheduleCallback,hc=Pt.unstable_cancelCallback,i0=Pt.unstable_shouldYield,o0=Pt.unstable_requestPaint,Xe=Pt.unstable_now,l0=Pt.unstable_getCurrentPriorityLevel,ol=Pt.unstable_ImmediatePriority,xu=Pt.unstable_UserBlockingPriority,Ia=Pt.unstable_NormalPriority,c0=Pt.unstable_LowPriority,gu=Pt.unstable_IdlePriority,si=null,sn=null;function d0(e){if(sn&&typeof sn.onCommitFiberRoot=="function")try{sn.onCommitFiberRoot(si,e,void 0,(e.current.flags&128)===128)}catch{}}var Wt=Math.clz32?Math.clz32:m0,u0=Math.log,f0=Math.LN2;function m0(e){return e>>>=0,e===0?32:31-(u0(e)/f0|0)|0}var Gs=64,Vs=4194304;function os(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ma(e,t){var r=e.pendingLanes;if(r===0)return 0;var s=0,a=e.suspendedLanes,i=e.pingedLanes,o=r&268435455;if(o!==0){var l=o&~a;l!==0?s=os(l):(i&=o,i!==0&&(s=os(i)))}else o=r&~a,o!==0?s=os(o):i!==0&&(s=os(i));if(s===0)return 0;if(t!==0&&t!==s&&!(t&a)&&(a=s&-s,i=t&-t,a>=i||a===16&&(i&4194240)!==0))return t;if(s&4&&(s|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=s;0<t;)r=31-Wt(t),a=1<<r,s|=e[r],t&=~a;return s}function h0(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function p0(e,t){for(var r=e.suspendedLanes,s=e.pingedLanes,a=e.expirationTimes,i=e.pendingLanes;0<i;){var o=31-Wt(i),l=1<<o,c=a[o];c===-1?(!(l&r)||l&s)&&(a[o]=h0(l,t)):c<=t&&(e.expiredLanes|=l),i&=~l}}function vo(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function vu(){var e=Gs;return Gs<<=1,!(Gs&4194240)&&(Gs=64),e}function Ci(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function Fs(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Wt(t),e[t]=r}function x0(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var s=e.eventTimes;for(e=e.expirationTimes;0<r;){var a=31-Wt(r),i=1<<a;t[a]=0,s[a]=-1,e[a]=-1,r&=~i}}function ll(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var s=31-Wt(r),a=1<<s;a&t|e[s]&t&&(e[s]|=t),r&=~a}}var Ee=0;function yu(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var bu,cl,wu,ju,Nu,yo=!1,Xs=[],Ln=null,In=null,Mn=null,js=new Map,Ns=new Map,Tn=[],g0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function pc(e,t){switch(e){case"focusin":case"focusout":Ln=null;break;case"dragenter":case"dragleave":In=null;break;case"mouseover":case"mouseout":Mn=null;break;case"pointerover":case"pointerout":js.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ns.delete(t.pointerId)}}function Wr(e,t,r,s,a,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:r,eventSystemFlags:s,nativeEvent:i,targetContainers:[a]},t!==null&&(t=$s(t),t!==null&&cl(t)),e):(e.eventSystemFlags|=s,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function v0(e,t,r,s,a){switch(t){case"focusin":return Ln=Wr(Ln,e,t,r,s,a),!0;case"dragenter":return In=Wr(In,e,t,r,s,a),!0;case"mouseover":return Mn=Wr(Mn,e,t,r,s,a),!0;case"pointerover":var i=a.pointerId;return js.set(i,Wr(js.get(i)||null,e,t,r,s,a)),!0;case"gotpointercapture":return i=a.pointerId,Ns.set(i,Wr(Ns.get(i)||null,e,t,r,s,a)),!0}return!1}function ku(e){var t=Vn(e.target);if(t!==null){var r=cr(t);if(r!==null){if(t=r.tag,t===13){if(t=fu(r),t!==null){e.blockedOn=t,Nu(e.priority,function(){wu(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ga(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=bo(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var s=new r.constructor(r.type,r);ho=s,r.target.dispatchEvent(s),ho=null}else return t=$s(r),t!==null&&cl(t),e.blockedOn=r,!1;t.shift()}return!0}function xc(e,t,r){ga(e)&&r.delete(t)}function y0(){yo=!1,Ln!==null&&ga(Ln)&&(Ln=null),In!==null&&ga(In)&&(In=null),Mn!==null&&ga(Mn)&&(Mn=null),js.forEach(xc),Ns.forEach(xc)}function Gr(e,t){e.blockedOn===t&&(e.blockedOn=null,yo||(yo=!0,Pt.unstable_scheduleCallback(Pt.unstable_NormalPriority,y0)))}function ks(e){function t(a){return Gr(a,e)}if(0<Xs.length){Gr(Xs[0],e);for(var r=1;r<Xs.length;r++){var s=Xs[r];s.blockedOn===e&&(s.blockedOn=null)}}for(Ln!==null&&Gr(Ln,e),In!==null&&Gr(In,e),Mn!==null&&Gr(Mn,e),js.forEach(t),Ns.forEach(t),r=0;r<Tn.length;r++)s=Tn[r],s.blockedOn===e&&(s.blockedOn=null);for(;0<Tn.length&&(r=Tn[0],r.blockedOn===null);)ku(r),r.blockedOn===null&&Tn.shift()}var Er=bn.ReactCurrentBatchConfig,Da=!0;function b0(e,t,r,s){var a=Ee,i=Er.transition;Er.transition=null;try{Ee=1,dl(e,t,r,s)}finally{Ee=a,Er.transition=i}}function w0(e,t,r,s){var a=Ee,i=Er.transition;Er.transition=null;try{Ee=4,dl(e,t,r,s)}finally{Ee=a,Er.transition=i}}function dl(e,t,r,s){if(Da){var a=bo(e,t,r,s);if(a===null)Di(e,t,s,za,r),pc(e,s);else if(v0(a,e,t,r,s))s.stopPropagation();else if(pc(e,s),t&4&&-1<g0.indexOf(e)){for(;a!==null;){var i=$s(a);if(i!==null&&bu(i),i=bo(e,t,r,s),i===null&&Di(e,t,s,za,r),i===a)break;a=i}a!==null&&s.stopPropagation()}else Di(e,t,s,null,r)}}var za=null;function bo(e,t,r,s){if(za=null,e=il(s),e=Vn(e),e!==null)if(t=cr(e),t===null)e=null;else if(r=t.tag,r===13){if(e=fu(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return za=e,null}function Su(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(l0()){case ol:return 1;case xu:return 4;case Ia:case c0:return 16;case gu:return 536870912;default:return 16}default:return 16}}var Pn=null,ul=null,va=null;function Cu(){if(va)return va;var e,t=ul,r=t.length,s,a="value"in Pn?Pn.value:Pn.textContent,i=a.length;for(e=0;e<r&&t[e]===a[e];e++);var o=r-e;for(s=1;s<=o&&t[r-s]===a[i-s];s++);return va=a.slice(e,1<s?1-s:void 0)}function ya(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ks(){return!0}function gc(){return!1}function Lt(e){function t(r,s,a,i,o){this._reactName=r,this._targetInst=a,this.type=s,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(r=e[l],this[l]=r?r(i):i[l]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Ks:gc,this.isPropagationStopped=gc,this}return Qe(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=Ks)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=Ks)},persist:function(){},isPersistent:Ks}),t}var Or={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},fl=Lt(Or),Os=Qe({},Or,{view:0,detail:0}),j0=Lt(Os),Ei,Ri,Vr,ai=Qe({},Os,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ml,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Vr&&(Vr&&e.type==="mousemove"?(Ei=e.screenX-Vr.screenX,Ri=e.screenY-Vr.screenY):Ri=Ei=0,Vr=e),Ei)},movementY:function(e){return"movementY"in e?e.movementY:Ri}}),vc=Lt(ai),N0=Qe({},ai,{dataTransfer:0}),k0=Lt(N0),S0=Qe({},Os,{relatedTarget:0}),Ti=Lt(S0),C0=Qe({},Or,{animationName:0,elapsedTime:0,pseudoElement:0}),E0=Lt(C0),R0=Qe({},Or,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),T0=Lt(R0),_0=Qe({},Or,{data:0}),yc=Lt(_0),P0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},A0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},L0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function I0(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=L0[e])?!!t[e]:!1}function ml(){return I0}var M0=Qe({},Os,{key:function(e){if(e.key){var t=P0[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ya(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?A0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ml,charCode:function(e){return e.type==="keypress"?ya(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ya(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),D0=Lt(M0),z0=Qe({},ai,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),bc=Lt(z0),F0=Qe({},Os,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ml}),O0=Lt(F0),$0=Qe({},Or,{propertyName:0,elapsedTime:0,pseudoElement:0}),B0=Lt($0),U0=Qe({},ai,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),q0=Lt(U0),Y0=[9,13,27,32],hl=pn&&"CompositionEvent"in window,us=null;pn&&"documentMode"in document&&(us=document.documentMode);var Q0=pn&&"TextEvent"in window&&!us,Eu=pn&&(!hl||us&&8<us&&11>=us),wc=String.fromCharCode(32),jc=!1;function Ru(e,t){switch(e){case"keyup":return Y0.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Tu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var hr=!1;function H0(e,t){switch(e){case"compositionend":return Tu(t);case"keypress":return t.which!==32?null:(jc=!0,wc);case"textInput":return e=t.data,e===wc&&jc?null:e;default:return null}}function W0(e,t){if(hr)return e==="compositionend"||!hl&&Ru(e,t)?(e=Cu(),va=ul=Pn=null,hr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Eu&&t.locale!=="ko"?null:t.data;default:return null}}var G0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Nc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!G0[e.type]:t==="textarea"}function _u(e,t,r,s){ou(s),t=Fa(t,"onChange"),0<t.length&&(r=new fl("onChange","change",null,r,s),e.push({event:r,listeners:t}))}var fs=null,Ss=null;function V0(e){Bu(e,0)}function ii(e){var t=gr(e);if(eu(t))return e}function X0(e,t){if(e==="change")return t}var Pu=!1;if(pn){var _i;if(pn){var Pi="oninput"in document;if(!Pi){var kc=document.createElement("div");kc.setAttribute("oninput","return;"),Pi=typeof kc.oninput=="function"}_i=Pi}else _i=!1;Pu=_i&&(!document.documentMode||9<document.documentMode)}function Sc(){fs&&(fs.detachEvent("onpropertychange",Au),Ss=fs=null)}function Au(e){if(e.propertyName==="value"&&ii(Ss)){var t=[];_u(t,Ss,e,il(e)),uu(V0,t)}}function K0(e,t,r){e==="focusin"?(Sc(),fs=t,Ss=r,fs.attachEvent("onpropertychange",Au)):e==="focusout"&&Sc()}function J0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ii(Ss)}function Z0(e,t){if(e==="click")return ii(t)}function eh(e,t){if(e==="input"||e==="change")return ii(t)}function th(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Vt=typeof Object.is=="function"?Object.is:th;function Cs(e,t){if(Vt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),s=Object.keys(t);if(r.length!==s.length)return!1;for(s=0;s<r.length;s++){var a=r[s];if(!to.call(t,a)||!Vt(e[a],t[a]))return!1}return!0}function Cc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ec(e,t){var r=Cc(e);e=0;for(var s;r;){if(r.nodeType===3){if(s=e+r.textContent.length,e<=t&&s>=t)return{node:r,offset:t-e};e=s}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=Cc(r)}}function Lu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Lu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Iu(){for(var e=window,t=Pa();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=Pa(e.document)}return t}function pl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function nh(e){var t=Iu(),r=e.focusedElem,s=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&Lu(r.ownerDocument.documentElement,r)){if(s!==null&&pl(r)){if(t=s.start,e=s.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var a=r.textContent.length,i=Math.min(s.start,a);s=s.end===void 0?i:Math.min(s.end,a),!e.extend&&i>s&&(a=s,s=i,i=a),a=Ec(r,i);var o=Ec(r,s);a&&o&&(e.rangeCount!==1||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(a.node,a.offset),e.removeAllRanges(),i>s?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var rh=pn&&"documentMode"in document&&11>=document.documentMode,pr=null,wo=null,ms=null,jo=!1;function Rc(e,t,r){var s=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;jo||pr==null||pr!==Pa(s)||(s=pr,"selectionStart"in s&&pl(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),ms&&Cs(ms,s)||(ms=s,s=Fa(wo,"onSelect"),0<s.length&&(t=new fl("onSelect","select",null,t,r),e.push({event:t,listeners:s}),t.target=pr)))}function Js(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var xr={animationend:Js("Animation","AnimationEnd"),animationiteration:Js("Animation","AnimationIteration"),animationstart:Js("Animation","AnimationStart"),transitionend:Js("Transition","TransitionEnd")},Ai={},Mu={};pn&&(Mu=document.createElement("div").style,"AnimationEvent"in window||(delete xr.animationend.animation,delete xr.animationiteration.animation,delete xr.animationstart.animation),"TransitionEvent"in window||delete xr.transitionend.transition);function oi(e){if(Ai[e])return Ai[e];if(!xr[e])return e;var t=xr[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in Mu)return Ai[e]=t[r];return e}var Du=oi("animationend"),zu=oi("animationiteration"),Fu=oi("animationstart"),Ou=oi("transitionend"),$u=new Map,Tc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function qn(e,t){$u.set(e,t),lr(t,[e])}for(var Li=0;Li<Tc.length;Li++){var Ii=Tc[Li],sh=Ii.toLowerCase(),ah=Ii[0].toUpperCase()+Ii.slice(1);qn(sh,"on"+ah)}qn(Du,"onAnimationEnd");qn(zu,"onAnimationIteration");qn(Fu,"onAnimationStart");qn("dblclick","onDoubleClick");qn("focusin","onFocus");qn("focusout","onBlur");qn(Ou,"onTransitionEnd");Pr("onMouseEnter",["mouseout","mouseover"]);Pr("onMouseLeave",["mouseout","mouseover"]);Pr("onPointerEnter",["pointerout","pointerover"]);Pr("onPointerLeave",["pointerout","pointerover"]);lr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));lr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));lr("onBeforeInput",["compositionend","keypress","textInput","paste"]);lr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));lr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));lr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ls="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ih=new Set("cancel close invalid load scroll toggle".split(" ").concat(ls));function _c(e,t,r){var s=e.type||"unknown-event";e.currentTarget=r,s0(s,t,void 0,e),e.currentTarget=null}function Bu(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var s=e[r],a=s.event;s=s.listeners;e:{var i=void 0;if(t)for(var o=s.length-1;0<=o;o--){var l=s[o],c=l.instance,u=l.currentTarget;if(l=l.listener,c!==i&&a.isPropagationStopped())break e;_c(a,l,u),i=c}else for(o=0;o<s.length;o++){if(l=s[o],c=l.instance,u=l.currentTarget,l=l.listener,c!==i&&a.isPropagationStopped())break e;_c(a,l,u),i=c}}}if(La)throw e=go,La=!1,go=null,e}function ze(e,t){var r=t[Eo];r===void 0&&(r=t[Eo]=new Set);var s=e+"__bubble";r.has(s)||(Uu(t,e,2,!1),r.add(s))}function Mi(e,t,r){var s=0;t&&(s|=4),Uu(r,e,s,t)}var Zs="_reactListening"+Math.random().toString(36).slice(2);function Es(e){if(!e[Zs]){e[Zs]=!0,Vd.forEach(function(r){r!=="selectionchange"&&(ih.has(r)||Mi(r,!1,e),Mi(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Zs]||(t[Zs]=!0,Mi("selectionchange",!1,t))}}function Uu(e,t,r,s){switch(Su(t)){case 1:var a=b0;break;case 4:a=w0;break;default:a=dl}r=a.bind(null,t,r,e),a=void 0,!xo||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),s?a!==void 0?e.addEventListener(t,r,{capture:!0,passive:a}):e.addEventListener(t,r,!0):a!==void 0?e.addEventListener(t,r,{passive:a}):e.addEventListener(t,r,!1)}function Di(e,t,r,s,a){var i=s;if(!(t&1)&&!(t&2)&&s!==null)e:for(;;){if(s===null)return;var o=s.tag;if(o===3||o===4){var l=s.stateNode.containerInfo;if(l===a||l.nodeType===8&&l.parentNode===a)break;if(o===4)for(o=s.return;o!==null;){var c=o.tag;if((c===3||c===4)&&(c=o.stateNode.containerInfo,c===a||c.nodeType===8&&c.parentNode===a))return;o=o.return}for(;l!==null;){if(o=Vn(l),o===null)return;if(c=o.tag,c===5||c===6){s=i=o;continue e}l=l.parentNode}}s=s.return}uu(function(){var u=i,f=il(r),x=[];e:{var m=$u.get(e);if(m!==void 0){var y=fl,p=e;switch(e){case"keypress":if(ya(r)===0)break e;case"keydown":case"keyup":y=D0;break;case"focusin":p="focus",y=Ti;break;case"focusout":p="blur",y=Ti;break;case"beforeblur":case"afterblur":y=Ti;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=vc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=k0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=O0;break;case Du:case zu:case Fu:y=E0;break;case Ou:y=B0;break;case"scroll":y=j0;break;case"wheel":y=q0;break;case"copy":case"cut":case"paste":y=T0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=bc}var j=(t&4)!==0,k=!j&&e==="scroll",v=j?m!==null?m+"Capture":null:m;j=[];for(var h=u,g;h!==null;){g=h;var E=g.stateNode;if(g.tag===5&&E!==null&&(g=E,v!==null&&(E=ws(h,v),E!=null&&j.push(Rs(h,E,g)))),k)break;h=h.return}0<j.length&&(m=new y(m,p,null,r,f),x.push({event:m,listeners:j}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",m&&r!==ho&&(p=r.relatedTarget||r.fromElement)&&(Vn(p)||p[xn]))break e;if((y||m)&&(m=f.window===f?f:(m=f.ownerDocument)?m.defaultView||m.parentWindow:window,y?(p=r.relatedTarget||r.toElement,y=u,p=p?Vn(p):null,p!==null&&(k=cr(p),p!==k||p.tag!==5&&p.tag!==6)&&(p=null)):(y=null,p=u),y!==p)){if(j=vc,E="onMouseLeave",v="onMouseEnter",h="mouse",(e==="pointerout"||e==="pointerover")&&(j=bc,E="onPointerLeave",v="onPointerEnter",h="pointer"),k=y==null?m:gr(y),g=p==null?m:gr(p),m=new j(E,h+"leave",y,r,f),m.target=k,m.relatedTarget=g,E=null,Vn(f)===u&&(j=new j(v,h+"enter",p,r,f),j.target=g,j.relatedTarget=k,E=j),k=E,y&&p)t:{for(j=y,v=p,h=0,g=j;g;g=ur(g))h++;for(g=0,E=v;E;E=ur(E))g++;for(;0<h-g;)j=ur(j),h--;for(;0<g-h;)v=ur(v),g--;for(;h--;){if(j===v||v!==null&&j===v.alternate)break t;j=ur(j),v=ur(v)}j=null}else j=null;y!==null&&Pc(x,m,y,j,!1),p!==null&&k!==null&&Pc(x,k,p,j,!0)}}e:{if(m=u?gr(u):window,y=m.nodeName&&m.nodeName.toLowerCase(),y==="select"||y==="input"&&m.type==="file")var P=X0;else if(Nc(m))if(Pu)P=eh;else{P=J0;var z=K0}else(y=m.nodeName)&&y.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(P=Z0);if(P&&(P=P(e,u))){_u(x,P,r,f);break e}z&&z(e,m,u),e==="focusout"&&(z=m._wrapperState)&&z.controlled&&m.type==="number"&&lo(m,"number",m.value)}switch(z=u?gr(u):window,e){case"focusin":(Nc(z)||z.contentEditable==="true")&&(pr=z,wo=u,ms=null);break;case"focusout":ms=wo=pr=null;break;case"mousedown":jo=!0;break;case"contextmenu":case"mouseup":case"dragend":jo=!1,Rc(x,r,f);break;case"selectionchange":if(rh)break;case"keydown":case"keyup":Rc(x,r,f)}var S;if(hl)e:{switch(e){case"compositionstart":var b="onCompositionStart";break e;case"compositionend":b="onCompositionEnd";break e;case"compositionupdate":b="onCompositionUpdate";break e}b=void 0}else hr?Ru(e,r)&&(b="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(b="onCompositionStart");b&&(Eu&&r.locale!=="ko"&&(hr||b!=="onCompositionStart"?b==="onCompositionEnd"&&hr&&(S=Cu()):(Pn=f,ul="value"in Pn?Pn.value:Pn.textContent,hr=!0)),z=Fa(u,b),0<z.length&&(b=new yc(b,e,null,r,f),x.push({event:b,listeners:z}),S?b.data=S:(S=Tu(r),S!==null&&(b.data=S)))),(S=Q0?H0(e,r):W0(e,r))&&(u=Fa(u,"onBeforeInput"),0<u.length&&(f=new yc("onBeforeInput","beforeinput",null,r,f),x.push({event:f,listeners:u}),f.data=S))}Bu(x,t)})}function Rs(e,t,r){return{instance:e,listener:t,currentTarget:r}}function Fa(e,t){for(var r=t+"Capture",s=[];e!==null;){var a=e,i=a.stateNode;a.tag===5&&i!==null&&(a=i,i=ws(e,r),i!=null&&s.unshift(Rs(e,i,a)),i=ws(e,t),i!=null&&s.push(Rs(e,i,a))),e=e.return}return s}function ur(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Pc(e,t,r,s,a){for(var i=t._reactName,o=[];r!==null&&r!==s;){var l=r,c=l.alternate,u=l.stateNode;if(c!==null&&c===s)break;l.tag===5&&u!==null&&(l=u,a?(c=ws(r,i),c!=null&&o.unshift(Rs(r,c,l))):a||(c=ws(r,i),c!=null&&o.push(Rs(r,c,l)))),r=r.return}o.length!==0&&e.push({event:t,listeners:o})}var oh=/\r\n?/g,lh=/\u0000|\uFFFD/g;function Ac(e){return(typeof e=="string"?e:""+e).replace(oh,`
`).replace(lh,"")}function ea(e,t,r){if(t=Ac(t),Ac(e)!==t&&r)throw Error(G(425))}function Oa(){}var No=null,ko=null;function So(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Co=typeof setTimeout=="function"?setTimeout:void 0,ch=typeof clearTimeout=="function"?clearTimeout:void 0,Lc=typeof Promise=="function"?Promise:void 0,dh=typeof queueMicrotask=="function"?queueMicrotask:typeof Lc<"u"?function(e){return Lc.resolve(null).then(e).catch(uh)}:Co;function uh(e){setTimeout(function(){throw e})}function zi(e,t){var r=t,s=0;do{var a=r.nextSibling;if(e.removeChild(r),a&&a.nodeType===8)if(r=a.data,r==="/$"){if(s===0){e.removeChild(a),ks(t);return}s--}else r!=="$"&&r!=="$?"&&r!=="$!"||s++;r=a}while(r);ks(t)}function Dn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Ic(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var $r=Math.random().toString(36).slice(2),rn="__reactFiber$"+$r,Ts="__reactProps$"+$r,xn="__reactContainer$"+$r,Eo="__reactEvents$"+$r,fh="__reactListeners$"+$r,mh="__reactHandles$"+$r;function Vn(e){var t=e[rn];if(t)return t;for(var r=e.parentNode;r;){if(t=r[xn]||r[rn]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=Ic(e);e!==null;){if(r=e[rn])return r;e=Ic(e)}return t}e=r,r=e.parentNode}return null}function $s(e){return e=e[rn]||e[xn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function gr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(G(33))}function li(e){return e[Ts]||null}var Ro=[],vr=-1;function Yn(e){return{current:e}}function Oe(e){0>vr||(e.current=Ro[vr],Ro[vr]=null,vr--)}function De(e,t){vr++,Ro[vr]=e.current,e.current=t}var Un={},ht=Yn(Un),kt=Yn(!1),rr=Un;function Ar(e,t){var r=e.type.contextTypes;if(!r)return Un;var s=e.stateNode;if(s&&s.__reactInternalMemoizedUnmaskedChildContext===t)return s.__reactInternalMemoizedMaskedChildContext;var a={},i;for(i in r)a[i]=t[i];return s&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=a),a}function St(e){return e=e.childContextTypes,e!=null}function $a(){Oe(kt),Oe(ht)}function Mc(e,t,r){if(ht.current!==Un)throw Error(G(168));De(ht,t),De(kt,r)}function qu(e,t,r){var s=e.stateNode;if(t=t.childContextTypes,typeof s.getChildContext!="function")return r;s=s.getChildContext();for(var a in s)if(!(a in t))throw Error(G(108,Km(e)||"Unknown",a));return Qe({},r,s)}function Ba(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Un,rr=ht.current,De(ht,e),De(kt,kt.current),!0}function Dc(e,t,r){var s=e.stateNode;if(!s)throw Error(G(169));r?(e=qu(e,t,rr),s.__reactInternalMemoizedMergedChildContext=e,Oe(kt),Oe(ht),De(ht,e)):Oe(kt),De(kt,r)}var dn=null,ci=!1,Fi=!1;function Yu(e){dn===null?dn=[e]:dn.push(e)}function hh(e){ci=!0,Yu(e)}function Qn(){if(!Fi&&dn!==null){Fi=!0;var e=0,t=Ee;try{var r=dn;for(Ee=1;e<r.length;e++){var s=r[e];do s=s(!0);while(s!==null)}dn=null,ci=!1}catch(a){throw dn!==null&&(dn=dn.slice(e+1)),pu(ol,Qn),a}finally{Ee=t,Fi=!1}}return null}var yr=[],br=0,Ua=null,qa=0,It=[],Mt=0,sr=null,un=1,fn="";function Wn(e,t){yr[br++]=qa,yr[br++]=Ua,Ua=e,qa=t}function Qu(e,t,r){It[Mt++]=un,It[Mt++]=fn,It[Mt++]=sr,sr=e;var s=un;e=fn;var a=32-Wt(s)-1;s&=~(1<<a),r+=1;var i=32-Wt(t)+a;if(30<i){var o=a-a%5;i=(s&(1<<o)-1).toString(32),s>>=o,a-=o,un=1<<32-Wt(t)+a|r<<a|s,fn=i+e}else un=1<<i|r<<a|s,fn=e}function xl(e){e.return!==null&&(Wn(e,1),Qu(e,1,0))}function gl(e){for(;e===Ua;)Ua=yr[--br],yr[br]=null,qa=yr[--br],yr[br]=null;for(;e===sr;)sr=It[--Mt],It[Mt]=null,fn=It[--Mt],It[Mt]=null,un=It[--Mt],It[Mt]=null}var _t=null,Tt=null,$e=!1,Ht=null;function Hu(e,t){var r=Dt(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function zc(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,_t=e,Tt=Dn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,_t=e,Tt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=sr!==null?{id:un,overflow:fn}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=Dt(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,_t=e,Tt=null,!0):!1;default:return!1}}function To(e){return(e.mode&1)!==0&&(e.flags&128)===0}function _o(e){if($e){var t=Tt;if(t){var r=t;if(!zc(e,t)){if(To(e))throw Error(G(418));t=Dn(r.nextSibling);var s=_t;t&&zc(e,t)?Hu(s,r):(e.flags=e.flags&-4097|2,$e=!1,_t=e)}}else{if(To(e))throw Error(G(418));e.flags=e.flags&-4097|2,$e=!1,_t=e}}}function Fc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;_t=e}function ta(e){if(e!==_t)return!1;if(!$e)return Fc(e),$e=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!So(e.type,e.memoizedProps)),t&&(t=Tt)){if(To(e))throw Wu(),Error(G(418));for(;t;)Hu(e,t),t=Dn(t.nextSibling)}if(Fc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(G(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){Tt=Dn(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}Tt=null}}else Tt=_t?Dn(e.stateNode.nextSibling):null;return!0}function Wu(){for(var e=Tt;e;)e=Dn(e.nextSibling)}function Lr(){Tt=_t=null,$e=!1}function vl(e){Ht===null?Ht=[e]:Ht.push(e)}var ph=bn.ReactCurrentBatchConfig;function Xr(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(G(309));var s=r.stateNode}if(!s)throw Error(G(147,e));var a=s,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(o){var l=a.refs;o===null?delete l[i]:l[i]=o},t._stringRef=i,t)}if(typeof e!="string")throw Error(G(284));if(!r._owner)throw Error(G(290,e))}return e}function na(e,t){throw e=Object.prototype.toString.call(t),Error(G(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Oc(e){var t=e._init;return t(e._payload)}function Gu(e){function t(v,h){if(e){var g=v.deletions;g===null?(v.deletions=[h],v.flags|=16):g.push(h)}}function r(v,h){if(!e)return null;for(;h!==null;)t(v,h),h=h.sibling;return null}function s(v,h){for(v=new Map;h!==null;)h.key!==null?v.set(h.key,h):v.set(h.index,h),h=h.sibling;return v}function a(v,h){return v=$n(v,h),v.index=0,v.sibling=null,v}function i(v,h,g){return v.index=g,e?(g=v.alternate,g!==null?(g=g.index,g<h?(v.flags|=2,h):g):(v.flags|=2,h)):(v.flags|=1048576,h)}function o(v){return e&&v.alternate===null&&(v.flags|=2),v}function l(v,h,g,E){return h===null||h.tag!==6?(h=Qi(g,v.mode,E),h.return=v,h):(h=a(h,g),h.return=v,h)}function c(v,h,g,E){var P=g.type;return P===mr?f(v,h,g.props.children,E,g.key):h!==null&&(h.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===Cn&&Oc(P)===h.type)?(E=a(h,g.props),E.ref=Xr(v,h,g),E.return=v,E):(E=Ca(g.type,g.key,g.props,null,v.mode,E),E.ref=Xr(v,h,g),E.return=v,E)}function u(v,h,g,E){return h===null||h.tag!==4||h.stateNode.containerInfo!==g.containerInfo||h.stateNode.implementation!==g.implementation?(h=Hi(g,v.mode,E),h.return=v,h):(h=a(h,g.children||[]),h.return=v,h)}function f(v,h,g,E,P){return h===null||h.tag!==7?(h=tr(g,v.mode,E,P),h.return=v,h):(h=a(h,g),h.return=v,h)}function x(v,h,g){if(typeof h=="string"&&h!==""||typeof h=="number")return h=Qi(""+h,v.mode,g),h.return=v,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Qs:return g=Ca(h.type,h.key,h.props,null,v.mode,g),g.ref=Xr(v,null,h),g.return=v,g;case fr:return h=Hi(h,v.mode,g),h.return=v,h;case Cn:var E=h._init;return x(v,E(h._payload),g)}if(is(h)||Qr(h))return h=tr(h,v.mode,g,null),h.return=v,h;na(v,h)}return null}function m(v,h,g,E){var P=h!==null?h.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return P!==null?null:l(v,h,""+g,E);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Qs:return g.key===P?c(v,h,g,E):null;case fr:return g.key===P?u(v,h,g,E):null;case Cn:return P=g._init,m(v,h,P(g._payload),E)}if(is(g)||Qr(g))return P!==null?null:f(v,h,g,E,null);na(v,g)}return null}function y(v,h,g,E,P){if(typeof E=="string"&&E!==""||typeof E=="number")return v=v.get(g)||null,l(h,v,""+E,P);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case Qs:return v=v.get(E.key===null?g:E.key)||null,c(h,v,E,P);case fr:return v=v.get(E.key===null?g:E.key)||null,u(h,v,E,P);case Cn:var z=E._init;return y(v,h,g,z(E._payload),P)}if(is(E)||Qr(E))return v=v.get(g)||null,f(h,v,E,P,null);na(h,E)}return null}function p(v,h,g,E){for(var P=null,z=null,S=h,b=h=0,w=null;S!==null&&b<g.length;b++){S.index>b?(w=S,S=null):w=S.sibling;var N=m(v,S,g[b],E);if(N===null){S===null&&(S=w);break}e&&S&&N.alternate===null&&t(v,S),h=i(N,h,b),z===null?P=N:z.sibling=N,z=N,S=w}if(b===g.length)return r(v,S),$e&&Wn(v,b),P;if(S===null){for(;b<g.length;b++)S=x(v,g[b],E),S!==null&&(h=i(S,h,b),z===null?P=S:z.sibling=S,z=S);return $e&&Wn(v,b),P}for(S=s(v,S);b<g.length;b++)w=y(S,v,b,g[b],E),w!==null&&(e&&w.alternate!==null&&S.delete(w.key===null?b:w.key),h=i(w,h,b),z===null?P=w:z.sibling=w,z=w);return e&&S.forEach(function(R){return t(v,R)}),$e&&Wn(v,b),P}function j(v,h,g,E){var P=Qr(g);if(typeof P!="function")throw Error(G(150));if(g=P.call(g),g==null)throw Error(G(151));for(var z=P=null,S=h,b=h=0,w=null,N=g.next();S!==null&&!N.done;b++,N=g.next()){S.index>b?(w=S,S=null):w=S.sibling;var R=m(v,S,N.value,E);if(R===null){S===null&&(S=w);break}e&&S&&R.alternate===null&&t(v,S),h=i(R,h,b),z===null?P=R:z.sibling=R,z=R,S=w}if(N.done)return r(v,S),$e&&Wn(v,b),P;if(S===null){for(;!N.done;b++,N=g.next())N=x(v,N.value,E),N!==null&&(h=i(N,h,b),z===null?P=N:z.sibling=N,z=N);return $e&&Wn(v,b),P}for(S=s(v,S);!N.done;b++,N=g.next())N=y(S,v,b,N.value,E),N!==null&&(e&&N.alternate!==null&&S.delete(N.key===null?b:N.key),h=i(N,h,b),z===null?P=N:z.sibling=N,z=N);return e&&S.forEach(function(F){return t(v,F)}),$e&&Wn(v,b),P}function k(v,h,g,E){if(typeof g=="object"&&g!==null&&g.type===mr&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Qs:e:{for(var P=g.key,z=h;z!==null;){if(z.key===P){if(P=g.type,P===mr){if(z.tag===7){r(v,z.sibling),h=a(z,g.props.children),h.return=v,v=h;break e}}else if(z.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===Cn&&Oc(P)===z.type){r(v,z.sibling),h=a(z,g.props),h.ref=Xr(v,z,g),h.return=v,v=h;break e}r(v,z);break}else t(v,z);z=z.sibling}g.type===mr?(h=tr(g.props.children,v.mode,E,g.key),h.return=v,v=h):(E=Ca(g.type,g.key,g.props,null,v.mode,E),E.ref=Xr(v,h,g),E.return=v,v=E)}return o(v);case fr:e:{for(z=g.key;h!==null;){if(h.key===z)if(h.tag===4&&h.stateNode.containerInfo===g.containerInfo&&h.stateNode.implementation===g.implementation){r(v,h.sibling),h=a(h,g.children||[]),h.return=v,v=h;break e}else{r(v,h);break}else t(v,h);h=h.sibling}h=Hi(g,v.mode,E),h.return=v,v=h}return o(v);case Cn:return z=g._init,k(v,h,z(g._payload),E)}if(is(g))return p(v,h,g,E);if(Qr(g))return j(v,h,g,E);na(v,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,h!==null&&h.tag===6?(r(v,h.sibling),h=a(h,g),h.return=v,v=h):(r(v,h),h=Qi(g,v.mode,E),h.return=v,v=h),o(v)):r(v,h)}return k}var Ir=Gu(!0),Vu=Gu(!1),Ya=Yn(null),Qa=null,wr=null,yl=null;function bl(){yl=wr=Qa=null}function wl(e){var t=Ya.current;Oe(Ya),e._currentValue=t}function Po(e,t,r){for(;e!==null;){var s=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,s!==null&&(s.childLanes|=t)):s!==null&&(s.childLanes&t)!==t&&(s.childLanes|=t),e===r)break;e=e.return}}function Rr(e,t){Qa=e,yl=wr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Nt=!0),e.firstContext=null)}function Ot(e){var t=e._currentValue;if(yl!==e)if(e={context:e,memoizedValue:t,next:null},wr===null){if(Qa===null)throw Error(G(308));wr=e,Qa.dependencies={lanes:0,firstContext:e}}else wr=wr.next=e;return t}var Xn=null;function jl(e){Xn===null?Xn=[e]:Xn.push(e)}function Xu(e,t,r,s){var a=t.interleaved;return a===null?(r.next=r,jl(t)):(r.next=a.next,a.next=r),t.interleaved=r,gn(e,s)}function gn(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}var En=!1;function Nl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ku(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function mn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function zn(e,t,r){var s=e.updateQueue;if(s===null)return null;if(s=s.shared,Ne&2){var a=s.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),s.pending=t,gn(e,r)}return a=s.interleaved,a===null?(t.next=t,jl(s)):(t.next=a.next,a.next=t),s.interleaved=t,gn(e,r)}function ba(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var s=t.lanes;s&=e.pendingLanes,r|=s,t.lanes=r,ll(e,r)}}function $c(e,t){var r=e.updateQueue,s=e.alternate;if(s!==null&&(s=s.updateQueue,r===s)){var a=null,i=null;if(r=r.firstBaseUpdate,r!==null){do{var o={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};i===null?a=i=o:i=i.next=o,r=r.next}while(r!==null);i===null?a=i=t:i=i.next=t}else a=i=t;r={baseState:s.baseState,firstBaseUpdate:a,lastBaseUpdate:i,shared:s.shared,effects:s.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function Ha(e,t,r,s){var a=e.updateQueue;En=!1;var i=a.firstBaseUpdate,o=a.lastBaseUpdate,l=a.shared.pending;if(l!==null){a.shared.pending=null;var c=l,u=c.next;c.next=null,o===null?i=u:o.next=u,o=c;var f=e.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==o&&(l===null?f.firstBaseUpdate=u:l.next=u,f.lastBaseUpdate=c))}if(i!==null){var x=a.baseState;o=0,f=u=c=null,l=i;do{var m=l.lane,y=l.eventTime;if((s&m)===m){f!==null&&(f=f.next={eventTime:y,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var p=e,j=l;switch(m=t,y=r,j.tag){case 1:if(p=j.payload,typeof p=="function"){x=p.call(y,x,m);break e}x=p;break e;case 3:p.flags=p.flags&-65537|128;case 0:if(p=j.payload,m=typeof p=="function"?p.call(y,x,m):p,m==null)break e;x=Qe({},x,m);break e;case 2:En=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,m=a.effects,m===null?a.effects=[l]:m.push(l))}else y={eventTime:y,lane:m,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(u=f=y,c=x):f=f.next=y,o|=m;if(l=l.next,l===null){if(l=a.shared.pending,l===null)break;m=l,l=m.next,m.next=null,a.lastBaseUpdate=m,a.shared.pending=null}}while(1);if(f===null&&(c=x),a.baseState=c,a.firstBaseUpdate=u,a.lastBaseUpdate=f,t=a.shared.interleaved,t!==null){a=t;do o|=a.lane,a=a.next;while(a!==t)}else i===null&&(a.shared.lanes=0);ir|=o,e.lanes=o,e.memoizedState=x}}function Bc(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var s=e[t],a=s.callback;if(a!==null){if(s.callback=null,s=r,typeof a!="function")throw Error(G(191,a));a.call(s)}}}var Bs={},an=Yn(Bs),_s=Yn(Bs),Ps=Yn(Bs);function Kn(e){if(e===Bs)throw Error(G(174));return e}function kl(e,t){switch(De(Ps,t),De(_s,e),De(an,Bs),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:uo(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=uo(t,e)}Oe(an),De(an,t)}function Mr(){Oe(an),Oe(_s),Oe(Ps)}function Ju(e){Kn(Ps.current);var t=Kn(an.current),r=uo(t,e.type);t!==r&&(De(_s,e),De(an,r))}function Sl(e){_s.current===e&&(Oe(an),Oe(_s))}var qe=Yn(0);function Wa(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Oi=[];function Cl(){for(var e=0;e<Oi.length;e++)Oi[e]._workInProgressVersionPrimary=null;Oi.length=0}var wa=bn.ReactCurrentDispatcher,$i=bn.ReactCurrentBatchConfig,ar=0,Ye=null,et=null,st=null,Ga=!1,hs=!1,As=0,xh=0;function dt(){throw Error(G(321))}function El(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!Vt(e[r],t[r]))return!1;return!0}function Rl(e,t,r,s,a,i){if(ar=i,Ye=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,wa.current=e===null||e.memoizedState===null?bh:wh,e=r(s,a),hs){i=0;do{if(hs=!1,As=0,25<=i)throw Error(G(301));i+=1,st=et=null,t.updateQueue=null,wa.current=jh,e=r(s,a)}while(hs)}if(wa.current=Va,t=et!==null&&et.next!==null,ar=0,st=et=Ye=null,Ga=!1,t)throw Error(G(300));return e}function Tl(){var e=As!==0;return As=0,e}function tn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return st===null?Ye.memoizedState=st=e:st=st.next=e,st}function $t(){if(et===null){var e=Ye.alternate;e=e!==null?e.memoizedState:null}else e=et.next;var t=st===null?Ye.memoizedState:st.next;if(t!==null)st=t,et=e;else{if(e===null)throw Error(G(310));et=e,e={memoizedState:et.memoizedState,baseState:et.baseState,baseQueue:et.baseQueue,queue:et.queue,next:null},st===null?Ye.memoizedState=st=e:st=st.next=e}return st}function Ls(e,t){return typeof t=="function"?t(e):t}function Bi(e){var t=$t(),r=t.queue;if(r===null)throw Error(G(311));r.lastRenderedReducer=e;var s=et,a=s.baseQueue,i=r.pending;if(i!==null){if(a!==null){var o=a.next;a.next=i.next,i.next=o}s.baseQueue=a=i,r.pending=null}if(a!==null){i=a.next,s=s.baseState;var l=o=null,c=null,u=i;do{var f=u.lane;if((ar&f)===f)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),s=u.hasEagerState?u.eagerState:e(s,u.action);else{var x={lane:f,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(l=c=x,o=s):c=c.next=x,Ye.lanes|=f,ir|=f}u=u.next}while(u!==null&&u!==i);c===null?o=s:c.next=l,Vt(s,t.memoizedState)||(Nt=!0),t.memoizedState=s,t.baseState=o,t.baseQueue=c,r.lastRenderedState=s}if(e=r.interleaved,e!==null){a=e;do i=a.lane,Ye.lanes|=i,ir|=i,a=a.next;while(a!==e)}else a===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function Ui(e){var t=$t(),r=t.queue;if(r===null)throw Error(G(311));r.lastRenderedReducer=e;var s=r.dispatch,a=r.pending,i=t.memoizedState;if(a!==null){r.pending=null;var o=a=a.next;do i=e(i,o.action),o=o.next;while(o!==a);Vt(i,t.memoizedState)||(Nt=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),r.lastRenderedState=i}return[i,s]}function Zu(){}function ef(e,t){var r=Ye,s=$t(),a=t(),i=!Vt(s.memoizedState,a);if(i&&(s.memoizedState=a,Nt=!0),s=s.queue,_l(rf.bind(null,r,s,e),[e]),s.getSnapshot!==t||i||st!==null&&st.memoizedState.tag&1){if(r.flags|=2048,Is(9,nf.bind(null,r,s,a,t),void 0,null),at===null)throw Error(G(349));ar&30||tf(r,t,a)}return a}function tf(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=Ye.updateQueue,t===null?(t={lastEffect:null,stores:null},Ye.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function nf(e,t,r,s){t.value=r,t.getSnapshot=s,sf(t)&&af(e)}function rf(e,t,r){return r(function(){sf(t)&&af(e)})}function sf(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!Vt(e,r)}catch{return!0}}function af(e){var t=gn(e,1);t!==null&&Gt(t,e,1,-1)}function Uc(e){var t=tn();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ls,lastRenderedState:e},t.queue=e,e=e.dispatch=yh.bind(null,Ye,e),[t.memoizedState,e]}function Is(e,t,r,s){return e={tag:e,create:t,destroy:r,deps:s,next:null},t=Ye.updateQueue,t===null?(t={lastEffect:null,stores:null},Ye.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(s=r.next,r.next=e,e.next=s,t.lastEffect=e)),e}function of(){return $t().memoizedState}function ja(e,t,r,s){var a=tn();Ye.flags|=e,a.memoizedState=Is(1|t,r,void 0,s===void 0?null:s)}function di(e,t,r,s){var a=$t();s=s===void 0?null:s;var i=void 0;if(et!==null){var o=et.memoizedState;if(i=o.destroy,s!==null&&El(s,o.deps)){a.memoizedState=Is(t,r,i,s);return}}Ye.flags|=e,a.memoizedState=Is(1|t,r,i,s)}function qc(e,t){return ja(8390656,8,e,t)}function _l(e,t){return di(2048,8,e,t)}function lf(e,t){return di(4,2,e,t)}function cf(e,t){return di(4,4,e,t)}function df(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function uf(e,t,r){return r=r!=null?r.concat([e]):null,di(4,4,df.bind(null,t,e),r)}function Pl(){}function ff(e,t){var r=$t();t=t===void 0?null:t;var s=r.memoizedState;return s!==null&&t!==null&&El(t,s[1])?s[0]:(r.memoizedState=[e,t],e)}function mf(e,t){var r=$t();t=t===void 0?null:t;var s=r.memoizedState;return s!==null&&t!==null&&El(t,s[1])?s[0]:(e=e(),r.memoizedState=[e,t],e)}function hf(e,t,r){return ar&21?(Vt(r,t)||(r=vu(),Ye.lanes|=r,ir|=r,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Nt=!0),e.memoizedState=r)}function gh(e,t){var r=Ee;Ee=r!==0&&4>r?r:4,e(!0);var s=$i.transition;$i.transition={};try{e(!1),t()}finally{Ee=r,$i.transition=s}}function pf(){return $t().memoizedState}function vh(e,t,r){var s=On(e);if(r={lane:s,action:r,hasEagerState:!1,eagerState:null,next:null},xf(e))gf(t,r);else if(r=Xu(e,t,r,s),r!==null){var a=vt();Gt(r,e,s,a),vf(r,t,s)}}function yh(e,t,r){var s=On(e),a={lane:s,action:r,hasEagerState:!1,eagerState:null,next:null};if(xf(e))gf(t,a);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var o=t.lastRenderedState,l=i(o,r);if(a.hasEagerState=!0,a.eagerState=l,Vt(l,o)){var c=t.interleaved;c===null?(a.next=a,jl(t)):(a.next=c.next,c.next=a),t.interleaved=a;return}}catch{}finally{}r=Xu(e,t,a,s),r!==null&&(a=vt(),Gt(r,e,s,a),vf(r,t,s))}}function xf(e){var t=e.alternate;return e===Ye||t!==null&&t===Ye}function gf(e,t){hs=Ga=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function vf(e,t,r){if(r&4194240){var s=t.lanes;s&=e.pendingLanes,r|=s,t.lanes=r,ll(e,r)}}var Va={readContext:Ot,useCallback:dt,useContext:dt,useEffect:dt,useImperativeHandle:dt,useInsertionEffect:dt,useLayoutEffect:dt,useMemo:dt,useReducer:dt,useRef:dt,useState:dt,useDebugValue:dt,useDeferredValue:dt,useTransition:dt,useMutableSource:dt,useSyncExternalStore:dt,useId:dt,unstable_isNewReconciler:!1},bh={readContext:Ot,useCallback:function(e,t){return tn().memoizedState=[e,t===void 0?null:t],e},useContext:Ot,useEffect:qc,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,ja(4194308,4,df.bind(null,t,e),r)},useLayoutEffect:function(e,t){return ja(4194308,4,e,t)},useInsertionEffect:function(e,t){return ja(4,2,e,t)},useMemo:function(e,t){var r=tn();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var s=tn();return t=r!==void 0?r(t):t,s.memoizedState=s.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},s.queue=e,e=e.dispatch=vh.bind(null,Ye,e),[s.memoizedState,e]},useRef:function(e){var t=tn();return e={current:e},t.memoizedState=e},useState:Uc,useDebugValue:Pl,useDeferredValue:function(e){return tn().memoizedState=e},useTransition:function(){var e=Uc(!1),t=e[0];return e=gh.bind(null,e[1]),tn().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var s=Ye,a=tn();if($e){if(r===void 0)throw Error(G(407));r=r()}else{if(r=t(),at===null)throw Error(G(349));ar&30||tf(s,t,r)}a.memoizedState=r;var i={value:r,getSnapshot:t};return a.queue=i,qc(rf.bind(null,s,i,e),[e]),s.flags|=2048,Is(9,nf.bind(null,s,i,r,t),void 0,null),r},useId:function(){var e=tn(),t=at.identifierPrefix;if($e){var r=fn,s=un;r=(s&~(1<<32-Wt(s)-1)).toString(32)+r,t=":"+t+"R"+r,r=As++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=xh++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},wh={readContext:Ot,useCallback:ff,useContext:Ot,useEffect:_l,useImperativeHandle:uf,useInsertionEffect:lf,useLayoutEffect:cf,useMemo:mf,useReducer:Bi,useRef:of,useState:function(){return Bi(Ls)},useDebugValue:Pl,useDeferredValue:function(e){var t=$t();return hf(t,et.memoizedState,e)},useTransition:function(){var e=Bi(Ls)[0],t=$t().memoizedState;return[e,t]},useMutableSource:Zu,useSyncExternalStore:ef,useId:pf,unstable_isNewReconciler:!1},jh={readContext:Ot,useCallback:ff,useContext:Ot,useEffect:_l,useImperativeHandle:uf,useInsertionEffect:lf,useLayoutEffect:cf,useMemo:mf,useReducer:Ui,useRef:of,useState:function(){return Ui(Ls)},useDebugValue:Pl,useDeferredValue:function(e){var t=$t();return et===null?t.memoizedState=e:hf(t,et.memoizedState,e)},useTransition:function(){var e=Ui(Ls)[0],t=$t().memoizedState;return[e,t]},useMutableSource:Zu,useSyncExternalStore:ef,useId:pf,unstable_isNewReconciler:!1};function Yt(e,t){if(e&&e.defaultProps){t=Qe({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}function Ao(e,t,r,s){t=e.memoizedState,r=r(s,t),r=r==null?t:Qe({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var ui={isMounted:function(e){return(e=e._reactInternals)?cr(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var s=vt(),a=On(e),i=mn(s,a);i.payload=t,r!=null&&(i.callback=r),t=zn(e,i,a),t!==null&&(Gt(t,e,a,s),ba(t,e,a))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var s=vt(),a=On(e),i=mn(s,a);i.tag=1,i.payload=t,r!=null&&(i.callback=r),t=zn(e,i,a),t!==null&&(Gt(t,e,a,s),ba(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=vt(),s=On(e),a=mn(r,s);a.tag=2,t!=null&&(a.callback=t),t=zn(e,a,s),t!==null&&(Gt(t,e,s,r),ba(t,e,s))}};function Yc(e,t,r,s,a,i,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(s,i,o):t.prototype&&t.prototype.isPureReactComponent?!Cs(r,s)||!Cs(a,i):!0}function yf(e,t,r){var s=!1,a=Un,i=t.contextType;return typeof i=="object"&&i!==null?i=Ot(i):(a=St(t)?rr:ht.current,s=t.contextTypes,i=(s=s!=null)?Ar(e,a):Un),t=new t(r,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ui,e.stateNode=t,t._reactInternals=e,s&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=i),t}function Qc(e,t,r,s){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,s),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,s),t.state!==e&&ui.enqueueReplaceState(t,t.state,null)}function Lo(e,t,r,s){var a=e.stateNode;a.props=r,a.state=e.memoizedState,a.refs={},Nl(e);var i=t.contextType;typeof i=="object"&&i!==null?a.context=Ot(i):(i=St(t)?rr:ht.current,a.context=Ar(e,i)),a.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Ao(e,t,i,r),a.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(t=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),t!==a.state&&ui.enqueueReplaceState(a,a.state,null),Ha(e,r,a,s),a.state=e.memoizedState),typeof a.componentDidMount=="function"&&(e.flags|=4194308)}function Dr(e,t){try{var r="",s=t;do r+=Xm(s),s=s.return;while(s);var a=r}catch(i){a=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:a,digest:null}}function qi(e,t,r){return{value:e,source:null,stack:r??null,digest:t??null}}function Io(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var Nh=typeof WeakMap=="function"?WeakMap:Map;function bf(e,t,r){r=mn(-1,r),r.tag=3,r.payload={element:null};var s=t.value;return r.callback=function(){Ka||(Ka=!0,Yo=s),Io(e,t)},r}function wf(e,t,r){r=mn(-1,r),r.tag=3;var s=e.type.getDerivedStateFromError;if(typeof s=="function"){var a=t.value;r.payload=function(){return s(a)},r.callback=function(){Io(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(r.callback=function(){Io(e,t),typeof s!="function"&&(Fn===null?Fn=new Set([this]):Fn.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),r}function Hc(e,t,r){var s=e.pingCache;if(s===null){s=e.pingCache=new Nh;var a=new Set;s.set(t,a)}else a=s.get(t),a===void 0&&(a=new Set,s.set(t,a));a.has(r)||(a.add(r),e=zh.bind(null,e,t,r),t.then(e,e))}function Wc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Gc(e,t,r,s,a){return e.mode&1?(e.flags|=65536,e.lanes=a,e):(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=mn(-1,1),t.tag=2,zn(r,t,1))),r.lanes|=1),e)}var kh=bn.ReactCurrentOwner,Nt=!1;function gt(e,t,r,s){t.child=e===null?Vu(t,null,r,s):Ir(t,e.child,r,s)}function Vc(e,t,r,s,a){r=r.render;var i=t.ref;return Rr(t,a),s=Rl(e,t,r,s,i,a),r=Tl(),e!==null&&!Nt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,vn(e,t,a)):($e&&r&&xl(t),t.flags|=1,gt(e,t,s,a),t.child)}function Xc(e,t,r,s,a){if(e===null){var i=r.type;return typeof i=="function"&&!Ol(i)&&i.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=i,jf(e,t,i,s,a)):(e=Ca(r.type,null,s,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&a)){var o=i.memoizedProps;if(r=r.compare,r=r!==null?r:Cs,r(o,s)&&e.ref===t.ref)return vn(e,t,a)}return t.flags|=1,e=$n(i,s),e.ref=t.ref,e.return=t,t.child=e}function jf(e,t,r,s,a){if(e!==null){var i=e.memoizedProps;if(Cs(i,s)&&e.ref===t.ref)if(Nt=!1,t.pendingProps=s=i,(e.lanes&a)!==0)e.flags&131072&&(Nt=!0);else return t.lanes=e.lanes,vn(e,t,a)}return Mo(e,t,r,s,a)}function Nf(e,t,r){var s=t.pendingProps,a=s.children,i=e!==null?e.memoizedState:null;if(s.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},De(Nr,Rt),Rt|=r;else{if(!(r&1073741824))return e=i!==null?i.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,De(Nr,Rt),Rt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},s=i!==null?i.baseLanes:r,De(Nr,Rt),Rt|=s}else i!==null?(s=i.baseLanes|r,t.memoizedState=null):s=r,De(Nr,Rt),Rt|=s;return gt(e,t,a,r),t.child}function kf(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function Mo(e,t,r,s,a){var i=St(r)?rr:ht.current;return i=Ar(t,i),Rr(t,a),r=Rl(e,t,r,s,i,a),s=Tl(),e!==null&&!Nt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,vn(e,t,a)):($e&&s&&xl(t),t.flags|=1,gt(e,t,r,a),t.child)}function Kc(e,t,r,s,a){if(St(r)){var i=!0;Ba(t)}else i=!1;if(Rr(t,a),t.stateNode===null)Na(e,t),yf(t,r,s),Lo(t,r,s,a),s=!0;else if(e===null){var o=t.stateNode,l=t.memoizedProps;o.props=l;var c=o.context,u=r.contextType;typeof u=="object"&&u!==null?u=Ot(u):(u=St(r)?rr:ht.current,u=Ar(t,u));var f=r.getDerivedStateFromProps,x=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";x||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==s||c!==u)&&Qc(t,o,s,u),En=!1;var m=t.memoizedState;o.state=m,Ha(t,s,o,a),c=t.memoizedState,l!==s||m!==c||kt.current||En?(typeof f=="function"&&(Ao(t,r,f,s),c=t.memoizedState),(l=En||Yc(t,r,l,s,m,c,u))?(x||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=s,t.memoizedState=c),o.props=s,o.state=c,o.context=u,s=l):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),s=!1)}else{o=t.stateNode,Ku(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:Yt(t.type,l),o.props=u,x=t.pendingProps,m=o.context,c=r.contextType,typeof c=="object"&&c!==null?c=Ot(c):(c=St(r)?rr:ht.current,c=Ar(t,c));var y=r.getDerivedStateFromProps;(f=typeof y=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==x||m!==c)&&Qc(t,o,s,c),En=!1,m=t.memoizedState,o.state=m,Ha(t,s,o,a);var p=t.memoizedState;l!==x||m!==p||kt.current||En?(typeof y=="function"&&(Ao(t,r,y,s),p=t.memoizedState),(u=En||Yc(t,r,u,s,m,p,c)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(s,p,c),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(s,p,c)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=s,t.memoizedState=p),o.props=s,o.state=p,o.context=c,s=u):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),s=!1)}return Do(e,t,r,s,i,a)}function Do(e,t,r,s,a,i){kf(e,t);var o=(t.flags&128)!==0;if(!s&&!o)return a&&Dc(t,r,!1),vn(e,t,i);s=t.stateNode,kh.current=t;var l=o&&typeof r.getDerivedStateFromError!="function"?null:s.render();return t.flags|=1,e!==null&&o?(t.child=Ir(t,e.child,null,i),t.child=Ir(t,null,l,i)):gt(e,t,l,i),t.memoizedState=s.state,a&&Dc(t,r,!0),t.child}function Sf(e){var t=e.stateNode;t.pendingContext?Mc(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Mc(e,t.context,!1),kl(e,t.containerInfo)}function Jc(e,t,r,s,a){return Lr(),vl(a),t.flags|=256,gt(e,t,r,s),t.child}var zo={dehydrated:null,treeContext:null,retryLane:0};function Fo(e){return{baseLanes:e,cachePool:null,transitions:null}}function Cf(e,t,r){var s=t.pendingProps,a=qe.current,i=!1,o=(t.flags&128)!==0,l;if((l=o)||(l=e!==null&&e.memoizedState===null?!1:(a&2)!==0),l?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(a|=1),De(qe,a&1),e===null)return _o(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=s.children,e=s.fallback,i?(s=t.mode,i=t.child,o={mode:"hidden",children:o},!(s&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=hi(o,s,0,null),e=tr(e,s,r,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Fo(r),t.memoizedState=zo,e):Al(t,o));if(a=e.memoizedState,a!==null&&(l=a.dehydrated,l!==null))return Sh(e,t,o,s,l,a,r);if(i){i=s.fallback,o=t.mode,a=e.child,l=a.sibling;var c={mode:"hidden",children:s.children};return!(o&1)&&t.child!==a?(s=t.child,s.childLanes=0,s.pendingProps=c,t.deletions=null):(s=$n(a,c),s.subtreeFlags=a.subtreeFlags&14680064),l!==null?i=$n(l,i):(i=tr(i,o,r,null),i.flags|=2),i.return=t,s.return=t,s.sibling=i,t.child=s,s=i,i=t.child,o=e.child.memoizedState,o=o===null?Fo(r):{baseLanes:o.baseLanes|r,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=e.childLanes&~r,t.memoizedState=zo,s}return i=e.child,e=i.sibling,s=$n(i,{mode:"visible",children:s.children}),!(t.mode&1)&&(s.lanes=r),s.return=t,s.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=s,t.memoizedState=null,s}function Al(e,t){return t=hi({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ra(e,t,r,s){return s!==null&&vl(s),Ir(t,e.child,null,r),e=Al(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Sh(e,t,r,s,a,i,o){if(r)return t.flags&256?(t.flags&=-257,s=qi(Error(G(422))),ra(e,t,o,s)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=s.fallback,a=t.mode,s=hi({mode:"visible",children:s.children},a,0,null),i=tr(i,a,o,null),i.flags|=2,s.return=t,i.return=t,s.sibling=i,t.child=s,t.mode&1&&Ir(t,e.child,null,o),t.child.memoizedState=Fo(o),t.memoizedState=zo,i);if(!(t.mode&1))return ra(e,t,o,null);if(a.data==="$!"){if(s=a.nextSibling&&a.nextSibling.dataset,s)var l=s.dgst;return s=l,i=Error(G(419)),s=qi(i,s,void 0),ra(e,t,o,s)}if(l=(o&e.childLanes)!==0,Nt||l){if(s=at,s!==null){switch(o&-o){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=a&(s.suspendedLanes|o)?0:a,a!==0&&a!==i.retryLane&&(i.retryLane=a,gn(e,a),Gt(s,e,a,-1))}return Fl(),s=qi(Error(G(421))),ra(e,t,o,s)}return a.data==="$?"?(t.flags|=128,t.child=e.child,t=Fh.bind(null,e),a._reactRetry=t,null):(e=i.treeContext,Tt=Dn(a.nextSibling),_t=t,$e=!0,Ht=null,e!==null&&(It[Mt++]=un,It[Mt++]=fn,It[Mt++]=sr,un=e.id,fn=e.overflow,sr=t),t=Al(t,s.children),t.flags|=4096,t)}function Zc(e,t,r){e.lanes|=t;var s=e.alternate;s!==null&&(s.lanes|=t),Po(e.return,t,r)}function Yi(e,t,r,s,a){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:s,tail:r,tailMode:a}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=s,i.tail=r,i.tailMode=a)}function Ef(e,t,r){var s=t.pendingProps,a=s.revealOrder,i=s.tail;if(gt(e,t,s.children,r),s=qe.current,s&2)s=s&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Zc(e,r,t);else if(e.tag===19)Zc(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}s&=1}if(De(qe,s),!(t.mode&1))t.memoizedState=null;else switch(a){case"forwards":for(r=t.child,a=null;r!==null;)e=r.alternate,e!==null&&Wa(e)===null&&(a=r),r=r.sibling;r=a,r===null?(a=t.child,t.child=null):(a=r.sibling,r.sibling=null),Yi(t,!1,a,r,i);break;case"backwards":for(r=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&Wa(e)===null){t.child=a;break}e=a.sibling,a.sibling=r,r=a,a=e}Yi(t,!0,r,null,i);break;case"together":Yi(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Na(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function vn(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),ir|=t.lanes,!(r&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(G(153));if(t.child!==null){for(e=t.child,r=$n(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=$n(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function Ch(e,t,r){switch(t.tag){case 3:Sf(t),Lr();break;case 5:Ju(t);break;case 1:St(t.type)&&Ba(t);break;case 4:kl(t,t.stateNode.containerInfo);break;case 10:var s=t.type._context,a=t.memoizedProps.value;De(Ya,s._currentValue),s._currentValue=a;break;case 13:if(s=t.memoizedState,s!==null)return s.dehydrated!==null?(De(qe,qe.current&1),t.flags|=128,null):r&t.child.childLanes?Cf(e,t,r):(De(qe,qe.current&1),e=vn(e,t,r),e!==null?e.sibling:null);De(qe,qe.current&1);break;case 19:if(s=(r&t.childLanes)!==0,e.flags&128){if(s)return Ef(e,t,r);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),De(qe,qe.current),s)break;return null;case 22:case 23:return t.lanes=0,Nf(e,t,r)}return vn(e,t,r)}var Rf,Oo,Tf,_f;Rf=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}};Oo=function(){};Tf=function(e,t,r,s){var a=e.memoizedProps;if(a!==s){e=t.stateNode,Kn(an.current);var i=null;switch(r){case"input":a=io(e,a),s=io(e,s),i=[];break;case"select":a=Qe({},a,{value:void 0}),s=Qe({},s,{value:void 0}),i=[];break;case"textarea":a=co(e,a),s=co(e,s),i=[];break;default:typeof a.onClick!="function"&&typeof s.onClick=="function"&&(e.onclick=Oa)}fo(r,s);var o;r=null;for(u in a)if(!s.hasOwnProperty(u)&&a.hasOwnProperty(u)&&a[u]!=null)if(u==="style"){var l=a[u];for(o in l)l.hasOwnProperty(o)&&(r||(r={}),r[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(ys.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in s){var c=s[u];if(l=a!=null?a[u]:void 0,s.hasOwnProperty(u)&&c!==l&&(c!=null||l!=null))if(u==="style")if(l){for(o in l)!l.hasOwnProperty(o)||c&&c.hasOwnProperty(o)||(r||(r={}),r[o]="");for(o in c)c.hasOwnProperty(o)&&l[o]!==c[o]&&(r||(r={}),r[o]=c[o])}else r||(i||(i=[]),i.push(u,r)),r=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,l=l?l.__html:void 0,c!=null&&l!==c&&(i=i||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(i=i||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(ys.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&ze("scroll",e),i||l===c||(i=[])):(i=i||[]).push(u,c))}r&&(i=i||[]).push("style",r);var u=i;(t.updateQueue=u)&&(t.flags|=4)}};_f=function(e,t,r,s){r!==s&&(t.flags|=4)};function Kr(e,t){if(!$e)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var s=null;r!==null;)r.alternate!==null&&(s=r),r=r.sibling;s===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:s.sibling=null}}function ut(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,s=0;if(t)for(var a=e.child;a!==null;)r|=a.lanes|a.childLanes,s|=a.subtreeFlags&14680064,s|=a.flags&14680064,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)r|=a.lanes|a.childLanes,s|=a.subtreeFlags,s|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=s,e.childLanes=r,t}function Eh(e,t,r){var s=t.pendingProps;switch(gl(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ut(t),null;case 1:return St(t.type)&&$a(),ut(t),null;case 3:return s=t.stateNode,Mr(),Oe(kt),Oe(ht),Cl(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(e===null||e.child===null)&&(ta(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ht!==null&&(Wo(Ht),Ht=null))),Oo(e,t),ut(t),null;case 5:Sl(t);var a=Kn(Ps.current);if(r=t.type,e!==null&&t.stateNode!=null)Tf(e,t,r,s,a),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!s){if(t.stateNode===null)throw Error(G(166));return ut(t),null}if(e=Kn(an.current),ta(t)){s=t.stateNode,r=t.type;var i=t.memoizedProps;switch(s[rn]=t,s[Ts]=i,e=(t.mode&1)!==0,r){case"dialog":ze("cancel",s),ze("close",s);break;case"iframe":case"object":case"embed":ze("load",s);break;case"video":case"audio":for(a=0;a<ls.length;a++)ze(ls[a],s);break;case"source":ze("error",s);break;case"img":case"image":case"link":ze("error",s),ze("load",s);break;case"details":ze("toggle",s);break;case"input":lc(s,i),ze("invalid",s);break;case"select":s._wrapperState={wasMultiple:!!i.multiple},ze("invalid",s);break;case"textarea":dc(s,i),ze("invalid",s)}fo(r,i),a=null;for(var o in i)if(i.hasOwnProperty(o)){var l=i[o];o==="children"?typeof l=="string"?s.textContent!==l&&(i.suppressHydrationWarning!==!0&&ea(s.textContent,l,e),a=["children",l]):typeof l=="number"&&s.textContent!==""+l&&(i.suppressHydrationWarning!==!0&&ea(s.textContent,l,e),a=["children",""+l]):ys.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&ze("scroll",s)}switch(r){case"input":Hs(s),cc(s,i,!0);break;case"textarea":Hs(s),uc(s);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(s.onclick=Oa)}s=a,t.updateQueue=s,s!==null&&(t.flags|=4)}else{o=a.nodeType===9?a:a.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=ru(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof s.is=="string"?e=o.createElement(r,{is:s.is}):(e=o.createElement(r),r==="select"&&(o=e,s.multiple?o.multiple=!0:s.size&&(o.size=s.size))):e=o.createElementNS(e,r),e[rn]=t,e[Ts]=s,Rf(e,t,!1,!1),t.stateNode=e;e:{switch(o=mo(r,s),r){case"dialog":ze("cancel",e),ze("close",e),a=s;break;case"iframe":case"object":case"embed":ze("load",e),a=s;break;case"video":case"audio":for(a=0;a<ls.length;a++)ze(ls[a],e);a=s;break;case"source":ze("error",e),a=s;break;case"img":case"image":case"link":ze("error",e),ze("load",e),a=s;break;case"details":ze("toggle",e),a=s;break;case"input":lc(e,s),a=io(e,s),ze("invalid",e);break;case"option":a=s;break;case"select":e._wrapperState={wasMultiple:!!s.multiple},a=Qe({},s,{value:void 0}),ze("invalid",e);break;case"textarea":dc(e,s),a=co(e,s),ze("invalid",e);break;default:a=s}fo(r,a),l=a;for(i in l)if(l.hasOwnProperty(i)){var c=l[i];i==="style"?iu(e,c):i==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&su(e,c)):i==="children"?typeof c=="string"?(r!=="textarea"||c!=="")&&bs(e,c):typeof c=="number"&&bs(e,""+c):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(ys.hasOwnProperty(i)?c!=null&&i==="onScroll"&&ze("scroll",e):c!=null&&nl(e,i,c,o))}switch(r){case"input":Hs(e),cc(e,s,!1);break;case"textarea":Hs(e),uc(e);break;case"option":s.value!=null&&e.setAttribute("value",""+Bn(s.value));break;case"select":e.multiple=!!s.multiple,i=s.value,i!=null?kr(e,!!s.multiple,i,!1):s.defaultValue!=null&&kr(e,!!s.multiple,s.defaultValue,!0);break;default:typeof a.onClick=="function"&&(e.onclick=Oa)}switch(r){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break e;case"img":s=!0;break e;default:s=!1}}s&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ut(t),null;case 6:if(e&&t.stateNode!=null)_f(e,t,e.memoizedProps,s);else{if(typeof s!="string"&&t.stateNode===null)throw Error(G(166));if(r=Kn(Ps.current),Kn(an.current),ta(t)){if(s=t.stateNode,r=t.memoizedProps,s[rn]=t,(i=s.nodeValue!==r)&&(e=_t,e!==null))switch(e.tag){case 3:ea(s.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ea(s.nodeValue,r,(e.mode&1)!==0)}i&&(t.flags|=4)}else s=(r.nodeType===9?r:r.ownerDocument).createTextNode(s),s[rn]=t,t.stateNode=s}return ut(t),null;case 13:if(Oe(qe),s=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if($e&&Tt!==null&&t.mode&1&&!(t.flags&128))Wu(),Lr(),t.flags|=98560,i=!1;else if(i=ta(t),s!==null&&s.dehydrated!==null){if(e===null){if(!i)throw Error(G(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(G(317));i[rn]=t}else Lr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ut(t),i=!1}else Ht!==null&&(Wo(Ht),Ht=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=r,t):(s=s!==null,s!==(e!==null&&e.memoizedState!==null)&&s&&(t.child.flags|=8192,t.mode&1&&(e===null||qe.current&1?tt===0&&(tt=3):Fl())),t.updateQueue!==null&&(t.flags|=4),ut(t),null);case 4:return Mr(),Oo(e,t),e===null&&Es(t.stateNode.containerInfo),ut(t),null;case 10:return wl(t.type._context),ut(t),null;case 17:return St(t.type)&&$a(),ut(t),null;case 19:if(Oe(qe),i=t.memoizedState,i===null)return ut(t),null;if(s=(t.flags&128)!==0,o=i.rendering,o===null)if(s)Kr(i,!1);else{if(tt!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=Wa(e),o!==null){for(t.flags|=128,Kr(i,!1),s=o.updateQueue,s!==null&&(t.updateQueue=s,t.flags|=4),t.subtreeFlags=0,s=r,r=t.child;r!==null;)i=r,e=s,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,e=o.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return De(qe,qe.current&1|2),t.child}e=e.sibling}i.tail!==null&&Xe()>zr&&(t.flags|=128,s=!0,Kr(i,!1),t.lanes=4194304)}else{if(!s)if(e=Wa(o),e!==null){if(t.flags|=128,s=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),Kr(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!$e)return ut(t),null}else 2*Xe()-i.renderingStartTime>zr&&r!==1073741824&&(t.flags|=128,s=!0,Kr(i,!1),t.lanes=4194304);i.isBackwards?(o.sibling=t.child,t.child=o):(r=i.last,r!==null?r.sibling=o:t.child=o,i.last=o)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=Xe(),t.sibling=null,r=qe.current,De(qe,s?r&1|2:r&1),t):(ut(t),null);case 22:case 23:return zl(),s=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==s&&(t.flags|=8192),s&&t.mode&1?Rt&1073741824&&(ut(t),t.subtreeFlags&6&&(t.flags|=8192)):ut(t),null;case 24:return null;case 25:return null}throw Error(G(156,t.tag))}function Rh(e,t){switch(gl(t),t.tag){case 1:return St(t.type)&&$a(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Mr(),Oe(kt),Oe(ht),Cl(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Sl(t),null;case 13:if(Oe(qe),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(G(340));Lr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Oe(qe),null;case 4:return Mr(),null;case 10:return wl(t.type._context),null;case 22:case 23:return zl(),null;case 24:return null;default:return null}}var sa=!1,mt=!1,Th=typeof WeakSet=="function"?WeakSet:Set,se=null;function jr(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(s){We(e,t,s)}else r.current=null}function $o(e,t,r){try{r()}catch(s){We(e,t,s)}}var ed=!1;function _h(e,t){if(No=Da,e=Iu(),pl(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var s=r.getSelection&&r.getSelection();if(s&&s.rangeCount!==0){r=s.anchorNode;var a=s.anchorOffset,i=s.focusNode;s=s.focusOffset;try{r.nodeType,i.nodeType}catch{r=null;break e}var o=0,l=-1,c=-1,u=0,f=0,x=e,m=null;t:for(;;){for(var y;x!==r||a!==0&&x.nodeType!==3||(l=o+a),x!==i||s!==0&&x.nodeType!==3||(c=o+s),x.nodeType===3&&(o+=x.nodeValue.length),(y=x.firstChild)!==null;)m=x,x=y;for(;;){if(x===e)break t;if(m===r&&++u===a&&(l=o),m===i&&++f===s&&(c=o),(y=x.nextSibling)!==null)break;x=m,m=x.parentNode}x=y}r=l===-1||c===-1?null:{start:l,end:c}}else r=null}r=r||{start:0,end:0}}else r=null;for(ko={focusedElem:e,selectionRange:r},Da=!1,se=t;se!==null;)if(t=se,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,se=e;else for(;se!==null;){t=se;try{var p=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(p!==null){var j=p.memoizedProps,k=p.memoizedState,v=t.stateNode,h=v.getSnapshotBeforeUpdate(t.elementType===t.type?j:Yt(t.type,j),k);v.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var g=t.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(G(163))}}catch(E){We(t,t.return,E)}if(e=t.sibling,e!==null){e.return=t.return,se=e;break}se=t.return}return p=ed,ed=!1,p}function ps(e,t,r){var s=t.updateQueue;if(s=s!==null?s.lastEffect:null,s!==null){var a=s=s.next;do{if((a.tag&e)===e){var i=a.destroy;a.destroy=void 0,i!==void 0&&$o(t,r,i)}a=a.next}while(a!==s)}}function fi(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var s=r.create;r.destroy=s()}r=r.next}while(r!==t)}}function Bo(e){var t=e.ref;if(t!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof t=="function"?t(e):t.current=e}}function Pf(e){var t=e.alternate;t!==null&&(e.alternate=null,Pf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[rn],delete t[Ts],delete t[Eo],delete t[fh],delete t[mh])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Af(e){return e.tag===5||e.tag===3||e.tag===4}function td(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Af(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Uo(e,t,r){var s=e.tag;if(s===5||s===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=Oa));else if(s!==4&&(e=e.child,e!==null))for(Uo(e,t,r),e=e.sibling;e!==null;)Uo(e,t,r),e=e.sibling}function qo(e,t,r){var s=e.tag;if(s===5||s===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(s!==4&&(e=e.child,e!==null))for(qo(e,t,r),e=e.sibling;e!==null;)qo(e,t,r),e=e.sibling}var ot=null,Qt=!1;function jn(e,t,r){for(r=r.child;r!==null;)Lf(e,t,r),r=r.sibling}function Lf(e,t,r){if(sn&&typeof sn.onCommitFiberUnmount=="function")try{sn.onCommitFiberUnmount(si,r)}catch{}switch(r.tag){case 5:mt||jr(r,t);case 6:var s=ot,a=Qt;ot=null,jn(e,t,r),ot=s,Qt=a,ot!==null&&(Qt?(e=ot,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):ot.removeChild(r.stateNode));break;case 18:ot!==null&&(Qt?(e=ot,r=r.stateNode,e.nodeType===8?zi(e.parentNode,r):e.nodeType===1&&zi(e,r),ks(e)):zi(ot,r.stateNode));break;case 4:s=ot,a=Qt,ot=r.stateNode.containerInfo,Qt=!0,jn(e,t,r),ot=s,Qt=a;break;case 0:case 11:case 14:case 15:if(!mt&&(s=r.updateQueue,s!==null&&(s=s.lastEffect,s!==null))){a=s=s.next;do{var i=a,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&$o(r,t,o),a=a.next}while(a!==s)}jn(e,t,r);break;case 1:if(!mt&&(jr(r,t),s=r.stateNode,typeof s.componentWillUnmount=="function"))try{s.props=r.memoizedProps,s.state=r.memoizedState,s.componentWillUnmount()}catch(l){We(r,t,l)}jn(e,t,r);break;case 21:jn(e,t,r);break;case 22:r.mode&1?(mt=(s=mt)||r.memoizedState!==null,jn(e,t,r),mt=s):jn(e,t,r);break;default:jn(e,t,r)}}function nd(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new Th),t.forEach(function(s){var a=Oh.bind(null,e,s);r.has(s)||(r.add(s),s.then(a,a))})}}function qt(e,t){var r=t.deletions;if(r!==null)for(var s=0;s<r.length;s++){var a=r[s];try{var i=e,o=t,l=o;e:for(;l!==null;){switch(l.tag){case 5:ot=l.stateNode,Qt=!1;break e;case 3:ot=l.stateNode.containerInfo,Qt=!0;break e;case 4:ot=l.stateNode.containerInfo,Qt=!0;break e}l=l.return}if(ot===null)throw Error(G(160));Lf(i,o,a),ot=null,Qt=!1;var c=a.alternate;c!==null&&(c.return=null),a.return=null}catch(u){We(a,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)If(t,e),t=t.sibling}function If(e,t){var r=e.alternate,s=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(qt(t,e),Jt(e),s&4){try{ps(3,e,e.return),fi(3,e)}catch(j){We(e,e.return,j)}try{ps(5,e,e.return)}catch(j){We(e,e.return,j)}}break;case 1:qt(t,e),Jt(e),s&512&&r!==null&&jr(r,r.return);break;case 5:if(qt(t,e),Jt(e),s&512&&r!==null&&jr(r,r.return),e.flags&32){var a=e.stateNode;try{bs(a,"")}catch(j){We(e,e.return,j)}}if(s&4&&(a=e.stateNode,a!=null)){var i=e.memoizedProps,o=r!==null?r.memoizedProps:i,l=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{l==="input"&&i.type==="radio"&&i.name!=null&&tu(a,i),mo(l,o);var u=mo(l,i);for(o=0;o<c.length;o+=2){var f=c[o],x=c[o+1];f==="style"?iu(a,x):f==="dangerouslySetInnerHTML"?su(a,x):f==="children"?bs(a,x):nl(a,f,x,u)}switch(l){case"input":oo(a,i);break;case"textarea":nu(a,i);break;case"select":var m=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!i.multiple;var y=i.value;y!=null?kr(a,!!i.multiple,y,!1):m!==!!i.multiple&&(i.defaultValue!=null?kr(a,!!i.multiple,i.defaultValue,!0):kr(a,!!i.multiple,i.multiple?[]:"",!1))}a[Ts]=i}catch(j){We(e,e.return,j)}}break;case 6:if(qt(t,e),Jt(e),s&4){if(e.stateNode===null)throw Error(G(162));a=e.stateNode,i=e.memoizedProps;try{a.nodeValue=i}catch(j){We(e,e.return,j)}}break;case 3:if(qt(t,e),Jt(e),s&4&&r!==null&&r.memoizedState.isDehydrated)try{ks(t.containerInfo)}catch(j){We(e,e.return,j)}break;case 4:qt(t,e),Jt(e);break;case 13:qt(t,e),Jt(e),a=e.child,a.flags&8192&&(i=a.memoizedState!==null,a.stateNode.isHidden=i,!i||a.alternate!==null&&a.alternate.memoizedState!==null||(Ml=Xe())),s&4&&nd(e);break;case 22:if(f=r!==null&&r.memoizedState!==null,e.mode&1?(mt=(u=mt)||f,qt(t,e),mt=u):qt(t,e),Jt(e),s&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!f&&e.mode&1)for(se=e,f=e.child;f!==null;){for(x=se=f;se!==null;){switch(m=se,y=m.child,m.tag){case 0:case 11:case 14:case 15:ps(4,m,m.return);break;case 1:jr(m,m.return);var p=m.stateNode;if(typeof p.componentWillUnmount=="function"){s=m,r=m.return;try{t=s,p.props=t.memoizedProps,p.state=t.memoizedState,p.componentWillUnmount()}catch(j){We(s,r,j)}}break;case 5:jr(m,m.return);break;case 22:if(m.memoizedState!==null){sd(x);continue}}y!==null?(y.return=m,se=y):sd(x)}f=f.sibling}e:for(f=null,x=e;;){if(x.tag===5){if(f===null){f=x;try{a=x.stateNode,u?(i=a.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(l=x.stateNode,c=x.memoizedProps.style,o=c!=null&&c.hasOwnProperty("display")?c.display:null,l.style.display=au("display",o))}catch(j){We(e,e.return,j)}}}else if(x.tag===6){if(f===null)try{x.stateNode.nodeValue=u?"":x.memoizedProps}catch(j){We(e,e.return,j)}}else if((x.tag!==22&&x.tag!==23||x.memoizedState===null||x===e)&&x.child!==null){x.child.return=x,x=x.child;continue}if(x===e)break e;for(;x.sibling===null;){if(x.return===null||x.return===e)break e;f===x&&(f=null),x=x.return}f===x&&(f=null),x.sibling.return=x.return,x=x.sibling}}break;case 19:qt(t,e),Jt(e),s&4&&nd(e);break;case 21:break;default:qt(t,e),Jt(e)}}function Jt(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if(Af(r)){var s=r;break e}r=r.return}throw Error(G(160))}switch(s.tag){case 5:var a=s.stateNode;s.flags&32&&(bs(a,""),s.flags&=-33);var i=td(e);qo(e,i,a);break;case 3:case 4:var o=s.stateNode.containerInfo,l=td(e);Uo(e,l,o);break;default:throw Error(G(161))}}catch(c){We(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Ph(e,t,r){se=e,Mf(e)}function Mf(e,t,r){for(var s=(e.mode&1)!==0;se!==null;){var a=se,i=a.child;if(a.tag===22&&s){var o=a.memoizedState!==null||sa;if(!o){var l=a.alternate,c=l!==null&&l.memoizedState!==null||mt;l=sa;var u=mt;if(sa=o,(mt=c)&&!u)for(se=a;se!==null;)o=se,c=o.child,o.tag===22&&o.memoizedState!==null?ad(a):c!==null?(c.return=o,se=c):ad(a);for(;i!==null;)se=i,Mf(i),i=i.sibling;se=a,sa=l,mt=u}rd(e)}else a.subtreeFlags&8772&&i!==null?(i.return=a,se=i):rd(e)}}function rd(e){for(;se!==null;){var t=se;if(t.flags&8772){var r=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:mt||fi(5,t);break;case 1:var s=t.stateNode;if(t.flags&4&&!mt)if(r===null)s.componentDidMount();else{var a=t.elementType===t.type?r.memoizedProps:Yt(t.type,r.memoizedProps);s.componentDidUpdate(a,r.memoizedState,s.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Bc(t,i,s);break;case 3:var o=t.updateQueue;if(o!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}Bc(t,o,r)}break;case 5:var l=t.stateNode;if(r===null&&t.flags&4){r=l;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&r.focus();break;case"img":c.src&&(r.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var f=u.memoizedState;if(f!==null){var x=f.dehydrated;x!==null&&ks(x)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(G(163))}mt||t.flags&512&&Bo(t)}catch(m){We(t,t.return,m)}}if(t===e){se=null;break}if(r=t.sibling,r!==null){r.return=t.return,se=r;break}se=t.return}}function sd(e){for(;se!==null;){var t=se;if(t===e){se=null;break}var r=t.sibling;if(r!==null){r.return=t.return,se=r;break}se=t.return}}function ad(e){for(;se!==null;){var t=se;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{fi(4,t)}catch(c){We(t,r,c)}break;case 1:var s=t.stateNode;if(typeof s.componentDidMount=="function"){var a=t.return;try{s.componentDidMount()}catch(c){We(t,a,c)}}var i=t.return;try{Bo(t)}catch(c){We(t,i,c)}break;case 5:var o=t.return;try{Bo(t)}catch(c){We(t,o,c)}}}catch(c){We(t,t.return,c)}if(t===e){se=null;break}var l=t.sibling;if(l!==null){l.return=t.return,se=l;break}se=t.return}}var Ah=Math.ceil,Xa=bn.ReactCurrentDispatcher,Ll=bn.ReactCurrentOwner,Ft=bn.ReactCurrentBatchConfig,Ne=0,at=null,Ze=null,lt=0,Rt=0,Nr=Yn(0),tt=0,Ms=null,ir=0,mi=0,Il=0,xs=null,jt=null,Ml=0,zr=1/0,cn=null,Ka=!1,Yo=null,Fn=null,aa=!1,An=null,Ja=0,gs=0,Qo=null,ka=-1,Sa=0;function vt(){return Ne&6?Xe():ka!==-1?ka:ka=Xe()}function On(e){return e.mode&1?Ne&2&&lt!==0?lt&-lt:ph.transition!==null?(Sa===0&&(Sa=vu()),Sa):(e=Ee,e!==0||(e=window.event,e=e===void 0?16:Su(e.type)),e):1}function Gt(e,t,r,s){if(50<gs)throw gs=0,Qo=null,Error(G(185));Fs(e,r,s),(!(Ne&2)||e!==at)&&(e===at&&(!(Ne&2)&&(mi|=r),tt===4&&_n(e,lt)),Ct(e,s),r===1&&Ne===0&&!(t.mode&1)&&(zr=Xe()+500,ci&&Qn()))}function Ct(e,t){var r=e.callbackNode;p0(e,t);var s=Ma(e,e===at?lt:0);if(s===0)r!==null&&hc(r),e.callbackNode=null,e.callbackPriority=0;else if(t=s&-s,e.callbackPriority!==t){if(r!=null&&hc(r),t===1)e.tag===0?hh(id.bind(null,e)):Yu(id.bind(null,e)),dh(function(){!(Ne&6)&&Qn()}),r=null;else{switch(yu(s)){case 1:r=ol;break;case 4:r=xu;break;case 16:r=Ia;break;case 536870912:r=gu;break;default:r=Ia}r=qf(r,Df.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function Df(e,t){if(ka=-1,Sa=0,Ne&6)throw Error(G(327));var r=e.callbackNode;if(Tr()&&e.callbackNode!==r)return null;var s=Ma(e,e===at?lt:0);if(s===0)return null;if(s&30||s&e.expiredLanes||t)t=Za(e,s);else{t=s;var a=Ne;Ne|=2;var i=Ff();(at!==e||lt!==t)&&(cn=null,zr=Xe()+500,er(e,t));do try{Mh();break}catch(l){zf(e,l)}while(1);bl(),Xa.current=i,Ne=a,Ze!==null?t=0:(at=null,lt=0,t=tt)}if(t!==0){if(t===2&&(a=vo(e),a!==0&&(s=a,t=Ho(e,a))),t===1)throw r=Ms,er(e,0),_n(e,s),Ct(e,Xe()),r;if(t===6)_n(e,s);else{if(a=e.current.alternate,!(s&30)&&!Lh(a)&&(t=Za(e,s),t===2&&(i=vo(e),i!==0&&(s=i,t=Ho(e,i))),t===1))throw r=Ms,er(e,0),_n(e,s),Ct(e,Xe()),r;switch(e.finishedWork=a,e.finishedLanes=s,t){case 0:case 1:throw Error(G(345));case 2:Gn(e,jt,cn);break;case 3:if(_n(e,s),(s&130023424)===s&&(t=Ml+500-Xe(),10<t)){if(Ma(e,0)!==0)break;if(a=e.suspendedLanes,(a&s)!==s){vt(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=Co(Gn.bind(null,e,jt,cn),t);break}Gn(e,jt,cn);break;case 4:if(_n(e,s),(s&4194240)===s)break;for(t=e.eventTimes,a=-1;0<s;){var o=31-Wt(s);i=1<<o,o=t[o],o>a&&(a=o),s&=~i}if(s=a,s=Xe()-s,s=(120>s?120:480>s?480:1080>s?1080:1920>s?1920:3e3>s?3e3:4320>s?4320:1960*Ah(s/1960))-s,10<s){e.timeoutHandle=Co(Gn.bind(null,e,jt,cn),s);break}Gn(e,jt,cn);break;case 5:Gn(e,jt,cn);break;default:throw Error(G(329))}}}return Ct(e,Xe()),e.callbackNode===r?Df.bind(null,e):null}function Ho(e,t){var r=xs;return e.current.memoizedState.isDehydrated&&(er(e,t).flags|=256),e=Za(e,t),e!==2&&(t=jt,jt=r,t!==null&&Wo(t)),e}function Wo(e){jt===null?jt=e:jt.push.apply(jt,e)}function Lh(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var s=0;s<r.length;s++){var a=r[s],i=a.getSnapshot;a=a.value;try{if(!Vt(i(),a))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function _n(e,t){for(t&=~Il,t&=~mi,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-Wt(t),s=1<<r;e[r]=-1,t&=~s}}function id(e){if(Ne&6)throw Error(G(327));Tr();var t=Ma(e,0);if(!(t&1))return Ct(e,Xe()),null;var r=Za(e,t);if(e.tag!==0&&r===2){var s=vo(e);s!==0&&(t=s,r=Ho(e,s))}if(r===1)throw r=Ms,er(e,0),_n(e,t),Ct(e,Xe()),r;if(r===6)throw Error(G(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Gn(e,jt,cn),Ct(e,Xe()),null}function Dl(e,t){var r=Ne;Ne|=1;try{return e(t)}finally{Ne=r,Ne===0&&(zr=Xe()+500,ci&&Qn())}}function or(e){An!==null&&An.tag===0&&!(Ne&6)&&Tr();var t=Ne;Ne|=1;var r=Ft.transition,s=Ee;try{if(Ft.transition=null,Ee=1,e)return e()}finally{Ee=s,Ft.transition=r,Ne=t,!(Ne&6)&&Qn()}}function zl(){Rt=Nr.current,Oe(Nr)}function er(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,ch(r)),Ze!==null)for(r=Ze.return;r!==null;){var s=r;switch(gl(s),s.tag){case 1:s=s.type.childContextTypes,s!=null&&$a();break;case 3:Mr(),Oe(kt),Oe(ht),Cl();break;case 5:Sl(s);break;case 4:Mr();break;case 13:Oe(qe);break;case 19:Oe(qe);break;case 10:wl(s.type._context);break;case 22:case 23:zl()}r=r.return}if(at=e,Ze=e=$n(e.current,null),lt=Rt=t,tt=0,Ms=null,Il=mi=ir=0,jt=xs=null,Xn!==null){for(t=0;t<Xn.length;t++)if(r=Xn[t],s=r.interleaved,s!==null){r.interleaved=null;var a=s.next,i=r.pending;if(i!==null){var o=i.next;i.next=a,s.next=o}r.pending=s}Xn=null}return e}function zf(e,t){do{var r=Ze;try{if(bl(),wa.current=Va,Ga){for(var s=Ye.memoizedState;s!==null;){var a=s.queue;a!==null&&(a.pending=null),s=s.next}Ga=!1}if(ar=0,st=et=Ye=null,hs=!1,As=0,Ll.current=null,r===null||r.return===null){tt=1,Ms=t,Ze=null;break}e:{var i=e,o=r.return,l=r,c=t;if(t=lt,l.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,f=l,x=f.tag;if(!(f.mode&1)&&(x===0||x===11||x===15)){var m=f.alternate;m?(f.updateQueue=m.updateQueue,f.memoizedState=m.memoizedState,f.lanes=m.lanes):(f.updateQueue=null,f.memoizedState=null)}var y=Wc(o);if(y!==null){y.flags&=-257,Gc(y,o,l,i,t),y.mode&1&&Hc(i,u,t),t=y,c=u;var p=t.updateQueue;if(p===null){var j=new Set;j.add(c),t.updateQueue=j}else p.add(c);break e}else{if(!(t&1)){Hc(i,u,t),Fl();break e}c=Error(G(426))}}else if($e&&l.mode&1){var k=Wc(o);if(k!==null){!(k.flags&65536)&&(k.flags|=256),Gc(k,o,l,i,t),vl(Dr(c,l));break e}}i=c=Dr(c,l),tt!==4&&(tt=2),xs===null?xs=[i]:xs.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var v=bf(i,c,t);$c(i,v);break e;case 1:l=c;var h=i.type,g=i.stateNode;if(!(i.flags&128)&&(typeof h.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Fn===null||!Fn.has(g)))){i.flags|=65536,t&=-t,i.lanes|=t;var E=wf(i,l,t);$c(i,E);break e}}i=i.return}while(i!==null)}$f(r)}catch(P){t=P,Ze===r&&r!==null&&(Ze=r=r.return);continue}break}while(1)}function Ff(){var e=Xa.current;return Xa.current=Va,e===null?Va:e}function Fl(){(tt===0||tt===3||tt===2)&&(tt=4),at===null||!(ir&268435455)&&!(mi&268435455)||_n(at,lt)}function Za(e,t){var r=Ne;Ne|=2;var s=Ff();(at!==e||lt!==t)&&(cn=null,er(e,t));do try{Ih();break}catch(a){zf(e,a)}while(1);if(bl(),Ne=r,Xa.current=s,Ze!==null)throw Error(G(261));return at=null,lt=0,tt}function Ih(){for(;Ze!==null;)Of(Ze)}function Mh(){for(;Ze!==null&&!i0();)Of(Ze)}function Of(e){var t=Uf(e.alternate,e,Rt);e.memoizedProps=e.pendingProps,t===null?$f(e):Ze=t,Ll.current=null}function $f(e){var t=e;do{var r=t.alternate;if(e=t.return,t.flags&32768){if(r=Rh(r,t),r!==null){r.flags&=32767,Ze=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{tt=6,Ze=null;return}}else if(r=Eh(r,t,Rt),r!==null){Ze=r;return}if(t=t.sibling,t!==null){Ze=t;return}Ze=t=e}while(t!==null);tt===0&&(tt=5)}function Gn(e,t,r){var s=Ee,a=Ft.transition;try{Ft.transition=null,Ee=1,Dh(e,t,r,s)}finally{Ft.transition=a,Ee=s}return null}function Dh(e,t,r,s){do Tr();while(An!==null);if(Ne&6)throw Error(G(327));r=e.finishedWork;var a=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(G(177));e.callbackNode=null,e.callbackPriority=0;var i=r.lanes|r.childLanes;if(x0(e,i),e===at&&(Ze=at=null,lt=0),!(r.subtreeFlags&2064)&&!(r.flags&2064)||aa||(aa=!0,qf(Ia,function(){return Tr(),null})),i=(r.flags&15990)!==0,r.subtreeFlags&15990||i){i=Ft.transition,Ft.transition=null;var o=Ee;Ee=1;var l=Ne;Ne|=4,Ll.current=null,_h(e,r),If(r,e),nh(ko),Da=!!No,ko=No=null,e.current=r,Ph(r),o0(),Ne=l,Ee=o,Ft.transition=i}else e.current=r;if(aa&&(aa=!1,An=e,Ja=a),i=e.pendingLanes,i===0&&(Fn=null),d0(r.stateNode),Ct(e,Xe()),t!==null)for(s=e.onRecoverableError,r=0;r<t.length;r++)a=t[r],s(a.value,{componentStack:a.stack,digest:a.digest});if(Ka)throw Ka=!1,e=Yo,Yo=null,e;return Ja&1&&e.tag!==0&&Tr(),i=e.pendingLanes,i&1?e===Qo?gs++:(gs=0,Qo=e):gs=0,Qn(),null}function Tr(){if(An!==null){var e=yu(Ja),t=Ft.transition,r=Ee;try{if(Ft.transition=null,Ee=16>e?16:e,An===null)var s=!1;else{if(e=An,An=null,Ja=0,Ne&6)throw Error(G(331));var a=Ne;for(Ne|=4,se=e.current;se!==null;){var i=se,o=i.child;if(se.flags&16){var l=i.deletions;if(l!==null){for(var c=0;c<l.length;c++){var u=l[c];for(se=u;se!==null;){var f=se;switch(f.tag){case 0:case 11:case 15:ps(8,f,i)}var x=f.child;if(x!==null)x.return=f,se=x;else for(;se!==null;){f=se;var m=f.sibling,y=f.return;if(Pf(f),f===u){se=null;break}if(m!==null){m.return=y,se=m;break}se=y}}}var p=i.alternate;if(p!==null){var j=p.child;if(j!==null){p.child=null;do{var k=j.sibling;j.sibling=null,j=k}while(j!==null)}}se=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,se=o;else e:for(;se!==null;){if(i=se,i.flags&2048)switch(i.tag){case 0:case 11:case 15:ps(9,i,i.return)}var v=i.sibling;if(v!==null){v.return=i.return,se=v;break e}se=i.return}}var h=e.current;for(se=h;se!==null;){o=se;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,se=g;else e:for(o=h;se!==null;){if(l=se,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:fi(9,l)}}catch(P){We(l,l.return,P)}if(l===o){se=null;break e}var E=l.sibling;if(E!==null){E.return=l.return,se=E;break e}se=l.return}}if(Ne=a,Qn(),sn&&typeof sn.onPostCommitFiberRoot=="function")try{sn.onPostCommitFiberRoot(si,e)}catch{}s=!0}return s}finally{Ee=r,Ft.transition=t}}return!1}function od(e,t,r){t=Dr(r,t),t=bf(e,t,1),e=zn(e,t,1),t=vt(),e!==null&&(Fs(e,1,t),Ct(e,t))}function We(e,t,r){if(e.tag===3)od(e,e,r);else for(;t!==null;){if(t.tag===3){od(t,e,r);break}else if(t.tag===1){var s=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(Fn===null||!Fn.has(s))){e=Dr(r,e),e=wf(t,e,1),t=zn(t,e,1),e=vt(),t!==null&&(Fs(t,1,e),Ct(t,e));break}}t=t.return}}function zh(e,t,r){var s=e.pingCache;s!==null&&s.delete(t),t=vt(),e.pingedLanes|=e.suspendedLanes&r,at===e&&(lt&r)===r&&(tt===4||tt===3&&(lt&130023424)===lt&&500>Xe()-Ml?er(e,0):Il|=r),Ct(e,t)}function Bf(e,t){t===0&&(e.mode&1?(t=Vs,Vs<<=1,!(Vs&130023424)&&(Vs=4194304)):t=1);var r=vt();e=gn(e,t),e!==null&&(Fs(e,t,r),Ct(e,r))}function Fh(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),Bf(e,r)}function Oh(e,t){var r=0;switch(e.tag){case 13:var s=e.stateNode,a=e.memoizedState;a!==null&&(r=a.retryLane);break;case 19:s=e.stateNode;break;default:throw Error(G(314))}s!==null&&s.delete(t),Bf(e,r)}var Uf;Uf=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||kt.current)Nt=!0;else{if(!(e.lanes&r)&&!(t.flags&128))return Nt=!1,Ch(e,t,r);Nt=!!(e.flags&131072)}else Nt=!1,$e&&t.flags&1048576&&Qu(t,qa,t.index);switch(t.lanes=0,t.tag){case 2:var s=t.type;Na(e,t),e=t.pendingProps;var a=Ar(t,ht.current);Rr(t,r),a=Rl(null,t,s,e,a,r);var i=Tl();return t.flags|=1,typeof a=="object"&&a!==null&&typeof a.render=="function"&&a.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,St(s)?(i=!0,Ba(t)):i=!1,t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,Nl(t),a.updater=ui,t.stateNode=a,a._reactInternals=t,Lo(t,s,e,r),t=Do(null,t,s,!0,i,r)):(t.tag=0,$e&&i&&xl(t),gt(null,t,a,r),t=t.child),t;case 16:s=t.elementType;e:{switch(Na(e,t),e=t.pendingProps,a=s._init,s=a(s._payload),t.type=s,a=t.tag=Bh(s),e=Yt(s,e),a){case 0:t=Mo(null,t,s,e,r);break e;case 1:t=Kc(null,t,s,e,r);break e;case 11:t=Vc(null,t,s,e,r);break e;case 14:t=Xc(null,t,s,Yt(s.type,e),r);break e}throw Error(G(306,s,""))}return t;case 0:return s=t.type,a=t.pendingProps,a=t.elementType===s?a:Yt(s,a),Mo(e,t,s,a,r);case 1:return s=t.type,a=t.pendingProps,a=t.elementType===s?a:Yt(s,a),Kc(e,t,s,a,r);case 3:e:{if(Sf(t),e===null)throw Error(G(387));s=t.pendingProps,i=t.memoizedState,a=i.element,Ku(e,t),Ha(t,s,null,r);var o=t.memoizedState;if(s=o.element,i.isDehydrated)if(i={element:s,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){a=Dr(Error(G(423)),t),t=Jc(e,t,s,r,a);break e}else if(s!==a){a=Dr(Error(G(424)),t),t=Jc(e,t,s,r,a);break e}else for(Tt=Dn(t.stateNode.containerInfo.firstChild),_t=t,$e=!0,Ht=null,r=Vu(t,null,s,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(Lr(),s===a){t=vn(e,t,r);break e}gt(e,t,s,r)}t=t.child}return t;case 5:return Ju(t),e===null&&_o(t),s=t.type,a=t.pendingProps,i=e!==null?e.memoizedProps:null,o=a.children,So(s,a)?o=null:i!==null&&So(s,i)&&(t.flags|=32),kf(e,t),gt(e,t,o,r),t.child;case 6:return e===null&&_o(t),null;case 13:return Cf(e,t,r);case 4:return kl(t,t.stateNode.containerInfo),s=t.pendingProps,e===null?t.child=Ir(t,null,s,r):gt(e,t,s,r),t.child;case 11:return s=t.type,a=t.pendingProps,a=t.elementType===s?a:Yt(s,a),Vc(e,t,s,a,r);case 7:return gt(e,t,t.pendingProps,r),t.child;case 8:return gt(e,t,t.pendingProps.children,r),t.child;case 12:return gt(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(s=t.type._context,a=t.pendingProps,i=t.memoizedProps,o=a.value,De(Ya,s._currentValue),s._currentValue=o,i!==null)if(Vt(i.value,o)){if(i.children===a.children&&!kt.current){t=vn(e,t,r);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var l=i.dependencies;if(l!==null){o=i.child;for(var c=l.firstContext;c!==null;){if(c.context===s){if(i.tag===1){c=mn(-1,r&-r),c.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var f=u.pending;f===null?c.next=c:(c.next=f.next,f.next=c),u.pending=c}}i.lanes|=r,c=i.alternate,c!==null&&(c.lanes|=r),Po(i.return,r,t),l.lanes|=r;break}c=c.next}}else if(i.tag===10)o=i.type===t.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(G(341));o.lanes|=r,l=o.alternate,l!==null&&(l.lanes|=r),Po(o,r,t),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===t){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}gt(e,t,a.children,r),t=t.child}return t;case 9:return a=t.type,s=t.pendingProps.children,Rr(t,r),a=Ot(a),s=s(a),t.flags|=1,gt(e,t,s,r),t.child;case 14:return s=t.type,a=Yt(s,t.pendingProps),a=Yt(s.type,a),Xc(e,t,s,a,r);case 15:return jf(e,t,t.type,t.pendingProps,r);case 17:return s=t.type,a=t.pendingProps,a=t.elementType===s?a:Yt(s,a),Na(e,t),t.tag=1,St(s)?(e=!0,Ba(t)):e=!1,Rr(t,r),yf(t,s,a),Lo(t,s,a,r),Do(null,t,s,!0,e,r);case 19:return Ef(e,t,r);case 22:return Nf(e,t,r)}throw Error(G(156,t.tag))};function qf(e,t){return pu(e,t)}function $h(e,t,r,s){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Dt(e,t,r,s){return new $h(e,t,r,s)}function Ol(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Bh(e){if(typeof e=="function")return Ol(e)?1:0;if(e!=null){if(e=e.$$typeof,e===sl)return 11;if(e===al)return 14}return 2}function $n(e,t){var r=e.alternate;return r===null?(r=Dt(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function Ca(e,t,r,s,a,i){var o=2;if(s=e,typeof e=="function")Ol(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case mr:return tr(r.children,a,i,t);case rl:o=8,a|=8;break;case no:return e=Dt(12,r,t,a|2),e.elementType=no,e.lanes=i,e;case ro:return e=Dt(13,r,t,a),e.elementType=ro,e.lanes=i,e;case so:return e=Dt(19,r,t,a),e.elementType=so,e.lanes=i,e;case Jd:return hi(r,a,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Xd:o=10;break e;case Kd:o=9;break e;case sl:o=11;break e;case al:o=14;break e;case Cn:o=16,s=null;break e}throw Error(G(130,e==null?e:typeof e,""))}return t=Dt(o,r,t,a),t.elementType=e,t.type=s,t.lanes=i,t}function tr(e,t,r,s){return e=Dt(7,e,s,t),e.lanes=r,e}function hi(e,t,r,s){return e=Dt(22,e,s,t),e.elementType=Jd,e.lanes=r,e.stateNode={isHidden:!1},e}function Qi(e,t,r){return e=Dt(6,e,null,t),e.lanes=r,e}function Hi(e,t,r){return t=Dt(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Uh(e,t,r,s,a){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ci(0),this.expirationTimes=Ci(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ci(0),this.identifierPrefix=s,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function $l(e,t,r,s,a,i,o,l,c){return e=new Uh(e,t,r,l,c),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Dt(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:s,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},Nl(i),e}function qh(e,t,r){var s=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:fr,key:s==null?null:""+s,children:e,containerInfo:t,implementation:r}}function Yf(e){if(!e)return Un;e=e._reactInternals;e:{if(cr(e)!==e||e.tag!==1)throw Error(G(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(St(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(G(171))}if(e.tag===1){var r=e.type;if(St(r))return qu(e,r,t)}return t}function Qf(e,t,r,s,a,i,o,l,c){return e=$l(r,s,!0,e,a,i,o,l,c),e.context=Yf(null),r=e.current,s=vt(),a=On(r),i=mn(s,a),i.callback=t??null,zn(r,i,a),e.current.lanes=a,Fs(e,a,s),Ct(e,s),e}function pi(e,t,r,s){var a=t.current,i=vt(),o=On(a);return r=Yf(r),t.context===null?t.context=r:t.pendingContext=r,t=mn(i,o),t.payload={element:e},s=s===void 0?null:s,s!==null&&(t.callback=s),e=zn(a,t,o),e!==null&&(Gt(e,a,o,i),ba(e,a,o)),o}function ei(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function ld(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function Bl(e,t){ld(e,t),(e=e.alternate)&&ld(e,t)}function Yh(){return null}var Hf=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ul(e){this._internalRoot=e}xi.prototype.render=Ul.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(G(409));pi(e,t,null,null)};xi.prototype.unmount=Ul.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;or(function(){pi(null,e,null,null)}),t[xn]=null}};function xi(e){this._internalRoot=e}xi.prototype.unstable_scheduleHydration=function(e){if(e){var t=ju();e={blockedOn:null,target:e,priority:t};for(var r=0;r<Tn.length&&t!==0&&t<Tn[r].priority;r++);Tn.splice(r,0,e),r===0&&ku(e)}};function ql(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function gi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function cd(){}function Qh(e,t,r,s,a){if(a){if(typeof s=="function"){var i=s;s=function(){var u=ei(o);i.call(u)}}var o=Qf(t,s,e,0,null,!1,!1,"",cd);return e._reactRootContainer=o,e[xn]=o.current,Es(e.nodeType===8?e.parentNode:e),or(),o}for(;a=e.lastChild;)e.removeChild(a);if(typeof s=="function"){var l=s;s=function(){var u=ei(c);l.call(u)}}var c=$l(e,0,!1,null,null,!1,!1,"",cd);return e._reactRootContainer=c,e[xn]=c.current,Es(e.nodeType===8?e.parentNode:e),or(function(){pi(t,c,r,s)}),c}function vi(e,t,r,s,a){var i=r._reactRootContainer;if(i){var o=i;if(typeof a=="function"){var l=a;a=function(){var c=ei(o);l.call(c)}}pi(t,o,e,a)}else o=Qh(r,t,e,a,s);return ei(o)}bu=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=os(t.pendingLanes);r!==0&&(ll(t,r|1),Ct(t,Xe()),!(Ne&6)&&(zr=Xe()+500,Qn()))}break;case 13:or(function(){var s=gn(e,1);if(s!==null){var a=vt();Gt(s,e,1,a)}}),Bl(e,1)}};cl=function(e){if(e.tag===13){var t=gn(e,134217728);if(t!==null){var r=vt();Gt(t,e,134217728,r)}Bl(e,134217728)}};wu=function(e){if(e.tag===13){var t=On(e),r=gn(e,t);if(r!==null){var s=vt();Gt(r,e,t,s)}Bl(e,t)}};ju=function(){return Ee};Nu=function(e,t){var r=Ee;try{return Ee=e,t()}finally{Ee=r}};po=function(e,t,r){switch(t){case"input":if(oo(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var s=r[t];if(s!==e&&s.form===e.form){var a=li(s);if(!a)throw Error(G(90));eu(s),oo(s,a)}}}break;case"textarea":nu(e,r);break;case"select":t=r.value,t!=null&&kr(e,!!r.multiple,t,!1)}};cu=Dl;du=or;var Hh={usingClientEntryPoint:!1,Events:[$s,gr,li,ou,lu,Dl]},Jr={findFiberByHostInstance:Vn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Wh={bundleType:Jr.bundleType,version:Jr.version,rendererPackageName:Jr.rendererPackageName,rendererConfig:Jr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:bn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=mu(e),e===null?null:e.stateNode},findFiberByHostInstance:Jr.findFiberByHostInstance||Yh,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ia=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ia.isDisabled&&ia.supportsFiber)try{si=ia.inject(Wh),sn=ia}catch{}}At.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Hh;At.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ql(t))throw Error(G(200));return qh(e,t,null,r)};At.createRoot=function(e,t){if(!ql(e))throw Error(G(299));var r=!1,s="",a=Hf;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),t=$l(e,1,!1,null,null,r,!1,s,a),e[xn]=t.current,Es(e.nodeType===8?e.parentNode:e),new Ul(t)};At.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(G(188)):(e=Object.keys(e).join(","),Error(G(268,e)));return e=mu(t),e=e===null?null:e.stateNode,e};At.flushSync=function(e){return or(e)};At.hydrate=function(e,t,r){if(!gi(t))throw Error(G(200));return vi(null,e,t,!0,r)};At.hydrateRoot=function(e,t,r){if(!ql(e))throw Error(G(405));var s=r!=null&&r.hydratedSources||null,a=!1,i="",o=Hf;if(r!=null&&(r.unstable_strictMode===!0&&(a=!0),r.identifierPrefix!==void 0&&(i=r.identifierPrefix),r.onRecoverableError!==void 0&&(o=r.onRecoverableError)),t=Qf(t,null,e,1,r??null,a,!1,i,o),e[xn]=t.current,Es(e),s)for(e=0;e<s.length;e++)r=s[e],a=r._getVersion,a=a(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,a]:t.mutableSourceEagerHydrationData.push(r,a);return new xi(t)};At.render=function(e,t,r){if(!gi(t))throw Error(G(200));return vi(null,e,t,!1,r)};At.unmountComponentAtNode=function(e){if(!gi(e))throw Error(G(40));return e._reactRootContainer?(or(function(){vi(null,null,e,!1,function(){e._reactRootContainer=null,e[xn]=null})}),!0):!1};At.unstable_batchedUpdates=Dl;At.unstable_renderSubtreeIntoContainer=function(e,t,r,s){if(!gi(r))throw Error(G(200));if(e==null||e._reactInternals===void 0)throw Error(G(38));return vi(e,t,r,!1,s)};At.version="18.3.1-next-f1338f8080-20240426";function Wf(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Wf)}catch(e){console.error(e)}}Wf(),Hd.exports=At;var Gh=Hd.exports,dd=Gh;eo.createRoot=dd.createRoot,eo.hydrateRoot=dd.hydrateRoot;const Vh="modulepreload",Xh=function(e){return"/"+e},ud={},Gf=function(t,r,s){if(!r||r.length===0)return t();const a=document.getElementsByTagName("link");return Promise.all(r.map(i=>{if(i=Xh(i),i in ud)return;ud[i]=!0;const o=i.endsWith(".css"),l=o?'[rel="stylesheet"]':"";if(!!s)for(let f=a.length-1;f>=0;f--){const x=a[f];if(x.href===i&&(!o||x.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${l}`))return;const u=document.createElement("link");if(u.rel=o?"stylesheet":Vh,o||(u.as="script",u.crossOrigin=""),u.href=i,document.head.appendChild(u),o)return new Promise((f,x)=>{u.addEventListener("load",f),u.addEventListener("error",()=>x(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>t()).catch(i=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=i,window.dispatchEvent(o),!o.defaultPrevented)throw i})};var fd="popstate";function Kh(e={}){function t(s,a){let{pathname:i,search:o,hash:l}=s.location;return Go("",{pathname:i,search:o,hash:l},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}function r(s,a){return typeof a=="string"?a:Ds(a)}return Zh(t,r,null,e)}function Be(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Xt(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Jh(){return Math.random().toString(36).substring(2,10)}function md(e,t){return{usr:e.state,key:e.key,idx:t}}function Go(e,t,r=null,s){return{pathname:typeof e=="string"?e:e.pathname,search:"",hash:"",...typeof t=="string"?Br(t):t,state:r,key:t&&t.key||s||Jh()}}function Ds({pathname:e="/",search:t="",hash:r=""}){return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Br(e){let t={};if(e){let r=e.indexOf("#");r>=0&&(t.hash=e.substring(r),e=e.substring(0,r));let s=e.indexOf("?");s>=0&&(t.search=e.substring(s),e=e.substring(0,s)),e&&(t.pathname=e)}return t}function Zh(e,t,r,s={}){let{window:a=document.defaultView,v5Compat:i=!1}=s,o=a.history,l="POP",c=null,u=f();u==null&&(u=0,o.replaceState({...o.state,idx:u},""));function f(){return(o.state||{idx:null}).idx}function x(){l="POP";let k=f(),v=k==null?null:k-u;u=k,c&&c({action:l,location:j.location,delta:v})}function m(k,v){l="PUSH";let h=Go(j.location,k,v);r&&r(h,k),u=f()+1;let g=md(h,u),E=j.createHref(h);try{o.pushState(g,"",E)}catch(P){if(P instanceof DOMException&&P.name==="DataCloneError")throw P;a.location.assign(E)}i&&c&&c({action:l,location:j.location,delta:1})}function y(k,v){l="REPLACE";let h=Go(j.location,k,v);r&&r(h,k),u=f();let g=md(h,u),E=j.createHref(h);o.replaceState(g,"",E),i&&c&&c({action:l,location:j.location,delta:0})}function p(k){return ep(k)}let j={get action(){return l},get location(){return e(a,o)},listen(k){if(c)throw new Error("A history only accepts one active listener");return a.addEventListener(fd,x),c=k,()=>{a.removeEventListener(fd,x),c=null}},createHref(k){return t(a,k)},createURL:p,encodeLocation(k){let v=p(k);return{pathname:v.pathname,search:v.search,hash:v.hash}},push:m,replace:y,go(k){return o.go(k)}};return j}function ep(e,t=!1){let r="http://localhost";typeof window<"u"&&(r=window.location.origin!=="null"?window.location.origin:window.location.href),Be(r,"No window.location.(origin|href) available to create URL");let s=typeof e=="string"?e:Ds(e);return s=s.replace(/ $/,"%20"),!t&&s.startsWith("//")&&(s=r+s),new URL(s,r)}function Vf(e,t,r="/"){return tp(e,t,r,!1)}function tp(e,t,r,s){let a=typeof t=="string"?Br(t):t,i=yn(a.pathname||"/",r);if(i==null)return null;let o=Xf(e);np(o);let l=null;for(let c=0;l==null&&c<o.length;++c){let u=mp(i);l=up(o[c],u,s)}return l}function Xf(e,t=[],r=[],s=""){let a=(i,o,l)=>{let c={relativePath:l===void 0?i.path||"":l,caseSensitive:i.caseSensitive===!0,childrenIndex:o,route:i};c.relativePath.startsWith("/")&&(Be(c.relativePath.startsWith(s),`Absolute route path "${c.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),c.relativePath=c.relativePath.slice(s.length));let u=hn([s,c.relativePath]),f=r.concat(c);i.children&&i.children.length>0&&(Be(i.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${u}".`),Xf(i.children,t,f,u)),!(i.path==null&&!i.index)&&t.push({path:u,score:cp(u,i.index),routesMeta:f})};return e.forEach((i,o)=>{var l;if(i.path===""||!((l=i.path)!=null&&l.includes("?")))a(i,o);else for(let c of Kf(i.path))a(i,o,c)}),t}function Kf(e){let t=e.split("/");if(t.length===0)return[];let[r,...s]=t,a=r.endsWith("?"),i=r.replace(/\?$/,"");if(s.length===0)return a?[i,""]:[i];let o=Kf(s.join("/")),l=[];return l.push(...o.map(c=>c===""?i:[i,c].join("/"))),a&&l.push(...o),l.map(c=>e.startsWith("/")&&c===""?"/":c)}function np(e){e.sort((t,r)=>t.score!==r.score?r.score-t.score:dp(t.routesMeta.map(s=>s.childrenIndex),r.routesMeta.map(s=>s.childrenIndex)))}var rp=/^:[\w-]+$/,sp=3,ap=2,ip=1,op=10,lp=-2,hd=e=>e==="*";function cp(e,t){let r=e.split("/"),s=r.length;return r.some(hd)&&(s+=lp),t&&(s+=ap),r.filter(a=>!hd(a)).reduce((a,i)=>a+(rp.test(i)?sp:i===""?ip:op),s)}function dp(e,t){return e.length===t.length&&e.slice(0,-1).every((s,a)=>s===t[a])?e[e.length-1]-t[t.length-1]:0}function up(e,t,r=!1){let{routesMeta:s}=e,a={},i="/",o=[];for(let l=0;l<s.length;++l){let c=s[l],u=l===s.length-1,f=i==="/"?t:t.slice(i.length)||"/",x=ti({path:c.relativePath,caseSensitive:c.caseSensitive,end:u},f),m=c.route;if(!x&&u&&r&&!s[s.length-1].route.index&&(x=ti({path:c.relativePath,caseSensitive:c.caseSensitive,end:!1},f)),!x)return null;Object.assign(a,x.params),o.push({params:a,pathname:hn([i,x.pathname]),pathnameBase:gp(hn([i,x.pathnameBase])),route:m}),x.pathnameBase!=="/"&&(i=hn([i,x.pathnameBase]))}return o}function ti(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[r,s]=fp(e.path,e.caseSensitive,e.end),a=t.match(r);if(!a)return null;let i=a[0],o=i.replace(/(.)\/+$/,"$1"),l=a.slice(1);return{params:s.reduce((u,{paramName:f,isOptional:x},m)=>{if(f==="*"){let p=l[m]||"";o=i.slice(0,i.length-p.length).replace(/(.)\/+$/,"$1")}const y=l[m];return x&&!y?u[f]=void 0:u[f]=(y||"").replace(/%2F/g,"/"),u},{}),pathname:i,pathnameBase:o,pattern:e}}function fp(e,t=!1,r=!0){Xt(e==="*"||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let s=[],a="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,l,c)=>(s.push({paramName:l,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(s.push({paramName:"*"}),a+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?a+="\\/*$":e!==""&&e!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,t?void 0:"i"),s]}function mp(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Xt(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function yn(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let r=t.endsWith("/")?t.length-1:t.length,s=e.charAt(r);return s&&s!=="/"?null:e.slice(r)||"/"}function hp(e,t="/"){let{pathname:r,search:s="",hash:a=""}=typeof e=="string"?Br(e):e;return{pathname:r?r.startsWith("/")?r:pp(r,t):t,search:vp(s),hash:yp(a)}}function pp(e,t){let r=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(a=>{a===".."?r.length>1&&r.pop():a!=="."&&r.push(a)}),r.length>1?r.join("/"):"/"}function Wi(e,t,r,s){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${r}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function xp(e){return e.filter((t,r)=>r===0||t.route.path&&t.route.path.length>0)}function Yl(e){let t=xp(e);return t.map((r,s)=>s===t.length-1?r.pathname:r.pathnameBase)}function Ql(e,t,r,s=!1){let a;typeof e=="string"?a=Br(e):(a={...e},Be(!a.pathname||!a.pathname.includes("?"),Wi("?","pathname","search",a)),Be(!a.pathname||!a.pathname.includes("#"),Wi("#","pathname","hash",a)),Be(!a.search||!a.search.includes("#"),Wi("#","search","hash",a)));let i=e===""||a.pathname==="",o=i?"/":a.pathname,l;if(o==null)l=r;else{let x=t.length-1;if(!s&&o.startsWith("..")){let m=o.split("/");for(;m[0]==="..";)m.shift(),x-=1;a.pathname=m.join("/")}l=x>=0?t[x]:"/"}let c=hp(a,l),u=o&&o!=="/"&&o.endsWith("/"),f=(i||o===".")&&r.endsWith("/");return!c.pathname.endsWith("/")&&(u||f)&&(c.pathname+="/"),c}var hn=e=>e.join("/").replace(/\/\/+/g,"/"),gp=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),vp=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,yp=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function bp(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}var Jf=["POST","PUT","PATCH","DELETE"];new Set(Jf);var wp=["GET",...Jf];new Set(wp);var Ur=d.createContext(null);Ur.displayName="DataRouter";var yi=d.createContext(null);yi.displayName="DataRouterState";d.createContext(!1);var Zf=d.createContext({isTransitioning:!1});Zf.displayName="ViewTransition";var jp=d.createContext(new Map);jp.displayName="Fetchers";var Np=d.createContext(null);Np.displayName="Await";var Kt=d.createContext(null);Kt.displayName="Navigation";var Us=d.createContext(null);Us.displayName="Location";var Bt=d.createContext({outlet:null,matches:[],isDataRoute:!1});Bt.displayName="Route";var Hl=d.createContext(null);Hl.displayName="RouteError";function kp(e,{relative:t}={}){Be(qr(),"useHref() may be used only in the context of a <Router> component.");let{basename:r,navigator:s}=d.useContext(Kt),{hash:a,pathname:i,search:o}=qs(e,{relative:t}),l=i;return r!=="/"&&(l=i==="/"?r:hn([r,i])),s.createHref({pathname:l,search:o,hash:a})}function qr(){return d.useContext(Us)!=null}function on(){return Be(qr(),"useLocation() may be used only in the context of a <Router> component."),d.useContext(Us).location}var em="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function tm(e){d.useContext(Kt).static||d.useLayoutEffect(e)}function wt(){let{isDataRoute:e}=d.useContext(Bt);return e?$p():Sp()}function Sp(){Be(qr(),"useNavigate() may be used only in the context of a <Router> component.");let e=d.useContext(Ur),{basename:t,navigator:r}=d.useContext(Kt),{matches:s}=d.useContext(Bt),{pathname:a}=on(),i=JSON.stringify(Yl(s)),o=d.useRef(!1);return tm(()=>{o.current=!0}),d.useCallback((c,u={})=>{if(Xt(o.current,em),!o.current)return;if(typeof c=="number"){r.go(c);return}let f=Ql(c,JSON.parse(i),a,u.relative==="path");e==null&&t!=="/"&&(f.pathname=f.pathname==="/"?t:hn([t,f.pathname])),(u.replace?r.replace:r.push)(f,u.state,u)},[t,r,i,a,e])}var Cp=d.createContext(null);function Ep(e){let t=d.useContext(Bt).outlet;return t&&d.createElement(Cp.Provider,{value:e},t)}function Rp(){let{matches:e}=d.useContext(Bt),t=e[e.length-1];return t?t.params:{}}function qs(e,{relative:t}={}){let{matches:r}=d.useContext(Bt),{pathname:s}=on(),a=JSON.stringify(Yl(r));return d.useMemo(()=>Ql(e,JSON.parse(a),s,t==="path"),[e,a,s,t])}function Tp(e,t){return nm(e,t)}function nm(e,t,r,s){var v;Be(qr(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:a}=d.useContext(Kt),{matches:i}=d.useContext(Bt),o=i[i.length-1],l=o?o.params:{},c=o?o.pathname:"/",u=o?o.pathnameBase:"/",f=o&&o.route;{let h=f&&f.path||"";rm(c,!f||h.endsWith("*")||h.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${c}" (under <Route path="${h}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${h}"> to <Route path="${h==="/"?"*":`${h}/*`}">.`)}let x=on(),m;if(t){let h=typeof t=="string"?Br(t):t;Be(u==="/"||((v=h.pathname)==null?void 0:v.startsWith(u)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${u}" but pathname "${h.pathname}" was given in the \`location\` prop.`),m=h}else m=x;let y=m.pathname||"/",p=y;if(u!=="/"){let h=u.replace(/^\//,"").split("/");p="/"+y.replace(/^\//,"").split("/").slice(h.length).join("/")}let j=Vf(e,{pathname:p});Xt(f||j!=null,`No routes matched location "${m.pathname}${m.search}${m.hash}" `),Xt(j==null||j[j.length-1].route.element!==void 0||j[j.length-1].route.Component!==void 0||j[j.length-1].route.lazy!==void 0,`Matched leaf route at location "${m.pathname}${m.search}${m.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let k=Ip(j&&j.map(h=>Object.assign({},h,{params:Object.assign({},l,h.params),pathname:hn([u,a.encodeLocation?a.encodeLocation(h.pathname).pathname:h.pathname]),pathnameBase:h.pathnameBase==="/"?u:hn([u,a.encodeLocation?a.encodeLocation(h.pathnameBase).pathname:h.pathnameBase])})),i,r,s);return t&&k?d.createElement(Us.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...m},navigationType:"POP"}},k):k}function _p(){let e=Op(),t=bp(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,s="rgba(200,200,200, 0.5)",a={padding:"0.5rem",backgroundColor:s},i={padding:"2px 4px",backgroundColor:s},o=null;return console.error("Error handled by React Router default ErrorBoundary:",e),o=d.createElement(d.Fragment,null,d.createElement("p",null,"💿 Hey developer 👋"),d.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",d.createElement("code",{style:i},"ErrorBoundary")," or"," ",d.createElement("code",{style:i},"errorElement")," prop on your route.")),d.createElement(d.Fragment,null,d.createElement("h2",null,"Unexpected Application Error!"),d.createElement("h3",{style:{fontStyle:"italic"}},t),r?d.createElement("pre",{style:a},r):null,o)}var Pp=d.createElement(_p,null),Ap=class extends d.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return this.state.error!==void 0?d.createElement(Bt.Provider,{value:this.props.routeContext},d.createElement(Hl.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function Lp({routeContext:e,match:t,children:r}){let s=d.useContext(Ur);return s&&s.static&&s.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=t.route.id),d.createElement(Bt.Provider,{value:e},r)}function Ip(e,t=[],r=null,s=null){if(e==null){if(!r)return null;if(r.errors)e=r.matches;else if(t.length===0&&!r.initialized&&r.matches.length>0)e=r.matches;else return null}let a=e,i=r==null?void 0:r.errors;if(i!=null){let c=a.findIndex(u=>u.route.id&&(i==null?void 0:i[u.route.id])!==void 0);Be(c>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(i).join(",")}`),a=a.slice(0,Math.min(a.length,c+1))}let o=!1,l=-1;if(r)for(let c=0;c<a.length;c++){let u=a[c];if((u.route.HydrateFallback||u.route.hydrateFallbackElement)&&(l=c),u.route.id){let{loaderData:f,errors:x}=r,m=u.route.loader&&!f.hasOwnProperty(u.route.id)&&(!x||x[u.route.id]===void 0);if(u.route.lazy||m){o=!0,l>=0?a=a.slice(0,l+1):a=[a[0]];break}}}return a.reduceRight((c,u,f)=>{let x,m=!1,y=null,p=null;r&&(x=i&&u.route.id?i[u.route.id]:void 0,y=u.route.errorElement||Pp,o&&(l<0&&f===0?(rm("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),m=!0,p=null):l===f&&(m=!0,p=u.route.hydrateFallbackElement||null)));let j=t.concat(a.slice(0,f+1)),k=()=>{let v;return x?v=y:m?v=p:u.route.Component?v=d.createElement(u.route.Component,null):u.route.element?v=u.route.element:v=c,d.createElement(Lp,{match:u,routeContext:{outlet:c,matches:j,isDataRoute:r!=null},children:v})};return r&&(u.route.ErrorBoundary||u.route.errorElement||f===0)?d.createElement(Ap,{location:r.location,revalidation:r.revalidation,component:y,error:x,children:k(),routeContext:{outlet:null,matches:j,isDataRoute:!0}}):k()},null)}function Wl(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Mp(e){let t=d.useContext(Ur);return Be(t,Wl(e)),t}function Dp(e){let t=d.useContext(yi);return Be(t,Wl(e)),t}function zp(e){let t=d.useContext(Bt);return Be(t,Wl(e)),t}function Gl(e){let t=zp(e),r=t.matches[t.matches.length-1];return Be(r.route.id,`${e} can only be used on routes that contain a unique "id"`),r.route.id}function Fp(){return Gl("useRouteId")}function Op(){var s;let e=d.useContext(Hl),t=Dp("useRouteError"),r=Gl("useRouteError");return e!==void 0?e:(s=t.errors)==null?void 0:s[r]}function $p(){let{router:e}=Mp("useNavigate"),t=Gl("useNavigate"),r=d.useRef(!1);return tm(()=>{r.current=!0}),d.useCallback(async(a,i={})=>{Xt(r.current,em),r.current&&(typeof a=="number"?e.navigate(a):await e.navigate(a,{fromRouteId:t,...i}))},[e,t])}var pd={};function rm(e,t,r){!t&&!pd[e]&&(pd[e]=!0,Xt(!1,r))}d.memo(Bp);function Bp({routes:e,future:t,state:r}){return nm(e,void 0,r,t)}function Up({to:e,replace:t,state:r,relative:s}){Be(qr(),"<Navigate> may be used only in the context of a <Router> component.");let{static:a}=d.useContext(Kt);Xt(!a,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:i}=d.useContext(Bt),{pathname:o}=on(),l=wt(),c=Ql(e,Yl(i),o,s==="path"),u=JSON.stringify(c);return d.useEffect(()=>{l(JSON.parse(u),{replace:t,state:r,relative:s})},[l,u,s,t,r]),null}function qp(e){return Ep(e.context)}function rt(e){Be(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Yp({basename:e="/",children:t=null,location:r,navigationType:s="POP",navigator:a,static:i=!1}){Be(!qr(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let o=e.replace(/^\/*/,"/"),l=d.useMemo(()=>({basename:o,navigator:a,static:i,future:{}}),[o,a,i]);typeof r=="string"&&(r=Br(r));let{pathname:c="/",search:u="",hash:f="",state:x=null,key:m="default"}=r,y=d.useMemo(()=>{let p=yn(c,o);return p==null?null:{location:{pathname:p,search:u,hash:f,state:x,key:m},navigationType:s}},[o,c,u,f,x,m,s]);return Xt(y!=null,`<Router basename="${o}"> is not able to match the URL "${c}${u}${f}" because it does not start with the basename, so the <Router> won't render anything.`),y==null?null:d.createElement(Kt.Provider,{value:l},d.createElement(Us.Provider,{children:t,value:y}))}function Qp({children:e,location:t}){return Tp(Vo(e),t)}function Vo(e,t=[]){let r=[];return d.Children.forEach(e,(s,a)=>{if(!d.isValidElement(s))return;let i=[...t,a];if(s.type===d.Fragment){r.push.apply(r,Vo(s.props.children,i));return}Be(s.type===rt,`[${typeof s.type=="string"?s.type:s.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Be(!s.props.index||!s.props.children,"An index route cannot have child routes.");let o={id:s.props.id||i.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,loader:s.props.loader,action:s.props.action,hydrateFallbackElement:s.props.hydrateFallbackElement,HydrateFallback:s.props.HydrateFallback,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.hasErrorBoundary===!0||s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(o.children=Vo(s.props.children,i)),r.push(o)}),r}var Ea="get",Ra="application/x-www-form-urlencoded";function bi(e){return e!=null&&typeof e.tagName=="string"}function Hp(e){return bi(e)&&e.tagName.toLowerCase()==="button"}function Wp(e){return bi(e)&&e.tagName.toLowerCase()==="form"}function Gp(e){return bi(e)&&e.tagName.toLowerCase()==="input"}function Vp(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Xp(e,t){return e.button===0&&(!t||t==="_self")&&!Vp(e)}var oa=null;function Kp(){if(oa===null)try{new FormData(document.createElement("form"),0),oa=!1}catch{oa=!0}return oa}var Jp=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Gi(e){return e!=null&&!Jp.has(e)?(Xt(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Ra}"`),null):e}function Zp(e,t){let r,s,a,i,o;if(Wp(e)){let l=e.getAttribute("action");s=l?yn(l,t):null,r=e.getAttribute("method")||Ea,a=Gi(e.getAttribute("enctype"))||Ra,i=new FormData(e)}else if(Hp(e)||Gp(e)&&(e.type==="submit"||e.type==="image")){let l=e.form;if(l==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let c=e.getAttribute("formaction")||l.getAttribute("action");if(s=c?yn(c,t):null,r=e.getAttribute("formmethod")||l.getAttribute("method")||Ea,a=Gi(e.getAttribute("formenctype"))||Gi(l.getAttribute("enctype"))||Ra,i=new FormData(l,e),!Kp()){let{name:u,type:f,value:x}=e;if(f==="image"){let m=u?`${u}.`:"";i.append(`${m}x`,"0"),i.append(`${m}y`,"0")}else u&&i.append(u,x)}}else{if(bi(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');r=Ea,s=null,a=Ra,o=e}return i&&a==="text/plain"&&(o=i,i=void 0),{action:s,method:r.toLowerCase(),encType:a,formData:i,body:o}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Vl(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function ex(e,t,r){let s=typeof e=="string"?new URL(e,typeof window>"u"?"server://singlefetch/":window.location.origin):e;return s.pathname==="/"?s.pathname=`_root.${r}`:t&&yn(s.pathname,t)==="/"?s.pathname=`${t.replace(/\/$/,"")}/_root.${r}`:s.pathname=`${s.pathname.replace(/\/$/,"")}.${r}`,s}async function tx(e,t){if(e.id in t)return t[e.id];try{let r=await Gf(()=>import(e.module),[]);return t[e.id]=r,r}catch(r){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(r),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function nx(e){return e!=null&&typeof e.page=="string"}function rx(e){return e==null?!1:e.href==null?e.rel==="preload"&&typeof e.imageSrcSet=="string"&&typeof e.imageSizes=="string":typeof e.rel=="string"&&typeof e.href=="string"}async function sx(e,t,r){let s=await Promise.all(e.map(async a=>{let i=t.routes[a.route.id];if(i){let o=await tx(i,r);return o.links?o.links():[]}return[]}));return lx(s.flat(1).filter(rx).filter(a=>a.rel==="stylesheet"||a.rel==="preload").map(a=>a.rel==="stylesheet"?{...a,rel:"prefetch",as:"style"}:{...a,rel:"prefetch"}))}function xd(e,t,r,s,a,i){let o=(c,u)=>r[u]?c.route.id!==r[u].route.id:!0,l=(c,u)=>{var f;return r[u].pathname!==c.pathname||((f=r[u].route.path)==null?void 0:f.endsWith("*"))&&r[u].params["*"]!==c.params["*"]};return i==="assets"?t.filter((c,u)=>o(c,u)||l(c,u)):i==="data"?t.filter((c,u)=>{var x;let f=s.routes[c.route.id];if(!f||!f.hasLoader)return!1;if(o(c,u)||l(c,u))return!0;if(c.route.shouldRevalidate){let m=c.route.shouldRevalidate({currentUrl:new URL(a.pathname+a.search+a.hash,window.origin),currentParams:((x=r[0])==null?void 0:x.params)||{},nextUrl:new URL(e,window.origin),nextParams:c.params,defaultShouldRevalidate:!0});if(typeof m=="boolean")return m}return!0}):[]}function ax(e,t,{includeHydrateFallback:r}={}){return ix(e.map(s=>{let a=t.routes[s.route.id];if(!a)return[];let i=[a.module];return a.clientActionModule&&(i=i.concat(a.clientActionModule)),a.clientLoaderModule&&(i=i.concat(a.clientLoaderModule)),r&&a.hydrateFallbackModule&&(i=i.concat(a.hydrateFallbackModule)),a.imports&&(i=i.concat(a.imports)),i}).flat(1))}function ix(e){return[...new Set(e)]}function ox(e){let t={},r=Object.keys(e).sort();for(let s of r)t[s]=e[s];return t}function lx(e,t){let r=new Set,s=new Set(t);return e.reduce((a,i)=>{if(t&&!nx(i)&&i.as==="script"&&i.href&&s.has(i.href))return a;let l=JSON.stringify(ox(i));return r.has(l)||(r.add(l),a.push({key:l,link:i})),a},[])}function sm(){let e=d.useContext(Ur);return Vl(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}function cx(){let e=d.useContext(yi);return Vl(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}var Xl=d.createContext(void 0);Xl.displayName="FrameworkContext";function am(){let e=d.useContext(Xl);return Vl(e,"You must render this element inside a <HydratedRouter> element"),e}function dx(e,t){let r=d.useContext(Xl),[s,a]=d.useState(!1),[i,o]=d.useState(!1),{onFocus:l,onBlur:c,onMouseEnter:u,onMouseLeave:f,onTouchStart:x}=t,m=d.useRef(null);d.useEffect(()=>{if(e==="render"&&o(!0),e==="viewport"){let j=v=>{v.forEach(h=>{o(h.isIntersecting)})},k=new IntersectionObserver(j,{threshold:.5});return m.current&&k.observe(m.current),()=>{k.disconnect()}}},[e]),d.useEffect(()=>{if(s){let j=setTimeout(()=>{o(!0)},100);return()=>{clearTimeout(j)}}},[s]);let y=()=>{a(!0)},p=()=>{a(!1),o(!1)};return r?e!=="intent"?[i,m,{}]:[i,m,{onFocus:Zr(l,y),onBlur:Zr(c,p),onMouseEnter:Zr(u,y),onMouseLeave:Zr(f,p),onTouchStart:Zr(x,y)}]:[!1,m,{}]}function Zr(e,t){return r=>{e&&e(r),r.defaultPrevented||t(r)}}function ux({page:e,...t}){let{router:r}=sm(),s=d.useMemo(()=>Vf(r.routes,e,r.basename),[r.routes,e,r.basename]);return s?d.createElement(mx,{page:e,matches:s,...t}):null}function fx(e){let{manifest:t,routeModules:r}=am(),[s,a]=d.useState([]);return d.useEffect(()=>{let i=!1;return sx(e,t,r).then(o=>{i||a(o)}),()=>{i=!0}},[e,t,r]),s}function mx({page:e,matches:t,...r}){let s=on(),{manifest:a,routeModules:i}=am(),{basename:o}=sm(),{loaderData:l,matches:c}=cx(),u=d.useMemo(()=>xd(e,t,c,a,s,"data"),[e,t,c,a,s]),f=d.useMemo(()=>xd(e,t,c,a,s,"assets"),[e,t,c,a,s]),x=d.useMemo(()=>{if(e===s.pathname+s.search+s.hash)return[];let p=new Set,j=!1;if(t.forEach(v=>{var g;let h=a.routes[v.route.id];!h||!h.hasLoader||(!u.some(E=>E.route.id===v.route.id)&&v.route.id in l&&((g=i[v.route.id])!=null&&g.shouldRevalidate)||h.hasClientLoader?j=!0:p.add(v.route.id))}),p.size===0)return[];let k=ex(e,o,"data");return j&&p.size>0&&k.searchParams.set("_routes",t.filter(v=>p.has(v.route.id)).map(v=>v.route.id).join(",")),[k.pathname+k.search]},[o,l,s,a,u,t,e,i]),m=d.useMemo(()=>ax(f,a),[f,a]),y=fx(f);return d.createElement(d.Fragment,null,x.map(p=>d.createElement("link",{key:p,rel:"prefetch",as:"fetch",href:p,...r})),m.map(p=>d.createElement("link",{key:p,rel:"modulepreload",href:p,...r})),y.map(({key:p,link:j})=>d.createElement("link",{key:p,...j})))}function hx(...e){return t=>{e.forEach(r=>{typeof r=="function"?r(t):r!=null&&(r.current=t)})}}var im=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{im&&(window.__reactRouterVersion="7.7.1")}catch{}function px({basename:e,children:t,window:r}){let s=d.useRef();s.current==null&&(s.current=Kh({window:r,v5Compat:!0}));let a=s.current,[i,o]=d.useState({action:a.action,location:a.location}),l=d.useCallback(c=>{d.startTransition(()=>o(c))},[o]);return d.useLayoutEffect(()=>a.listen(l),[a,l]),d.createElement(Yp,{basename:e,children:t,location:i.location,navigationType:i.action,navigator:a})}var om=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,lm=d.forwardRef(function({onClick:t,discover:r="render",prefetch:s="none",relative:a,reloadDocument:i,replace:o,state:l,target:c,to:u,preventScrollReset:f,viewTransition:x,...m},y){let{basename:p}=d.useContext(Kt),j=typeof u=="string"&&om.test(u),k,v=!1;if(typeof u=="string"&&j&&(k=u,im))try{let w=new URL(window.location.href),N=u.startsWith("//")?new URL(w.protocol+u):new URL(u),R=yn(N.pathname,p);N.origin===w.origin&&R!=null?u=R+N.search+N.hash:v=!0}catch{Xt(!1,`<Link to="${u}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let h=kp(u,{relative:a}),[g,E,P]=dx(s,m),z=yx(u,{replace:o,state:l,target:c,preventScrollReset:f,relative:a,viewTransition:x});function S(w){t&&t(w),w.defaultPrevented||z(w)}let b=d.createElement("a",{...m,...P,href:k||h,onClick:v||i?t:S,ref:hx(y,E),target:c,"data-discover":!j&&r==="render"?"true":void 0});return g&&!j?d.createElement(d.Fragment,null,b,d.createElement(ux,{page:h})):b});lm.displayName="Link";var xx=d.forwardRef(function({"aria-current":t="page",caseSensitive:r=!1,className:s="",end:a=!1,style:i,to:o,viewTransition:l,children:c,...u},f){let x=qs(o,{relative:u.relative}),m=on(),y=d.useContext(yi),{navigator:p,basename:j}=d.useContext(Kt),k=y!=null&&kx(x)&&l===!0,v=p.encodeLocation?p.encodeLocation(x).pathname:x.pathname,h=m.pathname,g=y&&y.navigation&&y.navigation.location?y.navigation.location.pathname:null;r||(h=h.toLowerCase(),g=g?g.toLowerCase():null,v=v.toLowerCase()),g&&j&&(g=yn(g,j)||g);const E=v!=="/"&&v.endsWith("/")?v.length-1:v.length;let P=h===v||!a&&h.startsWith(v)&&h.charAt(E)==="/",z=g!=null&&(g===v||!a&&g.startsWith(v)&&g.charAt(v.length)==="/"),S={isActive:P,isPending:z,isTransitioning:k},b=P?t:void 0,w;typeof s=="function"?w=s(S):w=[s,P?"active":null,z?"pending":null,k?"transitioning":null].filter(Boolean).join(" ");let N=typeof i=="function"?i(S):i;return d.createElement(lm,{...u,"aria-current":b,className:w,ref:f,style:N,to:o,viewTransition:l},typeof c=="function"?c(S):c)});xx.displayName="NavLink";var gx=d.forwardRef(({discover:e="render",fetcherKey:t,navigate:r,reloadDocument:s,replace:a,state:i,method:o=Ea,action:l,onSubmit:c,relative:u,preventScrollReset:f,viewTransition:x,...m},y)=>{let p=jx(),j=Nx(l,{relative:u}),k=o.toLowerCase()==="get"?"get":"post",v=typeof l=="string"&&om.test(l),h=g=>{if(c&&c(g),g.defaultPrevented)return;g.preventDefault();let E=g.nativeEvent.submitter,P=(E==null?void 0:E.getAttribute("formmethod"))||o;p(E||g.currentTarget,{fetcherKey:t,method:P,navigate:r,replace:a,state:i,relative:u,preventScrollReset:f,viewTransition:x})};return d.createElement("form",{ref:y,method:k,action:j,onSubmit:s?c:h,...m,"data-discover":!v&&e==="render"?"true":void 0})});gx.displayName="Form";function vx(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function cm(e){let t=d.useContext(Ur);return Be(t,vx(e)),t}function yx(e,{target:t,replace:r,state:s,preventScrollReset:a,relative:i,viewTransition:o}={}){let l=wt(),c=on(),u=qs(e,{relative:i});return d.useCallback(f=>{if(Xp(f,t)){f.preventDefault();let x=r!==void 0?r:Ds(c)===Ds(u);l(e,{replace:x,state:s,preventScrollReset:a,relative:i,viewTransition:o})}},[c,l,u,r,s,t,e,a,i,o])}var bx=0,wx=()=>`__${String(++bx)}__`;function jx(){let{router:e}=cm("useSubmit"),{basename:t}=d.useContext(Kt),r=Fp();return d.useCallback(async(s,a={})=>{let{action:i,method:o,encType:l,formData:c,body:u}=Zp(s,t);if(a.navigate===!1){let f=a.fetcherKey||wx();await e.fetch(f,r,a.action||i,{preventScrollReset:a.preventScrollReset,formData:c,body:u,formMethod:a.method||o,formEncType:a.encType||l,flushSync:a.flushSync})}else await e.navigate(a.action||i,{preventScrollReset:a.preventScrollReset,formData:c,body:u,formMethod:a.method||o,formEncType:a.encType||l,replace:a.replace,state:a.state,fromRouteId:r,flushSync:a.flushSync,viewTransition:a.viewTransition})},[e,t,r])}function Nx(e,{relative:t}={}){let{basename:r}=d.useContext(Kt),s=d.useContext(Bt);Be(s,"useFormAction must be used inside a RouteContext");let[a]=s.matches.slice(-1),i={...qs(e||".",{relative:t})},o=on();if(e==null){i.search=o.search;let l=new URLSearchParams(i.search),c=l.getAll("index");if(c.some(f=>f==="")){l.delete("index"),c.filter(x=>x).forEach(x=>l.append("index",x));let f=l.toString();i.search=f?`?${f}`:""}}return(!e||e===".")&&a.route.index&&(i.search=i.search?i.search.replace(/^\?/,"?index&"):"?index"),r!=="/"&&(i.pathname=i.pathname==="/"?r:hn([r,i.pathname])),Ds(i)}function kx(e,{relative:t}={}){let r=d.useContext(Zf);Be(r!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:s}=cm("useViewTransitionState"),a=qs(e,{relative:t});if(!r.isTransitioning)return!1;let i=yn(r.currentLocation.pathname,s)||r.currentLocation.pathname,o=yn(r.nextLocation.pathname,s)||r.nextLocation.pathname;return ti(a.pathname,o)!=null||ti(a.pathname,i)!=null}function Sx({size:e=22,spinning:t=!1}){return n.jsx("div",{style:{width:e,height:e},className:"grid place-items-center",children:n.jsxs("svg",{viewBox:"0 0 100 100",className:`${t?"animate-[spin_0.8s_ease-out]":"motion-safe:animate-[spin_9s_linear_infinite]"} group-active:motion-safe:animate-[spin_1.2s_linear_infinite]`,style:{filter:"drop-shadow(0 2px 4px rgba(0,0,0,0.2))"},children:[n.jsx("path",{d:"M50,50 L50,5 A45,45 0 0,1 86.97,25.98 Z",fill:"#6366F1"}),n.jsx("path",{d:"M50,50 L86.97,25.98 A45,45 0 0,1 86.97,74.02 Z",fill:"#22C55E"}),n.jsx("path",{d:"M50,50 L86.97,74.02 A45,45 0 0,1 50,95 Z",fill:"#F59E0B"}),n.jsx("path",{d:"M50,50 L50,95 A45,45 0 0,1 13.03,74.02 Z",fill:"#EF4444"}),n.jsx("path",{d:"M50,50 L13.03,74.02 A45,45 0 0,1 13.03,25.98 Z",fill:"#3B82F6"}),n.jsx("path",{d:"M50,50 L13.03,25.98 A45,45 0 0,1 50,5 Z",fill:"#8B5CF6"}),n.jsx("circle",{cx:"50",cy:"50",r:"9",fill:"#111827",stroke:"white",strokeWidth:"2"})]})})}function Cx(){const e=wt(),{pathname:t}=on(),r=d.useRef({}),s=d.useRef(0),[a,i]=d.useState(!1),o=d.useRef({});d.useEffect(()=>{o.current={refresh:new Audio("/sounds/refresh.mp3"),tap:new Audio("/sounds/tap.mp3"),whoosh:new Audio("/sounds/whoosh.mp3")},Object.values(o.current).forEach(L=>{L.volume=.5})},[]);const l=L=>{const C=o.current[L];C&&(C.currentTime=0,C.play().catch(()=>{}))},c=L=>{if(navigator.vibrate)switch(L){case"light":navigator.vibrate(10);break;case"medium":navigator.vibrate(20);break;case"heavy":navigator.vibrate(40);break;case"double":navigator.vibrate([20,50,20]);break;case"success":navigator.vibrate([10,50,10,50,10]);break;default:navigator.vibrate(15)}};d.useEffect(()=>{if(t.startsWith("/profile/")){window.scrollTo(0,0);const L=document.querySelector("main");L&&(L.scrollTop=0)}else{const L=r.current[t];L!==void 0?window.scrollTo(0,L):window.scrollTo(0,0)}},[t]);const u=()=>{r.current[t]=window.scrollY},f=["/","/play","/profile"].includes(t),[x,m]=d.useState(!1),[y,p]=d.useState({open:!1,go:null}),[j,k]=d.useState(!1);d.useEffect(()=>{const L=()=>{k(document.body.classList.contains("hide-bottom-nav"))};L();const C=new MutationObserver(L);return C.observe(document.body,{attributes:!0,attributeFilter:["class"]}),()=>C.disconnect()},[]),d.useEffect(()=>{const L=new MutationObserver(()=>{m(document.body.classList.contains("modal-open"))});return L.observe(document.body,{attributes:!0,attributeFilter:["class"]}),()=>L.disconnect()},[]);const h=x||j||[/^\/quiz\//,/^\/practice\//,/^\/profile\//,/^\/play\/classic/].some(L=>L.test(t)),g=L=>L==="/"?t==="/":t.startsWith(L),E=d.useRef(0),[P,z]=d.useState(!1),[S,b]=d.useState(0),[w,N]=d.useState(!1),[R,F]=d.useState(0),Q=L=>{!f||w||window.scrollY===0&&(E.current=L.touches[0].clientY)},ee=L=>{if(!(!f||w)&&window.scrollY===0){const C=L.touches[0].clientY-E.current;if(C>0){z(!0);const T=Math.min(C,120);b(T),F(Math.min(T/60*100,100)),C>60&&C<65&&c("light")}}},q=()=>{P&&S>60&&(N(!0),l("refresh"),c("success"),window.scrollTo({top:0,behavior:"smooth"}),setTimeout(()=>{N(!1),F(0)},1500)),z(!1),b(0)},B=({path:L,icon:C,label:T,emoji:_})=>{const A=g(L),[M,D]=d.useState(!1),X=()=>{u(),D(!0),setTimeout(()=>D(!1),600);const $=()=>{if(L==="/play"){i(!0),l("whoosh"),c("medium"),setTimeout(()=>{e(`/play?view=modes&reset=${Date.now()}`),i(!1)},200);return}if(A){const ie=Date.now();ie-s.current<500&&(window.scrollTo({top:0,behavior:"smooth"}),l("tap"),c("double")),s.current=ie}else l("tap"),c("light"),e(L)};if(localStorage.getItem("qp_in_question")==="true"&&!A){p({open:!0,go:$});return}$()};return n.jsxs("button",{type:"button",onClick:X,className:`group relative flex h-14 w-20 flex-col items-center justify-center rounded-xl transition-all
          ${A?"scale-110":"scale-100 hover:scale-105"}
          ${M?"animate-bounce":""}`,"aria-current":A?"page":void 0,children:[A&&n.jsxs(n.Fragment,{children:[n.jsx("span",{className:"absolute -top-2 h-1.5 w-10 rounded-full bg-gradient-to-r from-transparent via-white to-transparent opacity-60"}),n.jsx("div",{className:"absolute inset-0 rounded-xl bg-white/10 blur-xl"})]}),n.jsx("div",{className:`leading-none text-2xl transition-transform ${A?"scale-125":""} ${L==="/play"&&a?"animate-spin":""}`,children:_||C}),n.jsx("span",{className:`mt-1 text-[10px] font-medium transition-all ${A?"text-white":"text-base-muted/80"}`,children:T})]})};return n.jsxs("div",{className:"min-h-screen bg-base-bg text-base-text",onTouchStart:Q,onTouchMove:ee,onTouchEnd:q,children:[n.jsx("style",{children:`
        @keyframes rainbow {
          0%, 100% { color: #FF6B6B; }
          20% { color: #4ECDC4; }
          40% { color: #FFD93D; }
          60% { color: #A8E6CF; }
          80% { color: #C7B8FF; }
        }
        
        @keyframes float-up {
          0% { transform: translateY(0) scale(1); opacity: 1; }
          100% { transform: translateY(-20px) scale(0.8); opacity: 0; }
        }
        
        .rainbow-text {
          animation: rainbow 2s linear infinite;
        }
        
        @keyframes confetti {
          0% { transform: translateY(0) rotate(0deg); opacity: 1; }
          100% { transform: translateY(100px) rotate(720deg); opacity: 0; }
        }
        .hide-bottom-nav nav[role="navigation"] {
         display: none !important;
        }
      `}),(P||w)&&n.jsxs("div",{className:"fixed left-1/2 z-50 flex flex-col items-center transition-all duration-300",style:{top:w?"60px":`${Math.max(20,Math.min(S-20,80))}px`,transform:"translateX(-50%) scale("+(w?1.1:1)+")"},children:[n.jsxs("div",{className:"relative mb-2",children:[n.jsxs("svg",{width:"48",height:"48",className:w?"animate-spin":"",children:[n.jsx("circle",{cx:"24",cy:"24",r:"20",fill:"none",stroke:"rgba(255,255,255,0.2)",strokeWidth:"4"}),n.jsx("circle",{cx:"24",cy:"24",r:"20",fill:"none",stroke:"url(#gradient)",strokeWidth:"4",strokeDasharray:`${R*1.26} 126`,strokeLinecap:"round",transform:"rotate(-90 24 24)"}),n.jsx("defs",{children:n.jsxs("linearGradient",{id:"gradient",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[n.jsx("stop",{offset:"0%",stopColor:"#6366F1"}),n.jsx("stop",{offset:"50%",stopColor:"#22C55E"}),n.jsx("stop",{offset:"100%",stopColor:"#F59E0B"})]})})]}),n.jsx("div",{className:"absolute inset-0 grid place-items-center",children:n.jsx("span",{className:"text-2xl",children:w?"🎉":"⬇"})})]}),n.jsx("span",{className:`text-sm font-medium text-white px-3 py-1 rounded-full bg-white/20 backdrop-blur
            ${w?"rainbow-text":""}`,children:w?"Refreshed! 🌟":S>60?"Release! 🚀":"Pull down..."}),w&&n.jsx("div",{className:"absolute inset-0 pointer-events-none",children:[...Array(6)].map((L,C)=>n.jsx("span",{className:"absolute text-2xl",style:{left:`${-30+C*15}px`,animation:"confetti 1s ease-out forwards",animationDelay:`${C*.1}s`},children:["🎊","✨","⭐","🎈","🎉","💫"][C]},C))})]}),n.jsx("main",{className:"mx-auto w-full max-w-none px-1 sm:px-3 md:px-4 overscroll-y-contain",style:{height:h||document.body.classList.contains("hide-bottom-nav")?"100dvh":"calc(100dvh - (5.5rem + env(safe-area-inset-bottom)))",paddingTop:"calc(env(safe-area-inset-top) + 12px)",paddingBottom:h||document.body.classList.contains("hide-bottom-nav")?0:void 0,overflowY:"auto",transform:P&&!w?`translateY(${S*.5}px)`:void 0,transition:P||w?"transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)":void 0},children:n.jsx(qp,{})}),y.open&&n.jsxs("div",{className:"fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center px-6",style:{animation:"fadeIn 0.2s ease-out"},children:[n.jsxs("div",{className:"w-full max-w-sm rounded-3xl bg-gradient-to-b from-base-card to-base-card/90 border border-base-border p-6 text-center shadow-2xl",style:{animation:"slideUp 0.3s ease-out"},children:[n.jsx("div",{className:"text-5xl mb-4",style:{animation:"bounce 0.6s ease-out"},children:"😟"}),n.jsx("div",{className:"text-xl font-bold mb-2 bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent",children:"Leave the game?"}),n.jsx("p",{className:"text-base-muted mb-6 text-sm",children:"You'll lose your current progress!"}),n.jsxs("div",{className:"flex gap-3",children:[n.jsx("button",{onClick:()=>{c("light"),p({open:!1,go:null})},className:"flex-1 py-3 rounded-2xl border-2 border-green-500/30 bg-green-500/10 hover:bg-green-500/20 transition-all font-semibold text-green-400",children:"Keep Playing! 🎮"}),n.jsx("button",{onClick:()=>{c("medium");const L=y.go;p({open:!1,go:null}),L==null||L()},className:"flex-1 py-3 rounded-2xl bg-gradient-to-r from-red-500/80 to-orange-500/80 text-white font-semibold hover:from-red-500 hover:to-orange-500 transition-all",children:"Leave 👋"})]})]}),n.jsx("style",{children:`
            @keyframes fadeIn {
              from { opacity: 0; }
              to { opacity: 1; }
            }
            @keyframes slideUp {
              from { transform: translateY(20px); opacity: 0; }
              to { transform: translateY(0); opacity: 1; }
            }
          `})]}),!h&&n.jsxs("nav",{role:"navigation","aria-label":"Bottom navigation",className:"fixed inset-x-0 bottom-0 z-50",children:[n.jsx("div",{className:"absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0B0F1A] to-[#0B0F1A]/95 backdrop-blur-lg",style:{height:"calc(5.5rem + env(safe-area-inset-bottom))"},"aria-hidden":!0}),n.jsx("div",{className:"relative mx-auto max-w-md px-4 pb-[calc(env(safe-area-inset-bottom)+0.5rem)] pt-2",children:n.jsxs("div",{className:"relative",children:[n.jsx("div",{className:"absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-green-500/20 blur-2xl"}),n.jsxs("div",{className:"relative flex h-[72px] items-center justify-around rounded-3xl border border-white/10 bg-gradient-to-b from-base-card/95 to-base-card/80 shadow-2xl backdrop-blur-xl",children:[n.jsx(B,{path:"/",emoji:"🏠",label:"Home"}),n.jsx(B,{path:"/play",icon:n.jsx(Sx,{size:26,spinning:a}),label:"Play"}),n.jsx(B,{path:"/swipe",emoji:"📚",label:"Swipe"}),n.jsx(B,{path:"/profile",emoji:"👤",label:"Profile"})]})]})})]})]})}function ni(){return ni=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var s in r)({}).hasOwnProperty.call(r,s)&&(e[s]=r[s])}return e},ni.apply(null,arguments)}function Ex(e,t){if(e==null)return{};var r={};for(var s in e)if({}.hasOwnProperty.call(e,s)){if(t.indexOf(s)!==-1)continue;r[s]=e[s]}return r}function Rx(e){d.useEffect(e,[])}var Tx=["id","volume","playbackRate","soundEnabled","interrupt","onload"];function zt(e,t){var r=t===void 0?{}:t,s=r.volume,a=s===void 0?1:s,i=r.playbackRate,o=i===void 0?1:i,l=r.soundEnabled,c=l===void 0?!0:l,u=r.interrupt,f=u===void 0?!1:u,x=r.onload,m=Ex(r,Tx),y=xt.useRef(null),p=xt.useRef(!1),j=xt.useState(null),k=j[0],v=j[1],h=xt.useState(null),g=h[0],E=h[1],P=function(){typeof x=="function"&&x.call(this),p.current&&v(this.duration()*1e3),E(this)};Rx(function(){return Gf(()=>import("./howler-70dd7db4.js").then(N=>N.h),[]).then(function(N){if(!p.current){var R;y.current=(R=N.Howl)!==null&&R!==void 0?R:N.default.Howl,p.current=!0,new y.current(ni({src:Array.isArray(e)?e:[e],volume:a,rate:o,onload:P},m))}}),function(){p.current=!1}}),xt.useEffect(function(){y.current&&g&&E(new y.current(ni({src:Array.isArray(e)?e:[e],volume:a,onload:P},m)))},[JSON.stringify(e)]),xt.useEffect(function(){g&&(g.volume(a),m.sprite||g.rate(o))},[g,a,o]);var z=xt.useCallback(function(N){typeof N>"u"&&(N={}),!(!g||!c&&!N.forceSoundEnabled)&&(f&&g.stop(),N.playbackRate&&g.rate(N.playbackRate),g.play(N.id))},[g,c,f]),S=xt.useCallback(function(N){g&&g.stop(N)},[g]),b=xt.useCallback(function(N){g&&g.pause(N)},[g]),w=[z,{sound:g,stop:S,pause:b,duration:k}];return w}var dm={exports:{}};/* @license
Papa Parse
v5.5.3
https://github.com/mholt/PapaParse
License: MIT
*/(function(e,t){((r,s)=>{e.exports=s()})(jm,function r(){var s=typeof self<"u"?self:typeof window<"u"?window:s!==void 0?s:{},a,i=!s.document&&!!s.postMessage,o=s.IS_PAPA_WORKER||!1,l={},c=0,u={};function f(b){this._handle=null,this._finished=!1,this._completed=!1,this._halted=!1,this._input=null,this._baseIndex=0,this._partialLine="",this._rowCount=0,this._start=0,this._nextChunk=null,this.isFirstChunk=!0,this._completeResults={data:[],errors:[],meta:{}},(function(w){var N=P(w);N.chunkSize=parseInt(N.chunkSize),w.step||w.chunk||(N.chunkSize=null),this._handle=new j(N),(this._handle.streamer=this)._config=N}).call(this,b),this.parseChunk=function(w,N){var R=parseInt(this._config.skipFirstNLines)||0;if(this.isFirstChunk&&0<R){let Q=this._config.newline;Q||(F=this._config.quoteChar||'"',Q=this._handle.guessLineEndings(w,F)),w=[...w.split(Q).slice(R)].join(Q)}this.isFirstChunk&&S(this._config.beforeFirstChunk)&&(F=this._config.beforeFirstChunk(w))!==void 0&&(w=F),this.isFirstChunk=!1,this._halted=!1;var R=this._partialLine+w,F=(this._partialLine="",this._handle.parse(R,this._baseIndex,!this._finished));if(!this._handle.paused()&&!this._handle.aborted()){if(w=F.meta.cursor,R=(this._finished||(this._partialLine=R.substring(w-this._baseIndex),this._baseIndex=w),F&&F.data&&(this._rowCount+=F.data.length),this._finished||this._config.preview&&this._rowCount>=this._config.preview),o)s.postMessage({results:F,workerId:u.WORKER_ID,finished:R});else if(S(this._config.chunk)&&!N){if(this._config.chunk(F,this._handle),this._handle.paused()||this._handle.aborted())return void(this._halted=!0);this._completeResults=F=void 0}return this._config.step||this._config.chunk||(this._completeResults.data=this._completeResults.data.concat(F.data),this._completeResults.errors=this._completeResults.errors.concat(F.errors),this._completeResults.meta=F.meta),this._completed||!R||!S(this._config.complete)||F&&F.meta.aborted||(this._config.complete(this._completeResults,this._input),this._completed=!0),R||F&&F.meta.paused||this._nextChunk(),F}this._halted=!0},this._sendError=function(w){S(this._config.error)?this._config.error(w):o&&this._config.error&&s.postMessage({workerId:u.WORKER_ID,error:w,finished:!1})}}function x(b){var w;(b=b||{}).chunkSize||(b.chunkSize=u.RemoteChunkSize),f.call(this,b),this._nextChunk=i?function(){this._readChunk(),this._chunkLoaded()}:function(){this._readChunk()},this.stream=function(N){this._input=N,this._nextChunk()},this._readChunk=function(){if(this._finished)this._chunkLoaded();else{if(w=new XMLHttpRequest,this._config.withCredentials&&(w.withCredentials=this._config.withCredentials),i||(w.onload=z(this._chunkLoaded,this),w.onerror=z(this._chunkError,this)),w.open(this._config.downloadRequestBody?"POST":"GET",this._input,!i),this._config.downloadRequestHeaders){var N,R=this._config.downloadRequestHeaders;for(N in R)w.setRequestHeader(N,R[N])}var F;this._config.chunkSize&&(F=this._start+this._config.chunkSize-1,w.setRequestHeader("Range","bytes="+this._start+"-"+F));try{w.send(this._config.downloadRequestBody)}catch(Q){this._chunkError(Q.message)}i&&w.status===0&&this._chunkError()}},this._chunkLoaded=function(){w.readyState===4&&(w.status<200||400<=w.status?this._chunkError():(this._start+=this._config.chunkSize||w.responseText.length,this._finished=!this._config.chunkSize||this._start>=(N=>(N=N.getResponseHeader("Content-Range"))!==null?parseInt(N.substring(N.lastIndexOf("/")+1)):-1)(w),this.parseChunk(w.responseText)))},this._chunkError=function(N){N=w.statusText||N,this._sendError(new Error(N))}}function m(b){(b=b||{}).chunkSize||(b.chunkSize=u.LocalChunkSize),f.call(this,b);var w,N,R=typeof FileReader<"u";this.stream=function(F){this._input=F,N=F.slice||F.webkitSlice||F.mozSlice,R?((w=new FileReader).onload=z(this._chunkLoaded,this),w.onerror=z(this._chunkError,this)):w=new FileReaderSync,this._nextChunk()},this._nextChunk=function(){this._finished||this._config.preview&&!(this._rowCount<this._config.preview)||this._readChunk()},this._readChunk=function(){var F=this._input,Q=(this._config.chunkSize&&(Q=Math.min(this._start+this._config.chunkSize,this._input.size),F=N.call(F,this._start,Q)),w.readAsText(F,this._config.encoding));R||this._chunkLoaded({target:{result:Q}})},this._chunkLoaded=function(F){this._start+=this._config.chunkSize,this._finished=!this._config.chunkSize||this._start>=this._input.size,this.parseChunk(F.target.result)},this._chunkError=function(){this._sendError(w.error)}}function y(b){var w;f.call(this,b=b||{}),this.stream=function(N){return w=N,this._nextChunk()},this._nextChunk=function(){var N,R;if(!this._finished)return N=this._config.chunkSize,w=N?(R=w.substring(0,N),w.substring(N)):(R=w,""),this._finished=!w,this.parseChunk(R)}}function p(b){f.call(this,b=b||{});var w=[],N=!0,R=!1;this.pause=function(){f.prototype.pause.apply(this,arguments),this._input.pause()},this.resume=function(){f.prototype.resume.apply(this,arguments),this._input.resume()},this.stream=function(F){this._input=F,this._input.on("data",this._streamData),this._input.on("end",this._streamEnd),this._input.on("error",this._streamError)},this._checkIsFinished=function(){R&&w.length===1&&(this._finished=!0)},this._nextChunk=function(){this._checkIsFinished(),w.length?this.parseChunk(w.shift()):N=!0},this._streamData=z(function(F){try{w.push(typeof F=="string"?F:F.toString(this._config.encoding)),N&&(N=!1,this._checkIsFinished(),this.parseChunk(w.shift()))}catch(Q){this._streamError(Q)}},this),this._streamError=z(function(F){this._streamCleanUp(),this._sendError(F)},this),this._streamEnd=z(function(){this._streamCleanUp(),R=!0,this._streamData("")},this),this._streamCleanUp=z(function(){this._input.removeListener("data",this._streamData),this._input.removeListener("end",this._streamEnd),this._input.removeListener("error",this._streamError)},this)}function j(b){var w,N,R,F,Q=Math.pow(2,53),ee=-Q,q=/^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/,B=/^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/,L=this,C=0,T=0,_=!1,A=!1,M=[],D={data:[],errors:[],meta:{}};function X(I){return b.skipEmptyLines==="greedy"?I.join("").trim()==="":I.length===1&&I[0].length===0}function $(){if(D&&R&&(ie("Delimiter","UndetectableDelimiter","Unable to auto-detect delimiting character; defaulted to '"+u.DefaultDelimiter+"'"),R=!1),b.skipEmptyLines&&(D.data=D.data.filter(function(V){return!X(V)})),J()){let V=function(te,K){S(b.transformHeader)&&(te=b.transformHeader(te,K)),M.push(te)};if(D)if(Array.isArray(D.data[0])){for(var I=0;J()&&I<D.data.length;I++)D.data[I].forEach(V);D.data.splice(0,1)}else D.data.forEach(V)}function O(V,te){for(var K=b.header?{}:[],Y=0;Y<V.length;Y++){var ne=Y,U=V[Y],U=((H,Z)=>(ae=>(b.dynamicTypingFunction&&b.dynamicTyping[ae]===void 0&&(b.dynamicTyping[ae]=b.dynamicTypingFunction(ae)),(b.dynamicTyping[ae]||b.dynamicTyping)===!0))(H)?Z==="true"||Z==="TRUE"||Z!=="false"&&Z!=="FALSE"&&((ae=>{if(q.test(ae)&&(ae=parseFloat(ae),ee<ae&&ae<Q))return 1})(Z)?parseFloat(Z):B.test(Z)?new Date(Z):Z===""?null:Z):Z)(ne=b.header?Y>=M.length?"__parsed_extra":M[Y]:ne,U=b.transform?b.transform(U,ne):U);ne==="__parsed_extra"?(K[ne]=K[ne]||[],K[ne].push(U)):K[ne]=U}return b.header&&(Y>M.length?ie("FieldMismatch","TooManyFields","Too many fields: expected "+M.length+" fields but parsed "+Y,T+te):Y<M.length&&ie("FieldMismatch","TooFewFields","Too few fields: expected "+M.length+" fields but parsed "+Y,T+te)),K}var W;D&&(b.header||b.dynamicTyping||b.transform)&&(W=1,!D.data.length||Array.isArray(D.data[0])?(D.data=D.data.map(O),W=D.data.length):D.data=O(D.data,0),b.header&&D.meta&&(D.meta.fields=M),T+=W)}function J(){return b.header&&M.length===0}function ie(I,O,W,V){I={type:I,code:O,message:W},V!==void 0&&(I.row=V),D.errors.push(I)}S(b.step)&&(F=b.step,b.step=function(I){D=I,J()?$():($(),D.data.length!==0&&(C+=I.data.length,b.preview&&C>b.preview?N.abort():(D.data=D.data[0],F(D,L))))}),this.parse=function(I,O,W){var V=b.quoteChar||'"',V=(b.newline||(b.newline=this.guessLineEndings(I,V)),R=!1,b.delimiter?S(b.delimiter)&&(b.delimiter=b.delimiter(I),D.meta.delimiter=b.delimiter):((V=((te,K,Y,ne,U)=>{var H,Z,ae,ke;U=U||[",","	","|",";",u.RECORD_SEP,u.UNIT_SEP];for(var fe=0;fe<U.length;fe++){for(var me,Se=U[fe],Re=0,Te=0,he=0,we=(ae=void 0,new v({comments:ne,delimiter:Se,newline:K,preview:10}).parse(te)),Ce=0;Ce<we.data.length;Ce++)Y&&X(we.data[Ce])?he++:(me=we.data[Ce].length,Te+=me,ae===void 0?ae=me:0<me&&(Re+=Math.abs(me-ae),ae=me));0<we.data.length&&(Te/=we.data.length-he),(Z===void 0||Re<=Z)&&(ke===void 0||ke<Te)&&1.99<Te&&(Z=Re,H=Se,ke=Te)}return{successful:!!(b.delimiter=H),bestDelimiter:H}})(I,b.newline,b.skipEmptyLines,b.comments,b.delimitersToGuess)).successful?b.delimiter=V.bestDelimiter:(R=!0,b.delimiter=u.DefaultDelimiter),D.meta.delimiter=b.delimiter),P(b));return b.preview&&b.header&&V.preview++,w=I,N=new v(V),D=N.parse(w,O,W),$(),_?{meta:{paused:!0}}:D||{meta:{paused:!1}}},this.paused=function(){return _},this.pause=function(){_=!0,N.abort(),w=S(b.chunk)?"":w.substring(N.getCharIndex())},this.resume=function(){L.streamer._halted?(_=!1,L.streamer.parseChunk(w,!0)):setTimeout(L.resume,3)},this.aborted=function(){return A},this.abort=function(){A=!0,N.abort(),D.meta.aborted=!0,S(b.complete)&&b.complete(D),w=""},this.guessLineEndings=function(te,V){te=te.substring(0,1048576);var V=new RegExp(k(V)+"([^]*?)"+k(V),"gm"),W=(te=te.replace(V,"")).split("\r"),V=te.split(`
`),te=1<V.length&&V[0].length<W[0].length;if(W.length===1||te)return`
`;for(var K=0,Y=0;Y<W.length;Y++)W[Y][0]===`
`&&K++;return K>=W.length/2?`\r
`:"\r"}}function k(b){return b.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function v(b){var w=(b=b||{}).delimiter,N=b.newline,R=b.comments,F=b.step,Q=b.preview,ee=b.fastMode,q=null,B=!1,L=b.quoteChar==null?'"':b.quoteChar,C=L;if(b.escapeChar!==void 0&&(C=b.escapeChar),(typeof w!="string"||-1<u.BAD_DELIMITERS.indexOf(w))&&(w=","),R===w)throw new Error("Comment character same as delimiter");R===!0?R="#":(typeof R!="string"||-1<u.BAD_DELIMITERS.indexOf(R))&&(R=!1),N!==`
`&&N!=="\r"&&N!==`\r
`&&(N=`
`);var T=0,_=!1;this.parse=function(A,M,D){if(typeof A!="string")throw new Error("Input must be a string");var X=A.length,$=w.length,J=N.length,ie=R.length,I=S(F),O=[],W=[],V=[],te=T=0;if(!A)return Re();if(ee||ee!==!1&&A.indexOf(L)===-1){for(var K=A.split(N),Y=0;Y<K.length;Y++){if(V=K[Y],T+=V.length,Y!==K.length-1)T+=N.length;else if(D)return Re();if(!R||V.substring(0,ie)!==R){if(I){if(O=[],ke(V.split(w)),Te(),_)return Re()}else ke(V.split(w));if(Q&&Q<=Y)return O=O.slice(0,Q),Re(!0)}}return Re()}for(var ne=A.indexOf(w,T),U=A.indexOf(N,T),H=new RegExp(k(C)+k(L),"g"),Z=A.indexOf(L,T);;)if(A[T]===L)for(Z=T,T++;;){if((Z=A.indexOf(L,Z+1))===-1)return D||W.push({type:"Quotes",code:"MissingQuotes",message:"Quoted field unterminated",row:O.length,index:T}),me();if(Z===X-1)return me(A.substring(T,Z).replace(H,L));if(L===C&&A[Z+1]===C)Z++;else if(L===C||Z===0||A[Z-1]!==C){ne!==-1&&ne<Z+1&&(ne=A.indexOf(w,Z+1));var ae=fe((U=U!==-1&&U<Z+1?A.indexOf(N,Z+1):U)===-1?ne:Math.min(ne,U));if(A.substr(Z+1+ae,$)===w){V.push(A.substring(T,Z).replace(H,L)),A[T=Z+1+ae+$]!==L&&(Z=A.indexOf(L,T)),ne=A.indexOf(w,T),U=A.indexOf(N,T);break}if(ae=fe(U),A.substring(Z+1+ae,Z+1+ae+J)===N){if(V.push(A.substring(T,Z).replace(H,L)),Se(Z+1+ae+J),ne=A.indexOf(w,T),Z=A.indexOf(L,T),I&&(Te(),_))return Re();if(Q&&O.length>=Q)return Re(!0);break}W.push({type:"Quotes",code:"InvalidQuotes",message:"Trailing quote on quoted field is malformed",row:O.length,index:T}),Z++}}else if(R&&V.length===0&&A.substring(T,T+ie)===R){if(U===-1)return Re();T=U+J,U=A.indexOf(N,T),ne=A.indexOf(w,T)}else if(ne!==-1&&(ne<U||U===-1))V.push(A.substring(T,ne)),T=ne+$,ne=A.indexOf(w,T);else{if(U===-1)break;if(V.push(A.substring(T,U)),Se(U+J),I&&(Te(),_))return Re();if(Q&&O.length>=Q)return Re(!0)}return me();function ke(he){O.push(he),te=T}function fe(he){var we=0;return we=he!==-1&&(he=A.substring(Z+1,he))&&he.trim()===""?he.length:we}function me(he){return D||(he===void 0&&(he=A.substring(T)),V.push(he),T=X,ke(V),I&&Te()),Re()}function Se(he){T=he,ke(V),V=[],U=A.indexOf(N,T)}function Re(he){if(b.header&&!M&&O.length&&!B){var we=O[0],Ce=Object.create(null),_e=new Set(we);let Ke=!1;for(let pt=0;pt<we.length;pt++){let it=we[pt];if(Ce[it=S(b.transformHeader)?b.transformHeader(it,pt):it]){let Pe,Me=Ce[it];for(;Pe=it+"_"+Me,Me++,_e.has(Pe););_e.add(Pe),we[pt]=Pe,Ce[it]++,Ke=!0,(q=q===null?{}:q)[Pe]=it}else Ce[it]=1,we[pt]=it;_e.add(it)}Ke&&console.warn("Duplicate headers found and renamed."),B=!0}return{data:O,errors:W,meta:{delimiter:w,linebreak:N,aborted:_,truncated:!!he,cursor:te+(M||0),renamedHeaders:q}}}function Te(){F(Re()),O=[],W=[]}},this.abort=function(){_=!0},this.getCharIndex=function(){return T}}function h(b){var w=b.data,N=l[w.workerId],R=!1;if(w.error)N.userError(w.error,w.file);else if(w.results&&w.results.data){var F={abort:function(){R=!0,g(w.workerId,{data:[],errors:[],meta:{aborted:!0}})},pause:E,resume:E};if(S(N.userStep)){for(var Q=0;Q<w.results.data.length&&(N.userStep({data:w.results.data[Q],errors:w.results.errors,meta:w.results.meta},F),!R);Q++);delete w.results}else S(N.userChunk)&&(N.userChunk(w.results,F,w.file),delete w.results)}w.finished&&!R&&g(w.workerId,w.results)}function g(b,w){var N=l[b];S(N.userComplete)&&N.userComplete(w),N.terminate(),delete l[b]}function E(){throw new Error("Not implemented.")}function P(b){if(typeof b!="object"||b===null)return b;var w,N=Array.isArray(b)?[]:{};for(w in b)N[w]=P(b[w]);return N}function z(b,w){return function(){b.apply(w,arguments)}}function S(b){return typeof b=="function"}return u.parse=function(b,w){var N=(w=w||{}).dynamicTyping||!1;if(S(N)&&(w.dynamicTypingFunction=N,N={}),w.dynamicTyping=N,w.transform=!!S(w.transform)&&w.transform,!w.worker||!u.WORKERS_SUPPORTED)return N=null,u.NODE_STREAM_INPUT,typeof b=="string"?(b=(R=>R.charCodeAt(0)!==65279?R:R.slice(1))(b),N=new(w.download?x:y)(w)):b.readable===!0&&S(b.read)&&S(b.on)?N=new p(w):(s.File&&b instanceof File||b instanceof Object)&&(N=new m(w)),N.stream(b);(N=(()=>{var R;return!!u.WORKERS_SUPPORTED&&(R=(()=>{var F=s.URL||s.webkitURL||null,Q=r.toString();return u.BLOB_URL||(u.BLOB_URL=F.createObjectURL(new Blob(["var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; ","(",Q,")();"],{type:"text/javascript"})))})(),(R=new s.Worker(R)).onmessage=h,R.id=c++,l[R.id]=R)})()).userStep=w.step,N.userChunk=w.chunk,N.userComplete=w.complete,N.userError=w.error,w.step=S(w.step),w.chunk=S(w.chunk),w.complete=S(w.complete),w.error=S(w.error),delete w.worker,N.postMessage({input:b,config:w,workerId:N.id})},u.unparse=function(b,w){var N=!1,R=!0,F=",",Q=`\r
`,ee='"',q=ee+ee,B=!1,L=null,C=!1,T=((()=>{if(typeof w=="object"){if(typeof w.delimiter!="string"||u.BAD_DELIMITERS.filter(function(M){return w.delimiter.indexOf(M)!==-1}).length||(F=w.delimiter),typeof w.quotes!="boolean"&&typeof w.quotes!="function"&&!Array.isArray(w.quotes)||(N=w.quotes),typeof w.skipEmptyLines!="boolean"&&typeof w.skipEmptyLines!="string"||(B=w.skipEmptyLines),typeof w.newline=="string"&&(Q=w.newline),typeof w.quoteChar=="string"&&(ee=w.quoteChar),typeof w.header=="boolean"&&(R=w.header),Array.isArray(w.columns)){if(w.columns.length===0)throw new Error("Option columns is empty");L=w.columns}w.escapeChar!==void 0&&(q=w.escapeChar+ee),w.escapeFormulae instanceof RegExp?C=w.escapeFormulae:typeof w.escapeFormulae=="boolean"&&w.escapeFormulae&&(C=/^[=+\-@\t\r].*$/)}})(),new RegExp(k(ee),"g"));if(typeof b=="string"&&(b=JSON.parse(b)),Array.isArray(b)){if(!b.length||Array.isArray(b[0]))return _(null,b,B);if(typeof b[0]=="object")return _(L||Object.keys(b[0]),b,B)}else if(typeof b=="object")return typeof b.data=="string"&&(b.data=JSON.parse(b.data)),Array.isArray(b.data)&&(b.fields||(b.fields=b.meta&&b.meta.fields||L),b.fields||(b.fields=Array.isArray(b.data[0])?b.fields:typeof b.data[0]=="object"?Object.keys(b.data[0]):[]),Array.isArray(b.data[0])||typeof b.data[0]=="object"||(b.data=[b.data])),_(b.fields||[],b.data||[],B);throw new Error("Unable to serialize unrecognized input");function _(M,D,X){var $="",J=(typeof M=="string"&&(M=JSON.parse(M)),typeof D=="string"&&(D=JSON.parse(D)),Array.isArray(M)&&0<M.length),ie=!Array.isArray(D[0]);if(J&&R){for(var I=0;I<M.length;I++)0<I&&($+=F),$+=A(M[I],I);0<D.length&&($+=Q)}for(var O=0;O<D.length;O++){var W=(J?M:D[O]).length,V=!1,te=J?Object.keys(D[O]).length===0:D[O].length===0;if(X&&!J&&(V=X==="greedy"?D[O].join("").trim()==="":D[O].length===1&&D[O][0].length===0),X==="greedy"&&J){for(var K=[],Y=0;Y<W;Y++){var ne=ie?M[Y]:Y;K.push(D[O][ne])}V=K.join("").trim()===""}if(!V){for(var U=0;U<W;U++){0<U&&!te&&($+=F);var H=J&&ie?M[U]:U;$+=A(D[O][H],U)}O<D.length-1&&(!X||0<W&&!te)&&($+=Q)}}return $}function A(M,D){var X,$;return M==null?"":M.constructor===Date?JSON.stringify(M).slice(1,25):($=!1,C&&typeof M=="string"&&C.test(M)&&(M="'"+M,$=!0),X=M.toString().replace(T,q),($=$||N===!0||typeof N=="function"&&N(M,D)||Array.isArray(N)&&N[D]||((J,ie)=>{for(var I=0;I<ie.length;I++)if(-1<J.indexOf(ie[I]))return!0;return!1})(X,u.BAD_DELIMITERS)||-1<X.indexOf(F)||X.charAt(0)===" "||X.charAt(X.length-1)===" ")?ee+X+ee:X)}},u.RECORD_SEP=String.fromCharCode(30),u.UNIT_SEP=String.fromCharCode(31),u.BYTE_ORDER_MARK="\uFEFF",u.BAD_DELIMITERS=["\r",`
`,'"',u.BYTE_ORDER_MARK],u.WORKERS_SUPPORTED=!i&&!!s.Worker,u.NODE_STREAM_INPUT=1,u.LocalChunkSize=10485760,u.RemoteChunkSize=5242880,u.DefaultDelimiter=",",u.Parser=v,u.ParserHandle=j,u.NetworkStreamer=x,u.FileStreamer=m,u.StringStreamer=y,u.ReadableStreamStreamer=p,s.jQuery&&((a=s.jQuery).fn.parse=function(b){var w=b.config||{},N=[];return this.each(function(Q){if(!(a(this).prop("tagName").toUpperCase()==="INPUT"&&a(this).attr("type").toLowerCase()==="file"&&s.FileReader)||!this.files||this.files.length===0)return!0;for(var ee=0;ee<this.files.length;ee++)N.push({file:this.files[ee],inputElem:this,instanceConfig:a.extend({},w)})}),R(),this;function R(){if(N.length===0)S(b.complete)&&b.complete();else{var Q,ee,q,B,L=N[0];if(S(b.before)){var C=b.before(L.file,L.inputElem);if(typeof C=="object"){if(C.action==="abort")return Q="AbortError",ee=L.file,q=L.inputElem,B=C.reason,void(S(b.error)&&b.error({name:Q},ee,q,B));if(C.action==="skip")return void F();typeof C.config=="object"&&(L.instanceConfig=a.extend(L.instanceConfig,C.config))}else if(C==="skip")return void F()}var T=L.instanceConfig.complete;L.instanceConfig.complete=function(_){S(T)&&T(_,L.file,L.inputElem),F()},u.parse(L.file,L.instanceConfig)}}function F(){N.splice(0,1),R()}}),o&&(s.onmessage=function(b){b=b.data,u.WORKER_ID===void 0&&b&&(u.WORKER_ID=b.workerId),typeof b.input=="string"?s.postMessage({workerId:u.WORKER_ID,results:u.parse(b.input,b.config),finished:!0}):(s.File&&b.input instanceof File||b.input instanceof Object)&&(b=u.parse(b.input,b.config))&&s.postMessage({workerId:u.WORKER_ID,results:b,finished:!0})}),(x.prototype=Object.create(f.prototype)).constructor=x,(m.prototype=Object.create(f.prototype)).constructor=m,(y.prototype=Object.create(y.prototype)).constructor=y,(p.prototype=Object.create(f.prototype)).constructor=p,u})})(dm);var _x=dm.exports;const dr=Id(_x);function Kl({startRect:e,targetRef:t,count:r=12,onDone:s}){return d.useEffect(()=>{const a=t==null?void 0:t.current;if(!e||!a){s==null||s();return}const i=a.getBoundingClientRect(),o=document.createElement("div");o.style.position="fixed",o.style.inset="0",o.style.pointerEvents="none",o.style.zIndex="9999",document.body.appendChild(o);const l=i.left+i.width/2,c=i.top+i.height/2,u=e.left+e.width/2,f=e.top+e.height/2,x=200;let m=0;function y(p){const j=document.createElement("div");j.textContent="🪙",Object.assign(j.style,{position:"fixed",left:"0px",top:"0px",zIndex:"10000",pointerEvents:"none",fontSize:"22px",opacity:"1",willChange:"transform, opacity",transform:"translate(0px, 0px)"});const k=u,v=f,h=l,g=c;j.style.transform=`translate(${k}px, ${v}px) scale(1)`,o.appendChild(j),j.getBoundingClientRect(),j.style.transition=`transform ${x}ms cubic-bezier(.2,.8,.2,1), opacity ${x}ms linear`,requestAnimationFrame(()=>{j.style.transform=`translate(${h}px, ${g}px) scale(.6)`,j.style.opacity="0.1"}),setTimeout(()=>{j.remove(),m+=1,m===r&&(o.remove(),s==null||s())},x+50)}for(let p=0;p<r;p++)setTimeout(()=>y(),p*60);return()=>{try{o.remove()}catch{}}},[e,t,r,s]),null}const ft={XP_PER_CORRECT:10,XP_PER_LEVEL:100,MAX_LEVEL:100,COINS_PER_CORRECT:5,MAX_ENERGY:5,ENERGY_REGEN_TIME:36e5,ENERGY_COST:{quiz:1,practice:0,daily:0},COMBO_MULTIPLIERS:{2:{multiplier:1.2,text:"Nice!"},3:{multiplier:1.5,text:"Great!"},5:{multiplier:2,text:"On Fire!"},10:{multiplier:3,text:"Legendary!"}},AVATARS:[{id:"wizard",emoji:"🧙",name:"Knowledge Wizard",unlocked:!0,bgColor:"from-purple-500 to-indigo-500"},{id:"knight",emoji:"⚔️",name:"Quiz Knight",unlocked:!0,bgColor:"from-blue-500 to-cyan-500"},{id:"explorer",emoji:"🗺️",name:"Fact Explorer",unlockLevel:5,unlocked:!1,bgColor:"from-green-500 to-emerald-500"},{id:"scientist",emoji:"🔬",name:"Science Master",unlockLevel:10,unlocked:!1,bgColor:"from-orange-500 to-red-500"},{id:"artist",emoji:"🎨",name:"Creative Mind",unlockLevel:15,unlocked:!1,bgColor:"from-pink-500 to-rose-500"}],STORAGE_KEYS:{PLAYER:"qp_player",GAME_STATE:"qp_game_state",ENERGY:"qp_energy",CURRENT_COMBO:"qp_combo"}},gd=e=>Math.floor(e/ft.XP_PER_LEVEL)+1,Px=e=>{const t=e%ft.XP_PER_LEVEL;return{current:t,required:ft.XP_PER_LEVEL,percentage:t/ft.XP_PER_LEVEL*100}};function Ax({player:e,size:t="normal",showLevel:r=!0,showName:s=!0}){const a=ft.AVATARS.find(o=>o.id===e.avatar)||ft.AVATARS[0],i={small:"w-10 h-10 text-xl",normal:"w-14 h-14 text-2xl",large:"w-20 h-20 text-4xl"};return n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsxs("div",{className:"relative",children:[n.jsx("div",{className:`${i[t]} rounded-full bg-gradient-to-br ${a.bgColor} flex items-center justify-center shadow-lg`,children:n.jsx("span",{children:a.emoji})}),r&&n.jsx("div",{className:"absolute -bottom-1 -right-1 bg-yellow-500 text-black text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center border-2 border-base-bg",children:e.level})]}),s&&n.jsxs("div",{children:[n.jsx("div",{className:"font-bold text-sm",children:e.name}),n.jsx("div",{className:"text-xs text-base-muted",children:a.name})]})]})}function Lx({current:e,required:t,level:r,animate:s=!0}){const[a,i]=d.useState(0),o=e/t*100;return d.useEffect(()=>{if(s){const l=setTimeout(()=>{i(o)},100);return()=>clearTimeout(l)}else i(o)},[o,s]),n.jsxs("div",{className:"w-full",children:[n.jsxs("div",{className:"flex justify-between items-center mb-1",children:[n.jsxs("span",{className:"text-xs font-medium",children:["Level ",r]}),n.jsxs("span",{className:"text-xs text-base-muted",children:[e,"/",t," XP"]})]}),n.jsx("div",{className:"h-2 bg-black/20 rounded-full overflow-hidden",children:n.jsx("div",{className:"h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-700 ease-out relative",style:{width:`${a}%`},children:n.jsx("div",{className:"absolute inset-0 bg-white/20 animate-pulse"})})})]})}const um=[{name:"GK",slug:"general-knowledge",questions:50,icon:"🧠",color:"#FF6B6B",gradient:"from-red-500 to-pink-500"},{name:"Science",slug:"science",questions:45,icon:"🧪",color:"#4ECDC4",gradient:"from-cyan-500 to-teal-500"},{name:"Fun Facts",slug:"fun-facts",questions:30,icon:"🎉",color:"#FFD93D",gradient:"from-yellow-400 to-orange-500"},{name:"History",slug:"history",questions:42,icon:"🏺",color:"#A8E6CF",gradient:"from-green-400 to-emerald-500"},{name:"AI & Tech",slug:"artificial-intelligence",questions:28,icon:"🤖",color:"#C7B8FF",gradient:"from-purple-400 to-indigo-500"},{name:"More",slug:"more",questions:0,icon:"✨",color:"#FF8CC3",gradient:"from-pink-400 to-rose-500"}],fm=[{name:"Geography",slug:"geography",questions:38,icon:"🗺️",color:"#FACC15",gradient:"from-yellow-400 to-amber-500"},{name:"Computer",slug:"computer",questions:34,icon:"💻",color:"#3B82F6",gradient:"from-blue-400 to-blue-600"},{name:"Aptitude",slug:"aptitude",questions:36,icon:"📐",color:"#EC4899",gradient:"from-pink-500 to-rose-500"},{name:"Iconic Figures",slug:"iconic-figures",questions:26,icon:"🌟",color:"#8B5CF6",gradient:"from-purple-500 to-violet-600"}],mm=[...um.filter(e=>e.slug!=="more"),...fm];function Ix({onClick:e}){return n.jsxs("div",{className:"relative overflow-hidden rounded-3xl p-8 mb-6 cursor-pointer transform transition-all hover:scale-[1.02]",style:{background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",boxShadow:"0 10px 40px rgba(102, 126, 234, 0.3)",animation:"pulse 3s infinite"},onClick:e,children:[n.jsx("div",{className:"absolute top-[-50px] right-[-50px] w-[200px] h-[200px] rounded-full bg-white/10",style:{animation:"float 4s ease-in-out infinite"}}),n.jsx("div",{className:"absolute bottom-[-30px] left-[-30px] w-[150px] h-[150px] rounded-full bg-white/10",style:{animation:"float 4s ease-in-out infinite reverse"}}),n.jsx("h2",{className:"text-3xl font-bold mb-2",children:"🎰 Spin & Win"}),n.jsx("p",{className:"text-base opacity-90 mb-4",children:"Test your luck, win amazing prizes!"}),n.jsx("div",{className:"inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium",style:{background:"linear-gradient(90deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0.3) 100%)",backgroundSize:"200% auto",animation:"shimmer 2s linear infinite"},children:"Play Now →"})]})}function Mx({actions:e}){return n.jsx("div",{className:"grid grid-cols-4 gap-3 mb-8",children:e.map((t,r)=>n.jsxs("button",{onClick:t.action,className:`${t.color} aspect-square rounded-2xl flex flex-col items-center justify-center gap-1 transform transition-all hover:scale-105`,children:[n.jsx("div",{className:"text-2xl",children:t.icon}),n.jsx("div",{className:"text-[10px] font-medium text-white",children:t.label})]},r))})}function Dx({categories:e,onCategorySelect:t}){return n.jsxs("div",{className:"mb-6",children:[n.jsx("h3",{className:"text-lg font-bold mb-4",children:"Choose Your Adventure"}),n.jsx("div",{className:"grid grid-cols-3 gap-3",children:e.map(r=>n.jsxs("button",{onClick:()=>t(r),className:`bg-gradient-to-br ${r.gradient} aspect-square rounded-2xl p-4 flex flex-col items-center justify-center gap-2 transform transition-all hover:scale-105 hover:shadow-lg relative`,children:[n.jsx("div",{className:"text-3xl",children:r.icon}),n.jsx("div",{className:"text-xs font-bold text-white text-center",children:r.name}),r.questions>0&&n.jsxs("div",{className:"text-[10px] bg-white/20 px-2 py-0.5 rounded-full",children:[r.questions," Qs"]})]},r.name))})]})}function zx({onClick:e,isPulsing:t}){return n.jsxs("button",{onClick:e,className:`w-full rounded-2xl p-5 flex justify-between items-center transition-all ${t?"bg-green-500/20 border-2 border-green-500 animate-pulse":"bg-white/5 border border-base-border hover:bg-white/10"}`,children:[n.jsxs("div",{className:"flex items-center gap-4",children:[n.jsx("div",{className:"w-12 h-12 bg-gradient-to-br from-green-400 to-teal-500 rounded-xl grid place-items-center text-2xl",children:"📚"}),n.jsxs("div",{className:"text-left",children:[n.jsx("div",{className:"font-medium",children:"Practice Mode"}),n.jsx("div",{className:"text-xs text-base-muted",children:"No timer • No energy cost • Learn at your pace"})]})]}),n.jsx("div",{className:"text-xl",children:"→"})]})}function Fx({dailyQ:e,isFlipped:t,picked:r,onAnswer:s,dailyCompleted:a,DAILY_Q_COINS:i,DAILY_Q_XP:o}){return a?n.jsx("div",{className:"rounded-3xl bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/30 p-6 mb-6",children:n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsx("span",{className:"text-3xl",children:"✅"}),n.jsxs("div",{children:[n.jsx("h3",{className:"font-bold",children:"Daily Challenge Complete!"}),n.jsx("p",{className:"text-sm text-base-muted",children:"Come back tomorrow for a new challenge"})]})]})}):e?n.jsx("div",{className:"flip-card mb-6",children:n.jsxs("div",{className:`flip-card-inner ${t?"flipped":""}`,children:[n.jsx("div",{className:"flip-card-front",children:n.jsxs("div",{className:"rounded-3xl bg-white/5 border border-base-border p-6",children:[n.jsxs("div",{className:"flex justify-between items-center mb-4",children:[n.jsx("h3",{className:"text-lg font-bold",children:"🎯 Daily Challenge"}),n.jsxs("span",{className:"px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-xs font-medium",children:["+",i," coins +",o," XP"]})]}),n.jsx("p",{className:"text-sm mb-4 text-base-muted",children:e.prompt}),n.jsx("div",{className:"grid grid-cols-2 gap-3",children:e.options.map((l,c)=>{const u=c===e.answerIndex,f=r===c,x=r!==null;return n.jsx("button",{onClick:m=>s(c,m),disabled:r!==null,className:`p-3 rounded-xl border-2 text-sm font-medium transition-all ${x?u?"border-green-500 bg-green-500/20":f?"border-red-500 bg-red-500/20":"border-base-border bg-white/5":"border-base-border bg-white/5 hover:bg-white/10"} ${r!==null?"cursor-not-allowed":"cursor-pointer"}`,children:l},c)})})]})}),n.jsx("div",{className:"flip-card-back absolute inset-0",children:n.jsxs("div",{className:"rounded-3xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/30 p-6 h-full flex flex-col items-center justify-center",children:[n.jsx("div",{className:"text-6xl mb-4",style:{animation:"float 2s ease-in-out infinite"},children:"🎉"}),n.jsx("h3",{className:"text-2xl font-bold text-green-400 mb-2",children:"Awesome!"}),n.jsxs("p",{className:"text-sm text-base-muted text-center",children:["You've earned ",i," coins & ",o," XP!"]}),n.jsx("p",{className:"text-xs text-base-muted/70 mt-2",children:"Come back tomorrow for more"})]})})]})}):null}function Ox({show:e,onClose:t,player:r,changeAvatar:s,GAME_CONSTANTS:a}){return e?n.jsx("div",{className:"fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4",onClick:i=>{i.target===i.currentTarget&&t()},children:n.jsxs("div",{className:"bg-base-card rounded-3xl p-6 w-full max-w-md border border-base-border max-h-[80vh] overflow-y-auto",onClick:i=>i.stopPropagation(),children:[n.jsxs("div",{className:"flex justify-between items-center mb-4",children:[n.jsx("h3",{className:"text-xl font-bold",children:"Choose Your Avatar"}),n.jsx("button",{onClick:t,className:"w-8 h-8 rounded-lg bg-white/5 border border-base-border grid place-items-center hover:bg-white/10 transition",children:"✕"})]}),n.jsx("div",{className:"grid grid-cols-2 gap-4",children:a.AVATARS.map(i=>{const o=!r.unlockedAvatars.includes(i.id),l=r.avatar===i.id;return n.jsxs("button",{onClick:()=>{o||(s(i.id),t())},className:`p-4 rounded-2xl border-2 transition-all ${l?"border-brand-blue bg-brand-blue/20":o?"border-gray-600 bg-gray-800/50 opacity-50":"border-base-border bg-white/5 hover:bg-white/10"}`,disabled:o,children:[n.jsx("div",{className:`text-4xl mb-2 ${o?"grayscale":""}`,children:i.emoji}),n.jsx("div",{className:"text-sm font-medium",children:i.name}),o&&n.jsxs("div",{className:"text-xs text-gray-400 mt-1",children:["Unlock at Level ",i.unlockLevel]}),l&&n.jsx("div",{className:"text-xs text-brand-blue mt-1",children:"Current"})]},i.id)})})]})}):null}function $x({show:e,onClose:t,categories:r,onCategorySelect:s}){return e?n.jsx("div",{className:"fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4",onClick:a=>{a.target===a.currentTarget&&t()},children:n.jsxs("div",{className:"bg-base-card rounded-3xl p-6 w-full max-w-md border border-base-border",onClick:a=>a.stopPropagation(),children:[n.jsxs("div",{className:"flex justify-between items-center mb-4",children:[n.jsx("h3",{className:"text-xl font-bold",children:"More categories"}),n.jsx("button",{onClick:t,className:"w-8 h-8 rounded-lg bg-white/5 border border-base-border grid place-items-center hover:bg-white/10 transition",children:"✕"})]}),n.jsx("div",{className:"grid grid-cols-2 gap-3 mb-4",children:r.map(a=>n.jsxs("button",{onClick:()=>{t(),s(a)},className:`bg-gradient-to-br ${a.gradient} p-4 rounded-2xl flex flex-col items-center gap-2 hover:scale-105 transition-transform relative`,children:[n.jsx("div",{className:"text-3xl",children:a.icon}),n.jsx("div",{className:"text-sm font-bold text-white",children:a.name}),n.jsxs("div",{className:"text-xs text-white/80",children:[a.questions," questions"]})]},a.name))})]})}):null}function Bx({show:e,onClose:t,coins:r,onNavigateToPlay:s}){return e?n.jsx("div",{className:"fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4",onClick:a=>{a.target===a.currentTarget&&t()},children:n.jsxs("div",{className:"bg-base-card rounded-3xl p-6 w-full max-w-md border border-base-border relative overflow-hidden",onClick:a=>a.stopPropagation(),children:[n.jsx("div",{className:"absolute inset-0 opacity-10",children:n.jsx("div",{className:"magic-gradient h-full"})}),n.jsxs("div",{className:"relative",children:[n.jsxs("div",{className:"flex items-center justify-between mb-6",children:[n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsx("div",{className:"coin-3d text-5xl",style:{animation:"coinRotate 2s linear infinite, glow 2s ease-in-out infinite"},children:"🪙"}),n.jsxs("div",{children:[n.jsx("h3",{className:"text-2xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent",children:"Your Treasure"}),n.jsxs("p",{className:"text-3xl font-bold text-white mt-1",children:[r," Coins"]})]})]}),n.jsx("button",{onClick:t,className:"w-8 h-8 rounded-lg bg-white/5 border border-base-border grid place-items-center hover:bg-white/10 transition",children:"✕"})]}),n.jsxs("div",{className:"mb-6",children:[n.jsx("h4",{className:"text-sm font-medium text-base-muted mb-3",children:"Ways to Earn"}),n.jsxs("div",{className:"space-y-3",children:[n.jsx("div",{className:"p-4 rounded-xl bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 hover:scale-[1.02] transition-transform",children:n.jsxs("div",{className:"flex items-center justify-between",children:[n.jsxs("div",{children:[n.jsxs("div",{className:"font-medium flex items-center gap-2",children:[n.jsx("span",{className:"text-2xl",children:"✅"}),"Complete Quizzes"]}),n.jsx("div",{className:"text-xs text-base-muted mt-1",children:"+5 coins per correct answer"})]}),n.jsx("div",{className:"text-green-400 font-bold",children:"+5"})]})}),n.jsx("div",{className:"p-4 rounded-xl bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 hover:scale-[1.02] transition-transform",children:n.jsxs("div",{className:"flex items-center justify-between",children:[n.jsxs("div",{children:[n.jsxs("div",{className:"font-medium flex items-center gap-2",children:[n.jsx("span",{className:"text-2xl",children:"🎯"}),"Daily Challenge"]}),n.jsx("div",{className:"text-xs text-base-muted mt-1",children:"Complete daily for bonus"})]}),n.jsx("div",{className:"text-blue-400 font-bold",children:"+5"})]})}),n.jsx("div",{className:"p-4 rounded-xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 hover:scale-[1.02] transition-transform",children:n.jsxs("div",{className:"flex items-center justify-between",children:[n.jsxs("div",{children:[n.jsxs("div",{className:"font-medium flex items-center gap-2",children:[n.jsx("span",{className:"text-2xl",children:"🎰"}),"Spin & Play"]}),n.jsx("div",{className:"text-xs text-base-muted mt-1",children:"Test your luck!"})]}),n.jsx("div",{className:"text-purple-400 font-bold",children:"+50"})]})}),n.jsx("div",{className:"p-4 rounded-xl bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/20 hover:scale-[1.02] transition-transform",children:n.jsxs("div",{className:"flex items-center justify-between",children:[n.jsxs("div",{children:[n.jsxs("div",{className:"font-medium flex items-center gap-2",children:[n.jsx("span",{className:"text-2xl",children:"🏆"}),"Achievements"]}),n.jsx("div",{className:"text-xs text-base-muted mt-1",children:"Unlock special rewards"})]}),n.jsx("div",{className:"text-orange-400 font-bold",children:"+???"})]})})]})]}),n.jsxs("div",{className:"mb-6",children:[n.jsxs("div",{className:"flex justify-between text-xs text-base-muted mb-2",children:[n.jsx("span",{children:"Next reward"}),n.jsxs("span",{children:[100-r%100," coins to go"]})]}),n.jsx("div",{className:"h-2 bg-white/10 rounded-full overflow-hidden",children:n.jsx("div",{className:"h-full bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full transition-all",style:{width:`${r%100}%`}})})]}),n.jsx("button",{onClick:s,className:"w-full py-3 rounded-xl bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-bold hover:scale-[1.02] transition-transform shadow-lg",style:{boxShadow:"0 10px 30px rgba(251, 191, 36, 0.3)"},children:"Start Earning Now! 🚀"})]})]})}):null}function Ux({show:e,onClose:t,selectedCategory:r,difficulty:s,setDifficulty:a,count:i,setCount:o,timer:l,setTimer:c,onStart:u}){return!e||!r?null:n.jsx("div",{className:"fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4",onClick:f=>{f.target===f.currentTarget&&t()},children:n.jsxs("div",{className:"bg-base-card rounded-3xl p-6 w-full max-w-md border border-base-border",onClick:f=>f.stopPropagation(),children:[n.jsxs("div",{className:"flex justify-between items-center mb-4",children:[n.jsx("h3",{className:"text-xl font-bold",children:"Quiz Mode"}),n.jsx("button",{onClick:t,className:"w-8 h-8 rounded-lg bg-white/5 border border-base-border grid place-items-center hover:bg-white/10 transition",children:"✕"})]}),n.jsx("div",{className:"mb-4 p-3 rounded-xl bg-blue-500/10 border border-blue-500/30",children:n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsx("div",{className:"text-2xl",children:r.icon}),n.jsxs("div",{children:[n.jsxs("div",{className:"font-medium",children:["Category: ",r.name]}),n.jsxs("div",{className:"text-xs text-base-muted",children:[r.questions," questions available"]})]})]})}),n.jsxs("div",{className:"mb-4",children:[n.jsx("label",{className:"text-sm text-base-muted mb-2 block",children:"Difficulty"}),n.jsx("div",{className:"grid grid-cols-3 gap-2",children:["easy","medium","hard"].map(f=>n.jsx("button",{onClick:()=>a(f),className:`py-2 rounded-xl border ${s===f?"bg-brand-blue/30 border-brand-blue":"bg-white/5 border-base-border"}`,children:f.charAt(0).toUpperCase()+f.slice(1)},f))})]}),n.jsxs("div",{className:"mb-4",children:[n.jsx("label",{className:"text-sm text-base-muted mb-2 block",children:"Questions"}),n.jsx("div",{className:"grid grid-cols-4 gap-2",children:[5,10,20,30].map(f=>n.jsx("button",{onClick:()=>o(f),className:`py-2 rounded-xl border ${i===f?"bg-brand-blue/30 border-brand-blue":"bg-white/5 border-base-border"}`,children:f},f))})]}),n.jsxs("div",{className:"mb-6",children:[n.jsx("label",{className:"text-sm text-base-muted mb-2 block",children:"Timer (seconds per question)"}),n.jsx("input",{type:"number",value:l,onChange:f=>c(Number(f.target.value)||45),min:10,max:120,className:"w-full px-4 py-2 rounded-xl bg-white/5 border border-base-border"})]}),n.jsxs("div",{className:"flex gap-3",children:[n.jsx("button",{onClick:t,className:"flex-1 py-3 rounded-xl border border-base-border bg-white/5",children:"Cancel"}),n.jsx("button",{onClick:u,className:"flex-1 py-3 rounded-xl bg-gradient-to-r from-brand-blue to-brand-purple text-white font-medium",children:"Start Quiz"})]})]})})}function qx({show:e,onClose:t,allCategories:r,category:s,setCategory:a,difficulty:i,setDifficulty:o,count:l,setCount:c,onStart:u}){return e?n.jsx("div",{className:"fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4",onClick:f=>{f.target===f.currentTarget&&t()},children:n.jsxs("div",{className:"bg-base-card rounded-3xl p-6 w-full max-w-md border border-base-border max-h-[90vh] overflow-y-auto",onClick:f=>f.stopPropagation(),children:[n.jsxs("div",{className:"flex justify-between items-center mb-4",children:[n.jsx("h3",{className:"text-xl font-bold",children:"Practice Mode"}),n.jsx("button",{onClick:t,className:"w-8 h-8 rounded-lg bg-white/5 border border-base-border grid place-items-center hover:bg-white/10 transition",children:"✕"})]}),n.jsxs("div",{className:"mb-4",children:[n.jsx("label",{className:"text-sm text-base-muted mb-2 block",children:"Category"}),n.jsx("div",{className:"grid grid-cols-3 gap-2 max-h-[200px] overflow-y-auto",children:r.map(f=>n.jsxs("button",{onClick:()=>a(f.slug),className:`p-3 rounded-xl border flex flex-col items-center gap-1 ${s===f.slug?"bg-brand-blue/30 border-brand-blue":"bg-white/5 border-base-border"}`,children:[n.jsx("div",{className:"text-xl",children:f.icon}),n.jsx("div",{className:"text-[10px] text-center",children:f.name})]},f.slug))})]}),n.jsxs("div",{className:"mb-4",children:[n.jsx("label",{className:"text-sm text-base-muted mb-2 block",children:"Difficulty"}),n.jsx("div",{className:"grid grid-cols-3 gap-2",children:["easy","medium","hard"].map(f=>n.jsx("button",{onClick:()=>o(f),className:`py-2 rounded-xl border ${i===f?"bg-brand-blue/30 border-brand-blue":"bg-white/5 border-base-border"}`,children:f.charAt(0).toUpperCase()+f.slice(1)},f))})]}),n.jsxs("div",{className:"mb-6",children:[n.jsx("label",{className:"text-sm text-base-muted mb-2 block",children:"Questions"}),n.jsx("div",{className:"grid grid-cols-4 gap-2",children:[5,10,20,30].map(f=>n.jsx("button",{onClick:()=>c(f),className:`py-2 rounded-xl border ${l===f?"bg-brand-blue/30 border-brand-blue":"bg-white/5 border-base-border"}`,children:f},f))})]}),n.jsxs("div",{className:"flex gap-3",children:[n.jsx("button",{onClick:t,className:"flex-1 py-3 rounded-xl border border-base-border bg-white/5",children:"Cancel"}),n.jsx("button",{onClick:u,className:"flex-1 py-3 rounded-xl bg-gradient-to-r from-brand-blue to-brand-purple text-white font-medium",children:"Start Practice"})]})]})}):null}const vd=(e=new Date)=>e.toLocaleDateString("en-CA"),yd=(e,t=null)=>{try{const r=localStorage.getItem(e);return r?JSON.parse(r):t}catch{return t}},Yx=(e,t)=>localStorage.setItem(e,JSON.stringify(t));function bd(){const e=wt(),{player:t,addXP:r,addCoins:s,levelProgress:a,useEnergy:i,changeAvatar:o}=wn(),[l]=zt("/sounds/correct.mp3",{volume:.6}),[c]=zt("/sounds/wrong.mp3",{volume:.6}),[u]=zt("/sounds/coin.mp3",{volume:.75}),[f]=zt("/sounds/levelup.mp3",{volume:.8}),x=d.useRef(t.level),m=d.useRef(null);d.useEffect(()=>{const me=()=>{};return window.addEventListener("focus",me),()=>window.removeEventListener("focus",me)},[]),d.useEffect(()=>{t.level>x.current&&(f==null||f(),x.current=t.level)},[t.level,f]);const[y,p]=d.useState(!1),[j,k]=d.useState(null),[v,h]=d.useState(!1),[g,E]=d.useState("medium"),[P,z]=d.useState(10),[S,b]=d.useState(45),[w,N]=d.useState(!1),[R,F]=d.useState(!1),[Q,ee]=d.useState(null),[q,B]=d.useState(null),[L,C]=d.useState(!1),[T,_]=d.useState(!1),[A,M]=d.useState(null),D=10,X=5,[$,J]=d.useState(!1),[ie,I]=d.useState(!1),[O,W]=d.useState("general-knowledge"),[V,te]=d.useState("medium"),[K,Y]=d.useState(10),[ne,U]=d.useState(()=>yd("dq_daily_log",{})[vd()]===!0);d.useEffect(()=>{const me=sessionStorage.getItem("homeScrollPosition");me&&window.scrollTo(0,parseInt(me));const Se=()=>{sessionStorage.setItem("homeScrollPosition",window.scrollY.toString())};return window.addEventListener("scroll",Se),()=>window.removeEventListener("scroll",Se)},[]),d.useEffect(()=>{if(ne)return;(async()=>{var Se;try{const Re=await fetch("/data/quiz_questions_bank.csv").then(Ce=>Ce.text()),{data:Te}=dr.parse(Re,{header:!0,skipEmptyLines:!0});if(!Te.length)throw new Error("empty");const he=Te[Math.floor(Math.random()*Te.length)],we=[he.option1,he.option2,he.option3,he.option4].filter(Boolean);ee({category:he.category||"General",prompt:he.question,options:we,answerIndex:["A","B","C","D"].indexOf((Se=he.answer)==null?void 0:Se.toUpperCase())||0})}catch{ee({category:"Science",prompt:"Which planet is known as the Red Planet?",options:["Earth","Mars","Jupiter","Venus"],answerIndex:1})}})()},[ne]);const H=(me,Se)=>{if(q!==null)return;B(me);const Re=me===Q.answerIndex;if(Re){if(l(),Se!=null&&Se.currentTarget&&m.current){const Te=Se.currentTarget.getBoundingClientRect();u(),M({startRect:Te,count:10,amount:X})}}else c();setTimeout(()=>{if(_(!0),C(!0),Re){const Te=vd();Yx("dq_daily_log",{...yd("dq_daily_log",{}),[Te]:!0}),U(!0);const he=Number(localStorage.getItem("dq_streak")||0);localStorage.setItem("dq_streak",String(he+1))}},600)},Z=me=>{if(me.slug==="more"){p(!0);return}k(me),h(!0)},ae=()=>{console.log("Starting quiz with energy:",t.energy),console.log("Category:",j.slug),e(`/quiz/${j.slug}`,{state:{mode:"quiz",difficulty:g,count:P,timer:{type:"per_q",seconds:S},source:"adventure"}}),h(!1)},ke=()=>{console.log("Starting practice, category:",O),e(`/quiz/${O}`,{state:{mode:"practice",difficulty:V,count:K,timer:{type:"off",seconds:0}}}),I(!1)},fe=[{icon:"🎯",label:"Quests",color:"bg-gradient-to-br from-orange-500 to-pink-500",action:()=>e("/profile/quests")},{icon:"🔥",label:`${t.bestCombo} Best`,color:"bg-gradient-to-br from-red-500 to-orange-500",action:()=>e("/profile/streaks")},{icon:"🏆",label:"Achieve",color:"bg-gradient-to-br from-blue-500 to-purple-500",action:()=>e("/profile/achievements")},{icon:"🎁",label:"Rewards",color:"bg-gradient-to-br from-green-500 to-teal-500",action:()=>e("/profile/rewards")}];return n.jsxs("div",{className:"min-h-screen bg-base-bg text-base-text",children:[n.jsx("div",{className:"fixed inset-0 -z-10 pointer-events-none",style:{background:"linear-gradient(to bottom, #0B0F1A, #111827)"}}),n.jsxs("div",{className:"relative z-10 px-4 pt-10 pb-24",children:[n.jsx("style",{jsx:!0,children:`
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
        `}),A&&n.jsx(Kl,{startRect:A.startRect,targetRef:m,count:A.count,onDone:()=>{$||(r(D),s(A.amount),J(!0)),M(null)}}),n.jsxs("div",{className:"mb-8",children:[n.jsxs("div",{className:"flex justify-between items-start mb-4",children:[n.jsx("div",{className:"cursor-pointer hover:scale-105 transition-transform",onClick:()=>F(!0),children:n.jsx(Ax,{player:t,size:"small",showLevel:!0,showName:!0})}),n.jsx("div",{className:"flex gap-2",children:n.jsxs("button",{ref:m,onClick:()=>N(!0),className:"px-3 py-1.5 rounded-xl bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/30 flex items-center gap-2 hover:from-yellow-500/20 hover:to-orange-500/20 transition",children:[n.jsx("span",{className:"text-lg",children:"🪙"}),n.jsx("span",{className:"font-bold",children:t.coins})]})})]}),n.jsx(Lx,{current:a.current,required:a.required,level:t.level,animate:!0})]}),n.jsx(Ix,{onClick:()=>e("/play")}),n.jsx(Mx,{actions:fe}),n.jsx(Fx,{dailyQ:Q,isFlipped:T,picked:q,onAnswer:H,dailyCompleted:ne,DAILY_Q_COINS:X,DAILY_Q_XP:D}),n.jsx(Dx,{categories:um,onCategorySelect:Z}),n.jsx(zx,{onClick:()=>I(!0),isPulsing:t.energy<10}),n.jsx(Ox,{show:R,onClose:()=>F(!1),player:t,changeAvatar:o,GAME_CONSTANTS:ft}),n.jsx(Ux,{show:v,onClose:()=>h(!1),selectedCategory:j,difficulty:g,setDifficulty:E,count:P,setCount:z,timer:S,setTimer:b,onStart:ae}),n.jsx(qx,{show:ie,onClose:()=>I(!1),allCategories:mm,category:O,setCategory:W,difficulty:V,setDifficulty:te,count:K,setCount:Y,onStart:ke}),n.jsx($x,{show:y,onClose:()=>p(!1),categories:fm,onCategorySelect:Z}),n.jsx(Bx,{show:w,onClose:()=>N(!1),coins:t.coins,onNavigateToPlay:()=>{N(!1),e("/play")}})]})]})}const Zt={COINS:"qp_coins",XP:"qp_xp",LEVEL:"qp_level",OWNED_CHARACTERS:"owned_characters",SOUND:"play_sound_on"},en={get:(e,t=null)=>{try{const r=localStorage.getItem(e);return r?JSON.parse(r):t}catch{return t}},set:(e,t)=>{try{localStorage.setItem(e,JSON.stringify(t))}catch{}}};function Jl(){const[e,t]=d.useState(()=>en.get(Zt.COINS,0)),[r,s]=d.useState(()=>en.get(Zt.XP,0)),[a,i]=d.useState(()=>en.get(Zt.LEVEL,1)),[o,l]=d.useState(()=>en.get(Zt.OWNED_CHARACTERS,[])),[c,u]=d.useState(()=>en.get(Zt.SOUND,!0));return d.useEffect(()=>en.set(Zt.COINS,e),[e]),d.useEffect(()=>en.set(Zt.XP,r),[r]),d.useEffect(()=>en.set(Zt.LEVEL,a),[a]),d.useEffect(()=>en.set(Zt.OWNED_CHARACTERS,o),[o]),d.useEffect(()=>en.set(Zt.SOUND,c),[c]),{coins:e,xp:r,level:a,ownedCharacters:o,soundOn:c,addCoins:p=>t(j=>j+p),addXp:p=>s(j=>j+p),unlockCharacter:p=>{l(j=>[...new Set([...j,p])])},setSoundOn:u,checkLevelUp:()=>{const p=100*a*(a-1);return r>=p?(i(j=>j+1),!0):!1},nextLevelThreshold:100*a*(a-1),xpProgress:r/(100*a*(a-1))}}const Qx=[{name:"General Knowledge",questions:50,icon:"🧠",color:"#7C3AED"},{name:"Artificial Intelligence",questions:28,icon:"🤖",color:"#10B981"},{name:"Fun facts",questions:30,icon:"🎉",color:"#EF4444"},{name:"Science",questions:45,icon:"🧪",color:"#F59E0B"},{name:"History",questions:42,icon:"🏺",color:"#2563EB"},{name:"Geography",questions:38,icon:"🗺️",color:"#FACC15"}],nn=Qx.slice(0,6),Jn=360/nn.length,hm={"general-knowledge":"TINA","artificial-intelligence":"ALBERT","fun-facts":"BONZO",science:"POP",history:"TITO",geography:"HECTOR"},Nn={FULL_TURNS:6,DURATION:2800,OVERSHOOT:12,SETTLE_DURATION:350},nr=e=>e.toLowerCase().replace(/[^\w\s-]/g,"").replace(/\s+/g,"-"),wd=e=>(e%360+360)%360,Zl=e=>{try{navigator.vibrate&&navigator.vibrate(e)}catch{}},_r=(e,t=.7)=>{try{const r=new Audio(e);r.volume=t,r.play()}catch{}};function Hx({run:e,coins:t,xp:r,level:s,ownedCharacters:a,onSpin:i,onBack:o,spinning:l,angle:c,transition:u,result:f,showCallout:x,glowColor:m,soundOn:y,setSoundOn:p,showSparkle:j,pulseIdx:k,nextProgressIdx:v,pendingProgressIdx:h,coinBurstTick:g,lastAnswerWasCorrect:E}){const P=100*s*(s-1),[z,S]=d.useState(!1),b=d.useRef(0),w=d.useRef(null),N=d.useRef(null),[R,F]=d.useState({dx:110,dy:-260}),[Q,ee]=d.useState(!1);return d.useEffect(()=>(document.body.classList.add("hide-bottom-nav"),()=>{document.body.classList.remove("hide-bottom-nav")}),[]),d.useEffect(()=>{if(h==null)return;S(!1);const q=setTimeout(()=>S(!0),30);return()=>clearTimeout(q)},[h]),d.useEffect(()=>{var B,L,C,T;if(!g||!E||g===b.current)return;b.current=g;try{const _=(L=(B=N==null?void 0:N.current)==null?void 0:B.getBoundingClientRect)==null?void 0:L.call(B),A=(T=(C=w==null?void 0:w.current)==null?void 0:C.getBoundingClientRect)==null?void 0:T.call(C);if(_&&A){const M=_.left+_.width/2,D=_.top+_.height/2,X=A.left+A.width/2,$=A.top+A.height/2;F({dx:X-M,dy:$-D})}}catch{}y&&_r("/sounds/coin.mp3",.7),ee(!0);const q=setTimeout(()=>ee(!1),700);return()=>clearTimeout(q)},[g,y,E]),n.jsx("div",{className:"fixed inset-0 bg-base-bg text-base-text overflow-hidden",children:n.jsxs("div",{className:"h-full overflow-y-auto mx-auto max-w-md px-5 pt-[calc(env(safe-area-inset-top)+3rem)] pb-[calc(env(safe-area-inset-bottom)+5.25rem)]",children:[n.jsxs("header",{className:"flex items-center justify-between mb-8",children:[n.jsx("button",{onClick:o,className:"h-10 w-10 rounded-full border border-base-border grid place-items-center bg-white/5 hover:bg-white/10 transition translate-y-[4px]",children:"←"}),n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsxs("button",{className:"px-3 py-1 rounded-2xl bg-white/5 border border-base-border text-left translate-y-[4px]",children:[n.jsxs("div",{className:"text-[11px]",children:["Lvl ",s," • ",r,"/",P]}),n.jsx("div",{className:"mt-1 h-1 w-full bg-white/10 rounded",children:n.jsx("div",{className:"h-1 bg-brand-blue rounded",style:{width:`${Math.min(r/P,1)*100}%`}})})]}),n.jsxs("button",{ref:w,className:"px-3 py-1 rounded-2xl bg-white/5 border border-base-border translate-y-[4px]",children:["🪙 ",t]})]}),n.jsx("button",{onClick:()=>p(!y),className:"h-10 w-10 rounded-full border border-base-border grid place-items-center bg-white/5 hover:bg-white/10 transition translate-y-[4px]",children:n.jsx("span",{className:"text-lg",children:y?"🔊":"🔇"})})]}),a.length>0&&n.jsx("div",{className:"flex justify-center mb-6",children:n.jsx("div",{className:"flex gap-2 px-4 py-2 bg-white/10 rounded-2xl backdrop-blur border border-base-border",children:a.map(q=>{const B=nn.find(C=>nr(C.name)===q),L=hm[q];return n.jsxs("div",{className:"flex flex-col items-center",children:[n.jsx("div",{className:"w-8 h-8 rounded-full bg-white/20 flex items-center justify-center border border-white/30",children:n.jsx("span",{className:"text-sm",children:B==null?void 0:B.icon})}),n.jsx("span",{className:"text-[10px] text-base-muted mt-1",children:L})]},q)})})}),n.jsx("div",{className:"flex justify-center mt-12 sm:mt-16 mb-6",children:n.jsxs("div",{className:"w-80 max-w-full",children:[n.jsx("style",{children:`
              @keyframes qp_sweep { from { transform: translateX(0); } to { transform: translateX(100%); } }
            `}),n.jsx("div",{className:"relative grid grid-cols-3 gap-1 h-3 rounded-full overflow-hidden bg-white/10 border border-white/15",children:[0,1,2].map(q=>{const B=["#FF9800","#FFC107","#cadd75ff"],L=!!e.progress[q];return n.jsxs("div",{className:"relative h-full bg-white/10",children:[n.jsx("div",{className:"absolute inset-y-0 left-0 rounded-[6px]",style:{width:L?q===h?z?"100%":"0%":v===q&&h==null?"0%":"100%":"0%",backgroundColor:B[q],transition:q===h?"width 1200ms ease-out":"none"}}),k===q&&n.jsx("span",{className:"absolute inset-y-0 left-0 w-full overflow-hidden pointer-events-none",children:n.jsx("span",{className:"absolute inset-y-0 left-0 w-1 rounded bg-white/80",style:{animation:"qp_sweep 1200ms ease-out forwards"}})}),j===q&&n.jsx("span",{className:"absolute right-[-2px] top-1/2 -translate-y-1/2 text-xs select-none",children:"✨"})]},q)})},e.qIndex)]})}),n.jsx("section",{className:"flex flex-col items-center mt-28 sm:mt-32 mb-10",children:n.jsxs("div",{ref:N,className:"relative w-96 h-96 rounded-full select-none",children:[m&&n.jsx("div",{className:"pointer-events-none absolute -inset-4 rounded-full",style:{boxShadow:`0 0 0 8px ${m}40, 0 0 40px 12px ${m}60`}}),n.jsx("div",{className:"absolute inset-0 rounded-full border-4 border-white/20 shadow-2xl overflow-hidden will-change-transform bg-base-card",style:{transform:`rotate(${c}deg)`,transition:u},children:n.jsxs("svg",{width:"100%",height:"100%",viewBox:"0 0 100 100",className:"block",children:[nn.map((q,B)=>{const L=B*Jn,C=L+Jn,T=Jn>180?1:0,_=Math.PI*L/180,A=Math.PI*C/180,M=50+45*Math.cos(_),D=50-45*Math.sin(_),X=50+45*Math.cos(A),$=50-45*Math.sin(A),J=L+Jn/2,ie=28,I=50+ie*Math.cos(J*Math.PI/180),O=50-ie*Math.sin(J*Math.PI/180);return n.jsxs("g",{children:[n.jsx("path",{d:`M50,50 L${M},${D} A45,45 0 ${T} 0 ${X},${$} Z`,fill:q.color,stroke:"rgba(255,255,255,0.3)",strokeWidth:"0.5"}),n.jsx("text",{x:I,y:O,fill:"white",fontSize:"8",dominantBaseline:"middle",textAnchor:"middle",className:"font-bold",children:q.icon})]},B)}),n.jsx("circle",{cx:"50",cy:"50",r:"12",fill:"white",stroke:"#ddd",strokeWidth:"1"})]})}),n.jsx("button",{onClick:i,disabled:l,className:`absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                      w-24 h-24 rounded-full bg-white text-black font-black text-lg shadow-lg transition-all ${l?"opacity-60 cursor-not-allowed scale-95":"hover:scale-105 active:scale-95"}`,children:"SPIN"}),n.jsx("div",{className:"absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-2 z-20",children:n.jsx("div",{className:"w-6 h-8 bg-white rounded-lg shadow-md flex items-start justify-center pt-1",children:n.jsx("div",{className:"w-0 h-0 border-l-[6px] border-r-[6px] border-b-[8px] border-l-transparent border-r-transparent border-b-gray-600"})})}),x&&f&&n.jsx("div",{className:"absolute left-1/2 -translate-x-1/2 -top-16 z-30",children:n.jsxs("div",{className:"px-4 py-2 rounded-2xl bg-base-card border border-base-border shadow-lg font-semibold",children:[n.jsx("span",{className:"mr-2",children:f.cat.icon}),f.cat.name]})}),Q&&n.jsxs(n.Fragment,{children:[n.jsx("style",{children:`
                    @keyframes coinFly {
                      0%   { transform: translate(-50%, -50%) scale(0.9); opacity: 1; }
                      100% { transform: translate(var(--coin-dx), var(--coin-dy)) scale(0.4); opacity: 0; }
                    }
                `}),[0,1,2].map(q=>n.jsx("div",{className:"pointer-events-none absolute z-30 top-1/2 left-1/2",style:{animation:`coinFly 600ms ease-out ${q*80}ms forwards`,"--coin-dx":`${R.dx}px`,"--coin-dy":`${R.dy}px`},children:n.jsx("div",{className:"w-6 h-6 rounded-full grid place-items-center bg-yellow-400 text-black font-bold",children:"🪙"})},q))]})]})}),n.jsx("div",{className:"text-center",children:n.jsx("button",{disabled:!0,className:"text-base-muted underline opacity-60 cursor-not-allowed text-sm",children:"Party Spin (pass & play)"})})]})})}var Ta={linear:function(e,t,r,s){var a=r-t;return a*e/s+t},easeInQuad:function(e,t,r,s){var a=r-t;return a*(e/=s)*e+t},easeOutQuad:function(e,t,r,s){var a=r-t;return-a*(e/=s)*(e-2)+t},easeInOutQuad:function(e,t,r,s){var a=r-t;return(e/=s/2)<1?a/2*e*e+t:-a/2*(--e*(e-2)-1)+t},easeInCubic:function(e,t,r,s){var a=r-t;return a*(e/=s)*e*e+t},easeOutCubic:function(e,t,r,s){var a=r-t;return a*((e=e/s-1)*e*e+1)+t},easeInOutCubic:function(e,t,r,s){var a=r-t;return(e/=s/2)<1?a/2*e*e*e+t:a/2*((e-=2)*e*e+2)+t},easeInQuart:function(e,t,r,s){var a=r-t;return a*(e/=s)*e*e*e+t},easeOutQuart:function(e,t,r,s){var a=r-t;return-a*((e=e/s-1)*e*e*e-1)+t},easeInOutQuart:function(e,t,r,s){var a=r-t;return(e/=s/2)<1?a/2*e*e*e*e+t:-a/2*((e-=2)*e*e*e-2)+t},easeInQuint:function(e,t,r,s){var a=r-t;return a*(e/=s)*e*e*e*e+t},easeOutQuint:function(e,t,r,s){var a=r-t;return a*((e=e/s-1)*e*e*e*e+1)+t},easeInOutQuint:function(e,t,r,s){var a=r-t;return(e/=s/2)<1?a/2*e*e*e*e*e+t:a/2*((e-=2)*e*e*e*e+2)+t},easeInSine:function(e,t,r,s){var a=r-t;return-a*Math.cos(e/s*(Math.PI/2))+a+t},easeOutSine:function(e,t,r,s){var a=r-t;return a*Math.sin(e/s*(Math.PI/2))+t},easeInOutSine:function(e,t,r,s){var a=r-t;return-a/2*(Math.cos(Math.PI*e/s)-1)+t},easeInExpo:function(e,t,r,s){var a=r-t;return e==0?t:a*Math.pow(2,10*(e/s-1))+t},easeOutExpo:function(e,t,r,s){var a=r-t;return e==s?t+a:a*(-Math.pow(2,-10*e/s)+1)+t},easeInOutExpo:function(e,t,r,s){var a=r-t;return e===0?t:e===s?t+a:(e/=s/2)<1?a/2*Math.pow(2,10*(e-1))+t:a/2*(-Math.pow(2,-10*--e)+2)+t},easeInCirc:function(e,t,r,s){var a=r-t;return-a*(Math.sqrt(1-(e/=s)*e)-1)+t},easeOutCirc:function(e,t,r,s){var a=r-t;return a*Math.sqrt(1-(e=e/s-1)*e)+t},easeInOutCirc:function(e,t,r,s){var a=r-t;return(e/=s/2)<1?-a/2*(Math.sqrt(1-e*e)-1)+t:a/2*(Math.sqrt(1-(e-=2)*e)+1)+t},easeInElastic:function(e,t,r,s){var a=r-t,i,o,l;return l=1.70158,o=0,i=a,e===0?t:(e/=s)===1?t+a:(o||(o=s*.3),i<Math.abs(a)?(i=a,l=o/4):l=o/(2*Math.PI)*Math.asin(a/i),-(i*Math.pow(2,10*(e-=1))*Math.sin((e*s-l)*(2*Math.PI)/o))+t)},easeOutElastic:function(e,t,r,s){var a=r-t,i,o,l;return l=1.70158,o=0,i=a,e===0?t:(e/=s)===1?t+a:(o||(o=s*.3),i<Math.abs(a)?(i=a,l=o/4):l=o/(2*Math.PI)*Math.asin(a/i),i*Math.pow(2,-10*e)*Math.sin((e*s-l)*(2*Math.PI)/o)+a+t)},easeInOutElastic:function(e,t,r,s){var a=r-t,i,o,l;return l=1.70158,o=0,i=a,e===0?t:(e/=s/2)===2?t+a:(o||(o=s*(.3*1.5)),i<Math.abs(a)?(i=a,l=o/4):l=o/(2*Math.PI)*Math.asin(a/i),e<1?-.5*(i*Math.pow(2,10*(e-=1))*Math.sin((e*s-l)*(2*Math.PI)/o))+t:i*Math.pow(2,-10*(e-=1))*Math.sin((e*s-l)*(2*Math.PI)/o)*.5+a+t)},easeInBack:function(e,t,r,s,a){var i=r-t;return a===void 0&&(a=1.70158),i*(e/=s)*e*((a+1)*e-a)+t},easeOutBack:function(e,t,r,s,a){var i=r-t;return a===void 0&&(a=1.70158),i*((e=e/s-1)*e*((a+1)*e+a)+1)+t},easeInOutBack:function(e,t,r,s,a){var i=r-t;return a===void 0&&(a=1.70158),(e/=s/2)<1?i/2*(e*e*(((a*=1.525)+1)*e-a))+t:i/2*((e-=2)*e*(((a*=1.525)+1)*e+a)+2)+t},easeInBounce:function(e,t,r,s){var a=r-t,i;return i=Ta.easeOutBounce(s-e,0,a,s),a-i+t},easeOutBounce:function(e,t,r,s){var a=r-t;return(e/=s)<1/2.75?a*(7.5625*e*e)+t:e<2/2.75?a*(7.5625*(e-=1.5/2.75)*e+.75)+t:e<2.5/2.75?a*(7.5625*(e-=2.25/2.75)*e+.9375)+t:a*(7.5625*(e-=2.625/2.75)*e+.984375)+t},easeInOutBounce:function(e,t,r,s){var a=r-t,i;return e<s/2?(i=Ta.easeInBounce(e*2,0,a,s),i*.5+t):(i=Ta.easeOutBounce(e*2-s,0,a,s),i*.5+a*.5+t)}},Wx=Ta;function Gx(e){return e*Math.PI/180}function Et(e,t){return e+Math.random()*(t-e)}function Vx(e,t){return Math.floor(e+Math.random()*(t-e+1))}var vs;(function(e){e[e.Circle=0]="Circle",e[e.Square=1]="Square",e[e.Strip=2]="Strip"})(vs||(vs={}));var Rn;(function(e){e[e.Positive=1]="Positive",e[e.Negative=-1]="Negative"})(Rn||(Rn={}));const Xx=1e3/60;class Kx{constructor(t,r,s,a){this.getOptions=r;const{colors:i,initialVelocityX:o,initialVelocityY:l}=this.getOptions();this.context=t,this.x=s,this.y=a,this.w=Et(5,20),this.h=Et(5,20),this.radius=Et(5,10),this.vx=typeof o=="number"?Et(-o,o):Et(o.min,o.max),this.vy=typeof l=="number"?Et(-l,0):Et(l.min,l.max),this.shape=Vx(0,2),this.angle=Gx(Et(0,360)),this.angularSpin=Et(-.2,.2),this.color=i[Math.floor(Math.random()*i.length)],this.rotateY=Et(0,1),this.rotationDirection=Et(0,1)?Rn.Positive:Rn.Negative}update(t){const{gravity:r,wind:s,friction:a,opacity:i,drawShape:o}=this.getOptions(),l=t/Xx;this.x+=this.vx*l,this.y+=this.vy*l,this.vy+=r*l,this.vx+=s*l,this.vx*=a**l,this.vy*=a**l,this.rotateY>=1&&this.rotationDirection===Rn.Positive?this.rotationDirection=Rn.Negative:this.rotateY<=-1&&this.rotationDirection===Rn.Negative&&(this.rotationDirection=Rn.Positive);const c=.1*this.rotationDirection*l;if(this.rotateY+=c,this.angle+=this.angularSpin,this.context.save(),this.context.translate(this.x,this.y),this.context.rotate(this.angle),this.context.scale(1,this.rotateY),this.context.rotate(this.angle),this.context.beginPath(),this.context.fillStyle=this.color,this.context.strokeStyle=this.color,this.context.globalAlpha=i,this.context.lineCap="round",this.context.lineWidth=2,o&&typeof o=="function")o.call(this,this.context);else switch(this.shape){case vs.Circle:{this.context.beginPath(),this.context.arc(0,0,this.radius,0,2*Math.PI),this.context.fill();break}case vs.Square:{this.context.fillRect(-this.w/2,-this.h/2,this.w,this.h);break}case vs.Strip:{this.context.fillRect(-this.w/6,-this.h/2,this.w/3,this.h);break}}this.context.closePath(),this.context.restore()}}class Jx{constructor(t,r){this.x=0,this.y=0,this.w=0,this.h=0,this.lastNumberOfPieces=0,this.tweenProgress=0,this.tweenFrom=0,this.particles=[],this.particlesGenerated=0,this.removeParticleAt=a=>{this.particles.splice(a,1)},this.getParticle=()=>{const a=Et(this.x,this.w+this.x),i=Et(this.y,this.h+this.y);return new Kx(this.context,this.getOptions,a,i)},this.animate=a=>{const{canvas:i,context:o,particlesGenerated:l,lastNumberOfPieces:c}=this,{run:u,recycle:f,numberOfPieces:x,debug:m,tweenFunction:y,tweenDuration:p}=this.getOptions();if(!u)return!1;const j=this.particles.length,k=f?j:l;if(k<x){c!==x&&(this.tweenProgress=0,this.tweenFrom=k,this.lastNumberOfPieces=x),this.tweenProgress=Math.min(p,Math.max(0,this.tweenProgress+a));const v=y(this.tweenProgress,this.tweenFrom,x,p),h=Math.round(v-k);for(let g=0;g<h;g++)this.particles.push(this.getParticle());this.particlesGenerated+=h}m&&(o.font="12px sans-serif",o.fillStyle="#333",o.textAlign="right",o.fillText(`Particles: ${j}`,i.width-10,i.height-20));for(let v=this.particles.length-1;v>=0;v--){const h=this.particles[v];h.update(a),(h.y>i.height||h.y<-100||h.x>i.width+100||h.x<-100)&&(f&&k<=x?this.particles[v]=this.getParticle():this.removeParticleAt(v))}return j>0||k<x},this.canvas=t;const s=this.canvas.getContext("2d");if(!s)throw new Error("Could not get canvas context");this.context=s,this.getOptions=r}}const ec={width:typeof window<"u"?window.innerWidth:300,height:typeof window<"u"?window.innerHeight:200,numberOfPieces:200,friction:.99,wind:0,gravity:.1,initialVelocityX:4,initialVelocityY:10,colors:["#f44336","#e91e63","#9c27b0","#673ab7","#3f51b5","#2196f3","#03a9f4","#00bcd4","#009688","#4CAF50","#8BC34A","#CDDC39","#FFEB3B","#FFC107","#FF9800","#FF5722","#795548"],opacity:1,debug:!1,tweenFunction:Wx.easeInOutQuad,tweenDuration:5e3,recycle:!0,run:!0};class Zx{constructor(t,r){this.lastFrameTime=0,this.setOptionsWithDefaults=a=>{const i={confettiSource:{x:0,y:0,w:this.canvas.width,h:0}};this._options={...i,...ec,...a},Object.assign(this,a.confettiSource)},this.update=(a=0)=>{const{options:{run:i,onConfettiComplete:o,frameRate:l},canvas:c,context:u}=this,f=Math.min(a-this.lastFrameTime,50);if(l&&f<1e3/l){this.rafId=requestAnimationFrame(this.update);return}this.lastFrameTime=a-(l?f%l:0),i&&(u.fillStyle="white",u.clearRect(0,0,c.width,c.height)),this.generator.animate(f)?this.rafId=requestAnimationFrame(this.update):(o&&typeof o=="function"&&this.generator.particlesGenerated>0&&o.call(this,this),this._options.run=!1)},this.reset=()=>{this.generator&&this.generator.particlesGenerated>0&&(this.generator.particlesGenerated=0,this.generator.particles=[],this.generator.lastNumberOfPieces=0)},this.stop=()=>{this.options={run:!1},this.rafId&&(cancelAnimationFrame(this.rafId),this.rafId=void 0)},this.canvas=t;const s=this.canvas.getContext("2d");if(!s)throw new Error("Could not get canvas context");this.context=s,this.generator=new Jx(this.canvas,()=>this.options),this.options=r,this.update()}get options(){return this._options}set options(t){var a,i;const r=(a=this._options)==null?void 0:a.run,s=(i=this._options)==null?void 0:i.recycle;this.setOptionsWithDefaults(t),this.generator&&(Object.assign(this.generator,this.options.confettiSource),typeof t.recycle=="boolean"&&t.recycle&&s===!1&&(this.generator.lastNumberOfPieces=this.generator.particles.length)),typeof t.run=="boolean"&&t.run&&r===!1&&this.update()}}const eg=xt.createRef();class tc extends xt.Component{constructor(t){super(t),this.canvas=xt.createRef(),this.canvas=t.canvasRef||eg}componentDidMount(){if(this.canvas.current){const t=Vi(this.props)[0];this.confetti=new Zx(this.canvas.current,t)}}componentDidUpdate(){const t=Vi(this.props)[0];this.confetti&&(this.confetti.options=t)}componentWillUnmount(){this.confetti&&this.confetti.stop(),this.confetti=void 0}render(){const[t,r]=Vi(this.props),s={zIndex:2,position:"absolute",pointerEvents:"none",top:0,left:0,bottom:0,right:0,...r.style};return n.jsx("canvas",{width:t.width,height:t.height,ref:this.canvas,...r,style:s})}}tc.defaultProps={...ec};tc.displayName="ReactConfetti";function Vi(e){const t={},r={},s={},a=[...Object.keys(ec),"confettiSource","drawShape","onConfettiComplete","frameRate"],i=["canvasRef"];for(const o in e){const l=e[o];a.includes(o)?t[o]=l:i.includes(o)?i[o]=l:s[o]=l}return[t,s,r]}const pm=xt.forwardRef((e,t)=>n.jsx(tc,{canvasRef:t,...e}));function jd({question:e,category:t,onAnswer:r,run:s,timeLeft:a,usedLifelines:i,onUseLifeline:o,eliminatedOptions:l,audienceData:c,onBack:u,timeUp:f,onTimeUpBackToWheel:x,soundOn:m}){const[y,p]=d.useState(null),[j,k]=d.useState(!1),[v,h]=d.useState(!1),g=d.useRef(null),E=d.useRef(null),[P,z]=d.useState(null);d.useEffect(()=>(document.body.classList.add("hide-bottom-nav"),()=>{document.body.classList.remove("hide-bottom-nav")}),[]),d.useEffect(()=>{if(!j||!g.current)return;const w=g.current.getBoundingClientRect();z({x:w.left,y:w.top-300,w:w.width,h:8})},[j]);const S=w=>{if(j)return;p(w),k(!0);const N=w===e.correctIndex;Zl(N?[50,30,50]:[200]),m&&_r(N?"/sounds/correct.mp3":"/sounds/wrong.mp3",.7),setTimeout(()=>{r(N,null)},1500)},b=y===e.correctIndex;return n.jsx("div",{className:"fixed inset-0 bg-gradient-to-br from-gray-900 to-black text-white overflow-hidden",children:n.jsxs("div",{ref:E,className:"relative h-full overflow-y-auto px-5 pt-16 pb-[calc(env(safe-area-inset-bottom)+5.25rem)]",children:[n.jsx("div",{className:"mb-4",children:n.jsx("button",{onClick:()=>h(!0),className:"h-10 w-10 rounded-full border border-base-border grid place-items-center bg-white/5 hover:bg-white/10 transition",children:"←"})}),n.jsxs("div",{className:"text-center mb-6",children:[n.jsx("div",{className:`text-4xl font-black mb-2 ${a<=10?"text-red-400 animate-pulse":"text-white"}`,children:a}),n.jsx("div",{className:"w-full bg-white/20 rounded-full h-2",children:n.jsx("div",{className:`h-full rounded-full transition-all duration-1000 ${a<=10?"bg-red-400":"bg-blue-400"}`,style:{width:`${a/30*100}%`}})})]}),n.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[n.jsx("div",{className:"w-12 h-12 rounded-full flex items-center justify-center text-2xl",style:{backgroundColor:t.color},children:t.icon}),n.jsxs("div",{children:[n.jsx("div",{className:"text-lg font-bold",children:t.name}),n.jsxs("div",{className:"text-sm text-gray-400",children:["Question ",s.qIndex+1,"/3"]})]})]}),n.jsx("h2",{ref:g,className:"text-xl font-semibold mb-6 leading-relaxed",children:e.prompt}),n.jsx("div",{className:"space-y-3 mb-6",children:e.options.map((w,N)=>{const R=l.includes(N),F=y===N,Q=N===e.correctIndex;let ee="bg-white/10 border-white/20",q="opacity-100";return R?q="opacity-30":j&&F?ee=Q?"bg-green-500/30 border-green-400":"bg-red-500/30 border-red-400":j&&Q?ee="bg-green-500/30 border-green-400":F&&(ee="bg-white/20 border-white/40"),n.jsx("button",{onClick:()=>S(N),disabled:j||R,className:`w-full p-4 rounded-xl border-2 text-left transition-all duration-300 ${ee} ${q} ${!j&&!R?"hover:bg-white/15 active:scale-98":""}`,children:n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsx("div",{className:"w-8 h-8 rounded-full bg-white/20 flex items-center justify-center font-bold text-sm",children:String.fromCharCode(65+N)}),n.jsx("span",{className:"font-medium flex-1",children:w}),c&&n.jsxs("span",{className:"text-xs text-base-muted",children:[Math.round(c[N]),"%"]})]})},N)})}),!j&&n.jsxs("div",{className:"flex gap-4 mb-8",children:[n.jsx("button",{onClick:()=>o("fifty"),disabled:i.fifty,className:`flex-1 p-4 rounded-2xl border-2 font-bold transition-all ${i.fifty?"bg-gray-700 border-gray-600 text-gray-400":"bg-purple-600 border-purple-400 text-white hover:bg-purple-500 active:scale-95"}`,children:"50:50"}),n.jsx("button",{onClick:()=>o("audience"),disabled:i.audience,className:`flex-1 p-4 rounded-2xl border-2 font-bold transition-all ${i.audience?"bg-gray-700 border-gray-600 text-gray-400":"bg-blue-600 border-blue-400 text-white hover:bg-blue-500 active:scale-95"}`,children:"👥 Ask"})]}),j&&n.jsxs("div",{className:"relative text-center",children:[b&&n.jsx("div",{className:"absolute inset-0 pointer-events-none",children:n.jsx(pm,{recycle:!1,numberOfPieces:120,gravity:.9,tweenDuration:1800,confettiSource:P||{x:0,y:0,w:typeof window<"u"?window.innerWidth:320,h:1}})}),n.jsx("button",{onClick:()=>r(b,null,!0),className:"relative z-10 bg-white text-black font-black py-4 px-8 rounded-2xl text-lg hover:bg-gray-100 transition-all active:scale-95",children:"Continue"})]}),f&&n.jsx("div",{className:"fixed inset-0 z-50 bg-black/60 flex items-center justify-center px-6",children:n.jsxs("div",{className:"w-full max-w-sm rounded-2xl bg-base-card border border-base-border p-5 text-center",children:[n.jsx("div",{className:"text-lg font-bold mb-2",children:"Time's up"}),n.jsx("p",{className:"text-base-muted mb-5",children:"You ran out of time."}),n.jsx("button",{onClick:x,className:"mx-auto w-48 py-3 rounded-xl bg-brand-blue text-white font-semibold hover:bg-brand-blue/90 transition",children:"Back to Wheel"})]})}),v&&n.jsx("div",{className:"fixed inset-0 z-50 bg-black/60 flex items-center justify-center px-6",children:n.jsxs("div",{className:"w-full max-w-sm rounded-2xl bg-base-card border border-base-border p-5 text-center",children:[n.jsx("div",{className:"text-lg font-bold mb-2",children:"Want to quit?"}),n.jsx("p",{className:"text-base-muted mb-5",children:"You'll lose this question's progress."}),n.jsxs("div",{className:"flex gap-3",children:[n.jsx("button",{onClick:()=>h(!1),className:"flex-1 py-3 rounded-xl border border-base-border bg-white/5 hover:bg-white/10 transition",children:"No"}),n.jsx("button",{onClick:u,className:"flex-1 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-500 transition",children:"Yes"})]})]})})]})})}function Nd({category:e,onComplete:t,isBonus:r=!1,soundOn:s=!0}){return d.useEffect(()=>{s&&_r("/sounds/flush.mp3",.8);const a=setTimeout(t,1e3);return Zl([50]),()=>clearTimeout(a)},[t,s]),d.useEffect(()=>(document.body.classList.add("hide-bottom-nav"),()=>{document.body.classList.remove("hide-bottom-nav")}),[]),r?n.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-purple-500 to-blue-600 flex flex-col items-center justify-center text-white",children:[n.jsx("h2",{className:"text-5xl font-black mb-8",children:"Bonus Question"}),n.jsx("div",{className:"w-32 h-32 bg-white/20 rounded-full flex items-center justify-center animate-pulse",children:n.jsx("span",{className:"text-6xl",children:"⭐"})})]}):n.jsx("div",{className:"min-h-screen bg-base-bg text-white flex items-center justify-center",children:n.jsxs("div",{className:"relative w-96 h-96 rounded-full flex items-center justify-center",style:{backgroundColor:e.color},children:[n.jsxs("div",{className:"absolute inset-0 opacity-10 pointer-events-none",children:[n.jsx("div",{className:"absolute top-8 left-10 w-20 h-20 bg-white/20 rounded-full"}),n.jsx("div",{className:"absolute bottom-10 right-12 w-24 h-24 bg-white/20 rounded-full"})]}),n.jsxs("div",{className:"relative z-10 text-center",children:[n.jsx("div",{className:"text-4xl font-black mb-2",children:e.name}),n.jsx("div",{className:"w-20 h-20 bg-white/20 rounded-full grid place-items-center mx-auto",children:n.jsx("span",{className:"text-4xl",children:e.icon})})]})]})})}function tg({onDone:e}){return d.useEffect(()=>{const t=setTimeout(e,1e3);return()=>clearTimeout(t)},[e]),n.jsx("div",{className:"min-h-screen flex items-center justify-center bg-green-600 text-white",children:n.jsx("h2",{className:"text-2xl font-black",children:"Whohoo!! 3 correct in a row 🎉"})})}function ng({onSelect:e}){return n.jsx("div",{className:"min-h-screen bg-gradient-to-br from-purple-600 to-pink-600 text-white",children:n.jsxs("div",{className:"mx-auto max-w-md px-5 pt-16 pb-8",children:[n.jsxs("header",{className:"text-center mb-12",children:[n.jsx("div",{className:"text-6xl mb-4",children:"🏆"}),n.jsx("h1",{className:"text-4xl font-black mb-4",children:"Perfect Round!"}),n.jsx("p",{className:"text-xl opacity-90",children:"Choose a character to unlock"})]}),n.jsx("div",{className:"grid grid-cols-2 gap-6",children:nn.map(t=>{const r=hm[nr(t.name)];return n.jsxs("button",{onClick:()=>e(nr(t.name)),className:"p-6 rounded-3xl border-2 border-white/20 bg-white/10 backdrop-blur text-center hover:bg-white/20 hover:scale-105 transition-all duration-300 active:scale-95",children:[n.jsx("div",{className:"text-4xl mb-3",children:t.icon}),n.jsx("div",{className:"font-black text-lg mb-1",children:r}),n.jsx("div",{className:"text-sm opacity-75",children:t.name})]},nr(t.name))})})]})})}function rg({onBack:e}){const{coins:t,xp:r,level:s,ownedCharacters:a,soundOn:i,addCoins:o,addXp:l,unlockCharacter:c,setSoundOn:u}=Jl(),[f,x]=d.useState("wheel"),[m,y]=d.useState({qIndex:0,progress:[!1,!1,!1],lifelines:{fifty:!1,audience:!1}}),[p,j]=d.useState([]),[k,v]=d.useState(null),[h,g]=d.useState(null),[E,P]=d.useState(30),[z,S]=d.useState([]),[b,w]=d.useState(null),[N,R]=d.useState(null),[F,Q]=d.useState(!1),[ee,q]=d.useState(0),[B,L]=d.useState("none"),[C,T]=d.useState(!1),[_,A]=d.useState(null),[M,D]=d.useState(!1),[X,$]=d.useState(null),[J,ie]=d.useState(-1),[I,O]=d.useState(0),[W,V]=d.useState(null),[te,K]=d.useState(null),[Y,ne]=d.useState(!1),[U,H]=d.useState(null),[Z,ae]=d.useState(-1),[ke,fe]=d.useState([!1,!1,!1]),[me,Se]=d.useState(!1),[Re,Te]=d.useState(!1),he=d.useRef(null),we=d.useRef(null),Ce=d.useRef(null),_e=d.useMemo(()=>{var oe;return((oe=window.matchMedia)==null?void 0:oe.call(window,"(prefers-reduced-motion: reduce)").matches)||!1},[]);d.useEffect(()=>(Ke(),pt(),()=>it()),[]),d.useEffect(()=>(f==="question"&&E>0&&!Re?he.current=setTimeout(()=>{P(oe=>{const le=oe-1;return le===10&&i&&_r("/sounds/tick.mp3",.8),le})},1e3):f==="question"&&E===0&&Q(!0),()=>{he.current&&clearTimeout(he.current)}),[f,E,i,Re]),d.useEffect(()=>{if(f!=="wheel"||W==null)return;ie(W),i&&_r("/sounds/progress.mp3",.6),ae(W);const oe=setTimeout(()=>ae(-1),900),le=setTimeout(()=>ie(-1),900),pe=setTimeout(()=>{U&&(U==="streakFlash"?x("streakFlash"):U==="characterPicker"?x("characterPicker"):(e(),Pe()),H(null)),V(null)},1800);return()=>{clearTimeout(oe),clearTimeout(le),clearTimeout(pe)}},[f,W,U,i,e]),d.useEffect(()=>{f!=="wheel"||!me||(O(oe=>oe+1),Se(!1))},[f,me]),d.useEffect(()=>{if(f!=="wheel"||te==null)return;const le=setTimeout(()=>{V(te),K(null)},Y?1800:0);return()=>clearTimeout(le)},[f,te,Y]);const Ke=async()=>{try{const le=await(await fetch("/data/quiz_questions_bank.csv")).text(),{data:pe}=dr.parse(le,{header:!0,skipEmptyLines:!0,transformHeader:xe=>xe.trim().toLowerCase()}),je=pe.map((xe,Le)=>{var ve;const nt=[xe.option1,xe.option2,xe.option3,xe.option4].map(Ve=>(Ve||"").trim()).filter(Boolean);if(nt.length<4)return null;let ce={a:0,b:1,c:2,d:3}[(ve=xe.answer)==null?void 0:ve.toLowerCase()];return ce===void 0&&(ce=nt.findIndex(Ve=>Ve.toLowerCase()===(xe.answer||"").toLowerCase())),ce===-1&&(ce=0),{id:xe.id||`q_${Le}`,prompt:(xe.question||"").trim(),options:nt,correctIndex:ce,category:(xe.category||xe.subject||"general knowledge").trim(),difficulty:(xe.difficulty||"medium").toLowerCase(),explanation:(xe.explanation||"").trim()}}).filter(Boolean);j(je)}catch(oe){console.error("Failed to load questions:",oe),j([])}},pt=()=>{const oe=new Audio("/sounds/spin.mp3");oe.loop=!0,oe.volume=.6,we.current=oe},it=()=>{if(he.current&&clearTimeout(he.current),Ce.current&&(clearTimeout(Ce.current),Ce.current=null),we.current){try{we.current.pause()}catch{}we.current=null}},Pe=()=>{y({qIndex:0,progress:[!1,!1,!1],lifelines:{fifty:!1,audience:!1}}),fe([!1,!1,!1]),v(null),g(null),R(null),S([]),w(null),Q(!1),O(0)},Me=()=>{if(i&&we.current){try{we.current.currentTime=0,we.current.play()}catch{}Ce.current&&clearTimeout(Ce.current),Ce.current=setTimeout(()=>{Je()},2e3)}},Je=()=>{if(Ce.current&&(clearTimeout(Ce.current),Ce.current=null),we.current)try{we.current.pause(),we.current.currentTime=0}catch{}},Yr=()=>{if(C)return;A(null),D(!1),$(null),T(!0),Me();const oe=Math.floor(Math.random()*nn.length),le=nn[oe],pe=wd(ee),je=oe*Jn+Jn/2,xe=(Math.random()-.5)*(Jn*.3),Le=360-je+xe;let nt=wd(Le-pe);const de=Nn.FULL_TURNS*360+nt,ce=ee+de+Nn.OVERSHOOT;L(`transform ${_e?1e3:Nn.DURATION}ms cubic-bezier(0.25, 0.46, 0.45, 0.94)`),q(ce),Zl([20,50,20]),setTimeout(()=>{L(`transform ${_e?200:Nn.SETTLE_DURATION}ms cubic-bezier(0.68, -0.55, 0.265, 1.55)`),q(ve=>ve-Nn.OVERSHOOT)},_e?1e3:Nn.DURATION),setTimeout(()=>{Je(),T(!1),A({cat:le,index:oe}),g(le),$(le.color),D(!0),setTimeout(()=>{D(!1),x("interstitial")},1500),setTimeout(()=>$(null),1e3)},(_e?1e3:Nn.DURATION)+(_e?200:Nn.SETTLE_DURATION)+100)},re=()=>{const oe=p.filter(pe=>{const je=pe.category.toLowerCase(),xe=h.name.toLowerCase();return je.includes(xe)||xe.includes(je)});let le;oe.length>0?le=oe[Math.floor(Math.random()*oe.length)]:le=p[Math.floor(Math.random()*p.length)],le?(v(le),P(30),S([]),w(null),Q(!1),Te(!1),x("question")):x("wheel")},ue=(oe,le,pe=!1)=>{if(!pe){Te(!0);return}const je=m.qIndex,xe=[...m.progress];xe[je]=!0;const Le=[...ke];if(Le[je]=!!oe,fe(Le),y(nt=>({...nt,progress:xe,qIndex:nt.qIndex+1})),oe&&(o(5),l(1),Se(!0)),K(je),ne(!!oe),je===2){const nt=Le.every(Boolean);H(nt?"streakFlash":"modes")}else H(null);x("wheel")},Ae=oe=>{if(!(m.lifelines[oe]||!k)){if(y(le=>({...le,lifelines:{...le.lifelines,[oe]:!0}})),oe==="fifty"){const pe=k.options.map((je,xe)=>xe).filter(je=>je!==k.correctIndex).slice(0,2);S(pe)}else if(oe==="audience"){const le=40+Math.random()*25;let pe=100-le;const je=[0,0,0,0];je[k.correctIndex]=Math.round(le);const xe=[0,1,2,3].filter(Le=>Le!==k.correctIndex);xe.forEach((Le,nt)=>{if(nt===xe.length-1)je[Le]=pe;else{const de=Math.floor(Math.random()*pe);je[Le]=de,pe-=de}}),w(je)}}},be=oe=>{R(oe),x("bonusInterstitial")},Ge=oe=>{oe&&N&&(c(N),i&&_r("/sounds/coin.mp3",1)),setTimeout(()=>{e(),Pe()},3e3)},ge=()=>{x("wheel")};switch(f){case"wheel":return n.jsx(Hx,{run:m,coins:t,xp:r,level:s,ownedCharacters:a,onSpin:Yr,onBack:e,spinning:C,angle:ee,transition:B,result:_,showCallout:M,glowColor:X,soundOn:i,setSoundOn:u,showSparkle:J,pulseIdx:Z,coinBurstTick:I,pendingProgressIdx:W,lastAnswerWasCorrect:Y,nextProgressIdx:te});case"interstitial":return n.jsx(Nd,{category:h,onComplete:re,soundOn:i});case"streakFlash":return n.jsx(tg,{onDone:()=>x("characterPicker")});case"question":return n.jsx(jd,{question:k,category:h,onAnswer:ue,run:m,timeLeft:E,usedLifelines:m.lifelines,onUseLifeline:Ae,eliminatedOptions:z,audienceData:b,onBack:ge,timeUp:F,onTimeUpBackToWheel:()=>{Q(!1),x("wheel")},soundOn:i});case"characterPicker":return n.jsx(ng,{onSelect:be});case"bonusInterstitial":return n.jsx(Nd,{category:nn.find(oe=>nr(oe.name)===N),onComplete:()=>x("bonusQuestion"),isBonus:!0,soundOn:i});case"bonusQuestion":if(!k){const oe=nn.find(le=>nr(le.name)===N);if(oe&&p.length>0){const le=p.filter(je=>{const xe=je.category.toLowerCase(),Le=oe.name.toLowerCase();return xe.includes(Le)||Le.includes(xe)}),pe=le.length>0?le[Math.floor(Math.random()*le.length)]:p[Math.floor(Math.random()*p.length)];v(pe),P(30)}return n.jsx("div",{className:"min-h-screen bg-base-bg text-base-text flex items-center justify-center",children:n.jsx("div",{className:"text-lg",children:"Loading bonus question..."})})}return n.jsx(jd,{question:k,category:nn.find(oe=>nr(oe.name)===N)||nn[0],onAnswer:Ge,run:{...m,lifelines:{fifty:!0,audience:!0}},timeLeft:E,usedLifelines:{fifty:!0,audience:!0},onUseLifeline:()=>{},eliminatedOptions:[],audienceData:null,onBack:e,soundOn:i});default:return n.jsx("div",{className:"min-h-screen bg-base-bg text-white flex items-center justify-center",children:n.jsxs("div",{className:"text-center",children:[n.jsx("div",{className:"text-2xl mb-4",children:"Unknown State"}),n.jsx("button",{onClick:()=>x("wheel"),className:"px-6 py-3 bg-blue-600 rounded-lg",children:"Back to Wheel"})]})})}}function sg({lives:e,maxLives:t=3}){const[r,s]=d.useState(null),[a,i]=d.useState(e);return d.useEffect(()=>{e<a?(s(a-1),setTimeout(()=>s(null),600)):e>a&&(s(e-1),setTimeout(()=>s(null),1e3)),i(e)},[e,a]),n.jsxs("div",{className:"relative",children:[n.jsx("style",{jsx:!0,children:`
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
      `}),n.jsxs("div",{className:"flex items-center gap-3 px-5 py-1.5 bg-gradient-to-r from-red-500/20 to-pink-500/20 rounded-full backdrop-blur-md border border-white/10 shadow-xl",children:[n.jsx("div",{className:"flex items-center gap-1.5",children:[...Array(t)].map((o,l)=>n.jsx("div",{className:`relative transition-all duration-300 ${l<e?"scale-100":"scale-75"}`,children:n.jsxs("div",{className:"relative",children:[l<e?n.jsxs("div",{className:`relative ${l===r&&e>a?"heart-gained":""}`,children:[n.jsx("span",{className:`text-3xl drop-shadow-lg ${l===e-1?"heart-beat":""}`,children:"❤️"}),l===e-1&&e===1&&n.jsx("div",{className:"absolute inset-0 rounded-full heart-glow"})]}):n.jsx("div",{className:`relative ${l===r&&e<a?"heart-lost":""}`,children:n.jsx("span",{className:"text-3xl opacity-20 grayscale",children:"💔"})}),l===r&&e>a&&n.jsxs("div",{className:"absolute inset-0 flex items-center justify-center pointer-events-none",children:[n.jsx("div",{className:"absolute w-10 h-10 bg-green-400 rounded-full animate-ping opacity-30"}),n.jsx("span",{className:"absolute text-sm font-bold text-green-400 animate-bounce",children:"+1"})]})]})},l))}),n.jsx("div",{className:"pr-1",children:n.jsxs("div",{className:`text-sm font-bold ${e===1?"text-red-400 animate-pulse":e===t?"text-green-400":"text-white"}`,children:[e,"/",t]})})]}),e===1&&n.jsx("div",{className:"absolute -bottom-10 left-1/2 -translate-x-1/2 whitespace-nowrap",children:n.jsx("div",{className:"px-3 py-1 bg-red-500/20 border border-red-500/50 rounded-full backdrop-blur-sm",children:n.jsx("span",{className:"text-xs font-medium text-red-400 animate-pulse",children:"Last life! Be careful! ⚠️"})})})]})}function ag({question:e,onAnswer:t,lives:r,questionCount:s,correctStreak:a,totalScore:i,currentDifficulty:o,timeLeft:l,showFeedback:c,lastAnswerCorrect:u,checkpoint:f,onBack:x,soundOn:m,setSoundOn:y}){const[p,j]=d.useState(!1),[k,v]=d.useState(null),[h,g]=d.useState(!1),[E,P]=d.useState(!1),z={EASY:{emoji:"🌱",color:"from-emerald-400 to-green-500",accentGradient:"from-emerald-500/20 to-green-600/20",label:"Sprout",motivationalText:"Great start! Keep growing! 🌱"},MEDIUM:{emoji:"🌻",color:"from-yellow-400 to-amber-500",accentGradient:"from-yellow-500/20 to-amber-600/20",label:"Blooming",motivationalText:"You're blooming beautifully! 🌻"},HARD:{emoji:"🔥",color:"from-orange-400 to-red-500",accentGradient:"from-orange-500/20 to-red-600/20",label:"On Fire",motivationalText:"You're on fire! Keep it up! 🔥"},EXPERT:{emoji:"⚡",color:"from-purple-400 to-indigo-500",accentGradient:"from-purple-500/20 to-indigo-600/20",label:"Lightning",motivationalText:"Lightning fast thinking! ⚡"},LEGENDARY:{emoji:"👑",color:"from-pink-400 to-purple-600",accentGradient:"from-pink-500/20 to-purple-600/20",label:"Legendary",motivationalText:"Legendary performance! 👑"}},S=z[o];d.useEffect(()=>{a>0&&a%5===0&&c&&u&&(g(!0),setTimeout(()=>g(!1),3e3))},[a,c,u]),d.useEffect(()=>{c&&u&&(P(!0),setTimeout(()=>P(!1),1e3))},[c,u]);const b=w=>{c||(v(w),t(w))};return d.useEffect(()=>(document.body.classList.add("hide-bottom-nav"),()=>{document.body.classList.remove("hide-bottom-nav")}),[]),n.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-black text-white relative overflow-hidden",children:[n.jsx("style",{jsx:!0,children:`
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
      `}),n.jsxs("div",{className:"fixed inset-0 pointer-events-none",children:[n.jsx("div",{className:"absolute top-20 left-10 text-[100px] opacity-10 float-animation",children:S.emoji}),n.jsx("div",{className:"absolute top-40 right-20 text-[80px] opacity-10 float-animation",style:{animationDelay:"1s"},children:"⭐"}),n.jsx("div",{className:"absolute bottom-40 left-20 text-[90px] opacity-10 float-animation",style:{animationDelay:"2s"},children:"🎯"}),n.jsx("div",{className:"absolute bottom-20 right-10 text-[70px] opacity-10 float-animation",style:{animationDelay:"3s"},children:"🏆"})]}),n.jsxs("div",{className:"relative z-10 px-4 pt-[calc(env(safe-area-inset-top)+2rem)]",children:[n.jsxs("div",{className:"flex justify-between items-center mb-8 slide-in",children:[n.jsx("button",{onClick:()=>j(!0),className:"w-12 h-12 glass-card rounded-2xl shadow-lg flex items-center justify-center hover:scale-105 transition-transform",children:n.jsx("span",{className:"text-xl",children:"◀️"})}),n.jsx(sg,{lives:r}),n.jsx("button",{onClick:()=>y(!m),className:"w-12 h-12 glass-card rounded-2xl shadow-lg flex items-center justify-center hover:scale-105 transition-transform",children:n.jsx("span",{className:"text-xl",children:m?"🔊":"🔇"})})]}),n.jsx("div",{className:`glass-card rounded-3xl p-2 shadow-xl mb-2 mt-12 slide-in bg-gradient-to-r ${S.accentGradient}`,style:{animationDelay:"0.1s"},children:n.jsxs("div",{className:"grid grid-cols-3 gap-3",children:[n.jsxs("div",{className:"text-center",children:[n.jsx("div",{className:`text-3xl font-black bg-gradient-to-r ${S.color} bg-clip-text text-transparent ${E?"score-pulse":""}`,children:i}),n.jsx("div",{className:"text-xs text-white/60 font-medium mt-1",children:"Points"}),c&&u&&n.jsx("div",{className:"absolute -top-2 left-1/2 -translate-x-1/2",children:n.jsxs("span",{className:"text-green-400 font-bold text-sm coin-animation",children:["+",z[o]?o==="EASY"?10:o==="MEDIUM"?20:o==="HARD"?30:o==="EXPERT"?50:100:10]})})]}),n.jsxs("div",{className:"text-center",children:[n.jsx("div",{className:"text-3xl font-black text-white",children:s}),n.jsx("div",{className:"text-xs text-white/60 font-medium mt-1",children:"Questions"})]}),n.jsxs("div",{className:"text-center relative",children:[n.jsx("div",{className:`text-3xl font-black text-orange-400 ${a>0?"streak-flame":""}`,children:a}),n.jsx("div",{className:"text-xs text-white/60 font-medium mt-1",children:"Streak 🔥"})]})]})}),n.jsxs("div",{className:"flex justify-between items-center mb-1 slide-in",style:{animationDelay:"0.2s"},children:[n.jsx("div",{className:`px-4 py-3 rounded-full bg-gradient-to-r ${S.color} text-white shadow-lg`,children:n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx("span",{className:"text-2xl",children:S.emoji}),n.jsxs("div",{children:[n.jsx("div",{className:"font-bold text-sm",children:S.label}),n.jsxs("div",{className:"text-[10px] opacity-90",children:["Level ",s+1]})]})]})}),n.jsx("div",{className:"relative",children:n.jsxs("div",{className:"w-20 h-20 glass-card rounded-full shadow-xl flex items-center justify-center",children:[n.jsxs("svg",{className:"absolute inset-0 w-full h-full",children:[n.jsx("circle",{cx:"40",cy:"40",r:"35",fill:"none",stroke:"rgba(255, 255, 255, 0.1)",strokeWidth:"6",className:"progress-ring"}),n.jsx("circle",{cx:"40",cy:"40",r:"35",fill:"none",stroke:l<=5?"#ef4444":l<=10?"#f59e0b":"#10b981",strokeWidth:"6",strokeDasharray:`${l/30*220} 220`,strokeLinecap:"round",className:"progress-ring transition-all duration-1000"})]}),n.jsx("div",{className:"relative z-10",children:n.jsx("span",{className:`text-2xl font-black ${l<=5?"text-red-400 animate-pulse":l<=10?"text-amber-400":"text-white"}`,children:l})})]})})]})]}),n.jsxs("div",{className:"px-4 slide-in",style:{animationDelay:"0.3s"},children:[n.jsxs("div",{className:"glass-card rounded-3xl shadow-xl p-6 mb-6 border border-white/10",children:[n.jsx("div",{className:"text-center mb-2",children:n.jsxs("span",{className:"text-xs font-bold text-white/40 uppercase tracking-wider",children:["Question ",s+1]})}),n.jsx("h2",{className:"text-xl font-bold text-center text-white leading-relaxed",children:e.prompt})]}),n.jsx("div",{className:"space-y-3",children:e.options.map((w,N)=>{const R=["A","B","C","D"],F=["from-blue-400 to-blue-500","from-green-400 to-green-500","from-yellow-400 to-yellow-500","from-purple-400 to-purple-500"];let Q="glass-card border border-white/10",ee="";return c&&(N===e.correctIndex?(Q="bg-gradient-to-r from-green-500/20 to-emerald-500/20 border-2 border-green-400",ee="correct-bounce"):k===N&&!u&&(Q="bg-gradient-to-r from-red-500/20 to-pink-500/20 border-2 border-red-400",ee="wrong-shake")),n.jsx("button",{onClick:()=>b(N),disabled:c,className:`w-full p-4 rounded-2xl shadow-lg transition-all ${Q} ${ee} 
                  ${c?"":"hover:scale-[1.02] active:scale-[0.98] hover:bg-white/10"} slide-in`,style:{animationDelay:`${.4+N*.05}s`},children:n.jsxs("div",{className:"flex items-center gap-4",children:[n.jsx("div",{className:`w-12 h-12 rounded-xl bg-gradient-to-br ${F[N]} 
                    text-white font-bold text-xl flex items-center justify-center shadow-md`,children:R[N]}),n.jsx("span",{className:"flex-1 text-left font-medium text-white",children:w}),c&&N===e.correctIndex&&n.jsx("span",{className:"text-2xl",children:"✅"}),c&&k===N&&!u&&n.jsx("span",{className:"text-2xl",children:"❌"})]})},N)})}),c&&n.jsx("div",{className:"mt-6 text-center slide-in",children:n.jsx("p",{className:"text-sm font-medium text-white/70",children:u?S.motivationalText:"No worries! Keep trying! 💪"})}),f>0&&n.jsx("div",{className:"mt-4 flex justify-center slide-in",style:{animationDelay:"0.6s"},children:n.jsx("div",{className:"glass-card rounded-full px-4 py-2 shadow-lg border border-white/10",children:n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx("span",{className:"text-xl",children:"🏁"}),n.jsxs("span",{className:"text-sm font-bold text-white/80",children:["Checkpoint: Question ",f]})]})})})]}),h&&n.jsx("div",{className:"fixed inset-0 pointer-events-none flex items-center justify-center z-50",children:n.jsx("div",{className:"bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-8 py-6 rounded-3xl shadow-2xl animate-bounce",children:n.jsxs("div",{className:"text-center",children:[n.jsx("div",{className:"text-5xl mb-3",children:"🎉"}),n.jsx("div",{className:"text-2xl font-black mb-2",children:"AMAZING STREAK!"}),n.jsx("div",{className:"text-lg",children:"You earned a life back! ❤️"})]})})}),p&&n.jsx("div",{className:"fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 px-6",children:n.jsxs("div",{className:"bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-6 max-w-sm w-full shadow-2xl slide-in border border-white/10",children:[n.jsxs("div",{className:"text-center mb-6",children:[n.jsx("div",{className:"text-5xl mb-3",children:"🚪"}),n.jsx("h3",{className:"text-xl font-bold text-white mb-2",children:"Leave the game?"}),n.jsx("p",{className:"text-white/70",children:"Your progress saves at checkpoints!"})]}),n.jsxs("div",{className:"flex gap-3",children:[n.jsx("button",{onClick:()=>j(!1),className:"flex-1 py-3 bg-gradient-to-r from-green-400 to-emerald-500 text-white rounded-2xl font-bold shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]",children:"Keep Playing"}),n.jsx("button",{onClick:x,className:"flex-1 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-2xl font-bold shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]",children:"Exit"})]})]})})]})}function ig({score:e,questionsAnswered:t,highScore:r,checkpoint:s,onRestart:a,onContinue:i,onBack:o}){const l=e>r,[c,u]=d.useState(!1),[f,x]=d.useState(0),[m,y]=d.useState(!1),p=d.useRef(null);d.useEffect(()=>{const g=e/60;let E=0;const P=setInterval(()=>{E+=g,E>=e?(x(e),clearInterval(P),l&&(u(!0),setTimeout(()=>u(!1),5e3))):x(Math.floor(E))},2e3/60);return setTimeout(()=>y(!0),2200),()=>clearInterval(P)},[e,l]),d.useEffect(()=>(document.body.classList.add("hide-bottom-nav"),()=>{document.body.classList.remove("hide-bottom-nav")}),[]);const k=(()=>t>=100?{emoji:"👑",title:"LEGENDARY!",subtitle:"You're a true Quiz Legend!",color:"from-purple-400 to-pink-500",stars:5}:t>=50?{emoji:"🏆",title:"CHAMPION!",subtitle:"Outstanding performance!",color:"from-yellow-400 to-amber-500",stars:5}:t>=30?{emoji:"💎",title:"EXPERT!",subtitle:"You're getting really good!",color:"from-blue-400 to-cyan-500",stars:4}:t>=20?{emoji:"⭐",title:"STAR PLAYER!",subtitle:"Keep up the great work!",color:"from-green-400 to-emerald-500",stars:3}:t>=10?{emoji:"🎯",title:"NICE TRY!",subtitle:"You're improving fast!",color:"from-orange-400 to-red-500",stars:2}:{emoji:"🌟",title:"GOOD START!",subtitle:"Every expert was once a beginner!",color:"from-indigo-400 to-purple-500",stars:1})();return n.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-black text-white relative overflow-hidden",children:[n.jsx("style",{jsx:!0,children:`
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
      `}),n.jsxs("div",{className:"absolute inset-0 overflow-hidden",children:[n.jsx("div",{className:"absolute top-20 left-10 text-[150px] opacity-5 float-animation",children:"🏆"}),n.jsx("div",{className:"absolute bottom-20 right-10 text-[120px] opacity-5 float-animation",style:{animationDelay:"1s"},children:"⭐"}),n.jsx("div",{className:"absolute top-40 right-20 text-[100px] opacity-5 float-animation",style:{animationDelay:"2s"},children:"🎯"})]}),c&&n.jsx("div",{className:"fixed inset-0 pointer-events-none z-50",children:[...Array(40)].map((v,h)=>n.jsx("div",{className:"absolute confetti-fall",style:{left:`${Math.random()*100}%`,animationDelay:`${Math.random()*3}s`,animationDuration:`${3+Math.random()*2}s`},children:n.jsx("span",{className:"text-3xl",children:["🎉","⭐","🎊","✨","🎈","💫","🌟"][Math.floor(Math.random()*7)]})},h))}),n.jsxs("div",{className:"relative z-10 flex flex-col items-center justify-center min-h-screen px-6 text-center",children:[n.jsxs("div",{className:"mb-8 slide-up",children:[n.jsx("h1",{className:"text-6xl font-black mb-4 bg-gradient-to-r from-red-400 to-pink-500 bg-clip-text text-transparent",children:"GAME OVER"}),l&&n.jsx("div",{className:"fade-in",style:{animationDelay:"1s"},children:n.jsx("div",{className:"inline-block px-6 py-3 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-bold shadow-2xl glow-text",children:n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsx("span",{className:"text-3xl",children:"🏆"}),n.jsx("span",{className:"text-xl",children:"NEW HIGH SCORE!"}),n.jsx("span",{className:"text-3xl",children:"🏆"})]})})})]}),m&&n.jsx("div",{className:"mb-8 slide-up",style:{animationDelay:"0.3s"},children:n.jsxs("div",{className:`glass-card rounded-3xl p-6 bg-gradient-to-r ${k.color} bg-opacity-20 border-2 border-white/20 shadow-2xl`,children:[n.jsx("div",{className:"text-6xl mb-3 bounce-animation",children:k.emoji}),n.jsx("h2",{className:"text-3xl font-black mb-2",children:k.title}),n.jsx("p",{className:"text-white/80 mb-4",children:k.subtitle}),n.jsx("div",{className:"flex justify-center gap-1",children:[...Array(5)].map((v,h)=>n.jsx("span",{className:`text-2xl ${h<k.stars?"star-pop":""}`,style:{animationDelay:`${2.5+h*.1}s`},children:h<k.stars?"⭐":"☆"},h))})]})}),n.jsxs("div",{className:"grid grid-cols-2 gap-4 mb-8 w-full max-w-md",children:[n.jsxs("div",{className:"glass-card rounded-2xl p-6 shadow-xl slide-up",style:{animationDelay:"0.4s"},children:[n.jsx("div",{className:"text-4xl mb-2",children:"🎯"}),n.jsx("div",{ref:p,className:`text-4xl font-black ${l?"text-yellow-400":"text-white"}`,children:f}),n.jsx("div",{className:"text-sm text-white/60 font-medium",children:"Points Earned"}),n.jsx("div",{className:"mt-3 pt-3 border-t border-white/10",children:n.jsxs("div",{className:"text-xs text-white/50",children:[t," questions"]})})]}),n.jsxs("div",{className:"glass-card rounded-2xl p-6 shadow-xl slide-up",style:{animationDelay:"0.5s"},children:[n.jsx("div",{className:"text-4xl mb-2",children:"📊"}),n.jsx("div",{className:"text-4xl font-black text-white",children:t}),n.jsx("div",{className:"text-sm text-white/60 font-medium",children:"Questions"}),n.jsx("div",{className:"mt-3 pt-3 border-t border-white/10",children:n.jsxs("div",{className:"text-xs text-white/50",children:["Best: ",Math.max(r,e)]})})]})]}),n.jsx("div",{className:"glass-card rounded-2xl px-6 py-4 mb-8 w-full max-w-md slide-up",style:{animationDelay:"0.6s"},children:n.jsx("p",{className:"text-white/80 font-medium",children:t>=50?"Incredible performance! You're a quiz master! 🌟":t>=20?"Great job! You're getting stronger! 💪":"Keep practicing! Every attempt makes you better! 🚀"})}),n.jsxs("div",{className:"space-y-3 w-full max-w-md",children:[s>0&&i&&n.jsx("button",{onClick:i,className:"w-full py-4 bg-gradient-to-r from-green-400 to-emerald-500 text-white rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all hover:scale-[1.02] active:scale-[0.98] slide-up",style:{animationDelay:"0.7s"},children:n.jsxs("div",{className:"flex items-center justify-center gap-3",children:[n.jsx("span",{className:"text-2xl",children:"🏁"}),n.jsxs("span",{children:["Continue from Question ",s]})]})}),n.jsx("button",{onClick:a,className:"w-full py-4 bg-gradient-to-r from-blue-400 to-indigo-500 text-white rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all hover:scale-[1.02] active:scale-[0.98] slide-up",style:{animationDelay:"0.8s"},children:n.jsxs("div",{className:"flex items-center justify-center gap-3",children:[n.jsx("span",{className:"text-2xl",children:"🎮"}),n.jsx("span",{children:"Play Again"})]})}),n.jsx("button",{onClick:o,className:"w-full py-4 glass-card text-white rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl transition-all hover:scale-[1.02] active:scale-[0.98] hover:bg-white/10 slide-up",style:{animationDelay:"0.9s"},children:n.jsxs("div",{className:"flex items-center justify-center gap-3",children:[n.jsx("span",{className:"text-2xl",children:"🏠"}),n.jsx("span",{children:"Back to Games"})]})})]})]})]})}const kd={EASY:{min:0,max:9,timer:30,points:10},MEDIUM:{min:10,max:24,timer:25,points:20},HARD:{min:25,max:49,timer:20,points:30},EXPERT:{min:50,max:99,timer:15,points:50},LEGENDARY:{min:100,max:1/0,timer:10,points:100}};function og({onBack:e}){const{coins:t,xp:r,level:s,soundOn:a,addCoins:i,addXp:o,setSoundOn:l}=Jl(),[c,u]=d.useState("playing"),[f,x]=d.useState(3),[m,y]=d.useState(0),[p,j]=d.useState(0),[k,v]=d.useState(0),[h,g]=d.useState("EASY"),[E,P]=d.useState([]),[z,S]=d.useState(null),[b,w]=d.useState(30),[N,R]=d.useState(!1),[F,Q]=d.useState(!1),[ee,q]=d.useState(0),B=d.useRef(null),L=d.useRef(new Set);d.useEffect(()=>(T(),J(),()=>{B.current&&clearTimeout(B.current)}),[]),d.useEffect(()=>(c==="playing"&&z&&b>0&&!N&&(B.current=setTimeout(()=>{w(K=>K<=1?(X(),0):(K===6&&a&&V("/sounds/tick.mp3",.8),K-1))},1e3)),()=>{B.current&&clearTimeout(B.current)}),[c,z,b,N,a]),d.useEffect(()=>{const K=C(m);K!==h&&(g(K),a&&V("/sounds/levelup.mp3",.6))},[m,h,a]),d.useEffect(()=>{m>0&&m%10===0&&($(),q(m),a&&V("/sounds/checkpoint.mp3",.7))},[m,a]);const C=K=>K>=100?"LEGENDARY":K>=50?"EXPERT":K>=25?"HARD":K>=10?"MEDIUM":"EASY",T=async()=>{try{const Y=await(await fetch("/data/quiz_questions_bank.csv")).text(),{data:ne}=dr.parse(Y,{header:!0,skipEmptyLines:!0,transformHeader:H=>H.trim().toLowerCase()}),U=ne.map((H,Z)=>{var me;const ae=[H.option1,H.option2,H.option3,H.option4].map(Se=>(Se||"").trim()).filter(Boolean);if(ae.length<4)return null;let fe={a:0,b:1,c:2,d:3}[(me=H.answer)==null?void 0:me.toLowerCase()];return fe===void 0&&(fe=ae.findIndex(Se=>Se.toLowerCase()===(H.answer||"").toLowerCase())),fe===-1&&(fe=0),{id:H.id||`q_${Z}`,prompt:(H.question||"").trim(),options:ae,correctIndex:fe,category:(H.category||H.subject||"general").trim(),difficulty:(H.difficulty||"medium").toLowerCase()}}).filter(Boolean);P(U),_(U)}catch(K){console.error("Failed to load questions:",K)}},_=(K=E)=>{const Y=K.filter(Z=>!L.current.has(Z.id));Y.length===0&&(L.current.clear(),Y.push(...K));const ne=h.toLowerCase();let U=Y.filter(Z=>Z.difficulty===ne||Z.difficulty==="medium");U.length===0&&(U=Y);const H=U[Math.floor(Math.random()*U.length)];H&&(L.current.add(H.id),S(H),w(kd[h].timer),R(!1))},A=K=>{if(N)return;const Y=K===z.correctIndex;Q(Y),R(!0),Y?M():D(),setTimeout(()=>{(f>0||Y)&&(y(ne=>ne+1),_())},1500)},M=()=>{const K=kd[h].points;v(Y=>Y+K),j(Y=>{const ne=Y+1;return ne%5===0&&f<3&&(x(U=>Math.min(U+1,3)),a&&V("/sounds/lifeup.mp3",.8)),ne}),i(Math.floor(K/10)),o(1),a&&V("/sounds/correct.mp3",.7)},D=()=>{j(0),x(K=>{const Y=K-1;return Y<=0&&(u("gameOver"),I()),Y}),a&&V("/sounds/wrong.mp3",.7),te([200])},X=()=>{D()},$=()=>{const K={questionCount:m,totalScore:k,lives:f,correctStreak:p,timestamp:Date.now()};localStorage.setItem("survival_checkpoint",JSON.stringify(K))},J=()=>{const K=localStorage.getItem("survival_checkpoint");if(K)try{const Y=JSON.parse(K);Date.now()-Y.timestamp<864e5?(y(Y.questionCount),v(Y.totalScore),x(Y.lives),j(Y.correctStreak),q(Y.questionCount)):localStorage.removeItem("survival_checkpoint")}catch(Y){console.error("Failed to load checkpoint:",Y)}},ie=()=>{localStorage.removeItem("survival_checkpoint"),q(0)},I=()=>{const K=parseInt(localStorage.getItem("survival_highscore")||"0");k>K&&(localStorage.setItem("survival_highscore",k.toString()),localStorage.setItem("survival_highquestions",m.toString()))},O=()=>{u("playing"),x(3),y(0),j(0),v(0),g("EASY"),L.current.clear(),ie(),_()},W=()=>{u("playing"),_()},V=(K,Y=.5)=>{try{const ne=new Audio(K);ne.volume=Y,ne.play()}catch{}},te=K=>{navigator.vibrate&&navigator.vibrate(K)};return d.useEffect(()=>(document.body.classList.add("hide-bottom-nav"),()=>{document.body.classList.remove("hide-bottom-nav")}),[]),c==="gameOver"?n.jsx(ig,{score:k,questionsAnswered:m,highScore:parseInt(localStorage.getItem("survival_highscore")||"0"),checkpoint:ee,onRestart:O,onContinue:ee>0?W:null,onBack:e}):z?n.jsx(ag,{question:z,onAnswer:A,lives:f,questionCount:m,correctStreak:p,totalScore:k,currentDifficulty:h,timeLeft:b,showFeedback:N,lastAnswerCorrect:F,checkpoint:ee,onBack:e,soundOn:a,setSoundOn:l}):n.jsx("div",{className:"min-h-screen bg-base-bg text-white flex items-center justify-center",children:n.jsx("div",{className:"text-xl",children:"Loading questions..."})})}const Zn=[{id:1,name:"Sandy Beach",emoji:"🏖️",theme:{background:"from-yellow-300 via-orange-300 to-blue-400",accent:"from-yellow-400 to-orange-400",cardBg:"from-amber-500/20 to-yellow-500/20",unlockGradient:"from-yellow-400 to-amber-500"},difficulty:"EASY",difficultyRange:{min:0,max:9},questionDifficulty:["easy"],requiredCorrect:2,timeLimit:300,rewards:{perCorrectAnswer:10,gemChance:.3,gemBonus:5,speedBonus:3,perfectBonus:50,treasurePiece:"🧩",completionCoins:30},description:"Start your adventure on the sunny shores! Easy questions to warm up.",unlockRequirement:null,visualElements:{bgEmojis:["🌊","🐚","🦀","⛱️","🌺"],diggingEmoji:"⛏️",foundEmojis:["💎","🪙","✨"]}},{id:2,name:"Jungle Cave",emoji:"🌴",theme:{background:"from-green-400 via-emerald-500 to-teal-600",accent:"from-green-500 to-emerald-600",cardBg:"from-green-500/20 to-emerald-500/20",unlockGradient:"from-green-400 to-emerald-500"},difficulty:"EASY-MEDIUM",difficultyRange:{min:10,max:24},questionDifficulty:["easy","medium"],requiredCorrect:2,timeLimit:300,rewards:{perCorrectAnswer:15,gemChance:.35,gemBonus:7,speedBonus:5,perfectBonus:75,treasurePiece:"🗝️",completionCoins:50},description:"Explore the mysterious jungle caves! Watch out for tricky vines!",unlockRequirement:{island:1,treasurePiece:!0},visualElements:{bgEmojis:["🌿","🦜","🐒","🦋","🌺"],diggingEmoji:"⛏️",foundEmojis:["💎","🪙","🌟"]}},{id:3,name:"Crystal Mountain",emoji:"⛰️",theme:{background:"from-purple-400 via-pink-400 to-indigo-500",accent:"from-purple-500 to-pink-500",cardBg:"from-purple-500/20 to-pink-500/20",unlockGradient:"from-purple-400 to-pink-500"},difficulty:"MEDIUM",difficultyRange:{min:25,max:49},questionDifficulty:["medium"],requiredCorrect:2,timeLimit:300,rewards:{perCorrectAnswer:20,gemChance:.4,gemBonus:10,speedBonus:7,perfectBonus:100,treasurePiece:"💎",completionCoins:75},description:"Climb the sparkling crystal peaks! Medium challenges await!",unlockRequirement:{island:2,treasurePiece:!0},visualElements:{bgEmojis:["✨","🔮","⭐","🌟","💫"],diggingEmoji:"⚒️",foundEmojis:["💎","🪙","🌈"]}},{id:4,name:"Pirate Ship",emoji:"🏴‍☠️",theme:{background:"from-slate-600 via-blue-600 to-cyan-500",accent:"from-slate-700 to-blue-700",cardBg:"from-slate-500/20 to-blue-500/20",unlockGradient:"from-slate-500 to-blue-600"},difficulty:"MEDIUM-HARD",difficultyRange:{min:50,max:99},questionDifficulty:["medium","hard"],requiredCorrect:2,timeLimit:300,rewards:{perCorrectAnswer:30,gemChance:.45,gemBonus:15,speedBonus:10,perfectBonus:150,treasurePiece:"🗺️",completionCoins:100},description:"Ahoy matey! Navigate the pirate ship's challenging puzzles!",unlockRequirement:{island:3,treasurePiece:!0},visualElements:{bgEmojis:["⚓","🦜","💀","🌊","⛵"],diggingEmoji:"🗡️",foundEmojis:["💎","🪙","👑"]}},{id:5,name:"Volcano Peak",emoji:"🌋",theme:{background:"from-red-500 via-orange-500 to-yellow-500",accent:"from-red-600 to-orange-600",cardBg:"from-red-500/20 to-orange-500/20",unlockGradient:"from-red-500 to-orange-500"},difficulty:"HARD",difficultyRange:{min:100,max:1/0},questionDifficulty:["hard"],requiredCorrect:2,timeLimit:300,rewards:{perCorrectAnswer:50,gemChance:.5,gemBonus:25,speedBonus:15,perfectBonus:200,treasurePiece:"👑",completionCoins:150},description:"The ultimate challenge! Can you conquer the volcano?",unlockRequirement:{island:4,treasurePiece:!0},visualElements:{bgEmojis:["🔥","🌋","💥","⚡","🔴"],diggingEmoji:"⛏️",foundEmojis:["💎","🪙","🏆"]}}],Fe={SHOVELS_PER_ISLAND:3,QUESTIONS_PER_ISLAND:3,SPEED_BONUS_THRESHOLD:5,MIN_CORRECT_FOR_TREASURE:2,FINAL_TREASURE_REWARD:200,FINAL_TREASURE_TITLE:"Treasure Master",DIGGING_ANIMATION_DURATION:1500,REWARD_DISPLAY_DURATION:2e3,TRANSITION_DURATION:500,STORAGE_KEYS:{PROGRESS:"treasureHunt_progress",STATS:"treasureHunt_stats",UNLOCKED_ISLANDS:"treasureHunt_unlocked",COMPLETED_ISLANDS:"treasureHunt_completed",TREASURE_PIECES:"treasureHunt_pieces"},SOUNDS:{DIG:"/sounds/dig.mp3",TREASURE_FOUND:"/sounds/treasure.mp3",GEM_FOUND:"/sounds/gem.mp3",WRONG:"/sounds/wrong.mp3",ISLAND_COMPLETE:"/sounds/islandcomplete.mp3",ISLAND_UNLOCK:"/sounds/unlock.mp3",FINAL_TREASURE:"/sounds/victory.mp3",TICK:"/sounds/tick.mp3",SHOVEL_BREAK:"/sounds/break.mp3"}},ln=e=>Zn.find(t=>t.id===e),lg=(e,t)=>{const r=ln(e);if(!r.unlockRequirement)return!0;const s=t[r.unlockRequirement.island];return s&&s.treasurePiece},cg=(e,t)=>{const r={0:["Keep trying! You'll get it! 💪","Don't give up! Adventure awaits! 🌟","Practice makes perfect! 🎯"],1:["Good effort! Almost there! 🌈","Nice try! Keep going! ⭐","You're learning fast! 🚀"],2:["Awesome! You found treasure! 🏆","Great job, explorer! 🎉","You're amazing! ✨"],3:["PERFECT! You're a champion! 👑","INCREDIBLE! Master explorer! 🌟","LEGENDARY performance! 🏆"]},s=r[e]||r[0];return s[Math.floor(Math.random()*s.length)]},dg=e=>Zn.map(t=>{var r;return{id:t.id,piece:t.rewards.treasurePiece,collected:((r=e[t.id])==null?void 0:r.treasurePiece)||!1}});function ug({islands:e,islandProgress:t,onSelectIsland:r,onBack:s,soundOn:a,setSoundOn:i,totalStats:o}){const[l,c]=d.useState(!1),u=dg(t),f=u.filter(m=>m.collected).length,x=Math.round(f/e.length*100);return d.useEffect(()=>(document.body.style.position="fixed",document.body.style.overflow="hidden",document.body.style.width="100%",document.body.style.height="100%",()=>{document.body.style.position="",document.body.style.overflow="",document.body.style.width="",document.body.style.height=""}),[]),n.jsxs("div",{className:"fixed inset-0 bg-gradient-to-b from-sky-400 via-blue-500 to-blue-600 overflow-hidden flex flex-col",children:[n.jsx("style",{jsx:!0,children:`
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
      `}),n.jsxs("div",{className:"absolute inset-0",children:[n.jsx("div",{className:"absolute top-10 cloud-drift",style:{animationDelay:"0s"},children:n.jsx("div",{className:"text-6xl opacity-40",children:"☁️"})}),n.jsx("div",{className:"absolute top-12 cloud-drift",style:{animationDelay:"7s",animationDuration:"25s"},children:n.jsx("div",{className:"text-5xl opacity-40",children:"☁️"})}),n.jsx("div",{className:"absolute top-10 right-12",children:n.jsx("div",{className:"text-6xl pulse-animation opacity-80",children:"☀️"})}),n.jsx("div",{className:"absolute top-16 left-20 float-animation opacity-60",children:n.jsx("div",{className:"text-2xl",children:"🦜"})})]}),n.jsxs("div",{className:"relative z-20 px-4 pt-[calc(env(safe-area-inset-top)+3rem)]",children:[n.jsxs("div",{className:"flex justify-between items-center mb-3",children:[n.jsx("button",{onClick:s,className:"w-11 h-11 glass-card rounded-2xl shadow-lg flex items-center justify-center hover:scale-105 transition-transform",children:n.jsx("span",{className:"text-xl",children:"⬅"})}),n.jsx("div",{className:"glass-card rounded-2xl px-3 py-2 shadow-lg",children:n.jsxs("div",{className:"text-white font-bold text-center",children:[n.jsx("div",{className:"text-[10px] opacity-90",children:"TREASURE HUNT"}),n.jsx("div",{className:"text-sm",children:"🏝️ Island Explorer 🏝️"})]})}),n.jsx("button",{onClick:()=>i(!a),className:"w-11 h-11 glass-card rounded-2xl shadow-lg flex items-center justify-center hover:scale-105 transition-transform",children:n.jsx("span",{className:"text-xl",children:a?"🔊":"🔇"})})]}),n.jsxs("div",{className:"glass-card rounded-2xl p-3 shadow-xl mt-2",children:[n.jsxs("div",{className:"flex items-center justify-between mb-2",children:[n.jsx("span",{className:"text-white font-bold text-sm",children:"Adventure Progress"}),n.jsxs("span",{className:"text-white font-bold text-sm",children:[x,"%"]})]}),n.jsx("div",{className:"w-full h-2.5 bg-white/20 rounded-full overflow-hidden",children:n.jsx("div",{className:"h-full bg-gradient-to-r from-yellow-400 to-amber-500 transition-all duration-1000",style:{width:`${x}%`}})}),n.jsx("button",{onClick:()=>c(!0),className:"mt-2.5 w-full py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-bold text-sm hover:scale-[1.02] transition-transform",children:n.jsxs("div",{className:"flex items-center justify-center gap-2",children:[n.jsx("span",{children:"🏆"}),n.jsxs("span",{children:["Treasure Pieces: ",f,"/5"]}),n.jsx("span",{children:"🏆"})]})})]})]}),n.jsx("div",{className:"flex-1 flex items-center justify-center px-4 py-4",children:n.jsxs("div",{className:"w-full max-w-md",children:[n.jsx("div",{className:"grid grid-cols-2 gap-3",children:e.slice(0,4).map(m=>{const y=t[m.id],p=y==null?void 0:y.unlocked,j=y==null?void 0:y.treasurePiece,k=y==null?void 0:y.perfectScore;return n.jsxs("button",{onClick:()=>r(m.id),disabled:!p,className:`relative aspect-square rounded-2xl transition-all ${p?"hover:scale-105 active:scale-95 shadow-xl":"opacity-50 grayscale"}`,children:[n.jsx("div",{className:`absolute inset-0 rounded-2xl bg-gradient-to-br ${p?m.theme.background:"from-gray-400 to-gray-500"}`,children:p&&n.jsxs(n.Fragment,{children:[n.jsx("div",{className:"absolute top-1 right-1 text-lg sparkle-animation",children:"✨"}),n.jsx("div",{className:"absolute bottom-1 left-1 text-sm sparkle-animation",style:{animationDelay:"1s"},children:"⭐"})]})}),!p&&n.jsx("div",{className:"absolute inset-0 rounded-2xl bg-black/30 flex items-center justify-center",children:n.jsx("div",{className:"text-4xl",children:"🔒"})}),n.jsxs("div",{className:"relative h-full flex flex-col items-center justify-center p-3",children:[n.jsx("div",{className:"absolute top-1 left-1 w-7 h-7 bg-white/30 rounded-full flex items-center justify-center",children:n.jsx("span",{className:"text-white font-bold text-sm",children:m.id})}),k&&n.jsx("div",{className:"absolute top-1 right-1 text-lg",children:"💯"}),n.jsx("div",{className:`text-5xl mb-1 ${p?"bounce-animation":""}`,children:p?m.emoji:"❓"}),n.jsx("div",{className:"text-white font-bold text-sm text-center mb-1",children:m.name}),n.jsx("div",{className:`px-2 py-0.5 rounded-full text-[10px] font-bold ${p?"bg-white/30":"bg-black/30"} text-white`,children:m.difficulty}),j&&n.jsx("div",{className:"absolute bottom-1 text-2xl pulse-animation",children:m.rewards.treasurePiece}),(y==null?void 0:y.attempts)>0&&n.jsxs("div",{className:"absolute -bottom-1 -right-1 bg-white/90 text-gray-800 rounded-full px-2 py-0.5 text-[10px] font-bold flex items-center gap-1",children:[n.jsxs("span",{children:[y.bestScore,"/3"]}),n.jsx("span",{children:"⭐"})]})]})]},m.id)})}),n.jsx("div",{className:"flex justify-center mt-3",children:e.slice(4,5).map(m=>{const y=t[m.id],p=y==null?void 0:y.unlocked,j=y==null?void 0:y.treasurePiece,k=y==null?void 0:y.perfectScore;return n.jsxs("button",{onClick:()=>r(m.id),disabled:!p,className:`relative w-[calc(50%-6px)] aspect-square rounded-2xl transition-all ${p?"hover:scale-105 active:scale-95 shadow-xl":"opacity-50 grayscale"}`,children:[n.jsxs("div",{className:`absolute inset-0 rounded-2xl bg-gradient-to-br ${p?m.theme.background:"from-gray-400 to-gray-500"}`,children:[p&&n.jsxs(n.Fragment,{children:[n.jsx("div",{className:"absolute top-1 right-1 text-lg sparkle-animation",children:"✨"}),n.jsx("div",{className:"absolute bottom-1 left-1 text-sm sparkle-animation",style:{animationDelay:"1s"},children:"⭐"})]}),!p&&n.jsx("div",{className:"absolute inset-0 rounded-2xl bg-gradient-to-t from-yellow-400/20 to-transparent animate-pulse"})]}),!p&&n.jsx("div",{className:"absolute inset-0 rounded-2xl bg-black/30 flex items-center justify-center",children:n.jsx("div",{className:"text-4xl",children:"🔒"})}),n.jsxs("div",{className:"relative h-full flex flex-col items-center justify-center p-3",children:[n.jsx("div",{className:"absolute top-1 left-1 w-7 h-7 bg-white/30 rounded-full flex items-center justify-center",children:n.jsx("span",{className:"text-white font-bold text-sm",children:m.id})}),k&&n.jsx("div",{className:"absolute top-1 right-1 text-lg",children:"💯"}),n.jsx("div",{className:`text-5xl mb-1 ${p?"bounce-animation":""}`,children:p?m.emoji:"👑"}),n.jsx("div",{className:"text-white font-bold text-sm text-center mb-1",children:m.name}),n.jsx("div",{className:`px-2 py-0.5 rounded-full text-[10px] font-bold ${p?"bg-white/30":"bg-black/30"} text-white`,children:m.difficulty}),j&&n.jsx("div",{className:"absolute bottom-1 text-2xl pulse-animation",children:m.rewards.treasurePiece}),(y==null?void 0:y.attempts)>0&&n.jsxs("div",{className:"absolute -bottom-1 -right-1 bg-white/90 text-gray-800 rounded-full px-2 py-0.5 text-[10px] font-bold flex items-center gap-1",children:[n.jsxs("span",{children:[y.bestScore,"/3"]}),n.jsx("span",{children:"⭐"})]})]})]},m.id)})})]})}),n.jsx("div",{className:"relative z-20 px-4 pb-[calc(env(safe-area-inset-bottom)+3rem)]",children:n.jsx("div",{className:"bg-gradient-to-r from-indigo-500/30 to-purple-500/30 backdrop-blur-lg rounded-2xl shadow-xl border border-white/20",children:n.jsxs("div",{className:"grid grid-cols-3 gap-2 text-center",children:[n.jsxs("div",{className:"relative",children:[n.jsx("div",{className:"text-2xl mb-0.5 filter drop-shadow-lg",children:"💰"}),n.jsx("div",{className:"text-yellow-300 font-black text-lg",children:o.totalCoinsEarned}),n.jsx("div",{className:"text-white/80 text-[10px] font-medium",children:"Total Coins"})]}),n.jsxs("div",{className:"relative",children:[n.jsx("div",{className:"text-2xl mb-0.5 filter drop-shadow-lg",children:"💎"}),n.jsx("div",{className:"text-cyan-300 font-black text-lg",children:o.totalGemsFound}),n.jsx("div",{className:"text-white/80 text-[10px] font-medium",children:"Gems Found"})]}),n.jsxs("div",{className:"relative",children:[n.jsx("div",{className:"text-2xl mb-0.5 filter drop-shadow-lg",children:"📝"}),n.jsxs("div",{className:"text-green-300 font-black text-lg",children:[o.totalCorrectAnswers,"/",o.totalQuestionsAnswered]}),n.jsx("div",{className:"text-white/80 text-[10px] font-medium",children:"Correct"})]})]})})}),l&&n.jsx("div",{className:"fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 px-6",children:n.jsxs("div",{className:"bg-gradient-to-br from-purple-600 to-pink-600 rounded-3xl p-6 max-w-sm w-full shadow-2xl",children:[n.jsx("h3",{className:"text-2xl font-bold text-white text-center mb-6",children:"🏆 Treasure Collection 🏆"}),n.jsx("div",{className:"flex justify-center gap-4 mb-6",children:u.map((m,y)=>n.jsx("div",{className:`text-5xl ${m.collected?"":"opacity-30 grayscale"}`,children:m.collected?m.piece:"❓"},m.id))}),n.jsx("div",{className:"text-center text-white mb-6",children:f===5?n.jsxs("div",{children:[n.jsx("p",{className:"text-lg font-bold mb-2",children:"🎉 COMPLETE! 🎉"}),n.jsx("p",{className:"text-sm opacity-90",children:"You're a true Treasure Master!"})]}):n.jsx("p",{className:"text-sm opacity-90",children:"Collect all 5 pieces to unlock the final treasure!"})}),n.jsx("button",{onClick:()=>c(!1),className:"w-full py-3 bg-white/20 backdrop-blur rounded-2xl text-white font-bold hover:bg-white/30 transition-colors",children:"Close"})]})})]})}function fg({island:e,progress:t,onStart:r,onClose:s,soundOn:a}){const[i,o]=d.useState(!1);d.useEffect(()=>{o(!0)},[]);const l=(t==null?void 0:t.attempts)>0,c=t==null?void 0:t.treasurePiece;t==null||t.perfectScore;const u=(t==null?void 0:t.bestScore)||0,f=()=>{if(a){const m=new Audio("/sounds/start.mp3");m.volume=.5,m.play().catch(()=>{})}r()},x=m=>{const y=Math.floor(m/60),p=m%60;return`${y}:${p.toString().padStart(2,"0")}`};return n.jsxs("div",{className:"fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50 p-4",children:[n.jsx("style",{jsx:!0,children:`
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
      `}),n.jsxs("div",{className:`relative w-full max-w-sm bg-gradient-to-br ${e.theme.background} rounded-2xl shadow-2xl ${i?"slide-up":""}`,children:[n.jsx("div",{className:"relative p-4 pb-2",children:n.jsxs("div",{className:"text-center",children:[n.jsx("div",{className:"text-6xl mb-2 pulse-animation",children:e.emoji}),n.jsx("h2",{className:"text-2xl font-black text-white",children:e.name}),n.jsx("div",{className:"inline-block px-3 py-1 bg-white/20 backdrop-blur rounded-full mt-2",children:n.jsxs("span",{className:"text-white font-bold text-sm",children:["Level ",e.id," • ",e.difficulty]})})]})}),n.jsxs("div",{className:"px-4 py-3 space-y-2",children:[n.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[n.jsxs("div",{className:"bg-black/10 backdrop-blur rounded-xl p-3 text-center",children:[n.jsx("div",{className:"text-white/70 text-xs mb-1",children:"Time"}),n.jsx("div",{className:"text-white font-bold",children:x(e.timeLimit)})]}),n.jsxs("div",{className:"bg-black/10 backdrop-blur rounded-xl p-3 text-center",children:[n.jsx("div",{className:"text-white/70 text-xs mb-1",children:"Questions"}),n.jsx("div",{className:"text-white font-bold",children:Fe.QUESTIONS_PER_ISLAND})]})]}),n.jsxs("div",{className:"bg-black/10 backdrop-blur rounded-xl p-3 flex items-center justify-between",children:[n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx("span",{className:"text-2xl",children:e.rewards.treasurePiece}),n.jsx("span",{className:"text-white font-medium",children:"To Win"})]}),n.jsxs("span",{className:"text-white font-bold",children:[e.requiredCorrect,"/3 Correct"]})]}),n.jsxs("div",{className:"bg-black/10 backdrop-blur rounded-xl p-3",children:[n.jsx("div",{className:"text-white font-bold text-sm mb-2",children:"Rewards"}),n.jsxs("div",{className:"grid grid-cols-4 gap-2 text-center",children:[n.jsxs("div",{children:[n.jsx("div",{className:"text-xl",children:"💰"}),n.jsx("div",{className:"text-white/70 text-xs",children:e.rewards.perCorrectAnswer})]}),n.jsxs("div",{children:[n.jsx("div",{className:"text-xl",children:"💎"}),n.jsxs("div",{className:"text-white/70 text-xs",children:[Math.round(e.rewards.gemChance*100),"%"]})]}),n.jsxs("div",{children:[n.jsx("div",{className:"text-xl",children:"⚡"}),n.jsxs("div",{className:"text-white/70 text-xs",children:["+",e.rewards.speedBonus]})]}),n.jsxs("div",{children:[n.jsx("div",{className:"text-xl",children:"🏆"}),n.jsxs("div",{className:"text-white/70 text-xs",children:["+",e.rewards.perfectBonus]})]})]})]}),l&&n.jsx("div",{className:"bg-black/10 backdrop-blur rounded-xl p-3",children:n.jsxs("div",{className:"flex items-center justify-between",children:[n.jsx("div",{className:"flex gap-1",children:[...Array(3)].map((m,y)=>n.jsx("span",{className:"text-lg",children:y<u?"⭐":"☆"},y))}),n.jsxs("div",{className:"text-white text-sm",children:[n.jsxs("span",{className:"font-bold",children:[u,"/3"]})," • ",t.attempts," tries"]}),c&&n.jsx("div",{className:"text-2xl",children:e.rewards.treasurePiece})]})})]}),n.jsxs("div",{className:"p-4 pt-2 space-y-2",children:[n.jsx("button",{onClick:f,className:"w-full py-3 bg-gradient-to-r from-green-400 to-emerald-500 text-white rounded-xl font-black text-base shadow-lg hover:shadow-xl transition-all hover:scale-[1.02] active:scale-[0.98]",children:n.jsxs("span",{className:"flex items-center justify-center gap-2",children:[n.jsx("span",{className:"text-xl",children:"🏴‍☠️"}),n.jsx("span",{children:l?"Play Again":"Start Adventure"}),n.jsx("span",{className:"text-xl",children:"🏴‍☠️"})]})}),n.jsx("button",{onClick:s,className:"w-full py-2 bg-white/20 backdrop-blur text-white rounded-xl font-bold text-sm hover:bg-white/30 transition-colors",children:"Back to Map"})]})]})]})}function mg({shovelsRemaining:e,showBreak:t=!1}){const[r,s]=d.useState(!1),[a,i]=d.useState(e),o=3;return d.useEffect(()=>{e<a&&(s(!0),setTimeout(()=>s(!1),1e3)),i(e)},[e,a]),n.jsxs("div",{className:"inline-block",children:[n.jsx("style",{jsx:!0,children:`
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
                  `,children:u||f?"⛏️":"🪦"}),f&&n.jsxs(n.Fragment,{children:[n.jsx("div",{className:"absolute inset-0 pointer-events-none",children:n.jsxs("svg",{className:"w-full h-full",viewBox:"0 0 40 40",children:[n.jsx("path",{d:"M20,10 L18,20 L22,30",stroke:"#ff4444",strokeWidth:"2",fill:"none",opacity:"0.8",className:"shovel-crack"}),n.jsx("path",{d:"M15,15 L20,20 L25,18",stroke:"#ff4444",strokeWidth:"1.5",fill:"none",opacity:"0.6",className:"shovel-crack",style:{animationDelay:"0.1s"}})]})}),n.jsxs("div",{className:"absolute inset-0 pointer-events-none",children:[n.jsx("span",{className:"absolute top-0 left-1/2 text-xs shovel-fall",children:"💔"}),n.jsx("span",{className:"absolute top-1/2 left-0 text-xs shovel-fall",style:{animationDelay:"0.2s"},children:"✨"}),n.jsx("span",{className:"absolute top-1/2 right-0 text-xs shovel-fall",style:{animationDelay:"0.3s"},children:"💥"})]})]}),n.jsx("div",{className:"absolute -bottom-1 left-1/2 -translate-x-1/2",children:n.jsx("span",{className:`text-xs font-bold ${u?"text-blue-600":"text-white/30"}`,children:c+1})})]},c)})}),e===0&&n.jsx("span",{className:"text-red-400 text-sm font-bold animate-pulse ml-2",children:"No shovels left!"}),e===1&&n.jsx("span",{className:"text-red-500 text-sm font-bold ml-2",children:"Last chance!"})]})})]})}function hg({island:e,foundGem:t,onComplete:r}){const[s,a]=d.useState("digging"),[i,o]=d.useState(!1),[l,c]=d.useState(!1);return d.useEffect(()=>{(async()=>{await new Promise(f=>setTimeout(f,800)),a("revealing"),o(!0),t&&(await new Promise(f=>setTimeout(f,400)),c(!0)),await new Promise(f=>setTimeout(f,1e3)),a("complete"),await new Promise(f=>setTimeout(f,300)),r()})()},[t,r]),n.jsxs("div",{className:"fixed inset-0 z-40 pointer-events-none flex items-center justify-center",children:[n.jsx("style",{jsx:!0,children:`
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
      `}),s==="digging"&&n.jsxs("div",{className:"relative",children:[n.jsx("div",{className:"text-8xl dig-animation",children:e.visualElements.diggingEmoji}),[...Array(8)].map((u,f)=>n.jsx("div",{className:"dirt-particle text-4xl",style:{"--fly-x":`${(Math.random()-.5)*200}px`,"--fly-y":`${-Math.random()*150-50}px`,left:"50%",top:"60%",animationDelay:`${f*.1}s`},children:"🟫"},f)),n.jsx("div",{className:"absolute -bottom-4 left-1/2 -translate-x-1/2",children:n.jsx("div",{className:"text-6xl opacity-50",children:"💨"})})]}),s==="revealing"&&n.jsxs("div",{className:"relative",children:[i&&n.jsxs("div",{className:"relative",children:[n.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:n.jsx("div",{className:"w-32 h-32 rounded-full bg-yellow-400/30 blur-xl glow-effect"})}),n.jsxs("div",{className:"relative flex items-center justify-center",children:[n.jsx("div",{className:"text-7xl treasure-reveal treasure-float",children:"💰"}),n.jsx("div",{className:"absolute text-5xl coin-spin",style:{left:"-30px"},children:"🪙"}),n.jsx("div",{className:"absolute text-5xl coin-spin",style:{right:"-30px",animationDelay:"0.5s"},children:"🪙"}),n.jsx("div",{className:"absolute text-4xl coin-spin",style:{top:"-30px",animationDelay:"1s"},children:"🪙"})]}),[...Array(6)].map((u,f)=>n.jsx("div",{className:"absolute text-3xl star-burst",style:{left:"50%",top:"50%",transform:`translate(-50%, -50%) rotate(${f*60}deg) translateY(-40px)`,animationDelay:`${f*.1}s`},children:"⭐"},f))]}),l&&n.jsxs("div",{className:"absolute -top-10 left-1/2 -translate-x-1/2",children:[n.jsxs("div",{className:"relative",children:[n.jsx("div",{className:"text-6xl gem-sparkle",children:"💎"}),n.jsx("div",{className:"absolute -top-2 -left-2 text-2xl animate-pulse",children:"✨"}),n.jsx("div",{className:"absolute -top-2 -right-2 text-2xl animate-pulse",style:{animationDelay:"0.3s"},children:"✨"}),n.jsx("div",{className:"absolute -bottom-2 left-1/2 -translate-x-1/2 text-2xl animate-pulse",style:{animationDelay:"0.6s"},children:"✨"})]}),n.jsx("div",{className:"absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap",children:n.jsx("span",{className:"text-cyan-300 font-black text-lg drop-shadow-lg",children:"RARE GEM!"})})]}),n.jsx("div",{className:"absolute -bottom-16 left-1/2 -translate-x-1/2 text-center",children:n.jsx("div",{className:"text-white font-black text-2xl drop-shadow-lg",children:t?"AMAZING FIND!":"TREASURE FOUND!"})})]}),s==="complete"&&n.jsx("div",{className:"relative opacity-0 transition-opacity duration-300",children:n.jsx("div",{className:"text-7xl",children:"✅"})})]})}function pg({island:e,question:t,questionNumber:r,totalQuestions:s,shovelsRemaining:a,timeRemaining:i,coinsEarned:o,gemsFound:l,onAnswer:c,onQuit:u,soundOn:f,setSoundOn:x}){const[m,y]=d.useState(null),[p,j]=d.useState(!1),[k,v]=d.useState(!1),[h,g]=d.useState(!1),[E,P]=d.useState(!1),[z,S]=d.useState(!1),[b,w]=d.useState(!1),N=d.useRef(null);d.useEffect(()=>{y(null),j(!1),v(!1),g(!1),P(!1),w(!1)},[t]);const R=q=>{const B=Math.floor(q/60),L=q%60;return`${B}:${L.toString().padStart(2,"0")}`},F=()=>i<=10?"critical":i<=30?"warning":"normal",Q=q=>{if(b||p)return;y(q),w(!0);const B=q===t.correctIndex;v(B),setTimeout(()=>{if(j(!0),f)if(B){const L=new Audio("/sounds/dig.mp3");L.volume=.5,L.play().catch(()=>{})}else{const L=new Audio("/sounds/wrong.mp3");L.volume=.5,L.play().catch(()=>{})}B&&(g(!0),Math.random()<e.rewards.gemChance&&setTimeout(()=>{if(P(!0),f){const C=new Audio("/sounds/gem.mp3");C.volume=.6,C.play().catch(()=>{})}},800)),setTimeout(()=>{c(q)},B?2e3:1500)},300)},ee=F();return n.jsxs("div",{className:`min-h-screen bg-gradient-to-br ${e.theme.background} relative overflow-hidden`,children:[n.jsx("style",{jsx:!0,children:`
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
      `}),n.jsx("div",{className:"absolute inset-0 pointer-events-none",children:e.visualElements.bgEmojis.map((q,B)=>n.jsx("div",{className:"absolute text-7xl opacity-10 float-animation",style:{top:`${20+B*15}%`,left:`${10+B*18}%`,animationDelay:`${B*.5}s`,animationDuration:`${3+B}s`},children:q},B))}),n.jsxs("div",{className:"relative z-10 px-3 pt-[calc(env(safe-area-inset-top)+4rem)]",children:[n.jsxs("div",{className:"flex justify-between items-center mb-3",children:[n.jsx("button",{onClick:()=>S(!0),className:"w-10 h-10 glass-card rounded-xl shadow-lg flex items-center justify-center hover:scale-105 transition-transform",children:n.jsx("span",{className:"text-xl",children:"⬅️"})}),n.jsx("div",{className:"glass-card rounded-xl px-3 py-1.5 shadow-lg",children:n.jsxs("div",{className:"flex items-center gap-1.5",children:[n.jsx("span",{className:"text-xl",children:e.emoji}),n.jsx("span",{className:"text-gray-800 font-bold text-sm",children:e.name})]})}),n.jsx("button",{onClick:()=>x(!f),className:"w-10 h-10 glass-card rounded-xl shadow-lg flex items-center justify-center hover:scale-105 transition-transform",children:n.jsx("span",{className:"text-xl",children:f?"🔊":"🔇"})})]}),n.jsxs("div",{className:"glass-card rounded-xl p-3 shadow-xl mb-3",children:[n.jsxs("div",{className:"grid grid-cols-4 gap-2",children:[n.jsxs("div",{className:"text-center",children:[n.jsx("div",{className:`text-xl font-black ${ee==="critical"?"text-red-600 time-pulse-critical":ee==="warning"?"text-orange-600":"text-gray-800"}`,children:R(i)}),n.jsx("div",{className:"text-[10px] text-gray-700 font-medium",children:"Time"})]}),n.jsxs("div",{className:"text-center",children:[n.jsxs("div",{className:"text-xl font-black text-gray-800",children:[r,"/",s]}),n.jsx("div",{className:"text-[10px] text-gray-700 font-medium",children:"Question"})]}),n.jsxs("div",{className:"text-center relative",children:[n.jsx("div",{className:"text-xl font-black text-orange-600",children:o}),n.jsx("div",{className:"text-[10px] text-gray-700 font-medium",children:"Coins"}),p&&k&&n.jsx("div",{className:"absolute -top-3 left-1/2 -translate-x-1/2",children:n.jsxs("span",{className:"text-orange-600 font-bold text-xs coin-float",children:["+",e.rewards.perCorrectAnswer]})})]}),n.jsxs("div",{className:"text-center relative",children:[n.jsx("div",{className:"text-xl font-black text-blue-600",children:l}),n.jsx("div",{className:"text-[10px] text-gray-700 font-medium",children:"Gems"}),E&&n.jsx("div",{className:"absolute -top-3 left-1/2 -translate-x-1/2",children:n.jsx("span",{className:"text-blue-600 text-xl gem-sparkle",children:"💎"})})]})]}),n.jsx("div",{className:"mt-2",children:n.jsx("div",{className:"w-full h-1.5 bg-gray-800/20 rounded-full overflow-hidden",children:n.jsx("div",{className:"h-full bg-gradient-to-r from-green-500 to-emerald-600 progress-bar",style:{width:`${(r-1)/s*100}%`}})})})]}),n.jsx("div",{className:"flex justify-center mb-3 pt-2",children:n.jsx(mg,{shovelsRemaining:a,showBreak:p&&!k})})]}),n.jsxs("div",{className:"px-3 pt-8 slide-in",children:[n.jsxs("div",{ref:N,className:`glass-card rounded-2xl shadow-xl p-4 mb-4 ${p&&!k?"wrong-shake":""}`,children:[n.jsx("div",{className:"text-center mb-2",children:n.jsxs("span",{className:"text-xs font-bold text-gray-600 uppercase tracking-wider",children:["Question ",r]})}),n.jsx("h2",{className:"text-lg font-bold text-center text-gray-800 leading-relaxed",children:t.prompt})]}),n.jsx("div",{className:"space-y-2.5",children:t.options.map((q,B)=>{const L=["A","B","C","D"],C=m===B,T=B===t.correctIndex;let _="glass-card option-card",A="border border-gray-800/20";return p&&(T?(_+=" correct-pulse",A="border-2 border-green-500 bg-green-400/20"):C&&!k&&(_+=" wrong-shake",A="border-2 border-red-500 bg-red-400/20"),_+=" disabled"),n.jsx("button",{onClick:()=>Q(B),disabled:b,className:`w-full p-3 rounded-xl shadow-lg ${_} ${A}`,children:n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsx("div",{className:`w-10 h-10 rounded-lg bg-gradient-to-br ${B===0?"from-blue-400 to-blue-500":B===1?"from-green-400 to-green-500":B===2?"from-yellow-400 to-yellow-500":"from-purple-400 to-purple-500"} text-white font-bold text-lg flex items-center justify-center shadow-md`,children:L[B]}),n.jsx("span",{className:"flex-1 text-left font-medium text-gray-800 text-sm",children:q}),p&&T&&n.jsx("span",{className:"text-2xl",children:"✅"}),p&&C&&!k&&n.jsx("span",{className:"text-2xl",children:"❌"})]})},B)})}),p&&n.jsx("div",{className:"mt-3 text-center slide-in",children:n.jsx("p",{className:"text-base font-bold text-gray-800",children:k?`Great job! Let's dig for treasure! ${e.visualElements.diggingEmoji}`:"Oops! Your shovel broke! Try the next question! 💪"})})]}),h&&n.jsx(hg,{island:e,foundGem:E,onComplete:()=>g(!1)}),z&&n.jsx("div",{className:"fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 px-6",children:n.jsxs("div",{className:"bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-6 max-w-sm w-full shadow-2xl slide-in border border-white/10",children:[n.jsxs("div",{className:"text-center mb-6",children:[n.jsx("div",{className:"text-5xl mb-3",children:"🗺️"}),n.jsx("h3",{className:"text-xl font-bold text-white mb-2",children:"Leave the Island?"}),n.jsx("p",{className:"text-white/70",children:"Your progress won't be saved!"})]}),n.jsxs("div",{className:"flex gap-3",children:[n.jsx("button",{onClick:()=>S(!1),className:"flex-1 py-3 bg-gradient-to-r from-green-400 to-emerald-500 text-white rounded-2xl font-bold shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]",children:"Keep Playing"}),n.jsx("button",{onClick:u,className:"flex-1 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-2xl font-bold shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]",children:"Leave Island"})]})]})})]})}function xg({island:e,session:t,earnedTreasure:r,onRetry:s,onContinue:a,soundOn:i}){const[o,l]=d.useState(0),[c,u]=d.useState(!1),[f,x]=d.useState(!1),m=t.correctAnswers===Fe.QUESTIONS_PER_ISLAND,y=cg(t.correctAnswers,e.id);return d.useEffect(()=>{const p=t.coinsEarned,j=2e3,k=30,v=p/k;let h=0;const g=setInterval(()=>{h+=v,h>=p?(l(p),clearInterval(g),r&&setTimeout(()=>u(!0),500),setTimeout(()=>x(!0),r?1500:500)):l(Math.floor(h))},j/k);return()=>clearInterval(g)},[t.coinsEarned,r]),n.jsxs("div",{className:`fixed inset-0 bg-gradient-to-br ${e.theme.background} overflow-hidden flex flex-col`,children:[n.jsx("style",{jsx:!0,children:`
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
      `}),n.jsx("div",{className:"absolute inset-0 pointer-events-none",children:m&&[...Array(10)].map((p,j)=>n.jsx("div",{className:"absolute confetti-fall",style:{left:`${Math.random()*100}%`,animationDelay:`${Math.random()*3}s`,fontSize:`${20+Math.random()*20}px`},children:["🎉","⭐","🎊","✨"][Math.floor(Math.random()*4)]},j))}),n.jsxs("div",{className:"relative z-10 flex-1 flex flex-col items-center justify-center px-4 py-4",children:[n.jsxs("div",{className:"mb-3 text-center slide-up",children:[n.jsx("h1",{className:"text-2xl font-black text-white mb-2",children:r?"TREASURE FOUND!":"ISLAND COMPLETE!"}),n.jsx("div",{className:"text-5xl bounce-animation",children:r?e.rewards.treasurePiece:"🏝️"})]}),n.jsxs("div",{className:"glass-card rounded-2xl p-3 max-w-md w-full mb-2 slide-up",style:{animationDelay:"0.2s",background:"rgba(46, 46, 32, 0.25)"},children:[n.jsxs("div",{className:"text-center mb-2",children:[n.jsxs("div",{className:"text-3xl font-black text-white mb-1",children:[t.correctAnswers,"/",Fe.QUESTIONS_PER_ISLAND]}),n.jsx("div",{className:"text-white/80 font-medium",children:"Questions Correct"})]}),f&&n.jsx("div",{className:"flex justify-center gap-2 mb-2",children:[...Array(3)].map((p,j)=>n.jsx("div",{className:`text-3xl ${j<t.correctAnswers?"star-pop":""}`,style:{animationDelay:`${j*.2}s`},children:j<t.correctAnswers?"⭐":"☆"},j))}),c&&r&&n.jsxs("div",{className:"text-center mb-2",children:[n.jsx("div",{className:"text-5xl treasure-shine mb-1",children:e.rewards.treasurePiece}),n.jsx("div",{className:"text-white font-bold text-lg",children:"Treasure Piece Earned!"})]}),n.jsxs("div",{className:"grid grid-cols-2 gap-2 mb-2",children:[n.jsxs("div",{className:"glass-card rounded-2xl p-4 text-center",children:[n.jsx("div",{className:"text-4xl mb-1",children:"🪙"}),n.jsx("div",{className:"text-3xl font-black text-yellow-300",children:o}),n.jsx("div",{className:"text-white/70 text-sm",children:"Coins Earned"})]}),n.jsxs("div",{className:"glass-card rounded-2xl p-4 text-center",children:[n.jsx("div",{className:"text-4xl mb-2",children:"💎"}),n.jsx("div",{className:"text-3xl font-black text-cyan-300",children:t.gemsFound}),n.jsx("div",{className:"text-white/70 text-sm",children:"Gems Found"})]})]}),n.jsx("div",{className:"text-center p-4 bg-white/10 rounded-1xl",children:n.jsx("p",{className:"text-white font-medium text-lg",children:y})}),m&&n.jsx("div",{className:"mt-4 text-center",children:n.jsx("div",{className:"inline-block px-6 py-3 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full",children:n.jsx("span",{className:"text-white font-black text-lg",children:"💯 PERFECT SCORE! 💯"})})})]}),n.jsxs("div",{className:"space-y-3 w-full max-w-md slide-up",style:{animationDelay:"0.4s"},children:[!r&&n.jsx("button",{onClick:s,className:"w-full py-4 bg-gradient-to-r from-orange-400 to-red-500 text-white rounded-2xl font-black text-lg shadow-xl hover:shadow-2xl transition-all hover:scale-[1.02] active:scale-[0.98]",children:n.jsxs("div",{className:"flex items-center justify-center gap-3",children:[n.jsx("span",{className:"text-2xl",children:"🔄"}),n.jsx("span",{children:"Try Again"})]})}),n.jsx("button",{onClick:a,className:"w-full py-3 bg-gradient-to-r from-white to-gray-100 text-gray-800 rounded-2xl font-black text-lg shadow-xl hover:shadow-2xl transition-all hover:scale-[1.02] active:scale-[0.98]",children:n.jsxs("div",{className:"flex items-center justify-center gap-3",children:[n.jsx("span",{className:"text-2xl",children:"🗺️"}),n.jsx("span",{children:"Back to Map"})]})})]})]})]})}function gg({totalStats:e,onContinue:t,soundOn:r}){const[s,a]=d.useState(!1),[i,o]=d.useState(!1),[l,c]=d.useState(!1),[u,f]=d.useState(!1),[x,m]=d.useState(!1);return d.useEffect(()=>{(async()=>{await new Promise(p=>setTimeout(p,500)),a(!0),await new Promise(p=>setTimeout(p,1e3)),o(!0),m(!0),await new Promise(p=>setTimeout(p,800)),c(!0),await new Promise(p=>setTimeout(p,1e3)),f(!0)})()},[]),n.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-purple-600 via-pink-600 to-yellow-500 relative overflow-hidden",children:[n.jsx("style",{jsx:!0,children:`
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
      `}),x&&n.jsx("div",{className:"fixed inset-0 pointer-events-none",children:[...Array(15)].map((y,p)=>n.jsx("div",{className:"absolute firework",style:{left:`${20+Math.random()*60}%`,top:`${20+Math.random()*60}%`,animationDelay:`${Math.random()*2}s`,fontSize:`${40+Math.random()*40}px`},children:["✨","⭐","💫","🌟"][Math.floor(Math.random()*4)]},p))}),n.jsx("div",{className:"fixed inset-0 pointer-events-none",children:[...Array(20)].map((y,p)=>n.jsx("div",{className:"absolute coin-rain",style:{left:`${Math.random()*100}%`,animationDelay:`${Math.random()*3}s`,animationDuration:`${3+Math.random()*2}s`,fontSize:`${20+Math.random()*20}px`},children:["🪙","💰","💎"][Math.floor(Math.random()*3)]},p))}),n.jsxs("div",{className:"relative z-10 flex flex-col items-center justify-center min-h-screen px-6",children:[n.jsxs("div",{className:"text-center mb-8",children:[n.jsx("h1",{className:"text-6xl font-black text-white mb-4",children:"LEGENDARY!"}),n.jsx("div",{className:"text-8xl bounce-animation",children:"👑"})]}),s&&n.jsxs("div",{className:`relative mb-8 ${s?"chest-appear":""}`,children:[n.jsx("div",{className:`text-[150px] ${i?"chest-open":""}`,children:"📦"}),i&&n.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:Zn.map((y,p)=>n.jsx("div",{className:"absolute text-6xl float-animation treasure-glow",style:{transform:`rotate(${p*72}deg) translateY(-100px)`,animationDelay:`${p*.2}s`},children:y.rewards.treasurePiece},y.id))})]}),l&&n.jsxs("div",{className:"glass-card rounded-3xl p-6 max-w-md w-full mb-6",children:[n.jsx("h2",{className:"text-2xl font-black text-white text-center mb-6",children:"🏆 FINAL TREASURE UNLOCKED! 🏆"}),n.jsx("div",{className:"bg-gradient-to-r from-yellow-400 to-amber-500 rounded-2xl p-4 mb-4",children:n.jsxs("div",{className:"text-center",children:[n.jsx("div",{className:"text-5xl mb-2",children:"💰"}),n.jsx("div",{className:"text-4xl font-black text-white",children:Fe.FINAL_TREASURE_REWARD}),n.jsx("div",{className:"text-white/90 font-medium",children:"Bonus Coins!"})]})}),n.jsxs("div",{className:"grid grid-cols-2 gap-3 mb-4",children:[n.jsxs("div",{className:"glass-card rounded-xl p-3 text-center",children:[n.jsx("div",{className:"text-3xl mb-1",children:"🏝️"}),n.jsx("div",{className:"text-2xl font-black text-white",children:"5/5"}),n.jsx("div",{className:"text-white/70 text-xs",children:"Islands"})]}),n.jsxs("div",{className:"glass-card rounded-xl p-3 text-center",children:[n.jsx("div",{className:"text-3xl mb-1",children:"🧩"}),n.jsx("div",{className:"text-2xl font-black text-white",children:"5/5"}),n.jsx("div",{className:"text-white/70 text-xs",children:"Treasures"})]}),n.jsxs("div",{className:"glass-card rounded-xl p-3 text-center",children:[n.jsx("div",{className:"text-3xl mb-1",children:"💰"}),n.jsx("div",{className:"text-2xl font-black text-yellow-300",children:e.totalCoinsEarned+Fe.FINAL_TREASURE_REWARD}),n.jsx("div",{className:"text-white/70 text-xs",children:"Total Coins"})]}),n.jsxs("div",{className:"glass-card rounded-xl p-3 text-center",children:[n.jsx("div",{className:"text-3xl mb-1",children:"💎"}),n.jsx("div",{className:"text-2xl font-black text-cyan-300",children:e.totalGemsFound}),n.jsx("div",{className:"text-white/70 text-xs",children:"Total Gems"})]})]}),u&&n.jsxs("div",{className:"text-center p-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl",children:[n.jsx("div",{className:"text-3xl mb-2",children:"🏆"}),n.jsx("div",{className:"text-xl font-black text-white title-shine",children:Fe.FINAL_TREASURE_TITLE}),n.jsx("div",{className:"text-white/90 text-sm mt-1",children:"New Title Unlocked!"})]})]}),l&&n.jsx("button",{onClick:t,className:"w-full max-w-md py-4 bg-gradient-to-r from-white to-gray-100 text-gray-800 rounded-2xl font-black text-lg shadow-xl hover:shadow-2xl transition-all hover:scale-[1.02] active:scale-[0.98]",children:n.jsxs("div",{className:"flex items-center justify-center gap-3",children:[n.jsx("span",{className:"text-2xl",children:"🎉"}),n.jsx("span",{children:"Complete Adventure"}),n.jsx("span",{className:"text-2xl",children:"🎉"})]})}),n.jsx("div",{className:"absolute inset-0 pointer-events-none",children:[...Array(10)].map((y,p)=>n.jsx("div",{className:"absolute text-2xl sparkle-animation",style:{left:`${Math.random()*100}%`,top:`${Math.random()*100}%`,animationDelay:`${Math.random()*2}s`},children:"✨"},p))})]})]})}function vg({onBack:e}){const{coins:t,xp:r,level:s,soundOn:a,addCoins:i,addXp:o,setSoundOn:l}=Jl(),[c,u]=d.useState("map"),[f,x]=d.useState(null),[m,y]=d.useState([]),[p,j]=d.useState(()=>{const C=localStorage.getItem(Fe.STORAGE_KEYS.PROGRESS);if(C)try{return JSON.parse(C)}catch(T){console.error("Failed to load progress:",T)}return Zn.reduce((T,_)=>(T[_.id]={unlocked:_.id===1,completed:!1,treasurePiece:!1,perfectScore:!1,bestScore:0,attempts:0},T),{})}),[k,v]=d.useState({islandId:null,questions:[],currentQuestionIndex:0,shovelsRemaining:Fe.SHOVELS_PER_ISLAND,correctAnswers:0,wrongAnswers:0,timeRemaining:300,gemsFound:0,coinsEarned:0,questionTimes:[],startTime:null}),[h,g]=d.useState(()=>{const C=localStorage.getItem(Fe.STORAGE_KEYS.STATS);if(C)try{return JSON.parse(C)}catch(T){console.error("Failed to load stats:",T)}return{totalCoinsEarned:0,totalGemsFound:0,totalTreasurePieces:0,totalQuestionsAnswered:0,totalCorrectAnswers:0,islandsCompleted:0,gameCompleted:!1}}),E=d.useRef(null),P=d.useRef(null);d.useEffect(()=>(z(),()=>{E.current&&clearInterval(E.current)}),[]),d.useEffect(()=>{localStorage.setItem(Fe.STORAGE_KEYS.PROGRESS,JSON.stringify(p))},[p]),d.useEffect(()=>{localStorage.setItem(Fe.STORAGE_KEYS.STATS,JSON.stringify(h))},[h]),d.useEffect(()=>(c==="playing"&&k.timeRemaining>0?E.current=setInterval(()=>{v(C=>{const T=C.timeRemaining-1;return T<=0?(R(),{...C,timeRemaining:0}):(T===30&&a&&B(Fe.SOUNDS.TICK,.6),{...C,timeRemaining:T})})},1e3):E.current&&clearInterval(E.current),()=>{E.current&&clearInterval(E.current)}),[c,k.timeRemaining,a]);const z=async()=>{try{const T=await(await fetch("/data/quiz_questions_bank.csv")).text(),{data:_}=dr.parse(T,{header:!0,skipEmptyLines:!0,transformHeader:M=>M.trim().toLowerCase()}),A=_.map((M,D)=>{var ie;const X=[M.option1,M.option2,M.option3,M.option4].map(I=>(I||"").trim()).filter(Boolean);if(X.length<4)return null;let J={a:0,b:1,c:2,d:3}[(ie=M.answer)==null?void 0:ie.toLowerCase()];return J===void 0&&(J=X.findIndex(I=>I.toLowerCase()===(M.answer||"").toLowerCase())),J===-1&&(J=0),{id:M.id||`q_${D}`,prompt:(M.question||"").trim(),options:X,correctIndex:J,category:(M.category||M.subject||"general").trim(),difficulty:(M.difficulty||"medium").toLowerCase()}}).filter(Boolean);y(A)}catch(C){console.error("Failed to load questions:",C)}},S=C=>{const T=ln(C);if(!T||m.length===0)return[];let _=m.filter(M=>T.questionDifficulty.includes(M.difficulty));return _.length<Fe.QUESTIONS_PER_ISLAND&&(_=m),[..._].sort(()=>Math.random()-.5).slice(0,Fe.QUESTIONS_PER_ISLAND)},b=C=>{if(!lg(C,p)){a&&B("/sounds/locked.mp3",.5),L([100]);return}x(C),u("island-detail"),a&&B("/sounds/select.mp3",.5)},w=C=>{const T=ln(C),_=S(C);v({islandId:C,questions:_,currentQuestionIndex:0,shovelsRemaining:Fe.SHOVELS_PER_ISLAND,correctAnswers:0,wrongAnswers:0,timeRemaining:T.timeLimit,gemsFound:0,coinsEarned:0,questionTimes:[],startTime:Date.now()}),P.current=Date.now(),u("playing"),a&&B("/sounds/start.mp3",.6)},N=C=>{const T=k.questions[k.currentQuestionIndex],_=C===T.correctIndex,A=(Date.now()-P.current)/1e3;v(M=>{const D={...M,questionTimes:[...M.questionTimes,A]};if(_){const X=ln(M.islandId);let $=X.rewards.perCorrectAnswer;A<Fe.SPEED_BONUS_THRESHOLD&&($+=X.rewards.speedBonus),Math.random()<X.rewards.gemChance&&($+=X.rewards.gemBonus,D.gemsFound=M.gemsFound+1),D.correctAnswers=M.correctAnswers+1,D.coinsEarned=M.coinsEarned+$}else D.wrongAnswers=M.wrongAnswers+1,D.shovelsRemaining=M.shovelsRemaining-1,L([200]);return D}),setTimeout(()=>{const M=k.currentQuestionIndex+1;k.shovelsRemaining===0&&!_||M>=Fe.QUESTIONS_PER_ISLAND?F():(v(D=>({...D,currentQuestionIndex:M})),P.current=Date.now())},_?2e3:1500)},R=()=>{F()},F=()=>{const C=ln(k.islandId),T=k.correctAnswers>=C.requiredCorrect,_=k.correctAnswers===Fe.QUESTIONS_PER_ISLAND;let A=k.coinsEarned;_&&(A+=C.rewards.perfectBonus),T&&(A+=C.rewards.completionCoins),j(D=>{const X={...D},$=X[k.islandId];if($.completed=!0,$.attempts+=1,T&&!$.treasurePiece){$.treasurePiece=!0;const J=Zn.find(ie=>ie.id===k.islandId+1);J&&X[J.id]&&(X[J.id].unlocked=!0,a&&setTimeout(()=>B(Fe.SOUNDS.ISLAND_UNLOCK,.7),2e3))}return _&&($.perfectScore=!0),$.bestScore=Math.max($.bestScore||0,k.correctAnswers),X}),g(D=>({...D,totalCoinsEarned:D.totalCoinsEarned+A,totalGemsFound:D.totalGemsFound+k.gemsFound,totalTreasurePieces:D.totalTreasurePieces+(T&&!p[k.islandId].treasurePiece?1:0),totalQuestionsAnswered:D.totalQuestionsAnswered+(k.correctAnswers+k.wrongAnswers),totalCorrectAnswers:D.totalCorrectAnswers+k.correctAnswers,islandsCompleted:D.islandsCompleted+(p[k.islandId].completed?0:1)})),i(A),o(k.correctAnswers),v(D=>({...D,coinsEarned:A})),a&&B(T?Fe.SOUNDS.TREASURE_FOUND:Fe.SOUNDS.ISLAND_COMPLETE,.7),Zn.every(D=>{var X;return((X=p[D.id])==null?void 0:X.treasurePiece)===!0})&&!h.gameCompleted?(g(D=>({...D,gameCompleted:!0})),setTimeout(()=>{u("final-treasure"),a&&B(Fe.SOUNDS.FINAL_TREASURE,.8)},3e3)):u("reward")},Q=()=>{w(k.islandId)},ee=()=>{u("map"),x(null)},q=()=>{i(Fe.FINAL_TREASURE_REWARD),o(10),g(C=>({...C,totalCoinsEarned:C.totalCoinsEarned+Fe.FINAL_TREASURE_REWARD})),u("map")},B=(C,T=.5)=>{try{const _=new Audio(C);_.volume=T,_.play()}catch(_){console.error("Failed to play sound:",_)}},L=C=>{navigator.vibrate&&navigator.vibrate(C)};switch(d.useEffect(()=>(document.body.classList.add("hide-bottom-nav"),()=>{document.body.classList.remove("hide-bottom-nav")}),[]),c){case"map":return n.jsx(ug,{islands:Zn,islandProgress:p,onSelectIsland:b,onBack:e,soundOn:a,setSoundOn:l,totalStats:h});case"island-detail":return n.jsx(fg,{island:ln(f),progress:p[f],onStart:()=>w(f),onClose:()=>u("map"),soundOn:a});case"playing":return n.jsx(pg,{island:ln(k.islandId),question:k.questions[k.currentQuestionIndex],questionNumber:k.currentQuestionIndex+1,totalQuestions:Fe.QUESTIONS_PER_ISLAND,shovelsRemaining:k.shovelsRemaining,timeRemaining:k.timeRemaining,coinsEarned:k.coinsEarned,gemsFound:k.gemsFound,onAnswer:N,onQuit:()=>u("map"),soundOn:a,setSoundOn:l});case"reward":return n.jsx(xg,{island:ln(k.islandId),session:k,earnedTreasure:k.correctAnswers>=ln(k.islandId).requiredCorrect,onRetry:Q,onContinue:ee,soundOn:a});case"final-treasure":return n.jsx(gg,{totalStats:h,onContinue:q,soundOn:a});default:return null}}const yg=[{name:"General Knowledge",questions:50,icon:"🧠",color:"#7C3AED"},{name:"Artificial Intelligence",questions:28,icon:"🤖",color:"#10B981"},{name:"Fun facts",questions:30,icon:"🎉",color:"#EF4444"},{name:"Science",questions:45,icon:"🧪",color:"#F59E0B"},{name:"History",questions:42,icon:"🏺",color:"#2563EB"},{name:"Geography",questions:38,icon:"🗺️",color:"#FACC15"}],xm=yg.slice(0,6),Xi=360/xm.length;function bg({onModeSelect:e,onNavigateHome:t}){return n.jsx("div",{className:"fixed inset-0 bg-base-bg text-base-text overflow-hidden",children:n.jsxs("div",{className:"h-full overflow-y-auto mx-auto max-w-md px-4 pt-[calc(env(safe-area-inset-top)+5rem)] pb-[calc(env(safe-area-inset-bottom)+5.25rem)]",children:[n.jsx("header",{className:"flex items-center mb-8",children:n.jsx("h1",{className:"text-center text-xl font-bold w-full",children:"Choose a quiz mode"})}),n.jsxs("div",{className:"space-y-8",children:[n.jsxs("button",{onClick:()=>e("classic"),className:"w-full relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-400 to-blue-500 p-8 text-left shadow-lg hover:shadow-xl transition-all active:scale-[0.98]",children:[n.jsx("div",{className:"absolute top-0 right-0 w-32 h-32 opacity-30",children:n.jsxs("svg",{viewBox:"0 0 100 100",className:"w-full h-full animate-spin",style:{animationDuration:"20s"},children:[xm.map((r,s)=>{const a=s*Xi,i=a+Xi,o=Xi>180?1:0,l=Math.PI*a/180,c=Math.PI*i/180,u=50+40*Math.cos(l),f=50-40*Math.sin(l),x=50+40*Math.cos(c),m=50-40*Math.sin(c);return n.jsx("path",{d:`M50,50 L${u},${f} A40,40 0 ${o} 0 ${x},${m} Z`,fill:r.color,stroke:"white",strokeWidth:"0.5"},s)}),n.jsx("circle",{cx:"50",cy:"50",r:"8",fill:"white"})]})}),n.jsx("div",{className:"absolute top-4 left-8 text-3xl opacity-60",children:"🏆"}),n.jsx("div",{className:"absolute top-12 right-16 text-xl opacity-40",children:"⭐"}),n.jsx("div",{className:"absolute bottom-6 left-6 text-2xl opacity-50",children:"🎲"}),n.jsx("div",{className:"absolute bottom-4 right-12 text-3xl opacity-60",children:"🍪"}),n.jsx("div",{className:"absolute top-1/2 left-4 text-lg opacity-40",children:"🥨"}),n.jsx("h2",{className:"text-5xl font-black text-white mb-10 relative z-10",style:{transform:"translateX(-20px)"},children:"CLASSIC"})]}),n.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[n.jsxs("button",{onClick:()=>e("survival"),className:"aspect-square rounded-3xl bg-gradient-to-br from-yellow-400 to-orange-400 p-4 text-left hover:shadow-xl transition-all active:scale-[0.98] relative overflow-hidden",children:[n.jsx("div",{className:"text-2xl mb-2",children:"💀"}),n.jsx("h4",{className:"text-lg font-black text-white",children:"SURVIVAL"})]}),n.jsxs("button",{onClick:()=>e("treasureHunt"),className:"aspect-square rounded-3xl bg-gradient-to-br from-purple-400 to-green-500 p-4 text-left hover:shadow-xl transition-all active:scale-[0.98] relative overflow-hidden",children:[n.jsxs("div",{className:"absolute inset-0 opacity-20",children:[n.jsx("div",{className:"absolute top-2 right-2 text-4xl animate-pulse",children:"🏝️"}),n.jsx("div",{className:"absolute bottom-2 left-2 text-3xl animate-bounce",style:{animationDelay:"0.5s"},children:"⛏️"}),n.jsx("div",{className:"absolute top-1/2 right-4 text-2xl animate-pulse",style:{animationDelay:"1s"},children:"💎"})]}),n.jsx("div",{className:"text-2xl mb-2 relative z-10",children:"🏴‍☠️"}),n.jsx("h4",{className:"text-lg font-black text-white relative z-10",children:"TREASURE HUNT"}),n.jsx("div",{className:"absolute bottom-2 right-2",children:n.jsx("span",{className:"text-xs bg-white/20 px-2 py-1 rounded-full text-white font-bold",children:"NEW!"})})]}),n.jsxs("button",{disabled:!0,className:"aspect-square rounded-3xl bg-gradient-to-br from-pink-500 to-purple-500 p-4 text-left opacity-60",children:[n.jsx("div",{className:"text-2xl mb-2",children:"⚔️"}),n.jsx("h4",{className:"text-lg font-black text-white",children:"SURVIVAL ARENA"})]}),n.jsxs("button",{disabled:!0,className:"aspect-square rounded-3xl bg-gradient-to-br from-blue-400 to-cyan-400 p-4 text-left opacity-60",children:[n.jsx("div",{className:"text-2xl mb-2",children:"📱"}),n.jsx("h4",{className:"text-lg font-black text-white",children:"TRIVIA VIDEO"})]})]})]})]})})}function wg(){const[e,t]=d.useState(null),r=wt(),s=o=>{o==="classic"?t("classic"):o==="survival"?t("survival"):o==="treasureHunt"&&t("treasureHunt")},a=()=>{r("/")},i=()=>{t(null)};return e==="classic"?n.jsx(rg,{onBack:i}):e==="survival"?n.jsx(og,{onBack:i}):e==="treasureHunt"?n.jsx(vg,{onBack:i}):n.jsx(bg,{onModeSelect:s,onNavigateHome:a})}const jg=({session:e,mode:t,category:r,difficulty:s,timerConfig:a,onComplete:i,onQuit:o})=>{const[l,c]=d.useState(0),[u,f]=d.useState([]),[x,m]=d.useState([]),[y,p]=d.useState([]),[j,k]=d.useState(!1),[v,h]=d.useState(null),[g,E]=d.useState(Date.now()),[P,z]=d.useState(!1),[S,b]=d.useState(!1),[w,N]=d.useState({}),[R,F]=d.useState({}),[Q,ee]=d.useState([]);d.useState(!0);const[q,B]=d.useState(null),[L,C]=d.useState([]),[T,_]=d.useState(0),[A,M]=d.useState(0),[D,X]=d.useState(!1),[$,J]=d.useState(!1),[ie,I]=d.useState(""),[O,W]=d.useState(!1),[V,te]=d.useState(!1),[K,Y]=d.useState(!0),[ne,U]=d.useState(!1),[H,Z]=d.useState(0),[ae,ke]=d.useState(0),[fe,me]=d.useState(0),[Se,Re]=d.useState(null),[Te,he]=d.useState(0),we=d.useRef(null),Ce=d.useRef(null),_e=t==="practice",Ke=u[l],pt=de=>{try{const ce=new Audio(de);ce.volume=.6,ce.play()}catch{console.log("Sound not available:",de)}},it=[{id:1,category:"General Knowledge",difficulty:"medium",prompt:"Which element has the atomic number 1?",options:["Helium","Carbon","Hydrogen","Oxygen"],answerIndex:2,explanation:"Hydrogen is the first element on the periodic table with atomic number 1!"},{id:2,category:"General Knowledge",difficulty:"medium",prompt:"What is the largest ocean on Earth?",options:["Atlantic","Pacific","Indian","Arctic"],answerIndex:1,explanation:"The Pacific Ocean covers about one-third of Earth's surface!"},{id:3,category:"General Knowledge",difficulty:"easy",prompt:"What color do you get when you mix red and yellow?",options:["Purple","Orange","Green","Pink"],answerIndex:1,explanation:"Red and yellow make orange - like a beautiful sunset!"}],Pe=e&&e.questions&&Array.isArray(e.questions)&&e.questions.length>0?e.questions:it,Me=Pe[l]||Pe[0]||it[0],Je=Pe.length;d.useEffect(()=>{Pe.length>0&&(f(new Array(Pe.length).fill(null)),m(new Array(Pe.length).fill(!1)),ee(new Array(Pe.length).fill(!1)),p(new Array(Pe.length).fill((a==null?void 0:a.seconds)||45)))},[Pe.length,a==null?void 0:a.seconds]);const Yr=()=>{if(P){I("Once per quiz"),setTimeout(()=>I(""),1e3);return}if(Ke!==null){I("Already answered"),setTimeout(()=>I(""),1e3);return}if(!Me)return;const ce=[0,1,2,3].filter(ve=>ve!==Me.answerIndex).sort(()=>Math.random()-.5).slice(0,2);N({...w,[l]:ce}),z(!0)},re=()=>{if(S){I("Once per quiz"),setTimeout(()=>I(""),1e3);return}if(Ke!==null){I("Already answered"),setTimeout(()=>I(""),1e3);return}if(!Me)return;const de=Me.answerIndex,ce=[0,0,0,0],ve=40+Math.floor(Math.random()*31);ce[de]=ve;let Ve=100-ve;const Ie=[0,1,2,3].filter(He=>He!==de);for(let He=0;He<Ie.length-1;He++){const Ue=Math.min(Ve-(Ie.length-1-He),Ve/2),Ut=Math.floor(Math.random()*(Ue+1));ce[Ie[He]]=Ut,Ve-=Ut}ce[Ie[Ie.length-1]]=Ve,F({...R,[l]:ce}),b(!0)},ue=d.useCallback((de,ce)=>{if(!Me||_e&&Q[l]||w[l]&&w[l].includes(de))return;const ve=[...u];ve[l]=u[l]===de?null:de,f(ve),E(Date.now()),ve[l]!==null&&(Y(!1),clearInterval(Ce.current));const Ve=ve[l]===Me.answerIndex;if(Ve){const Ie=fe+1;if(me(Ie),_(He=>He+1),M(0),_e){Z(Ut=>Ut+1);const He=10;ke(Ut=>Ut+He);let Ue=null;if(l===0&&L.length===0)Ue={emoji:"🎯",message:"Perfect start! You're a natural!"};else if(T===2)Ue={emoji:"🔥",message:"2 in a row! Keep it up!"};else if(T===3)Ue={emoji:"⚡",message:"3 streak! You're on fire!"};else if(T===5)Ue={emoji:"🚀",message:"5 streak! Unstoppable!"};else if(T===10)Ue={emoji:"👑",message:"10 streak! Legendary!"};else if(L[L.length-1]===!1)Ue={emoji:"💪",message:"Great recovery! Back on track!"};else if(l===Math.floor(Je*.25)-1)Ue={emoji:"🎬",message:"25% done! Looking good!"};else if(l===Math.floor(Je*.5)-1)Ue={emoji:"⭐",message:"Halfway there! Keep going!"};else if(l===Math.floor(Je*.75)-1)Ue={emoji:"🏁",message:"Almost done! Final push!"};else{const Ut=[{emoji:"✨",message:"Excellent!"},{emoji:"🎉",message:"Well done!"},{emoji:"💯",message:"Perfect!"},{emoji:"🌟",message:"Brilliant!"}];Ue=Ut[Math.floor(Math.random()*Ut.length)]}setTimeout(()=>{B(Ue),setTimeout(()=>B(null),3e3)},2e3),pt("/sounds/correct.mp3"),setTimeout(()=>pt("/sounds/coin.mp3"),500),te(!0),setTimeout(()=>te(!1),2e3),Re({type:"correct",stars:1,coins:10}),setTimeout(()=>Re(null),2e3)}}else if(ve[l]!==null&&(me(0),_(0),M(Ie=>Ie+1),_e)){let Ie=null;if(l===0&&L.length===0)Ie={emoji:"💡",message:"No worries! Let's learn together!"};else if(T>=3)Ie={emoji:"💫",message:"Good run! Keep trying!"};else if(A===2)Ie={emoji:"🤗",message:"It's okay! Take your time!"};else if(A>=3)Ie={emoji:"💪",message:"Don't give up! You've got this!"};else{const He=[{emoji:"🤔",message:"Almost there!"},{emoji:"💭",message:"Good try!"},{emoji:"🎯",message:"Next one!"}];Ie=He[Math.floor(Math.random()*He.length)]}setTimeout(()=>{B(Ie),setTimeout(()=>B(null),3e3)},1e3),pt("/sounds/wrong.mp3")}if(C(Ie=>[...Ie.slice(-2),Ve]),ve[l]!==null&&x[l]){const Ie=[...x];Ie[l]=!1,m(Ie)}_e&&ve[l]!==null&&(W(!0),ee(Ie=>{const He=[...Ie];return He[l]=!0,He})),!_e&&ve[l]!==null&&(clearTimeout(we.current),we.current=setTimeout(()=>{l<Je-1?be():(X(!0),k(!0))},5e3))},[Me,_e,Q,l,u,x,Je,fe,w]),Ae=()=>{E(Date.now()),l>0&&(clearInterval(Ce.current),Y(!1),c(de=>de-1),W(!1),_e&&u[l-1]!==null&&setTimeout(()=>W(!0),100))},be=()=>{if(E(Date.now()),clearInterval(Ce.current),Ke===null){const de=[...x];de[l]=!0,m(de),me(0)}Y(!1),W(!1),l<Je-1?(c(de=>de+1),_e&&u[l+1]!==null?setTimeout(()=>W(!0),100):setTimeout(()=>Y(!0),100)):X(!0)},Ge=()=>{E(Date.now());const de=[...x];de[l]=!0,m(de),me(0),be()},ge=()=>{const de=Pe.reduce((ce,ve,Ve)=>ce+(u[Ve]===ve.answerIndex?1:0),0);if(_e)i&&i({questions:Pe,answers:u,skipped:x,correct:de,total:Je,mode:t,category:r,difficulty:s,earnedStars:H,earnedCoins:ae,finalStreak:fe});else{const ce=de*10;he(ce),U(!0),setTimeout(()=>{pt("/sounds/coin.mp3"),te(!0),setTimeout(()=>te(!1),3e3)},1e3)}},oe=()=>{i&&i({questions:Pe,answers:u,skipped:x,correct:Pe.reduce((de,ce,ve)=>de+(u[ve]===ce.answerIndex?1:0),0),total:Je,mode:t,category:r,difficulty:s,earnedStars:0,earnedCoins:Te,finalStreak:fe})};d.useEffect(()=>{if(!(j||v!==null||D||!K||u[l]!==null))return Ce.current=setInterval(()=>{p(de=>{const ce=[...de],ve=ce[l];return ve<=1?(clearInterval(Ce.current),l===Je-1?(Date.now()-g>=5e3&&X(!0),ce):(h(l),ce)):(ce[l]=ve-1,ce)})},1e3),()=>clearInterval(Ce.current)},[j,v,l,D,Je,K,u,g]),d.useEffect(()=>{u[l]===null&&!D&&!v?Y(!0):Y(!1)},[l,u,D,v]);const le=de=>{const ce=Math.floor(de/60),ve=de%60;return`${ce}:${ve.toString().padStart(2,"0")}`},pe=(l+1)/Pe.length*100,je=u.filter(de=>de!==null).length,xe=x.filter(Boolean).length,Le=y[l]||0,nt=Pe.reduce((de,ce,ve)=>de+(u[ve]===ce.answerIndex?1:0),0);return n.jsxs("div",{className:"h-dvh bg-gray-900 text-white relative flex flex-col",children:[Se&&n.jsx("div",{className:"fixed inset-0 flex items-center justify-center z-50 pointer-events-none",children:n.jsxs("div",{className:"bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-8 py-4 rounded-full text-xl font-bold animate-bounce shadow-2xl",children:["+",Se.coins," Coins!"]})}),_e&&q&&n.jsx("div",{className:"fixed top-[60%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 pointer-events-none animate-fadeInOut max-w-2xl w-full px-4",children:n.jsx("div",{className:"bg-gradient-to-br from-gray-800/95 to-gray-900/95 text-white p-6 rounded-3xl shadow-2xl backdrop-blur-sm border border-gray-700/50",children:n.jsxs("div",{className:"text-center",children:[n.jsx("div",{className:"text-4xl mb-3",children:q.emoji}),n.jsx("div",{className:"text-xl font-bold leading-relaxed tracking-wide",children:q.message})]})})}),V&&n.jsx("div",{className:"fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-40 pointer-events-none",children:[...Array(8)].map((de,ce)=>n.jsx("div",{className:"absolute text-3xl animate-ping",style:{left:`${-30+Math.random()*60}px`,top:`${-30+Math.random()*60}px`,animationDelay:`${ce*150}ms`,animationDuration:"2s"},children:"🪙"},ce))}),n.jsxs("div",{className:"sticky top-0 flex items-center justify-between px-4 py-2 bg-gray-900 flex-shrink-0 z-40 border-b border-gray-800 shadow-lg",children:[n.jsxs("button",{onClick:()=>J(!0),className:"bg-gray-700 hover:bg-gray-600 px-3 py-1.5 rounded-full flex items-center gap-2 transition-colors text-sm",children:[n.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:n.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 19l-7-7 7-7"})}),n.jsx("span",{className:"font-medium",children:"Back"})]}),n.jsx("div",{className:"flex-1"}),n.jsxs("div",{className:"flex items-center gap-2",children:[_e&&n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:"bg-yellow-600/20 px-2 py-1 rounded-full flex items-center gap-1",children:[n.jsx("span",{className:"text-yellow-400 text-sm",children:"🪙"}),n.jsx("span",{className:"text-yellow-200 font-semibold text-sm",children:ae})]}),n.jsxs("div",{className:"bg-orange-600/20 px-2 py-1 rounded-full flex items-center gap-1",children:[n.jsx("span",{className:"text-orange-400 text-sm",children:"🔥"}),n.jsx("span",{className:"text-orange-200 font-semibold text-sm",children:fe})]})]}),n.jsx("div",{className:`px-2 py-1 rounded-full font-mono font-semibold text-sm ${Le<=10?"bg-red-600/20 text-red-400 animate-pulse":Le<=30?"bg-yellow-600/20 text-yellow-400":"bg-green-600/20 text-green-400"}`,children:le(Le)})]})]}),n.jsxs("div",{className:"px-4 pb-1 flex-shrink-0 bg-gray-900 relative z-30",children:[n.jsxs("div",{className:"flex justify-between items-center mb-1",children:[n.jsxs("span",{className:"text-xs text-gray-400",children:["Question ",l+1," of ",Je]}),n.jsxs("span",{className:"text-xs text-gray-400",children:[Math.round(pe),"% Complete"]})]}),n.jsx("div",{className:"h-2 bg-gray-700 rounded-full overflow-hidden",children:n.jsx("div",{className:"h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-500",style:{width:`${pe}%`}})}),n.jsx("div",{className:"flex justify-center gap-1 mt-1",children:Array.from({length:Je}).map((de,ce)=>n.jsx("div",{className:`w-1.5 h-1.5 rounded-full transition-all ${ce===l?"bg-white scale-125":u[ce]!==null?"bg-green-500":x[ce]?"bg-yellow-500":"bg-gray-600"}`},ce))}),n.jsx("div",{className:"text-center mt-4",children:n.jsx("span",{className:"text-xs text-gray-500",children:Me.category})})]}),n.jsxs("div",{className:"flex-1 px-4 flex flex-col overflow-y-auto pb-36",children:[n.jsxs("div",{className:"relative bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 rounded-3xl p-6 mb-8 flex-shrink-0 shadow-2xl shadow-blue-600/20 border border-blue-400/20",children:[n.jsx("div",{className:"absolute top-2 right-2 w-16 h-16 bg-white/10 rounded-full blur-xl"}),n.jsx("div",{className:"absolute bottom-2 left-2 w-12 h-12 bg-white/5 rounded-full blur-lg"}),n.jsxs("div",{className:"relative text-center",children:[n.jsxs("div",{className:"inline-block bg-white/10 px-3 py-1 rounded-full text-xs font-medium text-blue-100 mb-3",children:["Question ",l+1]}),n.jsx("h2",{className:"text-xl font-bold leading-relaxed text-white tracking-wide",children:Me.prompt}),Me.difficulty&&n.jsx("div",{className:"mt-3 inline-block",children:n.jsx("span",{className:`px-2 py-1 rounded-full text-xs font-semibold ${Me.difficulty==="easy"?"bg-green-500/20 text-green-300":Me.difficulty==="medium"?"bg-yellow-500/20 text-yellow-300":"bg-red-500/20 text-red-300"}`,children:Me.difficulty.toUpperCase()})})]})]}),n.jsx("div",{className:"grid grid-cols-1 gap-3 mb-2 flex-shrink-0",children:Me.options.map((de,ce)=>{const ve=Ke===ce,Ve=ce===Me.answerIndex,Ie=_e&&Ke!==null&&O,He=w[l]&&w[l].includes(ce);let Ue="p-4 rounded-xl transition-all duration-300 border-2 min-h-[64px] flex items-center ";He?Ue+="bg-gray-700/30 border-gray-600/30 text-gray-500/50 cursor-not-allowed":(Ue+="cursor-pointer ",Ie?ve&&Ve?Ue+="bg-green-600 border-green-500 text-white shadow-lg shadow-green-600/25":ve&&!Ve?Ue+="bg-red-600 border-red-500 text-white shadow-lg shadow-red-600/25":!ve&&Ve?Ue+="bg-green-600/20 border-green-500 text-green-300 animate-pulse":Ue+="bg-gray-700 border-gray-600 text-gray-400":ve?Ue+="bg-gray-600 border-gray-500 text-white":Ue+="bg-gray-800 border-gray-700 text-gray-200 hover:bg-gray-750 hover:border-gray-600");const Ut=["🅰️","🅱️","🅲️","🅳️"];return n.jsx("button",{onClick:wm=>ue(ce,wm),disabled:_e&&Q[l],className:Ue,children:n.jsxs("div",{className:"flex items-center gap-2 w-full",children:[n.jsx("div",{className:"text-lg flex-shrink-0 mr-1",children:Ut[ce]}),n.jsx("div",{className:"flex-1 text-left font-semibold text-base leading-relaxed",children:de}),R[l]&&R[l][ce]>0&&!He&&n.jsxs("div",{className:"bg-purple-600/20 px-2 py-1 rounded-full text-xs text-purple-300",children:[R[l][ce],"%"]}),Ie&&ve&&Ve&&!He&&n.jsx("div",{className:"text-lg animate-bounce",children:"🎉"}),Ie&&ve&&!Ve&&!He&&n.jsx("div",{className:"text-lg",children:"😔"}),Ie&&!ve&&Ve&&!He&&n.jsx("div",{className:"text-base animate-pulse",children:"✨"})]})},ce)})}),_e&&O&&Ke!==null&&n.jsx("div",{className:"bg-gray-800 rounded-xl p-4 mb-2 mt-4 border border-gray-700 flex-shrink-0",children:n.jsxs("div",{className:"flex gap-3",children:[n.jsx("div",{className:"text-lg flex-shrink-0",children:Ke===Me.answerIndex?"🎊":"💡"}),n.jsxs("div",{className:"flex-1",children:[n.jsx("h4",{className:`font-semibold mb-3 text-sm ${Ke===Me.answerIndex?"text-green-400":"text-blue-400"}`,children:Ke===Me.answerIndex?"Perfect! Well done!":"Good try! Here's why:"}),Me.explanation&&n.jsx("p",{className:"text-gray-300 text-sm leading-relaxed",children:Me.explanation})]})]})})]}),n.jsxs("div",{className:"fixed bottom-0 left-0 right-0 bg-gray-800/90 backdrop-blur-sm p-4 pb-8 z-50",children:[!_e&&n.jsxs("div",{className:"flex justify-center gap-2 mb-4",children:[n.jsxs("button",{onClick:Yr,disabled:Ke!==null,className:`${P?"bg-gray-700/50 text-gray-500/50":"bg-orange-600 hover:bg-orange-700"} disabled:bg-gray-800 px-3 py-1.5 rounded-lg font-medium transition-colors flex items-center gap-1 text-sm`,children:[n.jsx("span",{children:"⚡"}),"50:50"]}),n.jsxs("button",{onClick:re,disabled:Ke!==null,className:`${S?"bg-gray-700/50 text-gray-500/50":"bg-purple-600 hover:bg-purple-700"} disabled:bg-gray-800 px-3 py-1.5 rounded-lg font-medium transition-colors flex items-center gap-1 text-sm`,children:[n.jsx("span",{children:"👥"}),"Ask Friends"]})]}),n.jsxs("div",{className:"flex gap-2 mb-2",children:[n.jsx("button",{onClick:Ae,disabled:l===0,className:"flex-1 bg-gray-700 hover:bg-gray-600 disabled:bg-gray-800 py-2 rounded-lg font-medium transition-colors text-sm",children:"Previous"}),n.jsx("button",{onClick:Ge,disabled:Ke!==null,className:`flex-1 py-2 rounded-lg font-medium transition-colors text-sm ${Ke!==null?"bg-gray-600/50 text-gray-400/50 cursor-not-allowed":"bg-yellow-600 hover:bg-yellow-700"}`,children:"Skip"}),n.jsx("button",{onClick:be,className:"flex-1 bg-blue-600 hover:bg-blue-700 py-2 rounded-lg font-medium transition-colors text-sm",children:l===Je-1?"Finish":"Next"})]}),n.jsx("button",{onClick:()=>X(!0),className:"w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 py-2.5 rounded-lg font-medium transition-colors text-sm",children:"Submit"})]}),ne&&n.jsx("div",{className:"fixed inset-0 bg-black/75 flex items-center justify-center z-50 p-4",children:n.jsxs("div",{className:"bg-gray-800 rounded-3xl p-6 max-w-sm w-full text-center border border-gray-700",children:[n.jsx("div",{className:"text-4xl mb-4",children:"🎉"}),n.jsx("h3",{className:"text-xl font-bold mb-2",children:"Quiz Complete!"}),n.jsx("p",{className:"text-gray-400 mb-6",children:"Here's how you performed"}),n.jsxs("div",{className:"bg-gray-700/50 rounded-2xl p-4 mb-6 space-y-3",children:[n.jsxs("div",{className:"flex justify-between items-center",children:[n.jsx("span",{className:"text-gray-300",children:"Questions Attempted:"}),n.jsxs("span",{className:"text-white font-semibold",children:[je," / ",Je]})]}),n.jsxs("div",{className:"flex justify-between items-center",children:[n.jsx("span",{className:"text-gray-300",children:"Correct Answers:"}),n.jsx("span",{className:"text-green-400 font-semibold",children:nt})]}),n.jsxs("div",{className:"flex justify-between items-center",children:[n.jsx("span",{className:"text-gray-300",children:"Accuracy:"}),n.jsxs("span",{className:"text-blue-400 font-semibold",children:[je>0?Math.round(nt/je*100):0,"%"]})]}),n.jsx("div",{className:"border-t border-gray-600 pt-3 mt-3",children:n.jsxs("div",{className:"flex justify-between items-center",children:[n.jsx("span",{className:"text-yellow-300 flex items-center gap-1",children:"🪙 Coins Earned:"}),n.jsx("span",{className:"text-yellow-400 font-bold text-lg",children:Te})]})})]}),n.jsx("button",{onClick:oe,className:"w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 py-3 rounded-xl font-medium transition-colors",children:"Continue"})]})}),$&&n.jsx("div",{className:"fixed inset-0 bg-black/75 flex items-center justify-center z-50 p-4",children:n.jsxs("div",{className:"bg-gray-800 rounded-3xl p-6 max-w-sm w-full text-center border border-gray-700",children:[n.jsx("div",{className:"text-4xl mb-4",children:"🤔"}),n.jsx("h3",{className:"text-xl font-bold mb-2",children:"Leave Quiz?"}),n.jsx("p",{className:"text-gray-400 mb-6",children:"Your progress will be lost"}),n.jsxs("div",{className:"flex gap-3",children:[n.jsx("button",{onClick:()=>J(!1),className:"flex-1 bg-blue-600 hover:bg-blue-700 py-3 rounded-xl font-medium",children:"Stay"}),n.jsx("button",{onClick:o,className:"flex-1 bg-gray-700 hover:bg-gray-600 py-3 rounded-xl font-medium",children:"Leave"})]})]})}),D&&!ne&&n.jsx("div",{className:"fixed inset-0 bg-black/75 flex items-center justify-center z-50 p-4",children:n.jsxs("div",{className:"bg-gray-800 rounded-3xl p-6 max-w-sm w-full text-center border border-gray-700",children:[n.jsx("div",{className:"text-4xl mb-4",children:"🏆"}),n.jsx("h3",{className:"text-xl font-bold mb-2",children:"Ready to finish?"}),n.jsxs("p",{className:"text-gray-400 mb-4",children:[je," of ",Je," answered • ",xe," skipped"]}),_e&&n.jsx("div",{className:"bg-gradient-to-r from-yellow-600/20 to-orange-600/20 p-4 rounded-2xl mb-6 border border-yellow-600/30",children:n.jsxs("div",{className:"flex justify-center gap-6",children:[n.jsxs("div",{className:"text-center",children:[n.jsx("div",{className:"text-2xl mb-1",children:"⭐"}),n.jsx("div",{className:"text-yellow-400 font-bold",children:H}),n.jsx("div",{className:"text-xs text-gray-400",children:"Stars"})]}),n.jsxs("div",{className:"text-center",children:[n.jsx("div",{className:"text-2xl mb-1",children:"🪙"}),n.jsx("div",{className:"text-yellow-400 font-bold",children:ae}),n.jsx("div",{className:"text-xs text-gray-400",children:"Coins"})]})]})}),n.jsxs("div",{className:"flex gap-3",children:[n.jsx("button",{onClick:()=>{X(!1),h(null),E(Date.now())},className:"flex-1 bg-gray-700 hover:bg-gray-600 py-3 rounded-xl font-medium",children:"Back"}),n.jsx("button",{onClick:de=>{de.preventDefault(),de.stopPropagation(),console.log("Submit button clicked"),ge()},className:"flex-1 bg-green-600 hover:bg-green-700 py-3 rounded-xl font-medium",children:"Submit"})]})]})}),v===l&&!D&&n.jsx("div",{className:"fixed inset-0 bg-black/75 flex items-center justify-center z-50 p-4",children:n.jsxs("div",{className:"bg-gray-800 rounded-3xl p-6 max-w-sm w-full text-center border border-gray-700",children:[n.jsx("div",{className:"text-4xl mb-4 animate-pulse",children:"⏰"}),n.jsx("h3",{className:"text-xl font-bold mb-2",children:"Time's Up!"}),n.jsx("p",{className:"text-gray-400 mb-6",children:"Let's move to the next question"}),n.jsx("button",{onClick:()=>{h(null),E(Date.now()),l<Pe.length-1?be():X(!0)},className:"w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-xl font-medium",children:l<Pe.length-1?"Continue":"See Results"})]})}),ie&&n.jsx("div",{className:"fixed top-20 left-1/2 transform -translate-x-1/2 bg-red-600 text-white px-4 py-2 rounded-full font-medium animate-bounce z-50",children:ie}),n.jsx("style",{jsx:!0,children:`
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
        `})]})},es=[{name:"GK",slug:"general-knowledge",questions:50,icon:"🧠",color:"#FF6B6B",gradient:"from-red-500 to-pink-500"},{name:"Science",slug:"science",questions:45,icon:"🧪",color:"#4ECDC4",gradient:"from-cyan-500 to-teal-500"},{name:"Fun Facts",slug:"fun-facts",questions:30,icon:"🎉",color:"#FFD93D",gradient:"from-yellow-400 to-orange-500"},{name:"History",slug:"history",questions:42,icon:"🏺",color:"#A8E6CF",gradient:"from-green-400 to-emerald-500"},{name:"AI & Tech",slug:"artificial-intelligence",questions:28,icon:"🤖",color:"#C7B8FF",gradient:"from-purple-400 to-indigo-500"},{name:"Geography",slug:"geography",questions:38,icon:"🗺️",color:"#FACC15",gradient:"from-yellow-400 to-amber-500"},{name:"Computer",slug:"computer",questions:34,icon:"💻",color:"#3B82F6",gradient:"from-blue-400 to-blue-600"},{name:"Aptitude",slug:"aptitude",questions:36,icon:"📐",color:"#EC4899",gradient:"from-pink-500 to-rose-500"},{name:"Iconic Figures",slug:"iconic-figures",questions:26,icon:"🌟",color:"#8B5CF6",gradient:"from-purple-500 to-violet-600"}],Ng=()=>n.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:n.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5l7 7-7 7"})}),kg=()=>n.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:n.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"})}),Sg=()=>n.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:n.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"})}),Cg=()=>n.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:n.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"})}),Eg=()=>n.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:n.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"})}),Rg=()=>n.jsx("svg",{className:"w-3 h-3",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:n.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 10V3L4 14h7v7l9-11h-7z"})}),Tg=({results:e={correct:8,total:10,category:"general-knowledge",mode:"quiz",elapsedMs:125e3,questions:[]},onRetake:t=()=>{},onReview:r=()=>{},onNavigate:s=(u,f)=>{},isRetake:a=!1,isPractice:i=!1,player:o={level:1,coins:0,combo:0,energy:5},categories:l=[],addCoins:c=()=>{}})=>{const[u,f]=d.useState(o.coins),x=d.useRef(null),[m,y]=d.useState(null),[p]=zt("/sounds/coin.mp3",{volume:.75}),[j,k]=d.useState(!1),[v,h]=d.useState(!1),[g,E]=d.useState(0),[P,z]=d.useState(!1),[S,b]=d.useState(!1),{correct:w,total:N,category:R,categorySlug:F,difficulty:Q,mode:ee,elapsedMs:q}=e,B=N?Math.round(w/N*100):0,L=B===100,C=B>=80,T=Math.floor(q/1e3),_=N>0?Math.floor(T/N):0,A=i?e.earnedCoins||0:Math.round(w*5*(L?1.5:C?1.2:1)),M=es.find(O=>O.slug===R)||es[0],X=(()=>L?{emoji:"🏆",text:"Perfect!",color:"text-yellow-400"}:B>=90?{emoji:"🌟",text:"Excellent!",color:"text-purple-400"}:B>=80?{emoji:"✨",text:"Great job!",color:"text-blue-400"}:B>=70?{emoji:"👍",text:"Good effort!",color:"text-green-400"}:B>=60?{emoji:"💪",text:"Keep going!",color:"text-orange-400"}:{emoji:"📚",text:"Keep practicing!",color:"text-gray-400"})();d.useEffect(()=>{!m&&!j&&f(o.coins)},[o.coins,m,j]),d.useEffect(()=>{A>0&&!j&&!S&&x.current&&setTimeout(()=>{x.current.getBoundingClientRect(),p==null||p(),y({startRect:{left:window.innerWidth/2-50,top:window.innerHeight/2,width:100,height:100},count:Math.min(A,10),amount:A}),k(!0)},500)},[A,i,j,p]),d.useEffect(()=>{(L||C)&&(h(!0),setTimeout(()=>h(!1),3e3));let O=0;const W=w/20,V=setInterval(()=>{O+=W,O>=w?(E(w),clearInterval(V)):E(Math.floor(O))},50);return()=>clearInterval(V)},[w,L,C]);const $=[{score:7,total:10},{score:6,total:10},{score:8,total:10},{score:9,total:10},{score:w,total:N}],J=()=>{try{const O=localStorage.getItem("qp_recent");if(O)return JSON.parse(O).slice(0,10).map(V=>V.slug||V.cat).filter(V=>V&&V!==e.categorySlug)}catch(O){console.error("Error reading recent categories:",O)}return[]},ie=()=>{const O=F||R,W=Q||"medium",V=J(),te=(l||es||[]).filter(ne=>ne.slug!==O&&!V.slice(0,3).includes(ne.slug)),Y=(()=>{if(te.length===0){const ne=(l||es||[]).filter(U=>U.slug!==O);return ne[Math.floor(Math.random()*ne.length)]||(l||es)[0]}return te[Math.floor(Math.random()*te.length)]})();if(B<60)return i?[{icon:"🎯",title:"Try Fewer Questions",desc:"Start with just 5",color:"from-blue-500 to-cyan-500",action:()=>s(`/quiz/${O}`,{mode:"practice",difficulty:"easy",count:5,timer:{type:"off",seconds:0}})},{icon:Y.icon,title:Y.name,desc:"Fresh start with new topic",color:Y.gradient,action:()=>s(`/quiz/${Y.slug}`,{mode:"practice",difficulty:"easy",count:10,timer:{type:"off",seconds:0}})},{icon:"📖",title:"Review Mistakes",desc:"Learn from errors",color:"from-purple-500 to-pink-500",action:()=>r()}]:[{icon:"📚",title:"Practice Mode",desc:"No timer, learn at your pace",color:"from-green-500 to-teal-500",action:()=>s(`/quiz/${O}`,{mode:"practice",difficulty:"easy",count:10,timer:{type:"off",seconds:0}})},{icon:W!=="easy"?"🎯":"🔄",title:W!=="easy"?"Easy Mode":"Try Again",desc:W!=="easy"?"Build confidence":"You can do this!",color:"from-blue-500 to-cyan-500",action:()=>W!=="easy"?s(`/quiz/${O}`,{mode:"quiz",difficulty:"easy",count:5,timer:{type:"per_q",seconds:60}}):t()},{icon:Y.icon,title:Y.name,desc:"Try something different",color:Y.gradient,action:()=>s(`/quiz/${Y.slug}`,{mode:"quiz",difficulty:"easy",count:10,timer:{type:"per_q",seconds:45}})}];if(B>=80)return W==="hard"&&B>=90?[{icon:"⚡",title:"Lightning Round",desc:"20 questions, 10s each",color:"from-yellow-500 to-red-500",action:()=>s(`/quiz/${O}`,{mode:"quiz",difficulty:"hard",count:20,timer:{type:"per_q",seconds:10}})},{icon:Y.icon,title:`${Y.name} Challenge`,desc:"Hard mode, new topic",color:Y.gradient,action:()=>s(`/quiz/${Y.slug}`,{mode:"quiz",difficulty:"hard",count:15,timer:{type:"per_q",seconds:30}})},{icon:"🎲",title:"Mixed Categories",desc:"Test all your knowledge",color:"from-purple-500 to-indigo-500",action:()=>s("/quiz/mixed",{mode:"quiz",difficulty:"hard",count:20,timer:{type:"per_q",seconds:30}})}]:[{icon:W==="hard"?"🔥":"🎯",title:W==="hard"?"Perfect Score Challenge":"Hard Mode",desc:W==="hard"?"Can you get 100%?":"Level up your skills",color:"from-red-500 to-orange-500",action:()=>s(`/quiz/${O}`,{mode:"quiz",difficulty:"hard",count:W==="hard"?10:20,timer:{type:"per_q",seconds:30}})},{icon:Y.icon,title:Y.name,desc:"Master new topics",color:Y.gradient,action:()=>s(`/quiz/${Y.slug}`,{mode:"quiz",difficulty:W,count:10,timer:{type:"per_q",seconds:45}})},{icon:"⚡",title:"Speed Challenge",desc:"10 questions, 15s each",color:"from-purple-500 to-pink-500",action:()=>s(`/quiz/${O}`,{mode:"quiz",difficulty:"medium",count:10,timer:{type:"per_q",seconds:15}})}];{const ne=B<70;return[{icon:ne?"📚":"🎯",title:ne?"Practice More":"Try Again",desc:ne?"Improve accuracy":"Beat your score",color:ne?"from-green-500 to-teal-500":"from-blue-500 to-purple-500",action:ne?()=>s(`/quiz/${O}`,{mode:"practice",difficulty:W,count:10,timer:{type:"off",seconds:0}}):()=>t()},{icon:Y.icon,title:Y.name,desc:"Explore new topics",color:Y.gradient,action:()=>s(`/quiz/${Y.slug}`,{mode:"quiz",difficulty:"medium",count:10,timer:{type:"per_q",seconds:45}})},{icon:W==="easy"?"⬆️":"💪",title:W==="easy"?"Medium Difficulty":"More Questions",desc:W==="easy"?"Ready for more?":"Test endurance",color:"from-indigo-500 to-purple-500",action:()=>s(`/quiz/${O}`,{mode:"quiz",difficulty:W==="easy"?"medium":W,count:W==="easy"?10:20,timer:{type:"per_q",seconds:45}})}]}},I=xt.useMemo(()=>ie(),[B,i,e.categorySlug,e.difficulty]);return n.jsxs("div",{className:"min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white p-4",children:[m&&n.jsx(Kl,{startRect:m.startRect,targetRef:x,count:m.count,onDone:()=>{m.amount>0&&!S&&(console.log("[QuizResults] Adding coins once:",m.amount),c(m.amount),b(!0),f(o.coins+m.amount)),y(null)}}),n.jsx("style",{children:`
        @keyframes coinRotate {
          from { transform: rotateY(0deg); }
          to { transform: rotateY(360deg); }
        }
      `}),v&&n.jsx("div",{className:"fixed inset-0 pointer-events-none z-50 flex items-center justify-center",children:n.jsx("div",{className:"text-8xl animate-bounce",children:L?"🎉":"⭐"})}),n.jsxs("div",{className:"flex justify-between items-center mb-6",children:[n.jsx("button",{onClick:()=>s("/"),className:"p-2 rounded-xl bg-white/10 backdrop-blur hover:bg-white/20 transition-all",children:n.jsx(kg,{})}),n.jsxs("div",{className:"flex gap-2",children:[n.jsxs("div",{className:"px-3 py-1.5 rounded-full bg-white/10 backdrop-blur text-sm font-medium",children:["Level ",o.level]}),n.jsxs("button",{ref:x,onClick:()=>z(!0),className:"px-3 py-1.5 rounded-full bg-yellow-500/20 backdrop-blur text-sm font-medium text-yellow-300 hover:bg-yellow-500/30 transition-all cursor-pointer",children:[u," 🪙"]})]})]}),n.jsxs("div",{className:"relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 p-8 mb-6",children:[n.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-blue-500/10 animate-pulse"}),n.jsxs("div",{className:"relative text-center",children:[n.jsxs("div",{className:`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur mb-4 ${X.color}`,children:[n.jsx("span",{className:"text-2xl",children:X.emoji}),n.jsx("span",{className:"font-semibold",children:X.text})]}),n.jsxs("div",{className:"mb-6",children:[n.jsxs("div",{className:"text-7xl font-bold mb-2 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent",children:[g,"/",N]}),n.jsxs("div",{className:"flex items-center justify-center gap-2 text-sm text-white/60",children:[n.jsx("span",{className:"text-xl",children:M.icon}),n.jsx("span",{children:M.name})]})]}),n.jsxs("div",{className:"grid grid-cols-3 gap-4 max-w-md mx-auto",children:[n.jsxs("div",{className:"text-center",children:[n.jsxs("div",{className:"text-3xl font-bold",children:[B,"%"]}),n.jsx("div",{className:"text-xs text-white/60",children:"Accuracy"})]}),n.jsxs("div",{className:"text-center",children:[n.jsxs("div",{className:"text-3xl font-bold",children:[_,"s"]}),n.jsx("div",{className:"text-xs text-white/60",children:"Avg Speed"})]}),n.jsxs("div",{className:"text-center",children:[n.jsx("div",{className:"text-3xl font-bold text-yellow-400",children:A>0?`+${A}`:"0"}),n.jsx("div",{className:"text-xs text-white/60",children:"Coins"})]})]})]})]}),n.jsxs("div",{className:"rounded-2xl bg-white/5 backdrop-blur border border-white/10 p-4 mb-6",children:[n.jsxs("div",{className:"flex items-center justify-between mb-3",children:[n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx(Eg,{}),n.jsx("span",{className:"text-sm font-medium",children:"Your Progress"})]}),o.combo>0&&n.jsxs("div",{className:"flex items-center gap-1 px-2 py-1 rounded-full bg-orange-500/20 text-orange-400 text-xs",children:[n.jsx(Rg,{}),o.combo," streak"]})]}),n.jsx("div",{className:"flex items-end gap-1 h-12 mb-2",children:$.map((O,W)=>n.jsx("div",{className:`flex-1 rounded-t transition-all ${W===$.length-1?"bg-gradient-to-t from-purple-500 to-purple-400":"bg-white/20"}`,style:{height:`${O.score/O.total*100}%`,minHeight:"4px"}},W))}),n.jsx("div",{className:"text-xs text-white/40 text-center",children:"Last 5 quizzes"})]}),n.jsxs("div",{className:"grid grid-cols-2 gap-3 mb-6",children:[n.jsxs("button",{onClick:r,className:"relative overflow-hidden group rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 p-4 transition-all hover:scale-105 active:scale-95",children:[n.jsx("div",{className:"absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform"}),n.jsxs("div",{className:"relative flex items-center justify-between",children:[n.jsxs("div",{className:"text-left",children:[n.jsx("div",{className:"font-semibold",children:"Review"}),n.jsx("div",{className:"text-xs opacity-80",children:"Check answers"})]}),n.jsx(Cg,{})]})]}),n.jsx("button",{onClick:t,className:"relative overflow-hidden group rounded-2xl bg-white/10 backdrop-blur border border-white/20 p-4 transition-all hover:scale-105 active:scale-95 hover:bg-white/15",children:n.jsxs("div",{className:"flex items-center justify-between",children:[n.jsxs("div",{className:"text-left",children:[n.jsx("div",{className:"font-semibold",children:"Try Again"}),n.jsx("div",{className:"text-xs opacity-60",children:"New questions"})]}),n.jsx(Sg,{})]})})]}),n.jsxs("div",{className:"space-y-3",children:[n.jsx("div",{className:"text-sm font-medium text-white/60 px-1",children:"Recommended for you"}),I.map((O,W)=>n.jsx("button",{onClick:O.action,className:"w-full group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur border border-white/10 p-4 transition-all hover:bg-white/10 hover:border-white/20",children:n.jsxs("div",{className:"flex items-center justify-between",children:[n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsx("div",{className:`p-2 rounded-xl bg-gradient-to-r ${O.color} opacity-20 group-hover:opacity-30 transition-opacity`,children:n.jsx("span",{className:"text-xl",children:O.icon})}),n.jsxs("div",{className:"text-left",children:[n.jsx("div",{className:"font-medium text-sm",children:O.title}),n.jsx("div",{className:"text-xs text-white/40",children:O.desc})]})]}),n.jsx(Ng,{})]})},W))]}),n.jsx("div",{className:"mt-6 pt-6 border-t border-white/10",children:n.jsx("button",{onClick:()=>s("/profile/history",{replace:!0}),className:"w-full text-center text-sm text-white/40 hover:text-white/60 transition-colors",children:"View all history →"})}),P&&n.jsx("div",{className:"fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4",onClick:O=>{O.target===O.currentTarget&&z(!1)},children:n.jsxs("div",{className:"bg-gray-800 rounded-3xl p-6 w-full max-w-md border border-gray-700 relative overflow-hidden",onClick:O=>O.stopPropagation(),children:[n.jsx("div",{className:"absolute inset-0 opacity-10",children:n.jsx("div",{className:"h-full bg-gradient-to-br from-yellow-400 to-orange-500"})}),n.jsxs("div",{className:"relative",children:[n.jsxs("div",{className:"flex items-center justify-between mb-6",children:[n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsx("div",{className:"text-5xl",style:{animation:"coinRotate 2s linear infinite"},children:"🪙"}),n.jsxs("div",{children:[n.jsx("h3",{className:"text-2xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent",children:"Your Treasure"}),n.jsxs("p",{className:"text-3xl font-bold text-white mt-1",children:[o.coins," Coins"]})]})]}),n.jsx("button",{onClick:()=>z(!1),className:"w-8 h-8 rounded-lg bg-white/5 border border-gray-600 grid place-items-center hover:bg-white/10 transition",children:"✕"})]}),n.jsxs("div",{className:"mb-6",children:[n.jsx("h4",{className:"text-sm font-medium text-gray-400 mb-3",children:"Ways to Earn"}),n.jsxs("div",{className:"space-y-3",children:[n.jsx("div",{className:"p-4 rounded-xl bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 hover:scale-[1.02] transition-transform",children:n.jsxs("div",{className:"flex items-center justify-between",children:[n.jsxs("div",{children:[n.jsxs("div",{className:"font-medium flex items-center gap-2",children:[n.jsx("span",{className:"text-2xl",children:"✅"}),"Complete Quizzes"]}),n.jsx("div",{className:"text-xs text-gray-400 mt-1",children:"+5 coins per correct answer"})]}),n.jsx("div",{className:"text-green-400 font-bold",children:"+5"})]})}),n.jsx("div",{className:"p-4 rounded-xl bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 hover:scale-[1.02] transition-transform",children:n.jsxs("div",{className:"flex items-center justify-between",children:[n.jsxs("div",{children:[n.jsxs("div",{className:"font-medium flex items-center gap-2",children:[n.jsx("span",{className:"text-2xl",children:"🎯"}),"Daily Challenge"]}),n.jsx("div",{className:"text-xs text-gray-400 mt-1",children:"Complete daily for bonus"})]}),n.jsx("div",{className:"text-blue-400 font-bold",children:"+5"})]})}),n.jsx("div",{className:"p-4 rounded-xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 hover:scale-[1.02] transition-transform",children:n.jsxs("div",{className:"flex items-center justify-between",children:[n.jsxs("div",{children:[n.jsxs("div",{className:"font-medium flex items-center gap-2",children:[n.jsx("span",{className:"text-2xl",children:"🎰"}),"Spin & Play"]}),n.jsx("div",{className:"text-xs text-gray-400 mt-1",children:"Test your luck!"})]}),n.jsx("div",{className:"text-purple-400 font-bold",children:"+50"})]})}),n.jsx("div",{className:"p-4 rounded-xl bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/20 hover:scale-[1.02] transition-transform",children:n.jsxs("div",{className:"flex items-center justify-between",children:[n.jsxs("div",{children:[n.jsxs("div",{className:"font-medium flex items-center gap-2",children:[n.jsx("span",{className:"text-2xl",children:"🏆"}),"Achievements"]}),n.jsx("div",{className:"text-xs text-gray-400 mt-1",children:"Unlock special rewards"})]}),n.jsx("div",{className:"text-orange-400 font-bold",children:"+???"})]})})]})]}),n.jsxs("div",{className:"mb-6",children:[n.jsxs("div",{className:"flex justify-between text-xs text-gray-400 mb-2",children:[n.jsx("span",{children:"Next reward"}),n.jsxs("span",{children:[100-o.coins%100," coins to go"]})]}),n.jsx("div",{className:"h-2 bg-white/10 rounded-full overflow-hidden",children:n.jsx("div",{className:"h-full bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full transition-all",style:{width:`${o.coins%100}%`}})})]}),n.jsx("button",{onClick:()=>{z(!1),s("/play")},className:"w-full py-3 rounded-xl bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-bold hover:scale-[1.02] transition-transform shadow-lg",children:"Start Earning Now! 🚀"})]})]})})]})},_g=({questions:e,answers:t,skipped:r,onBack:s,onRetake:a,fromHistory:i=!1})=>{const o=wt(),l=()=>{i?o("/profile/history",{replace:!0}):s?s():o(-1)},c=e.reduce((x,m,y)=>x+(t[y]===m.answerIndex?1:0),0),u=(r==null?void 0:r.filter(Boolean).length)||0,f=e.length-c-u;return n.jsxs("div",{className:"mt-2 card rounded-3xl p-5 w-full max-w-none mx-auto pb-24",children:[n.jsxs("div",{className:"flex items-center justify-between mb-4",children:[n.jsx("button",{className:"px-3 py-1.5 rounded-xl border border-base-border bg-white/5",onClick:l,children:"← Back"}),n.jsx("h2",{className:"text-lg font-semibold",children:"Review Answers"}),n.jsx("div",{className:"w-16"})," "]}),n.jsxs("div",{className:"grid grid-cols-3 gap-2 mb-4",children:[n.jsxs("div",{className:"rounded-xl bg-green-600/10 border border-green-500/30 p-2 text-center",children:[n.jsx("div",{className:"text-xs text-green-400",children:"Correct"}),n.jsx("div",{className:"text-lg font-bold text-green-400",children:c})]}),n.jsxs("div",{className:"rounded-xl bg-red-600/10 border border-red-500/30 p-2 text-center",children:[n.jsx("div",{className:"text-xs text-red-400",children:"Incorrect"}),n.jsx("div",{className:"text-lg font-bold text-red-400",children:f})]}),n.jsxs("div",{className:"rounded-xl bg-amber-600/10 border border-amber-500/30 p-2 text-center",children:[n.jsx("div",{className:"text-xs text-amber-400",children:"Skipped"}),n.jsx("div",{className:"text-lg font-bold text-amber-400",children:u})]})]}),n.jsx("ol",{className:"space-y-4",children:e.map((x,m)=>{const y=t[m],p=!y&&y!==0,j=y===x.answerIndex;return n.jsxs("li",{className:"rounded-2xl border border-base-border bg-white/5 p-4 md:p-5",children:[n.jsxs("div",{className:"flex items-start justify-between mb-3",children:[n.jsxs("div",{className:"flex-1",children:[n.jsxs("div",{className:"text-sm md:text-base font-medium",children:["Q",m+1,". ",x.prompt]}),x.category&&n.jsxs("div",{className:"text-xs text-base-muted mt-1",children:["Category: ",x.category," • Difficulty: ",x.difficulty||"Medium"]})]}),n.jsx("div",{className:"ml-2",children:p?n.jsx("span",{className:"px-2 py-1 rounded text-xs bg-amber-600/20 text-amber-400",children:"Skipped"}):j?n.jsx("span",{className:"px-2 py-1 rounded text-xs bg-green-600/20 text-green-400",children:"✓ Correct"}):n.jsx("span",{className:"px-2 py-1 rounded text-xs bg-red-600/20 text-red-400",children:"✗ Wrong"})})]}),n.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-3",children:x.options.map((k,v)=>{const h=y===v,g=v===x.answerIndex;let E="w-full text-left px-3 py-2 rounded-xl border transition-all ";return g?E+="bg-green-600/20 border-green-500/50 text-green-300":h&&!g?E+="bg-red-600/20 border-red-500/50 text-red-300":E+="bg-base-bg/40 border-base-border text-base-muted",n.jsxs("div",{className:E,children:[n.jsxs("span",{className:"font-semibold mr-2",children:[["A","B","C","D"][v],"."]}),k,g&&n.jsx("span",{className:"ml-2 text-green-400",children:"✓"}),h&&!g&&n.jsx("span",{className:"ml-2 text-red-400",children:"✗"})]},v)})}),x.explanation&&n.jsxs("div",{className:"mt-3 p-3 rounded-xl bg-white/5 border border-base-border",children:[n.jsx("div",{className:"text-xs font-semibold text-brand-blue mb-1",children:"Explanation:"}),n.jsx("div",{className:"text-sm text-base-muted",children:x.explanation})]})]},x.id||m)})}),n.jsxs("div",{className:"mt-6 flex gap-2 justify-center sticky bottom-4",children:[n.jsx("button",{className:"px-4 py-2.5 rounded-xl border border-base-border bg-base-card backdrop-blur",onClick:l,children:"Back to Results"}),a&&n.jsx("button",{className:"px-4 py-2.5 rounded-xl bg-gradient-to-r from-brand-blue to-brand-purple text-white font-medium",onClick:a,children:"Retake Quiz"})]})]})},Pg="qp_resume",Sd="qp_mistakes",Cd="qp_stats",Ed="qp_lastset",Rd="qp_recent",Td="qp_review_snapshot",Ag=50,ts=(e="")=>e.replace(/-/g," ").replace(/\b\w/g,t=>t.toUpperCase()),_a=(e="")=>e.toLowerCase().trim().replace(/[^\w\s-]/g,"").replace(/\s+/g,"-"),Lg=(e,t)=>e.slice().sort(()=>Math.random()-.5).slice(0,t),gm=e=>{const t=e.slice();for(let r=t.length-1;r>0;r--){const s=Math.floor(Math.random()*(r+1));[t[r],t[s]]=[t[s],t[r]]}return t},Ig=(e,t,r)=>Math.max(t,Math.min(r,e)),ns=(e,t)=>{try{const r=localStorage.getItem(e);return r?JSON.parse(r):t}catch{return t}};async function Mg(){const e="/data/quiz_questions_bank.csv",t=await fetch(e);if(!t.ok)throw new Error(`CSV not found at ${e}`);const r=await t.text(),{data:s}=dr.parse(r,{header:!0,skipEmptyLines:!0,transformHeader:i=>String(i).trim().toLowerCase()}),a={a:0,b:1,c:2,d:3};return s.map((i,o)=>{var m;const l=[i.option1,i.option2,i.option3,i.option4].map(y=>(y??"").trim());if(l.some(y=>!y))return null;let c=-1;const u=String(i.answer??"").trim();if(a[u.toLowerCase()]!==void 0)c=a[u.toLowerCase()];else{const y=l.findIndex(p=>p.toLowerCase()===u.toLowerCase());c=y>=0?y:0}const f=String(i.category??i.subject??"General Knowledge").trim(),x=String(i.difficulty??"medium").toLowerCase().trim();return{id:((m=i.id)==null?void 0:m.trim())||`q_${o}`,category:f,difficulty:x,prompt:String(i.question??"").trim(),options:l,answerIndex:c,explanation:String(i.explanation??"").trim()}}).filter(Boolean)}function Dg(e,{categorySlug:t,difficulty:r,count:s}){console.log("=== BUILD SESSION DEBUG ==="),console.log("categorySlug:",t),console.log("difficulty:",r),console.log("count:",s),console.log("Total questions available:",e.length);const i=t==="mixed"?()=>!0:f=>_a(f.category)===t,o=r?f=>(f.difficulty||"medium")===r:()=>!0,l=e.filter(f=>i(f)&&o(f));if(console.log("Filtered pool size:",l.length),console.log("Sample categories from all questions:",[...new Set(e.slice(0,10).map(f=>`"${f.category}" -> "${_a(f.category)}"`))]),l.length===0)return console.error("No questions match the filter criteria!"),console.log("Available categories:",[...new Set(e.map(f=>_a(f.category)))]),{questions:[],poolSize:0};const u=Lg(l,Math.min(s,l.length)).map(f=>{const x=gm([0,1,2,3]),m=x.map(p=>f.options[p]),y=x.indexOf(f.answerIndex);return{...f,options:m,answerIndex:y}});return console.log("Final questions:",u.length),{questions:u,poolSize:l.length}}function zg(){const e=wt(),{category:t}=Rp(),r=on(),{energy:s,useEnergy:a,player:i,addCoins:o,addXP:l,updateDailyStreak:c}=wn(),u=new URLSearchParams(r.search),f=u.get("review")==="1",x=u.get("retake")==="1",m=r.state||{},y=m.mode||"quiz",p=String(m.difficulty||"medium").toLowerCase(),j=Ig(Number(m.count||10),1,50),k=m.timer||{type:"per_q",seconds:45};m.resume,m.daily,m.source;const v=x||!!m.retake,h=!!m.fromHistory,g=y==="practice";console.log("Quiz Component - Mode Detection:",{routerState:m,mode:y,isPractice:g,location:r.pathname,state:r.state});const[E,P]=d.useState([]),[z,S]=d.useState(!0),[b,w]=d.useState(""),[N,R]=d.useState({questions:[]}),[F,Q]=d.useState("quiz"),[ee,q]=d.useState(null),[B,L]=d.useState(null),[C,T]=d.useState(0);d.useEffect(()=>{let $=!0;return(async()=>{try{const J=await Mg();if(!$)return;P(J)}catch(J){console.error(J),w("Failed to load questions. Check /public/data/quiz_questions_bank.csv")}finally{S(!1)}})(),()=>{$=!1}},[]),d.useEffect(()=>{if(z||b||f||E.length===0)return;console.log("=== SESSION INIT ==="),console.log("Category:",t),console.log("Mode:",y),console.log("Difficulty:",p),console.log("Count:",j);const $=Dg(E,{categorySlug:t,difficulty:p,count:j});if($.questions.length===0){console.error("No questions found!"),console.log("Looking for category:",t),console.log("Available categories (first 10):",[...new Set(E.map(J=>_a(J.category)))].slice(0,10)),w(`No questions found for "${ts(t)}" with difficulty "${p}"`);return}console.log("Session built with",$.questions.length,"questions"),R($),L(Date.now()),T(0),Q("quiz")},[E,t,y,p,j,r.state,r.search]),d.useEffect(()=>{if(F!=="quiz"||!B)return;const $=setInterval(()=>{T(Date.now()-B)},1e3);return()=>clearInterval($)},[F,B]);const _=d.useCallback($=>{if(console.log("Quiz completed - Mode:",y,"isPractice:",g,"Results:",$),!$||!$.questions){console.error("Invalid results object:",$);return}const J=$.questions.filter((I,O)=>$.answers[O]!==null&&$.answers[O]!==I.answerIndex).map(I=>I.id);try{const I=ns(Sd,[]),O=Array.from(new Set([...J,...I]));localStorage.setItem(Sd,JSON.stringify(O))}catch(I){console.error("Error saving mistakes:",I)}try{const I=ns(Cd,{sessions:[]});I.sessions.push({cat:ts(t),mode:g?"practice":"quiz",total:$.total,correct:$.correct,skipped:$.skipped.filter(Boolean).length,ms:C,timestamp:Date.now(),earnedXP:g?0:$.correct*10,earnedCoins:g?0:$.correct*5}),localStorage.setItem(Cd,JSON.stringify(I))}catch(I){console.error("Error saving stats:",I)}const ie={ts:Date.now(),slug:t,categoryLabel:ts(t),mode:g?"practice":"quiz",difficulty:p,total:$.total,timer:g?null:k,ms:C,attempted:$.answers.filter(I=>I!==null).length,correct:$.correct,questions:$.questions,answers:$.answers,skipped:$.skipped,isPractice:g};try{localStorage.setItem(Ed,JSON.stringify(ie)),localStorage.setItem(Td,JSON.stringify({questions:$.questions,answers:$.answers,skipped:$.skipped}));const I=ns(Rd,[]),W=[{id:ie.ts,ts:ie.ts,cat:ie.categoryLabel,slug:t,mode:g?"Practice":"Quiz",total:$.total,correct:$.correct,ms:C,snapshot:ie},...I].slice(0,Ag);localStorage.setItem(Rd,JSON.stringify(W))}catch(I){console.error("Error saving snapshot:",I)}if(localStorage.removeItem(Pg),g&&$.earnedCoins?$.earnedCoins:!g&&$.correct>0&&$.correct*5,!g&&$.correct>0){const I=$.correct*10;l(I)}c(),q({...$,category:ts(t),categorySlug:t,difficulty:p,mode:g?"practice":"quiz",elapsedMs:C,isPractice:g,hasTimer:!g,earnedXP:g?0:$.correct*10,earnedCoins:g?$.earnedCoins||0:$.correct*5}),Q("results")},[t,y,k,C,g]),A=d.useCallback(()=>{h?e("/profile/history",{replace:!0,state:null}):e("/")},[h,e]),M=d.useCallback(()=>{console.log("Retake requested - Mode:",y,"isPractice:",g);const $=ns(Ed,null);if(!$||$.slug!==t){e(`/quiz/${t}?r=${Date.now()}`,{replace:!0,state:{mode:g?"practice":"quiz",difficulty:p,count:j,timer:g?null:k,retake:!0}});return}const J=$.questions.map(ie=>{const I=gm([0,1,2,3]);return{...ie,options:I.map(O=>ie.options[O]),answerIndex:I.indexOf(ie.answerIndex)}});R({questions:J,poolSize:J.length}),L(Date.now()),T(0),Q("quiz"),window.scrollTo(0,0)},[t,y,p,j,k,e,g]),D=d.useCallback(($=null)=>{if($)q($);else if(!ee){const J=ns(Td,null);J&&q({questions:J.questions||[],answers:J.answers||[],skipped:J.skipped||[]})}Q("review")},[ee]),X=d.useCallback(()=>{h?e("/profile/history",{replace:!0}):Q("results")},[h,e]);return z?n.jsx("div",{className:"fixed inset-0 bg-inherit text-white flex items-center justify-center",children:n.jsx("div",{className:"text-sm text-base-muted",children:"Loading questions…"})}):b?n.jsx("div",{className:"fixed inset-0 bg-inherit text-white flex items-center justify-center",children:n.jsx("div",{className:"text-sm text-red-400",children:b})}):(console.log("Render - Current view:",F,"Session questions:",N.questions.length,"Mode:",y,"isPractice:",g),n.jsx("div",{className:"fixed inset-0 bg-inherit text-white z-0 overflow-x-hidden max-w-[100vw]",children:n.jsxs("div",{className:"h-full overflow-y-auto overscroll-y-none overflow-x-hidden touch-pan-y px-0 pt-[max(env(safe-area-inset-top),72px)] pb-[clamp(12px,env(safe-area-inset-bottom),20px)]",children:[F==="quiz"&&N.questions.length>0&&n.jsx(jg,{session:N,mode:g?"practice":"quiz",category:ts(t),difficulty:p,timerConfig:g?null:k,onComplete:_,onQuit:A,isPractice:g}),F==="results"&&ee&&n.jsx(Tg,{results:ee,onRetake:M,onReview:()=>D(ee),isRetake:v,isPractice:g,player:i,categories:mm,addCoins:o,onNavigate:($,J)=>{J!=null&&J.replace?e($,{replace:!0,state:J}):e($,{state:J})}}),F==="review"&&ee&&n.jsx(_g,{questions:ee.questions||[],answers:ee.answers||[],skipped:ee.skipped||[],onBack:X,onRetake:M,fromHistory:h,isPractice:g})]})}))}const Sn=[{label:"General Knowledge",slug:"general-knowledge",color:"#7C3AED",soon:!1},{label:"Current Affairs",slug:"current-affairs",color:"#2563EB",soon:!1},{label:"Fun Facts",slug:"fun-facts",color:"#EF4444",soon:!1},{label:"Science",slug:"science",color:"#10B981",soon:!1},{label:"History",slug:"history",color:"#F59E0B",soon:!0},{label:"Geography",slug:"geography",color:"#FACC15",soon:!0},{label:"Cat 1",slug:"cat-1",color:"#06B6D4",soon:!0},{label:"Cat 2",slug:"cat-2",color:"#D946EF",soon:!0}],Hn=360/Sn.length,Fg=42,Ki=3e3,_d=10,Pd=260,Og="cubic-bezier(.15,.7,.1,1)",$g="cubic-bezier(.2,.7,.2,1)",kn=5,Bg=5,Ug=(e="")=>String(e).toLowerCase().trim().replace(/[^\w\s-]/g,"").replace(/\s+/g,"-");function qg({muted:e=!1,size:t=18}){return n.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24","aria-hidden":"true",children:[n.jsx("path",{d:"M3 9h4l5-4v14l-5-4H3z",fill:"currentColor"}),!e&&n.jsxs(n.Fragment,{children:[n.jsx("path",{d:"M16 8c1.5 1.5 1.5 6 0 7.5",stroke:"currentColor",strokeWidth:"2",fill:"none",strokeLinecap:"round"}),n.jsx("path",{d:"M19 6c3 3 3 10 0 13",stroke:"currentColor",strokeWidth:"2",fill:"none",strokeLinecap:"round"})]}),e&&n.jsx("line",{x1:"3",y1:"21",x2:"21",y2:"3",stroke:"#EF4444",strokeWidth:"2.5",strokeLinecap:"round"})]})}function Yg({q:e,locked:t,onPick:r,result:s}){if(!e)return null;const a=[e.option1,e.option2,e.option3,e.option4];return n.jsxs("div",{className:"mt-5 rounded-3xl bg-white/5 border border-white/10 p-4",children:[n.jsx("div",{className:"text-sm text-base-muted mb-1",children:"Quick question"}),n.jsx("div",{className:"text-xl font-semibold mb-4",children:e.question}),a.map((i,o)=>{const l=s&&i===e.answer,c=s&&s.pick===i&&i!==e.answer;return n.jsx("button",{disabled:t||!!s,onClick:()=>r(i),className:["w-full text-left px-4 py-2 rounded-xl mb-2 border transition",!s&&!t?"bg-white/5 hover:bg-white/10 border-white/10":"bg-white/5 border-white/10",l?"bg-green-600/20 border-green-400/60 text-green-200":"",c?"bg-red-600/20 border-red-400/60 text-red-200":""].join(" "),children:i},o)}),s&&n.jsxs("div",{className:"mt-3 text-sm",children:[s.correct?n.jsx("span",{className:"text-green-400 font-medium",children:"✅ Correct!"}):n.jsxs("span",{className:"text-red-400 font-medium",children:["❌ Not quite. Answer: ",n.jsx("b",{children:e.answer})]}),e.explanation&&n.jsxs("div",{className:"text-xs text-base-muted mt-1",children:["Tip: ",e.explanation]})]})]})}function Qg(){const e=wt(),[t]=zt("/sounds/correct.mp3",{volume:.7}),[r]=zt("/sounds/wrong.mp3",{volume:.7}),[s,a]=d.useState(()=>[{name:"Player 1",color:"#60A5FA",scores:Array(kn).fill(null)},{name:"Player 2",color:"#F472B6",scores:Array(kn).fill(null)}]),[i,o]=d.useState(0),[l,c]=d.useState(1),u=s.reduce((I,O)=>I+O.scores.reduce((W,V)=>W+(V??0),0),0),[f,x]=d.useState(!0),m=d.useRef(null);d.useEffect(()=>{const I=new Audio("/sounds/spin.mp3");return I.loop=!0,I.volume=.7,m.current=I,()=>{try{I.pause(),I.src=""}catch{}}},[]);const y=()=>{if(f&&m.current)try{m.current.currentTime=0,m.current.play()}catch{}},p=()=>{if(m.current)try{m.current.pause(),m.current.currentTime=0}catch{}},[j,k]=d.useState(0),[v,h]=d.useState("none"),[g,E]=d.useState(!1),[P,z]=d.useState(null),[S,b]=d.useState(null),w=d.useMemo(()=>typeof window<"u"?window.matchMedia("(prefers-reduced-motion: reduce)").matches:!1,[]),[N,R]=d.useState([]);d.useEffect(()=>{(async()=>{try{const I=await fetch("/data/quiz_questions_bank.csv").then(te=>te.text()),{data:O}=dr.parse(I,{header:!0,skipEmptyLines:!0,transformHeader:te=>String(te).trim().toLowerCase()}),W={a:0,b:1,c:2,d:3},V=O.map((te,K)=>{var ae;const Y=(te.question??"").trim();if(!Y)return null;const ne=[te.option1,te.option2,te.option3,te.option4].map(ke=>String(ke??"").trim());if(ne.some(ke=>!ke))return null;let U=String(te.answer??"").trim(),H=W[U.toLowerCase()];if(H===void 0){const ke=ne.findIndex(fe=>fe.toLowerCase()===U.toLowerCase());H=ke>=0?ke:0}const Z=ne[H];return{id:((ae=te.id)==null?void 0:ae.trim())||`ps_${K}`,question:Y,option1:ne[0],option2:ne[1],option3:ne[2],option4:ne[3],answer:Z,explanation:String(te.explanation??"").trim(),catSlug:Ug(te.category??te.subject??"general knowledge"),difficulty:String(te.difficulty??"medium").toLowerCase().trim()}}).filter(Boolean);R(V)}catch{R([])}})()},[]);const[F,Q]=d.useState(null),[ee,q]=d.useState(null),[B,L]=d.useState(!1),C=I=>(I%360+360)%360,T=I=>C(I),_=l>kn;function A(){if(s.length>=4)return;const I=["#60A5FA","#F472B6","#F59E0B","#34D399","#F87171","#A78BFA"],O=I[(s.length*2+1)%I.length];a(W=>[...W,{name:`Player ${W.length+1}`,color:O,scores:Array(kn).fill(null)}])}function M(){s.length<=2||(a(I=>I.slice(0,-1)),o(I=>Math.min(I,s.length-2)))}function D(I){a(O=>O.map((W,V)=>V===i?{...W,scores:W.scores.map((te,K)=>K===l-1?I:te)}:W))}function X(){if(g||_)return;z(null),b(null),Q(null),q(null),E(!0),y();const I=Math.floor(Math.random()*Sn.length),O=Sn[I],W=Hn*.28,V=(Math.random()*2-1)*W,te=C(j),K=180,ne=I*Hn+Hn/2+V;let U=T(ne-te-K);const H=Fg*360+U,Z=j+H+_d;h(`transform ${w?800:Ki}ms ${Og}`),k(Z);try{navigator.vibrate&&!w&&navigator.vibrate([10,40,10])}catch{}setTimeout(()=>{h(`transform ${w?160:Pd}ms ${$g}`),k(ae=>ae-_d)},w?800:Ki),setTimeout(()=>{if(p(),E(!1),z(I),b(O.color),O.soon)return;const ae=N.filter(fe=>fe.catSlug===O.slug&&fe.difficulty==="easy"),ke=ae.length?ae:N.filter(fe=>fe.catSlug===O.slug);if(ke.length){const fe=ke[Math.floor(Math.random()*ke.length)];Q(fe)}else Q({question:"No question found for this category yet. Try re-spinning!",option1:"Okay",option2:"Okay",option3:"Okay",option4:"Okay",answer:"Okay",explanation:""})},(w?800:Ki)+(w?160:Pd)+40)}function $(I){if(!F||ee)return;const O=I===F.answer;if(q({correct:O,pick:I}),O){t(),L(!0),setTimeout(()=>L(!1),900);try{navigator.vibrate&&navigator.vibrate([8,16])}catch{}D(Bg)}else{r();try{navigator.vibrate&&navigator.vibrate([4])}catch{}D(0)}}function J(){const I=(i+1)%s.length,O=I===0?l+1:l;o(I),c(O),z(null),b(null),Q(null),q(null)}function ie(){const I=s.map(V=>V.scores.reduce((te,K)=>te+(K??0),0)),O=Math.max(...I),W=s.filter((V,te)=>I[te]===O).map(V=>V.name).join(", ");alert(`${W} win${W.includes(",")?"":"s"} the pot of ${u} coins! 🎉`),e("/play")}return n.jsxs("div",{className:"min-h-screen bg-black text-white",children:[B&&n.jsx(pm,{numberOfPieces:120,recycle:!1}),n.jsxs("div",{className:"mx-auto max-w-md px-5 pt-[calc(env(safe-area-inset-top)+1.25rem)] pb-[calc(5.25rem+env(safe-area-inset-bottom))]",children:[n.jsxs("header",{className:"flex items-center justify-between mb-4",children:[n.jsx("button",{onClick:()=>e("/play"),className:"h-10 w-10 grid place-items-center rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition","aria-label":"Back",children:"←"}),n.jsxs("div",{className:"text-center",children:[n.jsx("h1",{className:"text-2xl font-bold",children:"Party Spin"}),n.jsx("p",{className:"text-sm text-base-muted",children:"Pass & play • Winner takes the pot"})]}),n.jsx("button",{onClick:()=>x(I=>!I),className:"h-10 w-10 grid place-items-center rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition","aria-label":f?"Mute sound":"Unmute sound",title:f?"Sound on":"Sound off",children:n.jsx(qg,{muted:!f})})]}),n.jsxs("section",{className:"rounded-2xl border border-white/10 bg-white/5 p-3 mb-4",children:[n.jsxs("div",{className:"flex items-center justify-between mb-2",children:[n.jsxs("div",{className:"text-sm",children:["Round ",n.jsx("b",{children:Math.min(l,kn)}),"/",n.jsx("b",{children:kn})]}),n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx("button",{onClick:A,className:"btn-ghost px-2 py-1 text-sm",children:"+"}),n.jsx("span",{className:"text-sm text-base-muted",children:"Player"}),n.jsx("button",{onClick:M,className:"btn-ghost px-2 py-1 text-sm",children:"−"})]}),n.jsxs("div",{className:"text-sm",children:["Pot: ",n.jsx("b",{className:"text-yellow-300",children:u})," 🪙"]})]}),n.jsx("div",{className:"overflow-x-auto",children:n.jsxs("table",{className:"w-full table-fixed text-sm tracking-tight tabular-nums",children:[n.jsxs("colgroup",{children:[n.jsx("col",{style:{width:"42%"}}),n.jsx("col",{style:{width:"9%"}}),n.jsx("col",{style:{width:"9%"}}),n.jsx("col",{style:{width:"9%"}}),n.jsx("col",{style:{width:"9%"}}),n.jsx("col",{style:{width:"9%"}}),n.jsx("col",{style:{width:"13%"}})]}),n.jsx("thead",{children:n.jsxs("tr",{className:"text-base-muted",children:[n.jsx("th",{className:"text-left font-medium py-1 pr-1",children:"Player"}),Array.from({length:kn}).map((I,O)=>n.jsxs("th",{className:"font-medium text-center",children:["R",O+1]},O)),n.jsx("th",{className:"font-medium text-right pr-1",children:"Total"})]})}),n.jsx("tbody",{children:s.map((I,O)=>{const W=I.scores.reduce((te,K)=>te+(K??0),0),V=O===i;return n.jsxs("tr",{className:V?"bg-white/6":"",children:[n.jsx("td",{className:"py-1 pr-1",children:n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx("span",{className:"inline-block h-3 w-3 rounded-full shrink-0",style:{background:I.color}}),n.jsx("input",{className:"bg-transparent outline-none font-semibold w-full",value:I.name,onChange:te=>a(K=>K.map((Y,ne)=>ne===O?{...Y,name:te.target.value}:Y))})]})}),I.scores.map((te,K)=>n.jsx("td",{className:"text-center",children:te===null?"–":te},K)),n.jsx("td",{className:"text-right pr-1 font-semibold",children:W})]},O)})})]})})]}),n.jsx("section",{className:"flex flex-col items-center",children:n.jsxs("div",{className:"relative w-[320px] h-[320px] md:w-[380px] md:h-[380px] rounded-full select-none",children:[S&&n.jsx("div",{className:"pointer-events-none absolute -inset-2 rounded-full",style:{boxShadow:`0 0 0 6px ${S}33, 0 0 30px 8px ${S}44`}}),n.jsx("div",{className:"absolute inset-0 rounded-full border border-white/10 shadow-2xl bg-black/20 overflow-hidden will-change-transform",style:{transform:`rotate(${j}deg)`,transition:v},"aria-label":"Category wheel",role:"group",children:n.jsxs("svg",{width:"100%",height:"100%",viewBox:"0 0 100 100",className:"block",children:[Sn.map((I,O)=>{const W=O*Hn,V=W+Hn,te=Hn>180?1:0,K=Math.PI*W/180,Y=Math.PI*V/180,ne=50+50*Math.cos(K),U=50-50*Math.sin(K),H=50+50*Math.cos(Y),Z=50-50*Math.sin(Y),ae=P===O;return n.jsxs("g",{style:{opacity:P==null?.95:ae?1:.78,filter:P!=null&&!ae?"blur(0.6px)":"none"},children:[n.jsx("path",{d:`M50,50 L${ne},${U} A50,50 0 ${te} 0 ${H},${Z} Z`,fill:I.color,stroke:ae?`${I.color}AA`:"rgba(255,255,255,0.14)",strokeWidth:ae?"1.2":"0.6"}),n.jsx("text",{x:"50",y:"50",fill:"#ffffff",fontSize:"4",fontWeight:"700",dominantBaseline:"middle",transform:`rotate(${W+Hn/2} 50 50) translate(12 0)`,children:n.jsxs("tspan",{children:[I.label,I.soon?" (soon)":""]})})]},I.slug)}),n.jsx("circle",{cx:"50",cy:"50",r:"9",fill:"rgba(0,0,0,0.55)",stroke:"white",strokeOpacity:"0.25"})]})}),n.jsx("button",{onClick:X,disabled:g||_,className:["absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2","h-16 w-16 rounded-full grid place-items-center","bg-white text-black font-extrabold shadow-soft transition active:scale-[0.98]",g||_?"opacity-60 cursor-not-allowed":"hover:bg-gray-200"].join(" "),"aria-label":"Spin the wheel",children:"SPIN"}),n.jsx("div",{className:"absolute left-1/2 -translate-x-1/2 -bottom-3 z-20",children:n.jsx("svg",{width:"22",height:"22",viewBox:"0 0 24 24",children:n.jsx("path",{d:"M12 4 L20 20 L4 20 Z",fill:"#ffffff"})})}),P!=null&&!g&&n.jsx("div",{className:"absolute left-1/2 -translate-x-1/2 -bottom-10",children:n.jsxs("div",{className:"px-3 py-1 rounded-full bg-white/10 border border-white/20 text-sm backdrop-blur",children:[n.jsx("span",{className:"inline-block h-2.5 w-2.5 rounded-full mr-2 align-middle",style:{background:Sn[P].color}}),Sn[P].label]})})]})}),n.jsx("section",{className:"mt-4",children:_?n.jsxs("div",{className:"rounded-2xl border border-white/10 bg-white/5 p-4",children:[n.jsx("div",{className:"text-xl font-semibold mb-2",children:"Match Over"}),n.jsxs("p",{className:"text-sm text-base-muted mb-3",children:["Top score takes the pot of ",n.jsx("b",{className:"text-yellow-300",children:u})," coins."]}),n.jsx("button",{className:"btn-primary w-full",onClick:ie,children:"End match"})]}):P!=null&&Sn[P].soon?n.jsxs("div",{className:"rounded-2xl border border-white/10 bg-white/5 p-4",children:[n.jsx("div",{className:"text-lg font-semibold mb-1",children:Sn[P].label}),n.jsx("p",{className:"text-sm text-base-muted mb-3",children:"This category is arriving soon. Spin again!"}),n.jsx("button",{className:"btn-primary",onClick:X,disabled:g,children:"Re-spin"})]}):n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:"text-sm text-center text-base-muted mb-1",children:["Turn: ",n.jsx("span",{style:{color:s[i].color},children:s[i].name})," ","| Round ",l,"/",kn]}),n.jsx(Yg,{q:F,locked:g||!F,onPick:$,result:ee}),ee&&n.jsx("div",{className:"mt-3 flex justify-center",children:n.jsx("button",{className:"btn-primary",onClick:J,children:"Next turn"})})]})})]}),n.jsx("div",{className:"pointer-events-none fixed inset-x-0 bottom-0 bg-[#0B0F1A]",style:{height:"calc(5.25rem + env(safe-area-inset-bottom))"},"aria-hidden":!0})]})}const Hg=({onSelect:e})=>{const t=[{id:"random",emoji:"🎲",title:"Random Mix",color:"from-purple-500 to-pink-500"},{id:"trending",emoji:"📈",title:"Trending Now",color:"from-blue-500 to-cyan-500"},{id:"level",emoji:"📊",title:"Your Level",color:"from-green-500 to-teal-500"},{id:"daily",emoji:"🎯",title:"Daily Challenge",color:"from-orange-500 to-red-500"}];return n.jsxs("div",{className:"fixed inset-0 bg-gray-900 overflow-hidden flex flex-col justify-center items-center px-4",children:[n.jsx("h1",{className:"text-2xl font-bold text-white mb-20",children:"Choose a swipe mode"}),n.jsx("div",{className:"grid grid-cols-2 gap-4 w-full max-w-md h-[55vh]",children:t.map(r=>n.jsxs("button",{onClick:()=>e(r.id,r.title),className:`rounded-3xl bg-gradient-to-br ${r.color} p-6 flex flex-col items-center justify-center gap-3 transform hover:scale-105 transition-all shadow-xl`,children:[n.jsx("span",{className:"text-5xl",children:r.emoji}),n.jsx("span",{className:"text-white font-bold text-lg text-center",children:r.title})]},r.id))})]})},Wg=()=>{wt();const{player:e,addCoins:t,addXP:r}=wn(),[s,a]=d.useState([]),[i,o]=d.useState(0),[l,c]=d.useState({}),[u,f]=d.useState(0),[x,m]=d.useState(5),[y,p]=d.useState(0),[j,k]=d.useState(!0),[v,h]=d.useState(null),[g,E]=d.useState(!0),[P,z]=d.useState(null),[S,b]=d.useState(""),[w,N]=d.useState(!1),[R,F]=d.useState(""),[Q,ee]=d.useState(!1),[q,B]=d.useState(!1),[L,C]=d.useState(!1),[T,_]=d.useState(!1),[A,M]=d.useState(!1),[D,X]=d.useState(!1),[$,J]=d.useState(0),[ie,I]=d.useState(0),[O,W]=d.useState(-1),[V,te]=d.useState(-1),[K,Y]=d.useState({}),[ne,U]=d.useState({}),H=d.useRef(null),Z=d.useRef(null),[ae]=zt("/sounds/correct.mp3",{volume:.6}),[ke]=zt("/sounds/wrong.mp3",{volume:.6}),[fe]=zt("/sounds/coin.mp3",{volume:.75}),me=["🐼","🐱","🐶","🦊","🐰","🐨","🐯","🦁","🐸","🐵"],Se=()=>{a([]),o(0),c({}),f(0),m(5),p(0),k(!0),h(null),N(!1),F(""),ee(!1),B(!1),C(!1),_(!1),M(!1),X(!1),J(0),I(0),W(-1),te(-1),Y({}),U({}),z(null),b(""),Te(null)};d.useEffect(()=>(Se(),E(!0),()=>{document.body.classList.remove("hide-bottom-nav"),Se(),Z.current&&clearTimeout(Z.current)}),[]),d.useEffect(()=>{!g&&s.length>0?document.body.classList.add("hide-bottom-nav"):document.body.classList.remove("hide-bottom-nav")},[g,s.length]),d.useEffect(()=>{!g&&s.length>0&&_(!0)},[g,s.length]);const[Re,Te]=d.useState(null);d.useEffect(()=>{const re=ue=>{var Ae;if(T&&!L){const be=ue.target.closest('button[type="button"]'),Ge=(Ae=be==null?void 0:be.querySelector(".text-\\[10px\\]"))==null?void 0:Ae.textContent;Ge&&["Home","Play","Profile","Swipe"].includes(Ge)&&(ue.preventDefault(),ue.stopPropagation(),Te({Home:"/",Play:"/play",Profile:"/profile",Swipe:"/swipe"}[Ge]),B(!0))}};return document.addEventListener("click",re,!0),()=>document.removeEventListener("click",re,!0)},[T,L]),d.useEffect(()=>{const re=H.current;if(!re)return;let ue=!1,Ae=0,be=null;const Ge=pe=>{!g&&s.length>0&&pe.preventDefault()},ge=pe=>{Ae=pe.touches[0].clientY,ue=!1},oe=pe=>{!g&&s.length>0&&!q&&!Q&&pe.preventDefault()},le=pe=>{if(ue||q||Q)return;const je=pe.changedTouches[0].clientY,xe=Ae-je;if(Math.abs(xe)>30){if(ue=!0,be&&clearTimeout(be),xe>0&&i<s.length-1){const Le=i+1;o(Le),re.scrollTo({top:Le*window.innerHeight,behavior:"smooth"})}else if(xe<0&&i>0){const Le=i-1;o(Le),re.scrollTo({top:Le*window.innerHeight,behavior:"smooth"})}be=setTimeout(()=>{ue=!1},800)}};return re.addEventListener("touchstart",ge,{passive:!1}),re.addEventListener("touchmove",oe,{passive:!1}),re.addEventListener("touchend",le,{passive:!1}),re.addEventListener("wheel",Ge,{passive:!1}),()=>{re.removeEventListener("touchstart",ge),re.removeEventListener("touchmove",oe),re.removeEventListener("touchend",le),re.removeEventListener("wheel",Ge),be&&clearTimeout(be)}},[i,s.length,g]),d.useEffect(()=>{const re=H.current;re&&(q||Q?(re.style.overflow="hidden",re.style.touchAction="none"):(re.style.overflow="auto",re.style.touchAction="auto"))},[q,Q]),d.useEffect(()=>{(q||Q)&&Z.current&&(clearTimeout(Z.current),Z.current=null)},[q,Q]);const he=async re=>{try{const Ae=await(await fetch("/data/quiz_questions_bank.csv")).text(),{data:be}=dr.parse(Ae,{header:!0,skipEmptyLines:!0}),oe=be.map((le,pe)=>{var Le,nt;const je=[le.option1,le.option2,le.option3,le.option4].filter(Boolean),xe={A:0,B:1,C:2,D:3};return{id:le.id||`q_${pe}`,prompt:le.question,options:je,answerIndex:xe[(Le=le.answer)==null?void 0:Le.toUpperCase()]||0,category:le.category||"General Knowledge",difficulty:((nt=le.difficulty)==null?void 0:nt.toLowerCase())||"medium",explanation:le.explanation||"",stats:{views:Math.floor(Math.random()*1e4)+1e3,attempted:Math.floor(Math.random()*5e3)+500,correctRate:Math.floor(Math.random()*40)+30}}}).filter(le=>le.prompt&&le.options.length===4).sort(()=>Math.random()-.5).slice(0,50).map(le=>({...le,mascot:me[Math.floor(Math.random()*me.length)]}));a(oe),k(!1)}catch(ue){console.error("Failed to load questions:",ue),k(!1)}},we=re=>re===1||re===3||re===7||re===10||re===15||re===20||re>20&&re%5===0,Ce=(re,ue)=>{if(l[re]!==void 0)return;const Ae=s.find(ge=>ge.id===re),be=ue===Ae.answerIndex,Ge=s.findIndex(ge=>ge.id===re);if(c(ge=>({...ge,[re]:ue})),J(ge=>ge+1),I(ge=>ge+1),be){if(ae(),f(ge=>ge+1),p(ge=>ge+10),X(!0),setTimeout(()=>{fe()},300),setTimeout(()=>X(!1),2e3),_e(),we(Ge+1)){const ge=["Awesome!","Perfect!","Brilliant!","Outstanding!","Incredible!"];F(ge[Math.floor(Math.random()*ge.length)]),N(!0),setTimeout(()=>N(!1),2e3)}}else if(ke(),f(0),M(!0),setTimeout(()=>M(!1),1500),m(ge=>{const oe=Math.max(0,ge-1);return oe===0&&setTimeout(()=>ee(!0),500),oe}),x>1&&we(Ge+1)){const ge=["Keep trying!","You got this!","Don't give up!","Stay strong!","Keep going!"];F(ge[Math.floor(Math.random()*ge.length)]),N(!0),setTimeout(()=>N(!1),2e3)}(x>1||be)&&(Z.current=setTimeout(()=>{Ke()},2500))},_e=()=>{const re=document.createElement("div");re.style.position="fixed",re.style.inset="0",re.style.pointerEvents="none",re.style.zIndex="1000",document.body.appendChild(re);const ue=["🎉","✨","⭐","🎊","🌟"];for(let Ae=0;Ae<20;Ae++){const be=document.createElement("div");be.textContent=ue[Math.floor(Math.random()*ue.length)],be.style.position="fixed",be.style.left=`${Math.random()*100}%`,be.style.top="-50px",be.style.fontSize="24px",be.style.animation=`fall ${2+Math.random()*2}s ease-out`,re.appendChild(be)}setTimeout(()=>re.remove(),4e3)},Ke=()=>{if(!(q||Q)&&i<s.length-1){const re=i+1,ue=document.getElementById(`question-${re}`);ue==null||ue.scrollIntoView({behavior:"smooth"}),o(re)}},pt=re=>{const ue=s.findIndex(ge=>ge.id===re);if(O>=0&&$<5){h(`After ${5-$} attempts`),setTimeout(()=>h(null),2e3);return}const Ae=s[ue],Ge=[0,1,2,3].filter(ge=>ge!==Ae.answerIndex).sort(()=>Math.random()-.5).slice(0,2);Y({...K,[re]:Ge}),W(ue),J(0)},it=re=>{const ue=s.findIndex(pe=>pe.id===re);if(V>=0&&ie<5){h(`After ${5-ie} attempts`),setTimeout(()=>h(null),2e3);return}const be=s[ue].answerIndex,Ge=[0,0,0,0],ge=40+Math.floor(Math.random()*31);Ge[be]=ge;let oe=100-ge;const le=[0,1,2,3].filter(pe=>pe!==be);for(let pe=0;pe<le.length-1;pe++){const je=Math.floor(Math.random()*(oe/2));Ge[le[pe]]=je,oe-=je}Ge[le[le.length-1]]=oe,U({...ne,[re]:Ge}),te(ue),I(0)},Pe=(re,ue)=>{Se(),z(re),b(ue),E(!1),he()},Me=()=>{Te("/swipe"),B(!0)},Je=()=>{C(!0),B(!1),document.body.classList.remove("hide-bottom-nav")},Yr=()=>{const re=Object.keys(l).filter(ue=>{const Ae=s.find(be=>be.id===ue);return l[ue]===(Ae==null?void 0:Ae.answerIndex)}).length;return d.useEffect(()=>{document.body.classList.add("hide-bottom-nav");const ue=setTimeout(()=>{t(y),Se(),_(!1),C(!1),E(!0),document.body.classList.remove("hide-bottom-nav")},2e3);return()=>{clearTimeout(ue),document.body.classList.remove("hide-bottom-nav")}},[]),n.jsx("div",{className:"fixed inset-0 bg-gray-900 z-50 flex items-center justify-center p-4",children:n.jsxs("div",{className:"bg-gray-800 rounded-3xl p-8 max-w-md w-full text-center border border-gray-700",children:[n.jsx("div",{className:"text-5xl mb-4",children:"🎉"}),n.jsx("h2",{className:"text-2xl font-bold text-white mb-4",children:"Session Complete!"}),n.jsxs("div",{className:"space-y-4",children:[n.jsxs("div",{className:"bg-gray-700/50 rounded-xl p-4",children:[n.jsx("div",{className:"text-gray-400 text-sm mb-1",children:"Questions Answered"}),n.jsx("div",{className:"text-2xl font-bold text-white",children:Object.keys(l).length})]}),n.jsxs("div",{className:"bg-gray-700/50 rounded-xl p-4",children:[n.jsx("div",{className:"text-gray-400 text-sm mb-1",children:"Correct Answers"}),n.jsx("div",{className:"text-2xl font-bold text-green-400",children:re})]}),n.jsxs("div",{className:"bg-gray-700/50 rounded-xl p-4",children:[n.jsx("div",{className:"text-gray-400 text-sm mb-1",children:"Coins Earned"}),n.jsxs("div",{className:"text-2xl font-bold text-yellow-400",children:["🪙 ",y]})]}),n.jsxs("div",{className:"bg-gray-700/50 rounded-xl p-4",children:[n.jsx("div",{className:"text-gray-400 text-sm mb-1",children:"Lives Remaining"}),n.jsx("div",{className:"text-2xl font-bold text-red-400",children:Array.from({length:5},(ue,Ae)=>n.jsx("span",{className:Ae<x?"":"opacity-30",children:"❤️"},Ae))})]})]})]})})};return L?n.jsx(Yr,{}):g?n.jsx(Hg,{onSelect:Pe}):j?n.jsx("div",{className:"h-screen bg-gray-900 flex items-center justify-center",children:n.jsx("div",{className:"text-white",children:"Loading questions..."})}):n.jsxs("div",{className:"h-screen bg-gray-900 relative",children:[n.jsxs("div",{className:"fixed top-0 left-0 right-0 bg-gray-900/95 backdrop-blur z-50 border-b border-gray-800 pt-12",children:[n.jsxs("div",{className:"flex items-center justify-between px-4 py-3",children:[n.jsx("button",{onClick:Me,className:"inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/15 rounded-xl text-white text-sm font-medium hover:bg-white/15 transition-all",children:"← Back"}),n.jsxs("div",{className:"flex items-center gap-4",children:[n.jsxs("div",{className:"flex items-center gap-1 bg-yellow-500/20 px-3 py-1 rounded-full",children:[n.jsx("span",{children:"🪙"}),n.jsx("span",{className:"font-bold text-yellow-400",children:y})]}),n.jsxs("div",{className:"flex items-center gap-1 bg-orange-500/20 px-3 py-1 rounded-full",children:[n.jsx("span",{children:"🔥"}),n.jsx("span",{className:"font-bold text-orange-400",children:u})]})]}),n.jsx("div",{className:"flex items-center gap-1",children:Array.from({length:5},(re,ue)=>n.jsx("span",{className:`${ue<x?"text-red-500":"text-gray-600 opacity-30"} ${A&&ue===x-1?"animate-heartLoss":""}`,children:"❤️"},ue))})]}),S&&n.jsx("div",{className:"text-center py-1",children:n.jsx("span",{className:"text-xs text-gray-400",children:S})})]}),D&&n.jsx("div",{className:"fixed top-24 left-1/2 transform -translate-x-1/2 z-50 pointer-events-none",children:n.jsx("div",{className:"bg-yellow-500 text-white px-4 py-2 rounded-full font-bold animate-coinFloat",children:"+10 🪙"})}),n.jsx("div",{ref:H,className:"h-full overflow-y-hidden snap-y snap-mandatory pt-32",style:{scrollBehavior:"smooth",overscrollBehavior:"none",WebkitOverflowScrolling:"touch",touchAction:"none"},children:s.map((re,ue)=>n.jsx(Gg,{question:re,index:ue,answered:l[re.id],onAnswer:Ae=>Ce(re.id,Ae),onFiftyFifty:()=>pt(re.id),onAudience:()=>it(re.id),eliminated:K[re.id]||[],audiencePercentages:ne[re.id],canUseFiftyFifty:O<0||$>=5,canUseAudience:V<0||ie>=5},re.id))}),Q&&n.jsx("div",{className:"fixed inset-0 bg-black/75 flex items-center justify-center z-50 p-4",children:n.jsxs("div",{className:"bg-gray-800 rounded-3xl p-6 max-w-sm w-full text-center border border-gray-700",children:[n.jsx("div",{className:"text-5xl mb-4",children:"😔"}),n.jsx("h3",{className:"text-xl font-bold mb-2 text-white",children:"No Lives Left!"}),n.jsx("p",{className:"text-gray-400 mb-6",children:"Sorry, you have no lives left to continue swiping."}),n.jsx("button",{onClick:()=>{C(!0),document.body.classList.remove("hide-bottom-nav")},className:"w-full bg-gradient-to-r from-blue-600 to-purple-600 py-3 rounded-xl text-white font-medium",children:"View Results"})]})}),q&&n.jsx("div",{className:"fixed inset-0 bg-black/75 flex items-center justify-center z-50 p-4",children:n.jsxs("div",{className:"bg-gray-800 rounded-3xl p-6 max-w-sm w-full text-center border border-gray-700",children:[n.jsx("div",{className:"text-4xl mb-4",children:"🤔"}),n.jsx("h3",{className:"text-xl font-bold mb-2 text-white",children:"Leave Swipe Mode?"}),n.jsx("p",{className:"text-gray-400 mb-6",children:"Your progress will be saved"}),n.jsxs("div",{className:"flex gap-3",children:[n.jsx("button",{onClick:()=>B(!1),className:"flex-1 bg-blue-600 hover:bg-blue-700 py-3 rounded-xl font-medium text-white",children:"Stay"}),n.jsx("button",{onClick:Je,className:"flex-1 bg-gray-700 hover:bg-gray-600 py-3 rounded-xl font-medium text-white",children:"Leave"})]})]})}),w&&n.jsx("div",{className:"fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50",children:n.jsx("div",{className:"bg-gradient-to-br from-purple-600 to-pink-600 px-8 py-6 rounded-3xl text-white font-bold text-2xl shadow-2xl animate-fadeIn",children:R})}),v&&n.jsx("div",{className:"fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 pointer-events-none",children:n.jsx("div",{className:"bg-gray-800/90 px-6 py-3 rounded-full text-white font-bold animate-fadeIn",children:v})}),n.jsx("style",{jsx:!0,children:`
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
      `})]})},Gg=({question:e,index:t,answered:r,onAnswer:s,onFiftyFifty:a,onAudience:i,eliminated:o,audiencePercentages:l,canUseFiftyFifty:c,canUseAudience:u})=>{const f=x=>{switch(x){case"easy":return"from-green-500 to-green-600";case"hard":return"from-red-500 to-red-600";default:return"from-yellow-500 to-yellow-600"}};return n.jsxs("div",{id:`question-${t}`,className:"h-screen snap-start flex flex-col px-4 pb-4",style:{paddingTop:"150px"},children:[n.jsx("div",{className:"flex justify-center py-2",children:n.jsx("span",{className:"text-8xl",style:{animation:"float 3s ease-in-out infinite"},children:e.mascot})}),n.jsxs("div",{className:"flex-1 flex flex-col justify-start max-w-md mx-auto w-full",children:[n.jsxs("div",{className:`bg-gradient-to-br ${f(e.difficulty)} p-6 rounded-3xl mb-4`,children:[n.jsxs("div",{className:"text-white/80 text-sm mb-2",children:["Question ",t+1]}),n.jsx("h2",{className:"text-2xl font-bold text-white",children:e.prompt})]}),n.jsx("div",{className:"space-y-3 mb-3",children:e.options.map((x,m)=>{const y=r!==void 0,p=r===m,j=m===e.answerIndex,k=o.includes(m);let v="w-full p-4 rounded-2xl font-medium transition-all ";return k?v+="bg-gray-700/30 text-gray-500/50 cursor-not-allowed":y?j?v+="bg-green-500 text-white":p?v+="bg-red-500 text-white":v+="bg-gray-700 text-gray-400":v+="bg-gray-800 text-white hover:bg-gray-700",n.jsx("button",{onClick:()=>!y&&!k&&s(m),disabled:y||k,className:v,children:n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsx("span",{className:"text-lg",children:["🅰️","🅱️","🅲️","🅳️"][m]}),n.jsx("span",{className:"flex-1 text-left",children:x}),l&&l[m]>0&&n.jsxs("span",{className:"bg-purple-600/20 px-2 py-1 rounded-full text-xs",children:[l[m],"%"]}),y&&j&&n.jsx("span",{children:"✓"})]})},m)})}),!r&&n.jsxs("div",{className:"flex justify-center gap-3 mb-3",children:[n.jsx("button",{onClick:a,disabled:!c,className:`px-4 py-2 rounded-lg font-medium text-sm ${c?"bg-orange-600 text-white":"bg-gray-700 text-gray-500"}`,children:"⚡ 50:50"}),n.jsx("button",{onClick:i,disabled:!u,className:`px-4 py-2 rounded-lg font-medium text-sm ${u?"bg-purple-600 text-white":"bg-gray-700 text-gray-500"}`,children:"👥 Audience"})]}),n.jsx("div",{className:"text-center mt-3 mb-2",children:n.jsxs("div",{className:"text-gray-500 text-xs",children:[e.stats.views.toLocaleString()," views • ",e.stats.attempted.toLocaleString()," attempted • ",e.stats.correctRate,"% correct"]})}),n.jsx("div",{className:"text-center mt-12 mb-4",children:n.jsx("div",{className:"text-gray-500 text-sm animate-bounce",children:"Swipe up for next"})})]})]})};function Vg(){const e=wt(),[t,r]=d.useState(""),{player:s,levelProgress:a}=wn(),i=()=>{try{const u=JSON.parse(localStorage.getItem("qp_stats")||'{"sessions":[]}'),f=new Date().setHours(0,0,0,0);return u.sessions.filter(m=>new Date(m.timestamp).setHours(0,0,0,0)===f&&m.mode==="quiz").reduce((m,y)=>m+(y.earnedCoins||0),0)}catch{return 0}},o={name:(s==null?void 0:s.name)||"Player",rank:23,streak:(s==null?void 0:s.currentStreak)||0,todayQuizzes:3,todayCoins:i()};d.useEffect(()=>{const u=new Date().getHours();u<12?r("Good morning"):u<17?r("Good afternoon"):r("Good evening")},[]);const l=`
    rounded-3xl p-5 text-left text-white 
    transition-all duration-300 ease-out
    active:scale-[0.97] hover:scale-[1.02]
    shadow-[0_8px_32px_rgba(0,0,0,0.3)]
    hover:shadow-[0_12px_48px_rgba(0,0,0,0.4)]
    relative overflow-hidden
    before:absolute before:inset-0 before:bg-white/5 before:opacity-0 
    hover:before:opacity-100 before:transition-opacity before:duration-300
  `,c=a.required>0?a.current/a.required*100:0;return n.jsxs("div",{className:"min-h-full bg-[#0B0C10] text-white pt-12 px-3",children:[n.jsxs("div",{className:"mb-6",children:[n.jsxs("div",{className:"flex items-center justify-between mb-4",children:[n.jsxs("div",{children:[n.jsxs("h1",{className:"text-2xl font-bold",children:[t," 👋"]}),n.jsx("p",{className:"text-white/60 text-sm",children:"Ready for today's challenge?"})]}),n.jsx("button",{onClick:()=>e("/profile/settings"),className:"w-12 h-12 rounded-2xl bg-white/10 border border-white/20 grid place-items-center hover:bg-white/20 transition",children:n.jsx("span",{className:"text-xl",children:"⚙️"})})]}),n.jsxs("div",{className:"rounded-3xl bg-gradient-to-r from-slate-800/50 to-slate-900/50 border border-white/10 p-4 backdrop-blur-sm",children:[n.jsxs("div",{className:"flex items-center gap-4 mb-3",children:[n.jsx("div",{className:"w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 grid place-items-center text-2xl font-bold",children:o.name[0]}),n.jsxs("div",{className:"flex-1",children:[n.jsx("div",{className:"text-lg font-semibold",children:s.name||"Player"}),n.jsxs("div",{className:"text-white/60 text-sm",children:["Level ",s.level]})]}),n.jsxs("div",{className:"text-right",children:[n.jsxs("div",{className:"text-yellow-400 font-bold text-lg",children:[s.coins," 🪙"]}),n.jsxs("div",{className:"text-white/60 text-sm",children:["Rank #",o.rank]})]})]}),n.jsxs("div",{className:"mb-3",children:[n.jsxs("div",{className:"flex justify-between text-xs text-white/60 mb-1",children:[n.jsx("span",{children:"XP Progress"}),n.jsxs("span",{children:[a.current,"/",a.required]})]}),n.jsx("div",{className:"h-2 bg-white/10 rounded-full overflow-hidden",children:n.jsx("div",{className:"h-full bg-gradient-to-r from-blue-400 to-purple-500 rounded-full transition-all duration-1000 ease-out",style:{width:`${c}%`}})})]}),n.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[n.jsxs("div",{className:"text-center p-2 rounded-xl bg-white/5",children:[n.jsxs("div",{className:"text-orange-400 font-bold text-lg",children:["🔥 ",o.streak]}),n.jsx("div",{className:"text-white/60 text-xs",children:"Day Streak"})]}),n.jsxs("div",{className:"text-center p-2 rounded-xl bg-white/5",children:[n.jsxs("div",{className:"text-green-400 font-bold text-lg",children:["+",o.todayCoins]}),n.jsx("div",{className:"text-white/60 text-xs",children:"Today"})]})]})]})]}),n.jsxs("button",{onClick:()=>e("/profile/leaderboard"),className:`${l} w-full mb-4 bg-gradient-to-br from-[#5AA9FF] via-[#6C63FF] to-[#9C6BFF]`,children:[n.jsx("div",{className:"absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-8 translate-x-8 animate-pulse"}),n.jsxs("div",{className:"relative flex items-start justify-between",children:[n.jsxs("div",{children:[n.jsx("div",{className:"text-xs opacity-90 mb-1",children:"🏆 Rank & Coins"}),n.jsx("div",{className:"text-3xl font-extrabold tracking-tight mb-2",children:"LEADERBOARD"}),n.jsxs("div",{className:"text-xs opacity-75 flex items-center gap-2",children:[n.jsx("span",{className:"w-2 h-2 bg-green-400 rounded-full animate-pulse"}),"Weekly reset · Ends in 2d 14h"]})]}),n.jsx("div",{className:"w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm grid place-items-center text-2xl border border-white/30",children:"🏆"})]})]}),n.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[n.jsxs("button",{onClick:()=>e("/profile/history"),className:`${l} bg-gradient-to-br from-[#D19A00] to-[#C94B4B] relative`,children:[n.jsx("div",{className:"absolute top-2 right-2 w-3 h-3 bg-white/20 rounded-full"}),n.jsx("div",{className:"text-3xl mb-3",children:"📊"}),n.jsx("div",{className:"text-sm font-bold mb-1",children:"HISTORY"}),n.jsx("div",{className:"text-[11px] opacity-80",children:"Quizzes & Practice"}),n.jsxs("div",{className:"text-[10px] opacity-60 mt-1",children:["+",o.todayQuizzes," today"]})]}),n.jsxs("button",{onClick:()=>e("/profile/rewards"),className:`${l} bg-gradient-to-br from-[#2EB872] to-[#1EA07A] relative`,children:[n.jsx("div",{className:"absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full animate-bounce"}),n.jsx("div",{className:"text-3xl mb-3",children:"🎁"}),n.jsx("div",{className:"text-sm font-bold mb-1",children:"REWARDS"}),n.jsx("div",{className:"text-[11px] opacity-80",children:"Claim & Redeem"}),n.jsx("div",{className:"text-[10px] opacity-60 mt-1",children:"2 available"})]}),n.jsxs("button",{onClick:()=>e("/profile/badges"),className:`${l} bg-gradient-to-br from-[#E65C00] to-[#F9D423] relative`,children:[n.jsx("div",{className:"absolute -top-1 -right-1 w-6 h-6 bg-purple-600 rounded-full grid place-items-center text-[10px] font-bold animate-pulse",children:"NEW"}),n.jsx("div",{className:"text-3xl mb-3",children:"🏅"}),n.jsx("div",{className:"text-sm font-bold mb-1",children:"BADGES"}),n.jsx("div",{className:"text-[11px] opacity-80",children:"Collectables"}),n.jsx("div",{className:"text-[10px] opacity-60 mt-1",children:"4/15 unlocked"})]}),n.jsxs("button",{onClick:()=>e("/profile/achievements"),className:`${l} bg-gradient-to-br from-[#5D26C1] to-[#A17FE0] relative`,children:[n.jsx("div",{className:"text-3xl mb-3",children:"🎯"}),n.jsx("div",{className:"text-sm font-bold mb-1",children:"ACHIEVEMENTS"}),n.jsx("div",{className:"text-[11px] opacity-80",children:"Milestones"}),n.jsx("div",{className:"text-[10px] opacity-60 mt-1",children:"67% complete"})]})]}),n.jsxs("div",{className:"mt-4 space-y-3",children:[n.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[n.jsx("button",{onClick:()=>e("/profile/streaks"),className:`${l} bg-gradient-to-r from-orange-600/80 to-red-600/80 backdrop-blur-sm border border-orange-500/30`,children:n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsx("div",{className:"text-2xl",children:"🔥"}),n.jsxs("div",{children:[n.jsx("div",{className:"text-sm font-bold",children:"STREAK"}),n.jsxs("div",{className:"text-[11px] opacity-80",children:[o.streak," days strong"]})]})]})}),n.jsx("button",{onClick:()=>e("/profile/quests"),className:`${l} bg-gradient-to-r from-blue-600/80 to-cyan-600/80 backdrop-blur-sm border border-blue-500/30`,children:n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsx("div",{className:"text-2xl",children:"⚡"}),n.jsxs("div",{children:[n.jsx("div",{className:"text-sm font-bold",children:"QUESTS"}),n.jsx("div",{className:"text-[11px] opacity-80",children:"2 active goals"})]})]})})]}),n.jsx("button",{onClick:()=>e("/profile/settings"),className:`${l} w-full bg-gradient-to-r from-slate-700/50 to-slate-800/50 backdrop-blur-sm border border-white/10`,children:n.jsxs("div",{className:"flex items-center justify-between",children:[n.jsxs("div",{className:"flex items-center gap-4",children:[n.jsx("div",{className:"w-12 h-12 rounded-2xl bg-white/10 grid place-items-center text-xl",children:"⚙️"}),n.jsxs("div",{children:[n.jsx("div",{className:"text-sm font-bold",children:"SETTINGS"}),n.jsx("div",{className:"text-[11px] opacity-70",children:"Customize your experience"})]})]}),n.jsx("div",{className:"text-white/40",children:"→"})]})})]}),n.jsx("div",{className:"h-6"})]})}const rs="🪙",la={global:[{rank:1,name:"Bryan Wolf",handle:"@bryan",score:43,avatar:"/profile/rank1.png",trend:"+5",streak:12,country:"🇺🇸"},{rank:2,name:"Meghan Jess…",handle:"@meghan",score:40,avatar:"/profile/rank2.png",trend:"+2",streak:8,country:"🇨🇦"},{rank:3,name:"Alex Turner",handle:"@alex",score:38,avatar:"/profile/rank3.png",trend:"±0",streak:15,country:"🇬🇧"},{rank:4,name:"Marsha Fisher",handle:"@marsha",score:36,trend:"-1",streak:5,country:"🇦🇺"},{rank:5,name:"Juanita Cormier",handle:"@juanita",score:35,trend:"+1",streak:3,country:"🇲🇽"},{rank:6,name:"You",handle:"@you",score:34,you:!0,avatar:"/profile/avatar.png",trend:"+3",streak:7,country:"🇮🇳"},{rank:7,name:"Tamara Schmidt",handle:"@tamara",score:33,trend:"-2",streak:2,country:"🇩🇪"},{rank:8,name:"Ricardo Veum",handle:"@ricardo",score:32,trend:"+1",streak:4,country:"🇧🇷"}],friends:[{rank:1,name:"You",handle:"@you",score:34,you:!0,avatar:"/profile/avatar.png",trend:"+2",streak:7,country:"🇮🇳"},{rank:2,name:"Sarah Chen",handle:"@sarah",score:31,trend:"-1",streak:4,country:"🇸🇬",friend:!0},{rank:3,name:"Mike Johnson",handle:"@mike",score:29,trend:"+3",streak:2,country:"🇺🇸",friend:!0},{rank:4,name:"Priya Sharma",handle:"@priya",score:27,trend:"±0",streak:5,country:"🇮🇳",friend:!0},{rank:5,name:"David Kim",handle:"@david",score:25,trend:"+1",streak:3,country:"🇰🇷",friend:!0},{rank:6,name:"Emma Wilson",handle:"@emma",score:23,trend:"-2",streak:1,country:"🇬🇧",friend:!0}],india:[{rank:1,name:"Rohit Sharma",handle:"@rohit",score:45,trend:"+4",streak:10,country:"🇮🇳"},{rank:2,name:"Priya Patel",handle:"@priya",score:42,trend:"+1",streak:8,country:"🇮🇳"},{rank:3,name:"You",handle:"@you",score:34,you:!0,avatar:"/profile/avatar.png",trend:"+3",streak:7,country:"🇮🇳"},{rank:4,name:"Arjun Singh",handle:"@arjun",score:32,trend:"-1",streak:5,country:"🇮🇳"},{rank:5,name:"Kavya Reddy",handle:"@kavya",score:30,trend:"+2",streak:3,country:"🇮🇳"},{rank:6,name:"Vikram Gupta",handle:"@vikram",score:28,trend:"±0",streak:4,country:"🇮🇳"}]},ca=[{name:"Diamond",min:40,color:"from-cyan-400 to-blue-600",icon:"💎"},{name:"Gold",min:30,color:"from-yellow-400 to-orange-500",icon:"🥇"},{name:"Silver",min:20,color:"from-gray-300 to-gray-500",icon:"🥈"},{name:"Bronze",min:10,color:"from-orange-600 to-red-600",icon:"🥉"}];function Xg(){var m,y;const e=wt(),{player:t}=wn(),r={global:la.global.map(p=>p.you?{...p,name:(t==null?void 0:t.name)||"You",score:(t==null?void 0:t.coins)||0,streak:(t==null?void 0:t.currentStreak)||0}:p),friends:la.friends.map(p=>p.you?{...p,name:(t==null?void 0:t.name)||"You",score:(t==null?void 0:t.coins)||0,streak:(t==null?void 0:t.currentStreak)||0}:p),india:la.india.map(p=>p.you?{...p,name:(t==null?void 0:t.name)||"You",score:(t==null?void 0:t.coins)||0,streak:(t==null?void 0:t.currentStreak)||0}:p)};console.log("Debug - Player coins:",t==null?void 0:t.coins),console.log("Debug - Friends data:",r.friends[0]);const[s,a]=d.useState({days:2,hours:14,minutes:17}),[i,o]=d.useState("global"),l=r[i]||r.global;console.log("Player coins:",t==null?void 0:t.coins,"Current user score:",(m=l.find(p=>p.you))==null?void 0:m.score);const c=l.find(p=>p.you),u=l.slice(0,3),f=l.slice(3);d.useEffect(()=>{const p=j=>{j.preventDefault(),e(-1)};return window.addEventListener("popstate",p),()=>{window.removeEventListener("popstate",p)}},[e]),d.useEffect(()=>{const p=setInterval(()=>{a(j=>j.minutes>0?{...j,minutes:j.minutes-1}:j.hours>0?{...j,hours:j.hours-1,minutes:59}:j.days>0?{...j,days:j.days-1,hours:23,minutes:59}:j)},6e4);return()=>clearInterval(p)},[]);const x=p=>{const j=Math.max(...l.map(v=>v.score)),k=p/j*100;return k>=90?ca[0]:k>=70?ca[1]:k>=40?ca[2]:ca[3]};return n.jsxs("div",{className:"min-h-screen bg-black text-white pt-12",children:[n.jsxs("div",{className:"flex items-center justify-between mb-5",children:[n.jsx("button",{onClick:()=>e("/profile",{replace:!0}),className:"px-3 py-1.5 rounded-xl border border-white/10 bg-white/5 text-sm hover:bg-white/10 transition",children:"← Back"}),n.jsxs("div",{className:"text-center",children:[n.jsx("div",{className:"text-lg font-bold",children:"🏆 Leaderboard"}),n.jsxs("div",{className:"text-xs text-white/60",children:["Ends in ",s.days,"d ",s.hours,"h ",s.minutes,"m"]})]}),n.jsx("button",{className:"px-3 py-1.5 rounded-xl border border-white/10 bg-white/5 text-sm hover:bg-white/10 transition",children:"📊"})]}),n.jsxs("div",{className:`mb-5 rounded-2xl bg-gradient-to-r ${x(c==null?void 0:c.score).color} p-4 text-center relative overflow-hidden`,children:[n.jsx("div",{className:"absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -translate-y-10 translate-x-10 animate-pulse"}),n.jsx("div",{className:"absolute bottom-0 left-0 w-16 h-16 bg-white/5 rounded-full translate-y-8 -translate-x-8"}),n.jsxs("div",{className:"relative z-10",children:[n.jsx("div",{className:"text-2xl mb-1",children:x(c==null?void 0:c.score).icon}),n.jsxs("div",{className:"text-sm font-bold text-white",children:[x(c==null?void 0:c.score).name," League"]}),n.jsx("div",{className:"text-xs text-white/80",children:i==="friends"?"Competing with friends!":"You're competing with the best!"})]})]}),n.jsx("div",{className:"flex gap-2 mb-5",children:[{key:"global",label:"🌍 Global",count:"10M+"},{key:"friends",label:"👥 Friends",count:la.friends.length},{key:"india",label:"🇮🇳 India",count:"2.5M"}].map(p=>n.jsxs("button",{onClick:()=>o(p.key),className:`flex-1 px-2 py-2 rounded-xl text-xs font-semibold transition-all duration-300 ${i===p.key?"bg-lime-500 text-black shadow-lg scale-105":"border border-white/10 bg-white/5 hover:bg-white/10"}`,children:[n.jsx("div",{children:p.label}),n.jsx("div",{className:`text-[10px] ${i===p.key?"text-black/70":"text-white/60"}`,children:p.count})]},p.key))}),n.jsx("div",{className:"mb-5 rounded-2xl bg-gradient-to-r from-lime-500/20 to-green-500/20 border border-lime-500/30 p-3",children:n.jsxs("div",{className:"flex items-center justify-between",children:[n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsx("div",{className:"w-10 h-10 rounded-xl bg-lime-500/20 grid place-items-center text-lg",children:"🧑‍💻"}),n.jsxs("div",{children:[n.jsx("div",{className:"font-bold text-lime-400 text-sm",children:"Your Position"}),n.jsxs("div",{className:"text-xs text-white/70 flex items-center gap-2",children:[n.jsxs("span",{children:["Rank #",c==null?void 0:c.rank]}),n.jsx("span",{className:`px-1.5 py-0.5 rounded-full text-[9px] font-bold ${c!=null&&c.trend.startsWith("+")?"bg-green-500/20 text-green-400":c!=null&&c.trend.startsWith("-")?"bg-red-500/20 text-red-400":"bg-gray-500/20 text-gray-400"}`,children:c==null?void 0:c.trend}),n.jsxs("span",{className:"text-white/50 text-[10px]",children:["in ",i==="global"?"Global":i==="friends"?"Friends":"India"]})]})]})]}),n.jsxs("div",{className:"text-right",children:[n.jsxs("div",{className:"text-lg font-bold text-lime-400",children:[c==null?void 0:c.score," ",rs]}),n.jsxs("div",{className:"text-xs text-white/60",children:["🔥 ",c==null?void 0:c.streak," streak"]})]})]})}),n.jsxs("div",{className:"mb-6",children:[n.jsx("h3",{className:"text-center text-sm font-semibold text-white/80 mb-4",children:"👑 Hall of Fame"}),n.jsxs("div",{className:"bg-gradient-to-b from-white/5 to-white/10 rounded-2xl p-4 border border-white/10 relative overflow-hidden",children:[n.jsx("div",{className:"absolute top-4 left-6 text-2xl opacity-40 animate-pulse",children:"🏆"}),n.jsx("div",{className:"absolute top-8 right-8 text-lg opacity-40 animate-bounce",style:{animationDelay:"1s"},children:"✨"}),n.jsx("div",{className:"absolute bottom-6 left-12 text-xl opacity-10 animate-pulse",style:{animationDelay:"2s"},children:"🥇"}),n.jsx("div",{className:"absolute bottom-4 right-6 text-lg opacity-40 animate-bounce",style:{animationDelay:"0.5s"},children:"⭐"}),n.jsxs("div",{className:"flex items-end justify-center gap-8 relative z-10",children:[u[1]&&n.jsxs("div",{className:"flex flex-col items-center",children:[n.jsxs("div",{className:"relative mb-2",children:[n.jsx(da,{src:u[1].avatar,fallback:u[1].name,size:56}),n.jsx("div",{className:"absolute -bottom-1 left-1/2 -translate-x-1/2 w-7 h-7 bg-gradient-to-br from-gray-300 to-gray-500 rounded-full grid place-items-center text-sm font-bold text-black shadow-lg",children:"2"})]}),n.jsx("div",{className:"text-sm font-semibold mb-1 mt-1",children:ua(u[1].name,8)}),n.jsxs("div",{className:"text-xs text-lime-400 font-bold",children:[u[1].score," ",rs]})]}),u[0]&&n.jsxs("div",{className:"flex flex-col items-center -mb-3",children:[n.jsxs("div",{className:"relative mb-2",children:[n.jsx(da,{src:u[0].avatar,fallback:u[0].name,size:72}),n.jsx("div",{className:"absolute -top-3 left-1/2 -translate-x-1/2",children:n.jsx(Kg,{})}),n.jsx("div",{className:"absolute -bottom-1 left-1/2 -translate-x-1/2 w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full grid place-items-center text-base font-bold text-black shadow-lg animate-pulse",children:"1"})]}),n.jsx("div",{className:"text-sm font-bold mb-1 mt-1",children:ua(u[0].name,8)}),n.jsxs("div",{className:"text-sm text-lime-400 font-bold mb-1",children:[u[0].score," ",rs]}),n.jsx("div",{className:"px-2 py-1 bg-yellow-400/20 rounded-full text-[9px] text-yellow-400 font-bold",children:"CHAMPION"})]}),u[2]&&n.jsxs("div",{className:"flex flex-col items-center",children:[n.jsxs("div",{className:"relative mb-2",children:[n.jsx(da,{src:u[2].avatar,fallback:u[2].name,size:56}),n.jsx("div",{className:"absolute -bottom-1 left-1/2 -translate-x-1/2 w-7 h-7 bg-gradient-to-br from-orange-600 to-red-600 rounded-full grid place-items-center text-sm font-bold text-white shadow-lg",children:"3"})]}),n.jsx("div",{className:"text-sm font-semibold mb-1 mt-1",children:ua(u[2].name,8)}),n.jsxs("div",{className:"text-xs text-lime-400 font-bold",children:[u[2].score," ",rs]})]})]})]})]}),f.length>0&&n.jsxs("div",{className:"rounded-3xl bg-white/5 border border-white/10 p-2 mb-4",children:[n.jsxs("div",{className:"flex justify-between items-center mb-2 px-2",children:[n.jsx("h3",{className:"text-sm font-semibold",children:"Rankings"}),n.jsx("div",{className:"text-xs text-white/60",children:"Live updates"})]}),n.jsx("ul",{className:"space-y-1.5",children:f.map((p,j)=>n.jsxs("li",{className:`flex items-center justify-between px-3 py-2.5 rounded-xl transition-all duration-300 ${p.you?"bg-lime-500/90 text-black shadow-lg shadow-lime-500/20 scale-[1.02]":"bg-white/5 hover:bg-white/10"}`,style:{animationDelay:`${j*100}ms`,animation:"fadeInUp 0.6s ease-out forwards"},children:[n.jsxs("div",{className:"flex items-center gap-2.5",children:[n.jsx(Jg,{n:p.rank,you:p.you}),n.jsx(da,{src:p.avatar,fallback:p.name,size:36}),n.jsxs("div",{className:"flex flex-col leading-tight",children:[n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx("span",{className:"text-sm font-semibold",children:ua(p.name,12)}),n.jsx("span",{className:"text-xs",children:p.country}),p.friend&&n.jsx("span",{className:"text-[9px] bg-blue-500/20 text-blue-400 px-1 py-0.5 rounded-full",children:"Friend"})]}),n.jsxs("div",{className:`text-xs flex items-center gap-1.5 ${p.you?"text-black/70":"text-white/60"}`,children:[n.jsx("span",{children:p.handle}),n.jsxs("span",{children:["🔥",p.streak]})]})]})]}),n.jsxs("div",{className:"flex flex-col items-end",children:[n.jsxs("div",{className:"flex items-center gap-1 text-sm font-bold",children:[n.jsx("span",{children:p.score}),n.jsx("span",{className:p.you?"opacity-90":"opacity-80",children:rs})]}),n.jsx("div",{className:`text-xs px-1.5 py-0.5 rounded-full font-bold ${p.trend.startsWith("+")?"bg-green-500/20 text-green-400":p.trend.startsWith("-")?"bg-red-500/20 text-red-400":"bg-gray-500/20 text-gray-400"}`,children:p.trend})]})]},`${i}-${p.rank}`))})]}),c&&c.rank>1&&n.jsxs("div",{className:"mb-4 p-3 rounded-2xl bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 text-center",children:[n.jsx("div",{className:"text-sm font-semibold mb-2",children:"🚀 Climb Higher!"}),n.jsx("div",{className:"text-xs text-white/70 mb-3",children:i==="friends"&&c.rank===1?"🎉 You're #1 among friends!":`You need ${Math.max(0,(((y=l[c.rank-2])==null?void 0:y.score)||0)-c.score+1)} more coins to reach rank #${c.rank-1}`}),!(i==="friends"&&c.rank===1)&&n.jsx("button",{onClick:()=>e("/play"),className:"px-5 py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl text-sm font-bold hover:scale-105 transition-transform",children:"Play Now 🎮"})]}),n.jsx("style",{jsx:!0,children:`
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
      `})]})}function da({src:e,fallback:t,size:r=56}){const s=Zg(t);return n.jsx("div",{className:"grid place-items-center rounded-full bg-white/10 overflow-hidden border-2 border-white/20",style:{width:r,height:r},children:e?n.jsx("img",{src:e,alt:"",className:"w-full h-full object-cover"}):n.jsx("span",{className:"text-sm font-semibold",children:s})})}function Kg(){return n.jsxs("div",{className:"w-7 h-5 bg-gradient-to-t from-yellow-400 to-yellow-300 rounded-b-lg shadow-lg relative",children:[n.jsxs("svg",{viewBox:"0 0 100 40",className:"w-full h-full",children:[n.jsx("path",{d:"M15,35 L15,18 L35,28 L50,10 L65,28 L85,18 L85,35 Z",fill:"url(#crownGradient)"}),n.jsx("defs",{children:n.jsxs("linearGradient",{id:"crownGradient",x1:"0%",y1:"0%",x2:"0%",y2:"100%",children:[n.jsx("stop",{offset:"0%",stopColor:"#FCD34D"}),n.jsx("stop",{offset:"100%",stopColor:"#F59E0B"})]})})]}),n.jsx("div",{className:"absolute top-0.5 left-1/2 -translate-x-1/2 w-1 h-1 bg-red-400 rounded-full animate-pulse"})]})}function Jg({n:e,you:t}){return n.jsx("div",{className:`w-7 h-7 grid place-items-center rounded-full text-sm font-bold ${t?"bg-black/10 text-black":"bg-white/10 text-white"}`,children:e})}function ua(e,t=12){return(e==null?void 0:e.length)>t?e.slice(0,t-1)+"…":e}function Zg(e=""){var r;const t=e.trim().split(/\s+/);return t.length===1?t[0].slice(0,2).toUpperCase():(t[0][0]+(((r=t[1])==null?void 0:r[0])||"")).toUpperCase()}const ev="qp_recent",tv="qp_review_snapshot",Ad=[{id:Date.now()-864e5,type:"quiz",category:"General Knowledge",difficulty:"easy",score:8,total:10,accuracy:80,time:"02:31",ms:151e3,date:"Yesterday",timestamp:Date.now()-864e5,mode:"Quiz"},{id:Date.now()-1728e5,type:"practice",category:"Science",difficulty:"medium",score:12,total:15,accuracy:80,time:"06:02",ms:362e3,date:"2 days ago",timestamp:Date.now()-1728e5,mode:"Practice"},{id:Date.now()-2592e5,type:"quiz",category:"Fun Facts",difficulty:"easy",score:9,total:10,accuracy:90,time:"02:05",ms:125e3,date:"3 days ago",timestamp:Date.now()-2592e5,mode:"Quiz"}];function nv(){const[e,t]=d.useState("quizzes"),[r,s]=d.useState(null),[a,i]=d.useState(!1),[o,l]=d.useState("all"),[c,u]=d.useState("all"),[f,x]=d.useState("date"),[m,y]=d.useState([]),[p,j]=d.useState(!0),k=wt(),v=S=>{if(!S)return"00:00";const b=Math.floor(S/1e3),w=Math.floor(b/60),N=b%60;return`${String(w).padStart(2,"0")}:${String(N).padStart(2,"0")}`},h=S=>{if(!S)return"Unknown";const b=new Date(S),N=Math.floor((new Date-b)/(1e3*60*60*24));return N===0?"Today":N===1?"Yesterday":N<7?`${N} days ago`:`${["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][b.getMonth()]} ${b.getDate()}`};d.useEffect(()=>{let S=!1;j(!0);const b=R=>{try{return JSON.parse(R)}catch{return null}},w=R=>encodeURIComponent(String(R).trim().toLowerCase().replace(/\s+/g,"-")),N=R=>{var A,M,D,X;const F=Number(R.ts??R.timestamp??R.id)||Date.now(),Q=Number(R.ms)||0,ee=Number(R.total)||0,q=Number(R.correct)||0,L=String(R.mode||"").toLowerCase().includes("practice")?"practice":"quiz",C=((A=R.snapshot)==null?void 0:A.category)||((M=R.snapshot)==null?void 0:M.categoryLabel)||R.cat||R.category||"Unknown",T=((D=R.snapshot)==null?void 0:D.categoryParam)||w(C),_=String(((X=R.snapshot)==null?void 0:X.difficulty)||R.difficulty||"medium").toLowerCase();return{id:R.id??F,type:L,category:C,categoryParam:T,difficulty:_,score:q,total:ee,accuracy:ee?Math.round(q/ee*100):0,time:v(Q),ms:Q,date:h(F),timestamp:F,snapshot:R.snapshot??null,mode:R.mode||(L==="practice"?"Practice":"Quiz")}};try{const R=localStorage.getItem(ev),F=R?b(R):null,ee=(Array.isArray(F)&&F.length?F:Ad).map(N).filter(q=>q&&q.timestamp).sort((q,B)=>B.timestamp-q.timestamp);S||y(ee)}catch(R){console.error("Error loading history:",R),S||y(Ad)}finally{S||j(!1)}return()=>{S=!0}},[]);const g=d.useMemo(()=>{const S=new Set(m.map(b=>b.category));return Array.from(S)},[m]),E=d.useMemo(()=>{let S=m.filter(b=>e==="quizzes"?b.type==="quiz":b.type==="practice");return o!=="all"&&(S=S.filter(b=>b.category===o)),c!=="all"&&(S=S.filter(b=>b.difficulty===c)),S.sort((b,w)=>f==="date"?w.timestamp-b.timestamp:f==="score"?w.accuracy-b.accuracy:f==="time"?b.ms-w.ms:0),S},[m,e,o,c,f]),P=d.useMemo(()=>{if(E.length===0)return null;const S=E.reduce((R,F)=>R+F.score,0),b=E.reduce((R,F)=>R+F.total,0),w=b?Math.round(S/b*100):0,N=E.reduce((R,F)=>R+F.ms,0);return{count:E.length,avgAccuracy:w,totalTime:v(N),bestScore:Math.max(...E.map(R=>R.accuracy))}},[E]),z=S=>S>=80?"text-green-400":S>=60?"text-blue-400":S>=40?"text-yellow-400":"text-red-400";return p?n.jsx("div",{className:"min-h-full bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900 flex items-center justify-center",children:n.jsx("div",{className:"text-white",children:"Loading history..."})}):n.jsxs("div",{className:"min-h-full bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900 pt-12",children:[n.jsx("div",{className:"",children:n.jsxs("div",{className:"px-4 pt-4 pb-4",children:[n.jsxs("div",{className:"flex items-center justify-between mb-3",children:[n.jsx("button",{onClick:()=>k("/profile",{replace:!0}),className:"px-3 py-1.5 rounded-xl border border-white/20 bg-white/10 text-white text-sm flex items-center gap-1",children:"← Back"}),n.jsx("button",{onClick:()=>i(!a),className:"p-2 rounded-xl border border-white/20 bg-white/10 text-white",children:n.jsx(av,{})})]}),n.jsx("h1",{className:"text-2xl font-bold text-white mb-1",children:"History"}),n.jsx("p",{className:"text-white/70 text-sm",children:"Track your progress"})]})}),n.jsxs("div",{className:"px-4 pb-20",children:[n.jsx("div",{className:`
             sticky top-0 z-[60] isolate
            -mx-4 px-4
            py-4 mb-2
            bg-gray-900/95
            backdrop-blur-md
            border-b border-white/10
        `,children:n.jsx("div",{className:"flex items-center",children:n.jsx("div",{className:"inline-flex p-1 rounded-2xl bg-white/10 border border-white/20",children:[{value:"quizzes",label:"Quizzes",icon:"🎯"},{value:"practice",label:"Practice",icon:"📝"}].map(S=>n.jsxs("button",{onClick:()=>t(S.value),className:`px-12 py-2 text-sm rounded-xl transition-all duration-200 ${e===S.value?"bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg":"text-white/70 hover:text-white"}`,children:[n.jsx("span",{className:"mr-1",children:S.icon}),S.label]},S.value))})})}),P&&n.jsx("div",{className:"mb-4 p-4 rounded-2xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-white/20",children:n.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-3",children:[n.jsx(fa,{label:"Total",value:P.count}),n.jsx(fa,{label:"Avg Score",value:`${P.avgAccuracy}%`,color:z(P.avgAccuracy)}),n.jsx(fa,{label:"Best Score",value:`${P.bestScore}%`,color:"text-green-400"}),n.jsx(fa,{label:"Total Time",value:P.totalTime})]})}),a&&n.jsx("div",{className:"mb-4 p-4 rounded-2xl bg-white/10 border border-white/20",children:n.jsxs("div",{className:"space-y-3",children:[n.jsxs("div",{children:[n.jsx("label",{className:"text-xs text-white/60 mb-1 block",children:"Category"}),n.jsxs("select",{value:o,onChange:S=>l(S.target.value),className:"w-full px-3 py-2 rounded-xl bg-black/30 border border-white/20 text-white text-sm",children:[n.jsx("option",{value:"all",children:"All Categories"}),g.map(S=>n.jsx("option",{value:S,children:S},S))]})]}),n.jsxs("div",{className:"flex gap-2",children:[n.jsxs("div",{className:"flex-1",children:[n.jsx("label",{className:"text-xs text-white/60 mb-1 block",children:"Difficulty"}),n.jsxs("select",{value:c,onChange:S=>u(S.target.value),className:"w-full px-3 py-2 rounded-xl bg-black/30 border border-white/20 text-white text-sm",children:[n.jsx("option",{value:"all",children:"All"}),n.jsx("option",{value:"easy",children:"Easy"}),n.jsx("option",{value:"medium",children:"Medium"}),n.jsx("option",{value:"hard",children:"Hard"})]})]}),n.jsxs("div",{className:"flex-1",children:[n.jsx("label",{className:"text-xs text-white/60 mb-1 block",children:"Sort By"}),n.jsxs("select",{value:f,onChange:S=>x(S.target.value),className:"w-full px-3 py-2 rounded-xl bg-black/30 border border-white/20 text-white text-sm",children:[n.jsx("option",{value:"date",children:"Date"}),n.jsx("option",{value:"score",children:"Score"}),n.jsx("option",{value:"time",children:"Time"})]})]})]})]})}),E.length===0?n.jsxs("div",{className:"text-center py-12",children:[n.jsx("div",{className:"text-4xl mb-3",children:"📚"}),n.jsxs("p",{className:"text-white/60",children:["No ",e," history yet"]}),n.jsx("p",{className:"text-white/40 text-sm mt-1",children:"Start playing to see your progress here!"})]}):n.jsx("div",{className:"space-y-3",children:E.map((S,b)=>n.jsx(rv,{item:S,index:b,onClick:()=>s(S)},S.id))})]}),r&&n.jsx(sv,{item:r,onClose:()=>s(null)})]})}function fa({label:e,value:t,color:r="text-white"}){return n.jsxs("div",{className:"text-center",children:[n.jsx("div",{className:"text-xs text-white/60 mb-1",children:e}),n.jsx("div",{className:`text-lg font-bold ${r}`,children:t})]})}function rv({item:e,index:t,onClick:r}){const s=o=>o>=80?"from-green-500/20 to-green-600/10 border-green-500/30":o>=60?"from-blue-500/20 to-blue-600/10 border-blue-500/30":o>=40?"from-yellow-500/20 to-yellow-600/10 border-yellow-500/30":"from-red-500/20 to-red-600/10 border-red-500/30",i=(o=>{const l=o==null?void 0:o.toLowerCase();return l==="easy"?{bg:"bg-green-500/20",text:"text-green-400",border:"border-green-500/30"}:l==="medium"?{bg:"bg-yellow-500/20",text:"text-yellow-400",border:"border-yellow-500/30"}:l==="hard"?{bg:"bg-red-500/20",text:"text-red-400",border:"border-red-500/30"}:{bg:"bg-gray-500/20",text:"text-gray-400",border:"border-gray-500/30"}})(e.difficulty);return n.jsxs("div",{onClick:r,className:`
        relative rounded-2xl p-4 cursor-pointer
        bg-gradient-to-br ${s(e.accuracy)}
        border transform transition-all duration-300 hover:scale-[1.02]
      `,children:[n.jsxs("div",{className:"flex items-start justify-between mb-3",children:[n.jsxs("div",{className:"flex-1",children:[n.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[n.jsx("span",{className:"text-lg",children:e.type==="quiz"?"🎯":"📝"}),n.jsx("h3",{className:"font-semibold text-white",children:e.category})]}),n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx("span",{className:`px-2 py-0.5 rounded-full text-xs ${i.bg} ${i.text} ${i.border} border`,children:e.difficulty}),n.jsx("span",{className:"text-xs text-white/50",children:e.date})]})]}),n.jsxs("div",{className:"text-right",children:[n.jsxs("div",{className:`text-2xl font-bold ${e.accuracy>=80?"text-green-400":e.accuracy>=60?"text-blue-400":e.accuracy>=40?"text-yellow-400":"text-red-400"}`,children:[e.accuracy,"%"]}),n.jsxs("div",{className:"text-xs text-white/60",children:[e.score,"/",e.total]})]})]}),n.jsxs("div",{className:"flex items-center justify-between text-xs",children:[n.jsxs("div",{className:"flex items-center gap-3 text-white/60",children:[n.jsxs("span",{children:["⏱ ",e.time]}),n.jsx("span",{children:e.mode})]}),n.jsx("span",{className:"text-white/40",children:"Tap to review →"})]})]})}function sv({item:e,onClose:t}){const r=wt();return d.useEffect(()=>{const s=a=>{a.key==="Escape"&&t()};return document.addEventListener("keydown",s),()=>document.removeEventListener("keydown",s)},[t]),n.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80",onClick:t,children:n.jsxs("div",{className:"w-full max-w-md bg-gray-900 rounded-3xl p-6 border border-white/20",onClick:s=>s.stopPropagation(),children:[n.jsxs("div",{className:"flex items-center justify-between mb-4",children:[n.jsx("h2",{className:"text-xl font-bold text-white",children:"Quiz Details"}),n.jsx("button",{onClick:t,className:"p-2 rounded-xl bg-white/10 hover:bg-white/20 transition-colors text-white",children:"✕"})]}),n.jsxs("div",{className:"space-y-4",children:[n.jsxs("div",{className:"p-4 rounded-2xl bg-white/5 border border-white/10",children:[n.jsxs("div",{className:"flex items-center justify-between mb-2",children:[n.jsx("span",{className:"text-white/60",children:"Category"}),n.jsx("span",{className:"text-white font-medium",children:e.category})]}),n.jsxs("div",{className:"flex items-center justify-between mb-2",children:[n.jsx("span",{className:"text-white/60",children:"Difficulty"}),n.jsx("span",{className:`${e.difficulty==="easy"?"text-green-400":e.difficulty==="medium"?"text-yellow-400":"text-red-400"} font-medium`,children:e.difficulty})]}),n.jsxs("div",{className:"flex items-center justify-between mb-2",children:[n.jsx("span",{className:"text-white/60",children:"Score"}),n.jsxs("span",{className:"text-white font-medium",children:[e.score,"/",e.total]})]}),n.jsxs("div",{className:"flex items-center justify-between mb-2",children:[n.jsx("span",{className:"text-white/60",children:"Accuracy"}),n.jsxs("span",{className:`${e.accuracy>=80?"text-green-400":e.accuracy>=60?"text-blue-400":"text-yellow-400"} font-medium`,children:[e.accuracy,"%"]})]}),n.jsxs("div",{className:"flex items-center justify-between",children:[n.jsx("span",{className:"text-white/60",children:"Time"}),n.jsx("span",{className:"text-white font-medium",children:e.time})]})]}),e.snapshot&&n.jsx("button",{onClick:()=>{t(),localStorage.setItem(tv,JSON.stringify(e.snapshot)),r(`/quiz/${e.categoryParam}/start?review=1&attempt=${e.id}`,{state:{reviewFrom:"history",historyPath:"/profile/history"}})},className:"w-full py-3 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium hover:opacity-90 transition-opacity",children:"Review Answers"}),n.jsx("button",{onClick:()=>{var s;t(),r(`/quiz/${e.categoryParam}/start`,{state:{mode:"quiz",retake:!0,difficulty:e.difficulty,count:e.total,timer:((s=e.snapshot)==null?void 0:s.timer)||{type:"per_q",seconds:45},fromHistory:!0}})},className:"w-full py-3 rounded-2xl border border-white/20 text-white font-medium hover:bg-white/10 transition-colors",children:"Retake Quiz"})]})]})})}function av(){return n.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:n.jsx("path",{d:"M3 6h18M7 12h10M10 18h4",strokeLinecap:"round",strokeLinejoin:"round"})})}const iv=d.createContext({});function vm(e){const t=d.useRef(null);return t.current===null&&(t.current=e()),t.current}const ov=typeof window<"u",lv=ov?d.useLayoutEffect:d.useEffect,ym=d.createContext(null);function cv(e){return typeof e=="object"&&e!==null}function dv(e){return cv(e)&&"offsetHeight"in e}const uv=d.createContext({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"});class fv extends d.Component{getSnapshotBeforeUpdate(t){const r=this.props.childRef.current;if(r&&t.isPresent&&!this.props.isPresent){const s=r.offsetParent,a=dv(s)&&s.offsetWidth||0,i=this.props.sizeRef.current;i.height=r.offsetHeight||0,i.width=r.offsetWidth||0,i.top=r.offsetTop,i.left=r.offsetLeft,i.right=a-i.width-i.left}return null}componentDidUpdate(){}render(){return this.props.children}}function mv({children:e,isPresent:t,anchorX:r,root:s}){const a=d.useId(),i=d.useRef(null),o=d.useRef({width:0,height:0,top:0,left:0,right:0}),{nonce:l}=d.useContext(uv);return d.useInsertionEffect(()=>{const{width:c,height:u,top:f,left:x,right:m}=o.current;if(t||!i.current||!c||!u)return;const y=r==="left"?`left: ${x}`:`right: ${m}`;i.current.dataset.motionPopId=a;const p=document.createElement("style");l&&(p.nonce=l);const j=s??document.head;return j.appendChild(p),p.sheet&&p.sheet.insertRule(`
          [data-motion-pop-id="${a}"] {
            position: absolute !important;
            width: ${c}px !important;
            height: ${u}px !important;
            ${y}px !important;
            top: ${f}px !important;
          }
        `),()=>{j.contains(p)&&j.removeChild(p)}},[t]),n.jsx(fv,{isPresent:t,childRef:i,sizeRef:o,children:d.cloneElement(e,{ref:i})})}const hv=({children:e,initial:t,isPresent:r,onExitComplete:s,custom:a,presenceAffectsLayout:i,mode:o,anchorX:l,root:c})=>{const u=vm(pv),f=d.useId();let x=!0,m=d.useMemo(()=>(x=!1,{id:f,initial:t,isPresent:r,custom:a,onExitComplete:y=>{u.set(y,!0);for(const p of u.values())if(!p)return;s&&s()},register:y=>(u.set(y,!1),()=>u.delete(y))}),[r,u,s]);return i&&x&&(m={...m}),d.useMemo(()=>{u.forEach((y,p)=>u.set(p,!1))},[r]),d.useEffect(()=>{!r&&!u.size&&s&&s()},[r]),o==="popLayout"&&(e=n.jsx(mv,{isPresent:r,anchorX:l,root:c,children:e})),n.jsx(ym.Provider,{value:m,children:e})};function pv(){return new Map}function xv(e=!0){const t=d.useContext(ym);if(t===null)return[!0,null];const{isPresent:r,onExitComplete:s,register:a}=t,i=d.useId();d.useEffect(()=>{if(e)return a(i)},[e]);const o=d.useCallback(()=>e&&s&&s(i),[i,s,e]);return!r&&s?[!1,o]:[!0]}const ma=e=>e.key||"";function Ld(e){const t=[];return d.Children.forEach(e,r=>{d.isValidElement(r)&&t.push(r)}),t}const Ji=({children:e,custom:t,initial:r=!0,onExitComplete:s,presenceAffectsLayout:a=!0,mode:i="sync",propagate:o=!1,anchorX:l="left",root:c})=>{const[u,f]=xv(o),x=d.useMemo(()=>Ld(e),[e]),m=o&&!u?[]:x.map(ma),y=d.useRef(!0),p=d.useRef(x),j=vm(()=>new Map),[k,v]=d.useState(x),[h,g]=d.useState(x);lv(()=>{y.current=!1,p.current=x;for(let z=0;z<h.length;z++){const S=ma(h[z]);m.includes(S)?j.delete(S):j.get(S)!==!0&&j.set(S,!1)}},[h,m.length,m.join("-")]);const E=[];if(x!==k){let z=[...x];for(let S=0;S<h.length;S++){const b=h[S],w=ma(b);m.includes(w)||(z.splice(S,0,b),E.push(b))}return i==="wait"&&E.length&&(z=E),g(Ld(z)),v(x),null}const{forceRender:P}=d.useContext(iv);return n.jsx(n.Fragment,{children:h.map(z=>{const S=ma(z),b=o&&!u?!1:x===h||m.includes(S),w=()=>{if(j.has(S))j.set(S,!0);else return;let N=!0;j.forEach(R=>{R||(N=!1)}),N&&(P==null||P(),g(p.current),o&&(f==null||f()),s&&s())};return n.jsx(hv,{isPresent:b,initial:!y.current||r?void 0:!1,custom:t,presenceAffectsLayout:a,mode:i,root:c,onExitComplete:b?void 0:w,anchorX:l,children:z},S)})})},gv=()=>{const[e,t]=d.useState(null);d.useEffect(()=>{if(typeof window<"u"){const U=sessionStorage.getItem("navigationSource");U&&t(U)}},[]);const r=U=>{typeof window<"u"&&(sessionStorage.setItem("navigationSource","/rewards"),window.location.href=U)},s=()=>{if(typeof window<"u"){const U=sessionStorage.getItem("navigationSource");window.location.href="/profile",sessionStorage.removeItem("navigationSource")}},a=[{id:1,type:"coins",value:100,icon:"🪙",label:"100 Coins",cost:0},{id:2,type:"life",value:1,icon:"❤️",label:"1 Life",cost:50},{id:3,type:"coins",value:200,icon:"🪙",label:"200 Coins",cost:0},{id:4,type:"wildcard",value:1,icon:"🃏",label:"Wild Card",cost:100},{id:5,type:"coins",value:500,icon:"💰",label:"500 Coins",cost:0,milestone:!0},{id:6,type:"fifty-fifty",value:1,icon:"➗",label:"50:50",cost:150},{id:7,type:"life",value:2,icon:"❤️",label:"2 Lives",cost:100},{id:8,type:"vehicle",value:"bike",icon:"🏍️",label:"Motorcycle",cost:300},{id:9,type:"mystery",value:1,icon:"🎁",label:"Mystery Box",cost:200},{id:10,type:"coins",value:750,icon:"💰",label:"750 Coins",cost:0,milestone:!0},{id:11,type:"life",value:3,icon:"❤️",label:"3 Lives",cost:150},{id:12,type:"wildcard",value:2,icon:"🃏",label:"2x Wild Card",cost:250},{id:13,type:"vehicle",value:"car",icon:"🚗",label:"Car",cost:500},{id:14,type:"fifty-fifty",value:2,icon:"➗",label:"2x 50:50",cost:300},{id:15,type:"coins",value:1e3,icon:"💎",label:"1000 Coins",cost:0,milestone:!0}],i={cycle:{icon:"🚴",name:"Bicycle"},bike:{icon:"🏍️",name:"Motorcycle"},car:{icon:"🚗",name:"Car"}},{player:o,addCoins:l}=wn(),[c,u]=d.useState(4),[f,x]=d.useState((o==null?void 0:o.coins)||0),[m,y]=d.useState(4),[p,j]=d.useState(!1),[k,v]=d.useState(!1),[h,g]=d.useState(0),[E,P]=d.useState(0),[z,S]=d.useState("cycle"),[b,w]=d.useState([{type:"vehicle",icon:"🚴",name:"Bicycle",count:1},{type:"wildcard",icon:"🃏",name:"Wild Card",count:2},{type:"fifty-fifty",icon:"➗",name:"50:50 Helper",count:1}]),[N,R]=d.useState([0,1,2,3]),[F,Q]=d.useState(!1),[ee,q]=d.useState(!1),[B,L]=d.useState(null),[C,T]=d.useState(null),[_,A]=d.useState(!1),[M,D]=d.useState(null),[X,$]=d.useState(!1),J=d.useRef(null),ie=d.useRef(null),I=d.useRef(null);d.useEffect(()=>{J.current=new Audio("/sounds/reward.mp3"),ie.current=new Audio("/sounds/reward_progress.mp3"),[J,ie].forEach(U=>{var H;(H=U.current)==null||H.addEventListener("error",()=>{console.log("Sound file not found")})})},[]);const O=U=>{try{U.current&&(U.current.currentTime=0,U.current.play().catch(H=>console.log("Audio play failed:",H)))}catch(H){console.log("Sound play error:",H)}},W=(U,H)=>{if(U>c){T(H),q(!0);return}U===c&&te(U,H)},V=U=>{var Z;const H=(Z=I.current)==null?void 0:Z.querySelector(`[data-index="${U}"]`);if(H){const ae=H.getBoundingClientRect(),ke=window.pageYOffset||document.documentElement.scrollTop,fe=ae.top+ke-window.innerHeight/2+50;window.scrollTo({top:fe,behavior:"smooth"})}},te=(U,H)=>{if(!N.includes(U)){if(H.cost>0&&f<H.cost){T(H),q(!0);return}H.cost>0&&(x(Z=>Z-H.cost),l(-H.cost)),O(J),Q(!0),T(H),R(Z=>[...Z,U]),setTimeout(()=>{Q(!1),H.type==="coins"?(g(H.value),j(!0),setTimeout(()=>{x(Z=>Z+H.value),l(H.value),setTimeout(()=>{j(!1),g(0)},500)},300)):H.type==="life"?(P(H.value),v(!0),setTimeout(()=>{y(Z=>Z+H.value),setTimeout(()=>{v(!1),P(0)},500)},300)):(D({icon:H.icon,startX:window.innerWidth/2,startY:window.innerHeight/2}),setTimeout(()=>{D(null),$(!0),K(H),H.type==="vehicle"&&S(H.value),setTimeout(()=>{$(!1)},500)},800)),setTimeout(()=>{if(c<a.length-1){const Z=c+1;V(Z),setTimeout(()=>{A(!0),O(ie),u(Z),setTimeout(()=>{A(!1)},500)},300)}},1200)},1500)}},K=U=>{w(H=>H.find(ae=>ae.icon===U.icon)?H.map(ae=>ae.icon===U.icon?{...ae,count:ae.count+1}:ae):[...H,{type:U.type,icon:U.icon,name:U.label,count:1}])},Y=U=>30+U*100,ne=()=>30+c*100;return n.jsxs("div",{className:"rewards-page",children:[n.jsx("style",{jsx:!0,children:`
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
          min-height: ${a.length*100+200}px;
        }

        .journey-track {
          position: relative;
          width: 100%;
          height: ${a.length*100+100}px;
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
      `}),n.jsx("div",{className:"non-sticky-header",children:n.jsx("button",{className:"back-button",onClick:s,children:"← Back"})}),n.jsxs("div",{className:"sticky-section",children:[n.jsxs("div",{className:"header-wrapper",children:[n.jsxs("div",{className:"title-row",children:[n.jsxs("div",{children:[n.jsx("h1",{className:"title",children:"Rewards"}),n.jsx("p",{className:"subtitle",children:"Claim amazing prizes"})]}),n.jsx("button",{className:"play-quiz-btn",onClick:()=>r("/play"),children:"Play Quiz"})]}),n.jsx("div",{className:"balance-row",children:n.jsx("div",{className:"balance-item",children:n.jsxs("div",{children:[n.jsx("div",{className:"balance-label",children:"Balance"}),n.jsxs("div",{className:`balance-value ${p?"animating":""}`,children:[f.toLocaleString()," 🪙",p&&n.jsxs("span",{className:"value-change",children:["+",h]})]})]})})})]}),n.jsx("div",{className:"stats-cards-container",children:n.jsxs("div",{className:"info-grid",children:[n.jsxs("div",{className:"info-card",children:[n.jsx("div",{className:"info-icon",children:"❤️"}),n.jsxs("div",{className:`info-value ${k?"animating":""}`,children:[m,k&&n.jsxs("span",{className:"value-change",children:["+",E]})]}),n.jsx("div",{className:"info-label",children:"Lives"})]}),n.jsxs("div",{className:"info-card",children:[n.jsx("div",{className:"info-icon",children:"⭐"}),n.jsx("div",{className:"info-value",children:"5"}),n.jsx("div",{className:"info-label",children:"Level"})]}),n.jsxs("div",{className:"info-card",children:[n.jsx("div",{className:"info-icon",children:i[z].icon}),n.jsx("div",{className:"info-value",children:i[z].name}),n.jsx("div",{className:"info-label",children:"Vehicle"})]}),n.jsxs("div",{className:`cards-section ${X?"animating":""}`,children:[n.jsx("div",{className:"cards-label",children:"Your Cards"}),n.jsx("div",{className:"card-grid",children:b.map((U,H)=>n.jsxs("div",{className:"card-item",onClick:()=>L(U),children:[n.jsxs("div",{className:"large-card",children:[n.jsx("div",{className:"large-card-icon",children:U.icon}),n.jsx("div",{className:"large-card-name",children:U.name})]}),U.count>1&&n.jsx("div",{className:"card-count-badge",children:U.count})]},H))})]})]})})]}),n.jsx("div",{className:"scrollable-journey",children:n.jsx("div",{className:"journey-container",ref:I,children:n.jsxs("div",{className:"journey-track",children:[n.jsx("div",{className:"curvy-road",children:n.jsxs("svg",{className:"road-svg",viewBox:"0 0 60 1500",preserveAspectRatio:"none",children:[n.jsx("defs",{children:n.jsxs("linearGradient",{id:"roadGradient",x1:"0%",y1:"0%",x2:"0%",y2:"100%",children:[n.jsx("stop",{offset:"0%",stopColor:"#5E5CE6"}),n.jsx("stop",{offset:"100%",stopColor:"#5E5CE6"})]})}),n.jsx("path",{className:"road-path",d:"M 30 0 Q 45 50, 30 100 T 30 200 Q 15 250, 30 300 T 30 400 Q 45 450, 30 500 T 30 600 Q 15 650, 30 700 T 30 800 Q 45 850, 30 900 T 30 1000 Q 15 1050, 30 1100 T 30 1200 Q 45 1250, 30 1300 T 30 1400 L 30 1500"}),n.jsx("path",{className:"road-progress",d:"M 30 0 Q 45 50, 30 100 T 30 200 Q 15 250, 30 300 T 30 400 Q 45 450, 30 500 T 30 600 Q 15 650, 30 700 T 30 800 Q 45 850, 30 900 T 30 1000 Q 15 1050, 30 1100 T 30 1200 Q 45 1250, 30 1300 T 30 1400 L 30 1500",strokeDasharray:"1500",strokeDashoffset:1500-c/(a.length-1)*1500})]})}),n.jsxs("div",{className:"avatar-tracker",style:{top:`${ne()}px`},children:[n.jsx("img",{className:"avatar-img",src:"/profile/avatar.png",alt:"You",onError:U=>{U.target.style.display="none"}}),n.jsx("div",{className:"tracker-vehicle",children:i[z].icon})]}),n.jsx("div",{className:"rewards-list",children:a.map((U,H)=>{const Z=H%2===0,ae=H>c,ke=N.includes(H),fe=H===c;return n.jsx("div",{className:"reward-row","data-index":H,style:{top:`${Y(H)}px`},children:n.jsxs("div",{className:`reward-item ${Z?"left":"right"}`,children:[n.jsxs("div",{className:`checkpoint ${fe?"current":ke?"claimed":ae?"locked":""}`,onClick:()=>W(H,U),children:[n.jsx("div",{className:"checkpoint-icon",children:U.icon}),n.jsx("div",{className:"checkpoint-value",children:U.label.split(" ")[0]}),U.milestone&&n.jsx("div",{className:"milestone-badge",children:"BONUS"}),ae&&n.jsx("div",{className:"lock-icon",children:"🔒"})]}),n.jsxs("div",{className:"reward-info",children:[n.jsx("div",{className:"reward-name",children:U.label}),n.jsxs("div",{className:"step-label",children:["Step ",H+1]})]})]})},U.id)})})]})})}),M&&n.jsx("div",{className:"flying-card",style:{left:`${M.startX}px`,top:`${M.startY}px`,"--startX":`${M.startX}px`},children:M.icon}),n.jsx(Ji,{children:B&&n.jsx("div",{className:"claim-overlay",onClick:()=>L(null),children:n.jsxs("div",{className:"modal",onClick:U=>U.stopPropagation(),children:[n.jsx("div",{className:"modal-icon",children:B.icon}),n.jsx("div",{className:"card-detail-name",children:B.name}),n.jsxs("div",{className:"card-detail-desc",children:["You have ",B.count," of these cards"]}),n.jsx("div",{className:"modal-buttons",children:n.jsx("button",{className:"modal-btn modal-btn-secondary",onClick:()=>L(null),children:"Close"})})]})})}),n.jsx(Ji,{children:F&&C&&n.jsx("div",{className:"claim-overlay",children:n.jsxs("div",{className:"modal",children:[n.jsx("div",{className:"modal-title",children:"WELL DONE!"}),n.jsx("div",{className:"modal-subtitle",children:"Here's a reward for you."}),n.jsx("div",{className:"modal-icon",children:C.icon}),n.jsxs("div",{className:"modal-value",children:["+",C.value," ",C.type==="coins"?"Coins":C.type==="life"?"Lives":C.label]})]})})}),n.jsx(Ji,{children:ee&&C&&n.jsx("div",{className:"claim-overlay",onClick:()=>q(!1),children:n.jsxs("div",{className:"modal",onClick:U=>U.stopPropagation(),children:[n.jsx("div",{className:"modal-icon",children:"🪙"}),n.jsx("div",{className:"modal-title",children:"Need More Coins"}),n.jsx("div",{className:"modal-subtitle",children:C.cost>0?`You need ${C.cost-f} more coins`:"Complete previous rewards first"}),n.jsxs("div",{className:"modal-buttons",children:[n.jsx("button",{className:"modal-btn modal-btn-primary",onClick:()=>r("/play"),children:"Play Quiz"}),n.jsx("button",{className:"modal-btn modal-btn-secondary",onClick:()=>q(!1),children:"Cancel"})]})]})})})]})},ha=[{id:1,name:"First Win",emoji:"🏆",unlocked:!0,hint:"Win your first quiz",progress:100,color:"#FFD700"},{id:2,name:"On Fire",emoji:"🔥",unlocked:!0,hint:"3-day winning streak",progress:100,color:"#FF6B35"},{id:3,name:"Perfectionist",emoji:"⭐",unlocked:!1,hint:"Score 10/10 in any quiz",progress:75,color:"#9333EA"},{id:4,name:"Early Bird",emoji:"🌅",unlocked:!0,hint:"Play before 9 AM",progress:100,color:"#F59E0B"},{id:5,name:"Scholar",emoji:"🎓",unlocked:!1,hint:"Master 5 categories",progress:40,color:"#3B82F6"},{id:6,name:"Lightning",emoji:"⚡",unlocked:!1,hint:"Complete in under 2 minutes",progress:20,color:"#10B981"},{id:7,name:"Champion",emoji:"👑",unlocked:!1,hint:"Win 50 quizzes",progress:30,color:"#EC4899"},{id:8,name:"Explorer",emoji:"🗺️",unlocked:!1,hint:"Try all categories",progress:60,color:"#06B6D4"},{id:9,name:"Strategist",emoji:"🧠",unlocked:!0,hint:"Use 3 power-ups wisely",progress:100,color:"#8B5CF6"}];function vv(){const[e,t]=d.useState(null),r=ha.filter(a=>a.unlocked).length,s=Math.round(r/ha.length*100);return n.jsxs("div",{className:"badges-screen",children:[n.jsx("style",{jsx:!0,children:`
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
      `}),n.jsxs("div",{className:"header",children:[n.jsx("button",{className:"back-button",onClick:()=>window.history.back(),children:"← Back"}),n.jsxs("div",{className:"title-section",children:[n.jsx("h1",{className:"main-title",children:"Badge Collection"}),n.jsx("p",{className:"subtitle",children:"Unlock achievements and show your skills"})]})]}),n.jsxs("div",{className:"progress-card",children:[n.jsxs("div",{className:"progress-header",children:[n.jsx("span",{className:"progress-label",children:"Collection Progress"}),n.jsxs("span",{className:"progress-value",children:[r,"/",ha.length]})]}),n.jsx("div",{className:"progress-bar-container",children:n.jsx("div",{className:"progress-bar-fill",style:{width:`${s}%`}})})]}),n.jsx("div",{className:"badges-grid",children:ha.map(a=>n.jsxs("div",{className:`badge-card ${a.unlocked?"unlocked":""}`,style:{"--badge-color":a.color},onClick:()=>t(a),children:[n.jsx("div",{className:"badge-glow"}),n.jsx("div",{className:"badge-emoji",children:a.emoji}),n.jsx("div",{className:"badge-name",children:a.name}),!a.unlocked&&n.jsxs(n.Fragment,{children:[n.jsx("div",{className:"badge-progress",children:n.jsx("div",{className:"badge-progress-fill",style:{width:`${a.progress}%`}})}),n.jsx("div",{className:"lock-indicator",children:"🔒"})]})]},a.id))}),n.jsxs("div",{className:"tips-card",children:[n.jsxs("div",{className:"tips-title",children:[n.jsx("span",{children:"💡"}),n.jsx("span",{children:"Pro Tip"})]}),n.jsx("div",{className:"tips-content",children:"Complete daily challenges and maintain streaks to unlock rare badges faster. Each badge gives you bonus XP and special rewards!"})]}),e&&n.jsx("div",{className:"badge-modal",onClick:()=>t(null),children:n.jsxs("div",{className:"modal-content",onClick:a=>a.stopPropagation(),children:[n.jsx("div",{className:`modal-badge ${e.unlocked?"":"locked"}`,children:e.emoji}),n.jsx("h3",{className:"modal-title",children:e.name}),n.jsx("span",{className:`modal-status ${e.unlocked?"":"locked"}`,children:e.unlocked?"✓ Unlocked":"🔒 Locked"}),n.jsx("p",{className:"modal-description",children:e.hint}),!e.unlocked&&n.jsxs("div",{className:"modal-progress-section",children:[n.jsx("div",{className:"modal-progress-label",children:"Progress"}),n.jsx("div",{className:"modal-progress-bar",children:n.jsx("div",{className:"modal-progress-fill",style:{width:`${e.progress}%`,"--badge-color":e.color}})}),n.jsxs("div",{className:"modal-progress-text",children:[e.progress,"%"]})]}),n.jsx("button",{className:"modal-close",onClick:()=>t(null),children:e.unlocked?"Awesome!":"Keep Going!"})]})})]})}const yv=[{id:1,title:"Quiz Master",subtitle:"Play 10 quizzes",current:7,target:10,reward:150,claimed:!1,icon:"🎯",color:"#FF6B6B"},{id:2,title:"Coin Collector",subtitle:"Earn 2,000 coins",current:1240,target:2e3,reward:200,claimed:!1,icon:"💰",color:"#4ECDC4"},{id:3,title:"Winning Streak",subtitle:"Win 3 in a row",current:3,target:3,reward:100,claimed:!0,icon:"🔥",color:"#FFD93D"},{id:4,title:"Speed Demon",subtitle:"Complete 5 under 2min",current:2,target:5,reward:300,claimed:!1,icon:"⚡",color:"#A8E6CF"},{id:5,title:"Perfect Score",subtitle:"Get 100% accuracy",current:0,target:1,reward:250,claimed:!1,icon:"⭐",color:"#C7B8FF"}];function bv(){const{player:e,addCoins:t}=wn(),[r,s]=d.useState(yv),[a,i]=d.useState(null),[o,l]=d.useState((e==null?void 0:e.coins)||0),[c,u]=d.useState(!1),[f,x]=d.useState([]),m=r.length,y=r.filter(k=>k.current>=k.target).length,p=Math.round(y/m*100);d.useEffect(()=>{const k=setInterval(()=>{x(v=>{const h={id:Date.now(),x:Math.random()*100,y:Math.random()*100,size:Math.random()*20+10};return[...v.slice(-4),h]})},3e3);return()=>clearInterval(k)},[]);const j=(k,v)=>{i(k),navigator.vibrate&&navigator.vibrate([20,10,20]),setTimeout(()=>{s(h=>h.map(g=>g.id===k?{...g,claimed:!0}:g)),l(h=>h+v),i(null),u(!0),setTimeout(()=>u(!1),2e3)},600)};return n.jsxs("div",{className:"achievements-screen",children:[n.jsx("style",{jsx:!0,children:`
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
      `}),n.jsxs("div",{className:"floating-shapes",children:[n.jsx("div",{className:"shape shape-1"}),n.jsx("div",{className:"shape shape-2"})]}),n.jsxs("div",{className:"header",children:[n.jsx("button",{className:"back-button",onClick:()=>window.history.back(),children:"← Back"}),n.jsxs("div",{className:"coins-display",children:["🪙 ",o.toLocaleString()]}),n.jsxs("div",{className:"title-section",children:[n.jsx("h1",{className:"main-title",children:"ACHIEVEMENTS"}),n.jsx("p",{className:"subtitle",children:"Complete challenges and earn awesome rewards!"})]})]}),n.jsxs("div",{className:"progress-overview",children:[n.jsx("div",{className:"card-glow",style:{"--card-color":"#FFD93D"}}),n.jsxs("div",{className:"overview-header",children:[n.jsx("span",{className:"overview-label",children:"🎮 Progress Tracker"}),n.jsxs("div",{className:"overview-stats",children:[n.jsx("span",{className:"trophy-icon",children:"🏆"}),n.jsxs("span",{className:"overview-value",children:[y,"/",m]})]})]}),n.jsx("div",{className:"progress-bar-main",children:n.jsx("div",{className:"progress-fill-main",style:{width:`${p}%`}})})]}),n.jsx("div",{className:"achievements-list",children:r.map(k=>{const v=Math.min(100,Math.round(k.current/k.target*100)),h=v===100,g=k.color+"CC";return n.jsxs("div",{className:`achievement-card ${h?"completed":""}`,style:{"--card-color":k.color,"--card-color-dark":g},children:[n.jsx("div",{className:"card-glow"}),h&&k.claimed&&n.jsx("div",{className:"completed-badge",children:"✓"}),n.jsxs("div",{className:"card-content",children:[n.jsx("div",{className:"achievement-icon",children:k.icon}),n.jsxs("div",{className:"achievement-details",children:[n.jsx("div",{className:"achievement-title",children:k.title}),n.jsx("div",{className:"achievement-subtitle",children:k.subtitle}),n.jsxs("div",{className:"progress-container",children:[n.jsx("div",{className:"progress-bar",children:n.jsx("div",{className:"progress-fill",style:{width:`${v}%`}})}),n.jsxs("div",{className:"progress-text",children:[n.jsxs("span",{children:[k.current,"/",k.target]}),n.jsxs("span",{className:"reward-badge",children:["🪙 ",k.reward]})]})]})]}),n.jsx("button",{onClick:()=>j(k.id,k.reward),disabled:!h||k.claimed,className:`claim-button ${k.claimed?"claimed":h?"can-claim":"in-progress"} ${a===k.id?"claiming":""}`,children:k.claimed?"✓":h?"CLAIM!":`${v}%`})]})]},k.id)})}),c&&n.jsx("div",{className:"celebration",children:"🎉"})]})}function wv(){const{player:e,addCoins:t,updateDailyStreak:r}=wn(),s=(e==null?void 0:e.currentStreak)||0,a=(e==null?void 0:e.bestStreak)||0,i=(e==null?void 0:e.totalDays)||0,o=(e==null?void 0:e.coins)||0,l=new Date,c=l.getDay(),u=()=>{const _=new Date(l);return _.setDate(l.getDate()-l.getDay()),_.toISOString().split("T")[0]},[f,x]=d.useState(null),[m,y]=d.useState(!1),[p,j]=d.useState(null),[k,v]=d.useState(null),[h,g]=d.useState(!1),E=d.useRef(null),P=d.useRef(null),[z]=zt("/sounds/coin.mp3",{volume:.75}),[S]=zt("/sounds/correct.mp3",{volume:.6}),[b,w]=d.useState(()=>{const _=localStorage.getItem("streaks_claimed")||"[]",A=JSON.parse(_),M=u(),D=A.filter(X=>X!==`week_${M}_day_0`);return localStorage.setItem("streaks_claimed",JSON.stringify(D)),D});d.useEffect(()=>{const _=()=>{window.scrollTo(0,0),document.documentElement.scrollTop=0,document.body.scrollTop=0;const M=document.querySelector("main");M&&(M.scrollTop=0)};_(),requestAnimationFrame(_);const A=setTimeout(_,100);return()=>clearTimeout(A)},[]),d.useEffect(()=>{g(!0),setTimeout(()=>g(!1),3e3)},[]);const N=[{label:"Mon",short:"M",dayIndex:1},{label:"Tue",short:"T",dayIndex:2},{label:"Wed",short:"W",dayIndex:3},{label:"Thu",short:"T",dayIndex:4},{label:"Fri",short:"F",dayIndex:5},{label:"Sat",short:"S",dayIndex:6},{label:"Sun",short:"S",dayIndex:0}],R=[{day:0,reward:"10",type:"coins",icon:"🎯",label:"Welcome Bonus"},{day:1,reward:"50",type:"coins",icon:"🪙",label:"50 Coins"},{day:2,reward:"100",type:"coins",icon:"🪙",label:"100 Coins"},{day:3,reward:"2x",type:"xp",icon:"⭐",label:"2x XP Boost"},{day:4,reward:"150",type:"coins",icon:"🪙",label:"150 Coins"},{day:5,reward:"Full",type:"energy",icon:"⚡",label:"Energy Refill"},{day:6,reward:"200",type:"coins",icon:"🪙",label:"200 Coins"},{day:7,reward:"Mystery",type:"mystery",icon:"🎁",label:"Mystery Box"}],F=_=>{const A=b.includes(`week_${u()}_day_${_}`);if(_===0)return{isCompleted:!0,isClaimed:A,canClaim:!A,isLocked:!1};const M=s>=_,D=M&&!A,X=s<_;return{isCompleted:M,isClaimed:A,canClaim:D,isLocked:X}},Q=(_,A,M)=>{const D=F(A);if(D.isLocked){v({day:A,currentStreak:s}),setTimeout(()=>v(null),2e3);return}D.isClaimed||D.canClaim&&(x({..._,day:A}),y(!1),setTimeout(()=>{y(!0),S(),setTimeout(()=>{if(_.type==="coins"){const J=parseInt(_.reward);if(P.current&&E.current){const ie=P.current.getBoundingClientRect();z(),j({startRect:ie,count:10,amount:J})}}const X=`week_${u()}_day_${A}`,$=[...b,X];w($),localStorage.setItem("streaks_claimed",JSON.stringify($))},500),setTimeout(()=>{x(null),y(!1)},2500)},500))},ee=(_,A)=>{const M=A+1,D=N[A].dayIndex===c;return s>=M?D?"today-completed":"completed":D?"today-pending":M<=s+1?"pending":"future"},q=[{days:3,emoji:"⚡",label:"Starter",achieved:s>=3},{days:7,emoji:"🔥",label:"Week Warrior",achieved:s>=7},{days:30,emoji:"💎",label:"Champion",achieved:s>=30},{days:100,emoji:"👑",label:"Legend",achieved:s>=100}],B=q.find(_=>_.days>s)||q[q.length-1],L=Math.min(100,s/B.days*100),C=()=>{window.location.href="/play"},T=()=>{window.location.href="/profile"};return n.jsxs("div",{className:"streaks-screen",children:[n.jsx("style",{jsx:!0,children:`
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
      `}),p&&n.jsx(Kl,{startRect:p.startRect,targetRef:E,count:p.count,onDone:()=>{t(p.amount),j(null)}}),n.jsxs("div",{className:"header",children:[n.jsxs("div",{className:"header-top",children:[n.jsx("button",{className:"back-button",onClick:T,children:"← Back"}),n.jsxs("div",{className:"coin-pill",ref:E,id:"coin-pill",children:[n.jsx("span",{className:"coin-icon",children:"🪙"}),n.jsx("span",{className:"coin-amount",children:o})]})]}),n.jsxs("div",{className:"title-section",children:[n.jsx("h1",{className:"main-title",children:"STREAKS"}),n.jsx("p",{className:"subtitle",children:"Keep the fire burning!"})]})]}),n.jsxs("div",{className:"streak-hero",children:[n.jsx("div",{className:"fire-animation",children:"🔥"}),n.jsx("div",{className:"streak-number",children:s}),n.jsx("div",{className:"streak-label",children:"DAY STREAK"}),n.jsxs("div",{className:"stats-row",children:[n.jsxs("div",{className:"stat-card",children:[n.jsx("div",{className:"stat-value",children:a}),n.jsx("div",{className:"stat-label",children:"Best Streak"})]}),n.jsxs("div",{className:"stat-card",children:[n.jsx("div",{className:"stat-value",children:i}),n.jsx("div",{className:"stat-label",children:"Total Days"})]})]})]}),n.jsxs("div",{className:"weekly-progress-card",children:[n.jsxs("div",{className:"weekly-header",children:[n.jsx("div",{className:"weekly-title",children:"This Week's Progress"}),n.jsxs("div",{className:"weekly-counter",children:[n.jsx("span",{className:"weekly-counter-icon",children:"🔥"}),n.jsxs("span",{className:"weekly-counter-text",children:[Math.min(s,7),"/7"]})]})]}),n.jsx("div",{className:"weekly-days",children:N.map((_,A)=>{const M=ee(_.dayIndex,A),D=_.dayIndex===c;return n.jsxs("div",{className:"day-item",children:[n.jsx("div",{className:`day-circle ${M}`,children:M==="completed"||M==="today-completed"?"":_.short}),n.jsx("div",{className:`day-label ${D?"today":""}`,children:_.label})]},A)})}),n.jsx("div",{className:"milestone-header",children:"Daily Rewards"}),n.jsx("div",{className:"rewards-grid",children:R.map((_,A)=>{const M=F(_.day);return n.jsxs("div",{className:`reward-item ${M.isLocked?"locked":M.canClaim?"can-claim":M.isClaimed?"completed":""}`,onClick:D=>Q(_,_.day),children:[n.jsxs("div",{className:"reward-day",children:["Day ",_.day]}),n.jsx("div",{className:"reward-icon",children:_.icon}),n.jsx("div",{className:"reward-text",children:_.label})]},A)})})]}),n.jsxs("div",{className:"milestone-section",children:[n.jsx("div",{className:"milestone-header",children:"Next Milestone"}),n.jsxs("div",{className:"milestone-progress",children:[n.jsxs("div",{className:"milestone-info",children:[n.jsxs("div",{className:"milestone-current",children:[n.jsx("span",{className:"milestone-emoji",children:B.emoji}),n.jsx("span",{className:"milestone-text",children:B.label})]}),n.jsxs("span",{className:"milestone-target",children:[s,"/",B.days," days"]})]}),n.jsx("div",{className:"progress-bar-container",children:n.jsx("div",{className:"progress-bar-fill",style:{width:`${L}%`}})})]})]}),n.jsx("div",{className:"motivational-text",children:s===0?"Start your journey! Claim your Day 0 bonus and complete a quiz!":`Day ${s} strong! Keep going to unlock more rewards!`}),n.jsxs("button",{className:"play-button",onClick:C,children:[n.jsx("span",{children:"Continue Streak"}),n.jsx("span",{children:"→"})]}),k&&n.jsxs("div",{className:"locked-message",children:[n.jsx("span",{className:"locked-message-icon",children:"🔒"}),n.jsx("span",{className:"locked-message-text",children:k.day===1&&k.currentStreak===0?"Complete your first quiz to unlock this reward!":`Reach Day ${k.day} streak to unlock this reward!`})]}),f&&n.jsxs(n.Fragment,{children:[n.jsx("div",{className:"modal-overlay"}),n.jsx("div",{className:"reward-modal",ref:P,children:n.jsxs("div",{className:"gift-box",children:[n.jsxs("div",{className:"gift-box-body",children:[n.jsx("div",{className:"gift-box-ribbon"}),n.jsx("div",{className:"gift-box-ribbon-horizontal"})]}),n.jsx("div",{className:`gift-box-lid ${m?"opening":""}`,children:n.jsx("div",{className:"gift-box-bow",children:"🎀"})}),n.jsxs("div",{className:`gift-content ${m?"show":""}`,children:[n.jsx("div",{className:"gift-content-icon",children:f.icon}),n.jsxs("div",{className:"gift-content-title",children:["Day ",f.day]}),n.jsx("div",{className:"gift-content-desc",children:f.label})]})]})})]}),h&&n.jsx("div",{className:"celebration",children:"🎉"})]})}const jv=[{id:1,title:"Play 3 quizzes today",progress:2,target:3,reward:60,claimed:!1,icon:"🎮",color:"#FF6B6B",difficulty:"Easy"},{id:2,title:"Score 8+ twice",progress:1,target:2,reward:80,claimed:!1,icon:"🎯",color:"#4ECDC4",difficulty:"Medium"},{id:3,title:"Practice 15 questions",progress:15,target:15,reward:100,claimed:!0,icon:"📚",color:"#FFD93D",difficulty:"Easy"},{id:4,title:"Win 5 in a row",progress:3,target:5,reward:150,claimed:!1,icon:"🔥",color:"#A8E6CF",difficulty:"Hard"},{id:5,title:"Complete a speed run",progress:0,target:1,reward:120,claimed:!1,icon:"⚡",color:"#C7B8FF",difficulty:"Medium"}];function Nv(){const{player:e,addCoins:t}=wn(),[r,s]=d.useState(jv),[a,i]=d.useState((e==null?void 0:e.coins)||0),[o,l]=d.useState(null),[c,u]=d.useState(0);d.useEffect(()=>{const y=r.filter(p=>p.progress>=p.target).length;u(Math.round(y/r.length*100))},[r]);const f=(y,p)=>{navigator.vibrate&&navigator.vibrate([20,10,20]),l(y),setTimeout(()=>{s(j=>j.map(k=>k.id===y?{...k,claimed:!0}:k)),i(j=>j+p),t(p),l(null)},600)},x=y=>{switch(y){case"Easy":return"#10B981";case"Medium":return"#F59E0B";case"Hard":return"#EF4444";default:return"#6B7280"}},m=()=>{const y=new Date,p=new Date(y);p.setDate(p.getDate()+1),p.setHours(5,0,0,0);const j=p-y,k=Math.floor(j/(1e3*60*60)),v=Math.floor(j%(1e3*60*60)/(1e3*60));return`${k}h ${v}m`};return n.jsxs("div",{className:"quests-screen",children:[n.jsx("style",{jsx:!0,children:`
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
        .quest-card:nth-child(5) { animation-delay: 0.5s; }

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
      `}),n.jsxs("div",{className:"animated-bg",children:[n.jsx("div",{className:"floating-icon",children:"🎮"}),n.jsx("div",{className:"floating-icon",children:"🎯"}),n.jsx("div",{className:"floating-icon",children:"🏆"}),n.jsx("div",{className:"floating-icon",children:"⭐"})]}),n.jsxs("div",{className:"header",children:[n.jsx("button",{className:"back-button",onClick:()=>window.history.back(),children:"← Back"}),n.jsxs("div",{className:"coins-display",children:["🪙 ",a]}),n.jsxs("div",{className:"title-section",children:[n.jsx("h1",{className:"main-title",children:"Daily Quests"}),n.jsx("p",{className:"subtitle",children:"Complete challenges, earn rewards!"})]})]}),n.jsxs("div",{className:"daily-progress-card",children:[n.jsxs("div",{className:"progress-header",children:[n.jsx("span",{className:"progress-label",children:"Today's Progress"}),n.jsxs("span",{className:"progress-value",children:[c,"%"]})]}),n.jsx("div",{className:"progress-bar-container",children:n.jsx("div",{className:"progress-bar-fill",style:{width:`${c}%`}})})]}),n.jsx("div",{className:"quests-list",children:r.map(y=>{const p=Math.min(100,Math.round(y.progress/y.target*100)),j=p===100,k=y.color+"CC";return n.jsxs("div",{className:`quest-card ${j?"completed":""}`,style:{"--quest-color":y.color,"--quest-color-dark":k},children:[n.jsx("div",{className:"quest-accent"}),j&&y.claimed&&n.jsx("div",{className:"completed-checkmark",children:"✓"}),n.jsxs("div",{className:"quest-content",children:[n.jsx("div",{className:`quest-icon-container ${o===y.id?"animating":""}`,children:y.icon}),n.jsxs("div",{className:"quest-details",children:[n.jsxs("div",{className:"quest-header",children:[n.jsx("span",{className:"quest-title",children:y.title}),n.jsx("span",{className:"difficulty-badge",style:{background:`${x(y.difficulty)}20`,color:x(y.difficulty)},children:y.difficulty})]}),n.jsxs("div",{className:"progress-info",children:[n.jsx("div",{className:"mini-progress-bar",children:n.jsx("div",{className:"mini-progress-fill",style:{width:`${p}%`}})}),n.jsxs("div",{className:"progress-text",children:[n.jsxs("span",{className:"progress-numbers",children:[y.progress,"/",y.target]}),n.jsxs("span",{className:"reward-display",children:["🪙 ",y.reward]})]})]})]}),n.jsx("button",{onClick:()=>j&&!y.claimed&&f(y.id,y.reward),disabled:y.claimed,className:`action-button ${y.claimed?"claimed":j?"can-claim":"in-progress"}`,style:!j&&!y.claimed?{"--quest-color":y.color,"--quest-color-dark":k}:{},children:y.claimed?"✓":j?"Claim":"Do it"})]})]},y.id)})}),n.jsxs("div",{className:"timer-card",children:[n.jsx("div",{className:"timer-icon",children:"⏰"}),n.jsx("div",{className:"timer-label",children:"New Quests In"}),n.jsx("div",{className:"timer-value",children:m()})]}),o&&n.jsx("div",{className:"reward-animation",children:"🪙"})]})}function kv({title:e,subtitle:t,children:r}){const s=wt();return n.jsxs("div",{className:"min-h-full bg-black text-white px-4 pt-12",children:[n.jsxs("div",{className:"flex items-center justify-between mb-4",children:[n.jsx("button",{onClick:()=>s(-1),className:"px-3 py-1.5 rounded-xl border border-white/10 bg-white/5 text-sm",children:"← Back"}),n.jsxs("div",{className:"text-center",children:[n.jsx("div",{className:"text-base font-semibold leading-tight",children:e}),t&&n.jsx("div",{className:"text-xs text-white/60 leading-tight",children:t})]}),n.jsx("div",{className:"w-[68px]"})]}),r]})}function Sv(){const e=wt(),[t,r]=d.useState(!0),[s,a]=d.useState(!0),[i,o]=d.useState(!0);return n.jsxs(kv,{title:"Settings",subtitle:"Make it yours",children:[n.jsxs("div",{className:"rounded-2xl border border-white/10 bg-white/5 divide-y divide-white/10",children:[n.jsx(ss,{label:"Sound",right:n.jsx(Zi,{on:t,set:r})}),n.jsx(ss,{label:"Haptics",right:n.jsx(Zi,{on:s,set:a})}),n.jsx(ss,{label:"Notifications",right:n.jsx(Zi,{on:i,set:o})}),n.jsx(ss,{label:"Edit Profile",right:n.jsx("span",{className:"text-white/60",children:"→"}),onClick:()=>e("/profile")}),n.jsx(ss,{label:"Privacy Policy",right:n.jsx("span",{className:"text-white/60",children:"→"}),onClick:()=>window.open("#","_blank")})]}),n.jsx("button",{className:`mt-3 w-full rounded-2xl border border-white/10 bg-white/5 py-3 text-red-300 font-semibold
                   transition-transform duration-150 active:scale-[0.99]`,onClick:()=>alert("Sign out hook here"),children:"Sign out"})]})}function ss({label:e,right:t,onClick:r}){return n.jsxs("button",{type:"button",onClick:r,className:`w-full flex items-center justify-between px-4 py-4 text-left
                 hover:bg-white/5 first:rounded-t-2xl last:rounded-b-2xl transition`,children:[n.jsx("span",{className:"text-sm font-semibold",children:e}),t]})}function Zi({on:e,set:t}){return n.jsx("span",{onClick:r=>{r.stopPropagation(),t(s=>!s),navigator.vibrate&&navigator.vibrate(10)},className:["inline-flex w-11 h-6 items-center rounded-full border transition px-0.5",e?"bg-lime-400 border-lime-400 justify-end":"bg-white/10 border-white/10 justify-start"].join(" "),role:"switch","aria-checked":e,children:n.jsx("span",{className:["w-5 h-5 rounded-full bg-white",e?"":"bg-white"].join(" ")})})}const Cv={name:"Player",avatar:"wizard",level:1,totalXP:0,coins:0,energy:ft.MAX_ENERGY,energyRegenAt:null,comboStreak:0,bestCombo:0,currentStreak:0,bestStreak:0,totalDays:0,lastPlayedDate:null,totalQuizzes:0,totalCorrect:0,achievements:[],unlockedAvatars:["wizard","knight"],createdAt:Date.now()};function Ev(){const[e,t]=d.useState(()=>{const u=localStorage.getItem(ft.STORAGE_KEYS.PLAYER);return u?JSON.parse(u):Cv});d.useEffect(()=>{localStorage.setItem(ft.STORAGE_KEYS.PLAYER,JSON.stringify(e))},[e]),d.useEffect(()=>{if(e.energy<ft.MAX_ENERGY&&e.energyRegenAt){const u=setInterval(()=>{const f=Date.now();f>=e.energyRegenAt&&t(x=>({...x,energy:Math.min(x.energy+1,ft.MAX_ENERGY),energyRegenAt:x.energy+1<ft.MAX_ENERGY?f+ft.ENERGY_REGEN_TIME:null}))},6e4);return()=>clearInterval(u)}},[e.energy,e.energyRegenAt]);const r=d.useCallback(u=>{t(f=>{const x=f.totalXP+u,m=gd(f.totalXP),y=gd(x);let p=[...f.unlockedAvatars];return y>m&&ft.AVATARS.forEach(j=>{j.unlockLevel===y&&!p.includes(j.id)&&p.push(j.id)}),{...f,totalXP:x,level:y,unlockedAvatars:p}})},[]),s=d.useCallback(u=>{const x=new Error().stack;console.log("[COINS DEBUG] ================"),console.log("[COINS DEBUG] Amount:",u),console.log("[COINS DEBUG] Called from:",x.split(`
`)[2]),console.log("[COINS DEBUG] Full trace:",x),t(m=>(console.log("[COINS DEBUG] Current:",m.coins,"→ New:",m.coins+u),{...m,coins:m.coins+u}))},[]),a=d.useCallback((u=1)=>e.energy<u?!1:(t(f=>({...f,energy:f.energy-u,energyRegenAt:f.energyRegenAt||Date.now()+ft.ENERGY_REGEN_TIME})),!0),[e.energy]),i=d.useCallback(u=>{t(f=>{const x=u?f.comboStreak+1:0;return{...f,comboStreak:x,bestCombo:Math.max(f.bestCombo,x)}})},[]),o=d.useCallback(()=>{t(u=>({...u,comboStreak:0}))},[]),l=d.useCallback(u=>{e.unlockedAvatars.includes(u)&&t(f=>({...f,avatar:u}))},[e.unlockedAvatars]),c=d.useCallback(()=>{const u=new Date().toDateString();t(f=>{if(f.lastPlayedDate===u)return f;const x=new Date;x.setDate(x.getDate()-1);const m=x.toDateString();let y=f.currentStreak;return f.lastPlayedDate===m?y=f.currentStreak+1:(f.lastPlayedDate,y=1),{...f,currentStreak:y,bestStreak:Math.max(f.bestStreak,y),totalDays:f.totalDays+1,lastPlayedDate:u}})},[]);return{player:e,addXP:r,addCoins:s,useEnergy:a,updateCombo:i,resetCombo:o,changeAvatar:l,updateDailyStreak:c,levelProgress:Px(e.totalXP)}}const bm=d.createContext(null),wn=()=>{const e=d.useContext(bm);if(!e)throw new Error("useGame must be used within GameProvider");return e};function Rv({children:e}){const t=Ev();return n.jsx(bm.Provider,{value:t,children:e})}function Tv(){return n.jsx(Rv,{children:n.jsx(Qp,{children:n.jsxs(rt,{element:n.jsx(Cx,{}),children:[n.jsx(rt,{path:"/",element:n.jsx(bd,{})}),n.jsx(rt,{path:"/play",element:n.jsx(wg,{})}),n.jsx(rt,{path:"/play/party",element:n.jsx(Qg,{})}),n.jsx(rt,{path:"/profile",element:n.jsx(Vg,{})}),n.jsx(rt,{path:"/profile/leaderboard",element:n.jsx(Xg,{})}),n.jsx(rt,{path:"/profile/history",element:n.jsx(nv,{})}),n.jsx(rt,{path:"/profile/rewards",element:n.jsx(gv,{})}),n.jsx(rt,{path:"/profile/badges",element:n.jsx(vv,{})}),n.jsx(rt,{path:"/profile/achievements",element:n.jsx(bv,{})}),n.jsx(rt,{path:"/profile/streaks",element:n.jsx(wv,{})}),n.jsx(rt,{path:"/profile/quests",element:n.jsx(Nv,{})}),n.jsx(rt,{path:"/profile/settings",element:n.jsx(Sv,{})}),n.jsx(rt,{path:"/swipe",element:n.jsx(Wg,{})}),n.jsx(rt,{path:"/leaders",element:n.jsx(Up,{to:"/profile/leaderboard",replace:!0})}),n.jsx(rt,{path:"/quiz/:category",element:n.jsx(zg,{})}),n.jsx(rt,{path:"*",element:n.jsx(bd,{})})]})})})}eo.createRoot(document.getElementById("root")).render(n.jsx(xt.StrictMode,{children:n.jsx(px,{children:n.jsx(Tv,{})})}));export{jm as c,Id as g};
