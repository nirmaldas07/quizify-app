(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function r(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(a){if(a.ep)return;a.ep=!0;const o=r(a);fetch(a.href,o)}})();var Uf=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Jd(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Zd={exports:{}},co={},eu={exports:{}},je={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bs=Symbol.for("react.element"),qf=Symbol.for("react.portal"),Yf=Symbol.for("react.fragment"),Qf=Symbol.for("react.strict_mode"),Wf=Symbol.for("react.profiler"),Gf=Symbol.for("react.provider"),Hf=Symbol.for("react.context"),Kf=Symbol.for("react.forward_ref"),Vf=Symbol.for("react.suspense"),Xf=Symbol.for("react.memo"),Jf=Symbol.for("react.lazy"),hc=Symbol.iterator;function Zf(e){return e===null||typeof e!="object"?null:(e=hc&&e[hc]||e["@@iterator"],typeof e=="function"?e:null)}var tu={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},nu=Object.assign,ru={};function Fr(e,t,r){this.props=e,this.context=t,this.refs=ru,this.updater=r||tu}Fr.prototype.isReactComponent={};Fr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Fr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function su(){}su.prototype=Fr.prototype;function il(e,t,r){this.props=e,this.context=t,this.refs=ru,this.updater=r||tu}var ll=il.prototype=new su;ll.constructor=il;nu(ll,Fr.prototype);ll.isPureReactComponent=!0;var pc=Array.isArray,au=Object.prototype.hasOwnProperty,cl={current:null},ou={key:!0,ref:!0,__self:!0,__source:!0};function iu(e,t,r){var s,a={},o=null,i=null;if(t!=null)for(s in t.ref!==void 0&&(i=t.ref),t.key!==void 0&&(o=""+t.key),t)au.call(t,s)&&!ou.hasOwnProperty(s)&&(a[s]=t[s]);var l=arguments.length-2;if(l===1)a.children=r;else if(1<l){for(var c=Array(l),u=0;u<l;u++)c[u]=arguments[u+2];a.children=c}if(e&&e.defaultProps)for(s in l=e.defaultProps,l)a[s]===void 0&&(a[s]=l[s]);return{$$typeof:Bs,type:e,key:o,ref:i,props:a,_owner:cl.current}}function e0(e,t){return{$$typeof:Bs,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function dl(e){return typeof e=="object"&&e!==null&&e.$$typeof===Bs}function t0(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(r){return t[r]})}var xc=/\/+/g;function Po(e,t){return typeof e=="object"&&e!==null&&e.key!=null?t0(""+e.key):t.toString(36)}function wa(e,t,r,s,a){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(o){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case Bs:case qf:i=!0}}if(i)return i=e,a=a(i),e=s===""?"."+Po(i,0):s,pc(a)?(r="",e!=null&&(r=e.replace(xc,"$&/")+"/"),wa(a,t,r,"",function(u){return u})):a!=null&&(dl(a)&&(a=e0(a,r+(!a.key||i&&i.key===a.key?"":(""+a.key).replace(xc,"$&/")+"/")+e)),t.push(a)),1;if(i=0,s=s===""?".":s+":",pc(e))for(var l=0;l<e.length;l++){o=e[l];var c=s+Po(o,l);i+=wa(o,t,r,c,a)}else if(c=Zf(e),typeof c=="function")for(e=c.call(e),l=0;!(o=e.next()).done;)o=o.value,c=s+Po(o,l++),i+=wa(o,t,r,c,a);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function Hs(e,t,r){if(e==null)return e;var s=[],a=0;return wa(e,s,"","",function(o){return t.call(r,o,a++)}),s}function n0(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(r){(e._status===0||e._status===-1)&&(e._status=1,e._result=r)},function(r){(e._status===0||e._status===-1)&&(e._status=2,e._result=r)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var bt={current:null},ja={transition:null},r0={ReactCurrentDispatcher:bt,ReactCurrentBatchConfig:ja,ReactCurrentOwner:cl};function lu(){throw Error("act(...) is not supported in production builds of React.")}je.Children={map:Hs,forEach:function(e,t,r){Hs(e,function(){t.apply(this,arguments)},r)},count:function(e){var t=0;return Hs(e,function(){t++}),t},toArray:function(e){return Hs(e,function(t){return t})||[]},only:function(e){if(!dl(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};je.Component=Fr;je.Fragment=Yf;je.Profiler=Wf;je.PureComponent=il;je.StrictMode=Qf;je.Suspense=Vf;je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=r0;je.act=lu;je.cloneElement=function(e,t,r){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var s=nu({},e.props),a=e.key,o=e.ref,i=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,i=cl.current),t.key!==void 0&&(a=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(c in t)au.call(t,c)&&!ou.hasOwnProperty(c)&&(s[c]=t[c]===void 0&&l!==void 0?l[c]:t[c])}var c=arguments.length-2;if(c===1)s.children=r;else if(1<c){l=Array(c);for(var u=0;u<c;u++)l[u]=arguments[u+2];s.children=l}return{$$typeof:Bs,type:e.type,key:a,ref:o,props:s,_owner:i}};je.createContext=function(e){return e={$$typeof:Hf,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Gf,_context:e},e.Consumer=e};je.createElement=iu;je.createFactory=function(e){var t=iu.bind(null,e);return t.type=e,t};je.createRef=function(){return{current:null}};je.forwardRef=function(e){return{$$typeof:Kf,render:e}};je.isValidElement=dl;je.lazy=function(e){return{$$typeof:Jf,_payload:{_status:-1,_result:e},_init:n0}};je.memo=function(e,t){return{$$typeof:Xf,type:e,compare:t===void 0?null:t}};je.startTransition=function(e){var t=ja.transition;ja.transition={};try{e()}finally{ja.transition=t}};je.unstable_act=lu;je.useCallback=function(e,t){return bt.current.useCallback(e,t)};je.useContext=function(e){return bt.current.useContext(e)};je.useDebugValue=function(){};je.useDeferredValue=function(e){return bt.current.useDeferredValue(e)};je.useEffect=function(e,t){return bt.current.useEffect(e,t)};je.useId=function(){return bt.current.useId()};je.useImperativeHandle=function(e,t,r){return bt.current.useImperativeHandle(e,t,r)};je.useInsertionEffect=function(e,t){return bt.current.useInsertionEffect(e,t)};je.useLayoutEffect=function(e,t){return bt.current.useLayoutEffect(e,t)};je.useMemo=function(e,t){return bt.current.useMemo(e,t)};je.useReducer=function(e,t,r){return bt.current.useReducer(e,t,r)};je.useRef=function(e){return bt.current.useRef(e)};je.useState=function(e){return bt.current.useState(e)};je.useSyncExternalStore=function(e,t,r){return bt.current.useSyncExternalStore(e,t,r)};je.useTransition=function(){return bt.current.useTransition()};je.version="18.3.1";eu.exports=je;var d=eu.exports;const gt=Jd(d);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var s0=d,a0=Symbol.for("react.element"),o0=Symbol.for("react.fragment"),i0=Object.prototype.hasOwnProperty,l0=s0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c0={key:!0,ref:!0,__self:!0,__source:!0};function cu(e,t,r){var s,a={},o=null,i=null;r!==void 0&&(o=""+r),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(i=t.ref);for(s in t)i0.call(t,s)&&!c0.hasOwnProperty(s)&&(a[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps,t)a[s]===void 0&&(a[s]=t[s]);return{$$typeof:a0,type:e,key:o,ref:i,props:a,_owner:l0.current}}co.Fragment=o0;co.jsx=cu;co.jsxs=cu;Zd.exports=co;var n=Zd.exports,ci={},du={exports:{}},At={},uu={exports:{}},mu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(M,I){var z=M.length;M.push(I);e:for(;0<z;){var D=z-1>>>1,E=M[D];if(0<a(E,I))M[D]=I,M[z]=E,z=D;else break e}}function r(M){return M.length===0?null:M[0]}function s(M){if(M.length===0)return null;var I=M[0],z=M.pop();if(z!==I){M[0]=z;e:for(var D=0,E=M.length,P=E>>>1;D<P;){var $=2*(D+1)-1,Y=M[$],L=$+1,G=M[L];if(0>a(Y,z))L<E&&0>a(G,Y)?(M[D]=G,M[L]=z,D=L):(M[D]=Y,M[$]=z,D=$);else if(L<E&&0>a(G,z))M[D]=G,M[L]=z,D=L;else break e}}return I}function a(M,I){var z=M.sortIndex-I.sortIndex;return z!==0?z:M.id-I.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var i=Date,l=i.now();e.unstable_now=function(){return i.now()-l}}var c=[],u=[],m=1,p=null,f=3,w=!1,g=!1,j=!1,S=typeof setTimeout=="function"?setTimeout:null,y=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(M){for(var I=r(u);I!==null;){if(I.callback===null)s(u);else if(I.startTime<=M)s(u),I.sortIndex=I.expirationTime,t(c,I);else break;I=r(u)}}function N(M){if(j=!1,x(M),!g)if(r(c)!==null)g=!0,K(C);else{var I=r(u);I!==null&&U(N,I.startTime-M)}}function C(M,I){g=!1,j&&(j=!1,y(h),h=-1),w=!0;var z=f;try{for(x(I),p=r(c);p!==null&&(!(p.expirationTime>I)||M&&!_());){var D=p.callback;if(typeof D=="function"){p.callback=null,f=p.priorityLevel;var E=D(p.expirationTime<=I);I=e.unstable_now(),typeof E=="function"?p.callback=E:p===r(c)&&s(c),x(I)}else s(c);p=r(c)}if(p!==null)var P=!0;else{var $=r(u);$!==null&&U(N,$.startTime-I),P=!1}return P}finally{p=null,f=z,w=!1}}var R=!1,T=null,h=-1,b=5,k=-1;function _(){return!(e.unstable_now()-k<b)}function A(){if(T!==null){var M=e.unstable_now();k=M;var I=!0;try{I=T(!0,M)}finally{I?q():(R=!1,T=null)}}else R=!1}var q;if(typeof v=="function")q=function(){v(A)};else if(typeof MessageChannel<"u"){var H=new MessageChannel,V=H.port2;H.port1.onmessage=A,q=function(){V.postMessage(null)}}else q=function(){S(A,0)};function K(M){T=M,R||(R=!0,q())}function U(M,I){h=S(function(){M(e.unstable_now())},I)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(M){M.callback=null},e.unstable_continueExecution=function(){g||w||(g=!0,K(C))},e.unstable_forceFrameRate=function(M){0>M||125<M?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<M?Math.floor(1e3/M):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return r(c)},e.unstable_next=function(M){switch(f){case 1:case 2:case 3:var I=3;break;default:I=f}var z=f;f=I;try{return M()}finally{f=z}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(M,I){switch(M){case 1:case 2:case 3:case 4:case 5:break;default:M=3}var z=f;f=M;try{return I()}finally{f=z}},e.unstable_scheduleCallback=function(M,I,z){var D=e.unstable_now();switch(typeof z=="object"&&z!==null?(z=z.delay,z=typeof z=="number"&&0<z?D+z:D):z=D,M){case 1:var E=-1;break;case 2:E=250;break;case 5:E=1073741823;break;case 4:E=1e4;break;default:E=5e3}return E=z+E,M={id:m++,callback:I,priorityLevel:M,startTime:z,expirationTime:E,sortIndex:-1},z>D?(M.sortIndex=z,t(u,M),r(c)===null&&M===r(u)&&(j?(y(h),h=-1):j=!0,U(N,z-D))):(M.sortIndex=E,t(c,M),g||w||(g=!0,K(C))),M},e.unstable_shouldYield=_,e.unstable_wrapCallback=function(M){var I=f;return function(){var z=f;f=I;try{return M.apply(this,arguments)}finally{f=z}}}})(mu);uu.exports=mu;var d0=uu.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var u0=d,_t=d0;function Z(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var fu=new Set,Ns={};function ir(e,t){_r(e,t),_r(e+"Capture",t)}function _r(e,t){for(Ns[e]=t,e=0;e<t.length;e++)fu.add(t[e])}var un=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),di=Object.prototype.hasOwnProperty,m0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,gc={},vc={};function f0(e){return di.call(vc,e)?!0:di.call(gc,e)?!1:m0.test(e)?vc[e]=!0:(gc[e]=!0,!1)}function h0(e,t,r,s){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return s?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function p0(e,t,r,s){if(t===null||typeof t>"u"||h0(e,t,r,s))return!0;if(s)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function wt(e,t,r,s,a,o,i){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=s,this.attributeNamespace=a,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=i}var dt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){dt[e]=new wt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];dt[t]=new wt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){dt[e]=new wt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){dt[e]=new wt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){dt[e]=new wt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){dt[e]=new wt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){dt[e]=new wt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){dt[e]=new wt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){dt[e]=new wt(e,5,!1,e.toLowerCase(),null,!1,!1)});var ul=/[\-:]([a-z])/g;function ml(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(ul,ml);dt[t]=new wt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(ul,ml);dt[t]=new wt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(ul,ml);dt[t]=new wt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){dt[e]=new wt(e,1,!1,e.toLowerCase(),null,!1,!1)});dt.xlinkHref=new wt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){dt[e]=new wt(e,1,!1,e.toLowerCase(),null,!0,!0)});function fl(e,t,r,s){var a=dt.hasOwnProperty(t)?dt[t]:null;(a!==null?a.type!==0:s||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(p0(t,r,a,s)&&(r=null),s||a===null?f0(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):a.mustUseProperty?e[a.propertyName]=r===null?a.type===3?!1:"":r:(t=a.attributeName,s=a.attributeNamespace,r===null?e.removeAttribute(t):(a=a.type,r=a===3||a===4&&r===!0?"":""+r,s?e.setAttributeNS(s,t,r):e.setAttribute(t,r))))}var xn=u0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ks=Symbol.for("react.element"),mr=Symbol.for("react.portal"),fr=Symbol.for("react.fragment"),hl=Symbol.for("react.strict_mode"),ui=Symbol.for("react.profiler"),hu=Symbol.for("react.provider"),pu=Symbol.for("react.context"),pl=Symbol.for("react.forward_ref"),mi=Symbol.for("react.suspense"),fi=Symbol.for("react.suspense_list"),xl=Symbol.for("react.memo"),Nn=Symbol.for("react.lazy"),xu=Symbol.for("react.offscreen"),yc=Symbol.iterator;function Vr(e){return e===null||typeof e!="object"?null:(e=yc&&e[yc]||e["@@iterator"],typeof e=="function"?e:null)}var qe=Object.assign,Ro;function cs(e){if(Ro===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);Ro=t&&t[1]||""}return`
`+Ro+e}var _o=!1;function Ao(e,t){if(!e||_o)return"";_o=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var s=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){s=u}e.call(t.prototype)}else{try{throw Error()}catch(u){s=u}e()}}catch(u){if(u&&s&&typeof u.stack=="string"){for(var a=u.stack.split(`
`),o=s.stack.split(`
`),i=a.length-1,l=o.length-1;1<=i&&0<=l&&a[i]!==o[l];)l--;for(;1<=i&&0<=l;i--,l--)if(a[i]!==o[l]){if(i!==1||l!==1)do if(i--,l--,0>l||a[i]!==o[l]){var c=`
`+a[i].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=i&&0<=l);break}}}finally{_o=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?cs(e):""}function x0(e){switch(e.tag){case 5:return cs(e.type);case 16:return cs("Lazy");case 13:return cs("Suspense");case 19:return cs("SuspenseList");case 0:case 2:case 15:return e=Ao(e.type,!1),e;case 11:return e=Ao(e.type.render,!1),e;case 1:return e=Ao(e.type,!0),e;default:return""}}function hi(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case fr:return"Fragment";case mr:return"Portal";case ui:return"Profiler";case hl:return"StrictMode";case mi:return"Suspense";case fi:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case pu:return(e.displayName||"Context")+".Consumer";case hu:return(e._context.displayName||"Context")+".Provider";case pl:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case xl:return t=e.displayName||null,t!==null?t:hi(e.type)||"Memo";case Nn:t=e._payload,e=e._init;try{return hi(e(t))}catch{}}return null}function g0(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return hi(t);case 8:return t===hl?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function On(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function gu(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function v0(e){var t=gu(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),s=""+e[t];if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var a=r.get,o=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(i){s=""+i,o.call(this,i)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return s},setValue:function(i){s=""+i},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Vs(e){e._valueTracker||(e._valueTracker=v0(e))}function vu(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),s="";return e&&(s=gu(e)?e.checked?"true":"false":e.value),e=s,e!==r?(t.setValue(e),!0):!1}function Ma(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function pi(e,t){var r=t.checked;return qe({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function bc(e,t){var r=t.defaultValue==null?"":t.defaultValue,s=t.checked!=null?t.checked:t.defaultChecked;r=On(t.value!=null?t.value:r),e._wrapperState={initialChecked:s,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function yu(e,t){t=t.checked,t!=null&&fl(e,"checked",t,!1)}function xi(e,t){yu(e,t);var r=On(t.value),s=t.type;if(r!=null)s==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(s==="submit"||s==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?gi(e,t.type,r):t.hasOwnProperty("defaultValue")&&gi(e,t.type,On(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function wc(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var s=t.type;if(!(s!=="submit"&&s!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function gi(e,t,r){(t!=="number"||Ma(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var ds=Array.isArray;function kr(e,t,r,s){if(e=e.options,t){t={};for(var a=0;a<r.length;a++)t["$"+r[a]]=!0;for(r=0;r<e.length;r++)a=t.hasOwnProperty("$"+e[r].value),e[r].selected!==a&&(e[r].selected=a),a&&s&&(e[r].defaultSelected=!0)}else{for(r=""+On(r),t=null,a=0;a<e.length;a++){if(e[a].value===r){e[a].selected=!0,s&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function vi(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(Z(91));return qe({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function jc(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(Z(92));if(ds(r)){if(1<r.length)throw Error(Z(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:On(r)}}function bu(e,t){var r=On(t.value),s=On(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),s!=null&&(e.defaultValue=""+s)}function Nc(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function wu(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function yi(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?wu(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Xs,ju=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,r,s,a){MSApp.execUnsafeLocalFunction(function(){return e(t,r,s,a)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Xs=Xs||document.createElement("div"),Xs.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Xs.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function ks(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var fs={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},y0=["Webkit","ms","Moz","O"];Object.keys(fs).forEach(function(e){y0.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),fs[t]=fs[e]})});function Nu(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||fs.hasOwnProperty(e)&&fs[e]?(""+t).trim():t+"px"}function ku(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var s=r.indexOf("--")===0,a=Nu(r,t[r],s);r==="float"&&(r="cssFloat"),s?e.setProperty(r,a):e[r]=a}}var b0=qe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function bi(e,t){if(t){if(b0[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(Z(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(Z(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(Z(61))}if(t.style!=null&&typeof t.style!="object")throw Error(Z(62))}}function wi(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ji=null;function gl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ni=null,Sr=null,Cr=null;function kc(e){if(e=Ys(e)){if(typeof Ni!="function")throw Error(Z(280));var t=e.stateNode;t&&(t=po(t),Ni(e.stateNode,e.type,t))}}function Su(e){Sr?Cr?Cr.push(e):Cr=[e]:Sr=e}function Cu(){if(Sr){var e=Sr,t=Cr;if(Cr=Sr=null,kc(e),t)for(e=0;e<t.length;e++)kc(t[e])}}function Eu(e,t){return e(t)}function Tu(){}var Io=!1;function Pu(e,t,r){if(Io)return e(t,r);Io=!0;try{return Eu(e,t,r)}finally{Io=!1,(Sr!==null||Cr!==null)&&(Tu(),Cu())}}function Ss(e,t){var r=e.stateNode;if(r===null)return null;var s=po(r);if(s===null)return null;r=s[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(e=e.type,s=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!s;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(Z(231,t,typeof r));return r}var ki=!1;if(un)try{var Xr={};Object.defineProperty(Xr,"passive",{get:function(){ki=!0}}),window.addEventListener("test",Xr,Xr),window.removeEventListener("test",Xr,Xr)}catch{ki=!1}function w0(e,t,r,s,a,o,i,l,c){var u=Array.prototype.slice.call(arguments,3);try{t.apply(r,u)}catch(m){this.onError(m)}}var hs=!1,Oa=null,Fa=!1,Si=null,j0={onError:function(e){hs=!0,Oa=e}};function N0(e,t,r,s,a,o,i,l,c){hs=!1,Oa=null,w0.apply(j0,arguments)}function k0(e,t,r,s,a,o,i,l,c){if(N0.apply(this,arguments),hs){if(hs){var u=Oa;hs=!1,Oa=null}else throw Error(Z(198));Fa||(Fa=!0,Si=u)}}function lr(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function Ru(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Sc(e){if(lr(e)!==e)throw Error(Z(188))}function S0(e){var t=e.alternate;if(!t){if(t=lr(e),t===null)throw Error(Z(188));return t!==e?null:e}for(var r=e,s=t;;){var a=r.return;if(a===null)break;var o=a.alternate;if(o===null){if(s=a.return,s!==null){r=s;continue}break}if(a.child===o.child){for(o=a.child;o;){if(o===r)return Sc(a),e;if(o===s)return Sc(a),t;o=o.sibling}throw Error(Z(188))}if(r.return!==s.return)r=a,s=o;else{for(var i=!1,l=a.child;l;){if(l===r){i=!0,r=a,s=o;break}if(l===s){i=!0,s=a,r=o;break}l=l.sibling}if(!i){for(l=o.child;l;){if(l===r){i=!0,r=o,s=a;break}if(l===s){i=!0,s=o,r=a;break}l=l.sibling}if(!i)throw Error(Z(189))}}if(r.alternate!==s)throw Error(Z(190))}if(r.tag!==3)throw Error(Z(188));return r.stateNode.current===r?e:t}function _u(e){return e=S0(e),e!==null?Au(e):null}function Au(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Au(e);if(t!==null)return t;e=e.sibling}return null}var Iu=_t.unstable_scheduleCallback,Cc=_t.unstable_cancelCallback,C0=_t.unstable_shouldYield,E0=_t.unstable_requestPaint,Ge=_t.unstable_now,T0=_t.unstable_getCurrentPriorityLevel,vl=_t.unstable_ImmediatePriority,Lu=_t.unstable_UserBlockingPriority,$a=_t.unstable_NormalPriority,P0=_t.unstable_LowPriority,Du=_t.unstable_IdlePriority,uo=null,tn=null;function R0(e){if(tn&&typeof tn.onCommitFiberRoot=="function")try{tn.onCommitFiberRoot(uo,e,void 0,(e.current.flags&128)===128)}catch{}}var Gt=Math.clz32?Math.clz32:I0,_0=Math.log,A0=Math.LN2;function I0(e){return e>>>=0,e===0?32:31-(_0(e)/A0|0)|0}var Js=64,Zs=4194304;function us(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ba(e,t){var r=e.pendingLanes;if(r===0)return 0;var s=0,a=e.suspendedLanes,o=e.pingedLanes,i=r&268435455;if(i!==0){var l=i&~a;l!==0?s=us(l):(o&=i,o!==0&&(s=us(o)))}else i=r&~a,i!==0?s=us(i):o!==0&&(s=us(o));if(s===0)return 0;if(t!==0&&t!==s&&!(t&a)&&(a=s&-s,o=t&-t,a>=o||a===16&&(o&4194240)!==0))return t;if(s&4&&(s|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=s;0<t;)r=31-Gt(t),a=1<<r,s|=e[r],t&=~a;return s}function L0(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function D0(e,t){for(var r=e.suspendedLanes,s=e.pingedLanes,a=e.expirationTimes,o=e.pendingLanes;0<o;){var i=31-Gt(o),l=1<<i,c=a[i];c===-1?(!(l&r)||l&s)&&(a[i]=L0(l,t)):c<=t&&(e.expiredLanes|=l),o&=~l}}function Ci(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function zu(){var e=Js;return Js<<=1,!(Js&4194240)&&(Js=64),e}function Lo(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function Us(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Gt(t),e[t]=r}function z0(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var s=e.eventTimes;for(e=e.expirationTimes;0<r;){var a=31-Gt(r),o=1<<a;t[a]=0,s[a]=-1,e[a]=-1,r&=~o}}function yl(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var s=31-Gt(r),a=1<<s;a&t|e[s]&t&&(e[s]|=t),r&=~a}}var Pe=0;function Mu(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Ou,bl,Fu,$u,Bu,Ei=!1,ea=[],Rn=null,_n=null,An=null,Cs=new Map,Es=new Map,Cn=[],M0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ec(e,t){switch(e){case"focusin":case"focusout":Rn=null;break;case"dragenter":case"dragleave":_n=null;break;case"mouseover":case"mouseout":An=null;break;case"pointerover":case"pointerout":Cs.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Es.delete(t.pointerId)}}function Jr(e,t,r,s,a,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:r,eventSystemFlags:s,nativeEvent:o,targetContainers:[a]},t!==null&&(t=Ys(t),t!==null&&bl(t)),e):(e.eventSystemFlags|=s,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function O0(e,t,r,s,a){switch(t){case"focusin":return Rn=Jr(Rn,e,t,r,s,a),!0;case"dragenter":return _n=Jr(_n,e,t,r,s,a),!0;case"mouseover":return An=Jr(An,e,t,r,s,a),!0;case"pointerover":var o=a.pointerId;return Cs.set(o,Jr(Cs.get(o)||null,e,t,r,s,a)),!0;case"gotpointercapture":return o=a.pointerId,Es.set(o,Jr(Es.get(o)||null,e,t,r,s,a)),!0}return!1}function Uu(e){var t=Gn(e.target);if(t!==null){var r=lr(t);if(r!==null){if(t=r.tag,t===13){if(t=Ru(r),t!==null){e.blockedOn=t,Bu(e.priority,function(){Fu(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Na(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=Ti(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var s=new r.constructor(r.type,r);ji=s,r.target.dispatchEvent(s),ji=null}else return t=Ys(r),t!==null&&bl(t),e.blockedOn=r,!1;t.shift()}return!0}function Tc(e,t,r){Na(e)&&r.delete(t)}function F0(){Ei=!1,Rn!==null&&Na(Rn)&&(Rn=null),_n!==null&&Na(_n)&&(_n=null),An!==null&&Na(An)&&(An=null),Cs.forEach(Tc),Es.forEach(Tc)}function Zr(e,t){e.blockedOn===t&&(e.blockedOn=null,Ei||(Ei=!0,_t.unstable_scheduleCallback(_t.unstable_NormalPriority,F0)))}function Ts(e){function t(a){return Zr(a,e)}if(0<ea.length){Zr(ea[0],e);for(var r=1;r<ea.length;r++){var s=ea[r];s.blockedOn===e&&(s.blockedOn=null)}}for(Rn!==null&&Zr(Rn,e),_n!==null&&Zr(_n,e),An!==null&&Zr(An,e),Cs.forEach(t),Es.forEach(t),r=0;r<Cn.length;r++)s=Cn[r],s.blockedOn===e&&(s.blockedOn=null);for(;0<Cn.length&&(r=Cn[0],r.blockedOn===null);)Uu(r),r.blockedOn===null&&Cn.shift()}var Er=xn.ReactCurrentBatchConfig,Ua=!0;function $0(e,t,r,s){var a=Pe,o=Er.transition;Er.transition=null;try{Pe=1,wl(e,t,r,s)}finally{Pe=a,Er.transition=o}}function B0(e,t,r,s){var a=Pe,o=Er.transition;Er.transition=null;try{Pe=4,wl(e,t,r,s)}finally{Pe=a,Er.transition=o}}function wl(e,t,r,s){if(Ua){var a=Ti(e,t,r,s);if(a===null)Yo(e,t,s,qa,r),Ec(e,s);else if(O0(a,e,t,r,s))s.stopPropagation();else if(Ec(e,s),t&4&&-1<M0.indexOf(e)){for(;a!==null;){var o=Ys(a);if(o!==null&&Ou(o),o=Ti(e,t,r,s),o===null&&Yo(e,t,s,qa,r),o===a)break;a=o}a!==null&&s.stopPropagation()}else Yo(e,t,s,null,r)}}var qa=null;function Ti(e,t,r,s){if(qa=null,e=gl(s),e=Gn(e),e!==null)if(t=lr(e),t===null)e=null;else if(r=t.tag,r===13){if(e=Ru(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return qa=e,null}function qu(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(T0()){case vl:return 1;case Lu:return 4;case $a:case P0:return 16;case Du:return 536870912;default:return 16}default:return 16}}var Tn=null,jl=null,ka=null;function Yu(){if(ka)return ka;var e,t=jl,r=t.length,s,a="value"in Tn?Tn.value:Tn.textContent,o=a.length;for(e=0;e<r&&t[e]===a[e];e++);var i=r-e;for(s=1;s<=i&&t[r-s]===a[o-s];s++);return ka=a.slice(e,1<s?1-s:void 0)}function Sa(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ta(){return!0}function Pc(){return!1}function It(e){function t(r,s,a,o,i){this._reactName=r,this._targetInst=a,this.type=s,this.nativeEvent=o,this.target=i,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(r=e[l],this[l]=r?r(o):o[l]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?ta:Pc,this.isPropagationStopped=Pc,this}return qe(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=ta)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=ta)},persist:function(){},isPersistent:ta}),t}var $r={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Nl=It($r),qs=qe({},$r,{view:0,detail:0}),U0=It(qs),Do,zo,es,mo=qe({},qs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:kl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==es&&(es&&e.type==="mousemove"?(Do=e.screenX-es.screenX,zo=e.screenY-es.screenY):zo=Do=0,es=e),Do)},movementY:function(e){return"movementY"in e?e.movementY:zo}}),Rc=It(mo),q0=qe({},mo,{dataTransfer:0}),Y0=It(q0),Q0=qe({},qs,{relatedTarget:0}),Mo=It(Q0),W0=qe({},$r,{animationName:0,elapsedTime:0,pseudoElement:0}),G0=It(W0),H0=qe({},$r,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),K0=It(H0),V0=qe({},$r,{data:0}),_c=It(V0),X0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},J0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Z0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function eh(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Z0[e])?!!t[e]:!1}function kl(){return eh}var th=qe({},qs,{key:function(e){if(e.key){var t=X0[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Sa(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?J0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:kl,charCode:function(e){return e.type==="keypress"?Sa(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Sa(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),nh=It(th),rh=qe({},mo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ac=It(rh),sh=qe({},qs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:kl}),ah=It(sh),oh=qe({},$r,{propertyName:0,elapsedTime:0,pseudoElement:0}),ih=It(oh),lh=qe({},mo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),ch=It(lh),dh=[9,13,27,32],Sl=un&&"CompositionEvent"in window,ps=null;un&&"documentMode"in document&&(ps=document.documentMode);var uh=un&&"TextEvent"in window&&!ps,Qu=un&&(!Sl||ps&&8<ps&&11>=ps),Ic=String.fromCharCode(32),Lc=!1;function Wu(e,t){switch(e){case"keyup":return dh.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Gu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var hr=!1;function mh(e,t){switch(e){case"compositionend":return Gu(t);case"keypress":return t.which!==32?null:(Lc=!0,Ic);case"textInput":return e=t.data,e===Ic&&Lc?null:e;default:return null}}function fh(e,t){if(hr)return e==="compositionend"||!Sl&&Wu(e,t)?(e=Yu(),ka=jl=Tn=null,hr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Qu&&t.locale!=="ko"?null:t.data;default:return null}}var hh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Dc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!hh[e.type]:t==="textarea"}function Hu(e,t,r,s){Su(s),t=Ya(t,"onChange"),0<t.length&&(r=new Nl("onChange","change",null,r,s),e.push({event:r,listeners:t}))}var xs=null,Ps=null;function ph(e){am(e,0)}function fo(e){var t=gr(e);if(vu(t))return e}function xh(e,t){if(e==="change")return t}var Ku=!1;if(un){var Oo;if(un){var Fo="oninput"in document;if(!Fo){var zc=document.createElement("div");zc.setAttribute("oninput","return;"),Fo=typeof zc.oninput=="function"}Oo=Fo}else Oo=!1;Ku=Oo&&(!document.documentMode||9<document.documentMode)}function Mc(){xs&&(xs.detachEvent("onpropertychange",Vu),Ps=xs=null)}function Vu(e){if(e.propertyName==="value"&&fo(Ps)){var t=[];Hu(t,Ps,e,gl(e)),Pu(ph,t)}}function gh(e,t,r){e==="focusin"?(Mc(),xs=t,Ps=r,xs.attachEvent("onpropertychange",Vu)):e==="focusout"&&Mc()}function vh(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return fo(Ps)}function yh(e,t){if(e==="click")return fo(t)}function bh(e,t){if(e==="input"||e==="change")return fo(t)}function wh(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Kt=typeof Object.is=="function"?Object.is:wh;function Rs(e,t){if(Kt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),s=Object.keys(t);if(r.length!==s.length)return!1;for(s=0;s<r.length;s++){var a=r[s];if(!di.call(t,a)||!Kt(e[a],t[a]))return!1}return!0}function Oc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Fc(e,t){var r=Oc(e);e=0;for(var s;r;){if(r.nodeType===3){if(s=e+r.textContent.length,e<=t&&s>=t)return{node:r,offset:t-e};e=s}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=Oc(r)}}function Xu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Xu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ju(){for(var e=window,t=Ma();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=Ma(e.document)}return t}function Cl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function jh(e){var t=Ju(),r=e.focusedElem,s=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&Xu(r.ownerDocument.documentElement,r)){if(s!==null&&Cl(r)){if(t=s.start,e=s.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var a=r.textContent.length,o=Math.min(s.start,a);s=s.end===void 0?o:Math.min(s.end,a),!e.extend&&o>s&&(a=s,s=o,o=a),a=Fc(r,o);var i=Fc(r,s);a&&i&&(e.rangeCount!==1||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(t=t.createRange(),t.setStart(a.node,a.offset),e.removeAllRanges(),o>s?(e.addRange(t),e.extend(i.node,i.offset)):(t.setEnd(i.node,i.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Nh=un&&"documentMode"in document&&11>=document.documentMode,pr=null,Pi=null,gs=null,Ri=!1;function $c(e,t,r){var s=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;Ri||pr==null||pr!==Ma(s)||(s=pr,"selectionStart"in s&&Cl(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),gs&&Rs(gs,s)||(gs=s,s=Ya(Pi,"onSelect"),0<s.length&&(t=new Nl("onSelect","select",null,t,r),e.push({event:t,listeners:s}),t.target=pr)))}function na(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var xr={animationend:na("Animation","AnimationEnd"),animationiteration:na("Animation","AnimationIteration"),animationstart:na("Animation","AnimationStart"),transitionend:na("Transition","TransitionEnd")},$o={},Zu={};un&&(Zu=document.createElement("div").style,"AnimationEvent"in window||(delete xr.animationend.animation,delete xr.animationiteration.animation,delete xr.animationstart.animation),"TransitionEvent"in window||delete xr.transitionend.transition);function ho(e){if($o[e])return $o[e];if(!xr[e])return e;var t=xr[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in Zu)return $o[e]=t[r];return e}var em=ho("animationend"),tm=ho("animationiteration"),nm=ho("animationstart"),rm=ho("transitionend"),sm=new Map,Bc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function $n(e,t){sm.set(e,t),ir(t,[e])}for(var Bo=0;Bo<Bc.length;Bo++){var Uo=Bc[Bo],kh=Uo.toLowerCase(),Sh=Uo[0].toUpperCase()+Uo.slice(1);$n(kh,"on"+Sh)}$n(em,"onAnimationEnd");$n(tm,"onAnimationIteration");$n(nm,"onAnimationStart");$n("dblclick","onDoubleClick");$n("focusin","onFocus");$n("focusout","onBlur");$n(rm,"onTransitionEnd");_r("onMouseEnter",["mouseout","mouseover"]);_r("onMouseLeave",["mouseout","mouseover"]);_r("onPointerEnter",["pointerout","pointerover"]);_r("onPointerLeave",["pointerout","pointerover"]);ir("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ir("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ir("onBeforeInput",["compositionend","keypress","textInput","paste"]);ir("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ir("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ir("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ms="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ch=new Set("cancel close invalid load scroll toggle".split(" ").concat(ms));function Uc(e,t,r){var s=e.type||"unknown-event";e.currentTarget=r,k0(s,t,void 0,e),e.currentTarget=null}function am(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var s=e[r],a=s.event;s=s.listeners;e:{var o=void 0;if(t)for(var i=s.length-1;0<=i;i--){var l=s[i],c=l.instance,u=l.currentTarget;if(l=l.listener,c!==o&&a.isPropagationStopped())break e;Uc(a,l,u),o=c}else for(i=0;i<s.length;i++){if(l=s[i],c=l.instance,u=l.currentTarget,l=l.listener,c!==o&&a.isPropagationStopped())break e;Uc(a,l,u),o=c}}}if(Fa)throw e=Si,Fa=!1,Si=null,e}function Le(e,t){var r=t[Di];r===void 0&&(r=t[Di]=new Set);var s=e+"__bubble";r.has(s)||(om(t,e,2,!1),r.add(s))}function qo(e,t,r){var s=0;t&&(s|=4),om(r,e,s,t)}var ra="_reactListening"+Math.random().toString(36).slice(2);function _s(e){if(!e[ra]){e[ra]=!0,fu.forEach(function(r){r!=="selectionchange"&&(Ch.has(r)||qo(r,!1,e),qo(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ra]||(t[ra]=!0,qo("selectionchange",!1,t))}}function om(e,t,r,s){switch(qu(t)){case 1:var a=$0;break;case 4:a=B0;break;default:a=wl}r=a.bind(null,t,r,e),a=void 0,!ki||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),s?a!==void 0?e.addEventListener(t,r,{capture:!0,passive:a}):e.addEventListener(t,r,!0):a!==void 0?e.addEventListener(t,r,{passive:a}):e.addEventListener(t,r,!1)}function Yo(e,t,r,s,a){var o=s;if(!(t&1)&&!(t&2)&&s!==null)e:for(;;){if(s===null)return;var i=s.tag;if(i===3||i===4){var l=s.stateNode.containerInfo;if(l===a||l.nodeType===8&&l.parentNode===a)break;if(i===4)for(i=s.return;i!==null;){var c=i.tag;if((c===3||c===4)&&(c=i.stateNode.containerInfo,c===a||c.nodeType===8&&c.parentNode===a))return;i=i.return}for(;l!==null;){if(i=Gn(l),i===null)return;if(c=i.tag,c===5||c===6){s=o=i;continue e}l=l.parentNode}}s=s.return}Pu(function(){var u=o,m=gl(r),p=[];e:{var f=sm.get(e);if(f!==void 0){var w=Nl,g=e;switch(e){case"keypress":if(Sa(r)===0)break e;case"keydown":case"keyup":w=nh;break;case"focusin":g="focus",w=Mo;break;case"focusout":g="blur",w=Mo;break;case"beforeblur":case"afterblur":w=Mo;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=Rc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=Y0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=ah;break;case em:case tm:case nm:w=G0;break;case rm:w=ih;break;case"scroll":w=U0;break;case"wheel":w=ch;break;case"copy":case"cut":case"paste":w=K0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=Ac}var j=(t&4)!==0,S=!j&&e==="scroll",y=j?f!==null?f+"Capture":null:f;j=[];for(var v=u,x;v!==null;){x=v;var N=x.stateNode;if(x.tag===5&&N!==null&&(x=N,y!==null&&(N=Ss(v,y),N!=null&&j.push(As(v,N,x)))),S)break;v=v.return}0<j.length&&(f=new w(f,g,null,r,m),p.push({event:f,listeners:j}))}}if(!(t&7)){e:{if(f=e==="mouseover"||e==="pointerover",w=e==="mouseout"||e==="pointerout",f&&r!==ji&&(g=r.relatedTarget||r.fromElement)&&(Gn(g)||g[mn]))break e;if((w||f)&&(f=m.window===m?m:(f=m.ownerDocument)?f.defaultView||f.parentWindow:window,w?(g=r.relatedTarget||r.toElement,w=u,g=g?Gn(g):null,g!==null&&(S=lr(g),g!==S||g.tag!==5&&g.tag!==6)&&(g=null)):(w=null,g=u),w!==g)){if(j=Rc,N="onMouseLeave",y="onMouseEnter",v="mouse",(e==="pointerout"||e==="pointerover")&&(j=Ac,N="onPointerLeave",y="onPointerEnter",v="pointer"),S=w==null?f:gr(w),x=g==null?f:gr(g),f=new j(N,v+"leave",w,r,m),f.target=S,f.relatedTarget=x,N=null,Gn(m)===u&&(j=new j(y,v+"enter",g,r,m),j.target=x,j.relatedTarget=S,N=j),S=N,w&&g)t:{for(j=w,y=g,v=0,x=j;x;x=dr(x))v++;for(x=0,N=y;N;N=dr(N))x++;for(;0<v-x;)j=dr(j),v--;for(;0<x-v;)y=dr(y),x--;for(;v--;){if(j===y||y!==null&&j===y.alternate)break t;j=dr(j),y=dr(y)}j=null}else j=null;w!==null&&qc(p,f,w,j,!1),g!==null&&S!==null&&qc(p,S,g,j,!0)}}e:{if(f=u?gr(u):window,w=f.nodeName&&f.nodeName.toLowerCase(),w==="select"||w==="input"&&f.type==="file")var C=xh;else if(Dc(f))if(Ku)C=bh;else{C=vh;var R=gh}else(w=f.nodeName)&&w.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(C=yh);if(C&&(C=C(e,u))){Hu(p,C,r,m);break e}R&&R(e,f,u),e==="focusout"&&(R=f._wrapperState)&&R.controlled&&f.type==="number"&&gi(f,"number",f.value)}switch(R=u?gr(u):window,e){case"focusin":(Dc(R)||R.contentEditable==="true")&&(pr=R,Pi=u,gs=null);break;case"focusout":gs=Pi=pr=null;break;case"mousedown":Ri=!0;break;case"contextmenu":case"mouseup":case"dragend":Ri=!1,$c(p,r,m);break;case"selectionchange":if(Nh)break;case"keydown":case"keyup":$c(p,r,m)}var T;if(Sl)e:{switch(e){case"compositionstart":var h="onCompositionStart";break e;case"compositionend":h="onCompositionEnd";break e;case"compositionupdate":h="onCompositionUpdate";break e}h=void 0}else hr?Wu(e,r)&&(h="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(h="onCompositionStart");h&&(Qu&&r.locale!=="ko"&&(hr||h!=="onCompositionStart"?h==="onCompositionEnd"&&hr&&(T=Yu()):(Tn=m,jl="value"in Tn?Tn.value:Tn.textContent,hr=!0)),R=Ya(u,h),0<R.length&&(h=new _c(h,e,null,r,m),p.push({event:h,listeners:R}),T?h.data=T:(T=Gu(r),T!==null&&(h.data=T)))),(T=uh?mh(e,r):fh(e,r))&&(u=Ya(u,"onBeforeInput"),0<u.length&&(m=new _c("onBeforeInput","beforeinput",null,r,m),p.push({event:m,listeners:u}),m.data=T))}am(p,t)})}function As(e,t,r){return{instance:e,listener:t,currentTarget:r}}function Ya(e,t){for(var r=t+"Capture",s=[];e!==null;){var a=e,o=a.stateNode;a.tag===5&&o!==null&&(a=o,o=Ss(e,r),o!=null&&s.unshift(As(e,o,a)),o=Ss(e,t),o!=null&&s.push(As(e,o,a))),e=e.return}return s}function dr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function qc(e,t,r,s,a){for(var o=t._reactName,i=[];r!==null&&r!==s;){var l=r,c=l.alternate,u=l.stateNode;if(c!==null&&c===s)break;l.tag===5&&u!==null&&(l=u,a?(c=Ss(r,o),c!=null&&i.unshift(As(r,c,l))):a||(c=Ss(r,o),c!=null&&i.push(As(r,c,l)))),r=r.return}i.length!==0&&e.push({event:t,listeners:i})}var Eh=/\r\n?/g,Th=/\u0000|\uFFFD/g;function Yc(e){return(typeof e=="string"?e:""+e).replace(Eh,`
`).replace(Th,"")}function sa(e,t,r){if(t=Yc(t),Yc(e)!==t&&r)throw Error(Z(425))}function Qa(){}var _i=null,Ai=null;function Ii(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Li=typeof setTimeout=="function"?setTimeout:void 0,Ph=typeof clearTimeout=="function"?clearTimeout:void 0,Qc=typeof Promise=="function"?Promise:void 0,Rh=typeof queueMicrotask=="function"?queueMicrotask:typeof Qc<"u"?function(e){return Qc.resolve(null).then(e).catch(_h)}:Li;function _h(e){setTimeout(function(){throw e})}function Qo(e,t){var r=t,s=0;do{var a=r.nextSibling;if(e.removeChild(r),a&&a.nodeType===8)if(r=a.data,r==="/$"){if(s===0){e.removeChild(a),Ts(t);return}s--}else r!=="$"&&r!=="$?"&&r!=="$!"||s++;r=a}while(r);Ts(t)}function In(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Wc(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var Br=Math.random().toString(36).slice(2),en="__reactFiber$"+Br,Is="__reactProps$"+Br,mn="__reactContainer$"+Br,Di="__reactEvents$"+Br,Ah="__reactListeners$"+Br,Ih="__reactHandles$"+Br;function Gn(e){var t=e[en];if(t)return t;for(var r=e.parentNode;r;){if(t=r[mn]||r[en]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=Wc(e);e!==null;){if(r=e[en])return r;e=Wc(e)}return t}e=r,r=e.parentNode}return null}function Ys(e){return e=e[en]||e[mn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function gr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(Z(33))}function po(e){return e[Is]||null}var zi=[],vr=-1;function Bn(e){return{current:e}}function ze(e){0>vr||(e.current=zi[vr],zi[vr]=null,vr--)}function _e(e,t){vr++,zi[vr]=e.current,e.current=t}var Fn={},pt=Bn(Fn),kt=Bn(!1),tr=Fn;function Ar(e,t){var r=e.type.contextTypes;if(!r)return Fn;var s=e.stateNode;if(s&&s.__reactInternalMemoizedUnmaskedChildContext===t)return s.__reactInternalMemoizedMaskedChildContext;var a={},o;for(o in r)a[o]=t[o];return s&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=a),a}function St(e){return e=e.childContextTypes,e!=null}function Wa(){ze(kt),ze(pt)}function Gc(e,t,r){if(pt.current!==Fn)throw Error(Z(168));_e(pt,t),_e(kt,r)}function im(e,t,r){var s=e.stateNode;if(t=t.childContextTypes,typeof s.getChildContext!="function")return r;s=s.getChildContext();for(var a in s)if(!(a in t))throw Error(Z(108,g0(e)||"Unknown",a));return qe({},r,s)}function Ga(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Fn,tr=pt.current,_e(pt,e),_e(kt,kt.current),!0}function Hc(e,t,r){var s=e.stateNode;if(!s)throw Error(Z(169));r?(e=im(e,t,tr),s.__reactInternalMemoizedMergedChildContext=e,ze(kt),ze(pt),_e(pt,e)):ze(kt),_e(kt,r)}var an=null,xo=!1,Wo=!1;function lm(e){an===null?an=[e]:an.push(e)}function Lh(e){xo=!0,lm(e)}function Un(){if(!Wo&&an!==null){Wo=!0;var e=0,t=Pe;try{var r=an;for(Pe=1;e<r.length;e++){var s=r[e];do s=s(!0);while(s!==null)}an=null,xo=!1}catch(a){throw an!==null&&(an=an.slice(e+1)),Iu(vl,Un),a}finally{Pe=t,Wo=!1}}return null}var yr=[],br=0,Ha=null,Ka=0,Dt=[],zt=0,nr=null,on=1,ln="";function Qn(e,t){yr[br++]=Ka,yr[br++]=Ha,Ha=e,Ka=t}function cm(e,t,r){Dt[zt++]=on,Dt[zt++]=ln,Dt[zt++]=nr,nr=e;var s=on;e=ln;var a=32-Gt(s)-1;s&=~(1<<a),r+=1;var o=32-Gt(t)+a;if(30<o){var i=a-a%5;o=(s&(1<<i)-1).toString(32),s>>=i,a-=i,on=1<<32-Gt(t)+a|r<<a|s,ln=o+e}else on=1<<o|r<<a|s,ln=e}function El(e){e.return!==null&&(Qn(e,1),cm(e,1,0))}function Tl(e){for(;e===Ha;)Ha=yr[--br],yr[br]=null,Ka=yr[--br],yr[br]=null;for(;e===nr;)nr=Dt[--zt],Dt[zt]=null,ln=Dt[--zt],Dt[zt]=null,on=Dt[--zt],Dt[zt]=null}var Rt=null,Pt=null,Oe=!1,Wt=null;function dm(e,t){var r=Mt(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function Kc(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Rt=e,Pt=In(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Rt=e,Pt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=nr!==null?{id:on,overflow:ln}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=Mt(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,Rt=e,Pt=null,!0):!1;default:return!1}}function Mi(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Oi(e){if(Oe){var t=Pt;if(t){var r=t;if(!Kc(e,t)){if(Mi(e))throw Error(Z(418));t=In(r.nextSibling);var s=Rt;t&&Kc(e,t)?dm(s,r):(e.flags=e.flags&-4097|2,Oe=!1,Rt=e)}}else{if(Mi(e))throw Error(Z(418));e.flags=e.flags&-4097|2,Oe=!1,Rt=e}}}function Vc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Rt=e}function aa(e){if(e!==Rt)return!1;if(!Oe)return Vc(e),Oe=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ii(e.type,e.memoizedProps)),t&&(t=Pt)){if(Mi(e))throw um(),Error(Z(418));for(;t;)dm(e,t),t=In(t.nextSibling)}if(Vc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(Z(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){Pt=In(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}Pt=null}}else Pt=Rt?In(e.stateNode.nextSibling):null;return!0}function um(){for(var e=Pt;e;)e=In(e.nextSibling)}function Ir(){Pt=Rt=null,Oe=!1}function Pl(e){Wt===null?Wt=[e]:Wt.push(e)}var Dh=xn.ReactCurrentBatchConfig;function ts(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(Z(309));var s=r.stateNode}if(!s)throw Error(Z(147,e));var a=s,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(i){var l=a.refs;i===null?delete l[o]:l[o]=i},t._stringRef=o,t)}if(typeof e!="string")throw Error(Z(284));if(!r._owner)throw Error(Z(290,e))}return e}function oa(e,t){throw e=Object.prototype.toString.call(t),Error(Z(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Xc(e){var t=e._init;return t(e._payload)}function mm(e){function t(y,v){if(e){var x=y.deletions;x===null?(y.deletions=[v],y.flags|=16):x.push(v)}}function r(y,v){if(!e)return null;for(;v!==null;)t(y,v),v=v.sibling;return null}function s(y,v){for(y=new Map;v!==null;)v.key!==null?y.set(v.key,v):y.set(v.index,v),v=v.sibling;return y}function a(y,v){return y=Mn(y,v),y.index=0,y.sibling=null,y}function o(y,v,x){return y.index=x,e?(x=y.alternate,x!==null?(x=x.index,x<v?(y.flags|=2,v):x):(y.flags|=2,v)):(y.flags|=1048576,v)}function i(y){return e&&y.alternate===null&&(y.flags|=2),y}function l(y,v,x,N){return v===null||v.tag!==6?(v=Zo(x,y.mode,N),v.return=y,v):(v=a(v,x),v.return=y,v)}function c(y,v,x,N){var C=x.type;return C===fr?m(y,v,x.props.children,N,x.key):v!==null&&(v.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Nn&&Xc(C)===v.type)?(N=a(v,x.props),N.ref=ts(y,v,x),N.return=y,N):(N=Aa(x.type,x.key,x.props,null,y.mode,N),N.ref=ts(y,v,x),N.return=y,N)}function u(y,v,x,N){return v===null||v.tag!==4||v.stateNode.containerInfo!==x.containerInfo||v.stateNode.implementation!==x.implementation?(v=ei(x,y.mode,N),v.return=y,v):(v=a(v,x.children||[]),v.return=y,v)}function m(y,v,x,N,C){return v===null||v.tag!==7?(v=Zn(x,y.mode,N,C),v.return=y,v):(v=a(v,x),v.return=y,v)}function p(y,v,x){if(typeof v=="string"&&v!==""||typeof v=="number")return v=Zo(""+v,y.mode,x),v.return=y,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Ks:return x=Aa(v.type,v.key,v.props,null,y.mode,x),x.ref=ts(y,null,v),x.return=y,x;case mr:return v=ei(v,y.mode,x),v.return=y,v;case Nn:var N=v._init;return p(y,N(v._payload),x)}if(ds(v)||Vr(v))return v=Zn(v,y.mode,x,null),v.return=y,v;oa(y,v)}return null}function f(y,v,x,N){var C=v!==null?v.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return C!==null?null:l(y,v,""+x,N);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Ks:return x.key===C?c(y,v,x,N):null;case mr:return x.key===C?u(y,v,x,N):null;case Nn:return C=x._init,f(y,v,C(x._payload),N)}if(ds(x)||Vr(x))return C!==null?null:m(y,v,x,N,null);oa(y,x)}return null}function w(y,v,x,N,C){if(typeof N=="string"&&N!==""||typeof N=="number")return y=y.get(x)||null,l(v,y,""+N,C);if(typeof N=="object"&&N!==null){switch(N.$$typeof){case Ks:return y=y.get(N.key===null?x:N.key)||null,c(v,y,N,C);case mr:return y=y.get(N.key===null?x:N.key)||null,u(v,y,N,C);case Nn:var R=N._init;return w(y,v,x,R(N._payload),C)}if(ds(N)||Vr(N))return y=y.get(x)||null,m(v,y,N,C,null);oa(v,N)}return null}function g(y,v,x,N){for(var C=null,R=null,T=v,h=v=0,b=null;T!==null&&h<x.length;h++){T.index>h?(b=T,T=null):b=T.sibling;var k=f(y,T,x[h],N);if(k===null){T===null&&(T=b);break}e&&T&&k.alternate===null&&t(y,T),v=o(k,v,h),R===null?C=k:R.sibling=k,R=k,T=b}if(h===x.length)return r(y,T),Oe&&Qn(y,h),C;if(T===null){for(;h<x.length;h++)T=p(y,x[h],N),T!==null&&(v=o(T,v,h),R===null?C=T:R.sibling=T,R=T);return Oe&&Qn(y,h),C}for(T=s(y,T);h<x.length;h++)b=w(T,y,h,x[h],N),b!==null&&(e&&b.alternate!==null&&T.delete(b.key===null?h:b.key),v=o(b,v,h),R===null?C=b:R.sibling=b,R=b);return e&&T.forEach(function(_){return t(y,_)}),Oe&&Qn(y,h),C}function j(y,v,x,N){var C=Vr(x);if(typeof C!="function")throw Error(Z(150));if(x=C.call(x),x==null)throw Error(Z(151));for(var R=C=null,T=v,h=v=0,b=null,k=x.next();T!==null&&!k.done;h++,k=x.next()){T.index>h?(b=T,T=null):b=T.sibling;var _=f(y,T,k.value,N);if(_===null){T===null&&(T=b);break}e&&T&&_.alternate===null&&t(y,T),v=o(_,v,h),R===null?C=_:R.sibling=_,R=_,T=b}if(k.done)return r(y,T),Oe&&Qn(y,h),C;if(T===null){for(;!k.done;h++,k=x.next())k=p(y,k.value,N),k!==null&&(v=o(k,v,h),R===null?C=k:R.sibling=k,R=k);return Oe&&Qn(y,h),C}for(T=s(y,T);!k.done;h++,k=x.next())k=w(T,y,h,k.value,N),k!==null&&(e&&k.alternate!==null&&T.delete(k.key===null?h:k.key),v=o(k,v,h),R===null?C=k:R.sibling=k,R=k);return e&&T.forEach(function(A){return t(y,A)}),Oe&&Qn(y,h),C}function S(y,v,x,N){if(typeof x=="object"&&x!==null&&x.type===fr&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case Ks:e:{for(var C=x.key,R=v;R!==null;){if(R.key===C){if(C=x.type,C===fr){if(R.tag===7){r(y,R.sibling),v=a(R,x.props.children),v.return=y,y=v;break e}}else if(R.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Nn&&Xc(C)===R.type){r(y,R.sibling),v=a(R,x.props),v.ref=ts(y,R,x),v.return=y,y=v;break e}r(y,R);break}else t(y,R);R=R.sibling}x.type===fr?(v=Zn(x.props.children,y.mode,N,x.key),v.return=y,y=v):(N=Aa(x.type,x.key,x.props,null,y.mode,N),N.ref=ts(y,v,x),N.return=y,y=N)}return i(y);case mr:e:{for(R=x.key;v!==null;){if(v.key===R)if(v.tag===4&&v.stateNode.containerInfo===x.containerInfo&&v.stateNode.implementation===x.implementation){r(y,v.sibling),v=a(v,x.children||[]),v.return=y,y=v;break e}else{r(y,v);break}else t(y,v);v=v.sibling}v=ei(x,y.mode,N),v.return=y,y=v}return i(y);case Nn:return R=x._init,S(y,v,R(x._payload),N)}if(ds(x))return g(y,v,x,N);if(Vr(x))return j(y,v,x,N);oa(y,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,v!==null&&v.tag===6?(r(y,v.sibling),v=a(v,x),v.return=y,y=v):(r(y,v),v=Zo(x,y.mode,N),v.return=y,y=v),i(y)):r(y,v)}return S}var Lr=mm(!0),fm=mm(!1),Va=Bn(null),Xa=null,wr=null,Rl=null;function _l(){Rl=wr=Xa=null}function Al(e){var t=Va.current;ze(Va),e._currentValue=t}function Fi(e,t,r){for(;e!==null;){var s=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,s!==null&&(s.childLanes|=t)):s!==null&&(s.childLanes&t)!==t&&(s.childLanes|=t),e===r)break;e=e.return}}function Tr(e,t){Xa=e,Rl=wr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Nt=!0),e.firstContext=null)}function Ft(e){var t=e._currentValue;if(Rl!==e)if(e={context:e,memoizedValue:t,next:null},wr===null){if(Xa===null)throw Error(Z(308));wr=e,Xa.dependencies={lanes:0,firstContext:e}}else wr=wr.next=e;return t}var Hn=null;function Il(e){Hn===null?Hn=[e]:Hn.push(e)}function hm(e,t,r,s){var a=t.interleaved;return a===null?(r.next=r,Il(t)):(r.next=a.next,a.next=r),t.interleaved=r,fn(e,s)}function fn(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}var kn=!1;function Ll(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function pm(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function cn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Ln(e,t,r){var s=e.updateQueue;if(s===null)return null;if(s=s.shared,Ce&2){var a=s.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),s.pending=t,fn(e,r)}return a=s.interleaved,a===null?(t.next=t,Il(s)):(t.next=a.next,a.next=t),s.interleaved=t,fn(e,r)}function Ca(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var s=t.lanes;s&=e.pendingLanes,r|=s,t.lanes=r,yl(e,r)}}function Jc(e,t){var r=e.updateQueue,s=e.alternate;if(s!==null&&(s=s.updateQueue,r===s)){var a=null,o=null;if(r=r.firstBaseUpdate,r!==null){do{var i={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};o===null?a=o=i:o=o.next=i,r=r.next}while(r!==null);o===null?a=o=t:o=o.next=t}else a=o=t;r={baseState:s.baseState,firstBaseUpdate:a,lastBaseUpdate:o,shared:s.shared,effects:s.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function Ja(e,t,r,s){var a=e.updateQueue;kn=!1;var o=a.firstBaseUpdate,i=a.lastBaseUpdate,l=a.shared.pending;if(l!==null){a.shared.pending=null;var c=l,u=c.next;c.next=null,i===null?o=u:i.next=u,i=c;var m=e.alternate;m!==null&&(m=m.updateQueue,l=m.lastBaseUpdate,l!==i&&(l===null?m.firstBaseUpdate=u:l.next=u,m.lastBaseUpdate=c))}if(o!==null){var p=a.baseState;i=0,m=u=c=null,l=o;do{var f=l.lane,w=l.eventTime;if((s&f)===f){m!==null&&(m=m.next={eventTime:w,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var g=e,j=l;switch(f=t,w=r,j.tag){case 1:if(g=j.payload,typeof g=="function"){p=g.call(w,p,f);break e}p=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=j.payload,f=typeof g=="function"?g.call(w,p,f):g,f==null)break e;p=qe({},p,f);break e;case 2:kn=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,f=a.effects,f===null?a.effects=[l]:f.push(l))}else w={eventTime:w,lane:f,tag:l.tag,payload:l.payload,callback:l.callback,next:null},m===null?(u=m=w,c=p):m=m.next=w,i|=f;if(l=l.next,l===null){if(l=a.shared.pending,l===null)break;f=l,l=f.next,f.next=null,a.lastBaseUpdate=f,a.shared.pending=null}}while(1);if(m===null&&(c=p),a.baseState=c,a.firstBaseUpdate=u,a.lastBaseUpdate=m,t=a.shared.interleaved,t!==null){a=t;do i|=a.lane,a=a.next;while(a!==t)}else o===null&&(a.shared.lanes=0);sr|=i,e.lanes=i,e.memoizedState=p}}function Zc(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var s=e[t],a=s.callback;if(a!==null){if(s.callback=null,s=r,typeof a!="function")throw Error(Z(191,a));a.call(s)}}}var Qs={},nn=Bn(Qs),Ls=Bn(Qs),Ds=Bn(Qs);function Kn(e){if(e===Qs)throw Error(Z(174));return e}function Dl(e,t){switch(_e(Ds,t),_e(Ls,e),_e(nn,Qs),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:yi(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=yi(t,e)}ze(nn),_e(nn,t)}function Dr(){ze(nn),ze(Ls),ze(Ds)}function xm(e){Kn(Ds.current);var t=Kn(nn.current),r=yi(t,e.type);t!==r&&(_e(Ls,e),_e(nn,r))}function zl(e){Ls.current===e&&(ze(nn),ze(Ls))}var Be=Bn(0);function Za(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Go=[];function Ml(){for(var e=0;e<Go.length;e++)Go[e]._workInProgressVersionPrimary=null;Go.length=0}var Ea=xn.ReactCurrentDispatcher,Ho=xn.ReactCurrentBatchConfig,rr=0,Ue=null,Ze=null,st=null,eo=!1,vs=!1,zs=0,zh=0;function ut(){throw Error(Z(321))}function Ol(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!Kt(e[r],t[r]))return!1;return!0}function Fl(e,t,r,s,a,o){if(rr=o,Ue=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ea.current=e===null||e.memoizedState===null?$h:Bh,e=r(s,a),vs){o=0;do{if(vs=!1,zs=0,25<=o)throw Error(Z(301));o+=1,st=Ze=null,t.updateQueue=null,Ea.current=Uh,e=r(s,a)}while(vs)}if(Ea.current=to,t=Ze!==null&&Ze.next!==null,rr=0,st=Ze=Ue=null,eo=!1,t)throw Error(Z(300));return e}function $l(){var e=zs!==0;return zs=0,e}function Jt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return st===null?Ue.memoizedState=st=e:st=st.next=e,st}function $t(){if(Ze===null){var e=Ue.alternate;e=e!==null?e.memoizedState:null}else e=Ze.next;var t=st===null?Ue.memoizedState:st.next;if(t!==null)st=t,Ze=e;else{if(e===null)throw Error(Z(310));Ze=e,e={memoizedState:Ze.memoizedState,baseState:Ze.baseState,baseQueue:Ze.baseQueue,queue:Ze.queue,next:null},st===null?Ue.memoizedState=st=e:st=st.next=e}return st}function Ms(e,t){return typeof t=="function"?t(e):t}function Ko(e){var t=$t(),r=t.queue;if(r===null)throw Error(Z(311));r.lastRenderedReducer=e;var s=Ze,a=s.baseQueue,o=r.pending;if(o!==null){if(a!==null){var i=a.next;a.next=o.next,o.next=i}s.baseQueue=a=o,r.pending=null}if(a!==null){o=a.next,s=s.baseState;var l=i=null,c=null,u=o;do{var m=u.lane;if((rr&m)===m)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),s=u.hasEagerState?u.eagerState:e(s,u.action);else{var p={lane:m,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(l=c=p,i=s):c=c.next=p,Ue.lanes|=m,sr|=m}u=u.next}while(u!==null&&u!==o);c===null?i=s:c.next=l,Kt(s,t.memoizedState)||(Nt=!0),t.memoizedState=s,t.baseState=i,t.baseQueue=c,r.lastRenderedState=s}if(e=r.interleaved,e!==null){a=e;do o=a.lane,Ue.lanes|=o,sr|=o,a=a.next;while(a!==e)}else a===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function Vo(e){var t=$t(),r=t.queue;if(r===null)throw Error(Z(311));r.lastRenderedReducer=e;var s=r.dispatch,a=r.pending,o=t.memoizedState;if(a!==null){r.pending=null;var i=a=a.next;do o=e(o,i.action),i=i.next;while(i!==a);Kt(o,t.memoizedState)||(Nt=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),r.lastRenderedState=o}return[o,s]}function gm(){}function vm(e,t){var r=Ue,s=$t(),a=t(),o=!Kt(s.memoizedState,a);if(o&&(s.memoizedState=a,Nt=!0),s=s.queue,Bl(wm.bind(null,r,s,e),[e]),s.getSnapshot!==t||o||st!==null&&st.memoizedState.tag&1){if(r.flags|=2048,Os(9,bm.bind(null,r,s,a,t),void 0,null),at===null)throw Error(Z(349));rr&30||ym(r,t,a)}return a}function ym(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=Ue.updateQueue,t===null?(t={lastEffect:null,stores:null},Ue.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function bm(e,t,r,s){t.value=r,t.getSnapshot=s,jm(t)&&Nm(e)}function wm(e,t,r){return r(function(){jm(t)&&Nm(e)})}function jm(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!Kt(e,r)}catch{return!0}}function Nm(e){var t=fn(e,1);t!==null&&Ht(t,e,1,-1)}function ed(e){var t=Jt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ms,lastRenderedState:e},t.queue=e,e=e.dispatch=Fh.bind(null,Ue,e),[t.memoizedState,e]}function Os(e,t,r,s){return e={tag:e,create:t,destroy:r,deps:s,next:null},t=Ue.updateQueue,t===null?(t={lastEffect:null,stores:null},Ue.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(s=r.next,r.next=e,e.next=s,t.lastEffect=e)),e}function km(){return $t().memoizedState}function Ta(e,t,r,s){var a=Jt();Ue.flags|=e,a.memoizedState=Os(1|t,r,void 0,s===void 0?null:s)}function go(e,t,r,s){var a=$t();s=s===void 0?null:s;var o=void 0;if(Ze!==null){var i=Ze.memoizedState;if(o=i.destroy,s!==null&&Ol(s,i.deps)){a.memoizedState=Os(t,r,o,s);return}}Ue.flags|=e,a.memoizedState=Os(1|t,r,o,s)}function td(e,t){return Ta(8390656,8,e,t)}function Bl(e,t){return go(2048,8,e,t)}function Sm(e,t){return go(4,2,e,t)}function Cm(e,t){return go(4,4,e,t)}function Em(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Tm(e,t,r){return r=r!=null?r.concat([e]):null,go(4,4,Em.bind(null,t,e),r)}function Ul(){}function Pm(e,t){var r=$t();t=t===void 0?null:t;var s=r.memoizedState;return s!==null&&t!==null&&Ol(t,s[1])?s[0]:(r.memoizedState=[e,t],e)}function Rm(e,t){var r=$t();t=t===void 0?null:t;var s=r.memoizedState;return s!==null&&t!==null&&Ol(t,s[1])?s[0]:(e=e(),r.memoizedState=[e,t],e)}function _m(e,t,r){return rr&21?(Kt(r,t)||(r=zu(),Ue.lanes|=r,sr|=r,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Nt=!0),e.memoizedState=r)}function Mh(e,t){var r=Pe;Pe=r!==0&&4>r?r:4,e(!0);var s=Ho.transition;Ho.transition={};try{e(!1),t()}finally{Pe=r,Ho.transition=s}}function Am(){return $t().memoizedState}function Oh(e,t,r){var s=zn(e);if(r={lane:s,action:r,hasEagerState:!1,eagerState:null,next:null},Im(e))Lm(t,r);else if(r=hm(e,t,r,s),r!==null){var a=yt();Ht(r,e,s,a),Dm(r,t,s)}}function Fh(e,t,r){var s=zn(e),a={lane:s,action:r,hasEagerState:!1,eagerState:null,next:null};if(Im(e))Lm(t,a);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var i=t.lastRenderedState,l=o(i,r);if(a.hasEagerState=!0,a.eagerState=l,Kt(l,i)){var c=t.interleaved;c===null?(a.next=a,Il(t)):(a.next=c.next,c.next=a),t.interleaved=a;return}}catch{}finally{}r=hm(e,t,a,s),r!==null&&(a=yt(),Ht(r,e,s,a),Dm(r,t,s))}}function Im(e){var t=e.alternate;return e===Ue||t!==null&&t===Ue}function Lm(e,t){vs=eo=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function Dm(e,t,r){if(r&4194240){var s=t.lanes;s&=e.pendingLanes,r|=s,t.lanes=r,yl(e,r)}}var to={readContext:Ft,useCallback:ut,useContext:ut,useEffect:ut,useImperativeHandle:ut,useInsertionEffect:ut,useLayoutEffect:ut,useMemo:ut,useReducer:ut,useRef:ut,useState:ut,useDebugValue:ut,useDeferredValue:ut,useTransition:ut,useMutableSource:ut,useSyncExternalStore:ut,useId:ut,unstable_isNewReconciler:!1},$h={readContext:Ft,useCallback:function(e,t){return Jt().memoizedState=[e,t===void 0?null:t],e},useContext:Ft,useEffect:td,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,Ta(4194308,4,Em.bind(null,t,e),r)},useLayoutEffect:function(e,t){return Ta(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ta(4,2,e,t)},useMemo:function(e,t){var r=Jt();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var s=Jt();return t=r!==void 0?r(t):t,s.memoizedState=s.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},s.queue=e,e=e.dispatch=Oh.bind(null,Ue,e),[s.memoizedState,e]},useRef:function(e){var t=Jt();return e={current:e},t.memoizedState=e},useState:ed,useDebugValue:Ul,useDeferredValue:function(e){return Jt().memoizedState=e},useTransition:function(){var e=ed(!1),t=e[0];return e=Mh.bind(null,e[1]),Jt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var s=Ue,a=Jt();if(Oe){if(r===void 0)throw Error(Z(407));r=r()}else{if(r=t(),at===null)throw Error(Z(349));rr&30||ym(s,t,r)}a.memoizedState=r;var o={value:r,getSnapshot:t};return a.queue=o,td(wm.bind(null,s,o,e),[e]),s.flags|=2048,Os(9,bm.bind(null,s,o,r,t),void 0,null),r},useId:function(){var e=Jt(),t=at.identifierPrefix;if(Oe){var r=ln,s=on;r=(s&~(1<<32-Gt(s)-1)).toString(32)+r,t=":"+t+"R"+r,r=zs++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=zh++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Bh={readContext:Ft,useCallback:Pm,useContext:Ft,useEffect:Bl,useImperativeHandle:Tm,useInsertionEffect:Sm,useLayoutEffect:Cm,useMemo:Rm,useReducer:Ko,useRef:km,useState:function(){return Ko(Ms)},useDebugValue:Ul,useDeferredValue:function(e){var t=$t();return _m(t,Ze.memoizedState,e)},useTransition:function(){var e=Ko(Ms)[0],t=$t().memoizedState;return[e,t]},useMutableSource:gm,useSyncExternalStore:vm,useId:Am,unstable_isNewReconciler:!1},Uh={readContext:Ft,useCallback:Pm,useContext:Ft,useEffect:Bl,useImperativeHandle:Tm,useInsertionEffect:Sm,useLayoutEffect:Cm,useMemo:Rm,useReducer:Vo,useRef:km,useState:function(){return Vo(Ms)},useDebugValue:Ul,useDeferredValue:function(e){var t=$t();return Ze===null?t.memoizedState=e:_m(t,Ze.memoizedState,e)},useTransition:function(){var e=Vo(Ms)[0],t=$t().memoizedState;return[e,t]},useMutableSource:gm,useSyncExternalStore:vm,useId:Am,unstable_isNewReconciler:!1};function Yt(e,t){if(e&&e.defaultProps){t=qe({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}function $i(e,t,r,s){t=e.memoizedState,r=r(s,t),r=r==null?t:qe({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var vo={isMounted:function(e){return(e=e._reactInternals)?lr(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var s=yt(),a=zn(e),o=cn(s,a);o.payload=t,r!=null&&(o.callback=r),t=Ln(e,o,a),t!==null&&(Ht(t,e,a,s),Ca(t,e,a))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var s=yt(),a=zn(e),o=cn(s,a);o.tag=1,o.payload=t,r!=null&&(o.callback=r),t=Ln(e,o,a),t!==null&&(Ht(t,e,a,s),Ca(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=yt(),s=zn(e),a=cn(r,s);a.tag=2,t!=null&&(a.callback=t),t=Ln(e,a,s),t!==null&&(Ht(t,e,s,r),Ca(t,e,s))}};function nd(e,t,r,s,a,o,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(s,o,i):t.prototype&&t.prototype.isPureReactComponent?!Rs(r,s)||!Rs(a,o):!0}function zm(e,t,r){var s=!1,a=Fn,o=t.contextType;return typeof o=="object"&&o!==null?o=Ft(o):(a=St(t)?tr:pt.current,s=t.contextTypes,o=(s=s!=null)?Ar(e,a):Fn),t=new t(r,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=vo,e.stateNode=t,t._reactInternals=e,s&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=o),t}function rd(e,t,r,s){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,s),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,s),t.state!==e&&vo.enqueueReplaceState(t,t.state,null)}function Bi(e,t,r,s){var a=e.stateNode;a.props=r,a.state=e.memoizedState,a.refs={},Ll(e);var o=t.contextType;typeof o=="object"&&o!==null?a.context=Ft(o):(o=St(t)?tr:pt.current,a.context=Ar(e,o)),a.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&($i(e,t,o,r),a.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(t=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),t!==a.state&&vo.enqueueReplaceState(a,a.state,null),Ja(e,r,a,s),a.state=e.memoizedState),typeof a.componentDidMount=="function"&&(e.flags|=4194308)}function zr(e,t){try{var r="",s=t;do r+=x0(s),s=s.return;while(s);var a=r}catch(o){a=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:a,digest:null}}function Xo(e,t,r){return{value:e,source:null,stack:r??null,digest:t??null}}function Ui(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var qh=typeof WeakMap=="function"?WeakMap:Map;function Mm(e,t,r){r=cn(-1,r),r.tag=3,r.payload={element:null};var s=t.value;return r.callback=function(){ro||(ro=!0,Ji=s),Ui(e,t)},r}function Om(e,t,r){r=cn(-1,r),r.tag=3;var s=e.type.getDerivedStateFromError;if(typeof s=="function"){var a=t.value;r.payload=function(){return s(a)},r.callback=function(){Ui(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(r.callback=function(){Ui(e,t),typeof s!="function"&&(Dn===null?Dn=new Set([this]):Dn.add(this));var i=t.stack;this.componentDidCatch(t.value,{componentStack:i!==null?i:""})}),r}function sd(e,t,r){var s=e.pingCache;if(s===null){s=e.pingCache=new qh;var a=new Set;s.set(t,a)}else a=s.get(t),a===void 0&&(a=new Set,s.set(t,a));a.has(r)||(a.add(r),e=rp.bind(null,e,t,r),t.then(e,e))}function ad(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function od(e,t,r,s,a){return e.mode&1?(e.flags|=65536,e.lanes=a,e):(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=cn(-1,1),t.tag=2,Ln(r,t,1))),r.lanes|=1),e)}var Yh=xn.ReactCurrentOwner,Nt=!1;function vt(e,t,r,s){t.child=e===null?fm(t,null,r,s):Lr(t,e.child,r,s)}function id(e,t,r,s,a){r=r.render;var o=t.ref;return Tr(t,a),s=Fl(e,t,r,s,o,a),r=$l(),e!==null&&!Nt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,hn(e,t,a)):(Oe&&r&&El(t),t.flags|=1,vt(e,t,s,a),t.child)}function ld(e,t,r,s,a){if(e===null){var o=r.type;return typeof o=="function"&&!Vl(o)&&o.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=o,Fm(e,t,o,s,a)):(e=Aa(r.type,null,s,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&a)){var i=o.memoizedProps;if(r=r.compare,r=r!==null?r:Rs,r(i,s)&&e.ref===t.ref)return hn(e,t,a)}return t.flags|=1,e=Mn(o,s),e.ref=t.ref,e.return=t,t.child=e}function Fm(e,t,r,s,a){if(e!==null){var o=e.memoizedProps;if(Rs(o,s)&&e.ref===t.ref)if(Nt=!1,t.pendingProps=s=o,(e.lanes&a)!==0)e.flags&131072&&(Nt=!0);else return t.lanes=e.lanes,hn(e,t,a)}return qi(e,t,r,s,a)}function $m(e,t,r){var s=t.pendingProps,a=s.children,o=e!==null?e.memoizedState:null;if(s.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},_e(Nr,Tt),Tt|=r;else{if(!(r&1073741824))return e=o!==null?o.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,_e(Nr,Tt),Tt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},s=o!==null?o.baseLanes:r,_e(Nr,Tt),Tt|=s}else o!==null?(s=o.baseLanes|r,t.memoizedState=null):s=r,_e(Nr,Tt),Tt|=s;return vt(e,t,a,r),t.child}function Bm(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function qi(e,t,r,s,a){var o=St(r)?tr:pt.current;return o=Ar(t,o),Tr(t,a),r=Fl(e,t,r,s,o,a),s=$l(),e!==null&&!Nt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,hn(e,t,a)):(Oe&&s&&El(t),t.flags|=1,vt(e,t,r,a),t.child)}function cd(e,t,r,s,a){if(St(r)){var o=!0;Ga(t)}else o=!1;if(Tr(t,a),t.stateNode===null)Pa(e,t),zm(t,r,s),Bi(t,r,s,a),s=!0;else if(e===null){var i=t.stateNode,l=t.memoizedProps;i.props=l;var c=i.context,u=r.contextType;typeof u=="object"&&u!==null?u=Ft(u):(u=St(r)?tr:pt.current,u=Ar(t,u));var m=r.getDerivedStateFromProps,p=typeof m=="function"||typeof i.getSnapshotBeforeUpdate=="function";p||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(l!==s||c!==u)&&rd(t,i,s,u),kn=!1;var f=t.memoizedState;i.state=f,Ja(t,s,i,a),c=t.memoizedState,l!==s||f!==c||kt.current||kn?(typeof m=="function"&&($i(t,r,m,s),c=t.memoizedState),(l=kn||nd(t,r,l,s,f,c,u))?(p||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=s,t.memoizedState=c),i.props=s,i.state=c,i.context=u,s=l):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),s=!1)}else{i=t.stateNode,pm(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:Yt(t.type,l),i.props=u,p=t.pendingProps,f=i.context,c=r.contextType,typeof c=="object"&&c!==null?c=Ft(c):(c=St(r)?tr:pt.current,c=Ar(t,c));var w=r.getDerivedStateFromProps;(m=typeof w=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(l!==p||f!==c)&&rd(t,i,s,c),kn=!1,f=t.memoizedState,i.state=f,Ja(t,s,i,a);var g=t.memoizedState;l!==p||f!==g||kt.current||kn?(typeof w=="function"&&($i(t,r,w,s),g=t.memoizedState),(u=kn||nd(t,r,u,s,f,g,c)||!1)?(m||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(s,g,c),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(s,g,c)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=s,t.memoizedState=g),i.props=s,i.state=g,i.context=c,s=u):(typeof i.componentDidUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),s=!1)}return Yi(e,t,r,s,o,a)}function Yi(e,t,r,s,a,o){Bm(e,t);var i=(t.flags&128)!==0;if(!s&&!i)return a&&Hc(t,r,!1),hn(e,t,o);s=t.stateNode,Yh.current=t;var l=i&&typeof r.getDerivedStateFromError!="function"?null:s.render();return t.flags|=1,e!==null&&i?(t.child=Lr(t,e.child,null,o),t.child=Lr(t,null,l,o)):vt(e,t,l,o),t.memoizedState=s.state,a&&Hc(t,r,!0),t.child}function Um(e){var t=e.stateNode;t.pendingContext?Gc(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Gc(e,t.context,!1),Dl(e,t.containerInfo)}function dd(e,t,r,s,a){return Ir(),Pl(a),t.flags|=256,vt(e,t,r,s),t.child}var Qi={dehydrated:null,treeContext:null,retryLane:0};function Wi(e){return{baseLanes:e,cachePool:null,transitions:null}}function qm(e,t,r){var s=t.pendingProps,a=Be.current,o=!1,i=(t.flags&128)!==0,l;if((l=i)||(l=e!==null&&e.memoizedState===null?!1:(a&2)!==0),l?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(a|=1),_e(Be,a&1),e===null)return Oi(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(i=s.children,e=s.fallback,o?(s=t.mode,o=t.child,i={mode:"hidden",children:i},!(s&1)&&o!==null?(o.childLanes=0,o.pendingProps=i):o=wo(i,s,0,null),e=Zn(e,s,r,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Wi(r),t.memoizedState=Qi,e):ql(t,i));if(a=e.memoizedState,a!==null&&(l=a.dehydrated,l!==null))return Qh(e,t,i,s,l,a,r);if(o){o=s.fallback,i=t.mode,a=e.child,l=a.sibling;var c={mode:"hidden",children:s.children};return!(i&1)&&t.child!==a?(s=t.child,s.childLanes=0,s.pendingProps=c,t.deletions=null):(s=Mn(a,c),s.subtreeFlags=a.subtreeFlags&14680064),l!==null?o=Mn(l,o):(o=Zn(o,i,r,null),o.flags|=2),o.return=t,s.return=t,s.sibling=o,t.child=s,s=o,o=t.child,i=e.child.memoizedState,i=i===null?Wi(r):{baseLanes:i.baseLanes|r,cachePool:null,transitions:i.transitions},o.memoizedState=i,o.childLanes=e.childLanes&~r,t.memoizedState=Qi,s}return o=e.child,e=o.sibling,s=Mn(o,{mode:"visible",children:s.children}),!(t.mode&1)&&(s.lanes=r),s.return=t,s.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=s,t.memoizedState=null,s}function ql(e,t){return t=wo({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ia(e,t,r,s){return s!==null&&Pl(s),Lr(t,e.child,null,r),e=ql(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Qh(e,t,r,s,a,o,i){if(r)return t.flags&256?(t.flags&=-257,s=Xo(Error(Z(422))),ia(e,t,i,s)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=s.fallback,a=t.mode,s=wo({mode:"visible",children:s.children},a,0,null),o=Zn(o,a,i,null),o.flags|=2,s.return=t,o.return=t,s.sibling=o,t.child=s,t.mode&1&&Lr(t,e.child,null,i),t.child.memoizedState=Wi(i),t.memoizedState=Qi,o);if(!(t.mode&1))return ia(e,t,i,null);if(a.data==="$!"){if(s=a.nextSibling&&a.nextSibling.dataset,s)var l=s.dgst;return s=l,o=Error(Z(419)),s=Xo(o,s,void 0),ia(e,t,i,s)}if(l=(i&e.childLanes)!==0,Nt||l){if(s=at,s!==null){switch(i&-i){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=a&(s.suspendedLanes|i)?0:a,a!==0&&a!==o.retryLane&&(o.retryLane=a,fn(e,a),Ht(s,e,a,-1))}return Kl(),s=Xo(Error(Z(421))),ia(e,t,i,s)}return a.data==="$?"?(t.flags|=128,t.child=e.child,t=sp.bind(null,e),a._reactRetry=t,null):(e=o.treeContext,Pt=In(a.nextSibling),Rt=t,Oe=!0,Wt=null,e!==null&&(Dt[zt++]=on,Dt[zt++]=ln,Dt[zt++]=nr,on=e.id,ln=e.overflow,nr=t),t=ql(t,s.children),t.flags|=4096,t)}function ud(e,t,r){e.lanes|=t;var s=e.alternate;s!==null&&(s.lanes|=t),Fi(e.return,t,r)}function Jo(e,t,r,s,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:s,tail:r,tailMode:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=s,o.tail=r,o.tailMode=a)}function Ym(e,t,r){var s=t.pendingProps,a=s.revealOrder,o=s.tail;if(vt(e,t,s.children,r),s=Be.current,s&2)s=s&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ud(e,r,t);else if(e.tag===19)ud(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}s&=1}if(_e(Be,s),!(t.mode&1))t.memoizedState=null;else switch(a){case"forwards":for(r=t.child,a=null;r!==null;)e=r.alternate,e!==null&&Za(e)===null&&(a=r),r=r.sibling;r=a,r===null?(a=t.child,t.child=null):(a=r.sibling,r.sibling=null),Jo(t,!1,a,r,o);break;case"backwards":for(r=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&Za(e)===null){t.child=a;break}e=a.sibling,a.sibling=r,r=a,a=e}Jo(t,!0,r,null,o);break;case"together":Jo(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Pa(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function hn(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),sr|=t.lanes,!(r&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(Z(153));if(t.child!==null){for(e=t.child,r=Mn(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=Mn(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function Wh(e,t,r){switch(t.tag){case 3:Um(t),Ir();break;case 5:xm(t);break;case 1:St(t.type)&&Ga(t);break;case 4:Dl(t,t.stateNode.containerInfo);break;case 10:var s=t.type._context,a=t.memoizedProps.value;_e(Va,s._currentValue),s._currentValue=a;break;case 13:if(s=t.memoizedState,s!==null)return s.dehydrated!==null?(_e(Be,Be.current&1),t.flags|=128,null):r&t.child.childLanes?qm(e,t,r):(_e(Be,Be.current&1),e=hn(e,t,r),e!==null?e.sibling:null);_e(Be,Be.current&1);break;case 19:if(s=(r&t.childLanes)!==0,e.flags&128){if(s)return Ym(e,t,r);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),_e(Be,Be.current),s)break;return null;case 22:case 23:return t.lanes=0,$m(e,t,r)}return hn(e,t,r)}var Qm,Gi,Wm,Gm;Qm=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}};Gi=function(){};Wm=function(e,t,r,s){var a=e.memoizedProps;if(a!==s){e=t.stateNode,Kn(nn.current);var o=null;switch(r){case"input":a=pi(e,a),s=pi(e,s),o=[];break;case"select":a=qe({},a,{value:void 0}),s=qe({},s,{value:void 0}),o=[];break;case"textarea":a=vi(e,a),s=vi(e,s),o=[];break;default:typeof a.onClick!="function"&&typeof s.onClick=="function"&&(e.onclick=Qa)}bi(r,s);var i;r=null;for(u in a)if(!s.hasOwnProperty(u)&&a.hasOwnProperty(u)&&a[u]!=null)if(u==="style"){var l=a[u];for(i in l)l.hasOwnProperty(i)&&(r||(r={}),r[i]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Ns.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in s){var c=s[u];if(l=a!=null?a[u]:void 0,s.hasOwnProperty(u)&&c!==l&&(c!=null||l!=null))if(u==="style")if(l){for(i in l)!l.hasOwnProperty(i)||c&&c.hasOwnProperty(i)||(r||(r={}),r[i]="");for(i in c)c.hasOwnProperty(i)&&l[i]!==c[i]&&(r||(r={}),r[i]=c[i])}else r||(o||(o=[]),o.push(u,r)),r=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,l=l?l.__html:void 0,c!=null&&l!==c&&(o=o||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(o=o||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Ns.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&Le("scroll",e),o||l===c||(o=[])):(o=o||[]).push(u,c))}r&&(o=o||[]).push("style",r);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};Gm=function(e,t,r,s){r!==s&&(t.flags|=4)};function ns(e,t){if(!Oe)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var s=null;r!==null;)r.alternate!==null&&(s=r),r=r.sibling;s===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:s.sibling=null}}function mt(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,s=0;if(t)for(var a=e.child;a!==null;)r|=a.lanes|a.childLanes,s|=a.subtreeFlags&14680064,s|=a.flags&14680064,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)r|=a.lanes|a.childLanes,s|=a.subtreeFlags,s|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=s,e.childLanes=r,t}function Gh(e,t,r){var s=t.pendingProps;switch(Tl(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return mt(t),null;case 1:return St(t.type)&&Wa(),mt(t),null;case 3:return s=t.stateNode,Dr(),ze(kt),ze(pt),Ml(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(e===null||e.child===null)&&(aa(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Wt!==null&&(tl(Wt),Wt=null))),Gi(e,t),mt(t),null;case 5:zl(t);var a=Kn(Ds.current);if(r=t.type,e!==null&&t.stateNode!=null)Wm(e,t,r,s,a),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!s){if(t.stateNode===null)throw Error(Z(166));return mt(t),null}if(e=Kn(nn.current),aa(t)){s=t.stateNode,r=t.type;var o=t.memoizedProps;switch(s[en]=t,s[Is]=o,e=(t.mode&1)!==0,r){case"dialog":Le("cancel",s),Le("close",s);break;case"iframe":case"object":case"embed":Le("load",s);break;case"video":case"audio":for(a=0;a<ms.length;a++)Le(ms[a],s);break;case"source":Le("error",s);break;case"img":case"image":case"link":Le("error",s),Le("load",s);break;case"details":Le("toggle",s);break;case"input":bc(s,o),Le("invalid",s);break;case"select":s._wrapperState={wasMultiple:!!o.multiple},Le("invalid",s);break;case"textarea":jc(s,o),Le("invalid",s)}bi(r,o),a=null;for(var i in o)if(o.hasOwnProperty(i)){var l=o[i];i==="children"?typeof l=="string"?s.textContent!==l&&(o.suppressHydrationWarning!==!0&&sa(s.textContent,l,e),a=["children",l]):typeof l=="number"&&s.textContent!==""+l&&(o.suppressHydrationWarning!==!0&&sa(s.textContent,l,e),a=["children",""+l]):Ns.hasOwnProperty(i)&&l!=null&&i==="onScroll"&&Le("scroll",s)}switch(r){case"input":Vs(s),wc(s,o,!0);break;case"textarea":Vs(s),Nc(s);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(s.onclick=Qa)}s=a,t.updateQueue=s,s!==null&&(t.flags|=4)}else{i=a.nodeType===9?a:a.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=wu(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof s.is=="string"?e=i.createElement(r,{is:s.is}):(e=i.createElement(r),r==="select"&&(i=e,s.multiple?i.multiple=!0:s.size&&(i.size=s.size))):e=i.createElementNS(e,r),e[en]=t,e[Is]=s,Qm(e,t,!1,!1),t.stateNode=e;e:{switch(i=wi(r,s),r){case"dialog":Le("cancel",e),Le("close",e),a=s;break;case"iframe":case"object":case"embed":Le("load",e),a=s;break;case"video":case"audio":for(a=0;a<ms.length;a++)Le(ms[a],e);a=s;break;case"source":Le("error",e),a=s;break;case"img":case"image":case"link":Le("error",e),Le("load",e),a=s;break;case"details":Le("toggle",e),a=s;break;case"input":bc(e,s),a=pi(e,s),Le("invalid",e);break;case"option":a=s;break;case"select":e._wrapperState={wasMultiple:!!s.multiple},a=qe({},s,{value:void 0}),Le("invalid",e);break;case"textarea":jc(e,s),a=vi(e,s),Le("invalid",e);break;default:a=s}bi(r,a),l=a;for(o in l)if(l.hasOwnProperty(o)){var c=l[o];o==="style"?ku(e,c):o==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&ju(e,c)):o==="children"?typeof c=="string"?(r!=="textarea"||c!=="")&&ks(e,c):typeof c=="number"&&ks(e,""+c):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Ns.hasOwnProperty(o)?c!=null&&o==="onScroll"&&Le("scroll",e):c!=null&&fl(e,o,c,i))}switch(r){case"input":Vs(e),wc(e,s,!1);break;case"textarea":Vs(e),Nc(e);break;case"option":s.value!=null&&e.setAttribute("value",""+On(s.value));break;case"select":e.multiple=!!s.multiple,o=s.value,o!=null?kr(e,!!s.multiple,o,!1):s.defaultValue!=null&&kr(e,!!s.multiple,s.defaultValue,!0);break;default:typeof a.onClick=="function"&&(e.onclick=Qa)}switch(r){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break e;case"img":s=!0;break e;default:s=!1}}s&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return mt(t),null;case 6:if(e&&t.stateNode!=null)Gm(e,t,e.memoizedProps,s);else{if(typeof s!="string"&&t.stateNode===null)throw Error(Z(166));if(r=Kn(Ds.current),Kn(nn.current),aa(t)){if(s=t.stateNode,r=t.memoizedProps,s[en]=t,(o=s.nodeValue!==r)&&(e=Rt,e!==null))switch(e.tag){case 3:sa(s.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&sa(s.nodeValue,r,(e.mode&1)!==0)}o&&(t.flags|=4)}else s=(r.nodeType===9?r:r.ownerDocument).createTextNode(s),s[en]=t,t.stateNode=s}return mt(t),null;case 13:if(ze(Be),s=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Oe&&Pt!==null&&t.mode&1&&!(t.flags&128))um(),Ir(),t.flags|=98560,o=!1;else if(o=aa(t),s!==null&&s.dehydrated!==null){if(e===null){if(!o)throw Error(Z(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(Z(317));o[en]=t}else Ir(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;mt(t),o=!1}else Wt!==null&&(tl(Wt),Wt=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=r,t):(s=s!==null,s!==(e!==null&&e.memoizedState!==null)&&s&&(t.child.flags|=8192,t.mode&1&&(e===null||Be.current&1?et===0&&(et=3):Kl())),t.updateQueue!==null&&(t.flags|=4),mt(t),null);case 4:return Dr(),Gi(e,t),e===null&&_s(t.stateNode.containerInfo),mt(t),null;case 10:return Al(t.type._context),mt(t),null;case 17:return St(t.type)&&Wa(),mt(t),null;case 19:if(ze(Be),o=t.memoizedState,o===null)return mt(t),null;if(s=(t.flags&128)!==0,i=o.rendering,i===null)if(s)ns(o,!1);else{if(et!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(i=Za(e),i!==null){for(t.flags|=128,ns(o,!1),s=i.updateQueue,s!==null&&(t.updateQueue=s,t.flags|=4),t.subtreeFlags=0,s=r,r=t.child;r!==null;)o=r,e=s,o.flags&=14680066,i=o.alternate,i===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=i.childLanes,o.lanes=i.lanes,o.child=i.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=i.memoizedProps,o.memoizedState=i.memoizedState,o.updateQueue=i.updateQueue,o.type=i.type,e=i.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return _e(Be,Be.current&1|2),t.child}e=e.sibling}o.tail!==null&&Ge()>Mr&&(t.flags|=128,s=!0,ns(o,!1),t.lanes=4194304)}else{if(!s)if(e=Za(i),e!==null){if(t.flags|=128,s=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),ns(o,!0),o.tail===null&&o.tailMode==="hidden"&&!i.alternate&&!Oe)return mt(t),null}else 2*Ge()-o.renderingStartTime>Mr&&r!==1073741824&&(t.flags|=128,s=!0,ns(o,!1),t.lanes=4194304);o.isBackwards?(i.sibling=t.child,t.child=i):(r=o.last,r!==null?r.sibling=i:t.child=i,o.last=i)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Ge(),t.sibling=null,r=Be.current,_e(Be,s?r&1|2:r&1),t):(mt(t),null);case 22:case 23:return Hl(),s=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==s&&(t.flags|=8192),s&&t.mode&1?Tt&1073741824&&(mt(t),t.subtreeFlags&6&&(t.flags|=8192)):mt(t),null;case 24:return null;case 25:return null}throw Error(Z(156,t.tag))}function Hh(e,t){switch(Tl(t),t.tag){case 1:return St(t.type)&&Wa(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Dr(),ze(kt),ze(pt),Ml(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return zl(t),null;case 13:if(ze(Be),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(Z(340));Ir()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ze(Be),null;case 4:return Dr(),null;case 10:return Al(t.type._context),null;case 22:case 23:return Hl(),null;case 24:return null;default:return null}}var la=!1,ht=!1,Kh=typeof WeakSet=="function"?WeakSet:Set,ie=null;function jr(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(s){We(e,t,s)}else r.current=null}function Hi(e,t,r){try{r()}catch(s){We(e,t,s)}}var md=!1;function Vh(e,t){if(_i=Ua,e=Ju(),Cl(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var s=r.getSelection&&r.getSelection();if(s&&s.rangeCount!==0){r=s.anchorNode;var a=s.anchorOffset,o=s.focusNode;s=s.focusOffset;try{r.nodeType,o.nodeType}catch{r=null;break e}var i=0,l=-1,c=-1,u=0,m=0,p=e,f=null;t:for(;;){for(var w;p!==r||a!==0&&p.nodeType!==3||(l=i+a),p!==o||s!==0&&p.nodeType!==3||(c=i+s),p.nodeType===3&&(i+=p.nodeValue.length),(w=p.firstChild)!==null;)f=p,p=w;for(;;){if(p===e)break t;if(f===r&&++u===a&&(l=i),f===o&&++m===s&&(c=i),(w=p.nextSibling)!==null)break;p=f,f=p.parentNode}p=w}r=l===-1||c===-1?null:{start:l,end:c}}else r=null}r=r||{start:0,end:0}}else r=null;for(Ai={focusedElem:e,selectionRange:r},Ua=!1,ie=t;ie!==null;)if(t=ie,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,ie=e;else for(;ie!==null;){t=ie;try{var g=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var j=g.memoizedProps,S=g.memoizedState,y=t.stateNode,v=y.getSnapshotBeforeUpdate(t.elementType===t.type?j:Yt(t.type,j),S);y.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var x=t.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(Z(163))}}catch(N){We(t,t.return,N)}if(e=t.sibling,e!==null){e.return=t.return,ie=e;break}ie=t.return}return g=md,md=!1,g}function ys(e,t,r){var s=t.updateQueue;if(s=s!==null?s.lastEffect:null,s!==null){var a=s=s.next;do{if((a.tag&e)===e){var o=a.destroy;a.destroy=void 0,o!==void 0&&Hi(t,r,o)}a=a.next}while(a!==s)}}function yo(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var s=r.create;r.destroy=s()}r=r.next}while(r!==t)}}function Ki(e){var t=e.ref;if(t!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof t=="function"?t(e):t.current=e}}function Hm(e){var t=e.alternate;t!==null&&(e.alternate=null,Hm(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[en],delete t[Is],delete t[Di],delete t[Ah],delete t[Ih])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Km(e){return e.tag===5||e.tag===3||e.tag===4}function fd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Km(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Vi(e,t,r){var s=e.tag;if(s===5||s===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=Qa));else if(s!==4&&(e=e.child,e!==null))for(Vi(e,t,r),e=e.sibling;e!==null;)Vi(e,t,r),e=e.sibling}function Xi(e,t,r){var s=e.tag;if(s===5||s===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(s!==4&&(e=e.child,e!==null))for(Xi(e,t,r),e=e.sibling;e!==null;)Xi(e,t,r),e=e.sibling}var lt=null,Qt=!1;function vn(e,t,r){for(r=r.child;r!==null;)Vm(e,t,r),r=r.sibling}function Vm(e,t,r){if(tn&&typeof tn.onCommitFiberUnmount=="function")try{tn.onCommitFiberUnmount(uo,r)}catch{}switch(r.tag){case 5:ht||jr(r,t);case 6:var s=lt,a=Qt;lt=null,vn(e,t,r),lt=s,Qt=a,lt!==null&&(Qt?(e=lt,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):lt.removeChild(r.stateNode));break;case 18:lt!==null&&(Qt?(e=lt,r=r.stateNode,e.nodeType===8?Qo(e.parentNode,r):e.nodeType===1&&Qo(e,r),Ts(e)):Qo(lt,r.stateNode));break;case 4:s=lt,a=Qt,lt=r.stateNode.containerInfo,Qt=!0,vn(e,t,r),lt=s,Qt=a;break;case 0:case 11:case 14:case 15:if(!ht&&(s=r.updateQueue,s!==null&&(s=s.lastEffect,s!==null))){a=s=s.next;do{var o=a,i=o.destroy;o=o.tag,i!==void 0&&(o&2||o&4)&&Hi(r,t,i),a=a.next}while(a!==s)}vn(e,t,r);break;case 1:if(!ht&&(jr(r,t),s=r.stateNode,typeof s.componentWillUnmount=="function"))try{s.props=r.memoizedProps,s.state=r.memoizedState,s.componentWillUnmount()}catch(l){We(r,t,l)}vn(e,t,r);break;case 21:vn(e,t,r);break;case 22:r.mode&1?(ht=(s=ht)||r.memoizedState!==null,vn(e,t,r),ht=s):vn(e,t,r);break;default:vn(e,t,r)}}function hd(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new Kh),t.forEach(function(s){var a=ap.bind(null,e,s);r.has(s)||(r.add(s),s.then(a,a))})}}function qt(e,t){var r=t.deletions;if(r!==null)for(var s=0;s<r.length;s++){var a=r[s];try{var o=e,i=t,l=i;e:for(;l!==null;){switch(l.tag){case 5:lt=l.stateNode,Qt=!1;break e;case 3:lt=l.stateNode.containerInfo,Qt=!0;break e;case 4:lt=l.stateNode.containerInfo,Qt=!0;break e}l=l.return}if(lt===null)throw Error(Z(160));Vm(o,i,a),lt=null,Qt=!1;var c=a.alternate;c!==null&&(c.return=null),a.return=null}catch(u){We(a,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Xm(t,e),t=t.sibling}function Xm(e,t){var r=e.alternate,s=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(qt(t,e),Xt(e),s&4){try{ys(3,e,e.return),yo(3,e)}catch(j){We(e,e.return,j)}try{ys(5,e,e.return)}catch(j){We(e,e.return,j)}}break;case 1:qt(t,e),Xt(e),s&512&&r!==null&&jr(r,r.return);break;case 5:if(qt(t,e),Xt(e),s&512&&r!==null&&jr(r,r.return),e.flags&32){var a=e.stateNode;try{ks(a,"")}catch(j){We(e,e.return,j)}}if(s&4&&(a=e.stateNode,a!=null)){var o=e.memoizedProps,i=r!==null?r.memoizedProps:o,l=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{l==="input"&&o.type==="radio"&&o.name!=null&&yu(a,o),wi(l,i);var u=wi(l,o);for(i=0;i<c.length;i+=2){var m=c[i],p=c[i+1];m==="style"?ku(a,p):m==="dangerouslySetInnerHTML"?ju(a,p):m==="children"?ks(a,p):fl(a,m,p,u)}switch(l){case"input":xi(a,o);break;case"textarea":bu(a,o);break;case"select":var f=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!o.multiple;var w=o.value;w!=null?kr(a,!!o.multiple,w,!1):f!==!!o.multiple&&(o.defaultValue!=null?kr(a,!!o.multiple,o.defaultValue,!0):kr(a,!!o.multiple,o.multiple?[]:"",!1))}a[Is]=o}catch(j){We(e,e.return,j)}}break;case 6:if(qt(t,e),Xt(e),s&4){if(e.stateNode===null)throw Error(Z(162));a=e.stateNode,o=e.memoizedProps;try{a.nodeValue=o}catch(j){We(e,e.return,j)}}break;case 3:if(qt(t,e),Xt(e),s&4&&r!==null&&r.memoizedState.isDehydrated)try{Ts(t.containerInfo)}catch(j){We(e,e.return,j)}break;case 4:qt(t,e),Xt(e);break;case 13:qt(t,e),Xt(e),a=e.child,a.flags&8192&&(o=a.memoizedState!==null,a.stateNode.isHidden=o,!o||a.alternate!==null&&a.alternate.memoizedState!==null||(Wl=Ge())),s&4&&hd(e);break;case 22:if(m=r!==null&&r.memoizedState!==null,e.mode&1?(ht=(u=ht)||m,qt(t,e),ht=u):qt(t,e),Xt(e),s&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!m&&e.mode&1)for(ie=e,m=e.child;m!==null;){for(p=ie=m;ie!==null;){switch(f=ie,w=f.child,f.tag){case 0:case 11:case 14:case 15:ys(4,f,f.return);break;case 1:jr(f,f.return);var g=f.stateNode;if(typeof g.componentWillUnmount=="function"){s=f,r=f.return;try{t=s,g.props=t.memoizedProps,g.state=t.memoizedState,g.componentWillUnmount()}catch(j){We(s,r,j)}}break;case 5:jr(f,f.return);break;case 22:if(f.memoizedState!==null){xd(p);continue}}w!==null?(w.return=f,ie=w):xd(p)}m=m.sibling}e:for(m=null,p=e;;){if(p.tag===5){if(m===null){m=p;try{a=p.stateNode,u?(o=a.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(l=p.stateNode,c=p.memoizedProps.style,i=c!=null&&c.hasOwnProperty("display")?c.display:null,l.style.display=Nu("display",i))}catch(j){We(e,e.return,j)}}}else if(p.tag===6){if(m===null)try{p.stateNode.nodeValue=u?"":p.memoizedProps}catch(j){We(e,e.return,j)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;m===p&&(m=null),p=p.return}m===p&&(m=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:qt(t,e),Xt(e),s&4&&hd(e);break;case 21:break;default:qt(t,e),Xt(e)}}function Xt(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if(Km(r)){var s=r;break e}r=r.return}throw Error(Z(160))}switch(s.tag){case 5:var a=s.stateNode;s.flags&32&&(ks(a,""),s.flags&=-33);var o=fd(e);Xi(e,o,a);break;case 3:case 4:var i=s.stateNode.containerInfo,l=fd(e);Vi(e,l,i);break;default:throw Error(Z(161))}}catch(c){We(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Xh(e,t,r){ie=e,Jm(e)}function Jm(e,t,r){for(var s=(e.mode&1)!==0;ie!==null;){var a=ie,o=a.child;if(a.tag===22&&s){var i=a.memoizedState!==null||la;if(!i){var l=a.alternate,c=l!==null&&l.memoizedState!==null||ht;l=la;var u=ht;if(la=i,(ht=c)&&!u)for(ie=a;ie!==null;)i=ie,c=i.child,i.tag===22&&i.memoizedState!==null?gd(a):c!==null?(c.return=i,ie=c):gd(a);for(;o!==null;)ie=o,Jm(o),o=o.sibling;ie=a,la=l,ht=u}pd(e)}else a.subtreeFlags&8772&&o!==null?(o.return=a,ie=o):pd(e)}}function pd(e){for(;ie!==null;){var t=ie;if(t.flags&8772){var r=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ht||yo(5,t);break;case 1:var s=t.stateNode;if(t.flags&4&&!ht)if(r===null)s.componentDidMount();else{var a=t.elementType===t.type?r.memoizedProps:Yt(t.type,r.memoizedProps);s.componentDidUpdate(a,r.memoizedState,s.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Zc(t,o,s);break;case 3:var i=t.updateQueue;if(i!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}Zc(t,i,r)}break;case 5:var l=t.stateNode;if(r===null&&t.flags&4){r=l;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&r.focus();break;case"img":c.src&&(r.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var m=u.memoizedState;if(m!==null){var p=m.dehydrated;p!==null&&Ts(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(Z(163))}ht||t.flags&512&&Ki(t)}catch(f){We(t,t.return,f)}}if(t===e){ie=null;break}if(r=t.sibling,r!==null){r.return=t.return,ie=r;break}ie=t.return}}function xd(e){for(;ie!==null;){var t=ie;if(t===e){ie=null;break}var r=t.sibling;if(r!==null){r.return=t.return,ie=r;break}ie=t.return}}function gd(e){for(;ie!==null;){var t=ie;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{yo(4,t)}catch(c){We(t,r,c)}break;case 1:var s=t.stateNode;if(typeof s.componentDidMount=="function"){var a=t.return;try{s.componentDidMount()}catch(c){We(t,a,c)}}var o=t.return;try{Ki(t)}catch(c){We(t,o,c)}break;case 5:var i=t.return;try{Ki(t)}catch(c){We(t,i,c)}}}catch(c){We(t,t.return,c)}if(t===e){ie=null;break}var l=t.sibling;if(l!==null){l.return=t.return,ie=l;break}ie=t.return}}var Jh=Math.ceil,no=xn.ReactCurrentDispatcher,Yl=xn.ReactCurrentOwner,Ot=xn.ReactCurrentBatchConfig,Ce=0,at=null,Ve=null,ct=0,Tt=0,Nr=Bn(0),et=0,Fs=null,sr=0,bo=0,Ql=0,bs=null,jt=null,Wl=0,Mr=1/0,sn=null,ro=!1,Ji=null,Dn=null,ca=!1,Pn=null,so=0,ws=0,Zi=null,Ra=-1,_a=0;function yt(){return Ce&6?Ge():Ra!==-1?Ra:Ra=Ge()}function zn(e){return e.mode&1?Ce&2&&ct!==0?ct&-ct:Dh.transition!==null?(_a===0&&(_a=zu()),_a):(e=Pe,e!==0||(e=window.event,e=e===void 0?16:qu(e.type)),e):1}function Ht(e,t,r,s){if(50<ws)throw ws=0,Zi=null,Error(Z(185));Us(e,r,s),(!(Ce&2)||e!==at)&&(e===at&&(!(Ce&2)&&(bo|=r),et===4&&En(e,ct)),Ct(e,s),r===1&&Ce===0&&!(t.mode&1)&&(Mr=Ge()+500,xo&&Un()))}function Ct(e,t){var r=e.callbackNode;D0(e,t);var s=Ba(e,e===at?ct:0);if(s===0)r!==null&&Cc(r),e.callbackNode=null,e.callbackPriority=0;else if(t=s&-s,e.callbackPriority!==t){if(r!=null&&Cc(r),t===1)e.tag===0?Lh(vd.bind(null,e)):lm(vd.bind(null,e)),Rh(function(){!(Ce&6)&&Un()}),r=null;else{switch(Mu(s)){case 1:r=vl;break;case 4:r=Lu;break;case 16:r=$a;break;case 536870912:r=Du;break;default:r=$a}r=of(r,Zm.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function Zm(e,t){if(Ra=-1,_a=0,Ce&6)throw Error(Z(327));var r=e.callbackNode;if(Pr()&&e.callbackNode!==r)return null;var s=Ba(e,e===at?ct:0);if(s===0)return null;if(s&30||s&e.expiredLanes||t)t=ao(e,s);else{t=s;var a=Ce;Ce|=2;var o=tf();(at!==e||ct!==t)&&(sn=null,Mr=Ge()+500,Jn(e,t));do try{tp();break}catch(l){ef(e,l)}while(1);_l(),no.current=o,Ce=a,Ve!==null?t=0:(at=null,ct=0,t=et)}if(t!==0){if(t===2&&(a=Ci(e),a!==0&&(s=a,t=el(e,a))),t===1)throw r=Fs,Jn(e,0),En(e,s),Ct(e,Ge()),r;if(t===6)En(e,s);else{if(a=e.current.alternate,!(s&30)&&!Zh(a)&&(t=ao(e,s),t===2&&(o=Ci(e),o!==0&&(s=o,t=el(e,o))),t===1))throw r=Fs,Jn(e,0),En(e,s),Ct(e,Ge()),r;switch(e.finishedWork=a,e.finishedLanes=s,t){case 0:case 1:throw Error(Z(345));case 2:Wn(e,jt,sn);break;case 3:if(En(e,s),(s&130023424)===s&&(t=Wl+500-Ge(),10<t)){if(Ba(e,0)!==0)break;if(a=e.suspendedLanes,(a&s)!==s){yt(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=Li(Wn.bind(null,e,jt,sn),t);break}Wn(e,jt,sn);break;case 4:if(En(e,s),(s&4194240)===s)break;for(t=e.eventTimes,a=-1;0<s;){var i=31-Gt(s);o=1<<i,i=t[i],i>a&&(a=i),s&=~o}if(s=a,s=Ge()-s,s=(120>s?120:480>s?480:1080>s?1080:1920>s?1920:3e3>s?3e3:4320>s?4320:1960*Jh(s/1960))-s,10<s){e.timeoutHandle=Li(Wn.bind(null,e,jt,sn),s);break}Wn(e,jt,sn);break;case 5:Wn(e,jt,sn);break;default:throw Error(Z(329))}}}return Ct(e,Ge()),e.callbackNode===r?Zm.bind(null,e):null}function el(e,t){var r=bs;return e.current.memoizedState.isDehydrated&&(Jn(e,t).flags|=256),e=ao(e,t),e!==2&&(t=jt,jt=r,t!==null&&tl(t)),e}function tl(e){jt===null?jt=e:jt.push.apply(jt,e)}function Zh(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var s=0;s<r.length;s++){var a=r[s],o=a.getSnapshot;a=a.value;try{if(!Kt(o(),a))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function En(e,t){for(t&=~Ql,t&=~bo,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-Gt(t),s=1<<r;e[r]=-1,t&=~s}}function vd(e){if(Ce&6)throw Error(Z(327));Pr();var t=Ba(e,0);if(!(t&1))return Ct(e,Ge()),null;var r=ao(e,t);if(e.tag!==0&&r===2){var s=Ci(e);s!==0&&(t=s,r=el(e,s))}if(r===1)throw r=Fs,Jn(e,0),En(e,t),Ct(e,Ge()),r;if(r===6)throw Error(Z(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Wn(e,jt,sn),Ct(e,Ge()),null}function Gl(e,t){var r=Ce;Ce|=1;try{return e(t)}finally{Ce=r,Ce===0&&(Mr=Ge()+500,xo&&Un())}}function ar(e){Pn!==null&&Pn.tag===0&&!(Ce&6)&&Pr();var t=Ce;Ce|=1;var r=Ot.transition,s=Pe;try{if(Ot.transition=null,Pe=1,e)return e()}finally{Pe=s,Ot.transition=r,Ce=t,!(Ce&6)&&Un()}}function Hl(){Tt=Nr.current,ze(Nr)}function Jn(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,Ph(r)),Ve!==null)for(r=Ve.return;r!==null;){var s=r;switch(Tl(s),s.tag){case 1:s=s.type.childContextTypes,s!=null&&Wa();break;case 3:Dr(),ze(kt),ze(pt),Ml();break;case 5:zl(s);break;case 4:Dr();break;case 13:ze(Be);break;case 19:ze(Be);break;case 10:Al(s.type._context);break;case 22:case 23:Hl()}r=r.return}if(at=e,Ve=e=Mn(e.current,null),ct=Tt=t,et=0,Fs=null,Ql=bo=sr=0,jt=bs=null,Hn!==null){for(t=0;t<Hn.length;t++)if(r=Hn[t],s=r.interleaved,s!==null){r.interleaved=null;var a=s.next,o=r.pending;if(o!==null){var i=o.next;o.next=a,s.next=i}r.pending=s}Hn=null}return e}function ef(e,t){do{var r=Ve;try{if(_l(),Ea.current=to,eo){for(var s=Ue.memoizedState;s!==null;){var a=s.queue;a!==null&&(a.pending=null),s=s.next}eo=!1}if(rr=0,st=Ze=Ue=null,vs=!1,zs=0,Yl.current=null,r===null||r.return===null){et=1,Fs=t,Ve=null;break}e:{var o=e,i=r.return,l=r,c=t;if(t=ct,l.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,m=l,p=m.tag;if(!(m.mode&1)&&(p===0||p===11||p===15)){var f=m.alternate;f?(m.updateQueue=f.updateQueue,m.memoizedState=f.memoizedState,m.lanes=f.lanes):(m.updateQueue=null,m.memoizedState=null)}var w=ad(i);if(w!==null){w.flags&=-257,od(w,i,l,o,t),w.mode&1&&sd(o,u,t),t=w,c=u;var g=t.updateQueue;if(g===null){var j=new Set;j.add(c),t.updateQueue=j}else g.add(c);break e}else{if(!(t&1)){sd(o,u,t),Kl();break e}c=Error(Z(426))}}else if(Oe&&l.mode&1){var S=ad(i);if(S!==null){!(S.flags&65536)&&(S.flags|=256),od(S,i,l,o,t),Pl(zr(c,l));break e}}o=c=zr(c,l),et!==4&&(et=2),bs===null?bs=[o]:bs.push(o),o=i;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var y=Mm(o,c,t);Jc(o,y);break e;case 1:l=c;var v=o.type,x=o.stateNode;if(!(o.flags&128)&&(typeof v.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(Dn===null||!Dn.has(x)))){o.flags|=65536,t&=-t,o.lanes|=t;var N=Om(o,l,t);Jc(o,N);break e}}o=o.return}while(o!==null)}rf(r)}catch(C){t=C,Ve===r&&r!==null&&(Ve=r=r.return);continue}break}while(1)}function tf(){var e=no.current;return no.current=to,e===null?to:e}function Kl(){(et===0||et===3||et===2)&&(et=4),at===null||!(sr&268435455)&&!(bo&268435455)||En(at,ct)}function ao(e,t){var r=Ce;Ce|=2;var s=tf();(at!==e||ct!==t)&&(sn=null,Jn(e,t));do try{ep();break}catch(a){ef(e,a)}while(1);if(_l(),Ce=r,no.current=s,Ve!==null)throw Error(Z(261));return at=null,ct=0,et}function ep(){for(;Ve!==null;)nf(Ve)}function tp(){for(;Ve!==null&&!C0();)nf(Ve)}function nf(e){var t=af(e.alternate,e,Tt);e.memoizedProps=e.pendingProps,t===null?rf(e):Ve=t,Yl.current=null}function rf(e){var t=e;do{var r=t.alternate;if(e=t.return,t.flags&32768){if(r=Hh(r,t),r!==null){r.flags&=32767,Ve=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{et=6,Ve=null;return}}else if(r=Gh(r,t,Tt),r!==null){Ve=r;return}if(t=t.sibling,t!==null){Ve=t;return}Ve=t=e}while(t!==null);et===0&&(et=5)}function Wn(e,t,r){var s=Pe,a=Ot.transition;try{Ot.transition=null,Pe=1,np(e,t,r,s)}finally{Ot.transition=a,Pe=s}return null}function np(e,t,r,s){do Pr();while(Pn!==null);if(Ce&6)throw Error(Z(327));r=e.finishedWork;var a=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(Z(177));e.callbackNode=null,e.callbackPriority=0;var o=r.lanes|r.childLanes;if(z0(e,o),e===at&&(Ve=at=null,ct=0),!(r.subtreeFlags&2064)&&!(r.flags&2064)||ca||(ca=!0,of($a,function(){return Pr(),null})),o=(r.flags&15990)!==0,r.subtreeFlags&15990||o){o=Ot.transition,Ot.transition=null;var i=Pe;Pe=1;var l=Ce;Ce|=4,Yl.current=null,Vh(e,r),Xm(r,e),jh(Ai),Ua=!!_i,Ai=_i=null,e.current=r,Xh(r),E0(),Ce=l,Pe=i,Ot.transition=o}else e.current=r;if(ca&&(ca=!1,Pn=e,so=a),o=e.pendingLanes,o===0&&(Dn=null),R0(r.stateNode),Ct(e,Ge()),t!==null)for(s=e.onRecoverableError,r=0;r<t.length;r++)a=t[r],s(a.value,{componentStack:a.stack,digest:a.digest});if(ro)throw ro=!1,e=Ji,Ji=null,e;return so&1&&e.tag!==0&&Pr(),o=e.pendingLanes,o&1?e===Zi?ws++:(ws=0,Zi=e):ws=0,Un(),null}function Pr(){if(Pn!==null){var e=Mu(so),t=Ot.transition,r=Pe;try{if(Ot.transition=null,Pe=16>e?16:e,Pn===null)var s=!1;else{if(e=Pn,Pn=null,so=0,Ce&6)throw Error(Z(331));var a=Ce;for(Ce|=4,ie=e.current;ie!==null;){var o=ie,i=o.child;if(ie.flags&16){var l=o.deletions;if(l!==null){for(var c=0;c<l.length;c++){var u=l[c];for(ie=u;ie!==null;){var m=ie;switch(m.tag){case 0:case 11:case 15:ys(8,m,o)}var p=m.child;if(p!==null)p.return=m,ie=p;else for(;ie!==null;){m=ie;var f=m.sibling,w=m.return;if(Hm(m),m===u){ie=null;break}if(f!==null){f.return=w,ie=f;break}ie=w}}}var g=o.alternate;if(g!==null){var j=g.child;if(j!==null){g.child=null;do{var S=j.sibling;j.sibling=null,j=S}while(j!==null)}}ie=o}}if(o.subtreeFlags&2064&&i!==null)i.return=o,ie=i;else e:for(;ie!==null;){if(o=ie,o.flags&2048)switch(o.tag){case 0:case 11:case 15:ys(9,o,o.return)}var y=o.sibling;if(y!==null){y.return=o.return,ie=y;break e}ie=o.return}}var v=e.current;for(ie=v;ie!==null;){i=ie;var x=i.child;if(i.subtreeFlags&2064&&x!==null)x.return=i,ie=x;else e:for(i=v;ie!==null;){if(l=ie,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:yo(9,l)}}catch(C){We(l,l.return,C)}if(l===i){ie=null;break e}var N=l.sibling;if(N!==null){N.return=l.return,ie=N;break e}ie=l.return}}if(Ce=a,Un(),tn&&typeof tn.onPostCommitFiberRoot=="function")try{tn.onPostCommitFiberRoot(uo,e)}catch{}s=!0}return s}finally{Pe=r,Ot.transition=t}}return!1}function yd(e,t,r){t=zr(r,t),t=Mm(e,t,1),e=Ln(e,t,1),t=yt(),e!==null&&(Us(e,1,t),Ct(e,t))}function We(e,t,r){if(e.tag===3)yd(e,e,r);else for(;t!==null;){if(t.tag===3){yd(t,e,r);break}else if(t.tag===1){var s=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(Dn===null||!Dn.has(s))){e=zr(r,e),e=Om(t,e,1),t=Ln(t,e,1),e=yt(),t!==null&&(Us(t,1,e),Ct(t,e));break}}t=t.return}}function rp(e,t,r){var s=e.pingCache;s!==null&&s.delete(t),t=yt(),e.pingedLanes|=e.suspendedLanes&r,at===e&&(ct&r)===r&&(et===4||et===3&&(ct&130023424)===ct&&500>Ge()-Wl?Jn(e,0):Ql|=r),Ct(e,t)}function sf(e,t){t===0&&(e.mode&1?(t=Zs,Zs<<=1,!(Zs&130023424)&&(Zs=4194304)):t=1);var r=yt();e=fn(e,t),e!==null&&(Us(e,t,r),Ct(e,r))}function sp(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),sf(e,r)}function ap(e,t){var r=0;switch(e.tag){case 13:var s=e.stateNode,a=e.memoizedState;a!==null&&(r=a.retryLane);break;case 19:s=e.stateNode;break;default:throw Error(Z(314))}s!==null&&s.delete(t),sf(e,r)}var af;af=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||kt.current)Nt=!0;else{if(!(e.lanes&r)&&!(t.flags&128))return Nt=!1,Wh(e,t,r);Nt=!!(e.flags&131072)}else Nt=!1,Oe&&t.flags&1048576&&cm(t,Ka,t.index);switch(t.lanes=0,t.tag){case 2:var s=t.type;Pa(e,t),e=t.pendingProps;var a=Ar(t,pt.current);Tr(t,r),a=Fl(null,t,s,e,a,r);var o=$l();return t.flags|=1,typeof a=="object"&&a!==null&&typeof a.render=="function"&&a.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,St(s)?(o=!0,Ga(t)):o=!1,t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,Ll(t),a.updater=vo,t.stateNode=a,a._reactInternals=t,Bi(t,s,e,r),t=Yi(null,t,s,!0,o,r)):(t.tag=0,Oe&&o&&El(t),vt(null,t,a,r),t=t.child),t;case 16:s=t.elementType;e:{switch(Pa(e,t),e=t.pendingProps,a=s._init,s=a(s._payload),t.type=s,a=t.tag=ip(s),e=Yt(s,e),a){case 0:t=qi(null,t,s,e,r);break e;case 1:t=cd(null,t,s,e,r);break e;case 11:t=id(null,t,s,e,r);break e;case 14:t=ld(null,t,s,Yt(s.type,e),r);break e}throw Error(Z(306,s,""))}return t;case 0:return s=t.type,a=t.pendingProps,a=t.elementType===s?a:Yt(s,a),qi(e,t,s,a,r);case 1:return s=t.type,a=t.pendingProps,a=t.elementType===s?a:Yt(s,a),cd(e,t,s,a,r);case 3:e:{if(Um(t),e===null)throw Error(Z(387));s=t.pendingProps,o=t.memoizedState,a=o.element,pm(e,t),Ja(t,s,null,r);var i=t.memoizedState;if(s=i.element,o.isDehydrated)if(o={element:s,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){a=zr(Error(Z(423)),t),t=dd(e,t,s,r,a);break e}else if(s!==a){a=zr(Error(Z(424)),t),t=dd(e,t,s,r,a);break e}else for(Pt=In(t.stateNode.containerInfo.firstChild),Rt=t,Oe=!0,Wt=null,r=fm(t,null,s,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(Ir(),s===a){t=hn(e,t,r);break e}vt(e,t,s,r)}t=t.child}return t;case 5:return xm(t),e===null&&Oi(t),s=t.type,a=t.pendingProps,o=e!==null?e.memoizedProps:null,i=a.children,Ii(s,a)?i=null:o!==null&&Ii(s,o)&&(t.flags|=32),Bm(e,t),vt(e,t,i,r),t.child;case 6:return e===null&&Oi(t),null;case 13:return qm(e,t,r);case 4:return Dl(t,t.stateNode.containerInfo),s=t.pendingProps,e===null?t.child=Lr(t,null,s,r):vt(e,t,s,r),t.child;case 11:return s=t.type,a=t.pendingProps,a=t.elementType===s?a:Yt(s,a),id(e,t,s,a,r);case 7:return vt(e,t,t.pendingProps,r),t.child;case 8:return vt(e,t,t.pendingProps.children,r),t.child;case 12:return vt(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(s=t.type._context,a=t.pendingProps,o=t.memoizedProps,i=a.value,_e(Va,s._currentValue),s._currentValue=i,o!==null)if(Kt(o.value,i)){if(o.children===a.children&&!kt.current){t=hn(e,t,r);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var l=o.dependencies;if(l!==null){i=o.child;for(var c=l.firstContext;c!==null;){if(c.context===s){if(o.tag===1){c=cn(-1,r&-r),c.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var m=u.pending;m===null?c.next=c:(c.next=m.next,m.next=c),u.pending=c}}o.lanes|=r,c=o.alternate,c!==null&&(c.lanes|=r),Fi(o.return,r,t),l.lanes|=r;break}c=c.next}}else if(o.tag===10)i=o.type===t.type?null:o.child;else if(o.tag===18){if(i=o.return,i===null)throw Error(Z(341));i.lanes|=r,l=i.alternate,l!==null&&(l.lanes|=r),Fi(i,r,t),i=o.sibling}else i=o.child;if(i!==null)i.return=o;else for(i=o;i!==null;){if(i===t){i=null;break}if(o=i.sibling,o!==null){o.return=i.return,i=o;break}i=i.return}o=i}vt(e,t,a.children,r),t=t.child}return t;case 9:return a=t.type,s=t.pendingProps.children,Tr(t,r),a=Ft(a),s=s(a),t.flags|=1,vt(e,t,s,r),t.child;case 14:return s=t.type,a=Yt(s,t.pendingProps),a=Yt(s.type,a),ld(e,t,s,a,r);case 15:return Fm(e,t,t.type,t.pendingProps,r);case 17:return s=t.type,a=t.pendingProps,a=t.elementType===s?a:Yt(s,a),Pa(e,t),t.tag=1,St(s)?(e=!0,Ga(t)):e=!1,Tr(t,r),zm(t,s,a),Bi(t,s,a,r),Yi(null,t,s,!0,e,r);case 19:return Ym(e,t,r);case 22:return $m(e,t,r)}throw Error(Z(156,t.tag))};function of(e,t){return Iu(e,t)}function op(e,t,r,s){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Mt(e,t,r,s){return new op(e,t,r,s)}function Vl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ip(e){if(typeof e=="function")return Vl(e)?1:0;if(e!=null){if(e=e.$$typeof,e===pl)return 11;if(e===xl)return 14}return 2}function Mn(e,t){var r=e.alternate;return r===null?(r=Mt(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function Aa(e,t,r,s,a,o){var i=2;if(s=e,typeof e=="function")Vl(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case fr:return Zn(r.children,a,o,t);case hl:i=8,a|=8;break;case ui:return e=Mt(12,r,t,a|2),e.elementType=ui,e.lanes=o,e;case mi:return e=Mt(13,r,t,a),e.elementType=mi,e.lanes=o,e;case fi:return e=Mt(19,r,t,a),e.elementType=fi,e.lanes=o,e;case xu:return wo(r,a,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case hu:i=10;break e;case pu:i=9;break e;case pl:i=11;break e;case xl:i=14;break e;case Nn:i=16,s=null;break e}throw Error(Z(130,e==null?e:typeof e,""))}return t=Mt(i,r,t,a),t.elementType=e,t.type=s,t.lanes=o,t}function Zn(e,t,r,s){return e=Mt(7,e,s,t),e.lanes=r,e}function wo(e,t,r,s){return e=Mt(22,e,s,t),e.elementType=xu,e.lanes=r,e.stateNode={isHidden:!1},e}function Zo(e,t,r){return e=Mt(6,e,null,t),e.lanes=r,e}function ei(e,t,r){return t=Mt(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function lp(e,t,r,s,a){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Lo(0),this.expirationTimes=Lo(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Lo(0),this.identifierPrefix=s,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function Xl(e,t,r,s,a,o,i,l,c){return e=new lp(e,t,r,l,c),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Mt(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:s,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ll(o),e}function cp(e,t,r){var s=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:mr,key:s==null?null:""+s,children:e,containerInfo:t,implementation:r}}function lf(e){if(!e)return Fn;e=e._reactInternals;e:{if(lr(e)!==e||e.tag!==1)throw Error(Z(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(St(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(Z(171))}if(e.tag===1){var r=e.type;if(St(r))return im(e,r,t)}return t}function cf(e,t,r,s,a,o,i,l,c){return e=Xl(r,s,!0,e,a,o,i,l,c),e.context=lf(null),r=e.current,s=yt(),a=zn(r),o=cn(s,a),o.callback=t??null,Ln(r,o,a),e.current.lanes=a,Us(e,a,s),Ct(e,s),e}function jo(e,t,r,s){var a=t.current,o=yt(),i=zn(a);return r=lf(r),t.context===null?t.context=r:t.pendingContext=r,t=cn(o,i),t.payload={element:e},s=s===void 0?null:s,s!==null&&(t.callback=s),e=Ln(a,t,i),e!==null&&(Ht(e,a,i,o),Ca(e,a,i)),i}function oo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function bd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function Jl(e,t){bd(e,t),(e=e.alternate)&&bd(e,t)}function dp(){return null}var df=typeof reportError=="function"?reportError:function(e){console.error(e)};function Zl(e){this._internalRoot=e}No.prototype.render=Zl.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(Z(409));jo(e,t,null,null)};No.prototype.unmount=Zl.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;ar(function(){jo(null,e,null,null)}),t[mn]=null}};function No(e){this._internalRoot=e}No.prototype.unstable_scheduleHydration=function(e){if(e){var t=$u();e={blockedOn:null,target:e,priority:t};for(var r=0;r<Cn.length&&t!==0&&t<Cn[r].priority;r++);Cn.splice(r,0,e),r===0&&Uu(e)}};function ec(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ko(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function wd(){}function up(e,t,r,s,a){if(a){if(typeof s=="function"){var o=s;s=function(){var u=oo(i);o.call(u)}}var i=cf(t,s,e,0,null,!1,!1,"",wd);return e._reactRootContainer=i,e[mn]=i.current,_s(e.nodeType===8?e.parentNode:e),ar(),i}for(;a=e.lastChild;)e.removeChild(a);if(typeof s=="function"){var l=s;s=function(){var u=oo(c);l.call(u)}}var c=Xl(e,0,!1,null,null,!1,!1,"",wd);return e._reactRootContainer=c,e[mn]=c.current,_s(e.nodeType===8?e.parentNode:e),ar(function(){jo(t,c,r,s)}),c}function So(e,t,r,s,a){var o=r._reactRootContainer;if(o){var i=o;if(typeof a=="function"){var l=a;a=function(){var c=oo(i);l.call(c)}}jo(t,i,e,a)}else i=up(r,t,e,a,s);return oo(i)}Ou=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=us(t.pendingLanes);r!==0&&(yl(t,r|1),Ct(t,Ge()),!(Ce&6)&&(Mr=Ge()+500,Un()))}break;case 13:ar(function(){var s=fn(e,1);if(s!==null){var a=yt();Ht(s,e,1,a)}}),Jl(e,1)}};bl=function(e){if(e.tag===13){var t=fn(e,134217728);if(t!==null){var r=yt();Ht(t,e,134217728,r)}Jl(e,134217728)}};Fu=function(e){if(e.tag===13){var t=zn(e),r=fn(e,t);if(r!==null){var s=yt();Ht(r,e,t,s)}Jl(e,t)}};$u=function(){return Pe};Bu=function(e,t){var r=Pe;try{return Pe=e,t()}finally{Pe=r}};Ni=function(e,t,r){switch(t){case"input":if(xi(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var s=r[t];if(s!==e&&s.form===e.form){var a=po(s);if(!a)throw Error(Z(90));vu(s),xi(s,a)}}}break;case"textarea":bu(e,r);break;case"select":t=r.value,t!=null&&kr(e,!!r.multiple,t,!1)}};Eu=Gl;Tu=ar;var mp={usingClientEntryPoint:!1,Events:[Ys,gr,po,Su,Cu,Gl]},rs={findFiberByHostInstance:Gn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},fp={bundleType:rs.bundleType,version:rs.version,rendererPackageName:rs.rendererPackageName,rendererConfig:rs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:xn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=_u(e),e===null?null:e.stateNode},findFiberByHostInstance:rs.findFiberByHostInstance||dp,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var da=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!da.isDisabled&&da.supportsFiber)try{uo=da.inject(fp),tn=da}catch{}}At.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=mp;At.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ec(t))throw Error(Z(200));return cp(e,t,null,r)};At.createRoot=function(e,t){if(!ec(e))throw Error(Z(299));var r=!1,s="",a=df;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),t=Xl(e,1,!1,null,null,r,!1,s,a),e[mn]=t.current,_s(e.nodeType===8?e.parentNode:e),new Zl(t)};At.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(Z(188)):(e=Object.keys(e).join(","),Error(Z(268,e)));return e=_u(t),e=e===null?null:e.stateNode,e};At.flushSync=function(e){return ar(e)};At.hydrate=function(e,t,r){if(!ko(t))throw Error(Z(200));return So(null,e,t,!0,r)};At.hydrateRoot=function(e,t,r){if(!ec(e))throw Error(Z(405));var s=r!=null&&r.hydratedSources||null,a=!1,o="",i=df;if(r!=null&&(r.unstable_strictMode===!0&&(a=!0),r.identifierPrefix!==void 0&&(o=r.identifierPrefix),r.onRecoverableError!==void 0&&(i=r.onRecoverableError)),t=cf(t,null,e,1,r??null,a,!1,o,i),e[mn]=t.current,_s(e),s)for(e=0;e<s.length;e++)r=s[e],a=r._getVersion,a=a(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,a]:t.mutableSourceEagerHydrationData.push(r,a);return new No(t)};At.render=function(e,t,r){if(!ko(t))throw Error(Z(200));return So(null,e,t,!1,r)};At.unmountComponentAtNode=function(e){if(!ko(e))throw Error(Z(40));return e._reactRootContainer?(ar(function(){So(null,null,e,!1,function(){e._reactRootContainer=null,e[mn]=null})}),!0):!1};At.unstable_batchedUpdates=Gl;At.unstable_renderSubtreeIntoContainer=function(e,t,r,s){if(!ko(r))throw Error(Z(200));if(e==null||e._reactInternals===void 0)throw Error(Z(38));return So(e,t,r,!1,s)};At.version="18.3.1-next-f1338f8080-20240426";function uf(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(uf)}catch(e){console.error(e)}}uf(),du.exports=At;var hp=du.exports,jd=hp;ci.createRoot=jd.createRoot,ci.hydrateRoot=jd.hydrateRoot;const pp="modulepreload",xp=function(e){return"/"+e},Nd={},tc=function(t,r,s){if(!r||r.length===0)return t();const a=document.getElementsByTagName("link");return Promise.all(r.map(o=>{if(o=xp(o),o in Nd)return;Nd[o]=!0;const i=o.endsWith(".css"),l=i?'[rel="stylesheet"]':"";if(!!s)for(let m=a.length-1;m>=0;m--){const p=a[m];if(p.href===o&&(!i||p.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${l}`))return;const u=document.createElement("link");if(u.rel=i?"stylesheet":pp,i||(u.as="script",u.crossOrigin=""),u.href=o,document.head.appendChild(u),i)return new Promise((m,p)=>{u.addEventListener("load",m),u.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>t()).catch(o=>{const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=o,window.dispatchEvent(i),!i.defaultPrevented)throw o})};var kd="popstate";function gp(e={}){function t(s,a){let{pathname:o,search:i,hash:l}=s.location;return nl("",{pathname:o,search:i,hash:l},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}function r(s,a){return typeof a=="string"?a:$s(a)}return yp(t,r,null,e)}function Fe(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Bt(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function vp(){return Math.random().toString(36).substring(2,10)}function Sd(e,t){return{usr:e.state,key:e.key,idx:t}}function nl(e,t,r=null,s){return{pathname:typeof e=="string"?e:e.pathname,search:"",hash:"",...typeof t=="string"?Ur(t):t,state:r,key:t&&t.key||s||vp()}}function $s({pathname:e="/",search:t="",hash:r=""}){return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Ur(e){let t={};if(e){let r=e.indexOf("#");r>=0&&(t.hash=e.substring(r),e=e.substring(0,r));let s=e.indexOf("?");s>=0&&(t.search=e.substring(s),e=e.substring(0,s)),e&&(t.pathname=e)}return t}function yp(e,t,r,s={}){let{window:a=document.defaultView,v5Compat:o=!1}=s,i=a.history,l="POP",c=null,u=m();u==null&&(u=0,i.replaceState({...i.state,idx:u},""));function m(){return(i.state||{idx:null}).idx}function p(){l="POP";let S=m(),y=S==null?null:S-u;u=S,c&&c({action:l,location:j.location,delta:y})}function f(S,y){l="PUSH";let v=nl(j.location,S,y);r&&r(v,S),u=m()+1;let x=Sd(v,u),N=j.createHref(v);try{i.pushState(x,"",N)}catch(C){if(C instanceof DOMException&&C.name==="DataCloneError")throw C;a.location.assign(N)}o&&c&&c({action:l,location:j.location,delta:1})}function w(S,y){l="REPLACE";let v=nl(j.location,S,y);r&&r(v,S),u=m();let x=Sd(v,u),N=j.createHref(v);i.replaceState(x,"",N),o&&c&&c({action:l,location:j.location,delta:0})}function g(S){return bp(S)}let j={get action(){return l},get location(){return e(a,i)},listen(S){if(c)throw new Error("A history only accepts one active listener");return a.addEventListener(kd,p),c=S,()=>{a.removeEventListener(kd,p),c=null}},createHref(S){return t(a,S)},createURL:g,encodeLocation(S){let y=g(S);return{pathname:y.pathname,search:y.search,hash:y.hash}},push:f,replace:w,go(S){return i.go(S)}};return j}function bp(e,t=!1){let r="http://localhost";typeof window<"u"&&(r=window.location.origin!=="null"?window.location.origin:window.location.href),Fe(r,"No window.location.(origin|href) available to create URL");let s=typeof e=="string"?e:$s(e);return s=s.replace(/ $/,"%20"),!t&&s.startsWith("//")&&(s=r+s),new URL(s,r)}function mf(e,t,r="/"){return wp(e,t,r,!1)}function wp(e,t,r,s){let a=typeof t=="string"?Ur(t):t,o=pn(a.pathname||"/",r);if(o==null)return null;let i=ff(e);jp(i);let l=null;for(let c=0;l==null&&c<i.length;++c){let u=Ip(o);l=_p(i[c],u,s)}return l}function ff(e,t=[],r=[],s=""){let a=(o,i,l)=>{let c={relativePath:l===void 0?o.path||"":l,caseSensitive:o.caseSensitive===!0,childrenIndex:i,route:o};c.relativePath.startsWith("/")&&(Fe(c.relativePath.startsWith(s),`Absolute route path "${c.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),c.relativePath=c.relativePath.slice(s.length));let u=dn([s,c.relativePath]),m=r.concat(c);o.children&&o.children.length>0&&(Fe(o.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${u}".`),ff(o.children,t,m,u)),!(o.path==null&&!o.index)&&t.push({path:u,score:Pp(u,o.index),routesMeta:m})};return e.forEach((o,i)=>{var l;if(o.path===""||!((l=o.path)!=null&&l.includes("?")))a(o,i);else for(let c of hf(o.path))a(o,i,c)}),t}function hf(e){let t=e.split("/");if(t.length===0)return[];let[r,...s]=t,a=r.endsWith("?"),o=r.replace(/\?$/,"");if(s.length===0)return a?[o,""]:[o];let i=hf(s.join("/")),l=[];return l.push(...i.map(c=>c===""?o:[o,c].join("/"))),a&&l.push(...i),l.map(c=>e.startsWith("/")&&c===""?"/":c)}function jp(e){e.sort((t,r)=>t.score!==r.score?r.score-t.score:Rp(t.routesMeta.map(s=>s.childrenIndex),r.routesMeta.map(s=>s.childrenIndex)))}var Np=/^:[\w-]+$/,kp=3,Sp=2,Cp=1,Ep=10,Tp=-2,Cd=e=>e==="*";function Pp(e,t){let r=e.split("/"),s=r.length;return r.some(Cd)&&(s+=Tp),t&&(s+=Sp),r.filter(a=>!Cd(a)).reduce((a,o)=>a+(Np.test(o)?kp:o===""?Cp:Ep),s)}function Rp(e,t){return e.length===t.length&&e.slice(0,-1).every((s,a)=>s===t[a])?e[e.length-1]-t[t.length-1]:0}function _p(e,t,r=!1){let{routesMeta:s}=e,a={},o="/",i=[];for(let l=0;l<s.length;++l){let c=s[l],u=l===s.length-1,m=o==="/"?t:t.slice(o.length)||"/",p=io({path:c.relativePath,caseSensitive:c.caseSensitive,end:u},m),f=c.route;if(!p&&u&&r&&!s[s.length-1].route.index&&(p=io({path:c.relativePath,caseSensitive:c.caseSensitive,end:!1},m)),!p)return null;Object.assign(a,p.params),i.push({params:a,pathname:dn([o,p.pathname]),pathnameBase:Mp(dn([o,p.pathnameBase])),route:f}),p.pathnameBase!=="/"&&(o=dn([o,p.pathnameBase]))}return i}function io(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[r,s]=Ap(e.path,e.caseSensitive,e.end),a=t.match(r);if(!a)return null;let o=a[0],i=o.replace(/(.)\/+$/,"$1"),l=a.slice(1);return{params:s.reduce((u,{paramName:m,isOptional:p},f)=>{if(m==="*"){let g=l[f]||"";i=o.slice(0,o.length-g.length).replace(/(.)\/+$/,"$1")}const w=l[f];return p&&!w?u[m]=void 0:u[m]=(w||"").replace(/%2F/g,"/"),u},{}),pathname:o,pathnameBase:i,pattern:e}}function Ap(e,t=!1,r=!0){Bt(e==="*"||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let s=[],a="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(i,l,c)=>(s.push({paramName:l,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(s.push({paramName:"*"}),a+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?a+="\\/*$":e!==""&&e!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,t?void 0:"i"),s]}function Ip(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Bt(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function pn(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let r=t.endsWith("/")?t.length-1:t.length,s=e.charAt(r);return s&&s!=="/"?null:e.slice(r)||"/"}function Lp(e,t="/"){let{pathname:r,search:s="",hash:a=""}=typeof e=="string"?Ur(e):e;return{pathname:r?r.startsWith("/")?r:Dp(r,t):t,search:Op(s),hash:Fp(a)}}function Dp(e,t){let r=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(a=>{a===".."?r.length>1&&r.pop():a!=="."&&r.push(a)}),r.length>1?r.join("/"):"/"}function ti(e,t,r,s){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${r}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function zp(e){return e.filter((t,r)=>r===0||t.route.path&&t.route.path.length>0)}function nc(e){let t=zp(e);return t.map((r,s)=>s===t.length-1?r.pathname:r.pathnameBase)}function rc(e,t,r,s=!1){let a;typeof e=="string"?a=Ur(e):(a={...e},Fe(!a.pathname||!a.pathname.includes("?"),ti("?","pathname","search",a)),Fe(!a.pathname||!a.pathname.includes("#"),ti("#","pathname","hash",a)),Fe(!a.search||!a.search.includes("#"),ti("#","search","hash",a)));let o=e===""||a.pathname==="",i=o?"/":a.pathname,l;if(i==null)l=r;else{let p=t.length-1;if(!s&&i.startsWith("..")){let f=i.split("/");for(;f[0]==="..";)f.shift(),p-=1;a.pathname=f.join("/")}l=p>=0?t[p]:"/"}let c=Lp(a,l),u=i&&i!=="/"&&i.endsWith("/"),m=(o||i===".")&&r.endsWith("/");return!c.pathname.endsWith("/")&&(u||m)&&(c.pathname+="/"),c}var dn=e=>e.join("/").replace(/\/\/+/g,"/"),Mp=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Op=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Fp=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function $p(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}var pf=["POST","PUT","PATCH","DELETE"];new Set(pf);var Bp=["GET",...pf];new Set(Bp);var qr=d.createContext(null);qr.displayName="DataRouter";var Co=d.createContext(null);Co.displayName="DataRouterState";d.createContext(!1);var xf=d.createContext({isTransitioning:!1});xf.displayName="ViewTransition";var Up=d.createContext(new Map);Up.displayName="Fetchers";var qp=d.createContext(null);qp.displayName="Await";var Vt=d.createContext(null);Vt.displayName="Navigation";var Ws=d.createContext(null);Ws.displayName="Location";var Ut=d.createContext({outlet:null,matches:[],isDataRoute:!1});Ut.displayName="Route";var sc=d.createContext(null);sc.displayName="RouteError";function Yp(e,{relative:t}={}){Fe(Yr(),"useHref() may be used only in the context of a <Router> component.");let{basename:r,navigator:s}=d.useContext(Vt),{hash:a,pathname:o,search:i}=Gs(e,{relative:t}),l=o;return r!=="/"&&(l=o==="/"?r:dn([r,o])),s.createHref({pathname:l,search:i,hash:a})}function Yr(){return d.useContext(Ws)!=null}function Xe(){return Fe(Yr(),"useLocation() may be used only in the context of a <Router> component."),d.useContext(Ws).location}var gf="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function vf(e){d.useContext(Vt).static||d.useLayoutEffect(e)}function Te(){let{isDataRoute:e}=d.useContext(Ut);return e?ox():Qp()}function Qp(){Fe(Yr(),"useNavigate() may be used only in the context of a <Router> component.");let e=d.useContext(qr),{basename:t,navigator:r}=d.useContext(Vt),{matches:s}=d.useContext(Ut),{pathname:a}=Xe(),o=JSON.stringify(nc(s)),i=d.useRef(!1);return vf(()=>{i.current=!0}),d.useCallback((c,u={})=>{if(Bt(i.current,gf),!i.current)return;if(typeof c=="number"){r.go(c);return}let m=rc(c,JSON.parse(o),a,u.relative==="path");e==null&&t!=="/"&&(m.pathname=m.pathname==="/"?t:dn([t,m.pathname])),(u.replace?r.replace:r.push)(m,u.state,u)},[t,r,o,a,e])}var Wp=d.createContext(null);function Gp(e){let t=d.useContext(Ut).outlet;return t&&d.createElement(Wp.Provider,{value:e},t)}function Hp(){let{matches:e}=d.useContext(Ut),t=e[e.length-1];return t?t.params:{}}function Gs(e,{relative:t}={}){let{matches:r}=d.useContext(Ut),{pathname:s}=Xe(),a=JSON.stringify(nc(r));return d.useMemo(()=>rc(e,JSON.parse(a),s,t==="path"),[e,a,s,t])}function Kp(e,t){return yf(e,t)}function yf(e,t,r,s){var y;Fe(Yr(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:a}=d.useContext(Vt),{matches:o}=d.useContext(Ut),i=o[o.length-1],l=i?i.params:{},c=i?i.pathname:"/",u=i?i.pathnameBase:"/",m=i&&i.route;{let v=m&&m.path||"";bf(c,!m||v.endsWith("*")||v.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${c}" (under <Route path="${v}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${v}"> to <Route path="${v==="/"?"*":`${v}/*`}">.`)}let p=Xe(),f;if(t){let v=typeof t=="string"?Ur(t):t;Fe(u==="/"||((y=v.pathname)==null?void 0:y.startsWith(u)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${u}" but pathname "${v.pathname}" was given in the \`location\` prop.`),f=v}else f=p;let w=f.pathname||"/",g=w;if(u!=="/"){let v=u.replace(/^\//,"").split("/");g="/"+w.replace(/^\//,"").split("/").slice(v.length).join("/")}let j=mf(e,{pathname:g});Bt(m||j!=null,`No routes matched location "${f.pathname}${f.search}${f.hash}" `),Bt(j==null||j[j.length-1].route.element!==void 0||j[j.length-1].route.Component!==void 0||j[j.length-1].route.lazy!==void 0,`Matched leaf route at location "${f.pathname}${f.search}${f.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let S=ex(j&&j.map(v=>Object.assign({},v,{params:Object.assign({},l,v.params),pathname:dn([u,a.encodeLocation?a.encodeLocation(v.pathname).pathname:v.pathname]),pathnameBase:v.pathnameBase==="/"?u:dn([u,a.encodeLocation?a.encodeLocation(v.pathnameBase).pathname:v.pathnameBase])})),o,r,s);return t&&S?d.createElement(Ws.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...f},navigationType:"POP"}},S):S}function Vp(){let e=ax(),t=$p(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,s="rgba(200,200,200, 0.5)",a={padding:"0.5rem",backgroundColor:s},o={padding:"2px 4px",backgroundColor:s},i=null;return console.error("Error handled by React Router default ErrorBoundary:",e),i=d.createElement(d.Fragment,null,d.createElement("p",null,"💿 Hey developer 👋"),d.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",d.createElement("code",{style:o},"ErrorBoundary")," or"," ",d.createElement("code",{style:o},"errorElement")," prop on your route.")),d.createElement(d.Fragment,null,d.createElement("h2",null,"Unexpected Application Error!"),d.createElement("h3",{style:{fontStyle:"italic"}},t),r?d.createElement("pre",{style:a},r):null,i)}var Xp=d.createElement(Vp,null),Jp=class extends d.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return this.state.error!==void 0?d.createElement(Ut.Provider,{value:this.props.routeContext},d.createElement(sc.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function Zp({routeContext:e,match:t,children:r}){let s=d.useContext(qr);return s&&s.static&&s.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=t.route.id),d.createElement(Ut.Provider,{value:e},r)}function ex(e,t=[],r=null,s=null){if(e==null){if(!r)return null;if(r.errors)e=r.matches;else if(t.length===0&&!r.initialized&&r.matches.length>0)e=r.matches;else return null}let a=e,o=r==null?void 0:r.errors;if(o!=null){let c=a.findIndex(u=>u.route.id&&(o==null?void 0:o[u.route.id])!==void 0);Fe(c>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(o).join(",")}`),a=a.slice(0,Math.min(a.length,c+1))}let i=!1,l=-1;if(r)for(let c=0;c<a.length;c++){let u=a[c];if((u.route.HydrateFallback||u.route.hydrateFallbackElement)&&(l=c),u.route.id){let{loaderData:m,errors:p}=r,f=u.route.loader&&!m.hasOwnProperty(u.route.id)&&(!p||p[u.route.id]===void 0);if(u.route.lazy||f){i=!0,l>=0?a=a.slice(0,l+1):a=[a[0]];break}}}return a.reduceRight((c,u,m)=>{let p,f=!1,w=null,g=null;r&&(p=o&&u.route.id?o[u.route.id]:void 0,w=u.route.errorElement||Xp,i&&(l<0&&m===0?(bf("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),f=!0,g=null):l===m&&(f=!0,g=u.route.hydrateFallbackElement||null)));let j=t.concat(a.slice(0,m+1)),S=()=>{let y;return p?y=w:f?y=g:u.route.Component?y=d.createElement(u.route.Component,null):u.route.element?y=u.route.element:y=c,d.createElement(Zp,{match:u,routeContext:{outlet:c,matches:j,isDataRoute:r!=null},children:y})};return r&&(u.route.ErrorBoundary||u.route.errorElement||m===0)?d.createElement(Jp,{location:r.location,revalidation:r.revalidation,component:w,error:p,children:S(),routeContext:{outlet:null,matches:j,isDataRoute:!0}}):S()},null)}function ac(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function tx(e){let t=d.useContext(qr);return Fe(t,ac(e)),t}function nx(e){let t=d.useContext(Co);return Fe(t,ac(e)),t}function rx(e){let t=d.useContext(Ut);return Fe(t,ac(e)),t}function oc(e){let t=rx(e),r=t.matches[t.matches.length-1];return Fe(r.route.id,`${e} can only be used on routes that contain a unique "id"`),r.route.id}function sx(){return oc("useRouteId")}function ax(){var s;let e=d.useContext(sc),t=nx("useRouteError"),r=oc("useRouteError");return e!==void 0?e:(s=t.errors)==null?void 0:s[r]}function ox(){let{router:e}=tx("useNavigate"),t=oc("useNavigate"),r=d.useRef(!1);return vf(()=>{r.current=!0}),d.useCallback(async(a,o={})=>{Bt(r.current,gf),r.current&&(typeof a=="number"?e.navigate(a):await e.navigate(a,{fromRouteId:t,...o}))},[e,t])}var Ed={};function bf(e,t,r){!t&&!Ed[e]&&(Ed[e]=!0,Bt(!1,r))}d.memo(ix);function ix({routes:e,future:t,state:r}){return yf(e,void 0,r,t)}function lx({to:e,replace:t,state:r,relative:s}){Fe(Yr(),"<Navigate> may be used only in the context of a <Router> component.");let{static:a}=d.useContext(Vt);Bt(!a,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:o}=d.useContext(Ut),{pathname:i}=Xe(),l=Te(),c=rc(e,nc(o),i,s==="path"),u=JSON.stringify(c);return d.useEffect(()=>{l(JSON.parse(u),{replace:t,state:r,relative:s})},[l,u,s,t,r]),null}function cx(e){return Gp(e.context)}function Re(e){Fe(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function dx({basename:e="/",children:t=null,location:r,navigationType:s="POP",navigator:a,static:o=!1}){Fe(!Yr(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let i=e.replace(/^\/*/,"/"),l=d.useMemo(()=>({basename:i,navigator:a,static:o,future:{}}),[i,a,o]);typeof r=="string"&&(r=Ur(r));let{pathname:c="/",search:u="",hash:m="",state:p=null,key:f="default"}=r,w=d.useMemo(()=>{let g=pn(c,i);return g==null?null:{location:{pathname:g,search:u,hash:m,state:p,key:f},navigationType:s}},[i,c,u,m,p,f,s]);return Bt(w!=null,`<Router basename="${i}"> is not able to match the URL "${c}${u}${m}" because it does not start with the basename, so the <Router> won't render anything.`),w==null?null:d.createElement(Vt.Provider,{value:l},d.createElement(Ws.Provider,{children:t,value:w}))}function ux({children:e,location:t}){return Kp(rl(e),t)}function rl(e,t=[]){let r=[];return d.Children.forEach(e,(s,a)=>{if(!d.isValidElement(s))return;let o=[...t,a];if(s.type===d.Fragment){r.push.apply(r,rl(s.props.children,o));return}Fe(s.type===Re,`[${typeof s.type=="string"?s.type:s.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Fe(!s.props.index||!s.props.children,"An index route cannot have child routes.");let i={id:s.props.id||o.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,loader:s.props.loader,action:s.props.action,hydrateFallbackElement:s.props.hydrateFallbackElement,HydrateFallback:s.props.HydrateFallback,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.hasErrorBoundary===!0||s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(i.children=rl(s.props.children,o)),r.push(i)}),r}var Ia="get",La="application/x-www-form-urlencoded";function Eo(e){return e!=null&&typeof e.tagName=="string"}function mx(e){return Eo(e)&&e.tagName.toLowerCase()==="button"}function fx(e){return Eo(e)&&e.tagName.toLowerCase()==="form"}function hx(e){return Eo(e)&&e.tagName.toLowerCase()==="input"}function px(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function xx(e,t){return e.button===0&&(!t||t==="_self")&&!px(e)}function sl(e=""){return new URLSearchParams(typeof e=="string"||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce((t,r)=>{let s=e[r];return t.concat(Array.isArray(s)?s.map(a=>[r,a]):[[r,s]])},[]))}function gx(e,t){let r=sl(e);return t&&t.forEach((s,a)=>{r.has(a)||t.getAll(a).forEach(o=>{r.append(a,o)})}),r}var ua=null;function vx(){if(ua===null)try{new FormData(document.createElement("form"),0),ua=!1}catch{ua=!0}return ua}var yx=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function ni(e){return e!=null&&!yx.has(e)?(Bt(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${La}"`),null):e}function bx(e,t){let r,s,a,o,i;if(fx(e)){let l=e.getAttribute("action");s=l?pn(l,t):null,r=e.getAttribute("method")||Ia,a=ni(e.getAttribute("enctype"))||La,o=new FormData(e)}else if(mx(e)||hx(e)&&(e.type==="submit"||e.type==="image")){let l=e.form;if(l==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let c=e.getAttribute("formaction")||l.getAttribute("action");if(s=c?pn(c,t):null,r=e.getAttribute("formmethod")||l.getAttribute("method")||Ia,a=ni(e.getAttribute("formenctype"))||ni(l.getAttribute("enctype"))||La,o=new FormData(l,e),!vx()){let{name:u,type:m,value:p}=e;if(m==="image"){let f=u?`${u}.`:"";o.append(`${f}x`,"0"),o.append(`${f}y`,"0")}else u&&o.append(u,p)}}else{if(Eo(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');r=Ia,s=null,a=La,i=e}return o&&a==="text/plain"&&(i=o,o=void 0),{action:s,method:r.toLowerCase(),encType:a,formData:o,body:i}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function ic(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function wx(e,t,r){let s=typeof e=="string"?new URL(e,typeof window>"u"?"server://singlefetch/":window.location.origin):e;return s.pathname==="/"?s.pathname=`_root.${r}`:t&&pn(s.pathname,t)==="/"?s.pathname=`${t.replace(/\/$/,"")}/_root.${r}`:s.pathname=`${s.pathname.replace(/\/$/,"")}.${r}`,s}async function jx(e,t){if(e.id in t)return t[e.id];try{let r=await tc(()=>import(e.module),[]);return t[e.id]=r,r}catch(r){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(r),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Nx(e){return e!=null&&typeof e.page=="string"}function kx(e){return e==null?!1:e.href==null?e.rel==="preload"&&typeof e.imageSrcSet=="string"&&typeof e.imageSizes=="string":typeof e.rel=="string"&&typeof e.href=="string"}async function Sx(e,t,r){let s=await Promise.all(e.map(async a=>{let o=t.routes[a.route.id];if(o){let i=await jx(o,r);return i.links?i.links():[]}return[]}));return Px(s.flat(1).filter(kx).filter(a=>a.rel==="stylesheet"||a.rel==="preload").map(a=>a.rel==="stylesheet"?{...a,rel:"prefetch",as:"style"}:{...a,rel:"prefetch"}))}function Td(e,t,r,s,a,o){let i=(c,u)=>r[u]?c.route.id!==r[u].route.id:!0,l=(c,u)=>{var m;return r[u].pathname!==c.pathname||((m=r[u].route.path)==null?void 0:m.endsWith("*"))&&r[u].params["*"]!==c.params["*"]};return o==="assets"?t.filter((c,u)=>i(c,u)||l(c,u)):o==="data"?t.filter((c,u)=>{var p;let m=s.routes[c.route.id];if(!m||!m.hasLoader)return!1;if(i(c,u)||l(c,u))return!0;if(c.route.shouldRevalidate){let f=c.route.shouldRevalidate({currentUrl:new URL(a.pathname+a.search+a.hash,window.origin),currentParams:((p=r[0])==null?void 0:p.params)||{},nextUrl:new URL(e,window.origin),nextParams:c.params,defaultShouldRevalidate:!0});if(typeof f=="boolean")return f}return!0}):[]}function Cx(e,t,{includeHydrateFallback:r}={}){return Ex(e.map(s=>{let a=t.routes[s.route.id];if(!a)return[];let o=[a.module];return a.clientActionModule&&(o=o.concat(a.clientActionModule)),a.clientLoaderModule&&(o=o.concat(a.clientLoaderModule)),r&&a.hydrateFallbackModule&&(o=o.concat(a.hydrateFallbackModule)),a.imports&&(o=o.concat(a.imports)),o}).flat(1))}function Ex(e){return[...new Set(e)]}function Tx(e){let t={},r=Object.keys(e).sort();for(let s of r)t[s]=e[s];return t}function Px(e,t){let r=new Set,s=new Set(t);return e.reduce((a,o)=>{if(t&&!Nx(o)&&o.as==="script"&&o.href&&s.has(o.href))return a;let l=JSON.stringify(Tx(o));return r.has(l)||(r.add(l),a.push({key:l,link:o})),a},[])}function wf(){let e=d.useContext(qr);return ic(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}function Rx(){let e=d.useContext(Co);return ic(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}var lc=d.createContext(void 0);lc.displayName="FrameworkContext";function jf(){let e=d.useContext(lc);return ic(e,"You must render this element inside a <HydratedRouter> element"),e}function _x(e,t){let r=d.useContext(lc),[s,a]=d.useState(!1),[o,i]=d.useState(!1),{onFocus:l,onBlur:c,onMouseEnter:u,onMouseLeave:m,onTouchStart:p}=t,f=d.useRef(null);d.useEffect(()=>{if(e==="render"&&i(!0),e==="viewport"){let j=y=>{y.forEach(v=>{i(v.isIntersecting)})},S=new IntersectionObserver(j,{threshold:.5});return f.current&&S.observe(f.current),()=>{S.disconnect()}}},[e]),d.useEffect(()=>{if(s){let j=setTimeout(()=>{i(!0)},100);return()=>{clearTimeout(j)}}},[s]);let w=()=>{a(!0)},g=()=>{a(!1),i(!1)};return r?e!=="intent"?[o,f,{}]:[o,f,{onFocus:ss(l,w),onBlur:ss(c,g),onMouseEnter:ss(u,w),onMouseLeave:ss(m,g),onTouchStart:ss(p,w)}]:[!1,f,{}]}function ss(e,t){return r=>{e&&e(r),r.defaultPrevented||t(r)}}function Ax({page:e,...t}){let{router:r}=wf(),s=d.useMemo(()=>mf(r.routes,e,r.basename),[r.routes,e,r.basename]);return s?d.createElement(Lx,{page:e,matches:s,...t}):null}function Ix(e){let{manifest:t,routeModules:r}=jf(),[s,a]=d.useState([]);return d.useEffect(()=>{let o=!1;return Sx(e,t,r).then(i=>{o||a(i)}),()=>{o=!0}},[e,t,r]),s}function Lx({page:e,matches:t,...r}){let s=Xe(),{manifest:a,routeModules:o}=jf(),{basename:i}=wf(),{loaderData:l,matches:c}=Rx(),u=d.useMemo(()=>Td(e,t,c,a,s,"data"),[e,t,c,a,s]),m=d.useMemo(()=>Td(e,t,c,a,s,"assets"),[e,t,c,a,s]),p=d.useMemo(()=>{if(e===s.pathname+s.search+s.hash)return[];let g=new Set,j=!1;if(t.forEach(y=>{var x;let v=a.routes[y.route.id];!v||!v.hasLoader||(!u.some(N=>N.route.id===y.route.id)&&y.route.id in l&&((x=o[y.route.id])!=null&&x.shouldRevalidate)||v.hasClientLoader?j=!0:g.add(y.route.id))}),g.size===0)return[];let S=wx(e,i,"data");return j&&g.size>0&&S.searchParams.set("_routes",t.filter(y=>g.has(y.route.id)).map(y=>y.route.id).join(",")),[S.pathname+S.search]},[i,l,s,a,u,t,e,o]),f=d.useMemo(()=>Cx(m,a),[m,a]),w=Ix(m);return d.createElement(d.Fragment,null,p.map(g=>d.createElement("link",{key:g,rel:"prefetch",as:"fetch",href:g,...r})),f.map(g=>d.createElement("link",{key:g,rel:"modulepreload",href:g,...r})),w.map(({key:g,link:j})=>d.createElement("link",{key:g,...j})))}function Dx(...e){return t=>{e.forEach(r=>{typeof r=="function"?r(t):r!=null&&(r.current=t)})}}var Nf=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Nf&&(window.__reactRouterVersion="7.7.1")}catch{}function zx({basename:e,children:t,window:r}){let s=d.useRef();s.current==null&&(s.current=gp({window:r,v5Compat:!0}));let a=s.current,[o,i]=d.useState({action:a.action,location:a.location}),l=d.useCallback(c=>{d.startTransition(()=>i(c))},[i]);return d.useLayoutEffect(()=>a.listen(l),[a,l]),d.createElement(dx,{basename:e,children:t,location:o.location,navigationType:o.action,navigator:a})}var kf=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Sf=d.forwardRef(function({onClick:t,discover:r="render",prefetch:s="none",relative:a,reloadDocument:o,replace:i,state:l,target:c,to:u,preventScrollReset:m,viewTransition:p,...f},w){let{basename:g}=d.useContext(Vt),j=typeof u=="string"&&kf.test(u),S,y=!1;if(typeof u=="string"&&j&&(S=u,Nf))try{let b=new URL(window.location.href),k=u.startsWith("//")?new URL(b.protocol+u):new URL(u),_=pn(k.pathname,g);k.origin===b.origin&&_!=null?u=_+k.search+k.hash:y=!0}catch{Bt(!1,`<Link to="${u}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let v=Yp(u,{relative:a}),[x,N,C]=_x(s,f),R=$x(u,{replace:i,state:l,target:c,preventScrollReset:m,relative:a,viewTransition:p});function T(b){t&&t(b),b.defaultPrevented||R(b)}let h=d.createElement("a",{...f,...C,href:S||v,onClick:y||o?t:T,ref:Dx(w,N),target:c,"data-discover":!j&&r==="render"?"true":void 0});return x&&!j?d.createElement(d.Fragment,null,h,d.createElement(Ax,{page:v})):h});Sf.displayName="Link";var Mx=d.forwardRef(function({"aria-current":t="page",caseSensitive:r=!1,className:s="",end:a=!1,style:o,to:i,viewTransition:l,children:c,...u},m){let p=Gs(i,{relative:u.relative}),f=Xe(),w=d.useContext(Co),{navigator:g,basename:j}=d.useContext(Vt),S=w!=null&&Qx(p)&&l===!0,y=g.encodeLocation?g.encodeLocation(p).pathname:p.pathname,v=f.pathname,x=w&&w.navigation&&w.navigation.location?w.navigation.location.pathname:null;r||(v=v.toLowerCase(),x=x?x.toLowerCase():null,y=y.toLowerCase()),x&&j&&(x=pn(x,j)||x);const N=y!=="/"&&y.endsWith("/")?y.length-1:y.length;let C=v===y||!a&&v.startsWith(y)&&v.charAt(N)==="/",R=x!=null&&(x===y||!a&&x.startsWith(y)&&x.charAt(y.length)==="/"),T={isActive:C,isPending:R,isTransitioning:S},h=C?t:void 0,b;typeof s=="function"?b=s(T):b=[s,C?"active":null,R?"pending":null,S?"transitioning":null].filter(Boolean).join(" ");let k=typeof o=="function"?o(T):o;return d.createElement(Sf,{...u,"aria-current":h,className:b,ref:m,style:k,to:i,viewTransition:l},typeof c=="function"?c(T):c)});Mx.displayName="NavLink";var Ox=d.forwardRef(({discover:e="render",fetcherKey:t,navigate:r,reloadDocument:s,replace:a,state:o,method:i=Ia,action:l,onSubmit:c,relative:u,preventScrollReset:m,viewTransition:p,...f},w)=>{let g=qx(),j=Yx(l,{relative:u}),S=i.toLowerCase()==="get"?"get":"post",y=typeof l=="string"&&kf.test(l),v=x=>{if(c&&c(x),x.defaultPrevented)return;x.preventDefault();let N=x.nativeEvent.submitter,C=(N==null?void 0:N.getAttribute("formmethod"))||i;g(N||x.currentTarget,{fetcherKey:t,method:C,navigate:r,replace:a,state:o,relative:u,preventScrollReset:m,viewTransition:p})};return d.createElement("form",{ref:w,method:S,action:j,onSubmit:s?c:v,...f,"data-discover":!y&&e==="render"?"true":void 0})});Ox.displayName="Form";function Fx(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Cf(e){let t=d.useContext(qr);return Fe(t,Fx(e)),t}function $x(e,{target:t,replace:r,state:s,preventScrollReset:a,relative:o,viewTransition:i}={}){let l=Te(),c=Xe(),u=Gs(e,{relative:o});return d.useCallback(m=>{if(xx(m,t)){m.preventDefault();let p=r!==void 0?r:$s(c)===$s(u);l(e,{replace:p,state:s,preventScrollReset:a,relative:o,viewTransition:i})}},[c,l,u,r,s,t,e,a,o,i])}function Ef(e){Bt(typeof URLSearchParams<"u","You cannot use the `useSearchParams` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params.");let t=d.useRef(sl(e)),r=d.useRef(!1),s=Xe(),a=d.useMemo(()=>gx(s.search,r.current?null:t.current),[s.search]),o=Te(),i=d.useCallback((l,c)=>{const u=sl(typeof l=="function"?l(new URLSearchParams(a)):l);r.current=!0,o("?"+u,c)},[o,a]);return[a,i]}var Bx=0,Ux=()=>`__${String(++Bx)}__`;function qx(){let{router:e}=Cf("useSubmit"),{basename:t}=d.useContext(Vt),r=sx();return d.useCallback(async(s,a={})=>{let{action:o,method:i,encType:l,formData:c,body:u}=bx(s,t);if(a.navigate===!1){let m=a.fetcherKey||Ux();await e.fetch(m,r,a.action||o,{preventScrollReset:a.preventScrollReset,formData:c,body:u,formMethod:a.method||i,formEncType:a.encType||l,flushSync:a.flushSync})}else await e.navigate(a.action||o,{preventScrollReset:a.preventScrollReset,formData:c,body:u,formMethod:a.method||i,formEncType:a.encType||l,replace:a.replace,state:a.state,fromRouteId:r,flushSync:a.flushSync,viewTransition:a.viewTransition})},[e,t,r])}function Yx(e,{relative:t}={}){let{basename:r}=d.useContext(Vt),s=d.useContext(Ut);Fe(s,"useFormAction must be used inside a RouteContext");let[a]=s.matches.slice(-1),o={...Gs(e||".",{relative:t})},i=Xe();if(e==null){o.search=i.search;let l=new URLSearchParams(o.search),c=l.getAll("index");if(c.some(m=>m==="")){l.delete("index"),c.filter(p=>p).forEach(p=>l.append("index",p));let m=l.toString();o.search=m?`?${m}`:""}}return(!e||e===".")&&a.route.index&&(o.search=o.search?o.search.replace(/^\?/,"?index&"):"?index"),r!=="/"&&(o.pathname=o.pathname==="/"?r:dn([r,o.pathname])),$s(o)}function Qx(e,{relative:t}={}){let r=d.useContext(xf);Fe(r!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:s}=Cf("useViewTransitionState"),a=Gs(e,{relative:t});if(!r.isTransitioning)return!1;let o=pn(r.currentLocation.pathname,s)||r.currentLocation.pathname,i=pn(r.nextLocation.pathname,s)||r.nextLocation.pathname;return io(a.pathname,i)!=null||io(a.pathname,o)!=null}function Wx({size:e=22,spinning:t=!1}){return n.jsx("div",{style:{width:e,height:e},className:"grid place-items-center",children:n.jsxs("svg",{viewBox:"0 0 100 100",className:`${t?"animate-[spin_0.8s_ease-out]":"motion-safe:animate-[spin_9s_linear_infinite]"} group-active:motion-safe:animate-[spin_1.2s_linear_infinite]`,style:{filter:"drop-shadow(0 2px 4px rgba(0,0,0,0.2))"},children:[n.jsx("path",{d:"M50,50 L50,5 A45,45 0 0,1 86.97,25.98 Z",fill:"#6366F1"}),n.jsx("path",{d:"M50,50 L86.97,25.98 A45,45 0 0,1 86.97,74.02 Z",fill:"#22C55E"}),n.jsx("path",{d:"M50,50 L86.97,74.02 A45,45 0 0,1 50,95 Z",fill:"#F59E0B"}),n.jsx("path",{d:"M50,50 L50,95 A45,45 0 0,1 13.03,74.02 Z",fill:"#EF4444"}),n.jsx("path",{d:"M50,50 L13.03,74.02 A45,45 0 0,1 13.03,25.98 Z",fill:"#3B82F6"}),n.jsx("path",{d:"M50,50 L13.03,25.98 A45,45 0 0,1 50,5 Z",fill:"#8B5CF6"}),n.jsx("circle",{cx:"50",cy:"50",r:"9",fill:"#111827",stroke:"white",strokeWidth:"2"})]})})}function Gx(){const e=Te(),{pathname:t}=Xe(),r=d.useRef({}),s=d.useRef({}),[a,o]=d.useState(!1),i=d.useRef(null),l=x=>{if(navigator.vibrate)switch(x){case"light":navigator.vibrate(20);break;case"medium":navigator.vibrate(35);break;case"heavy":navigator.vibrate(50);break;case"double":navigator.vibrate([30,50,30]);break;case"success":navigator.vibrate([20,50,20,50,20]);break;default:navigator.vibrate(25)}};d.useCallback(()=>{var x;if(["/","/play","/swipe","/profile"].includes(t)){const N=((x=i.current)==null?void 0:x.scrollTop)||0,C=window.scrollY||window.pageYOffset||0,R=N>0?N:C;console.log(`Saving scroll for ${t}: main=${N}, window=${C}, saved=${R}`),r.current[t]=R}},[t]),d.useEffect(()=>{let x=null;const N=()=>{x&&cancelAnimationFrame(x),x=requestAnimationFrame(()=>{var R;if(["/","/play","/swipe","/profile"].includes(t)){const T=((R=i.current)==null?void 0:R.scrollTop)||0,h=window.scrollY||window.pageYOffset||0,b=T>0?T:h;r.current[t]=b,console.log(`Scroll position updated for ${t}: ${b}`)}})};window.addEventListener("scroll",N,{passive:!0});const C=i.current;return C&&C.addEventListener("scroll",N,{passive:!0}),()=>{x&&cancelAnimationFrame(x),window.removeEventListener("scroll",N),C&&C.removeEventListener("scroll",N)}},[t]),d.useEffect(()=>{if(i.current&&i.current.classList.add("navigating"),["/profile/","/quiz/","/practice/","/play/classic","/settings","/about"].some(C=>t.startsWith(C)))window.scrollTo(0,0),i.current&&(i.current.scrollTop=0),setTimeout(()=>{i.current&&i.current.classList.remove("navigating")},20);else{const C=r.current[t];if(console.log(`Attempting to restore scroll for ${t}: ${C}`),C!=null&&C>0){const R=(T=0)=>{T>=5||(i.current?(i.current.scrollTop=C,setTimeout(()=>{var b;const h=((b=i.current)==null?void 0:b.scrollTop)||0;Math.abs(h-C)>10?(window.scrollTo(0,C),setTimeout(()=>{const k=window.scrollY||window.pageYOffset||0;console.log(`Restore attempt ${T+1}: main=${h}, window=${k}, target=${C}`),Math.abs(k-C)>10&&Math.abs(h-C)>10&&R(T+1)},20)):console.log(`Successfully restored scroll to ${h}`)},20)):window.scrollTo(0,C))};R(0),setTimeout(()=>{i.current&&i.current.classList.remove("navigating")},20)}else window.scrollTo(0,0),i.current&&(i.current.scrollTop=0),setTimeout(()=>{i.current&&i.current.classList.remove("navigating")},20)}},[t]),d.useEffect(()=>{const x=i.current;if(!x)return;let N=null,C=!1;const R=()=>{C||(x.classList.add("is-scrolling"),C=!0),clearTimeout(N);const T=x.scrollTop,h=x.scrollHeight,b=x.clientHeight;T<=0?x.style.transform="translateY(2px)":T+b>=h?x.style.transform="translateY(-2px)":x.style.transform="translateY(0)",N=setTimeout(()=>{x.classList.remove("is-scrolling"),x.style.transform="translateY(0)",C=!1},150)};return x.addEventListener("scroll",R,{passive:!0}),x.style.transition="transform 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55)",()=>{x.removeEventListener("scroll",R),clearTimeout(N)}},[]);const[c,u]=d.useState(!1),[m,p]=d.useState({open:!1,go:null}),[f,w]=d.useState(!1);d.useEffect(()=>{const x=()=>{w(document.body.classList.contains("hide-bottom-nav"))};x();const N=new MutationObserver(x);return N.observe(document.body,{attributes:!0,attributeFilter:["class"]}),()=>N.disconnect()},[]),d.useEffect(()=>{const x=new MutationObserver(()=>{u(document.body.classList.contains("modal-open"))});return x.observe(document.body,{attributes:!0,attributeFilter:["class"]}),()=>x.disconnect()},[]);const j=c||f||[/^\/quiz\//,/^\/practice\//,/^\/profile\//,/^\/play\/classic/].some(x=>x.test(t)),S=x=>x==="/"?t==="/":t.startsWith(x),y=d.useCallback(()=>{console.log("Scrolling to top"),window.scrollTo({top:0,behavior:"smooth"}),i.current&&i.current.scrollTo({top:0,behavior:"smooth"}),document.documentElement.scrollTop=0,document.body.scrollTop=0},[]),v=({path:x,icon:N,label:C,emoji:R})=>{const T=S(x),[h,b]=d.useState(!1),k=d.useCallback(()=>{var V;const _=Date.now();if(T){const K=s.current[x]||0;console.log(`Active tab clicked. Time since last tap: ${_-K}ms`),_-K<500?(console.log("Double tap detected!"),y(),l("double"),s.current[x]=0):s.current[x]=_;return}if(["/","/play","/swipe","/profile"].includes(t)){const K=((V=i.current)==null?void 0:V.scrollTop)||0,U=window.scrollY||window.pageYOffset||0,M=K>0?K:U;console.log(`Manually saving scroll before navigation from ${t}: ${M}`),r.current[t]=M}const A=s.current[x]||0;if(_-A<500){console.log("Double tap on inactive tab - navigating and scrolling to top"),r.current[x]=0,x==="/play"?(o(!0),l("double"),setTimeout(()=>{e(`/play?view=modes&reset=${Date.now()}`),o(!1),setTimeout(y,100)},200)):(l("double"),e(x),setTimeout(y,100)),s.current[x]=0;return}s.current[x]=_,b(!0),setTimeout(()=>b(!1),600);const q=()=>{if(x==="/play"){o(!0),l("heavy"),setTimeout(()=>{e(`/play?view=modes&reset=${Date.now()}`),o(!1)},200);return}l("medium"),e(x)};if(localStorage.getItem("qp_in_question")==="true"){p({open:!0,go:q});return}q()},[T,x,t,e,y,l]);return n.jsxs("button",{type:"button",onClick:k,className:`group relative flex h-14 w-20 flex-col items-center justify-center rounded-xl transition-all
          ${T?"scale-110":"scale-100 hover:scale-105"}
          ${h?"animate-bounce":""}`,"aria-current":T?"page":void 0,children:[T&&n.jsxs(n.Fragment,{children:[n.jsx("span",{className:"absolute -top-2 h-1.5 w-10 rounded-full bg-gradient-to-r from-transparent via-white to-transparent opacity-60"}),n.jsx("div",{className:"absolute inset-0 rounded-xl bg-white/10 blur-xl"})]}),n.jsx("div",{className:`leading-none text-2xl transition-transform ${T?"scale-125":""} ${x==="/play"&&a?"animate-spin":""}`,children:R||N}),n.jsx("span",{className:`mt-1 text-[10px] font-medium transition-all ${T?"text-white":"text-base-muted/80"}`,children:C})]})};return n.jsxs("div",{className:"min-h-screen bg-base-bg text-base-text",children:[n.jsx("style",{children:`
      .hide-bottom-nav nav[role="navigation"] {
      display: none !important;
      }
      main.navigating {
        visibility: hidden;
      }
    `}),n.jsx("main",{ref:i,className:"mx-auto w-full max-w-none px-1 sm:px-3 md:px-4",style:{height:j||document.body.classList.contains("hide-bottom-nav")?"100dvh":"calc(100dvh - (5.5rem + env(safe-area-inset-bottom)))",paddingTop:"calc(env(safe-area-inset-top) + 12px)",paddingBottom:j||document.body.classList.contains("hide-bottom-nav")?0:void 0,overflowY:"scroll",WebkitOverflowScrolling:"touch",overscrollBehavior:"none",scrollBehavior:"smooth",transform:"translate3d(0,0,0)",WebkitTransform:"translate3d(0,0,0)",backfaceVisibility:"hidden",WebkitBackfaceVisibility:"hidden",perspective:1e3,willChange:"transform"},children:n.jsx(cx,{})}),m.open&&n.jsxs("div",{className:"fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center px-6",style:{animation:"fadeIn 0.2s ease-out"},children:[n.jsxs("div",{className:"w-full max-w-sm rounded-3xl bg-gradient-to-b from-base-card to-base-card/90 border border-base-border p-6 text-center shadow-2xl",style:{animation:"slideUp 0.3s ease-out"},children:[n.jsx("div",{className:"text-5xl mb-4",style:{animation:"bounce 0.6s ease-out"},children:"😟"}),n.jsx("div",{className:"text-xl font-bold mb-2 bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent",children:"Leave the game?"}),n.jsx("p",{className:"text-base-muted mb-6 text-sm",children:"You'll lose your current progress!"}),n.jsxs("div",{className:"flex gap-3",children:[n.jsx("button",{onClick:()=>{l("medium"),p({open:!1,go:null})},className:"flex-1 py-3 rounded-2xl border-2 border-green-500/30 bg-green-500/10 hover:bg-green-500/20 transition-all font-semibold text-green-400",children:"Keep Playing! 🎮"}),n.jsx("button",{onClick:()=>{l("heavy");const x=m.go;p({open:!1,go:null}),x==null||x()},className:"flex-1 py-3 rounded-2xl bg-gradient-to-r from-red-500/80 to-orange-500/80 text-white font-semibold hover:from-red-500 hover:to-orange-500 transition-all",children:"Leave 👋"})]})]}),n.jsx("style",{children:`
            @keyframes fadeIn {
              from { opacity: 0; }
              to { opacity: 1; }
            }
            @keyframes slideUp {
              from { transform: translateY(20px); opacity: 0; }
              to { transform: translateY(0); opacity: 1; }
            }
          `})]}),!j&&n.jsxs("nav",{role:"navigation","aria-label":"Bottom navigation",className:"fixed inset-x-0 bottom-0 z-50",children:[n.jsx("div",{className:"absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0B0F1A] to-[#0B0F1A]/95 backdrop-blur-lg",style:{height:"calc(5.5rem + env(safe-area-inset-bottom))"},"aria-hidden":!0}),n.jsx("div",{className:"relative mx-auto max-w-md px-4 pb-[calc(env(safe-area-inset-bottom)+0.5rem)] pt-2",children:n.jsxs("div",{className:"relative",children:[n.jsx("div",{className:"absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-green-500/20 blur-2xl"}),n.jsxs("div",{className:"relative flex h-[72px] items-center justify-around rounded-3xl border border-white/10 bg-gradient-to-b from-base-card/95 to-base-card/80 shadow-2xl backdrop-blur-xl",children:[n.jsx(v,{path:"/",emoji:"🏠",label:"Home"}),n.jsx(v,{path:"/play",icon:n.jsx(Wx,{size:26,spinning:a}),label:"Play"}),n.jsx(v,{path:"/swipe",emoji:"📚",label:"Swipe"}),n.jsx(v,{path:"/profile",emoji:"👤",label:"Profile"})]})]})})]})]})}function lo(){return lo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var s in r)({}).hasOwnProperty.call(r,s)&&(e[s]=r[s])}return e},lo.apply(null,arguments)}function Hx(e,t){if(e==null)return{};var r={};for(var s in e)if({}.hasOwnProperty.call(e,s)){if(t.indexOf(s)!==-1)continue;r[s]=e[s]}return r}function Kx(e){d.useEffect(e,[])}var Vx=["id","volume","playbackRate","soundEnabled","interrupt","onload"];function tt(e,t){var r=t===void 0?{}:t,s=r.volume,a=s===void 0?1:s,o=r.playbackRate,i=o===void 0?1:o,l=r.soundEnabled,c=l===void 0?!0:l,u=r.interrupt,m=u===void 0?!1:u,p=r.onload,f=Hx(r,Vx),w=gt.useRef(null),g=gt.useRef(!1),j=gt.useState(null),S=j[0],y=j[1],v=gt.useState(null),x=v[0],N=v[1],C=function(){typeof p=="function"&&p.call(this),g.current&&y(this.duration()*1e3),N(this)};Kx(function(){return tc(()=>import("./howler-f57da863.js").then(k=>k.h),[]).then(function(k){if(!g.current){var _;w.current=(_=k.Howl)!==null&&_!==void 0?_:k.default.Howl,g.current=!0,new w.current(lo({src:Array.isArray(e)?e:[e],volume:a,rate:i,onload:C},f))}}),function(){g.current=!1}}),gt.useEffect(function(){w.current&&x&&N(new w.current(lo({src:Array.isArray(e)?e:[e],volume:a,onload:C},f)))},[JSON.stringify(e)]),gt.useEffect(function(){x&&(x.volume(a),f.sprite||x.rate(i))},[x,a,i]);var R=gt.useCallback(function(k){typeof k>"u"&&(k={}),!(!x||!c&&!k.forceSoundEnabled)&&(m&&x.stop(),k.playbackRate&&x.rate(k.playbackRate),x.play(k.id))},[x,c,m]),T=gt.useCallback(function(k){x&&x.stop(k)},[x]),h=gt.useCallback(function(k){x&&x.pause(k)},[x]),b=[R,{sound:x,stop:T,pause:h,duration:S}];return b}class Xx{constructor(){console.log("UserService initialized")}getUserData(t){try{if(!t)return console.log("No phone provided to getUserData"),null;const s=JSON.parse(localStorage.getItem("users")||"{}")[t]||{},a=JSON.parse(localStorage.getItem(`user_profile_${t}`)||"{}"),o={...s,phone:t,username:a.name||s.username||"",email:a.email||"",city:a.city||"",state:a.state||"",country:a.country||""};return console.log("getUserData merged result:",o),o}catch(r){return console.error("Error in getUserData:",r),null}}getUserDataByIdentifier(t){try{const r=this.getUserData(t);if(r)return r;const s=JSON.parse(localStorage.getItem("users")||"{}");for(let a in s)if(s[a].username===t)return this.getUserData(a);return null}catch(r){return console.error("Error in getUserDataByIdentifier:",r),null}}userExists(t){try{return JSON.parse(localStorage.getItem("users")||"{}").hasOwnProperty(t)}catch(r){return console.error("Error checking if user exists:",r),!1}}createUser(t,r){try{console.log("Creating user:",t,r);const s=JSON.parse(localStorage.getItem("users")||"{}");return s[t]={username:r.username,password:r.password||"123456",avatar:r.avatar,gender:r.gender,ageGroup:r.ageGroup,phone:t,createdAt:new Date().toISOString()},localStorage.setItem("users",JSON.stringify(s)),this.setCurrentUser(t),console.log("User created successfully"),!0}catch(s){return console.error("Error creating user:",s),!1}}setCurrentUser(t){try{const r=this.getUserData(t);if(!r)return!1;const s={phone:t,username:r.username,avatar:r.avatar,gender:r.gender,ageGroup:r.ageGroup};localStorage.setItem("currentUser",JSON.stringify(s));const a=JSON.parse(localStorage.getItem("qp_player")||"{}");return a.name=r.username,localStorage.setItem("qp_player",JSON.stringify(a)),console.log("Current user set:",s),!0}catch(r){return console.error("Error setting current user:",r),!1}}updateUserProfile(t,r){try{if(console.log("Updating profile for:",t,r),r.name){const l=JSON.parse(localStorage.getItem("users")||"{}");if(l[t]){l[t].username=r.name;const c=l[t].password;l[t].password=c,localStorage.setItem("users",JSON.stringify(l))}}const s=`user_profile_${t}`,o={...JSON.parse(localStorage.getItem(s)||"{}"),...r};localStorage.setItem(s,JSON.stringify(o));const i=JSON.parse(localStorage.getItem("currentUser")||"{}");if(i.phone===t){i.username=r.name||i.username,localStorage.setItem("currentUser",JSON.stringify(i));const l=JSON.parse(localStorage.getItem("qp_player")||"{}");l.name=r.name||l.name,localStorage.setItem("qp_player",JSON.stringify(l))}return console.log("Profile updated successfully"),!0}catch(s){return console.error("Error updating profile:",s),!1}}getCurrentUser(){try{const t=JSON.parse(localStorage.getItem("currentUser")||"{}");return t.phone?this.getUserData(t.phone):null}catch(t){return console.error("Error getting current user:",t),null}}signOut(){try{return localStorage.removeItem("currentUser"),localStorage.removeItem("rememberCredentials"),sessionStorage.clear(),console.log("User signed out"),!0}catch(t){return console.error("Error signing out:",t),!1}}}const Ke=new Xx;window.userService=Ke;class Jx{constructor(){this.STORAGE_KEYS={COINS:"qp_coins",XP:"qp_xp",LEVEL:"qp_level",OWNED_CHARACTERS:"owned_characters",SOUND:"play_sound_on",GAME_STATS:"game_stats_",DAILY_PROGRESS:"daily_progress_",QUEST_DATA:"quest_data_",STREAK_DATA:"streak_data_",GAME_HISTORY:"game_history_",QUIZ_RESULTS:"quiz_current_results"}}getCoins(){return this.safeGet(this.STORAGE_KEYS.COINS,0)}setCoins(t){return this.safeSet(this.STORAGE_KEYS.COINS,t),t}addCoins(t,r=""){const a=this.getCoins()+t;this.setCoins(a);const o=Ke.getCurrentUser();return o!=null&&o.phone&&(this.logCoinTransaction(o.phone,t,r),this.updateDailyCoins(o.phone,t)),a}spendCoins(t,r=""){const s=this.getCoins();if(s<t)return!1;const a=s-t;this.setCoins(a);const o=Ke.getCurrentUser();return o!=null&&o.phone&&this.logCoinTransaction(o.phone,-t,r),!0}getXP(){return this.safeGet(this.STORAGE_KEYS.XP,0)}setXP(t){return this.safeSet(this.STORAGE_KEYS.XP,t),t}addXP(t){const s=this.getXP()+t;this.setXP(s),this.checkAndUpdateLevel(s);const a=Ke.getCurrentUser();return a!=null&&a.phone&&this.updateDailyXP(a.phone,t),s}getLevel(){return this.safeGet(this.STORAGE_KEYS.LEVEL,1)}setLevel(t){return this.safeSet(this.STORAGE_KEYS.LEVEL,t),t}checkAndUpdateLevel(t=null){const r=t||this.getXP(),s=this.getLevel();let a=1,o=0;for(;o<=r;)a++,o=100*a*(a-1);if(a--,a>s){this.setLevel(a);const i=50*(a-s);return this.addCoins(i,`Level up to ${a}!`),!0}return!1}initializeUserData(t){if(!t)return;const r=this.getUserStats(t);if(r)return r;const s={stats:{totalQuizzes:0,totalPractice:0,totalCorrect:0,totalWrong:0,winStreak:0,bestStreak:0,highScore:0,gamesPlayed:0},quests:{daily:[{id:"quiz_3",type:"quiz",target:3,current:0,reward:60,completed:!1},{id:"practice_15",type:"practice",target:15,current:0,reward:100,completed:!1},{id:"win_5",type:"win_streak",target:5,current:0,reward:150,completed:!1},{id:"speed_run",type:"speed_run",target:1,current:0,reward:80,completed:!1}]},streak:{current:0,lastPlayedDate:null,longestStreak:0}};return this.safeSet(this.STORAGE_KEYS.GAME_STATS+t,s.stats),this.safeSet(this.STORAGE_KEYS.QUEST_DATA+t,s.quests),this.safeSet(this.STORAGE_KEYS.STREAK_DATA+t,s.streak),this.resetDailyProgress(t),s}getUserStats(t){return t?this.safeGet(this.STORAGE_KEYS.GAME_STATS+t,null):null}updateUserStats(t,r){if(!t)return null;const a={...this.getUserStats(t)||{},...r};return this.safeSet(this.STORAGE_KEYS.GAME_STATS+t,a),a}getDailyProgress(t){if(!t)return null;const r=this.safeGet(this.STORAGE_KEYS.DAILY_PROGRESS+t,null),s=new Date().toDateString();return!r||r.date!==s?this.resetDailyProgress(t):r}resetDailyProgress(t){if(!t)return null;const r={date:new Date().toDateString(),quizzesPlayed:0,practiceCompleted:0,coinsEarned:0,xpEarned:0,questsCompleted:[]};return this.safeSet(this.STORAGE_KEYS.DAILY_PROGRESS+t,r),this.resetDailyQuests(t),r}updateDailyCoins(t,r){if(!t)return;const s=this.getDailyProgress(t);s&&(s.coinsEarned+=r,this.safeSet(this.STORAGE_KEYS.DAILY_PROGRESS+t,s))}updateDailyXP(t,r){if(!t)return;const s=this.getDailyProgress(t);s&&(s.xpEarned+=r,this.safeSet(this.STORAGE_KEYS.DAILY_PROGRESS+t,s))}getQuestData(t){return t?this.safeGet(this.STORAGE_KEYS.QUEST_DATA+t,null):null}resetDailyQuests(t){if(!t)return null;const r={daily:[{id:"quiz_3",type:"quiz",target:3,current:0,reward:60,completed:!1},{id:"practice_15",type:"practice",target:15,current:0,reward:100,completed:!1},{id:"win_5",type:"win_streak",target:5,current:0,reward:150,completed:!1},{id:"speed_run",type:"speed_run",target:1,current:0,reward:80,completed:!1}]};return this.safeSet(this.STORAGE_KEYS.QUEST_DATA+t,r),r}updateQuestProgress(t,r,s=1){if(!t)return null;const a=this.getQuestData(t);if(!(a!=null&&a.daily))return null;let o=0;const i={...a,daily:a.daily.map(l=>{if(l.type===r&&!l.completed){const c=Math.min(l.current+s,l.target),u=c>=l.target;return u&&!l.completed&&(o+=l.reward,this.addCoins(l.reward,`Quest completed: ${l.id}`)),{...l,current:c,completed:u}}return l})};return this.safeSet(this.STORAGE_KEYS.QUEST_DATA+t,i),{updatedQuests:i,coinsEarned:o}}getStreakData(t){return t?this.safeGet(this.STORAGE_KEYS.STREAK_DATA+t,{current:0,lastPlayedDate:null,longestStreak:0}):null}updateStreak(t){if(!t)return null;const r=this.getStreakData(t),s=new Date().toDateString(),a=new Date(Date.now()-864e5).toDateString();return r.lastPlayedDate===s||(r.lastPlayedDate===a?r.current++:r.current=1,r.lastPlayedDate=s,r.longestStreak=Math.max(r.current,r.longestStreak),this.safeSet(this.STORAGE_KEYS.STREAK_DATA+t,r),r.current%7===0&&this.addCoins(100,"7-day streak bonus!")),r}recordQuizSession(t,r){const{score:s,totalQuestions:a,category:o,difficulty:i="medium",mode:l="classic"}=r,m=s*5+(s===a?20:0),p=s*10;if(this.addCoins(m,`Quiz: ${s}/${a}`),this.addXP(p),t){const f=this.getUserStats(t)||this.initializeUserData(t).stats;f.totalQuizzes++,f.totalCorrect+=s,f.totalWrong+=a-s,f.gamesPlayed++,s>=a*.7?(f.winStreak++,f.bestStreak=Math.max(f.winStreak,f.bestStreak)):f.winStreak=0,f.highScore=Math.max(f.highScore,s),this.updateUserStats(t,f);const w=this.getDailyProgress(t);w.quizzesPlayed++,this.safeSet(this.STORAGE_KEYS.DAILY_PROGRESS+t,w),this.updateQuestProgress(t,"quiz",1),f.winStreak>=5&&this.updateQuestProgress(t,"win_streak",f.winStreak),this.updateStreak(t),this.addToHistory(t,{type:"quiz",mode:l,category:o,score:s,totalQuestions:a,difficulty:i,coinsEarned:m,xpEarned:p,timestamp:new Date().toISOString()})}return{coinsEarned:m,xpEarned:p,newTotal:this.getCoins(),newXP:this.getXP(),newLevel:this.getLevel()}}recordPracticeSession(t,r){const{questionsCompleted:s,correctAnswers:a,category:o="general"}=r,i=s*2,l=s*5;if(this.addCoins(i,`Practice: ${s} questions`),this.addXP(l),t){const c=this.getUserStats(t)||this.initializeUserData(t).stats;c.totalPractice+=s,c.totalCorrect+=a,c.totalWrong+=s-a,this.updateUserStats(t,c);const u=this.getDailyProgress(t);u.practiceCompleted+=s,this.safeSet(this.STORAGE_KEYS.DAILY_PROGRESS+t,u),this.updateQuestProgress(t,"practice",s),this.updateStreak(t),this.addToHistory(t,{type:"practice",category:o,questionsCompleted:s,correctAnswers:a,coinsEarned:i,xpEarned:l,timestamp:new Date().toISOString()})}return{coinsEarned:i,xpEarned:l,newTotal:this.getCoins(),newXP:this.getXP()}}getGameHistory(t){return t?this.safeGet(this.STORAGE_KEYS.GAME_HISTORY+t,[]):[]}addToHistory(t,r){if(!t)return;const s=this.getGameHistory(t);s.unshift(r),s.length>50&&s.pop(),this.safeSet(this.STORAGE_KEYS.GAME_HISTORY+t,s)}getTodaySummary(t){var a;const r=t||((a=Ke.getCurrentUser())==null?void 0:a.phone),s={totalCoins:this.getCoins(),totalXP:this.getXP(),level:this.getLevel(),xpProgress:this.getXP()%100,xpNeeded:100,todayCoins:0,todayXP:0,streak:0,questProgress:0,activeQuests:0};if(r){const o=this.getDailyProgress(r),i=this.getStreakData(r),l=this.getQuestData(r),c=this.getUserStats(r);if(o&&(s.todayCoins=o.coinsEarned,s.todayXP=o.xpEarned),i&&(s.streak=i.current),l!=null&&l.daily){const u=l.daily.filter(m=>m.completed).length;s.questProgress=Math.round(u/l.daily.length*100),s.activeQuests=l.daily.filter(m=>!m.completed).length}c&&(s.rank=23,s.winStreak=c.winStreak)}return s}logCoinTransaction(t,r,s){if(!t)return;const a="coin_transactions_"+t,o=this.safeGet(a,[]);o.push({amount:r,reason:s,timestamp:new Date().toISOString(),balance:this.getCoins()}),o.length>100&&o.shift(),this.safeSet(a,o)}storeCurrentResults(t){return this.safeSet(this.STORAGE_KEYS.QUIZ_RESULTS,{...t,timestamp:Date.now(),expiresAt:Date.now()+30*60*1e3}),!0}getCurrentResults(){const t=this.safeGet(this.STORAGE_KEYS.QUIZ_RESULTS,null);return t?t.expiresAt&&t.expiresAt<Date.now()?(this.clearCurrentResults(),null):t:null}clearCurrentResults(){localStorage.removeItem(this.STORAGE_KEYS.QUIZ_RESULTS)}safeGet(t,r=null){try{const s=localStorage.getItem(t);return s?JSON.parse(s):r}catch{return r}}safeSet(t,r){try{return localStorage.setItem(t,JSON.stringify(r)),!0}catch{return!1}}clearAllData(){Object.values(this.STORAGE_KEYS).forEach(t=>{typeof t=="string"&&!t.includes("_")&&localStorage.removeItem(t)})}clearUserData(t){if(!t)return;[this.STORAGE_KEYS.GAME_STATS+t,this.STORAGE_KEYS.DAILY_PROGRESS+t,this.STORAGE_KEYS.QUEST_DATA+t,this.STORAGE_KEYS.STREAK_DATA+t,this.STORAGE_KEYS.GAME_HISTORY+t,"coin_transactions_"+t].forEach(s=>localStorage.removeItem(s))}}const ae=new Jx;var Tf={exports:{}};/* @license
Papa Parse
v5.5.3
https://github.com/mholt/PapaParse
License: MIT
*/(function(e,t){((r,s)=>{e.exports=s()})(Uf,function r(){var s=typeof self<"u"?self:typeof window<"u"?window:s!==void 0?s:{},a,o=!s.document&&!!s.postMessage,i=s.IS_PAPA_WORKER||!1,l={},c=0,u={};function m(h){this._handle=null,this._finished=!1,this._completed=!1,this._halted=!1,this._input=null,this._baseIndex=0,this._partialLine="",this._rowCount=0,this._start=0,this._nextChunk=null,this.isFirstChunk=!0,this._completeResults={data:[],errors:[],meta:{}},(function(b){var k=C(b);k.chunkSize=parseInt(k.chunkSize),b.step||b.chunk||(k.chunkSize=null),this._handle=new j(k),(this._handle.streamer=this)._config=k}).call(this,h),this.parseChunk=function(b,k){var _=parseInt(this._config.skipFirstNLines)||0;if(this.isFirstChunk&&0<_){let q=this._config.newline;q||(A=this._config.quoteChar||'"',q=this._handle.guessLineEndings(b,A)),b=[...b.split(q).slice(_)].join(q)}this.isFirstChunk&&T(this._config.beforeFirstChunk)&&(A=this._config.beforeFirstChunk(b))!==void 0&&(b=A),this.isFirstChunk=!1,this._halted=!1;var _=this._partialLine+b,A=(this._partialLine="",this._handle.parse(_,this._baseIndex,!this._finished));if(!this._handle.paused()&&!this._handle.aborted()){if(b=A.meta.cursor,_=(this._finished||(this._partialLine=_.substring(b-this._baseIndex),this._baseIndex=b),A&&A.data&&(this._rowCount+=A.data.length),this._finished||this._config.preview&&this._rowCount>=this._config.preview),i)s.postMessage({results:A,workerId:u.WORKER_ID,finished:_});else if(T(this._config.chunk)&&!k){if(this._config.chunk(A,this._handle),this._handle.paused()||this._handle.aborted())return void(this._halted=!0);this._completeResults=A=void 0}return this._config.step||this._config.chunk||(this._completeResults.data=this._completeResults.data.concat(A.data),this._completeResults.errors=this._completeResults.errors.concat(A.errors),this._completeResults.meta=A.meta),this._completed||!_||!T(this._config.complete)||A&&A.meta.aborted||(this._config.complete(this._completeResults,this._input),this._completed=!0),_||A&&A.meta.paused||this._nextChunk(),A}this._halted=!0},this._sendError=function(b){T(this._config.error)?this._config.error(b):i&&this._config.error&&s.postMessage({workerId:u.WORKER_ID,error:b,finished:!1})}}function p(h){var b;(h=h||{}).chunkSize||(h.chunkSize=u.RemoteChunkSize),m.call(this,h),this._nextChunk=o?function(){this._readChunk(),this._chunkLoaded()}:function(){this._readChunk()},this.stream=function(k){this._input=k,this._nextChunk()},this._readChunk=function(){if(this._finished)this._chunkLoaded();else{if(b=new XMLHttpRequest,this._config.withCredentials&&(b.withCredentials=this._config.withCredentials),o||(b.onload=R(this._chunkLoaded,this),b.onerror=R(this._chunkError,this)),b.open(this._config.downloadRequestBody?"POST":"GET",this._input,!o),this._config.downloadRequestHeaders){var k,_=this._config.downloadRequestHeaders;for(k in _)b.setRequestHeader(k,_[k])}var A;this._config.chunkSize&&(A=this._start+this._config.chunkSize-1,b.setRequestHeader("Range","bytes="+this._start+"-"+A));try{b.send(this._config.downloadRequestBody)}catch(q){this._chunkError(q.message)}o&&b.status===0&&this._chunkError()}},this._chunkLoaded=function(){b.readyState===4&&(b.status<200||400<=b.status?this._chunkError():(this._start+=this._config.chunkSize||b.responseText.length,this._finished=!this._config.chunkSize||this._start>=(k=>(k=k.getResponseHeader("Content-Range"))!==null?parseInt(k.substring(k.lastIndexOf("/")+1)):-1)(b),this.parseChunk(b.responseText)))},this._chunkError=function(k){k=b.statusText||k,this._sendError(new Error(k))}}function f(h){(h=h||{}).chunkSize||(h.chunkSize=u.LocalChunkSize),m.call(this,h);var b,k,_=typeof FileReader<"u";this.stream=function(A){this._input=A,k=A.slice||A.webkitSlice||A.mozSlice,_?((b=new FileReader).onload=R(this._chunkLoaded,this),b.onerror=R(this._chunkError,this)):b=new FileReaderSync,this._nextChunk()},this._nextChunk=function(){this._finished||this._config.preview&&!(this._rowCount<this._config.preview)||this._readChunk()},this._readChunk=function(){var A=this._input,q=(this._config.chunkSize&&(q=Math.min(this._start+this._config.chunkSize,this._input.size),A=k.call(A,this._start,q)),b.readAsText(A,this._config.encoding));_||this._chunkLoaded({target:{result:q}})},this._chunkLoaded=function(A){this._start+=this._config.chunkSize,this._finished=!this._config.chunkSize||this._start>=this._input.size,this.parseChunk(A.target.result)},this._chunkError=function(){this._sendError(b.error)}}function w(h){var b;m.call(this,h=h||{}),this.stream=function(k){return b=k,this._nextChunk()},this._nextChunk=function(){var k,_;if(!this._finished)return k=this._config.chunkSize,b=k?(_=b.substring(0,k),b.substring(k)):(_=b,""),this._finished=!b,this.parseChunk(_)}}function g(h){m.call(this,h=h||{});var b=[],k=!0,_=!1;this.pause=function(){m.prototype.pause.apply(this,arguments),this._input.pause()},this.resume=function(){m.prototype.resume.apply(this,arguments),this._input.resume()},this.stream=function(A){this._input=A,this._input.on("data",this._streamData),this._input.on("end",this._streamEnd),this._input.on("error",this._streamError)},this._checkIsFinished=function(){_&&b.length===1&&(this._finished=!0)},this._nextChunk=function(){this._checkIsFinished(),b.length?this.parseChunk(b.shift()):k=!0},this._streamData=R(function(A){try{b.push(typeof A=="string"?A:A.toString(this._config.encoding)),k&&(k=!1,this._checkIsFinished(),this.parseChunk(b.shift()))}catch(q){this._streamError(q)}},this),this._streamError=R(function(A){this._streamCleanUp(),this._sendError(A)},this),this._streamEnd=R(function(){this._streamCleanUp(),_=!0,this._streamData("")},this),this._streamCleanUp=R(function(){this._input.removeListener("data",this._streamData),this._input.removeListener("end",this._streamEnd),this._input.removeListener("error",this._streamError)},this)}function j(h){var b,k,_,A,q=Math.pow(2,53),H=-q,V=/^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/,K=/^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/,U=this,M=0,I=0,z=!1,D=!1,E=[],P={data:[],errors:[],meta:{}};function $(B){return h.skipEmptyLines==="greedy"?B.join("").trim()==="":B.length===1&&B[0].length===0}function Y(){if(P&&_&&(G("Delimiter","UndetectableDelimiter","Unable to auto-detect delimiting character; defaulted to '"+u.DefaultDelimiter+"'"),_=!1),h.skipEmptyLines&&(P.data=P.data.filter(function(Q){return!$(Q)})),L()){let Q=function(te,de){T(h.transformHeader)&&(te=h.transformHeader(te,de)),E.push(te)};if(P)if(Array.isArray(P.data[0])){for(var B=0;L()&&B<P.data.length;B++)P.data[B].forEach(Q);P.data.splice(0,1)}else P.data.forEach(Q)}function O(Q,te){for(var de=h.header?{}:[],re=0;re<Q.length;re++){var W=re,F=Q[re],F=((ne,ee)=>(oe=>(h.dynamicTypingFunction&&h.dynamicTyping[oe]===void 0&&(h.dynamicTyping[oe]=h.dynamicTypingFunction(oe)),(h.dynamicTyping[oe]||h.dynamicTyping)===!0))(ne)?ee==="true"||ee==="TRUE"||ee!=="false"&&ee!=="FALSE"&&((oe=>{if(V.test(oe)&&(oe=parseFloat(oe),H<oe&&oe<q))return 1})(ee)?parseFloat(ee):K.test(ee)?new Date(ee):ee===""?null:ee):ee)(W=h.header?re>=E.length?"__parsed_extra":E[re]:W,F=h.transform?h.transform(F,W):F);W==="__parsed_extra"?(de[W]=de[W]||[],de[W].push(F)):de[W]=F}return h.header&&(re>E.length?G("FieldMismatch","TooManyFields","Too many fields: expected "+E.length+" fields but parsed "+re,I+te):re<E.length&&G("FieldMismatch","TooFewFields","Too few fields: expected "+E.length+" fields but parsed "+re,I+te)),de}var X;P&&(h.header||h.dynamicTyping||h.transform)&&(X=1,!P.data.length||Array.isArray(P.data[0])?(P.data=P.data.map(O),X=P.data.length):P.data=O(P.data,0),h.header&&P.meta&&(P.meta.fields=E),I+=X)}function L(){return h.header&&E.length===0}function G(B,O,X,Q){B={type:B,code:O,message:X},Q!==void 0&&(B.row=Q),P.errors.push(B)}T(h.step)&&(A=h.step,h.step=function(B){P=B,L()?Y():(Y(),P.data.length!==0&&(M+=B.data.length,h.preview&&M>h.preview?k.abort():(P.data=P.data[0],A(P,U))))}),this.parse=function(B,O,X){var Q=h.quoteChar||'"',Q=(h.newline||(h.newline=this.guessLineEndings(B,Q)),_=!1,h.delimiter?T(h.delimiter)&&(h.delimiter=h.delimiter(B),P.meta.delimiter=h.delimiter):((Q=((te,de,re,W,F)=>{var ne,ee,oe,me;F=F||[",","	","|",";",u.RECORD_SEP,u.UNIT_SEP];for(var Se=0;Se<F.length;Se++){for(var Ee,be=F[Se],pe=0,Ne=0,xe=0,we=(oe=void 0,new y({comments:W,delimiter:be,newline:de,preview:10}).parse(te)),Ye=0;Ye<we.data.length;Ye++)re&&$(we.data[Ye])?xe++:(Ee=we.data[Ye].length,Ne+=Ee,oe===void 0?oe=Ee:0<Ee&&(pe+=Math.abs(Ee-oe),oe=Ee));0<we.data.length&&(Ne/=we.data.length-xe),(ee===void 0||pe<=ee)&&(me===void 0||me<Ne)&&1.99<Ne&&(ee=pe,ne=be,me=Ne)}return{successful:!!(h.delimiter=ne),bestDelimiter:ne}})(B,h.newline,h.skipEmptyLines,h.comments,h.delimitersToGuess)).successful?h.delimiter=Q.bestDelimiter:(_=!0,h.delimiter=u.DefaultDelimiter),P.meta.delimiter=h.delimiter),C(h));return h.preview&&h.header&&Q.preview++,b=B,k=new y(Q),P=k.parse(b,O,X),Y(),z?{meta:{paused:!0}}:P||{meta:{paused:!1}}},this.paused=function(){return z},this.pause=function(){z=!0,k.abort(),b=T(h.chunk)?"":b.substring(k.getCharIndex())},this.resume=function(){U.streamer._halted?(z=!1,U.streamer.parseChunk(b,!0)):setTimeout(U.resume,3)},this.aborted=function(){return D},this.abort=function(){D=!0,k.abort(),P.meta.aborted=!0,T(h.complete)&&h.complete(P),b=""},this.guessLineEndings=function(te,Q){te=te.substring(0,1048576);var Q=new RegExp(S(Q)+"([^]*?)"+S(Q),"gm"),X=(te=te.replace(Q,"")).split("\r"),Q=te.split(`
`),te=1<Q.length&&Q[0].length<X[0].length;if(X.length===1||te)return`
`;for(var de=0,re=0;re<X.length;re++)X[re][0]===`
`&&de++;return de>=X.length/2?`\r
`:"\r"}}function S(h){return h.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function y(h){var b=(h=h||{}).delimiter,k=h.newline,_=h.comments,A=h.step,q=h.preview,H=h.fastMode,V=null,K=!1,U=h.quoteChar==null?'"':h.quoteChar,M=U;if(h.escapeChar!==void 0&&(M=h.escapeChar),(typeof b!="string"||-1<u.BAD_DELIMITERS.indexOf(b))&&(b=","),_===b)throw new Error("Comment character same as delimiter");_===!0?_="#":(typeof _!="string"||-1<u.BAD_DELIMITERS.indexOf(_))&&(_=!1),k!==`
`&&k!=="\r"&&k!==`\r
`&&(k=`
`);var I=0,z=!1;this.parse=function(D,E,P){if(typeof D!="string")throw new Error("Input must be a string");var $=D.length,Y=b.length,L=k.length,G=_.length,B=T(A),O=[],X=[],Q=[],te=I=0;if(!D)return pe();if(H||H!==!1&&D.indexOf(U)===-1){for(var de=D.split(k),re=0;re<de.length;re++){if(Q=de[re],I+=Q.length,re!==de.length-1)I+=k.length;else if(P)return pe();if(!_||Q.substring(0,G)!==_){if(B){if(O=[],me(Q.split(b)),Ne(),z)return pe()}else me(Q.split(b));if(q&&q<=re)return O=O.slice(0,q),pe(!0)}}return pe()}for(var W=D.indexOf(b,I),F=D.indexOf(k,I),ne=new RegExp(S(M)+S(U),"g"),ee=D.indexOf(U,I);;)if(D[I]===U)for(ee=I,I++;;){if((ee=D.indexOf(U,ee+1))===-1)return P||X.push({type:"Quotes",code:"MissingQuotes",message:"Quoted field unterminated",row:O.length,index:I}),Ee();if(ee===$-1)return Ee(D.substring(I,ee).replace(ne,U));if(U===M&&D[ee+1]===M)ee++;else if(U===M||ee===0||D[ee-1]!==M){W!==-1&&W<ee+1&&(W=D.indexOf(b,ee+1));var oe=Se((F=F!==-1&&F<ee+1?D.indexOf(k,ee+1):F)===-1?W:Math.min(W,F));if(D.substr(ee+1+oe,Y)===b){Q.push(D.substring(I,ee).replace(ne,U)),D[I=ee+1+oe+Y]!==U&&(ee=D.indexOf(U,I)),W=D.indexOf(b,I),F=D.indexOf(k,I);break}if(oe=Se(F),D.substring(ee+1+oe,ee+1+oe+L)===k){if(Q.push(D.substring(I,ee).replace(ne,U)),be(ee+1+oe+L),W=D.indexOf(b,I),ee=D.indexOf(U,I),B&&(Ne(),z))return pe();if(q&&O.length>=q)return pe(!0);break}X.push({type:"Quotes",code:"InvalidQuotes",message:"Trailing quote on quoted field is malformed",row:O.length,index:I}),ee++}}else if(_&&Q.length===0&&D.substring(I,I+G)===_){if(F===-1)return pe();I=F+L,F=D.indexOf(k,I),W=D.indexOf(b,I)}else if(W!==-1&&(W<F||F===-1))Q.push(D.substring(I,W)),I=W+Y,W=D.indexOf(b,I);else{if(F===-1)break;if(Q.push(D.substring(I,F)),be(F+L),B&&(Ne(),z))return pe();if(q&&O.length>=q)return pe(!0)}return Ee();function me(xe){O.push(xe),te=I}function Se(xe){var we=0;return we=xe!==-1&&(xe=D.substring(ee+1,xe))&&xe.trim()===""?xe.length:we}function Ee(xe){return P||(xe===void 0&&(xe=D.substring(I)),Q.push(xe),I=$,me(Q),B&&Ne()),pe()}function be(xe){I=xe,me(Q),Q=[],F=D.indexOf(k,I)}function pe(xe){if(h.header&&!E&&O.length&&!K){var we=O[0],Ye=Object.create(null),nt=new Set(we);let Ae=!1;for(let Qe=0;Qe<we.length;Qe++){let Je=we[Qe];if(Ye[Je=T(h.transformHeader)?h.transformHeader(Je,Qe):Je]){let Lt,Me=Ye[Je];for(;Lt=Je+"_"+Me,Me++,nt.has(Lt););nt.add(Lt),we[Qe]=Lt,Ye[Je]++,Ae=!0,(V=V===null?{}:V)[Lt]=Je}else Ye[Je]=1,we[Qe]=Je;nt.add(Je)}Ae&&console.warn("Duplicate headers found and renamed."),K=!0}return{data:O,errors:X,meta:{delimiter:b,linebreak:k,aborted:z,truncated:!!xe,cursor:te+(E||0),renamedHeaders:V}}}function Ne(){A(pe()),O=[],X=[]}},this.abort=function(){z=!0},this.getCharIndex=function(){return I}}function v(h){var b=h.data,k=l[b.workerId],_=!1;if(b.error)k.userError(b.error,b.file);else if(b.results&&b.results.data){var A={abort:function(){_=!0,x(b.workerId,{data:[],errors:[],meta:{aborted:!0}})},pause:N,resume:N};if(T(k.userStep)){for(var q=0;q<b.results.data.length&&(k.userStep({data:b.results.data[q],errors:b.results.errors,meta:b.results.meta},A),!_);q++);delete b.results}else T(k.userChunk)&&(k.userChunk(b.results,A,b.file),delete b.results)}b.finished&&!_&&x(b.workerId,b.results)}function x(h,b){var k=l[h];T(k.userComplete)&&k.userComplete(b),k.terminate(),delete l[h]}function N(){throw new Error("Not implemented.")}function C(h){if(typeof h!="object"||h===null)return h;var b,k=Array.isArray(h)?[]:{};for(b in h)k[b]=C(h[b]);return k}function R(h,b){return function(){h.apply(b,arguments)}}function T(h){return typeof h=="function"}return u.parse=function(h,b){var k=(b=b||{}).dynamicTyping||!1;if(T(k)&&(b.dynamicTypingFunction=k,k={}),b.dynamicTyping=k,b.transform=!!T(b.transform)&&b.transform,!b.worker||!u.WORKERS_SUPPORTED)return k=null,u.NODE_STREAM_INPUT,typeof h=="string"?(h=(_=>_.charCodeAt(0)!==65279?_:_.slice(1))(h),k=new(b.download?p:w)(b)):h.readable===!0&&T(h.read)&&T(h.on)?k=new g(b):(s.File&&h instanceof File||h instanceof Object)&&(k=new f(b)),k.stream(h);(k=(()=>{var _;return!!u.WORKERS_SUPPORTED&&(_=(()=>{var A=s.URL||s.webkitURL||null,q=r.toString();return u.BLOB_URL||(u.BLOB_URL=A.createObjectURL(new Blob(["var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; ","(",q,")();"],{type:"text/javascript"})))})(),(_=new s.Worker(_)).onmessage=v,_.id=c++,l[_.id]=_)})()).userStep=b.step,k.userChunk=b.chunk,k.userComplete=b.complete,k.userError=b.error,b.step=T(b.step),b.chunk=T(b.chunk),b.complete=T(b.complete),b.error=T(b.error),delete b.worker,k.postMessage({input:h,config:b,workerId:k.id})},u.unparse=function(h,b){var k=!1,_=!0,A=",",q=`\r
`,H='"',V=H+H,K=!1,U=null,M=!1,I=((()=>{if(typeof b=="object"){if(typeof b.delimiter!="string"||u.BAD_DELIMITERS.filter(function(E){return b.delimiter.indexOf(E)!==-1}).length||(A=b.delimiter),typeof b.quotes!="boolean"&&typeof b.quotes!="function"&&!Array.isArray(b.quotes)||(k=b.quotes),typeof b.skipEmptyLines!="boolean"&&typeof b.skipEmptyLines!="string"||(K=b.skipEmptyLines),typeof b.newline=="string"&&(q=b.newline),typeof b.quoteChar=="string"&&(H=b.quoteChar),typeof b.header=="boolean"&&(_=b.header),Array.isArray(b.columns)){if(b.columns.length===0)throw new Error("Option columns is empty");U=b.columns}b.escapeChar!==void 0&&(V=b.escapeChar+H),b.escapeFormulae instanceof RegExp?M=b.escapeFormulae:typeof b.escapeFormulae=="boolean"&&b.escapeFormulae&&(M=/^[=+\-@\t\r].*$/)}})(),new RegExp(S(H),"g"));if(typeof h=="string"&&(h=JSON.parse(h)),Array.isArray(h)){if(!h.length||Array.isArray(h[0]))return z(null,h,K);if(typeof h[0]=="object")return z(U||Object.keys(h[0]),h,K)}else if(typeof h=="object")return typeof h.data=="string"&&(h.data=JSON.parse(h.data)),Array.isArray(h.data)&&(h.fields||(h.fields=h.meta&&h.meta.fields||U),h.fields||(h.fields=Array.isArray(h.data[0])?h.fields:typeof h.data[0]=="object"?Object.keys(h.data[0]):[]),Array.isArray(h.data[0])||typeof h.data[0]=="object"||(h.data=[h.data])),z(h.fields||[],h.data||[],K);throw new Error("Unable to serialize unrecognized input");function z(E,P,$){var Y="",L=(typeof E=="string"&&(E=JSON.parse(E)),typeof P=="string"&&(P=JSON.parse(P)),Array.isArray(E)&&0<E.length),G=!Array.isArray(P[0]);if(L&&_){for(var B=0;B<E.length;B++)0<B&&(Y+=A),Y+=D(E[B],B);0<P.length&&(Y+=q)}for(var O=0;O<P.length;O++){var X=(L?E:P[O]).length,Q=!1,te=L?Object.keys(P[O]).length===0:P[O].length===0;if($&&!L&&(Q=$==="greedy"?P[O].join("").trim()==="":P[O].length===1&&P[O][0].length===0),$==="greedy"&&L){for(var de=[],re=0;re<X;re++){var W=G?E[re]:re;de.push(P[O][W])}Q=de.join("").trim()===""}if(!Q){for(var F=0;F<X;F++){0<F&&!te&&(Y+=A);var ne=L&&G?E[F]:F;Y+=D(P[O][ne],F)}O<P.length-1&&(!$||0<X&&!te)&&(Y+=q)}}return Y}function D(E,P){var $,Y;return E==null?"":E.constructor===Date?JSON.stringify(E).slice(1,25):(Y=!1,M&&typeof E=="string"&&M.test(E)&&(E="'"+E,Y=!0),$=E.toString().replace(I,V),(Y=Y||k===!0||typeof k=="function"&&k(E,P)||Array.isArray(k)&&k[P]||((L,G)=>{for(var B=0;B<G.length;B++)if(-1<L.indexOf(G[B]))return!0;return!1})($,u.BAD_DELIMITERS)||-1<$.indexOf(A)||$.charAt(0)===" "||$.charAt($.length-1)===" ")?H+$+H:$)}},u.RECORD_SEP=String.fromCharCode(30),u.UNIT_SEP=String.fromCharCode(31),u.BYTE_ORDER_MARK="\uFEFF",u.BAD_DELIMITERS=["\r",`
`,'"',u.BYTE_ORDER_MARK],u.WORKERS_SUPPORTED=!o&&!!s.Worker,u.NODE_STREAM_INPUT=1,u.LocalChunkSize=10485760,u.RemoteChunkSize=5242880,u.DefaultDelimiter=",",u.Parser=y,u.ParserHandle=j,u.NetworkStreamer=p,u.FileStreamer=f,u.StringStreamer=w,u.ReadableStreamStreamer=g,s.jQuery&&((a=s.jQuery).fn.parse=function(h){var b=h.config||{},k=[];return this.each(function(q){if(!(a(this).prop("tagName").toUpperCase()==="INPUT"&&a(this).attr("type").toLowerCase()==="file"&&s.FileReader)||!this.files||this.files.length===0)return!0;for(var H=0;H<this.files.length;H++)k.push({file:this.files[H],inputElem:this,instanceConfig:a.extend({},b)})}),_(),this;function _(){if(k.length===0)T(h.complete)&&h.complete();else{var q,H,V,K,U=k[0];if(T(h.before)){var M=h.before(U.file,U.inputElem);if(typeof M=="object"){if(M.action==="abort")return q="AbortError",H=U.file,V=U.inputElem,K=M.reason,void(T(h.error)&&h.error({name:q},H,V,K));if(M.action==="skip")return void A();typeof M.config=="object"&&(U.instanceConfig=a.extend(U.instanceConfig,M.config))}else if(M==="skip")return void A()}var I=U.instanceConfig.complete;U.instanceConfig.complete=function(z){T(I)&&I(z,U.file,U.inputElem),A()},u.parse(U.file,U.instanceConfig)}}function A(){k.splice(0,1),_()}}),i&&(s.onmessage=function(h){h=h.data,u.WORKER_ID===void 0&&h&&(u.WORKER_ID=h.workerId),typeof h.input=="string"?s.postMessage({workerId:u.WORKER_ID,results:u.parse(h.input,h.config),finished:!0}):(s.File&&h.input instanceof File||h.input instanceof Object)&&(h=u.parse(h.input,h.config))&&s.postMessage({workerId:u.WORKER_ID,results:h,finished:!0})}),(p.prototype=Object.create(m.prototype)).constructor=p,(f.prototype=Object.create(m.prototype)).constructor=f,(w.prototype=Object.create(w.prototype)).constructor=w,(g.prototype=Object.create(m.prototype)).constructor=g,u})})(Tf);var Zx=Tf.exports;const qn=Jd(Zx);function or({startRect:e,targetRef:t,count:r=12,onDone:s}){return d.useEffect(()=>{const a=t==null?void 0:t.current;if(!e||!a){s==null||s();return}const o=a.getBoundingClientRect(),i=document.createElement("div");i.style.position="fixed",i.style.inset="0",i.style.pointerEvents="none",i.style.zIndex="9999",document.body.appendChild(i);const l=o.left+o.width/2,c=o.top+o.height/2,u=e.left+e.width/2,m=e.top+e.height/2,p=200;let f=0;function w(g){const j=document.createElement("div");j.textContent="🪙",Object.assign(j.style,{position:"fixed",left:"0px",top:"0px",zIndex:"10000",pointerEvents:"none",fontSize:"22px",opacity:"1",willChange:"transform, opacity",transform:"translate(0px, 0px)"});const S=u,y=m,v=l,x=c;j.style.transform=`translate(${S}px, ${y}px) scale(1)`,i.appendChild(j),j.getBoundingClientRect(),j.style.transition=`transform ${p}ms cubic-bezier(.2,.8,.2,1), opacity ${p}ms linear`,requestAnimationFrame(()=>{j.style.transform=`translate(${v}px, ${x}px) scale(.6)`,j.style.opacity="0.1"}),setTimeout(()=>{j.remove(),f+=1,f===r&&(i.remove(),s==null||s())},p+50)}for(let g=0;g<r;g++)setTimeout(()=>w(),g*60);return()=>{try{i.remove()}catch{}}},[e,t,r,s]),null}const ft={XP_PER_CORRECT:10,XP_PER_LEVEL:100,MAX_LEVEL:100,COINS_PER_CORRECT:5,MAX_ENERGY:5,ENERGY_REGEN_TIME:36e5,ENERGY_COST:{quiz:1,practice:0,daily:0},COMBO_MULTIPLIERS:{2:{multiplier:1.2,text:"Nice!"},3:{multiplier:1.5,text:"Great!"},5:{multiplier:2,text:"On Fire!"},10:{multiplier:3,text:"Legendary!"}},AVATARS:[{id:"wizard",emoji:"🧙",name:"Knowledge Wizard",unlockLevel:1,bgColor:"from-purple-500 to-indigo-500"},{id:"knight",emoji:"⚔️",name:"Quiz Knight",unlockLevel:1,bgColor:"from-blue-500 to-cyan-500"},{id:"explorer",emoji:"🗺️",name:"Fact Explorer",unlockLevel:5,bgColor:"from-green-500 to-emerald-500"},{id:"scientist",emoji:"🔬",name:"Science Master",unlockLevel:10,bgColor:"from-orange-500 to-red-500"},{id:"artist",emoji:"🎨",name:"Creative Mind",unlockLevel:15,bgColor:"from-pink-500 to-rose-500"}],STORAGE_KEYS:{PLAYER:"qp_player",GAME_STATE:"qp_game_state",ENERGY:"qp_energy",CURRENT_COMBO:"qp_combo"}},Pd=e=>Math.floor(e/ft.XP_PER_LEVEL)+1,eg=e=>{const t=e%ft.XP_PER_LEVEL;return{current:t,required:ft.XP_PER_LEVEL,percentage:t/ft.XP_PER_LEVEL*100}};function tg({player:e,size:t="normal",showLevel:r=!0,showName:s=!0}){const a=ft.AVATARS.find(i=>i.id===e.avatar)||ft.AVATARS[0],o={small:"w-10 h-10 text-xl",normal:"w-14 h-14 text-2xl",large:"w-20 h-20 text-4xl"};return n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsxs("div",{className:"relative",children:[n.jsx("div",{className:`${o[t]} rounded-full bg-gradient-to-br ${a.bgColor} flex items-center justify-center shadow-lg`,children:n.jsx("span",{children:a.emoji})}),r&&n.jsx("div",{className:"absolute -bottom-1 -right-1 bg-yellow-500 text-black text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center border-2 border-base-bg",children:e.level})]}),s&&n.jsxs("div",{children:[n.jsx("div",{className:"font-bold text-sm",children:(()=>{const i=JSON.parse(localStorage.getItem("currentUser")||"{}");return i.username?i.username.split(" ")[0]:e.name})()}),n.jsx("div",{className:"text-xs text-base-muted",children:a.name})]})]})}function ng({current:e,required:t,level:r,animate:s=!0}){const[a,o]=d.useState(0),i=e/t*100;return d.useEffect(()=>{if(s){const l=setTimeout(()=>{o(i)},100);return()=>clearTimeout(l)}else o(i)},[i,s]),n.jsxs("div",{className:"w-full",children:[n.jsxs("div",{className:"flex justify-between items-center mb-1",children:[n.jsxs("span",{className:"text-xs font-medium",children:["Level ",r]}),n.jsxs("span",{className:"text-xs text-base-muted",children:[e,"/",t," XP"]})]}),n.jsx("div",{className:"h-2 bg-black/20 rounded-full overflow-hidden",children:n.jsx("div",{className:"h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-700 ease-out relative",style:{width:`${a}%`},children:n.jsx("div",{className:"absolute inset-0 bg-white/20 animate-pulse"})})})]})}const Pf=[{name:"GK",slug:"general-knowledge",questions:50,icon:"🧠",color:"#FF6B6B",gradient:"from-red-500 to-pink-500"},{name:"Science",slug:"science",questions:45,icon:"🧪",color:"#4ECDC4",gradient:"from-cyan-500 to-teal-500"},{name:"Fun Facts",slug:"fun-facts",questions:30,icon:"🎉",color:"#FFD93D",gradient:"from-yellow-400 to-orange-500"},{name:"History",slug:"history",questions:42,icon:"🏺",color:"#A8E6CF",gradient:"from-green-400 to-emerald-500"},{name:"AI & Tech",slug:"artificial-intelligence",questions:28,icon:"🤖",color:"#C7B8FF",gradient:"from-purple-400 to-indigo-500"},{name:"More",slug:"more",questions:0,icon:"✨",color:"#FF8CC3",gradient:"from-pink-400 to-rose-500"}],Rf=[{name:"Geography",slug:"geography",questions:38,icon:"🗺️",color:"#FACC15",gradient:"from-yellow-400 to-amber-500"},{name:"Computer",slug:"computer",questions:34,icon:"💻",color:"#3B82F6",gradient:"from-blue-400 to-blue-600"},{name:"Aptitude",slug:"aptitude",questions:36,icon:"📐",color:"#EC4899",gradient:"from-pink-500 to-rose-500"},{name:"Iconic Figures",slug:"iconic-figures",questions:26,icon:"🌟",color:"#8B5CF6",gradient:"from-purple-500 to-violet-600"}],_f=[...Pf.filter(e=>e.slug!=="more"),...Rf];function rg({onClick:e}){return n.jsxs("div",{className:"relative overflow-hidden rounded-3xl p-8 mb-6 cursor-pointer transform transition-all hover:scale-[1.02]",style:{background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",boxShadow:"0 10px 40px rgba(102, 126, 234, 0.3)",animation:"pulse 3s infinite"},onClick:e,children:[n.jsx("div",{className:"absolute top-[-50px] right-[-50px] w-[200px] h-[200px] rounded-full bg-white/10",style:{animation:"float 4s ease-in-out infinite"}}),n.jsx("div",{className:"absolute bottom-[-30px] left-[-30px] w-[150px] h-[150px] rounded-full bg-white/10",style:{animation:"float 4s ease-in-out infinite reverse"}}),n.jsx("h2",{className:"text-3xl font-bold mb-2",children:"🎰 Spin & Win"}),n.jsx("p",{className:"text-base opacity-90 mb-4",children:"Test your luck, win amazing prizes!"}),n.jsx("div",{className:"inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium",style:{background:"linear-gradient(90deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0.3) 100%)",backgroundSize:"200% auto",animation:"shimmer 2s linear infinite"},children:"Play Now →"})]})}function sg({actions:e}){return n.jsx("div",{className:"grid grid-cols-4 gap-3 mb-8",children:e.map((t,r)=>n.jsxs("button",{onClick:t.action,className:`${t.color} aspect-square rounded-2xl flex flex-col items-center justify-center gap-1 transform transition-all hover:scale-105`,children:[n.jsx("div",{className:"text-2xl",children:t.icon}),n.jsx("div",{className:"text-[10px] font-medium text-white",children:t.label})]},r))})}function ag({categories:e,onCategorySelect:t}){return n.jsxs("div",{className:"mb-6",children:[n.jsx("h3",{className:"text-lg font-bold mb-4",children:"Choose Your Adventure"}),n.jsx("div",{className:"grid grid-cols-3 gap-3",children:e.map(r=>n.jsxs("button",{onClick:()=>t(r),className:`bg-gradient-to-br ${r.gradient} aspect-square rounded-2xl p-4 flex flex-col items-center justify-center gap-2 transform transition-all hover:scale-105 hover:shadow-lg relative`,children:[n.jsx("div",{className:"text-3xl",children:r.icon}),n.jsx("div",{className:"text-xs font-bold text-white text-center",children:r.name}),r.questions>0&&n.jsxs("div",{className:"text-[10px] bg-white/20 px-2 py-0.5 rounded-full",children:[r.questions," Qs"]})]},r.name))})]})}function og({onClick:e,isPulsing:t}){return n.jsxs("button",{onClick:e,className:`w-full rounded-2xl p-5 flex justify-between items-center transition-all ${t?"bg-green-500/20 border-2 border-green-500 animate-pulse":"bg-white/5 border border-base-border hover:bg-white/10"}`,children:[n.jsxs("div",{className:"flex items-center gap-4",children:[n.jsx("div",{className:"w-12 h-12 bg-gradient-to-br from-green-400 to-teal-500 rounded-xl grid place-items-center text-2xl",children:"📚"}),n.jsxs("div",{className:"text-left",children:[n.jsx("div",{className:"font-medium",children:"Practice Mode"}),n.jsx("div",{className:"text-xs text-base-muted",children:"No timer • No energy cost • Learn at your pace"})]})]}),n.jsx("div",{className:"text-xl",children:"→"})]})}function ig({onCoinsUpdate:e}){const[t,r]=d.useState("idle"),[s,a]=d.useState([]),[o,i]=d.useState(0),[l,c]=d.useState([]),[u,m]=d.useState(0),[p,f]=d.useState(""),[w,g]=d.useState(null),[j,S]=d.useState(null),[y,v]=d.useState(!1),[x,N]=d.useState(!1),[C]=tt("/sounds/correct.mp3",{volume:.6}),[R]=tt("/sounds/wrong.mp3",{volume:.6}),[T]=tt("/sounds/win.mp3",{volume:.7,duration:1e3}),h=3,b=10,k=2,_=50;d.useEffect(()=>{A()},[]),d.useEffect(()=>{if(t==="complete"){const E=()=>{const $=new Date,Y=new Date($);Y.setDate(Y.getDate()+1),Y.setHours(0,0,0,0);const L=Y-$,G=Math.floor(L/(1e3*60*60)),B=Math.floor(L%(1e3*60*60)/(1e3*60));f(`${G}h ${B}m`)};E();const P=setInterval(E,6e4);return()=>clearInterval(P)}},[t]);const A=async()=>{try{const P=await(await fetch("/data/quiz_questions_bank.csv")).text(),{data:$}=qn.parse(P,{header:!0,skipEmptyLines:!0}),Y=$.filter(L=>L.question&&L.option1&&L.option2&&L.option3&&L.option4).map((L,G)=>{var B;return{id:G,question:L.question,options:[L.option1,L.option2,L.option3,L.option4],correct:["A","B","C","D"].indexOf((B=L.answer)==null?void 0:B.toUpperCase())}}).filter(L=>L.correct>=0).sort(()=>Math.random()-.5).slice(0,h);a(Y)}catch{a([{id:1,question:"What is the capital of France?",options:["London","Paris","Berlin","Madrid"],correct:1},{id:2,question:"What is 2 + 2?",options:["3","4","5","6"],correct:1},{id:3,question:"What color is the sky?",options:["Red","Green","Blue","Yellow"],correct:2}])}},q=()=>{r("playing"),i(0),c(new Array(h).fill(null)),m(0),v(!1)},H=E=>{const P=[...l];P[o]=E,c(P);const $=E===s[o].correct;N($),v(!0),$?(m(u+1),C&&C()):R&&R();const Y=P.filter(L=>L!==null).length;setTimeout(()=>{v(!1),Y===h?(r("celebrating"),T&&T(),setTimeout(()=>{K(P)},2e3)):V(P)},600)},V=E=>{for(let P=o+1;P<h;P++)if(E[P]===null){i(P);return}for(let P=0;P<o;P++)if(E[P]===null){i(P);return}},K=E=>{const P=E.reduce(($,Y,L)=>$+(Y===s[L].correct?1:0),0);if(m(P),r("complete"),e){const Y=P===h?P*b*k:P*b;e(Y)}},U=()=>{A(),r("idle"),i(0),c([]),m(0),v(!1)},M=E=>{S(null),g(E.targetTouches[0].clientX)},I=E=>{S(E.targetTouches[0].clientX)},z=()=>{if(!w||!j)return;const E=w-j,P=E>_,$=E<-_;if(P){const Y=(o+1)%h;i(Y)}else if($){const Y=(o-1+h)%h;i(Y)}};if(t==="celebrating")return n.jsxs("div",{className:"relative rounded-2xl bg-gradient-to-br from-purple-600/20 to-blue-600/20 backdrop-blur border border-white/10 p-8 mb-4 text-center",children:[n.jsx("div",{className:"animate-bounce-slow",children:n.jsx("span",{className:"text-5xl",children:"🎉"})}),n.jsx("h2",{className:"text-2xl font-bold mt-4 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent",children:"Congratulations!"}),n.jsx("p",{className:"text-sm text-gray-400 mt-2",children:"You've completed today's challenge"})]});if(t==="complete"){const E=Math.round(u/h*100),P=u===h,$=P?u*b*k:u*b;return n.jsxs("div",{className:"relative rounded-2xl bg-gradient-to-br from-purple-600/10 to-blue-600/10 backdrop-blur border border-white/10 p-4 mb-4",children:[n.jsxs("div",{className:"flex items-center justify-between",children:[n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsx("div",{className:"w-12 h-12 rounded-full bg-gradient-to-br from-yellow-400/20 to-orange-400/20 flex items-center justify-center",children:n.jsx("span",{className:"text-2xl",children:P?"🏆":u>=2?"🥈":"🥉"})}),n.jsxs("div",{children:[n.jsx("h3",{className:"text-lg font-semibold text-yellow-400",children:"Challenge Complete!"}),n.jsxs("p",{className:"text-xs text-gray-400",children:["Come back in ",p]})]})]}),n.jsxs("div",{className:"flex gap-4",children:[n.jsxs("div",{className:"text-center",children:[n.jsxs("div",{className:"text-lg font-bold text-green-400",children:[E,"%"]}),n.jsx("div",{className:"text-[10px] text-gray-500",children:"Accuracy"})]}),n.jsxs("div",{className:"text-center",children:[n.jsxs("div",{className:"text-lg font-bold text-yellow-400",children:["+",$]}),n.jsx("div",{className:"text-[10px] text-gray-500",children:"Coins"})]}),n.jsxs("div",{className:"text-center",children:[n.jsx("div",{className:"text-lg font-bold text-orange-400 whitespace-nowrap",children:"🔥2"}),n.jsx("div",{className:"text-[10px] text-gray-500",children:"Streak"})]})]})]}),n.jsx("button",{onClick:U,className:"absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-[10px] text-gray-600 hover:text-gray-400",children:"[Test: Replay]"})]})}if(t==="idle")return n.jsx("div",{onClick:q,className:"relative overflow-hidden rounded-2xl bg-gradient-to-br from-violet-500/30 to-blue-500/15 backdrop-blur border border-white/10 p-8 mb-4 cursor-pointer hover:scale-[1.02] transition-all",children:n.jsxs("div",{className:"flex items-center justify-between",children:[n.jsxs("div",{children:[n.jsx("h3",{className:"text-lg font-semibold mb-2",children:"Daily Challenge"}),n.jsxs("p",{className:"text-xs text-gray-400",children:[h," questions • Up to ",h*b*k," coins"]})]}),n.jsx("div",{className:"w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center",children:n.jsx("span",{className:"text-white",children:"▶"})})]})});const D=s[o];return D?n.jsxs("div",{className:"relative rounded-2xl bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur border border-white/10 p-4 mb-4",onTouchStart:M,onTouchMove:I,onTouchEnd:z,children:[n.jsx("div",{className:"flex gap-1 mb-4",children:[...Array(h)].map((E,P)=>{var $;return n.jsx("div",{className:`h-1 flex-1 rounded-full transition-all ${l[P]!==null?l[P]===(($=s[P])==null?void 0:$.correct)?"bg-green-500":"bg-red-500":P===o?"bg-blue-500":"bg-gray-700"}`},P)})}),n.jsx("h3",{className:"text-base font-medium mb-4",children:D.question}),n.jsx("div",{className:"grid gap-2",children:D.options.map((E,P)=>{const $=l[o]===P,Y=l[o]!==null,L=P===D.correct,G=y&&($||L);return n.jsx("button",{onClick:()=>!Y&&H(P),disabled:Y,className:`
                relative p-3 rounded-xl text-left text-sm font-medium transition-all
                ${G&&L?"bg-green-500/30 border border-green-500 animate-pulse-once":G&&$&&!L?"bg-red-500/30 border border-red-500 animate-shake":$&&!y?"bg-blue-500/20 border border-blue-500":Y?"bg-white/5 border border-transparent opacity-50":"bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/10 active:scale-[0.98]"}
              `,children:n.jsxs("div",{className:"flex items-center justify-between",children:[n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx("span",{className:"opacity-50",children:String.fromCharCode(65+P)}),n.jsx("span",{children:E})]}),G&&L&&n.jsx("span",{className:"text-green-400 animate-fade-in",children:"✓"}),G&&$&&!L&&n.jsx("span",{className:"text-red-400 animate-fade-in",children:"✗"})]})},P)})}),n.jsx("style",{jsx:!0,children:`
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
      `})]}):null}function lg({show:e,onClose:t,player:r,changeAvatar:s,GAME_CONSTANTS:a}){return e?n.jsx("div",{className:"fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4",onClick:o=>{o.target===o.currentTarget&&t()},children:n.jsxs("div",{className:"bg-base-card rounded-3xl p-6 w-full max-w-md border border-base-border max-h-[80vh] overflow-y-auto",onClick:o=>o.stopPropagation(),children:[n.jsxs("div",{className:"flex justify-between items-center mb-4",children:[n.jsx("h3",{className:"text-xl font-bold",children:"Choose Your Avatar"}),n.jsx("button",{onClick:t,className:"w-8 h-8 rounded-lg bg-white/5 border border-base-border grid place-items-center hover:bg-white/10 transition",children:"✕"})]}),n.jsx("div",{className:"grid grid-cols-2 gap-4",children:a.AVATARS.map(o=>{const i=!r.unlockedAvatars||!r.unlockedAvatars.includes(o.id),l=r.avatar===o.id;return n.jsxs("button",{onClick:()=>{i||(s(o.id),t())},className:`p-4 rounded-2xl border-2 transition-all ${l?"border-brand-blue bg-brand-blue/20":i?"border-gray-600 bg-gray-800/50 opacity-50":"border-base-border bg-white/5 hover:bg-white/10"}`,disabled:i,children:[n.jsx("div",{className:`text-4xl mb-2 ${i?"grayscale":""}`,children:o.emoji}),n.jsx("div",{className:"text-sm font-medium",children:o.name}),i&&n.jsxs("div",{className:"text-xs text-gray-400 mt-1",children:["Unlock at Level ",o.unlockLevel]}),l&&n.jsx("div",{className:"text-xs text-brand-blue mt-1",children:"Current"})]},o.id)})})]})}):null}function cg({show:e,onClose:t,categories:r,onCategorySelect:s}){return e?n.jsx("div",{className:"fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4",onClick:a=>{a.target===a.currentTarget&&t()},children:n.jsxs("div",{className:"bg-base-card rounded-3xl p-6 w-full max-w-md border border-base-border",onClick:a=>a.stopPropagation(),children:[n.jsxs("div",{className:"flex justify-between items-center mb-4",children:[n.jsx("h3",{className:"text-xl font-bold",children:"More categories"}),n.jsx("button",{onClick:t,className:"w-8 h-8 rounded-lg bg-white/5 border border-base-border grid place-items-center hover:bg-white/10 transition",children:"✕"})]}),n.jsx("div",{className:"grid grid-cols-2 gap-3 mb-4",children:r.map(a=>n.jsxs("button",{onClick:()=>{t(),s(a)},className:`bg-gradient-to-br ${a.gradient} p-4 rounded-2xl flex flex-col items-center gap-2 hover:scale-105 transition-transform relative`,children:[n.jsx("div",{className:"text-3xl",children:a.icon}),n.jsx("div",{className:"text-sm font-bold text-white",children:a.name}),n.jsxs("div",{className:"text-xs text-white/80",children:[a.questions," questions"]})]},a.name))})]})}):null}function dg({show:e,onClose:t,coins:r,onNavigateToPlay:s}){return e?n.jsx("div",{className:"fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4",onClick:a=>{a.target===a.currentTarget&&t()},children:n.jsxs("div",{className:"bg-base-card rounded-3xl p-6 w-full max-w-md border border-base-border relative overflow-hidden",onClick:a=>a.stopPropagation(),children:[n.jsx("div",{className:"absolute inset-0 opacity-10",children:n.jsx("div",{className:"magic-gradient h-full"})}),n.jsxs("div",{className:"relative",children:[n.jsxs("div",{className:"flex items-center justify-between mb-6",children:[n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsx("div",{className:"coin-3d text-5xl",style:{animation:"coinRotate 2s linear infinite, glow 2s ease-in-out infinite"},children:"🪙"}),n.jsxs("div",{children:[n.jsx("h3",{className:"text-2xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent",children:"Your Treasure"}),n.jsxs("p",{className:"text-3xl font-bold text-white mt-1",children:[ae.getCoins()," Coins"]})]})]}),n.jsx("button",{onClick:t,className:"w-8 h-8 rounded-lg bg-white/5 border border-base-border grid place-items-center hover:bg-white/10 transition",children:"✕"})]}),n.jsxs("div",{className:"mb-6",children:[n.jsx("h4",{className:"text-sm font-medium text-base-muted mb-3",children:"Ways to Earn"}),n.jsxs("div",{className:"space-y-3",children:[n.jsx("div",{className:"p-4 rounded-xl bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 hover:scale-[1.02] transition-transform",children:n.jsxs("div",{className:"flex items-center justify-between",children:[n.jsxs("div",{children:[n.jsxs("div",{className:"font-medium flex items-center gap-2",children:[n.jsx("span",{className:"text-2xl",children:"✅"}),"Complete Quizzes"]}),n.jsx("div",{className:"text-xs text-base-muted mt-1",children:"+5 coins per correct answer"})]}),n.jsx("div",{className:"text-green-400 font-bold",children:"+5"})]})}),n.jsx("div",{className:"p-4 rounded-xl bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 hover:scale-[1.02] transition-transform",children:n.jsxs("div",{className:"flex items-center justify-between",children:[n.jsxs("div",{children:[n.jsxs("div",{className:"font-medium flex items-center gap-2",children:[n.jsx("span",{className:"text-2xl",children:"🎯"}),"Daily Challenge"]}),n.jsx("div",{className:"text-xs text-base-muted mt-1",children:"Complete daily for bonus"})]}),n.jsx("div",{className:"text-blue-400 font-bold",children:"+5"})]})}),n.jsx("div",{className:"p-4 rounded-xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 hover:scale-[1.02] transition-transform",children:n.jsxs("div",{className:"flex items-center justify-between",children:[n.jsxs("div",{children:[n.jsxs("div",{className:"font-medium flex items-center gap-2",children:[n.jsx("span",{className:"text-2xl",children:"🎰"}),"Spin & Play"]}),n.jsx("div",{className:"text-xs text-base-muted mt-1",children:"Test your luck!"})]}),n.jsx("div",{className:"text-purple-400 font-bold",children:"+50"})]})}),n.jsx("div",{className:"p-4 rounded-xl bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/20 hover:scale-[1.02] transition-transform",children:n.jsxs("div",{className:"flex items-center justify-between",children:[n.jsxs("div",{children:[n.jsxs("div",{className:"font-medium flex items-center gap-2",children:[n.jsx("span",{className:"text-2xl",children:"🏆"}),"Achievements"]}),n.jsx("div",{className:"text-xs text-base-muted mt-1",children:"Unlock special rewards"})]}),n.jsx("div",{className:"text-orange-400 font-bold",children:"+???"})]})})]})]}),n.jsxs("div",{className:"mb-6",children:[n.jsxs("div",{className:"flex justify-between text-xs text-base-muted mb-2",children:[n.jsx("span",{children:"Next reward"}),n.jsxs("span",{children:[100-r%100," coins to go"]})]}),n.jsx("div",{className:"h-2 bg-white/10 rounded-full overflow-hidden",children:n.jsx("div",{className:"h-full bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full transition-all",style:{width:`${r%100}%`}})})]}),n.jsx("button",{onClick:s,className:"w-full py-3 rounded-xl bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-bold hover:scale-[1.02] transition-transform shadow-lg",style:{boxShadow:"0 10px 30px rgba(251, 191, 36, 0.3)"},children:"Start Earning Now! 🚀"})]})]})}):null}function ug({show:e,onClose:t,selectedCategory:r,difficulty:s,setDifficulty:a,count:o,setCount:i,timer:l,setTimer:c,onStart:u}){return!e||!r?null:n.jsx("div",{className:"fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4",onClick:m=>{m.target===m.currentTarget&&t()},children:n.jsxs("div",{className:"bg-base-card rounded-3xl p-6 w-full max-w-md border border-base-border",onClick:m=>m.stopPropagation(),children:[n.jsxs("div",{className:"flex justify-between items-center mb-4",children:[n.jsx("h3",{className:"text-xl font-bold",children:"Quiz Mode"}),n.jsx("button",{onClick:t,className:"w-8 h-8 rounded-lg bg-white/5 border border-base-border grid place-items-center hover:bg-white/10 transition",children:"✕"})]}),n.jsx("div",{className:"mb-4 p-3 rounded-xl bg-blue-500/10 border border-blue-500/30",children:n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsx("div",{className:"text-2xl",children:r.icon}),n.jsxs("div",{children:[n.jsxs("div",{className:"font-medium",children:["Category: ",r.name]}),n.jsxs("div",{className:"text-xs text-base-muted",children:[r.questions," questions available"]})]})]})}),n.jsxs("div",{className:"mb-4",children:[n.jsx("label",{className:"text-sm text-base-muted mb-2 block",children:"Difficulty"}),n.jsx("div",{className:"grid grid-cols-3 gap-2",children:["easy","medium","hard"].map(m=>n.jsx("button",{onClick:()=>a(m),className:`py-2 rounded-xl border ${s===m?"bg-brand-blue/30 border-brand-blue":"bg-white/5 border-base-border"}`,children:m.charAt(0).toUpperCase()+m.slice(1)},m))})]}),n.jsxs("div",{className:"mb-4",children:[n.jsx("label",{className:"text-sm text-base-muted mb-2 block",children:"Questions"}),n.jsx("div",{className:"grid grid-cols-4 gap-2",children:[5,10,20,30].map(m=>n.jsx("button",{onClick:()=>i(m),className:`py-2 rounded-xl border ${o===m?"bg-brand-blue/30 border-brand-blue":"bg-white/5 border-base-border"}`,children:m},m))})]}),n.jsxs("div",{className:"mb-6",children:[n.jsx("label",{className:"text-sm text-base-muted mb-2 block",children:"Timer (seconds per question)"}),n.jsx("input",{type:"number",value:l,onChange:m=>c(Number(m.target.value)||45),min:10,max:120,className:"w-full px-4 py-2 rounded-xl bg-white/5 border border-base-border"})]}),n.jsxs("div",{className:"flex gap-3",children:[n.jsx("button",{onClick:t,className:"flex-1 py-3 rounded-xl border border-base-border bg-white/5",children:"Cancel"}),n.jsx("button",{onClick:u,className:"flex-1 py-3 rounded-xl bg-gradient-to-r from-brand-blue to-brand-purple text-white font-medium",children:"Start Quiz"})]})]})})}function mg({show:e,onClose:t,allCategories:r,category:s,setCategory:a,difficulty:o,setDifficulty:i,count:l,setCount:c,onStart:u}){return e?n.jsx("div",{className:"fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4",onClick:m=>{m.target===m.currentTarget&&t()},children:n.jsxs("div",{className:"bg-base-card rounded-3xl p-6 w-full max-w-md border border-base-border max-h-[90vh] overflow-y-auto",onClick:m=>m.stopPropagation(),children:[n.jsxs("div",{className:"flex justify-between items-center mb-4",children:[n.jsx("h3",{className:"text-xl font-bold",children:"Practice Mode"}),n.jsx("button",{onClick:t,className:"w-8 h-8 rounded-lg bg-white/5 border border-base-border grid place-items-center hover:bg-white/10 transition",children:"✕"})]}),n.jsxs("div",{className:"mb-4",children:[n.jsx("label",{className:"text-sm text-base-muted mb-2 block",children:"Category"}),n.jsx("div",{className:"grid grid-cols-3 gap-2 max-h-[200px] overflow-y-auto",children:r.map(m=>n.jsxs("button",{onClick:()=>a(m.slug),className:`p-3 rounded-xl border flex flex-col items-center gap-1 ${s===m.slug?"bg-brand-blue/30 border-brand-blue":"bg-white/5 border-base-border"}`,children:[n.jsx("div",{className:"text-xl",children:m.icon}),n.jsx("div",{className:"text-[10px] text-center",children:m.name})]},m.slug))})]}),n.jsxs("div",{className:"mb-4",children:[n.jsx("label",{className:"text-sm text-base-muted mb-2 block",children:"Difficulty"}),n.jsx("div",{className:"grid grid-cols-3 gap-2",children:["easy","medium","hard"].map(m=>n.jsx("button",{onClick:()=>i(m),className:`py-2 rounded-xl border ${o===m?"bg-brand-blue/30 border-brand-blue":"bg-white/5 border-base-border"}`,children:m.charAt(0).toUpperCase()+m.slice(1)},m))})]}),n.jsxs("div",{className:"mb-6",children:[n.jsx("label",{className:"text-sm text-base-muted mb-2 block",children:"Questions"}),n.jsx("div",{className:"grid grid-cols-4 gap-2",children:[5,10,20,30].map(m=>n.jsx("button",{onClick:()=>c(m),className:`py-2 rounded-xl border ${l===m?"bg-brand-blue/30 border-brand-blue":"bg-white/5 border-base-border"}`,children:m},m))})]}),n.jsxs("div",{className:"flex gap-3",children:[n.jsx("button",{onClick:t,className:"flex-1 py-3 rounded-xl border border-base-border bg-white/5",children:"Cancel"}),n.jsx("button",{onClick:u,className:"flex-1 py-3 rounded-xl bg-gradient-to-r from-brand-blue to-brand-purple text-white font-medium",children:"Start Practice"})]})]})}):null}function fg({player:e,onContinue:t}){const[r,s]=d.useState(()=>sessionStorage.getItem("justSignedUp")==="true"?(sessionStorage.removeItem("justSignedUp"),!1):sessionStorage.getItem("welcomeShown")!=="true"),[a,o]=d.useState(!1),[i,l]=d.useState(!1),[c,u]=d.useState(""),[m,p]=d.useState(""),[f,w]=d.useState("Champion"),[g,j]=d.useState(1),[S,y]=d.useState(0),[v,x]=d.useState(0),N=()=>{try{const h=new Audio("/sounds/welcome.mp3");h.volume=.6,h.play()}catch{console.log("Welcome sound not available")}},C=()=>{navigator.vibrate&&navigator.vibrate([100,50,100])};d.useEffect(()=>{if((()=>{const q=JSON.parse(localStorage.getItem("currentUser")||"{}");let H="Champion",V=1,K=0,U=0;if(q.phone){const I=JSON.parse(localStorage.getItem(`user_profile_${q.phone}`)||"{}"),D=JSON.parse(localStorage.getItem("users")||"{}")[q.phone]||{};I.name?H=I.name.split(" ")[0]:D.username?H=D.username.split(" ")[0]:q.username&&(H=q.username.split(" ")[0]),H&&H!=="Champion"&&(H=H.charAt(0).toUpperCase()+H.slice(1).toLowerCase())}else q.username&&(H=q.username.split(" ")[0]);const M=JSON.parse(localStorage.getItem("qp_player")||"{}");V=(e==null?void 0:e.level)||M.level||1,K=ae.getCoins(),U=(e==null?void 0:e.currentStreak)||M.currentStreak||0,H!=="Champion"&&H!==M.name&&(M.name=H,localStorage.setItem("qp_player",JSON.stringify(M))),w(H),j(V),y(K),x(U)})(),!r){t();return}sessionStorage.setItem("welcomeShown","true"),document.body.classList.add("hide-bottom-nav"),N(),C();const b=["🦉","🐧","🦝","🦜","🦕","🐙","🦊","🐸","🦁","🐨"];p(b[Math.floor(Math.random()*b.length)]);const k=setInterval(()=>{l(q=>!q)},2e3),_=["🎯 New challenges await!","🏆 Ready to be a champion?","🌟 Your brain adventure starts now!","🎨 Time for fun learning!","🎪 The quiz circus is open!","🚀 Blast off to knowledge!","🎭 Let's play and learn!","🌈 Rainbow of questions ahead!"];u(_[Math.floor(Math.random()*_.length)]);const A=setInterval(()=>{u(_[Math.floor(Math.random()*_.length)])},3e3);return()=>{document.body.classList.remove("hide-bottom-nav"),clearInterval(k),clearInterval(A)}},[r,t,e]);const R=()=>{try{const h=new Audio("/sounds/tap.mp3");h.volume=.5,h.play()}catch{console.log("Click sound not available")}navigator.vibrate&&navigator.vibrate(20),o(!0),document.body.classList.remove("hide-bottom-nav"),setTimeout(()=>{s(!1),t()},400)};if(!r)return null;const T=()=>{const h=new Date().getHours();return h<12?"Good morning":h<17?"Good afternoon":"Good evening"};return n.jsxs("div",{className:`fixed inset-0 z-50 flex items-center justify-center transition-all duration-500
      ${a?"opacity-0 scale-95":"opacity-100 scale-100"}`,children:[n.jsx("div",{className:"absolute inset-0",style:{background:"linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #fda085 75%, #f5a375 90%, #e08060 100%)"}}),n.jsxs("div",{className:"absolute inset-0 overflow-hidden",children:[[{top:"10%",left:"15%",size:"24px",delay:"0s"},{top:"20%",left:"75%",size:"20px",delay:"0.5s"},{top:"15%",left:"45%",size:"28px",delay:"1s"},{top:"30%",left:"85%",size:"22px",delay:"1.5s"},{top:"8%",left:"60%",size:"26px",delay:"2s"}].map((h,b)=>n.jsx("div",{className:"absolute animate-twinkle",style:{top:h.top,left:h.left,fontSize:h.size,animationDelay:h.delay},children:"⭐"},`star-${b}`)),n.jsxs("div",{className:"absolute top-10 left-0 w-full",children:[n.jsx("div",{className:"cloud cloud1",children:"☁️"}),n.jsx("div",{className:"cloud cloud2",children:"☁️"})]})]}),n.jsxs("div",{className:"relative z-10 text-center px-6 w-full max-w-sm mx-auto",children:[n.jsx("div",{className:`text-8xl mb-4 transition-transform duration-500 ${i?"scale-110 rotate-6":"scale-100 rotate-0"}`,children:m}),n.jsxs("div",{className:"relative rounded-3xl px-6 py-4 mb-6 shadow-xl overflow-hidden",children:[n.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100"}),n.jsx("div",{className:"absolute -top-3 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-br from-purple-100 to-pink-100 rotate-45"}),n.jsxs("div",{className:"relative",children:[n.jsxs("h1",{className:"text-3xl font-bold text-purple-800",children:["Hello, ",f,"! 👋"]}),n.jsx("p",{className:"text-sm text-purple-600 mt-1",children:T()})]})]}),n.jsxs("div",{className:"grid grid-cols-3 gap-3 mb-6",children:[n.jsxs("div",{className:"relative rounded-2xl p-3 transform hover:scale-105 transition-transform overflow-hidden",children:[n.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-yellow-200 via-yellow-100 to-orange-100"}),n.jsxs("div",{className:"relative",children:[n.jsx("div",{className:"text-3xl mb-1",children:"⭐"}),n.jsx("div",{className:"text-2xl font-bold text-orange-800",children:g}),n.jsx("div",{className:"text-xs text-orange-600",children:"Level"})]})]}),n.jsxs("div",{className:"relative rounded-2xl p-3 transform hover:scale-105 transition-transform overflow-hidden",children:[n.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-blue-200 via-cyan-100 to-teal-100"}),n.jsxs("div",{className:"relative",children:[n.jsx("div",{className:"text-3xl mb-1",children:"🪙"}),n.jsx("div",{className:"text-2xl font-bold text-teal-800",children:S}),n.jsx("div",{className:"text-xs text-teal-600",children:"Coins"})]})]}),n.jsxs("div",{className:"relative rounded-2xl p-3 transform hover:scale-105 transition-transform overflow-hidden",children:[n.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-orange-200 via-red-100 to-pink-100"}),n.jsxs("div",{className:"relative",children:[n.jsx("div",{className:"text-3xl mb-1",children:"🔥"}),n.jsx("div",{className:"text-2xl font-bold text-orange-800",children:v}),n.jsx("div",{className:"text-xs text-orange-600",children:"Streak"})]})]})]}),n.jsx("div",{className:"h-4"}),n.jsx("div",{className:"text-white/90 font-medium animate-fade-slide mb-6",children:c}),n.jsxs("button",{onClick:R,className:"group relative w-full",children:[n.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 rounded-full blur-lg opacity-75 group-hover:opacity-100 transition-opacity"}),n.jsxs("div",{className:`relative bg-gradient-to-r from-green-400 to-blue-500 text-white py-5 px-8 rounded-full font-bold text-xl shadow-2xl 
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
      `})]})}const Rd=(e=new Date)=>e.toLocaleDateString("en-CA"),_d=(e,t=null)=>{try{const r=localStorage.getItem(e);return r?JSON.parse(r):t}catch{return t}},hg=(e,t)=>localStorage.setItem(e,JSON.stringify(t));function Ad(){const[e,t]=d.useState(()=>{const be=sessionStorage.getItem("justSignedUp"),pe=sessionStorage.getItem("justSignedIn");return be==="true"||pe==="true"?(sessionStorage.removeItem("justSignedUp"),sessionStorage.removeItem("justSignedIn"),sessionStorage.setItem("welcomeShown","true"),!1):sessionStorage.getItem("welcomeShown")!=="true"}),r=Te(),s=gn(),{player:a,levelProgress:o,useEnergy:i,changeAvatar:l}=s,[c]=tt("/sounds/correct.mp3",{volume:.6}),[u]=tt("/sounds/wrong.mp3",{volume:.6}),[m]=tt("/sounds/coin.mp3",{volume:.75}),[p]=tt("/sounds/levelup.mp3",{volume:.8}),f=d.useRef(a.level),w=d.useRef(null);d.useEffect(()=>{const be=()=>{};return window.addEventListener("focus",be),()=>window.removeEventListener("focus",be)},[]),d.useEffect(()=>{a.level>f.current&&(p==null||p(),f.current=a.level)},[a.level,p]);const[g,j]=d.useState(!1),[S,y]=d.useState(null),[v,x]=d.useState(!1),[N,C]=d.useState("medium"),[R,T]=d.useState(10),[h,b]=d.useState(45),[k,_]=d.useState(!1),[A,q]=d.useState(!1),[H,V]=d.useState(null),[K,U]=d.useState(null),[M,I]=d.useState(!1),[z,D]=d.useState(!1),[E,P]=d.useState(null),$=10,Y=5,[L,G]=d.useState(!1),[B,O]=d.useState(!1),[X,Q]=d.useState("general-knowledge"),[te,de]=d.useState("medium"),[re,W]=d.useState(10),[F,ne]=d.useState(()=>_d("dq_daily_log",{})[Rd()]===!0);d.useEffect(()=>{const be=sessionStorage.getItem("homeScrollPosition");be&&window.scrollTo(0,parseInt(be));const pe=()=>{sessionStorage.setItem("homeScrollPosition",window.scrollY.toString())};return window.addEventListener("scroll",pe),()=>window.removeEventListener("scroll",pe)},[]),d.useEffect(()=>{if(F)return;(async()=>{var pe;try{const Ne=await fetch("/data/quiz_questions_bank.csv").then(nt=>nt.text()),{data:xe}=qn.parse(Ne,{header:!0,skipEmptyLines:!0});if(!xe.length)throw new Error("empty");const we=xe[Math.floor(Math.random()*xe.length)],Ye=[we.option1,we.option2,we.option3,we.option4].filter(Boolean);V({category:we.category||"General",prompt:we.question,options:Ye,answerIndex:["A","B","C","D"].indexOf((pe=we.answer)==null?void 0:pe.toUpperCase())||0})}catch{V({category:"Science",prompt:"Which planet is known as the Red Planet?",options:["Earth","Mars","Jupiter","Venus"],answerIndex:1})}})()},[F]);const ee=(be,pe)=>{if(K!==null)return;U(be);const Ne=be===H.answerIndex;if(Ne){if(c(),pe!=null&&pe.currentTarget&&w.current){const xe=pe.currentTarget.getBoundingClientRect();m(),P({startRect:xe,count:10,amount:Y})}}else u();setTimeout(()=>{if(D(!0),I(!0),Ne){const xe=Rd();hg("dq_daily_log",{..._d("dq_daily_log",{}),[xe]:!0}),ne(!0);const we=Number(localStorage.getItem("dq_streak")||0);localStorage.setItem("dq_streak",String(we+1));const Ye=Ke.getCurrentUser();Ye!=null&&Ye.phone&&ae.updateStreak(Ye.phone)}},600)},oe=be=>{if(be.slug==="more"){j(!0);return}y(be),x(!0)},me=()=>{console.log("Starting quiz with energy:",a.energy),console.log("Category:",S.slug),r(`/quiz/${S.slug}`,{state:{mode:"quiz",difficulty:N,count:R,timer:{type:"per_q",seconds:h},source:"adventure"}}),x(!1)},Se=()=>{console.log("Starting practice, category:",X),r(`/quiz/${X}`,{state:{mode:"practice",difficulty:te,count:re,timer:{type:"off",seconds:0}}}),O(!1)},Ee=[{icon:"🎯",label:"Quests",color:"bg-gradient-to-br from-orange-500 to-pink-500",action:()=>{sessionStorage.setItem("questsFromHome","true"),r("/profile/quests")}},{icon:"🔥",label:"Streak",color:"bg-gradient-to-br from-red-500 to-orange-500",action:()=>r("/profile/streaks")},{icon:"🏆",label:"Achieve",color:"bg-gradient-to-br from-blue-500 to-purple-500",action:()=>r("/profile/achievements")},{icon:"🎁",label:"Rewards",color:"bg-gradient-to-br from-green-500 to-teal-500",action:()=>r("/profile/rewards")}];return n.jsxs(n.Fragment,{children:[e&&n.jsx(fg,{player:a,onContinue:()=>t(!1)}),n.jsxs("div",{className:"min-h-screen bg-base-bg text-base-text",children:[n.jsx("div",{className:"fixed inset-0 -z-10 pointer-events-none",style:{background:"linear-gradient(to bottom, #0B0F1A, #111827)"}}),n.jsxs("div",{className:"relative z-10 px-4 pt-10 pb-24",children:[n.jsx("style",{jsx:!0,children:`
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
        `}),E&&n.jsx(or,{startRect:E.startRect,targetRef:w,count:E.count,onDone:()=>{if(!L){const be=Ke.getCurrentUser();be!=null&&be.phone?(ae.addCoins(E.amount,"Daily Challenge"),ae.addXP($),ae.updateQuestProgress(be.phone,"daily_challenge",1)):(ae.addCoins(E.amount,"Daily Challenge"),ae.addXP($)),G(!0)}P(null)}}),n.jsxs("div",{className:"mb-8",children:[n.jsxs("div",{className:"flex justify-between items-start mb-4",children:[n.jsx("div",{className:"cursor-pointer hover:scale-105 transition-transform",onClick:()=>q(!0),children:n.jsx(tg,{player:a,size:"small",showLevel:!0,showName:!0})}),n.jsx("div",{className:"flex gap-2",children:n.jsxs("button",{ref:w,onClick:()=>_(!0),className:"px-3 py-1.5 rounded-xl bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/30 flex items-center gap-2 hover:from-yellow-500/20 hover:to-orange-500/20 transition",children:[n.jsx("span",{className:"text-lg",children:"🪙"}),n.jsx("span",{className:"font-bold",children:ae.getCoins()})]})})]}),n.jsx(ng,{current:o.current,required:o.required,level:a.level,animate:!0})]}),n.jsx(rg,{onClick:()=>r("/play")}),n.jsx(sg,{actions:Ee}),n.jsx(ig,{dailyQ:H,isFlipped:z,picked:K,onAnswer:ee,dailyCompleted:F,DAILY_Q_COINS:Y,DAILY_Q_XP:$}),n.jsx(ag,{categories:Pf,onCategorySelect:oe}),n.jsx(og,{onClick:()=>O(!0),isPulsing:a.energy<10}),n.jsxs("div",{onClick:()=>r("/surprise"),className:"mt-6 relative overflow-hidden rounded-3xl bg-gradient-to-br from-purple-500/20 via-pink-500/20 to-yellow-500/20 backdrop-blur border border-white/10 p-12 mb-4 cursor-pointer hover:scale-[1.02] transition-all group",children:[n.jsxs("div",{className:"absolute inset-0 opacity-30",children:[n.jsx("div",{className:"absolute top-4 left-4 w-2 h-2 bg-yellow-400 rounded-full animate-pulse"}),n.jsx("div",{className:"absolute top-8 right-8 w-3 h-3 bg-pink-400 rounded-full animate-pulse",style:{animationDelay:"0.5s"}}),n.jsx("div",{className:"absolute bottom-6 left-12 w-2 h-2 bg-purple-400 rounded-full animate-pulse",style:{animationDelay:"1s"}}),n.jsx("div",{className:"absolute bottom-4 right-6 w-2 h-2 bg-blue-400 rounded-full animate-pulse",style:{animationDelay:"1.5s"}})]}),n.jsxs("div",{className:"relative flex items-center justify-between",children:[n.jsxs("div",{children:[n.jsx("h3",{className:"text-xl font-bold mb-1 bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400 bg-clip-text text-transparent",children:"✨ Surprise Zone"}),n.jsx("p",{className:"text-sm text-gray-400",children:"Mystery Box • Avatar Room • Fun Facts"})]}),n.jsx("div",{className:"text-4xl group-hover:rotate-12 transition-transform",children:"🎁"})]})]}),n.jsx(lg,{show:A,onClose:()=>q(!1),player:a,changeAvatar:l,GAME_CONSTANTS:ft}),n.jsx(ug,{show:v,onClose:()=>x(!1),selectedCategory:S,difficulty:N,setDifficulty:C,count:R,setCount:T,timer:h,setTimer:b,onStart:me}),n.jsx(mg,{show:B,onClose:()=>O(!1),allCategories:_f,category:X,setCategory:Q,difficulty:te,setDifficulty:de,count:re,setCount:W,onStart:Se}),n.jsx(cg,{show:g,onClose:()=>j(!1),categories:Rf,onCategorySelect:oe}),n.jsx(dg,{show:k,onClose:()=>_(!1),coins:a.coins,onNavigateToPlay:()=>{_(!1),r("/play")}})]})]})]})}const ma={OWNED_CHARACTERS:"owned_characters",SOUND:"play_sound_on"},fa={get:(e,t=null)=>{try{const r=localStorage.getItem(e);return r?JSON.parse(r):t}catch{return t}},set:(e,t)=>{try{localStorage.setItem(e,JSON.stringify(t))}catch{}}};function To(){const[e,t]=d.useState(()=>ae.getCoins()),[r,s]=d.useState(()=>ae.getXP()),[a,o]=d.useState(()=>ae.getLevel()),[i,l]=d.useState(()=>fa.get(ma.OWNED_CHARACTERS,[])),[c,u]=d.useState(()=>fa.get(ma.SOUND,!0));d.useEffect(()=>{const N=Ke.getCurrentUser();N!=null&&N.phone&&ae.initializeUserData(N.phone)},[]);const m=d.useCallback(N=>{const C=ae.addCoins(N,"Game reward");return t(C),C},[]),p=d.useCallback(N=>{const C=ae.addXP(N);s(C);const R=ae.getLevel();return R>a&&o(R),C},[a]),f=d.useCallback((N,C="Purchase")=>{if(ae.spendCoins(N,C)){const R=ae.getCoins();return t(R),!0}return!1},[]),w=d.useCallback(N=>{l(C=>{const R=[...new Set([...C,N])];return fa.set(ma.OWNED_CHARACTERS,R),R})},[]),g=d.useCallback(()=>ae.checkAndUpdateLevel(),[]);d.useEffect(()=>{fa.set(ma.SOUND,c)},[c]);const j=d.useCallback((N,C,R,T,h)=>{const b=Ke.getCurrentUser(),k=ae.recordQuizSession(b==null?void 0:b.phone,{score:N,totalQuestions:C,category:R,difficulty:T,mode:h});return t(k.newTotal),s(k.newXP),o(k.newLevel),k},[]),S=d.useCallback((N,C,R)=>{const T=Ke.getCurrentUser(),h=ae.recordPracticeSession(T==null?void 0:T.phone,{questionsCompleted:N,correctAnswers:C,category:R});return t(h.newTotal),s(h.newXP),h},[]),y=d.useCallback(()=>{const N=Ke.getCurrentUser();return N!=null&&N.phone?ae.getUserStats(N.phone):null},[]),v=d.useCallback(()=>{const N=Ke.getCurrentUser();return N!=null&&N.phone?ae.getQuestData(N.phone):null},[]),x=d.useCallback(()=>{const N=Ke.getCurrentUser();return ae.getTodaySummary(N==null?void 0:N.phone)},[]);return{coins:e,xp:r,level:a,ownedCharacters:i,soundOn:c,addCoins:m,addXp:p,spendCoins:f,unlockCharacter:w,setSoundOn:u,checkLevelUp:g,recordQuizComplete:j,recordPracticeComplete:S,getUserStats:y,getQuestData:v,getTodaySummary:x,nextLevelThreshold:100*a*(a-1),xpProgress:r/Math.max(1,100*a*(a-1))}}const pg=[{name:"General Knowledge",questions:50,icon:"🧠",color:"#7C3AED"},{name:"Artificial Intelligence",questions:28,icon:"🤖",color:"#10B981"},{name:"Fun facts",questions:30,icon:"🎉",color:"#EF4444"},{name:"Science",questions:45,icon:"🧪",color:"#F59E0B"},{name:"History",questions:42,icon:"🏺",color:"#2563EB"},{name:"Geography",questions:38,icon:"🗺️",color:"#FACC15"}],Zt=pg.slice(0,6),Vn=360/Zt.length,Af={"general-knowledge":"TINA","artificial-intelligence":"ALBERT","fun-facts":"BONZO",science:"POP",history:"TITO",geography:"HECTOR"},yn={FULL_TURNS:6,DURATION:2800,OVERSHOOT:12,SETTLE_DURATION:350},er=e=>e.toLowerCase().replace(/[^\w\s-]/g,"").replace(/\s+/g,"-"),Id=e=>(e%360+360)%360,cc=e=>{try{navigator.vibrate&&navigator.vibrate(e)}catch{}},Rr=(e,t=.7)=>{try{const r=new Audio(e);r.volume=t,r.play()}catch{}};function xg({run:e,coins:t,xp:r,level:s,ownedCharacters:a,onSpin:o,onBack:i,spinning:l,angle:c,transition:u,result:m,showCallout:p,glowColor:f,soundOn:w,setSoundOn:g,showSparkle:j,pulseIdx:S,nextProgressIdx:y,pendingProgressIdx:v,coinBurstTick:x,lastAnswerWasCorrect:N}){const C=100*s*(s-1),[R,T]=d.useState(!1),h=d.useRef(0),b=d.useRef(null),k=d.useRef(null),[_,A]=d.useState({dx:110,dy:-260}),[q,H]=d.useState(!1),[V,K]=d.useState(ae.getCoins());return d.useEffect(()=>{const M=setInterval(()=>{K(ae.getCoins())},1e3);return()=>clearInterval(M)},[]),d.useEffect(()=>(document.body.classList.add("hide-bottom-nav"),()=>{document.body.classList.remove("hide-bottom-nav")}),[]),d.useEffect(()=>{if(v==null)return;T(!1);const U=setTimeout(()=>T(!0),30);return()=>clearTimeout(U)},[v]),d.useEffect(()=>{var M,I,z,D;if(!x||!N||x===h.current)return;h.current=x;try{const E=(I=(M=k==null?void 0:k.current)==null?void 0:M.getBoundingClientRect)==null?void 0:I.call(M),P=(D=(z=b==null?void 0:b.current)==null?void 0:z.getBoundingClientRect)==null?void 0:D.call(z);if(E&&P){const $=E.left+E.width/2,Y=E.top+E.height/2,L=P.left+P.width/2,G=P.top+P.height/2;A({dx:L-$,dy:G-Y})}}catch{}w&&Rr("/sounds/coin.mp3",.7),H(!0);const U=setTimeout(()=>H(!1),700);return()=>clearTimeout(U)},[x,w,N]),n.jsx("div",{className:"fixed inset-0 bg-base-bg text-base-text overflow-hidden",children:n.jsxs("div",{className:"h-full overflow-y-auto mx-auto max-w-md px-5 pt-[calc(env(safe-area-inset-top)+3rem)] pb-[calc(env(safe-area-inset-bottom)+5.25rem)]",children:[n.jsxs("header",{className:"flex items-center justify-between mb-8",children:[n.jsx("button",{onClick:i,className:"h-10 w-10 rounded-full border border-base-border grid place-items-center bg-white/5 hover:bg-white/10 transition translate-y-[4px]",children:"←"}),n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsxs("button",{className:"px-3 py-1 rounded-2xl bg-white/5 border border-base-border text-left translate-y-[4px]",children:[n.jsxs("div",{className:"text-[11px]",children:["Lvl ",s," • ",r,"/",C]}),n.jsx("div",{className:"mt-1 h-1 w-full bg-white/10 rounded",children:n.jsx("div",{className:"h-1 bg-brand-blue rounded",style:{width:`${Math.min(r/C,1)*100}%`}})})]}),n.jsxs("button",{ref:b,className:"px-3 py-1 rounded-2xl bg-white/5 border border-base-border translate-y-[4px]",children:["🪙 ",V]})]}),n.jsx("button",{onClick:()=>g(!w),className:"h-10 w-10 rounded-full border border-base-border grid place-items-center bg-white/5 hover:bg-white/10 transition translate-y-[4px]",children:n.jsx("span",{className:"text-lg",children:w?"🔊":"🔇"})})]}),a.length>0&&n.jsx("div",{className:"flex justify-center mb-6",children:n.jsx("div",{className:"flex gap-2 px-4 py-2 bg-white/10 rounded-2xl backdrop-blur border border-base-border",children:a.map(U=>{const M=Zt.find(z=>er(z.name)===U),I=Af[U];return n.jsxs("div",{className:"flex flex-col items-center",children:[n.jsx("div",{className:"w-8 h-8 rounded-full bg-white/20 flex items-center justify-center border border-white/30",children:n.jsx("span",{className:"text-sm",children:M==null?void 0:M.icon})}),n.jsx("span",{className:"text-[10px] text-base-muted mt-1",children:I})]},U)})})}),n.jsx("div",{className:"flex justify-center mt-12 sm:mt-16 mb-6",children:n.jsxs("div",{className:"w-80 max-w-full",children:[n.jsx("style",{children:`
              @keyframes qp_sweep { from { transform: translateX(0); } to { transform: translateX(100%); } }
            `}),n.jsx("div",{className:"relative grid grid-cols-3 gap-1 h-3 rounded-full overflow-hidden bg-white/10 border border-white/15",children:[0,1,2].map(U=>{const M=["#FF9800","#FFC107","#cadd75ff"],I=!!e.progress[U];return n.jsxs("div",{className:"relative h-full bg-white/10",children:[n.jsx("div",{className:"absolute inset-y-0 left-0 rounded-[6px]",style:{width:I?U===v?R?"100%":"0%":y===U&&v==null?"0%":"100%":"0%",backgroundColor:M[U],transition:U===v?"width 1200ms ease-out":"none"}}),S===U&&n.jsx("span",{className:"absolute inset-y-0 left-0 w-full overflow-hidden pointer-events-none",children:n.jsx("span",{className:"absolute inset-y-0 left-0 w-1 rounded bg-white/80",style:{animation:"qp_sweep 1200ms ease-out forwards"}})}),j===U&&n.jsx("span",{className:"absolute right-[-2px] top-1/2 -translate-y-1/2 text-xs select-none",children:"✨"})]},U)})},e.qIndex)]})}),n.jsx("section",{className:"flex flex-col items-center mt-28 sm:mt-32 mb-10",children:n.jsxs("div",{ref:k,className:"relative w-96 h-96 rounded-full select-none",children:[f&&n.jsx("div",{className:"pointer-events-none absolute -inset-4 rounded-full",style:{boxShadow:`0 0 0 8px ${f}40, 0 0 40px 12px ${f}60`}}),n.jsx("div",{className:"absolute inset-0 rounded-full border-4 border-white/20 shadow-2xl overflow-hidden will-change-transform bg-base-card",style:{transform:`rotate(${c}deg)`,transition:u},children:n.jsxs("svg",{width:"100%",height:"100%",viewBox:"0 0 100 100",className:"block",children:[Zt.map((U,M)=>{const I=M*Vn,z=I+Vn,D=Vn>180?1:0,E=Math.PI*I/180,P=Math.PI*z/180,$=50+45*Math.cos(E),Y=50-45*Math.sin(E),L=50+45*Math.cos(P),G=50-45*Math.sin(P),B=I+Vn/2,O=28,X=50+O*Math.cos(B*Math.PI/180),Q=50-O*Math.sin(B*Math.PI/180);return n.jsxs("g",{children:[n.jsx("path",{d:`M50,50 L${$},${Y} A45,45 0 ${D} 0 ${L},${G} Z`,fill:U.color,stroke:"rgba(255,255,255,0.3)",strokeWidth:"0.5"}),n.jsx("text",{x:X,y:Q,fill:"white",fontSize:"8",dominantBaseline:"middle",textAnchor:"middle",className:"font-bold",children:U.icon})]},M)}),n.jsx("circle",{cx:"50",cy:"50",r:"12",fill:"white",stroke:"#ddd",strokeWidth:"1"})]})}),n.jsx("button",{onClick:o,disabled:l,className:`absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                      w-24 h-24 rounded-full bg-white text-black font-black text-lg shadow-lg transition-all ${l?"opacity-60 cursor-not-allowed scale-95":"hover:scale-105 active:scale-95"}`,children:"SPIN"}),n.jsx("div",{className:"absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-2 z-20",children:n.jsx("div",{className:"w-6 h-8 bg-white rounded-lg shadow-md flex items-start justify-center pt-1",children:n.jsx("div",{className:"w-0 h-0 border-l-[6px] border-r-[6px] border-b-[8px] border-l-transparent border-r-transparent border-b-gray-600"})})}),p&&m&&n.jsx("div",{className:"absolute left-1/2 -translate-x-1/2 -top-16 z-30",children:n.jsxs("div",{className:"px-4 py-2 rounded-2xl bg-base-card border border-base-border shadow-lg font-semibold",children:[n.jsx("span",{className:"mr-2",children:m.cat.icon}),m.cat.name]})}),q&&n.jsxs(n.Fragment,{children:[n.jsx("style",{children:`
                    @keyframes coinFly {
                      0%   { transform: translate(-50%, -50%) scale(0.9); opacity: 1; }
                      100% { transform: translate(var(--coin-dx), var(--coin-dy)) scale(0.4); opacity: 0; }
                    }
                `}),[0,1,2].map(U=>n.jsx("div",{className:"pointer-events-none absolute z-30 top-1/2 left-1/2",style:{animation:`coinFly 600ms ease-out ${U*80}ms forwards`,"--coin-dx":`${_.dx}px`,"--coin-dy":`${_.dy}px`},children:n.jsx("div",{className:"w-6 h-6 rounded-full grid place-items-center bg-yellow-400 text-black font-bold",children:"🪙"})},U))]})]})}),n.jsx("div",{className:"text-center",children:n.jsx("button",{disabled:!0,className:"text-base-muted underline opacity-60 cursor-not-allowed text-sm",children:"Party Spin (pass & play)"})})]})})}var Da={linear:function(e,t,r,s){var a=r-t;return a*e/s+t},easeInQuad:function(e,t,r,s){var a=r-t;return a*(e/=s)*e+t},easeOutQuad:function(e,t,r,s){var a=r-t;return-a*(e/=s)*(e-2)+t},easeInOutQuad:function(e,t,r,s){var a=r-t;return(e/=s/2)<1?a/2*e*e+t:-a/2*(--e*(e-2)-1)+t},easeInCubic:function(e,t,r,s){var a=r-t;return a*(e/=s)*e*e+t},easeOutCubic:function(e,t,r,s){var a=r-t;return a*((e=e/s-1)*e*e+1)+t},easeInOutCubic:function(e,t,r,s){var a=r-t;return(e/=s/2)<1?a/2*e*e*e+t:a/2*((e-=2)*e*e+2)+t},easeInQuart:function(e,t,r,s){var a=r-t;return a*(e/=s)*e*e*e+t},easeOutQuart:function(e,t,r,s){var a=r-t;return-a*((e=e/s-1)*e*e*e-1)+t},easeInOutQuart:function(e,t,r,s){var a=r-t;return(e/=s/2)<1?a/2*e*e*e*e+t:-a/2*((e-=2)*e*e*e-2)+t},easeInQuint:function(e,t,r,s){var a=r-t;return a*(e/=s)*e*e*e*e+t},easeOutQuint:function(e,t,r,s){var a=r-t;return a*((e=e/s-1)*e*e*e*e+1)+t},easeInOutQuint:function(e,t,r,s){var a=r-t;return(e/=s/2)<1?a/2*e*e*e*e*e+t:a/2*((e-=2)*e*e*e*e+2)+t},easeInSine:function(e,t,r,s){var a=r-t;return-a*Math.cos(e/s*(Math.PI/2))+a+t},easeOutSine:function(e,t,r,s){var a=r-t;return a*Math.sin(e/s*(Math.PI/2))+t},easeInOutSine:function(e,t,r,s){var a=r-t;return-a/2*(Math.cos(Math.PI*e/s)-1)+t},easeInExpo:function(e,t,r,s){var a=r-t;return e==0?t:a*Math.pow(2,10*(e/s-1))+t},easeOutExpo:function(e,t,r,s){var a=r-t;return e==s?t+a:a*(-Math.pow(2,-10*e/s)+1)+t},easeInOutExpo:function(e,t,r,s){var a=r-t;return e===0?t:e===s?t+a:(e/=s/2)<1?a/2*Math.pow(2,10*(e-1))+t:a/2*(-Math.pow(2,-10*--e)+2)+t},easeInCirc:function(e,t,r,s){var a=r-t;return-a*(Math.sqrt(1-(e/=s)*e)-1)+t},easeOutCirc:function(e,t,r,s){var a=r-t;return a*Math.sqrt(1-(e=e/s-1)*e)+t},easeInOutCirc:function(e,t,r,s){var a=r-t;return(e/=s/2)<1?-a/2*(Math.sqrt(1-e*e)-1)+t:a/2*(Math.sqrt(1-(e-=2)*e)+1)+t},easeInElastic:function(e,t,r,s){var a=r-t,o,i,l;return l=1.70158,i=0,o=a,e===0?t:(e/=s)===1?t+a:(i||(i=s*.3),o<Math.abs(a)?(o=a,l=i/4):l=i/(2*Math.PI)*Math.asin(a/o),-(o*Math.pow(2,10*(e-=1))*Math.sin((e*s-l)*(2*Math.PI)/i))+t)},easeOutElastic:function(e,t,r,s){var a=r-t,o,i,l;return l=1.70158,i=0,o=a,e===0?t:(e/=s)===1?t+a:(i||(i=s*.3),o<Math.abs(a)?(o=a,l=i/4):l=i/(2*Math.PI)*Math.asin(a/o),o*Math.pow(2,-10*e)*Math.sin((e*s-l)*(2*Math.PI)/i)+a+t)},easeInOutElastic:function(e,t,r,s){var a=r-t,o,i,l;return l=1.70158,i=0,o=a,e===0?t:(e/=s/2)===2?t+a:(i||(i=s*(.3*1.5)),o<Math.abs(a)?(o=a,l=i/4):l=i/(2*Math.PI)*Math.asin(a/o),e<1?-.5*(o*Math.pow(2,10*(e-=1))*Math.sin((e*s-l)*(2*Math.PI)/i))+t:o*Math.pow(2,-10*(e-=1))*Math.sin((e*s-l)*(2*Math.PI)/i)*.5+a+t)},easeInBack:function(e,t,r,s,a){var o=r-t;return a===void 0&&(a=1.70158),o*(e/=s)*e*((a+1)*e-a)+t},easeOutBack:function(e,t,r,s,a){var o=r-t;return a===void 0&&(a=1.70158),o*((e=e/s-1)*e*((a+1)*e+a)+1)+t},easeInOutBack:function(e,t,r,s,a){var o=r-t;return a===void 0&&(a=1.70158),(e/=s/2)<1?o/2*(e*e*(((a*=1.525)+1)*e-a))+t:o/2*((e-=2)*e*(((a*=1.525)+1)*e+a)+2)+t},easeInBounce:function(e,t,r,s){var a=r-t,o;return o=Da.easeOutBounce(s-e,0,a,s),a-o+t},easeOutBounce:function(e,t,r,s){var a=r-t;return(e/=s)<1/2.75?a*(7.5625*e*e)+t:e<2/2.75?a*(7.5625*(e-=1.5/2.75)*e+.75)+t:e<2.5/2.75?a*(7.5625*(e-=2.25/2.75)*e+.9375)+t:a*(7.5625*(e-=2.625/2.75)*e+.984375)+t},easeInOutBounce:function(e,t,r,s){var a=r-t,o;return e<s/2?(o=Da.easeInBounce(e*2,0,a,s),o*.5+t):(o=Da.easeOutBounce(e*2-s,0,a,s),o*.5+a*.5+t)}},gg=Da;function vg(e){return e*Math.PI/180}function Et(e,t){return e+Math.random()*(t-e)}function yg(e,t){return Math.floor(e+Math.random()*(t-e+1))}var js;(function(e){e[e.Circle=0]="Circle",e[e.Square=1]="Square",e[e.Strip=2]="Strip"})(js||(js={}));var Sn;(function(e){e[e.Positive=1]="Positive",e[e.Negative=-1]="Negative"})(Sn||(Sn={}));const bg=1e3/60;class wg{constructor(t,r,s,a){this.getOptions=r;const{colors:o,initialVelocityX:i,initialVelocityY:l}=this.getOptions();this.context=t,this.x=s,this.y=a,this.w=Et(5,20),this.h=Et(5,20),this.radius=Et(5,10),this.vx=typeof i=="number"?Et(-i,i):Et(i.min,i.max),this.vy=typeof l=="number"?Et(-l,0):Et(l.min,l.max),this.shape=yg(0,2),this.angle=vg(Et(0,360)),this.angularSpin=Et(-.2,.2),this.color=o[Math.floor(Math.random()*o.length)],this.rotateY=Et(0,1),this.rotationDirection=Et(0,1)?Sn.Positive:Sn.Negative}update(t){const{gravity:r,wind:s,friction:a,opacity:o,drawShape:i}=this.getOptions(),l=t/bg;this.x+=this.vx*l,this.y+=this.vy*l,this.vy+=r*l,this.vx+=s*l,this.vx*=a**l,this.vy*=a**l,this.rotateY>=1&&this.rotationDirection===Sn.Positive?this.rotationDirection=Sn.Negative:this.rotateY<=-1&&this.rotationDirection===Sn.Negative&&(this.rotationDirection=Sn.Positive);const c=.1*this.rotationDirection*l;if(this.rotateY+=c,this.angle+=this.angularSpin,this.context.save(),this.context.translate(this.x,this.y),this.context.rotate(this.angle),this.context.scale(1,this.rotateY),this.context.rotate(this.angle),this.context.beginPath(),this.context.fillStyle=this.color,this.context.strokeStyle=this.color,this.context.globalAlpha=o,this.context.lineCap="round",this.context.lineWidth=2,i&&typeof i=="function")i.call(this,this.context);else switch(this.shape){case js.Circle:{this.context.beginPath(),this.context.arc(0,0,this.radius,0,2*Math.PI),this.context.fill();break}case js.Square:{this.context.fillRect(-this.w/2,-this.h/2,this.w,this.h);break}case js.Strip:{this.context.fillRect(-this.w/6,-this.h/2,this.w/3,this.h);break}}this.context.closePath(),this.context.restore()}}class jg{constructor(t,r){this.x=0,this.y=0,this.w=0,this.h=0,this.lastNumberOfPieces=0,this.tweenProgress=0,this.tweenFrom=0,this.particles=[],this.particlesGenerated=0,this.removeParticleAt=a=>{this.particles.splice(a,1)},this.getParticle=()=>{const a=Et(this.x,this.w+this.x),o=Et(this.y,this.h+this.y);return new wg(this.context,this.getOptions,a,o)},this.animate=a=>{const{canvas:o,context:i,particlesGenerated:l,lastNumberOfPieces:c}=this,{run:u,recycle:m,numberOfPieces:p,debug:f,tweenFunction:w,tweenDuration:g}=this.getOptions();if(!u)return!1;const j=this.particles.length,S=m?j:l;if(S<p){c!==p&&(this.tweenProgress=0,this.tweenFrom=S,this.lastNumberOfPieces=p),this.tweenProgress=Math.min(g,Math.max(0,this.tweenProgress+a));const y=w(this.tweenProgress,this.tweenFrom,p,g),v=Math.round(y-S);for(let x=0;x<v;x++)this.particles.push(this.getParticle());this.particlesGenerated+=v}f&&(i.font="12px sans-serif",i.fillStyle="#333",i.textAlign="right",i.fillText(`Particles: ${j}`,o.width-10,o.height-20));for(let y=this.particles.length-1;y>=0;y--){const v=this.particles[y];v.update(a),(v.y>o.height||v.y<-100||v.x>o.width+100||v.x<-100)&&(m&&S<=p?this.particles[y]=this.getParticle():this.removeParticleAt(y))}return j>0||S<p},this.canvas=t;const s=this.canvas.getContext("2d");if(!s)throw new Error("Could not get canvas context");this.context=s,this.getOptions=r}}const dc={width:typeof window<"u"?window.innerWidth:300,height:typeof window<"u"?window.innerHeight:200,numberOfPieces:200,friction:.99,wind:0,gravity:.1,initialVelocityX:4,initialVelocityY:10,colors:["#f44336","#e91e63","#9c27b0","#673ab7","#3f51b5","#2196f3","#03a9f4","#00bcd4","#009688","#4CAF50","#8BC34A","#CDDC39","#FFEB3B","#FFC107","#FF9800","#FF5722","#795548"],opacity:1,debug:!1,tweenFunction:gg.easeInOutQuad,tweenDuration:5e3,recycle:!0,run:!0};class Ng{constructor(t,r){this.lastFrameTime=0,this.setOptionsWithDefaults=a=>{const o={confettiSource:{x:0,y:0,w:this.canvas.width,h:0}};this._options={...o,...dc,...a},Object.assign(this,a.confettiSource)},this.update=(a=0)=>{const{options:{run:o,onConfettiComplete:i,frameRate:l},canvas:c,context:u}=this,m=Math.min(a-this.lastFrameTime,50);if(l&&m<1e3/l){this.rafId=requestAnimationFrame(this.update);return}this.lastFrameTime=a-(l?m%l:0),o&&(u.fillStyle="white",u.clearRect(0,0,c.width,c.height)),this.generator.animate(m)?this.rafId=requestAnimationFrame(this.update):(i&&typeof i=="function"&&this.generator.particlesGenerated>0&&i.call(this,this),this._options.run=!1)},this.reset=()=>{this.generator&&this.generator.particlesGenerated>0&&(this.generator.particlesGenerated=0,this.generator.particles=[],this.generator.lastNumberOfPieces=0)},this.stop=()=>{this.options={run:!1},this.rafId&&(cancelAnimationFrame(this.rafId),this.rafId=void 0)},this.canvas=t;const s=this.canvas.getContext("2d");if(!s)throw new Error("Could not get canvas context");this.context=s,this.generator=new jg(this.canvas,()=>this.options),this.options=r,this.update()}get options(){return this._options}set options(t){var a,o;const r=(a=this._options)==null?void 0:a.run,s=(o=this._options)==null?void 0:o.recycle;this.setOptionsWithDefaults(t),this.generator&&(Object.assign(this.generator,this.options.confettiSource),typeof t.recycle=="boolean"&&t.recycle&&s===!1&&(this.generator.lastNumberOfPieces=this.generator.particles.length)),typeof t.run=="boolean"&&t.run&&r===!1&&this.update()}}const kg=gt.createRef();class uc extends gt.Component{constructor(t){super(t),this.canvas=gt.createRef(),this.canvas=t.canvasRef||kg}componentDidMount(){if(this.canvas.current){const t=ri(this.props)[0];this.confetti=new Ng(this.canvas.current,t)}}componentDidUpdate(){const t=ri(this.props)[0];this.confetti&&(this.confetti.options=t)}componentWillUnmount(){this.confetti&&this.confetti.stop(),this.confetti=void 0}render(){const[t,r]=ri(this.props),s={zIndex:2,position:"absolute",pointerEvents:"none",top:0,left:0,bottom:0,right:0,...r.style};return n.jsx("canvas",{width:t.width,height:t.height,ref:this.canvas,...r,style:s})}}uc.defaultProps={...dc};uc.displayName="ReactConfetti";function ri(e){const t={},r={},s={},a=[...Object.keys(dc),"confettiSource","drawShape","onConfettiComplete","frameRate"],o=["canvasRef"];for(const i in e){const l=e[i];a.includes(i)?t[i]=l:o.includes(i)?o[i]=l:s[i]=l}return[t,s,r]}const If=gt.forwardRef((e,t)=>n.jsx(uc,{canvasRef:t,...e}));function Ld({question:e,category:t,onAnswer:r,run:s,timeLeft:a,usedLifelines:o,onUseLifeline:i,eliminatedOptions:l,audienceData:c,onBack:u,timeUp:m,onTimeUpBackToWheel:p,soundOn:f}){const[w,g]=d.useState(null),[j,S]=d.useState(!1),[y,v]=d.useState(!1),x=d.useRef(null),N=d.useRef(null),[C,R]=d.useState(null);d.useEffect(()=>(document.body.classList.add("hide-bottom-nav"),()=>{document.body.classList.remove("hide-bottom-nav")}),[]),d.useEffect(()=>{if(!j||!x.current)return;const b=x.current.getBoundingClientRect();R({x:b.left,y:b.top-300,w:b.width,h:8})},[j]);const T=b=>{if(j)return;g(b),S(!0);const k=b===e.correctIndex;cc(k?[50,30,50]:[200]),f&&Rr(k?"/sounds/correct.mp3":"/sounds/wrong.mp3",.7),setTimeout(()=>{r(k,null)},1500)},h=w===e.correctIndex;return n.jsx("div",{className:"fixed inset-0 bg-gradient-to-br from-gray-900 to-black text-white overflow-hidden",children:n.jsxs("div",{ref:N,className:"relative h-full overflow-y-auto px-5 pt-16 pb-[calc(env(safe-area-inset-bottom)+5.25rem)]",children:[n.jsx("div",{className:"mb-4",children:n.jsx("button",{onClick:()=>v(!0),className:"h-10 w-10 rounded-full border border-base-border grid place-items-center bg-white/5 hover:bg-white/10 transition",children:"←"})}),n.jsxs("div",{className:"text-center mb-6",children:[n.jsx("div",{className:`text-4xl font-black mb-2 ${a<=10?"text-red-400 animate-pulse":"text-white"}`,children:a}),n.jsx("div",{className:"w-full bg-white/20 rounded-full h-2",children:n.jsx("div",{className:`h-full rounded-full transition-all duration-1000 ${a<=10?"bg-red-400":"bg-blue-400"}`,style:{width:`${a/30*100}%`}})})]}),n.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[n.jsx("div",{className:"w-12 h-12 rounded-full flex items-center justify-center text-2xl",style:{backgroundColor:t.color},children:t.icon}),n.jsxs("div",{children:[n.jsx("div",{className:"text-lg font-bold",children:t.name}),n.jsxs("div",{className:"text-sm text-gray-400",children:["Question ",s.qIndex+1,"/3"]})]})]}),n.jsx("h2",{ref:x,className:"text-xl font-semibold mb-6 leading-relaxed",children:e.prompt}),n.jsx("div",{className:"space-y-3 mb-6",children:e.options.map((b,k)=>{const _=l.includes(k),A=w===k,q=k===e.correctIndex;let H="bg-white/10 border-white/20",V="opacity-100";return _?V="opacity-30":j&&A?H=q?"bg-green-500/30 border-green-400":"bg-red-500/30 border-red-400":j&&q?H="bg-green-500/30 border-green-400":A&&(H="bg-white/20 border-white/40"),n.jsx("button",{onClick:()=>T(k),disabled:j||_,className:`w-full p-4 rounded-xl border-2 text-left transition-all duration-300 ${H} ${V} ${!j&&!_?"hover:bg-white/15 active:scale-98":""}`,children:n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsx("div",{className:"w-8 h-8 rounded-full bg-white/20 flex items-center justify-center font-bold text-sm",children:String.fromCharCode(65+k)}),n.jsx("span",{className:"font-medium flex-1",children:b}),c&&n.jsxs("span",{className:"text-xs text-base-muted",children:[Math.round(c[k]),"%"]})]})},k)})}),!j&&n.jsxs("div",{className:"flex gap-4 mb-8",children:[n.jsx("button",{onClick:()=>i("fifty"),disabled:o.fifty,className:`flex-1 p-4 rounded-2xl border-2 font-bold transition-all ${o.fifty?"bg-gray-700 border-gray-600 text-gray-400":"bg-purple-600 border-purple-400 text-white hover:bg-purple-500 active:scale-95"}`,children:"50:50"}),n.jsx("button",{onClick:()=>i("audience"),disabled:o.audience,className:`flex-1 p-4 rounded-2xl border-2 font-bold transition-all ${o.audience?"bg-gray-700 border-gray-600 text-gray-400":"bg-blue-600 border-blue-400 text-white hover:bg-blue-500 active:scale-95"}`,children:"👥 Ask"})]}),j&&n.jsxs("div",{className:"relative text-center",children:[h&&n.jsx("div",{className:"absolute inset-0 pointer-events-none",children:n.jsx(If,{recycle:!1,numberOfPieces:120,gravity:.9,tweenDuration:1800,confettiSource:C||{x:0,y:0,w:typeof window<"u"?window.innerWidth:320,h:1}})}),n.jsx("button",{onClick:()=>r(h,null,!0),className:"relative z-10 bg-white text-black font-black py-4 px-8 rounded-2xl text-lg hover:bg-gray-100 transition-all active:scale-95",children:"Continue"})]}),m&&n.jsx("div",{className:"fixed inset-0 z-50 bg-black/60 flex items-center justify-center px-6",children:n.jsxs("div",{className:"w-full max-w-sm rounded-2xl bg-base-card border border-base-border p-5 text-center",children:[n.jsx("div",{className:"text-lg font-bold mb-2",children:"Time's up"}),n.jsx("p",{className:"text-base-muted mb-5",children:"You ran out of time."}),n.jsx("button",{onClick:p,className:"mx-auto w-48 py-3 rounded-xl bg-brand-blue text-white font-semibold hover:bg-brand-blue/90 transition",children:"Back to Wheel"})]})}),y&&n.jsx("div",{className:"fixed inset-0 z-50 bg-black/60 flex items-center justify-center px-6",children:n.jsxs("div",{className:"w-full max-w-sm rounded-2xl bg-base-card border border-base-border p-5 text-center",children:[n.jsx("div",{className:"text-lg font-bold mb-2",children:"Want to quit?"}),n.jsx("p",{className:"text-base-muted mb-5",children:"You'll lose this question's progress."}),n.jsxs("div",{className:"flex gap-3",children:[n.jsx("button",{onClick:()=>v(!1),className:"flex-1 py-3 rounded-xl border border-base-border bg-white/5 hover:bg-white/10 transition",children:"No"}),n.jsx("button",{onClick:u,className:"flex-1 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-500 transition",children:"Yes"})]})]})})]})})}function Dd({category:e,onComplete:t,isBonus:r=!1,soundOn:s=!0}){return d.useEffect(()=>{s&&Rr("/sounds/flush.mp3",.8);const a=setTimeout(t,1e3);return cc([50]),()=>clearTimeout(a)},[t,s]),d.useEffect(()=>(document.body.classList.add("hide-bottom-nav"),()=>{document.body.classList.remove("hide-bottom-nav")}),[]),r?n.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-purple-500 to-blue-600 flex flex-col items-center justify-center text-white",children:[n.jsx("h2",{className:"text-5xl font-black mb-8",children:"Bonus Question"}),n.jsx("div",{className:"w-32 h-32 bg-white/20 rounded-full flex items-center justify-center animate-pulse",children:n.jsx("span",{className:"text-6xl",children:"⭐"})})]}):n.jsx("div",{className:"min-h-screen bg-base-bg text-white flex items-center justify-center",children:n.jsxs("div",{className:"relative w-96 h-96 rounded-full flex items-center justify-center",style:{backgroundColor:e.color},children:[n.jsxs("div",{className:"absolute inset-0 opacity-10 pointer-events-none",children:[n.jsx("div",{className:"absolute top-8 left-10 w-20 h-20 bg-white/20 rounded-full"}),n.jsx("div",{className:"absolute bottom-10 right-12 w-24 h-24 bg-white/20 rounded-full"})]}),n.jsxs("div",{className:"relative z-10 text-center",children:[n.jsx("div",{className:"text-4xl font-black mb-2",children:e.name}),n.jsx("div",{className:"w-20 h-20 bg-white/20 rounded-full grid place-items-center mx-auto",children:n.jsx("span",{className:"text-4xl",children:e.icon})})]})]})})}function Sg({onDone:e}){return d.useEffect(()=>{const t=setTimeout(e,1e3);return()=>clearTimeout(t)},[e]),n.jsx("div",{className:"min-h-screen flex items-center justify-center bg-green-600 text-white",children:n.jsx("h2",{className:"text-2xl font-black",children:"Whohoo!! 3 correct in a row 🎉"})})}function Cg({onSelect:e}){return n.jsx("div",{className:"min-h-screen bg-gradient-to-br from-purple-600 to-pink-600 text-white",children:n.jsxs("div",{className:"mx-auto max-w-md px-5 pt-16 pb-8",children:[n.jsxs("header",{className:"text-center mb-12",children:[n.jsx("div",{className:"text-6xl mb-4",children:"🏆"}),n.jsx("h1",{className:"text-4xl font-black mb-4",children:"Perfect Round!"}),n.jsx("p",{className:"text-xl opacity-90",children:"Choose a character to unlock"})]}),n.jsx("div",{className:"grid grid-cols-2 gap-6",children:Zt.map(t=>{const r=Af[er(t.name)];return n.jsxs("button",{onClick:()=>e(er(t.name)),className:"p-6 rounded-3xl border-2 border-white/20 bg-white/10 backdrop-blur text-center hover:bg-white/20 hover:scale-105 transition-all duration-300 active:scale-95",children:[n.jsx("div",{className:"text-4xl mb-3",children:t.icon}),n.jsx("div",{className:"font-black text-lg mb-1",children:r}),n.jsx("div",{className:"text-sm opacity-75",children:t.name})]},er(t.name))})})]})})}function Eg({onBack:e}){const{coins:t,xp:r,level:s,ownedCharacters:a,soundOn:o,unlockCharacter:i,setSoundOn:l}=To(),[c,u]=d.useState("wheel"),[m,p]=d.useState({qIndex:0,progress:[!1,!1,!1],lifelines:{fifty:!1,audience:!1}}),[f,w]=d.useState([]),[g,j]=d.useState(null),[S,y]=d.useState(null),[v,x]=d.useState(30),[N,C]=d.useState([]),[R,T]=d.useState(null),[h,b]=d.useState(null),[k,_]=d.useState(!1),[A,q]=d.useState(0),[H,V]=d.useState("none"),[K,U]=d.useState(!1),[M,I]=d.useState(null),[z,D]=d.useState(!1),[E,P]=d.useState(null),[$,Y]=d.useState(-1),[L,G]=d.useState(0),[B,O]=d.useState(null),[X,Q]=d.useState(null),[te,de]=d.useState(!1),[re,W]=d.useState(null),[F,ne]=d.useState(-1),[ee,oe]=d.useState([!1,!1,!1]),[me,Se]=d.useState(!1),[Ee,be]=d.useState(!1),pe=d.useRef(null),Ne=d.useRef(null),xe=d.useRef(null),we=d.useMemo(()=>{var J;return((J=window.matchMedia)==null?void 0:J.call(window,"(prefers-reduced-motion: reduce)").matches)||!1},[]);d.useEffect(()=>(Ye(),nt(),window.history.pushState({mode:"classic"},"",window.location.href),()=>Ae()),[]),d.useEffect(()=>{const J=le=>{le.preventDefault(),e()};return window.addEventListener("popstate",J),()=>window.removeEventListener("popstate",J)},[e]),d.useEffect(()=>(c==="question"&&v>0&&!Ee?pe.current=setTimeout(()=>{x(J=>{const le=J-1;return le===10&&o&&Rr("/sounds/tick.mp3",.8),le})},1e3):c==="question"&&v===0&&_(!0),()=>{pe.current&&clearTimeout(pe.current)}),[c,v,o,Ee]),d.useEffect(()=>{if(c!=="wheel"||B==null)return;Y(B),o&&Rr("/sounds/progress.mp3",.6),ne(B);const J=setTimeout(()=>ne(-1),900),le=setTimeout(()=>Y(-1),900),he=setTimeout(()=>{re&&(re==="streakFlash"?u("streakFlash"):re==="characterPicker"?u("characterPicker"):Je(),W(null)),O(null)},1800);return()=>{clearTimeout(J),clearTimeout(le),clearTimeout(he)}},[c,B,re,o]),d.useEffect(()=>{c!=="wheel"||!me||(G(J=>J+1),Se(!1))},[c,me]),d.useEffect(()=>{if(c!=="wheel"||X==null)return;const le=setTimeout(()=>{O(X),Q(null)},te?1800:0);return()=>clearTimeout(le)},[c,X,te]);const Ye=async()=>{try{const le=await(await fetch("/data/quiz_questions_bank.csv")).text(),{data:he}=qn.parse(le,{header:!0,skipEmptyLines:!0,transformHeader:ce=>ce.trim().toLowerCase()}),ve=he.map((ce,ke)=>{var fe;const ye=[ce.option1,ce.option2,ce.option3,ce.option4].map(ge=>(ge||"").trim()).filter(Boolean);if(ye.length<4)return null;let ue={a:0,b:1,c:2,d:3}[(fe=ce.answer)==null?void 0:fe.toLowerCase()];return ue===void 0&&(ue=ye.findIndex(ge=>ge.toLowerCase()===(ce.answer||"").toLowerCase())),ue===-1&&(ue=0),{id:ce.id||`q_${ke}`,prompt:(ce.question||"").trim(),options:ye,correctIndex:ue,category:(ce.category||ce.subject||"general knowledge").trim(),difficulty:(ce.difficulty||"medium").toLowerCase(),explanation:(ce.explanation||"").trim()}}).filter(Boolean);w(ve)}catch(J){console.error("Failed to load questions:",J),w([])}},nt=()=>{const J=new Audio("/sounds/spin.mp3");J.loop=!0,J.volume=.6,Ne.current=J},Ae=()=>{if(pe.current&&clearTimeout(pe.current),xe.current&&(clearTimeout(xe.current),xe.current=null),Ne.current){try{Ne.current.pause()}catch{}Ne.current=null}},Qe=()=>{p({qIndex:0,progress:[!1,!1,!1],lifelines:{fifty:!1,audience:!1}}),oe([!1,!1,!1]),j(null),y(null),b(null),C([]),T(null),_(!1),G(0)},Je=()=>{e(),Qe()},Lt=()=>{if(o&&Ne.current){try{Ne.current.currentTime=0,Ne.current.play()}catch{}xe.current&&clearTimeout(xe.current),xe.current=setTimeout(()=>{Me()},2e3)}},Me=()=>{if(xe.current&&(clearTimeout(xe.current),xe.current=null),Ne.current)try{Ne.current.pause(),Ne.current.currentTime=0}catch{}},He=()=>{if(K)return;I(null),D(!1),P(null),U(!0),Lt();const J=Math.floor(Math.random()*Zt.length),le=Zt[J],he=Id(A),ve=J*Vn+Vn/2,ce=(Math.random()-.5)*(Vn*.3),ke=360-ve+ce;let ye=Id(ke-he);const Ie=yn.FULL_TURNS*360+ye,ue=A+Ie+yn.OVERSHOOT;V(`transform ${we?1e3:yn.DURATION}ms cubic-bezier(0.25, 0.46, 0.45, 0.94)`),q(ue),cc([20,50,20]),setTimeout(()=>{V(`transform ${we?200:yn.SETTLE_DURATION}ms cubic-bezier(0.68, -0.55, 0.265, 1.55)`),q(fe=>fe-yn.OVERSHOOT)},we?1e3:yn.DURATION),setTimeout(()=>{Me(),U(!1),I({cat:le,index:J}),y(le),P(le.color),D(!0),setTimeout(()=>{D(!1),u("interstitial")},1500),setTimeout(()=>P(null),1e3)},(we?1e3:yn.DURATION)+(we?200:yn.SETTLE_DURATION)+100)},xt=()=>{const J=f.filter(he=>{const ve=he.category.toLowerCase(),ce=S.name.toLowerCase();return ve.includes(ce)||ce.includes(ve)});let le;J.length>0?le=J[Math.floor(Math.random()*J.length)]:le=f[Math.floor(Math.random()*f.length)],le?(j(le),x(30),C([]),T(null),_(!1),be(!1),u("question")):u("wheel")},Wr=(J,le,he=!1)=>{if(!he){be(!0);return}const ve=m.qIndex,ce=[...m.progress];ce[ve]=!0;const ke=[...ee];if(ke[ve]=!!J,oe(ke),p(ye=>({...ye,progress:ce,qIndex:ye.qIndex+1})),J&&(ae.addCoins(5,"Classic Mode - Correct Answer"),ae.addXP(1),Se(!0)),Q(ve),de(!!J),ve===2){const ye=ke.every(Boolean);W(ye?"streakFlash":"modes")}else W(null);u("wheel")},Gr=J=>{if(!(m.lifelines[J]||!g)){if(p(le=>({...le,lifelines:{...le.lifelines,[J]:!0}})),J==="fifty"){const he=g.options.map((ve,ce)=>ce).filter(ve=>ve!==g.correctIndex).slice(0,2);C(he)}else if(J==="audience"){const le=40+Math.random()*25;let he=100-le;const ve=[0,0,0,0];ve[g.correctIndex]=Math.round(le);const ce=[0,1,2,3].filter(ke=>ke!==g.correctIndex);ce.forEach((ke,ye)=>{if(ye===ce.length-1)ve[ke]=he;else{const Ie=Math.floor(Math.random()*he);ve[ke]=Ie,he-=Ie}}),T(ve)}}},Hr=J=>{b(J),u("bonusInterstitial")},Kr=J=>{J&&h&&(i(h),o&&Rr("/sounds/coin.mp3",1)),setTimeout(()=>{Je()},3e3)},se=()=>{u("wheel")};switch(c){case"wheel":return n.jsx(xg,{run:m,coins:t,xp:r,level:s,ownedCharacters:a,onSpin:He,onBack:e,spinning:K,angle:A,transition:H,result:M,showCallout:z,glowColor:E,soundOn:o,setSoundOn:l,showSparkle:$,pulseIdx:F,coinBurstTick:L,pendingProgressIdx:B,lastAnswerWasCorrect:te,nextProgressIdx:X});case"interstitial":return n.jsx(Dd,{category:S,onComplete:xt,soundOn:o});case"streakFlash":return n.jsx(Sg,{onDone:()=>u("characterPicker")});case"question":return n.jsx(Ld,{question:g,category:S,onAnswer:Wr,run:m,timeLeft:v,usedLifelines:m.lifelines,onUseLifeline:Gr,eliminatedOptions:N,audienceData:R,onBack:se,timeUp:k,onTimeUpBackToWheel:()=>{_(!1),u("wheel")},soundOn:o});case"characterPicker":return n.jsx(Cg,{onSelect:Hr});case"bonusInterstitial":return n.jsx(Dd,{category:Zt.find(J=>er(J.name)===h),onComplete:()=>u("bonusQuestion"),isBonus:!0,soundOn:o});case"bonusQuestion":if(!g){const J=Zt.find(le=>er(le.name)===h);if(J&&f.length>0){const le=f.filter(ve=>{const ce=ve.category.toLowerCase(),ke=J.name.toLowerCase();return ce.includes(ke)||ke.includes(ce)}),he=le.length>0?le[Math.floor(Math.random()*le.length)]:f[Math.floor(Math.random()*f.length)];j(he),x(30)}return n.jsx("div",{className:"min-h-screen bg-base-bg text-base-text flex items-center justify-center",children:n.jsx("div",{className:"text-lg",children:"Loading bonus question..."})})}return n.jsx(Ld,{question:g,category:Zt.find(J=>er(J.name)===h)||Zt[0],onAnswer:Kr,run:{...m,lifelines:{fifty:!0,audience:!0}},timeLeft:v,usedLifelines:{fifty:!0,audience:!0},onUseLifeline:()=>{},eliminatedOptions:[],audienceData:null,onBack:e,soundOn:o});default:return n.jsx("div",{className:"min-h-screen bg-base-bg text-white flex items-center justify-center",children:n.jsxs("div",{className:"text-center",children:[n.jsx("div",{className:"text-2xl mb-4",children:"Unknown State"}),n.jsx("button",{onClick:()=>u("wheel"),className:"px-6 py-3 bg-blue-600 rounded-lg",children:"Back to Wheel"})]})})}}function Tg({lives:e,maxLives:t=3}){const[r,s]=d.useState(null),[a,o]=d.useState(e);return d.useEffect(()=>{e<a?(s(a-1),setTimeout(()=>s(null),600)):e>a&&(s(e-1),setTimeout(()=>s(null),1e3)),o(e)},[e,a]),n.jsxs("div",{className:"relative",children:[n.jsx("style",{jsx:!0,children:`
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
      `}),n.jsxs("div",{className:"flex items-center gap-3 px-5 py-1.5 bg-gradient-to-r from-red-500/20 to-pink-500/20 rounded-full backdrop-blur-md border border-white/10 shadow-xl",children:[n.jsx("div",{className:"flex items-center gap-1.5",children:[...Array(t)].map((i,l)=>n.jsx("div",{className:`relative transition-all duration-300 ${l<e?"scale-100":"scale-75"}`,children:n.jsxs("div",{className:"relative",children:[l<e?n.jsxs("div",{className:`relative ${l===r&&e>a?"heart-gained":""}`,children:[n.jsx("span",{className:`text-3xl drop-shadow-lg ${l===e-1?"heart-beat":""}`,children:"❤️"}),l===e-1&&e===1&&n.jsx("div",{className:"absolute inset-0 rounded-full heart-glow"})]}):n.jsx("div",{className:`relative ${l===r&&e<a?"heart-lost":""}`,children:n.jsx("span",{className:"text-3xl opacity-20 grayscale",children:"💔"})}),l===r&&e>a&&n.jsxs("div",{className:"absolute inset-0 flex items-center justify-center pointer-events-none",children:[n.jsx("div",{className:"absolute w-10 h-10 bg-green-400 rounded-full animate-ping opacity-30"}),n.jsx("span",{className:"absolute text-sm font-bold text-green-400 animate-bounce",children:"+1"})]})]})},l))}),n.jsx("div",{className:"pr-1",children:n.jsxs("div",{className:`text-sm font-bold ${e===1?"text-red-400 animate-pulse":e===t?"text-green-400":"text-white"}`,children:[e,"/",t]})})]}),e===1&&n.jsx("div",{className:"absolute -bottom-10 left-1/2 -translate-x-1/2 whitespace-nowrap",children:n.jsx("div",{className:"px-3 py-1 bg-red-500/20 border border-red-500/50 rounded-full backdrop-blur-sm",children:n.jsx("span",{className:"text-xs font-medium text-red-400 animate-pulse",children:"Last life! Be careful! ⚠️"})})})]})}function Pg({question:e,onAnswer:t,lives:r,questionCount:s,correctStreak:a,totalScore:o,currentDifficulty:i,timeLeft:l,showFeedback:c,lastAnswerCorrect:u,checkpoint:m,onBack:p,soundOn:f,setSoundOn:w}){const[g,j]=d.useState(null),[S,y]=d.useState(!1),[v,x]=d.useState(!1),N={EASY:{emoji:"🌱",color:"from-emerald-400 to-green-500",accentGradient:"from-emerald-500/20 to-green-600/20",label:"Sprout",motivationalText:"Great start! Keep growing! 🌱"},MEDIUM:{emoji:"🌻",color:"from-yellow-400 to-amber-500",accentGradient:"from-yellow-500/20 to-amber-600/20",label:"Blooming",motivationalText:"You're blooming beautifully! 🌻"},HARD:{emoji:"🔥",color:"from-orange-400 to-red-500",accentGradient:"from-orange-500/20 to-red-600/20",label:"On Fire",motivationalText:"You're on fire! Keep it up! 🔥"},EXPERT:{emoji:"⚡",color:"from-purple-400 to-indigo-500",accentGradient:"from-purple-500/20 to-indigo-600/20",label:"Lightning",motivationalText:"Lightning fast thinking! ⚡"},LEGENDARY:{emoji:"👑",color:"from-pink-400 to-purple-600",accentGradient:"from-pink-500/20 to-purple-600/20",label:"Legendary",motivationalText:"Legendary performance! 👑"}},C=N[i];d.useEffect(()=>{a>0&&a%5===0&&c&&u&&(y(!0),setTimeout(()=>y(!1),3e3))},[a,c,u]),d.useEffect(()=>{c&&u&&(x(!0),setTimeout(()=>x(!1),1e3))},[c,u]);const R=T=>{c||(j(T),t(T))};return d.useEffect(()=>(document.body.classList.add("hide-bottom-nav"),()=>{document.body.classList.remove("hide-bottom-nav")}),[]),n.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-black text-white relative overflow-hidden",children:[n.jsx("style",{jsx:!0,children:`
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
      `}),n.jsxs("div",{className:"fixed inset-0 pointer-events-none",children:[n.jsx("div",{className:"absolute top-20 left-10 text-[100px] opacity-10 float-animation",children:C.emoji}),n.jsx("div",{className:"absolute top-40 right-20 text-[80px] opacity-10 float-animation",style:{animationDelay:"1s"},children:"⭐"}),n.jsx("div",{className:"absolute bottom-40 left-20 text-[90px] opacity-10 float-animation",style:{animationDelay:"2s"},children:"🎯"}),n.jsx("div",{className:"absolute bottom-20 right-10 text-[70px] opacity-10 float-animation",style:{animationDelay:"3s"},children:"🏆"})]}),n.jsxs("div",{className:"relative z-10 px-4 pt-[calc(env(safe-area-inset-top)+2rem)]",children:[n.jsxs("div",{className:"flex justify-between items-center mb-8 slide-in",children:[n.jsx("button",{onClick:p,className:"w-12 h-12 glass-card rounded-2xl shadow-lg flex items-center justify-center hover:scale-105 transition-transform",children:n.jsx("span",{className:"text-xl",children:"◀️"})}),n.jsx(Tg,{lives:r}),n.jsx("button",{onClick:()=>w(!f),className:"w-12 h-12 glass-card rounded-2xl shadow-lg flex items-center justify-center hover:scale-105 transition-transform",children:n.jsx("span",{className:"text-xl",children:f?"🔊":"🔇"})})]}),n.jsx("div",{className:`glass-card rounded-3xl p-2 shadow-xl mb-2 mt-12 slide-in bg-gradient-to-r ${C.accentGradient}`,style:{animationDelay:"0.1s"},children:n.jsxs("div",{className:"grid grid-cols-3 gap-3",children:[n.jsxs("div",{className:"text-center",children:[n.jsx("div",{className:`text-3xl font-black bg-gradient-to-r ${C.color} bg-clip-text text-transparent ${v?"score-pulse":""}`,children:o}),n.jsx("div",{className:"text-xs text-white/60 font-medium mt-1",children:"Points"}),c&&u&&n.jsx("div",{className:"absolute -top-2 left-1/2 -translate-x-1/2",children:n.jsxs("span",{className:"text-green-400 font-bold text-sm coin-animation",children:["+",N[i]?i==="EASY"?10:i==="MEDIUM"?20:i==="HARD"?30:i==="EXPERT"?50:100:10]})})]}),n.jsxs("div",{className:"text-center",children:[n.jsx("div",{className:"text-3xl font-black text-white",children:s}),n.jsx("div",{className:"text-xs text-white/60 font-medium mt-1",children:"Questions"})]}),n.jsxs("div",{className:"text-center relative",children:[n.jsx("div",{className:`text-3xl font-black text-orange-400 ${a>0?"streak-flame":""}`,children:a}),n.jsx("div",{className:"text-xs text-white/60 font-medium mt-1",children:"Streak 🔥"})]})]})}),n.jsxs("div",{className:"flex justify-between items-center mb-1 slide-in",style:{animationDelay:"0.2s"},children:[n.jsx("div",{className:`px-4 py-3 rounded-full bg-gradient-to-r ${C.color} text-white shadow-lg`,children:n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx("span",{className:"text-2xl",children:C.emoji}),n.jsxs("div",{children:[n.jsx("div",{className:"font-bold text-sm",children:C.label}),n.jsxs("div",{className:"text-[10px] opacity-90",children:["Level ",s+1]})]})]})}),n.jsx("div",{className:"relative",children:n.jsxs("div",{className:"w-20 h-20 glass-card rounded-full shadow-xl flex items-center justify-center",children:[n.jsxs("svg",{className:"absolute inset-0 w-full h-full",children:[n.jsx("circle",{cx:"40",cy:"40",r:"35",fill:"none",stroke:"rgba(255, 255, 255, 0.1)",strokeWidth:"6",className:"progress-ring"}),n.jsx("circle",{cx:"40",cy:"40",r:"35",fill:"none",stroke:l<=5?"#ef4444":l<=10?"#f59e0b":"#10b981",strokeWidth:"6",strokeDasharray:`${l/30*220} 220`,strokeLinecap:"round",className:"progress-ring transition-all duration-1000"})]}),n.jsx("div",{className:"relative z-10",children:n.jsx("span",{className:`text-2xl font-black ${l<=5?"text-red-400 animate-pulse":l<=10?"text-amber-400":"text-white"}`,children:l})})]})})]})]}),n.jsxs("div",{className:"px-4 slide-in",style:{animationDelay:"0.3s"},children:[n.jsxs("div",{className:"glass-card rounded-3xl shadow-xl p-6 mb-6 border border-white/10",children:[n.jsx("div",{className:"text-center mb-2",children:n.jsxs("span",{className:"text-xs font-bold text-white/40 uppercase tracking-wider",children:["Question ",s+1]})}),n.jsx("h2",{className:"text-xl font-bold text-center text-white leading-relaxed",children:e.prompt})]}),n.jsx("div",{className:"space-y-3",children:e.options.map((T,h)=>{const b=["A","B","C","D"],k=["from-blue-400 to-blue-500","from-green-400 to-green-500","from-yellow-400 to-yellow-500","from-purple-400 to-purple-500"];let _="glass-card border border-white/10",A="";return c&&(h===e.correctIndex?(_="bg-gradient-to-r from-green-500/20 to-emerald-500/20 border-2 border-green-400",A="correct-bounce"):g===h&&!u&&(_="bg-gradient-to-r from-red-500/20 to-pink-500/20 border-2 border-red-400",A="wrong-shake")),n.jsx("button",{onClick:()=>R(h),disabled:c,className:`w-full p-4 rounded-2xl shadow-lg transition-all ${_} ${A} 
                  ${c?"":"hover:scale-[1.02] active:scale-[0.98] hover:bg-white/10"} slide-in`,style:{animationDelay:`${.4+h*.05}s`},children:n.jsxs("div",{className:"flex items-center gap-4",children:[n.jsx("div",{className:`w-12 h-12 rounded-xl bg-gradient-to-br ${k[h]} 
                    text-white font-bold text-xl flex items-center justify-center shadow-md`,children:b[h]}),n.jsx("span",{className:"flex-1 text-left font-medium text-white",children:T}),c&&h===e.correctIndex&&n.jsx("span",{className:"text-2xl",children:"✅"}),c&&g===h&&!u&&n.jsx("span",{className:"text-2xl",children:"❌"})]})},h)})}),c&&n.jsx("div",{className:"mt-6 text-center slide-in",children:n.jsx("p",{className:"text-sm font-medium text-white/70",children:u?C.motivationalText:"No worries! Keep trying! 💪"})}),m>0&&n.jsx("div",{className:"mt-4 flex justify-center slide-in",style:{animationDelay:"0.6s"},children:n.jsx("div",{className:"glass-card rounded-full px-4 py-2 shadow-lg border border-white/10",children:n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx("span",{className:"text-xl",children:"🏁"}),n.jsxs("span",{className:"text-sm font-bold text-white/80",children:["Checkpoint: Question ",m]})]})})})]}),S&&n.jsx("div",{className:"fixed inset-0 pointer-events-none flex items-center justify-center z-50",children:n.jsx("div",{className:"bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-8 py-6 rounded-3xl shadow-2xl animate-bounce",children:n.jsxs("div",{className:"text-center",children:[n.jsx("div",{className:"text-5xl mb-3",children:"🎉"}),n.jsx("div",{className:"text-2xl font-black mb-2",children:"AMAZING STREAK!"}),n.jsx("div",{className:"text-lg",children:"You earned a life back! ❤️"})]})})})]})}function Rg({score:e,questionsAnswered:t,highScore:r,checkpoint:s,onRestart:a,onContinue:o,onBack:i}){const l=e>r,[c,u]=d.useState(!1),[m,p]=d.useState(0),[f,w]=d.useState(!1),g=d.useRef(null);d.useEffect(()=>{const x=e/60;let N=0;const C=setInterval(()=>{N+=x,N>=e?(p(e),clearInterval(C),l&&(u(!0),setTimeout(()=>u(!1),5e3))):p(Math.floor(N))},2e3/60);return setTimeout(()=>w(!0),2200),()=>clearInterval(C)},[e,l]),d.useEffect(()=>(document.body.classList.add("hide-bottom-nav"),()=>{document.body.classList.remove("hide-bottom-nav")}),[]);const S=(()=>t>=100?{emoji:"👑",title:"LEGENDARY!",subtitle:"You're a true Quiz Legend!",color:"from-purple-400 to-pink-500",stars:5}:t>=50?{emoji:"🏆",title:"CHAMPION!",subtitle:"Outstanding performance!",color:"from-yellow-400 to-amber-500",stars:5}:t>=30?{emoji:"💎",title:"EXPERT!",subtitle:"You're getting really good!",color:"from-blue-400 to-cyan-500",stars:4}:t>=20?{emoji:"⭐",title:"STAR PLAYER!",subtitle:"Keep up the great work!",color:"from-green-400 to-emerald-500",stars:3}:t>=10?{emoji:"🎯",title:"NICE TRY!",subtitle:"You're improving fast!",color:"from-orange-400 to-red-500",stars:2}:{emoji:"🌟",title:"GOOD START!",subtitle:"Every expert was once a beginner!",color:"from-indigo-400 to-purple-500",stars:1})();return n.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-black text-white relative overflow-hidden",children:[n.jsx("style",{jsx:!0,children:`
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
      `}),n.jsxs("div",{className:"absolute inset-0 overflow-hidden",children:[n.jsx("div",{className:"absolute top-20 left-10 text-[150px] opacity-5 float-animation",children:"🏆"}),n.jsx("div",{className:"absolute bottom-20 right-10 text-[120px] opacity-5 float-animation",style:{animationDelay:"1s"},children:"⭐"}),n.jsx("div",{className:"absolute top-40 right-20 text-[100px] opacity-5 float-animation",style:{animationDelay:"2s"},children:"🎯"})]}),c&&n.jsx("div",{className:"fixed inset-0 pointer-events-none z-50",children:[...Array(40)].map((y,v)=>n.jsx("div",{className:"absolute confetti-fall",style:{left:`${Math.random()*100}%`,animationDelay:`${Math.random()*3}s`,animationDuration:`${3+Math.random()*2}s`},children:n.jsx("span",{className:"text-3xl",children:["🎉","⭐","🎊","✨","🎈","💫","🌟"][Math.floor(Math.random()*7)]})},v))}),n.jsxs("div",{className:"relative z-10 flex flex-col items-center justify-center min-h-screen px-6 text-center",children:[n.jsxs("div",{className:"mb-8 slide-up",children:[n.jsx("h1",{className:"text-6xl font-black mb-4 bg-gradient-to-r from-red-400 to-pink-500 bg-clip-text text-transparent",children:"GAME OVER"}),l&&n.jsx("div",{className:"fade-in",style:{animationDelay:"1s"},children:n.jsx("div",{className:"inline-block px-6 py-3 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-bold shadow-2xl glow-text",children:n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsx("span",{className:"text-3xl",children:"🏆"}),n.jsx("span",{className:"text-xl",children:"NEW HIGH SCORE!"}),n.jsx("span",{className:"text-3xl",children:"🏆"})]})})})]}),f&&n.jsx("div",{className:"mb-8 slide-up",style:{animationDelay:"0.3s"},children:n.jsxs("div",{className:`glass-card rounded-3xl p-6 bg-gradient-to-r ${S.color} bg-opacity-20 border-2 border-white/20 shadow-2xl`,children:[n.jsx("div",{className:"text-6xl mb-3 bounce-animation",children:S.emoji}),n.jsx("h2",{className:"text-3xl font-black mb-2",children:S.title}),n.jsx("p",{className:"text-white/80 mb-4",children:S.subtitle}),n.jsx("div",{className:"flex justify-center gap-1",children:[...Array(5)].map((y,v)=>n.jsx("span",{className:`text-2xl ${v<S.stars?"star-pop":""}`,style:{animationDelay:`${2.5+v*.1}s`},children:v<S.stars?"⭐":"☆"},v))})]})}),n.jsxs("div",{className:"grid grid-cols-2 gap-4 mb-8 w-full max-w-md",children:[n.jsxs("div",{className:"glass-card rounded-2xl p-6 shadow-xl slide-up",style:{animationDelay:"0.4s"},children:[n.jsx("div",{className:"text-4xl mb-2",children:"🎯"}),n.jsx("div",{ref:g,className:`text-4xl font-black ${l?"text-yellow-400":"text-white"}`,children:m}),n.jsx("div",{className:"text-sm text-white/60 font-medium",children:"Points Earned"}),n.jsx("div",{className:"mt-3 pt-3 border-t border-white/10",children:n.jsxs("div",{className:"text-xs text-white/50",children:[t," questions"]})})]}),n.jsxs("div",{className:"glass-card rounded-2xl p-6 shadow-xl slide-up",style:{animationDelay:"0.5s"},children:[n.jsx("div",{className:"text-4xl mb-2",children:"📊"}),n.jsx("div",{className:"text-4xl font-black text-white",children:t}),n.jsx("div",{className:"text-sm text-white/60 font-medium",children:"Questions"}),n.jsx("div",{className:"mt-3 pt-3 border-t border-white/10",children:n.jsxs("div",{className:"text-xs text-white/50",children:["Best: ",Math.max(r,e)]})})]})]}),n.jsx("div",{className:"glass-card rounded-2xl px-6 py-4 mb-8 w-full max-w-md slide-up",style:{animationDelay:"0.6s"},children:n.jsx("p",{className:"text-white/80 font-medium",children:t>=50?"Incredible performance! You're a quiz master! 🌟":t>=20?"Great job! You're getting stronger! 💪":"Keep practicing! Every attempt makes you better! 🚀"})}),n.jsxs("div",{className:"space-y-3 w-full max-w-md",children:[s>0&&o&&n.jsx("button",{onClick:o,className:"w-full py-4 bg-gradient-to-r from-green-400 to-emerald-500 text-white rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all hover:scale-[1.02] active:scale-[0.98] slide-up",style:{animationDelay:"0.7s"},children:n.jsxs("div",{className:"flex items-center justify-center gap-3",children:[n.jsx("span",{className:"text-2xl",children:"🏁"}),n.jsxs("span",{children:["Continue from Question ",s]})]})}),n.jsx("button",{onClick:a,className:"w-full py-4 bg-gradient-to-r from-blue-400 to-indigo-500 text-white rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all hover:scale-[1.02] active:scale-[0.98] slide-up",style:{animationDelay:"0.8s"},children:n.jsxs("div",{className:"flex items-center justify-center gap-3",children:[n.jsx("span",{className:"text-2xl",children:"🎮"}),n.jsx("span",{children:"Play Again"})]})}),n.jsx("button",{onClick:i,className:"w-full py-4 glass-card text-white rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl transition-all hover:scale-[1.02] active:scale-[0.98] hover:bg-white/10 slide-up",style:{animationDelay:"0.9s"},children:n.jsxs("div",{className:"flex items-center justify-center gap-3",children:[n.jsx("span",{className:"text-2xl",children:"🏠"}),n.jsx("span",{children:"Back to Games"})]})})]})]})]})}const zd={EASY:{min:0,max:9,timer:30,points:10},MEDIUM:{min:10,max:24,timer:25,points:20},HARD:{min:25,max:49,timer:20,points:30},EXPERT:{min:50,max:99,timer:15,points:50},LEGENDARY:{min:100,max:1/0,timer:10,points:100}};function _g({onBack:e,isFromQuest:t}){const{coins:r,xp:s,level:a,soundOn:o,setSoundOn:i}=To(),[l,c]=d.useState("playing"),[u,m]=d.useState(3),[p,f]=d.useState(0),[w,g]=d.useState(0),[j,S]=d.useState(0),[y,v]=d.useState("EASY"),[x,N]=d.useState([]),[C,R]=d.useState(null),[T,h]=d.useState(30),[b,k]=d.useState(!1),[_,A]=d.useState(!1),[q,H]=d.useState(0),[V,K]=d.useState(!1),U=d.useRef(null),M=d.useRef(new Set);d.useEffect(()=>(z(),G(),window.history.pushState({mode:"survival"},"",window.location.href),()=>{U.current&&clearTimeout(U.current)}),[]),d.useEffect(()=>(l==="playing"&&C&&T>0&&!b&&(U.current=setTimeout(()=>{h(F=>F<=1?(Y(),0):(F===6&&o&&re("/sounds/tick.mp3",.8),F-1))},1e3)),()=>{U.current&&clearTimeout(U.current)}),[l,C,T,b,o]),d.useEffect(()=>{const F=I(p);F!==y&&(v(F),o&&re("/sounds/levelup.mp3",.6))},[p,y,o]),d.useEffect(()=>{p>0&&p%10===0&&(L(),H(p),o&&re("/sounds/checkpoint.mp3",.7))},[p,o]),d.useEffect(()=>{const F=ne=>{ne.preventDefault(),K(!0),window.history.pushState({mode:"survival"},"",window.location.href)};return window.addEventListener("popstate",F),()=>{window.removeEventListener("popstate",F)}},[]);const I=F=>F>=100?"LEGENDARY":F>=50?"EXPERT":F>=25?"HARD":F>=10?"MEDIUM":"EASY",z=async()=>{try{const ne=await(await fetch("/data/quiz_questions_bank.csv")).text(),{data:ee}=qn.parse(ne,{header:!0,skipEmptyLines:!0,transformHeader:me=>me.trim().toLowerCase()}),oe=ee.map((me,Se)=>{var Ne;const Ee=[me.option1,me.option2,me.option3,me.option4].map(xe=>(xe||"").trim()).filter(Boolean);if(Ee.length<4)return null;let pe={a:0,b:1,c:2,d:3}[(Ne=me.answer)==null?void 0:Ne.toLowerCase()];return pe===void 0&&(pe=Ee.findIndex(xe=>xe.toLowerCase()===(me.answer||"").toLowerCase())),pe===-1&&(pe=0),{id:me.id||`q_${Se}`,prompt:(me.question||"").trim(),options:Ee,correctIndex:pe,category:(me.category||me.subject||"general").trim(),difficulty:(me.difficulty||"medium").toLowerCase()}}).filter(Boolean);N(oe),D(oe)}catch(F){console.error("Failed to load questions:",F)}},D=(F=x)=>{const ne=F.filter(Se=>!M.current.has(Se.id));ne.length===0&&(M.current.clear(),ne.push(...F));const ee=y.toLowerCase();let oe=ne.filter(Se=>Se.difficulty===ee||Se.difficulty==="medium");oe.length===0&&(oe=ne);const me=oe[Math.floor(Math.random()*oe.length)];me&&(M.current.add(me.id),R(me),h(zd[y].timer),k(!1))},E=F=>{if(b)return;const ne=F===C.correctIndex;A(ne),k(!0),ne?P():$(),setTimeout(()=>{(u>0||ne)&&(f(ee=>ee+1),D())},1500)},P=()=>{const F=zd[y].points;S(ne=>ne+F),g(ne=>{const ee=ne+1;if(t){const oe=JSON.parse(localStorage.getItem("questProgress")||"{}");oe.winStreak=Math.max(oe.winStreak||0,ee),oe.date=`${new Date().getFullYear()}-${new Date().getMonth()+1}-${new Date().getDate()}`,localStorage.setItem("questProgress",JSON.stringify(oe)),ee>=5&&console.log("Win streak quest completed!")}return ee%5===0&&u<3&&(m(oe=>Math.min(oe+1,3)),o&&re("/sounds/lifeup.mp3",.8)),ee}),ae.addCoins(Math.floor(F/10),"Survival Mode - Correct Answer"),ae.addXP(1),o&&re("/sounds/correct.mp3",.7)},$=()=>{g(0),m(F=>{const ne=F-1;return ne<=0&&(c("gameOver"),O()),ne}),o&&re("/sounds/wrong.mp3",.7),W([200])},Y=()=>{$()},L=()=>{const F={questionCount:p,totalScore:j,lives:u,correctStreak:w,timestamp:Date.now()};localStorage.setItem("survival_checkpoint",JSON.stringify(F))},G=()=>{const F=localStorage.getItem("survival_checkpoint");if(F)try{const ne=JSON.parse(F);Date.now()-ne.timestamp<864e5?(f(ne.questionCount),S(ne.totalScore),m(ne.lives),g(ne.correctStreak),H(ne.questionCount)):localStorage.removeItem("survival_checkpoint")}catch(ne){console.error("Failed to load checkpoint:",ne)}},B=()=>{localStorage.removeItem("survival_checkpoint"),H(0)},O=()=>{const F=parseInt(localStorage.getItem("survival_highscore")||"0");j>F&&(localStorage.setItem("survival_highscore",j.toString()),localStorage.setItem("survival_highquestions",p.toString()))},X=()=>{c("playing"),m(3),f(0),g(0),S(0),v("EASY"),M.current.clear(),B(),D()},Q=()=>{c("playing"),D()},te=()=>{K(!0)},de=()=>{if(t){const F=JSON.parse(localStorage.getItem("questProgress")||"{}");F.winStreak=Math.max(F.winStreak||0,w),F.date=`${new Date().getFullYear()}-${new Date().getMonth()+1}-${new Date().getDate()}`,localStorage.setItem("questProgress",JSON.stringify(F)),window.location.href="/profile/quests"}else window.history.go(-1),e()},re=(F,ne=.5)=>{try{const ee=new Audio(F);ee.volume=ne,ee.play()}catch{}},W=F=>{navigator.vibrate&&navigator.vibrate(F)};return d.useEffect(()=>(document.body.classList.add("hide-bottom-nav"),()=>{document.body.classList.remove("hide-bottom-nav")}),[]),l==="gameOver"?n.jsxs(n.Fragment,{children:[n.jsx(Rg,{score:j,questionsAnswered:p,highScore:parseInt(localStorage.getItem("survival_highscore")||"0"),checkpoint:q,onRestart:X,onContinue:q>0?Q:null,onBack:te}),V&&n.jsx("div",{className:"fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 px-6",children:n.jsxs("div",{className:"bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-6 max-w-sm w-full shadow-2xl slide-in border border-white/10",children:[n.jsxs("div",{className:"text-center mb-6",children:[n.jsx("div",{className:"text-5xl mb-3",children:"🚪"}),n.jsx("h3",{className:"text-xl font-bold text-white mb-2",children:"Leave the game?"}),n.jsx("p",{className:"text-white/70",children:"Your progress saves at checkpoints!"})]}),n.jsxs("div",{className:"flex gap-3",children:[n.jsx("button",{onClick:()=>K(!1),className:"flex-1 py-3 bg-gradient-to-r from-green-400 to-emerald-500 text-white rounded-2xl font-bold shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]",children:"Keep Playing"}),n.jsx("button",{onClick:de,className:"flex-1 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-2xl font-bold shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]",children:"Exit"})]})]})})]}):C?n.jsxs(n.Fragment,{children:[n.jsx(Pg,{question:C,onAnswer:E,lives:u,questionCount:p,correctStreak:w,totalScore:j,currentDifficulty:y,timeLeft:T,showFeedback:b,lastAnswerCorrect:_,checkpoint:q,onBack:te,soundOn:o,setSoundOn:i}),V&&n.jsx("div",{className:"fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 px-6",children:n.jsxs("div",{className:"bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-6 max-w-sm w-full shadow-2xl slide-in border border-white/10",children:[n.jsxs("div",{className:"text-center mb-6",children:[n.jsx("div",{className:"text-5xl mb-3",children:"🚪"}),n.jsx("h3",{className:"text-xl font-bold text-white mb-2",children:"Leave the game?"}),n.jsx("p",{className:"text-white/70",children:"Your progress saves at checkpoints!"})]}),n.jsxs("div",{className:"flex gap-3",children:[n.jsx("button",{onClick:()=>K(!1),className:"flex-1 py-3 bg-gradient-to-r from-green-400 to-emerald-500 text-white rounded-2xl font-bold shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]",children:"Keep Playing"}),n.jsx("button",{onClick:de,className:"flex-1 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-2xl font-bold shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]",children:"Exit"})]})]})})]}):n.jsx("div",{className:"min-h-screen bg-base-bg text-white flex items-center justify-center",children:n.jsx("div",{className:"text-xl",children:"Loading questions..."})})}const Xn=[{id:1,name:"Sandy Beach",emoji:"🏖️",theme:{background:"from-yellow-300 via-orange-300 to-blue-400",accent:"from-yellow-400 to-orange-400",cardBg:"from-amber-500/20 to-yellow-500/20",unlockGradient:"from-yellow-400 to-amber-500"},difficulty:"EASY",difficultyRange:{min:0,max:9},questionDifficulty:["easy"],requiredCorrect:2,timeLimit:300,rewards:{perCorrectAnswer:10,gemChance:.3,gemBonus:5,speedBonus:3,perfectBonus:50,treasurePiece:"🧩",completionCoins:30},description:"Start your adventure on the sunny shores! Easy questions to warm up.",unlockRequirement:null,visualElements:{bgEmojis:["🌊","🐚","🦀","⛱️","🌺"],diggingEmoji:"⛏️",foundEmojis:["💎","🪙","✨"]}},{id:2,name:"Jungle Cave",emoji:"🌴",theme:{background:"from-green-400 via-emerald-500 to-teal-600",accent:"from-green-500 to-emerald-600",cardBg:"from-green-500/20 to-emerald-500/20",unlockGradient:"from-green-400 to-emerald-500"},difficulty:"EASY-MEDIUM",difficultyRange:{min:10,max:24},questionDifficulty:["easy","medium"],requiredCorrect:2,timeLimit:300,rewards:{perCorrectAnswer:15,gemChance:.35,gemBonus:7,speedBonus:5,perfectBonus:75,treasurePiece:"🗝️",completionCoins:50},description:"Explore the mysterious jungle caves! Watch out for tricky vines!",unlockRequirement:{island:1,treasurePiece:!0},visualElements:{bgEmojis:["🌿","🦜","🐒","🦋","🌺"],diggingEmoji:"⛏️",foundEmojis:["💎","🪙","🌟"]}},{id:3,name:"Crystal Mountain",emoji:"⛰️",theme:{background:"from-purple-400 via-pink-400 to-indigo-500",accent:"from-purple-500 to-pink-500",cardBg:"from-purple-500/20 to-pink-500/20",unlockGradient:"from-purple-400 to-pink-500"},difficulty:"MEDIUM",difficultyRange:{min:25,max:49},questionDifficulty:["medium"],requiredCorrect:2,timeLimit:300,rewards:{perCorrectAnswer:20,gemChance:.4,gemBonus:10,speedBonus:7,perfectBonus:100,treasurePiece:"💎",completionCoins:75},description:"Climb the sparkling crystal peaks! Medium challenges await!",unlockRequirement:{island:2,treasurePiece:!0},visualElements:{bgEmojis:["✨","🔮","⭐","🌟","💫"],diggingEmoji:"⚒️",foundEmojis:["💎","🪙","🌈"]}},{id:4,name:"Pirate Ship",emoji:"🏴‍☠️",theme:{background:"from-slate-600 via-blue-600 to-cyan-500",accent:"from-slate-700 to-blue-700",cardBg:"from-slate-500/20 to-blue-500/20",unlockGradient:"from-slate-500 to-blue-600"},difficulty:"MEDIUM-HARD",difficultyRange:{min:50,max:99},questionDifficulty:["medium","hard"],requiredCorrect:2,timeLimit:300,rewards:{perCorrectAnswer:30,gemChance:.45,gemBonus:15,speedBonus:10,perfectBonus:150,treasurePiece:"🗺️",completionCoins:100},description:"Ahoy matey! Navigate the pirate ship's challenging puzzles!",unlockRequirement:{island:3,treasurePiece:!0},visualElements:{bgEmojis:["⚓","🦜","💀","🌊","⛵"],diggingEmoji:"🗡️",foundEmojis:["💎","🪙","👑"]}},{id:5,name:"Volcano Peak",emoji:"🌋",theme:{background:"from-red-500 via-orange-500 to-yellow-500",accent:"from-red-600 to-orange-600",cardBg:"from-red-500/20 to-orange-500/20",unlockGradient:"from-red-500 to-orange-500"},difficulty:"HARD",difficultyRange:{min:100,max:1/0},questionDifficulty:["hard"],requiredCorrect:2,timeLimit:300,rewards:{perCorrectAnswer:50,gemChance:.5,gemBonus:25,speedBonus:15,perfectBonus:200,treasurePiece:"👑",completionCoins:150},description:"The ultimate challenge! Can you conquer the volcano?",unlockRequirement:{island:4,treasurePiece:!0},visualElements:{bgEmojis:["🔥","🌋","💥","⚡","🔴"],diggingEmoji:"⛏️",foundEmojis:["💎","🪙","🏆"]}}],De={SHOVELS_PER_ISLAND:3,QUESTIONS_PER_ISLAND:3,SPEED_BONUS_THRESHOLD:5,MIN_CORRECT_FOR_TREASURE:2,FINAL_TREASURE_REWARD:200,FINAL_TREASURE_TITLE:"Treasure Master",DIGGING_ANIMATION_DURATION:1500,REWARD_DISPLAY_DURATION:2e3,TRANSITION_DURATION:500,STORAGE_KEYS:{PROGRESS:"treasureHunt_progress",STATS:"treasureHunt_stats",UNLOCKED_ISLANDS:"treasureHunt_unlocked",COMPLETED_ISLANDS:"treasureHunt_completed",TREASURE_PIECES:"treasureHunt_pieces"},SOUNDS:{DIG:"/sounds/dig.mp3",TREASURE_FOUND:"/sounds/treasure.mp3",GEM_FOUND:"/sounds/gem.mp3",WRONG:"/sounds/wrong.mp3",ISLAND_COMPLETE:"/sounds/islandcomplete.mp3",ISLAND_UNLOCK:"/sounds/unlock.mp3",FINAL_TREASURE:"/sounds/victory.mp3",TICK:"/sounds/tick.mp3",SHOVEL_BREAK:"/sounds/break.mp3"}},rn=e=>Xn.find(t=>t.id===e),Ag=(e,t)=>{const r=rn(e);if(!r.unlockRequirement)return!0;const s=t[r.unlockRequirement.island];return s&&s.treasurePiece},Ig=(e,t)=>{const r={0:["Keep trying! You'll get it! 💪","Don't give up! Adventure awaits! 🌟","Practice makes perfect! 🎯"],1:["Good effort! Almost there! 🌈","Nice try! Keep going! ⭐","You're learning fast! 🚀"],2:["Awesome! You found treasure! 🏆","Great job, explorer! 🎉","You're amazing! ✨"],3:["PERFECT! You're a champion! 👑","INCREDIBLE! Master explorer! 🌟","LEGENDARY performance! 🏆"]},s=r[e]||r[0];return s[Math.floor(Math.random()*s.length)]},Lg=e=>Xn.map(t=>{var r;return{id:t.id,piece:t.rewards.treasurePiece,collected:((r=e[t.id])==null?void 0:r.treasurePiece)||!1}});function Dg({islands:e,islandProgress:t,onSelectIsland:r,onBack:s,soundOn:a,setSoundOn:o,totalStats:i}){const[l,c]=d.useState(!1),u=Lg(t),m=u.filter(f=>f.collected).length,p=Math.round(m/e.length*100);return d.useEffect(()=>(document.body.style.position="fixed",document.body.style.overflow="hidden",document.body.style.width="100%",document.body.style.height="100%",()=>{document.body.style.position="",document.body.style.overflow="",document.body.style.width="",document.body.style.height=""}),[]),n.jsxs("div",{className:"fixed inset-0 bg-gradient-to-b from-sky-400 via-blue-500 to-blue-600 overflow-hidden flex flex-col",children:[n.jsx("style",{jsx:!0,children:`
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
      `}),n.jsxs("div",{className:"absolute inset-0",children:[n.jsx("div",{className:"absolute top-10 cloud-drift",style:{animationDelay:"0s"},children:n.jsx("div",{className:"text-6xl opacity-40",children:"☁️"})}),n.jsx("div",{className:"absolute top-12 cloud-drift",style:{animationDelay:"7s",animationDuration:"25s"},children:n.jsx("div",{className:"text-5xl opacity-40",children:"☁️"})}),n.jsx("div",{className:"absolute top-10 right-12",children:n.jsx("div",{className:"text-6xl pulse-animation opacity-80",children:"☀️"})}),n.jsx("div",{className:"absolute top-16 left-20 float-animation opacity-60",children:n.jsx("div",{className:"text-2xl",children:"🦜"})})]}),n.jsxs("div",{className:"relative z-20 px-4 pt-[calc(env(safe-area-inset-top)+3rem)]",children:[n.jsxs("div",{className:"flex justify-between items-center mb-3",children:[n.jsx("button",{onClick:s,className:"w-11 h-11 glass-card rounded-2xl shadow-lg flex items-center justify-center hover:scale-105 transition-transform",children:n.jsx("span",{className:"text-xl",children:"⬅"})}),n.jsx("div",{className:"glass-card rounded-2xl px-3 py-2 shadow-lg",children:n.jsxs("div",{className:"text-white font-bold text-center",children:[n.jsx("div",{className:"text-[10px] opacity-90",children:"TREASURE HUNT"}),n.jsx("div",{className:"text-sm",children:"🏝️ Island Explorer 🏝️"})]})}),n.jsx("button",{onClick:()=>o(!a),className:"w-11 h-11 glass-card rounded-2xl shadow-lg flex items-center justify-center hover:scale-105 transition-transform",children:n.jsx("span",{className:"text-xl",children:a?"🔊":"🔇"})})]}),n.jsxs("div",{className:"glass-card rounded-2xl p-3 shadow-xl mt-2",children:[n.jsxs("div",{className:"flex items-center justify-between mb-2",children:[n.jsx("span",{className:"text-white font-bold text-sm",children:"Adventure Progress"}),n.jsxs("span",{className:"text-white font-bold text-sm",children:[p,"%"]})]}),n.jsx("div",{className:"w-full h-2.5 bg-white/20 rounded-full overflow-hidden",children:n.jsx("div",{className:"h-full bg-gradient-to-r from-yellow-400 to-amber-500 transition-all duration-1000",style:{width:`${p}%`}})}),n.jsx("button",{onClick:()=>c(!0),className:"mt-2.5 w-full py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-bold text-sm hover:scale-[1.02] transition-transform",children:n.jsxs("div",{className:"flex items-center justify-center gap-2",children:[n.jsx("span",{children:"🏆"}),n.jsxs("span",{children:["Treasure Pieces: ",m,"/5"]}),n.jsx("span",{children:"🏆"})]})})]})]}),n.jsx("div",{className:"flex-1 flex items-center justify-center px-4 py-4",children:n.jsxs("div",{className:"w-full max-w-md",children:[n.jsx("div",{className:"grid grid-cols-2 gap-3",children:e.slice(0,4).map(f=>{const w=t[f.id],g=w==null?void 0:w.unlocked,j=w==null?void 0:w.treasurePiece,S=w==null?void 0:w.perfectScore;return n.jsxs("button",{onClick:()=>r(f.id),disabled:!g,className:`relative aspect-square rounded-2xl transition-all ${g?"hover:scale-105 active:scale-95 shadow-xl":"opacity-50 grayscale"}`,children:[n.jsx("div",{className:`absolute inset-0 rounded-2xl bg-gradient-to-br ${g?f.theme.background:"from-gray-400 to-gray-500"}`,children:g&&n.jsxs(n.Fragment,{children:[n.jsx("div",{className:"absolute top-1 right-1 text-lg sparkle-animation",children:"✨"}),n.jsx("div",{className:"absolute bottom-1 left-1 text-sm sparkle-animation",style:{animationDelay:"1s"},children:"⭐"})]})}),!g&&n.jsx("div",{className:"absolute inset-0 rounded-2xl bg-black/30 flex items-center justify-center",children:n.jsx("div",{className:"text-4xl",children:"🔒"})}),n.jsxs("div",{className:"relative h-full flex flex-col items-center justify-center p-3",children:[n.jsx("div",{className:"absolute top-1 left-1 w-7 h-7 bg-white/30 rounded-full flex items-center justify-center",children:n.jsx("span",{className:"text-white font-bold text-sm",children:f.id})}),S&&n.jsx("div",{className:"absolute top-1 right-1 text-lg",children:"💯"}),n.jsx("div",{className:`text-5xl mb-1 ${g?"bounce-animation":""}`,children:g?f.emoji:"❓"}),n.jsx("div",{className:"text-white font-bold text-sm text-center mb-1",children:f.name}),n.jsx("div",{className:`px-2 py-0.5 rounded-full text-[10px] font-bold ${g?"bg-white/30":"bg-black/30"} text-white`,children:f.difficulty}),j&&n.jsx("div",{className:"absolute bottom-1 text-2xl pulse-animation",children:f.rewards.treasurePiece}),(w==null?void 0:w.attempts)>0&&n.jsxs("div",{className:"absolute -bottom-1 -right-1 bg-white/90 text-gray-800 rounded-full px-2 py-0.5 text-[10px] font-bold flex items-center gap-1",children:[n.jsxs("span",{children:[w.bestScore,"/3"]}),n.jsx("span",{children:"⭐"})]})]})]},f.id)})}),n.jsx("div",{className:"flex justify-center mt-3",children:e.slice(4,5).map(f=>{const w=t[f.id],g=w==null?void 0:w.unlocked,j=w==null?void 0:w.treasurePiece,S=w==null?void 0:w.perfectScore;return n.jsxs("button",{onClick:()=>r(f.id),disabled:!g,className:`relative w-[calc(50%-6px)] aspect-square rounded-2xl transition-all ${g?"hover:scale-105 active:scale-95 shadow-xl":"opacity-50 grayscale"}`,children:[n.jsxs("div",{className:`absolute inset-0 rounded-2xl bg-gradient-to-br ${g?f.theme.background:"from-gray-400 to-gray-500"}`,children:[g&&n.jsxs(n.Fragment,{children:[n.jsx("div",{className:"absolute top-1 right-1 text-lg sparkle-animation",children:"✨"}),n.jsx("div",{className:"absolute bottom-1 left-1 text-sm sparkle-animation",style:{animationDelay:"1s"},children:"⭐"})]}),!g&&n.jsx("div",{className:"absolute inset-0 rounded-2xl bg-gradient-to-t from-yellow-400/20 to-transparent animate-pulse"})]}),!g&&n.jsx("div",{className:"absolute inset-0 rounded-2xl bg-black/30 flex items-center justify-center",children:n.jsx("div",{className:"text-4xl",children:"🔒"})}),n.jsxs("div",{className:"relative h-full flex flex-col items-center justify-center p-3",children:[n.jsx("div",{className:"absolute top-1 left-1 w-7 h-7 bg-white/30 rounded-full flex items-center justify-center",children:n.jsx("span",{className:"text-white font-bold text-sm",children:f.id})}),S&&n.jsx("div",{className:"absolute top-1 right-1 text-lg",children:"💯"}),n.jsx("div",{className:`text-5xl mb-1 ${g?"bounce-animation":""}`,children:g?f.emoji:"👑"}),n.jsx("div",{className:"text-white font-bold text-sm text-center mb-1",children:f.name}),n.jsx("div",{className:`px-2 py-0.5 rounded-full text-[10px] font-bold ${g?"bg-white/30":"bg-black/30"} text-white`,children:f.difficulty}),j&&n.jsx("div",{className:"absolute bottom-1 text-2xl pulse-animation",children:f.rewards.treasurePiece}),(w==null?void 0:w.attempts)>0&&n.jsxs("div",{className:"absolute -bottom-1 -right-1 bg-white/90 text-gray-800 rounded-full px-2 py-0.5 text-[10px] font-bold flex items-center gap-1",children:[n.jsxs("span",{children:[w.bestScore,"/3"]}),n.jsx("span",{children:"⭐"})]})]})]},f.id)})})]})}),n.jsx("div",{className:"relative z-20 px-4 pb-[calc(env(safe-area-inset-bottom)+3rem)]",children:n.jsx("div",{className:"bg-gradient-to-r from-indigo-500/30 to-purple-500/30 backdrop-blur-lg rounded-2xl shadow-xl border border-white/20",children:n.jsxs("div",{className:"grid grid-cols-3 gap-2 text-center",children:[n.jsxs("div",{className:"relative",children:[n.jsx("div",{className:"text-2xl mb-0.5 filter drop-shadow-lg",children:"💰"}),n.jsx("div",{className:"text-yellow-300 font-black text-lg",children:i.totalCoinsEarned}),n.jsx("div",{className:"text-white/80 text-[10px] font-medium",children:"Total Coins"})]}),n.jsxs("div",{className:"relative",children:[n.jsx("div",{className:"text-2xl mb-0.5 filter drop-shadow-lg",children:"💎"}),n.jsx("div",{className:"text-cyan-300 font-black text-lg",children:i.totalGemsFound}),n.jsx("div",{className:"text-white/80 text-[10px] font-medium",children:"Gems Found"})]}),n.jsxs("div",{className:"relative",children:[n.jsx("div",{className:"text-2xl mb-0.5 filter drop-shadow-lg",children:"📝"}),n.jsxs("div",{className:"text-green-300 font-black text-lg",children:[i.totalCorrectAnswers,"/",i.totalQuestionsAnswered]}),n.jsx("div",{className:"text-white/80 text-[10px] font-medium",children:"Correct"})]})]})})}),l&&n.jsx("div",{className:"fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 px-6",children:n.jsxs("div",{className:"bg-gradient-to-br from-purple-600 to-pink-600 rounded-3xl p-6 max-w-sm w-full shadow-2xl",children:[n.jsx("h3",{className:"text-2xl font-bold text-white text-center mb-6",children:"🏆 Treasure Collection 🏆"}),n.jsx("div",{className:"flex justify-center gap-4 mb-6",children:u.map((f,w)=>n.jsx("div",{className:`text-5xl ${f.collected?"":"opacity-30 grayscale"}`,children:f.collected?f.piece:"❓"},f.id))}),n.jsx("div",{className:"text-center text-white mb-6",children:m===5?n.jsxs("div",{children:[n.jsx("p",{className:"text-lg font-bold mb-2",children:"🎉 COMPLETE! 🎉"}),n.jsx("p",{className:"text-sm opacity-90",children:"You're a true Treasure Master!"})]}):n.jsx("p",{className:"text-sm opacity-90",children:"Collect all 5 pieces to unlock the final treasure!"})}),n.jsx("button",{onClick:()=>c(!1),className:"w-full py-3 bg-white/20 backdrop-blur rounded-2xl text-white font-bold hover:bg-white/30 transition-colors",children:"Close"})]})})]})}function zg({island:e,progress:t,onStart:r,onClose:s,soundOn:a}){const[o,i]=d.useState(!1);d.useEffect(()=>{i(!0)},[]),d.useEffect(()=>{const f=w=>{s()};return window.history.pushState({islandDetail:!0},"",window.location.pathname),window.addEventListener("popstate",f),()=>window.removeEventListener("popstate",f)},[s]);const l=(t==null?void 0:t.attempts)>0,c=t==null?void 0:t.treasurePiece;t==null||t.perfectScore;const u=(t==null?void 0:t.bestScore)||0,m=()=>{if(a){const f=new Audio("/sounds/start.mp3");f.volume=.5,f.play().catch(()=>{})}r()},p=f=>{const w=Math.floor(f/60),g=f%60;return`${w}:${g.toString().padStart(2,"0")}`};return n.jsxs("div",{className:"fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50 p-4",children:[n.jsx("style",{jsx:!0,children:`
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
      `}),n.jsxs("div",{className:`relative w-full max-w-sm bg-gradient-to-br ${e.theme.background} rounded-2xl shadow-2xl ${o?"slide-up":""}`,children:[n.jsx("div",{className:"relative p-4 pb-2",children:n.jsxs("div",{className:"text-center",children:[n.jsx("div",{className:"text-6xl mb-2 pulse-animation",children:e.emoji}),n.jsx("h2",{className:"text-2xl font-black text-white",children:e.name}),n.jsx("div",{className:"inline-block px-3 py-1 bg-white/20 backdrop-blur rounded-full mt-2",children:n.jsxs("span",{className:"text-white font-bold text-sm",children:["Level ",e.id," • ",e.difficulty]})})]})}),n.jsxs("div",{className:"px-4 py-3 space-y-2",children:[n.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[n.jsxs("div",{className:"bg-black/10 backdrop-blur rounded-xl p-3 text-center",children:[n.jsx("div",{className:"text-white/70 text-xs mb-1",children:"Time"}),n.jsx("div",{className:"text-white font-bold",children:p(e.timeLimit)})]}),n.jsxs("div",{className:"bg-black/10 backdrop-blur rounded-xl p-3 text-center",children:[n.jsx("div",{className:"text-white/70 text-xs mb-1",children:"Questions"}),n.jsx("div",{className:"text-white font-bold",children:De.QUESTIONS_PER_ISLAND})]})]}),n.jsxs("div",{className:"bg-black/10 backdrop-blur rounded-xl p-3 flex items-center justify-between",children:[n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx("span",{className:"text-2xl",children:e.rewards.treasurePiece}),n.jsx("span",{className:"text-white font-medium",children:"To Win"})]}),n.jsxs("span",{className:"text-white font-bold",children:[e.requiredCorrect,"/3 Correct"]})]}),n.jsxs("div",{className:"bg-black/10 backdrop-blur rounded-xl p-3",children:[n.jsx("div",{className:"text-white font-bold text-sm mb-2",children:"Rewards"}),n.jsxs("div",{className:"grid grid-cols-4 gap-2 text-center",children:[n.jsxs("div",{children:[n.jsx("div",{className:"text-xl",children:"💰"}),n.jsx("div",{className:"text-white/70 text-xs",children:e.rewards.perCorrectAnswer})]}),n.jsxs("div",{children:[n.jsx("div",{className:"text-xl",children:"💎"}),n.jsxs("div",{className:"text-white/70 text-xs",children:[Math.round(e.rewards.gemChance*100),"%"]})]}),n.jsxs("div",{children:[n.jsx("div",{className:"text-xl",children:"⚡"}),n.jsxs("div",{className:"text-white/70 text-xs",children:["+",e.rewards.speedBonus]})]}),n.jsxs("div",{children:[n.jsx("div",{className:"text-xl",children:"🏆"}),n.jsxs("div",{className:"text-white/70 text-xs",children:["+",e.rewards.perfectBonus]})]})]})]}),l&&n.jsx("div",{className:"bg-black/10 backdrop-blur rounded-xl p-3",children:n.jsxs("div",{className:"flex items-center justify-between",children:[n.jsx("div",{className:"flex gap-1",children:[...Array(3)].map((f,w)=>n.jsx("span",{className:"text-lg",children:w<u?"⭐":"☆"},w))}),n.jsxs("div",{className:"text-white text-sm",children:[n.jsxs("span",{className:"font-bold",children:[u,"/3"]})," • ",t.attempts," tries"]}),c&&n.jsx("div",{className:"text-2xl",children:e.rewards.treasurePiece})]})})]}),n.jsxs("div",{className:"p-4 pt-2 space-y-2",children:[n.jsx("button",{onClick:m,className:"w-full py-3 bg-gradient-to-r from-green-400 to-emerald-500 text-white rounded-xl font-black text-base shadow-lg hover:shadow-xl transition-all hover:scale-[1.02] active:scale-[0.98]",children:n.jsxs("span",{className:"flex items-center justify-center gap-2",children:[n.jsx("span",{className:"text-xl",children:"🏴‍☠️"}),n.jsx("span",{children:l?"Play Again":"Start Adventure"}),n.jsx("span",{className:"text-xl",children:"🏴‍☠️"})]})}),n.jsx("button",{onClick:s,className:"w-full py-2 bg-white/20 backdrop-blur text-white rounded-xl font-bold text-sm hover:bg-white/30 transition-colors",children:"Back to Map"})]})]})]})}function Mg({shovelsRemaining:e,showBreak:t=!1}){const[r,s]=d.useState(!1),[a,o]=d.useState(e),i=3;return d.useEffect(()=>{e<a&&(s(!0),setTimeout(()=>s(!1),1e3)),o(e)},[e,a]),n.jsxs("div",{className:"inline-block",children:[n.jsx("style",{jsx:!0,children:`
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
                  `,children:u||m?"⛏️":"🪦"}),m&&n.jsxs(n.Fragment,{children:[n.jsx("div",{className:"absolute inset-0 pointer-events-none",children:n.jsxs("svg",{className:"w-full h-full",viewBox:"0 0 40 40",children:[n.jsx("path",{d:"M20,10 L18,20 L22,30",stroke:"#ff4444",strokeWidth:"2",fill:"none",opacity:"0.8",className:"shovel-crack"}),n.jsx("path",{d:"M15,15 L20,20 L25,18",stroke:"#ff4444",strokeWidth:"1.5",fill:"none",opacity:"0.6",className:"shovel-crack",style:{animationDelay:"0.1s"}})]})}),n.jsxs("div",{className:"absolute inset-0 pointer-events-none",children:[n.jsx("span",{className:"absolute top-0 left-1/2 text-xs shovel-fall",children:"💔"}),n.jsx("span",{className:"absolute top-1/2 left-0 text-xs shovel-fall",style:{animationDelay:"0.2s"},children:"✨"}),n.jsx("span",{className:"absolute top-1/2 right-0 text-xs shovel-fall",style:{animationDelay:"0.3s"},children:"💥"})]})]}),n.jsx("div",{className:"absolute -bottom-1 left-1/2 -translate-x-1/2",children:n.jsx("span",{className:`text-xs font-bold ${u?"text-blue-600":"text-white/30"}`,children:c+1})})]},c)})}),e===0&&n.jsx("span",{className:"text-red-400 text-sm font-bold animate-pulse ml-2",children:"No shovels left!"}),e===1&&n.jsx("span",{className:"text-red-500 text-sm font-bold ml-2",children:"Last chance!"})]})})]})}function Og({island:e,foundGem:t,onComplete:r}){const[s,a]=d.useState("digging"),[o,i]=d.useState(!1),[l,c]=d.useState(!1);return d.useEffect(()=>{(async()=>{await new Promise(m=>setTimeout(m,800)),a("revealing"),i(!0),t&&(await new Promise(m=>setTimeout(m,400)),c(!0)),await new Promise(m=>setTimeout(m,1e3)),a("complete"),await new Promise(m=>setTimeout(m,300)),r()})()},[t,r]),n.jsxs("div",{className:"fixed inset-0 z-40 pointer-events-none flex items-center justify-center",children:[n.jsx("style",{jsx:!0,children:`
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
      `}),s==="digging"&&n.jsxs("div",{className:"relative",children:[n.jsx("div",{className:"text-8xl dig-animation",children:e.visualElements.diggingEmoji}),[...Array(8)].map((u,m)=>n.jsx("div",{className:"dirt-particle text-4xl",style:{"--fly-x":`${(Math.random()-.5)*200}px`,"--fly-y":`${-Math.random()*150-50}px`,left:"50%",top:"60%",animationDelay:`${m*.1}s`},children:"🟫"},m)),n.jsx("div",{className:"absolute -bottom-4 left-1/2 -translate-x-1/2",children:n.jsx("div",{className:"text-6xl opacity-50",children:"💨"})})]}),s==="revealing"&&n.jsxs("div",{className:"relative",children:[o&&n.jsxs("div",{className:"relative",children:[n.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:n.jsx("div",{className:"w-32 h-32 rounded-full bg-yellow-400/30 blur-xl glow-effect"})}),n.jsxs("div",{className:"relative flex items-center justify-center",children:[n.jsx("div",{className:"text-7xl treasure-reveal treasure-float",children:"💰"}),n.jsx("div",{className:"absolute text-5xl coin-spin",style:{left:"-30px"},children:"🪙"}),n.jsx("div",{className:"absolute text-5xl coin-spin",style:{right:"-30px",animationDelay:"0.5s"},children:"🪙"}),n.jsx("div",{className:"absolute text-4xl coin-spin",style:{top:"-30px",animationDelay:"1s"},children:"🪙"})]}),[...Array(6)].map((u,m)=>n.jsx("div",{className:"absolute text-3xl star-burst",style:{left:"50%",top:"50%",transform:`translate(-50%, -50%) rotate(${m*60}deg) translateY(-40px)`,animationDelay:`${m*.1}s`},children:"⭐"},m))]}),l&&n.jsxs("div",{className:"absolute -top-10 left-1/2 -translate-x-1/2",children:[n.jsxs("div",{className:"relative",children:[n.jsx("div",{className:"text-6xl gem-sparkle",children:"💎"}),n.jsx("div",{className:"absolute -top-2 -left-2 text-2xl animate-pulse",children:"✨"}),n.jsx("div",{className:"absolute -top-2 -right-2 text-2xl animate-pulse",style:{animationDelay:"0.3s"},children:"✨"}),n.jsx("div",{className:"absolute -bottom-2 left-1/2 -translate-x-1/2 text-2xl animate-pulse",style:{animationDelay:"0.6s"},children:"✨"})]}),n.jsx("div",{className:"absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap",children:n.jsx("span",{className:"text-cyan-300 font-black text-lg drop-shadow-lg",children:"RARE GEM!"})})]}),n.jsx("div",{className:"absolute -bottom-16 left-1/2 -translate-x-1/2 text-center",children:n.jsx("div",{className:"text-white font-black text-2xl drop-shadow-lg",children:t?"AMAZING FIND!":"TREASURE FOUND!"})})]}),s==="complete"&&n.jsx("div",{className:"relative opacity-0 transition-opacity duration-300",children:n.jsx("div",{className:"text-7xl",children:"✅"})})]})}function Fg({island:e,question:t,questionNumber:r,totalQuestions:s,shovelsRemaining:a,timeRemaining:o,coinsEarned:i,gemsFound:l,onAnswer:c,onQuit:u,soundOn:m,setSoundOn:p}){const[f,w]=d.useState(null),[g,j]=d.useState(!1),[S,y]=d.useState(!1),[v,x]=d.useState(!1),[N,C]=d.useState(!1),[R,T]=d.useState(!1),[h,b]=d.useState(!1),k=d.useRef(null);d.useEffect(()=>{w(null),j(!1),y(!1),x(!1),C(!1),b(!1)},[t]),d.useEffect(()=>{const V=K=>{K.stopImmediatePropagation(),R||(T(!0),window.history.pushState({questionScreen:!0},"",window.location.pathname))};return window.history.pushState({questionScreen:!0},"",window.location.pathname),window.addEventListener("popstate",V,!0),()=>window.removeEventListener("popstate",V,!0)},[R]);const _=V=>{const K=Math.floor(V/60),U=V%60;return`${K}:${U.toString().padStart(2,"0")}`},A=()=>o<=10?"critical":o<=30?"warning":"normal",q=V=>{if(h||g)return;w(V),b(!0);const K=V===t.correctIndex;y(K),setTimeout(()=>{if(j(!0),m)if(K){const U=new Audio("/sounds/dig.mp3");U.volume=.5,U.play().catch(()=>{})}else{const U=new Audio("/sounds/wrong.mp3");U.volume=.5,U.play().catch(()=>{})}K&&(x(!0),Math.random()<e.rewards.gemChance&&setTimeout(()=>{if(C(!0),m){const M=new Audio("/sounds/gem.mp3");M.volume=.6,M.play().catch(()=>{})}},800)),setTimeout(()=>{c(V)},K?2e3:1500)},300)},H=A();return n.jsxs("div",{className:`min-h-screen bg-gradient-to-br ${e.theme.background} relative overflow-hidden`,children:[n.jsx("style",{jsx:!0,children:`
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
      `}),n.jsx("div",{className:"absolute inset-0 pointer-events-none",children:e.visualElements.bgEmojis.map((V,K)=>n.jsx("div",{className:"absolute text-7xl opacity-10 float-animation",style:{top:`${20+K*15}%`,left:`${10+K*18}%`,animationDelay:`${K*.5}s`,animationDuration:`${3+K}s`},children:V},K))}),n.jsxs("div",{className:"relative z-10 px-3 pt-[calc(env(safe-area-inset-top)+4rem)]",children:[n.jsxs("div",{className:"flex justify-between items-center mb-3",children:[n.jsx("button",{onClick:()=>T(!0),className:"w-10 h-10 glass-card rounded-xl shadow-lg flex items-center justify-center hover:scale-105 transition-transform",children:n.jsx("span",{className:"text-xl",children:"⬅️"})}),n.jsx("div",{className:"glass-card rounded-xl px-3 py-1.5 shadow-lg",children:n.jsxs("div",{className:"flex items-center gap-1.5",children:[n.jsx("span",{className:"text-xl",children:e.emoji}),n.jsx("span",{className:"text-gray-800 font-bold text-sm",children:e.name})]})}),n.jsx("button",{onClick:()=>p(!m),className:"w-10 h-10 glass-card rounded-xl shadow-lg flex items-center justify-center hover:scale-105 transition-transform",children:n.jsx("span",{className:"text-xl",children:m?"🔊":"🔇"})})]}),n.jsxs("div",{className:"glass-card rounded-xl p-3 shadow-xl mb-3",children:[n.jsxs("div",{className:"grid grid-cols-4 gap-2",children:[n.jsxs("div",{className:"text-center",children:[n.jsx("div",{className:`text-xl font-black ${H==="critical"?"text-red-600 time-pulse-critical":H==="warning"?"text-orange-600":"text-gray-800"}`,children:_(o)}),n.jsx("div",{className:"text-[10px] text-gray-700 font-medium",children:"Time"})]}),n.jsxs("div",{className:"text-center",children:[n.jsxs("div",{className:"text-xl font-black text-gray-800",children:[r,"/",s]}),n.jsx("div",{className:"text-[10px] text-gray-700 font-medium",children:"Question"})]}),n.jsxs("div",{className:"text-center relative",children:[n.jsx("div",{className:"text-xl font-black text-orange-600",children:i}),n.jsx("div",{className:"text-[10px] text-gray-700 font-medium",children:"Coins"}),g&&S&&n.jsx("div",{className:"absolute -top-3 left-1/2 -translate-x-1/2",children:n.jsxs("span",{className:"text-orange-600 font-bold text-xs coin-float",children:["+",e.rewards.perCorrectAnswer]})})]}),n.jsxs("div",{className:"text-center relative",children:[n.jsx("div",{className:"text-xl font-black text-blue-600",children:l}),n.jsx("div",{className:"text-[10px] text-gray-700 font-medium",children:"Gems"}),N&&n.jsx("div",{className:"absolute -top-3 left-1/2 -translate-x-1/2",children:n.jsx("span",{className:"text-blue-600 text-xl gem-sparkle",children:"💎"})})]})]}),n.jsx("div",{className:"mt-2",children:n.jsx("div",{className:"w-full h-1.5 bg-gray-800/20 rounded-full overflow-hidden",children:n.jsx("div",{className:"h-full bg-gradient-to-r from-green-500 to-emerald-600 progress-bar",style:{width:`${(r-1)/s*100}%`}})})})]}),n.jsx("div",{className:"flex justify-center mb-3 pt-2",children:n.jsx(Mg,{shovelsRemaining:a,showBreak:g&&!S})})]}),n.jsxs("div",{className:"px-3 pt-8 slide-in",children:[n.jsxs("div",{ref:k,className:`glass-card rounded-2xl shadow-xl p-4 mb-4 ${g&&!S?"wrong-shake":""}`,children:[n.jsx("div",{className:"text-center mb-2",children:n.jsxs("span",{className:"text-xs font-bold text-gray-600 uppercase tracking-wider",children:["Question ",r]})}),n.jsx("h2",{className:"text-lg font-bold text-center text-gray-800 leading-relaxed",children:t.prompt})]}),n.jsx("div",{className:"space-y-2.5",children:t.options.map((V,K)=>{const U=["A","B","C","D"],M=f===K,I=K===t.correctIndex;let z="glass-card option-card",D="border border-gray-800/20";return g&&(I?(z+=" correct-pulse",D="border-2 border-green-500 bg-green-400/20"):M&&!S&&(z+=" wrong-shake",D="border-2 border-red-500 bg-red-400/20"),z+=" disabled"),n.jsx("button",{onClick:()=>q(K),disabled:h,className:`w-full p-3 rounded-xl shadow-lg ${z} ${D}`,children:n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsx("div",{className:`w-10 h-10 rounded-lg bg-gradient-to-br ${K===0?"from-blue-400 to-blue-500":K===1?"from-green-400 to-green-500":K===2?"from-yellow-400 to-yellow-500":"from-purple-400 to-purple-500"} text-white font-bold text-lg flex items-center justify-center shadow-md`,children:U[K]}),n.jsx("span",{className:"flex-1 text-left font-medium text-gray-800 text-sm",children:V}),g&&I&&n.jsx("span",{className:"text-2xl",children:"✅"}),g&&M&&!S&&n.jsx("span",{className:"text-2xl",children:"❌"})]})},K)})}),g&&n.jsx("div",{className:"mt-3 text-center slide-in",children:n.jsx("p",{className:"text-base font-bold text-gray-800",children:S?`Great job! Let's dig for treasure! ${e.visualElements.diggingEmoji}`:"Oops! Your shovel broke! Try the next question! 💪"})})]}),v&&n.jsx(Og,{island:e,foundGem:N,onComplete:()=>x(!1)}),R&&n.jsx("div",{className:"fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 px-6",children:n.jsxs("div",{className:"bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-6 max-w-sm w-full shadow-2xl slide-in border border-white/10",children:[n.jsxs("div",{className:"text-center mb-6",children:[n.jsx("div",{className:"text-5xl mb-3",children:"🗺️"}),n.jsx("h3",{className:"text-xl font-bold text-white mb-2",children:"Leave the Island?"}),n.jsx("p",{className:"text-white/70",children:"Your progress won't be saved!"})]}),n.jsxs("div",{className:"flex gap-3",children:[n.jsx("button",{onClick:()=>T(!1),className:"flex-1 py-3 bg-gradient-to-r from-green-400 to-emerald-500 text-white rounded-2xl font-bold shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]",children:"Keep Playing"}),n.jsx("button",{onClick:u,className:"flex-1 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-2xl font-bold shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]",children:"Leave Island"})]})]})})]})}function $g({island:e,session:t,earnedTreasure:r,onRetry:s,onContinue:a,soundOn:o}){const[i,l]=d.useState(0),[c,u]=d.useState(!1),[m,p]=d.useState(!1),f=t.correctAnswers===De.QUESTIONS_PER_ISLAND,w=Ig(t.correctAnswers,e.id);return d.useEffect(()=>{const g=t.coinsEarned,j=2e3,S=30,y=g/S;let v=0;const x=setInterval(()=>{v+=y,v>=g?(l(g),clearInterval(x),r&&setTimeout(()=>u(!0),500),setTimeout(()=>p(!0),r?1500:500)):l(Math.floor(v))},j/S);return()=>clearInterval(x)},[t.coinsEarned,r]),n.jsxs("div",{className:`fixed inset-0 bg-gradient-to-br ${e.theme.background} overflow-hidden flex flex-col`,children:[n.jsx("style",{jsx:!0,children:`
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
      `}),n.jsx("div",{className:"absolute inset-0 pointer-events-none",children:f&&[...Array(10)].map((g,j)=>n.jsx("div",{className:"absolute confetti-fall",style:{left:`${Math.random()*100}%`,animationDelay:`${Math.random()*3}s`,fontSize:`${20+Math.random()*20}px`},children:["🎉","⭐","🎊","✨"][Math.floor(Math.random()*4)]},j))}),n.jsxs("div",{className:"relative z-10 flex-1 flex flex-col items-center justify-center px-4 py-4",children:[n.jsxs("div",{className:"mb-3 text-center slide-up",children:[n.jsx("h1",{className:"text-2xl font-black text-white mb-2",children:r?"TREASURE FOUND!":"ISLAND COMPLETE!"}),n.jsx("div",{className:"text-5xl bounce-animation",children:r?e.rewards.treasurePiece:"🏝️"})]}),n.jsxs("div",{className:"glass-card rounded-2xl p-3 max-w-md w-full mb-2 slide-up",style:{animationDelay:"0.2s",background:"rgba(46, 46, 32, 0.25)"},children:[n.jsxs("div",{className:"text-center mb-2",children:[n.jsxs("div",{className:"text-3xl font-black text-white mb-1",children:[t.correctAnswers,"/",De.QUESTIONS_PER_ISLAND]}),n.jsx("div",{className:"text-white/80 font-medium",children:"Questions Correct"})]}),m&&n.jsx("div",{className:"flex justify-center gap-2 mb-2",children:[...Array(3)].map((g,j)=>n.jsx("div",{className:`text-3xl ${j<t.correctAnswers?"star-pop":""}`,style:{animationDelay:`${j*.2}s`},children:j<t.correctAnswers?"⭐":"☆"},j))}),c&&r&&n.jsxs("div",{className:"text-center mb-2",children:[n.jsx("div",{className:"text-5xl treasure-shine mb-1",children:e.rewards.treasurePiece}),n.jsx("div",{className:"text-white font-bold text-lg",children:"Treasure Piece Earned!"})]}),n.jsxs("div",{className:"grid grid-cols-2 gap-2 mb-2",children:[n.jsxs("div",{className:"glass-card rounded-2xl p-4 text-center",children:[n.jsx("div",{className:"text-4xl mb-1",children:"🪙"}),n.jsx("div",{className:"text-3xl font-black text-yellow-300",children:i}),n.jsx("div",{className:"text-white/70 text-sm",children:"Coins Earned"})]}),n.jsxs("div",{className:"glass-card rounded-2xl p-4 text-center",children:[n.jsx("div",{className:"text-4xl mb-2",children:"💎"}),n.jsx("div",{className:"text-3xl font-black text-cyan-300",children:t.gemsFound}),n.jsx("div",{className:"text-white/70 text-sm",children:"Gems Found"})]})]}),n.jsx("div",{className:"text-center p-4 bg-white/10 rounded-1xl",children:n.jsx("p",{className:"text-white font-medium text-lg",children:w})}),f&&n.jsx("div",{className:"mt-4 text-center",children:n.jsx("div",{className:"inline-block px-6 py-3 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full",children:n.jsx("span",{className:"text-white font-black text-lg",children:"💯 PERFECT SCORE! 💯"})})})]}),n.jsxs("div",{className:"space-y-3 w-full max-w-md slide-up",style:{animationDelay:"0.4s"},children:[!r&&n.jsx("button",{onClick:s,className:"w-full py-4 bg-gradient-to-r from-orange-400 to-red-500 text-white rounded-2xl font-black text-lg shadow-xl hover:shadow-2xl transition-all hover:scale-[1.02] active:scale-[0.98]",children:n.jsxs("div",{className:"flex items-center justify-center gap-3",children:[n.jsx("span",{className:"text-2xl",children:"🔄"}),n.jsx("span",{children:"Try Again"})]})}),n.jsx("button",{onClick:a,className:"w-full py-3 bg-gradient-to-r from-white to-gray-100 text-gray-800 rounded-2xl font-black text-lg shadow-xl hover:shadow-2xl transition-all hover:scale-[1.02] active:scale-[0.98]",children:n.jsxs("div",{className:"flex items-center justify-center gap-3",children:[n.jsx("span",{className:"text-2xl",children:"🗺️"}),n.jsx("span",{children:"Back to Map"})]})})]})]})]})}function Bg({totalStats:e,onContinue:t,soundOn:r}){const[s,a]=d.useState(!1),[o,i]=d.useState(!1),[l,c]=d.useState(!1),[u,m]=d.useState(!1),[p,f]=d.useState(!1);return d.useEffect(()=>{(async()=>{await new Promise(g=>setTimeout(g,500)),a(!0),await new Promise(g=>setTimeout(g,1e3)),i(!0),f(!0),await new Promise(g=>setTimeout(g,800)),c(!0),await new Promise(g=>setTimeout(g,1e3)),m(!0)})()},[]),n.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-purple-600 via-pink-600 to-yellow-500 relative overflow-hidden",children:[n.jsx("style",{jsx:!0,children:`
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
      `}),p&&n.jsx("div",{className:"fixed inset-0 pointer-events-none",children:[...Array(15)].map((w,g)=>n.jsx("div",{className:"absolute firework",style:{left:`${20+Math.random()*60}%`,top:`${20+Math.random()*60}%`,animationDelay:`${Math.random()*2}s`,fontSize:`${40+Math.random()*40}px`},children:["✨","⭐","💫","🌟"][Math.floor(Math.random()*4)]},g))}),n.jsx("div",{className:"fixed inset-0 pointer-events-none",children:[...Array(20)].map((w,g)=>n.jsx("div",{className:"absolute coin-rain",style:{left:`${Math.random()*100}%`,animationDelay:`${Math.random()*3}s`,animationDuration:`${3+Math.random()*2}s`,fontSize:`${20+Math.random()*20}px`},children:["🪙","💰","💎"][Math.floor(Math.random()*3)]},g))}),n.jsxs("div",{className:"relative z-10 flex flex-col items-center justify-center min-h-screen px-6",children:[n.jsxs("div",{className:"text-center mb-8",children:[n.jsx("h1",{className:"text-6xl font-black text-white mb-4",children:"LEGENDARY!"}),n.jsx("div",{className:"text-8xl bounce-animation",children:"👑"})]}),s&&n.jsxs("div",{className:`relative mb-8 ${s?"chest-appear":""}`,children:[n.jsx("div",{className:`text-[150px] ${o?"chest-open":""}`,children:"📦"}),o&&n.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:Xn.map((w,g)=>n.jsx("div",{className:"absolute text-6xl float-animation treasure-glow",style:{transform:`rotate(${g*72}deg) translateY(-100px)`,animationDelay:`${g*.2}s`},children:w.rewards.treasurePiece},w.id))})]}),l&&n.jsxs("div",{className:"glass-card rounded-3xl p-6 max-w-md w-full mb-6",children:[n.jsx("h2",{className:"text-2xl font-black text-white text-center mb-6",children:"🏆 FINAL TREASURE UNLOCKED! 🏆"}),n.jsx("div",{className:"bg-gradient-to-r from-yellow-400 to-amber-500 rounded-2xl p-4 mb-4",children:n.jsxs("div",{className:"text-center",children:[n.jsx("div",{className:"text-5xl mb-2",children:"💰"}),n.jsx("div",{className:"text-4xl font-black text-white",children:De.FINAL_TREASURE_REWARD}),n.jsx("div",{className:"text-white/90 font-medium",children:"Bonus Coins!"})]})}),n.jsxs("div",{className:"grid grid-cols-2 gap-3 mb-4",children:[n.jsxs("div",{className:"glass-card rounded-xl p-3 text-center",children:[n.jsx("div",{className:"text-3xl mb-1",children:"🏝️"}),n.jsx("div",{className:"text-2xl font-black text-white",children:"5/5"}),n.jsx("div",{className:"text-white/70 text-xs",children:"Islands"})]}),n.jsxs("div",{className:"glass-card rounded-xl p-3 text-center",children:[n.jsx("div",{className:"text-3xl mb-1",children:"🧩"}),n.jsx("div",{className:"text-2xl font-black text-white",children:"5/5"}),n.jsx("div",{className:"text-white/70 text-xs",children:"Treasures"})]}),n.jsxs("div",{className:"glass-card rounded-xl p-3 text-center",children:[n.jsx("div",{className:"text-3xl mb-1",children:"💰"}),n.jsx("div",{className:"text-2xl font-black text-yellow-300",children:e.totalCoinsEarned+De.FINAL_TREASURE_REWARD}),n.jsx("div",{className:"text-white/70 text-xs",children:"Total Coins"})]}),n.jsxs("div",{className:"glass-card rounded-xl p-3 text-center",children:[n.jsx("div",{className:"text-3xl mb-1",children:"💎"}),n.jsx("div",{className:"text-2xl font-black text-cyan-300",children:e.totalGemsFound}),n.jsx("div",{className:"text-white/70 text-xs",children:"Total Gems"})]})]}),u&&n.jsxs("div",{className:"text-center p-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl",children:[n.jsx("div",{className:"text-3xl mb-2",children:"🏆"}),n.jsx("div",{className:"text-xl font-black text-white title-shine",children:De.FINAL_TREASURE_TITLE}),n.jsx("div",{className:"text-white/90 text-sm mt-1",children:"New Title Unlocked!"})]})]}),l&&n.jsx("button",{onClick:t,className:"w-full max-w-md py-4 bg-gradient-to-r from-white to-gray-100 text-gray-800 rounded-2xl font-black text-lg shadow-xl hover:shadow-2xl transition-all hover:scale-[1.02] active:scale-[0.98]",children:n.jsxs("div",{className:"flex items-center justify-center gap-3",children:[n.jsx("span",{className:"text-2xl",children:"🎉"}),n.jsx("span",{children:"Complete Adventure"}),n.jsx("span",{className:"text-2xl",children:"🎉"})]})}),n.jsx("div",{className:"absolute inset-0 pointer-events-none",children:[...Array(10)].map((w,g)=>n.jsx("div",{className:"absolute text-2xl sparkle-animation",style:{left:`${Math.random()*100}%`,top:`${Math.random()*100}%`,animationDelay:`${Math.random()*2}s`},children:"✨"},g))})]})]})}function Ug({onBack:e}){const{coins:t,xp:r,level:s,soundOn:a,setSoundOn:o}=To(),[i,l]=d.useState(!1),[c,u]=d.useState("map"),[m,p]=d.useState(null),[f,w]=d.useState([]),[g,j]=d.useState(()=>{const z=localStorage.getItem(De.STORAGE_KEYS.PROGRESS);if(z)try{return JSON.parse(z)}catch(D){console.error("Failed to load progress:",D)}return Xn.reduce((D,E)=>(D[E.id]={unlocked:E.id===1,completed:!1,treasurePiece:!1,perfectScore:!1,bestScore:0,attempts:0},D),{})}),[S,y]=d.useState({islandId:null,questions:[],currentQuestionIndex:0,shovelsRemaining:De.SHOVELS_PER_ISLAND,correctAnswers:0,wrongAnswers:0,timeRemaining:300,gemsFound:0,coinsEarned:0,questionTimes:[],startTime:null}),[v,x]=d.useState(()=>{const z=localStorage.getItem(De.STORAGE_KEYS.STATS);if(z)try{return JSON.parse(z)}catch(D){console.error("Failed to load stats:",D)}return{totalCoinsEarned:0,totalGemsFound:0,totalTreasurePieces:0,totalQuestionsAnswered:0,totalCorrectAnswers:0,islandsCompleted:0,gameCompleted:!1}}),N=d.useRef(null),C=d.useRef(null);d.useEffect(()=>(R(),window.history.pushState({mode:"treasureHunt"},"",window.location.href),()=>{N.current&&clearInterval(N.current)}),[]),d.useEffect(()=>{localStorage.setItem(De.STORAGE_KEYS.PROGRESS,JSON.stringify(g))},[g]),d.useEffect(()=>{localStorage.setItem(De.STORAGE_KEYS.STATS,JSON.stringify(v))},[v]),d.useEffect(()=>(c==="playing"&&S.timeRemaining>0?N.current=setInterval(()=>{y(z=>{const D=z.timeRemaining-1;return D<=0?(_(),{...z,timeRemaining:0}):(D===30&&a&&U(De.SOUNDS.TICK,.6),{...z,timeRemaining:D})})},1e3):N.current&&clearInterval(N.current),()=>{N.current&&clearInterval(N.current)}),[c,S.timeRemaining,a]),d.useEffect(()=>{const z=D=>{D.preventDefault(),c==="map"&&!i?(l(!0),window.history.pushState({mode:"treasureHunt"},"",window.location.href)):c!=="map"&&(u("map"),p(null),window.history.pushState({mode:"treasureHunt"},"",window.location.href))};return window.addEventListener("popstate",z),()=>window.removeEventListener("popstate",z)},[c,i]);const R=async()=>{try{const D=await(await fetch("/data/quiz_questions_bank.csv")).text(),{data:E}=qn.parse(D,{header:!0,skipEmptyLines:!0,transformHeader:$=>$.trim().toLowerCase()}),P=E.map(($,Y)=>{var O;const L=[$.option1,$.option2,$.option3,$.option4].map(X=>(X||"").trim()).filter(Boolean);if(L.length<4)return null;let B={a:0,b:1,c:2,d:3}[(O=$.answer)==null?void 0:O.toLowerCase()];return B===void 0&&(B=L.findIndex(X=>X.toLowerCase()===($.answer||"").toLowerCase())),B===-1&&(B=0),{id:$.id||`q_${Y}`,prompt:($.question||"").trim(),options:L,correctIndex:B,category:($.category||$.subject||"general").trim(),difficulty:($.difficulty||"medium").toLowerCase()}}).filter(Boolean);w(P)}catch(z){console.error("Failed to load questions:",z)}},T=z=>{const D=rn(z);if(!D||f.length===0)return[];let E=f.filter($=>D.questionDifficulty.includes($.difficulty));return E.length<De.QUESTIONS_PER_ISLAND&&(E=f),[...E].sort(()=>Math.random()-.5).slice(0,De.QUESTIONS_PER_ISLAND)},h=z=>{if(!Ag(z,g)){a&&U("/sounds/locked.mp3",.5),M([100]);return}p(z),u("island-detail"),a&&U("/sounds/select.mp3",.5)},b=z=>{const D=rn(z),E=T(z);y({islandId:z,questions:E,currentQuestionIndex:0,shovelsRemaining:De.SHOVELS_PER_ISLAND,correctAnswers:0,wrongAnswers:0,timeRemaining:D.timeLimit,gemsFound:0,coinsEarned:0,questionTimes:[],startTime:Date.now()}),C.current=Date.now(),u("playing"),a&&U("/sounds/start.mp3",.6)},k=z=>{const D=S.questions[S.currentQuestionIndex],E=z===D.correctIndex,P=(Date.now()-C.current)/1e3;y($=>{const Y={...$,questionTimes:[...$.questionTimes,P]};if(E){const L=rn($.islandId);let G=L.rewards.perCorrectAnswer;P<De.SPEED_BONUS_THRESHOLD&&(G+=L.rewards.speedBonus),Math.random()<L.rewards.gemChance&&(G+=L.rewards.gemBonus,Y.gemsFound=$.gemsFound+1),Y.correctAnswers=$.correctAnswers+1,Y.coinsEarned=$.coinsEarned+G}else Y.wrongAnswers=$.wrongAnswers+1,Y.shovelsRemaining=$.shovelsRemaining-1,M([200]);return Y}),setTimeout(()=>{const $=S.currentQuestionIndex+1;S.shovelsRemaining===0&&!E||$>=De.QUESTIONS_PER_ISLAND?A():(y(Y=>({...Y,currentQuestionIndex:$})),C.current=Date.now())},E?2e3:1500)},_=()=>{A()},A=()=>{const z=rn(S.islandId),D=S.correctAnswers>=z.requiredCorrect,E=S.correctAnswers===De.QUESTIONS_PER_ISLAND;let P=S.coinsEarned;E&&(P+=z.rewards.perfectBonus),D&&(P+=z.rewards.completionCoins),j(Y=>{const L={...Y},G=L[S.islandId];if(G.completed=!0,G.attempts+=1,D&&!G.treasurePiece){G.treasurePiece=!0;const B=Xn.find(O=>O.id===S.islandId+1);B&&L[B.id]&&(L[B.id].unlocked=!0,a&&setTimeout(()=>U(De.SOUNDS.ISLAND_UNLOCK,.7),2e3))}return E&&(G.perfectScore=!0),G.bestScore=Math.max(G.bestScore||0,S.correctAnswers),L}),x(Y=>({...Y,totalCoinsEarned:Y.totalCoinsEarned+P,totalGemsFound:Y.totalGemsFound+S.gemsFound,totalTreasurePieces:Y.totalTreasurePieces+(D&&!g[S.islandId].treasurePiece?1:0),totalQuestionsAnswered:Y.totalQuestionsAnswered+(S.correctAnswers+S.wrongAnswers),totalCorrectAnswers:Y.totalCorrectAnswers+S.correctAnswers,islandsCompleted:Y.islandsCompleted+(g[S.islandId].completed?0:1)})),ae.addCoins(P,`Treasure Hunt - ${z.name} Island`),ae.addXP(S.correctAnswers),y(Y=>({...Y,coinsEarned:P})),a&&U(D?De.SOUNDS.TREASURE_FOUND:De.SOUNDS.ISLAND_COMPLETE,.7),Xn.every(Y=>{var L;return((L=g[Y.id])==null?void 0:L.treasurePiece)===!0})&&!v.gameCompleted?(x(Y=>({...Y,gameCompleted:!0})),setTimeout(()=>{u("final-treasure"),a&&U(De.SOUNDS.FINAL_TREASURE,.8)},3e3)):u("reward")},q=()=>{b(S.islandId)},H=()=>{u("map"),p(null)},V=()=>{ae.addCoins(De.FINAL_TREASURE_REWARD,"Treasure Hunt - Final Treasure"),ae.addXP(10),x(z=>({...z,totalCoinsEarned:z.totalCoinsEarned+De.FINAL_TREASURE_REWARD})),u("map")},K=()=>{window.history.go(-1),e()},U=(z,D=.5)=>{try{const E=new Audio(z);E.volume=D,E.play()}catch(E){console.error("Failed to play sound:",E)}},M=z=>{navigator.vibrate&&navigator.vibrate(z)};d.useEffect(()=>(document.body.classList.add("hide-bottom-nav"),()=>{document.body.classList.remove("hide-bottom-nav")}),[]);let I=null;switch(c){case"map":I=n.jsx(Dg,{islands:Xn,islandProgress:g,onSelectIsland:h,onBack:()=>l(!0),soundOn:a,setSoundOn:o,totalStats:v});break;case"island-detail":I=n.jsx(zg,{island:rn(m),progress:g[m],onStart:()=>b(m),onClose:()=>u("map"),soundOn:a});break;case"playing":I=n.jsx(Fg,{island:rn(S.islandId),question:S.questions[S.currentQuestionIndex],questionNumber:S.currentQuestionIndex+1,totalQuestions:De.QUESTIONS_PER_ISLAND,shovelsRemaining:S.shovelsRemaining,timeRemaining:S.timeRemaining,coinsEarned:S.coinsEarned,gemsFound:S.gemsFound,onAnswer:k,onQuit:()=>u("map"),soundOn:a,setSoundOn:o});break;case"reward":I=n.jsx($g,{island:rn(S.islandId),session:S,earnedTreasure:S.correctAnswers>=rn(S.islandId).requiredCorrect,onRetry:q,onContinue:H,soundOn:a});break;case"final-treasure":I=n.jsx(Bg,{totalStats:v,onContinue:V,soundOn:a});break;default:I=null}return n.jsxs(n.Fragment,{children:[I,i&&n.jsx("div",{className:"fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 px-6",children:n.jsxs("div",{className:"bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-6 max-w-sm w-full shadow-2xl border border-white/10",children:[n.jsxs("div",{className:"text-center mb-6",children:[n.jsx("div",{className:"text-5xl mb-3",children:"🏝️"}),n.jsx("h3",{className:"text-xl font-bold text-white mb-2",children:"Leave Treasure Hunt?"}),n.jsx("p",{className:"text-white/70",children:"Your island progress is saved!"})]}),n.jsxs("div",{className:"flex gap-3",children:[n.jsx("button",{onClick:()=>l(!1),className:"flex-1 py-3 bg-gradient-to-r from-green-400 to-emerald-500 text-white rounded-2xl font-bold shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]",children:"Keep Playing"}),n.jsx("button",{onClick:K,className:"flex-1 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-2xl font-bold shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]",children:"Exit"})]})]})})]})}const qg=[{name:"General Knowledge",questions:50,icon:"🧠",color:"#7C3AED"},{name:"Artificial Intelligence",questions:28,icon:"🤖",color:"#10B981"},{name:"Fun facts",questions:30,icon:"🎉",color:"#EF4444"},{name:"Science",questions:45,icon:"🧪",color:"#F59E0B"},{name:"History",questions:42,icon:"🏺",color:"#2563EB"},{name:"Geography",questions:38,icon:"🗺️",color:"#FACC15"}],Lf=qg.slice(0,6),si=360/Lf.length;function Yg({onModeSelect:e,onNavigateHome:t}){return n.jsx("div",{className:"fixed inset-0 bg-base-bg text-base-text overflow-hidden",children:n.jsxs("div",{className:"h-full overflow-y-auto mx-auto max-w-md px-4 pt-[calc(env(safe-area-inset-top)+5rem)] pb-[calc(env(safe-area-inset-bottom)+5.25rem)]",children:[n.jsx("header",{className:"flex items-center mb-8",children:n.jsx("h1",{className:"text-center text-xl font-bold w-full",children:"Choose a quiz mode"})}),n.jsxs("div",{className:"space-y-8",children:[n.jsxs("button",{onClick:()=>e("classic"),className:"w-full relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-400 to-blue-500 p-8 text-left shadow-lg hover:shadow-xl transition-all active:scale-[0.98]",children:[n.jsx("div",{className:"absolute top-0 right-0 w-32 h-32 opacity-30",children:n.jsxs("svg",{viewBox:"0 0 100 100",className:"w-full h-full animate-spin",style:{animationDuration:"20s"},children:[Lf.map((r,s)=>{const a=s*si,o=a+si,i=si>180?1:0,l=Math.PI*a/180,c=Math.PI*o/180,u=50+40*Math.cos(l),m=50-40*Math.sin(l),p=50+40*Math.cos(c),f=50-40*Math.sin(c);return n.jsx("path",{d:`M50,50 L${u},${m} A40,40 0 ${i} 0 ${p},${f} Z`,fill:r.color,stroke:"white",strokeWidth:"0.5"},s)}),n.jsx("circle",{cx:"50",cy:"50",r:"8",fill:"white"})]})}),n.jsx("div",{className:"absolute top-4 left-8 text-3xl opacity-60",children:"🏆"}),n.jsx("div",{className:"absolute top-12 right-16 text-xl opacity-40",children:"⭐"}),n.jsx("div",{className:"absolute bottom-6 left-6 text-2xl opacity-50",children:"🎲"}),n.jsx("div",{className:"absolute bottom-4 right-12 text-3xl opacity-60",children:"🍪"}),n.jsx("div",{className:"absolute top-1/2 left-4 text-lg opacity-40",children:"🥨"}),n.jsx("h2",{className:"text-5xl font-black text-white mb-10 relative z-10",style:{transform:"translateX(-20px)"},children:"CLASSIC"})]}),n.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[n.jsxs("button",{onClick:()=>e("survival"),className:"aspect-square rounded-3xl bg-gradient-to-br from-yellow-400 to-orange-400 p-4 text-left hover:shadow-xl transition-all active:scale-[0.98] relative overflow-hidden",children:[n.jsx("div",{className:"text-2xl mb-2",children:"💀"}),n.jsx("h4",{className:"text-lg font-black text-white",children:"SURVIVAL"})]}),n.jsxs("button",{onClick:()=>e("treasureHunt"),className:"aspect-square rounded-3xl bg-gradient-to-br from-purple-400 to-green-500 p-4 text-left hover:shadow-xl transition-all active:scale-[0.98] relative overflow-hidden",children:[n.jsxs("div",{className:"absolute inset-0 opacity-20",children:[n.jsx("div",{className:"absolute top-2 right-2 text-4xl animate-pulse",children:"🏝️"}),n.jsx("div",{className:"absolute bottom-2 left-2 text-3xl animate-bounce",style:{animationDelay:"0.5s"},children:"⛏️"}),n.jsx("div",{className:"absolute top-1/2 right-4 text-2xl animate-pulse",style:{animationDelay:"1s"},children:"💎"})]}),n.jsx("div",{className:"text-2xl mb-2 relative z-10",children:"🏴‍☠️"}),n.jsx("h4",{className:"text-lg font-black text-white relative z-10",children:"TREASURE HUNT"}),n.jsx("div",{className:"absolute bottom-2 right-2",children:n.jsx("span",{className:"text-xs bg-white/20 px-2 py-1 rounded-full text-white font-bold",children:"NEW!"})})]}),n.jsxs("button",{disabled:!0,className:"aspect-square rounded-3xl bg-gradient-to-br from-pink-500 to-purple-500 p-4 text-left opacity-60",children:[n.jsx("div",{className:"text-2xl mb-2",children:"⚔️"}),n.jsx("h4",{className:"text-lg font-black text-white",children:"SURVIVAL ARENA"})]}),n.jsxs("button",{disabled:!0,className:"aspect-square rounded-3xl bg-gradient-to-br from-blue-400 to-cyan-400 p-4 text-left opacity-60",children:[n.jsx("div",{className:"text-2xl mb-2",children:"📱"}),n.jsx("h4",{className:"text-lg font-black text-white",children:"TRIVIA VIDEO"})]})]})]})]})})}function Qg(){const[e,t]=d.useState(null),r=Te(),s=Xe();d.useEffect(()=>{const l=new URLSearchParams(s.search);l.get("mode")==="survival"&&l.get("from")==="quest"&&t("survival")},[s]);const a=l=>{l==="classic"?t("classic"):l==="survival"?t("survival"):l==="treasureHunt"&&t("treasureHunt")},o=()=>{r("/")},i=()=>{t(null)};if(e==="classic")return n.jsx(Eg,{onBack:i});if(e==="survival"){const c=new URLSearchParams(s.search).get("from")==="quest";return n.jsx(_g,{onBack:i,isFromQuest:c})}return e==="treasureHunt"?n.jsx(Ug,{onBack:i}):n.jsx(Yg,{onModeSelect:a,onNavigateHome:o})}const Wg=({session:e,mode:t,category:r,difficulty:s,timerConfig:a,onComplete:o,onQuit:i})=>{const l=Te(),[c,u]=d.useState(0),[m,p]=d.useState([]),[f,w]=d.useState([]),[g,j]=d.useState([]),[S,y]=d.useState(!1),[v,x]=d.useState(null),[N,C]=d.useState(Date.now()),[R,T]=d.useState(0),[h,b]=d.useState([]);d.useState(!1),d.useState(!1);const[k,_]=d.useState({}),[A,q]=d.useState({}),[H,V]=d.useState([]);d.useState(!0);const[K,U]=d.useState([]),[M,I]=d.useState(0),[z,D]=d.useState(0),[E,P]=d.useState(!1),[$,Y]=d.useState(!1),[L,G]=d.useState(""),[B,O]=d.useState(!1),[X,Q]=d.useState(!1),[te,de]=d.useState(!0),[re,W]=d.useState(!1),[F,ne]=d.useState(0),[ee,oe]=d.useState(0),[me,Se]=d.useState(0),[Ee,be]=d.useState(0),[pe,Ne]=d.useState(null),[xe,we]=d.useState(0),Ye=d.useRef(null),nt=d.useRef(null),Ae=t==="practice",Qe=m[c],Je=ue=>{try{const fe=new Audio(ue);fe.volume=.6,fe.play()}catch{console.log("Sound not available:",ue)}},Lt=[{id:1,category:"General Knowledge",difficulty:"medium",prompt:"Which element has the atomic number 1?",options:["Helium","Carbon","Hydrogen","Oxygen"],answerIndex:2,explanation:"Hydrogen is the first element on the periodic table with atomic number 1!"},{id:2,category:"General Knowledge",difficulty:"medium",prompt:"What is the largest ocean on Earth?",options:["Atlantic","Pacific","Indian","Arctic"],answerIndex:1,explanation:"The Pacific Ocean covers about one-third of Earth's surface!"},{id:3,category:"General Knowledge",difficulty:"easy",prompt:"What color do you get when you mix red and yellow?",options:["Purple","Orange","Green","Pink"],answerIndex:1,explanation:"Red and yellow make orange - like a beautiful sunset!"}],Me=e&&e.questions&&Array.isArray(e.questions)&&e.questions.length>0?e.questions:Lt,He=Me[c]||Me[0]||Lt[0],xt=Me.length;d.useEffect(()=>{const ue=ae.getCoins();Se(ue)},[]),d.useEffect(()=>{Me.length>0&&(p(new Array(Me.length).fill(null)),w(new Array(Me.length).fill(!1)),V(new Array(Me.length).fill(!1)),j(new Array(Me.length).fill((a==null?void 0:a.seconds)||45)))},[Me.length,a==null?void 0:a.seconds]);const Wr=()=>{const ue=new Date;return`${ue.getFullYear()}-${ue.getMonth()+1}-${ue.getDate()}`},Gr=()=>{Ae&&window.location.search.includes("from=quest")?l("/profile/quests",{state:{questCompleted:!0,questType:"practiceQuestions"}}):i()},Hr=d.useCallback((ue,fe)=>{if(!He||Ae&&H[c]||k[c]&&k[c].includes(ue))return;const ge=[...m];if(ge[c]=m[c]===ue?null:ue,p(ge),C(Date.now()),Ae&&!h.includes(c)&&ge[c]!==null){const rt=h.length+1;if(T(rt),b($e=>[...$e,c]),window.location.search.includes("from=quest")){let $e={};try{const cr=localStorage.getItem("questProgress");cr&&($e=JSON.parse(cr))}catch(cr){console.error("Error reading progress:",cr)}const it=$e.practiceQuestions||0;$e.practiceQuestions=Math.max(it,rt),$e.date=`${new Date().getFullYear()}-${new Date().getMonth()+1}-${new Date().getDate()}`,localStorage.setItem("questProgress",JSON.stringify($e)),console.log("Saved practice progress:",$e.practiceQuestions),window.dispatchEvent(new CustomEvent("questProgressUpdate",{detail:{practiceQuestions:$e.practiceQuestions}}))}}ge[c]!==null&&(de(!1),clearInterval(nt.current));const ot=ge[c]===He.answerIndex;if(ot){const rt=Ee+1;if(be(rt),I($e=>$e+1),D(0),Ae){ne(it=>it+1);const $e=2;oe(it=>it+$e),Se(it=>it+$e),Je("/sounds/correct.mp3"),setTimeout(()=>Je("/sounds/coin.mp3"),500),Q(!0),setTimeout(()=>Q(!1),2e3),Ne({type:"correct",stars:1,coins:2}),setTimeout(()=>Ne(null),2e3)}}else ge[c]!==null&&(be(0),I(0),D(rt=>rt+1),Ae&&Je("/sounds/wrong.mp3"));if(U(rt=>[...rt.slice(-2),ot]),ge[c]!==null&&f[c]){const rt=[...f];rt[c]=!1,w(rt)}Ae&&ge[c]!==null&&(O(!0),V(rt=>{const $e=[...rt];return $e[c]=!0,$e})),!Ae&&ge[c]!==null&&(clearTimeout(Ye.current),Ye.current=setTimeout(()=>{c<xt-1?se():(P(!0),y(!0))},5e3))},[He,Ae,H,c,m,f,xt,Ee,k,K,M,R,h]),Kr=()=>{C(Date.now()),c>0&&(clearInterval(nt.current),de(!1),u(ue=>ue-1),O(!1),Ae&&m[c-1]!==null&&setTimeout(()=>O(!0),100))},se=()=>{if(C(Date.now()),clearInterval(nt.current),Qe===null){const ue=[...f];ue[c]=!0,w(ue),be(0)}de(!1),O(!1),c<xt-1?(u(ue=>ue+1),Ae&&m[c+1]!==null?setTimeout(()=>O(!0),100):setTimeout(()=>de(!0),100)):P(!0)},J=()=>{C(Date.now());const ue=[...f];ue[c]=!0,w(ue),be(0),se()},le=()=>{const ue=Me.reduce((fe,ge,ot)=>fe+(m[ot]===ge.answerIndex?1:0),0);if(Ae&&window.location.search.includes("from=quest")){const fe=m.filter(ot=>ot!==null).length,ge=JSON.parse(localStorage.getItem("questProgress")||"{}");ge.practiceQuestions=Math.min(fe,15),ge.date=Wr(),localStorage.setItem("questProgress",JSON.stringify(ge)),console.log("Final practice progress saved:",ge.practiceQuestions)}if(Ae)o&&o({questions:Me,answers:m,skipped:f,correct:ue,total:xt,mode:t,category:r,difficulty:s,earnedStars:F,earnedCoins:ee,finalStreak:Ee});else{const fe=ue*10;we(fe),o&&o({questions:Me,answers:m,skipped:f,correct:ue,total:xt,mode:t,category:r,difficulty:s,earnedStars:0,earnedCoins:fe,finalStreak:Ee})}};d.useEffect(()=>{if(!(S||v!==null||E||!te||m[c]!==null))return nt.current=setInterval(()=>{j(ue=>{const fe=[...ue],ge=fe[c];return ge<=1?(clearInterval(nt.current),c===xt-1?(Date.now()-N>=5e3&&P(!0),fe):(x(c),fe)):(fe[c]=ge-1,fe)})},1e3),()=>clearInterval(nt.current)},[S,v,c,E,xt,te,m,N]),d.useEffect(()=>{m[c]===null&&!E&&!v?de(!0):de(!1)},[c,m,E,v]);const he=ue=>{const fe=Math.floor(ue/60),ge=ue%60;return`${fe}:${ge.toString().padStart(2,"0")}`},ve=(c+1)/Me.length*100,ce=m.filter(ue=>ue!==null).length,ke=f.filter(Boolean).length,ye=g[c]||0;Me.reduce((ue,fe,ge)=>ue+(m[ge]===fe.answerIndex?1:0),0);const Ie=Ae&&B&&Qe!==null;return n.jsxs("div",{className:"h-dvh bg-gray-900 text-white flex flex-col overflow-hidden pt-[env(safe-area-inset-top,0px)]",children:[pe&&n.jsx("div",{className:"fixed inset-0 flex items-center justify-center z-50 pointer-events-none",children:n.jsxs("div",{className:"bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-8 py-4 rounded-full text-xl font-bold animate-bounce shadow-2xl",children:["+",pe.coins," Coins!"]})}),X&&n.jsx("div",{className:"fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-40 pointer-events-none",children:[...Array(8)].map((ue,fe)=>n.jsx("div",{className:"absolute text-3xl animate-ping",style:{left:`${-30+Math.random()*60}px`,top:`${-30+Math.random()*60}px`,animationDelay:`${fe*150}ms`,animationDuration:"2s"},children:"🪙"},fe))}),n.jsxs("div",{className:"bg-gray-900 flex-shrink-0 pt-10",children:[n.jsxs("div",{className:"flex items-center justify-between px-4 py-2 border-b border-gray-800 shadow-lg",children:[n.jsxs("button",{onClick:()=>Y(!0),className:"bg-gray-700 hover:bg-gray-600 px-3 py-1.5 rounded-full flex items-center gap-2 transition-colors text-sm",children:[n.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:n.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 19l-7-7 7-7"})}),n.jsx("span",{className:"font-medium",children:"Back"})]}),n.jsx("div",{className:"flex-1"}),n.jsxs("div",{className:"flex items-center gap-2",children:[Ae&&n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:"bg-yellow-600/20 px-2 py-1 rounded-full flex items-center gap-1",children:[n.jsx("span",{className:"text-yellow-400 text-sm",children:"🪙"}),n.jsx("span",{className:"text-yellow-200 font-semibold text-sm",children:me})]}),n.jsxs("div",{className:"bg-orange-600/20 px-2 py-1 rounded-full flex items-center gap-1",children:[n.jsx("span",{className:"text-orange-400 text-sm",children:"🔥"}),n.jsx("span",{className:"text-orange-200 font-semibold text-sm",children:Ee})]})]}),n.jsx("div",{className:`px-2 py-1 rounded-full font-mono font-semibold text-sm ${ye<=10?"bg-red-600/20 text-red-400 animate-pulse":ye<=30?"bg-yellow-600/20 text-yellow-400":"bg-green-600/20 text-green-400"}`,children:he(ye)})]})]}),n.jsxs("div",{className:"px-4 pb-1 bg-gray-900",children:[n.jsxs("div",{className:"flex justify-between items-center mb-1",children:[n.jsxs("span",{className:"text-xs text-gray-400",children:["Question ",c+1," of ",xt]}),n.jsxs("span",{className:"text-xs text-gray-400",children:[Math.round(ve),"% Complete"]})]}),n.jsx("div",{className:"h-2 bg-gray-700 rounded-full overflow-hidden",children:n.jsx("div",{className:"h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-500",style:{width:`${ve}%`}})}),n.jsx("div",{className:"flex justify-center gap-1 mt-1",children:Array.from({length:xt}).map((ue,fe)=>n.jsx("div",{className:`w-1.5 h-1.5 rounded-full transition-all ${fe===c?"bg-white scale-125":m[fe]!==null?"bg-green-500":f[fe]?"bg-yellow-500":"bg-gray-600"}`},fe))}),n.jsx("div",{className:"text-center mt-4",children:n.jsx("span",{className:"text-xs text-gray-500",children:He.category})})]})]}),n.jsx("div",{className:`flex-1 flex flex-col ${Ie?"overflow-y-auto":"overflow-hidden"}`,children:n.jsxs("div",{className:"px-4 py-4 flex-1 flex flex-col",children:[n.jsxs("div",{className:"relative bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 rounded-3xl p-6 mb-4 shadow-2xl shadow-blue-600/20 border border-blue-400/20",children:[n.jsx("div",{className:"absolute top-2 right-2 w-16 h-16 bg-white/10 rounded-full blur-xl"}),n.jsx("div",{className:"absolute bottom-2 left-2 w-12 h-12 bg-white/5 rounded-full blur-lg"}),n.jsxs("div",{className:"relative text-center",children:[n.jsxs("div",{className:"inline-block bg-white/10 px-3 py-1 rounded-full text-xs font-medium text-blue-100 mb-3",children:["Question ",c+1]}),n.jsx("h2",{className:"text-xl font-bold leading-relaxed text-white tracking-wide",children:He.prompt}),He.difficulty&&n.jsx("div",{className:"mt-3 inline-block",children:n.jsx("span",{className:`px-2 py-1 rounded-full text-xs font-semibold ${He.difficulty==="easy"?"bg-green-500/20 text-green-300":He.difficulty==="medium"?"bg-yellow-500/20 text-yellow-300":"bg-red-500/20 text-red-300"}`,children:He.difficulty.toUpperCase()})})]})]}),n.jsx("div",{className:"grid grid-cols-1 gap-3 mb-4",children:He.options.map((ue,fe)=>{const ge=Qe===fe,ot=fe===He.answerIndex,rt=Ae&&Qe!==null&&B,$e=k[c]&&k[c].includes(fe);let it="p-4 rounded-xl transition-all duration-300 border-2 min-h-[64px] flex items-center ";$e?it+="bg-gray-700/30 border-gray-600/30 text-gray-500/50 cursor-not-allowed":(it+="cursor-pointer ",rt?ge&&ot?it+="bg-green-600 border-green-500 text-white shadow-lg shadow-green-600/25":ge&&!ot?it+="bg-red-600 border-red-500 text-white shadow-lg shadow-red-600/25":!ge&&ot?it+="bg-green-600/20 border-green-500 text-green-300 animate-pulse":it+="bg-gray-700 border-gray-600 text-gray-400":ge?it+="bg-gray-600 border-gray-500 text-white":it+="bg-gray-800 border-gray-700 text-gray-200 hover:bg-gray-750 hover:border-gray-600");const cr=["🅰️","🅱️","🅲️","🅳️"];return n.jsx("button",{onClick:Bf=>Hr(fe,Bf),disabled:Ae&&H[c],className:it,children:n.jsxs("div",{className:"flex items-center gap-2 w-full",children:[n.jsx("div",{className:"text-lg flex-shrink-0 mr-1",children:cr[fe]}),n.jsx("div",{className:"flex-1 text-left font-semibold text-base leading-relaxed",children:ue}),A[c]&&A[c][fe]>0&&!$e&&n.jsxs("div",{className:"bg-purple-600/20 px-2 py-1 rounded-full text-xs text-purple-300",children:[A[c][fe],"%"]}),rt&&ge&&ot&&!$e&&n.jsx("div",{className:"text-lg animate-bounce",children:"🎉"}),rt&&ge&&!ot&&!$e&&n.jsx("div",{className:"text-lg",children:"😔"}),rt&&!ge&&ot&&!$e&&n.jsx("div",{className:"text-base animate-pulse",children:"✨"})]})},fe)})}),Ae&&B&&Qe!==null&&n.jsx("div",{className:"bg-gray-800 rounded-xl p-4 mb-4 border border-gray-700",children:n.jsxs("div",{className:"flex gap-3",children:[n.jsx("div",{className:"text-lg flex-shrink-0",children:Qe===He.answerIndex?"🎊":"💡"}),n.jsxs("div",{className:"flex-1",children:[n.jsx("h4",{className:`font-semibold mb-3 text-sm ${Qe===He.answerIndex?"text-green-400":"text-blue-400"}`,children:Qe===He.answerIndex?"Perfect! Well done!":"Good try! Here's why:"}),He.explanation&&n.jsx("p",{className:"text-gray-300 text-sm leading-relaxed",children:He.explanation})]})]})}),n.jsx("div",{className:"h-[200px]"})]})}),n.jsxs("div",{className:"fixed bottom-0 left-0 right-0 z-50",children:[n.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/95 to-gray-900/80 backdrop-blur-xl"}),n.jsxs("div",{className:"relative p-4 pb-8",children:[n.jsxs("div",{className:"flex gap-2 mb-3",children:[n.jsx("button",{onClick:Kr,disabled:c===0,className:`flex-1 bg-white/10 backdrop-blur-md border border-white/20 
                disabled:opacity-30 disabled:cursor-not-allowed
                py-3.5 rounded-2xl font-semibold transition-all transform active:scale-95
                hover:bg-white/15 text-white shadow-xl`,children:"Previous"}),n.jsx("button",{onClick:J,disabled:Qe!==null,className:`flex-1 py-3.5 rounded-2xl font-semibold transition-all transform active:scale-95 shadow-xl ${Qe!==null?"bg-white/5 text-gray-500 cursor-not-allowed":"bg-gradient-to-r from-amber-500 to-yellow-500 text-white hover:from-amber-600 hover:to-yellow-600"}`,children:"Skip"}),n.jsx("button",{onClick:se,className:`flex-1 bg-gradient-to-r from-blue-500 to-indigo-500 
                hover:from-blue-600 hover:to-indigo-600
                py-3.5 rounded-2xl font-semibold transition-all transform active:scale-95
                text-white shadow-xl`,children:c===xt-1?"Finish":"Next"})]}),n.jsxs("button",{onClick:()=>P(!0),className:`w-full bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500
              hover:from-emerald-600 hover:via-green-600 hover:to-teal-600
              py-4 rounded-2xl font-bold text-white transition-all transform active:scale-[0.98]
              shadow-2xl shadow-green-500/25 relative overflow-hidden group`,children:[n.jsx("div",{className:"absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent"}),n.jsx("span",{className:"relative",children:"Submit Quiz"})]})]})]}),$&&n.jsx("div",{className:"fixed inset-0 bg-black/75 flex items-center justify-center z-50 p-4",children:n.jsxs("div",{className:"bg-gray-800 rounded-3xl p-6 max-w-sm w-full text-center border border-gray-700",children:[n.jsx("div",{className:"text-4xl mb-4",children:"🤔"}),n.jsx("h3",{className:"text-xl font-bold mb-2",children:"Leave Quiz?"}),n.jsx("p",{className:"text-gray-400 mb-6",children:"Your progress will be lost"}),n.jsxs("div",{className:"flex gap-3",children:[n.jsx("button",{onClick:()=>Y(!1),className:"flex-1 bg-blue-600 hover:bg-blue-700 py-3 rounded-xl font-medium",children:"Stay"}),n.jsx("button",{onClick:Gr,className:"flex-1 bg-gray-700 hover:bg-gray-600 py-3 rounded-xl font-medium",children:"Leave"})]})]})}),E&&!re&&n.jsx("div",{className:"fixed inset-0 bg-black/75 flex items-center justify-center z-50 p-4",children:n.jsxs("div",{className:"bg-gray-800 rounded-3xl p-6 max-w-sm w-full text-center border border-gray-700",children:[n.jsx("div",{className:"text-4xl mb-4",children:"🏆"}),n.jsx("h3",{className:"text-xl font-bold mb-2",children:"Ready to finish?"}),n.jsxs("p",{className:"text-gray-400 mb-4",children:[ce," of ",xt," answered • ",ke," skipped"]}),Ae&&n.jsx("div",{className:"bg-gradient-to-r from-yellow-600/20 to-orange-600/20 p-4 rounded-2xl mb-6 border border-yellow-600/30",children:n.jsxs("div",{className:"flex justify-center gap-6",children:[n.jsxs("div",{className:"text-center",children:[n.jsx("div",{className:"text-2xl mb-1",children:"⭐"}),n.jsx("div",{className:"text-yellow-400 font-bold",children:F}),n.jsx("div",{className:"text-xs text-gray-400",children:"Stars"})]}),n.jsxs("div",{className:"text-center",children:[n.jsx("div",{className:"text-2xl mb-1",children:"🪙"}),n.jsx("div",{className:"text-yellow-400 font-bold",children:ee}),n.jsx("div",{className:"text-xs text-gray-400",children:"Coins"})]})]})}),n.jsxs("div",{className:"flex gap-3",children:[n.jsx("button",{onClick:()=>{P(!1),x(null),C(Date.now())},className:"flex-1 bg-gray-700 hover:bg-gray-600 py-3 rounded-xl font-medium",children:"Back"}),n.jsx("button",{onClick:ue=>{ue.preventDefault(),ue.stopPropagation(),console.log("Submit button clicked"),le()},className:"flex-1 bg-green-600 hover:bg-green-700 py-3 rounded-xl font-medium",children:"Submit"})]})]})}),v===c&&!E&&n.jsx("div",{className:"fixed inset-0 bg-black/75 flex items-center justify-center z-50 p-4",children:n.jsxs("div",{className:"bg-gray-800 rounded-3xl p-6 max-w-sm w-full text-center border border-gray-700",children:[n.jsx("div",{className:"text-4xl mb-4 animate-pulse",children:"⏰"}),n.jsx("h3",{className:"text-xl font-bold mb-2",children:"Time's Up!"}),n.jsx("p",{className:"text-gray-400 mb-6",children:"Let's move to the next question"}),n.jsx("button",{onClick:()=>{x(null),C(Date.now()),c<Me.length-1?se():P(!0)},className:"w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-xl font-medium",children:c<Me.length-1?"Continue":"See Results"})]})}),L&&n.jsx("div",{className:"fixed top-20 left-1/2 transform -translate-x-1/2 bg-red-600 text-white px-4 py-2 rounded-full font-medium animate-bounce z-50",children:L}),n.jsx("style",{jsx:!0,children:`
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
      `})]})},as=[{name:"GK",slug:"general-knowledge",questions:50,icon:"🧠",color:"#FF6B6B",gradient:"from-red-500 to-pink-500"},{name:"Science",slug:"science",questions:45,icon:"🧪",color:"#4ECDC4",gradient:"from-cyan-500 to-teal-500"},{name:"Fun Facts",slug:"fun-facts",questions:30,icon:"🎉",color:"#FFD93D",gradient:"from-yellow-400 to-orange-500"},{name:"History",slug:"history",questions:42,icon:"🏺",color:"#A8E6CF",gradient:"from-green-400 to-emerald-500"},{name:"AI & Tech",slug:"artificial-intelligence",questions:28,icon:"🤖",color:"#C7B8FF",gradient:"from-purple-400 to-indigo-500"},{name:"Geography",slug:"geography",questions:38,icon:"🗺️",color:"#FACC15",gradient:"from-yellow-400 to-amber-500"},{name:"Computer",slug:"computer",questions:34,icon:"💻",color:"#3B82F6",gradient:"from-blue-400 to-blue-600"},{name:"Aptitude",slug:"aptitude",questions:36,icon:"📐",color:"#EC4899",gradient:"from-pink-500 to-rose-500"},{name:"Iconic Figures",slug:"iconic-figures",questions:26,icon:"🌟",color:"#8B5CF6",gradient:"from-purple-500 to-violet-600"}],Gg=()=>n.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:n.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5l7 7-7 7"})}),Hg=()=>n.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:n.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"})}),Kg=()=>n.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:n.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"})}),Vg=()=>n.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:n.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"})}),Xg=()=>n.jsx("svg",{className:"w-3 h-3",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:n.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 10V3L4 14h7v7l9-11h-7z"})}),Jg=({results:e={correct:8,total:10,category:"general-knowledge",mode:"quiz",elapsedMs:125e3,questions:[],returnPath:null,fromQuest:!1},onRetake:t=()=>{},onReview:r=()=>{},onNavigate:s=(c,u)=>{},isRetake:a=!1,isPractice:o=!1,player:i={level:1,coins:0,combo:0,energy:5},categories:l=[]})=>{const[c,u]=d.useState(ae.getCoins()),m=d.useRef(null),[p,f]=d.useState(null),[w]=tt("/sounds/coin.mp3",{volume:.75}),[g,j]=d.useState(!1),[S,y]=d.useState(!1),[v,x]=d.useState(0),[N,C]=d.useState(!1),[R,T]=d.useState(!1),h=()=>{if(console.log("QuizResults handleBack:",{fromQuest:e.fromQuest,returnPath:e.returnPath,isPractice:e.isPractice||o}),e.fromQuest){const O=e.isPractice||o?"practiceQuestions":"dailyQuizzes";e.isPractice||o?s("/profile/quests"):s("/profile/quests",{state:{questCompleted:!0,questType:O,increment:1}})}else{const O=e.returnPath||"/";s(O)}},{correct:b,total:k,category:_,categorySlug:A,difficulty:q,mode:H,elapsedMs:V}=e,K=k?Math.round(b/k*100):0,U=K===100,M=K>=80,I=Math.floor(V/1e3),z=k>0?Math.floor(I/k):0,D=o?e.earnedCoins||0:Math.round(b*5*(U?1.5:M?1.2:1)),E=as.find(O=>O.slug===_)||as[0],$=(()=>U?{emoji:"🏆",text:"Perfect!",color:"text-yellow-400"}:K>=90?{emoji:"🌟",text:"Excellent!",color:"text-purple-400"}:K>=80?{emoji:"✨",text:"Great job!",color:"text-blue-400"}:K>=70?{emoji:"👍",text:"Good effort!",color:"text-green-400"}:K>=60?{emoji:"💪",text:"Keep going!",color:"text-orange-400"}:{emoji:"📚",text:"Keep practicing!",color:"text-gray-400"})();d.useEffect(()=>{const O=ae.getCoins();u(O)},[]),d.useEffect(()=>{e.coinsProcessed||D>0&&m.current&&setTimeout(()=>{m.current.getBoundingClientRect();const O=new Audio("/sounds/coin.mp3");O.volume=.75,O.play().catch(X=>{if(console.error("Audio play failed:",X),w)try{w()}catch(Q){console.error("Hook play failed:",Q)}}),f({startRect:{left:window.innerWidth/2-50,top:window.innerHeight/2,width:100,height:100},count:Math.min(D,10),amount:D}),j(!0),e.coinsProcessed=!0},500)},[]),d.useEffect(()=>{document.documentElement.scrollIntoView({behavior:"smooth",block:"start"}),(U||M)&&(y(!0),setTimeout(()=>y(!1),3e3));let O=0;const X=b/20,Q=setInterval(()=>{O+=X,O>=b?(x(b),clearInterval(Q)):x(Math.floor(O))},50);return()=>clearInterval(Q)},[b,U,M]);const Y=[{score:7,total:10},{score:6,total:10},{score:8,total:10},{score:9,total:10},{score:b,total:k}],L=()=>{try{const O=localStorage.getItem("qp_recent");if(O)return JSON.parse(O).slice(0,10).map(Q=>Q.slug||Q.cat).filter(Q=>Q&&Q!==e.categorySlug)}catch(O){console.error("Error reading recent categories:",O)}return[]},G=()=>{const O=A||_,X=q||"medium",Q=L(),te=(l||as||[]).filter(W=>W.slug!==O&&!Q.slice(0,3).includes(W.slug)),re=(()=>{if(te.length===0){const W=(l||as||[]).filter(F=>F.slug!==O);return W[Math.floor(Math.random()*W.length)]||(l||as)[0]}return te[Math.floor(Math.random()*te.length)]})();if(K<60)return o?[{icon:"🎯",title:"Try Fewer Questions",desc:"Start with just 5",color:"from-blue-500 to-cyan-500",action:()=>s(`/quiz/${O}`,{state:{mode:"practice",difficulty:"easy",count:5,timer:{type:"off",seconds:0}}})},{icon:re.icon,title:re.name,desc:"Fresh start with new topic",color:re.gradient,action:()=>s(`/quiz/${re.slug}`,{state:{mode:"practice",difficulty:"easy",count:10,timer:{type:"off",seconds:0}}})},{icon:"📖",title:"Review Mistakes",desc:"Learn from errors",color:"from-purple-500 to-pink-500",action:()=>r()}]:[{icon:"📚",title:"Practice Mode",desc:"No timer, learn at your pace",color:"from-green-500 to-teal-500",action:()=>s(`/quiz/${O}`,{state:{mode:"practice",difficulty:"easy",count:10,timer:{type:"off",seconds:0}}})},{icon:X!=="easy"?"🎯":"🔄",title:X!=="easy"?"Easy Mode":"Try Again",desc:X!=="easy"?"Build confidence":"You can do this!",color:"from-blue-500 to-cyan-500",action:()=>X!=="easy"?s(`/quiz/${O}`,{state:{mode:"quiz",difficulty:"easy",count:5,timer:{type:"per_q",seconds:60}}}):t()},{icon:re.icon,title:re.name,desc:"Try something different",color:re.gradient,action:()=>s(`/quiz/${re.slug}`,{state:{mode:"practice",difficulty:"easy",count:10,timer:{type:"off",seconds:0}}})}];if(K>=80)return X==="hard"&&K>=90?[{icon:"⚡",title:"Lightning Round",desc:"20 questions, 10s each",color:"from-yellow-500 to-red-500",action:()=>s(`/quiz/${O}`,{state:{mode:"quiz",difficulty:"hard",count:20,timer:{type:"per_q",seconds:10}}})},{icon:re.icon,title:`${re.name} Challenge`,desc:"Hard mode, new topic",color:re.gradient,action:()=>s(`/quiz/${re.slug}`,{state:{mode:"quiz",difficulty:"hard",count:15,timer:{type:"per_q",seconds:30}}})},{icon:"🎲",title:"Mixed Categories",desc:"Test all your knowledge",color:"from-purple-500 to-indigo-500",action:()=>s("/quiz/mixed",{state:{mode:"quiz",difficulty:"hard",count:20,timer:{type:"per_q",seconds:30}}})}]:[{icon:X==="hard"?"🔥":"🎯",title:X==="hard"?"Perfect Score Challenge":"Hard Mode",desc:X==="hard"?"Can you get 100%?":"Level up your skills",color:"from-red-500 to-orange-500",action:()=>s(`/quiz/${O}`,{state:{mode:"quiz",difficulty:"hard",count:X==="hard"?10:20,timer:{type:"per_q",seconds:30}}})},{icon:re.icon,title:re.name,desc:"Master new topics",color:re.gradient,action:()=>s(`/quiz/${re.slug}`,{state:{mode:"practice",difficulty:"easy",count:10,timer:{type:"off",seconds:0}}})},{icon:"⚡",title:"Speed Challenge",desc:"10 questions, 15s each",color:"from-purple-500 to-pink-500",action:()=>s(`/quiz/${O}`,{state:{mode:"quiz",difficulty:"medium",count:10,timer:{type:"per_q",seconds:15}}})}];{const W=K<70;return[{icon:W?"📚":"🎯",title:W?"Practice More":"Try Again",desc:W?"Improve accuracy":"Beat your score",color:W?"from-green-500 to-teal-500":"from-blue-500 to-purple-500",action:W?()=>s(`/quiz/${O}`,{state:{mode:"practice",difficulty:X,count:10,timer:{type:"off",seconds:0}}}):()=>t()},{icon:re.icon,title:re.name,desc:"Explore new topics",color:re.gradient,action:()=>s(`/quiz/${re.slug}`,{state:{mode:"practice",difficulty:"easy",count:10,timer:{type:"off",seconds:0}}})},{icon:X==="easy"?"⬆️":"💪",title:X==="easy"?"Medium Difficulty":"More Questions",desc:X==="easy"?"Ready for more?":"Test endurance",color:"from-indigo-500 to-purple-500",action:()=>s(`/quiz/${O}`,{state:{mode:"quiz",difficulty:X==="easy"?"medium":X,count:X==="easy"?10:20,timer:{type:"per_q",seconds:45}}})}]}},B=gt.useMemo(()=>G(),[K,o,e.categorySlug,e.difficulty]);return n.jsx("div",{className:"h-screen overflow-y-auto bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white",children:n.jsxs("div",{className:"min-h-full p-4 pt-10",children:[p&&n.jsx(or,{startRect:p.startRect,targetRef:m,count:p.count,onDone:()=>{if(p.amount>0&&!R){console.log("[QuizResults] Updating display with current total"),T(!0);const O=ae.getCoins();u(O)}f(null)}}),n.jsx("style",{children:`
        @keyframes coinRotate {
          from { transform: rotateY(0deg); }
          to { transform: rotateY(360deg); }
        }
      `}),S&&n.jsx("div",{className:"fixed inset-0 pointer-events-none z-50 flex items-center justify-center",children:n.jsx("div",{className:"text-8xl animate-bounce",children:U?"🎉":"⭐"})}),n.jsxs("div",{className:"flex justify-between items-center mb-6 mt-1",children:[n.jsxs("button",{onClick:h,className:"p-2 rounded-xl bg-white/10 backdrop-blur hover:bg-white/20 transition-all flex items-center gap-2",children:[n.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:n.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 19l-7-7 7-7"})}),n.jsx("span",{className:"text-sm font-medium",children:"Back"})]}),n.jsxs("div",{className:"flex gap-2",children:[n.jsxs("div",{className:"px-3 py-1.5 rounded-full bg-white/10 backdrop-blur text-sm font-medium",children:["Level ",i.level]}),n.jsxs("button",{ref:m,onClick:()=>C(!0),className:"px-3 py-1.5 rounded-full bg-yellow-500/20 backdrop-blur text-sm font-medium text-yellow-300 hover:bg-yellow-500/30 transition-all cursor-pointer",children:[c," 🪙"]})]})]}),n.jsxs("div",{className:"relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 p-8 mb-6",children:[n.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-blue-500/10 animate-pulse"}),n.jsxs("div",{className:"relative text-center",children:[n.jsxs("div",{className:`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur mb-4 ${$.color}`,children:[n.jsx("span",{className:"text-2xl",children:$.emoji}),n.jsx("span",{className:"font-semibold",children:$.text})]}),n.jsxs("div",{className:"mb-6",children:[n.jsxs("div",{className:"text-7xl font-bold mb-2 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent",children:[v,"/",k]}),n.jsxs("div",{className:"flex items-center justify-center gap-2 text-sm text-white/60",children:[n.jsx("span",{className:"text-xl",children:E.icon}),n.jsx("span",{children:E.name})]})]}),n.jsxs("div",{className:"grid grid-cols-3 gap-4 max-w-md mx-auto",children:[n.jsxs("div",{className:"text-center",children:[n.jsxs("div",{className:"text-3xl font-bold",children:[K,"%"]}),n.jsx("div",{className:"text-xs text-white/60",children:"Accuracy"})]}),n.jsxs("div",{className:"text-center",children:[n.jsxs("div",{className:"text-3xl font-bold",children:[z,"s"]}),n.jsx("div",{className:"text-xs text-white/60",children:"Avg Speed"})]}),n.jsxs("div",{className:"text-center",children:[n.jsx("div",{className:"text-3xl font-bold text-yellow-400",children:D>0?`+${D}`:"0"}),n.jsx("div",{className:"text-xs text-white/60",children:"Coins"})]})]})]})]}),n.jsxs("div",{className:"rounded-2xl bg-white/5 backdrop-blur border border-white/10 p-4 mb-6",children:[n.jsxs("div",{className:"flex items-center justify-between mb-3",children:[n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx(Vg,{}),n.jsx("span",{className:"text-sm font-medium",children:"Your Progress"})]}),i.combo>0&&n.jsxs("div",{className:"flex items-center gap-1 px-2 py-1 rounded-full bg-orange-500/20 text-orange-400 text-xs",children:[n.jsx(Xg,{}),i.combo," streak"]})]}),n.jsx("div",{className:"flex items-end gap-1 h-12 mb-2",children:Y.map((O,X)=>n.jsx("div",{className:`flex-1 rounded-t transition-all ${X===Y.length-1?"bg-gradient-to-t from-purple-500 to-purple-400":"bg-white/20"}`,style:{height:`${O.score/O.total*100}%`,minHeight:"4px"}},X))}),n.jsx("div",{className:"text-xs text-white/40 text-center",children:"Last 5 quizzes"})]}),n.jsxs("div",{className:"grid grid-cols-2 gap-3 mb-6",children:[n.jsxs("button",{onClick:r,className:"relative overflow-hidden group rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 p-4 transition-all hover:scale-105 active:scale-95",children:[n.jsx("div",{className:"absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform"}),n.jsxs("div",{className:"relative flex items-center justify-between",children:[n.jsxs("div",{className:"text-left",children:[n.jsx("div",{className:"font-semibold",children:"Review"}),n.jsx("div",{className:"text-xs opacity-80",children:"Check answers"})]}),n.jsx(Kg,{})]})]}),n.jsx("button",{onClick:t,className:"relative overflow-hidden group rounded-2xl bg-white/10 backdrop-blur border border-white/20 p-4 transition-all hover:scale-105 active:scale-95 hover:bg-white/15",children:n.jsxs("div",{className:"flex items-center justify-between",children:[n.jsxs("div",{className:"text-left",children:[n.jsx("div",{className:"font-semibold",children:"Try Again"}),n.jsx("div",{className:"text-xs opacity-60",children:"New questions"})]}),n.jsx(Hg,{})]})})]}),n.jsxs("div",{className:"space-y-3",children:[n.jsx("div",{className:"text-sm font-medium text-white/60 px-1",children:"Recommended for you"}),B.map((O,X)=>n.jsx("button",{onClick:O.action,className:"w-full group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur border border-white/10 p-4 transition-all hover:bg-white/10 hover:border-white/20",children:n.jsxs("div",{className:"flex items-center justify-between",children:[n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsx("div",{className:`p-2 rounded-xl bg-gradient-to-r ${O.color} opacity-20 group-hover:opacity-30 transition-opacity`,children:n.jsx("span",{className:"text-xl",children:O.icon})}),n.jsxs("div",{className:"text-left",children:[n.jsx("div",{className:"font-medium text-sm",children:O.title}),n.jsx("div",{className:"text-xs text-white/40",children:O.desc})]})]}),n.jsx(Gg,{})]})},X))]}),n.jsx("div",{className:"mt-6 pt-6 border-t border-white/10",children:n.jsx("button",{onClick:()=>s("/profile/history",{state:{from:"results",returnToResults:!0}}),className:"w-full text-center text-sm text-white/40 hover:text-white/60 transition-colors",children:"View all history →"})}),N&&n.jsx("div",{className:"fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4",onClick:O=>{O.target===O.currentTarget&&C(!1)},children:n.jsxs("div",{className:"bg-gray-800 rounded-3xl p-6 w-full max-w-md border border-gray-700 relative overflow-hidden",onClick:O=>O.stopPropagation(),children:[n.jsx("div",{className:"absolute inset-0 opacity-10",children:n.jsx("div",{className:"h-full bg-gradient-to-br from-yellow-400 to-orange-500"})}),n.jsxs("div",{className:"relative",children:[n.jsxs("div",{className:"flex items-center justify-between mb-6",children:[n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsx("div",{className:"text-5xl",style:{animation:"coinRotate 2s linear infinite"},children:"🪙"}),n.jsxs("div",{children:[n.jsx("h3",{className:"text-2xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent",children:"Your Treasure"}),n.jsxs("p",{className:"text-3xl font-bold text-white mt-1",children:[c," Coins"]})]})]}),n.jsx("button",{onClick:()=>C(!1),className:"w-8 h-8 rounded-lg bg-white/5 border border-gray-600 grid place-items-center hover:bg-white/10 transition",children:"✕"})]}),n.jsxs("div",{className:"mb-6",children:[n.jsx("h4",{className:"text-sm font-medium text-gray-400 mb-3",children:"Ways to Earn"}),n.jsxs("div",{className:"space-y-3",children:[n.jsx("div",{className:"p-4 rounded-xl bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 hover:scale-[1.02] transition-transform",children:n.jsxs("div",{className:"flex items-center justify-between",children:[n.jsxs("div",{children:[n.jsxs("div",{className:"font-medium flex items-center gap-2",children:[n.jsx("span",{className:"text-2xl",children:"✅"}),"Complete Quizzes"]}),n.jsx("div",{className:"text-xs text-gray-400 mt-1",children:"+5 coins per correct answer"})]}),n.jsx("div",{className:"text-green-400 font-bold",children:"+5"})]})}),n.jsx("div",{className:"p-4 rounded-xl bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 hover:scale-[1.02] transition-transform",children:n.jsxs("div",{className:"flex items-center justify-between",children:[n.jsxs("div",{children:[n.jsxs("div",{className:"font-medium flex items-center gap-2",children:[n.jsx("span",{className:"text-2xl",children:"🎯"}),"Daily Challenge"]}),n.jsx("div",{className:"text-xs text-gray-400 mt-1",children:"Complete daily for bonus"})]}),n.jsx("div",{className:"text-blue-400 font-bold",children:"+5"})]})}),n.jsx("div",{className:"p-4 rounded-xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 hover:scale-[1.02] transition-transform",children:n.jsxs("div",{className:"flex items-center justify-between",children:[n.jsxs("div",{children:[n.jsxs("div",{className:"font-medium flex items-center gap-2",children:[n.jsx("span",{className:"text-2xl",children:"🎰"}),"Spin & Play"]}),n.jsx("div",{className:"text-xs text-gray-400 mt-1",children:"Test your luck!"})]}),n.jsx("div",{className:"text-purple-400 font-bold",children:"+50"})]})}),n.jsx("div",{className:"p-4 rounded-xl bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/20 hover:scale-[1.02] transition-transform",children:n.jsxs("div",{className:"flex items-center justify-between",children:[n.jsxs("div",{children:[n.jsxs("div",{className:"font-medium flex items-center gap-2",children:[n.jsx("span",{className:"text-2xl",children:"🏆"}),"Achievements"]}),n.jsx("div",{className:"text-xs text-gray-400 mt-1",children:"Unlock special rewards"})]}),n.jsx("div",{className:"text-orange-400 font-bold",children:"+???"})]})})]})]}),n.jsxs("div",{className:"mb-6",children:[n.jsxs("div",{className:"flex justify-between text-xs text-gray-400 mb-2",children:[n.jsx("span",{children:"Next reward"}),n.jsxs("span",{children:[100-i.coins%100," coins to go"]})]}),n.jsx("div",{className:"h-2 bg-white/10 rounded-full overflow-hidden",children:n.jsx("div",{className:"h-full bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full transition-all",style:{width:`${i.coins%100}%`}})})]}),n.jsx("button",{onClick:()=>{C(!1),s("/play")},className:"w-full py-3 rounded-xl bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-bold hover:scale-[1.02] transition-transform shadow-lg",children:"Start Earning Now! 🚀"})]})]})})]})})},Zg=({questions:e,answers:t,skipped:r,onBack:s,onRetake:a,fromHistory:o=!1})=>{const i=Te(),l=()=>{o?i("/profile/history",{replace:!0}):s?s():i(-1)},c=e.reduce((p,f,w)=>p+(t[w]===f.answerIndex?1:0),0),u=(r==null?void 0:r.filter(Boolean).length)||0,m=e.length-c-u;return n.jsxs("div",{className:"mt-2 card rounded-3xl p-5 w-full max-w-none mx-auto pb-24 h-full overflow-y-auto",children:[n.jsxs("div",{className:"flex items-center justify-between mb-4 pt-6",children:[n.jsx("button",{className:"px-3 py-1 rounded-xl border border-base-border bg-white/5",onClick:l,children:"← Back"}),n.jsx("h2",{className:"text-lg font-semibold",children:"Review Answers"}),n.jsx("div",{className:"w-16"})," "]}),n.jsxs("div",{className:"grid grid-cols-3 gap-2 mb-4",children:[n.jsxs("div",{className:"rounded-xl bg-green-600/10 border border-green-500/30 p-2 text-center",children:[n.jsx("div",{className:"text-xs text-green-400",children:"Correct"}),n.jsx("div",{className:"text-lg font-bold text-green-400",children:c})]}),n.jsxs("div",{className:"rounded-xl bg-red-600/10 border border-red-500/30 p-2 text-center",children:[n.jsx("div",{className:"text-xs text-red-400",children:"Incorrect"}),n.jsx("div",{className:"text-lg font-bold text-red-400",children:m})]}),n.jsxs("div",{className:"rounded-xl bg-amber-600/10 border border-amber-500/30 p-2 text-center",children:[n.jsx("div",{className:"text-xs text-amber-400",children:"Skipped"}),n.jsx("div",{className:"text-lg font-bold text-amber-400",children:u})]})]}),n.jsx("ol",{className:"space-y-4",children:e.map((p,f)=>{const w=t[f],g=!w&&w!==0,j=w===p.answerIndex;return n.jsxs("li",{className:"rounded-2xl border border-base-border bg-white/5 p-4 md:p-5",children:[n.jsxs("div",{className:"flex items-start justify-between mb-3",children:[n.jsxs("div",{className:"flex-1",children:[n.jsxs("div",{className:"text-sm md:text-base font-medium",children:["Q",f+1,". ",p.prompt]}),p.category&&n.jsxs("div",{className:"text-xs text-base-muted mt-1",children:["Category: ",p.category," • Difficulty: ",p.difficulty||"Medium"]})]}),n.jsx("div",{className:"ml-2",children:g?n.jsx("span",{className:"px-2 py-1 rounded text-xs bg-amber-600/20 text-amber-400",children:"Skipped"}):j?n.jsx("span",{className:"px-2 py-1 rounded text-xs bg-green-600/20 text-green-400",children:"✓ Correct"}):n.jsx("span",{className:"px-2 py-1 rounded text-xs bg-red-600/20 text-red-400",children:"✗ Wrong"})})]}),n.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-3",children:p.options.map((S,y)=>{const v=w===y,x=y===p.answerIndex;let N="w-full text-left px-3 py-2 rounded-xl border transition-all ";return x?N+="bg-green-600/20 border-green-500/50 text-green-300":v&&!x?N+="bg-red-600/20 border-red-500/50 text-red-300":N+="bg-base-bg/40 border-base-border text-base-muted",n.jsxs("div",{className:N,children:[n.jsxs("span",{className:"font-semibold mr-2",children:[["A","B","C","D"][y],"."]}),S,x&&n.jsx("span",{className:"ml-2 text-green-400",children:"✓"}),v&&!x&&n.jsx("span",{className:"ml-2 text-red-400",children:"✗"})]},y)})}),p.explanation&&n.jsxs("div",{className:"mt-3 p-3 rounded-xl bg-white/5 border border-base-border",children:[n.jsx("div",{className:"text-xs font-semibold text-brand-blue mb-1",children:"Explanation:"}),n.jsx("div",{className:"text-sm text-base-muted",children:p.explanation})]})]},p.id||f)})}),n.jsxs("div",{className:"mt-6 flex gap-2 justify-center sticky bottom-4",children:[n.jsx("button",{className:"px-4 py-2.5 rounded-xl border border-base-border bg-base-card backdrop-blur",onClick:l,children:"Back to Results"}),a&&n.jsx("button",{className:"px-4 py-2.5 rounded-xl bg-gradient-to-r from-brand-blue to-brand-purple text-white font-medium",onClick:a,children:"Retake Quiz"})]})]})},ev="qp_resume",Md="qp_mistakes",Od="qp_stats",Fd="qp_lastset",$d="qp_recent",Bd="qp_review_snapshot",tv=50,os=(e="")=>e.replace(/-/g," ").replace(/\b\w/g,t=>t.toUpperCase()),za=(e="")=>e.toLowerCase().trim().replace(/[^\w\s-]/g,"").replace(/\s+/g,"-"),nv=(e,t)=>e.slice().sort(()=>Math.random()-.5).slice(0,t),Df=e=>{const t=e.slice();for(let r=t.length-1;r>0;r--){const s=Math.floor(Math.random()*(r+1));[t[r],t[s]]=[t[s],t[r]]}return t},rv=(e,t,r)=>Math.max(t,Math.min(r,e)),is=(e,t)=>{try{const r=localStorage.getItem(e);return r?JSON.parse(r):t}catch{return t}};async function sv(){const e="/data/quiz_questions_bank.csv",t=await fetch(e);if(!t.ok)throw new Error(`CSV not found at ${e}`);const r=await t.text(),{data:s}=qn.parse(r,{header:!0,skipEmptyLines:!0,transformHeader:o=>String(o).trim().toLowerCase()}),a={a:0,b:1,c:2,d:3};return s.map((o,i)=>{var f;const l=[o.option1,o.option2,o.option3,o.option4].map(w=>(w??"").trim());if(l.some(w=>!w))return null;let c=-1;const u=String(o.answer??"").trim();if(a[u.toLowerCase()]!==void 0)c=a[u.toLowerCase()];else{const w=l.findIndex(g=>g.toLowerCase()===u.toLowerCase());c=w>=0?w:0}const m=String(o.category??o.subject??"General Knowledge").trim(),p=String(o.difficulty??"medium").toLowerCase().trim();return{id:((f=o.id)==null?void 0:f.trim())||`q_${i}`,category:m,difficulty:p,prompt:String(o.question??"").trim(),options:l,answerIndex:c,explanation:String(o.explanation??"").trim()}}).filter(Boolean)}function av(e,{categorySlug:t,difficulty:r,count:s}){console.log("=== BUILD SESSION DEBUG ==="),console.log("categorySlug:",t),console.log("difficulty:",r),console.log("count:",s),console.log("Total questions available:",e.length);const o=t==="mixed"?()=>!0:m=>za(m.category)===t,i=r?m=>(m.difficulty||"medium")===r:()=>!0,l=e.filter(m=>o(m)&&i(m));if(console.log("Filtered pool size:",l.length),console.log("Sample categories from all questions:",[...new Set(e.slice(0,10).map(m=>`"${m.category}" -> "${za(m.category)}"`))]),l.length===0)return console.error("No questions match the filter criteria!"),console.log("Available categories:",[...new Set(e.map(m=>za(m.category)))]),{questions:[],poolSize:0};const u=nv(l,Math.min(s,l.length)).map(m=>{const p=Df([0,1,2,3]),f=p.map(g=>m.options[g]),w=p.indexOf(m.answerIndex);return{...m,options:f,answerIndex:w}});return console.log("Final questions:",u.length),{questions:u,poolSize:l.length}}function ov(){const e=Te(),{category:t}=Hp(),r=Xe(),{energy:s,useEnergy:a,player:o,updateDailyStreak:i}=gn(),l=new URLSearchParams(r.search),c=l.get("review")==="1",u=l.get("retake")==="1",m=r.state||{},p=m.mode||"quiz",f=String(m.difficulty||"medium").toLowerCase(),w=m.returnPath||null,g=m.fromQuest||!1,j=rv(Number(m.count||10),1,50),S=m.timer||{type:"per_q",seconds:45};m.resume,m.daily,m.source;const y=u||!!m.retake,v=!!m.fromHistory,x=p==="practice";console.log("Quiz Component - Mode Detection:",{routerState:m,mode:p,isPractice:x,location:r.pathname,state:r.state});const[N,C]=d.useState([]),[R,T]=d.useState(!0),[h,b]=d.useState(""),[k,_]=d.useState({questions:[]}),[A,q]=d.useState("quiz"),[H,V]=d.useState(null),[K,U]=d.useState(null),[M,I]=d.useState(0);d.useEffect(()=>{let L=!0;return(async()=>{try{const G=await sv();if(!L)return;C(G)}catch(G){console.error(G),b("Failed to load questions. Check /public/data/quiz_questions_bank.csv")}finally{T(!1)}})(),()=>{L=!1}},[]),d.useEffect(()=>{var L;if((L=r.state)!=null&&L.returnToResults){const G=ae.getCurrentResults();G&&(V(G),q("results"),T(!1),_({questions:[]}))}},[r.state]),d.useEffect(()=>{var G;if(R||h||c||(G=r.state)!=null&&G.returnToResults||N.length===0)return;console.log("=== SESSION INIT ==="),console.log("Category:",t),console.log("Mode:",p),console.log("Difficulty:",f),console.log("Count:",j);const L=av(N,{categorySlug:t,difficulty:f,count:j});if(L.questions.length===0){console.error("No questions found!"),console.log("Looking for category:",t),console.log("Available categories (first 10):",[...new Set(N.map(B=>za(B.category)))].slice(0,10)),b(`No questions found for "${os(t)}" with difficulty "${f}"`);return}console.log("Session built with",L.questions.length,"questions"),q("quiz"),V(null),_(L),U(Date.now()),I(0)},[N,t,p,f,j,r.pathname]),d.useEffect(()=>{if(A!=="quiz"||!K)return;const L=setInterval(()=>{I(Date.now()-K)},1e3);return()=>clearInterval(L)},[A,K]);const z=d.useCallback(L=>{if(console.log("Quiz completed - Mode:",p,"isPractice:",x,"Results:",L),console.log("handleQuizComplete called at:",new Date().toISOString()),window._quizCompleting){console.warn("Quiz completion already in progress, ignoring duplicate call");return}if(window._quizCompleting=!0,setTimeout(()=>{window._quizCompleting=!1},1e3),!L||!L.questions){console.error("Invalid results object:",L);return}const G=L.questions.filter((Q,te)=>L.answers[te]!==null&&L.answers[te]!==Q.answerIndex).map(Q=>Q.id);try{const Q=is(Md,[]),te=Array.from(new Set([...G,...Q]));localStorage.setItem(Md,JSON.stringify(te))}catch(Q){console.error("Error saving mistakes:",Q)}try{const Q=is(Od,{sessions:[]});Q.sessions.push({cat:os(t),mode:x?"practice":"quiz",total:L.total,correct:L.correct,skipped:L.skipped.filter(Boolean).length,ms:M,timestamp:Date.now(),earnedXP:x?0:L.correct*10,earnedCoins:x?0:L.correct*5}),localStorage.setItem(Od,JSON.stringify(Q))}catch(Q){console.error("Error saving stats:",Q)}const B={ts:Date.now(),slug:t,categoryLabel:os(t),mode:x?"practice":"quiz",difficulty:f,total:L.total,timer:x?null:S,ms:M,attempted:L.answers.filter(Q=>Q!==null).length,correct:L.correct,questions:L.questions,answers:L.answers,skipped:L.skipped,isPractice:x};try{localStorage.setItem(Fd,JSON.stringify(B)),localStorage.setItem(Bd,JSON.stringify({questions:L.questions,answers:L.answers,skipped:L.skipped}));const Q=is($d,[]),de=[{id:B.ts,ts:B.ts,cat:B.categoryLabel,slug:t,mode:x?"Practice":"Quiz",total:L.total,correct:L.correct,ms:M,snapshot:B},...Q].slice(0,tv);localStorage.setItem($d,JSON.stringify(de))}catch(Q){console.error("Error saving snapshot:",Q)}localStorage.removeItem(ev);const O=Ke.getCurrentUser();if(O!=null&&O.phone)if(x){const Q=ae.recordPracticeSession(O.phone,{questionsCompleted:L.correct,correctAnswers:L.correct,category:t});L.earnedCoins=Q.coinsEarned}else{const Q=ae.recordQuizSession(O.phone,{score:L.correct,totalQuestions:L.total,category:t,difficulty:f,mode:"quiz"});L.earnedCoins=Q.coinsEarned}else L.earnedCoins=0;i(),console.log("Setting review snapshot with:",{returnPath:w||"/",fromQuest:g||!1});const X={...L,category:os(t),categorySlug:t,difficulty:f,mode:x?"practice":"quiz",elapsedMs:M,isPractice:x,hasTimer:!x,earnedXP:x?0:L.correct*10,earnedCoins:x?L.earnedCoins||0:L.correct*5,returnPath:w||"/",fromQuest:g||!1};ae.storeCurrentResults(X),V(X),q("results")},[t,p,S,M,x,w,g]),D=()=>{const L=new Date;return`${L.getFullYear()}-${L.getMonth()+1}-${L.getDate()}`};d.useCallback(L=>{if(x&&g){const G=JSON.parse(localStorage.getItem("questProgress")||"{}"),B=G.practiceQuestions||0,O=Math.min(B+L,15);G.practiceQuestions=O,G.date=D(),localStorage.setItem("questProgress",JSON.stringify(G)),console.log("Practice progress updated:",O)}},[x,g]);const E=d.useCallback(()=>{w?e(w,{replace:!0}):v?e("/profile/history",{replace:!0,state:null}):e("/")},[v,e,w]),P=d.useCallback(()=>{console.log("Retake requested - Mode:",p,"isPractice:",x);const L=is(Fd,null);if(!L||L.slug!==t){e(`/quiz/${t}?r=${Date.now()}`,{replace:!0,state:{mode:x?"practice":"quiz",difficulty:f,count:j,timer:x?null:S,retake:!0}});return}const G=L.questions.map(B=>{const O=Df([0,1,2,3]);return{...B,options:O.map(X=>B.options[X]),answerIndex:O.indexOf(B.answerIndex)}});_({questions:G,poolSize:G.length}),U(Date.now()),I(0),q("quiz"),window.scrollTo(0,0)},[t,p,f,j,S,e,x]),$=d.useCallback((L=null)=>{if(L)V(L);else if(!H){const G=is(Bd,null);G&&V({questions:G.questions||[],answers:G.answers||[],skipped:G.skipped||[]})}q("review")},[H]),Y=d.useCallback(()=>{v?e("/profile/history",{replace:!0}):q("results")},[v,e]);return R?n.jsx("div",{className:"fixed inset-0 bg-inherit text-white flex items-center justify-center",children:n.jsx("div",{className:"text-sm text-base-muted",children:"Loading questions…"})}):h?n.jsx("div",{className:"fixed inset-0 bg-inherit text-white flex items-center justify-center",children:n.jsx("div",{className:"text-sm text-red-400",children:h})}):(console.log("Render - Current view:",A,"Session questions:",k.questions.length,"Mode:",p,"isPractice:",x),n.jsx("div",{className:"fixed inset-0 bg-inherit text-white z-0 overflow-hidden max-w-[100vw]",children:n.jsxs("div",{className:"h-full overflow-hidden px-0",children:[A==="quiz"&&k.questions.length>0&&n.jsx("div",{className:"h-full",children:n.jsx(Wg,{session:k,mode:x?"practice":"quiz",category:os(t),difficulty:f,timerConfig:x?null:S,onComplete:z,onQuit:E,isPractice:x})}),A==="results"&&H&&n.jsx(Jg,{results:H,onRetake:P,onReview:()=>$(H),isRetake:y,isPractice:x,player:o,categories:_f,onNavigate:(L,G)=>{console.log("onNavigate called with:",L,G),G!=null&&G.state?e(L,{state:G.state,replace:G.replace||!1}):e(L)}}),A==="review"&&H&&n.jsx(Zg,{questions:H.questions||[],answers:H.answers||[],skipped:H.skipped||[],onBack:Y,onRetake:P,fromHistory:v,isPractice:x})]})}))}const jn=[{label:"General Knowledge",slug:"general-knowledge",color:"#7C3AED",soon:!1},{label:"Current Affairs",slug:"current-affairs",color:"#2563EB",soon:!1},{label:"Fun Facts",slug:"fun-facts",color:"#EF4444",soon:!1},{label:"Science",slug:"science",color:"#10B981",soon:!1},{label:"History",slug:"history",color:"#F59E0B",soon:!0},{label:"Geography",slug:"geography",color:"#FACC15",soon:!0},{label:"Cat 1",slug:"cat-1",color:"#06B6D4",soon:!0},{label:"Cat 2",slug:"cat-2",color:"#D946EF",soon:!0}],Yn=360/jn.length,iv=42,ai=3e3,Ud=10,qd=260,lv="cubic-bezier(.15,.7,.1,1)",cv="cubic-bezier(.2,.7,.2,1)",bn=5,dv=5,uv=(e="")=>String(e).toLowerCase().trim().replace(/[^\w\s-]/g,"").replace(/\s+/g,"-");function mv({muted:e=!1,size:t=18}){return n.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24","aria-hidden":"true",children:[n.jsx("path",{d:"M3 9h4l5-4v14l-5-4H3z",fill:"currentColor"}),!e&&n.jsxs(n.Fragment,{children:[n.jsx("path",{d:"M16 8c1.5 1.5 1.5 6 0 7.5",stroke:"currentColor",strokeWidth:"2",fill:"none",strokeLinecap:"round"}),n.jsx("path",{d:"M19 6c3 3 3 10 0 13",stroke:"currentColor",strokeWidth:"2",fill:"none",strokeLinecap:"round"})]}),e&&n.jsx("line",{x1:"3",y1:"21",x2:"21",y2:"3",stroke:"#EF4444",strokeWidth:"2.5",strokeLinecap:"round"})]})}function fv({q:e,locked:t,onPick:r,result:s}){if(!e)return null;const a=[e.option1,e.option2,e.option3,e.option4];return n.jsxs("div",{className:"mt-5 rounded-3xl bg-white/5 border border-white/10 p-4",children:[n.jsx("div",{className:"text-sm text-base-muted mb-1",children:"Quick question"}),n.jsx("div",{className:"text-xl font-semibold mb-4",children:e.question}),a.map((o,i)=>{const l=s&&o===e.answer,c=s&&s.pick===o&&o!==e.answer;return n.jsx("button",{disabled:t||!!s,onClick:()=>r(o),className:["w-full text-left px-4 py-2 rounded-xl mb-2 border transition",!s&&!t?"bg-white/5 hover:bg-white/10 border-white/10":"bg-white/5 border-white/10",l?"bg-green-600/20 border-green-400/60 text-green-200":"",c?"bg-red-600/20 border-red-400/60 text-red-200":""].join(" "),children:o},i)}),s&&n.jsxs("div",{className:"mt-3 text-sm",children:[s.correct?n.jsx("span",{className:"text-green-400 font-medium",children:"✅ Correct!"}):n.jsxs("span",{className:"text-red-400 font-medium",children:["❌ Not quite. Answer: ",n.jsx("b",{children:e.answer})]}),e.explanation&&n.jsxs("div",{className:"text-xs text-base-muted mt-1",children:["Tip: ",e.explanation]})]})]})}function hv(){const e=Te(),[t]=tt("/sounds/correct.mp3",{volume:.7}),[r]=tt("/sounds/wrong.mp3",{volume:.7}),[s,a]=d.useState(()=>[{name:"Player 1",color:"#60A5FA",scores:Array(bn).fill(null)},{name:"Player 2",color:"#F472B6",scores:Array(bn).fill(null)}]),[o,i]=d.useState(0),[l,c]=d.useState(1),u=s.reduce((B,O)=>B+O.scores.reduce((X,Q)=>X+(Q??0),0),0),[m,p]=d.useState(!0),f=d.useRef(null);d.useEffect(()=>{const B=new Audio("/sounds/spin.mp3");return B.loop=!0,B.volume=.7,f.current=B,()=>{try{B.pause(),B.src=""}catch{}}},[]);const w=()=>{if(m&&f.current)try{f.current.currentTime=0,f.current.play()}catch{}},g=()=>{if(f.current)try{f.current.pause(),f.current.currentTime=0}catch{}},[j,S]=d.useState(0),[y,v]=d.useState("none"),[x,N]=d.useState(!1),[C,R]=d.useState(null),[T,h]=d.useState(null),b=d.useMemo(()=>typeof window<"u"?window.matchMedia("(prefers-reduced-motion: reduce)").matches:!1,[]),[k,_]=d.useState([]);d.useEffect(()=>{(async()=>{try{const B=await fetch("/data/quiz_questions_bank.csv").then(te=>te.text()),{data:O}=qn.parse(B,{header:!0,skipEmptyLines:!0,transformHeader:te=>String(te).trim().toLowerCase()}),X={a:0,b:1,c:2,d:3},Q=O.map((te,de)=>{var oe;const re=(te.question??"").trim();if(!re)return null;const W=[te.option1,te.option2,te.option3,te.option4].map(me=>String(me??"").trim());if(W.some(me=>!me))return null;let F=String(te.answer??"").trim(),ne=X[F.toLowerCase()];if(ne===void 0){const me=W.findIndex(Se=>Se.toLowerCase()===F.toLowerCase());ne=me>=0?me:0}const ee=W[ne];return{id:((oe=te.id)==null?void 0:oe.trim())||`ps_${de}`,question:re,option1:W[0],option2:W[1],option3:W[2],option4:W[3],answer:ee,explanation:String(te.explanation??"").trim(),catSlug:uv(te.category??te.subject??"general knowledge"),difficulty:String(te.difficulty??"medium").toLowerCase().trim()}}).filter(Boolean);_(Q)}catch{_([])}})()},[]);const[A,q]=d.useState(null),[H,V]=d.useState(null),[K,U]=d.useState(!1),M=B=>(B%360+360)%360,I=B=>M(B),z=l>bn;function D(){if(s.length>=4)return;const B=["#60A5FA","#F472B6","#F59E0B","#34D399","#F87171","#A78BFA"],O=B[(s.length*2+1)%B.length];a(X=>[...X,{name:`Player ${X.length+1}`,color:O,scores:Array(bn).fill(null)}])}function E(){s.length<=2||(a(B=>B.slice(0,-1)),i(B=>Math.min(B,s.length-2)))}function P(B){a(O=>O.map((X,Q)=>Q===o?{...X,scores:X.scores.map((te,de)=>de===l-1?B:te)}:X))}function $(){if(x||z)return;R(null),h(null),q(null),V(null),N(!0),w();const B=Math.floor(Math.random()*jn.length),O=jn[B],X=Yn*.28,Q=(Math.random()*2-1)*X,te=M(j),de=180,W=B*Yn+Yn/2+Q;let F=I(W-te-de);const ne=iv*360+F,ee=j+ne+Ud;v(`transform ${b?800:ai}ms ${lv}`),S(ee);try{navigator.vibrate&&!b&&navigator.vibrate([10,40,10])}catch{}setTimeout(()=>{v(`transform ${b?160:qd}ms ${cv}`),S(oe=>oe-Ud)},b?800:ai),setTimeout(()=>{if(g(),N(!1),R(B),h(O.color),O.soon)return;const oe=k.filter(Se=>Se.catSlug===O.slug&&Se.difficulty==="easy"),me=oe.length?oe:k.filter(Se=>Se.catSlug===O.slug);if(me.length){const Se=me[Math.floor(Math.random()*me.length)];q(Se)}else q({question:"No question found for this category yet. Try re-spinning!",option1:"Okay",option2:"Okay",option3:"Okay",option4:"Okay",answer:"Okay",explanation:""})},(b?800:ai)+(b?160:qd)+40)}function Y(B){if(!A||H)return;const O=B===A.answer;if(V({correct:O,pick:B}),O){t(),U(!0),setTimeout(()=>U(!1),900);try{navigator.vibrate&&navigator.vibrate([8,16])}catch{}P(dv)}else{r();try{navigator.vibrate&&navigator.vibrate([4])}catch{}P(0)}}function L(){const B=(o+1)%s.length,O=B===0?l+1:l;i(B),c(O),R(null),h(null),q(null),V(null)}function G(){const B=s.map(Q=>Q.scores.reduce((te,de)=>te+(de??0),0)),O=Math.max(...B),X=s.filter((Q,te)=>B[te]===O).map(Q=>Q.name).join(", ");alert(`${X} win${X.includes(",")?"":"s"} the pot of ${u} coins! 🎉`),e("/play")}return n.jsxs("div",{className:"min-h-screen bg-black text-white",children:[K&&n.jsx(If,{numberOfPieces:120,recycle:!1}),n.jsxs("div",{className:"mx-auto max-w-md px-5 pt-[calc(env(safe-area-inset-top)+1.25rem)] pb-[calc(5.25rem+env(safe-area-inset-bottom))]",children:[n.jsxs("header",{className:"flex items-center justify-between mb-4",children:[n.jsx("button",{onClick:()=>e("/play"),className:"h-10 w-10 grid place-items-center rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition","aria-label":"Back",children:"←"}),n.jsxs("div",{className:"text-center",children:[n.jsx("h1",{className:"text-2xl font-bold",children:"Party Spin"}),n.jsx("p",{className:"text-sm text-base-muted",children:"Pass & play • Winner takes the pot"})]}),n.jsx("button",{onClick:()=>p(B=>!B),className:"h-10 w-10 grid place-items-center rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition","aria-label":m?"Mute sound":"Unmute sound",title:m?"Sound on":"Sound off",children:n.jsx(mv,{muted:!m})})]}),n.jsxs("section",{className:"rounded-2xl border border-white/10 bg-white/5 p-3 mb-4",children:[n.jsxs("div",{className:"flex items-center justify-between mb-2",children:[n.jsxs("div",{className:"text-sm",children:["Round ",n.jsx("b",{children:Math.min(l,bn)}),"/",n.jsx("b",{children:bn})]}),n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx("button",{onClick:D,className:"btn-ghost px-2 py-1 text-sm",children:"+"}),n.jsx("span",{className:"text-sm text-base-muted",children:"Player"}),n.jsx("button",{onClick:E,className:"btn-ghost px-2 py-1 text-sm",children:"−"})]}),n.jsxs("div",{className:"text-sm",children:["Pot: ",n.jsx("b",{className:"text-yellow-300",children:u})," 🪙"]})]}),n.jsx("div",{className:"overflow-x-auto",children:n.jsxs("table",{className:"w-full table-fixed text-sm tracking-tight tabular-nums",children:[n.jsxs("colgroup",{children:[n.jsx("col",{style:{width:"42%"}}),n.jsx("col",{style:{width:"9%"}}),n.jsx("col",{style:{width:"9%"}}),n.jsx("col",{style:{width:"9%"}}),n.jsx("col",{style:{width:"9%"}}),n.jsx("col",{style:{width:"9%"}}),n.jsx("col",{style:{width:"13%"}})]}),n.jsx("thead",{children:n.jsxs("tr",{className:"text-base-muted",children:[n.jsx("th",{className:"text-left font-medium py-1 pr-1",children:"Player"}),Array.from({length:bn}).map((B,O)=>n.jsxs("th",{className:"font-medium text-center",children:["R",O+1]},O)),n.jsx("th",{className:"font-medium text-right pr-1",children:"Total"})]})}),n.jsx("tbody",{children:s.map((B,O)=>{const X=B.scores.reduce((te,de)=>te+(de??0),0),Q=O===o;return n.jsxs("tr",{className:Q?"bg-white/6":"",children:[n.jsx("td",{className:"py-1 pr-1",children:n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx("span",{className:"inline-block h-3 w-3 rounded-full shrink-0",style:{background:B.color}}),n.jsx("input",{className:"bg-transparent outline-none font-semibold w-full",value:B.name,onChange:te=>a(de=>de.map((re,W)=>W===O?{...re,name:te.target.value}:re))})]})}),B.scores.map((te,de)=>n.jsx("td",{className:"text-center",children:te===null?"–":te},de)),n.jsx("td",{className:"text-right pr-1 font-semibold",children:X})]},O)})})]})})]}),n.jsx("section",{className:"flex flex-col items-center",children:n.jsxs("div",{className:"relative w-[320px] h-[320px] md:w-[380px] md:h-[380px] rounded-full select-none",children:[T&&n.jsx("div",{className:"pointer-events-none absolute -inset-2 rounded-full",style:{boxShadow:`0 0 0 6px ${T}33, 0 0 30px 8px ${T}44`}}),n.jsx("div",{className:"absolute inset-0 rounded-full border border-white/10 shadow-2xl bg-black/20 overflow-hidden will-change-transform",style:{transform:`rotate(${j}deg)`,transition:y},"aria-label":"Category wheel",role:"group",children:n.jsxs("svg",{width:"100%",height:"100%",viewBox:"0 0 100 100",className:"block",children:[jn.map((B,O)=>{const X=O*Yn,Q=X+Yn,te=Yn>180?1:0,de=Math.PI*X/180,re=Math.PI*Q/180,W=50+50*Math.cos(de),F=50-50*Math.sin(de),ne=50+50*Math.cos(re),ee=50-50*Math.sin(re),oe=C===O;return n.jsxs("g",{style:{opacity:C==null?.95:oe?1:.78,filter:C!=null&&!oe?"blur(0.6px)":"none"},children:[n.jsx("path",{d:`M50,50 L${W},${F} A50,50 0 ${te} 0 ${ne},${ee} Z`,fill:B.color,stroke:oe?`${B.color}AA`:"rgba(255,255,255,0.14)",strokeWidth:oe?"1.2":"0.6"}),n.jsx("text",{x:"50",y:"50",fill:"#ffffff",fontSize:"4",fontWeight:"700",dominantBaseline:"middle",transform:`rotate(${X+Yn/2} 50 50) translate(12 0)`,children:n.jsxs("tspan",{children:[B.label,B.soon?" (soon)":""]})})]},B.slug)}),n.jsx("circle",{cx:"50",cy:"50",r:"9",fill:"rgba(0,0,0,0.55)",stroke:"white",strokeOpacity:"0.25"})]})}),n.jsx("button",{onClick:$,disabled:x||z,className:["absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2","h-16 w-16 rounded-full grid place-items-center","bg-white text-black font-extrabold shadow-soft transition active:scale-[0.98]",x||z?"opacity-60 cursor-not-allowed":"hover:bg-gray-200"].join(" "),"aria-label":"Spin the wheel",children:"SPIN"}),n.jsx("div",{className:"absolute left-1/2 -translate-x-1/2 -bottom-3 z-20",children:n.jsx("svg",{width:"22",height:"22",viewBox:"0 0 24 24",children:n.jsx("path",{d:"M12 4 L20 20 L4 20 Z",fill:"#ffffff"})})}),C!=null&&!x&&n.jsx("div",{className:"absolute left-1/2 -translate-x-1/2 -bottom-10",children:n.jsxs("div",{className:"px-3 py-1 rounded-full bg-white/10 border border-white/20 text-sm backdrop-blur",children:[n.jsx("span",{className:"inline-block h-2.5 w-2.5 rounded-full mr-2 align-middle",style:{background:jn[C].color}}),jn[C].label]})})]})}),n.jsx("section",{className:"mt-4",children:z?n.jsxs("div",{className:"rounded-2xl border border-white/10 bg-white/5 p-4",children:[n.jsx("div",{className:"text-xl font-semibold mb-2",children:"Match Over"}),n.jsxs("p",{className:"text-sm text-base-muted mb-3",children:["Top score takes the pot of ",n.jsx("b",{className:"text-yellow-300",children:u})," coins."]}),n.jsx("button",{className:"btn-primary w-full",onClick:G,children:"End match"})]}):C!=null&&jn[C].soon?n.jsxs("div",{className:"rounded-2xl border border-white/10 bg-white/5 p-4",children:[n.jsx("div",{className:"text-lg font-semibold mb-1",children:jn[C].label}),n.jsx("p",{className:"text-sm text-base-muted mb-3",children:"This category is arriving soon. Spin again!"}),n.jsx("button",{className:"btn-primary",onClick:$,disabled:x,children:"Re-spin"})]}):n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:"text-sm text-center text-base-muted mb-1",children:["Turn: ",n.jsx("span",{style:{color:s[o].color},children:s[o].name})," ","| Round ",l,"/",bn]}),n.jsx(fv,{q:A,locked:x||!A,onPick:Y,result:H}),H&&n.jsx("div",{className:"mt-3 flex justify-center",children:n.jsx("button",{className:"btn-primary",onClick:L,children:"Next turn"})})]})})]}),n.jsx("div",{className:"pointer-events-none fixed inset-x-0 bottom-0 bg-[#0B0F1A]",style:{height:"calc(5.25rem + env(safe-area-inset-bottom))"},"aria-hidden":!0})]})}const pv=({onSelect:e})=>{const t=[{id:"random",emoji:"🎲",title:"Random Mix",color:"from-purple-500 to-pink-500"},{id:"trending",emoji:"📈",title:"Trending Now",color:"from-blue-500 to-cyan-500"},{id:"level",emoji:"📊",title:"Your Level",color:"from-green-500 to-teal-500"},{id:"daily",emoji:"🎯",title:"Daily Challenge",color:"from-orange-500 to-red-500"}];return n.jsxs("div",{className:"fixed inset-0 bg-gray-900 overflow-hidden flex flex-col justify-center items-center px-4",children:[n.jsx("h1",{className:"text-2xl font-bold text-white mb-20",children:"Choose a swipe mode"}),n.jsx("div",{className:"grid grid-cols-2 gap-4 w-full max-w-md h-[55vh]",children:t.map(r=>n.jsxs("button",{onClick:()=>e(r.id,r.title),className:`rounded-3xl bg-gradient-to-br ${r.color} p-6 flex flex-col items-center justify-center gap-3 transform hover:scale-105 transition-all shadow-xl`,children:[n.jsx("span",{className:"text-5xl",children:r.emoji}),n.jsx("span",{className:"text-white font-bold text-lg text-center",children:r.title})]},r.id))})]})},xv=()=>{Te(),gn();const[e,t]=d.useState([]),[r,s]=d.useState(0),[a,o]=d.useState({}),[i,l]=d.useState(0),[c,u]=d.useState(5),[m,p]=d.useState(0),[f,w]=d.useState(!0),[g,j]=d.useState(null),[S,y]=d.useState(!0),[v,x]=d.useState(null),[N,C]=d.useState(""),[R,T]=d.useState(!1),[h,b]=d.useState(""),[k,_]=d.useState(!1),[A,q]=d.useState(!1),[H,V]=d.useState(!1),[K,U]=d.useState(!1),[M,I]=d.useState(!1),[z,D]=d.useState(!1),[E,P]=d.useState(0),[$,Y]=d.useState(0),[L,G]=d.useState(-1),[B,O]=d.useState(-1),[X,Q]=d.useState({}),[te,de]=d.useState({}),[re,W]=d.useState(ae.getCoins()),F=d.useRef(null),[ne,ee]=d.useState(null),[oe,me]=d.useState(!1),Se=d.useRef(null),Ee=d.useRef(null),[be]=tt("/sounds/correct.mp3",{volume:.6}),[pe]=tt("/sounds/wrong.mp3",{volume:.6}),[Ne]=tt("/sounds/coin.mp3",{volume:.75}),xe=["🐼","🐱","🐶","🦊","🐰","🐨","🐯","🦁","🐸","🐵"],we=()=>{t([]),s(0),o({}),l(0),u(5),p(0),w(!0),j(null),T(!1),b(""),_(!1),q(!1),V(!1),U(!1),I(!1),D(!1),P(0),Y(0),G(-1),O(-1),Q({}),de({}),x(null),C(""),nt(null),me(!1)};d.useEffect(()=>(we(),y(!0),()=>{document.body.classList.remove("hide-bottom-nav"),we(),Ee.current&&clearTimeout(Ee.current)}),[]),d.useEffect(()=>{const se=J=>{!S&&e.length>0&&(J.preventDefault(),q(!0))};return!S&&e.length>0&&window.history.pushState({inQuiz:!0},"",window.location.pathname),window.addEventListener("popstate",se),()=>window.removeEventListener("popstate",se)},[S,e.length]),d.useEffect(()=>{!S&&e.length>0?document.body.classList.add("hide-bottom-nav"):document.body.classList.remove("hide-bottom-nav")},[S,e.length]),d.useEffect(()=>{!S&&e.length>0&&U(!0)},[S,e.length]);const[Ye,nt]=d.useState(null);d.useEffect(()=>{const se=J=>{var le;if(K&&!H){const he=J.target.closest('button[type="button"]'),ve=(le=he==null?void 0:he.querySelector(".text-\\[10px\\]"))==null?void 0:le.textContent;ve&&["Home","Play","Profile","Swipe"].includes(ve)&&(J.preventDefault(),J.stopPropagation(),nt({Home:"/",Play:"/play",Profile:"/profile",Swipe:"/swipe"}[ve]),q(!0))}};return document.addEventListener("click",se,!0),()=>document.removeEventListener("click",se,!0)},[K,H]),d.useEffect(()=>{const se=Se.current;if(!se)return;let J=!1,le=0,he=null;const ve=Ie=>{!S&&e.length>0&&Ie.preventDefault()},ce=Ie=>{le=Ie.touches[0].clientY,J=!1},ke=Ie=>{!S&&e.length>0&&!A&&!k&&Ie.preventDefault()},ye=Ie=>{if(J||A||k)return;const ue=Ie.changedTouches[0].clientY,fe=le-ue;if(Math.abs(fe)>30){if(J=!0,he&&clearTimeout(he),fe>0&&r<e.length-1){const ge=r+1;s(ge),se.scrollTo({top:ge*window.innerHeight,behavior:"smooth"})}else if(fe<0&&r>0){const ge=r-1;s(ge),se.scrollTo({top:ge*window.innerHeight,behavior:"smooth"})}he=setTimeout(()=>{J=!1},800)}};return se.addEventListener("touchstart",ce,{passive:!1}),se.addEventListener("touchmove",ke,{passive:!1}),se.addEventListener("touchend",ye,{passive:!1}),se.addEventListener("wheel",ve,{passive:!1}),()=>{se.removeEventListener("touchstart",ce),se.removeEventListener("touchmove",ke),se.removeEventListener("touchend",ye),se.removeEventListener("wheel",ve),he&&clearTimeout(he)}},[r,e.length,S]),d.useEffect(()=>{const se=Se.current;se&&(A||k?(se.style.overflow="hidden",se.style.touchAction="none"):(se.style.overflow="auto",se.style.touchAction="auto"))},[A,k]),d.useEffect(()=>{(A||k)&&Ee.current&&(clearTimeout(Ee.current),Ee.current=null)},[A,k]);const Ae=async se=>{try{const le=await(await fetch("/data/quiz_questions_bank.csv")).text(),{data:he}=qn.parse(le,{header:!0,skipEmptyLines:!0}),ke=he.map((ye,Ie)=>{var ge,ot;const ue=[ye.option1,ye.option2,ye.option3,ye.option4].filter(Boolean),fe={A:0,B:1,C:2,D:3};return{id:ye.id||`q_${Ie}`,prompt:ye.question,options:ue,answerIndex:fe[(ge=ye.answer)==null?void 0:ge.toUpperCase()]||0,category:ye.category||"General Knowledge",difficulty:((ot=ye.difficulty)==null?void 0:ot.toLowerCase())||"medium",explanation:ye.explanation||"",stats:{views:Math.floor(Math.random()*1e4)+1e3,attempted:Math.floor(Math.random()*5e3)+500,correctRate:Math.floor(Math.random()*40)+30}}}).filter(ye=>ye.prompt&&ye.options.length===4).sort(()=>Math.random()-.5).slice(0,50).map(ye=>({...ye,mascot:xe[Math.floor(Math.random()*xe.length)]}));t(ke),w(!1)}catch(J){console.error("Failed to load questions:",J),w(!1)}},Qe=se=>se===1||se===3||se===7||se===10||se===15||se===20||se>20&&se%5===0,Je=(se,J)=>{if(a[se]!==void 0)return;const le=e.find(ce=>ce.id===se),he=J===le.answerIndex,ve=e.findIndex(ce=>ce.id===se);if(o(ce=>({...ce,[se]:J})),P(ce=>ce+1),Y(ce=>ce+1),he){be(),l(ke=>ke+1),p(ke=>ke+2),ae.addCoins(2,"Swipe Quiz Correct Answer");const ce=ae.getCoins();if(W(ce),D(!0),setTimeout(()=>{Ne(),console.log("Coin pill ref:",F.current),F.current?ee({startRect:{left:window.innerWidth/2-50,top:window.innerHeight/2,width:100,height:100},count:2,amount:2}):console.log("Coin pill ref not available")},300),setTimeout(()=>D(!1),2e3),Lt(),Qe(ve+1)){const ke=["Awesome!","Perfect!","Brilliant!","Outstanding!","Incredible!"];b(ke[Math.floor(Math.random()*ke.length)]),T(!0),setTimeout(()=>T(!1),2e3)}}else if(pe(),l(0),I(!0),setTimeout(()=>I(!1),1500),u(ce=>{const ke=Math.max(0,ce-1);return ke===0&&setTimeout(()=>_(!0),500),ke}),c>1&&Qe(ve+1)){const ce=["Keep trying!","You got this!","Don't give up!","Stay strong!","Keep going!"];b(ce[Math.floor(Math.random()*ce.length)]),T(!0),setTimeout(()=>T(!1),2e3)}(c>1||he)&&(Ee.current=setTimeout(()=>{Me()},2500))},Lt=()=>{const se=document.createElement("div");se.style.position="fixed",se.style.inset="0",se.style.pointerEvents="none",se.style.zIndex="1000",document.body.appendChild(se);const J=["🎉","✨","⭐","🎊","🌟"];for(let le=0;le<20;le++){const he=document.createElement("div");he.textContent=J[Math.floor(Math.random()*J.length)],he.style.position="fixed",he.style.left=`${Math.random()*100}%`,he.style.top="-50px",he.style.fontSize="24px",he.style.animation=`fall ${2+Math.random()*2}s ease-out`,se.appendChild(he)}setTimeout(()=>se.remove(),4e3)},Me=()=>{if(!(A||k)&&r<e.length-1){const se=r+1,J=document.getElementById(`question-${se}`);J==null||J.scrollIntoView({behavior:"smooth"}),s(se)}},He=se=>{const J=e.findIndex(ce=>ce.id===se);if(L>=0&&E<5){j(`After ${5-E} attempts`),setTimeout(()=>j(null),2e3);return}const le=e[J],ve=[0,1,2,3].filter(ce=>ce!==le.answerIndex).sort(()=>Math.random()-.5).slice(0,2);Q({...X,[se]:ve}),G(J),P(0)},xt=se=>{const J=e.findIndex(Ie=>Ie.id===se);if(B>=0&&$<5){j(`After ${5-$} attempts`),setTimeout(()=>j(null),2e3);return}const he=e[J].answerIndex,ve=[0,0,0,0],ce=40+Math.floor(Math.random()*31);ve[he]=ce;let ke=100-ce;const ye=[0,1,2,3].filter(Ie=>Ie!==he);for(let Ie=0;Ie<ye.length-1;Ie++){const ue=Math.floor(Math.random()*(ke/2));ve[ye[Ie]]=ue,ke-=ue}ve[ye[ye.length-1]]=ke,de({...te,[se]:ve}),O(J),Y(0)},Wr=(se,J)=>{we(),x(se),C(J),y(!1),Ae()},Gr=()=>{nt("/swipe"),q(!0)},Hr=()=>{V(!0),q(!1),document.body.classList.remove("hide-bottom-nav")},Kr=()=>{const se=Object.keys(a).filter(J=>{const le=e.find(he=>he.id===J);return a[J]===(le==null?void 0:le.answerIndex)}).length;return d.useEffect(()=>{const J=ae.getCoins();W(J)},[]),d.useEffect(()=>{document.body.classList.add("hide-bottom-nav"),m>0&&F.current&&!oe&&(me(!0),setTimeout(()=>{ee({startRect:{left:window.innerWidth/2-50,top:window.innerHeight/2,width:100,height:100},count:Math.min(m,10),amount:m}),Ne()},100));const J=setTimeout(()=>{const le=ae.getCoins();W(le),we(),U(!1),V(!1),y(!0),document.body.classList.remove("hide-bottom-nav")},2e3);return()=>{clearTimeout(J),document.body.classList.remove("hide-bottom-nav")}},[m,oe]),n.jsxs("div",{className:"fixed inset-0 bg-gray-900 z-50",children:[ne&&n.jsx(or,{startRect:ne.startRect,targetRef:F,count:ne.count,onDone:()=>{ee(null)}}),n.jsx("div",{className:"fixed top-12 right-4 z-50",children:n.jsxs("div",{ref:F,className:"flex items-center gap-1 bg-yellow-500/20 px-3 py-1.5 rounded-full backdrop-blur",children:[n.jsx("span",{children:"🪙"}),n.jsx("span",{className:"font-bold text-yellow-400",children:re})]})}),n.jsx("div",{className:"flex items-center justify-center p-4 h-full",children:n.jsxs("div",{className:"bg-gray-800 rounded-3xl p-8 max-w-md w-full text-center border border-gray-700",children:[n.jsx("div",{className:"text-5xl mb-4",children:"🎉"}),n.jsx("h2",{className:"text-2xl font-bold text-white mb-4",children:"Session Complete!"}),n.jsxs("div",{className:"space-y-4",children:[n.jsxs("div",{className:"bg-gray-700/50 rounded-xl p-4",children:[n.jsx("div",{className:"text-gray-400 text-sm mb-1",children:"Questions Answered"}),n.jsx("div",{className:"text-2xl font-bold text-white",children:Object.keys(a).length})]}),n.jsxs("div",{className:"bg-gray-700/50 rounded-xl p-4",children:[n.jsx("div",{className:"text-gray-400 text-sm mb-1",children:"Correct Answers"}),n.jsx("div",{className:"text-2xl font-bold text-green-400",children:se})]}),n.jsxs("div",{className:"bg-gray-700/50 rounded-xl p-4",children:[n.jsx("div",{className:"text-gray-400 text-sm mb-1",children:"Coins Earned"}),n.jsxs("div",{className:"text-2xl font-bold text-yellow-400",children:["🪙 ",m]})]}),n.jsxs("div",{className:"bg-gray-700/50 rounded-xl p-4",children:[n.jsx("div",{className:"text-gray-400 text-sm mb-1",children:"Lives Remaining"}),n.jsx("div",{className:"text-2xl font-bold text-red-400",children:Array.from({length:5},(J,le)=>n.jsx("span",{className:le<c?"":"opacity-30",children:"❤️"},le))})]})]})]})})]})};return H?n.jsx(Kr,{}):S?n.jsx(pv,{onSelect:Wr}):f?n.jsx("div",{className:"h-screen bg-gray-900 flex items-center justify-center",children:n.jsx("div",{className:"text-white",children:"Loading questions..."})}):n.jsxs("div",{className:"h-screen bg-gray-900 relative",children:[ne&&n.jsx(or,{startRect:ne.startRect,targetRef:F,count:ne.count,onDone:()=>{const se=ae.getCoins();W(se),ee(null)}}),n.jsxs("div",{className:"fixed top-0 left-0 right-0 bg-gray-900/95 backdrop-blur z-50 border-b border-gray-800 pt-12",children:[n.jsxs("div",{className:"flex items-center justify-between px-4 py-3",children:[n.jsx("button",{onClick:Gr,className:"inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/15 rounded-xl text-white text-sm font-medium hover:bg-white/15 transition-all",children:"← Back"}),n.jsxs("div",{className:"flex items-center gap-4",children:[n.jsxs("div",{ref:F,className:"flex items-center gap-1 bg-yellow-500/20 px-3 py-1 rounded-full",children:[n.jsx("span",{children:"🪙"}),n.jsx("span",{className:"font-bold text-yellow-400",children:re})]}),n.jsxs("div",{className:"flex items-center gap-1 bg-orange-500/20 px-3 py-1 rounded-full",children:[n.jsx("span",{children:"🔥"}),n.jsx("span",{className:"font-bold text-orange-400",children:i})]})]}),n.jsx("div",{className:"flex items-center gap-1",children:Array.from({length:5},(se,J)=>n.jsx("span",{className:`${J<c?"text-red-500":"text-gray-600 opacity-30"} ${M&&J===c-1?"animate-heartLoss":""}`,children:"❤️"},J))})]}),N&&n.jsx("div",{className:"text-center py-1",children:n.jsx("span",{className:"text-xs text-gray-400",children:N})})]}),z&&n.jsx("div",{className:"fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[100] pointer-events-none",children:n.jsx("div",{className:"bg-yellow-500 text-white px-6 py-3 rounded-full font-bold text-2xl animate-coinFloat",children:"+2 🪙"})}),n.jsx("div",{ref:Se,className:"h-full overflow-y-hidden snap-y snap-mandatory pt-32",style:{scrollBehavior:"smooth",overscrollBehavior:"none",WebkitOverflowScrolling:"touch",touchAction:"none"},children:e.map((se,J)=>n.jsx(gv,{question:se,index:J,answered:a[se.id],onAnswer:le=>Je(se.id,le),onFiftyFifty:()=>He(se.id),onAudience:()=>xt(se.id),eliminated:X[se.id]||[],audiencePercentages:te[se.id],canUseFiftyFifty:L<0||E>=5,canUseAudience:B<0||$>=5},se.id))}),k&&n.jsx("div",{className:"fixed inset-0 bg-black/75 flex items-center justify-center z-50 p-4",children:n.jsxs("div",{className:"bg-gray-800 rounded-3xl p-6 max-w-sm w-full text-center border border-gray-700",children:[n.jsx("div",{className:"text-5xl mb-4",children:"😔"}),n.jsx("h3",{className:"text-xl font-bold mb-2 text-white",children:"No Lives Left!"}),n.jsx("p",{className:"text-gray-400 mb-6",children:"Sorry, you have no lives left to continue swiping."}),n.jsx("button",{onClick:()=>{V(!0),document.body.classList.remove("hide-bottom-nav")},className:"w-full bg-gradient-to-r from-blue-600 to-purple-600 py-3 rounded-xl text-white font-medium",children:"View Results"})]})}),A&&n.jsx("div",{className:"fixed inset-0 bg-black/75 flex items-center justify-center z-50 p-4",children:n.jsxs("div",{className:"bg-gray-800 rounded-3xl p-6 max-w-sm w-full text-center border border-gray-700",children:[n.jsx("div",{className:"text-4xl mb-4",children:"🤔"}),n.jsx("h3",{className:"text-xl font-bold mb-2 text-white",children:"Leave Swipe Mode?"}),n.jsx("p",{className:"text-gray-400 mb-6",children:"Your progress will be saved"}),n.jsxs("div",{className:"flex gap-3",children:[n.jsx("button",{onClick:()=>q(!1),className:"flex-1 bg-blue-600 hover:bg-blue-700 py-3 rounded-xl font-medium text-white",children:"Stay"}),n.jsx("button",{onClick:Hr,className:"flex-1 bg-gray-700 hover:bg-gray-600 py-3 rounded-xl font-medium text-white",children:"Leave"})]})]})}),R&&n.jsx("div",{className:"fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50",children:n.jsx("div",{className:"bg-gradient-to-br from-purple-600 to-pink-600 px-8 py-6 rounded-3xl text-white font-bold text-2xl shadow-2xl animate-fadeIn",children:h})}),g&&n.jsx("div",{className:"fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 pointer-events-none",children:n.jsx("div",{className:"bg-gray-800/90 px-6 py-3 rounded-full text-white font-bold animate-fadeIn",children:g})}),n.jsx("style",{jsx:!0,children:`
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
      `})]})},gv=({question:e,index:t,answered:r,onAnswer:s,onFiftyFifty:a,onAudience:o,eliminated:i,audiencePercentages:l,canUseFiftyFifty:c,canUseAudience:u})=>{const m=p=>{switch(p){case"easy":return"from-green-500 to-green-600";case"hard":return"from-red-500 to-red-600";default:return"from-yellow-500 to-yellow-600"}};return n.jsxs("div",{id:`question-${t}`,className:"h-screen snap-start flex flex-col px-4 pb-4",style:{paddingTop:"150px"},children:[n.jsx("div",{className:"flex justify-center py-2",children:n.jsx("span",{className:"text-8xl",style:{animation:"float 3s ease-in-out infinite"},children:e.mascot})}),n.jsxs("div",{className:"flex-1 flex flex-col justify-start max-w-md mx-auto w-full",children:[n.jsxs("div",{className:`bg-gradient-to-br ${m(e.difficulty)} p-6 rounded-3xl mb-4`,children:[n.jsxs("div",{className:"text-white/80 text-sm mb-2",children:["Question ",t+1]}),n.jsx("h2",{className:"text-2xl font-bold text-white",children:e.prompt})]}),n.jsx("div",{className:"space-y-3 mb-3",children:e.options.map((p,f)=>{const w=r!==void 0,g=r===f,j=f===e.answerIndex,S=i.includes(f);let y="w-full p-4 rounded-2xl font-medium transition-all ";return S?y+="bg-gray-700/30 text-gray-500/50 cursor-not-allowed":w?j?y+="bg-green-500 text-white":g?y+="bg-red-500 text-white":y+="bg-gray-700 text-gray-400":y+="bg-gray-800 text-white hover:bg-gray-700",n.jsx("button",{onClick:()=>!w&&!S&&s(f),disabled:w||S,className:y,children:n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsx("span",{className:"text-lg",children:["🅰️","🅱️","🅲️","🅳️"][f]}),n.jsx("span",{className:"flex-1 text-left",children:p}),l&&l[f]>0&&n.jsxs("span",{className:"bg-purple-600/20 px-2 py-1 rounded-full text-xs",children:[l[f],"%"]}),w&&j&&n.jsx("span",{children:"✓"})]})},f)})}),!r&&n.jsxs("div",{className:"flex justify-center gap-3 mb-3",children:[n.jsx("button",{onClick:a,disabled:!c,className:`px-4 py-2 rounded-lg font-medium text-sm ${c?"bg-orange-600 text-white":"bg-gray-700 text-gray-500"}`,children:"⚡ 50:50"}),n.jsx("button",{onClick:o,disabled:!u,className:`px-4 py-2 rounded-lg font-medium text-sm ${u?"bg-purple-600 text-white":"bg-gray-700 text-gray-500"}`,children:"👥 Audience"})]}),n.jsx("div",{className:"text-center mt-3 mb-2",children:n.jsxs("div",{className:"text-gray-500 text-xs",children:[e.stats.views.toLocaleString()," views • ",e.stats.attempted.toLocaleString()," attempted • ",e.stats.correctRate,"% correct"]})}),n.jsx("div",{className:"text-center mt-12 mb-4",children:n.jsx("div",{className:"text-gray-500 text-sm animate-bounce",children:"Swipe up for next"})})]})]})};function vv(){const[e]=Ef(),t=Te();return Xe(),d.useEffect(()=>{const r=e.get("category"),s=e.get("difficulty"),a=e.get("from")==="quest",o=["general-knowledge","fun-facts","science","history","geography","computer","artificial-intelligence","sports","mixed"],i=["easy","medium","hard"],l=r==="random"?o[Math.floor(Math.random()*o.length)]:r||"mixed",c=s==="random"?i[Math.floor(Math.random()*i.length)]:s||"medium";console.log("QuizPlay - fromQuest:",a),console.log("QuizPlay - returnPath will be:",a?"/quests":"/"),t(`/quiz/${l}`,{replace:!0,state:{mode:"quiz",difficulty:c,count:5,timer:{type:"per_q",seconds:45},fromQuest:a,returnPath:a?"/profile/quests":"/"}})},[e,t]),n.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh",background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",color:"white",fontSize:"20px"},children:"Starting your quiz..."})}function yv(){const[e]=Ef(),t=Te();return d.useEffect(()=>{const r=e.get("questions")||"15",s=e.get("difficulty")||"easy",a=e.get("category")||"mixed",o=e.get("from")==="quest",i=["general-knowledge","fun-facts","science","history","geography","computer","artificial-intelligence","sports"],l=a==="random"?i[Math.floor(Math.random()*i.length)]:a;console.log("PracticeStart - Launching practice mode:",{category:l,difficulty:s,questions:r,fromQuest:o}),t(`/quiz/${l}`,{replace:!0,state:{mode:"practice",difficulty:s,count:parseInt(r),timer:{type:"off",seconds:0},fromQuest:o,questType:o?"practiceQuestions":null,returnPath:o?"/profile/quests":"/"}})},[e,t]),n.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh",background:"linear-gradient(135deg, #10B981 0%, #059669 100%)",color:"white",fontSize:"20px"},children:"Loading practice questions..."})}/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bv=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),wv=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,r,s)=>s?s.toUpperCase():r.toLowerCase()),Yd=e=>{const t=wv(e);return t.charAt(0).toUpperCase()+t.slice(1)},zf=(...e)=>e.filter((t,r,s)=>!!t&&t.trim()!==""&&s.indexOf(t)===r).join(" ").trim(),jv=e=>{for(const t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0};/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Nv={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kv=d.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:r=2,absoluteStrokeWidth:s,className:a="",children:o,iconNode:i,...l},c)=>d.createElement("svg",{ref:c,...Nv,width:t,height:t,stroke:e,strokeWidth:s?Number(r)*24/Number(t):r,className:zf("lucide",a),...!o&&!jv(l)&&{"aria-hidden":"true"},...l},[...i.map(([u,m])=>d.createElement(u,m)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qr=(e,t)=>{const r=d.forwardRef(({className:s,...a},o)=>d.createElement(kv,{ref:o,iconNode:t,className:zf(`lucide-${bv(Yd(e))}`,`lucide-${e}`,s),...a}));return r.displayName=Yd(e),r};/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sv=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],Cv=Qr("chevron-left",Sv);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ev=[["rect",{x:"3",y:"8",width:"18",height:"4",rx:"1",key:"bkv52"}],["path",{d:"M12 8v13",key:"1c76mn"}],["path",{d:"M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7",key:"6wjy6b"}],["path",{d:"M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5",key:"1ihvrl"}]],Tv=Qr("gift",Ev);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pv=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],Rv=Qr("lock",Pv);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _v=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]],Av=Qr("shield",_v);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iv=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],Qd=Qr("sparkles",Iv);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lv=[["line",{x1:"10",x2:"14",y1:"2",y2:"2",key:"14vaq8"}],["line",{x1:"12",x2:"15",y1:"14",y2:"11",key:"17fdiu"}],["circle",{cx:"12",cy:"14",r:"8",key:"1e1u0o"}]],Dv=Qr("timer",Lv);function zv({show:e,onClose:t,coins:r,onNavigateToPlay:s}){return e?n.jsxs("div",{className:"fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4",onClick:a=>{a.target===a.currentTarget&&t()},children:[n.jsxs("div",{className:"bg-gray-800 rounded-3xl p-6 w-full max-w-md border border-gray-700 relative overflow-hidden",onClick:a=>a.stopPropagation(),children:[n.jsx("div",{className:"absolute inset-0 opacity-10",children:n.jsx("div",{className:"h-full bg-gradient-to-br from-yellow-400 to-orange-500"})}),n.jsxs("div",{className:"relative",children:[n.jsxs("div",{className:"flex items-center justify-between mb-6",children:[n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsx("div",{className:"text-5xl",style:{animation:"coinRotate 2s linear infinite"},children:"🪙"}),n.jsxs("div",{children:[n.jsx("h3",{className:"text-2xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent",children:"Your Treasure"}),n.jsxs("p",{className:"text-3xl font-bold text-white mt-1",children:[r," Coins"]})]})]}),n.jsx("button",{onClick:t,className:"w-8 h-8 rounded-lg bg-white/5 border border-gray-600 grid place-items-center hover:bg-white/10 transition",children:"✕"})]}),n.jsxs("div",{className:"mb-6",children:[n.jsx("h4",{className:"text-sm font-medium text-gray-400 mb-3",children:"Ways to Earn"}),n.jsxs("div",{className:"space-y-3",children:[n.jsx("div",{className:"p-4 rounded-xl bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 hover:scale-[1.02] transition-transform",children:n.jsxs("div",{className:"flex items-center justify-between",children:[n.jsxs("div",{children:[n.jsxs("div",{className:"font-medium flex items-center gap-2",children:[n.jsx("span",{className:"text-2xl",children:"✅"}),"Complete Quizzes"]}),n.jsx("div",{className:"text-xs text-gray-400 mt-1",children:"+5 coins per correct answer"})]}),n.jsx("div",{className:"text-green-400 font-bold",children:"+5"})]})}),n.jsx("div",{className:"p-4 rounded-xl bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 hover:scale-[1.02] transition-transform",children:n.jsxs("div",{className:"flex items-center justify-between",children:[n.jsxs("div",{children:[n.jsxs("div",{className:"font-medium flex items-center gap-2",children:[n.jsx("span",{className:"text-2xl",children:"🎯"}),"Daily Challenge"]}),n.jsx("div",{className:"text-xs text-gray-400 mt-1",children:"Complete daily for bonus"})]}),n.jsx("div",{className:"text-blue-400 font-bold",children:"+5"})]})}),n.jsx("div",{className:"p-4 rounded-xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 hover:scale-[1.02] transition-transform",children:n.jsxs("div",{className:"flex items-center justify-between",children:[n.jsxs("div",{children:[n.jsxs("div",{className:"font-medium flex items-center gap-2",children:[n.jsx("span",{className:"text-2xl",children:"🎰"}),"Spin & Play"]}),n.jsx("div",{className:"text-xs text-gray-400 mt-1",children:"Test your luck!"})]}),n.jsx("div",{className:"text-purple-400 font-bold",children:"+50"})]})}),n.jsx("div",{className:"p-4 rounded-xl bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/20 hover:scale-[1.02] transition-transform",children:n.jsxs("div",{className:"flex items-center justify-between",children:[n.jsxs("div",{children:[n.jsxs("div",{className:"font-medium flex items-center gap-2",children:[n.jsx("span",{className:"text-2xl",children:"🏆"}),"Achievements"]}),n.jsx("div",{className:"text-xs text-gray-400 mt-1",children:"Unlock special rewards"})]}),n.jsx("div",{className:"text-orange-400 font-bold",children:"+???"})]})})]})]}),n.jsxs("div",{className:"mb-6",children:[n.jsxs("div",{className:"flex justify-between text-xs text-gray-400 mb-2",children:[n.jsx("span",{children:"Next reward"}),n.jsxs("span",{children:[100-r%100," coins to go"]})]}),n.jsx("div",{className:"h-2 bg-white/10 rounded-full overflow-hidden",children:n.jsx("div",{className:"h-full bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full transition-all",style:{width:`${r%100}%`}})})]}),n.jsx("button",{onClick:s,className:"w-full py-3 rounded-xl bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-bold hover:scale-[1.02] transition-transform shadow-lg",children:"Start Earning Now! 🚀"})]})]}),n.jsx("style",{children:`
        @keyframes coinRotate {
          from { transform: rotateY(0deg); }
          to { transform: rotateY(360deg); }
        }
      `})]}):null}function Mv(){const e=Te();d.useEffect(()=>(document.body.classList.add("hide-bottom-nav"),()=>{document.body.classList.remove("hide-bottom-nav")}),[]);const[t]=tt("/sounds/correct.mp3",{volume:.6}),[r]=tt("/sounds/coin.mp3",{volume:.7}),[s]=tt("/sounds/click.mp3",{volume:.5}),[a]=tt("/sounds/wrong.mp3",{volume:.5}),o=d.useRef(null),i=d.useRef({}),[l,c]=d.useState(!1),[u,m]=d.useState(ae.getCoins()),[p,f]=d.useState(null),[w,g]=d.useState([{id:"bronze",name:"Bronze",opened:!1,reward:null,minCoins:5,maxCoins:15,color:"from-amber-600 to-amber-700",glow:"shadow-amber-500/30",miniGame:"tap",tapsRequired:3,tapsCount:0},{id:"silver",name:"Silver",opened:!1,reward:null,minCoins:20,maxCoins:40,color:"from-gray-400 to-gray-500",glow:"shadow-gray-400/30",miniGame:"swipe",swipePattern:null,swipeComplete:!1},{id:"gold",name:"Gold",opened:!1,reward:null,minCoins:50,maxCoins:100,color:"from-yellow-400 to-yellow-500",glow:"shadow-yellow-400/30",xpChance:.7,miniGame:"hold",holdDuration:2,holdProgress:0,isHolding:!1}]),[j,S]=d.useState(!1),[y,v]=d.useState(0),[x,N]=d.useState(null),[C,R]=d.useState(""),[T,h]=d.useState(null),[b,k]=d.useState(null),[_,A]=d.useState(null);d.useEffect(()=>{q();const E=setInterval(H,1e3);return()=>clearInterval(E)},[]);const q=()=>{const E=[{id:"bronze",name:"Bronze",opened:!1,reward:null,minCoins:5,maxCoins:15,color:"from-amber-600 to-amber-700",glow:"shadow-amber-500/30",miniGame:"tap",tapsRequired:3,tapsCount:0},{id:"silver",name:"Silver",opened:!1,reward:null,minCoins:20,maxCoins:40,color:"from-gray-400 to-gray-500",glow:"shadow-gray-400/30",miniGame:"tap",tapsRequired:3,tapsCount:0},{id:"gold",name:"Gold",opened:!1,reward:null,minCoins:50,maxCoins:100,color:"from-yellow-400 to-yellow-500",glow:"shadow-yellow-400/30",xpChance:.7,miniGame:"tap",tapsRequired:3,tapsCount:0}];g(E),v(0);const P=new Date().toDateString();N(P),ae.safeSet("surprise_zone_data",{date:P,boxes:E,totalEarned:0})},H=()=>{const E=new Date,P=new Date(E);P.setDate(P.getDate()+1),P.setHours(0,0,0,0);const $=P-E,Y=Math.floor($/(1e3*60*60)),L=Math.floor($%(1e3*60*60)/(1e3*60)),G=Math.floor($%(1e3*60)/1e3);R(`${Y.toString().padStart(2,"0")}:${L.toString().padStart(2,"0")}:${G.toString().padStart(2,"0")}`)};d.useEffect(()=>{const E=setInterval(()=>{const P=ae.getCoins();P!==u&&m(P)},100);return()=>clearInterval(E)},[u]);const V=(E,P)=>{if(j)return;const $=w.findIndex(L=>L.id===E),Y=w[$];Y.opened||(k(E),Y.miniGame==="tap"&&P==="tap"?K($):Y.miniGame==="swipe"&&P==="swipe"?U($):Y.miniGame==="hold"&&(P==="holdStart"?M($):P==="holdEnd"&&I($)))},K=E=>{const P=w[E],$=P.tapsCount+1;s();const Y=[...w];Y[E]={...P,tapsCount:$},g(Y),$>=P.tapsRequired&&setTimeout(()=>z(P.id),300)},U=E=>{const P=w[E];s();const $=[...w];$[E]={...P,swipeComplete:!0},g($),setTimeout(()=>z(P.id),300)},M=E=>{const P=w[E],$=[...w];$[E]={...P,isHolding:!0,holdProgress:0},g($);let Y=0;const L=setInterval(()=>{Y+=.05;const G=[...w],B=G[E];Y>=P.holdDuration?(clearInterval(L),G[E]={...B,holdProgress:P.holdDuration,isHolding:!1},g(G),z(P.id)):B.isHolding?(G[E]={...B,holdProgress:Y},g(G)):clearInterval(L)},50);A(L)},I=E=>{_&&(clearInterval(_),A(null));const P=w[E];if(P.holdProgress<P.holdDuration){a();const $=[...w];$[E]={...P,isHolding:!1,holdProgress:0},g($)}},z=async E=>{if(j)return;const P=w.findIndex(O=>O.id===E),$=w[P];if($.opened)return;S(!0);const Y=Math.floor(Math.random()*($.maxCoins-$.minCoins+1))+$.minCoins,G=$.xpChance&&Math.random()<$.xpChance?Math.floor(Math.random()*50)+25:0;if(h({boxId:E,coins:Y,xpBonus:G}),t(),await new Promise(O=>setTimeout(O,600)),i.current[E]&&o.current){const O=i.current[E].getBoundingClientRect();r(),f({startRect:O,count:Math.min(Y,15),amount:Y,xpBonus:G})}const B=[...w];B[P]={...$,opened:!0,reward:{coins:Y,xpBonus:G}},g(B),v(O=>O+Y),ae.safeSet("surprise_zone_data",{date:x,boxes:B,totalEarned:y+Y}),setTimeout(()=>{h(null),k(null)},2e3),S(!1)},D=w.every(E=>E.opened);return n.jsxs("div",{className:"min-h-screen bg-black text-white",children:[n.jsx("div",{className:"fixed inset-0 bg-gradient-to-b from-gray-900/50 to-black pointer-events-none"}),p&&n.jsx(or,{startRect:p.startRect,targetRef:o,count:p.count,onDone:()=>{ae.addCoins(p.amount,"Lucky Box"),p.xpBonus>0&&ae.addXP(p.xpBonus),m(ae.getCoins()),f(null)}}),T&&n.jsx("div",{className:"fixed inset-0 z-50 pointer-events-none flex items-center justify-center",children:n.jsx("div",{className:"animate-bounce",children:n.jsx("div",{className:"bg-black/90 backdrop-blur-xl rounded-3xl p-6 border border-white/20",children:n.jsxs("div",{className:"text-center",children:[n.jsx(Qd,{className:"w-12 h-12 text-yellow-400 mx-auto mb-3"}),n.jsxs("p",{className:"text-3xl font-bold text-yellow-400",children:["+",T.coins]}),n.jsx("p",{className:"text-sm text-gray-400 mt-1",children:"coins"}),T.xpBonus>0&&n.jsxs("p",{className:"text-lg text-blue-400 mt-2",children:["+",T.xpBonus," XP"]})]})})})}),n.jsxs("div",{className:"relative z-10 px-6 pt-14 pb-8",children:[n.jsxs("div",{className:"flex items-center justify-between mb-6",children:[n.jsx("button",{onClick:()=>e("/"),className:"w-10 h-10 rounded-full bg-white/10 backdrop-blur-xl flex items-center justify-center hover:bg-white/20 transition-all active:scale-95",children:n.jsx(Cv,{className:"w-5 h-5"})}),n.jsxs("div",{className:"text-center",children:[n.jsx("p",{className:"text-sm text-gray-400 mb-1",children:"Daily Surprise"}),n.jsx("h1",{className:"text-2xl font-semibold",children:"Lucky Boxes"})]}),n.jsxs("button",{ref:o,onClick:()=>c(!0),className:"px-3 py-1.5 rounded-full bg-yellow-500/20 backdrop-blur-xl flex items-center gap-2 hover:bg-yellow-500/30 transition-all border border-yellow-500/30",children:[n.jsx("span",{className:"text-lg",children:"🪙"}),n.jsx("span",{className:"font-bold text-yellow-400",children:u})]})]}),n.jsx("div",{className:"mx-auto max-w-sm mb-8",children:n.jsx("div",{className:"bg-white/5 backdrop-blur-xl rounded-2xl p-4 border border-white/10",children:n.jsxs("div",{className:"flex items-center justify-between",children:[n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx(Dv,{className:"w-4 h-4 text-gray-400"}),n.jsxs("div",{children:[n.jsx("p",{className:"text-xs text-gray-400",children:"Next reset in"}),n.jsx("p",{className:"text-lg font-mono font-semibold",children:C||"00:00:00"})]})]}),n.jsxs("div",{className:"text-right",children:[n.jsx("p",{className:"text-xs text-gray-400",children:"Earned today"}),n.jsxs("p",{className:"text-lg font-semibold text-yellow-400",children:[y," coins"]})]})]})})}),!D&&n.jsx("div",{className:"text-center mb-6",children:n.jsx("p",{className:"text-sm text-gray-500",children:"Complete mini-games to unlock rewards!"})})]}),n.jsxs("div",{className:"relative z-10 px-6 pb-8",children:[n.jsx("div",{className:"max-w-sm mx-auto space-y-6",children:w.map((E,P)=>{var $,Y;return n.jsx("div",{ref:L=>i.current[E.id]=L,className:"relative",style:{animation:`fadeInUp 0.5s ease-out ${P*100}ms both`},children:n.jsxs("button",{onClick:()=>V(E.id,"tap"),onMouseDown:()=>E.miniGame==="hold"&&V(E.id,"holdStart"),onMouseUp:()=>E.miniGame==="hold"&&V(E.id,"holdEnd"),onMouseLeave:()=>E.miniGame==="hold"&&V(E.id,"holdEnd"),onTouchStart:()=>E.miniGame==="hold"&&V(E.id,"holdStart"),onTouchEnd:()=>E.miniGame==="hold"&&V(E.id,"holdEnd"),disabled:E.opened||j,className:`
                  w-full relative overflow-hidden rounded-3xl p-8
                  transition-all duration-500 transform
                  ${E.opened?"bg-white/5 scale-95 opacity-60":`bg-gradient-to-br ${E.color} hover:scale-[1.02] active:scale-[0.98] shadow-2xl ${E.glow}`}
                  ${j&&!E.opened?"animate-pulse":""}
                  ${!E.opened&&E.id==="bronze"&&E.tapsCount===0?"animate-pulse ring-2 ring-yellow-400/50":""}
                  disabled:cursor-not-allowed
                `,children:[!E.opened&&b===E.id&&n.jsxs("div",{className:"absolute inset-0 pointer-events-none",children:[E.miniGame==="tap"&&n.jsx("div",{className:"absolute top-2 right-2 flex gap-1",children:[...Array(E.tapsRequired)].map((L,G)=>n.jsx("div",{className:`w-2 h-2 rounded-full ${G<E.tapsCount?"bg-white":"bg-white/30"}`},G))}),E.miniGame==="hold"&&E.isHolding&&n.jsx("div",{className:"absolute inset-x-0 bottom-0 h-1 bg-white/20",children:n.jsx("div",{className:"h-full bg-white transition-all",style:{width:`${E.holdProgress/E.holdDuration*100}%`}})})]}),!E.opened&&n.jsx("div",{className:"absolute inset-0 opacity-10",children:n.jsx("div",{className:"absolute inset-0",style:{backgroundImage:`radial-gradient(circle at 20% 50%, white 1px, transparent 1px),
                                       radial-gradient(circle at 80% 80%, white 1px, transparent 1px),
                                       radial-gradient(circle at 40% 80%, white 1px, transparent 1px)`,backgroundSize:"50px 50px"}})}),n.jsxs("div",{className:"relative z-10 flex items-center justify-between",children:[n.jsxs("div",{className:"text-left",children:[n.jsxs("p",{className:`text-sm font-medium ${E.opened?"text-gray-400":"text-white/80"}`,children:[E.name," Box"]}),n.jsx("p",{className:`text-2xl font-bold mt-1 ${E.opened?"text-gray-300":"text-white"}`,children:E.opened?n.jsxs("span",{className:"flex items-center gap-2",children:[n.jsxs("span",{className:"text-yellow-400",children:["+",($=E.reward)==null?void 0:$.coins]}),n.jsx("span",{className:"text-sm",children:"coins"}),((Y=E.reward)==null?void 0:Y.xpBonus)>0&&n.jsxs("span",{className:"text-sm text-blue-400 ml-2",children:["+",E.reward.xpBonus," XP"]})]}):n.jsxs("span",{className:"flex items-center gap-2",children:[n.jsxs("span",{children:[E.minCoins,"-",E.maxCoins]}),n.jsx("span",{className:"text-sm",children:"coins"})]})}),!E.opened&&n.jsxs("p",{className:"text-xs text-white/50 mt-1",children:[E.miniGame==="tap"&&`Tap ${E.tapsRequired} times`,E.miniGame==="hold"&&`Hold for ${E.holdDuration} seconds`]})]}),n.jsx("div",{className:`
                    w-16 h-16 rounded-2xl flex items-center justify-center
                    ${E.opened?"bg-white/10":"bg-white/20 backdrop-blur-xl"}
                    transition-all duration-300
                  `,children:E.opened?n.jsx(Qd,{className:"w-8 h-8 text-yellow-400"}):b===E.id?n.jsx(Av,{className:"w-8 h-8 text-white animate-pulse"}):n.jsx(Tv,{className:`w-8 h-8 text-white ${j?"":"animate-pulse"}`})})]})]})},E.id)})}),D&&n.jsxs("div",{className:"mt-12 text-center space-y-4",children:[n.jsxs("div",{className:"inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 backdrop-blur-xl border border-white/10",children:[n.jsx(Rv,{className:"w-4 h-4 text-gray-400"}),n.jsx("p",{className:"text-sm text-gray-400",children:"All boxes opened! Come back tomorrow"})]}),n.jsx("div",{className:"text-center",children:n.jsxs("p",{className:"text-2xl font-bold text-yellow-400",children:["🎉 ",y," coins earned!"]})})]})]}),n.jsx(zv,{show:l,onClose:()=>c(!1),coins:u,onNavigateToPlay:()=>{c(!1),e("/play")}}),n.jsx("style",{jsx:!0,children:`
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
      `})]})}function Ov(){var w;const e=Te(),[t,r]=d.useState(""),[s,a]=d.useState(null),{player:o,levelProgress:i}=gn(),c=(()=>{const g=JSON.parse(localStorage.getItem("currentUser")||"{}");return((g.phone?JSON.parse(localStorage.getItem(`user_profile_${g.phone}`)||"{}"):{}).name||g.username||(o==null?void 0:o.name)||"Player").split(" ")[0]})(),u=()=>{if((s==null?void 0:s.todayCoins)!==void 0)return s.todayCoins;try{const g=JSON.parse(localStorage.getItem("qp_stats")||'{"sessions":[]}'),j=new Date().setHours(0,0,0,0);return g.sessions.filter(y=>new Date(y.timestamp).setHours(0,0,0,0)===j).reduce((y,v)=>y+(v.earnedCoins||0),0)}catch{return 0}},m={name:c,rank:(s==null?void 0:s.rank)||23,streak:(s==null?void 0:s.streak)||(o==null?void 0:o.currentStreak)||0,todayQuizzes:((w=s==null?void 0:s.daily)==null?void 0:w.quizzesPlayed)||3,todayCoins:u()};d.useEffect(()=>{const g=new Date().getHours();g<12?r("Good morning"):g<17?r("Good afternoon"):r("Good evening")},[]),d.useEffect(()=>{const g=()=>{const j=Ke.getCurrentUser();if(j!=null&&j.phone){ae.initializeUserData(j.phone);const S=ae.getTodaySummary(j.phone);a(S)}};return g(),window.addEventListener("focus",g),()=>window.removeEventListener("focus",g)},[]);const p=`
    rounded-3xl p-5 text-left text-white 
    transition-all duration-300 ease-out
    active:scale-[0.97] hover:scale-[1.02]
    shadow-[0_8px_32px_rgba(0,0,0,0.3)]
    hover:shadow-[0_12px_48px_rgba(0,0,0,0.4)]
    relative overflow-hidden
    before:absolute before:inset-0 before:bg-white/5 before:opacity-0 
    hover:before:opacity-100 before:transition-opacity before:duration-300
  `,f=s!=null&&s.xpProgress?s.xpProgress/(s.xpNeeded||100)*100:i.required>0?i.current/i.required*100:0;return n.jsxs("div",{className:"min-h-full bg-[#0B0C10] text-white pt-10 px-3",children:[n.jsxs("div",{className:"mb-6",children:[n.jsxs("div",{className:"flex items-center justify-between mb-4",children:[n.jsx("div",{children:n.jsxs("h1",{className:"text-2xl font-bold px-3",children:[t,", ",c," 👋"]})}),n.jsx("button",{onClick:()=>e("/profile/settings"),className:"w-10 h-10 rounded-2xl bg-white/10 border border-white/20 grid place-items-center hover:bg-white/20 transition",children:n.jsx("span",{className:"text-xl",children:"⚙️"})})]}),n.jsxs("div",{className:"rounded-3xl bg-gradient-to-r from-slate-800/50 to-slate-900/50 border border-white/10 p-4 backdrop-blur-sm",children:[n.jsxs("div",{className:"flex items-center gap-4 mb-3",children:[n.jsx("div",{className:"w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 grid place-items-center text-2xl font-bold",children:c[0].toUpperCase()}),n.jsxs("div",{className:"flex-1",children:[n.jsx("div",{className:"text-lg font-semibold",children:c}),n.jsxs("div",{className:"text-white/60 text-sm",children:["Level ",(s==null?void 0:s.level)||o.level||1]})]}),n.jsxs("div",{className:"text-right",children:[n.jsxs("div",{className:"text-yellow-400 font-bold text-lg",children:[(s==null?void 0:s.totalCoins)||o.coins||0," 🪙"]}),n.jsxs("div",{className:"text-white/60 text-sm",children:["Rank #",m.rank]})]})]}),n.jsxs("div",{className:"mb-3",children:[n.jsxs("div",{className:"flex justify-between text-xs text-white/60 mb-1",children:[n.jsx("span",{children:"XP Progress"}),n.jsxs("span",{children:[(s==null?void 0:s.xpProgress)||i.current,"/",(s==null?void 0:s.xpNeeded)||i.required]})]}),n.jsx("div",{className:"h-2 bg-white/10 rounded-full overflow-hidden",children:n.jsx("div",{className:"h-full bg-gradient-to-r from-blue-400 to-purple-500 rounded-full transition-all duration-1000 ease-out",style:{width:`${f}%`}})})]}),n.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[n.jsxs("div",{className:"text-center p-2 rounded-xl bg-white/5",children:[n.jsxs("div",{className:"text-orange-400 font-bold text-lg",children:["🔥 ",m.streak]}),n.jsx("div",{className:"text-white/60 text-xs",children:"Day Streak"})]}),n.jsxs("div",{className:"text-center p-2 rounded-xl bg-white/5",children:[n.jsxs("div",{className:"text-green-400 font-bold text-lg",children:["+",m.todayCoins]}),n.jsx("div",{className:"text-white/60 text-xs",children:"Today"})]})]})]})]}),n.jsxs("button",{onClick:()=>e("/profile/leaderboard"),className:`${p} w-full mb-4 bg-gradient-to-br from-[#5AA9FF] via-[#6C63FF] to-[#9C6BFF]`,children:[n.jsx("div",{className:"absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-8 translate-x-8 animate-pulse"}),n.jsxs("div",{className:"relative flex items-start justify-between",children:[n.jsxs("div",{children:[n.jsx("div",{className:"text-xs opacity-90 mb-1",children:"🏆 Rank & Coins"}),n.jsx("div",{className:"text-3xl font-extrabold tracking-tight mb-2",children:"LEADERBOARD"}),n.jsxs("div",{className:"text-xs opacity-75 flex items-center gap-2",children:[n.jsx("span",{className:"w-2 h-2 bg-green-400 rounded-full animate-pulse"}),"Weekly reset · Ends in 2d 14h"]})]}),n.jsx("div",{className:"w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm grid place-items-center text-2xl border border-white/30",children:"🏆"})]})]}),n.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[n.jsxs("button",{onClick:()=>e("/profile/history"),className:`${p} bg-gradient-to-br from-[#D19A00] to-[#C94B4B] relative`,children:[n.jsx("div",{className:"absolute top-2 right-2 w-3 h-3 bg-white/20 rounded-full"}),n.jsx("div",{className:"text-3xl mb-3",children:"📊"}),n.jsx("div",{className:"text-sm font-bold mb-1",children:"HISTORY"}),n.jsx("div",{className:"text-[11px] opacity-80",children:"Quizzes & Practice"}),n.jsxs("div",{className:"text-[10px] opacity-60 mt-1",children:["+",m.todayQuizzes," today"]})]}),n.jsxs("button",{onClick:()=>e("/profile/rewards"),className:`${p} bg-gradient-to-br from-[#2EB872] to-[#1EA07A] relative`,children:[n.jsx("div",{className:"absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full animate-bounce"}),n.jsx("div",{className:"text-3xl mb-3",children:"🎁"}),n.jsx("div",{className:"text-sm font-bold mb-1",children:"REWARDS"}),n.jsx("div",{className:"text-[11px] opacity-80",children:"Claim & Redeem"}),n.jsx("div",{className:"text-[10px] opacity-60 mt-1",children:"2 available"})]}),n.jsxs("button",{onClick:()=>e("/profile/badges"),className:`${p} bg-gradient-to-br from-[#E65C00] to-[#F9D423] relative`,children:[n.jsx("div",{className:"absolute -top-1 -right-1 w-6 h-6 bg-purple-600 rounded-full grid place-items-center text-[10px] font-bold animate-pulse",children:"NEW"}),n.jsx("div",{className:"text-3xl mb-3",children:"🏅"}),n.jsx("div",{className:"text-sm font-bold mb-1",children:"BADGES"}),n.jsx("div",{className:"text-[11px] opacity-80",children:"Collectables"}),n.jsx("div",{className:"text-[10px] opacity-60 mt-1",children:"4/15 unlocked"})]}),n.jsxs("button",{onClick:()=>e("/profile/achievements"),className:`${p} bg-gradient-to-br from-[#5D26C1] to-[#A17FE0] relative`,children:[n.jsx("div",{className:"text-3xl mb-3",children:"🎯"}),n.jsx("div",{className:"text-sm font-bold mb-1",children:"ACHIEVEMENTS"}),n.jsx("div",{className:"text-[11px] opacity-80",children:"Milestones"}),n.jsx("div",{className:"text-[10px] opacity-60 mt-1",children:"67% complete"})]})]}),n.jsxs("div",{className:"mt-4 space-y-3",children:[n.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[n.jsx("button",{onClick:()=>e("/profile/streaks"),className:`${p} bg-gradient-to-r from-orange-600/80 to-red-600/80 backdrop-blur-sm border border-orange-500/30`,children:n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsx("div",{className:"text-2xl",children:"🔥"}),n.jsxs("div",{children:[n.jsx("div",{className:"text-sm font-bold",children:"STREAK"}),n.jsxs("div",{className:"text-[11px] opacity-80",children:[m.streak," days strong"]})]})]})}),n.jsx("button",{onClick:()=>e("/profile/quests"),className:`${p} bg-gradient-to-r from-blue-600/80 to-cyan-600/80 backdrop-blur-sm border border-blue-500/30`,children:n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsx("div",{className:"text-2xl",children:"⚡"}),n.jsxs("div",{children:[n.jsx("div",{className:"text-sm font-bold",children:"QUESTS"}),n.jsxs("div",{className:"text-[11px] opacity-80",children:[(s==null?void 0:s.activeQuests)||2," active goals"]})]})]})})]}),n.jsx("button",{onClick:()=>e("/profile/settings"),className:`${p} w-full bg-gradient-to-r from-slate-700/50 to-slate-800/50 backdrop-blur-sm border border-white/10`,children:n.jsxs("div",{className:"flex items-center justify-between",children:[n.jsxs("div",{className:"flex items-center gap-4",children:[n.jsx("div",{className:"w-12 h-12 rounded-2xl bg-white/10 grid place-items-center text-xl",children:"⚙️"}),n.jsxs("div",{children:[n.jsx("div",{className:"text-sm font-bold",children:"SETTINGS"}),n.jsx("div",{className:"text-[11px] opacity-70",children:"Customize your experience"})]})]}),n.jsx("div",{className:"text-white/40",children:"→"})]})})]}),n.jsx("div",{className:"h-6"})]})}const ls="🪙",ha={global:[{rank:1,name:"Bryan Wolf",handle:"@bryan",score:43,avatar:"/profile/rank1.png",trend:"+5",streak:12,country:"🇺🇸"},{rank:2,name:"Meghan Jess…",handle:"@meghan",score:40,avatar:"/profile/rank2.png",trend:"+2",streak:8,country:"🇨🇦"},{rank:3,name:"Alex Turner",handle:"@alex",score:38,avatar:"/profile/rank3.png",trend:"±0",streak:15,country:"🇬🇧"},{rank:4,name:"Marsha Fisher",handle:"@marsha",score:36,trend:"-1",streak:5,country:"🇦🇺"},{rank:5,name:"Juanita Cormier",handle:"@juanita",score:35,trend:"+1",streak:3,country:"🇲🇽"},{rank:6,name:"You",handle:"@you",score:34,you:!0,avatar:"/profile/avatar.png",trend:"+3",streak:7,country:"🇮🇳"},{rank:7,name:"Tamara Schmidt",handle:"@tamara",score:33,trend:"-2",streak:2,country:"🇩🇪"},{rank:8,name:"Ricardo Veum",handle:"@ricardo",score:32,trend:"+1",streak:4,country:"🇧🇷"}],friends:[{rank:1,name:"You",handle:"@you",score:34,you:!0,avatar:"/profile/avatar.png",trend:"+2",streak:7,country:"🇮🇳"},{rank:2,name:"Sarah Chen",handle:"@sarah",score:31,trend:"-1",streak:4,country:"🇸🇬",friend:!0},{rank:3,name:"Mike Johnson",handle:"@mike",score:29,trend:"+3",streak:2,country:"🇺🇸",friend:!0},{rank:4,name:"Priya Sharma",handle:"@priya",score:27,trend:"±0",streak:5,country:"🇮🇳",friend:!0},{rank:5,name:"David Kim",handle:"@david",score:25,trend:"+1",streak:3,country:"🇰🇷",friend:!0},{rank:6,name:"Emma Wilson",handle:"@emma",score:23,trend:"-2",streak:1,country:"🇬🇧",friend:!0}],india:[{rank:1,name:"Rohit Sharma",handle:"@rohit",score:45,trend:"+4",streak:10,country:"🇮🇳"},{rank:2,name:"Priya Patel",handle:"@priya",score:42,trend:"+1",streak:8,country:"🇮🇳"},{rank:3,name:"You",handle:"@you",score:34,you:!0,avatar:"/profile/avatar.png",trend:"+3",streak:7,country:"🇮🇳"},{rank:4,name:"Arjun Singh",handle:"@arjun",score:32,trend:"-1",streak:5,country:"🇮🇳"},{rank:5,name:"Kavya Reddy",handle:"@kavya",score:30,trend:"+2",streak:3,country:"🇮🇳"},{rank:6,name:"Vikram Gupta",handle:"@vikram",score:28,trend:"±0",streak:4,country:"🇮🇳"}]},pa=[{name:"Diamond",min:40,color:"from-cyan-400 to-blue-600",icon:"💎"},{name:"Gold",min:30,color:"from-yellow-400 to-orange-500",icon:"🥇"},{name:"Silver",min:20,color:"from-gray-300 to-gray-500",icon:"🥈"},{name:"Bronze",min:10,color:"from-orange-600 to-red-600",icon:"🥉"}];function Fv(){var f,w;const e=Te(),{player:t}=gn(),r={global:ha.global.map(g=>g.you?{...g,name:(t==null?void 0:t.name)||"You",score:(t==null?void 0:t.coins)||0,streak:(t==null?void 0:t.currentStreak)||0}:g),friends:ha.friends.map(g=>g.you?{...g,name:(t==null?void 0:t.name)||"You",score:(t==null?void 0:t.coins)||0,streak:(t==null?void 0:t.currentStreak)||0}:g),india:ha.india.map(g=>g.you?{...g,name:(t==null?void 0:t.name)||"You",score:(t==null?void 0:t.coins)||0,streak:(t==null?void 0:t.currentStreak)||0}:g)};console.log("Debug - Player coins:",t==null?void 0:t.coins),console.log("Debug - Friends data:",r.friends[0]);const[s,a]=d.useState({days:2,hours:14,minutes:17}),[o,i]=d.useState("global"),l=r[o]||r.global;console.log("Player coins:",t==null?void 0:t.coins,"Current user score:",(f=l.find(g=>g.you))==null?void 0:f.score);const c=l.find(g=>g.you),u=l.slice(0,3),m=l.slice(3);d.useEffect(()=>{const g=setInterval(()=>{a(j=>j.minutes>0?{...j,minutes:j.minutes-1}:j.hours>0?{...j,hours:j.hours-1,minutes:59}:j.days>0?{...j,days:j.days-1,hours:23,minutes:59}:j)},6e4);return()=>clearInterval(g)},[]);const p=g=>{const j=Math.max(...l.map(y=>y.score)),S=g/j*100;return S>=90?pa[0]:S>=70?pa[1]:S>=40?pa[2]:pa[3]};return n.jsxs("div",{className:"min-h-screen bg-black text-white pt-12",children:[n.jsxs("div",{className:"flex items-center justify-between mb-5",children:[n.jsx("button",{onClick:()=>e(-1),className:"px-3 py-1.5 rounded-xl border border-white/10 bg-white/5 text-sm hover:bg-white/10 transition",children:"← Back"}),n.jsxs("div",{className:"text-center",children:[n.jsx("div",{className:"text-lg font-bold",children:"🏆 Leaderboard"}),n.jsxs("div",{className:"text-xs text-white/60",children:["Ends in ",s.days,"d ",s.hours,"h ",s.minutes,"m"]})]}),n.jsx("button",{className:"px-3 py-1.5 rounded-xl border border-white/10 bg-white/5 text-sm hover:bg-white/10 transition",children:"📊"})]}),n.jsxs("div",{className:`mb-5 rounded-2xl bg-gradient-to-r ${p(c==null?void 0:c.score).color} p-4 text-center relative overflow-hidden`,children:[n.jsx("div",{className:"absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -translate-y-10 translate-x-10 animate-pulse"}),n.jsx("div",{className:"absolute bottom-0 left-0 w-16 h-16 bg-white/5 rounded-full translate-y-8 -translate-x-8"}),n.jsxs("div",{className:"relative z-10",children:[n.jsx("div",{className:"text-2xl mb-1",children:p(c==null?void 0:c.score).icon}),n.jsxs("div",{className:"text-sm font-bold text-white",children:[p(c==null?void 0:c.score).name," League"]}),n.jsx("div",{className:"text-xs text-white/80",children:o==="friends"?"Competing with friends!":"You're competing with the best!"})]})]}),n.jsx("div",{className:"flex gap-2 mb-5",children:[{key:"global",label:"🌍 Global",count:"10M+"},{key:"friends",label:"👥 Friends",count:ha.friends.length},{key:"india",label:"🇮🇳 India",count:"2.5M"}].map(g=>n.jsxs("button",{onClick:()=>i(g.key),className:`flex-1 px-2 py-2 rounded-xl text-xs font-semibold transition-all duration-300 ${o===g.key?"bg-lime-500 text-black shadow-lg scale-105":"border border-white/10 bg-white/5 hover:bg-white/10"}`,children:[n.jsx("div",{children:g.label}),n.jsx("div",{className:`text-[10px] ${o===g.key?"text-black/70":"text-white/60"}`,children:g.count})]},g.key))}),n.jsx("div",{className:"mb-5 rounded-2xl bg-gradient-to-r from-lime-500/20 to-green-500/20 border border-lime-500/30 p-3",children:n.jsxs("div",{className:"flex items-center justify-between",children:[n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsx("div",{className:"w-10 h-10 rounded-xl bg-lime-500/20 grid place-items-center text-lg",children:"🧑‍💻"}),n.jsxs("div",{children:[n.jsx("div",{className:"font-bold text-lime-400 text-sm",children:"Your Position"}),n.jsxs("div",{className:"text-xs text-white/70 flex items-center gap-2",children:[n.jsxs("span",{children:["Rank #",c==null?void 0:c.rank]}),n.jsx("span",{className:`px-1.5 py-0.5 rounded-full text-[9px] font-bold ${c!=null&&c.trend.startsWith("+")?"bg-green-500/20 text-green-400":c!=null&&c.trend.startsWith("-")?"bg-red-500/20 text-red-400":"bg-gray-500/20 text-gray-400"}`,children:c==null?void 0:c.trend}),n.jsxs("span",{className:"text-white/50 text-[10px]",children:["in ",o==="global"?"Global":o==="friends"?"Friends":"India"]})]})]})]}),n.jsxs("div",{className:"text-right",children:[n.jsxs("div",{className:"text-lg font-bold text-lime-400",children:[c==null?void 0:c.score," ",ls]}),n.jsxs("div",{className:"text-xs text-white/60",children:["🔥 ",c==null?void 0:c.streak," streak"]})]})]})}),n.jsxs("div",{className:"mb-6",children:[n.jsx("h3",{className:"text-center text-sm font-semibold text-white/80 mb-4",children:"👑 Hall of Fame"}),n.jsxs("div",{className:"bg-gradient-to-b from-white/5 to-white/10 rounded-2xl p-4 border border-white/10 relative overflow-hidden",children:[n.jsx("div",{className:"absolute top-4 left-6 text-2xl opacity-40 animate-pulse",children:"🏆"}),n.jsx("div",{className:"absolute top-8 right-8 text-lg opacity-40 animate-bounce",style:{animationDelay:"1s"},children:"✨"}),n.jsx("div",{className:"absolute bottom-6 left-12 text-xl opacity-10 animate-pulse",style:{animationDelay:"2s"},children:"🥇"}),n.jsx("div",{className:"absolute bottom-4 right-6 text-lg opacity-40 animate-bounce",style:{animationDelay:"0.5s"},children:"⭐"}),n.jsxs("div",{className:"flex items-end justify-center gap-8 relative z-10",children:[u[1]&&n.jsxs("div",{className:"flex flex-col items-center",children:[n.jsxs("div",{className:"relative mb-2",children:[n.jsx(xa,{src:u[1].avatar,fallback:u[1].name,size:56}),n.jsx("div",{className:"absolute -bottom-1 left-1/2 -translate-x-1/2 w-7 h-7 bg-gradient-to-br from-gray-300 to-gray-500 rounded-full grid place-items-center text-sm font-bold text-black shadow-lg",children:"2"})]}),n.jsx("div",{className:"text-sm font-semibold mb-1 mt-1",children:ga(u[1].name,8)}),n.jsxs("div",{className:"text-xs text-lime-400 font-bold",children:[u[1].score," ",ls]})]}),u[0]&&n.jsxs("div",{className:"flex flex-col items-center -mb-3",children:[n.jsxs("div",{className:"relative mb-2",children:[n.jsx(xa,{src:u[0].avatar,fallback:u[0].name,size:72}),n.jsx("div",{className:"absolute -top-3 left-1/2 -translate-x-1/2",children:n.jsx($v,{})}),n.jsx("div",{className:"absolute -bottom-1 left-1/2 -translate-x-1/2 w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full grid place-items-center text-base font-bold text-black shadow-lg animate-pulse",children:"1"})]}),n.jsx("div",{className:"text-sm font-bold mb-1 mt-1",children:ga(u[0].name,8)}),n.jsxs("div",{className:"text-sm text-lime-400 font-bold mb-1",children:[u[0].score," ",ls]}),n.jsx("div",{className:"px-2 py-1 bg-yellow-400/20 rounded-full text-[9px] text-yellow-400 font-bold",children:"CHAMPION"})]}),u[2]&&n.jsxs("div",{className:"flex flex-col items-center",children:[n.jsxs("div",{className:"relative mb-2",children:[n.jsx(xa,{src:u[2].avatar,fallback:u[2].name,size:56}),n.jsx("div",{className:"absolute -bottom-1 left-1/2 -translate-x-1/2 w-7 h-7 bg-gradient-to-br from-orange-600 to-red-600 rounded-full grid place-items-center text-sm font-bold text-white shadow-lg",children:"3"})]}),n.jsx("div",{className:"text-sm font-semibold mb-1 mt-1",children:ga(u[2].name,8)}),n.jsxs("div",{className:"text-xs text-lime-400 font-bold",children:[u[2].score," ",ls]})]})]})]})]}),m.length>0&&n.jsxs("div",{className:"rounded-3xl bg-white/5 border border-white/10 p-2 mb-4",children:[n.jsxs("div",{className:"flex justify-between items-center mb-2 px-2",children:[n.jsx("h3",{className:"text-sm font-semibold",children:"Rankings"}),n.jsx("div",{className:"text-xs text-white/60",children:"Live updates"})]}),n.jsx("ul",{className:"space-y-1.5",children:m.map((g,j)=>n.jsxs("li",{className:`flex items-center justify-between px-3 py-2.5 rounded-xl transition-all duration-300 ${g.you?"bg-lime-500/90 text-black shadow-lg shadow-lime-500/20 scale-[1.02]":"bg-white/5 hover:bg-white/10"}`,style:{animationDelay:`${j*100}ms`,animation:"fadeInUp 0.6s ease-out forwards"},children:[n.jsxs("div",{className:"flex items-center gap-2.5",children:[n.jsx(Bv,{n:g.rank,you:g.you}),n.jsx(xa,{src:g.avatar,fallback:g.name,size:36}),n.jsxs("div",{className:"flex flex-col leading-tight",children:[n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx("span",{className:"text-sm font-semibold",children:ga(g.name,12)}),n.jsx("span",{className:"text-xs",children:g.country}),g.friend&&n.jsx("span",{className:"text-[9px] bg-blue-500/20 text-blue-400 px-1 py-0.5 rounded-full",children:"Friend"})]}),n.jsxs("div",{className:`text-xs flex items-center gap-1.5 ${g.you?"text-black/70":"text-white/60"}`,children:[n.jsx("span",{children:g.handle}),n.jsxs("span",{children:["🔥",g.streak]})]})]})]}),n.jsxs("div",{className:"flex flex-col items-end",children:[n.jsxs("div",{className:"flex items-center gap-1 text-sm font-bold",children:[n.jsx("span",{children:g.score}),n.jsx("span",{className:g.you?"opacity-90":"opacity-80",children:ls})]}),n.jsx("div",{className:`text-xs px-1.5 py-0.5 rounded-full font-bold ${g.trend.startsWith("+")?"bg-green-500/20 text-green-400":g.trend.startsWith("-")?"bg-red-500/20 text-red-400":"bg-gray-500/20 text-gray-400"}`,children:g.trend})]})]},`${o}-${g.rank}`))})]}),c&&c.rank>1&&n.jsxs("div",{className:"mb-4 p-3 rounded-2xl bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 text-center",children:[n.jsx("div",{className:"text-sm font-semibold mb-2",children:"🚀 Climb Higher!"}),n.jsx("div",{className:"text-xs text-white/70 mb-3",children:o==="friends"&&c.rank===1?"🎉 You're #1 among friends!":`You need ${Math.max(0,(((w=l[c.rank-2])==null?void 0:w.score)||0)-c.score+1)} more coins to reach rank #${c.rank-1}`}),!(o==="friends"&&c.rank===1)&&n.jsx("button",{onClick:()=>e("/play"),className:"px-5 py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl text-sm font-bold hover:scale-105 transition-transform",children:"Play Now 🎮"})]}),n.jsx("style",{jsx:!0,children:`
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
      `})]})}function xa({src:e,fallback:t,size:r=56}){const s=Uv(t);return n.jsx("div",{className:"grid place-items-center rounded-full bg-white/10 overflow-hidden border-2 border-white/20",style:{width:r,height:r},children:e?n.jsx("img",{src:e,alt:"",className:"w-full h-full object-cover"}):n.jsx("span",{className:"text-sm font-semibold",children:s})})}function $v(){return n.jsxs("div",{className:"w-7 h-5 bg-gradient-to-t from-yellow-400 to-yellow-300 rounded-b-lg shadow-lg relative",children:[n.jsxs("svg",{viewBox:"0 0 100 40",className:"w-full h-full",children:[n.jsx("path",{d:"M15,35 L15,18 L35,28 L50,10 L65,28 L85,18 L85,35 Z",fill:"url(#crownGradient)"}),n.jsx("defs",{children:n.jsxs("linearGradient",{id:"crownGradient",x1:"0%",y1:"0%",x2:"0%",y2:"100%",children:[n.jsx("stop",{offset:"0%",stopColor:"#FCD34D"}),n.jsx("stop",{offset:"100%",stopColor:"#F59E0B"})]})})]}),n.jsx("div",{className:"absolute top-0.5 left-1/2 -translate-x-1/2 w-1 h-1 bg-red-400 rounded-full animate-pulse"})]})}function Bv({n:e,you:t}){return n.jsx("div",{className:`w-7 h-7 grid place-items-center rounded-full text-sm font-bold ${t?"bg-black/10 text-black":"bg-white/10 text-white"}`,children:e})}function ga(e,t=12){return(e==null?void 0:e.length)>t?e.slice(0,t-1)+"…":e}function Uv(e=""){var r;const t=e.trim().split(/\s+/);return t.length===1?t[0].slice(0,2).toUpperCase():(t[0][0]+(((r=t[1])==null?void 0:r[0])||"")).toUpperCase()}const qv="qp_recent",Yv="qp_review_snapshot",Wd=[{id:Date.now()-864e5,type:"quiz",category:"General Knowledge",difficulty:"easy",score:8,total:10,accuracy:80,time:"02:31",ms:151e3,date:"Yesterday",timestamp:Date.now()-864e5,mode:"Quiz"},{id:Date.now()-1728e5,type:"practice",category:"Science",difficulty:"medium",score:12,total:15,accuracy:80,time:"06:02",ms:362e3,date:"2 days ago",timestamp:Date.now()-1728e5,mode:"Practice"},{id:Date.now()-2592e5,type:"quiz",category:"Fun Facts",difficulty:"easy",score:9,total:10,accuracy:90,time:"02:05",ms:125e3,date:"3 days ago",timestamp:Date.now()-2592e5,mode:"Quiz"}];function Qv(){const[e,t]=d.useState("quizzes"),[r,s]=d.useState(null),[a,o]=d.useState(!1),[i,l]=d.useState("all"),[c,u]=d.useState("all"),[m,p]=d.useState("date"),[f,w]=d.useState([]),[g,j]=d.useState(!0),S=Te(),y=Xe(),v=h=>{if(!h)return"00:00";const b=Math.floor(h/1e3),k=Math.floor(b/60),_=b%60;return`${String(k).padStart(2,"0")}:${String(_).padStart(2,"0")}`},x=h=>{if(!h)return"Unknown";const b=new Date(h),_=Math.floor((new Date-b)/(1e3*60*60*24));return _===0?"Today":_===1?"Yesterday":_<7?`${_} days ago`:`${["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][b.getMonth()]} ${b.getDate()}`};d.useEffect(()=>{let h=!1;j(!0);const b=A=>{try{return JSON.parse(A)}catch{return null}},k=A=>encodeURIComponent(String(A).trim().toLowerCase().replace(/\s+/g,"-")),_=A=>{var E,P,$,Y;const q=Number(A.ts??A.timestamp??A.id)||Date.now(),H=Number(A.ms)||0,V=Number(A.total)||0,K=Number(A.correct)||0,M=String(A.mode||"").toLowerCase().includes("practice")?"practice":"quiz",I=((E=A.snapshot)==null?void 0:E.category)||((P=A.snapshot)==null?void 0:P.categoryLabel)||A.cat||A.category||"Unknown",z=(($=A.snapshot)==null?void 0:$.categoryParam)||k(I),D=String(((Y=A.snapshot)==null?void 0:Y.difficulty)||A.difficulty||"medium").toLowerCase();return{id:A.id??q,type:M,category:I,categoryParam:z,difficulty:D,score:K,total:V,accuracy:V?Math.round(K/V*100):0,time:v(H),ms:H,date:x(q),timestamp:q,snapshot:A.snapshot??null,mode:A.mode||(M==="practice"?"Practice":"Quiz")}};try{const A=localStorage.getItem(qv),q=A?b(A):null,V=(Array.isArray(q)&&q.length?q:Wd).map(_).filter(K=>K&&K.timestamp).sort((K,U)=>U.timestamp-K.timestamp);h||w(V)}catch(A){console.error("Error loading history:",A),h||w(Wd)}finally{h||j(!1)}return()=>{h=!0}},[]);const N=d.useMemo(()=>{const h=new Set(f.map(b=>b.category));return Array.from(h)},[f]),C=d.useMemo(()=>{let h=f.filter(b=>e==="quizzes"?b.type==="quiz":b.type==="practice");return i!=="all"&&(h=h.filter(b=>b.category===i)),c!=="all"&&(h=h.filter(b=>b.difficulty===c)),h.sort((b,k)=>m==="date"?k.timestamp-b.timestamp:m==="score"?k.accuracy-b.accuracy:m==="time"?b.ms-k.ms:0),h},[f,e,i,c,m]),R=d.useMemo(()=>{if(C.length===0)return null;const h=C.reduce((A,q)=>A+q.score,0),b=C.reduce((A,q)=>A+q.total,0),k=b?Math.round(h/b*100):0,_=C.reduce((A,q)=>A+q.ms,0);return{count:C.length,avgAccuracy:k,totalTime:v(_),bestScore:Math.max(...C.map(A=>A.accuracy))}},[C]),T=h=>h>=80?"text-green-400":h>=60?"text-blue-400":h>=40?"text-yellow-400":"text-red-400";return g?n.jsx("div",{className:"min-h-full bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900 flex items-center justify-center",children:n.jsx("div",{className:"text-white",children:"Loading history..."})}):n.jsxs("div",{className:"min-h-full bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900 pt-12",children:[n.jsx("div",{className:"",children:n.jsxs("div",{className:"px-4 pt-4 pb-4",children:[n.jsxs("div",{className:"flex items-center justify-between mb-3",children:[n.jsx("button",{onClick:()=>{var h;if(((h=y.state)==null?void 0:h.from)==="results"){const b=ae.getCurrentResults();b?S(`/quiz/${b.categorySlug}`,{state:{returnToResults:!0}}):S("/profile")}else S("/profile")},className:"px-3 py-1.5 rounded-xl border border-white/20 bg-white/10 text-white text-sm flex items-center gap-1",children:"← Back"}),n.jsx("button",{onClick:()=>o(!a),className:"p-2 rounded-xl border border-white/20 bg-white/10 text-white",children:n.jsx(Hv,{})})]}),n.jsx("h1",{className:"text-2xl font-bold text-white mb-1",children:"History"}),n.jsx("p",{className:"text-white/70 text-sm",children:"Track your progress"})]})}),n.jsxs("div",{className:"px-4 pb-20",children:[n.jsx("div",{className:`
             sticky top-0 z-[60] isolate
            -mx-4 px-4
            py-4 mb-2
            bg-gray-900/95
            backdrop-blur-md
            border-b border-white/10
        `,children:n.jsx("div",{className:"flex items-center",children:n.jsx("div",{className:"inline-flex p-1 rounded-2xl bg-white/10 border border-white/20",children:[{value:"quizzes",label:"Quizzes",icon:"🎯"},{value:"practice",label:"Practice",icon:"📝"}].map(h=>n.jsxs("button",{onClick:()=>t(h.value),className:`px-12 py-2 text-sm rounded-xl transition-all duration-200 ${e===h.value?"bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg":"text-white/70 hover:text-white"}`,children:[n.jsx("span",{className:"mr-1",children:h.icon}),h.label]},h.value))})})}),R&&n.jsx("div",{className:"mb-4 p-4 rounded-2xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-white/20",children:n.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-3",children:[n.jsx(va,{label:"Total",value:R.count}),n.jsx(va,{label:"Avg Score",value:`${R.avgAccuracy}%`,color:T(R.avgAccuracy)}),n.jsx(va,{label:"Best Score",value:`${R.bestScore}%`,color:"text-green-400"}),n.jsx(va,{label:"Total Time",value:R.totalTime})]})}),a&&n.jsx("div",{className:"mb-4 p-4 rounded-2xl bg-white/10 border border-white/20",children:n.jsxs("div",{className:"space-y-3",children:[n.jsxs("div",{children:[n.jsx("label",{className:"text-xs text-white/60 mb-1 block",children:"Category"}),n.jsxs("select",{value:i,onChange:h=>l(h.target.value),className:"w-full px-3 py-2 rounded-xl bg-black/30 border border-white/20 text-white text-sm",children:[n.jsx("option",{value:"all",children:"All Categories"}),N.map(h=>n.jsx("option",{value:h,children:h},h))]})]}),n.jsxs("div",{className:"flex gap-2",children:[n.jsxs("div",{className:"flex-1",children:[n.jsx("label",{className:"text-xs text-white/60 mb-1 block",children:"Difficulty"}),n.jsxs("select",{value:c,onChange:h=>u(h.target.value),className:"w-full px-3 py-2 rounded-xl bg-black/30 border border-white/20 text-white text-sm",children:[n.jsx("option",{value:"all",children:"All"}),n.jsx("option",{value:"easy",children:"Easy"}),n.jsx("option",{value:"medium",children:"Medium"}),n.jsx("option",{value:"hard",children:"Hard"})]})]}),n.jsxs("div",{className:"flex-1",children:[n.jsx("label",{className:"text-xs text-white/60 mb-1 block",children:"Sort By"}),n.jsxs("select",{value:m,onChange:h=>p(h.target.value),className:"w-full px-3 py-2 rounded-xl bg-black/30 border border-white/20 text-white text-sm",children:[n.jsx("option",{value:"date",children:"Date"}),n.jsx("option",{value:"score",children:"Score"}),n.jsx("option",{value:"time",children:"Time"})]})]})]})]})}),C.length===0?n.jsxs("div",{className:"text-center py-12",children:[n.jsx("div",{className:"text-4xl mb-3",children:"📚"}),n.jsxs("p",{className:"text-white/60",children:["No ",e," history yet"]}),n.jsx("p",{className:"text-white/40 text-sm mt-1",children:"Start playing to see your progress here!"})]}):n.jsx("div",{className:"space-y-3",children:C.map((h,b)=>n.jsx(Wv,{item:h,index:b,onClick:()=>s(h)},h.id))})]}),r&&n.jsx(Gv,{item:r,onClose:()=>s(null)})]})}function va({label:e,value:t,color:r="text-white"}){return n.jsxs("div",{className:"text-center",children:[n.jsx("div",{className:"text-xs text-white/60 mb-1",children:e}),n.jsx("div",{className:`text-lg font-bold ${r}`,children:t})]})}function Wv({item:e,index:t,onClick:r}){const s=i=>i>=80?"from-green-500/20 to-green-600/10 border-green-500/30":i>=60?"from-blue-500/20 to-blue-600/10 border-blue-500/30":i>=40?"from-yellow-500/20 to-yellow-600/10 border-yellow-500/30":"from-red-500/20 to-red-600/10 border-red-500/30",o=(i=>{const l=i==null?void 0:i.toLowerCase();return l==="easy"?{bg:"bg-green-500/20",text:"text-green-400",border:"border-green-500/30"}:l==="medium"?{bg:"bg-yellow-500/20",text:"text-yellow-400",border:"border-yellow-500/30"}:l==="hard"?{bg:"bg-red-500/20",text:"text-red-400",border:"border-red-500/30"}:{bg:"bg-gray-500/20",text:"text-gray-400",border:"border-gray-500/30"}})(e.difficulty);return n.jsxs("div",{onClick:r,className:`
        relative rounded-2xl p-4 cursor-pointer
        bg-gradient-to-br ${s(e.accuracy)}
        border transform transition-all duration-300 hover:scale-[1.02]
      `,children:[n.jsxs("div",{className:"flex items-start justify-between mb-3",children:[n.jsxs("div",{className:"flex-1",children:[n.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[n.jsx("span",{className:"text-lg",children:e.type==="quiz"?"🎯":"📝"}),n.jsx("h3",{className:"font-semibold text-white",children:e.category})]}),n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx("span",{className:`px-2 py-0.5 rounded-full text-xs ${o.bg} ${o.text} ${o.border} border`,children:e.difficulty}),n.jsx("span",{className:"text-xs text-white/50",children:e.date})]})]}),n.jsxs("div",{className:"text-right",children:[n.jsxs("div",{className:`text-2xl font-bold ${e.accuracy>=80?"text-green-400":e.accuracy>=60?"text-blue-400":e.accuracy>=40?"text-yellow-400":"text-red-400"}`,children:[e.accuracy,"%"]}),n.jsxs("div",{className:"text-xs text-white/60",children:[e.score,"/",e.total]})]})]}),n.jsxs("div",{className:"flex items-center justify-between text-xs",children:[n.jsxs("div",{className:"flex items-center gap-3 text-white/60",children:[n.jsxs("span",{children:["⏱ ",e.time]}),n.jsx("span",{children:e.mode})]}),n.jsx("span",{className:"text-white/40",children:"Tap to review →"})]})]})}function Gv({item:e,onClose:t}){const r=Te();return d.useEffect(()=>{const s=a=>{a.key==="Escape"&&t()};return document.addEventListener("keydown",s),()=>document.removeEventListener("keydown",s)},[t]),n.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80",onClick:t,children:n.jsxs("div",{className:"w-full max-w-md bg-gray-900 rounded-3xl p-6 border border-white/20",onClick:s=>s.stopPropagation(),children:[n.jsxs("div",{className:"flex items-center justify-between mb-4",children:[n.jsx("h2",{className:"text-xl font-bold text-white",children:"Quiz Details"}),n.jsx("button",{onClick:t,className:"p-2 rounded-xl bg-white/10 hover:bg-white/20 transition-colors text-white",children:"✕"})]}),n.jsxs("div",{className:"space-y-4",children:[n.jsxs("div",{className:"p-4 rounded-2xl bg-white/5 border border-white/10",children:[n.jsxs("div",{className:"flex items-center justify-between mb-2",children:[n.jsx("span",{className:"text-white/60",children:"Category"}),n.jsx("span",{className:"text-white font-medium",children:e.category})]}),n.jsxs("div",{className:"flex items-center justify-between mb-2",children:[n.jsx("span",{className:"text-white/60",children:"Difficulty"}),n.jsx("span",{className:`${e.difficulty==="easy"?"text-green-400":e.difficulty==="medium"?"text-yellow-400":"text-red-400"} font-medium`,children:e.difficulty})]}),n.jsxs("div",{className:"flex items-center justify-between mb-2",children:[n.jsx("span",{className:"text-white/60",children:"Score"}),n.jsxs("span",{className:"text-white font-medium",children:[e.score,"/",e.total]})]}),n.jsxs("div",{className:"flex items-center justify-between mb-2",children:[n.jsx("span",{className:"text-white/60",children:"Accuracy"}),n.jsxs("span",{className:`${e.accuracy>=80?"text-green-400":e.accuracy>=60?"text-blue-400":"text-yellow-400"} font-medium`,children:[e.accuracy,"%"]})]}),n.jsxs("div",{className:"flex items-center justify-between",children:[n.jsx("span",{className:"text-white/60",children:"Time"}),n.jsx("span",{className:"text-white font-medium",children:e.time})]})]}),e.snapshot&&n.jsx("button",{onClick:()=>{t(),localStorage.setItem(Yv,JSON.stringify(e.snapshot)),r(`/quiz/${e.categoryParam}/start?review=1&attempt=${e.id}`,{state:{reviewFrom:"history",historyPath:"/profile/history"}})},className:"w-full py-3 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium hover:opacity-90 transition-opacity",children:"Review Answers"}),n.jsx("button",{onClick:()=>{var s;t(),r(`/quiz/${e.categoryParam}/start`,{state:{mode:"quiz",retake:!0,difficulty:e.difficulty,count:e.total,timer:((s=e.snapshot)==null?void 0:s.timer)||{type:"per_q",seconds:45},fromHistory:!0}})},className:"w-full py-3 rounded-2xl border border-white/20 text-white font-medium hover:bg-white/10 transition-colors",children:"Retake Quiz"})]})]})})}function Hv(){return n.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:n.jsx("path",{d:"M3 6h18M7 12h10M10 18h4",strokeLinecap:"round",strokeLinejoin:"round"})})}const Kv=d.createContext({});function Mf(e){const t=d.useRef(null);return t.current===null&&(t.current=e()),t.current}const Vv=typeof window<"u",Xv=Vv?d.useLayoutEffect:d.useEffect,Of=d.createContext(null);function Jv(e){return typeof e=="object"&&e!==null}function Zv(e){return Jv(e)&&"offsetHeight"in e}const ey=d.createContext({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"});class ty extends d.Component{getSnapshotBeforeUpdate(t){const r=this.props.childRef.current;if(r&&t.isPresent&&!this.props.isPresent){const s=r.offsetParent,a=Zv(s)&&s.offsetWidth||0,o=this.props.sizeRef.current;o.height=r.offsetHeight||0,o.width=r.offsetWidth||0,o.top=r.offsetTop,o.left=r.offsetLeft,o.right=a-o.width-o.left}return null}componentDidUpdate(){}render(){return this.props.children}}function ny({children:e,isPresent:t,anchorX:r,root:s}){const a=d.useId(),o=d.useRef(null),i=d.useRef({width:0,height:0,top:0,left:0,right:0}),{nonce:l}=d.useContext(ey);return d.useInsertionEffect(()=>{const{width:c,height:u,top:m,left:p,right:f}=i.current;if(t||!o.current||!c||!u)return;const w=r==="left"?`left: ${p}`:`right: ${f}`;o.current.dataset.motionPopId=a;const g=document.createElement("style");l&&(g.nonce=l);const j=s??document.head;return j.appendChild(g),g.sheet&&g.sheet.insertRule(`
          [data-motion-pop-id="${a}"] {
            position: absolute !important;
            width: ${c}px !important;
            height: ${u}px !important;
            ${w}px !important;
            top: ${m}px !important;
          }
        `),()=>{j.contains(g)&&j.removeChild(g)}},[t]),n.jsx(ty,{isPresent:t,childRef:o,sizeRef:i,children:d.cloneElement(e,{ref:o})})}const ry=({children:e,initial:t,isPresent:r,onExitComplete:s,custom:a,presenceAffectsLayout:o,mode:i,anchorX:l,root:c})=>{const u=Mf(sy),m=d.useId();let p=!0,f=d.useMemo(()=>(p=!1,{id:m,initial:t,isPresent:r,custom:a,onExitComplete:w=>{u.set(w,!0);for(const g of u.values())if(!g)return;s&&s()},register:w=>(u.set(w,!1),()=>u.delete(w))}),[r,u,s]);return o&&p&&(f={...f}),d.useMemo(()=>{u.forEach((w,g)=>u.set(g,!1))},[r]),d.useEffect(()=>{!r&&!u.size&&s&&s()},[r]),i==="popLayout"&&(e=n.jsx(ny,{isPresent:r,anchorX:l,root:c,children:e})),n.jsx(Of.Provider,{value:f,children:e})};function sy(){return new Map}function ay(e=!0){const t=d.useContext(Of);if(t===null)return[!0,null];const{isPresent:r,onExitComplete:s,register:a}=t,o=d.useId();d.useEffect(()=>{if(e)return a(o)},[e]);const i=d.useCallback(()=>e&&s&&s(o),[o,s,e]);return!r&&s?[!1,i]:[!0]}const ya=e=>e.key||"";function Gd(e){const t=[];return d.Children.forEach(e,r=>{d.isValidElement(r)&&t.push(r)}),t}const oi=({children:e,custom:t,initial:r=!0,onExitComplete:s,presenceAffectsLayout:a=!0,mode:o="sync",propagate:i=!1,anchorX:l="left",root:c})=>{const[u,m]=ay(i),p=d.useMemo(()=>Gd(e),[e]),f=i&&!u?[]:p.map(ya),w=d.useRef(!0),g=d.useRef(p),j=Mf(()=>new Map),[S,y]=d.useState(p),[v,x]=d.useState(p);Xv(()=>{w.current=!1,g.current=p;for(let R=0;R<v.length;R++){const T=ya(v[R]);f.includes(T)?j.delete(T):j.get(T)!==!0&&j.set(T,!1)}},[v,f.length,f.join("-")]);const N=[];if(p!==S){let R=[...p];for(let T=0;T<v.length;T++){const h=v[T],b=ya(h);f.includes(b)||(R.splice(T,0,h),N.push(h))}return o==="wait"&&N.length&&(R=N),x(Gd(R)),y(p),null}const{forceRender:C}=d.useContext(Kv);return n.jsx(n.Fragment,{children:v.map(R=>{const T=ya(R),h=i&&!u?!1:p===v||f.includes(T),b=()=>{if(j.has(T))j.set(T,!0);else return;let k=!0;j.forEach(_=>{_||(k=!1)}),k&&(C==null||C(),x(g.current),i&&(m==null||m()),s&&s())};return n.jsx(ry,{isPresent:h,initial:!w.current||r?void 0:!1,custom:t,presenceAffectsLayout:a,mode:o,root:c,onExitComplete:h?void 0:b,anchorX:l,children:R},T)})})},oy=()=>{const e=Te(),[t,r]=d.useState(null);d.useEffect(()=>{if(typeof window<"u"){const W=sessionStorage.getItem("navigationSource");W&&r(W)}},[]);const s=W=>{typeof window<"u"&&(sessionStorage.setItem("navigationSource","/rewards"),window.location.href=W)},a=()=>{e(-1)},o=[{id:1,type:"coins",value:100,icon:"🪙",label:"100 Coins",cost:0},{id:2,type:"life",value:1,icon:"❤️",label:"1 Life",cost:50},{id:3,type:"coins",value:200,icon:"🪙",label:"200 Coins",cost:0},{id:4,type:"wildcard",value:1,icon:"🃏",label:"Wild Card",cost:100},{id:5,type:"coins",value:500,icon:"💰",label:"500 Coins",cost:0,milestone:!0},{id:6,type:"fifty-fifty",value:1,icon:"➗",label:"50:50",cost:150},{id:7,type:"life",value:2,icon:"❤️",label:"2 Lives",cost:100},{id:8,type:"vehicle",value:"bike",icon:"🏍️",label:"Motorcycle",cost:300},{id:9,type:"mystery",value:1,icon:"🎁",label:"Mystery Box",cost:200},{id:10,type:"coins",value:750,icon:"💰",label:"750 Coins",cost:0,milestone:!0},{id:11,type:"life",value:3,icon:"❤️",label:"3 Lives",cost:150},{id:12,type:"wildcard",value:2,icon:"🃏",label:"2x Wild Card",cost:250},{id:13,type:"vehicle",value:"car",icon:"🚗",label:"Car",cost:500},{id:14,type:"fifty-fifty",value:2,icon:"➗",label:"2x 50:50",cost:300},{id:15,type:"coins",value:1e3,icon:"💎",label:"1000 Coins",cost:0,milestone:!0}],i={cycle:{icon:"🚴",name:"Bicycle"},bike:{icon:"🏍️",name:"Motorcycle"},car:{icon:"🚗",name:"Car"}};gn();const[l,c]=d.useState(4),[u,m]=d.useState(ae.getCoins()),[p,f]=d.useState(4),[w,g]=d.useState(!1),[j,S]=d.useState(!1),[y,v]=d.useState(0),[x,N]=d.useState(0),[C,R]=d.useState("cycle"),[T,h]=d.useState([{type:"vehicle",icon:"🚴",name:"Bicycle",count:1},{type:"wildcard",icon:"🃏",name:"Wild Card",count:2},{type:"fifty-fifty",icon:"➗",name:"50:50 Helper",count:1}]),[b,k]=d.useState([0,1,2,3]),[_,A]=d.useState(!1),[q,H]=d.useState(!1),[V,K]=d.useState(null),[U,M]=d.useState(null),[I,z]=d.useState(!1),[D,E]=d.useState(null),[P,$]=d.useState(!1),Y=d.useRef(null),L=d.useRef(null),G=d.useRef(null);d.useEffect(()=>{Y.current=new Audio("/sounds/reward.mp3"),L.current=new Audio("/sounds/reward_progress.mp3"),[Y,L].forEach(W=>{var F;(F=W.current)==null||F.addEventListener("error",()=>{console.log("Sound file not found")})})},[]);const B=W=>{try{W.current&&(W.current.currentTime=0,W.current.play().catch(F=>console.log("Audio play failed:",F)))}catch(F){console.log("Sound play error:",F)}},O=(W,F)=>{if(W>l){M(F),H(!0);return}W===l&&Q(W,F)},X=W=>{var ne;const F=(ne=G.current)==null?void 0:ne.querySelector(`[data-index="${W}"]`);if(F){const ee=F.getBoundingClientRect(),oe=window.pageYOffset||document.documentElement.scrollTop,me=ee.top+oe-window.innerHeight/2+50;window.scrollTo({top:me,behavior:"smooth"})}},Q=(W,F)=>{if(!b.includes(W)){if(F.cost>0&&u<F.cost){M(F),H(!0);return}F.cost>0&&(m(ne=>ne-F.cost),ae.addCoins(-F.cost,`Reward Purchase: ${F.label}`)),B(Y),A(!0),M(F),k(ne=>[...ne,W]),setTimeout(()=>{A(!1),F.type==="coins"?(v(F.value),g(!0),setTimeout(()=>{m(ne=>ne+F.value),ae.addCoins(F.value,`Reward Claimed: ${F.label}`),setTimeout(()=>{g(!1),v(0)},500)},300)):F.type==="life"?(N(F.value),S(!0),setTimeout(()=>{f(ne=>ne+F.value),setTimeout(()=>{S(!1),N(0)},500)},300)):(E({icon:F.icon,startX:window.innerWidth/2,startY:window.innerHeight/2}),setTimeout(()=>{E(null),$(!0),te(F),F.type==="vehicle"&&R(F.value),setTimeout(()=>{$(!1)},500)},800)),setTimeout(()=>{if(l<o.length-1){const ne=l+1;X(ne),setTimeout(()=>{z(!0),B(L),c(ne),setTimeout(()=>{z(!1)},500)},300)}},1200)},1500)}},te=W=>{h(F=>F.find(ee=>ee.icon===W.icon)?F.map(ee=>ee.icon===W.icon?{...ee,count:ee.count+1}:ee):[...F,{type:W.type,icon:W.icon,name:W.label,count:1}])},de=W=>30+W*100,re=()=>30+l*100;return n.jsxs("div",{className:"rewards-page",children:[n.jsx("style",{jsx:!0,children:`
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
      `}),n.jsx("div",{className:"non-sticky-header",children:n.jsx("button",{className:"back-button",onClick:a,children:"← Back"})}),n.jsxs("div",{className:"sticky-section",children:[n.jsxs("div",{className:"header-wrapper",children:[n.jsxs("div",{className:"title-row",children:[n.jsxs("div",{children:[n.jsx("h1",{className:"title",children:"Rewards"}),n.jsx("p",{className:"subtitle",children:"Claim amazing prizes"})]}),n.jsx("button",{className:"play-quiz-btn",onClick:()=>s("/play"),children:"Play Quiz"})]}),n.jsx("div",{className:"balance-row",children:n.jsx("div",{className:"balance-item",children:n.jsxs("div",{children:[n.jsx("div",{className:"balance-label",children:"Balance"}),n.jsxs("div",{className:`balance-value ${w?"animating":""}`,children:[u.toLocaleString()," 🪙",w&&n.jsxs("span",{className:"value-change",children:["+",y]})]})]})})})]}),n.jsx("div",{className:"stats-cards-container",children:n.jsxs("div",{className:"info-grid",children:[n.jsxs("div",{className:"info-card",children:[n.jsx("div",{className:"info-icon",children:"❤️"}),n.jsxs("div",{className:`info-value ${j?"animating":""}`,children:[p,j&&n.jsxs("span",{className:"value-change",children:["+",x]})]}),n.jsx("div",{className:"info-label",children:"Lives"})]}),n.jsxs("div",{className:"info-card",children:[n.jsx("div",{className:"info-icon",children:"⭐"}),n.jsx("div",{className:"info-value",children:"5"}),n.jsx("div",{className:"info-label",children:"Level"})]}),n.jsxs("div",{className:"info-card",children:[n.jsx("div",{className:"info-icon",children:i[C].icon}),n.jsx("div",{className:"info-value",children:i[C].name}),n.jsx("div",{className:"info-label",children:"Vehicle"})]}),n.jsxs("div",{className:`cards-section ${P?"animating":""}`,children:[n.jsx("div",{className:"cards-label",children:"Your Cards"}),n.jsx("div",{className:"card-grid",children:T.map((W,F)=>n.jsxs("div",{className:"card-item",onClick:()=>K(W),children:[n.jsxs("div",{className:"large-card",children:[n.jsx("div",{className:"large-card-icon",children:W.icon}),n.jsx("div",{className:"large-card-name",children:W.name})]}),W.count>1&&n.jsx("div",{className:"card-count-badge",children:W.count})]},F))})]})]})})]}),n.jsx("div",{className:"scrollable-journey",children:n.jsx("div",{className:"journey-container",ref:G,children:n.jsxs("div",{className:"journey-track",children:[n.jsx("div",{className:"curvy-road",children:n.jsxs("svg",{className:"road-svg",viewBox:"0 0 60 1500",preserveAspectRatio:"none",children:[n.jsx("defs",{children:n.jsxs("linearGradient",{id:"roadGradient",x1:"0%",y1:"0%",x2:"0%",y2:"100%",children:[n.jsx("stop",{offset:"0%",stopColor:"#5E5CE6"}),n.jsx("stop",{offset:"100%",stopColor:"#5E5CE6"})]})}),n.jsx("path",{className:"road-path",d:"M 30 0 Q 45 50, 30 100 T 30 200 Q 15 250, 30 300 T 30 400 Q 45 450, 30 500 T 30 600 Q 15 650, 30 700 T 30 800 Q 45 850, 30 900 T 30 1000 Q 15 1050, 30 1100 T 30 1200 Q 45 1250, 30 1300 T 30 1400 L 30 1500"}),n.jsx("path",{className:"road-progress",d:"M 30 0 Q 45 50, 30 100 T 30 200 Q 15 250, 30 300 T 30 400 Q 45 450, 30 500 T 30 600 Q 15 650, 30 700 T 30 800 Q 45 850, 30 900 T 30 1000 Q 15 1050, 30 1100 T 30 1200 Q 45 1250, 30 1300 T 30 1400 L 30 1500",strokeDasharray:"1500",strokeDashoffset:1500-l/(o.length-1)*1500})]})}),n.jsxs("div",{className:"avatar-tracker",style:{top:`${re()}px`},children:[n.jsx("img",{className:"avatar-img",src:"/profile/avatar.png",alt:"You",onError:W=>{W.target.style.display="none"}}),n.jsx("div",{className:"tracker-vehicle",children:i[C].icon})]}),n.jsx("div",{className:"rewards-list",children:o.map((W,F)=>{const ne=F%2===0,ee=F>l,oe=b.includes(F),me=F===l;return n.jsx("div",{className:"reward-row","data-index":F,style:{top:`${de(F)}px`},children:n.jsxs("div",{className:`reward-item ${ne?"left":"right"}`,children:[n.jsxs("div",{className:`checkpoint ${me?"current":oe?"claimed":ee?"locked":""}`,onClick:()=>O(F,W),children:[n.jsx("div",{className:"checkpoint-icon",children:W.icon}),n.jsx("div",{className:"checkpoint-value",children:W.label.split(" ")[0]}),W.milestone&&n.jsx("div",{className:"milestone-badge",children:"BONUS"}),ee&&n.jsx("div",{className:"lock-icon",children:"🔒"})]}),n.jsxs("div",{className:"reward-info",children:[n.jsx("div",{className:"reward-name",children:W.label}),n.jsxs("div",{className:"step-label",children:["Step ",F+1]})]})]})},W.id)})})]})})}),D&&n.jsx("div",{className:"flying-card",style:{left:`${D.startX}px`,top:`${D.startY}px`,"--startX":`${D.startX}px`},children:D.icon}),n.jsx(oi,{children:V&&n.jsx("div",{className:"claim-overlay",onClick:()=>K(null),children:n.jsxs("div",{className:"modal",onClick:W=>W.stopPropagation(),children:[n.jsx("div",{className:"modal-icon",children:V.icon}),n.jsx("div",{className:"card-detail-name",children:V.name}),n.jsxs("div",{className:"card-detail-desc",children:["You have ",V.count," of these cards"]}),n.jsx("div",{className:"modal-buttons",children:n.jsx("button",{className:"modal-btn modal-btn-secondary",onClick:()=>K(null),children:"Close"})})]})})}),n.jsx(oi,{children:_&&U&&n.jsx("div",{className:"claim-overlay",children:n.jsxs("div",{className:"modal",children:[n.jsx("div",{className:"modal-title",children:"WELL DONE!"}),n.jsx("div",{className:"modal-subtitle",children:"Here's a reward for you."}),n.jsx("div",{className:"modal-icon",children:U.icon}),n.jsxs("div",{className:"modal-value",children:["+",U.value," ",U.type==="coins"?"Coins":U.type==="life"?"Lives":U.label]})]})})}),n.jsx(oi,{children:q&&U&&n.jsx("div",{className:"claim-overlay",onClick:()=>H(!1),children:n.jsxs("div",{className:"modal",onClick:W=>W.stopPropagation(),children:[n.jsx("div",{className:"modal-icon",children:"🪙"}),n.jsx("div",{className:"modal-title",children:"Need More Coins"}),n.jsx("div",{className:"modal-subtitle",children:U.cost>0?`You need ${U.cost-u} more coins`:"Complete previous rewards first"}),n.jsxs("div",{className:"modal-buttons",children:[n.jsx("button",{className:"modal-btn modal-btn-primary",onClick:()=>s("/play"),children:"Play Quiz"}),n.jsx("button",{className:"modal-btn modal-btn-secondary",onClick:()=>H(!1),children:"Cancel"})]})]})})})]})},ba=[{id:1,name:"First Win",emoji:"🏆",unlocked:!0,hint:"Win your first quiz",progress:100,color:"#FFD700"},{id:2,name:"On Fire",emoji:"🔥",unlocked:!0,hint:"3-day winning streak",progress:100,color:"#FF6B35"},{id:3,name:"Perfectionist",emoji:"⭐",unlocked:!1,hint:"Score 10/10 in any quiz",progress:75,color:"#9333EA"},{id:4,name:"Early Bird",emoji:"🌅",unlocked:!0,hint:"Play before 9 AM",progress:100,color:"#F59E0B"},{id:5,name:"Scholar",emoji:"🎓",unlocked:!1,hint:"Master 5 categories",progress:40,color:"#3B82F6"},{id:6,name:"Lightning",emoji:"⚡",unlocked:!1,hint:"Complete in under 2 minutes",progress:20,color:"#10B981"},{id:7,name:"Champion",emoji:"👑",unlocked:!1,hint:"Win 50 quizzes",progress:30,color:"#EC4899"},{id:8,name:"Explorer",emoji:"🗺️",unlocked:!1,hint:"Try all categories",progress:60,color:"#06B6D4"},{id:9,name:"Strategist",emoji:"🧠",unlocked:!0,hint:"Use 3 power-ups wisely",progress:100,color:"#8B5CF6"}];function iy(){const[e,t]=d.useState(null),r=ba.filter(a=>a.unlocked).length,s=Math.round(r/ba.length*100);return n.jsxs("div",{className:"badges-screen",children:[n.jsx("style",{jsx:!0,children:`
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
      `}),n.jsxs("div",{className:"header",children:[n.jsx("button",{className:"back-button",onClick:()=>window.history.back(),children:"← Back"}),n.jsxs("div",{className:"title-section",children:[n.jsx("h1",{className:"main-title",children:"Badge Collection"}),n.jsx("p",{className:"subtitle",children:"Unlock achievements and show your skills"})]})]}),n.jsxs("div",{className:"progress-card",children:[n.jsxs("div",{className:"progress-header",children:[n.jsx("span",{className:"progress-label",children:"Collection Progress"}),n.jsxs("span",{className:"progress-value",children:[r,"/",ba.length]})]}),n.jsx("div",{className:"progress-bar-container",children:n.jsx("div",{className:"progress-bar-fill",style:{width:`${s}%`}})})]}),n.jsx("div",{className:"badges-grid",children:ba.map(a=>n.jsxs("div",{className:`badge-card ${a.unlocked?"unlocked":""}`,style:{"--badge-color":a.color},onClick:()=>t(a),children:[n.jsx("div",{className:"badge-glow"}),n.jsx("div",{className:"badge-emoji",children:a.emoji}),n.jsx("div",{className:"badge-name",children:a.name}),!a.unlocked&&n.jsxs(n.Fragment,{children:[n.jsx("div",{className:"badge-progress",children:n.jsx("div",{className:"badge-progress-fill",style:{width:`${a.progress}%`}})}),n.jsx("div",{className:"lock-indicator",children:"🔒"})]})]},a.id))}),n.jsxs("div",{className:"tips-card",children:[n.jsxs("div",{className:"tips-title",children:[n.jsx("span",{children:"💡"}),n.jsx("span",{children:"Pro Tip"})]}),n.jsx("div",{className:"tips-content",children:"Complete daily challenges and maintain streaks to unlock rare badges faster. Each badge gives you bonus XP and special rewards!"})]}),e&&n.jsx("div",{className:"badge-modal",onClick:()=>t(null),children:n.jsxs("div",{className:"modal-content",onClick:a=>a.stopPropagation(),children:[n.jsx("div",{className:`modal-badge ${e.unlocked?"":"locked"}`,children:e.emoji}),n.jsx("h3",{className:"modal-title",children:e.name}),n.jsx("span",{className:`modal-status ${e.unlocked?"":"locked"}`,children:e.unlocked?"✓ Unlocked":"🔒 Locked"}),n.jsx("p",{className:"modal-description",children:e.hint}),!e.unlocked&&n.jsxs("div",{className:"modal-progress-section",children:[n.jsx("div",{className:"modal-progress-label",children:"Progress"}),n.jsx("div",{className:"modal-progress-bar",children:n.jsx("div",{className:"modal-progress-fill",style:{width:`${e.progress}%`,"--badge-color":e.color}})}),n.jsxs("div",{className:"modal-progress-text",children:[e.progress,"%"]})]}),n.jsx("button",{className:"modal-close",onClick:()=>t(null),children:e.unlocked?"Awesome!":"Keep Going!"})]})})]})}const ly=[{id:1,title:"Quiz Master",subtitle:"Play 10 quizzes",current:7,target:10,reward:150,claimed:!1,icon:"🎯",color:"#FF6B6B"},{id:2,title:"Coin Collector",subtitle:"Earn 2,000 coins",current:1240,target:2e3,reward:200,claimed:!1,icon:"💰",color:"#4ECDC4"},{id:3,title:"Winning Streak",subtitle:"Win 3 in a row",current:3,target:3,reward:100,claimed:!0,icon:"🔥",color:"#FFD93D"},{id:4,title:"Speed Demon",subtitle:"Complete 5 under 2min",current:2,target:5,reward:300,claimed:!1,icon:"⚡",color:"#A8E6CF"},{id:5,title:"Perfect Score",subtitle:"Get 100% accuracy",current:0,target:1,reward:250,claimed:!1,icon:"⭐",color:"#C7B8FF"}];function cy(){gn();const[e,t]=d.useState(ly),[r,s]=d.useState(null),[a,o]=d.useState(ae.getCoins()),[i,l]=d.useState(!1),[c,u]=d.useState([]),m=e.length,p=e.filter(g=>g.current>=g.target).length,f=Math.round(p/m*100);d.useEffect(()=>{const g=setInterval(()=>{u(j=>{const S={id:Date.now(),x:Math.random()*100,y:Math.random()*100,size:Math.random()*20+10};return[...j.slice(-4),S]})},3e3);return()=>clearInterval(g)},[]);const w=(g,j)=>{s(g),navigator.vibrate&&navigator.vibrate([20,10,20]),setTimeout(()=>{var S;t(y=>y.map(v=>v.id===g?{...v,claimed:!0}:v)),o(y=>y+j),ae.addCoins(j,`Achievement: ${((S=e.find(y=>y.id===g))==null?void 0:S.title)||"Completed"}`),s(null),l(!0),setTimeout(()=>l(!1),2e3)},600)};return n.jsxs("div",{className:"achievements-screen",children:[n.jsx("style",{jsx:!0,children:`
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
      `}),n.jsxs("div",{className:"floating-shapes",children:[n.jsx("div",{className:"shape shape-1"}),n.jsx("div",{className:"shape shape-2"})]}),n.jsxs("div",{className:"header",children:[n.jsx("button",{className:"back-button",onClick:()=>window.history.back(),children:"← Back"}),n.jsxs("div",{className:"coins-display",children:["🪙 ",a.toLocaleString()]}),n.jsxs("div",{className:"title-section",children:[n.jsx("h1",{className:"main-title",children:"ACHIEVEMENTS"}),n.jsx("p",{className:"subtitle",children:"Complete challenges and earn awesome rewards!"})]})]}),n.jsxs("div",{className:"progress-overview",children:[n.jsx("div",{className:"card-glow",style:{"--card-color":"#FFD93D"}}),n.jsxs("div",{className:"overview-header",children:[n.jsx("span",{className:"overview-label",children:"🎮 Progress Tracker"}),n.jsxs("div",{className:"overview-stats",children:[n.jsx("span",{className:"trophy-icon",children:"🏆"}),n.jsxs("span",{className:"overview-value",children:[p,"/",m]})]})]}),n.jsx("div",{className:"progress-bar-main",children:n.jsx("div",{className:"progress-fill-main",style:{width:`${f}%`}})})]}),n.jsx("div",{className:"achievements-list",children:e.map(g=>{const j=Math.min(100,Math.round(g.current/g.target*100)),S=j===100,y=g.color+"CC";return n.jsxs("div",{className:`achievement-card ${S?"completed":""}`,style:{"--card-color":g.color,"--card-color-dark":y},children:[n.jsx("div",{className:"card-glow"}),S&&g.claimed&&n.jsx("div",{className:"completed-badge",children:"✓"}),n.jsxs("div",{className:"card-content",children:[n.jsx("div",{className:"achievement-icon",children:g.icon}),n.jsxs("div",{className:"achievement-details",children:[n.jsx("div",{className:"achievement-title",children:g.title}),n.jsx("div",{className:"achievement-subtitle",children:g.subtitle}),n.jsxs("div",{className:"progress-container",children:[n.jsx("div",{className:"progress-bar",children:n.jsx("div",{className:"progress-fill",style:{width:`${j}%`}})}),n.jsxs("div",{className:"progress-text",children:[n.jsxs("span",{children:[g.current,"/",g.target]}),n.jsxs("span",{className:"reward-badge",children:["🪙 ",g.reward]})]})]})]}),n.jsx("button",{onClick:()=>w(g.id,g.reward),disabled:!S||g.claimed,className:`claim-button ${g.claimed?"claimed":S?"can-claim":"in-progress"} ${r===g.id?"claiming":""}`,children:g.claimed?"✓":S?"CLAIM!":`${j}%`})]})]},g.id)})}),i&&n.jsx("div",{className:"celebration",children:"🎉"})]})}function dy(){const{player:e,updateDailyStreak:t}=gn(),r=(e==null?void 0:e.currentStreak)||0,s=(e==null?void 0:e.bestStreak)||0,a=(e==null?void 0:e.totalDays)||0;e!=null&&e.coins;const o=Te(),i=new Date,l=i.getDay(),c=()=>{const I=new Date(i);return I.setDate(i.getDate()-i.getDay()),I.toISOString().split("T")[0]},[u,m]=d.useState(null),[p,f]=d.useState(!1),[w,g]=d.useState(null),[j,S]=d.useState(null),[y,v]=d.useState(!1),x=d.useRef(null),N=d.useRef(null),[C]=tt("/sounds/coin.mp3",{volume:.75}),[R]=tt("/sounds/correct.mp3",{volume:.6}),[T,h]=d.useState(()=>{const I=localStorage.getItem("streaks_claimed")||"[]",z=JSON.parse(I),D=c(),E=z.filter(P=>P!==`week_${D}_day_0`);return localStorage.setItem("streaks_claimed",JSON.stringify(E)),E});d.useEffect(()=>{const I=()=>{window.scrollTo(0,0),document.documentElement.scrollTop=0,document.body.scrollTop=0;const D=document.querySelector("main");D&&(D.scrollTop=0)};I(),requestAnimationFrame(I);const z=setTimeout(I,100);return()=>clearTimeout(z)},[]),d.useEffect(()=>{v(!0),setTimeout(()=>v(!1),3e3)},[]);const b=[{label:"Mon",short:"M",dayIndex:1},{label:"Tue",short:"T",dayIndex:2},{label:"Wed",short:"W",dayIndex:3},{label:"Thu",short:"T",dayIndex:4},{label:"Fri",short:"F",dayIndex:5},{label:"Sat",short:"S",dayIndex:6},{label:"Sun",short:"S",dayIndex:0}],k=[{day:0,reward:"10",type:"coins",icon:"🎯",label:"Welcome Bonus"},{day:1,reward:"50",type:"coins",icon:"🪙",label:"50 Coins"},{day:2,reward:"100",type:"coins",icon:"🪙",label:"100 Coins"},{day:3,reward:"2x",type:"xp",icon:"⭐",label:"2x XP Boost"},{day:4,reward:"150",type:"coins",icon:"🪙",label:"150 Coins"},{day:5,reward:"Full",type:"energy",icon:"⚡",label:"Energy Refill"},{day:6,reward:"200",type:"coins",icon:"🪙",label:"200 Coins"},{day:7,reward:"Mystery",type:"mystery",icon:"🎁",label:"Mystery Box"}],_=I=>{const z=T.includes(`week_${c()}_day_${I}`);if(I===0)return{isCompleted:!0,isClaimed:z,canClaim:!z,isLocked:!1};const D=r>=I,E=D&&!z,P=r<I;return{isCompleted:D,isClaimed:z,canClaim:E,isLocked:P}},A=(I,z,D)=>{const E=_(z);if(E.isLocked){S({day:z,currentStreak:r}),setTimeout(()=>S(null),2e3);return}E.isClaimed||E.canClaim&&(m({...I,day:z}),f(!1),setTimeout(()=>{f(!0),R(),setTimeout(()=>{if(I.type==="coins"){const Y=parseInt(I.reward);if(N.current&&x.current){const L=N.current.getBoundingClientRect();C(),g({startRect:L,count:10,amount:Y})}}const P=`week_${c()}_day_${z}`,$=[...T,P];h($),localStorage.setItem("streaks_claimed",JSON.stringify($))},500),setTimeout(()=>{m(null),f(!1)},2500)},500))},q=(I,z)=>{if(b[z].dayIndex===l)return r>0?"today-completed":"today-pending";if(z<b.findIndex(E=>E.dayIndex===l)){const E=b.findIndex(P=>P.dayIndex===l)-z;return r>=E?"completed":"missed"}else return"future"},H=[{days:3,emoji:"⚡",label:"Starter",achieved:r>=3},{days:7,emoji:"🔥",label:"Week Warrior",achieved:r>=7},{days:30,emoji:"💎",label:"Champion",achieved:r>=30},{days:100,emoji:"👑",label:"Legend",achieved:r>=100}],V=H.find(I=>I.days>r)||H[H.length-1],K=Math.min(100,r/V.days*100),U=()=>{window.location.href="/play"},M=()=>{o(-1)};return n.jsxs("div",{className:"streaks-screen",children:[n.jsx("style",{jsx:!0,children:`
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
      `}),w&&n.jsx(or,{startRect:w.startRect,targetRef:x,count:w.count,onDone:()=>{ae.addCoins(w.amount,`Streak Reward - Day ${w.day||""}`),g(null)}}),n.jsxs("div",{className:"header",children:[n.jsxs("div",{className:"header-top",children:[n.jsx("button",{className:"back-button",onClick:M,children:"← Back"}),n.jsxs("div",{className:"coin-pill",ref:x,id:"coin-pill",children:[n.jsx("span",{className:"coin-icon",children:"🪙"}),n.jsx("span",{className:"coin-amount",children:ae.getCoins()})]})]}),n.jsxs("div",{className:"title-section",children:[n.jsx("h1",{className:"main-title",children:"STREAKS"}),n.jsx("p",{className:"subtitle",children:"Keep the fire burning!"})]})]}),n.jsxs("div",{className:"streak-hero",children:[n.jsx("div",{className:"fire-animation",children:"🔥"}),n.jsx("div",{className:"streak-number",children:r}),n.jsx("div",{className:"streak-label",children:"DAY STREAK"}),n.jsxs("div",{className:"stats-row",children:[n.jsxs("div",{className:"stat-card",children:[n.jsx("div",{className:"stat-value",children:s}),n.jsx("div",{className:"stat-label",children:"Best Streak"})]}),n.jsxs("div",{className:"stat-card",children:[n.jsx("div",{className:"stat-value",children:a}),n.jsx("div",{className:"stat-label",children:"Total Days"})]})]})]}),n.jsxs("div",{className:"weekly-progress-card",children:[n.jsxs("div",{className:"weekly-header",children:[n.jsx("div",{className:"weekly-title",children:"This Week's Progress"}),n.jsxs("div",{className:"weekly-counter",children:[n.jsx("span",{className:"weekly-counter-icon",children:"🔥"}),n.jsxs("span",{className:"weekly-counter-text",children:[Math.min(r,7),"/7"]})]})]}),n.jsx("div",{className:"weekly-days",children:b.map((I,z)=>{const D=q(I.dayIndex,z),E=I.dayIndex===l;return n.jsxs("div",{className:"day-item",children:[n.jsx("div",{className:`day-circle ${D}`,children:D==="completed"||D==="today-completed"?"":I.short}),n.jsx("div",{className:`day-label ${E?"today":""}`,children:I.label})]},z)})}),n.jsx("div",{className:"milestone-header",children:"Daily Rewards"}),n.jsx("div",{className:"rewards-grid",children:k.map((I,z)=>{const D=_(I.day);return n.jsxs("div",{className:`reward-item ${D.isLocked?"locked":D.canClaim?"can-claim":D.isClaimed?"completed":""}`,onClick:E=>A(I,I.day),children:[n.jsxs("div",{className:"reward-day",children:["Day ",I.day]}),n.jsx("div",{className:"reward-icon",children:I.icon}),n.jsx("div",{className:"reward-text",children:I.label})]},z)})})]}),n.jsxs("div",{className:"milestone-section",children:[n.jsx("div",{className:"milestone-header",children:"Next Milestone"}),n.jsxs("div",{className:"milestone-progress",children:[n.jsxs("div",{className:"milestone-info",children:[n.jsxs("div",{className:"milestone-current",children:[n.jsx("span",{className:"milestone-emoji",children:V.emoji}),n.jsx("span",{className:"milestone-text",children:V.label})]}),n.jsxs("span",{className:"milestone-target",children:[r,"/",V.days," days"]})]}),n.jsx("div",{className:"progress-bar-container",children:n.jsx("div",{className:"progress-bar-fill",style:{width:`${K}%`}})})]})]}),n.jsx("div",{className:"motivational-text",children:r===0?"Start your journey! Claim your Day 0 bonus and complete a quiz!":`Day ${r} strong! Keep going to unlock more rewards!`}),n.jsxs("button",{className:"play-button",onClick:U,children:[n.jsx("span",{children:"Continue Streak"}),n.jsx("span",{children:"→"})]}),j&&n.jsxs("div",{className:"locked-message",children:[n.jsx("span",{className:"locked-message-icon",children:"🔒"}),n.jsx("span",{className:"locked-message-text",children:j.day===1&&j.currentStreak===0?"Complete your first quiz to unlock this reward!":`Reach Day ${j.day} streak to unlock this reward!`})]}),u&&n.jsxs(n.Fragment,{children:[n.jsx("div",{className:"modal-overlay"}),n.jsx("div",{className:"reward-modal",ref:N,children:n.jsxs("div",{className:"gift-box",children:[n.jsxs("div",{className:"gift-box-body",children:[n.jsx("div",{className:"gift-box-ribbon"}),n.jsx("div",{className:"gift-box-ribbon-horizontal"})]}),n.jsx("div",{className:`gift-box-lid ${p?"opening":""}`,children:n.jsx("div",{className:"gift-box-bow",children:"🎀"})}),n.jsxs("div",{className:`gift-content ${p?"show":""}`,children:[n.jsx("div",{className:"gift-content-icon",children:u.icon}),n.jsxs("div",{className:"gift-content-title",children:["Day ",u.day]}),n.jsx("div",{className:"gift-content-desc",children:u.label})]})]})})]}),y&&n.jsx("div",{className:"celebration",children:"🎉"})]})}const uy=()=>{const e=new Date;return`${e.getFullYear()}-${e.getMonth()+1}-${e.getDate()}`},al=()=>{const e=localStorage.getItem("questProgress");return e?JSON.parse(e):{}},Hd=(e,t)=>{const r=al();r[e]=t,r.date=uy(),localStorage.setItem("questProgress",JSON.stringify(r))};function my(){const{player:e}=gn(),t=Te(),r=Xe(),s=al(),[a,o]=d.useState([{id:1,title:"Play 3 quizzes today",progress:s.dailyQuizzes||0,target:3,reward:60,claimed:s.dailyQuizzesClaimed||!1,icon:"🎮",color:"#FF6B6B",difficulty:"Easy",questType:"dailyQuizzes",route:"/quiz/play",routeParams:"?category=random&difficulty=random&from=quest"},{id:3,title:"Practice 15 questions",progress:s.practiceQuestions||0,target:15,reward:100,claimed:s.practiceQuestionsClaimed||!1,icon:"📚",color:"#FFD93D",difficulty:"Easy",questType:"practiceQuestions",route:"/practice/start",routeParams:"?questions=15&difficulty=easy&category=random&from=quest"},{id:4,title:"Win 5 in a row",progress:s.winStreak||0,target:5,reward:150,claimed:s.winStreakClaimed||!1,icon:"🔥",color:"#A8E6CF",difficulty:"Hard",questType:"winStreak",route:"/play",routeParams:"?mode=survival&from=quest"},{id:5,title:"Complete a speed run",progress:s.speedRun||0,target:1,reward:120,claimed:s.speedRunClaimed||!1,icon:"⚡",color:"#C7B8FF",difficulty:"Medium",questType:"speedRun",route:"/swipe/random-mix",routeParams:"?from=quest"}]),[i,l]=d.useState(ae.getCoins()),[c,u]=d.useState(null),[m,p]=d.useState(0),f=d.useRef(null),[w,g]=d.useState(null);d.useEffect(()=>{const N=()=>{const R=al();o(T=>T.map(h=>{const b=h.questType;return R[b]!==void 0?{...h,progress:R[b]}:h}))};window.addEventListener("storage",N);const C=()=>N();return window.addEventListener("focus",C),()=>{window.removeEventListener("storage",N),window.removeEventListener("focus",C)}},[]),d.useEffect(()=>{const N=R=>{console.log("Quest progress update received:",R.detail),o(T=>T.map(h=>h.questType==="practiceQuestions"&&R.detail.practiceQuestions?{...h,progress:R.detail.practiceQuestions}:h))};window.addEventListener("questProgressUpdate",N);const C=setInterval(()=>{try{const R=localStorage.getItem("questProgress");if(R){const T=JSON.parse(R);o(h=>h.map(b=>b.questType==="practiceQuestions"&&T.practiceQuestions&&b.progress!==T.practiceQuestions?{...b,progress:T.practiceQuestions}:b))}}catch(R){console.error("Error checking progress:",R)}},1e3);return()=>{window.removeEventListener("questProgressUpdate",N),clearInterval(C)}},[]),d.useEffect(()=>{var N;if((N=r.state)!=null&&N.questCompleted){const{questType:C,increment:R}=r.state;o(T=>T.map(h=>{if(h.questType===C){const b=Math.min(h.progress+(R||1),h.target);return Hd(C,b),{...h,progress:b}}return h})),window.history.replaceState({},document.title)}},[r]),d.useEffect(()=>{const N=a.filter(C=>C.progress>=C.target).length;p(Math.round(N/a.length*100))},[a]),d.useEffect(()=>{l((e==null?void 0:e.coins)||0)},[e==null?void 0:e.coins]);const j=N=>{navigator.vibrate&&navigator.vibrate([20]),sessionStorage.setItem("activeQuest",JSON.stringify({id:N.id,type:N.questType,title:N.title,currentProgress:N.progress,target:N.target})),t(N.route+N.routeParams)},S=()=>{sessionStorage.getItem("questsFromHome")==="true"?(sessionStorage.removeItem("questsFromHome"),t("/")):t("/profile")},y=N=>{navigator.vibrate&&navigator.vibrate([20,10,20]);try{const C=new Audio("/sounds/coin.mp3");C.volume=.75,C.play()}catch{console.log("Sound not available")}u(N.id),g({startRect:{left:window.innerWidth/2-50,top:window.innerHeight/2,width:100,height:100},count:Math.min(N.reward/10,10),amount:N.reward,questTitle:N.title}),setTimeout(()=>{o(C=>C.map(R=>R.id===N.id?(Hd(R.questType+"Claimed",!0),{...R,claimed:!0}):R)),u(null)},600)},v=N=>{switch(N){case"Easy":return"#10B981";case"Medium":return"#F59E0B";case"Hard":return"#EF4444";default:return"#6B7280"}},x=()=>{const N=new Date,C=new Date(N);C.setDate(C.getDate()+1),C.setHours(5,0,0,0);const R=C-N,T=Math.floor(R/(1e3*60*60)),h=Math.floor(R%(1e3*60*60)/(1e3*60));return`${T}h ${h}m`};return n.jsxs("div",{className:"quests-screen",children:[w&&n.jsx(or,{startRect:w.startRect,targetRef:f,count:w.count,onDone:()=>{l(N=>N+w.amount),ae.addCoins(w.amount,`Quest Reward: ${w.questTitle||"Completed"}`),g(null)}}),n.jsx("style",{jsx:!0,children:`
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
      `}),n.jsxs("div",{className:"animated-bg",children:[n.jsx("div",{className:"floating-icon",children:"🎮"}),n.jsx("div",{className:"floating-icon",children:"🎯"}),n.jsx("div",{className:"floating-icon",children:"🏆"}),n.jsx("div",{className:"floating-icon",children:"⭐"})]}),n.jsxs("div",{className:"header",children:[n.jsx("button",{className:"back-button",onClick:S,children:"← Back"}),n.jsxs("div",{className:"coins-display",ref:f,children:["🪙 ",i]}),n.jsxs("div",{className:"title-section",children:[n.jsx("h1",{className:"main-title",children:"Daily Quests"}),n.jsx("p",{className:"subtitle",children:"Complete challenges, earn rewards!"})]})]}),n.jsxs("div",{className:"daily-progress-card",children:[n.jsxs("div",{className:"progress-header",children:[n.jsx("span",{className:"progress-label",children:"Today's Progress"}),n.jsxs("span",{className:"progress-value",children:[m,"%"]})]}),n.jsx("div",{className:"progress-bar-container",children:n.jsx("div",{className:"progress-bar-fill",style:{width:`${m}%`}})})]}),n.jsx("div",{className:"quests-list",children:a.map(N=>{const C=Math.min(100,Math.round(N.progress/N.target*100)),R=C===100,T=N.color+"CC";return n.jsxs("div",{className:`quest-card ${R?"completed":""}`,style:{"--quest-color":N.color,"--quest-color-dark":T},children:[n.jsx("div",{className:"quest-accent"}),R&&N.claimed&&n.jsx("div",{className:"completed-checkmark",children:"✓"}),n.jsxs("div",{className:"quest-content",children:[n.jsx("div",{className:`quest-icon-container ${c===N.id?"animating":""}`,children:N.icon}),n.jsxs("div",{className:"quest-details",children:[n.jsxs("div",{className:"quest-header",children:[n.jsx("span",{className:"quest-title",children:N.title}),n.jsx("span",{className:"difficulty-badge",style:{background:`${v(N.difficulty)}20`,color:v(N.difficulty)},children:N.difficulty})]}),n.jsxs("div",{className:"progress-info",children:[n.jsx("div",{className:"mini-progress-bar",children:n.jsx("div",{className:"mini-progress-fill",style:{width:`${C}%`}})}),n.jsxs("div",{className:"progress-text",children:[n.jsxs("span",{className:"progress-numbers",children:[N.progress,"/",N.target]}),n.jsxs("span",{className:"reward-display",children:["🪙 ",N.reward]})]})]})]}),n.jsx("button",{onClick:()=>{R&&!N.claimed?y(N):R||j(N)},disabled:N.claimed,className:`action-button ${N.claimed?"claimed":R?"can-claim":"in-progress"}`,style:!R&&!N.claimed?{"--quest-color":N.color,"--quest-color-dark":T}:{},children:N.claimed?"✓":R?"Claim":"Do it"})]})]},N.id)})}),n.jsxs("div",{className:"timer-card",children:[n.jsx("div",{className:"timer-icon",children:"⏰"}),n.jsx("div",{className:"timer-label",children:"New Quests In"}),n.jsx("div",{className:"timer-value",children:x()})]}),c&&n.jsx("div",{className:"reward-animation",children:"🪙"})]})}function mc({title:e,subtitle:t,children:r}){const s=Te();return n.jsxs("div",{className:"min-h-full bg-black text-white px-4 pt-12",children:[n.jsxs("div",{className:"flex items-center justify-between mb-4",children:[n.jsx("button",{onClick:()=>s(-1),className:"px-3 py-1.5 rounded-xl border border-white/10 bg-white/5 text-sm",children:"← Back"}),n.jsxs("div",{className:"text-center",children:[n.jsx("div",{className:"text-base font-semibold leading-tight",children:e}),t&&n.jsx("div",{className:"text-xs text-white/60 leading-tight",children:t})]}),n.jsx("div",{className:"w-[68px]"})]}),r]})}function fy(){const e=Te(),[t,r]=d.useState(!0),[s,a]=d.useState(!0),[o,i]=d.useState(!0),[l,c]=d.useState(!1),[u,m]=d.useState("");d.useEffect(()=>{const f=Ke.getCurrentUser();f&&f.phone&&m(f.phone)},[]);const p=()=>{const w=JSON.parse(localStorage.getItem("currentUser")||"{}").phone;localStorage.removeItem("currentUser"),localStorage.removeItem("qp_player"),localStorage.removeItem("rememberCredentials"),sessionStorage.clear(),w?e("/auth/signin",{replace:!0,state:{phone:w}}):e("/auth",{replace:!0})};return n.jsxs(n.Fragment,{children:[n.jsx(mc,{title:"Settings",subtitle:"Make it yours",children:n.jsx("div",{className:"flex flex-col justify-center min-h-[calc(100vh-200px)]",children:n.jsxs("div",{className:"space-y-4",children:[n.jsxs("div",{className:"rounded-3xl border border-white/10 bg-gradient-to-br from-purple-900/20 to-indigo-900/20 backdrop-blur-sm p-2",children:[n.jsx("div",{className:"px-4 pt-3 pb-1",children:n.jsx("h3",{className:"text-xs font-semibold text-white/50 uppercase tracking-wider",children:"Preferences"})}),n.jsxs("div",{className:"divide-y divide-white/10",children:[n.jsx(ur,{icon:"🔊",label:"Sound",subtitle:"Game sounds & effects",right:n.jsx(ii,{on:t,set:r})}),n.jsx(ur,{icon:"📳",label:"Haptics",subtitle:"Vibration feedback",right:n.jsx(ii,{on:s,set:a})}),n.jsx(ur,{icon:"🔔",label:"Notifications",subtitle:"Daily reminders",right:n.jsx(ii,{on:o,set:i})})]})]}),n.jsxs("div",{className:"rounded-3xl border border-white/10 bg-gradient-to-br from-blue-900/20 to-purple-900/20 backdrop-blur-sm p-2",children:[n.jsx("div",{className:"px-4 pt-3 pb-1",children:n.jsx("h3",{className:"text-xs font-semibold text-white/50 uppercase tracking-wider",children:"Account"})}),n.jsxs("div",{className:"divide-y divide-white/10",children:[n.jsx(ur,{icon:"📱",label:"Phone Number",subtitle:u||"Not available",right:n.jsx("span",{className:"text-white/40 text-sm",children:"🔒"})}),n.jsx(ur,{icon:"✏️",label:"Edit Profile",subtitle:"Update your details",right:n.jsx("span",{className:"text-white/40 text-lg",children:"→"}),onClick:()=>e("/profile/edit")}),n.jsx(ur,{icon:"🔒",label:"Privacy Policy",subtitle:"Your data is safe",right:n.jsx("span",{className:"text-white/40 text-lg",children:"→"}),onClick:()=>e("/profile/privacy")})]})]}),n.jsxs("button",{className:`w-full rounded-3xl border border-red-500/30 bg-gradient-to-r from-red-900/30 to-pink-900/30 
                       py-4 text-red-300 font-semibold backdrop-blur-sm
                       transition-all duration-200 hover:from-red-900/40 hover:to-pink-900/40 
                       active:scale-[0.98] flex items-center justify-center gap-2`,onClick:()=>c(!0),children:[n.jsx("span",{children:"🚪"}),n.jsx("span",{children:"Sign Out"})]})]})})}),l&&n.jsx("div",{className:"fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-6 z-50",children:n.jsxs("div",{className:"bg-gradient-to-br from-gray-900 to-purple-900 rounded-3xl p-6 w-full max-w-sm border border-white/20 shadow-2xl",children:[n.jsxs("div",{className:"text-center mb-6",children:[n.jsx("div",{className:"text-5xl mb-4 animate-bounce",children:"👋"}),n.jsx("h3",{className:"text-xl font-bold mb-2 text-white",children:"Leaving Already?"}),n.jsx("p",{className:"text-white/60 text-sm",children:"You'll need to sign in again to continue your quiz journey"})]}),n.jsxs("div",{className:"flex gap-3",children:[n.jsx("button",{onClick:()=>c(!1),className:`flex-1 py-3 rounded-2xl bg-white/10 hover:bg-white/20 
                         transition-all duration-200 font-semibold text-white`,children:"Stay"}),n.jsx("button",{onClick:p,className:`flex-1 py-3 rounded-2xl bg-gradient-to-r from-red-500 to-pink-500 
                         hover:from-red-600 hover:to-pink-600 transition-all duration-200 
                         font-semibold text-white shadow-lg`,children:"Sign Out"})]})]})})]})}function ur({icon:e,label:t,subtitle:r,right:s,onClick:a}){return n.jsxs("button",{type:"button",onClick:a,className:`w-full flex items-center justify-between px-4 py-4 text-left
                 hover:bg-white/5 first:rounded-t-2xl last:rounded-b-2xl transition-all duration-200`,children:[n.jsxs("div",{className:"flex items-center gap-3",children:[e&&n.jsx("span",{className:"text-xl",children:e}),n.jsxs("div",{children:[n.jsx("div",{className:"text-sm font-semibold text-white",children:t}),r&&n.jsx("div",{className:"text-xs text-white/50 mt-0.5",children:r})]})]}),s]})}function ii({on:e,set:t}){return n.jsx("span",{onClick:r=>{r.stopPropagation(),t(s=>!s),navigator.vibrate&&navigator.vibrate(10)},className:["inline-flex w-12 h-7 items-center rounded-full transition-all duration-300 px-1 shadow-inner",e?"bg-gradient-to-r from-green-400 to-emerald-500 justify-end":"bg-gray-600 justify-start"].join(" "),role:"switch","aria-checked":e,children:n.jsx("span",{className:["w-5 h-5 rounded-full bg-white shadow-md transition-transform duration-300",e?"scale-110":"scale-100"].join(" ")})})}/*! Capacitor: https://capacitorjs.com/ - MIT License */var Or;(function(e){e.Unimplemented="UNIMPLEMENTED",e.Unavailable="UNAVAILABLE"})(Or||(Or={}));class li extends Error{constructor(t,r,s){super(t),this.message=t,this.code=r,this.data=s}}const hy=e=>{var t,r;return e!=null&&e.androidBridge?"android":!((r=(t=e==null?void 0:e.webkit)===null||t===void 0?void 0:t.messageHandlers)===null||r===void 0)&&r.bridge?"ios":"web"},py=e=>{const t=e.CapacitorCustomPlatform||null,r=e.Capacitor||{},s=r.Plugins=r.Plugins||{},a=()=>t!==null?t.name:hy(e),o=()=>a()!=="web",i=p=>{const f=u.get(p);return!!(f!=null&&f.platforms.has(a())||l(p))},l=p=>{var f;return(f=r.PluginHeaders)===null||f===void 0?void 0:f.find(w=>w.name===p)},c=p=>e.console.error(p),u=new Map,m=(p,f={})=>{const w=u.get(p);if(w)return console.warn(`Capacitor plugin "${p}" already registered. Cannot register plugins twice.`),w.proxy;const g=a(),j=l(p);let S;const y=async()=>(!S&&g in f?S=typeof f[g]=="function"?S=await f[g]():S=f[g]:t!==null&&!S&&"web"in f&&(S=typeof f.web=="function"?S=await f.web():S=f.web),S),v=(h,b)=>{var k,_;if(j){const A=j==null?void 0:j.methods.find(q=>b===q.name);if(A)return A.rtype==="promise"?q=>r.nativePromise(p,b.toString(),q):(q,H)=>r.nativeCallback(p,b.toString(),q,H);if(h)return(k=h[b])===null||k===void 0?void 0:k.bind(h)}else{if(h)return(_=h[b])===null||_===void 0?void 0:_.bind(h);throw new li(`"${p}" plugin is not implemented on ${g}`,Or.Unimplemented)}},x=h=>{let b;const k=(..._)=>{const A=y().then(q=>{const H=v(q,h);if(H){const V=H(..._);return b=V==null?void 0:V.remove,V}else throw new li(`"${p}.${h}()" is not implemented on ${g}`,Or.Unimplemented)});return h==="addListener"&&(A.remove=async()=>b()),A};return k.toString=()=>`${h.toString()}() { [capacitor code] }`,Object.defineProperty(k,"name",{value:h,writable:!1,configurable:!1}),k},N=x("addListener"),C=x("removeListener"),R=(h,b)=>{const k=N({eventName:h},b),_=async()=>{const q=await k;C({eventName:h,callbackId:q},b)},A=new Promise(q=>k.then(()=>q({remove:_})));return A.remove=async()=>{console.warn("Using addListener() without 'await' is deprecated."),await _()},A},T=new Proxy({},{get(h,b){switch(b){case"$$typeof":return;case"toJSON":return()=>({});case"addListener":return j?R:N;case"removeListener":return C;default:return x(b)}}});return s[p]=T,u.set(p,{name:p,proxy:T,platforms:new Set([...Object.keys(f),...j?[g]:[]])}),T};return r.convertFileSrc||(r.convertFileSrc=p=>p),r.getPlatform=a,r.handleError=c,r.isNativePlatform=o,r.isPluginAvailable=i,r.registerPlugin=m,r.Exception=li,r.DEBUG=!!r.DEBUG,r.isLoggingEnabled=!!r.isLoggingEnabled,r},xy=e=>e.Capacitor=py(e),ol=xy(typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}),fc=ol.registerPlugin;class Ff{constructor(){this.listeners={},this.retainedEventArguments={},this.windowListeners={}}addListener(t,r){let s=!1;this.listeners[t]||(this.listeners[t]=[],s=!0),this.listeners[t].push(r);const o=this.windowListeners[t];o&&!o.registered&&this.addWindowListener(o),s&&this.sendRetainedArgumentsForEvent(t);const i=async()=>this.removeListener(t,r);return Promise.resolve({remove:i})}async removeAllListeners(){this.listeners={};for(const t in this.windowListeners)this.removeWindowListener(this.windowListeners[t]);this.windowListeners={}}notifyListeners(t,r,s){const a=this.listeners[t];if(!a){if(s){let o=this.retainedEventArguments[t];o||(o=[]),o.push(r),this.retainedEventArguments[t]=o}return}a.forEach(o=>o(r))}hasListeners(t){var r;return!!(!((r=this.listeners[t])===null||r===void 0)&&r.length)}registerWindowListener(t,r){this.windowListeners[r]={registered:!1,windowEventName:t,pluginEventName:r,handler:s=>{this.notifyListeners(r,s)}}}unimplemented(t="not implemented"){return new ol.Exception(t,Or.Unimplemented)}unavailable(t="not available"){return new ol.Exception(t,Or.Unavailable)}async removeListener(t,r){const s=this.listeners[t];if(!s)return;const a=s.indexOf(r);this.listeners[t].splice(a,1),this.listeners[t].length||this.removeWindowListener(this.windowListeners[t])}addWindowListener(t){window.addEventListener(t.windowEventName,t.handler),t.registered=!0}removeWindowListener(t){t&&(window.removeEventListener(t.windowEventName,t.handler),t.registered=!1)}sendRetainedArgumentsForEvent(t){const r=this.retainedEventArguments[t];r&&(delete this.retainedEventArguments[t],r.forEach(s=>{this.notifyListeners(t,s)}))}}const Kd=e=>encodeURIComponent(e).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape),Vd=e=>e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent);class gy extends Ff{async getCookies(){const t=document.cookie,r={};return t.split(";").forEach(s=>{if(s.length<=0)return;let[a,o]=s.replace(/=/,"CAP_COOKIE").split("CAP_COOKIE");a=Vd(a).trim(),o=Vd(o).trim(),r[a]=o}),r}async setCookie(t){try{const r=Kd(t.key),s=Kd(t.value),a=`; expires=${(t.expires||"").replace("expires=","")}`,o=(t.path||"/").replace("path=",""),i=t.url!=null&&t.url.length>0?`domain=${t.url}`:"";document.cookie=`${r}=${s||""}${a}; path=${o}; ${i};`}catch(r){return Promise.reject(r)}}async deleteCookie(t){try{document.cookie=`${t.key}=; Max-Age=0`}catch(r){return Promise.reject(r)}}async clearCookies(){try{const t=document.cookie.split(";")||[];for(const r of t)document.cookie=r.replace(/^ +/,"").replace(/=.*/,`=;expires=${new Date().toUTCString()};path=/`)}catch(t){return Promise.reject(t)}}async clearAllCookies(){try{await this.clearCookies()}catch(t){return Promise.reject(t)}}}fc("CapacitorCookies",{web:()=>new gy});const vy=async e=>new Promise((t,r)=>{const s=new FileReader;s.onload=()=>{const a=s.result;t(a.indexOf(",")>=0?a.split(",")[1]:a)},s.onerror=a=>r(a),s.readAsDataURL(e)}),yy=(e={})=>{const t=Object.keys(e);return Object.keys(e).map(a=>a.toLocaleLowerCase()).reduce((a,o,i)=>(a[o]=e[t[i]],a),{})},by=(e,t=!0)=>e?Object.entries(e).reduce((s,a)=>{const[o,i]=a;let l,c;return Array.isArray(i)?(c="",i.forEach(u=>{l=t?encodeURIComponent(u):u,c+=`${o}=${l}&`}),c.slice(0,-1)):(l=t?encodeURIComponent(i):i,c=`${o}=${l}`),`${s}&${c}`},"").substr(1):null,wy=(e,t={})=>{const r=Object.assign({method:e.method||"GET",headers:e.headers},t),a=yy(e.headers)["content-type"]||"";if(typeof e.data=="string")r.body=e.data;else if(a.includes("application/x-www-form-urlencoded")){const o=new URLSearchParams;for(const[i,l]of Object.entries(e.data||{}))o.set(i,l);r.body=o.toString()}else if(a.includes("multipart/form-data")||e.data instanceof FormData){const o=new FormData;if(e.data instanceof FormData)e.data.forEach((l,c)=>{o.append(c,l)});else for(const l of Object.keys(e.data))o.append(l,e.data[l]);r.body=o;const i=new Headers(r.headers);i.delete("content-type"),r.headers=i}else(a.includes("application/json")||typeof e.data=="object")&&(r.body=JSON.stringify(e.data));return r};class jy extends Ff{async request(t){const r=wy(t,t.webFetchExtra),s=by(t.params,t.shouldEncodeUrlParams),a=s?`${t.url}?${s}`:t.url,o=await fetch(a,r),i=o.headers.get("content-type")||"";let{responseType:l="text"}=o.ok?t:{};i.includes("application/json")&&(l="json");let c,u;switch(l){case"arraybuffer":case"blob":u=await o.blob(),c=await vy(u);break;case"json":c=await o.json();break;case"document":case"text":default:c=await o.text()}const m={};return o.headers.forEach((p,f)=>{m[f]=p}),{data:c,headers:m,status:o.status,url:o.url}}async get(t){return this.request(Object.assign(Object.assign({},t),{method:"GET"}))}async post(t){return this.request(Object.assign(Object.assign({},t),{method:"POST"}))}async put(t){return this.request(Object.assign(Object.assign({},t),{method:"PUT"}))}async patch(t){return this.request(Object.assign(Object.assign({},t),{method:"PATCH"}))}async delete(t){return this.request(Object.assign(Object.assign({},t),{method:"DELETE"}))}}fc("CapacitorHttp",{web:()=>new jy});const Xd=fc("App",{web:()=>tc(()=>import("./web-5d3ad190.js"),[]).then(e=>new e.AppWeb)});function Ny(){const e=Te(),[t,r]=d.useState(!1),[s,a]=d.useState(!1),[o,i]=d.useState(!1),[l,c]=d.useState({name:"",phone:"",gender:"",ageGroup:"",city:"",email:"",state:"",country:""}),[u,m]=d.useState({name:"",phone:"",gender:"",ageGroup:"",city:"",email:"",state:"",country:""});d.useEffect(()=>{const j=JSON.parse(localStorage.getItem("currentUser")||"{}");if(!j.phone){const N=JSON.parse(localStorage.getItem("users")||"{}"),C=Object.keys(N).find(R=>N[R].username===j.username);if(C)j.phone=C,localStorage.setItem("currentUser",JSON.stringify(j));else{e("/profile");return}}const S=Ke.getUserData(j.phone);S.password;const y=JSON.parse(localStorage.getItem(`user_profile_${j.phone}`)||"{}"),v=N=>N?N.charAt(0).toUpperCase()+N.slice(1).toLowerCase():"",x={name:y.name||j.username||S.username||"",phone:j.phone||"",gender:v(y.gender||j.gender||S.gender||""),ageGroup:y.ageGroup||j.ageGroup||S.ageGroup||"",city:y.city||"",email:y.email||"",state:y.state||"",country:y.country||""};c(x),m(x)},[e]),d.useEffect(()=>{if(t){const j=JSON.stringify(l)!==JSON.stringify(u);i(j)}},[u,l,t]);const p=()=>{r(!0),m({...l}),i(!1)},f=()=>{r(!1),m({...l}),i(!1)},w=()=>{const j=JSON.parse(localStorage.getItem("currentUser")||"{}");if(!j.phone)return;Ke.updateUserProfile(j.phone,u)&&(c({...u}),r(!1),i(!1),a(!0),setTimeout(()=>a(!1),3e3))},g=(j,S)=>{m(y=>({...y,[j]:S}))};return n.jsxs(mc,{title:"Edit Profile",subtitle:"Update your information",children:[s&&n.jsx("div",{className:"fixed inset-0 flex items-center justify-center z-50 pointer-events-none",children:n.jsx("div",{className:"bg-green-500/20 border border-green-500/50 rounded-2xl px-8 py-4 backdrop-blur-sm animate-bounce",children:n.jsxs("div",{className:"flex items-center gap-2 text-green-400 font-semibold text-lg",children:[n.jsx("span",{children:"Profile updated"}),n.jsx("span",{className:"text-2xl",children:"✓"})]})})}),n.jsx("div",{className:"flex flex-col justify-center min-h-[calc(100vh-200px)]",children:n.jsxs("div",{className:"space-y-4",children:[n.jsxs("div",{className:"rounded-3xl border border-white/10 bg-gradient-to-br from-purple-900/20 to-indigo-900/20 backdrop-blur-sm p-4",children:[n.jsx("h3",{className:"text-xs font-semibold text-white/50 uppercase tracking-wider mb-4",children:"Basic Information"}),n.jsxs("div",{className:"space-y-3",children:[n.jsx(wn,{label:"Name",value:t?u.name:l.name,onChange:j=>g("name",j),placeholder:"Your full name",disabled:!t}),n.jsx(wn,{label:"Phone",value:l.phone,disabled:!0,icon:"🔒",helperText:"Cannot be changed"}),n.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[t?n.jsxs("div",{children:[n.jsx("label",{className:"text-xs text-white/60 mb-1 block",children:"Gender"}),n.jsxs("select",{value:u.gender||"",onChange:j=>g("gender",j.target.value),className:`w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 
                                text-white transition-all duration-200 hover:bg-white/10 
                                focus:bg-white/10 focus:border-white/30 focus:outline-none`,children:[n.jsx("option",{value:"",children:"Not set"}),n.jsx("option",{value:"Male",children:"Male"}),n.jsx("option",{value:"Female",children:"Female"}),n.jsx("option",{value:"Other",children:"Other"})]})]}):n.jsx(wn,{label:"Gender",value:l.gender||"Not set",disabled:!0}),t?n.jsxs("div",{children:[n.jsx("label",{className:"text-xs text-white/60 mb-1 block",children:"Age Group"}),n.jsxs("select",{value:u.ageGroup||"",onChange:j=>g("ageGroup",j.target.value),className:`w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 
                                text-white transition-all duration-200 hover:bg-white/10 
                                focus:bg-white/10 focus:border-white/30 focus:outline-none`,children:[n.jsx("option",{value:"",children:"Not set"}),n.jsx("option",{value:"under-5",children:"Under 5 yrs"}),n.jsx("option",{value:"5-10",children:"5-10 yrs"}),n.jsx("option",{value:"11-15",children:"11-15 yrs"}),n.jsx("option",{value:"16-20",children:"16-20 yrs"}),n.jsx("option",{value:"20+",children:"20+ yrs"})]})]}):n.jsx(wn,{label:"Age Group",value:l.ageGroup||"Not set",disabled:!0})]})]})]}),n.jsxs("div",{className:"rounded-3xl border border-white/10 bg-gradient-to-br from-blue-900/20 to-purple-900/20 backdrop-blur-sm p-4",children:[n.jsx("h3",{className:"text-xs font-semibold text-white/50 uppercase tracking-wider mb-4",children:"Contact & Location"}),n.jsxs("div",{className:"space-y-3",children:[n.jsx(wn,{label:"Email",value:t?u.email:l.email,onChange:j=>g("email",j),placeholder:"yourname@example.com",type:"email",helperText:t?"Optional":l.email?"":"Not provided",disabled:!t}),n.jsx(wn,{label:"City",value:t?u.city:l.city,onChange:j=>g("city",j),placeholder:"Add your city name",disabled:!t}),n.jsx(wn,{label:"State",value:t?u.state:l.state,onChange:j=>g("state",j),placeholder:"Your state/province",disabled:!t}),n.jsx(wn,{label:"Country",value:t?u.country:l.country,onChange:j=>g("country",j),placeholder:"Your country",disabled:!t})]})]}),t?n.jsxs("div",{className:"flex gap-3",children:[n.jsx("button",{onClick:f,className:`flex-1 py-3 rounded-2xl bg-white/10 hover:bg-white/20 
                         transition-all duration-200 font-semibold text-white`,children:"Cancel"}),n.jsx("button",{onClick:w,disabled:!o,className:`flex-1 py-3 rounded-2xl font-semibold text-white shadow-lg
                         transition-all duration-200 ${o?"bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 cursor-pointer":"bg-gray-600 cursor-not-allowed opacity-50"}`,children:"Save Changes"})]}):n.jsx("button",{onClick:p,className:`w-full py-3 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 
                       hover:from-purple-600 hover:to-pink-600 transition-all duration-200 
                       font-semibold text-white shadow-lg`,children:"Edit"})]})})]})}function wn({label:e,value:t,onChange:r,disabled:s,placeholder:a,type:o="text",icon:i,helperText:l}){return n.jsxs("div",{children:[n.jsx("label",{className:"text-xs text-white/60 mb-1 block",children:e}),n.jsxs("div",{className:"relative",children:[n.jsx("input",{type:o,value:t||"",onChange:c=>r&&r(c.target.value),disabled:s,placeholder:a,className:`w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 
                   text-white placeholder-white/30 transition-all duration-200
                   ${s?"opacity-50 cursor-not-allowed":"hover:bg-white/10 focus:bg-white/10 focus:border-white/30 focus:outline-none"}`}),i&&n.jsx("span",{className:"absolute right-3 top-1/2 -translate-y-1/2 text-white/50",children:i})]}),l&&n.jsx("p",{className:"text-xs text-white/40 mt-1",children:l})]})}function ky(){const e=Te();return n.jsx(mc,{title:"Privacy Policy",subtitle:"Your data, your control",children:n.jsx("div",{className:"flex flex-col justify-center min-h-[calc(100vh-200px)]",children:n.jsx("div",{className:"rounded-3xl border border-white/10 bg-gradient-to-br from-purple-900/20 to-indigo-900/20 backdrop-blur-sm p-8",children:n.jsxs("div",{className:"text-center",children:[n.jsx("div",{className:"text-6xl mb-4",children:"🔒"}),n.jsx("h2",{className:"text-2xl font-bold text-white mb-2",children:"Privacy Policy"}),n.jsx("p",{className:"text-white/60 text-lg mb-6",children:"Will be updated soon"}),n.jsxs("div",{className:"space-y-3 text-left text-white/50 text-sm",children:[n.jsx("p",{children:"• Your data is encrypted and secure"}),n.jsx("p",{children:"• We never share your personal information"}),n.jsx("p",{children:"• You can delete your account anytime"}),n.jsx("p",{children:"• Minimal data collection for best experience"})]}),n.jsx("button",{onClick:()=>e(-1),className:`mt-8 px-8 py-3 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 
                       hover:from-purple-600 hover:to-pink-600 transition-all duration-200 
                       font-semibold text-white shadow-lg`,children:"Got it"})]})})})})}const Sy=async e=>!!JSON.parse(localStorage.getItem("users")||"{}")[e],Cy=e=>JSON.parse(localStorage.getItem("users")||"{}")[e],Ey=()=>!!localStorage.getItem("currentUser");function Ty(){const e=Te(),t=Xe(),[r,s]=d.useState(()=>{var p;return sessionStorage.getItem("tempPhone")||((p=t.state)==null?void 0:p.phone)||""}),[a,o]=d.useState(()=>sessionStorage.getItem("tempCountryCode")||"+91"),[i,l]=d.useState(!1),[c,u]=d.useState("");d.useEffect(()=>{sessionStorage.setItem("tempPhone",r),sessionStorage.setItem("tempCountryCode",a)},[r,a]);const m=async()=>{u("");const p=r.replace(/\D/g,"");if(p.length!==10){u("Please enter a 10 digit phone number");return}l(!0);const f=a+p;await Sy(f)?e("/auth/signin",{state:{phone:f}}):e("/auth/avatar",{state:{phone:f}}),l(!1)};return d.useEffect(()=>{var p,f;if(!((p=t.state)!=null&&p.preventAutoSubmit)&&!((f=t.state)!=null&&f.fromAvatar)&&r&&r.length===10){const w=setTimeout(()=>{m()},500);return()=>clearTimeout(w)}},[]),n.jsxs("div",{className:"auth-screen",style:{background:"linear-gradient(135deg, #aa529bff 0%, #6d4397ff 100%)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},children:[n.jsxs("div",{className:"decorative-icons",children:[n.jsx("div",{className:"floating-icon",style:{top:"5%",left:"10%",animationDelay:"0s"},children:"🎮"}),n.jsx("div",{className:"floating-icon",style:{top:"15%",right:"10%",animationDelay:"5s"},children:"🏆"}),n.jsx("div",{className:"floating-icon",style:{top:"20%",left:"15%",animationDelay:"10s"},children:"⭐"}),n.jsx("div",{className:"floating-icon",style:{top:"75%",right:"20%",animationDelay:"15s"},children:"🎯"}),n.jsx("div",{className:"floating-icon",style:{top:"85%",left:"25%",animationDelay:"20s"},children:"🪙"})]}),n.jsx("div",{className:"mascot",style:{display:"flex",alignItems:"center",justifyContent:"center",marginBottom:"24px"},children:n.jsx("div",{style:{fontSize:"100px"},children:"🎮"})}),n.jsxs("div",{className:"content-card",children:[n.jsx("h1",{className:"title",children:"Ready to Play?"}),n.jsx("p",{className:"subtitle",children:"Enter your phone to start!"}),n.jsxs("div",{className:"phone-input-group",style:{display:"flex",gap:"8px",marginBottom:"24px",alignItems:"center",justifyContent:"center"},children:[n.jsxs("select",{className:"country-select",value:a,onChange:p=>o(p.target.value),style:{width:"auto",minWidth:"95px",padding:"16px 8px",border:"2px solid #e2e8f0",borderRadius:"16px",fontSize:"16px",fontWeight:"600",background:"white",transition:"all 0.3s",color:"#333",textAlign:"center"},children:[n.jsx("option",{value:"+91",children:"🇮🇳 +91"}),n.jsx("option",{value:"+1",children:"🇺🇸 +1"}),n.jsx("option",{value:"+44",children:"🇬🇧 +44"}),n.jsx("option",{value:"+86",children:"🇨🇳 +86"}),n.jsx("option",{value:"+81",children:"🇯🇵 +81"})]}),n.jsx("input",{type:"tel",className:"phone-input",placeholder:"Phone number",value:r,onChange:p=>{const f=p.target.value.replace(/\D/g,"");f.length<=10&&(s(f),c&&u(""))},maxLength:"10",inputMode:"numeric",pattern:"[0-9]*",style:{flex:1,padding:"16px",paddingLeft:"12px",border:"2px solid #e2e8f0",borderRadius:"16px",fontSize:"18px",fontWeight:"600",transition:"all 0.3s",background:"white",color:"#333",WebkitTextFillColor:"#333"}})]}),r.length>0&&r.length<10&&n.jsxs("p",{style:{color:"#f59e0b",fontSize:"14px",textAlign:"center",marginTop:"-16px",marginBottom:"16px"},children:["Enter ",10-r.length," more digit",10-r.length>1?"s":""]}),n.jsxs("button",{className:"submit-button",onClick:m,disabled:i,style:{width:"100%",padding:"18px",background:r.length===10?"linear-gradient(135deg, #667eea 0%, #764ba2 100%)":"linear-gradient(135deg, #94a3b8 0%, #cbd5e1 100%)",color:"white",border:"none",borderRadius:"16px",fontSize:"18px",fontWeight:"700",cursor:r.length===10?"pointer":"not-allowed",transition:"all 0.3s",display:"flex",alignItems:"center",justifyContent:"center",gap:"8px"},children:[i?"Loading...":"Start Adventure!",n.jsx("span",{children:"→"})]}),c&&n.jsx("p",{className:"error-message",style:{color:"#ef4444",fontSize:"14px",textAlign:"center",marginTop:"12px",fontWeight:"600"},children:c})]})]})}function Py(){const e=Xe(),t=Te(),{phone:r}=e.state||{},[s,a]=d.useState(""),[o,i]=d.useState(!1),[l,c]=d.useState(""),[u,m]=d.useState(!1),[p,f]=d.useState(!1),[w,g]=d.useState(""),j=Cy(r),[S,y]=d.useState(!1),[v,x]=d.useState(""),[N,C]=d.useState(!1);d.useEffect(()=>{if(localStorage.getItem("rememberCredentials")==="true"&&f(!0),r){const A=JSON.parse(localStorage.getItem(`user_profile_${r}`)||"{}"),H=JSON.parse(localStorage.getItem("users")||"{}")[r]||{},V=A.name||H.username||(j==null?void 0:j.username)||"";g(V)}},[r,j]);const R=async()=>{if(!s){c("Please enter your password");return}m(!0),c(""),await new Promise(_=>setTimeout(_,500)),j&&j.password===s?(Ke.setCurrentUser(r),p&&localStorage.setItem("rememberCredentials","true"),t("/",{replace:!0})):(c("Wrong password"),m(!1),setTimeout(()=>c(""),3e3))},T=()=>{alert("OTP feature coming soon!")},h=()=>{sessionStorage.removeItem("tempPhone"),sessionStorage.removeItem("tempCountryCode");const _=(r==null?void 0:r.slice(-10))||"";t("/auth",{replace:!0,state:{phone:_,preventAutoSubmit:!0}})},b=()=>{sessionStorage.removeItem("tempPhone"),sessionStorage.removeItem("tempCountryCode"),t("/auth",{replace:!0,state:{isNewAccount:!0}})},k=_=>{_.key==="Enter"&&R()};return n.jsxs("div",{className:"auth-screen",style:{background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)"},children:[n.jsx("button",{className:"back-button",onClick:h,style:{position:"absolute",top:"40px",left:"20px",background:"rgba(255,255,255,0.2)",border:"none",borderRadius:"50%",width:"40px",height:"40px",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",zIndex:10,backdropFilter:"blur(10px)",transition:"all 0.3s ease"},onMouseEnter:_=>_.target.style.background="rgba(255,255,255,0.3)",onMouseLeave:_=>_.target.style.background="rgba(255,255,255,0.2)",children:n.jsx("span",{style:{fontSize:"24px",color:"white"},children:"‹"})}),n.jsxs("div",{className:"decorative-icons",children:[n.jsx("div",{className:"floating-icon",style:{top:"10%",left:"5%",animationDelay:"0s"},children:"🎮"}),n.jsx("div",{className:"floating-icon",style:{top:"20%",right:"10%",animationDelay:"2s"},children:"🏆"}),n.jsx("div",{className:"floating-icon",style:{top:"70%",left:"8%",animationDelay:"4s"},children:"⭐"}),n.jsx("div",{className:"floating-icon",style:{top:"80%",right:"5%",animationDelay:"6s"},children:"🎯"})]}),n.jsxs("div",{className:"content-card",style:{background:"rgba(255, 255, 255, 0.95)",backdropFilter:"blur(20px)",borderRadius:"32px",padding:"32px",width:"90%",maxWidth:"400px",boxShadow:"0 20px 60px rgba(0, 0, 0, 0.3)",margin:"0 auto"},children:[(j==null?void 0:j.avatar)&&n.jsx("div",{style:{fontSize:"60px",textAlign:"center",marginBottom:"16px",animation:"bounce 2s infinite"},children:j.avatar.emoji}),n.jsxs("div",{className:"welcome-back",children:[n.jsx("h1",{className:"title",style:{fontSize:"28px",fontWeight:"800",textAlign:"center",marginBottom:"8px",background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"},children:"Welcome Back! 👋"}),n.jsx("p",{className:"subtitle",style:{fontSize:"16px",color:"#64748b",textAlign:"center",marginBottom:"24px"},children:w?`Hey ${w}!`:"Good to see you again!"})]}),n.jsx("div",{className:"phone-display",style:{fontSize:"18px",fontWeight:"600",color:"#667eea",marginBottom:"24px",textAlign:"center",padding:"12px",background:"rgba(102, 126, 234, 0.1)",borderRadius:"12px"},children:r}),n.jsxs("div",{style:{position:"relative",marginBottom:"16px"},children:[n.jsx("input",{type:o?"text":"password",className:"phone-input",placeholder:"Enter your password",value:s,onChange:_=>{a(_.target.value),l&&c("")},onKeyPress:k,style:{width:"100%",paddingRight:"45px",border:l?"2px solid #ef4444":"2px solid #e2e8f0",color:"#333",fontSize:"16px",WebkitTextFillColor:"#333",backgroundColor:"white"},autoFocus:!0}),n.jsx("button",{type:"button",onClick:()=>i(!o),style:{position:"absolute",right:"12px",top:"50%",transform:"translateY(-50%)",background:"none",border:"none",cursor:"pointer",padding:"5px",fontSize:"20px",color:"#667eea"},"aria-label":o?"Hide password":"Show password",children:o?"👁️":"👁️‍🗨️"})]}),n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",marginBottom:"20px"},children:[n.jsx("input",{type:"checkbox",id:"rememberMe",checked:p,onChange:_=>f(_.target.checked),style:{width:"18px",height:"18px",cursor:"pointer",accentColor:"#667eea"}}),n.jsx("label",{htmlFor:"rememberMe",style:{fontSize:"14px",color:"#64748b",cursor:"pointer",userSelect:"none"},children:"Remember me"})]}),l&&n.jsxs("div",{style:{color:"#f59e0b",fontSize:"13px",textAlign:"center",marginTop:"-12px",marginBottom:"16px",fontWeight:"500"},children:["⚠️ ",l]}),n.jsx("button",{className:"submit-button",onClick:R,disabled:u,style:{width:"100%",padding:"18px",background:u?"linear-gradient(135deg, #94a3b8 0%, #cbd5e1 100%)":"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",color:"white",border:"none",borderRadius:"16px",fontSize:"18px",fontWeight:"700",cursor:u?"not-allowed":"pointer",transition:"all 0.3s",display:"flex",alignItems:"center",justifyContent:"center",gap:"8px",marginBottom:"20px"},children:u?n.jsxs(n.Fragment,{children:[n.jsx("span",{children:"Signing in..."}),n.jsx("span",{className:"animate-spin",children:"⚙️"})]}):n.jsxs(n.Fragment,{children:[n.jsx("span",{children:"Sign In"}),n.jsx("span",{children:"🎮"})]})}),n.jsx("div",{className:"divider",style:{textAlign:"center",margin:"20px 0",position:"relative"},children:n.jsx("span",{className:"divider-text",style:{background:"rgba(255, 255, 255, 0.95)",padding:"0 16px",position:"relative",color:"#94a3b8",fontSize:"14px"},children:"OR"})}),n.jsx("button",{className:"otp-button",onClick:T,style:{width:"100%",padding:"16px",background:"white",border:"2px solid #e2e8f0",borderRadius:"16px",fontSize:"16px",fontWeight:"600",color:"#667eea",cursor:"pointer",transition:"all 0.3s",marginBottom:"12px"},onMouseEnter:_=>{_.currentTarget.style.background="rgba(102, 126, 234, 0.05)",_.currentTarget.style.borderColor="#667eea"},onMouseLeave:_=>{_.currentTarget.style.background="white",_.currentTarget.style.borderColor="#e2e8f0"},children:"Send OTP Instead"}),n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:"20px",paddingTop:"20px",borderTop:"1px solid #e2e8f0"},children:[n.jsx("a",{href:"#",onClick:_=>{_.preventDefault(),y(!0)},style:{color:"#7c3aed",fontSize:"14px",textDecoration:"none",fontWeight:"600"},children:"Forgot password?"}),n.jsx("a",{href:"#",onClick:_=>{_.preventDefault(),b()},style:{color:"#7c3aed",fontSize:"14px",textDecoration:"none",fontWeight:"600"},children:"Create new account"})]})]}),S&&n.jsx("div",{className:"fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-6 z-50",children:n.jsxs("div",{className:"bg-gradient-to-br from-gray-900 to-purple-900 rounded-3xl p-6 w-full max-w-sm border border-white/20 shadow-2xl",children:[n.jsxs("div",{className:"text-center mb-6",children:[n.jsx("div",{className:"text-5xl mb-4",children:"🔐"}),n.jsx("h3",{className:"text-xl font-bold mb-2 text-white",children:"Reset Password"}),n.jsx("p",{className:"text-white/60 text-sm",children:"Enter your new password"})]}),n.jsxs("div",{className:"relative mb-4",children:[n.jsx("input",{type:o?"text":"password",value:v,onChange:_=>x(_.target.value),placeholder:"New password (min 6 characters)",className:`w-full px-4 py-3 pr-12 rounded-xl bg-white/10 border border-white/20 
                        text-white placeholder-white/50`,autoFocus:!0}),n.jsx("button",{type:"button",onClick:()=>i(!o),className:"absolute right-3 top-1/2 -translate-y-1/2 text-white/70 hover:text-white",style:{background:"none",border:"none",cursor:"pointer",padding:"5px",fontSize:"20px"},children:o?"👁️":"👁️‍🗨️"})]}),n.jsxs("div",{className:"flex gap-3",children:[n.jsx("button",{onClick:()=>{y(!1),x("")},className:`flex-1 py-3 rounded-2xl bg-white/10 hover:bg-white/20 
                         transition-all duration-200 font-semibold text-white`,children:"Cancel"}),n.jsx("button",{onClick:()=>{if(v.length>=6){const _=JSON.parse(localStorage.getItem("users")||"{}");_[r]&&(_[r].password=v,localStorage.setItem("users",JSON.stringify(_)),y(!1),x(""),a(v),C(!0),setTimeout(()=>C(!1),2e3))}else alert("Password must be at least 6 characters")},className:`flex-1 py-3 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-500 
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
      `})]})}function Ry(){const e=Xe(),t=Te(),{phone:r}=e.state||{},[s,a]=d.useState(()=>{var c;if((c=e.state)!=null&&c.avatar)return e.state.avatar;const l=sessionStorage.getItem("tempAvatar");return l?JSON.parse(l):null}),o=[{id:1,emoji:"🤖",name:"Robot",color:"#667eea"},{id:2,emoji:"🦄",name:"Unicorn",color:"#ec4899"},{id:3,emoji:"🐉",name:"Dragon",color:"#10b981"},{id:4,emoji:"🧙",name:"Wizard",color:"#8b5cf6"},{id:5,emoji:"👨‍🚀",name:"Astronaut",color:"#3b82f6"},{id:6,emoji:"🥷",name:"Ninja",color:"#1f2937"}];d.useEffect(()=>{s&&sessionStorage.setItem("tempAvatar",JSON.stringify(s))},[s]);const i=()=>{s&&t("/auth/username",{state:{phone:r,avatar:s}})};return n.jsxs("div",{className:"auth-screen",style:{background:"linear-gradient(135deg, #1e3a8a 0%, #3730a3 35%, #6d28d9 70%, #a78bfa 100%)"},children:[n.jsx("button",{className:"back-button",onClick:()=>t("/auth",{state:{phone:r==null?void 0:r.replace(/^\+\d{1,3}/,""),fromAvatar:!0}}),style:{position:"absolute",top:"40px",left:"20px",background:"rgba(255,255,255,0.15)",border:"none",borderRadius:"50%",width:"40px",height:"40px",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",zIndex:10,backdropFilter:"blur(10px)",transition:"all 0.3s ease"},onMouseEnter:l=>l.target.style.background="rgba(255,255,255,0.25)",onMouseLeave:l=>l.target.style.background="rgba(255,255,255,0.15)",children:n.jsx("span",{style:{fontSize:"24px",color:"rgba(194, 128, 190, 0.9)"},children:"‹"})}),n.jsxs("div",{className:"content-card",style:{background:"rgba(248, 250, 252, 0.95)",backdropFilter:"blur(20px)",borderRadius:"32px",padding:"24px 20px",width:"95%",maxWidth:"100%",boxShadow:"0 20px 60px rgba(0, 0, 0, 0.3)"},children:[n.jsxs("div",{className:"progress-dots",children:[n.jsx("div",{className:"dot active",style:{background:"#3730a3"}}),n.jsx("div",{className:"dot",style:{background:"#bf89ceff"}})]}),n.jsx("h1",{className:"title",style:{fontSize:"28px",fontWeight:"800",textAlign:"center",marginBottom:"8px",background:"linear-gradient(135deg, #1e3a8a 0%, #6d28d9 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"},children:"Pick Your Hero!"}),n.jsx("p",{className:"subtitle",style:{fontSize:"16px",color:"#64748b",textAlign:"center",marginBottom:"32px"},children:"Choose your quiz champion"}),n.jsx("div",{className:"avatar-grid",style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"10px",marginBottom:"32px",padding:"0",maxWidth:"500px",margin:"0 auto 32px auto"},children:o.map(l=>n.jsxs("div",{className:`avatar-card ${(s==null?void 0:s.id)===l.id?"selected":""}`,onClick:()=>a(l),style:{aspectRatio:"1",borderRadius:"20px",background:(s==null?void 0:s.id)===l.id?"linear-gradient(135deg, rgba(55, 48, 163, 0.1), rgba(109, 40, 217, 0.1))":"white",border:(s==null?void 0:s.id)===l.id?"3px solid #3730a3":"3px solid transparent",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",cursor:"pointer",transition:"all 0.3s",boxShadow:(s==null?void 0:s.id)===l.id?"0 4px 20px rgba(55, 48, 163, 0.2)":"0 2px 10px rgba(0, 0, 0, 0.05)",transform:(s==null?void 0:s.id)===l.id?"scale(1.05)":"scale(1)"},onMouseEnter:c=>{(s==null?void 0:s.id)!==l.id&&(c.currentTarget.style.transform="scale(1.05)",c.currentTarget.style.boxShadow="0 4px 20px rgba(55, 48, 163, 0.15)")},onMouseLeave:c=>{(s==null?void 0:s.id)!==l.id&&(c.currentTarget.style.transform="scale(1)",c.currentTarget.style.boxShadow="0 2px 10px rgba(0, 0, 0, 0.05)")},children:[n.jsx("div",{className:"avatar-emoji",style:{fontSize:"40px",marginBottom:"8px"},children:l.emoji}),n.jsx("div",{className:"avatar-name",style:{fontSize:"14px",fontWeight:"600",color:(s==null?void 0:s.id)===l.id?"#3730a3":"#64748b"},children:l.name})]},l.id))}),n.jsxs("button",{className:"submit-button",disabled:!s,onClick:i,style:{width:"100%",padding:"18px",background:s?"linear-gradient(135deg, #3730a3 0%, #6d28d9 100%)":"linear-gradient(135deg, #94a3b8 0%, #cbd5e1 100%)",color:"white",border:"none",borderRadius:"16px",fontSize:"18px",fontWeight:"700",cursor:s?"pointer":"not-allowed",transition:"all 0.3s",display:"flex",alignItems:"center",justifyContent:"center",gap:"8px",boxShadow:s?"0 4px 20px rgba(55, 48, 163, 0.3)":"none"},onMouseEnter:l=>{s&&(l.currentTarget.style.transform="translateY(-2px)",l.currentTarget.style.boxShadow="0 6px 30px rgba(55, 48, 163, 0.4)")},onMouseLeave:l=>{s&&(l.currentTarget.style.transform="translateY(0)",l.currentTarget.style.boxShadow="0 4px 20px rgba(55, 48, 163, 0.3)")},children:["Continue",n.jsx("span",{children:"→"})]})]})]})}function _y(){const e=Xe(),t=Te(),{phone:r,avatar:s}=e.state||{},[a,o]=d.useState(""),[i,l]=d.useState(""),[c,u]=d.useState(""),[m,p]=d.useState(""),[f,w]=d.useState(""),g=[{value:"under-5",label:"Under 5 yrs"},{value:"5-10",label:"5-10 yrs"},{value:"11-15",label:"11-15 yrs"},{value:"16-20",label:"16-20 yrs"},{value:"20+",label:"20+ yrs"}],j=()=>{if(w(""),!a){w("Please enter your name");return}if(!i||i.length<6){w("Password must be at least 6 characters");return}if(!c){w("Please select your gender");return}if(!m){w("Please select your age group");return}const y=i||"123456",v=JSON.parse(localStorage.getItem("users")||"{}");v[r]={username:a,gender:c,ageGroup:m,avatar:s,password:y,phone:r,createdAt:new Date().toISOString()},localStorage.setItem("users",JSON.stringify(v)),localStorage.setItem("currentUser",JSON.stringify({phone:r,username:a,gender:c,ageGroup:m,avatar:s}));const x={name:a,level:1,coins:0,currentStreak:0,xp:0};localStorage.setItem("qp_player",JSON.stringify(x)),localStorage.setItem("userName",a),t("/welcome",{state:{username:a},replace:!0})},S=()=>{t("/auth/avatar",{state:{phone:r,avatar:s}})};return n.jsxs("div",{className:"auth-screen",style:{background:"linear-gradient(135deg, #6b46c1 0%, #9333ea 50%, #ec4899 100%)"},children:[n.jsx("button",{className:"back-button",onClick:S,style:{position:"absolute",top:"40px",left:"20px",background:"rgba(255,255,255,0.2)",border:"none",borderRadius:"50%",width:"40px",height:"40px",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",zIndex:10,backdropFilter:"blur(10px)",transition:"all 0.3s ease"},onMouseEnter:y=>y.target.style.background="rgba(255,255,255,0.3)",onMouseLeave:y=>y.target.style.background="rgba(255,255,255,0.2)",children:n.jsx("span",{style:{fontSize:"24px",color:"white"},children:"‹"})}),n.jsxs("div",{className:"content-card",children:[n.jsxs("div",{className:"progress-dots",children:[n.jsx("div",{className:"dot"}),n.jsx("div",{className:"dot active",style:{background:"#9333ea"}})]}),n.jsx("div",{style:{fontSize:"60px",textAlign:"center",marginBottom:"16px"},children:s==null?void 0:s.emoji}),n.jsx("h1",{className:"title",style:{background:"linear-gradient(135deg, #6b46c1 0%, #ec4899 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"},children:"Almost Done!"}),n.jsx("p",{className:"subtitle",children:"Tell us about yourself"}),n.jsxs("div",{style:{marginBottom:"24px"},children:[n.jsx("input",{type:"text",className:"phone-input",placeholder:"Enter your name...",value:a,onChange:y=>o(y.target.value),style:{width:"100%",marginBottom:"20px",color:"#333",fontSize:"16px",WebkitTextFillColor:"#333",backgroundColor:"white"}}),n.jsx("input",{type:"password",className:"phone-input",placeholder:"Create a password...",value:i,onChange:y=>l(y.target.value),style:{width:"100%",marginBottom:"20px",marginTop:"10px"}}),n.jsxs("div",{style:{marginBottom:"20px"},children:[n.jsx("label",{style:{fontSize:"14px",color:"#64748b",marginBottom:"8px",display:"block"},children:"Gender"}),n.jsxs("div",{style:{display:"flex",gap:"8px"},children:[n.jsx("button",{onClick:()=>u("male"),style:{flex:1,padding:"12px",border:"2px solid",borderColor:c==="male"?"#9333ea":"#e9d5ff",borderRadius:"12px",background:c==="male"?"rgba(147, 51, 234, 0.1)":"white",cursor:"pointer",fontSize:"14px",fontWeight:"600",color:c==="male"?"#9333ea":"#64748b",transition:"all 0.3s"},children:"👦 Male"}),n.jsx("button",{onClick:()=>u("female"),style:{flex:1,padding:"12px",border:"2px solid",borderColor:c==="female"?"#9333ea":"#e9d5ff",borderRadius:"12px",background:c==="female"?"rgba(147, 51, 234, 0.1)":"white",cursor:"pointer",fontSize:"14px",fontWeight:"600",color:c==="female"?"#9333ea":"#64748b",transition:"all 0.3s"},children:"👧 Female"}),n.jsx("button",{onClick:()=>u("other"),style:{flex:1,padding:"12px",border:"2px solid",borderColor:c==="other"?"#9333ea":"#e9d5ff",borderRadius:"12px",background:c==="other"?"rgba(147, 51, 234, 0.1)":"white",cursor:"pointer",fontSize:"14px",fontWeight:"600",color:c==="other"?"#9333ea":"#64748b",transition:"all 0.3s"},children:"🌈 Other"})]})]}),n.jsxs("div",{style:{marginBottom:"20px"},children:[n.jsx("label",{style:{fontSize:"14px",color:"#64748b",marginBottom:"8px",display:"block"},children:"Age Group"}),n.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"8px"},children:g.map(y=>n.jsx("button",{onClick:()=>p(y.value),style:{padding:"10px 4px",border:"2px solid",borderColor:m===y.value?"#9333ea":"#e9d5ff",borderRadius:"12px",background:m===y.value?"rgba(147, 51, 234, 0.1)":"white",cursor:"pointer",fontSize:"12px",fontWeight:"600",color:m===y.value?"#9333ea":"#64748b",transition:"all 0.3s"},children:y.label},y.value))})]}),f&&n.jsx("div",{style:{color:"#ef4444",fontSize:"14px",textAlign:"center",marginBottom:"16px"},children:f})]}),n.jsx("button",{className:"submit-button",onClick:j,disabled:!a||!c||!m,style:{width:"100%",padding:"18px",background:a&&c&&m?"linear-gradient(135deg, #6b46c1 0%, #ec4899 100%)":"linear-gradient(135deg, #94a3b8 0%, #cbd5e1 100%)",color:"white",border:"none",borderRadius:"16px",fontSize:"18px",fontWeight:"700",cursor:a&&c&&m?"pointer":"not-allowed",transition:"all 0.3s",display:"flex",alignItems:"center",justifyContent:"center",gap:"8px"},children:"Let's Start! 🚀"})]})]})}function Ay(){var p;const e=Te(),t=Xe(),[r,s]=d.useState(!1),[a,o]=d.useState(!1),[i,l]=d.useState(!1),c=((p=t.state)==null?void 0:p.username)||localStorage.getItem("userName")||"Champion",u=c.length>12;d.useEffect(()=>{sessionStorage.setItem("justSignedUp","true"),setTimeout(()=>s(!0),100),setTimeout(()=>o(!0),2e3)},[]);const m=()=>{l(!0),setTimeout(()=>{e("/",{replace:!0})},350)};return n.jsxs("div",{className:"fixed inset-0 z-50 flex items-center justify-center overflow-hidden transition-opacity",style:{background:"radial-gradient(circle at center, #1a1a2e 0%, #0f0f0f 100%)",opacity:i?.3:1,transitionDuration:"400ms"},children:[n.jsxs("div",{className:"absolute inset-0 flex items-center justify-center",children:[n.jsx("div",{className:"absolute",style:{width:"100px",height:"100px",borderRadius:"50%",background:"radial-gradient(circle, rgba(147, 51, 234, 0.8), transparent)",animation:"pulseExpand 2.5s ease-out infinite"}}),n.jsx("div",{className:"absolute",style:{width:"100px",height:"100px",borderRadius:"50%",background:"radial-gradient(circle, rgba(236, 72, 153, 0.8), transparent)",animation:"pulseExpand 2.5s ease-out 0.5s infinite"}}),n.jsx("div",{className:"absolute",style:{width:"100px",height:"100px",borderRadius:"50%",background:"radial-gradient(circle, rgba(59, 130, 246, 0.8), transparent)",animation:"pulseExpand 2.5s ease-out 1s infinite"}}),n.jsx("div",{className:"absolute",style:{width:"80px",height:"80px",borderRadius:"50%",background:"radial-gradient(circle, rgba(255, 255, 255, 0.9), rgba(147, 51, 234, 0.4))",boxShadow:"0 0 60px 20px rgba(147, 51, 234, 0.6)",animation:"glow 2s ease-in-out infinite"}})]}),n.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:[...Array(12)].map((f,w)=>n.jsx("div",{className:"absolute",style:{width:"2px",height:"100%",background:"linear-gradient(to bottom, transparent, rgba(147, 51, 234, 0.3), transparent)",transform:`rotate(${w*30}deg)`,animation:`fadeInOut 2.5s ease-in-out ${w*.1}s infinite`}},w))}),n.jsx("div",{className:`absolute z-10 transition-all duration-1000
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
      `})]})}function Iy(){return d.useState(!1),null}const Ly={name:(()=>{const e=JSON.parse(localStorage.getItem("currentUser")||"{}");return e.username?e.username.split(" ")[0]:"Player"})(),avatar:"wizard",level:1,totalXP:0,energy:ft.MAX_ENERGY,energyRegenAt:null,comboStreak:0,bestCombo:0,currentStreak:0,bestStreak:0,totalDays:0,lastPlayedDate:null,totalQuizzes:0,totalCorrect:0,achievements:[],unlockedAvatars:["wizard","knight"],createdAt:Date.now()};function Dy(){const[e,t]=d.useState(()=>{const u=localStorage.getItem(ft.STORAGE_KEYS.PLAYER),m=JSON.parse(localStorage.getItem("currentUser")||"{}");if(u){const p=JSON.parse(u);return m.username&&(p.name=m.username.split(" ")[0]),p.unlockedAvatars||(p.unlockedAvatars=["wizard","knight"]),p}return Ly});d.useEffect(()=>{localStorage.setItem(ft.STORAGE_KEYS.PLAYER,JSON.stringify(e))},[e]),d.useEffect(()=>{if(e.energy<ft.MAX_ENERGY&&e.energyRegenAt){const u=setInterval(()=>{const m=Date.now();m>=e.energyRegenAt&&t(p=>({...p,energy:Math.min(p.energy+1,ft.MAX_ENERGY),energyRegenAt:p.energy+1<ft.MAX_ENERGY?m+ft.ENERGY_REGEN_TIME:null}))},6e4);return()=>clearInterval(u)}},[e.energy,e.energyRegenAt]);const r=d.useCallback(u=>{t(m=>{const p=m.totalXP+u,f=Pd(m.totalXP),w=Pd(p);let g=[...m.unlockedAvatars];return w>f&&ft.AVATARS.forEach(j=>{j.unlockLevel<=w&&!g.includes(j.id)&&g.push(j.id)}),{...m,totalXP:p,level:w,unlockedAvatars:g}})},[]),s=d.useCallback(u=>{console.log("[DEPRECATED] addCoins called with:",u)},[]),a=d.useCallback((u=1)=>e.energy<u?!1:(t(m=>({...m,energy:m.energy-u,energyRegenAt:m.energyRegenAt||Date.now()+ft.ENERGY_REGEN_TIME})),!0),[e.energy]),o=d.useCallback(u=>{t(m=>{const p=u?m.comboStreak+1:0;return{...m,comboStreak:p,bestCombo:Math.max(m.bestCombo,p)}})},[]),i=d.useCallback(()=>{t(u=>({...u,comboStreak:0}))},[]),l=d.useCallback(u=>{e.unlockedAvatars.includes(u)&&t(m=>({...m,avatar:u}))},[e.unlockedAvatars]),c=d.useCallback(()=>{const u=new Date().toDateString();t(m=>{if(m.lastPlayedDate===u)return m;const p=new Date;p.setDate(p.getDate()-1);const f=p.toDateString();let w=m.currentStreak;return m.lastPlayedDate===f?w=m.currentStreak+1:(m.lastPlayedDate,w=1),{...m,currentStreak:w,bestStreak:Math.max(m.bestStreak,w),totalDays:m.totalDays+1,lastPlayedDate:u}})},[]);return{player:e,addXP:r,addCoins:s,useEnergy:a,updateCombo:o,resetCombo:i,changeAvatar:l,updateDailyStreak:c,levelProgress:eg(e.totalXP)}}window.history.replaceState({path:window.location.pathname,preventBack:!0},"",window.location.pathname);window.history.pushState({path:window.location.pathname,preventBack:!0},"",window.location.pathname);window.userService=Ke;const $f=d.createContext(null),gn=()=>{const e=d.useContext($f);if(!e)throw new Error("useGame must be used within GameProvider");return e};function zy({children:e}){const t=Dy(),r=To(),s={...t,coins:r.coins,xp:r.xp,level:r.level,recordQuizComplete:r.recordQuizComplete,recordPracticeComplete:r.recordPracticeComplete,getTodaySummary:r.getTodaySummary};return n.jsx($f.Provider,{value:s,children:e})}function My(){const[e,t]=d.useState(!1),[r,s]=d.useState(!1);return d.useEffect(()=>{(()=>{const o=Ey();s(o),t(!0)})()},[]),d.useEffect(()=>{let a=0,o=null,i=null;return(async()=>{try{i=await Xd.addListener("backButton",()=>{const c=window.location.pathname;c==="/"||c==="/home"?(a++,a===1?(console.log("Press back again to exit"),o=setTimeout(()=>{a=0},2e3)):a===2&&(clearTimeout(o),Xd.minimizeApp())):window.history.back()})}catch(c){console.error("Error setting up back button handler:",c)}})(),()=>{i&&typeof i.remove=="function"&&i.remove(),o&&clearTimeout(o)}},[]),e?!r&&!window.location.pathname.startsWith("/auth")?(window.location.href="/auth",null):n.jsxs(zy,{children:[n.jsxs(ux,{children:[n.jsx(Re,{path:"/auth",element:n.jsx(Ty,{})}),n.jsx(Re,{path:"/auth/signin",element:n.jsx(Py,{})}),n.jsx(Re,{path:"/auth/avatar",element:n.jsx(Ry,{})}),n.jsx(Re,{path:"/auth/username",element:n.jsx(_y,{})}),n.jsx(Re,{path:"/welcome",element:n.jsx(Ay,{})}),n.jsxs(Re,{element:n.jsx(Gx,{}),children:[n.jsx(Re,{path:"/",element:n.jsx(Ad,{})}),n.jsx(Re,{path:"/play",element:n.jsx(Qg,{})}),n.jsx(Re,{path:"/play/party",element:n.jsx(hv,{})}),n.jsx(Re,{path:"/profile",element:n.jsx(Ov,{})}),n.jsx(Re,{path:"/profile/leaderboard",element:n.jsx(Fv,{})}),n.jsx(Re,{path:"/profile/history",element:n.jsx(Qv,{})}),n.jsx(Re,{path:"/profile/rewards",element:n.jsx(oy,{})}),n.jsx(Re,{path:"/profile/badges",element:n.jsx(iy,{})}),n.jsx(Re,{path:"/profile/achievements",element:n.jsx(cy,{})}),n.jsx(Re,{path:"/profile/streaks",element:n.jsx(dy,{})}),n.jsx(Re,{path:"/profile/quests",element:n.jsx(my,{})}),n.jsx(Re,{path:"/profile/settings",element:n.jsx(fy,{})}),n.jsx(Re,{path:"/profile/edit",element:n.jsx(Ny,{})}),n.jsx(Re,{path:"/profile/privacy",element:n.jsx(ky,{})}),n.jsx(Re,{path:"/swipe",element:n.jsx(xv,{})}),n.jsx(Re,{path:"/leaders",element:n.jsx(lx,{to:"/profile/leaderboard",replace:!0})}),n.jsx(Re,{path:"/quiz/:category",element:n.jsx(ov,{})}),n.jsx(Re,{path:"/quiz/play",element:n.jsx(vv,{})}),n.jsx(Re,{path:"/practice/start",element:n.jsx(yv,{})}),n.jsx(Re,{path:"/surprise",element:n.jsx(Mv,{})}),n.jsx(Re,{path:"*",element:n.jsx(Ad,{})})]})]}),n.jsx(Iy,{})]}):n.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh",backgroundColor:"#000"},children:n.jsx("div",{style:{color:"#fff"},children:"Loading..."})})}ci.createRoot(document.getElementById("root")).render(n.jsx(gt.StrictMode,{children:n.jsx(zx,{children:n.jsx(My,{})})}));export{Ff as W,Uf as c,Jd as g};
