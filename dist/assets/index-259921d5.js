(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();var x0=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Pu(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var zu={exports:{}},Vi={},Tu={exports:{}},fe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cs=Symbol.for("react.element"),g0=Symbol.for("react.portal"),v0=Symbol.for("react.fragment"),y0=Symbol.for("react.strict_mode"),b0=Symbol.for("react.profiler"),w0=Symbol.for("react.provider"),j0=Symbol.for("react.context"),k0=Symbol.for("react.forward_ref"),N0=Symbol.for("react.suspense"),S0=Symbol.for("react.memo"),C0=Symbol.for("react.lazy"),Jl=Symbol.iterator;function E0(e){return e===null||typeof e!="object"?null:(e=Jl&&e[Jl]||e["@@iterator"],typeof e=="function"?e:null)}var Lu={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Mu=Object.assign,Fu={};function Cr(e,t,n){this.props=e,this.context=t,this.refs=Fu,this.updater=n||Lu}Cr.prototype.isReactComponent={};Cr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Cr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Du(){}Du.prototype=Cr.prototype;function Ya(e,t,n){this.props=e,this.context=t,this.refs=Fu,this.updater=n||Lu}var Va=Ya.prototype=new Du;Va.constructor=Ya;Mu(Va,Cr.prototype);Va.isPureReactComponent=!0;var Zl=Array.isArray,Iu=Object.prototype.hasOwnProperty,Ga={current:null},Au={key:!0,ref:!0,__self:!0,__source:!0};function Ou(e,t,n){var r,i={},o=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(o=""+t.key),t)Iu.call(t,r)&&!Au.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var c=Array(l),u=0;u<l;u++)c[u]=arguments[u+2];i.children=c}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Cs,type:e,key:o,ref:a,props:i,_owner:Ga.current}}function _0(e,t){return{$$typeof:Cs,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Ka(e){return typeof e=="object"&&e!==null&&e.$$typeof===Cs}function R0(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var ec=/\/+/g;function bo(e,t){return typeof e=="object"&&e!==null&&e.key!=null?R0(""+e.key):t.toString(36)}function oi(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case Cs:case g0:a=!0}}if(a)return a=e,i=i(a),e=r===""?"."+bo(a,0):r,Zl(i)?(n="",e!=null&&(n=e.replace(ec,"$&/")+"/"),oi(i,t,n,"",function(u){return u})):i!=null&&(Ka(i)&&(i=_0(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(ec,"$&/")+"/")+e)),t.push(i)),1;if(a=0,r=r===""?".":r+":",Zl(e))for(var l=0;l<e.length;l++){o=e[l];var c=r+bo(o,l);a+=oi(o,t,n,c,i)}else if(c=E0(e),typeof c=="function")for(e=c.call(e),l=0;!(o=e.next()).done;)o=o.value,c=r+bo(o,l++),a+=oi(o,t,n,c,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function Fs(e,t,n){if(e==null)return e;var r=[],i=0;return oi(e,r,"","",function(o){return t.call(n,o,i++)}),r}function P0(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var lt={current:null},ai={transition:null},z0={ReactCurrentDispatcher:lt,ReactCurrentBatchConfig:ai,ReactCurrentOwner:Ga};function $u(){throw Error("act(...) is not supported in production builds of React.")}fe.Children={map:Fs,forEach:function(e,t,n){Fs(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Fs(e,function(){t++}),t},toArray:function(e){return Fs(e,function(t){return t})||[]},only:function(e){if(!Ka(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};fe.Component=Cr;fe.Fragment=v0;fe.Profiler=b0;fe.PureComponent=Ya;fe.StrictMode=y0;fe.Suspense=N0;fe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=z0;fe.act=$u;fe.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Mu({},e.props),i=e.key,o=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,a=Ga.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(c in t)Iu.call(t,c)&&!Au.hasOwnProperty(c)&&(r[c]=t[c]===void 0&&l!==void 0?l[c]:t[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){l=Array(c);for(var u=0;u<c;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:Cs,type:e.type,key:i,ref:o,props:r,_owner:a}};fe.createContext=function(e){return e={$$typeof:j0,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:w0,_context:e},e.Consumer=e};fe.createElement=Ou;fe.createFactory=function(e){var t=Ou.bind(null,e);return t.type=e,t};fe.createRef=function(){return{current:null}};fe.forwardRef=function(e){return{$$typeof:k0,render:e}};fe.isValidElement=Ka;fe.lazy=function(e){return{$$typeof:C0,_payload:{_status:-1,_result:e},_init:P0}};fe.memo=function(e,t){return{$$typeof:S0,type:e,compare:t===void 0?null:t}};fe.startTransition=function(e){var t=ai.transition;ai.transition={};try{e()}finally{ai.transition=t}};fe.unstable_act=$u;fe.useCallback=function(e,t){return lt.current.useCallback(e,t)};fe.useContext=function(e){return lt.current.useContext(e)};fe.useDebugValue=function(){};fe.useDeferredValue=function(e){return lt.current.useDeferredValue(e)};fe.useEffect=function(e,t){return lt.current.useEffect(e,t)};fe.useId=function(){return lt.current.useId()};fe.useImperativeHandle=function(e,t,n){return lt.current.useImperativeHandle(e,t,n)};fe.useInsertionEffect=function(e,t){return lt.current.useInsertionEffect(e,t)};fe.useLayoutEffect=function(e,t){return lt.current.useLayoutEffect(e,t)};fe.useMemo=function(e,t){return lt.current.useMemo(e,t)};fe.useReducer=function(e,t,n){return lt.current.useReducer(e,t,n)};fe.useRef=function(e){return lt.current.useRef(e)};fe.useState=function(e){return lt.current.useState(e)};fe.useSyncExternalStore=function(e,t,n){return lt.current.useSyncExternalStore(e,t,n)};fe.useTransition=function(){return lt.current.useTransition()};fe.version="18.3.1";Tu.exports=fe;var d=Tu.exports;const it=Pu(d);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var T0=d,L0=Symbol.for("react.element"),M0=Symbol.for("react.fragment"),F0=Object.prototype.hasOwnProperty,D0=T0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,I0={key:!0,ref:!0,__self:!0,__source:!0};function Bu(e,t,n){var r,i={},o=null,a=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)F0.call(t,r)&&!I0.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:L0,type:e,key:o,ref:a,props:i,_owner:D0.current}}Vi.Fragment=M0;Vi.jsx=Bu;Vi.jsxs=Bu;zu.exports=Vi;var s=zu.exports,Jo={},qu={exports:{}},wt={},Uu={exports:{}},Wu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(R,z){var D=R.length;R.push(z);e:for(;0<D;){var T=D-1>>>1,$=R[T];if(0<i($,z))R[T]=z,R[D]=$,D=T;else break e}}function n(R){return R.length===0?null:R[0]}function r(R){if(R.length===0)return null;var z=R[0],D=R.pop();if(D!==z){R[0]=D;e:for(var T=0,$=R.length,O=$>>>1;T<O;){var re=2*(T+1)-1,B=R[re],ee=re+1,ce=R[ee];if(0>i(B,D))ee<$&&0>i(ce,B)?(R[T]=ce,R[ee]=D,T=ee):(R[T]=B,R[re]=D,T=re);else if(ee<$&&0>i(ce,D))R[T]=ce,R[ee]=D,T=ee;else break e}}return z}function i(R,z){var D=R.sortIndex-z.sortIndex;return D!==0?D:R.id-z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var a=Date,l=a.now();e.unstable_now=function(){return a.now()-l}}var c=[],u=[],m=1,x=null,p=3,w=!1,y=!1,j=!1,C=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function h(R){for(var z=n(u);z!==null;){if(z.callback===null)r(u);else if(z.startTime<=R)r(u),z.sortIndex=z.expirationTime,t(c,z);else break;z=n(u)}}function S(R){if(j=!1,h(R),!y)if(n(c)!==null)y=!0,W(_);else{var z=n(u);z!==null&&Q(S,z.startTime-R)}}function _(R,z){y=!1,j&&(j=!1,v(g),g=-1),w=!0;var D=p;try{for(h(z),x=n(c);x!==null&&(!(x.expirationTime>z)||R&&!E());){var T=x.callback;if(typeof T=="function"){x.callback=null,p=x.priorityLevel;var $=T(x.expirationTime<=z);z=e.unstable_now(),typeof $=="function"?x.callback=$:x===n(c)&&r(c),h(z)}else r(c);x=n(c)}if(x!==null)var O=!0;else{var re=n(u);re!==null&&Q(S,re.startTime-z),O=!1}return O}finally{x=null,p=D,w=!1}}var L=!1,N=null,g=-1,b=5,k=-1;function E(){return!(e.unstable_now()-k<b)}function M(){if(N!==null){var R=e.unstable_now();k=R;var z=!0;try{z=N(!0,R)}finally{z?H():(L=!1,N=null)}}else L=!1}var H;if(typeof f=="function")H=function(){f(M)};else if(typeof MessageChannel<"u"){var Z=new MessageChannel,I=Z.port2;Z.port1.onmessage=M,H=function(){I.postMessage(null)}}else H=function(){C(M,0)};function W(R){N=R,L||(L=!0,H())}function Q(R,z){g=C(function(){R(e.unstable_now())},z)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(R){R.callback=null},e.unstable_continueExecution=function(){y||w||(y=!0,W(_))},e.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<R?Math.floor(1e3/R):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(R){switch(p){case 1:case 2:case 3:var z=3;break;default:z=p}var D=p;p=z;try{return R()}finally{p=D}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(R,z){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var D=p;p=R;try{return z()}finally{p=D}},e.unstable_scheduleCallback=function(R,z,D){var T=e.unstable_now();switch(typeof D=="object"&&D!==null?(D=D.delay,D=typeof D=="number"&&0<D?T+D:T):D=T,R){case 1:var $=-1;break;case 2:$=250;break;case 5:$=1073741823;break;case 4:$=1e4;break;default:$=5e3}return $=D+$,R={id:m++,callback:z,priorityLevel:R,startTime:D,expirationTime:$,sortIndex:-1},D>T?(R.sortIndex=D,t(u,R),n(c)===null&&R===n(u)&&(j?(v(g),g=-1):j=!0,Q(S,D-T))):(R.sortIndex=$,t(c,R),y||w||(y=!0,W(_))),R},e.unstable_shouldYield=E,e.unstable_wrapCallback=function(R){var z=p;return function(){var D=p;p=z;try{return R.apply(this,arguments)}finally{p=D}}}})(Wu);Uu.exports=Wu;var A0=Uu.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var O0=d,bt=A0;function U(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Qu=new Set,ls={};function Gn(e,t){yr(e,t),yr(e+"Capture",t)}function yr(e,t){for(ls[e]=t,e=0;e<t.length;e++)Qu.add(t[e])}var nn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Zo=Object.prototype.hasOwnProperty,$0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,tc={},nc={};function B0(e){return Zo.call(nc,e)?!0:Zo.call(tc,e)?!1:$0.test(e)?nc[e]=!0:(tc[e]=!0,!1)}function q0(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function U0(e,t,n,r){if(t===null||typeof t>"u"||q0(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ct(e,t,n,r,i,o,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=a}var Je={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Je[e]=new ct(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Je[t]=new ct(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Je[e]=new ct(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Je[e]=new ct(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Je[e]=new ct(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Je[e]=new ct(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Je[e]=new ct(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Je[e]=new ct(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Je[e]=new ct(e,5,!1,e.toLowerCase(),null,!1,!1)});var Xa=/[\-:]([a-z])/g;function Ja(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Xa,Ja);Je[t]=new ct(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Xa,Ja);Je[t]=new ct(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Xa,Ja);Je[t]=new ct(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Je[e]=new ct(e,1,!1,e.toLowerCase(),null,!1,!1)});Je.xlinkHref=new ct("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Je[e]=new ct(e,1,!1,e.toLowerCase(),null,!0,!0)});function Za(e,t,n,r){var i=Je.hasOwnProperty(t)?Je[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(U0(t,n,i,r)&&(n=null),r||i===null?B0(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var ln=O0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ds=Symbol.for("react.element"),er=Symbol.for("react.portal"),tr=Symbol.for("react.fragment"),el=Symbol.for("react.strict_mode"),ea=Symbol.for("react.profiler"),Hu=Symbol.for("react.provider"),Yu=Symbol.for("react.context"),tl=Symbol.for("react.forward_ref"),ta=Symbol.for("react.suspense"),na=Symbol.for("react.suspense_list"),nl=Symbol.for("react.memo"),mn=Symbol.for("react.lazy"),Vu=Symbol.for("react.offscreen"),rc=Symbol.iterator;function Mr(e){return e===null||typeof e!="object"?null:(e=rc&&e[rc]||e["@@iterator"],typeof e=="function"?e:null)}var Ae=Object.assign,wo;function Vr(e){if(wo===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);wo=t&&t[1]||""}return`
`+wo+e}var jo=!1;function ko(e,t){if(!e||jo)return"";jo=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),a=i.length-1,l=o.length-1;1<=a&&0<=l&&i[a]!==o[l];)l--;for(;1<=a&&0<=l;a--,l--)if(i[a]!==o[l]){if(a!==1||l!==1)do if(a--,l--,0>l||i[a]!==o[l]){var c=`
`+i[a].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=a&&0<=l);break}}}finally{jo=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Vr(e):""}function W0(e){switch(e.tag){case 5:return Vr(e.type);case 16:return Vr("Lazy");case 13:return Vr("Suspense");case 19:return Vr("SuspenseList");case 0:case 2:case 15:return e=ko(e.type,!1),e;case 11:return e=ko(e.type.render,!1),e;case 1:return e=ko(e.type,!0),e;default:return""}}function ra(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case tr:return"Fragment";case er:return"Portal";case ea:return"Profiler";case el:return"StrictMode";case ta:return"Suspense";case na:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Yu:return(e.displayName||"Context")+".Consumer";case Hu:return(e._context.displayName||"Context")+".Provider";case tl:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case nl:return t=e.displayName||null,t!==null?t:ra(e.type)||"Memo";case mn:t=e._payload,e=e._init;try{return ra(e(t))}catch{}}return null}function Q0(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ra(t);case 8:return t===el?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function _n(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Gu(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function H0(e){var t=Gu(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,o.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Is(e){e._valueTracker||(e._valueTracker=H0(e))}function Ku(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Gu(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function ji(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function sa(e,t){var n=t.checked;return Ae({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function sc(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=_n(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Xu(e,t){t=t.checked,t!=null&&Za(e,"checked",t,!1)}function ia(e,t){Xu(e,t);var n=_n(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?oa(e,t.type,n):t.hasOwnProperty("defaultValue")&&oa(e,t.type,_n(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function ic(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function oa(e,t,n){(t!=="number"||ji(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Gr=Array.isArray;function fr(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+_n(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function aa(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(U(91));return Ae({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function oc(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(U(92));if(Gr(n)){if(1<n.length)throw Error(U(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:_n(n)}}function Ju(e,t){var n=_n(t.value),r=_n(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function ac(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Zu(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function la(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Zu(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var As,ed=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(As=As||document.createElement("div"),As.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=As.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function cs(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Jr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Y0=["Webkit","ms","Moz","O"];Object.keys(Jr).forEach(function(e){Y0.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Jr[t]=Jr[e]})});function td(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Jr.hasOwnProperty(e)&&Jr[e]?(""+t).trim():t+"px"}function nd(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=td(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var V0=Ae({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ca(e,t){if(t){if(V0[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(U(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(U(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(U(61))}if(t.style!=null&&typeof t.style!="object")throw Error(U(62))}}function ua(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var da=null;function rl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var fa=null,mr=null,pr=null;function lc(e){if(e=Rs(e)){if(typeof fa!="function")throw Error(U(280));var t=e.stateNode;t&&(t=Zi(t),fa(e.stateNode,e.type,t))}}function rd(e){mr?pr?pr.push(e):pr=[e]:mr=e}function sd(){if(mr){var e=mr,t=pr;if(pr=mr=null,lc(e),t)for(e=0;e<t.length;e++)lc(t[e])}}function id(e,t){return e(t)}function od(){}var No=!1;function ad(e,t,n){if(No)return e(t,n);No=!0;try{return id(e,t,n)}finally{No=!1,(mr!==null||pr!==null)&&(od(),sd())}}function us(e,t){var n=e.stateNode;if(n===null)return null;var r=Zi(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(U(231,t,typeof n));return n}var ma=!1;if(nn)try{var Fr={};Object.defineProperty(Fr,"passive",{get:function(){ma=!0}}),window.addEventListener("test",Fr,Fr),window.removeEventListener("test",Fr,Fr)}catch{ma=!1}function G0(e,t,n,r,i,o,a,l,c){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(m){this.onError(m)}}var Zr=!1,ki=null,Ni=!1,pa=null,K0={onError:function(e){Zr=!0,ki=e}};function X0(e,t,n,r,i,o,a,l,c){Zr=!1,ki=null,G0.apply(K0,arguments)}function J0(e,t,n,r,i,o,a,l,c){if(X0.apply(this,arguments),Zr){if(Zr){var u=ki;Zr=!1,ki=null}else throw Error(U(198));Ni||(Ni=!0,pa=u)}}function Kn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function ld(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function cc(e){if(Kn(e)!==e)throw Error(U(188))}function Z0(e){var t=e.alternate;if(!t){if(t=Kn(e),t===null)throw Error(U(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return cc(i),e;if(o===r)return cc(i),t;o=o.sibling}throw Error(U(188))}if(n.return!==r.return)n=i,r=o;else{for(var a=!1,l=i.child;l;){if(l===n){a=!0,n=i,r=o;break}if(l===r){a=!0,r=i,n=o;break}l=l.sibling}if(!a){for(l=o.child;l;){if(l===n){a=!0,n=o,r=i;break}if(l===r){a=!0,r=o,n=i;break}l=l.sibling}if(!a)throw Error(U(189))}}if(n.alternate!==r)throw Error(U(190))}if(n.tag!==3)throw Error(U(188));return n.stateNode.current===n?e:t}function cd(e){return e=Z0(e),e!==null?ud(e):null}function ud(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=ud(e);if(t!==null)return t;e=e.sibling}return null}var dd=bt.unstable_scheduleCallback,uc=bt.unstable_cancelCallback,em=bt.unstable_shouldYield,tm=bt.unstable_requestPaint,$e=bt.unstable_now,nm=bt.unstable_getCurrentPriorityLevel,sl=bt.unstable_ImmediatePriority,fd=bt.unstable_UserBlockingPriority,Si=bt.unstable_NormalPriority,rm=bt.unstable_LowPriority,md=bt.unstable_IdlePriority,Gi=null,Yt=null;function sm(e){if(Yt&&typeof Yt.onCommitFiberRoot=="function")try{Yt.onCommitFiberRoot(Gi,e,void 0,(e.current.flags&128)===128)}catch{}}var Ft=Math.clz32?Math.clz32:am,im=Math.log,om=Math.LN2;function am(e){return e>>>=0,e===0?32:31-(im(e)/om|0)|0}var Os=64,$s=4194304;function Kr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ci(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,a=n&268435455;if(a!==0){var l=a&~i;l!==0?r=Kr(l):(o&=a,o!==0&&(r=Kr(o)))}else a=n&~i,a!==0?r=Kr(a):o!==0&&(r=Kr(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Ft(t),i=1<<n,r|=e[n],t&=~i;return r}function lm(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function cm(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var a=31-Ft(o),l=1<<a,c=i[a];c===-1?(!(l&n)||l&r)&&(i[a]=lm(l,t)):c<=t&&(e.expiredLanes|=l),o&=~l}}function ha(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function pd(){var e=Os;return Os<<=1,!(Os&4194240)&&(Os=64),e}function So(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Es(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ft(t),e[t]=n}function um(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Ft(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function il(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ft(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var ke=0;function hd(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var xd,ol,gd,vd,yd,xa=!1,Bs=[],bn=null,wn=null,jn=null,ds=new Map,fs=new Map,xn=[],dm="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function dc(e,t){switch(e){case"focusin":case"focusout":bn=null;break;case"dragenter":case"dragleave":wn=null;break;case"mouseover":case"mouseout":jn=null;break;case"pointerover":case"pointerout":ds.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":fs.delete(t.pointerId)}}function Dr(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=Rs(t),t!==null&&ol(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function fm(e,t,n,r,i){switch(t){case"focusin":return bn=Dr(bn,e,t,n,r,i),!0;case"dragenter":return wn=Dr(wn,e,t,n,r,i),!0;case"mouseover":return jn=Dr(jn,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return ds.set(o,Dr(ds.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,fs.set(o,Dr(fs.get(o)||null,e,t,n,r,i)),!0}return!1}function bd(e){var t=An(e.target);if(t!==null){var n=Kn(t);if(n!==null){if(t=n.tag,t===13){if(t=ld(n),t!==null){e.blockedOn=t,yd(e.priority,function(){gd(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function li(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=ga(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);da=r,n.target.dispatchEvent(r),da=null}else return t=Rs(n),t!==null&&ol(t),e.blockedOn=n,!1;t.shift()}return!0}function fc(e,t,n){li(e)&&n.delete(t)}function mm(){xa=!1,bn!==null&&li(bn)&&(bn=null),wn!==null&&li(wn)&&(wn=null),jn!==null&&li(jn)&&(jn=null),ds.forEach(fc),fs.forEach(fc)}function Ir(e,t){e.blockedOn===t&&(e.blockedOn=null,xa||(xa=!0,bt.unstable_scheduleCallback(bt.unstable_NormalPriority,mm)))}function ms(e){function t(i){return Ir(i,e)}if(0<Bs.length){Ir(Bs[0],e);for(var n=1;n<Bs.length;n++){var r=Bs[n];r.blockedOn===e&&(r.blockedOn=null)}}for(bn!==null&&Ir(bn,e),wn!==null&&Ir(wn,e),jn!==null&&Ir(jn,e),ds.forEach(t),fs.forEach(t),n=0;n<xn.length;n++)r=xn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<xn.length&&(n=xn[0],n.blockedOn===null);)bd(n),n.blockedOn===null&&xn.shift()}var hr=ln.ReactCurrentBatchConfig,Ei=!0;function pm(e,t,n,r){var i=ke,o=hr.transition;hr.transition=null;try{ke=1,al(e,t,n,r)}finally{ke=i,hr.transition=o}}function hm(e,t,n,r){var i=ke,o=hr.transition;hr.transition=null;try{ke=4,al(e,t,n,r)}finally{ke=i,hr.transition=o}}function al(e,t,n,r){if(Ei){var i=ga(e,t,n,r);if(i===null)Fo(e,t,r,_i,n),dc(e,r);else if(fm(i,e,t,n,r))r.stopPropagation();else if(dc(e,r),t&4&&-1<dm.indexOf(e)){for(;i!==null;){var o=Rs(i);if(o!==null&&xd(o),o=ga(e,t,n,r),o===null&&Fo(e,t,r,_i,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else Fo(e,t,r,null,n)}}var _i=null;function ga(e,t,n,r){if(_i=null,e=rl(r),e=An(e),e!==null)if(t=Kn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=ld(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return _i=e,null}function wd(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(nm()){case sl:return 1;case fd:return 4;case Si:case rm:return 16;case md:return 536870912;default:return 16}default:return 16}}var vn=null,ll=null,ci=null;function jd(){if(ci)return ci;var e,t=ll,n=t.length,r,i="value"in vn?vn.value:vn.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===i[o-r];r++);return ci=i.slice(e,1<r?1-r:void 0)}function ui(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function qs(){return!0}function mc(){return!1}function jt(e){function t(n,r,i,o,a){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=a,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(o):o[l]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?qs:mc,this.isPropagationStopped=mc,this}return Ae(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=qs)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=qs)},persist:function(){},isPersistent:qs}),t}var Er={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},cl=jt(Er),_s=Ae({},Er,{view:0,detail:0}),xm=jt(_s),Co,Eo,Ar,Ki=Ae({},_s,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ul,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ar&&(Ar&&e.type==="mousemove"?(Co=e.screenX-Ar.screenX,Eo=e.screenY-Ar.screenY):Eo=Co=0,Ar=e),Co)},movementY:function(e){return"movementY"in e?e.movementY:Eo}}),pc=jt(Ki),gm=Ae({},Ki,{dataTransfer:0}),vm=jt(gm),ym=Ae({},_s,{relatedTarget:0}),_o=jt(ym),bm=Ae({},Er,{animationName:0,elapsedTime:0,pseudoElement:0}),wm=jt(bm),jm=Ae({},Er,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),km=jt(jm),Nm=Ae({},Er,{data:0}),hc=jt(Nm),Sm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Cm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Em={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function _m(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Em[e])?!!t[e]:!1}function ul(){return _m}var Rm=Ae({},_s,{key:function(e){if(e.key){var t=Sm[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ui(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Cm[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ul,charCode:function(e){return e.type==="keypress"?ui(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ui(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Pm=jt(Rm),zm=Ae({},Ki,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),xc=jt(zm),Tm=Ae({},_s,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ul}),Lm=jt(Tm),Mm=Ae({},Er,{propertyName:0,elapsedTime:0,pseudoElement:0}),Fm=jt(Mm),Dm=Ae({},Ki,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Im=jt(Dm),Am=[9,13,27,32],dl=nn&&"CompositionEvent"in window,es=null;nn&&"documentMode"in document&&(es=document.documentMode);var Om=nn&&"TextEvent"in window&&!es,kd=nn&&(!dl||es&&8<es&&11>=es),gc=String.fromCharCode(32),vc=!1;function Nd(e,t){switch(e){case"keyup":return Am.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Sd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var nr=!1;function $m(e,t){switch(e){case"compositionend":return Sd(t);case"keypress":return t.which!==32?null:(vc=!0,gc);case"textInput":return e=t.data,e===gc&&vc?null:e;default:return null}}function Bm(e,t){if(nr)return e==="compositionend"||!dl&&Nd(e,t)?(e=jd(),ci=ll=vn=null,nr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return kd&&t.locale!=="ko"?null:t.data;default:return null}}var qm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function yc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!qm[e.type]:t==="textarea"}function Cd(e,t,n,r){rd(r),t=Ri(t,"onChange"),0<t.length&&(n=new cl("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var ts=null,ps=null;function Um(e){Id(e,0)}function Xi(e){var t=ir(e);if(Ku(t))return e}function Wm(e,t){if(e==="change")return t}var Ed=!1;if(nn){var Ro;if(nn){var Po="oninput"in document;if(!Po){var bc=document.createElement("div");bc.setAttribute("oninput","return;"),Po=typeof bc.oninput=="function"}Ro=Po}else Ro=!1;Ed=Ro&&(!document.documentMode||9<document.documentMode)}function wc(){ts&&(ts.detachEvent("onpropertychange",_d),ps=ts=null)}function _d(e){if(e.propertyName==="value"&&Xi(ps)){var t=[];Cd(t,ps,e,rl(e)),ad(Um,t)}}function Qm(e,t,n){e==="focusin"?(wc(),ts=t,ps=n,ts.attachEvent("onpropertychange",_d)):e==="focusout"&&wc()}function Hm(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Xi(ps)}function Ym(e,t){if(e==="click")return Xi(t)}function Vm(e,t){if(e==="input"||e==="change")return Xi(t)}function Gm(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var It=typeof Object.is=="function"?Object.is:Gm;function hs(e,t){if(It(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Zo.call(t,i)||!It(e[i],t[i]))return!1}return!0}function jc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function kc(e,t){var n=jc(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=jc(n)}}function Rd(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Rd(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Pd(){for(var e=window,t=ji();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=ji(e.document)}return t}function fl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Km(e){var t=Pd(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Rd(n.ownerDocument.documentElement,n)){if(r!==null&&fl(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=kc(n,o);var a=kc(n,r);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Xm=nn&&"documentMode"in document&&11>=document.documentMode,rr=null,va=null,ns=null,ya=!1;function Nc(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ya||rr==null||rr!==ji(r)||(r=rr,"selectionStart"in r&&fl(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ns&&hs(ns,r)||(ns=r,r=Ri(va,"onSelect"),0<r.length&&(t=new cl("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=rr)))}function Us(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var sr={animationend:Us("Animation","AnimationEnd"),animationiteration:Us("Animation","AnimationIteration"),animationstart:Us("Animation","AnimationStart"),transitionend:Us("Transition","TransitionEnd")},zo={},zd={};nn&&(zd=document.createElement("div").style,"AnimationEvent"in window||(delete sr.animationend.animation,delete sr.animationiteration.animation,delete sr.animationstart.animation),"TransitionEvent"in window||delete sr.transitionend.transition);function Ji(e){if(zo[e])return zo[e];if(!sr[e])return e;var t=sr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in zd)return zo[e]=t[n];return e}var Td=Ji("animationend"),Ld=Ji("animationiteration"),Md=Ji("animationstart"),Fd=Ji("transitionend"),Dd=new Map,Sc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Pn(e,t){Dd.set(e,t),Gn(t,[e])}for(var To=0;To<Sc.length;To++){var Lo=Sc[To],Jm=Lo.toLowerCase(),Zm=Lo[0].toUpperCase()+Lo.slice(1);Pn(Jm,"on"+Zm)}Pn(Td,"onAnimationEnd");Pn(Ld,"onAnimationIteration");Pn(Md,"onAnimationStart");Pn("dblclick","onDoubleClick");Pn("focusin","onFocus");Pn("focusout","onBlur");Pn(Fd,"onTransitionEnd");yr("onMouseEnter",["mouseout","mouseover"]);yr("onMouseLeave",["mouseout","mouseover"]);yr("onPointerEnter",["pointerout","pointerover"]);yr("onPointerLeave",["pointerout","pointerover"]);Gn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Gn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Gn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Gn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Gn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Gn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Xr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ep=new Set("cancel close invalid load scroll toggle".split(" ").concat(Xr));function Cc(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,J0(r,t,void 0,e),e.currentTarget=null}function Id(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var a=r.length-1;0<=a;a--){var l=r[a],c=l.instance,u=l.currentTarget;if(l=l.listener,c!==o&&i.isPropagationStopped())break e;Cc(i,l,u),o=c}else for(a=0;a<r.length;a++){if(l=r[a],c=l.instance,u=l.currentTarget,l=l.listener,c!==o&&i.isPropagationStopped())break e;Cc(i,l,u),o=c}}}if(Ni)throw e=pa,Ni=!1,pa=null,e}function Pe(e,t){var n=t[Na];n===void 0&&(n=t[Na]=new Set);var r=e+"__bubble";n.has(r)||(Ad(t,e,2,!1),n.add(r))}function Mo(e,t,n){var r=0;t&&(r|=4),Ad(n,e,r,t)}var Ws="_reactListening"+Math.random().toString(36).slice(2);function xs(e){if(!e[Ws]){e[Ws]=!0,Qu.forEach(function(n){n!=="selectionchange"&&(ep.has(n)||Mo(n,!1,e),Mo(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ws]||(t[Ws]=!0,Mo("selectionchange",!1,t))}}function Ad(e,t,n,r){switch(wd(t)){case 1:var i=pm;break;case 4:i=hm;break;default:i=al}n=i.bind(null,t,n,e),i=void 0,!ma||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Fo(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var c=a.tag;if((c===3||c===4)&&(c=a.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;a=a.return}for(;l!==null;){if(a=An(l),a===null)return;if(c=a.tag,c===5||c===6){r=o=a;continue e}l=l.parentNode}}r=r.return}ad(function(){var u=o,m=rl(n),x=[];e:{var p=Dd.get(e);if(p!==void 0){var w=cl,y=e;switch(e){case"keypress":if(ui(n)===0)break e;case"keydown":case"keyup":w=Pm;break;case"focusin":y="focus",w=_o;break;case"focusout":y="blur",w=_o;break;case"beforeblur":case"afterblur":w=_o;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=pc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=vm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=Lm;break;case Td:case Ld:case Md:w=wm;break;case Fd:w=Fm;break;case"scroll":w=xm;break;case"wheel":w=Im;break;case"copy":case"cut":case"paste":w=km;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=xc}var j=(t&4)!==0,C=!j&&e==="scroll",v=j?p!==null?p+"Capture":null:p;j=[];for(var f=u,h;f!==null;){h=f;var S=h.stateNode;if(h.tag===5&&S!==null&&(h=S,v!==null&&(S=us(f,v),S!=null&&j.push(gs(f,S,h)))),C)break;f=f.return}0<j.length&&(p=new w(p,y,null,n,m),x.push({event:p,listeners:j}))}}if(!(t&7)){e:{if(p=e==="mouseover"||e==="pointerover",w=e==="mouseout"||e==="pointerout",p&&n!==da&&(y=n.relatedTarget||n.fromElement)&&(An(y)||y[rn]))break e;if((w||p)&&(p=m.window===m?m:(p=m.ownerDocument)?p.defaultView||p.parentWindow:window,w?(y=n.relatedTarget||n.toElement,w=u,y=y?An(y):null,y!==null&&(C=Kn(y),y!==C||y.tag!==5&&y.tag!==6)&&(y=null)):(w=null,y=u),w!==y)){if(j=pc,S="onMouseLeave",v="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(j=xc,S="onPointerLeave",v="onPointerEnter",f="pointer"),C=w==null?p:ir(w),h=y==null?p:ir(y),p=new j(S,f+"leave",w,n,m),p.target=C,p.relatedTarget=h,S=null,An(m)===u&&(j=new j(v,f+"enter",y,n,m),j.target=h,j.relatedTarget=C,S=j),C=S,w&&y)t:{for(j=w,v=y,f=0,h=j;h;h=Zn(h))f++;for(h=0,S=v;S;S=Zn(S))h++;for(;0<f-h;)j=Zn(j),f--;for(;0<h-f;)v=Zn(v),h--;for(;f--;){if(j===v||v!==null&&j===v.alternate)break t;j=Zn(j),v=Zn(v)}j=null}else j=null;w!==null&&Ec(x,p,w,j,!1),y!==null&&C!==null&&Ec(x,C,y,j,!0)}}e:{if(p=u?ir(u):window,w=p.nodeName&&p.nodeName.toLowerCase(),w==="select"||w==="input"&&p.type==="file")var _=Wm;else if(yc(p))if(Ed)_=Vm;else{_=Hm;var L=Qm}else(w=p.nodeName)&&w.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(_=Ym);if(_&&(_=_(e,u))){Cd(x,_,n,m);break e}L&&L(e,p,u),e==="focusout"&&(L=p._wrapperState)&&L.controlled&&p.type==="number"&&oa(p,"number",p.value)}switch(L=u?ir(u):window,e){case"focusin":(yc(L)||L.contentEditable==="true")&&(rr=L,va=u,ns=null);break;case"focusout":ns=va=rr=null;break;case"mousedown":ya=!0;break;case"contextmenu":case"mouseup":case"dragend":ya=!1,Nc(x,n,m);break;case"selectionchange":if(Xm)break;case"keydown":case"keyup":Nc(x,n,m)}var N;if(dl)e:{switch(e){case"compositionstart":var g="onCompositionStart";break e;case"compositionend":g="onCompositionEnd";break e;case"compositionupdate":g="onCompositionUpdate";break e}g=void 0}else nr?Nd(e,n)&&(g="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(g="onCompositionStart");g&&(kd&&n.locale!=="ko"&&(nr||g!=="onCompositionStart"?g==="onCompositionEnd"&&nr&&(N=jd()):(vn=m,ll="value"in vn?vn.value:vn.textContent,nr=!0)),L=Ri(u,g),0<L.length&&(g=new hc(g,e,null,n,m),x.push({event:g,listeners:L}),N?g.data=N:(N=Sd(n),N!==null&&(g.data=N)))),(N=Om?$m(e,n):Bm(e,n))&&(u=Ri(u,"onBeforeInput"),0<u.length&&(m=new hc("onBeforeInput","beforeinput",null,n,m),x.push({event:m,listeners:u}),m.data=N))}Id(x,t)})}function gs(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ri(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=us(e,n),o!=null&&r.unshift(gs(e,o,i)),o=us(e,t),o!=null&&r.push(gs(e,o,i))),e=e.return}return r}function Zn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ec(e,t,n,r,i){for(var o=t._reactName,a=[];n!==null&&n!==r;){var l=n,c=l.alternate,u=l.stateNode;if(c!==null&&c===r)break;l.tag===5&&u!==null&&(l=u,i?(c=us(n,o),c!=null&&a.unshift(gs(n,c,l))):i||(c=us(n,o),c!=null&&a.push(gs(n,c,l)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var tp=/\r\n?/g,np=/\u0000|\uFFFD/g;function _c(e){return(typeof e=="string"?e:""+e).replace(tp,`
`).replace(np,"")}function Qs(e,t,n){if(t=_c(t),_c(e)!==t&&n)throw Error(U(425))}function Pi(){}var ba=null,wa=null;function ja(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ka=typeof setTimeout=="function"?setTimeout:void 0,rp=typeof clearTimeout=="function"?clearTimeout:void 0,Rc=typeof Promise=="function"?Promise:void 0,sp=typeof queueMicrotask=="function"?queueMicrotask:typeof Rc<"u"?function(e){return Rc.resolve(null).then(e).catch(ip)}:ka;function ip(e){setTimeout(function(){throw e})}function Do(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),ms(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);ms(t)}function kn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Pc(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var _r=Math.random().toString(36).slice(2),Qt="__reactFiber$"+_r,vs="__reactProps$"+_r,rn="__reactContainer$"+_r,Na="__reactEvents$"+_r,op="__reactListeners$"+_r,ap="__reactHandles$"+_r;function An(e){var t=e[Qt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[rn]||n[Qt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Pc(e);e!==null;){if(n=e[Qt])return n;e=Pc(e)}return t}e=n,n=e.parentNode}return null}function Rs(e){return e=e[Qt]||e[rn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function ir(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(U(33))}function Zi(e){return e[vs]||null}var Sa=[],or=-1;function zn(e){return{current:e}}function ze(e){0>or||(e.current=Sa[or],Sa[or]=null,or--)}function Ee(e,t){or++,Sa[or]=e.current,e.current=t}var Rn={},rt=zn(Rn),ft=zn(!1),Wn=Rn;function br(e,t){var n=e.type.contextTypes;if(!n)return Rn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function mt(e){return e=e.childContextTypes,e!=null}function zi(){ze(ft),ze(rt)}function zc(e,t,n){if(rt.current!==Rn)throw Error(U(168));Ee(rt,t),Ee(ft,n)}function Od(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(U(108,Q0(e)||"Unknown",i));return Ae({},n,r)}function Ti(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Rn,Wn=rt.current,Ee(rt,e),Ee(ft,ft.current),!0}function Tc(e,t,n){var r=e.stateNode;if(!r)throw Error(U(169));n?(e=Od(e,t,Wn),r.__reactInternalMemoizedMergedChildContext=e,ze(ft),ze(rt),Ee(rt,e)):ze(ft),Ee(ft,n)}var Kt=null,eo=!1,Io=!1;function $d(e){Kt===null?Kt=[e]:Kt.push(e)}function lp(e){eo=!0,$d(e)}function Tn(){if(!Io&&Kt!==null){Io=!0;var e=0,t=ke;try{var n=Kt;for(ke=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Kt=null,eo=!1}catch(i){throw Kt!==null&&(Kt=Kt.slice(e+1)),dd(sl,Tn),i}finally{ke=t,Io=!1}}return null}var ar=[],lr=0,Li=null,Mi=0,kt=[],Nt=0,Qn=null,Xt=1,Jt="";function Dn(e,t){ar[lr++]=Mi,ar[lr++]=Li,Li=e,Mi=t}function Bd(e,t,n){kt[Nt++]=Xt,kt[Nt++]=Jt,kt[Nt++]=Qn,Qn=e;var r=Xt;e=Jt;var i=32-Ft(r)-1;r&=~(1<<i),n+=1;var o=32-Ft(t)+i;if(30<o){var a=i-i%5;o=(r&(1<<a)-1).toString(32),r>>=a,i-=a,Xt=1<<32-Ft(t)+i|n<<i|r,Jt=o+e}else Xt=1<<o|n<<i|r,Jt=e}function ml(e){e.return!==null&&(Dn(e,1),Bd(e,1,0))}function pl(e){for(;e===Li;)Li=ar[--lr],ar[lr]=null,Mi=ar[--lr],ar[lr]=null;for(;e===Qn;)Qn=kt[--Nt],kt[Nt]=null,Jt=kt[--Nt],kt[Nt]=null,Xt=kt[--Nt],kt[Nt]=null}var yt=null,vt=null,Me=!1,Lt=null;function qd(e,t){var n=St(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Lc(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,yt=e,vt=kn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,yt=e,vt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Qn!==null?{id:Xt,overflow:Jt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=St(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,yt=e,vt=null,!0):!1;default:return!1}}function Ca(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ea(e){if(Me){var t=vt;if(t){var n=t;if(!Lc(e,t)){if(Ca(e))throw Error(U(418));t=kn(n.nextSibling);var r=yt;t&&Lc(e,t)?qd(r,n):(e.flags=e.flags&-4097|2,Me=!1,yt=e)}}else{if(Ca(e))throw Error(U(418));e.flags=e.flags&-4097|2,Me=!1,yt=e}}}function Mc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;yt=e}function Hs(e){if(e!==yt)return!1;if(!Me)return Mc(e),Me=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!ja(e.type,e.memoizedProps)),t&&(t=vt)){if(Ca(e))throw Ud(),Error(U(418));for(;t;)qd(e,t),t=kn(t.nextSibling)}if(Mc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(U(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){vt=kn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}vt=null}}else vt=yt?kn(e.stateNode.nextSibling):null;return!0}function Ud(){for(var e=vt;e;)e=kn(e.nextSibling)}function wr(){vt=yt=null,Me=!1}function hl(e){Lt===null?Lt=[e]:Lt.push(e)}var cp=ln.ReactCurrentBatchConfig;function Or(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(U(309));var r=n.stateNode}if(!r)throw Error(U(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(a){var l=i.refs;a===null?delete l[o]:l[o]=a},t._stringRef=o,t)}if(typeof e!="string")throw Error(U(284));if(!n._owner)throw Error(U(290,e))}return e}function Ys(e,t){throw e=Object.prototype.toString.call(t),Error(U(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Fc(e){var t=e._init;return t(e._payload)}function Wd(e){function t(v,f){if(e){var h=v.deletions;h===null?(v.deletions=[f],v.flags|=16):h.push(f)}}function n(v,f){if(!e)return null;for(;f!==null;)t(v,f),f=f.sibling;return null}function r(v,f){for(v=new Map;f!==null;)f.key!==null?v.set(f.key,f):v.set(f.index,f),f=f.sibling;return v}function i(v,f){return v=En(v,f),v.index=0,v.sibling=null,v}function o(v,f,h){return v.index=h,e?(h=v.alternate,h!==null?(h=h.index,h<f?(v.flags|=2,f):h):(v.flags|=2,f)):(v.flags|=1048576,f)}function a(v){return e&&v.alternate===null&&(v.flags|=2),v}function l(v,f,h,S){return f===null||f.tag!==6?(f=Wo(h,v.mode,S),f.return=v,f):(f=i(f,h),f.return=v,f)}function c(v,f,h,S){var _=h.type;return _===tr?m(v,f,h.props.children,S,h.key):f!==null&&(f.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===mn&&Fc(_)===f.type)?(S=i(f,h.props),S.ref=Or(v,f,h),S.return=v,S):(S=gi(h.type,h.key,h.props,null,v.mode,S),S.ref=Or(v,f,h),S.return=v,S)}function u(v,f,h,S){return f===null||f.tag!==4||f.stateNode.containerInfo!==h.containerInfo||f.stateNode.implementation!==h.implementation?(f=Qo(h,v.mode,S),f.return=v,f):(f=i(f,h.children||[]),f.return=v,f)}function m(v,f,h,S,_){return f===null||f.tag!==7?(f=qn(h,v.mode,S,_),f.return=v,f):(f=i(f,h),f.return=v,f)}function x(v,f,h){if(typeof f=="string"&&f!==""||typeof f=="number")return f=Wo(""+f,v.mode,h),f.return=v,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Ds:return h=gi(f.type,f.key,f.props,null,v.mode,h),h.ref=Or(v,null,f),h.return=v,h;case er:return f=Qo(f,v.mode,h),f.return=v,f;case mn:var S=f._init;return x(v,S(f._payload),h)}if(Gr(f)||Mr(f))return f=qn(f,v.mode,h,null),f.return=v,f;Ys(v,f)}return null}function p(v,f,h,S){var _=f!==null?f.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return _!==null?null:l(v,f,""+h,S);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Ds:return h.key===_?c(v,f,h,S):null;case er:return h.key===_?u(v,f,h,S):null;case mn:return _=h._init,p(v,f,_(h._payload),S)}if(Gr(h)||Mr(h))return _!==null?null:m(v,f,h,S,null);Ys(v,h)}return null}function w(v,f,h,S,_){if(typeof S=="string"&&S!==""||typeof S=="number")return v=v.get(h)||null,l(f,v,""+S,_);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Ds:return v=v.get(S.key===null?h:S.key)||null,c(f,v,S,_);case er:return v=v.get(S.key===null?h:S.key)||null,u(f,v,S,_);case mn:var L=S._init;return w(v,f,h,L(S._payload),_)}if(Gr(S)||Mr(S))return v=v.get(h)||null,m(f,v,S,_,null);Ys(f,S)}return null}function y(v,f,h,S){for(var _=null,L=null,N=f,g=f=0,b=null;N!==null&&g<h.length;g++){N.index>g?(b=N,N=null):b=N.sibling;var k=p(v,N,h[g],S);if(k===null){N===null&&(N=b);break}e&&N&&k.alternate===null&&t(v,N),f=o(k,f,g),L===null?_=k:L.sibling=k,L=k,N=b}if(g===h.length)return n(v,N),Me&&Dn(v,g),_;if(N===null){for(;g<h.length;g++)N=x(v,h[g],S),N!==null&&(f=o(N,f,g),L===null?_=N:L.sibling=N,L=N);return Me&&Dn(v,g),_}for(N=r(v,N);g<h.length;g++)b=w(N,v,g,h[g],S),b!==null&&(e&&b.alternate!==null&&N.delete(b.key===null?g:b.key),f=o(b,f,g),L===null?_=b:L.sibling=b,L=b);return e&&N.forEach(function(E){return t(v,E)}),Me&&Dn(v,g),_}function j(v,f,h,S){var _=Mr(h);if(typeof _!="function")throw Error(U(150));if(h=_.call(h),h==null)throw Error(U(151));for(var L=_=null,N=f,g=f=0,b=null,k=h.next();N!==null&&!k.done;g++,k=h.next()){N.index>g?(b=N,N=null):b=N.sibling;var E=p(v,N,k.value,S);if(E===null){N===null&&(N=b);break}e&&N&&E.alternate===null&&t(v,N),f=o(E,f,g),L===null?_=E:L.sibling=E,L=E,N=b}if(k.done)return n(v,N),Me&&Dn(v,g),_;if(N===null){for(;!k.done;g++,k=h.next())k=x(v,k.value,S),k!==null&&(f=o(k,f,g),L===null?_=k:L.sibling=k,L=k);return Me&&Dn(v,g),_}for(N=r(v,N);!k.done;g++,k=h.next())k=w(N,v,g,k.value,S),k!==null&&(e&&k.alternate!==null&&N.delete(k.key===null?g:k.key),f=o(k,f,g),L===null?_=k:L.sibling=k,L=k);return e&&N.forEach(function(M){return t(v,M)}),Me&&Dn(v,g),_}function C(v,f,h,S){if(typeof h=="object"&&h!==null&&h.type===tr&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case Ds:e:{for(var _=h.key,L=f;L!==null;){if(L.key===_){if(_=h.type,_===tr){if(L.tag===7){n(v,L.sibling),f=i(L,h.props.children),f.return=v,v=f;break e}}else if(L.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===mn&&Fc(_)===L.type){n(v,L.sibling),f=i(L,h.props),f.ref=Or(v,L,h),f.return=v,v=f;break e}n(v,L);break}else t(v,L);L=L.sibling}h.type===tr?(f=qn(h.props.children,v.mode,S,h.key),f.return=v,v=f):(S=gi(h.type,h.key,h.props,null,v.mode,S),S.ref=Or(v,f,h),S.return=v,v=S)}return a(v);case er:e:{for(L=h.key;f!==null;){if(f.key===L)if(f.tag===4&&f.stateNode.containerInfo===h.containerInfo&&f.stateNode.implementation===h.implementation){n(v,f.sibling),f=i(f,h.children||[]),f.return=v,v=f;break e}else{n(v,f);break}else t(v,f);f=f.sibling}f=Qo(h,v.mode,S),f.return=v,v=f}return a(v);case mn:return L=h._init,C(v,f,L(h._payload),S)}if(Gr(h))return y(v,f,h,S);if(Mr(h))return j(v,f,h,S);Ys(v,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,f!==null&&f.tag===6?(n(v,f.sibling),f=i(f,h),f.return=v,v=f):(n(v,f),f=Wo(h,v.mode,S),f.return=v,v=f),a(v)):n(v,f)}return C}var jr=Wd(!0),Qd=Wd(!1),Fi=zn(null),Di=null,cr=null,xl=null;function gl(){xl=cr=Di=null}function vl(e){var t=Fi.current;ze(Fi),e._currentValue=t}function _a(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function xr(e,t){Di=e,xl=cr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(dt=!0),e.firstContext=null)}function Et(e){var t=e._currentValue;if(xl!==e)if(e={context:e,memoizedValue:t,next:null},cr===null){if(Di===null)throw Error(U(308));cr=e,Di.dependencies={lanes:0,firstContext:e}}else cr=cr.next=e;return t}var On=null;function yl(e){On===null?On=[e]:On.push(e)}function Hd(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,yl(t)):(n.next=i.next,i.next=n),t.interleaved=n,sn(e,r)}function sn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var pn=!1;function bl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Yd(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function en(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Nn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,ve&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,sn(e,n)}return i=r.interleaved,i===null?(t.next=t,yl(r)):(t.next=i.next,i.next=t),r.interleaved=t,sn(e,n)}function di(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,il(e,n)}}function Dc(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=a:o=o.next=a,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Ii(e,t,n,r){var i=e.updateQueue;pn=!1;var o=i.firstBaseUpdate,a=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var c=l,u=c.next;c.next=null,a===null?o=u:a.next=u,a=c;var m=e.alternate;m!==null&&(m=m.updateQueue,l=m.lastBaseUpdate,l!==a&&(l===null?m.firstBaseUpdate=u:l.next=u,m.lastBaseUpdate=c))}if(o!==null){var x=i.baseState;a=0,m=u=c=null,l=o;do{var p=l.lane,w=l.eventTime;if((r&p)===p){m!==null&&(m=m.next={eventTime:w,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var y=e,j=l;switch(p=t,w=n,j.tag){case 1:if(y=j.payload,typeof y=="function"){x=y.call(w,x,p);break e}x=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=j.payload,p=typeof y=="function"?y.call(w,x,p):y,p==null)break e;x=Ae({},x,p);break e;case 2:pn=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,p=i.effects,p===null?i.effects=[l]:p.push(l))}else w={eventTime:w,lane:p,tag:l.tag,payload:l.payload,callback:l.callback,next:null},m===null?(u=m=w,c=x):m=m.next=w,a|=p;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;p=l,l=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);if(m===null&&(c=x),i.baseState=c,i.firstBaseUpdate=u,i.lastBaseUpdate=m,t=i.shared.interleaved,t!==null){i=t;do a|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);Yn|=a,e.lanes=a,e.memoizedState=x}}function Ic(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(U(191,i));i.call(r)}}}var Ps={},Vt=zn(Ps),ys=zn(Ps),bs=zn(Ps);function $n(e){if(e===Ps)throw Error(U(174));return e}function wl(e,t){switch(Ee(bs,t),Ee(ys,e),Ee(Vt,Ps),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:la(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=la(t,e)}ze(Vt),Ee(Vt,t)}function kr(){ze(Vt),ze(ys),ze(bs)}function Vd(e){$n(bs.current);var t=$n(Vt.current),n=la(t,e.type);t!==n&&(Ee(ys,e),Ee(Vt,n))}function jl(e){ys.current===e&&(ze(Vt),ze(ys))}var De=zn(0);function Ai(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ao=[];function kl(){for(var e=0;e<Ao.length;e++)Ao[e]._workInProgressVersionPrimary=null;Ao.length=0}var fi=ln.ReactCurrentDispatcher,Oo=ln.ReactCurrentBatchConfig,Hn=0,Ie=null,qe=null,We=null,Oi=!1,rs=!1,ws=0,up=0;function et(){throw Error(U(321))}function Nl(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!It(e[n],t[n]))return!1;return!0}function Sl(e,t,n,r,i,o){if(Hn=o,Ie=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,fi.current=e===null||e.memoizedState===null?pp:hp,e=n(r,i),rs){o=0;do{if(rs=!1,ws=0,25<=o)throw Error(U(301));o+=1,We=qe=null,t.updateQueue=null,fi.current=xp,e=n(r,i)}while(rs)}if(fi.current=$i,t=qe!==null&&qe.next!==null,Hn=0,We=qe=Ie=null,Oi=!1,t)throw Error(U(300));return e}function Cl(){var e=ws!==0;return ws=0,e}function Wt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return We===null?Ie.memoizedState=We=e:We=We.next=e,We}function _t(){if(qe===null){var e=Ie.alternate;e=e!==null?e.memoizedState:null}else e=qe.next;var t=We===null?Ie.memoizedState:We.next;if(t!==null)We=t,qe=e;else{if(e===null)throw Error(U(310));qe=e,e={memoizedState:qe.memoizedState,baseState:qe.baseState,baseQueue:qe.baseQueue,queue:qe.queue,next:null},We===null?Ie.memoizedState=We=e:We=We.next=e}return We}function js(e,t){return typeof t=="function"?t(e):t}function $o(e){var t=_t(),n=t.queue;if(n===null)throw Error(U(311));n.lastRenderedReducer=e;var r=qe,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var a=i.next;i.next=o.next,o.next=a}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var l=a=null,c=null,u=o;do{var m=u.lane;if((Hn&m)===m)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var x={lane:m,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(l=c=x,a=r):c=c.next=x,Ie.lanes|=m,Yn|=m}u=u.next}while(u!==null&&u!==o);c===null?a=r:c.next=l,It(r,t.memoizedState)||(dt=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=c,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,Ie.lanes|=o,Yn|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Bo(e){var t=_t(),n=t.queue;if(n===null)throw Error(U(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var a=i=i.next;do o=e(o,a.action),a=a.next;while(a!==i);It(o,t.memoizedState)||(dt=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Gd(){}function Kd(e,t){var n=Ie,r=_t(),i=t(),o=!It(r.memoizedState,i);if(o&&(r.memoizedState=i,dt=!0),r=r.queue,El(Zd.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||We!==null&&We.memoizedState.tag&1){if(n.flags|=2048,ks(9,Jd.bind(null,n,r,i,t),void 0,null),Qe===null)throw Error(U(349));Hn&30||Xd(n,t,i)}return i}function Xd(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Ie.updateQueue,t===null?(t={lastEffect:null,stores:null},Ie.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Jd(e,t,n,r){t.value=n,t.getSnapshot=r,ef(t)&&tf(e)}function Zd(e,t,n){return n(function(){ef(t)&&tf(e)})}function ef(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!It(e,n)}catch{return!0}}function tf(e){var t=sn(e,1);t!==null&&Dt(t,e,1,-1)}function Ac(e){var t=Wt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:js,lastRenderedState:e},t.queue=e,e=e.dispatch=mp.bind(null,Ie,e),[t.memoizedState,e]}function ks(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Ie.updateQueue,t===null?(t={lastEffect:null,stores:null},Ie.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function nf(){return _t().memoizedState}function mi(e,t,n,r){var i=Wt();Ie.flags|=e,i.memoizedState=ks(1|t,n,void 0,r===void 0?null:r)}function to(e,t,n,r){var i=_t();r=r===void 0?null:r;var o=void 0;if(qe!==null){var a=qe.memoizedState;if(o=a.destroy,r!==null&&Nl(r,a.deps)){i.memoizedState=ks(t,n,o,r);return}}Ie.flags|=e,i.memoizedState=ks(1|t,n,o,r)}function Oc(e,t){return mi(8390656,8,e,t)}function El(e,t){return to(2048,8,e,t)}function rf(e,t){return to(4,2,e,t)}function sf(e,t){return to(4,4,e,t)}function of(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function af(e,t,n){return n=n!=null?n.concat([e]):null,to(4,4,of.bind(null,t,e),n)}function _l(){}function lf(e,t){var n=_t();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Nl(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function cf(e,t){var n=_t();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Nl(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function uf(e,t,n){return Hn&21?(It(n,t)||(n=pd(),Ie.lanes|=n,Yn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,dt=!0),e.memoizedState=n)}function dp(e,t){var n=ke;ke=n!==0&&4>n?n:4,e(!0);var r=Oo.transition;Oo.transition={};try{e(!1),t()}finally{ke=n,Oo.transition=r}}function df(){return _t().memoizedState}function fp(e,t,n){var r=Cn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},ff(e))mf(t,n);else if(n=Hd(e,t,n,r),n!==null){var i=at();Dt(n,e,r,i),pf(n,t,r)}}function mp(e,t,n){var r=Cn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(ff(e))mf(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var a=t.lastRenderedState,l=o(a,n);if(i.hasEagerState=!0,i.eagerState=l,It(l,a)){var c=t.interleaved;c===null?(i.next=i,yl(t)):(i.next=c.next,c.next=i),t.interleaved=i;return}}catch{}finally{}n=Hd(e,t,i,r),n!==null&&(i=at(),Dt(n,e,r,i),pf(n,t,r))}}function ff(e){var t=e.alternate;return e===Ie||t!==null&&t===Ie}function mf(e,t){rs=Oi=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function pf(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,il(e,n)}}var $i={readContext:Et,useCallback:et,useContext:et,useEffect:et,useImperativeHandle:et,useInsertionEffect:et,useLayoutEffect:et,useMemo:et,useReducer:et,useRef:et,useState:et,useDebugValue:et,useDeferredValue:et,useTransition:et,useMutableSource:et,useSyncExternalStore:et,useId:et,unstable_isNewReconciler:!1},pp={readContext:Et,useCallback:function(e,t){return Wt().memoizedState=[e,t===void 0?null:t],e},useContext:Et,useEffect:Oc,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,mi(4194308,4,of.bind(null,t,e),n)},useLayoutEffect:function(e,t){return mi(4194308,4,e,t)},useInsertionEffect:function(e,t){return mi(4,2,e,t)},useMemo:function(e,t){var n=Wt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Wt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=fp.bind(null,Ie,e),[r.memoizedState,e]},useRef:function(e){var t=Wt();return e={current:e},t.memoizedState=e},useState:Ac,useDebugValue:_l,useDeferredValue:function(e){return Wt().memoizedState=e},useTransition:function(){var e=Ac(!1),t=e[0];return e=dp.bind(null,e[1]),Wt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Ie,i=Wt();if(Me){if(n===void 0)throw Error(U(407));n=n()}else{if(n=t(),Qe===null)throw Error(U(349));Hn&30||Xd(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,Oc(Zd.bind(null,r,o,e),[e]),r.flags|=2048,ks(9,Jd.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=Wt(),t=Qe.identifierPrefix;if(Me){var n=Jt,r=Xt;n=(r&~(1<<32-Ft(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=ws++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=up++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},hp={readContext:Et,useCallback:lf,useContext:Et,useEffect:El,useImperativeHandle:af,useInsertionEffect:rf,useLayoutEffect:sf,useMemo:cf,useReducer:$o,useRef:nf,useState:function(){return $o(js)},useDebugValue:_l,useDeferredValue:function(e){var t=_t();return uf(t,qe.memoizedState,e)},useTransition:function(){var e=$o(js)[0],t=_t().memoizedState;return[e,t]},useMutableSource:Gd,useSyncExternalStore:Kd,useId:df,unstable_isNewReconciler:!1},xp={readContext:Et,useCallback:lf,useContext:Et,useEffect:El,useImperativeHandle:af,useInsertionEffect:rf,useLayoutEffect:sf,useMemo:cf,useReducer:Bo,useRef:nf,useState:function(){return Bo(js)},useDebugValue:_l,useDeferredValue:function(e){var t=_t();return qe===null?t.memoizedState=e:uf(t,qe.memoizedState,e)},useTransition:function(){var e=Bo(js)[0],t=_t().memoizedState;return[e,t]},useMutableSource:Gd,useSyncExternalStore:Kd,useId:df,unstable_isNewReconciler:!1};function zt(e,t){if(e&&e.defaultProps){t=Ae({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Ra(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Ae({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var no={isMounted:function(e){return(e=e._reactInternals)?Kn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=at(),i=Cn(e),o=en(r,i);o.payload=t,n!=null&&(o.callback=n),t=Nn(e,o,i),t!==null&&(Dt(t,e,i,r),di(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=at(),i=Cn(e),o=en(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=Nn(e,o,i),t!==null&&(Dt(t,e,i,r),di(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=at(),r=Cn(e),i=en(n,r);i.tag=2,t!=null&&(i.callback=t),t=Nn(e,i,r),t!==null&&(Dt(t,e,r,n),di(t,e,r))}};function $c(e,t,n,r,i,o,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,a):t.prototype&&t.prototype.isPureReactComponent?!hs(n,r)||!hs(i,o):!0}function hf(e,t,n){var r=!1,i=Rn,o=t.contextType;return typeof o=="object"&&o!==null?o=Et(o):(i=mt(t)?Wn:rt.current,r=t.contextTypes,o=(r=r!=null)?br(e,i):Rn),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=no,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Bc(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&no.enqueueReplaceState(t,t.state,null)}function Pa(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},bl(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=Et(o):(o=mt(t)?Wn:rt.current,i.context=br(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Ra(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&no.enqueueReplaceState(i,i.state,null),Ii(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Nr(e,t){try{var n="",r=t;do n+=W0(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function qo(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function za(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var gp=typeof WeakMap=="function"?WeakMap:Map;function xf(e,t,n){n=en(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){qi||(qi=!0,Ba=r),za(e,t)},n}function gf(e,t,n){n=en(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){za(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){za(e,t),typeof r!="function"&&(Sn===null?Sn=new Set([this]):Sn.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function qc(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new gp;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=zp.bind(null,e,t,n),t.then(e,e))}function Uc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Wc(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=en(-1,1),t.tag=2,Nn(n,t,1))),n.lanes|=1),e)}var vp=ln.ReactCurrentOwner,dt=!1;function ot(e,t,n,r){t.child=e===null?Qd(t,null,n,r):jr(t,e.child,n,r)}function Qc(e,t,n,r,i){n=n.render;var o=t.ref;return xr(t,i),r=Sl(e,t,n,r,o,i),n=Cl(),e!==null&&!dt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,on(e,t,i)):(Me&&n&&ml(t),t.flags|=1,ot(e,t,r,i),t.child)}function Hc(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!Dl(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,vf(e,t,o,r,i)):(e=gi(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var a=o.memoizedProps;if(n=n.compare,n=n!==null?n:hs,n(a,r)&&e.ref===t.ref)return on(e,t,i)}return t.flags|=1,e=En(o,r),e.ref=t.ref,e.return=t,t.child=e}function vf(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(hs(o,r)&&e.ref===t.ref)if(dt=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(dt=!0);else return t.lanes=e.lanes,on(e,t,i)}return Ta(e,t,n,r,i)}function yf(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ee(dr,gt),gt|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Ee(dr,gt),gt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,Ee(dr,gt),gt|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,Ee(dr,gt),gt|=r;return ot(e,t,i,n),t.child}function bf(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ta(e,t,n,r,i){var o=mt(n)?Wn:rt.current;return o=br(t,o),xr(t,i),n=Sl(e,t,n,r,o,i),r=Cl(),e!==null&&!dt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,on(e,t,i)):(Me&&r&&ml(t),t.flags|=1,ot(e,t,n,i),t.child)}function Yc(e,t,n,r,i){if(mt(n)){var o=!0;Ti(t)}else o=!1;if(xr(t,i),t.stateNode===null)pi(e,t),hf(t,n,r),Pa(t,n,r,i),r=!0;else if(e===null){var a=t.stateNode,l=t.memoizedProps;a.props=l;var c=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=Et(u):(u=mt(n)?Wn:rt.current,u=br(t,u));var m=n.getDerivedStateFromProps,x=typeof m=="function"||typeof a.getSnapshotBeforeUpdate=="function";x||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==r||c!==u)&&Bc(t,a,r,u),pn=!1;var p=t.memoizedState;a.state=p,Ii(t,r,a,i),c=t.memoizedState,l!==r||p!==c||ft.current||pn?(typeof m=="function"&&(Ra(t,n,m,r),c=t.memoizedState),(l=pn||$c(t,n,l,r,p,c,u))?(x||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),a.props=r,a.state=c,a.context=u,r=l):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Yd(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:zt(t.type,l),a.props=u,x=t.pendingProps,p=a.context,c=n.contextType,typeof c=="object"&&c!==null?c=Et(c):(c=mt(n)?Wn:rt.current,c=br(t,c));var w=n.getDerivedStateFromProps;(m=typeof w=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==x||p!==c)&&Bc(t,a,r,c),pn=!1,p=t.memoizedState,a.state=p,Ii(t,r,a,i);var y=t.memoizedState;l!==x||p!==y||ft.current||pn?(typeof w=="function"&&(Ra(t,n,w,r),y=t.memoizedState),(u=pn||$c(t,n,u,r,p,y,c)||!1)?(m||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,y,c),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,y,c)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),a.props=r,a.state=y,a.context=c,r=u):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return La(e,t,n,r,o,i)}function La(e,t,n,r,i,o){bf(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return i&&Tc(t,n,!1),on(e,t,o);r=t.stateNode,vp.current=t;var l=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=jr(t,e.child,null,o),t.child=jr(t,null,l,o)):ot(e,t,l,o),t.memoizedState=r.state,i&&Tc(t,n,!0),t.child}function wf(e){var t=e.stateNode;t.pendingContext?zc(e,t.pendingContext,t.pendingContext!==t.context):t.context&&zc(e,t.context,!1),wl(e,t.containerInfo)}function Vc(e,t,n,r,i){return wr(),hl(i),t.flags|=256,ot(e,t,n,r),t.child}var Ma={dehydrated:null,treeContext:null,retryLane:0};function Fa(e){return{baseLanes:e,cachePool:null,transitions:null}}function jf(e,t,n){var r=t.pendingProps,i=De.current,o=!1,a=(t.flags&128)!==0,l;if((l=a)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),Ee(De,i&1),e===null)return Ea(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,o?(r=t.mode,o=t.child,a={mode:"hidden",children:a},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=a):o=io(a,r,0,null),e=qn(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Fa(n),t.memoizedState=Ma,e):Rl(t,a));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return yp(e,t,a,r,l,i,n);if(o){o=r.fallback,a=t.mode,i=e.child,l=i.sibling;var c={mode:"hidden",children:r.children};return!(a&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=c,t.deletions=null):(r=En(i,c),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?o=En(l,o):(o=qn(o,a,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,a=e.child.memoizedState,a=a===null?Fa(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},o.memoizedState=a,o.childLanes=e.childLanes&~n,t.memoizedState=Ma,r}return o=e.child,e=o.sibling,r=En(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Rl(e,t){return t=io({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Vs(e,t,n,r){return r!==null&&hl(r),jr(t,e.child,null,n),e=Rl(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function yp(e,t,n,r,i,o,a){if(n)return t.flags&256?(t.flags&=-257,r=qo(Error(U(422))),Vs(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=io({mode:"visible",children:r.children},i,0,null),o=qn(o,i,a,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&jr(t,e.child,null,a),t.child.memoizedState=Fa(a),t.memoizedState=Ma,o);if(!(t.mode&1))return Vs(e,t,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,o=Error(U(419)),r=qo(o,r,void 0),Vs(e,t,a,r)}if(l=(a&e.childLanes)!==0,dt||l){if(r=Qe,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|a)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,sn(e,i),Dt(r,e,i,-1))}return Fl(),r=qo(Error(U(421))),Vs(e,t,a,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Tp.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,vt=kn(i.nextSibling),yt=t,Me=!0,Lt=null,e!==null&&(kt[Nt++]=Xt,kt[Nt++]=Jt,kt[Nt++]=Qn,Xt=e.id,Jt=e.overflow,Qn=t),t=Rl(t,r.children),t.flags|=4096,t)}function Gc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),_a(e.return,t,n)}function Uo(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function kf(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(ot(e,t,r.children,n),r=De.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Gc(e,n,t);else if(e.tag===19)Gc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Ee(De,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Ai(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Uo(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Ai(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Uo(t,!0,n,null,o);break;case"together":Uo(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function pi(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function on(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Yn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(U(153));if(t.child!==null){for(e=t.child,n=En(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=En(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function bp(e,t,n){switch(t.tag){case 3:wf(t),wr();break;case 5:Vd(t);break;case 1:mt(t.type)&&Ti(t);break;case 4:wl(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;Ee(Fi,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(Ee(De,De.current&1),t.flags|=128,null):n&t.child.childLanes?jf(e,t,n):(Ee(De,De.current&1),e=on(e,t,n),e!==null?e.sibling:null);Ee(De,De.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return kf(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Ee(De,De.current),r)break;return null;case 22:case 23:return t.lanes=0,yf(e,t,n)}return on(e,t,n)}var Nf,Da,Sf,Cf;Nf=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Da=function(){};Sf=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,$n(Vt.current);var o=null;switch(n){case"input":i=sa(e,i),r=sa(e,r),o=[];break;case"select":i=Ae({},i,{value:void 0}),r=Ae({},r,{value:void 0}),o=[];break;case"textarea":i=aa(e,i),r=aa(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Pi)}ca(n,r);var a;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(a in l)l.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(ls.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var c=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&c!==l&&(c!=null||l!=null))if(u==="style")if(l){for(a in l)!l.hasOwnProperty(a)||c&&c.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in c)c.hasOwnProperty(a)&&l[a]!==c[a]&&(n||(n={}),n[a]=c[a])}else n||(o||(o=[]),o.push(u,n)),n=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,l=l?l.__html:void 0,c!=null&&l!==c&&(o=o||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(o=o||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(ls.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&Pe("scroll",e),o||l===c||(o=[])):(o=o||[]).push(u,c))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};Cf=function(e,t,n,r){n!==r&&(t.flags|=4)};function $r(e,t){if(!Me)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function tt(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function wp(e,t,n){var r=t.pendingProps;switch(pl(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return tt(t),null;case 1:return mt(t.type)&&zi(),tt(t),null;case 3:return r=t.stateNode,kr(),ze(ft),ze(rt),kl(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Hs(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Lt!==null&&(Wa(Lt),Lt=null))),Da(e,t),tt(t),null;case 5:jl(t);var i=$n(bs.current);if(n=t.type,e!==null&&t.stateNode!=null)Sf(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(U(166));return tt(t),null}if(e=$n(Vt.current),Hs(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[Qt]=t,r[vs]=o,e=(t.mode&1)!==0,n){case"dialog":Pe("cancel",r),Pe("close",r);break;case"iframe":case"object":case"embed":Pe("load",r);break;case"video":case"audio":for(i=0;i<Xr.length;i++)Pe(Xr[i],r);break;case"source":Pe("error",r);break;case"img":case"image":case"link":Pe("error",r),Pe("load",r);break;case"details":Pe("toggle",r);break;case"input":sc(r,o),Pe("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},Pe("invalid",r);break;case"textarea":oc(r,o),Pe("invalid",r)}ca(n,o),i=null;for(var a in o)if(o.hasOwnProperty(a)){var l=o[a];a==="children"?typeof l=="string"?r.textContent!==l&&(o.suppressHydrationWarning!==!0&&Qs(r.textContent,l,e),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(o.suppressHydrationWarning!==!0&&Qs(r.textContent,l,e),i=["children",""+l]):ls.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&Pe("scroll",r)}switch(n){case"input":Is(r),ic(r,o,!0);break;case"textarea":Is(r),ac(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Pi)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Zu(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[Qt]=t,e[vs]=r,Nf(e,t,!1,!1),t.stateNode=e;e:{switch(a=ua(n,r),n){case"dialog":Pe("cancel",e),Pe("close",e),i=r;break;case"iframe":case"object":case"embed":Pe("load",e),i=r;break;case"video":case"audio":for(i=0;i<Xr.length;i++)Pe(Xr[i],e);i=r;break;case"source":Pe("error",e),i=r;break;case"img":case"image":case"link":Pe("error",e),Pe("load",e),i=r;break;case"details":Pe("toggle",e),i=r;break;case"input":sc(e,r),i=sa(e,r),Pe("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=Ae({},r,{value:void 0}),Pe("invalid",e);break;case"textarea":oc(e,r),i=aa(e,r),Pe("invalid",e);break;default:i=r}ca(n,i),l=i;for(o in l)if(l.hasOwnProperty(o)){var c=l[o];o==="style"?nd(e,c):o==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&ed(e,c)):o==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&cs(e,c):typeof c=="number"&&cs(e,""+c):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(ls.hasOwnProperty(o)?c!=null&&o==="onScroll"&&Pe("scroll",e):c!=null&&Za(e,o,c,a))}switch(n){case"input":Is(e),ic(e,r,!1);break;case"textarea":Is(e),ac(e);break;case"option":r.value!=null&&e.setAttribute("value",""+_n(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?fr(e,!!r.multiple,o,!1):r.defaultValue!=null&&fr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Pi)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return tt(t),null;case 6:if(e&&t.stateNode!=null)Cf(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(U(166));if(n=$n(bs.current),$n(Vt.current),Hs(t)){if(r=t.stateNode,n=t.memoizedProps,r[Qt]=t,(o=r.nodeValue!==n)&&(e=yt,e!==null))switch(e.tag){case 3:Qs(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Qs(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Qt]=t,t.stateNode=r}return tt(t),null;case 13:if(ze(De),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Me&&vt!==null&&t.mode&1&&!(t.flags&128))Ud(),wr(),t.flags|=98560,o=!1;else if(o=Hs(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(U(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(U(317));o[Qt]=t}else wr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;tt(t),o=!1}else Lt!==null&&(Wa(Lt),Lt=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||De.current&1?Ue===0&&(Ue=3):Fl())),t.updateQueue!==null&&(t.flags|=4),tt(t),null);case 4:return kr(),Da(e,t),e===null&&xs(t.stateNode.containerInfo),tt(t),null;case 10:return vl(t.type._context),tt(t),null;case 17:return mt(t.type)&&zi(),tt(t),null;case 19:if(ze(De),o=t.memoizedState,o===null)return tt(t),null;if(r=(t.flags&128)!==0,a=o.rendering,a===null)if(r)$r(o,!1);else{if(Ue!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=Ai(e),a!==null){for(t.flags|=128,$r(o,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,a=o.alternate,a===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=a.childLanes,o.lanes=a.lanes,o.child=a.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=a.memoizedProps,o.memoizedState=a.memoizedState,o.updateQueue=a.updateQueue,o.type=a.type,e=a.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Ee(De,De.current&1|2),t.child}e=e.sibling}o.tail!==null&&$e()>Sr&&(t.flags|=128,r=!0,$r(o,!1),t.lanes=4194304)}else{if(!r)if(e=Ai(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),$r(o,!0),o.tail===null&&o.tailMode==="hidden"&&!a.alternate&&!Me)return tt(t),null}else 2*$e()-o.renderingStartTime>Sr&&n!==1073741824&&(t.flags|=128,r=!0,$r(o,!1),t.lanes=4194304);o.isBackwards?(a.sibling=t.child,t.child=a):(n=o.last,n!==null?n.sibling=a:t.child=a,o.last=a)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=$e(),t.sibling=null,n=De.current,Ee(De,r?n&1|2:n&1),t):(tt(t),null);case 22:case 23:return Ml(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?gt&1073741824&&(tt(t),t.subtreeFlags&6&&(t.flags|=8192)):tt(t),null;case 24:return null;case 25:return null}throw Error(U(156,t.tag))}function jp(e,t){switch(pl(t),t.tag){case 1:return mt(t.type)&&zi(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return kr(),ze(ft),ze(rt),kl(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return jl(t),null;case 13:if(ze(De),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(U(340));wr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ze(De),null;case 4:return kr(),null;case 10:return vl(t.type._context),null;case 22:case 23:return Ml(),null;case 24:return null;default:return null}}var Gs=!1,nt=!1,kp=typeof WeakSet=="function"?WeakSet:Set,ne=null;function ur(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Oe(e,t,r)}else n.current=null}function Ia(e,t,n){try{n()}catch(r){Oe(e,t,r)}}var Kc=!1;function Np(e,t){if(ba=Ei,e=Pd(),fl(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var a=0,l=-1,c=-1,u=0,m=0,x=e,p=null;t:for(;;){for(var w;x!==n||i!==0&&x.nodeType!==3||(l=a+i),x!==o||r!==0&&x.nodeType!==3||(c=a+r),x.nodeType===3&&(a+=x.nodeValue.length),(w=x.firstChild)!==null;)p=x,x=w;for(;;){if(x===e)break t;if(p===n&&++u===i&&(l=a),p===o&&++m===r&&(c=a),(w=x.nextSibling)!==null)break;x=p,p=x.parentNode}x=w}n=l===-1||c===-1?null:{start:l,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(wa={focusedElem:e,selectionRange:n},Ei=!1,ne=t;ne!==null;)if(t=ne,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,ne=e;else for(;ne!==null;){t=ne;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var j=y.memoizedProps,C=y.memoizedState,v=t.stateNode,f=v.getSnapshotBeforeUpdate(t.elementType===t.type?j:zt(t.type,j),C);v.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var h=t.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(U(163))}}catch(S){Oe(t,t.return,S)}if(e=t.sibling,e!==null){e.return=t.return,ne=e;break}ne=t.return}return y=Kc,Kc=!1,y}function ss(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Ia(t,n,o)}i=i.next}while(i!==r)}}function ro(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Aa(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Ef(e){var t=e.alternate;t!==null&&(e.alternate=null,Ef(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Qt],delete t[vs],delete t[Na],delete t[op],delete t[ap])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function _f(e){return e.tag===5||e.tag===3||e.tag===4}function Xc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||_f(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Oa(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Pi));else if(r!==4&&(e=e.child,e!==null))for(Oa(e,t,n),e=e.sibling;e!==null;)Oa(e,t,n),e=e.sibling}function $a(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for($a(e,t,n),e=e.sibling;e!==null;)$a(e,t,n),e=e.sibling}var Ge=null,Tt=!1;function cn(e,t,n){for(n=n.child;n!==null;)Rf(e,t,n),n=n.sibling}function Rf(e,t,n){if(Yt&&typeof Yt.onCommitFiberUnmount=="function")try{Yt.onCommitFiberUnmount(Gi,n)}catch{}switch(n.tag){case 5:nt||ur(n,t);case 6:var r=Ge,i=Tt;Ge=null,cn(e,t,n),Ge=r,Tt=i,Ge!==null&&(Tt?(e=Ge,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Ge.removeChild(n.stateNode));break;case 18:Ge!==null&&(Tt?(e=Ge,n=n.stateNode,e.nodeType===8?Do(e.parentNode,n):e.nodeType===1&&Do(e,n),ms(e)):Do(Ge,n.stateNode));break;case 4:r=Ge,i=Tt,Ge=n.stateNode.containerInfo,Tt=!0,cn(e,t,n),Ge=r,Tt=i;break;case 0:case 11:case 14:case 15:if(!nt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,a=o.destroy;o=o.tag,a!==void 0&&(o&2||o&4)&&Ia(n,t,a),i=i.next}while(i!==r)}cn(e,t,n);break;case 1:if(!nt&&(ur(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Oe(n,t,l)}cn(e,t,n);break;case 21:cn(e,t,n);break;case 22:n.mode&1?(nt=(r=nt)||n.memoizedState!==null,cn(e,t,n),nt=r):cn(e,t,n);break;default:cn(e,t,n)}}function Jc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new kp),t.forEach(function(r){var i=Lp.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Pt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,a=t,l=a;e:for(;l!==null;){switch(l.tag){case 5:Ge=l.stateNode,Tt=!1;break e;case 3:Ge=l.stateNode.containerInfo,Tt=!0;break e;case 4:Ge=l.stateNode.containerInfo,Tt=!0;break e}l=l.return}if(Ge===null)throw Error(U(160));Rf(o,a,i),Ge=null,Tt=!1;var c=i.alternate;c!==null&&(c.return=null),i.return=null}catch(u){Oe(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Pf(t,e),t=t.sibling}function Pf(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Pt(t,e),Bt(e),r&4){try{ss(3,e,e.return),ro(3,e)}catch(j){Oe(e,e.return,j)}try{ss(5,e,e.return)}catch(j){Oe(e,e.return,j)}}break;case 1:Pt(t,e),Bt(e),r&512&&n!==null&&ur(n,n.return);break;case 5:if(Pt(t,e),Bt(e),r&512&&n!==null&&ur(n,n.return),e.flags&32){var i=e.stateNode;try{cs(i,"")}catch(j){Oe(e,e.return,j)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,a=n!==null?n.memoizedProps:o,l=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{l==="input"&&o.type==="radio"&&o.name!=null&&Xu(i,o),ua(l,a);var u=ua(l,o);for(a=0;a<c.length;a+=2){var m=c[a],x=c[a+1];m==="style"?nd(i,x):m==="dangerouslySetInnerHTML"?ed(i,x):m==="children"?cs(i,x):Za(i,m,x,u)}switch(l){case"input":ia(i,o);break;case"textarea":Ju(i,o);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var w=o.value;w!=null?fr(i,!!o.multiple,w,!1):p!==!!o.multiple&&(o.defaultValue!=null?fr(i,!!o.multiple,o.defaultValue,!0):fr(i,!!o.multiple,o.multiple?[]:"",!1))}i[vs]=o}catch(j){Oe(e,e.return,j)}}break;case 6:if(Pt(t,e),Bt(e),r&4){if(e.stateNode===null)throw Error(U(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(j){Oe(e,e.return,j)}}break;case 3:if(Pt(t,e),Bt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ms(t.containerInfo)}catch(j){Oe(e,e.return,j)}break;case 4:Pt(t,e),Bt(e);break;case 13:Pt(t,e),Bt(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Tl=$e())),r&4&&Jc(e);break;case 22:if(m=n!==null&&n.memoizedState!==null,e.mode&1?(nt=(u=nt)||m,Pt(t,e),nt=u):Pt(t,e),Bt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!m&&e.mode&1)for(ne=e,m=e.child;m!==null;){for(x=ne=m;ne!==null;){switch(p=ne,w=p.child,p.tag){case 0:case 11:case 14:case 15:ss(4,p,p.return);break;case 1:ur(p,p.return);var y=p.stateNode;if(typeof y.componentWillUnmount=="function"){r=p,n=p.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(j){Oe(r,n,j)}}break;case 5:ur(p,p.return);break;case 22:if(p.memoizedState!==null){eu(x);continue}}w!==null?(w.return=p,ne=w):eu(x)}m=m.sibling}e:for(m=null,x=e;;){if(x.tag===5){if(m===null){m=x;try{i=x.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(l=x.stateNode,c=x.memoizedProps.style,a=c!=null&&c.hasOwnProperty("display")?c.display:null,l.style.display=td("display",a))}catch(j){Oe(e,e.return,j)}}}else if(x.tag===6){if(m===null)try{x.stateNode.nodeValue=u?"":x.memoizedProps}catch(j){Oe(e,e.return,j)}}else if((x.tag!==22&&x.tag!==23||x.memoizedState===null||x===e)&&x.child!==null){x.child.return=x,x=x.child;continue}if(x===e)break e;for(;x.sibling===null;){if(x.return===null||x.return===e)break e;m===x&&(m=null),x=x.return}m===x&&(m=null),x.sibling.return=x.return,x=x.sibling}}break;case 19:Pt(t,e),Bt(e),r&4&&Jc(e);break;case 21:break;default:Pt(t,e),Bt(e)}}function Bt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(_f(n)){var r=n;break e}n=n.return}throw Error(U(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(cs(i,""),r.flags&=-33);var o=Xc(e);$a(e,o,i);break;case 3:case 4:var a=r.stateNode.containerInfo,l=Xc(e);Oa(e,l,a);break;default:throw Error(U(161))}}catch(c){Oe(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Sp(e,t,n){ne=e,zf(e)}function zf(e,t,n){for(var r=(e.mode&1)!==0;ne!==null;){var i=ne,o=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||Gs;if(!a){var l=i.alternate,c=l!==null&&l.memoizedState!==null||nt;l=Gs;var u=nt;if(Gs=a,(nt=c)&&!u)for(ne=i;ne!==null;)a=ne,c=a.child,a.tag===22&&a.memoizedState!==null?tu(i):c!==null?(c.return=a,ne=c):tu(i);for(;o!==null;)ne=o,zf(o),o=o.sibling;ne=i,Gs=l,nt=u}Zc(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,ne=o):Zc(e)}}function Zc(e){for(;ne!==null;){var t=ne;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:nt||ro(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!nt)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:zt(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Ic(t,o,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Ic(t,a,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var m=u.memoizedState;if(m!==null){var x=m.dehydrated;x!==null&&ms(x)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(U(163))}nt||t.flags&512&&Aa(t)}catch(p){Oe(t,t.return,p)}}if(t===e){ne=null;break}if(n=t.sibling,n!==null){n.return=t.return,ne=n;break}ne=t.return}}function eu(e){for(;ne!==null;){var t=ne;if(t===e){ne=null;break}var n=t.sibling;if(n!==null){n.return=t.return,ne=n;break}ne=t.return}}function tu(e){for(;ne!==null;){var t=ne;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{ro(4,t)}catch(c){Oe(t,n,c)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(c){Oe(t,i,c)}}var o=t.return;try{Aa(t)}catch(c){Oe(t,o,c)}break;case 5:var a=t.return;try{Aa(t)}catch(c){Oe(t,a,c)}}}catch(c){Oe(t,t.return,c)}if(t===e){ne=null;break}var l=t.sibling;if(l!==null){l.return=t.return,ne=l;break}ne=t.return}}var Cp=Math.ceil,Bi=ln.ReactCurrentDispatcher,Pl=ln.ReactCurrentOwner,Ct=ln.ReactCurrentBatchConfig,ve=0,Qe=null,Be=null,Xe=0,gt=0,dr=zn(0),Ue=0,Ns=null,Yn=0,so=0,zl=0,is=null,ut=null,Tl=0,Sr=1/0,Gt=null,qi=!1,Ba=null,Sn=null,Ks=!1,yn=null,Ui=0,os=0,qa=null,hi=-1,xi=0;function at(){return ve&6?$e():hi!==-1?hi:hi=$e()}function Cn(e){return e.mode&1?ve&2&&Xe!==0?Xe&-Xe:cp.transition!==null?(xi===0&&(xi=pd()),xi):(e=ke,e!==0||(e=window.event,e=e===void 0?16:wd(e.type)),e):1}function Dt(e,t,n,r){if(50<os)throw os=0,qa=null,Error(U(185));Es(e,n,r),(!(ve&2)||e!==Qe)&&(e===Qe&&(!(ve&2)&&(so|=n),Ue===4&&gn(e,Xe)),pt(e,r),n===1&&ve===0&&!(t.mode&1)&&(Sr=$e()+500,eo&&Tn()))}function pt(e,t){var n=e.callbackNode;cm(e,t);var r=Ci(e,e===Qe?Xe:0);if(r===0)n!==null&&uc(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&uc(n),t===1)e.tag===0?lp(nu.bind(null,e)):$d(nu.bind(null,e)),sp(function(){!(ve&6)&&Tn()}),n=null;else{switch(hd(r)){case 1:n=sl;break;case 4:n=fd;break;case 16:n=Si;break;case 536870912:n=md;break;default:n=Si}n=Of(n,Tf.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Tf(e,t){if(hi=-1,xi=0,ve&6)throw Error(U(327));var n=e.callbackNode;if(gr()&&e.callbackNode!==n)return null;var r=Ci(e,e===Qe?Xe:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Wi(e,r);else{t=r;var i=ve;ve|=2;var o=Mf();(Qe!==e||Xe!==t)&&(Gt=null,Sr=$e()+500,Bn(e,t));do try{Rp();break}catch(l){Lf(e,l)}while(1);gl(),Bi.current=o,ve=i,Be!==null?t=0:(Qe=null,Xe=0,t=Ue)}if(t!==0){if(t===2&&(i=ha(e),i!==0&&(r=i,t=Ua(e,i))),t===1)throw n=Ns,Bn(e,0),gn(e,r),pt(e,$e()),n;if(t===6)gn(e,r);else{if(i=e.current.alternate,!(r&30)&&!Ep(i)&&(t=Wi(e,r),t===2&&(o=ha(e),o!==0&&(r=o,t=Ua(e,o))),t===1))throw n=Ns,Bn(e,0),gn(e,r),pt(e,$e()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(U(345));case 2:In(e,ut,Gt);break;case 3:if(gn(e,r),(r&130023424)===r&&(t=Tl+500-$e(),10<t)){if(Ci(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){at(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=ka(In.bind(null,e,ut,Gt),t);break}In(e,ut,Gt);break;case 4:if(gn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var a=31-Ft(r);o=1<<a,a=t[a],a>i&&(i=a),r&=~o}if(r=i,r=$e()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Cp(r/1960))-r,10<r){e.timeoutHandle=ka(In.bind(null,e,ut,Gt),r);break}In(e,ut,Gt);break;case 5:In(e,ut,Gt);break;default:throw Error(U(329))}}}return pt(e,$e()),e.callbackNode===n?Tf.bind(null,e):null}function Ua(e,t){var n=is;return e.current.memoizedState.isDehydrated&&(Bn(e,t).flags|=256),e=Wi(e,t),e!==2&&(t=ut,ut=n,t!==null&&Wa(t)),e}function Wa(e){ut===null?ut=e:ut.push.apply(ut,e)}function Ep(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!It(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function gn(e,t){for(t&=~zl,t&=~so,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ft(t),r=1<<n;e[n]=-1,t&=~r}}function nu(e){if(ve&6)throw Error(U(327));gr();var t=Ci(e,0);if(!(t&1))return pt(e,$e()),null;var n=Wi(e,t);if(e.tag!==0&&n===2){var r=ha(e);r!==0&&(t=r,n=Ua(e,r))}if(n===1)throw n=Ns,Bn(e,0),gn(e,t),pt(e,$e()),n;if(n===6)throw Error(U(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,In(e,ut,Gt),pt(e,$e()),null}function Ll(e,t){var n=ve;ve|=1;try{return e(t)}finally{ve=n,ve===0&&(Sr=$e()+500,eo&&Tn())}}function Vn(e){yn!==null&&yn.tag===0&&!(ve&6)&&gr();var t=ve;ve|=1;var n=Ct.transition,r=ke;try{if(Ct.transition=null,ke=1,e)return e()}finally{ke=r,Ct.transition=n,ve=t,!(ve&6)&&Tn()}}function Ml(){gt=dr.current,ze(dr)}function Bn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,rp(n)),Be!==null)for(n=Be.return;n!==null;){var r=n;switch(pl(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&zi();break;case 3:kr(),ze(ft),ze(rt),kl();break;case 5:jl(r);break;case 4:kr();break;case 13:ze(De);break;case 19:ze(De);break;case 10:vl(r.type._context);break;case 22:case 23:Ml()}n=n.return}if(Qe=e,Be=e=En(e.current,null),Xe=gt=t,Ue=0,Ns=null,zl=so=Yn=0,ut=is=null,On!==null){for(t=0;t<On.length;t++)if(n=On[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var a=o.next;o.next=i,r.next=a}n.pending=r}On=null}return e}function Lf(e,t){do{var n=Be;try{if(gl(),fi.current=$i,Oi){for(var r=Ie.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Oi=!1}if(Hn=0,We=qe=Ie=null,rs=!1,ws=0,Pl.current=null,n===null||n.return===null){Ue=1,Ns=t,Be=null;break}e:{var o=e,a=n.return,l=n,c=t;if(t=Xe,l.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,m=l,x=m.tag;if(!(m.mode&1)&&(x===0||x===11||x===15)){var p=m.alternate;p?(m.updateQueue=p.updateQueue,m.memoizedState=p.memoizedState,m.lanes=p.lanes):(m.updateQueue=null,m.memoizedState=null)}var w=Uc(a);if(w!==null){w.flags&=-257,Wc(w,a,l,o,t),w.mode&1&&qc(o,u,t),t=w,c=u;var y=t.updateQueue;if(y===null){var j=new Set;j.add(c),t.updateQueue=j}else y.add(c);break e}else{if(!(t&1)){qc(o,u,t),Fl();break e}c=Error(U(426))}}else if(Me&&l.mode&1){var C=Uc(a);if(C!==null){!(C.flags&65536)&&(C.flags|=256),Wc(C,a,l,o,t),hl(Nr(c,l));break e}}o=c=Nr(c,l),Ue!==4&&(Ue=2),is===null?is=[o]:is.push(o),o=a;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var v=xf(o,c,t);Dc(o,v);break e;case 1:l=c;var f=o.type,h=o.stateNode;if(!(o.flags&128)&&(typeof f.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(Sn===null||!Sn.has(h)))){o.flags|=65536,t&=-t,o.lanes|=t;var S=gf(o,l,t);Dc(o,S);break e}}o=o.return}while(o!==null)}Df(n)}catch(_){t=_,Be===n&&n!==null&&(Be=n=n.return);continue}break}while(1)}function Mf(){var e=Bi.current;return Bi.current=$i,e===null?$i:e}function Fl(){(Ue===0||Ue===3||Ue===2)&&(Ue=4),Qe===null||!(Yn&268435455)&&!(so&268435455)||gn(Qe,Xe)}function Wi(e,t){var n=ve;ve|=2;var r=Mf();(Qe!==e||Xe!==t)&&(Gt=null,Bn(e,t));do try{_p();break}catch(i){Lf(e,i)}while(1);if(gl(),ve=n,Bi.current=r,Be!==null)throw Error(U(261));return Qe=null,Xe=0,Ue}function _p(){for(;Be!==null;)Ff(Be)}function Rp(){for(;Be!==null&&!em();)Ff(Be)}function Ff(e){var t=Af(e.alternate,e,gt);e.memoizedProps=e.pendingProps,t===null?Df(e):Be=t,Pl.current=null}function Df(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=jp(n,t),n!==null){n.flags&=32767,Be=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ue=6,Be=null;return}}else if(n=wp(n,t,gt),n!==null){Be=n;return}if(t=t.sibling,t!==null){Be=t;return}Be=t=e}while(t!==null);Ue===0&&(Ue=5)}function In(e,t,n){var r=ke,i=Ct.transition;try{Ct.transition=null,ke=1,Pp(e,t,n,r)}finally{Ct.transition=i,ke=r}return null}function Pp(e,t,n,r){do gr();while(yn!==null);if(ve&6)throw Error(U(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(U(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(um(e,o),e===Qe&&(Be=Qe=null,Xe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ks||(Ks=!0,Of(Si,function(){return gr(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Ct.transition,Ct.transition=null;var a=ke;ke=1;var l=ve;ve|=4,Pl.current=null,Np(e,n),Pf(n,e),Km(wa),Ei=!!ba,wa=ba=null,e.current=n,Sp(n),tm(),ve=l,ke=a,Ct.transition=o}else e.current=n;if(Ks&&(Ks=!1,yn=e,Ui=i),o=e.pendingLanes,o===0&&(Sn=null),sm(n.stateNode),pt(e,$e()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(qi)throw qi=!1,e=Ba,Ba=null,e;return Ui&1&&e.tag!==0&&gr(),o=e.pendingLanes,o&1?e===qa?os++:(os=0,qa=e):os=0,Tn(),null}function gr(){if(yn!==null){var e=hd(Ui),t=Ct.transition,n=ke;try{if(Ct.transition=null,ke=16>e?16:e,yn===null)var r=!1;else{if(e=yn,yn=null,Ui=0,ve&6)throw Error(U(331));var i=ve;for(ve|=4,ne=e.current;ne!==null;){var o=ne,a=o.child;if(ne.flags&16){var l=o.deletions;if(l!==null){for(var c=0;c<l.length;c++){var u=l[c];for(ne=u;ne!==null;){var m=ne;switch(m.tag){case 0:case 11:case 15:ss(8,m,o)}var x=m.child;if(x!==null)x.return=m,ne=x;else for(;ne!==null;){m=ne;var p=m.sibling,w=m.return;if(Ef(m),m===u){ne=null;break}if(p!==null){p.return=w,ne=p;break}ne=w}}}var y=o.alternate;if(y!==null){var j=y.child;if(j!==null){y.child=null;do{var C=j.sibling;j.sibling=null,j=C}while(j!==null)}}ne=o}}if(o.subtreeFlags&2064&&a!==null)a.return=o,ne=a;else e:for(;ne!==null;){if(o=ne,o.flags&2048)switch(o.tag){case 0:case 11:case 15:ss(9,o,o.return)}var v=o.sibling;if(v!==null){v.return=o.return,ne=v;break e}ne=o.return}}var f=e.current;for(ne=f;ne!==null;){a=ne;var h=a.child;if(a.subtreeFlags&2064&&h!==null)h.return=a,ne=h;else e:for(a=f;ne!==null;){if(l=ne,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:ro(9,l)}}catch(_){Oe(l,l.return,_)}if(l===a){ne=null;break e}var S=l.sibling;if(S!==null){S.return=l.return,ne=S;break e}ne=l.return}}if(ve=i,Tn(),Yt&&typeof Yt.onPostCommitFiberRoot=="function")try{Yt.onPostCommitFiberRoot(Gi,e)}catch{}r=!0}return r}finally{ke=n,Ct.transition=t}}return!1}function ru(e,t,n){t=Nr(n,t),t=xf(e,t,1),e=Nn(e,t,1),t=at(),e!==null&&(Es(e,1,t),pt(e,t))}function Oe(e,t,n){if(e.tag===3)ru(e,e,n);else for(;t!==null;){if(t.tag===3){ru(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Sn===null||!Sn.has(r))){e=Nr(n,e),e=gf(t,e,1),t=Nn(t,e,1),e=at(),t!==null&&(Es(t,1,e),pt(t,e));break}}t=t.return}}function zp(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=at(),e.pingedLanes|=e.suspendedLanes&n,Qe===e&&(Xe&n)===n&&(Ue===4||Ue===3&&(Xe&130023424)===Xe&&500>$e()-Tl?Bn(e,0):zl|=n),pt(e,t)}function If(e,t){t===0&&(e.mode&1?(t=$s,$s<<=1,!($s&130023424)&&($s=4194304)):t=1);var n=at();e=sn(e,t),e!==null&&(Es(e,t,n),pt(e,n))}function Tp(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),If(e,n)}function Lp(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(U(314))}r!==null&&r.delete(t),If(e,n)}var Af;Af=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||ft.current)dt=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return dt=!1,bp(e,t,n);dt=!!(e.flags&131072)}else dt=!1,Me&&t.flags&1048576&&Bd(t,Mi,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;pi(e,t),e=t.pendingProps;var i=br(t,rt.current);xr(t,n),i=Sl(null,t,r,e,i,n);var o=Cl();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,mt(r)?(o=!0,Ti(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,bl(t),i.updater=no,t.stateNode=i,i._reactInternals=t,Pa(t,r,e,n),t=La(null,t,r,!0,o,n)):(t.tag=0,Me&&o&&ml(t),ot(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(pi(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Fp(r),e=zt(r,e),i){case 0:t=Ta(null,t,r,e,n);break e;case 1:t=Yc(null,t,r,e,n);break e;case 11:t=Qc(null,t,r,e,n);break e;case 14:t=Hc(null,t,r,zt(r.type,e),n);break e}throw Error(U(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:zt(r,i),Ta(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:zt(r,i),Yc(e,t,r,i,n);case 3:e:{if(wf(t),e===null)throw Error(U(387));r=t.pendingProps,o=t.memoizedState,i=o.element,Yd(e,t),Ii(t,r,null,n);var a=t.memoizedState;if(r=a.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Nr(Error(U(423)),t),t=Vc(e,t,r,n,i);break e}else if(r!==i){i=Nr(Error(U(424)),t),t=Vc(e,t,r,n,i);break e}else for(vt=kn(t.stateNode.containerInfo.firstChild),yt=t,Me=!0,Lt=null,n=Qd(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(wr(),r===i){t=on(e,t,n);break e}ot(e,t,r,n)}t=t.child}return t;case 5:return Vd(t),e===null&&Ea(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,a=i.children,ja(r,i)?a=null:o!==null&&ja(r,o)&&(t.flags|=32),bf(e,t),ot(e,t,a,n),t.child;case 6:return e===null&&Ea(t),null;case 13:return jf(e,t,n);case 4:return wl(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=jr(t,null,r,n):ot(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:zt(r,i),Qc(e,t,r,i,n);case 7:return ot(e,t,t.pendingProps,n),t.child;case 8:return ot(e,t,t.pendingProps.children,n),t.child;case 12:return ot(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,a=i.value,Ee(Fi,r._currentValue),r._currentValue=a,o!==null)if(It(o.value,a)){if(o.children===i.children&&!ft.current){t=on(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var l=o.dependencies;if(l!==null){a=o.child;for(var c=l.firstContext;c!==null;){if(c.context===r){if(o.tag===1){c=en(-1,n&-n),c.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var m=u.pending;m===null?c.next=c:(c.next=m.next,m.next=c),u.pending=c}}o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),_a(o.return,n,t),l.lanes|=n;break}c=c.next}}else if(o.tag===10)a=o.type===t.type?null:o.child;else if(o.tag===18){if(a=o.return,a===null)throw Error(U(341));a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),_a(a,n,t),a=o.sibling}else a=o.child;if(a!==null)a.return=o;else for(a=o;a!==null;){if(a===t){a=null;break}if(o=a.sibling,o!==null){o.return=a.return,a=o;break}a=a.return}o=a}ot(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,xr(t,n),i=Et(i),r=r(i),t.flags|=1,ot(e,t,r,n),t.child;case 14:return r=t.type,i=zt(r,t.pendingProps),i=zt(r.type,i),Hc(e,t,r,i,n);case 15:return vf(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:zt(r,i),pi(e,t),t.tag=1,mt(r)?(e=!0,Ti(t)):e=!1,xr(t,n),hf(t,r,i),Pa(t,r,i,n),La(null,t,r,!0,e,n);case 19:return kf(e,t,n);case 22:return yf(e,t,n)}throw Error(U(156,t.tag))};function Of(e,t){return dd(e,t)}function Mp(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function St(e,t,n,r){return new Mp(e,t,n,r)}function Dl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Fp(e){if(typeof e=="function")return Dl(e)?1:0;if(e!=null){if(e=e.$$typeof,e===tl)return 11;if(e===nl)return 14}return 2}function En(e,t){var n=e.alternate;return n===null?(n=St(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function gi(e,t,n,r,i,o){var a=2;if(r=e,typeof e=="function")Dl(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case tr:return qn(n.children,i,o,t);case el:a=8,i|=8;break;case ea:return e=St(12,n,t,i|2),e.elementType=ea,e.lanes=o,e;case ta:return e=St(13,n,t,i),e.elementType=ta,e.lanes=o,e;case na:return e=St(19,n,t,i),e.elementType=na,e.lanes=o,e;case Vu:return io(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Hu:a=10;break e;case Yu:a=9;break e;case tl:a=11;break e;case nl:a=14;break e;case mn:a=16,r=null;break e}throw Error(U(130,e==null?e:typeof e,""))}return t=St(a,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function qn(e,t,n,r){return e=St(7,e,r,t),e.lanes=n,e}function io(e,t,n,r){return e=St(22,e,r,t),e.elementType=Vu,e.lanes=n,e.stateNode={isHidden:!1},e}function Wo(e,t,n){return e=St(6,e,null,t),e.lanes=n,e}function Qo(e,t,n){return t=St(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Dp(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=So(0),this.expirationTimes=So(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=So(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Il(e,t,n,r,i,o,a,l,c){return e=new Dp(e,t,n,l,c),t===1?(t=1,o===!0&&(t|=8)):t=0,o=St(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},bl(o),e}function Ip(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:er,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function $f(e){if(!e)return Rn;e=e._reactInternals;e:{if(Kn(e)!==e||e.tag!==1)throw Error(U(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(mt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(U(171))}if(e.tag===1){var n=e.type;if(mt(n))return Od(e,n,t)}return t}function Bf(e,t,n,r,i,o,a,l,c){return e=Il(n,r,!0,e,i,o,a,l,c),e.context=$f(null),n=e.current,r=at(),i=Cn(n),o=en(r,i),o.callback=t??null,Nn(n,o,i),e.current.lanes=i,Es(e,i,r),pt(e,r),e}function oo(e,t,n,r){var i=t.current,o=at(),a=Cn(i);return n=$f(n),t.context===null?t.context=n:t.pendingContext=n,t=en(o,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Nn(i,t,a),e!==null&&(Dt(e,i,a,o),di(e,i,a)),a}function Qi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function su(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Al(e,t){su(e,t),(e=e.alternate)&&su(e,t)}function Ap(){return null}var qf=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ol(e){this._internalRoot=e}ao.prototype.render=Ol.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(U(409));oo(e,t,null,null)};ao.prototype.unmount=Ol.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Vn(function(){oo(null,e,null,null)}),t[rn]=null}};function ao(e){this._internalRoot=e}ao.prototype.unstable_scheduleHydration=function(e){if(e){var t=vd();e={blockedOn:null,target:e,priority:t};for(var n=0;n<xn.length&&t!==0&&t<xn[n].priority;n++);xn.splice(n,0,e),n===0&&bd(e)}};function $l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function lo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function iu(){}function Op(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=Qi(a);o.call(u)}}var a=Bf(t,r,e,0,null,!1,!1,"",iu);return e._reactRootContainer=a,e[rn]=a.current,xs(e.nodeType===8?e.parentNode:e),Vn(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=Qi(c);l.call(u)}}var c=Il(e,0,!1,null,null,!1,!1,"",iu);return e._reactRootContainer=c,e[rn]=c.current,xs(e.nodeType===8?e.parentNode:e),Vn(function(){oo(t,c,n,r)}),c}function co(e,t,n,r,i){var o=n._reactRootContainer;if(o){var a=o;if(typeof i=="function"){var l=i;i=function(){var c=Qi(a);l.call(c)}}oo(t,a,e,i)}else a=Op(n,t,e,i,r);return Qi(a)}xd=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Kr(t.pendingLanes);n!==0&&(il(t,n|1),pt(t,$e()),!(ve&6)&&(Sr=$e()+500,Tn()))}break;case 13:Vn(function(){var r=sn(e,1);if(r!==null){var i=at();Dt(r,e,1,i)}}),Al(e,1)}};ol=function(e){if(e.tag===13){var t=sn(e,134217728);if(t!==null){var n=at();Dt(t,e,134217728,n)}Al(e,134217728)}};gd=function(e){if(e.tag===13){var t=Cn(e),n=sn(e,t);if(n!==null){var r=at();Dt(n,e,t,r)}Al(e,t)}};vd=function(){return ke};yd=function(e,t){var n=ke;try{return ke=e,t()}finally{ke=n}};fa=function(e,t,n){switch(t){case"input":if(ia(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Zi(r);if(!i)throw Error(U(90));Ku(r),ia(r,i)}}}break;case"textarea":Ju(e,n);break;case"select":t=n.value,t!=null&&fr(e,!!n.multiple,t,!1)}};id=Ll;od=Vn;var $p={usingClientEntryPoint:!1,Events:[Rs,ir,Zi,rd,sd,Ll]},Br={findFiberByHostInstance:An,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Bp={bundleType:Br.bundleType,version:Br.version,rendererPackageName:Br.rendererPackageName,rendererConfig:Br.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ln.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=cd(e),e===null?null:e.stateNode},findFiberByHostInstance:Br.findFiberByHostInstance||Ap,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Xs=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Xs.isDisabled&&Xs.supportsFiber)try{Gi=Xs.inject(Bp),Yt=Xs}catch{}}wt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$p;wt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!$l(t))throw Error(U(200));return Ip(e,t,null,n)};wt.createRoot=function(e,t){if(!$l(e))throw Error(U(299));var n=!1,r="",i=qf;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Il(e,1,!1,null,null,n,!1,r,i),e[rn]=t.current,xs(e.nodeType===8?e.parentNode:e),new Ol(t)};wt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(U(188)):(e=Object.keys(e).join(","),Error(U(268,e)));return e=cd(t),e=e===null?null:e.stateNode,e};wt.flushSync=function(e){return Vn(e)};wt.hydrate=function(e,t,n){if(!lo(t))throw Error(U(200));return co(null,e,t,!0,n)};wt.hydrateRoot=function(e,t,n){if(!$l(e))throw Error(U(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",a=qf;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=Bf(t,null,e,1,n??null,i,!1,o,a),e[rn]=t.current,xs(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new ao(t)};wt.render=function(e,t,n){if(!lo(t))throw Error(U(200));return co(null,e,t,!1,n)};wt.unmountComponentAtNode=function(e){if(!lo(e))throw Error(U(40));return e._reactRootContainer?(Vn(function(){co(null,null,e,!1,function(){e._reactRootContainer=null,e[rn]=null})}),!0):!1};wt.unstable_batchedUpdates=Ll;wt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!lo(n))throw Error(U(200));if(e==null||e._reactInternals===void 0)throw Error(U(38));return co(e,t,n,!1,r)};wt.version="18.3.1-next-f1338f8080-20240426";function Uf(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Uf)}catch(e){console.error(e)}}Uf(),qu.exports=wt;var qp=qu.exports,ou=qp;Jo.createRoot=ou.createRoot,Jo.hydrateRoot=ou.hydrateRoot;const Up="modulepreload",Wp=function(e){return"/"+e},au={},Wf=function(t,n,r){if(!n||n.length===0)return t();const i=document.getElementsByTagName("link");return Promise.all(n.map(o=>{if(o=Wp(o),o in au)return;au[o]=!0;const a=o.endsWith(".css"),l=a?'[rel="stylesheet"]':"";if(!!r)for(let m=i.length-1;m>=0;m--){const x=i[m];if(x.href===o&&(!a||x.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${l}`))return;const u=document.createElement("link");if(u.rel=a?"stylesheet":Up,a||(u.as="script",u.crossOrigin=""),u.href=o,document.head.appendChild(u),a)return new Promise((m,x)=>{u.addEventListener("load",m),u.addEventListener("error",()=>x(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>t()).catch(o=>{const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o})};var lu="popstate";function Qp(e={}){function t(r,i){let{pathname:o,search:a,hash:l}=r.location;return Qa("",{pathname:o,search:a,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Ss(i)}return Yp(t,n,null,e)}function Fe(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function At(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Hp(){return Math.random().toString(36).substring(2,10)}function cu(e,t){return{usr:e.state,key:e.key,idx:t}}function Qa(e,t,n=null,r){return{pathname:typeof e=="string"?e:e.pathname,search:"",hash:"",...typeof t=="string"?Rr(t):t,state:n,key:t&&t.key||r||Hp()}}function Ss({pathname:e="/",search:t="",hash:n=""}){return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),n&&n!=="#"&&(e+=n.charAt(0)==="#"?n:"#"+n),e}function Rr(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substring(n),e=e.substring(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substring(r),e=e.substring(0,r)),e&&(t.pathname=e)}return t}function Yp(e,t,n,r={}){let{window:i=document.defaultView,v5Compat:o=!1}=r,a=i.history,l="POP",c=null,u=m();u==null&&(u=0,a.replaceState({...a.state,idx:u},""));function m(){return(a.state||{idx:null}).idx}function x(){l="POP";let C=m(),v=C==null?null:C-u;u=C,c&&c({action:l,location:j.location,delta:v})}function p(C,v){l="PUSH";let f=Qa(j.location,C,v);n&&n(f,C),u=m()+1;let h=cu(f,u),S=j.createHref(f);try{a.pushState(h,"",S)}catch(_){if(_ instanceof DOMException&&_.name==="DataCloneError")throw _;i.location.assign(S)}o&&c&&c({action:l,location:j.location,delta:1})}function w(C,v){l="REPLACE";let f=Qa(j.location,C,v);n&&n(f,C),u=m();let h=cu(f,u),S=j.createHref(f);a.replaceState(h,"",S),o&&c&&c({action:l,location:j.location,delta:0})}function y(C){return Vp(C)}let j={get action(){return l},get location(){return e(i,a)},listen(C){if(c)throw new Error("A history only accepts one active listener");return i.addEventListener(lu,x),c=C,()=>{i.removeEventListener(lu,x),c=null}},createHref(C){return t(i,C)},createURL:y,encodeLocation(C){let v=y(C);return{pathname:v.pathname,search:v.search,hash:v.hash}},push:p,replace:w,go(C){return a.go(C)}};return j}function Vp(e,t=!1){let n="http://localhost";typeof window<"u"&&(n=window.location.origin!=="null"?window.location.origin:window.location.href),Fe(n,"No window.location.(origin|href) available to create URL");let r=typeof e=="string"?e:Ss(e);return r=r.replace(/ $/,"%20"),!t&&r.startsWith("//")&&(r=n+r),new URL(r,n)}function Qf(e,t,n="/"){return Gp(e,t,n,!1)}function Gp(e,t,n,r){let i=typeof t=="string"?Rr(t):t,o=an(i.pathname||"/",n);if(o==null)return null;let a=Hf(e);Kp(a);let l=null;for(let c=0;l==null&&c<a.length;++c){let u=ah(o);l=ih(a[c],u,r)}return l}function Hf(e,t=[],n=[],r=""){let i=(o,a,l)=>{let c={relativePath:l===void 0?o.path||"":l,caseSensitive:o.caseSensitive===!0,childrenIndex:a,route:o};c.relativePath.startsWith("/")&&(Fe(c.relativePath.startsWith(r),`Absolute route path "${c.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),c.relativePath=c.relativePath.slice(r.length));let u=tn([r,c.relativePath]),m=n.concat(c);o.children&&o.children.length>0&&(Fe(o.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${u}".`),Hf(o.children,t,m,u)),!(o.path==null&&!o.index)&&t.push({path:u,score:rh(u,o.index),routesMeta:m})};return e.forEach((o,a)=>{var l;if(o.path===""||!((l=o.path)!=null&&l.includes("?")))i(o,a);else for(let c of Yf(o.path))i(o,a,c)}),t}function Yf(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let a=Yf(r.join("/")),l=[];return l.push(...a.map(c=>c===""?o:[o,c].join("/"))),i&&l.push(...a),l.map(c=>e.startsWith("/")&&c===""?"/":c)}function Kp(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:sh(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}var Xp=/^:[\w-]+$/,Jp=3,Zp=2,eh=1,th=10,nh=-2,uu=e=>e==="*";function rh(e,t){let n=e.split("/"),r=n.length;return n.some(uu)&&(r+=nh),t&&(r+=Zp),n.filter(i=>!uu(i)).reduce((i,o)=>i+(Xp.test(o)?Jp:o===""?eh:th),r)}function sh(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function ih(e,t,n=!1){let{routesMeta:r}=e,i={},o="/",a=[];for(let l=0;l<r.length;++l){let c=r[l],u=l===r.length-1,m=o==="/"?t:t.slice(o.length)||"/",x=Hi({path:c.relativePath,caseSensitive:c.caseSensitive,end:u},m),p=c.route;if(!x&&u&&n&&!r[r.length-1].route.index&&(x=Hi({path:c.relativePath,caseSensitive:c.caseSensitive,end:!1},m)),!x)return null;Object.assign(i,x.params),a.push({params:i,pathname:tn([o,x.pathname]),pathnameBase:dh(tn([o,x.pathnameBase])),route:p}),x.pathnameBase!=="/"&&(o=tn([o,x.pathnameBase]))}return a}function Hi(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=oh(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],a=o.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((u,{paramName:m,isOptional:x},p)=>{if(m==="*"){let y=l[p]||"";a=o.slice(0,o.length-y.length).replace(/(.)\/+$/,"$1")}const w=l[p];return x&&!w?u[m]=void 0:u[m]=(w||"").replace(/%2F/g,"/"),u},{}),pathname:o,pathnameBase:a,pattern:e}}function oh(e,t=!1,n=!0){At(e==="*"||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,l,c)=>(r.push({paramName:l,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function ah(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return At(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function an(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function lh(e,t="/"){let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?Rr(e):e;return{pathname:n?n.startsWith("/")?n:ch(n,t):t,search:fh(r),hash:mh(i)}}function ch(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Ho(e,t,n,r){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function uh(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Bl(e){let t=uh(e);return t.map((n,r)=>r===t.length-1?n.pathname:n.pathnameBase)}function ql(e,t,n,r=!1){let i;typeof e=="string"?i=Rr(e):(i={...e},Fe(!i.pathname||!i.pathname.includes("?"),Ho("?","pathname","search",i)),Fe(!i.pathname||!i.pathname.includes("#"),Ho("#","pathname","hash",i)),Fe(!i.search||!i.search.includes("#"),Ho("#","search","hash",i)));let o=e===""||i.pathname==="",a=o?"/":i.pathname,l;if(a==null)l=n;else{let x=t.length-1;if(!r&&a.startsWith("..")){let p=a.split("/");for(;p[0]==="..";)p.shift(),x-=1;i.pathname=p.join("/")}l=x>=0?t[x]:"/"}let c=lh(i,l),u=a&&a!=="/"&&a.endsWith("/"),m=(o||a===".")&&n.endsWith("/");return!c.pathname.endsWith("/")&&(u||m)&&(c.pathname+="/"),c}var tn=e=>e.join("/").replace(/\/\/+/g,"/"),dh=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),fh=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,mh=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function ph(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}var Vf=["POST","PUT","PATCH","DELETE"];new Set(Vf);var hh=["GET",...Vf];new Set(hh);var Pr=d.createContext(null);Pr.displayName="DataRouter";var uo=d.createContext(null);uo.displayName="DataRouterState";d.createContext(!1);var Gf=d.createContext({isTransitioning:!1});Gf.displayName="ViewTransition";var xh=d.createContext(new Map);xh.displayName="Fetchers";var gh=d.createContext(null);gh.displayName="Await";var Ot=d.createContext(null);Ot.displayName="Navigation";var zs=d.createContext(null);zs.displayName="Location";var Rt=d.createContext({outlet:null,matches:[],isDataRoute:!1});Rt.displayName="Route";var Ul=d.createContext(null);Ul.displayName="RouteError";function vh(e,{relative:t}={}){Fe(zr(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:r}=d.useContext(Ot),{hash:i,pathname:o,search:a}=Ts(e,{relative:t}),l=o;return n!=="/"&&(l=o==="/"?n:tn([n,o])),r.createHref({pathname:l,search:a,hash:i})}function zr(){return d.useContext(zs)!=null}function $t(){return Fe(zr(),"useLocation() may be used only in the context of a <Router> component."),d.useContext(zs).location}var Kf="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Xf(e){d.useContext(Ot).static||d.useLayoutEffect(e)}function ht(){let{isDataRoute:e}=d.useContext(Rt);return e?Mh():yh()}function yh(){Fe(zr(),"useNavigate() may be used only in the context of a <Router> component.");let e=d.useContext(Pr),{basename:t,navigator:n}=d.useContext(Ot),{matches:r}=d.useContext(Rt),{pathname:i}=$t(),o=JSON.stringify(Bl(r)),a=d.useRef(!1);return Xf(()=>{a.current=!0}),d.useCallback((c,u={})=>{if(At(a.current,Kf),!a.current)return;if(typeof c=="number"){n.go(c);return}let m=ql(c,JSON.parse(o),i,u.relative==="path");e==null&&t!=="/"&&(m.pathname=m.pathname==="/"?t:tn([t,m.pathname])),(u.replace?n.replace:n.push)(m,u.state,u)},[t,n,o,i,e])}var bh=d.createContext(null);function wh(e){let t=d.useContext(Rt).outlet;return t&&d.createElement(bh.Provider,{value:e},t)}function jh(){let{matches:e}=d.useContext(Rt),t=e[e.length-1];return t?t.params:{}}function Ts(e,{relative:t}={}){let{matches:n}=d.useContext(Rt),{pathname:r}=$t(),i=JSON.stringify(Bl(n));return d.useMemo(()=>ql(e,JSON.parse(i),r,t==="path"),[e,i,r,t])}function kh(e,t){return Jf(e,t)}function Jf(e,t,n,r){var v;Fe(zr(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:i}=d.useContext(Ot),{matches:o}=d.useContext(Rt),a=o[o.length-1],l=a?a.params:{},c=a?a.pathname:"/",u=a?a.pathnameBase:"/",m=a&&a.route;{let f=m&&m.path||"";Zf(c,!m||f.endsWith("*")||f.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${c}" (under <Route path="${f}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${f}"> to <Route path="${f==="/"?"*":`${f}/*`}">.`)}let x=$t(),p;if(t){let f=typeof t=="string"?Rr(t):t;Fe(u==="/"||((v=f.pathname)==null?void 0:v.startsWith(u)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${u}" but pathname "${f.pathname}" was given in the \`location\` prop.`),p=f}else p=x;let w=p.pathname||"/",y=w;if(u!=="/"){let f=u.replace(/^\//,"").split("/");y="/"+w.replace(/^\//,"").split("/").slice(f.length).join("/")}let j=Qf(e,{pathname:y});At(m||j!=null,`No routes matched location "${p.pathname}${p.search}${p.hash}" `),At(j==null||j[j.length-1].route.element!==void 0||j[j.length-1].route.Component!==void 0||j[j.length-1].route.lazy!==void 0,`Matched leaf route at location "${p.pathname}${p.search}${p.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let C=_h(j&&j.map(f=>Object.assign({},f,{params:Object.assign({},l,f.params),pathname:tn([u,i.encodeLocation?i.encodeLocation(f.pathname).pathname:f.pathname]),pathnameBase:f.pathnameBase==="/"?u:tn([u,i.encodeLocation?i.encodeLocation(f.pathnameBase).pathname:f.pathnameBase])})),o,n,r);return t&&C?d.createElement(zs.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...p},navigationType:"POP"}},C):C}function Nh(){let e=Lh(),t=ph(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,r="rgba(200,200,200, 0.5)",i={padding:"0.5rem",backgroundColor:r},o={padding:"2px 4px",backgroundColor:r},a=null;return console.error("Error handled by React Router default ErrorBoundary:",e),a=d.createElement(d.Fragment,null,d.createElement("p",null,"💿 Hey developer 👋"),d.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",d.createElement("code",{style:o},"ErrorBoundary")," or"," ",d.createElement("code",{style:o},"errorElement")," prop on your route.")),d.createElement(d.Fragment,null,d.createElement("h2",null,"Unexpected Application Error!"),d.createElement("h3",{style:{fontStyle:"italic"}},t),n?d.createElement("pre",{style:i},n):null,a)}var Sh=d.createElement(Nh,null),Ch=class extends d.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return this.state.error!==void 0?d.createElement(Rt.Provider,{value:this.props.routeContext},d.createElement(Ul.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function Eh({routeContext:e,match:t,children:n}){let r=d.useContext(Pr);return r&&r.static&&r.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=t.route.id),d.createElement(Rt.Provider,{value:e},n)}function _h(e,t=[],n=null,r=null){if(e==null){if(!n)return null;if(n.errors)e=n.matches;else if(t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let i=e,o=n==null?void 0:n.errors;if(o!=null){let c=i.findIndex(u=>u.route.id&&(o==null?void 0:o[u.route.id])!==void 0);Fe(c>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(o).join(",")}`),i=i.slice(0,Math.min(i.length,c+1))}let a=!1,l=-1;if(n)for(let c=0;c<i.length;c++){let u=i[c];if((u.route.HydrateFallback||u.route.hydrateFallbackElement)&&(l=c),u.route.id){let{loaderData:m,errors:x}=n,p=u.route.loader&&!m.hasOwnProperty(u.route.id)&&(!x||x[u.route.id]===void 0);if(u.route.lazy||p){a=!0,l>=0?i=i.slice(0,l+1):i=[i[0]];break}}}return i.reduceRight((c,u,m)=>{let x,p=!1,w=null,y=null;n&&(x=o&&u.route.id?o[u.route.id]:void 0,w=u.route.errorElement||Sh,a&&(l<0&&m===0?(Zf("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),p=!0,y=null):l===m&&(p=!0,y=u.route.hydrateFallbackElement||null)));let j=t.concat(i.slice(0,m+1)),C=()=>{let v;return x?v=w:p?v=y:u.route.Component?v=d.createElement(u.route.Component,null):u.route.element?v=u.route.element:v=c,d.createElement(Eh,{match:u,routeContext:{outlet:c,matches:j,isDataRoute:n!=null},children:v})};return n&&(u.route.ErrorBoundary||u.route.errorElement||m===0)?d.createElement(Ch,{location:n.location,revalidation:n.revalidation,component:w,error:x,children:C(),routeContext:{outlet:null,matches:j,isDataRoute:!0}}):C()},null)}function Wl(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Rh(e){let t=d.useContext(Pr);return Fe(t,Wl(e)),t}function Ph(e){let t=d.useContext(uo);return Fe(t,Wl(e)),t}function zh(e){let t=d.useContext(Rt);return Fe(t,Wl(e)),t}function Ql(e){let t=zh(e),n=t.matches[t.matches.length-1];return Fe(n.route.id,`${e} can only be used on routes that contain a unique "id"`),n.route.id}function Th(){return Ql("useRouteId")}function Lh(){var r;let e=d.useContext(Ul),t=Ph("useRouteError"),n=Ql("useRouteError");return e!==void 0?e:(r=t.errors)==null?void 0:r[n]}function Mh(){let{router:e}=Rh("useNavigate"),t=Ql("useNavigate"),n=d.useRef(!1);return Xf(()=>{n.current=!0}),d.useCallback(async(i,o={})=>{At(n.current,Kf),n.current&&(typeof i=="number"?e.navigate(i):await e.navigate(i,{fromRouteId:t,...o}))},[e,t])}var du={};function Zf(e,t,n){!t&&!du[e]&&(du[e]=!0,At(!1,n))}d.memo(Fh);function Fh({routes:e,future:t,state:n}){return Jf(e,void 0,n,t)}function Dh({to:e,replace:t,state:n,relative:r}){Fe(zr(),"<Navigate> may be used only in the context of a <Router> component.");let{static:i}=d.useContext(Ot);At(!i,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:o}=d.useContext(Rt),{pathname:a}=$t(),l=ht(),c=ql(e,Bl(o),a,r==="path"),u=JSON.stringify(c);return d.useEffect(()=>{l(JSON.parse(u),{replace:t,state:n,relative:r})},[l,u,r,t,n]),null}function Ih(e){return wh(e.context)}function Ve(e){Fe(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Ah({basename:e="/",children:t=null,location:n,navigationType:r="POP",navigator:i,static:o=!1}){Fe(!zr(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let a=e.replace(/^\/*/,"/"),l=d.useMemo(()=>({basename:a,navigator:i,static:o,future:{}}),[a,i,o]);typeof n=="string"&&(n=Rr(n));let{pathname:c="/",search:u="",hash:m="",state:x=null,key:p="default"}=n,w=d.useMemo(()=>{let y=an(c,a);return y==null?null:{location:{pathname:y,search:u,hash:m,state:x,key:p},navigationType:r}},[a,c,u,m,x,p,r]);return At(w!=null,`<Router basename="${a}"> is not able to match the URL "${c}${u}${m}" because it does not start with the basename, so the <Router> won't render anything.`),w==null?null:d.createElement(Ot.Provider,{value:l},d.createElement(zs.Provider,{children:t,value:w}))}function Oh({children:e,location:t}){return kh(Ha(e),t)}function Ha(e,t=[]){let n=[];return d.Children.forEach(e,(r,i)=>{if(!d.isValidElement(r))return;let o=[...t,i];if(r.type===d.Fragment){n.push.apply(n,Ha(r.props.children,o));return}Fe(r.type===Ve,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Fe(!r.props.index||!r.props.children,"An index route cannot have child routes.");let a={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(a.children=Ha(r.props.children,o)),n.push(a)}),n}var vi="get",yi="application/x-www-form-urlencoded";function fo(e){return e!=null&&typeof e.tagName=="string"}function $h(e){return fo(e)&&e.tagName.toLowerCase()==="button"}function Bh(e){return fo(e)&&e.tagName.toLowerCase()==="form"}function qh(e){return fo(e)&&e.tagName.toLowerCase()==="input"}function Uh(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Wh(e,t){return e.button===0&&(!t||t==="_self")&&!Uh(e)}var Js=null;function Qh(){if(Js===null)try{new FormData(document.createElement("form"),0),Js=!1}catch{Js=!0}return Js}var Hh=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Yo(e){return e!=null&&!Hh.has(e)?(At(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${yi}"`),null):e}function Yh(e,t){let n,r,i,o,a;if(Bh(e)){let l=e.getAttribute("action");r=l?an(l,t):null,n=e.getAttribute("method")||vi,i=Yo(e.getAttribute("enctype"))||yi,o=new FormData(e)}else if($h(e)||qh(e)&&(e.type==="submit"||e.type==="image")){let l=e.form;if(l==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let c=e.getAttribute("formaction")||l.getAttribute("action");if(r=c?an(c,t):null,n=e.getAttribute("formmethod")||l.getAttribute("method")||vi,i=Yo(e.getAttribute("formenctype"))||Yo(l.getAttribute("enctype"))||yi,o=new FormData(l,e),!Qh()){let{name:u,type:m,value:x}=e;if(m==="image"){let p=u?`${u}.`:"";o.append(`${p}x`,"0"),o.append(`${p}y`,"0")}else u&&o.append(u,x)}}else{if(fo(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=vi,r=null,i=yi,a=e}return o&&i==="text/plain"&&(a=o,o=void 0),{action:r,method:n.toLowerCase(),encType:i,formData:o,body:a}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Hl(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Vh(e,t,n){let r=typeof e=="string"?new URL(e,typeof window>"u"?"server://singlefetch/":window.location.origin):e;return r.pathname==="/"?r.pathname=`_root.${n}`:t&&an(r.pathname,t)==="/"?r.pathname=`${t.replace(/\/$/,"")}/_root.${n}`:r.pathname=`${r.pathname.replace(/\/$/,"")}.${n}`,r}async function Gh(e,t){if(e.id in t)return t[e.id];try{let n=await Wf(()=>import(e.module),[]);return t[e.id]=n,n}catch(n){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Kh(e){return e!=null&&typeof e.page=="string"}function Xh(e){return e==null?!1:e.href==null?e.rel==="preload"&&typeof e.imageSrcSet=="string"&&typeof e.imageSizes=="string":typeof e.rel=="string"&&typeof e.href=="string"}async function Jh(e,t,n){let r=await Promise.all(e.map(async i=>{let o=t.routes[i.route.id];if(o){let a=await Gh(o,n);return a.links?a.links():[]}return[]}));return nx(r.flat(1).filter(Xh).filter(i=>i.rel==="stylesheet"||i.rel==="preload").map(i=>i.rel==="stylesheet"?{...i,rel:"prefetch",as:"style"}:{...i,rel:"prefetch"}))}function fu(e,t,n,r,i,o){let a=(c,u)=>n[u]?c.route.id!==n[u].route.id:!0,l=(c,u)=>{var m;return n[u].pathname!==c.pathname||((m=n[u].route.path)==null?void 0:m.endsWith("*"))&&n[u].params["*"]!==c.params["*"]};return o==="assets"?t.filter((c,u)=>a(c,u)||l(c,u)):o==="data"?t.filter((c,u)=>{var x;let m=r.routes[c.route.id];if(!m||!m.hasLoader)return!1;if(a(c,u)||l(c,u))return!0;if(c.route.shouldRevalidate){let p=c.route.shouldRevalidate({currentUrl:new URL(i.pathname+i.search+i.hash,window.origin),currentParams:((x=n[0])==null?void 0:x.params)||{},nextUrl:new URL(e,window.origin),nextParams:c.params,defaultShouldRevalidate:!0});if(typeof p=="boolean")return p}return!0}):[]}function Zh(e,t,{includeHydrateFallback:n}={}){return ex(e.map(r=>{let i=t.routes[r.route.id];if(!i)return[];let o=[i.module];return i.clientActionModule&&(o=o.concat(i.clientActionModule)),i.clientLoaderModule&&(o=o.concat(i.clientLoaderModule)),n&&i.hydrateFallbackModule&&(o=o.concat(i.hydrateFallbackModule)),i.imports&&(o=o.concat(i.imports)),o}).flat(1))}function ex(e){return[...new Set(e)]}function tx(e){let t={},n=Object.keys(e).sort();for(let r of n)t[r]=e[r];return t}function nx(e,t){let n=new Set,r=new Set(t);return e.reduce((i,o)=>{if(t&&!Kh(o)&&o.as==="script"&&o.href&&r.has(o.href))return i;let l=JSON.stringify(tx(o));return n.has(l)||(n.add(l),i.push({key:l,link:o})),i},[])}function e0(){let e=d.useContext(Pr);return Hl(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}function rx(){let e=d.useContext(uo);return Hl(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}var Yl=d.createContext(void 0);Yl.displayName="FrameworkContext";function t0(){let e=d.useContext(Yl);return Hl(e,"You must render this element inside a <HydratedRouter> element"),e}function sx(e,t){let n=d.useContext(Yl),[r,i]=d.useState(!1),[o,a]=d.useState(!1),{onFocus:l,onBlur:c,onMouseEnter:u,onMouseLeave:m,onTouchStart:x}=t,p=d.useRef(null);d.useEffect(()=>{if(e==="render"&&a(!0),e==="viewport"){let j=v=>{v.forEach(f=>{a(f.isIntersecting)})},C=new IntersectionObserver(j,{threshold:.5});return p.current&&C.observe(p.current),()=>{C.disconnect()}}},[e]),d.useEffect(()=>{if(r){let j=setTimeout(()=>{a(!0)},100);return()=>{clearTimeout(j)}}},[r]);let w=()=>{i(!0)},y=()=>{i(!1),a(!1)};return n?e!=="intent"?[o,p,{}]:[o,p,{onFocus:qr(l,w),onBlur:qr(c,y),onMouseEnter:qr(u,w),onMouseLeave:qr(m,y),onTouchStart:qr(x,w)}]:[!1,p,{}]}function qr(e,t){return n=>{e&&e(n),n.defaultPrevented||t(n)}}function ix({page:e,...t}){let{router:n}=e0(),r=d.useMemo(()=>Qf(n.routes,e,n.basename),[n.routes,e,n.basename]);return r?d.createElement(ax,{page:e,matches:r,...t}):null}function ox(e){let{manifest:t,routeModules:n}=t0(),[r,i]=d.useState([]);return d.useEffect(()=>{let o=!1;return Jh(e,t,n).then(a=>{o||i(a)}),()=>{o=!0}},[e,t,n]),r}function ax({page:e,matches:t,...n}){let r=$t(),{manifest:i,routeModules:o}=t0(),{basename:a}=e0(),{loaderData:l,matches:c}=rx(),u=d.useMemo(()=>fu(e,t,c,i,r,"data"),[e,t,c,i,r]),m=d.useMemo(()=>fu(e,t,c,i,r,"assets"),[e,t,c,i,r]),x=d.useMemo(()=>{if(e===r.pathname+r.search+r.hash)return[];let y=new Set,j=!1;if(t.forEach(v=>{var h;let f=i.routes[v.route.id];!f||!f.hasLoader||(!u.some(S=>S.route.id===v.route.id)&&v.route.id in l&&((h=o[v.route.id])!=null&&h.shouldRevalidate)||f.hasClientLoader?j=!0:y.add(v.route.id))}),y.size===0)return[];let C=Vh(e,a,"data");return j&&y.size>0&&C.searchParams.set("_routes",t.filter(v=>y.has(v.route.id)).map(v=>v.route.id).join(",")),[C.pathname+C.search]},[a,l,r,i,u,t,e,o]),p=d.useMemo(()=>Zh(m,i),[m,i]),w=ox(m);return d.createElement(d.Fragment,null,x.map(y=>d.createElement("link",{key:y,rel:"prefetch",as:"fetch",href:y,...n})),p.map(y=>d.createElement("link",{key:y,rel:"modulepreload",href:y,...n})),w.map(({key:y,link:j})=>d.createElement("link",{key:y,...j})))}function lx(...e){return t=>{e.forEach(n=>{typeof n=="function"?n(t):n!=null&&(n.current=t)})}}var n0=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{n0&&(window.__reactRouterVersion="7.7.1")}catch{}function cx({basename:e,children:t,window:n}){let r=d.useRef();r.current==null&&(r.current=Qp({window:n,v5Compat:!0}));let i=r.current,[o,a]=d.useState({action:i.action,location:i.location}),l=d.useCallback(c=>{d.startTransition(()=>a(c))},[a]);return d.useLayoutEffect(()=>i.listen(l),[i,l]),d.createElement(Ah,{basename:e,children:t,location:o.location,navigationType:o.action,navigator:i})}var r0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,s0=d.forwardRef(function({onClick:t,discover:n="render",prefetch:r="none",relative:i,reloadDocument:o,replace:a,state:l,target:c,to:u,preventScrollReset:m,viewTransition:x,...p},w){let{basename:y}=d.useContext(Ot),j=typeof u=="string"&&r0.test(u),C,v=!1;if(typeof u=="string"&&j&&(C=u,n0))try{let b=new URL(window.location.href),k=u.startsWith("//")?new URL(b.protocol+u):new URL(u),E=an(k.pathname,y);k.origin===b.origin&&E!=null?u=E+k.search+k.hash:v=!0}catch{At(!1,`<Link to="${u}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let f=vh(u,{relative:i}),[h,S,_]=sx(r,p),L=mx(u,{replace:a,state:l,target:c,preventScrollReset:m,relative:i,viewTransition:x});function N(b){t&&t(b),b.defaultPrevented||L(b)}let g=d.createElement("a",{...p,..._,href:C||f,onClick:v||o?t:N,ref:lx(w,S),target:c,"data-discover":!j&&n==="render"?"true":void 0});return h&&!j?d.createElement(d.Fragment,null,g,d.createElement(ix,{page:f})):g});s0.displayName="Link";var ux=d.forwardRef(function({"aria-current":t="page",caseSensitive:n=!1,className:r="",end:i=!1,style:o,to:a,viewTransition:l,children:c,...u},m){let x=Ts(a,{relative:u.relative}),p=$t(),w=d.useContext(uo),{navigator:y,basename:j}=d.useContext(Ot),C=w!=null&&vx(x)&&l===!0,v=y.encodeLocation?y.encodeLocation(x).pathname:x.pathname,f=p.pathname,h=w&&w.navigation&&w.navigation.location?w.navigation.location.pathname:null;n||(f=f.toLowerCase(),h=h?h.toLowerCase():null,v=v.toLowerCase()),h&&j&&(h=an(h,j)||h);const S=v!=="/"&&v.endsWith("/")?v.length-1:v.length;let _=f===v||!i&&f.startsWith(v)&&f.charAt(S)==="/",L=h!=null&&(h===v||!i&&h.startsWith(v)&&h.charAt(v.length)==="/"),N={isActive:_,isPending:L,isTransitioning:C},g=_?t:void 0,b;typeof r=="function"?b=r(N):b=[r,_?"active":null,L?"pending":null,C?"transitioning":null].filter(Boolean).join(" ");let k=typeof o=="function"?o(N):o;return d.createElement(s0,{...u,"aria-current":g,className:b,ref:m,style:k,to:a,viewTransition:l},typeof c=="function"?c(N):c)});ux.displayName="NavLink";var dx=d.forwardRef(({discover:e="render",fetcherKey:t,navigate:n,reloadDocument:r,replace:i,state:o,method:a=vi,action:l,onSubmit:c,relative:u,preventScrollReset:m,viewTransition:x,...p},w)=>{let y=xx(),j=gx(l,{relative:u}),C=a.toLowerCase()==="get"?"get":"post",v=typeof l=="string"&&r0.test(l),f=h=>{if(c&&c(h),h.defaultPrevented)return;h.preventDefault();let S=h.nativeEvent.submitter,_=(S==null?void 0:S.getAttribute("formmethod"))||a;y(S||h.currentTarget,{fetcherKey:t,method:_,navigate:n,replace:i,state:o,relative:u,preventScrollReset:m,viewTransition:x})};return d.createElement("form",{ref:w,method:C,action:j,onSubmit:r?c:f,...p,"data-discover":!v&&e==="render"?"true":void 0})});dx.displayName="Form";function fx(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function i0(e){let t=d.useContext(Pr);return Fe(t,fx(e)),t}function mx(e,{target:t,replace:n,state:r,preventScrollReset:i,relative:o,viewTransition:a}={}){let l=ht(),c=$t(),u=Ts(e,{relative:o});return d.useCallback(m=>{if(Wh(m,t)){m.preventDefault();let x=n!==void 0?n:Ss(c)===Ss(u);l(e,{replace:x,state:r,preventScrollReset:i,relative:o,viewTransition:a})}},[c,l,u,n,r,t,e,i,o,a])}var px=0,hx=()=>`__${String(++px)}__`;function xx(){let{router:e}=i0("useSubmit"),{basename:t}=d.useContext(Ot),n=Th();return d.useCallback(async(r,i={})=>{let{action:o,method:a,encType:l,formData:c,body:u}=Yh(r,t);if(i.navigate===!1){let m=i.fetcherKey||hx();await e.fetch(m,n,i.action||o,{preventScrollReset:i.preventScrollReset,formData:c,body:u,formMethod:i.method||a,formEncType:i.encType||l,flushSync:i.flushSync})}else await e.navigate(i.action||o,{preventScrollReset:i.preventScrollReset,formData:c,body:u,formMethod:i.method||a,formEncType:i.encType||l,replace:i.replace,state:i.state,fromRouteId:n,flushSync:i.flushSync,viewTransition:i.viewTransition})},[e,t,n])}function gx(e,{relative:t}={}){let{basename:n}=d.useContext(Ot),r=d.useContext(Rt);Fe(r,"useFormAction must be used inside a RouteContext");let[i]=r.matches.slice(-1),o={...Ts(e||".",{relative:t})},a=$t();if(e==null){o.search=a.search;let l=new URLSearchParams(o.search),c=l.getAll("index");if(c.some(m=>m==="")){l.delete("index"),c.filter(x=>x).forEach(x=>l.append("index",x));let m=l.toString();o.search=m?`?${m}`:""}}return(!e||e===".")&&i.route.index&&(o.search=o.search?o.search.replace(/^\?/,"?index&"):"?index"),n!=="/"&&(o.pathname=o.pathname==="/"?n:tn([n,o.pathname])),Ss(o)}function vx(e,{relative:t}={}){let n=d.useContext(Gf);Fe(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=i0("useViewTransitionState"),i=Ts(e,{relative:t});if(!n.isTransitioning)return!1;let o=an(n.currentLocation.pathname,r)||n.currentLocation.pathname,a=an(n.nextLocation.pathname,r)||n.nextLocation.pathname;return Hi(i.pathname,a)!=null||Hi(i.pathname,o)!=null}function yx({size:e=22,spinning:t=!1}){return s.jsx("div",{style:{width:e,height:e},className:"grid place-items-center",children:s.jsxs("svg",{viewBox:"0 0 100 100",className:`${t?"animate-[spin_0.8s_ease-out]":"motion-safe:animate-[spin_9s_linear_infinite]"} group-active:motion-safe:animate-[spin_1.2s_linear_infinite]`,style:{filter:"drop-shadow(0 2px 4px rgba(0,0,0,0.2))"},children:[s.jsx("path",{d:"M50,50 L50,5 A45,45 0 0,1 86.97,25.98 Z",fill:"#6366F1"}),s.jsx("path",{d:"M50,50 L86.97,25.98 A45,45 0 0,1 86.97,74.02 Z",fill:"#22C55E"}),s.jsx("path",{d:"M50,50 L86.97,74.02 A45,45 0 0,1 50,95 Z",fill:"#F59E0B"}),s.jsx("path",{d:"M50,50 L50,95 A45,45 0 0,1 13.03,74.02 Z",fill:"#EF4444"}),s.jsx("path",{d:"M50,50 L13.03,74.02 A45,45 0 0,1 13.03,25.98 Z",fill:"#3B82F6"}),s.jsx("path",{d:"M50,50 L13.03,25.98 A45,45 0 0,1 50,5 Z",fill:"#8B5CF6"}),s.jsx("circle",{cx:"50",cy:"50",r:"9",fill:"#111827",stroke:"white",strokeWidth:"2"})]})})}function bx(){const e=ht(),{pathname:t}=$t(),n=d.useRef({}),r=d.useRef(0),[i,o]=d.useState(!1),a=d.useRef({});d.useEffect(()=>{a.current={refresh:new Audio("/sounds/refresh.mp3"),tap:new Audio("/sounds/tap.mp3"),whoosh:new Audio("/sounds/whoosh.mp3")},Object.values(a.current).forEach(I=>{I.volume=.5})},[]);const l=I=>{const W=a.current[I];W&&(W.currentTime=0,W.play().catch(()=>{}))},c=I=>{if(navigator.vibrate)switch(I){case"light":navigator.vibrate(10);break;case"medium":navigator.vibrate(20);break;case"heavy":navigator.vibrate(40);break;case"double":navigator.vibrate([20,50,20]);break;case"success":navigator.vibrate([10,50,10,50,10]);break;default:navigator.vibrate(15)}};d.useEffect(()=>{if(t.startsWith("/profile/")){window.scrollTo(0,0);const I=document.querySelector("main");I&&(I.scrollTop=0)}else{const I=n.current[t];I!==void 0?window.scrollTo(0,I):window.scrollTo(0,0)}},[t]);const u=()=>{n.current[t]=window.scrollY},m=["/","/play","/profile"].includes(t),[x,p]=d.useState(!1),[w,y]=d.useState({open:!1,go:null});d.useEffect(()=>{const I=new MutationObserver(()=>{p(document.body.classList.contains("modal-open"))});return I.observe(document.body,{attributes:!0,attributeFilter:["class"]}),()=>I.disconnect()},[]);const C=x||[/^\/quiz\//,/^\/practice\//,/^\/profile\//].some(I=>I.test(t)),v=I=>I==="/"?t==="/":t.startsWith(I),f=d.useRef(0),[h,S]=d.useState(!1),[_,L]=d.useState(0),[N,g]=d.useState(!1),[b,k]=d.useState(0),E=I=>{!m||N||window.scrollY===0&&(f.current=I.touches[0].clientY)},M=I=>{if(!(!m||N)&&window.scrollY===0){const W=I.touches[0].clientY-f.current;if(W>0){S(!0);const Q=Math.min(W,120);L(Q),k(Math.min(Q/60*100,100)),W>60&&W<65&&c("light")}}},H=()=>{h&&_>60&&(g(!0),l("refresh"),c("success"),window.scrollTo({top:0,behavior:"smooth"}),setTimeout(()=>{g(!1),k(0)},1500)),S(!1),L(0)},Z=({path:I,icon:W,label:Q,emoji:R})=>{const z=v(I),[D,T]=d.useState(!1),$=()=>{u(),T(!0),setTimeout(()=>T(!1),600);const O=()=>{if(I==="/play"){o(!0),l("whoosh"),c("medium"),setTimeout(()=>{e(`/play?view=modes&reset=${Date.now()}`),o(!1)},200);return}if(z){const B=Date.now();B-r.current<500&&(window.scrollTo({top:0,behavior:"smooth"}),l("tap"),c("double")),r.current=B}else l("tap"),c("light"),e(I)};if(localStorage.getItem("qp_in_question")==="true"&&!z){y({open:!0,go:O});return}O()};return s.jsxs("button",{type:"button",onClick:$,className:`group relative flex h-14 w-20 flex-col items-center justify-center rounded-xl transition-all
          ${z?"scale-110":"scale-100 hover:scale-105"}
          ${D?"animate-bounce":""}`,"aria-current":z?"page":void 0,children:[z&&s.jsxs(s.Fragment,{children:[s.jsx("span",{className:"absolute -top-2 h-1.5 w-10 rounded-full bg-gradient-to-r from-transparent via-white to-transparent opacity-60"}),s.jsx("div",{className:"absolute inset-0 rounded-xl bg-white/10 blur-xl"})]}),s.jsx("div",{className:`leading-none text-2xl transition-transform ${z?"scale-125":""} ${I==="/play"&&i?"animate-spin":""}`,children:R||W}),s.jsx("span",{className:`mt-1 text-[10px] font-medium transition-all ${z?"text-white":"text-base-muted/80"}`,children:Q})]})};return s.jsxs("div",{className:"min-h-screen bg-base-bg text-base-text",onTouchStart:E,onTouchMove:M,onTouchEnd:H,children:[s.jsx("style",{jsx:!0,children:`
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
      `}),(h||N)&&s.jsxs("div",{className:"fixed left-1/2 z-50 flex flex-col items-center transition-all duration-300",style:{top:N?"60px":`${Math.max(20,Math.min(_-20,80))}px`,transform:"translateX(-50%) scale("+(N?1.1:1)+")"},children:[s.jsxs("div",{className:"relative mb-2",children:[s.jsxs("svg",{width:"48",height:"48",className:N?"animate-spin":"",children:[s.jsx("circle",{cx:"24",cy:"24",r:"20",fill:"none",stroke:"rgba(255,255,255,0.2)",strokeWidth:"4"}),s.jsx("circle",{cx:"24",cy:"24",r:"20",fill:"none",stroke:"url(#gradient)",strokeWidth:"4",strokeDasharray:`${b*1.26} 126`,strokeLinecap:"round",transform:"rotate(-90 24 24)"}),s.jsx("defs",{children:s.jsxs("linearGradient",{id:"gradient",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[s.jsx("stop",{offset:"0%",stopColor:"#6366F1"}),s.jsx("stop",{offset:"50%",stopColor:"#22C55E"}),s.jsx("stop",{offset:"100%",stopColor:"#F59E0B"})]})})]}),s.jsx("div",{className:"absolute inset-0 grid place-items-center",children:s.jsx("span",{className:"text-2xl",children:N?"🎉":"⬇"})})]}),s.jsx("span",{className:`text-sm font-medium text-white px-3 py-1 rounded-full bg-white/20 backdrop-blur
            ${N?"rainbow-text":""}`,children:N?"Refreshed! 🌟":_>60?"Release! 🚀":"Pull down..."}),N&&s.jsx("div",{className:"absolute inset-0 pointer-events-none",children:[...Array(6)].map((I,W)=>s.jsx("span",{className:"absolute text-2xl",style:{left:`${-30+W*15}px`,animation:"confetti 1s ease-out forwards",animationDelay:`${W*.1}s`},children:["🎊","✨","⭐","🎈","🎉","💫"][W]},W))})]}),s.jsx("main",{className:"mx-auto w-full max-w-none px-1 sm:px-3 md:px-4 overscroll-y-contain",style:{height:C?"100dvh":"calc(100dvh - (5.5rem + env(safe-area-inset-bottom)))",paddingTop:"calc(env(safe-area-inset-top) + 12px)",overflowY:"auto",transform:h&&!N?`translateY(${_*.5}px)`:void 0,transition:h||N?"transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)":void 0},children:s.jsx(Ih,{})}),w.open&&s.jsxs("div",{className:"fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center px-6",style:{animation:"fadeIn 0.2s ease-out"},children:[s.jsxs("div",{className:"w-full max-w-sm rounded-3xl bg-gradient-to-b from-base-card to-base-card/90 border border-base-border p-6 text-center shadow-2xl",style:{animation:"slideUp 0.3s ease-out"},children:[s.jsx("div",{className:"text-5xl mb-4",style:{animation:"bounce 0.6s ease-out"},children:"😟"}),s.jsx("div",{className:"text-xl font-bold mb-2 bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent",children:"Leave the game?"}),s.jsx("p",{className:"text-base-muted mb-6 text-sm",children:"You'll lose your current progress!"}),s.jsxs("div",{className:"flex gap-3",children:[s.jsx("button",{onClick:()=>{c("light"),y({open:!1,go:null})},className:"flex-1 py-3 rounded-2xl border-2 border-green-500/30 bg-green-500/10 hover:bg-green-500/20 transition-all font-semibold text-green-400",children:"Keep Playing! 🎮"}),s.jsx("button",{onClick:()=>{c("medium");const I=w.go;y({open:!1,go:null}),I==null||I()},className:"flex-1 py-3 rounded-2xl bg-gradient-to-r from-red-500/80 to-orange-500/80 text-white font-semibold hover:from-red-500 hover:to-orange-500 transition-all",children:"Leave 👋"})]})]}),s.jsx("style",{jsx:!0,children:`
            @keyframes fadeIn {
              from { opacity: 0; }
              to { opacity: 1; }
            }
            @keyframes slideUp {
              from { transform: translateY(20px); opacity: 0; }
              to { transform: translateY(0); opacity: 1; }
            }
          `})]}),!C&&s.jsxs("nav",{role:"navigation","aria-label":"Bottom navigation",className:"fixed inset-x-0 bottom-0 z-50",children:[s.jsx("div",{className:"absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0B0F1A] to-[#0B0F1A]/95 backdrop-blur-lg",style:{height:"calc(5.5rem + env(safe-area-inset-bottom))"},"aria-hidden":!0}),s.jsx("div",{className:"relative mx-auto max-w-md px-4 pb-[calc(env(safe-area-inset-bottom)+0.5rem)] pt-2",children:s.jsxs("div",{className:"relative",children:[s.jsx("div",{className:"absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-green-500/20 blur-2xl"}),s.jsxs("div",{className:"relative flex h-[72px] items-center justify-around rounded-3xl border border-white/10 bg-gradient-to-b from-base-card/95 to-base-card/80 shadow-2xl backdrop-blur-xl",children:[s.jsx(Z,{path:"/",emoji:"🏠",label:"Home"}),s.jsx(Z,{path:"/play",icon:s.jsx(yx,{size:26,spinning:i}),label:"Play"}),s.jsx(Z,{path:"/profile",emoji:"👤",label:"Profile"})]})]})})]})]})}function Yi(){return Yi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Yi.apply(null,arguments)}function wx(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function jx(e){d.useEffect(e,[])}var kx=["id","volume","playbackRate","soundEnabled","interrupt","onload"];function Zt(e,t){var n=t===void 0?{}:t,r=n.volume,i=r===void 0?1:r,o=n.playbackRate,a=o===void 0?1:o,l=n.soundEnabled,c=l===void 0?!0:l,u=n.interrupt,m=u===void 0?!1:u,x=n.onload,p=wx(n,kx),w=it.useRef(null),y=it.useRef(!1),j=it.useState(null),C=j[0],v=j[1],f=it.useState(null),h=f[0],S=f[1],_=function(){typeof x=="function"&&x.call(this),y.current&&v(this.duration()*1e3),S(this)};jx(function(){return Wf(()=>import("./howler-4e359cb9.js").then(k=>k.h),[]).then(function(k){if(!y.current){var E;w.current=(E=k.Howl)!==null&&E!==void 0?E:k.default.Howl,y.current=!0,new w.current(Yi({src:Array.isArray(e)?e:[e],volume:i,rate:a,onload:_},p))}}),function(){y.current=!1}}),it.useEffect(function(){w.current&&h&&S(new w.current(Yi({src:Array.isArray(e)?e:[e],volume:i,onload:_},p)))},[JSON.stringify(e)]),it.useEffect(function(){h&&(h.volume(i),p.sprite||h.rate(a))},[h,i,a]);var L=it.useCallback(function(k){typeof k>"u"&&(k={}),!(!h||!c&&!k.forceSoundEnabled)&&(m&&h.stop(),k.playbackRate&&h.rate(k.playbackRate),h.play(k.id))},[h,c,m]),N=it.useCallback(function(k){h&&h.stop(k)},[h]),g=it.useCallback(function(k){h&&h.pause(k)},[h]),b=[L,{sound:h,stop:N,pause:g,duration:C}];return b}var o0={exports:{}};/* @license
Papa Parse
v5.5.3
https://github.com/mholt/PapaParse
License: MIT
*/(function(e,t){((n,r)=>{e.exports=r()})(x0,function n(){var r=typeof self<"u"?self:typeof window<"u"?window:r!==void 0?r:{},i,o=!r.document&&!!r.postMessage,a=r.IS_PAPA_WORKER||!1,l={},c=0,u={};function m(g){this._handle=null,this._finished=!1,this._completed=!1,this._halted=!1,this._input=null,this._baseIndex=0,this._partialLine="",this._rowCount=0,this._start=0,this._nextChunk=null,this.isFirstChunk=!0,this._completeResults={data:[],errors:[],meta:{}},(function(b){var k=_(b);k.chunkSize=parseInt(k.chunkSize),b.step||b.chunk||(k.chunkSize=null),this._handle=new j(k),(this._handle.streamer=this)._config=k}).call(this,g),this.parseChunk=function(b,k){var E=parseInt(this._config.skipFirstNLines)||0;if(this.isFirstChunk&&0<E){let H=this._config.newline;H||(M=this._config.quoteChar||'"',H=this._handle.guessLineEndings(b,M)),b=[...b.split(H).slice(E)].join(H)}this.isFirstChunk&&N(this._config.beforeFirstChunk)&&(M=this._config.beforeFirstChunk(b))!==void 0&&(b=M),this.isFirstChunk=!1,this._halted=!1;var E=this._partialLine+b,M=(this._partialLine="",this._handle.parse(E,this._baseIndex,!this._finished));if(!this._handle.paused()&&!this._handle.aborted()){if(b=M.meta.cursor,E=(this._finished||(this._partialLine=E.substring(b-this._baseIndex),this._baseIndex=b),M&&M.data&&(this._rowCount+=M.data.length),this._finished||this._config.preview&&this._rowCount>=this._config.preview),a)r.postMessage({results:M,workerId:u.WORKER_ID,finished:E});else if(N(this._config.chunk)&&!k){if(this._config.chunk(M,this._handle),this._handle.paused()||this._handle.aborted())return void(this._halted=!0);this._completeResults=M=void 0}return this._config.step||this._config.chunk||(this._completeResults.data=this._completeResults.data.concat(M.data),this._completeResults.errors=this._completeResults.errors.concat(M.errors),this._completeResults.meta=M.meta),this._completed||!E||!N(this._config.complete)||M&&M.meta.aborted||(this._config.complete(this._completeResults,this._input),this._completed=!0),E||M&&M.meta.paused||this._nextChunk(),M}this._halted=!0},this._sendError=function(b){N(this._config.error)?this._config.error(b):a&&this._config.error&&r.postMessage({workerId:u.WORKER_ID,error:b,finished:!1})}}function x(g){var b;(g=g||{}).chunkSize||(g.chunkSize=u.RemoteChunkSize),m.call(this,g),this._nextChunk=o?function(){this._readChunk(),this._chunkLoaded()}:function(){this._readChunk()},this.stream=function(k){this._input=k,this._nextChunk()},this._readChunk=function(){if(this._finished)this._chunkLoaded();else{if(b=new XMLHttpRequest,this._config.withCredentials&&(b.withCredentials=this._config.withCredentials),o||(b.onload=L(this._chunkLoaded,this),b.onerror=L(this._chunkError,this)),b.open(this._config.downloadRequestBody?"POST":"GET",this._input,!o),this._config.downloadRequestHeaders){var k,E=this._config.downloadRequestHeaders;for(k in E)b.setRequestHeader(k,E[k])}var M;this._config.chunkSize&&(M=this._start+this._config.chunkSize-1,b.setRequestHeader("Range","bytes="+this._start+"-"+M));try{b.send(this._config.downloadRequestBody)}catch(H){this._chunkError(H.message)}o&&b.status===0&&this._chunkError()}},this._chunkLoaded=function(){b.readyState===4&&(b.status<200||400<=b.status?this._chunkError():(this._start+=this._config.chunkSize||b.responseText.length,this._finished=!this._config.chunkSize||this._start>=(k=>(k=k.getResponseHeader("Content-Range"))!==null?parseInt(k.substring(k.lastIndexOf("/")+1)):-1)(b),this.parseChunk(b.responseText)))},this._chunkError=function(k){k=b.statusText||k,this._sendError(new Error(k))}}function p(g){(g=g||{}).chunkSize||(g.chunkSize=u.LocalChunkSize),m.call(this,g);var b,k,E=typeof FileReader<"u";this.stream=function(M){this._input=M,k=M.slice||M.webkitSlice||M.mozSlice,E?((b=new FileReader).onload=L(this._chunkLoaded,this),b.onerror=L(this._chunkError,this)):b=new FileReaderSync,this._nextChunk()},this._nextChunk=function(){this._finished||this._config.preview&&!(this._rowCount<this._config.preview)||this._readChunk()},this._readChunk=function(){var M=this._input,H=(this._config.chunkSize&&(H=Math.min(this._start+this._config.chunkSize,this._input.size),M=k.call(M,this._start,H)),b.readAsText(M,this._config.encoding));E||this._chunkLoaded({target:{result:H}})},this._chunkLoaded=function(M){this._start+=this._config.chunkSize,this._finished=!this._config.chunkSize||this._start>=this._input.size,this.parseChunk(M.target.result)},this._chunkError=function(){this._sendError(b.error)}}function w(g){var b;m.call(this,g=g||{}),this.stream=function(k){return b=k,this._nextChunk()},this._nextChunk=function(){var k,E;if(!this._finished)return k=this._config.chunkSize,b=k?(E=b.substring(0,k),b.substring(k)):(E=b,""),this._finished=!b,this.parseChunk(E)}}function y(g){m.call(this,g=g||{});var b=[],k=!0,E=!1;this.pause=function(){m.prototype.pause.apply(this,arguments),this._input.pause()},this.resume=function(){m.prototype.resume.apply(this,arguments),this._input.resume()},this.stream=function(M){this._input=M,this._input.on("data",this._streamData),this._input.on("end",this._streamEnd),this._input.on("error",this._streamError)},this._checkIsFinished=function(){E&&b.length===1&&(this._finished=!0)},this._nextChunk=function(){this._checkIsFinished(),b.length?this.parseChunk(b.shift()):k=!0},this._streamData=L(function(M){try{b.push(typeof M=="string"?M:M.toString(this._config.encoding)),k&&(k=!1,this._checkIsFinished(),this.parseChunk(b.shift()))}catch(H){this._streamError(H)}},this),this._streamError=L(function(M){this._streamCleanUp(),this._sendError(M)},this),this._streamEnd=L(function(){this._streamCleanUp(),E=!0,this._streamData("")},this),this._streamCleanUp=L(function(){this._input.removeListener("data",this._streamData),this._input.removeListener("end",this._streamEnd),this._input.removeListener("error",this._streamError)},this)}function j(g){var b,k,E,M,H=Math.pow(2,53),Z=-H,I=/^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/,W=/^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/,Q=this,R=0,z=0,D=!1,T=!1,$=[],O={data:[],errors:[],meta:{}};function re(P){return g.skipEmptyLines==="greedy"?P.join("").trim()==="":P.length===1&&P[0].length===0}function B(){if(O&&E&&(ce("Delimiter","UndetectableDelimiter","Unable to auto-detect delimiting character; defaulted to '"+u.DefaultDelimiter+"'"),E=!1),g.skipEmptyLines&&(O.data=O.data.filter(function(V){return!re(V)})),ee()){let V=function(K,ue){N(g.transformHeader)&&(K=g.transformHeader(K,ue)),$.push(K)};if(O)if(Array.isArray(O.data[0])){for(var P=0;ee()&&P<O.data.length;P++)O.data[P].forEach(V);O.data.splice(0,1)}else O.data.forEach(V)}function F(V,K){for(var ue=g.header?{}:[],X=0;X<V.length;X++){var se=X,q=V[X],q=((G,J)=>(ae=>(g.dynamicTypingFunction&&g.dynamicTyping[ae]===void 0&&(g.dynamicTyping[ae]=g.dynamicTypingFunction(ae)),(g.dynamicTyping[ae]||g.dynamicTyping)===!0))(G)?J==="true"||J==="TRUE"||J!=="false"&&J!=="FALSE"&&((ae=>{if(I.test(ae)&&(ae=parseFloat(ae),Z<ae&&ae<H))return 1})(J)?parseFloat(J):W.test(J)?new Date(J):J===""?null:J):J)(se=g.header?X>=$.length?"__parsed_extra":$[X]:se,q=g.transform?g.transform(q,se):q);se==="__parsed_extra"?(ue[se]=ue[se]||[],ue[se].push(q)):ue[se]=q}return g.header&&(X>$.length?ce("FieldMismatch","TooManyFields","Too many fields: expected "+$.length+" fields but parsed "+X,z+K):X<$.length&&ce("FieldMismatch","TooFewFields","Too few fields: expected "+$.length+" fields but parsed "+X,z+K)),ue}var Y;O&&(g.header||g.dynamicTyping||g.transform)&&(Y=1,!O.data.length||Array.isArray(O.data[0])?(O.data=O.data.map(F),Y=O.data.length):O.data=F(O.data,0),g.header&&O.meta&&(O.meta.fields=$),z+=Y)}function ee(){return g.header&&$.length===0}function ce(P,F,Y,V){P={type:P,code:F,message:Y},V!==void 0&&(P.row=V),O.errors.push(P)}N(g.step)&&(M=g.step,g.step=function(P){O=P,ee()?B():(B(),O.data.length!==0&&(R+=P.data.length,g.preview&&R>g.preview?k.abort():(O.data=O.data[0],M(O,Q))))}),this.parse=function(P,F,Y){var V=g.quoteChar||'"',V=(g.newline||(g.newline=this.guessLineEndings(P,V)),E=!1,g.delimiter?N(g.delimiter)&&(g.delimiter=g.delimiter(P),O.meta.delimiter=g.delimiter):((V=((K,ue,X,se,q)=>{var G,J,ae,je;q=q||[",","	","|",";",u.RECORD_SEP,u.UNIT_SEP];for(var we=0;we<q.length;we++){for(var A,pe=q[we],xe=0,Se=0,he=0,Te=(ae=void 0,new v({comments:se,delimiter:pe,newline:ue,preview:10}).parse(K)),Le=0;Le<Te.data.length;Le++)X&&re(Te.data[Le])?he++:(A=Te.data[Le].length,Se+=A,ae===void 0?ae=A:0<A&&(xe+=Math.abs(A-ae),ae=A));0<Te.data.length&&(Se/=Te.data.length-he),(J===void 0||xe<=J)&&(je===void 0||je<Se)&&1.99<Se&&(J=xe,G=pe,je=Se)}return{successful:!!(g.delimiter=G),bestDelimiter:G}})(P,g.newline,g.skipEmptyLines,g.comments,g.delimitersToGuess)).successful?g.delimiter=V.bestDelimiter:(E=!0,g.delimiter=u.DefaultDelimiter),O.meta.delimiter=g.delimiter),_(g));return g.preview&&g.header&&V.preview++,b=P,k=new v(V),O=k.parse(b,F,Y),B(),D?{meta:{paused:!0}}:O||{meta:{paused:!1}}},this.paused=function(){return D},this.pause=function(){D=!0,k.abort(),b=N(g.chunk)?"":b.substring(k.getCharIndex())},this.resume=function(){Q.streamer._halted?(D=!1,Q.streamer.parseChunk(b,!0)):setTimeout(Q.resume,3)},this.aborted=function(){return T},this.abort=function(){T=!0,k.abort(),O.meta.aborted=!0,N(g.complete)&&g.complete(O),b=""},this.guessLineEndings=function(K,V){K=K.substring(0,1048576);var V=new RegExp(C(V)+"([^]*?)"+C(V),"gm"),Y=(K=K.replace(V,"")).split("\r"),V=K.split(`
`),K=1<V.length&&V[0].length<Y[0].length;if(Y.length===1||K)return`
`;for(var ue=0,X=0;X<Y.length;X++)Y[X][0]===`
`&&ue++;return ue>=Y.length/2?`\r
`:"\r"}}function C(g){return g.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function v(g){var b=(g=g||{}).delimiter,k=g.newline,E=g.comments,M=g.step,H=g.preview,Z=g.fastMode,I=null,W=!1,Q=g.quoteChar==null?'"':g.quoteChar,R=Q;if(g.escapeChar!==void 0&&(R=g.escapeChar),(typeof b!="string"||-1<u.BAD_DELIMITERS.indexOf(b))&&(b=","),E===b)throw new Error("Comment character same as delimiter");E===!0?E="#":(typeof E!="string"||-1<u.BAD_DELIMITERS.indexOf(E))&&(E=!1),k!==`
`&&k!=="\r"&&k!==`\r
`&&(k=`
`);var z=0,D=!1;this.parse=function(T,$,O){if(typeof T!="string")throw new Error("Input must be a string");var re=T.length,B=b.length,ee=k.length,ce=E.length,P=N(M),F=[],Y=[],V=[],K=z=0;if(!T)return xe();if(Z||Z!==!1&&T.indexOf(Q)===-1){for(var ue=T.split(k),X=0;X<ue.length;X++){if(V=ue[X],z+=V.length,X!==ue.length-1)z+=k.length;else if(O)return xe();if(!E||V.substring(0,ce)!==E){if(P){if(F=[],je(V.split(b)),Se(),D)return xe()}else je(V.split(b));if(H&&H<=X)return F=F.slice(0,H),xe(!0)}}return xe()}for(var se=T.indexOf(b,z),q=T.indexOf(k,z),G=new RegExp(C(R)+C(Q),"g"),J=T.indexOf(Q,z);;)if(T[z]===Q)for(J=z,z++;;){if((J=T.indexOf(Q,J+1))===-1)return O||Y.push({type:"Quotes",code:"MissingQuotes",message:"Quoted field unterminated",row:F.length,index:z}),A();if(J===re-1)return A(T.substring(z,J).replace(G,Q));if(Q===R&&T[J+1]===R)J++;else if(Q===R||J===0||T[J-1]!==R){se!==-1&&se<J+1&&(se=T.indexOf(b,J+1));var ae=we((q=q!==-1&&q<J+1?T.indexOf(k,J+1):q)===-1?se:Math.min(se,q));if(T.substr(J+1+ae,B)===b){V.push(T.substring(z,J).replace(G,Q)),T[z=J+1+ae+B]!==Q&&(J=T.indexOf(Q,z)),se=T.indexOf(b,z),q=T.indexOf(k,z);break}if(ae=we(q),T.substring(J+1+ae,J+1+ae+ee)===k){if(V.push(T.substring(z,J).replace(G,Q)),pe(J+1+ae+ee),se=T.indexOf(b,z),J=T.indexOf(Q,z),P&&(Se(),D))return xe();if(H&&F.length>=H)return xe(!0);break}Y.push({type:"Quotes",code:"InvalidQuotes",message:"Trailing quote on quoted field is malformed",row:F.length,index:z}),J++}}else if(E&&V.length===0&&T.substring(z,z+ce)===E){if(q===-1)return xe();z=q+ee,q=T.indexOf(k,z),se=T.indexOf(b,z)}else if(se!==-1&&(se<q||q===-1))V.push(T.substring(z,se)),z=se+B,se=T.indexOf(b,z);else{if(q===-1)break;if(V.push(T.substring(z,q)),pe(q+ee),P&&(Se(),D))return xe();if(H&&F.length>=H)return xe(!0)}return A();function je(he){F.push(he),K=z}function we(he){var Te=0;return Te=he!==-1&&(he=T.substring(J+1,he))&&he.trim()===""?he.length:Te}function A(he){return O||(he===void 0&&(he=T.substring(z)),V.push(he),z=re,je(V),P&&Se()),xe()}function pe(he){z=he,je(V),V=[],q=T.indexOf(k,z)}function xe(he){if(g.header&&!$&&F.length&&!W){var Te=F[0],Le=Object.create(null),ye=new Set(Te);let Ce=!1;for(let He=0;He<Te.length;He++){let st=Te[He];if(Le[st=N(g.transformHeader)?g.transformHeader(st,He):st]){let _e,Re=Le[st];for(;_e=st+"_"+Re,Re++,ye.has(_e););ye.add(_e),Te[He]=_e,Le[st]++,Ce=!0,(I=I===null?{}:I)[_e]=st}else Le[st]=1,Te[He]=st;ye.add(st)}Ce&&console.warn("Duplicate headers found and renamed."),W=!0}return{data:F,errors:Y,meta:{delimiter:b,linebreak:k,aborted:D,truncated:!!he,cursor:K+($||0),renamedHeaders:I}}}function Se(){M(xe()),F=[],Y=[]}},this.abort=function(){D=!0},this.getCharIndex=function(){return z}}function f(g){var b=g.data,k=l[b.workerId],E=!1;if(b.error)k.userError(b.error,b.file);else if(b.results&&b.results.data){var M={abort:function(){E=!0,h(b.workerId,{data:[],errors:[],meta:{aborted:!0}})},pause:S,resume:S};if(N(k.userStep)){for(var H=0;H<b.results.data.length&&(k.userStep({data:b.results.data[H],errors:b.results.errors,meta:b.results.meta},M),!E);H++);delete b.results}else N(k.userChunk)&&(k.userChunk(b.results,M,b.file),delete b.results)}b.finished&&!E&&h(b.workerId,b.results)}function h(g,b){var k=l[g];N(k.userComplete)&&k.userComplete(b),k.terminate(),delete l[g]}function S(){throw new Error("Not implemented.")}function _(g){if(typeof g!="object"||g===null)return g;var b,k=Array.isArray(g)?[]:{};for(b in g)k[b]=_(g[b]);return k}function L(g,b){return function(){g.apply(b,arguments)}}function N(g){return typeof g=="function"}return u.parse=function(g,b){var k=(b=b||{}).dynamicTyping||!1;if(N(k)&&(b.dynamicTypingFunction=k,k={}),b.dynamicTyping=k,b.transform=!!N(b.transform)&&b.transform,!b.worker||!u.WORKERS_SUPPORTED)return k=null,u.NODE_STREAM_INPUT,typeof g=="string"?(g=(E=>E.charCodeAt(0)!==65279?E:E.slice(1))(g),k=new(b.download?x:w)(b)):g.readable===!0&&N(g.read)&&N(g.on)?k=new y(b):(r.File&&g instanceof File||g instanceof Object)&&(k=new p(b)),k.stream(g);(k=(()=>{var E;return!!u.WORKERS_SUPPORTED&&(E=(()=>{var M=r.URL||r.webkitURL||null,H=n.toString();return u.BLOB_URL||(u.BLOB_URL=M.createObjectURL(new Blob(["var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; ","(",H,")();"],{type:"text/javascript"})))})(),(E=new r.Worker(E)).onmessage=f,E.id=c++,l[E.id]=E)})()).userStep=b.step,k.userChunk=b.chunk,k.userComplete=b.complete,k.userError=b.error,b.step=N(b.step),b.chunk=N(b.chunk),b.complete=N(b.complete),b.error=N(b.error),delete b.worker,k.postMessage({input:g,config:b,workerId:k.id})},u.unparse=function(g,b){var k=!1,E=!0,M=",",H=`\r
`,Z='"',I=Z+Z,W=!1,Q=null,R=!1,z=((()=>{if(typeof b=="object"){if(typeof b.delimiter!="string"||u.BAD_DELIMITERS.filter(function($){return b.delimiter.indexOf($)!==-1}).length||(M=b.delimiter),typeof b.quotes!="boolean"&&typeof b.quotes!="function"&&!Array.isArray(b.quotes)||(k=b.quotes),typeof b.skipEmptyLines!="boolean"&&typeof b.skipEmptyLines!="string"||(W=b.skipEmptyLines),typeof b.newline=="string"&&(H=b.newline),typeof b.quoteChar=="string"&&(Z=b.quoteChar),typeof b.header=="boolean"&&(E=b.header),Array.isArray(b.columns)){if(b.columns.length===0)throw new Error("Option columns is empty");Q=b.columns}b.escapeChar!==void 0&&(I=b.escapeChar+Z),b.escapeFormulae instanceof RegExp?R=b.escapeFormulae:typeof b.escapeFormulae=="boolean"&&b.escapeFormulae&&(R=/^[=+\-@\t\r].*$/)}})(),new RegExp(C(Z),"g"));if(typeof g=="string"&&(g=JSON.parse(g)),Array.isArray(g)){if(!g.length||Array.isArray(g[0]))return D(null,g,W);if(typeof g[0]=="object")return D(Q||Object.keys(g[0]),g,W)}else if(typeof g=="object")return typeof g.data=="string"&&(g.data=JSON.parse(g.data)),Array.isArray(g.data)&&(g.fields||(g.fields=g.meta&&g.meta.fields||Q),g.fields||(g.fields=Array.isArray(g.data[0])?g.fields:typeof g.data[0]=="object"?Object.keys(g.data[0]):[]),Array.isArray(g.data[0])||typeof g.data[0]=="object"||(g.data=[g.data])),D(g.fields||[],g.data||[],W);throw new Error("Unable to serialize unrecognized input");function D($,O,re){var B="",ee=(typeof $=="string"&&($=JSON.parse($)),typeof O=="string"&&(O=JSON.parse(O)),Array.isArray($)&&0<$.length),ce=!Array.isArray(O[0]);if(ee&&E){for(var P=0;P<$.length;P++)0<P&&(B+=M),B+=T($[P],P);0<O.length&&(B+=H)}for(var F=0;F<O.length;F++){var Y=(ee?$:O[F]).length,V=!1,K=ee?Object.keys(O[F]).length===0:O[F].length===0;if(re&&!ee&&(V=re==="greedy"?O[F].join("").trim()==="":O[F].length===1&&O[F][0].length===0),re==="greedy"&&ee){for(var ue=[],X=0;X<Y;X++){var se=ce?$[X]:X;ue.push(O[F][se])}V=ue.join("").trim()===""}if(!V){for(var q=0;q<Y;q++){0<q&&!K&&(B+=M);var G=ee&&ce?$[q]:q;B+=T(O[F][G],q)}F<O.length-1&&(!re||0<Y&&!K)&&(B+=H)}}return B}function T($,O){var re,B;return $==null?"":$.constructor===Date?JSON.stringify($).slice(1,25):(B=!1,R&&typeof $=="string"&&R.test($)&&($="'"+$,B=!0),re=$.toString().replace(z,I),(B=B||k===!0||typeof k=="function"&&k($,O)||Array.isArray(k)&&k[O]||((ee,ce)=>{for(var P=0;P<ce.length;P++)if(-1<ee.indexOf(ce[P]))return!0;return!1})(re,u.BAD_DELIMITERS)||-1<re.indexOf(M)||re.charAt(0)===" "||re.charAt(re.length-1)===" ")?Z+re+Z:re)}},u.RECORD_SEP=String.fromCharCode(30),u.UNIT_SEP=String.fromCharCode(31),u.BYTE_ORDER_MARK="\uFEFF",u.BAD_DELIMITERS=["\r",`
`,'"',u.BYTE_ORDER_MARK],u.WORKERS_SUPPORTED=!o&&!!r.Worker,u.NODE_STREAM_INPUT=1,u.LocalChunkSize=10485760,u.RemoteChunkSize=5242880,u.DefaultDelimiter=",",u.Parser=v,u.ParserHandle=j,u.NetworkStreamer=x,u.FileStreamer=p,u.StringStreamer=w,u.ReadableStreamStreamer=y,r.jQuery&&((i=r.jQuery).fn.parse=function(g){var b=g.config||{},k=[];return this.each(function(H){if(!(i(this).prop("tagName").toUpperCase()==="INPUT"&&i(this).attr("type").toLowerCase()==="file"&&r.FileReader)||!this.files||this.files.length===0)return!0;for(var Z=0;Z<this.files.length;Z++)k.push({file:this.files[Z],inputElem:this,instanceConfig:i.extend({},b)})}),E(),this;function E(){if(k.length===0)N(g.complete)&&g.complete();else{var H,Z,I,W,Q=k[0];if(N(g.before)){var R=g.before(Q.file,Q.inputElem);if(typeof R=="object"){if(R.action==="abort")return H="AbortError",Z=Q.file,I=Q.inputElem,W=R.reason,void(N(g.error)&&g.error({name:H},Z,I,W));if(R.action==="skip")return void M();typeof R.config=="object"&&(Q.instanceConfig=i.extend(Q.instanceConfig,R.config))}else if(R==="skip")return void M()}var z=Q.instanceConfig.complete;Q.instanceConfig.complete=function(D){N(z)&&z(D,Q.file,Q.inputElem),M()},u.parse(Q.file,Q.instanceConfig)}}function M(){k.splice(0,1),E()}}),a&&(r.onmessage=function(g){g=g.data,u.WORKER_ID===void 0&&g&&(u.WORKER_ID=g.workerId),typeof g.input=="string"?r.postMessage({workerId:u.WORKER_ID,results:u.parse(g.input,g.config),finished:!0}):(r.File&&g.input instanceof File||g.input instanceof Object)&&(g=u.parse(g.input,g.config))&&r.postMessage({workerId:u.WORKER_ID,results:g,finished:!0})}),(x.prototype=Object.create(m.prototype)).constructor=x,(p.prototype=Object.create(m.prototype)).constructor=p,(w.prototype=Object.create(w.prototype)).constructor=w,(y.prototype=Object.create(m.prototype)).constructor=y,u})})(o0);var Nx=o0.exports;const mo=Pu(Nx);function Vl({startRect:e,targetRef:t,count:n=12,onDone:r}){return d.useEffect(()=>{const i=t==null?void 0:t.current;if(!e||!i){r==null||r();return}const o=i.getBoundingClientRect(),a=document.createElement("div");a.style.position="fixed",a.style.inset="0",a.style.pointerEvents="none",a.style.zIndex="9999",document.body.appendChild(a);const l=o.left+o.width/2,c=o.top+o.height/2,u=e.left+e.width/2,m=e.top+e.height/2,x=200;let p=0;function w(y){const j=document.createElement("div");j.textContent="🪙",Object.assign(j.style,{position:"fixed",left:"0px",top:"0px",zIndex:"10000",pointerEvents:"none",fontSize:"22px",opacity:"1",willChange:"transform, opacity",transform:"translate(0px, 0px)"});const C=u,v=m,f=l,h=c;j.style.transform=`translate(${C}px, ${v}px) scale(1)`,a.appendChild(j),j.getBoundingClientRect(),j.style.transition=`transform ${x}ms cubic-bezier(.2,.8,.2,1), opacity ${x}ms linear`,requestAnimationFrame(()=>{j.style.transform=`translate(${f}px, ${h}px) scale(.6)`,j.style.opacity="0.1"}),setTimeout(()=>{j.remove(),p+=1,p===n&&(a.remove(),r==null||r())},x+50)}for(let y=0;y<n;y++)setTimeout(()=>w(),y*60);return()=>{try{a.remove()}catch{}}},[e,t,n,r]),null}const Ke={XP_PER_CORRECT:10,XP_PER_LEVEL:100,MAX_LEVEL:100,COINS_PER_CORRECT:5,MAX_ENERGY:5,ENERGY_REGEN_TIME:36e5,ENERGY_COST:{quiz:1,practice:0,daily:0},COMBO_MULTIPLIERS:{2:{multiplier:1.2,text:"Nice!"},3:{multiplier:1.5,text:"Great!"},5:{multiplier:2,text:"On Fire!"},10:{multiplier:3,text:"Legendary!"}},AVATARS:[{id:"wizard",emoji:"🧙",name:"Knowledge Wizard",unlocked:!0,bgColor:"from-purple-500 to-indigo-500"},{id:"knight",emoji:"⚔️",name:"Quiz Knight",unlocked:!0,bgColor:"from-blue-500 to-cyan-500"},{id:"explorer",emoji:"🗺️",name:"Fact Explorer",unlockLevel:5,unlocked:!1,bgColor:"from-green-500 to-emerald-500"},{id:"scientist",emoji:"🔬",name:"Science Master",unlockLevel:10,unlocked:!1,bgColor:"from-orange-500 to-red-500"},{id:"artist",emoji:"🎨",name:"Creative Mind",unlockLevel:15,unlocked:!1,bgColor:"from-pink-500 to-rose-500"}],STORAGE_KEYS:{PLAYER:"qp_player",GAME_STATE:"qp_game_state",ENERGY:"qp_energy",CURRENT_COMBO:"qp_combo"}},mu=e=>Math.floor(e/Ke.XP_PER_LEVEL)+1,Sx=e=>{const t=e%Ke.XP_PER_LEVEL;return{current:t,required:Ke.XP_PER_LEVEL,percentage:t/Ke.XP_PER_LEVEL*100}};function Cx({player:e,size:t="normal",showLevel:n=!0,showName:r=!0}){const i=Ke.AVATARS.find(a=>a.id===e.avatar)||Ke.AVATARS[0],o={small:"w-10 h-10 text-xl",normal:"w-14 h-14 text-2xl",large:"w-20 h-20 text-4xl"};return s.jsxs("div",{className:"flex items-center gap-3",children:[s.jsxs("div",{className:"relative",children:[s.jsx("div",{className:`${o[t]} rounded-full bg-gradient-to-br ${i.bgColor} flex items-center justify-center shadow-lg`,children:s.jsx("span",{children:i.emoji})}),n&&s.jsx("div",{className:"absolute -bottom-1 -right-1 bg-yellow-500 text-black text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center border-2 border-base-bg",children:e.level})]}),r&&s.jsxs("div",{children:[s.jsx("div",{className:"font-bold text-sm",children:e.name}),s.jsx("div",{className:"text-xs text-base-muted",children:i.name})]})]})}function Ex({current:e,required:t,level:n,animate:r=!0}){const[i,o]=d.useState(0),a=e/t*100;return d.useEffect(()=>{if(r){const l=setTimeout(()=>{o(a)},100);return()=>clearTimeout(l)}else o(a)},[a,r]),s.jsxs("div",{className:"w-full",children:[s.jsxs("div",{className:"flex justify-between items-center mb-1",children:[s.jsxs("span",{className:"text-xs font-medium",children:["Level ",n]}),s.jsxs("span",{className:"text-xs text-base-muted",children:[e,"/",t," XP"]})]}),s.jsx("div",{className:"h-2 bg-black/20 rounded-full overflow-hidden",children:s.jsx("div",{className:"h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-700 ease-out relative",style:{width:`${i}%`},children:s.jsx("div",{className:"absolute inset-0 bg-white/20 animate-pulse"})})})]})}function _x({current:e,max:t=Ke.MAX_ENERGY,regenAt:n}){const[r,i]=d.useState("");d.useEffect(()=>{if(n&&e<t){const a=()=>{const c=Date.now(),u=Math.max(0,n-c),m=Math.floor(u/6e4),x=Math.floor(u%6e4/1e3);i(`${m}:${x.toString().padStart(2,"0")}`)};a();const l=setInterval(a,1e3);return()=>clearInterval(l)}},[n,e,t]);const o=Array.from({length:t},(a,l)=>l<e);return s.jsxs("div",{className:"flex items-center gap-1",children:[s.jsx("div",{className:"flex gap-0.5",children:o.map((a,l)=>s.jsx("span",{className:`text-lg transition-all duration-300 ${a?"text-red-500 scale-110":"text-gray-600 scale-90"}`,children:a?"❤️":"🖤"},l))}),e<t&&r&&s.jsxs("span",{className:"text-xs text-base-muted ml-2",children:["+1 in ",r]})]})}const a0=[{name:"GK",slug:"general-knowledge",questions:50,icon:"🧠",color:"#FF6B6B",gradient:"from-red-500 to-pink-500"},{name:"Science",slug:"science",questions:45,icon:"🧪",color:"#4ECDC4",gradient:"from-cyan-500 to-teal-500"},{name:"Fun Facts",slug:"fun-facts",questions:30,icon:"🎉",color:"#FFD93D",gradient:"from-yellow-400 to-orange-500"},{name:"History",slug:"history",questions:42,icon:"🏺",color:"#A8E6CF",gradient:"from-green-400 to-emerald-500"},{name:"AI & Tech",slug:"artificial-intelligence",questions:28,icon:"🤖",color:"#C7B8FF",gradient:"from-purple-400 to-indigo-500"},{name:"More",slug:"more",questions:0,icon:"✨",color:"#FF8CC3",gradient:"from-pink-400 to-rose-500"}],l0=[{name:"Geography",slug:"geography",questions:38,icon:"🗺️",color:"#FACC15",gradient:"from-yellow-400 to-amber-500"},{name:"Computer",slug:"computer",questions:34,icon:"💻",color:"#3B82F6",gradient:"from-blue-400 to-blue-600"},{name:"Aptitude",slug:"aptitude",questions:36,icon:"📐",color:"#EC4899",gradient:"from-pink-500 to-rose-500"},{name:"Iconic Figures",slug:"iconic-figures",questions:26,icon:"🌟",color:"#8B5CF6",gradient:"from-purple-500 to-violet-600"}],c0=[...a0.filter(e=>e.slug!=="more"),...l0],pu=(e=new Date)=>e.toLocaleDateString("en-CA"),hu=(e,t=null)=>{try{const n=localStorage.getItem(e);return n?JSON.parse(n):t}catch{return t}},Rx=(e,t)=>localStorage.setItem(e,JSON.stringify(t));function xu(){const e=ht(),{player:t,addXP:n,addCoins:r,levelProgress:i,useEnergy:o,changeAvatar:a}=Ln(),[l]=Zt("/sounds/correct.mp3",{volume:.6}),[c]=Zt("/sounds/wrong.mp3",{volume:.6}),[u]=Zt("/sounds/coin.mp3",{volume:.75}),[m]=Zt("/sounds/levelup.mp3",{volume:.8}),x=d.useRef(t.level),p=d.useRef(null);d.useEffect(()=>{const A=()=>{};return window.addEventListener("focus",A),()=>window.removeEventListener("focus",A)},[]),d.useEffect(()=>{t.level>x.current&&(m==null||m(),x.current=t.level)},[t.level,m]);const[w,y]=d.useState(!1),[j,C]=d.useState(null),[v,f]=d.useState(!1),[h,S]=d.useState("medium"),[_,L]=d.useState(10),[N,g]=d.useState(45),[b,k]=d.useState(!1),[E,M]=d.useState(!1),[H,Z]=d.useState(null),[I,W]=d.useState(null),[Q,R]=d.useState(!1),[z,D]=d.useState(!1),[T,$]=d.useState(null),O=10,re=5,[B,ee]=d.useState(!1),[ce,P]=d.useState(!1),[F,Y]=d.useState("general-knowledge"),[V,K]=d.useState("medium"),[ue,X]=d.useState(10),[se,q]=d.useState(()=>hu("dq_daily_log",{})[pu()]===!0);d.useEffect(()=>{const A=sessionStorage.getItem("homeScrollPosition");A&&window.scrollTo(0,parseInt(A));const pe=()=>{sessionStorage.setItem("homeScrollPosition",window.scrollY.toString())};return window.addEventListener("scroll",pe),()=>window.removeEventListener("scroll",pe)},[]),d.useEffect(()=>{if(se)return;(async()=>{var pe;try{const xe=await fetch("/data/quiz_questions_bank.csv").then(Le=>Le.text()),{data:Se}=mo.parse(xe,{header:!0,skipEmptyLines:!0});if(!Se.length)throw new Error("empty");const he=Se[Math.floor(Math.random()*Se.length)],Te=[he.option1,he.option2,he.option3,he.option4].filter(Boolean);Z({category:he.category||"General",prompt:he.question,options:Te,answerIndex:["A","B","C","D"].indexOf((pe=he.answer)==null?void 0:pe.toUpperCase())||0})}catch{Z({category:"Science",prompt:"Which planet is known as the Red Planet?",options:["Earth","Mars","Jupiter","Venus"],answerIndex:1})}})()},[se]);const G=(A,pe)=>{if(I!==null)return;W(A);const xe=A===H.answerIndex;if(xe){if(l(),pe!=null&&pe.currentTarget&&p.current){const Se=pe.currentTarget.getBoundingClientRect();u(),$({startRect:Se,count:10,amount:re})}}else c();setTimeout(()=>{if(D(!0),R(!0),xe){const Se=pu();Rx("dq_daily_log",{...hu("dq_daily_log",{}),[Se]:!0}),q(!0);const he=Number(localStorage.getItem("dq_streak")||0);localStorage.setItem("dq_streak",String(he+1))}},600)},J=A=>{if(A.slug==="more"){y(!0);return}C(A),f(!0)},ae=()=>{console.log("Starting quiz with energy:",t.energy),console.log("Category:",j.slug),e(`/quiz/${j.slug}`,{state:{mode:"quiz",difficulty:h,count:_,timer:{type:"per_q",seconds:N},source:"adventure"}}),f(!1)},je=()=>{console.log("Starting practice, category:",F),e(`/quiz/${F}`,{state:{mode:"practice",difficulty:V,count:ue,timer:{type:"off",seconds:0}}}),P(!1)},we=[{icon:"🎯",label:"Quests",color:"bg-gradient-to-br from-orange-500 to-pink-500",action:()=>e("/profile/quests")},{icon:"🔥",label:`${t.bestCombo} Best`,color:"bg-gradient-to-br from-red-500 to-orange-500",action:()=>e("/profile/streaks")},{icon:"🏆",label:"Achieve",color:"bg-gradient-to-br from-blue-500 to-purple-500",action:()=>e("/profile/achievements")},{icon:"🎁",label:"Rewards",color:"bg-gradient-to-br from-green-500 to-teal-500",action:()=>e("/profile/rewards")}];return s.jsxs("div",{className:"min-h-screen bg-base-bg text-base-text",children:[s.jsx("div",{className:"fixed inset-0 -z-10 pointer-events-none",style:{background:"linear-gradient(to bottom, #0B0F1A, #111827)"}}),s.jsxs("div",{className:"relative z-10 px-4 pt-10 pb-24",children:[s.jsx("style",{jsx:!0,children:`
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
        `}),T&&s.jsx(Vl,{startRect:T.startRect,targetRef:p,count:T.count,onDone:()=>{B||(n(O),r(T.amount),ee(!0)),$(null)}}),s.jsxs("div",{className:"mb-8",children:[s.jsxs("div",{className:"flex justify-between items-start mb-4",children:[s.jsx("div",{className:"cursor-pointer hover:scale-105 transition-transform",onClick:()=>M(!0),children:s.jsx(Cx,{player:t,size:"normal",showLevel:!0,showName:!0})}),s.jsxs("div",{className:"flex flex-col gap-2",children:[s.jsxs("div",{className:"flex gap-2",children:[s.jsxs("button",{ref:p,onClick:()=>k(!0),className:"px-3 py-1.5 rounded-xl bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/30 flex items-center gap-2 hover:from-yellow-500/20 hover:to-orange-500/20 transition",children:[s.jsx("span",{className:"text-lg",children:"🪙"}),s.jsx("span",{className:"font-bold",children:t.coins})]}),s.jsx("button",{onClick:()=>e("/profile"),className:"w-10 h-10 rounded-full bg-white/5 border border-base-border grid place-items-center hover:bg-white/10 transition",children:"⚙️"})]}),s.jsx(_x,{current:t.energy,regenAt:t.energyRegenAt})]})]}),s.jsx(Ex,{current:i.current,required:i.required,level:t.level,animate:!0})]}),s.jsxs("div",{className:"relative overflow-hidden rounded-3xl p-8 mb-6 cursor-pointer transform transition-all hover:scale-[1.02]",style:{background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",boxShadow:"0 10px 40px rgba(102, 126, 234, 0.3)",animation:"pulse 3s infinite"},onClick:()=>e("/play"),children:[s.jsx("div",{className:"absolute top-[-50px] right-[-50px] w-[200px] h-[200px] rounded-full bg-white/10",style:{animation:"float 4s ease-in-out infinite"}}),s.jsx("div",{className:"absolute bottom-[-30px] left-[-30px] w-[150px] h-[150px] rounded-full bg-white/10",style:{animation:"float 4s ease-in-out infinite reverse"}}),s.jsx("h2",{className:"text-3xl font-bold mb-2",children:"🎰 Spin & Win"}),s.jsx("p",{className:"text-base opacity-90 mb-4",children:"Test your luck, win amazing prizes!"}),s.jsx("div",{className:"inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium",style:{background:"linear-gradient(90deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0.3) 100%)",backgroundSize:"200% auto",animation:"shimmer 2s linear infinite"},children:"Play Now →"})]}),s.jsx("div",{className:"grid grid-cols-4 gap-3 mb-8",children:we.map((A,pe)=>s.jsxs("button",{onClick:A.action,className:`${A.color} aspect-square rounded-2xl flex flex-col items-center justify-center gap-1 transform transition-all hover:scale-105`,children:[s.jsx("div",{className:"text-2xl",children:A.icon}),s.jsx("div",{className:"text-[10px] font-medium text-white",children:A.label})]},pe))}),!se&&H&&s.jsx("div",{className:"flip-card mb-6",children:s.jsxs("div",{className:`flip-card-inner ${z?"flipped":""}`,children:[s.jsx("div",{className:"flip-card-front",children:s.jsxs("div",{className:"rounded-3xl bg-white/5 border border-base-border p-6",children:[s.jsxs("div",{className:"flex justify-between items-center mb-4",children:[s.jsx("h3",{className:"text-lg font-bold",children:"🎯 Daily Challenge"}),s.jsxs("span",{className:"px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-xs font-medium",children:["+",re," coins +",O," XP"]})]}),s.jsx("p",{className:"text-sm mb-4 text-base-muted",children:H.prompt}),s.jsx("div",{className:"grid grid-cols-2 gap-3",children:H.options.map((A,pe)=>{const xe=pe===H.answerIndex,Se=I===pe,he=I!==null;return s.jsx("button",{onClick:Te=>G(pe,Te),disabled:I!==null,className:`p-3 rounded-xl border-2 text-sm font-medium transition-all ${he?xe?"border-green-500 bg-green-500/20":Se?"border-red-500 bg-red-500/20":"border-base-border bg-white/5":"border-base-border bg-white/5 hover:bg-white/10"} ${I!==null?"cursor-not-allowed":"cursor-pointer"}`,children:A},pe)})})]})}),s.jsx("div",{className:"flip-card-back absolute inset-0",children:s.jsxs("div",{className:"rounded-3xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/30 p-6 h-full flex flex-col items-center justify-center",children:[s.jsx("div",{className:"text-6xl mb-4",style:{animation:"float 2s ease-in-out infinite"},children:"🎉"}),s.jsx("h3",{className:"text-2xl font-bold text-green-400 mb-2",children:"Awesome!"}),s.jsxs("p",{className:"text-sm text-base-muted text-center",children:["You've earned ",re," coins & ",O," XP!"]}),s.jsx("p",{className:"text-xs text-base-muted/70 mt-2",children:"Come back tomorrow for more"})]})})]})}),se&&s.jsx("div",{className:"rounded-3xl bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/30 p-6 mb-6",children:s.jsxs("div",{className:"flex items-center gap-3",children:[s.jsx("span",{className:"text-3xl",children:"✅"}),s.jsxs("div",{children:[s.jsx("h3",{className:"font-bold",children:"Daily Challenge Complete!"}),s.jsx("p",{className:"text-sm text-base-muted",children:"Come back tomorrow for a new challenge"})]})]})}),s.jsxs("div",{className:"mb-6",children:[s.jsx("h3",{className:"text-lg font-bold mb-4",children:"Choose Your Adventure"}),s.jsx("div",{className:"grid grid-cols-3 gap-3",children:a0.map(A=>s.jsxs("button",{onClick:()=>J(A),className:`bg-gradient-to-br ${A.gradient} aspect-square rounded-2xl p-4 flex flex-col items-center justify-center gap-2 transform transition-all hover:scale-105 hover:shadow-lg relative`,children:[s.jsx("div",{className:"text-3xl",children:A.icon}),s.jsx("div",{className:"text-xs font-bold text-white text-center",children:A.name}),A.questions>0&&s.jsxs("div",{className:"text-[10px] bg-white/20 px-2 py-0.5 rounded-full",children:[A.questions," Qs"]})]},A.name))})]}),s.jsxs("button",{onClick:()=>P(!0),className:`w-full rounded-2xl p-5 flex justify-between items-center transition-all ${t.energy<10?"bg-green-500/20 border-2 border-green-500 animate-pulse":"bg-white/5 border border-base-border hover:bg-white/10"}`,children:[s.jsxs("div",{className:"flex items-center gap-4",children:[s.jsx("div",{className:"w-12 h-12 bg-gradient-to-br from-green-400 to-teal-500 rounded-xl grid place-items-center text-2xl",children:"📚"}),s.jsxs("div",{className:"text-left",children:[s.jsx("div",{className:"font-medium",children:"Practice Mode"}),s.jsx("div",{className:"text-xs text-base-muted",children:"No timer • No energy cost • Learn at your pace"})]})]}),s.jsx("div",{className:"text-xl",children:"→"})]}),E&&s.jsx("div",{className:"fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4",onClick:A=>{A.target===A.currentTarget&&M(!1)},children:s.jsxs("div",{className:"bg-base-card rounded-3xl p-6 w-full max-w-md border border-base-border max-h-[80vh] overflow-y-auto",onClick:A=>A.stopPropagation(),children:[s.jsxs("div",{className:"flex justify-between items-center mb-4",children:[s.jsx("h3",{className:"text-xl font-bold",children:"Choose Your Avatar"}),s.jsx("button",{onClick:()=>M(!1),className:"w-8 h-8 rounded-lg bg-white/5 border border-base-border grid place-items-center hover:bg-white/10 transition",children:"✕"})]}),s.jsx("div",{className:"grid grid-cols-2 gap-4",children:Ke.AVATARS.map(A=>{const pe=!t.unlockedAvatars.includes(A.id),xe=t.avatar===A.id;return s.jsxs("button",{onClick:()=>{pe||(a(A.id),M(!1))},className:`p-4 rounded-2xl border-2 transition-all ${xe?"border-brand-blue bg-brand-blue/20":pe?"border-gray-600 bg-gray-800/50 opacity-50":"border-base-border bg-white/5 hover:bg-white/10"}`,disabled:pe,children:[s.jsx("div",{className:`text-4xl mb-2 ${pe?"grayscale":""}`,children:A.emoji}),s.jsx("div",{className:"text-sm font-medium",children:A.name}),pe&&s.jsxs("div",{className:"text-xs text-gray-400 mt-1",children:["Unlock at Level ",A.unlockLevel]}),xe&&s.jsx("div",{className:"text-xs text-brand-blue mt-1",children:"Current"})]},A.id)})})]})}),v&&j&&s.jsx("div",{className:"fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4",onClick:A=>{A.target===A.currentTarget&&f(!1)},children:s.jsxs("div",{className:"bg-base-card rounded-3xl p-6 w-full max-w-md border border-base-border",onClick:A=>A.stopPropagation(),children:[s.jsxs("div",{className:"flex justify-between items-center mb-4",children:[s.jsx("h3",{className:"text-xl font-bold",children:"Quiz Mode"}),s.jsx("button",{onClick:()=>f(!1),className:"w-8 h-8 rounded-lg bg-white/5 border border-base-border grid place-items-center hover:bg-white/10 transition",children:"✕"})]}),s.jsx("div",{className:"mb-4 p-3 rounded-xl bg-blue-500/10 border border-blue-500/30",children:s.jsxs("div",{className:"flex items-center gap-3",children:[s.jsx("div",{className:"text-2xl",children:j.icon}),s.jsxs("div",{children:[s.jsxs("div",{className:"font-medium",children:["Category: ",j.name]}),s.jsxs("div",{className:"text-xs text-base-muted",children:[j.questions," questions available"]})]})]})}),s.jsxs("div",{className:"mb-4",children:[s.jsx("label",{className:"text-sm text-base-muted mb-2 block",children:"Difficulty"}),s.jsx("div",{className:"grid grid-cols-3 gap-2",children:["easy","medium","hard"].map(A=>s.jsx("button",{onClick:()=>S(A),className:`py-2 rounded-xl border ${h===A?"bg-brand-blue/30 border-brand-blue":"bg-white/5 border-base-border"}`,children:A.charAt(0).toUpperCase()+A.slice(1)},A))})]}),s.jsxs("div",{className:"mb-4",children:[s.jsx("label",{className:"text-sm text-base-muted mb-2 block",children:"Questions"}),s.jsx("div",{className:"grid grid-cols-4 gap-2",children:[5,10,20,30].map(A=>s.jsx("button",{onClick:()=>L(A),className:`py-2 rounded-xl border ${_===A?"bg-brand-blue/30 border-brand-blue":"bg-white/5 border-base-border"}`,children:A},A))})]}),s.jsxs("div",{className:"mb-6",children:[s.jsx("label",{className:"text-sm text-base-muted mb-2 block",children:"Timer (seconds per question)"}),s.jsx("input",{type:"number",value:N,onChange:A=>g(Number(A.target.value)||45),min:10,max:120,className:"w-full px-4 py-2 rounded-xl bg-white/5 border border-base-border"})]}),s.jsxs("div",{className:"flex gap-3",children:[s.jsx("button",{onClick:()=>f(!1),className:"flex-1 py-3 rounded-xl border border-base-border bg-white/5",children:"Cancel"}),s.jsx("button",{onClick:ae,className:"flex-1 py-3 rounded-xl bg-gradient-to-r from-brand-blue to-brand-purple text-white font-medium",children:"Start Quiz"})]})]})}),ce&&s.jsx("div",{className:"fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4",onClick:A=>{A.target===A.currentTarget&&P(!1)},children:s.jsxs("div",{className:"bg-base-card rounded-3xl p-6 w-full max-w-md border border-base-border max-h-[90vh] overflow-y-auto",onClick:A=>A.stopPropagation(),children:[s.jsxs("div",{className:"flex justify-between items-center mb-4",children:[s.jsx("h3",{className:"text-xl font-bold",children:"Practice Mode"}),s.jsx("button",{onClick:()=>P(!1),className:"w-8 h-8 rounded-lg bg-white/5 border border-base-border grid place-items-center hover:bg-white/10 transition",children:"✕"})]}),s.jsxs("div",{className:"mb-4",children:[s.jsx("label",{className:"text-sm text-base-muted mb-2 block",children:"Category"}),s.jsx("div",{className:"grid grid-cols-3 gap-2 max-h-[200px] overflow-y-auto",children:c0.map(A=>s.jsxs("button",{onClick:()=>Y(A.slug),className:`p-3 rounded-xl border flex flex-col items-center gap-1 ${F===A.slug?"bg-brand-blue/30 border-brand-blue":"bg-white/5 border-base-border"}`,children:[s.jsx("div",{className:"text-xl",children:A.icon}),s.jsx("div",{className:"text-[10px] text-center",children:A.name})]},A.slug))})]}),s.jsxs("div",{className:"mb-4",children:[s.jsx("label",{className:"text-sm text-base-muted mb-2 block",children:"Difficulty"}),s.jsx("div",{className:"grid grid-cols-3 gap-2",children:["easy","medium","hard"].map(A=>s.jsx("button",{onClick:()=>K(A),className:`py-2 rounded-xl border ${V===A?"bg-brand-blue/30 border-brand-blue":"bg-white/5 border-base-border"}`,children:A.charAt(0).toUpperCase()+A.slice(1)},A))})]}),s.jsxs("div",{className:"mb-6",children:[s.jsx("label",{className:"text-sm text-base-muted mb-2 block",children:"Questions"}),s.jsx("div",{className:"grid grid-cols-4 gap-2",children:[5,10,20,30].map(A=>s.jsx("button",{onClick:()=>X(A),className:`py-2 rounded-xl border ${ue===A?"bg-brand-blue/30 border-brand-blue":"bg-white/5 border-base-border"}`,children:A},A))})]}),s.jsxs("div",{className:"flex gap-3",children:[s.jsx("button",{onClick:()=>P(!1),className:"flex-1 py-3 rounded-xl border border-base-border bg-white/5",children:"Cancel"}),s.jsx("button",{onClick:je,className:"flex-1 py-3 rounded-xl bg-gradient-to-r from-brand-blue to-brand-purple text-white font-medium",children:"Start Practice"})]})]})}),w&&s.jsx("div",{className:"fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4",onClick:A=>{A.target===A.currentTarget&&y(!1)},children:s.jsxs("div",{className:"bg-base-card rounded-3xl p-6 w-full max-w-md border border-base-border",onClick:A=>A.stopPropagation(),children:[s.jsxs("div",{className:"flex justify-between items-center mb-4",children:[s.jsx("h3",{className:"text-xl font-bold",children:"More categories"}),s.jsx("button",{onClick:()=>y(!1),className:"w-8 h-8 rounded-lg bg-white/5 border border-base-border grid place-items-center hover:bg-white/10 transition",children:"✕"})]}),s.jsx("div",{className:"grid grid-cols-2 gap-3 mb-4",children:l0.map(A=>s.jsxs("button",{onClick:()=>{y(!1),J(A)},className:`bg-gradient-to-br ${A.gradient} p-4 rounded-2xl flex flex-col items-center gap-2 hover:scale-105 transition-transform relative`,children:[s.jsx("div",{className:"text-3xl",children:A.icon}),s.jsx("div",{className:"text-sm font-bold text-white",children:A.name}),s.jsxs("div",{className:"text-xs text-white/80",children:[A.questions," questions"]})]},A.name))})]})}),b&&s.jsx("div",{className:"fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4",onClick:A=>{A.target===A.currentTarget&&k(!1)},children:s.jsxs("div",{className:"bg-base-card rounded-3xl p-6 w-full max-w-md border border-base-border relative overflow-hidden",onClick:A=>A.stopPropagation(),children:[s.jsx("div",{className:"absolute inset-0 opacity-10",children:s.jsx("div",{className:"magic-gradient h-full"})}),s.jsxs("div",{className:"relative",children:[s.jsxs("div",{className:"flex items-center justify-between mb-6",children:[s.jsxs("div",{className:"flex items-center gap-3",children:[s.jsx("div",{className:"coin-3d text-5xl",style:{animation:"coinRotate 2s linear infinite, glow 2s ease-in-out infinite"},children:"🪙"}),s.jsxs("div",{children:[s.jsx("h3",{className:"text-2xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent",children:"Your Treasure"}),s.jsxs("p",{className:"text-3xl font-bold text-white mt-1",children:[t.coins," Coins"]})]})]}),s.jsx("button",{onClick:()=>k(!1),className:"w-8 h-8 rounded-lg bg-white/5 border border-base-border grid place-items-center hover:bg-white/10 transition",children:"✕"})]}),s.jsxs("div",{className:"mb-6",children:[s.jsx("h4",{className:"text-sm font-medium text-base-muted mb-3",children:"Ways to Earn"}),s.jsxs("div",{className:"space-y-3",children:[s.jsx("div",{className:"p-4 rounded-xl bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 hover:scale-[1.02] transition-transform",children:s.jsxs("div",{className:"flex items-center justify-between",children:[s.jsxs("div",{children:[s.jsxs("div",{className:"font-medium flex items-center gap-2",children:[s.jsx("span",{className:"text-2xl",children:"✅"}),"Complete Quizzes"]}),s.jsx("div",{className:"text-xs text-base-muted mt-1",children:"+5 coins per correct answer"})]}),s.jsx("div",{className:"text-green-400 font-bold",children:"+5"})]})}),s.jsx("div",{className:"p-4 rounded-xl bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 hover:scale-[1.02] transition-transform",children:s.jsxs("div",{className:"flex items-center justify-between",children:[s.jsxs("div",{children:[s.jsxs("div",{className:"font-medium flex items-center gap-2",children:[s.jsx("span",{className:"text-2xl",children:"🎯"}),"Daily Challenge"]}),s.jsx("div",{className:"text-xs text-base-muted mt-1",children:"Complete daily for bonus"})]}),s.jsx("div",{className:"text-blue-400 font-bold",children:"+5"})]})}),s.jsx("div",{className:"p-4 rounded-xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 hover:scale-[1.02] transition-transform",children:s.jsxs("div",{className:"flex items-center justify-between",children:[s.jsxs("div",{children:[s.jsxs("div",{className:"font-medium flex items-center gap-2",children:[s.jsx("span",{className:"text-2xl",children:"🎰"}),"Spin & Play"]}),s.jsx("div",{className:"text-xs text-base-muted mt-1",children:"Test your luck!"})]}),s.jsx("div",{className:"text-purple-400 font-bold",children:"+50"})]})}),s.jsx("div",{className:"p-4 rounded-xl bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/20 hover:scale-[1.02] transition-transform",children:s.jsxs("div",{className:"flex items-center justify-between",children:[s.jsxs("div",{children:[s.jsxs("div",{className:"font-medium flex items-center gap-2",children:[s.jsx("span",{className:"text-2xl",children:"🏆"}),"Achievements"]}),s.jsx("div",{className:"text-xs text-base-muted mt-1",children:"Unlock special rewards"})]}),s.jsx("div",{className:"text-orange-400 font-bold",children:"+???"})]})})]})]}),s.jsxs("div",{className:"mb-6",children:[s.jsxs("div",{className:"flex justify-between text-xs text-base-muted mb-2",children:[s.jsx("span",{children:"Next reward"}),s.jsxs("span",{children:[100-t.coins%100," coins to go"]})]}),s.jsx("div",{className:"h-2 bg-white/10 rounded-full overflow-hidden",children:s.jsx("div",{className:"h-full bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full transition-all",style:{width:`${t.coins%100}%`}})})]}),s.jsx("button",{onClick:()=>{k(!1),e("/play")},className:"w-full py-3 rounded-xl bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-bold hover:scale-[1.02] transition-transform shadow-lg",style:{boxShadow:"0 10px 30px rgba(251, 191, 36, 0.3)"},children:"Start Earning Now! 🚀"})]})]})})]})]})}var bi={linear:function(e,t,n,r){var i=n-t;return i*e/r+t},easeInQuad:function(e,t,n,r){var i=n-t;return i*(e/=r)*e+t},easeOutQuad:function(e,t,n,r){var i=n-t;return-i*(e/=r)*(e-2)+t},easeInOutQuad:function(e,t,n,r){var i=n-t;return(e/=r/2)<1?i/2*e*e+t:-i/2*(--e*(e-2)-1)+t},easeInCubic:function(e,t,n,r){var i=n-t;return i*(e/=r)*e*e+t},easeOutCubic:function(e,t,n,r){var i=n-t;return i*((e=e/r-1)*e*e+1)+t},easeInOutCubic:function(e,t,n,r){var i=n-t;return(e/=r/2)<1?i/2*e*e*e+t:i/2*((e-=2)*e*e+2)+t},easeInQuart:function(e,t,n,r){var i=n-t;return i*(e/=r)*e*e*e+t},easeOutQuart:function(e,t,n,r){var i=n-t;return-i*((e=e/r-1)*e*e*e-1)+t},easeInOutQuart:function(e,t,n,r){var i=n-t;return(e/=r/2)<1?i/2*e*e*e*e+t:-i/2*((e-=2)*e*e*e-2)+t},easeInQuint:function(e,t,n,r){var i=n-t;return i*(e/=r)*e*e*e*e+t},easeOutQuint:function(e,t,n,r){var i=n-t;return i*((e=e/r-1)*e*e*e*e+1)+t},easeInOutQuint:function(e,t,n,r){var i=n-t;return(e/=r/2)<1?i/2*e*e*e*e*e+t:i/2*((e-=2)*e*e*e*e+2)+t},easeInSine:function(e,t,n,r){var i=n-t;return-i*Math.cos(e/r*(Math.PI/2))+i+t},easeOutSine:function(e,t,n,r){var i=n-t;return i*Math.sin(e/r*(Math.PI/2))+t},easeInOutSine:function(e,t,n,r){var i=n-t;return-i/2*(Math.cos(Math.PI*e/r)-1)+t},easeInExpo:function(e,t,n,r){var i=n-t;return e==0?t:i*Math.pow(2,10*(e/r-1))+t},easeOutExpo:function(e,t,n,r){var i=n-t;return e==r?t+i:i*(-Math.pow(2,-10*e/r)+1)+t},easeInOutExpo:function(e,t,n,r){var i=n-t;return e===0?t:e===r?t+i:(e/=r/2)<1?i/2*Math.pow(2,10*(e-1))+t:i/2*(-Math.pow(2,-10*--e)+2)+t},easeInCirc:function(e,t,n,r){var i=n-t;return-i*(Math.sqrt(1-(e/=r)*e)-1)+t},easeOutCirc:function(e,t,n,r){var i=n-t;return i*Math.sqrt(1-(e=e/r-1)*e)+t},easeInOutCirc:function(e,t,n,r){var i=n-t;return(e/=r/2)<1?-i/2*(Math.sqrt(1-e*e)-1)+t:i/2*(Math.sqrt(1-(e-=2)*e)+1)+t},easeInElastic:function(e,t,n,r){var i=n-t,o,a,l;return l=1.70158,a=0,o=i,e===0?t:(e/=r)===1?t+i:(a||(a=r*.3),o<Math.abs(i)?(o=i,l=a/4):l=a/(2*Math.PI)*Math.asin(i/o),-(o*Math.pow(2,10*(e-=1))*Math.sin((e*r-l)*(2*Math.PI)/a))+t)},easeOutElastic:function(e,t,n,r){var i=n-t,o,a,l;return l=1.70158,a=0,o=i,e===0?t:(e/=r)===1?t+i:(a||(a=r*.3),o<Math.abs(i)?(o=i,l=a/4):l=a/(2*Math.PI)*Math.asin(i/o),o*Math.pow(2,-10*e)*Math.sin((e*r-l)*(2*Math.PI)/a)+i+t)},easeInOutElastic:function(e,t,n,r){var i=n-t,o,a,l;return l=1.70158,a=0,o=i,e===0?t:(e/=r/2)===2?t+i:(a||(a=r*(.3*1.5)),o<Math.abs(i)?(o=i,l=a/4):l=a/(2*Math.PI)*Math.asin(i/o),e<1?-.5*(o*Math.pow(2,10*(e-=1))*Math.sin((e*r-l)*(2*Math.PI)/a))+t:o*Math.pow(2,-10*(e-=1))*Math.sin((e*r-l)*(2*Math.PI)/a)*.5+i+t)},easeInBack:function(e,t,n,r,i){var o=n-t;return i===void 0&&(i=1.70158),o*(e/=r)*e*((i+1)*e-i)+t},easeOutBack:function(e,t,n,r,i){var o=n-t;return i===void 0&&(i=1.70158),o*((e=e/r-1)*e*((i+1)*e+i)+1)+t},easeInOutBack:function(e,t,n,r,i){var o=n-t;return i===void 0&&(i=1.70158),(e/=r/2)<1?o/2*(e*e*(((i*=1.525)+1)*e-i))+t:o/2*((e-=2)*e*(((i*=1.525)+1)*e+i)+2)+t},easeInBounce:function(e,t,n,r){var i=n-t,o;return o=bi.easeOutBounce(r-e,0,i,r),i-o+t},easeOutBounce:function(e,t,n,r){var i=n-t;return(e/=r)<1/2.75?i*(7.5625*e*e)+t:e<2/2.75?i*(7.5625*(e-=1.5/2.75)*e+.75)+t:e<2.5/2.75?i*(7.5625*(e-=2.25/2.75)*e+.9375)+t:i*(7.5625*(e-=2.625/2.75)*e+.984375)+t},easeInOutBounce:function(e,t,n,r){var i=n-t,o;return e<r/2?(o=bi.easeInBounce(e*2,0,i,r),o*.5+t):(o=bi.easeOutBounce(e*2-r,0,i,r),o*.5+i*.5+t)}},Px=bi;function zx(e){return e*Math.PI/180}function xt(e,t){return e+Math.random()*(t-e)}function Tx(e,t){return Math.floor(e+Math.random()*(t-e+1))}var as;(function(e){e[e.Circle=0]="Circle",e[e.Square=1]="Square",e[e.Strip=2]="Strip"})(as||(as={}));var hn;(function(e){e[e.Positive=1]="Positive",e[e.Negative=-1]="Negative"})(hn||(hn={}));const Lx=1e3/60;class Mx{constructor(t,n,r,i){this.getOptions=n;const{colors:o,initialVelocityX:a,initialVelocityY:l}=this.getOptions();this.context=t,this.x=r,this.y=i,this.w=xt(5,20),this.h=xt(5,20),this.radius=xt(5,10),this.vx=typeof a=="number"?xt(-a,a):xt(a.min,a.max),this.vy=typeof l=="number"?xt(-l,0):xt(l.min,l.max),this.shape=Tx(0,2),this.angle=zx(xt(0,360)),this.angularSpin=xt(-.2,.2),this.color=o[Math.floor(Math.random()*o.length)],this.rotateY=xt(0,1),this.rotationDirection=xt(0,1)?hn.Positive:hn.Negative}update(t){const{gravity:n,wind:r,friction:i,opacity:o,drawShape:a}=this.getOptions(),l=t/Lx;this.x+=this.vx*l,this.y+=this.vy*l,this.vy+=n*l,this.vx+=r*l,this.vx*=i**l,this.vy*=i**l,this.rotateY>=1&&this.rotationDirection===hn.Positive?this.rotationDirection=hn.Negative:this.rotateY<=-1&&this.rotationDirection===hn.Negative&&(this.rotationDirection=hn.Positive);const c=.1*this.rotationDirection*l;if(this.rotateY+=c,this.angle+=this.angularSpin,this.context.save(),this.context.translate(this.x,this.y),this.context.rotate(this.angle),this.context.scale(1,this.rotateY),this.context.rotate(this.angle),this.context.beginPath(),this.context.fillStyle=this.color,this.context.strokeStyle=this.color,this.context.globalAlpha=o,this.context.lineCap="round",this.context.lineWidth=2,a&&typeof a=="function")a.call(this,this.context);else switch(this.shape){case as.Circle:{this.context.beginPath(),this.context.arc(0,0,this.radius,0,2*Math.PI),this.context.fill();break}case as.Square:{this.context.fillRect(-this.w/2,-this.h/2,this.w,this.h);break}case as.Strip:{this.context.fillRect(-this.w/6,-this.h/2,this.w/3,this.h);break}}this.context.closePath(),this.context.restore()}}class Fx{constructor(t,n){this.x=0,this.y=0,this.w=0,this.h=0,this.lastNumberOfPieces=0,this.tweenProgress=0,this.tweenFrom=0,this.particles=[],this.particlesGenerated=0,this.removeParticleAt=i=>{this.particles.splice(i,1)},this.getParticle=()=>{const i=xt(this.x,this.w+this.x),o=xt(this.y,this.h+this.y);return new Mx(this.context,this.getOptions,i,o)},this.animate=i=>{const{canvas:o,context:a,particlesGenerated:l,lastNumberOfPieces:c}=this,{run:u,recycle:m,numberOfPieces:x,debug:p,tweenFunction:w,tweenDuration:y}=this.getOptions();if(!u)return!1;const j=this.particles.length,C=m?j:l;if(C<x){c!==x&&(this.tweenProgress=0,this.tweenFrom=C,this.lastNumberOfPieces=x),this.tweenProgress=Math.min(y,Math.max(0,this.tweenProgress+i));const v=w(this.tweenProgress,this.tweenFrom,x,y),f=Math.round(v-C);for(let h=0;h<f;h++)this.particles.push(this.getParticle());this.particlesGenerated+=f}p&&(a.font="12px sans-serif",a.fillStyle="#333",a.textAlign="right",a.fillText(`Particles: ${j}`,o.width-10,o.height-20));for(let v=this.particles.length-1;v>=0;v--){const f=this.particles[v];f.update(i),(f.y>o.height||f.y<-100||f.x>o.width+100||f.x<-100)&&(m&&C<=x?this.particles[v]=this.getParticle():this.removeParticleAt(v))}return j>0||C<x},this.canvas=t;const r=this.canvas.getContext("2d");if(!r)throw new Error("Could not get canvas context");this.context=r,this.getOptions=n}}const Gl={width:typeof window<"u"?window.innerWidth:300,height:typeof window<"u"?window.innerHeight:200,numberOfPieces:200,friction:.99,wind:0,gravity:.1,initialVelocityX:4,initialVelocityY:10,colors:["#f44336","#e91e63","#9c27b0","#673ab7","#3f51b5","#2196f3","#03a9f4","#00bcd4","#009688","#4CAF50","#8BC34A","#CDDC39","#FFEB3B","#FFC107","#FF9800","#FF5722","#795548"],opacity:1,debug:!1,tweenFunction:Px.easeInOutQuad,tweenDuration:5e3,recycle:!0,run:!0};class Dx{constructor(t,n){this.lastFrameTime=0,this.setOptionsWithDefaults=i=>{const o={confettiSource:{x:0,y:0,w:this.canvas.width,h:0}};this._options={...o,...Gl,...i},Object.assign(this,i.confettiSource)},this.update=(i=0)=>{const{options:{run:o,onConfettiComplete:a,frameRate:l},canvas:c,context:u}=this,m=Math.min(i-this.lastFrameTime,50);if(l&&m<1e3/l){this.rafId=requestAnimationFrame(this.update);return}this.lastFrameTime=i-(l?m%l:0),o&&(u.fillStyle="white",u.clearRect(0,0,c.width,c.height)),this.generator.animate(m)?this.rafId=requestAnimationFrame(this.update):(a&&typeof a=="function"&&this.generator.particlesGenerated>0&&a.call(this,this),this._options.run=!1)},this.reset=()=>{this.generator&&this.generator.particlesGenerated>0&&(this.generator.particlesGenerated=0,this.generator.particles=[],this.generator.lastNumberOfPieces=0)},this.stop=()=>{this.options={run:!1},this.rafId&&(cancelAnimationFrame(this.rafId),this.rafId=void 0)},this.canvas=t;const r=this.canvas.getContext("2d");if(!r)throw new Error("Could not get canvas context");this.context=r,this.generator=new Fx(this.canvas,()=>this.options),this.options=n,this.update()}get options(){return this._options}set options(t){var i,o;const n=(i=this._options)==null?void 0:i.run,r=(o=this._options)==null?void 0:o.recycle;this.setOptionsWithDefaults(t),this.generator&&(Object.assign(this.generator,this.options.confettiSource),typeof t.recycle=="boolean"&&t.recycle&&r===!1&&(this.generator.lastNumberOfPieces=this.generator.particles.length)),typeof t.run=="boolean"&&t.run&&n===!1&&this.update()}}const Ix=it.createRef();class Kl extends it.Component{constructor(t){super(t),this.canvas=it.createRef(),this.canvas=t.canvasRef||Ix}componentDidMount(){if(this.canvas.current){const t=Vo(this.props)[0];this.confetti=new Dx(this.canvas.current,t)}}componentDidUpdate(){const t=Vo(this.props)[0];this.confetti&&(this.confetti.options=t)}componentWillUnmount(){this.confetti&&this.confetti.stop(),this.confetti=void 0}render(){const[t,n]=Vo(this.props),r={zIndex:2,position:"absolute",pointerEvents:"none",top:0,left:0,bottom:0,right:0,...n.style};return s.jsx("canvas",{width:t.width,height:t.height,ref:this.canvas,...n,style:r})}}Kl.defaultProps={...Gl};Kl.displayName="ReactConfetti";function Vo(e){const t={},n={},r={},i=[...Object.keys(Gl),"confettiSource","drawShape","onConfettiComplete","frameRate"],o=["canvasRef"];for(const a in e){const l=e[a];i.includes(a)?t[a]=l:o.includes(a)?o[a]=l:r[a]=l}return[t,r,n]}const u0=it.forwardRef((e,t)=>s.jsx(Kl,{canvasRef:t,...e})),Ax=[{name:"General Knowledge",questions:50,icon:"🧠",color:"#7C3AED"},{name:"Artificial Intelligence",questions:28,icon:"🤖",color:"#10B981"},{name:"Fun facts",questions:30,icon:"🎉",color:"#EF4444"},{name:"Science",questions:45,icon:"🧪",color:"#F59E0B"},{name:"History",questions:42,icon:"🏺",color:"#2563EB"},{name:"Geography",questions:38,icon:"🗺️",color:"#FACC15"}],Mt=Ax.slice(0,6),Ht=360/Mt.length,d0={"general-knowledge":"TINA","artificial-intelligence":"ALBERT","fun-facts":"BONZO",science:"POP",history:"TITO",geography:"HECTOR"},qt={COINS:"qp_coins",XP:"qp_xp",LEVEL:"qp_level",OWNED_CHARACTERS:"owned_characters",SOUND:"play_sound_on"},un={FULL_TURNS:6,DURATION:2800,OVERSHOOT:12,SETTLE_DURATION:350},Ut={get:(e,t=null)=>{try{const n=localStorage.getItem(e);return n?JSON.parse(n):t}catch{return t}},set:(e,t)=>{try{localStorage.setItem(e,JSON.stringify(t))}catch{}}},Un=e=>e.toLowerCase().replace(/[^\w\s-]/g,"").replace(/\s+/g,"-"),gu=e=>(e%360+360)%360,Xl=e=>{try{navigator.vibrate&&navigator.vibrate(e)}catch{}},vr=(e,t=.7)=>{try{const n=new Audio(e);n.volume=t,n.play()}catch{}};function vu({onModeSelect:e,onNavigateHome:t}){return s.jsx("div",{className:"fixed inset-0 bg-base-bg text-base-text overflow-hidden",children:s.jsxs("div",{className:"h-full overflow-y-auto mx-auto max-w-md px-4 pt-[calc(env(safe-area-inset-top)+5rem)] pb-[calc(env(safe-area-inset-bottom)+5.25rem)]",children:[s.jsxs("header",{className:"flex items-center mb-8",children:[s.jsx("button",{onClick:t,className:"h-10 w-10 rounded-full border border-base-border grid place-items-center bg-white/5 hover:bg-white/10 transition",children:"←"}),s.jsx("h1",{className:"flex-1 text-center text-xl font-bold mb-12",children:"Choose a quiz mode"})]}),s.jsxs("div",{className:"space-y-8",children:[s.jsxs("button",{onClick:()=>e("classic"),className:"w-full relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-400 to-blue-500 p-8 text-left shadow-lg hover:shadow-xl transition-all active:scale-[0.98]",children:[s.jsx("div",{className:"absolute top-0 right-0 w-32 h-32 opacity-30",children:s.jsxs("svg",{viewBox:"0 0 100 100",className:"w-full h-full animate-spin",style:{animationDuration:"20s"},children:[Mt.map((n,r)=>{const i=r*Ht,o=i+Ht,a=Ht>180?1:0,l=Math.PI*i/180,c=Math.PI*o/180,u=50+40*Math.cos(l),m=50-40*Math.sin(l),x=50+40*Math.cos(c),p=50-40*Math.sin(c);return s.jsx("path",{d:`M50,50 L${u},${m} A40,40 0 ${a} 0 ${x},${p} Z`,fill:n.color,stroke:"white",strokeWidth:"0.5"},r)}),s.jsx("circle",{cx:"50",cy:"50",r:"8",fill:"white"})]})}),s.jsx("div",{className:"absolute top-4 left-8 text-3xl opacity-60",children:"🏆"}),s.jsx("div",{className:"absolute top-12 right-16 text-xl opacity-40",children:"⭐"}),s.jsx("div",{className:"absolute bottom-6 left-6 text-2xl opacity-50",children:"🎲"}),s.jsx("div",{className:"absolute bottom-4 right-12 text-3xl opacity-60",children:"🍪"}),s.jsx("div",{className:"absolute top-1/2 left-4 text-lg opacity-40",children:"🥨"}),s.jsx("h2",{className:"text-5xl font-black text-white mb-10 relative z-10 ",style:{transform:"translateX(-20px)"},children:"CLASSIC"})]}),s.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[s.jsxs("button",{disabled:!0,className:"aspect-square rounded-3xl bg-gradient-to-br from-yellow-400 to-orange-400 p-4 text-left opacity-60",children:[s.jsx("div",{className:"text-2xl mb-2",children:"💀"}),s.jsx("h4",{className:"text-lg font-black text-white",children:"SURVIVAL"})]}),s.jsxs("button",{disabled:!0,className:"aspect-square rounded-3xl bg-gradient-to-br from-red-400 to-pink-500 p-4 text-left opacity-60",children:[s.jsx("div",{className:"text-2xl mb-2",children:"💰"}),s.jsx("h4",{className:"text-lg font-black text-white",children:"TREASURE MINE"})]}),s.jsxs("button",{disabled:!0,className:"aspect-square rounded-3xl bg-gradient-to-br from-pink-500 to-purple-500 p-4 text-left opacity-60",children:[s.jsx("div",{className:"text-2xl mb-2",children:"⚔️"}),s.jsx("h4",{className:"text-lg font-black text-white",children:"SURVIVAL ARENA"})]}),s.jsxs("button",{disabled:!0,className:"aspect-square rounded-3xl bg-gradient-to-br from-blue-400 to-cyan-400 p-4 text-left opacity-60",children:[s.jsx("div",{className:"text-2xl mb-2",children:"📱"}),s.jsx("h4",{className:"text-lg font-black text-white",children:"TRIVIA VIDEO"})]})]})]})]})})}function Ox({run:e,coins:t,xp:n,level:r,ownedCharacters:i,onSpin:o,onBack:a,spinning:l,angle:c,transition:u,result:m,showCallout:x,glowColor:p,soundOn:w,setSoundOn:y,showSparkle:j,pulseIdx:C,nextProgressIdx:v,pendingProgressIdx:f,coinBurstTick:h,lastAnswerWasCorrect:S}){const _=100*r*(r-1),[L,N]=d.useState(!1),g=d.useRef(0),b=d.useRef(null),k=d.useRef(null),[E,M]=d.useState({dx:110,dy:-260});d.useEffect(()=>{if(f==null)return;N(!1);const I=setTimeout(()=>N(!0),30);return()=>clearTimeout(I)},[f]);const[H,Z]=d.useState(!1);return d.useEffect(()=>{var W,Q,R,z;if(!h||!S||h===g.current)return;g.current=h;try{const D=(Q=(W=k==null?void 0:k.current)==null?void 0:W.getBoundingClientRect)==null?void 0:Q.call(W),T=(z=(R=b==null?void 0:b.current)==null?void 0:R.getBoundingClientRect)==null?void 0:z.call(R);if(D&&T){const $=D.left+D.width/2,O=D.top+D.height/2,re=T.left+T.width/2,B=T.top+T.height/2;M({dx:re-$,dy:B-O})}}catch{}w&&vr("/sounds/coin.mp3",.7),Z(!0);const I=setTimeout(()=>Z(!1),700);return()=>clearTimeout(I)},[h,w]),s.jsx("div",{className:"fixed inset-0 bg-base-bg text-base-text overflow-hidden",children:s.jsxs("div",{className:"h-full overflow-y-auto mx-auto max-w-md px-5 pt-[calc(env(safe-area-inset-top)+3rem)] pb-[calc(env(safe-area-inset-bottom)+5.25rem)]",children:[s.jsxs("header",{className:"flex items-center justify-between mb-8",children:[s.jsx("button",{onClick:a,className:"h-10 w-10 rounded-full border border-base-border grid place-items-center bg-white/5 hover:bg-white/10 transition translate-y-[4px]",children:"←"}),s.jsxs("div",{className:"flex items-center gap-3",children:[s.jsxs("button",{className:"px-3 py-1 rounded-2xl bg-white/5 border border-base-border text-left translate-y-[4px]",children:[s.jsxs("div",{className:"text-[11px]",children:["Lvl ",r," • ",n,"/",_]}),s.jsx("div",{className:"mt-1 h-1 w-full bg-white/10 rounded",children:s.jsx("div",{className:"h-1 bg-brand-blue rounded",style:{width:`${Math.min(n/_,1)*100}%`}})})]}),s.jsxs("button",{ref:b,className:"px-3 py-1 rounded-2xl bg-white/5 border border-base-border translate-y-[4px]",children:["🪙 ",t]})]}),s.jsx("button",{onClick:()=>y(!w),className:"h-10 w-10 rounded-full border border-base-border grid place-items-center bg-white/5 hover:bg-white/10 transition translate-y-[4px]",children:s.jsx("span",{className:"text-lg",children:w?"🔊":"🔇"})})]}),i.length>0&&s.jsx("div",{className:"flex justify-center mb-6",children:s.jsx("div",{className:"flex gap-2 px-4 py-2 bg-white/10 rounded-2xl backdrop-blur border border-base-border",children:i.map(I=>{const W=Mt.find(R=>Un(R.name)===I),Q=d0[I];return s.jsxs("div",{className:"flex flex-col items-center",children:[s.jsx("div",{className:"w-8 h-8 rounded-full bg-white/20 flex items-center justify-center border border-white/30",children:s.jsx("span",{className:"text-sm",children:W==null?void 0:W.icon})}),s.jsx("span",{className:"text-[10px] text-base-muted mt-1",children:Q})]},I)})})}),s.jsx("div",{className:"flex justify-center mt-12 sm:mt-16 mb-6",children:s.jsxs("div",{className:"w-80 max-w-full",children:[s.jsx("style",{children:`
              @keyframes qp_sweep { from { transform: translateX(0); } to { transform: translateX(100%); } }
            `}),s.jsx("div",{className:"relative grid grid-cols-3 gap-1 h-3 rounded-full overflow-hidden bg-white/10 border border-white/15",children:[0,1,2].map(I=>{const W=["#FF9800","#FFC107","#cadd75ff"],Q=!!e.progress[I];return s.jsxs("div",{className:"relative h-full bg-white/10",children:[s.jsx("div",{className:"absolute inset-y-0 left-0 rounded-[6px]",style:{width:Q?I===f?L?"100%":"0%":v===I&&f==null?"0%":"100%":"0%",backgroundColor:W[I],transition:I===f?"width 1200ms ease-out":"none"}}),C===I&&s.jsx("span",{className:"absolute inset-y-0 left-0 w-full overflow-hidden pointer-events-none",children:s.jsx("span",{className:"absolute inset-y-0 left-0 w-1 rounded bg-white/80",style:{animation:"qp_sweep 1200ms ease-out forwards"}})}),j===I&&s.jsx("span",{className:"absolute right-[-2px] top-1/2 -translate-y-1/2 text-xs select-none",children:"✨"})]},I)})},e.qIndex)]})}),s.jsx("section",{className:"flex flex-col items-center mt-28 sm:mt-32 mb-10",children:s.jsxs("div",{ref:k,className:"relative w-96 h-96 rounded-full select-none",children:[p&&s.jsx("div",{className:"pointer-events-none absolute -inset-4 rounded-full",style:{boxShadow:`0 0 0 8px ${p}40, 0 0 40px 12px ${p}60`}}),s.jsx("div",{className:"absolute inset-0 rounded-full border-4 border-white/20 shadow-2xl overflow-hidden will-change-transform bg-base-card",style:{transform:`rotate(${c}deg)`,transition:u},children:s.jsxs("svg",{width:"100%",height:"100%",viewBox:"0 0 100 100",className:"block",children:[Mt.map((I,W)=>{const Q=W*Ht,R=Q+Ht,z=Ht>180?1:0,D=Math.PI*Q/180,T=Math.PI*R/180,$=50+45*Math.cos(D),O=50-45*Math.sin(D),re=50+45*Math.cos(T),B=50-45*Math.sin(T),ee=Q+Ht/2,ce=28,P=50+ce*Math.cos(ee*Math.PI/180),F=50-ce*Math.sin(ee*Math.PI/180);return s.jsxs("g",{children:[s.jsx("path",{d:`M50,50 L${$},${O} A45,45 0 ${z} 0 ${re},${B} Z`,fill:I.color,stroke:"rgba(255,255,255,0.3)",strokeWidth:"0.5"}),s.jsx("text",{x:P,y:F,fill:"white",fontSize:"8",dominantBaseline:"middle",textAnchor:"middle",className:"font-bold",children:I.icon})]},W)}),s.jsx("circle",{cx:"50",cy:"50",r:"12",fill:"white",stroke:"#ddd",strokeWidth:"1"})]})}),s.jsx("button",{onClick:o,disabled:l,className:`absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                      w-24 h-24 rounded-full bg-white text-black font-black text-lg shadow-lg transition-all ${l?"opacity-60 cursor-not-allowed scale-95":"hover:scale-105 active:scale-95"}`,children:"SPIN"}),s.jsx("div",{className:"absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-2 z-20",children:s.jsx("div",{className:"w-6 h-8 bg-white rounded-lg shadow-md flex items-start justify-center pt-1",children:s.jsx("div",{className:"w-0 h-0 border-l-[6px] border-r-[6px] border-b-[8px] border-l-transparent border-r-transparent border-b-gray-600"})})}),x&&m&&s.jsx("div",{className:"absolute left-1/2 -translate-x-1/2 -top-16 z-30",children:s.jsxs("div",{className:"px-4 py-2 rounded-2xl bg-base-card border border-base-border shadow-lg font-semibold",children:[s.jsx("span",{className:"mr-2",children:m.cat.icon}),m.cat.name]})}),H&&s.jsxs(s.Fragment,{children:[s.jsx("style",{children:`
                    @keyframes coinFly {
                      0%   { transform: translate(-50%, -50%) scale(0.9); opacity: 1; }
                      100% { transform: translate(var(--coin-dx), var(--coin-dy)) scale(0.4); opacity: 0; }
                    }
                `}),[0,1,2].map(I=>s.jsx("div",{className:"pointer-events-none absolute z-30 top-1/2 left-1/2",style:{animation:`coinFly 600ms ease-out ${I*80}ms forwards`,"--coin-dx":`${E.dx}px`,"--coin-dy":`${E.dy}px`},children:s.jsx("div",{className:"w-6 h-6 rounded-full grid place-items-center bg-yellow-400 text-black font-bold",children:"🪙"})},I))]})]})}),s.jsx("div",{className:"text-center",children:s.jsx("button",{disabled:!0,className:"text-base-muted underline opacity-60 cursor-not-allowed text-sm",children:"Party Spin (pass & play)"})})]})})}function yu({category:e,onComplete:t,isBonus:n=!1,soundOn:r=!0}){return d.useEffect(()=>{r&&vr("/sounds/flush.mp3",.8);const i=setTimeout(t,1e3);return Xl([50]),()=>clearTimeout(i)},[t,r]),n?s.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-purple-500 to-blue-600 flex flex-col items-center justify-center text-white",children:[s.jsx("h2",{className:"text-5xl font-black mb-8",children:"Bonus Question"}),s.jsx("div",{className:"w-32 h-32 bg-white/20 rounded-full flex items-center justify-center animate-pulse",children:s.jsx("span",{className:"text-6xl",children:"⭐"})})]}):s.jsx("div",{className:"min-h-screen bg-base-bg text-white flex items-center justify-center",children:s.jsxs("div",{className:"relative w-96 h-96 rounded-full flex items-center justify-center",style:{backgroundColor:e.color},children:[s.jsxs("div",{className:"absolute inset-0 opacity-10 pointer-events-none",children:[s.jsx("div",{className:"absolute top-8 left-10 w-20 h-20 bg-white/20 rounded-full"}),s.jsx("div",{className:"absolute bottom-10 right-12 w-24 h-24 bg-white/20 rounded-full"})]}),s.jsxs("div",{className:"relative z-10 text-center",children:[s.jsx("div",{className:"text-4xl font-black mb-2",children:e.name}),s.jsx("div",{className:"w-20 h-20 bg-white/20 rounded-full grid place-items-center mx-auto",children:s.jsx("span",{className:"text-4xl",children:e.icon})})]})]})})}function $x({onDone:e}){return d.useEffect(()=>{const t=setTimeout(e,1e3);return()=>clearTimeout(t)},[e]),s.jsx("div",{className:"min-h-screen flex items-center justify-center bg-green-600 text-white",children:s.jsx("h2",{className:"text-2xl font-black",children:"Whohoo!! 3 correct in a row 🎉"})})}function bu({question:e,category:t,onAnswer:n,run:r,timeLeft:i,usedLifelines:o,onUseLifeline:a,eliminatedOptions:l,audienceData:c,onBack:u,timeUp:m,onTimeUpBackToWheel:x,soundOn:p}){const[w,y]=d.useState(null),[j,C]=d.useState(!1),[v,f]=d.useState(!1),h=d.useRef(null),S=d.useRef(null),[_,L]=d.useState(null);d.useEffect(()=>{if(!j||!h.current)return;const b=h.current.getBoundingClientRect();L({x:b.left,y:b.top-300,w:b.width,h:8})},[j]);const N=b=>{if(j)return;y(b),C(!0);const k=b===e.correctIndex;Xl(k?[50,30,50]:[200]),p&&vr(k?"/sounds/correct.mp3":"/sounds/wrong.mp3",.7),setTimeout(()=>{n(k,null)},1500)},g=w===e.correctIndex;return s.jsx("div",{className:"fixed inset-0 bg-gradient-to-br from-gray-900 to-black text-white overflow-hidden",children:s.jsxs("div",{ref:S,className:"relative h-full overflow-y-auto px-5 pt-16 pb-[calc(env(safe-area-inset-bottom)+5.25rem)]",children:[s.jsx("div",{className:"mb-4",children:s.jsx("button",{onClick:()=>f(!0),className:"h-10 w-10 rounded-full border border-base-border grid place-items-center bg-white/5 hover:bg-white/10 transition",children:"←"})}),s.jsxs("div",{className:"text-center mb-6",children:[s.jsx("div",{className:`text-4xl font-black mb-2 ${i<=10?"text-red-400 animate-pulse":"text-white"}`,children:i}),s.jsx("div",{className:"w-full bg-white/20 rounded-full h-2",children:s.jsx("div",{className:`h-full rounded-full transition-all duration-1000 ${i<=10?"bg-red-400":"bg-blue-400"}`,style:{width:`${i/30*100}%`}})})]}),s.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[s.jsx("div",{className:"w-12 h-12 rounded-full flex items-center justify-center text-2xl",style:{backgroundColor:t.color},children:t.icon}),s.jsxs("div",{children:[s.jsx("div",{className:"text-lg font-bold",children:t.name}),s.jsxs("div",{className:"text-sm text-gray-400",children:["Question ",r.qIndex+1,"/3"]})]})]}),s.jsx("h2",{ref:h,className:"text-xl font-semibold mb-6 leading-relaxed",children:e.prompt}),s.jsx("div",{className:"space-y-3 mb-6",children:e.options.map((b,k)=>{const E=l.includes(k),M=w===k,H=k===e.correctIndex;let Z="bg-white/10 border-white/20",I="opacity-100";return E?I="opacity-30":j&&M?Z=H?"bg-green-500/30 border-green-400":"bg-red-500/30 border-red-400":j&&H?Z="bg-green-500/30 border-green-400":M&&(Z="bg-white/20 border-white/40"),s.jsx("button",{onClick:()=>N(k),disabled:j||E,className:`w-full p-4 rounded-xl border-2 text-left transition-all duration-300 ${Z} ${I} ${!j&&!E?"hover:bg-white/15 active:scale-98":""}`,children:s.jsxs("div",{className:"flex items-center gap-3",children:[s.jsx("div",{className:"w-8 h-8 rounded-full bg-white/20 flex items-center justify-center font-bold text-sm",children:String.fromCharCode(65+k)}),s.jsx("span",{className:"font-medium flex-1",children:b}),c&&s.jsxs("span",{className:"text-xs text-base-muted",children:[Math.round(c[k]),"%"]})]})},k)})}),!j&&s.jsxs("div",{className:"flex gap-4 mb-8",children:[s.jsx("button",{onClick:()=>a("fifty"),disabled:o.fifty,className:`flex-1 p-4 rounded-2xl border-2 font-bold transition-all ${o.fifty?"bg-gray-700 border-gray-600 text-gray-400":"bg-purple-600 border-purple-400 text-white hover:bg-purple-500 active:scale-95"}`,children:"50:50"}),s.jsx("button",{onClick:()=>a("audience"),disabled:o.audience,className:`flex-1 p-4 rounded-2xl border-2 font-bold transition-all ${o.audience?"bg-gray-700 border-gray-600 text-gray-400":"bg-blue-600 border-blue-400 text-white hover:bg-blue-500 active:scale-95"}`,children:"👥 Ask"})]}),j&&s.jsxs("div",{className:"relative text-center",children:[g&&s.jsx("div",{className:"absolute inset-0 pointer-events-none",children:s.jsx(u0,{recycle:!1,numberOfPieces:120,gravity:.9,tweenDuration:1800,confettiSource:_||{x:0,y:0,w:typeof window<"u"?window.innerWidth:320,h:1}})}),s.jsx("button",{onClick:()=>n(g,null,!0),className:"relative z-10 bg-white text-black font-black py-4 px-8 rounded-2xl text-lg hover:bg-gray-100 transition-all active:scale-95",children:"Continue"})]}),m&&s.jsx("div",{className:"fixed inset-0 z-50 bg-black/60 flex items-center justify-center px-6",children:s.jsxs("div",{className:"w-full max-w-sm rounded-2xl bg-base-card border border-base-border p-5 text-center",children:[s.jsx("div",{className:"text-lg font-bold mb-2",children:"Time’s up"}),s.jsx("p",{className:"text-base-muted mb-5",children:"You ran out of time."}),s.jsx("button",{onClick:x,className:"mx-auto w-48 py-3 rounded-xl bg-brand-blue text-white font-semibold hover:bg-brand-blue/90 transition",children:"Back to Wheel"})]})}),v&&s.jsx("div",{className:"fixed inset-0 z-50 bg-black/60 flex items-center justify-center px-6",children:s.jsxs("div",{className:"w-full max-w-sm rounded-2xl bg-base-card border border-base-border p-5 text-center",children:[s.jsx("div",{className:"text-lg font-bold mb-2",children:"Want to quit?"}),s.jsx("p",{className:"text-base-muted mb-5",children:"You’ll lose this question’s progress."}),s.jsxs("div",{className:"flex gap-3",children:[s.jsx("button",{onClick:()=>f(!1),className:"flex-1 py-3 rounded-xl border border-base-border bg-white/5 hover:bg-white/10 transition",children:"No"}),s.jsx("button",{onClick:u,className:"flex-1 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-500 transition",children:"Yes"})]})]})})]})})}function Bx({onSelect:e}){return s.jsx("div",{className:"min-h-screen bg-gradient-to-br from-purple-600 to-pink-600 text-white",children:s.jsxs("div",{className:"mx-auto max-w-md px-5 pt-16 pb-8",children:[s.jsxs("header",{className:"text-center mb-12",children:[s.jsx("div",{className:"text-6xl mb-4",children:"🏆"}),s.jsx("h1",{className:"text-4xl font-black mb-4",children:"Perfect Round!"}),s.jsx("p",{className:"text-xl opacity-90",children:"Choose a character to unlock"})]}),s.jsx("div",{className:"grid grid-cols-2 gap-6",children:Mt.map(t=>{const n=d0[Un(t.name)];return s.jsxs("button",{onClick:()=>e(Un(t.name)),className:"p-6 rounded-3xl border-2 border-white/20 bg-white/10 backdrop-blur text-center hover:bg-white/20 hover:scale-105 transition-all duration-300 active:scale-95",children:[s.jsx("div",{className:"text-4xl mb-3",children:t.icon}),s.jsx("div",{className:"font-black text-lg mb-1",children:n}),s.jsx("div",{className:"text-sm opacity-75",children:t.name})]},Un(t.name))})})]})})}function qx(){const[e,t]=d.useState("modes"),n=ht(),r=$t(),[i,o]=d.useState(()=>Ut.get(qt.COINS,0)),[a,l]=d.useState(()=>Ut.get(qt.XP,0)),[c,u]=d.useState(()=>Ut.get(qt.LEVEL,1)),[m,x]=d.useState(()=>Ut.get(qt.OWNED_CHARACTERS,[])),[p,w]=d.useState(()=>Ut.get(qt.SOUND,!0)),[y,j]=d.useState({qIndex:0,progress:[!1,!1,!1],lifelines:{fifty:!1,audience:!1}}),[C,v]=d.useState([]),[f,h]=d.useState(null),[S,_]=d.useState(null),[L,N]=d.useState(30),[g,b]=d.useState([]),[k,E]=d.useState(null),[M,H]=d.useState(null),[Z,I]=d.useState(!1),[W,Q]=d.useState(0),[R,z]=d.useState("none"),[D,T]=d.useState(!1),[$,O]=d.useState(null),[re,B]=d.useState(!1),[ee,ce]=d.useState(null),[P,F]=d.useState(-1),[Y,V]=d.useState(0),[K,ue]=d.useState(null),[X,se]=d.useState(null),[q,G]=d.useState(!1),[J,ae]=d.useState(null),[je,we]=d.useState(-1),[A,pe]=d.useState([!1,!1,!1]),[xe,Se]=d.useState(!1),[he,Te]=d.useState(!1),Le=d.useRef(null),ye=d.useRef(null),Ce=d.useRef(null),He=d.useMemo(()=>{var le;return((le=window.matchMedia)==null?void 0:le.call(window,"(prefers-reduced-motion: reduce)").matches)||!1},[]);d.useEffect(()=>{try{localStorage.setItem("qp_in_question",JSON.stringify(e==="question"))}catch{}return()=>{try{localStorage.removeItem("qp_in_question")}catch{}}},[e]),d.useEffect(()=>(st(),_e(),()=>Re()),[]),d.useEffect(()=>Ut.set(qt.COINS,i),[i]),d.useEffect(()=>Ut.set(qt.XP,a),[a]),d.useEffect(()=>Ut.set(qt.LEVEL,c),[c]),d.useEffect(()=>Ut.set(qt.OWNED_CHARACTERS,m),[m]),d.useEffect(()=>Ut.set(qt.SOUND,p),[p]),d.useEffect(()=>(e==="question"&&L>0&&!he?Le.current=setTimeout(()=>{N(le=>{const me=le-1;return me===10&&p&&vr("/sounds/tick.mp3",.8),me})},1e3):e==="question"&&L===0&&I(!0),()=>{Le.current&&clearTimeout(Le.current)}),[e,L,p,he]),d.useEffect(()=>{if(e!=="wheel"||K==null)return;F(K),p&&vr("/sounds/progress.mp3",.6),we(K);const le=setTimeout(()=>we(-1),900),me=setTimeout(()=>F(-1),900),oe=setTimeout(()=>{J&&(J==="streakFlash"?t("streakFlash"):J==="characterPicker"?t("characterPicker"):(t("modes"),Mn()),ae(null)),ue(null)},1800);return()=>{clearTimeout(le),clearTimeout(me),clearTimeout(oe)}},[e,K,J,p,xe]),d.useEffect(()=>{e!=="wheel"||!xe||(V(le=>le+1),Se(!1))},[e,xe]);const st=async()=>{try{const me=await(await fetch("/data/quiz_questions_bank.csv")).text(),{data:oe}=mo.parse(me,{header:!0,skipEmptyLines:!0,transformHeader:ie=>ie.trim().toLowerCase()}),te=oe.map((ie,ge)=>{var Ze;const de=[ie.option1,ie.option2,ie.option3,ie.option4].map(Lr=>(Lr||"").trim()).filter(Boolean);if(de.length<4)return null;let be={a:0,b:1,c:2,d:3}[(Ze=ie.answer)==null?void 0:Ze.toLowerCase()];return be===void 0&&(be=de.findIndex(Lr=>Lr.toLowerCase()===(ie.answer||"").toLowerCase())),be===-1&&(be=0),{id:ie.id||`q_${ge}`,prompt:(ie.question||"").trim(),options:de,correctIndex:be,category:(ie.category||ie.subject||"general knowledge").trim(),difficulty:(ie.difficulty||"medium").toLowerCase(),explanation:(ie.explanation||"").trim()}}).filter(Boolean);v(te)}catch(le){console.error("Failed to load questions:",le),v([])}},_e=()=>{const le=new Audio("/sounds/spin.mp3");le.loop=!0,le.volume=.6,ye.current=le},Re=()=>{if(Le.current&&clearTimeout(Le.current),Ce.current&&(clearTimeout(Ce.current),Ce.current=null),ye.current){try{ye.current.pause()}catch{}ye.current=null}},Ye=()=>{if(p&&ye.current){try{ye.current.currentTime=0,ye.current.play()}catch{}Ce.current&&clearTimeout(Ce.current),Ce.current=setTimeout(()=>{Ls()},2e3)}},Ls=()=>{if(Ce.current&&(clearTimeout(Ce.current),Ce.current=null),ye.current)try{ye.current.pause(),ye.current.currentTime=0}catch{}},Mn=()=>{j({qIndex:0,progress:[!1,!1,!1],lifelines:{fifty:!1,audience:!1}}),pe([!1,!1,!1]),h(null),_(null),H(null),b([]),E(null),I(!1),V(0)},po=()=>{if(D)return;O(null),B(!1),ce(null),T(!0),Ye();const le=Math.floor(Math.random()*Mt.length),me=Mt[le],oe=gu(W),te=le*Ht+Ht/2,ie=(Math.random()-.5)*(Ht*.3),ge=360-te+ie;let de=gu(ge-oe);const Ne=un.FULL_TURNS*360+de,be=W+Ne+un.OVERSHOOT;z(`transform ${He?1e3:un.DURATION}ms cubic-bezier(0.25, 0.46, 0.45, 0.94)`),Q(be),Xl([20,50,20]),setTimeout(()=>{z(`transform ${He?200:un.SETTLE_DURATION}ms cubic-bezier(0.68, -0.55, 0.265, 1.55)`),Q(Ze=>Ze-un.OVERSHOOT)},He?1e3:un.DURATION),setTimeout(()=>{Ls(),T(!1),O({cat:me,index:le}),_(me),ce(me.color),B(!0),setTimeout(()=>{B(!1),t("interstitial")},1500),setTimeout(()=>ce(null),1e3)},(He?1e3:un.DURATION)+(He?200:un.SETTLE_DURATION)+100)},ho=()=>{const le=C.filter(oe=>{const te=oe.category.toLowerCase(),ie=S.name.toLowerCase();return te.includes(ie)||ie.includes(te)});let me;le.length>0?me=le[Math.floor(Math.random()*le.length)]:me=C[Math.floor(Math.random()*C.length)],me?(h(me),N(30),b([]),E(null),I(!1),Te(!1),t("question")):t("wheel")},Xn=(le,me,oe=!1)=>{if(!oe){Te(!0);return}const te=y.qIndex,ie=[...y.progress];ie[te]=!0;const ge=[...A];if(ge[te]=!!le,pe(ge),j(de=>({...de,progress:ie,qIndex:de.qIndex+1})),le&&(o(de=>de+5),l(de=>de+1),Se(!0)),se(te),G(!!le),te===2){const de=ge.every(Boolean);ae(de?"streakFlash":"modes")}else ae(null);t("wheel")},xo=le=>{if(!(y.lifelines[le]||!f)){if(j(me=>({...me,lifelines:{...me.lifelines,[le]:!0}})),le==="fifty"){const oe=f.options.map((te,ie)=>ie).filter(te=>te!==f.correctIndex).slice(0,2);b(oe)}else if(le==="audience"){const me=40+Math.random()*25;let oe=100-me;const te=[0,0,0,0];te[f.correctIndex]=Math.round(me);const ie=[0,1,2,3].filter(ge=>ge!==f.correctIndex);ie.forEach((ge,de)=>{if(de===ie.length-1)te[ge]=oe;else{const Ne=Math.floor(Math.random()*oe);te[ge]=Ne,oe-=Ne}}),E(te)}}},go=le=>{H(le),t("bonusInterstitial")},vo=le=>{le&&M&&(x(me=>[...new Set([...me,M])]),p&&vr("/sounds/coin.mp3",1)),setTimeout(()=>{t("modes"),Mn()},3e3)},Ms=le=>{le==="classic"&&(Mn(),t("wheel"))},Tr=()=>{window.location.href="/",console.log("Navigate to home")},Jn=()=>{t("modes"),Mn()},yo=()=>{t("wheel")};switch(d.useEffect(()=>{if(e!=="wheel"||X==null)return;const me=setTimeout(()=>{ue(X),se(null)},q?1800:0);return()=>clearTimeout(me)},[e,X,q]),d.useEffect(()=>{const le=new URLSearchParams(r.search);(le.get("view")==="modes"||le.get("view")==="home")&&(Mn(),t("modes"),n("/play",{replace:!0}))},[r.search]),e){case"modes":return s.jsx(vu,{onModeSelect:Ms,onNavigateHome:Tr});case"wheel":return s.jsx(Ox,{run:y,coins:i,xp:a,level:c,ownedCharacters:m,onSpin:po,onBack:Jn,spinning:D,angle:W,transition:R,result:$,showCallout:re,glowColor:ee,soundOn:p,setSoundOn:w,showSparkle:P,pulseIdx:je,coinBurstTick:Y,pendingProgressIdx:K,lastAnswerWasCorrect:q,nextProgressIdx:X});case"interstitial":return s.jsx(yu,{category:S,onComplete:ho,soundOn:p});case"streakFlash":return s.jsx($x,{onDone:()=>t("bonusInterstitial")});case"question":return s.jsx(bu,{question:f,category:S,onAnswer:Xn,run:y,timeLeft:L,usedLifelines:y.lifelines,onUseLifeline:xo,eliminatedOptions:g,audienceData:k,onBack:yo,timeUp:Z,onTimeUpBackToWheel:()=>{I(!1),t("wheel")},soundOn:p});case"characterPicker":return s.jsx(Bx,{onSelect:go});case"bonusInterstitial":return s.jsx(yu,{category:Mt.find(le=>Un(le.name)===M),onComplete:()=>t("bonusQuestion"),isBonus:!0,soundOn:p});case"bonusQuestion":if(!f){const le=Mt.find(me=>Un(me.name)===M);if(le&&C.length>0){const me=C.filter(te=>{const ie=te.category.toLowerCase(),ge=le.name.toLowerCase();return ie.includes(ge)||ge.includes(ie)}),oe=me.length>0?me[Math.floor(Math.random()*me.length)]:C[Math.floor(Math.random()*C.length)];h(oe),N(30)}return s.jsx("div",{className:"min-h-screen bg-base-bg text-base-text flex items-center justify-center",children:s.jsx("div",{className:"text-lg",children:"Loading bonus question..."})})}return s.jsx(bu,{question:f,category:Mt.find(le=>Un(le.name)===M)||Mt[0],onAnswer:vo,run:{...y,lifelines:{fifty:!0,audience:!0}},timeLeft:L,usedLifelines:{fifty:!0,audience:!0},onUseLifeline:()=>{},eliminatedOptions:[],audienceData:null,onBack:()=>t("modes")});default:return s.jsx(vu,{onModeSelect:Ms,onNavigateHome:Tr})}}const Ux=({session:e,mode:t,category:n,difficulty:r,timerConfig:i,onComplete:o,onQuit:a})=>{const[l,c]=d.useState(0),[u,m]=d.useState([]),[x,p]=d.useState([]),[w,y]=d.useState([]),[j,C]=d.useState(!1),[v,f]=d.useState(null),[h,S]=d.useState(Date.now()),[_,L]=d.useState(!1),[N,g]=d.useState(!1),[b,k]=d.useState({}),[E,M]=d.useState({}),[H,Z]=d.useState([]);d.useState(!0);const[I,W]=d.useState(null),[Q,R]=d.useState([]),[z,D]=d.useState(0),[T,$]=d.useState(0),[O,re]=d.useState(!1),[B,ee]=d.useState(!1),[ce,P]=d.useState(""),[F,Y]=d.useState(!1),[V,K]=d.useState(!1),[ue,X]=d.useState(!0),[se,q]=d.useState(!1),[G,J]=d.useState(0),[ae,je]=d.useState(0),[we,A]=d.useState(0),[pe,xe]=d.useState(null),[Se,he]=d.useState(0),Te=d.useRef(null),Le=d.useRef(null),ye=t==="practice",Ce=u[l],He=oe=>{try{const te=new Audio(oe);te.volume=.6,te.play()}catch{console.log("Sound not available:",oe)}},st=[{id:1,category:"General Knowledge",difficulty:"medium",prompt:"Which element has the atomic number 1?",options:["Helium","Carbon","Hydrogen","Oxygen"],answerIndex:2,explanation:"Hydrogen is the first element on the periodic table with atomic number 1!"},{id:2,category:"General Knowledge",difficulty:"medium",prompt:"What is the largest ocean on Earth?",options:["Atlantic","Pacific","Indian","Arctic"],answerIndex:1,explanation:"The Pacific Ocean covers about one-third of Earth's surface!"},{id:3,category:"General Knowledge",difficulty:"easy",prompt:"What color do you get when you mix red and yellow?",options:["Purple","Orange","Green","Pink"],answerIndex:1,explanation:"Red and yellow make orange - like a beautiful sunset!"}],_e=e&&e.questions&&Array.isArray(e.questions)&&e.questions.length>0?e.questions:st,Re=_e[l]||_e[0]||st[0],Ye=_e.length;d.useEffect(()=>{_e.length>0&&(m(new Array(_e.length).fill(null)),p(new Array(_e.length).fill(!1)),Z(new Array(_e.length).fill(!1)),y(new Array(_e.length).fill((i==null?void 0:i.seconds)||45)))},[_e.length,i==null?void 0:i.seconds]);const Ls=()=>{if(_){P("Once per quiz"),setTimeout(()=>P(""),1e3);return}if(Ce!==null){P("Already answered"),setTimeout(()=>P(""),1e3);return}if(!Re)return;const te=[0,1,2,3].filter(ie=>ie!==Re.answerIndex).sort(()=>Math.random()-.5).slice(0,2);k({...b,[l]:te}),L(!0)},Mn=()=>{if(N){P("Once per quiz"),setTimeout(()=>P(""),1e3);return}if(Ce!==null){P("Already answered"),setTimeout(()=>P(""),1e3);return}if(!Re)return;const oe=Re.answerIndex,te=[0,0,0,0],ie=40+Math.floor(Math.random()*31);te[oe]=ie;let ge=100-ie;const de=[0,1,2,3].filter(Ne=>Ne!==oe);for(let Ne=0;Ne<de.length-1;Ne++){const be=Math.min(ge-(de.length-1-Ne),ge/2),Ze=Math.floor(Math.random()*(be+1));te[de[Ne]]=Ze,ge-=Ze}te[de[de.length-1]]=ge,M({...E,[l]:te}),g(!0)},po=d.useCallback((oe,te)=>{if(!Re||ye&&H[l]||b[l]&&b[l].includes(oe))return;const ie=[...u];ie[l]=u[l]===oe?null:oe,m(ie),S(Date.now()),ie[l]!==null&&(X(!1),clearInterval(Le.current));const ge=ie[l]===Re.answerIndex;if(ge){const de=we+1;if(A(de),D(Ne=>Ne+1),$(0),ye){J(Ze=>Ze+1);const Ne=10;je(Ze=>Ze+Ne);let be=null;if(l===0&&Q.length===0)be={emoji:"🎯",message:"Perfect start! You're a natural!"};else if(z===2)be={emoji:"🔥",message:"2 in a row! Keep it up!"};else if(z===3)be={emoji:"⚡",message:"3 streak! You're on fire!"};else if(z===5)be={emoji:"🚀",message:"5 streak! Unstoppable!"};else if(z===10)be={emoji:"👑",message:"10 streak! Legendary!"};else if(Q[Q.length-1]===!1)be={emoji:"💪",message:"Great recovery! Back on track!"};else if(l===Math.floor(Ye*.25)-1)be={emoji:"🎬",message:"25% done! Looking good!"};else if(l===Math.floor(Ye*.5)-1)be={emoji:"⭐",message:"Halfway there! Keep going!"};else if(l===Math.floor(Ye*.75)-1)be={emoji:"🏁",message:"Almost done! Final push!"};else{const Ze=[{emoji:"✨",message:"Excellent!"},{emoji:"🎉",message:"Well done!"},{emoji:"💯",message:"Perfect!"},{emoji:"🌟",message:"Brilliant!"}];be=Ze[Math.floor(Math.random()*Ze.length)]}setTimeout(()=>{W(be),setTimeout(()=>W(null),3e3)},3e3),He("/sounds/correct.mp3"),setTimeout(()=>He("/sounds/coin.mp3"),500),K(!0),setTimeout(()=>K(!1),2e3),xe({type:"correct",stars:1,coins:10}),setTimeout(()=>xe(null),2e3)}}else if(ie[l]!==null&&(A(0),D(0),$(de=>de+1),ye)){let de=null;if(l===0&&Q.length===0)de={emoji:"💡",message:"No worries! Let's learn together!"};else if(z>=3)de={emoji:"💫",message:"Good run! Keep trying!"};else if(T===2)de={emoji:"🤗",message:"It's okay! Take your time!"};else if(T>=3)de={emoji:"💪",message:"Don't give up! You've got this!"};else{const Ne=[{emoji:"🤔",message:"Almost there!"},{emoji:"💭",message:"Good try!"},{emoji:"🎯",message:"Next one!"}];de=Ne[Math.floor(Math.random()*Ne.length)]}setTimeout(()=>{W(de),setTimeout(()=>W(null),3e3)},1e3),He("/sounds/wrong.mp3")}if(R(de=>[...de.slice(-2),ge]),ie[l]!==null&&x[l]){const de=[...x];de[l]=!1,p(de)}ye&&ie[l]!==null&&(Y(!0),Z(de=>{const Ne=[...de];return Ne[l]=!0,Ne})),!ye&&ie[l]!==null&&(clearTimeout(Te.current),Te.current=setTimeout(()=>{l<Ye-1?Xn():(re(!0),C(!0))},5e3))},[Re,ye,H,l,u,x,Ye,we,b]),ho=()=>{S(Date.now()),l>0&&(clearInterval(Le.current),X(!1),c(oe=>oe-1),Y(!1),ye&&u[l-1]!==null&&setTimeout(()=>Y(!0),100))},Xn=()=>{if(S(Date.now()),clearInterval(Le.current),Ce===null){const oe=[...x];oe[l]=!0,p(oe),A(0)}X(!1),Y(!1),l<Ye-1?(c(oe=>oe+1),ye&&u[l+1]!==null?setTimeout(()=>Y(!0),100):setTimeout(()=>X(!0),100)):re(!0)},xo=()=>{S(Date.now());const oe=[...x];oe[l]=!0,p(oe),A(0),Xn()},go=()=>{const oe=_e.reduce((te,ie,ge)=>te+(u[ge]===ie.answerIndex?1:0),0);if(ye)o&&o({questions:_e,answers:u,skipped:x,correct:oe,total:Ye,mode:t,category:n,difficulty:r,earnedStars:G,earnedCoins:ae,finalStreak:we});else{const te=oe*10;he(te),q(!0),setTimeout(()=>{He("/sounds/coin.mp3"),K(!0),setTimeout(()=>K(!1),3e3)},1e3)}},vo=()=>{o&&o({questions:_e,answers:u,skipped:x,correct:_e.reduce((oe,te,ie)=>oe+(u[ie]===te.answerIndex?1:0),0),total:Ye,mode:t,category:n,difficulty:r,earnedStars:0,earnedCoins:Se,finalStreak:we})};d.useEffect(()=>{if(!(j||v!==null||O||!ue||u[l]!==null))return Le.current=setInterval(()=>{y(oe=>{const te=[...oe],ie=te[l];return ie<=1?(clearInterval(Le.current),l===Ye-1?(Date.now()-h>=5e3&&re(!0),te):(f(l),te)):(te[l]=ie-1,te)})},1e3),()=>clearInterval(Le.current)},[j,v,l,O,Ye,ue,u,h]),d.useEffect(()=>{u[l]===null&&!O&&!v?X(!0):X(!1)},[l,u,O,v]);const Ms=oe=>{const te=Math.floor(oe/60),ie=oe%60;return`${te}:${ie.toString().padStart(2,"0")}`},Tr=(l+1)/_e.length*100,Jn=u.filter(oe=>oe!==null).length,yo=x.filter(Boolean).length,le=w[l]||0,me=_e.reduce((oe,te,ie)=>oe+(u[ie]===te.answerIndex?1:0),0);return s.jsxs("div",{className:"h-dvh bg-gray-900 text-white relative flex flex-col",children:[pe&&s.jsx("div",{className:"fixed inset-0 flex items-center justify-center z-50 pointer-events-none",children:s.jsxs("div",{className:"bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-8 py-4 rounded-full text-xl font-bold animate-bounce shadow-2xl",children:["+",pe.coins," Coins!"]})}),ye&&I&&s.jsx("div",{className:"fixed top-[60%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 pointer-events-none animate-fadeInOut max-w-2xl w-full px-4",children:s.jsx("div",{className:"bg-gradient-to-br from-gray-800/95 to-gray-900/95 text-white p-6 rounded-3xl shadow-2xl backdrop-blur-sm border border-gray-700/50",children:s.jsxs("div",{className:"text-center",children:[s.jsx("div",{className:"text-4xl mb-3",children:I.emoji}),s.jsx("div",{className:"text-xl font-bold leading-relaxed tracking-wide",children:I.message})]})})}),V&&s.jsx("div",{className:"fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-40 pointer-events-none",children:[...Array(8)].map((oe,te)=>s.jsx("div",{className:"absolute text-3xl animate-ping",style:{left:`${-30+Math.random()*60}px`,top:`${-30+Math.random()*60}px`,animationDelay:`${te*150}ms`,animationDuration:"2s"},children:"🪙"},te))}),s.jsxs("div",{className:"sticky top-0 flex items-center justify-between px-4 py-2 bg-gray-900 flex-shrink-0 z-40 border-b border-gray-800 shadow-lg",children:[s.jsxs("button",{onClick:()=>ee(!0),className:"bg-gray-700 hover:bg-gray-600 px-3 py-1.5 rounded-full flex items-center gap-2 transition-colors text-sm",children:[s.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:s.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 19l-7-7 7-7"})}),s.jsx("span",{className:"font-medium",children:"Back"})]}),s.jsx("div",{className:"flex-1"}),s.jsxs("div",{className:"flex items-center gap-2",children:[ye&&s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"bg-yellow-600/20 px-2 py-1 rounded-full flex items-center gap-1",children:[s.jsx("span",{className:"text-yellow-400 text-sm",children:"🪙"}),s.jsx("span",{className:"text-yellow-200 font-semibold text-sm",children:ae})]}),s.jsxs("div",{className:"bg-orange-600/20 px-2 py-1 rounded-full flex items-center gap-1",children:[s.jsx("span",{className:"text-orange-400 text-sm",children:"🔥"}),s.jsx("span",{className:"text-orange-200 font-semibold text-sm",children:we})]})]}),s.jsx("div",{className:`px-2 py-1 rounded-full font-mono font-semibold text-sm ${le<=10?"bg-red-600/20 text-red-400 animate-pulse":le<=30?"bg-yellow-600/20 text-yellow-400":"bg-green-600/20 text-green-400"}`,children:Ms(le)})]})]}),s.jsxs("div",{className:"px-4 pb-1 flex-shrink-0 bg-gray-900 relative z-30",children:[s.jsxs("div",{className:"flex justify-between items-center mb-1",children:[s.jsxs("span",{className:"text-xs text-gray-400",children:["Question ",l+1," of ",Ye]}),s.jsxs("span",{className:"text-xs text-gray-400",children:[Math.round(Tr),"% Complete"]})]}),s.jsx("div",{className:"h-2 bg-gray-700 rounded-full overflow-hidden",children:s.jsx("div",{className:"h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-500",style:{width:`${Tr}%`}})}),s.jsx("div",{className:"flex justify-center gap-1 mt-1",children:Array.from({length:Ye}).map((oe,te)=>s.jsx("div",{className:`w-1.5 h-1.5 rounded-full transition-all ${te===l?"bg-white scale-125":u[te]!==null?"bg-green-500":x[te]?"bg-yellow-500":"bg-gray-600"}`},te))}),s.jsx("div",{className:"text-center mt-4",children:s.jsx("span",{className:"text-xs text-gray-500",children:Re.category})})]}),s.jsxs("div",{className:"flex-1 px-4 flex flex-col overflow-y-auto pb-36",children:[s.jsxs("div",{className:"relative bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 rounded-3xl p-6 mb-8 flex-shrink-0 shadow-2xl shadow-blue-600/20 border border-blue-400/20",children:[s.jsx("div",{className:"absolute top-2 right-2 w-16 h-16 bg-white/10 rounded-full blur-xl"}),s.jsx("div",{className:"absolute bottom-2 left-2 w-12 h-12 bg-white/5 rounded-full blur-lg"}),s.jsxs("div",{className:"relative text-center",children:[s.jsxs("div",{className:"inline-block bg-white/10 px-3 py-1 rounded-full text-xs font-medium text-blue-100 mb-3",children:["Question ",l+1]}),s.jsx("h2",{className:"text-xl font-bold leading-relaxed text-white tracking-wide",children:Re.prompt}),Re.difficulty&&s.jsx("div",{className:"mt-3 inline-block",children:s.jsx("span",{className:`px-2 py-1 rounded-full text-xs font-semibold ${Re.difficulty==="easy"?"bg-green-500/20 text-green-300":Re.difficulty==="medium"?"bg-yellow-500/20 text-yellow-300":"bg-red-500/20 text-red-300"}`,children:Re.difficulty.toUpperCase()})})]})]}),s.jsx("div",{className:"grid grid-cols-1 gap-3 mb-2 flex-shrink-0",children:Re.options.map((oe,te)=>{const ie=Ce===te,ge=te===Re.answerIndex,de=ye&&Ce!==null&&F,Ne=b[l]&&b[l].includes(te);let be="p-4 rounded-xl transition-all duration-300 border-2 min-h-[64px] flex items-center ";Ne?be+="bg-gray-700/30 border-gray-600/30 text-gray-500/50 cursor-not-allowed":(be+="cursor-pointer ",de?ie&&ge?be+="bg-green-600 border-green-500 text-white shadow-lg shadow-green-600/25":ie&&!ge?be+="bg-red-600 border-red-500 text-white shadow-lg shadow-red-600/25":!ie&&ge?be+="bg-green-600/20 border-green-500 text-green-300 animate-pulse":be+="bg-gray-700 border-gray-600 text-gray-400":ie?be+="bg-gray-600 border-gray-500 text-white":be+="bg-gray-800 border-gray-700 text-gray-200 hover:bg-gray-750 hover:border-gray-600");const Ze=["🅰️","🅱️","🅲️","🅳️"];return s.jsx("button",{onClick:Lr=>po(te,Lr),disabled:ye&&H[l],className:be,children:s.jsxs("div",{className:"flex items-center gap-2 w-full",children:[s.jsx("div",{className:"text-lg flex-shrink-0 mr-1",children:Ze[te]}),s.jsx("div",{className:"flex-1 text-left font-semibold text-base leading-relaxed",children:oe}),E[l]&&E[l][te]>0&&!Ne&&s.jsxs("div",{className:"bg-purple-600/20 px-2 py-1 rounded-full text-xs text-purple-300",children:[E[l][te],"%"]}),de&&ie&&ge&&!Ne&&s.jsx("div",{className:"text-lg animate-bounce",children:"🎉"}),de&&ie&&!ge&&!Ne&&s.jsx("div",{className:"text-lg",children:"😔"}),de&&!ie&&ge&&!Ne&&s.jsx("div",{className:"text-base animate-pulse",children:"✨"})]})},te)})}),ye&&F&&Ce!==null&&s.jsx("div",{className:"bg-gray-800 rounded-xl p-4 mb-2 mt-4 border border-gray-700 flex-shrink-0",children:s.jsxs("div",{className:"flex gap-3",children:[s.jsx("div",{className:"text-lg flex-shrink-0",children:Ce===Re.answerIndex?"🎊":"💡"}),s.jsxs("div",{className:"flex-1",children:[s.jsx("h4",{className:`font-semibold mb-3 text-sm ${Ce===Re.answerIndex?"text-green-400":"text-blue-400"}`,children:Ce===Re.answerIndex?"Perfect! Well done!":"Good try! Here's why:"}),Re.explanation&&s.jsx("p",{className:"text-gray-300 text-sm leading-relaxed",children:Re.explanation})]})]})})]}),s.jsxs("div",{className:"fixed bottom-0 left-0 right-0 bg-gray-800/90 backdrop-blur-sm p-4 pb-8 z-50",children:[!ye&&s.jsxs("div",{className:"flex justify-center gap-2 mb-4",children:[s.jsxs("button",{onClick:Ls,disabled:Ce!==null,className:`${_?"bg-gray-700/50 text-gray-500/50":"bg-orange-600 hover:bg-orange-700"} disabled:bg-gray-800 px-3 py-1.5 rounded-lg font-medium transition-colors flex items-center gap-1 text-sm`,children:[s.jsx("span",{children:"⚡"}),"50:50"]}),s.jsxs("button",{onClick:Mn,disabled:Ce!==null,className:`${N?"bg-gray-700/50 text-gray-500/50":"bg-purple-600 hover:bg-purple-700"} disabled:bg-gray-800 px-3 py-1.5 rounded-lg font-medium transition-colors flex items-center gap-1 text-sm`,children:[s.jsx("span",{children:"👥"}),"Ask Friends"]})]}),s.jsxs("div",{className:"flex gap-2 mb-2",children:[s.jsx("button",{onClick:ho,disabled:l===0,className:"flex-1 bg-gray-700 hover:bg-gray-600 disabled:bg-gray-800 py-2 rounded-lg font-medium transition-colors text-sm",children:"Previous"}),s.jsx("button",{onClick:xo,disabled:Ce!==null,className:`flex-1 py-2 rounded-lg font-medium transition-colors text-sm ${Ce!==null?"bg-gray-600/50 text-gray-400/50 cursor-not-allowed":"bg-yellow-600 hover:bg-yellow-700"}`,children:"Skip"}),s.jsx("button",{onClick:Xn,className:"flex-1 bg-blue-600 hover:bg-blue-700 py-2 rounded-lg font-medium transition-colors text-sm",children:l===Ye-1?"Finish":"Next"})]}),s.jsx("button",{onClick:()=>re(!0),className:"w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 py-2.5 rounded-lg font-medium transition-colors text-sm",children:"Submit"})]}),se&&s.jsx("div",{className:"fixed inset-0 bg-black/75 flex items-center justify-center z-50 p-4",children:s.jsxs("div",{className:"bg-gray-800 rounded-3xl p-6 max-w-sm w-full text-center border border-gray-700",children:[s.jsx("div",{className:"text-4xl mb-4",children:"🎉"}),s.jsx("h3",{className:"text-xl font-bold mb-2",children:"Quiz Complete!"}),s.jsx("p",{className:"text-gray-400 mb-6",children:"Here's how you performed"}),s.jsxs("div",{className:"bg-gray-700/50 rounded-2xl p-4 mb-6 space-y-3",children:[s.jsxs("div",{className:"flex justify-between items-center",children:[s.jsx("span",{className:"text-gray-300",children:"Questions Attempted:"}),s.jsxs("span",{className:"text-white font-semibold",children:[Jn," / ",Ye]})]}),s.jsxs("div",{className:"flex justify-between items-center",children:[s.jsx("span",{className:"text-gray-300",children:"Correct Answers:"}),s.jsx("span",{className:"text-green-400 font-semibold",children:me})]}),s.jsxs("div",{className:"flex justify-between items-center",children:[s.jsx("span",{className:"text-gray-300",children:"Accuracy:"}),s.jsxs("span",{className:"text-blue-400 font-semibold",children:[Jn>0?Math.round(me/Jn*100):0,"%"]})]}),s.jsx("div",{className:"border-t border-gray-600 pt-3 mt-3",children:s.jsxs("div",{className:"flex justify-between items-center",children:[s.jsx("span",{className:"text-yellow-300 flex items-center gap-1",children:"🪙 Coins Earned:"}),s.jsx("span",{className:"text-yellow-400 font-bold text-lg",children:Se})]})})]}),s.jsx("button",{onClick:vo,className:"w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 py-3 rounded-xl font-medium transition-colors",children:"Continue"})]})}),B&&s.jsx("div",{className:"fixed inset-0 bg-black/75 flex items-center justify-center z-50 p-4",children:s.jsxs("div",{className:"bg-gray-800 rounded-3xl p-6 max-w-sm w-full text-center border border-gray-700",children:[s.jsx("div",{className:"text-4xl mb-4",children:"🤔"}),s.jsx("h3",{className:"text-xl font-bold mb-2",children:"Leave Quiz?"}),s.jsx("p",{className:"text-gray-400 mb-6",children:"Your progress will be lost"}),s.jsxs("div",{className:"flex gap-3",children:[s.jsx("button",{onClick:()=>ee(!1),className:"flex-1 bg-blue-600 hover:bg-blue-700 py-3 rounded-xl font-medium",children:"Stay"}),s.jsx("button",{onClick:a,className:"flex-1 bg-gray-700 hover:bg-gray-600 py-3 rounded-xl font-medium",children:"Leave"})]})]})}),O&&!se&&s.jsx("div",{className:"fixed inset-0 bg-black/75 flex items-center justify-center z-50 p-4",children:s.jsxs("div",{className:"bg-gray-800 rounded-3xl p-6 max-w-sm w-full text-center border border-gray-700",children:[s.jsx("div",{className:"text-4xl mb-4",children:"🏆"}),s.jsx("h3",{className:"text-xl font-bold mb-2",children:"Ready to finish?"}),s.jsxs("p",{className:"text-gray-400 mb-4",children:[Jn," of ",Ye," answered • ",yo," skipped"]}),ye&&s.jsx("div",{className:"bg-gradient-to-r from-yellow-600/20 to-orange-600/20 p-4 rounded-2xl mb-6 border border-yellow-600/30",children:s.jsxs("div",{className:"flex justify-center gap-6",children:[s.jsxs("div",{className:"text-center",children:[s.jsx("div",{className:"text-2xl mb-1",children:"⭐"}),s.jsx("div",{className:"text-yellow-400 font-bold",children:G}),s.jsx("div",{className:"text-xs text-gray-400",children:"Stars"})]}),s.jsxs("div",{className:"text-center",children:[s.jsx("div",{className:"text-2xl mb-1",children:"🪙"}),s.jsx("div",{className:"text-yellow-400 font-bold",children:ae}),s.jsx("div",{className:"text-xs text-gray-400",children:"Coins"})]})]})}),s.jsxs("div",{className:"flex gap-3",children:[s.jsx("button",{onClick:()=>{re(!1),f(null),S(Date.now())},className:"flex-1 bg-gray-700 hover:bg-gray-600 py-3 rounded-xl font-medium",children:"Back"}),s.jsx("button",{onClick:oe=>{oe.preventDefault(),oe.stopPropagation(),console.log("Submit button clicked"),go()},className:"flex-1 bg-green-600 hover:bg-green-700 py-3 rounded-xl font-medium",children:"Submit"})]})]})}),v===l&&!O&&s.jsx("div",{className:"fixed inset-0 bg-black/75 flex items-center justify-center z-50 p-4",children:s.jsxs("div",{className:"bg-gray-800 rounded-3xl p-6 max-w-sm w-full text-center border border-gray-700",children:[s.jsx("div",{className:"text-4xl mb-4 animate-pulse",children:"⏰"}),s.jsx("h3",{className:"text-xl font-bold mb-2",children:"Time's Up!"}),s.jsx("p",{className:"text-gray-400 mb-6",children:"Let's move to the next question"}),s.jsx("button",{onClick:()=>{f(null),S(Date.now()),l<_e.length-1?Xn():re(!0)},className:"w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-xl font-medium",children:l<_e.length-1?"Continue":"See Results"})]})}),ce&&s.jsx("div",{className:"fixed top-20 left-1/2 transform -translate-x-1/2 bg-red-600 text-white px-4 py-2 rounded-full font-medium animate-bounce z-50",children:ce}),s.jsx("style",{jsx:!0,children:`
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
        `})]})},Ur=[{name:"GK",slug:"general-knowledge",questions:50,icon:"🧠",color:"#FF6B6B",gradient:"from-red-500 to-pink-500"},{name:"Science",slug:"science",questions:45,icon:"🧪",color:"#4ECDC4",gradient:"from-cyan-500 to-teal-500"},{name:"Fun Facts",slug:"fun-facts",questions:30,icon:"🎉",color:"#FFD93D",gradient:"from-yellow-400 to-orange-500"},{name:"History",slug:"history",questions:42,icon:"🏺",color:"#A8E6CF",gradient:"from-green-400 to-emerald-500"},{name:"AI & Tech",slug:"artificial-intelligence",questions:28,icon:"🤖",color:"#C7B8FF",gradient:"from-purple-400 to-indigo-500"},{name:"Geography",slug:"geography",questions:38,icon:"🗺️",color:"#FACC15",gradient:"from-yellow-400 to-amber-500"},{name:"Computer",slug:"computer",questions:34,icon:"💻",color:"#3B82F6",gradient:"from-blue-400 to-blue-600"},{name:"Aptitude",slug:"aptitude",questions:36,icon:"📐",color:"#EC4899",gradient:"from-pink-500 to-rose-500"},{name:"Iconic Figures",slug:"iconic-figures",questions:26,icon:"🌟",color:"#8B5CF6",gradient:"from-purple-500 to-violet-600"}],Wx=()=>s.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:s.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5l7 7-7 7"})}),Qx=()=>s.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:s.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"})}),Hx=()=>s.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:s.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"})}),Yx=()=>s.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:s.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"})}),Vx=()=>s.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:s.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"})}),Gx=()=>s.jsx("svg",{className:"w-3 h-3",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:s.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 10V3L4 14h7v7l9-11h-7z"})}),Kx=({results:e={correct:8,total:10,category:"general-knowledge",mode:"quiz",elapsedMs:125e3,questions:[]},onRetake:t=()=>{},onReview:n=()=>{},onNavigate:r=(u,m)=>{},isRetake:i=!1,isPractice:o=!1,player:a={level:1,coins:0,combo:0,energy:5},categories:l=[],addCoins:c=()=>{}})=>{const[u,m]=d.useState(a.coins),x=d.useRef(null),[p,w]=d.useState(null),[y]=Zt("/sounds/coin.mp3",{volume:.75}),[j,C]=d.useState(!1),[v,f]=d.useState(!1),[h,S]=d.useState(0),[_,L]=d.useState(!1),[N,g]=d.useState(!1),{correct:b,total:k,category:E,categorySlug:M,difficulty:H,mode:Z,elapsedMs:I}=e,W=k?Math.round(b/k*100):0,Q=W===100,R=W>=80,z=Math.floor(I/1e3),D=k>0?Math.floor(z/k):0,T=o?e.earnedCoins||0:Math.round(b*5*(Q?1.5:R?1.2:1)),$=Ur.find(F=>F.slug===E)||Ur[0],re=(()=>Q?{emoji:"🏆",text:"Perfect!",color:"text-yellow-400"}:W>=90?{emoji:"🌟",text:"Excellent!",color:"text-purple-400"}:W>=80?{emoji:"✨",text:"Great job!",color:"text-blue-400"}:W>=70?{emoji:"👍",text:"Good effort!",color:"text-green-400"}:W>=60?{emoji:"💪",text:"Keep going!",color:"text-orange-400"}:{emoji:"📚",text:"Keep practicing!",color:"text-gray-400"})();d.useEffect(()=>{!p&&!j&&m(a.coins)},[a.coins,p,j]),d.useEffect(()=>{T>0&&!j&&!N&&x.current&&setTimeout(()=>{x.current.getBoundingClientRect(),y==null||y(),w({startRect:{left:window.innerWidth/2-50,top:window.innerHeight/2,width:100,height:100},count:Math.min(T,10),amount:T}),C(!0)},500)},[T,o,j,y]),d.useEffect(()=>{(Q||R)&&(f(!0),setTimeout(()=>f(!1),3e3));let F=0;const Y=b/20,V=setInterval(()=>{F+=Y,F>=b?(S(b),clearInterval(V)):S(Math.floor(F))},50);return()=>clearInterval(V)},[b,Q,R]);const B=[{score:7,total:10},{score:6,total:10},{score:8,total:10},{score:9,total:10},{score:b,total:k}],ee=()=>{try{const F=localStorage.getItem("qp_recent");if(F)return JSON.parse(F).slice(0,10).map(V=>V.slug||V.cat).filter(V=>V&&V!==e.categorySlug)}catch(F){console.error("Error reading recent categories:",F)}return[]},ce=()=>{const F=M||E,Y=H||"medium",V=ee(),K=(l||Ur||[]).filter(se=>se.slug!==F&&!V.slice(0,3).includes(se.slug)),X=(()=>{if(K.length===0){const se=(l||Ur||[]).filter(q=>q.slug!==F);return se[Math.floor(Math.random()*se.length)]||(l||Ur)[0]}return K[Math.floor(Math.random()*K.length)]})();if(W<60)return o?[{icon:"🎯",title:"Try Fewer Questions",desc:"Start with just 5",color:"from-blue-500 to-cyan-500",action:()=>r(`/quiz/${F}`,{mode:"practice",difficulty:"easy",count:5,timer:{type:"off",seconds:0}})},{icon:X.icon,title:X.name,desc:"Fresh start with new topic",color:X.gradient,action:()=>r(`/quiz/${X.slug}`,{mode:"practice",difficulty:"easy",count:10,timer:{type:"off",seconds:0}})},{icon:"📖",title:"Review Mistakes",desc:"Learn from errors",color:"from-purple-500 to-pink-500",action:()=>n()}]:[{icon:"📚",title:"Practice Mode",desc:"No timer, learn at your pace",color:"from-green-500 to-teal-500",action:()=>r(`/quiz/${F}`,{mode:"practice",difficulty:"easy",count:10,timer:{type:"off",seconds:0}})},{icon:Y!=="easy"?"🎯":"🔄",title:Y!=="easy"?"Easy Mode":"Try Again",desc:Y!=="easy"?"Build confidence":"You can do this!",color:"from-blue-500 to-cyan-500",action:()=>Y!=="easy"?r(`/quiz/${F}`,{mode:"quiz",difficulty:"easy",count:5,timer:{type:"per_q",seconds:60}}):t()},{icon:X.icon,title:X.name,desc:"Try something different",color:X.gradient,action:()=>r(`/quiz/${X.slug}`,{mode:"quiz",difficulty:"easy",count:10,timer:{type:"per_q",seconds:45}})}];if(W>=80)return Y==="hard"&&W>=90?[{icon:"⚡",title:"Lightning Round",desc:"20 questions, 10s each",color:"from-yellow-500 to-red-500",action:()=>r(`/quiz/${F}`,{mode:"quiz",difficulty:"hard",count:20,timer:{type:"per_q",seconds:10}})},{icon:X.icon,title:`${X.name} Challenge`,desc:"Hard mode, new topic",color:X.gradient,action:()=>r(`/quiz/${X.slug}`,{mode:"quiz",difficulty:"hard",count:15,timer:{type:"per_q",seconds:30}})},{icon:"🎲",title:"Mixed Categories",desc:"Test all your knowledge",color:"from-purple-500 to-indigo-500",action:()=>r("/quiz/mixed",{mode:"quiz",difficulty:"hard",count:20,timer:{type:"per_q",seconds:30}})}]:[{icon:Y==="hard"?"🔥":"🎯",title:Y==="hard"?"Perfect Score Challenge":"Hard Mode",desc:Y==="hard"?"Can you get 100%?":"Level up your skills",color:"from-red-500 to-orange-500",action:()=>r(`/quiz/${F}`,{mode:"quiz",difficulty:"hard",count:Y==="hard"?10:20,timer:{type:"per_q",seconds:30}})},{icon:X.icon,title:X.name,desc:"Master new topics",color:X.gradient,action:()=>r(`/quiz/${X.slug}`,{mode:"quiz",difficulty:Y,count:10,timer:{type:"per_q",seconds:45}})},{icon:"⚡",title:"Speed Challenge",desc:"10 questions, 15s each",color:"from-purple-500 to-pink-500",action:()=>r(`/quiz/${F}`,{mode:"quiz",difficulty:"medium",count:10,timer:{type:"per_q",seconds:15}})}];{const se=W<70;return[{icon:se?"📚":"🎯",title:se?"Practice More":"Try Again",desc:se?"Improve accuracy":"Beat your score",color:se?"from-green-500 to-teal-500":"from-blue-500 to-purple-500",action:se?()=>r(`/quiz/${F}`,{mode:"practice",difficulty:Y,count:10,timer:{type:"off",seconds:0}}):()=>t()},{icon:X.icon,title:X.name,desc:"Explore new topics",color:X.gradient,action:()=>r(`/quiz/${X.slug}`,{mode:"quiz",difficulty:"medium",count:10,timer:{type:"per_q",seconds:45}})},{icon:Y==="easy"?"⬆️":"💪",title:Y==="easy"?"Medium Difficulty":"More Questions",desc:Y==="easy"?"Ready for more?":"Test endurance",color:"from-indigo-500 to-purple-500",action:()=>r(`/quiz/${F}`,{mode:"quiz",difficulty:Y==="easy"?"medium":Y,count:Y==="easy"?10:20,timer:{type:"per_q",seconds:45}})}]}},P=it.useMemo(()=>ce(),[W,o,e.categorySlug,e.difficulty]);return s.jsxs("div",{className:"min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white p-4",children:[p&&s.jsx(Vl,{startRect:p.startRect,targetRef:x,count:p.count,onDone:()=>{p.amount>0&&!N&&(console.log("[QuizResults] Adding coins once:",p.amount),c(p.amount),g(!0),m(a.coins+p.amount)),w(null)}}),s.jsx("style",{children:`
        @keyframes coinRotate {
          from { transform: rotateY(0deg); }
          to { transform: rotateY(360deg); }
        }
      `}),v&&s.jsx("div",{className:"fixed inset-0 pointer-events-none z-50 flex items-center justify-center",children:s.jsx("div",{className:"text-8xl animate-bounce",children:Q?"🎉":"⭐"})}),s.jsxs("div",{className:"flex justify-between items-center mb-6",children:[s.jsx("button",{onClick:()=>r("/"),className:"p-2 rounded-xl bg-white/10 backdrop-blur hover:bg-white/20 transition-all",children:s.jsx(Qx,{})}),s.jsxs("div",{className:"flex gap-2",children:[s.jsxs("div",{className:"px-3 py-1.5 rounded-full bg-white/10 backdrop-blur text-sm font-medium",children:["Level ",a.level]}),s.jsxs("button",{ref:x,onClick:()=>L(!0),className:"px-3 py-1.5 rounded-full bg-yellow-500/20 backdrop-blur text-sm font-medium text-yellow-300 hover:bg-yellow-500/30 transition-all cursor-pointer",children:[u," 🪙"]})]})]}),s.jsxs("div",{className:"relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 p-8 mb-6",children:[s.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-blue-500/10 animate-pulse"}),s.jsxs("div",{className:"relative text-center",children:[s.jsxs("div",{className:`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur mb-4 ${re.color}`,children:[s.jsx("span",{className:"text-2xl",children:re.emoji}),s.jsx("span",{className:"font-semibold",children:re.text})]}),s.jsxs("div",{className:"mb-6",children:[s.jsxs("div",{className:"text-7xl font-bold mb-2 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent",children:[h,"/",k]}),s.jsxs("div",{className:"flex items-center justify-center gap-2 text-sm text-white/60",children:[s.jsx("span",{className:"text-xl",children:$.icon}),s.jsx("span",{children:$.name})]})]}),s.jsxs("div",{className:"grid grid-cols-3 gap-4 max-w-md mx-auto",children:[s.jsxs("div",{className:"text-center",children:[s.jsxs("div",{className:"text-3xl font-bold",children:[W,"%"]}),s.jsx("div",{className:"text-xs text-white/60",children:"Accuracy"})]}),s.jsxs("div",{className:"text-center",children:[s.jsxs("div",{className:"text-3xl font-bold",children:[D,"s"]}),s.jsx("div",{className:"text-xs text-white/60",children:"Avg Speed"})]}),s.jsxs("div",{className:"text-center",children:[s.jsx("div",{className:"text-3xl font-bold text-yellow-400",children:T>0?`+${T}`:"0"}),s.jsx("div",{className:"text-xs text-white/60",children:"Coins"})]})]})]})]}),s.jsxs("div",{className:"rounded-2xl bg-white/5 backdrop-blur border border-white/10 p-4 mb-6",children:[s.jsxs("div",{className:"flex items-center justify-between mb-3",children:[s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx(Vx,{}),s.jsx("span",{className:"text-sm font-medium",children:"Your Progress"})]}),a.combo>0&&s.jsxs("div",{className:"flex items-center gap-1 px-2 py-1 rounded-full bg-orange-500/20 text-orange-400 text-xs",children:[s.jsx(Gx,{}),a.combo," streak"]})]}),s.jsx("div",{className:"flex items-end gap-1 h-12 mb-2",children:B.map((F,Y)=>s.jsx("div",{className:`flex-1 rounded-t transition-all ${Y===B.length-1?"bg-gradient-to-t from-purple-500 to-purple-400":"bg-white/20"}`,style:{height:`${F.score/F.total*100}%`,minHeight:"4px"}},Y))}),s.jsx("div",{className:"text-xs text-white/40 text-center",children:"Last 5 quizzes"})]}),s.jsxs("div",{className:"grid grid-cols-2 gap-3 mb-6",children:[s.jsxs("button",{onClick:n,className:"relative overflow-hidden group rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 p-4 transition-all hover:scale-105 active:scale-95",children:[s.jsx("div",{className:"absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform"}),s.jsxs("div",{className:"relative flex items-center justify-between",children:[s.jsxs("div",{className:"text-left",children:[s.jsx("div",{className:"font-semibold",children:"Review"}),s.jsx("div",{className:"text-xs opacity-80",children:"Check answers"})]}),s.jsx(Yx,{})]})]}),s.jsx("button",{onClick:t,className:"relative overflow-hidden group rounded-2xl bg-white/10 backdrop-blur border border-white/20 p-4 transition-all hover:scale-105 active:scale-95 hover:bg-white/15",children:s.jsxs("div",{className:"flex items-center justify-between",children:[s.jsxs("div",{className:"text-left",children:[s.jsx("div",{className:"font-semibold",children:"Try Again"}),s.jsx("div",{className:"text-xs opacity-60",children:"New questions"})]}),s.jsx(Hx,{})]})})]}),s.jsxs("div",{className:"space-y-3",children:[s.jsx("div",{className:"text-sm font-medium text-white/60 px-1",children:"Recommended for you"}),P.map((F,Y)=>s.jsx("button",{onClick:F.action,className:"w-full group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur border border-white/10 p-4 transition-all hover:bg-white/10 hover:border-white/20",children:s.jsxs("div",{className:"flex items-center justify-between",children:[s.jsxs("div",{className:"flex items-center gap-3",children:[s.jsx("div",{className:`p-2 rounded-xl bg-gradient-to-r ${F.color} opacity-20 group-hover:opacity-30 transition-opacity`,children:s.jsx("span",{className:"text-xl",children:F.icon})}),s.jsxs("div",{className:"text-left",children:[s.jsx("div",{className:"font-medium text-sm",children:F.title}),s.jsx("div",{className:"text-xs text-white/40",children:F.desc})]})]}),s.jsx(Wx,{})]})},Y))]}),s.jsx("div",{className:"mt-6 pt-6 border-t border-white/10",children:s.jsx("button",{onClick:()=>r("/profile/history",{replace:!0}),className:"w-full text-center text-sm text-white/40 hover:text-white/60 transition-colors",children:"View all history →"})}),_&&s.jsx("div",{className:"fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4",onClick:F=>{F.target===F.currentTarget&&L(!1)},children:s.jsxs("div",{className:"bg-gray-800 rounded-3xl p-6 w-full max-w-md border border-gray-700 relative overflow-hidden",onClick:F=>F.stopPropagation(),children:[s.jsx("div",{className:"absolute inset-0 opacity-10",children:s.jsx("div",{className:"h-full bg-gradient-to-br from-yellow-400 to-orange-500"})}),s.jsxs("div",{className:"relative",children:[s.jsxs("div",{className:"flex items-center justify-between mb-6",children:[s.jsxs("div",{className:"flex items-center gap-3",children:[s.jsx("div",{className:"text-5xl",style:{animation:"coinRotate 2s linear infinite"},children:"🪙"}),s.jsxs("div",{children:[s.jsx("h3",{className:"text-2xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent",children:"Your Treasure"}),s.jsxs("p",{className:"text-3xl font-bold text-white mt-1",children:[a.coins," Coins"]})]})]}),s.jsx("button",{onClick:()=>L(!1),className:"w-8 h-8 rounded-lg bg-white/5 border border-gray-600 grid place-items-center hover:bg-white/10 transition",children:"✕"})]}),s.jsxs("div",{className:"mb-6",children:[s.jsx("h4",{className:"text-sm font-medium text-gray-400 mb-3",children:"Ways to Earn"}),s.jsxs("div",{className:"space-y-3",children:[s.jsx("div",{className:"p-4 rounded-xl bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 hover:scale-[1.02] transition-transform",children:s.jsxs("div",{className:"flex items-center justify-between",children:[s.jsxs("div",{children:[s.jsxs("div",{className:"font-medium flex items-center gap-2",children:[s.jsx("span",{className:"text-2xl",children:"✅"}),"Complete Quizzes"]}),s.jsx("div",{className:"text-xs text-gray-400 mt-1",children:"+5 coins per correct answer"})]}),s.jsx("div",{className:"text-green-400 font-bold",children:"+5"})]})}),s.jsx("div",{className:"p-4 rounded-xl bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 hover:scale-[1.02] transition-transform",children:s.jsxs("div",{className:"flex items-center justify-between",children:[s.jsxs("div",{children:[s.jsxs("div",{className:"font-medium flex items-center gap-2",children:[s.jsx("span",{className:"text-2xl",children:"🎯"}),"Daily Challenge"]}),s.jsx("div",{className:"text-xs text-gray-400 mt-1",children:"Complete daily for bonus"})]}),s.jsx("div",{className:"text-blue-400 font-bold",children:"+5"})]})}),s.jsx("div",{className:"p-4 rounded-xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 hover:scale-[1.02] transition-transform",children:s.jsxs("div",{className:"flex items-center justify-between",children:[s.jsxs("div",{children:[s.jsxs("div",{className:"font-medium flex items-center gap-2",children:[s.jsx("span",{className:"text-2xl",children:"🎰"}),"Spin & Play"]}),s.jsx("div",{className:"text-xs text-gray-400 mt-1",children:"Test your luck!"})]}),s.jsx("div",{className:"text-purple-400 font-bold",children:"+50"})]})}),s.jsx("div",{className:"p-4 rounded-xl bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/20 hover:scale-[1.02] transition-transform",children:s.jsxs("div",{className:"flex items-center justify-between",children:[s.jsxs("div",{children:[s.jsxs("div",{className:"font-medium flex items-center gap-2",children:[s.jsx("span",{className:"text-2xl",children:"🏆"}),"Achievements"]}),s.jsx("div",{className:"text-xs text-gray-400 mt-1",children:"Unlock special rewards"})]}),s.jsx("div",{className:"text-orange-400 font-bold",children:"+???"})]})})]})]}),s.jsxs("div",{className:"mb-6",children:[s.jsxs("div",{className:"flex justify-between text-xs text-gray-400 mb-2",children:[s.jsx("span",{children:"Next reward"}),s.jsxs("span",{children:[100-a.coins%100," coins to go"]})]}),s.jsx("div",{className:"h-2 bg-white/10 rounded-full overflow-hidden",children:s.jsx("div",{className:"h-full bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full transition-all",style:{width:`${a.coins%100}%`}})})]}),s.jsx("button",{onClick:()=>{L(!1),r("/play")},className:"w-full py-3 rounded-xl bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-bold hover:scale-[1.02] transition-transform shadow-lg",children:"Start Earning Now! 🚀"})]})]})})]})},Xx=({questions:e,answers:t,skipped:n,onBack:r,onRetake:i,fromHistory:o=!1})=>{const a=ht(),l=()=>{o?a("/profile/history",{replace:!0}):r?r():a(-1)},c=e.reduce((x,p,w)=>x+(t[w]===p.answerIndex?1:0),0),u=(n==null?void 0:n.filter(Boolean).length)||0,m=e.length-c-u;return s.jsxs("div",{className:"mt-2 card rounded-3xl p-5 w-full max-w-none mx-auto pb-24",children:[s.jsxs("div",{className:"flex items-center justify-between mb-4",children:[s.jsx("button",{className:"px-3 py-1.5 rounded-xl border border-base-border bg-white/5",onClick:l,children:"← Back"}),s.jsx("h2",{className:"text-lg font-semibold",children:"Review Answers"}),s.jsx("div",{className:"w-16"})," "]}),s.jsxs("div",{className:"grid grid-cols-3 gap-2 mb-4",children:[s.jsxs("div",{className:"rounded-xl bg-green-600/10 border border-green-500/30 p-2 text-center",children:[s.jsx("div",{className:"text-xs text-green-400",children:"Correct"}),s.jsx("div",{className:"text-lg font-bold text-green-400",children:c})]}),s.jsxs("div",{className:"rounded-xl bg-red-600/10 border border-red-500/30 p-2 text-center",children:[s.jsx("div",{className:"text-xs text-red-400",children:"Incorrect"}),s.jsx("div",{className:"text-lg font-bold text-red-400",children:m})]}),s.jsxs("div",{className:"rounded-xl bg-amber-600/10 border border-amber-500/30 p-2 text-center",children:[s.jsx("div",{className:"text-xs text-amber-400",children:"Skipped"}),s.jsx("div",{className:"text-lg font-bold text-amber-400",children:u})]})]}),s.jsx("ol",{className:"space-y-4",children:e.map((x,p)=>{const w=t[p],y=!w&&w!==0,j=w===x.answerIndex;return s.jsxs("li",{className:"rounded-2xl border border-base-border bg-white/5 p-4 md:p-5",children:[s.jsxs("div",{className:"flex items-start justify-between mb-3",children:[s.jsxs("div",{className:"flex-1",children:[s.jsxs("div",{className:"text-sm md:text-base font-medium",children:["Q",p+1,". ",x.prompt]}),x.category&&s.jsxs("div",{className:"text-xs text-base-muted mt-1",children:["Category: ",x.category," • Difficulty: ",x.difficulty||"Medium"]})]}),s.jsx("div",{className:"ml-2",children:y?s.jsx("span",{className:"px-2 py-1 rounded text-xs bg-amber-600/20 text-amber-400",children:"Skipped"}):j?s.jsx("span",{className:"px-2 py-1 rounded text-xs bg-green-600/20 text-green-400",children:"✓ Correct"}):s.jsx("span",{className:"px-2 py-1 rounded text-xs bg-red-600/20 text-red-400",children:"✗ Wrong"})})]}),s.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-3",children:x.options.map((C,v)=>{const f=w===v,h=v===x.answerIndex;let S="w-full text-left px-3 py-2 rounded-xl border transition-all ";return h?S+="bg-green-600/20 border-green-500/50 text-green-300":f&&!h?S+="bg-red-600/20 border-red-500/50 text-red-300":S+="bg-base-bg/40 border-base-border text-base-muted",s.jsxs("div",{className:S,children:[s.jsxs("span",{className:"font-semibold mr-2",children:[["A","B","C","D"][v],"."]}),C,h&&s.jsx("span",{className:"ml-2 text-green-400",children:"✓"}),f&&!h&&s.jsx("span",{className:"ml-2 text-red-400",children:"✗"})]},v)})}),x.explanation&&s.jsxs("div",{className:"mt-3 p-3 rounded-xl bg-white/5 border border-base-border",children:[s.jsx("div",{className:"text-xs font-semibold text-brand-blue mb-1",children:"Explanation:"}),s.jsx("div",{className:"text-sm text-base-muted",children:x.explanation})]})]},x.id||p)})}),s.jsxs("div",{className:"mt-6 flex gap-2 justify-center sticky bottom-4",children:[s.jsx("button",{className:"px-4 py-2.5 rounded-xl border border-base-border bg-base-card backdrop-blur",onClick:l,children:"Back to Results"}),i&&s.jsx("button",{className:"px-4 py-2.5 rounded-xl bg-gradient-to-r from-brand-blue to-brand-purple text-white font-medium",onClick:i,children:"Retake Quiz"})]})]})},Jx="qp_resume",wu="qp_mistakes",ju="qp_stats",ku="qp_lastset",Nu="qp_recent",Su="qp_review_snapshot",Zx=50,Wr=(e="")=>e.replace(/-/g," ").replace(/\b\w/g,t=>t.toUpperCase()),wi=(e="")=>e.toLowerCase().trim().replace(/[^\w\s-]/g,"").replace(/\s+/g,"-"),eg=(e,t)=>e.slice().sort(()=>Math.random()-.5).slice(0,t),f0=e=>{const t=e.slice();for(let n=t.length-1;n>0;n--){const r=Math.floor(Math.random()*(n+1));[t[n],t[r]]=[t[r],t[n]]}return t},tg=(e,t,n)=>Math.max(t,Math.min(n,e)),Qr=(e,t)=>{try{const n=localStorage.getItem(e);return n?JSON.parse(n):t}catch{return t}};async function ng(){const e="/data/quiz_questions_bank.csv",t=await fetch(e);if(!t.ok)throw new Error(`CSV not found at ${e}`);const n=await t.text(),{data:r}=mo.parse(n,{header:!0,skipEmptyLines:!0,transformHeader:o=>String(o).trim().toLowerCase()}),i={a:0,b:1,c:2,d:3};return r.map((o,a)=>{var p;const l=[o.option1,o.option2,o.option3,o.option4].map(w=>(w??"").trim());if(l.some(w=>!w))return null;let c=-1;const u=String(o.answer??"").trim();if(i[u.toLowerCase()]!==void 0)c=i[u.toLowerCase()];else{const w=l.findIndex(y=>y.toLowerCase()===u.toLowerCase());c=w>=0?w:0}const m=String(o.category??o.subject??"General Knowledge").trim(),x=String(o.difficulty??"medium").toLowerCase().trim();return{id:((p=o.id)==null?void 0:p.trim())||`q_${a}`,category:m,difficulty:x,prompt:String(o.question??"").trim(),options:l,answerIndex:c,explanation:String(o.explanation??"").trim()}}).filter(Boolean)}function rg(e,{categorySlug:t,difficulty:n,count:r}){console.log("=== BUILD SESSION DEBUG ==="),console.log("categorySlug:",t),console.log("difficulty:",n),console.log("count:",r),console.log("Total questions available:",e.length);const o=t==="mixed"?()=>!0:m=>wi(m.category)===t,a=n?m=>(m.difficulty||"medium")===n:()=>!0,l=e.filter(m=>o(m)&&a(m));if(console.log("Filtered pool size:",l.length),console.log("Sample categories from all questions:",[...new Set(e.slice(0,10).map(m=>`"${m.category}" -> "${wi(m.category)}"`))]),l.length===0)return console.error("No questions match the filter criteria!"),console.log("Available categories:",[...new Set(e.map(m=>wi(m.category)))]),{questions:[],poolSize:0};const u=eg(l,Math.min(r,l.length)).map(m=>{const x=f0([0,1,2,3]),p=x.map(y=>m.options[y]),w=x.indexOf(m.answerIndex);return{...m,options:p,answerIndex:w}});return console.log("Final questions:",u.length),{questions:u,poolSize:l.length}}function sg(){const e=ht(),{category:t}=jh(),n=$t(),{energy:r,useEnergy:i,player:o,addCoins:a,addXP:l,updateDailyStreak:c}=Ln(),u=new URLSearchParams(n.search),m=u.get("review")==="1",x=u.get("retake")==="1",p=n.state||{},w=p.mode||"quiz",y=String(p.difficulty||"medium").toLowerCase(),j=tg(Number(p.count||10),1,50),C=p.timer||{type:"per_q",seconds:45};p.resume,p.daily,p.source;const v=x||!!p.retake,f=!!p.fromHistory,h=w==="practice";console.log("Quiz Component - Mode Detection:",{routerState:p,mode:w,isPractice:h,location:n.pathname,state:n.state});const[S,_]=d.useState([]),[L,N]=d.useState(!0),[g,b]=d.useState(""),[k,E]=d.useState({questions:[]}),[M,H]=d.useState("quiz"),[Z,I]=d.useState(null),[W,Q]=d.useState(null),[R,z]=d.useState(0);d.useEffect(()=>{let B=!0;return(async()=>{try{const ee=await ng();if(!B)return;_(ee)}catch(ee){console.error(ee),b("Failed to load questions. Check /public/data/quiz_questions_bank.csv")}finally{N(!1)}})(),()=>{B=!1}},[]),d.useEffect(()=>{if(L||g||m||S.length===0)return;console.log("=== SESSION INIT ==="),console.log("Category:",t),console.log("Mode:",w),console.log("Difficulty:",y),console.log("Count:",j);const B=rg(S,{categorySlug:t,difficulty:y,count:j});if(B.questions.length===0){console.error("No questions found!"),console.log("Looking for category:",t),console.log("Available categories (first 10):",[...new Set(S.map(ee=>wi(ee.category)))].slice(0,10)),b(`No questions found for "${Wr(t)}" with difficulty "${y}"`);return}console.log("Session built with",B.questions.length,"questions"),E(B),Q(Date.now()),z(0),H("quiz")},[S,t,w,y,j,n.state,n.search]),d.useEffect(()=>{if(M!=="quiz"||!W)return;const B=setInterval(()=>{z(Date.now()-W)},1e3);return()=>clearInterval(B)},[M,W]);const D=d.useCallback(B=>{if(console.log("Quiz completed - Mode:",w,"isPractice:",h,"Results:",B),!B||!B.questions){console.error("Invalid results object:",B);return}const ee=B.questions.filter((P,F)=>B.answers[F]!==null&&B.answers[F]!==P.answerIndex).map(P=>P.id);try{const P=Qr(wu,[]),F=Array.from(new Set([...ee,...P]));localStorage.setItem(wu,JSON.stringify(F))}catch(P){console.error("Error saving mistakes:",P)}try{const P=Qr(ju,{sessions:[]});P.sessions.push({cat:Wr(t),mode:h?"practice":"quiz",total:B.total,correct:B.correct,skipped:B.skipped.filter(Boolean).length,ms:R,timestamp:Date.now(),earnedXP:h?0:B.correct*10,earnedCoins:h?0:B.correct*5}),localStorage.setItem(ju,JSON.stringify(P))}catch(P){console.error("Error saving stats:",P)}const ce={ts:Date.now(),slug:t,categoryLabel:Wr(t),mode:h?"practice":"quiz",difficulty:y,total:B.total,timer:h?null:C,ms:R,attempted:B.answers.filter(P=>P!==null).length,correct:B.correct,questions:B.questions,answers:B.answers,skipped:B.skipped,isPractice:h};try{localStorage.setItem(ku,JSON.stringify(ce)),localStorage.setItem(Su,JSON.stringify({questions:B.questions,answers:B.answers,skipped:B.skipped}));const P=Qr(Nu,[]),Y=[{id:ce.ts,ts:ce.ts,cat:ce.categoryLabel,slug:t,mode:h?"Practice":"Quiz",total:B.total,correct:B.correct,ms:R,snapshot:ce},...P].slice(0,Zx);localStorage.setItem(Nu,JSON.stringify(Y))}catch(P){console.error("Error saving snapshot:",P)}if(localStorage.removeItem(Jx),h&&B.earnedCoins?B.earnedCoins:!h&&B.correct>0&&B.correct*5,!h&&B.correct>0){const P=B.correct*10;l(P)}c(),I({...B,category:Wr(t),categorySlug:t,difficulty:y,mode:h?"practice":"quiz",elapsedMs:R,isPractice:h,hasTimer:!h,earnedXP:h?0:B.correct*10,earnedCoins:h?B.earnedCoins||0:B.correct*5}),H("results")},[t,w,C,R,h]),T=d.useCallback(()=>{f?e("/profile/history",{replace:!0,state:null}):e("/")},[f,e]),$=d.useCallback(()=>{console.log("Retake requested - Mode:",w,"isPractice:",h);const B=Qr(ku,null);if(!B||B.slug!==t){e(`/quiz/${t}?r=${Date.now()}`,{replace:!0,state:{mode:h?"practice":"quiz",difficulty:y,count:j,timer:h?null:C,retake:!0}});return}const ee=B.questions.map(ce=>{const P=f0([0,1,2,3]);return{...ce,options:P.map(F=>ce.options[F]),answerIndex:P.indexOf(ce.answerIndex)}});E({questions:ee,poolSize:ee.length}),Q(Date.now()),z(0),H("quiz"),window.scrollTo(0,0)},[t,w,y,j,C,e,h]),O=d.useCallback((B=null)=>{if(B)I(B);else if(!Z){const ee=Qr(Su,null);ee&&I({questions:ee.questions||[],answers:ee.answers||[],skipped:ee.skipped||[]})}H("review")},[Z]),re=d.useCallback(()=>{f?e("/profile/history",{replace:!0}):H("results")},[f,e]);return L?s.jsx("div",{className:"fixed inset-0 bg-inherit text-white flex items-center justify-center",children:s.jsx("div",{className:"text-sm text-base-muted",children:"Loading questions…"})}):g?s.jsx("div",{className:"fixed inset-0 bg-inherit text-white flex items-center justify-center",children:s.jsx("div",{className:"text-sm text-red-400",children:g})}):(console.log("Render - Current view:",M,"Session questions:",k.questions.length,"Mode:",w,"isPractice:",h),s.jsx("div",{className:"fixed inset-0 bg-inherit text-white z-0 overflow-x-hidden max-w-[100vw]",children:s.jsxs("div",{className:"h-full overflow-y-auto overscroll-y-none overflow-x-hidden touch-pan-y px-0 pt-[max(env(safe-area-inset-top),72px)] pb-[clamp(12px,env(safe-area-inset-bottom),20px)]",children:[M==="quiz"&&k.questions.length>0&&s.jsx(Ux,{session:k,mode:h?"practice":"quiz",category:Wr(t),difficulty:y,timerConfig:h?null:C,onComplete:D,onQuit:T,isPractice:h}),M==="results"&&Z&&s.jsx(Kx,{results:Z,onRetake:$,onReview:()=>O(Z),isRetake:v,isPractice:h,player:o,categories:c0,addCoins:a,onNavigate:(B,ee)=>{ee!=null&&ee.replace?e(B,{replace:!0,state:ee}):e(B,{state:ee})}}),M==="review"&&Z&&s.jsx(Xx,{questions:Z.questions||[],answers:Z.answers||[],skipped:Z.skipped||[],onBack:re,onRetake:$,fromHistory:f,isPractice:h})]})}))}const fn=[{label:"General Knowledge",slug:"general-knowledge",color:"#7C3AED",soon:!1},{label:"Current Affairs",slug:"current-affairs",color:"#2563EB",soon:!1},{label:"Fun Facts",slug:"fun-facts",color:"#EF4444",soon:!1},{label:"Science",slug:"science",color:"#10B981",soon:!1},{label:"History",slug:"history",color:"#F59E0B",soon:!0},{label:"Geography",slug:"geography",color:"#FACC15",soon:!0},{label:"Cat 1",slug:"cat-1",color:"#06B6D4",soon:!0},{label:"Cat 2",slug:"cat-2",color:"#D946EF",soon:!0}],Fn=360/fn.length,ig=42,Go=3e3,Cu=10,Eu=260,og="cubic-bezier(.15,.7,.1,1)",ag="cubic-bezier(.2,.7,.2,1)",dn=5,lg=5,cg=(e="")=>String(e).toLowerCase().trim().replace(/[^\w\s-]/g,"").replace(/\s+/g,"-");function ug({muted:e=!1,size:t=18}){return s.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24","aria-hidden":"true",children:[s.jsx("path",{d:"M3 9h4l5-4v14l-5-4H3z",fill:"currentColor"}),!e&&s.jsxs(s.Fragment,{children:[s.jsx("path",{d:"M16 8c1.5 1.5 1.5 6 0 7.5",stroke:"currentColor",strokeWidth:"2",fill:"none",strokeLinecap:"round"}),s.jsx("path",{d:"M19 6c3 3 3 10 0 13",stroke:"currentColor",strokeWidth:"2",fill:"none",strokeLinecap:"round"})]}),e&&s.jsx("line",{x1:"3",y1:"21",x2:"21",y2:"3",stroke:"#EF4444",strokeWidth:"2.5",strokeLinecap:"round"})]})}function dg({q:e,locked:t,onPick:n,result:r}){if(!e)return null;const i=[e.option1,e.option2,e.option3,e.option4];return s.jsxs("div",{className:"mt-5 rounded-3xl bg-white/5 border border-white/10 p-4",children:[s.jsx("div",{className:"text-sm text-base-muted mb-1",children:"Quick question"}),s.jsx("div",{className:"text-xl font-semibold mb-4",children:e.question}),i.map((o,a)=>{const l=r&&o===e.answer,c=r&&r.pick===o&&o!==e.answer;return s.jsx("button",{disabled:t||!!r,onClick:()=>n(o),className:["w-full text-left px-4 py-2 rounded-xl mb-2 border transition",!r&&!t?"bg-white/5 hover:bg-white/10 border-white/10":"bg-white/5 border-white/10",l?"bg-green-600/20 border-green-400/60 text-green-200":"",c?"bg-red-600/20 border-red-400/60 text-red-200":""].join(" "),children:o},a)}),r&&s.jsxs("div",{className:"mt-3 text-sm",children:[r.correct?s.jsx("span",{className:"text-green-400 font-medium",children:"✅ Correct!"}):s.jsxs("span",{className:"text-red-400 font-medium",children:["❌ Not quite. Answer: ",s.jsx("b",{children:e.answer})]}),e.explanation&&s.jsxs("div",{className:"text-xs text-base-muted mt-1",children:["Tip: ",e.explanation]})]})]})}function fg(){const e=ht(),[t]=Zt("/sounds/correct.mp3",{volume:.7}),[n]=Zt("/sounds/wrong.mp3",{volume:.7}),[r,i]=d.useState(()=>[{name:"Player 1",color:"#60A5FA",scores:Array(dn).fill(null)},{name:"Player 2",color:"#F472B6",scores:Array(dn).fill(null)}]),[o,a]=d.useState(0),[l,c]=d.useState(1),u=r.reduce((P,F)=>P+F.scores.reduce((Y,V)=>Y+(V??0),0),0),[m,x]=d.useState(!0),p=d.useRef(null);d.useEffect(()=>{const P=new Audio("/sounds/spin.mp3");return P.loop=!0,P.volume=.7,p.current=P,()=>{try{P.pause(),P.src=""}catch{}}},[]);const w=()=>{if(m&&p.current)try{p.current.currentTime=0,p.current.play()}catch{}},y=()=>{if(p.current)try{p.current.pause(),p.current.currentTime=0}catch{}},[j,C]=d.useState(0),[v,f]=d.useState("none"),[h,S]=d.useState(!1),[_,L]=d.useState(null),[N,g]=d.useState(null),b=d.useMemo(()=>typeof window<"u"?window.matchMedia("(prefers-reduced-motion: reduce)").matches:!1,[]),[k,E]=d.useState([]);d.useEffect(()=>{(async()=>{try{const P=await fetch("/data/quiz_questions_bank.csv").then(K=>K.text()),{data:F}=mo.parse(P,{header:!0,skipEmptyLines:!0,transformHeader:K=>String(K).trim().toLowerCase()}),Y={a:0,b:1,c:2,d:3},V=F.map((K,ue)=>{var ae;const X=(K.question??"").trim();if(!X)return null;const se=[K.option1,K.option2,K.option3,K.option4].map(je=>String(je??"").trim());if(se.some(je=>!je))return null;let q=String(K.answer??"").trim(),G=Y[q.toLowerCase()];if(G===void 0){const je=se.findIndex(we=>we.toLowerCase()===q.toLowerCase());G=je>=0?je:0}const J=se[G];return{id:((ae=K.id)==null?void 0:ae.trim())||`ps_${ue}`,question:X,option1:se[0],option2:se[1],option3:se[2],option4:se[3],answer:J,explanation:String(K.explanation??"").trim(),catSlug:cg(K.category??K.subject??"general knowledge"),difficulty:String(K.difficulty??"medium").toLowerCase().trim()}}).filter(Boolean);E(V)}catch{E([])}})()},[]);const[M,H]=d.useState(null),[Z,I]=d.useState(null),[W,Q]=d.useState(!1),R=P=>(P%360+360)%360,z=P=>R(P),D=l>dn;function T(){if(r.length>=4)return;const P=["#60A5FA","#F472B6","#F59E0B","#34D399","#F87171","#A78BFA"],F=P[(r.length*2+1)%P.length];i(Y=>[...Y,{name:`Player ${Y.length+1}`,color:F,scores:Array(dn).fill(null)}])}function $(){r.length<=2||(i(P=>P.slice(0,-1)),a(P=>Math.min(P,r.length-2)))}function O(P){i(F=>F.map((Y,V)=>V===o?{...Y,scores:Y.scores.map((K,ue)=>ue===l-1?P:K)}:Y))}function re(){if(h||D)return;L(null),g(null),H(null),I(null),S(!0),w();const P=Math.floor(Math.random()*fn.length),F=fn[P],Y=Fn*.28,V=(Math.random()*2-1)*Y,K=R(j),ue=180,se=P*Fn+Fn/2+V;let q=z(se-K-ue);const G=ig*360+q,J=j+G+Cu;f(`transform ${b?800:Go}ms ${og}`),C(J);try{navigator.vibrate&&!b&&navigator.vibrate([10,40,10])}catch{}setTimeout(()=>{f(`transform ${b?160:Eu}ms ${ag}`),C(ae=>ae-Cu)},b?800:Go),setTimeout(()=>{if(y(),S(!1),L(P),g(F.color),F.soon)return;const ae=k.filter(we=>we.catSlug===F.slug&&we.difficulty==="easy"),je=ae.length?ae:k.filter(we=>we.catSlug===F.slug);if(je.length){const we=je[Math.floor(Math.random()*je.length)];H(we)}else H({question:"No question found for this category yet. Try re-spinning!",option1:"Okay",option2:"Okay",option3:"Okay",option4:"Okay",answer:"Okay",explanation:""})},(b?800:Go)+(b?160:Eu)+40)}function B(P){if(!M||Z)return;const F=P===M.answer;if(I({correct:F,pick:P}),F){t(),Q(!0),setTimeout(()=>Q(!1),900);try{navigator.vibrate&&navigator.vibrate([8,16])}catch{}O(lg)}else{n();try{navigator.vibrate&&navigator.vibrate([4])}catch{}O(0)}}function ee(){const P=(o+1)%r.length,F=P===0?l+1:l;a(P),c(F),L(null),g(null),H(null),I(null)}function ce(){const P=r.map(V=>V.scores.reduce((K,ue)=>K+(ue??0),0)),F=Math.max(...P),Y=r.filter((V,K)=>P[K]===F).map(V=>V.name).join(", ");alert(`${Y} win${Y.includes(",")?"":"s"} the pot of ${u} coins! 🎉`),e("/play")}return s.jsxs("div",{className:"min-h-screen bg-black text-white",children:[W&&s.jsx(u0,{numberOfPieces:120,recycle:!1}),s.jsxs("div",{className:"mx-auto max-w-md px-5 pt-[calc(env(safe-area-inset-top)+1.25rem)] pb-[calc(5.25rem+env(safe-area-inset-bottom))]",children:[s.jsxs("header",{className:"flex items-center justify-between mb-4",children:[s.jsx("button",{onClick:()=>e("/play"),className:"h-10 w-10 grid place-items-center rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition","aria-label":"Back",children:"←"}),s.jsxs("div",{className:"text-center",children:[s.jsx("h1",{className:"text-2xl font-bold",children:"Party Spin"}),s.jsx("p",{className:"text-sm text-base-muted",children:"Pass & play • Winner takes the pot"})]}),s.jsx("button",{onClick:()=>x(P=>!P),className:"h-10 w-10 grid place-items-center rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition","aria-label":m?"Mute sound":"Unmute sound",title:m?"Sound on":"Sound off",children:s.jsx(ug,{muted:!m})})]}),s.jsxs("section",{className:"rounded-2xl border border-white/10 bg-white/5 p-3 mb-4",children:[s.jsxs("div",{className:"flex items-center justify-between mb-2",children:[s.jsxs("div",{className:"text-sm",children:["Round ",s.jsx("b",{children:Math.min(l,dn)}),"/",s.jsx("b",{children:dn})]}),s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx("button",{onClick:T,className:"btn-ghost px-2 py-1 text-sm",children:"+"}),s.jsx("span",{className:"text-sm text-base-muted",children:"Player"}),s.jsx("button",{onClick:$,className:"btn-ghost px-2 py-1 text-sm",children:"−"})]}),s.jsxs("div",{className:"text-sm",children:["Pot: ",s.jsx("b",{className:"text-yellow-300",children:u})," 🪙"]})]}),s.jsx("div",{className:"overflow-x-auto",children:s.jsxs("table",{className:"w-full table-fixed text-sm tracking-tight tabular-nums",children:[s.jsxs("colgroup",{children:[s.jsx("col",{style:{width:"42%"}}),s.jsx("col",{style:{width:"9%"}}),s.jsx("col",{style:{width:"9%"}}),s.jsx("col",{style:{width:"9%"}}),s.jsx("col",{style:{width:"9%"}}),s.jsx("col",{style:{width:"9%"}}),s.jsx("col",{style:{width:"13%"}})]}),s.jsx("thead",{children:s.jsxs("tr",{className:"text-base-muted",children:[s.jsx("th",{className:"text-left font-medium py-1 pr-1",children:"Player"}),Array.from({length:dn}).map((P,F)=>s.jsxs("th",{className:"font-medium text-center",children:["R",F+1]},F)),s.jsx("th",{className:"font-medium text-right pr-1",children:"Total"})]})}),s.jsx("tbody",{children:r.map((P,F)=>{const Y=P.scores.reduce((K,ue)=>K+(ue??0),0),V=F===o;return s.jsxs("tr",{className:V?"bg-white/6":"",children:[s.jsx("td",{className:"py-1 pr-1",children:s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx("span",{className:"inline-block h-3 w-3 rounded-full shrink-0",style:{background:P.color}}),s.jsx("input",{className:"bg-transparent outline-none font-semibold w-full",value:P.name,onChange:K=>i(ue=>ue.map((X,se)=>se===F?{...X,name:K.target.value}:X))})]})}),P.scores.map((K,ue)=>s.jsx("td",{className:"text-center",children:K===null?"–":K},ue)),s.jsx("td",{className:"text-right pr-1 font-semibold",children:Y})]},F)})})]})})]}),s.jsx("section",{className:"flex flex-col items-center",children:s.jsxs("div",{className:"relative w-[320px] h-[320px] md:w-[380px] md:h-[380px] rounded-full select-none",children:[N&&s.jsx("div",{className:"pointer-events-none absolute -inset-2 rounded-full",style:{boxShadow:`0 0 0 6px ${N}33, 0 0 30px 8px ${N}44`}}),s.jsx("div",{className:"absolute inset-0 rounded-full border border-white/10 shadow-2xl bg-black/20 overflow-hidden will-change-transform",style:{transform:`rotate(${j}deg)`,transition:v},"aria-label":"Category wheel",role:"group",children:s.jsxs("svg",{width:"100%",height:"100%",viewBox:"0 0 100 100",className:"block",children:[fn.map((P,F)=>{const Y=F*Fn,V=Y+Fn,K=Fn>180?1:0,ue=Math.PI*Y/180,X=Math.PI*V/180,se=50+50*Math.cos(ue),q=50-50*Math.sin(ue),G=50+50*Math.cos(X),J=50-50*Math.sin(X),ae=_===F;return s.jsxs("g",{style:{opacity:_==null?.95:ae?1:.78,filter:_!=null&&!ae?"blur(0.6px)":"none"},children:[s.jsx("path",{d:`M50,50 L${se},${q} A50,50 0 ${K} 0 ${G},${J} Z`,fill:P.color,stroke:ae?`${P.color}AA`:"rgba(255,255,255,0.14)",strokeWidth:ae?"1.2":"0.6"}),s.jsx("text",{x:"50",y:"50",fill:"#ffffff",fontSize:"4",fontWeight:"700",dominantBaseline:"middle",transform:`rotate(${Y+Fn/2} 50 50) translate(12 0)`,children:s.jsxs("tspan",{children:[P.label,P.soon?" (soon)":""]})})]},P.slug)}),s.jsx("circle",{cx:"50",cy:"50",r:"9",fill:"rgba(0,0,0,0.55)",stroke:"white",strokeOpacity:"0.25"})]})}),s.jsx("button",{onClick:re,disabled:h||D,className:["absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2","h-16 w-16 rounded-full grid place-items-center","bg-white text-black font-extrabold shadow-soft transition active:scale-[0.98]",h||D?"opacity-60 cursor-not-allowed":"hover:bg-gray-200"].join(" "),"aria-label":"Spin the wheel",children:"SPIN"}),s.jsx("div",{className:"absolute left-1/2 -translate-x-1/2 -bottom-3 z-20",children:s.jsx("svg",{width:"22",height:"22",viewBox:"0 0 24 24",children:s.jsx("path",{d:"M12 4 L20 20 L4 20 Z",fill:"#ffffff"})})}),_!=null&&!h&&s.jsx("div",{className:"absolute left-1/2 -translate-x-1/2 -bottom-10",children:s.jsxs("div",{className:"px-3 py-1 rounded-full bg-white/10 border border-white/20 text-sm backdrop-blur",children:[s.jsx("span",{className:"inline-block h-2.5 w-2.5 rounded-full mr-2 align-middle",style:{background:fn[_].color}}),fn[_].label]})})]})}),s.jsx("section",{className:"mt-4",children:D?s.jsxs("div",{className:"rounded-2xl border border-white/10 bg-white/5 p-4",children:[s.jsx("div",{className:"text-xl font-semibold mb-2",children:"Match Over"}),s.jsxs("p",{className:"text-sm text-base-muted mb-3",children:["Top score takes the pot of ",s.jsx("b",{className:"text-yellow-300",children:u})," coins."]}),s.jsx("button",{className:"btn-primary w-full",onClick:ce,children:"End match"})]}):_!=null&&fn[_].soon?s.jsxs("div",{className:"rounded-2xl border border-white/10 bg-white/5 p-4",children:[s.jsx("div",{className:"text-lg font-semibold mb-1",children:fn[_].label}),s.jsx("p",{className:"text-sm text-base-muted mb-3",children:"This category is arriving soon. Spin again!"}),s.jsx("button",{className:"btn-primary",onClick:re,disabled:h,children:"Re-spin"})]}):s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"text-sm text-center text-base-muted mb-1",children:["Turn: ",s.jsx("span",{style:{color:r[o].color},children:r[o].name})," ","| Round ",l,"/",dn]}),s.jsx(dg,{q:M,locked:h||!M,onPick:B,result:Z}),Z&&s.jsx("div",{className:"mt-3 flex justify-center",children:s.jsx("button",{className:"btn-primary",onClick:ee,children:"Next turn"})})]})})]}),s.jsx("div",{className:"pointer-events-none fixed inset-x-0 bottom-0 bg-[#0B0F1A]",style:{height:"calc(5.25rem + env(safe-area-inset-bottom))"},"aria-hidden":!0})]})}function mg(){const e=ht(),[t,n]=d.useState(""),{player:r,levelProgress:i}=Ln(),o=()=>{try{const u=JSON.parse(localStorage.getItem("qp_stats")||'{"sessions":[]}'),m=new Date().setHours(0,0,0,0);return u.sessions.filter(p=>new Date(p.timestamp).setHours(0,0,0,0)===m&&p.mode==="quiz").reduce((p,w)=>p+(w.earnedCoins||0),0)}catch{return 0}},a={name:(r==null?void 0:r.name)||"Player",rank:23,streak:(r==null?void 0:r.currentStreak)||0,todayQuizzes:3,todayCoins:o()};d.useEffect(()=>{const u=new Date().getHours();u<12?n("Good morning"):u<17?n("Good afternoon"):n("Good evening")},[]);const l=`
    rounded-3xl p-5 text-left text-white 
    transition-all duration-300 ease-out
    active:scale-[0.97] hover:scale-[1.02]
    shadow-[0_8px_32px_rgba(0,0,0,0.3)]
    hover:shadow-[0_12px_48px_rgba(0,0,0,0.4)]
    relative overflow-hidden
    before:absolute before:inset-0 before:bg-white/5 before:opacity-0 
    hover:before:opacity-100 before:transition-opacity before:duration-300
  `,c=i.required>0?i.current/i.required*100:0;return s.jsxs("div",{className:"min-h-full bg-[#0B0C10] text-white pt-12 px-3",children:[s.jsxs("div",{className:"mb-6",children:[s.jsxs("div",{className:"flex items-center justify-between mb-4",children:[s.jsxs("div",{children:[s.jsxs("h1",{className:"text-2xl font-bold",children:[t," 👋"]}),s.jsx("p",{className:"text-white/60 text-sm",children:"Ready for today's challenge?"})]}),s.jsx("button",{onClick:()=>e("/profile/settings"),className:"w-12 h-12 rounded-2xl bg-white/10 border border-white/20 grid place-items-center hover:bg-white/20 transition",children:s.jsx("span",{className:"text-xl",children:"⚙️"})})]}),s.jsxs("div",{className:"rounded-3xl bg-gradient-to-r from-slate-800/50 to-slate-900/50 border border-white/10 p-4 backdrop-blur-sm",children:[s.jsxs("div",{className:"flex items-center gap-4 mb-3",children:[s.jsx("div",{className:"w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 grid place-items-center text-2xl font-bold",children:a.name[0]}),s.jsxs("div",{className:"flex-1",children:[s.jsx("div",{className:"text-lg font-semibold",children:r.name||"Player"}),s.jsxs("div",{className:"text-white/60 text-sm",children:["Level ",r.level]})]}),s.jsxs("div",{className:"text-right",children:[s.jsxs("div",{className:"text-yellow-400 font-bold text-lg",children:[r.coins," 🪙"]}),s.jsxs("div",{className:"text-white/60 text-sm",children:["Rank #",a.rank]})]})]}),s.jsxs("div",{className:"mb-3",children:[s.jsxs("div",{className:"flex justify-between text-xs text-white/60 mb-1",children:[s.jsx("span",{children:"XP Progress"}),s.jsxs("span",{children:[i.current,"/",i.required]})]}),s.jsx("div",{className:"h-2 bg-white/10 rounded-full overflow-hidden",children:s.jsx("div",{className:"h-full bg-gradient-to-r from-blue-400 to-purple-500 rounded-full transition-all duration-1000 ease-out",style:{width:`${c}%`}})})]}),s.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[s.jsxs("div",{className:"text-center p-2 rounded-xl bg-white/5",children:[s.jsxs("div",{className:"text-orange-400 font-bold text-lg",children:["🔥 ",a.streak]}),s.jsx("div",{className:"text-white/60 text-xs",children:"Day Streak"})]}),s.jsxs("div",{className:"text-center p-2 rounded-xl bg-white/5",children:[s.jsxs("div",{className:"text-green-400 font-bold text-lg",children:["+",a.todayCoins]}),s.jsx("div",{className:"text-white/60 text-xs",children:"Today"})]})]})]})]}),s.jsxs("button",{onClick:()=>e("/profile/leaderboard"),className:`${l} w-full mb-4 bg-gradient-to-br from-[#5AA9FF] via-[#6C63FF] to-[#9C6BFF]`,children:[s.jsx("div",{className:"absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-8 translate-x-8 animate-pulse"}),s.jsxs("div",{className:"relative flex items-start justify-between",children:[s.jsxs("div",{children:[s.jsx("div",{className:"text-xs opacity-90 mb-1",children:"🏆 Rank & Coins"}),s.jsx("div",{className:"text-3xl font-extrabold tracking-tight mb-2",children:"LEADERBOARD"}),s.jsxs("div",{className:"text-xs opacity-75 flex items-center gap-2",children:[s.jsx("span",{className:"w-2 h-2 bg-green-400 rounded-full animate-pulse"}),"Weekly reset · Ends in 2d 14h"]})]}),s.jsx("div",{className:"w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm grid place-items-center text-2xl border border-white/30",children:"🏆"})]})]}),s.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[s.jsxs("button",{onClick:()=>e("/profile/history"),className:`${l} bg-gradient-to-br from-[#D19A00] to-[#C94B4B] relative`,children:[s.jsx("div",{className:"absolute top-2 right-2 w-3 h-3 bg-white/20 rounded-full"}),s.jsx("div",{className:"text-3xl mb-3",children:"📊"}),s.jsx("div",{className:"text-sm font-bold mb-1",children:"HISTORY"}),s.jsx("div",{className:"text-[11px] opacity-80",children:"Quizzes & Practice"}),s.jsxs("div",{className:"text-[10px] opacity-60 mt-1",children:["+",a.todayQuizzes," today"]})]}),s.jsxs("button",{onClick:()=>e("/profile/rewards"),className:`${l} bg-gradient-to-br from-[#2EB872] to-[#1EA07A] relative`,children:[s.jsx("div",{className:"absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full animate-bounce"}),s.jsx("div",{className:"text-3xl mb-3",children:"🎁"}),s.jsx("div",{className:"text-sm font-bold mb-1",children:"REWARDS"}),s.jsx("div",{className:"text-[11px] opacity-80",children:"Claim & Redeem"}),s.jsx("div",{className:"text-[10px] opacity-60 mt-1",children:"2 available"})]}),s.jsxs("button",{onClick:()=>e("/profile/badges"),className:`${l} bg-gradient-to-br from-[#E65C00] to-[#F9D423] relative`,children:[s.jsx("div",{className:"absolute -top-1 -right-1 w-6 h-6 bg-purple-600 rounded-full grid place-items-center text-[10px] font-bold animate-pulse",children:"NEW"}),s.jsx("div",{className:"text-3xl mb-3",children:"🏅"}),s.jsx("div",{className:"text-sm font-bold mb-1",children:"BADGES"}),s.jsx("div",{className:"text-[11px] opacity-80",children:"Collectables"}),s.jsx("div",{className:"text-[10px] opacity-60 mt-1",children:"4/15 unlocked"})]}),s.jsxs("button",{onClick:()=>e("/profile/achievements"),className:`${l} bg-gradient-to-br from-[#5D26C1] to-[#A17FE0] relative`,children:[s.jsx("div",{className:"text-3xl mb-3",children:"🎯"}),s.jsx("div",{className:"text-sm font-bold mb-1",children:"ACHIEVEMENTS"}),s.jsx("div",{className:"text-[11px] opacity-80",children:"Milestones"}),s.jsx("div",{className:"text-[10px] opacity-60 mt-1",children:"67% complete"})]})]}),s.jsxs("div",{className:"mt-4 space-y-3",children:[s.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[s.jsx("button",{onClick:()=>e("/profile/streaks"),className:`${l} bg-gradient-to-r from-orange-600/80 to-red-600/80 backdrop-blur-sm border border-orange-500/30`,children:s.jsxs("div",{className:"flex items-center gap-3",children:[s.jsx("div",{className:"text-2xl",children:"🔥"}),s.jsxs("div",{children:[s.jsx("div",{className:"text-sm font-bold",children:"STREAK"}),s.jsxs("div",{className:"text-[11px] opacity-80",children:[a.streak," days strong"]})]})]})}),s.jsx("button",{onClick:()=>e("/profile/quests"),className:`${l} bg-gradient-to-r from-blue-600/80 to-cyan-600/80 backdrop-blur-sm border border-blue-500/30`,children:s.jsxs("div",{className:"flex items-center gap-3",children:[s.jsx("div",{className:"text-2xl",children:"⚡"}),s.jsxs("div",{children:[s.jsx("div",{className:"text-sm font-bold",children:"QUESTS"}),s.jsx("div",{className:"text-[11px] opacity-80",children:"2 active goals"})]})]})})]}),s.jsx("button",{onClick:()=>e("/profile/settings"),className:`${l} w-full bg-gradient-to-r from-slate-700/50 to-slate-800/50 backdrop-blur-sm border border-white/10`,children:s.jsxs("div",{className:"flex items-center justify-between",children:[s.jsxs("div",{className:"flex items-center gap-4",children:[s.jsx("div",{className:"w-12 h-12 rounded-2xl bg-white/10 grid place-items-center text-xl",children:"⚙️"}),s.jsxs("div",{children:[s.jsx("div",{className:"text-sm font-bold",children:"SETTINGS"}),s.jsx("div",{className:"text-[11px] opacity-70",children:"Customize your experience"})]})]}),s.jsx("div",{className:"text-white/40",children:"→"})]})})]}),s.jsx("div",{className:"h-6"})]})}const Hr="🪙",Zs={global:[{rank:1,name:"Bryan Wolf",handle:"@bryan",score:43,avatar:"/profile/rank1.png",trend:"+5",streak:12,country:"🇺🇸"},{rank:2,name:"Meghan Jess…",handle:"@meghan",score:40,avatar:"/profile/rank2.png",trend:"+2",streak:8,country:"🇨🇦"},{rank:3,name:"Alex Turner",handle:"@alex",score:38,avatar:"/profile/rank3.png",trend:"±0",streak:15,country:"🇬🇧"},{rank:4,name:"Marsha Fisher",handle:"@marsha",score:36,trend:"-1",streak:5,country:"🇦🇺"},{rank:5,name:"Juanita Cormier",handle:"@juanita",score:35,trend:"+1",streak:3,country:"🇲🇽"},{rank:6,name:"You",handle:"@you",score:34,you:!0,avatar:"/profile/avatar.png",trend:"+3",streak:7,country:"🇮🇳"},{rank:7,name:"Tamara Schmidt",handle:"@tamara",score:33,trend:"-2",streak:2,country:"🇩🇪"},{rank:8,name:"Ricardo Veum",handle:"@ricardo",score:32,trend:"+1",streak:4,country:"🇧🇷"}],friends:[{rank:1,name:"You",handle:"@you",score:34,you:!0,avatar:"/profile/avatar.png",trend:"+2",streak:7,country:"🇮🇳"},{rank:2,name:"Sarah Chen",handle:"@sarah",score:31,trend:"-1",streak:4,country:"🇸🇬",friend:!0},{rank:3,name:"Mike Johnson",handle:"@mike",score:29,trend:"+3",streak:2,country:"🇺🇸",friend:!0},{rank:4,name:"Priya Sharma",handle:"@priya",score:27,trend:"±0",streak:5,country:"🇮🇳",friend:!0},{rank:5,name:"David Kim",handle:"@david",score:25,trend:"+1",streak:3,country:"🇰🇷",friend:!0},{rank:6,name:"Emma Wilson",handle:"@emma",score:23,trend:"-2",streak:1,country:"🇬🇧",friend:!0}],india:[{rank:1,name:"Rohit Sharma",handle:"@rohit",score:45,trend:"+4",streak:10,country:"🇮🇳"},{rank:2,name:"Priya Patel",handle:"@priya",score:42,trend:"+1",streak:8,country:"🇮🇳"},{rank:3,name:"You",handle:"@you",score:34,you:!0,avatar:"/profile/avatar.png",trend:"+3",streak:7,country:"🇮🇳"},{rank:4,name:"Arjun Singh",handle:"@arjun",score:32,trend:"-1",streak:5,country:"🇮🇳"},{rank:5,name:"Kavya Reddy",handle:"@kavya",score:30,trend:"+2",streak:3,country:"🇮🇳"},{rank:6,name:"Vikram Gupta",handle:"@vikram",score:28,trend:"±0",streak:4,country:"🇮🇳"}]},ei=[{name:"Diamond",min:40,color:"from-cyan-400 to-blue-600",icon:"💎"},{name:"Gold",min:30,color:"from-yellow-400 to-orange-500",icon:"🥇"},{name:"Silver",min:20,color:"from-gray-300 to-gray-500",icon:"🥈"},{name:"Bronze",min:10,color:"from-orange-600 to-red-600",icon:"🥉"}];function pg(){var p,w;const e=ht(),{player:t}=Ln(),n={global:Zs.global.map(y=>y.you?{...y,name:(t==null?void 0:t.name)||"You",score:(t==null?void 0:t.coins)||0,streak:(t==null?void 0:t.currentStreak)||0}:y),friends:Zs.friends.map(y=>y.you?{...y,name:(t==null?void 0:t.name)||"You",score:(t==null?void 0:t.coins)||0,streak:(t==null?void 0:t.currentStreak)||0}:y),india:Zs.india.map(y=>y.you?{...y,name:(t==null?void 0:t.name)||"You",score:(t==null?void 0:t.coins)||0,streak:(t==null?void 0:t.currentStreak)||0}:y)};console.log("Debug - Player coins:",t==null?void 0:t.coins),console.log("Debug - Friends data:",n.friends[0]);const[r,i]=d.useState({days:2,hours:14,minutes:17}),[o,a]=d.useState("global"),l=n[o]||n.global;console.log("Player coins:",t==null?void 0:t.coins,"Current user score:",(p=l.find(y=>y.you))==null?void 0:p.score);const c=l.find(y=>y.you),u=l.slice(0,3),m=l.slice(3);d.useEffect(()=>{const y=j=>{j.preventDefault(),e(-1)};return window.addEventListener("popstate",y),()=>{window.removeEventListener("popstate",y)}},[e]),d.useEffect(()=>{const y=setInterval(()=>{i(j=>j.minutes>0?{...j,minutes:j.minutes-1}:j.hours>0?{...j,hours:j.hours-1,minutes:59}:j.days>0?{...j,days:j.days-1,hours:23,minutes:59}:j)},6e4);return()=>clearInterval(y)},[]);const x=y=>{const j=Math.max(...l.map(v=>v.score)),C=y/j*100;return C>=90?ei[0]:C>=70?ei[1]:C>=40?ei[2]:ei[3]};return s.jsxs("div",{className:"min-h-screen bg-black text-white pt-12",children:[s.jsxs("div",{className:"flex items-center justify-between mb-5",children:[s.jsx("button",{onClick:()=>e("/profile",{replace:!0}),className:"px-3 py-1.5 rounded-xl border border-white/10 bg-white/5 text-sm hover:bg-white/10 transition",children:"← Back"}),s.jsxs("div",{className:"text-center",children:[s.jsx("div",{className:"text-lg font-bold",children:"🏆 Leaderboard"}),s.jsxs("div",{className:"text-xs text-white/60",children:["Ends in ",r.days,"d ",r.hours,"h ",r.minutes,"m"]})]}),s.jsx("button",{className:"px-3 py-1.5 rounded-xl border border-white/10 bg-white/5 text-sm hover:bg-white/10 transition",children:"📊"})]}),s.jsxs("div",{className:`mb-5 rounded-2xl bg-gradient-to-r ${x(c==null?void 0:c.score).color} p-4 text-center relative overflow-hidden`,children:[s.jsx("div",{className:"absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -translate-y-10 translate-x-10 animate-pulse"}),s.jsx("div",{className:"absolute bottom-0 left-0 w-16 h-16 bg-white/5 rounded-full translate-y-8 -translate-x-8"}),s.jsxs("div",{className:"relative z-10",children:[s.jsx("div",{className:"text-2xl mb-1",children:x(c==null?void 0:c.score).icon}),s.jsxs("div",{className:"text-sm font-bold text-white",children:[x(c==null?void 0:c.score).name," League"]}),s.jsx("div",{className:"text-xs text-white/80",children:o==="friends"?"Competing with friends!":"You're competing with the best!"})]})]}),s.jsx("div",{className:"flex gap-2 mb-5",children:[{key:"global",label:"🌍 Global",count:"10M+"},{key:"friends",label:"👥 Friends",count:Zs.friends.length},{key:"india",label:"🇮🇳 India",count:"2.5M"}].map(y=>s.jsxs("button",{onClick:()=>a(y.key),className:`flex-1 px-2 py-2 rounded-xl text-xs font-semibold transition-all duration-300 ${o===y.key?"bg-lime-500 text-black shadow-lg scale-105":"border border-white/10 bg-white/5 hover:bg-white/10"}`,children:[s.jsx("div",{children:y.label}),s.jsx("div",{className:`text-[10px] ${o===y.key?"text-black/70":"text-white/60"}`,children:y.count})]},y.key))}),s.jsx("div",{className:"mb-5 rounded-2xl bg-gradient-to-r from-lime-500/20 to-green-500/20 border border-lime-500/30 p-3",children:s.jsxs("div",{className:"flex items-center justify-between",children:[s.jsxs("div",{className:"flex items-center gap-3",children:[s.jsx("div",{className:"w-10 h-10 rounded-xl bg-lime-500/20 grid place-items-center text-lg",children:"🧑‍💻"}),s.jsxs("div",{children:[s.jsx("div",{className:"font-bold text-lime-400 text-sm",children:"Your Position"}),s.jsxs("div",{className:"text-xs text-white/70 flex items-center gap-2",children:[s.jsxs("span",{children:["Rank #",c==null?void 0:c.rank]}),s.jsx("span",{className:`px-1.5 py-0.5 rounded-full text-[9px] font-bold ${c!=null&&c.trend.startsWith("+")?"bg-green-500/20 text-green-400":c!=null&&c.trend.startsWith("-")?"bg-red-500/20 text-red-400":"bg-gray-500/20 text-gray-400"}`,children:c==null?void 0:c.trend}),s.jsxs("span",{className:"text-white/50 text-[10px]",children:["in ",o==="global"?"Global":o==="friends"?"Friends":"India"]})]})]})]}),s.jsxs("div",{className:"text-right",children:[s.jsxs("div",{className:"text-lg font-bold text-lime-400",children:[c==null?void 0:c.score," ",Hr]}),s.jsxs("div",{className:"text-xs text-white/60",children:["🔥 ",c==null?void 0:c.streak," streak"]})]})]})}),s.jsxs("div",{className:"mb-6",children:[s.jsx("h3",{className:"text-center text-sm font-semibold text-white/80 mb-4",children:"👑 Hall of Fame"}),s.jsxs("div",{className:"bg-gradient-to-b from-white/5 to-white/10 rounded-2xl p-4 border border-white/10 relative overflow-hidden",children:[s.jsx("div",{className:"absolute top-4 left-6 text-2xl opacity-40 animate-pulse",children:"🏆"}),s.jsx("div",{className:"absolute top-8 right-8 text-lg opacity-40 animate-bounce",style:{animationDelay:"1s"},children:"✨"}),s.jsx("div",{className:"absolute bottom-6 left-12 text-xl opacity-10 animate-pulse",style:{animationDelay:"2s"},children:"🥇"}),s.jsx("div",{className:"absolute bottom-4 right-6 text-lg opacity-40 animate-bounce",style:{animationDelay:"0.5s"},children:"⭐"}),s.jsxs("div",{className:"flex items-end justify-center gap-8 relative z-10",children:[u[1]&&s.jsxs("div",{className:"flex flex-col items-center",children:[s.jsxs("div",{className:"relative mb-2",children:[s.jsx(ti,{src:u[1].avatar,fallback:u[1].name,size:56}),s.jsx("div",{className:"absolute -bottom-1 left-1/2 -translate-x-1/2 w-7 h-7 bg-gradient-to-br from-gray-300 to-gray-500 rounded-full grid place-items-center text-sm font-bold text-black shadow-lg",children:"2"})]}),s.jsx("div",{className:"text-sm font-semibold mb-1 mt-1",children:ni(u[1].name,8)}),s.jsxs("div",{className:"text-xs text-lime-400 font-bold",children:[u[1].score," ",Hr]})]}),u[0]&&s.jsxs("div",{className:"flex flex-col items-center -mb-3",children:[s.jsxs("div",{className:"relative mb-2",children:[s.jsx(ti,{src:u[0].avatar,fallback:u[0].name,size:72}),s.jsx("div",{className:"absolute -top-3 left-1/2 -translate-x-1/2",children:s.jsx(hg,{})}),s.jsx("div",{className:"absolute -bottom-1 left-1/2 -translate-x-1/2 w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full grid place-items-center text-base font-bold text-black shadow-lg animate-pulse",children:"1"})]}),s.jsx("div",{className:"text-sm font-bold mb-1 mt-1",children:ni(u[0].name,8)}),s.jsxs("div",{className:"text-sm text-lime-400 font-bold mb-1",children:[u[0].score," ",Hr]}),s.jsx("div",{className:"px-2 py-1 bg-yellow-400/20 rounded-full text-[9px] text-yellow-400 font-bold",children:"CHAMPION"})]}),u[2]&&s.jsxs("div",{className:"flex flex-col items-center",children:[s.jsxs("div",{className:"relative mb-2",children:[s.jsx(ti,{src:u[2].avatar,fallback:u[2].name,size:56}),s.jsx("div",{className:"absolute -bottom-1 left-1/2 -translate-x-1/2 w-7 h-7 bg-gradient-to-br from-orange-600 to-red-600 rounded-full grid place-items-center text-sm font-bold text-white shadow-lg",children:"3"})]}),s.jsx("div",{className:"text-sm font-semibold mb-1 mt-1",children:ni(u[2].name,8)}),s.jsxs("div",{className:"text-xs text-lime-400 font-bold",children:[u[2].score," ",Hr]})]})]})]})]}),m.length>0&&s.jsxs("div",{className:"rounded-3xl bg-white/5 border border-white/10 p-2 mb-4",children:[s.jsxs("div",{className:"flex justify-between items-center mb-2 px-2",children:[s.jsx("h3",{className:"text-sm font-semibold",children:"Rankings"}),s.jsx("div",{className:"text-xs text-white/60",children:"Live updates"})]}),s.jsx("ul",{className:"space-y-1.5",children:m.map((y,j)=>s.jsxs("li",{className:`flex items-center justify-between px-3 py-2.5 rounded-xl transition-all duration-300 ${y.you?"bg-lime-500/90 text-black shadow-lg shadow-lime-500/20 scale-[1.02]":"bg-white/5 hover:bg-white/10"}`,style:{animationDelay:`${j*100}ms`,animation:"fadeInUp 0.6s ease-out forwards"},children:[s.jsxs("div",{className:"flex items-center gap-2.5",children:[s.jsx(xg,{n:y.rank,you:y.you}),s.jsx(ti,{src:y.avatar,fallback:y.name,size:36}),s.jsxs("div",{className:"flex flex-col leading-tight",children:[s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx("span",{className:"text-sm font-semibold",children:ni(y.name,12)}),s.jsx("span",{className:"text-xs",children:y.country}),y.friend&&s.jsx("span",{className:"text-[9px] bg-blue-500/20 text-blue-400 px-1 py-0.5 rounded-full",children:"Friend"})]}),s.jsxs("div",{className:`text-xs flex items-center gap-1.5 ${y.you?"text-black/70":"text-white/60"}`,children:[s.jsx("span",{children:y.handle}),s.jsxs("span",{children:["🔥",y.streak]})]})]})]}),s.jsxs("div",{className:"flex flex-col items-end",children:[s.jsxs("div",{className:"flex items-center gap-1 text-sm font-bold",children:[s.jsx("span",{children:y.score}),s.jsx("span",{className:y.you?"opacity-90":"opacity-80",children:Hr})]}),s.jsx("div",{className:`text-xs px-1.5 py-0.5 rounded-full font-bold ${y.trend.startsWith("+")?"bg-green-500/20 text-green-400":y.trend.startsWith("-")?"bg-red-500/20 text-red-400":"bg-gray-500/20 text-gray-400"}`,children:y.trend})]})]},`${o}-${y.rank}`))})]}),c&&c.rank>1&&s.jsxs("div",{className:"mb-4 p-3 rounded-2xl bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 text-center",children:[s.jsx("div",{className:"text-sm font-semibold mb-2",children:"🚀 Climb Higher!"}),s.jsx("div",{className:"text-xs text-white/70 mb-3",children:o==="friends"&&c.rank===1?"🎉 You're #1 among friends!":`You need ${Math.max(0,(((w=l[c.rank-2])==null?void 0:w.score)||0)-c.score+1)} more coins to reach rank #${c.rank-1}`}),!(o==="friends"&&c.rank===1)&&s.jsx("button",{onClick:()=>e("/play"),className:"px-5 py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl text-sm font-bold hover:scale-105 transition-transform",children:"Play Now 🎮"})]}),s.jsx("style",{jsx:!0,children:`
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
      `})]})}function ti({src:e,fallback:t,size:n=56}){const r=gg(t);return s.jsx("div",{className:"grid place-items-center rounded-full bg-white/10 overflow-hidden border-2 border-white/20",style:{width:n,height:n},children:e?s.jsx("img",{src:e,alt:"",className:"w-full h-full object-cover"}):s.jsx("span",{className:"text-sm font-semibold",children:r})})}function hg(){return s.jsxs("div",{className:"w-7 h-5 bg-gradient-to-t from-yellow-400 to-yellow-300 rounded-b-lg shadow-lg relative",children:[s.jsxs("svg",{viewBox:"0 0 100 40",className:"w-full h-full",children:[s.jsx("path",{d:"M15,35 L15,18 L35,28 L50,10 L65,28 L85,18 L85,35 Z",fill:"url(#crownGradient)"}),s.jsx("defs",{children:s.jsxs("linearGradient",{id:"crownGradient",x1:"0%",y1:"0%",x2:"0%",y2:"100%",children:[s.jsx("stop",{offset:"0%",stopColor:"#FCD34D"}),s.jsx("stop",{offset:"100%",stopColor:"#F59E0B"})]})})]}),s.jsx("div",{className:"absolute top-0.5 left-1/2 -translate-x-1/2 w-1 h-1 bg-red-400 rounded-full animate-pulse"})]})}function xg({n:e,you:t}){return s.jsx("div",{className:`w-7 h-7 grid place-items-center rounded-full text-sm font-bold ${t?"bg-black/10 text-black":"bg-white/10 text-white"}`,children:e})}function ni(e,t=12){return(e==null?void 0:e.length)>t?e.slice(0,t-1)+"…":e}function gg(e=""){var n;const t=e.trim().split(/\s+/);return t.length===1?t[0].slice(0,2).toUpperCase():(t[0][0]+(((n=t[1])==null?void 0:n[0])||"")).toUpperCase()}const vg="qp_recent",yg="qp_review_snapshot",_u=[{id:Date.now()-864e5,type:"quiz",category:"General Knowledge",difficulty:"easy",score:8,total:10,accuracy:80,time:"02:31",ms:151e3,date:"Yesterday",timestamp:Date.now()-864e5,mode:"Quiz"},{id:Date.now()-1728e5,type:"practice",category:"Science",difficulty:"medium",score:12,total:15,accuracy:80,time:"06:02",ms:362e3,date:"2 days ago",timestamp:Date.now()-1728e5,mode:"Practice"},{id:Date.now()-2592e5,type:"quiz",category:"Fun Facts",difficulty:"easy",score:9,total:10,accuracy:90,time:"02:05",ms:125e3,date:"3 days ago",timestamp:Date.now()-2592e5,mode:"Quiz"}];function bg(){const[e,t]=d.useState("quizzes"),[n,r]=d.useState(null),[i,o]=d.useState(!1),[a,l]=d.useState("all"),[c,u]=d.useState("all"),[m,x]=d.useState("date"),[p,w]=d.useState([]),[y,j]=d.useState(!0),C=ht(),v=N=>{if(!N)return"00:00";const g=Math.floor(N/1e3),b=Math.floor(g/60),k=g%60;return`${String(b).padStart(2,"0")}:${String(k).padStart(2,"0")}`},f=N=>{if(!N)return"Unknown";const g=new Date(N),k=Math.floor((new Date-g)/(1e3*60*60*24));return k===0?"Today":k===1?"Yesterday":k<7?`${k} days ago`:`${["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][g.getMonth()]} ${g.getDate()}`};d.useEffect(()=>{let N=!1;j(!0);const g=E=>{try{return JSON.parse(E)}catch{return null}},b=E=>encodeURIComponent(String(E).trim().toLowerCase().replace(/\s+/g,"-")),k=E=>{var T,$,O,re;const M=Number(E.ts??E.timestamp??E.id)||Date.now(),H=Number(E.ms)||0,Z=Number(E.total)||0,I=Number(E.correct)||0,Q=String(E.mode||"").toLowerCase().includes("practice")?"practice":"quiz",R=((T=E.snapshot)==null?void 0:T.category)||(($=E.snapshot)==null?void 0:$.categoryLabel)||E.cat||E.category||"Unknown",z=((O=E.snapshot)==null?void 0:O.categoryParam)||b(R),D=String(((re=E.snapshot)==null?void 0:re.difficulty)||E.difficulty||"medium").toLowerCase();return{id:E.id??M,type:Q,category:R,categoryParam:z,difficulty:D,score:I,total:Z,accuracy:Z?Math.round(I/Z*100):0,time:v(H),ms:H,date:f(M),timestamp:M,snapshot:E.snapshot??null,mode:E.mode||(Q==="practice"?"Practice":"Quiz")}};try{const E=localStorage.getItem(vg),M=E?g(E):null,Z=(Array.isArray(M)&&M.length?M:_u).map(k).filter(I=>I&&I.timestamp).sort((I,W)=>W.timestamp-I.timestamp);N||w(Z)}catch(E){console.error("Error loading history:",E),N||w(_u)}finally{N||j(!1)}return()=>{N=!0}},[]);const h=d.useMemo(()=>{const N=new Set(p.map(g=>g.category));return Array.from(N)},[p]),S=d.useMemo(()=>{let N=p.filter(g=>e==="quizzes"?g.type==="quiz":g.type==="practice");return a!=="all"&&(N=N.filter(g=>g.category===a)),c!=="all"&&(N=N.filter(g=>g.difficulty===c)),N.sort((g,b)=>m==="date"?b.timestamp-g.timestamp:m==="score"?b.accuracy-g.accuracy:m==="time"?g.ms-b.ms:0),N},[p,e,a,c,m]),_=d.useMemo(()=>{if(S.length===0)return null;const N=S.reduce((E,M)=>E+M.score,0),g=S.reduce((E,M)=>E+M.total,0),b=g?Math.round(N/g*100):0,k=S.reduce((E,M)=>E+M.ms,0);return{count:S.length,avgAccuracy:b,totalTime:v(k),bestScore:Math.max(...S.map(E=>E.accuracy))}},[S]),L=N=>N>=80?"text-green-400":N>=60?"text-blue-400":N>=40?"text-yellow-400":"text-red-400";return y?s.jsx("div",{className:"min-h-full bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900 flex items-center justify-center",children:s.jsx("div",{className:"text-white",children:"Loading history..."})}):s.jsxs("div",{className:"min-h-full bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900 pt-12",children:[s.jsx("div",{className:"",children:s.jsxs("div",{className:"px-4 pt-4 pb-4",children:[s.jsxs("div",{className:"flex items-center justify-between mb-3",children:[s.jsx("button",{onClick:()=>C("/profile",{replace:!0}),className:"px-3 py-1.5 rounded-xl border border-white/20 bg-white/10 text-white text-sm flex items-center gap-1",children:"← Back"}),s.jsx("button",{onClick:()=>o(!i),className:"p-2 rounded-xl border border-white/20 bg-white/10 text-white",children:s.jsx(kg,{})})]}),s.jsx("h1",{className:"text-2xl font-bold text-white mb-1",children:"History"}),s.jsx("p",{className:"text-white/70 text-sm",children:"Track your progress"})]})}),s.jsxs("div",{className:"px-4 pb-20",children:[s.jsx("div",{className:`
             sticky top-0 z-[60] isolate
            -mx-4 px-4
            py-4 mb-2
            bg-gray-900/95
            backdrop-blur-md
            border-b border-white/10
        `,children:s.jsx("div",{className:"flex items-center",children:s.jsx("div",{className:"inline-flex p-1 rounded-2xl bg-white/10 border border-white/20",children:[{value:"quizzes",label:"Quizzes",icon:"🎯"},{value:"practice",label:"Practice",icon:"📝"}].map(N=>s.jsxs("button",{onClick:()=>t(N.value),className:`px-12 py-2 text-sm rounded-xl transition-all duration-200 ${e===N.value?"bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg":"text-white/70 hover:text-white"}`,children:[s.jsx("span",{className:"mr-1",children:N.icon}),N.label]},N.value))})})}),_&&s.jsx("div",{className:"mb-4 p-4 rounded-2xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-white/20",children:s.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-3",children:[s.jsx(ri,{label:"Total",value:_.count}),s.jsx(ri,{label:"Avg Score",value:`${_.avgAccuracy}%`,color:L(_.avgAccuracy)}),s.jsx(ri,{label:"Best Score",value:`${_.bestScore}%`,color:"text-green-400"}),s.jsx(ri,{label:"Total Time",value:_.totalTime})]})}),i&&s.jsx("div",{className:"mb-4 p-4 rounded-2xl bg-white/10 border border-white/20",children:s.jsxs("div",{className:"space-y-3",children:[s.jsxs("div",{children:[s.jsx("label",{className:"text-xs text-white/60 mb-1 block",children:"Category"}),s.jsxs("select",{value:a,onChange:N=>l(N.target.value),className:"w-full px-3 py-2 rounded-xl bg-black/30 border border-white/20 text-white text-sm",children:[s.jsx("option",{value:"all",children:"All Categories"}),h.map(N=>s.jsx("option",{value:N,children:N},N))]})]}),s.jsxs("div",{className:"flex gap-2",children:[s.jsxs("div",{className:"flex-1",children:[s.jsx("label",{className:"text-xs text-white/60 mb-1 block",children:"Difficulty"}),s.jsxs("select",{value:c,onChange:N=>u(N.target.value),className:"w-full px-3 py-2 rounded-xl bg-black/30 border border-white/20 text-white text-sm",children:[s.jsx("option",{value:"all",children:"All"}),s.jsx("option",{value:"easy",children:"Easy"}),s.jsx("option",{value:"medium",children:"Medium"}),s.jsx("option",{value:"hard",children:"Hard"})]})]}),s.jsxs("div",{className:"flex-1",children:[s.jsx("label",{className:"text-xs text-white/60 mb-1 block",children:"Sort By"}),s.jsxs("select",{value:m,onChange:N=>x(N.target.value),className:"w-full px-3 py-2 rounded-xl bg-black/30 border border-white/20 text-white text-sm",children:[s.jsx("option",{value:"date",children:"Date"}),s.jsx("option",{value:"score",children:"Score"}),s.jsx("option",{value:"time",children:"Time"})]})]})]})]})}),S.length===0?s.jsxs("div",{className:"text-center py-12",children:[s.jsx("div",{className:"text-4xl mb-3",children:"📚"}),s.jsxs("p",{className:"text-white/60",children:["No ",e," history yet"]}),s.jsx("p",{className:"text-white/40 text-sm mt-1",children:"Start playing to see your progress here!"})]}):s.jsx("div",{className:"space-y-3",children:S.map((N,g)=>s.jsx(wg,{item:N,index:g,onClick:()=>r(N)},N.id))})]}),n&&s.jsx(jg,{item:n,onClose:()=>r(null)})]})}function ri({label:e,value:t,color:n="text-white"}){return s.jsxs("div",{className:"text-center",children:[s.jsx("div",{className:"text-xs text-white/60 mb-1",children:e}),s.jsx("div",{className:`text-lg font-bold ${n}`,children:t})]})}function wg({item:e,index:t,onClick:n}){const r=a=>a>=80?"from-green-500/20 to-green-600/10 border-green-500/30":a>=60?"from-blue-500/20 to-blue-600/10 border-blue-500/30":a>=40?"from-yellow-500/20 to-yellow-600/10 border-yellow-500/30":"from-red-500/20 to-red-600/10 border-red-500/30",o=(a=>{const l=a==null?void 0:a.toLowerCase();return l==="easy"?{bg:"bg-green-500/20",text:"text-green-400",border:"border-green-500/30"}:l==="medium"?{bg:"bg-yellow-500/20",text:"text-yellow-400",border:"border-yellow-500/30"}:l==="hard"?{bg:"bg-red-500/20",text:"text-red-400",border:"border-red-500/30"}:{bg:"bg-gray-500/20",text:"text-gray-400",border:"border-gray-500/30"}})(e.difficulty);return s.jsxs("div",{onClick:n,className:`
        relative rounded-2xl p-4 cursor-pointer
        bg-gradient-to-br ${r(e.accuracy)}
        border transform transition-all duration-300 hover:scale-[1.02]
      `,children:[s.jsxs("div",{className:"flex items-start justify-between mb-3",children:[s.jsxs("div",{className:"flex-1",children:[s.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[s.jsx("span",{className:"text-lg",children:e.type==="quiz"?"🎯":"📝"}),s.jsx("h3",{className:"font-semibold text-white",children:e.category})]}),s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx("span",{className:`px-2 py-0.5 rounded-full text-xs ${o.bg} ${o.text} ${o.border} border`,children:e.difficulty}),s.jsx("span",{className:"text-xs text-white/50",children:e.date})]})]}),s.jsxs("div",{className:"text-right",children:[s.jsxs("div",{className:`text-2xl font-bold ${e.accuracy>=80?"text-green-400":e.accuracy>=60?"text-blue-400":e.accuracy>=40?"text-yellow-400":"text-red-400"}`,children:[e.accuracy,"%"]}),s.jsxs("div",{className:"text-xs text-white/60",children:[e.score,"/",e.total]})]})]}),s.jsxs("div",{className:"flex items-center justify-between text-xs",children:[s.jsxs("div",{className:"flex items-center gap-3 text-white/60",children:[s.jsxs("span",{children:["⏱ ",e.time]}),s.jsx("span",{children:e.mode})]}),s.jsx("span",{className:"text-white/40",children:"Tap to review →"})]})]})}function jg({item:e,onClose:t}){const n=ht();return d.useEffect(()=>{const r=i=>{i.key==="Escape"&&t()};return document.addEventListener("keydown",r),()=>document.removeEventListener("keydown",r)},[t]),s.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80",onClick:t,children:s.jsxs("div",{className:"w-full max-w-md bg-gray-900 rounded-3xl p-6 border border-white/20",onClick:r=>r.stopPropagation(),children:[s.jsxs("div",{className:"flex items-center justify-between mb-4",children:[s.jsx("h2",{className:"text-xl font-bold text-white",children:"Quiz Details"}),s.jsx("button",{onClick:t,className:"p-2 rounded-xl bg-white/10 hover:bg-white/20 transition-colors text-white",children:"✕"})]}),s.jsxs("div",{className:"space-y-4",children:[s.jsxs("div",{className:"p-4 rounded-2xl bg-white/5 border border-white/10",children:[s.jsxs("div",{className:"flex items-center justify-between mb-2",children:[s.jsx("span",{className:"text-white/60",children:"Category"}),s.jsx("span",{className:"text-white font-medium",children:e.category})]}),s.jsxs("div",{className:"flex items-center justify-between mb-2",children:[s.jsx("span",{className:"text-white/60",children:"Difficulty"}),s.jsx("span",{className:`${e.difficulty==="easy"?"text-green-400":e.difficulty==="medium"?"text-yellow-400":"text-red-400"} font-medium`,children:e.difficulty})]}),s.jsxs("div",{className:"flex items-center justify-between mb-2",children:[s.jsx("span",{className:"text-white/60",children:"Score"}),s.jsxs("span",{className:"text-white font-medium",children:[e.score,"/",e.total]})]}),s.jsxs("div",{className:"flex items-center justify-between mb-2",children:[s.jsx("span",{className:"text-white/60",children:"Accuracy"}),s.jsxs("span",{className:`${e.accuracy>=80?"text-green-400":e.accuracy>=60?"text-blue-400":"text-yellow-400"} font-medium`,children:[e.accuracy,"%"]})]}),s.jsxs("div",{className:"flex items-center justify-between",children:[s.jsx("span",{className:"text-white/60",children:"Time"}),s.jsx("span",{className:"text-white font-medium",children:e.time})]})]}),e.snapshot&&s.jsx("button",{onClick:()=>{t(),localStorage.setItem(yg,JSON.stringify(e.snapshot)),n(`/quiz/${e.categoryParam}/start?review=1&attempt=${e.id}`,{state:{reviewFrom:"history",historyPath:"/profile/history"}})},className:"w-full py-3 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium hover:opacity-90 transition-opacity",children:"Review Answers"}),s.jsx("button",{onClick:()=>{var r;t(),n(`/quiz/${e.categoryParam}/start`,{state:{mode:"quiz",retake:!0,difficulty:e.difficulty,count:e.total,timer:((r=e.snapshot)==null?void 0:r.timer)||{type:"per_q",seconds:45},fromHistory:!0}})},className:"w-full py-3 rounded-2xl border border-white/20 text-white font-medium hover:bg-white/10 transition-colors",children:"Retake Quiz"})]})]})})}function kg(){return s.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:s.jsx("path",{d:"M3 6h18M7 12h10M10 18h4",strokeLinecap:"round",strokeLinejoin:"round"})})}const Ng=d.createContext({});function m0(e){const t=d.useRef(null);return t.current===null&&(t.current=e()),t.current}const Sg=typeof window<"u",Cg=Sg?d.useLayoutEffect:d.useEffect,p0=d.createContext(null);function Eg(e){return typeof e=="object"&&e!==null}function _g(e){return Eg(e)&&"offsetHeight"in e}const Rg=d.createContext({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"});class Pg extends d.Component{getSnapshotBeforeUpdate(t){const n=this.props.childRef.current;if(n&&t.isPresent&&!this.props.isPresent){const r=n.offsetParent,i=_g(r)&&r.offsetWidth||0,o=this.props.sizeRef.current;o.height=n.offsetHeight||0,o.width=n.offsetWidth||0,o.top=n.offsetTop,o.left=n.offsetLeft,o.right=i-o.width-o.left}return null}componentDidUpdate(){}render(){return this.props.children}}function zg({children:e,isPresent:t,anchorX:n,root:r}){const i=d.useId(),o=d.useRef(null),a=d.useRef({width:0,height:0,top:0,left:0,right:0}),{nonce:l}=d.useContext(Rg);return d.useInsertionEffect(()=>{const{width:c,height:u,top:m,left:x,right:p}=a.current;if(t||!o.current||!c||!u)return;const w=n==="left"?`left: ${x}`:`right: ${p}`;o.current.dataset.motionPopId=i;const y=document.createElement("style");l&&(y.nonce=l);const j=r??document.head;return j.appendChild(y),y.sheet&&y.sheet.insertRule(`
          [data-motion-pop-id="${i}"] {
            position: absolute !important;
            width: ${c}px !important;
            height: ${u}px !important;
            ${w}px !important;
            top: ${m}px !important;
          }
        `),()=>{j.contains(y)&&j.removeChild(y)}},[t]),s.jsx(Pg,{isPresent:t,childRef:o,sizeRef:a,children:d.cloneElement(e,{ref:o})})}const Tg=({children:e,initial:t,isPresent:n,onExitComplete:r,custom:i,presenceAffectsLayout:o,mode:a,anchorX:l,root:c})=>{const u=m0(Lg),m=d.useId();let x=!0,p=d.useMemo(()=>(x=!1,{id:m,initial:t,isPresent:n,custom:i,onExitComplete:w=>{u.set(w,!0);for(const y of u.values())if(!y)return;r&&r()},register:w=>(u.set(w,!1),()=>u.delete(w))}),[n,u,r]);return o&&x&&(p={...p}),d.useMemo(()=>{u.forEach((w,y)=>u.set(y,!1))},[n]),d.useEffect(()=>{!n&&!u.size&&r&&r()},[n]),a==="popLayout"&&(e=s.jsx(zg,{isPresent:n,anchorX:l,root:c,children:e})),s.jsx(p0.Provider,{value:p,children:e})};function Lg(){return new Map}function Mg(e=!0){const t=d.useContext(p0);if(t===null)return[!0,null];const{isPresent:n,onExitComplete:r,register:i}=t,o=d.useId();d.useEffect(()=>{if(e)return i(o)},[e]);const a=d.useCallback(()=>e&&r&&r(o),[o,r,e]);return!n&&r?[!1,a]:[!0]}const si=e=>e.key||"";function Ru(e){const t=[];return d.Children.forEach(e,n=>{d.isValidElement(n)&&t.push(n)}),t}const Ko=({children:e,custom:t,initial:n=!0,onExitComplete:r,presenceAffectsLayout:i=!0,mode:o="sync",propagate:a=!1,anchorX:l="left",root:c})=>{const[u,m]=Mg(a),x=d.useMemo(()=>Ru(e),[e]),p=a&&!u?[]:x.map(si),w=d.useRef(!0),y=d.useRef(x),j=m0(()=>new Map),[C,v]=d.useState(x),[f,h]=d.useState(x);Cg(()=>{w.current=!1,y.current=x;for(let L=0;L<f.length;L++){const N=si(f[L]);p.includes(N)?j.delete(N):j.get(N)!==!0&&j.set(N,!1)}},[f,p.length,p.join("-")]);const S=[];if(x!==C){let L=[...x];for(let N=0;N<f.length;N++){const g=f[N],b=si(g);p.includes(b)||(L.splice(N,0,g),S.push(g))}return o==="wait"&&S.length&&(L=S),h(Ru(L)),v(x),null}const{forceRender:_}=d.useContext(Ng);return s.jsx(s.Fragment,{children:f.map(L=>{const N=si(L),g=a&&!u?!1:x===f||p.includes(N),b=()=>{if(j.has(N))j.set(N,!0);else return;let k=!0;j.forEach(E=>{E||(k=!1)}),k&&(_==null||_(),h(y.current),a&&(m==null||m()),r&&r())};return s.jsx(Tg,{isPresent:g,initial:!w.current||n?void 0:!1,custom:t,presenceAffectsLayout:i,mode:o,root:c,onExitComplete:g?void 0:b,anchorX:l,children:L},N)})})},Fg=()=>{const[e,t]=d.useState(null);d.useEffect(()=>{if(typeof window<"u"){const q=sessionStorage.getItem("navigationSource");q&&t(q)}},[]);const n=q=>{typeof window<"u"&&(sessionStorage.setItem("navigationSource","/rewards"),window.location.href=q)},r=()=>{if(typeof window<"u"){const q=sessionStorage.getItem("navigationSource");window.location.href="/profile",sessionStorage.removeItem("navigationSource")}},i=[{id:1,type:"coins",value:100,icon:"🪙",label:"100 Coins",cost:0},{id:2,type:"life",value:1,icon:"❤️",label:"1 Life",cost:50},{id:3,type:"coins",value:200,icon:"🪙",label:"200 Coins",cost:0},{id:4,type:"wildcard",value:1,icon:"🃏",label:"Wild Card",cost:100},{id:5,type:"coins",value:500,icon:"💰",label:"500 Coins",cost:0,milestone:!0},{id:6,type:"fifty-fifty",value:1,icon:"➗",label:"50:50",cost:150},{id:7,type:"life",value:2,icon:"❤️",label:"2 Lives",cost:100},{id:8,type:"vehicle",value:"bike",icon:"🏍️",label:"Motorcycle",cost:300},{id:9,type:"mystery",value:1,icon:"🎁",label:"Mystery Box",cost:200},{id:10,type:"coins",value:750,icon:"💰",label:"750 Coins",cost:0,milestone:!0},{id:11,type:"life",value:3,icon:"❤️",label:"3 Lives",cost:150},{id:12,type:"wildcard",value:2,icon:"🃏",label:"2x Wild Card",cost:250},{id:13,type:"vehicle",value:"car",icon:"🚗",label:"Car",cost:500},{id:14,type:"fifty-fifty",value:2,icon:"➗",label:"2x 50:50",cost:300},{id:15,type:"coins",value:1e3,icon:"💎",label:"1000 Coins",cost:0,milestone:!0}],o={cycle:{icon:"🚴",name:"Bicycle"},bike:{icon:"🏍️",name:"Motorcycle"},car:{icon:"🚗",name:"Car"}},{player:a,addCoins:l}=Ln(),[c,u]=d.useState(4),[m,x]=d.useState((a==null?void 0:a.coins)||0),[p,w]=d.useState(4),[y,j]=d.useState(!1),[C,v]=d.useState(!1),[f,h]=d.useState(0),[S,_]=d.useState(0),[L,N]=d.useState("cycle"),[g,b]=d.useState([{type:"vehicle",icon:"🚴",name:"Bicycle",count:1},{type:"wildcard",icon:"🃏",name:"Wild Card",count:2},{type:"fifty-fifty",icon:"➗",name:"50:50 Helper",count:1}]),[k,E]=d.useState([0,1,2,3]),[M,H]=d.useState(!1),[Z,I]=d.useState(!1),[W,Q]=d.useState(null),[R,z]=d.useState(null),[D,T]=d.useState(!1),[$,O]=d.useState(null),[re,B]=d.useState(!1),ee=d.useRef(null),ce=d.useRef(null),P=d.useRef(null);d.useEffect(()=>{ee.current=new Audio("/sounds/reward.mp3"),ce.current=new Audio("/sounds/reward_progress.mp3"),[ee,ce].forEach(q=>{var G;(G=q.current)==null||G.addEventListener("error",()=>{console.log("Sound file not found")})})},[]);const F=q=>{try{q.current&&(q.current.currentTime=0,q.current.play().catch(G=>console.log("Audio play failed:",G)))}catch(G){console.log("Sound play error:",G)}},Y=(q,G)=>{if(q>c){z(G),I(!0);return}q===c&&K(q,G)},V=q=>{var J;const G=(J=P.current)==null?void 0:J.querySelector(`[data-index="${q}"]`);if(G){const ae=G.getBoundingClientRect(),je=window.pageYOffset||document.documentElement.scrollTop,we=ae.top+je-window.innerHeight/2+50;window.scrollTo({top:we,behavior:"smooth"})}},K=(q,G)=>{if(!k.includes(q)){if(G.cost>0&&m<G.cost){z(G),I(!0);return}G.cost>0&&(x(J=>J-G.cost),l(-G.cost)),F(ee),H(!0),z(G),E(J=>[...J,q]),setTimeout(()=>{H(!1),G.type==="coins"?(h(G.value),j(!0),setTimeout(()=>{x(J=>J+G.value),l(G.value),setTimeout(()=>{j(!1),h(0)},500)},300)):G.type==="life"?(_(G.value),v(!0),setTimeout(()=>{w(J=>J+G.value),setTimeout(()=>{v(!1),_(0)},500)},300)):(O({icon:G.icon,startX:window.innerWidth/2,startY:window.innerHeight/2}),setTimeout(()=>{O(null),B(!0),ue(G),G.type==="vehicle"&&N(G.value),setTimeout(()=>{B(!1)},500)},800)),setTimeout(()=>{if(c<i.length-1){const J=c+1;V(J),setTimeout(()=>{T(!0),F(ce),u(J),setTimeout(()=>{T(!1)},500)},300)}},1200)},1500)}},ue=q=>{b(G=>G.find(ae=>ae.icon===q.icon)?G.map(ae=>ae.icon===q.icon?{...ae,count:ae.count+1}:ae):[...G,{type:q.type,icon:q.icon,name:q.label,count:1}])},X=q=>30+q*100,se=()=>30+c*100;return s.jsxs("div",{className:"rewards-page",children:[s.jsx("style",{jsx:!0,children:`
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
      `}),s.jsx("div",{className:"non-sticky-header",children:s.jsx("button",{className:"back-button",onClick:r,children:"← Back"})}),s.jsxs("div",{className:"sticky-section",children:[s.jsxs("div",{className:"header-wrapper",children:[s.jsxs("div",{className:"title-row",children:[s.jsxs("div",{children:[s.jsx("h1",{className:"title",children:"Rewards"}),s.jsx("p",{className:"subtitle",children:"Claim amazing prizes"})]}),s.jsx("button",{className:"play-quiz-btn",onClick:()=>n("/play"),children:"Play Quiz"})]}),s.jsx("div",{className:"balance-row",children:s.jsx("div",{className:"balance-item",children:s.jsxs("div",{children:[s.jsx("div",{className:"balance-label",children:"Balance"}),s.jsxs("div",{className:`balance-value ${y?"animating":""}`,children:[m.toLocaleString()," 🪙",y&&s.jsxs("span",{className:"value-change",children:["+",f]})]})]})})})]}),s.jsx("div",{className:"stats-cards-container",children:s.jsxs("div",{className:"info-grid",children:[s.jsxs("div",{className:"info-card",children:[s.jsx("div",{className:"info-icon",children:"❤️"}),s.jsxs("div",{className:`info-value ${C?"animating":""}`,children:[p,C&&s.jsxs("span",{className:"value-change",children:["+",S]})]}),s.jsx("div",{className:"info-label",children:"Lives"})]}),s.jsxs("div",{className:"info-card",children:[s.jsx("div",{className:"info-icon",children:"⭐"}),s.jsx("div",{className:"info-value",children:"5"}),s.jsx("div",{className:"info-label",children:"Level"})]}),s.jsxs("div",{className:"info-card",children:[s.jsx("div",{className:"info-icon",children:o[L].icon}),s.jsx("div",{className:"info-value",children:o[L].name}),s.jsx("div",{className:"info-label",children:"Vehicle"})]}),s.jsxs("div",{className:`cards-section ${re?"animating":""}`,children:[s.jsx("div",{className:"cards-label",children:"Your Cards"}),s.jsx("div",{className:"card-grid",children:g.map((q,G)=>s.jsxs("div",{className:"card-item",onClick:()=>Q(q),children:[s.jsxs("div",{className:"large-card",children:[s.jsx("div",{className:"large-card-icon",children:q.icon}),s.jsx("div",{className:"large-card-name",children:q.name})]}),q.count>1&&s.jsx("div",{className:"card-count-badge",children:q.count})]},G))})]})]})})]}),s.jsx("div",{className:"scrollable-journey",children:s.jsx("div",{className:"journey-container",ref:P,children:s.jsxs("div",{className:"journey-track",children:[s.jsx("div",{className:"curvy-road",children:s.jsxs("svg",{className:"road-svg",viewBox:"0 0 60 1500",preserveAspectRatio:"none",children:[s.jsx("defs",{children:s.jsxs("linearGradient",{id:"roadGradient",x1:"0%",y1:"0%",x2:"0%",y2:"100%",children:[s.jsx("stop",{offset:"0%",stopColor:"#5E5CE6"}),s.jsx("stop",{offset:"100%",stopColor:"#5E5CE6"})]})}),s.jsx("path",{className:"road-path",d:"M 30 0 Q 45 50, 30 100 T 30 200 Q 15 250, 30 300 T 30 400 Q 45 450, 30 500 T 30 600 Q 15 650, 30 700 T 30 800 Q 45 850, 30 900 T 30 1000 Q 15 1050, 30 1100 T 30 1200 Q 45 1250, 30 1300 T 30 1400 L 30 1500"}),s.jsx("path",{className:"road-progress",d:"M 30 0 Q 45 50, 30 100 T 30 200 Q 15 250, 30 300 T 30 400 Q 45 450, 30 500 T 30 600 Q 15 650, 30 700 T 30 800 Q 45 850, 30 900 T 30 1000 Q 15 1050, 30 1100 T 30 1200 Q 45 1250, 30 1300 T 30 1400 L 30 1500",strokeDasharray:"1500",strokeDashoffset:1500-c/(i.length-1)*1500})]})}),s.jsxs("div",{className:"avatar-tracker",style:{top:`${se()}px`},children:[s.jsx("img",{className:"avatar-img",src:"/profile/avatar.png",alt:"You",onError:q=>{q.target.style.display="none"}}),s.jsx("div",{className:"tracker-vehicle",children:o[L].icon})]}),s.jsx("div",{className:"rewards-list",children:i.map((q,G)=>{const J=G%2===0,ae=G>c,je=k.includes(G),we=G===c;return s.jsx("div",{className:"reward-row","data-index":G,style:{top:`${X(G)}px`},children:s.jsxs("div",{className:`reward-item ${J?"left":"right"}`,children:[s.jsxs("div",{className:`checkpoint ${we?"current":je?"claimed":ae?"locked":""}`,onClick:()=>Y(G,q),children:[s.jsx("div",{className:"checkpoint-icon",children:q.icon}),s.jsx("div",{className:"checkpoint-value",children:q.label.split(" ")[0]}),q.milestone&&s.jsx("div",{className:"milestone-badge",children:"BONUS"}),ae&&s.jsx("div",{className:"lock-icon",children:"🔒"})]}),s.jsxs("div",{className:"reward-info",children:[s.jsx("div",{className:"reward-name",children:q.label}),s.jsxs("div",{className:"step-label",children:["Step ",G+1]})]})]})},q.id)})})]})})}),$&&s.jsx("div",{className:"flying-card",style:{left:`${$.startX}px`,top:`${$.startY}px`,"--startX":`${$.startX}px`},children:$.icon}),s.jsx(Ko,{children:W&&s.jsx("div",{className:"claim-overlay",onClick:()=>Q(null),children:s.jsxs("div",{className:"modal",onClick:q=>q.stopPropagation(),children:[s.jsx("div",{className:"modal-icon",children:W.icon}),s.jsx("div",{className:"card-detail-name",children:W.name}),s.jsxs("div",{className:"card-detail-desc",children:["You have ",W.count," of these cards"]}),s.jsx("div",{className:"modal-buttons",children:s.jsx("button",{className:"modal-btn modal-btn-secondary",onClick:()=>Q(null),children:"Close"})})]})})}),s.jsx(Ko,{children:M&&R&&s.jsx("div",{className:"claim-overlay",children:s.jsxs("div",{className:"modal",children:[s.jsx("div",{className:"modal-title",children:"WELL DONE!"}),s.jsx("div",{className:"modal-subtitle",children:"Here's a reward for you."}),s.jsx("div",{className:"modal-icon",children:R.icon}),s.jsxs("div",{className:"modal-value",children:["+",R.value," ",R.type==="coins"?"Coins":R.type==="life"?"Lives":R.label]})]})})}),s.jsx(Ko,{children:Z&&R&&s.jsx("div",{className:"claim-overlay",onClick:()=>I(!1),children:s.jsxs("div",{className:"modal",onClick:q=>q.stopPropagation(),children:[s.jsx("div",{className:"modal-icon",children:"🪙"}),s.jsx("div",{className:"modal-title",children:"Need More Coins"}),s.jsx("div",{className:"modal-subtitle",children:R.cost>0?`You need ${R.cost-m} more coins`:"Complete previous rewards first"}),s.jsxs("div",{className:"modal-buttons",children:[s.jsx("button",{className:"modal-btn modal-btn-primary",onClick:()=>n("/play"),children:"Play Quiz"}),s.jsx("button",{className:"modal-btn modal-btn-secondary",onClick:()=>I(!1),children:"Cancel"})]})]})})})]})},ii=[{id:1,name:"First Win",emoji:"🏆",unlocked:!0,hint:"Win your first quiz",progress:100,color:"#FFD700"},{id:2,name:"On Fire",emoji:"🔥",unlocked:!0,hint:"3-day winning streak",progress:100,color:"#FF6B35"},{id:3,name:"Perfectionist",emoji:"⭐",unlocked:!1,hint:"Score 10/10 in any quiz",progress:75,color:"#9333EA"},{id:4,name:"Early Bird",emoji:"🌅",unlocked:!0,hint:"Play before 9 AM",progress:100,color:"#F59E0B"},{id:5,name:"Scholar",emoji:"🎓",unlocked:!1,hint:"Master 5 categories",progress:40,color:"#3B82F6"},{id:6,name:"Lightning",emoji:"⚡",unlocked:!1,hint:"Complete in under 2 minutes",progress:20,color:"#10B981"},{id:7,name:"Champion",emoji:"👑",unlocked:!1,hint:"Win 50 quizzes",progress:30,color:"#EC4899"},{id:8,name:"Explorer",emoji:"🗺️",unlocked:!1,hint:"Try all categories",progress:60,color:"#06B6D4"},{id:9,name:"Strategist",emoji:"🧠",unlocked:!0,hint:"Use 3 power-ups wisely",progress:100,color:"#8B5CF6"}];function Dg(){const[e,t]=d.useState(null),n=ii.filter(i=>i.unlocked).length,r=Math.round(n/ii.length*100);return s.jsxs("div",{className:"badges-screen",children:[s.jsx("style",{jsx:!0,children:`
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
      `}),s.jsxs("div",{className:"header",children:[s.jsx("button",{className:"back-button",onClick:()=>window.history.back(),children:"← Back"}),s.jsxs("div",{className:"title-section",children:[s.jsx("h1",{className:"main-title",children:"Badge Collection"}),s.jsx("p",{className:"subtitle",children:"Unlock achievements and show your skills"})]})]}),s.jsxs("div",{className:"progress-card",children:[s.jsxs("div",{className:"progress-header",children:[s.jsx("span",{className:"progress-label",children:"Collection Progress"}),s.jsxs("span",{className:"progress-value",children:[n,"/",ii.length]})]}),s.jsx("div",{className:"progress-bar-container",children:s.jsx("div",{className:"progress-bar-fill",style:{width:`${r}%`}})})]}),s.jsx("div",{className:"badges-grid",children:ii.map(i=>s.jsxs("div",{className:`badge-card ${i.unlocked?"unlocked":""}`,style:{"--badge-color":i.color},onClick:()=>t(i),children:[s.jsx("div",{className:"badge-glow"}),s.jsx("div",{className:"badge-emoji",children:i.emoji}),s.jsx("div",{className:"badge-name",children:i.name}),!i.unlocked&&s.jsxs(s.Fragment,{children:[s.jsx("div",{className:"badge-progress",children:s.jsx("div",{className:"badge-progress-fill",style:{width:`${i.progress}%`}})}),s.jsx("div",{className:"lock-indicator",children:"🔒"})]})]},i.id))}),s.jsxs("div",{className:"tips-card",children:[s.jsxs("div",{className:"tips-title",children:[s.jsx("span",{children:"💡"}),s.jsx("span",{children:"Pro Tip"})]}),s.jsx("div",{className:"tips-content",children:"Complete daily challenges and maintain streaks to unlock rare badges faster. Each badge gives you bonus XP and special rewards!"})]}),e&&s.jsx("div",{className:"badge-modal",onClick:()=>t(null),children:s.jsxs("div",{className:"modal-content",onClick:i=>i.stopPropagation(),children:[s.jsx("div",{className:`modal-badge ${e.unlocked?"":"locked"}`,children:e.emoji}),s.jsx("h3",{className:"modal-title",children:e.name}),s.jsx("span",{className:`modal-status ${e.unlocked?"":"locked"}`,children:e.unlocked?"✓ Unlocked":"🔒 Locked"}),s.jsx("p",{className:"modal-description",children:e.hint}),!e.unlocked&&s.jsxs("div",{className:"modal-progress-section",children:[s.jsx("div",{className:"modal-progress-label",children:"Progress"}),s.jsx("div",{className:"modal-progress-bar",children:s.jsx("div",{className:"modal-progress-fill",style:{width:`${e.progress}%`,"--badge-color":e.color}})}),s.jsxs("div",{className:"modal-progress-text",children:[e.progress,"%"]})]}),s.jsx("button",{className:"modal-close",onClick:()=>t(null),children:e.unlocked?"Awesome!":"Keep Going!"})]})})]})}const Ig=[{id:1,title:"Quiz Master",subtitle:"Play 10 quizzes",current:7,target:10,reward:150,claimed:!1,icon:"🎯",color:"#FF6B6B"},{id:2,title:"Coin Collector",subtitle:"Earn 2,000 coins",current:1240,target:2e3,reward:200,claimed:!1,icon:"💰",color:"#4ECDC4"},{id:3,title:"Winning Streak",subtitle:"Win 3 in a row",current:3,target:3,reward:100,claimed:!0,icon:"🔥",color:"#FFD93D"},{id:4,title:"Speed Demon",subtitle:"Complete 5 under 2min",current:2,target:5,reward:300,claimed:!1,icon:"⚡",color:"#A8E6CF"},{id:5,title:"Perfect Score",subtitle:"Get 100% accuracy",current:0,target:1,reward:250,claimed:!1,icon:"⭐",color:"#C7B8FF"}];function Ag(){const{player:e,addCoins:t}=Ln(),[n,r]=d.useState(Ig),[i,o]=d.useState(null),[a,l]=d.useState((e==null?void 0:e.coins)||0),[c,u]=d.useState(!1),[m,x]=d.useState([]),p=n.length,w=n.filter(C=>C.current>=C.target).length,y=Math.round(w/p*100);d.useEffect(()=>{const C=setInterval(()=>{x(v=>{const f={id:Date.now(),x:Math.random()*100,y:Math.random()*100,size:Math.random()*20+10};return[...v.slice(-4),f]})},3e3);return()=>clearInterval(C)},[]);const j=(C,v)=>{o(C),navigator.vibrate&&navigator.vibrate([20,10,20]),setTimeout(()=>{r(f=>f.map(h=>h.id===C?{...h,claimed:!0}:h)),l(f=>f+v),o(null),u(!0),setTimeout(()=>u(!1),2e3)},600)};return s.jsxs("div",{className:"achievements-screen",children:[s.jsx("style",{jsx:!0,children:`
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
      `}),s.jsxs("div",{className:"floating-shapes",children:[s.jsx("div",{className:"shape shape-1"}),s.jsx("div",{className:"shape shape-2"})]}),s.jsxs("div",{className:"header",children:[s.jsx("button",{className:"back-button",onClick:()=>window.history.back(),children:"← Back"}),s.jsxs("div",{className:"coins-display",children:["🪙 ",a.toLocaleString()]}),s.jsxs("div",{className:"title-section",children:[s.jsx("h1",{className:"main-title",children:"ACHIEVEMENTS"}),s.jsx("p",{className:"subtitle",children:"Complete challenges and earn awesome rewards!"})]})]}),s.jsxs("div",{className:"progress-overview",children:[s.jsx("div",{className:"card-glow",style:{"--card-color":"#FFD93D"}}),s.jsxs("div",{className:"overview-header",children:[s.jsx("span",{className:"overview-label",children:"🎮 Progress Tracker"}),s.jsxs("div",{className:"overview-stats",children:[s.jsx("span",{className:"trophy-icon",children:"🏆"}),s.jsxs("span",{className:"overview-value",children:[w,"/",p]})]})]}),s.jsx("div",{className:"progress-bar-main",children:s.jsx("div",{className:"progress-fill-main",style:{width:`${y}%`}})})]}),s.jsx("div",{className:"achievements-list",children:n.map(C=>{const v=Math.min(100,Math.round(C.current/C.target*100)),f=v===100,h=C.color+"CC";return s.jsxs("div",{className:`achievement-card ${f?"completed":""}`,style:{"--card-color":C.color,"--card-color-dark":h},children:[s.jsx("div",{className:"card-glow"}),f&&C.claimed&&s.jsx("div",{className:"completed-badge",children:"✓"}),s.jsxs("div",{className:"card-content",children:[s.jsx("div",{className:"achievement-icon",children:C.icon}),s.jsxs("div",{className:"achievement-details",children:[s.jsx("div",{className:"achievement-title",children:C.title}),s.jsx("div",{className:"achievement-subtitle",children:C.subtitle}),s.jsxs("div",{className:"progress-container",children:[s.jsx("div",{className:"progress-bar",children:s.jsx("div",{className:"progress-fill",style:{width:`${v}%`}})}),s.jsxs("div",{className:"progress-text",children:[s.jsxs("span",{children:[C.current,"/",C.target]}),s.jsxs("span",{className:"reward-badge",children:["🪙 ",C.reward]})]})]})]}),s.jsx("button",{onClick:()=>j(C.id,C.reward),disabled:!f||C.claimed,className:`claim-button ${C.claimed?"claimed":f?"can-claim":"in-progress"} ${i===C.id?"claiming":""}`,children:C.claimed?"✓":f?"CLAIM!":`${v}%`})]})]},C.id)})}),c&&s.jsx("div",{className:"celebration",children:"🎉"})]})}function Og(){const{player:e,addCoins:t,updateDailyStreak:n}=Ln(),r=(e==null?void 0:e.currentStreak)||0,i=(e==null?void 0:e.bestStreak)||0,o=(e==null?void 0:e.totalDays)||0,a=(e==null?void 0:e.coins)||0,l=new Date,c=l.getDay(),u=()=>{const D=new Date(l);return D.setDate(l.getDate()-l.getDay()),D.toISOString().split("T")[0]},[m,x]=d.useState(null),[p,w]=d.useState(!1),[y,j]=d.useState(null),[C,v]=d.useState(null),[f,h]=d.useState(!1),S=d.useRef(null),_=d.useRef(null),[L]=Zt("/sounds/coin.mp3",{volume:.75}),[N]=Zt("/sounds/correct.mp3",{volume:.6}),[g,b]=d.useState(()=>{const D=localStorage.getItem("streaks_claimed")||"[]",T=JSON.parse(D),$=u(),O=T.filter(re=>re!==`week_${$}_day_0`);return localStorage.setItem("streaks_claimed",JSON.stringify(O)),O});d.useEffect(()=>{const D=()=>{window.scrollTo(0,0),document.documentElement.scrollTop=0,document.body.scrollTop=0;const $=document.querySelector("main");$&&($.scrollTop=0)};D(),requestAnimationFrame(D);const T=setTimeout(D,100);return()=>clearTimeout(T)},[]),d.useEffect(()=>{h(!0),setTimeout(()=>h(!1),3e3)},[]);const k=[{label:"Mon",short:"M",dayIndex:1},{label:"Tue",short:"T",dayIndex:2},{label:"Wed",short:"W",dayIndex:3},{label:"Thu",short:"T",dayIndex:4},{label:"Fri",short:"F",dayIndex:5},{label:"Sat",short:"S",dayIndex:6},{label:"Sun",short:"S",dayIndex:0}],E=[{day:0,reward:"10",type:"coins",icon:"🎯",label:"Welcome Bonus"},{day:1,reward:"50",type:"coins",icon:"🪙",label:"50 Coins"},{day:2,reward:"100",type:"coins",icon:"🪙",label:"100 Coins"},{day:3,reward:"2x",type:"xp",icon:"⭐",label:"2x XP Boost"},{day:4,reward:"150",type:"coins",icon:"🪙",label:"150 Coins"},{day:5,reward:"Full",type:"energy",icon:"⚡",label:"Energy Refill"},{day:6,reward:"200",type:"coins",icon:"🪙",label:"200 Coins"},{day:7,reward:"Mystery",type:"mystery",icon:"🎁",label:"Mystery Box"}],M=D=>{const T=g.includes(`week_${u()}_day_${D}`);if(D===0)return{isCompleted:!0,isClaimed:T,canClaim:!T,isLocked:!1};const $=r>=D,O=$&&!T,re=r<D;return{isCompleted:$,isClaimed:T,canClaim:O,isLocked:re}},H=(D,T,$)=>{const O=M(T);if(O.isLocked){v({day:T,currentStreak:r}),setTimeout(()=>v(null),2e3);return}O.isClaimed||O.canClaim&&(x({...D,day:T}),w(!1),setTimeout(()=>{w(!0),N(),setTimeout(()=>{if(D.type==="coins"){const ee=parseInt(D.reward);if(_.current&&S.current){const ce=_.current.getBoundingClientRect();L(),j({startRect:ce,count:10,amount:ee})}}const re=`week_${u()}_day_${T}`,B=[...g,re];b(B),localStorage.setItem("streaks_claimed",JSON.stringify(B))},500),setTimeout(()=>{x(null),w(!1)},2500)},500))},Z=(D,T)=>{const $=T+1,O=k[T].dayIndex===c;return r>=$?O?"today-completed":"completed":O?"today-pending":$<=r+1?"pending":"future"},I=[{days:3,emoji:"⚡",label:"Starter",achieved:r>=3},{days:7,emoji:"🔥",label:"Week Warrior",achieved:r>=7},{days:30,emoji:"💎",label:"Champion",achieved:r>=30},{days:100,emoji:"👑",label:"Legend",achieved:r>=100}],W=I.find(D=>D.days>r)||I[I.length-1],Q=Math.min(100,r/W.days*100),R=()=>{window.location.href="/play"},z=()=>{window.location.href="/profile"};return s.jsxs("div",{className:"streaks-screen",children:[s.jsx("style",{jsx:!0,children:`
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
      `}),y&&s.jsx(Vl,{startRect:y.startRect,targetRef:S,count:y.count,onDone:()=>{t(y.amount),j(null)}}),s.jsxs("div",{className:"header",children:[s.jsxs("div",{className:"header-top",children:[s.jsx("button",{className:"back-button",onClick:z,children:"← Back"}),s.jsxs("div",{className:"coin-pill",ref:S,id:"coin-pill",children:[s.jsx("span",{className:"coin-icon",children:"🪙"}),s.jsx("span",{className:"coin-amount",children:a})]})]}),s.jsxs("div",{className:"title-section",children:[s.jsx("h1",{className:"main-title",children:"STREAKS"}),s.jsx("p",{className:"subtitle",children:"Keep the fire burning!"})]})]}),s.jsxs("div",{className:"streak-hero",children:[s.jsx("div",{className:"fire-animation",children:"🔥"}),s.jsx("div",{className:"streak-number",children:r}),s.jsx("div",{className:"streak-label",children:"DAY STREAK"}),s.jsxs("div",{className:"stats-row",children:[s.jsxs("div",{className:"stat-card",children:[s.jsx("div",{className:"stat-value",children:i}),s.jsx("div",{className:"stat-label",children:"Best Streak"})]}),s.jsxs("div",{className:"stat-card",children:[s.jsx("div",{className:"stat-value",children:o}),s.jsx("div",{className:"stat-label",children:"Total Days"})]})]})]}),s.jsxs("div",{className:"weekly-progress-card",children:[s.jsxs("div",{className:"weekly-header",children:[s.jsx("div",{className:"weekly-title",children:"This Week's Progress"}),s.jsxs("div",{className:"weekly-counter",children:[s.jsx("span",{className:"weekly-counter-icon",children:"🔥"}),s.jsxs("span",{className:"weekly-counter-text",children:[Math.min(r,7),"/7"]})]})]}),s.jsx("div",{className:"weekly-days",children:k.map((D,T)=>{const $=Z(D.dayIndex,T),O=D.dayIndex===c;return s.jsxs("div",{className:"day-item",children:[s.jsx("div",{className:`day-circle ${$}`,children:$==="completed"||$==="today-completed"?"":D.short}),s.jsx("div",{className:`day-label ${O?"today":""}`,children:D.label})]},T)})}),s.jsx("div",{className:"milestone-header",children:"Daily Rewards"}),s.jsx("div",{className:"rewards-grid",children:E.map((D,T)=>{const $=M(D.day);return s.jsxs("div",{className:`reward-item ${$.isLocked?"locked":$.canClaim?"can-claim":$.isClaimed?"completed":""}`,onClick:O=>H(D,D.day),children:[s.jsxs("div",{className:"reward-day",children:["Day ",D.day]}),s.jsx("div",{className:"reward-icon",children:D.icon}),s.jsx("div",{className:"reward-text",children:D.label})]},T)})})]}),s.jsxs("div",{className:"milestone-section",children:[s.jsx("div",{className:"milestone-header",children:"Next Milestone"}),s.jsxs("div",{className:"milestone-progress",children:[s.jsxs("div",{className:"milestone-info",children:[s.jsxs("div",{className:"milestone-current",children:[s.jsx("span",{className:"milestone-emoji",children:W.emoji}),s.jsx("span",{className:"milestone-text",children:W.label})]}),s.jsxs("span",{className:"milestone-target",children:[r,"/",W.days," days"]})]}),s.jsx("div",{className:"progress-bar-container",children:s.jsx("div",{className:"progress-bar-fill",style:{width:`${Q}%`}})})]})]}),s.jsx("div",{className:"motivational-text",children:r===0?"Start your journey! Claim your Day 0 bonus and complete a quiz!":`Day ${r} strong! Keep going to unlock more rewards!`}),s.jsxs("button",{className:"play-button",onClick:R,children:[s.jsx("span",{children:"Continue Streak"}),s.jsx("span",{children:"→"})]}),C&&s.jsxs("div",{className:"locked-message",children:[s.jsx("span",{className:"locked-message-icon",children:"🔒"}),s.jsx("span",{className:"locked-message-text",children:C.day===1&&C.currentStreak===0?"Complete your first quiz to unlock this reward!":`Reach Day ${C.day} streak to unlock this reward!`})]}),m&&s.jsxs(s.Fragment,{children:[s.jsx("div",{className:"modal-overlay"}),s.jsx("div",{className:"reward-modal",ref:_,children:s.jsxs("div",{className:"gift-box",children:[s.jsxs("div",{className:"gift-box-body",children:[s.jsx("div",{className:"gift-box-ribbon"}),s.jsx("div",{className:"gift-box-ribbon-horizontal"})]}),s.jsx("div",{className:`gift-box-lid ${p?"opening":""}`,children:s.jsx("div",{className:"gift-box-bow",children:"🎀"})}),s.jsxs("div",{className:`gift-content ${p?"show":""}`,children:[s.jsx("div",{className:"gift-content-icon",children:m.icon}),s.jsxs("div",{className:"gift-content-title",children:["Day ",m.day]}),s.jsx("div",{className:"gift-content-desc",children:m.label})]})]})})]}),f&&s.jsx("div",{className:"celebration",children:"🎉"})]})}const $g=[{id:1,title:"Play 3 quizzes today",progress:2,target:3,reward:60,claimed:!1,icon:"🎮",color:"#FF6B6B",difficulty:"Easy"},{id:2,title:"Score 8+ twice",progress:1,target:2,reward:80,claimed:!1,icon:"🎯",color:"#4ECDC4",difficulty:"Medium"},{id:3,title:"Practice 15 questions",progress:15,target:15,reward:100,claimed:!0,icon:"📚",color:"#FFD93D",difficulty:"Easy"},{id:4,title:"Win 5 in a row",progress:3,target:5,reward:150,claimed:!1,icon:"🔥",color:"#A8E6CF",difficulty:"Hard"},{id:5,title:"Complete a speed run",progress:0,target:1,reward:120,claimed:!1,icon:"⚡",color:"#C7B8FF",difficulty:"Medium"}];function Bg(){const{player:e,addCoins:t}=Ln(),[n,r]=d.useState($g),[i,o]=d.useState((e==null?void 0:e.coins)||0),[a,l]=d.useState(null),[c,u]=d.useState(0);d.useEffect(()=>{const w=n.filter(y=>y.progress>=y.target).length;u(Math.round(w/n.length*100))},[n]);const m=(w,y)=>{navigator.vibrate&&navigator.vibrate([20,10,20]),l(w),setTimeout(()=>{r(j=>j.map(C=>C.id===w?{...C,claimed:!0}:C)),o(j=>j+y),t(y),l(null)},600)},x=w=>{switch(w){case"Easy":return"#10B981";case"Medium":return"#F59E0B";case"Hard":return"#EF4444";default:return"#6B7280"}},p=()=>{const w=new Date,y=new Date(w);y.setDate(y.getDate()+1),y.setHours(5,0,0,0);const j=y-w,C=Math.floor(j/(1e3*60*60)),v=Math.floor(j%(1e3*60*60)/(1e3*60));return`${C}h ${v}m`};return s.jsxs("div",{className:"quests-screen",children:[s.jsx("style",{jsx:!0,children:`
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
      `}),s.jsxs("div",{className:"animated-bg",children:[s.jsx("div",{className:"floating-icon",children:"🎮"}),s.jsx("div",{className:"floating-icon",children:"🎯"}),s.jsx("div",{className:"floating-icon",children:"🏆"}),s.jsx("div",{className:"floating-icon",children:"⭐"})]}),s.jsxs("div",{className:"header",children:[s.jsx("button",{className:"back-button",onClick:()=>window.history.back(),children:"← Back"}),s.jsxs("div",{className:"coins-display",children:["🪙 ",i]}),s.jsxs("div",{className:"title-section",children:[s.jsx("h1",{className:"main-title",children:"Daily Quests"}),s.jsx("p",{className:"subtitle",children:"Complete challenges, earn rewards!"})]})]}),s.jsxs("div",{className:"daily-progress-card",children:[s.jsxs("div",{className:"progress-header",children:[s.jsx("span",{className:"progress-label",children:"Today's Progress"}),s.jsxs("span",{className:"progress-value",children:[c,"%"]})]}),s.jsx("div",{className:"progress-bar-container",children:s.jsx("div",{className:"progress-bar-fill",style:{width:`${c}%`}})})]}),s.jsx("div",{className:"quests-list",children:n.map(w=>{const y=Math.min(100,Math.round(w.progress/w.target*100)),j=y===100,C=w.color+"CC";return s.jsxs("div",{className:`quest-card ${j?"completed":""}`,style:{"--quest-color":w.color,"--quest-color-dark":C},children:[s.jsx("div",{className:"quest-accent"}),j&&w.claimed&&s.jsx("div",{className:"completed-checkmark",children:"✓"}),s.jsxs("div",{className:"quest-content",children:[s.jsx("div",{className:`quest-icon-container ${a===w.id?"animating":""}`,children:w.icon}),s.jsxs("div",{className:"quest-details",children:[s.jsxs("div",{className:"quest-header",children:[s.jsx("span",{className:"quest-title",children:w.title}),s.jsx("span",{className:"difficulty-badge",style:{background:`${x(w.difficulty)}20`,color:x(w.difficulty)},children:w.difficulty})]}),s.jsxs("div",{className:"progress-info",children:[s.jsx("div",{className:"mini-progress-bar",children:s.jsx("div",{className:"mini-progress-fill",style:{width:`${y}%`}})}),s.jsxs("div",{className:"progress-text",children:[s.jsxs("span",{className:"progress-numbers",children:[w.progress,"/",w.target]}),s.jsxs("span",{className:"reward-display",children:["🪙 ",w.reward]})]})]})]}),s.jsx("button",{onClick:()=>j&&!w.claimed&&m(w.id,w.reward),disabled:w.claimed,className:`action-button ${w.claimed?"claimed":j?"can-claim":"in-progress"}`,style:!j&&!w.claimed?{"--quest-color":w.color,"--quest-color-dark":C}:{},children:w.claimed?"✓":j?"Claim":"Do it"})]})]},w.id)})}),s.jsxs("div",{className:"timer-card",children:[s.jsx("div",{className:"timer-icon",children:"⏰"}),s.jsx("div",{className:"timer-label",children:"New Quests In"}),s.jsx("div",{className:"timer-value",children:p()})]}),a&&s.jsx("div",{className:"reward-animation",children:"🪙"})]})}function qg({title:e,subtitle:t,children:n}){const r=ht();return s.jsxs("div",{className:"min-h-full bg-black text-white px-4 pt-12",children:[s.jsxs("div",{className:"flex items-center justify-between mb-4",children:[s.jsx("button",{onClick:()=>r(-1),className:"px-3 py-1.5 rounded-xl border border-white/10 bg-white/5 text-sm",children:"← Back"}),s.jsxs("div",{className:"text-center",children:[s.jsx("div",{className:"text-base font-semibold leading-tight",children:e}),t&&s.jsx("div",{className:"text-xs text-white/60 leading-tight",children:t})]}),s.jsx("div",{className:"w-[68px]"})]}),n]})}function Ug(){const e=ht(),[t,n]=d.useState(!0),[r,i]=d.useState(!0),[o,a]=d.useState(!0);return s.jsxs(qg,{title:"Settings",subtitle:"Make it yours",children:[s.jsxs("div",{className:"rounded-2xl border border-white/10 bg-white/5 divide-y divide-white/10",children:[s.jsx(Yr,{label:"Sound",right:s.jsx(Xo,{on:t,set:n})}),s.jsx(Yr,{label:"Haptics",right:s.jsx(Xo,{on:r,set:i})}),s.jsx(Yr,{label:"Notifications",right:s.jsx(Xo,{on:o,set:a})}),s.jsx(Yr,{label:"Edit Profile",right:s.jsx("span",{className:"text-white/60",children:"→"}),onClick:()=>e("/profile")}),s.jsx(Yr,{label:"Privacy Policy",right:s.jsx("span",{className:"text-white/60",children:"→"}),onClick:()=>window.open("#","_blank")})]}),s.jsx("button",{className:`mt-3 w-full rounded-2xl border border-white/10 bg-white/5 py-3 text-red-300 font-semibold
                   transition-transform duration-150 active:scale-[0.99]`,onClick:()=>alert("Sign out hook here"),children:"Sign out"})]})}function Yr({label:e,right:t,onClick:n}){return s.jsxs("button",{type:"button",onClick:n,className:`w-full flex items-center justify-between px-4 py-4 text-left
                 hover:bg-white/5 first:rounded-t-2xl last:rounded-b-2xl transition`,children:[s.jsx("span",{className:"text-sm font-semibold",children:e}),t]})}function Xo({on:e,set:t}){return s.jsx("span",{onClick:n=>{n.stopPropagation(),t(r=>!r),navigator.vibrate&&navigator.vibrate(10)},className:["inline-flex w-11 h-6 items-center rounded-full border transition px-0.5",e?"bg-lime-400 border-lime-400 justify-end":"bg-white/10 border-white/10 justify-start"].join(" "),role:"switch","aria-checked":e,children:s.jsx("span",{className:["w-5 h-5 rounded-full bg-white",e?"":"bg-white"].join(" ")})})}const Wg={name:"Player",avatar:"wizard",level:1,totalXP:0,coins:0,energy:Ke.MAX_ENERGY,energyRegenAt:null,comboStreak:0,bestCombo:0,currentStreak:0,bestStreak:0,totalDays:0,lastPlayedDate:null,totalQuizzes:0,totalCorrect:0,achievements:[],unlockedAvatars:["wizard","knight"],createdAt:Date.now()};function Qg(){const[e,t]=d.useState(()=>{const u=localStorage.getItem(Ke.STORAGE_KEYS.PLAYER);return u?JSON.parse(u):Wg});d.useEffect(()=>{localStorage.setItem(Ke.STORAGE_KEYS.PLAYER,JSON.stringify(e))},[e]),d.useEffect(()=>{if(e.energy<Ke.MAX_ENERGY&&e.energyRegenAt){const u=setInterval(()=>{const m=Date.now();m>=e.energyRegenAt&&t(x=>({...x,energy:Math.min(x.energy+1,Ke.MAX_ENERGY),energyRegenAt:x.energy+1<Ke.MAX_ENERGY?m+Ke.ENERGY_REGEN_TIME:null}))},6e4);return()=>clearInterval(u)}},[e.energy,e.energyRegenAt]);const n=d.useCallback(u=>{t(m=>{const x=m.totalXP+u,p=mu(m.totalXP),w=mu(x);let y=[...m.unlockedAvatars];return w>p&&Ke.AVATARS.forEach(j=>{j.unlockLevel===w&&!y.includes(j.id)&&y.push(j.id)}),{...m,totalXP:x,level:w,unlockedAvatars:y}})},[]),r=d.useCallback(u=>{const x=new Error().stack;console.log("[COINS DEBUG] ================"),console.log("[COINS DEBUG] Amount:",u),console.log("[COINS DEBUG] Called from:",x.split(`
`)[2]),console.log("[COINS DEBUG] Full trace:",x),t(p=>(console.log("[COINS DEBUG] Current:",p.coins,"→ New:",p.coins+u),{...p,coins:p.coins+u}))},[]),i=d.useCallback((u=1)=>e.energy<u?!1:(t(m=>({...m,energy:m.energy-u,energyRegenAt:m.energyRegenAt||Date.now()+Ke.ENERGY_REGEN_TIME})),!0),[e.energy]),o=d.useCallback(u=>{t(m=>{const x=u?m.comboStreak+1:0;return{...m,comboStreak:x,bestCombo:Math.max(m.bestCombo,x)}})},[]),a=d.useCallback(()=>{t(u=>({...u,comboStreak:0}))},[]),l=d.useCallback(u=>{e.unlockedAvatars.includes(u)&&t(m=>({...m,avatar:u}))},[e.unlockedAvatars]),c=d.useCallback(()=>{const u=new Date().toDateString();t(m=>{if(m.lastPlayedDate===u)return m;const x=new Date;x.setDate(x.getDate()-1);const p=x.toDateString();let w=m.currentStreak;return m.lastPlayedDate===p?w=m.currentStreak+1:(m.lastPlayedDate,w=1),{...m,currentStreak:w,bestStreak:Math.max(m.bestStreak,w),totalDays:m.totalDays+1,lastPlayedDate:u}})},[]);return{player:e,addXP:n,addCoins:r,useEnergy:i,updateCombo:o,resetCombo:a,changeAvatar:l,updateDailyStreak:c,levelProgress:Sx(e.totalXP)}}const h0=d.createContext(null),Ln=()=>{const e=d.useContext(h0);if(!e)throw new Error("useGame must be used within GameProvider");return e};function Hg({children:e}){const t=Qg();return s.jsx(h0.Provider,{value:t,children:e})}function Yg(){return s.jsx(Hg,{children:s.jsx(Oh,{children:s.jsxs(Ve,{element:s.jsx(bx,{}),children:[s.jsx(Ve,{path:"/",element:s.jsx(xu,{})}),s.jsx(Ve,{path:"/play",element:s.jsx(qx,{})}),s.jsx(Ve,{path:"/play/party",element:s.jsx(fg,{})}),s.jsx(Ve,{path:"/profile",element:s.jsx(mg,{})}),s.jsx(Ve,{path:"/profile/leaderboard",element:s.jsx(pg,{})}),s.jsx(Ve,{path:"/profile/history",element:s.jsx(bg,{})}),s.jsx(Ve,{path:"/profile/rewards",element:s.jsx(Fg,{})}),s.jsx(Ve,{path:"/profile/badges",element:s.jsx(Dg,{})}),s.jsx(Ve,{path:"/profile/achievements",element:s.jsx(Ag,{})}),s.jsx(Ve,{path:"/profile/streaks",element:s.jsx(Og,{})}),s.jsx(Ve,{path:"/profile/quests",element:s.jsx(Bg,{})}),s.jsx(Ve,{path:"/profile/settings",element:s.jsx(Ug,{})}),s.jsx(Ve,{path:"/leaders",element:s.jsx(Dh,{to:"/profile/leaderboard",replace:!0})}),s.jsx(Ve,{path:"/quiz/:category",element:s.jsx(sg,{})}),s.jsx(Ve,{path:"*",element:s.jsx(xu,{})})]})})})}Jo.createRoot(document.getElementById("root")).render(s.jsx(it.StrictMode,{children:s.jsx(cx,{children:s.jsx(Yg,{})})}));export{x0 as c,Pu as g};
