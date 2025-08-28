(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();var xm=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function wu(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var ju={exports:{}},Di={},ku={exports:{}},de={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gs=Symbol.for("react.element"),gm=Symbol.for("react.portal"),vm=Symbol.for("react.fragment"),ym=Symbol.for("react.strict_mode"),bm=Symbol.for("react.profiler"),wm=Symbol.for("react.provider"),jm=Symbol.for("react.context"),km=Symbol.for("react.forward_ref"),Nm=Symbol.for("react.suspense"),Sm=Symbol.for("react.memo"),Cm=Symbol.for("react.lazy"),Ul=Symbol.iterator;function Em(e){return e===null||typeof e!="object"?null:(e=Ul&&e[Ul]||e["@@iterator"],typeof e=="function"?e:null)}var Nu={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Su=Object.assign,Cu={};function yr(e,t,n){this.props=e,this.context=t,this.refs=Cu,this.updater=n||Nu}yr.prototype.isReactComponent={};yr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};yr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Eu(){}Eu.prototype=yr.prototype;function Ma(e,t,n){this.props=e,this.context=t,this.refs=Cu,this.updater=n||Nu}var Fa=Ma.prototype=new Eu;Fa.constructor=Ma;Su(Fa,yr.prototype);Fa.isPureReactComponent=!0;var Wl=Array.isArray,_u=Object.prototype.hasOwnProperty,Ia={current:null},Ru={key:!0,ref:!0,__self:!0,__source:!0};function Pu(e,t,n){var r,i={},o=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(o=""+t.key),t)_u.call(t,r)&&!Ru.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var c=Array(l),u=0;u<l;u++)c[u]=arguments[u+2];i.children=c}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:gs,type:e,key:o,ref:a,props:i,_owner:Ia.current}}function _m(e,t){return{$$typeof:gs,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Da(e){return typeof e=="object"&&e!==null&&e.$$typeof===gs}function Rm(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Ql=/\/+/g;function ro(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Rm(""+e.key):t.toString(36)}function Xs(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case gs:case gm:a=!0}}if(a)return a=e,i=i(a),e=r===""?"."+ro(a,0):r,Wl(i)?(n="",e!=null&&(n=e.replace(Ql,"$&/")+"/"),Xs(i,t,n,"",function(u){return u})):i!=null&&(Da(i)&&(i=_m(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(Ql,"$&/")+"/")+e)),t.push(i)),1;if(a=0,r=r===""?".":r+":",Wl(e))for(var l=0;l<e.length;l++){o=e[l];var c=r+ro(o,l);a+=Xs(o,t,n,c,i)}else if(c=Em(e),typeof c=="function")for(e=c.call(e),l=0;!(o=e.next()).done;)o=o.value,c=r+ro(o,l++),a+=Xs(o,t,n,c,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function Cs(e,t,n){if(e==null)return e;var r=[],i=0;return Xs(e,r,"","",function(o){return t.call(n,o,i++)}),r}function Pm(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ke={current:null},Ks={transition:null},Tm={ReactCurrentDispatcher:Ke,ReactCurrentBatchConfig:Ks,ReactCurrentOwner:Ia};function Tu(){throw Error("act(...) is not supported in production builds of React.")}de.Children={map:Cs,forEach:function(e,t,n){Cs(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Cs(e,function(){t++}),t},toArray:function(e){return Cs(e,function(t){return t})||[]},only:function(e){if(!Da(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};de.Component=yr;de.Fragment=vm;de.Profiler=bm;de.PureComponent=Ma;de.StrictMode=ym;de.Suspense=Nm;de.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Tm;de.act=Tu;de.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Su({},e.props),i=e.key,o=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,a=Ia.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(c in t)_u.call(t,c)&&!Ru.hasOwnProperty(c)&&(r[c]=t[c]===void 0&&l!==void 0?l[c]:t[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){l=Array(c);for(var u=0;u<c;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:gs,type:e.type,key:i,ref:o,props:r,_owner:a}};de.createContext=function(e){return e={$$typeof:jm,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:wm,_context:e},e.Consumer=e};de.createElement=Pu;de.createFactory=function(e){var t=Pu.bind(null,e);return t.type=e,t};de.createRef=function(){return{current:null}};de.forwardRef=function(e){return{$$typeof:km,render:e}};de.isValidElement=Da;de.lazy=function(e){return{$$typeof:Cm,_payload:{_status:-1,_result:e},_init:Pm}};de.memo=function(e,t){return{$$typeof:Sm,type:e,compare:t===void 0?null:t}};de.startTransition=function(e){var t=Ks.transition;Ks.transition={};try{e()}finally{Ks.transition=t}};de.unstable_act=Tu;de.useCallback=function(e,t){return Ke.current.useCallback(e,t)};de.useContext=function(e){return Ke.current.useContext(e)};de.useDebugValue=function(){};de.useDeferredValue=function(e){return Ke.current.useDeferredValue(e)};de.useEffect=function(e,t){return Ke.current.useEffect(e,t)};de.useId=function(){return Ke.current.useId()};de.useImperativeHandle=function(e,t,n){return Ke.current.useImperativeHandle(e,t,n)};de.useInsertionEffect=function(e,t){return Ke.current.useInsertionEffect(e,t)};de.useLayoutEffect=function(e,t){return Ke.current.useLayoutEffect(e,t)};de.useMemo=function(e,t){return Ke.current.useMemo(e,t)};de.useReducer=function(e,t,n){return Ke.current.useReducer(e,t,n)};de.useRef=function(e){return Ke.current.useRef(e)};de.useState=function(e){return Ke.current.useState(e)};de.useSyncExternalStore=function(e,t,n){return Ke.current.useSyncExternalStore(e,t,n)};de.useTransition=function(){return Ke.current.useTransition()};de.version="18.3.1";ku.exports=de;var d=ku.exports;const tt=wu(d);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zm=d,Lm=Symbol.for("react.element"),Mm=Symbol.for("react.fragment"),Fm=Object.prototype.hasOwnProperty,Im=zm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Dm={key:!0,ref:!0,__self:!0,__source:!0};function zu(e,t,n){var r,i={},o=null,a=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)Fm.call(t,r)&&!Dm.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:Lm,type:e,key:o,ref:a,props:i,_owner:Im.current}}Di.Fragment=Mm;Di.jsx=zu;Di.jsxs=zu;ju.exports=Di;var s=ju.exports,Oo={},Lu={exports:{}},ft={},Mu={exports:{}},Fu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(L,T){var E=L.length;L.push(T);e:for(;0<E;){var z=E-1>>>1,O=L[z];if(0<i(O,T))L[z]=T,L[E]=O,E=z;else break e}}function n(L){return L.length===0?null:L[0]}function r(L){if(L.length===0)return null;var T=L[0],E=L.pop();if(E!==T){L[0]=E;e:for(var z=0,O=L.length,D=O>>>1;z<D;){var Y=2*(z+1)-1,te=L[Y],ae=Y+1,ne=L[ae];if(0>i(te,E))ae<O&&0>i(ne,te)?(L[z]=ne,L[ae]=E,z=ae):(L[z]=te,L[Y]=E,z=Y);else if(ae<O&&0>i(ne,E))L[z]=ne,L[ae]=E,z=ae;else break e}}return T}function i(L,T){var E=L.sortIndex-T.sortIndex;return E!==0?E:L.id-T.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var a=Date,l=a.now();e.unstable_now=function(){return a.now()-l}}var c=[],u=[],h=1,f=null,p=3,j=!1,v=!1,k=!1,R=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(L){for(var T=n(u);T!==null;){if(T.callback===null)r(u);else if(T.startTime<=L)r(u),T.sortIndex=T.expirationTime,t(c,T);else break;T=n(u)}}function S(L){if(k=!1,y(L),!v)if(n(c)!==null)v=!0,H(P);else{var T=n(u);T!==null&&Q(S,T.startTime-L)}}function P(L,T){v=!1,k&&(k=!1,g(x),x=-1),j=!0;var E=p;try{for(y(T),f=n(c);f!==null&&(!(f.expirationTime>T)||L&&!C());){var z=f.callback;if(typeof z=="function"){f.callback=null,p=f.priorityLevel;var O=z(f.expirationTime<=T);T=e.unstable_now(),typeof O=="function"?f.callback=O:f===n(c)&&r(c),y(T)}else r(c);f=n(c)}if(f!==null)var D=!0;else{var Y=n(u);Y!==null&&Q(S,Y.startTime-T),D=!1}return D}finally{f=null,p=E,j=!1}}var F=!1,N=null,x=-1,b=5,w=-1;function C(){return!(e.unstable_now()-w<b)}function M(){if(N!==null){var L=e.unstable_now();w=L;var T=!0;try{T=N(!0,L)}finally{T?W():(F=!1,N=null)}}else F=!1}var W;if(typeof m=="function")W=function(){m(M)};else if(typeof MessageChannel<"u"){var J=new MessageChannel,A=J.port2;J.port1.onmessage=M,W=function(){A.postMessage(null)}}else W=function(){R(M,0)};function H(L){N=L,F||(F=!0,W())}function Q(L,T){x=R(function(){L(e.unstable_now())},T)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(L){L.callback=null},e.unstable_continueExecution=function(){v||j||(v=!0,H(P))},e.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<L?Math.floor(1e3/L):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(L){switch(p){case 1:case 2:case 3:var T=3;break;default:T=p}var E=p;p=T;try{return L()}finally{p=E}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(L,T){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var E=p;p=L;try{return T()}finally{p=E}},e.unstable_scheduleCallback=function(L,T,E){var z=e.unstable_now();switch(typeof E=="object"&&E!==null?(E=E.delay,E=typeof E=="number"&&0<E?z+E:z):E=z,L){case 1:var O=-1;break;case 2:O=250;break;case 5:O=1073741823;break;case 4:O=1e4;break;default:O=5e3}return O=E+O,L={id:h++,callback:T,priorityLevel:L,startTime:E,expirationTime:O,sortIndex:-1},E>z?(L.sortIndex=E,t(u,L),n(c)===null&&L===n(u)&&(k?(g(x),x=-1):k=!0,Q(S,E-z))):(L.sortIndex=O,t(c,L),v||j||(v=!0,H(P))),L},e.unstable_shouldYield=C,e.unstable_wrapCallback=function(L){var T=p;return function(){var E=p;p=T;try{return L.apply(this,arguments)}finally{p=E}}}})(Fu);Mu.exports=Fu;var Am=Mu.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Om=d,dt=Am;function U(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Iu=new Set,Zr={};function Un(e,t){fr(e,t),fr(e+"Capture",t)}function fr(e,t){for(Zr[e]=t,e=0;e<t.length;e++)Iu.add(t[e])}var Gt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),$o=Object.prototype.hasOwnProperty,$m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ql={},Hl={};function Bm(e){return $o.call(Hl,e)?!0:$o.call(ql,e)?!1:$m.test(e)?Hl[e]=!0:(ql[e]=!0,!1)}function Um(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Wm(e,t,n,r){if(t===null||typeof t>"u"||Um(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Je(e,t,n,r,i,o,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=a}var Be={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Be[e]=new Je(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Be[t]=new Je(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Be[e]=new Je(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Be[e]=new Je(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Be[e]=new Je(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Be[e]=new Je(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Be[e]=new Je(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Be[e]=new Je(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Be[e]=new Je(e,5,!1,e.toLowerCase(),null,!1,!1)});var Aa=/[\-:]([a-z])/g;function Oa(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Aa,Oa);Be[t]=new Je(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Aa,Oa);Be[t]=new Je(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Aa,Oa);Be[t]=new Je(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Be[e]=new Je(e,1,!1,e.toLowerCase(),null,!1,!1)});Be.xlinkHref=new Je("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Be[e]=new Je(e,1,!1,e.toLowerCase(),null,!0,!0)});function $a(e,t,n,r){var i=Be.hasOwnProperty(t)?Be[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Wm(t,n,i,r)&&(n=null),r||i===null?Bm(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var en=Om.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Es=Symbol.for("react.element"),Hn=Symbol.for("react.portal"),Yn=Symbol.for("react.fragment"),Ba=Symbol.for("react.strict_mode"),Bo=Symbol.for("react.profiler"),Du=Symbol.for("react.provider"),Au=Symbol.for("react.context"),Ua=Symbol.for("react.forward_ref"),Uo=Symbol.for("react.suspense"),Wo=Symbol.for("react.suspense_list"),Wa=Symbol.for("react.memo"),on=Symbol.for("react.lazy"),Ou=Symbol.for("react.offscreen"),Yl=Symbol.iterator;function Er(e){return e===null||typeof e!="object"?null:(e=Yl&&e[Yl]||e["@@iterator"],typeof e=="function"?e:null)}var Ce=Object.assign,so;function Or(e){if(so===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);so=t&&t[1]||""}return`
`+so+e}var io=!1;function oo(e,t){if(!e||io)return"";io=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),a=i.length-1,l=o.length-1;1<=a&&0<=l&&i[a]!==o[l];)l--;for(;1<=a&&0<=l;a--,l--)if(i[a]!==o[l]){if(a!==1||l!==1)do if(a--,l--,0>l||i[a]!==o[l]){var c=`
`+i[a].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=a&&0<=l);break}}}finally{io=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Or(e):""}function Qm(e){switch(e.tag){case 5:return Or(e.type);case 16:return Or("Lazy");case 13:return Or("Suspense");case 19:return Or("SuspenseList");case 0:case 2:case 15:return e=oo(e.type,!1),e;case 11:return e=oo(e.type.render,!1),e;case 1:return e=oo(e.type,!0),e;default:return""}}function Qo(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Yn:return"Fragment";case Hn:return"Portal";case Bo:return"Profiler";case Ba:return"StrictMode";case Uo:return"Suspense";case Wo:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Au:return(e.displayName||"Context")+".Consumer";case Du:return(e._context.displayName||"Context")+".Provider";case Ua:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Wa:return t=e.displayName||null,t!==null?t:Qo(e.type)||"Memo";case on:t=e._payload,e=e._init;try{return Qo(e(t))}catch{}}return null}function qm(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Qo(t);case 8:return t===Ba?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function wn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function $u(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Hm(e){var t=$u(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,o.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function _s(e){e._valueTracker||(e._valueTracker=Hm(e))}function Bu(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=$u(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function di(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function qo(e,t){var n=t.checked;return Ce({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Vl(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=wn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Uu(e,t){t=t.checked,t!=null&&$a(e,"checked",t,!1)}function Ho(e,t){Uu(e,t);var n=wn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Yo(e,t.type,n):t.hasOwnProperty("defaultValue")&&Yo(e,t.type,wn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Gl(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Yo(e,t,n){(t!=="number"||di(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var $r=Array.isArray;function ir(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+wn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Vo(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(U(91));return Ce({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Xl(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(U(92));if($r(n)){if(1<n.length)throw Error(U(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:wn(n)}}function Wu(e,t){var n=wn(t.value),r=wn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Kl(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Qu(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Go(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Qu(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Rs,qu=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Rs=Rs||document.createElement("div"),Rs.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Rs.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function es(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Wr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ym=["Webkit","ms","Moz","O"];Object.keys(Wr).forEach(function(e){Ym.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Wr[t]=Wr[e]})});function Hu(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Wr.hasOwnProperty(e)&&Wr[e]?(""+t).trim():t+"px"}function Yu(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Hu(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Vm=Ce({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Xo(e,t){if(t){if(Vm[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(U(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(U(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(U(61))}if(t.style!=null&&typeof t.style!="object")throw Error(U(62))}}function Ko(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Jo=null;function Qa(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Zo=null,or=null,ar=null;function Jl(e){if(e=bs(e)){if(typeof Zo!="function")throw Error(U(280));var t=e.stateNode;t&&(t=Ui(t),Zo(e.stateNode,e.type,t))}}function Vu(e){or?ar?ar.push(e):ar=[e]:or=e}function Gu(){if(or){var e=or,t=ar;if(ar=or=null,Jl(e),t)for(e=0;e<t.length;e++)Jl(t[e])}}function Xu(e,t){return e(t)}function Ku(){}var ao=!1;function Ju(e,t,n){if(ao)return e(t,n);ao=!0;try{return Xu(e,t,n)}finally{ao=!1,(or!==null||ar!==null)&&(Ku(),Gu())}}function ts(e,t){var n=e.stateNode;if(n===null)return null;var r=Ui(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(U(231,t,typeof n));return n}var ea=!1;if(Gt)try{var _r={};Object.defineProperty(_r,"passive",{get:function(){ea=!0}}),window.addEventListener("test",_r,_r),window.removeEventListener("test",_r,_r)}catch{ea=!1}function Gm(e,t,n,r,i,o,a,l,c){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(h){this.onError(h)}}var Qr=!1,fi=null,mi=!1,ta=null,Xm={onError:function(e){Qr=!0,fi=e}};function Km(e,t,n,r,i,o,a,l,c){Qr=!1,fi=null,Gm.apply(Xm,arguments)}function Jm(e,t,n,r,i,o,a,l,c){if(Km.apply(this,arguments),Qr){if(Qr){var u=fi;Qr=!1,fi=null}else throw Error(U(198));mi||(mi=!0,ta=u)}}function Wn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Zu(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Zl(e){if(Wn(e)!==e)throw Error(U(188))}function Zm(e){var t=e.alternate;if(!t){if(t=Wn(e),t===null)throw Error(U(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return Zl(i),e;if(o===r)return Zl(i),t;o=o.sibling}throw Error(U(188))}if(n.return!==r.return)n=i,r=o;else{for(var a=!1,l=i.child;l;){if(l===n){a=!0,n=i,r=o;break}if(l===r){a=!0,r=i,n=o;break}l=l.sibling}if(!a){for(l=o.child;l;){if(l===n){a=!0,n=o,r=i;break}if(l===r){a=!0,r=o,n=i;break}l=l.sibling}if(!a)throw Error(U(189))}}if(n.alternate!==r)throw Error(U(190))}if(n.tag!==3)throw Error(U(188));return n.stateNode.current===n?e:t}function ed(e){return e=Zm(e),e!==null?td(e):null}function td(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=td(e);if(t!==null)return t;e=e.sibling}return null}var nd=dt.unstable_scheduleCallback,ec=dt.unstable_cancelCallback,ep=dt.unstable_shouldYield,tp=dt.unstable_requestPaint,Re=dt.unstable_now,np=dt.unstable_getCurrentPriorityLevel,qa=dt.unstable_ImmediatePriority,rd=dt.unstable_UserBlockingPriority,pi=dt.unstable_NormalPriority,rp=dt.unstable_LowPriority,sd=dt.unstable_IdlePriority,Ai=null,Bt=null;function sp(e){if(Bt&&typeof Bt.onCommitFiberRoot=="function")try{Bt.onCommitFiberRoot(Ai,e,void 0,(e.current.flags&128)===128)}catch{}}var Rt=Math.clz32?Math.clz32:ap,ip=Math.log,op=Math.LN2;function ap(e){return e>>>=0,e===0?32:31-(ip(e)/op|0)|0}var Ps=64,Ts=4194304;function Br(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function hi(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,a=n&268435455;if(a!==0){var l=a&~i;l!==0?r=Br(l):(o&=a,o!==0&&(r=Br(o)))}else a=n&~i,a!==0?r=Br(a):o!==0&&(r=Br(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Rt(t),i=1<<n,r|=e[n],t&=~i;return r}function lp(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function cp(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var a=31-Rt(o),l=1<<a,c=i[a];c===-1?(!(l&n)||l&r)&&(i[a]=lp(l,t)):c<=t&&(e.expiredLanes|=l),o&=~l}}function na(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function id(){var e=Ps;return Ps<<=1,!(Ps&4194240)&&(Ps=64),e}function lo(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function vs(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Rt(t),e[t]=n}function up(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Rt(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function Ha(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Rt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var xe=0;function od(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var ad,Ya,ld,cd,ud,ra=!1,zs=[],mn=null,pn=null,hn=null,ns=new Map,rs=new Map,cn=[],dp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function tc(e,t){switch(e){case"focusin":case"focusout":mn=null;break;case"dragenter":case"dragleave":pn=null;break;case"mouseover":case"mouseout":hn=null;break;case"pointerover":case"pointerout":ns.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":rs.delete(t.pointerId)}}function Rr(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=bs(t),t!==null&&Ya(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function fp(e,t,n,r,i){switch(t){case"focusin":return mn=Rr(mn,e,t,n,r,i),!0;case"dragenter":return pn=Rr(pn,e,t,n,r,i),!0;case"mouseover":return hn=Rr(hn,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return ns.set(o,Rr(ns.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,rs.set(o,Rr(rs.get(o)||null,e,t,n,r,i)),!0}return!1}function dd(e){var t=Tn(e.target);if(t!==null){var n=Wn(t);if(n!==null){if(t=n.tag,t===13){if(t=Zu(n),t!==null){e.blockedOn=t,ud(e.priority,function(){ld(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Js(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=sa(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Jo=r,n.target.dispatchEvent(r),Jo=null}else return t=bs(n),t!==null&&Ya(t),e.blockedOn=n,!1;t.shift()}return!0}function nc(e,t,n){Js(e)&&n.delete(t)}function mp(){ra=!1,mn!==null&&Js(mn)&&(mn=null),pn!==null&&Js(pn)&&(pn=null),hn!==null&&Js(hn)&&(hn=null),ns.forEach(nc),rs.forEach(nc)}function Pr(e,t){e.blockedOn===t&&(e.blockedOn=null,ra||(ra=!0,dt.unstable_scheduleCallback(dt.unstable_NormalPriority,mp)))}function ss(e){function t(i){return Pr(i,e)}if(0<zs.length){Pr(zs[0],e);for(var n=1;n<zs.length;n++){var r=zs[n];r.blockedOn===e&&(r.blockedOn=null)}}for(mn!==null&&Pr(mn,e),pn!==null&&Pr(pn,e),hn!==null&&Pr(hn,e),ns.forEach(t),rs.forEach(t),n=0;n<cn.length;n++)r=cn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<cn.length&&(n=cn[0],n.blockedOn===null);)dd(n),n.blockedOn===null&&cn.shift()}var lr=en.ReactCurrentBatchConfig,xi=!0;function pp(e,t,n,r){var i=xe,o=lr.transition;lr.transition=null;try{xe=1,Va(e,t,n,r)}finally{xe=i,lr.transition=o}}function hp(e,t,n,r){var i=xe,o=lr.transition;lr.transition=null;try{xe=4,Va(e,t,n,r)}finally{xe=i,lr.transition=o}}function Va(e,t,n,r){if(xi){var i=sa(e,t,n,r);if(i===null)yo(e,t,r,gi,n),tc(e,r);else if(fp(i,e,t,n,r))r.stopPropagation();else if(tc(e,r),t&4&&-1<dp.indexOf(e)){for(;i!==null;){var o=bs(i);if(o!==null&&ad(o),o=sa(e,t,n,r),o===null&&yo(e,t,r,gi,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else yo(e,t,r,null,n)}}var gi=null;function sa(e,t,n,r){if(gi=null,e=Qa(r),e=Tn(e),e!==null)if(t=Wn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Zu(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return gi=e,null}function fd(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(np()){case qa:return 1;case rd:return 4;case pi:case rp:return 16;case sd:return 536870912;default:return 16}default:return 16}}var dn=null,Ga=null,Zs=null;function md(){if(Zs)return Zs;var e,t=Ga,n=t.length,r,i="value"in dn?dn.value:dn.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===i[o-r];r++);return Zs=i.slice(e,1<r?1-r:void 0)}function ei(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ls(){return!0}function rc(){return!1}function mt(e){function t(n,r,i,o,a){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=a,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(o):o[l]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Ls:rc,this.isPropagationStopped=rc,this}return Ce(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ls)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ls)},persist:function(){},isPersistent:Ls}),t}var br={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Xa=mt(br),ys=Ce({},br,{view:0,detail:0}),xp=mt(ys),co,uo,Tr,Oi=Ce({},ys,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ka,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Tr&&(Tr&&e.type==="mousemove"?(co=e.screenX-Tr.screenX,uo=e.screenY-Tr.screenY):uo=co=0,Tr=e),co)},movementY:function(e){return"movementY"in e?e.movementY:uo}}),sc=mt(Oi),gp=Ce({},Oi,{dataTransfer:0}),vp=mt(gp),yp=Ce({},ys,{relatedTarget:0}),fo=mt(yp),bp=Ce({},br,{animationName:0,elapsedTime:0,pseudoElement:0}),wp=mt(bp),jp=Ce({},br,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),kp=mt(jp),Np=Ce({},br,{data:0}),ic=mt(Np),Sp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Cp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ep={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function _p(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Ep[e])?!!t[e]:!1}function Ka(){return _p}var Rp=Ce({},ys,{key:function(e){if(e.key){var t=Sp[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ei(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Cp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ka,charCode:function(e){return e.type==="keypress"?ei(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ei(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Pp=mt(Rp),Tp=Ce({},Oi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),oc=mt(Tp),zp=Ce({},ys,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ka}),Lp=mt(zp),Mp=Ce({},br,{propertyName:0,elapsedTime:0,pseudoElement:0}),Fp=mt(Mp),Ip=Ce({},Oi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Dp=mt(Ip),Ap=[9,13,27,32],Ja=Gt&&"CompositionEvent"in window,qr=null;Gt&&"documentMode"in document&&(qr=document.documentMode);var Op=Gt&&"TextEvent"in window&&!qr,pd=Gt&&(!Ja||qr&&8<qr&&11>=qr),ac=String.fromCharCode(32),lc=!1;function hd(e,t){switch(e){case"keyup":return Ap.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function xd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Vn=!1;function $p(e,t){switch(e){case"compositionend":return xd(t);case"keypress":return t.which!==32?null:(lc=!0,ac);case"textInput":return e=t.data,e===ac&&lc?null:e;default:return null}}function Bp(e,t){if(Vn)return e==="compositionend"||!Ja&&hd(e,t)?(e=md(),Zs=Ga=dn=null,Vn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return pd&&t.locale!=="ko"?null:t.data;default:return null}}var Up={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function cc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Up[e.type]:t==="textarea"}function gd(e,t,n,r){Vu(r),t=vi(t,"onChange"),0<t.length&&(n=new Xa("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Hr=null,is=null;function Wp(e){_d(e,0)}function $i(e){var t=Kn(e);if(Bu(t))return e}function Qp(e,t){if(e==="change")return t}var vd=!1;if(Gt){var mo;if(Gt){var po="oninput"in document;if(!po){var uc=document.createElement("div");uc.setAttribute("oninput","return;"),po=typeof uc.oninput=="function"}mo=po}else mo=!1;vd=mo&&(!document.documentMode||9<document.documentMode)}function dc(){Hr&&(Hr.detachEvent("onpropertychange",yd),is=Hr=null)}function yd(e){if(e.propertyName==="value"&&$i(is)){var t=[];gd(t,is,e,Qa(e)),Ju(Wp,t)}}function qp(e,t,n){e==="focusin"?(dc(),Hr=t,is=n,Hr.attachEvent("onpropertychange",yd)):e==="focusout"&&dc()}function Hp(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return $i(is)}function Yp(e,t){if(e==="click")return $i(t)}function Vp(e,t){if(e==="input"||e==="change")return $i(t)}function Gp(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Tt=typeof Object.is=="function"?Object.is:Gp;function os(e,t){if(Tt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!$o.call(t,i)||!Tt(e[i],t[i]))return!1}return!0}function fc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function mc(e,t){var n=fc(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=fc(n)}}function bd(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?bd(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function wd(){for(var e=window,t=di();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=di(e.document)}return t}function Za(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Xp(e){var t=wd(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&bd(n.ownerDocument.documentElement,n)){if(r!==null&&Za(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=mc(n,o);var a=mc(n,r);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Kp=Gt&&"documentMode"in document&&11>=document.documentMode,Gn=null,ia=null,Yr=null,oa=!1;function pc(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;oa||Gn==null||Gn!==di(r)||(r=Gn,"selectionStart"in r&&Za(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Yr&&os(Yr,r)||(Yr=r,r=vi(ia,"onSelect"),0<r.length&&(t=new Xa("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Gn)))}function Ms(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Xn={animationend:Ms("Animation","AnimationEnd"),animationiteration:Ms("Animation","AnimationIteration"),animationstart:Ms("Animation","AnimationStart"),transitionend:Ms("Transition","TransitionEnd")},ho={},jd={};Gt&&(jd=document.createElement("div").style,"AnimationEvent"in window||(delete Xn.animationend.animation,delete Xn.animationiteration.animation,delete Xn.animationstart.animation),"TransitionEvent"in window||delete Xn.transitionend.transition);function Bi(e){if(ho[e])return ho[e];if(!Xn[e])return e;var t=Xn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in jd)return ho[e]=t[n];return e}var kd=Bi("animationend"),Nd=Bi("animationiteration"),Sd=Bi("animationstart"),Cd=Bi("transitionend"),Ed=new Map,hc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function kn(e,t){Ed.set(e,t),Un(t,[e])}for(var xo=0;xo<hc.length;xo++){var go=hc[xo],Jp=go.toLowerCase(),Zp=go[0].toUpperCase()+go.slice(1);kn(Jp,"on"+Zp)}kn(kd,"onAnimationEnd");kn(Nd,"onAnimationIteration");kn(Sd,"onAnimationStart");kn("dblclick","onDoubleClick");kn("focusin","onFocus");kn("focusout","onBlur");kn(Cd,"onTransitionEnd");fr("onMouseEnter",["mouseout","mouseover"]);fr("onMouseLeave",["mouseout","mouseover"]);fr("onPointerEnter",["pointerout","pointerover"]);fr("onPointerLeave",["pointerout","pointerover"]);Un("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Un("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Un("onBeforeInput",["compositionend","keypress","textInput","paste"]);Un("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Un("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Un("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ur="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),e0=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ur));function xc(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Jm(r,t,void 0,e),e.currentTarget=null}function _d(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var a=r.length-1;0<=a;a--){var l=r[a],c=l.instance,u=l.currentTarget;if(l=l.listener,c!==o&&i.isPropagationStopped())break e;xc(i,l,u),o=c}else for(a=0;a<r.length;a++){if(l=r[a],c=l.instance,u=l.currentTarget,l=l.listener,c!==o&&i.isPropagationStopped())break e;xc(i,l,u),o=c}}}if(mi)throw e=ta,mi=!1,ta=null,e}function be(e,t){var n=t[da];n===void 0&&(n=t[da]=new Set);var r=e+"__bubble";n.has(r)||(Rd(t,e,2,!1),n.add(r))}function vo(e,t,n){var r=0;t&&(r|=4),Rd(n,e,r,t)}var Fs="_reactListening"+Math.random().toString(36).slice(2);function as(e){if(!e[Fs]){e[Fs]=!0,Iu.forEach(function(n){n!=="selectionchange"&&(e0.has(n)||vo(n,!1,e),vo(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Fs]||(t[Fs]=!0,vo("selectionchange",!1,t))}}function Rd(e,t,n,r){switch(fd(t)){case 1:var i=pp;break;case 4:i=hp;break;default:i=Va}n=i.bind(null,t,n,e),i=void 0,!ea||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function yo(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var c=a.tag;if((c===3||c===4)&&(c=a.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;a=a.return}for(;l!==null;){if(a=Tn(l),a===null)return;if(c=a.tag,c===5||c===6){r=o=a;continue e}l=l.parentNode}}r=r.return}Ju(function(){var u=o,h=Qa(n),f=[];e:{var p=Ed.get(e);if(p!==void 0){var j=Xa,v=e;switch(e){case"keypress":if(ei(n)===0)break e;case"keydown":case"keyup":j=Pp;break;case"focusin":v="focus",j=fo;break;case"focusout":v="blur",j=fo;break;case"beforeblur":case"afterblur":j=fo;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":j=sc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":j=vp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":j=Lp;break;case kd:case Nd:case Sd:j=wp;break;case Cd:j=Fp;break;case"scroll":j=xp;break;case"wheel":j=Dp;break;case"copy":case"cut":case"paste":j=kp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":j=oc}var k=(t&4)!==0,R=!k&&e==="scroll",g=k?p!==null?p+"Capture":null:p;k=[];for(var m=u,y;m!==null;){y=m;var S=y.stateNode;if(y.tag===5&&S!==null&&(y=S,g!==null&&(S=ts(m,g),S!=null&&k.push(ls(m,S,y)))),R)break;m=m.return}0<k.length&&(p=new j(p,v,null,n,h),f.push({event:p,listeners:k}))}}if(!(t&7)){e:{if(p=e==="mouseover"||e==="pointerover",j=e==="mouseout"||e==="pointerout",p&&n!==Jo&&(v=n.relatedTarget||n.fromElement)&&(Tn(v)||v[Xt]))break e;if((j||p)&&(p=h.window===h?h:(p=h.ownerDocument)?p.defaultView||p.parentWindow:window,j?(v=n.relatedTarget||n.toElement,j=u,v=v?Tn(v):null,v!==null&&(R=Wn(v),v!==R||v.tag!==5&&v.tag!==6)&&(v=null)):(j=null,v=u),j!==v)){if(k=sc,S="onMouseLeave",g="onMouseEnter",m="mouse",(e==="pointerout"||e==="pointerover")&&(k=oc,S="onPointerLeave",g="onPointerEnter",m="pointer"),R=j==null?p:Kn(j),y=v==null?p:Kn(v),p=new k(S,m+"leave",j,n,h),p.target=R,p.relatedTarget=y,S=null,Tn(h)===u&&(k=new k(g,m+"enter",v,n,h),k.target=y,k.relatedTarget=R,S=k),R=S,j&&v)t:{for(k=j,g=v,m=0,y=k;y;y=Qn(y))m++;for(y=0,S=g;S;S=Qn(S))y++;for(;0<m-y;)k=Qn(k),m--;for(;0<y-m;)g=Qn(g),y--;for(;m--;){if(k===g||g!==null&&k===g.alternate)break t;k=Qn(k),g=Qn(g)}k=null}else k=null;j!==null&&gc(f,p,j,k,!1),v!==null&&R!==null&&gc(f,R,v,k,!0)}}e:{if(p=u?Kn(u):window,j=p.nodeName&&p.nodeName.toLowerCase(),j==="select"||j==="input"&&p.type==="file")var P=Qp;else if(cc(p))if(vd)P=Vp;else{P=Hp;var F=qp}else(j=p.nodeName)&&j.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(P=Yp);if(P&&(P=P(e,u))){gd(f,P,n,h);break e}F&&F(e,p,u),e==="focusout"&&(F=p._wrapperState)&&F.controlled&&p.type==="number"&&Yo(p,"number",p.value)}switch(F=u?Kn(u):window,e){case"focusin":(cc(F)||F.contentEditable==="true")&&(Gn=F,ia=u,Yr=null);break;case"focusout":Yr=ia=Gn=null;break;case"mousedown":oa=!0;break;case"contextmenu":case"mouseup":case"dragend":oa=!1,pc(f,n,h);break;case"selectionchange":if(Kp)break;case"keydown":case"keyup":pc(f,n,h)}var N;if(Ja)e:{switch(e){case"compositionstart":var x="onCompositionStart";break e;case"compositionend":x="onCompositionEnd";break e;case"compositionupdate":x="onCompositionUpdate";break e}x=void 0}else Vn?hd(e,n)&&(x="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(x="onCompositionStart");x&&(pd&&n.locale!=="ko"&&(Vn||x!=="onCompositionStart"?x==="onCompositionEnd"&&Vn&&(N=md()):(dn=h,Ga="value"in dn?dn.value:dn.textContent,Vn=!0)),F=vi(u,x),0<F.length&&(x=new ic(x,e,null,n,h),f.push({event:x,listeners:F}),N?x.data=N:(N=xd(n),N!==null&&(x.data=N)))),(N=Op?$p(e,n):Bp(e,n))&&(u=vi(u,"onBeforeInput"),0<u.length&&(h=new ic("onBeforeInput","beforeinput",null,n,h),f.push({event:h,listeners:u}),h.data=N))}_d(f,t)})}function ls(e,t,n){return{instance:e,listener:t,currentTarget:n}}function vi(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=ts(e,n),o!=null&&r.unshift(ls(e,o,i)),o=ts(e,t),o!=null&&r.push(ls(e,o,i))),e=e.return}return r}function Qn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function gc(e,t,n,r,i){for(var o=t._reactName,a=[];n!==null&&n!==r;){var l=n,c=l.alternate,u=l.stateNode;if(c!==null&&c===r)break;l.tag===5&&u!==null&&(l=u,i?(c=ts(n,o),c!=null&&a.unshift(ls(n,c,l))):i||(c=ts(n,o),c!=null&&a.push(ls(n,c,l)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var t0=/\r\n?/g,n0=/\u0000|\uFFFD/g;function vc(e){return(typeof e=="string"?e:""+e).replace(t0,`
`).replace(n0,"")}function Is(e,t,n){if(t=vc(t),vc(e)!==t&&n)throw Error(U(425))}function yi(){}var aa=null,la=null;function ca(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ua=typeof setTimeout=="function"?setTimeout:void 0,r0=typeof clearTimeout=="function"?clearTimeout:void 0,yc=typeof Promise=="function"?Promise:void 0,s0=typeof queueMicrotask=="function"?queueMicrotask:typeof yc<"u"?function(e){return yc.resolve(null).then(e).catch(i0)}:ua;function i0(e){setTimeout(function(){throw e})}function bo(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),ss(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);ss(t)}function xn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function bc(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var wr=Math.random().toString(36).slice(2),Ot="__reactFiber$"+wr,cs="__reactProps$"+wr,Xt="__reactContainer$"+wr,da="__reactEvents$"+wr,o0="__reactListeners$"+wr,a0="__reactHandles$"+wr;function Tn(e){var t=e[Ot];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Xt]||n[Ot]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=bc(e);e!==null;){if(n=e[Ot])return n;e=bc(e)}return t}e=n,n=e.parentNode}return null}function bs(e){return e=e[Ot]||e[Xt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Kn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(U(33))}function Ui(e){return e[cs]||null}var fa=[],Jn=-1;function Nn(e){return{current:e}}function we(e){0>Jn||(e.current=fa[Jn],fa[Jn]=null,Jn--)}function ge(e,t){Jn++,fa[Jn]=e.current,e.current=t}var jn={},He=Nn(jn),st=Nn(!1),Dn=jn;function mr(e,t){var n=e.type.contextTypes;if(!n)return jn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function it(e){return e=e.childContextTypes,e!=null}function bi(){we(st),we(He)}function wc(e,t,n){if(He.current!==jn)throw Error(U(168));ge(He,t),ge(st,n)}function Pd(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(U(108,qm(e)||"Unknown",i));return Ce({},n,r)}function wi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||jn,Dn=He.current,ge(He,e),ge(st,st.current),!0}function jc(e,t,n){var r=e.stateNode;if(!r)throw Error(U(169));n?(e=Pd(e,t,Dn),r.__reactInternalMemoizedMergedChildContext=e,we(st),we(He),ge(He,e)):we(st),ge(st,n)}var Qt=null,Wi=!1,wo=!1;function Td(e){Qt===null?Qt=[e]:Qt.push(e)}function l0(e){Wi=!0,Td(e)}function Sn(){if(!wo&&Qt!==null){wo=!0;var e=0,t=xe;try{var n=Qt;for(xe=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Qt=null,Wi=!1}catch(i){throw Qt!==null&&(Qt=Qt.slice(e+1)),nd(qa,Sn),i}finally{xe=t,wo=!1}}return null}var Zn=[],er=0,ji=null,ki=0,gt=[],vt=0,An=null,qt=1,Ht="";function Rn(e,t){Zn[er++]=ki,Zn[er++]=ji,ji=e,ki=t}function zd(e,t,n){gt[vt++]=qt,gt[vt++]=Ht,gt[vt++]=An,An=e;var r=qt;e=Ht;var i=32-Rt(r)-1;r&=~(1<<i),n+=1;var o=32-Rt(t)+i;if(30<o){var a=i-i%5;o=(r&(1<<a)-1).toString(32),r>>=a,i-=a,qt=1<<32-Rt(t)+i|n<<i|r,Ht=o+e}else qt=1<<o|n<<i|r,Ht=e}function el(e){e.return!==null&&(Rn(e,1),zd(e,1,0))}function tl(e){for(;e===ji;)ji=Zn[--er],Zn[er]=null,ki=Zn[--er],Zn[er]=null;for(;e===An;)An=gt[--vt],gt[vt]=null,Ht=gt[--vt],gt[vt]=null,qt=gt[--vt],gt[vt]=null}var ut=null,ct=null,je=!1,Et=null;function Ld(e,t){var n=yt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function kc(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ut=e,ct=xn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ut=e,ct=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=An!==null?{id:qt,overflow:Ht}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=yt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ut=e,ct=null,!0):!1;default:return!1}}function ma(e){return(e.mode&1)!==0&&(e.flags&128)===0}function pa(e){if(je){var t=ct;if(t){var n=t;if(!kc(e,t)){if(ma(e))throw Error(U(418));t=xn(n.nextSibling);var r=ut;t&&kc(e,t)?Ld(r,n):(e.flags=e.flags&-4097|2,je=!1,ut=e)}}else{if(ma(e))throw Error(U(418));e.flags=e.flags&-4097|2,je=!1,ut=e}}}function Nc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ut=e}function Ds(e){if(e!==ut)return!1;if(!je)return Nc(e),je=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!ca(e.type,e.memoizedProps)),t&&(t=ct)){if(ma(e))throw Md(),Error(U(418));for(;t;)Ld(e,t),t=xn(t.nextSibling)}if(Nc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(U(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){ct=xn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}ct=null}}else ct=ut?xn(e.stateNode.nextSibling):null;return!0}function Md(){for(var e=ct;e;)e=xn(e.nextSibling)}function pr(){ct=ut=null,je=!1}function nl(e){Et===null?Et=[e]:Et.push(e)}var c0=en.ReactCurrentBatchConfig;function zr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(U(309));var r=n.stateNode}if(!r)throw Error(U(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(a){var l=i.refs;a===null?delete l[o]:l[o]=a},t._stringRef=o,t)}if(typeof e!="string")throw Error(U(284));if(!n._owner)throw Error(U(290,e))}return e}function As(e,t){throw e=Object.prototype.toString.call(t),Error(U(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Sc(e){var t=e._init;return t(e._payload)}function Fd(e){function t(g,m){if(e){var y=g.deletions;y===null?(g.deletions=[m],g.flags|=16):y.push(m)}}function n(g,m){if(!e)return null;for(;m!==null;)t(g,m),m=m.sibling;return null}function r(g,m){for(g=new Map;m!==null;)m.key!==null?g.set(m.key,m):g.set(m.index,m),m=m.sibling;return g}function i(g,m){return g=bn(g,m),g.index=0,g.sibling=null,g}function o(g,m,y){return g.index=y,e?(y=g.alternate,y!==null?(y=y.index,y<m?(g.flags|=2,m):y):(g.flags|=2,m)):(g.flags|=1048576,m)}function a(g){return e&&g.alternate===null&&(g.flags|=2),g}function l(g,m,y,S){return m===null||m.tag!==6?(m=_o(y,g.mode,S),m.return=g,m):(m=i(m,y),m.return=g,m)}function c(g,m,y,S){var P=y.type;return P===Yn?h(g,m,y.props.children,S,y.key):m!==null&&(m.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===on&&Sc(P)===m.type)?(S=i(m,y.props),S.ref=zr(g,m,y),S.return=g,S):(S=ai(y.type,y.key,y.props,null,g.mode,S),S.ref=zr(g,m,y),S.return=g,S)}function u(g,m,y,S){return m===null||m.tag!==4||m.stateNode.containerInfo!==y.containerInfo||m.stateNode.implementation!==y.implementation?(m=Ro(y,g.mode,S),m.return=g,m):(m=i(m,y.children||[]),m.return=g,m)}function h(g,m,y,S,P){return m===null||m.tag!==7?(m=Fn(y,g.mode,S,P),m.return=g,m):(m=i(m,y),m.return=g,m)}function f(g,m,y){if(typeof m=="string"&&m!==""||typeof m=="number")return m=_o(""+m,g.mode,y),m.return=g,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Es:return y=ai(m.type,m.key,m.props,null,g.mode,y),y.ref=zr(g,null,m),y.return=g,y;case Hn:return m=Ro(m,g.mode,y),m.return=g,m;case on:var S=m._init;return f(g,S(m._payload),y)}if($r(m)||Er(m))return m=Fn(m,g.mode,y,null),m.return=g,m;As(g,m)}return null}function p(g,m,y,S){var P=m!==null?m.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return P!==null?null:l(g,m,""+y,S);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Es:return y.key===P?c(g,m,y,S):null;case Hn:return y.key===P?u(g,m,y,S):null;case on:return P=y._init,p(g,m,P(y._payload),S)}if($r(y)||Er(y))return P!==null?null:h(g,m,y,S,null);As(g,y)}return null}function j(g,m,y,S,P){if(typeof S=="string"&&S!==""||typeof S=="number")return g=g.get(y)||null,l(m,g,""+S,P);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Es:return g=g.get(S.key===null?y:S.key)||null,c(m,g,S,P);case Hn:return g=g.get(S.key===null?y:S.key)||null,u(m,g,S,P);case on:var F=S._init;return j(g,m,y,F(S._payload),P)}if($r(S)||Er(S))return g=g.get(y)||null,h(m,g,S,P,null);As(m,S)}return null}function v(g,m,y,S){for(var P=null,F=null,N=m,x=m=0,b=null;N!==null&&x<y.length;x++){N.index>x?(b=N,N=null):b=N.sibling;var w=p(g,N,y[x],S);if(w===null){N===null&&(N=b);break}e&&N&&w.alternate===null&&t(g,N),m=o(w,m,x),F===null?P=w:F.sibling=w,F=w,N=b}if(x===y.length)return n(g,N),je&&Rn(g,x),P;if(N===null){for(;x<y.length;x++)N=f(g,y[x],S),N!==null&&(m=o(N,m,x),F===null?P=N:F.sibling=N,F=N);return je&&Rn(g,x),P}for(N=r(g,N);x<y.length;x++)b=j(N,g,x,y[x],S),b!==null&&(e&&b.alternate!==null&&N.delete(b.key===null?x:b.key),m=o(b,m,x),F===null?P=b:F.sibling=b,F=b);return e&&N.forEach(function(C){return t(g,C)}),je&&Rn(g,x),P}function k(g,m,y,S){var P=Er(y);if(typeof P!="function")throw Error(U(150));if(y=P.call(y),y==null)throw Error(U(151));for(var F=P=null,N=m,x=m=0,b=null,w=y.next();N!==null&&!w.done;x++,w=y.next()){N.index>x?(b=N,N=null):b=N.sibling;var C=p(g,N,w.value,S);if(C===null){N===null&&(N=b);break}e&&N&&C.alternate===null&&t(g,N),m=o(C,m,x),F===null?P=C:F.sibling=C,F=C,N=b}if(w.done)return n(g,N),je&&Rn(g,x),P;if(N===null){for(;!w.done;x++,w=y.next())w=f(g,w.value,S),w!==null&&(m=o(w,m,x),F===null?P=w:F.sibling=w,F=w);return je&&Rn(g,x),P}for(N=r(g,N);!w.done;x++,w=y.next())w=j(N,g,x,w.value,S),w!==null&&(e&&w.alternate!==null&&N.delete(w.key===null?x:w.key),m=o(w,m,x),F===null?P=w:F.sibling=w,F=w);return e&&N.forEach(function(M){return t(g,M)}),je&&Rn(g,x),P}function R(g,m,y,S){if(typeof y=="object"&&y!==null&&y.type===Yn&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case Es:e:{for(var P=y.key,F=m;F!==null;){if(F.key===P){if(P=y.type,P===Yn){if(F.tag===7){n(g,F.sibling),m=i(F,y.props.children),m.return=g,g=m;break e}}else if(F.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===on&&Sc(P)===F.type){n(g,F.sibling),m=i(F,y.props),m.ref=zr(g,F,y),m.return=g,g=m;break e}n(g,F);break}else t(g,F);F=F.sibling}y.type===Yn?(m=Fn(y.props.children,g.mode,S,y.key),m.return=g,g=m):(S=ai(y.type,y.key,y.props,null,g.mode,S),S.ref=zr(g,m,y),S.return=g,g=S)}return a(g);case Hn:e:{for(F=y.key;m!==null;){if(m.key===F)if(m.tag===4&&m.stateNode.containerInfo===y.containerInfo&&m.stateNode.implementation===y.implementation){n(g,m.sibling),m=i(m,y.children||[]),m.return=g,g=m;break e}else{n(g,m);break}else t(g,m);m=m.sibling}m=Ro(y,g.mode,S),m.return=g,g=m}return a(g);case on:return F=y._init,R(g,m,F(y._payload),S)}if($r(y))return v(g,m,y,S);if(Er(y))return k(g,m,y,S);As(g,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,m!==null&&m.tag===6?(n(g,m.sibling),m=i(m,y),m.return=g,g=m):(n(g,m),m=_o(y,g.mode,S),m.return=g,g=m),a(g)):n(g,m)}return R}var hr=Fd(!0),Id=Fd(!1),Ni=Nn(null),Si=null,tr=null,rl=null;function sl(){rl=tr=Si=null}function il(e){var t=Ni.current;we(Ni),e._currentValue=t}function ha(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function cr(e,t){Si=e,rl=tr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(rt=!0),e.firstContext=null)}function wt(e){var t=e._currentValue;if(rl!==e)if(e={context:e,memoizedValue:t,next:null},tr===null){if(Si===null)throw Error(U(308));tr=e,Si.dependencies={lanes:0,firstContext:e}}else tr=tr.next=e;return t}var zn=null;function ol(e){zn===null?zn=[e]:zn.push(e)}function Dd(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,ol(t)):(n.next=i.next,i.next=n),t.interleaved=n,Kt(e,r)}function Kt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var an=!1;function al(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ad(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Yt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function gn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,pe&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Kt(e,n)}return i=r.interleaved,i===null?(t.next=t,ol(r)):(t.next=i.next,i.next=t),r.interleaved=t,Kt(e,n)}function ti(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ha(e,n)}}function Cc(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=a:o=o.next=a,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Ci(e,t,n,r){var i=e.updateQueue;an=!1;var o=i.firstBaseUpdate,a=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var c=l,u=c.next;c.next=null,a===null?o=u:a.next=u,a=c;var h=e.alternate;h!==null&&(h=h.updateQueue,l=h.lastBaseUpdate,l!==a&&(l===null?h.firstBaseUpdate=u:l.next=u,h.lastBaseUpdate=c))}if(o!==null){var f=i.baseState;a=0,h=u=c=null,l=o;do{var p=l.lane,j=l.eventTime;if((r&p)===p){h!==null&&(h=h.next={eventTime:j,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var v=e,k=l;switch(p=t,j=n,k.tag){case 1:if(v=k.payload,typeof v=="function"){f=v.call(j,f,p);break e}f=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=k.payload,p=typeof v=="function"?v.call(j,f,p):v,p==null)break e;f=Ce({},f,p);break e;case 2:an=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,p=i.effects,p===null?i.effects=[l]:p.push(l))}else j={eventTime:j,lane:p,tag:l.tag,payload:l.payload,callback:l.callback,next:null},h===null?(u=h=j,c=f):h=h.next=j,a|=p;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;p=l,l=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);if(h===null&&(c=f),i.baseState=c,i.firstBaseUpdate=u,i.lastBaseUpdate=h,t=i.shared.interleaved,t!==null){i=t;do a|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);$n|=a,e.lanes=a,e.memoizedState=f}}function Ec(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(U(191,i));i.call(r)}}}var ws={},Ut=Nn(ws),us=Nn(ws),ds=Nn(ws);function Ln(e){if(e===ws)throw Error(U(174));return e}function ll(e,t){switch(ge(ds,t),ge(us,e),ge(Ut,ws),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Go(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Go(t,e)}we(Ut),ge(Ut,t)}function xr(){we(Ut),we(us),we(ds)}function Od(e){Ln(ds.current);var t=Ln(Ut.current),n=Go(t,e.type);t!==n&&(ge(us,e),ge(Ut,n))}function cl(e){us.current===e&&(we(Ut),we(us))}var Ne=Nn(0);function Ei(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var jo=[];function ul(){for(var e=0;e<jo.length;e++)jo[e]._workInProgressVersionPrimary=null;jo.length=0}var ni=en.ReactCurrentDispatcher,ko=en.ReactCurrentBatchConfig,On=0,Se=null,ze=null,Me=null,_i=!1,Vr=!1,fs=0,u0=0;function We(){throw Error(U(321))}function dl(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Tt(e[n],t[n]))return!1;return!0}function fl(e,t,n,r,i,o){if(On=o,Se=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ni.current=e===null||e.memoizedState===null?p0:h0,e=n(r,i),Vr){o=0;do{if(Vr=!1,fs=0,25<=o)throw Error(U(301));o+=1,Me=ze=null,t.updateQueue=null,ni.current=x0,e=n(r,i)}while(Vr)}if(ni.current=Ri,t=ze!==null&&ze.next!==null,On=0,Me=ze=Se=null,_i=!1,t)throw Error(U(300));return e}function ml(){var e=fs!==0;return fs=0,e}function At(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Me===null?Se.memoizedState=Me=e:Me=Me.next=e,Me}function jt(){if(ze===null){var e=Se.alternate;e=e!==null?e.memoizedState:null}else e=ze.next;var t=Me===null?Se.memoizedState:Me.next;if(t!==null)Me=t,ze=e;else{if(e===null)throw Error(U(310));ze=e,e={memoizedState:ze.memoizedState,baseState:ze.baseState,baseQueue:ze.baseQueue,queue:ze.queue,next:null},Me===null?Se.memoizedState=Me=e:Me=Me.next=e}return Me}function ms(e,t){return typeof t=="function"?t(e):t}function No(e){var t=jt(),n=t.queue;if(n===null)throw Error(U(311));n.lastRenderedReducer=e;var r=ze,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var a=i.next;i.next=o.next,o.next=a}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var l=a=null,c=null,u=o;do{var h=u.lane;if((On&h)===h)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var f={lane:h,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(l=c=f,a=r):c=c.next=f,Se.lanes|=h,$n|=h}u=u.next}while(u!==null&&u!==o);c===null?a=r:c.next=l,Tt(r,t.memoizedState)||(rt=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=c,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,Se.lanes|=o,$n|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function So(e){var t=jt(),n=t.queue;if(n===null)throw Error(U(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var a=i=i.next;do o=e(o,a.action),a=a.next;while(a!==i);Tt(o,t.memoizedState)||(rt=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function $d(){}function Bd(e,t){var n=Se,r=jt(),i=t(),o=!Tt(r.memoizedState,i);if(o&&(r.memoizedState=i,rt=!0),r=r.queue,pl(Qd.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||Me!==null&&Me.memoizedState.tag&1){if(n.flags|=2048,ps(9,Wd.bind(null,n,r,i,t),void 0,null),Fe===null)throw Error(U(349));On&30||Ud(n,t,i)}return i}function Ud(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Se.updateQueue,t===null?(t={lastEffect:null,stores:null},Se.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Wd(e,t,n,r){t.value=n,t.getSnapshot=r,qd(t)&&Hd(e)}function Qd(e,t,n){return n(function(){qd(t)&&Hd(e)})}function qd(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Tt(e,n)}catch{return!0}}function Hd(e){var t=Kt(e,1);t!==null&&Pt(t,e,1,-1)}function _c(e){var t=At();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ms,lastRenderedState:e},t.queue=e,e=e.dispatch=m0.bind(null,Se,e),[t.memoizedState,e]}function ps(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Se.updateQueue,t===null?(t={lastEffect:null,stores:null},Se.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Yd(){return jt().memoizedState}function ri(e,t,n,r){var i=At();Se.flags|=e,i.memoizedState=ps(1|t,n,void 0,r===void 0?null:r)}function Qi(e,t,n,r){var i=jt();r=r===void 0?null:r;var o=void 0;if(ze!==null){var a=ze.memoizedState;if(o=a.destroy,r!==null&&dl(r,a.deps)){i.memoizedState=ps(t,n,o,r);return}}Se.flags|=e,i.memoizedState=ps(1|t,n,o,r)}function Rc(e,t){return ri(8390656,8,e,t)}function pl(e,t){return Qi(2048,8,e,t)}function Vd(e,t){return Qi(4,2,e,t)}function Gd(e,t){return Qi(4,4,e,t)}function Xd(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Kd(e,t,n){return n=n!=null?n.concat([e]):null,Qi(4,4,Xd.bind(null,t,e),n)}function hl(){}function Jd(e,t){var n=jt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&dl(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Zd(e,t){var n=jt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&dl(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function ef(e,t,n){return On&21?(Tt(n,t)||(n=id(),Se.lanes|=n,$n|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,rt=!0),e.memoizedState=n)}function d0(e,t){var n=xe;xe=n!==0&&4>n?n:4,e(!0);var r=ko.transition;ko.transition={};try{e(!1),t()}finally{xe=n,ko.transition=r}}function tf(){return jt().memoizedState}function f0(e,t,n){var r=yn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},nf(e))rf(t,n);else if(n=Dd(e,t,n,r),n!==null){var i=Xe();Pt(n,e,r,i),sf(n,t,r)}}function m0(e,t,n){var r=yn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(nf(e))rf(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var a=t.lastRenderedState,l=o(a,n);if(i.hasEagerState=!0,i.eagerState=l,Tt(l,a)){var c=t.interleaved;c===null?(i.next=i,ol(t)):(i.next=c.next,c.next=i),t.interleaved=i;return}}catch{}finally{}n=Dd(e,t,i,r),n!==null&&(i=Xe(),Pt(n,e,r,i),sf(n,t,r))}}function nf(e){var t=e.alternate;return e===Se||t!==null&&t===Se}function rf(e,t){Vr=_i=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function sf(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ha(e,n)}}var Ri={readContext:wt,useCallback:We,useContext:We,useEffect:We,useImperativeHandle:We,useInsertionEffect:We,useLayoutEffect:We,useMemo:We,useReducer:We,useRef:We,useState:We,useDebugValue:We,useDeferredValue:We,useTransition:We,useMutableSource:We,useSyncExternalStore:We,useId:We,unstable_isNewReconciler:!1},p0={readContext:wt,useCallback:function(e,t){return At().memoizedState=[e,t===void 0?null:t],e},useContext:wt,useEffect:Rc,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,ri(4194308,4,Xd.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ri(4194308,4,e,t)},useInsertionEffect:function(e,t){return ri(4,2,e,t)},useMemo:function(e,t){var n=At();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=At();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=f0.bind(null,Se,e),[r.memoizedState,e]},useRef:function(e){var t=At();return e={current:e},t.memoizedState=e},useState:_c,useDebugValue:hl,useDeferredValue:function(e){return At().memoizedState=e},useTransition:function(){var e=_c(!1),t=e[0];return e=d0.bind(null,e[1]),At().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Se,i=At();if(je){if(n===void 0)throw Error(U(407));n=n()}else{if(n=t(),Fe===null)throw Error(U(349));On&30||Ud(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,Rc(Qd.bind(null,r,o,e),[e]),r.flags|=2048,ps(9,Wd.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=At(),t=Fe.identifierPrefix;if(je){var n=Ht,r=qt;n=(r&~(1<<32-Rt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=fs++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=u0++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},h0={readContext:wt,useCallback:Jd,useContext:wt,useEffect:pl,useImperativeHandle:Kd,useInsertionEffect:Vd,useLayoutEffect:Gd,useMemo:Zd,useReducer:No,useRef:Yd,useState:function(){return No(ms)},useDebugValue:hl,useDeferredValue:function(e){var t=jt();return ef(t,ze.memoizedState,e)},useTransition:function(){var e=No(ms)[0],t=jt().memoizedState;return[e,t]},useMutableSource:$d,useSyncExternalStore:Bd,useId:tf,unstable_isNewReconciler:!1},x0={readContext:wt,useCallback:Jd,useContext:wt,useEffect:pl,useImperativeHandle:Kd,useInsertionEffect:Vd,useLayoutEffect:Gd,useMemo:Zd,useReducer:So,useRef:Yd,useState:function(){return So(ms)},useDebugValue:hl,useDeferredValue:function(e){var t=jt();return ze===null?t.memoizedState=e:ef(t,ze.memoizedState,e)},useTransition:function(){var e=So(ms)[0],t=jt().memoizedState;return[e,t]},useMutableSource:$d,useSyncExternalStore:Bd,useId:tf,unstable_isNewReconciler:!1};function St(e,t){if(e&&e.defaultProps){t=Ce({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function xa(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Ce({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var qi={isMounted:function(e){return(e=e._reactInternals)?Wn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Xe(),i=yn(e),o=Yt(r,i);o.payload=t,n!=null&&(o.callback=n),t=gn(e,o,i),t!==null&&(Pt(t,e,i,r),ti(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Xe(),i=yn(e),o=Yt(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=gn(e,o,i),t!==null&&(Pt(t,e,i,r),ti(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Xe(),r=yn(e),i=Yt(n,r);i.tag=2,t!=null&&(i.callback=t),t=gn(e,i,r),t!==null&&(Pt(t,e,r,n),ti(t,e,r))}};function Pc(e,t,n,r,i,o,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,a):t.prototype&&t.prototype.isPureReactComponent?!os(n,r)||!os(i,o):!0}function of(e,t,n){var r=!1,i=jn,o=t.contextType;return typeof o=="object"&&o!==null?o=wt(o):(i=it(t)?Dn:He.current,r=t.contextTypes,o=(r=r!=null)?mr(e,i):jn),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=qi,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Tc(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&qi.enqueueReplaceState(t,t.state,null)}function ga(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},al(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=wt(o):(o=it(t)?Dn:He.current,i.context=mr(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(xa(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&qi.enqueueReplaceState(i,i.state,null),Ci(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function gr(e,t){try{var n="",r=t;do n+=Qm(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function Co(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function va(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var g0=typeof WeakMap=="function"?WeakMap:Map;function af(e,t,n){n=Yt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Ti||(Ti=!0,_a=r),va(e,t)},n}function lf(e,t,n){n=Yt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){va(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){va(e,t),typeof r!="function"&&(vn===null?vn=new Set([this]):vn.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function zc(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new g0;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=T0.bind(null,e,t,n),t.then(e,e))}function Lc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Mc(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Yt(-1,1),t.tag=2,gn(n,t,1))),n.lanes|=1),e)}var v0=en.ReactCurrentOwner,rt=!1;function Ge(e,t,n,r){t.child=e===null?Id(t,null,n,r):hr(t,e.child,n,r)}function Fc(e,t,n,r,i){n=n.render;var o=t.ref;return cr(t,i),r=fl(e,t,n,r,o,i),n=ml(),e!==null&&!rt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Jt(e,t,i)):(je&&n&&el(t),t.flags|=1,Ge(e,t,r,i),t.child)}function Ic(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!kl(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,cf(e,t,o,r,i)):(e=ai(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var a=o.memoizedProps;if(n=n.compare,n=n!==null?n:os,n(a,r)&&e.ref===t.ref)return Jt(e,t,i)}return t.flags|=1,e=bn(o,r),e.ref=t.ref,e.return=t,t.child=e}function cf(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(os(o,r)&&e.ref===t.ref)if(rt=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(rt=!0);else return t.lanes=e.lanes,Jt(e,t,i)}return ya(e,t,n,r,i)}function uf(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ge(rr,lt),lt|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ge(rr,lt),lt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,ge(rr,lt),lt|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,ge(rr,lt),lt|=r;return Ge(e,t,i,n),t.child}function df(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function ya(e,t,n,r,i){var o=it(n)?Dn:He.current;return o=mr(t,o),cr(t,i),n=fl(e,t,n,r,o,i),r=ml(),e!==null&&!rt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Jt(e,t,i)):(je&&r&&el(t),t.flags|=1,Ge(e,t,n,i),t.child)}function Dc(e,t,n,r,i){if(it(n)){var o=!0;wi(t)}else o=!1;if(cr(t,i),t.stateNode===null)si(e,t),of(t,n,r),ga(t,n,r,i),r=!0;else if(e===null){var a=t.stateNode,l=t.memoizedProps;a.props=l;var c=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=wt(u):(u=it(n)?Dn:He.current,u=mr(t,u));var h=n.getDerivedStateFromProps,f=typeof h=="function"||typeof a.getSnapshotBeforeUpdate=="function";f||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==r||c!==u)&&Tc(t,a,r,u),an=!1;var p=t.memoizedState;a.state=p,Ci(t,r,a,i),c=t.memoizedState,l!==r||p!==c||st.current||an?(typeof h=="function"&&(xa(t,n,h,r),c=t.memoizedState),(l=an||Pc(t,n,l,r,p,c,u))?(f||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),a.props=r,a.state=c,a.context=u,r=l):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Ad(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:St(t.type,l),a.props=u,f=t.pendingProps,p=a.context,c=n.contextType,typeof c=="object"&&c!==null?c=wt(c):(c=it(n)?Dn:He.current,c=mr(t,c));var j=n.getDerivedStateFromProps;(h=typeof j=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==f||p!==c)&&Tc(t,a,r,c),an=!1,p=t.memoizedState,a.state=p,Ci(t,r,a,i);var v=t.memoizedState;l!==f||p!==v||st.current||an?(typeof j=="function"&&(xa(t,n,j,r),v=t.memoizedState),(u=an||Pc(t,n,u,r,p,v,c)||!1)?(h||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,v,c),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,v,c)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=v),a.props=r,a.state=v,a.context=c,r=u):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return ba(e,t,n,r,o,i)}function ba(e,t,n,r,i,o){df(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return i&&jc(t,n,!1),Jt(e,t,o);r=t.stateNode,v0.current=t;var l=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=hr(t,e.child,null,o),t.child=hr(t,null,l,o)):Ge(e,t,l,o),t.memoizedState=r.state,i&&jc(t,n,!0),t.child}function ff(e){var t=e.stateNode;t.pendingContext?wc(e,t.pendingContext,t.pendingContext!==t.context):t.context&&wc(e,t.context,!1),ll(e,t.containerInfo)}function Ac(e,t,n,r,i){return pr(),nl(i),t.flags|=256,Ge(e,t,n,r),t.child}var wa={dehydrated:null,treeContext:null,retryLane:0};function ja(e){return{baseLanes:e,cachePool:null,transitions:null}}function mf(e,t,n){var r=t.pendingProps,i=Ne.current,o=!1,a=(t.flags&128)!==0,l;if((l=a)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),ge(Ne,i&1),e===null)return pa(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,o?(r=t.mode,o=t.child,a={mode:"hidden",children:a},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=a):o=Vi(a,r,0,null),e=Fn(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=ja(n),t.memoizedState=wa,e):xl(t,a));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return y0(e,t,a,r,l,i,n);if(o){o=r.fallback,a=t.mode,i=e.child,l=i.sibling;var c={mode:"hidden",children:r.children};return!(a&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=c,t.deletions=null):(r=bn(i,c),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?o=bn(l,o):(o=Fn(o,a,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,a=e.child.memoizedState,a=a===null?ja(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},o.memoizedState=a,o.childLanes=e.childLanes&~n,t.memoizedState=wa,r}return o=e.child,e=o.sibling,r=bn(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function xl(e,t){return t=Vi({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Os(e,t,n,r){return r!==null&&nl(r),hr(t,e.child,null,n),e=xl(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function y0(e,t,n,r,i,o,a){if(n)return t.flags&256?(t.flags&=-257,r=Co(Error(U(422))),Os(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=Vi({mode:"visible",children:r.children},i,0,null),o=Fn(o,i,a,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&hr(t,e.child,null,a),t.child.memoizedState=ja(a),t.memoizedState=wa,o);if(!(t.mode&1))return Os(e,t,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,o=Error(U(419)),r=Co(o,r,void 0),Os(e,t,a,r)}if(l=(a&e.childLanes)!==0,rt||l){if(r=Fe,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|a)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Kt(e,i),Pt(r,e,i,-1))}return jl(),r=Co(Error(U(421))),Os(e,t,a,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=z0.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,ct=xn(i.nextSibling),ut=t,je=!0,Et=null,e!==null&&(gt[vt++]=qt,gt[vt++]=Ht,gt[vt++]=An,qt=e.id,Ht=e.overflow,An=t),t=xl(t,r.children),t.flags|=4096,t)}function Oc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ha(e.return,t,n)}function Eo(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function pf(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(Ge(e,t,r.children,n),r=Ne.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Oc(e,n,t);else if(e.tag===19)Oc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ge(Ne,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Ei(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Eo(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Ei(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Eo(t,!0,n,null,o);break;case"together":Eo(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function si(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Jt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),$n|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(U(153));if(t.child!==null){for(e=t.child,n=bn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=bn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function b0(e,t,n){switch(t.tag){case 3:ff(t),pr();break;case 5:Od(t);break;case 1:it(t.type)&&wi(t);break;case 4:ll(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;ge(Ni,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(ge(Ne,Ne.current&1),t.flags|=128,null):n&t.child.childLanes?mf(e,t,n):(ge(Ne,Ne.current&1),e=Jt(e,t,n),e!==null?e.sibling:null);ge(Ne,Ne.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return pf(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ge(Ne,Ne.current),r)break;return null;case 22:case 23:return t.lanes=0,uf(e,t,n)}return Jt(e,t,n)}var hf,ka,xf,gf;hf=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ka=function(){};xf=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Ln(Ut.current);var o=null;switch(n){case"input":i=qo(e,i),r=qo(e,r),o=[];break;case"select":i=Ce({},i,{value:void 0}),r=Ce({},r,{value:void 0}),o=[];break;case"textarea":i=Vo(e,i),r=Vo(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=yi)}Xo(n,r);var a;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(a in l)l.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Zr.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var c=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&c!==l&&(c!=null||l!=null))if(u==="style")if(l){for(a in l)!l.hasOwnProperty(a)||c&&c.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in c)c.hasOwnProperty(a)&&l[a]!==c[a]&&(n||(n={}),n[a]=c[a])}else n||(o||(o=[]),o.push(u,n)),n=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,l=l?l.__html:void 0,c!=null&&l!==c&&(o=o||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(o=o||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Zr.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&be("scroll",e),o||l===c||(o=[])):(o=o||[]).push(u,c))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};gf=function(e,t,n,r){n!==r&&(t.flags|=4)};function Lr(e,t){if(!je)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Qe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function w0(e,t,n){var r=t.pendingProps;switch(tl(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Qe(t),null;case 1:return it(t.type)&&bi(),Qe(t),null;case 3:return r=t.stateNode,xr(),we(st),we(He),ul(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Ds(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Et!==null&&(Ta(Et),Et=null))),ka(e,t),Qe(t),null;case 5:cl(t);var i=Ln(ds.current);if(n=t.type,e!==null&&t.stateNode!=null)xf(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(U(166));return Qe(t),null}if(e=Ln(Ut.current),Ds(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[Ot]=t,r[cs]=o,e=(t.mode&1)!==0,n){case"dialog":be("cancel",r),be("close",r);break;case"iframe":case"object":case"embed":be("load",r);break;case"video":case"audio":for(i=0;i<Ur.length;i++)be(Ur[i],r);break;case"source":be("error",r);break;case"img":case"image":case"link":be("error",r),be("load",r);break;case"details":be("toggle",r);break;case"input":Vl(r,o),be("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},be("invalid",r);break;case"textarea":Xl(r,o),be("invalid",r)}Xo(n,o),i=null;for(var a in o)if(o.hasOwnProperty(a)){var l=o[a];a==="children"?typeof l=="string"?r.textContent!==l&&(o.suppressHydrationWarning!==!0&&Is(r.textContent,l,e),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(o.suppressHydrationWarning!==!0&&Is(r.textContent,l,e),i=["children",""+l]):Zr.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&be("scroll",r)}switch(n){case"input":_s(r),Gl(r,o,!0);break;case"textarea":_s(r),Kl(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=yi)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Qu(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[Ot]=t,e[cs]=r,hf(e,t,!1,!1),t.stateNode=e;e:{switch(a=Ko(n,r),n){case"dialog":be("cancel",e),be("close",e),i=r;break;case"iframe":case"object":case"embed":be("load",e),i=r;break;case"video":case"audio":for(i=0;i<Ur.length;i++)be(Ur[i],e);i=r;break;case"source":be("error",e),i=r;break;case"img":case"image":case"link":be("error",e),be("load",e),i=r;break;case"details":be("toggle",e),i=r;break;case"input":Vl(e,r),i=qo(e,r),be("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=Ce({},r,{value:void 0}),be("invalid",e);break;case"textarea":Xl(e,r),i=Vo(e,r),be("invalid",e);break;default:i=r}Xo(n,i),l=i;for(o in l)if(l.hasOwnProperty(o)){var c=l[o];o==="style"?Yu(e,c):o==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&qu(e,c)):o==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&es(e,c):typeof c=="number"&&es(e,""+c):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Zr.hasOwnProperty(o)?c!=null&&o==="onScroll"&&be("scroll",e):c!=null&&$a(e,o,c,a))}switch(n){case"input":_s(e),Gl(e,r,!1);break;case"textarea":_s(e),Kl(e);break;case"option":r.value!=null&&e.setAttribute("value",""+wn(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?ir(e,!!r.multiple,o,!1):r.defaultValue!=null&&ir(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=yi)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Qe(t),null;case 6:if(e&&t.stateNode!=null)gf(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(U(166));if(n=Ln(ds.current),Ln(Ut.current),Ds(t)){if(r=t.stateNode,n=t.memoizedProps,r[Ot]=t,(o=r.nodeValue!==n)&&(e=ut,e!==null))switch(e.tag){case 3:Is(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Is(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ot]=t,t.stateNode=r}return Qe(t),null;case 13:if(we(Ne),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(je&&ct!==null&&t.mode&1&&!(t.flags&128))Md(),pr(),t.flags|=98560,o=!1;else if(o=Ds(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(U(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(U(317));o[Ot]=t}else pr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Qe(t),o=!1}else Et!==null&&(Ta(Et),Et=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Ne.current&1?Le===0&&(Le=3):jl())),t.updateQueue!==null&&(t.flags|=4),Qe(t),null);case 4:return xr(),ka(e,t),e===null&&as(t.stateNode.containerInfo),Qe(t),null;case 10:return il(t.type._context),Qe(t),null;case 17:return it(t.type)&&bi(),Qe(t),null;case 19:if(we(Ne),o=t.memoizedState,o===null)return Qe(t),null;if(r=(t.flags&128)!==0,a=o.rendering,a===null)if(r)Lr(o,!1);else{if(Le!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=Ei(e),a!==null){for(t.flags|=128,Lr(o,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,a=o.alternate,a===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=a.childLanes,o.lanes=a.lanes,o.child=a.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=a.memoizedProps,o.memoizedState=a.memoizedState,o.updateQueue=a.updateQueue,o.type=a.type,e=a.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ge(Ne,Ne.current&1|2),t.child}e=e.sibling}o.tail!==null&&Re()>vr&&(t.flags|=128,r=!0,Lr(o,!1),t.lanes=4194304)}else{if(!r)if(e=Ei(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Lr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!a.alternate&&!je)return Qe(t),null}else 2*Re()-o.renderingStartTime>vr&&n!==1073741824&&(t.flags|=128,r=!0,Lr(o,!1),t.lanes=4194304);o.isBackwards?(a.sibling=t.child,t.child=a):(n=o.last,n!==null?n.sibling=a:t.child=a,o.last=a)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Re(),t.sibling=null,n=Ne.current,ge(Ne,r?n&1|2:n&1),t):(Qe(t),null);case 22:case 23:return wl(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?lt&1073741824&&(Qe(t),t.subtreeFlags&6&&(t.flags|=8192)):Qe(t),null;case 24:return null;case 25:return null}throw Error(U(156,t.tag))}function j0(e,t){switch(tl(t),t.tag){case 1:return it(t.type)&&bi(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return xr(),we(st),we(He),ul(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return cl(t),null;case 13:if(we(Ne),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(U(340));pr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return we(Ne),null;case 4:return xr(),null;case 10:return il(t.type._context),null;case 22:case 23:return wl(),null;case 24:return null;default:return null}}var $s=!1,qe=!1,k0=typeof WeakSet=="function"?WeakSet:Set,K=null;function nr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ee(e,t,r)}else n.current=null}function Na(e,t,n){try{n()}catch(r){Ee(e,t,r)}}var $c=!1;function N0(e,t){if(aa=xi,e=wd(),Za(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var a=0,l=-1,c=-1,u=0,h=0,f=e,p=null;t:for(;;){for(var j;f!==n||i!==0&&f.nodeType!==3||(l=a+i),f!==o||r!==0&&f.nodeType!==3||(c=a+r),f.nodeType===3&&(a+=f.nodeValue.length),(j=f.firstChild)!==null;)p=f,f=j;for(;;){if(f===e)break t;if(p===n&&++u===i&&(l=a),p===o&&++h===r&&(c=a),(j=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=j}n=l===-1||c===-1?null:{start:l,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(la={focusedElem:e,selectionRange:n},xi=!1,K=t;K!==null;)if(t=K,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,K=e;else for(;K!==null;){t=K;try{var v=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var k=v.memoizedProps,R=v.memoizedState,g=t.stateNode,m=g.getSnapshotBeforeUpdate(t.elementType===t.type?k:St(t.type,k),R);g.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var y=t.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(U(163))}}catch(S){Ee(t,t.return,S)}if(e=t.sibling,e!==null){e.return=t.return,K=e;break}K=t.return}return v=$c,$c=!1,v}function Gr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Na(t,n,o)}i=i.next}while(i!==r)}}function Hi(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Sa(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function vf(e){var t=e.alternate;t!==null&&(e.alternate=null,vf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ot],delete t[cs],delete t[da],delete t[o0],delete t[a0])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function yf(e){return e.tag===5||e.tag===3||e.tag===4}function Bc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||yf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ca(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=yi));else if(r!==4&&(e=e.child,e!==null))for(Ca(e,t,n),e=e.sibling;e!==null;)Ca(e,t,n),e=e.sibling}function Ea(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Ea(e,t,n),e=e.sibling;e!==null;)Ea(e,t,n),e=e.sibling}var Ae=null,Ct=!1;function tn(e,t,n){for(n=n.child;n!==null;)bf(e,t,n),n=n.sibling}function bf(e,t,n){if(Bt&&typeof Bt.onCommitFiberUnmount=="function")try{Bt.onCommitFiberUnmount(Ai,n)}catch{}switch(n.tag){case 5:qe||nr(n,t);case 6:var r=Ae,i=Ct;Ae=null,tn(e,t,n),Ae=r,Ct=i,Ae!==null&&(Ct?(e=Ae,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Ae.removeChild(n.stateNode));break;case 18:Ae!==null&&(Ct?(e=Ae,n=n.stateNode,e.nodeType===8?bo(e.parentNode,n):e.nodeType===1&&bo(e,n),ss(e)):bo(Ae,n.stateNode));break;case 4:r=Ae,i=Ct,Ae=n.stateNode.containerInfo,Ct=!0,tn(e,t,n),Ae=r,Ct=i;break;case 0:case 11:case 14:case 15:if(!qe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,a=o.destroy;o=o.tag,a!==void 0&&(o&2||o&4)&&Na(n,t,a),i=i.next}while(i!==r)}tn(e,t,n);break;case 1:if(!qe&&(nr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Ee(n,t,l)}tn(e,t,n);break;case 21:tn(e,t,n);break;case 22:n.mode&1?(qe=(r=qe)||n.memoizedState!==null,tn(e,t,n),qe=r):tn(e,t,n);break;default:tn(e,t,n)}}function Uc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new k0),t.forEach(function(r){var i=L0.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Nt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,a=t,l=a;e:for(;l!==null;){switch(l.tag){case 5:Ae=l.stateNode,Ct=!1;break e;case 3:Ae=l.stateNode.containerInfo,Ct=!0;break e;case 4:Ae=l.stateNode.containerInfo,Ct=!0;break e}l=l.return}if(Ae===null)throw Error(U(160));bf(o,a,i),Ae=null,Ct=!1;var c=i.alternate;c!==null&&(c.return=null),i.return=null}catch(u){Ee(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)wf(t,e),t=t.sibling}function wf(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Nt(t,e),Ft(e),r&4){try{Gr(3,e,e.return),Hi(3,e)}catch(k){Ee(e,e.return,k)}try{Gr(5,e,e.return)}catch(k){Ee(e,e.return,k)}}break;case 1:Nt(t,e),Ft(e),r&512&&n!==null&&nr(n,n.return);break;case 5:if(Nt(t,e),Ft(e),r&512&&n!==null&&nr(n,n.return),e.flags&32){var i=e.stateNode;try{es(i,"")}catch(k){Ee(e,e.return,k)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,a=n!==null?n.memoizedProps:o,l=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{l==="input"&&o.type==="radio"&&o.name!=null&&Uu(i,o),Ko(l,a);var u=Ko(l,o);for(a=0;a<c.length;a+=2){var h=c[a],f=c[a+1];h==="style"?Yu(i,f):h==="dangerouslySetInnerHTML"?qu(i,f):h==="children"?es(i,f):$a(i,h,f,u)}switch(l){case"input":Ho(i,o);break;case"textarea":Wu(i,o);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var j=o.value;j!=null?ir(i,!!o.multiple,j,!1):p!==!!o.multiple&&(o.defaultValue!=null?ir(i,!!o.multiple,o.defaultValue,!0):ir(i,!!o.multiple,o.multiple?[]:"",!1))}i[cs]=o}catch(k){Ee(e,e.return,k)}}break;case 6:if(Nt(t,e),Ft(e),r&4){if(e.stateNode===null)throw Error(U(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(k){Ee(e,e.return,k)}}break;case 3:if(Nt(t,e),Ft(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ss(t.containerInfo)}catch(k){Ee(e,e.return,k)}break;case 4:Nt(t,e),Ft(e);break;case 13:Nt(t,e),Ft(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(yl=Re())),r&4&&Uc(e);break;case 22:if(h=n!==null&&n.memoizedState!==null,e.mode&1?(qe=(u=qe)||h,Nt(t,e),qe=u):Nt(t,e),Ft(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!h&&e.mode&1)for(K=e,h=e.child;h!==null;){for(f=K=h;K!==null;){switch(p=K,j=p.child,p.tag){case 0:case 11:case 14:case 15:Gr(4,p,p.return);break;case 1:nr(p,p.return);var v=p.stateNode;if(typeof v.componentWillUnmount=="function"){r=p,n=p.return;try{t=r,v.props=t.memoizedProps,v.state=t.memoizedState,v.componentWillUnmount()}catch(k){Ee(r,n,k)}}break;case 5:nr(p,p.return);break;case 22:if(p.memoizedState!==null){Qc(f);continue}}j!==null?(j.return=p,K=j):Qc(f)}h=h.sibling}e:for(h=null,f=e;;){if(f.tag===5){if(h===null){h=f;try{i=f.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(l=f.stateNode,c=f.memoizedProps.style,a=c!=null&&c.hasOwnProperty("display")?c.display:null,l.style.display=Hu("display",a))}catch(k){Ee(e,e.return,k)}}}else if(f.tag===6){if(h===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(k){Ee(e,e.return,k)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;h===f&&(h=null),f=f.return}h===f&&(h=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Nt(t,e),Ft(e),r&4&&Uc(e);break;case 21:break;default:Nt(t,e),Ft(e)}}function Ft(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(yf(n)){var r=n;break e}n=n.return}throw Error(U(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(es(i,""),r.flags&=-33);var o=Bc(e);Ea(e,o,i);break;case 3:case 4:var a=r.stateNode.containerInfo,l=Bc(e);Ca(e,l,a);break;default:throw Error(U(161))}}catch(c){Ee(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function S0(e,t,n){K=e,jf(e)}function jf(e,t,n){for(var r=(e.mode&1)!==0;K!==null;){var i=K,o=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||$s;if(!a){var l=i.alternate,c=l!==null&&l.memoizedState!==null||qe;l=$s;var u=qe;if($s=a,(qe=c)&&!u)for(K=i;K!==null;)a=K,c=a.child,a.tag===22&&a.memoizedState!==null?qc(i):c!==null?(c.return=a,K=c):qc(i);for(;o!==null;)K=o,jf(o),o=o.sibling;K=i,$s=l,qe=u}Wc(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,K=o):Wc(e)}}function Wc(e){for(;K!==null;){var t=K;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:qe||Hi(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!qe)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:St(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Ec(t,o,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Ec(t,a,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var h=u.memoizedState;if(h!==null){var f=h.dehydrated;f!==null&&ss(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(U(163))}qe||t.flags&512&&Sa(t)}catch(p){Ee(t,t.return,p)}}if(t===e){K=null;break}if(n=t.sibling,n!==null){n.return=t.return,K=n;break}K=t.return}}function Qc(e){for(;K!==null;){var t=K;if(t===e){K=null;break}var n=t.sibling;if(n!==null){n.return=t.return,K=n;break}K=t.return}}function qc(e){for(;K!==null;){var t=K;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Hi(4,t)}catch(c){Ee(t,n,c)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(c){Ee(t,i,c)}}var o=t.return;try{Sa(t)}catch(c){Ee(t,o,c)}break;case 5:var a=t.return;try{Sa(t)}catch(c){Ee(t,a,c)}}}catch(c){Ee(t,t.return,c)}if(t===e){K=null;break}var l=t.sibling;if(l!==null){l.return=t.return,K=l;break}K=t.return}}var C0=Math.ceil,Pi=en.ReactCurrentDispatcher,gl=en.ReactCurrentOwner,bt=en.ReactCurrentBatchConfig,pe=0,Fe=null,Pe=null,$e=0,lt=0,rr=Nn(0),Le=0,hs=null,$n=0,Yi=0,vl=0,Xr=null,nt=null,yl=0,vr=1/0,Wt=null,Ti=!1,_a=null,vn=null,Bs=!1,fn=null,zi=0,Kr=0,Ra=null,ii=-1,oi=0;function Xe(){return pe&6?Re():ii!==-1?ii:ii=Re()}function yn(e){return e.mode&1?pe&2&&$e!==0?$e&-$e:c0.transition!==null?(oi===0&&(oi=id()),oi):(e=xe,e!==0||(e=window.event,e=e===void 0?16:fd(e.type)),e):1}function Pt(e,t,n,r){if(50<Kr)throw Kr=0,Ra=null,Error(U(185));vs(e,n,r),(!(pe&2)||e!==Fe)&&(e===Fe&&(!(pe&2)&&(Yi|=n),Le===4&&un(e,$e)),ot(e,r),n===1&&pe===0&&!(t.mode&1)&&(vr=Re()+500,Wi&&Sn()))}function ot(e,t){var n=e.callbackNode;cp(e,t);var r=hi(e,e===Fe?$e:0);if(r===0)n!==null&&ec(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&ec(n),t===1)e.tag===0?l0(Hc.bind(null,e)):Td(Hc.bind(null,e)),s0(function(){!(pe&6)&&Sn()}),n=null;else{switch(od(r)){case 1:n=qa;break;case 4:n=rd;break;case 16:n=pi;break;case 536870912:n=sd;break;default:n=pi}n=Pf(n,kf.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function kf(e,t){if(ii=-1,oi=0,pe&6)throw Error(U(327));var n=e.callbackNode;if(ur()&&e.callbackNode!==n)return null;var r=hi(e,e===Fe?$e:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Li(e,r);else{t=r;var i=pe;pe|=2;var o=Sf();(Fe!==e||$e!==t)&&(Wt=null,vr=Re()+500,Mn(e,t));do try{R0();break}catch(l){Nf(e,l)}while(1);sl(),Pi.current=o,pe=i,Pe!==null?t=0:(Fe=null,$e=0,t=Le)}if(t!==0){if(t===2&&(i=na(e),i!==0&&(r=i,t=Pa(e,i))),t===1)throw n=hs,Mn(e,0),un(e,r),ot(e,Re()),n;if(t===6)un(e,r);else{if(i=e.current.alternate,!(r&30)&&!E0(i)&&(t=Li(e,r),t===2&&(o=na(e),o!==0&&(r=o,t=Pa(e,o))),t===1))throw n=hs,Mn(e,0),un(e,r),ot(e,Re()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(U(345));case 2:Pn(e,nt,Wt);break;case 3:if(un(e,r),(r&130023424)===r&&(t=yl+500-Re(),10<t)){if(hi(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Xe(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=ua(Pn.bind(null,e,nt,Wt),t);break}Pn(e,nt,Wt);break;case 4:if(un(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var a=31-Rt(r);o=1<<a,a=t[a],a>i&&(i=a),r&=~o}if(r=i,r=Re()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*C0(r/1960))-r,10<r){e.timeoutHandle=ua(Pn.bind(null,e,nt,Wt),r);break}Pn(e,nt,Wt);break;case 5:Pn(e,nt,Wt);break;default:throw Error(U(329))}}}return ot(e,Re()),e.callbackNode===n?kf.bind(null,e):null}function Pa(e,t){var n=Xr;return e.current.memoizedState.isDehydrated&&(Mn(e,t).flags|=256),e=Li(e,t),e!==2&&(t=nt,nt=n,t!==null&&Ta(t)),e}function Ta(e){nt===null?nt=e:nt.push.apply(nt,e)}function E0(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!Tt(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function un(e,t){for(t&=~vl,t&=~Yi,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Rt(t),r=1<<n;e[n]=-1,t&=~r}}function Hc(e){if(pe&6)throw Error(U(327));ur();var t=hi(e,0);if(!(t&1))return ot(e,Re()),null;var n=Li(e,t);if(e.tag!==0&&n===2){var r=na(e);r!==0&&(t=r,n=Pa(e,r))}if(n===1)throw n=hs,Mn(e,0),un(e,t),ot(e,Re()),n;if(n===6)throw Error(U(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Pn(e,nt,Wt),ot(e,Re()),null}function bl(e,t){var n=pe;pe|=1;try{return e(t)}finally{pe=n,pe===0&&(vr=Re()+500,Wi&&Sn())}}function Bn(e){fn!==null&&fn.tag===0&&!(pe&6)&&ur();var t=pe;pe|=1;var n=bt.transition,r=xe;try{if(bt.transition=null,xe=1,e)return e()}finally{xe=r,bt.transition=n,pe=t,!(pe&6)&&Sn()}}function wl(){lt=rr.current,we(rr)}function Mn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,r0(n)),Pe!==null)for(n=Pe.return;n!==null;){var r=n;switch(tl(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&bi();break;case 3:xr(),we(st),we(He),ul();break;case 5:cl(r);break;case 4:xr();break;case 13:we(Ne);break;case 19:we(Ne);break;case 10:il(r.type._context);break;case 22:case 23:wl()}n=n.return}if(Fe=e,Pe=e=bn(e.current,null),$e=lt=t,Le=0,hs=null,vl=Yi=$n=0,nt=Xr=null,zn!==null){for(t=0;t<zn.length;t++)if(n=zn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var a=o.next;o.next=i,r.next=a}n.pending=r}zn=null}return e}function Nf(e,t){do{var n=Pe;try{if(sl(),ni.current=Ri,_i){for(var r=Se.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}_i=!1}if(On=0,Me=ze=Se=null,Vr=!1,fs=0,gl.current=null,n===null||n.return===null){Le=1,hs=t,Pe=null;break}e:{var o=e,a=n.return,l=n,c=t;if(t=$e,l.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,h=l,f=h.tag;if(!(h.mode&1)&&(f===0||f===11||f===15)){var p=h.alternate;p?(h.updateQueue=p.updateQueue,h.memoizedState=p.memoizedState,h.lanes=p.lanes):(h.updateQueue=null,h.memoizedState=null)}var j=Lc(a);if(j!==null){j.flags&=-257,Mc(j,a,l,o,t),j.mode&1&&zc(o,u,t),t=j,c=u;var v=t.updateQueue;if(v===null){var k=new Set;k.add(c),t.updateQueue=k}else v.add(c);break e}else{if(!(t&1)){zc(o,u,t),jl();break e}c=Error(U(426))}}else if(je&&l.mode&1){var R=Lc(a);if(R!==null){!(R.flags&65536)&&(R.flags|=256),Mc(R,a,l,o,t),nl(gr(c,l));break e}}o=c=gr(c,l),Le!==4&&(Le=2),Xr===null?Xr=[o]:Xr.push(o),o=a;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var g=af(o,c,t);Cc(o,g);break e;case 1:l=c;var m=o.type,y=o.stateNode;if(!(o.flags&128)&&(typeof m.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(vn===null||!vn.has(y)))){o.flags|=65536,t&=-t,o.lanes|=t;var S=lf(o,l,t);Cc(o,S);break e}}o=o.return}while(o!==null)}Ef(n)}catch(P){t=P,Pe===n&&n!==null&&(Pe=n=n.return);continue}break}while(1)}function Sf(){var e=Pi.current;return Pi.current=Ri,e===null?Ri:e}function jl(){(Le===0||Le===3||Le===2)&&(Le=4),Fe===null||!($n&268435455)&&!(Yi&268435455)||un(Fe,$e)}function Li(e,t){var n=pe;pe|=2;var r=Sf();(Fe!==e||$e!==t)&&(Wt=null,Mn(e,t));do try{_0();break}catch(i){Nf(e,i)}while(1);if(sl(),pe=n,Pi.current=r,Pe!==null)throw Error(U(261));return Fe=null,$e=0,Le}function _0(){for(;Pe!==null;)Cf(Pe)}function R0(){for(;Pe!==null&&!ep();)Cf(Pe)}function Cf(e){var t=Rf(e.alternate,e,lt);e.memoizedProps=e.pendingProps,t===null?Ef(e):Pe=t,gl.current=null}function Ef(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=j0(n,t),n!==null){n.flags&=32767,Pe=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Le=6,Pe=null;return}}else if(n=w0(n,t,lt),n!==null){Pe=n;return}if(t=t.sibling,t!==null){Pe=t;return}Pe=t=e}while(t!==null);Le===0&&(Le=5)}function Pn(e,t,n){var r=xe,i=bt.transition;try{bt.transition=null,xe=1,P0(e,t,n,r)}finally{bt.transition=i,xe=r}return null}function P0(e,t,n,r){do ur();while(fn!==null);if(pe&6)throw Error(U(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(U(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(up(e,o),e===Fe&&(Pe=Fe=null,$e=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Bs||(Bs=!0,Pf(pi,function(){return ur(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=bt.transition,bt.transition=null;var a=xe;xe=1;var l=pe;pe|=4,gl.current=null,N0(e,n),wf(n,e),Xp(la),xi=!!aa,la=aa=null,e.current=n,S0(n),tp(),pe=l,xe=a,bt.transition=o}else e.current=n;if(Bs&&(Bs=!1,fn=e,zi=i),o=e.pendingLanes,o===0&&(vn=null),sp(n.stateNode),ot(e,Re()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Ti)throw Ti=!1,e=_a,_a=null,e;return zi&1&&e.tag!==0&&ur(),o=e.pendingLanes,o&1?e===Ra?Kr++:(Kr=0,Ra=e):Kr=0,Sn(),null}function ur(){if(fn!==null){var e=od(zi),t=bt.transition,n=xe;try{if(bt.transition=null,xe=16>e?16:e,fn===null)var r=!1;else{if(e=fn,fn=null,zi=0,pe&6)throw Error(U(331));var i=pe;for(pe|=4,K=e.current;K!==null;){var o=K,a=o.child;if(K.flags&16){var l=o.deletions;if(l!==null){for(var c=0;c<l.length;c++){var u=l[c];for(K=u;K!==null;){var h=K;switch(h.tag){case 0:case 11:case 15:Gr(8,h,o)}var f=h.child;if(f!==null)f.return=h,K=f;else for(;K!==null;){h=K;var p=h.sibling,j=h.return;if(vf(h),h===u){K=null;break}if(p!==null){p.return=j,K=p;break}K=j}}}var v=o.alternate;if(v!==null){var k=v.child;if(k!==null){v.child=null;do{var R=k.sibling;k.sibling=null,k=R}while(k!==null)}}K=o}}if(o.subtreeFlags&2064&&a!==null)a.return=o,K=a;else e:for(;K!==null;){if(o=K,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Gr(9,o,o.return)}var g=o.sibling;if(g!==null){g.return=o.return,K=g;break e}K=o.return}}var m=e.current;for(K=m;K!==null;){a=K;var y=a.child;if(a.subtreeFlags&2064&&y!==null)y.return=a,K=y;else e:for(a=m;K!==null;){if(l=K,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Hi(9,l)}}catch(P){Ee(l,l.return,P)}if(l===a){K=null;break e}var S=l.sibling;if(S!==null){S.return=l.return,K=S;break e}K=l.return}}if(pe=i,Sn(),Bt&&typeof Bt.onPostCommitFiberRoot=="function")try{Bt.onPostCommitFiberRoot(Ai,e)}catch{}r=!0}return r}finally{xe=n,bt.transition=t}}return!1}function Yc(e,t,n){t=gr(n,t),t=af(e,t,1),e=gn(e,t,1),t=Xe(),e!==null&&(vs(e,1,t),ot(e,t))}function Ee(e,t,n){if(e.tag===3)Yc(e,e,n);else for(;t!==null;){if(t.tag===3){Yc(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(vn===null||!vn.has(r))){e=gr(n,e),e=lf(t,e,1),t=gn(t,e,1),e=Xe(),t!==null&&(vs(t,1,e),ot(t,e));break}}t=t.return}}function T0(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Xe(),e.pingedLanes|=e.suspendedLanes&n,Fe===e&&($e&n)===n&&(Le===4||Le===3&&($e&130023424)===$e&&500>Re()-yl?Mn(e,0):vl|=n),ot(e,t)}function _f(e,t){t===0&&(e.mode&1?(t=Ts,Ts<<=1,!(Ts&130023424)&&(Ts=4194304)):t=1);var n=Xe();e=Kt(e,t),e!==null&&(vs(e,t,n),ot(e,n))}function z0(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),_f(e,n)}function L0(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(U(314))}r!==null&&r.delete(t),_f(e,n)}var Rf;Rf=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||st.current)rt=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return rt=!1,b0(e,t,n);rt=!!(e.flags&131072)}else rt=!1,je&&t.flags&1048576&&zd(t,ki,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;si(e,t),e=t.pendingProps;var i=mr(t,He.current);cr(t,n),i=fl(null,t,r,e,i,n);var o=ml();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,it(r)?(o=!0,wi(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,al(t),i.updater=qi,t.stateNode=i,i._reactInternals=t,ga(t,r,e,n),t=ba(null,t,r,!0,o,n)):(t.tag=0,je&&o&&el(t),Ge(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(si(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=F0(r),e=St(r,e),i){case 0:t=ya(null,t,r,e,n);break e;case 1:t=Dc(null,t,r,e,n);break e;case 11:t=Fc(null,t,r,e,n);break e;case 14:t=Ic(null,t,r,St(r.type,e),n);break e}throw Error(U(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:St(r,i),ya(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:St(r,i),Dc(e,t,r,i,n);case 3:e:{if(ff(t),e===null)throw Error(U(387));r=t.pendingProps,o=t.memoizedState,i=o.element,Ad(e,t),Ci(t,r,null,n);var a=t.memoizedState;if(r=a.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=gr(Error(U(423)),t),t=Ac(e,t,r,n,i);break e}else if(r!==i){i=gr(Error(U(424)),t),t=Ac(e,t,r,n,i);break e}else for(ct=xn(t.stateNode.containerInfo.firstChild),ut=t,je=!0,Et=null,n=Id(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(pr(),r===i){t=Jt(e,t,n);break e}Ge(e,t,r,n)}t=t.child}return t;case 5:return Od(t),e===null&&pa(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,a=i.children,ca(r,i)?a=null:o!==null&&ca(r,o)&&(t.flags|=32),df(e,t),Ge(e,t,a,n),t.child;case 6:return e===null&&pa(t),null;case 13:return mf(e,t,n);case 4:return ll(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=hr(t,null,r,n):Ge(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:St(r,i),Fc(e,t,r,i,n);case 7:return Ge(e,t,t.pendingProps,n),t.child;case 8:return Ge(e,t,t.pendingProps.children,n),t.child;case 12:return Ge(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,a=i.value,ge(Ni,r._currentValue),r._currentValue=a,o!==null)if(Tt(o.value,a)){if(o.children===i.children&&!st.current){t=Jt(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var l=o.dependencies;if(l!==null){a=o.child;for(var c=l.firstContext;c!==null;){if(c.context===r){if(o.tag===1){c=Yt(-1,n&-n),c.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var h=u.pending;h===null?c.next=c:(c.next=h.next,h.next=c),u.pending=c}}o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),ha(o.return,n,t),l.lanes|=n;break}c=c.next}}else if(o.tag===10)a=o.type===t.type?null:o.child;else if(o.tag===18){if(a=o.return,a===null)throw Error(U(341));a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),ha(a,n,t),a=o.sibling}else a=o.child;if(a!==null)a.return=o;else for(a=o;a!==null;){if(a===t){a=null;break}if(o=a.sibling,o!==null){o.return=a.return,a=o;break}a=a.return}o=a}Ge(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,cr(t,n),i=wt(i),r=r(i),t.flags|=1,Ge(e,t,r,n),t.child;case 14:return r=t.type,i=St(r,t.pendingProps),i=St(r.type,i),Ic(e,t,r,i,n);case 15:return cf(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:St(r,i),si(e,t),t.tag=1,it(r)?(e=!0,wi(t)):e=!1,cr(t,n),of(t,r,i),ga(t,r,i,n),ba(null,t,r,!0,e,n);case 19:return pf(e,t,n);case 22:return uf(e,t,n)}throw Error(U(156,t.tag))};function Pf(e,t){return nd(e,t)}function M0(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function yt(e,t,n,r){return new M0(e,t,n,r)}function kl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function F0(e){if(typeof e=="function")return kl(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ua)return 11;if(e===Wa)return 14}return 2}function bn(e,t){var n=e.alternate;return n===null?(n=yt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function ai(e,t,n,r,i,o){var a=2;if(r=e,typeof e=="function")kl(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case Yn:return Fn(n.children,i,o,t);case Ba:a=8,i|=8;break;case Bo:return e=yt(12,n,t,i|2),e.elementType=Bo,e.lanes=o,e;case Uo:return e=yt(13,n,t,i),e.elementType=Uo,e.lanes=o,e;case Wo:return e=yt(19,n,t,i),e.elementType=Wo,e.lanes=o,e;case Ou:return Vi(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Du:a=10;break e;case Au:a=9;break e;case Ua:a=11;break e;case Wa:a=14;break e;case on:a=16,r=null;break e}throw Error(U(130,e==null?e:typeof e,""))}return t=yt(a,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function Fn(e,t,n,r){return e=yt(7,e,r,t),e.lanes=n,e}function Vi(e,t,n,r){return e=yt(22,e,r,t),e.elementType=Ou,e.lanes=n,e.stateNode={isHidden:!1},e}function _o(e,t,n){return e=yt(6,e,null,t),e.lanes=n,e}function Ro(e,t,n){return t=yt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function I0(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=lo(0),this.expirationTimes=lo(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=lo(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Nl(e,t,n,r,i,o,a,l,c){return e=new I0(e,t,n,l,c),t===1?(t=1,o===!0&&(t|=8)):t=0,o=yt(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},al(o),e}function D0(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Hn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Tf(e){if(!e)return jn;e=e._reactInternals;e:{if(Wn(e)!==e||e.tag!==1)throw Error(U(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(it(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(U(171))}if(e.tag===1){var n=e.type;if(it(n))return Pd(e,n,t)}return t}function zf(e,t,n,r,i,o,a,l,c){return e=Nl(n,r,!0,e,i,o,a,l,c),e.context=Tf(null),n=e.current,r=Xe(),i=yn(n),o=Yt(r,i),o.callback=t??null,gn(n,o,i),e.current.lanes=i,vs(e,i,r),ot(e,r),e}function Gi(e,t,n,r){var i=t.current,o=Xe(),a=yn(i);return n=Tf(n),t.context===null?t.context=n:t.pendingContext=n,t=Yt(o,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=gn(i,t,a),e!==null&&(Pt(e,i,a,o),ti(e,i,a)),a}function Mi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Vc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Sl(e,t){Vc(e,t),(e=e.alternate)&&Vc(e,t)}function A0(){return null}var Lf=typeof reportError=="function"?reportError:function(e){console.error(e)};function Cl(e){this._internalRoot=e}Xi.prototype.render=Cl.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(U(409));Gi(e,t,null,null)};Xi.prototype.unmount=Cl.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Bn(function(){Gi(null,e,null,null)}),t[Xt]=null}};function Xi(e){this._internalRoot=e}Xi.prototype.unstable_scheduleHydration=function(e){if(e){var t=cd();e={blockedOn:null,target:e,priority:t};for(var n=0;n<cn.length&&t!==0&&t<cn[n].priority;n++);cn.splice(n,0,e),n===0&&dd(e)}};function El(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ki(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Gc(){}function O0(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=Mi(a);o.call(u)}}var a=zf(t,r,e,0,null,!1,!1,"",Gc);return e._reactRootContainer=a,e[Xt]=a.current,as(e.nodeType===8?e.parentNode:e),Bn(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=Mi(c);l.call(u)}}var c=Nl(e,0,!1,null,null,!1,!1,"",Gc);return e._reactRootContainer=c,e[Xt]=c.current,as(e.nodeType===8?e.parentNode:e),Bn(function(){Gi(t,c,n,r)}),c}function Ji(e,t,n,r,i){var o=n._reactRootContainer;if(o){var a=o;if(typeof i=="function"){var l=i;i=function(){var c=Mi(a);l.call(c)}}Gi(t,a,e,i)}else a=O0(n,t,e,i,r);return Mi(a)}ad=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Br(t.pendingLanes);n!==0&&(Ha(t,n|1),ot(t,Re()),!(pe&6)&&(vr=Re()+500,Sn()))}break;case 13:Bn(function(){var r=Kt(e,1);if(r!==null){var i=Xe();Pt(r,e,1,i)}}),Sl(e,1)}};Ya=function(e){if(e.tag===13){var t=Kt(e,134217728);if(t!==null){var n=Xe();Pt(t,e,134217728,n)}Sl(e,134217728)}};ld=function(e){if(e.tag===13){var t=yn(e),n=Kt(e,t);if(n!==null){var r=Xe();Pt(n,e,t,r)}Sl(e,t)}};cd=function(){return xe};ud=function(e,t){var n=xe;try{return xe=e,t()}finally{xe=n}};Zo=function(e,t,n){switch(t){case"input":if(Ho(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Ui(r);if(!i)throw Error(U(90));Bu(r),Ho(r,i)}}}break;case"textarea":Wu(e,n);break;case"select":t=n.value,t!=null&&ir(e,!!n.multiple,t,!1)}};Xu=bl;Ku=Bn;var $0={usingClientEntryPoint:!1,Events:[bs,Kn,Ui,Vu,Gu,bl]},Mr={findFiberByHostInstance:Tn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},B0={bundleType:Mr.bundleType,version:Mr.version,rendererPackageName:Mr.rendererPackageName,rendererConfig:Mr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:en.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=ed(e),e===null?null:e.stateNode},findFiberByHostInstance:Mr.findFiberByHostInstance||A0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Us=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Us.isDisabled&&Us.supportsFiber)try{Ai=Us.inject(B0),Bt=Us}catch{}}ft.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$0;ft.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!El(t))throw Error(U(200));return D0(e,t,null,n)};ft.createRoot=function(e,t){if(!El(e))throw Error(U(299));var n=!1,r="",i=Lf;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Nl(e,1,!1,null,null,n,!1,r,i),e[Xt]=t.current,as(e.nodeType===8?e.parentNode:e),new Cl(t)};ft.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(U(188)):(e=Object.keys(e).join(","),Error(U(268,e)));return e=ed(t),e=e===null?null:e.stateNode,e};ft.flushSync=function(e){return Bn(e)};ft.hydrate=function(e,t,n){if(!Ki(t))throw Error(U(200));return Ji(null,e,t,!0,n)};ft.hydrateRoot=function(e,t,n){if(!El(e))throw Error(U(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",a=Lf;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=zf(t,null,e,1,n??null,i,!1,o,a),e[Xt]=t.current,as(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Xi(t)};ft.render=function(e,t,n){if(!Ki(t))throw Error(U(200));return Ji(null,e,t,!1,n)};ft.unmountComponentAtNode=function(e){if(!Ki(e))throw Error(U(40));return e._reactRootContainer?(Bn(function(){Ji(null,null,e,!1,function(){e._reactRootContainer=null,e[Xt]=null})}),!0):!1};ft.unstable_batchedUpdates=bl;ft.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ki(n))throw Error(U(200));if(e==null||e._reactInternals===void 0)throw Error(U(38));return Ji(e,t,n,!1,r)};ft.version="18.3.1-next-f1338f8080-20240426";function Mf(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Mf)}catch(e){console.error(e)}}Mf(),Lu.exports=ft;var U0=Lu.exports,Xc=U0;Oo.createRoot=Xc.createRoot,Oo.hydrateRoot=Xc.hydrateRoot;const W0="modulepreload",Q0=function(e){return"/"+e},Kc={},Ff=function(t,n,r){if(!n||n.length===0)return t();const i=document.getElementsByTagName("link");return Promise.all(n.map(o=>{if(o=Q0(o),o in Kc)return;Kc[o]=!0;const a=o.endsWith(".css"),l=a?'[rel="stylesheet"]':"";if(!!r)for(let h=i.length-1;h>=0;h--){const f=i[h];if(f.href===o&&(!a||f.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${l}`))return;const u=document.createElement("link");if(u.rel=a?"stylesheet":W0,a||(u.as="script",u.crossOrigin=""),u.href=o,document.head.appendChild(u),a)return new Promise((h,f)=>{u.addEventListener("load",h),u.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>t()).catch(o=>{const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o})};var Jc="popstate";function q0(e={}){function t(r,i){let{pathname:o,search:a,hash:l}=r.location;return za("",{pathname:o,search:a,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:xs(i)}return Y0(t,n,null,e)}function ke(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function zt(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function H0(){return Math.random().toString(36).substring(2,10)}function Zc(e,t){return{usr:e.state,key:e.key,idx:t}}function za(e,t,n=null,r){return{pathname:typeof e=="string"?e:e.pathname,search:"",hash:"",...typeof t=="string"?jr(t):t,state:n,key:t&&t.key||r||H0()}}function xs({pathname:e="/",search:t="",hash:n=""}){return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),n&&n!=="#"&&(e+=n.charAt(0)==="#"?n:"#"+n),e}function jr(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substring(n),e=e.substring(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substring(r),e=e.substring(0,r)),e&&(t.pathname=e)}return t}function Y0(e,t,n,r={}){let{window:i=document.defaultView,v5Compat:o=!1}=r,a=i.history,l="POP",c=null,u=h();u==null&&(u=0,a.replaceState({...a.state,idx:u},""));function h(){return(a.state||{idx:null}).idx}function f(){l="POP";let R=h(),g=R==null?null:R-u;u=R,c&&c({action:l,location:k.location,delta:g})}function p(R,g){l="PUSH";let m=za(k.location,R,g);n&&n(m,R),u=h()+1;let y=Zc(m,u),S=k.createHref(m);try{a.pushState(y,"",S)}catch(P){if(P instanceof DOMException&&P.name==="DataCloneError")throw P;i.location.assign(S)}o&&c&&c({action:l,location:k.location,delta:1})}function j(R,g){l="REPLACE";let m=za(k.location,R,g);n&&n(m,R),u=h();let y=Zc(m,u),S=k.createHref(m);a.replaceState(y,"",S),o&&c&&c({action:l,location:k.location,delta:0})}function v(R){return V0(R)}let k={get action(){return l},get location(){return e(i,a)},listen(R){if(c)throw new Error("A history only accepts one active listener");return i.addEventListener(Jc,f),c=R,()=>{i.removeEventListener(Jc,f),c=null}},createHref(R){return t(i,R)},createURL:v,encodeLocation(R){let g=v(R);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:p,replace:j,go(R){return a.go(R)}};return k}function V0(e,t=!1){let n="http://localhost";typeof window<"u"&&(n=window.location.origin!=="null"?window.location.origin:window.location.href),ke(n,"No window.location.(origin|href) available to create URL");let r=typeof e=="string"?e:xs(e);return r=r.replace(/ $/,"%20"),!t&&r.startsWith("//")&&(r=n+r),new URL(r,n)}function If(e,t,n="/"){return G0(e,t,n,!1)}function G0(e,t,n,r){let i=typeof t=="string"?jr(t):t,o=Zt(i.pathname||"/",n);if(o==null)return null;let a=Df(e);X0(a);let l=null;for(let c=0;l==null&&c<a.length;++c){let u=ah(o);l=ih(a[c],u,r)}return l}function Df(e,t=[],n=[],r=""){let i=(o,a,l)=>{let c={relativePath:l===void 0?o.path||"":l,caseSensitive:o.caseSensitive===!0,childrenIndex:a,route:o};c.relativePath.startsWith("/")&&(ke(c.relativePath.startsWith(r),`Absolute route path "${c.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),c.relativePath=c.relativePath.slice(r.length));let u=Vt([r,c.relativePath]),h=n.concat(c);o.children&&o.children.length>0&&(ke(o.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${u}".`),Df(o.children,t,h,u)),!(o.path==null&&!o.index)&&t.push({path:u,score:rh(u,o.index),routesMeta:h})};return e.forEach((o,a)=>{var l;if(o.path===""||!((l=o.path)!=null&&l.includes("?")))i(o,a);else for(let c of Af(o.path))i(o,a,c)}),t}function Af(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let a=Af(r.join("/")),l=[];return l.push(...a.map(c=>c===""?o:[o,c].join("/"))),i&&l.push(...a),l.map(c=>e.startsWith("/")&&c===""?"/":c)}function X0(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:sh(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}var K0=/^:[\w-]+$/,J0=3,Z0=2,eh=1,th=10,nh=-2,eu=e=>e==="*";function rh(e,t){let n=e.split("/"),r=n.length;return n.some(eu)&&(r+=nh),t&&(r+=Z0),n.filter(i=>!eu(i)).reduce((i,o)=>i+(K0.test(o)?J0:o===""?eh:th),r)}function sh(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function ih(e,t,n=!1){let{routesMeta:r}=e,i={},o="/",a=[];for(let l=0;l<r.length;++l){let c=r[l],u=l===r.length-1,h=o==="/"?t:t.slice(o.length)||"/",f=Fi({path:c.relativePath,caseSensitive:c.caseSensitive,end:u},h),p=c.route;if(!f&&u&&n&&!r[r.length-1].route.index&&(f=Fi({path:c.relativePath,caseSensitive:c.caseSensitive,end:!1},h)),!f)return null;Object.assign(i,f.params),a.push({params:i,pathname:Vt([o,f.pathname]),pathnameBase:dh(Vt([o,f.pathnameBase])),route:p}),f.pathnameBase!=="/"&&(o=Vt([o,f.pathnameBase]))}return a}function Fi(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=oh(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],a=o.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((u,{paramName:h,isOptional:f},p)=>{if(h==="*"){let v=l[p]||"";a=o.slice(0,o.length-v.length).replace(/(.)\/+$/,"$1")}const j=l[p];return f&&!j?u[h]=void 0:u[h]=(j||"").replace(/%2F/g,"/"),u},{}),pathname:o,pathnameBase:a,pattern:e}}function oh(e,t=!1,n=!0){zt(e==="*"||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,l,c)=>(r.push({paramName:l,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function ah(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return zt(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function Zt(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function lh(e,t="/"){let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?jr(e):e;return{pathname:n?n.startsWith("/")?n:ch(n,t):t,search:fh(r),hash:mh(i)}}function ch(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Po(e,t,n,r){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function uh(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function _l(e){let t=uh(e);return t.map((n,r)=>r===t.length-1?n.pathname:n.pathnameBase)}function Rl(e,t,n,r=!1){let i;typeof e=="string"?i=jr(e):(i={...e},ke(!i.pathname||!i.pathname.includes("?"),Po("?","pathname","search",i)),ke(!i.pathname||!i.pathname.includes("#"),Po("#","pathname","hash",i)),ke(!i.search||!i.search.includes("#"),Po("#","search","hash",i)));let o=e===""||i.pathname==="",a=o?"/":i.pathname,l;if(a==null)l=n;else{let f=t.length-1;if(!r&&a.startsWith("..")){let p=a.split("/");for(;p[0]==="..";)p.shift(),f-=1;i.pathname=p.join("/")}l=f>=0?t[f]:"/"}let c=lh(i,l),u=a&&a!=="/"&&a.endsWith("/"),h=(o||a===".")&&n.endsWith("/");return!c.pathname.endsWith("/")&&(u||h)&&(c.pathname+="/"),c}var Vt=e=>e.join("/").replace(/\/\/+/g,"/"),dh=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),fh=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,mh=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function ph(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}var Of=["POST","PUT","PATCH","DELETE"];new Set(Of);var hh=["GET",...Of];new Set(hh);var kr=d.createContext(null);kr.displayName="DataRouter";var Zi=d.createContext(null);Zi.displayName="DataRouterState";d.createContext(!1);var $f=d.createContext({isTransitioning:!1});$f.displayName="ViewTransition";var xh=d.createContext(new Map);xh.displayName="Fetchers";var gh=d.createContext(null);gh.displayName="Await";var Lt=d.createContext(null);Lt.displayName="Navigation";var js=d.createContext(null);js.displayName="Location";var kt=d.createContext({outlet:null,matches:[],isDataRoute:!1});kt.displayName="Route";var Pl=d.createContext(null);Pl.displayName="RouteError";function vh(e,{relative:t}={}){ke(Nr(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:r}=d.useContext(Lt),{hash:i,pathname:o,search:a}=ks(e,{relative:t}),l=o;return n!=="/"&&(l=o==="/"?n:Vt([n,o])),r.createHref({pathname:l,search:a,hash:i})}function Nr(){return d.useContext(js)!=null}function Mt(){return ke(Nr(),"useLocation() may be used only in the context of a <Router> component."),d.useContext(js).location}var Bf="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Uf(e){d.useContext(Lt).static||d.useLayoutEffect(e)}function Ze(){let{isDataRoute:e}=d.useContext(kt);return e?Mh():yh()}function yh(){ke(Nr(),"useNavigate() may be used only in the context of a <Router> component.");let e=d.useContext(kr),{basename:t,navigator:n}=d.useContext(Lt),{matches:r}=d.useContext(kt),{pathname:i}=Mt(),o=JSON.stringify(_l(r)),a=d.useRef(!1);return Uf(()=>{a.current=!0}),d.useCallback((c,u={})=>{if(zt(a.current,Bf),!a.current)return;if(typeof c=="number"){n.go(c);return}let h=Rl(c,JSON.parse(o),i,u.relative==="path");e==null&&t!=="/"&&(h.pathname=h.pathname==="/"?t:Vt([t,h.pathname])),(u.replace?n.replace:n.push)(h,u.state,u)},[t,n,o,i,e])}var bh=d.createContext(null);function wh(e){let t=d.useContext(kt).outlet;return t&&d.createElement(bh.Provider,{value:e},t)}function jh(){let{matches:e}=d.useContext(kt),t=e[e.length-1];return t?t.params:{}}function ks(e,{relative:t}={}){let{matches:n}=d.useContext(kt),{pathname:r}=Mt(),i=JSON.stringify(_l(n));return d.useMemo(()=>Rl(e,JSON.parse(i),r,t==="path"),[e,i,r,t])}function kh(e,t){return Wf(e,t)}function Wf(e,t,n,r){var g;ke(Nr(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:i}=d.useContext(Lt),{matches:o}=d.useContext(kt),a=o[o.length-1],l=a?a.params:{},c=a?a.pathname:"/",u=a?a.pathnameBase:"/",h=a&&a.route;{let m=h&&h.path||"";Qf(c,!h||m.endsWith("*")||m.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${c}" (under <Route path="${m}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${m}"> to <Route path="${m==="/"?"*":`${m}/*`}">.`)}let f=Mt(),p;if(t){let m=typeof t=="string"?jr(t):t;ke(u==="/"||((g=m.pathname)==null?void 0:g.startsWith(u)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${u}" but pathname "${m.pathname}" was given in the \`location\` prop.`),p=m}else p=f;let j=p.pathname||"/",v=j;if(u!=="/"){let m=u.replace(/^\//,"").split("/");v="/"+j.replace(/^\//,"").split("/").slice(m.length).join("/")}let k=If(e,{pathname:v});zt(h||k!=null,`No routes matched location "${p.pathname}${p.search}${p.hash}" `),zt(k==null||k[k.length-1].route.element!==void 0||k[k.length-1].route.Component!==void 0||k[k.length-1].route.lazy!==void 0,`Matched leaf route at location "${p.pathname}${p.search}${p.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let R=_h(k&&k.map(m=>Object.assign({},m,{params:Object.assign({},l,m.params),pathname:Vt([u,i.encodeLocation?i.encodeLocation(m.pathname).pathname:m.pathname]),pathnameBase:m.pathnameBase==="/"?u:Vt([u,i.encodeLocation?i.encodeLocation(m.pathnameBase).pathname:m.pathnameBase])})),o,n,r);return t&&R?d.createElement(js.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...p},navigationType:"POP"}},R):R}function Nh(){let e=Lh(),t=ph(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,r="rgba(200,200,200, 0.5)",i={padding:"0.5rem",backgroundColor:r},o={padding:"2px 4px",backgroundColor:r},a=null;return console.error("Error handled by React Router default ErrorBoundary:",e),a=d.createElement(d.Fragment,null,d.createElement("p",null,"💿 Hey developer 👋"),d.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",d.createElement("code",{style:o},"ErrorBoundary")," or"," ",d.createElement("code",{style:o},"errorElement")," prop on your route.")),d.createElement(d.Fragment,null,d.createElement("h2",null,"Unexpected Application Error!"),d.createElement("h3",{style:{fontStyle:"italic"}},t),n?d.createElement("pre",{style:i},n):null,a)}var Sh=d.createElement(Nh,null),Ch=class extends d.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return this.state.error!==void 0?d.createElement(kt.Provider,{value:this.props.routeContext},d.createElement(Pl.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function Eh({routeContext:e,match:t,children:n}){let r=d.useContext(kr);return r&&r.static&&r.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=t.route.id),d.createElement(kt.Provider,{value:e},n)}function _h(e,t=[],n=null,r=null){if(e==null){if(!n)return null;if(n.errors)e=n.matches;else if(t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let i=e,o=n==null?void 0:n.errors;if(o!=null){let c=i.findIndex(u=>u.route.id&&(o==null?void 0:o[u.route.id])!==void 0);ke(c>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(o).join(",")}`),i=i.slice(0,Math.min(i.length,c+1))}let a=!1,l=-1;if(n)for(let c=0;c<i.length;c++){let u=i[c];if((u.route.HydrateFallback||u.route.hydrateFallbackElement)&&(l=c),u.route.id){let{loaderData:h,errors:f}=n,p=u.route.loader&&!h.hasOwnProperty(u.route.id)&&(!f||f[u.route.id]===void 0);if(u.route.lazy||p){a=!0,l>=0?i=i.slice(0,l+1):i=[i[0]];break}}}return i.reduceRight((c,u,h)=>{let f,p=!1,j=null,v=null;n&&(f=o&&u.route.id?o[u.route.id]:void 0,j=u.route.errorElement||Sh,a&&(l<0&&h===0?(Qf("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),p=!0,v=null):l===h&&(p=!0,v=u.route.hydrateFallbackElement||null)));let k=t.concat(i.slice(0,h+1)),R=()=>{let g;return f?g=j:p?g=v:u.route.Component?g=d.createElement(u.route.Component,null):u.route.element?g=u.route.element:g=c,d.createElement(Eh,{match:u,routeContext:{outlet:c,matches:k,isDataRoute:n!=null},children:g})};return n&&(u.route.ErrorBoundary||u.route.errorElement||h===0)?d.createElement(Ch,{location:n.location,revalidation:n.revalidation,component:j,error:f,children:R(),routeContext:{outlet:null,matches:k,isDataRoute:!0}}):R()},null)}function Tl(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Rh(e){let t=d.useContext(kr);return ke(t,Tl(e)),t}function Ph(e){let t=d.useContext(Zi);return ke(t,Tl(e)),t}function Th(e){let t=d.useContext(kt);return ke(t,Tl(e)),t}function zl(e){let t=Th(e),n=t.matches[t.matches.length-1];return ke(n.route.id,`${e} can only be used on routes that contain a unique "id"`),n.route.id}function zh(){return zl("useRouteId")}function Lh(){var r;let e=d.useContext(Pl),t=Ph("useRouteError"),n=zl("useRouteError");return e!==void 0?e:(r=t.errors)==null?void 0:r[n]}function Mh(){let{router:e}=Rh("useNavigate"),t=zl("useNavigate"),n=d.useRef(!1);return Uf(()=>{n.current=!0}),d.useCallback(async(i,o={})=>{zt(n.current,Bf),n.current&&(typeof i=="number"?e.navigate(i):await e.navigate(i,{fromRouteId:t,...o}))},[e,t])}var tu={};function Qf(e,t,n){!t&&!tu[e]&&(tu[e]=!0,zt(!1,n))}d.memo(Fh);function Fh({routes:e,future:t,state:n}){return Wf(e,void 0,n,t)}function Ih({to:e,replace:t,state:n,relative:r}){ke(Nr(),"<Navigate> may be used only in the context of a <Router> component.");let{static:i}=d.useContext(Lt);zt(!i,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:o}=d.useContext(kt),{pathname:a}=Mt(),l=Ze(),c=Rl(e,_l(o),a,r==="path"),u=JSON.stringify(c);return d.useEffect(()=>{l(JSON.parse(u),{replace:t,state:n,relative:r})},[l,u,r,t,n]),null}function Dh(e){return wh(e.context)}function De(e){ke(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Ah({basename:e="/",children:t=null,location:n,navigationType:r="POP",navigator:i,static:o=!1}){ke(!Nr(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let a=e.replace(/^\/*/,"/"),l=d.useMemo(()=>({basename:a,navigator:i,static:o,future:{}}),[a,i,o]);typeof n=="string"&&(n=jr(n));let{pathname:c="/",search:u="",hash:h="",state:f=null,key:p="default"}=n,j=d.useMemo(()=>{let v=Zt(c,a);return v==null?null:{location:{pathname:v,search:u,hash:h,state:f,key:p},navigationType:r}},[a,c,u,h,f,p,r]);return zt(j!=null,`<Router basename="${a}"> is not able to match the URL "${c}${u}${h}" because it does not start with the basename, so the <Router> won't render anything.`),j==null?null:d.createElement(Lt.Provider,{value:l},d.createElement(js.Provider,{children:t,value:j}))}function Oh({children:e,location:t}){return kh(La(e),t)}function La(e,t=[]){let n=[];return d.Children.forEach(e,(r,i)=>{if(!d.isValidElement(r))return;let o=[...t,i];if(r.type===d.Fragment){n.push.apply(n,La(r.props.children,o));return}ke(r.type===De,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),ke(!r.props.index||!r.props.children,"An index route cannot have child routes.");let a={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(a.children=La(r.props.children,o)),n.push(a)}),n}var li="get",ci="application/x-www-form-urlencoded";function eo(e){return e!=null&&typeof e.tagName=="string"}function $h(e){return eo(e)&&e.tagName.toLowerCase()==="button"}function Bh(e){return eo(e)&&e.tagName.toLowerCase()==="form"}function Uh(e){return eo(e)&&e.tagName.toLowerCase()==="input"}function Wh(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Qh(e,t){return e.button===0&&(!t||t==="_self")&&!Wh(e)}var Ws=null;function qh(){if(Ws===null)try{new FormData(document.createElement("form"),0),Ws=!1}catch{Ws=!0}return Ws}var Hh=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function To(e){return e!=null&&!Hh.has(e)?(zt(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${ci}"`),null):e}function Yh(e,t){let n,r,i,o,a;if(Bh(e)){let l=e.getAttribute("action");r=l?Zt(l,t):null,n=e.getAttribute("method")||li,i=To(e.getAttribute("enctype"))||ci,o=new FormData(e)}else if($h(e)||Uh(e)&&(e.type==="submit"||e.type==="image")){let l=e.form;if(l==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let c=e.getAttribute("formaction")||l.getAttribute("action");if(r=c?Zt(c,t):null,n=e.getAttribute("formmethod")||l.getAttribute("method")||li,i=To(e.getAttribute("formenctype"))||To(l.getAttribute("enctype"))||ci,o=new FormData(l,e),!qh()){let{name:u,type:h,value:f}=e;if(h==="image"){let p=u?`${u}.`:"";o.append(`${p}x`,"0"),o.append(`${p}y`,"0")}else u&&o.append(u,f)}}else{if(eo(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=li,r=null,i=ci,a=e}return o&&i==="text/plain"&&(a=o,o=void 0),{action:r,method:n.toLowerCase(),encType:i,formData:o,body:a}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Ll(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Vh(e,t,n){let r=typeof e=="string"?new URL(e,typeof window>"u"?"server://singlefetch/":window.location.origin):e;return r.pathname==="/"?r.pathname=`_root.${n}`:t&&Zt(r.pathname,t)==="/"?r.pathname=`${t.replace(/\/$/,"")}/_root.${n}`:r.pathname=`${r.pathname.replace(/\/$/,"")}.${n}`,r}async function Gh(e,t){if(e.id in t)return t[e.id];try{let n=await Ff(()=>import(e.module),[]);return t[e.id]=n,n}catch(n){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Xh(e){return e!=null&&typeof e.page=="string"}function Kh(e){return e==null?!1:e.href==null?e.rel==="preload"&&typeof e.imageSrcSet=="string"&&typeof e.imageSizes=="string":typeof e.rel=="string"&&typeof e.href=="string"}async function Jh(e,t,n){let r=await Promise.all(e.map(async i=>{let o=t.routes[i.route.id];if(o){let a=await Gh(o,n);return a.links?a.links():[]}return[]}));return nx(r.flat(1).filter(Kh).filter(i=>i.rel==="stylesheet"||i.rel==="preload").map(i=>i.rel==="stylesheet"?{...i,rel:"prefetch",as:"style"}:{...i,rel:"prefetch"}))}function nu(e,t,n,r,i,o){let a=(c,u)=>n[u]?c.route.id!==n[u].route.id:!0,l=(c,u)=>{var h;return n[u].pathname!==c.pathname||((h=n[u].route.path)==null?void 0:h.endsWith("*"))&&n[u].params["*"]!==c.params["*"]};return o==="assets"?t.filter((c,u)=>a(c,u)||l(c,u)):o==="data"?t.filter((c,u)=>{var f;let h=r.routes[c.route.id];if(!h||!h.hasLoader)return!1;if(a(c,u)||l(c,u))return!0;if(c.route.shouldRevalidate){let p=c.route.shouldRevalidate({currentUrl:new URL(i.pathname+i.search+i.hash,window.origin),currentParams:((f=n[0])==null?void 0:f.params)||{},nextUrl:new URL(e,window.origin),nextParams:c.params,defaultShouldRevalidate:!0});if(typeof p=="boolean")return p}return!0}):[]}function Zh(e,t,{includeHydrateFallback:n}={}){return ex(e.map(r=>{let i=t.routes[r.route.id];if(!i)return[];let o=[i.module];return i.clientActionModule&&(o=o.concat(i.clientActionModule)),i.clientLoaderModule&&(o=o.concat(i.clientLoaderModule)),n&&i.hydrateFallbackModule&&(o=o.concat(i.hydrateFallbackModule)),i.imports&&(o=o.concat(i.imports)),o}).flat(1))}function ex(e){return[...new Set(e)]}function tx(e){let t={},n=Object.keys(e).sort();for(let r of n)t[r]=e[r];return t}function nx(e,t){let n=new Set,r=new Set(t);return e.reduce((i,o)=>{if(t&&!Xh(o)&&o.as==="script"&&o.href&&r.has(o.href))return i;let l=JSON.stringify(tx(o));return n.has(l)||(n.add(l),i.push({key:l,link:o})),i},[])}function qf(){let e=d.useContext(kr);return Ll(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}function rx(){let e=d.useContext(Zi);return Ll(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}var Ml=d.createContext(void 0);Ml.displayName="FrameworkContext";function Hf(){let e=d.useContext(Ml);return Ll(e,"You must render this element inside a <HydratedRouter> element"),e}function sx(e,t){let n=d.useContext(Ml),[r,i]=d.useState(!1),[o,a]=d.useState(!1),{onFocus:l,onBlur:c,onMouseEnter:u,onMouseLeave:h,onTouchStart:f}=t,p=d.useRef(null);d.useEffect(()=>{if(e==="render"&&a(!0),e==="viewport"){let k=g=>{g.forEach(m=>{a(m.isIntersecting)})},R=new IntersectionObserver(k,{threshold:.5});return p.current&&R.observe(p.current),()=>{R.disconnect()}}},[e]),d.useEffect(()=>{if(r){let k=setTimeout(()=>{a(!0)},100);return()=>{clearTimeout(k)}}},[r]);let j=()=>{i(!0)},v=()=>{i(!1),a(!1)};return n?e!=="intent"?[o,p,{}]:[o,p,{onFocus:Fr(l,j),onBlur:Fr(c,v),onMouseEnter:Fr(u,j),onMouseLeave:Fr(h,v),onTouchStart:Fr(f,j)}]:[!1,p,{}]}function Fr(e,t){return n=>{e&&e(n),n.defaultPrevented||t(n)}}function ix({page:e,...t}){let{router:n}=qf(),r=d.useMemo(()=>If(n.routes,e,n.basename),[n.routes,e,n.basename]);return r?d.createElement(ax,{page:e,matches:r,...t}):null}function ox(e){let{manifest:t,routeModules:n}=Hf(),[r,i]=d.useState([]);return d.useEffect(()=>{let o=!1;return Jh(e,t,n).then(a=>{o||i(a)}),()=>{o=!0}},[e,t,n]),r}function ax({page:e,matches:t,...n}){let r=Mt(),{manifest:i,routeModules:o}=Hf(),{basename:a}=qf(),{loaderData:l,matches:c}=rx(),u=d.useMemo(()=>nu(e,t,c,i,r,"data"),[e,t,c,i,r]),h=d.useMemo(()=>nu(e,t,c,i,r,"assets"),[e,t,c,i,r]),f=d.useMemo(()=>{if(e===r.pathname+r.search+r.hash)return[];let v=new Set,k=!1;if(t.forEach(g=>{var y;let m=i.routes[g.route.id];!m||!m.hasLoader||(!u.some(S=>S.route.id===g.route.id)&&g.route.id in l&&((y=o[g.route.id])!=null&&y.shouldRevalidate)||m.hasClientLoader?k=!0:v.add(g.route.id))}),v.size===0)return[];let R=Vh(e,a,"data");return k&&v.size>0&&R.searchParams.set("_routes",t.filter(g=>v.has(g.route.id)).map(g=>g.route.id).join(",")),[R.pathname+R.search]},[a,l,r,i,u,t,e,o]),p=d.useMemo(()=>Zh(h,i),[h,i]),j=ox(h);return d.createElement(d.Fragment,null,f.map(v=>d.createElement("link",{key:v,rel:"prefetch",as:"fetch",href:v,...n})),p.map(v=>d.createElement("link",{key:v,rel:"modulepreload",href:v,...n})),j.map(({key:v,link:k})=>d.createElement("link",{key:v,...k})))}function lx(...e){return t=>{e.forEach(n=>{typeof n=="function"?n(t):n!=null&&(n.current=t)})}}var Yf=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Yf&&(window.__reactRouterVersion="7.7.1")}catch{}function cx({basename:e,children:t,window:n}){let r=d.useRef();r.current==null&&(r.current=q0({window:n,v5Compat:!0}));let i=r.current,[o,a]=d.useState({action:i.action,location:i.location}),l=d.useCallback(c=>{d.startTransition(()=>a(c))},[a]);return d.useLayoutEffect(()=>i.listen(l),[i,l]),d.createElement(Ah,{basename:e,children:t,location:o.location,navigationType:o.action,navigator:i})}var Vf=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Gf=d.forwardRef(function({onClick:t,discover:n="render",prefetch:r="none",relative:i,reloadDocument:o,replace:a,state:l,target:c,to:u,preventScrollReset:h,viewTransition:f,...p},j){let{basename:v}=d.useContext(Lt),k=typeof u=="string"&&Vf.test(u),R,g=!1;if(typeof u=="string"&&k&&(R=u,Yf))try{let b=new URL(window.location.href),w=u.startsWith("//")?new URL(b.protocol+u):new URL(u),C=Zt(w.pathname,v);w.origin===b.origin&&C!=null?u=C+w.search+w.hash:g=!0}catch{zt(!1,`<Link to="${u}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let m=vh(u,{relative:i}),[y,S,P]=sx(r,p),F=mx(u,{replace:a,state:l,target:c,preventScrollReset:h,relative:i,viewTransition:f});function N(b){t&&t(b),b.defaultPrevented||F(b)}let x=d.createElement("a",{...p,...P,href:R||m,onClick:g||o?t:N,ref:lx(j,S),target:c,"data-discover":!k&&n==="render"?"true":void 0});return y&&!k?d.createElement(d.Fragment,null,x,d.createElement(ix,{page:m})):x});Gf.displayName="Link";var ux=d.forwardRef(function({"aria-current":t="page",caseSensitive:n=!1,className:r="",end:i=!1,style:o,to:a,viewTransition:l,children:c,...u},h){let f=ks(a,{relative:u.relative}),p=Mt(),j=d.useContext(Zi),{navigator:v,basename:k}=d.useContext(Lt),R=j!=null&&vx(f)&&l===!0,g=v.encodeLocation?v.encodeLocation(f).pathname:f.pathname,m=p.pathname,y=j&&j.navigation&&j.navigation.location?j.navigation.location.pathname:null;n||(m=m.toLowerCase(),y=y?y.toLowerCase():null,g=g.toLowerCase()),y&&k&&(y=Zt(y,k)||y);const S=g!=="/"&&g.endsWith("/")?g.length-1:g.length;let P=m===g||!i&&m.startsWith(g)&&m.charAt(S)==="/",F=y!=null&&(y===g||!i&&y.startsWith(g)&&y.charAt(g.length)==="/"),N={isActive:P,isPending:F,isTransitioning:R},x=P?t:void 0,b;typeof r=="function"?b=r(N):b=[r,P?"active":null,F?"pending":null,R?"transitioning":null].filter(Boolean).join(" ");let w=typeof o=="function"?o(N):o;return d.createElement(Gf,{...u,"aria-current":x,className:b,ref:h,style:w,to:a,viewTransition:l},typeof c=="function"?c(N):c)});ux.displayName="NavLink";var dx=d.forwardRef(({discover:e="render",fetcherKey:t,navigate:n,reloadDocument:r,replace:i,state:o,method:a=li,action:l,onSubmit:c,relative:u,preventScrollReset:h,viewTransition:f,...p},j)=>{let v=xx(),k=gx(l,{relative:u}),R=a.toLowerCase()==="get"?"get":"post",g=typeof l=="string"&&Vf.test(l),m=y=>{if(c&&c(y),y.defaultPrevented)return;y.preventDefault();let S=y.nativeEvent.submitter,P=(S==null?void 0:S.getAttribute("formmethod"))||a;v(S||y.currentTarget,{fetcherKey:t,method:P,navigate:n,replace:i,state:o,relative:u,preventScrollReset:h,viewTransition:f})};return d.createElement("form",{ref:j,method:R,action:k,onSubmit:r?c:m,...p,"data-discover":!g&&e==="render"?"true":void 0})});dx.displayName="Form";function fx(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Xf(e){let t=d.useContext(kr);return ke(t,fx(e)),t}function mx(e,{target:t,replace:n,state:r,preventScrollReset:i,relative:o,viewTransition:a}={}){let l=Ze(),c=Mt(),u=ks(e,{relative:o});return d.useCallback(h=>{if(Qh(h,t)){h.preventDefault();let f=n!==void 0?n:xs(c)===xs(u);l(e,{replace:f,state:r,preventScrollReset:i,relative:o,viewTransition:a})}},[c,l,u,n,r,t,e,i,o,a])}var px=0,hx=()=>`__${String(++px)}__`;function xx(){let{router:e}=Xf("useSubmit"),{basename:t}=d.useContext(Lt),n=zh();return d.useCallback(async(r,i={})=>{let{action:o,method:a,encType:l,formData:c,body:u}=Yh(r,t);if(i.navigate===!1){let h=i.fetcherKey||hx();await e.fetch(h,n,i.action||o,{preventScrollReset:i.preventScrollReset,formData:c,body:u,formMethod:i.method||a,formEncType:i.encType||l,flushSync:i.flushSync})}else await e.navigate(i.action||o,{preventScrollReset:i.preventScrollReset,formData:c,body:u,formMethod:i.method||a,formEncType:i.encType||l,replace:i.replace,state:i.state,fromRouteId:n,flushSync:i.flushSync,viewTransition:i.viewTransition})},[e,t,n])}function gx(e,{relative:t}={}){let{basename:n}=d.useContext(Lt),r=d.useContext(kt);ke(r,"useFormAction must be used inside a RouteContext");let[i]=r.matches.slice(-1),o={...ks(e||".",{relative:t})},a=Mt();if(e==null){o.search=a.search;let l=new URLSearchParams(o.search),c=l.getAll("index");if(c.some(h=>h==="")){l.delete("index"),c.filter(f=>f).forEach(f=>l.append("index",f));let h=l.toString();o.search=h?`?${h}`:""}}return(!e||e===".")&&i.route.index&&(o.search=o.search?o.search.replace(/^\?/,"?index&"):"?index"),n!=="/"&&(o.pathname=o.pathname==="/"?n:Vt([n,o.pathname])),xs(o)}function vx(e,{relative:t}={}){let n=d.useContext($f);ke(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=Xf("useViewTransitionState"),i=ks(e,{relative:t});if(!n.isTransitioning)return!1;let o=Zt(n.currentLocation.pathname,r)||n.currentLocation.pathname,a=Zt(n.nextLocation.pathname,r)||n.nextLocation.pathname;return Fi(i.pathname,a)!=null||Fi(i.pathname,o)!=null}function yx({size:e=22,spinning:t=!1}){return s.jsx("div",{style:{width:e,height:e},className:"grid place-items-center",children:s.jsxs("svg",{viewBox:"0 0 100 100",className:`${t?"animate-[spin_0.8s_ease-out]":"motion-safe:animate-[spin_9s_linear_infinite]"} group-active:motion-safe:animate-[spin_1.2s_linear_infinite]`,style:{filter:"drop-shadow(0 2px 4px rgba(0,0,0,0.2))"},children:[s.jsx("path",{d:"M50,50 L50,5 A45,45 0 0,1 86.97,25.98 Z",fill:"#6366F1"}),s.jsx("path",{d:"M50,50 L86.97,25.98 A45,45 0 0,1 86.97,74.02 Z",fill:"#22C55E"}),s.jsx("path",{d:"M50,50 L86.97,74.02 A45,45 0 0,1 50,95 Z",fill:"#F59E0B"}),s.jsx("path",{d:"M50,50 L50,95 A45,45 0 0,1 13.03,74.02 Z",fill:"#EF4444"}),s.jsx("path",{d:"M50,50 L13.03,74.02 A45,45 0 0,1 13.03,25.98 Z",fill:"#3B82F6"}),s.jsx("path",{d:"M50,50 L13.03,25.98 A45,45 0 0,1 50,5 Z",fill:"#8B5CF6"}),s.jsx("circle",{cx:"50",cy:"50",r:"9",fill:"#111827",stroke:"white",strokeWidth:"2"})]})})}function bx(){const e=Ze(),{pathname:t}=Mt(),n=d.useRef({}),r=d.useRef(0),[i,o]=d.useState(!1),a=d.useRef({});d.useEffect(()=>{a.current={refresh:new Audio("/sounds/refresh.mp3"),tap:new Audio("/sounds/tap.mp3"),whoosh:new Audio("/sounds/whoosh.mp3")},Object.values(a.current).forEach(A=>{A.volume=.5})},[]);const l=A=>{const H=a.current[A];H&&(H.currentTime=0,H.play().catch(()=>{}))},c=A=>{if(navigator.vibrate)switch(A){case"light":navigator.vibrate(10);break;case"medium":navigator.vibrate(20);break;case"heavy":navigator.vibrate(40);break;case"double":navigator.vibrate([20,50,20]);break;case"success":navigator.vibrate([10,50,10,50,10]);break;default:navigator.vibrate(15)}};d.useEffect(()=>{const A=n.current[t];A!==void 0?window.scrollTo(0,A):window.scrollTo(0,0)},[t]);const u=()=>{n.current[t]=window.scrollY},h=["/","/play","/profile"].includes(t),[f,p]=d.useState(!1),[j,v]=d.useState({open:!1,go:null});d.useEffect(()=>{const A=new MutationObserver(()=>{p(document.body.classList.contains("modal-open"))});return A.observe(document.body,{attributes:!0,attributeFilter:["class"]}),()=>A.disconnect()},[]);const R=f||[/^\/quiz\//,/^\/practice\//,/^\/profile\//].some(A=>A.test(t)),g=A=>A==="/"?t==="/":t.startsWith(A),m=d.useRef(0),[y,S]=d.useState(!1),[P,F]=d.useState(0),[N,x]=d.useState(!1),[b,w]=d.useState(0),C=A=>{!h||N||window.scrollY===0&&(m.current=A.touches[0].clientY)},M=A=>{if(!(!h||N)&&window.scrollY===0){const H=A.touches[0].clientY-m.current;if(H>0){S(!0);const Q=Math.min(H,120);F(Q),w(Math.min(Q/60*100,100)),H>60&&H<65&&c("light")}}},W=()=>{y&&P>60&&(x(!0),l("refresh"),c("success"),window.scrollTo({top:0,behavior:"smooth"}),setTimeout(()=>{x(!1),w(0)},1500)),S(!1),F(0)},J=({path:A,icon:H,label:Q,emoji:L})=>{const T=g(A),[E,z]=d.useState(!1),O=()=>{u(),z(!0),setTimeout(()=>z(!1),600);const D=()=>{if(A==="/play"){o(!0),l("whoosh"),c("medium"),setTimeout(()=>{e(`/play?view=modes&reset=${Date.now()}`),o(!1)},200);return}if(T){const te=Date.now();te-r.current<500&&(window.scrollTo({top:0,behavior:"smooth"}),l("tap"),c("double")),r.current=te}else l("tap"),c("light"),e(A)};if(localStorage.getItem("qp_in_question")==="true"&&!T){v({open:!0,go:D});return}D()};return s.jsxs("button",{type:"button",onClick:O,className:`group relative flex h-14 w-20 flex-col items-center justify-center rounded-xl transition-all
          ${T?"scale-110":"scale-100 hover:scale-105"}
          ${E?"animate-bounce":""}`,"aria-current":T?"page":void 0,children:[T&&s.jsxs(s.Fragment,{children:[s.jsx("span",{className:"absolute -top-2 h-1.5 w-10 rounded-full bg-gradient-to-r from-transparent via-white to-transparent opacity-60"}),s.jsx("div",{className:"absolute inset-0 rounded-xl bg-white/10 blur-xl"})]}),s.jsx("div",{className:`leading-none text-2xl transition-transform ${T?"scale-125":""} ${A==="/play"&&i?"animate-spin":""}`,children:L||H}),s.jsx("span",{className:`mt-1 text-[10px] font-medium transition-all ${T?"text-white":"text-base-muted/80"}`,children:Q})]})};return s.jsxs("div",{className:"min-h-screen bg-base-bg text-base-text",onTouchStart:C,onTouchMove:M,onTouchEnd:W,children:[s.jsx("style",{jsx:!0,children:`
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
      `}),(y||N)&&s.jsxs("div",{className:"fixed left-1/2 z-50 flex flex-col items-center transition-all duration-300",style:{top:N?"60px":`${Math.max(20,Math.min(P-20,80))}px`,transform:"translateX(-50%) scale("+(N?1.1:1)+")"},children:[s.jsxs("div",{className:"relative mb-2",children:[s.jsxs("svg",{width:"48",height:"48",className:N?"animate-spin":"",children:[s.jsx("circle",{cx:"24",cy:"24",r:"20",fill:"none",stroke:"rgba(255,255,255,0.2)",strokeWidth:"4"}),s.jsx("circle",{cx:"24",cy:"24",r:"20",fill:"none",stroke:"url(#gradient)",strokeWidth:"4",strokeDasharray:`${b*1.26} 126`,strokeLinecap:"round",transform:"rotate(-90 24 24)"}),s.jsx("defs",{children:s.jsxs("linearGradient",{id:"gradient",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[s.jsx("stop",{offset:"0%",stopColor:"#6366F1"}),s.jsx("stop",{offset:"50%",stopColor:"#22C55E"}),s.jsx("stop",{offset:"100%",stopColor:"#F59E0B"})]})})]}),s.jsx("div",{className:"absolute inset-0 grid place-items-center",children:s.jsx("span",{className:"text-2xl",children:N?"🎉":"⬇"})})]}),s.jsx("span",{className:`text-sm font-medium text-white px-3 py-1 rounded-full bg-white/20 backdrop-blur
            ${N?"rainbow-text":""}`,children:N?"Refreshed! 🌟":P>60?"Release! 🚀":"Pull down..."}),N&&s.jsx("div",{className:"absolute inset-0 pointer-events-none",children:[...Array(6)].map((A,H)=>s.jsx("span",{className:"absolute text-2xl",style:{left:`${-30+H*15}px`,animation:"confetti 1s ease-out forwards",animationDelay:`${H*.1}s`},children:["🎊","✨","⭐","🎈","🎉","💫"][H]},H))})]}),s.jsx("main",{className:"mx-auto w-full max-w-none px-1 sm:px-3 md:px-4 overscroll-y-contain",style:{height:R?"100dvh":"calc(100dvh - (5.5rem + env(safe-area-inset-bottom)))",paddingTop:"calc(env(safe-area-inset-top) + 12px)",overflowY:"auto",transform:y&&!N?`translateY(${P*.5}px)`:void 0,transition:y||N?"transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)":void 0},children:s.jsx(Dh,{})}),j.open&&s.jsxs("div",{className:"fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center px-6",style:{animation:"fadeIn 0.2s ease-out"},children:[s.jsxs("div",{className:"w-full max-w-sm rounded-3xl bg-gradient-to-b from-base-card to-base-card/90 border border-base-border p-6 text-center shadow-2xl",style:{animation:"slideUp 0.3s ease-out"},children:[s.jsx("div",{className:"text-5xl mb-4",style:{animation:"bounce 0.6s ease-out"},children:"😟"}),s.jsx("div",{className:"text-xl font-bold mb-2 bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent",children:"Leave the game?"}),s.jsx("p",{className:"text-base-muted mb-6 text-sm",children:"You'll lose your current progress!"}),s.jsxs("div",{className:"flex gap-3",children:[s.jsx("button",{onClick:()=>{c("light"),v({open:!1,go:null})},className:"flex-1 py-3 rounded-2xl border-2 border-green-500/30 bg-green-500/10 hover:bg-green-500/20 transition-all font-semibold text-green-400",children:"Keep Playing! 🎮"}),s.jsx("button",{onClick:()=>{c("medium");const A=j.go;v({open:!1,go:null}),A==null||A()},className:"flex-1 py-3 rounded-2xl bg-gradient-to-r from-red-500/80 to-orange-500/80 text-white font-semibold hover:from-red-500 hover:to-orange-500 transition-all",children:"Leave 👋"})]})]}),s.jsx("style",{jsx:!0,children:`
            @keyframes fadeIn {
              from { opacity: 0; }
              to { opacity: 1; }
            }
            @keyframes slideUp {
              from { transform: translateY(20px); opacity: 0; }
              to { transform: translateY(0); opacity: 1; }
            }
          `})]}),!R&&s.jsxs("nav",{role:"navigation","aria-label":"Bottom navigation",className:"fixed inset-x-0 bottom-0 z-50",children:[s.jsx("div",{className:"absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0B0F1A] to-[#0B0F1A]/95 backdrop-blur-lg",style:{height:"calc(5.5rem + env(safe-area-inset-bottom))"},"aria-hidden":!0}),s.jsx("div",{className:"relative mx-auto max-w-md px-4 pb-[calc(env(safe-area-inset-bottom)+0.5rem)] pt-2",children:s.jsxs("div",{className:"relative",children:[s.jsx("div",{className:"absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-green-500/20 blur-2xl"}),s.jsxs("div",{className:"relative flex h-[72px] items-center justify-around rounded-3xl border border-white/10 bg-gradient-to-b from-base-card/95 to-base-card/80 shadow-2xl backdrop-blur-xl",children:[s.jsx(J,{path:"/",emoji:"🏠",label:"Home"}),s.jsx(J,{path:"/play",icon:s.jsx(yx,{size:26,spinning:i}),label:"Play"}),s.jsx(J,{path:"/profile",emoji:"👤",label:"Profile"})]})]})})]})]})}function Ii(){return Ii=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ii.apply(null,arguments)}function wx(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function jx(e){d.useEffect(e,[])}var kx=["id","volume","playbackRate","soundEnabled","interrupt","onload"];function sr(e,t){var n=t===void 0?{}:t,r=n.volume,i=r===void 0?1:r,o=n.playbackRate,a=o===void 0?1:o,l=n.soundEnabled,c=l===void 0?!0:l,u=n.interrupt,h=u===void 0?!1:u,f=n.onload,p=wx(n,kx),j=tt.useRef(null),v=tt.useRef(!1),k=tt.useState(null),R=k[0],g=k[1],m=tt.useState(null),y=m[0],S=m[1],P=function(){typeof f=="function"&&f.call(this),v.current&&g(this.duration()*1e3),S(this)};jx(function(){return Ff(()=>import("./howler-a9d45417.js").then(w=>w.h),[]).then(function(w){if(!v.current){var C;j.current=(C=w.Howl)!==null&&C!==void 0?C:w.default.Howl,v.current=!0,new j.current(Ii({src:Array.isArray(e)?e:[e],volume:i,rate:a,onload:P},p))}}),function(){v.current=!1}}),tt.useEffect(function(){j.current&&y&&S(new j.current(Ii({src:Array.isArray(e)?e:[e],volume:i,onload:P},p)))},[JSON.stringify(e)]),tt.useEffect(function(){y&&(y.volume(i),p.sprite||y.rate(a))},[y,i,a]);var F=tt.useCallback(function(w){typeof w>"u"&&(w={}),!(!y||!c&&!w.forceSoundEnabled)&&(h&&y.stop(),w.playbackRate&&y.rate(w.playbackRate),y.play(w.id))},[y,c,h]),N=tt.useCallback(function(w){y&&y.stop(w)},[y]),x=tt.useCallback(function(w){y&&y.pause(w)},[y]),b=[F,{sound:y,stop:N,pause:x,duration:R}];return b}var Kf={exports:{}};/* @license
Papa Parse
v5.5.3
https://github.com/mholt/PapaParse
License: MIT
*/(function(e,t){((n,r)=>{e.exports=r()})(xm,function n(){var r=typeof self<"u"?self:typeof window<"u"?window:r!==void 0?r:{},i,o=!r.document&&!!r.postMessage,a=r.IS_PAPA_WORKER||!1,l={},c=0,u={};function h(x){this._handle=null,this._finished=!1,this._completed=!1,this._halted=!1,this._input=null,this._baseIndex=0,this._partialLine="",this._rowCount=0,this._start=0,this._nextChunk=null,this.isFirstChunk=!0,this._completeResults={data:[],errors:[],meta:{}},(function(b){var w=P(b);w.chunkSize=parseInt(w.chunkSize),b.step||b.chunk||(w.chunkSize=null),this._handle=new k(w),(this._handle.streamer=this)._config=w}).call(this,x),this.parseChunk=function(b,w){var C=parseInt(this._config.skipFirstNLines)||0;if(this.isFirstChunk&&0<C){let W=this._config.newline;W||(M=this._config.quoteChar||'"',W=this._handle.guessLineEndings(b,M)),b=[...b.split(W).slice(C)].join(W)}this.isFirstChunk&&N(this._config.beforeFirstChunk)&&(M=this._config.beforeFirstChunk(b))!==void 0&&(b=M),this.isFirstChunk=!1,this._halted=!1;var C=this._partialLine+b,M=(this._partialLine="",this._handle.parse(C,this._baseIndex,!this._finished));if(!this._handle.paused()&&!this._handle.aborted()){if(b=M.meta.cursor,C=(this._finished||(this._partialLine=C.substring(b-this._baseIndex),this._baseIndex=b),M&&M.data&&(this._rowCount+=M.data.length),this._finished||this._config.preview&&this._rowCount>=this._config.preview),a)r.postMessage({results:M,workerId:u.WORKER_ID,finished:C});else if(N(this._config.chunk)&&!w){if(this._config.chunk(M,this._handle),this._handle.paused()||this._handle.aborted())return void(this._halted=!0);this._completeResults=M=void 0}return this._config.step||this._config.chunk||(this._completeResults.data=this._completeResults.data.concat(M.data),this._completeResults.errors=this._completeResults.errors.concat(M.errors),this._completeResults.meta=M.meta),this._completed||!C||!N(this._config.complete)||M&&M.meta.aborted||(this._config.complete(this._completeResults,this._input),this._completed=!0),C||M&&M.meta.paused||this._nextChunk(),M}this._halted=!0},this._sendError=function(b){N(this._config.error)?this._config.error(b):a&&this._config.error&&r.postMessage({workerId:u.WORKER_ID,error:b,finished:!1})}}function f(x){var b;(x=x||{}).chunkSize||(x.chunkSize=u.RemoteChunkSize),h.call(this,x),this._nextChunk=o?function(){this._readChunk(),this._chunkLoaded()}:function(){this._readChunk()},this.stream=function(w){this._input=w,this._nextChunk()},this._readChunk=function(){if(this._finished)this._chunkLoaded();else{if(b=new XMLHttpRequest,this._config.withCredentials&&(b.withCredentials=this._config.withCredentials),o||(b.onload=F(this._chunkLoaded,this),b.onerror=F(this._chunkError,this)),b.open(this._config.downloadRequestBody?"POST":"GET",this._input,!o),this._config.downloadRequestHeaders){var w,C=this._config.downloadRequestHeaders;for(w in C)b.setRequestHeader(w,C[w])}var M;this._config.chunkSize&&(M=this._start+this._config.chunkSize-1,b.setRequestHeader("Range","bytes="+this._start+"-"+M));try{b.send(this._config.downloadRequestBody)}catch(W){this._chunkError(W.message)}o&&b.status===0&&this._chunkError()}},this._chunkLoaded=function(){b.readyState===4&&(b.status<200||400<=b.status?this._chunkError():(this._start+=this._config.chunkSize||b.responseText.length,this._finished=!this._config.chunkSize||this._start>=(w=>(w=w.getResponseHeader("Content-Range"))!==null?parseInt(w.substring(w.lastIndexOf("/")+1)):-1)(b),this.parseChunk(b.responseText)))},this._chunkError=function(w){w=b.statusText||w,this._sendError(new Error(w))}}function p(x){(x=x||{}).chunkSize||(x.chunkSize=u.LocalChunkSize),h.call(this,x);var b,w,C=typeof FileReader<"u";this.stream=function(M){this._input=M,w=M.slice||M.webkitSlice||M.mozSlice,C?((b=new FileReader).onload=F(this._chunkLoaded,this),b.onerror=F(this._chunkError,this)):b=new FileReaderSync,this._nextChunk()},this._nextChunk=function(){this._finished||this._config.preview&&!(this._rowCount<this._config.preview)||this._readChunk()},this._readChunk=function(){var M=this._input,W=(this._config.chunkSize&&(W=Math.min(this._start+this._config.chunkSize,this._input.size),M=w.call(M,this._start,W)),b.readAsText(M,this._config.encoding));C||this._chunkLoaded({target:{result:W}})},this._chunkLoaded=function(M){this._start+=this._config.chunkSize,this._finished=!this._config.chunkSize||this._start>=this._input.size,this.parseChunk(M.target.result)},this._chunkError=function(){this._sendError(b.error)}}function j(x){var b;h.call(this,x=x||{}),this.stream=function(w){return b=w,this._nextChunk()},this._nextChunk=function(){var w,C;if(!this._finished)return w=this._config.chunkSize,b=w?(C=b.substring(0,w),b.substring(w)):(C=b,""),this._finished=!b,this.parseChunk(C)}}function v(x){h.call(this,x=x||{});var b=[],w=!0,C=!1;this.pause=function(){h.prototype.pause.apply(this,arguments),this._input.pause()},this.resume=function(){h.prototype.resume.apply(this,arguments),this._input.resume()},this.stream=function(M){this._input=M,this._input.on("data",this._streamData),this._input.on("end",this._streamEnd),this._input.on("error",this._streamError)},this._checkIsFinished=function(){C&&b.length===1&&(this._finished=!0)},this._nextChunk=function(){this._checkIsFinished(),b.length?this.parseChunk(b.shift()):w=!0},this._streamData=F(function(M){try{b.push(typeof M=="string"?M:M.toString(this._config.encoding)),w&&(w=!1,this._checkIsFinished(),this.parseChunk(b.shift()))}catch(W){this._streamError(W)}},this),this._streamError=F(function(M){this._streamCleanUp(),this._sendError(M)},this),this._streamEnd=F(function(){this._streamCleanUp(),C=!0,this._streamData("")},this),this._streamCleanUp=F(function(){this._input.removeListener("data",this._streamData),this._input.removeListener("end",this._streamEnd),this._input.removeListener("error",this._streamError)},this)}function k(x){var b,w,C,M,W=Math.pow(2,53),J=-W,A=/^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/,H=/^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/,Q=this,L=0,T=0,E=!1,z=!1,O=[],D={data:[],errors:[],meta:{}};function Y(I){return x.skipEmptyLines==="greedy"?I.join("").trim()==="":I.length===1&&I[0].length===0}function te(){if(D&&C&&(ne("Delimiter","UndetectableDelimiter","Unable to auto-detect delimiting character; defaulted to '"+u.DefaultDelimiter+"'"),C=!1),x.skipEmptyLines&&(D.data=D.data.filter(function(V){return!Y(V)})),ae()){let V=function(G,oe){N(x.transformHeader)&&(G=x.transformHeader(G,oe)),O.push(G)};if(D)if(Array.isArray(D.data[0])){for(var I=0;ae()&&I<D.data.length;I++)D.data[I].forEach(V);D.data.splice(0,1)}else D.data.forEach(V)}function q(V,G){for(var oe=x.header?{}:[],$=0;$<V.length;$++){var B=$,X=V[$],X=((ue,ee)=>(se=>(x.dynamicTypingFunction&&x.dynamicTyping[se]===void 0&&(x.dynamicTyping[se]=x.dynamicTypingFunction(se)),(x.dynamicTyping[se]||x.dynamicTyping)===!0))(ue)?ee==="true"||ee==="TRUE"||ee!=="false"&&ee!=="FALSE"&&((se=>{if(A.test(se)&&(se=parseFloat(se),J<se&&se<W))return 1})(ee)?parseFloat(ee):H.test(ee)?new Date(ee):ee===""?null:ee):ee)(B=x.header?$>=O.length?"__parsed_extra":O[$]:B,X=x.transform?x.transform(X,B):X);B==="__parsed_extra"?(oe[B]=oe[B]||[],oe[B].push(X)):oe[B]=X}return x.header&&($>O.length?ne("FieldMismatch","TooManyFields","Too many fields: expected "+O.length+" fields but parsed "+$,T+G):$<O.length&&ne("FieldMismatch","TooFewFields","Too few fields: expected "+O.length+" fields but parsed "+$,T+G)),oe}var re;D&&(x.header||x.dynamicTyping||x.transform)&&(re=1,!D.data.length||Array.isArray(D.data[0])?(D.data=D.data.map(q),re=D.data.length):D.data=q(D.data,0),x.header&&D.meta&&(D.meta.fields=O),T+=re)}function ae(){return x.header&&O.length===0}function ne(I,q,re,V){I={type:I,code:q,message:re},V!==void 0&&(I.row=V),D.errors.push(I)}N(x.step)&&(M=x.step,x.step=function(I){D=I,ae()?te():(te(),D.data.length!==0&&(L+=I.data.length,x.preview&&L>x.preview?w.abort():(D.data=D.data[0],M(D,Q))))}),this.parse=function(I,q,re){var V=x.quoteChar||'"',V=(x.newline||(x.newline=this.guessLineEndings(I,V)),C=!1,x.delimiter?N(x.delimiter)&&(x.delimiter=x.delimiter(I),D.meta.delimiter=x.delimiter):((V=((G,oe,$,B,X)=>{var ue,ee,se,_;X=X||[",","	","|",";",u.RECORD_SEP,u.UNIT_SEP];for(var Z=0;Z<X.length;Z++){for(var ce,fe=X[Z],le=0,ve=0,ye=0,Te=(se=void 0,new g({comments:B,delimiter:fe,newline:oe,preview:10}).parse(G)),Ye=0;Ye<Te.data.length;Ye++)$&&Y(Te.data[Ye])?ye++:(ce=Te.data[Ye].length,ve+=ce,se===void 0?se=ce:0<ce&&(le+=Math.abs(ce-se),se=ce));0<Te.data.length&&(ve/=Te.data.length-ye),(ee===void 0||le<=ee)&&(_===void 0||_<ve)&&1.99<ve&&(ee=le,ue=fe,_=ve)}return{successful:!!(x.delimiter=ue),bestDelimiter:ue}})(I,x.newline,x.skipEmptyLines,x.comments,x.delimitersToGuess)).successful?x.delimiter=V.bestDelimiter:(C=!0,x.delimiter=u.DefaultDelimiter),D.meta.delimiter=x.delimiter),P(x));return x.preview&&x.header&&V.preview++,b=I,w=new g(V),D=w.parse(b,q,re),te(),E?{meta:{paused:!0}}:D||{meta:{paused:!1}}},this.paused=function(){return E},this.pause=function(){E=!0,w.abort(),b=N(x.chunk)?"":b.substring(w.getCharIndex())},this.resume=function(){Q.streamer._halted?(E=!1,Q.streamer.parseChunk(b,!0)):setTimeout(Q.resume,3)},this.aborted=function(){return z},this.abort=function(){z=!0,w.abort(),D.meta.aborted=!0,N(x.complete)&&x.complete(D),b=""},this.guessLineEndings=function(G,V){G=G.substring(0,1048576);var V=new RegExp(R(V)+"([^]*?)"+R(V),"gm"),re=(G=G.replace(V,"")).split("\r"),V=G.split(`
`),G=1<V.length&&V[0].length<re[0].length;if(re.length===1||G)return`
`;for(var oe=0,$=0;$<re.length;$++)re[$][0]===`
`&&oe++;return oe>=re.length/2?`\r
`:"\r"}}function R(x){return x.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function g(x){var b=(x=x||{}).delimiter,w=x.newline,C=x.comments,M=x.step,W=x.preview,J=x.fastMode,A=null,H=!1,Q=x.quoteChar==null?'"':x.quoteChar,L=Q;if(x.escapeChar!==void 0&&(L=x.escapeChar),(typeof b!="string"||-1<u.BAD_DELIMITERS.indexOf(b))&&(b=","),C===b)throw new Error("Comment character same as delimiter");C===!0?C="#":(typeof C!="string"||-1<u.BAD_DELIMITERS.indexOf(C))&&(C=!1),w!==`
`&&w!=="\r"&&w!==`\r
`&&(w=`
`);var T=0,E=!1;this.parse=function(z,O,D){if(typeof z!="string")throw new Error("Input must be a string");var Y=z.length,te=b.length,ae=w.length,ne=C.length,I=N(M),q=[],re=[],V=[],G=T=0;if(!z)return le();if(J||J!==!1&&z.indexOf(Q)===-1){for(var oe=z.split(w),$=0;$<oe.length;$++){if(V=oe[$],T+=V.length,$!==oe.length-1)T+=w.length;else if(D)return le();if(!C||V.substring(0,ne)!==C){if(I){if(q=[],_(V.split(b)),ve(),E)return le()}else _(V.split(b));if(W&&W<=$)return q=q.slice(0,W),le(!0)}}return le()}for(var B=z.indexOf(b,T),X=z.indexOf(w,T),ue=new RegExp(R(L)+R(Q),"g"),ee=z.indexOf(Q,T);;)if(z[T]===Q)for(ee=T,T++;;){if((ee=z.indexOf(Q,ee+1))===-1)return D||re.push({type:"Quotes",code:"MissingQuotes",message:"Quoted field unterminated",row:q.length,index:T}),ce();if(ee===Y-1)return ce(z.substring(T,ee).replace(ue,Q));if(Q===L&&z[ee+1]===L)ee++;else if(Q===L||ee===0||z[ee-1]!==L){B!==-1&&B<ee+1&&(B=z.indexOf(b,ee+1));var se=Z((X=X!==-1&&X<ee+1?z.indexOf(w,ee+1):X)===-1?B:Math.min(B,X));if(z.substr(ee+1+se,te)===b){V.push(z.substring(T,ee).replace(ue,Q)),z[T=ee+1+se+te]!==Q&&(ee=z.indexOf(Q,T)),B=z.indexOf(b,T),X=z.indexOf(w,T);break}if(se=Z(X),z.substring(ee+1+se,ee+1+se+ae)===w){if(V.push(z.substring(T,ee).replace(ue,Q)),fe(ee+1+se+ae),B=z.indexOf(b,T),ee=z.indexOf(Q,T),I&&(ve(),E))return le();if(W&&q.length>=W)return le(!0);break}re.push({type:"Quotes",code:"InvalidQuotes",message:"Trailing quote on quoted field is malformed",row:q.length,index:T}),ee++}}else if(C&&V.length===0&&z.substring(T,T+ne)===C){if(X===-1)return le();T=X+ae,X=z.indexOf(w,T),B=z.indexOf(b,T)}else if(B!==-1&&(B<X||X===-1))V.push(z.substring(T,B)),T=B+te,B=z.indexOf(b,T);else{if(X===-1)break;if(V.push(z.substring(T,X)),fe(X+ae),I&&(ve(),E))return le();if(W&&q.length>=W)return le(!0)}return ce();function _(ye){q.push(ye),G=T}function Z(ye){var Te=0;return Te=ye!==-1&&(ye=z.substring(ee+1,ye))&&ye.trim()===""?ye.length:Te}function ce(ye){return D||(ye===void 0&&(ye=z.substring(T)),V.push(ye),T=Y,_(V),I&&ve()),le()}function fe(ye){T=ye,_(V),V=[],X=z.indexOf(w,T)}function le(ye){if(x.header&&!O&&q.length&&!H){var Te=q[0],Ye=Object.create(null),et=new Set(Te);let pt=!1;for(let ht=0;ht<Te.length;ht++){let xt=Te[ht];if(Ye[xt=N(x.transformHeader)?x.transformHeader(xt,ht):xt]){let Cn,Ns=Ye[xt];for(;Cn=xt+"_"+Ns,Ns++,et.has(Cn););et.add(Cn),Te[ht]=Cn,Ye[xt]++,pt=!0,(A=A===null?{}:A)[Cn]=xt}else Ye[xt]=1,Te[ht]=xt;et.add(xt)}pt&&console.warn("Duplicate headers found and renamed."),H=!0}return{data:q,errors:re,meta:{delimiter:b,linebreak:w,aborted:E,truncated:!!ye,cursor:G+(O||0),renamedHeaders:A}}}function ve(){M(le()),q=[],re=[]}},this.abort=function(){E=!0},this.getCharIndex=function(){return T}}function m(x){var b=x.data,w=l[b.workerId],C=!1;if(b.error)w.userError(b.error,b.file);else if(b.results&&b.results.data){var M={abort:function(){C=!0,y(b.workerId,{data:[],errors:[],meta:{aborted:!0}})},pause:S,resume:S};if(N(w.userStep)){for(var W=0;W<b.results.data.length&&(w.userStep({data:b.results.data[W],errors:b.results.errors,meta:b.results.meta},M),!C);W++);delete b.results}else N(w.userChunk)&&(w.userChunk(b.results,M,b.file),delete b.results)}b.finished&&!C&&y(b.workerId,b.results)}function y(x,b){var w=l[x];N(w.userComplete)&&w.userComplete(b),w.terminate(),delete l[x]}function S(){throw new Error("Not implemented.")}function P(x){if(typeof x!="object"||x===null)return x;var b,w=Array.isArray(x)?[]:{};for(b in x)w[b]=P(x[b]);return w}function F(x,b){return function(){x.apply(b,arguments)}}function N(x){return typeof x=="function"}return u.parse=function(x,b){var w=(b=b||{}).dynamicTyping||!1;if(N(w)&&(b.dynamicTypingFunction=w,w={}),b.dynamicTyping=w,b.transform=!!N(b.transform)&&b.transform,!b.worker||!u.WORKERS_SUPPORTED)return w=null,u.NODE_STREAM_INPUT,typeof x=="string"?(x=(C=>C.charCodeAt(0)!==65279?C:C.slice(1))(x),w=new(b.download?f:j)(b)):x.readable===!0&&N(x.read)&&N(x.on)?w=new v(b):(r.File&&x instanceof File||x instanceof Object)&&(w=new p(b)),w.stream(x);(w=(()=>{var C;return!!u.WORKERS_SUPPORTED&&(C=(()=>{var M=r.URL||r.webkitURL||null,W=n.toString();return u.BLOB_URL||(u.BLOB_URL=M.createObjectURL(new Blob(["var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; ","(",W,")();"],{type:"text/javascript"})))})(),(C=new r.Worker(C)).onmessage=m,C.id=c++,l[C.id]=C)})()).userStep=b.step,w.userChunk=b.chunk,w.userComplete=b.complete,w.userError=b.error,b.step=N(b.step),b.chunk=N(b.chunk),b.complete=N(b.complete),b.error=N(b.error),delete b.worker,w.postMessage({input:x,config:b,workerId:w.id})},u.unparse=function(x,b){var w=!1,C=!0,M=",",W=`\r
`,J='"',A=J+J,H=!1,Q=null,L=!1,T=((()=>{if(typeof b=="object"){if(typeof b.delimiter!="string"||u.BAD_DELIMITERS.filter(function(O){return b.delimiter.indexOf(O)!==-1}).length||(M=b.delimiter),typeof b.quotes!="boolean"&&typeof b.quotes!="function"&&!Array.isArray(b.quotes)||(w=b.quotes),typeof b.skipEmptyLines!="boolean"&&typeof b.skipEmptyLines!="string"||(H=b.skipEmptyLines),typeof b.newline=="string"&&(W=b.newline),typeof b.quoteChar=="string"&&(J=b.quoteChar),typeof b.header=="boolean"&&(C=b.header),Array.isArray(b.columns)){if(b.columns.length===0)throw new Error("Option columns is empty");Q=b.columns}b.escapeChar!==void 0&&(A=b.escapeChar+J),b.escapeFormulae instanceof RegExp?L=b.escapeFormulae:typeof b.escapeFormulae=="boolean"&&b.escapeFormulae&&(L=/^[=+\-@\t\r].*$/)}})(),new RegExp(R(J),"g"));if(typeof x=="string"&&(x=JSON.parse(x)),Array.isArray(x)){if(!x.length||Array.isArray(x[0]))return E(null,x,H);if(typeof x[0]=="object")return E(Q||Object.keys(x[0]),x,H)}else if(typeof x=="object")return typeof x.data=="string"&&(x.data=JSON.parse(x.data)),Array.isArray(x.data)&&(x.fields||(x.fields=x.meta&&x.meta.fields||Q),x.fields||(x.fields=Array.isArray(x.data[0])?x.fields:typeof x.data[0]=="object"?Object.keys(x.data[0]):[]),Array.isArray(x.data[0])||typeof x.data[0]=="object"||(x.data=[x.data])),E(x.fields||[],x.data||[],H);throw new Error("Unable to serialize unrecognized input");function E(O,D,Y){var te="",ae=(typeof O=="string"&&(O=JSON.parse(O)),typeof D=="string"&&(D=JSON.parse(D)),Array.isArray(O)&&0<O.length),ne=!Array.isArray(D[0]);if(ae&&C){for(var I=0;I<O.length;I++)0<I&&(te+=M),te+=z(O[I],I);0<D.length&&(te+=W)}for(var q=0;q<D.length;q++){var re=(ae?O:D[q]).length,V=!1,G=ae?Object.keys(D[q]).length===0:D[q].length===0;if(Y&&!ae&&(V=Y==="greedy"?D[q].join("").trim()==="":D[q].length===1&&D[q][0].length===0),Y==="greedy"&&ae){for(var oe=[],$=0;$<re;$++){var B=ne?O[$]:$;oe.push(D[q][B])}V=oe.join("").trim()===""}if(!V){for(var X=0;X<re;X++){0<X&&!G&&(te+=M);var ue=ae&&ne?O[X]:X;te+=z(D[q][ue],X)}q<D.length-1&&(!Y||0<re&&!G)&&(te+=W)}}return te}function z(O,D){var Y,te;return O==null?"":O.constructor===Date?JSON.stringify(O).slice(1,25):(te=!1,L&&typeof O=="string"&&L.test(O)&&(O="'"+O,te=!0),Y=O.toString().replace(T,A),(te=te||w===!0||typeof w=="function"&&w(O,D)||Array.isArray(w)&&w[D]||((ae,ne)=>{for(var I=0;I<ne.length;I++)if(-1<ae.indexOf(ne[I]))return!0;return!1})(Y,u.BAD_DELIMITERS)||-1<Y.indexOf(M)||Y.charAt(0)===" "||Y.charAt(Y.length-1)===" ")?J+Y+J:Y)}},u.RECORD_SEP=String.fromCharCode(30),u.UNIT_SEP=String.fromCharCode(31),u.BYTE_ORDER_MARK="\uFEFF",u.BAD_DELIMITERS=["\r",`
`,'"',u.BYTE_ORDER_MARK],u.WORKERS_SUPPORTED=!o&&!!r.Worker,u.NODE_STREAM_INPUT=1,u.LocalChunkSize=10485760,u.RemoteChunkSize=5242880,u.DefaultDelimiter=",",u.Parser=g,u.ParserHandle=k,u.NetworkStreamer=f,u.FileStreamer=p,u.StringStreamer=j,u.ReadableStreamStreamer=v,r.jQuery&&((i=r.jQuery).fn.parse=function(x){var b=x.config||{},w=[];return this.each(function(W){if(!(i(this).prop("tagName").toUpperCase()==="INPUT"&&i(this).attr("type").toLowerCase()==="file"&&r.FileReader)||!this.files||this.files.length===0)return!0;for(var J=0;J<this.files.length;J++)w.push({file:this.files[J],inputElem:this,instanceConfig:i.extend({},b)})}),C(),this;function C(){if(w.length===0)N(x.complete)&&x.complete();else{var W,J,A,H,Q=w[0];if(N(x.before)){var L=x.before(Q.file,Q.inputElem);if(typeof L=="object"){if(L.action==="abort")return W="AbortError",J=Q.file,A=Q.inputElem,H=L.reason,void(N(x.error)&&x.error({name:W},J,A,H));if(L.action==="skip")return void M();typeof L.config=="object"&&(Q.instanceConfig=i.extend(Q.instanceConfig,L.config))}else if(L==="skip")return void M()}var T=Q.instanceConfig.complete;Q.instanceConfig.complete=function(E){N(T)&&T(E,Q.file,Q.inputElem),M()},u.parse(Q.file,Q.instanceConfig)}}function M(){w.splice(0,1),C()}}),a&&(r.onmessage=function(x){x=x.data,u.WORKER_ID===void 0&&x&&(u.WORKER_ID=x.workerId),typeof x.input=="string"?r.postMessage({workerId:u.WORKER_ID,results:u.parse(x.input,x.config),finished:!0}):(r.File&&x.input instanceof File||x.input instanceof Object)&&(x=u.parse(x.input,x.config))&&r.postMessage({workerId:u.WORKER_ID,results:x,finished:!0})}),(f.prototype=Object.create(h.prototype)).constructor=f,(p.prototype=Object.create(h.prototype)).constructor=p,(j.prototype=Object.create(j.prototype)).constructor=j,(v.prototype=Object.create(h.prototype)).constructor=v,u})})(Kf);var Nx=Kf.exports;const to=wu(Nx);function Jf({startRect:e,targetRef:t,count:n=12,onDone:r}){return d.useEffect(()=>{const i=t==null?void 0:t.current;if(!e||!i){r==null||r();return}const o=i.getBoundingClientRect(),a=document.createElement("div");a.style.position="fixed",a.style.inset="0",a.style.pointerEvents="none",a.style.zIndex="9999",document.body.appendChild(a);const l=o.left+o.width/2,c=o.top+o.height/2,u=e.left+e.width/2,h=e.top+e.height/2,f=200;let p=0;function j(v){const k=document.createElement("div");k.textContent="🪙",Object.assign(k.style,{position:"fixed",left:"0px",top:"0px",zIndex:"10000",pointerEvents:"none",fontSize:"22px",opacity:"1",willChange:"transform, opacity",transform:"translate(0px, 0px)"});const R=u,g=h,m=l,y=c;k.style.transform=`translate(${R}px, ${g}px) scale(1)`,a.appendChild(k),k.getBoundingClientRect(),k.style.transition=`transform ${f}ms cubic-bezier(.2,.8,.2,1), opacity ${f}ms linear`,requestAnimationFrame(()=>{k.style.transform=`translate(${m}px, ${y}px) scale(.6)`,k.style.opacity="0.1"}),setTimeout(()=>{k.remove(),p+=1,p===n&&(a.remove(),r==null||r())},f+50)}for(let v=0;v<n;v++)setTimeout(()=>j(),v*60);return()=>{try{a.remove()}catch{}}},[e,t,n,r]),null}const Oe={XP_PER_CORRECT:10,XP_PER_LEVEL:100,MAX_LEVEL:100,COINS_PER_CORRECT:5,MAX_ENERGY:5,ENERGY_REGEN_TIME:36e5,ENERGY_COST:{quiz:1,practice:0,daily:0},COMBO_MULTIPLIERS:{2:{multiplier:1.2,text:"Nice!"},3:{multiplier:1.5,text:"Great!"},5:{multiplier:2,text:"On Fire!"},10:{multiplier:3,text:"Legendary!"}},AVATARS:[{id:"wizard",emoji:"🧙",name:"Knowledge Wizard",unlocked:!0,bgColor:"from-purple-500 to-indigo-500"},{id:"knight",emoji:"⚔️",name:"Quiz Knight",unlocked:!0,bgColor:"from-blue-500 to-cyan-500"},{id:"explorer",emoji:"🗺️",name:"Fact Explorer",unlockLevel:5,unlocked:!1,bgColor:"from-green-500 to-emerald-500"},{id:"scientist",emoji:"🔬",name:"Science Master",unlockLevel:10,unlocked:!1,bgColor:"from-orange-500 to-red-500"},{id:"artist",emoji:"🎨",name:"Creative Mind",unlockLevel:15,unlocked:!1,bgColor:"from-pink-500 to-rose-500"}],STORAGE_KEYS:{PLAYER:"qp_player",GAME_STATE:"qp_game_state",ENERGY:"qp_energy",CURRENT_COMBO:"qp_combo"}},ru=e=>Math.floor(e/Oe.XP_PER_LEVEL)+1,Sx=e=>{const t=e%Oe.XP_PER_LEVEL;return{current:t,required:Oe.XP_PER_LEVEL,percentage:t/Oe.XP_PER_LEVEL*100}};function Cx({player:e,size:t="normal",showLevel:n=!0,showName:r=!0}){const i=Oe.AVATARS.find(a=>a.id===e.avatar)||Oe.AVATARS[0],o={small:"w-10 h-10 text-xl",normal:"w-14 h-14 text-2xl",large:"w-20 h-20 text-4xl"};return s.jsxs("div",{className:"flex items-center gap-3",children:[s.jsxs("div",{className:"relative",children:[s.jsx("div",{className:`${o[t]} rounded-full bg-gradient-to-br ${i.bgColor} flex items-center justify-center shadow-lg`,children:s.jsx("span",{children:i.emoji})}),n&&s.jsx("div",{className:"absolute -bottom-1 -right-1 bg-yellow-500 text-black text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center border-2 border-base-bg",children:e.level})]}),r&&s.jsxs("div",{children:[s.jsx("div",{className:"font-bold text-sm",children:e.name}),s.jsx("div",{className:"text-xs text-base-muted",children:i.name})]})]})}function Ex({current:e,required:t,level:n,animate:r=!0}){const[i,o]=d.useState(0),a=e/t*100;return d.useEffect(()=>{if(r){const l=setTimeout(()=>{o(a)},100);return()=>clearTimeout(l)}else o(a)},[a,r]),s.jsxs("div",{className:"w-full",children:[s.jsxs("div",{className:"flex justify-between items-center mb-1",children:[s.jsxs("span",{className:"text-xs font-medium",children:["Level ",n]}),s.jsxs("span",{className:"text-xs text-base-muted",children:[e,"/",t," XP"]})]}),s.jsx("div",{className:"h-2 bg-black/20 rounded-full overflow-hidden",children:s.jsx("div",{className:"h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-700 ease-out relative",style:{width:`${i}%`},children:s.jsx("div",{className:"absolute inset-0 bg-white/20 animate-pulse"})})})]})}function _x({current:e,max:t=Oe.MAX_ENERGY,regenAt:n}){const[r,i]=d.useState("");d.useEffect(()=>{if(n&&e<t){const a=()=>{const c=Date.now(),u=Math.max(0,n-c),h=Math.floor(u/6e4),f=Math.floor(u%6e4/1e3);i(`${h}:${f.toString().padStart(2,"0")}`)};a();const l=setInterval(a,1e3);return()=>clearInterval(l)}},[n,e,t]);const o=Array.from({length:t},(a,l)=>l<e);return s.jsxs("div",{className:"flex items-center gap-1",children:[s.jsx("div",{className:"flex gap-0.5",children:o.map((a,l)=>s.jsx("span",{className:`text-lg transition-all duration-300 ${a?"text-red-500 scale-110":"text-gray-600 scale-90"}`,children:a?"❤️":"🖤"},l))}),e<t&&r&&s.jsxs("span",{className:"text-xs text-base-muted ml-2",children:["+1 in ",r]})]})}const Zf=[{name:"GK",slug:"general-knowledge",questions:50,icon:"🧠",color:"#FF6B6B",gradient:"from-red-500 to-pink-500"},{name:"Science",slug:"science",questions:45,icon:"🧪",color:"#4ECDC4",gradient:"from-cyan-500 to-teal-500"},{name:"Fun Facts",slug:"fun-facts",questions:30,icon:"🎉",color:"#FFD93D",gradient:"from-yellow-400 to-orange-500"},{name:"History",slug:"history",questions:42,icon:"🏺",color:"#A8E6CF",gradient:"from-green-400 to-emerald-500"},{name:"AI & Tech",slug:"artificial-intelligence",questions:28,icon:"🤖",color:"#C7B8FF",gradient:"from-purple-400 to-indigo-500"},{name:"More",slug:"more",questions:0,icon:"✨",color:"#FF8CC3",gradient:"from-pink-400 to-rose-500"}],em=[{name:"Geography",slug:"geography",questions:38,icon:"🗺️",color:"#FACC15",gradient:"from-yellow-400 to-amber-500"},{name:"Computer",slug:"computer",questions:34,icon:"💻",color:"#3B82F6",gradient:"from-blue-400 to-blue-600"},{name:"Aptitude",slug:"aptitude",questions:36,icon:"📐",color:"#EC4899",gradient:"from-pink-500 to-rose-500"},{name:"Iconic Figures",slug:"iconic-figures",questions:26,icon:"🌟",color:"#8B5CF6",gradient:"from-purple-500 to-violet-600"}],Rx=[...Zf.filter(e=>e.slug!=="more"),...em],su=(e=new Date)=>e.toLocaleDateString("en-CA"),iu=(e,t=null)=>{try{const n=localStorage.getItem(e);return n?JSON.parse(n):t}catch{return t}},Px=(e,t)=>localStorage.setItem(e,JSON.stringify(t));function ou(){const e=Ze(),{player:t,addXP:n,addCoins:r,levelProgress:i,useEnergy:o,changeAvatar:a}=Al(),[l]=sr("/sounds/correct.mp3",{volume:.6}),[c]=sr("/sounds/wrong.mp3",{volume:.6}),[u]=sr("/sounds/coin.mp3",{volume:.75}),[h]=sr("/sounds/levelup.mp3",{volume:.8}),f=d.useRef(t.level),p=d.useRef(null);d.useEffect(()=>{t.level>f.current&&(h==null||h(),f.current=t.level)},[t.level,h]);const[j,v]=d.useState(!1),[k,R]=d.useState(null),[g,m]=d.useState(!1),[y,S]=d.useState("medium"),[P,F]=d.useState(10),[N,x]=d.useState(45),[b,w]=d.useState(!1),[C,M]=d.useState(!1),[W,J]=d.useState(null),[A,H]=d.useState(null),[Q,L]=d.useState(!1),[T,E]=d.useState(!1),[z,O]=d.useState(null),D=10,Y=5,[te,ae]=d.useState(!1),[ne,I]=d.useState("general-knowledge"),[q,re]=d.useState("medium"),[V,G]=d.useState(10),[oe,$]=d.useState(()=>iu("dq_daily_log",{})[su()]===!0);d.useEffect(()=>{const _=sessionStorage.getItem("homeScrollPosition");_&&window.scrollTo(0,parseInt(_));const Z=()=>{sessionStorage.setItem("homeScrollPosition",window.scrollY.toString())};return window.addEventListener("scroll",Z),()=>window.removeEventListener("scroll",Z)},[]),d.useEffect(()=>{if(oe)return;(async()=>{var Z;try{const ce=await fetch("/data/quiz_questions_bank.csv").then(ye=>ye.text()),{data:fe}=to.parse(ce,{header:!0,skipEmptyLines:!0});if(!fe.length)throw new Error("empty");const le=fe[Math.floor(Math.random()*fe.length)],ve=[le.option1,le.option2,le.option3,le.option4].filter(Boolean);J({category:le.category||"General",prompt:le.question,options:ve,answerIndex:["A","B","C","D"].indexOf((Z=le.answer)==null?void 0:Z.toUpperCase())||0})}catch{J({category:"Science",prompt:"Which planet is known as the Red Planet?",options:["Earth","Mars","Jupiter","Venus"],answerIndex:1})}})()},[oe]);const B=(_,Z)=>{if(A!==null)return;H(_);const ce=_===W.answerIndex;if(ce){if(l(),Z!=null&&Z.currentTarget&&p.current){const fe=Z.currentTarget.getBoundingClientRect();u(),O({startRect:fe,count:10,amount:Y})}}else c();setTimeout(()=>{if(E(!0),L(!0),ce){const fe=su();Px("dq_daily_log",{...iu("dq_daily_log",{}),[fe]:!0}),$(!0);const le=Number(localStorage.getItem("dq_streak")||0);localStorage.setItem("dq_streak",String(le+1))}},600)},X=_=>{if(_.slug==="more"){v(!0);return}R(_),m(!0)},ue=()=>{console.log("Starting quiz with energy:",t.energy),console.log("Category:",k.slug),e(`/quiz/${k.slug}`,{state:{mode:"quiz",difficulty:y,count:P,timer:{type:"per_q",seconds:N},source:"adventure"}}),m(!1)},ee=()=>{console.log("Starting practice, category:",ne),e(`/quiz/${ne}`,{state:{mode:"practice",difficulty:q,count:V,timer:{type:"off",seconds:0}}}),ae(!1)},se=[{icon:"🎯",label:"Quests",color:"bg-gradient-to-br from-orange-500 to-pink-500",action:()=>e("/profile/quests")},{icon:"🔥",label:`${t.bestCombo} Best`,color:"bg-gradient-to-br from-red-500 to-orange-500",action:()=>e("/profile/streaks")},{icon:"🏆",label:"Achieve",color:"bg-gradient-to-br from-blue-500 to-purple-500",action:()=>e("/profile/achievements")},{icon:"🎁",label:"Rewards",color:"bg-gradient-to-br from-green-500 to-teal-500",action:()=>e("/profile/rewards")}];return s.jsxs("div",{className:"min-h-screen bg-base-bg text-base-text",children:[s.jsx("div",{className:"fixed inset-0 -z-10 pointer-events-none",style:{background:"linear-gradient(to bottom, #0B0F1A, #111827)"}}),s.jsxs("div",{className:"relative z-10 px-4 pt-10 pb-24",children:[s.jsx("style",{jsx:!0,children:`
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
        `}),z&&s.jsx(Jf,{startRect:z.startRect,targetRef:p,count:z.count,onDone:()=>{n(D),r(z.amount),O(null)}}),s.jsxs("div",{className:"mb-8",children:[s.jsxs("div",{className:"flex justify-between items-start mb-4",children:[s.jsx("div",{className:"cursor-pointer hover:scale-105 transition-transform",onClick:()=>M(!0),children:s.jsx(Cx,{player:t,size:"normal",showLevel:!0,showName:!0})}),s.jsxs("div",{className:"flex flex-col gap-2",children:[s.jsxs("div",{className:"flex gap-2",children:[s.jsxs("button",{ref:p,onClick:()=>w(!0),className:"px-3 py-1.5 rounded-xl bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/30 flex items-center gap-2 hover:from-yellow-500/20 hover:to-orange-500/20 transition",children:[s.jsx("span",{className:"text-lg",children:"🪙"}),s.jsx("span",{className:"font-bold",children:t.coins})]}),s.jsx("button",{onClick:()=>e("/profile"),className:"w-10 h-10 rounded-full bg-white/5 border border-base-border grid place-items-center hover:bg-white/10 transition",children:"⚙️"})]}),s.jsx(_x,{current:t.energy,regenAt:t.energyRegenAt})]})]}),s.jsx(Ex,{current:i.current,required:i.required,level:t.level,animate:!0})]}),s.jsxs("div",{className:"relative overflow-hidden rounded-3xl p-8 mb-6 cursor-pointer transform transition-all hover:scale-[1.02]",style:{background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",boxShadow:"0 10px 40px rgba(102, 126, 234, 0.3)",animation:"pulse 3s infinite"},onClick:()=>e("/play"),children:[s.jsx("div",{className:"absolute top-[-50px] right-[-50px] w-[200px] h-[200px] rounded-full bg-white/10",style:{animation:"float 4s ease-in-out infinite"}}),s.jsx("div",{className:"absolute bottom-[-30px] left-[-30px] w-[150px] h-[150px] rounded-full bg-white/10",style:{animation:"float 4s ease-in-out infinite reverse"}}),s.jsx("h2",{className:"text-3xl font-bold mb-2",children:"🎰 Spin & Win"}),s.jsx("p",{className:"text-base opacity-90 mb-4",children:"Test your luck, win amazing prizes!"}),s.jsx("div",{className:"inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium",style:{background:"linear-gradient(90deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0.3) 100%)",backgroundSize:"200% auto",animation:"shimmer 2s linear infinite"},children:"Play Now →"})]}),s.jsx("div",{className:"grid grid-cols-4 gap-3 mb-8",children:se.map((_,Z)=>s.jsxs("button",{onClick:_.action,className:`${_.color} aspect-square rounded-2xl flex flex-col items-center justify-center gap-1 transform transition-all hover:scale-105`,children:[s.jsx("div",{className:"text-2xl",children:_.icon}),s.jsx("div",{className:"text-[10px] font-medium text-white",children:_.label})]},Z))}),!oe&&W&&s.jsx("div",{className:"flip-card mb-6",children:s.jsxs("div",{className:`flip-card-inner ${T?"flipped":""}`,children:[s.jsx("div",{className:"flip-card-front",children:s.jsxs("div",{className:"rounded-3xl bg-white/5 border border-base-border p-6",children:[s.jsxs("div",{className:"flex justify-between items-center mb-4",children:[s.jsx("h3",{className:"text-lg font-bold",children:"🎯 Daily Challenge"}),s.jsxs("span",{className:"px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-xs font-medium",children:["+",Y," coins +",D," XP"]})]}),s.jsx("p",{className:"text-sm mb-4 text-base-muted",children:W.prompt}),s.jsx("div",{className:"grid grid-cols-2 gap-3",children:W.options.map((_,Z)=>{const ce=Z===W.answerIndex,fe=A===Z,le=A!==null;return s.jsx("button",{onClick:ve=>B(Z,ve),disabled:A!==null,className:`p-3 rounded-xl border-2 text-sm font-medium transition-all ${le?ce?"border-green-500 bg-green-500/20":fe?"border-red-500 bg-red-500/20":"border-base-border bg-white/5":"border-base-border bg-white/5 hover:bg-white/10"} ${A!==null?"cursor-not-allowed":"cursor-pointer"}`,children:_},Z)})})]})}),s.jsx("div",{className:"flip-card-back absolute inset-0",children:s.jsxs("div",{className:"rounded-3xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/30 p-6 h-full flex flex-col items-center justify-center",children:[s.jsx("div",{className:"text-6xl mb-4",style:{animation:"float 2s ease-in-out infinite"},children:"🎉"}),s.jsx("h3",{className:"text-2xl font-bold text-green-400 mb-2",children:"Awesome!"}),s.jsxs("p",{className:"text-sm text-base-muted text-center",children:["You've earned ",Y," coins & ",D," XP!"]}),s.jsx("p",{className:"text-xs text-base-muted/70 mt-2",children:"Come back tomorrow for more"})]})})]})}),oe&&s.jsx("div",{className:"rounded-3xl bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/30 p-6 mb-6",children:s.jsxs("div",{className:"flex items-center gap-3",children:[s.jsx("span",{className:"text-3xl",children:"✅"}),s.jsxs("div",{children:[s.jsx("h3",{className:"font-bold",children:"Daily Challenge Complete!"}),s.jsx("p",{className:"text-sm text-base-muted",children:"Come back tomorrow for a new challenge"})]})]})}),s.jsxs("div",{className:"mb-6",children:[s.jsx("h3",{className:"text-lg font-bold mb-4",children:"Choose Your Adventure"}),s.jsx("div",{className:"grid grid-cols-3 gap-3",children:Zf.map(_=>s.jsxs("button",{onClick:()=>X(_),className:`bg-gradient-to-br ${_.gradient} aspect-square rounded-2xl p-4 flex flex-col items-center justify-center gap-2 transform transition-all hover:scale-105 hover:shadow-lg relative`,children:[s.jsx("div",{className:"text-3xl",children:_.icon}),s.jsx("div",{className:"text-xs font-bold text-white text-center",children:_.name}),_.questions>0&&s.jsxs("div",{className:"text-[10px] bg-white/20 px-2 py-0.5 rounded-full",children:[_.questions," Qs"]})]},_.name))})]}),s.jsxs("button",{onClick:()=>ae(!0),className:`w-full rounded-2xl p-5 flex justify-between items-center transition-all ${t.energy<10?"bg-green-500/20 border-2 border-green-500 animate-pulse":"bg-white/5 border border-base-border hover:bg-white/10"}`,children:[s.jsxs("div",{className:"flex items-center gap-4",children:[s.jsx("div",{className:"w-12 h-12 bg-gradient-to-br from-green-400 to-teal-500 rounded-xl grid place-items-center text-2xl",children:"📚"}),s.jsxs("div",{className:"text-left",children:[s.jsx("div",{className:"font-medium",children:"Practice Mode"}),s.jsx("div",{className:"text-xs text-base-muted",children:"No timer • No energy cost • Learn at your pace"})]})]}),s.jsx("div",{className:"text-xl",children:"→"})]}),C&&s.jsx("div",{className:"fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4",onClick:_=>{_.target===_.currentTarget&&M(!1)},children:s.jsxs("div",{className:"bg-base-card rounded-3xl p-6 w-full max-w-md border border-base-border max-h-[80vh] overflow-y-auto",onClick:_=>_.stopPropagation(),children:[s.jsxs("div",{className:"flex justify-between items-center mb-4",children:[s.jsx("h3",{className:"text-xl font-bold",children:"Choose Your Avatar"}),s.jsx("button",{onClick:()=>M(!1),className:"w-8 h-8 rounded-lg bg-white/5 border border-base-border grid place-items-center hover:bg-white/10 transition",children:"✕"})]}),s.jsx("div",{className:"grid grid-cols-2 gap-4",children:Oe.AVATARS.map(_=>{const Z=!t.unlockedAvatars.includes(_.id),ce=t.avatar===_.id;return s.jsxs("button",{onClick:()=>{Z||(a(_.id),M(!1))},className:`p-4 rounded-2xl border-2 transition-all ${ce?"border-brand-blue bg-brand-blue/20":Z?"border-gray-600 bg-gray-800/50 opacity-50":"border-base-border bg-white/5 hover:bg-white/10"}`,disabled:Z,children:[s.jsx("div",{className:`text-4xl mb-2 ${Z?"grayscale":""}`,children:_.emoji}),s.jsx("div",{className:"text-sm font-medium",children:_.name}),Z&&s.jsxs("div",{className:"text-xs text-gray-400 mt-1",children:["Unlock at Level ",_.unlockLevel]}),ce&&s.jsx("div",{className:"text-xs text-brand-blue mt-1",children:"Current"})]},_.id)})})]})}),g&&k&&s.jsx("div",{className:"fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4",onClick:_=>{_.target===_.currentTarget&&m(!1)},children:s.jsxs("div",{className:"bg-base-card rounded-3xl p-6 w-full max-w-md border border-base-border",onClick:_=>_.stopPropagation(),children:[s.jsxs("div",{className:"flex justify-between items-center mb-4",children:[s.jsx("h3",{className:"text-xl font-bold",children:"Quiz Mode"}),s.jsx("button",{onClick:()=>m(!1),className:"w-8 h-8 rounded-lg bg-white/5 border border-base-border grid place-items-center hover:bg-white/10 transition",children:"✕"})]}),s.jsx("div",{className:"mb-4 p-3 rounded-xl bg-blue-500/10 border border-blue-500/30",children:s.jsxs("div",{className:"flex items-center gap-3",children:[s.jsx("div",{className:"text-2xl",children:k.icon}),s.jsxs("div",{children:[s.jsxs("div",{className:"font-medium",children:["Category: ",k.name]}),s.jsxs("div",{className:"text-xs text-base-muted",children:[k.questions," questions available"]})]})]})}),s.jsxs("div",{className:"mb-4",children:[s.jsx("label",{className:"text-sm text-base-muted mb-2 block",children:"Difficulty"}),s.jsx("div",{className:"grid grid-cols-3 gap-2",children:["easy","medium","hard"].map(_=>s.jsx("button",{onClick:()=>S(_),className:`py-2 rounded-xl border ${y===_?"bg-brand-blue/30 border-brand-blue":"bg-white/5 border-base-border"}`,children:_.charAt(0).toUpperCase()+_.slice(1)},_))})]}),s.jsxs("div",{className:"mb-4",children:[s.jsx("label",{className:"text-sm text-base-muted mb-2 block",children:"Questions"}),s.jsx("div",{className:"grid grid-cols-4 gap-2",children:[5,10,20,30].map(_=>s.jsx("button",{onClick:()=>F(_),className:`py-2 rounded-xl border ${P===_?"bg-brand-blue/30 border-brand-blue":"bg-white/5 border-base-border"}`,children:_},_))})]}),s.jsxs("div",{className:"mb-6",children:[s.jsx("label",{className:"text-sm text-base-muted mb-2 block",children:"Timer (seconds per question)"}),s.jsx("input",{type:"number",value:N,onChange:_=>x(Number(_.target.value)||45),min:10,max:120,className:"w-full px-4 py-2 rounded-xl bg-white/5 border border-base-border"})]}),s.jsxs("div",{className:"flex gap-3",children:[s.jsx("button",{onClick:()=>m(!1),className:"flex-1 py-3 rounded-xl border border-base-border bg-white/5",children:"Cancel"}),s.jsx("button",{onClick:ue,className:"flex-1 py-3 rounded-xl bg-gradient-to-r from-brand-blue to-brand-purple text-white font-medium",children:"Start Quiz"})]})]})}),te&&s.jsx("div",{className:"fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4",onClick:_=>{_.target===_.currentTarget&&ae(!1)},children:s.jsxs("div",{className:"bg-base-card rounded-3xl p-6 w-full max-w-md border border-base-border max-h-[90vh] overflow-y-auto",onClick:_=>_.stopPropagation(),children:[s.jsxs("div",{className:"flex justify-between items-center mb-4",children:[s.jsx("h3",{className:"text-xl font-bold",children:"Practice Mode"}),s.jsx("button",{onClick:()=>ae(!1),className:"w-8 h-8 rounded-lg bg-white/5 border border-base-border grid place-items-center hover:bg-white/10 transition",children:"✕"})]}),s.jsxs("div",{className:"mb-4",children:[s.jsx("label",{className:"text-sm text-base-muted mb-2 block",children:"Category"}),s.jsx("div",{className:"grid grid-cols-3 gap-2 max-h-[200px] overflow-y-auto",children:Rx.map(_=>s.jsxs("button",{onClick:()=>I(_.slug),className:`p-3 rounded-xl border flex flex-col items-center gap-1 ${ne===_.slug?"bg-brand-blue/30 border-brand-blue":"bg-white/5 border-base-border"}`,children:[s.jsx("div",{className:"text-xl",children:_.icon}),s.jsx("div",{className:"text-[10px] text-center",children:_.name})]},_.slug))})]}),s.jsxs("div",{className:"mb-4",children:[s.jsx("label",{className:"text-sm text-base-muted mb-2 block",children:"Difficulty"}),s.jsx("div",{className:"grid grid-cols-3 gap-2",children:["easy","medium","hard"].map(_=>s.jsx("button",{onClick:()=>re(_),className:`py-2 rounded-xl border ${q===_?"bg-brand-blue/30 border-brand-blue":"bg-white/5 border-base-border"}`,children:_.charAt(0).toUpperCase()+_.slice(1)},_))})]}),s.jsxs("div",{className:"mb-6",children:[s.jsx("label",{className:"text-sm text-base-muted mb-2 block",children:"Questions"}),s.jsx("div",{className:"grid grid-cols-4 gap-2",children:[5,10,20,30].map(_=>s.jsx("button",{onClick:()=>G(_),className:`py-2 rounded-xl border ${V===_?"bg-brand-blue/30 border-brand-blue":"bg-white/5 border-base-border"}`,children:_},_))})]}),s.jsxs("div",{className:"flex gap-3",children:[s.jsx("button",{onClick:()=>ae(!1),className:"flex-1 py-3 rounded-xl border border-base-border bg-white/5",children:"Cancel"}),s.jsx("button",{onClick:ee,className:"flex-1 py-3 rounded-xl bg-gradient-to-r from-brand-blue to-brand-purple text-white font-medium",children:"Start Practice"})]})]})}),j&&s.jsx("div",{className:"fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4",onClick:_=>{_.target===_.currentTarget&&v(!1)},children:s.jsxs("div",{className:"bg-base-card rounded-3xl p-6 w-full max-w-md border border-base-border",onClick:_=>_.stopPropagation(),children:[s.jsxs("div",{className:"flex justify-between items-center mb-4",children:[s.jsx("h3",{className:"text-xl font-bold",children:"More categories"}),s.jsx("button",{onClick:()=>v(!1),className:"w-8 h-8 rounded-lg bg-white/5 border border-base-border grid place-items-center hover:bg-white/10 transition",children:"✕"})]}),s.jsx("div",{className:"grid grid-cols-2 gap-3 mb-4",children:em.map(_=>s.jsxs("button",{onClick:()=>{v(!1),X(_)},className:`bg-gradient-to-br ${_.gradient} p-4 rounded-2xl flex flex-col items-center gap-2 hover:scale-105 transition-transform relative`,children:[s.jsx("div",{className:"text-3xl",children:_.icon}),s.jsx("div",{className:"text-sm font-bold text-white",children:_.name}),s.jsxs("div",{className:"text-xs text-white/80",children:[_.questions," questions"]})]},_.name))})]})}),b&&s.jsx("div",{className:"fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4",onClick:_=>{_.target===_.currentTarget&&w(!1)},children:s.jsxs("div",{className:"bg-base-card rounded-3xl p-6 w-full max-w-md border border-base-border relative overflow-hidden",onClick:_=>_.stopPropagation(),children:[s.jsx("div",{className:"absolute inset-0 opacity-10",children:s.jsx("div",{className:"magic-gradient h-full"})}),s.jsxs("div",{className:"relative",children:[s.jsxs("div",{className:"flex items-center justify-between mb-6",children:[s.jsxs("div",{className:"flex items-center gap-3",children:[s.jsx("div",{className:"coin-3d text-5xl",style:{animation:"coinRotate 2s linear infinite, glow 2s ease-in-out infinite"},children:"🪙"}),s.jsxs("div",{children:[s.jsx("h3",{className:"text-2xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent",children:"Your Treasure"}),s.jsxs("p",{className:"text-3xl font-bold text-white mt-1",children:[t.coins," Coins"]})]})]}),s.jsx("button",{onClick:()=>w(!1),className:"w-8 h-8 rounded-lg bg-white/5 border border-base-border grid place-items-center hover:bg-white/10 transition",children:"✕"})]}),s.jsxs("div",{className:"mb-6",children:[s.jsx("h4",{className:"text-sm font-medium text-base-muted mb-3",children:"Ways to Earn"}),s.jsxs("div",{className:"space-y-3",children:[s.jsx("div",{className:"p-4 rounded-xl bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 hover:scale-[1.02] transition-transform",children:s.jsxs("div",{className:"flex items-center justify-between",children:[s.jsxs("div",{children:[s.jsxs("div",{className:"font-medium flex items-center gap-2",children:[s.jsx("span",{className:"text-2xl",children:"✅"}),"Complete Quizzes"]}),s.jsx("div",{className:"text-xs text-base-muted mt-1",children:"+5 coins per correct answer"})]}),s.jsx("div",{className:"text-green-400 font-bold",children:"+5"})]})}),s.jsx("div",{className:"p-4 rounded-xl bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 hover:scale-[1.02] transition-transform",children:s.jsxs("div",{className:"flex items-center justify-between",children:[s.jsxs("div",{children:[s.jsxs("div",{className:"font-medium flex items-center gap-2",children:[s.jsx("span",{className:"text-2xl",children:"🎯"}),"Daily Challenge"]}),s.jsx("div",{className:"text-xs text-base-muted mt-1",children:"Complete daily for bonus"})]}),s.jsx("div",{className:"text-blue-400 font-bold",children:"+5"})]})}),s.jsx("div",{className:"p-4 rounded-xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 hover:scale-[1.02] transition-transform",children:s.jsxs("div",{className:"flex items-center justify-between",children:[s.jsxs("div",{children:[s.jsxs("div",{className:"font-medium flex items-center gap-2",children:[s.jsx("span",{className:"text-2xl",children:"🎰"}),"Spin & Play"]}),s.jsx("div",{className:"text-xs text-base-muted mt-1",children:"Test your luck!"})]}),s.jsx("div",{className:"text-purple-400 font-bold",children:"+50"})]})}),s.jsx("div",{className:"p-4 rounded-xl bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/20 hover:scale-[1.02] transition-transform",children:s.jsxs("div",{className:"flex items-center justify-between",children:[s.jsxs("div",{children:[s.jsxs("div",{className:"font-medium flex items-center gap-2",children:[s.jsx("span",{className:"text-2xl",children:"🏆"}),"Achievements"]}),s.jsx("div",{className:"text-xs text-base-muted mt-1",children:"Unlock special rewards"})]}),s.jsx("div",{className:"text-orange-400 font-bold",children:"+???"})]})})]})]}),s.jsxs("div",{className:"mb-6",children:[s.jsxs("div",{className:"flex justify-between text-xs text-base-muted mb-2",children:[s.jsx("span",{children:"Next reward"}),s.jsxs("span",{children:[100-t.coins%100," coins to go"]})]}),s.jsx("div",{className:"h-2 bg-white/10 rounded-full overflow-hidden",children:s.jsx("div",{className:"h-full bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full transition-all",style:{width:`${t.coins%100}%`}})})]}),s.jsx("button",{onClick:()=>{w(!1),e("/play")},className:"w-full py-3 rounded-xl bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-bold hover:scale-[1.02] transition-transform shadow-lg",style:{boxShadow:"0 10px 30px rgba(251, 191, 36, 0.3)"},children:"Start Earning Now! 🚀"})]})]})})]})]})}var ui={linear:function(e,t,n,r){var i=n-t;return i*e/r+t},easeInQuad:function(e,t,n,r){var i=n-t;return i*(e/=r)*e+t},easeOutQuad:function(e,t,n,r){var i=n-t;return-i*(e/=r)*(e-2)+t},easeInOutQuad:function(e,t,n,r){var i=n-t;return(e/=r/2)<1?i/2*e*e+t:-i/2*(--e*(e-2)-1)+t},easeInCubic:function(e,t,n,r){var i=n-t;return i*(e/=r)*e*e+t},easeOutCubic:function(e,t,n,r){var i=n-t;return i*((e=e/r-1)*e*e+1)+t},easeInOutCubic:function(e,t,n,r){var i=n-t;return(e/=r/2)<1?i/2*e*e*e+t:i/2*((e-=2)*e*e+2)+t},easeInQuart:function(e,t,n,r){var i=n-t;return i*(e/=r)*e*e*e+t},easeOutQuart:function(e,t,n,r){var i=n-t;return-i*((e=e/r-1)*e*e*e-1)+t},easeInOutQuart:function(e,t,n,r){var i=n-t;return(e/=r/2)<1?i/2*e*e*e*e+t:-i/2*((e-=2)*e*e*e-2)+t},easeInQuint:function(e,t,n,r){var i=n-t;return i*(e/=r)*e*e*e*e+t},easeOutQuint:function(e,t,n,r){var i=n-t;return i*((e=e/r-1)*e*e*e*e+1)+t},easeInOutQuint:function(e,t,n,r){var i=n-t;return(e/=r/2)<1?i/2*e*e*e*e*e+t:i/2*((e-=2)*e*e*e*e+2)+t},easeInSine:function(e,t,n,r){var i=n-t;return-i*Math.cos(e/r*(Math.PI/2))+i+t},easeOutSine:function(e,t,n,r){var i=n-t;return i*Math.sin(e/r*(Math.PI/2))+t},easeInOutSine:function(e,t,n,r){var i=n-t;return-i/2*(Math.cos(Math.PI*e/r)-1)+t},easeInExpo:function(e,t,n,r){var i=n-t;return e==0?t:i*Math.pow(2,10*(e/r-1))+t},easeOutExpo:function(e,t,n,r){var i=n-t;return e==r?t+i:i*(-Math.pow(2,-10*e/r)+1)+t},easeInOutExpo:function(e,t,n,r){var i=n-t;return e===0?t:e===r?t+i:(e/=r/2)<1?i/2*Math.pow(2,10*(e-1))+t:i/2*(-Math.pow(2,-10*--e)+2)+t},easeInCirc:function(e,t,n,r){var i=n-t;return-i*(Math.sqrt(1-(e/=r)*e)-1)+t},easeOutCirc:function(e,t,n,r){var i=n-t;return i*Math.sqrt(1-(e=e/r-1)*e)+t},easeInOutCirc:function(e,t,n,r){var i=n-t;return(e/=r/2)<1?-i/2*(Math.sqrt(1-e*e)-1)+t:i/2*(Math.sqrt(1-(e-=2)*e)+1)+t},easeInElastic:function(e,t,n,r){var i=n-t,o,a,l;return l=1.70158,a=0,o=i,e===0?t:(e/=r)===1?t+i:(a||(a=r*.3),o<Math.abs(i)?(o=i,l=a/4):l=a/(2*Math.PI)*Math.asin(i/o),-(o*Math.pow(2,10*(e-=1))*Math.sin((e*r-l)*(2*Math.PI)/a))+t)},easeOutElastic:function(e,t,n,r){var i=n-t,o,a,l;return l=1.70158,a=0,o=i,e===0?t:(e/=r)===1?t+i:(a||(a=r*.3),o<Math.abs(i)?(o=i,l=a/4):l=a/(2*Math.PI)*Math.asin(i/o),o*Math.pow(2,-10*e)*Math.sin((e*r-l)*(2*Math.PI)/a)+i+t)},easeInOutElastic:function(e,t,n,r){var i=n-t,o,a,l;return l=1.70158,a=0,o=i,e===0?t:(e/=r/2)===2?t+i:(a||(a=r*(.3*1.5)),o<Math.abs(i)?(o=i,l=a/4):l=a/(2*Math.PI)*Math.asin(i/o),e<1?-.5*(o*Math.pow(2,10*(e-=1))*Math.sin((e*r-l)*(2*Math.PI)/a))+t:o*Math.pow(2,-10*(e-=1))*Math.sin((e*r-l)*(2*Math.PI)/a)*.5+i+t)},easeInBack:function(e,t,n,r,i){var o=n-t;return i===void 0&&(i=1.70158),o*(e/=r)*e*((i+1)*e-i)+t},easeOutBack:function(e,t,n,r,i){var o=n-t;return i===void 0&&(i=1.70158),o*((e=e/r-1)*e*((i+1)*e+i)+1)+t},easeInOutBack:function(e,t,n,r,i){var o=n-t;return i===void 0&&(i=1.70158),(e/=r/2)<1?o/2*(e*e*(((i*=1.525)+1)*e-i))+t:o/2*((e-=2)*e*(((i*=1.525)+1)*e+i)+2)+t},easeInBounce:function(e,t,n,r){var i=n-t,o;return o=ui.easeOutBounce(r-e,0,i,r),i-o+t},easeOutBounce:function(e,t,n,r){var i=n-t;return(e/=r)<1/2.75?i*(7.5625*e*e)+t:e<2/2.75?i*(7.5625*(e-=1.5/2.75)*e+.75)+t:e<2.5/2.75?i*(7.5625*(e-=2.25/2.75)*e+.9375)+t:i*(7.5625*(e-=2.625/2.75)*e+.984375)+t},easeInOutBounce:function(e,t,n,r){var i=n-t,o;return e<r/2?(o=ui.easeInBounce(e*2,0,i,r),o*.5+t):(o=ui.easeOutBounce(e*2-r,0,i,r),o*.5+i*.5+t)}},Tx=ui;function zx(e){return e*Math.PI/180}function at(e,t){return e+Math.random()*(t-e)}function Lx(e,t){return Math.floor(e+Math.random()*(t-e+1))}var Jr;(function(e){e[e.Circle=0]="Circle",e[e.Square=1]="Square",e[e.Strip=2]="Strip"})(Jr||(Jr={}));var ln;(function(e){e[e.Positive=1]="Positive",e[e.Negative=-1]="Negative"})(ln||(ln={}));const Mx=1e3/60;class Fx{constructor(t,n,r,i){this.getOptions=n;const{colors:o,initialVelocityX:a,initialVelocityY:l}=this.getOptions();this.context=t,this.x=r,this.y=i,this.w=at(5,20),this.h=at(5,20),this.radius=at(5,10),this.vx=typeof a=="number"?at(-a,a):at(a.min,a.max),this.vy=typeof l=="number"?at(-l,0):at(l.min,l.max),this.shape=Lx(0,2),this.angle=zx(at(0,360)),this.angularSpin=at(-.2,.2),this.color=o[Math.floor(Math.random()*o.length)],this.rotateY=at(0,1),this.rotationDirection=at(0,1)?ln.Positive:ln.Negative}update(t){const{gravity:n,wind:r,friction:i,opacity:o,drawShape:a}=this.getOptions(),l=t/Mx;this.x+=this.vx*l,this.y+=this.vy*l,this.vy+=n*l,this.vx+=r*l,this.vx*=i**l,this.vy*=i**l,this.rotateY>=1&&this.rotationDirection===ln.Positive?this.rotationDirection=ln.Negative:this.rotateY<=-1&&this.rotationDirection===ln.Negative&&(this.rotationDirection=ln.Positive);const c=.1*this.rotationDirection*l;if(this.rotateY+=c,this.angle+=this.angularSpin,this.context.save(),this.context.translate(this.x,this.y),this.context.rotate(this.angle),this.context.scale(1,this.rotateY),this.context.rotate(this.angle),this.context.beginPath(),this.context.fillStyle=this.color,this.context.strokeStyle=this.color,this.context.globalAlpha=o,this.context.lineCap="round",this.context.lineWidth=2,a&&typeof a=="function")a.call(this,this.context);else switch(this.shape){case Jr.Circle:{this.context.beginPath(),this.context.arc(0,0,this.radius,0,2*Math.PI),this.context.fill();break}case Jr.Square:{this.context.fillRect(-this.w/2,-this.h/2,this.w,this.h);break}case Jr.Strip:{this.context.fillRect(-this.w/6,-this.h/2,this.w/3,this.h);break}}this.context.closePath(),this.context.restore()}}class Ix{constructor(t,n){this.x=0,this.y=0,this.w=0,this.h=0,this.lastNumberOfPieces=0,this.tweenProgress=0,this.tweenFrom=0,this.particles=[],this.particlesGenerated=0,this.removeParticleAt=i=>{this.particles.splice(i,1)},this.getParticle=()=>{const i=at(this.x,this.w+this.x),o=at(this.y,this.h+this.y);return new Fx(this.context,this.getOptions,i,o)},this.animate=i=>{const{canvas:o,context:a,particlesGenerated:l,lastNumberOfPieces:c}=this,{run:u,recycle:h,numberOfPieces:f,debug:p,tweenFunction:j,tweenDuration:v}=this.getOptions();if(!u)return!1;const k=this.particles.length,R=h?k:l;if(R<f){c!==f&&(this.tweenProgress=0,this.tweenFrom=R,this.lastNumberOfPieces=f),this.tweenProgress=Math.min(v,Math.max(0,this.tweenProgress+i));const g=j(this.tweenProgress,this.tweenFrom,f,v),m=Math.round(g-R);for(let y=0;y<m;y++)this.particles.push(this.getParticle());this.particlesGenerated+=m}p&&(a.font="12px sans-serif",a.fillStyle="#333",a.textAlign="right",a.fillText(`Particles: ${k}`,o.width-10,o.height-20));for(let g=this.particles.length-1;g>=0;g--){const m=this.particles[g];m.update(i),(m.y>o.height||m.y<-100||m.x>o.width+100||m.x<-100)&&(h&&R<=f?this.particles[g]=this.getParticle():this.removeParticleAt(g))}return k>0||R<f},this.canvas=t;const r=this.canvas.getContext("2d");if(!r)throw new Error("Could not get canvas context");this.context=r,this.getOptions=n}}const Fl={width:typeof window<"u"?window.innerWidth:300,height:typeof window<"u"?window.innerHeight:200,numberOfPieces:200,friction:.99,wind:0,gravity:.1,initialVelocityX:4,initialVelocityY:10,colors:["#f44336","#e91e63","#9c27b0","#673ab7","#3f51b5","#2196f3","#03a9f4","#00bcd4","#009688","#4CAF50","#8BC34A","#CDDC39","#FFEB3B","#FFC107","#FF9800","#FF5722","#795548"],opacity:1,debug:!1,tweenFunction:Tx.easeInOutQuad,tweenDuration:5e3,recycle:!0,run:!0};class Dx{constructor(t,n){this.lastFrameTime=0,this.setOptionsWithDefaults=i=>{const o={confettiSource:{x:0,y:0,w:this.canvas.width,h:0}};this._options={...o,...Fl,...i},Object.assign(this,i.confettiSource)},this.update=(i=0)=>{const{options:{run:o,onConfettiComplete:a,frameRate:l},canvas:c,context:u}=this,h=Math.min(i-this.lastFrameTime,50);if(l&&h<1e3/l){this.rafId=requestAnimationFrame(this.update);return}this.lastFrameTime=i-(l?h%l:0),o&&(u.fillStyle="white",u.clearRect(0,0,c.width,c.height)),this.generator.animate(h)?this.rafId=requestAnimationFrame(this.update):(a&&typeof a=="function"&&this.generator.particlesGenerated>0&&a.call(this,this),this._options.run=!1)},this.reset=()=>{this.generator&&this.generator.particlesGenerated>0&&(this.generator.particlesGenerated=0,this.generator.particles=[],this.generator.lastNumberOfPieces=0)},this.stop=()=>{this.options={run:!1},this.rafId&&(cancelAnimationFrame(this.rafId),this.rafId=void 0)},this.canvas=t;const r=this.canvas.getContext("2d");if(!r)throw new Error("Could not get canvas context");this.context=r,this.generator=new Ix(this.canvas,()=>this.options),this.options=n,this.update()}get options(){return this._options}set options(t){var i,o;const n=(i=this._options)==null?void 0:i.run,r=(o=this._options)==null?void 0:o.recycle;this.setOptionsWithDefaults(t),this.generator&&(Object.assign(this.generator,this.options.confettiSource),typeof t.recycle=="boolean"&&t.recycle&&r===!1&&(this.generator.lastNumberOfPieces=this.generator.particles.length)),typeof t.run=="boolean"&&t.run&&n===!1&&this.update()}}const Ax=tt.createRef();class Il extends tt.Component{constructor(t){super(t),this.canvas=tt.createRef(),this.canvas=t.canvasRef||Ax}componentDidMount(){if(this.canvas.current){const t=zo(this.props)[0];this.confetti=new Dx(this.canvas.current,t)}}componentDidUpdate(){const t=zo(this.props)[0];this.confetti&&(this.confetti.options=t)}componentWillUnmount(){this.confetti&&this.confetti.stop(),this.confetti=void 0}render(){const[t,n]=zo(this.props),r={zIndex:2,position:"absolute",pointerEvents:"none",top:0,left:0,bottom:0,right:0,...n.style};return s.jsx("canvas",{width:t.width,height:t.height,ref:this.canvas,...n,style:r})}}Il.defaultProps={...Fl};Il.displayName="ReactConfetti";function zo(e){const t={},n={},r={},i=[...Object.keys(Fl),"confettiSource","drawShape","onConfettiComplete","frameRate"],o=["canvasRef"];for(const a in e){const l=e[a];i.includes(a)?t[a]=l:o.includes(a)?o[a]=l:r[a]=l}return[t,r,n]}const tm=tt.forwardRef((e,t)=>s.jsx(Il,{canvasRef:t,...e})),Ox=[{name:"General Knowledge",questions:50,icon:"🧠",color:"#7C3AED"},{name:"Artificial Intelligence",questions:28,icon:"🤖",color:"#10B981"},{name:"Fun facts",questions:30,icon:"🎉",color:"#EF4444"},{name:"Science",questions:45,icon:"🧪",color:"#F59E0B"},{name:"History",questions:42,icon:"🏺",color:"#2563EB"},{name:"Geography",questions:38,icon:"🗺️",color:"#FACC15"}],_t=Ox.slice(0,6),$t=360/_t.length,nm={"general-knowledge":"TINA","artificial-intelligence":"ALBERT","fun-facts":"BONZO",science:"POP",history:"TITO",geography:"HECTOR"},It={COINS:"qp_coins",XP:"qp_xp",LEVEL:"qp_level",OWNED_CHARACTERS:"owned_characters",SOUND:"play_sound_on"},nn={FULL_TURNS:6,DURATION:2800,OVERSHOOT:12,SETTLE_DURATION:350},Dt={get:(e,t=null)=>{try{const n=localStorage.getItem(e);return n?JSON.parse(n):t}catch{return t}},set:(e,t)=>{try{localStorage.setItem(e,JSON.stringify(t))}catch{}}},In=e=>e.toLowerCase().replace(/[^\w\s-]/g,"").replace(/\s+/g,"-"),au=e=>(e%360+360)%360,Dl=e=>{try{navigator.vibrate&&navigator.vibrate(e)}catch{}},dr=(e,t=.7)=>{try{const n=new Audio(e);n.volume=t,n.play()}catch{}};function lu({onModeSelect:e,onNavigateHome:t}){return s.jsx("div",{className:"fixed inset-0 bg-base-bg text-base-text overflow-hidden",children:s.jsxs("div",{className:"h-full overflow-y-auto mx-auto max-w-md px-4 pt-[calc(env(safe-area-inset-top)+5rem)] pb-[calc(env(safe-area-inset-bottom)+5.25rem)]",children:[s.jsxs("header",{className:"flex items-center mb-8",children:[s.jsx("button",{onClick:t,className:"h-10 w-10 rounded-full border border-base-border grid place-items-center bg-white/5 hover:bg-white/10 transition",children:"←"}),s.jsx("h1",{className:"flex-1 text-center text-xl font-bold mb-12",children:"Choose a quiz mode"})]}),s.jsxs("div",{className:"space-y-8",children:[s.jsxs("button",{onClick:()=>e("classic"),className:"w-full relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-400 to-blue-500 p-8 text-left shadow-lg hover:shadow-xl transition-all active:scale-[0.98]",children:[s.jsx("div",{className:"absolute top-0 right-0 w-32 h-32 opacity-30",children:s.jsxs("svg",{viewBox:"0 0 100 100",className:"w-full h-full animate-spin",style:{animationDuration:"20s"},children:[_t.map((n,r)=>{const i=r*$t,o=i+$t,a=$t>180?1:0,l=Math.PI*i/180,c=Math.PI*o/180,u=50+40*Math.cos(l),h=50-40*Math.sin(l),f=50+40*Math.cos(c),p=50-40*Math.sin(c);return s.jsx("path",{d:`M50,50 L${u},${h} A40,40 0 ${a} 0 ${f},${p} Z`,fill:n.color,stroke:"white",strokeWidth:"0.5"},r)}),s.jsx("circle",{cx:"50",cy:"50",r:"8",fill:"white"})]})}),s.jsx("div",{className:"absolute top-4 left-8 text-3xl opacity-60",children:"🏆"}),s.jsx("div",{className:"absolute top-12 right-16 text-xl opacity-40",children:"⭐"}),s.jsx("div",{className:"absolute bottom-6 left-6 text-2xl opacity-50",children:"🎲"}),s.jsx("div",{className:"absolute bottom-4 right-12 text-3xl opacity-60",children:"🍪"}),s.jsx("div",{className:"absolute top-1/2 left-4 text-lg opacity-40",children:"🥨"}),s.jsx("h2",{className:"text-5xl font-black text-white mb-10 relative z-10 ",style:{transform:"translateX(-20px)"},children:"CLASSIC"})]}),s.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[s.jsxs("button",{disabled:!0,className:"aspect-square rounded-3xl bg-gradient-to-br from-yellow-400 to-orange-400 p-4 text-left opacity-60",children:[s.jsx("div",{className:"text-2xl mb-2",children:"💀"}),s.jsx("h4",{className:"text-lg font-black text-white",children:"SURVIVAL"})]}),s.jsxs("button",{disabled:!0,className:"aspect-square rounded-3xl bg-gradient-to-br from-red-400 to-pink-500 p-4 text-left opacity-60",children:[s.jsx("div",{className:"text-2xl mb-2",children:"💰"}),s.jsx("h4",{className:"text-lg font-black text-white",children:"TREASURE MINE"})]}),s.jsxs("button",{disabled:!0,className:"aspect-square rounded-3xl bg-gradient-to-br from-pink-500 to-purple-500 p-4 text-left opacity-60",children:[s.jsx("div",{className:"text-2xl mb-2",children:"⚔️"}),s.jsx("h4",{className:"text-lg font-black text-white",children:"SURVIVAL ARENA"})]}),s.jsxs("button",{disabled:!0,className:"aspect-square rounded-3xl bg-gradient-to-br from-blue-400 to-cyan-400 p-4 text-left opacity-60",children:[s.jsx("div",{className:"text-2xl mb-2",children:"📱"}),s.jsx("h4",{className:"text-lg font-black text-white",children:"TRIVIA VIDEO"})]})]})]})]})})}function $x({run:e,coins:t,xp:n,level:r,ownedCharacters:i,onSpin:o,onBack:a,spinning:l,angle:c,transition:u,result:h,showCallout:f,glowColor:p,soundOn:j,setSoundOn:v,showSparkle:k,pulseIdx:R,nextProgressIdx:g,pendingProgressIdx:m,coinBurstTick:y,lastAnswerWasCorrect:S}){const P=100*r*(r-1),[F,N]=d.useState(!1),x=d.useRef(0),b=d.useRef(null),w=d.useRef(null),[C,M]=d.useState({dx:110,dy:-260});d.useEffect(()=>{if(m==null)return;N(!1);const A=setTimeout(()=>N(!0),30);return()=>clearTimeout(A)},[m]);const[W,J]=d.useState(!1);return d.useEffect(()=>{var H,Q,L,T;if(!y||!S||y===x.current)return;x.current=y;try{const E=(Q=(H=w==null?void 0:w.current)==null?void 0:H.getBoundingClientRect)==null?void 0:Q.call(H),z=(T=(L=b==null?void 0:b.current)==null?void 0:L.getBoundingClientRect)==null?void 0:T.call(L);if(E&&z){const O=E.left+E.width/2,D=E.top+E.height/2,Y=z.left+z.width/2,te=z.top+z.height/2;M({dx:Y-O,dy:te-D})}}catch{}j&&dr("/sounds/coin.mp3",.7),J(!0);const A=setTimeout(()=>J(!1),700);return()=>clearTimeout(A)},[y,j]),s.jsx("div",{className:"fixed inset-0 bg-base-bg text-base-text overflow-hidden",children:s.jsxs("div",{className:"h-full overflow-y-auto mx-auto max-w-md px-5 pt-[calc(env(safe-area-inset-top)+3rem)] pb-[calc(env(safe-area-inset-bottom)+5.25rem)]",children:[s.jsxs("header",{className:"flex items-center justify-between mb-8",children:[s.jsx("button",{onClick:a,className:"h-10 w-10 rounded-full border border-base-border grid place-items-center bg-white/5 hover:bg-white/10 transition translate-y-[4px]",children:"←"}),s.jsxs("div",{className:"flex items-center gap-3",children:[s.jsxs("button",{className:"px-3 py-1 rounded-2xl bg-white/5 border border-base-border text-left translate-y-[4px]",children:[s.jsxs("div",{className:"text-[11px]",children:["Lvl ",r," • ",n,"/",P]}),s.jsx("div",{className:"mt-1 h-1 w-full bg-white/10 rounded",children:s.jsx("div",{className:"h-1 bg-brand-blue rounded",style:{width:`${Math.min(n/P,1)*100}%`}})})]}),s.jsxs("button",{ref:b,className:"px-3 py-1 rounded-2xl bg-white/5 border border-base-border translate-y-[4px]",children:["🪙 ",t]})]}),s.jsx("button",{onClick:()=>v(!j),className:"h-10 w-10 rounded-full border border-base-border grid place-items-center bg-white/5 hover:bg-white/10 transition translate-y-[4px]",children:s.jsx("span",{className:"text-lg",children:j?"🔊":"🔇"})})]}),i.length>0&&s.jsx("div",{className:"flex justify-center mb-6",children:s.jsx("div",{className:"flex gap-2 px-4 py-2 bg-white/10 rounded-2xl backdrop-blur border border-base-border",children:i.map(A=>{const H=_t.find(L=>In(L.name)===A),Q=nm[A];return s.jsxs("div",{className:"flex flex-col items-center",children:[s.jsx("div",{className:"w-8 h-8 rounded-full bg-white/20 flex items-center justify-center border border-white/30",children:s.jsx("span",{className:"text-sm",children:H==null?void 0:H.icon})}),s.jsx("span",{className:"text-[10px] text-base-muted mt-1",children:Q})]},A)})})}),s.jsx("div",{className:"flex justify-center mt-12 sm:mt-16 mb-6",children:s.jsxs("div",{className:"w-80 max-w-full",children:[s.jsx("style",{children:`
              @keyframes qp_sweep { from { transform: translateX(0); } to { transform: translateX(100%); } }
            `}),s.jsx("div",{className:"relative grid grid-cols-3 gap-1 h-3 rounded-full overflow-hidden bg-white/10 border border-white/15",children:[0,1,2].map(A=>{const H=["#FF9800","#FFC107","#cadd75ff"],Q=!!e.progress[A];return s.jsxs("div",{className:"relative h-full bg-white/10",children:[s.jsx("div",{className:"absolute inset-y-0 left-0 rounded-[6px]",style:{width:Q?A===m?F?"100%":"0%":g===A&&m==null?"0%":"100%":"0%",backgroundColor:H[A],transition:A===m?"width 1200ms ease-out":"none"}}),R===A&&s.jsx("span",{className:"absolute inset-y-0 left-0 w-full overflow-hidden pointer-events-none",children:s.jsx("span",{className:"absolute inset-y-0 left-0 w-1 rounded bg-white/80",style:{animation:"qp_sweep 1200ms ease-out forwards"}})}),k===A&&s.jsx("span",{className:"absolute right-[-2px] top-1/2 -translate-y-1/2 text-xs select-none",children:"✨"})]},A)})},e.qIndex)]})}),s.jsx("section",{className:"flex flex-col items-center mt-28 sm:mt-32 mb-10",children:s.jsxs("div",{ref:w,className:"relative w-96 h-96 rounded-full select-none",children:[p&&s.jsx("div",{className:"pointer-events-none absolute -inset-4 rounded-full",style:{boxShadow:`0 0 0 8px ${p}40, 0 0 40px 12px ${p}60`}}),s.jsx("div",{className:"absolute inset-0 rounded-full border-4 border-white/20 shadow-2xl overflow-hidden will-change-transform bg-base-card",style:{transform:`rotate(${c}deg)`,transition:u},children:s.jsxs("svg",{width:"100%",height:"100%",viewBox:"0 0 100 100",className:"block",children:[_t.map((A,H)=>{const Q=H*$t,L=Q+$t,T=$t>180?1:0,E=Math.PI*Q/180,z=Math.PI*L/180,O=50+45*Math.cos(E),D=50-45*Math.sin(E),Y=50+45*Math.cos(z),te=50-45*Math.sin(z),ae=Q+$t/2,ne=28,I=50+ne*Math.cos(ae*Math.PI/180),q=50-ne*Math.sin(ae*Math.PI/180);return s.jsxs("g",{children:[s.jsx("path",{d:`M50,50 L${O},${D} A45,45 0 ${T} 0 ${Y},${te} Z`,fill:A.color,stroke:"rgba(255,255,255,0.3)",strokeWidth:"0.5"}),s.jsx("text",{x:I,y:q,fill:"white",fontSize:"8",dominantBaseline:"middle",textAnchor:"middle",className:"font-bold",children:A.icon})]},H)}),s.jsx("circle",{cx:"50",cy:"50",r:"12",fill:"white",stroke:"#ddd",strokeWidth:"1"})]})}),s.jsx("button",{onClick:o,disabled:l,className:`absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                      w-24 h-24 rounded-full bg-white text-black font-black text-lg shadow-lg transition-all ${l?"opacity-60 cursor-not-allowed scale-95":"hover:scale-105 active:scale-95"}`,children:"SPIN"}),s.jsx("div",{className:"absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-2 z-20",children:s.jsx("div",{className:"w-6 h-8 bg-white rounded-lg shadow-md flex items-start justify-center pt-1",children:s.jsx("div",{className:"w-0 h-0 border-l-[6px] border-r-[6px] border-b-[8px] border-l-transparent border-r-transparent border-b-gray-600"})})}),f&&h&&s.jsx("div",{className:"absolute left-1/2 -translate-x-1/2 -top-16 z-30",children:s.jsxs("div",{className:"px-4 py-2 rounded-2xl bg-base-card border border-base-border shadow-lg font-semibold",children:[s.jsx("span",{className:"mr-2",children:h.cat.icon}),h.cat.name]})}),W&&s.jsxs(s.Fragment,{children:[s.jsx("style",{children:`
                    @keyframes coinFly {
                      0%   { transform: translate(-50%, -50%) scale(0.9); opacity: 1; }
                      100% { transform: translate(var(--coin-dx), var(--coin-dy)) scale(0.4); opacity: 0; }
                    }
                `}),[0,1,2].map(A=>s.jsx("div",{className:"pointer-events-none absolute z-30 top-1/2 left-1/2",style:{animation:`coinFly 600ms ease-out ${A*80}ms forwards`,"--coin-dx":`${C.dx}px`,"--coin-dy":`${C.dy}px`},children:s.jsx("div",{className:"w-6 h-6 rounded-full grid place-items-center bg-yellow-400 text-black font-bold",children:"🪙"})},A))]})]})}),s.jsx("div",{className:"text-center",children:s.jsx("button",{disabled:!0,className:"text-base-muted underline opacity-60 cursor-not-allowed text-sm",children:"Party Spin (pass & play)"})})]})})}function cu({category:e,onComplete:t,isBonus:n=!1,soundOn:r=!0}){return d.useEffect(()=>{r&&dr("/sounds/flush.mp3",.8);const i=setTimeout(t,1e3);return Dl([50]),()=>clearTimeout(i)},[t,r]),n?s.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-purple-500 to-blue-600 flex flex-col items-center justify-center text-white",children:[s.jsx("h2",{className:"text-5xl font-black mb-8",children:"Bonus Question"}),s.jsx("div",{className:"w-32 h-32 bg-white/20 rounded-full flex items-center justify-center animate-pulse",children:s.jsx("span",{className:"text-6xl",children:"⭐"})})]}):s.jsx("div",{className:"min-h-screen bg-base-bg text-white flex items-center justify-center",children:s.jsxs("div",{className:"relative w-96 h-96 rounded-full flex items-center justify-center",style:{backgroundColor:e.color},children:[s.jsxs("div",{className:"absolute inset-0 opacity-10 pointer-events-none",children:[s.jsx("div",{className:"absolute top-8 left-10 w-20 h-20 bg-white/20 rounded-full"}),s.jsx("div",{className:"absolute bottom-10 right-12 w-24 h-24 bg-white/20 rounded-full"})]}),s.jsxs("div",{className:"relative z-10 text-center",children:[s.jsx("div",{className:"text-4xl font-black mb-2",children:e.name}),s.jsx("div",{className:"w-20 h-20 bg-white/20 rounded-full grid place-items-center mx-auto",children:s.jsx("span",{className:"text-4xl",children:e.icon})})]})]})})}function Bx({onDone:e}){return d.useEffect(()=>{const t=setTimeout(e,1e3);return()=>clearTimeout(t)},[e]),s.jsx("div",{className:"min-h-screen flex items-center justify-center bg-green-600 text-white",children:s.jsx("h2",{className:"text-2xl font-black",children:"Whohoo!! 3 correct in a row 🎉"})})}function uu({question:e,category:t,onAnswer:n,run:r,timeLeft:i,usedLifelines:o,onUseLifeline:a,eliminatedOptions:l,audienceData:c,onBack:u,timeUp:h,onTimeUpBackToWheel:f,soundOn:p}){const[j,v]=d.useState(null),[k,R]=d.useState(!1),[g,m]=d.useState(!1),y=d.useRef(null),S=d.useRef(null),[P,F]=d.useState(null);d.useEffect(()=>{if(!k||!y.current)return;const b=y.current.getBoundingClientRect();F({x:b.left,y:b.top-300,w:b.width,h:8})},[k]);const N=b=>{if(k)return;v(b),R(!0);const w=b===e.correctIndex;Dl(w?[50,30,50]:[200]),p&&dr(w?"/sounds/correct.mp3":"/sounds/wrong.mp3",.7),setTimeout(()=>{n(w,null)},1500)},x=j===e.correctIndex;return s.jsx("div",{className:"fixed inset-0 bg-gradient-to-br from-gray-900 to-black text-white overflow-hidden",children:s.jsxs("div",{ref:S,className:"relative h-full overflow-y-auto px-5 pt-16 pb-[calc(env(safe-area-inset-bottom)+5.25rem)]",children:[s.jsx("div",{className:"mb-4",children:s.jsx("button",{onClick:()=>m(!0),className:"h-10 w-10 rounded-full border border-base-border grid place-items-center bg-white/5 hover:bg-white/10 transition",children:"←"})}),s.jsxs("div",{className:"text-center mb-6",children:[s.jsx("div",{className:`text-4xl font-black mb-2 ${i<=10?"text-red-400 animate-pulse":"text-white"}`,children:i}),s.jsx("div",{className:"w-full bg-white/20 rounded-full h-2",children:s.jsx("div",{className:`h-full rounded-full transition-all duration-1000 ${i<=10?"bg-red-400":"bg-blue-400"}`,style:{width:`${i/30*100}%`}})})]}),s.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[s.jsx("div",{className:"w-12 h-12 rounded-full flex items-center justify-center text-2xl",style:{backgroundColor:t.color},children:t.icon}),s.jsxs("div",{children:[s.jsx("div",{className:"text-lg font-bold",children:t.name}),s.jsxs("div",{className:"text-sm text-gray-400",children:["Question ",r.qIndex+1,"/3"]})]})]}),s.jsx("h2",{ref:y,className:"text-xl font-semibold mb-6 leading-relaxed",children:e.prompt}),s.jsx("div",{className:"space-y-3 mb-6",children:e.options.map((b,w)=>{const C=l.includes(w),M=j===w,W=w===e.correctIndex;let J="bg-white/10 border-white/20",A="opacity-100";return C?A="opacity-30":k&&M?J=W?"bg-green-500/30 border-green-400":"bg-red-500/30 border-red-400":k&&W?J="bg-green-500/30 border-green-400":M&&(J="bg-white/20 border-white/40"),s.jsx("button",{onClick:()=>N(w),disabled:k||C,className:`w-full p-4 rounded-xl border-2 text-left transition-all duration-300 ${J} ${A} ${!k&&!C?"hover:bg-white/15 active:scale-98":""}`,children:s.jsxs("div",{className:"flex items-center gap-3",children:[s.jsx("div",{className:"w-8 h-8 rounded-full bg-white/20 flex items-center justify-center font-bold text-sm",children:String.fromCharCode(65+w)}),s.jsx("span",{className:"font-medium flex-1",children:b}),c&&s.jsxs("span",{className:"text-xs text-base-muted",children:[Math.round(c[w]),"%"]})]})},w)})}),!k&&s.jsxs("div",{className:"flex gap-4 mb-8",children:[s.jsx("button",{onClick:()=>a("fifty"),disabled:o.fifty,className:`flex-1 p-4 rounded-2xl border-2 font-bold transition-all ${o.fifty?"bg-gray-700 border-gray-600 text-gray-400":"bg-purple-600 border-purple-400 text-white hover:bg-purple-500 active:scale-95"}`,children:"50:50"}),s.jsx("button",{onClick:()=>a("audience"),disabled:o.audience,className:`flex-1 p-4 rounded-2xl border-2 font-bold transition-all ${o.audience?"bg-gray-700 border-gray-600 text-gray-400":"bg-blue-600 border-blue-400 text-white hover:bg-blue-500 active:scale-95"}`,children:"👥 Ask"})]}),k&&s.jsxs("div",{className:"relative text-center",children:[x&&s.jsx("div",{className:"absolute inset-0 pointer-events-none",children:s.jsx(tm,{recycle:!1,numberOfPieces:120,gravity:.9,tweenDuration:1800,confettiSource:P||{x:0,y:0,w:typeof window<"u"?window.innerWidth:320,h:1}})}),s.jsx("button",{onClick:()=>n(x,null,!0),className:"relative z-10 bg-white text-black font-black py-4 px-8 rounded-2xl text-lg hover:bg-gray-100 transition-all active:scale-95",children:"Continue"})]}),h&&s.jsx("div",{className:"fixed inset-0 z-50 bg-black/60 flex items-center justify-center px-6",children:s.jsxs("div",{className:"w-full max-w-sm rounded-2xl bg-base-card border border-base-border p-5 text-center",children:[s.jsx("div",{className:"text-lg font-bold mb-2",children:"Time’s up"}),s.jsx("p",{className:"text-base-muted mb-5",children:"You ran out of time."}),s.jsx("button",{onClick:f,className:"mx-auto w-48 py-3 rounded-xl bg-brand-blue text-white font-semibold hover:bg-brand-blue/90 transition",children:"Back to Wheel"})]})}),g&&s.jsx("div",{className:"fixed inset-0 z-50 bg-black/60 flex items-center justify-center px-6",children:s.jsxs("div",{className:"w-full max-w-sm rounded-2xl bg-base-card border border-base-border p-5 text-center",children:[s.jsx("div",{className:"text-lg font-bold mb-2",children:"Want to quit?"}),s.jsx("p",{className:"text-base-muted mb-5",children:"You’ll lose this question’s progress."}),s.jsxs("div",{className:"flex gap-3",children:[s.jsx("button",{onClick:()=>m(!1),className:"flex-1 py-3 rounded-xl border border-base-border bg-white/5 hover:bg-white/10 transition",children:"No"}),s.jsx("button",{onClick:u,className:"flex-1 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-500 transition",children:"Yes"})]})]})})]})})}function Ux({onSelect:e}){return s.jsx("div",{className:"min-h-screen bg-gradient-to-br from-purple-600 to-pink-600 text-white",children:s.jsxs("div",{className:"mx-auto max-w-md px-5 pt-16 pb-8",children:[s.jsxs("header",{className:"text-center mb-12",children:[s.jsx("div",{className:"text-6xl mb-4",children:"🏆"}),s.jsx("h1",{className:"text-4xl font-black mb-4",children:"Perfect Round!"}),s.jsx("p",{className:"text-xl opacity-90",children:"Choose a character to unlock"})]}),s.jsx("div",{className:"grid grid-cols-2 gap-6",children:_t.map(t=>{const n=nm[In(t.name)];return s.jsxs("button",{onClick:()=>e(In(t.name)),className:"p-6 rounded-3xl border-2 border-white/20 bg-white/10 backdrop-blur text-center hover:bg-white/20 hover:scale-105 transition-all duration-300 active:scale-95",children:[s.jsx("div",{className:"text-4xl mb-3",children:t.icon}),s.jsx("div",{className:"font-black text-lg mb-1",children:n}),s.jsx("div",{className:"text-sm opacity-75",children:t.name})]},In(t.name))})})]})})}function Wx(){const[e,t]=d.useState("modes"),n=Ze(),r=Mt(),[i,o]=d.useState(()=>Dt.get(It.COINS,0)),[a,l]=d.useState(()=>Dt.get(It.XP,0)),[c,u]=d.useState(()=>Dt.get(It.LEVEL,1)),[h,f]=d.useState(()=>Dt.get(It.OWNED_CHARACTERS,[])),[p,j]=d.useState(()=>Dt.get(It.SOUND,!0)),[v,k]=d.useState({qIndex:0,progress:[!1,!1,!1],lifelines:{fifty:!1,audience:!1}}),[R,g]=d.useState([]),[m,y]=d.useState(null),[S,P]=d.useState(null),[F,N]=d.useState(30),[x,b]=d.useState([]),[w,C]=d.useState(null),[M,W]=d.useState(null),[J,A]=d.useState(!1),[H,Q]=d.useState(0),[L,T]=d.useState("none"),[E,z]=d.useState(!1),[O,D]=d.useState(null),[Y,te]=d.useState(!1),[ae,ne]=d.useState(null),[I,q]=d.useState(-1),[re,V]=d.useState(0),[G,oe]=d.useState(null),[$,B]=d.useState(null),[X,ue]=d.useState(!1),[ee,se]=d.useState(null),[_,Z]=d.useState(-1),[ce,fe]=d.useState([!1,!1,!1]),[le,ve]=d.useState(!1),[ye,Te]=d.useState(!1),Ye=d.useRef(null),et=d.useRef(null),pt=d.useRef(null),ht=d.useMemo(()=>{var ie;return((ie=window.matchMedia)==null?void 0:ie.call(window,"(prefers-reduced-motion: reduce)").matches)||!1},[]);d.useEffect(()=>{try{localStorage.setItem("qp_in_question",JSON.stringify(e==="question"))}catch{}return()=>{try{localStorage.removeItem("qp_in_question")}catch{}}},[e]),d.useEffect(()=>(xt(),Cn(),()=>Ns()),[]),d.useEffect(()=>Dt.set(It.COINS,i),[i]),d.useEffect(()=>Dt.set(It.XP,a),[a]),d.useEffect(()=>Dt.set(It.LEVEL,c),[c]),d.useEffect(()=>Dt.set(It.OWNED_CHARACTERS,h),[h]),d.useEffect(()=>Dt.set(It.SOUND,p),[p]),d.useEffect(()=>(e==="question"&&F>0&&!ye?Ye.current=setTimeout(()=>{N(ie=>{const me=ie-1;return me===10&&p&&dr("/sounds/tick.mp3",.8),me})},1e3):e==="question"&&F===0&&A(!0),()=>{Ye.current&&clearTimeout(Ye.current)}),[e,F,p,ye]),d.useEffect(()=>{if(e!=="wheel"||G==null)return;q(G),p&&dr("/sounds/progress.mp3",.6),Z(G);const ie=setTimeout(()=>Z(-1),900),me=setTimeout(()=>q(-1),900),Ie=setTimeout(()=>{ee&&(ee==="streakFlash"?t("streakFlash"):ee==="characterPicker"?t("characterPicker"):(t("modes"),Sr()),se(null)),oe(null)},1800);return()=>{clearTimeout(ie),clearTimeout(me),clearTimeout(Ie)}},[e,G,ee,p,le]),d.useEffect(()=>{e!=="wheel"||!le||(V(ie=>ie+1),ve(!1))},[e,le]);const xt=async()=>{try{const me=await(await fetch("/data/quiz_questions_bank.csv")).text(),{data:Ie}=to.parse(me,{header:!0,skipEmptyLines:!0,transformHeader:he=>he.trim().toLowerCase()}),_e=Ie.map((he,Ve)=>{var Ss;const Ue=[he.option1,he.option2,he.option3,he.option4].map(no=>(no||"").trim()).filter(Boolean);if(Ue.length<4)return null;let En={a:0,b:1,c:2,d:3}[(Ss=he.answer)==null?void 0:Ss.toLowerCase()];return En===void 0&&(En=Ue.findIndex(no=>no.toLowerCase()===(he.answer||"").toLowerCase())),En===-1&&(En=0),{id:he.id||`q_${Ve}`,prompt:(he.question||"").trim(),options:Ue,correctIndex:En,category:(he.category||he.subject||"general knowledge").trim(),difficulty:(he.difficulty||"medium").toLowerCase(),explanation:(he.explanation||"").trim()}}).filter(Boolean);g(_e)}catch(ie){console.error("Failed to load questions:",ie),g([])}},Cn=()=>{const ie=new Audio("/sounds/spin.mp3");ie.loop=!0,ie.volume=.6,et.current=ie},Ns=()=>{if(Ye.current&&clearTimeout(Ye.current),pt.current&&(clearTimeout(pt.current),pt.current=null),et.current){try{et.current.pause()}catch{}et.current=null}},am=()=>{if(p&&et.current){try{et.current.currentTime=0,et.current.play()}catch{}pt.current&&clearTimeout(pt.current),pt.current=setTimeout(()=>{Ol()},2e3)}},Ol=()=>{if(pt.current&&(clearTimeout(pt.current),pt.current=null),et.current)try{et.current.pause(),et.current.currentTime=0}catch{}},Sr=()=>{k({qIndex:0,progress:[!1,!1,!1],lifelines:{fifty:!1,audience:!1}}),fe([!1,!1,!1]),y(null),P(null),W(null),b([]),C(null),A(!1),V(0)},lm=()=>{if(E)return;D(null),te(!1),ne(null),z(!0),am();const ie=Math.floor(Math.random()*_t.length),me=_t[ie],Ie=au(H),_e=ie*$t+$t/2,he=(Math.random()-.5)*($t*.3),Ve=360-_e+he;let Ue=au(Ve-Ie);const Cr=nn.FULL_TURNS*360+Ue,En=H+Cr+nn.OVERSHOOT;T(`transform ${ht?1e3:nn.DURATION}ms cubic-bezier(0.25, 0.46, 0.45, 0.94)`),Q(En),Dl([20,50,20]),setTimeout(()=>{T(`transform ${ht?200:nn.SETTLE_DURATION}ms cubic-bezier(0.68, -0.55, 0.265, 1.55)`),Q(Ss=>Ss-nn.OVERSHOOT)},ht?1e3:nn.DURATION),setTimeout(()=>{Ol(),z(!1),D({cat:me,index:ie}),P(me),ne(me.color),te(!0),setTimeout(()=>{te(!1),t("interstitial")},1500),setTimeout(()=>ne(null),1e3)},(ht?1e3:nn.DURATION)+(ht?200:nn.SETTLE_DURATION)+100)},cm=()=>{const ie=R.filter(Ie=>{const _e=Ie.category.toLowerCase(),he=S.name.toLowerCase();return _e.includes(he)||he.includes(_e)});let me;ie.length>0?me=ie[Math.floor(Math.random()*ie.length)]:me=R[Math.floor(Math.random()*R.length)],me?(y(me),N(30),b([]),C(null),A(!1),Te(!1),t("question")):t("wheel")},um=(ie,me,Ie=!1)=>{if(!Ie){Te(!0);return}const _e=v.qIndex,he=[...v.progress];he[_e]=!0;const Ve=[...ce];if(Ve[_e]=!!ie,fe(Ve),k(Ue=>({...Ue,progress:he,qIndex:Ue.qIndex+1})),ie&&(o(Ue=>Ue+5),l(Ue=>Ue+1),ve(!0)),B(_e),ue(!!ie),_e===2){const Ue=Ve.every(Boolean);se(Ue?"streakFlash":"modes")}else se(null);t("wheel")},dm=ie=>{if(!(v.lifelines[ie]||!m)){if(k(me=>({...me,lifelines:{...me.lifelines,[ie]:!0}})),ie==="fifty"){const Ie=m.options.map((_e,he)=>he).filter(_e=>_e!==m.correctIndex).slice(0,2);b(Ie)}else if(ie==="audience"){const me=40+Math.random()*25;let Ie=100-me;const _e=[0,0,0,0];_e[m.correctIndex]=Math.round(me);const he=[0,1,2,3].filter(Ve=>Ve!==m.correctIndex);he.forEach((Ve,Ue)=>{if(Ue===he.length-1)_e[Ve]=Ie;else{const Cr=Math.floor(Math.random()*Ie);_e[Ve]=Cr,Ie-=Cr}}),C(_e)}}},fm=ie=>{W(ie),t("bonusInterstitial")},mm=ie=>{ie&&M&&(f(me=>[...new Set([...me,M])]),p&&dr("/sounds/coin.mp3",1)),setTimeout(()=>{t("modes"),Sr()},3e3)},$l=ie=>{ie==="classic"&&(Sr(),t("wheel"))},Bl=()=>{window.location.href="/",console.log("Navigate to home")},pm=()=>{t("modes"),Sr()},hm=()=>{t("wheel")};switch(d.useEffect(()=>{if(e!=="wheel"||$==null)return;const me=setTimeout(()=>{oe($),B(null)},X?1800:0);return()=>clearTimeout(me)},[e,$,X]),d.useEffect(()=>{const ie=new URLSearchParams(r.search);(ie.get("view")==="modes"||ie.get("view")==="home")&&(Sr(),t("modes"),n("/play",{replace:!0}))},[r.search]),e){case"modes":return s.jsx(lu,{onModeSelect:$l,onNavigateHome:Bl});case"wheel":return s.jsx($x,{run:v,coins:i,xp:a,level:c,ownedCharacters:h,onSpin:lm,onBack:pm,spinning:E,angle:H,transition:L,result:O,showCallout:Y,glowColor:ae,soundOn:p,setSoundOn:j,showSparkle:I,pulseIdx:_,coinBurstTick:re,pendingProgressIdx:G,lastAnswerWasCorrect:X,nextProgressIdx:$});case"interstitial":return s.jsx(cu,{category:S,onComplete:cm,soundOn:p});case"streakFlash":return s.jsx(Bx,{onDone:()=>t("bonusInterstitial")});case"question":return s.jsx(uu,{question:m,category:S,onAnswer:um,run:v,timeLeft:F,usedLifelines:v.lifelines,onUseLifeline:dm,eliminatedOptions:x,audienceData:w,onBack:hm,timeUp:J,onTimeUpBackToWheel:()=>{A(!1),t("wheel")},soundOn:p});case"characterPicker":return s.jsx(Ux,{onSelect:fm});case"bonusInterstitial":return s.jsx(cu,{category:_t.find(ie=>In(ie.name)===M),onComplete:()=>t("bonusQuestion"),isBonus:!0,soundOn:p});case"bonusQuestion":if(!m){const ie=_t.find(me=>In(me.name)===M);if(ie&&R.length>0){const me=R.filter(_e=>{const he=_e.category.toLowerCase(),Ve=ie.name.toLowerCase();return he.includes(Ve)||Ve.includes(he)}),Ie=me.length>0?me[Math.floor(Math.random()*me.length)]:R[Math.floor(Math.random()*R.length)];y(Ie),N(30)}return s.jsx("div",{className:"min-h-screen bg-base-bg text-base-text flex items-center justify-center",children:s.jsx("div",{className:"text-lg",children:"Loading bonus question..."})})}return s.jsx(uu,{question:m,category:_t.find(ie=>In(ie.name)===M)||_t[0],onAnswer:mm,run:{...v,lifelines:{fifty:!0,audience:!0}},timeLeft:F,usedLifelines:{fifty:!0,audience:!0},onUseLifeline:()=>{},eliminatedOptions:[],audienceData:null,onBack:()=>t("modes")});default:return s.jsx(lu,{onModeSelect:$l,onNavigateHome:Bl})}}const Qx=({session:e,mode:t,category:n,difficulty:r,timerConfig:i,onComplete:o,onQuit:a})=>{const[l,c]=d.useState(0),[u,h]=d.useState([]),[f,p]=d.useState([]),[j,v]=d.useState((i==null?void 0:i.seconds)||45),[k,R]=d.useState(!1),[g,m]=d.useState(null),[y,S]=d.useState(!1),[P,F]=d.useState(!1);d.useState({}),d.useState({});const[N,x]=d.useState([]);d.useState(!0);const[b,w]=d.useState(!1),[C,M]=d.useState(!1),[W,J]=d.useState(""),[A,H]=d.useState(0),[Q,L]=d.useState(0),[T,E]=d.useState(0),[z,O]=d.useState(null),D=d.useRef(null),Y=t==="practice",te=u[l],ae=[{id:1,category:"General Knowledge",difficulty:"medium",prompt:"Which element has the atomic number 1?",options:["Helium","Carbon","Hydrogen","Oxygen"],answerIndex:2,explanation:"Hydrogen is the first element on the periodic table with atomic number 1!"},{id:2,category:"General Knowledge",difficulty:"medium",prompt:"What is the largest ocean on Earth?",options:["Atlantic","Pacific","Indian","Arctic"],answerIndex:1,explanation:"The Pacific Ocean covers about one-third of Earth's surface!"},{id:3,category:"General Knowledge",difficulty:"easy",prompt:"What color do you get when you mix red and yellow?",options:["Purple","Orange","Green","Pink"],answerIndex:1,explanation:"Red and yellow make orange - like a beautiful sunset!"}],ne=e&&e.questions&&Array.isArray(e.questions)&&e.questions.length>0?e.questions:ae,I=ne[l]||ne[0]||ae[0],q=ne.length;d.useEffect(()=>{ne.length>0&&(h(new Array(ne.length).fill(null)),p(new Array(ne.length).fill(!1)),x(new Array(ne.length).fill(!1)))},[ne.length]);const re=d.useCallback((_,Z)=>{if(!I||Y&&N[l])return;const ce=[...u];if(ce[l]=u[l]===_?null:_,h(ce),ce[l]===I.answerIndex){const fe=T+1;E(fe),H(le=>le+1),L(le=>le+10*fe),O({type:"correct",stars:1,coins:10*fe}),setTimeout(()=>O(null),2e3)}else ce[l]!==null&&E(0);if(ce[l]!==null&&f[l]){const fe=[...f];fe[l]=!1,p(fe)}Y&&ce[l]!==null&&x(fe=>{const le=[...fe];return le[l]=!0,le}),!Y&&ce[l]!==null&&(clearTimeout(D.current),D.current=setTimeout(()=>{l<q-1?G():(w(!0),R(!0))},2e3))},[I,Y,N,l,u,f,q,T]),V=()=>{l>0&&(c(_=>_-1),v((i==null?void 0:i.seconds)||45))},G=()=>{l<q-1?(c(_=>_+1),v((i==null?void 0:i.seconds)||45)):w(!0)},oe=()=>{const _=[...f];_[l]=!0,p(_),E(0),G()},$=()=>{const _=ne.reduce((Z,ce,fe)=>Z+(u[fe]===ce.answerIndex?1:0),0);o&&o({questions:ne,answers:u,skipped:f,correct:_,total:q,mode:t,category:n,difficulty:r,earnedStars:A,earnedCoins:Q,finalStreak:T})};d.useEffect(()=>{if(k||g!==null)return;const _=setInterval(()=>{v(Z=>Z<=1?(m(l),0):Z-1)},1e3);return()=>clearInterval(_)},[k,g,l]);const B=_=>{const Z=Math.floor(_/60),ce=_%60;return`${Z}:${ce.toString().padStart(2,"0")}`},X=()=>j<=5?"text-red-400 animate-pulse":j<=15?"text-yellow-400":"text-green-400",ue=(l+1)/ne.length*100,ee=u.filter(_=>_!==null).length,se=f.filter(Boolean).length;return s.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-purple-600 via-blue-600 to-teal-500 relative overflow-hidden",children:[s.jsxs("div",{className:"absolute inset-0 overflow-hidden pointer-events-none",children:[s.jsx("div",{className:"absolute top-20 left-10 w-32 h-32 bg-yellow-300/20 rounded-full animate-bounce"}),s.jsx("div",{className:"absolute top-40 right-16 w-24 h-24 bg-pink-300/20 rounded-full animate-pulse"}),s.jsx("div",{className:"absolute bottom-32 left-20 w-20 h-20 bg-green-300/20 rounded-full animate-bounce",style:{animationDelay:"1s"}}),s.jsx("div",{className:"absolute bottom-20 right-32 w-16 h-16 bg-blue-300/20 rounded-full animate-pulse",style:{animationDelay:"0.5s"}})]}),z&&s.jsx("div",{className:"fixed inset-0 flex items-center justify-center z-50 pointer-events-none",children:s.jsxs("div",{className:"bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-8 py-4 rounded-full text-2xl font-bold animate-bounce shadow-2xl",children:["⭐ +",z.stars," Stars! 💰 +",z.coins," Coins!"]})}),s.jsxs("div",{className:"bg-white/10 backdrop-blur-sm border-b border-white/20 p-4 sticky top-0 z-40",children:[s.jsxs("div",{className:"flex items-center justify-between max-w-4xl mx-auto",children:[s.jsxs("button",{onClick:()=>M(!0),className:"bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-full flex items-center gap-2 transition-all hover:scale-105",children:[s.jsx("span",{className:"text-xl",children:"👈"}),s.jsx("span",{className:"font-medium",children:"Back"})]}),s.jsxs("div",{className:"text-center",children:[s.jsx("h1",{className:"text-xl font-bold text-white",children:n}),s.jsxs("p",{className:"text-white/80 text-sm",children:["Mode: ",Y?"Practice 🎯":"Quiz 🏆"]})]}),s.jsxs("div",{className:"flex items-center gap-4",children:[s.jsxs("div",{className:"bg-white/20 px-3 py-1 rounded-full flex items-center gap-1",children:[s.jsx("span",{children:"⭐"}),s.jsx("span",{className:"text-white font-bold",children:A})]}),s.jsxs("div",{className:"bg-white/20 px-3 py-1 rounded-full flex items-center gap-1",children:[s.jsx("span",{children:"💰"}),s.jsx("span",{className:"text-white font-bold",children:Q})]}),T>0&&s.jsxs("div",{className:"bg-gradient-to-r from-orange-400 to-red-500 px-3 py-1 rounded-full flex items-center gap-1 animate-pulse",children:[s.jsx("span",{children:"🔥"}),s.jsx("span",{className:"text-white font-bold",children:T})]})]})]}),s.jsxs("div",{className:"mt-4 max-w-4xl mx-auto",children:[s.jsxs("div",{className:"flex justify-between items-center mb-2",children:[s.jsxs("div",{className:"text-white text-sm",children:["Question ",l+1," of ",ne.length]}),s.jsxs("div",{className:`text-lg font-mono ${X()}`,children:["⏰ ",B(j)]})]}),s.jsx("div",{className:"bg-white/20 h-3 rounded-full overflow-hidden",children:s.jsx("div",{className:"bg-gradient-to-r from-green-400 to-emerald-500 h-full transition-all duration-500 rounded-full",style:{width:`${ue}%`}})}),s.jsx("div",{className:"flex gap-2 mt-3 justify-center",children:Array.from({length:ne.length}).map((_,Z)=>s.jsx("div",{className:`w-3 h-3 rounded-full transition-all ${Z===l?"bg-yellow-400 scale-150":u[Z]!==null?"bg-green-400":f[Z]?"bg-orange-400":"bg-white/30"}`},Z))})]})]}),s.jsx("div",{className:"max-w-2xl mx-auto p-4 mt-6",children:s.jsxs("div",{className:"bg-white rounded-3xl shadow-2xl overflow-hidden",children:[s.jsxs("div",{className:"bg-gradient-to-r from-blue-500 to-purple-600 p-6 text-white",children:[s.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[s.jsx("div",{className:"text-4xl",children:I.difficulty==="easy"?"🌟":I.difficulty==="medium"?"⚡":"🔥"}),s.jsxs("div",{children:[s.jsx("h2",{className:"text-lg font-bold",children:I.difficulty==="easy"?"Easy Question!":I.difficulty==="medium"?"Medium Challenge!":"Hard Question!"}),s.jsx("p",{className:"text-blue-100 text-sm",children:I.category})]})]}),s.jsx("h3",{className:"text-xl font-bold leading-relaxed text-center",children:I.prompt})]}),s.jsx("div",{className:"p-6 space-y-4",children:I.options.map((_,Z)=>{const ce=te===Z,fe=Z===I.answerIndex,le=Y&&te!==null;let ve="w-full p-4 rounded-2xl text-left font-semibold text-lg transition-all transform hover:scale-102 flex items-center gap-4 ";le?ce&&fe?ve+="bg-gradient-to-r from-green-400 to-emerald-500 text-white scale-105 animate-pulse":ce&&!fe?ve+="bg-gradient-to-r from-red-400 to-rose-500 text-white":!ce&&fe?ve+="bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 border-2 border-green-400":ve+="bg-gray-100 text-gray-500":ce?ve+="bg-gradient-to-r from-blue-400 to-purple-500 text-white scale-105":ve+="bg-gray-50 hover:bg-blue-50 text-gray-800 border-2 border-gray-200 hover:border-blue-300";const ye=["🅰️","🅱️","🅲️","🅳️"];return s.jsxs("button",{onClick:Te=>re(Z,Te),disabled:Y&&N[l],className:ve,children:[s.jsx("div",{className:"text-3xl",children:ye[Z]}),s.jsx("div",{className:"flex-1",children:_}),le&&ce&&fe&&s.jsx("div",{className:"text-2xl animate-spin",children:"🎉"}),le&&ce&&!fe&&s.jsx("div",{className:"text-2xl",children:"😅"}),le&&!ce&&fe&&s.jsx("div",{className:"text-xl animate-bounce",children:"👆"})]},Z)})}),Y&&te!==null&&s.jsx("div",{className:"bg-gradient-to-r from-purple-50 to-blue-50 p-6 border-t",children:s.jsxs("div",{className:"text-center space-y-4",children:[s.jsx("div",{className:"text-6xl animate-bounce",children:te===I.answerIndex?"🎊":"🤗"}),s.jsx("h4",{className:`text-xl font-bold ${te===I.answerIndex?"text-green-600":"text-blue-600"}`,children:te===I.answerIndex?"Awesome! You're a star! ⭐":"Good try! Let's learn together! 📚"}),I.explanation&&s.jsx("div",{className:"bg-white/80 rounded-2xl p-4 text-left",children:s.jsxs("div",{className:"flex gap-3",children:[s.jsx("div",{className:"text-2xl",children:"💡"}),s.jsxs("div",{children:[s.jsx("div",{className:"font-bold text-blue-700 mb-2",children:"Did you know?"}),s.jsx("div",{className:"text-gray-700",children:I.explanation})]})]})})]})}),Y&&N[l]&&s.jsx("div",{className:"bg-green-50 border-t p-4 text-center",children:s.jsxs("div",{className:"inline-flex items-center gap-2 bg-green-200 px-4 py-2 rounded-full text-green-800 font-bold",children:[s.jsx("span",{children:"🔒"}),"Great job! Answer saved!"]})})]})}),s.jsx("div",{className:"fixed bottom-0 left-0 right-0 bg-white/10 backdrop-blur-sm border-t border-white/20 p-4",children:s.jsxs("div",{className:"max-w-2xl mx-auto",children:[!Y&&s.jsxs("div",{className:"flex justify-center gap-4 mb-4",children:[s.jsxs("button",{onClick:()=>{},disabled:y,className:"bg-orange-500 hover:bg-orange-600 disabled:bg-gray-400 text-white px-6 py-2 rounded-full font-bold transition-all hover:scale-105 flex items-center gap-2",children:[s.jsx("span",{children:"⚡"}),"50:50"]}),s.jsxs("button",{onClick:()=>{},disabled:P,className:"bg-purple-500 hover:bg-purple-600 disabled:bg-gray-400 text-white px-6 py-2 rounded-full font-bold transition-all hover:scale-105 flex items-center gap-2",children:[s.jsx("span",{children:"👥"}),"Ask Friends"]})]}),s.jsxs("div",{className:"flex gap-3",children:[s.jsxs("button",{onClick:V,disabled:l===0,className:"flex-1 bg-gray-500 hover:bg-gray-600 disabled:bg-gray-300 text-white py-3 rounded-2xl font-bold transition-all hover:scale-105 flex items-center justify-center gap-2",children:[s.jsx("span",{children:"👈"}),"Previous"]}),s.jsxs("button",{onClick:oe,disabled:te!==null,className:"flex-1 bg-yellow-500 hover:bg-yellow-600 disabled:bg-gray-300 text-white py-3 rounded-2xl font-bold transition-all hover:scale-105 flex items-center justify-center gap-2",children:[s.jsx("span",{children:"⏭️"}),"Skip"]}),s.jsxs("button",{onClick:G,className:"flex-1 bg-green-500 hover:bg-green-600 text-white py-3 rounded-2xl font-bold transition-all hover:scale-105 flex items-center justify-center gap-2",children:[s.jsx("span",{children:"👉"}),l===ne.length-1?"Finish":"Next"]})]}),s.jsxs("button",{onClick:()=>w(!0),className:"w-full mt-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-4 rounded-2xl font-bold text-lg transition-all hover:scale-105 flex items-center justify-center gap-2",children:[s.jsx("span",{children:"🏆"}),"Submit Quiz"]})]})}),C&&s.jsx("div",{className:"fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4",children:s.jsxs("div",{className:"bg-white rounded-3xl p-6 max-w-sm w-full text-center",children:[s.jsx("div",{className:"text-6xl mb-4",children:"🤔"}),s.jsx("h3",{className:"text-xl font-bold text-gray-800 mb-2",children:"Want to quit?"}),s.jsx("p",{className:"text-gray-600 mb-6",children:"You'll lose all your progress and stars!"}),s.jsxs("div",{className:"flex gap-3",children:[s.jsx("button",{onClick:()=>M(!1),className:"flex-1 bg-green-500 hover:bg-green-600 text-white py-3 rounded-xl font-bold transition-all",children:"Keep Playing! 🎯"}),s.jsx("button",{onClick:a,className:"flex-1 bg-gray-400 hover:bg-gray-500 text-white py-3 rounded-xl font-bold transition-all",children:"Quit 😢"})]})]})}),b&&s.jsx("div",{className:"fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4",children:s.jsxs("div",{className:"bg-white rounded-3xl p-6 max-w-sm w-full text-center",children:[s.jsx("div",{className:"text-6xl mb-4",children:"🏆"}),s.jsx("h3",{className:"text-xl font-bold text-gray-800 mb-2",children:"Ready to finish?"}),s.jsxs("p",{className:"text-gray-600 mb-4",children:["You answered ",ee," out of ",ne.length," questions.",se>0&&` You skipped ${se} questions.`]}),s.jsx("div",{className:"bg-gradient-to-r from-yellow-100 to-orange-100 p-4 rounded-2xl mb-6",children:s.jsxs("div",{className:"flex justify-center items-center gap-4",children:[s.jsxs("div",{className:"text-center",children:[s.jsx("div",{className:"text-2xl",children:"⭐"}),s.jsxs("div",{className:"font-bold text-yellow-600",children:[A," Stars"]})]}),s.jsxs("div",{className:"text-center",children:[s.jsx("div",{className:"text-2xl",children:"💰"}),s.jsxs("div",{className:"font-bold text-orange-600",children:[Q," Coins"]})]})]})}),s.jsxs("div",{className:"flex gap-3",children:[s.jsx("button",{onClick:()=>w(!1),className:"flex-1 bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-xl font-bold transition-all",children:"Review 👀"}),s.jsx("button",{onClick:$,className:"flex-1 bg-green-500 hover:bg-green-600 text-white py-3 rounded-xl font-bold transition-all",children:"Submit! 🚀"})]})]})}),g===l&&s.jsx("div",{className:"fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4",children:s.jsxs("div",{className:"bg-white rounded-3xl p-6 max-w-sm w-full text-center",children:[s.jsx("div",{className:"text-6xl mb-4 animate-bounce",children:"⏰"}),s.jsx("h3",{className:"text-xl font-bold text-gray-800 mb-2",children:"Time's up!"}),s.jsx("p",{className:"text-gray-600 mb-6",children:"No worries! Let's move to the next question."}),s.jsx("button",{onClick:()=>{m(null),G()},className:"w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-xl font-bold transition-all",children:l<ne.length-1?"Next Question! 🚀":"See Results! 🏆"})]})}),W&&s.jsx("div",{className:"fixed top-20 right-4 bg-red-500 text-white px-4 py-2 rounded-full font-bold animate-bounce z-50",children:W})]})},qx=2,Hx=5,Yx=({results:e,onRetake:t,onReview:n,isRetake:r=!1,isPractice:i=!1})=>{const o=Ze(),{xp:a,coins:l,level:c,combo:u,addXP:h,addCoins:f,updateCombo:p,nextThreshold:j,levelProgress:v}=Al(),[k,R]=d.useState(!0),[g,m]=d.useState(null),[y,S]=d.useState(0),[P,F]=d.useState(0),[N,x]=d.useState(!1),b=d.useRef(null),{correct:w,total:C,category:M,mode:W,elapsedMs:J}=e,A=C?Math.round(w/C*100):0;d.useEffect(()=>{if(i||r){R(!1);return}const L=w*Hx;let T=1;A===100?(T=1.5,p(u+1)):A>=80?T=1.2:p(0);const E=Math.floor(L*T),z=E*qx;m({coins:E,xp:z,bonusApplied:T>1}),x(!0),setTimeout(()=>x(!1),180);const O=1e3,D=performance.now();let Y;const te=ae=>{const ne=Math.min(1,(ae-D)/O),I=1-Math.pow(1-ne,3);S(Math.round(w*I)),F(Math.round(E*I)),ne<1&&(Y=requestAnimationFrame(te))};return S(0),F(0),Y=requestAnimationFrame(te),()=>cancelAnimationFrame(Y)},[w,A,i,r,u,p]);const H=()=>{g&&(h(g.xp),f(g.coins),m(L=>({...L,awarded:!0})))};d.useEffect(()=>{if(!k||g&&!g.awarded)return;const L=setTimeout(()=>R(!1),2e3);return()=>clearTimeout(L)},[k,g]);const Q=L=>{const T=Math.floor(L/1e3),E=Math.floor(T/60),z=T%60;return`${E.toString().padStart(2,"0")}:${z.toString().padStart(2,"0")}`};return k&&!i&&!r?s.jsxs(s.Fragment,{children:[g&&g.coins>0&&!g.awarded&&s.jsx(Jf,{targetRef:b,count:Math.min(28,Math.max(12,Math.round(g.coins/2))),onDone:H}),s.jsxs("div",{className:"mt-3 flex items-center justify-end gap-2 px-3",children:[s.jsxs("div",{className:"px-3 py-1 rounded-xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 text-xs",children:["Level ",c]}),s.jsxs("div",{ref:b,className:"px-3 py-1 rounded-xl bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 text-xs",children:[l," coins"]})]}),s.jsxs("div",{className:"relative mt-4 card rounded-3xl p-8 text-center overflow-hidden",style:{animation:"popIn 380ms ease-out"},children:[N&&s.jsx("div",{className:"absolute inset-0 bg-white/70 pointer-events-none rounded-3xl"}),s.jsx("div",{className:"pointer-events-none absolute inset-0 overflow-hidden",children:s.jsx("div",{className:"h-full w-1/3 -skew-x-12 bg-white/10 blur-md",style:{animation:"shine 900ms ease-out forwards 120ms"}})}),s.jsxs("div",{className:"relative",children:[s.jsx("div",{className:"text-3xl md:text-4xl font-extrabold mb-2",children:"Rewards"}),s.jsxs("div",{className:"text-sm text-base-muted mb-6",children:[M," • ",W==="practice"?"Practice":"Quiz"]}),s.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl mx-auto",children:[s.jsxs("div",{className:"rounded-2xl border border-base-border bg-white/5 p-5",children:[s.jsx("div",{className:"text-base-muted text-sm",children:"Correct answers"}),s.jsx("div",{className:"text-5xl font-black mt-1",children:y})]}),s.jsxs("div",{className:"rounded-2xl border border-base-border bg-white/5 p-5",children:[s.jsx("div",{className:"text-base-muted text-sm",children:"Coins"}),s.jsx("div",{className:"text-5xl font-black mt-1",children:P}),s.jsxs("div",{className:"text-xs text-base-muted mt-1",children:[w," × 5",(g==null?void 0:g.bonusApplied)&&" (+ bonus)"]})]})]}),u>0&&s.jsxs("div",{className:"mt-4 text-sm text-yellow-400",children:["🔥 Combo streak: ",u]}),s.jsxs("div",{className:"mt-6 text-xs text-base-muted",children:["Finalizing… ",s.jsx("span",{className:"animate-pulse",children:"•••"})]})]})]})]}):s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"mt-3 flex items-center justify-between px-3",children:[s.jsx("button",{onClick:()=>o("/"),className:"px-3 py-1.5 rounded-xl border border-white/20 bg-white/10 text-white text-sm",children:"← Home"}),s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsxs("div",{className:"px-3 py-1 rounded-xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 text-xs",children:["Level ",c]}),s.jsxs("div",{className:"px-3 py-1 rounded-xl bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 text-xs",children:[l," coins"]})]})]}),s.jsxs("div",{className:"mt-4 card rounded-3xl p-5 text-center",children:[s.jsx("h2",{className:"text-xl font-semibold mb-1",children:"Results"}),s.jsxs("div",{className:"text-sm text-base-muted mb-4",children:[M," • ",W==="practice"?"Practice":"Quiz"]}),i&&s.jsxs("div",{className:"mb-4 p-3 rounded-xl bg-green-500/10 border border-green-500/30",children:[s.jsx("div",{className:"text-green-400 text-sm",children:"📚 Practice Mode - No rewards earned"}),s.jsx("div",{className:"text-xs text-base-muted mt-1",children:"Great for learning! Switch to Quiz mode to earn XP and coins."})]}),s.jsxs("div",{className:"grid grid-cols-3 gap-3 mb-5",children:[s.jsxs("div",{className:"rounded-xl border border-base-border bg-white/5 p-3",children:[s.jsx("div",{className:"text-xs text-base-muted",children:"Score"}),s.jsxs("div",{className:"text-lg font-semibold",children:[w,"/",C]})]}),s.jsxs("div",{className:"rounded-xl border border-base-border bg-white/5 p-3",children:[s.jsx("div",{className:"text-xs text-base-muted",children:"Accuracy"}),s.jsxs("div",{className:"text-lg font-semibold",children:[A,"%"]})]}),s.jsxs("div",{className:"rounded-xl border border-base-border bg-white/5 p-3",children:[s.jsx("div",{className:"text-xs text-base-muted",children:"Time"}),s.jsx("div",{className:"text-lg font-semibold",children:Q(J)})]})]}),u>0&&!i&&s.jsxs("div",{className:"mb-4 rounded-xl bg-yellow-500/10 border border-yellow-500/30 p-3",children:[s.jsxs("div",{className:"text-yellow-400",children:["🔥 Combo Streak: ",u,A===100&&" - Perfect Score!"]}),s.jsx("div",{className:"text-xs text-base-muted mt-1",children:"Keep scoring above 80% to maintain your streak"})]}),s.jsx(Vx,{category:M}),s.jsxs("div",{className:"mt-5 space-y-3",children:[s.jsxs("div",{className:"flex gap-2 justify-center",children:[s.jsx("button",{className:"flex-1 max-w-[140px] py-3 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium text-sm",onClick:n,children:"Review Answers"}),s.jsx("button",{className:"flex-1 max-w-[140px] py-3 rounded-2xl border border-white/20 text-white font-medium text-sm",onClick:t,children:i?"Practice Again":"Retake Quiz"})]}),s.jsxs("div",{className:"flex gap-2 justify-center",children:[s.jsx("button",{className:"flex-1 max-w-[140px] py-2.5 rounded-xl border border-white/20 bg-white/5 text-white text-sm",onClick:()=>o("/profile/history"),children:"History"}),s.jsx("button",{className:"flex-1 max-w-[140px] py-2.5 rounded-xl border border-white/20 bg-white/5 text-white text-sm",onClick:()=>o("/"),children:"Home"})]})]})]}),s.jsx(Gx,{onReview:n})]})},Vx=({category:e})=>{const[t,n]=d.useState(null);return d.useEffect(()=>{var r;try{const i=localStorage.getItem("qp_stats");if(i){const a=((r=JSON.parse(i).sessions)==null?void 0:r.filter(l=>l.cat===e))||[];if(a.length>0){const l=a.slice(-7),c=Math.round(l.reduce((u,h)=>u+h.correct/h.total*100,0)/l.length);n({avgAccuracy:c,totalSessions:a.length,lastSession:a[a.length-1]})}}}catch(i){console.error("Error loading stats:",i)}},[e]),t?s.jsx("div",{className:"rounded-xl border border-base-border bg-white/5 p-3 text-left",children:s.jsxs("ul",{className:"list-disc list-inside text-xs text-base-muted space-y-1",children:[s.jsxs("li",{children:["Avg. accuracy (last 7): ",s.jsxs("b",{children:[t.avgAccuracy,"%"]})]}),s.jsxs("li",{children:["Total sessions: ",s.jsx("b",{children:t.totalSessions})]}),s.jsxs("li",{children:["Last score: ",s.jsxs("b",{children:[t.lastSession.correct,"/",t.lastSession.total]})]})]})}):null},Gx=({onReview:e})=>{const[t,n]=d.useState([]);return d.useEffect(()=>{try{const r=localStorage.getItem("qp_recent");if(r){const i=JSON.parse(r);n(i.slice(0,5))}}catch(r){console.error("Error loading recent quizzes:",r)}},[]),t.length===0?null:s.jsxs("div",{className:"mt-4 card rounded-3xl p-5",children:[s.jsx("h3",{className:"text-base font-semibold mb-3",children:"Recent Quizzes"}),s.jsx("div",{className:"space-y-2",children:t.map(r=>s.jsxs("div",{className:"flex items-center justify-between py-2 border-b border-white/10 last:border-0",children:[s.jsxs("div",{className:"flex-1",children:[s.jsx("div",{className:"text-sm",children:r.cat}),s.jsxs("div",{className:"text-xs text-base-muted",children:[r.correct,"/",r.total," • ",Math.round(r.correct/r.total*100),"%"]})]}),s.jsx("button",{className:"px-2 py-1 rounded-lg border border-base-border bg-base-card text-xs",onClick:()=>e(r.snapshot),children:"View"})]},r.id))})]})},Xx=({questions:e,answers:t,skipped:n,onBack:r,onRetake:i,fromHistory:o=!1})=>{const a=Ze(),l=()=>{o?a("/profile/history",{replace:!0}):r?r():a(-1)},c=e.reduce((f,p,j)=>f+(t[j]===p.answerIndex?1:0),0),u=(n==null?void 0:n.filter(Boolean).length)||0,h=e.length-c-u;return s.jsxs("div",{className:"mt-2 card rounded-3xl p-5 w-full max-w-none mx-auto pb-24",children:[s.jsxs("div",{className:"flex items-center justify-between mb-4",children:[s.jsx("button",{className:"px-3 py-1.5 rounded-xl border border-base-border bg-white/5",onClick:l,children:"← Back"}),s.jsx("h2",{className:"text-lg font-semibold",children:"Review Answers"}),s.jsx("div",{className:"w-16"})," "]}),s.jsxs("div",{className:"grid grid-cols-3 gap-2 mb-4",children:[s.jsxs("div",{className:"rounded-xl bg-green-600/10 border border-green-500/30 p-2 text-center",children:[s.jsx("div",{className:"text-xs text-green-400",children:"Correct"}),s.jsx("div",{className:"text-lg font-bold text-green-400",children:c})]}),s.jsxs("div",{className:"rounded-xl bg-red-600/10 border border-red-500/30 p-2 text-center",children:[s.jsx("div",{className:"text-xs text-red-400",children:"Incorrect"}),s.jsx("div",{className:"text-lg font-bold text-red-400",children:h})]}),s.jsxs("div",{className:"rounded-xl bg-amber-600/10 border border-amber-500/30 p-2 text-center",children:[s.jsx("div",{className:"text-xs text-amber-400",children:"Skipped"}),s.jsx("div",{className:"text-lg font-bold text-amber-400",children:u})]})]}),s.jsx("ol",{className:"space-y-4",children:e.map((f,p)=>{const j=t[p],v=!j&&j!==0,k=j===f.answerIndex;return s.jsxs("li",{className:"rounded-2xl border border-base-border bg-white/5 p-4 md:p-5",children:[s.jsxs("div",{className:"flex items-start justify-between mb-3",children:[s.jsxs("div",{className:"flex-1",children:[s.jsxs("div",{className:"text-sm md:text-base font-medium",children:["Q",p+1,". ",f.prompt]}),f.category&&s.jsxs("div",{className:"text-xs text-base-muted mt-1",children:["Category: ",f.category," • Difficulty: ",f.difficulty||"Medium"]})]}),s.jsx("div",{className:"ml-2",children:v?s.jsx("span",{className:"px-2 py-1 rounded text-xs bg-amber-600/20 text-amber-400",children:"Skipped"}):k?s.jsx("span",{className:"px-2 py-1 rounded text-xs bg-green-600/20 text-green-400",children:"✓ Correct"}):s.jsx("span",{className:"px-2 py-1 rounded text-xs bg-red-600/20 text-red-400",children:"✗ Wrong"})})]}),s.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-3",children:f.options.map((R,g)=>{const m=j===g,y=g===f.answerIndex;let S="w-full text-left px-3 py-2 rounded-xl border transition-all ";return y?S+="bg-green-600/20 border-green-500/50 text-green-300":m&&!y?S+="bg-red-600/20 border-red-500/50 text-red-300":S+="bg-base-bg/40 border-base-border text-base-muted",s.jsxs("div",{className:S,children:[s.jsxs("span",{className:"font-semibold mr-2",children:[["A","B","C","D"][g],"."]}),R,y&&s.jsx("span",{className:"ml-2 text-green-400",children:"✓"}),m&&!y&&s.jsx("span",{className:"ml-2 text-red-400",children:"✗"})]},g)})}),f.explanation&&s.jsxs("div",{className:"mt-3 p-3 rounded-xl bg-white/5 border border-base-border",children:[s.jsx("div",{className:"text-xs font-semibold text-brand-blue mb-1",children:"Explanation:"}),s.jsx("div",{className:"text-sm text-base-muted",children:f.explanation})]})]},f.id||p)})}),s.jsxs("div",{className:"mt-6 flex gap-2 justify-center sticky bottom-4",children:[s.jsx("button",{className:"px-4 py-2.5 rounded-xl border border-base-border bg-base-card backdrop-blur",onClick:l,children:"Back to Results"}),i&&s.jsx("button",{className:"px-4 py-2.5 rounded-xl bg-gradient-to-r from-brand-blue to-brand-purple text-white font-medium",onClick:i,children:"Retake Quiz"})]})]})},du="qp_resume",fu="qp_mistakes",mu="qp_stats",pu="qp_lastset",hu="qp_recent",Lo="qp_review_snapshot",Kx=50,Ir=(e="")=>e.replace(/-/g," ").replace(/\b\w/g,t=>t.toUpperCase()),Mo=(e="")=>e.toLowerCase().trim().replace(/[^\w\s-]/g,"").replace(/\s+/g,"-"),Jx=(e,t)=>e.slice().sort(()=>Math.random()-.5).slice(0,t),rm=e=>{const t=e.slice();for(let n=t.length-1;n>0;n--){const r=Math.floor(Math.random()*(n+1));[t[n],t[r]]=[t[r],t[n]]}return t},Zx=(e,t,n)=>Math.max(t,Math.min(n,e)),qn=(e,t)=>{try{const n=localStorage.getItem(e);return n?JSON.parse(n):t}catch{return t}};async function eg(){const e="/data/quiz_questions_bank.csv",t=await fetch(e);if(!t.ok)throw new Error(`CSV not found at ${e}`);const n=await t.text(),{data:r}=to.parse(n,{header:!0,skipEmptyLines:!0,transformHeader:o=>String(o).trim().toLowerCase()}),i={a:0,b:1,c:2,d:3};return r.map((o,a)=>{var p;const l=[o.option1,o.option2,o.option3,o.option4].map(j=>(j??"").trim());if(l.some(j=>!j))return null;let c=-1;const u=String(o.answer??"").trim();if(i[u.toLowerCase()]!==void 0)c=i[u.toLowerCase()];else{const j=l.findIndex(v=>v.toLowerCase()===u.toLowerCase());c=j>=0?j:0}const h=String(o.category??o.subject??"General Knowledge").trim(),f=String(o.difficulty??"medium").toLowerCase().trim();return{id:((p=o.id)==null?void 0:p.trim())||`q_${a}`,category:h,difficulty:f,prompt:String(o.question??"").trim(),options:l,answerIndex:c,explanation:String(o.explanation??"").trim()}}).filter(Boolean)}function xu(e,{categorySlug:t,difficulty:n,count:r}){console.log("=== BUILD SESSION DEBUG ==="),console.log("categorySlug:",t),console.log("difficulty:",n),console.log("count:",r),console.log("Total questions available:",e.length);const o=t==="mixed"?()=>!0:h=>Mo(h.category)===t,a=n?h=>(h.difficulty||"medium")===n:()=>!0,l=e.filter(h=>o(h)&&a(h));if(console.log("Filtered pool size:",l.length),console.log("Sample categories from all questions:",[...new Set(e.slice(0,10).map(h=>`"${h.category}" -> "${Mo(h.category)}"`))]),l.length===0)return console.error("No questions match the filter criteria!"),console.log("Available categories:",[...new Set(e.map(h=>Mo(h.category)))]),{questions:[],poolSize:0};const u=Jx(l,Math.min(r,l.length)).map(h=>{const f=rm([0,1,2,3]),p=f.map(v=>h.options[v]),j=f.indexOf(h.answerIndex);return{...h,options:p,answerIndex:j}});return console.log("Final questions:",u.length),{questions:u,poolSize:l.length}}function tg(){const e=Ze(),{category:t}=jh(),n=Mt();Al();const r=new URLSearchParams(n.search),i=r.get("review")==="1",o=r.get("retake")==="1",a=n.state||{},l=a.mode||"quiz",c=String(a.difficulty||"medium").toLowerCase(),u=Zx(Number(a.count||10),1,50),h=a.timer||{type:"per_q",seconds:45},f=!!a.resume;a.daily,a.source;const p=o||!!a.retake,j=!!a.fromHistory,v=l==="practice";console.log("Quiz Component - Mode Detection:",{routerState:a,mode:l,isPractice:v,location:n.pathname,state:n.state});const[k,R]=d.useState([]),[g,m]=d.useState(!0),[y,S]=d.useState(""),[P,F]=d.useState({questions:[]}),[N,x]=d.useState("quiz"),[b,w]=d.useState(null),[C,M]=d.useState(null),[W,J]=d.useState(0);d.useEffect(()=>{let E=!0;return(async()=>{try{const z=await eg();if(!E)return;R(z)}catch(z){console.error(z),S("Failed to load questions. Check /public/data/quiz_questions_bank.csv")}finally{m(!1)}})(),()=>{E=!1}},[]),d.useEffect(()=>{if(i)try{const E=localStorage.getItem(Lo);if(!E)return;const z=JSON.parse(E);w({questions:(z==null?void 0:z.questions)||[],answers:(z==null?void 0:z.answers)||[],skipped:(z==null?void 0:z.skipped)||[]}),x("review")}catch(E){console.error("Error loading review snapshot:",E)}},[i]),d.useEffect(()=>{var z;if(console.log("=== SESSION INIT DEBUG ==="),console.log("isReview:",i),console.log("loading:",g),console.log("error:",y),console.log("allQuestions.length:",k.length),console.log("category:",t),console.log("mode:",l),console.log("isPractice:",v),i||g||y){console.log("Exiting early - isReview/loading/error");return}if(!k.length){console.log("Exiting early - no questions loaded");return}if(f){console.log("Checking for resume...");const O=qn(du,null);if((O==null?void 0:O.slug)===t&&(O!=null&&O.inProgress)){console.log("Resuming saved session");const D=xu(k,{categorySlug:t,difficulty:c,count:O.total||u});F(D),M(O.startedAt||Date.now()),J(0);return}}console.log("Building fresh session with params:",{categorySlug:t,difficulty:c,count:u});const E=xu(k,{categorySlug:t,difficulty:c,count:u});if(console.log("Built session result:",{questionsCount:E.questions.length,poolSize:E.poolSize,firstQuestion:(z=E.questions[0])==null?void 0:z.prompt}),E.questions.length===0){console.error("No questions found for category:",t,"difficulty:",c),S(`No questions found for category "${Ir(t)}" with difficulty "${c}"`);return}F(E),M(Date.now()),J(0)},[g,y,k,t,c,u,f,i,l]),d.useEffect(()=>{if(N!=="quiz"||!C)return;const E=setInterval(()=>{J(Date.now()-C)},1e3);return()=>clearInterval(E)},[N,C]);const A=d.useCallback(E=>{if(console.log("Quiz completed - Mode:",l,"isPractice:",v,"Results:",E),!E||!E.questions){console.error("Invalid results object:",E);return}const z=E.questions.filter((D,Y)=>E.answers[Y]!==null&&E.answers[Y]!==D.answerIndex).map(D=>D.id);try{const D=qn(fu,[]),Y=Array.from(new Set([...z,...D]));localStorage.setItem(fu,JSON.stringify(Y))}catch(D){console.error("Error saving mistakes:",D)}try{const D=qn(mu,{sessions:[]});D.sessions.push({cat:Ir(t),mode:v?"practice":"quiz",total:E.total,correct:E.correct,skipped:E.skipped.filter(Boolean).length,ms:W,timestamp:Date.now(),earnedXP:v?0:E.correct*10,earnedCoins:v?0:E.correct*5}),localStorage.setItem(mu,JSON.stringify(D))}catch(D){console.error("Error saving stats:",D)}const O={ts:Date.now(),slug:t,categoryLabel:Ir(t),mode:v?"practice":"quiz",difficulty:c,total:E.total,timer:v?null:h,ms:W,attempted:E.answers.filter(D=>D!==null).length,correct:E.correct,questions:E.questions,answers:E.answers,skipped:E.skipped,isPractice:v};try{localStorage.setItem(pu,JSON.stringify(O)),localStorage.setItem(Lo,JSON.stringify({questions:E.questions,answers:E.answers,skipped:E.skipped}));const D=qn(hu,[]),te=[{id:O.ts,ts:O.ts,cat:O.categoryLabel,slug:t,mode:v?"Practice":"Quiz",total:E.total,correct:E.correct,ms:W,snapshot:O},...D].slice(0,Kx);localStorage.setItem(hu,JSON.stringify(te))}catch(D){console.error("Error saving snapshot:",D)}localStorage.removeItem(du),w({...E,category:Ir(t),mode:v?"practice":"quiz",elapsedMs:W,isPractice:v,hasTimer:!v,earnedXP:v?0:E.correct*10,earnedCoins:v?0:E.correct*5}),x("results")},[t,l,h,W,v]),H=d.useCallback(()=>{j?e("/profile/history",{replace:!0,state:null}):e("/")},[j,e]),Q=d.useCallback(()=>{console.log("Retake requested - Mode:",l,"isPractice:",v);const E=qn(pu,null);if(!E||E.slug!==t){e(`/quiz/${t}?r=${Date.now()}`,{replace:!0,state:{mode:v?"practice":"quiz",difficulty:c,count:u,timer:v?null:h,retake:!0}});return}const z=E.questions.map(O=>{const D=rm([0,1,2,3]);return{...O,options:D.map(Y=>O.options[Y]),answerIndex:D.indexOf(O.answerIndex)}});F({questions:z,poolSize:z.length}),M(Date.now()),J(0),x("quiz"),window.scrollTo(0,0)},[t,l,c,u,h,e,v]),L=d.useCallback((E=null)=>{if(E)w(E);else if(!b){const z=qn(Lo,null);z&&w({questions:z.questions||[],answers:z.answers||[],skipped:z.skipped||[]})}x("review")},[b]),T=d.useCallback(()=>{j?e("/profile/history",{replace:!0}):x("results")},[j,e]);return g?s.jsx("div",{className:"fixed inset-0 bg-inherit text-white flex items-center justify-center",children:s.jsx("div",{className:"text-sm text-base-muted",children:"Loading questions…"})}):y?s.jsx("div",{className:"fixed inset-0 bg-inherit text-white flex items-center justify-center",children:s.jsx("div",{className:"text-sm text-red-400",children:y})}):(console.log("Render - Current view:",N,"Session questions:",P.questions.length,"Mode:",l,"isPractice:",v),s.jsx("div",{className:"fixed inset-0 bg-inherit text-white z-0 overflow-x-hidden max-w-[100vw]",children:s.jsxs("div",{className:"h-full overflow-y-auto overscroll-y-none overflow-x-hidden touch-pan-y px-0 pt-[max(env(safe-area-inset-top),72px)] pb-[clamp(12px,env(safe-area-inset-bottom),20px)]",children:[N==="quiz"&&P.questions.length>0&&s.jsx(Qx,{session:P,mode:v?"practice":"quiz",category:Ir(t),difficulty:c,timerConfig:v?null:h,onComplete:A,onQuit:H,isPractice:v}),N==="results"&&b&&s.jsx(Yx,{results:b,onRetake:Q,onReview:()=>L(b),isRetake:p,isPractice:v}),N==="review"&&b&&s.jsx(Xx,{questions:b.questions||[],answers:b.answers||[],skipped:b.skipped||[],onBack:T,onRetake:Q,fromHistory:j,isPractice:v})]})}))}const sn=[{label:"General Knowledge",slug:"general-knowledge",color:"#7C3AED",soon:!1},{label:"Current Affairs",slug:"current-affairs",color:"#2563EB",soon:!1},{label:"Fun Facts",slug:"fun-facts",color:"#EF4444",soon:!1},{label:"Science",slug:"science",color:"#10B981",soon:!1},{label:"History",slug:"history",color:"#F59E0B",soon:!0},{label:"Geography",slug:"geography",color:"#FACC15",soon:!0},{label:"Cat 1",slug:"cat-1",color:"#06B6D4",soon:!0},{label:"Cat 2",slug:"cat-2",color:"#D946EF",soon:!0}],_n=360/sn.length,ng=42,Fo=3e3,gu=10,vu=260,rg="cubic-bezier(.15,.7,.1,1)",sg="cubic-bezier(.2,.7,.2,1)",rn=5,ig=5,og=(e="")=>String(e).toLowerCase().trim().replace(/[^\w\s-]/g,"").replace(/\s+/g,"-");function ag({muted:e=!1,size:t=18}){return s.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24","aria-hidden":"true",children:[s.jsx("path",{d:"M3 9h4l5-4v14l-5-4H3z",fill:"currentColor"}),!e&&s.jsxs(s.Fragment,{children:[s.jsx("path",{d:"M16 8c1.5 1.5 1.5 6 0 7.5",stroke:"currentColor",strokeWidth:"2",fill:"none",strokeLinecap:"round"}),s.jsx("path",{d:"M19 6c3 3 3 10 0 13",stroke:"currentColor",strokeWidth:"2",fill:"none",strokeLinecap:"round"})]}),e&&s.jsx("line",{x1:"3",y1:"21",x2:"21",y2:"3",stroke:"#EF4444",strokeWidth:"2.5",strokeLinecap:"round"})]})}function lg({q:e,locked:t,onPick:n,result:r}){if(!e)return null;const i=[e.option1,e.option2,e.option3,e.option4];return s.jsxs("div",{className:"mt-5 rounded-3xl bg-white/5 border border-white/10 p-4",children:[s.jsx("div",{className:"text-sm text-base-muted mb-1",children:"Quick question"}),s.jsx("div",{className:"text-xl font-semibold mb-4",children:e.question}),i.map((o,a)=>{const l=r&&o===e.answer,c=r&&r.pick===o&&o!==e.answer;return s.jsx("button",{disabled:t||!!r,onClick:()=>n(o),className:["w-full text-left px-4 py-2 rounded-xl mb-2 border transition",!r&&!t?"bg-white/5 hover:bg-white/10 border-white/10":"bg-white/5 border-white/10",l?"bg-green-600/20 border-green-400/60 text-green-200":"",c?"bg-red-600/20 border-red-400/60 text-red-200":""].join(" "),children:o},a)}),r&&s.jsxs("div",{className:"mt-3 text-sm",children:[r.correct?s.jsx("span",{className:"text-green-400 font-medium",children:"✅ Correct!"}):s.jsxs("span",{className:"text-red-400 font-medium",children:["❌ Not quite. Answer: ",s.jsx("b",{children:e.answer})]}),e.explanation&&s.jsxs("div",{className:"text-xs text-base-muted mt-1",children:["Tip: ",e.explanation]})]})]})}function cg(){const e=Ze(),[t]=sr("/sounds/correct.mp3",{volume:.7}),[n]=sr("/sounds/wrong.mp3",{volume:.7}),[r,i]=d.useState(()=>[{name:"Player 1",color:"#60A5FA",scores:Array(rn).fill(null)},{name:"Player 2",color:"#F472B6",scores:Array(rn).fill(null)}]),[o,a]=d.useState(0),[l,c]=d.useState(1),u=r.reduce((I,q)=>I+q.scores.reduce((re,V)=>re+(V??0),0),0),[h,f]=d.useState(!0),p=d.useRef(null);d.useEffect(()=>{const I=new Audio("/sounds/spin.mp3");return I.loop=!0,I.volume=.7,p.current=I,()=>{try{I.pause(),I.src=""}catch{}}},[]);const j=()=>{if(h&&p.current)try{p.current.currentTime=0,p.current.play()}catch{}},v=()=>{if(p.current)try{p.current.pause(),p.current.currentTime=0}catch{}},[k,R]=d.useState(0),[g,m]=d.useState("none"),[y,S]=d.useState(!1),[P,F]=d.useState(null),[N,x]=d.useState(null),b=d.useMemo(()=>typeof window<"u"?window.matchMedia("(prefers-reduced-motion: reduce)").matches:!1,[]),[w,C]=d.useState([]);d.useEffect(()=>{(async()=>{try{const I=await fetch("/data/quiz_questions_bank.csv").then(G=>G.text()),{data:q}=to.parse(I,{header:!0,skipEmptyLines:!0,transformHeader:G=>String(G).trim().toLowerCase()}),re={a:0,b:1,c:2,d:3},V=q.map((G,oe)=>{var se;const $=(G.question??"").trim();if(!$)return null;const B=[G.option1,G.option2,G.option3,G.option4].map(_=>String(_??"").trim());if(B.some(_=>!_))return null;let X=String(G.answer??"").trim(),ue=re[X.toLowerCase()];if(ue===void 0){const _=B.findIndex(Z=>Z.toLowerCase()===X.toLowerCase());ue=_>=0?_:0}const ee=B[ue];return{id:((se=G.id)==null?void 0:se.trim())||`ps_${oe}`,question:$,option1:B[0],option2:B[1],option3:B[2],option4:B[3],answer:ee,explanation:String(G.explanation??"").trim(),catSlug:og(G.category??G.subject??"general knowledge"),difficulty:String(G.difficulty??"medium").toLowerCase().trim()}}).filter(Boolean);C(V)}catch{C([])}})()},[]);const[M,W]=d.useState(null),[J,A]=d.useState(null),[H,Q]=d.useState(!1),L=I=>(I%360+360)%360,T=I=>L(I),E=l>rn;function z(){if(r.length>=4)return;const I=["#60A5FA","#F472B6","#F59E0B","#34D399","#F87171","#A78BFA"],q=I[(r.length*2+1)%I.length];i(re=>[...re,{name:`Player ${re.length+1}`,color:q,scores:Array(rn).fill(null)}])}function O(){r.length<=2||(i(I=>I.slice(0,-1)),a(I=>Math.min(I,r.length-2)))}function D(I){i(q=>q.map((re,V)=>V===o?{...re,scores:re.scores.map((G,oe)=>oe===l-1?I:G)}:re))}function Y(){if(y||E)return;F(null),x(null),W(null),A(null),S(!0),j();const I=Math.floor(Math.random()*sn.length),q=sn[I],re=_n*.28,V=(Math.random()*2-1)*re,G=L(k),oe=180,B=I*_n+_n/2+V;let X=T(B-G-oe);const ue=ng*360+X,ee=k+ue+gu;m(`transform ${b?800:Fo}ms ${rg}`),R(ee);try{navigator.vibrate&&!b&&navigator.vibrate([10,40,10])}catch{}setTimeout(()=>{m(`transform ${b?160:vu}ms ${sg}`),R(se=>se-gu)},b?800:Fo),setTimeout(()=>{if(v(),S(!1),F(I),x(q.color),q.soon)return;const se=w.filter(Z=>Z.catSlug===q.slug&&Z.difficulty==="easy"),_=se.length?se:w.filter(Z=>Z.catSlug===q.slug);if(_.length){const Z=_[Math.floor(Math.random()*_.length)];W(Z)}else W({question:"No question found for this category yet. Try re-spinning!",option1:"Okay",option2:"Okay",option3:"Okay",option4:"Okay",answer:"Okay",explanation:""})},(b?800:Fo)+(b?160:vu)+40)}function te(I){if(!M||J)return;const q=I===M.answer;if(A({correct:q,pick:I}),q){t(),Q(!0),setTimeout(()=>Q(!1),900);try{navigator.vibrate&&navigator.vibrate([8,16])}catch{}D(ig)}else{n();try{navigator.vibrate&&navigator.vibrate([4])}catch{}D(0)}}function ae(){const I=(o+1)%r.length,q=I===0?l+1:l;a(I),c(q),F(null),x(null),W(null),A(null)}function ne(){const I=r.map(V=>V.scores.reduce((G,oe)=>G+(oe??0),0)),q=Math.max(...I),re=r.filter((V,G)=>I[G]===q).map(V=>V.name).join(", ");alert(`${re} win${re.includes(",")?"":"s"} the pot of ${u} coins! 🎉`),e("/play")}return s.jsxs("div",{className:"min-h-screen bg-black text-white",children:[H&&s.jsx(tm,{numberOfPieces:120,recycle:!1}),s.jsxs("div",{className:"mx-auto max-w-md px-5 pt-[calc(env(safe-area-inset-top)+1.25rem)] pb-[calc(5.25rem+env(safe-area-inset-bottom))]",children:[s.jsxs("header",{className:"flex items-center justify-between mb-4",children:[s.jsx("button",{onClick:()=>e("/play"),className:"h-10 w-10 grid place-items-center rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition","aria-label":"Back",children:"←"}),s.jsxs("div",{className:"text-center",children:[s.jsx("h1",{className:"text-2xl font-bold",children:"Party Spin"}),s.jsx("p",{className:"text-sm text-base-muted",children:"Pass & play • Winner takes the pot"})]}),s.jsx("button",{onClick:()=>f(I=>!I),className:"h-10 w-10 grid place-items-center rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition","aria-label":h?"Mute sound":"Unmute sound",title:h?"Sound on":"Sound off",children:s.jsx(ag,{muted:!h})})]}),s.jsxs("section",{className:"rounded-2xl border border-white/10 bg-white/5 p-3 mb-4",children:[s.jsxs("div",{className:"flex items-center justify-between mb-2",children:[s.jsxs("div",{className:"text-sm",children:["Round ",s.jsx("b",{children:Math.min(l,rn)}),"/",s.jsx("b",{children:rn})]}),s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx("button",{onClick:z,className:"btn-ghost px-2 py-1 text-sm",children:"+"}),s.jsx("span",{className:"text-sm text-base-muted",children:"Player"}),s.jsx("button",{onClick:O,className:"btn-ghost px-2 py-1 text-sm",children:"−"})]}),s.jsxs("div",{className:"text-sm",children:["Pot: ",s.jsx("b",{className:"text-yellow-300",children:u})," 🪙"]})]}),s.jsx("div",{className:"overflow-x-auto",children:s.jsxs("table",{className:"w-full table-fixed text-sm tracking-tight tabular-nums",children:[s.jsxs("colgroup",{children:[s.jsx("col",{style:{width:"42%"}}),s.jsx("col",{style:{width:"9%"}}),s.jsx("col",{style:{width:"9%"}}),s.jsx("col",{style:{width:"9%"}}),s.jsx("col",{style:{width:"9%"}}),s.jsx("col",{style:{width:"9%"}}),s.jsx("col",{style:{width:"13%"}})]}),s.jsx("thead",{children:s.jsxs("tr",{className:"text-base-muted",children:[s.jsx("th",{className:"text-left font-medium py-1 pr-1",children:"Player"}),Array.from({length:rn}).map((I,q)=>s.jsxs("th",{className:"font-medium text-center",children:["R",q+1]},q)),s.jsx("th",{className:"font-medium text-right pr-1",children:"Total"})]})}),s.jsx("tbody",{children:r.map((I,q)=>{const re=I.scores.reduce((G,oe)=>G+(oe??0),0),V=q===o;return s.jsxs("tr",{className:V?"bg-white/6":"",children:[s.jsx("td",{className:"py-1 pr-1",children:s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx("span",{className:"inline-block h-3 w-3 rounded-full shrink-0",style:{background:I.color}}),s.jsx("input",{className:"bg-transparent outline-none font-semibold w-full",value:I.name,onChange:G=>i(oe=>oe.map(($,B)=>B===q?{...$,name:G.target.value}:$))})]})}),I.scores.map((G,oe)=>s.jsx("td",{className:"text-center",children:G===null?"–":G},oe)),s.jsx("td",{className:"text-right pr-1 font-semibold",children:re})]},q)})})]})})]}),s.jsx("section",{className:"flex flex-col items-center",children:s.jsxs("div",{className:"relative w-[320px] h-[320px] md:w-[380px] md:h-[380px] rounded-full select-none",children:[N&&s.jsx("div",{className:"pointer-events-none absolute -inset-2 rounded-full",style:{boxShadow:`0 0 0 6px ${N}33, 0 0 30px 8px ${N}44`}}),s.jsx("div",{className:"absolute inset-0 rounded-full border border-white/10 shadow-2xl bg-black/20 overflow-hidden will-change-transform",style:{transform:`rotate(${k}deg)`,transition:g},"aria-label":"Category wheel",role:"group",children:s.jsxs("svg",{width:"100%",height:"100%",viewBox:"0 0 100 100",className:"block",children:[sn.map((I,q)=>{const re=q*_n,V=re+_n,G=_n>180?1:0,oe=Math.PI*re/180,$=Math.PI*V/180,B=50+50*Math.cos(oe),X=50-50*Math.sin(oe),ue=50+50*Math.cos($),ee=50-50*Math.sin($),se=P===q;return s.jsxs("g",{style:{opacity:P==null?.95:se?1:.78,filter:P!=null&&!se?"blur(0.6px)":"none"},children:[s.jsx("path",{d:`M50,50 L${B},${X} A50,50 0 ${G} 0 ${ue},${ee} Z`,fill:I.color,stroke:se?`${I.color}AA`:"rgba(255,255,255,0.14)",strokeWidth:se?"1.2":"0.6"}),s.jsx("text",{x:"50",y:"50",fill:"#ffffff",fontSize:"4",fontWeight:"700",dominantBaseline:"middle",transform:`rotate(${re+_n/2} 50 50) translate(12 0)`,children:s.jsxs("tspan",{children:[I.label,I.soon?" (soon)":""]})})]},I.slug)}),s.jsx("circle",{cx:"50",cy:"50",r:"9",fill:"rgba(0,0,0,0.55)",stroke:"white",strokeOpacity:"0.25"})]})}),s.jsx("button",{onClick:Y,disabled:y||E,className:["absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2","h-16 w-16 rounded-full grid place-items-center","bg-white text-black font-extrabold shadow-soft transition active:scale-[0.98]",y||E?"opacity-60 cursor-not-allowed":"hover:bg-gray-200"].join(" "),"aria-label":"Spin the wheel",children:"SPIN"}),s.jsx("div",{className:"absolute left-1/2 -translate-x-1/2 -bottom-3 z-20",children:s.jsx("svg",{width:"22",height:"22",viewBox:"0 0 24 24",children:s.jsx("path",{d:"M12 4 L20 20 L4 20 Z",fill:"#ffffff"})})}),P!=null&&!y&&s.jsx("div",{className:"absolute left-1/2 -translate-x-1/2 -bottom-10",children:s.jsxs("div",{className:"px-3 py-1 rounded-full bg-white/10 border border-white/20 text-sm backdrop-blur",children:[s.jsx("span",{className:"inline-block h-2.5 w-2.5 rounded-full mr-2 align-middle",style:{background:sn[P].color}}),sn[P].label]})})]})}),s.jsx("section",{className:"mt-4",children:E?s.jsxs("div",{className:"rounded-2xl border border-white/10 bg-white/5 p-4",children:[s.jsx("div",{className:"text-xl font-semibold mb-2",children:"Match Over"}),s.jsxs("p",{className:"text-sm text-base-muted mb-3",children:["Top score takes the pot of ",s.jsx("b",{className:"text-yellow-300",children:u})," coins."]}),s.jsx("button",{className:"btn-primary w-full",onClick:ne,children:"End match"})]}):P!=null&&sn[P].soon?s.jsxs("div",{className:"rounded-2xl border border-white/10 bg-white/5 p-4",children:[s.jsx("div",{className:"text-lg font-semibold mb-1",children:sn[P].label}),s.jsx("p",{className:"text-sm text-base-muted mb-3",children:"This category is arriving soon. Spin again!"}),s.jsx("button",{className:"btn-primary",onClick:Y,disabled:y,children:"Re-spin"})]}):s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"text-sm text-center text-base-muted mb-1",children:["Turn: ",s.jsx("span",{style:{color:r[o].color},children:r[o].name})," ","| Round ",l,"/",rn]}),s.jsx(lg,{q:M,locked:y||!M,onPick:te,result:J}),J&&s.jsx("div",{className:"mt-3 flex justify-center",children:s.jsx("button",{className:"btn-primary",onClick:ae,children:"Next turn"})})]})})]}),s.jsx("div",{className:"pointer-events-none fixed inset-x-0 bottom-0 bg-[#0B0F1A]",style:{height:"calc(5.25rem + env(safe-area-inset-bottom))"},"aria-hidden":!0})]})}function ug(){const e=Ze(),[t,n]=d.useState(""),[r,i]=d.useState({name:"Nirmal",level:12,xp:2840,nextLevelXp:3e3,coins:1240,rank:23,streak:5,todayQuizzes:3,weeklyXp:450});d.useEffect(()=>{const l=new Date().getHours();l<12?n("Good morning"):l<17?n("Good afternoon"):n("Good evening")},[]);const o=`
    rounded-3xl p-5 text-left text-white 
    transition-all duration-300 ease-out
    active:scale-[0.97] hover:scale-[1.02]
    shadow-[0_8px_32px_rgba(0,0,0,0.3)]
    hover:shadow-[0_12px_48px_rgba(0,0,0,0.4)]
    relative overflow-hidden
    before:absolute before:inset-0 before:bg-white/5 before:opacity-0 
    hover:before:opacity-100 before:transition-opacity before:duration-300
  `,a=r.xp%1e3/10;return s.jsxs("div",{className:"min-h-full bg-[#0B0C10] text-white pt-12 px-3",children:[s.jsxs("div",{className:"mb-6",children:[s.jsxs("div",{className:"flex items-center justify-between mb-4",children:[s.jsxs("div",{children:[s.jsxs("h1",{className:"text-2xl font-bold",children:[t," 👋"]}),s.jsx("p",{className:"text-white/60 text-sm",children:"Ready for today's challenge?"})]}),s.jsx("button",{onClick:()=>e("/profile/settings"),className:"w-12 h-12 rounded-2xl bg-white/10 border border-white/20 grid place-items-center hover:bg-white/20 transition",children:s.jsx("span",{className:"text-xl",children:"⚙️"})})]}),s.jsxs("div",{className:"rounded-3xl bg-gradient-to-r from-slate-800/50 to-slate-900/50 border border-white/10 p-4 backdrop-blur-sm",children:[s.jsxs("div",{className:"flex items-center gap-4 mb-3",children:[s.jsx("div",{className:"w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 grid place-items-center text-2xl font-bold",children:r.name[0]}),s.jsxs("div",{className:"flex-1",children:[s.jsx("div",{className:"text-lg font-semibold",children:r.name}),s.jsxs("div",{className:"text-white/60 text-sm",children:["Level ",r.level]})]}),s.jsxs("div",{className:"text-right",children:[s.jsxs("div",{className:"text-yellow-400 font-bold text-lg",children:[r.coins," 🪙"]}),s.jsxs("div",{className:"text-white/60 text-sm",children:["Rank #",r.rank]})]})]}),s.jsxs("div",{className:"mb-3",children:[s.jsxs("div",{className:"flex justify-between text-xs text-white/60 mb-1",children:[s.jsx("span",{children:"XP Progress"}),s.jsxs("span",{children:[r.xp,"/",r.nextLevelXp]})]}),s.jsx("div",{className:"h-2 bg-white/10 rounded-full overflow-hidden",children:s.jsx("div",{className:"h-full bg-gradient-to-r from-blue-400 to-purple-500 rounded-full transition-all duration-1000 ease-out",style:{width:`${a}%`}})})]}),s.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[s.jsxs("div",{className:"text-center p-2 rounded-xl bg-white/5",children:[s.jsxs("div",{className:"text-orange-400 font-bold text-lg",children:["🔥 ",r.streak]}),s.jsx("div",{className:"text-white/60 text-xs",children:"Day Streak"})]}),s.jsxs("div",{className:"text-center p-2 rounded-xl bg-white/5",children:[s.jsxs("div",{className:"text-green-400 font-bold text-lg",children:["+",r.weeklyXp]}),s.jsx("div",{className:"text-white/60 text-xs",children:"This Week"})]})]})]})]}),s.jsxs("button",{onClick:()=>e("/profile/leaderboard"),className:`${o} w-full mb-4 bg-gradient-to-br from-[#5AA9FF] via-[#6C63FF] to-[#9C6BFF]`,children:[s.jsx("div",{className:"absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-8 translate-x-8 animate-pulse"}),s.jsxs("div",{className:"relative flex items-start justify-between",children:[s.jsxs("div",{children:[s.jsx("div",{className:"text-xs opacity-90 mb-1",children:"🏆 Rank & Coins"}),s.jsx("div",{className:"text-3xl font-extrabold tracking-tight mb-2",children:"LEADERBOARD"}),s.jsxs("div",{className:"text-xs opacity-75 flex items-center gap-2",children:[s.jsx("span",{className:"w-2 h-2 bg-green-400 rounded-full animate-pulse"}),"Weekly reset · Ends in 2d 14h"]})]}),s.jsx("div",{className:"w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm grid place-items-center text-2xl border border-white/30",children:"🏆"})]})]}),s.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[s.jsxs("button",{onClick:()=>e("/profile/history"),className:`${o} bg-gradient-to-br from-[#D19A00] to-[#C94B4B] relative`,children:[s.jsx("div",{className:"absolute top-2 right-2 w-3 h-3 bg-white/20 rounded-full"}),s.jsx("div",{className:"text-3xl mb-3",children:"📊"}),s.jsx("div",{className:"text-sm font-bold mb-1",children:"HISTORY"}),s.jsx("div",{className:"text-[11px] opacity-80",children:"Quizzes & Practice"}),s.jsxs("div",{className:"text-[10px] opacity-60 mt-1",children:["+",r.todayQuizzes," today"]})]}),s.jsxs("button",{onClick:()=>e("/profile/rewards"),className:`${o} bg-gradient-to-br from-[#2EB872] to-[#1EA07A] relative`,children:[s.jsx("div",{className:"absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full animate-bounce"}),s.jsx("div",{className:"text-3xl mb-3",children:"🎁"}),s.jsx("div",{className:"text-sm font-bold mb-1",children:"REWARDS"}),s.jsx("div",{className:"text-[11px] opacity-80",children:"Claim & Redeem"}),s.jsx("div",{className:"text-[10px] opacity-60 mt-1",children:"2 available"})]}),s.jsxs("button",{onClick:()=>e("/profile/badges"),className:`${o} bg-gradient-to-br from-[#E65C00] to-[#F9D423] relative`,children:[s.jsx("div",{className:"absolute -top-1 -right-1 w-6 h-6 bg-purple-600 rounded-full grid place-items-center text-[10px] font-bold animate-pulse",children:"NEW"}),s.jsx("div",{className:"text-3xl mb-3",children:"🏅"}),s.jsx("div",{className:"text-sm font-bold mb-1",children:"BADGES"}),s.jsx("div",{className:"text-[11px] opacity-80",children:"Collectables"}),s.jsx("div",{className:"text-[10px] opacity-60 mt-1",children:"4/15 unlocked"})]}),s.jsxs("button",{onClick:()=>e("/profile/achievements"),className:`${o} bg-gradient-to-br from-[#5D26C1] to-[#A17FE0] relative`,children:[s.jsx("div",{className:"text-3xl mb-3",children:"🎯"}),s.jsx("div",{className:"text-sm font-bold mb-1",children:"ACHIEVEMENTS"}),s.jsx("div",{className:"text-[11px] opacity-80",children:"Milestones"}),s.jsx("div",{className:"text-[10px] opacity-60 mt-1",children:"67% complete"})]})]}),s.jsxs("div",{className:"mt-4 space-y-3",children:[s.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[s.jsx("button",{onClick:()=>e("/profile/streaks"),className:`${o} bg-gradient-to-r from-orange-600/80 to-red-600/80 backdrop-blur-sm border border-orange-500/30`,children:s.jsxs("div",{className:"flex items-center gap-3",children:[s.jsx("div",{className:"text-2xl",children:"🔥"}),s.jsxs("div",{children:[s.jsx("div",{className:"text-sm font-bold",children:"STREAK"}),s.jsxs("div",{className:"text-[11px] opacity-80",children:[r.streak," days strong"]})]})]})}),s.jsx("button",{onClick:()=>e("/profile/quests"),className:`${o} bg-gradient-to-r from-blue-600/80 to-cyan-600/80 backdrop-blur-sm border border-blue-500/30`,children:s.jsxs("div",{className:"flex items-center gap-3",children:[s.jsx("div",{className:"text-2xl",children:"⚡"}),s.jsxs("div",{children:[s.jsx("div",{className:"text-sm font-bold",children:"QUESTS"}),s.jsx("div",{className:"text-[11px] opacity-80",children:"2 active goals"})]})]})})]}),s.jsx("button",{onClick:()=>e("/profile/settings"),className:`${o} w-full bg-gradient-to-r from-slate-700/50 to-slate-800/50 backdrop-blur-sm border border-white/10`,children:s.jsxs("div",{className:"flex items-center justify-between",children:[s.jsxs("div",{className:"flex items-center gap-4",children:[s.jsx("div",{className:"w-12 h-12 rounded-2xl bg-white/10 grid place-items-center text-xl",children:"⚙️"}),s.jsxs("div",{children:[s.jsx("div",{className:"text-sm font-bold",children:"SETTINGS"}),s.jsx("div",{className:"text-[11px] opacity-70",children:"Customize your experience"})]})]}),s.jsx("div",{className:"text-white/40",children:"→"})]})})]}),s.jsx("div",{className:"h-6"})]})}const Dr="🪙",Io={global:[{rank:1,name:"Bryan Wolf",handle:"@bryan",score:43,avatar:"/profile/rank1.png",trend:"+5",streak:12,country:"🇺🇸"},{rank:2,name:"Meghan Jess…",handle:"@meghan",score:40,avatar:"/profile/rank2.png",trend:"+2",streak:8,country:"🇨🇦"},{rank:3,name:"Alex Turner",handle:"@alex",score:38,avatar:"/profile/rank3.png",trend:"±0",streak:15,country:"🇬🇧"},{rank:4,name:"Marsha Fisher",handle:"@marsha",score:36,trend:"-1",streak:5,country:"🇦🇺"},{rank:5,name:"Juanita Cormier",handle:"@juanita",score:35,trend:"+1",streak:3,country:"🇲🇽"},{rank:6,name:"You",handle:"@you",score:34,you:!0,avatar:"/profile/avatar.png",trend:"+3",streak:7,country:"🇮🇳"},{rank:7,name:"Tamara Schmidt",handle:"@tamara",score:33,trend:"-2",streak:2,country:"🇩🇪"},{rank:8,name:"Ricardo Veum",handle:"@ricardo",score:32,trend:"+1",streak:4,country:"🇧🇷"}],friends:[{rank:1,name:"You",handle:"@you",score:34,you:!0,avatar:"/profile/avatar.png",trend:"+2",streak:7,country:"🇮🇳"},{rank:2,name:"Sarah Chen",handle:"@sarah",score:31,trend:"-1",streak:4,country:"🇸🇬",friend:!0},{rank:3,name:"Mike Johnson",handle:"@mike",score:29,trend:"+3",streak:2,country:"🇺🇸",friend:!0},{rank:4,name:"Priya Sharma",handle:"@priya",score:27,trend:"±0",streak:5,country:"🇮🇳",friend:!0},{rank:5,name:"David Kim",handle:"@david",score:25,trend:"+1",streak:3,country:"🇰🇷",friend:!0},{rank:6,name:"Emma Wilson",handle:"@emma",score:23,trend:"-2",streak:1,country:"🇬🇧",friend:!0}],india:[{rank:1,name:"Rohit Sharma",handle:"@rohit",score:45,trend:"+4",streak:10,country:"🇮🇳"},{rank:2,name:"Priya Patel",handle:"@priya",score:42,trend:"+1",streak:8,country:"🇮🇳"},{rank:3,name:"You",handle:"@you",score:34,you:!0,avatar:"/profile/avatar.png",trend:"+3",streak:7,country:"🇮🇳"},{rank:4,name:"Arjun Singh",handle:"@arjun",score:32,trend:"-1",streak:5,country:"🇮🇳"},{rank:5,name:"Kavya Reddy",handle:"@kavya",score:30,trend:"+2",streak:3,country:"🇮🇳"},{rank:6,name:"Vikram Gupta",handle:"@vikram",score:28,trend:"±0",streak:4,country:"🇮🇳"}]},Qs=[{name:"Diamond",min:40,color:"from-cyan-400 to-blue-600",icon:"💎"},{name:"Gold",min:30,color:"from-yellow-400 to-orange-500",icon:"🥇"},{name:"Silver",min:20,color:"from-gray-300 to-gray-500",icon:"🥈"},{name:"Bronze",min:10,color:"from-orange-600 to-red-600",icon:"🥉"}];function dg(){var h;const e=Ze(),[t,n]=d.useState({days:2,hours:14,minutes:17}),[r,i]=d.useState("global"),o=Io[r]||Io.global,a=o.find(f=>f.you),l=o.slice(0,3),c=o.slice(3);d.useEffect(()=>{const f=p=>{p.preventDefault(),e(-1)};return window.addEventListener("popstate",f),()=>{window.removeEventListener("popstate",f)}},[e]),d.useEffect(()=>{const f=setInterval(()=>{n(p=>p.minutes>0?{...p,minutes:p.minutes-1}:p.hours>0?{...p,hours:p.hours-1,minutes:59}:p.days>0?{...p,days:p.days-1,hours:23,minutes:59}:p)},6e4);return()=>clearInterval(f)},[]);const u=f=>{const p=Math.max(...o.map(v=>v.score)),j=f/p*100;return j>=90?Qs[0]:j>=70?Qs[1]:j>=40?Qs[2]:Qs[3]};return s.jsxs("div",{className:"min-h-screen bg-black text-white pt-12",children:[s.jsxs("div",{className:"flex items-center justify-between mb-5",children:[s.jsx("button",{onClick:()=>e(-1),className:"px-3 py-1.5 rounded-xl border border-white/10 bg-white/5 text-sm hover:bg-white/10 transition",children:"← Back"}),s.jsxs("div",{className:"text-center",children:[s.jsx("div",{className:"text-lg font-bold",children:"🏆 Leaderboard"}),s.jsxs("div",{className:"text-xs text-white/60",children:["Ends in ",t.days,"d ",t.hours,"h ",t.minutes,"m"]})]}),s.jsx("button",{className:"px-3 py-1.5 rounded-xl border border-white/10 bg-white/5 text-sm hover:bg-white/10 transition",children:"📊"})]}),s.jsxs("div",{className:`mb-5 rounded-2xl bg-gradient-to-r ${u(a==null?void 0:a.score).color} p-4 text-center relative overflow-hidden`,children:[s.jsx("div",{className:"absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -translate-y-10 translate-x-10 animate-pulse"}),s.jsx("div",{className:"absolute bottom-0 left-0 w-16 h-16 bg-white/5 rounded-full translate-y-8 -translate-x-8"}),s.jsxs("div",{className:"relative z-10",children:[s.jsx("div",{className:"text-2xl mb-1",children:u(a==null?void 0:a.score).icon}),s.jsxs("div",{className:"text-sm font-bold text-white",children:[u(a==null?void 0:a.score).name," League"]}),s.jsx("div",{className:"text-xs text-white/80",children:r==="friends"?"Competing with friends!":"You're competing with the best!"})]})]}),s.jsx("div",{className:"flex gap-2 mb-5",children:[{key:"global",label:"🌍 Global",count:"10M+"},{key:"friends",label:"👥 Friends",count:Io.friends.length},{key:"india",label:"🇮🇳 India",count:"2.5M"}].map(f=>s.jsxs("button",{onClick:()=>i(f.key),className:`flex-1 px-2 py-2 rounded-xl text-xs font-semibold transition-all duration-300 ${r===f.key?"bg-lime-500 text-black shadow-lg scale-105":"border border-white/10 bg-white/5 hover:bg-white/10"}`,children:[s.jsx("div",{children:f.label}),s.jsx("div",{className:`text-[10px] ${r===f.key?"text-black/70":"text-white/60"}`,children:f.count})]},f.key))}),s.jsx("div",{className:"mb-5 rounded-2xl bg-gradient-to-r from-lime-500/20 to-green-500/20 border border-lime-500/30 p-3",children:s.jsxs("div",{className:"flex items-center justify-between",children:[s.jsxs("div",{className:"flex items-center gap-3",children:[s.jsx("div",{className:"w-10 h-10 rounded-xl bg-lime-500/20 grid place-items-center text-lg",children:"🧑‍💻"}),s.jsxs("div",{children:[s.jsx("div",{className:"font-bold text-lime-400 text-sm",children:"Your Position"}),s.jsxs("div",{className:"text-xs text-white/70 flex items-center gap-2",children:[s.jsxs("span",{children:["Rank #",a==null?void 0:a.rank]}),s.jsx("span",{className:`px-1.5 py-0.5 rounded-full text-[9px] font-bold ${a!=null&&a.trend.startsWith("+")?"bg-green-500/20 text-green-400":a!=null&&a.trend.startsWith("-")?"bg-red-500/20 text-red-400":"bg-gray-500/20 text-gray-400"}`,children:a==null?void 0:a.trend}),s.jsxs("span",{className:"text-white/50 text-[10px]",children:["in ",r==="global"?"Global":r==="friends"?"Friends":"India"]})]})]})]}),s.jsxs("div",{className:"text-right",children:[s.jsxs("div",{className:"text-lg font-bold text-lime-400",children:[a==null?void 0:a.score," ",Dr]}),s.jsxs("div",{className:"text-xs text-white/60",children:["🔥 ",a==null?void 0:a.streak," streak"]})]})]})}),s.jsxs("div",{className:"mb-6",children:[s.jsx("h3",{className:"text-center text-sm font-semibold text-white/80 mb-4",children:"👑 Hall of Fame"}),s.jsxs("div",{className:"bg-gradient-to-b from-white/5 to-white/10 rounded-2xl p-4 border border-white/10 relative overflow-hidden",children:[s.jsx("div",{className:"absolute top-4 left-6 text-2xl opacity-40 animate-pulse",children:"🏆"}),s.jsx("div",{className:"absolute top-8 right-8 text-lg opacity-40 animate-bounce",style:{animationDelay:"1s"},children:"✨"}),s.jsx("div",{className:"absolute bottom-6 left-12 text-xl opacity-10 animate-pulse",style:{animationDelay:"2s"},children:"🥇"}),s.jsx("div",{className:"absolute bottom-4 right-6 text-lg opacity-40 animate-bounce",style:{animationDelay:"0.5s"},children:"⭐"}),s.jsxs("div",{className:"flex items-end justify-center gap-8 relative z-10",children:[l[1]&&s.jsxs("div",{className:"flex flex-col items-center",children:[s.jsxs("div",{className:"relative mb-2",children:[s.jsx(qs,{src:l[1].avatar,fallback:l[1].name,size:56}),s.jsx("div",{className:"absolute -bottom-1 left-1/2 -translate-x-1/2 w-7 h-7 bg-gradient-to-br from-gray-300 to-gray-500 rounded-full grid place-items-center text-sm font-bold text-black shadow-lg",children:"2"})]}),s.jsx("div",{className:"text-sm font-semibold mb-1 mt-1",children:Hs(l[1].name,8)}),s.jsxs("div",{className:"text-xs text-lime-400 font-bold",children:[l[1].score," ",Dr]})]}),l[0]&&s.jsxs("div",{className:"flex flex-col items-center -mb-3",children:[s.jsxs("div",{className:"relative mb-2",children:[s.jsx(qs,{src:l[0].avatar,fallback:l[0].name,size:72}),s.jsx("div",{className:"absolute -top-3 left-1/2 -translate-x-1/2",children:s.jsx(fg,{})}),s.jsx("div",{className:"absolute -bottom-1 left-1/2 -translate-x-1/2 w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full grid place-items-center text-base font-bold text-black shadow-lg animate-pulse",children:"1"})]}),s.jsx("div",{className:"text-sm font-bold mb-1 mt-1",children:Hs(l[0].name,8)}),s.jsxs("div",{className:"text-sm text-lime-400 font-bold mb-1",children:[l[0].score," ",Dr]}),s.jsx("div",{className:"px-2 py-1 bg-yellow-400/20 rounded-full text-[9px] text-yellow-400 font-bold",children:"CHAMPION"})]}),l[2]&&s.jsxs("div",{className:"flex flex-col items-center",children:[s.jsxs("div",{className:"relative mb-2",children:[s.jsx(qs,{src:l[2].avatar,fallback:l[2].name,size:56}),s.jsx("div",{className:"absolute -bottom-1 left-1/2 -translate-x-1/2 w-7 h-7 bg-gradient-to-br from-orange-600 to-red-600 rounded-full grid place-items-center text-sm font-bold text-white shadow-lg",children:"3"})]}),s.jsx("div",{className:"text-sm font-semibold mb-1 mt-1",children:Hs(l[2].name,8)}),s.jsxs("div",{className:"text-xs text-lime-400 font-bold",children:[l[2].score," ",Dr]})]})]})]})]}),c.length>0&&s.jsxs("div",{className:"rounded-3xl bg-white/5 border border-white/10 p-2 mb-4",children:[s.jsxs("div",{className:"flex justify-between items-center mb-2 px-2",children:[s.jsx("h3",{className:"text-sm font-semibold",children:"Rankings"}),s.jsx("div",{className:"text-xs text-white/60",children:"Live updates"})]}),s.jsx("ul",{className:"space-y-1.5",children:c.map((f,p)=>s.jsxs("li",{className:`flex items-center justify-between px-3 py-2.5 rounded-xl transition-all duration-300 ${f.you?"bg-lime-500/90 text-black shadow-lg shadow-lime-500/20 scale-[1.02]":"bg-white/5 hover:bg-white/10"}`,style:{animationDelay:`${p*100}ms`,animation:"fadeInUp 0.6s ease-out forwards"},children:[s.jsxs("div",{className:"flex items-center gap-2.5",children:[s.jsx(mg,{n:f.rank,you:f.you}),s.jsx(qs,{src:f.avatar,fallback:f.name,size:36}),s.jsxs("div",{className:"flex flex-col leading-tight",children:[s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx("span",{className:"text-sm font-semibold",children:Hs(f.name,12)}),s.jsx("span",{className:"text-xs",children:f.country}),f.friend&&s.jsx("span",{className:"text-[9px] bg-blue-500/20 text-blue-400 px-1 py-0.5 rounded-full",children:"Friend"})]}),s.jsxs("div",{className:`text-xs flex items-center gap-1.5 ${f.you?"text-black/70":"text-white/60"}`,children:[s.jsx("span",{children:f.handle}),s.jsxs("span",{children:["🔥",f.streak]})]})]})]}),s.jsxs("div",{className:"flex flex-col items-end",children:[s.jsxs("div",{className:"flex items-center gap-1 text-sm font-bold",children:[s.jsx("span",{children:f.score}),s.jsx("span",{className:f.you?"opacity-90":"opacity-80",children:Dr})]}),s.jsx("div",{className:`text-xs px-1.5 py-0.5 rounded-full font-bold ${f.trend.startsWith("+")?"bg-green-500/20 text-green-400":f.trend.startsWith("-")?"bg-red-500/20 text-red-400":"bg-gray-500/20 text-gray-400"}`,children:f.trend})]})]},`${r}-${f.rank}`))})]}),a&&a.rank>1&&s.jsxs("div",{className:"mb-4 p-3 rounded-2xl bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 text-center",children:[s.jsx("div",{className:"text-sm font-semibold mb-2",children:"🚀 Climb Higher!"}),s.jsx("div",{className:"text-xs text-white/70 mb-3",children:r==="friends"&&a.rank===1?"🎉 You're #1 among friends!":`You need ${Math.max(0,(((h=o[a.rank-2])==null?void 0:h.score)||0)-a.score+1)} more coins to reach rank #${a.rank-1}`}),!(r==="friends"&&a.rank===1)&&s.jsx("button",{onClick:()=>e("/play"),className:"px-5 py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl text-sm font-bold hover:scale-105 transition-transform",children:"Play Now 🎮"})]}),s.jsx("style",{jsx:!0,children:`
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
      `})]})}function qs({src:e,fallback:t,size:n=56}){const r=pg(t);return s.jsx("div",{className:"grid place-items-center rounded-full bg-white/10 overflow-hidden border-2 border-white/20",style:{width:n,height:n},children:e?s.jsx("img",{src:e,alt:"",className:"w-full h-full object-cover"}):s.jsx("span",{className:"text-sm font-semibold",children:r})})}function fg(){return s.jsxs("div",{className:"w-7 h-5 bg-gradient-to-t from-yellow-400 to-yellow-300 rounded-b-lg shadow-lg relative",children:[s.jsxs("svg",{viewBox:"0 0 100 40",className:"w-full h-full",children:[s.jsx("path",{d:"M15,35 L15,18 L35,28 L50,10 L65,28 L85,18 L85,35 Z",fill:"url(#crownGradient)"}),s.jsx("defs",{children:s.jsxs("linearGradient",{id:"crownGradient",x1:"0%",y1:"0%",x2:"0%",y2:"100%",children:[s.jsx("stop",{offset:"0%",stopColor:"#FCD34D"}),s.jsx("stop",{offset:"100%",stopColor:"#F59E0B"})]})})]}),s.jsx("div",{className:"absolute top-0.5 left-1/2 -translate-x-1/2 w-1 h-1 bg-red-400 rounded-full animate-pulse"})]})}function mg({n:e,you:t}){return s.jsx("div",{className:`w-7 h-7 grid place-items-center rounded-full text-sm font-bold ${t?"bg-black/10 text-black":"bg-white/10 text-white"}`,children:e})}function Hs(e,t=12){return(e==null?void 0:e.length)>t?e.slice(0,t-1)+"…":e}function pg(e=""){var n;const t=e.trim().split(/\s+/);return t.length===1?t[0].slice(0,2).toUpperCase():(t[0][0]+(((n=t[1])==null?void 0:n[0])||"")).toUpperCase()}const hg="qp_recent",xg="qp_review_snapshot",yu=[{id:Date.now()-864e5,type:"quiz",category:"General Knowledge",difficulty:"easy",score:8,total:10,accuracy:80,time:"02:31",ms:151e3,date:"Yesterday",timestamp:Date.now()-864e5,mode:"Quiz"},{id:Date.now()-1728e5,type:"practice",category:"Science",difficulty:"medium",score:12,total:15,accuracy:80,time:"06:02",ms:362e3,date:"2 days ago",timestamp:Date.now()-1728e5,mode:"Practice"},{id:Date.now()-2592e5,type:"quiz",category:"Fun Facts",difficulty:"easy",score:9,total:10,accuracy:90,time:"02:05",ms:125e3,date:"3 days ago",timestamp:Date.now()-2592e5,mode:"Quiz"}];function gg(){const[e,t]=d.useState("quizzes"),[n,r]=d.useState(null),[i,o]=d.useState(!1),[a,l]=d.useState("all"),[c,u]=d.useState("all"),[h,f]=d.useState("date"),[p,j]=d.useState([]),[v,k]=d.useState(!0),R=Ze(),g=N=>{if(!N)return"00:00";const x=Math.floor(N/1e3),b=Math.floor(x/60),w=x%60;return`${String(b).padStart(2,"0")}:${String(w).padStart(2,"0")}`},m=N=>{if(!N)return"Unknown";const x=new Date(N),w=Math.floor((new Date-x)/(1e3*60*60*24));return w===0?"Today":w===1?"Yesterday":w<7?`${w} days ago`:`${["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][x.getMonth()]} ${x.getDate()}`};d.useEffect(()=>{let N=!1;k(!0);const x=C=>{try{return JSON.parse(C)}catch{return null}},b=C=>encodeURIComponent(String(C).trim().toLowerCase().replace(/\s+/g,"-")),w=C=>{var z,O,D,Y;const M=Number(C.ts??C.timestamp??C.id)||Date.now(),W=Number(C.ms)||0,J=Number(C.total)||0,A=Number(C.correct)||0,Q=String(C.mode||"").toLowerCase().includes("practice")?"practice":"quiz",L=((z=C.snapshot)==null?void 0:z.category)||((O=C.snapshot)==null?void 0:O.categoryLabel)||C.cat||C.category||"Unknown",T=((D=C.snapshot)==null?void 0:D.categoryParam)||b(L),E=String(((Y=C.snapshot)==null?void 0:Y.difficulty)||C.difficulty||"medium").toLowerCase();return{id:C.id??M,type:Q,category:L,categoryParam:T,difficulty:E,score:A,total:J,accuracy:J?Math.round(A/J*100):0,time:g(W),ms:W,date:m(M),timestamp:M,snapshot:C.snapshot??null,mode:C.mode||(Q==="practice"?"Practice":"Quiz")}};try{const C=localStorage.getItem(hg),M=C?x(C):null,J=(Array.isArray(M)&&M.length?M:yu).map(w).filter(A=>A&&A.timestamp).sort((A,H)=>H.timestamp-A.timestamp);N||j(J)}catch(C){console.error("Error loading history:",C),N||j(yu)}finally{N||k(!1)}return()=>{N=!0}},[]);const y=d.useMemo(()=>{const N=new Set(p.map(x=>x.category));return Array.from(N)},[p]),S=d.useMemo(()=>{let N=p.filter(x=>e==="quizzes"?x.type==="quiz":x.type==="practice");return a!=="all"&&(N=N.filter(x=>x.category===a)),c!=="all"&&(N=N.filter(x=>x.difficulty===c)),N.sort((x,b)=>h==="date"?b.timestamp-x.timestamp:h==="score"?b.accuracy-x.accuracy:h==="time"?x.ms-b.ms:0),N},[p,e,a,c,h]),P=d.useMemo(()=>{if(S.length===0)return null;const N=S.reduce((C,M)=>C+M.score,0),x=S.reduce((C,M)=>C+M.total,0),b=x?Math.round(N/x*100):0,w=S.reduce((C,M)=>C+M.ms,0);return{count:S.length,avgAccuracy:b,totalTime:g(w),bestScore:Math.max(...S.map(C=>C.accuracy))}},[S]),F=N=>N>=80?"text-green-400":N>=60?"text-blue-400":N>=40?"text-yellow-400":"text-red-400";return v?s.jsx("div",{className:"min-h-full bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900 flex items-center justify-center",children:s.jsx("div",{className:"text-white",children:"Loading history..."})}):s.jsxs("div",{className:"min-h-full bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900 pt-12",children:[s.jsx("div",{className:"",children:s.jsxs("div",{className:"px-4 pt-4 pb-4",children:[s.jsxs("div",{className:"flex items-center justify-between mb-3",children:[s.jsx("button",{onClick:()=>R("/profile",{replace:!0}),className:"px-3 py-1.5 rounded-xl border border-white/20 bg-white/10 text-white text-sm flex items-center gap-1",children:"← Back"}),s.jsx("button",{onClick:()=>o(!i),className:"p-2 rounded-xl border border-white/20 bg-white/10 text-white",children:s.jsx(bg,{})})]}),s.jsx("h1",{className:"text-2xl font-bold text-white mb-1",children:"History"}),s.jsx("p",{className:"text-white/70 text-sm",children:"Track your progress"})]})}),s.jsxs("div",{className:"px-4 pb-20",children:[s.jsx("div",{className:`
             sticky top-0 z-[60] isolate
            -mx-4 px-4
            py-4 mb-2
            bg-gray-900/95
            backdrop-blur-md
            border-b border-white/10
        `,children:s.jsx("div",{className:"flex items-center",children:s.jsx("div",{className:"inline-flex p-1 rounded-2xl bg-white/10 border border-white/20",children:[{value:"quizzes",label:"Quizzes",icon:"🎯"},{value:"practice",label:"Practice",icon:"📝"}].map(N=>s.jsxs("button",{onClick:()=>t(N.value),className:`px-12 py-2 text-sm rounded-xl transition-all duration-200 ${e===N.value?"bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg":"text-white/70 hover:text-white"}`,children:[s.jsx("span",{className:"mr-1",children:N.icon}),N.label]},N.value))})})}),P&&s.jsx("div",{className:"mb-4 p-4 rounded-2xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-white/20",children:s.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-3",children:[s.jsx(Ys,{label:"Total",value:P.count}),s.jsx(Ys,{label:"Avg Score",value:`${P.avgAccuracy}%`,color:F(P.avgAccuracy)}),s.jsx(Ys,{label:"Best Score",value:`${P.bestScore}%`,color:"text-green-400"}),s.jsx(Ys,{label:"Total Time",value:P.totalTime})]})}),i&&s.jsx("div",{className:"mb-4 p-4 rounded-2xl bg-white/10 border border-white/20",children:s.jsxs("div",{className:"space-y-3",children:[s.jsxs("div",{children:[s.jsx("label",{className:"text-xs text-white/60 mb-1 block",children:"Category"}),s.jsxs("select",{value:a,onChange:N=>l(N.target.value),className:"w-full px-3 py-2 rounded-xl bg-black/30 border border-white/20 text-white text-sm",children:[s.jsx("option",{value:"all",children:"All Categories"}),y.map(N=>s.jsx("option",{value:N,children:N},N))]})]}),s.jsxs("div",{className:"flex gap-2",children:[s.jsxs("div",{className:"flex-1",children:[s.jsx("label",{className:"text-xs text-white/60 mb-1 block",children:"Difficulty"}),s.jsxs("select",{value:c,onChange:N=>u(N.target.value),className:"w-full px-3 py-2 rounded-xl bg-black/30 border border-white/20 text-white text-sm",children:[s.jsx("option",{value:"all",children:"All"}),s.jsx("option",{value:"easy",children:"Easy"}),s.jsx("option",{value:"medium",children:"Medium"}),s.jsx("option",{value:"hard",children:"Hard"})]})]}),s.jsxs("div",{className:"flex-1",children:[s.jsx("label",{className:"text-xs text-white/60 mb-1 block",children:"Sort By"}),s.jsxs("select",{value:h,onChange:N=>f(N.target.value),className:"w-full px-3 py-2 rounded-xl bg-black/30 border border-white/20 text-white text-sm",children:[s.jsx("option",{value:"date",children:"Date"}),s.jsx("option",{value:"score",children:"Score"}),s.jsx("option",{value:"time",children:"Time"})]})]})]})]})}),S.length===0?s.jsxs("div",{className:"text-center py-12",children:[s.jsx("div",{className:"text-4xl mb-3",children:"📚"}),s.jsxs("p",{className:"text-white/60",children:["No ",e," history yet"]}),s.jsx("p",{className:"text-white/40 text-sm mt-1",children:"Start playing to see your progress here!"})]}):s.jsx("div",{className:"space-y-3",children:S.map((N,x)=>s.jsx(vg,{item:N,index:x,onClick:()=>r(N)},N.id))})]}),n&&s.jsx(yg,{item:n,onClose:()=>r(null)})]})}function Ys({label:e,value:t,color:n="text-white"}){return s.jsxs("div",{className:"text-center",children:[s.jsx("div",{className:"text-xs text-white/60 mb-1",children:e}),s.jsx("div",{className:`text-lg font-bold ${n}`,children:t})]})}function vg({item:e,index:t,onClick:n}){const r=a=>a>=80?"from-green-500/20 to-green-600/10 border-green-500/30":a>=60?"from-blue-500/20 to-blue-600/10 border-blue-500/30":a>=40?"from-yellow-500/20 to-yellow-600/10 border-yellow-500/30":"from-red-500/20 to-red-600/10 border-red-500/30",o=(a=>{const l=a==null?void 0:a.toLowerCase();return l==="easy"?{bg:"bg-green-500/20",text:"text-green-400",border:"border-green-500/30"}:l==="medium"?{bg:"bg-yellow-500/20",text:"text-yellow-400",border:"border-yellow-500/30"}:l==="hard"?{bg:"bg-red-500/20",text:"text-red-400",border:"border-red-500/30"}:{bg:"bg-gray-500/20",text:"text-gray-400",border:"border-gray-500/30"}})(e.difficulty);return s.jsxs("div",{onClick:n,className:`
        relative rounded-2xl p-4 cursor-pointer
        bg-gradient-to-br ${r(e.accuracy)}
        border transform transition-all duration-300 hover:scale-[1.02]
      `,children:[s.jsxs("div",{className:"flex items-start justify-between mb-3",children:[s.jsxs("div",{className:"flex-1",children:[s.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[s.jsx("span",{className:"text-lg",children:e.type==="quiz"?"🎯":"📝"}),s.jsx("h3",{className:"font-semibold text-white",children:e.category})]}),s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx("span",{className:`px-2 py-0.5 rounded-full text-xs ${o.bg} ${o.text} ${o.border} border`,children:e.difficulty}),s.jsx("span",{className:"text-xs text-white/50",children:e.date})]})]}),s.jsxs("div",{className:"text-right",children:[s.jsxs("div",{className:`text-2xl font-bold ${e.accuracy>=80?"text-green-400":e.accuracy>=60?"text-blue-400":e.accuracy>=40?"text-yellow-400":"text-red-400"}`,children:[e.accuracy,"%"]}),s.jsxs("div",{className:"text-xs text-white/60",children:[e.score,"/",e.total]})]})]}),s.jsxs("div",{className:"flex items-center justify-between text-xs",children:[s.jsxs("div",{className:"flex items-center gap-3 text-white/60",children:[s.jsxs("span",{children:["⏱ ",e.time]}),s.jsx("span",{children:e.mode})]}),s.jsx("span",{className:"text-white/40",children:"Tap to review →"})]})]})}function yg({item:e,onClose:t}){const n=Ze();return d.useEffect(()=>{const r=i=>{i.key==="Escape"&&t()};return document.addEventListener("keydown",r),()=>document.removeEventListener("keydown",r)},[t]),s.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80",onClick:t,children:s.jsxs("div",{className:"w-full max-w-md bg-gray-900 rounded-3xl p-6 border border-white/20",onClick:r=>r.stopPropagation(),children:[s.jsxs("div",{className:"flex items-center justify-between mb-4",children:[s.jsx("h2",{className:"text-xl font-bold text-white",children:"Quiz Details"}),s.jsx("button",{onClick:t,className:"p-2 rounded-xl bg-white/10 hover:bg-white/20 transition-colors text-white",children:"✕"})]}),s.jsxs("div",{className:"space-y-4",children:[s.jsxs("div",{className:"p-4 rounded-2xl bg-white/5 border border-white/10",children:[s.jsxs("div",{className:"flex items-center justify-between mb-2",children:[s.jsx("span",{className:"text-white/60",children:"Category"}),s.jsx("span",{className:"text-white font-medium",children:e.category})]}),s.jsxs("div",{className:"flex items-center justify-between mb-2",children:[s.jsx("span",{className:"text-white/60",children:"Difficulty"}),s.jsx("span",{className:`${e.difficulty==="easy"?"text-green-400":e.difficulty==="medium"?"text-yellow-400":"text-red-400"} font-medium`,children:e.difficulty})]}),s.jsxs("div",{className:"flex items-center justify-between mb-2",children:[s.jsx("span",{className:"text-white/60",children:"Score"}),s.jsxs("span",{className:"text-white font-medium",children:[e.score,"/",e.total]})]}),s.jsxs("div",{className:"flex items-center justify-between mb-2",children:[s.jsx("span",{className:"text-white/60",children:"Accuracy"}),s.jsxs("span",{className:`${e.accuracy>=80?"text-green-400":e.accuracy>=60?"text-blue-400":"text-yellow-400"} font-medium`,children:[e.accuracy,"%"]})]}),s.jsxs("div",{className:"flex items-center justify-between",children:[s.jsx("span",{className:"text-white/60",children:"Time"}),s.jsx("span",{className:"text-white font-medium",children:e.time})]})]}),e.snapshot&&s.jsx("button",{onClick:()=>{t(),localStorage.setItem(xg,JSON.stringify(e.snapshot)),n(`/quiz/${e.categoryParam}/start?review=1&attempt=${e.id}`,{state:{reviewFrom:"history",historyPath:"/profile/history"}})},className:"w-full py-3 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium hover:opacity-90 transition-opacity",children:"Review Answers"}),s.jsx("button",{onClick:()=>{var r;t(),n(`/quiz/${e.categoryParam}/start`,{state:{mode:"quiz",retake:!0,difficulty:e.difficulty,count:e.total,timer:((r=e.snapshot)==null?void 0:r.timer)||{type:"per_q",seconds:45},fromHistory:!0}})},className:"w-full py-3 rounded-2xl border border-white/20 text-white font-medium hover:bg-white/10 transition-colors",children:"Retake Quiz"})]})]})})}function bg(){return s.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:s.jsx("path",{d:"M3 6h18M7 12h10M10 18h4",strokeLinecap:"round",strokeLinejoin:"round"})})}const wg=d.createContext({});function sm(e){const t=d.useRef(null);return t.current===null&&(t.current=e()),t.current}const jg=typeof window<"u",kg=jg?d.useLayoutEffect:d.useEffect,im=d.createContext(null);function Ng(e){return typeof e=="object"&&e!==null}function Sg(e){return Ng(e)&&"offsetHeight"in e}const Cg=d.createContext({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"});class Eg extends d.Component{getSnapshotBeforeUpdate(t){const n=this.props.childRef.current;if(n&&t.isPresent&&!this.props.isPresent){const r=n.offsetParent,i=Sg(r)&&r.offsetWidth||0,o=this.props.sizeRef.current;o.height=n.offsetHeight||0,o.width=n.offsetWidth||0,o.top=n.offsetTop,o.left=n.offsetLeft,o.right=i-o.width-o.left}return null}componentDidUpdate(){}render(){return this.props.children}}function _g({children:e,isPresent:t,anchorX:n,root:r}){const i=d.useId(),o=d.useRef(null),a=d.useRef({width:0,height:0,top:0,left:0,right:0}),{nonce:l}=d.useContext(Cg);return d.useInsertionEffect(()=>{const{width:c,height:u,top:h,left:f,right:p}=a.current;if(t||!o.current||!c||!u)return;const j=n==="left"?`left: ${f}`:`right: ${p}`;o.current.dataset.motionPopId=i;const v=document.createElement("style");l&&(v.nonce=l);const k=r??document.head;return k.appendChild(v),v.sheet&&v.sheet.insertRule(`
          [data-motion-pop-id="${i}"] {
            position: absolute !important;
            width: ${c}px !important;
            height: ${u}px !important;
            ${j}px !important;
            top: ${h}px !important;
          }
        `),()=>{k.contains(v)&&k.removeChild(v)}},[t]),s.jsx(Eg,{isPresent:t,childRef:o,sizeRef:a,children:d.cloneElement(e,{ref:o})})}const Rg=({children:e,initial:t,isPresent:n,onExitComplete:r,custom:i,presenceAffectsLayout:o,mode:a,anchorX:l,root:c})=>{const u=sm(Pg),h=d.useId();let f=!0,p=d.useMemo(()=>(f=!1,{id:h,initial:t,isPresent:n,custom:i,onExitComplete:j=>{u.set(j,!0);for(const v of u.values())if(!v)return;r&&r()},register:j=>(u.set(j,!1),()=>u.delete(j))}),[n,u,r]);return o&&f&&(p={...p}),d.useMemo(()=>{u.forEach((j,v)=>u.set(v,!1))},[n]),d.useEffect(()=>{!n&&!u.size&&r&&r()},[n]),a==="popLayout"&&(e=s.jsx(_g,{isPresent:n,anchorX:l,root:c,children:e})),s.jsx(im.Provider,{value:p,children:e})};function Pg(){return new Map}function Tg(e=!0){const t=d.useContext(im);if(t===null)return[!0,null];const{isPresent:n,onExitComplete:r,register:i}=t,o=d.useId();d.useEffect(()=>{if(e)return i(o)},[e]);const a=d.useCallback(()=>e&&r&&r(o),[o,r,e]);return!n&&r?[!1,a]:[!0]}const Vs=e=>e.key||"";function bu(e){const t=[];return d.Children.forEach(e,n=>{d.isValidElement(n)&&t.push(n)}),t}const Do=({children:e,custom:t,initial:n=!0,onExitComplete:r,presenceAffectsLayout:i=!0,mode:o="sync",propagate:a=!1,anchorX:l="left",root:c})=>{const[u,h]=Tg(a),f=d.useMemo(()=>bu(e),[e]),p=a&&!u?[]:f.map(Vs),j=d.useRef(!0),v=d.useRef(f),k=sm(()=>new Map),[R,g]=d.useState(f),[m,y]=d.useState(f);kg(()=>{j.current=!1,v.current=f;for(let F=0;F<m.length;F++){const N=Vs(m[F]);p.includes(N)?k.delete(N):k.get(N)!==!0&&k.set(N,!1)}},[m,p.length,p.join("-")]);const S=[];if(f!==R){let F=[...f];for(let N=0;N<m.length;N++){const x=m[N],b=Vs(x);p.includes(b)||(F.splice(N,0,x),S.push(x))}return o==="wait"&&S.length&&(F=S),y(bu(F)),g(f),null}const{forceRender:P}=d.useContext(wg);return s.jsx(s.Fragment,{children:m.map(F=>{const N=Vs(F),x=a&&!u?!1:f===m||p.includes(N),b=()=>{if(k.has(N))k.set(N,!0);else return;let w=!0;k.forEach(C=>{C||(w=!1)}),w&&(P==null||P(),y(v.current),a&&(h==null||h()),r&&r())};return s.jsx(Rg,{isPresent:x,initial:!j.current||n?void 0:!1,custom:t,presenceAffectsLayout:i,mode:o,root:c,onExitComplete:x?void 0:b,anchorX:l,children:F},N)})})},zg=()=>{const[e,t]=d.useState(null);d.useEffect(()=>{if(typeof window<"u"){const $=sessionStorage.getItem("navigationSource");$&&t($)}},[]);const n=$=>{typeof window<"u"&&(sessionStorage.setItem("navigationSource","/rewards"),window.location.href=$)},r=()=>{if(typeof window<"u"){const $=sessionStorage.getItem("navigationSource");window.location.href="/profile",sessionStorage.removeItem("navigationSource")}},i=[{id:1,type:"coins",value:100,icon:"🪙",label:"100 Coins",cost:0},{id:2,type:"life",value:1,icon:"❤️",label:"1 Life",cost:50},{id:3,type:"coins",value:200,icon:"🪙",label:"200 Coins",cost:0},{id:4,type:"wildcard",value:1,icon:"🃏",label:"Wild Card",cost:100},{id:5,type:"coins",value:500,icon:"💰",label:"500 Coins",cost:0,milestone:!0},{id:6,type:"fifty-fifty",value:1,icon:"➗",label:"50:50",cost:150},{id:7,type:"life",value:2,icon:"❤️",label:"2 Lives",cost:100},{id:8,type:"vehicle",value:"bike",icon:"🏍️",label:"Motorcycle",cost:300},{id:9,type:"mystery",value:1,icon:"🎁",label:"Mystery Box",cost:200},{id:10,type:"coins",value:750,icon:"💰",label:"750 Coins",cost:0,milestone:!0},{id:11,type:"life",value:3,icon:"❤️",label:"3 Lives",cost:150},{id:12,type:"wildcard",value:2,icon:"🃏",label:"2x Wild Card",cost:250},{id:13,type:"vehicle",value:"car",icon:"🚗",label:"Car",cost:500},{id:14,type:"fifty-fifty",value:2,icon:"➗",label:"2x 50:50",cost:300},{id:15,type:"coins",value:1e3,icon:"💎",label:"1000 Coins",cost:0,milestone:!0}],o={cycle:{icon:"🚴",name:"Bicycle"},bike:{icon:"🏍️",name:"Motorcycle"},car:{icon:"🚗",name:"Car"}},[a,l]=d.useState(4),[c,u]=d.useState(1390),[h,f]=d.useState(4),[p,j]=d.useState(!1),[v,k]=d.useState(!1),[R,g]=d.useState(0),[m,y]=d.useState(0),[S,P]=d.useState("cycle"),[F,N]=d.useState([{type:"vehicle",icon:"🚴",name:"Bicycle",count:1},{type:"wildcard",icon:"🃏",name:"Wild Card",count:2},{type:"fifty-fifty",icon:"➗",name:"50:50 Helper",count:1}]),[x,b]=d.useState([0,1,2,3]),[w,C]=d.useState(!1),[M,W]=d.useState(!1),[J,A]=d.useState(null),[H,Q]=d.useState(null),[L,T]=d.useState(!1),[E,z]=d.useState(null),[O,D]=d.useState(!1),Y=d.useRef(null),te=d.useRef(null),ae=d.useRef(null);d.useEffect(()=>{Y.current=new Audio("/sounds/reward.mp3"),te.current=new Audio("/sounds/reward_progress.mp3"),[Y,te].forEach($=>{var B;(B=$.current)==null||B.addEventListener("error",()=>{console.log("Sound file not found")})})},[]);const ne=$=>{try{$.current&&($.current.currentTime=0,$.current.play().catch(B=>console.log("Audio play failed:",B)))}catch(B){console.log("Sound play error:",B)}},I=($,B)=>{if($>a){Q(B),W(!0);return}$===a&&re($,B)},q=$=>{var X;const B=(X=ae.current)==null?void 0:X.querySelector(`[data-index="${$}"]`);if(B){const ue=B.getBoundingClientRect(),ee=window.pageYOffset||document.documentElement.scrollTop,se=ue.top+ee-window.innerHeight/2+50;window.scrollTo({top:se,behavior:"smooth"})}},re=($,B)=>{if(!x.includes($)){if(B.cost>0&&c<B.cost){Q(B),W(!0);return}B.cost>0&&u(X=>X-B.cost),ne(Y),C(!0),Q(B),b(X=>[...X,$]),setTimeout(()=>{C(!1),B.type==="coins"?(g(B.value),j(!0),setTimeout(()=>{u(X=>X+B.value),setTimeout(()=>{j(!1),g(0)},500)},300)):B.type==="life"?(y(B.value),k(!0),setTimeout(()=>{f(X=>X+B.value),setTimeout(()=>{k(!1),y(0)},500)},300)):(z({icon:B.icon,startX:window.innerWidth/2,startY:window.innerHeight/2}),setTimeout(()=>{z(null),D(!0),V(B),B.type==="vehicle"&&P(B.value),setTimeout(()=>{D(!1)},500)},800)),setTimeout(()=>{if(a<i.length-1){const X=a+1;q(X),setTimeout(()=>{T(!0),ne(te),l(X),setTimeout(()=>{T(!1)},500)},300)}},1200)},1500)}},V=$=>{N(B=>B.find(ue=>ue.icon===$.icon)?B.map(ue=>ue.icon===$.icon?{...ue,count:ue.count+1}:ue):[...B,{type:$.type,icon:$.icon,name:$.label,count:1}])},G=$=>30+$*100,oe=()=>30+a*100;return s.jsxs("div",{className:"rewards-page",children:[s.jsx("style",{jsx:!0,children:`
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
      `}),s.jsx("div",{className:"non-sticky-header",children:s.jsx("button",{className:"back-button",onClick:r,children:"← Back"})}),s.jsxs("div",{className:"sticky-section",children:[s.jsxs("div",{className:"header-wrapper",children:[s.jsxs("div",{className:"title-row",children:[s.jsxs("div",{children:[s.jsx("h1",{className:"title",children:"Rewards"}),s.jsx("p",{className:"subtitle",children:"Claim amazing prizes"})]}),s.jsx("button",{className:"play-quiz-btn",onClick:()=>n("/play"),children:"Play Quiz"})]}),s.jsx("div",{className:"balance-row",children:s.jsx("div",{className:"balance-item",children:s.jsxs("div",{children:[s.jsx("div",{className:"balance-label",children:"Balance"}),s.jsxs("div",{className:`balance-value ${p?"animating":""}`,children:[c.toLocaleString()," 🪙",p&&s.jsxs("span",{className:"value-change",children:["+",R]})]})]})})})]}),s.jsx("div",{className:"stats-cards-container",children:s.jsxs("div",{className:"info-grid",children:[s.jsxs("div",{className:"info-card",children:[s.jsx("div",{className:"info-icon",children:"❤️"}),s.jsxs("div",{className:`info-value ${v?"animating":""}`,children:[h,v&&s.jsxs("span",{className:"value-change",children:["+",m]})]}),s.jsx("div",{className:"info-label",children:"Lives"})]}),s.jsxs("div",{className:"info-card",children:[s.jsx("div",{className:"info-icon",children:"⭐"}),s.jsx("div",{className:"info-value",children:"5"}),s.jsx("div",{className:"info-label",children:"Level"})]}),s.jsxs("div",{className:"info-card",children:[s.jsx("div",{className:"info-icon",children:o[S].icon}),s.jsx("div",{className:"info-value",children:o[S].name}),s.jsx("div",{className:"info-label",children:"Vehicle"})]}),s.jsxs("div",{className:`cards-section ${O?"animating":""}`,children:[s.jsx("div",{className:"cards-label",children:"Your Cards"}),s.jsx("div",{className:"card-grid",children:F.map(($,B)=>s.jsxs("div",{className:"card-item",onClick:()=>A($),children:[s.jsxs("div",{className:"large-card",children:[s.jsx("div",{className:"large-card-icon",children:$.icon}),s.jsx("div",{className:"large-card-name",children:$.name})]}),$.count>1&&s.jsx("div",{className:"card-count-badge",children:$.count})]},B))})]})]})})]}),s.jsx("div",{className:"scrollable-journey",children:s.jsx("div",{className:"journey-container",ref:ae,children:s.jsxs("div",{className:"journey-track",children:[s.jsx("div",{className:"curvy-road",children:s.jsxs("svg",{className:"road-svg",viewBox:"0 0 60 1500",preserveAspectRatio:"none",children:[s.jsx("defs",{children:s.jsxs("linearGradient",{id:"roadGradient",x1:"0%",y1:"0%",x2:"0%",y2:"100%",children:[s.jsx("stop",{offset:"0%",stopColor:"#5E5CE6"}),s.jsx("stop",{offset:"100%",stopColor:"#5E5CE6"})]})}),s.jsx("path",{className:"road-path",d:"M 30 0 Q 45 50, 30 100 T 30 200 Q 15 250, 30 300 T 30 400 Q 45 450, 30 500 T 30 600 Q 15 650, 30 700 T 30 800 Q 45 850, 30 900 T 30 1000 Q 15 1050, 30 1100 T 30 1200 Q 45 1250, 30 1300 T 30 1400 L 30 1500"}),s.jsx("path",{className:"road-progress",d:"M 30 0 Q 45 50, 30 100 T 30 200 Q 15 250, 30 300 T 30 400 Q 45 450, 30 500 T 30 600 Q 15 650, 30 700 T 30 800 Q 45 850, 30 900 T 30 1000 Q 15 1050, 30 1100 T 30 1200 Q 45 1250, 30 1300 T 30 1400 L 30 1500",strokeDasharray:"1500",strokeDashoffset:1500-a/(i.length-1)*1500})]})}),s.jsxs("div",{className:"avatar-tracker",style:{top:`${oe()}px`},children:[s.jsx("img",{className:"avatar-img",src:"/profile/avatar.png",alt:"You",onError:$=>{$.target.style.display="none"}}),s.jsx("div",{className:"tracker-vehicle",children:o[S].icon})]}),s.jsx("div",{className:"rewards-list",children:i.map(($,B)=>{const X=B%2===0,ue=B>a,ee=x.includes(B),se=B===a;return s.jsx("div",{className:"reward-row","data-index":B,style:{top:`${G(B)}px`},children:s.jsxs("div",{className:`reward-item ${X?"left":"right"}`,children:[s.jsxs("div",{className:`checkpoint ${se?"current":ee?"claimed":ue?"locked":""}`,onClick:()=>I(B,$),children:[s.jsx("div",{className:"checkpoint-icon",children:$.icon}),s.jsx("div",{className:"checkpoint-value",children:$.label.split(" ")[0]}),$.milestone&&s.jsx("div",{className:"milestone-badge",children:"BONUS"}),ue&&s.jsx("div",{className:"lock-icon",children:"🔒"})]}),s.jsxs("div",{className:"reward-info",children:[s.jsx("div",{className:"reward-name",children:$.label}),s.jsxs("div",{className:"step-label",children:["Step ",B+1]})]})]})},$.id)})})]})})}),E&&s.jsx("div",{className:"flying-card",style:{left:`${E.startX}px`,top:`${E.startY}px`,"--startX":`${E.startX}px`},children:E.icon}),s.jsx(Do,{children:J&&s.jsx("div",{className:"claim-overlay",onClick:()=>A(null),children:s.jsxs("div",{className:"modal",onClick:$=>$.stopPropagation(),children:[s.jsx("div",{className:"modal-icon",children:J.icon}),s.jsx("div",{className:"card-detail-name",children:J.name}),s.jsxs("div",{className:"card-detail-desc",children:["You have ",J.count," of these cards"]}),s.jsx("div",{className:"modal-buttons",children:s.jsx("button",{className:"modal-btn modal-btn-secondary",onClick:()=>A(null),children:"Close"})})]})})}),s.jsx(Do,{children:w&&H&&s.jsx("div",{className:"claim-overlay",children:s.jsxs("div",{className:"modal",children:[s.jsx("div",{className:"modal-title",children:"WELL DONE!"}),s.jsx("div",{className:"modal-subtitle",children:"Here's a reward for you."}),s.jsx("div",{className:"modal-icon",children:H.icon}),s.jsxs("div",{className:"modal-value",children:["+",H.value," ",H.type==="coins"?"Coins":H.type==="life"?"Lives":H.label]})]})})}),s.jsx(Do,{children:M&&H&&s.jsx("div",{className:"claim-overlay",onClick:()=>W(!1),children:s.jsxs("div",{className:"modal",onClick:$=>$.stopPropagation(),children:[s.jsx("div",{className:"modal-icon",children:"🪙"}),s.jsx("div",{className:"modal-title",children:"Need More Coins"}),s.jsx("div",{className:"modal-subtitle",children:H.cost>0?`You need ${H.cost-c} more coins`:"Complete previous rewards first"}),s.jsxs("div",{className:"modal-buttons",children:[s.jsx("button",{className:"modal-btn modal-btn-primary",onClick:()=>n("/play"),children:"Play Quiz"}),s.jsx("button",{className:"modal-btn modal-btn-secondary",onClick:()=>W(!1),children:"Cancel"})]})]})})})]})},Gs=[{id:1,name:"First Win",emoji:"🏆",unlocked:!0,hint:"Win your first quiz",progress:100,color:"#FFD700"},{id:2,name:"On Fire",emoji:"🔥",unlocked:!0,hint:"3-day winning streak",progress:100,color:"#FF6B35"},{id:3,name:"Perfectionist",emoji:"⭐",unlocked:!1,hint:"Score 10/10 in any quiz",progress:75,color:"#9333EA"},{id:4,name:"Early Bird",emoji:"🌅",unlocked:!0,hint:"Play before 9 AM",progress:100,color:"#F59E0B"},{id:5,name:"Scholar",emoji:"🎓",unlocked:!1,hint:"Master 5 categories",progress:40,color:"#3B82F6"},{id:6,name:"Lightning",emoji:"⚡",unlocked:!1,hint:"Complete in under 2 minutes",progress:20,color:"#10B981"},{id:7,name:"Champion",emoji:"👑",unlocked:!1,hint:"Win 50 quizzes",progress:30,color:"#EC4899"},{id:8,name:"Explorer",emoji:"🗺️",unlocked:!1,hint:"Try all categories",progress:60,color:"#06B6D4"},{id:9,name:"Strategist",emoji:"🧠",unlocked:!0,hint:"Use 3 power-ups wisely",progress:100,color:"#8B5CF6"}];function Lg(){const[e,t]=d.useState(null),n=Gs.filter(i=>i.unlocked).length,r=Math.round(n/Gs.length*100);return s.jsxs("div",{className:"badges-screen",children:[s.jsx("style",{jsx:!0,children:`
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
      `}),s.jsxs("div",{className:"header",children:[s.jsx("button",{className:"back-button",onClick:()=>window.history.back(),children:"← Back"}),s.jsxs("div",{className:"title-section",children:[s.jsx("h1",{className:"main-title",children:"Badge Collection"}),s.jsx("p",{className:"subtitle",children:"Unlock achievements and show your skills"})]})]}),s.jsxs("div",{className:"progress-card",children:[s.jsxs("div",{className:"progress-header",children:[s.jsx("span",{className:"progress-label",children:"Collection Progress"}),s.jsxs("span",{className:"progress-value",children:[n,"/",Gs.length]})]}),s.jsx("div",{className:"progress-bar-container",children:s.jsx("div",{className:"progress-bar-fill",style:{width:`${r}%`}})})]}),s.jsx("div",{className:"badges-grid",children:Gs.map(i=>s.jsxs("div",{className:`badge-card ${i.unlocked?"unlocked":""}`,style:{"--badge-color":i.color},onClick:()=>t(i),children:[s.jsx("div",{className:"badge-glow"}),s.jsx("div",{className:"badge-emoji",children:i.emoji}),s.jsx("div",{className:"badge-name",children:i.name}),!i.unlocked&&s.jsxs(s.Fragment,{children:[s.jsx("div",{className:"badge-progress",children:s.jsx("div",{className:"badge-progress-fill",style:{width:`${i.progress}%`}})}),s.jsx("div",{className:"lock-indicator",children:"🔒"})]})]},i.id))}),s.jsxs("div",{className:"tips-card",children:[s.jsxs("div",{className:"tips-title",children:[s.jsx("span",{children:"💡"}),s.jsx("span",{children:"Pro Tip"})]}),s.jsx("div",{className:"tips-content",children:"Complete daily challenges and maintain streaks to unlock rare badges faster. Each badge gives you bonus XP and special rewards!"})]}),e&&s.jsx("div",{className:"badge-modal",onClick:()=>t(null),children:s.jsxs("div",{className:"modal-content",onClick:i=>i.stopPropagation(),children:[s.jsx("div",{className:`modal-badge ${e.unlocked?"":"locked"}`,children:e.emoji}),s.jsx("h3",{className:"modal-title",children:e.name}),s.jsx("span",{className:`modal-status ${e.unlocked?"":"locked"}`,children:e.unlocked?"✓ Unlocked":"🔒 Locked"}),s.jsx("p",{className:"modal-description",children:e.hint}),!e.unlocked&&s.jsxs("div",{className:"modal-progress-section",children:[s.jsx("div",{className:"modal-progress-label",children:"Progress"}),s.jsx("div",{className:"modal-progress-bar",children:s.jsx("div",{className:"modal-progress-fill",style:{width:`${e.progress}%`,"--badge-color":e.color}})}),s.jsxs("div",{className:"modal-progress-text",children:[e.progress,"%"]})]}),s.jsx("button",{className:"modal-close",onClick:()=>t(null),children:e.unlocked?"Awesome!":"Keep Going!"})]})})]})}const Mg=[{id:1,title:"Quiz Master",subtitle:"Play 10 quizzes",current:7,target:10,reward:150,claimed:!1,icon:"🎯",color:"#FF6B6B"},{id:2,title:"Coin Collector",subtitle:"Earn 2,000 coins",current:1240,target:2e3,reward:200,claimed:!1,icon:"💰",color:"#4ECDC4"},{id:3,title:"Winning Streak",subtitle:"Win 3 in a row",current:3,target:3,reward:100,claimed:!0,icon:"🔥",color:"#FFD93D"},{id:4,title:"Speed Demon",subtitle:"Complete 5 under 2min",current:2,target:5,reward:300,claimed:!1,icon:"⚡",color:"#A8E6CF"},{id:5,title:"Perfect Score",subtitle:"Get 100% accuracy",current:0,target:1,reward:250,claimed:!1,icon:"⭐",color:"#C7B8FF"}];function Fg(){const[e,t]=d.useState(Mg),[n,r]=d.useState(null),[i,o]=d.useState(1890),[a,l]=d.useState(!1),[c,u]=d.useState([]),h=e.length,f=e.filter(v=>v.current>=v.target).length,p=Math.round(f/h*100);d.useEffect(()=>{const v=setInterval(()=>{u(k=>{const R={id:Date.now(),x:Math.random()*100,y:Math.random()*100,size:Math.random()*20+10};return[...k.slice(-4),R]})},3e3);return()=>clearInterval(v)},[]);const j=(v,k)=>{r(v),navigator.vibrate&&navigator.vibrate([20,10,20]),setTimeout(()=>{t(R=>R.map(g=>g.id===v?{...g,claimed:!0}:g)),o(R=>R+k),r(null),l(!0),setTimeout(()=>l(!1),2e3)},600)};return s.jsxs("div",{className:"achievements-screen",children:[s.jsx("style",{jsx:!0,children:`
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
      `}),s.jsxs("div",{className:"floating-shapes",children:[s.jsx("div",{className:"shape shape-1"}),s.jsx("div",{className:"shape shape-2"})]}),s.jsxs("div",{className:"header",children:[s.jsx("button",{className:"back-button",onClick:()=>window.history.back(),children:"← Back"}),s.jsxs("div",{className:"coins-display",children:["🪙 ",i.toLocaleString()]}),s.jsxs("div",{className:"title-section",children:[s.jsx("h1",{className:"main-title",children:"ACHIEVEMENTS"}),s.jsx("p",{className:"subtitle",children:"Complete challenges and earn awesome rewards!"})]})]}),s.jsxs("div",{className:"progress-overview",children:[s.jsx("div",{className:"card-glow",style:{"--card-color":"#FFD93D"}}),s.jsxs("div",{className:"overview-header",children:[s.jsx("span",{className:"overview-label",children:"🎮 Progress Tracker"}),s.jsxs("div",{className:"overview-stats",children:[s.jsx("span",{className:"trophy-icon",children:"🏆"}),s.jsxs("span",{className:"overview-value",children:[f,"/",h]})]})]}),s.jsx("div",{className:"progress-bar-main",children:s.jsx("div",{className:"progress-fill-main",style:{width:`${p}%`}})})]}),s.jsx("div",{className:"achievements-list",children:e.map(v=>{const k=Math.min(100,Math.round(v.current/v.target*100)),R=k===100,g=v.color+"CC";return s.jsxs("div",{className:`achievement-card ${R?"completed":""}`,style:{"--card-color":v.color,"--card-color-dark":g},children:[s.jsx("div",{className:"card-glow"}),R&&v.claimed&&s.jsx("div",{className:"completed-badge",children:"✓"}),s.jsxs("div",{className:"card-content",children:[s.jsx("div",{className:"achievement-icon",children:v.icon}),s.jsxs("div",{className:"achievement-details",children:[s.jsx("div",{className:"achievement-title",children:v.title}),s.jsx("div",{className:"achievement-subtitle",children:v.subtitle}),s.jsxs("div",{className:"progress-container",children:[s.jsx("div",{className:"progress-bar",children:s.jsx("div",{className:"progress-fill",style:{width:`${k}%`}})}),s.jsxs("div",{className:"progress-text",children:[s.jsxs("span",{children:[v.current,"/",v.target]}),s.jsxs("span",{className:"reward-badge",children:["🪙 ",v.reward]})]})]})]}),s.jsx("button",{onClick:()=>j(v.id,v.reward),disabled:!R||v.claimed,className:`claim-button ${v.claimed?"claimed":R?"can-claim":"in-progress"} ${n===v.id?"claiming":""}`,children:v.claimed?"✓":R?"CLAIM!":`${k}%`})]})]},v.id)})}),a&&s.jsx("div",{className:"celebration",children:"🎉"})]})}function Ig(){const[e,t]=d.useState(5),[n,r]=d.useState(12),[i,o]=d.useState(47),[a,l]=d.useState(!1),c=new Date().getDay(),u=["S","M","T","W","T","F","S"].map((v,k)=>({label:v,hit:k<=c&&k!==0,isToday:k===c})),h=[{days:3,emoji:"⚡",label:"Starter",achieved:e>=3},{days:7,emoji:"🔥",label:"Week Warrior",achieved:e>=7},{days:30,emoji:"💎",label:"Champion",achieved:e>=30},{days:100,emoji:"👑",label:"Legend",achieved:e>=100}],f=h.find(v=>v.days>e)||h[h.length-1],p=Math.min(100,e/f.days*100);d.useEffect(()=>{e>0&&e%5===0&&(l(!0),setTimeout(()=>l(!1),2e3))},[e]);const j=()=>{typeof window<"u"&&(window.location.href="/play")};return s.jsxs("div",{className:"streaks-screen",children:[s.jsx("style",{jsx:!0,children:`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .streaks-screen {
          min-height: 100vh;
          background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
          padding: 20px;
          font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif;
          color: white;
          position: relative;
          overflow: hidden;
        }

        .animated-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          opacity: 0.05;
          background-image: 
            radial-gradient(circle at 20% 30%, #FFD93D 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, #FF6B6B 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, #4ECDC4 0%, transparent 70%);
        }

        .header {
          position: relative;
          z-index: 10;
          margin-bottom: 32px;
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

        .title-section {
          text-align: center;
          margin-bottom: 32px;
        }

        .main-title {
          font-size: 42px;
          font-weight: 800;
          margin-bottom: 8px;
          background: linear-gradient(135deg, #FFD93D, #FF6B6B);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .subtitle {
          font-size: 16px;
          color: rgba(255, 255, 255, 0.7);
        }

        .streak-hero {
          background: rgba(255, 255, 255, 0.08);
          border-radius: 24px;
          padding: 32px;
          margin-bottom: 24px;
          text-align: center;
          position: relative;
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

        .fire-animation {
          font-size: 80px;
          margin-bottom: 16px;
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
          font-size: 72px;
          font-weight: 900;
          line-height: 1;
          margin-bottom: 8px;
          background: linear-gradient(135deg, #FFD93D, #FFA500);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .streak-label {
          font-size: 24px;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.9);
          margin-bottom: 24px;
        }

        .stats-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
          margin-top: 24px;
        }

        .stat-card {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 16px;
          padding: 16px;
          text-align: center;
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        .stat-value {
          font-size: 28px;
          font-weight: 700;
          color: #4ECDC4;
          margin-bottom: 4px;
        }

        .stat-label {
          font-size: 12px;
          color: rgba(255, 255, 255, 0.6);
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .calendar-card {
          background: rgba(255, 255, 255, 0.08);
          border-radius: 24px;
          padding: 24px;
          margin-bottom: 24px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          animation: slideUp 0.5s ease-out 0.4s both;
        }

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

        .calendar-header {
          font-size: 14px;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.8);
          margin-bottom: 16px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .week-grid {
          display: grid;
          grid-template-columns: repeat(7, 1fr);
          gap: 8px;
        }

        .day-box {
          aspect-ratio: 1;
          border-radius: 16px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          font-weight: 600;
          font-size: 14px;
          position: relative;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .day-box.inactive {
          background: rgba(255, 255, 255, 0.05);
          color: rgba(255, 255, 255, 0.3);
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        .day-box.active {
          background: linear-gradient(135deg, #10B981, #059669);
          color: white;
          box-shadow: 0 4px 12px rgba(16, 185, 129, 0.3);
          animation: popIn 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }

        .day-box.today {
          background: linear-gradient(135deg, #FFD93D, #FFA500);
          color: #1a1a1a;
          box-shadow: 0 6px 20px rgba(255, 217, 61, 0.4);
          animation: pulse 2s ease-in-out infinite;
        }

        @keyframes popIn {
          from {
            transform: scale(0);
          }
          to {
            transform: scale(1);
          }
        }

        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
            box-shadow: 0 6px 20px rgba(255, 217, 61, 0.4);
          }
          50% {
            transform: scale(1.05);
            box-shadow: 0 8px 25px rgba(255, 217, 61, 0.5);
          }
        }

        .day-icon {
          font-size: 20px;
          margin-bottom: 4px;
        }

        .milestone-section {
          margin-bottom: 24px;
          animation: slideUp 0.5s ease-out 0.6s both;
        }

        .milestone-header {
          font-size: 14px;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.8);
          margin-bottom: 16px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .milestone-progress {
          background: rgba(255, 255, 255, 0.08);
          border-radius: 20px;
          padding: 20px;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .milestone-info {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 12px;
        }

        .milestone-current {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .milestone-emoji {
          font-size: 28px;
        }

        .milestone-text {
          font-size: 16px;
          font-weight: 600;
        }

        .milestone-target {
          font-size: 14px;
          color: rgba(255, 255, 255, 0.6);
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
          background: linear-gradient(90deg, #FFD93D, #FF6B6B);
          border-radius: 100px;
          transition: width 0.8s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 2px 8px rgba(255, 217, 61, 0.3);
          position: relative;
        }

        .progress-bar-fill::after {
          content: '';
          position: absolute;
          top: 0;
          right: 0;
          width: 4px;
          height: 100%;
          background: white;
          border-radius: 2px;
          animation: shimmer 2s infinite;
        }

        @keyframes shimmer {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }

        .milestones-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 8px;
          margin-top: 20px;
        }

        .milestone-badge {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 12px;
          padding: 12px 8px;
          text-align: center;
          border: 1px solid rgba(255, 255, 255, 0.08);
          transition: all 0.3s;
        }

        .milestone-badge.achieved {
          background: linear-gradient(135deg, rgba(255, 217, 61, 0.15), rgba(255, 165, 0, 0.15));
          border-color: rgba(255, 217, 61, 0.3);
        }

        .milestone-badge-emoji {
          font-size: 24px;
          margin-bottom: 4px;
          filter: grayscale(100%) opacity(0.3);
        }

        .milestone-badge.achieved .milestone-badge-emoji {
          filter: none;
        }

        .milestone-badge-label {
          font-size: 10px;
          color: rgba(255, 255, 255, 0.5);
        }

        .milestone-badge.achieved .milestone-badge-label {
          color: rgba(255, 255, 255, 0.8);
        }

        .play-button {
          width: 100%;
          padding: 18px;
          background: linear-gradient(135deg, #10B981, #059669);
          color: white;
          border: none;
          border-radius: 20px;
          font-size: 18px;
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
          animation: slideUp 0.5s ease-out 0.8s both;
        }

        .play-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(16, 185, 129, 0.4);
        }

        .play-button:active {
          transform: scale(0.98);
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

        .motivational-text {
          text-align: center;
          margin: 20px 0;
          padding: 16px;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 16px;
          font-size: 14px;
          color: rgba(255, 255, 255, 0.8);
          font-style: italic;
          animation: slideUp 0.5s ease-out 1s both;
        }
      `}),s.jsx("div",{className:"animated-bg"}),s.jsxs("div",{className:"header",children:[s.jsx("button",{className:"back-button",onClick:()=>window.history.back(),children:"← Back"}),s.jsxs("div",{className:"title-section",children:[s.jsx("h1",{className:"main-title",children:"STREAKS"}),s.jsx("p",{className:"subtitle",children:"Keep the fire burning!"})]})]}),s.jsxs("div",{className:"streak-hero",children:[s.jsx("div",{className:"fire-animation",children:"🔥"}),s.jsx("div",{className:"streak-number",children:e}),s.jsx("div",{className:"streak-label",children:"DAY STREAK"}),s.jsxs("div",{className:"stats-row",children:[s.jsxs("div",{className:"stat-card",children:[s.jsx("div",{className:"stat-value",children:n}),s.jsx("div",{className:"stat-label",children:"Best Streak"})]}),s.jsxs("div",{className:"stat-card",children:[s.jsx("div",{className:"stat-value",children:i}),s.jsx("div",{className:"stat-label",children:"Total Days"})]})]})]}),s.jsxs("div",{className:"calendar-card",children:[s.jsx("div",{className:"calendar-header",children:"This Week"}),s.jsx("div",{className:"week-grid",children:u.map((v,k)=>s.jsxs("div",{className:`day-box ${v.isToday?"today":v.hit?"active":"inactive"}`,children:[v.isToday&&s.jsx("div",{className:"day-icon",children:"⚡"}),v.hit&&!v.isToday&&s.jsx("div",{className:"day-icon",children:"✓"}),s.jsx("div",{children:v.label})]},k))})]}),s.jsxs("div",{className:"milestone-section",children:[s.jsx("div",{className:"milestone-header",children:"Next Milestone"}),s.jsxs("div",{className:"milestone-progress",children:[s.jsxs("div",{className:"milestone-info",children:[s.jsxs("div",{className:"milestone-current",children:[s.jsx("span",{className:"milestone-emoji",children:f.emoji}),s.jsx("span",{className:"milestone-text",children:f.label})]}),s.jsxs("span",{className:"milestone-target",children:[e,"/",f.days," days"]})]}),s.jsx("div",{className:"progress-bar-container",children:s.jsx("div",{className:"progress-bar-fill",style:{width:`${p}%`}})})]}),s.jsx("div",{className:"milestones-grid",children:h.map((v,k)=>s.jsxs("div",{className:`milestone-badge ${v.achieved?"achieved":""}`,children:[s.jsx("div",{className:"milestone-badge-emoji",children:v.emoji}),s.jsxs("div",{className:"milestone-badge-label",children:[v.days," days"]})]},k))})]}),s.jsxs("div",{className:"motivational-text",children:[`"Great job! You're `,Math.max(1,f.days-e)," days away from ",f.label,'!"']}),s.jsxs("button",{className:"play-button",onClick:j,children:[s.jsx("span",{children:"Continue Streak"}),s.jsx("span",{children:"→"})]}),a&&s.jsx("div",{className:"celebration",children:"🎉"})]})}const Dg=[{id:1,title:"Play 3 quizzes today",progress:2,target:3,reward:60,claimed:!1,icon:"🎮",color:"#FF6B6B",difficulty:"Easy"},{id:2,title:"Score 8+ twice",progress:1,target:2,reward:80,claimed:!1,icon:"🎯",color:"#4ECDC4",difficulty:"Medium"},{id:3,title:"Practice 15 questions",progress:15,target:15,reward:100,claimed:!0,icon:"📚",color:"#FFD93D",difficulty:"Easy"},{id:4,title:"Win 5 in a row",progress:3,target:5,reward:150,claimed:!1,icon:"🔥",color:"#A8E6CF",difficulty:"Hard"},{id:5,title:"Complete a speed run",progress:0,target:1,reward:120,claimed:!1,icon:"⚡",color:"#C7B8FF",difficulty:"Medium"}];function Ag(){const[e,t]=d.useState(Dg),[n,r]=d.useState(850),[i,o]=d.useState(null),[a,l]=d.useState(0);d.useEffect(()=>{const f=e.filter(p=>p.progress>=p.target).length;l(Math.round(f/e.length*100))},[e]);const c=(f,p)=>{navigator.vibrate&&navigator.vibrate([20,10,20]),o(f),setTimeout(()=>{t(j=>j.map(v=>v.id===f?{...v,claimed:!0}:v)),r(j=>j+p),o(null)},600)},u=f=>{switch(f){case"Easy":return"#10B981";case"Medium":return"#F59E0B";case"Hard":return"#EF4444";default:return"#6B7280"}},h=()=>{const f=new Date,p=new Date(f);p.setDate(p.getDate()+1),p.setHours(5,0,0,0);const j=p-f,v=Math.floor(j/(1e3*60*60)),k=Math.floor(j%(1e3*60*60)/(1e3*60));return`${v}h ${k}m`};return s.jsxs("div",{className:"quests-screen",children:[s.jsx("style",{jsx:!0,children:`
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
      `}),s.jsxs("div",{className:"animated-bg",children:[s.jsx("div",{className:"floating-icon",children:"🎮"}),s.jsx("div",{className:"floating-icon",children:"🎯"}),s.jsx("div",{className:"floating-icon",children:"🏆"}),s.jsx("div",{className:"floating-icon",children:"⭐"})]}),s.jsxs("div",{className:"header",children:[s.jsx("button",{className:"back-button",onClick:()=>window.history.back(),children:"← Back"}),s.jsxs("div",{className:"coins-display",children:["🪙 ",n]}),s.jsxs("div",{className:"title-section",children:[s.jsx("h1",{className:"main-title",children:"Daily Quests"}),s.jsx("p",{className:"subtitle",children:"Complete challenges, earn rewards!"})]})]}),s.jsxs("div",{className:"daily-progress-card",children:[s.jsxs("div",{className:"progress-header",children:[s.jsx("span",{className:"progress-label",children:"Today's Progress"}),s.jsxs("span",{className:"progress-value",children:[a,"%"]})]}),s.jsx("div",{className:"progress-bar-container",children:s.jsx("div",{className:"progress-bar-fill",style:{width:`${a}%`}})})]}),s.jsx("div",{className:"quests-list",children:e.map(f=>{const p=Math.min(100,Math.round(f.progress/f.target*100)),j=p===100,v=f.color+"CC";return s.jsxs("div",{className:`quest-card ${j?"completed":""}`,style:{"--quest-color":f.color,"--quest-color-dark":v},children:[s.jsx("div",{className:"quest-accent"}),j&&f.claimed&&s.jsx("div",{className:"completed-checkmark",children:"✓"}),s.jsxs("div",{className:"quest-content",children:[s.jsx("div",{className:`quest-icon-container ${i===f.id?"animating":""}`,children:f.icon}),s.jsxs("div",{className:"quest-details",children:[s.jsxs("div",{className:"quest-header",children:[s.jsx("span",{className:"quest-title",children:f.title}),s.jsx("span",{className:"difficulty-badge",style:{background:`${u(f.difficulty)}20`,color:u(f.difficulty)},children:f.difficulty})]}),s.jsxs("div",{className:"progress-info",children:[s.jsx("div",{className:"mini-progress-bar",children:s.jsx("div",{className:"mini-progress-fill",style:{width:`${p}%`}})}),s.jsxs("div",{className:"progress-text",children:[s.jsxs("span",{className:"progress-numbers",children:[f.progress,"/",f.target]}),s.jsxs("span",{className:"reward-display",children:["🪙 ",f.reward]})]})]})]}),s.jsx("button",{onClick:()=>j&&!f.claimed&&c(f.id,f.reward),disabled:f.claimed,className:`action-button ${f.claimed?"claimed":j?"can-claim":"in-progress"}`,style:!j&&!f.claimed?{"--quest-color":f.color,"--quest-color-dark":v}:{},children:f.claimed?"✓":j?"Claim":"Do it"})]})]},f.id)})}),s.jsxs("div",{className:"timer-card",children:[s.jsx("div",{className:"timer-icon",children:"⏰"}),s.jsx("div",{className:"timer-label",children:"New Quests In"}),s.jsx("div",{className:"timer-value",children:h()})]}),i&&s.jsx("div",{className:"reward-animation",children:"🪙"})]})}function Og({title:e,subtitle:t,children:n}){const r=Ze();return s.jsxs("div",{className:"min-h-full bg-black text-white px-4 pt-12",children:[s.jsxs("div",{className:"flex items-center justify-between mb-4",children:[s.jsx("button",{onClick:()=>r(-1),className:"px-3 py-1.5 rounded-xl border border-white/10 bg-white/5 text-sm",children:"← Back"}),s.jsxs("div",{className:"text-center",children:[s.jsx("div",{className:"text-base font-semibold leading-tight",children:e}),t&&s.jsx("div",{className:"text-xs text-white/60 leading-tight",children:t})]}),s.jsx("div",{className:"w-[68px]"})]}),n]})}function $g(){const e=Ze(),[t,n]=d.useState(!0),[r,i]=d.useState(!0),[o,a]=d.useState(!0);return s.jsxs(Og,{title:"Settings",subtitle:"Make it yours",children:[s.jsxs("div",{className:"rounded-2xl border border-white/10 bg-white/5 divide-y divide-white/10",children:[s.jsx(Ar,{label:"Sound",right:s.jsx(Ao,{on:t,set:n})}),s.jsx(Ar,{label:"Haptics",right:s.jsx(Ao,{on:r,set:i})}),s.jsx(Ar,{label:"Notifications",right:s.jsx(Ao,{on:o,set:a})}),s.jsx(Ar,{label:"Edit Profile",right:s.jsx("span",{className:"text-white/60",children:"→"}),onClick:()=>e("/profile")}),s.jsx(Ar,{label:"Privacy Policy",right:s.jsx("span",{className:"text-white/60",children:"→"}),onClick:()=>window.open("#","_blank")})]}),s.jsx("button",{className:`mt-3 w-full rounded-2xl border border-white/10 bg-white/5 py-3 text-red-300 font-semibold
                   transition-transform duration-150 active:scale-[0.99]`,onClick:()=>alert("Sign out hook here"),children:"Sign out"})]})}function Ar({label:e,right:t,onClick:n}){return s.jsxs("button",{type:"button",onClick:n,className:`w-full flex items-center justify-between px-4 py-4 text-left
                 hover:bg-white/5 first:rounded-t-2xl last:rounded-b-2xl transition`,children:[s.jsx("span",{className:"text-sm font-semibold",children:e}),t]})}function Ao({on:e,set:t}){return s.jsx("span",{onClick:n=>{n.stopPropagation(),t(r=>!r),navigator.vibrate&&navigator.vibrate(10)},className:["inline-flex w-11 h-6 items-center rounded-full border transition px-0.5",e?"bg-lime-400 border-lime-400 justify-end":"bg-white/10 border-white/10 justify-start"].join(" "),role:"switch","aria-checked":e,children:s.jsx("span",{className:["w-5 h-5 rounded-full bg-white",e?"":"bg-white"].join(" ")})})}const Bg={name:"Player",avatar:"wizard",level:1,totalXP:0,coins:0,energy:Oe.MAX_ENERGY,energyRegenAt:null,comboStreak:0,bestCombo:0,totalQuizzes:0,totalCorrect:0,achievements:[],unlockedAvatars:["wizard","knight"],createdAt:Date.now()};function Ug(){const[e,t]=d.useState(()=>{const c=localStorage.getItem(Oe.STORAGE_KEYS.PLAYER);return c?JSON.parse(c):Bg});d.useEffect(()=>{localStorage.setItem(Oe.STORAGE_KEYS.PLAYER,JSON.stringify(e))},[e]),d.useEffect(()=>{if(e.energy<Oe.MAX_ENERGY&&e.energyRegenAt){const c=setInterval(()=>{const u=Date.now();u>=e.energyRegenAt&&t(h=>({...h,energy:Math.min(h.energy+1,Oe.MAX_ENERGY),energyRegenAt:h.energy+1<Oe.MAX_ENERGY?u+Oe.ENERGY_REGEN_TIME:null}))},6e4);return()=>clearInterval(c)}},[e.energy,e.energyRegenAt]);const n=d.useCallback(c=>{t(u=>{const h=u.totalXP+c,f=ru(u.totalXP),p=ru(h);let j=[...u.unlockedAvatars];return p>f&&Oe.AVATARS.forEach(v=>{v.unlockLevel===p&&!j.includes(v.id)&&j.push(v.id)}),{...u,totalXP:h,level:p,unlockedAvatars:j}})},[]),r=d.useCallback(c=>{t(u=>({...u,coins:u.coins+c}))},[]),i=d.useCallback((c=1)=>e.energy<c?!1:(t(u=>({...u,energy:u.energy-c,energyRegenAt:u.energyRegenAt||Date.now()+Oe.ENERGY_REGEN_TIME})),!0),[e.energy]),o=d.useCallback(c=>{t(u=>{const h=c?u.comboStreak+1:0;return{...u,comboStreak:h,bestCombo:Math.max(u.bestCombo,h)}})},[]),a=d.useCallback(()=>{t(c=>({...c,comboStreak:0}))},[]),l=d.useCallback(c=>{e.unlockedAvatars.includes(c)&&t(u=>({...u,avatar:c}))},[e.unlockedAvatars]);return{player:e,addXP:n,addCoins:r,useEnergy:i,updateCombo:o,resetCombo:a,changeAvatar:l,levelProgress:Sx(e.totalXP)}}const om=d.createContext(null),Al=()=>{const e=d.useContext(om);if(!e)throw new Error("useGame must be used within GameProvider");return e};function Wg({children:e}){const t=Ug();return s.jsx(om.Provider,{value:t,children:e})}function Qg(){return s.jsx(Wg,{children:s.jsx(Oh,{children:s.jsxs(De,{element:s.jsx(bx,{}),children:[s.jsx(De,{path:"/",element:s.jsx(ou,{})}),s.jsx(De,{path:"/play",element:s.jsx(Wx,{})}),s.jsx(De,{path:"/play/party",element:s.jsx(cg,{})}),s.jsx(De,{path:"/profile",element:s.jsx(ug,{})}),s.jsx(De,{path:"/profile/leaderboard",element:s.jsx(dg,{})}),s.jsx(De,{path:"/profile/history",element:s.jsx(gg,{})}),s.jsx(De,{path:"/profile/rewards",element:s.jsx(zg,{})}),s.jsx(De,{path:"/profile/badges",element:s.jsx(Lg,{})}),s.jsx(De,{path:"/profile/achievements",element:s.jsx(Fg,{})}),s.jsx(De,{path:"/profile/streaks",element:s.jsx(Ig,{})}),s.jsx(De,{path:"/profile/quests",element:s.jsx(Ag,{})}),s.jsx(De,{path:"/profile/settings",element:s.jsx($g,{})}),s.jsx(De,{path:"/leaders",element:s.jsx(Ih,{to:"/profile/leaderboard",replace:!0})}),s.jsx(De,{path:"/quiz/:category",element:s.jsx(tg,{})}),s.jsx(De,{path:"*",element:s.jsx(ou,{})})]})})})}Oo.createRoot(document.getElementById("root")).render(s.jsx(tt.StrictMode,{children:s.jsx(cx,{children:s.jsx(Qg,{})})}));export{xm as c,wu as g};
