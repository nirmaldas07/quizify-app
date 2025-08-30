(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();var x0=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Pu(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Tu={exports:{}},Gi={},zu={exports:{}},ye={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Es=Symbol.for("react.element"),g0=Symbol.for("react.portal"),v0=Symbol.for("react.fragment"),y0=Symbol.for("react.strict_mode"),b0=Symbol.for("react.profiler"),w0=Symbol.for("react.provider"),j0=Symbol.for("react.context"),k0=Symbol.for("react.forward_ref"),N0=Symbol.for("react.suspense"),S0=Symbol.for("react.memo"),C0=Symbol.for("react.lazy"),Jl=Symbol.iterator;function E0(e){return e===null||typeof e!="object"?null:(e=Jl&&e[Jl]||e["@@iterator"],typeof e=="function"?e:null)}var Mu={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Lu=Object.assign,Iu={};function Er(e,t,n){this.props=e,this.context=t,this.refs=Iu,this.updater=n||Mu}Er.prototype.isReactComponent={};Er.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Er.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Fu(){}Fu.prototype=Er.prototype;function Ya(e,t,n){this.props=e,this.context=t,this.refs=Iu,this.updater=n||Mu}var Va=Ya.prototype=new Fu;Va.constructor=Ya;Lu(Va,Er.prototype);Va.isPureReactComponent=!0;var Zl=Array.isArray,Du=Object.prototype.hasOwnProperty,Ga={current:null},Au={key:!0,ref:!0,__self:!0,__source:!0};function Ou(e,t,n){var r,i={},o=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(o=""+t.key),t)Du.call(t,r)&&!Au.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var c=Array(l),u=0;u<l;u++)c[u]=arguments[u+2];i.children=c}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Es,type:e,key:o,ref:a,props:i,_owner:Ga.current}}function _0(e,t){return{$$typeof:Es,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Ka(e){return typeof e=="object"&&e!==null&&e.$$typeof===Es}function R0(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var ec=/\/+/g;function bo(e,t){return typeof e=="object"&&e!==null&&e.key!=null?R0(""+e.key):t.toString(36)}function ai(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case Es:case g0:a=!0}}if(a)return a=e,i=i(a),e=r===""?"."+bo(a,0):r,Zl(i)?(n="",e!=null&&(n=e.replace(ec,"$&/")+"/"),ai(i,t,n,"",function(u){return u})):i!=null&&(Ka(i)&&(i=_0(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(ec,"$&/")+"/")+e)),t.push(i)),1;if(a=0,r=r===""?".":r+":",Zl(e))for(var l=0;l<e.length;l++){o=e[l];var c=r+bo(o,l);a+=ai(o,t,n,c,i)}else if(c=E0(e),typeof c=="function")for(e=c.call(e),l=0;!(o=e.next()).done;)o=o.value,c=r+bo(o,l++),a+=ai(o,t,n,c,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function Fs(e,t,n){if(e==null)return e;var r=[],i=0;return ai(e,r,"","",function(o){return t.call(n,o,i++)}),r}function P0(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var lt={current:null},li={transition:null},T0={ReactCurrentDispatcher:lt,ReactCurrentBatchConfig:li,ReactCurrentOwner:Ga};function $u(){throw Error("act(...) is not supported in production builds of React.")}ye.Children={map:Fs,forEach:function(e,t,n){Fs(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Fs(e,function(){t++}),t},toArray:function(e){return Fs(e,function(t){return t})||[]},only:function(e){if(!Ka(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};ye.Component=Er;ye.Fragment=v0;ye.Profiler=b0;ye.PureComponent=Ya;ye.StrictMode=y0;ye.Suspense=N0;ye.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=T0;ye.act=$u;ye.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Lu({},e.props),i=e.key,o=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,a=Ga.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(c in t)Du.call(t,c)&&!Au.hasOwnProperty(c)&&(r[c]=t[c]===void 0&&l!==void 0?l[c]:t[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){l=Array(c);for(var u=0;u<c;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:Es,type:e.type,key:i,ref:o,props:r,_owner:a}};ye.createContext=function(e){return e={$$typeof:j0,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:w0,_context:e},e.Consumer=e};ye.createElement=Ou;ye.createFactory=function(e){var t=Ou.bind(null,e);return t.type=e,t};ye.createRef=function(){return{current:null}};ye.forwardRef=function(e){return{$$typeof:k0,render:e}};ye.isValidElement=Ka;ye.lazy=function(e){return{$$typeof:C0,_payload:{_status:-1,_result:e},_init:P0}};ye.memo=function(e,t){return{$$typeof:S0,type:e,compare:t===void 0?null:t}};ye.startTransition=function(e){var t=li.transition;li.transition={};try{e()}finally{li.transition=t}};ye.unstable_act=$u;ye.useCallback=function(e,t){return lt.current.useCallback(e,t)};ye.useContext=function(e){return lt.current.useContext(e)};ye.useDebugValue=function(){};ye.useDeferredValue=function(e){return lt.current.useDeferredValue(e)};ye.useEffect=function(e,t){return lt.current.useEffect(e,t)};ye.useId=function(){return lt.current.useId()};ye.useImperativeHandle=function(e,t,n){return lt.current.useImperativeHandle(e,t,n)};ye.useInsertionEffect=function(e,t){return lt.current.useInsertionEffect(e,t)};ye.useLayoutEffect=function(e,t){return lt.current.useLayoutEffect(e,t)};ye.useMemo=function(e,t){return lt.current.useMemo(e,t)};ye.useReducer=function(e,t,n){return lt.current.useReducer(e,t,n)};ye.useRef=function(e){return lt.current.useRef(e)};ye.useState=function(e){return lt.current.useState(e)};ye.useSyncExternalStore=function(e,t,n){return lt.current.useSyncExternalStore(e,t,n)};ye.useTransition=function(){return lt.current.useTransition()};ye.version="18.3.1";zu.exports=ye;var d=zu.exports;const it=Pu(d);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var z0=d,M0=Symbol.for("react.element"),L0=Symbol.for("react.fragment"),I0=Object.prototype.hasOwnProperty,F0=z0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,D0={key:!0,ref:!0,__self:!0,__source:!0};function Bu(e,t,n){var r,i={},o=null,a=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)I0.call(t,r)&&!D0.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:M0,type:e,key:o,ref:a,props:i,_owner:F0.current}}Gi.Fragment=L0;Gi.jsx=Bu;Gi.jsxs=Bu;Tu.exports=Gi;var s=Tu.exports,Jo={},Uu={exports:{}},wt={},qu={exports:{}},Wu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(R,T){var M=R.length;R.push(T);e:for(;0<M;){var z=M-1>>>1,O=R[z];if(0<i(O,T))R[z]=T,R[M]=O,M=z;else break e}}function n(R){return R.length===0?null:R[0]}function r(R){if(R.length===0)return null;var T=R[0],M=R.pop();if(M!==T){R[0]=M;e:for(var z=0,O=R.length,$=O>>>1;z<$;){var re=2*(z+1)-1,B=R[re],ne=re+1,fe=R[ne];if(0>i(B,M))ne<O&&0>i(fe,B)?(R[z]=fe,R[ne]=M,z=ne):(R[z]=B,R[re]=M,z=re);else if(ne<O&&0>i(fe,M))R[z]=fe,R[ne]=M,z=ne;else break e}}return T}function i(R,T){var M=R.sortIndex-T.sortIndex;return M!==0?M:R.id-T.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var a=Date,l=a.now();e.unstable_now=function(){return a.now()-l}}var c=[],u=[],m=1,x=null,p=3,w=!1,y=!1,j=!1,C=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function h(R){for(var T=n(u);T!==null;){if(T.callback===null)r(u);else if(T.startTime<=R)r(u),T.sortIndex=T.expirationTime,t(c,T);else break;T=n(u)}}function S(R){if(j=!1,h(R),!y)if(n(c)!==null)y=!0,q(_);else{var T=n(u);T!==null&&Q(S,T.startTime-R)}}function _(R,T){y=!1,j&&(j=!1,g(v),v=-1),w=!0;var M=p;try{for(h(T),x=n(c);x!==null&&(!(x.expirationTime>T)||R&&!E());){var z=x.callback;if(typeof z=="function"){x.callback=null,p=x.priorityLevel;var O=z(x.expirationTime<=T);T=e.unstable_now(),typeof O=="function"?x.callback=O:x===n(c)&&r(c),h(T)}else r(c);x=n(c)}if(x!==null)var $=!0;else{var re=n(u);re!==null&&Q(S,re.startTime-T),$=!1}return $}finally{x=null,p=M,w=!1}}var L=!1,N=null,v=-1,b=5,k=-1;function E(){return!(e.unstable_now()-k<b)}function I(){if(N!==null){var R=e.unstable_now();k=R;var T=!0;try{T=N(!0,R)}finally{T?H():(L=!1,N=null)}}else L=!1}var H;if(typeof f=="function")H=function(){f(I)};else if(typeof MessageChannel<"u"){var te=new MessageChannel,D=te.port2;te.port1.onmessage=I,H=function(){D.postMessage(null)}}else H=function(){C(I,0)};function q(R){N=R,L||(L=!0,H())}function Q(R,T){v=C(function(){R(e.unstable_now())},T)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(R){R.callback=null},e.unstable_continueExecution=function(){y||w||(y=!0,q(_))},e.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<R?Math.floor(1e3/R):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(R){switch(p){case 1:case 2:case 3:var T=3;break;default:T=p}var M=p;p=T;try{return R()}finally{p=M}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(R,T){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var M=p;p=R;try{return T()}finally{p=M}},e.unstable_scheduleCallback=function(R,T,M){var z=e.unstable_now();switch(typeof M=="object"&&M!==null?(M=M.delay,M=typeof M=="number"&&0<M?z+M:z):M=z,R){case 1:var O=-1;break;case 2:O=250;break;case 5:O=1073741823;break;case 4:O=1e4;break;default:O=5e3}return O=M+O,R={id:m++,callback:T,priorityLevel:R,startTime:M,expirationTime:O,sortIndex:-1},M>z?(R.sortIndex=M,t(u,R),n(c)===null&&R===n(u)&&(j?(g(v),v=-1):j=!0,Q(S,M-z))):(R.sortIndex=O,t(c,R),y||w||(y=!0,q(_))),R},e.unstable_shouldYield=E,e.unstable_wrapCallback=function(R){var T=p;return function(){var M=p;p=T;try{return R.apply(this,arguments)}finally{p=M}}}})(Wu);qu.exports=Wu;var A0=qu.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var O0=d,bt=A0;function W(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Qu=new Set,cs={};function Kn(e,t){br(e,t),br(e+"Capture",t)}function br(e,t){for(cs[e]=t,e=0;e<t.length;e++)Qu.add(t[e])}var rn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Zo=Object.prototype.hasOwnProperty,$0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,tc={},nc={};function B0(e){return Zo.call(nc,e)?!0:Zo.call(tc,e)?!1:$0.test(e)?nc[e]=!0:(tc[e]=!0,!1)}function U0(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function q0(e,t,n,r){if(t===null||typeof t>"u"||U0(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ct(e,t,n,r,i,o,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=a}var Ze={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Ze[e]=new ct(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Ze[t]=new ct(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Ze[e]=new ct(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Ze[e]=new ct(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Ze[e]=new ct(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Ze[e]=new ct(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Ze[e]=new ct(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Ze[e]=new ct(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Ze[e]=new ct(e,5,!1,e.toLowerCase(),null,!1,!1)});var Xa=/[\-:]([a-z])/g;function Ja(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Xa,Ja);Ze[t]=new ct(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Xa,Ja);Ze[t]=new ct(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Xa,Ja);Ze[t]=new ct(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Ze[e]=new ct(e,1,!1,e.toLowerCase(),null,!1,!1)});Ze.xlinkHref=new ct("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Ze[e]=new ct(e,1,!1,e.toLowerCase(),null,!0,!0)});function Za(e,t,n,r){var i=Ze.hasOwnProperty(t)?Ze[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(q0(t,n,i,r)&&(n=null),r||i===null?B0(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var cn=O0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ds=Symbol.for("react.element"),tr=Symbol.for("react.portal"),nr=Symbol.for("react.fragment"),el=Symbol.for("react.strict_mode"),ea=Symbol.for("react.profiler"),Hu=Symbol.for("react.provider"),Yu=Symbol.for("react.context"),tl=Symbol.for("react.forward_ref"),ta=Symbol.for("react.suspense"),na=Symbol.for("react.suspense_list"),nl=Symbol.for("react.memo"),hn=Symbol.for("react.lazy"),Vu=Symbol.for("react.offscreen"),rc=Symbol.iterator;function Ir(e){return e===null||typeof e!="object"?null:(e=rc&&e[rc]||e["@@iterator"],typeof e=="function"?e:null)}var $e=Object.assign,wo;function Gr(e){if(wo===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);wo=t&&t[1]||""}return`
`+wo+e}var jo=!1;function ko(e,t){if(!e||jo)return"";jo=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),a=i.length-1,l=o.length-1;1<=a&&0<=l&&i[a]!==o[l];)l--;for(;1<=a&&0<=l;a--,l--)if(i[a]!==o[l]){if(a!==1||l!==1)do if(a--,l--,0>l||i[a]!==o[l]){var c=`
`+i[a].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=a&&0<=l);break}}}finally{jo=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Gr(e):""}function W0(e){switch(e.tag){case 5:return Gr(e.type);case 16:return Gr("Lazy");case 13:return Gr("Suspense");case 19:return Gr("SuspenseList");case 0:case 2:case 15:return e=ko(e.type,!1),e;case 11:return e=ko(e.type.render,!1),e;case 1:return e=ko(e.type,!0),e;default:return""}}function ra(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case nr:return"Fragment";case tr:return"Portal";case ea:return"Profiler";case el:return"StrictMode";case ta:return"Suspense";case na:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Yu:return(e.displayName||"Context")+".Consumer";case Hu:return(e._context.displayName||"Context")+".Provider";case tl:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case nl:return t=e.displayName||null,t!==null?t:ra(e.type)||"Memo";case hn:t=e._payload,e=e._init;try{return ra(e(t))}catch{}}return null}function Q0(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ra(t);case 8:return t===el?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Pn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Gu(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function H0(e){var t=Gu(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,o.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function As(e){e._valueTracker||(e._valueTracker=H0(e))}function Ku(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Gu(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function ki(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function sa(e,t){var n=t.checked;return $e({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function sc(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Pn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Xu(e,t){t=t.checked,t!=null&&Za(e,"checked",t,!1)}function ia(e,t){Xu(e,t);var n=Pn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?oa(e,t.type,n):t.hasOwnProperty("defaultValue")&&oa(e,t.type,Pn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function ic(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function oa(e,t,n){(t!=="number"||ki(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Kr=Array.isArray;function mr(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Pn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function aa(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(W(91));return $e({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function oc(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(W(92));if(Kr(n)){if(1<n.length)throw Error(W(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Pn(n)}}function Ju(e,t){var n=Pn(t.value),r=Pn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function ac(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Zu(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function la(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Zu(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Os,ed=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Os=Os||document.createElement("div"),Os.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Os.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function us(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Zr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Y0=["Webkit","ms","Moz","O"];Object.keys(Zr).forEach(function(e){Y0.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Zr[t]=Zr[e]})});function td(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Zr.hasOwnProperty(e)&&Zr[e]?(""+t).trim():t+"px"}function nd(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=td(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var V0=$e({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ca(e,t){if(t){if(V0[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(W(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(W(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(W(61))}if(t.style!=null&&typeof t.style!="object")throw Error(W(62))}}function ua(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var da=null;function rl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var fa=null,pr=null,hr=null;function lc(e){if(e=Ps(e)){if(typeof fa!="function")throw Error(W(280));var t=e.stateNode;t&&(t=eo(t),fa(e.stateNode,e.type,t))}}function rd(e){pr?hr?hr.push(e):hr=[e]:pr=e}function sd(){if(pr){var e=pr,t=hr;if(hr=pr=null,lc(e),t)for(e=0;e<t.length;e++)lc(t[e])}}function id(e,t){return e(t)}function od(){}var No=!1;function ad(e,t,n){if(No)return e(t,n);No=!0;try{return id(e,t,n)}finally{No=!1,(pr!==null||hr!==null)&&(od(),sd())}}function ds(e,t){var n=e.stateNode;if(n===null)return null;var r=eo(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(W(231,t,typeof n));return n}var ma=!1;if(rn)try{var Fr={};Object.defineProperty(Fr,"passive",{get:function(){ma=!0}}),window.addEventListener("test",Fr,Fr),window.removeEventListener("test",Fr,Fr)}catch{ma=!1}function G0(e,t,n,r,i,o,a,l,c){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(m){this.onError(m)}}var es=!1,Ni=null,Si=!1,pa=null,K0={onError:function(e){es=!0,Ni=e}};function X0(e,t,n,r,i,o,a,l,c){es=!1,Ni=null,G0.apply(K0,arguments)}function J0(e,t,n,r,i,o,a,l,c){if(X0.apply(this,arguments),es){if(es){var u=Ni;es=!1,Ni=null}else throw Error(W(198));Si||(Si=!0,pa=u)}}function Xn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function ld(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function cc(e){if(Xn(e)!==e)throw Error(W(188))}function Z0(e){var t=e.alternate;if(!t){if(t=Xn(e),t===null)throw Error(W(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return cc(i),e;if(o===r)return cc(i),t;o=o.sibling}throw Error(W(188))}if(n.return!==r.return)n=i,r=o;else{for(var a=!1,l=i.child;l;){if(l===n){a=!0,n=i,r=o;break}if(l===r){a=!0,r=i,n=o;break}l=l.sibling}if(!a){for(l=o.child;l;){if(l===n){a=!0,n=o,r=i;break}if(l===r){a=!0,r=o,n=i;break}l=l.sibling}if(!a)throw Error(W(189))}}if(n.alternate!==r)throw Error(W(190))}if(n.tag!==3)throw Error(W(188));return n.stateNode.current===n?e:t}function cd(e){return e=Z0(e),e!==null?ud(e):null}function ud(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=ud(e);if(t!==null)return t;e=e.sibling}return null}var dd=bt.unstable_scheduleCallback,uc=bt.unstable_cancelCallback,em=bt.unstable_shouldYield,tm=bt.unstable_requestPaint,Ue=bt.unstable_now,nm=bt.unstable_getCurrentPriorityLevel,sl=bt.unstable_ImmediatePriority,fd=bt.unstable_UserBlockingPriority,Ci=bt.unstable_NormalPriority,rm=bt.unstable_LowPriority,md=bt.unstable_IdlePriority,Ki=null,Gt=null;function sm(e){if(Gt&&typeof Gt.onCommitFiberRoot=="function")try{Gt.onCommitFiberRoot(Ki,e,void 0,(e.current.flags&128)===128)}catch{}}var Ft=Math.clz32?Math.clz32:am,im=Math.log,om=Math.LN2;function am(e){return e>>>=0,e===0?32:31-(im(e)/om|0)|0}var $s=64,Bs=4194304;function Xr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ei(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,a=n&268435455;if(a!==0){var l=a&~i;l!==0?r=Xr(l):(o&=a,o!==0&&(r=Xr(o)))}else a=n&~i,a!==0?r=Xr(a):o!==0&&(r=Xr(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Ft(t),i=1<<n,r|=e[n],t&=~i;return r}function lm(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function cm(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var a=31-Ft(o),l=1<<a,c=i[a];c===-1?(!(l&n)||l&r)&&(i[a]=lm(l,t)):c<=t&&(e.expiredLanes|=l),o&=~l}}function ha(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function pd(){var e=$s;return $s<<=1,!($s&4194240)&&($s=64),e}function So(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function _s(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ft(t),e[t]=n}function um(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Ft(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function il(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ft(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var Pe=0;function hd(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var xd,ol,gd,vd,yd,xa=!1,Us=[],jn=null,kn=null,Nn=null,fs=new Map,ms=new Map,vn=[],dm="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function dc(e,t){switch(e){case"focusin":case"focusout":jn=null;break;case"dragenter":case"dragleave":kn=null;break;case"mouseover":case"mouseout":Nn=null;break;case"pointerover":case"pointerout":fs.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ms.delete(t.pointerId)}}function Dr(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=Ps(t),t!==null&&ol(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function fm(e,t,n,r,i){switch(t){case"focusin":return jn=Dr(jn,e,t,n,r,i),!0;case"dragenter":return kn=Dr(kn,e,t,n,r,i),!0;case"mouseover":return Nn=Dr(Nn,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return fs.set(o,Dr(fs.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,ms.set(o,Dr(ms.get(o)||null,e,t,n,r,i)),!0}return!1}function bd(e){var t=On(e.target);if(t!==null){var n=Xn(t);if(n!==null){if(t=n.tag,t===13){if(t=ld(n),t!==null){e.blockedOn=t,yd(e.priority,function(){gd(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ci(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=ga(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);da=r,n.target.dispatchEvent(r),da=null}else return t=Ps(n),t!==null&&ol(t),e.blockedOn=n,!1;t.shift()}return!0}function fc(e,t,n){ci(e)&&n.delete(t)}function mm(){xa=!1,jn!==null&&ci(jn)&&(jn=null),kn!==null&&ci(kn)&&(kn=null),Nn!==null&&ci(Nn)&&(Nn=null),fs.forEach(fc),ms.forEach(fc)}function Ar(e,t){e.blockedOn===t&&(e.blockedOn=null,xa||(xa=!0,bt.unstable_scheduleCallback(bt.unstable_NormalPriority,mm)))}function ps(e){function t(i){return Ar(i,e)}if(0<Us.length){Ar(Us[0],e);for(var n=1;n<Us.length;n++){var r=Us[n];r.blockedOn===e&&(r.blockedOn=null)}}for(jn!==null&&Ar(jn,e),kn!==null&&Ar(kn,e),Nn!==null&&Ar(Nn,e),fs.forEach(t),ms.forEach(t),n=0;n<vn.length;n++)r=vn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<vn.length&&(n=vn[0],n.blockedOn===null);)bd(n),n.blockedOn===null&&vn.shift()}var xr=cn.ReactCurrentBatchConfig,_i=!0;function pm(e,t,n,r){var i=Pe,o=xr.transition;xr.transition=null;try{Pe=1,al(e,t,n,r)}finally{Pe=i,xr.transition=o}}function hm(e,t,n,r){var i=Pe,o=xr.transition;xr.transition=null;try{Pe=4,al(e,t,n,r)}finally{Pe=i,xr.transition=o}}function al(e,t,n,r){if(_i){var i=ga(e,t,n,r);if(i===null)Io(e,t,r,Ri,n),dc(e,r);else if(fm(i,e,t,n,r))r.stopPropagation();else if(dc(e,r),t&4&&-1<dm.indexOf(e)){for(;i!==null;){var o=Ps(i);if(o!==null&&xd(o),o=ga(e,t,n,r),o===null&&Io(e,t,r,Ri,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else Io(e,t,r,null,n)}}var Ri=null;function ga(e,t,n,r){if(Ri=null,e=rl(r),e=On(e),e!==null)if(t=Xn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=ld(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ri=e,null}function wd(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(nm()){case sl:return 1;case fd:return 4;case Ci:case rm:return 16;case md:return 536870912;default:return 16}default:return 16}}var bn=null,ll=null,ui=null;function jd(){if(ui)return ui;var e,t=ll,n=t.length,r,i="value"in bn?bn.value:bn.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===i[o-r];r++);return ui=i.slice(e,1<r?1-r:void 0)}function di(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function qs(){return!0}function mc(){return!1}function jt(e){function t(n,r,i,o,a){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=a,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(o):o[l]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?qs:mc,this.isPropagationStopped=mc,this}return $e(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=qs)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=qs)},persist:function(){},isPersistent:qs}),t}var _r={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},cl=jt(_r),Rs=$e({},_r,{view:0,detail:0}),xm=jt(Rs),Co,Eo,Or,Xi=$e({},Rs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ul,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Or&&(Or&&e.type==="mousemove"?(Co=e.screenX-Or.screenX,Eo=e.screenY-Or.screenY):Eo=Co=0,Or=e),Co)},movementY:function(e){return"movementY"in e?e.movementY:Eo}}),pc=jt(Xi),gm=$e({},Xi,{dataTransfer:0}),vm=jt(gm),ym=$e({},Rs,{relatedTarget:0}),_o=jt(ym),bm=$e({},_r,{animationName:0,elapsedTime:0,pseudoElement:0}),wm=jt(bm),jm=$e({},_r,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),km=jt(jm),Nm=$e({},_r,{data:0}),hc=jt(Nm),Sm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Cm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Em={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function _m(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Em[e])?!!t[e]:!1}function ul(){return _m}var Rm=$e({},Rs,{key:function(e){if(e.key){var t=Sm[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=di(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Cm[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ul,charCode:function(e){return e.type==="keypress"?di(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?di(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Pm=jt(Rm),Tm=$e({},Xi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),xc=jt(Tm),zm=$e({},Rs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ul}),Mm=jt(zm),Lm=$e({},_r,{propertyName:0,elapsedTime:0,pseudoElement:0}),Im=jt(Lm),Fm=$e({},Xi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Dm=jt(Fm),Am=[9,13,27,32],dl=rn&&"CompositionEvent"in window,ts=null;rn&&"documentMode"in document&&(ts=document.documentMode);var Om=rn&&"TextEvent"in window&&!ts,kd=rn&&(!dl||ts&&8<ts&&11>=ts),gc=String.fromCharCode(32),vc=!1;function Nd(e,t){switch(e){case"keyup":return Am.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Sd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var rr=!1;function $m(e,t){switch(e){case"compositionend":return Sd(t);case"keypress":return t.which!==32?null:(vc=!0,gc);case"textInput":return e=t.data,e===gc&&vc?null:e;default:return null}}function Bm(e,t){if(rr)return e==="compositionend"||!dl&&Nd(e,t)?(e=jd(),ui=ll=bn=null,rr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return kd&&t.locale!=="ko"?null:t.data;default:return null}}var Um={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function yc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Um[e.type]:t==="textarea"}function Cd(e,t,n,r){rd(r),t=Pi(t,"onChange"),0<t.length&&(n=new cl("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var ns=null,hs=null;function qm(e){Dd(e,0)}function Ji(e){var t=or(e);if(Ku(t))return e}function Wm(e,t){if(e==="change")return t}var Ed=!1;if(rn){var Ro;if(rn){var Po="oninput"in document;if(!Po){var bc=document.createElement("div");bc.setAttribute("oninput","return;"),Po=typeof bc.oninput=="function"}Ro=Po}else Ro=!1;Ed=Ro&&(!document.documentMode||9<document.documentMode)}function wc(){ns&&(ns.detachEvent("onpropertychange",_d),hs=ns=null)}function _d(e){if(e.propertyName==="value"&&Ji(hs)){var t=[];Cd(t,hs,e,rl(e)),ad(qm,t)}}function Qm(e,t,n){e==="focusin"?(wc(),ns=t,hs=n,ns.attachEvent("onpropertychange",_d)):e==="focusout"&&wc()}function Hm(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ji(hs)}function Ym(e,t){if(e==="click")return Ji(t)}function Vm(e,t){if(e==="input"||e==="change")return Ji(t)}function Gm(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var At=typeof Object.is=="function"?Object.is:Gm;function xs(e,t){if(At(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Zo.call(t,i)||!At(e[i],t[i]))return!1}return!0}function jc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function kc(e,t){var n=jc(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=jc(n)}}function Rd(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Rd(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Pd(){for(var e=window,t=ki();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=ki(e.document)}return t}function fl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Km(e){var t=Pd(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Rd(n.ownerDocument.documentElement,n)){if(r!==null&&fl(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=kc(n,o);var a=kc(n,r);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Xm=rn&&"documentMode"in document&&11>=document.documentMode,sr=null,va=null,rs=null,ya=!1;function Nc(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ya||sr==null||sr!==ki(r)||(r=sr,"selectionStart"in r&&fl(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),rs&&xs(rs,r)||(rs=r,r=Pi(va,"onSelect"),0<r.length&&(t=new cl("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=sr)))}function Ws(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var ir={animationend:Ws("Animation","AnimationEnd"),animationiteration:Ws("Animation","AnimationIteration"),animationstart:Ws("Animation","AnimationStart"),transitionend:Ws("Transition","TransitionEnd")},To={},Td={};rn&&(Td=document.createElement("div").style,"AnimationEvent"in window||(delete ir.animationend.animation,delete ir.animationiteration.animation,delete ir.animationstart.animation),"TransitionEvent"in window||delete ir.transitionend.transition);function Zi(e){if(To[e])return To[e];if(!ir[e])return e;var t=ir[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Td)return To[e]=t[n];return e}var zd=Zi("animationend"),Md=Zi("animationiteration"),Ld=Zi("animationstart"),Id=Zi("transitionend"),Fd=new Map,Sc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function zn(e,t){Fd.set(e,t),Kn(t,[e])}for(var zo=0;zo<Sc.length;zo++){var Mo=Sc[zo],Jm=Mo.toLowerCase(),Zm=Mo[0].toUpperCase()+Mo.slice(1);zn(Jm,"on"+Zm)}zn(zd,"onAnimationEnd");zn(Md,"onAnimationIteration");zn(Ld,"onAnimationStart");zn("dblclick","onDoubleClick");zn("focusin","onFocus");zn("focusout","onBlur");zn(Id,"onTransitionEnd");br("onMouseEnter",["mouseout","mouseover"]);br("onMouseLeave",["mouseout","mouseover"]);br("onPointerEnter",["pointerout","pointerover"]);br("onPointerLeave",["pointerout","pointerover"]);Kn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Kn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Kn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Kn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Kn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Kn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Jr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ep=new Set("cancel close invalid load scroll toggle".split(" ").concat(Jr));function Cc(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,J0(r,t,void 0,e),e.currentTarget=null}function Dd(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var a=r.length-1;0<=a;a--){var l=r[a],c=l.instance,u=l.currentTarget;if(l=l.listener,c!==o&&i.isPropagationStopped())break e;Cc(i,l,u),o=c}else for(a=0;a<r.length;a++){if(l=r[a],c=l.instance,u=l.currentTarget,l=l.listener,c!==o&&i.isPropagationStopped())break e;Cc(i,l,u),o=c}}}if(Si)throw e=pa,Si=!1,pa=null,e}function Le(e,t){var n=t[Na];n===void 0&&(n=t[Na]=new Set);var r=e+"__bubble";n.has(r)||(Ad(t,e,2,!1),n.add(r))}function Lo(e,t,n){var r=0;t&&(r|=4),Ad(n,e,r,t)}var Qs="_reactListening"+Math.random().toString(36).slice(2);function gs(e){if(!e[Qs]){e[Qs]=!0,Qu.forEach(function(n){n!=="selectionchange"&&(ep.has(n)||Lo(n,!1,e),Lo(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Qs]||(t[Qs]=!0,Lo("selectionchange",!1,t))}}function Ad(e,t,n,r){switch(wd(t)){case 1:var i=pm;break;case 4:i=hm;break;default:i=al}n=i.bind(null,t,n,e),i=void 0,!ma||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Io(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var c=a.tag;if((c===3||c===4)&&(c=a.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;a=a.return}for(;l!==null;){if(a=On(l),a===null)return;if(c=a.tag,c===5||c===6){r=o=a;continue e}l=l.parentNode}}r=r.return}ad(function(){var u=o,m=rl(n),x=[];e:{var p=Fd.get(e);if(p!==void 0){var w=cl,y=e;switch(e){case"keypress":if(di(n)===0)break e;case"keydown":case"keyup":w=Pm;break;case"focusin":y="focus",w=_o;break;case"focusout":y="blur",w=_o;break;case"beforeblur":case"afterblur":w=_o;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=pc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=vm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=Mm;break;case zd:case Md:case Ld:w=wm;break;case Id:w=Im;break;case"scroll":w=xm;break;case"wheel":w=Dm;break;case"copy":case"cut":case"paste":w=km;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=xc}var j=(t&4)!==0,C=!j&&e==="scroll",g=j?p!==null?p+"Capture":null:p;j=[];for(var f=u,h;f!==null;){h=f;var S=h.stateNode;if(h.tag===5&&S!==null&&(h=S,g!==null&&(S=ds(f,g),S!=null&&j.push(vs(f,S,h)))),C)break;f=f.return}0<j.length&&(p=new w(p,y,null,n,m),x.push({event:p,listeners:j}))}}if(!(t&7)){e:{if(p=e==="mouseover"||e==="pointerover",w=e==="mouseout"||e==="pointerout",p&&n!==da&&(y=n.relatedTarget||n.fromElement)&&(On(y)||y[sn]))break e;if((w||p)&&(p=m.window===m?m:(p=m.ownerDocument)?p.defaultView||p.parentWindow:window,w?(y=n.relatedTarget||n.toElement,w=u,y=y?On(y):null,y!==null&&(C=Xn(y),y!==C||y.tag!==5&&y.tag!==6)&&(y=null)):(w=null,y=u),w!==y)){if(j=pc,S="onMouseLeave",g="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(j=xc,S="onPointerLeave",g="onPointerEnter",f="pointer"),C=w==null?p:or(w),h=y==null?p:or(y),p=new j(S,f+"leave",w,n,m),p.target=C,p.relatedTarget=h,S=null,On(m)===u&&(j=new j(g,f+"enter",y,n,m),j.target=h,j.relatedTarget=C,S=j),C=S,w&&y)t:{for(j=w,g=y,f=0,h=j;h;h=er(h))f++;for(h=0,S=g;S;S=er(S))h++;for(;0<f-h;)j=er(j),f--;for(;0<h-f;)g=er(g),h--;for(;f--;){if(j===g||g!==null&&j===g.alternate)break t;j=er(j),g=er(g)}j=null}else j=null;w!==null&&Ec(x,p,w,j,!1),y!==null&&C!==null&&Ec(x,C,y,j,!0)}}e:{if(p=u?or(u):window,w=p.nodeName&&p.nodeName.toLowerCase(),w==="select"||w==="input"&&p.type==="file")var _=Wm;else if(yc(p))if(Ed)_=Vm;else{_=Hm;var L=Qm}else(w=p.nodeName)&&w.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(_=Ym);if(_&&(_=_(e,u))){Cd(x,_,n,m);break e}L&&L(e,p,u),e==="focusout"&&(L=p._wrapperState)&&L.controlled&&p.type==="number"&&oa(p,"number",p.value)}switch(L=u?or(u):window,e){case"focusin":(yc(L)||L.contentEditable==="true")&&(sr=L,va=u,rs=null);break;case"focusout":rs=va=sr=null;break;case"mousedown":ya=!0;break;case"contextmenu":case"mouseup":case"dragend":ya=!1,Nc(x,n,m);break;case"selectionchange":if(Xm)break;case"keydown":case"keyup":Nc(x,n,m)}var N;if(dl)e:{switch(e){case"compositionstart":var v="onCompositionStart";break e;case"compositionend":v="onCompositionEnd";break e;case"compositionupdate":v="onCompositionUpdate";break e}v=void 0}else rr?Nd(e,n)&&(v="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(v="onCompositionStart");v&&(kd&&n.locale!=="ko"&&(rr||v!=="onCompositionStart"?v==="onCompositionEnd"&&rr&&(N=jd()):(bn=m,ll="value"in bn?bn.value:bn.textContent,rr=!0)),L=Pi(u,v),0<L.length&&(v=new hc(v,e,null,n,m),x.push({event:v,listeners:L}),N?v.data=N:(N=Sd(n),N!==null&&(v.data=N)))),(N=Om?$m(e,n):Bm(e,n))&&(u=Pi(u,"onBeforeInput"),0<u.length&&(m=new hc("onBeforeInput","beforeinput",null,n,m),x.push({event:m,listeners:u}),m.data=N))}Dd(x,t)})}function vs(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Pi(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=ds(e,n),o!=null&&r.unshift(vs(e,o,i)),o=ds(e,t),o!=null&&r.push(vs(e,o,i))),e=e.return}return r}function er(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ec(e,t,n,r,i){for(var o=t._reactName,a=[];n!==null&&n!==r;){var l=n,c=l.alternate,u=l.stateNode;if(c!==null&&c===r)break;l.tag===5&&u!==null&&(l=u,i?(c=ds(n,o),c!=null&&a.unshift(vs(n,c,l))):i||(c=ds(n,o),c!=null&&a.push(vs(n,c,l)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var tp=/\r\n?/g,np=/\u0000|\uFFFD/g;function _c(e){return(typeof e=="string"?e:""+e).replace(tp,`
`).replace(np,"")}function Hs(e,t,n){if(t=_c(t),_c(e)!==t&&n)throw Error(W(425))}function Ti(){}var ba=null,wa=null;function ja(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ka=typeof setTimeout=="function"?setTimeout:void 0,rp=typeof clearTimeout=="function"?clearTimeout:void 0,Rc=typeof Promise=="function"?Promise:void 0,sp=typeof queueMicrotask=="function"?queueMicrotask:typeof Rc<"u"?function(e){return Rc.resolve(null).then(e).catch(ip)}:ka;function ip(e){setTimeout(function(){throw e})}function Fo(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),ps(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);ps(t)}function Sn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Pc(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Rr=Math.random().toString(36).slice(2),Yt="__reactFiber$"+Rr,ys="__reactProps$"+Rr,sn="__reactContainer$"+Rr,Na="__reactEvents$"+Rr,op="__reactListeners$"+Rr,ap="__reactHandles$"+Rr;function On(e){var t=e[Yt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[sn]||n[Yt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Pc(e);e!==null;){if(n=e[Yt])return n;e=Pc(e)}return t}e=n,n=e.parentNode}return null}function Ps(e){return e=e[Yt]||e[sn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function or(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(W(33))}function eo(e){return e[ys]||null}var Sa=[],ar=-1;function Mn(e){return{current:e}}function Ie(e){0>ar||(e.current=Sa[ar],Sa[ar]=null,ar--)}function Me(e,t){ar++,Sa[ar]=e.current,e.current=t}var Tn={},st=Mn(Tn),mt=Mn(!1),Qn=Tn;function wr(e,t){var n=e.type.contextTypes;if(!n)return Tn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function pt(e){return e=e.childContextTypes,e!=null}function zi(){Ie(mt),Ie(st)}function Tc(e,t,n){if(st.current!==Tn)throw Error(W(168));Me(st,t),Me(mt,n)}function Od(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(W(108,Q0(e)||"Unknown",i));return $e({},n,r)}function Mi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Tn,Qn=st.current,Me(st,e),Me(mt,mt.current),!0}function zc(e,t,n){var r=e.stateNode;if(!r)throw Error(W(169));n?(e=Od(e,t,Qn),r.__reactInternalMemoizedMergedChildContext=e,Ie(mt),Ie(st),Me(st,e)):Ie(mt),Me(mt,n)}var Jt=null,to=!1,Do=!1;function $d(e){Jt===null?Jt=[e]:Jt.push(e)}function lp(e){to=!0,$d(e)}function Ln(){if(!Do&&Jt!==null){Do=!0;var e=0,t=Pe;try{var n=Jt;for(Pe=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Jt=null,to=!1}catch(i){throw Jt!==null&&(Jt=Jt.slice(e+1)),dd(sl,Ln),i}finally{Pe=t,Do=!1}}return null}var lr=[],cr=0,Li=null,Ii=0,kt=[],Nt=0,Hn=null,Zt=1,en="";function Dn(e,t){lr[cr++]=Ii,lr[cr++]=Li,Li=e,Ii=t}function Bd(e,t,n){kt[Nt++]=Zt,kt[Nt++]=en,kt[Nt++]=Hn,Hn=e;var r=Zt;e=en;var i=32-Ft(r)-1;r&=~(1<<i),n+=1;var o=32-Ft(t)+i;if(30<o){var a=i-i%5;o=(r&(1<<a)-1).toString(32),r>>=a,i-=a,Zt=1<<32-Ft(t)+i|n<<i|r,en=o+e}else Zt=1<<o|n<<i|r,en=e}function ml(e){e.return!==null&&(Dn(e,1),Bd(e,1,0))}function pl(e){for(;e===Li;)Li=lr[--cr],lr[cr]=null,Ii=lr[--cr],lr[cr]=null;for(;e===Hn;)Hn=kt[--Nt],kt[Nt]=null,en=kt[--Nt],kt[Nt]=null,Zt=kt[--Nt],kt[Nt]=null}var yt=null,vt=null,Fe=!1,Mt=null;function Ud(e,t){var n=St(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Mc(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,yt=e,vt=Sn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,yt=e,vt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Hn!==null?{id:Zt,overflow:en}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=St(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,yt=e,vt=null,!0):!1;default:return!1}}function Ca(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ea(e){if(Fe){var t=vt;if(t){var n=t;if(!Mc(e,t)){if(Ca(e))throw Error(W(418));t=Sn(n.nextSibling);var r=yt;t&&Mc(e,t)?Ud(r,n):(e.flags=e.flags&-4097|2,Fe=!1,yt=e)}}else{if(Ca(e))throw Error(W(418));e.flags=e.flags&-4097|2,Fe=!1,yt=e}}}function Lc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;yt=e}function Ys(e){if(e!==yt)return!1;if(!Fe)return Lc(e),Fe=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!ja(e.type,e.memoizedProps)),t&&(t=vt)){if(Ca(e))throw qd(),Error(W(418));for(;t;)Ud(e,t),t=Sn(t.nextSibling)}if(Lc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(W(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){vt=Sn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}vt=null}}else vt=yt?Sn(e.stateNode.nextSibling):null;return!0}function qd(){for(var e=vt;e;)e=Sn(e.nextSibling)}function jr(){vt=yt=null,Fe=!1}function hl(e){Mt===null?Mt=[e]:Mt.push(e)}var cp=cn.ReactCurrentBatchConfig;function $r(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(W(309));var r=n.stateNode}if(!r)throw Error(W(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(a){var l=i.refs;a===null?delete l[o]:l[o]=a},t._stringRef=o,t)}if(typeof e!="string")throw Error(W(284));if(!n._owner)throw Error(W(290,e))}return e}function Vs(e,t){throw e=Object.prototype.toString.call(t),Error(W(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Ic(e){var t=e._init;return t(e._payload)}function Wd(e){function t(g,f){if(e){var h=g.deletions;h===null?(g.deletions=[f],g.flags|=16):h.push(f)}}function n(g,f){if(!e)return null;for(;f!==null;)t(g,f),f=f.sibling;return null}function r(g,f){for(g=new Map;f!==null;)f.key!==null?g.set(f.key,f):g.set(f.index,f),f=f.sibling;return g}function i(g,f){return g=Rn(g,f),g.index=0,g.sibling=null,g}function o(g,f,h){return g.index=h,e?(h=g.alternate,h!==null?(h=h.index,h<f?(g.flags|=2,f):h):(g.flags|=2,f)):(g.flags|=1048576,f)}function a(g){return e&&g.alternate===null&&(g.flags|=2),g}function l(g,f,h,S){return f===null||f.tag!==6?(f=Wo(h,g.mode,S),f.return=g,f):(f=i(f,h),f.return=g,f)}function c(g,f,h,S){var _=h.type;return _===nr?m(g,f,h.props.children,S,h.key):f!==null&&(f.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===hn&&Ic(_)===f.type)?(S=i(f,h.props),S.ref=$r(g,f,h),S.return=g,S):(S=vi(h.type,h.key,h.props,null,g.mode,S),S.ref=$r(g,f,h),S.return=g,S)}function u(g,f,h,S){return f===null||f.tag!==4||f.stateNode.containerInfo!==h.containerInfo||f.stateNode.implementation!==h.implementation?(f=Qo(h,g.mode,S),f.return=g,f):(f=i(f,h.children||[]),f.return=g,f)}function m(g,f,h,S,_){return f===null||f.tag!==7?(f=qn(h,g.mode,S,_),f.return=g,f):(f=i(f,h),f.return=g,f)}function x(g,f,h){if(typeof f=="string"&&f!==""||typeof f=="number")return f=Wo(""+f,g.mode,h),f.return=g,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Ds:return h=vi(f.type,f.key,f.props,null,g.mode,h),h.ref=$r(g,null,f),h.return=g,h;case tr:return f=Qo(f,g.mode,h),f.return=g,f;case hn:var S=f._init;return x(g,S(f._payload),h)}if(Kr(f)||Ir(f))return f=qn(f,g.mode,h,null),f.return=g,f;Vs(g,f)}return null}function p(g,f,h,S){var _=f!==null?f.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return _!==null?null:l(g,f,""+h,S);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Ds:return h.key===_?c(g,f,h,S):null;case tr:return h.key===_?u(g,f,h,S):null;case hn:return _=h._init,p(g,f,_(h._payload),S)}if(Kr(h)||Ir(h))return _!==null?null:m(g,f,h,S,null);Vs(g,h)}return null}function w(g,f,h,S,_){if(typeof S=="string"&&S!==""||typeof S=="number")return g=g.get(h)||null,l(f,g,""+S,_);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Ds:return g=g.get(S.key===null?h:S.key)||null,c(f,g,S,_);case tr:return g=g.get(S.key===null?h:S.key)||null,u(f,g,S,_);case hn:var L=S._init;return w(g,f,h,L(S._payload),_)}if(Kr(S)||Ir(S))return g=g.get(h)||null,m(f,g,S,_,null);Vs(f,S)}return null}function y(g,f,h,S){for(var _=null,L=null,N=f,v=f=0,b=null;N!==null&&v<h.length;v++){N.index>v?(b=N,N=null):b=N.sibling;var k=p(g,N,h[v],S);if(k===null){N===null&&(N=b);break}e&&N&&k.alternate===null&&t(g,N),f=o(k,f,v),L===null?_=k:L.sibling=k,L=k,N=b}if(v===h.length)return n(g,N),Fe&&Dn(g,v),_;if(N===null){for(;v<h.length;v++)N=x(g,h[v],S),N!==null&&(f=o(N,f,v),L===null?_=N:L.sibling=N,L=N);return Fe&&Dn(g,v),_}for(N=r(g,N);v<h.length;v++)b=w(N,g,v,h[v],S),b!==null&&(e&&b.alternate!==null&&N.delete(b.key===null?v:b.key),f=o(b,f,v),L===null?_=b:L.sibling=b,L=b);return e&&N.forEach(function(E){return t(g,E)}),Fe&&Dn(g,v),_}function j(g,f,h,S){var _=Ir(h);if(typeof _!="function")throw Error(W(150));if(h=_.call(h),h==null)throw Error(W(151));for(var L=_=null,N=f,v=f=0,b=null,k=h.next();N!==null&&!k.done;v++,k=h.next()){N.index>v?(b=N,N=null):b=N.sibling;var E=p(g,N,k.value,S);if(E===null){N===null&&(N=b);break}e&&N&&E.alternate===null&&t(g,N),f=o(E,f,v),L===null?_=E:L.sibling=E,L=E,N=b}if(k.done)return n(g,N),Fe&&Dn(g,v),_;if(N===null){for(;!k.done;v++,k=h.next())k=x(g,k.value,S),k!==null&&(f=o(k,f,v),L===null?_=k:L.sibling=k,L=k);return Fe&&Dn(g,v),_}for(N=r(g,N);!k.done;v++,k=h.next())k=w(N,g,v,k.value,S),k!==null&&(e&&k.alternate!==null&&N.delete(k.key===null?v:k.key),f=o(k,f,v),L===null?_=k:L.sibling=k,L=k);return e&&N.forEach(function(I){return t(g,I)}),Fe&&Dn(g,v),_}function C(g,f,h,S){if(typeof h=="object"&&h!==null&&h.type===nr&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case Ds:e:{for(var _=h.key,L=f;L!==null;){if(L.key===_){if(_=h.type,_===nr){if(L.tag===7){n(g,L.sibling),f=i(L,h.props.children),f.return=g,g=f;break e}}else if(L.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===hn&&Ic(_)===L.type){n(g,L.sibling),f=i(L,h.props),f.ref=$r(g,L,h),f.return=g,g=f;break e}n(g,L);break}else t(g,L);L=L.sibling}h.type===nr?(f=qn(h.props.children,g.mode,S,h.key),f.return=g,g=f):(S=vi(h.type,h.key,h.props,null,g.mode,S),S.ref=$r(g,f,h),S.return=g,g=S)}return a(g);case tr:e:{for(L=h.key;f!==null;){if(f.key===L)if(f.tag===4&&f.stateNode.containerInfo===h.containerInfo&&f.stateNode.implementation===h.implementation){n(g,f.sibling),f=i(f,h.children||[]),f.return=g,g=f;break e}else{n(g,f);break}else t(g,f);f=f.sibling}f=Qo(h,g.mode,S),f.return=g,g=f}return a(g);case hn:return L=h._init,C(g,f,L(h._payload),S)}if(Kr(h))return y(g,f,h,S);if(Ir(h))return j(g,f,h,S);Vs(g,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,f!==null&&f.tag===6?(n(g,f.sibling),f=i(f,h),f.return=g,g=f):(n(g,f),f=Wo(h,g.mode,S),f.return=g,g=f),a(g)):n(g,f)}return C}var kr=Wd(!0),Qd=Wd(!1),Fi=Mn(null),Di=null,ur=null,xl=null;function gl(){xl=ur=Di=null}function vl(e){var t=Fi.current;Ie(Fi),e._currentValue=t}function _a(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function gr(e,t){Di=e,xl=ur=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(ft=!0),e.firstContext=null)}function Et(e){var t=e._currentValue;if(xl!==e)if(e={context:e,memoizedValue:t,next:null},ur===null){if(Di===null)throw Error(W(308));ur=e,Di.dependencies={lanes:0,firstContext:e}}else ur=ur.next=e;return t}var $n=null;function yl(e){$n===null?$n=[e]:$n.push(e)}function Hd(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,yl(t)):(n.next=i.next,i.next=n),t.interleaved=n,on(e,r)}function on(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var xn=!1;function bl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Yd(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function tn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Cn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,Se&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,on(e,n)}return i=r.interleaved,i===null?(t.next=t,yl(r)):(t.next=i.next,i.next=t),r.interleaved=t,on(e,n)}function fi(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,il(e,n)}}function Fc(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=a:o=o.next=a,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Ai(e,t,n,r){var i=e.updateQueue;xn=!1;var o=i.firstBaseUpdate,a=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var c=l,u=c.next;c.next=null,a===null?o=u:a.next=u,a=c;var m=e.alternate;m!==null&&(m=m.updateQueue,l=m.lastBaseUpdate,l!==a&&(l===null?m.firstBaseUpdate=u:l.next=u,m.lastBaseUpdate=c))}if(o!==null){var x=i.baseState;a=0,m=u=c=null,l=o;do{var p=l.lane,w=l.eventTime;if((r&p)===p){m!==null&&(m=m.next={eventTime:w,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var y=e,j=l;switch(p=t,w=n,j.tag){case 1:if(y=j.payload,typeof y=="function"){x=y.call(w,x,p);break e}x=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=j.payload,p=typeof y=="function"?y.call(w,x,p):y,p==null)break e;x=$e({},x,p);break e;case 2:xn=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,p=i.effects,p===null?i.effects=[l]:p.push(l))}else w={eventTime:w,lane:p,tag:l.tag,payload:l.payload,callback:l.callback,next:null},m===null?(u=m=w,c=x):m=m.next=w,a|=p;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;p=l,l=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);if(m===null&&(c=x),i.baseState=c,i.firstBaseUpdate=u,i.lastBaseUpdate=m,t=i.shared.interleaved,t!==null){i=t;do a|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);Vn|=a,e.lanes=a,e.memoizedState=x}}function Dc(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(W(191,i));i.call(r)}}}var Ts={},Kt=Mn(Ts),bs=Mn(Ts),ws=Mn(Ts);function Bn(e){if(e===Ts)throw Error(W(174));return e}function wl(e,t){switch(Me(ws,t),Me(bs,e),Me(Kt,Ts),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:la(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=la(t,e)}Ie(Kt),Me(Kt,t)}function Nr(){Ie(Kt),Ie(bs),Ie(ws)}function Vd(e){Bn(ws.current);var t=Bn(Kt.current),n=la(t,e.type);t!==n&&(Me(bs,e),Me(Kt,n))}function jl(e){bs.current===e&&(Ie(Kt),Ie(bs))}var Ae=Mn(0);function Oi(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ao=[];function kl(){for(var e=0;e<Ao.length;e++)Ao[e]._workInProgressVersionPrimary=null;Ao.length=0}var mi=cn.ReactCurrentDispatcher,Oo=cn.ReactCurrentBatchConfig,Yn=0,Oe=null,Qe=null,Ve=null,$i=!1,ss=!1,js=0,up=0;function tt(){throw Error(W(321))}function Nl(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!At(e[n],t[n]))return!1;return!0}function Sl(e,t,n,r,i,o){if(Yn=o,Oe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,mi.current=e===null||e.memoizedState===null?pp:hp,e=n(r,i),ss){o=0;do{if(ss=!1,js=0,25<=o)throw Error(W(301));o+=1,Ve=Qe=null,t.updateQueue=null,mi.current=xp,e=n(r,i)}while(ss)}if(mi.current=Bi,t=Qe!==null&&Qe.next!==null,Yn=0,Ve=Qe=Oe=null,$i=!1,t)throw Error(W(300));return e}function Cl(){var e=js!==0;return js=0,e}function Ht(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ve===null?Oe.memoizedState=Ve=e:Ve=Ve.next=e,Ve}function _t(){if(Qe===null){var e=Oe.alternate;e=e!==null?e.memoizedState:null}else e=Qe.next;var t=Ve===null?Oe.memoizedState:Ve.next;if(t!==null)Ve=t,Qe=e;else{if(e===null)throw Error(W(310));Qe=e,e={memoizedState:Qe.memoizedState,baseState:Qe.baseState,baseQueue:Qe.baseQueue,queue:Qe.queue,next:null},Ve===null?Oe.memoizedState=Ve=e:Ve=Ve.next=e}return Ve}function ks(e,t){return typeof t=="function"?t(e):t}function $o(e){var t=_t(),n=t.queue;if(n===null)throw Error(W(311));n.lastRenderedReducer=e;var r=Qe,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var a=i.next;i.next=o.next,o.next=a}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var l=a=null,c=null,u=o;do{var m=u.lane;if((Yn&m)===m)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var x={lane:m,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(l=c=x,a=r):c=c.next=x,Oe.lanes|=m,Vn|=m}u=u.next}while(u!==null&&u!==o);c===null?a=r:c.next=l,At(r,t.memoizedState)||(ft=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=c,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,Oe.lanes|=o,Vn|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Bo(e){var t=_t(),n=t.queue;if(n===null)throw Error(W(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var a=i=i.next;do o=e(o,a.action),a=a.next;while(a!==i);At(o,t.memoizedState)||(ft=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Gd(){}function Kd(e,t){var n=Oe,r=_t(),i=t(),o=!At(r.memoizedState,i);if(o&&(r.memoizedState=i,ft=!0),r=r.queue,El(Zd.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||Ve!==null&&Ve.memoizedState.tag&1){if(n.flags|=2048,Ns(9,Jd.bind(null,n,r,i,t),void 0,null),Ge===null)throw Error(W(349));Yn&30||Xd(n,t,i)}return i}function Xd(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Oe.updateQueue,t===null?(t={lastEffect:null,stores:null},Oe.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Jd(e,t,n,r){t.value=n,t.getSnapshot=r,ef(t)&&tf(e)}function Zd(e,t,n){return n(function(){ef(t)&&tf(e)})}function ef(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!At(e,n)}catch{return!0}}function tf(e){var t=on(e,1);t!==null&&Dt(t,e,1,-1)}function Ac(e){var t=Ht();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ks,lastRenderedState:e},t.queue=e,e=e.dispatch=mp.bind(null,Oe,e),[t.memoizedState,e]}function Ns(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Oe.updateQueue,t===null?(t={lastEffect:null,stores:null},Oe.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function nf(){return _t().memoizedState}function pi(e,t,n,r){var i=Ht();Oe.flags|=e,i.memoizedState=Ns(1|t,n,void 0,r===void 0?null:r)}function no(e,t,n,r){var i=_t();r=r===void 0?null:r;var o=void 0;if(Qe!==null){var a=Qe.memoizedState;if(o=a.destroy,r!==null&&Nl(r,a.deps)){i.memoizedState=Ns(t,n,o,r);return}}Oe.flags|=e,i.memoizedState=Ns(1|t,n,o,r)}function Oc(e,t){return pi(8390656,8,e,t)}function El(e,t){return no(2048,8,e,t)}function rf(e,t){return no(4,2,e,t)}function sf(e,t){return no(4,4,e,t)}function of(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function af(e,t,n){return n=n!=null?n.concat([e]):null,no(4,4,of.bind(null,t,e),n)}function _l(){}function lf(e,t){var n=_t();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Nl(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function cf(e,t){var n=_t();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Nl(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function uf(e,t,n){return Yn&21?(At(n,t)||(n=pd(),Oe.lanes|=n,Vn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,ft=!0),e.memoizedState=n)}function dp(e,t){var n=Pe;Pe=n!==0&&4>n?n:4,e(!0);var r=Oo.transition;Oo.transition={};try{e(!1),t()}finally{Pe=n,Oo.transition=r}}function df(){return _t().memoizedState}function fp(e,t,n){var r=_n(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},ff(e))mf(t,n);else if(n=Hd(e,t,n,r),n!==null){var i=at();Dt(n,e,r,i),pf(n,t,r)}}function mp(e,t,n){var r=_n(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(ff(e))mf(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var a=t.lastRenderedState,l=o(a,n);if(i.hasEagerState=!0,i.eagerState=l,At(l,a)){var c=t.interleaved;c===null?(i.next=i,yl(t)):(i.next=c.next,c.next=i),t.interleaved=i;return}}catch{}finally{}n=Hd(e,t,i,r),n!==null&&(i=at(),Dt(n,e,r,i),pf(n,t,r))}}function ff(e){var t=e.alternate;return e===Oe||t!==null&&t===Oe}function mf(e,t){ss=$i=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function pf(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,il(e,n)}}var Bi={readContext:Et,useCallback:tt,useContext:tt,useEffect:tt,useImperativeHandle:tt,useInsertionEffect:tt,useLayoutEffect:tt,useMemo:tt,useReducer:tt,useRef:tt,useState:tt,useDebugValue:tt,useDeferredValue:tt,useTransition:tt,useMutableSource:tt,useSyncExternalStore:tt,useId:tt,unstable_isNewReconciler:!1},pp={readContext:Et,useCallback:function(e,t){return Ht().memoizedState=[e,t===void 0?null:t],e},useContext:Et,useEffect:Oc,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,pi(4194308,4,of.bind(null,t,e),n)},useLayoutEffect:function(e,t){return pi(4194308,4,e,t)},useInsertionEffect:function(e,t){return pi(4,2,e,t)},useMemo:function(e,t){var n=Ht();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Ht();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=fp.bind(null,Oe,e),[r.memoizedState,e]},useRef:function(e){var t=Ht();return e={current:e},t.memoizedState=e},useState:Ac,useDebugValue:_l,useDeferredValue:function(e){return Ht().memoizedState=e},useTransition:function(){var e=Ac(!1),t=e[0];return e=dp.bind(null,e[1]),Ht().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Oe,i=Ht();if(Fe){if(n===void 0)throw Error(W(407));n=n()}else{if(n=t(),Ge===null)throw Error(W(349));Yn&30||Xd(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,Oc(Zd.bind(null,r,o,e),[e]),r.flags|=2048,Ns(9,Jd.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=Ht(),t=Ge.identifierPrefix;if(Fe){var n=en,r=Zt;n=(r&~(1<<32-Ft(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=js++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=up++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},hp={readContext:Et,useCallback:lf,useContext:Et,useEffect:El,useImperativeHandle:af,useInsertionEffect:rf,useLayoutEffect:sf,useMemo:cf,useReducer:$o,useRef:nf,useState:function(){return $o(ks)},useDebugValue:_l,useDeferredValue:function(e){var t=_t();return uf(t,Qe.memoizedState,e)},useTransition:function(){var e=$o(ks)[0],t=_t().memoizedState;return[e,t]},useMutableSource:Gd,useSyncExternalStore:Kd,useId:df,unstable_isNewReconciler:!1},xp={readContext:Et,useCallback:lf,useContext:Et,useEffect:El,useImperativeHandle:af,useInsertionEffect:rf,useLayoutEffect:sf,useMemo:cf,useReducer:Bo,useRef:nf,useState:function(){return Bo(ks)},useDebugValue:_l,useDeferredValue:function(e){var t=_t();return Qe===null?t.memoizedState=e:uf(t,Qe.memoizedState,e)},useTransition:function(){var e=Bo(ks)[0],t=_t().memoizedState;return[e,t]},useMutableSource:Gd,useSyncExternalStore:Kd,useId:df,unstable_isNewReconciler:!1};function Tt(e,t){if(e&&e.defaultProps){t=$e({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Ra(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:$e({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ro={isMounted:function(e){return(e=e._reactInternals)?Xn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=at(),i=_n(e),o=tn(r,i);o.payload=t,n!=null&&(o.callback=n),t=Cn(e,o,i),t!==null&&(Dt(t,e,i,r),fi(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=at(),i=_n(e),o=tn(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=Cn(e,o,i),t!==null&&(Dt(t,e,i,r),fi(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=at(),r=_n(e),i=tn(n,r);i.tag=2,t!=null&&(i.callback=t),t=Cn(e,i,r),t!==null&&(Dt(t,e,r,n),fi(t,e,r))}};function $c(e,t,n,r,i,o,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,a):t.prototype&&t.prototype.isPureReactComponent?!xs(n,r)||!xs(i,o):!0}function hf(e,t,n){var r=!1,i=Tn,o=t.contextType;return typeof o=="object"&&o!==null?o=Et(o):(i=pt(t)?Qn:st.current,r=t.contextTypes,o=(r=r!=null)?wr(e,i):Tn),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ro,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Bc(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ro.enqueueReplaceState(t,t.state,null)}function Pa(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},bl(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=Et(o):(o=pt(t)?Qn:st.current,i.context=wr(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Ra(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&ro.enqueueReplaceState(i,i.state,null),Ai(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Sr(e,t){try{var n="",r=t;do n+=W0(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function Uo(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Ta(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var gp=typeof WeakMap=="function"?WeakMap:Map;function xf(e,t,n){n=tn(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){qi||(qi=!0,Ba=r),Ta(e,t)},n}function gf(e,t,n){n=tn(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Ta(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Ta(e,t),typeof r!="function"&&(En===null?En=new Set([this]):En.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function Uc(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new gp;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Tp.bind(null,e,t,n),t.then(e,e))}function qc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Wc(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=tn(-1,1),t.tag=2,Cn(n,t,1))),n.lanes|=1),e)}var vp=cn.ReactCurrentOwner,ft=!1;function ot(e,t,n,r){t.child=e===null?Qd(t,null,n,r):kr(t,e.child,n,r)}function Qc(e,t,n,r,i){n=n.render;var o=t.ref;return gr(t,i),r=Sl(e,t,n,r,o,i),n=Cl(),e!==null&&!ft?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,an(e,t,i)):(Fe&&n&&ml(t),t.flags|=1,ot(e,t,r,i),t.child)}function Hc(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!Fl(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,vf(e,t,o,r,i)):(e=vi(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var a=o.memoizedProps;if(n=n.compare,n=n!==null?n:xs,n(a,r)&&e.ref===t.ref)return an(e,t,i)}return t.flags|=1,e=Rn(o,r),e.ref=t.ref,e.return=t,t.child=e}function vf(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(xs(o,r)&&e.ref===t.ref)if(ft=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(ft=!0);else return t.lanes=e.lanes,an(e,t,i)}return za(e,t,n,r,i)}function yf(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Me(fr,gt),gt|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Me(fr,gt),gt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,Me(fr,gt),gt|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,Me(fr,gt),gt|=r;return ot(e,t,i,n),t.child}function bf(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function za(e,t,n,r,i){var o=pt(n)?Qn:st.current;return o=wr(t,o),gr(t,i),n=Sl(e,t,n,r,o,i),r=Cl(),e!==null&&!ft?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,an(e,t,i)):(Fe&&r&&ml(t),t.flags|=1,ot(e,t,n,i),t.child)}function Yc(e,t,n,r,i){if(pt(n)){var o=!0;Mi(t)}else o=!1;if(gr(t,i),t.stateNode===null)hi(e,t),hf(t,n,r),Pa(t,n,r,i),r=!0;else if(e===null){var a=t.stateNode,l=t.memoizedProps;a.props=l;var c=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=Et(u):(u=pt(n)?Qn:st.current,u=wr(t,u));var m=n.getDerivedStateFromProps,x=typeof m=="function"||typeof a.getSnapshotBeforeUpdate=="function";x||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==r||c!==u)&&Bc(t,a,r,u),xn=!1;var p=t.memoizedState;a.state=p,Ai(t,r,a,i),c=t.memoizedState,l!==r||p!==c||mt.current||xn?(typeof m=="function"&&(Ra(t,n,m,r),c=t.memoizedState),(l=xn||$c(t,n,l,r,p,c,u))?(x||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),a.props=r,a.state=c,a.context=u,r=l):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Yd(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:Tt(t.type,l),a.props=u,x=t.pendingProps,p=a.context,c=n.contextType,typeof c=="object"&&c!==null?c=Et(c):(c=pt(n)?Qn:st.current,c=wr(t,c));var w=n.getDerivedStateFromProps;(m=typeof w=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==x||p!==c)&&Bc(t,a,r,c),xn=!1,p=t.memoizedState,a.state=p,Ai(t,r,a,i);var y=t.memoizedState;l!==x||p!==y||mt.current||xn?(typeof w=="function"&&(Ra(t,n,w,r),y=t.memoizedState),(u=xn||$c(t,n,u,r,p,y,c)||!1)?(m||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,y,c),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,y,c)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),a.props=r,a.state=y,a.context=c,r=u):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return Ma(e,t,n,r,o,i)}function Ma(e,t,n,r,i,o){bf(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return i&&zc(t,n,!1),an(e,t,o);r=t.stateNode,vp.current=t;var l=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=kr(t,e.child,null,o),t.child=kr(t,null,l,o)):ot(e,t,l,o),t.memoizedState=r.state,i&&zc(t,n,!0),t.child}function wf(e){var t=e.stateNode;t.pendingContext?Tc(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Tc(e,t.context,!1),wl(e,t.containerInfo)}function Vc(e,t,n,r,i){return jr(),hl(i),t.flags|=256,ot(e,t,n,r),t.child}var La={dehydrated:null,treeContext:null,retryLane:0};function Ia(e){return{baseLanes:e,cachePool:null,transitions:null}}function jf(e,t,n){var r=t.pendingProps,i=Ae.current,o=!1,a=(t.flags&128)!==0,l;if((l=a)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),Me(Ae,i&1),e===null)return Ea(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,o?(r=t.mode,o=t.child,a={mode:"hidden",children:a},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=a):o=oo(a,r,0,null),e=qn(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Ia(n),t.memoizedState=La,e):Rl(t,a));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return yp(e,t,a,r,l,i,n);if(o){o=r.fallback,a=t.mode,i=e.child,l=i.sibling;var c={mode:"hidden",children:r.children};return!(a&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=c,t.deletions=null):(r=Rn(i,c),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?o=Rn(l,o):(o=qn(o,a,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,a=e.child.memoizedState,a=a===null?Ia(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},o.memoizedState=a,o.childLanes=e.childLanes&~n,t.memoizedState=La,r}return o=e.child,e=o.sibling,r=Rn(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Rl(e,t){return t=oo({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Gs(e,t,n,r){return r!==null&&hl(r),kr(t,e.child,null,n),e=Rl(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function yp(e,t,n,r,i,o,a){if(n)return t.flags&256?(t.flags&=-257,r=Uo(Error(W(422))),Gs(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=oo({mode:"visible",children:r.children},i,0,null),o=qn(o,i,a,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&kr(t,e.child,null,a),t.child.memoizedState=Ia(a),t.memoizedState=La,o);if(!(t.mode&1))return Gs(e,t,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,o=Error(W(419)),r=Uo(o,r,void 0),Gs(e,t,a,r)}if(l=(a&e.childLanes)!==0,ft||l){if(r=Ge,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|a)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,on(e,i),Dt(r,e,i,-1))}return Il(),r=Uo(Error(W(421))),Gs(e,t,a,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=zp.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,vt=Sn(i.nextSibling),yt=t,Fe=!0,Mt=null,e!==null&&(kt[Nt++]=Zt,kt[Nt++]=en,kt[Nt++]=Hn,Zt=e.id,en=e.overflow,Hn=t),t=Rl(t,r.children),t.flags|=4096,t)}function Gc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),_a(e.return,t,n)}function qo(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function kf(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(ot(e,t,r.children,n),r=Ae.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Gc(e,n,t);else if(e.tag===19)Gc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Me(Ae,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Oi(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),qo(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Oi(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}qo(t,!0,n,null,o);break;case"together":qo(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function hi(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function an(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Vn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(W(153));if(t.child!==null){for(e=t.child,n=Rn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Rn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function bp(e,t,n){switch(t.tag){case 3:wf(t),jr();break;case 5:Vd(t);break;case 1:pt(t.type)&&Mi(t);break;case 4:wl(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;Me(Fi,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(Me(Ae,Ae.current&1),t.flags|=128,null):n&t.child.childLanes?jf(e,t,n):(Me(Ae,Ae.current&1),e=an(e,t,n),e!==null?e.sibling:null);Me(Ae,Ae.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return kf(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Me(Ae,Ae.current),r)break;return null;case 22:case 23:return t.lanes=0,yf(e,t,n)}return an(e,t,n)}var Nf,Fa,Sf,Cf;Nf=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Fa=function(){};Sf=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Bn(Kt.current);var o=null;switch(n){case"input":i=sa(e,i),r=sa(e,r),o=[];break;case"select":i=$e({},i,{value:void 0}),r=$e({},r,{value:void 0}),o=[];break;case"textarea":i=aa(e,i),r=aa(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Ti)}ca(n,r);var a;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(a in l)l.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(cs.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var c=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&c!==l&&(c!=null||l!=null))if(u==="style")if(l){for(a in l)!l.hasOwnProperty(a)||c&&c.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in c)c.hasOwnProperty(a)&&l[a]!==c[a]&&(n||(n={}),n[a]=c[a])}else n||(o||(o=[]),o.push(u,n)),n=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,l=l?l.__html:void 0,c!=null&&l!==c&&(o=o||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(o=o||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(cs.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&Le("scroll",e),o||l===c||(o=[])):(o=o||[]).push(u,c))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};Cf=function(e,t,n,r){n!==r&&(t.flags|=4)};function Br(e,t){if(!Fe)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function nt(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function wp(e,t,n){var r=t.pendingProps;switch(pl(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return nt(t),null;case 1:return pt(t.type)&&zi(),nt(t),null;case 3:return r=t.stateNode,Nr(),Ie(mt),Ie(st),kl(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Ys(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Mt!==null&&(Wa(Mt),Mt=null))),Fa(e,t),nt(t),null;case 5:jl(t);var i=Bn(ws.current);if(n=t.type,e!==null&&t.stateNode!=null)Sf(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(W(166));return nt(t),null}if(e=Bn(Kt.current),Ys(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[Yt]=t,r[ys]=o,e=(t.mode&1)!==0,n){case"dialog":Le("cancel",r),Le("close",r);break;case"iframe":case"object":case"embed":Le("load",r);break;case"video":case"audio":for(i=0;i<Jr.length;i++)Le(Jr[i],r);break;case"source":Le("error",r);break;case"img":case"image":case"link":Le("error",r),Le("load",r);break;case"details":Le("toggle",r);break;case"input":sc(r,o),Le("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},Le("invalid",r);break;case"textarea":oc(r,o),Le("invalid",r)}ca(n,o),i=null;for(var a in o)if(o.hasOwnProperty(a)){var l=o[a];a==="children"?typeof l=="string"?r.textContent!==l&&(o.suppressHydrationWarning!==!0&&Hs(r.textContent,l,e),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(o.suppressHydrationWarning!==!0&&Hs(r.textContent,l,e),i=["children",""+l]):cs.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&Le("scroll",r)}switch(n){case"input":As(r),ic(r,o,!0);break;case"textarea":As(r),ac(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Ti)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Zu(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[Yt]=t,e[ys]=r,Nf(e,t,!1,!1),t.stateNode=e;e:{switch(a=ua(n,r),n){case"dialog":Le("cancel",e),Le("close",e),i=r;break;case"iframe":case"object":case"embed":Le("load",e),i=r;break;case"video":case"audio":for(i=0;i<Jr.length;i++)Le(Jr[i],e);i=r;break;case"source":Le("error",e),i=r;break;case"img":case"image":case"link":Le("error",e),Le("load",e),i=r;break;case"details":Le("toggle",e),i=r;break;case"input":sc(e,r),i=sa(e,r),Le("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=$e({},r,{value:void 0}),Le("invalid",e);break;case"textarea":oc(e,r),i=aa(e,r),Le("invalid",e);break;default:i=r}ca(n,i),l=i;for(o in l)if(l.hasOwnProperty(o)){var c=l[o];o==="style"?nd(e,c):o==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&ed(e,c)):o==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&us(e,c):typeof c=="number"&&us(e,""+c):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(cs.hasOwnProperty(o)?c!=null&&o==="onScroll"&&Le("scroll",e):c!=null&&Za(e,o,c,a))}switch(n){case"input":As(e),ic(e,r,!1);break;case"textarea":As(e),ac(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Pn(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?mr(e,!!r.multiple,o,!1):r.defaultValue!=null&&mr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Ti)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return nt(t),null;case 6:if(e&&t.stateNode!=null)Cf(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(W(166));if(n=Bn(ws.current),Bn(Kt.current),Ys(t)){if(r=t.stateNode,n=t.memoizedProps,r[Yt]=t,(o=r.nodeValue!==n)&&(e=yt,e!==null))switch(e.tag){case 3:Hs(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Hs(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Yt]=t,t.stateNode=r}return nt(t),null;case 13:if(Ie(Ae),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Fe&&vt!==null&&t.mode&1&&!(t.flags&128))qd(),jr(),t.flags|=98560,o=!1;else if(o=Ys(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(W(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(W(317));o[Yt]=t}else jr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;nt(t),o=!1}else Mt!==null&&(Wa(Mt),Mt=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Ae.current&1?He===0&&(He=3):Il())),t.updateQueue!==null&&(t.flags|=4),nt(t),null);case 4:return Nr(),Fa(e,t),e===null&&gs(t.stateNode.containerInfo),nt(t),null;case 10:return vl(t.type._context),nt(t),null;case 17:return pt(t.type)&&zi(),nt(t),null;case 19:if(Ie(Ae),o=t.memoizedState,o===null)return nt(t),null;if(r=(t.flags&128)!==0,a=o.rendering,a===null)if(r)Br(o,!1);else{if(He!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=Oi(e),a!==null){for(t.flags|=128,Br(o,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,a=o.alternate,a===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=a.childLanes,o.lanes=a.lanes,o.child=a.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=a.memoizedProps,o.memoizedState=a.memoizedState,o.updateQueue=a.updateQueue,o.type=a.type,e=a.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Me(Ae,Ae.current&1|2),t.child}e=e.sibling}o.tail!==null&&Ue()>Cr&&(t.flags|=128,r=!0,Br(o,!1),t.lanes=4194304)}else{if(!r)if(e=Oi(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Br(o,!0),o.tail===null&&o.tailMode==="hidden"&&!a.alternate&&!Fe)return nt(t),null}else 2*Ue()-o.renderingStartTime>Cr&&n!==1073741824&&(t.flags|=128,r=!0,Br(o,!1),t.lanes=4194304);o.isBackwards?(a.sibling=t.child,t.child=a):(n=o.last,n!==null?n.sibling=a:t.child=a,o.last=a)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Ue(),t.sibling=null,n=Ae.current,Me(Ae,r?n&1|2:n&1),t):(nt(t),null);case 22:case 23:return Ll(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?gt&1073741824&&(nt(t),t.subtreeFlags&6&&(t.flags|=8192)):nt(t),null;case 24:return null;case 25:return null}throw Error(W(156,t.tag))}function jp(e,t){switch(pl(t),t.tag){case 1:return pt(t.type)&&zi(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Nr(),Ie(mt),Ie(st),kl(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return jl(t),null;case 13:if(Ie(Ae),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(W(340));jr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Ie(Ae),null;case 4:return Nr(),null;case 10:return vl(t.type._context),null;case 22:case 23:return Ll(),null;case 24:return null;default:return null}}var Ks=!1,rt=!1,kp=typeof WeakSet=="function"?WeakSet:Set,oe=null;function dr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Be(e,t,r)}else n.current=null}function Da(e,t,n){try{n()}catch(r){Be(e,t,r)}}var Kc=!1;function Np(e,t){if(ba=_i,e=Pd(),fl(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var a=0,l=-1,c=-1,u=0,m=0,x=e,p=null;t:for(;;){for(var w;x!==n||i!==0&&x.nodeType!==3||(l=a+i),x!==o||r!==0&&x.nodeType!==3||(c=a+r),x.nodeType===3&&(a+=x.nodeValue.length),(w=x.firstChild)!==null;)p=x,x=w;for(;;){if(x===e)break t;if(p===n&&++u===i&&(l=a),p===o&&++m===r&&(c=a),(w=x.nextSibling)!==null)break;x=p,p=x.parentNode}x=w}n=l===-1||c===-1?null:{start:l,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(wa={focusedElem:e,selectionRange:n},_i=!1,oe=t;oe!==null;)if(t=oe,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,oe=e;else for(;oe!==null;){t=oe;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var j=y.memoizedProps,C=y.memoizedState,g=t.stateNode,f=g.getSnapshotBeforeUpdate(t.elementType===t.type?j:Tt(t.type,j),C);g.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var h=t.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(W(163))}}catch(S){Be(t,t.return,S)}if(e=t.sibling,e!==null){e.return=t.return,oe=e;break}oe=t.return}return y=Kc,Kc=!1,y}function is(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Da(t,n,o)}i=i.next}while(i!==r)}}function so(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Aa(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Ef(e){var t=e.alternate;t!==null&&(e.alternate=null,Ef(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Yt],delete t[ys],delete t[Na],delete t[op],delete t[ap])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function _f(e){return e.tag===5||e.tag===3||e.tag===4}function Xc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||_f(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Oa(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ti));else if(r!==4&&(e=e.child,e!==null))for(Oa(e,t,n),e=e.sibling;e!==null;)Oa(e,t,n),e=e.sibling}function $a(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for($a(e,t,n),e=e.sibling;e!==null;)$a(e,t,n),e=e.sibling}var Ke=null,zt=!1;function dn(e,t,n){for(n=n.child;n!==null;)Rf(e,t,n),n=n.sibling}function Rf(e,t,n){if(Gt&&typeof Gt.onCommitFiberUnmount=="function")try{Gt.onCommitFiberUnmount(Ki,n)}catch{}switch(n.tag){case 5:rt||dr(n,t);case 6:var r=Ke,i=zt;Ke=null,dn(e,t,n),Ke=r,zt=i,Ke!==null&&(zt?(e=Ke,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Ke.removeChild(n.stateNode));break;case 18:Ke!==null&&(zt?(e=Ke,n=n.stateNode,e.nodeType===8?Fo(e.parentNode,n):e.nodeType===1&&Fo(e,n),ps(e)):Fo(Ke,n.stateNode));break;case 4:r=Ke,i=zt,Ke=n.stateNode.containerInfo,zt=!0,dn(e,t,n),Ke=r,zt=i;break;case 0:case 11:case 14:case 15:if(!rt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,a=o.destroy;o=o.tag,a!==void 0&&(o&2||o&4)&&Da(n,t,a),i=i.next}while(i!==r)}dn(e,t,n);break;case 1:if(!rt&&(dr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Be(n,t,l)}dn(e,t,n);break;case 21:dn(e,t,n);break;case 22:n.mode&1?(rt=(r=rt)||n.memoizedState!==null,dn(e,t,n),rt=r):dn(e,t,n);break;default:dn(e,t,n)}}function Jc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new kp),t.forEach(function(r){var i=Mp.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Pt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,a=t,l=a;e:for(;l!==null;){switch(l.tag){case 5:Ke=l.stateNode,zt=!1;break e;case 3:Ke=l.stateNode.containerInfo,zt=!0;break e;case 4:Ke=l.stateNode.containerInfo,zt=!0;break e}l=l.return}if(Ke===null)throw Error(W(160));Rf(o,a,i),Ke=null,zt=!1;var c=i.alternate;c!==null&&(c.return=null),i.return=null}catch(u){Be(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Pf(t,e),t=t.sibling}function Pf(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Pt(t,e),qt(e),r&4){try{is(3,e,e.return),so(3,e)}catch(j){Be(e,e.return,j)}try{is(5,e,e.return)}catch(j){Be(e,e.return,j)}}break;case 1:Pt(t,e),qt(e),r&512&&n!==null&&dr(n,n.return);break;case 5:if(Pt(t,e),qt(e),r&512&&n!==null&&dr(n,n.return),e.flags&32){var i=e.stateNode;try{us(i,"")}catch(j){Be(e,e.return,j)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,a=n!==null?n.memoizedProps:o,l=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{l==="input"&&o.type==="radio"&&o.name!=null&&Xu(i,o),ua(l,a);var u=ua(l,o);for(a=0;a<c.length;a+=2){var m=c[a],x=c[a+1];m==="style"?nd(i,x):m==="dangerouslySetInnerHTML"?ed(i,x):m==="children"?us(i,x):Za(i,m,x,u)}switch(l){case"input":ia(i,o);break;case"textarea":Ju(i,o);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var w=o.value;w!=null?mr(i,!!o.multiple,w,!1):p!==!!o.multiple&&(o.defaultValue!=null?mr(i,!!o.multiple,o.defaultValue,!0):mr(i,!!o.multiple,o.multiple?[]:"",!1))}i[ys]=o}catch(j){Be(e,e.return,j)}}break;case 6:if(Pt(t,e),qt(e),r&4){if(e.stateNode===null)throw Error(W(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(j){Be(e,e.return,j)}}break;case 3:if(Pt(t,e),qt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ps(t.containerInfo)}catch(j){Be(e,e.return,j)}break;case 4:Pt(t,e),qt(e);break;case 13:Pt(t,e),qt(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(zl=Ue())),r&4&&Jc(e);break;case 22:if(m=n!==null&&n.memoizedState!==null,e.mode&1?(rt=(u=rt)||m,Pt(t,e),rt=u):Pt(t,e),qt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!m&&e.mode&1)for(oe=e,m=e.child;m!==null;){for(x=oe=m;oe!==null;){switch(p=oe,w=p.child,p.tag){case 0:case 11:case 14:case 15:is(4,p,p.return);break;case 1:dr(p,p.return);var y=p.stateNode;if(typeof y.componentWillUnmount=="function"){r=p,n=p.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(j){Be(r,n,j)}}break;case 5:dr(p,p.return);break;case 22:if(p.memoizedState!==null){eu(x);continue}}w!==null?(w.return=p,oe=w):eu(x)}m=m.sibling}e:for(m=null,x=e;;){if(x.tag===5){if(m===null){m=x;try{i=x.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(l=x.stateNode,c=x.memoizedProps.style,a=c!=null&&c.hasOwnProperty("display")?c.display:null,l.style.display=td("display",a))}catch(j){Be(e,e.return,j)}}}else if(x.tag===6){if(m===null)try{x.stateNode.nodeValue=u?"":x.memoizedProps}catch(j){Be(e,e.return,j)}}else if((x.tag!==22&&x.tag!==23||x.memoizedState===null||x===e)&&x.child!==null){x.child.return=x,x=x.child;continue}if(x===e)break e;for(;x.sibling===null;){if(x.return===null||x.return===e)break e;m===x&&(m=null),x=x.return}m===x&&(m=null),x.sibling.return=x.return,x=x.sibling}}break;case 19:Pt(t,e),qt(e),r&4&&Jc(e);break;case 21:break;default:Pt(t,e),qt(e)}}function qt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(_f(n)){var r=n;break e}n=n.return}throw Error(W(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(us(i,""),r.flags&=-33);var o=Xc(e);$a(e,o,i);break;case 3:case 4:var a=r.stateNode.containerInfo,l=Xc(e);Oa(e,l,a);break;default:throw Error(W(161))}}catch(c){Be(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Sp(e,t,n){oe=e,Tf(e)}function Tf(e,t,n){for(var r=(e.mode&1)!==0;oe!==null;){var i=oe,o=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||Ks;if(!a){var l=i.alternate,c=l!==null&&l.memoizedState!==null||rt;l=Ks;var u=rt;if(Ks=a,(rt=c)&&!u)for(oe=i;oe!==null;)a=oe,c=a.child,a.tag===22&&a.memoizedState!==null?tu(i):c!==null?(c.return=a,oe=c):tu(i);for(;o!==null;)oe=o,Tf(o),o=o.sibling;oe=i,Ks=l,rt=u}Zc(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,oe=o):Zc(e)}}function Zc(e){for(;oe!==null;){var t=oe;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:rt||so(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!rt)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Tt(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Dc(t,o,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Dc(t,a,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var m=u.memoizedState;if(m!==null){var x=m.dehydrated;x!==null&&ps(x)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(W(163))}rt||t.flags&512&&Aa(t)}catch(p){Be(t,t.return,p)}}if(t===e){oe=null;break}if(n=t.sibling,n!==null){n.return=t.return,oe=n;break}oe=t.return}}function eu(e){for(;oe!==null;){var t=oe;if(t===e){oe=null;break}var n=t.sibling;if(n!==null){n.return=t.return,oe=n;break}oe=t.return}}function tu(e){for(;oe!==null;){var t=oe;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{so(4,t)}catch(c){Be(t,n,c)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(c){Be(t,i,c)}}var o=t.return;try{Aa(t)}catch(c){Be(t,o,c)}break;case 5:var a=t.return;try{Aa(t)}catch(c){Be(t,a,c)}}}catch(c){Be(t,t.return,c)}if(t===e){oe=null;break}var l=t.sibling;if(l!==null){l.return=t.return,oe=l;break}oe=t.return}}var Cp=Math.ceil,Ui=cn.ReactCurrentDispatcher,Pl=cn.ReactCurrentOwner,Ct=cn.ReactCurrentBatchConfig,Se=0,Ge=null,qe=null,Je=0,gt=0,fr=Mn(0),He=0,Ss=null,Vn=0,io=0,Tl=0,os=null,dt=null,zl=0,Cr=1/0,Xt=null,qi=!1,Ba=null,En=null,Xs=!1,wn=null,Wi=0,as=0,Ua=null,xi=-1,gi=0;function at(){return Se&6?Ue():xi!==-1?xi:xi=Ue()}function _n(e){return e.mode&1?Se&2&&Je!==0?Je&-Je:cp.transition!==null?(gi===0&&(gi=pd()),gi):(e=Pe,e!==0||(e=window.event,e=e===void 0?16:wd(e.type)),e):1}function Dt(e,t,n,r){if(50<as)throw as=0,Ua=null,Error(W(185));_s(e,n,r),(!(Se&2)||e!==Ge)&&(e===Ge&&(!(Se&2)&&(io|=n),He===4&&yn(e,Je)),ht(e,r),n===1&&Se===0&&!(t.mode&1)&&(Cr=Ue()+500,to&&Ln()))}function ht(e,t){var n=e.callbackNode;cm(e,t);var r=Ei(e,e===Ge?Je:0);if(r===0)n!==null&&uc(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&uc(n),t===1)e.tag===0?lp(nu.bind(null,e)):$d(nu.bind(null,e)),sp(function(){!(Se&6)&&Ln()}),n=null;else{switch(hd(r)){case 1:n=sl;break;case 4:n=fd;break;case 16:n=Ci;break;case 536870912:n=md;break;default:n=Ci}n=Of(n,zf.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function zf(e,t){if(xi=-1,gi=0,Se&6)throw Error(W(327));var n=e.callbackNode;if(vr()&&e.callbackNode!==n)return null;var r=Ei(e,e===Ge?Je:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Qi(e,r);else{t=r;var i=Se;Se|=2;var o=Lf();(Ge!==e||Je!==t)&&(Xt=null,Cr=Ue()+500,Un(e,t));do try{Rp();break}catch(l){Mf(e,l)}while(1);gl(),Ui.current=o,Se=i,qe!==null?t=0:(Ge=null,Je=0,t=He)}if(t!==0){if(t===2&&(i=ha(e),i!==0&&(r=i,t=qa(e,i))),t===1)throw n=Ss,Un(e,0),yn(e,r),ht(e,Ue()),n;if(t===6)yn(e,r);else{if(i=e.current.alternate,!(r&30)&&!Ep(i)&&(t=Qi(e,r),t===2&&(o=ha(e),o!==0&&(r=o,t=qa(e,o))),t===1))throw n=Ss,Un(e,0),yn(e,r),ht(e,Ue()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(W(345));case 2:An(e,dt,Xt);break;case 3:if(yn(e,r),(r&130023424)===r&&(t=zl+500-Ue(),10<t)){if(Ei(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){at(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=ka(An.bind(null,e,dt,Xt),t);break}An(e,dt,Xt);break;case 4:if(yn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var a=31-Ft(r);o=1<<a,a=t[a],a>i&&(i=a),r&=~o}if(r=i,r=Ue()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Cp(r/1960))-r,10<r){e.timeoutHandle=ka(An.bind(null,e,dt,Xt),r);break}An(e,dt,Xt);break;case 5:An(e,dt,Xt);break;default:throw Error(W(329))}}}return ht(e,Ue()),e.callbackNode===n?zf.bind(null,e):null}function qa(e,t){var n=os;return e.current.memoizedState.isDehydrated&&(Un(e,t).flags|=256),e=Qi(e,t),e!==2&&(t=dt,dt=n,t!==null&&Wa(t)),e}function Wa(e){dt===null?dt=e:dt.push.apply(dt,e)}function Ep(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!At(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function yn(e,t){for(t&=~Tl,t&=~io,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ft(t),r=1<<n;e[n]=-1,t&=~r}}function nu(e){if(Se&6)throw Error(W(327));vr();var t=Ei(e,0);if(!(t&1))return ht(e,Ue()),null;var n=Qi(e,t);if(e.tag!==0&&n===2){var r=ha(e);r!==0&&(t=r,n=qa(e,r))}if(n===1)throw n=Ss,Un(e,0),yn(e,t),ht(e,Ue()),n;if(n===6)throw Error(W(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,An(e,dt,Xt),ht(e,Ue()),null}function Ml(e,t){var n=Se;Se|=1;try{return e(t)}finally{Se=n,Se===0&&(Cr=Ue()+500,to&&Ln())}}function Gn(e){wn!==null&&wn.tag===0&&!(Se&6)&&vr();var t=Se;Se|=1;var n=Ct.transition,r=Pe;try{if(Ct.transition=null,Pe=1,e)return e()}finally{Pe=r,Ct.transition=n,Se=t,!(Se&6)&&Ln()}}function Ll(){gt=fr.current,Ie(fr)}function Un(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,rp(n)),qe!==null)for(n=qe.return;n!==null;){var r=n;switch(pl(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&zi();break;case 3:Nr(),Ie(mt),Ie(st),kl();break;case 5:jl(r);break;case 4:Nr();break;case 13:Ie(Ae);break;case 19:Ie(Ae);break;case 10:vl(r.type._context);break;case 22:case 23:Ll()}n=n.return}if(Ge=e,qe=e=Rn(e.current,null),Je=gt=t,He=0,Ss=null,Tl=io=Vn=0,dt=os=null,$n!==null){for(t=0;t<$n.length;t++)if(n=$n[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var a=o.next;o.next=i,r.next=a}n.pending=r}$n=null}return e}function Mf(e,t){do{var n=qe;try{if(gl(),mi.current=Bi,$i){for(var r=Oe.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}$i=!1}if(Yn=0,Ve=Qe=Oe=null,ss=!1,js=0,Pl.current=null,n===null||n.return===null){He=1,Ss=t,qe=null;break}e:{var o=e,a=n.return,l=n,c=t;if(t=Je,l.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,m=l,x=m.tag;if(!(m.mode&1)&&(x===0||x===11||x===15)){var p=m.alternate;p?(m.updateQueue=p.updateQueue,m.memoizedState=p.memoizedState,m.lanes=p.lanes):(m.updateQueue=null,m.memoizedState=null)}var w=qc(a);if(w!==null){w.flags&=-257,Wc(w,a,l,o,t),w.mode&1&&Uc(o,u,t),t=w,c=u;var y=t.updateQueue;if(y===null){var j=new Set;j.add(c),t.updateQueue=j}else y.add(c);break e}else{if(!(t&1)){Uc(o,u,t),Il();break e}c=Error(W(426))}}else if(Fe&&l.mode&1){var C=qc(a);if(C!==null){!(C.flags&65536)&&(C.flags|=256),Wc(C,a,l,o,t),hl(Sr(c,l));break e}}o=c=Sr(c,l),He!==4&&(He=2),os===null?os=[o]:os.push(o),o=a;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var g=xf(o,c,t);Fc(o,g);break e;case 1:l=c;var f=o.type,h=o.stateNode;if(!(o.flags&128)&&(typeof f.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(En===null||!En.has(h)))){o.flags|=65536,t&=-t,o.lanes|=t;var S=gf(o,l,t);Fc(o,S);break e}}o=o.return}while(o!==null)}Ff(n)}catch(_){t=_,qe===n&&n!==null&&(qe=n=n.return);continue}break}while(1)}function Lf(){var e=Ui.current;return Ui.current=Bi,e===null?Bi:e}function Il(){(He===0||He===3||He===2)&&(He=4),Ge===null||!(Vn&268435455)&&!(io&268435455)||yn(Ge,Je)}function Qi(e,t){var n=Se;Se|=2;var r=Lf();(Ge!==e||Je!==t)&&(Xt=null,Un(e,t));do try{_p();break}catch(i){Mf(e,i)}while(1);if(gl(),Se=n,Ui.current=r,qe!==null)throw Error(W(261));return Ge=null,Je=0,He}function _p(){for(;qe!==null;)If(qe)}function Rp(){for(;qe!==null&&!em();)If(qe)}function If(e){var t=Af(e.alternate,e,gt);e.memoizedProps=e.pendingProps,t===null?Ff(e):qe=t,Pl.current=null}function Ff(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=jp(n,t),n!==null){n.flags&=32767,qe=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{He=6,qe=null;return}}else if(n=wp(n,t,gt),n!==null){qe=n;return}if(t=t.sibling,t!==null){qe=t;return}qe=t=e}while(t!==null);He===0&&(He=5)}function An(e,t,n){var r=Pe,i=Ct.transition;try{Ct.transition=null,Pe=1,Pp(e,t,n,r)}finally{Ct.transition=i,Pe=r}return null}function Pp(e,t,n,r){do vr();while(wn!==null);if(Se&6)throw Error(W(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(W(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(um(e,o),e===Ge&&(qe=Ge=null,Je=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Xs||(Xs=!0,Of(Ci,function(){return vr(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Ct.transition,Ct.transition=null;var a=Pe;Pe=1;var l=Se;Se|=4,Pl.current=null,Np(e,n),Pf(n,e),Km(wa),_i=!!ba,wa=ba=null,e.current=n,Sp(n),tm(),Se=l,Pe=a,Ct.transition=o}else e.current=n;if(Xs&&(Xs=!1,wn=e,Wi=i),o=e.pendingLanes,o===0&&(En=null),sm(n.stateNode),ht(e,Ue()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(qi)throw qi=!1,e=Ba,Ba=null,e;return Wi&1&&e.tag!==0&&vr(),o=e.pendingLanes,o&1?e===Ua?as++:(as=0,Ua=e):as=0,Ln(),null}function vr(){if(wn!==null){var e=hd(Wi),t=Ct.transition,n=Pe;try{if(Ct.transition=null,Pe=16>e?16:e,wn===null)var r=!1;else{if(e=wn,wn=null,Wi=0,Se&6)throw Error(W(331));var i=Se;for(Se|=4,oe=e.current;oe!==null;){var o=oe,a=o.child;if(oe.flags&16){var l=o.deletions;if(l!==null){for(var c=0;c<l.length;c++){var u=l[c];for(oe=u;oe!==null;){var m=oe;switch(m.tag){case 0:case 11:case 15:is(8,m,o)}var x=m.child;if(x!==null)x.return=m,oe=x;else for(;oe!==null;){m=oe;var p=m.sibling,w=m.return;if(Ef(m),m===u){oe=null;break}if(p!==null){p.return=w,oe=p;break}oe=w}}}var y=o.alternate;if(y!==null){var j=y.child;if(j!==null){y.child=null;do{var C=j.sibling;j.sibling=null,j=C}while(j!==null)}}oe=o}}if(o.subtreeFlags&2064&&a!==null)a.return=o,oe=a;else e:for(;oe!==null;){if(o=oe,o.flags&2048)switch(o.tag){case 0:case 11:case 15:is(9,o,o.return)}var g=o.sibling;if(g!==null){g.return=o.return,oe=g;break e}oe=o.return}}var f=e.current;for(oe=f;oe!==null;){a=oe;var h=a.child;if(a.subtreeFlags&2064&&h!==null)h.return=a,oe=h;else e:for(a=f;oe!==null;){if(l=oe,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:so(9,l)}}catch(_){Be(l,l.return,_)}if(l===a){oe=null;break e}var S=l.sibling;if(S!==null){S.return=l.return,oe=S;break e}oe=l.return}}if(Se=i,Ln(),Gt&&typeof Gt.onPostCommitFiberRoot=="function")try{Gt.onPostCommitFiberRoot(Ki,e)}catch{}r=!0}return r}finally{Pe=n,Ct.transition=t}}return!1}function ru(e,t,n){t=Sr(n,t),t=xf(e,t,1),e=Cn(e,t,1),t=at(),e!==null&&(_s(e,1,t),ht(e,t))}function Be(e,t,n){if(e.tag===3)ru(e,e,n);else for(;t!==null;){if(t.tag===3){ru(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(En===null||!En.has(r))){e=Sr(n,e),e=gf(t,e,1),t=Cn(t,e,1),e=at(),t!==null&&(_s(t,1,e),ht(t,e));break}}t=t.return}}function Tp(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=at(),e.pingedLanes|=e.suspendedLanes&n,Ge===e&&(Je&n)===n&&(He===4||He===3&&(Je&130023424)===Je&&500>Ue()-zl?Un(e,0):Tl|=n),ht(e,t)}function Df(e,t){t===0&&(e.mode&1?(t=Bs,Bs<<=1,!(Bs&130023424)&&(Bs=4194304)):t=1);var n=at();e=on(e,t),e!==null&&(_s(e,t,n),ht(e,n))}function zp(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Df(e,n)}function Mp(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(W(314))}r!==null&&r.delete(t),Df(e,n)}var Af;Af=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||mt.current)ft=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return ft=!1,bp(e,t,n);ft=!!(e.flags&131072)}else ft=!1,Fe&&t.flags&1048576&&Bd(t,Ii,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;hi(e,t),e=t.pendingProps;var i=wr(t,st.current);gr(t,n),i=Sl(null,t,r,e,i,n);var o=Cl();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,pt(r)?(o=!0,Mi(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,bl(t),i.updater=ro,t.stateNode=i,i._reactInternals=t,Pa(t,r,e,n),t=Ma(null,t,r,!0,o,n)):(t.tag=0,Fe&&o&&ml(t),ot(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(hi(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Ip(r),e=Tt(r,e),i){case 0:t=za(null,t,r,e,n);break e;case 1:t=Yc(null,t,r,e,n);break e;case 11:t=Qc(null,t,r,e,n);break e;case 14:t=Hc(null,t,r,Tt(r.type,e),n);break e}throw Error(W(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Tt(r,i),za(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Tt(r,i),Yc(e,t,r,i,n);case 3:e:{if(wf(t),e===null)throw Error(W(387));r=t.pendingProps,o=t.memoizedState,i=o.element,Yd(e,t),Ai(t,r,null,n);var a=t.memoizedState;if(r=a.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Sr(Error(W(423)),t),t=Vc(e,t,r,n,i);break e}else if(r!==i){i=Sr(Error(W(424)),t),t=Vc(e,t,r,n,i);break e}else for(vt=Sn(t.stateNode.containerInfo.firstChild),yt=t,Fe=!0,Mt=null,n=Qd(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(jr(),r===i){t=an(e,t,n);break e}ot(e,t,r,n)}t=t.child}return t;case 5:return Vd(t),e===null&&Ea(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,a=i.children,ja(r,i)?a=null:o!==null&&ja(r,o)&&(t.flags|=32),bf(e,t),ot(e,t,a,n),t.child;case 6:return e===null&&Ea(t),null;case 13:return jf(e,t,n);case 4:return wl(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=kr(t,null,r,n):ot(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Tt(r,i),Qc(e,t,r,i,n);case 7:return ot(e,t,t.pendingProps,n),t.child;case 8:return ot(e,t,t.pendingProps.children,n),t.child;case 12:return ot(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,a=i.value,Me(Fi,r._currentValue),r._currentValue=a,o!==null)if(At(o.value,a)){if(o.children===i.children&&!mt.current){t=an(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var l=o.dependencies;if(l!==null){a=o.child;for(var c=l.firstContext;c!==null;){if(c.context===r){if(o.tag===1){c=tn(-1,n&-n),c.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var m=u.pending;m===null?c.next=c:(c.next=m.next,m.next=c),u.pending=c}}o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),_a(o.return,n,t),l.lanes|=n;break}c=c.next}}else if(o.tag===10)a=o.type===t.type?null:o.child;else if(o.tag===18){if(a=o.return,a===null)throw Error(W(341));a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),_a(a,n,t),a=o.sibling}else a=o.child;if(a!==null)a.return=o;else for(a=o;a!==null;){if(a===t){a=null;break}if(o=a.sibling,o!==null){o.return=a.return,a=o;break}a=a.return}o=a}ot(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,gr(t,n),i=Et(i),r=r(i),t.flags|=1,ot(e,t,r,n),t.child;case 14:return r=t.type,i=Tt(r,t.pendingProps),i=Tt(r.type,i),Hc(e,t,r,i,n);case 15:return vf(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Tt(r,i),hi(e,t),t.tag=1,pt(r)?(e=!0,Mi(t)):e=!1,gr(t,n),hf(t,r,i),Pa(t,r,i,n),Ma(null,t,r,!0,e,n);case 19:return kf(e,t,n);case 22:return yf(e,t,n)}throw Error(W(156,t.tag))};function Of(e,t){return dd(e,t)}function Lp(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function St(e,t,n,r){return new Lp(e,t,n,r)}function Fl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ip(e){if(typeof e=="function")return Fl(e)?1:0;if(e!=null){if(e=e.$$typeof,e===tl)return 11;if(e===nl)return 14}return 2}function Rn(e,t){var n=e.alternate;return n===null?(n=St(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function vi(e,t,n,r,i,o){var a=2;if(r=e,typeof e=="function")Fl(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case nr:return qn(n.children,i,o,t);case el:a=8,i|=8;break;case ea:return e=St(12,n,t,i|2),e.elementType=ea,e.lanes=o,e;case ta:return e=St(13,n,t,i),e.elementType=ta,e.lanes=o,e;case na:return e=St(19,n,t,i),e.elementType=na,e.lanes=o,e;case Vu:return oo(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Hu:a=10;break e;case Yu:a=9;break e;case tl:a=11;break e;case nl:a=14;break e;case hn:a=16,r=null;break e}throw Error(W(130,e==null?e:typeof e,""))}return t=St(a,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function qn(e,t,n,r){return e=St(7,e,r,t),e.lanes=n,e}function oo(e,t,n,r){return e=St(22,e,r,t),e.elementType=Vu,e.lanes=n,e.stateNode={isHidden:!1},e}function Wo(e,t,n){return e=St(6,e,null,t),e.lanes=n,e}function Qo(e,t,n){return t=St(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Fp(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=So(0),this.expirationTimes=So(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=So(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Dl(e,t,n,r,i,o,a,l,c){return e=new Fp(e,t,n,l,c),t===1?(t=1,o===!0&&(t|=8)):t=0,o=St(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},bl(o),e}function Dp(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:tr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function $f(e){if(!e)return Tn;e=e._reactInternals;e:{if(Xn(e)!==e||e.tag!==1)throw Error(W(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(pt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(W(171))}if(e.tag===1){var n=e.type;if(pt(n))return Od(e,n,t)}return t}function Bf(e,t,n,r,i,o,a,l,c){return e=Dl(n,r,!0,e,i,o,a,l,c),e.context=$f(null),n=e.current,r=at(),i=_n(n),o=tn(r,i),o.callback=t??null,Cn(n,o,i),e.current.lanes=i,_s(e,i,r),ht(e,r),e}function ao(e,t,n,r){var i=t.current,o=at(),a=_n(i);return n=$f(n),t.context===null?t.context=n:t.pendingContext=n,t=tn(o,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Cn(i,t,a),e!==null&&(Dt(e,i,a,o),fi(e,i,a)),a}function Hi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function su(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Al(e,t){su(e,t),(e=e.alternate)&&su(e,t)}function Ap(){return null}var Uf=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ol(e){this._internalRoot=e}lo.prototype.render=Ol.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(W(409));ao(e,t,null,null)};lo.prototype.unmount=Ol.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Gn(function(){ao(null,e,null,null)}),t[sn]=null}};function lo(e){this._internalRoot=e}lo.prototype.unstable_scheduleHydration=function(e){if(e){var t=vd();e={blockedOn:null,target:e,priority:t};for(var n=0;n<vn.length&&t!==0&&t<vn[n].priority;n++);vn.splice(n,0,e),n===0&&bd(e)}};function $l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function co(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function iu(){}function Op(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=Hi(a);o.call(u)}}var a=Bf(t,r,e,0,null,!1,!1,"",iu);return e._reactRootContainer=a,e[sn]=a.current,gs(e.nodeType===8?e.parentNode:e),Gn(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=Hi(c);l.call(u)}}var c=Dl(e,0,!1,null,null,!1,!1,"",iu);return e._reactRootContainer=c,e[sn]=c.current,gs(e.nodeType===8?e.parentNode:e),Gn(function(){ao(t,c,n,r)}),c}function uo(e,t,n,r,i){var o=n._reactRootContainer;if(o){var a=o;if(typeof i=="function"){var l=i;i=function(){var c=Hi(a);l.call(c)}}ao(t,a,e,i)}else a=Op(n,t,e,i,r);return Hi(a)}xd=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Xr(t.pendingLanes);n!==0&&(il(t,n|1),ht(t,Ue()),!(Se&6)&&(Cr=Ue()+500,Ln()))}break;case 13:Gn(function(){var r=on(e,1);if(r!==null){var i=at();Dt(r,e,1,i)}}),Al(e,1)}};ol=function(e){if(e.tag===13){var t=on(e,134217728);if(t!==null){var n=at();Dt(t,e,134217728,n)}Al(e,134217728)}};gd=function(e){if(e.tag===13){var t=_n(e),n=on(e,t);if(n!==null){var r=at();Dt(n,e,t,r)}Al(e,t)}};vd=function(){return Pe};yd=function(e,t){var n=Pe;try{return Pe=e,t()}finally{Pe=n}};fa=function(e,t,n){switch(t){case"input":if(ia(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=eo(r);if(!i)throw Error(W(90));Ku(r),ia(r,i)}}}break;case"textarea":Ju(e,n);break;case"select":t=n.value,t!=null&&mr(e,!!n.multiple,t,!1)}};id=Ml;od=Gn;var $p={usingClientEntryPoint:!1,Events:[Ps,or,eo,rd,sd,Ml]},Ur={findFiberByHostInstance:On,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Bp={bundleType:Ur.bundleType,version:Ur.version,rendererPackageName:Ur.rendererPackageName,rendererConfig:Ur.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:cn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=cd(e),e===null?null:e.stateNode},findFiberByHostInstance:Ur.findFiberByHostInstance||Ap,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Js=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Js.isDisabled&&Js.supportsFiber)try{Ki=Js.inject(Bp),Gt=Js}catch{}}wt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$p;wt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!$l(t))throw Error(W(200));return Dp(e,t,null,n)};wt.createRoot=function(e,t){if(!$l(e))throw Error(W(299));var n=!1,r="",i=Uf;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Dl(e,1,!1,null,null,n,!1,r,i),e[sn]=t.current,gs(e.nodeType===8?e.parentNode:e),new Ol(t)};wt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(W(188)):(e=Object.keys(e).join(","),Error(W(268,e)));return e=cd(t),e=e===null?null:e.stateNode,e};wt.flushSync=function(e){return Gn(e)};wt.hydrate=function(e,t,n){if(!co(t))throw Error(W(200));return uo(null,e,t,!0,n)};wt.hydrateRoot=function(e,t,n){if(!$l(e))throw Error(W(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",a=Uf;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=Bf(t,null,e,1,n??null,i,!1,o,a),e[sn]=t.current,gs(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new lo(t)};wt.render=function(e,t,n){if(!co(t))throw Error(W(200));return uo(null,e,t,!1,n)};wt.unmountComponentAtNode=function(e){if(!co(e))throw Error(W(40));return e._reactRootContainer?(Gn(function(){uo(null,null,e,!1,function(){e._reactRootContainer=null,e[sn]=null})}),!0):!1};wt.unstable_batchedUpdates=Ml;wt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!co(n))throw Error(W(200));if(e==null||e._reactInternals===void 0)throw Error(W(38));return uo(e,t,n,!1,r)};wt.version="18.3.1-next-f1338f8080-20240426";function qf(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(qf)}catch(e){console.error(e)}}qf(),Uu.exports=wt;var Up=Uu.exports,ou=Up;Jo.createRoot=ou.createRoot,Jo.hydrateRoot=ou.hydrateRoot;const qp="modulepreload",Wp=function(e){return"/"+e},au={},Wf=function(t,n,r){if(!n||n.length===0)return t();const i=document.getElementsByTagName("link");return Promise.all(n.map(o=>{if(o=Wp(o),o in au)return;au[o]=!0;const a=o.endsWith(".css"),l=a?'[rel="stylesheet"]':"";if(!!r)for(let m=i.length-1;m>=0;m--){const x=i[m];if(x.href===o&&(!a||x.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${l}`))return;const u=document.createElement("link");if(u.rel=a?"stylesheet":qp,a||(u.as="script",u.crossOrigin=""),u.href=o,document.head.appendChild(u),a)return new Promise((m,x)=>{u.addEventListener("load",m),u.addEventListener("error",()=>x(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>t()).catch(o=>{const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o})};var lu="popstate";function Qp(e={}){function t(r,i){let{pathname:o,search:a,hash:l}=r.location;return Qa("",{pathname:o,search:a,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Cs(i)}return Yp(t,n,null,e)}function De(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Ot(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Hp(){return Math.random().toString(36).substring(2,10)}function cu(e,t){return{usr:e.state,key:e.key,idx:t}}function Qa(e,t,n=null,r){return{pathname:typeof e=="string"?e:e.pathname,search:"",hash:"",...typeof t=="string"?Pr(t):t,state:n,key:t&&t.key||r||Hp()}}function Cs({pathname:e="/",search:t="",hash:n=""}){return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),n&&n!=="#"&&(e+=n.charAt(0)==="#"?n:"#"+n),e}function Pr(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substring(n),e=e.substring(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substring(r),e=e.substring(0,r)),e&&(t.pathname=e)}return t}function Yp(e,t,n,r={}){let{window:i=document.defaultView,v5Compat:o=!1}=r,a=i.history,l="POP",c=null,u=m();u==null&&(u=0,a.replaceState({...a.state,idx:u},""));function m(){return(a.state||{idx:null}).idx}function x(){l="POP";let C=m(),g=C==null?null:C-u;u=C,c&&c({action:l,location:j.location,delta:g})}function p(C,g){l="PUSH";let f=Qa(j.location,C,g);n&&n(f,C),u=m()+1;let h=cu(f,u),S=j.createHref(f);try{a.pushState(h,"",S)}catch(_){if(_ instanceof DOMException&&_.name==="DataCloneError")throw _;i.location.assign(S)}o&&c&&c({action:l,location:j.location,delta:1})}function w(C,g){l="REPLACE";let f=Qa(j.location,C,g);n&&n(f,C),u=m();let h=cu(f,u),S=j.createHref(f);a.replaceState(h,"",S),o&&c&&c({action:l,location:j.location,delta:0})}function y(C){return Vp(C)}let j={get action(){return l},get location(){return e(i,a)},listen(C){if(c)throw new Error("A history only accepts one active listener");return i.addEventListener(lu,x),c=C,()=>{i.removeEventListener(lu,x),c=null}},createHref(C){return t(i,C)},createURL:y,encodeLocation(C){let g=y(C);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:p,replace:w,go(C){return a.go(C)}};return j}function Vp(e,t=!1){let n="http://localhost";typeof window<"u"&&(n=window.location.origin!=="null"?window.location.origin:window.location.href),De(n,"No window.location.(origin|href) available to create URL");let r=typeof e=="string"?e:Cs(e);return r=r.replace(/ $/,"%20"),!t&&r.startsWith("//")&&(r=n+r),new URL(r,n)}function Qf(e,t,n="/"){return Gp(e,t,n,!1)}function Gp(e,t,n,r){let i=typeof t=="string"?Pr(t):t,o=ln(i.pathname||"/",n);if(o==null)return null;let a=Hf(e);Kp(a);let l=null;for(let c=0;l==null&&c<a.length;++c){let u=ah(o);l=ih(a[c],u,r)}return l}function Hf(e,t=[],n=[],r=""){let i=(o,a,l)=>{let c={relativePath:l===void 0?o.path||"":l,caseSensitive:o.caseSensitive===!0,childrenIndex:a,route:o};c.relativePath.startsWith("/")&&(De(c.relativePath.startsWith(r),`Absolute route path "${c.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),c.relativePath=c.relativePath.slice(r.length));let u=nn([r,c.relativePath]),m=n.concat(c);o.children&&o.children.length>0&&(De(o.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${u}".`),Hf(o.children,t,m,u)),!(o.path==null&&!o.index)&&t.push({path:u,score:rh(u,o.index),routesMeta:m})};return e.forEach((o,a)=>{var l;if(o.path===""||!((l=o.path)!=null&&l.includes("?")))i(o,a);else for(let c of Yf(o.path))i(o,a,c)}),t}function Yf(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let a=Yf(r.join("/")),l=[];return l.push(...a.map(c=>c===""?o:[o,c].join("/"))),i&&l.push(...a),l.map(c=>e.startsWith("/")&&c===""?"/":c)}function Kp(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:sh(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}var Xp=/^:[\w-]+$/,Jp=3,Zp=2,eh=1,th=10,nh=-2,uu=e=>e==="*";function rh(e,t){let n=e.split("/"),r=n.length;return n.some(uu)&&(r+=nh),t&&(r+=Zp),n.filter(i=>!uu(i)).reduce((i,o)=>i+(Xp.test(o)?Jp:o===""?eh:th),r)}function sh(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function ih(e,t,n=!1){let{routesMeta:r}=e,i={},o="/",a=[];for(let l=0;l<r.length;++l){let c=r[l],u=l===r.length-1,m=o==="/"?t:t.slice(o.length)||"/",x=Yi({path:c.relativePath,caseSensitive:c.caseSensitive,end:u},m),p=c.route;if(!x&&u&&n&&!r[r.length-1].route.index&&(x=Yi({path:c.relativePath,caseSensitive:c.caseSensitive,end:!1},m)),!x)return null;Object.assign(i,x.params),a.push({params:i,pathname:nn([o,x.pathname]),pathnameBase:dh(nn([o,x.pathnameBase])),route:p}),x.pathnameBase!=="/"&&(o=nn([o,x.pathnameBase]))}return a}function Yi(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=oh(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],a=o.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((u,{paramName:m,isOptional:x},p)=>{if(m==="*"){let y=l[p]||"";a=o.slice(0,o.length-y.length).replace(/(.)\/+$/,"$1")}const w=l[p];return x&&!w?u[m]=void 0:u[m]=(w||"").replace(/%2F/g,"/"),u},{}),pathname:o,pathnameBase:a,pattern:e}}function oh(e,t=!1,n=!0){Ot(e==="*"||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,l,c)=>(r.push({paramName:l,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function ah(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Ot(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function ln(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function lh(e,t="/"){let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?Pr(e):e;return{pathname:n?n.startsWith("/")?n:ch(n,t):t,search:fh(r),hash:mh(i)}}function ch(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Ho(e,t,n,r){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function uh(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Bl(e){let t=uh(e);return t.map((n,r)=>r===t.length-1?n.pathname:n.pathnameBase)}function Ul(e,t,n,r=!1){let i;typeof e=="string"?i=Pr(e):(i={...e},De(!i.pathname||!i.pathname.includes("?"),Ho("?","pathname","search",i)),De(!i.pathname||!i.pathname.includes("#"),Ho("#","pathname","hash",i)),De(!i.search||!i.search.includes("#"),Ho("#","search","hash",i)));let o=e===""||i.pathname==="",a=o?"/":i.pathname,l;if(a==null)l=n;else{let x=t.length-1;if(!r&&a.startsWith("..")){let p=a.split("/");for(;p[0]==="..";)p.shift(),x-=1;i.pathname=p.join("/")}l=x>=0?t[x]:"/"}let c=lh(i,l),u=a&&a!=="/"&&a.endsWith("/"),m=(o||a===".")&&n.endsWith("/");return!c.pathname.endsWith("/")&&(u||m)&&(c.pathname+="/"),c}var nn=e=>e.join("/").replace(/\/\/+/g,"/"),dh=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),fh=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,mh=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function ph(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}var Vf=["POST","PUT","PATCH","DELETE"];new Set(Vf);var hh=["GET",...Vf];new Set(hh);var Tr=d.createContext(null);Tr.displayName="DataRouter";var fo=d.createContext(null);fo.displayName="DataRouterState";d.createContext(!1);var Gf=d.createContext({isTransitioning:!1});Gf.displayName="ViewTransition";var xh=d.createContext(new Map);xh.displayName="Fetchers";var gh=d.createContext(null);gh.displayName="Await";var $t=d.createContext(null);$t.displayName="Navigation";var zs=d.createContext(null);zs.displayName="Location";var Rt=d.createContext({outlet:null,matches:[],isDataRoute:!1});Rt.displayName="Route";var ql=d.createContext(null);ql.displayName="RouteError";function vh(e,{relative:t}={}){De(zr(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:r}=d.useContext($t),{hash:i,pathname:o,search:a}=Ms(e,{relative:t}),l=o;return n!=="/"&&(l=o==="/"?n:nn([n,o])),r.createHref({pathname:l,search:a,hash:i})}function zr(){return d.useContext(zs)!=null}function Bt(){return De(zr(),"useLocation() may be used only in the context of a <Router> component."),d.useContext(zs).location}var Kf="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Xf(e){d.useContext($t).static||d.useLayoutEffect(e)}function ut(){let{isDataRoute:e}=d.useContext(Rt);return e?Lh():yh()}function yh(){De(zr(),"useNavigate() may be used only in the context of a <Router> component.");let e=d.useContext(Tr),{basename:t,navigator:n}=d.useContext($t),{matches:r}=d.useContext(Rt),{pathname:i}=Bt(),o=JSON.stringify(Bl(r)),a=d.useRef(!1);return Xf(()=>{a.current=!0}),d.useCallback((c,u={})=>{if(Ot(a.current,Kf),!a.current)return;if(typeof c=="number"){n.go(c);return}let m=Ul(c,JSON.parse(o),i,u.relative==="path");e==null&&t!=="/"&&(m.pathname=m.pathname==="/"?t:nn([t,m.pathname])),(u.replace?n.replace:n.push)(m,u.state,u)},[t,n,o,i,e])}var bh=d.createContext(null);function wh(e){let t=d.useContext(Rt).outlet;return t&&d.createElement(bh.Provider,{value:e},t)}function jh(){let{matches:e}=d.useContext(Rt),t=e[e.length-1];return t?t.params:{}}function Ms(e,{relative:t}={}){let{matches:n}=d.useContext(Rt),{pathname:r}=Bt(),i=JSON.stringify(Bl(n));return d.useMemo(()=>Ul(e,JSON.parse(i),r,t==="path"),[e,i,r,t])}function kh(e,t){return Jf(e,t)}function Jf(e,t,n,r){var g;De(zr(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:i}=d.useContext($t),{matches:o}=d.useContext(Rt),a=o[o.length-1],l=a?a.params:{},c=a?a.pathname:"/",u=a?a.pathnameBase:"/",m=a&&a.route;{let f=m&&m.path||"";Zf(c,!m||f.endsWith("*")||f.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${c}" (under <Route path="${f}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${f}"> to <Route path="${f==="/"?"*":`${f}/*`}">.`)}let x=Bt(),p;if(t){let f=typeof t=="string"?Pr(t):t;De(u==="/"||((g=f.pathname)==null?void 0:g.startsWith(u)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${u}" but pathname "${f.pathname}" was given in the \`location\` prop.`),p=f}else p=x;let w=p.pathname||"/",y=w;if(u!=="/"){let f=u.replace(/^\//,"").split("/");y="/"+w.replace(/^\//,"").split("/").slice(f.length).join("/")}let j=Qf(e,{pathname:y});Ot(m||j!=null,`No routes matched location "${p.pathname}${p.search}${p.hash}" `),Ot(j==null||j[j.length-1].route.element!==void 0||j[j.length-1].route.Component!==void 0||j[j.length-1].route.lazy!==void 0,`Matched leaf route at location "${p.pathname}${p.search}${p.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let C=_h(j&&j.map(f=>Object.assign({},f,{params:Object.assign({},l,f.params),pathname:nn([u,i.encodeLocation?i.encodeLocation(f.pathname).pathname:f.pathname]),pathnameBase:f.pathnameBase==="/"?u:nn([u,i.encodeLocation?i.encodeLocation(f.pathnameBase).pathname:f.pathnameBase])})),o,n,r);return t&&C?d.createElement(zs.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...p},navigationType:"POP"}},C):C}function Nh(){let e=Mh(),t=ph(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,r="rgba(200,200,200, 0.5)",i={padding:"0.5rem",backgroundColor:r},o={padding:"2px 4px",backgroundColor:r},a=null;return console.error("Error handled by React Router default ErrorBoundary:",e),a=d.createElement(d.Fragment,null,d.createElement("p",null,"💿 Hey developer 👋"),d.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",d.createElement("code",{style:o},"ErrorBoundary")," or"," ",d.createElement("code",{style:o},"errorElement")," prop on your route.")),d.createElement(d.Fragment,null,d.createElement("h2",null,"Unexpected Application Error!"),d.createElement("h3",{style:{fontStyle:"italic"}},t),n?d.createElement("pre",{style:i},n):null,a)}var Sh=d.createElement(Nh,null),Ch=class extends d.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return this.state.error!==void 0?d.createElement(Rt.Provider,{value:this.props.routeContext},d.createElement(ql.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function Eh({routeContext:e,match:t,children:n}){let r=d.useContext(Tr);return r&&r.static&&r.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=t.route.id),d.createElement(Rt.Provider,{value:e},n)}function _h(e,t=[],n=null,r=null){if(e==null){if(!n)return null;if(n.errors)e=n.matches;else if(t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let i=e,o=n==null?void 0:n.errors;if(o!=null){let c=i.findIndex(u=>u.route.id&&(o==null?void 0:o[u.route.id])!==void 0);De(c>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(o).join(",")}`),i=i.slice(0,Math.min(i.length,c+1))}let a=!1,l=-1;if(n)for(let c=0;c<i.length;c++){let u=i[c];if((u.route.HydrateFallback||u.route.hydrateFallbackElement)&&(l=c),u.route.id){let{loaderData:m,errors:x}=n,p=u.route.loader&&!m.hasOwnProperty(u.route.id)&&(!x||x[u.route.id]===void 0);if(u.route.lazy||p){a=!0,l>=0?i=i.slice(0,l+1):i=[i[0]];break}}}return i.reduceRight((c,u,m)=>{let x,p=!1,w=null,y=null;n&&(x=o&&u.route.id?o[u.route.id]:void 0,w=u.route.errorElement||Sh,a&&(l<0&&m===0?(Zf("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),p=!0,y=null):l===m&&(p=!0,y=u.route.hydrateFallbackElement||null)));let j=t.concat(i.slice(0,m+1)),C=()=>{let g;return x?g=w:p?g=y:u.route.Component?g=d.createElement(u.route.Component,null):u.route.element?g=u.route.element:g=c,d.createElement(Eh,{match:u,routeContext:{outlet:c,matches:j,isDataRoute:n!=null},children:g})};return n&&(u.route.ErrorBoundary||u.route.errorElement||m===0)?d.createElement(Ch,{location:n.location,revalidation:n.revalidation,component:w,error:x,children:C(),routeContext:{outlet:null,matches:j,isDataRoute:!0}}):C()},null)}function Wl(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Rh(e){let t=d.useContext(Tr);return De(t,Wl(e)),t}function Ph(e){let t=d.useContext(fo);return De(t,Wl(e)),t}function Th(e){let t=d.useContext(Rt);return De(t,Wl(e)),t}function Ql(e){let t=Th(e),n=t.matches[t.matches.length-1];return De(n.route.id,`${e} can only be used on routes that contain a unique "id"`),n.route.id}function zh(){return Ql("useRouteId")}function Mh(){var r;let e=d.useContext(ql),t=Ph("useRouteError"),n=Ql("useRouteError");return e!==void 0?e:(r=t.errors)==null?void 0:r[n]}function Lh(){let{router:e}=Rh("useNavigate"),t=Ql("useNavigate"),n=d.useRef(!1);return Xf(()=>{n.current=!0}),d.useCallback(async(i,o={})=>{Ot(n.current,Kf),n.current&&(typeof i=="number"?e.navigate(i):await e.navigate(i,{fromRouteId:t,...o}))},[e,t])}var du={};function Zf(e,t,n){!t&&!du[e]&&(du[e]=!0,Ot(!1,n))}d.memo(Ih);function Ih({routes:e,future:t,state:n}){return Jf(e,void 0,n,t)}function Fh({to:e,replace:t,state:n,relative:r}){De(zr(),"<Navigate> may be used only in the context of a <Router> component.");let{static:i}=d.useContext($t);Ot(!i,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:o}=d.useContext(Rt),{pathname:a}=Bt(),l=ut(),c=Ul(e,Bl(o),a,r==="path"),u=JSON.stringify(c);return d.useEffect(()=>{l(JSON.parse(u),{replace:t,state:n,relative:r})},[l,u,r,t,n]),null}function Dh(e){return wh(e.context)}function Ye(e){De(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Ah({basename:e="/",children:t=null,location:n,navigationType:r="POP",navigator:i,static:o=!1}){De(!zr(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let a=e.replace(/^\/*/,"/"),l=d.useMemo(()=>({basename:a,navigator:i,static:o,future:{}}),[a,i,o]);typeof n=="string"&&(n=Pr(n));let{pathname:c="/",search:u="",hash:m="",state:x=null,key:p="default"}=n,w=d.useMemo(()=>{let y=ln(c,a);return y==null?null:{location:{pathname:y,search:u,hash:m,state:x,key:p},navigationType:r}},[a,c,u,m,x,p,r]);return Ot(w!=null,`<Router basename="${a}"> is not able to match the URL "${c}${u}${m}" because it does not start with the basename, so the <Router> won't render anything.`),w==null?null:d.createElement($t.Provider,{value:l},d.createElement(zs.Provider,{children:t,value:w}))}function Oh({children:e,location:t}){return kh(Ha(e),t)}function Ha(e,t=[]){let n=[];return d.Children.forEach(e,(r,i)=>{if(!d.isValidElement(r))return;let o=[...t,i];if(r.type===d.Fragment){n.push.apply(n,Ha(r.props.children,o));return}De(r.type===Ye,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),De(!r.props.index||!r.props.children,"An index route cannot have child routes.");let a={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(a.children=Ha(r.props.children,o)),n.push(a)}),n}var yi="get",bi="application/x-www-form-urlencoded";function mo(e){return e!=null&&typeof e.tagName=="string"}function $h(e){return mo(e)&&e.tagName.toLowerCase()==="button"}function Bh(e){return mo(e)&&e.tagName.toLowerCase()==="form"}function Uh(e){return mo(e)&&e.tagName.toLowerCase()==="input"}function qh(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Wh(e,t){return e.button===0&&(!t||t==="_self")&&!qh(e)}var Zs=null;function Qh(){if(Zs===null)try{new FormData(document.createElement("form"),0),Zs=!1}catch{Zs=!0}return Zs}var Hh=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Yo(e){return e!=null&&!Hh.has(e)?(Ot(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${bi}"`),null):e}function Yh(e,t){let n,r,i,o,a;if(Bh(e)){let l=e.getAttribute("action");r=l?ln(l,t):null,n=e.getAttribute("method")||yi,i=Yo(e.getAttribute("enctype"))||bi,o=new FormData(e)}else if($h(e)||Uh(e)&&(e.type==="submit"||e.type==="image")){let l=e.form;if(l==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let c=e.getAttribute("formaction")||l.getAttribute("action");if(r=c?ln(c,t):null,n=e.getAttribute("formmethod")||l.getAttribute("method")||yi,i=Yo(e.getAttribute("formenctype"))||Yo(l.getAttribute("enctype"))||bi,o=new FormData(l,e),!Qh()){let{name:u,type:m,value:x}=e;if(m==="image"){let p=u?`${u}.`:"";o.append(`${p}x`,"0"),o.append(`${p}y`,"0")}else u&&o.append(u,x)}}else{if(mo(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=yi,r=null,i=bi,a=e}return o&&i==="text/plain"&&(a=o,o=void 0),{action:r,method:n.toLowerCase(),encType:i,formData:o,body:a}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Hl(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Vh(e,t,n){let r=typeof e=="string"?new URL(e,typeof window>"u"?"server://singlefetch/":window.location.origin):e;return r.pathname==="/"?r.pathname=`_root.${n}`:t&&ln(r.pathname,t)==="/"?r.pathname=`${t.replace(/\/$/,"")}/_root.${n}`:r.pathname=`${r.pathname.replace(/\/$/,"")}.${n}`,r}async function Gh(e,t){if(e.id in t)return t[e.id];try{let n=await Wf(()=>import(e.module),[]);return t[e.id]=n,n}catch(n){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Kh(e){return e!=null&&typeof e.page=="string"}function Xh(e){return e==null?!1:e.href==null?e.rel==="preload"&&typeof e.imageSrcSet=="string"&&typeof e.imageSizes=="string":typeof e.rel=="string"&&typeof e.href=="string"}async function Jh(e,t,n){let r=await Promise.all(e.map(async i=>{let o=t.routes[i.route.id];if(o){let a=await Gh(o,n);return a.links?a.links():[]}return[]}));return nx(r.flat(1).filter(Xh).filter(i=>i.rel==="stylesheet"||i.rel==="preload").map(i=>i.rel==="stylesheet"?{...i,rel:"prefetch",as:"style"}:{...i,rel:"prefetch"}))}function fu(e,t,n,r,i,o){let a=(c,u)=>n[u]?c.route.id!==n[u].route.id:!0,l=(c,u)=>{var m;return n[u].pathname!==c.pathname||((m=n[u].route.path)==null?void 0:m.endsWith("*"))&&n[u].params["*"]!==c.params["*"]};return o==="assets"?t.filter((c,u)=>a(c,u)||l(c,u)):o==="data"?t.filter((c,u)=>{var x;let m=r.routes[c.route.id];if(!m||!m.hasLoader)return!1;if(a(c,u)||l(c,u))return!0;if(c.route.shouldRevalidate){let p=c.route.shouldRevalidate({currentUrl:new URL(i.pathname+i.search+i.hash,window.origin),currentParams:((x=n[0])==null?void 0:x.params)||{},nextUrl:new URL(e,window.origin),nextParams:c.params,defaultShouldRevalidate:!0});if(typeof p=="boolean")return p}return!0}):[]}function Zh(e,t,{includeHydrateFallback:n}={}){return ex(e.map(r=>{let i=t.routes[r.route.id];if(!i)return[];let o=[i.module];return i.clientActionModule&&(o=o.concat(i.clientActionModule)),i.clientLoaderModule&&(o=o.concat(i.clientLoaderModule)),n&&i.hydrateFallbackModule&&(o=o.concat(i.hydrateFallbackModule)),i.imports&&(o=o.concat(i.imports)),o}).flat(1))}function ex(e){return[...new Set(e)]}function tx(e){let t={},n=Object.keys(e).sort();for(let r of n)t[r]=e[r];return t}function nx(e,t){let n=new Set,r=new Set(t);return e.reduce((i,o)=>{if(t&&!Kh(o)&&o.as==="script"&&o.href&&r.has(o.href))return i;let l=JSON.stringify(tx(o));return n.has(l)||(n.add(l),i.push({key:l,link:o})),i},[])}function e0(){let e=d.useContext(Tr);return Hl(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}function rx(){let e=d.useContext(fo);return Hl(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}var Yl=d.createContext(void 0);Yl.displayName="FrameworkContext";function t0(){let e=d.useContext(Yl);return Hl(e,"You must render this element inside a <HydratedRouter> element"),e}function sx(e,t){let n=d.useContext(Yl),[r,i]=d.useState(!1),[o,a]=d.useState(!1),{onFocus:l,onBlur:c,onMouseEnter:u,onMouseLeave:m,onTouchStart:x}=t,p=d.useRef(null);d.useEffect(()=>{if(e==="render"&&a(!0),e==="viewport"){let j=g=>{g.forEach(f=>{a(f.isIntersecting)})},C=new IntersectionObserver(j,{threshold:.5});return p.current&&C.observe(p.current),()=>{C.disconnect()}}},[e]),d.useEffect(()=>{if(r){let j=setTimeout(()=>{a(!0)},100);return()=>{clearTimeout(j)}}},[r]);let w=()=>{i(!0)},y=()=>{i(!1),a(!1)};return n?e!=="intent"?[o,p,{}]:[o,p,{onFocus:qr(l,w),onBlur:qr(c,y),onMouseEnter:qr(u,w),onMouseLeave:qr(m,y),onTouchStart:qr(x,w)}]:[!1,p,{}]}function qr(e,t){return n=>{e&&e(n),n.defaultPrevented||t(n)}}function ix({page:e,...t}){let{router:n}=e0(),r=d.useMemo(()=>Qf(n.routes,e,n.basename),[n.routes,e,n.basename]);return r?d.createElement(ax,{page:e,matches:r,...t}):null}function ox(e){let{manifest:t,routeModules:n}=t0(),[r,i]=d.useState([]);return d.useEffect(()=>{let o=!1;return Jh(e,t,n).then(a=>{o||i(a)}),()=>{o=!0}},[e,t,n]),r}function ax({page:e,matches:t,...n}){let r=Bt(),{manifest:i,routeModules:o}=t0(),{basename:a}=e0(),{loaderData:l,matches:c}=rx(),u=d.useMemo(()=>fu(e,t,c,i,r,"data"),[e,t,c,i,r]),m=d.useMemo(()=>fu(e,t,c,i,r,"assets"),[e,t,c,i,r]),x=d.useMemo(()=>{if(e===r.pathname+r.search+r.hash)return[];let y=new Set,j=!1;if(t.forEach(g=>{var h;let f=i.routes[g.route.id];!f||!f.hasLoader||(!u.some(S=>S.route.id===g.route.id)&&g.route.id in l&&((h=o[g.route.id])!=null&&h.shouldRevalidate)||f.hasClientLoader?j=!0:y.add(g.route.id))}),y.size===0)return[];let C=Vh(e,a,"data");return j&&y.size>0&&C.searchParams.set("_routes",t.filter(g=>y.has(g.route.id)).map(g=>g.route.id).join(",")),[C.pathname+C.search]},[a,l,r,i,u,t,e,o]),p=d.useMemo(()=>Zh(m,i),[m,i]),w=ox(m);return d.createElement(d.Fragment,null,x.map(y=>d.createElement("link",{key:y,rel:"prefetch",as:"fetch",href:y,...n})),p.map(y=>d.createElement("link",{key:y,rel:"modulepreload",href:y,...n})),w.map(({key:y,link:j})=>d.createElement("link",{key:y,...j})))}function lx(...e){return t=>{e.forEach(n=>{typeof n=="function"?n(t):n!=null&&(n.current=t)})}}var n0=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{n0&&(window.__reactRouterVersion="7.7.1")}catch{}function cx({basename:e,children:t,window:n}){let r=d.useRef();r.current==null&&(r.current=Qp({window:n,v5Compat:!0}));let i=r.current,[o,a]=d.useState({action:i.action,location:i.location}),l=d.useCallback(c=>{d.startTransition(()=>a(c))},[a]);return d.useLayoutEffect(()=>i.listen(l),[i,l]),d.createElement(Ah,{basename:e,children:t,location:o.location,navigationType:o.action,navigator:i})}var r0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,s0=d.forwardRef(function({onClick:t,discover:n="render",prefetch:r="none",relative:i,reloadDocument:o,replace:a,state:l,target:c,to:u,preventScrollReset:m,viewTransition:x,...p},w){let{basename:y}=d.useContext($t),j=typeof u=="string"&&r0.test(u),C,g=!1;if(typeof u=="string"&&j&&(C=u,n0))try{let b=new URL(window.location.href),k=u.startsWith("//")?new URL(b.protocol+u):new URL(u),E=ln(k.pathname,y);k.origin===b.origin&&E!=null?u=E+k.search+k.hash:g=!0}catch{Ot(!1,`<Link to="${u}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let f=vh(u,{relative:i}),[h,S,_]=sx(r,p),L=mx(u,{replace:a,state:l,target:c,preventScrollReset:m,relative:i,viewTransition:x});function N(b){t&&t(b),b.defaultPrevented||L(b)}let v=d.createElement("a",{...p,..._,href:C||f,onClick:g||o?t:N,ref:lx(w,S),target:c,"data-discover":!j&&n==="render"?"true":void 0});return h&&!j?d.createElement(d.Fragment,null,v,d.createElement(ix,{page:f})):v});s0.displayName="Link";var ux=d.forwardRef(function({"aria-current":t="page",caseSensitive:n=!1,className:r="",end:i=!1,style:o,to:a,viewTransition:l,children:c,...u},m){let x=Ms(a,{relative:u.relative}),p=Bt(),w=d.useContext(fo),{navigator:y,basename:j}=d.useContext($t),C=w!=null&&vx(x)&&l===!0,g=y.encodeLocation?y.encodeLocation(x).pathname:x.pathname,f=p.pathname,h=w&&w.navigation&&w.navigation.location?w.navigation.location.pathname:null;n||(f=f.toLowerCase(),h=h?h.toLowerCase():null,g=g.toLowerCase()),h&&j&&(h=ln(h,j)||h);const S=g!=="/"&&g.endsWith("/")?g.length-1:g.length;let _=f===g||!i&&f.startsWith(g)&&f.charAt(S)==="/",L=h!=null&&(h===g||!i&&h.startsWith(g)&&h.charAt(g.length)==="/"),N={isActive:_,isPending:L,isTransitioning:C},v=_?t:void 0,b;typeof r=="function"?b=r(N):b=[r,_?"active":null,L?"pending":null,C?"transitioning":null].filter(Boolean).join(" ");let k=typeof o=="function"?o(N):o;return d.createElement(s0,{...u,"aria-current":v,className:b,ref:m,style:k,to:a,viewTransition:l},typeof c=="function"?c(N):c)});ux.displayName="NavLink";var dx=d.forwardRef(({discover:e="render",fetcherKey:t,navigate:n,reloadDocument:r,replace:i,state:o,method:a=yi,action:l,onSubmit:c,relative:u,preventScrollReset:m,viewTransition:x,...p},w)=>{let y=xx(),j=gx(l,{relative:u}),C=a.toLowerCase()==="get"?"get":"post",g=typeof l=="string"&&r0.test(l),f=h=>{if(c&&c(h),h.defaultPrevented)return;h.preventDefault();let S=h.nativeEvent.submitter,_=(S==null?void 0:S.getAttribute("formmethod"))||a;y(S||h.currentTarget,{fetcherKey:t,method:_,navigate:n,replace:i,state:o,relative:u,preventScrollReset:m,viewTransition:x})};return d.createElement("form",{ref:w,method:C,action:j,onSubmit:r?c:f,...p,"data-discover":!g&&e==="render"?"true":void 0})});dx.displayName="Form";function fx(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function i0(e){let t=d.useContext(Tr);return De(t,fx(e)),t}function mx(e,{target:t,replace:n,state:r,preventScrollReset:i,relative:o,viewTransition:a}={}){let l=ut(),c=Bt(),u=Ms(e,{relative:o});return d.useCallback(m=>{if(Wh(m,t)){m.preventDefault();let x=n!==void 0?n:Cs(c)===Cs(u);l(e,{replace:x,state:r,preventScrollReset:i,relative:o,viewTransition:a})}},[c,l,u,n,r,t,e,i,o,a])}var px=0,hx=()=>`__${String(++px)}__`;function xx(){let{router:e}=i0("useSubmit"),{basename:t}=d.useContext($t),n=zh();return d.useCallback(async(r,i={})=>{let{action:o,method:a,encType:l,formData:c,body:u}=Yh(r,t);if(i.navigate===!1){let m=i.fetcherKey||hx();await e.fetch(m,n,i.action||o,{preventScrollReset:i.preventScrollReset,formData:c,body:u,formMethod:i.method||a,formEncType:i.encType||l,flushSync:i.flushSync})}else await e.navigate(i.action||o,{preventScrollReset:i.preventScrollReset,formData:c,body:u,formMethod:i.method||a,formEncType:i.encType||l,replace:i.replace,state:i.state,fromRouteId:n,flushSync:i.flushSync,viewTransition:i.viewTransition})},[e,t,n])}function gx(e,{relative:t}={}){let{basename:n}=d.useContext($t),r=d.useContext(Rt);De(r,"useFormAction must be used inside a RouteContext");let[i]=r.matches.slice(-1),o={...Ms(e||".",{relative:t})},a=Bt();if(e==null){o.search=a.search;let l=new URLSearchParams(o.search),c=l.getAll("index");if(c.some(m=>m==="")){l.delete("index"),c.filter(x=>x).forEach(x=>l.append("index",x));let m=l.toString();o.search=m?`?${m}`:""}}return(!e||e===".")&&i.route.index&&(o.search=o.search?o.search.replace(/^\?/,"?index&"):"?index"),n!=="/"&&(o.pathname=o.pathname==="/"?n:nn([n,o.pathname])),Cs(o)}function vx(e,{relative:t}={}){let n=d.useContext(Gf);De(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=i0("useViewTransitionState"),i=Ms(e,{relative:t});if(!n.isTransitioning)return!1;let o=ln(n.currentLocation.pathname,r)||n.currentLocation.pathname,a=ln(n.nextLocation.pathname,r)||n.nextLocation.pathname;return Yi(i.pathname,a)!=null||Yi(i.pathname,o)!=null}function yx({size:e=22,spinning:t=!1}){return s.jsx("div",{style:{width:e,height:e},className:"grid place-items-center",children:s.jsxs("svg",{viewBox:"0 0 100 100",className:`${t?"animate-[spin_0.8s_ease-out]":"motion-safe:animate-[spin_9s_linear_infinite]"} group-active:motion-safe:animate-[spin_1.2s_linear_infinite]`,style:{filter:"drop-shadow(0 2px 4px rgba(0,0,0,0.2))"},children:[s.jsx("path",{d:"M50,50 L50,5 A45,45 0 0,1 86.97,25.98 Z",fill:"#6366F1"}),s.jsx("path",{d:"M50,50 L86.97,25.98 A45,45 0 0,1 86.97,74.02 Z",fill:"#22C55E"}),s.jsx("path",{d:"M50,50 L86.97,74.02 A45,45 0 0,1 50,95 Z",fill:"#F59E0B"}),s.jsx("path",{d:"M50,50 L50,95 A45,45 0 0,1 13.03,74.02 Z",fill:"#EF4444"}),s.jsx("path",{d:"M50,50 L13.03,74.02 A45,45 0 0,1 13.03,25.98 Z",fill:"#3B82F6"}),s.jsx("path",{d:"M50,50 L13.03,25.98 A45,45 0 0,1 50,5 Z",fill:"#8B5CF6"}),s.jsx("circle",{cx:"50",cy:"50",r:"9",fill:"#111827",stroke:"white",strokeWidth:"2"})]})})}function bx(){const e=ut(),{pathname:t}=Bt(),n=d.useRef({}),r=d.useRef(0),[i,o]=d.useState(!1),a=d.useRef({});d.useEffect(()=>{a.current={refresh:new Audio("/sounds/refresh.mp3"),tap:new Audio("/sounds/tap.mp3"),whoosh:new Audio("/sounds/whoosh.mp3")},Object.values(a.current).forEach(D=>{D.volume=.5})},[]);const l=D=>{const q=a.current[D];q&&(q.currentTime=0,q.play().catch(()=>{}))},c=D=>{if(navigator.vibrate)switch(D){case"light":navigator.vibrate(10);break;case"medium":navigator.vibrate(20);break;case"heavy":navigator.vibrate(40);break;case"double":navigator.vibrate([20,50,20]);break;case"success":navigator.vibrate([10,50,10,50,10]);break;default:navigator.vibrate(15)}};d.useEffect(()=>{if(t.startsWith("/profile/")){window.scrollTo(0,0);const D=document.querySelector("main");D&&(D.scrollTop=0)}else{const D=n.current[t];D!==void 0?window.scrollTo(0,D):window.scrollTo(0,0)}},[t]);const u=()=>{n.current[t]=window.scrollY},m=["/","/play","/profile"].includes(t),[x,p]=d.useState(!1),[w,y]=d.useState({open:!1,go:null});d.useEffect(()=>{const D=new MutationObserver(()=>{p(document.body.classList.contains("modal-open"))});return D.observe(document.body,{attributes:!0,attributeFilter:["class"]}),()=>D.disconnect()},[]);const C=x||[/^\/quiz\//,/^\/practice\//,/^\/profile\//].some(D=>D.test(t)),g=D=>D==="/"?t==="/":t.startsWith(D),f=d.useRef(0),[h,S]=d.useState(!1),[_,L]=d.useState(0),[N,v]=d.useState(!1),[b,k]=d.useState(0),E=D=>{!m||N||window.scrollY===0&&(f.current=D.touches[0].clientY)},I=D=>{if(!(!m||N)&&window.scrollY===0){const q=D.touches[0].clientY-f.current;if(q>0){S(!0);const Q=Math.min(q,120);L(Q),k(Math.min(Q/60*100,100)),q>60&&q<65&&c("light")}}},H=()=>{h&&_>60&&(v(!0),l("refresh"),c("success"),window.scrollTo({top:0,behavior:"smooth"}),setTimeout(()=>{v(!1),k(0)},1500)),S(!1),L(0)},te=({path:D,icon:q,label:Q,emoji:R})=>{const T=g(D),[M,z]=d.useState(!1),O=()=>{u(),z(!0),setTimeout(()=>z(!1),600);const $=()=>{if(D==="/play"){o(!0),l("whoosh"),c("medium"),setTimeout(()=>{e(`/play?view=modes&reset=${Date.now()}`),o(!1)},200);return}if(T){const B=Date.now();B-r.current<500&&(window.scrollTo({top:0,behavior:"smooth"}),l("tap"),c("double")),r.current=B}else l("tap"),c("light"),e(D)};if(localStorage.getItem("qp_in_question")==="true"&&!T){y({open:!0,go:$});return}$()};return s.jsxs("button",{type:"button",onClick:O,className:`group relative flex h-14 w-20 flex-col items-center justify-center rounded-xl transition-all
          ${T?"scale-110":"scale-100 hover:scale-105"}
          ${M?"animate-bounce":""}`,"aria-current":T?"page":void 0,children:[T&&s.jsxs(s.Fragment,{children:[s.jsx("span",{className:"absolute -top-2 h-1.5 w-10 rounded-full bg-gradient-to-r from-transparent via-white to-transparent opacity-60"}),s.jsx("div",{className:"absolute inset-0 rounded-xl bg-white/10 blur-xl"})]}),s.jsx("div",{className:`leading-none text-2xl transition-transform ${T?"scale-125":""} ${D==="/play"&&i?"animate-spin":""}`,children:R||q}),s.jsx("span",{className:`mt-1 text-[10px] font-medium transition-all ${T?"text-white":"text-base-muted/80"}`,children:Q})]})};return s.jsxs("div",{className:"min-h-screen bg-base-bg text-base-text",onTouchStart:E,onTouchMove:I,onTouchEnd:H,children:[s.jsx("style",{jsx:!0,children:`
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
            ${N?"rainbow-text":""}`,children:N?"Refreshed! 🌟":_>60?"Release! 🚀":"Pull down..."}),N&&s.jsx("div",{className:"absolute inset-0 pointer-events-none",children:[...Array(6)].map((D,q)=>s.jsx("span",{className:"absolute text-2xl",style:{left:`${-30+q*15}px`,animation:"confetti 1s ease-out forwards",animationDelay:`${q*.1}s`},children:["🎊","✨","⭐","🎈","🎉","💫"][q]},q))})]}),s.jsx("main",{className:"mx-auto w-full max-w-none px-1 sm:px-3 md:px-4 overscroll-y-contain",style:{height:C?"100dvh":"calc(100dvh - (5.5rem + env(safe-area-inset-bottom)))",paddingTop:"calc(env(safe-area-inset-top) + 12px)",overflowY:"auto",transform:h&&!N?`translateY(${_*.5}px)`:void 0,transition:h||N?"transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)":void 0},children:s.jsx(Dh,{})}),w.open&&s.jsxs("div",{className:"fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center px-6",style:{animation:"fadeIn 0.2s ease-out"},children:[s.jsxs("div",{className:"w-full max-w-sm rounded-3xl bg-gradient-to-b from-base-card to-base-card/90 border border-base-border p-6 text-center shadow-2xl",style:{animation:"slideUp 0.3s ease-out"},children:[s.jsx("div",{className:"text-5xl mb-4",style:{animation:"bounce 0.6s ease-out"},children:"😟"}),s.jsx("div",{className:"text-xl font-bold mb-2 bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent",children:"Leave the game?"}),s.jsx("p",{className:"text-base-muted mb-6 text-sm",children:"You'll lose your current progress!"}),s.jsxs("div",{className:"flex gap-3",children:[s.jsx("button",{onClick:()=>{c("light"),y({open:!1,go:null})},className:"flex-1 py-3 rounded-2xl border-2 border-green-500/30 bg-green-500/10 hover:bg-green-500/20 transition-all font-semibold text-green-400",children:"Keep Playing! 🎮"}),s.jsx("button",{onClick:()=>{c("medium");const D=w.go;y({open:!1,go:null}),D==null||D()},className:"flex-1 py-3 rounded-2xl bg-gradient-to-r from-red-500/80 to-orange-500/80 text-white font-semibold hover:from-red-500 hover:to-orange-500 transition-all",children:"Leave 👋"})]})]}),s.jsx("style",{jsx:!0,children:`
            @keyframes fadeIn {
              from { opacity: 0; }
              to { opacity: 1; }
            }
            @keyframes slideUp {
              from { transform: translateY(20px); opacity: 0; }
              to { transform: translateY(0); opacity: 1; }
            }
          `})]}),!C&&s.jsxs("nav",{role:"navigation","aria-label":"Bottom navigation",className:"fixed inset-x-0 bottom-0 z-50",children:[s.jsx("div",{className:"absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0B0F1A] to-[#0B0F1A]/95 backdrop-blur-lg",style:{height:"calc(5.5rem + env(safe-area-inset-bottom))"},"aria-hidden":!0}),s.jsx("div",{className:"relative mx-auto max-w-md px-4 pb-[calc(env(safe-area-inset-bottom)+0.5rem)] pt-2",children:s.jsxs("div",{className:"relative",children:[s.jsx("div",{className:"absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-green-500/20 blur-2xl"}),s.jsxs("div",{className:"relative flex h-[72px] items-center justify-around rounded-3xl border border-white/10 bg-gradient-to-b from-base-card/95 to-base-card/80 shadow-2xl backdrop-blur-xl",children:[s.jsx(te,{path:"/",emoji:"🏠",label:"Home"}),s.jsx(te,{path:"/play",icon:s.jsx(yx,{size:26,spinning:i}),label:"Play"}),s.jsx(te,{path:"/swipe",emoji:"📚",label:"Swipe"}),s.jsx(te,{path:"/profile",emoji:"👤",label:"Profile"})]})]})})]})]})}function Vi(){return Vi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Vi.apply(null,arguments)}function wx(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function jx(e){d.useEffect(e,[])}var kx=["id","volume","playbackRate","soundEnabled","interrupt","onload"];function It(e,t){var n=t===void 0?{}:t,r=n.volume,i=r===void 0?1:r,o=n.playbackRate,a=o===void 0?1:o,l=n.soundEnabled,c=l===void 0?!0:l,u=n.interrupt,m=u===void 0?!1:u,x=n.onload,p=wx(n,kx),w=it.useRef(null),y=it.useRef(!1),j=it.useState(null),C=j[0],g=j[1],f=it.useState(null),h=f[0],S=f[1],_=function(){typeof x=="function"&&x.call(this),y.current&&g(this.duration()*1e3),S(this)};jx(function(){return Wf(()=>import("./howler-72e2f6cb.js").then(k=>k.h),[]).then(function(k){if(!y.current){var E;w.current=(E=k.Howl)!==null&&E!==void 0?E:k.default.Howl,y.current=!0,new w.current(Vi({src:Array.isArray(e)?e:[e],volume:i,rate:a,onload:_},p))}}),function(){y.current=!1}}),it.useEffect(function(){w.current&&h&&S(new w.current(Vi({src:Array.isArray(e)?e:[e],volume:i,onload:_},p)))},[JSON.stringify(e)]),it.useEffect(function(){h&&(h.volume(i),p.sprite||h.rate(a))},[h,i,a]);var L=it.useCallback(function(k){typeof k>"u"&&(k={}),!(!h||!c&&!k.forceSoundEnabled)&&(m&&h.stop(),k.playbackRate&&h.rate(k.playbackRate),h.play(k.id))},[h,c,m]),N=it.useCallback(function(k){h&&h.stop(k)},[h]),v=it.useCallback(function(k){h&&h.pause(k)},[h]),b=[L,{sound:h,stop:N,pause:v,duration:C}];return b}var o0={exports:{}};/* @license
Papa Parse
v5.5.3
https://github.com/mholt/PapaParse
License: MIT
*/(function(e,t){((n,r)=>{e.exports=r()})(x0,function n(){var r=typeof self<"u"?self:typeof window<"u"?window:r!==void 0?r:{},i,o=!r.document&&!!r.postMessage,a=r.IS_PAPA_WORKER||!1,l={},c=0,u={};function m(v){this._handle=null,this._finished=!1,this._completed=!1,this._halted=!1,this._input=null,this._baseIndex=0,this._partialLine="",this._rowCount=0,this._start=0,this._nextChunk=null,this.isFirstChunk=!0,this._completeResults={data:[],errors:[],meta:{}},(function(b){var k=_(b);k.chunkSize=parseInt(k.chunkSize),b.step||b.chunk||(k.chunkSize=null),this._handle=new j(k),(this._handle.streamer=this)._config=k}).call(this,v),this.parseChunk=function(b,k){var E=parseInt(this._config.skipFirstNLines)||0;if(this.isFirstChunk&&0<E){let H=this._config.newline;H||(I=this._config.quoteChar||'"',H=this._handle.guessLineEndings(b,I)),b=[...b.split(H).slice(E)].join(H)}this.isFirstChunk&&N(this._config.beforeFirstChunk)&&(I=this._config.beforeFirstChunk(b))!==void 0&&(b=I),this.isFirstChunk=!1,this._halted=!1;var E=this._partialLine+b,I=(this._partialLine="",this._handle.parse(E,this._baseIndex,!this._finished));if(!this._handle.paused()&&!this._handle.aborted()){if(b=I.meta.cursor,E=(this._finished||(this._partialLine=E.substring(b-this._baseIndex),this._baseIndex=b),I&&I.data&&(this._rowCount+=I.data.length),this._finished||this._config.preview&&this._rowCount>=this._config.preview),a)r.postMessage({results:I,workerId:u.WORKER_ID,finished:E});else if(N(this._config.chunk)&&!k){if(this._config.chunk(I,this._handle),this._handle.paused()||this._handle.aborted())return void(this._halted=!0);this._completeResults=I=void 0}return this._config.step||this._config.chunk||(this._completeResults.data=this._completeResults.data.concat(I.data),this._completeResults.errors=this._completeResults.errors.concat(I.errors),this._completeResults.meta=I.meta),this._completed||!E||!N(this._config.complete)||I&&I.meta.aborted||(this._config.complete(this._completeResults,this._input),this._completed=!0),E||I&&I.meta.paused||this._nextChunk(),I}this._halted=!0},this._sendError=function(b){N(this._config.error)?this._config.error(b):a&&this._config.error&&r.postMessage({workerId:u.WORKER_ID,error:b,finished:!1})}}function x(v){var b;(v=v||{}).chunkSize||(v.chunkSize=u.RemoteChunkSize),m.call(this,v),this._nextChunk=o?function(){this._readChunk(),this._chunkLoaded()}:function(){this._readChunk()},this.stream=function(k){this._input=k,this._nextChunk()},this._readChunk=function(){if(this._finished)this._chunkLoaded();else{if(b=new XMLHttpRequest,this._config.withCredentials&&(b.withCredentials=this._config.withCredentials),o||(b.onload=L(this._chunkLoaded,this),b.onerror=L(this._chunkError,this)),b.open(this._config.downloadRequestBody?"POST":"GET",this._input,!o),this._config.downloadRequestHeaders){var k,E=this._config.downloadRequestHeaders;for(k in E)b.setRequestHeader(k,E[k])}var I;this._config.chunkSize&&(I=this._start+this._config.chunkSize-1,b.setRequestHeader("Range","bytes="+this._start+"-"+I));try{b.send(this._config.downloadRequestBody)}catch(H){this._chunkError(H.message)}o&&b.status===0&&this._chunkError()}},this._chunkLoaded=function(){b.readyState===4&&(b.status<200||400<=b.status?this._chunkError():(this._start+=this._config.chunkSize||b.responseText.length,this._finished=!this._config.chunkSize||this._start>=(k=>(k=k.getResponseHeader("Content-Range"))!==null?parseInt(k.substring(k.lastIndexOf("/")+1)):-1)(b),this.parseChunk(b.responseText)))},this._chunkError=function(k){k=b.statusText||k,this._sendError(new Error(k))}}function p(v){(v=v||{}).chunkSize||(v.chunkSize=u.LocalChunkSize),m.call(this,v);var b,k,E=typeof FileReader<"u";this.stream=function(I){this._input=I,k=I.slice||I.webkitSlice||I.mozSlice,E?((b=new FileReader).onload=L(this._chunkLoaded,this),b.onerror=L(this._chunkError,this)):b=new FileReaderSync,this._nextChunk()},this._nextChunk=function(){this._finished||this._config.preview&&!(this._rowCount<this._config.preview)||this._readChunk()},this._readChunk=function(){var I=this._input,H=(this._config.chunkSize&&(H=Math.min(this._start+this._config.chunkSize,this._input.size),I=k.call(I,this._start,H)),b.readAsText(I,this._config.encoding));E||this._chunkLoaded({target:{result:H}})},this._chunkLoaded=function(I){this._start+=this._config.chunkSize,this._finished=!this._config.chunkSize||this._start>=this._input.size,this.parseChunk(I.target.result)},this._chunkError=function(){this._sendError(b.error)}}function w(v){var b;m.call(this,v=v||{}),this.stream=function(k){return b=k,this._nextChunk()},this._nextChunk=function(){var k,E;if(!this._finished)return k=this._config.chunkSize,b=k?(E=b.substring(0,k),b.substring(k)):(E=b,""),this._finished=!b,this.parseChunk(E)}}function y(v){m.call(this,v=v||{});var b=[],k=!0,E=!1;this.pause=function(){m.prototype.pause.apply(this,arguments),this._input.pause()},this.resume=function(){m.prototype.resume.apply(this,arguments),this._input.resume()},this.stream=function(I){this._input=I,this._input.on("data",this._streamData),this._input.on("end",this._streamEnd),this._input.on("error",this._streamError)},this._checkIsFinished=function(){E&&b.length===1&&(this._finished=!0)},this._nextChunk=function(){this._checkIsFinished(),b.length?this.parseChunk(b.shift()):k=!0},this._streamData=L(function(I){try{b.push(typeof I=="string"?I:I.toString(this._config.encoding)),k&&(k=!1,this._checkIsFinished(),this.parseChunk(b.shift()))}catch(H){this._streamError(H)}},this),this._streamError=L(function(I){this._streamCleanUp(),this._sendError(I)},this),this._streamEnd=L(function(){this._streamCleanUp(),E=!0,this._streamData("")},this),this._streamCleanUp=L(function(){this._input.removeListener("data",this._streamData),this._input.removeListener("end",this._streamEnd),this._input.removeListener("error",this._streamError)},this)}function j(v){var b,k,E,I,H=Math.pow(2,53),te=-H,D=/^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/,q=/^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/,Q=this,R=0,T=0,M=!1,z=!1,O=[],$={data:[],errors:[],meta:{}};function re(P){return v.skipEmptyLines==="greedy"?P.join("").trim()==="":P.length===1&&P[0].length===0}function B(){if($&&E&&(fe("Delimiter","UndetectableDelimiter","Unable to auto-detect delimiting character; defaulted to '"+u.DefaultDelimiter+"'"),E=!1),v.skipEmptyLines&&($.data=$.data.filter(function(V){return!re(V)})),ne()){let V=function(J,me){N(v.transformHeader)&&(J=v.transformHeader(J,me)),O.push(J)};if($)if(Array.isArray($.data[0])){for(var P=0;ne()&&P<$.data.length;P++)$.data[P].forEach(V);$.data.splice(0,1)}else $.data.forEach(V)}function F(V,J){for(var me=v.header?{}:[],Z=0;Z<V.length;Z++){var se=Z,U=V[Z],U=((X,ee)=>(le=>(v.dynamicTypingFunction&&v.dynamicTyping[le]===void 0&&(v.dynamicTyping[le]=v.dynamicTypingFunction(le)),(v.dynamicTyping[le]||v.dynamicTyping)===!0))(X)?ee==="true"||ee==="TRUE"||ee!=="false"&&ee!=="FALSE"&&((le=>{if(D.test(le)&&(le=parseFloat(le),te<le&&le<H))return 1})(ee)?parseFloat(ee):q.test(ee)?new Date(ee):ee===""?null:ee):ee)(se=v.header?Z>=O.length?"__parsed_extra":O[Z]:se,U=v.transform?v.transform(U,se):U);se==="__parsed_extra"?(me[se]=me[se]||[],me[se].push(U)):me[se]=U}return v.header&&(Z>O.length?fe("FieldMismatch","TooManyFields","Too many fields: expected "+O.length+" fields but parsed "+Z,T+J):Z<O.length&&fe("FieldMismatch","TooFewFields","Too few fields: expected "+O.length+" fields but parsed "+Z,T+J)),me}var Y;$&&(v.header||v.dynamicTyping||v.transform)&&(Y=1,!$.data.length||Array.isArray($.data[0])?($.data=$.data.map(F),Y=$.data.length):$.data=F($.data,0),v.header&&$.meta&&($.meta.fields=O),T+=Y)}function ne(){return v.header&&O.length===0}function fe(P,F,Y,V){P={type:P,code:F,message:Y},V!==void 0&&(P.row=V),$.errors.push(P)}N(v.step)&&(I=v.step,v.step=function(P){$=P,ne()?B():(B(),$.data.length!==0&&(R+=P.data.length,v.preview&&R>v.preview?k.abort():($.data=$.data[0],I($,Q))))}),this.parse=function(P,F,Y){var V=v.quoteChar||'"',V=(v.newline||(v.newline=this.guessLineEndings(P,V)),E=!1,v.delimiter?N(v.delimiter)&&(v.delimiter=v.delimiter(P),$.meta.delimiter=v.delimiter):((V=((J,me,Z,se,U)=>{var X,ee,le,Ee;U=U||[",","	","|",";",u.RECORD_SEP,u.UNIT_SEP];for(var Ce=0;Ce<U.length;Ce++){for(var A,ve=U[Ce],je=0,G=0,K=0,pe=(le=void 0,new g({comments:se,delimiter:ve,newline:me,preview:10}).parse(J)),he=0;he<pe.data.length;he++)Z&&re(pe.data[he])?K++:(A=pe.data[he].length,G+=A,le===void 0?le=A:0<A&&(je+=Math.abs(A-le),le=A));0<pe.data.length&&(G/=pe.data.length-K),(ee===void 0||je<=ee)&&(Ee===void 0||Ee<G)&&1.99<G&&(ee=je,X=ve,Ee=G)}return{successful:!!(v.delimiter=X),bestDelimiter:X}})(P,v.newline,v.skipEmptyLines,v.comments,v.delimitersToGuess)).successful?v.delimiter=V.bestDelimiter:(E=!0,v.delimiter=u.DefaultDelimiter),$.meta.delimiter=v.delimiter),_(v));return v.preview&&v.header&&V.preview++,b=P,k=new g(V),$=k.parse(b,F,Y),B(),M?{meta:{paused:!0}}:$||{meta:{paused:!1}}},this.paused=function(){return M},this.pause=function(){M=!0,k.abort(),b=N(v.chunk)?"":b.substring(k.getCharIndex())},this.resume=function(){Q.streamer._halted?(M=!1,Q.streamer.parseChunk(b,!0)):setTimeout(Q.resume,3)},this.aborted=function(){return z},this.abort=function(){z=!0,k.abort(),$.meta.aborted=!0,N(v.complete)&&v.complete($),b=""},this.guessLineEndings=function(J,V){J=J.substring(0,1048576);var V=new RegExp(C(V)+"([^]*?)"+C(V),"gm"),Y=(J=J.replace(V,"")).split("\r"),V=J.split(`
`),J=1<V.length&&V[0].length<Y[0].length;if(Y.length===1||J)return`
`;for(var me=0,Z=0;Z<Y.length;Z++)Y[Z][0]===`
`&&me++;return me>=Y.length/2?`\r
`:"\r"}}function C(v){return v.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function g(v){var b=(v=v||{}).delimiter,k=v.newline,E=v.comments,I=v.step,H=v.preview,te=v.fastMode,D=null,q=!1,Q=v.quoteChar==null?'"':v.quoteChar,R=Q;if(v.escapeChar!==void 0&&(R=v.escapeChar),(typeof b!="string"||-1<u.BAD_DELIMITERS.indexOf(b))&&(b=","),E===b)throw new Error("Comment character same as delimiter");E===!0?E="#":(typeof E!="string"||-1<u.BAD_DELIMITERS.indexOf(E))&&(E=!1),k!==`
`&&k!=="\r"&&k!==`\r
`&&(k=`
`);var T=0,M=!1;this.parse=function(z,O,$){if(typeof z!="string")throw new Error("Input must be a string");var re=z.length,B=b.length,ne=k.length,fe=E.length,P=N(I),F=[],Y=[],V=[],J=T=0;if(!z)return je();if(te||te!==!1&&z.indexOf(Q)===-1){for(var me=z.split(k),Z=0;Z<me.length;Z++){if(V=me[Z],T+=V.length,Z!==me.length-1)T+=k.length;else if($)return je();if(!E||V.substring(0,fe)!==E){if(P){if(F=[],Ee(V.split(b)),G(),M)return je()}else Ee(V.split(b));if(H&&H<=Z)return F=F.slice(0,H),je(!0)}}return je()}for(var se=z.indexOf(b,T),U=z.indexOf(k,T),X=new RegExp(C(R)+C(Q),"g"),ee=z.indexOf(Q,T);;)if(z[T]===Q)for(ee=T,T++;;){if((ee=z.indexOf(Q,ee+1))===-1)return $||Y.push({type:"Quotes",code:"MissingQuotes",message:"Quoted field unterminated",row:F.length,index:T}),A();if(ee===re-1)return A(z.substring(T,ee).replace(X,Q));if(Q===R&&z[ee+1]===R)ee++;else if(Q===R||ee===0||z[ee-1]!==R){se!==-1&&se<ee+1&&(se=z.indexOf(b,ee+1));var le=Ce((U=U!==-1&&U<ee+1?z.indexOf(k,ee+1):U)===-1?se:Math.min(se,U));if(z.substr(ee+1+le,B)===b){V.push(z.substring(T,ee).replace(X,Q)),z[T=ee+1+le+B]!==Q&&(ee=z.indexOf(Q,T)),se=z.indexOf(b,T),U=z.indexOf(k,T);break}if(le=Ce(U),z.substring(ee+1+le,ee+1+le+ne)===k){if(V.push(z.substring(T,ee).replace(X,Q)),ve(ee+1+le+ne),se=z.indexOf(b,T),ee=z.indexOf(Q,T),P&&(G(),M))return je();if(H&&F.length>=H)return je(!0);break}Y.push({type:"Quotes",code:"InvalidQuotes",message:"Trailing quote on quoted field is malformed",row:F.length,index:T}),ee++}}else if(E&&V.length===0&&z.substring(T,T+fe)===E){if(U===-1)return je();T=U+ne,U=z.indexOf(k,T),se=z.indexOf(b,T)}else if(se!==-1&&(se<U||U===-1))V.push(z.substring(T,se)),T=se+B,se=z.indexOf(b,T);else{if(U===-1)break;if(V.push(z.substring(T,U)),ve(U+ne),P&&(G(),M))return je();if(H&&F.length>=H)return je(!0)}return A();function Ee(K){F.push(K),J=T}function Ce(K){var pe=0;return pe=K!==-1&&(K=z.substring(ee+1,K))&&K.trim()===""?K.length:pe}function A(K){return $||(K===void 0&&(K=z.substring(T)),V.push(K),T=re,Ee(V),P&&G()),je()}function ve(K){T=K,Ee(V),V=[],U=z.indexOf(k,T)}function je(K){if(v.header&&!O&&F.length&&!q){var pe=F[0],he=Object.create(null),xe=new Set(pe);let ce=!1;for(let Te=0;Te<pe.length;Te++){let be=pe[Te];if(he[be=N(v.transformHeader)?v.transformHeader(be,Te):be]){let ke,Re=he[be];for(;ke=be+"_"+Re,Re++,xe.has(ke););xe.add(ke),pe[Te]=ke,he[be]++,ce=!0,(D=D===null?{}:D)[ke]=be}else he[be]=1,pe[Te]=be;xe.add(be)}ce&&console.warn("Duplicate headers found and renamed."),q=!0}return{data:F,errors:Y,meta:{delimiter:b,linebreak:k,aborted:M,truncated:!!K,cursor:J+(O||0),renamedHeaders:D}}}function G(){I(je()),F=[],Y=[]}},this.abort=function(){M=!0},this.getCharIndex=function(){return T}}function f(v){var b=v.data,k=l[b.workerId],E=!1;if(b.error)k.userError(b.error,b.file);else if(b.results&&b.results.data){var I={abort:function(){E=!0,h(b.workerId,{data:[],errors:[],meta:{aborted:!0}})},pause:S,resume:S};if(N(k.userStep)){for(var H=0;H<b.results.data.length&&(k.userStep({data:b.results.data[H],errors:b.results.errors,meta:b.results.meta},I),!E);H++);delete b.results}else N(k.userChunk)&&(k.userChunk(b.results,I,b.file),delete b.results)}b.finished&&!E&&h(b.workerId,b.results)}function h(v,b){var k=l[v];N(k.userComplete)&&k.userComplete(b),k.terminate(),delete l[v]}function S(){throw new Error("Not implemented.")}function _(v){if(typeof v!="object"||v===null)return v;var b,k=Array.isArray(v)?[]:{};for(b in v)k[b]=_(v[b]);return k}function L(v,b){return function(){v.apply(b,arguments)}}function N(v){return typeof v=="function"}return u.parse=function(v,b){var k=(b=b||{}).dynamicTyping||!1;if(N(k)&&(b.dynamicTypingFunction=k,k={}),b.dynamicTyping=k,b.transform=!!N(b.transform)&&b.transform,!b.worker||!u.WORKERS_SUPPORTED)return k=null,u.NODE_STREAM_INPUT,typeof v=="string"?(v=(E=>E.charCodeAt(0)!==65279?E:E.slice(1))(v),k=new(b.download?x:w)(b)):v.readable===!0&&N(v.read)&&N(v.on)?k=new y(b):(r.File&&v instanceof File||v instanceof Object)&&(k=new p(b)),k.stream(v);(k=(()=>{var E;return!!u.WORKERS_SUPPORTED&&(E=(()=>{var I=r.URL||r.webkitURL||null,H=n.toString();return u.BLOB_URL||(u.BLOB_URL=I.createObjectURL(new Blob(["var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; ","(",H,")();"],{type:"text/javascript"})))})(),(E=new r.Worker(E)).onmessage=f,E.id=c++,l[E.id]=E)})()).userStep=b.step,k.userChunk=b.chunk,k.userComplete=b.complete,k.userError=b.error,b.step=N(b.step),b.chunk=N(b.chunk),b.complete=N(b.complete),b.error=N(b.error),delete b.worker,k.postMessage({input:v,config:b,workerId:k.id})},u.unparse=function(v,b){var k=!1,E=!0,I=",",H=`\r
`,te='"',D=te+te,q=!1,Q=null,R=!1,T=((()=>{if(typeof b=="object"){if(typeof b.delimiter!="string"||u.BAD_DELIMITERS.filter(function(O){return b.delimiter.indexOf(O)!==-1}).length||(I=b.delimiter),typeof b.quotes!="boolean"&&typeof b.quotes!="function"&&!Array.isArray(b.quotes)||(k=b.quotes),typeof b.skipEmptyLines!="boolean"&&typeof b.skipEmptyLines!="string"||(q=b.skipEmptyLines),typeof b.newline=="string"&&(H=b.newline),typeof b.quoteChar=="string"&&(te=b.quoteChar),typeof b.header=="boolean"&&(E=b.header),Array.isArray(b.columns)){if(b.columns.length===0)throw new Error("Option columns is empty");Q=b.columns}b.escapeChar!==void 0&&(D=b.escapeChar+te),b.escapeFormulae instanceof RegExp?R=b.escapeFormulae:typeof b.escapeFormulae=="boolean"&&b.escapeFormulae&&(R=/^[=+\-@\t\r].*$/)}})(),new RegExp(C(te),"g"));if(typeof v=="string"&&(v=JSON.parse(v)),Array.isArray(v)){if(!v.length||Array.isArray(v[0]))return M(null,v,q);if(typeof v[0]=="object")return M(Q||Object.keys(v[0]),v,q)}else if(typeof v=="object")return typeof v.data=="string"&&(v.data=JSON.parse(v.data)),Array.isArray(v.data)&&(v.fields||(v.fields=v.meta&&v.meta.fields||Q),v.fields||(v.fields=Array.isArray(v.data[0])?v.fields:typeof v.data[0]=="object"?Object.keys(v.data[0]):[]),Array.isArray(v.data[0])||typeof v.data[0]=="object"||(v.data=[v.data])),M(v.fields||[],v.data||[],q);throw new Error("Unable to serialize unrecognized input");function M(O,$,re){var B="",ne=(typeof O=="string"&&(O=JSON.parse(O)),typeof $=="string"&&($=JSON.parse($)),Array.isArray(O)&&0<O.length),fe=!Array.isArray($[0]);if(ne&&E){for(var P=0;P<O.length;P++)0<P&&(B+=I),B+=z(O[P],P);0<$.length&&(B+=H)}for(var F=0;F<$.length;F++){var Y=(ne?O:$[F]).length,V=!1,J=ne?Object.keys($[F]).length===0:$[F].length===0;if(re&&!ne&&(V=re==="greedy"?$[F].join("").trim()==="":$[F].length===1&&$[F][0].length===0),re==="greedy"&&ne){for(var me=[],Z=0;Z<Y;Z++){var se=fe?O[Z]:Z;me.push($[F][se])}V=me.join("").trim()===""}if(!V){for(var U=0;U<Y;U++){0<U&&!J&&(B+=I);var X=ne&&fe?O[U]:U;B+=z($[F][X],U)}F<$.length-1&&(!re||0<Y&&!J)&&(B+=H)}}return B}function z(O,$){var re,B;return O==null?"":O.constructor===Date?JSON.stringify(O).slice(1,25):(B=!1,R&&typeof O=="string"&&R.test(O)&&(O="'"+O,B=!0),re=O.toString().replace(T,D),(B=B||k===!0||typeof k=="function"&&k(O,$)||Array.isArray(k)&&k[$]||((ne,fe)=>{for(var P=0;P<fe.length;P++)if(-1<ne.indexOf(fe[P]))return!0;return!1})(re,u.BAD_DELIMITERS)||-1<re.indexOf(I)||re.charAt(0)===" "||re.charAt(re.length-1)===" ")?te+re+te:re)}},u.RECORD_SEP=String.fromCharCode(30),u.UNIT_SEP=String.fromCharCode(31),u.BYTE_ORDER_MARK="\uFEFF",u.BAD_DELIMITERS=["\r",`
`,'"',u.BYTE_ORDER_MARK],u.WORKERS_SUPPORTED=!o&&!!r.Worker,u.NODE_STREAM_INPUT=1,u.LocalChunkSize=10485760,u.RemoteChunkSize=5242880,u.DefaultDelimiter=",",u.Parser=g,u.ParserHandle=j,u.NetworkStreamer=x,u.FileStreamer=p,u.StringStreamer=w,u.ReadableStreamStreamer=y,r.jQuery&&((i=r.jQuery).fn.parse=function(v){var b=v.config||{},k=[];return this.each(function(H){if(!(i(this).prop("tagName").toUpperCase()==="INPUT"&&i(this).attr("type").toLowerCase()==="file"&&r.FileReader)||!this.files||this.files.length===0)return!0;for(var te=0;te<this.files.length;te++)k.push({file:this.files[te],inputElem:this,instanceConfig:i.extend({},b)})}),E(),this;function E(){if(k.length===0)N(v.complete)&&v.complete();else{var H,te,D,q,Q=k[0];if(N(v.before)){var R=v.before(Q.file,Q.inputElem);if(typeof R=="object"){if(R.action==="abort")return H="AbortError",te=Q.file,D=Q.inputElem,q=R.reason,void(N(v.error)&&v.error({name:H},te,D,q));if(R.action==="skip")return void I();typeof R.config=="object"&&(Q.instanceConfig=i.extend(Q.instanceConfig,R.config))}else if(R==="skip")return void I()}var T=Q.instanceConfig.complete;Q.instanceConfig.complete=function(M){N(T)&&T(M,Q.file,Q.inputElem),I()},u.parse(Q.file,Q.instanceConfig)}}function I(){k.splice(0,1),E()}}),a&&(r.onmessage=function(v){v=v.data,u.WORKER_ID===void 0&&v&&(u.WORKER_ID=v.workerId),typeof v.input=="string"?r.postMessage({workerId:u.WORKER_ID,results:u.parse(v.input,v.config),finished:!0}):(r.File&&v.input instanceof File||v.input instanceof Object)&&(v=u.parse(v.input,v.config))&&r.postMessage({workerId:u.WORKER_ID,results:v,finished:!0})}),(x.prototype=Object.create(m.prototype)).constructor=x,(p.prototype=Object.create(m.prototype)).constructor=p,(w.prototype=Object.create(w.prototype)).constructor=w,(y.prototype=Object.create(m.prototype)).constructor=y,u})})(o0);var Nx=o0.exports;const Ls=Pu(Nx);function Vl({startRect:e,targetRef:t,count:n=12,onDone:r}){return d.useEffect(()=>{const i=t==null?void 0:t.current;if(!e||!i){r==null||r();return}const o=i.getBoundingClientRect(),a=document.createElement("div");a.style.position="fixed",a.style.inset="0",a.style.pointerEvents="none",a.style.zIndex="9999",document.body.appendChild(a);const l=o.left+o.width/2,c=o.top+o.height/2,u=e.left+e.width/2,m=e.top+e.height/2,x=200;let p=0;function w(y){const j=document.createElement("div");j.textContent="🪙",Object.assign(j.style,{position:"fixed",left:"0px",top:"0px",zIndex:"10000",pointerEvents:"none",fontSize:"22px",opacity:"1",willChange:"transform, opacity",transform:"translate(0px, 0px)"});const C=u,g=m,f=l,h=c;j.style.transform=`translate(${C}px, ${g}px) scale(1)`,a.appendChild(j),j.getBoundingClientRect(),j.style.transition=`transform ${x}ms cubic-bezier(.2,.8,.2,1), opacity ${x}ms linear`,requestAnimationFrame(()=>{j.style.transform=`translate(${f}px, ${h}px) scale(.6)`,j.style.opacity="0.1"}),setTimeout(()=>{j.remove(),p+=1,p===n&&(a.remove(),r==null||r())},x+50)}for(let y=0;y<n;y++)setTimeout(()=>w(),y*60);return()=>{try{a.remove()}catch{}}},[e,t,n,r]),null}const Xe={XP_PER_CORRECT:10,XP_PER_LEVEL:100,MAX_LEVEL:100,COINS_PER_CORRECT:5,MAX_ENERGY:5,ENERGY_REGEN_TIME:36e5,ENERGY_COST:{quiz:1,practice:0,daily:0},COMBO_MULTIPLIERS:{2:{multiplier:1.2,text:"Nice!"},3:{multiplier:1.5,text:"Great!"},5:{multiplier:2,text:"On Fire!"},10:{multiplier:3,text:"Legendary!"}},AVATARS:[{id:"wizard",emoji:"🧙",name:"Knowledge Wizard",unlocked:!0,bgColor:"from-purple-500 to-indigo-500"},{id:"knight",emoji:"⚔️",name:"Quiz Knight",unlocked:!0,bgColor:"from-blue-500 to-cyan-500"},{id:"explorer",emoji:"🗺️",name:"Fact Explorer",unlockLevel:5,unlocked:!1,bgColor:"from-green-500 to-emerald-500"},{id:"scientist",emoji:"🔬",name:"Science Master",unlockLevel:10,unlocked:!1,bgColor:"from-orange-500 to-red-500"},{id:"artist",emoji:"🎨",name:"Creative Mind",unlockLevel:15,unlocked:!1,bgColor:"from-pink-500 to-rose-500"}],STORAGE_KEYS:{PLAYER:"qp_player",GAME_STATE:"qp_game_state",ENERGY:"qp_energy",CURRENT_COMBO:"qp_combo"}},mu=e=>Math.floor(e/Xe.XP_PER_LEVEL)+1,Sx=e=>{const t=e%Xe.XP_PER_LEVEL;return{current:t,required:Xe.XP_PER_LEVEL,percentage:t/Xe.XP_PER_LEVEL*100}};function Cx({player:e,size:t="normal",showLevel:n=!0,showName:r=!0}){const i=Xe.AVATARS.find(a=>a.id===e.avatar)||Xe.AVATARS[0],o={small:"w-10 h-10 text-xl",normal:"w-14 h-14 text-2xl",large:"w-20 h-20 text-4xl"};return s.jsxs("div",{className:"flex items-center gap-3",children:[s.jsxs("div",{className:"relative",children:[s.jsx("div",{className:`${o[t]} rounded-full bg-gradient-to-br ${i.bgColor} flex items-center justify-center shadow-lg`,children:s.jsx("span",{children:i.emoji})}),n&&s.jsx("div",{className:"absolute -bottom-1 -right-1 bg-yellow-500 text-black text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center border-2 border-base-bg",children:e.level})]}),r&&s.jsxs("div",{children:[s.jsx("div",{className:"font-bold text-sm",children:e.name}),s.jsx("div",{className:"text-xs text-base-muted",children:i.name})]})]})}function Ex({current:e,required:t,level:n,animate:r=!0}){const[i,o]=d.useState(0),a=e/t*100;return d.useEffect(()=>{if(r){const l=setTimeout(()=>{o(a)},100);return()=>clearTimeout(l)}else o(a)},[a,r]),s.jsxs("div",{className:"w-full",children:[s.jsxs("div",{className:"flex justify-between items-center mb-1",children:[s.jsxs("span",{className:"text-xs font-medium",children:["Level ",n]}),s.jsxs("span",{className:"text-xs text-base-muted",children:[e,"/",t," XP"]})]}),s.jsx("div",{className:"h-2 bg-black/20 rounded-full overflow-hidden",children:s.jsx("div",{className:"h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-700 ease-out relative",style:{width:`${i}%`},children:s.jsx("div",{className:"absolute inset-0 bg-white/20 animate-pulse"})})})]})}function _x({current:e,max:t=Xe.MAX_ENERGY,regenAt:n}){const[r,i]=d.useState("");d.useEffect(()=>{if(n&&e<t){const a=()=>{const c=Date.now(),u=Math.max(0,n-c),m=Math.floor(u/6e4),x=Math.floor(u%6e4/1e3);i(`${m}:${x.toString().padStart(2,"0")}`)};a();const l=setInterval(a,1e3);return()=>clearInterval(l)}},[n,e,t]);const o=Array.from({length:t},(a,l)=>l<e);return s.jsxs("div",{className:"flex items-center gap-1",children:[s.jsx("div",{className:"flex gap-0.5",children:o.map((a,l)=>s.jsx("span",{className:`text-lg transition-all duration-300 ${a?"text-red-500 scale-110":"text-gray-600 scale-90"}`,children:a?"❤️":"🖤"},l))}),e<t&&r&&s.jsxs("span",{className:"text-xs text-base-muted ml-2",children:["+1 in ",r]})]})}const a0=[{name:"GK",slug:"general-knowledge",questions:50,icon:"🧠",color:"#FF6B6B",gradient:"from-red-500 to-pink-500"},{name:"Science",slug:"science",questions:45,icon:"🧪",color:"#4ECDC4",gradient:"from-cyan-500 to-teal-500"},{name:"Fun Facts",slug:"fun-facts",questions:30,icon:"🎉",color:"#FFD93D",gradient:"from-yellow-400 to-orange-500"},{name:"History",slug:"history",questions:42,icon:"🏺",color:"#A8E6CF",gradient:"from-green-400 to-emerald-500"},{name:"AI & Tech",slug:"artificial-intelligence",questions:28,icon:"🤖",color:"#C7B8FF",gradient:"from-purple-400 to-indigo-500"},{name:"More",slug:"more",questions:0,icon:"✨",color:"#FF8CC3",gradient:"from-pink-400 to-rose-500"}],l0=[{name:"Geography",slug:"geography",questions:38,icon:"🗺️",color:"#FACC15",gradient:"from-yellow-400 to-amber-500"},{name:"Computer",slug:"computer",questions:34,icon:"💻",color:"#3B82F6",gradient:"from-blue-400 to-blue-600"},{name:"Aptitude",slug:"aptitude",questions:36,icon:"📐",color:"#EC4899",gradient:"from-pink-500 to-rose-500"},{name:"Iconic Figures",slug:"iconic-figures",questions:26,icon:"🌟",color:"#8B5CF6",gradient:"from-purple-500 to-violet-600"}],c0=[...a0.filter(e=>e.slug!=="more"),...l0],pu=(e=new Date)=>e.toLocaleDateString("en-CA"),hu=(e,t=null)=>{try{const n=localStorage.getItem(e);return n?JSON.parse(n):t}catch{return t}},Rx=(e,t)=>localStorage.setItem(e,JSON.stringify(t));function xu(){const e=ut(),{player:t,addXP:n,addCoins:r,levelProgress:i,useEnergy:o,changeAvatar:a}=un(),[l]=It("/sounds/correct.mp3",{volume:.6}),[c]=It("/sounds/wrong.mp3",{volume:.6}),[u]=It("/sounds/coin.mp3",{volume:.75}),[m]=It("/sounds/levelup.mp3",{volume:.8}),x=d.useRef(t.level),p=d.useRef(null);d.useEffect(()=>{const A=()=>{};return window.addEventListener("focus",A),()=>window.removeEventListener("focus",A)},[]),d.useEffect(()=>{t.level>x.current&&(m==null||m(),x.current=t.level)},[t.level,m]);const[w,y]=d.useState(!1),[j,C]=d.useState(null),[g,f]=d.useState(!1),[h,S]=d.useState("medium"),[_,L]=d.useState(10),[N,v]=d.useState(45),[b,k]=d.useState(!1),[E,I]=d.useState(!1),[H,te]=d.useState(null),[D,q]=d.useState(null),[Q,R]=d.useState(!1),[T,M]=d.useState(!1),[z,O]=d.useState(null),$=10,re=5,[B,ne]=d.useState(!1),[fe,P]=d.useState(!1),[F,Y]=d.useState("general-knowledge"),[V,J]=d.useState("medium"),[me,Z]=d.useState(10),[se,U]=d.useState(()=>hu("dq_daily_log",{})[pu()]===!0);d.useEffect(()=>{const A=sessionStorage.getItem("homeScrollPosition");A&&window.scrollTo(0,parseInt(A));const ve=()=>{sessionStorage.setItem("homeScrollPosition",window.scrollY.toString())};return window.addEventListener("scroll",ve),()=>window.removeEventListener("scroll",ve)},[]),d.useEffect(()=>{if(se)return;(async()=>{var ve;try{const je=await fetch("/data/quiz_questions_bank.csv").then(he=>he.text()),{data:G}=Ls.parse(je,{header:!0,skipEmptyLines:!0});if(!G.length)throw new Error("empty");const K=G[Math.floor(Math.random()*G.length)],pe=[K.option1,K.option2,K.option3,K.option4].filter(Boolean);te({category:K.category||"General",prompt:K.question,options:pe,answerIndex:["A","B","C","D"].indexOf((ve=K.answer)==null?void 0:ve.toUpperCase())||0})}catch{te({category:"Science",prompt:"Which planet is known as the Red Planet?",options:["Earth","Mars","Jupiter","Venus"],answerIndex:1})}})()},[se]);const X=(A,ve)=>{if(D!==null)return;q(A);const je=A===H.answerIndex;if(je){if(l(),ve!=null&&ve.currentTarget&&p.current){const G=ve.currentTarget.getBoundingClientRect();u(),O({startRect:G,count:10,amount:re})}}else c();setTimeout(()=>{if(M(!0),R(!0),je){const G=pu();Rx("dq_daily_log",{...hu("dq_daily_log",{}),[G]:!0}),U(!0);const K=Number(localStorage.getItem("dq_streak")||0);localStorage.setItem("dq_streak",String(K+1))}},600)},ee=A=>{if(A.slug==="more"){y(!0);return}C(A),f(!0)},le=()=>{console.log("Starting quiz with energy:",t.energy),console.log("Category:",j.slug),e(`/quiz/${j.slug}`,{state:{mode:"quiz",difficulty:h,count:_,timer:{type:"per_q",seconds:N},source:"adventure"}}),f(!1)},Ee=()=>{console.log("Starting practice, category:",F),e(`/quiz/${F}`,{state:{mode:"practice",difficulty:V,count:me,timer:{type:"off",seconds:0}}}),P(!1)},Ce=[{icon:"🎯",label:"Quests",color:"bg-gradient-to-br from-orange-500 to-pink-500",action:()=>e("/profile/quests")},{icon:"🔥",label:`${t.bestCombo} Best`,color:"bg-gradient-to-br from-red-500 to-orange-500",action:()=>e("/profile/streaks")},{icon:"🏆",label:"Achieve",color:"bg-gradient-to-br from-blue-500 to-purple-500",action:()=>e("/profile/achievements")},{icon:"🎁",label:"Rewards",color:"bg-gradient-to-br from-green-500 to-teal-500",action:()=>e("/profile/rewards")}];return s.jsxs("div",{className:"min-h-screen bg-base-bg text-base-text",children:[s.jsx("div",{className:"fixed inset-0 -z-10 pointer-events-none",style:{background:"linear-gradient(to bottom, #0B0F1A, #111827)"}}),s.jsxs("div",{className:"relative z-10 px-4 pt-10 pb-24",children:[s.jsx("style",{jsx:!0,children:`
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
        `}),z&&s.jsx(Vl,{startRect:z.startRect,targetRef:p,count:z.count,onDone:()=>{B||(n($),r(z.amount),ne(!0)),O(null)}}),s.jsxs("div",{className:"mb-8",children:[s.jsxs("div",{className:"flex justify-between items-start mb-4",children:[s.jsx("div",{className:"cursor-pointer hover:scale-105 transition-transform",onClick:()=>I(!0),children:s.jsx(Cx,{player:t,size:"normal",showLevel:!0,showName:!0})}),s.jsxs("div",{className:"flex flex-col gap-2",children:[s.jsxs("div",{className:"flex gap-2",children:[s.jsxs("button",{ref:p,onClick:()=>k(!0),className:"px-3 py-1.5 rounded-xl bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/30 flex items-center gap-2 hover:from-yellow-500/20 hover:to-orange-500/20 transition",children:[s.jsx("span",{className:"text-lg",children:"🪙"}),s.jsx("span",{className:"font-bold",children:t.coins})]}),s.jsx("button",{onClick:()=>e("/profile"),className:"w-10 h-10 rounded-full bg-white/5 border border-base-border grid place-items-center hover:bg-white/10 transition",children:"⚙️"})]}),s.jsx(_x,{current:t.energy,regenAt:t.energyRegenAt})]})]}),s.jsx(Ex,{current:i.current,required:i.required,level:t.level,animate:!0})]}),s.jsxs("div",{className:"relative overflow-hidden rounded-3xl p-8 mb-6 cursor-pointer transform transition-all hover:scale-[1.02]",style:{background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",boxShadow:"0 10px 40px rgba(102, 126, 234, 0.3)",animation:"pulse 3s infinite"},onClick:()=>e("/play"),children:[s.jsx("div",{className:"absolute top-[-50px] right-[-50px] w-[200px] h-[200px] rounded-full bg-white/10",style:{animation:"float 4s ease-in-out infinite"}}),s.jsx("div",{className:"absolute bottom-[-30px] left-[-30px] w-[150px] h-[150px] rounded-full bg-white/10",style:{animation:"float 4s ease-in-out infinite reverse"}}),s.jsx("h2",{className:"text-3xl font-bold mb-2",children:"🎰 Spin & Win"}),s.jsx("p",{className:"text-base opacity-90 mb-4",children:"Test your luck, win amazing prizes!"}),s.jsx("div",{className:"inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium",style:{background:"linear-gradient(90deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0.3) 100%)",backgroundSize:"200% auto",animation:"shimmer 2s linear infinite"},children:"Play Now →"})]}),s.jsx("div",{className:"grid grid-cols-4 gap-3 mb-8",children:Ce.map((A,ve)=>s.jsxs("button",{onClick:A.action,className:`${A.color} aspect-square rounded-2xl flex flex-col items-center justify-center gap-1 transform transition-all hover:scale-105`,children:[s.jsx("div",{className:"text-2xl",children:A.icon}),s.jsx("div",{className:"text-[10px] font-medium text-white",children:A.label})]},ve))}),!se&&H&&s.jsx("div",{className:"flip-card mb-6",children:s.jsxs("div",{className:`flip-card-inner ${T?"flipped":""}`,children:[s.jsx("div",{className:"flip-card-front",children:s.jsxs("div",{className:"rounded-3xl bg-white/5 border border-base-border p-6",children:[s.jsxs("div",{className:"flex justify-between items-center mb-4",children:[s.jsx("h3",{className:"text-lg font-bold",children:"🎯 Daily Challenge"}),s.jsxs("span",{className:"px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-xs font-medium",children:["+",re," coins +",$," XP"]})]}),s.jsx("p",{className:"text-sm mb-4 text-base-muted",children:H.prompt}),s.jsx("div",{className:"grid grid-cols-2 gap-3",children:H.options.map((A,ve)=>{const je=ve===H.answerIndex,G=D===ve,K=D!==null;return s.jsx("button",{onClick:pe=>X(ve,pe),disabled:D!==null,className:`p-3 rounded-xl border-2 text-sm font-medium transition-all ${K?je?"border-green-500 bg-green-500/20":G?"border-red-500 bg-red-500/20":"border-base-border bg-white/5":"border-base-border bg-white/5 hover:bg-white/10"} ${D!==null?"cursor-not-allowed":"cursor-pointer"}`,children:A},ve)})})]})}),s.jsx("div",{className:"flip-card-back absolute inset-0",children:s.jsxs("div",{className:"rounded-3xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/30 p-6 h-full flex flex-col items-center justify-center",children:[s.jsx("div",{className:"text-6xl mb-4",style:{animation:"float 2s ease-in-out infinite"},children:"🎉"}),s.jsx("h3",{className:"text-2xl font-bold text-green-400 mb-2",children:"Awesome!"}),s.jsxs("p",{className:"text-sm text-base-muted text-center",children:["You've earned ",re," coins & ",$," XP!"]}),s.jsx("p",{className:"text-xs text-base-muted/70 mt-2",children:"Come back tomorrow for more"})]})})]})}),se&&s.jsx("div",{className:"rounded-3xl bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/30 p-6 mb-6",children:s.jsxs("div",{className:"flex items-center gap-3",children:[s.jsx("span",{className:"text-3xl",children:"✅"}),s.jsxs("div",{children:[s.jsx("h3",{className:"font-bold",children:"Daily Challenge Complete!"}),s.jsx("p",{className:"text-sm text-base-muted",children:"Come back tomorrow for a new challenge"})]})]})}),s.jsxs("div",{className:"mb-6",children:[s.jsx("h3",{className:"text-lg font-bold mb-4",children:"Choose Your Adventure"}),s.jsx("div",{className:"grid grid-cols-3 gap-3",children:a0.map(A=>s.jsxs("button",{onClick:()=>ee(A),className:`bg-gradient-to-br ${A.gradient} aspect-square rounded-2xl p-4 flex flex-col items-center justify-center gap-2 transform transition-all hover:scale-105 hover:shadow-lg relative`,children:[s.jsx("div",{className:"text-3xl",children:A.icon}),s.jsx("div",{className:"text-xs font-bold text-white text-center",children:A.name}),A.questions>0&&s.jsxs("div",{className:"text-[10px] bg-white/20 px-2 py-0.5 rounded-full",children:[A.questions," Qs"]})]},A.name))})]}),s.jsxs("button",{onClick:()=>P(!0),className:`w-full rounded-2xl p-5 flex justify-between items-center transition-all ${t.energy<10?"bg-green-500/20 border-2 border-green-500 animate-pulse":"bg-white/5 border border-base-border hover:bg-white/10"}`,children:[s.jsxs("div",{className:"flex items-center gap-4",children:[s.jsx("div",{className:"w-12 h-12 bg-gradient-to-br from-green-400 to-teal-500 rounded-xl grid place-items-center text-2xl",children:"📚"}),s.jsxs("div",{className:"text-left",children:[s.jsx("div",{className:"font-medium",children:"Practice Mode"}),s.jsx("div",{className:"text-xs text-base-muted",children:"No timer • No energy cost • Learn at your pace"})]})]}),s.jsx("div",{className:"text-xl",children:"→"})]}),E&&s.jsx("div",{className:"fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4",onClick:A=>{A.target===A.currentTarget&&I(!1)},children:s.jsxs("div",{className:"bg-base-card rounded-3xl p-6 w-full max-w-md border border-base-border max-h-[80vh] overflow-y-auto",onClick:A=>A.stopPropagation(),children:[s.jsxs("div",{className:"flex justify-between items-center mb-4",children:[s.jsx("h3",{className:"text-xl font-bold",children:"Choose Your Avatar"}),s.jsx("button",{onClick:()=>I(!1),className:"w-8 h-8 rounded-lg bg-white/5 border border-base-border grid place-items-center hover:bg-white/10 transition",children:"✕"})]}),s.jsx("div",{className:"grid grid-cols-2 gap-4",children:Xe.AVATARS.map(A=>{const ve=!t.unlockedAvatars.includes(A.id),je=t.avatar===A.id;return s.jsxs("button",{onClick:()=>{ve||(a(A.id),I(!1))},className:`p-4 rounded-2xl border-2 transition-all ${je?"border-brand-blue bg-brand-blue/20":ve?"border-gray-600 bg-gray-800/50 opacity-50":"border-base-border bg-white/5 hover:bg-white/10"}`,disabled:ve,children:[s.jsx("div",{className:`text-4xl mb-2 ${ve?"grayscale":""}`,children:A.emoji}),s.jsx("div",{className:"text-sm font-medium",children:A.name}),ve&&s.jsxs("div",{className:"text-xs text-gray-400 mt-1",children:["Unlock at Level ",A.unlockLevel]}),je&&s.jsx("div",{className:"text-xs text-brand-blue mt-1",children:"Current"})]},A.id)})})]})}),g&&j&&s.jsx("div",{className:"fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4",onClick:A=>{A.target===A.currentTarget&&f(!1)},children:s.jsxs("div",{className:"bg-base-card rounded-3xl p-6 w-full max-w-md border border-base-border",onClick:A=>A.stopPropagation(),children:[s.jsxs("div",{className:"flex justify-between items-center mb-4",children:[s.jsx("h3",{className:"text-xl font-bold",children:"Quiz Mode"}),s.jsx("button",{onClick:()=>f(!1),className:"w-8 h-8 rounded-lg bg-white/5 border border-base-border grid place-items-center hover:bg-white/10 transition",children:"✕"})]}),s.jsx("div",{className:"mb-4 p-3 rounded-xl bg-blue-500/10 border border-blue-500/30",children:s.jsxs("div",{className:"flex items-center gap-3",children:[s.jsx("div",{className:"text-2xl",children:j.icon}),s.jsxs("div",{children:[s.jsxs("div",{className:"font-medium",children:["Category: ",j.name]}),s.jsxs("div",{className:"text-xs text-base-muted",children:[j.questions," questions available"]})]})]})}),s.jsxs("div",{className:"mb-4",children:[s.jsx("label",{className:"text-sm text-base-muted mb-2 block",children:"Difficulty"}),s.jsx("div",{className:"grid grid-cols-3 gap-2",children:["easy","medium","hard"].map(A=>s.jsx("button",{onClick:()=>S(A),className:`py-2 rounded-xl border ${h===A?"bg-brand-blue/30 border-brand-blue":"bg-white/5 border-base-border"}`,children:A.charAt(0).toUpperCase()+A.slice(1)},A))})]}),s.jsxs("div",{className:"mb-4",children:[s.jsx("label",{className:"text-sm text-base-muted mb-2 block",children:"Questions"}),s.jsx("div",{className:"grid grid-cols-4 gap-2",children:[5,10,20,30].map(A=>s.jsx("button",{onClick:()=>L(A),className:`py-2 rounded-xl border ${_===A?"bg-brand-blue/30 border-brand-blue":"bg-white/5 border-base-border"}`,children:A},A))})]}),s.jsxs("div",{className:"mb-6",children:[s.jsx("label",{className:"text-sm text-base-muted mb-2 block",children:"Timer (seconds per question)"}),s.jsx("input",{type:"number",value:N,onChange:A=>v(Number(A.target.value)||45),min:10,max:120,className:"w-full px-4 py-2 rounded-xl bg-white/5 border border-base-border"})]}),s.jsxs("div",{className:"flex gap-3",children:[s.jsx("button",{onClick:()=>f(!1),className:"flex-1 py-3 rounded-xl border border-base-border bg-white/5",children:"Cancel"}),s.jsx("button",{onClick:le,className:"flex-1 py-3 rounded-xl bg-gradient-to-r from-brand-blue to-brand-purple text-white font-medium",children:"Start Quiz"})]})]})}),fe&&s.jsx("div",{className:"fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4",onClick:A=>{A.target===A.currentTarget&&P(!1)},children:s.jsxs("div",{className:"bg-base-card rounded-3xl p-6 w-full max-w-md border border-base-border max-h-[90vh] overflow-y-auto",onClick:A=>A.stopPropagation(),children:[s.jsxs("div",{className:"flex justify-between items-center mb-4",children:[s.jsx("h3",{className:"text-xl font-bold",children:"Practice Mode"}),s.jsx("button",{onClick:()=>P(!1),className:"w-8 h-8 rounded-lg bg-white/5 border border-base-border grid place-items-center hover:bg-white/10 transition",children:"✕"})]}),s.jsxs("div",{className:"mb-4",children:[s.jsx("label",{className:"text-sm text-base-muted mb-2 block",children:"Category"}),s.jsx("div",{className:"grid grid-cols-3 gap-2 max-h-[200px] overflow-y-auto",children:c0.map(A=>s.jsxs("button",{onClick:()=>Y(A.slug),className:`p-3 rounded-xl border flex flex-col items-center gap-1 ${F===A.slug?"bg-brand-blue/30 border-brand-blue":"bg-white/5 border-base-border"}`,children:[s.jsx("div",{className:"text-xl",children:A.icon}),s.jsx("div",{className:"text-[10px] text-center",children:A.name})]},A.slug))})]}),s.jsxs("div",{className:"mb-4",children:[s.jsx("label",{className:"text-sm text-base-muted mb-2 block",children:"Difficulty"}),s.jsx("div",{className:"grid grid-cols-3 gap-2",children:["easy","medium","hard"].map(A=>s.jsx("button",{onClick:()=>J(A),className:`py-2 rounded-xl border ${V===A?"bg-brand-blue/30 border-brand-blue":"bg-white/5 border-base-border"}`,children:A.charAt(0).toUpperCase()+A.slice(1)},A))})]}),s.jsxs("div",{className:"mb-6",children:[s.jsx("label",{className:"text-sm text-base-muted mb-2 block",children:"Questions"}),s.jsx("div",{className:"grid grid-cols-4 gap-2",children:[5,10,20,30].map(A=>s.jsx("button",{onClick:()=>Z(A),className:`py-2 rounded-xl border ${me===A?"bg-brand-blue/30 border-brand-blue":"bg-white/5 border-base-border"}`,children:A},A))})]}),s.jsxs("div",{className:"flex gap-3",children:[s.jsx("button",{onClick:()=>P(!1),className:"flex-1 py-3 rounded-xl border border-base-border bg-white/5",children:"Cancel"}),s.jsx("button",{onClick:Ee,className:"flex-1 py-3 rounded-xl bg-gradient-to-r from-brand-blue to-brand-purple text-white font-medium",children:"Start Practice"})]})]})}),w&&s.jsx("div",{className:"fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4",onClick:A=>{A.target===A.currentTarget&&y(!1)},children:s.jsxs("div",{className:"bg-base-card rounded-3xl p-6 w-full max-w-md border border-base-border",onClick:A=>A.stopPropagation(),children:[s.jsxs("div",{className:"flex justify-between items-center mb-4",children:[s.jsx("h3",{className:"text-xl font-bold",children:"More categories"}),s.jsx("button",{onClick:()=>y(!1),className:"w-8 h-8 rounded-lg bg-white/5 border border-base-border grid place-items-center hover:bg-white/10 transition",children:"✕"})]}),s.jsx("div",{className:"grid grid-cols-2 gap-3 mb-4",children:l0.map(A=>s.jsxs("button",{onClick:()=>{y(!1),ee(A)},className:`bg-gradient-to-br ${A.gradient} p-4 rounded-2xl flex flex-col items-center gap-2 hover:scale-105 transition-transform relative`,children:[s.jsx("div",{className:"text-3xl",children:A.icon}),s.jsx("div",{className:"text-sm font-bold text-white",children:A.name}),s.jsxs("div",{className:"text-xs text-white/80",children:[A.questions," questions"]})]},A.name))})]})}),b&&s.jsx("div",{className:"fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4",onClick:A=>{A.target===A.currentTarget&&k(!1)},children:s.jsxs("div",{className:"bg-base-card rounded-3xl p-6 w-full max-w-md border border-base-border relative overflow-hidden",onClick:A=>A.stopPropagation(),children:[s.jsx("div",{className:"absolute inset-0 opacity-10",children:s.jsx("div",{className:"magic-gradient h-full"})}),s.jsxs("div",{className:"relative",children:[s.jsxs("div",{className:"flex items-center justify-between mb-6",children:[s.jsxs("div",{className:"flex items-center gap-3",children:[s.jsx("div",{className:"coin-3d text-5xl",style:{animation:"coinRotate 2s linear infinite, glow 2s ease-in-out infinite"},children:"🪙"}),s.jsxs("div",{children:[s.jsx("h3",{className:"text-2xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent",children:"Your Treasure"}),s.jsxs("p",{className:"text-3xl font-bold text-white mt-1",children:[t.coins," Coins"]})]})]}),s.jsx("button",{onClick:()=>k(!1),className:"w-8 h-8 rounded-lg bg-white/5 border border-base-border grid place-items-center hover:bg-white/10 transition",children:"✕"})]}),s.jsxs("div",{className:"mb-6",children:[s.jsx("h4",{className:"text-sm font-medium text-base-muted mb-3",children:"Ways to Earn"}),s.jsxs("div",{className:"space-y-3",children:[s.jsx("div",{className:"p-4 rounded-xl bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 hover:scale-[1.02] transition-transform",children:s.jsxs("div",{className:"flex items-center justify-between",children:[s.jsxs("div",{children:[s.jsxs("div",{className:"font-medium flex items-center gap-2",children:[s.jsx("span",{className:"text-2xl",children:"✅"}),"Complete Quizzes"]}),s.jsx("div",{className:"text-xs text-base-muted mt-1",children:"+5 coins per correct answer"})]}),s.jsx("div",{className:"text-green-400 font-bold",children:"+5"})]})}),s.jsx("div",{className:"p-4 rounded-xl bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 hover:scale-[1.02] transition-transform",children:s.jsxs("div",{className:"flex items-center justify-between",children:[s.jsxs("div",{children:[s.jsxs("div",{className:"font-medium flex items-center gap-2",children:[s.jsx("span",{className:"text-2xl",children:"🎯"}),"Daily Challenge"]}),s.jsx("div",{className:"text-xs text-base-muted mt-1",children:"Complete daily for bonus"})]}),s.jsx("div",{className:"text-blue-400 font-bold",children:"+5"})]})}),s.jsx("div",{className:"p-4 rounded-xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 hover:scale-[1.02] transition-transform",children:s.jsxs("div",{className:"flex items-center justify-between",children:[s.jsxs("div",{children:[s.jsxs("div",{className:"font-medium flex items-center gap-2",children:[s.jsx("span",{className:"text-2xl",children:"🎰"}),"Spin & Play"]}),s.jsx("div",{className:"text-xs text-base-muted mt-1",children:"Test your luck!"})]}),s.jsx("div",{className:"text-purple-400 font-bold",children:"+50"})]})}),s.jsx("div",{className:"p-4 rounded-xl bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/20 hover:scale-[1.02] transition-transform",children:s.jsxs("div",{className:"flex items-center justify-between",children:[s.jsxs("div",{children:[s.jsxs("div",{className:"font-medium flex items-center gap-2",children:[s.jsx("span",{className:"text-2xl",children:"🏆"}),"Achievements"]}),s.jsx("div",{className:"text-xs text-base-muted mt-1",children:"Unlock special rewards"})]}),s.jsx("div",{className:"text-orange-400 font-bold",children:"+???"})]})})]})]}),s.jsxs("div",{className:"mb-6",children:[s.jsxs("div",{className:"flex justify-between text-xs text-base-muted mb-2",children:[s.jsx("span",{children:"Next reward"}),s.jsxs("span",{children:[100-t.coins%100," coins to go"]})]}),s.jsx("div",{className:"h-2 bg-white/10 rounded-full overflow-hidden",children:s.jsx("div",{className:"h-full bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full transition-all",style:{width:`${t.coins%100}%`}})})]}),s.jsx("button",{onClick:()=>{k(!1),e("/play")},className:"w-full py-3 rounded-xl bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-bold hover:scale-[1.02] transition-transform shadow-lg",style:{boxShadow:"0 10px 30px rgba(251, 191, 36, 0.3)"},children:"Start Earning Now! 🚀"})]})]})})]})]})}var wi={linear:function(e,t,n,r){var i=n-t;return i*e/r+t},easeInQuad:function(e,t,n,r){var i=n-t;return i*(e/=r)*e+t},easeOutQuad:function(e,t,n,r){var i=n-t;return-i*(e/=r)*(e-2)+t},easeInOutQuad:function(e,t,n,r){var i=n-t;return(e/=r/2)<1?i/2*e*e+t:-i/2*(--e*(e-2)-1)+t},easeInCubic:function(e,t,n,r){var i=n-t;return i*(e/=r)*e*e+t},easeOutCubic:function(e,t,n,r){var i=n-t;return i*((e=e/r-1)*e*e+1)+t},easeInOutCubic:function(e,t,n,r){var i=n-t;return(e/=r/2)<1?i/2*e*e*e+t:i/2*((e-=2)*e*e+2)+t},easeInQuart:function(e,t,n,r){var i=n-t;return i*(e/=r)*e*e*e+t},easeOutQuart:function(e,t,n,r){var i=n-t;return-i*((e=e/r-1)*e*e*e-1)+t},easeInOutQuart:function(e,t,n,r){var i=n-t;return(e/=r/2)<1?i/2*e*e*e*e+t:-i/2*((e-=2)*e*e*e-2)+t},easeInQuint:function(e,t,n,r){var i=n-t;return i*(e/=r)*e*e*e*e+t},easeOutQuint:function(e,t,n,r){var i=n-t;return i*((e=e/r-1)*e*e*e*e+1)+t},easeInOutQuint:function(e,t,n,r){var i=n-t;return(e/=r/2)<1?i/2*e*e*e*e*e+t:i/2*((e-=2)*e*e*e*e+2)+t},easeInSine:function(e,t,n,r){var i=n-t;return-i*Math.cos(e/r*(Math.PI/2))+i+t},easeOutSine:function(e,t,n,r){var i=n-t;return i*Math.sin(e/r*(Math.PI/2))+t},easeInOutSine:function(e,t,n,r){var i=n-t;return-i/2*(Math.cos(Math.PI*e/r)-1)+t},easeInExpo:function(e,t,n,r){var i=n-t;return e==0?t:i*Math.pow(2,10*(e/r-1))+t},easeOutExpo:function(e,t,n,r){var i=n-t;return e==r?t+i:i*(-Math.pow(2,-10*e/r)+1)+t},easeInOutExpo:function(e,t,n,r){var i=n-t;return e===0?t:e===r?t+i:(e/=r/2)<1?i/2*Math.pow(2,10*(e-1))+t:i/2*(-Math.pow(2,-10*--e)+2)+t},easeInCirc:function(e,t,n,r){var i=n-t;return-i*(Math.sqrt(1-(e/=r)*e)-1)+t},easeOutCirc:function(e,t,n,r){var i=n-t;return i*Math.sqrt(1-(e=e/r-1)*e)+t},easeInOutCirc:function(e,t,n,r){var i=n-t;return(e/=r/2)<1?-i/2*(Math.sqrt(1-e*e)-1)+t:i/2*(Math.sqrt(1-(e-=2)*e)+1)+t},easeInElastic:function(e,t,n,r){var i=n-t,o,a,l;return l=1.70158,a=0,o=i,e===0?t:(e/=r)===1?t+i:(a||(a=r*.3),o<Math.abs(i)?(o=i,l=a/4):l=a/(2*Math.PI)*Math.asin(i/o),-(o*Math.pow(2,10*(e-=1))*Math.sin((e*r-l)*(2*Math.PI)/a))+t)},easeOutElastic:function(e,t,n,r){var i=n-t,o,a,l;return l=1.70158,a=0,o=i,e===0?t:(e/=r)===1?t+i:(a||(a=r*.3),o<Math.abs(i)?(o=i,l=a/4):l=a/(2*Math.PI)*Math.asin(i/o),o*Math.pow(2,-10*e)*Math.sin((e*r-l)*(2*Math.PI)/a)+i+t)},easeInOutElastic:function(e,t,n,r){var i=n-t,o,a,l;return l=1.70158,a=0,o=i,e===0?t:(e/=r/2)===2?t+i:(a||(a=r*(.3*1.5)),o<Math.abs(i)?(o=i,l=a/4):l=a/(2*Math.PI)*Math.asin(i/o),e<1?-.5*(o*Math.pow(2,10*(e-=1))*Math.sin((e*r-l)*(2*Math.PI)/a))+t:o*Math.pow(2,-10*(e-=1))*Math.sin((e*r-l)*(2*Math.PI)/a)*.5+i+t)},easeInBack:function(e,t,n,r,i){var o=n-t;return i===void 0&&(i=1.70158),o*(e/=r)*e*((i+1)*e-i)+t},easeOutBack:function(e,t,n,r,i){var o=n-t;return i===void 0&&(i=1.70158),o*((e=e/r-1)*e*((i+1)*e+i)+1)+t},easeInOutBack:function(e,t,n,r,i){var o=n-t;return i===void 0&&(i=1.70158),(e/=r/2)<1?o/2*(e*e*(((i*=1.525)+1)*e-i))+t:o/2*((e-=2)*e*(((i*=1.525)+1)*e+i)+2)+t},easeInBounce:function(e,t,n,r){var i=n-t,o;return o=wi.easeOutBounce(r-e,0,i,r),i-o+t},easeOutBounce:function(e,t,n,r){var i=n-t;return(e/=r)<1/2.75?i*(7.5625*e*e)+t:e<2/2.75?i*(7.5625*(e-=1.5/2.75)*e+.75)+t:e<2.5/2.75?i*(7.5625*(e-=2.25/2.75)*e+.9375)+t:i*(7.5625*(e-=2.625/2.75)*e+.984375)+t},easeInOutBounce:function(e,t,n,r){var i=n-t,o;return e<r/2?(o=wi.easeInBounce(e*2,0,i,r),o*.5+t):(o=wi.easeOutBounce(e*2-r,0,i,r),o*.5+i*.5+t)}},Px=wi;function Tx(e){return e*Math.PI/180}function xt(e,t){return e+Math.random()*(t-e)}function zx(e,t){return Math.floor(e+Math.random()*(t-e+1))}var ls;(function(e){e[e.Circle=0]="Circle",e[e.Square=1]="Square",e[e.Strip=2]="Strip"})(ls||(ls={}));var gn;(function(e){e[e.Positive=1]="Positive",e[e.Negative=-1]="Negative"})(gn||(gn={}));const Mx=1e3/60;class Lx{constructor(t,n,r,i){this.getOptions=n;const{colors:o,initialVelocityX:a,initialVelocityY:l}=this.getOptions();this.context=t,this.x=r,this.y=i,this.w=xt(5,20),this.h=xt(5,20),this.radius=xt(5,10),this.vx=typeof a=="number"?xt(-a,a):xt(a.min,a.max),this.vy=typeof l=="number"?xt(-l,0):xt(l.min,l.max),this.shape=zx(0,2),this.angle=Tx(xt(0,360)),this.angularSpin=xt(-.2,.2),this.color=o[Math.floor(Math.random()*o.length)],this.rotateY=xt(0,1),this.rotationDirection=xt(0,1)?gn.Positive:gn.Negative}update(t){const{gravity:n,wind:r,friction:i,opacity:o,drawShape:a}=this.getOptions(),l=t/Mx;this.x+=this.vx*l,this.y+=this.vy*l,this.vy+=n*l,this.vx+=r*l,this.vx*=i**l,this.vy*=i**l,this.rotateY>=1&&this.rotationDirection===gn.Positive?this.rotationDirection=gn.Negative:this.rotateY<=-1&&this.rotationDirection===gn.Negative&&(this.rotationDirection=gn.Positive);const c=.1*this.rotationDirection*l;if(this.rotateY+=c,this.angle+=this.angularSpin,this.context.save(),this.context.translate(this.x,this.y),this.context.rotate(this.angle),this.context.scale(1,this.rotateY),this.context.rotate(this.angle),this.context.beginPath(),this.context.fillStyle=this.color,this.context.strokeStyle=this.color,this.context.globalAlpha=o,this.context.lineCap="round",this.context.lineWidth=2,a&&typeof a=="function")a.call(this,this.context);else switch(this.shape){case ls.Circle:{this.context.beginPath(),this.context.arc(0,0,this.radius,0,2*Math.PI),this.context.fill();break}case ls.Square:{this.context.fillRect(-this.w/2,-this.h/2,this.w,this.h);break}case ls.Strip:{this.context.fillRect(-this.w/6,-this.h/2,this.w/3,this.h);break}}this.context.closePath(),this.context.restore()}}class Ix{constructor(t,n){this.x=0,this.y=0,this.w=0,this.h=0,this.lastNumberOfPieces=0,this.tweenProgress=0,this.tweenFrom=0,this.particles=[],this.particlesGenerated=0,this.removeParticleAt=i=>{this.particles.splice(i,1)},this.getParticle=()=>{const i=xt(this.x,this.w+this.x),o=xt(this.y,this.h+this.y);return new Lx(this.context,this.getOptions,i,o)},this.animate=i=>{const{canvas:o,context:a,particlesGenerated:l,lastNumberOfPieces:c}=this,{run:u,recycle:m,numberOfPieces:x,debug:p,tweenFunction:w,tweenDuration:y}=this.getOptions();if(!u)return!1;const j=this.particles.length,C=m?j:l;if(C<x){c!==x&&(this.tweenProgress=0,this.tweenFrom=C,this.lastNumberOfPieces=x),this.tweenProgress=Math.min(y,Math.max(0,this.tweenProgress+i));const g=w(this.tweenProgress,this.tweenFrom,x,y),f=Math.round(g-C);for(let h=0;h<f;h++)this.particles.push(this.getParticle());this.particlesGenerated+=f}p&&(a.font="12px sans-serif",a.fillStyle="#333",a.textAlign="right",a.fillText(`Particles: ${j}`,o.width-10,o.height-20));for(let g=this.particles.length-1;g>=0;g--){const f=this.particles[g];f.update(i),(f.y>o.height||f.y<-100||f.x>o.width+100||f.x<-100)&&(m&&C<=x?this.particles[g]=this.getParticle():this.removeParticleAt(g))}return j>0||C<x},this.canvas=t;const r=this.canvas.getContext("2d");if(!r)throw new Error("Could not get canvas context");this.context=r,this.getOptions=n}}const Gl={width:typeof window<"u"?window.innerWidth:300,height:typeof window<"u"?window.innerHeight:200,numberOfPieces:200,friction:.99,wind:0,gravity:.1,initialVelocityX:4,initialVelocityY:10,colors:["#f44336","#e91e63","#9c27b0","#673ab7","#3f51b5","#2196f3","#03a9f4","#00bcd4","#009688","#4CAF50","#8BC34A","#CDDC39","#FFEB3B","#FFC107","#FF9800","#FF5722","#795548"],opacity:1,debug:!1,tweenFunction:Px.easeInOutQuad,tweenDuration:5e3,recycle:!0,run:!0};class Fx{constructor(t,n){this.lastFrameTime=0,this.setOptionsWithDefaults=i=>{const o={confettiSource:{x:0,y:0,w:this.canvas.width,h:0}};this._options={...o,...Gl,...i},Object.assign(this,i.confettiSource)},this.update=(i=0)=>{const{options:{run:o,onConfettiComplete:a,frameRate:l},canvas:c,context:u}=this,m=Math.min(i-this.lastFrameTime,50);if(l&&m<1e3/l){this.rafId=requestAnimationFrame(this.update);return}this.lastFrameTime=i-(l?m%l:0),o&&(u.fillStyle="white",u.clearRect(0,0,c.width,c.height)),this.generator.animate(m)?this.rafId=requestAnimationFrame(this.update):(a&&typeof a=="function"&&this.generator.particlesGenerated>0&&a.call(this,this),this._options.run=!1)},this.reset=()=>{this.generator&&this.generator.particlesGenerated>0&&(this.generator.particlesGenerated=0,this.generator.particles=[],this.generator.lastNumberOfPieces=0)},this.stop=()=>{this.options={run:!1},this.rafId&&(cancelAnimationFrame(this.rafId),this.rafId=void 0)},this.canvas=t;const r=this.canvas.getContext("2d");if(!r)throw new Error("Could not get canvas context");this.context=r,this.generator=new Ix(this.canvas,()=>this.options),this.options=n,this.update()}get options(){return this._options}set options(t){var i,o;const n=(i=this._options)==null?void 0:i.run,r=(o=this._options)==null?void 0:o.recycle;this.setOptionsWithDefaults(t),this.generator&&(Object.assign(this.generator,this.options.confettiSource),typeof t.recycle=="boolean"&&t.recycle&&r===!1&&(this.generator.lastNumberOfPieces=this.generator.particles.length)),typeof t.run=="boolean"&&t.run&&n===!1&&this.update()}}const Dx=it.createRef();class Kl extends it.Component{constructor(t){super(t),this.canvas=it.createRef(),this.canvas=t.canvasRef||Dx}componentDidMount(){if(this.canvas.current){const t=Vo(this.props)[0];this.confetti=new Fx(this.canvas.current,t)}}componentDidUpdate(){const t=Vo(this.props)[0];this.confetti&&(this.confetti.options=t)}componentWillUnmount(){this.confetti&&this.confetti.stop(),this.confetti=void 0}render(){const[t,n]=Vo(this.props),r={zIndex:2,position:"absolute",pointerEvents:"none",top:0,left:0,bottom:0,right:0,...n.style};return s.jsx("canvas",{width:t.width,height:t.height,ref:this.canvas,...n,style:r})}}Kl.defaultProps={...Gl};Kl.displayName="ReactConfetti";function Vo(e){const t={},n={},r={},i=[...Object.keys(Gl),"confettiSource","drawShape","onConfettiComplete","frameRate"],o=["canvasRef"];for(const a in e){const l=e[a];i.includes(a)?t[a]=l:o.includes(a)?o[a]=l:r[a]=l}return[t,r,n]}const u0=it.forwardRef((e,t)=>s.jsx(Kl,{canvasRef:t,...e})),Ax=[{name:"General Knowledge",questions:50,icon:"🧠",color:"#7C3AED"},{name:"Artificial Intelligence",questions:28,icon:"🤖",color:"#10B981"},{name:"Fun facts",questions:30,icon:"🎉",color:"#EF4444"},{name:"Science",questions:45,icon:"🧪",color:"#F59E0B"},{name:"History",questions:42,icon:"🏺",color:"#2563EB"},{name:"Geography",questions:38,icon:"🗺️",color:"#FACC15"}],Lt=Ax.slice(0,6),Vt=360/Lt.length,d0={"general-knowledge":"TINA","artificial-intelligence":"ALBERT","fun-facts":"BONZO",science:"POP",history:"TITO",geography:"HECTOR"},Wt={COINS:"qp_coins",XP:"qp_xp",LEVEL:"qp_level",OWNED_CHARACTERS:"owned_characters",SOUND:"play_sound_on"},fn={FULL_TURNS:6,DURATION:2800,OVERSHOOT:12,SETTLE_DURATION:350},Qt={get:(e,t=null)=>{try{const n=localStorage.getItem(e);return n?JSON.parse(n):t}catch{return t}},set:(e,t)=>{try{localStorage.setItem(e,JSON.stringify(t))}catch{}}},Wn=e=>e.toLowerCase().replace(/[^\w\s-]/g,"").replace(/\s+/g,"-"),gu=e=>(e%360+360)%360,Xl=e=>{try{navigator.vibrate&&navigator.vibrate(e)}catch{}},yr=(e,t=.7)=>{try{const n=new Audio(e);n.volume=t,n.play()}catch{}};function vu({onModeSelect:e,onNavigateHome:t}){return s.jsx("div",{className:"fixed inset-0 bg-base-bg text-base-text overflow-hidden",children:s.jsxs("div",{className:"h-full overflow-y-auto mx-auto max-w-md px-4 pt-[calc(env(safe-area-inset-top)+5rem)] pb-[calc(env(safe-area-inset-bottom)+5.25rem)]",children:[s.jsxs("header",{className:"flex items-center mb-8",children:[s.jsx("button",{onClick:t,className:"h-10 w-10 rounded-full border border-base-border grid place-items-center bg-white/5 hover:bg-white/10 transition",children:"←"}),s.jsx("h1",{className:"flex-1 text-center text-xl font-bold mb-12",children:"Choose a quiz mode"})]}),s.jsxs("div",{className:"space-y-8",children:[s.jsxs("button",{onClick:()=>e("classic"),className:"w-full relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-400 to-blue-500 p-8 text-left shadow-lg hover:shadow-xl transition-all active:scale-[0.98]",children:[s.jsx("div",{className:"absolute top-0 right-0 w-32 h-32 opacity-30",children:s.jsxs("svg",{viewBox:"0 0 100 100",className:"w-full h-full animate-spin",style:{animationDuration:"20s"},children:[Lt.map((n,r)=>{const i=r*Vt,o=i+Vt,a=Vt>180?1:0,l=Math.PI*i/180,c=Math.PI*o/180,u=50+40*Math.cos(l),m=50-40*Math.sin(l),x=50+40*Math.cos(c),p=50-40*Math.sin(c);return s.jsx("path",{d:`M50,50 L${u},${m} A40,40 0 ${a} 0 ${x},${p} Z`,fill:n.color,stroke:"white",strokeWidth:"0.5"},r)}),s.jsx("circle",{cx:"50",cy:"50",r:"8",fill:"white"})]})}),s.jsx("div",{className:"absolute top-4 left-8 text-3xl opacity-60",children:"🏆"}),s.jsx("div",{className:"absolute top-12 right-16 text-xl opacity-40",children:"⭐"}),s.jsx("div",{className:"absolute bottom-6 left-6 text-2xl opacity-50",children:"🎲"}),s.jsx("div",{className:"absolute bottom-4 right-12 text-3xl opacity-60",children:"🍪"}),s.jsx("div",{className:"absolute top-1/2 left-4 text-lg opacity-40",children:"🥨"}),s.jsx("h2",{className:"text-5xl font-black text-white mb-10 relative z-10 ",style:{transform:"translateX(-20px)"},children:"CLASSIC"})]}),s.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[s.jsxs("button",{disabled:!0,className:"aspect-square rounded-3xl bg-gradient-to-br from-yellow-400 to-orange-400 p-4 text-left opacity-60",children:[s.jsx("div",{className:"text-2xl mb-2",children:"💀"}),s.jsx("h4",{className:"text-lg font-black text-white",children:"SURVIVAL"})]}),s.jsxs("button",{disabled:!0,className:"aspect-square rounded-3xl bg-gradient-to-br from-red-400 to-pink-500 p-4 text-left opacity-60",children:[s.jsx("div",{className:"text-2xl mb-2",children:"💰"}),s.jsx("h4",{className:"text-lg font-black text-white",children:"TREASURE MINE"})]}),s.jsxs("button",{disabled:!0,className:"aspect-square rounded-3xl bg-gradient-to-br from-pink-500 to-purple-500 p-4 text-left opacity-60",children:[s.jsx("div",{className:"text-2xl mb-2",children:"⚔️"}),s.jsx("h4",{className:"text-lg font-black text-white",children:"SURVIVAL ARENA"})]}),s.jsxs("button",{disabled:!0,className:"aspect-square rounded-3xl bg-gradient-to-br from-blue-400 to-cyan-400 p-4 text-left opacity-60",children:[s.jsx("div",{className:"text-2xl mb-2",children:"📱"}),s.jsx("h4",{className:"text-lg font-black text-white",children:"TRIVIA VIDEO"})]})]})]})]})})}function Ox({run:e,coins:t,xp:n,level:r,ownedCharacters:i,onSpin:o,onBack:a,spinning:l,angle:c,transition:u,result:m,showCallout:x,glowColor:p,soundOn:w,setSoundOn:y,showSparkle:j,pulseIdx:C,nextProgressIdx:g,pendingProgressIdx:f,coinBurstTick:h,lastAnswerWasCorrect:S}){const _=100*r*(r-1),[L,N]=d.useState(!1),v=d.useRef(0),b=d.useRef(null),k=d.useRef(null),[E,I]=d.useState({dx:110,dy:-260});d.useEffect(()=>{if(f==null)return;N(!1);const D=setTimeout(()=>N(!0),30);return()=>clearTimeout(D)},[f]);const[H,te]=d.useState(!1);return d.useEffect(()=>{var q,Q,R,T;if(!h||!S||h===v.current)return;v.current=h;try{const M=(Q=(q=k==null?void 0:k.current)==null?void 0:q.getBoundingClientRect)==null?void 0:Q.call(q),z=(T=(R=b==null?void 0:b.current)==null?void 0:R.getBoundingClientRect)==null?void 0:T.call(R);if(M&&z){const O=M.left+M.width/2,$=M.top+M.height/2,re=z.left+z.width/2,B=z.top+z.height/2;I({dx:re-O,dy:B-$})}}catch{}w&&yr("/sounds/coin.mp3",.7),te(!0);const D=setTimeout(()=>te(!1),700);return()=>clearTimeout(D)},[h,w]),s.jsx("div",{className:"fixed inset-0 bg-base-bg text-base-text overflow-hidden",children:s.jsxs("div",{className:"h-full overflow-y-auto mx-auto max-w-md px-5 pt-[calc(env(safe-area-inset-top)+3rem)] pb-[calc(env(safe-area-inset-bottom)+5.25rem)]",children:[s.jsxs("header",{className:"flex items-center justify-between mb-8",children:[s.jsx("button",{onClick:a,className:"h-10 w-10 rounded-full border border-base-border grid place-items-center bg-white/5 hover:bg-white/10 transition translate-y-[4px]",children:"←"}),s.jsxs("div",{className:"flex items-center gap-3",children:[s.jsxs("button",{className:"px-3 py-1 rounded-2xl bg-white/5 border border-base-border text-left translate-y-[4px]",children:[s.jsxs("div",{className:"text-[11px]",children:["Lvl ",r," • ",n,"/",_]}),s.jsx("div",{className:"mt-1 h-1 w-full bg-white/10 rounded",children:s.jsx("div",{className:"h-1 bg-brand-blue rounded",style:{width:`${Math.min(n/_,1)*100}%`}})})]}),s.jsxs("button",{ref:b,className:"px-3 py-1 rounded-2xl bg-white/5 border border-base-border translate-y-[4px]",children:["🪙 ",t]})]}),s.jsx("button",{onClick:()=>y(!w),className:"h-10 w-10 rounded-full border border-base-border grid place-items-center bg-white/5 hover:bg-white/10 transition translate-y-[4px]",children:s.jsx("span",{className:"text-lg",children:w?"🔊":"🔇"})})]}),i.length>0&&s.jsx("div",{className:"flex justify-center mb-6",children:s.jsx("div",{className:"flex gap-2 px-4 py-2 bg-white/10 rounded-2xl backdrop-blur border border-base-border",children:i.map(D=>{const q=Lt.find(R=>Wn(R.name)===D),Q=d0[D];return s.jsxs("div",{className:"flex flex-col items-center",children:[s.jsx("div",{className:"w-8 h-8 rounded-full bg-white/20 flex items-center justify-center border border-white/30",children:s.jsx("span",{className:"text-sm",children:q==null?void 0:q.icon})}),s.jsx("span",{className:"text-[10px] text-base-muted mt-1",children:Q})]},D)})})}),s.jsx("div",{className:"flex justify-center mt-12 sm:mt-16 mb-6",children:s.jsxs("div",{className:"w-80 max-w-full",children:[s.jsx("style",{children:`
              @keyframes qp_sweep { from { transform: translateX(0); } to { transform: translateX(100%); } }
            `}),s.jsx("div",{className:"relative grid grid-cols-3 gap-1 h-3 rounded-full overflow-hidden bg-white/10 border border-white/15",children:[0,1,2].map(D=>{const q=["#FF9800","#FFC107","#cadd75ff"],Q=!!e.progress[D];return s.jsxs("div",{className:"relative h-full bg-white/10",children:[s.jsx("div",{className:"absolute inset-y-0 left-0 rounded-[6px]",style:{width:Q?D===f?L?"100%":"0%":g===D&&f==null?"0%":"100%":"0%",backgroundColor:q[D],transition:D===f?"width 1200ms ease-out":"none"}}),C===D&&s.jsx("span",{className:"absolute inset-y-0 left-0 w-full overflow-hidden pointer-events-none",children:s.jsx("span",{className:"absolute inset-y-0 left-0 w-1 rounded bg-white/80",style:{animation:"qp_sweep 1200ms ease-out forwards"}})}),j===D&&s.jsx("span",{className:"absolute right-[-2px] top-1/2 -translate-y-1/2 text-xs select-none",children:"✨"})]},D)})},e.qIndex)]})}),s.jsx("section",{className:"flex flex-col items-center mt-28 sm:mt-32 mb-10",children:s.jsxs("div",{ref:k,className:"relative w-96 h-96 rounded-full select-none",children:[p&&s.jsx("div",{className:"pointer-events-none absolute -inset-4 rounded-full",style:{boxShadow:`0 0 0 8px ${p}40, 0 0 40px 12px ${p}60`}}),s.jsx("div",{className:"absolute inset-0 rounded-full border-4 border-white/20 shadow-2xl overflow-hidden will-change-transform bg-base-card",style:{transform:`rotate(${c}deg)`,transition:u},children:s.jsxs("svg",{width:"100%",height:"100%",viewBox:"0 0 100 100",className:"block",children:[Lt.map((D,q)=>{const Q=q*Vt,R=Q+Vt,T=Vt>180?1:0,M=Math.PI*Q/180,z=Math.PI*R/180,O=50+45*Math.cos(M),$=50-45*Math.sin(M),re=50+45*Math.cos(z),B=50-45*Math.sin(z),ne=Q+Vt/2,fe=28,P=50+fe*Math.cos(ne*Math.PI/180),F=50-fe*Math.sin(ne*Math.PI/180);return s.jsxs("g",{children:[s.jsx("path",{d:`M50,50 L${O},${$} A45,45 0 ${T} 0 ${re},${B} Z`,fill:D.color,stroke:"rgba(255,255,255,0.3)",strokeWidth:"0.5"}),s.jsx("text",{x:P,y:F,fill:"white",fontSize:"8",dominantBaseline:"middle",textAnchor:"middle",className:"font-bold",children:D.icon})]},q)}),s.jsx("circle",{cx:"50",cy:"50",r:"12",fill:"white",stroke:"#ddd",strokeWidth:"1"})]})}),s.jsx("button",{onClick:o,disabled:l,className:`absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                      w-24 h-24 rounded-full bg-white text-black font-black text-lg shadow-lg transition-all ${l?"opacity-60 cursor-not-allowed scale-95":"hover:scale-105 active:scale-95"}`,children:"SPIN"}),s.jsx("div",{className:"absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-2 z-20",children:s.jsx("div",{className:"w-6 h-8 bg-white rounded-lg shadow-md flex items-start justify-center pt-1",children:s.jsx("div",{className:"w-0 h-0 border-l-[6px] border-r-[6px] border-b-[8px] border-l-transparent border-r-transparent border-b-gray-600"})})}),x&&m&&s.jsx("div",{className:"absolute left-1/2 -translate-x-1/2 -top-16 z-30",children:s.jsxs("div",{className:"px-4 py-2 rounded-2xl bg-base-card border border-base-border shadow-lg font-semibold",children:[s.jsx("span",{className:"mr-2",children:m.cat.icon}),m.cat.name]})}),H&&s.jsxs(s.Fragment,{children:[s.jsx("style",{children:`
                    @keyframes coinFly {
                      0%   { transform: translate(-50%, -50%) scale(0.9); opacity: 1; }
                      100% { transform: translate(var(--coin-dx), var(--coin-dy)) scale(0.4); opacity: 0; }
                    }
                `}),[0,1,2].map(D=>s.jsx("div",{className:"pointer-events-none absolute z-30 top-1/2 left-1/2",style:{animation:`coinFly 600ms ease-out ${D*80}ms forwards`,"--coin-dx":`${E.dx}px`,"--coin-dy":`${E.dy}px`},children:s.jsx("div",{className:"w-6 h-6 rounded-full grid place-items-center bg-yellow-400 text-black font-bold",children:"🪙"})},D))]})]})}),s.jsx("div",{className:"text-center",children:s.jsx("button",{disabled:!0,className:"text-base-muted underline opacity-60 cursor-not-allowed text-sm",children:"Party Spin (pass & play)"})})]})})}function yu({category:e,onComplete:t,isBonus:n=!1,soundOn:r=!0}){return d.useEffect(()=>{r&&yr("/sounds/flush.mp3",.8);const i=setTimeout(t,1e3);return Xl([50]),()=>clearTimeout(i)},[t,r]),n?s.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-purple-500 to-blue-600 flex flex-col items-center justify-center text-white",children:[s.jsx("h2",{className:"text-5xl font-black mb-8",children:"Bonus Question"}),s.jsx("div",{className:"w-32 h-32 bg-white/20 rounded-full flex items-center justify-center animate-pulse",children:s.jsx("span",{className:"text-6xl",children:"⭐"})})]}):s.jsx("div",{className:"min-h-screen bg-base-bg text-white flex items-center justify-center",children:s.jsxs("div",{className:"relative w-96 h-96 rounded-full flex items-center justify-center",style:{backgroundColor:e.color},children:[s.jsxs("div",{className:"absolute inset-0 opacity-10 pointer-events-none",children:[s.jsx("div",{className:"absolute top-8 left-10 w-20 h-20 bg-white/20 rounded-full"}),s.jsx("div",{className:"absolute bottom-10 right-12 w-24 h-24 bg-white/20 rounded-full"})]}),s.jsxs("div",{className:"relative z-10 text-center",children:[s.jsx("div",{className:"text-4xl font-black mb-2",children:e.name}),s.jsx("div",{className:"w-20 h-20 bg-white/20 rounded-full grid place-items-center mx-auto",children:s.jsx("span",{className:"text-4xl",children:e.icon})})]})]})})}function $x({onDone:e}){return d.useEffect(()=>{const t=setTimeout(e,1e3);return()=>clearTimeout(t)},[e]),s.jsx("div",{className:"min-h-screen flex items-center justify-center bg-green-600 text-white",children:s.jsx("h2",{className:"text-2xl font-black",children:"Whohoo!! 3 correct in a row 🎉"})})}function bu({question:e,category:t,onAnswer:n,run:r,timeLeft:i,usedLifelines:o,onUseLifeline:a,eliminatedOptions:l,audienceData:c,onBack:u,timeUp:m,onTimeUpBackToWheel:x,soundOn:p}){const[w,y]=d.useState(null),[j,C]=d.useState(!1),[g,f]=d.useState(!1),h=d.useRef(null),S=d.useRef(null),[_,L]=d.useState(null);d.useEffect(()=>{if(!j||!h.current)return;const b=h.current.getBoundingClientRect();L({x:b.left,y:b.top-300,w:b.width,h:8})},[j]);const N=b=>{if(j)return;y(b),C(!0);const k=b===e.correctIndex;Xl(k?[50,30,50]:[200]),p&&yr(k?"/sounds/correct.mp3":"/sounds/wrong.mp3",.7),setTimeout(()=>{n(k,null)},1500)},v=w===e.correctIndex;return s.jsx("div",{className:"fixed inset-0 bg-gradient-to-br from-gray-900 to-black text-white overflow-hidden",children:s.jsxs("div",{ref:S,className:"relative h-full overflow-y-auto px-5 pt-16 pb-[calc(env(safe-area-inset-bottom)+5.25rem)]",children:[s.jsx("div",{className:"mb-4",children:s.jsx("button",{onClick:()=>f(!0),className:"h-10 w-10 rounded-full border border-base-border grid place-items-center bg-white/5 hover:bg-white/10 transition",children:"←"})}),s.jsxs("div",{className:"text-center mb-6",children:[s.jsx("div",{className:`text-4xl font-black mb-2 ${i<=10?"text-red-400 animate-pulse":"text-white"}`,children:i}),s.jsx("div",{className:"w-full bg-white/20 rounded-full h-2",children:s.jsx("div",{className:`h-full rounded-full transition-all duration-1000 ${i<=10?"bg-red-400":"bg-blue-400"}`,style:{width:`${i/30*100}%`}})})]}),s.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[s.jsx("div",{className:"w-12 h-12 rounded-full flex items-center justify-center text-2xl",style:{backgroundColor:t.color},children:t.icon}),s.jsxs("div",{children:[s.jsx("div",{className:"text-lg font-bold",children:t.name}),s.jsxs("div",{className:"text-sm text-gray-400",children:["Question ",r.qIndex+1,"/3"]})]})]}),s.jsx("h2",{ref:h,className:"text-xl font-semibold mb-6 leading-relaxed",children:e.prompt}),s.jsx("div",{className:"space-y-3 mb-6",children:e.options.map((b,k)=>{const E=l.includes(k),I=w===k,H=k===e.correctIndex;let te="bg-white/10 border-white/20",D="opacity-100";return E?D="opacity-30":j&&I?te=H?"bg-green-500/30 border-green-400":"bg-red-500/30 border-red-400":j&&H?te="bg-green-500/30 border-green-400":I&&(te="bg-white/20 border-white/40"),s.jsx("button",{onClick:()=>N(k),disabled:j||E,className:`w-full p-4 rounded-xl border-2 text-left transition-all duration-300 ${te} ${D} ${!j&&!E?"hover:bg-white/15 active:scale-98":""}`,children:s.jsxs("div",{className:"flex items-center gap-3",children:[s.jsx("div",{className:"w-8 h-8 rounded-full bg-white/20 flex items-center justify-center font-bold text-sm",children:String.fromCharCode(65+k)}),s.jsx("span",{className:"font-medium flex-1",children:b}),c&&s.jsxs("span",{className:"text-xs text-base-muted",children:[Math.round(c[k]),"%"]})]})},k)})}),!j&&s.jsxs("div",{className:"flex gap-4 mb-8",children:[s.jsx("button",{onClick:()=>a("fifty"),disabled:o.fifty,className:`flex-1 p-4 rounded-2xl border-2 font-bold transition-all ${o.fifty?"bg-gray-700 border-gray-600 text-gray-400":"bg-purple-600 border-purple-400 text-white hover:bg-purple-500 active:scale-95"}`,children:"50:50"}),s.jsx("button",{onClick:()=>a("audience"),disabled:o.audience,className:`flex-1 p-4 rounded-2xl border-2 font-bold transition-all ${o.audience?"bg-gray-700 border-gray-600 text-gray-400":"bg-blue-600 border-blue-400 text-white hover:bg-blue-500 active:scale-95"}`,children:"👥 Ask"})]}),j&&s.jsxs("div",{className:"relative text-center",children:[v&&s.jsx("div",{className:"absolute inset-0 pointer-events-none",children:s.jsx(u0,{recycle:!1,numberOfPieces:120,gravity:.9,tweenDuration:1800,confettiSource:_||{x:0,y:0,w:typeof window<"u"?window.innerWidth:320,h:1}})}),s.jsx("button",{onClick:()=>n(v,null,!0),className:"relative z-10 bg-white text-black font-black py-4 px-8 rounded-2xl text-lg hover:bg-gray-100 transition-all active:scale-95",children:"Continue"})]}),m&&s.jsx("div",{className:"fixed inset-0 z-50 bg-black/60 flex items-center justify-center px-6",children:s.jsxs("div",{className:"w-full max-w-sm rounded-2xl bg-base-card border border-base-border p-5 text-center",children:[s.jsx("div",{className:"text-lg font-bold mb-2",children:"Time’s up"}),s.jsx("p",{className:"text-base-muted mb-5",children:"You ran out of time."}),s.jsx("button",{onClick:x,className:"mx-auto w-48 py-3 rounded-xl bg-brand-blue text-white font-semibold hover:bg-brand-blue/90 transition",children:"Back to Wheel"})]})}),g&&s.jsx("div",{className:"fixed inset-0 z-50 bg-black/60 flex items-center justify-center px-6",children:s.jsxs("div",{className:"w-full max-w-sm rounded-2xl bg-base-card border border-base-border p-5 text-center",children:[s.jsx("div",{className:"text-lg font-bold mb-2",children:"Want to quit?"}),s.jsx("p",{className:"text-base-muted mb-5",children:"You’ll lose this question’s progress."}),s.jsxs("div",{className:"flex gap-3",children:[s.jsx("button",{onClick:()=>f(!1),className:"flex-1 py-3 rounded-xl border border-base-border bg-white/5 hover:bg-white/10 transition",children:"No"}),s.jsx("button",{onClick:u,className:"flex-1 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-500 transition",children:"Yes"})]})]})})]})})}function Bx({onSelect:e}){return s.jsx("div",{className:"min-h-screen bg-gradient-to-br from-purple-600 to-pink-600 text-white",children:s.jsxs("div",{className:"mx-auto max-w-md px-5 pt-16 pb-8",children:[s.jsxs("header",{className:"text-center mb-12",children:[s.jsx("div",{className:"text-6xl mb-4",children:"🏆"}),s.jsx("h1",{className:"text-4xl font-black mb-4",children:"Perfect Round!"}),s.jsx("p",{className:"text-xl opacity-90",children:"Choose a character to unlock"})]}),s.jsx("div",{className:"grid grid-cols-2 gap-6",children:Lt.map(t=>{const n=d0[Wn(t.name)];return s.jsxs("button",{onClick:()=>e(Wn(t.name)),className:"p-6 rounded-3xl border-2 border-white/20 bg-white/10 backdrop-blur text-center hover:bg-white/20 hover:scale-105 transition-all duration-300 active:scale-95",children:[s.jsx("div",{className:"text-4xl mb-3",children:t.icon}),s.jsx("div",{className:"font-black text-lg mb-1",children:n}),s.jsx("div",{className:"text-sm opacity-75",children:t.name})]},Wn(t.name))})})]})})}function Ux(){const[e,t]=d.useState("modes"),n=ut(),r=Bt(),[i,o]=d.useState(()=>Qt.get(Wt.COINS,0)),[a,l]=d.useState(()=>Qt.get(Wt.XP,0)),[c,u]=d.useState(()=>Qt.get(Wt.LEVEL,1)),[m,x]=d.useState(()=>Qt.get(Wt.OWNED_CHARACTERS,[])),[p,w]=d.useState(()=>Qt.get(Wt.SOUND,!0)),[y,j]=d.useState({qIndex:0,progress:[!1,!1,!1],lifelines:{fifty:!1,audience:!1}}),[C,g]=d.useState([]),[f,h]=d.useState(null),[S,_]=d.useState(null),[L,N]=d.useState(30),[v,b]=d.useState([]),[k,E]=d.useState(null),[I,H]=d.useState(null),[te,D]=d.useState(!1),[q,Q]=d.useState(0),[R,T]=d.useState("none"),[M,z]=d.useState(!1),[O,$]=d.useState(null),[re,B]=d.useState(!1),[ne,fe]=d.useState(null),[P,F]=d.useState(-1),[Y,V]=d.useState(0),[J,me]=d.useState(null),[Z,se]=d.useState(null),[U,X]=d.useState(!1),[ee,le]=d.useState(null),[Ee,Ce]=d.useState(-1),[A,ve]=d.useState([!1,!1,!1]),[je,G]=d.useState(!1),[K,pe]=d.useState(!1),he=d.useRef(null),xe=d.useRef(null),ce=d.useRef(null),Te=d.useMemo(()=>{var de;return((de=window.matchMedia)==null?void 0:de.call(window,"(prefers-reduced-motion: reduce)").matches)||!1},[]);d.useEffect(()=>{try{localStorage.setItem("qp_in_question",JSON.stringify(e==="question"))}catch{}return()=>{try{localStorage.removeItem("qp_in_question")}catch{}}},[e]),d.useEffect(()=>(be(),ke(),()=>Re()),[]),d.useEffect(()=>Qt.set(Wt.COINS,i),[i]),d.useEffect(()=>Qt.set(Wt.XP,a),[a]),d.useEffect(()=>Qt.set(Wt.LEVEL,c),[c]),d.useEffect(()=>Qt.set(Wt.OWNED_CHARACTERS,m),[m]),d.useEffect(()=>Qt.set(Wt.SOUND,p),[p]),d.useEffect(()=>(e==="question"&&L>0&&!K?he.current=setTimeout(()=>{N(de=>{const we=de-1;return we===10&&p&&yr("/sounds/tick.mp3",.8),we})},1e3):e==="question"&&L===0&&D(!0),()=>{he.current&&clearTimeout(he.current)}),[e,L,p,K]),d.useEffect(()=>{if(e!=="wheel"||J==null)return;F(J),p&&yr("/sounds/progress.mp3",.6),Ce(J);const de=setTimeout(()=>Ce(-1),900),we=setTimeout(()=>F(-1),900),ue=setTimeout(()=>{ee&&(ee==="streakFlash"?t("streakFlash"):ee==="characterPicker"?t("characterPicker"):(t("modes"),Ut()),le(null)),me(null)},1800);return()=>{clearTimeout(de),clearTimeout(we),clearTimeout(ue)}},[e,J,ee,p,je]),d.useEffect(()=>{e!=="wheel"||!je||(V(de=>de+1),G(!1))},[e,je]);const be=async()=>{try{const we=await(await fetch("/data/quiz_questions_bank.csv")).text(),{data:ue}=Ls.parse(we,{header:!0,skipEmptyLines:!0,transformHeader:ae=>ae.trim().toLowerCase()}),ie=ue.map((ae,Ne)=>{var et;const ge=[ae.option1,ae.option2,ae.option3,ae.option4].map(Lr=>(Lr||"").trim()).filter(Boolean);if(ge.length<4)return null;let _e={a:0,b:1,c:2,d:3}[(et=ae.answer)==null?void 0:et.toLowerCase()];return _e===void 0&&(_e=ge.findIndex(Lr=>Lr.toLowerCase()===(ae.answer||"").toLowerCase())),_e===-1&&(_e=0),{id:ae.id||`q_${Ne}`,prompt:(ae.question||"").trim(),options:ge,correctIndex:_e,category:(ae.category||ae.subject||"general knowledge").trim(),difficulty:(ae.difficulty||"medium").toLowerCase(),explanation:(ae.explanation||"").trim()}}).filter(Boolean);g(ie)}catch(de){console.error("Failed to load questions:",de),g([])}},ke=()=>{const de=new Audio("/sounds/spin.mp3");de.loop=!0,de.volume=.6,xe.current=de},Re=()=>{if(he.current&&clearTimeout(he.current),ce.current&&(clearTimeout(ce.current),ce.current=null),xe.current){try{xe.current.pause()}catch{}xe.current=null}},We=()=>{if(p&&xe.current){try{xe.current.currentTime=0,xe.current.play()}catch{}ce.current&&clearTimeout(ce.current),ce.current=setTimeout(()=>{In()},2e3)}},In=()=>{if(ce.current&&(clearTimeout(ce.current),ce.current=null),xe.current)try{xe.current.pause(),xe.current.currentTime=0}catch{}},Ut=()=>{j({qIndex:0,progress:[!1,!1,!1],lifelines:{fifty:!1,audience:!1}}),ve([!1,!1,!1]),h(null),_(null),H(null),b([]),E(null),D(!1),V(0)},po=()=>{if(M)return;$(null),B(!1),fe(null),z(!0),We();const de=Math.floor(Math.random()*Lt.length),we=Lt[de],ue=gu(q),ie=de*Vt+Vt/2,ae=(Math.random()-.5)*(Vt*.3),Ne=360-ie+ae;let ge=gu(Ne-ue);const ze=fn.FULL_TURNS*360+ge,_e=q+ze+fn.OVERSHOOT;T(`transform ${Te?1e3:fn.DURATION}ms cubic-bezier(0.25, 0.46, 0.45, 0.94)`),Q(_e),Xl([20,50,20]),setTimeout(()=>{T(`transform ${Te?200:fn.SETTLE_DURATION}ms cubic-bezier(0.68, -0.55, 0.265, 1.55)`),Q(et=>et-fn.OVERSHOOT)},Te?1e3:fn.DURATION),setTimeout(()=>{In(),z(!1),$({cat:we,index:de}),_(we),fe(we.color),B(!0),setTimeout(()=>{B(!1),t("interstitial")},1500),setTimeout(()=>fe(null),1e3)},(Te?1e3:fn.DURATION)+(Te?200:fn.SETTLE_DURATION)+100)},ho=()=>{const de=C.filter(ue=>{const ie=ue.category.toLowerCase(),ae=S.name.toLowerCase();return ie.includes(ae)||ae.includes(ie)});let we;de.length>0?we=de[Math.floor(Math.random()*de.length)]:we=C[Math.floor(Math.random()*C.length)],we?(h(we),N(30),b([]),E(null),D(!1),pe(!1),t("question")):t("wheel")},Jn=(de,we,ue=!1)=>{if(!ue){pe(!0);return}const ie=y.qIndex,ae=[...y.progress];ae[ie]=!0;const Ne=[...A];if(Ne[ie]=!!de,ve(Ne),j(ge=>({...ge,progress:ae,qIndex:ge.qIndex+1})),de&&(o(ge=>ge+5),l(ge=>ge+1),G(!0)),se(ie),X(!!de),ie===2){const ge=Ne.every(Boolean);le(ge?"streakFlash":"modes")}else le(null);t("wheel")},xo=de=>{if(!(y.lifelines[de]||!f)){if(j(we=>({...we,lifelines:{...we.lifelines,[de]:!0}})),de==="fifty"){const ue=f.options.map((ie,ae)=>ae).filter(ie=>ie!==f.correctIndex).slice(0,2);b(ue)}else if(de==="audience"){const we=40+Math.random()*25;let ue=100-we;const ie=[0,0,0,0];ie[f.correctIndex]=Math.round(we);const ae=[0,1,2,3].filter(Ne=>Ne!==f.correctIndex);ae.forEach((Ne,ge)=>{if(ge===ae.length-1)ie[Ne]=ue;else{const ze=Math.floor(Math.random()*ue);ie[Ne]=ze,ue-=ze}}),E(ie)}}},go=de=>{H(de),t("bonusInterstitial")},vo=de=>{de&&I&&(x(we=>[...new Set([...we,I])]),p&&yr("/sounds/coin.mp3",1)),setTimeout(()=>{t("modes"),Ut()},3e3)},Is=de=>{de==="classic"&&(Ut(),t("wheel"))},Mr=()=>{window.location.href="/",console.log("Navigate to home")},Zn=()=>{t("modes"),Ut()},yo=()=>{t("wheel")};switch(d.useEffect(()=>{if(e!=="wheel"||Z==null)return;const we=setTimeout(()=>{me(Z),se(null)},U?1800:0);return()=>clearTimeout(we)},[e,Z,U]),d.useEffect(()=>{const de=new URLSearchParams(r.search);(de.get("view")==="modes"||de.get("view")==="home")&&(Ut(),t("modes"),n("/play",{replace:!0}))},[r.search]),e){case"modes":return s.jsx(vu,{onModeSelect:Is,onNavigateHome:Mr});case"wheel":return s.jsx(Ox,{run:y,coins:i,xp:a,level:c,ownedCharacters:m,onSpin:po,onBack:Zn,spinning:M,angle:q,transition:R,result:O,showCallout:re,glowColor:ne,soundOn:p,setSoundOn:w,showSparkle:P,pulseIdx:Ee,coinBurstTick:Y,pendingProgressIdx:J,lastAnswerWasCorrect:U,nextProgressIdx:Z});case"interstitial":return s.jsx(yu,{category:S,onComplete:ho,soundOn:p});case"streakFlash":return s.jsx($x,{onDone:()=>t("bonusInterstitial")});case"question":return s.jsx(bu,{question:f,category:S,onAnswer:Jn,run:y,timeLeft:L,usedLifelines:y.lifelines,onUseLifeline:xo,eliminatedOptions:v,audienceData:k,onBack:yo,timeUp:te,onTimeUpBackToWheel:()=>{D(!1),t("wheel")},soundOn:p});case"characterPicker":return s.jsx(Bx,{onSelect:go});case"bonusInterstitial":return s.jsx(yu,{category:Lt.find(de=>Wn(de.name)===I),onComplete:()=>t("bonusQuestion"),isBonus:!0,soundOn:p});case"bonusQuestion":if(!f){const de=Lt.find(we=>Wn(we.name)===I);if(de&&C.length>0){const we=C.filter(ie=>{const ae=ie.category.toLowerCase(),Ne=de.name.toLowerCase();return ae.includes(Ne)||Ne.includes(ae)}),ue=we.length>0?we[Math.floor(Math.random()*we.length)]:C[Math.floor(Math.random()*C.length)];h(ue),N(30)}return s.jsx("div",{className:"min-h-screen bg-base-bg text-base-text flex items-center justify-center",children:s.jsx("div",{className:"text-lg",children:"Loading bonus question..."})})}return s.jsx(bu,{question:f,category:Lt.find(de=>Wn(de.name)===I)||Lt[0],onAnswer:vo,run:{...y,lifelines:{fifty:!0,audience:!0}},timeLeft:L,usedLifelines:{fifty:!0,audience:!0},onUseLifeline:()=>{},eliminatedOptions:[],audienceData:null,onBack:()=>t("modes")});default:return s.jsx(vu,{onModeSelect:Is,onNavigateHome:Mr})}}const qx=({session:e,mode:t,category:n,difficulty:r,timerConfig:i,onComplete:o,onQuit:a})=>{const[l,c]=d.useState(0),[u,m]=d.useState([]),[x,p]=d.useState([]),[w,y]=d.useState([]),[j,C]=d.useState(!1),[g,f]=d.useState(null),[h,S]=d.useState(Date.now()),[_,L]=d.useState(!1),[N,v]=d.useState(!1),[b,k]=d.useState({}),[E,I]=d.useState({}),[H,te]=d.useState([]);d.useState(!0);const[D,q]=d.useState(null),[Q,R]=d.useState([]),[T,M]=d.useState(0),[z,O]=d.useState(0),[$,re]=d.useState(!1),[B,ne]=d.useState(!1),[fe,P]=d.useState(""),[F,Y]=d.useState(!1),[V,J]=d.useState(!1),[me,Z]=d.useState(!0),[se,U]=d.useState(!1),[X,ee]=d.useState(0),[le,Ee]=d.useState(0),[Ce,A]=d.useState(0),[ve,je]=d.useState(null),[G,K]=d.useState(0),pe=d.useRef(null),he=d.useRef(null),xe=t==="practice",ce=u[l],Te=ue=>{try{const ie=new Audio(ue);ie.volume=.6,ie.play()}catch{console.log("Sound not available:",ue)}},be=[{id:1,category:"General Knowledge",difficulty:"medium",prompt:"Which element has the atomic number 1?",options:["Helium","Carbon","Hydrogen","Oxygen"],answerIndex:2,explanation:"Hydrogen is the first element on the periodic table with atomic number 1!"},{id:2,category:"General Knowledge",difficulty:"medium",prompt:"What is the largest ocean on Earth?",options:["Atlantic","Pacific","Indian","Arctic"],answerIndex:1,explanation:"The Pacific Ocean covers about one-third of Earth's surface!"},{id:3,category:"General Knowledge",difficulty:"easy",prompt:"What color do you get when you mix red and yellow?",options:["Purple","Orange","Green","Pink"],answerIndex:1,explanation:"Red and yellow make orange - like a beautiful sunset!"}],ke=e&&e.questions&&Array.isArray(e.questions)&&e.questions.length>0?e.questions:be,Re=ke[l]||ke[0]||be[0],We=ke.length;d.useEffect(()=>{ke.length>0&&(m(new Array(ke.length).fill(null)),p(new Array(ke.length).fill(!1)),te(new Array(ke.length).fill(!1)),y(new Array(ke.length).fill((i==null?void 0:i.seconds)||45)))},[ke.length,i==null?void 0:i.seconds]);const In=()=>{if(_){P("Once per quiz"),setTimeout(()=>P(""),1e3);return}if(ce!==null){P("Already answered"),setTimeout(()=>P(""),1e3);return}if(!Re)return;const ie=[0,1,2,3].filter(ae=>ae!==Re.answerIndex).sort(()=>Math.random()-.5).slice(0,2);k({...b,[l]:ie}),L(!0)},Ut=()=>{if(N){P("Once per quiz"),setTimeout(()=>P(""),1e3);return}if(ce!==null){P("Already answered"),setTimeout(()=>P(""),1e3);return}if(!Re)return;const ue=Re.answerIndex,ie=[0,0,0,0],ae=40+Math.floor(Math.random()*31);ie[ue]=ae;let Ne=100-ae;const ge=[0,1,2,3].filter(ze=>ze!==ue);for(let ze=0;ze<ge.length-1;ze++){const _e=Math.min(Ne-(ge.length-1-ze),Ne/2),et=Math.floor(Math.random()*(_e+1));ie[ge[ze]]=et,Ne-=et}ie[ge[ge.length-1]]=Ne,I({...E,[l]:ie}),v(!0)},po=d.useCallback((ue,ie)=>{if(!Re||xe&&H[l]||b[l]&&b[l].includes(ue))return;const ae=[...u];ae[l]=u[l]===ue?null:ue,m(ae),S(Date.now()),ae[l]!==null&&(Z(!1),clearInterval(he.current));const Ne=ae[l]===Re.answerIndex;if(Ne){const ge=Ce+1;if(A(ge),M(ze=>ze+1),O(0),xe){ee(et=>et+1);const ze=10;Ee(et=>et+ze);let _e=null;if(l===0&&Q.length===0)_e={emoji:"🎯",message:"Perfect start! You're a natural!"};else if(T===2)_e={emoji:"🔥",message:"2 in a row! Keep it up!"};else if(T===3)_e={emoji:"⚡",message:"3 streak! You're on fire!"};else if(T===5)_e={emoji:"🚀",message:"5 streak! Unstoppable!"};else if(T===10)_e={emoji:"👑",message:"10 streak! Legendary!"};else if(Q[Q.length-1]===!1)_e={emoji:"💪",message:"Great recovery! Back on track!"};else if(l===Math.floor(We*.25)-1)_e={emoji:"🎬",message:"25% done! Looking good!"};else if(l===Math.floor(We*.5)-1)_e={emoji:"⭐",message:"Halfway there! Keep going!"};else if(l===Math.floor(We*.75)-1)_e={emoji:"🏁",message:"Almost done! Final push!"};else{const et=[{emoji:"✨",message:"Excellent!"},{emoji:"🎉",message:"Well done!"},{emoji:"💯",message:"Perfect!"},{emoji:"🌟",message:"Brilliant!"}];_e=et[Math.floor(Math.random()*et.length)]}setTimeout(()=>{q(_e),setTimeout(()=>q(null),3e3)},2e3),Te("/sounds/correct.mp3"),setTimeout(()=>Te("/sounds/coin.mp3"),500),J(!0),setTimeout(()=>J(!1),2e3),je({type:"correct",stars:1,coins:10}),setTimeout(()=>je(null),2e3)}}else if(ae[l]!==null&&(A(0),M(0),O(ge=>ge+1),xe)){let ge=null;if(l===0&&Q.length===0)ge={emoji:"💡",message:"No worries! Let's learn together!"};else if(T>=3)ge={emoji:"💫",message:"Good run! Keep trying!"};else if(z===2)ge={emoji:"🤗",message:"It's okay! Take your time!"};else if(z>=3)ge={emoji:"💪",message:"Don't give up! You've got this!"};else{const ze=[{emoji:"🤔",message:"Almost there!"},{emoji:"💭",message:"Good try!"},{emoji:"🎯",message:"Next one!"}];ge=ze[Math.floor(Math.random()*ze.length)]}setTimeout(()=>{q(ge),setTimeout(()=>q(null),3e3)},1e3),Te("/sounds/wrong.mp3")}if(R(ge=>[...ge.slice(-2),Ne]),ae[l]!==null&&x[l]){const ge=[...x];ge[l]=!1,p(ge)}xe&&ae[l]!==null&&(Y(!0),te(ge=>{const ze=[...ge];return ze[l]=!0,ze})),!xe&&ae[l]!==null&&(clearTimeout(pe.current),pe.current=setTimeout(()=>{l<We-1?Jn():(re(!0),C(!0))},5e3))},[Re,xe,H,l,u,x,We,Ce,b]),ho=()=>{S(Date.now()),l>0&&(clearInterval(he.current),Z(!1),c(ue=>ue-1),Y(!1),xe&&u[l-1]!==null&&setTimeout(()=>Y(!0),100))},Jn=()=>{if(S(Date.now()),clearInterval(he.current),ce===null){const ue=[...x];ue[l]=!0,p(ue),A(0)}Z(!1),Y(!1),l<We-1?(c(ue=>ue+1),xe&&u[l+1]!==null?setTimeout(()=>Y(!0),100):setTimeout(()=>Z(!0),100)):re(!0)},xo=()=>{S(Date.now());const ue=[...x];ue[l]=!0,p(ue),A(0),Jn()},go=()=>{const ue=ke.reduce((ie,ae,Ne)=>ie+(u[Ne]===ae.answerIndex?1:0),0);if(xe)o&&o({questions:ke,answers:u,skipped:x,correct:ue,total:We,mode:t,category:n,difficulty:r,earnedStars:X,earnedCoins:le,finalStreak:Ce});else{const ie=ue*10;K(ie),U(!0),setTimeout(()=>{Te("/sounds/coin.mp3"),J(!0),setTimeout(()=>J(!1),3e3)},1e3)}},vo=()=>{o&&o({questions:ke,answers:u,skipped:x,correct:ke.reduce((ue,ie,ae)=>ue+(u[ae]===ie.answerIndex?1:0),0),total:We,mode:t,category:n,difficulty:r,earnedStars:0,earnedCoins:G,finalStreak:Ce})};d.useEffect(()=>{if(!(j||g!==null||$||!me||u[l]!==null))return he.current=setInterval(()=>{y(ue=>{const ie=[...ue],ae=ie[l];return ae<=1?(clearInterval(he.current),l===We-1?(Date.now()-h>=5e3&&re(!0),ie):(f(l),ie)):(ie[l]=ae-1,ie)})},1e3),()=>clearInterval(he.current)},[j,g,l,$,We,me,u,h]),d.useEffect(()=>{u[l]===null&&!$&&!g?Z(!0):Z(!1)},[l,u,$,g]);const Is=ue=>{const ie=Math.floor(ue/60),ae=ue%60;return`${ie}:${ae.toString().padStart(2,"0")}`},Mr=(l+1)/ke.length*100,Zn=u.filter(ue=>ue!==null).length,yo=x.filter(Boolean).length,de=w[l]||0,we=ke.reduce((ue,ie,ae)=>ue+(u[ae]===ie.answerIndex?1:0),0);return s.jsxs("div",{className:"h-dvh bg-gray-900 text-white relative flex flex-col",children:[ve&&s.jsx("div",{className:"fixed inset-0 flex items-center justify-center z-50 pointer-events-none",children:s.jsxs("div",{className:"bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-8 py-4 rounded-full text-xl font-bold animate-bounce shadow-2xl",children:["+",ve.coins," Coins!"]})}),xe&&D&&s.jsx("div",{className:"fixed top-[60%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 pointer-events-none animate-fadeInOut max-w-2xl w-full px-4",children:s.jsx("div",{className:"bg-gradient-to-br from-gray-800/95 to-gray-900/95 text-white p-6 rounded-3xl shadow-2xl backdrop-blur-sm border border-gray-700/50",children:s.jsxs("div",{className:"text-center",children:[s.jsx("div",{className:"text-4xl mb-3",children:D.emoji}),s.jsx("div",{className:"text-xl font-bold leading-relaxed tracking-wide",children:D.message})]})})}),V&&s.jsx("div",{className:"fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-40 pointer-events-none",children:[...Array(8)].map((ue,ie)=>s.jsx("div",{className:"absolute text-3xl animate-ping",style:{left:`${-30+Math.random()*60}px`,top:`${-30+Math.random()*60}px`,animationDelay:`${ie*150}ms`,animationDuration:"2s"},children:"🪙"},ie))}),s.jsxs("div",{className:"sticky top-0 flex items-center justify-between px-4 py-2 bg-gray-900 flex-shrink-0 z-40 border-b border-gray-800 shadow-lg",children:[s.jsxs("button",{onClick:()=>ne(!0),className:"bg-gray-700 hover:bg-gray-600 px-3 py-1.5 rounded-full flex items-center gap-2 transition-colors text-sm",children:[s.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:s.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 19l-7-7 7-7"})}),s.jsx("span",{className:"font-medium",children:"Back"})]}),s.jsx("div",{className:"flex-1"}),s.jsxs("div",{className:"flex items-center gap-2",children:[xe&&s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"bg-yellow-600/20 px-2 py-1 rounded-full flex items-center gap-1",children:[s.jsx("span",{className:"text-yellow-400 text-sm",children:"🪙"}),s.jsx("span",{className:"text-yellow-200 font-semibold text-sm",children:le})]}),s.jsxs("div",{className:"bg-orange-600/20 px-2 py-1 rounded-full flex items-center gap-1",children:[s.jsx("span",{className:"text-orange-400 text-sm",children:"🔥"}),s.jsx("span",{className:"text-orange-200 font-semibold text-sm",children:Ce})]})]}),s.jsx("div",{className:`px-2 py-1 rounded-full font-mono font-semibold text-sm ${de<=10?"bg-red-600/20 text-red-400 animate-pulse":de<=30?"bg-yellow-600/20 text-yellow-400":"bg-green-600/20 text-green-400"}`,children:Is(de)})]})]}),s.jsxs("div",{className:"px-4 pb-1 flex-shrink-0 bg-gray-900 relative z-30",children:[s.jsxs("div",{className:"flex justify-between items-center mb-1",children:[s.jsxs("span",{className:"text-xs text-gray-400",children:["Question ",l+1," of ",We]}),s.jsxs("span",{className:"text-xs text-gray-400",children:[Math.round(Mr),"% Complete"]})]}),s.jsx("div",{className:"h-2 bg-gray-700 rounded-full overflow-hidden",children:s.jsx("div",{className:"h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-500",style:{width:`${Mr}%`}})}),s.jsx("div",{className:"flex justify-center gap-1 mt-1",children:Array.from({length:We}).map((ue,ie)=>s.jsx("div",{className:`w-1.5 h-1.5 rounded-full transition-all ${ie===l?"bg-white scale-125":u[ie]!==null?"bg-green-500":x[ie]?"bg-yellow-500":"bg-gray-600"}`},ie))}),s.jsx("div",{className:"text-center mt-4",children:s.jsx("span",{className:"text-xs text-gray-500",children:Re.category})})]}),s.jsxs("div",{className:"flex-1 px-4 flex flex-col overflow-y-auto pb-36",children:[s.jsxs("div",{className:"relative bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 rounded-3xl p-6 mb-8 flex-shrink-0 shadow-2xl shadow-blue-600/20 border border-blue-400/20",children:[s.jsx("div",{className:"absolute top-2 right-2 w-16 h-16 bg-white/10 rounded-full blur-xl"}),s.jsx("div",{className:"absolute bottom-2 left-2 w-12 h-12 bg-white/5 rounded-full blur-lg"}),s.jsxs("div",{className:"relative text-center",children:[s.jsxs("div",{className:"inline-block bg-white/10 px-3 py-1 rounded-full text-xs font-medium text-blue-100 mb-3",children:["Question ",l+1]}),s.jsx("h2",{className:"text-xl font-bold leading-relaxed text-white tracking-wide",children:Re.prompt}),Re.difficulty&&s.jsx("div",{className:"mt-3 inline-block",children:s.jsx("span",{className:`px-2 py-1 rounded-full text-xs font-semibold ${Re.difficulty==="easy"?"bg-green-500/20 text-green-300":Re.difficulty==="medium"?"bg-yellow-500/20 text-yellow-300":"bg-red-500/20 text-red-300"}`,children:Re.difficulty.toUpperCase()})})]})]}),s.jsx("div",{className:"grid grid-cols-1 gap-3 mb-2 flex-shrink-0",children:Re.options.map((ue,ie)=>{const ae=ce===ie,Ne=ie===Re.answerIndex,ge=xe&&ce!==null&&F,ze=b[l]&&b[l].includes(ie);let _e="p-4 rounded-xl transition-all duration-300 border-2 min-h-[64px] flex items-center ";ze?_e+="bg-gray-700/30 border-gray-600/30 text-gray-500/50 cursor-not-allowed":(_e+="cursor-pointer ",ge?ae&&Ne?_e+="bg-green-600 border-green-500 text-white shadow-lg shadow-green-600/25":ae&&!Ne?_e+="bg-red-600 border-red-500 text-white shadow-lg shadow-red-600/25":!ae&&Ne?_e+="bg-green-600/20 border-green-500 text-green-300 animate-pulse":_e+="bg-gray-700 border-gray-600 text-gray-400":ae?_e+="bg-gray-600 border-gray-500 text-white":_e+="bg-gray-800 border-gray-700 text-gray-200 hover:bg-gray-750 hover:border-gray-600");const et=["🅰️","🅱️","🅲️","🅳️"];return s.jsx("button",{onClick:Lr=>po(ie,Lr),disabled:xe&&H[l],className:_e,children:s.jsxs("div",{className:"flex items-center gap-2 w-full",children:[s.jsx("div",{className:"text-lg flex-shrink-0 mr-1",children:et[ie]}),s.jsx("div",{className:"flex-1 text-left font-semibold text-base leading-relaxed",children:ue}),E[l]&&E[l][ie]>0&&!ze&&s.jsxs("div",{className:"bg-purple-600/20 px-2 py-1 rounded-full text-xs text-purple-300",children:[E[l][ie],"%"]}),ge&&ae&&Ne&&!ze&&s.jsx("div",{className:"text-lg animate-bounce",children:"🎉"}),ge&&ae&&!Ne&&!ze&&s.jsx("div",{className:"text-lg",children:"😔"}),ge&&!ae&&Ne&&!ze&&s.jsx("div",{className:"text-base animate-pulse",children:"✨"})]})},ie)})}),xe&&F&&ce!==null&&s.jsx("div",{className:"bg-gray-800 rounded-xl p-4 mb-2 mt-4 border border-gray-700 flex-shrink-0",children:s.jsxs("div",{className:"flex gap-3",children:[s.jsx("div",{className:"text-lg flex-shrink-0",children:ce===Re.answerIndex?"🎊":"💡"}),s.jsxs("div",{className:"flex-1",children:[s.jsx("h4",{className:`font-semibold mb-3 text-sm ${ce===Re.answerIndex?"text-green-400":"text-blue-400"}`,children:ce===Re.answerIndex?"Perfect! Well done!":"Good try! Here's why:"}),Re.explanation&&s.jsx("p",{className:"text-gray-300 text-sm leading-relaxed",children:Re.explanation})]})]})})]}),s.jsxs("div",{className:"fixed bottom-0 left-0 right-0 bg-gray-800/90 backdrop-blur-sm p-4 pb-8 z-50",children:[!xe&&s.jsxs("div",{className:"flex justify-center gap-2 mb-4",children:[s.jsxs("button",{onClick:In,disabled:ce!==null,className:`${_?"bg-gray-700/50 text-gray-500/50":"bg-orange-600 hover:bg-orange-700"} disabled:bg-gray-800 px-3 py-1.5 rounded-lg font-medium transition-colors flex items-center gap-1 text-sm`,children:[s.jsx("span",{children:"⚡"}),"50:50"]}),s.jsxs("button",{onClick:Ut,disabled:ce!==null,className:`${N?"bg-gray-700/50 text-gray-500/50":"bg-purple-600 hover:bg-purple-700"} disabled:bg-gray-800 px-3 py-1.5 rounded-lg font-medium transition-colors flex items-center gap-1 text-sm`,children:[s.jsx("span",{children:"👥"}),"Ask Friends"]})]}),s.jsxs("div",{className:"flex gap-2 mb-2",children:[s.jsx("button",{onClick:ho,disabled:l===0,className:"flex-1 bg-gray-700 hover:bg-gray-600 disabled:bg-gray-800 py-2 rounded-lg font-medium transition-colors text-sm",children:"Previous"}),s.jsx("button",{onClick:xo,disabled:ce!==null,className:`flex-1 py-2 rounded-lg font-medium transition-colors text-sm ${ce!==null?"bg-gray-600/50 text-gray-400/50 cursor-not-allowed":"bg-yellow-600 hover:bg-yellow-700"}`,children:"Skip"}),s.jsx("button",{onClick:Jn,className:"flex-1 bg-blue-600 hover:bg-blue-700 py-2 rounded-lg font-medium transition-colors text-sm",children:l===We-1?"Finish":"Next"})]}),s.jsx("button",{onClick:()=>re(!0),className:"w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 py-2.5 rounded-lg font-medium transition-colors text-sm",children:"Submit"})]}),se&&s.jsx("div",{className:"fixed inset-0 bg-black/75 flex items-center justify-center z-50 p-4",children:s.jsxs("div",{className:"bg-gray-800 rounded-3xl p-6 max-w-sm w-full text-center border border-gray-700",children:[s.jsx("div",{className:"text-4xl mb-4",children:"🎉"}),s.jsx("h3",{className:"text-xl font-bold mb-2",children:"Quiz Complete!"}),s.jsx("p",{className:"text-gray-400 mb-6",children:"Here's how you performed"}),s.jsxs("div",{className:"bg-gray-700/50 rounded-2xl p-4 mb-6 space-y-3",children:[s.jsxs("div",{className:"flex justify-between items-center",children:[s.jsx("span",{className:"text-gray-300",children:"Questions Attempted:"}),s.jsxs("span",{className:"text-white font-semibold",children:[Zn," / ",We]})]}),s.jsxs("div",{className:"flex justify-between items-center",children:[s.jsx("span",{className:"text-gray-300",children:"Correct Answers:"}),s.jsx("span",{className:"text-green-400 font-semibold",children:we})]}),s.jsxs("div",{className:"flex justify-between items-center",children:[s.jsx("span",{className:"text-gray-300",children:"Accuracy:"}),s.jsxs("span",{className:"text-blue-400 font-semibold",children:[Zn>0?Math.round(we/Zn*100):0,"%"]})]}),s.jsx("div",{className:"border-t border-gray-600 pt-3 mt-3",children:s.jsxs("div",{className:"flex justify-between items-center",children:[s.jsx("span",{className:"text-yellow-300 flex items-center gap-1",children:"🪙 Coins Earned:"}),s.jsx("span",{className:"text-yellow-400 font-bold text-lg",children:G})]})})]}),s.jsx("button",{onClick:vo,className:"w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 py-3 rounded-xl font-medium transition-colors",children:"Continue"})]})}),B&&s.jsx("div",{className:"fixed inset-0 bg-black/75 flex items-center justify-center z-50 p-4",children:s.jsxs("div",{className:"bg-gray-800 rounded-3xl p-6 max-w-sm w-full text-center border border-gray-700",children:[s.jsx("div",{className:"text-4xl mb-4",children:"🤔"}),s.jsx("h3",{className:"text-xl font-bold mb-2",children:"Leave Quiz?"}),s.jsx("p",{className:"text-gray-400 mb-6",children:"Your progress will be lost"}),s.jsxs("div",{className:"flex gap-3",children:[s.jsx("button",{onClick:()=>ne(!1),className:"flex-1 bg-blue-600 hover:bg-blue-700 py-3 rounded-xl font-medium",children:"Stay"}),s.jsx("button",{onClick:a,className:"flex-1 bg-gray-700 hover:bg-gray-600 py-3 rounded-xl font-medium",children:"Leave"})]})]})}),$&&!se&&s.jsx("div",{className:"fixed inset-0 bg-black/75 flex items-center justify-center z-50 p-4",children:s.jsxs("div",{className:"bg-gray-800 rounded-3xl p-6 max-w-sm w-full text-center border border-gray-700",children:[s.jsx("div",{className:"text-4xl mb-4",children:"🏆"}),s.jsx("h3",{className:"text-xl font-bold mb-2",children:"Ready to finish?"}),s.jsxs("p",{className:"text-gray-400 mb-4",children:[Zn," of ",We," answered • ",yo," skipped"]}),xe&&s.jsx("div",{className:"bg-gradient-to-r from-yellow-600/20 to-orange-600/20 p-4 rounded-2xl mb-6 border border-yellow-600/30",children:s.jsxs("div",{className:"flex justify-center gap-6",children:[s.jsxs("div",{className:"text-center",children:[s.jsx("div",{className:"text-2xl mb-1",children:"⭐"}),s.jsx("div",{className:"text-yellow-400 font-bold",children:X}),s.jsx("div",{className:"text-xs text-gray-400",children:"Stars"})]}),s.jsxs("div",{className:"text-center",children:[s.jsx("div",{className:"text-2xl mb-1",children:"🪙"}),s.jsx("div",{className:"text-yellow-400 font-bold",children:le}),s.jsx("div",{className:"text-xs text-gray-400",children:"Coins"})]})]})}),s.jsxs("div",{className:"flex gap-3",children:[s.jsx("button",{onClick:()=>{re(!1),f(null),S(Date.now())},className:"flex-1 bg-gray-700 hover:bg-gray-600 py-3 rounded-xl font-medium",children:"Back"}),s.jsx("button",{onClick:ue=>{ue.preventDefault(),ue.stopPropagation(),console.log("Submit button clicked"),go()},className:"flex-1 bg-green-600 hover:bg-green-700 py-3 rounded-xl font-medium",children:"Submit"})]})]})}),g===l&&!$&&s.jsx("div",{className:"fixed inset-0 bg-black/75 flex items-center justify-center z-50 p-4",children:s.jsxs("div",{className:"bg-gray-800 rounded-3xl p-6 max-w-sm w-full text-center border border-gray-700",children:[s.jsx("div",{className:"text-4xl mb-4 animate-pulse",children:"⏰"}),s.jsx("h3",{className:"text-xl font-bold mb-2",children:"Time's Up!"}),s.jsx("p",{className:"text-gray-400 mb-6",children:"Let's move to the next question"}),s.jsx("button",{onClick:()=>{f(null),S(Date.now()),l<ke.length-1?Jn():re(!0)},className:"w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-xl font-medium",children:l<ke.length-1?"Continue":"See Results"})]})}),fe&&s.jsx("div",{className:"fixed top-20 left-1/2 transform -translate-x-1/2 bg-red-600 text-white px-4 py-2 rounded-full font-medium animate-bounce z-50",children:fe}),s.jsx("style",{jsx:!0,children:`
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
        `})]})},Wr=[{name:"GK",slug:"general-knowledge",questions:50,icon:"🧠",color:"#FF6B6B",gradient:"from-red-500 to-pink-500"},{name:"Science",slug:"science",questions:45,icon:"🧪",color:"#4ECDC4",gradient:"from-cyan-500 to-teal-500"},{name:"Fun Facts",slug:"fun-facts",questions:30,icon:"🎉",color:"#FFD93D",gradient:"from-yellow-400 to-orange-500"},{name:"History",slug:"history",questions:42,icon:"🏺",color:"#A8E6CF",gradient:"from-green-400 to-emerald-500"},{name:"AI & Tech",slug:"artificial-intelligence",questions:28,icon:"🤖",color:"#C7B8FF",gradient:"from-purple-400 to-indigo-500"},{name:"Geography",slug:"geography",questions:38,icon:"🗺️",color:"#FACC15",gradient:"from-yellow-400 to-amber-500"},{name:"Computer",slug:"computer",questions:34,icon:"💻",color:"#3B82F6",gradient:"from-blue-400 to-blue-600"},{name:"Aptitude",slug:"aptitude",questions:36,icon:"📐",color:"#EC4899",gradient:"from-pink-500 to-rose-500"},{name:"Iconic Figures",slug:"iconic-figures",questions:26,icon:"🌟",color:"#8B5CF6",gradient:"from-purple-500 to-violet-600"}],Wx=()=>s.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:s.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5l7 7-7 7"})}),Qx=()=>s.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:s.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"})}),Hx=()=>s.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:s.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"})}),Yx=()=>s.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:s.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"})}),Vx=()=>s.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:s.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"})}),Gx=()=>s.jsx("svg",{className:"w-3 h-3",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:s.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 10V3L4 14h7v7l9-11h-7z"})}),Kx=({results:e={correct:8,total:10,category:"general-knowledge",mode:"quiz",elapsedMs:125e3,questions:[]},onRetake:t=()=>{},onReview:n=()=>{},onNavigate:r=(u,m)=>{},isRetake:i=!1,isPractice:o=!1,player:a={level:1,coins:0,combo:0,energy:5},categories:l=[],addCoins:c=()=>{}})=>{const[u,m]=d.useState(a.coins),x=d.useRef(null),[p,w]=d.useState(null),[y]=It("/sounds/coin.mp3",{volume:.75}),[j,C]=d.useState(!1),[g,f]=d.useState(!1),[h,S]=d.useState(0),[_,L]=d.useState(!1),[N,v]=d.useState(!1),{correct:b,total:k,category:E,categorySlug:I,difficulty:H,mode:te,elapsedMs:D}=e,q=k?Math.round(b/k*100):0,Q=q===100,R=q>=80,T=Math.floor(D/1e3),M=k>0?Math.floor(T/k):0,z=o?e.earnedCoins||0:Math.round(b*5*(Q?1.5:R?1.2:1)),O=Wr.find(F=>F.slug===E)||Wr[0],re=(()=>Q?{emoji:"🏆",text:"Perfect!",color:"text-yellow-400"}:q>=90?{emoji:"🌟",text:"Excellent!",color:"text-purple-400"}:q>=80?{emoji:"✨",text:"Great job!",color:"text-blue-400"}:q>=70?{emoji:"👍",text:"Good effort!",color:"text-green-400"}:q>=60?{emoji:"💪",text:"Keep going!",color:"text-orange-400"}:{emoji:"📚",text:"Keep practicing!",color:"text-gray-400"})();d.useEffect(()=>{!p&&!j&&m(a.coins)},[a.coins,p,j]),d.useEffect(()=>{z>0&&!j&&!N&&x.current&&setTimeout(()=>{x.current.getBoundingClientRect(),y==null||y(),w({startRect:{left:window.innerWidth/2-50,top:window.innerHeight/2,width:100,height:100},count:Math.min(z,10),amount:z}),C(!0)},500)},[z,o,j,y]),d.useEffect(()=>{(Q||R)&&(f(!0),setTimeout(()=>f(!1),3e3));let F=0;const Y=b/20,V=setInterval(()=>{F+=Y,F>=b?(S(b),clearInterval(V)):S(Math.floor(F))},50);return()=>clearInterval(V)},[b,Q,R]);const B=[{score:7,total:10},{score:6,total:10},{score:8,total:10},{score:9,total:10},{score:b,total:k}],ne=()=>{try{const F=localStorage.getItem("qp_recent");if(F)return JSON.parse(F).slice(0,10).map(V=>V.slug||V.cat).filter(V=>V&&V!==e.categorySlug)}catch(F){console.error("Error reading recent categories:",F)}return[]},fe=()=>{const F=I||E,Y=H||"medium",V=ne(),J=(l||Wr||[]).filter(se=>se.slug!==F&&!V.slice(0,3).includes(se.slug)),Z=(()=>{if(J.length===0){const se=(l||Wr||[]).filter(U=>U.slug!==F);return se[Math.floor(Math.random()*se.length)]||(l||Wr)[0]}return J[Math.floor(Math.random()*J.length)]})();if(q<60)return o?[{icon:"🎯",title:"Try Fewer Questions",desc:"Start with just 5",color:"from-blue-500 to-cyan-500",action:()=>r(`/quiz/${F}`,{mode:"practice",difficulty:"easy",count:5,timer:{type:"off",seconds:0}})},{icon:Z.icon,title:Z.name,desc:"Fresh start with new topic",color:Z.gradient,action:()=>r(`/quiz/${Z.slug}`,{mode:"practice",difficulty:"easy",count:10,timer:{type:"off",seconds:0}})},{icon:"📖",title:"Review Mistakes",desc:"Learn from errors",color:"from-purple-500 to-pink-500",action:()=>n()}]:[{icon:"📚",title:"Practice Mode",desc:"No timer, learn at your pace",color:"from-green-500 to-teal-500",action:()=>r(`/quiz/${F}`,{mode:"practice",difficulty:"easy",count:10,timer:{type:"off",seconds:0}})},{icon:Y!=="easy"?"🎯":"🔄",title:Y!=="easy"?"Easy Mode":"Try Again",desc:Y!=="easy"?"Build confidence":"You can do this!",color:"from-blue-500 to-cyan-500",action:()=>Y!=="easy"?r(`/quiz/${F}`,{mode:"quiz",difficulty:"easy",count:5,timer:{type:"per_q",seconds:60}}):t()},{icon:Z.icon,title:Z.name,desc:"Try something different",color:Z.gradient,action:()=>r(`/quiz/${Z.slug}`,{mode:"quiz",difficulty:"easy",count:10,timer:{type:"per_q",seconds:45}})}];if(q>=80)return Y==="hard"&&q>=90?[{icon:"⚡",title:"Lightning Round",desc:"20 questions, 10s each",color:"from-yellow-500 to-red-500",action:()=>r(`/quiz/${F}`,{mode:"quiz",difficulty:"hard",count:20,timer:{type:"per_q",seconds:10}})},{icon:Z.icon,title:`${Z.name} Challenge`,desc:"Hard mode, new topic",color:Z.gradient,action:()=>r(`/quiz/${Z.slug}`,{mode:"quiz",difficulty:"hard",count:15,timer:{type:"per_q",seconds:30}})},{icon:"🎲",title:"Mixed Categories",desc:"Test all your knowledge",color:"from-purple-500 to-indigo-500",action:()=>r("/quiz/mixed",{mode:"quiz",difficulty:"hard",count:20,timer:{type:"per_q",seconds:30}})}]:[{icon:Y==="hard"?"🔥":"🎯",title:Y==="hard"?"Perfect Score Challenge":"Hard Mode",desc:Y==="hard"?"Can you get 100%?":"Level up your skills",color:"from-red-500 to-orange-500",action:()=>r(`/quiz/${F}`,{mode:"quiz",difficulty:"hard",count:Y==="hard"?10:20,timer:{type:"per_q",seconds:30}})},{icon:Z.icon,title:Z.name,desc:"Master new topics",color:Z.gradient,action:()=>r(`/quiz/${Z.slug}`,{mode:"quiz",difficulty:Y,count:10,timer:{type:"per_q",seconds:45}})},{icon:"⚡",title:"Speed Challenge",desc:"10 questions, 15s each",color:"from-purple-500 to-pink-500",action:()=>r(`/quiz/${F}`,{mode:"quiz",difficulty:"medium",count:10,timer:{type:"per_q",seconds:15}})}];{const se=q<70;return[{icon:se?"📚":"🎯",title:se?"Practice More":"Try Again",desc:se?"Improve accuracy":"Beat your score",color:se?"from-green-500 to-teal-500":"from-blue-500 to-purple-500",action:se?()=>r(`/quiz/${F}`,{mode:"practice",difficulty:Y,count:10,timer:{type:"off",seconds:0}}):()=>t()},{icon:Z.icon,title:Z.name,desc:"Explore new topics",color:Z.gradient,action:()=>r(`/quiz/${Z.slug}`,{mode:"quiz",difficulty:"medium",count:10,timer:{type:"per_q",seconds:45}})},{icon:Y==="easy"?"⬆️":"💪",title:Y==="easy"?"Medium Difficulty":"More Questions",desc:Y==="easy"?"Ready for more?":"Test endurance",color:"from-indigo-500 to-purple-500",action:()=>r(`/quiz/${F}`,{mode:"quiz",difficulty:Y==="easy"?"medium":Y,count:Y==="easy"?10:20,timer:{type:"per_q",seconds:45}})}]}},P=it.useMemo(()=>fe(),[q,o,e.categorySlug,e.difficulty]);return s.jsxs("div",{className:"min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white p-4",children:[p&&s.jsx(Vl,{startRect:p.startRect,targetRef:x,count:p.count,onDone:()=>{p.amount>0&&!N&&(console.log("[QuizResults] Adding coins once:",p.amount),c(p.amount),v(!0),m(a.coins+p.amount)),w(null)}}),s.jsx("style",{children:`
        @keyframes coinRotate {
          from { transform: rotateY(0deg); }
          to { transform: rotateY(360deg); }
        }
      `}),g&&s.jsx("div",{className:"fixed inset-0 pointer-events-none z-50 flex items-center justify-center",children:s.jsx("div",{className:"text-8xl animate-bounce",children:Q?"🎉":"⭐"})}),s.jsxs("div",{className:"flex justify-between items-center mb-6",children:[s.jsx("button",{onClick:()=>r("/"),className:"p-2 rounded-xl bg-white/10 backdrop-blur hover:bg-white/20 transition-all",children:s.jsx(Qx,{})}),s.jsxs("div",{className:"flex gap-2",children:[s.jsxs("div",{className:"px-3 py-1.5 rounded-full bg-white/10 backdrop-blur text-sm font-medium",children:["Level ",a.level]}),s.jsxs("button",{ref:x,onClick:()=>L(!0),className:"px-3 py-1.5 rounded-full bg-yellow-500/20 backdrop-blur text-sm font-medium text-yellow-300 hover:bg-yellow-500/30 transition-all cursor-pointer",children:[u," 🪙"]})]})]}),s.jsxs("div",{className:"relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 p-8 mb-6",children:[s.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-blue-500/10 animate-pulse"}),s.jsxs("div",{className:"relative text-center",children:[s.jsxs("div",{className:`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur mb-4 ${re.color}`,children:[s.jsx("span",{className:"text-2xl",children:re.emoji}),s.jsx("span",{className:"font-semibold",children:re.text})]}),s.jsxs("div",{className:"mb-6",children:[s.jsxs("div",{className:"text-7xl font-bold mb-2 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent",children:[h,"/",k]}),s.jsxs("div",{className:"flex items-center justify-center gap-2 text-sm text-white/60",children:[s.jsx("span",{className:"text-xl",children:O.icon}),s.jsx("span",{children:O.name})]})]}),s.jsxs("div",{className:"grid grid-cols-3 gap-4 max-w-md mx-auto",children:[s.jsxs("div",{className:"text-center",children:[s.jsxs("div",{className:"text-3xl font-bold",children:[q,"%"]}),s.jsx("div",{className:"text-xs text-white/60",children:"Accuracy"})]}),s.jsxs("div",{className:"text-center",children:[s.jsxs("div",{className:"text-3xl font-bold",children:[M,"s"]}),s.jsx("div",{className:"text-xs text-white/60",children:"Avg Speed"})]}),s.jsxs("div",{className:"text-center",children:[s.jsx("div",{className:"text-3xl font-bold text-yellow-400",children:z>0?`+${z}`:"0"}),s.jsx("div",{className:"text-xs text-white/60",children:"Coins"})]})]})]})]}),s.jsxs("div",{className:"rounded-2xl bg-white/5 backdrop-blur border border-white/10 p-4 mb-6",children:[s.jsxs("div",{className:"flex items-center justify-between mb-3",children:[s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx(Vx,{}),s.jsx("span",{className:"text-sm font-medium",children:"Your Progress"})]}),a.combo>0&&s.jsxs("div",{className:"flex items-center gap-1 px-2 py-1 rounded-full bg-orange-500/20 text-orange-400 text-xs",children:[s.jsx(Gx,{}),a.combo," streak"]})]}),s.jsx("div",{className:"flex items-end gap-1 h-12 mb-2",children:B.map((F,Y)=>s.jsx("div",{className:`flex-1 rounded-t transition-all ${Y===B.length-1?"bg-gradient-to-t from-purple-500 to-purple-400":"bg-white/20"}`,style:{height:`${F.score/F.total*100}%`,minHeight:"4px"}},Y))}),s.jsx("div",{className:"text-xs text-white/40 text-center",children:"Last 5 quizzes"})]}),s.jsxs("div",{className:"grid grid-cols-2 gap-3 mb-6",children:[s.jsxs("button",{onClick:n,className:"relative overflow-hidden group rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 p-4 transition-all hover:scale-105 active:scale-95",children:[s.jsx("div",{className:"absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform"}),s.jsxs("div",{className:"relative flex items-center justify-between",children:[s.jsxs("div",{className:"text-left",children:[s.jsx("div",{className:"font-semibold",children:"Review"}),s.jsx("div",{className:"text-xs opacity-80",children:"Check answers"})]}),s.jsx(Yx,{})]})]}),s.jsx("button",{onClick:t,className:"relative overflow-hidden group rounded-2xl bg-white/10 backdrop-blur border border-white/20 p-4 transition-all hover:scale-105 active:scale-95 hover:bg-white/15",children:s.jsxs("div",{className:"flex items-center justify-between",children:[s.jsxs("div",{className:"text-left",children:[s.jsx("div",{className:"font-semibold",children:"Try Again"}),s.jsx("div",{className:"text-xs opacity-60",children:"New questions"})]}),s.jsx(Hx,{})]})})]}),s.jsxs("div",{className:"space-y-3",children:[s.jsx("div",{className:"text-sm font-medium text-white/60 px-1",children:"Recommended for you"}),P.map((F,Y)=>s.jsx("button",{onClick:F.action,className:"w-full group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur border border-white/10 p-4 transition-all hover:bg-white/10 hover:border-white/20",children:s.jsxs("div",{className:"flex items-center justify-between",children:[s.jsxs("div",{className:"flex items-center gap-3",children:[s.jsx("div",{className:`p-2 rounded-xl bg-gradient-to-r ${F.color} opacity-20 group-hover:opacity-30 transition-opacity`,children:s.jsx("span",{className:"text-xl",children:F.icon})}),s.jsxs("div",{className:"text-left",children:[s.jsx("div",{className:"font-medium text-sm",children:F.title}),s.jsx("div",{className:"text-xs text-white/40",children:F.desc})]})]}),s.jsx(Wx,{})]})},Y))]}),s.jsx("div",{className:"mt-6 pt-6 border-t border-white/10",children:s.jsx("button",{onClick:()=>r("/profile/history",{replace:!0}),className:"w-full text-center text-sm text-white/40 hover:text-white/60 transition-colors",children:"View all history →"})}),_&&s.jsx("div",{className:"fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4",onClick:F=>{F.target===F.currentTarget&&L(!1)},children:s.jsxs("div",{className:"bg-gray-800 rounded-3xl p-6 w-full max-w-md border border-gray-700 relative overflow-hidden",onClick:F=>F.stopPropagation(),children:[s.jsx("div",{className:"absolute inset-0 opacity-10",children:s.jsx("div",{className:"h-full bg-gradient-to-br from-yellow-400 to-orange-500"})}),s.jsxs("div",{className:"relative",children:[s.jsxs("div",{className:"flex items-center justify-between mb-6",children:[s.jsxs("div",{className:"flex items-center gap-3",children:[s.jsx("div",{className:"text-5xl",style:{animation:"coinRotate 2s linear infinite"},children:"🪙"}),s.jsxs("div",{children:[s.jsx("h3",{className:"text-2xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent",children:"Your Treasure"}),s.jsxs("p",{className:"text-3xl font-bold text-white mt-1",children:[a.coins," Coins"]})]})]}),s.jsx("button",{onClick:()=>L(!1),className:"w-8 h-8 rounded-lg bg-white/5 border border-gray-600 grid place-items-center hover:bg-white/10 transition",children:"✕"})]}),s.jsxs("div",{className:"mb-6",children:[s.jsx("h4",{className:"text-sm font-medium text-gray-400 mb-3",children:"Ways to Earn"}),s.jsxs("div",{className:"space-y-3",children:[s.jsx("div",{className:"p-4 rounded-xl bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 hover:scale-[1.02] transition-transform",children:s.jsxs("div",{className:"flex items-center justify-between",children:[s.jsxs("div",{children:[s.jsxs("div",{className:"font-medium flex items-center gap-2",children:[s.jsx("span",{className:"text-2xl",children:"✅"}),"Complete Quizzes"]}),s.jsx("div",{className:"text-xs text-gray-400 mt-1",children:"+5 coins per correct answer"})]}),s.jsx("div",{className:"text-green-400 font-bold",children:"+5"})]})}),s.jsx("div",{className:"p-4 rounded-xl bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 hover:scale-[1.02] transition-transform",children:s.jsxs("div",{className:"flex items-center justify-between",children:[s.jsxs("div",{children:[s.jsxs("div",{className:"font-medium flex items-center gap-2",children:[s.jsx("span",{className:"text-2xl",children:"🎯"}),"Daily Challenge"]}),s.jsx("div",{className:"text-xs text-gray-400 mt-1",children:"Complete daily for bonus"})]}),s.jsx("div",{className:"text-blue-400 font-bold",children:"+5"})]})}),s.jsx("div",{className:"p-4 rounded-xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 hover:scale-[1.02] transition-transform",children:s.jsxs("div",{className:"flex items-center justify-between",children:[s.jsxs("div",{children:[s.jsxs("div",{className:"font-medium flex items-center gap-2",children:[s.jsx("span",{className:"text-2xl",children:"🎰"}),"Spin & Play"]}),s.jsx("div",{className:"text-xs text-gray-400 mt-1",children:"Test your luck!"})]}),s.jsx("div",{className:"text-purple-400 font-bold",children:"+50"})]})}),s.jsx("div",{className:"p-4 rounded-xl bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/20 hover:scale-[1.02] transition-transform",children:s.jsxs("div",{className:"flex items-center justify-between",children:[s.jsxs("div",{children:[s.jsxs("div",{className:"font-medium flex items-center gap-2",children:[s.jsx("span",{className:"text-2xl",children:"🏆"}),"Achievements"]}),s.jsx("div",{className:"text-xs text-gray-400 mt-1",children:"Unlock special rewards"})]}),s.jsx("div",{className:"text-orange-400 font-bold",children:"+???"})]})})]})]}),s.jsxs("div",{className:"mb-6",children:[s.jsxs("div",{className:"flex justify-between text-xs text-gray-400 mb-2",children:[s.jsx("span",{children:"Next reward"}),s.jsxs("span",{children:[100-a.coins%100," coins to go"]})]}),s.jsx("div",{className:"h-2 bg-white/10 rounded-full overflow-hidden",children:s.jsx("div",{className:"h-full bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full transition-all",style:{width:`${a.coins%100}%`}})})]}),s.jsx("button",{onClick:()=>{L(!1),r("/play")},className:"w-full py-3 rounded-xl bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-bold hover:scale-[1.02] transition-transform shadow-lg",children:"Start Earning Now! 🚀"})]})]})})]})},Xx=({questions:e,answers:t,skipped:n,onBack:r,onRetake:i,fromHistory:o=!1})=>{const a=ut(),l=()=>{o?a("/profile/history",{replace:!0}):r?r():a(-1)},c=e.reduce((x,p,w)=>x+(t[w]===p.answerIndex?1:0),0),u=(n==null?void 0:n.filter(Boolean).length)||0,m=e.length-c-u;return s.jsxs("div",{className:"mt-2 card rounded-3xl p-5 w-full max-w-none mx-auto pb-24",children:[s.jsxs("div",{className:"flex items-center justify-between mb-4",children:[s.jsx("button",{className:"px-3 py-1.5 rounded-xl border border-base-border bg-white/5",onClick:l,children:"← Back"}),s.jsx("h2",{className:"text-lg font-semibold",children:"Review Answers"}),s.jsx("div",{className:"w-16"})," "]}),s.jsxs("div",{className:"grid grid-cols-3 gap-2 mb-4",children:[s.jsxs("div",{className:"rounded-xl bg-green-600/10 border border-green-500/30 p-2 text-center",children:[s.jsx("div",{className:"text-xs text-green-400",children:"Correct"}),s.jsx("div",{className:"text-lg font-bold text-green-400",children:c})]}),s.jsxs("div",{className:"rounded-xl bg-red-600/10 border border-red-500/30 p-2 text-center",children:[s.jsx("div",{className:"text-xs text-red-400",children:"Incorrect"}),s.jsx("div",{className:"text-lg font-bold text-red-400",children:m})]}),s.jsxs("div",{className:"rounded-xl bg-amber-600/10 border border-amber-500/30 p-2 text-center",children:[s.jsx("div",{className:"text-xs text-amber-400",children:"Skipped"}),s.jsx("div",{className:"text-lg font-bold text-amber-400",children:u})]})]}),s.jsx("ol",{className:"space-y-4",children:e.map((x,p)=>{const w=t[p],y=!w&&w!==0,j=w===x.answerIndex;return s.jsxs("li",{className:"rounded-2xl border border-base-border bg-white/5 p-4 md:p-5",children:[s.jsxs("div",{className:"flex items-start justify-between mb-3",children:[s.jsxs("div",{className:"flex-1",children:[s.jsxs("div",{className:"text-sm md:text-base font-medium",children:["Q",p+1,". ",x.prompt]}),x.category&&s.jsxs("div",{className:"text-xs text-base-muted mt-1",children:["Category: ",x.category," • Difficulty: ",x.difficulty||"Medium"]})]}),s.jsx("div",{className:"ml-2",children:y?s.jsx("span",{className:"px-2 py-1 rounded text-xs bg-amber-600/20 text-amber-400",children:"Skipped"}):j?s.jsx("span",{className:"px-2 py-1 rounded text-xs bg-green-600/20 text-green-400",children:"✓ Correct"}):s.jsx("span",{className:"px-2 py-1 rounded text-xs bg-red-600/20 text-red-400",children:"✗ Wrong"})})]}),s.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-3",children:x.options.map((C,g)=>{const f=w===g,h=g===x.answerIndex;let S="w-full text-left px-3 py-2 rounded-xl border transition-all ";return h?S+="bg-green-600/20 border-green-500/50 text-green-300":f&&!h?S+="bg-red-600/20 border-red-500/50 text-red-300":S+="bg-base-bg/40 border-base-border text-base-muted",s.jsxs("div",{className:S,children:[s.jsxs("span",{className:"font-semibold mr-2",children:[["A","B","C","D"][g],"."]}),C,h&&s.jsx("span",{className:"ml-2 text-green-400",children:"✓"}),f&&!h&&s.jsx("span",{className:"ml-2 text-red-400",children:"✗"})]},g)})}),x.explanation&&s.jsxs("div",{className:"mt-3 p-3 rounded-xl bg-white/5 border border-base-border",children:[s.jsx("div",{className:"text-xs font-semibold text-brand-blue mb-1",children:"Explanation:"}),s.jsx("div",{className:"text-sm text-base-muted",children:x.explanation})]})]},x.id||p)})}),s.jsxs("div",{className:"mt-6 flex gap-2 justify-center sticky bottom-4",children:[s.jsx("button",{className:"px-4 py-2.5 rounded-xl border border-base-border bg-base-card backdrop-blur",onClick:l,children:"Back to Results"}),i&&s.jsx("button",{className:"px-4 py-2.5 rounded-xl bg-gradient-to-r from-brand-blue to-brand-purple text-white font-medium",onClick:i,children:"Retake Quiz"})]})]})},Jx="qp_resume",wu="qp_mistakes",ju="qp_stats",ku="qp_lastset",Nu="qp_recent",Su="qp_review_snapshot",Zx=50,Qr=(e="")=>e.replace(/-/g," ").replace(/\b\w/g,t=>t.toUpperCase()),ji=(e="")=>e.toLowerCase().trim().replace(/[^\w\s-]/g,"").replace(/\s+/g,"-"),eg=(e,t)=>e.slice().sort(()=>Math.random()-.5).slice(0,t),f0=e=>{const t=e.slice();for(let n=t.length-1;n>0;n--){const r=Math.floor(Math.random()*(n+1));[t[n],t[r]]=[t[r],t[n]]}return t},tg=(e,t,n)=>Math.max(t,Math.min(n,e)),Hr=(e,t)=>{try{const n=localStorage.getItem(e);return n?JSON.parse(n):t}catch{return t}};async function ng(){const e="/data/quiz_questions_bank.csv",t=await fetch(e);if(!t.ok)throw new Error(`CSV not found at ${e}`);const n=await t.text(),{data:r}=Ls.parse(n,{header:!0,skipEmptyLines:!0,transformHeader:o=>String(o).trim().toLowerCase()}),i={a:0,b:1,c:2,d:3};return r.map((o,a)=>{var p;const l=[o.option1,o.option2,o.option3,o.option4].map(w=>(w??"").trim());if(l.some(w=>!w))return null;let c=-1;const u=String(o.answer??"").trim();if(i[u.toLowerCase()]!==void 0)c=i[u.toLowerCase()];else{const w=l.findIndex(y=>y.toLowerCase()===u.toLowerCase());c=w>=0?w:0}const m=String(o.category??o.subject??"General Knowledge").trim(),x=String(o.difficulty??"medium").toLowerCase().trim();return{id:((p=o.id)==null?void 0:p.trim())||`q_${a}`,category:m,difficulty:x,prompt:String(o.question??"").trim(),options:l,answerIndex:c,explanation:String(o.explanation??"").trim()}}).filter(Boolean)}function rg(e,{categorySlug:t,difficulty:n,count:r}){console.log("=== BUILD SESSION DEBUG ==="),console.log("categorySlug:",t),console.log("difficulty:",n),console.log("count:",r),console.log("Total questions available:",e.length);const o=t==="mixed"?()=>!0:m=>ji(m.category)===t,a=n?m=>(m.difficulty||"medium")===n:()=>!0,l=e.filter(m=>o(m)&&a(m));if(console.log("Filtered pool size:",l.length),console.log("Sample categories from all questions:",[...new Set(e.slice(0,10).map(m=>`"${m.category}" -> "${ji(m.category)}"`))]),l.length===0)return console.error("No questions match the filter criteria!"),console.log("Available categories:",[...new Set(e.map(m=>ji(m.category)))]),{questions:[],poolSize:0};const u=eg(l,Math.min(r,l.length)).map(m=>{const x=f0([0,1,2,3]),p=x.map(y=>m.options[y]),w=x.indexOf(m.answerIndex);return{...m,options:p,answerIndex:w}});return console.log("Final questions:",u.length),{questions:u,poolSize:l.length}}function sg(){const e=ut(),{category:t}=jh(),n=Bt(),{energy:r,useEnergy:i,player:o,addCoins:a,addXP:l,updateDailyStreak:c}=un(),u=new URLSearchParams(n.search),m=u.get("review")==="1",x=u.get("retake")==="1",p=n.state||{},w=p.mode||"quiz",y=String(p.difficulty||"medium").toLowerCase(),j=tg(Number(p.count||10),1,50),C=p.timer||{type:"per_q",seconds:45};p.resume,p.daily,p.source;const g=x||!!p.retake,f=!!p.fromHistory,h=w==="practice";console.log("Quiz Component - Mode Detection:",{routerState:p,mode:w,isPractice:h,location:n.pathname,state:n.state});const[S,_]=d.useState([]),[L,N]=d.useState(!0),[v,b]=d.useState(""),[k,E]=d.useState({questions:[]}),[I,H]=d.useState("quiz"),[te,D]=d.useState(null),[q,Q]=d.useState(null),[R,T]=d.useState(0);d.useEffect(()=>{let B=!0;return(async()=>{try{const ne=await ng();if(!B)return;_(ne)}catch(ne){console.error(ne),b("Failed to load questions. Check /public/data/quiz_questions_bank.csv")}finally{N(!1)}})(),()=>{B=!1}},[]),d.useEffect(()=>{if(L||v||m||S.length===0)return;console.log("=== SESSION INIT ==="),console.log("Category:",t),console.log("Mode:",w),console.log("Difficulty:",y),console.log("Count:",j);const B=rg(S,{categorySlug:t,difficulty:y,count:j});if(B.questions.length===0){console.error("No questions found!"),console.log("Looking for category:",t),console.log("Available categories (first 10):",[...new Set(S.map(ne=>ji(ne.category)))].slice(0,10)),b(`No questions found for "${Qr(t)}" with difficulty "${y}"`);return}console.log("Session built with",B.questions.length,"questions"),E(B),Q(Date.now()),T(0),H("quiz")},[S,t,w,y,j,n.state,n.search]),d.useEffect(()=>{if(I!=="quiz"||!q)return;const B=setInterval(()=>{T(Date.now()-q)},1e3);return()=>clearInterval(B)},[I,q]);const M=d.useCallback(B=>{if(console.log("Quiz completed - Mode:",w,"isPractice:",h,"Results:",B),!B||!B.questions){console.error("Invalid results object:",B);return}const ne=B.questions.filter((P,F)=>B.answers[F]!==null&&B.answers[F]!==P.answerIndex).map(P=>P.id);try{const P=Hr(wu,[]),F=Array.from(new Set([...ne,...P]));localStorage.setItem(wu,JSON.stringify(F))}catch(P){console.error("Error saving mistakes:",P)}try{const P=Hr(ju,{sessions:[]});P.sessions.push({cat:Qr(t),mode:h?"practice":"quiz",total:B.total,correct:B.correct,skipped:B.skipped.filter(Boolean).length,ms:R,timestamp:Date.now(),earnedXP:h?0:B.correct*10,earnedCoins:h?0:B.correct*5}),localStorage.setItem(ju,JSON.stringify(P))}catch(P){console.error("Error saving stats:",P)}const fe={ts:Date.now(),slug:t,categoryLabel:Qr(t),mode:h?"practice":"quiz",difficulty:y,total:B.total,timer:h?null:C,ms:R,attempted:B.answers.filter(P=>P!==null).length,correct:B.correct,questions:B.questions,answers:B.answers,skipped:B.skipped,isPractice:h};try{localStorage.setItem(ku,JSON.stringify(fe)),localStorage.setItem(Su,JSON.stringify({questions:B.questions,answers:B.answers,skipped:B.skipped}));const P=Hr(Nu,[]),Y=[{id:fe.ts,ts:fe.ts,cat:fe.categoryLabel,slug:t,mode:h?"Practice":"Quiz",total:B.total,correct:B.correct,ms:R,snapshot:fe},...P].slice(0,Zx);localStorage.setItem(Nu,JSON.stringify(Y))}catch(P){console.error("Error saving snapshot:",P)}if(localStorage.removeItem(Jx),h&&B.earnedCoins?B.earnedCoins:!h&&B.correct>0&&B.correct*5,!h&&B.correct>0){const P=B.correct*10;l(P)}c(),D({...B,category:Qr(t),categorySlug:t,difficulty:y,mode:h?"practice":"quiz",elapsedMs:R,isPractice:h,hasTimer:!h,earnedXP:h?0:B.correct*10,earnedCoins:h?B.earnedCoins||0:B.correct*5}),H("results")},[t,w,C,R,h]),z=d.useCallback(()=>{f?e("/profile/history",{replace:!0,state:null}):e("/")},[f,e]),O=d.useCallback(()=>{console.log("Retake requested - Mode:",w,"isPractice:",h);const B=Hr(ku,null);if(!B||B.slug!==t){e(`/quiz/${t}?r=${Date.now()}`,{replace:!0,state:{mode:h?"practice":"quiz",difficulty:y,count:j,timer:h?null:C,retake:!0}});return}const ne=B.questions.map(fe=>{const P=f0([0,1,2,3]);return{...fe,options:P.map(F=>fe.options[F]),answerIndex:P.indexOf(fe.answerIndex)}});E({questions:ne,poolSize:ne.length}),Q(Date.now()),T(0),H("quiz"),window.scrollTo(0,0)},[t,w,y,j,C,e,h]),$=d.useCallback((B=null)=>{if(B)D(B);else if(!te){const ne=Hr(Su,null);ne&&D({questions:ne.questions||[],answers:ne.answers||[],skipped:ne.skipped||[]})}H("review")},[te]),re=d.useCallback(()=>{f?e("/profile/history",{replace:!0}):H("results")},[f,e]);return L?s.jsx("div",{className:"fixed inset-0 bg-inherit text-white flex items-center justify-center",children:s.jsx("div",{className:"text-sm text-base-muted",children:"Loading questions…"})}):v?s.jsx("div",{className:"fixed inset-0 bg-inherit text-white flex items-center justify-center",children:s.jsx("div",{className:"text-sm text-red-400",children:v})}):(console.log("Render - Current view:",I,"Session questions:",k.questions.length,"Mode:",w,"isPractice:",h),s.jsx("div",{className:"fixed inset-0 bg-inherit text-white z-0 overflow-x-hidden max-w-[100vw]",children:s.jsxs("div",{className:"h-full overflow-y-auto overscroll-y-none overflow-x-hidden touch-pan-y px-0 pt-[max(env(safe-area-inset-top),72px)] pb-[clamp(12px,env(safe-area-inset-bottom),20px)]",children:[I==="quiz"&&k.questions.length>0&&s.jsx(qx,{session:k,mode:h?"practice":"quiz",category:Qr(t),difficulty:y,timerConfig:h?null:C,onComplete:M,onQuit:z,isPractice:h}),I==="results"&&te&&s.jsx(Kx,{results:te,onRetake:O,onReview:()=>$(te),isRetake:g,isPractice:h,player:o,categories:c0,addCoins:a,onNavigate:(B,ne)=>{ne!=null&&ne.replace?e(B,{replace:!0,state:ne}):e(B,{state:ne})}}),I==="review"&&te&&s.jsx(Xx,{questions:te.questions||[],answers:te.answers||[],skipped:te.skipped||[],onBack:re,onRetake:O,fromHistory:f,isPractice:h})]})}))}const pn=[{label:"General Knowledge",slug:"general-knowledge",color:"#7C3AED",soon:!1},{label:"Current Affairs",slug:"current-affairs",color:"#2563EB",soon:!1},{label:"Fun Facts",slug:"fun-facts",color:"#EF4444",soon:!1},{label:"Science",slug:"science",color:"#10B981",soon:!1},{label:"History",slug:"history",color:"#F59E0B",soon:!0},{label:"Geography",slug:"geography",color:"#FACC15",soon:!0},{label:"Cat 1",slug:"cat-1",color:"#06B6D4",soon:!0},{label:"Cat 2",slug:"cat-2",color:"#D946EF",soon:!0}],Fn=360/pn.length,ig=42,Go=3e3,Cu=10,Eu=260,og="cubic-bezier(.15,.7,.1,1)",ag="cubic-bezier(.2,.7,.2,1)",mn=5,lg=5,cg=(e="")=>String(e).toLowerCase().trim().replace(/[^\w\s-]/g,"").replace(/\s+/g,"-");function ug({muted:e=!1,size:t=18}){return s.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24","aria-hidden":"true",children:[s.jsx("path",{d:"M3 9h4l5-4v14l-5-4H3z",fill:"currentColor"}),!e&&s.jsxs(s.Fragment,{children:[s.jsx("path",{d:"M16 8c1.5 1.5 1.5 6 0 7.5",stroke:"currentColor",strokeWidth:"2",fill:"none",strokeLinecap:"round"}),s.jsx("path",{d:"M19 6c3 3 3 10 0 13",stroke:"currentColor",strokeWidth:"2",fill:"none",strokeLinecap:"round"})]}),e&&s.jsx("line",{x1:"3",y1:"21",x2:"21",y2:"3",stroke:"#EF4444",strokeWidth:"2.5",strokeLinecap:"round"})]})}function dg({q:e,locked:t,onPick:n,result:r}){if(!e)return null;const i=[e.option1,e.option2,e.option3,e.option4];return s.jsxs("div",{className:"mt-5 rounded-3xl bg-white/5 border border-white/10 p-4",children:[s.jsx("div",{className:"text-sm text-base-muted mb-1",children:"Quick question"}),s.jsx("div",{className:"text-xl font-semibold mb-4",children:e.question}),i.map((o,a)=>{const l=r&&o===e.answer,c=r&&r.pick===o&&o!==e.answer;return s.jsx("button",{disabled:t||!!r,onClick:()=>n(o),className:["w-full text-left px-4 py-2 rounded-xl mb-2 border transition",!r&&!t?"bg-white/5 hover:bg-white/10 border-white/10":"bg-white/5 border-white/10",l?"bg-green-600/20 border-green-400/60 text-green-200":"",c?"bg-red-600/20 border-red-400/60 text-red-200":""].join(" "),children:o},a)}),r&&s.jsxs("div",{className:"mt-3 text-sm",children:[r.correct?s.jsx("span",{className:"text-green-400 font-medium",children:"✅ Correct!"}):s.jsxs("span",{className:"text-red-400 font-medium",children:["❌ Not quite. Answer: ",s.jsx("b",{children:e.answer})]}),e.explanation&&s.jsxs("div",{className:"text-xs text-base-muted mt-1",children:["Tip: ",e.explanation]})]})]})}function fg(){const e=ut(),[t]=It("/sounds/correct.mp3",{volume:.7}),[n]=It("/sounds/wrong.mp3",{volume:.7}),[r,i]=d.useState(()=>[{name:"Player 1",color:"#60A5FA",scores:Array(mn).fill(null)},{name:"Player 2",color:"#F472B6",scores:Array(mn).fill(null)}]),[o,a]=d.useState(0),[l,c]=d.useState(1),u=r.reduce((P,F)=>P+F.scores.reduce((Y,V)=>Y+(V??0),0),0),[m,x]=d.useState(!0),p=d.useRef(null);d.useEffect(()=>{const P=new Audio("/sounds/spin.mp3");return P.loop=!0,P.volume=.7,p.current=P,()=>{try{P.pause(),P.src=""}catch{}}},[]);const w=()=>{if(m&&p.current)try{p.current.currentTime=0,p.current.play()}catch{}},y=()=>{if(p.current)try{p.current.pause(),p.current.currentTime=0}catch{}},[j,C]=d.useState(0),[g,f]=d.useState("none"),[h,S]=d.useState(!1),[_,L]=d.useState(null),[N,v]=d.useState(null),b=d.useMemo(()=>typeof window<"u"?window.matchMedia("(prefers-reduced-motion: reduce)").matches:!1,[]),[k,E]=d.useState([]);d.useEffect(()=>{(async()=>{try{const P=await fetch("/data/quiz_questions_bank.csv").then(J=>J.text()),{data:F}=Ls.parse(P,{header:!0,skipEmptyLines:!0,transformHeader:J=>String(J).trim().toLowerCase()}),Y={a:0,b:1,c:2,d:3},V=F.map((J,me)=>{var le;const Z=(J.question??"").trim();if(!Z)return null;const se=[J.option1,J.option2,J.option3,J.option4].map(Ee=>String(Ee??"").trim());if(se.some(Ee=>!Ee))return null;let U=String(J.answer??"").trim(),X=Y[U.toLowerCase()];if(X===void 0){const Ee=se.findIndex(Ce=>Ce.toLowerCase()===U.toLowerCase());X=Ee>=0?Ee:0}const ee=se[X];return{id:((le=J.id)==null?void 0:le.trim())||`ps_${me}`,question:Z,option1:se[0],option2:se[1],option3:se[2],option4:se[3],answer:ee,explanation:String(J.explanation??"").trim(),catSlug:cg(J.category??J.subject??"general knowledge"),difficulty:String(J.difficulty??"medium").toLowerCase().trim()}}).filter(Boolean);E(V)}catch{E([])}})()},[]);const[I,H]=d.useState(null),[te,D]=d.useState(null),[q,Q]=d.useState(!1),R=P=>(P%360+360)%360,T=P=>R(P),M=l>mn;function z(){if(r.length>=4)return;const P=["#60A5FA","#F472B6","#F59E0B","#34D399","#F87171","#A78BFA"],F=P[(r.length*2+1)%P.length];i(Y=>[...Y,{name:`Player ${Y.length+1}`,color:F,scores:Array(mn).fill(null)}])}function O(){r.length<=2||(i(P=>P.slice(0,-1)),a(P=>Math.min(P,r.length-2)))}function $(P){i(F=>F.map((Y,V)=>V===o?{...Y,scores:Y.scores.map((J,me)=>me===l-1?P:J)}:Y))}function re(){if(h||M)return;L(null),v(null),H(null),D(null),S(!0),w();const P=Math.floor(Math.random()*pn.length),F=pn[P],Y=Fn*.28,V=(Math.random()*2-1)*Y,J=R(j),me=180,se=P*Fn+Fn/2+V;let U=T(se-J-me);const X=ig*360+U,ee=j+X+Cu;f(`transform ${b?800:Go}ms ${og}`),C(ee);try{navigator.vibrate&&!b&&navigator.vibrate([10,40,10])}catch{}setTimeout(()=>{f(`transform ${b?160:Eu}ms ${ag}`),C(le=>le-Cu)},b?800:Go),setTimeout(()=>{if(y(),S(!1),L(P),v(F.color),F.soon)return;const le=k.filter(Ce=>Ce.catSlug===F.slug&&Ce.difficulty==="easy"),Ee=le.length?le:k.filter(Ce=>Ce.catSlug===F.slug);if(Ee.length){const Ce=Ee[Math.floor(Math.random()*Ee.length)];H(Ce)}else H({question:"No question found for this category yet. Try re-spinning!",option1:"Okay",option2:"Okay",option3:"Okay",option4:"Okay",answer:"Okay",explanation:""})},(b?800:Go)+(b?160:Eu)+40)}function B(P){if(!I||te)return;const F=P===I.answer;if(D({correct:F,pick:P}),F){t(),Q(!0),setTimeout(()=>Q(!1),900);try{navigator.vibrate&&navigator.vibrate([8,16])}catch{}$(lg)}else{n();try{navigator.vibrate&&navigator.vibrate([4])}catch{}$(0)}}function ne(){const P=(o+1)%r.length,F=P===0?l+1:l;a(P),c(F),L(null),v(null),H(null),D(null)}function fe(){const P=r.map(V=>V.scores.reduce((J,me)=>J+(me??0),0)),F=Math.max(...P),Y=r.filter((V,J)=>P[J]===F).map(V=>V.name).join(", ");alert(`${Y} win${Y.includes(",")?"":"s"} the pot of ${u} coins! 🎉`),e("/play")}return s.jsxs("div",{className:"min-h-screen bg-black text-white",children:[q&&s.jsx(u0,{numberOfPieces:120,recycle:!1}),s.jsxs("div",{className:"mx-auto max-w-md px-5 pt-[calc(env(safe-area-inset-top)+1.25rem)] pb-[calc(5.25rem+env(safe-area-inset-bottom))]",children:[s.jsxs("header",{className:"flex items-center justify-between mb-4",children:[s.jsx("button",{onClick:()=>e("/play"),className:"h-10 w-10 grid place-items-center rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition","aria-label":"Back",children:"←"}),s.jsxs("div",{className:"text-center",children:[s.jsx("h1",{className:"text-2xl font-bold",children:"Party Spin"}),s.jsx("p",{className:"text-sm text-base-muted",children:"Pass & play • Winner takes the pot"})]}),s.jsx("button",{onClick:()=>x(P=>!P),className:"h-10 w-10 grid place-items-center rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition","aria-label":m?"Mute sound":"Unmute sound",title:m?"Sound on":"Sound off",children:s.jsx(ug,{muted:!m})})]}),s.jsxs("section",{className:"rounded-2xl border border-white/10 bg-white/5 p-3 mb-4",children:[s.jsxs("div",{className:"flex items-center justify-between mb-2",children:[s.jsxs("div",{className:"text-sm",children:["Round ",s.jsx("b",{children:Math.min(l,mn)}),"/",s.jsx("b",{children:mn})]}),s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx("button",{onClick:z,className:"btn-ghost px-2 py-1 text-sm",children:"+"}),s.jsx("span",{className:"text-sm text-base-muted",children:"Player"}),s.jsx("button",{onClick:O,className:"btn-ghost px-2 py-1 text-sm",children:"−"})]}),s.jsxs("div",{className:"text-sm",children:["Pot: ",s.jsx("b",{className:"text-yellow-300",children:u})," 🪙"]})]}),s.jsx("div",{className:"overflow-x-auto",children:s.jsxs("table",{className:"w-full table-fixed text-sm tracking-tight tabular-nums",children:[s.jsxs("colgroup",{children:[s.jsx("col",{style:{width:"42%"}}),s.jsx("col",{style:{width:"9%"}}),s.jsx("col",{style:{width:"9%"}}),s.jsx("col",{style:{width:"9%"}}),s.jsx("col",{style:{width:"9%"}}),s.jsx("col",{style:{width:"9%"}}),s.jsx("col",{style:{width:"13%"}})]}),s.jsx("thead",{children:s.jsxs("tr",{className:"text-base-muted",children:[s.jsx("th",{className:"text-left font-medium py-1 pr-1",children:"Player"}),Array.from({length:mn}).map((P,F)=>s.jsxs("th",{className:"font-medium text-center",children:["R",F+1]},F)),s.jsx("th",{className:"font-medium text-right pr-1",children:"Total"})]})}),s.jsx("tbody",{children:r.map((P,F)=>{const Y=P.scores.reduce((J,me)=>J+(me??0),0),V=F===o;return s.jsxs("tr",{className:V?"bg-white/6":"",children:[s.jsx("td",{className:"py-1 pr-1",children:s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx("span",{className:"inline-block h-3 w-3 rounded-full shrink-0",style:{background:P.color}}),s.jsx("input",{className:"bg-transparent outline-none font-semibold w-full",value:P.name,onChange:J=>i(me=>me.map((Z,se)=>se===F?{...Z,name:J.target.value}:Z))})]})}),P.scores.map((J,me)=>s.jsx("td",{className:"text-center",children:J===null?"–":J},me)),s.jsx("td",{className:"text-right pr-1 font-semibold",children:Y})]},F)})})]})})]}),s.jsx("section",{className:"flex flex-col items-center",children:s.jsxs("div",{className:"relative w-[320px] h-[320px] md:w-[380px] md:h-[380px] rounded-full select-none",children:[N&&s.jsx("div",{className:"pointer-events-none absolute -inset-2 rounded-full",style:{boxShadow:`0 0 0 6px ${N}33, 0 0 30px 8px ${N}44`}}),s.jsx("div",{className:"absolute inset-0 rounded-full border border-white/10 shadow-2xl bg-black/20 overflow-hidden will-change-transform",style:{transform:`rotate(${j}deg)`,transition:g},"aria-label":"Category wheel",role:"group",children:s.jsxs("svg",{width:"100%",height:"100%",viewBox:"0 0 100 100",className:"block",children:[pn.map((P,F)=>{const Y=F*Fn,V=Y+Fn,J=Fn>180?1:0,me=Math.PI*Y/180,Z=Math.PI*V/180,se=50+50*Math.cos(me),U=50-50*Math.sin(me),X=50+50*Math.cos(Z),ee=50-50*Math.sin(Z),le=_===F;return s.jsxs("g",{style:{opacity:_==null?.95:le?1:.78,filter:_!=null&&!le?"blur(0.6px)":"none"},children:[s.jsx("path",{d:`M50,50 L${se},${U} A50,50 0 ${J} 0 ${X},${ee} Z`,fill:P.color,stroke:le?`${P.color}AA`:"rgba(255,255,255,0.14)",strokeWidth:le?"1.2":"0.6"}),s.jsx("text",{x:"50",y:"50",fill:"#ffffff",fontSize:"4",fontWeight:"700",dominantBaseline:"middle",transform:`rotate(${Y+Fn/2} 50 50) translate(12 0)`,children:s.jsxs("tspan",{children:[P.label,P.soon?" (soon)":""]})})]},P.slug)}),s.jsx("circle",{cx:"50",cy:"50",r:"9",fill:"rgba(0,0,0,0.55)",stroke:"white",strokeOpacity:"0.25"})]})}),s.jsx("button",{onClick:re,disabled:h||M,className:["absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2","h-16 w-16 rounded-full grid place-items-center","bg-white text-black font-extrabold shadow-soft transition active:scale-[0.98]",h||M?"opacity-60 cursor-not-allowed":"hover:bg-gray-200"].join(" "),"aria-label":"Spin the wheel",children:"SPIN"}),s.jsx("div",{className:"absolute left-1/2 -translate-x-1/2 -bottom-3 z-20",children:s.jsx("svg",{width:"22",height:"22",viewBox:"0 0 24 24",children:s.jsx("path",{d:"M12 4 L20 20 L4 20 Z",fill:"#ffffff"})})}),_!=null&&!h&&s.jsx("div",{className:"absolute left-1/2 -translate-x-1/2 -bottom-10",children:s.jsxs("div",{className:"px-3 py-1 rounded-full bg-white/10 border border-white/20 text-sm backdrop-blur",children:[s.jsx("span",{className:"inline-block h-2.5 w-2.5 rounded-full mr-2 align-middle",style:{background:pn[_].color}}),pn[_].label]})})]})}),s.jsx("section",{className:"mt-4",children:M?s.jsxs("div",{className:"rounded-2xl border border-white/10 bg-white/5 p-4",children:[s.jsx("div",{className:"text-xl font-semibold mb-2",children:"Match Over"}),s.jsxs("p",{className:"text-sm text-base-muted mb-3",children:["Top score takes the pot of ",s.jsx("b",{className:"text-yellow-300",children:u})," coins."]}),s.jsx("button",{className:"btn-primary w-full",onClick:fe,children:"End match"})]}):_!=null&&pn[_].soon?s.jsxs("div",{className:"rounded-2xl border border-white/10 bg-white/5 p-4",children:[s.jsx("div",{className:"text-lg font-semibold mb-1",children:pn[_].label}),s.jsx("p",{className:"text-sm text-base-muted mb-3",children:"This category is arriving soon. Spin again!"}),s.jsx("button",{className:"btn-primary",onClick:re,disabled:h,children:"Re-spin"})]}):s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"text-sm text-center text-base-muted mb-1",children:["Turn: ",s.jsx("span",{style:{color:r[o].color},children:r[o].name})," ","| Round ",l,"/",mn]}),s.jsx(dg,{q:I,locked:h||!I,onPick:B,result:te}),te&&s.jsx("div",{className:"mt-3 flex justify-center",children:s.jsx("button",{className:"btn-primary",onClick:ne,children:"Next turn"})})]})})]}),s.jsx("div",{className:"pointer-events-none fixed inset-x-0 bottom-0 bg-[#0B0F1A]",style:{height:"calc(5.25rem + env(safe-area-inset-bottom))"},"aria-hidden":!0})]})}const mg=({onSelect:e})=>{const t=[{id:"random",emoji:"🎲",title:"Random Mix",color:"from-purple-500 to-pink-500"},{id:"trending",emoji:"📈",title:"Trending Now",color:"from-blue-500 to-cyan-500"},{id:"level",emoji:"📊",title:"Your Level",color:"from-green-500 to-teal-500"},{id:"daily",emoji:"🎯",title:"Daily Challenge",color:"from-orange-500 to-red-500"}];return s.jsx("div",{className:"h-screen bg-gray-900 flex items-center justify-center px-4",children:s.jsx("div",{className:"grid grid-cols-2 gap-4 w-full max-w-md",children:t.map(n=>s.jsxs("button",{onClick:()=>e(n.id),className:`aspect-square rounded-3xl bg-gradient-to-br ${n.color} p-6 flex flex-col items-center justify-center gap-3 transform hover:scale-105 transition-all shadow-xl`,children:[s.jsx("span",{className:"text-5xl",children:n.emoji}),s.jsx("span",{className:"text-white font-bold text-lg",children:n.title})]},n.id))})})},pg=()=>{const e=ut(),{player:t,addCoins:n,addXP:r}=un(),[i,o]=d.useState([]),[a,l]=d.useState(0),[c,u]=d.useState({}),[m,x]=d.useState(0),[p,w]=d.useState(5),[y,j]=d.useState(0),[C,g]=d.useState(!0),[f,h]=d.useState(null),[S,_]=d.useState(!0),[L,N]=d.useState(null),[v,b]=d.useState(!1),[k,E]=d.useState(""),[I,H]=d.useState(!1),[te,D]=d.useState(!1),[q,Q]=d.useState(!1),[R,T]=d.useState(!1),[M,z]=d.useState(0),[O,$]=d.useState(0),[re,B]=d.useState({}),[ne,fe]=d.useState({}),P=d.useRef(null),[F]=It("/sounds/correct.mp3",{volume:.6}),[Y]=It("/sounds/wrong.mp3",{volume:.6}),V=["🐼","🐱","🐶","🦊","🐰","🐨","🐯","🦁","🐸","🐵"];d.useEffect(()=>{_(!0),N(null)},[]),d.useEffect(()=>{!S&&i.length>0&&T(!0)},[S,i.length]);const[J,me]=d.useState(null);d.useEffect(()=>{const G=K=>{var pe;if(R&&!q){const he=K.target.closest('button[type="button"]'),xe=(pe=he==null?void 0:he.querySelector(".text-\\[10px\\]"))==null?void 0:pe.textContent;xe&&["Home","Play","Profile","Swipe"].includes(xe)&&(K.preventDefault(),K.stopPropagation(),me({Home:"/",Play:"/play",Profile:"/profile",Swipe:"/swipe"}[xe]),D(!0))}};return document.addEventListener("click",G,!0),()=>document.removeEventListener("click",G,!0)},[R,q]),d.useEffect(()=>{const G=P.current;if(!G)return;let K;const pe=()=>{clearTimeout(K),K=setTimeout(()=>{const he=G.scrollTop,xe=window.innerHeight,ce=Math.round(he/xe);if(ce!==a&&ce>=0&&ce<i.length){l(ce);const Te=ce*xe;G.scrollTo({top:Te,behavior:"smooth"})}},100)};return G.addEventListener("scroll",pe),()=>{G.removeEventListener("scroll",pe),clearTimeout(K)}},[a,i.length]);const Z=async G=>{try{const pe=await(await fetch("/data/quiz_questions_bank.csv")).text(),{data:he}=Ls.parse(pe,{header:!0,skipEmptyLines:!0}),Te=he.map((be,ke)=>{var In,Ut;const Re=[be.option1,be.option2,be.option3,be.option4].filter(Boolean),We={A:0,B:1,C:2,D:3};return{id:be.id||`q_${ke}`,prompt:be.question,options:Re,answerIndex:We[(In=be.answer)==null?void 0:In.toUpperCase()]||0,category:be.category||"General Knowledge",difficulty:((Ut=be.difficulty)==null?void 0:Ut.toLowerCase())||"medium",explanation:be.explanation||"",stats:{views:Math.floor(Math.random()*1e4)+1e3,attempted:Math.floor(Math.random()*5e3)+500,correctRate:Math.floor(Math.random()*40)+30}}}).filter(be=>be.prompt&&be.options.length===4).sort(()=>Math.random()-.5).slice(0,50).map(be=>({...be,mascot:V[Math.floor(Math.random()*V.length)]}));o(Te),g(!1)}catch(K){console.error("Failed to load questions:",K),g(!1)}},se=G=>G===1||G===3||G===7||G===10||G===15||G===20||G>20&&G%5===0,U=(G,K)=>{if(c[G]!==void 0)return;const pe=i.find(ce=>ce.id===G),he=K===pe.answerIndex,xe=i.findIndex(ce=>ce.id===G);if(u(ce=>({...ce,[G]:K})),he){if(F(),x(ce=>ce+1),j(ce=>ce+10),X(),se(xe+1)){const ce=["Awesome!","Perfect!","Brilliant!","Outstanding!","Incredible!"];E(ce[Math.floor(Math.random()*ce.length)]),b(!0),setTimeout(()=>b(!1),2e3)}}else if(Y(),x(0),w(ce=>{const Te=Math.max(0,ce-1);return Te===0&&setTimeout(()=>H(!0),500),Te}),p>1&&se(xe+1)){const ce=["Keep trying!","You got this!","Don't give up!","Stay strong!","Keep going!"];E(ce[Math.floor(Math.random()*ce.length)]),b(!0),setTimeout(()=>b(!1),2e3)}(p>1||he)&&setTimeout(()=>{ee()},3500)},X=()=>{const G=document.createElement("div");G.style.position="fixed",G.style.inset="0",G.style.pointerEvents="none",G.style.zIndex="1000",document.body.appendChild(G);const K=["🎉","✨","⭐","🎊","🌟"];for(let pe=0;pe<20;pe++){const he=document.createElement("div");he.textContent=K[Math.floor(Math.random()*K.length)],he.style.position="fixed",he.style.left=`${Math.random()*100}%`,he.style.top="-50px",he.style.fontSize="24px",he.style.animation=`fall ${2+Math.random()*2}s ease-out`,G.appendChild(he)}setTimeout(()=>G.remove(),4e3)},ee=()=>{if(a<i.length-1){const G=a+1,K=document.getElementById(`question-${G}`);K==null||K.scrollIntoView({behavior:"smooth"}),l(G)}},le=G=>{const K=i.findIndex(ce=>ce.id===G);if(M>0&&K<M+5){h(`Try after ${M+5-K} questions`),setTimeout(()=>h(null),2e3);return}const pe=i[K],xe=[0,1,2,3].filter(ce=>ce!==pe.answerIndex).sort(()=>Math.random()-.5).slice(0,2);B({...re,[G]:xe}),z(K)},Ee=G=>{const K=i.findIndex(ke=>ke.id===G);if(O>0&&K<O+5){h(`Try after ${O+5-K} questions`),setTimeout(()=>h(null),2e3);return}const he=i[K].answerIndex,xe=[0,0,0,0],ce=40+Math.floor(Math.random()*31);xe[he]=ce;let Te=100-ce;const be=[0,1,2,3].filter(ke=>ke!==he);for(let ke=0;ke<be.length-1;ke++){const Re=Math.floor(Math.random()*(Te/2));xe[be[ke]]=Re,Te-=Re}xe[be[be.length-1]]=Te,fe({...ne,[G]:xe}),$(K)},Ce=G=>{N(G),_(!1),Z()},A=()=>{me("/"),D(!0)},ve=()=>{Q(!0),D(!1)},je=()=>{const G=Object.keys(c).filter(K=>{const pe=i.find(he=>he.id===K);return c[K]===(pe==null?void 0:pe.answerIndex)}).length;return d.useEffect(()=>{const K=setTimeout(()=>{n(y),e(J||"/")},2e3);return()=>clearTimeout(K)},[]),s.jsx("div",{className:"fixed inset-0 bg-gray-900 z-50 flex items-center justify-center p-4",children:s.jsxs("div",{className:"bg-gray-800 rounded-3xl p-8 max-w-md w-full text-center border border-gray-700",children:[s.jsx("div",{className:"text-5xl mb-4",children:"🎉"}),s.jsx("h2",{className:"text-2xl font-bold text-white mb-4",children:"Session Complete!"}),s.jsxs("div",{className:"space-y-4",children:[s.jsxs("div",{className:"bg-gray-700/50 rounded-xl p-4",children:[s.jsx("div",{className:"text-gray-400 text-sm mb-1",children:"Questions Answered"}),s.jsx("div",{className:"text-2xl font-bold text-white",children:Object.keys(c).length})]}),s.jsxs("div",{className:"bg-gray-700/50 rounded-xl p-4",children:[s.jsx("div",{className:"text-gray-400 text-sm mb-1",children:"Correct Answers"}),s.jsx("div",{className:"text-2xl font-bold text-green-400",children:G})]}),s.jsxs("div",{className:"bg-gray-700/50 rounded-xl p-4",children:[s.jsx("div",{className:"text-gray-400 text-sm mb-1",children:"Coins Earned"}),s.jsxs("div",{className:"text-2xl font-bold text-yellow-400",children:["🪙 ",y]})]}),s.jsxs("div",{className:"bg-gray-700/50 rounded-xl p-4",children:[s.jsx("div",{className:"text-gray-400 text-sm mb-1",children:"Lives Remaining"}),s.jsx("div",{className:"text-2xl font-bold text-red-400",children:Array.from({length:5},(K,pe)=>s.jsx("span",{className:pe<p?"":"opacity-30",children:"❤️"},pe))})]})]})]})})};return q?s.jsx(je,{}):S?s.jsx(mg,{onSelect:Ce}):C?s.jsx("div",{className:"h-screen bg-gray-900 flex items-center justify-center",children:s.jsx("div",{className:"text-white",children:"Loading questions..."})}):s.jsxs("div",{className:"h-screen bg-gray-900 relative",children:[s.jsx("div",{className:"fixed top-0 left-0 right-0 bg-gray-900/95 backdrop-blur z-50 border-b border-gray-800 pt-8",children:s.jsxs("div",{className:"flex items-center justify-between px-4 py-3",children:[s.jsx("button",{onClick:A,className:"inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/15 rounded-xl text-white text-sm font-medium hover:bg-white/15 transition-all",children:"← Back"}),s.jsxs("div",{className:"flex items-center gap-4",children:[s.jsxs("div",{className:"flex items-center gap-1 bg-yellow-500/20 px-3 py-1 rounded-full",children:[s.jsx("span",{children:"🪙"}),s.jsx("span",{className:"font-bold text-yellow-400",children:y})]}),s.jsxs("div",{className:"flex items-center gap-1 bg-orange-500/20 px-3 py-1 rounded-full",children:[s.jsx("span",{children:"🔥"}),s.jsx("span",{className:"font-bold text-orange-400",children:m})]})]}),s.jsx("div",{className:"flex items-center gap-1",children:Array.from({length:5},(G,K)=>s.jsx("span",{className:K<p?"text-red-500":"text-gray-600 opacity-30",children:"❤️"},K))})]})}),s.jsx("div",{ref:P,className:"h-full overflow-y-scroll snap-y snap-mandatory pt-24",style:{scrollBehavior:"smooth"},children:i.map((G,K)=>s.jsx(hg,{question:G,index:K,answered:c[G.id],onAnswer:pe=>U(G.id,pe),onFiftyFifty:()=>le(G.id),onAudience:()=>Ee(G.id),eliminated:re[G.id]||[],audiencePercentages:ne[G.id],canUseFiftyFifty:!M||K>=M+5,canUseAudience:!O||K>=O+5},G.id))}),I&&s.jsx("div",{className:"fixed inset-0 bg-black/75 flex items-center justify-center z-50 p-4",children:s.jsxs("div",{className:"bg-gray-800 rounded-3xl p-6 max-w-sm w-full text-center border border-gray-700",children:[s.jsx("div",{className:"text-5xl mb-4",children:"😔"}),s.jsx("h3",{className:"text-xl font-bold mb-2 text-white",children:"No Lives Left!"}),s.jsx("p",{className:"text-gray-400 mb-6",children:"Sorry, you have no lives left to continue swiping."}),s.jsx("button",{onClick:()=>Q(!0),className:"w-full bg-gradient-to-r from-blue-600 to-purple-600 py-3 rounded-xl text-white font-medium",children:"View Results"})]})}),te&&s.jsx("div",{className:"fixed inset-0 bg-black/75 flex items-center justify-center z-50 p-4",children:s.jsxs("div",{className:"bg-gray-800 rounded-3xl p-6 max-w-sm w-full text-center border border-gray-700",children:[s.jsx("div",{className:"text-4xl mb-4",children:"🤔"}),s.jsx("h3",{className:"text-xl font-bold mb-2 text-white",children:"Leave Swipe Mode?"}),s.jsx("p",{className:"text-gray-400 mb-6",children:"Your progress will be saved"}),s.jsxs("div",{className:"flex gap-3",children:[s.jsx("button",{onClick:()=>D(!1),className:"flex-1 bg-blue-600 hover:bg-blue-700 py-3 rounded-xl font-medium text-white",children:"Stay"}),s.jsx("button",{onClick:ve,className:"flex-1 bg-gray-700 hover:bg-gray-600 py-3 rounded-xl font-medium text-white",children:"Leave"})]})]})}),v&&s.jsx("div",{className:"fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50",children:s.jsx("div",{className:"bg-gradient-to-br from-purple-600 to-pink-600 px-8 py-6 rounded-3xl text-white font-bold text-2xl shadow-2xl animate-fadeIn",children:k})}),f&&s.jsx("div",{className:"fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 pointer-events-none",children:s.jsx("div",{className:"bg-gray-800/90 px-6 py-3 rounded-full text-white font-bold animate-fadeIn",children:f})}),s.jsx("style",{jsx:!0,children:`
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
      `})]})},hg=({question:e,index:t,answered:n,onAnswer:r,onFiftyFifty:i,onAudience:o,eliminated:a,audiencePercentages:l,canUseFiftyFifty:c,canUseAudience:u})=>{const m=x=>{switch(x){case"easy":return"from-green-500 to-green-600";case"hard":return"from-red-500 to-red-600";default:return"from-yellow-500 to-yellow-600"}};return s.jsxs("div",{id:`question-${t}`,className:"h-screen snap-start flex flex-col px-4 pt-24 pb-8",children:[s.jsx("div",{className:"flex justify-center py-4",children:s.jsx("span",{className:"text-8xl",style:{animation:"float 3s ease-in-out infinite"},children:e.mascot})}),s.jsxs("div",{className:"flex-1 flex flex-col justify-start max-w-md mx-auto w-full",children:[s.jsxs("div",{className:`bg-gradient-to-br ${m(e.difficulty)} p-6 rounded-3xl mb-4`,children:[s.jsxs("div",{className:"text-white/80 text-sm mb-2",children:["Question ",t+1]}),s.jsx("h2",{className:"text-2xl font-bold text-white",children:e.prompt})]}),s.jsx("div",{className:"space-y-3 mb-3",children:e.options.map((x,p)=>{const w=n!==void 0,y=n===p,j=p===e.answerIndex,C=a.includes(p);let g="w-full p-4 rounded-2xl font-medium transition-all ";return C?g+="bg-gray-700/30 text-gray-500/50 cursor-not-allowed":w?j?g+="bg-green-500 text-white":y?g+="bg-red-500 text-white":g+="bg-gray-700 text-gray-400":g+="bg-gray-800 text-white hover:bg-gray-700",s.jsx("button",{onClick:()=>!w&&!C&&r(p),disabled:w||C,className:g,children:s.jsxs("div",{className:"flex items-center gap-3",children:[s.jsx("span",{className:"text-lg",children:["🅰️","🅱️","🅲️","🅳️"][p]}),s.jsx("span",{className:"flex-1 text-left",children:x}),l&&l[p]>0&&s.jsxs("span",{className:"bg-purple-600/20 px-2 py-1 rounded-full text-xs",children:[l[p],"%"]}),w&&j&&s.jsx("span",{children:"✓"})]})},p)})}),!n&&s.jsxs("div",{className:"flex justify-center gap-3 mb-3",children:[s.jsx("button",{onClick:i,disabled:!c,className:`px-4 py-2 rounded-lg font-medium text-sm ${c?"bg-orange-600 text-white":"bg-gray-700 text-gray-500"}`,children:"⚡ 50:50"}),s.jsx("button",{onClick:o,disabled:!u,className:`px-4 py-2 rounded-lg font-medium text-sm ${u?"bg-purple-600 text-white":"bg-gray-700 text-gray-500"}`,children:"👥 Audience"})]}),s.jsx("div",{className:"text-center mt-3 mb-4",children:s.jsxs("div",{className:"text-gray-500 text-xs",children:[e.stats.views.toLocaleString()," views • ",e.stats.attempted.toLocaleString()," attempted • ",e.stats.correctRate,"% correct"]})}),s.jsx("div",{className:"text-center mt-auto",children:s.jsx("div",{className:"text-gray-500 text-sm animate-bounce",children:"Swipe up for next"})})]})]})};function xg(){const e=ut(),[t,n]=d.useState(""),{player:r,levelProgress:i}=un(),o=()=>{try{const u=JSON.parse(localStorage.getItem("qp_stats")||'{"sessions":[]}'),m=new Date().setHours(0,0,0,0);return u.sessions.filter(p=>new Date(p.timestamp).setHours(0,0,0,0)===m&&p.mode==="quiz").reduce((p,w)=>p+(w.earnedCoins||0),0)}catch{return 0}},a={name:(r==null?void 0:r.name)||"Player",rank:23,streak:(r==null?void 0:r.currentStreak)||0,todayQuizzes:3,todayCoins:o()};d.useEffect(()=>{const u=new Date().getHours();u<12?n("Good morning"):u<17?n("Good afternoon"):n("Good evening")},[]);const l=`
    rounded-3xl p-5 text-left text-white 
    transition-all duration-300 ease-out
    active:scale-[0.97] hover:scale-[1.02]
    shadow-[0_8px_32px_rgba(0,0,0,0.3)]
    hover:shadow-[0_12px_48px_rgba(0,0,0,0.4)]
    relative overflow-hidden
    before:absolute before:inset-0 before:bg-white/5 before:opacity-0 
    hover:before:opacity-100 before:transition-opacity before:duration-300
  `,c=i.required>0?i.current/i.required*100:0;return s.jsxs("div",{className:"min-h-full bg-[#0B0C10] text-white pt-12 px-3",children:[s.jsxs("div",{className:"mb-6",children:[s.jsxs("div",{className:"flex items-center justify-between mb-4",children:[s.jsxs("div",{children:[s.jsxs("h1",{className:"text-2xl font-bold",children:[t," 👋"]}),s.jsx("p",{className:"text-white/60 text-sm",children:"Ready for today's challenge?"})]}),s.jsx("button",{onClick:()=>e("/profile/settings"),className:"w-12 h-12 rounded-2xl bg-white/10 border border-white/20 grid place-items-center hover:bg-white/20 transition",children:s.jsx("span",{className:"text-xl",children:"⚙️"})})]}),s.jsxs("div",{className:"rounded-3xl bg-gradient-to-r from-slate-800/50 to-slate-900/50 border border-white/10 p-4 backdrop-blur-sm",children:[s.jsxs("div",{className:"flex items-center gap-4 mb-3",children:[s.jsx("div",{className:"w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 grid place-items-center text-2xl font-bold",children:a.name[0]}),s.jsxs("div",{className:"flex-1",children:[s.jsx("div",{className:"text-lg font-semibold",children:r.name||"Player"}),s.jsxs("div",{className:"text-white/60 text-sm",children:["Level ",r.level]})]}),s.jsxs("div",{className:"text-right",children:[s.jsxs("div",{className:"text-yellow-400 font-bold text-lg",children:[r.coins," 🪙"]}),s.jsxs("div",{className:"text-white/60 text-sm",children:["Rank #",a.rank]})]})]}),s.jsxs("div",{className:"mb-3",children:[s.jsxs("div",{className:"flex justify-between text-xs text-white/60 mb-1",children:[s.jsx("span",{children:"XP Progress"}),s.jsxs("span",{children:[i.current,"/",i.required]})]}),s.jsx("div",{className:"h-2 bg-white/10 rounded-full overflow-hidden",children:s.jsx("div",{className:"h-full bg-gradient-to-r from-blue-400 to-purple-500 rounded-full transition-all duration-1000 ease-out",style:{width:`${c}%`}})})]}),s.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[s.jsxs("div",{className:"text-center p-2 rounded-xl bg-white/5",children:[s.jsxs("div",{className:"text-orange-400 font-bold text-lg",children:["🔥 ",a.streak]}),s.jsx("div",{className:"text-white/60 text-xs",children:"Day Streak"})]}),s.jsxs("div",{className:"text-center p-2 rounded-xl bg-white/5",children:[s.jsxs("div",{className:"text-green-400 font-bold text-lg",children:["+",a.todayCoins]}),s.jsx("div",{className:"text-white/60 text-xs",children:"Today"})]})]})]})]}),s.jsxs("button",{onClick:()=>e("/profile/leaderboard"),className:`${l} w-full mb-4 bg-gradient-to-br from-[#5AA9FF] via-[#6C63FF] to-[#9C6BFF]`,children:[s.jsx("div",{className:"absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-8 translate-x-8 animate-pulse"}),s.jsxs("div",{className:"relative flex items-start justify-between",children:[s.jsxs("div",{children:[s.jsx("div",{className:"text-xs opacity-90 mb-1",children:"🏆 Rank & Coins"}),s.jsx("div",{className:"text-3xl font-extrabold tracking-tight mb-2",children:"LEADERBOARD"}),s.jsxs("div",{className:"text-xs opacity-75 flex items-center gap-2",children:[s.jsx("span",{className:"w-2 h-2 bg-green-400 rounded-full animate-pulse"}),"Weekly reset · Ends in 2d 14h"]})]}),s.jsx("div",{className:"w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm grid place-items-center text-2xl border border-white/30",children:"🏆"})]})]}),s.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[s.jsxs("button",{onClick:()=>e("/profile/history"),className:`${l} bg-gradient-to-br from-[#D19A00] to-[#C94B4B] relative`,children:[s.jsx("div",{className:"absolute top-2 right-2 w-3 h-3 bg-white/20 rounded-full"}),s.jsx("div",{className:"text-3xl mb-3",children:"📊"}),s.jsx("div",{className:"text-sm font-bold mb-1",children:"HISTORY"}),s.jsx("div",{className:"text-[11px] opacity-80",children:"Quizzes & Practice"}),s.jsxs("div",{className:"text-[10px] opacity-60 mt-1",children:["+",a.todayQuizzes," today"]})]}),s.jsxs("button",{onClick:()=>e("/profile/rewards"),className:`${l} bg-gradient-to-br from-[#2EB872] to-[#1EA07A] relative`,children:[s.jsx("div",{className:"absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full animate-bounce"}),s.jsx("div",{className:"text-3xl mb-3",children:"🎁"}),s.jsx("div",{className:"text-sm font-bold mb-1",children:"REWARDS"}),s.jsx("div",{className:"text-[11px] opacity-80",children:"Claim & Redeem"}),s.jsx("div",{className:"text-[10px] opacity-60 mt-1",children:"2 available"})]}),s.jsxs("button",{onClick:()=>e("/profile/badges"),className:`${l} bg-gradient-to-br from-[#E65C00] to-[#F9D423] relative`,children:[s.jsx("div",{className:"absolute -top-1 -right-1 w-6 h-6 bg-purple-600 rounded-full grid place-items-center text-[10px] font-bold animate-pulse",children:"NEW"}),s.jsx("div",{className:"text-3xl mb-3",children:"🏅"}),s.jsx("div",{className:"text-sm font-bold mb-1",children:"BADGES"}),s.jsx("div",{className:"text-[11px] opacity-80",children:"Collectables"}),s.jsx("div",{className:"text-[10px] opacity-60 mt-1",children:"4/15 unlocked"})]}),s.jsxs("button",{onClick:()=>e("/profile/achievements"),className:`${l} bg-gradient-to-br from-[#5D26C1] to-[#A17FE0] relative`,children:[s.jsx("div",{className:"text-3xl mb-3",children:"🎯"}),s.jsx("div",{className:"text-sm font-bold mb-1",children:"ACHIEVEMENTS"}),s.jsx("div",{className:"text-[11px] opacity-80",children:"Milestones"}),s.jsx("div",{className:"text-[10px] opacity-60 mt-1",children:"67% complete"})]})]}),s.jsxs("div",{className:"mt-4 space-y-3",children:[s.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[s.jsx("button",{onClick:()=>e("/profile/streaks"),className:`${l} bg-gradient-to-r from-orange-600/80 to-red-600/80 backdrop-blur-sm border border-orange-500/30`,children:s.jsxs("div",{className:"flex items-center gap-3",children:[s.jsx("div",{className:"text-2xl",children:"🔥"}),s.jsxs("div",{children:[s.jsx("div",{className:"text-sm font-bold",children:"STREAK"}),s.jsxs("div",{className:"text-[11px] opacity-80",children:[a.streak," days strong"]})]})]})}),s.jsx("button",{onClick:()=>e("/profile/quests"),className:`${l} bg-gradient-to-r from-blue-600/80 to-cyan-600/80 backdrop-blur-sm border border-blue-500/30`,children:s.jsxs("div",{className:"flex items-center gap-3",children:[s.jsx("div",{className:"text-2xl",children:"⚡"}),s.jsxs("div",{children:[s.jsx("div",{className:"text-sm font-bold",children:"QUESTS"}),s.jsx("div",{className:"text-[11px] opacity-80",children:"2 active goals"})]})]})})]}),s.jsx("button",{onClick:()=>e("/profile/settings"),className:`${l} w-full bg-gradient-to-r from-slate-700/50 to-slate-800/50 backdrop-blur-sm border border-white/10`,children:s.jsxs("div",{className:"flex items-center justify-between",children:[s.jsxs("div",{className:"flex items-center gap-4",children:[s.jsx("div",{className:"w-12 h-12 rounded-2xl bg-white/10 grid place-items-center text-xl",children:"⚙️"}),s.jsxs("div",{children:[s.jsx("div",{className:"text-sm font-bold",children:"SETTINGS"}),s.jsx("div",{className:"text-[11px] opacity-70",children:"Customize your experience"})]})]}),s.jsx("div",{className:"text-white/40",children:"→"})]})})]}),s.jsx("div",{className:"h-6"})]})}const Yr="🪙",ei={global:[{rank:1,name:"Bryan Wolf",handle:"@bryan",score:43,avatar:"/profile/rank1.png",trend:"+5",streak:12,country:"🇺🇸"},{rank:2,name:"Meghan Jess…",handle:"@meghan",score:40,avatar:"/profile/rank2.png",trend:"+2",streak:8,country:"🇨🇦"},{rank:3,name:"Alex Turner",handle:"@alex",score:38,avatar:"/profile/rank3.png",trend:"±0",streak:15,country:"🇬🇧"},{rank:4,name:"Marsha Fisher",handle:"@marsha",score:36,trend:"-1",streak:5,country:"🇦🇺"},{rank:5,name:"Juanita Cormier",handle:"@juanita",score:35,trend:"+1",streak:3,country:"🇲🇽"},{rank:6,name:"You",handle:"@you",score:34,you:!0,avatar:"/profile/avatar.png",trend:"+3",streak:7,country:"🇮🇳"},{rank:7,name:"Tamara Schmidt",handle:"@tamara",score:33,trend:"-2",streak:2,country:"🇩🇪"},{rank:8,name:"Ricardo Veum",handle:"@ricardo",score:32,trend:"+1",streak:4,country:"🇧🇷"}],friends:[{rank:1,name:"You",handle:"@you",score:34,you:!0,avatar:"/profile/avatar.png",trend:"+2",streak:7,country:"🇮🇳"},{rank:2,name:"Sarah Chen",handle:"@sarah",score:31,trend:"-1",streak:4,country:"🇸🇬",friend:!0},{rank:3,name:"Mike Johnson",handle:"@mike",score:29,trend:"+3",streak:2,country:"🇺🇸",friend:!0},{rank:4,name:"Priya Sharma",handle:"@priya",score:27,trend:"±0",streak:5,country:"🇮🇳",friend:!0},{rank:5,name:"David Kim",handle:"@david",score:25,trend:"+1",streak:3,country:"🇰🇷",friend:!0},{rank:6,name:"Emma Wilson",handle:"@emma",score:23,trend:"-2",streak:1,country:"🇬🇧",friend:!0}],india:[{rank:1,name:"Rohit Sharma",handle:"@rohit",score:45,trend:"+4",streak:10,country:"🇮🇳"},{rank:2,name:"Priya Patel",handle:"@priya",score:42,trend:"+1",streak:8,country:"🇮🇳"},{rank:3,name:"You",handle:"@you",score:34,you:!0,avatar:"/profile/avatar.png",trend:"+3",streak:7,country:"🇮🇳"},{rank:4,name:"Arjun Singh",handle:"@arjun",score:32,trend:"-1",streak:5,country:"🇮🇳"},{rank:5,name:"Kavya Reddy",handle:"@kavya",score:30,trend:"+2",streak:3,country:"🇮🇳"},{rank:6,name:"Vikram Gupta",handle:"@vikram",score:28,trend:"±0",streak:4,country:"🇮🇳"}]},ti=[{name:"Diamond",min:40,color:"from-cyan-400 to-blue-600",icon:"💎"},{name:"Gold",min:30,color:"from-yellow-400 to-orange-500",icon:"🥇"},{name:"Silver",min:20,color:"from-gray-300 to-gray-500",icon:"🥈"},{name:"Bronze",min:10,color:"from-orange-600 to-red-600",icon:"🥉"}];function gg(){var p,w;const e=ut(),{player:t}=un(),n={global:ei.global.map(y=>y.you?{...y,name:(t==null?void 0:t.name)||"You",score:(t==null?void 0:t.coins)||0,streak:(t==null?void 0:t.currentStreak)||0}:y),friends:ei.friends.map(y=>y.you?{...y,name:(t==null?void 0:t.name)||"You",score:(t==null?void 0:t.coins)||0,streak:(t==null?void 0:t.currentStreak)||0}:y),india:ei.india.map(y=>y.you?{...y,name:(t==null?void 0:t.name)||"You",score:(t==null?void 0:t.coins)||0,streak:(t==null?void 0:t.currentStreak)||0}:y)};console.log("Debug - Player coins:",t==null?void 0:t.coins),console.log("Debug - Friends data:",n.friends[0]);const[r,i]=d.useState({days:2,hours:14,minutes:17}),[o,a]=d.useState("global"),l=n[o]||n.global;console.log("Player coins:",t==null?void 0:t.coins,"Current user score:",(p=l.find(y=>y.you))==null?void 0:p.score);const c=l.find(y=>y.you),u=l.slice(0,3),m=l.slice(3);d.useEffect(()=>{const y=j=>{j.preventDefault(),e(-1)};return window.addEventListener("popstate",y),()=>{window.removeEventListener("popstate",y)}},[e]),d.useEffect(()=>{const y=setInterval(()=>{i(j=>j.minutes>0?{...j,minutes:j.minutes-1}:j.hours>0?{...j,hours:j.hours-1,minutes:59}:j.days>0?{...j,days:j.days-1,hours:23,minutes:59}:j)},6e4);return()=>clearInterval(y)},[]);const x=y=>{const j=Math.max(...l.map(g=>g.score)),C=y/j*100;return C>=90?ti[0]:C>=70?ti[1]:C>=40?ti[2]:ti[3]};return s.jsxs("div",{className:"min-h-screen bg-black text-white pt-12",children:[s.jsxs("div",{className:"flex items-center justify-between mb-5",children:[s.jsx("button",{onClick:()=>e("/profile",{replace:!0}),className:"px-3 py-1.5 rounded-xl border border-white/10 bg-white/5 text-sm hover:bg-white/10 transition",children:"← Back"}),s.jsxs("div",{className:"text-center",children:[s.jsx("div",{className:"text-lg font-bold",children:"🏆 Leaderboard"}),s.jsxs("div",{className:"text-xs text-white/60",children:["Ends in ",r.days,"d ",r.hours,"h ",r.minutes,"m"]})]}),s.jsx("button",{className:"px-3 py-1.5 rounded-xl border border-white/10 bg-white/5 text-sm hover:bg-white/10 transition",children:"📊"})]}),s.jsxs("div",{className:`mb-5 rounded-2xl bg-gradient-to-r ${x(c==null?void 0:c.score).color} p-4 text-center relative overflow-hidden`,children:[s.jsx("div",{className:"absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -translate-y-10 translate-x-10 animate-pulse"}),s.jsx("div",{className:"absolute bottom-0 left-0 w-16 h-16 bg-white/5 rounded-full translate-y-8 -translate-x-8"}),s.jsxs("div",{className:"relative z-10",children:[s.jsx("div",{className:"text-2xl mb-1",children:x(c==null?void 0:c.score).icon}),s.jsxs("div",{className:"text-sm font-bold text-white",children:[x(c==null?void 0:c.score).name," League"]}),s.jsx("div",{className:"text-xs text-white/80",children:o==="friends"?"Competing with friends!":"You're competing with the best!"})]})]}),s.jsx("div",{className:"flex gap-2 mb-5",children:[{key:"global",label:"🌍 Global",count:"10M+"},{key:"friends",label:"👥 Friends",count:ei.friends.length},{key:"india",label:"🇮🇳 India",count:"2.5M"}].map(y=>s.jsxs("button",{onClick:()=>a(y.key),className:`flex-1 px-2 py-2 rounded-xl text-xs font-semibold transition-all duration-300 ${o===y.key?"bg-lime-500 text-black shadow-lg scale-105":"border border-white/10 bg-white/5 hover:bg-white/10"}`,children:[s.jsx("div",{children:y.label}),s.jsx("div",{className:`text-[10px] ${o===y.key?"text-black/70":"text-white/60"}`,children:y.count})]},y.key))}),s.jsx("div",{className:"mb-5 rounded-2xl bg-gradient-to-r from-lime-500/20 to-green-500/20 border border-lime-500/30 p-3",children:s.jsxs("div",{className:"flex items-center justify-between",children:[s.jsxs("div",{className:"flex items-center gap-3",children:[s.jsx("div",{className:"w-10 h-10 rounded-xl bg-lime-500/20 grid place-items-center text-lg",children:"🧑‍💻"}),s.jsxs("div",{children:[s.jsx("div",{className:"font-bold text-lime-400 text-sm",children:"Your Position"}),s.jsxs("div",{className:"text-xs text-white/70 flex items-center gap-2",children:[s.jsxs("span",{children:["Rank #",c==null?void 0:c.rank]}),s.jsx("span",{className:`px-1.5 py-0.5 rounded-full text-[9px] font-bold ${c!=null&&c.trend.startsWith("+")?"bg-green-500/20 text-green-400":c!=null&&c.trend.startsWith("-")?"bg-red-500/20 text-red-400":"bg-gray-500/20 text-gray-400"}`,children:c==null?void 0:c.trend}),s.jsxs("span",{className:"text-white/50 text-[10px]",children:["in ",o==="global"?"Global":o==="friends"?"Friends":"India"]})]})]})]}),s.jsxs("div",{className:"text-right",children:[s.jsxs("div",{className:"text-lg font-bold text-lime-400",children:[c==null?void 0:c.score," ",Yr]}),s.jsxs("div",{className:"text-xs text-white/60",children:["🔥 ",c==null?void 0:c.streak," streak"]})]})]})}),s.jsxs("div",{className:"mb-6",children:[s.jsx("h3",{className:"text-center text-sm font-semibold text-white/80 mb-4",children:"👑 Hall of Fame"}),s.jsxs("div",{className:"bg-gradient-to-b from-white/5 to-white/10 rounded-2xl p-4 border border-white/10 relative overflow-hidden",children:[s.jsx("div",{className:"absolute top-4 left-6 text-2xl opacity-40 animate-pulse",children:"🏆"}),s.jsx("div",{className:"absolute top-8 right-8 text-lg opacity-40 animate-bounce",style:{animationDelay:"1s"},children:"✨"}),s.jsx("div",{className:"absolute bottom-6 left-12 text-xl opacity-10 animate-pulse",style:{animationDelay:"2s"},children:"🥇"}),s.jsx("div",{className:"absolute bottom-4 right-6 text-lg opacity-40 animate-bounce",style:{animationDelay:"0.5s"},children:"⭐"}),s.jsxs("div",{className:"flex items-end justify-center gap-8 relative z-10",children:[u[1]&&s.jsxs("div",{className:"flex flex-col items-center",children:[s.jsxs("div",{className:"relative mb-2",children:[s.jsx(ni,{src:u[1].avatar,fallback:u[1].name,size:56}),s.jsx("div",{className:"absolute -bottom-1 left-1/2 -translate-x-1/2 w-7 h-7 bg-gradient-to-br from-gray-300 to-gray-500 rounded-full grid place-items-center text-sm font-bold text-black shadow-lg",children:"2"})]}),s.jsx("div",{className:"text-sm font-semibold mb-1 mt-1",children:ri(u[1].name,8)}),s.jsxs("div",{className:"text-xs text-lime-400 font-bold",children:[u[1].score," ",Yr]})]}),u[0]&&s.jsxs("div",{className:"flex flex-col items-center -mb-3",children:[s.jsxs("div",{className:"relative mb-2",children:[s.jsx(ni,{src:u[0].avatar,fallback:u[0].name,size:72}),s.jsx("div",{className:"absolute -top-3 left-1/2 -translate-x-1/2",children:s.jsx(vg,{})}),s.jsx("div",{className:"absolute -bottom-1 left-1/2 -translate-x-1/2 w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full grid place-items-center text-base font-bold text-black shadow-lg animate-pulse",children:"1"})]}),s.jsx("div",{className:"text-sm font-bold mb-1 mt-1",children:ri(u[0].name,8)}),s.jsxs("div",{className:"text-sm text-lime-400 font-bold mb-1",children:[u[0].score," ",Yr]}),s.jsx("div",{className:"px-2 py-1 bg-yellow-400/20 rounded-full text-[9px] text-yellow-400 font-bold",children:"CHAMPION"})]}),u[2]&&s.jsxs("div",{className:"flex flex-col items-center",children:[s.jsxs("div",{className:"relative mb-2",children:[s.jsx(ni,{src:u[2].avatar,fallback:u[2].name,size:56}),s.jsx("div",{className:"absolute -bottom-1 left-1/2 -translate-x-1/2 w-7 h-7 bg-gradient-to-br from-orange-600 to-red-600 rounded-full grid place-items-center text-sm font-bold text-white shadow-lg",children:"3"})]}),s.jsx("div",{className:"text-sm font-semibold mb-1 mt-1",children:ri(u[2].name,8)}),s.jsxs("div",{className:"text-xs text-lime-400 font-bold",children:[u[2].score," ",Yr]})]})]})]})]}),m.length>0&&s.jsxs("div",{className:"rounded-3xl bg-white/5 border border-white/10 p-2 mb-4",children:[s.jsxs("div",{className:"flex justify-between items-center mb-2 px-2",children:[s.jsx("h3",{className:"text-sm font-semibold",children:"Rankings"}),s.jsx("div",{className:"text-xs text-white/60",children:"Live updates"})]}),s.jsx("ul",{className:"space-y-1.5",children:m.map((y,j)=>s.jsxs("li",{className:`flex items-center justify-between px-3 py-2.5 rounded-xl transition-all duration-300 ${y.you?"bg-lime-500/90 text-black shadow-lg shadow-lime-500/20 scale-[1.02]":"bg-white/5 hover:bg-white/10"}`,style:{animationDelay:`${j*100}ms`,animation:"fadeInUp 0.6s ease-out forwards"},children:[s.jsxs("div",{className:"flex items-center gap-2.5",children:[s.jsx(yg,{n:y.rank,you:y.you}),s.jsx(ni,{src:y.avatar,fallback:y.name,size:36}),s.jsxs("div",{className:"flex flex-col leading-tight",children:[s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx("span",{className:"text-sm font-semibold",children:ri(y.name,12)}),s.jsx("span",{className:"text-xs",children:y.country}),y.friend&&s.jsx("span",{className:"text-[9px] bg-blue-500/20 text-blue-400 px-1 py-0.5 rounded-full",children:"Friend"})]}),s.jsxs("div",{className:`text-xs flex items-center gap-1.5 ${y.you?"text-black/70":"text-white/60"}`,children:[s.jsx("span",{children:y.handle}),s.jsxs("span",{children:["🔥",y.streak]})]})]})]}),s.jsxs("div",{className:"flex flex-col items-end",children:[s.jsxs("div",{className:"flex items-center gap-1 text-sm font-bold",children:[s.jsx("span",{children:y.score}),s.jsx("span",{className:y.you?"opacity-90":"opacity-80",children:Yr})]}),s.jsx("div",{className:`text-xs px-1.5 py-0.5 rounded-full font-bold ${y.trend.startsWith("+")?"bg-green-500/20 text-green-400":y.trend.startsWith("-")?"bg-red-500/20 text-red-400":"bg-gray-500/20 text-gray-400"}`,children:y.trend})]})]},`${o}-${y.rank}`))})]}),c&&c.rank>1&&s.jsxs("div",{className:"mb-4 p-3 rounded-2xl bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 text-center",children:[s.jsx("div",{className:"text-sm font-semibold mb-2",children:"🚀 Climb Higher!"}),s.jsx("div",{className:"text-xs text-white/70 mb-3",children:o==="friends"&&c.rank===1?"🎉 You're #1 among friends!":`You need ${Math.max(0,(((w=l[c.rank-2])==null?void 0:w.score)||0)-c.score+1)} more coins to reach rank #${c.rank-1}`}),!(o==="friends"&&c.rank===1)&&s.jsx("button",{onClick:()=>e("/play"),className:"px-5 py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl text-sm font-bold hover:scale-105 transition-transform",children:"Play Now 🎮"})]}),s.jsx("style",{jsx:!0,children:`
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
      `})]})}function ni({src:e,fallback:t,size:n=56}){const r=bg(t);return s.jsx("div",{className:"grid place-items-center rounded-full bg-white/10 overflow-hidden border-2 border-white/20",style:{width:n,height:n},children:e?s.jsx("img",{src:e,alt:"",className:"w-full h-full object-cover"}):s.jsx("span",{className:"text-sm font-semibold",children:r})})}function vg(){return s.jsxs("div",{className:"w-7 h-5 bg-gradient-to-t from-yellow-400 to-yellow-300 rounded-b-lg shadow-lg relative",children:[s.jsxs("svg",{viewBox:"0 0 100 40",className:"w-full h-full",children:[s.jsx("path",{d:"M15,35 L15,18 L35,28 L50,10 L65,28 L85,18 L85,35 Z",fill:"url(#crownGradient)"}),s.jsx("defs",{children:s.jsxs("linearGradient",{id:"crownGradient",x1:"0%",y1:"0%",x2:"0%",y2:"100%",children:[s.jsx("stop",{offset:"0%",stopColor:"#FCD34D"}),s.jsx("stop",{offset:"100%",stopColor:"#F59E0B"})]})})]}),s.jsx("div",{className:"absolute top-0.5 left-1/2 -translate-x-1/2 w-1 h-1 bg-red-400 rounded-full animate-pulse"})]})}function yg({n:e,you:t}){return s.jsx("div",{className:`w-7 h-7 grid place-items-center rounded-full text-sm font-bold ${t?"bg-black/10 text-black":"bg-white/10 text-white"}`,children:e})}function ri(e,t=12){return(e==null?void 0:e.length)>t?e.slice(0,t-1)+"…":e}function bg(e=""){var n;const t=e.trim().split(/\s+/);return t.length===1?t[0].slice(0,2).toUpperCase():(t[0][0]+(((n=t[1])==null?void 0:n[0])||"")).toUpperCase()}const wg="qp_recent",jg="qp_review_snapshot",_u=[{id:Date.now()-864e5,type:"quiz",category:"General Knowledge",difficulty:"easy",score:8,total:10,accuracy:80,time:"02:31",ms:151e3,date:"Yesterday",timestamp:Date.now()-864e5,mode:"Quiz"},{id:Date.now()-1728e5,type:"practice",category:"Science",difficulty:"medium",score:12,total:15,accuracy:80,time:"06:02",ms:362e3,date:"2 days ago",timestamp:Date.now()-1728e5,mode:"Practice"},{id:Date.now()-2592e5,type:"quiz",category:"Fun Facts",difficulty:"easy",score:9,total:10,accuracy:90,time:"02:05",ms:125e3,date:"3 days ago",timestamp:Date.now()-2592e5,mode:"Quiz"}];function kg(){const[e,t]=d.useState("quizzes"),[n,r]=d.useState(null),[i,o]=d.useState(!1),[a,l]=d.useState("all"),[c,u]=d.useState("all"),[m,x]=d.useState("date"),[p,w]=d.useState([]),[y,j]=d.useState(!0),C=ut(),g=N=>{if(!N)return"00:00";const v=Math.floor(N/1e3),b=Math.floor(v/60),k=v%60;return`${String(b).padStart(2,"0")}:${String(k).padStart(2,"0")}`},f=N=>{if(!N)return"Unknown";const v=new Date(N),k=Math.floor((new Date-v)/(1e3*60*60*24));return k===0?"Today":k===1?"Yesterday":k<7?`${k} days ago`:`${["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][v.getMonth()]} ${v.getDate()}`};d.useEffect(()=>{let N=!1;j(!0);const v=E=>{try{return JSON.parse(E)}catch{return null}},b=E=>encodeURIComponent(String(E).trim().toLowerCase().replace(/\s+/g,"-")),k=E=>{var z,O,$,re;const I=Number(E.ts??E.timestamp??E.id)||Date.now(),H=Number(E.ms)||0,te=Number(E.total)||0,D=Number(E.correct)||0,Q=String(E.mode||"").toLowerCase().includes("practice")?"practice":"quiz",R=((z=E.snapshot)==null?void 0:z.category)||((O=E.snapshot)==null?void 0:O.categoryLabel)||E.cat||E.category||"Unknown",T=(($=E.snapshot)==null?void 0:$.categoryParam)||b(R),M=String(((re=E.snapshot)==null?void 0:re.difficulty)||E.difficulty||"medium").toLowerCase();return{id:E.id??I,type:Q,category:R,categoryParam:T,difficulty:M,score:D,total:te,accuracy:te?Math.round(D/te*100):0,time:g(H),ms:H,date:f(I),timestamp:I,snapshot:E.snapshot??null,mode:E.mode||(Q==="practice"?"Practice":"Quiz")}};try{const E=localStorage.getItem(wg),I=E?v(E):null,te=(Array.isArray(I)&&I.length?I:_u).map(k).filter(D=>D&&D.timestamp).sort((D,q)=>q.timestamp-D.timestamp);N||w(te)}catch(E){console.error("Error loading history:",E),N||w(_u)}finally{N||j(!1)}return()=>{N=!0}},[]);const h=d.useMemo(()=>{const N=new Set(p.map(v=>v.category));return Array.from(N)},[p]),S=d.useMemo(()=>{let N=p.filter(v=>e==="quizzes"?v.type==="quiz":v.type==="practice");return a!=="all"&&(N=N.filter(v=>v.category===a)),c!=="all"&&(N=N.filter(v=>v.difficulty===c)),N.sort((v,b)=>m==="date"?b.timestamp-v.timestamp:m==="score"?b.accuracy-v.accuracy:m==="time"?v.ms-b.ms:0),N},[p,e,a,c,m]),_=d.useMemo(()=>{if(S.length===0)return null;const N=S.reduce((E,I)=>E+I.score,0),v=S.reduce((E,I)=>E+I.total,0),b=v?Math.round(N/v*100):0,k=S.reduce((E,I)=>E+I.ms,0);return{count:S.length,avgAccuracy:b,totalTime:g(k),bestScore:Math.max(...S.map(E=>E.accuracy))}},[S]),L=N=>N>=80?"text-green-400":N>=60?"text-blue-400":N>=40?"text-yellow-400":"text-red-400";return y?s.jsx("div",{className:"min-h-full bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900 flex items-center justify-center",children:s.jsx("div",{className:"text-white",children:"Loading history..."})}):s.jsxs("div",{className:"min-h-full bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900 pt-12",children:[s.jsx("div",{className:"",children:s.jsxs("div",{className:"px-4 pt-4 pb-4",children:[s.jsxs("div",{className:"flex items-center justify-between mb-3",children:[s.jsx("button",{onClick:()=>C("/profile",{replace:!0}),className:"px-3 py-1.5 rounded-xl border border-white/20 bg-white/10 text-white text-sm flex items-center gap-1",children:"← Back"}),s.jsx("button",{onClick:()=>o(!i),className:"p-2 rounded-xl border border-white/20 bg-white/10 text-white",children:s.jsx(Cg,{})})]}),s.jsx("h1",{className:"text-2xl font-bold text-white mb-1",children:"History"}),s.jsx("p",{className:"text-white/70 text-sm",children:"Track your progress"})]})}),s.jsxs("div",{className:"px-4 pb-20",children:[s.jsx("div",{className:`
             sticky top-0 z-[60] isolate
            -mx-4 px-4
            py-4 mb-2
            bg-gray-900/95
            backdrop-blur-md
            border-b border-white/10
        `,children:s.jsx("div",{className:"flex items-center",children:s.jsx("div",{className:"inline-flex p-1 rounded-2xl bg-white/10 border border-white/20",children:[{value:"quizzes",label:"Quizzes",icon:"🎯"},{value:"practice",label:"Practice",icon:"📝"}].map(N=>s.jsxs("button",{onClick:()=>t(N.value),className:`px-12 py-2 text-sm rounded-xl transition-all duration-200 ${e===N.value?"bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg":"text-white/70 hover:text-white"}`,children:[s.jsx("span",{className:"mr-1",children:N.icon}),N.label]},N.value))})})}),_&&s.jsx("div",{className:"mb-4 p-4 rounded-2xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-white/20",children:s.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-3",children:[s.jsx(si,{label:"Total",value:_.count}),s.jsx(si,{label:"Avg Score",value:`${_.avgAccuracy}%`,color:L(_.avgAccuracy)}),s.jsx(si,{label:"Best Score",value:`${_.bestScore}%`,color:"text-green-400"}),s.jsx(si,{label:"Total Time",value:_.totalTime})]})}),i&&s.jsx("div",{className:"mb-4 p-4 rounded-2xl bg-white/10 border border-white/20",children:s.jsxs("div",{className:"space-y-3",children:[s.jsxs("div",{children:[s.jsx("label",{className:"text-xs text-white/60 mb-1 block",children:"Category"}),s.jsxs("select",{value:a,onChange:N=>l(N.target.value),className:"w-full px-3 py-2 rounded-xl bg-black/30 border border-white/20 text-white text-sm",children:[s.jsx("option",{value:"all",children:"All Categories"}),h.map(N=>s.jsx("option",{value:N,children:N},N))]})]}),s.jsxs("div",{className:"flex gap-2",children:[s.jsxs("div",{className:"flex-1",children:[s.jsx("label",{className:"text-xs text-white/60 mb-1 block",children:"Difficulty"}),s.jsxs("select",{value:c,onChange:N=>u(N.target.value),className:"w-full px-3 py-2 rounded-xl bg-black/30 border border-white/20 text-white text-sm",children:[s.jsx("option",{value:"all",children:"All"}),s.jsx("option",{value:"easy",children:"Easy"}),s.jsx("option",{value:"medium",children:"Medium"}),s.jsx("option",{value:"hard",children:"Hard"})]})]}),s.jsxs("div",{className:"flex-1",children:[s.jsx("label",{className:"text-xs text-white/60 mb-1 block",children:"Sort By"}),s.jsxs("select",{value:m,onChange:N=>x(N.target.value),className:"w-full px-3 py-2 rounded-xl bg-black/30 border border-white/20 text-white text-sm",children:[s.jsx("option",{value:"date",children:"Date"}),s.jsx("option",{value:"score",children:"Score"}),s.jsx("option",{value:"time",children:"Time"})]})]})]})]})}),S.length===0?s.jsxs("div",{className:"text-center py-12",children:[s.jsx("div",{className:"text-4xl mb-3",children:"📚"}),s.jsxs("p",{className:"text-white/60",children:["No ",e," history yet"]}),s.jsx("p",{className:"text-white/40 text-sm mt-1",children:"Start playing to see your progress here!"})]}):s.jsx("div",{className:"space-y-3",children:S.map((N,v)=>s.jsx(Ng,{item:N,index:v,onClick:()=>r(N)},N.id))})]}),n&&s.jsx(Sg,{item:n,onClose:()=>r(null)})]})}function si({label:e,value:t,color:n="text-white"}){return s.jsxs("div",{className:"text-center",children:[s.jsx("div",{className:"text-xs text-white/60 mb-1",children:e}),s.jsx("div",{className:`text-lg font-bold ${n}`,children:t})]})}function Ng({item:e,index:t,onClick:n}){const r=a=>a>=80?"from-green-500/20 to-green-600/10 border-green-500/30":a>=60?"from-blue-500/20 to-blue-600/10 border-blue-500/30":a>=40?"from-yellow-500/20 to-yellow-600/10 border-yellow-500/30":"from-red-500/20 to-red-600/10 border-red-500/30",o=(a=>{const l=a==null?void 0:a.toLowerCase();return l==="easy"?{bg:"bg-green-500/20",text:"text-green-400",border:"border-green-500/30"}:l==="medium"?{bg:"bg-yellow-500/20",text:"text-yellow-400",border:"border-yellow-500/30"}:l==="hard"?{bg:"bg-red-500/20",text:"text-red-400",border:"border-red-500/30"}:{bg:"bg-gray-500/20",text:"text-gray-400",border:"border-gray-500/30"}})(e.difficulty);return s.jsxs("div",{onClick:n,className:`
        relative rounded-2xl p-4 cursor-pointer
        bg-gradient-to-br ${r(e.accuracy)}
        border transform transition-all duration-300 hover:scale-[1.02]
      `,children:[s.jsxs("div",{className:"flex items-start justify-between mb-3",children:[s.jsxs("div",{className:"flex-1",children:[s.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[s.jsx("span",{className:"text-lg",children:e.type==="quiz"?"🎯":"📝"}),s.jsx("h3",{className:"font-semibold text-white",children:e.category})]}),s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx("span",{className:`px-2 py-0.5 rounded-full text-xs ${o.bg} ${o.text} ${o.border} border`,children:e.difficulty}),s.jsx("span",{className:"text-xs text-white/50",children:e.date})]})]}),s.jsxs("div",{className:"text-right",children:[s.jsxs("div",{className:`text-2xl font-bold ${e.accuracy>=80?"text-green-400":e.accuracy>=60?"text-blue-400":e.accuracy>=40?"text-yellow-400":"text-red-400"}`,children:[e.accuracy,"%"]}),s.jsxs("div",{className:"text-xs text-white/60",children:[e.score,"/",e.total]})]})]}),s.jsxs("div",{className:"flex items-center justify-between text-xs",children:[s.jsxs("div",{className:"flex items-center gap-3 text-white/60",children:[s.jsxs("span",{children:["⏱ ",e.time]}),s.jsx("span",{children:e.mode})]}),s.jsx("span",{className:"text-white/40",children:"Tap to review →"})]})]})}function Sg({item:e,onClose:t}){const n=ut();return d.useEffect(()=>{const r=i=>{i.key==="Escape"&&t()};return document.addEventListener("keydown",r),()=>document.removeEventListener("keydown",r)},[t]),s.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80",onClick:t,children:s.jsxs("div",{className:"w-full max-w-md bg-gray-900 rounded-3xl p-6 border border-white/20",onClick:r=>r.stopPropagation(),children:[s.jsxs("div",{className:"flex items-center justify-between mb-4",children:[s.jsx("h2",{className:"text-xl font-bold text-white",children:"Quiz Details"}),s.jsx("button",{onClick:t,className:"p-2 rounded-xl bg-white/10 hover:bg-white/20 transition-colors text-white",children:"✕"})]}),s.jsxs("div",{className:"space-y-4",children:[s.jsxs("div",{className:"p-4 rounded-2xl bg-white/5 border border-white/10",children:[s.jsxs("div",{className:"flex items-center justify-between mb-2",children:[s.jsx("span",{className:"text-white/60",children:"Category"}),s.jsx("span",{className:"text-white font-medium",children:e.category})]}),s.jsxs("div",{className:"flex items-center justify-between mb-2",children:[s.jsx("span",{className:"text-white/60",children:"Difficulty"}),s.jsx("span",{className:`${e.difficulty==="easy"?"text-green-400":e.difficulty==="medium"?"text-yellow-400":"text-red-400"} font-medium`,children:e.difficulty})]}),s.jsxs("div",{className:"flex items-center justify-between mb-2",children:[s.jsx("span",{className:"text-white/60",children:"Score"}),s.jsxs("span",{className:"text-white font-medium",children:[e.score,"/",e.total]})]}),s.jsxs("div",{className:"flex items-center justify-between mb-2",children:[s.jsx("span",{className:"text-white/60",children:"Accuracy"}),s.jsxs("span",{className:`${e.accuracy>=80?"text-green-400":e.accuracy>=60?"text-blue-400":"text-yellow-400"} font-medium`,children:[e.accuracy,"%"]})]}),s.jsxs("div",{className:"flex items-center justify-between",children:[s.jsx("span",{className:"text-white/60",children:"Time"}),s.jsx("span",{className:"text-white font-medium",children:e.time})]})]}),e.snapshot&&s.jsx("button",{onClick:()=>{t(),localStorage.setItem(jg,JSON.stringify(e.snapshot)),n(`/quiz/${e.categoryParam}/start?review=1&attempt=${e.id}`,{state:{reviewFrom:"history",historyPath:"/profile/history"}})},className:"w-full py-3 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium hover:opacity-90 transition-opacity",children:"Review Answers"}),s.jsx("button",{onClick:()=>{var r;t(),n(`/quiz/${e.categoryParam}/start`,{state:{mode:"quiz",retake:!0,difficulty:e.difficulty,count:e.total,timer:((r=e.snapshot)==null?void 0:r.timer)||{type:"per_q",seconds:45},fromHistory:!0}})},className:"w-full py-3 rounded-2xl border border-white/20 text-white font-medium hover:bg-white/10 transition-colors",children:"Retake Quiz"})]})]})})}function Cg(){return s.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:s.jsx("path",{d:"M3 6h18M7 12h10M10 18h4",strokeLinecap:"round",strokeLinejoin:"round"})})}const Eg=d.createContext({});function m0(e){const t=d.useRef(null);return t.current===null&&(t.current=e()),t.current}const _g=typeof window<"u",Rg=_g?d.useLayoutEffect:d.useEffect,p0=d.createContext(null);function Pg(e){return typeof e=="object"&&e!==null}function Tg(e){return Pg(e)&&"offsetHeight"in e}const zg=d.createContext({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"});class Mg extends d.Component{getSnapshotBeforeUpdate(t){const n=this.props.childRef.current;if(n&&t.isPresent&&!this.props.isPresent){const r=n.offsetParent,i=Tg(r)&&r.offsetWidth||0,o=this.props.sizeRef.current;o.height=n.offsetHeight||0,o.width=n.offsetWidth||0,o.top=n.offsetTop,o.left=n.offsetLeft,o.right=i-o.width-o.left}return null}componentDidUpdate(){}render(){return this.props.children}}function Lg({children:e,isPresent:t,anchorX:n,root:r}){const i=d.useId(),o=d.useRef(null),a=d.useRef({width:0,height:0,top:0,left:0,right:0}),{nonce:l}=d.useContext(zg);return d.useInsertionEffect(()=>{const{width:c,height:u,top:m,left:x,right:p}=a.current;if(t||!o.current||!c||!u)return;const w=n==="left"?`left: ${x}`:`right: ${p}`;o.current.dataset.motionPopId=i;const y=document.createElement("style");l&&(y.nonce=l);const j=r??document.head;return j.appendChild(y),y.sheet&&y.sheet.insertRule(`
          [data-motion-pop-id="${i}"] {
            position: absolute !important;
            width: ${c}px !important;
            height: ${u}px !important;
            ${w}px !important;
            top: ${m}px !important;
          }
        `),()=>{j.contains(y)&&j.removeChild(y)}},[t]),s.jsx(Mg,{isPresent:t,childRef:o,sizeRef:a,children:d.cloneElement(e,{ref:o})})}const Ig=({children:e,initial:t,isPresent:n,onExitComplete:r,custom:i,presenceAffectsLayout:o,mode:a,anchorX:l,root:c})=>{const u=m0(Fg),m=d.useId();let x=!0,p=d.useMemo(()=>(x=!1,{id:m,initial:t,isPresent:n,custom:i,onExitComplete:w=>{u.set(w,!0);for(const y of u.values())if(!y)return;r&&r()},register:w=>(u.set(w,!1),()=>u.delete(w))}),[n,u,r]);return o&&x&&(p={...p}),d.useMemo(()=>{u.forEach((w,y)=>u.set(y,!1))},[n]),d.useEffect(()=>{!n&&!u.size&&r&&r()},[n]),a==="popLayout"&&(e=s.jsx(Lg,{isPresent:n,anchorX:l,root:c,children:e})),s.jsx(p0.Provider,{value:p,children:e})};function Fg(){return new Map}function Dg(e=!0){const t=d.useContext(p0);if(t===null)return[!0,null];const{isPresent:n,onExitComplete:r,register:i}=t,o=d.useId();d.useEffect(()=>{if(e)return i(o)},[e]);const a=d.useCallback(()=>e&&r&&r(o),[o,r,e]);return!n&&r?[!1,a]:[!0]}const ii=e=>e.key||"";function Ru(e){const t=[];return d.Children.forEach(e,n=>{d.isValidElement(n)&&t.push(n)}),t}const Ko=({children:e,custom:t,initial:n=!0,onExitComplete:r,presenceAffectsLayout:i=!0,mode:o="sync",propagate:a=!1,anchorX:l="left",root:c})=>{const[u,m]=Dg(a),x=d.useMemo(()=>Ru(e),[e]),p=a&&!u?[]:x.map(ii),w=d.useRef(!0),y=d.useRef(x),j=m0(()=>new Map),[C,g]=d.useState(x),[f,h]=d.useState(x);Rg(()=>{w.current=!1,y.current=x;for(let L=0;L<f.length;L++){const N=ii(f[L]);p.includes(N)?j.delete(N):j.get(N)!==!0&&j.set(N,!1)}},[f,p.length,p.join("-")]);const S=[];if(x!==C){let L=[...x];for(let N=0;N<f.length;N++){const v=f[N],b=ii(v);p.includes(b)||(L.splice(N,0,v),S.push(v))}return o==="wait"&&S.length&&(L=S),h(Ru(L)),g(x),null}const{forceRender:_}=d.useContext(Eg);return s.jsx(s.Fragment,{children:f.map(L=>{const N=ii(L),v=a&&!u?!1:x===f||p.includes(N),b=()=>{if(j.has(N))j.set(N,!0);else return;let k=!0;j.forEach(E=>{E||(k=!1)}),k&&(_==null||_(),h(y.current),a&&(m==null||m()),r&&r())};return s.jsx(Ig,{isPresent:v,initial:!w.current||n?void 0:!1,custom:t,presenceAffectsLayout:i,mode:o,root:c,onExitComplete:v?void 0:b,anchorX:l,children:L},N)})})},Ag=()=>{const[e,t]=d.useState(null);d.useEffect(()=>{if(typeof window<"u"){const U=sessionStorage.getItem("navigationSource");U&&t(U)}},[]);const n=U=>{typeof window<"u"&&(sessionStorage.setItem("navigationSource","/rewards"),window.location.href=U)},r=()=>{if(typeof window<"u"){const U=sessionStorage.getItem("navigationSource");window.location.href="/profile",sessionStorage.removeItem("navigationSource")}},i=[{id:1,type:"coins",value:100,icon:"🪙",label:"100 Coins",cost:0},{id:2,type:"life",value:1,icon:"❤️",label:"1 Life",cost:50},{id:3,type:"coins",value:200,icon:"🪙",label:"200 Coins",cost:0},{id:4,type:"wildcard",value:1,icon:"🃏",label:"Wild Card",cost:100},{id:5,type:"coins",value:500,icon:"💰",label:"500 Coins",cost:0,milestone:!0},{id:6,type:"fifty-fifty",value:1,icon:"➗",label:"50:50",cost:150},{id:7,type:"life",value:2,icon:"❤️",label:"2 Lives",cost:100},{id:8,type:"vehicle",value:"bike",icon:"🏍️",label:"Motorcycle",cost:300},{id:9,type:"mystery",value:1,icon:"🎁",label:"Mystery Box",cost:200},{id:10,type:"coins",value:750,icon:"💰",label:"750 Coins",cost:0,milestone:!0},{id:11,type:"life",value:3,icon:"❤️",label:"3 Lives",cost:150},{id:12,type:"wildcard",value:2,icon:"🃏",label:"2x Wild Card",cost:250},{id:13,type:"vehicle",value:"car",icon:"🚗",label:"Car",cost:500},{id:14,type:"fifty-fifty",value:2,icon:"➗",label:"2x 50:50",cost:300},{id:15,type:"coins",value:1e3,icon:"💎",label:"1000 Coins",cost:0,milestone:!0}],o={cycle:{icon:"🚴",name:"Bicycle"},bike:{icon:"🏍️",name:"Motorcycle"},car:{icon:"🚗",name:"Car"}},{player:a,addCoins:l}=un(),[c,u]=d.useState(4),[m,x]=d.useState((a==null?void 0:a.coins)||0),[p,w]=d.useState(4),[y,j]=d.useState(!1),[C,g]=d.useState(!1),[f,h]=d.useState(0),[S,_]=d.useState(0),[L,N]=d.useState("cycle"),[v,b]=d.useState([{type:"vehicle",icon:"🚴",name:"Bicycle",count:1},{type:"wildcard",icon:"🃏",name:"Wild Card",count:2},{type:"fifty-fifty",icon:"➗",name:"50:50 Helper",count:1}]),[k,E]=d.useState([0,1,2,3]),[I,H]=d.useState(!1),[te,D]=d.useState(!1),[q,Q]=d.useState(null),[R,T]=d.useState(null),[M,z]=d.useState(!1),[O,$]=d.useState(null),[re,B]=d.useState(!1),ne=d.useRef(null),fe=d.useRef(null),P=d.useRef(null);d.useEffect(()=>{ne.current=new Audio("/sounds/reward.mp3"),fe.current=new Audio("/sounds/reward_progress.mp3"),[ne,fe].forEach(U=>{var X;(X=U.current)==null||X.addEventListener("error",()=>{console.log("Sound file not found")})})},[]);const F=U=>{try{U.current&&(U.current.currentTime=0,U.current.play().catch(X=>console.log("Audio play failed:",X)))}catch(X){console.log("Sound play error:",X)}},Y=(U,X)=>{if(U>c){T(X),D(!0);return}U===c&&J(U,X)},V=U=>{var ee;const X=(ee=P.current)==null?void 0:ee.querySelector(`[data-index="${U}"]`);if(X){const le=X.getBoundingClientRect(),Ee=window.pageYOffset||document.documentElement.scrollTop,Ce=le.top+Ee-window.innerHeight/2+50;window.scrollTo({top:Ce,behavior:"smooth"})}},J=(U,X)=>{if(!k.includes(U)){if(X.cost>0&&m<X.cost){T(X),D(!0);return}X.cost>0&&(x(ee=>ee-X.cost),l(-X.cost)),F(ne),H(!0),T(X),E(ee=>[...ee,U]),setTimeout(()=>{H(!1),X.type==="coins"?(h(X.value),j(!0),setTimeout(()=>{x(ee=>ee+X.value),l(X.value),setTimeout(()=>{j(!1),h(0)},500)},300)):X.type==="life"?(_(X.value),g(!0),setTimeout(()=>{w(ee=>ee+X.value),setTimeout(()=>{g(!1),_(0)},500)},300)):($({icon:X.icon,startX:window.innerWidth/2,startY:window.innerHeight/2}),setTimeout(()=>{$(null),B(!0),me(X),X.type==="vehicle"&&N(X.value),setTimeout(()=>{B(!1)},500)},800)),setTimeout(()=>{if(c<i.length-1){const ee=c+1;V(ee),setTimeout(()=>{z(!0),F(fe),u(ee),setTimeout(()=>{z(!1)},500)},300)}},1200)},1500)}},me=U=>{b(X=>X.find(le=>le.icon===U.icon)?X.map(le=>le.icon===U.icon?{...le,count:le.count+1}:le):[...X,{type:U.type,icon:U.icon,name:U.label,count:1}])},Z=U=>30+U*100,se=()=>30+c*100;return s.jsxs("div",{className:"rewards-page",children:[s.jsx("style",{jsx:!0,children:`
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
      `}),s.jsx("div",{className:"non-sticky-header",children:s.jsx("button",{className:"back-button",onClick:r,children:"← Back"})}),s.jsxs("div",{className:"sticky-section",children:[s.jsxs("div",{className:"header-wrapper",children:[s.jsxs("div",{className:"title-row",children:[s.jsxs("div",{children:[s.jsx("h1",{className:"title",children:"Rewards"}),s.jsx("p",{className:"subtitle",children:"Claim amazing prizes"})]}),s.jsx("button",{className:"play-quiz-btn",onClick:()=>n("/play"),children:"Play Quiz"})]}),s.jsx("div",{className:"balance-row",children:s.jsx("div",{className:"balance-item",children:s.jsxs("div",{children:[s.jsx("div",{className:"balance-label",children:"Balance"}),s.jsxs("div",{className:`balance-value ${y?"animating":""}`,children:[m.toLocaleString()," 🪙",y&&s.jsxs("span",{className:"value-change",children:["+",f]})]})]})})})]}),s.jsx("div",{className:"stats-cards-container",children:s.jsxs("div",{className:"info-grid",children:[s.jsxs("div",{className:"info-card",children:[s.jsx("div",{className:"info-icon",children:"❤️"}),s.jsxs("div",{className:`info-value ${C?"animating":""}`,children:[p,C&&s.jsxs("span",{className:"value-change",children:["+",S]})]}),s.jsx("div",{className:"info-label",children:"Lives"})]}),s.jsxs("div",{className:"info-card",children:[s.jsx("div",{className:"info-icon",children:"⭐"}),s.jsx("div",{className:"info-value",children:"5"}),s.jsx("div",{className:"info-label",children:"Level"})]}),s.jsxs("div",{className:"info-card",children:[s.jsx("div",{className:"info-icon",children:o[L].icon}),s.jsx("div",{className:"info-value",children:o[L].name}),s.jsx("div",{className:"info-label",children:"Vehicle"})]}),s.jsxs("div",{className:`cards-section ${re?"animating":""}`,children:[s.jsx("div",{className:"cards-label",children:"Your Cards"}),s.jsx("div",{className:"card-grid",children:v.map((U,X)=>s.jsxs("div",{className:"card-item",onClick:()=>Q(U),children:[s.jsxs("div",{className:"large-card",children:[s.jsx("div",{className:"large-card-icon",children:U.icon}),s.jsx("div",{className:"large-card-name",children:U.name})]}),U.count>1&&s.jsx("div",{className:"card-count-badge",children:U.count})]},X))})]})]})})]}),s.jsx("div",{className:"scrollable-journey",children:s.jsx("div",{className:"journey-container",ref:P,children:s.jsxs("div",{className:"journey-track",children:[s.jsx("div",{className:"curvy-road",children:s.jsxs("svg",{className:"road-svg",viewBox:"0 0 60 1500",preserveAspectRatio:"none",children:[s.jsx("defs",{children:s.jsxs("linearGradient",{id:"roadGradient",x1:"0%",y1:"0%",x2:"0%",y2:"100%",children:[s.jsx("stop",{offset:"0%",stopColor:"#5E5CE6"}),s.jsx("stop",{offset:"100%",stopColor:"#5E5CE6"})]})}),s.jsx("path",{className:"road-path",d:"M 30 0 Q 45 50, 30 100 T 30 200 Q 15 250, 30 300 T 30 400 Q 45 450, 30 500 T 30 600 Q 15 650, 30 700 T 30 800 Q 45 850, 30 900 T 30 1000 Q 15 1050, 30 1100 T 30 1200 Q 45 1250, 30 1300 T 30 1400 L 30 1500"}),s.jsx("path",{className:"road-progress",d:"M 30 0 Q 45 50, 30 100 T 30 200 Q 15 250, 30 300 T 30 400 Q 45 450, 30 500 T 30 600 Q 15 650, 30 700 T 30 800 Q 45 850, 30 900 T 30 1000 Q 15 1050, 30 1100 T 30 1200 Q 45 1250, 30 1300 T 30 1400 L 30 1500",strokeDasharray:"1500",strokeDashoffset:1500-c/(i.length-1)*1500})]})}),s.jsxs("div",{className:"avatar-tracker",style:{top:`${se()}px`},children:[s.jsx("img",{className:"avatar-img",src:"/profile/avatar.png",alt:"You",onError:U=>{U.target.style.display="none"}}),s.jsx("div",{className:"tracker-vehicle",children:o[L].icon})]}),s.jsx("div",{className:"rewards-list",children:i.map((U,X)=>{const ee=X%2===0,le=X>c,Ee=k.includes(X),Ce=X===c;return s.jsx("div",{className:"reward-row","data-index":X,style:{top:`${Z(X)}px`},children:s.jsxs("div",{className:`reward-item ${ee?"left":"right"}`,children:[s.jsxs("div",{className:`checkpoint ${Ce?"current":Ee?"claimed":le?"locked":""}`,onClick:()=>Y(X,U),children:[s.jsx("div",{className:"checkpoint-icon",children:U.icon}),s.jsx("div",{className:"checkpoint-value",children:U.label.split(" ")[0]}),U.milestone&&s.jsx("div",{className:"milestone-badge",children:"BONUS"}),le&&s.jsx("div",{className:"lock-icon",children:"🔒"})]}),s.jsxs("div",{className:"reward-info",children:[s.jsx("div",{className:"reward-name",children:U.label}),s.jsxs("div",{className:"step-label",children:["Step ",X+1]})]})]})},U.id)})})]})})}),O&&s.jsx("div",{className:"flying-card",style:{left:`${O.startX}px`,top:`${O.startY}px`,"--startX":`${O.startX}px`},children:O.icon}),s.jsx(Ko,{children:q&&s.jsx("div",{className:"claim-overlay",onClick:()=>Q(null),children:s.jsxs("div",{className:"modal",onClick:U=>U.stopPropagation(),children:[s.jsx("div",{className:"modal-icon",children:q.icon}),s.jsx("div",{className:"card-detail-name",children:q.name}),s.jsxs("div",{className:"card-detail-desc",children:["You have ",q.count," of these cards"]}),s.jsx("div",{className:"modal-buttons",children:s.jsx("button",{className:"modal-btn modal-btn-secondary",onClick:()=>Q(null),children:"Close"})})]})})}),s.jsx(Ko,{children:I&&R&&s.jsx("div",{className:"claim-overlay",children:s.jsxs("div",{className:"modal",children:[s.jsx("div",{className:"modal-title",children:"WELL DONE!"}),s.jsx("div",{className:"modal-subtitle",children:"Here's a reward for you."}),s.jsx("div",{className:"modal-icon",children:R.icon}),s.jsxs("div",{className:"modal-value",children:["+",R.value," ",R.type==="coins"?"Coins":R.type==="life"?"Lives":R.label]})]})})}),s.jsx(Ko,{children:te&&R&&s.jsx("div",{className:"claim-overlay",onClick:()=>D(!1),children:s.jsxs("div",{className:"modal",onClick:U=>U.stopPropagation(),children:[s.jsx("div",{className:"modal-icon",children:"🪙"}),s.jsx("div",{className:"modal-title",children:"Need More Coins"}),s.jsx("div",{className:"modal-subtitle",children:R.cost>0?`You need ${R.cost-m} more coins`:"Complete previous rewards first"}),s.jsxs("div",{className:"modal-buttons",children:[s.jsx("button",{className:"modal-btn modal-btn-primary",onClick:()=>n("/play"),children:"Play Quiz"}),s.jsx("button",{className:"modal-btn modal-btn-secondary",onClick:()=>D(!1),children:"Cancel"})]})]})})})]})},oi=[{id:1,name:"First Win",emoji:"🏆",unlocked:!0,hint:"Win your first quiz",progress:100,color:"#FFD700"},{id:2,name:"On Fire",emoji:"🔥",unlocked:!0,hint:"3-day winning streak",progress:100,color:"#FF6B35"},{id:3,name:"Perfectionist",emoji:"⭐",unlocked:!1,hint:"Score 10/10 in any quiz",progress:75,color:"#9333EA"},{id:4,name:"Early Bird",emoji:"🌅",unlocked:!0,hint:"Play before 9 AM",progress:100,color:"#F59E0B"},{id:5,name:"Scholar",emoji:"🎓",unlocked:!1,hint:"Master 5 categories",progress:40,color:"#3B82F6"},{id:6,name:"Lightning",emoji:"⚡",unlocked:!1,hint:"Complete in under 2 minutes",progress:20,color:"#10B981"},{id:7,name:"Champion",emoji:"👑",unlocked:!1,hint:"Win 50 quizzes",progress:30,color:"#EC4899"},{id:8,name:"Explorer",emoji:"🗺️",unlocked:!1,hint:"Try all categories",progress:60,color:"#06B6D4"},{id:9,name:"Strategist",emoji:"🧠",unlocked:!0,hint:"Use 3 power-ups wisely",progress:100,color:"#8B5CF6"}];function Og(){const[e,t]=d.useState(null),n=oi.filter(i=>i.unlocked).length,r=Math.round(n/oi.length*100);return s.jsxs("div",{className:"badges-screen",children:[s.jsx("style",{jsx:!0,children:`
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
      `}),s.jsxs("div",{className:"header",children:[s.jsx("button",{className:"back-button",onClick:()=>window.history.back(),children:"← Back"}),s.jsxs("div",{className:"title-section",children:[s.jsx("h1",{className:"main-title",children:"Badge Collection"}),s.jsx("p",{className:"subtitle",children:"Unlock achievements and show your skills"})]})]}),s.jsxs("div",{className:"progress-card",children:[s.jsxs("div",{className:"progress-header",children:[s.jsx("span",{className:"progress-label",children:"Collection Progress"}),s.jsxs("span",{className:"progress-value",children:[n,"/",oi.length]})]}),s.jsx("div",{className:"progress-bar-container",children:s.jsx("div",{className:"progress-bar-fill",style:{width:`${r}%`}})})]}),s.jsx("div",{className:"badges-grid",children:oi.map(i=>s.jsxs("div",{className:`badge-card ${i.unlocked?"unlocked":""}`,style:{"--badge-color":i.color},onClick:()=>t(i),children:[s.jsx("div",{className:"badge-glow"}),s.jsx("div",{className:"badge-emoji",children:i.emoji}),s.jsx("div",{className:"badge-name",children:i.name}),!i.unlocked&&s.jsxs(s.Fragment,{children:[s.jsx("div",{className:"badge-progress",children:s.jsx("div",{className:"badge-progress-fill",style:{width:`${i.progress}%`}})}),s.jsx("div",{className:"lock-indicator",children:"🔒"})]})]},i.id))}),s.jsxs("div",{className:"tips-card",children:[s.jsxs("div",{className:"tips-title",children:[s.jsx("span",{children:"💡"}),s.jsx("span",{children:"Pro Tip"})]}),s.jsx("div",{className:"tips-content",children:"Complete daily challenges and maintain streaks to unlock rare badges faster. Each badge gives you bonus XP and special rewards!"})]}),e&&s.jsx("div",{className:"badge-modal",onClick:()=>t(null),children:s.jsxs("div",{className:"modal-content",onClick:i=>i.stopPropagation(),children:[s.jsx("div",{className:`modal-badge ${e.unlocked?"":"locked"}`,children:e.emoji}),s.jsx("h3",{className:"modal-title",children:e.name}),s.jsx("span",{className:`modal-status ${e.unlocked?"":"locked"}`,children:e.unlocked?"✓ Unlocked":"🔒 Locked"}),s.jsx("p",{className:"modal-description",children:e.hint}),!e.unlocked&&s.jsxs("div",{className:"modal-progress-section",children:[s.jsx("div",{className:"modal-progress-label",children:"Progress"}),s.jsx("div",{className:"modal-progress-bar",children:s.jsx("div",{className:"modal-progress-fill",style:{width:`${e.progress}%`,"--badge-color":e.color}})}),s.jsxs("div",{className:"modal-progress-text",children:[e.progress,"%"]})]}),s.jsx("button",{className:"modal-close",onClick:()=>t(null),children:e.unlocked?"Awesome!":"Keep Going!"})]})})]})}const $g=[{id:1,title:"Quiz Master",subtitle:"Play 10 quizzes",current:7,target:10,reward:150,claimed:!1,icon:"🎯",color:"#FF6B6B"},{id:2,title:"Coin Collector",subtitle:"Earn 2,000 coins",current:1240,target:2e3,reward:200,claimed:!1,icon:"💰",color:"#4ECDC4"},{id:3,title:"Winning Streak",subtitle:"Win 3 in a row",current:3,target:3,reward:100,claimed:!0,icon:"🔥",color:"#FFD93D"},{id:4,title:"Speed Demon",subtitle:"Complete 5 under 2min",current:2,target:5,reward:300,claimed:!1,icon:"⚡",color:"#A8E6CF"},{id:5,title:"Perfect Score",subtitle:"Get 100% accuracy",current:0,target:1,reward:250,claimed:!1,icon:"⭐",color:"#C7B8FF"}];function Bg(){const{player:e,addCoins:t}=un(),[n,r]=d.useState($g),[i,o]=d.useState(null),[a,l]=d.useState((e==null?void 0:e.coins)||0),[c,u]=d.useState(!1),[m,x]=d.useState([]),p=n.length,w=n.filter(C=>C.current>=C.target).length,y=Math.round(w/p*100);d.useEffect(()=>{const C=setInterval(()=>{x(g=>{const f={id:Date.now(),x:Math.random()*100,y:Math.random()*100,size:Math.random()*20+10};return[...g.slice(-4),f]})},3e3);return()=>clearInterval(C)},[]);const j=(C,g)=>{o(C),navigator.vibrate&&navigator.vibrate([20,10,20]),setTimeout(()=>{r(f=>f.map(h=>h.id===C?{...h,claimed:!0}:h)),l(f=>f+g),o(null),u(!0),setTimeout(()=>u(!1),2e3)},600)};return s.jsxs("div",{className:"achievements-screen",children:[s.jsx("style",{jsx:!0,children:`
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
      `}),s.jsxs("div",{className:"floating-shapes",children:[s.jsx("div",{className:"shape shape-1"}),s.jsx("div",{className:"shape shape-2"})]}),s.jsxs("div",{className:"header",children:[s.jsx("button",{className:"back-button",onClick:()=>window.history.back(),children:"← Back"}),s.jsxs("div",{className:"coins-display",children:["🪙 ",a.toLocaleString()]}),s.jsxs("div",{className:"title-section",children:[s.jsx("h1",{className:"main-title",children:"ACHIEVEMENTS"}),s.jsx("p",{className:"subtitle",children:"Complete challenges and earn awesome rewards!"})]})]}),s.jsxs("div",{className:"progress-overview",children:[s.jsx("div",{className:"card-glow",style:{"--card-color":"#FFD93D"}}),s.jsxs("div",{className:"overview-header",children:[s.jsx("span",{className:"overview-label",children:"🎮 Progress Tracker"}),s.jsxs("div",{className:"overview-stats",children:[s.jsx("span",{className:"trophy-icon",children:"🏆"}),s.jsxs("span",{className:"overview-value",children:[w,"/",p]})]})]}),s.jsx("div",{className:"progress-bar-main",children:s.jsx("div",{className:"progress-fill-main",style:{width:`${y}%`}})})]}),s.jsx("div",{className:"achievements-list",children:n.map(C=>{const g=Math.min(100,Math.round(C.current/C.target*100)),f=g===100,h=C.color+"CC";return s.jsxs("div",{className:`achievement-card ${f?"completed":""}`,style:{"--card-color":C.color,"--card-color-dark":h},children:[s.jsx("div",{className:"card-glow"}),f&&C.claimed&&s.jsx("div",{className:"completed-badge",children:"✓"}),s.jsxs("div",{className:"card-content",children:[s.jsx("div",{className:"achievement-icon",children:C.icon}),s.jsxs("div",{className:"achievement-details",children:[s.jsx("div",{className:"achievement-title",children:C.title}),s.jsx("div",{className:"achievement-subtitle",children:C.subtitle}),s.jsxs("div",{className:"progress-container",children:[s.jsx("div",{className:"progress-bar",children:s.jsx("div",{className:"progress-fill",style:{width:`${g}%`}})}),s.jsxs("div",{className:"progress-text",children:[s.jsxs("span",{children:[C.current,"/",C.target]}),s.jsxs("span",{className:"reward-badge",children:["🪙 ",C.reward]})]})]})]}),s.jsx("button",{onClick:()=>j(C.id,C.reward),disabled:!f||C.claimed,className:`claim-button ${C.claimed?"claimed":f?"can-claim":"in-progress"} ${i===C.id?"claiming":""}`,children:C.claimed?"✓":f?"CLAIM!":`${g}%`})]})]},C.id)})}),c&&s.jsx("div",{className:"celebration",children:"🎉"})]})}function Ug(){const{player:e,addCoins:t,updateDailyStreak:n}=un(),r=(e==null?void 0:e.currentStreak)||0,i=(e==null?void 0:e.bestStreak)||0,o=(e==null?void 0:e.totalDays)||0,a=(e==null?void 0:e.coins)||0,l=new Date,c=l.getDay(),u=()=>{const M=new Date(l);return M.setDate(l.getDate()-l.getDay()),M.toISOString().split("T")[0]},[m,x]=d.useState(null),[p,w]=d.useState(!1),[y,j]=d.useState(null),[C,g]=d.useState(null),[f,h]=d.useState(!1),S=d.useRef(null),_=d.useRef(null),[L]=It("/sounds/coin.mp3",{volume:.75}),[N]=It("/sounds/correct.mp3",{volume:.6}),[v,b]=d.useState(()=>{const M=localStorage.getItem("streaks_claimed")||"[]",z=JSON.parse(M),O=u(),$=z.filter(re=>re!==`week_${O}_day_0`);return localStorage.setItem("streaks_claimed",JSON.stringify($)),$});d.useEffect(()=>{const M=()=>{window.scrollTo(0,0),document.documentElement.scrollTop=0,document.body.scrollTop=0;const O=document.querySelector("main");O&&(O.scrollTop=0)};M(),requestAnimationFrame(M);const z=setTimeout(M,100);return()=>clearTimeout(z)},[]),d.useEffect(()=>{h(!0),setTimeout(()=>h(!1),3e3)},[]);const k=[{label:"Mon",short:"M",dayIndex:1},{label:"Tue",short:"T",dayIndex:2},{label:"Wed",short:"W",dayIndex:3},{label:"Thu",short:"T",dayIndex:4},{label:"Fri",short:"F",dayIndex:5},{label:"Sat",short:"S",dayIndex:6},{label:"Sun",short:"S",dayIndex:0}],E=[{day:0,reward:"10",type:"coins",icon:"🎯",label:"Welcome Bonus"},{day:1,reward:"50",type:"coins",icon:"🪙",label:"50 Coins"},{day:2,reward:"100",type:"coins",icon:"🪙",label:"100 Coins"},{day:3,reward:"2x",type:"xp",icon:"⭐",label:"2x XP Boost"},{day:4,reward:"150",type:"coins",icon:"🪙",label:"150 Coins"},{day:5,reward:"Full",type:"energy",icon:"⚡",label:"Energy Refill"},{day:6,reward:"200",type:"coins",icon:"🪙",label:"200 Coins"},{day:7,reward:"Mystery",type:"mystery",icon:"🎁",label:"Mystery Box"}],I=M=>{const z=v.includes(`week_${u()}_day_${M}`);if(M===0)return{isCompleted:!0,isClaimed:z,canClaim:!z,isLocked:!1};const O=r>=M,$=O&&!z,re=r<M;return{isCompleted:O,isClaimed:z,canClaim:$,isLocked:re}},H=(M,z,O)=>{const $=I(z);if($.isLocked){g({day:z,currentStreak:r}),setTimeout(()=>g(null),2e3);return}$.isClaimed||$.canClaim&&(x({...M,day:z}),w(!1),setTimeout(()=>{w(!0),N(),setTimeout(()=>{if(M.type==="coins"){const ne=parseInt(M.reward);if(_.current&&S.current){const fe=_.current.getBoundingClientRect();L(),j({startRect:fe,count:10,amount:ne})}}const re=`week_${u()}_day_${z}`,B=[...v,re];b(B),localStorage.setItem("streaks_claimed",JSON.stringify(B))},500),setTimeout(()=>{x(null),w(!1)},2500)},500))},te=(M,z)=>{const O=z+1,$=k[z].dayIndex===c;return r>=O?$?"today-completed":"completed":$?"today-pending":O<=r+1?"pending":"future"},D=[{days:3,emoji:"⚡",label:"Starter",achieved:r>=3},{days:7,emoji:"🔥",label:"Week Warrior",achieved:r>=7},{days:30,emoji:"💎",label:"Champion",achieved:r>=30},{days:100,emoji:"👑",label:"Legend",achieved:r>=100}],q=D.find(M=>M.days>r)||D[D.length-1],Q=Math.min(100,r/q.days*100),R=()=>{window.location.href="/play"},T=()=>{window.location.href="/profile"};return s.jsxs("div",{className:"streaks-screen",children:[s.jsx("style",{jsx:!0,children:`
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
      `}),y&&s.jsx(Vl,{startRect:y.startRect,targetRef:S,count:y.count,onDone:()=>{t(y.amount),j(null)}}),s.jsxs("div",{className:"header",children:[s.jsxs("div",{className:"header-top",children:[s.jsx("button",{className:"back-button",onClick:T,children:"← Back"}),s.jsxs("div",{className:"coin-pill",ref:S,id:"coin-pill",children:[s.jsx("span",{className:"coin-icon",children:"🪙"}),s.jsx("span",{className:"coin-amount",children:a})]})]}),s.jsxs("div",{className:"title-section",children:[s.jsx("h1",{className:"main-title",children:"STREAKS"}),s.jsx("p",{className:"subtitle",children:"Keep the fire burning!"})]})]}),s.jsxs("div",{className:"streak-hero",children:[s.jsx("div",{className:"fire-animation",children:"🔥"}),s.jsx("div",{className:"streak-number",children:r}),s.jsx("div",{className:"streak-label",children:"DAY STREAK"}),s.jsxs("div",{className:"stats-row",children:[s.jsxs("div",{className:"stat-card",children:[s.jsx("div",{className:"stat-value",children:i}),s.jsx("div",{className:"stat-label",children:"Best Streak"})]}),s.jsxs("div",{className:"stat-card",children:[s.jsx("div",{className:"stat-value",children:o}),s.jsx("div",{className:"stat-label",children:"Total Days"})]})]})]}),s.jsxs("div",{className:"weekly-progress-card",children:[s.jsxs("div",{className:"weekly-header",children:[s.jsx("div",{className:"weekly-title",children:"This Week's Progress"}),s.jsxs("div",{className:"weekly-counter",children:[s.jsx("span",{className:"weekly-counter-icon",children:"🔥"}),s.jsxs("span",{className:"weekly-counter-text",children:[Math.min(r,7),"/7"]})]})]}),s.jsx("div",{className:"weekly-days",children:k.map((M,z)=>{const O=te(M.dayIndex,z),$=M.dayIndex===c;return s.jsxs("div",{className:"day-item",children:[s.jsx("div",{className:`day-circle ${O}`,children:O==="completed"||O==="today-completed"?"":M.short}),s.jsx("div",{className:`day-label ${$?"today":""}`,children:M.label})]},z)})}),s.jsx("div",{className:"milestone-header",children:"Daily Rewards"}),s.jsx("div",{className:"rewards-grid",children:E.map((M,z)=>{const O=I(M.day);return s.jsxs("div",{className:`reward-item ${O.isLocked?"locked":O.canClaim?"can-claim":O.isClaimed?"completed":""}`,onClick:$=>H(M,M.day),children:[s.jsxs("div",{className:"reward-day",children:["Day ",M.day]}),s.jsx("div",{className:"reward-icon",children:M.icon}),s.jsx("div",{className:"reward-text",children:M.label})]},z)})})]}),s.jsxs("div",{className:"milestone-section",children:[s.jsx("div",{className:"milestone-header",children:"Next Milestone"}),s.jsxs("div",{className:"milestone-progress",children:[s.jsxs("div",{className:"milestone-info",children:[s.jsxs("div",{className:"milestone-current",children:[s.jsx("span",{className:"milestone-emoji",children:q.emoji}),s.jsx("span",{className:"milestone-text",children:q.label})]}),s.jsxs("span",{className:"milestone-target",children:[r,"/",q.days," days"]})]}),s.jsx("div",{className:"progress-bar-container",children:s.jsx("div",{className:"progress-bar-fill",style:{width:`${Q}%`}})})]})]}),s.jsx("div",{className:"motivational-text",children:r===0?"Start your journey! Claim your Day 0 bonus and complete a quiz!":`Day ${r} strong! Keep going to unlock more rewards!`}),s.jsxs("button",{className:"play-button",onClick:R,children:[s.jsx("span",{children:"Continue Streak"}),s.jsx("span",{children:"→"})]}),C&&s.jsxs("div",{className:"locked-message",children:[s.jsx("span",{className:"locked-message-icon",children:"🔒"}),s.jsx("span",{className:"locked-message-text",children:C.day===1&&C.currentStreak===0?"Complete your first quiz to unlock this reward!":`Reach Day ${C.day} streak to unlock this reward!`})]}),m&&s.jsxs(s.Fragment,{children:[s.jsx("div",{className:"modal-overlay"}),s.jsx("div",{className:"reward-modal",ref:_,children:s.jsxs("div",{className:"gift-box",children:[s.jsxs("div",{className:"gift-box-body",children:[s.jsx("div",{className:"gift-box-ribbon"}),s.jsx("div",{className:"gift-box-ribbon-horizontal"})]}),s.jsx("div",{className:`gift-box-lid ${p?"opening":""}`,children:s.jsx("div",{className:"gift-box-bow",children:"🎀"})}),s.jsxs("div",{className:`gift-content ${p?"show":""}`,children:[s.jsx("div",{className:"gift-content-icon",children:m.icon}),s.jsxs("div",{className:"gift-content-title",children:["Day ",m.day]}),s.jsx("div",{className:"gift-content-desc",children:m.label})]})]})})]}),f&&s.jsx("div",{className:"celebration",children:"🎉"})]})}const qg=[{id:1,title:"Play 3 quizzes today",progress:2,target:3,reward:60,claimed:!1,icon:"🎮",color:"#FF6B6B",difficulty:"Easy"},{id:2,title:"Score 8+ twice",progress:1,target:2,reward:80,claimed:!1,icon:"🎯",color:"#4ECDC4",difficulty:"Medium"},{id:3,title:"Practice 15 questions",progress:15,target:15,reward:100,claimed:!0,icon:"📚",color:"#FFD93D",difficulty:"Easy"},{id:4,title:"Win 5 in a row",progress:3,target:5,reward:150,claimed:!1,icon:"🔥",color:"#A8E6CF",difficulty:"Hard"},{id:5,title:"Complete a speed run",progress:0,target:1,reward:120,claimed:!1,icon:"⚡",color:"#C7B8FF",difficulty:"Medium"}];function Wg(){const{player:e,addCoins:t}=un(),[n,r]=d.useState(qg),[i,o]=d.useState((e==null?void 0:e.coins)||0),[a,l]=d.useState(null),[c,u]=d.useState(0);d.useEffect(()=>{const w=n.filter(y=>y.progress>=y.target).length;u(Math.round(w/n.length*100))},[n]);const m=(w,y)=>{navigator.vibrate&&navigator.vibrate([20,10,20]),l(w),setTimeout(()=>{r(j=>j.map(C=>C.id===w?{...C,claimed:!0}:C)),o(j=>j+y),t(y),l(null)},600)},x=w=>{switch(w){case"Easy":return"#10B981";case"Medium":return"#F59E0B";case"Hard":return"#EF4444";default:return"#6B7280"}},p=()=>{const w=new Date,y=new Date(w);y.setDate(y.getDate()+1),y.setHours(5,0,0,0);const j=y-w,C=Math.floor(j/(1e3*60*60)),g=Math.floor(j%(1e3*60*60)/(1e3*60));return`${C}h ${g}m`};return s.jsxs("div",{className:"quests-screen",children:[s.jsx("style",{jsx:!0,children:`
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
      `}),s.jsxs("div",{className:"animated-bg",children:[s.jsx("div",{className:"floating-icon",children:"🎮"}),s.jsx("div",{className:"floating-icon",children:"🎯"}),s.jsx("div",{className:"floating-icon",children:"🏆"}),s.jsx("div",{className:"floating-icon",children:"⭐"})]}),s.jsxs("div",{className:"header",children:[s.jsx("button",{className:"back-button",onClick:()=>window.history.back(),children:"← Back"}),s.jsxs("div",{className:"coins-display",children:["🪙 ",i]}),s.jsxs("div",{className:"title-section",children:[s.jsx("h1",{className:"main-title",children:"Daily Quests"}),s.jsx("p",{className:"subtitle",children:"Complete challenges, earn rewards!"})]})]}),s.jsxs("div",{className:"daily-progress-card",children:[s.jsxs("div",{className:"progress-header",children:[s.jsx("span",{className:"progress-label",children:"Today's Progress"}),s.jsxs("span",{className:"progress-value",children:[c,"%"]})]}),s.jsx("div",{className:"progress-bar-container",children:s.jsx("div",{className:"progress-bar-fill",style:{width:`${c}%`}})})]}),s.jsx("div",{className:"quests-list",children:n.map(w=>{const y=Math.min(100,Math.round(w.progress/w.target*100)),j=y===100,C=w.color+"CC";return s.jsxs("div",{className:`quest-card ${j?"completed":""}`,style:{"--quest-color":w.color,"--quest-color-dark":C},children:[s.jsx("div",{className:"quest-accent"}),j&&w.claimed&&s.jsx("div",{className:"completed-checkmark",children:"✓"}),s.jsxs("div",{className:"quest-content",children:[s.jsx("div",{className:`quest-icon-container ${a===w.id?"animating":""}`,children:w.icon}),s.jsxs("div",{className:"quest-details",children:[s.jsxs("div",{className:"quest-header",children:[s.jsx("span",{className:"quest-title",children:w.title}),s.jsx("span",{className:"difficulty-badge",style:{background:`${x(w.difficulty)}20`,color:x(w.difficulty)},children:w.difficulty})]}),s.jsxs("div",{className:"progress-info",children:[s.jsx("div",{className:"mini-progress-bar",children:s.jsx("div",{className:"mini-progress-fill",style:{width:`${y}%`}})}),s.jsxs("div",{className:"progress-text",children:[s.jsxs("span",{className:"progress-numbers",children:[w.progress,"/",w.target]}),s.jsxs("span",{className:"reward-display",children:["🪙 ",w.reward]})]})]})]}),s.jsx("button",{onClick:()=>j&&!w.claimed&&m(w.id,w.reward),disabled:w.claimed,className:`action-button ${w.claimed?"claimed":j?"can-claim":"in-progress"}`,style:!j&&!w.claimed?{"--quest-color":w.color,"--quest-color-dark":C}:{},children:w.claimed?"✓":j?"Claim":"Do it"})]})]},w.id)})}),s.jsxs("div",{className:"timer-card",children:[s.jsx("div",{className:"timer-icon",children:"⏰"}),s.jsx("div",{className:"timer-label",children:"New Quests In"}),s.jsx("div",{className:"timer-value",children:p()})]}),a&&s.jsx("div",{className:"reward-animation",children:"🪙"})]})}function Qg({title:e,subtitle:t,children:n}){const r=ut();return s.jsxs("div",{className:"min-h-full bg-black text-white px-4 pt-12",children:[s.jsxs("div",{className:"flex items-center justify-between mb-4",children:[s.jsx("button",{onClick:()=>r(-1),className:"px-3 py-1.5 rounded-xl border border-white/10 bg-white/5 text-sm",children:"← Back"}),s.jsxs("div",{className:"text-center",children:[s.jsx("div",{className:"text-base font-semibold leading-tight",children:e}),t&&s.jsx("div",{className:"text-xs text-white/60 leading-tight",children:t})]}),s.jsx("div",{className:"w-[68px]"})]}),n]})}function Hg(){const e=ut(),[t,n]=d.useState(!0),[r,i]=d.useState(!0),[o,a]=d.useState(!0);return s.jsxs(Qg,{title:"Settings",subtitle:"Make it yours",children:[s.jsxs("div",{className:"rounded-2xl border border-white/10 bg-white/5 divide-y divide-white/10",children:[s.jsx(Vr,{label:"Sound",right:s.jsx(Xo,{on:t,set:n})}),s.jsx(Vr,{label:"Haptics",right:s.jsx(Xo,{on:r,set:i})}),s.jsx(Vr,{label:"Notifications",right:s.jsx(Xo,{on:o,set:a})}),s.jsx(Vr,{label:"Edit Profile",right:s.jsx("span",{className:"text-white/60",children:"→"}),onClick:()=>e("/profile")}),s.jsx(Vr,{label:"Privacy Policy",right:s.jsx("span",{className:"text-white/60",children:"→"}),onClick:()=>window.open("#","_blank")})]}),s.jsx("button",{className:`mt-3 w-full rounded-2xl border border-white/10 bg-white/5 py-3 text-red-300 font-semibold
                   transition-transform duration-150 active:scale-[0.99]`,onClick:()=>alert("Sign out hook here"),children:"Sign out"})]})}function Vr({label:e,right:t,onClick:n}){return s.jsxs("button",{type:"button",onClick:n,className:`w-full flex items-center justify-between px-4 py-4 text-left
                 hover:bg-white/5 first:rounded-t-2xl last:rounded-b-2xl transition`,children:[s.jsx("span",{className:"text-sm font-semibold",children:e}),t]})}function Xo({on:e,set:t}){return s.jsx("span",{onClick:n=>{n.stopPropagation(),t(r=>!r),navigator.vibrate&&navigator.vibrate(10)},className:["inline-flex w-11 h-6 items-center rounded-full border transition px-0.5",e?"bg-lime-400 border-lime-400 justify-end":"bg-white/10 border-white/10 justify-start"].join(" "),role:"switch","aria-checked":e,children:s.jsx("span",{className:["w-5 h-5 rounded-full bg-white",e?"":"bg-white"].join(" ")})})}const Yg={name:"Player",avatar:"wizard",level:1,totalXP:0,coins:0,energy:Xe.MAX_ENERGY,energyRegenAt:null,comboStreak:0,bestCombo:0,currentStreak:0,bestStreak:0,totalDays:0,lastPlayedDate:null,totalQuizzes:0,totalCorrect:0,achievements:[],unlockedAvatars:["wizard","knight"],createdAt:Date.now()};function Vg(){const[e,t]=d.useState(()=>{const u=localStorage.getItem(Xe.STORAGE_KEYS.PLAYER);return u?JSON.parse(u):Yg});d.useEffect(()=>{localStorage.setItem(Xe.STORAGE_KEYS.PLAYER,JSON.stringify(e))},[e]),d.useEffect(()=>{if(e.energy<Xe.MAX_ENERGY&&e.energyRegenAt){const u=setInterval(()=>{const m=Date.now();m>=e.energyRegenAt&&t(x=>({...x,energy:Math.min(x.energy+1,Xe.MAX_ENERGY),energyRegenAt:x.energy+1<Xe.MAX_ENERGY?m+Xe.ENERGY_REGEN_TIME:null}))},6e4);return()=>clearInterval(u)}},[e.energy,e.energyRegenAt]);const n=d.useCallback(u=>{t(m=>{const x=m.totalXP+u,p=mu(m.totalXP),w=mu(x);let y=[...m.unlockedAvatars];return w>p&&Xe.AVATARS.forEach(j=>{j.unlockLevel===w&&!y.includes(j.id)&&y.push(j.id)}),{...m,totalXP:x,level:w,unlockedAvatars:y}})},[]),r=d.useCallback(u=>{const x=new Error().stack;console.log("[COINS DEBUG] ================"),console.log("[COINS DEBUG] Amount:",u),console.log("[COINS DEBUG] Called from:",x.split(`
`)[2]),console.log("[COINS DEBUG] Full trace:",x),t(p=>(console.log("[COINS DEBUG] Current:",p.coins,"→ New:",p.coins+u),{...p,coins:p.coins+u}))},[]),i=d.useCallback((u=1)=>e.energy<u?!1:(t(m=>({...m,energy:m.energy-u,energyRegenAt:m.energyRegenAt||Date.now()+Xe.ENERGY_REGEN_TIME})),!0),[e.energy]),o=d.useCallback(u=>{t(m=>{const x=u?m.comboStreak+1:0;return{...m,comboStreak:x,bestCombo:Math.max(m.bestCombo,x)}})},[]),a=d.useCallback(()=>{t(u=>({...u,comboStreak:0}))},[]),l=d.useCallback(u=>{e.unlockedAvatars.includes(u)&&t(m=>({...m,avatar:u}))},[e.unlockedAvatars]),c=d.useCallback(()=>{const u=new Date().toDateString();t(m=>{if(m.lastPlayedDate===u)return m;const x=new Date;x.setDate(x.getDate()-1);const p=x.toDateString();let w=m.currentStreak;return m.lastPlayedDate===p?w=m.currentStreak+1:(m.lastPlayedDate,w=1),{...m,currentStreak:w,bestStreak:Math.max(m.bestStreak,w),totalDays:m.totalDays+1,lastPlayedDate:u}})},[]);return{player:e,addXP:n,addCoins:r,useEnergy:i,updateCombo:o,resetCombo:a,changeAvatar:l,updateDailyStreak:c,levelProgress:Sx(e.totalXP)}}const h0=d.createContext(null),un=()=>{const e=d.useContext(h0);if(!e)throw new Error("useGame must be used within GameProvider");return e};function Gg({children:e}){const t=Vg();return s.jsx(h0.Provider,{value:t,children:e})}function Kg(){return s.jsx(Gg,{children:s.jsx(Oh,{children:s.jsxs(Ye,{element:s.jsx(bx,{}),children:[s.jsx(Ye,{path:"/",element:s.jsx(xu,{})}),s.jsx(Ye,{path:"/play",element:s.jsx(Ux,{})}),s.jsx(Ye,{path:"/play/party",element:s.jsx(fg,{})}),s.jsx(Ye,{path:"/profile",element:s.jsx(xg,{})}),s.jsx(Ye,{path:"/profile/leaderboard",element:s.jsx(gg,{})}),s.jsx(Ye,{path:"/profile/history",element:s.jsx(kg,{})}),s.jsx(Ye,{path:"/profile/rewards",element:s.jsx(Ag,{})}),s.jsx(Ye,{path:"/profile/badges",element:s.jsx(Og,{})}),s.jsx(Ye,{path:"/profile/achievements",element:s.jsx(Bg,{})}),s.jsx(Ye,{path:"/profile/streaks",element:s.jsx(Ug,{})}),s.jsx(Ye,{path:"/profile/quests",element:s.jsx(Wg,{})}),s.jsx(Ye,{path:"/profile/settings",element:s.jsx(Hg,{})}),s.jsx(Ye,{path:"/swipe",element:s.jsx(pg,{})}),s.jsx(Ye,{path:"/leaders",element:s.jsx(Fh,{to:"/profile/leaderboard",replace:!0})}),s.jsx(Ye,{path:"/quiz/:category",element:s.jsx(sg,{})}),s.jsx(Ye,{path:"*",element:s.jsx(xu,{})})]})})})}Jo.createRoot(document.getElementById("root")).render(s.jsx(it.StrictMode,{children:s.jsx(cx,{children:s.jsx(Kg,{})})}));export{x0 as c,Pu as g};
