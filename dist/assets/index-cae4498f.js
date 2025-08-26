(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();var km=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function kd(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Nd={exports:{}},xo={},Sd={exports:{}},fe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hs=Symbol.for("react.element"),Nm=Symbol.for("react.portal"),Sm=Symbol.for("react.fragment"),Cm=Symbol.for("react.strict_mode"),Em=Symbol.for("react.profiler"),_m=Symbol.for("react.provider"),Rm=Symbol.for("react.context"),Pm=Symbol.for("react.forward_ref"),Tm=Symbol.for("react.suspense"),zm=Symbol.for("react.memo"),Lm=Symbol.for("react.lazy"),Bc=Symbol.iterator;function Im(e){return e===null||typeof e!="object"?null:(e=Bc&&e[Bc]||e["@@iterator"],typeof e=="function"?e:null)}var Cd={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ed=Object.assign,_d={};function Hr(e,t,n){this.props=e,this.context=t,this.refs=_d,this.updater=n||Cd}Hr.prototype.isReactComponent={};Hr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Hr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Rd(){}Rd.prototype=Hr.prototype;function vl(e,t,n){this.props=e,this.context=t,this.refs=_d,this.updater=n||Cd}var yl=vl.prototype=new Rd;yl.constructor=vl;Ed(yl,Hr.prototype);yl.isPureReactComponent=!0;var Uc=Array.isArray,Pd=Object.prototype.hasOwnProperty,bl={current:null},Td={key:!0,ref:!0,__self:!0,__source:!0};function zd(e,t,n){var r,i={},o=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(o=""+t.key),t)Pd.call(t,r)&&!Td.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var c=Array(l),u=0;u<l;u++)c[u]=arguments[u+2];i.children=c}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Hs,type:e,key:o,ref:a,props:i,_owner:bl.current}}function Fm(e,t){return{$$typeof:Hs,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function wl(e){return typeof e=="object"&&e!==null&&e.$$typeof===Hs}function Mm(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Wc=/\/+/g;function Oo(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Mm(""+e.key):t.toString(36)}function _i(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case Hs:case Nm:a=!0}}if(a)return a=e,i=i(a),e=r===""?"."+Oo(a,0):r,Uc(i)?(n="",e!=null&&(n=e.replace(Wc,"$&/")+"/"),_i(i,t,n,"",function(u){return u})):i!=null&&(wl(i)&&(i=Fm(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(Wc,"$&/")+"/")+e)),t.push(i)),1;if(a=0,r=r===""?".":r+":",Uc(e))for(var l=0;l<e.length;l++){o=e[l];var c=r+Oo(o,l);a+=_i(o,t,n,c,i)}else if(c=Im(e),typeof c=="function")for(e=c.call(e),l=0;!(o=e.next()).done;)o=o.value,c=r+Oo(o,l++),a+=_i(o,t,n,c,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function ri(e,t,n){if(e==null)return e;var r=[],i=0;return _i(e,r,"","",function(o){return t.call(n,o,i++)}),r}function Dm(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ut={current:null},Ri={transition:null},Om={ReactCurrentDispatcher:ut,ReactCurrentBatchConfig:Ri,ReactCurrentOwner:bl};function Ld(){throw Error("act(...) is not supported in production builds of React.")}fe.Children={map:ri,forEach:function(e,t,n){ri(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ri(e,function(){t++}),t},toArray:function(e){return ri(e,function(t){return t})||[]},only:function(e){if(!wl(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};fe.Component=Hr;fe.Fragment=Sm;fe.Profiler=Em;fe.PureComponent=vl;fe.StrictMode=Cm;fe.Suspense=Tm;fe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Om;fe.act=Ld;fe.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Ed({},e.props),i=e.key,o=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,a=bl.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(c in t)Pd.call(t,c)&&!Td.hasOwnProperty(c)&&(r[c]=t[c]===void 0&&l!==void 0?l[c]:t[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){l=Array(c);for(var u=0;u<c;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:Hs,type:e.type,key:i,ref:o,props:r,_owner:a}};fe.createContext=function(e){return e={$$typeof:Rm,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:_m,_context:e},e.Consumer=e};fe.createElement=zd;fe.createFactory=function(e){var t=zd.bind(null,e);return t.type=e,t};fe.createRef=function(){return{current:null}};fe.forwardRef=function(e){return{$$typeof:Pm,render:e}};fe.isValidElement=wl;fe.lazy=function(e){return{$$typeof:Lm,_payload:{_status:-1,_result:e},_init:Dm}};fe.memo=function(e,t){return{$$typeof:zm,type:e,compare:t===void 0?null:t}};fe.startTransition=function(e){var t=Ri.transition;Ri.transition={};try{e()}finally{Ri.transition=t}};fe.unstable_act=Ld;fe.useCallback=function(e,t){return ut.current.useCallback(e,t)};fe.useContext=function(e){return ut.current.useContext(e)};fe.useDebugValue=function(){};fe.useDeferredValue=function(e){return ut.current.useDeferredValue(e)};fe.useEffect=function(e,t){return ut.current.useEffect(e,t)};fe.useId=function(){return ut.current.useId()};fe.useImperativeHandle=function(e,t,n){return ut.current.useImperativeHandle(e,t,n)};fe.useInsertionEffect=function(e,t){return ut.current.useInsertionEffect(e,t)};fe.useLayoutEffect=function(e,t){return ut.current.useLayoutEffect(e,t)};fe.useMemo=function(e,t){return ut.current.useMemo(e,t)};fe.useReducer=function(e,t,n){return ut.current.useReducer(e,t,n)};fe.useRef=function(e){return ut.current.useRef(e)};fe.useState=function(e){return ut.current.useState(e)};fe.useSyncExternalStore=function(e,t,n){return ut.current.useSyncExternalStore(e,t,n)};fe.useTransition=function(){return ut.current.useTransition()};fe.version="18.3.1";Sd.exports=fe;var d=Sd.exports;const xt=kd(d);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Am=d,$m=Symbol.for("react.element"),Bm=Symbol.for("react.fragment"),Um=Object.prototype.hasOwnProperty,Wm=Am.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,qm={key:!0,ref:!0,__self:!0,__source:!0};function Id(e,t,n){var r,i={},o=null,a=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)Um.call(t,r)&&!qm.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:$m,type:e,key:o,ref:a,props:i,_owner:Wm.current}}xo.Fragment=Bm;xo.jsx=Id;xo.jsxs=Id;Nd.exports=xo;var s=Nd.exports,wa={},Fd={exports:{}},Et={},Md={exports:{}},Dd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(z,T){var $=z.length;z.push(T);e:for(;0<$;){var A=$-1>>>1,W=z[A];if(0<i(W,T))z[A]=T,z[$]=W,$=A;else break e}}function n(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var T=z[0],$=z.pop();if($!==T){z[0]=$;e:for(var A=0,W=z.length,B=W>>>1;A<B;){var re=2*(A+1)-1,ie=z[re],ae=re+1,pe=z[ae];if(0>i(ie,$))ae<W&&0>i(pe,ie)?(z[A]=pe,z[ae]=$,A=ae):(z[A]=ie,z[re]=$,A=re);else if(ae<W&&0>i(pe,$))z[A]=pe,z[ae]=$,A=ae;else break e}}return T}function i(z,T){var $=z.sortIndex-T.sortIndex;return $!==0?$:z.id-T.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var a=Date,l=a.now();e.unstable_now=function(){return a.now()-l}}var c=[],u=[],g=1,f=null,m=3,k=!1,b=!1,j=!1,R=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(z){for(var T=n(u);T!==null;){if(T.callback===null)r(u);else if(T.startTime<=z)r(u),T.sortIndex=T.expirationTime,t(c,T);else break;T=n(u)}}function E(z){if(j=!1,y(z),!b)if(n(c)!==null)b=!0,Z(P);else{var T=n(u);T!==null&&H(E,T.startTime-z)}}function P(z,T){b=!1,j&&(j=!1,v(h),h=-1),k=!0;var $=m;try{for(y(T),f=n(c);f!==null&&(!(f.expirationTime>T)||z&&!S());){var A=f.callback;if(typeof A=="function"){f.callback=null,m=f.priorityLevel;var W=A(f.expirationTime<=T);T=e.unstable_now(),typeof W=="function"?f.callback=W:f===n(c)&&r(c),y(T)}else r(c);f=n(c)}if(f!==null)var B=!0;else{var re=n(u);re!==null&&H(E,re.startTime-T),B=!1}return B}finally{f=null,m=$,k=!1}}var L=!1,N=null,h=-1,x=5,w=-1;function S(){return!(e.unstable_now()-w<x)}function _(){if(N!==null){var z=e.unstable_now();w=z;var T=!0;try{T=N(!0,z)}finally{T?U():(L=!1,N=null)}}else L=!1}var U;if(typeof p=="function")U=function(){p(_)};else if(typeof MessageChannel<"u"){var V=new MessageChannel,J=V.port2;V.port1.onmessage=_,U=function(){J.postMessage(null)}}else U=function(){R(_,0)};function Z(z){N=z,L||(L=!0,U())}function H(z,T){h=R(function(){z(e.unstable_now())},T)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(z){z.callback=null},e.unstable_continueExecution=function(){b||k||(b=!0,Z(P))},e.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):x=0<z?Math.floor(1e3/z):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(z){switch(m){case 1:case 2:case 3:var T=3;break;default:T=m}var $=m;m=T;try{return z()}finally{m=$}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(z,T){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var $=m;m=z;try{return T()}finally{m=$}},e.unstable_scheduleCallback=function(z,T,$){var A=e.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?A+$:A):$=A,z){case 1:var W=-1;break;case 2:W=250;break;case 5:W=1073741823;break;case 4:W=1e4;break;default:W=5e3}return W=$+W,z={id:g++,callback:T,priorityLevel:z,startTime:$,expirationTime:W,sortIndex:-1},$>A?(z.sortIndex=$,t(u,z),n(c)===null&&z===n(u)&&(j?(v(h),h=-1):j=!0,H(E,$-A))):(z.sortIndex=W,t(c,z),b||k||(b=!0,Z(P))),z},e.unstable_shouldYield=S,e.unstable_wrapCallback=function(z){var T=m;return function(){var $=m;m=T;try{return z.apply(this,arguments)}finally{m=$}}}})(Dd);Md.exports=Dd;var Hm=Md.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qm=d,Ct=Hm;function O(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Od=new Set,Es={};function pr(e,t){Or(e,t),Or(e+"Capture",t)}function Or(e,t){for(Es[e]=t,e=0;e<t.length;e++)Od.add(t[e])}var gn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ja=Object.prototype.hasOwnProperty,Ym=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,qc={},Hc={};function Vm(e){return ja.call(Hc,e)?!0:ja.call(qc,e)?!1:Ym.test(e)?Hc[e]=!0:(qc[e]=!0,!1)}function Km(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Xm(e,t,n,r){if(t===null||typeof t>"u"||Km(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function dt(e,t,n,r,i,o,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=a}var tt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){tt[e]=new dt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];tt[t]=new dt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){tt[e]=new dt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){tt[e]=new dt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){tt[e]=new dt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){tt[e]=new dt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){tt[e]=new dt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){tt[e]=new dt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){tt[e]=new dt(e,5,!1,e.toLowerCase(),null,!1,!1)});var jl=/[\-:]([a-z])/g;function kl(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(jl,kl);tt[t]=new dt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(jl,kl);tt[t]=new dt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(jl,kl);tt[t]=new dt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){tt[e]=new dt(e,1,!1,e.toLowerCase(),null,!1,!1)});tt.xlinkHref=new dt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){tt[e]=new dt(e,1,!1,e.toLowerCase(),null,!0,!0)});function Nl(e,t,n,r){var i=tt.hasOwnProperty(t)?tt[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Xm(t,n,i,r)&&(n=null),r||i===null?Vm(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var jn=Qm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,si=Symbol.for("react.element"),yr=Symbol.for("react.portal"),br=Symbol.for("react.fragment"),Sl=Symbol.for("react.strict_mode"),ka=Symbol.for("react.profiler"),Ad=Symbol.for("react.provider"),$d=Symbol.for("react.context"),Cl=Symbol.for("react.forward_ref"),Na=Symbol.for("react.suspense"),Sa=Symbol.for("react.suspense_list"),El=Symbol.for("react.memo"),_n=Symbol.for("react.lazy"),Bd=Symbol.for("react.offscreen"),Qc=Symbol.iterator;function ns(e){return e===null||typeof e!="object"?null:(e=Qc&&e[Qc]||e["@@iterator"],typeof e=="function"?e:null)}var Me=Object.assign,Ao;function ps(e){if(Ao===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ao=t&&t[1]||""}return`
`+Ao+e}var $o=!1;function Bo(e,t){if(!e||$o)return"";$o=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),a=i.length-1,l=o.length-1;1<=a&&0<=l&&i[a]!==o[l];)l--;for(;1<=a&&0<=l;a--,l--)if(i[a]!==o[l]){if(a!==1||l!==1)do if(a--,l--,0>l||i[a]!==o[l]){var c=`
`+i[a].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=a&&0<=l);break}}}finally{$o=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?ps(e):""}function Gm(e){switch(e.tag){case 5:return ps(e.type);case 16:return ps("Lazy");case 13:return ps("Suspense");case 19:return ps("SuspenseList");case 0:case 2:case 15:return e=Bo(e.type,!1),e;case 11:return e=Bo(e.type.render,!1),e;case 1:return e=Bo(e.type,!0),e;default:return""}}function Ca(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case br:return"Fragment";case yr:return"Portal";case ka:return"Profiler";case Sl:return"StrictMode";case Na:return"Suspense";case Sa:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case $d:return(e.displayName||"Context")+".Consumer";case Ad:return(e._context.displayName||"Context")+".Provider";case Cl:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case El:return t=e.displayName||null,t!==null?t:Ca(e.type)||"Memo";case _n:t=e._payload,e=e._init;try{return Ca(e(t))}catch{}}return null}function Jm(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ca(t);case 8:return t===Sl?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Wn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ud(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Zm(e){var t=Ud(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,o.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ii(e){e._valueTracker||(e._valueTracker=Zm(e))}function Wd(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Ud(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Wi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ea(e,t){var n=t.checked;return Me({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Yc(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Wn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function qd(e,t){t=t.checked,t!=null&&Nl(e,"checked",t,!1)}function _a(e,t){qd(e,t);var n=Wn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Ra(e,t.type,n):t.hasOwnProperty("defaultValue")&&Ra(e,t.type,Wn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Vc(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Ra(e,t,n){(t!=="number"||Wi(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var ms=Array.isArray;function Tr(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Wn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Pa(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(O(91));return Me({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Kc(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(O(92));if(ms(n)){if(1<n.length)throw Error(O(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Wn(n)}}function Hd(e,t){var n=Wn(t.value),r=Wn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Xc(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Qd(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ta(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Qd(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var oi,Yd=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(oi=oi||document.createElement("div"),oi.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=oi.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function _s(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var gs={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},eh=["Webkit","ms","Moz","O"];Object.keys(gs).forEach(function(e){eh.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),gs[t]=gs[e]})});function Vd(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||gs.hasOwnProperty(e)&&gs[e]?(""+t).trim():t+"px"}function Kd(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Vd(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var th=Me({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function za(e,t){if(t){if(th[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(O(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(O(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(O(61))}if(t.style!=null&&typeof t.style!="object")throw Error(O(62))}}function La(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ia=null;function _l(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Fa=null,zr=null,Lr=null;function Gc(e){if(e=Vs(e)){if(typeof Fa!="function")throw Error(O(280));var t=e.stateNode;t&&(t=wo(t),Fa(e.stateNode,e.type,t))}}function Xd(e){zr?Lr?Lr.push(e):Lr=[e]:zr=e}function Gd(){if(zr){var e=zr,t=Lr;if(Lr=zr=null,Gc(e),t)for(e=0;e<t.length;e++)Gc(t[e])}}function Jd(e,t){return e(t)}function Zd(){}var Uo=!1;function ef(e,t,n){if(Uo)return e(t,n);Uo=!0;try{return Jd(e,t,n)}finally{Uo=!1,(zr!==null||Lr!==null)&&(Zd(),Gd())}}function Rs(e,t){var n=e.stateNode;if(n===null)return null;var r=wo(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(O(231,t,typeof n));return n}var Ma=!1;if(gn)try{var rs={};Object.defineProperty(rs,"passive",{get:function(){Ma=!0}}),window.addEventListener("test",rs,rs),window.removeEventListener("test",rs,rs)}catch{Ma=!1}function nh(e,t,n,r,i,o,a,l,c){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(g){this.onError(g)}}var vs=!1,qi=null,Hi=!1,Da=null,rh={onError:function(e){vs=!0,qi=e}};function sh(e,t,n,r,i,o,a,l,c){vs=!1,qi=null,nh.apply(rh,arguments)}function ih(e,t,n,r,i,o,a,l,c){if(sh.apply(this,arguments),vs){if(vs){var u=qi;vs=!1,qi=null}else throw Error(O(198));Hi||(Hi=!0,Da=u)}}function mr(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function tf(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Jc(e){if(mr(e)!==e)throw Error(O(188))}function oh(e){var t=e.alternate;if(!t){if(t=mr(e),t===null)throw Error(O(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return Jc(i),e;if(o===r)return Jc(i),t;o=o.sibling}throw Error(O(188))}if(n.return!==r.return)n=i,r=o;else{for(var a=!1,l=i.child;l;){if(l===n){a=!0,n=i,r=o;break}if(l===r){a=!0,r=i,n=o;break}l=l.sibling}if(!a){for(l=o.child;l;){if(l===n){a=!0,n=o,r=i;break}if(l===r){a=!0,r=o,n=i;break}l=l.sibling}if(!a)throw Error(O(189))}}if(n.alternate!==r)throw Error(O(190))}if(n.tag!==3)throw Error(O(188));return n.stateNode.current===n?e:t}function nf(e){return e=oh(e),e!==null?rf(e):null}function rf(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=rf(e);if(t!==null)return t;e=e.sibling}return null}var sf=Ct.unstable_scheduleCallback,Zc=Ct.unstable_cancelCallback,ah=Ct.unstable_shouldYield,lh=Ct.unstable_requestPaint,Ae=Ct.unstable_now,ch=Ct.unstable_getCurrentPriorityLevel,Rl=Ct.unstable_ImmediatePriority,of=Ct.unstable_UserBlockingPriority,Qi=Ct.unstable_NormalPriority,uh=Ct.unstable_LowPriority,af=Ct.unstable_IdlePriority,go=null,on=null;function dh(e){if(on&&typeof on.onCommitFiberRoot=="function")try{on.onCommitFiberRoot(go,e,void 0,(e.current.flags&128)===128)}catch{}}var Ht=Math.clz32?Math.clz32:mh,fh=Math.log,ph=Math.LN2;function mh(e){return e>>>=0,e===0?32:31-(fh(e)/ph|0)|0}var ai=64,li=4194304;function hs(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Yi(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,a=n&268435455;if(a!==0){var l=a&~i;l!==0?r=hs(l):(o&=a,o!==0&&(r=hs(o)))}else a=n&~i,a!==0?r=hs(a):o!==0&&(r=hs(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Ht(t),i=1<<n,r|=e[n],t&=~i;return r}function hh(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function xh(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var a=31-Ht(o),l=1<<a,c=i[a];c===-1?(!(l&n)||l&r)&&(i[a]=hh(l,t)):c<=t&&(e.expiredLanes|=l),o&=~l}}function Oa(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function lf(){var e=ai;return ai<<=1,!(ai&4194240)&&(ai=64),e}function Wo(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Qs(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ht(t),e[t]=n}function gh(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Ht(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function Pl(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ht(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var je=0;function cf(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var uf,Tl,df,ff,pf,Aa=!1,ci=[],Fn=null,Mn=null,Dn=null,Ps=new Map,Ts=new Map,Tn=[],vh="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function eu(e,t){switch(e){case"focusin":case"focusout":Fn=null;break;case"dragenter":case"dragleave":Mn=null;break;case"mouseover":case"mouseout":Dn=null;break;case"pointerover":case"pointerout":Ps.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ts.delete(t.pointerId)}}function ss(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=Vs(t),t!==null&&Tl(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function yh(e,t,n,r,i){switch(t){case"focusin":return Fn=ss(Fn,e,t,n,r,i),!0;case"dragenter":return Mn=ss(Mn,e,t,n,r,i),!0;case"mouseover":return Dn=ss(Dn,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Ps.set(o,ss(Ps.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Ts.set(o,ss(Ts.get(o)||null,e,t,n,r,i)),!0}return!1}function mf(e){var t=nr(e.target);if(t!==null){var n=mr(t);if(n!==null){if(t=n.tag,t===13){if(t=tf(n),t!==null){e.blockedOn=t,pf(e.priority,function(){df(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Pi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=$a(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Ia=r,n.target.dispatchEvent(r),Ia=null}else return t=Vs(n),t!==null&&Tl(t),e.blockedOn=n,!1;t.shift()}return!0}function tu(e,t,n){Pi(e)&&n.delete(t)}function bh(){Aa=!1,Fn!==null&&Pi(Fn)&&(Fn=null),Mn!==null&&Pi(Mn)&&(Mn=null),Dn!==null&&Pi(Dn)&&(Dn=null),Ps.forEach(tu),Ts.forEach(tu)}function is(e,t){e.blockedOn===t&&(e.blockedOn=null,Aa||(Aa=!0,Ct.unstable_scheduleCallback(Ct.unstable_NormalPriority,bh)))}function zs(e){function t(i){return is(i,e)}if(0<ci.length){is(ci[0],e);for(var n=1;n<ci.length;n++){var r=ci[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Fn!==null&&is(Fn,e),Mn!==null&&is(Mn,e),Dn!==null&&is(Dn,e),Ps.forEach(t),Ts.forEach(t),n=0;n<Tn.length;n++)r=Tn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Tn.length&&(n=Tn[0],n.blockedOn===null);)mf(n),n.blockedOn===null&&Tn.shift()}var Ir=jn.ReactCurrentBatchConfig,Vi=!0;function wh(e,t,n,r){var i=je,o=Ir.transition;Ir.transition=null;try{je=1,zl(e,t,n,r)}finally{je=i,Ir.transition=o}}function jh(e,t,n,r){var i=je,o=Ir.transition;Ir.transition=null;try{je=4,zl(e,t,n,r)}finally{je=i,Ir.transition=o}}function zl(e,t,n,r){if(Vi){var i=$a(e,t,n,r);if(i===null)Zo(e,t,r,Ki,n),eu(e,r);else if(yh(i,e,t,n,r))r.stopPropagation();else if(eu(e,r),t&4&&-1<vh.indexOf(e)){for(;i!==null;){var o=Vs(i);if(o!==null&&uf(o),o=$a(e,t,n,r),o===null&&Zo(e,t,r,Ki,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else Zo(e,t,r,null,n)}}var Ki=null;function $a(e,t,n,r){if(Ki=null,e=_l(r),e=nr(e),e!==null)if(t=mr(e),t===null)e=null;else if(n=t.tag,n===13){if(e=tf(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ki=e,null}function hf(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ch()){case Rl:return 1;case of:return 4;case Qi:case uh:return 16;case af:return 536870912;default:return 16}default:return 16}}var Ln=null,Ll=null,Ti=null;function xf(){if(Ti)return Ti;var e,t=Ll,n=t.length,r,i="value"in Ln?Ln.value:Ln.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===i[o-r];r++);return Ti=i.slice(e,1<r?1-r:void 0)}function zi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ui(){return!0}function nu(){return!1}function _t(e){function t(n,r,i,o,a){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=a,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(o):o[l]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?ui:nu,this.isPropagationStopped=nu,this}return Me(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ui)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ui)},persist:function(){},isPersistent:ui}),t}var Qr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Il=_t(Qr),Ys=Me({},Qr,{view:0,detail:0}),kh=_t(Ys),qo,Ho,os,vo=Me({},Ys,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Fl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==os&&(os&&e.type==="mousemove"?(qo=e.screenX-os.screenX,Ho=e.screenY-os.screenY):Ho=qo=0,os=e),qo)},movementY:function(e){return"movementY"in e?e.movementY:Ho}}),ru=_t(vo),Nh=Me({},vo,{dataTransfer:0}),Sh=_t(Nh),Ch=Me({},Ys,{relatedTarget:0}),Qo=_t(Ch),Eh=Me({},Qr,{animationName:0,elapsedTime:0,pseudoElement:0}),_h=_t(Eh),Rh=Me({},Qr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Ph=_t(Rh),Th=Me({},Qr,{data:0}),su=_t(Th),zh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Lh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ih={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Fh(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Ih[e])?!!t[e]:!1}function Fl(){return Fh}var Mh=Me({},Ys,{key:function(e){if(e.key){var t=zh[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=zi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Lh[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Fl,charCode:function(e){return e.type==="keypress"?zi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?zi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Dh=_t(Mh),Oh=Me({},vo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),iu=_t(Oh),Ah=Me({},Ys,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Fl}),$h=_t(Ah),Bh=Me({},Qr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Uh=_t(Bh),Wh=Me({},vo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),qh=_t(Wh),Hh=[9,13,27,32],Ml=gn&&"CompositionEvent"in window,ys=null;gn&&"documentMode"in document&&(ys=document.documentMode);var Qh=gn&&"TextEvent"in window&&!ys,gf=gn&&(!Ml||ys&&8<ys&&11>=ys),ou=String.fromCharCode(32),au=!1;function vf(e,t){switch(e){case"keyup":return Hh.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function yf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var wr=!1;function Yh(e,t){switch(e){case"compositionend":return yf(t);case"keypress":return t.which!==32?null:(au=!0,ou);case"textInput":return e=t.data,e===ou&&au?null:e;default:return null}}function Vh(e,t){if(wr)return e==="compositionend"||!Ml&&vf(e,t)?(e=xf(),Ti=Ll=Ln=null,wr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return gf&&t.locale!=="ko"?null:t.data;default:return null}}var Kh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function lu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Kh[e.type]:t==="textarea"}function bf(e,t,n,r){Xd(r),t=Xi(t,"onChange"),0<t.length&&(n=new Il("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var bs=null,Ls=null;function Xh(e){Tf(e,0)}function yo(e){var t=Nr(e);if(Wd(t))return e}function Gh(e,t){if(e==="change")return t}var wf=!1;if(gn){var Yo;if(gn){var Vo="oninput"in document;if(!Vo){var cu=document.createElement("div");cu.setAttribute("oninput","return;"),Vo=typeof cu.oninput=="function"}Yo=Vo}else Yo=!1;wf=Yo&&(!document.documentMode||9<document.documentMode)}function uu(){bs&&(bs.detachEvent("onpropertychange",jf),Ls=bs=null)}function jf(e){if(e.propertyName==="value"&&yo(Ls)){var t=[];bf(t,Ls,e,_l(e)),ef(Xh,t)}}function Jh(e,t,n){e==="focusin"?(uu(),bs=t,Ls=n,bs.attachEvent("onpropertychange",jf)):e==="focusout"&&uu()}function Zh(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return yo(Ls)}function e0(e,t){if(e==="click")return yo(t)}function t0(e,t){if(e==="input"||e==="change")return yo(t)}function n0(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Yt=typeof Object.is=="function"?Object.is:n0;function Is(e,t){if(Yt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!ja.call(t,i)||!Yt(e[i],t[i]))return!1}return!0}function du(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function fu(e,t){var n=du(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=du(n)}}function kf(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?kf(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Nf(){for(var e=window,t=Wi();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Wi(e.document)}return t}function Dl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function r0(e){var t=Nf(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&kf(n.ownerDocument.documentElement,n)){if(r!==null&&Dl(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=fu(n,o);var a=fu(n,r);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var s0=gn&&"documentMode"in document&&11>=document.documentMode,jr=null,Ba=null,ws=null,Ua=!1;function pu(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ua||jr==null||jr!==Wi(r)||(r=jr,"selectionStart"in r&&Dl(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ws&&Is(ws,r)||(ws=r,r=Xi(Ba,"onSelect"),0<r.length&&(t=new Il("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=jr)))}function di(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var kr={animationend:di("Animation","AnimationEnd"),animationiteration:di("Animation","AnimationIteration"),animationstart:di("Animation","AnimationStart"),transitionend:di("Transition","TransitionEnd")},Ko={},Sf={};gn&&(Sf=document.createElement("div").style,"AnimationEvent"in window||(delete kr.animationend.animation,delete kr.animationiteration.animation,delete kr.animationstart.animation),"TransitionEvent"in window||delete kr.transitionend.transition);function bo(e){if(Ko[e])return Ko[e];if(!kr[e])return e;var t=kr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Sf)return Ko[e]=t[n];return e}var Cf=bo("animationend"),Ef=bo("animationiteration"),_f=bo("animationstart"),Rf=bo("transitionend"),Pf=new Map,mu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Hn(e,t){Pf.set(e,t),pr(t,[e])}for(var Xo=0;Xo<mu.length;Xo++){var Go=mu[Xo],i0=Go.toLowerCase(),o0=Go[0].toUpperCase()+Go.slice(1);Hn(i0,"on"+o0)}Hn(Cf,"onAnimationEnd");Hn(Ef,"onAnimationIteration");Hn(_f,"onAnimationStart");Hn("dblclick","onDoubleClick");Hn("focusin","onFocus");Hn("focusout","onBlur");Hn(Rf,"onTransitionEnd");Or("onMouseEnter",["mouseout","mouseover"]);Or("onMouseLeave",["mouseout","mouseover"]);Or("onPointerEnter",["pointerout","pointerover"]);Or("onPointerLeave",["pointerout","pointerover"]);pr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));pr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));pr("onBeforeInput",["compositionend","keypress","textInput","paste"]);pr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));pr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));pr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var xs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),a0=new Set("cancel close invalid load scroll toggle".split(" ").concat(xs));function hu(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,ih(r,t,void 0,e),e.currentTarget=null}function Tf(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var a=r.length-1;0<=a;a--){var l=r[a],c=l.instance,u=l.currentTarget;if(l=l.listener,c!==o&&i.isPropagationStopped())break e;hu(i,l,u),o=c}else for(a=0;a<r.length;a++){if(l=r[a],c=l.instance,u=l.currentTarget,l=l.listener,c!==o&&i.isPropagationStopped())break e;hu(i,l,u),o=c}}}if(Hi)throw e=Da,Hi=!1,Da=null,e}function Ee(e,t){var n=t[Ya];n===void 0&&(n=t[Ya]=new Set);var r=e+"__bubble";n.has(r)||(zf(t,e,2,!1),n.add(r))}function Jo(e,t,n){var r=0;t&&(r|=4),zf(n,e,r,t)}var fi="_reactListening"+Math.random().toString(36).slice(2);function Fs(e){if(!e[fi]){e[fi]=!0,Od.forEach(function(n){n!=="selectionchange"&&(a0.has(n)||Jo(n,!1,e),Jo(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[fi]||(t[fi]=!0,Jo("selectionchange",!1,t))}}function zf(e,t,n,r){switch(hf(t)){case 1:var i=wh;break;case 4:i=jh;break;default:i=zl}n=i.bind(null,t,n,e),i=void 0,!Ma||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Zo(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var c=a.tag;if((c===3||c===4)&&(c=a.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;a=a.return}for(;l!==null;){if(a=nr(l),a===null)return;if(c=a.tag,c===5||c===6){r=o=a;continue e}l=l.parentNode}}r=r.return}ef(function(){var u=o,g=_l(n),f=[];e:{var m=Pf.get(e);if(m!==void 0){var k=Il,b=e;switch(e){case"keypress":if(zi(n)===0)break e;case"keydown":case"keyup":k=Dh;break;case"focusin":b="focus",k=Qo;break;case"focusout":b="blur",k=Qo;break;case"beforeblur":case"afterblur":k=Qo;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":k=ru;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":k=Sh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":k=$h;break;case Cf:case Ef:case _f:k=_h;break;case Rf:k=Uh;break;case"scroll":k=kh;break;case"wheel":k=qh;break;case"copy":case"cut":case"paste":k=Ph;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":k=iu}var j=(t&4)!==0,R=!j&&e==="scroll",v=j?m!==null?m+"Capture":null:m;j=[];for(var p=u,y;p!==null;){y=p;var E=y.stateNode;if(y.tag===5&&E!==null&&(y=E,v!==null&&(E=Rs(p,v),E!=null&&j.push(Ms(p,E,y)))),R)break;p=p.return}0<j.length&&(m=new k(m,b,null,n,g),f.push({event:m,listeners:j}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",k=e==="mouseout"||e==="pointerout",m&&n!==Ia&&(b=n.relatedTarget||n.fromElement)&&(nr(b)||b[vn]))break e;if((k||m)&&(m=g.window===g?g:(m=g.ownerDocument)?m.defaultView||m.parentWindow:window,k?(b=n.relatedTarget||n.toElement,k=u,b=b?nr(b):null,b!==null&&(R=mr(b),b!==R||b.tag!==5&&b.tag!==6)&&(b=null)):(k=null,b=u),k!==b)){if(j=ru,E="onMouseLeave",v="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(j=iu,E="onPointerLeave",v="onPointerEnter",p="pointer"),R=k==null?m:Nr(k),y=b==null?m:Nr(b),m=new j(E,p+"leave",k,n,g),m.target=R,m.relatedTarget=y,E=null,nr(g)===u&&(j=new j(v,p+"enter",b,n,g),j.target=y,j.relatedTarget=R,E=j),R=E,k&&b)t:{for(j=k,v=b,p=0,y=j;y;y=gr(y))p++;for(y=0,E=v;E;E=gr(E))y++;for(;0<p-y;)j=gr(j),p--;for(;0<y-p;)v=gr(v),y--;for(;p--;){if(j===v||v!==null&&j===v.alternate)break t;j=gr(j),v=gr(v)}j=null}else j=null;k!==null&&xu(f,m,k,j,!1),b!==null&&R!==null&&xu(f,R,b,j,!0)}}e:{if(m=u?Nr(u):window,k=m.nodeName&&m.nodeName.toLowerCase(),k==="select"||k==="input"&&m.type==="file")var P=Gh;else if(lu(m))if(wf)P=t0;else{P=Zh;var L=Jh}else(k=m.nodeName)&&k.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(P=e0);if(P&&(P=P(e,u))){bf(f,P,n,g);break e}L&&L(e,m,u),e==="focusout"&&(L=m._wrapperState)&&L.controlled&&m.type==="number"&&Ra(m,"number",m.value)}switch(L=u?Nr(u):window,e){case"focusin":(lu(L)||L.contentEditable==="true")&&(jr=L,Ba=u,ws=null);break;case"focusout":ws=Ba=jr=null;break;case"mousedown":Ua=!0;break;case"contextmenu":case"mouseup":case"dragend":Ua=!1,pu(f,n,g);break;case"selectionchange":if(s0)break;case"keydown":case"keyup":pu(f,n,g)}var N;if(Ml)e:{switch(e){case"compositionstart":var h="onCompositionStart";break e;case"compositionend":h="onCompositionEnd";break e;case"compositionupdate":h="onCompositionUpdate";break e}h=void 0}else wr?vf(e,n)&&(h="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(h="onCompositionStart");h&&(gf&&n.locale!=="ko"&&(wr||h!=="onCompositionStart"?h==="onCompositionEnd"&&wr&&(N=xf()):(Ln=g,Ll="value"in Ln?Ln.value:Ln.textContent,wr=!0)),L=Xi(u,h),0<L.length&&(h=new su(h,e,null,n,g),f.push({event:h,listeners:L}),N?h.data=N:(N=yf(n),N!==null&&(h.data=N)))),(N=Qh?Yh(e,n):Vh(e,n))&&(u=Xi(u,"onBeforeInput"),0<u.length&&(g=new su("onBeforeInput","beforeinput",null,n,g),f.push({event:g,listeners:u}),g.data=N))}Tf(f,t)})}function Ms(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Xi(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Rs(e,n),o!=null&&r.unshift(Ms(e,o,i)),o=Rs(e,t),o!=null&&r.push(Ms(e,o,i))),e=e.return}return r}function gr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function xu(e,t,n,r,i){for(var o=t._reactName,a=[];n!==null&&n!==r;){var l=n,c=l.alternate,u=l.stateNode;if(c!==null&&c===r)break;l.tag===5&&u!==null&&(l=u,i?(c=Rs(n,o),c!=null&&a.unshift(Ms(n,c,l))):i||(c=Rs(n,o),c!=null&&a.push(Ms(n,c,l)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var l0=/\r\n?/g,c0=/\u0000|\uFFFD/g;function gu(e){return(typeof e=="string"?e:""+e).replace(l0,`
`).replace(c0,"")}function pi(e,t,n){if(t=gu(t),gu(e)!==t&&n)throw Error(O(425))}function Gi(){}var Wa=null,qa=null;function Ha(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Qa=typeof setTimeout=="function"?setTimeout:void 0,u0=typeof clearTimeout=="function"?clearTimeout:void 0,vu=typeof Promise=="function"?Promise:void 0,d0=typeof queueMicrotask=="function"?queueMicrotask:typeof vu<"u"?function(e){return vu.resolve(null).then(e).catch(f0)}:Qa;function f0(e){setTimeout(function(){throw e})}function ea(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),zs(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);zs(t)}function On(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function yu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Yr=Math.random().toString(36).slice(2),rn="__reactFiber$"+Yr,Ds="__reactProps$"+Yr,vn="__reactContainer$"+Yr,Ya="__reactEvents$"+Yr,p0="__reactListeners$"+Yr,m0="__reactHandles$"+Yr;function nr(e){var t=e[rn];if(t)return t;for(var n=e.parentNode;n;){if(t=n[vn]||n[rn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=yu(e);e!==null;){if(n=e[rn])return n;e=yu(e)}return t}e=n,n=e.parentNode}return null}function Vs(e){return e=e[rn]||e[vn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Nr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(O(33))}function wo(e){return e[Ds]||null}var Va=[],Sr=-1;function Qn(e){return{current:e}}function _e(e){0>Sr||(e.current=Va[Sr],Va[Sr]=null,Sr--)}function Ne(e,t){Sr++,Va[Sr]=e.current,e.current=t}var qn={},at=Qn(qn),yt=Qn(!1),lr=qn;function Ar(e,t){var n=e.type.contextTypes;if(!n)return qn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function bt(e){return e=e.childContextTypes,e!=null}function Ji(){_e(yt),_e(at)}function bu(e,t,n){if(at.current!==qn)throw Error(O(168));Ne(at,t),Ne(yt,n)}function Lf(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(O(108,Jm(e)||"Unknown",i));return Me({},n,r)}function Zi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||qn,lr=at.current,Ne(at,e),Ne(yt,yt.current),!0}function wu(e,t,n){var r=e.stateNode;if(!r)throw Error(O(169));n?(e=Lf(e,t,lr),r.__reactInternalMemoizedMergedChildContext=e,_e(yt),_e(at),Ne(at,e)):_e(yt),Ne(yt,n)}var dn=null,jo=!1,ta=!1;function If(e){dn===null?dn=[e]:dn.push(e)}function h0(e){jo=!0,If(e)}function Yn(){if(!ta&&dn!==null){ta=!0;var e=0,t=je;try{var n=dn;for(je=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}dn=null,jo=!1}catch(i){throw dn!==null&&(dn=dn.slice(e+1)),sf(Rl,Yn),i}finally{je=t,ta=!1}}return null}var Cr=[],Er=0,eo=null,to=0,zt=[],Lt=0,cr=null,fn=1,pn="";function er(e,t){Cr[Er++]=to,Cr[Er++]=eo,eo=e,to=t}function Ff(e,t,n){zt[Lt++]=fn,zt[Lt++]=pn,zt[Lt++]=cr,cr=e;var r=fn;e=pn;var i=32-Ht(r)-1;r&=~(1<<i),n+=1;var o=32-Ht(t)+i;if(30<o){var a=i-i%5;o=(r&(1<<a)-1).toString(32),r>>=a,i-=a,fn=1<<32-Ht(t)+i|n<<i|r,pn=o+e}else fn=1<<o|n<<i|r,pn=e}function Ol(e){e.return!==null&&(er(e,1),Ff(e,1,0))}function Al(e){for(;e===eo;)eo=Cr[--Er],Cr[Er]=null,to=Cr[--Er],Cr[Er]=null;for(;e===cr;)cr=zt[--Lt],zt[Lt]=null,pn=zt[--Lt],zt[Lt]=null,fn=zt[--Lt],zt[Lt]=null}var St=null,Nt=null,Re=!1,Wt=null;function Mf(e,t){var n=It(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function ju(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,St=e,Nt=On(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,St=e,Nt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=cr!==null?{id:fn,overflow:pn}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=It(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,St=e,Nt=null,!0):!1;default:return!1}}function Ka(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Xa(e){if(Re){var t=Nt;if(t){var n=t;if(!ju(e,t)){if(Ka(e))throw Error(O(418));t=On(n.nextSibling);var r=St;t&&ju(e,t)?Mf(r,n):(e.flags=e.flags&-4097|2,Re=!1,St=e)}}else{if(Ka(e))throw Error(O(418));e.flags=e.flags&-4097|2,Re=!1,St=e}}}function ku(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;St=e}function mi(e){if(e!==St)return!1;if(!Re)return ku(e),Re=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ha(e.type,e.memoizedProps)),t&&(t=Nt)){if(Ka(e))throw Df(),Error(O(418));for(;t;)Mf(e,t),t=On(t.nextSibling)}if(ku(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(O(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Nt=On(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Nt=null}}else Nt=St?On(e.stateNode.nextSibling):null;return!0}function Df(){for(var e=Nt;e;)e=On(e.nextSibling)}function $r(){Nt=St=null,Re=!1}function $l(e){Wt===null?Wt=[e]:Wt.push(e)}var x0=jn.ReactCurrentBatchConfig;function as(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(O(309));var r=n.stateNode}if(!r)throw Error(O(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(a){var l=i.refs;a===null?delete l[o]:l[o]=a},t._stringRef=o,t)}if(typeof e!="string")throw Error(O(284));if(!n._owner)throw Error(O(290,e))}return e}function hi(e,t){throw e=Object.prototype.toString.call(t),Error(O(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Nu(e){var t=e._init;return t(e._payload)}function Of(e){function t(v,p){if(e){var y=v.deletions;y===null?(v.deletions=[p],v.flags|=16):y.push(p)}}function n(v,p){if(!e)return null;for(;p!==null;)t(v,p),p=p.sibling;return null}function r(v,p){for(v=new Map;p!==null;)p.key!==null?v.set(p.key,p):v.set(p.index,p),p=p.sibling;return v}function i(v,p){return v=Un(v,p),v.index=0,v.sibling=null,v}function o(v,p,y){return v.index=y,e?(y=v.alternate,y!==null?(y=y.index,y<p?(v.flags|=2,p):y):(v.flags|=2,p)):(v.flags|=1048576,p)}function a(v){return e&&v.alternate===null&&(v.flags|=2),v}function l(v,p,y,E){return p===null||p.tag!==6?(p=la(y,v.mode,E),p.return=v,p):(p=i(p,y),p.return=v,p)}function c(v,p,y,E){var P=y.type;return P===br?g(v,p,y.props.children,E,y.key):p!==null&&(p.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===_n&&Nu(P)===p.type)?(E=i(p,y.props),E.ref=as(v,p,y),E.return=v,E):(E=Ai(y.type,y.key,y.props,null,v.mode,E),E.ref=as(v,p,y),E.return=v,E)}function u(v,p,y,E){return p===null||p.tag!==4||p.stateNode.containerInfo!==y.containerInfo||p.stateNode.implementation!==y.implementation?(p=ca(y,v.mode,E),p.return=v,p):(p=i(p,y.children||[]),p.return=v,p)}function g(v,p,y,E,P){return p===null||p.tag!==7?(p=or(y,v.mode,E,P),p.return=v,p):(p=i(p,y),p.return=v,p)}function f(v,p,y){if(typeof p=="string"&&p!==""||typeof p=="number")return p=la(""+p,v.mode,y),p.return=v,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case si:return y=Ai(p.type,p.key,p.props,null,v.mode,y),y.ref=as(v,null,p),y.return=v,y;case yr:return p=ca(p,v.mode,y),p.return=v,p;case _n:var E=p._init;return f(v,E(p._payload),y)}if(ms(p)||ns(p))return p=or(p,v.mode,y,null),p.return=v,p;hi(v,p)}return null}function m(v,p,y,E){var P=p!==null?p.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return P!==null?null:l(v,p,""+y,E);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case si:return y.key===P?c(v,p,y,E):null;case yr:return y.key===P?u(v,p,y,E):null;case _n:return P=y._init,m(v,p,P(y._payload),E)}if(ms(y)||ns(y))return P!==null?null:g(v,p,y,E,null);hi(v,y)}return null}function k(v,p,y,E,P){if(typeof E=="string"&&E!==""||typeof E=="number")return v=v.get(y)||null,l(p,v,""+E,P);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case si:return v=v.get(E.key===null?y:E.key)||null,c(p,v,E,P);case yr:return v=v.get(E.key===null?y:E.key)||null,u(p,v,E,P);case _n:var L=E._init;return k(v,p,y,L(E._payload),P)}if(ms(E)||ns(E))return v=v.get(y)||null,g(p,v,E,P,null);hi(p,E)}return null}function b(v,p,y,E){for(var P=null,L=null,N=p,h=p=0,x=null;N!==null&&h<y.length;h++){N.index>h?(x=N,N=null):x=N.sibling;var w=m(v,N,y[h],E);if(w===null){N===null&&(N=x);break}e&&N&&w.alternate===null&&t(v,N),p=o(w,p,h),L===null?P=w:L.sibling=w,L=w,N=x}if(h===y.length)return n(v,N),Re&&er(v,h),P;if(N===null){for(;h<y.length;h++)N=f(v,y[h],E),N!==null&&(p=o(N,p,h),L===null?P=N:L.sibling=N,L=N);return Re&&er(v,h),P}for(N=r(v,N);h<y.length;h++)x=k(N,v,h,y[h],E),x!==null&&(e&&x.alternate!==null&&N.delete(x.key===null?h:x.key),p=o(x,p,h),L===null?P=x:L.sibling=x,L=x);return e&&N.forEach(function(S){return t(v,S)}),Re&&er(v,h),P}function j(v,p,y,E){var P=ns(y);if(typeof P!="function")throw Error(O(150));if(y=P.call(y),y==null)throw Error(O(151));for(var L=P=null,N=p,h=p=0,x=null,w=y.next();N!==null&&!w.done;h++,w=y.next()){N.index>h?(x=N,N=null):x=N.sibling;var S=m(v,N,w.value,E);if(S===null){N===null&&(N=x);break}e&&N&&S.alternate===null&&t(v,N),p=o(S,p,h),L===null?P=S:L.sibling=S,L=S,N=x}if(w.done)return n(v,N),Re&&er(v,h),P;if(N===null){for(;!w.done;h++,w=y.next())w=f(v,w.value,E),w!==null&&(p=o(w,p,h),L===null?P=w:L.sibling=w,L=w);return Re&&er(v,h),P}for(N=r(v,N);!w.done;h++,w=y.next())w=k(N,v,h,w.value,E),w!==null&&(e&&w.alternate!==null&&N.delete(w.key===null?h:w.key),p=o(w,p,h),L===null?P=w:L.sibling=w,L=w);return e&&N.forEach(function(_){return t(v,_)}),Re&&er(v,h),P}function R(v,p,y,E){if(typeof y=="object"&&y!==null&&y.type===br&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case si:e:{for(var P=y.key,L=p;L!==null;){if(L.key===P){if(P=y.type,P===br){if(L.tag===7){n(v,L.sibling),p=i(L,y.props.children),p.return=v,v=p;break e}}else if(L.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===_n&&Nu(P)===L.type){n(v,L.sibling),p=i(L,y.props),p.ref=as(v,L,y),p.return=v,v=p;break e}n(v,L);break}else t(v,L);L=L.sibling}y.type===br?(p=or(y.props.children,v.mode,E,y.key),p.return=v,v=p):(E=Ai(y.type,y.key,y.props,null,v.mode,E),E.ref=as(v,p,y),E.return=v,v=E)}return a(v);case yr:e:{for(L=y.key;p!==null;){if(p.key===L)if(p.tag===4&&p.stateNode.containerInfo===y.containerInfo&&p.stateNode.implementation===y.implementation){n(v,p.sibling),p=i(p,y.children||[]),p.return=v,v=p;break e}else{n(v,p);break}else t(v,p);p=p.sibling}p=ca(y,v.mode,E),p.return=v,v=p}return a(v);case _n:return L=y._init,R(v,p,L(y._payload),E)}if(ms(y))return b(v,p,y,E);if(ns(y))return j(v,p,y,E);hi(v,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,p!==null&&p.tag===6?(n(v,p.sibling),p=i(p,y),p.return=v,v=p):(n(v,p),p=la(y,v.mode,E),p.return=v,v=p),a(v)):n(v,p)}return R}var Br=Of(!0),Af=Of(!1),no=Qn(null),ro=null,_r=null,Bl=null;function Ul(){Bl=_r=ro=null}function Wl(e){var t=no.current;_e(no),e._currentValue=t}function Ga(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Fr(e,t){ro=e,Bl=_r=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(vt=!0),e.firstContext=null)}function Mt(e){var t=e._currentValue;if(Bl!==e)if(e={context:e,memoizedValue:t,next:null},_r===null){if(ro===null)throw Error(O(308));_r=e,ro.dependencies={lanes:0,firstContext:e}}else _r=_r.next=e;return t}var rr=null;function ql(e){rr===null?rr=[e]:rr.push(e)}function $f(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,ql(t)):(n.next=i.next,i.next=n),t.interleaved=n,yn(e,r)}function yn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Rn=!1;function Hl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Bf(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function hn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function An(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,xe&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,yn(e,n)}return i=r.interleaved,i===null?(t.next=t,ql(r)):(t.next=i.next,i.next=t),r.interleaved=t,yn(e,n)}function Li(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Pl(e,n)}}function Su(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=a:o=o.next=a,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function so(e,t,n,r){var i=e.updateQueue;Rn=!1;var o=i.firstBaseUpdate,a=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var c=l,u=c.next;c.next=null,a===null?o=u:a.next=u,a=c;var g=e.alternate;g!==null&&(g=g.updateQueue,l=g.lastBaseUpdate,l!==a&&(l===null?g.firstBaseUpdate=u:l.next=u,g.lastBaseUpdate=c))}if(o!==null){var f=i.baseState;a=0,g=u=c=null,l=o;do{var m=l.lane,k=l.eventTime;if((r&m)===m){g!==null&&(g=g.next={eventTime:k,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var b=e,j=l;switch(m=t,k=n,j.tag){case 1:if(b=j.payload,typeof b=="function"){f=b.call(k,f,m);break e}f=b;break e;case 3:b.flags=b.flags&-65537|128;case 0:if(b=j.payload,m=typeof b=="function"?b.call(k,f,m):b,m==null)break e;f=Me({},f,m);break e;case 2:Rn=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,m=i.effects,m===null?i.effects=[l]:m.push(l))}else k={eventTime:k,lane:m,tag:l.tag,payload:l.payload,callback:l.callback,next:null},g===null?(u=g=k,c=f):g=g.next=k,a|=m;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;m=l,l=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(1);if(g===null&&(c=f),i.baseState=c,i.firstBaseUpdate=u,i.lastBaseUpdate=g,t=i.shared.interleaved,t!==null){i=t;do a|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);dr|=a,e.lanes=a,e.memoizedState=f}}function Cu(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(O(191,i));i.call(r)}}}var Ks={},an=Qn(Ks),Os=Qn(Ks),As=Qn(Ks);function sr(e){if(e===Ks)throw Error(O(174));return e}function Ql(e,t){switch(Ne(As,t),Ne(Os,e),Ne(an,Ks),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ta(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Ta(t,e)}_e(an),Ne(an,t)}function Ur(){_e(an),_e(Os),_e(As)}function Uf(e){sr(As.current);var t=sr(an.current),n=Ta(t,e.type);t!==n&&(Ne(Os,e),Ne(an,n))}function Yl(e){Os.current===e&&(_e(an),_e(Os))}var Ie=Qn(0);function io(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var na=[];function Vl(){for(var e=0;e<na.length;e++)na[e]._workInProgressVersionPrimary=null;na.length=0}var Ii=jn.ReactCurrentDispatcher,ra=jn.ReactCurrentBatchConfig,ur=0,Fe=null,He=null,Ke=null,oo=!1,js=!1,$s=0,g0=0;function st(){throw Error(O(321))}function Kl(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Yt(e[n],t[n]))return!1;return!0}function Xl(e,t,n,r,i,o){if(ur=o,Fe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ii.current=e===null||e.memoizedState===null?w0:j0,e=n(r,i),js){o=0;do{if(js=!1,$s=0,25<=o)throw Error(O(301));o+=1,Ke=He=null,t.updateQueue=null,Ii.current=k0,e=n(r,i)}while(js)}if(Ii.current=ao,t=He!==null&&He.next!==null,ur=0,Ke=He=Fe=null,oo=!1,t)throw Error(O(300));return e}function Gl(){var e=$s!==0;return $s=0,e}function nn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ke===null?Fe.memoizedState=Ke=e:Ke=Ke.next=e,Ke}function Dt(){if(He===null){var e=Fe.alternate;e=e!==null?e.memoizedState:null}else e=He.next;var t=Ke===null?Fe.memoizedState:Ke.next;if(t!==null)Ke=t,He=e;else{if(e===null)throw Error(O(310));He=e,e={memoizedState:He.memoizedState,baseState:He.baseState,baseQueue:He.baseQueue,queue:He.queue,next:null},Ke===null?Fe.memoizedState=Ke=e:Ke=Ke.next=e}return Ke}function Bs(e,t){return typeof t=="function"?t(e):t}function sa(e){var t=Dt(),n=t.queue;if(n===null)throw Error(O(311));n.lastRenderedReducer=e;var r=He,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var a=i.next;i.next=o.next,o.next=a}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var l=a=null,c=null,u=o;do{var g=u.lane;if((ur&g)===g)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var f={lane:g,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(l=c=f,a=r):c=c.next=f,Fe.lanes|=g,dr|=g}u=u.next}while(u!==null&&u!==o);c===null?a=r:c.next=l,Yt(r,t.memoizedState)||(vt=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=c,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,Fe.lanes|=o,dr|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ia(e){var t=Dt(),n=t.queue;if(n===null)throw Error(O(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var a=i=i.next;do o=e(o,a.action),a=a.next;while(a!==i);Yt(o,t.memoizedState)||(vt=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Wf(){}function qf(e,t){var n=Fe,r=Dt(),i=t(),o=!Yt(r.memoizedState,i);if(o&&(r.memoizedState=i,vt=!0),r=r.queue,Jl(Yf.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||Ke!==null&&Ke.memoizedState.tag&1){if(n.flags|=2048,Us(9,Qf.bind(null,n,r,i,t),void 0,null),Xe===null)throw Error(O(349));ur&30||Hf(n,t,i)}return i}function Hf(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Fe.updateQueue,t===null?(t={lastEffect:null,stores:null},Fe.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Qf(e,t,n,r){t.value=n,t.getSnapshot=r,Vf(t)&&Kf(e)}function Yf(e,t,n){return n(function(){Vf(t)&&Kf(e)})}function Vf(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Yt(e,n)}catch{return!0}}function Kf(e){var t=yn(e,1);t!==null&&Qt(t,e,1,-1)}function Eu(e){var t=nn();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Bs,lastRenderedState:e},t.queue=e,e=e.dispatch=b0.bind(null,Fe,e),[t.memoizedState,e]}function Us(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Fe.updateQueue,t===null?(t={lastEffect:null,stores:null},Fe.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Xf(){return Dt().memoizedState}function Fi(e,t,n,r){var i=nn();Fe.flags|=e,i.memoizedState=Us(1|t,n,void 0,r===void 0?null:r)}function ko(e,t,n,r){var i=Dt();r=r===void 0?null:r;var o=void 0;if(He!==null){var a=He.memoizedState;if(o=a.destroy,r!==null&&Kl(r,a.deps)){i.memoizedState=Us(t,n,o,r);return}}Fe.flags|=e,i.memoizedState=Us(1|t,n,o,r)}function _u(e,t){return Fi(8390656,8,e,t)}function Jl(e,t){return ko(2048,8,e,t)}function Gf(e,t){return ko(4,2,e,t)}function Jf(e,t){return ko(4,4,e,t)}function Zf(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ep(e,t,n){return n=n!=null?n.concat([e]):null,ko(4,4,Zf.bind(null,t,e),n)}function Zl(){}function tp(e,t){var n=Dt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Kl(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function np(e,t){var n=Dt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Kl(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function rp(e,t,n){return ur&21?(Yt(n,t)||(n=lf(),Fe.lanes|=n,dr|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,vt=!0),e.memoizedState=n)}function v0(e,t){var n=je;je=n!==0&&4>n?n:4,e(!0);var r=ra.transition;ra.transition={};try{e(!1),t()}finally{je=n,ra.transition=r}}function sp(){return Dt().memoizedState}function y0(e,t,n){var r=Bn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},ip(e))op(t,n);else if(n=$f(e,t,n,r),n!==null){var i=ct();Qt(n,e,r,i),ap(n,t,r)}}function b0(e,t,n){var r=Bn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(ip(e))op(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var a=t.lastRenderedState,l=o(a,n);if(i.hasEagerState=!0,i.eagerState=l,Yt(l,a)){var c=t.interleaved;c===null?(i.next=i,ql(t)):(i.next=c.next,c.next=i),t.interleaved=i;return}}catch{}finally{}n=$f(e,t,i,r),n!==null&&(i=ct(),Qt(n,e,r,i),ap(n,t,r))}}function ip(e){var t=e.alternate;return e===Fe||t!==null&&t===Fe}function op(e,t){js=oo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function ap(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Pl(e,n)}}var ao={readContext:Mt,useCallback:st,useContext:st,useEffect:st,useImperativeHandle:st,useInsertionEffect:st,useLayoutEffect:st,useMemo:st,useReducer:st,useRef:st,useState:st,useDebugValue:st,useDeferredValue:st,useTransition:st,useMutableSource:st,useSyncExternalStore:st,useId:st,unstable_isNewReconciler:!1},w0={readContext:Mt,useCallback:function(e,t){return nn().memoizedState=[e,t===void 0?null:t],e},useContext:Mt,useEffect:_u,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Fi(4194308,4,Zf.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Fi(4194308,4,e,t)},useInsertionEffect:function(e,t){return Fi(4,2,e,t)},useMemo:function(e,t){var n=nn();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=nn();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=y0.bind(null,Fe,e),[r.memoizedState,e]},useRef:function(e){var t=nn();return e={current:e},t.memoizedState=e},useState:Eu,useDebugValue:Zl,useDeferredValue:function(e){return nn().memoizedState=e},useTransition:function(){var e=Eu(!1),t=e[0];return e=v0.bind(null,e[1]),nn().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Fe,i=nn();if(Re){if(n===void 0)throw Error(O(407));n=n()}else{if(n=t(),Xe===null)throw Error(O(349));ur&30||Hf(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,_u(Yf.bind(null,r,o,e),[e]),r.flags|=2048,Us(9,Qf.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=nn(),t=Xe.identifierPrefix;if(Re){var n=pn,r=fn;n=(r&~(1<<32-Ht(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=$s++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=g0++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},j0={readContext:Mt,useCallback:tp,useContext:Mt,useEffect:Jl,useImperativeHandle:ep,useInsertionEffect:Gf,useLayoutEffect:Jf,useMemo:np,useReducer:sa,useRef:Xf,useState:function(){return sa(Bs)},useDebugValue:Zl,useDeferredValue:function(e){var t=Dt();return rp(t,He.memoizedState,e)},useTransition:function(){var e=sa(Bs)[0],t=Dt().memoizedState;return[e,t]},useMutableSource:Wf,useSyncExternalStore:qf,useId:sp,unstable_isNewReconciler:!1},k0={readContext:Mt,useCallback:tp,useContext:Mt,useEffect:Jl,useImperativeHandle:ep,useInsertionEffect:Gf,useLayoutEffect:Jf,useMemo:np,useReducer:ia,useRef:Xf,useState:function(){return ia(Bs)},useDebugValue:Zl,useDeferredValue:function(e){var t=Dt();return He===null?t.memoizedState=e:rp(t,He.memoizedState,e)},useTransition:function(){var e=ia(Bs)[0],t=Dt().memoizedState;return[e,t]},useMutableSource:Wf,useSyncExternalStore:qf,useId:sp,unstable_isNewReconciler:!1};function Bt(e,t){if(e&&e.defaultProps){t=Me({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Ja(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Me({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var No={isMounted:function(e){return(e=e._reactInternals)?mr(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ct(),i=Bn(e),o=hn(r,i);o.payload=t,n!=null&&(o.callback=n),t=An(e,o,i),t!==null&&(Qt(t,e,i,r),Li(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ct(),i=Bn(e),o=hn(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=An(e,o,i),t!==null&&(Qt(t,e,i,r),Li(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ct(),r=Bn(e),i=hn(n,r);i.tag=2,t!=null&&(i.callback=t),t=An(e,i,r),t!==null&&(Qt(t,e,r,n),Li(t,e,r))}};function Ru(e,t,n,r,i,o,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,a):t.prototype&&t.prototype.isPureReactComponent?!Is(n,r)||!Is(i,o):!0}function lp(e,t,n){var r=!1,i=qn,o=t.contextType;return typeof o=="object"&&o!==null?o=Mt(o):(i=bt(t)?lr:at.current,r=t.contextTypes,o=(r=r!=null)?Ar(e,i):qn),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=No,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Pu(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&No.enqueueReplaceState(t,t.state,null)}function Za(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Hl(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=Mt(o):(o=bt(t)?lr:at.current,i.context=Ar(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Ja(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&No.enqueueReplaceState(i,i.state,null),so(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Wr(e,t){try{var n="",r=t;do n+=Gm(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function oa(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function el(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var N0=typeof WeakMap=="function"?WeakMap:Map;function cp(e,t,n){n=hn(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){co||(co=!0,ul=r),el(e,t)},n}function up(e,t,n){n=hn(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){el(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){el(e,t),typeof r!="function"&&($n===null?$n=new Set([this]):$n.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function Tu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new N0;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=O0.bind(null,e,t,n),t.then(e,e))}function zu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Lu(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=hn(-1,1),t.tag=2,An(n,t,1))),n.lanes|=1),e)}var S0=jn.ReactCurrentOwner,vt=!1;function lt(e,t,n,r){t.child=e===null?Af(t,null,n,r):Br(t,e.child,n,r)}function Iu(e,t,n,r,i){n=n.render;var o=t.ref;return Fr(t,i),r=Xl(e,t,n,r,o,i),n=Gl(),e!==null&&!vt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,bn(e,t,i)):(Re&&n&&Ol(t),t.flags|=1,lt(e,t,r,i),t.child)}function Fu(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!ac(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,dp(e,t,o,r,i)):(e=Ai(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var a=o.memoizedProps;if(n=n.compare,n=n!==null?n:Is,n(a,r)&&e.ref===t.ref)return bn(e,t,i)}return t.flags|=1,e=Un(o,r),e.ref=t.ref,e.return=t,t.child=e}function dp(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Is(o,r)&&e.ref===t.ref)if(vt=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(vt=!0);else return t.lanes=e.lanes,bn(e,t,i)}return tl(e,t,n,r,i)}function fp(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ne(Pr,kt),kt|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Ne(Pr,kt),kt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,Ne(Pr,kt),kt|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,Ne(Pr,kt),kt|=r;return lt(e,t,i,n),t.child}function pp(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function tl(e,t,n,r,i){var o=bt(n)?lr:at.current;return o=Ar(t,o),Fr(t,i),n=Xl(e,t,n,r,o,i),r=Gl(),e!==null&&!vt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,bn(e,t,i)):(Re&&r&&Ol(t),t.flags|=1,lt(e,t,n,i),t.child)}function Mu(e,t,n,r,i){if(bt(n)){var o=!0;Zi(t)}else o=!1;if(Fr(t,i),t.stateNode===null)Mi(e,t),lp(t,n,r),Za(t,n,r,i),r=!0;else if(e===null){var a=t.stateNode,l=t.memoizedProps;a.props=l;var c=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=Mt(u):(u=bt(n)?lr:at.current,u=Ar(t,u));var g=n.getDerivedStateFromProps,f=typeof g=="function"||typeof a.getSnapshotBeforeUpdate=="function";f||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==r||c!==u)&&Pu(t,a,r,u),Rn=!1;var m=t.memoizedState;a.state=m,so(t,r,a,i),c=t.memoizedState,l!==r||m!==c||yt.current||Rn?(typeof g=="function"&&(Ja(t,n,g,r),c=t.memoizedState),(l=Rn||Ru(t,n,l,r,m,c,u))?(f||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),a.props=r,a.state=c,a.context=u,r=l):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Bf(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:Bt(t.type,l),a.props=u,f=t.pendingProps,m=a.context,c=n.contextType,typeof c=="object"&&c!==null?c=Mt(c):(c=bt(n)?lr:at.current,c=Ar(t,c));var k=n.getDerivedStateFromProps;(g=typeof k=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==f||m!==c)&&Pu(t,a,r,c),Rn=!1,m=t.memoizedState,a.state=m,so(t,r,a,i);var b=t.memoizedState;l!==f||m!==b||yt.current||Rn?(typeof k=="function"&&(Ja(t,n,k,r),b=t.memoizedState),(u=Rn||Ru(t,n,u,r,m,b,c)||!1)?(g||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,b,c),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,b,c)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=b),a.props=r,a.state=b,a.context=c,r=u):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return nl(e,t,n,r,o,i)}function nl(e,t,n,r,i,o){pp(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return i&&wu(t,n,!1),bn(e,t,o);r=t.stateNode,S0.current=t;var l=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=Br(t,e.child,null,o),t.child=Br(t,null,l,o)):lt(e,t,l,o),t.memoizedState=r.state,i&&wu(t,n,!0),t.child}function mp(e){var t=e.stateNode;t.pendingContext?bu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&bu(e,t.context,!1),Ql(e,t.containerInfo)}function Du(e,t,n,r,i){return $r(),$l(i),t.flags|=256,lt(e,t,n,r),t.child}var rl={dehydrated:null,treeContext:null,retryLane:0};function sl(e){return{baseLanes:e,cachePool:null,transitions:null}}function hp(e,t,n){var r=t.pendingProps,i=Ie.current,o=!1,a=(t.flags&128)!==0,l;if((l=a)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),Ne(Ie,i&1),e===null)return Xa(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,o?(r=t.mode,o=t.child,a={mode:"hidden",children:a},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=a):o=Eo(a,r,0,null),e=or(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=sl(n),t.memoizedState=rl,e):ec(t,a));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return C0(e,t,a,r,l,i,n);if(o){o=r.fallback,a=t.mode,i=e.child,l=i.sibling;var c={mode:"hidden",children:r.children};return!(a&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=c,t.deletions=null):(r=Un(i,c),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?o=Un(l,o):(o=or(o,a,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,a=e.child.memoizedState,a=a===null?sl(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},o.memoizedState=a,o.childLanes=e.childLanes&~n,t.memoizedState=rl,r}return o=e.child,e=o.sibling,r=Un(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function ec(e,t){return t=Eo({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function xi(e,t,n,r){return r!==null&&$l(r),Br(t,e.child,null,n),e=ec(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function C0(e,t,n,r,i,o,a){if(n)return t.flags&256?(t.flags&=-257,r=oa(Error(O(422))),xi(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=Eo({mode:"visible",children:r.children},i,0,null),o=or(o,i,a,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&Br(t,e.child,null,a),t.child.memoizedState=sl(a),t.memoizedState=rl,o);if(!(t.mode&1))return xi(e,t,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,o=Error(O(419)),r=oa(o,r,void 0),xi(e,t,a,r)}if(l=(a&e.childLanes)!==0,vt||l){if(r=Xe,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|a)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,yn(e,i),Qt(r,e,i,-1))}return oc(),r=oa(Error(O(421))),xi(e,t,a,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=A0.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,Nt=On(i.nextSibling),St=t,Re=!0,Wt=null,e!==null&&(zt[Lt++]=fn,zt[Lt++]=pn,zt[Lt++]=cr,fn=e.id,pn=e.overflow,cr=t),t=ec(t,r.children),t.flags|=4096,t)}function Ou(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ga(e.return,t,n)}function aa(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function xp(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(lt(e,t,r.children,n),r=Ie.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ou(e,n,t);else if(e.tag===19)Ou(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Ne(Ie,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&io(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),aa(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&io(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}aa(t,!0,n,null,o);break;case"together":aa(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Mi(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function bn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),dr|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(O(153));if(t.child!==null){for(e=t.child,n=Un(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Un(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function E0(e,t,n){switch(t.tag){case 3:mp(t),$r();break;case 5:Uf(t);break;case 1:bt(t.type)&&Zi(t);break;case 4:Ql(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;Ne(no,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(Ne(Ie,Ie.current&1),t.flags|=128,null):n&t.child.childLanes?hp(e,t,n):(Ne(Ie,Ie.current&1),e=bn(e,t,n),e!==null?e.sibling:null);Ne(Ie,Ie.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return xp(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Ne(Ie,Ie.current),r)break;return null;case 22:case 23:return t.lanes=0,fp(e,t,n)}return bn(e,t,n)}var gp,il,vp,yp;gp=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};il=function(){};vp=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,sr(an.current);var o=null;switch(n){case"input":i=Ea(e,i),r=Ea(e,r),o=[];break;case"select":i=Me({},i,{value:void 0}),r=Me({},r,{value:void 0}),o=[];break;case"textarea":i=Pa(e,i),r=Pa(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Gi)}za(n,r);var a;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(a in l)l.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Es.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var c=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&c!==l&&(c!=null||l!=null))if(u==="style")if(l){for(a in l)!l.hasOwnProperty(a)||c&&c.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in c)c.hasOwnProperty(a)&&l[a]!==c[a]&&(n||(n={}),n[a]=c[a])}else n||(o||(o=[]),o.push(u,n)),n=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,l=l?l.__html:void 0,c!=null&&l!==c&&(o=o||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(o=o||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Es.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&Ee("scroll",e),o||l===c||(o=[])):(o=o||[]).push(u,c))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};yp=function(e,t,n,r){n!==r&&(t.flags|=4)};function ls(e,t){if(!Re)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function it(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function _0(e,t,n){var r=t.pendingProps;switch(Al(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return it(t),null;case 1:return bt(t.type)&&Ji(),it(t),null;case 3:return r=t.stateNode,Ur(),_e(yt),_e(at),Vl(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(mi(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Wt!==null&&(pl(Wt),Wt=null))),il(e,t),it(t),null;case 5:Yl(t);var i=sr(As.current);if(n=t.type,e!==null&&t.stateNode!=null)vp(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(O(166));return it(t),null}if(e=sr(an.current),mi(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[rn]=t,r[Ds]=o,e=(t.mode&1)!==0,n){case"dialog":Ee("cancel",r),Ee("close",r);break;case"iframe":case"object":case"embed":Ee("load",r);break;case"video":case"audio":for(i=0;i<xs.length;i++)Ee(xs[i],r);break;case"source":Ee("error",r);break;case"img":case"image":case"link":Ee("error",r),Ee("load",r);break;case"details":Ee("toggle",r);break;case"input":Yc(r,o),Ee("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},Ee("invalid",r);break;case"textarea":Kc(r,o),Ee("invalid",r)}za(n,o),i=null;for(var a in o)if(o.hasOwnProperty(a)){var l=o[a];a==="children"?typeof l=="string"?r.textContent!==l&&(o.suppressHydrationWarning!==!0&&pi(r.textContent,l,e),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(o.suppressHydrationWarning!==!0&&pi(r.textContent,l,e),i=["children",""+l]):Es.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&Ee("scroll",r)}switch(n){case"input":ii(r),Vc(r,o,!0);break;case"textarea":ii(r),Xc(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Gi)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Qd(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[rn]=t,e[Ds]=r,gp(e,t,!1,!1),t.stateNode=e;e:{switch(a=La(n,r),n){case"dialog":Ee("cancel",e),Ee("close",e),i=r;break;case"iframe":case"object":case"embed":Ee("load",e),i=r;break;case"video":case"audio":for(i=0;i<xs.length;i++)Ee(xs[i],e);i=r;break;case"source":Ee("error",e),i=r;break;case"img":case"image":case"link":Ee("error",e),Ee("load",e),i=r;break;case"details":Ee("toggle",e),i=r;break;case"input":Yc(e,r),i=Ea(e,r),Ee("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=Me({},r,{value:void 0}),Ee("invalid",e);break;case"textarea":Kc(e,r),i=Pa(e,r),Ee("invalid",e);break;default:i=r}za(n,i),l=i;for(o in l)if(l.hasOwnProperty(o)){var c=l[o];o==="style"?Kd(e,c):o==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&Yd(e,c)):o==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&_s(e,c):typeof c=="number"&&_s(e,""+c):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Es.hasOwnProperty(o)?c!=null&&o==="onScroll"&&Ee("scroll",e):c!=null&&Nl(e,o,c,a))}switch(n){case"input":ii(e),Vc(e,r,!1);break;case"textarea":ii(e),Xc(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Wn(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Tr(e,!!r.multiple,o,!1):r.defaultValue!=null&&Tr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Gi)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return it(t),null;case 6:if(e&&t.stateNode!=null)yp(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(O(166));if(n=sr(As.current),sr(an.current),mi(t)){if(r=t.stateNode,n=t.memoizedProps,r[rn]=t,(o=r.nodeValue!==n)&&(e=St,e!==null))switch(e.tag){case 3:pi(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&pi(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[rn]=t,t.stateNode=r}return it(t),null;case 13:if(_e(Ie),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Re&&Nt!==null&&t.mode&1&&!(t.flags&128))Df(),$r(),t.flags|=98560,o=!1;else if(o=mi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(O(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(O(317));o[rn]=t}else $r(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;it(t),o=!1}else Wt!==null&&(pl(Wt),Wt=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Ie.current&1?Qe===0&&(Qe=3):oc())),t.updateQueue!==null&&(t.flags|=4),it(t),null);case 4:return Ur(),il(e,t),e===null&&Fs(t.stateNode.containerInfo),it(t),null;case 10:return Wl(t.type._context),it(t),null;case 17:return bt(t.type)&&Ji(),it(t),null;case 19:if(_e(Ie),o=t.memoizedState,o===null)return it(t),null;if(r=(t.flags&128)!==0,a=o.rendering,a===null)if(r)ls(o,!1);else{if(Qe!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=io(e),a!==null){for(t.flags|=128,ls(o,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,a=o.alternate,a===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=a.childLanes,o.lanes=a.lanes,o.child=a.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=a.memoizedProps,o.memoizedState=a.memoizedState,o.updateQueue=a.updateQueue,o.type=a.type,e=a.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Ne(Ie,Ie.current&1|2),t.child}e=e.sibling}o.tail!==null&&Ae()>qr&&(t.flags|=128,r=!0,ls(o,!1),t.lanes=4194304)}else{if(!r)if(e=io(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),ls(o,!0),o.tail===null&&o.tailMode==="hidden"&&!a.alternate&&!Re)return it(t),null}else 2*Ae()-o.renderingStartTime>qr&&n!==1073741824&&(t.flags|=128,r=!0,ls(o,!1),t.lanes=4194304);o.isBackwards?(a.sibling=t.child,t.child=a):(n=o.last,n!==null?n.sibling=a:t.child=a,o.last=a)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Ae(),t.sibling=null,n=Ie.current,Ne(Ie,r?n&1|2:n&1),t):(it(t),null);case 22:case 23:return ic(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?kt&1073741824&&(it(t),t.subtreeFlags&6&&(t.flags|=8192)):it(t),null;case 24:return null;case 25:return null}throw Error(O(156,t.tag))}function R0(e,t){switch(Al(t),t.tag){case 1:return bt(t.type)&&Ji(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Ur(),_e(yt),_e(at),Vl(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Yl(t),null;case 13:if(_e(Ie),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(O(340));$r()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return _e(Ie),null;case 4:return Ur(),null;case 10:return Wl(t.type._context),null;case 22:case 23:return ic(),null;case 24:return null;default:return null}}var gi=!1,ot=!1,P0=typeof WeakSet=="function"?WeakSet:Set,ee=null;function Rr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){De(e,t,r)}else n.current=null}function ol(e,t,n){try{n()}catch(r){De(e,t,r)}}var Au=!1;function T0(e,t){if(Wa=Vi,e=Nf(),Dl(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var a=0,l=-1,c=-1,u=0,g=0,f=e,m=null;t:for(;;){for(var k;f!==n||i!==0&&f.nodeType!==3||(l=a+i),f!==o||r!==0&&f.nodeType!==3||(c=a+r),f.nodeType===3&&(a+=f.nodeValue.length),(k=f.firstChild)!==null;)m=f,f=k;for(;;){if(f===e)break t;if(m===n&&++u===i&&(l=a),m===o&&++g===r&&(c=a),(k=f.nextSibling)!==null)break;f=m,m=f.parentNode}f=k}n=l===-1||c===-1?null:{start:l,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(qa={focusedElem:e,selectionRange:n},Vi=!1,ee=t;ee!==null;)if(t=ee,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,ee=e;else for(;ee!==null;){t=ee;try{var b=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(b!==null){var j=b.memoizedProps,R=b.memoizedState,v=t.stateNode,p=v.getSnapshotBeforeUpdate(t.elementType===t.type?j:Bt(t.type,j),R);v.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var y=t.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(O(163))}}catch(E){De(t,t.return,E)}if(e=t.sibling,e!==null){e.return=t.return,ee=e;break}ee=t.return}return b=Au,Au=!1,b}function ks(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&ol(t,n,o)}i=i.next}while(i!==r)}}function So(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function al(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function bp(e){var t=e.alternate;t!==null&&(e.alternate=null,bp(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[rn],delete t[Ds],delete t[Ya],delete t[p0],delete t[m0])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function wp(e){return e.tag===5||e.tag===3||e.tag===4}function $u(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||wp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ll(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Gi));else if(r!==4&&(e=e.child,e!==null))for(ll(e,t,n),e=e.sibling;e!==null;)ll(e,t,n),e=e.sibling}function cl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(cl(e,t,n),e=e.sibling;e!==null;)cl(e,t,n),e=e.sibling}var Ze=null,Ut=!1;function Nn(e,t,n){for(n=n.child;n!==null;)jp(e,t,n),n=n.sibling}function jp(e,t,n){if(on&&typeof on.onCommitFiberUnmount=="function")try{on.onCommitFiberUnmount(go,n)}catch{}switch(n.tag){case 5:ot||Rr(n,t);case 6:var r=Ze,i=Ut;Ze=null,Nn(e,t,n),Ze=r,Ut=i,Ze!==null&&(Ut?(e=Ze,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Ze.removeChild(n.stateNode));break;case 18:Ze!==null&&(Ut?(e=Ze,n=n.stateNode,e.nodeType===8?ea(e.parentNode,n):e.nodeType===1&&ea(e,n),zs(e)):ea(Ze,n.stateNode));break;case 4:r=Ze,i=Ut,Ze=n.stateNode.containerInfo,Ut=!0,Nn(e,t,n),Ze=r,Ut=i;break;case 0:case 11:case 14:case 15:if(!ot&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,a=o.destroy;o=o.tag,a!==void 0&&(o&2||o&4)&&ol(n,t,a),i=i.next}while(i!==r)}Nn(e,t,n);break;case 1:if(!ot&&(Rr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){De(n,t,l)}Nn(e,t,n);break;case 21:Nn(e,t,n);break;case 22:n.mode&1?(ot=(r=ot)||n.memoizedState!==null,Nn(e,t,n),ot=r):Nn(e,t,n);break;default:Nn(e,t,n)}}function Bu(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new P0),t.forEach(function(r){var i=$0.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function At(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,a=t,l=a;e:for(;l!==null;){switch(l.tag){case 5:Ze=l.stateNode,Ut=!1;break e;case 3:Ze=l.stateNode.containerInfo,Ut=!0;break e;case 4:Ze=l.stateNode.containerInfo,Ut=!0;break e}l=l.return}if(Ze===null)throw Error(O(160));jp(o,a,i),Ze=null,Ut=!1;var c=i.alternate;c!==null&&(c.return=null),i.return=null}catch(u){De(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)kp(t,e),t=t.sibling}function kp(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(At(t,e),Zt(e),r&4){try{ks(3,e,e.return),So(3,e)}catch(j){De(e,e.return,j)}try{ks(5,e,e.return)}catch(j){De(e,e.return,j)}}break;case 1:At(t,e),Zt(e),r&512&&n!==null&&Rr(n,n.return);break;case 5:if(At(t,e),Zt(e),r&512&&n!==null&&Rr(n,n.return),e.flags&32){var i=e.stateNode;try{_s(i,"")}catch(j){De(e,e.return,j)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,a=n!==null?n.memoizedProps:o,l=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{l==="input"&&o.type==="radio"&&o.name!=null&&qd(i,o),La(l,a);var u=La(l,o);for(a=0;a<c.length;a+=2){var g=c[a],f=c[a+1];g==="style"?Kd(i,f):g==="dangerouslySetInnerHTML"?Yd(i,f):g==="children"?_s(i,f):Nl(i,g,f,u)}switch(l){case"input":_a(i,o);break;case"textarea":Hd(i,o);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var k=o.value;k!=null?Tr(i,!!o.multiple,k,!1):m!==!!o.multiple&&(o.defaultValue!=null?Tr(i,!!o.multiple,o.defaultValue,!0):Tr(i,!!o.multiple,o.multiple?[]:"",!1))}i[Ds]=o}catch(j){De(e,e.return,j)}}break;case 6:if(At(t,e),Zt(e),r&4){if(e.stateNode===null)throw Error(O(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(j){De(e,e.return,j)}}break;case 3:if(At(t,e),Zt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{zs(t.containerInfo)}catch(j){De(e,e.return,j)}break;case 4:At(t,e),Zt(e);break;case 13:At(t,e),Zt(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(rc=Ae())),r&4&&Bu(e);break;case 22:if(g=n!==null&&n.memoizedState!==null,e.mode&1?(ot=(u=ot)||g,At(t,e),ot=u):At(t,e),Zt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!g&&e.mode&1)for(ee=e,g=e.child;g!==null;){for(f=ee=g;ee!==null;){switch(m=ee,k=m.child,m.tag){case 0:case 11:case 14:case 15:ks(4,m,m.return);break;case 1:Rr(m,m.return);var b=m.stateNode;if(typeof b.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,b.props=t.memoizedProps,b.state=t.memoizedState,b.componentWillUnmount()}catch(j){De(r,n,j)}}break;case 5:Rr(m,m.return);break;case 22:if(m.memoizedState!==null){Wu(f);continue}}k!==null?(k.return=m,ee=k):Wu(f)}g=g.sibling}e:for(g=null,f=e;;){if(f.tag===5){if(g===null){g=f;try{i=f.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(l=f.stateNode,c=f.memoizedProps.style,a=c!=null&&c.hasOwnProperty("display")?c.display:null,l.style.display=Vd("display",a))}catch(j){De(e,e.return,j)}}}else if(f.tag===6){if(g===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(j){De(e,e.return,j)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;g===f&&(g=null),f=f.return}g===f&&(g=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:At(t,e),Zt(e),r&4&&Bu(e);break;case 21:break;default:At(t,e),Zt(e)}}function Zt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(wp(n)){var r=n;break e}n=n.return}throw Error(O(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(_s(i,""),r.flags&=-33);var o=$u(e);cl(e,o,i);break;case 3:case 4:var a=r.stateNode.containerInfo,l=$u(e);ll(e,l,a);break;default:throw Error(O(161))}}catch(c){De(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function z0(e,t,n){ee=e,Np(e)}function Np(e,t,n){for(var r=(e.mode&1)!==0;ee!==null;){var i=ee,o=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||gi;if(!a){var l=i.alternate,c=l!==null&&l.memoizedState!==null||ot;l=gi;var u=ot;if(gi=a,(ot=c)&&!u)for(ee=i;ee!==null;)a=ee,c=a.child,a.tag===22&&a.memoizedState!==null?qu(i):c!==null?(c.return=a,ee=c):qu(i);for(;o!==null;)ee=o,Np(o),o=o.sibling;ee=i,gi=l,ot=u}Uu(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,ee=o):Uu(e)}}function Uu(e){for(;ee!==null;){var t=ee;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ot||So(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ot)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Bt(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Cu(t,o,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Cu(t,a,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var g=u.memoizedState;if(g!==null){var f=g.dehydrated;f!==null&&zs(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(O(163))}ot||t.flags&512&&al(t)}catch(m){De(t,t.return,m)}}if(t===e){ee=null;break}if(n=t.sibling,n!==null){n.return=t.return,ee=n;break}ee=t.return}}function Wu(e){for(;ee!==null;){var t=ee;if(t===e){ee=null;break}var n=t.sibling;if(n!==null){n.return=t.return,ee=n;break}ee=t.return}}function qu(e){for(;ee!==null;){var t=ee;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{So(4,t)}catch(c){De(t,n,c)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(c){De(t,i,c)}}var o=t.return;try{al(t)}catch(c){De(t,o,c)}break;case 5:var a=t.return;try{al(t)}catch(c){De(t,a,c)}}}catch(c){De(t,t.return,c)}if(t===e){ee=null;break}var l=t.sibling;if(l!==null){l.return=t.return,ee=l;break}ee=t.return}}var L0=Math.ceil,lo=jn.ReactCurrentDispatcher,tc=jn.ReactCurrentOwner,Ft=jn.ReactCurrentBatchConfig,xe=0,Xe=null,Ue=null,et=0,kt=0,Pr=Qn(0),Qe=0,Ws=null,dr=0,Co=0,nc=0,Ns=null,gt=null,rc=0,qr=1/0,un=null,co=!1,ul=null,$n=null,vi=!1,In=null,uo=0,Ss=0,dl=null,Di=-1,Oi=0;function ct(){return xe&6?Ae():Di!==-1?Di:Di=Ae()}function Bn(e){return e.mode&1?xe&2&&et!==0?et&-et:x0.transition!==null?(Oi===0&&(Oi=lf()),Oi):(e=je,e!==0||(e=window.event,e=e===void 0?16:hf(e.type)),e):1}function Qt(e,t,n,r){if(50<Ss)throw Ss=0,dl=null,Error(O(185));Qs(e,n,r),(!(xe&2)||e!==Xe)&&(e===Xe&&(!(xe&2)&&(Co|=n),Qe===4&&zn(e,et)),wt(e,r),n===1&&xe===0&&!(t.mode&1)&&(qr=Ae()+500,jo&&Yn()))}function wt(e,t){var n=e.callbackNode;xh(e,t);var r=Yi(e,e===Xe?et:0);if(r===0)n!==null&&Zc(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Zc(n),t===1)e.tag===0?h0(Hu.bind(null,e)):If(Hu.bind(null,e)),d0(function(){!(xe&6)&&Yn()}),n=null;else{switch(cf(r)){case 1:n=Rl;break;case 4:n=of;break;case 16:n=Qi;break;case 536870912:n=af;break;default:n=Qi}n=zp(n,Sp.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Sp(e,t){if(Di=-1,Oi=0,xe&6)throw Error(O(327));var n=e.callbackNode;if(Mr()&&e.callbackNode!==n)return null;var r=Yi(e,e===Xe?et:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=fo(e,r);else{t=r;var i=xe;xe|=2;var o=Ep();(Xe!==e||et!==t)&&(un=null,qr=Ae()+500,ir(e,t));do try{M0();break}catch(l){Cp(e,l)}while(1);Ul(),lo.current=o,xe=i,Ue!==null?t=0:(Xe=null,et=0,t=Qe)}if(t!==0){if(t===2&&(i=Oa(e),i!==0&&(r=i,t=fl(e,i))),t===1)throw n=Ws,ir(e,0),zn(e,r),wt(e,Ae()),n;if(t===6)zn(e,r);else{if(i=e.current.alternate,!(r&30)&&!I0(i)&&(t=fo(e,r),t===2&&(o=Oa(e),o!==0&&(r=o,t=fl(e,o))),t===1))throw n=Ws,ir(e,0),zn(e,r),wt(e,Ae()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(O(345));case 2:tr(e,gt,un);break;case 3:if(zn(e,r),(r&130023424)===r&&(t=rc+500-Ae(),10<t)){if(Yi(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){ct(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Qa(tr.bind(null,e,gt,un),t);break}tr(e,gt,un);break;case 4:if(zn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var a=31-Ht(r);o=1<<a,a=t[a],a>i&&(i=a),r&=~o}if(r=i,r=Ae()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*L0(r/1960))-r,10<r){e.timeoutHandle=Qa(tr.bind(null,e,gt,un),r);break}tr(e,gt,un);break;case 5:tr(e,gt,un);break;default:throw Error(O(329))}}}return wt(e,Ae()),e.callbackNode===n?Sp.bind(null,e):null}function fl(e,t){var n=Ns;return e.current.memoizedState.isDehydrated&&(ir(e,t).flags|=256),e=fo(e,t),e!==2&&(t=gt,gt=n,t!==null&&pl(t)),e}function pl(e){gt===null?gt=e:gt.push.apply(gt,e)}function I0(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!Yt(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function zn(e,t){for(t&=~nc,t&=~Co,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ht(t),r=1<<n;e[n]=-1,t&=~r}}function Hu(e){if(xe&6)throw Error(O(327));Mr();var t=Yi(e,0);if(!(t&1))return wt(e,Ae()),null;var n=fo(e,t);if(e.tag!==0&&n===2){var r=Oa(e);r!==0&&(t=r,n=fl(e,r))}if(n===1)throw n=Ws,ir(e,0),zn(e,t),wt(e,Ae()),n;if(n===6)throw Error(O(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,tr(e,gt,un),wt(e,Ae()),null}function sc(e,t){var n=xe;xe|=1;try{return e(t)}finally{xe=n,xe===0&&(qr=Ae()+500,jo&&Yn())}}function fr(e){In!==null&&In.tag===0&&!(xe&6)&&Mr();var t=xe;xe|=1;var n=Ft.transition,r=je;try{if(Ft.transition=null,je=1,e)return e()}finally{je=r,Ft.transition=n,xe=t,!(xe&6)&&Yn()}}function ic(){kt=Pr.current,_e(Pr)}function ir(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,u0(n)),Ue!==null)for(n=Ue.return;n!==null;){var r=n;switch(Al(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ji();break;case 3:Ur(),_e(yt),_e(at),Vl();break;case 5:Yl(r);break;case 4:Ur();break;case 13:_e(Ie);break;case 19:_e(Ie);break;case 10:Wl(r.type._context);break;case 22:case 23:ic()}n=n.return}if(Xe=e,Ue=e=Un(e.current,null),et=kt=t,Qe=0,Ws=null,nc=Co=dr=0,gt=Ns=null,rr!==null){for(t=0;t<rr.length;t++)if(n=rr[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var a=o.next;o.next=i,r.next=a}n.pending=r}rr=null}return e}function Cp(e,t){do{var n=Ue;try{if(Ul(),Ii.current=ao,oo){for(var r=Fe.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}oo=!1}if(ur=0,Ke=He=Fe=null,js=!1,$s=0,tc.current=null,n===null||n.return===null){Qe=1,Ws=t,Ue=null;break}e:{var o=e,a=n.return,l=n,c=t;if(t=et,l.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,g=l,f=g.tag;if(!(g.mode&1)&&(f===0||f===11||f===15)){var m=g.alternate;m?(g.updateQueue=m.updateQueue,g.memoizedState=m.memoizedState,g.lanes=m.lanes):(g.updateQueue=null,g.memoizedState=null)}var k=zu(a);if(k!==null){k.flags&=-257,Lu(k,a,l,o,t),k.mode&1&&Tu(o,u,t),t=k,c=u;var b=t.updateQueue;if(b===null){var j=new Set;j.add(c),t.updateQueue=j}else b.add(c);break e}else{if(!(t&1)){Tu(o,u,t),oc();break e}c=Error(O(426))}}else if(Re&&l.mode&1){var R=zu(a);if(R!==null){!(R.flags&65536)&&(R.flags|=256),Lu(R,a,l,o,t),$l(Wr(c,l));break e}}o=c=Wr(c,l),Qe!==4&&(Qe=2),Ns===null?Ns=[o]:Ns.push(o),o=a;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var v=cp(o,c,t);Su(o,v);break e;case 1:l=c;var p=o.type,y=o.stateNode;if(!(o.flags&128)&&(typeof p.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&($n===null||!$n.has(y)))){o.flags|=65536,t&=-t,o.lanes|=t;var E=up(o,l,t);Su(o,E);break e}}o=o.return}while(o!==null)}Rp(n)}catch(P){t=P,Ue===n&&n!==null&&(Ue=n=n.return);continue}break}while(1)}function Ep(){var e=lo.current;return lo.current=ao,e===null?ao:e}function oc(){(Qe===0||Qe===3||Qe===2)&&(Qe=4),Xe===null||!(dr&268435455)&&!(Co&268435455)||zn(Xe,et)}function fo(e,t){var n=xe;xe|=2;var r=Ep();(Xe!==e||et!==t)&&(un=null,ir(e,t));do try{F0();break}catch(i){Cp(e,i)}while(1);if(Ul(),xe=n,lo.current=r,Ue!==null)throw Error(O(261));return Xe=null,et=0,Qe}function F0(){for(;Ue!==null;)_p(Ue)}function M0(){for(;Ue!==null&&!ah();)_p(Ue)}function _p(e){var t=Tp(e.alternate,e,kt);e.memoizedProps=e.pendingProps,t===null?Rp(e):Ue=t,tc.current=null}function Rp(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=R0(n,t),n!==null){n.flags&=32767,Ue=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Qe=6,Ue=null;return}}else if(n=_0(n,t,kt),n!==null){Ue=n;return}if(t=t.sibling,t!==null){Ue=t;return}Ue=t=e}while(t!==null);Qe===0&&(Qe=5)}function tr(e,t,n){var r=je,i=Ft.transition;try{Ft.transition=null,je=1,D0(e,t,n,r)}finally{Ft.transition=i,je=r}return null}function D0(e,t,n,r){do Mr();while(In!==null);if(xe&6)throw Error(O(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(O(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(gh(e,o),e===Xe&&(Ue=Xe=null,et=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||vi||(vi=!0,zp(Qi,function(){return Mr(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Ft.transition,Ft.transition=null;var a=je;je=1;var l=xe;xe|=4,tc.current=null,T0(e,n),kp(n,e),r0(qa),Vi=!!Wa,qa=Wa=null,e.current=n,z0(n),lh(),xe=l,je=a,Ft.transition=o}else e.current=n;if(vi&&(vi=!1,In=e,uo=i),o=e.pendingLanes,o===0&&($n=null),dh(n.stateNode),wt(e,Ae()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(co)throw co=!1,e=ul,ul=null,e;return uo&1&&e.tag!==0&&Mr(),o=e.pendingLanes,o&1?e===dl?Ss++:(Ss=0,dl=e):Ss=0,Yn(),null}function Mr(){if(In!==null){var e=cf(uo),t=Ft.transition,n=je;try{if(Ft.transition=null,je=16>e?16:e,In===null)var r=!1;else{if(e=In,In=null,uo=0,xe&6)throw Error(O(331));var i=xe;for(xe|=4,ee=e.current;ee!==null;){var o=ee,a=o.child;if(ee.flags&16){var l=o.deletions;if(l!==null){for(var c=0;c<l.length;c++){var u=l[c];for(ee=u;ee!==null;){var g=ee;switch(g.tag){case 0:case 11:case 15:ks(8,g,o)}var f=g.child;if(f!==null)f.return=g,ee=f;else for(;ee!==null;){g=ee;var m=g.sibling,k=g.return;if(bp(g),g===u){ee=null;break}if(m!==null){m.return=k,ee=m;break}ee=k}}}var b=o.alternate;if(b!==null){var j=b.child;if(j!==null){b.child=null;do{var R=j.sibling;j.sibling=null,j=R}while(j!==null)}}ee=o}}if(o.subtreeFlags&2064&&a!==null)a.return=o,ee=a;else e:for(;ee!==null;){if(o=ee,o.flags&2048)switch(o.tag){case 0:case 11:case 15:ks(9,o,o.return)}var v=o.sibling;if(v!==null){v.return=o.return,ee=v;break e}ee=o.return}}var p=e.current;for(ee=p;ee!==null;){a=ee;var y=a.child;if(a.subtreeFlags&2064&&y!==null)y.return=a,ee=y;else e:for(a=p;ee!==null;){if(l=ee,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:So(9,l)}}catch(P){De(l,l.return,P)}if(l===a){ee=null;break e}var E=l.sibling;if(E!==null){E.return=l.return,ee=E;break e}ee=l.return}}if(xe=i,Yn(),on&&typeof on.onPostCommitFiberRoot=="function")try{on.onPostCommitFiberRoot(go,e)}catch{}r=!0}return r}finally{je=n,Ft.transition=t}}return!1}function Qu(e,t,n){t=Wr(n,t),t=cp(e,t,1),e=An(e,t,1),t=ct(),e!==null&&(Qs(e,1,t),wt(e,t))}function De(e,t,n){if(e.tag===3)Qu(e,e,n);else for(;t!==null;){if(t.tag===3){Qu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&($n===null||!$n.has(r))){e=Wr(n,e),e=up(t,e,1),t=An(t,e,1),e=ct(),t!==null&&(Qs(t,1,e),wt(t,e));break}}t=t.return}}function O0(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ct(),e.pingedLanes|=e.suspendedLanes&n,Xe===e&&(et&n)===n&&(Qe===4||Qe===3&&(et&130023424)===et&&500>Ae()-rc?ir(e,0):nc|=n),wt(e,t)}function Pp(e,t){t===0&&(e.mode&1?(t=li,li<<=1,!(li&130023424)&&(li=4194304)):t=1);var n=ct();e=yn(e,t),e!==null&&(Qs(e,t,n),wt(e,n))}function A0(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Pp(e,n)}function $0(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(O(314))}r!==null&&r.delete(t),Pp(e,n)}var Tp;Tp=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||yt.current)vt=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return vt=!1,E0(e,t,n);vt=!!(e.flags&131072)}else vt=!1,Re&&t.flags&1048576&&Ff(t,to,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Mi(e,t),e=t.pendingProps;var i=Ar(t,at.current);Fr(t,n),i=Xl(null,t,r,e,i,n);var o=Gl();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,bt(r)?(o=!0,Zi(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Hl(t),i.updater=No,t.stateNode=i,i._reactInternals=t,Za(t,r,e,n),t=nl(null,t,r,!0,o,n)):(t.tag=0,Re&&o&&Ol(t),lt(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Mi(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=U0(r),e=Bt(r,e),i){case 0:t=tl(null,t,r,e,n);break e;case 1:t=Mu(null,t,r,e,n);break e;case 11:t=Iu(null,t,r,e,n);break e;case 14:t=Fu(null,t,r,Bt(r.type,e),n);break e}throw Error(O(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Bt(r,i),tl(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Bt(r,i),Mu(e,t,r,i,n);case 3:e:{if(mp(t),e===null)throw Error(O(387));r=t.pendingProps,o=t.memoizedState,i=o.element,Bf(e,t),so(t,r,null,n);var a=t.memoizedState;if(r=a.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Wr(Error(O(423)),t),t=Du(e,t,r,n,i);break e}else if(r!==i){i=Wr(Error(O(424)),t),t=Du(e,t,r,n,i);break e}else for(Nt=On(t.stateNode.containerInfo.firstChild),St=t,Re=!0,Wt=null,n=Af(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if($r(),r===i){t=bn(e,t,n);break e}lt(e,t,r,n)}t=t.child}return t;case 5:return Uf(t),e===null&&Xa(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,a=i.children,Ha(r,i)?a=null:o!==null&&Ha(r,o)&&(t.flags|=32),pp(e,t),lt(e,t,a,n),t.child;case 6:return e===null&&Xa(t),null;case 13:return hp(e,t,n);case 4:return Ql(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Br(t,null,r,n):lt(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Bt(r,i),Iu(e,t,r,i,n);case 7:return lt(e,t,t.pendingProps,n),t.child;case 8:return lt(e,t,t.pendingProps.children,n),t.child;case 12:return lt(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,a=i.value,Ne(no,r._currentValue),r._currentValue=a,o!==null)if(Yt(o.value,a)){if(o.children===i.children&&!yt.current){t=bn(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var l=o.dependencies;if(l!==null){a=o.child;for(var c=l.firstContext;c!==null;){if(c.context===r){if(o.tag===1){c=hn(-1,n&-n),c.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var g=u.pending;g===null?c.next=c:(c.next=g.next,g.next=c),u.pending=c}}o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),Ga(o.return,n,t),l.lanes|=n;break}c=c.next}}else if(o.tag===10)a=o.type===t.type?null:o.child;else if(o.tag===18){if(a=o.return,a===null)throw Error(O(341));a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),Ga(a,n,t),a=o.sibling}else a=o.child;if(a!==null)a.return=o;else for(a=o;a!==null;){if(a===t){a=null;break}if(o=a.sibling,o!==null){o.return=a.return,a=o;break}a=a.return}o=a}lt(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Fr(t,n),i=Mt(i),r=r(i),t.flags|=1,lt(e,t,r,n),t.child;case 14:return r=t.type,i=Bt(r,t.pendingProps),i=Bt(r.type,i),Fu(e,t,r,i,n);case 15:return dp(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Bt(r,i),Mi(e,t),t.tag=1,bt(r)?(e=!0,Zi(t)):e=!1,Fr(t,n),lp(t,r,i),Za(t,r,i,n),nl(null,t,r,!0,e,n);case 19:return xp(e,t,n);case 22:return fp(e,t,n)}throw Error(O(156,t.tag))};function zp(e,t){return sf(e,t)}function B0(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function It(e,t,n,r){return new B0(e,t,n,r)}function ac(e){return e=e.prototype,!(!e||!e.isReactComponent)}function U0(e){if(typeof e=="function")return ac(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Cl)return 11;if(e===El)return 14}return 2}function Un(e,t){var n=e.alternate;return n===null?(n=It(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ai(e,t,n,r,i,o){var a=2;if(r=e,typeof e=="function")ac(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case br:return or(n.children,i,o,t);case Sl:a=8,i|=8;break;case ka:return e=It(12,n,t,i|2),e.elementType=ka,e.lanes=o,e;case Na:return e=It(13,n,t,i),e.elementType=Na,e.lanes=o,e;case Sa:return e=It(19,n,t,i),e.elementType=Sa,e.lanes=o,e;case Bd:return Eo(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Ad:a=10;break e;case $d:a=9;break e;case Cl:a=11;break e;case El:a=14;break e;case _n:a=16,r=null;break e}throw Error(O(130,e==null?e:typeof e,""))}return t=It(a,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function or(e,t,n,r){return e=It(7,e,r,t),e.lanes=n,e}function Eo(e,t,n,r){return e=It(22,e,r,t),e.elementType=Bd,e.lanes=n,e.stateNode={isHidden:!1},e}function la(e,t,n){return e=It(6,e,null,t),e.lanes=n,e}function ca(e,t,n){return t=It(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function W0(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Wo(0),this.expirationTimes=Wo(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Wo(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function lc(e,t,n,r,i,o,a,l,c){return e=new W0(e,t,n,l,c),t===1?(t=1,o===!0&&(t|=8)):t=0,o=It(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Hl(o),e}function q0(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:yr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Lp(e){if(!e)return qn;e=e._reactInternals;e:{if(mr(e)!==e||e.tag!==1)throw Error(O(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(bt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(O(171))}if(e.tag===1){var n=e.type;if(bt(n))return Lf(e,n,t)}return t}function Ip(e,t,n,r,i,o,a,l,c){return e=lc(n,r,!0,e,i,o,a,l,c),e.context=Lp(null),n=e.current,r=ct(),i=Bn(n),o=hn(r,i),o.callback=t??null,An(n,o,i),e.current.lanes=i,Qs(e,i,r),wt(e,r),e}function _o(e,t,n,r){var i=t.current,o=ct(),a=Bn(i);return n=Lp(n),t.context===null?t.context=n:t.pendingContext=n,t=hn(o,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=An(i,t,a),e!==null&&(Qt(e,i,a,o),Li(e,i,a)),a}function po(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Yu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function cc(e,t){Yu(e,t),(e=e.alternate)&&Yu(e,t)}function H0(){return null}var Fp=typeof reportError=="function"?reportError:function(e){console.error(e)};function uc(e){this._internalRoot=e}Ro.prototype.render=uc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(O(409));_o(e,t,null,null)};Ro.prototype.unmount=uc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;fr(function(){_o(null,e,null,null)}),t[vn]=null}};function Ro(e){this._internalRoot=e}Ro.prototype.unstable_scheduleHydration=function(e){if(e){var t=ff();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Tn.length&&t!==0&&t<Tn[n].priority;n++);Tn.splice(n,0,e),n===0&&mf(e)}};function dc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Po(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Vu(){}function Q0(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=po(a);o.call(u)}}var a=Ip(t,r,e,0,null,!1,!1,"",Vu);return e._reactRootContainer=a,e[vn]=a.current,Fs(e.nodeType===8?e.parentNode:e),fr(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=po(c);l.call(u)}}var c=lc(e,0,!1,null,null,!1,!1,"",Vu);return e._reactRootContainer=c,e[vn]=c.current,Fs(e.nodeType===8?e.parentNode:e),fr(function(){_o(t,c,n,r)}),c}function To(e,t,n,r,i){var o=n._reactRootContainer;if(o){var a=o;if(typeof i=="function"){var l=i;i=function(){var c=po(a);l.call(c)}}_o(t,a,e,i)}else a=Q0(n,t,e,i,r);return po(a)}uf=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=hs(t.pendingLanes);n!==0&&(Pl(t,n|1),wt(t,Ae()),!(xe&6)&&(qr=Ae()+500,Yn()))}break;case 13:fr(function(){var r=yn(e,1);if(r!==null){var i=ct();Qt(r,e,1,i)}}),cc(e,1)}};Tl=function(e){if(e.tag===13){var t=yn(e,134217728);if(t!==null){var n=ct();Qt(t,e,134217728,n)}cc(e,134217728)}};df=function(e){if(e.tag===13){var t=Bn(e),n=yn(e,t);if(n!==null){var r=ct();Qt(n,e,t,r)}cc(e,t)}};ff=function(){return je};pf=function(e,t){var n=je;try{return je=e,t()}finally{je=n}};Fa=function(e,t,n){switch(t){case"input":if(_a(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=wo(r);if(!i)throw Error(O(90));Wd(r),_a(r,i)}}}break;case"textarea":Hd(e,n);break;case"select":t=n.value,t!=null&&Tr(e,!!n.multiple,t,!1)}};Jd=sc;Zd=fr;var Y0={usingClientEntryPoint:!1,Events:[Vs,Nr,wo,Xd,Gd,sc]},cs={findFiberByHostInstance:nr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},V0={bundleType:cs.bundleType,version:cs.version,rendererPackageName:cs.rendererPackageName,rendererConfig:cs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:jn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=nf(e),e===null?null:e.stateNode},findFiberByHostInstance:cs.findFiberByHostInstance||H0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var yi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!yi.isDisabled&&yi.supportsFiber)try{go=yi.inject(V0),on=yi}catch{}}Et.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Y0;Et.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!dc(t))throw Error(O(200));return q0(e,t,null,n)};Et.createRoot=function(e,t){if(!dc(e))throw Error(O(299));var n=!1,r="",i=Fp;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=lc(e,1,!1,null,null,n,!1,r,i),e[vn]=t.current,Fs(e.nodeType===8?e.parentNode:e),new uc(t)};Et.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(O(188)):(e=Object.keys(e).join(","),Error(O(268,e)));return e=nf(t),e=e===null?null:e.stateNode,e};Et.flushSync=function(e){return fr(e)};Et.hydrate=function(e,t,n){if(!Po(t))throw Error(O(200));return To(null,e,t,!0,n)};Et.hydrateRoot=function(e,t,n){if(!dc(e))throw Error(O(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",a=Fp;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=Ip(t,null,e,1,n??null,i,!1,o,a),e[vn]=t.current,Fs(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Ro(t)};Et.render=function(e,t,n){if(!Po(t))throw Error(O(200));return To(null,e,t,!1,n)};Et.unmountComponentAtNode=function(e){if(!Po(e))throw Error(O(40));return e._reactRootContainer?(fr(function(){To(null,null,e,!1,function(){e._reactRootContainer=null,e[vn]=null})}),!0):!1};Et.unstable_batchedUpdates=sc;Et.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Po(n))throw Error(O(200));if(e==null||e._reactInternals===void 0)throw Error(O(38));return To(e,t,n,!1,r)};Et.version="18.3.1-next-f1338f8080-20240426";function Mp(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Mp)}catch(e){console.error(e)}}Mp(),Fd.exports=Et;var fc=Fd.exports,Ku=fc;wa.createRoot=Ku.createRoot,wa.hydrateRoot=Ku.hydrateRoot;const K0="modulepreload",X0=function(e){return"/"+e},Xu={},Dp=function(t,n,r){if(!n||n.length===0)return t();const i=document.getElementsByTagName("link");return Promise.all(n.map(o=>{if(o=X0(o),o in Xu)return;Xu[o]=!0;const a=o.endsWith(".css"),l=a?'[rel="stylesheet"]':"";if(!!r)for(let g=i.length-1;g>=0;g--){const f=i[g];if(f.href===o&&(!a||f.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${l}`))return;const u=document.createElement("link");if(u.rel=a?"stylesheet":K0,a||(u.as="script",u.crossOrigin=""),u.href=o,document.head.appendChild(u),a)return new Promise((g,f)=>{u.addEventListener("load",g),u.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>t()).catch(o=>{const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o})};var Gu="popstate";function G0(e={}){function t(r,i){let{pathname:o,search:a,hash:l}=r.location;return ml("",{pathname:o,search:a,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:qs(i)}return Z0(t,n,null,e)}function Pe(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Vt(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function J0(){return Math.random().toString(36).substring(2,10)}function Ju(e,t){return{usr:e.state,key:e.key,idx:t}}function ml(e,t,n=null,r){return{pathname:typeof e=="string"?e:e.pathname,search:"",hash:"",...typeof t=="string"?Vr(t):t,state:n,key:t&&t.key||r||J0()}}function qs({pathname:e="/",search:t="",hash:n=""}){return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),n&&n!=="#"&&(e+=n.charAt(0)==="#"?n:"#"+n),e}function Vr(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substring(n),e=e.substring(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substring(r),e=e.substring(0,r)),e&&(t.pathname=e)}return t}function Z0(e,t,n,r={}){let{window:i=document.defaultView,v5Compat:o=!1}=r,a=i.history,l="POP",c=null,u=g();u==null&&(u=0,a.replaceState({...a.state,idx:u},""));function g(){return(a.state||{idx:null}).idx}function f(){l="POP";let R=g(),v=R==null?null:R-u;u=R,c&&c({action:l,location:j.location,delta:v})}function m(R,v){l="PUSH";let p=ml(j.location,R,v);n&&n(p,R),u=g()+1;let y=Ju(p,u),E=j.createHref(p);try{a.pushState(y,"",E)}catch(P){if(P instanceof DOMException&&P.name==="DataCloneError")throw P;i.location.assign(E)}o&&c&&c({action:l,location:j.location,delta:1})}function k(R,v){l="REPLACE";let p=ml(j.location,R,v);n&&n(p,R),u=g();let y=Ju(p,u),E=j.createHref(p);a.replaceState(y,"",E),o&&c&&c({action:l,location:j.location,delta:0})}function b(R){return ex(R)}let j={get action(){return l},get location(){return e(i,a)},listen(R){if(c)throw new Error("A history only accepts one active listener");return i.addEventListener(Gu,f),c=R,()=>{i.removeEventListener(Gu,f),c=null}},createHref(R){return t(i,R)},createURL:b,encodeLocation(R){let v=b(R);return{pathname:v.pathname,search:v.search,hash:v.hash}},push:m,replace:k,go(R){return a.go(R)}};return j}function ex(e,t=!1){let n="http://localhost";typeof window<"u"&&(n=window.location.origin!=="null"?window.location.origin:window.location.href),Pe(n,"No window.location.(origin|href) available to create URL");let r=typeof e=="string"?e:qs(e);return r=r.replace(/ $/,"%20"),!t&&r.startsWith("//")&&(r=n+r),new URL(r,n)}function Op(e,t,n="/"){return tx(e,t,n,!1)}function tx(e,t,n,r){let i=typeof t=="string"?Vr(t):t,o=wn(i.pathname||"/",n);if(o==null)return null;let a=Ap(e);nx(a);let l=null;for(let c=0;l==null&&c<a.length;++c){let u=px(o);l=dx(a[c],u,r)}return l}function Ap(e,t=[],n=[],r=""){let i=(o,a,l)=>{let c={relativePath:l===void 0?o.path||"":l,caseSensitive:o.caseSensitive===!0,childrenIndex:a,route:o};c.relativePath.startsWith("/")&&(Pe(c.relativePath.startsWith(r),`Absolute route path "${c.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),c.relativePath=c.relativePath.slice(r.length));let u=xn([r,c.relativePath]),g=n.concat(c);o.children&&o.children.length>0&&(Pe(o.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${u}".`),Ap(o.children,t,g,u)),!(o.path==null&&!o.index)&&t.push({path:u,score:cx(u,o.index),routesMeta:g})};return e.forEach((o,a)=>{var l;if(o.path===""||!((l=o.path)!=null&&l.includes("?")))i(o,a);else for(let c of $p(o.path))i(o,a,c)}),t}function $p(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let a=$p(r.join("/")),l=[];return l.push(...a.map(c=>c===""?o:[o,c].join("/"))),i&&l.push(...a),l.map(c=>e.startsWith("/")&&c===""?"/":c)}function nx(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:ux(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}var rx=/^:[\w-]+$/,sx=3,ix=2,ox=1,ax=10,lx=-2,Zu=e=>e==="*";function cx(e,t){let n=e.split("/"),r=n.length;return n.some(Zu)&&(r+=lx),t&&(r+=ix),n.filter(i=>!Zu(i)).reduce((i,o)=>i+(rx.test(o)?sx:o===""?ox:ax),r)}function ux(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function dx(e,t,n=!1){let{routesMeta:r}=e,i={},o="/",a=[];for(let l=0;l<r.length;++l){let c=r[l],u=l===r.length-1,g=o==="/"?t:t.slice(o.length)||"/",f=mo({path:c.relativePath,caseSensitive:c.caseSensitive,end:u},g),m=c.route;if(!f&&u&&n&&!r[r.length-1].route.index&&(f=mo({path:c.relativePath,caseSensitive:c.caseSensitive,end:!1},g)),!f)return null;Object.assign(i,f.params),a.push({params:i,pathname:xn([o,f.pathname]),pathnameBase:gx(xn([o,f.pathnameBase])),route:m}),f.pathnameBase!=="/"&&(o=xn([o,f.pathnameBase]))}return a}function mo(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=fx(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],a=o.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((u,{paramName:g,isOptional:f},m)=>{if(g==="*"){let b=l[m]||"";a=o.slice(0,o.length-b.length).replace(/(.)\/+$/,"$1")}const k=l[m];return f&&!k?u[g]=void 0:u[g]=(k||"").replace(/%2F/g,"/"),u},{}),pathname:o,pathnameBase:a,pattern:e}}function fx(e,t=!1,n=!0){Vt(e==="*"||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,l,c)=>(r.push({paramName:l,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function px(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Vt(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function wn(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function mx(e,t="/"){let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?Vr(e):e;return{pathname:n?n.startsWith("/")?n:hx(n,t):t,search:vx(r),hash:yx(i)}}function hx(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function ua(e,t,n,r){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function xx(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function pc(e){let t=xx(e);return t.map((n,r)=>r===t.length-1?n.pathname:n.pathnameBase)}function mc(e,t,n,r=!1){let i;typeof e=="string"?i=Vr(e):(i={...e},Pe(!i.pathname||!i.pathname.includes("?"),ua("?","pathname","search",i)),Pe(!i.pathname||!i.pathname.includes("#"),ua("#","pathname","hash",i)),Pe(!i.search||!i.search.includes("#"),ua("#","search","hash",i)));let o=e===""||i.pathname==="",a=o?"/":i.pathname,l;if(a==null)l=n;else{let f=t.length-1;if(!r&&a.startsWith("..")){let m=a.split("/");for(;m[0]==="..";)m.shift(),f-=1;i.pathname=m.join("/")}l=f>=0?t[f]:"/"}let c=mx(i,l),u=a&&a!=="/"&&a.endsWith("/"),g=(o||a===".")&&n.endsWith("/");return!c.pathname.endsWith("/")&&(u||g)&&(c.pathname+="/"),c}var xn=e=>e.join("/").replace(/\/\/+/g,"/"),gx=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),vx=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,yx=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function bx(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}var Bp=["POST","PUT","PATCH","DELETE"];new Set(Bp);var wx=["GET",...Bp];new Set(wx);var Kr=d.createContext(null);Kr.displayName="DataRouter";var zo=d.createContext(null);zo.displayName="DataRouterState";d.createContext(!1);var Up=d.createContext({isTransitioning:!1});Up.displayName="ViewTransition";var jx=d.createContext(new Map);jx.displayName="Fetchers";var kx=d.createContext(null);kx.displayName="Await";var Kt=d.createContext(null);Kt.displayName="Navigation";var Xs=d.createContext(null);Xs.displayName="Location";var Ot=d.createContext({outlet:null,matches:[],isDataRoute:!1});Ot.displayName="Route";var hc=d.createContext(null);hc.displayName="RouteError";function Nx(e,{relative:t}={}){Pe(Xr(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:r}=d.useContext(Kt),{hash:i,pathname:o,search:a}=Gs(e,{relative:t}),l=o;return n!=="/"&&(l=o==="/"?n:xn([n,o])),r.createHref({pathname:l,search:a,hash:i})}function Xr(){return d.useContext(Xs)!=null}function Xt(){return Pe(Xr(),"useLocation() may be used only in the context of a <Router> component."),d.useContext(Xs).location}var Wp="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function qp(e){d.useContext(Kt).static||d.useLayoutEffect(e)}function Rt(){let{isDataRoute:e}=d.useContext(Ot);return e?$x():Sx()}function Sx(){Pe(Xr(),"useNavigate() may be used only in the context of a <Router> component.");let e=d.useContext(Kr),{basename:t,navigator:n}=d.useContext(Kt),{matches:r}=d.useContext(Ot),{pathname:i}=Xt(),o=JSON.stringify(pc(r)),a=d.useRef(!1);return qp(()=>{a.current=!0}),d.useCallback((c,u={})=>{if(Vt(a.current,Wp),!a.current)return;if(typeof c=="number"){n.go(c);return}let g=mc(c,JSON.parse(o),i,u.relative==="path");e==null&&t!=="/"&&(g.pathname=g.pathname==="/"?t:xn([t,g.pathname])),(u.replace?n.replace:n.push)(g,u.state,u)},[t,n,o,i,e])}var Cx=d.createContext(null);function Ex(e){let t=d.useContext(Ot).outlet;return t&&d.createElement(Cx.Provider,{value:e},t)}function _x(){let{matches:e}=d.useContext(Ot),t=e[e.length-1];return t?t.params:{}}function Gs(e,{relative:t}={}){let{matches:n}=d.useContext(Ot),{pathname:r}=Xt(),i=JSON.stringify(pc(n));return d.useMemo(()=>mc(e,JSON.parse(i),r,t==="path"),[e,i,r,t])}function Rx(e,t){return Hp(e,t)}function Hp(e,t,n,r){var v;Pe(Xr(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:i}=d.useContext(Kt),{matches:o}=d.useContext(Ot),a=o[o.length-1],l=a?a.params:{},c=a?a.pathname:"/",u=a?a.pathnameBase:"/",g=a&&a.route;{let p=g&&g.path||"";Qp(c,!g||p.endsWith("*")||p.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${c}" (under <Route path="${p}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${p}"> to <Route path="${p==="/"?"*":`${p}/*`}">.`)}let f=Xt(),m;if(t){let p=typeof t=="string"?Vr(t):t;Pe(u==="/"||((v=p.pathname)==null?void 0:v.startsWith(u)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${u}" but pathname "${p.pathname}" was given in the \`location\` prop.`),m=p}else m=f;let k=m.pathname||"/",b=k;if(u!=="/"){let p=u.replace(/^\//,"").split("/");b="/"+k.replace(/^\//,"").split("/").slice(p.length).join("/")}let j=Op(e,{pathname:b});Vt(g||j!=null,`No routes matched location "${m.pathname}${m.search}${m.hash}" `),Vt(j==null||j[j.length-1].route.element!==void 0||j[j.length-1].route.Component!==void 0||j[j.length-1].route.lazy!==void 0,`Matched leaf route at location "${m.pathname}${m.search}${m.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let R=Ix(j&&j.map(p=>Object.assign({},p,{params:Object.assign({},l,p.params),pathname:xn([u,i.encodeLocation?i.encodeLocation(p.pathname).pathname:p.pathname]),pathnameBase:p.pathnameBase==="/"?u:xn([u,i.encodeLocation?i.encodeLocation(p.pathnameBase).pathname:p.pathnameBase])})),o,n,r);return t&&R?d.createElement(Xs.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...m},navigationType:"POP"}},R):R}function Px(){let e=Ax(),t=bx(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,r="rgba(200,200,200, 0.5)",i={padding:"0.5rem",backgroundColor:r},o={padding:"2px 4px",backgroundColor:r},a=null;return console.error("Error handled by React Router default ErrorBoundary:",e),a=d.createElement(d.Fragment,null,d.createElement("p",null,"💿 Hey developer 👋"),d.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",d.createElement("code",{style:o},"ErrorBoundary")," or"," ",d.createElement("code",{style:o},"errorElement")," prop on your route.")),d.createElement(d.Fragment,null,d.createElement("h2",null,"Unexpected Application Error!"),d.createElement("h3",{style:{fontStyle:"italic"}},t),n?d.createElement("pre",{style:i},n):null,a)}var Tx=d.createElement(Px,null),zx=class extends d.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return this.state.error!==void 0?d.createElement(Ot.Provider,{value:this.props.routeContext},d.createElement(hc.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function Lx({routeContext:e,match:t,children:n}){let r=d.useContext(Kr);return r&&r.static&&r.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=t.route.id),d.createElement(Ot.Provider,{value:e},n)}function Ix(e,t=[],n=null,r=null){if(e==null){if(!n)return null;if(n.errors)e=n.matches;else if(t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let i=e,o=n==null?void 0:n.errors;if(o!=null){let c=i.findIndex(u=>u.route.id&&(o==null?void 0:o[u.route.id])!==void 0);Pe(c>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(o).join(",")}`),i=i.slice(0,Math.min(i.length,c+1))}let a=!1,l=-1;if(n)for(let c=0;c<i.length;c++){let u=i[c];if((u.route.HydrateFallback||u.route.hydrateFallbackElement)&&(l=c),u.route.id){let{loaderData:g,errors:f}=n,m=u.route.loader&&!g.hasOwnProperty(u.route.id)&&(!f||f[u.route.id]===void 0);if(u.route.lazy||m){a=!0,l>=0?i=i.slice(0,l+1):i=[i[0]];break}}}return i.reduceRight((c,u,g)=>{let f,m=!1,k=null,b=null;n&&(f=o&&u.route.id?o[u.route.id]:void 0,k=u.route.errorElement||Tx,a&&(l<0&&g===0?(Qp("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),m=!0,b=null):l===g&&(m=!0,b=u.route.hydrateFallbackElement||null)));let j=t.concat(i.slice(0,g+1)),R=()=>{let v;return f?v=k:m?v=b:u.route.Component?v=d.createElement(u.route.Component,null):u.route.element?v=u.route.element:v=c,d.createElement(Lx,{match:u,routeContext:{outlet:c,matches:j,isDataRoute:n!=null},children:v})};return n&&(u.route.ErrorBoundary||u.route.errorElement||g===0)?d.createElement(zx,{location:n.location,revalidation:n.revalidation,component:k,error:f,children:R(),routeContext:{outlet:null,matches:j,isDataRoute:!0}}):R()},null)}function xc(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Fx(e){let t=d.useContext(Kr);return Pe(t,xc(e)),t}function Mx(e){let t=d.useContext(zo);return Pe(t,xc(e)),t}function Dx(e){let t=d.useContext(Ot);return Pe(t,xc(e)),t}function gc(e){let t=Dx(e),n=t.matches[t.matches.length-1];return Pe(n.route.id,`${e} can only be used on routes that contain a unique "id"`),n.route.id}function Ox(){return gc("useRouteId")}function Ax(){var r;let e=d.useContext(hc),t=Mx("useRouteError"),n=gc("useRouteError");return e!==void 0?e:(r=t.errors)==null?void 0:r[n]}function $x(){let{router:e}=Fx("useNavigate"),t=gc("useNavigate"),n=d.useRef(!1);return qp(()=>{n.current=!0}),d.useCallback(async(i,o={})=>{Vt(n.current,Wp),n.current&&(typeof i=="number"?e.navigate(i):await e.navigate(i,{fromRouteId:t,...o}))},[e,t])}var ed={};function Qp(e,t,n){!t&&!ed[e]&&(ed[e]=!0,Vt(!1,n))}d.memo(Bx);function Bx({routes:e,future:t,state:n}){return Hp(e,void 0,n,t)}function Ux({to:e,replace:t,state:n,relative:r}){Pe(Xr(),"<Navigate> may be used only in the context of a <Router> component.");let{static:i}=d.useContext(Kt);Vt(!i,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:o}=d.useContext(Ot),{pathname:a}=Xt(),l=Rt(),c=mc(e,pc(o),a,r==="path"),u=JSON.stringify(c);return d.useEffect(()=>{l(JSON.parse(u),{replace:t,state:n,relative:r})},[l,u,r,t,n]),null}function Wx(e){return Ex(e.context)}function Je(e){Pe(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function qx({basename:e="/",children:t=null,location:n,navigationType:r="POP",navigator:i,static:o=!1}){Pe(!Xr(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let a=e.replace(/^\/*/,"/"),l=d.useMemo(()=>({basename:a,navigator:i,static:o,future:{}}),[a,i,o]);typeof n=="string"&&(n=Vr(n));let{pathname:c="/",search:u="",hash:g="",state:f=null,key:m="default"}=n,k=d.useMemo(()=>{let b=wn(c,a);return b==null?null:{location:{pathname:b,search:u,hash:g,state:f,key:m},navigationType:r}},[a,c,u,g,f,m,r]);return Vt(k!=null,`<Router basename="${a}"> is not able to match the URL "${c}${u}${g}" because it does not start with the basename, so the <Router> won't render anything.`),k==null?null:d.createElement(Kt.Provider,{value:l},d.createElement(Xs.Provider,{children:t,value:k}))}function Hx({children:e,location:t}){return Rx(hl(e),t)}function hl(e,t=[]){let n=[];return d.Children.forEach(e,(r,i)=>{if(!d.isValidElement(r))return;let o=[...t,i];if(r.type===d.Fragment){n.push.apply(n,hl(r.props.children,o));return}Pe(r.type===Je,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Pe(!r.props.index||!r.props.children,"An index route cannot have child routes.");let a={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(a.children=hl(r.props.children,o)),n.push(a)}),n}var $i="get",Bi="application/x-www-form-urlencoded";function Lo(e){return e!=null&&typeof e.tagName=="string"}function Qx(e){return Lo(e)&&e.tagName.toLowerCase()==="button"}function Yx(e){return Lo(e)&&e.tagName.toLowerCase()==="form"}function Vx(e){return Lo(e)&&e.tagName.toLowerCase()==="input"}function Kx(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Xx(e,t){return e.button===0&&(!t||t==="_self")&&!Kx(e)}var bi=null;function Gx(){if(bi===null)try{new FormData(document.createElement("form"),0),bi=!1}catch{bi=!0}return bi}var Jx=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function da(e){return e!=null&&!Jx.has(e)?(Vt(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Bi}"`),null):e}function Zx(e,t){let n,r,i,o,a;if(Yx(e)){let l=e.getAttribute("action");r=l?wn(l,t):null,n=e.getAttribute("method")||$i,i=da(e.getAttribute("enctype"))||Bi,o=new FormData(e)}else if(Qx(e)||Vx(e)&&(e.type==="submit"||e.type==="image")){let l=e.form;if(l==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let c=e.getAttribute("formaction")||l.getAttribute("action");if(r=c?wn(c,t):null,n=e.getAttribute("formmethod")||l.getAttribute("method")||$i,i=da(e.getAttribute("formenctype"))||da(l.getAttribute("enctype"))||Bi,o=new FormData(l,e),!Gx()){let{name:u,type:g,value:f}=e;if(g==="image"){let m=u?`${u}.`:"";o.append(`${m}x`,"0"),o.append(`${m}y`,"0")}else u&&o.append(u,f)}}else{if(Lo(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=$i,r=null,i=Bi,a=e}return o&&i==="text/plain"&&(a=o,o=void 0),{action:r,method:n.toLowerCase(),encType:i,formData:o,body:a}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function vc(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function eg(e,t,n){let r=typeof e=="string"?new URL(e,typeof window>"u"?"server://singlefetch/":window.location.origin):e;return r.pathname==="/"?r.pathname=`_root.${n}`:t&&wn(r.pathname,t)==="/"?r.pathname=`${t.replace(/\/$/,"")}/_root.${n}`:r.pathname=`${r.pathname.replace(/\/$/,"")}.${n}`,r}async function tg(e,t){if(e.id in t)return t[e.id];try{let n=await Dp(()=>import(e.module),[]);return t[e.id]=n,n}catch(n){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function ng(e){return e!=null&&typeof e.page=="string"}function rg(e){return e==null?!1:e.href==null?e.rel==="preload"&&typeof e.imageSrcSet=="string"&&typeof e.imageSizes=="string":typeof e.rel=="string"&&typeof e.href=="string"}async function sg(e,t,n){let r=await Promise.all(e.map(async i=>{let o=t.routes[i.route.id];if(o){let a=await tg(o,n);return a.links?a.links():[]}return[]}));return lg(r.flat(1).filter(rg).filter(i=>i.rel==="stylesheet"||i.rel==="preload").map(i=>i.rel==="stylesheet"?{...i,rel:"prefetch",as:"style"}:{...i,rel:"prefetch"}))}function td(e,t,n,r,i,o){let a=(c,u)=>n[u]?c.route.id!==n[u].route.id:!0,l=(c,u)=>{var g;return n[u].pathname!==c.pathname||((g=n[u].route.path)==null?void 0:g.endsWith("*"))&&n[u].params["*"]!==c.params["*"]};return o==="assets"?t.filter((c,u)=>a(c,u)||l(c,u)):o==="data"?t.filter((c,u)=>{var f;let g=r.routes[c.route.id];if(!g||!g.hasLoader)return!1;if(a(c,u)||l(c,u))return!0;if(c.route.shouldRevalidate){let m=c.route.shouldRevalidate({currentUrl:new URL(i.pathname+i.search+i.hash,window.origin),currentParams:((f=n[0])==null?void 0:f.params)||{},nextUrl:new URL(e,window.origin),nextParams:c.params,defaultShouldRevalidate:!0});if(typeof m=="boolean")return m}return!0}):[]}function ig(e,t,{includeHydrateFallback:n}={}){return og(e.map(r=>{let i=t.routes[r.route.id];if(!i)return[];let o=[i.module];return i.clientActionModule&&(o=o.concat(i.clientActionModule)),i.clientLoaderModule&&(o=o.concat(i.clientLoaderModule)),n&&i.hydrateFallbackModule&&(o=o.concat(i.hydrateFallbackModule)),i.imports&&(o=o.concat(i.imports)),o}).flat(1))}function og(e){return[...new Set(e)]}function ag(e){let t={},n=Object.keys(e).sort();for(let r of n)t[r]=e[r];return t}function lg(e,t){let n=new Set,r=new Set(t);return e.reduce((i,o)=>{if(t&&!ng(o)&&o.as==="script"&&o.href&&r.has(o.href))return i;let l=JSON.stringify(ag(o));return n.has(l)||(n.add(l),i.push({key:l,link:o})),i},[])}function Yp(){let e=d.useContext(Kr);return vc(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}function cg(){let e=d.useContext(zo);return vc(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}var yc=d.createContext(void 0);yc.displayName="FrameworkContext";function Vp(){let e=d.useContext(yc);return vc(e,"You must render this element inside a <HydratedRouter> element"),e}function ug(e,t){let n=d.useContext(yc),[r,i]=d.useState(!1),[o,a]=d.useState(!1),{onFocus:l,onBlur:c,onMouseEnter:u,onMouseLeave:g,onTouchStart:f}=t,m=d.useRef(null);d.useEffect(()=>{if(e==="render"&&a(!0),e==="viewport"){let j=v=>{v.forEach(p=>{a(p.isIntersecting)})},R=new IntersectionObserver(j,{threshold:.5});return m.current&&R.observe(m.current),()=>{R.disconnect()}}},[e]),d.useEffect(()=>{if(r){let j=setTimeout(()=>{a(!0)},100);return()=>{clearTimeout(j)}}},[r]);let k=()=>{i(!0)},b=()=>{i(!1),a(!1)};return n?e!=="intent"?[o,m,{}]:[o,m,{onFocus:us(l,k),onBlur:us(c,b),onMouseEnter:us(u,k),onMouseLeave:us(g,b),onTouchStart:us(f,k)}]:[!1,m,{}]}function us(e,t){return n=>{e&&e(n),n.defaultPrevented||t(n)}}function dg({page:e,...t}){let{router:n}=Yp(),r=d.useMemo(()=>Op(n.routes,e,n.basename),[n.routes,e,n.basename]);return r?d.createElement(pg,{page:e,matches:r,...t}):null}function fg(e){let{manifest:t,routeModules:n}=Vp(),[r,i]=d.useState([]);return d.useEffect(()=>{let o=!1;return sg(e,t,n).then(a=>{o||i(a)}),()=>{o=!0}},[e,t,n]),r}function pg({page:e,matches:t,...n}){let r=Xt(),{manifest:i,routeModules:o}=Vp(),{basename:a}=Yp(),{loaderData:l,matches:c}=cg(),u=d.useMemo(()=>td(e,t,c,i,r,"data"),[e,t,c,i,r]),g=d.useMemo(()=>td(e,t,c,i,r,"assets"),[e,t,c,i,r]),f=d.useMemo(()=>{if(e===r.pathname+r.search+r.hash)return[];let b=new Set,j=!1;if(t.forEach(v=>{var y;let p=i.routes[v.route.id];!p||!p.hasLoader||(!u.some(E=>E.route.id===v.route.id)&&v.route.id in l&&((y=o[v.route.id])!=null&&y.shouldRevalidate)||p.hasClientLoader?j=!0:b.add(v.route.id))}),b.size===0)return[];let R=eg(e,a,"data");return j&&b.size>0&&R.searchParams.set("_routes",t.filter(v=>b.has(v.route.id)).map(v=>v.route.id).join(",")),[R.pathname+R.search]},[a,l,r,i,u,t,e,o]),m=d.useMemo(()=>ig(g,i),[g,i]),k=fg(g);return d.createElement(d.Fragment,null,f.map(b=>d.createElement("link",{key:b,rel:"prefetch",as:"fetch",href:b,...n})),m.map(b=>d.createElement("link",{key:b,rel:"modulepreload",href:b,...n})),k.map(({key:b,link:j})=>d.createElement("link",{key:b,...j})))}function mg(...e){return t=>{e.forEach(n=>{typeof n=="function"?n(t):n!=null&&(n.current=t)})}}var Kp=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Kp&&(window.__reactRouterVersion="7.7.1")}catch{}function hg({basename:e,children:t,window:n}){let r=d.useRef();r.current==null&&(r.current=G0({window:n,v5Compat:!0}));let i=r.current,[o,a]=d.useState({action:i.action,location:i.location}),l=d.useCallback(c=>{d.startTransition(()=>a(c))},[a]);return d.useLayoutEffect(()=>i.listen(l),[i,l]),d.createElement(qx,{basename:e,children:t,location:o.location,navigationType:o.action,navigator:i})}var Xp=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Gp=d.forwardRef(function({onClick:t,discover:n="render",prefetch:r="none",relative:i,reloadDocument:o,replace:a,state:l,target:c,to:u,preventScrollReset:g,viewTransition:f,...m},k){let{basename:b}=d.useContext(Kt),j=typeof u=="string"&&Xp.test(u),R,v=!1;if(typeof u=="string"&&j&&(R=u,Kp))try{let x=new URL(window.location.href),w=u.startsWith("//")?new URL(x.protocol+u):new URL(u),S=wn(w.pathname,b);w.origin===x.origin&&S!=null?u=S+w.search+w.hash:v=!0}catch{Vt(!1,`<Link to="${u}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let p=Nx(u,{relative:i}),[y,E,P]=ug(r,m),L=yg(u,{replace:a,state:l,target:c,preventScrollReset:g,relative:i,viewTransition:f});function N(x){t&&t(x),x.defaultPrevented||L(x)}let h=d.createElement("a",{...m,...P,href:R||p,onClick:v||o?t:N,ref:mg(k,E),target:c,"data-discover":!j&&n==="render"?"true":void 0});return y&&!j?d.createElement(d.Fragment,null,h,d.createElement(dg,{page:p})):h});Gp.displayName="Link";var xg=d.forwardRef(function({"aria-current":t="page",caseSensitive:n=!1,className:r="",end:i=!1,style:o,to:a,viewTransition:l,children:c,...u},g){let f=Gs(a,{relative:u.relative}),m=Xt(),k=d.useContext(zo),{navigator:b,basename:j}=d.useContext(Kt),R=k!=null&&Ng(f)&&l===!0,v=b.encodeLocation?b.encodeLocation(f).pathname:f.pathname,p=m.pathname,y=k&&k.navigation&&k.navigation.location?k.navigation.location.pathname:null;n||(p=p.toLowerCase(),y=y?y.toLowerCase():null,v=v.toLowerCase()),y&&j&&(y=wn(y,j)||y);const E=v!=="/"&&v.endsWith("/")?v.length-1:v.length;let P=p===v||!i&&p.startsWith(v)&&p.charAt(E)==="/",L=y!=null&&(y===v||!i&&y.startsWith(v)&&y.charAt(v.length)==="/"),N={isActive:P,isPending:L,isTransitioning:R},h=P?t:void 0,x;typeof r=="function"?x=r(N):x=[r,P?"active":null,L?"pending":null,R?"transitioning":null].filter(Boolean).join(" ");let w=typeof o=="function"?o(N):o;return d.createElement(Gp,{...u,"aria-current":h,className:x,ref:g,style:w,to:a,viewTransition:l},typeof c=="function"?c(N):c)});xg.displayName="NavLink";var gg=d.forwardRef(({discover:e="render",fetcherKey:t,navigate:n,reloadDocument:r,replace:i,state:o,method:a=$i,action:l,onSubmit:c,relative:u,preventScrollReset:g,viewTransition:f,...m},k)=>{let b=jg(),j=kg(l,{relative:u}),R=a.toLowerCase()==="get"?"get":"post",v=typeof l=="string"&&Xp.test(l),p=y=>{if(c&&c(y),y.defaultPrevented)return;y.preventDefault();let E=y.nativeEvent.submitter,P=(E==null?void 0:E.getAttribute("formmethod"))||a;b(E||y.currentTarget,{fetcherKey:t,method:P,navigate:n,replace:i,state:o,relative:u,preventScrollReset:g,viewTransition:f})};return d.createElement("form",{ref:k,method:R,action:j,onSubmit:r?c:p,...m,"data-discover":!v&&e==="render"?"true":void 0})});gg.displayName="Form";function vg(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Jp(e){let t=d.useContext(Kr);return Pe(t,vg(e)),t}function yg(e,{target:t,replace:n,state:r,preventScrollReset:i,relative:o,viewTransition:a}={}){let l=Rt(),c=Xt(),u=Gs(e,{relative:o});return d.useCallback(g=>{if(Xx(g,t)){g.preventDefault();let f=n!==void 0?n:qs(c)===qs(u);l(e,{replace:f,state:r,preventScrollReset:i,relative:o,viewTransition:a})}},[c,l,u,n,r,t,e,i,o,a])}var bg=0,wg=()=>`__${String(++bg)}__`;function jg(){let{router:e}=Jp("useSubmit"),{basename:t}=d.useContext(Kt),n=Ox();return d.useCallback(async(r,i={})=>{let{action:o,method:a,encType:l,formData:c,body:u}=Zx(r,t);if(i.navigate===!1){let g=i.fetcherKey||wg();await e.fetch(g,n,i.action||o,{preventScrollReset:i.preventScrollReset,formData:c,body:u,formMethod:i.method||a,formEncType:i.encType||l,flushSync:i.flushSync})}else await e.navigate(i.action||o,{preventScrollReset:i.preventScrollReset,formData:c,body:u,formMethod:i.method||a,formEncType:i.encType||l,replace:i.replace,state:i.state,fromRouteId:n,flushSync:i.flushSync,viewTransition:i.viewTransition})},[e,t,n])}function kg(e,{relative:t}={}){let{basename:n}=d.useContext(Kt),r=d.useContext(Ot);Pe(r,"useFormAction must be used inside a RouteContext");let[i]=r.matches.slice(-1),o={...Gs(e||".",{relative:t})},a=Xt();if(e==null){o.search=a.search;let l=new URLSearchParams(o.search),c=l.getAll("index");if(c.some(g=>g==="")){l.delete("index"),c.filter(f=>f).forEach(f=>l.append("index",f));let g=l.toString();o.search=g?`?${g}`:""}}return(!e||e===".")&&i.route.index&&(o.search=o.search?o.search.replace(/^\?/,"?index&"):"?index"),n!=="/"&&(o.pathname=o.pathname==="/"?n:xn([n,o.pathname])),qs(o)}function Ng(e,{relative:t}={}){let n=d.useContext(Up);Pe(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=Jp("useViewTransitionState"),i=Gs(e,{relative:t});if(!n.isTransitioning)return!1;let o=wn(n.currentLocation.pathname,r)||n.currentLocation.pathname,a=wn(n.nextLocation.pathname,r)||n.nextLocation.pathname;return mo(i.pathname,a)!=null||mo(i.pathname,o)!=null}function Sg({size:e=22}){return s.jsx("div",{style:{width:e,height:e},className:"grid place-items-center",children:s.jsxs("svg",{viewBox:"0 0 100 100",className:"motion-safe:animate-[spin_9s_linear_infinite] group-active:motion-safe:animate-[spin_1.2s_linear_infinite]",children:[s.jsx("path",{d:"M50,50 L50,5 A45,45 0 0,1 86.97,25.98 Z",fill:"#6366F1"}),s.jsx("path",{d:"M50,50 L86.97,25.98 A45,45 0 0,1 86.97,74.02 Z",fill:"#22C55E"}),s.jsx("path",{d:"M50,50 L86.97,74.02 A45,45 0 0,1 50,95 Z",fill:"#F59E0B"}),s.jsx("path",{d:"M50,50 L50,95 A45,45 0 0,1 13.03,74.02 Z",fill:"#EF4444"}),s.jsx("path",{d:"M50,50 L13.03,74.02 A45,45 0 0,1 13.03,25.98 Z",fill:"#3B82F6"}),s.jsx("path",{d:"M50,50 L13.03,25.98 A45,45 0 0,1 50,5 Z",fill:"#8B5CF6"}),s.jsx("circle",{cx:"50",cy:"50",r:"9",fill:"#111827",stroke:"white",strokeWidth:"2"})]})})}function Cg(){const e=Rt(),{pathname:t}=Xt(),n=d.useRef({}),r=d.useRef(0),i=d.useRef(null);d.useEffect(()=>{i.current=new Audio("/sounds/refresh.mp3")},[]),d.useEffect(()=>{const x=n.current[t];x!==void 0?window.scrollTo(0,x):window.scrollTo(0,0)},[t]);const o=()=>{n.current[t]=window.scrollY},a=["/","/play","/profile"].includes(t),[l,c]=d.useState(!1),[u,g]=d.useState({open:!1,go:null});d.useEffect(()=>{const x=new MutationObserver(()=>{c(document.body.classList.contains("modal-open"))});return x.observe(document.body,{attributes:!0,attributeFilter:["class"]}),()=>x.disconnect()},[]);const m=l||[/^\/quiz\//,/^\/practice\//,/^\/profile\//].some(x=>x.test(t)),k=x=>x==="/"?t==="/":t.startsWith(x),b=d.useRef(0),[j,R]=d.useState(!1),[v,p]=d.useState(0),[y,E]=d.useState(!1),P=x=>{a&&window.scrollY===0&&(b.current=x.touches[0].clientY)},L=x=>{if(a&&window.scrollY===0){const w=x.touches[0].clientY-b.current;w>0&&(R(!0),p(Math.min(w,80)))}},N=()=>{j&&v>40&&(E(!0),i.current&&(i.current.currentTime=0,i.current.play().catch(()=>{})),navigator.vibrate&&navigator.vibrate(60),window.scrollTo({top:0,behavior:"smooth"}),setTimeout(()=>E(!1),1e3)),R(!1),p(0)},h=({path:x,icon:w,label:S})=>{const _=k(x),U=()=>{o();const V=()=>{if(x==="/play"){e(`/play?view=modes&reset=${Date.now()}`),navigator.vibrate&&navigator.vibrate(15);return}if(_){const Z=Date.now();Z-r.current<500&&(window.scrollTo({top:0,behavior:"smooth"}),navigator.vibrate&&navigator.vibrate(30)),r.current=Z}else e(x)};if(localStorage.getItem("qp_in_question")==="true"){g({open:!0,go:V});return}V()};return s.jsxs("button",{type:"button",onClick:U,className:`group relative flex h-12 w-20 flex-col items-center justify-center rounded-xl transition
          ${_?"text-white":"text-base-muted hover:text-white"}`,"aria-current":_?"page":void 0,children:[_&&s.jsx("span",{className:"absolute -top-1 h-1 w-8 rounded-full bg-white/40"}),s.jsx("div",{className:"leading-none",children:w}),s.jsx("span",{className:"mt-0.5 text-[11px]",children:S})]})};return s.jsxs("div",{className:"min-h-screen bg-base-bg text-base-text",onTouchStart:P,onTouchMove:L,onTouchEnd:N,children:[(j||y)&&s.jsxs("div",{className:"fixed left-1/2 z-50 flex flex-col items-center text-white text-sm transition-all duration-200",style:{top:y?"4rem":`${Math.min(v,100)}px`,transform:"translateX(-50%)",width:"160px",textAlign:"center"},children:[s.jsx("span",{className:`${y?"opacity-0":"motion-safe:animate-spin"} mb-1`,children:"⭮"}),s.jsx("span",{className:y?"animate-bounce":"",children:y?"Updated!😍":"Release to refresh"})]}),s.jsx("main",{className:"mx-auto w-full max-w-none px-1 sm:px-3 md:px-4 overscroll-y-contain",style:{height:m?"100dvh":"calc(100dvh - (5.25rem + env(safe-area-inset-bottom)))",paddingTop:"calc(env(safe-area-inset-top) + 12px)",overflowY:"auto",transform:j?`translateY(${v}px)`:void 0,transition:j||y?"transform 0.3s ease":void 0},children:s.jsx(Wx,{})}),u.open&&s.jsx("div",{className:"fixed inset-0 z-50 bg-black/60 flex items-center justify-center px-6",children:s.jsxs("div",{className:"w-full max-w-sm rounded-2xl bg-base-card border border-base-border p-5 text-center",children:[s.jsx("div",{className:"text-lg font-bold mb-2",children:"Want to quit?"}),s.jsx("p",{className:"text-base-muted mb-5",children:"You’ll lose this question’s progress."}),s.jsxs("div",{className:"flex gap-3",children:[s.jsx("button",{onClick:()=>g({open:!1,go:null}),className:"flex-1 py-3 rounded-xl border border-base-border bg-white/5 hover:bg-white/10 transition",children:"Cancel"}),s.jsx("button",{onClick:()=>{const x=u.go;g({open:!1,go:null}),x==null||x()},className:"flex-1 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-500 transition",children:"Leave"})]})]})}),!m&&s.jsxs("nav",{role:"navigation","aria-label":"Bottom navigation",className:"fixed inset-x-0 bottom-0 z-50",children:[s.jsx("div",{className:"absolute inset-x-0 bottom-0 bg-[#0B0F1A]",style:{height:"calc(5.25rem + env(safe-area-inset-bottom))"},"aria-hidden":!0}),s.jsx("div",{className:"relative mx-auto max-w-md px-4 pb-[calc(env(safe-area-inset-bottom)+0.5rem)] pt-2",children:s.jsxs("div",{className:"flex h-16 items-center justify-around rounded-2xl border border-base-border bg-base-card shadow-xl",children:[s.jsx(h,{path:"/",icon:s.jsx("span",{className:"text-xl",children:"🏠"}),label:"Home"}),s.jsx(h,{path:"/play",icon:s.jsx(Sg,{size:24}),label:"Play"}),s.jsx(h,{path:"/profile",icon:s.jsx("span",{className:"text-xl",children:"👤"}),label:"Profile"})]})})]})]})}function ho(){return ho=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ho.apply(null,arguments)}function Eg(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function _g(e){d.useEffect(e,[])}var Rg=["id","volume","playbackRate","soundEnabled","interrupt","onload"];function mn(e,t){var n=t===void 0?{}:t,r=n.volume,i=r===void 0?1:r,o=n.playbackRate,a=o===void 0?1:o,l=n.soundEnabled,c=l===void 0?!0:l,u=n.interrupt,g=u===void 0?!1:u,f=n.onload,m=Eg(n,Rg),k=xt.useRef(null),b=xt.useRef(!1),j=xt.useState(null),R=j[0],v=j[1],p=xt.useState(null),y=p[0],E=p[1],P=function(){typeof f=="function"&&f.call(this),b.current&&v(this.duration()*1e3),E(this)};_g(function(){return Dp(()=>import("./howler-e7c5c400.js").then(w=>w.h),[]).then(function(w){if(!b.current){var S;k.current=(S=w.Howl)!==null&&S!==void 0?S:w.default.Howl,b.current=!0,new k.current(ho({src:Array.isArray(e)?e:[e],volume:i,rate:a,onload:P},m))}}),function(){b.current=!1}}),xt.useEffect(function(){k.current&&y&&E(new k.current(ho({src:Array.isArray(e)?e:[e],volume:i,onload:P},m)))},[JSON.stringify(e)]),xt.useEffect(function(){y&&(y.volume(i),m.sprite||y.rate(a))},[y,i,a]);var L=xt.useCallback(function(w){typeof w>"u"&&(w={}),!(!y||!c&&!w.forceSoundEnabled)&&(g&&y.stop(),w.playbackRate&&y.rate(w.playbackRate),y.play(w.id))},[y,c,g]),N=xt.useCallback(function(w){y&&y.stop(w)},[y]),h=xt.useCallback(function(w){y&&y.pause(w)},[y]),x=[L,{sound:y,stop:N,pause:h,duration:R}];return x}var Zp={exports:{}};/* @license
Papa Parse
v5.5.3
https://github.com/mholt/PapaParse
License: MIT
*/(function(e,t){((n,r)=>{e.exports=r()})(km,function n(){var r=typeof self<"u"?self:typeof window<"u"?window:r!==void 0?r:{},i,o=!r.document&&!!r.postMessage,a=r.IS_PAPA_WORKER||!1,l={},c=0,u={};function g(h){this._handle=null,this._finished=!1,this._completed=!1,this._halted=!1,this._input=null,this._baseIndex=0,this._partialLine="",this._rowCount=0,this._start=0,this._nextChunk=null,this.isFirstChunk=!0,this._completeResults={data:[],errors:[],meta:{}},(function(x){var w=P(x);w.chunkSize=parseInt(w.chunkSize),x.step||x.chunk||(w.chunkSize=null),this._handle=new j(w),(this._handle.streamer=this)._config=w}).call(this,h),this.parseChunk=function(x,w){var S=parseInt(this._config.skipFirstNLines)||0;if(this.isFirstChunk&&0<S){let U=this._config.newline;U||(_=this._config.quoteChar||'"',U=this._handle.guessLineEndings(x,_)),x=[...x.split(U).slice(S)].join(U)}this.isFirstChunk&&N(this._config.beforeFirstChunk)&&(_=this._config.beforeFirstChunk(x))!==void 0&&(x=_),this.isFirstChunk=!1,this._halted=!1;var S=this._partialLine+x,_=(this._partialLine="",this._handle.parse(S,this._baseIndex,!this._finished));if(!this._handle.paused()&&!this._handle.aborted()){if(x=_.meta.cursor,S=(this._finished||(this._partialLine=S.substring(x-this._baseIndex),this._baseIndex=x),_&&_.data&&(this._rowCount+=_.data.length),this._finished||this._config.preview&&this._rowCount>=this._config.preview),a)r.postMessage({results:_,workerId:u.WORKER_ID,finished:S});else if(N(this._config.chunk)&&!w){if(this._config.chunk(_,this._handle),this._handle.paused()||this._handle.aborted())return void(this._halted=!0);this._completeResults=_=void 0}return this._config.step||this._config.chunk||(this._completeResults.data=this._completeResults.data.concat(_.data),this._completeResults.errors=this._completeResults.errors.concat(_.errors),this._completeResults.meta=_.meta),this._completed||!S||!N(this._config.complete)||_&&_.meta.aborted||(this._config.complete(this._completeResults,this._input),this._completed=!0),S||_&&_.meta.paused||this._nextChunk(),_}this._halted=!0},this._sendError=function(x){N(this._config.error)?this._config.error(x):a&&this._config.error&&r.postMessage({workerId:u.WORKER_ID,error:x,finished:!1})}}function f(h){var x;(h=h||{}).chunkSize||(h.chunkSize=u.RemoteChunkSize),g.call(this,h),this._nextChunk=o?function(){this._readChunk(),this._chunkLoaded()}:function(){this._readChunk()},this.stream=function(w){this._input=w,this._nextChunk()},this._readChunk=function(){if(this._finished)this._chunkLoaded();else{if(x=new XMLHttpRequest,this._config.withCredentials&&(x.withCredentials=this._config.withCredentials),o||(x.onload=L(this._chunkLoaded,this),x.onerror=L(this._chunkError,this)),x.open(this._config.downloadRequestBody?"POST":"GET",this._input,!o),this._config.downloadRequestHeaders){var w,S=this._config.downloadRequestHeaders;for(w in S)x.setRequestHeader(w,S[w])}var _;this._config.chunkSize&&(_=this._start+this._config.chunkSize-1,x.setRequestHeader("Range","bytes="+this._start+"-"+_));try{x.send(this._config.downloadRequestBody)}catch(U){this._chunkError(U.message)}o&&x.status===0&&this._chunkError()}},this._chunkLoaded=function(){x.readyState===4&&(x.status<200||400<=x.status?this._chunkError():(this._start+=this._config.chunkSize||x.responseText.length,this._finished=!this._config.chunkSize||this._start>=(w=>(w=w.getResponseHeader("Content-Range"))!==null?parseInt(w.substring(w.lastIndexOf("/")+1)):-1)(x),this.parseChunk(x.responseText)))},this._chunkError=function(w){w=x.statusText||w,this._sendError(new Error(w))}}function m(h){(h=h||{}).chunkSize||(h.chunkSize=u.LocalChunkSize),g.call(this,h);var x,w,S=typeof FileReader<"u";this.stream=function(_){this._input=_,w=_.slice||_.webkitSlice||_.mozSlice,S?((x=new FileReader).onload=L(this._chunkLoaded,this),x.onerror=L(this._chunkError,this)):x=new FileReaderSync,this._nextChunk()},this._nextChunk=function(){this._finished||this._config.preview&&!(this._rowCount<this._config.preview)||this._readChunk()},this._readChunk=function(){var _=this._input,U=(this._config.chunkSize&&(U=Math.min(this._start+this._config.chunkSize,this._input.size),_=w.call(_,this._start,U)),x.readAsText(_,this._config.encoding));S||this._chunkLoaded({target:{result:U}})},this._chunkLoaded=function(_){this._start+=this._config.chunkSize,this._finished=!this._config.chunkSize||this._start>=this._input.size,this.parseChunk(_.target.result)},this._chunkError=function(){this._sendError(x.error)}}function k(h){var x;g.call(this,h=h||{}),this.stream=function(w){return x=w,this._nextChunk()},this._nextChunk=function(){var w,S;if(!this._finished)return w=this._config.chunkSize,x=w?(S=x.substring(0,w),x.substring(w)):(S=x,""),this._finished=!x,this.parseChunk(S)}}function b(h){g.call(this,h=h||{});var x=[],w=!0,S=!1;this.pause=function(){g.prototype.pause.apply(this,arguments),this._input.pause()},this.resume=function(){g.prototype.resume.apply(this,arguments),this._input.resume()},this.stream=function(_){this._input=_,this._input.on("data",this._streamData),this._input.on("end",this._streamEnd),this._input.on("error",this._streamError)},this._checkIsFinished=function(){S&&x.length===1&&(this._finished=!0)},this._nextChunk=function(){this._checkIsFinished(),x.length?this.parseChunk(x.shift()):w=!0},this._streamData=L(function(_){try{x.push(typeof _=="string"?_:_.toString(this._config.encoding)),w&&(w=!1,this._checkIsFinished(),this.parseChunk(x.shift()))}catch(U){this._streamError(U)}},this),this._streamError=L(function(_){this._streamCleanUp(),this._sendError(_)},this),this._streamEnd=L(function(){this._streamCleanUp(),S=!0,this._streamData("")},this),this._streamCleanUp=L(function(){this._input.removeListener("data",this._streamData),this._input.removeListener("end",this._streamEnd),this._input.removeListener("error",this._streamError)},this)}function j(h){var x,w,S,_,U=Math.pow(2,53),V=-U,J=/^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/,Z=/^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/,H=this,z=0,T=0,$=!1,A=!1,W=[],B={data:[],errors:[],meta:{}};function re(M){return h.skipEmptyLines==="greedy"?M.join("").trim()==="":M.length===1&&M[0].length===0}function ie(){if(B&&S&&(pe("Delimiter","UndetectableDelimiter","Unable to auto-detect delimiting character; defaulted to '"+u.DefaultDelimiter+"'"),S=!1),h.skipEmptyLines&&(B.data=B.data.filter(function(K){return!re(K)})),ae()){let K=function(G,oe){N(h.transformHeader)&&(G=h.transformHeader(G,oe)),W.push(G)};if(B)if(Array.isArray(B.data[0])){for(var M=0;ae()&&M<B.data.length;M++)B.data[M].forEach(K);B.data.splice(0,1)}else B.data.forEach(K)}function q(K,G){for(var oe=h.header?{}:[],I=0;I<K.length;I++){var D=I,X=K[I],X=((ue,C)=>(Y=>(h.dynamicTypingFunction&&h.dynamicTyping[Y]===void 0&&(h.dynamicTyping[Y]=h.dynamicTypingFunction(Y)),(h.dynamicTyping[Y]||h.dynamicTyping)===!0))(ue)?C==="true"||C==="TRUE"||C!=="false"&&C!=="FALSE"&&((Y=>{if(J.test(Y)&&(Y=parseFloat(Y),V<Y&&Y<U))return 1})(C)?parseFloat(C):Z.test(C)?new Date(C):C===""?null:C):C)(D=h.header?I>=W.length?"__parsed_extra":W[I]:D,X=h.transform?h.transform(X,D):X);D==="__parsed_extra"?(oe[D]=oe[D]||[],oe[D].push(X)):oe[D]=X}return h.header&&(I>W.length?pe("FieldMismatch","TooManyFields","Too many fields: expected "+W.length+" fields but parsed "+I,T+G):I<W.length&&pe("FieldMismatch","TooFewFields","Too few fields: expected "+W.length+" fields but parsed "+I,T+G)),oe}var ne;B&&(h.header||h.dynamicTyping||h.transform)&&(ne=1,!B.data.length||Array.isArray(B.data[0])?(B.data=B.data.map(q),ne=B.data.length):B.data=q(B.data,0),h.header&&B.meta&&(B.meta.fields=W),T+=ne)}function ae(){return h.header&&W.length===0}function pe(M,q,ne,K){M={type:M,code:q,message:ne},K!==void 0&&(M.row=K),B.errors.push(M)}N(h.step)&&(_=h.step,h.step=function(M){B=M,ae()?ie():(ie(),B.data.length!==0&&(z+=M.data.length,h.preview&&z>h.preview?w.abort():(B.data=B.data[0],_(B,H))))}),this.parse=function(M,q,ne){var K=h.quoteChar||'"',K=(h.newline||(h.newline=this.guessLineEndings(M,K)),S=!1,h.delimiter?N(h.delimiter)&&(h.delimiter=h.delimiter(M),B.meta.delimiter=h.delimiter):((K=((G,oe,I,D,X)=>{var ue,C,Y,de;X=X||[",","	","|",";",u.RECORD_SEP,u.UNIT_SEP];for(var ge=0;ge<X.length;ge++){for(var ve,ke=X[ge],ye=0,nt=0,Se=0,$e=(Y=void 0,new v({comments:D,delimiter:ke,newline:oe,preview:10}).parse(G)),Ge=0;Ge<$e.data.length;Ge++)I&&re($e.data[Ge])?Se++:(ve=$e.data[Ge].length,nt+=ve,Y===void 0?Y=ve:0<ve&&(ye+=Math.abs(ve-Y),Y=ve));0<$e.data.length&&(nt/=$e.data.length-Se),(C===void 0||ye<=C)&&(de===void 0||de<nt)&&1.99<nt&&(C=ye,ue=ke,de=nt)}return{successful:!!(h.delimiter=ue),bestDelimiter:ue}})(M,h.newline,h.skipEmptyLines,h.comments,h.delimitersToGuess)).successful?h.delimiter=K.bestDelimiter:(S=!0,h.delimiter=u.DefaultDelimiter),B.meta.delimiter=h.delimiter),P(h));return h.preview&&h.header&&K.preview++,x=M,w=new v(K),B=w.parse(x,q,ne),ie(),$?{meta:{paused:!0}}:B||{meta:{paused:!1}}},this.paused=function(){return $},this.pause=function(){$=!0,w.abort(),x=N(h.chunk)?"":x.substring(w.getCharIndex())},this.resume=function(){H.streamer._halted?($=!1,H.streamer.parseChunk(x,!0)):setTimeout(H.resume,3)},this.aborted=function(){return A},this.abort=function(){A=!0,w.abort(),B.meta.aborted=!0,N(h.complete)&&h.complete(B),x=""},this.guessLineEndings=function(G,K){G=G.substring(0,1048576);var K=new RegExp(R(K)+"([^]*?)"+R(K),"gm"),ne=(G=G.replace(K,"")).split("\r"),K=G.split(`
`),G=1<K.length&&K[0].length<ne[0].length;if(ne.length===1||G)return`
`;for(var oe=0,I=0;I<ne.length;I++)ne[I][0]===`
`&&oe++;return oe>=ne.length/2?`\r
`:"\r"}}function R(h){return h.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function v(h){var x=(h=h||{}).delimiter,w=h.newline,S=h.comments,_=h.step,U=h.preview,V=h.fastMode,J=null,Z=!1,H=h.quoteChar==null?'"':h.quoteChar,z=H;if(h.escapeChar!==void 0&&(z=h.escapeChar),(typeof x!="string"||-1<u.BAD_DELIMITERS.indexOf(x))&&(x=","),S===x)throw new Error("Comment character same as delimiter");S===!0?S="#":(typeof S!="string"||-1<u.BAD_DELIMITERS.indexOf(S))&&(S=!1),w!==`
`&&w!=="\r"&&w!==`\r
`&&(w=`
`);var T=0,$=!1;this.parse=function(A,W,B){if(typeof A!="string")throw new Error("Input must be a string");var re=A.length,ie=x.length,ae=w.length,pe=S.length,M=N(_),q=[],ne=[],K=[],G=T=0;if(!A)return ye();if(V||V!==!1&&A.indexOf(H)===-1){for(var oe=A.split(w),I=0;I<oe.length;I++){if(K=oe[I],T+=K.length,I!==oe.length-1)T+=w.length;else if(B)return ye();if(!S||K.substring(0,pe)!==S){if(M){if(q=[],de(K.split(x)),nt(),$)return ye()}else de(K.split(x));if(U&&U<=I)return q=q.slice(0,U),ye(!0)}}return ye()}for(var D=A.indexOf(x,T),X=A.indexOf(w,T),ue=new RegExp(R(z)+R(H),"g"),C=A.indexOf(H,T);;)if(A[T]===H)for(C=T,T++;;){if((C=A.indexOf(H,C+1))===-1)return B||ne.push({type:"Quotes",code:"MissingQuotes",message:"Quoted field unterminated",row:q.length,index:T}),ve();if(C===re-1)return ve(A.substring(T,C).replace(ue,H));if(H===z&&A[C+1]===z)C++;else if(H===z||C===0||A[C-1]!==z){D!==-1&&D<C+1&&(D=A.indexOf(x,C+1));var Y=ge((X=X!==-1&&X<C+1?A.indexOf(w,C+1):X)===-1?D:Math.min(D,X));if(A.substr(C+1+Y,ie)===x){K.push(A.substring(T,C).replace(ue,H)),A[T=C+1+Y+ie]!==H&&(C=A.indexOf(H,T)),D=A.indexOf(x,T),X=A.indexOf(w,T);break}if(Y=ge(X),A.substring(C+1+Y,C+1+Y+ae)===w){if(K.push(A.substring(T,C).replace(ue,H)),ke(C+1+Y+ae),D=A.indexOf(x,T),C=A.indexOf(H,T),M&&(nt(),$))return ye();if(U&&q.length>=U)return ye(!0);break}ne.push({type:"Quotes",code:"InvalidQuotes",message:"Trailing quote on quoted field is malformed",row:q.length,index:T}),C++}}else if(S&&K.length===0&&A.substring(T,T+pe)===S){if(X===-1)return ye();T=X+ae,X=A.indexOf(w,T),D=A.indexOf(x,T)}else if(D!==-1&&(D<X||X===-1))K.push(A.substring(T,D)),T=D+ie,D=A.indexOf(x,T);else{if(X===-1)break;if(K.push(A.substring(T,X)),ke(X+ae),M&&(nt(),$))return ye();if(U&&q.length>=U)return ye(!0)}return ve();function de(Se){q.push(Se),G=T}function ge(Se){var $e=0;return $e=Se!==-1&&(Se=A.substring(C+1,Se))&&Se.trim()===""?Se.length:$e}function ve(Se){return B||(Se===void 0&&(Se=A.substring(T)),K.push(Se),T=re,de(K),M&&nt()),ye()}function ke(Se){T=Se,de(K),K=[],X=A.indexOf(w,T)}function ye(Se){if(h.header&&!W&&q.length&&!Z){var $e=q[0],Ge=Object.create(null),Ce=new Set($e);let ft=!1;for(let Oe=0;Oe<$e.length;Oe++){let pt=$e[Oe];if(Ge[pt=N(h.transformHeader)?h.transformHeader(pt,Oe):pt]){let Pt,hr=Ge[pt];for(;Pt=pt+"_"+hr,hr++,Ce.has(Pt););Ce.add(Pt),$e[Oe]=Pt,Ge[pt]++,ft=!0,(J=J===null?{}:J)[Pt]=pt}else Ge[pt]=1,$e[Oe]=pt;Ce.add(pt)}ft&&console.warn("Duplicate headers found and renamed."),Z=!0}return{data:q,errors:ne,meta:{delimiter:x,linebreak:w,aborted:$,truncated:!!Se,cursor:G+(W||0),renamedHeaders:J}}}function nt(){_(ye()),q=[],ne=[]}},this.abort=function(){$=!0},this.getCharIndex=function(){return T}}function p(h){var x=h.data,w=l[x.workerId],S=!1;if(x.error)w.userError(x.error,x.file);else if(x.results&&x.results.data){var _={abort:function(){S=!0,y(x.workerId,{data:[],errors:[],meta:{aborted:!0}})},pause:E,resume:E};if(N(w.userStep)){for(var U=0;U<x.results.data.length&&(w.userStep({data:x.results.data[U],errors:x.results.errors,meta:x.results.meta},_),!S);U++);delete x.results}else N(w.userChunk)&&(w.userChunk(x.results,_,x.file),delete x.results)}x.finished&&!S&&y(x.workerId,x.results)}function y(h,x){var w=l[h];N(w.userComplete)&&w.userComplete(x),w.terminate(),delete l[h]}function E(){throw new Error("Not implemented.")}function P(h){if(typeof h!="object"||h===null)return h;var x,w=Array.isArray(h)?[]:{};for(x in h)w[x]=P(h[x]);return w}function L(h,x){return function(){h.apply(x,arguments)}}function N(h){return typeof h=="function"}return u.parse=function(h,x){var w=(x=x||{}).dynamicTyping||!1;if(N(w)&&(x.dynamicTypingFunction=w,w={}),x.dynamicTyping=w,x.transform=!!N(x.transform)&&x.transform,!x.worker||!u.WORKERS_SUPPORTED)return w=null,u.NODE_STREAM_INPUT,typeof h=="string"?(h=(S=>S.charCodeAt(0)!==65279?S:S.slice(1))(h),w=new(x.download?f:k)(x)):h.readable===!0&&N(h.read)&&N(h.on)?w=new b(x):(r.File&&h instanceof File||h instanceof Object)&&(w=new m(x)),w.stream(h);(w=(()=>{var S;return!!u.WORKERS_SUPPORTED&&(S=(()=>{var _=r.URL||r.webkitURL||null,U=n.toString();return u.BLOB_URL||(u.BLOB_URL=_.createObjectURL(new Blob(["var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; ","(",U,")();"],{type:"text/javascript"})))})(),(S=new r.Worker(S)).onmessage=p,S.id=c++,l[S.id]=S)})()).userStep=x.step,w.userChunk=x.chunk,w.userComplete=x.complete,w.userError=x.error,x.step=N(x.step),x.chunk=N(x.chunk),x.complete=N(x.complete),x.error=N(x.error),delete x.worker,w.postMessage({input:h,config:x,workerId:w.id})},u.unparse=function(h,x){var w=!1,S=!0,_=",",U=`\r
`,V='"',J=V+V,Z=!1,H=null,z=!1,T=((()=>{if(typeof x=="object"){if(typeof x.delimiter!="string"||u.BAD_DELIMITERS.filter(function(W){return x.delimiter.indexOf(W)!==-1}).length||(_=x.delimiter),typeof x.quotes!="boolean"&&typeof x.quotes!="function"&&!Array.isArray(x.quotes)||(w=x.quotes),typeof x.skipEmptyLines!="boolean"&&typeof x.skipEmptyLines!="string"||(Z=x.skipEmptyLines),typeof x.newline=="string"&&(U=x.newline),typeof x.quoteChar=="string"&&(V=x.quoteChar),typeof x.header=="boolean"&&(S=x.header),Array.isArray(x.columns)){if(x.columns.length===0)throw new Error("Option columns is empty");H=x.columns}x.escapeChar!==void 0&&(J=x.escapeChar+V),x.escapeFormulae instanceof RegExp?z=x.escapeFormulae:typeof x.escapeFormulae=="boolean"&&x.escapeFormulae&&(z=/^[=+\-@\t\r].*$/)}})(),new RegExp(R(V),"g"));if(typeof h=="string"&&(h=JSON.parse(h)),Array.isArray(h)){if(!h.length||Array.isArray(h[0]))return $(null,h,Z);if(typeof h[0]=="object")return $(H||Object.keys(h[0]),h,Z)}else if(typeof h=="object")return typeof h.data=="string"&&(h.data=JSON.parse(h.data)),Array.isArray(h.data)&&(h.fields||(h.fields=h.meta&&h.meta.fields||H),h.fields||(h.fields=Array.isArray(h.data[0])?h.fields:typeof h.data[0]=="object"?Object.keys(h.data[0]):[]),Array.isArray(h.data[0])||typeof h.data[0]=="object"||(h.data=[h.data])),$(h.fields||[],h.data||[],Z);throw new Error("Unable to serialize unrecognized input");function $(W,B,re){var ie="",ae=(typeof W=="string"&&(W=JSON.parse(W)),typeof B=="string"&&(B=JSON.parse(B)),Array.isArray(W)&&0<W.length),pe=!Array.isArray(B[0]);if(ae&&S){for(var M=0;M<W.length;M++)0<M&&(ie+=_),ie+=A(W[M],M);0<B.length&&(ie+=U)}for(var q=0;q<B.length;q++){var ne=(ae?W:B[q]).length,K=!1,G=ae?Object.keys(B[q]).length===0:B[q].length===0;if(re&&!ae&&(K=re==="greedy"?B[q].join("").trim()==="":B[q].length===1&&B[q][0].length===0),re==="greedy"&&ae){for(var oe=[],I=0;I<ne;I++){var D=pe?W[I]:I;oe.push(B[q][D])}K=oe.join("").trim()===""}if(!K){for(var X=0;X<ne;X++){0<X&&!G&&(ie+=_);var ue=ae&&pe?W[X]:X;ie+=A(B[q][ue],X)}q<B.length-1&&(!re||0<ne&&!G)&&(ie+=U)}}return ie}function A(W,B){var re,ie;return W==null?"":W.constructor===Date?JSON.stringify(W).slice(1,25):(ie=!1,z&&typeof W=="string"&&z.test(W)&&(W="'"+W,ie=!0),re=W.toString().replace(T,J),(ie=ie||w===!0||typeof w=="function"&&w(W,B)||Array.isArray(w)&&w[B]||((ae,pe)=>{for(var M=0;M<pe.length;M++)if(-1<ae.indexOf(pe[M]))return!0;return!1})(re,u.BAD_DELIMITERS)||-1<re.indexOf(_)||re.charAt(0)===" "||re.charAt(re.length-1)===" ")?V+re+V:re)}},u.RECORD_SEP=String.fromCharCode(30),u.UNIT_SEP=String.fromCharCode(31),u.BYTE_ORDER_MARK="\uFEFF",u.BAD_DELIMITERS=["\r",`
`,'"',u.BYTE_ORDER_MARK],u.WORKERS_SUPPORTED=!o&&!!r.Worker,u.NODE_STREAM_INPUT=1,u.LocalChunkSize=10485760,u.RemoteChunkSize=5242880,u.DefaultDelimiter=",",u.Parser=v,u.ParserHandle=j,u.NetworkStreamer=f,u.FileStreamer=m,u.StringStreamer=k,u.ReadableStreamStreamer=b,r.jQuery&&((i=r.jQuery).fn.parse=function(h){var x=h.config||{},w=[];return this.each(function(U){if(!(i(this).prop("tagName").toUpperCase()==="INPUT"&&i(this).attr("type").toLowerCase()==="file"&&r.FileReader)||!this.files||this.files.length===0)return!0;for(var V=0;V<this.files.length;V++)w.push({file:this.files[V],inputElem:this,instanceConfig:i.extend({},x)})}),S(),this;function S(){if(w.length===0)N(h.complete)&&h.complete();else{var U,V,J,Z,H=w[0];if(N(h.before)){var z=h.before(H.file,H.inputElem);if(typeof z=="object"){if(z.action==="abort")return U="AbortError",V=H.file,J=H.inputElem,Z=z.reason,void(N(h.error)&&h.error({name:U},V,J,Z));if(z.action==="skip")return void _();typeof z.config=="object"&&(H.instanceConfig=i.extend(H.instanceConfig,z.config))}else if(z==="skip")return void _()}var T=H.instanceConfig.complete;H.instanceConfig.complete=function($){N(T)&&T($,H.file,H.inputElem),_()},u.parse(H.file,H.instanceConfig)}}function _(){w.splice(0,1),S()}}),a&&(r.onmessage=function(h){h=h.data,u.WORKER_ID===void 0&&h&&(u.WORKER_ID=h.workerId),typeof h.input=="string"?r.postMessage({workerId:u.WORKER_ID,results:u.parse(h.input,h.config),finished:!0}):(r.File&&h.input instanceof File||h.input instanceof Object)&&(h=u.parse(h.input,h.config))&&r.postMessage({workerId:u.WORKER_ID,results:h,finished:!0})}),(f.prototype=Object.create(g.prototype)).constructor=f,(m.prototype=Object.create(g.prototype)).constructor=m,(k.prototype=Object.create(k.prototype)).constructor=k,(b.prototype=Object.create(g.prototype)).constructor=b,u})})(Zp);var Pg=Zp.exports;const Io=kd(Pg);function em({startRect:e,targetRef:t,count:n=12,onDone:r}){return d.useEffect(()=>{const i=t==null?void 0:t.current;if(!e||!i){r==null||r();return}const o=i.getBoundingClientRect(),a=document.createElement("div");a.style.position="fixed",a.style.inset="0",a.style.pointerEvents="none",a.style.zIndex="9999",document.body.appendChild(a);const l=o.left+o.width/2,c=o.top+o.height/2,u=e.left+e.width/2,g=e.top+e.height/2,f=200;let m=0;function k(b){const j=document.createElement("div");j.textContent="🪙",Object.assign(j.style,{position:"fixed",left:"0px",top:"0px",zIndex:"10000",pointerEvents:"none",fontSize:"22px",opacity:"1",willChange:"transform, opacity",transform:"translate(0px, 0px)"});const R=u,v=g,p=l,y=c;j.style.transform=`translate(${R}px, ${v}px) scale(1)`,a.appendChild(j),j.getBoundingClientRect(),j.style.transition=`transform ${f}ms cubic-bezier(.2,.8,.2,1), opacity ${f}ms linear`,requestAnimationFrame(()=>{j.style.transform=`translate(${p}px, ${y}px) scale(.6)`,j.style.opacity="0.1"}),setTimeout(()=>{j.remove(),m+=1,m===n&&(a.remove(),r==null||r())},f+50)}for(let b=0;b<n;b++)setTimeout(()=>k(),b*60);return()=>{try{a.remove()}catch{}}},[e,t,n,r]),null}const tm=[{name:"GK",slug:"general-knowledge",questions:50,icon:"🧠",color:"#FF6B6B",gradient:"from-red-500 to-pink-500"},{name:"Science",slug:"science",questions:45,icon:"🧪",color:"#4ECDC4",gradient:"from-cyan-500 to-teal-500"},{name:"Fun Facts",slug:"fun-facts",questions:30,icon:"🎉",color:"#FFD93D",gradient:"from-yellow-400 to-orange-500"},{name:"History",slug:"history",questions:42,icon:"🏺",color:"#A8E6CF",gradient:"from-green-400 to-emerald-500"},{name:"AI & Tech",slug:"artificial-intelligence",questions:28,icon:"🤖",color:"#C7B8FF",gradient:"from-purple-400 to-indigo-500"},{name:"More",slug:"more",questions:0,icon:"✨",color:"#FF8CC3",gradient:"from-pink-400 to-rose-500"}],nm=[{name:"Geography",slug:"geography",questions:38,icon:"🗺️",color:"#FACC15",gradient:"from-yellow-400 to-amber-500"},{name:"Computer",slug:"computer",questions:34,icon:"💻",color:"#3B82F6",gradient:"from-blue-400 to-blue-600"},{name:"Aptitude",slug:"aptitude",questions:36,icon:"📐",color:"#EC4899",gradient:"from-pink-500 to-rose-500"},{name:"Iconic Figures",slug:"iconic-figures",questions:26,icon:"🌟",color:"#8B5CF6",gradient:"from-purple-500 to-violet-600"}],nd=[...tm.filter(e=>e.slug!=="more"),...nm],$t={COINS:"qp_coins",XP:"qp_xp",LEVEL:"qp_level",STREAK:"dq_streak",DAILY_LOG:"dq_daily_log",LAST_ANSWERED:"dq_last_answered"},Tg=(e=new Date)=>e.toLocaleDateString("en-CA"),zg=e=>100*e*(e-1),Lg=(e,t=null)=>{try{const n=localStorage.getItem(e);return n?JSON.parse(n):t}catch{return t}},Ig=(e,t)=>localStorage.setItem(e,JSON.stringify(t));function rd(){const e=Rt(),[t]=mn("/sounds/correct.mp3",{volume:.6}),[n]=mn("/sounds/wrong.mp3",{volume:.6}),[r]=mn("/sounds/coin.mp3",{volume:.75}),[i,o]=d.useState(()=>parseInt(localStorage.getItem($t.LEVEL)||"1",10)),[a,l]=d.useState(()=>parseInt(localStorage.getItem($t.XP)||"0",10)),[c,u]=d.useState(()=>parseInt(localStorage.getItem($t.COINS)||"0",10)),[g,f]=d.useState(()=>Number(localStorage.getItem($t.STREAK)||0)),m=d.useRef(null),[k,b]=d.useState(!1),[j,R]=d.useState(null),[v,p]=d.useState(!1),[y,E]=d.useState("medium"),[P,L]=d.useState(10),[N,h]=d.useState(45),[x,w]=d.useState(!1),[S,_]=d.useState(null),[U,V]=d.useState(null),[J,Z]=d.useState(!1),[H,z]=d.useState(!1),[T,$]=d.useState(null),A=10,W=5,[B,re]=d.useState(!1),[ie,ae]=d.useState("general-knowledge"),[pe,M]=d.useState("medium"),[q,ne]=d.useState(10);d.useEffect(()=>{const C=sessionStorage.getItem("homeScrollPosition");C&&window.scrollTo(0,parseInt(C));const Y=()=>{sessionStorage.setItem("homeScrollPosition",window.scrollY.toString())};return window.addEventListener("scroll",Y),()=>window.removeEventListener("scroll",Y)},[]),d.useEffect(()=>{(async()=>{var Y;try{const de=await fetch("/data/quiz_questions_bank.csv").then(ye=>ye.text()),{data:ge}=Io.parse(de,{header:!0,skipEmptyLines:!0});if(!ge.length)throw new Error("empty");const ve=ge[Math.floor(Math.random()*ge.length)],ke=[ve.option1,ve.option2,ve.option3,ve.option4].filter(Boolean);_({category:ve.category||"General",prompt:ve.question,options:ke,answerIndex:["A","B","C","D"].indexOf((Y=ve.answer)==null?void 0:Y.toUpperCase())||0})}catch{_({category:"Science",prompt:"Which planet is known as the Red Planet?",options:["Earth","Mars","Jupiter","Venus"],answerIndex:1})}})()},[]);const K=(C,Y)=>{if(U!==null)return;V(C);const de=C===S.answerIndex;if(de){if(t(),Y!=null&&Y.currentTarget&&m.current){const ge=Y.currentTarget.getBoundingClientRect();r(),$({startRect:ge,count:10,amount:W})}}else n();setTimeout(()=>{if(z(!0),Z(!0),de){const ge=Tg();Ig($t.DAILY_LOG,{...Lg($t.DAILY_LOG,{}),[ge]:!0}),localStorage.setItem($t.LAST_ANSWERED,ge);const ve=g+1;f(ve),localStorage.setItem($t.STREAK,String(ve))}},600)},G=C=>{const Y=c+C;u(Y),localStorage.setItem($t.COINS,String(Y))},oe=C=>{let Y=a+C,de=i;for(;Y>=zg(de+1);)de++;l(Y),o(de),localStorage.setItem($t.XP,String(Y)),localStorage.setItem($t.LEVEL,String(de))},I=C=>{if(C.slug==="more"){b(!0);return}R(C),p(!0)},D=()=>{e(`/quiz/${j.slug}/start`,{state:{mode:"quiz",difficulty:y,count:P,timer:{type:"per_q",seconds:N}}})},X=()=>{nd.find(C=>C.slug===ie),e(`/quiz/${ie}/start`,{state:{mode:"practice",difficulty:pe,count:q,timer:{type:"off",seconds:0}}})},ue=[{icon:"🎯",label:"Daily Quest",color:"bg-gradient-to-br from-orange-500 to-pink-500",action:()=>e("/profile/quests")},{icon:"🔥",label:`${g} Streak`,color:"bg-gradient-to-br from-red-500 to-orange-500",action:()=>e("/profile/streaks")},{icon:"🏆",label:"Achievements",color:"bg-gradient-to-br from-blue-500 to-purple-500",action:()=>e("/profile/achievements")},{icon:"🎁",label:"Rewards",color:"bg-gradient-to-br from-green-500 to-teal-500",action:()=>e("/profile/rewards")}];return s.jsxs("div",{className:"min-h-screen bg-base-bg text-base-text",children:[s.jsx("div",{className:"fixed inset-0 bg-[#0B0F1A]",style:{background:"linear-gradient(to bottom, #0B0F1A, #111827)"}}),s.jsxs("div",{className:"relative z-10 px-4 pt-10 pb-24",children:[s.jsx("style",{jsx:!0,children:`
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
        `}),T&&s.jsx(em,{startRect:T.startRect,targetRef:m,count:T.count,onDone:()=>{oe(A),G(T.amount),$(null)}}),s.jsxs("div",{className:"flex justify-between items-center mb-8",children:[s.jsxs("div",{children:[s.jsx("h1",{className:"text-2xl font-bold mb-1",children:"Hi, Nirmal! 👋"}),s.jsx("p",{className:"text-sm text-base-muted",children:"Ready for today's adventure?"})]}),s.jsxs("div",{className:"flex gap-3",children:[s.jsxs("button",{ref:m,onClick:()=>w(!0),className:"px-4 py-2 rounded-2xl bg-white/5 border border-base-border flex items-center gap-2 hover:bg-white/10 transition",children:["🪙 ",c]}),s.jsx("button",{onClick:()=>e("/profile"),className:"w-10 h-10 rounded-full bg-white/5 border border-base-border grid place-items-center hover:bg-white/10 transition",children:"👤"})]})]}),s.jsxs("div",{className:"relative overflow-hidden rounded-3xl p-8 mb-6 cursor-pointer transform transition-all hover:scale-[1.02]",style:{background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",boxShadow:"0 10px 40px rgba(102, 126, 234, 0.3)",animation:"pulse 3s infinite"},onClick:()=>e("/play"),children:[s.jsx("div",{className:"absolute top-[-50px] right-[-50px] w-[200px] h-[200px] rounded-full bg-white/10",style:{animation:"float 4s ease-in-out infinite"}}),s.jsx("div",{className:"absolute bottom-[-30px] left-[-30px] w-[150px] h-[150px] rounded-full bg-white/10",style:{animation:"float 4s ease-in-out infinite reverse"}}),s.jsx("h2",{className:"text-3xl font-bold mb-2",children:"🎰 Spin & Win"}),s.jsx("p",{className:"text-base opacity-90 mb-4",children:"Test your luck, win amazing prizes!"}),s.jsx("div",{className:"inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium",style:{background:"linear-gradient(90deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0.3) 100%)",backgroundSize:"200% auto",animation:"shimmer 2s linear infinite"},children:"Play Now →"})]}),s.jsx("div",{className:"grid grid-cols-4 gap-3 mb-8",children:ue.map((C,Y)=>s.jsxs("button",{onClick:C.action,className:`${C.color} aspect-square rounded-2xl flex flex-col items-center justify-center gap-1 transform transition-all hover:scale-105`,children:[s.jsx("div",{className:"text-2xl",children:C.icon}),s.jsx("div",{className:"text-[10px] font-medium text-white",children:C.label})]},Y))}),s.jsx("div",{className:"flip-card mb-6",children:s.jsxs("div",{className:`flip-card-inner ${H?"flipped":""}`,children:[S&&s.jsx("div",{className:"flip-card-front",children:s.jsxs("div",{className:"rounded-3xl bg-white/5 border border-base-border p-6",children:[s.jsxs("div",{className:"flex justify-between items-center mb-4",children:[s.jsx("h3",{className:"text-lg font-bold",children:"🎯 Daily Challenge"}),s.jsxs("span",{className:"px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-xs font-medium",children:["+",W," coins"]})]}),s.jsx("p",{className:"text-sm mb-4 text-base-muted",children:S.prompt}),s.jsx("div",{className:"grid grid-cols-2 gap-3",children:S.options.map((C,Y)=>{const de=Y===S.answerIndex,ge=U===Y,ve=U!==null;return s.jsx("button",{onClick:ke=>K(Y,ke),disabled:U!==null,className:`p-3 rounded-xl border-2 text-sm font-medium transition-all ${ve?de?"border-green-500 bg-green-500/20":ge?"border-red-500 bg-red-500/20":"border-base-border bg-white/5":"border-base-border bg-white/5 hover:bg-white/10"} ${U!==null?"cursor-not-allowed":"cursor-pointer"}`,children:C},Y)})})]})}),s.jsx("div",{className:"flip-card-back absolute inset-0",children:s.jsxs("div",{className:"rounded-3xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/30 p-6 h-full flex flex-col items-center justify-center",children:[s.jsx("div",{className:"text-6xl mb-4",style:{animation:"float 2s ease-in-out infinite"},children:"🎉"}),s.jsx("h3",{className:"text-2xl font-bold text-green-400 mb-2",children:"Awesome!"}),s.jsxs("p",{className:"text-sm text-base-muted text-center",children:["You've earned ",W," coins!"]}),s.jsx("p",{className:"text-xs text-base-muted/70 mt-2",children:"Come back tomorrow for more"})]})})]})}),s.jsxs("div",{className:"mb-6",children:[s.jsx("h3",{className:"text-lg font-bold mb-4",children:"Choose Your Adventure"}),s.jsx("div",{className:"grid grid-cols-3 gap-3",children:tm.map((C,Y)=>s.jsxs("button",{onClick:()=>I(C),className:`bg-gradient-to-br ${C.gradient} aspect-square rounded-2xl p-4 flex flex-col items-center justify-center gap-2 transform transition-all hover:scale-105 hover:shadow-lg`,children:[s.jsx("div",{className:"text-3xl",children:C.icon}),s.jsx("div",{className:"text-xs font-bold text-white text-center",children:C.name}),C.questions>0&&s.jsxs("div",{className:"text-[10px] bg-white/20 px-2 py-0.5 rounded-full",children:[C.questions," Qs"]})]},C.name))})]}),s.jsxs("button",{onClick:()=>re(!0),className:"w-full rounded-2xl bg-white/5 border border-base-border p-5 flex justify-between items-center hover:bg-white/10 transition-all",children:[s.jsxs("div",{className:"flex items-center gap-4",children:[s.jsx("div",{className:"w-12 h-12 bg-gradient-to-br from-green-400 to-teal-500 rounded-xl grid place-items-center text-2xl",children:"📚"}),s.jsxs("div",{className:"text-left",children:[s.jsx("div",{className:"font-medium",children:"Practice Mode"}),s.jsx("div",{className:"text-xs text-base-muted",children:"No timer • Learn at your pace"})]})]}),s.jsx("div",{className:"text-xl",children:"→"})]}),v&&j&&s.jsx("div",{className:"fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4",onClick:C=>{C.target===C.currentTarget&&p(!1)},children:s.jsxs("div",{className:"bg-base-card rounded-3xl p-6 w-full max-w-md border border-base-border",onClick:C=>C.stopPropagation(),children:[s.jsxs("div",{className:"flex justify-between items-center mb-4",children:[s.jsxs("h3",{className:"text-xl font-bold",children:[j.name," Quiz"]}),s.jsx("button",{onClick:()=>p(!1),className:"w-8 h-8 rounded-lg bg-white/5 border border-base-border grid place-items-center hover:bg-white/10 transition",children:"✕"})]}),s.jsxs("div",{className:"mb-4",children:[s.jsx("label",{className:"text-sm text-base-muted mb-2 block",children:"Difficulty"}),s.jsx("div",{className:"grid grid-cols-3 gap-2",children:["easy","medium","hard"].map(C=>s.jsx("button",{onClick:()=>E(C),className:`py-2 rounded-xl border ${y===C?"bg-brand-blue/30 border-brand-blue":"bg-white/5 border-base-border"}`,children:C.charAt(0).toUpperCase()+C.slice(1)},C))})]}),s.jsxs("div",{className:"mb-4",children:[s.jsx("label",{className:"text-sm text-base-muted mb-2 block",children:"Questions"}),s.jsx("div",{className:"grid grid-cols-4 gap-2",children:[5,10,20,30].map(C=>s.jsx("button",{onClick:()=>L(C),className:`py-2 rounded-xl border ${P===C?"bg-brand-blue/30 border-brand-blue":"bg-white/5 border-base-border"}`,children:C},C))})]}),s.jsxs("div",{className:"mb-6",children:[s.jsx("label",{className:"text-sm text-base-muted mb-2 block",children:"Timer (seconds per question)"}),s.jsx("input",{type:"number",value:N,onChange:C=>h(Number(C.target.value)||45),min:10,max:120,className:"w-full px-4 py-2 rounded-xl bg-white/5 border border-base-border"})]}),s.jsxs("div",{className:"flex gap-3",children:[s.jsx("button",{onClick:()=>p(!1),className:"flex-1 py-3 rounded-xl border border-base-border bg-white/5",children:"Cancel"}),s.jsx("button",{onClick:D,className:"flex-1 py-3 rounded-xl bg-gradient-to-r from-brand-blue to-brand-purple text-white font-medium",children:"Start Quiz"})]})]})}),B&&s.jsx("div",{className:"fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4",onClick:C=>{C.target===C.currentTarget&&re(!1)},children:s.jsxs("div",{className:"bg-base-card rounded-3xl p-6 w-full max-w-md border border-base-border max-h-[90vh] overflow-y-auto",onClick:C=>C.stopPropagation(),children:[s.jsxs("div",{className:"flex justify-between items-center mb-4",children:[s.jsx("h3",{className:"text-xl font-bold",children:"Practice Mode"}),s.jsx("button",{onClick:()=>re(!1),className:"w-8 h-8 rounded-lg bg-white/5 border border-base-border grid place-items-center hover:bg-white/10 transition",children:"✕"})]}),s.jsxs("div",{className:"mb-4",children:[s.jsx("label",{className:"text-sm text-base-muted mb-2 block",children:"Category"}),s.jsx("div",{className:"grid grid-cols-3 gap-2 max-h-[200px] overflow-y-auto",children:nd.map(C=>s.jsxs("button",{onClick:()=>ae(C.slug),className:`p-3 rounded-xl border flex flex-col items-center gap-1 ${ie===C.slug?"bg-brand-blue/30 border-brand-blue":"bg-white/5 border-base-border"}`,children:[s.jsx("div",{className:"text-xl",children:C.icon}),s.jsx("div",{className:"text-[10px] text-center",children:C.name})]},C.slug))})]}),s.jsxs("div",{className:"mb-4",children:[s.jsx("label",{className:"text-sm text-base-muted mb-2 block",children:"Difficulty"}),s.jsx("div",{className:"grid grid-cols-3 gap-2",children:["easy","medium","hard"].map(C=>s.jsx("button",{onClick:()=>M(C),className:`py-2 rounded-xl border ${pe===C?"bg-brand-blue/30 border-brand-blue":"bg-white/5 border-base-border"}`,children:C.charAt(0).toUpperCase()+C.slice(1)},C))})]}),s.jsxs("div",{className:"mb-6",children:[s.jsx("label",{className:"text-sm text-base-muted mb-2 block",children:"Questions"}),s.jsx("div",{className:"grid grid-cols-4 gap-2",children:[5,10,20,30].map(C=>s.jsx("button",{onClick:()=>ne(C),className:`py-2 rounded-xl border ${q===C?"bg-brand-blue/30 border-brand-blue":"bg-white/5 border-base-border"}`,children:C},C))})]}),s.jsxs("div",{className:"flex gap-3",children:[s.jsx("button",{onClick:()=>re(!1),className:"flex-1 py-3 rounded-xl border border-base-border bg-white/5",children:"Cancel"}),s.jsx("button",{onClick:X,className:"flex-1 py-3 rounded-xl bg-gradient-to-r from-brand-blue to-brand-purple text-white font-medium",children:"Start Practice"})]})]})}),k&&s.jsx("div",{className:"fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4",onClick:C=>{C.target===C.currentTarget&&b(!1)},children:s.jsxs("div",{className:"bg-base-card rounded-3xl p-6 w-full max-w-md border border-base-border",onClick:C=>C.stopPropagation(),children:[s.jsxs("div",{className:"flex justify-between items-center mb-4",children:[s.jsx("h3",{className:"text-xl font-bold",children:"More categories"}),s.jsx("button",{onClick:()=>b(!1),className:"w-8 h-8 rounded-lg bg-white/5 border border-base-border grid place-items-center hover:bg-white/10 transition",children:"✕"})]}),s.jsx("div",{className:"grid grid-cols-2 gap-3 mb-4",children:nm.map(C=>s.jsxs("button",{onClick:()=>{b(!1),R(C),p(!0)},className:`bg-gradient-to-br ${C.gradient} p-4 rounded-2xl flex flex-col items-center gap-2 hover:scale-105 transition-transform`,children:[s.jsx("div",{className:"text-3xl",children:C.icon}),s.jsx("div",{className:"text-sm font-bold text-white",children:C.name}),s.jsxs("div",{className:"text-xs text-white/80",children:[C.questions," questions"]})]},C.name))})]})}),x&&s.jsx("div",{className:"fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4",onClick:C=>{C.target===C.currentTarget&&w(!1)},children:s.jsxs("div",{className:"bg-base-card rounded-3xl p-6 w-full max-w-md border border-base-border relative overflow-hidden",onClick:C=>C.stopPropagation(),children:[s.jsx("div",{className:"absolute inset-0 opacity-10",children:s.jsx("div",{className:"magic-gradient h-full"})}),s.jsxs("div",{className:"relative",children:[s.jsxs("div",{className:"flex items-center justify-between mb-6",children:[s.jsxs("div",{className:"flex items-center gap-3",children:[s.jsx("div",{className:"coin-3d text-5xl",style:{animation:"coinRotate 2s linear infinite, glow 2s ease-in-out infinite"},children:"🪙"}),s.jsxs("div",{children:[s.jsx("h3",{className:"text-2xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent",children:"Your Treasure"}),s.jsxs("p",{className:"text-3xl font-bold text-white mt-1",children:[c," Coins"]})]})]}),s.jsx("button",{onClick:()=>w(!1),className:"w-8 h-8 rounded-lg bg-white/5 border border-base-border grid place-items-center hover:bg-white/10 transition",children:"✕"})]}),s.jsxs("div",{className:"mb-6",children:[s.jsx("h4",{className:"text-sm font-medium text-base-muted mb-3",children:"Ways to Earn"}),s.jsxs("div",{className:"space-y-3",children:[s.jsx("div",{className:"p-4 rounded-xl bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 hover:scale-[1.02] transition-transform",children:s.jsxs("div",{className:"flex items-center justify-between",children:[s.jsxs("div",{children:[s.jsxs("div",{className:"font-medium flex items-center gap-2",children:[s.jsx("span",{className:"text-2xl",children:"✅"}),"Complete Quizzes"]}),s.jsx("div",{className:"text-xs text-base-muted mt-1",children:"+5 coins per correct answer"})]}),s.jsx("div",{className:"text-green-400 font-bold",children:"+5"})]})}),s.jsx("div",{className:"p-4 rounded-xl bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 hover:scale-[1.02] transition-transform",children:s.jsxs("div",{className:"flex items-center justify-between",children:[s.jsxs("div",{children:[s.jsxs("div",{className:"font-medium flex items-center gap-2",children:[s.jsx("span",{className:"text-2xl",children:"🎯"}),"Daily Challenge"]}),s.jsx("div",{className:"text-xs text-base-muted mt-1",children:"Complete daily for bonus"})]}),s.jsx("div",{className:"text-blue-400 font-bold",children:"+5"})]})}),s.jsx("div",{className:"p-4 rounded-xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 hover:scale-[1.02] transition-transform",children:s.jsxs("div",{className:"flex items-center justify-between",children:[s.jsxs("div",{children:[s.jsxs("div",{className:"font-medium flex items-center gap-2",children:[s.jsx("span",{className:"text-2xl",children:"🎰"}),"Spin & Play"]}),s.jsx("div",{className:"text-xs text-base-muted mt-1",children:"Test your luck!"})]}),s.jsx("div",{className:"text-purple-400 font-bold",children:"+50"})]})}),s.jsx("div",{className:"p-4 rounded-xl bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/20 hover:scale-[1.02] transition-transform",children:s.jsxs("div",{className:"flex items-center justify-between",children:[s.jsxs("div",{children:[s.jsxs("div",{className:"font-medium flex items-center gap-2",children:[s.jsx("span",{className:"text-2xl",children:"🏆"}),"Achievements"]}),s.jsx("div",{className:"text-xs text-base-muted mt-1",children:"Unlock special rewards"})]}),s.jsx("div",{className:"text-orange-400 font-bold",children:"+???"})]})})]})]}),s.jsxs("div",{className:"mb-6",children:[s.jsxs("div",{className:"flex justify-between text-xs text-base-muted mb-2",children:[s.jsx("span",{children:"Next reward"}),s.jsxs("span",{children:[100-c%100," coins to go"]})]}),s.jsx("div",{className:"h-2 bg-white/10 rounded-full overflow-hidden",children:s.jsx("div",{className:"h-full bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full transition-all",style:{width:`${c%100}%`}})})]}),s.jsx("button",{onClick:()=>{w(!1),e("/play")},className:"w-full py-3 rounded-xl bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-bold hover:scale-[1.02] transition-transform shadow-lg",style:{boxShadow:"0 10px 30px rgba(251, 191, 36, 0.3)"},children:"Start Earning Now! 🚀"})]})]})})]})]})}var Ui={linear:function(e,t,n,r){var i=n-t;return i*e/r+t},easeInQuad:function(e,t,n,r){var i=n-t;return i*(e/=r)*e+t},easeOutQuad:function(e,t,n,r){var i=n-t;return-i*(e/=r)*(e-2)+t},easeInOutQuad:function(e,t,n,r){var i=n-t;return(e/=r/2)<1?i/2*e*e+t:-i/2*(--e*(e-2)-1)+t},easeInCubic:function(e,t,n,r){var i=n-t;return i*(e/=r)*e*e+t},easeOutCubic:function(e,t,n,r){var i=n-t;return i*((e=e/r-1)*e*e+1)+t},easeInOutCubic:function(e,t,n,r){var i=n-t;return(e/=r/2)<1?i/2*e*e*e+t:i/2*((e-=2)*e*e+2)+t},easeInQuart:function(e,t,n,r){var i=n-t;return i*(e/=r)*e*e*e+t},easeOutQuart:function(e,t,n,r){var i=n-t;return-i*((e=e/r-1)*e*e*e-1)+t},easeInOutQuart:function(e,t,n,r){var i=n-t;return(e/=r/2)<1?i/2*e*e*e*e+t:-i/2*((e-=2)*e*e*e-2)+t},easeInQuint:function(e,t,n,r){var i=n-t;return i*(e/=r)*e*e*e*e+t},easeOutQuint:function(e,t,n,r){var i=n-t;return i*((e=e/r-1)*e*e*e*e+1)+t},easeInOutQuint:function(e,t,n,r){var i=n-t;return(e/=r/2)<1?i/2*e*e*e*e*e+t:i/2*((e-=2)*e*e*e*e+2)+t},easeInSine:function(e,t,n,r){var i=n-t;return-i*Math.cos(e/r*(Math.PI/2))+i+t},easeOutSine:function(e,t,n,r){var i=n-t;return i*Math.sin(e/r*(Math.PI/2))+t},easeInOutSine:function(e,t,n,r){var i=n-t;return-i/2*(Math.cos(Math.PI*e/r)-1)+t},easeInExpo:function(e,t,n,r){var i=n-t;return e==0?t:i*Math.pow(2,10*(e/r-1))+t},easeOutExpo:function(e,t,n,r){var i=n-t;return e==r?t+i:i*(-Math.pow(2,-10*e/r)+1)+t},easeInOutExpo:function(e,t,n,r){var i=n-t;return e===0?t:e===r?t+i:(e/=r/2)<1?i/2*Math.pow(2,10*(e-1))+t:i/2*(-Math.pow(2,-10*--e)+2)+t},easeInCirc:function(e,t,n,r){var i=n-t;return-i*(Math.sqrt(1-(e/=r)*e)-1)+t},easeOutCirc:function(e,t,n,r){var i=n-t;return i*Math.sqrt(1-(e=e/r-1)*e)+t},easeInOutCirc:function(e,t,n,r){var i=n-t;return(e/=r/2)<1?-i/2*(Math.sqrt(1-e*e)-1)+t:i/2*(Math.sqrt(1-(e-=2)*e)+1)+t},easeInElastic:function(e,t,n,r){var i=n-t,o,a,l;return l=1.70158,a=0,o=i,e===0?t:(e/=r)===1?t+i:(a||(a=r*.3),o<Math.abs(i)?(o=i,l=a/4):l=a/(2*Math.PI)*Math.asin(i/o),-(o*Math.pow(2,10*(e-=1))*Math.sin((e*r-l)*(2*Math.PI)/a))+t)},easeOutElastic:function(e,t,n,r){var i=n-t,o,a,l;return l=1.70158,a=0,o=i,e===0?t:(e/=r)===1?t+i:(a||(a=r*.3),o<Math.abs(i)?(o=i,l=a/4):l=a/(2*Math.PI)*Math.asin(i/o),o*Math.pow(2,-10*e)*Math.sin((e*r-l)*(2*Math.PI)/a)+i+t)},easeInOutElastic:function(e,t,n,r){var i=n-t,o,a,l;return l=1.70158,a=0,o=i,e===0?t:(e/=r/2)===2?t+i:(a||(a=r*(.3*1.5)),o<Math.abs(i)?(o=i,l=a/4):l=a/(2*Math.PI)*Math.asin(i/o),e<1?-.5*(o*Math.pow(2,10*(e-=1))*Math.sin((e*r-l)*(2*Math.PI)/a))+t:o*Math.pow(2,-10*(e-=1))*Math.sin((e*r-l)*(2*Math.PI)/a)*.5+i+t)},easeInBack:function(e,t,n,r,i){var o=n-t;return i===void 0&&(i=1.70158),o*(e/=r)*e*((i+1)*e-i)+t},easeOutBack:function(e,t,n,r,i){var o=n-t;return i===void 0&&(i=1.70158),o*((e=e/r-1)*e*((i+1)*e+i)+1)+t},easeInOutBack:function(e,t,n,r,i){var o=n-t;return i===void 0&&(i=1.70158),(e/=r/2)<1?o/2*(e*e*(((i*=1.525)+1)*e-i))+t:o/2*((e-=2)*e*(((i*=1.525)+1)*e+i)+2)+t},easeInBounce:function(e,t,n,r){var i=n-t,o;return o=Ui.easeOutBounce(r-e,0,i,r),i-o+t},easeOutBounce:function(e,t,n,r){var i=n-t;return(e/=r)<1/2.75?i*(7.5625*e*e)+t:e<2/2.75?i*(7.5625*(e-=1.5/2.75)*e+.75)+t:e<2.5/2.75?i*(7.5625*(e-=2.25/2.75)*e+.9375)+t:i*(7.5625*(e-=2.625/2.75)*e+.984375)+t},easeInOutBounce:function(e,t,n,r){var i=n-t,o;return e<r/2?(o=Ui.easeInBounce(e*2,0,i,r),o*.5+t):(o=Ui.easeOutBounce(e*2-r,0,i,r),o*.5+i*.5+t)}},Fg=Ui;function Mg(e){return e*Math.PI/180}function jt(e,t){return e+Math.random()*(t-e)}function Dg(e,t){return Math.floor(e+Math.random()*(t-e+1))}var Cs;(function(e){e[e.Circle=0]="Circle",e[e.Square=1]="Square",e[e.Strip=2]="Strip"})(Cs||(Cs={}));var Pn;(function(e){e[e.Positive=1]="Positive",e[e.Negative=-1]="Negative"})(Pn||(Pn={}));const Og=1e3/60;class Ag{constructor(t,n,r,i){this.getOptions=n;const{colors:o,initialVelocityX:a,initialVelocityY:l}=this.getOptions();this.context=t,this.x=r,this.y=i,this.w=jt(5,20),this.h=jt(5,20),this.radius=jt(5,10),this.vx=typeof a=="number"?jt(-a,a):jt(a.min,a.max),this.vy=typeof l=="number"?jt(-l,0):jt(l.min,l.max),this.shape=Dg(0,2),this.angle=Mg(jt(0,360)),this.angularSpin=jt(-.2,.2),this.color=o[Math.floor(Math.random()*o.length)],this.rotateY=jt(0,1),this.rotationDirection=jt(0,1)?Pn.Positive:Pn.Negative}update(t){const{gravity:n,wind:r,friction:i,opacity:o,drawShape:a}=this.getOptions(),l=t/Og;this.x+=this.vx*l,this.y+=this.vy*l,this.vy+=n*l,this.vx+=r*l,this.vx*=i**l,this.vy*=i**l,this.rotateY>=1&&this.rotationDirection===Pn.Positive?this.rotationDirection=Pn.Negative:this.rotateY<=-1&&this.rotationDirection===Pn.Negative&&(this.rotationDirection=Pn.Positive);const c=.1*this.rotationDirection*l;if(this.rotateY+=c,this.angle+=this.angularSpin,this.context.save(),this.context.translate(this.x,this.y),this.context.rotate(this.angle),this.context.scale(1,this.rotateY),this.context.rotate(this.angle),this.context.beginPath(),this.context.fillStyle=this.color,this.context.strokeStyle=this.color,this.context.globalAlpha=o,this.context.lineCap="round",this.context.lineWidth=2,a&&typeof a=="function")a.call(this,this.context);else switch(this.shape){case Cs.Circle:{this.context.beginPath(),this.context.arc(0,0,this.radius,0,2*Math.PI),this.context.fill();break}case Cs.Square:{this.context.fillRect(-this.w/2,-this.h/2,this.w,this.h);break}case Cs.Strip:{this.context.fillRect(-this.w/6,-this.h/2,this.w/3,this.h);break}}this.context.closePath(),this.context.restore()}}class $g{constructor(t,n){this.x=0,this.y=0,this.w=0,this.h=0,this.lastNumberOfPieces=0,this.tweenProgress=0,this.tweenFrom=0,this.particles=[],this.particlesGenerated=0,this.removeParticleAt=i=>{this.particles.splice(i,1)},this.getParticle=()=>{const i=jt(this.x,this.w+this.x),o=jt(this.y,this.h+this.y);return new Ag(this.context,this.getOptions,i,o)},this.animate=i=>{const{canvas:o,context:a,particlesGenerated:l,lastNumberOfPieces:c}=this,{run:u,recycle:g,numberOfPieces:f,debug:m,tweenFunction:k,tweenDuration:b}=this.getOptions();if(!u)return!1;const j=this.particles.length,R=g?j:l;if(R<f){c!==f&&(this.tweenProgress=0,this.tweenFrom=R,this.lastNumberOfPieces=f),this.tweenProgress=Math.min(b,Math.max(0,this.tweenProgress+i));const v=k(this.tweenProgress,this.tweenFrom,f,b),p=Math.round(v-R);for(let y=0;y<p;y++)this.particles.push(this.getParticle());this.particlesGenerated+=p}m&&(a.font="12px sans-serif",a.fillStyle="#333",a.textAlign="right",a.fillText(`Particles: ${j}`,o.width-10,o.height-20));for(let v=this.particles.length-1;v>=0;v--){const p=this.particles[v];p.update(i),(p.y>o.height||p.y<-100||p.x>o.width+100||p.x<-100)&&(g&&R<=f?this.particles[v]=this.getParticle():this.removeParticleAt(v))}return j>0||R<f},this.canvas=t;const r=this.canvas.getContext("2d");if(!r)throw new Error("Could not get canvas context");this.context=r,this.getOptions=n}}const bc={width:typeof window<"u"?window.innerWidth:300,height:typeof window<"u"?window.innerHeight:200,numberOfPieces:200,friction:.99,wind:0,gravity:.1,initialVelocityX:4,initialVelocityY:10,colors:["#f44336","#e91e63","#9c27b0","#673ab7","#3f51b5","#2196f3","#03a9f4","#00bcd4","#009688","#4CAF50","#8BC34A","#CDDC39","#FFEB3B","#FFC107","#FF9800","#FF5722","#795548"],opacity:1,debug:!1,tweenFunction:Fg.easeInOutQuad,tweenDuration:5e3,recycle:!0,run:!0};class Bg{constructor(t,n){this.lastFrameTime=0,this.setOptionsWithDefaults=i=>{const o={confettiSource:{x:0,y:0,w:this.canvas.width,h:0}};this._options={...o,...bc,...i},Object.assign(this,i.confettiSource)},this.update=(i=0)=>{const{options:{run:o,onConfettiComplete:a,frameRate:l},canvas:c,context:u}=this,g=Math.min(i-this.lastFrameTime,50);if(l&&g<1e3/l){this.rafId=requestAnimationFrame(this.update);return}this.lastFrameTime=i-(l?g%l:0),o&&(u.fillStyle="white",u.clearRect(0,0,c.width,c.height)),this.generator.animate(g)?this.rafId=requestAnimationFrame(this.update):(a&&typeof a=="function"&&this.generator.particlesGenerated>0&&a.call(this,this),this._options.run=!1)},this.reset=()=>{this.generator&&this.generator.particlesGenerated>0&&(this.generator.particlesGenerated=0,this.generator.particles=[],this.generator.lastNumberOfPieces=0)},this.stop=()=>{this.options={run:!1},this.rafId&&(cancelAnimationFrame(this.rafId),this.rafId=void 0)},this.canvas=t;const r=this.canvas.getContext("2d");if(!r)throw new Error("Could not get canvas context");this.context=r,this.generator=new $g(this.canvas,()=>this.options),this.options=n,this.update()}get options(){return this._options}set options(t){var i,o;const n=(i=this._options)==null?void 0:i.run,r=(o=this._options)==null?void 0:o.recycle;this.setOptionsWithDefaults(t),this.generator&&(Object.assign(this.generator,this.options.confettiSource),typeof t.recycle=="boolean"&&t.recycle&&r===!1&&(this.generator.lastNumberOfPieces=this.generator.particles.length)),typeof t.run=="boolean"&&t.run&&n===!1&&this.update()}}const Ug=xt.createRef();class wc extends xt.Component{constructor(t){super(t),this.canvas=xt.createRef(),this.canvas=t.canvasRef||Ug}componentDidMount(){if(this.canvas.current){const t=fa(this.props)[0];this.confetti=new Bg(this.canvas.current,t)}}componentDidUpdate(){const t=fa(this.props)[0];this.confetti&&(this.confetti.options=t)}componentWillUnmount(){this.confetti&&this.confetti.stop(),this.confetti=void 0}render(){const[t,n]=fa(this.props),r={zIndex:2,position:"absolute",pointerEvents:"none",top:0,left:0,bottom:0,right:0,...n.style};return s.jsx("canvas",{width:t.width,height:t.height,ref:this.canvas,...n,style:r})}}wc.defaultProps={...bc};wc.displayName="ReactConfetti";function fa(e){const t={},n={},r={},i=[...Object.keys(bc),"confettiSource","drawShape","onConfettiComplete","frameRate"],o=["canvasRef"];for(const a in e){const l=e[a];i.includes(a)?t[a]=l:o.includes(a)?o[a]=l:r[a]=l}return[t,r,n]}const rm=xt.forwardRef((e,t)=>s.jsx(wc,{canvasRef:t,...e})),Wg=[{name:"General Knowledge",questions:50,icon:"🧠",color:"#7C3AED"},{name:"Artificial Intelligence",questions:28,icon:"🤖",color:"#10B981"},{name:"Fun facts",questions:30,icon:"🎉",color:"#EF4444"},{name:"Science",questions:45,icon:"🧪",color:"#F59E0B"},{name:"History",questions:42,icon:"🏺",color:"#2563EB"},{name:"Geography",questions:38,icon:"🗺️",color:"#FACC15"}],qt=Wg.slice(0,6),sn=360/qt.length,sm={"general-knowledge":"TINA","artificial-intelligence":"ALBERT","fun-facts":"BONZO",science:"POP",history:"TITO",geography:"HECTOR"},en={COINS:"qp_coins",XP:"qp_xp",LEVEL:"qp_level",OWNED_CHARACTERS:"owned_characters",SOUND:"play_sound_on"},Sn={FULL_TURNS:6,DURATION:2800,OVERSHOOT:12,SETTLE_DURATION:350},tn={get:(e,t=null)=>{try{const n=localStorage.getItem(e);return n?JSON.parse(n):t}catch{return t}},set:(e,t)=>{try{localStorage.setItem(e,JSON.stringify(t))}catch{}}},ar=e=>e.toLowerCase().replace(/[^\w\s-]/g,"").replace(/\s+/g,"-"),sd=e=>(e%360+360)%360,jc=e=>{try{navigator.vibrate&&navigator.vibrate(e)}catch{}},Dr=(e,t=.7)=>{try{const n=new Audio(e);n.volume=t,n.play()}catch{}};function id({onModeSelect:e,onNavigateHome:t}){return s.jsx("div",{className:"fixed inset-0 bg-base-bg text-base-text overflow-hidden",children:s.jsxs("div",{className:"h-full overflow-y-auto mx-auto max-w-md px-4 pt-[calc(env(safe-area-inset-top)+5rem)] pb-[calc(env(safe-area-inset-bottom)+5.25rem)]",children:[s.jsxs("header",{className:"flex items-center mb-8",children:[s.jsx("button",{onClick:t,className:"h-10 w-10 rounded-full border border-base-border grid place-items-center bg-white/5 hover:bg-white/10 transition",children:"←"}),s.jsx("h1",{className:"flex-1 text-center text-xl font-bold mb-12",children:"Choose a quiz mode"})]}),s.jsxs("div",{className:"space-y-8",children:[s.jsxs("button",{onClick:()=>e("classic"),className:"w-full relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-400 to-blue-500 p-8 text-left shadow-lg hover:shadow-xl transition-all active:scale-[0.98]",children:[s.jsx("div",{className:"absolute top-0 right-0 w-32 h-32 opacity-30",children:s.jsxs("svg",{viewBox:"0 0 100 100",className:"w-full h-full animate-spin",style:{animationDuration:"20s"},children:[qt.map((n,r)=>{const i=r*sn,o=i+sn,a=sn>180?1:0,l=Math.PI*i/180,c=Math.PI*o/180,u=50+40*Math.cos(l),g=50-40*Math.sin(l),f=50+40*Math.cos(c),m=50-40*Math.sin(c);return s.jsx("path",{d:`M50,50 L${u},${g} A40,40 0 ${a} 0 ${f},${m} Z`,fill:n.color,stroke:"white",strokeWidth:"0.5"},r)}),s.jsx("circle",{cx:"50",cy:"50",r:"8",fill:"white"})]})}),s.jsx("div",{className:"absolute top-4 left-8 text-3xl opacity-60",children:"🏆"}),s.jsx("div",{className:"absolute top-12 right-16 text-xl opacity-40",children:"⭐"}),s.jsx("div",{className:"absolute bottom-6 left-6 text-2xl opacity-50",children:"🎲"}),s.jsx("div",{className:"absolute bottom-4 right-12 text-3xl opacity-60",children:"🍪"}),s.jsx("div",{className:"absolute top-1/2 left-4 text-lg opacity-40",children:"🥨"}),s.jsx("h2",{className:"text-5xl font-black text-white mb-10 relative z-10 ",style:{transform:"translateX(-20px)"},children:"CLASSIC"})]}),s.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[s.jsxs("button",{disabled:!0,className:"aspect-square rounded-3xl bg-gradient-to-br from-yellow-400 to-orange-400 p-4 text-left opacity-60",children:[s.jsx("div",{className:"text-2xl mb-2",children:"💀"}),s.jsx("h4",{className:"text-lg font-black text-white",children:"SURVIVAL"})]}),s.jsxs("button",{disabled:!0,className:"aspect-square rounded-3xl bg-gradient-to-br from-red-400 to-pink-500 p-4 text-left opacity-60",children:[s.jsx("div",{className:"text-2xl mb-2",children:"💰"}),s.jsx("h4",{className:"text-lg font-black text-white",children:"TREASURE MINE"})]}),s.jsxs("button",{disabled:!0,className:"aspect-square rounded-3xl bg-gradient-to-br from-pink-500 to-purple-500 p-4 text-left opacity-60",children:[s.jsx("div",{className:"text-2xl mb-2",children:"⚔️"}),s.jsx("h4",{className:"text-lg font-black text-white",children:"SURVIVAL ARENA"})]}),s.jsxs("button",{disabled:!0,className:"aspect-square rounded-3xl bg-gradient-to-br from-blue-400 to-cyan-400 p-4 text-left opacity-60",children:[s.jsx("div",{className:"text-2xl mb-2",children:"📱"}),s.jsx("h4",{className:"text-lg font-black text-white",children:"TRIVIA VIDEO"})]})]})]})]})})}function qg({run:e,coins:t,xp:n,level:r,ownedCharacters:i,onSpin:o,onBack:a,spinning:l,angle:c,transition:u,result:g,showCallout:f,glowColor:m,soundOn:k,setSoundOn:b,showSparkle:j,pulseIdx:R,nextProgressIdx:v,pendingProgressIdx:p,coinBurstTick:y,lastAnswerWasCorrect:E}){const P=100*r*(r-1),[L,N]=d.useState(!1),h=d.useRef(0),x=d.useRef(null),w=d.useRef(null),[S,_]=d.useState({dx:110,dy:-260});d.useEffect(()=>{if(p==null)return;N(!1);const J=setTimeout(()=>N(!0),30);return()=>clearTimeout(J)},[p]);const[U,V]=d.useState(!1);return d.useEffect(()=>{var Z,H,z,T;if(!y||!E||y===h.current)return;h.current=y;try{const $=(H=(Z=w==null?void 0:w.current)==null?void 0:Z.getBoundingClientRect)==null?void 0:H.call(Z),A=(T=(z=x==null?void 0:x.current)==null?void 0:z.getBoundingClientRect)==null?void 0:T.call(z);if($&&A){const W=$.left+$.width/2,B=$.top+$.height/2,re=A.left+A.width/2,ie=A.top+A.height/2;_({dx:re-W,dy:ie-B})}}catch{}k&&Dr("/sounds/coin.mp3",.7),V(!0);const J=setTimeout(()=>V(!1),700);return()=>clearTimeout(J)},[y,k]),s.jsx("div",{className:"fixed inset-0 bg-base-bg text-base-text overflow-hidden",children:s.jsxs("div",{className:"h-full overflow-y-auto mx-auto max-w-md px-5 pt-[calc(env(safe-area-inset-top)+3rem)] pb-[calc(env(safe-area-inset-bottom)+5.25rem)]",children:[s.jsxs("header",{className:"flex items-center justify-between mb-8",children:[s.jsx("button",{onClick:a,className:"h-10 w-10 rounded-full border border-base-border grid place-items-center bg-white/5 hover:bg-white/10 transition translate-y-[4px]",children:"←"}),s.jsxs("div",{className:"flex items-center gap-3",children:[s.jsxs("button",{className:"px-3 py-1 rounded-2xl bg-white/5 border border-base-border text-left translate-y-[4px]",children:[s.jsxs("div",{className:"text-[11px]",children:["Lvl ",r," • ",n,"/",P]}),s.jsx("div",{className:"mt-1 h-1 w-full bg-white/10 rounded",children:s.jsx("div",{className:"h-1 bg-brand-blue rounded",style:{width:`${Math.min(n/P,1)*100}%`}})})]}),s.jsxs("button",{ref:x,className:"px-3 py-1 rounded-2xl bg-white/5 border border-base-border translate-y-[4px]",children:["🪙 ",t]})]}),s.jsx("button",{onClick:()=>b(!k),className:"h-10 w-10 rounded-full border border-base-border grid place-items-center bg-white/5 hover:bg-white/10 transition translate-y-[4px]",children:s.jsx("span",{className:"text-lg",children:k?"🔊":"🔇"})})]}),i.length>0&&s.jsx("div",{className:"flex justify-center mb-6",children:s.jsx("div",{className:"flex gap-2 px-4 py-2 bg-white/10 rounded-2xl backdrop-blur border border-base-border",children:i.map(J=>{const Z=qt.find(z=>ar(z.name)===J),H=sm[J];return s.jsxs("div",{className:"flex flex-col items-center",children:[s.jsx("div",{className:"w-8 h-8 rounded-full bg-white/20 flex items-center justify-center border border-white/30",children:s.jsx("span",{className:"text-sm",children:Z==null?void 0:Z.icon})}),s.jsx("span",{className:"text-[10px] text-base-muted mt-1",children:H})]},J)})})}),s.jsx("div",{className:"flex justify-center mt-12 sm:mt-16 mb-6",children:s.jsxs("div",{className:"w-80 max-w-full",children:[s.jsx("style",{children:`
              @keyframes qp_sweep { from { transform: translateX(0); } to { transform: translateX(100%); } }
            `}),s.jsx("div",{className:"relative grid grid-cols-3 gap-1 h-3 rounded-full overflow-hidden bg-white/10 border border-white/15",children:[0,1,2].map(J=>{const Z=["#FF9800","#FFC107","#cadd75ff"],H=!!e.progress[J];return s.jsxs("div",{className:"relative h-full bg-white/10",children:[s.jsx("div",{className:"absolute inset-y-0 left-0 rounded-[6px]",style:{width:H?J===p?L?"100%":"0%":v===J&&p==null?"0%":"100%":"0%",backgroundColor:Z[J],transition:J===p?"width 1200ms ease-out":"none"}}),R===J&&s.jsx("span",{className:"absolute inset-y-0 left-0 w-full overflow-hidden pointer-events-none",children:s.jsx("span",{className:"absolute inset-y-0 left-0 w-1 rounded bg-white/80",style:{animation:"qp_sweep 1200ms ease-out forwards"}})}),j===J&&s.jsx("span",{className:"absolute right-[-2px] top-1/2 -translate-y-1/2 text-xs select-none",children:"✨"})]},J)})},e.qIndex)]})}),s.jsx("section",{className:"flex flex-col items-center mt-28 sm:mt-32 mb-10",children:s.jsxs("div",{ref:w,className:"relative w-96 h-96 rounded-full select-none",children:[m&&s.jsx("div",{className:"pointer-events-none absolute -inset-4 rounded-full",style:{boxShadow:`0 0 0 8px ${m}40, 0 0 40px 12px ${m}60`}}),s.jsx("div",{className:"absolute inset-0 rounded-full border-4 border-white/20 shadow-2xl overflow-hidden will-change-transform bg-base-card",style:{transform:`rotate(${c}deg)`,transition:u},children:s.jsxs("svg",{width:"100%",height:"100%",viewBox:"0 0 100 100",className:"block",children:[qt.map((J,Z)=>{const H=Z*sn,z=H+sn,T=sn>180?1:0,$=Math.PI*H/180,A=Math.PI*z/180,W=50+45*Math.cos($),B=50-45*Math.sin($),re=50+45*Math.cos(A),ie=50-45*Math.sin(A),ae=H+sn/2,pe=28,M=50+pe*Math.cos(ae*Math.PI/180),q=50-pe*Math.sin(ae*Math.PI/180);return s.jsxs("g",{children:[s.jsx("path",{d:`M50,50 L${W},${B} A45,45 0 ${T} 0 ${re},${ie} Z`,fill:J.color,stroke:"rgba(255,255,255,0.3)",strokeWidth:"0.5"}),s.jsx("text",{x:M,y:q,fill:"white",fontSize:"8",dominantBaseline:"middle",textAnchor:"middle",className:"font-bold",children:J.icon})]},Z)}),s.jsx("circle",{cx:"50",cy:"50",r:"12",fill:"white",stroke:"#ddd",strokeWidth:"1"})]})}),s.jsx("button",{onClick:o,disabled:l,className:`absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                      w-24 h-24 rounded-full bg-white text-black font-black text-lg shadow-lg transition-all ${l?"opacity-60 cursor-not-allowed scale-95":"hover:scale-105 active:scale-95"}`,children:"SPIN"}),s.jsx("div",{className:"absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-2 z-20",children:s.jsx("div",{className:"w-6 h-8 bg-white rounded-lg shadow-md flex items-start justify-center pt-1",children:s.jsx("div",{className:"w-0 h-0 border-l-[6px] border-r-[6px] border-b-[8px] border-l-transparent border-r-transparent border-b-gray-600"})})}),f&&g&&s.jsx("div",{className:"absolute left-1/2 -translate-x-1/2 -top-16 z-30",children:s.jsxs("div",{className:"px-4 py-2 rounded-2xl bg-base-card border border-base-border shadow-lg font-semibold",children:[s.jsx("span",{className:"mr-2",children:g.cat.icon}),g.cat.name]})}),U&&s.jsxs(s.Fragment,{children:[s.jsx("style",{children:`
                    @keyframes coinFly {
                      0%   { transform: translate(-50%, -50%) scale(0.9); opacity: 1; }
                      100% { transform: translate(var(--coin-dx), var(--coin-dy)) scale(0.4); opacity: 0; }
                    }
                `}),[0,1,2].map(J=>s.jsx("div",{className:"pointer-events-none absolute z-30 top-1/2 left-1/2",style:{animation:`coinFly 600ms ease-out ${J*80}ms forwards`,"--coin-dx":`${S.dx}px`,"--coin-dy":`${S.dy}px`},children:s.jsx("div",{className:"w-6 h-6 rounded-full grid place-items-center bg-yellow-400 text-black font-bold",children:"🪙"})},J))]})]})}),s.jsx("div",{className:"text-center",children:s.jsx("button",{disabled:!0,className:"text-base-muted underline opacity-60 cursor-not-allowed text-sm",children:"Party Spin (pass & play)"})})]})})}function od({category:e,onComplete:t,isBonus:n=!1,soundOn:r=!0}){return d.useEffect(()=>{r&&Dr("/sounds/flush.mp3",.8);const i=setTimeout(t,1e3);return jc([50]),()=>clearTimeout(i)},[t,r]),n?s.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-purple-500 to-blue-600 flex flex-col items-center justify-center text-white",children:[s.jsx("h2",{className:"text-5xl font-black mb-8",children:"Bonus Question"}),s.jsx("div",{className:"w-32 h-32 bg-white/20 rounded-full flex items-center justify-center animate-pulse",children:s.jsx("span",{className:"text-6xl",children:"⭐"})})]}):s.jsx("div",{className:"min-h-screen bg-base-bg text-white flex items-center justify-center",children:s.jsxs("div",{className:"relative w-96 h-96 rounded-full flex items-center justify-center",style:{backgroundColor:e.color},children:[s.jsxs("div",{className:"absolute inset-0 opacity-10 pointer-events-none",children:[s.jsx("div",{className:"absolute top-8 left-10 w-20 h-20 bg-white/20 rounded-full"}),s.jsx("div",{className:"absolute bottom-10 right-12 w-24 h-24 bg-white/20 rounded-full"})]}),s.jsxs("div",{className:"relative z-10 text-center",children:[s.jsx("div",{className:"text-4xl font-black mb-2",children:e.name}),s.jsx("div",{className:"w-20 h-20 bg-white/20 rounded-full grid place-items-center mx-auto",children:s.jsx("span",{className:"text-4xl",children:e.icon})})]})]})})}function Hg({onDone:e}){return d.useEffect(()=>{const t=setTimeout(e,1e3);return()=>clearTimeout(t)},[e]),s.jsx("div",{className:"min-h-screen flex items-center justify-center bg-green-600 text-white",children:s.jsx("h2",{className:"text-2xl font-black",children:"Whohoo!! 3 correct in a row 🎉"})})}function ad({question:e,category:t,onAnswer:n,run:r,timeLeft:i,usedLifelines:o,onUseLifeline:a,eliminatedOptions:l,audienceData:c,onBack:u,timeUp:g,onTimeUpBackToWheel:f,soundOn:m}){const[k,b]=d.useState(null),[j,R]=d.useState(!1),[v,p]=d.useState(!1),y=d.useRef(null),E=d.useRef(null),[P,L]=d.useState(null);d.useEffect(()=>{if(!j||!y.current)return;const x=y.current.getBoundingClientRect();L({x:x.left,y:x.top-300,w:x.width,h:8})},[j]);const N=x=>{if(j)return;b(x),R(!0);const w=x===e.correctIndex;jc(w?[50,30,50]:[200]),m&&Dr(w?"/sounds/correct.mp3":"/sounds/wrong.mp3",.7),setTimeout(()=>{n(w,null)},1500)},h=k===e.correctIndex;return s.jsx("div",{className:"fixed inset-0 bg-gradient-to-br from-gray-900 to-black text-white overflow-hidden",children:s.jsxs("div",{ref:E,className:"relative h-full overflow-y-auto px-5 pt-16 pb-[calc(env(safe-area-inset-bottom)+5.25rem)]",children:[s.jsx("div",{className:"mb-4",children:s.jsx("button",{onClick:()=>p(!0),className:"h-10 w-10 rounded-full border border-base-border grid place-items-center bg-white/5 hover:bg-white/10 transition",children:"←"})}),s.jsxs("div",{className:"text-center mb-6",children:[s.jsx("div",{className:`text-4xl font-black mb-2 ${i<=10?"text-red-400 animate-pulse":"text-white"}`,children:i}),s.jsx("div",{className:"w-full bg-white/20 rounded-full h-2",children:s.jsx("div",{className:`h-full rounded-full transition-all duration-1000 ${i<=10?"bg-red-400":"bg-blue-400"}`,style:{width:`${i/30*100}%`}})})]}),s.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[s.jsx("div",{className:"w-12 h-12 rounded-full flex items-center justify-center text-2xl",style:{backgroundColor:t.color},children:t.icon}),s.jsxs("div",{children:[s.jsx("div",{className:"text-lg font-bold",children:t.name}),s.jsxs("div",{className:"text-sm text-gray-400",children:["Question ",r.qIndex+1,"/3"]})]})]}),s.jsx("h2",{ref:y,className:"text-xl font-semibold mb-6 leading-relaxed",children:e.prompt}),s.jsx("div",{className:"space-y-3 mb-6",children:e.options.map((x,w)=>{const S=l.includes(w),_=k===w,U=w===e.correctIndex;let V="bg-white/10 border-white/20",J="opacity-100";return S?J="opacity-30":j&&_?V=U?"bg-green-500/30 border-green-400":"bg-red-500/30 border-red-400":j&&U?V="bg-green-500/30 border-green-400":_&&(V="bg-white/20 border-white/40"),s.jsx("button",{onClick:()=>N(w),disabled:j||S,className:`w-full p-4 rounded-xl border-2 text-left transition-all duration-300 ${V} ${J} ${!j&&!S?"hover:bg-white/15 active:scale-98":""}`,children:s.jsxs("div",{className:"flex items-center gap-3",children:[s.jsx("div",{className:"w-8 h-8 rounded-full bg-white/20 flex items-center justify-center font-bold text-sm",children:String.fromCharCode(65+w)}),s.jsx("span",{className:"font-medium flex-1",children:x}),c&&s.jsxs("span",{className:"text-xs text-base-muted",children:[Math.round(c[w]),"%"]})]})},w)})}),!j&&s.jsxs("div",{className:"flex gap-4 mb-8",children:[s.jsx("button",{onClick:()=>a("fifty"),disabled:o.fifty,className:`flex-1 p-4 rounded-2xl border-2 font-bold transition-all ${o.fifty?"bg-gray-700 border-gray-600 text-gray-400":"bg-purple-600 border-purple-400 text-white hover:bg-purple-500 active:scale-95"}`,children:"50:50"}),s.jsx("button",{onClick:()=>a("audience"),disabled:o.audience,className:`flex-1 p-4 rounded-2xl border-2 font-bold transition-all ${o.audience?"bg-gray-700 border-gray-600 text-gray-400":"bg-blue-600 border-blue-400 text-white hover:bg-blue-500 active:scale-95"}`,children:"👥 Ask"})]}),j&&s.jsxs("div",{className:"relative text-center",children:[h&&s.jsx("div",{className:"absolute inset-0 pointer-events-none",children:s.jsx(rm,{recycle:!1,numberOfPieces:120,gravity:.9,tweenDuration:1800,confettiSource:P||{x:0,y:0,w:typeof window<"u"?window.innerWidth:320,h:1}})}),s.jsx("button",{onClick:()=>n(h,null,!0),className:"relative z-10 bg-white text-black font-black py-4 px-8 rounded-2xl text-lg hover:bg-gray-100 transition-all active:scale-95",children:"Continue"})]}),g&&s.jsx("div",{className:"fixed inset-0 z-50 bg-black/60 flex items-center justify-center px-6",children:s.jsxs("div",{className:"w-full max-w-sm rounded-2xl bg-base-card border border-base-border p-5 text-center",children:[s.jsx("div",{className:"text-lg font-bold mb-2",children:"Time’s up"}),s.jsx("p",{className:"text-base-muted mb-5",children:"You ran out of time."}),s.jsx("button",{onClick:f,className:"mx-auto w-48 py-3 rounded-xl bg-brand-blue text-white font-semibold hover:bg-brand-blue/90 transition",children:"Back to Wheel"})]})}),v&&s.jsx("div",{className:"fixed inset-0 z-50 bg-black/60 flex items-center justify-center px-6",children:s.jsxs("div",{className:"w-full max-w-sm rounded-2xl bg-base-card border border-base-border p-5 text-center",children:[s.jsx("div",{className:"text-lg font-bold mb-2",children:"Want to quit?"}),s.jsx("p",{className:"text-base-muted mb-5",children:"You’ll lose this question’s progress."}),s.jsxs("div",{className:"flex gap-3",children:[s.jsx("button",{onClick:()=>p(!1),className:"flex-1 py-3 rounded-xl border border-base-border bg-white/5 hover:bg-white/10 transition",children:"No"}),s.jsx("button",{onClick:u,className:"flex-1 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-500 transition",children:"Yes"})]})]})})]})})}function Qg({onSelect:e}){return s.jsx("div",{className:"min-h-screen bg-gradient-to-br from-purple-600 to-pink-600 text-white",children:s.jsxs("div",{className:"mx-auto max-w-md px-5 pt-16 pb-8",children:[s.jsxs("header",{className:"text-center mb-12",children:[s.jsx("div",{className:"text-6xl mb-4",children:"🏆"}),s.jsx("h1",{className:"text-4xl font-black mb-4",children:"Perfect Round!"}),s.jsx("p",{className:"text-xl opacity-90",children:"Choose a character to unlock"})]}),s.jsx("div",{className:"grid grid-cols-2 gap-6",children:qt.map(t=>{const n=sm[ar(t.name)];return s.jsxs("button",{onClick:()=>e(ar(t.name)),className:"p-6 rounded-3xl border-2 border-white/20 bg-white/10 backdrop-blur text-center hover:bg-white/20 hover:scale-105 transition-all duration-300 active:scale-95",children:[s.jsx("div",{className:"text-4xl mb-3",children:t.icon}),s.jsx("div",{className:"font-black text-lg mb-1",children:n}),s.jsx("div",{className:"text-sm opacity-75",children:t.name})]},ar(t.name))})})]})})}function Yg(){const[e,t]=d.useState("modes"),n=Rt(),r=Xt(),[i,o]=d.useState(()=>tn.get(en.COINS,0)),[a,l]=d.useState(()=>tn.get(en.XP,0)),[c,u]=d.useState(()=>tn.get(en.LEVEL,1)),[g,f]=d.useState(()=>tn.get(en.OWNED_CHARACTERS,[])),[m,k]=d.useState(()=>tn.get(en.SOUND,!0)),[b,j]=d.useState({qIndex:0,progress:[!1,!1,!1],lifelines:{fifty:!1,audience:!1}}),[R,v]=d.useState([]),[p,y]=d.useState(null),[E,P]=d.useState(null),[L,N]=d.useState(30),[h,x]=d.useState([]),[w,S]=d.useState(null),[_,U]=d.useState(null),[V,J]=d.useState(!1),[Z,H]=d.useState(0),[z,T]=d.useState("none"),[$,A]=d.useState(!1),[W,B]=d.useState(null),[re,ie]=d.useState(!1),[ae,pe]=d.useState(null),[M,q]=d.useState(-1),[ne,K]=d.useState(0),[G,oe]=d.useState(null),[I,D]=d.useState(null),[X,ue]=d.useState(!1),[C,Y]=d.useState(null),[de,ge]=d.useState(-1),[ve,ke]=d.useState([!1,!1,!1]),[ye,nt]=d.useState(!1),[Se,$e]=d.useState(!1),Ge=d.useRef(null),Ce=d.useRef(null),ft=d.useRef(null),Oe=d.useMemo(()=>{var se;return((se=window.matchMedia)==null?void 0:se.call(window,"(prefers-reduced-motion: reduce)").matches)||!1},[]);d.useEffect(()=>{try{localStorage.setItem("qp_in_question",JSON.stringify(e==="question"))}catch{}return()=>{try{localStorage.removeItem("qp_in_question")}catch{}}},[e]),d.useEffect(()=>(pt(),Pt(),()=>hr()),[]),d.useEffect(()=>tn.set(en.COINS,i),[i]),d.useEffect(()=>tn.set(en.XP,a),[a]),d.useEffect(()=>tn.set(en.LEVEL,c),[c]),d.useEffect(()=>tn.set(en.OWNED_CHARACTERS,g),[g]),d.useEffect(()=>tn.set(en.SOUND,m),[m]),d.useEffect(()=>(e==="question"&&L>0&&!Se?Ge.current=setTimeout(()=>{N(se=>{const me=se-1;return me===10&&m&&Dr("/sounds/tick.mp3",.8),me})},1e3):e==="question"&&L===0&&J(!0),()=>{Ge.current&&clearTimeout(Ge.current)}),[e,L,m,Se]),d.useEffect(()=>{if(e!=="wheel"||G==null)return;q(G),m&&Dr("/sounds/progress.mp3",.6),ge(G);const se=setTimeout(()=>ge(-1),900),me=setTimeout(()=>q(-1),900),Be=setTimeout(()=>{C&&(C==="streakFlash"?t("streakFlash"):C==="characterPicker"?t("characterPicker"):(t("modes"),Vn()),Y(null)),oe(null)},1800);return()=>{clearTimeout(se),clearTimeout(me),clearTimeout(Be)}},[e,G,C,m,ye]),d.useEffect(()=>{e!=="wheel"||!ye||(K(se=>se+1),nt(!1))},[e,ye]);const pt=async()=>{try{const me=await(await fetch("/data/quiz_questions_bank.csv")).text(),{data:Be}=Io.parse(me,{header:!0,skipEmptyLines:!0,transformHeader:he=>he.trim().toLowerCase()}),ze=Be.map((he,Ye)=>{var Tt;const Ve=[he.option1,he.option2,he.option3,he.option4].map(rt=>(rt||"").trim()).filter(Boolean);if(Ve.length<4)return null;let mt={a:0,b:1,c:2,d:3}[(Tt=he.answer)==null?void 0:Tt.toLowerCase()];return mt===void 0&&(mt=Ve.findIndex(rt=>rt.toLowerCase()===(he.answer||"").toLowerCase())),mt===-1&&(mt=0),{id:he.id||`q_${Ye}`,prompt:(he.question||"").trim(),options:Ve,correctIndex:mt,category:(he.category||he.subject||"general knowledge").trim(),difficulty:(he.difficulty||"medium").toLowerCase(),explanation:(he.explanation||"").trim()}}).filter(Boolean);v(ze)}catch(se){console.error("Failed to load questions:",se),v([])}},Pt=()=>{const se=new Audio("/sounds/spin.mp3");se.loop=!0,se.volume=.6,Ce.current=se},hr=()=>{if(Ge.current&&clearTimeout(Ge.current),ft.current&&(clearTimeout(ft.current),ft.current=null),Ce.current){try{Ce.current.pause()}catch{}Ce.current=null}},Js=()=>{if(m&&Ce.current){try{Ce.current.currentTime=0,Ce.current.play()}catch{}ft.current&&clearTimeout(ft.current),ft.current=setTimeout(()=>{xr()},2e3)}},xr=()=>{if(ft.current&&(clearTimeout(ft.current),ft.current=null),Ce.current)try{Ce.current.pause(),Ce.current.currentTime=0}catch{}},Vn=()=>{j({qIndex:0,progress:[!1,!1,!1],lifelines:{fifty:!1,audience:!1}}),ke([!1,!1,!1]),y(null),P(null),U(null),x([]),S(null),J(!1),K(0)},Kn=()=>{if($)return;B(null),ie(!1),pe(null),A(!0),Js();const se=Math.floor(Math.random()*qt.length),me=qt[se],Be=sd(Z),ze=se*sn+sn/2,he=(Math.random()-.5)*(sn*.3),Ye=360-ze+he;let Ve=sd(Ye-Be);const Xn=Sn.FULL_TURNS*360+Ve,mt=Z+Xn+Sn.OVERSHOOT;T(`transform ${Oe?1e3:Sn.DURATION}ms cubic-bezier(0.25, 0.46, 0.45, 0.94)`),H(mt),jc([20,50,20]),setTimeout(()=>{T(`transform ${Oe?200:Sn.SETTLE_DURATION}ms cubic-bezier(0.68, -0.55, 0.265, 1.55)`),H(Tt=>Tt-Sn.OVERSHOOT)},Oe?1e3:Sn.DURATION),setTimeout(()=>{xr(),A(!1),B({cat:me,index:se}),P(me),pe(me.color),ie(!0),setTimeout(()=>{ie(!1),t("interstitial")},1500),setTimeout(()=>pe(null),1e3)},(Oe?1e3:Sn.DURATION)+(Oe?200:Sn.SETTLE_DURATION)+100)},Fo=()=>{const se=R.filter(Be=>{const ze=Be.category.toLowerCase(),he=E.name.toLowerCase();return ze.includes(he)||he.includes(ze)});let me;se.length>0?me=se[Math.floor(Math.random()*se.length)]:me=R[Math.floor(Math.random()*R.length)],me?(y(me),N(30),x([]),S(null),J(!1),$e(!1),t("question")):t("wheel")},ln=(se,me,Be=!1)=>{if(!Be){$e(!0);return}const ze=b.qIndex,he=[...b.progress];he[ze]=!0;const Ye=[...ve];if(Ye[ze]=!!se,ke(Ye),j(Ve=>({...Ve,progress:he,qIndex:Ve.qIndex+1})),se&&(o(Ve=>Ve+5),l(Ve=>Ve+1),nt(!0)),D(ze),ue(!!se),ze===2){const Ve=Ye.every(Boolean);Y(Ve?"streakFlash":"modes")}else Y(null);t("wheel")},Te=se=>{if(!(b.lifelines[se]||!p)){if(j(me=>({...me,lifelines:{...me.lifelines,[se]:!0}})),se==="fifty"){const Be=p.options.map((ze,he)=>he).filter(ze=>ze!==p.correctIndex).slice(0,2);x(Be)}else if(se==="audience"){const me=40+Math.random()*25;let Be=100-me;const ze=[0,0,0,0];ze[p.correctIndex]=Math.round(me);const he=[0,1,2,3].filter(Ye=>Ye!==p.correctIndex);he.forEach((Ye,Ve)=>{if(Ve===he.length-1)ze[Ye]=Be;else{const Xn=Math.floor(Math.random()*Be);ze[Ye]=Xn,Be-=Xn}}),S(ze)}}},Gr=se=>{U(se),t("bonusInterstitial")},Jr=se=>{se&&_&&(f(me=>[...new Set([...me,_])]),m&&Dr("/sounds/coin.mp3",1)),setTimeout(()=>{t("modes"),Vn()},3e3)},Zs=se=>{se==="classic"&&(Vn(),t("wheel"))},ei=()=>{window.location.href="/",console.log("Navigate to home")},ti=()=>{t("modes"),Vn()},Mo=()=>{t("wheel")};switch(d.useEffect(()=>{if(e!=="wheel"||I==null)return;const me=setTimeout(()=>{oe(I),D(null)},X?1800:0);return()=>clearTimeout(me)},[e,I,X]),d.useEffect(()=>{const se=new URLSearchParams(r.search);(se.get("view")==="modes"||se.get("view")==="home")&&(Vn(),t("modes"),n("/play",{replace:!0}))},[r.search]),e){case"modes":return s.jsx(id,{onModeSelect:Zs,onNavigateHome:ei});case"wheel":return s.jsx(qg,{run:b,coins:i,xp:a,level:c,ownedCharacters:g,onSpin:Kn,onBack:ti,spinning:$,angle:Z,transition:z,result:W,showCallout:re,glowColor:ae,soundOn:m,setSoundOn:k,showSparkle:M,pulseIdx:de,coinBurstTick:ne,pendingProgressIdx:G,lastAnswerWasCorrect:X,nextProgressIdx:I});case"interstitial":return s.jsx(od,{category:E,onComplete:Fo,soundOn:m});case"streakFlash":return s.jsx(Hg,{onDone:()=>t("bonusInterstitial")});case"question":return s.jsx(ad,{question:p,category:E,onAnswer:ln,run:b,timeLeft:L,usedLifelines:b.lifelines,onUseLifeline:Te,eliminatedOptions:h,audienceData:w,onBack:Mo,timeUp:V,onTimeUpBackToWheel:()=>{J(!1),t("wheel")},soundOn:m});case"characterPicker":return s.jsx(Qg,{onSelect:Gr});case"bonusInterstitial":return s.jsx(od,{category:qt.find(se=>ar(se.name)===_),onComplete:()=>t("bonusQuestion"),isBonus:!0,soundOn:m});case"bonusQuestion":if(!p){const se=qt.find(me=>ar(me.name)===_);if(se&&R.length>0){const me=R.filter(ze=>{const he=ze.category.toLowerCase(),Ye=se.name.toLowerCase();return he.includes(Ye)||Ye.includes(he)}),Be=me.length>0?me[Math.floor(Math.random()*me.length)]:R[Math.floor(Math.random()*R.length)];y(Be),N(30)}return s.jsx("div",{className:"min-h-screen bg-base-bg text-base-text flex items-center justify-center",children:s.jsx("div",{className:"text-lg",children:"Loading bonus question..."})})}return s.jsx(ad,{question:p,category:qt.find(se=>ar(se.name)===_)||qt[0],onAnswer:Jr,run:{...b,lifelines:{fifty:!0,audience:!0}},timeLeft:L,usedLifelines:{fifty:!0,audience:!0},onUseLifeline:()=>{},eliminatedOptions:[],audienceData:null,onBack:()=>t("modes")});default:return s.jsx(id,{onModeSelect:Zs,onNavigateHome:ei})}}const pa="qp_resume",ld="qp_mistakes",xl="qp_stats",cd="qp_lastset",gl="qp_recent",Vg=50,Kg="qp_review_snapshot",ud="qp_xp",dd="qp_level",fd="qp_coins",ma=2,vr=e=>100*e*(e-1),Jn=(e="")=>e.replace(/-/g," ").replace(/\b\w/g,t=>t.toUpperCase()),Xg=(e="")=>e.toLowerCase().trim().replace(/[^\w\s-]/g,"").replace(/\s+/g,"-"),im=(e,t)=>e.slice().sort(()=>Math.random()-.5).slice(0,t),om=e=>{const t=e.slice();for(let n=t.length-1;n>0;n--){const r=Math.floor(Math.random()*(n+1));[t[n],t[r]]=[t[r],t[n]]}return t},pd=(e,t,n)=>Math.max(t,Math.min(n,e)),Gg=(e=0)=>{const t=Math.floor(e/60),n=e%60;return`${String(t).padStart(2,"0")}:${String(n).padStart(2,"0")}`},am=(e=0)=>{const t=Math.floor(e/1e3);return`${String(Math.floor(t/60)).padStart(2,"0")}:${String(t%60).padStart(2,"0")}`},md=e=>{try{const t=new Date(e),n=String(t.getDate()).padStart(2,"0"),r=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][t.getMonth()],i=String(t.getFullYear()).slice(-2);return`${n}-${r}-${i}`}catch{return""}};async function Jg(){const e="/data/quiz_questions_bank.csv",t=await fetch(e);if(!t.ok)throw new Error(`CSV not found at ${e}`);const n=await t.text(),{data:r}=Io.parse(n,{header:!0,skipEmptyLines:!0,transformHeader:o=>String(o).trim().toLowerCase()}),i={a:0,b:1,c:2,d:3};return r.map((o,a)=>{var m;const l=[o.option1,o.option2,o.option3,o.option4].map(k=>(k??"").trim());if(l.some(k=>!k))return null;let c=-1;const u=String(o.answer??"").trim();if(i[u.toLowerCase()]!==void 0&&(c=i[u.toLowerCase()]),c<0){const k=l.findIndex(b=>b.toLowerCase()===u.toLowerCase());c=k>=0?k:0}const g=String(o.category??o.subject??"General Knowledge").trim(),f=String(o.difficulty??"medium").toLowerCase().trim();return{id:((m=o.id)==null?void 0:m.trim())||`q_${a}`,category:g,difficulty:f,prompt:String(o.question??"").trim(),options:l,answerIndex:c,explanation:String(o.explanation??"").trim()}}).filter(Boolean)}function hd(e,{categorySlug:t,difficulty:n,count:r}){const o=t==="mixed"?()=>!0:g=>Xg(g.category)===t,a=n?g=>(g.difficulty||"medium")===n:()=>!0,l=e.filter(g=>o(g)&&a(g));return{questions:im(l,Math.min(r,l.length)).map(g=>{const f=om([0,1,2,3]),m=f.map(b=>g.options[b]),k=f.indexOf(g.answerIndex);return{...g,options:m,answerIndex:k}}),poolSize:l.length}}function Zg({message:e,onClose:t,duration:n=1e3,liftPx:r=128}){const i=d.useRef(t);return d.useEffect(()=>{i.current=t},[t]),d.useEffect(()=>{const o=setTimeout(()=>{var a;return(a=i.current)==null?void 0:a.call(i)},n);return()=>clearTimeout(o)},[e,n]),fc.createPortal(s.jsx("div",{className:"fixed left-1/2 -translate-x-1/2 z-[999] pointer-events-none",style:{bottom:`calc(env(safe-area-inset-bottom) + ${r}px)`},"aria-live":"polite",role:"status",children:s.jsx("div",{className:"px-3 py-1.5 rounded-lg bg-black/85 border border-white/15 text-sm text-yellow-300 shadow-lg",children:e})}),document.body)}function ev(){var Rc,Pc,Tc,zc,Lc,Ic,Fc,Mc,Dc,Oc,Ac;const e=Rt(),{category:t}=_x(),n=Xt(),r=new URLSearchParams(n.search),i=r.get("review")==="1",o=r.get("retake")==="1",a=((Rc=n.state)==null?void 0:Rc.mode)||"quiz",l=String(((Pc=n.state)==null?void 0:Pc.difficulty)||"medium").toLowerCase(),c=pd(Number(((Tc=n.state)==null?void 0:Tc.count)||10),1,50),u=((zc=n.state)==null?void 0:zc.timer)||{type:"per_q",seconds:45},g=!!((Lc=n.state)!=null&&Lc.resume),f=a==="practice";(Ic=n.state)!=null&&Ic.daily,(Fc=n.state)!=null&&Fc.source;const m=o||!!((Mc=n.state)!=null&&Mc.retake),[k]=mn("/sounds/correct.mp3",{volume:.65,interrupt:!0}),[b]=mn("/sounds/wrong.mp3",{volume:.65,interrupt:!0}),[j,R]=mn("/sounds/tick.mp3",{volume:.8,interrupt:!0}),[v,p]=d.useState(!0),[y,E]=d.useState([]),[P,L]=d.useState(!0),[N,h]=d.useState(""),[x,w]=d.useState({questions:[]}),S=x.questions.length,[_,U]=d.useState(0),[V,J]=d.useState([]),[Z,H]=d.useState([]),[z,T]=d.useState(null),[$,A]=d.useState(0),[W,B]=d.useState(u.seconds||45),[re,ie]=d.useState(!1),ae=d.useRef(null),[pe,M]=d.useState(!1),[q,ne]=d.useState(!1),[K,G]=d.useState({}),[oe,I]=d.useState({}),[D,X]=d.useState([]),[ue,C]=d.useState(!1),[Y,de]=d.useState(!1),[ge,ve]=d.useState(null),[ke,ye]=d.useState("quiz"),[nt,Se]=d.useState(""),$e=F=>{Se(""),setTimeout(()=>Se(F),0)},Ge=d.useCallback(()=>Se(""),[]),[Ce,ft]=d.useState(()=>parseInt(localStorage.getItem(dd)||"1",10)),[Oe,pt]=d.useState(()=>parseInt(localStorage.getItem(ud)||"0",10)),[Pt,hr]=d.useState(()=>parseInt(localStorage.getItem(fd)||"0",10)),Js=vr(Ce+1),xr=d.useRef(null),[Vn,Kn]=d.useState(!1),[Fo,ln]=d.useState(!1),[Te,Gr]=d.useState(null),[Jr,Zs]=d.useState({correct:0,total:0}),[ei,ti]=d.useState(!1),[Mo,se]=d.useState(0),[me,Be]=d.useState(0),[ze,he]=d.useState(!!((Dc=n.state)!=null&&Dc.retake)),[Ye]=mn("/sounds/coin.mp3",{volume:.75}),Ve=d.useCallback(F=>{if(!F)return;let Q=Oe+F,te=Ce;for(;Q>=vr(te+1);)te+=1;pt(Q),ft(te),localStorage.setItem(ud,String(Q)),localStorage.setItem(dd,String(te))},[Oe,Ce]),Xn=d.useCallback(F=>{if(!F)return;const Q=Pt+F;hr(Q),localStorage.setItem(fd,String(Q))},[Pt]),[mt,Tt]=d.useState(null),rt=d.useRef(null);d.useRef(!1);const Zr=(F,Q)=>{try{const te=localStorage.getItem(F);return te?JSON.parse(te):Q}catch{return Q}};d.useEffect(()=>{let F=!0;return(async()=>{try{const Q=await Jg();if(!F)return;E(Q)}catch(Q){console.error(Q),h("Failed to load questions. Check /public/data/quiz_questions_bank.csv")}finally{L(!1)}})(),()=>{F=!1}},[]),d.useEffect(()=>{if(i)try{const F=localStorage.getItem(Kg);if(!F)return;const Q=JSON.parse(F);Tt({questions:(Q==null?void 0:Q.questions)||[],answers:(Q==null?void 0:Q.answers)||[]}),ye("review")}catch{}},[i]),d.useEffect(()=>{var Q,te;if(i||P||N)return;if(g){const le=Zr(pa,null);if((le==null?void 0:le.slug)===t&&(le!=null&&le.inProgress)){const ce=hd(y,{categorySlug:t,difficulty:l,count:le.total||c});w({questions:ce.questions}),U(pd(le.index,0,ce.questions.length-1)),J(new Array(ce.questions.length).fill(null)),H(new Array(ce.questions.length).fill(!1)),X(new Array(ce.questions.length).fill(!1)),T(le.startedAt||Date.now()),B(u.seconds||45),A(0),M(!1),ne(!1),G({}),I({}),Tt(null),he(!!((Q=n.state)!=null&&Q.retake));return}}const F=hd(y,{categorySlug:t,difficulty:l,count:c});w({questions:F.questions}),J(new Array(F.questions.length).fill(null)),H(new Array(F.questions.length).fill(!1)),X(new Array(F.questions.length).fill(!1)),U(0),T(Date.now()),B(u.seconds||45),A(0),M(!1),ne(!1),G({}),I({}),Tt(null),he(!!((te=n.state)!=null&&te.retake))},[P,N,y,t,l,c,g,u==null?void 0:u.seconds,u==null?void 0:u.type,n.search,i]);const We=x.questions[_],Gn=V[_];d.useEffect(()=>{if(ke==="quiz"&&u.type!=="off"&&(clearInterval(ae.current),!re))return ae.current=setInterval(()=>{B(F=>{const Q=F-1;if(Q===10){try{R.stop()}catch{}j()}if(Q<=0){try{R.stop()}catch{}return clearInterval(ae.current),hm(),0}return Q}),A(F=>F+1e3),kc(!0)},1e3),()=>clearInterval(ae.current)},[ke,_,re,u.type]),d.useEffect(()=>{try{R.stop()}catch{}rt.current&&(clearTimeout(rt.current),rt.current=null)},[_,Gn,ke,re]),d.useEffect(()=>{if(ke==="reward"&&(Te==null?void 0:Te.coins)>0&&!Te.awarded)try{Ye()}catch{}},[ke,Te,Ye]),d.useEffect(()=>{if(ke!=="reward")return;ti(!0);const F=setTimeout(()=>ti(!1),180),Q=(Te==null?void 0:Te.coins)??0,te=Jr.correct;let le=0;const ce=performance.now(),be=1e3,we=Le=>{const ht=Math.min(1,(Le-ce)/be),Gt=1-Math.pow(1-ht,3);se(Math.round(te*Gt)),Be(Math.round(Q*Gt)),ht<1&&(le=requestAnimationFrame(we))};return se(0),Be(0),le=requestAnimationFrame(we),()=>{clearTimeout(F),cancelAnimationFrame(le)}},[ke,Jr.correct,Te==null?void 0:Te.coins]),d.useEffect(()=>{if(ke!=="reward"||Te&&!Te.awarded)return;const F=setTimeout(()=>ye("results"),2e3);return()=>clearTimeout(F)},[ke,Te]);const kc=(F=!0)=>{localStorage.setItem(pa,JSON.stringify({inProgress:F,slug:t,mode:a,category:Jn(t),index:_,total:S,remainingSec:u.type==="per_q"?W:0,startedAt:z||Date.now()}))},um=()=>localStorage.removeItem(pa),dm=(F,Q=16)=>{const te=document.getElementById("quiz-confetti-layer")||(()=>{const we=document.createElement("div");return we.id="quiz-confetti-layer",we.style.position="fixed",we.style.inset="0",we.style.pointerEvents="none",we.style.zIndex="120",document.body.appendChild(we),we})(),le=F.left+F.width/2,ce=F.top+F.height/2,be=["#22c55e","#60a5fa","#f59e0b","#eab308","#a78bfa"];for(let we=0;we<Q;we++){const Le=document.createElement("div"),ht=5+Math.random()*4;Le.style.position="fixed",Le.style.left="0",Le.style.top="0",Le.style.width=`${ht}px`,Le.style.height=`${ht}px`,Le.style.borderRadius="999px",Le.style.background=be[we%be.length],Le.style.transform=`translate(${le}px,${ce}px) scale(1)`,Le.style.opacity="1",Le.style.transition="transform 650ms cubic-bezier(.2,.8,.2,1), opacity 650ms linear",te.appendChild(Le);const Gt=Math.random()*2*Math.PI,ts=60+Math.random()*40,ni=le+Math.cos(Gt)*ts,qe=ce+Math.sin(Gt)*ts-20;requestAnimationFrame(()=>{Le.style.transform=`translate(${ni}px,${qe}px) scale(.9) rotate(${Math.random()*180}deg)`,Le.style.opacity="0"}),setTimeout(()=>Le.remove(),750)}},fm=(F,Q)=>{var le;if(!We||f&&D[_])return;try{(le=navigator.vibrate)==null||le.call(navigator,24)}catch{}const te=V.slice();if(V[_]===F?te[_]=null:te[_]=F,J(te),te[_]!==null&&Z[_]){const ce=Z.slice();ce[_]=!1,H(ce)}if(f&&te[_]!==null&&X(ce=>{if(ce[_])return ce;const be=ce.slice();return be[_]=!0,be}),f){const ce=te[_]===We.answerIndex;if(v&&(ce?k():te[_]!==null&&b()),ce&&(Q!=null&&Q.currentTarget)){const be=Q.currentTarget.getBoundingClientRect();dm(be,16)}}!f&&te[_]!==null&&(rt.current&&clearTimeout(rt.current),rt.current=setTimeout(()=>{_<S-1?es():(C(!0),ie(!0))},2e3))},Do=()=>{f&&(V[_]===null||V[_]===void 0||X(F=>{if(F[_])return F;const Q=F.slice();return Q[_]=!0,Q}))},pm=()=>{rt.current&&(clearTimeout(rt.current),rt.current=null),ie(!0),ve(null),C(!1),_>0&&U(F=>F-1),setTimeout(()=>ie(!1),50)},es=()=>{if(rt.current&&(clearTimeout(rt.current),rt.current=null),Do(),ie(!0),ve(null),C(!1),V[_]===null&&!Z[_]){const F=Z.slice();F[_]=!0,H(F)}_<S-1?(U(F=>F+1),B(u.seconds||45)):C(!0),setTimeout(()=>ie(!1),50)},mm=()=>{if(Do(),V[_]===null){const F=Z.slice();F[_]=!0,H(F)}es()},hm=()=>{Do();const F=Z.slice();V[_]===null&&(F[_]=!0),H(F),ve(_),ie(!0)},xm=F=>{var ht,Gt,ts,ni;const Q=x.questions.filter((qe,Jt)=>V[Jt]!==null&&V[Jt]!==qe.answerIndex).map(qe=>qe.id);try{const qe=Zr(ld,[]),Jt=Array.from(new Set([...Q,...qe]));localStorage.setItem(ld,JSON.stringify(Jt))}catch{}const te=x.questions.reduce((qe,Jt,$c)=>qe+(V[$c]===Jt.answerIndex?1:0),0),le=((Gt=(ht=F==null?void 0:F.currentTarget)==null?void 0:ht.getBoundingClientRect)==null?void 0:Gt.call(ht))||null,be=f||m||ze?0:te*5,we=be*ma;try{const qe=Zr(xl,{sessions:[]}),Jt=Z.filter(Boolean).length;qe.sessions.push({cat:Jn(t),mode:a,total:S,correct:te,skipped:Jt,ms:$}),localStorage.setItem(xl,JSON.stringify(qe))}catch{}const Le=f?"Practice":(ts=n.state)!=null&&ts.daily?"Daily Challenge":((ni=n.state)==null?void 0:ni.source)==="fun_facts"?"Fun Facts":"Quiz";try{const qe={ts:Date.now(),slug:t,categoryLabel:Jn(t),modeRaw:a,modeLabel:Le,difficulty:l,total:S,timer:u,ms:$,attempted:V.filter(cn=>cn!==null).length,correct:te,questions:x.questions.map(cn=>({id:cn.id,prompt:cn.prompt,options:cn.options,answerIndex:cn.answerIndex,explanation:cn.explanation,category:cn.category,difficulty:cn.difficulty})),answers:V.slice(),skipped:Z.slice()};localStorage.setItem(cd,JSON.stringify(qe));const Jt=Zr(gl,[]),jm=[{id:qe.ts,ts:qe.ts,cat:qe.categoryLabel,slug:t,mode:qe.modeLabel,total:S,correct:te,ms:$,snapshot:qe},...Jt].slice(0,Vg);localStorage.setItem(gl,JSON.stringify(jm))}catch{}Zs({correct:te,total:S}),be>0?Gr({startRect:le,coins:be,xp:we}):Gr(null),ye("reward"),ie(!0),clearInterval(ae.current),kc(!1),um()},Nc=()=>{var le;const F=Zr(cd,null);if(!F||F.slug!==t||!Array.isArray(F.questions)){gm();return}const Q=F.timer||u,te=F.questions.map(ce=>{const be=om([0,1,2,3]);return{...ce,options:be.map(we=>ce.options[we]),answerIndex:be.indexOf(ce.answerIndex)}});w({questions:te}),J(new Array(te.length).fill(null)),H(new Array(te.length).fill(!1)),X(new Array(te.length).fill(!1)),U(0),T(Date.now()),B((Q==null?void 0:Q.seconds)||45),A(0),M(!1),ne(!1),G({}),I({}),C(!1),he(!0),ye("quiz"),Tt(null),((le=n.state)==null?void 0:le.reviewFrom)==="history"&&e(window.location.pathname+window.location.search,{replace:!0,state:{...n.state,fromHistory:!0}}),Tt(null),window.scrollTo(0,0)},gm=()=>{e(`/quiz/${t}?r=${Date.now()}`,{replace:!0,state:{mode:a,difficulty:l,count:c,timer:u,retake:!0}})},Sc=()=>e("/"),vm=()=>{if(pe){$e("Once per quiz");return}if(!We)return;const F=[0,1,2,3].filter(te=>te!==We.answerIndex),Q=im(F,2);G({...K,[_]:Q}),M(!0)},ym=()=>{if(q){$e("Once per quiz");return}if(!We)return;const F=40+Math.floor(Math.random()*26);let Q=100-F;const te=[0,0,0,0];te[We.answerIndex]=F;const le=[0,1,2,3].filter(Le=>Le!==We.answerIndex),ce=Math.floor(Math.random()*(Q+1));Q-=ce;const be=Math.floor(Math.random()*(Q+1));Q-=be;const we=Q;te[le[0]]+=ce,te[le[1]]+=be,te[le[2]]+=we,I({...oe,[_]:te}),ne(!0)},Cc=V.filter(F=>F!==null).length,Ec=x.questions.filter((F,Q)=>V[Q]===F.answerIndex).length,bm=S?Math.round(Ec/S*100):0;if(P)return s.jsx(wi,{children:s.jsx("div",{className:"text-sm text-base-muted",children:"Loading questions…"})});if(N)return s.jsx(wi,{children:s.jsx("div",{className:"text-sm text-red-400",children:N})});if(!We&&ke==="quiz")return s.jsx(wi,{children:s.jsx("div",{className:"text-sm text-base-muted",children:"No questions found."})});const wm=K[_]||[],_c=oe[_]||null,kn=f&&D[_];return s.jsxs(wi,{children:[s.jsx("style",{children:`
      @keyframes popIn {
        0%   { transform: scale(.9); opacity: 0 }
        60%  { transform: scale(1.04); opacity: 1 }
        100% { transform: scale(1) }
      }
      @keyframes shine {
        0%   { transform: translateX(-120%) }
        100% { transform: translateX(120%) }
      }
    `}),ke==="reward"&&Te&&Te.coins>0&&!Te.awarded&&s.jsx(em,{startRect:Te.startRect,targetRef:xr,count:Math.min(28,Math.max(12,Math.round(Te.coins/2))),onDone:()=>{Ve(Te.xp),Xn(Te.coins),Gr(F=>F&&{...F,awarded:!0})}}),ke==="reward"&&s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"mt-3 flex items-center justify-end gap-2 px-3",children:[s.jsx(xd,{level:Ce,xp:Oe,next:Js,onClick:()=>Kn(!0)}),s.jsx(gd,{total:Pt,onClick:()=>ln(!0),pillRef:xr})]}),s.jsxs("div",{className:"relative mt-4 card rounded-3xl p-8 text-center overflow-hidden",style:{animation:"popIn 380ms ease-out"},children:[ei&&s.jsx("div",{className:"absolute inset-0 bg-white/70 pointer-events-none rounded-3xl"}),s.jsx("div",{className:"pointer-events-none absolute inset-0 overflow-hidden",children:s.jsx("div",{className:"h-full w-1/3 -skew-x-12 bg-white/10 blur-md",style:{animation:"shine 900ms ease-out forwards 120ms"}})}),s.jsxs("div",{className:"relative",children:[s.jsx("div",{className:"text-3xl md:text-4xl font-extrabold mb-2",children:"Rewards"}),s.jsxs("div",{className:"text-sm text-base-muted mb-6",children:[Jn(t)," • ",f?"Practice":"Quiz"]}),s.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl mx-auto",children:[s.jsxs("div",{className:"rounded-2xl border border-base-border bg-white/5 p-5",children:[s.jsx("div",{className:"text-base-muted text-sm",children:"Correct answers"}),s.jsx("div",{className:"text-5xl font-black mt-1",children:Mo})]}),s.jsxs("div",{className:"rounded-2xl border border-base-border bg-white/5 p-5",children:[s.jsx("div",{className:"text-base-muted text-sm",children:"Coins"}),s.jsx("div",{className:"text-5xl font-black mt-1",children:me}),s.jsxs("div",{className:"text-xs text-base-muted mt-1",children:[Jr.correct," × 5"]})]})]}),s.jsxs("div",{className:"mt-6 text-xs text-base-muted",children:["Finalizing… ",s.jsx("span",{className:"animate-pulse",children:"•••"})]})]})]})]}),ke==="quiz"&&s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"mb-2 mt-6 mx-4 sm:mx-3 grid grid-cols-[auto,1fr,auto] items-center",children:[s.jsx("button",{onClick:()=>de(!0),className:"px-3 py-1.5 rounded-xl border border-base-border bg-white/5 text-sm justify-self-start",children:"← Back"}),s.jsxs("div",{className:"text-center justify-self-center",children:[s.jsx("div",{className:"text-base font-semibold max-w-[70vw] mx-auto whitespace-normal break-words",children:Jn(t)}),s.jsxs("div",{className:"text-xs text-base-muted",children:["Mode: ",f?"Practice":"Quiz"," • Difficulty: ",l[0].toUpperCase()+l.slice(1)]})]}),s.jsxs("div",{className:["px-2 py-1 rounded-lg border text-xs justify-self-end",W<=10?"border-red-500 text-red-400 bg-red-500/10":"border-base-border bg-white/5"].join(" "),children:["⏱ ",Gg(W)]})]}),f&&s.jsx("div",{className:"mb-2 mx-4 sm:mx-3 flex items-center justify-end text-xs text-base-muted",children:s.jsxs("label",{className:"flex items-center gap-2 cursor-pointer select-none",children:[s.jsx("span",{children:"Sounds"}),s.jsx("input",{type:"checkbox",checked:v,onChange:F=>p(F.target.checked)})]})}),s.jsx("div",{className:"mb-2 px-4 sm:px-3 flex w-full gap-[2px]",children:Array.from({length:S}).map((F,Q)=>{const te=Q===_,le=Z[Q]?"skipped":V[Q]!==null?"attempted":"idle";let ce=le==="attempted"?"bg-brand-blue":le==="skipped"?"bg-amber-400":te?"bg-white/30":"bg-white/15";const be=te?"h-1.5":"h-1",we=te?"ring-1 ring-white/40":"";return s.jsx("div",{className:`${be} flex-1 rounded ${ce} ${we}`},Q)})}),s.jsxs("div",{className:"mb-4 px-4 sm:px-3 text-xs text-base-muted flex items-center justify-between",children:[s.jsxs("span",{children:["Q",_+1," / ",S]}),s.jsxs("span",{children:["Attempted ",Cc," • Skipped ",Z.filter(Boolean).length]})]}),s.jsxs("div",{className:"card rounded-3xl p-5 mt-6 mx-4 sm:mx-3 max-h-[65vh] overflow-y-auto",children:[s.jsx("p",{className:"text-base font-semibold mb-4",children:We==null?void 0:We.prompt}),s.jsx("div",{className:"flex flex-col gap-3",children:We==null?void 0:We.options.map((F,Q)=>{const te=wm.includes(Q),le=Gn===Q,ce=Q===We.answerIndex;let be="w-full text-left px-3 py-3 rounded-xl border transition";if(f&&Gn!==null){const we=Gn!==We.answerIndex;le&&ce?be+=" bg-green-600/20 border-green-500/50 text-green-300":le&&!ce?be+=" bg-red-600/20 border-red-500/50 text-red-300":!le&&we&&ce?be+=" bg-green-600/10 border-green-500/40 text-green-300/90":be+=" bg-base-bg/50 border-base-border"}else le?be+=" bg-white/10 border-brand-blue":be+=" bg-base-bg/50 border-base-border hover:bg-white/5";return s.jsx("button",{disabled:te||kn,onClick:we=>fm(Q,we),className:`${be} ${te||kn?"opacity-60 pointer-events-none":""}`,children:s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsxs("span",{className:"font-bold",children:[["A","B","C","D"][Q],"."]}),s.jsx("span",{className:"flex-1",children:F}),_c&&s.jsxs("span",{className:"text-xs text-base-muted",children:[_c[Q],"%"]})]})},Q)})}),f&&Gn!==null&&s.jsxs("div",{className:"mt-3 text-sm",children:[Gn===We.answerIndex?s.jsx("div",{className:"text-green-400 mb-1",children:"✓ Correct."}):s.jsx("div",{className:"text-red-400 mb-1",children:"✗ Incorrect."}),We.explanation&&s.jsxs("div",{className:"text-base-muted",children:["Explanation: ",We.explanation]})]}),s.jsxs("div",{className:"mt-4 flex items-center justify-center gap-3",children:[s.jsx("button",{onClick:vm,disabled:kn,className:["px-3 py-2 rounded-xl border border-base-border bg-white/5",pe||kn?"opacity-60":""].join(" "),title:"50:50 (eliminate two options)","aria-disabled":pe||kn,children:s.jsxs("span",{className:"inline-flex items-center gap-2",children:[s.jsx(tv,{}),s.jsx("span",{children:"50:50"})]})}),s.jsx("button",{onClick:ym,disabled:kn,className:["px-3 py-2 rounded-xl border border-base-border bg-white/5",q||kn?"opacity-60":""].join(" "),title:"Ask the audience","aria-disabled":q||kn,children:s.jsxs("span",{className:"inline-flex items-center gap-2",children:[s.jsx(nv,{}),s.jsx("span",{children:"Audience"})]})})]}),s.jsxs("div",{className:"mt-4 max-w-sm mx-auto grid grid-cols-3 gap-3",children:[s.jsx("button",{onClick:pm,disabled:_===0,className:"w-full px-3 py-2 rounded-xl border border-base-border bg-white/5 disabled:opacity-50",children:"Prev"}),s.jsx("button",{onClick:mm,disabled:Gn!==null,className:"w-full px-3 py-2 rounded-xl border border-base-border bg-white/5 disabled:opacity-50",children:"Skip"}),s.jsx("button",{onClick:es,className:"w-full px-3 py-2 rounded-xl border border-base-border bg-white/5",children:"Next"})]})]}),s.jsx("div",{className:"mt-4 flex justify-center",children:s.jsx("button",{onClick:()=>C(!0),className:"px-5 py-2.5 rounded-2xl text-white bg-gradient-to-r from-brand-blue to-brand-purple",children:"Submit"})}),Y&&s.jsx(ha,{onClose:()=>de(!1),children:s.jsxs("div",{className:"text-center",children:[s.jsx("div",{className:"text-2xl mb-2",children:"⚠️"}),s.jsx("h2",{className:"text-lg font-bold mb-1",children:"Quit quiz?"}),s.jsx("p",{className:"text-sm text-base-muted mb-4",children:"Your progress in this quiz will be lost."}),s.jsxs("div",{className:"flex justify-center gap-3",children:[s.jsx("button",{className:"px-3 py-2 rounded-xl border border-base-border bg-white/5",onClick:()=>de(!1),children:"No"}),s.jsx("button",{className:"btn-primary px-3 py-2 rounded-xl",onClick:()=>{var F;(F=n.state)!=null&&F.fromHistory?e("/profile/history",{replace:!0,state:null}):Sc()},children:"Yes"})]})]})}),ge===_&&s.jsx(ha,{onClose:()=>{ve(null),es()},children:s.jsxs("div",{className:"text-center",children:[s.jsx("div",{className:"text-2xl mb-2",children:"⏰"}),s.jsx("h2",{className:"text-lg font-bold mb-1",children:"Time's up"}),s.jsx("p",{className:"text-sm text-base-muted mb-4",children:"Let's move on."}),s.jsx("div",{className:"flex justify-center",children:s.jsx("button",{className:"btn-primary px-3 py-2 rounded-xl",onClick:()=>{ve(null),es()},children:_<S-1?"Next question":"Submit"})}),s.jsx("div",{className:"mt-4"})]})}),ue&&s.jsx(ha,{onClose:()=>C(!1),children:s.jsxs("div",{className:"text-center",children:[s.jsx("div",{className:"text-2xl mb-2",children:"🚀"}),s.jsx("h2",{className:"text-lg font-bold mb-1",children:"Submit quiz?"}),s.jsxs("p",{className:"text-sm text-base-muted mb-4",children:["Attempted ",Cc,"/",S," • Skipped ",Z.filter(Boolean).length]}),s.jsxs("div",{className:"flex justify-center gap-3",children:[s.jsx("button",{className:"px-3 py-2 rounded-xl border border-base-border bg-white/5",onClick:()=>C(!1),children:"Back"}),s.jsx("button",{className:"btn-primary px-3 py-2 rounded-xl",onClick:F=>xm(F),children:"Submit"})]}),s.jsx("div",{className:"mt-4"})]})}),nt&&s.jsx(Zg,{message:nt,onClose:Ge,duration:1e3,liftPx:128})]}),ke==="results"&&s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"mt-3 flex items-center justify-between px-3",children:[((Oc=n.state)==null?void 0:Oc.fromHistory)&&s.jsx("button",{onClick:()=>e("/profile/history",{replace:!0,state:null}),className:"px-3 py-1.5 rounded-xl border border-white/20 bg-white/10 text-white text-sm flex items-center gap-1",children:"← History"}),s.jsxs("div",{className:`flex items-center gap-2 ${(Ac=n.state)!=null&&Ac.fromHistory?"":"ml-auto"}`,children:[s.jsx(xd,{level:Ce,xp:Oe,next:Js,onClick:()=>Kn(!0)}),s.jsx(gd,{total:Pt,onClick:()=>ln(!0),pillRef:xr})]})]}),s.jsxs("div",{className:"mt-2 md:mt-8 card rounded-3xl p-5 text-center",children:[s.jsx("h2",{className:"text-xl font-semibold mb-1",children:"Results"}),s.jsxs("div",{className:"text-sm text-base-muted mb-4",children:[Jn(t)," • ",f?"Practice":"Quiz"]}),s.jsxs("div",{className:"grid grid-cols-3 gap-3 mb-5",children:[s.jsx(xa,{label:"Score",value:`${Ec}/${S}`}),s.jsx(xa,{label:"Accuracy",value:`${bm}%`}),s.jsx(xa,{label:"Time",value:am($)})]}),s.jsx(rv,{category:Jn(t)}),s.jsxs("div",{className:"mt-5 space-y-3",children:[s.jsxs("div",{className:"flex gap-2 justify-center",children:[s.jsx("button",{className:"flex-1 max-w-[140px] py-3 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium text-sm",onClick:()=>{Tt({questions:x.questions,answers:V}),ye("review")},children:"Review Answers"}),s.jsx("button",{className:"flex-1 max-w-[140px] py-3 rounded-2xl border border-white/20 text-white font-medium text-sm hover:bg-white/10 transition-colors",onClick:Nc,children:"Retake Quiz"})]}),s.jsxs("div",{className:"flex gap-2 justify-center",children:[s.jsx("button",{className:"flex-1 max-w-[140px] py-2.5 rounded-xl border border-white/20 bg-white/5 text-white text-sm hover:bg-white/10 transition-colors",onClick:()=>e("/profile/history",{replace:!0,state:null}),children:"History"}),s.jsx("button",{className:"flex-1 max-w-[140px] py-2.5 rounded-xl border border-white/20 bg-white/5 text-white text-sm hover:bg-white/10 transition-colors",onClick:Sc,children:"Home"})]})]})]}),s.jsx(sv,{onView:F=>{Tt(F),ye("review")}}),s.jsxs(vd,{open:Vn,onClose:()=>Kn(!1),children:[s.jsx("div",{className:"relative",children:s.jsx("button",{className:"absolute right-0 -top-2 text-sm px-2 py-1 rounded-lg bg-white/5 border border-base-border",onClick:()=>Kn(!1),children:"✕"})}),s.jsx("h3",{className:"text-lg font-semibold mb-1",children:"Levels & Progress"}),s.jsxs("p",{className:"text-sm text-base-muted mb-4",children:["Lvl ",Ce,": ",Oe,"/",vr(Ce+1)," XP"]}),s.jsx("div",{className:"space-y-2 mb-4",children:[1,2,3,4,5].map(F=>{const Q=Ce+F,te=Math.max(0,vr(Q)-Oe);return s.jsxs("div",{className:"flex items-center justify-between rounded-xl border border-base-border bg-white/5 px-3 py-2",children:[s.jsxs("div",{className:"text-sm",children:["Level ",Q]}),s.jsxs("div",{className:"text-xs text-base-muted",children:["needs ",te," XP"]})]},Q)})}),s.jsxs("div",{className:"rounded-xl bg-white/5 border border-base-border p-3 mb-4",children:[s.jsxs("div",{className:"text-sm mb-1",children:["Next level in ",s.jsx("b",{children:Math.max(0,vr(Ce+1)-Oe)})," XP"]}),s.jsxs("div",{className:"text-xs text-base-muted",children:["At ",ma," XP/coin, you'd need ~",s.jsx("b",{children:Math.ceil(Math.max(0,vr(Ce+1)-Oe)/ma)})," coins."]})]}),s.jsx("button",{className:"btn-primary w-full",onClick:()=>Kn(!1),children:"Got it"})]}),s.jsxs(vd,{open:Fo,onClose:()=>ln(!1),children:[s.jsx("div",{className:"relative",children:s.jsx("button",{className:"absolute right-0 -top-2 text-sm px-2 py-1 rounded-lg bg-white/5 border border-base-border",onClick:()=>ln(!1),children:"✕"})}),s.jsx("h3",{className:"text-lg font-semibold mb-3",children:"Earn coins"}),s.jsxs("div",{className:"space-y-2",children:[s.jsxs("button",{className:"w-full rounded-xl border border-base-border bg-white/5 px-3 py-3 text-left",onClick:()=>{ln(!1),e("/")},children:[s.jsx("div",{className:"font-medium",children:"Attempt a quiz"}),s.jsx("div",{className:"text-xs text-base-muted",children:"50 coins / quiz"})]}),s.jsxs("button",{className:"w-full rounded-xl border border-base-border bg-white/5 px-3 py-3 text-left",onClick:()=>{ln(!1),e("/play")},children:[s.jsx("div",{className:"font-medium",children:"Spin & Play"}),s.jsx("div",{className:"text-xs text-base-muted",children:"5 coins / spin"})]}),s.jsxs("button",{className:"w-full rounded-xl border border-base-border bg-white/5 px-3 py-3 text-left",onClick:()=>alert("Video screen will come soon"),children:[s.jsx("div",{className:"font-medium",children:"Watch a video"}),s.jsx("div",{className:"text-xs text-base-muted",children:"20 coins / video"})]}),s.jsxs("button",{className:"w-full rounded-xl border border-base-border bg-white/5 px-3 py-3 text-left",onClick:()=>{const F=encodeURIComponent("Try Quizify! Learn fast, earn coins, and challenge friends.");window.open(`https://wa.me/?text=${F}`,"_blank")},children:[s.jsx("div",{className:"font-medium",children:"Invite a friend"}),s.jsx("div",{className:"text-xs text-base-muted",children:"50 coins / invite"})]})]}),s.jsx("button",{className:"btn-primary w-full mt-4",onClick:()=>ln(!1),children:"Close"})]})]}),ke==="review"&&s.jsxs("div",{className:"mt-2 card rounded-3xl p-5 w-full max-w-none mx-auto pb-24",children:[s.jsxs("div",{className:"flex items-center justify-between mb-4",children:[s.jsx("button",{className:"px-3 py-1.5 rounded-xl border border-base-border bg-white/5",onClick:()=>{var F;((F=n.state)==null?void 0:F.reviewFrom)==="history"?e("/profile/history",{replace:!0}):ye("results")},children:"← Back"}),s.jsx("h2",{className:"text-lg font-semibold",children:"Review"}),s.jsx("div",{className:"w-16"})]}),(()=>{const F=(mt==null?void 0:mt.questions)||x.questions,Q=(mt==null?void 0:mt.answers)||V;return s.jsxs(s.Fragment,{children:[s.jsx("ol",{className:"space-y-4",children:F.map((te,le)=>{const ce=Q[le];return s.jsxs("li",{className:"rounded-2xl border border-base-border bg-white/5 p-4 md:p-5",children:[s.jsxs("div",{className:"text-sm md:text-base font-medium mb-3",children:["Q",le+1,". ",te.prompt]}),s.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-3",children:te.options.map((be,we)=>{const Le=ce===we,ht=we===te.answerIndex,Gt=["w-full text-left px-3 py-2 rounded-xl border",Le&&!ht?"bg-red-600/20 border-red-500/50 text-red-300":"",ht?"bg-green-600/20 border-green-500/50 text-green-300":"",!Le&&!ht?"bg-base-bg/40 border-base-border":""].join(" ");return s.jsxs("div",{className:Gt,children:[s.jsxs("span",{className:"font-semibold mr-1",children:[["A","B","C","D"][we],"."]}),be]},we)})}),s.jsxs("div",{className:"text-xs mt-3",children:[ce==null?s.jsx("span",{className:"text-base-muted",children:"Skipped"}):ce===te.answerIndex?s.jsx("span",{className:"text-green-400",children:"Correct"}):s.jsx("span",{className:"text-red-400",children:"Incorrect"}),te.explanation&&s.jsxs("div",{className:"text-base-muted mt-1",children:["Explanation: ",te.explanation]})]})]},te.id)})}),s.jsxs("div",{className:"mt-5 flex gap-2 justify-center",children:[s.jsx("button",{className:"px-3 py-2 rounded-xl border border-base-border bg-white/5",onClick:()=>{var te;((te=n.state)==null?void 0:te.reviewFrom)==="history"?e("/profile/history",{replace:!0}):ye("results")},children:"Back"}),s.jsx("button",{className:"btn-primary px-3 py-2 rounded-xl",onClick:Nc,children:"Retake"})]})]})})()]})]})}function tv({size:e=18,className:t=""}){return s.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24",className:t,"aria-hidden":"true",children:[s.jsx("rect",{x:"2.5",y:"5",rx:"4",ry:"4",width:"19",height:"14",fill:"none",stroke:"currentColor",strokeWidth:"1.5"}),s.jsx("text",{x:"12",y:"13.8",textAnchor:"middle",fontSize:"8.5",fontWeight:"700",fill:"currentColor",children:"50:50"})]})}function nv({size:e=18,className:t=""}){return s.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24",className:t,"aria-hidden":"true",children:[s.jsx("circle",{cx:"12",cy:"8",r:"3",fill:"none",stroke:"currentColor",strokeWidth:"1.5"}),s.jsx("circle",{cx:"6.5",cy:"9.5",r:"2.3",fill:"none",stroke:"currentColor",strokeWidth:"1.5"}),s.jsx("circle",{cx:"17.5",cy:"9.5",r:"2.3",fill:"none",stroke:"currentColor",strokeWidth:"1.5"}),s.jsx("path",{d:"M5 18c0-2.2 2.2-3.7 4.8-4.2M19 18c0-2.2-2.2-3.7-4.8-4.2",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),s.jsx("path",{d:"M7.5 18.5c0-2.8 2.7-4.5 4.5-4.5s4.5 1.7 4.5 4.5",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})}function wi({children:e}){return d.useEffect(()=>{window.scrollTo(0,0)},[]),s.jsx("div",{className:"fixed inset-0 bg-inherit text-white z-0 overflow-x-hidden max-w-[100vw]",children:s.jsx("div",{className:"h-full overflow-y-auto overscroll-y-none overflow-x-hidden touch-pan-y px-0 pt-[max(env(safe-area-inset-top),72px)] pb-[clamp(12px,env(safe-area-inset-bottom),20px)]",children:e})})}function ha({children:e,onClose:t}){return d.useEffect(()=>(document.body.classList.add("modal-open"),()=>{document.body.classList.remove("modal-open")}),[]),s.jsx("div",{className:"fixed inset-0 bg-black/60 flex items-center justify-center z-[120]",onClick:t,children:s.jsx("div",{className:"bg-base-card border border-base-border rounded-t-2xl w-full max-w-md max-h-[90vh] overflow-y-auto",onClick:n=>n.stopPropagation(),children:e})})}function xa({label:e,value:t}){return s.jsxs("div",{className:"rounded-xl border border-base-border bg-white/5 p-3 text-center",children:[s.jsx("div",{className:"text-xs text-base-muted",children:e}),s.jsx("div",{className:"text-lg font-semibold",children:t})]})}function rv({category:e}){let t=[];try{t=JSON.parse(localStorage.getItem(xl)||"{}").sessions||[]}catch{}const n=t.filter(a=>a.cat===e);if(!n.length)return null;const r=n.slice(-7),i=Math.round(r.reduce((a,l)=>a+Math.round(l.correct/l.total*100),0)/r.length),o=n[n.length-1];return s.jsx("div",{className:"rounded-xl border border-base-border bg-white/5 p-3 text-left",children:s.jsxs("ul",{className:"list-disc list-inside text-xs text-base-muted space-y-1",children:[s.jsxs("li",{children:["Avg. accuracy over ",r.length," runs: ",s.jsxs("b",{children:[i,"%"]})]}),s.jsxs("li",{children:["Last run: ",s.jsxs("b",{children:[o.correct,"/",o.total]})]}),s.jsxs("li",{children:["Time: ",s.jsx("b",{children:am(o.ms)})]})]})})}function sv({onView:e}){let t=[];try{t=JSON.parse(localStorage.getItem(gl)||"[]")}catch{}if(!(t!=null&&t.length))return null;const[n,r]=d.useState(!1),i=n?t:t.slice(0,5),o=l=>l>=80?"text-green-300":l>=50?"text-brand-blue":"text-base-text",a="grid grid-cols-[120px_minmax(120px,240px)_90px_64px_120px_90px]";return s.jsxs("div",{className:"mt-4 card rounded-3xl p-5",children:[s.jsx("div",{className:"flex items-center justify-between mb-3",children:s.jsx("h3",{className:"text-base font-semibold",children:"Recent Quizzes"})}),s.jsx("div",{className:"overflow-x-auto touch-pan-x overscroll-x-contain",children:s.jsx("div",{className:"max-h-[60vh] overflow-y-auto pr-1 pb-24",children:s.jsxs("div",{className:`min-w-[640px] ${a} text-center`,children:[s.jsxs("div",{className:`col-span-full ${a} items-center text-[11px] text-base-muted bg-white/5 rounded-lg px-2 py-1 mb-2`,children:[s.jsx("div",{className:"text-left pl-1",children:"Date"}),s.jsx("div",{className:"text-left",children:"Category"}),s.jsx("div",{children:"Score"}),s.jsx("div",{children:"Qn"}),s.jsx("div",{children:"Mode"}),s.jsx("div",{children:"View"})]}),i.map(l=>{const c=Math.round(l.correct/(l.total||1)*100);return s.jsxs("div",{role:"row",className:`col-span-full ${a} items-center text-center py-2 border-b border-white/10 last:border-0 hover:bg-white/[0.03] rounded-md`,children:[s.jsx("div",{className:"text-left pl-1 text-xs font-mono tabular-nums",children:md(l.ts)}),s.jsx("div",{className:"text-left text-xs px-1 truncate",children:l.cat}),s.jsxs("div",{className:`text-xs font-mono tabular-nums ${o(c)}`,children:[c,"%"]}),s.jsx("div",{className:"text-xs font-mono tabular-nums",children:l.total}),s.jsx("div",{className:"text-xs",children:l.mode}),s.jsx("div",{className:"flex justify-center",children:s.jsx("button",{className:"w-[60px] px-2 py-1 rounded-lg border border-base-border bg-base-card text-xs",onClick:u=>{u.stopPropagation(),e(l.snapshot)},"aria-label":`View ${l.cat} (${md(l.ts)})`,children:"View"})})]},l.id)}),t.length>5&&s.jsx("div",{className:`col-span-full ${a}`,children:s.jsx("div",{className:"col-start-1 justify-self-start py-2",children:s.jsx("button",{className:"text-xs px-2 py-1 rounded-lg border border-base-border bg-white/5 inline-flex items-center gap-1",onClick:()=>r(l=>!l),children:n?"Show 5":s.jsxs(s.Fragment,{children:["View all ",s.jsx("span",{"aria-hidden":"true",children:"›"})]})})})})]})})})]})}function xd({level:e,xp:t,next:n,onClick:r}){const i=Math.min(t/n,1);return s.jsxs("button",{onClick:r,className:"px-3 py-1 rounded-2xl bg-white/5 border border-base-border text-left",children:[s.jsxs("div",{className:"text-[11px]",children:["Lvl ",e," • ",t,"/",n]}),s.jsx("div",{className:"mt-1 h-1 w-full bg-white/10 rounded",children:s.jsx("div",{className:"h-1 bg-brand-blue rounded",style:{width:`${i*100}%`}})})]})}function gd({total:e,onClick:t,pillRef:n}){return s.jsxs("button",{ref:n,onClick:t,className:"pill",children:["🪙 ",e]})}function vd({open:e,onClose:t,children:n}){return d.useEffect(()=>{if(!e)return;const r=o=>o.key==="Escape"&&t();document.addEventListener("keydown",r);const i=document.body.style.overflow;return document.body.style.overflow="hidden",document.body.classList.add("modal-open"),()=>{document.removeEventListener("keydown",r),document.body.style.overflow=i,document.body.classList.remove("modal-open")}},[e,t]),e?fc.createPortal(s.jsxs("div",{className:"fixed inset-0 z-[120] flex items-center justify-center",onClick:t,children:[s.jsx("div",{className:"absolute inset-0 bg-black/60"}),s.jsx("div",{className:`relative w-[calc(100%-2rem)] max-w-md mx-auto rounded-2xl
                   bg-base-card border border-base-border shadow-2xl
                   p-5 pb-[calc(1rem+env(safe-area-inset-bottom))]
                   max-h-[90vh] overflow-y-auto overscroll-contain`,onClick:r=>r.stopPropagation(),children:n})]}),document.body):null}const En=[{label:"General Knowledge",slug:"general-knowledge",color:"#7C3AED",soon:!1},{label:"Current Affairs",slug:"current-affairs",color:"#2563EB",soon:!1},{label:"Fun Facts",slug:"fun-facts",color:"#EF4444",soon:!1},{label:"Science",slug:"science",color:"#10B981",soon:!1},{label:"History",slug:"history",color:"#F59E0B",soon:!0},{label:"Geography",slug:"geography",color:"#FACC15",soon:!0},{label:"Cat 1",slug:"cat-1",color:"#06B6D4",soon:!0},{label:"Cat 2",slug:"cat-2",color:"#D946EF",soon:!0}],Zn=360/En.length,iv=42,ga=3e3,yd=10,bd=260,ov="cubic-bezier(.15,.7,.1,1)",av="cubic-bezier(.2,.7,.2,1)",Cn=5,lv=5,cv=(e="")=>String(e).toLowerCase().trim().replace(/[^\w\s-]/g,"").replace(/\s+/g,"-");function uv({muted:e=!1,size:t=18}){return s.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24","aria-hidden":"true",children:[s.jsx("path",{d:"M3 9h4l5-4v14l-5-4H3z",fill:"currentColor"}),!e&&s.jsxs(s.Fragment,{children:[s.jsx("path",{d:"M16 8c1.5 1.5 1.5 6 0 7.5",stroke:"currentColor",strokeWidth:"2",fill:"none",strokeLinecap:"round"}),s.jsx("path",{d:"M19 6c3 3 3 10 0 13",stroke:"currentColor",strokeWidth:"2",fill:"none",strokeLinecap:"round"})]}),e&&s.jsx("line",{x1:"3",y1:"21",x2:"21",y2:"3",stroke:"#EF4444",strokeWidth:"2.5",strokeLinecap:"round"})]})}function dv({q:e,locked:t,onPick:n,result:r}){if(!e)return null;const i=[e.option1,e.option2,e.option3,e.option4];return s.jsxs("div",{className:"mt-5 rounded-3xl bg-white/5 border border-white/10 p-4",children:[s.jsx("div",{className:"text-sm text-base-muted mb-1",children:"Quick question"}),s.jsx("div",{className:"text-xl font-semibold mb-4",children:e.question}),i.map((o,a)=>{const l=r&&o===e.answer,c=r&&r.pick===o&&o!==e.answer;return s.jsx("button",{disabled:t||!!r,onClick:()=>n(o),className:["w-full text-left px-4 py-2 rounded-xl mb-2 border transition",!r&&!t?"bg-white/5 hover:bg-white/10 border-white/10":"bg-white/5 border-white/10",l?"bg-green-600/20 border-green-400/60 text-green-200":"",c?"bg-red-600/20 border-red-400/60 text-red-200":""].join(" "),children:o},a)}),r&&s.jsxs("div",{className:"mt-3 text-sm",children:[r.correct?s.jsx("span",{className:"text-green-400 font-medium",children:"✅ Correct!"}):s.jsxs("span",{className:"text-red-400 font-medium",children:["❌ Not quite. Answer: ",s.jsx("b",{children:e.answer})]}),e.explanation&&s.jsxs("div",{className:"text-xs text-base-muted mt-1",children:["Tip: ",e.explanation]})]})]})}function fv(){const e=Rt(),[t]=mn("/sounds/correct.mp3",{volume:.7}),[n]=mn("/sounds/wrong.mp3",{volume:.7}),[r,i]=d.useState(()=>[{name:"Player 1",color:"#60A5FA",scores:Array(Cn).fill(null)},{name:"Player 2",color:"#F472B6",scores:Array(Cn).fill(null)}]),[o,a]=d.useState(0),[l,c]=d.useState(1),u=r.reduce((M,q)=>M+q.scores.reduce((ne,K)=>ne+(K??0),0),0),[g,f]=d.useState(!0),m=d.useRef(null);d.useEffect(()=>{const M=new Audio("/sounds/spin.mp3");return M.loop=!0,M.volume=.7,m.current=M,()=>{try{M.pause(),M.src=""}catch{}}},[]);const k=()=>{if(g&&m.current)try{m.current.currentTime=0,m.current.play()}catch{}},b=()=>{if(m.current)try{m.current.pause(),m.current.currentTime=0}catch{}},[j,R]=d.useState(0),[v,p]=d.useState("none"),[y,E]=d.useState(!1),[P,L]=d.useState(null),[N,h]=d.useState(null),x=d.useMemo(()=>typeof window<"u"?window.matchMedia("(prefers-reduced-motion: reduce)").matches:!1,[]),[w,S]=d.useState([]);d.useEffect(()=>{(async()=>{try{const M=await fetch("/data/quiz_questions_bank.csv").then(G=>G.text()),{data:q}=Io.parse(M,{header:!0,skipEmptyLines:!0,transformHeader:G=>String(G).trim().toLowerCase()}),ne={a:0,b:1,c:2,d:3},K=q.map((G,oe)=>{var Y;const I=(G.question??"").trim();if(!I)return null;const D=[G.option1,G.option2,G.option3,G.option4].map(de=>String(de??"").trim());if(D.some(de=>!de))return null;let X=String(G.answer??"").trim(),ue=ne[X.toLowerCase()];if(ue===void 0){const de=D.findIndex(ge=>ge.toLowerCase()===X.toLowerCase());ue=de>=0?de:0}const C=D[ue];return{id:((Y=G.id)==null?void 0:Y.trim())||`ps_${oe}`,question:I,option1:D[0],option2:D[1],option3:D[2],option4:D[3],answer:C,explanation:String(G.explanation??"").trim(),catSlug:cv(G.category??G.subject??"general knowledge"),difficulty:String(G.difficulty??"medium").toLowerCase().trim()}}).filter(Boolean);S(K)}catch{S([])}})()},[]);const[_,U]=d.useState(null),[V,J]=d.useState(null),[Z,H]=d.useState(!1),z=M=>(M%360+360)%360,T=M=>z(M),$=l>Cn;function A(){if(r.length>=4)return;const M=["#60A5FA","#F472B6","#F59E0B","#34D399","#F87171","#A78BFA"],q=M[(r.length*2+1)%M.length];i(ne=>[...ne,{name:`Player ${ne.length+1}`,color:q,scores:Array(Cn).fill(null)}])}function W(){r.length<=2||(i(M=>M.slice(0,-1)),a(M=>Math.min(M,r.length-2)))}function B(M){i(q=>q.map((ne,K)=>K===o?{...ne,scores:ne.scores.map((G,oe)=>oe===l-1?M:G)}:ne))}function re(){if(y||$)return;L(null),h(null),U(null),J(null),E(!0),k();const M=Math.floor(Math.random()*En.length),q=En[M],ne=Zn*.28,K=(Math.random()*2-1)*ne,G=z(j),oe=180,D=M*Zn+Zn/2+K;let X=T(D-G-oe);const ue=iv*360+X,C=j+ue+yd;p(`transform ${x?800:ga}ms ${ov}`),R(C);try{navigator.vibrate&&!x&&navigator.vibrate([10,40,10])}catch{}setTimeout(()=>{p(`transform ${x?160:bd}ms ${av}`),R(Y=>Y-yd)},x?800:ga),setTimeout(()=>{if(b(),E(!1),L(M),h(q.color),q.soon)return;const Y=w.filter(ge=>ge.catSlug===q.slug&&ge.difficulty==="easy"),de=Y.length?Y:w.filter(ge=>ge.catSlug===q.slug);if(de.length){const ge=de[Math.floor(Math.random()*de.length)];U(ge)}else U({question:"No question found for this category yet. Try re-spinning!",option1:"Okay",option2:"Okay",option3:"Okay",option4:"Okay",answer:"Okay",explanation:""})},(x?800:ga)+(x?160:bd)+40)}function ie(M){if(!_||V)return;const q=M===_.answer;if(J({correct:q,pick:M}),q){t(),H(!0),setTimeout(()=>H(!1),900);try{navigator.vibrate&&navigator.vibrate([8,16])}catch{}B(lv)}else{n();try{navigator.vibrate&&navigator.vibrate([4])}catch{}B(0)}}function ae(){const M=(o+1)%r.length,q=M===0?l+1:l;a(M),c(q),L(null),h(null),U(null),J(null)}function pe(){const M=r.map(K=>K.scores.reduce((G,oe)=>G+(oe??0),0)),q=Math.max(...M),ne=r.filter((K,G)=>M[G]===q).map(K=>K.name).join(", ");alert(`${ne} win${ne.includes(",")?"":"s"} the pot of ${u} coins! 🎉`),e("/play")}return s.jsxs("div",{className:"min-h-screen bg-black text-white",children:[Z&&s.jsx(rm,{numberOfPieces:120,recycle:!1}),s.jsxs("div",{className:"mx-auto max-w-md px-5 pt-[calc(env(safe-area-inset-top)+1.25rem)] pb-[calc(5.25rem+env(safe-area-inset-bottom))]",children:[s.jsxs("header",{className:"flex items-center justify-between mb-4",children:[s.jsx("button",{onClick:()=>e("/play"),className:"h-10 w-10 grid place-items-center rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition","aria-label":"Back",children:"←"}),s.jsxs("div",{className:"text-center",children:[s.jsx("h1",{className:"text-2xl font-bold",children:"Party Spin"}),s.jsx("p",{className:"text-sm text-base-muted",children:"Pass & play • Winner takes the pot"})]}),s.jsx("button",{onClick:()=>f(M=>!M),className:"h-10 w-10 grid place-items-center rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition","aria-label":g?"Mute sound":"Unmute sound",title:g?"Sound on":"Sound off",children:s.jsx(uv,{muted:!g})})]}),s.jsxs("section",{className:"rounded-2xl border border-white/10 bg-white/5 p-3 mb-4",children:[s.jsxs("div",{className:"flex items-center justify-between mb-2",children:[s.jsxs("div",{className:"text-sm",children:["Round ",s.jsx("b",{children:Math.min(l,Cn)}),"/",s.jsx("b",{children:Cn})]}),s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx("button",{onClick:A,className:"btn-ghost px-2 py-1 text-sm",children:"+"}),s.jsx("span",{className:"text-sm text-base-muted",children:"Player"}),s.jsx("button",{onClick:W,className:"btn-ghost px-2 py-1 text-sm",children:"−"})]}),s.jsxs("div",{className:"text-sm",children:["Pot: ",s.jsx("b",{className:"text-yellow-300",children:u})," 🪙"]})]}),s.jsx("div",{className:"overflow-x-auto",children:s.jsxs("table",{className:"w-full table-fixed text-sm tracking-tight tabular-nums",children:[s.jsxs("colgroup",{children:[s.jsx("col",{style:{width:"42%"}}),s.jsx("col",{style:{width:"9%"}}),s.jsx("col",{style:{width:"9%"}}),s.jsx("col",{style:{width:"9%"}}),s.jsx("col",{style:{width:"9%"}}),s.jsx("col",{style:{width:"9%"}}),s.jsx("col",{style:{width:"13%"}})]}),s.jsx("thead",{children:s.jsxs("tr",{className:"text-base-muted",children:[s.jsx("th",{className:"text-left font-medium py-1 pr-1",children:"Player"}),Array.from({length:Cn}).map((M,q)=>s.jsxs("th",{className:"font-medium text-center",children:["R",q+1]},q)),s.jsx("th",{className:"font-medium text-right pr-1",children:"Total"})]})}),s.jsx("tbody",{children:r.map((M,q)=>{const ne=M.scores.reduce((G,oe)=>G+(oe??0),0),K=q===o;return s.jsxs("tr",{className:K?"bg-white/6":"",children:[s.jsx("td",{className:"py-1 pr-1",children:s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx("span",{className:"inline-block h-3 w-3 rounded-full shrink-0",style:{background:M.color}}),s.jsx("input",{className:"bg-transparent outline-none font-semibold w-full",value:M.name,onChange:G=>i(oe=>oe.map((I,D)=>D===q?{...I,name:G.target.value}:I))})]})}),M.scores.map((G,oe)=>s.jsx("td",{className:"text-center",children:G===null?"–":G},oe)),s.jsx("td",{className:"text-right pr-1 font-semibold",children:ne})]},q)})})]})})]}),s.jsx("section",{className:"flex flex-col items-center",children:s.jsxs("div",{className:"relative w-[320px] h-[320px] md:w-[380px] md:h-[380px] rounded-full select-none",children:[N&&s.jsx("div",{className:"pointer-events-none absolute -inset-2 rounded-full",style:{boxShadow:`0 0 0 6px ${N}33, 0 0 30px 8px ${N}44`}}),s.jsx("div",{className:"absolute inset-0 rounded-full border border-white/10 shadow-2xl bg-black/20 overflow-hidden will-change-transform",style:{transform:`rotate(${j}deg)`,transition:v},"aria-label":"Category wheel",role:"group",children:s.jsxs("svg",{width:"100%",height:"100%",viewBox:"0 0 100 100",className:"block",children:[En.map((M,q)=>{const ne=q*Zn,K=ne+Zn,G=Zn>180?1:0,oe=Math.PI*ne/180,I=Math.PI*K/180,D=50+50*Math.cos(oe),X=50-50*Math.sin(oe),ue=50+50*Math.cos(I),C=50-50*Math.sin(I),Y=P===q;return s.jsxs("g",{style:{opacity:P==null?.95:Y?1:.78,filter:P!=null&&!Y?"blur(0.6px)":"none"},children:[s.jsx("path",{d:`M50,50 L${D},${X} A50,50 0 ${G} 0 ${ue},${C} Z`,fill:M.color,stroke:Y?`${M.color}AA`:"rgba(255,255,255,0.14)",strokeWidth:Y?"1.2":"0.6"}),s.jsx("text",{x:"50",y:"50",fill:"#ffffff",fontSize:"4",fontWeight:"700",dominantBaseline:"middle",transform:`rotate(${ne+Zn/2} 50 50) translate(12 0)`,children:s.jsxs("tspan",{children:[M.label,M.soon?" (soon)":""]})})]},M.slug)}),s.jsx("circle",{cx:"50",cy:"50",r:"9",fill:"rgba(0,0,0,0.55)",stroke:"white",strokeOpacity:"0.25"})]})}),s.jsx("button",{onClick:re,disabled:y||$,className:["absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2","h-16 w-16 rounded-full grid place-items-center","bg-white text-black font-extrabold shadow-soft transition active:scale-[0.98]",y||$?"opacity-60 cursor-not-allowed":"hover:bg-gray-200"].join(" "),"aria-label":"Spin the wheel",children:"SPIN"}),s.jsx("div",{className:"absolute left-1/2 -translate-x-1/2 -bottom-3 z-20",children:s.jsx("svg",{width:"22",height:"22",viewBox:"0 0 24 24",children:s.jsx("path",{d:"M12 4 L20 20 L4 20 Z",fill:"#ffffff"})})}),P!=null&&!y&&s.jsx("div",{className:"absolute left-1/2 -translate-x-1/2 -bottom-10",children:s.jsxs("div",{className:"px-3 py-1 rounded-full bg-white/10 border border-white/20 text-sm backdrop-blur",children:[s.jsx("span",{className:"inline-block h-2.5 w-2.5 rounded-full mr-2 align-middle",style:{background:En[P].color}}),En[P].label]})})]})}),s.jsx("section",{className:"mt-4",children:$?s.jsxs("div",{className:"rounded-2xl border border-white/10 bg-white/5 p-4",children:[s.jsx("div",{className:"text-xl font-semibold mb-2",children:"Match Over"}),s.jsxs("p",{className:"text-sm text-base-muted mb-3",children:["Top score takes the pot of ",s.jsx("b",{className:"text-yellow-300",children:u})," coins."]}),s.jsx("button",{className:"btn-primary w-full",onClick:pe,children:"End match"})]}):P!=null&&En[P].soon?s.jsxs("div",{className:"rounded-2xl border border-white/10 bg-white/5 p-4",children:[s.jsx("div",{className:"text-lg font-semibold mb-1",children:En[P].label}),s.jsx("p",{className:"text-sm text-base-muted mb-3",children:"This category is arriving soon. Spin again!"}),s.jsx("button",{className:"btn-primary",onClick:re,disabled:y,children:"Re-spin"})]}):s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"text-sm text-center text-base-muted mb-1",children:["Turn: ",s.jsx("span",{style:{color:r[o].color},children:r[o].name})," ","| Round ",l,"/",Cn]}),s.jsx(dv,{q:_,locked:y||!_,onPick:ie,result:V}),V&&s.jsx("div",{className:"mt-3 flex justify-center",children:s.jsx("button",{className:"btn-primary",onClick:ae,children:"Next turn"})})]})})]}),s.jsx("div",{className:"pointer-events-none fixed inset-x-0 bottom-0 bg-[#0B0F1A]",style:{height:"calc(5.25rem + env(safe-area-inset-bottom))"},"aria-hidden":!0})]})}function pv(){const e=Rt(),[t,n]=d.useState(""),[r,i]=d.useState({name:"Nirmal",level:12,xp:2840,nextLevelXp:3e3,coins:1240,rank:23,streak:5,todayQuizzes:3,weeklyXp:450});d.useEffect(()=>{const l=new Date().getHours();l<12?n("Good morning"):l<17?n("Good afternoon"):n("Good evening")},[]);const o=`
    rounded-3xl p-5 text-left text-white 
    transition-all duration-300 ease-out
    active:scale-[0.97] hover:scale-[1.02]
    shadow-[0_8px_32px_rgba(0,0,0,0.3)]
    hover:shadow-[0_12px_48px_rgba(0,0,0,0.4)]
    relative overflow-hidden
    before:absolute before:inset-0 before:bg-white/5 before:opacity-0 
    hover:before:opacity-100 before:transition-opacity before:duration-300
  `,a=r.xp%1e3/10;return s.jsxs("div",{className:"min-h-full bg-[#0B0C10] text-white pt-12 px-3",children:[s.jsxs("div",{className:"mb-6",children:[s.jsxs("div",{className:"flex items-center justify-between mb-4",children:[s.jsxs("div",{children:[s.jsxs("h1",{className:"text-2xl font-bold",children:[t," 👋"]}),s.jsx("p",{className:"text-white/60 text-sm",children:"Ready for today's challenge?"})]}),s.jsx("button",{onClick:()=>e("/profile/settings"),className:"w-12 h-12 rounded-2xl bg-white/10 border border-white/20 grid place-items-center hover:bg-white/20 transition",children:s.jsx("span",{className:"text-xl",children:"⚙️"})})]}),s.jsxs("div",{className:"rounded-3xl bg-gradient-to-r from-slate-800/50 to-slate-900/50 border border-white/10 p-4 backdrop-blur-sm",children:[s.jsxs("div",{className:"flex items-center gap-4 mb-3",children:[s.jsx("div",{className:"w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 grid place-items-center text-2xl font-bold",children:r.name[0]}),s.jsxs("div",{className:"flex-1",children:[s.jsx("div",{className:"text-lg font-semibold",children:r.name}),s.jsxs("div",{className:"text-white/60 text-sm",children:["Level ",r.level]})]}),s.jsxs("div",{className:"text-right",children:[s.jsxs("div",{className:"text-yellow-400 font-bold text-lg",children:[r.coins," 🪙"]}),s.jsxs("div",{className:"text-white/60 text-sm",children:["Rank #",r.rank]})]})]}),s.jsxs("div",{className:"mb-3",children:[s.jsxs("div",{className:"flex justify-between text-xs text-white/60 mb-1",children:[s.jsx("span",{children:"XP Progress"}),s.jsxs("span",{children:[r.xp,"/",r.nextLevelXp]})]}),s.jsx("div",{className:"h-2 bg-white/10 rounded-full overflow-hidden",children:s.jsx("div",{className:"h-full bg-gradient-to-r from-blue-400 to-purple-500 rounded-full transition-all duration-1000 ease-out",style:{width:`${a}%`}})})]}),s.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[s.jsxs("div",{className:"text-center p-2 rounded-xl bg-white/5",children:[s.jsxs("div",{className:"text-orange-400 font-bold text-lg",children:["🔥 ",r.streak]}),s.jsx("div",{className:"text-white/60 text-xs",children:"Day Streak"})]}),s.jsxs("div",{className:"text-center p-2 rounded-xl bg-white/5",children:[s.jsxs("div",{className:"text-green-400 font-bold text-lg",children:["+",r.weeklyXp]}),s.jsx("div",{className:"text-white/60 text-xs",children:"This Week"})]})]})]})]}),s.jsxs("button",{onClick:()=>e("/profile/leaderboard"),className:`${o} w-full mb-4 bg-gradient-to-br from-[#5AA9FF] via-[#6C63FF] to-[#9C6BFF]`,children:[s.jsx("div",{className:"absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-8 translate-x-8 animate-pulse"}),s.jsxs("div",{className:"relative flex items-start justify-between",children:[s.jsxs("div",{children:[s.jsx("div",{className:"text-xs opacity-90 mb-1",children:"🏆 Rank & Coins"}),s.jsx("div",{className:"text-3xl font-extrabold tracking-tight mb-2",children:"LEADERBOARD"}),s.jsxs("div",{className:"text-xs opacity-75 flex items-center gap-2",children:[s.jsx("span",{className:"w-2 h-2 bg-green-400 rounded-full animate-pulse"}),"Weekly reset · Ends in 2d 14h"]})]}),s.jsx("div",{className:"w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm grid place-items-center text-2xl border border-white/30",children:"🏆"})]})]}),s.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[s.jsxs("button",{onClick:()=>e("/profile/history"),className:`${o} bg-gradient-to-br from-[#D19A00] to-[#C94B4B] relative`,children:[s.jsx("div",{className:"absolute top-2 right-2 w-3 h-3 bg-white/20 rounded-full"}),s.jsx("div",{className:"text-3xl mb-3",children:"📊"}),s.jsx("div",{className:"text-sm font-bold mb-1",children:"HISTORY"}),s.jsx("div",{className:"text-[11px] opacity-80",children:"Quizzes & Practice"}),s.jsxs("div",{className:"text-[10px] opacity-60 mt-1",children:["+",r.todayQuizzes," today"]})]}),s.jsxs("button",{onClick:()=>e("/profile/rewards"),className:`${o} bg-gradient-to-br from-[#2EB872] to-[#1EA07A] relative`,children:[s.jsx("div",{className:"absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full animate-bounce"}),s.jsx("div",{className:"text-3xl mb-3",children:"🎁"}),s.jsx("div",{className:"text-sm font-bold mb-1",children:"REWARDS"}),s.jsx("div",{className:"text-[11px] opacity-80",children:"Claim & Redeem"}),s.jsx("div",{className:"text-[10px] opacity-60 mt-1",children:"2 available"})]}),s.jsxs("button",{onClick:()=>e("/profile/badges"),className:`${o} bg-gradient-to-br from-[#E65C00] to-[#F9D423] relative`,children:[s.jsx("div",{className:"absolute -top-1 -right-1 w-6 h-6 bg-purple-600 rounded-full grid place-items-center text-[10px] font-bold animate-pulse",children:"NEW"}),s.jsx("div",{className:"text-3xl mb-3",children:"🏅"}),s.jsx("div",{className:"text-sm font-bold mb-1",children:"BADGES"}),s.jsx("div",{className:"text-[11px] opacity-80",children:"Collectables"}),s.jsx("div",{className:"text-[10px] opacity-60 mt-1",children:"4/15 unlocked"})]}),s.jsxs("button",{onClick:()=>e("/profile/achievements"),className:`${o} bg-gradient-to-br from-[#5D26C1] to-[#A17FE0] relative`,children:[s.jsx("div",{className:"text-3xl mb-3",children:"🎯"}),s.jsx("div",{className:"text-sm font-bold mb-1",children:"ACHIEVEMENTS"}),s.jsx("div",{className:"text-[11px] opacity-80",children:"Milestones"}),s.jsx("div",{className:"text-[10px] opacity-60 mt-1",children:"67% complete"})]})]}),s.jsxs("div",{className:"mt-4 space-y-3",children:[s.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[s.jsx("button",{onClick:()=>e("/profile/streaks"),className:`${o} bg-gradient-to-r from-orange-600/80 to-red-600/80 backdrop-blur-sm border border-orange-500/30`,children:s.jsxs("div",{className:"flex items-center gap-3",children:[s.jsx("div",{className:"text-2xl",children:"🔥"}),s.jsxs("div",{children:[s.jsx("div",{className:"text-sm font-bold",children:"STREAK"}),s.jsxs("div",{className:"text-[11px] opacity-80",children:[r.streak," days strong"]})]})]})}),s.jsx("button",{onClick:()=>e("/profile/quests"),className:`${o} bg-gradient-to-r from-blue-600/80 to-cyan-600/80 backdrop-blur-sm border border-blue-500/30`,children:s.jsxs("div",{className:"flex items-center gap-3",children:[s.jsx("div",{className:"text-2xl",children:"⚡"}),s.jsxs("div",{children:[s.jsx("div",{className:"text-sm font-bold",children:"QUESTS"}),s.jsx("div",{className:"text-[11px] opacity-80",children:"2 active goals"})]})]})})]}),s.jsx("button",{onClick:()=>e("/profile/settings"),className:`${o} w-full bg-gradient-to-r from-slate-700/50 to-slate-800/50 backdrop-blur-sm border border-white/10`,children:s.jsxs("div",{className:"flex items-center justify-between",children:[s.jsxs("div",{className:"flex items-center gap-4",children:[s.jsx("div",{className:"w-12 h-12 rounded-2xl bg-white/10 grid place-items-center text-xl",children:"⚙️"}),s.jsxs("div",{children:[s.jsx("div",{className:"text-sm font-bold",children:"SETTINGS"}),s.jsx("div",{className:"text-[11px] opacity-70",children:"Customize your experience"})]})]}),s.jsx("div",{className:"text-white/40",children:"→"})]})})]}),s.jsx("div",{className:"h-6"})]})}const ds="🪙",va={global:[{rank:1,name:"Bryan Wolf",handle:"@bryan",score:43,avatar:"/profile/rank1.png",trend:"+5",streak:12,country:"🇺🇸"},{rank:2,name:"Meghan Jess…",handle:"@meghan",score:40,avatar:"/profile/rank2.png",trend:"+2",streak:8,country:"🇨🇦"},{rank:3,name:"Alex Turner",handle:"@alex",score:38,avatar:"/profile/rank3.png",trend:"±0",streak:15,country:"🇬🇧"},{rank:4,name:"Marsha Fisher",handle:"@marsha",score:36,trend:"-1",streak:5,country:"🇦🇺"},{rank:5,name:"Juanita Cormier",handle:"@juanita",score:35,trend:"+1",streak:3,country:"🇲🇽"},{rank:6,name:"You",handle:"@you",score:34,you:!0,avatar:"/profile/avatar.png",trend:"+3",streak:7,country:"🇮🇳"},{rank:7,name:"Tamara Schmidt",handle:"@tamara",score:33,trend:"-2",streak:2,country:"🇩🇪"},{rank:8,name:"Ricardo Veum",handle:"@ricardo",score:32,trend:"+1",streak:4,country:"🇧🇷"}],friends:[{rank:1,name:"You",handle:"@you",score:34,you:!0,avatar:"/profile/avatar.png",trend:"+2",streak:7,country:"🇮🇳"},{rank:2,name:"Sarah Chen",handle:"@sarah",score:31,trend:"-1",streak:4,country:"🇸🇬",friend:!0},{rank:3,name:"Mike Johnson",handle:"@mike",score:29,trend:"+3",streak:2,country:"🇺🇸",friend:!0},{rank:4,name:"Priya Sharma",handle:"@priya",score:27,trend:"±0",streak:5,country:"🇮🇳",friend:!0},{rank:5,name:"David Kim",handle:"@david",score:25,trend:"+1",streak:3,country:"🇰🇷",friend:!0},{rank:6,name:"Emma Wilson",handle:"@emma",score:23,trend:"-2",streak:1,country:"🇬🇧",friend:!0}],india:[{rank:1,name:"Rohit Sharma",handle:"@rohit",score:45,trend:"+4",streak:10,country:"🇮🇳"},{rank:2,name:"Priya Patel",handle:"@priya",score:42,trend:"+1",streak:8,country:"🇮🇳"},{rank:3,name:"You",handle:"@you",score:34,you:!0,avatar:"/profile/avatar.png",trend:"+3",streak:7,country:"🇮🇳"},{rank:4,name:"Arjun Singh",handle:"@arjun",score:32,trend:"-1",streak:5,country:"🇮🇳"},{rank:5,name:"Kavya Reddy",handle:"@kavya",score:30,trend:"+2",streak:3,country:"🇮🇳"},{rank:6,name:"Vikram Gupta",handle:"@vikram",score:28,trend:"±0",streak:4,country:"🇮🇳"}]},ji=[{name:"Diamond",min:40,color:"from-cyan-400 to-blue-600",icon:"💎"},{name:"Gold",min:30,color:"from-yellow-400 to-orange-500",icon:"🥇"},{name:"Silver",min:20,color:"from-gray-300 to-gray-500",icon:"🥈"},{name:"Bronze",min:10,color:"from-orange-600 to-red-600",icon:"🥉"}];function mv(){var g;const e=Rt(),[t,n]=d.useState({days:2,hours:14,minutes:17}),[r,i]=d.useState("global"),o=va[r]||va.global,a=o.find(f=>f.you),l=o.slice(0,3),c=o.slice(3);d.useEffect(()=>{const f=m=>{m.preventDefault(),e(-1)};return window.addEventListener("popstate",f),()=>{window.removeEventListener("popstate",f)}},[e]),d.useEffect(()=>{const f=setInterval(()=>{n(m=>m.minutes>0?{...m,minutes:m.minutes-1}:m.hours>0?{...m,hours:m.hours-1,minutes:59}:m.days>0?{...m,days:m.days-1,hours:23,minutes:59}:m)},6e4);return()=>clearInterval(f)},[]);const u=f=>{const m=Math.max(...o.map(b=>b.score)),k=f/m*100;return k>=90?ji[0]:k>=70?ji[1]:k>=40?ji[2]:ji[3]};return s.jsxs("div",{className:"min-h-screen bg-black text-white pt-12",children:[s.jsxs("div",{className:"flex items-center justify-between mb-5",children:[s.jsx("button",{onClick:()=>e(-1),className:"px-3 py-1.5 rounded-xl border border-white/10 bg-white/5 text-sm hover:bg-white/10 transition",children:"← Back"}),s.jsxs("div",{className:"text-center",children:[s.jsx("div",{className:"text-lg font-bold",children:"🏆 Leaderboard"}),s.jsxs("div",{className:"text-xs text-white/60",children:["Ends in ",t.days,"d ",t.hours,"h ",t.minutes,"m"]})]}),s.jsx("button",{className:"px-3 py-1.5 rounded-xl border border-white/10 bg-white/5 text-sm hover:bg-white/10 transition",children:"📊"})]}),s.jsxs("div",{className:`mb-5 rounded-2xl bg-gradient-to-r ${u(a==null?void 0:a.score).color} p-4 text-center relative overflow-hidden`,children:[s.jsx("div",{className:"absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -translate-y-10 translate-x-10 animate-pulse"}),s.jsx("div",{className:"absolute bottom-0 left-0 w-16 h-16 bg-white/5 rounded-full translate-y-8 -translate-x-8"}),s.jsxs("div",{className:"relative z-10",children:[s.jsx("div",{className:"text-2xl mb-1",children:u(a==null?void 0:a.score).icon}),s.jsxs("div",{className:"text-sm font-bold text-white",children:[u(a==null?void 0:a.score).name," League"]}),s.jsx("div",{className:"text-xs text-white/80",children:r==="friends"?"Competing with friends!":"You're competing with the best!"})]})]}),s.jsx("div",{className:"flex gap-2 mb-5",children:[{key:"global",label:"🌍 Global",count:"10M+"},{key:"friends",label:"👥 Friends",count:va.friends.length},{key:"india",label:"🇮🇳 India",count:"2.5M"}].map(f=>s.jsxs("button",{onClick:()=>i(f.key),className:`flex-1 px-2 py-2 rounded-xl text-xs font-semibold transition-all duration-300 ${r===f.key?"bg-lime-500 text-black shadow-lg scale-105":"border border-white/10 bg-white/5 hover:bg-white/10"}`,children:[s.jsx("div",{children:f.label}),s.jsx("div",{className:`text-[10px] ${r===f.key?"text-black/70":"text-white/60"}`,children:f.count})]},f.key))}),s.jsx("div",{className:"mb-5 rounded-2xl bg-gradient-to-r from-lime-500/20 to-green-500/20 border border-lime-500/30 p-3",children:s.jsxs("div",{className:"flex items-center justify-between",children:[s.jsxs("div",{className:"flex items-center gap-3",children:[s.jsx("div",{className:"w-10 h-10 rounded-xl bg-lime-500/20 grid place-items-center text-lg",children:"🧑‍💻"}),s.jsxs("div",{children:[s.jsx("div",{className:"font-bold text-lime-400 text-sm",children:"Your Position"}),s.jsxs("div",{className:"text-xs text-white/70 flex items-center gap-2",children:[s.jsxs("span",{children:["Rank #",a==null?void 0:a.rank]}),s.jsx("span",{className:`px-1.5 py-0.5 rounded-full text-[9px] font-bold ${a!=null&&a.trend.startsWith("+")?"bg-green-500/20 text-green-400":a!=null&&a.trend.startsWith("-")?"bg-red-500/20 text-red-400":"bg-gray-500/20 text-gray-400"}`,children:a==null?void 0:a.trend}),s.jsxs("span",{className:"text-white/50 text-[10px]",children:["in ",r==="global"?"Global":r==="friends"?"Friends":"India"]})]})]})]}),s.jsxs("div",{className:"text-right",children:[s.jsxs("div",{className:"text-lg font-bold text-lime-400",children:[a==null?void 0:a.score," ",ds]}),s.jsxs("div",{className:"text-xs text-white/60",children:["🔥 ",a==null?void 0:a.streak," streak"]})]})]})}),s.jsxs("div",{className:"mb-6",children:[s.jsx("h3",{className:"text-center text-sm font-semibold text-white/80 mb-4",children:"👑 Hall of Fame"}),s.jsxs("div",{className:"bg-gradient-to-b from-white/5 to-white/10 rounded-2xl p-4 border border-white/10 relative overflow-hidden",children:[s.jsx("div",{className:"absolute top-4 left-6 text-2xl opacity-40 animate-pulse",children:"🏆"}),s.jsx("div",{className:"absolute top-8 right-8 text-lg opacity-40 animate-bounce",style:{animationDelay:"1s"},children:"✨"}),s.jsx("div",{className:"absolute bottom-6 left-12 text-xl opacity-10 animate-pulse",style:{animationDelay:"2s"},children:"🥇"}),s.jsx("div",{className:"absolute bottom-4 right-6 text-lg opacity-40 animate-bounce",style:{animationDelay:"0.5s"},children:"⭐"}),s.jsxs("div",{className:"flex items-end justify-center gap-8 relative z-10",children:[l[1]&&s.jsxs("div",{className:"flex flex-col items-center",children:[s.jsxs("div",{className:"relative mb-2",children:[s.jsx(ki,{src:l[1].avatar,fallback:l[1].name,size:56}),s.jsx("div",{className:"absolute -bottom-1 left-1/2 -translate-x-1/2 w-7 h-7 bg-gradient-to-br from-gray-300 to-gray-500 rounded-full grid place-items-center text-sm font-bold text-black shadow-lg",children:"2"})]}),s.jsx("div",{className:"text-sm font-semibold mb-1 mt-1",children:Ni(l[1].name,8)}),s.jsxs("div",{className:"text-xs text-lime-400 font-bold",children:[l[1].score," ",ds]})]}),l[0]&&s.jsxs("div",{className:"flex flex-col items-center -mb-3",children:[s.jsxs("div",{className:"relative mb-2",children:[s.jsx(ki,{src:l[0].avatar,fallback:l[0].name,size:72}),s.jsx("div",{className:"absolute -top-3 left-1/2 -translate-x-1/2",children:s.jsx(hv,{})}),s.jsx("div",{className:"absolute -bottom-1 left-1/2 -translate-x-1/2 w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full grid place-items-center text-base font-bold text-black shadow-lg animate-pulse",children:"1"})]}),s.jsx("div",{className:"text-sm font-bold mb-1 mt-1",children:Ni(l[0].name,8)}),s.jsxs("div",{className:"text-sm text-lime-400 font-bold mb-1",children:[l[0].score," ",ds]}),s.jsx("div",{className:"px-2 py-1 bg-yellow-400/20 rounded-full text-[9px] text-yellow-400 font-bold",children:"CHAMPION"})]}),l[2]&&s.jsxs("div",{className:"flex flex-col items-center",children:[s.jsxs("div",{className:"relative mb-2",children:[s.jsx(ki,{src:l[2].avatar,fallback:l[2].name,size:56}),s.jsx("div",{className:"absolute -bottom-1 left-1/2 -translate-x-1/2 w-7 h-7 bg-gradient-to-br from-orange-600 to-red-600 rounded-full grid place-items-center text-sm font-bold text-white shadow-lg",children:"3"})]}),s.jsx("div",{className:"text-sm font-semibold mb-1 mt-1",children:Ni(l[2].name,8)}),s.jsxs("div",{className:"text-xs text-lime-400 font-bold",children:[l[2].score," ",ds]})]})]})]})]}),c.length>0&&s.jsxs("div",{className:"rounded-3xl bg-white/5 border border-white/10 p-2 mb-4",children:[s.jsxs("div",{className:"flex justify-between items-center mb-2 px-2",children:[s.jsx("h3",{className:"text-sm font-semibold",children:"Rankings"}),s.jsx("div",{className:"text-xs text-white/60",children:"Live updates"})]}),s.jsx("ul",{className:"space-y-1.5",children:c.map((f,m)=>s.jsxs("li",{className:`flex items-center justify-between px-3 py-2.5 rounded-xl transition-all duration-300 ${f.you?"bg-lime-500/90 text-black shadow-lg shadow-lime-500/20 scale-[1.02]":"bg-white/5 hover:bg-white/10"}`,style:{animationDelay:`${m*100}ms`,animation:"fadeInUp 0.6s ease-out forwards"},children:[s.jsxs("div",{className:"flex items-center gap-2.5",children:[s.jsx(xv,{n:f.rank,you:f.you}),s.jsx(ki,{src:f.avatar,fallback:f.name,size:36}),s.jsxs("div",{className:"flex flex-col leading-tight",children:[s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx("span",{className:"text-sm font-semibold",children:Ni(f.name,12)}),s.jsx("span",{className:"text-xs",children:f.country}),f.friend&&s.jsx("span",{className:"text-[9px] bg-blue-500/20 text-blue-400 px-1 py-0.5 rounded-full",children:"Friend"})]}),s.jsxs("div",{className:`text-xs flex items-center gap-1.5 ${f.you?"text-black/70":"text-white/60"}`,children:[s.jsx("span",{children:f.handle}),s.jsxs("span",{children:["🔥",f.streak]})]})]})]}),s.jsxs("div",{className:"flex flex-col items-end",children:[s.jsxs("div",{className:"flex items-center gap-1 text-sm font-bold",children:[s.jsx("span",{children:f.score}),s.jsx("span",{className:f.you?"opacity-90":"opacity-80",children:ds})]}),s.jsx("div",{className:`text-xs px-1.5 py-0.5 rounded-full font-bold ${f.trend.startsWith("+")?"bg-green-500/20 text-green-400":f.trend.startsWith("-")?"bg-red-500/20 text-red-400":"bg-gray-500/20 text-gray-400"}`,children:f.trend})]})]},`${r}-${f.rank}`))})]}),a&&a.rank>1&&s.jsxs("div",{className:"mb-4 p-3 rounded-2xl bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 text-center",children:[s.jsx("div",{className:"text-sm font-semibold mb-2",children:"🚀 Climb Higher!"}),s.jsx("div",{className:"text-xs text-white/70 mb-3",children:r==="friends"&&a.rank===1?"🎉 You're #1 among friends!":`You need ${Math.max(0,(((g=o[a.rank-2])==null?void 0:g.score)||0)-a.score+1)} more coins to reach rank #${a.rank-1}`}),!(r==="friends"&&a.rank===1)&&s.jsx("button",{onClick:()=>e("/play"),className:"px-5 py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl text-sm font-bold hover:scale-105 transition-transform",children:"Play Now 🎮"})]}),s.jsx("style",{jsx:!0,children:`
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
      `})]})}function ki({src:e,fallback:t,size:n=56}){const r=gv(t);return s.jsx("div",{className:"grid place-items-center rounded-full bg-white/10 overflow-hidden border-2 border-white/20",style:{width:n,height:n},children:e?s.jsx("img",{src:e,alt:"",className:"w-full h-full object-cover"}):s.jsx("span",{className:"text-sm font-semibold",children:r})})}function hv(){return s.jsxs("div",{className:"w-7 h-5 bg-gradient-to-t from-yellow-400 to-yellow-300 rounded-b-lg shadow-lg relative",children:[s.jsxs("svg",{viewBox:"0 0 100 40",className:"w-full h-full",children:[s.jsx("path",{d:"M15,35 L15,18 L35,28 L50,10 L65,28 L85,18 L85,35 Z",fill:"url(#crownGradient)"}),s.jsx("defs",{children:s.jsxs("linearGradient",{id:"crownGradient",x1:"0%",y1:"0%",x2:"0%",y2:"100%",children:[s.jsx("stop",{offset:"0%",stopColor:"#FCD34D"}),s.jsx("stop",{offset:"100%",stopColor:"#F59E0B"})]})})]}),s.jsx("div",{className:"absolute top-0.5 left-1/2 -translate-x-1/2 w-1 h-1 bg-red-400 rounded-full animate-pulse"})]})}function xv({n:e,you:t}){return s.jsx("div",{className:`w-7 h-7 grid place-items-center rounded-full text-sm font-bold ${t?"bg-black/10 text-black":"bg-white/10 text-white"}`,children:e})}function Ni(e,t=12){return(e==null?void 0:e.length)>t?e.slice(0,t-1)+"…":e}function gv(e=""){var n;const t=e.trim().split(/\s+/);return t.length===1?t[0].slice(0,2).toUpperCase():(t[0][0]+(((n=t[1])==null?void 0:n[0])||"")).toUpperCase()}const vv="qp_recent",yv="qp_review_snapshot",wd=[{id:Date.now()-864e5,type:"quiz",category:"General Knowledge",difficulty:"easy",score:8,total:10,accuracy:80,time:"02:31",ms:151e3,date:"Yesterday",timestamp:Date.now()-864e5,mode:"Quiz"},{id:Date.now()-1728e5,type:"practice",category:"Science",difficulty:"medium",score:12,total:15,accuracy:80,time:"06:02",ms:362e3,date:"2 days ago",timestamp:Date.now()-1728e5,mode:"Practice"},{id:Date.now()-2592e5,type:"quiz",category:"Fun Facts",difficulty:"easy",score:9,total:10,accuracy:90,time:"02:05",ms:125e3,date:"3 days ago",timestamp:Date.now()-2592e5,mode:"Quiz"}];function bv(){const[e,t]=d.useState("quizzes"),[n,r]=d.useState(null),[i,o]=d.useState(!1),[a,l]=d.useState("all"),[c,u]=d.useState("all"),[g,f]=d.useState("date"),[m,k]=d.useState([]),[b,j]=d.useState(!0),R=Rt(),v=N=>{if(!N)return"00:00";const h=Math.floor(N/1e3),x=Math.floor(h/60),w=h%60;return`${String(x).padStart(2,"0")}:${String(w).padStart(2,"0")}`},p=N=>{if(!N)return"Unknown";const h=new Date(N),w=Math.floor((new Date-h)/(1e3*60*60*24));return w===0?"Today":w===1?"Yesterday":w<7?`${w} days ago`:`${["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][h.getMonth()]} ${h.getDate()}`};d.useEffect(()=>{let N=!1;j(!0);const h=S=>{try{return JSON.parse(S)}catch{return null}},x=S=>encodeURIComponent(String(S).trim().toLowerCase().replace(/\s+/g,"-")),w=S=>{var A,W,B,re;const _=Number(S.ts??S.timestamp??S.id)||Date.now(),U=Number(S.ms)||0,V=Number(S.total)||0,J=Number(S.correct)||0,H=String(S.mode||"").toLowerCase().includes("practice")?"practice":"quiz",z=((A=S.snapshot)==null?void 0:A.category)||((W=S.snapshot)==null?void 0:W.categoryLabel)||S.cat||S.category||"Unknown",T=((B=S.snapshot)==null?void 0:B.categoryParam)||x(z),$=String(((re=S.snapshot)==null?void 0:re.difficulty)||S.difficulty||"medium").toLowerCase();return{id:S.id??_,type:H,category:z,categoryParam:T,difficulty:$,score:J,total:V,accuracy:V?Math.round(J/V*100):0,time:v(U),ms:U,date:p(_),timestamp:_,snapshot:S.snapshot??null,mode:S.mode||(H==="practice"?"Practice":"Quiz")}};try{const S=localStorage.getItem(vv),_=S?h(S):null,V=(Array.isArray(_)&&_.length?_:wd).map(w).filter(J=>J&&J.timestamp).sort((J,Z)=>Z.timestamp-J.timestamp);N||k(V)}catch(S){console.error("Error loading history:",S),N||k(wd)}finally{N||j(!1)}return()=>{N=!0}},[]);const y=d.useMemo(()=>{const N=new Set(m.map(h=>h.category));return Array.from(N)},[m]),E=d.useMemo(()=>{let N=m.filter(h=>e==="quizzes"?h.type==="quiz":h.type==="practice");return a!=="all"&&(N=N.filter(h=>h.category===a)),c!=="all"&&(N=N.filter(h=>h.difficulty===c)),N.sort((h,x)=>g==="date"?x.timestamp-h.timestamp:g==="score"?x.accuracy-h.accuracy:g==="time"?h.ms-x.ms:0),N},[m,e,a,c,g]),P=d.useMemo(()=>{if(E.length===0)return null;const N=E.reduce((S,_)=>S+_.score,0),h=E.reduce((S,_)=>S+_.total,0),x=h?Math.round(N/h*100):0,w=E.reduce((S,_)=>S+_.ms,0);return{count:E.length,avgAccuracy:x,totalTime:v(w),bestScore:Math.max(...E.map(S=>S.accuracy))}},[E]),L=N=>N>=80?"text-green-400":N>=60?"text-blue-400":N>=40?"text-yellow-400":"text-red-400";return b?s.jsx("div",{className:"min-h-full bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900 flex items-center justify-center",children:s.jsx("div",{className:"text-white",children:"Loading history..."})}):s.jsxs("div",{className:"min-h-full bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900 pt-12",children:[s.jsx("div",{className:"",children:s.jsxs("div",{className:"px-4 pt-4 pb-4",children:[s.jsxs("div",{className:"flex items-center justify-between mb-3",children:[s.jsx("button",{onClick:()=>R("/profile",{replace:!0}),className:"px-3 py-1.5 rounded-xl border border-white/20 bg-white/10 text-white text-sm flex items-center gap-1",children:"← Back"}),s.jsx("button",{onClick:()=>o(!i),className:"p-2 rounded-xl border border-white/20 bg-white/10 text-white",children:s.jsx(kv,{})})]}),s.jsx("h1",{className:"text-2xl font-bold text-white mb-1",children:"History"}),s.jsx("p",{className:"text-white/70 text-sm",children:"Track your progress"})]})}),s.jsxs("div",{className:"px-4 pb-20",children:[s.jsx("div",{className:`
             sticky top-0 z-[60] isolate
            -mx-4 px-4
            py-4 mb-2
            bg-gray-900/95
            backdrop-blur-md
            border-b border-white/10
        `,children:s.jsx("div",{className:"flex items-center",children:s.jsx("div",{className:"inline-flex p-1 rounded-2xl bg-white/10 border border-white/20",children:[{value:"quizzes",label:"Quizzes",icon:"🎯"},{value:"practice",label:"Practice",icon:"📝"}].map(N=>s.jsxs("button",{onClick:()=>t(N.value),className:`px-12 py-2 text-sm rounded-xl transition-all duration-200 ${e===N.value?"bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg":"text-white/70 hover:text-white"}`,children:[s.jsx("span",{className:"mr-1",children:N.icon}),N.label]},N.value))})})}),P&&s.jsx("div",{className:"mb-4 p-4 rounded-2xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-white/20",children:s.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-3",children:[s.jsx(Si,{label:"Total",value:P.count}),s.jsx(Si,{label:"Avg Score",value:`${P.avgAccuracy}%`,color:L(P.avgAccuracy)}),s.jsx(Si,{label:"Best Score",value:`${P.bestScore}%`,color:"text-green-400"}),s.jsx(Si,{label:"Total Time",value:P.totalTime})]})}),i&&s.jsx("div",{className:"mb-4 p-4 rounded-2xl bg-white/10 border border-white/20",children:s.jsxs("div",{className:"space-y-3",children:[s.jsxs("div",{children:[s.jsx("label",{className:"text-xs text-white/60 mb-1 block",children:"Category"}),s.jsxs("select",{value:a,onChange:N=>l(N.target.value),className:"w-full px-3 py-2 rounded-xl bg-black/30 border border-white/20 text-white text-sm",children:[s.jsx("option",{value:"all",children:"All Categories"}),y.map(N=>s.jsx("option",{value:N,children:N},N))]})]}),s.jsxs("div",{className:"flex gap-2",children:[s.jsxs("div",{className:"flex-1",children:[s.jsx("label",{className:"text-xs text-white/60 mb-1 block",children:"Difficulty"}),s.jsxs("select",{value:c,onChange:N=>u(N.target.value),className:"w-full px-3 py-2 rounded-xl bg-black/30 border border-white/20 text-white text-sm",children:[s.jsx("option",{value:"all",children:"All"}),s.jsx("option",{value:"easy",children:"Easy"}),s.jsx("option",{value:"medium",children:"Medium"}),s.jsx("option",{value:"hard",children:"Hard"})]})]}),s.jsxs("div",{className:"flex-1",children:[s.jsx("label",{className:"text-xs text-white/60 mb-1 block",children:"Sort By"}),s.jsxs("select",{value:g,onChange:N=>f(N.target.value),className:"w-full px-3 py-2 rounded-xl bg-black/30 border border-white/20 text-white text-sm",children:[s.jsx("option",{value:"date",children:"Date"}),s.jsx("option",{value:"score",children:"Score"}),s.jsx("option",{value:"time",children:"Time"})]})]})]})]})}),E.length===0?s.jsxs("div",{className:"text-center py-12",children:[s.jsx("div",{className:"text-4xl mb-3",children:"📚"}),s.jsxs("p",{className:"text-white/60",children:["No ",e," history yet"]}),s.jsx("p",{className:"text-white/40 text-sm mt-1",children:"Start playing to see your progress here!"})]}):s.jsx("div",{className:"space-y-3",children:E.map((N,h)=>s.jsx(wv,{item:N,index:h,onClick:()=>r(N)},N.id))})]}),n&&s.jsx(jv,{item:n,onClose:()=>r(null)})]})}function Si({label:e,value:t,color:n="text-white"}){return s.jsxs("div",{className:"text-center",children:[s.jsx("div",{className:"text-xs text-white/60 mb-1",children:e}),s.jsx("div",{className:`text-lg font-bold ${n}`,children:t})]})}function wv({item:e,index:t,onClick:n}){const r=a=>a>=80?"from-green-500/20 to-green-600/10 border-green-500/30":a>=60?"from-blue-500/20 to-blue-600/10 border-blue-500/30":a>=40?"from-yellow-500/20 to-yellow-600/10 border-yellow-500/30":"from-red-500/20 to-red-600/10 border-red-500/30",o=(a=>{const l=a==null?void 0:a.toLowerCase();return l==="easy"?{bg:"bg-green-500/20",text:"text-green-400",border:"border-green-500/30"}:l==="medium"?{bg:"bg-yellow-500/20",text:"text-yellow-400",border:"border-yellow-500/30"}:l==="hard"?{bg:"bg-red-500/20",text:"text-red-400",border:"border-red-500/30"}:{bg:"bg-gray-500/20",text:"text-gray-400",border:"border-gray-500/30"}})(e.difficulty);return s.jsxs("div",{onClick:n,className:`
        relative rounded-2xl p-4 cursor-pointer
        bg-gradient-to-br ${r(e.accuracy)}
        border transform transition-all duration-300 hover:scale-[1.02]
      `,children:[s.jsxs("div",{className:"flex items-start justify-between mb-3",children:[s.jsxs("div",{className:"flex-1",children:[s.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[s.jsx("span",{className:"text-lg",children:e.type==="quiz"?"🎯":"📝"}),s.jsx("h3",{className:"font-semibold text-white",children:e.category})]}),s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx("span",{className:`px-2 py-0.5 rounded-full text-xs ${o.bg} ${o.text} ${o.border} border`,children:e.difficulty}),s.jsx("span",{className:"text-xs text-white/50",children:e.date})]})]}),s.jsxs("div",{className:"text-right",children:[s.jsxs("div",{className:`text-2xl font-bold ${e.accuracy>=80?"text-green-400":e.accuracy>=60?"text-blue-400":e.accuracy>=40?"text-yellow-400":"text-red-400"}`,children:[e.accuracy,"%"]}),s.jsxs("div",{className:"text-xs text-white/60",children:[e.score,"/",e.total]})]})]}),s.jsxs("div",{className:"flex items-center justify-between text-xs",children:[s.jsxs("div",{className:"flex items-center gap-3 text-white/60",children:[s.jsxs("span",{children:["⏱ ",e.time]}),s.jsx("span",{children:e.mode})]}),s.jsx("span",{className:"text-white/40",children:"Tap to review →"})]})]})}function jv({item:e,onClose:t}){const n=Rt();return d.useEffect(()=>{const r=i=>{i.key==="Escape"&&t()};return document.addEventListener("keydown",r),()=>document.removeEventListener("keydown",r)},[t]),s.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80",onClick:t,children:s.jsxs("div",{className:"w-full max-w-md bg-gray-900 rounded-3xl p-6 border border-white/20",onClick:r=>r.stopPropagation(),children:[s.jsxs("div",{className:"flex items-center justify-between mb-4",children:[s.jsx("h2",{className:"text-xl font-bold text-white",children:"Quiz Details"}),s.jsx("button",{onClick:t,className:"p-2 rounded-xl bg-white/10 hover:bg-white/20 transition-colors text-white",children:"✕"})]}),s.jsxs("div",{className:"space-y-4",children:[s.jsxs("div",{className:"p-4 rounded-2xl bg-white/5 border border-white/10",children:[s.jsxs("div",{className:"flex items-center justify-between mb-2",children:[s.jsx("span",{className:"text-white/60",children:"Category"}),s.jsx("span",{className:"text-white font-medium",children:e.category})]}),s.jsxs("div",{className:"flex items-center justify-between mb-2",children:[s.jsx("span",{className:"text-white/60",children:"Difficulty"}),s.jsx("span",{className:`${e.difficulty==="easy"?"text-green-400":e.difficulty==="medium"?"text-yellow-400":"text-red-400"} font-medium`,children:e.difficulty})]}),s.jsxs("div",{className:"flex items-center justify-between mb-2",children:[s.jsx("span",{className:"text-white/60",children:"Score"}),s.jsxs("span",{className:"text-white font-medium",children:[e.score,"/",e.total]})]}),s.jsxs("div",{className:"flex items-center justify-between mb-2",children:[s.jsx("span",{className:"text-white/60",children:"Accuracy"}),s.jsxs("span",{className:`${e.accuracy>=80?"text-green-400":e.accuracy>=60?"text-blue-400":"text-yellow-400"} font-medium`,children:[e.accuracy,"%"]})]}),s.jsxs("div",{className:"flex items-center justify-between",children:[s.jsx("span",{className:"text-white/60",children:"Time"}),s.jsx("span",{className:"text-white font-medium",children:e.time})]})]}),e.snapshot&&s.jsx("button",{onClick:()=>{t(),localStorage.setItem(yv,JSON.stringify(e.snapshot)),n(`/quiz/${e.categoryParam}/start?review=1&attempt=${e.id}`,{state:{reviewFrom:"history",historyPath:"/profile/history"}})},className:"w-full py-3 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium hover:opacity-90 transition-opacity",children:"Review Answers"}),s.jsx("button",{onClick:()=>{var r;t(),n(`/quiz/${e.categoryParam}/start`,{state:{mode:"quiz",retake:!0,difficulty:e.difficulty,count:e.total,timer:((r=e.snapshot)==null?void 0:r.timer)||{type:"per_q",seconds:45},fromHistory:!0}})},className:"w-full py-3 rounded-2xl border border-white/20 text-white font-medium hover:bg-white/10 transition-colors",children:"Retake Quiz"})]})]})})}function kv(){return s.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:s.jsx("path",{d:"M3 6h18M7 12h10M10 18h4",strokeLinecap:"round",strokeLinejoin:"round"})})}const Nv=d.createContext({});function lm(e){const t=d.useRef(null);return t.current===null&&(t.current=e()),t.current}const Sv=typeof window<"u",Cv=Sv?d.useLayoutEffect:d.useEffect,cm=d.createContext(null);function Ev(e){return typeof e=="object"&&e!==null}function _v(e){return Ev(e)&&"offsetHeight"in e}const Rv=d.createContext({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"});class Pv extends d.Component{getSnapshotBeforeUpdate(t){const n=this.props.childRef.current;if(n&&t.isPresent&&!this.props.isPresent){const r=n.offsetParent,i=_v(r)&&r.offsetWidth||0,o=this.props.sizeRef.current;o.height=n.offsetHeight||0,o.width=n.offsetWidth||0,o.top=n.offsetTop,o.left=n.offsetLeft,o.right=i-o.width-o.left}return null}componentDidUpdate(){}render(){return this.props.children}}function Tv({children:e,isPresent:t,anchorX:n,root:r}){const i=d.useId(),o=d.useRef(null),a=d.useRef({width:0,height:0,top:0,left:0,right:0}),{nonce:l}=d.useContext(Rv);return d.useInsertionEffect(()=>{const{width:c,height:u,top:g,left:f,right:m}=a.current;if(t||!o.current||!c||!u)return;const k=n==="left"?`left: ${f}`:`right: ${m}`;o.current.dataset.motionPopId=i;const b=document.createElement("style");l&&(b.nonce=l);const j=r??document.head;return j.appendChild(b),b.sheet&&b.sheet.insertRule(`
          [data-motion-pop-id="${i}"] {
            position: absolute !important;
            width: ${c}px !important;
            height: ${u}px !important;
            ${k}px !important;
            top: ${g}px !important;
          }
        `),()=>{j.contains(b)&&j.removeChild(b)}},[t]),s.jsx(Pv,{isPresent:t,childRef:o,sizeRef:a,children:d.cloneElement(e,{ref:o})})}const zv=({children:e,initial:t,isPresent:n,onExitComplete:r,custom:i,presenceAffectsLayout:o,mode:a,anchorX:l,root:c})=>{const u=lm(Lv),g=d.useId();let f=!0,m=d.useMemo(()=>(f=!1,{id:g,initial:t,isPresent:n,custom:i,onExitComplete:k=>{u.set(k,!0);for(const b of u.values())if(!b)return;r&&r()},register:k=>(u.set(k,!1),()=>u.delete(k))}),[n,u,r]);return o&&f&&(m={...m}),d.useMemo(()=>{u.forEach((k,b)=>u.set(b,!1))},[n]),d.useEffect(()=>{!n&&!u.size&&r&&r()},[n]),a==="popLayout"&&(e=s.jsx(Tv,{isPresent:n,anchorX:l,root:c,children:e})),s.jsx(cm.Provider,{value:m,children:e})};function Lv(){return new Map}function Iv(e=!0){const t=d.useContext(cm);if(t===null)return[!0,null];const{isPresent:n,onExitComplete:r,register:i}=t,o=d.useId();d.useEffect(()=>{if(e)return i(o)},[e]);const a=d.useCallback(()=>e&&r&&r(o),[o,r,e]);return!n&&r?[!1,a]:[!0]}const Ci=e=>e.key||"";function jd(e){const t=[];return d.Children.forEach(e,n=>{d.isValidElement(n)&&t.push(n)}),t}const ya=({children:e,custom:t,initial:n=!0,onExitComplete:r,presenceAffectsLayout:i=!0,mode:o="sync",propagate:a=!1,anchorX:l="left",root:c})=>{const[u,g]=Iv(a),f=d.useMemo(()=>jd(e),[e]),m=a&&!u?[]:f.map(Ci),k=d.useRef(!0),b=d.useRef(f),j=lm(()=>new Map),[R,v]=d.useState(f),[p,y]=d.useState(f);Cv(()=>{k.current=!1,b.current=f;for(let L=0;L<p.length;L++){const N=Ci(p[L]);m.includes(N)?j.delete(N):j.get(N)!==!0&&j.set(N,!1)}},[p,m.length,m.join("-")]);const E=[];if(f!==R){let L=[...f];for(let N=0;N<p.length;N++){const h=p[N],x=Ci(h);m.includes(x)||(L.splice(N,0,h),E.push(h))}return o==="wait"&&E.length&&(L=E),y(jd(L)),v(f),null}const{forceRender:P}=d.useContext(Nv);return s.jsx(s.Fragment,{children:p.map(L=>{const N=Ci(L),h=a&&!u?!1:f===p||m.includes(N),x=()=>{if(j.has(N))j.set(N,!0);else return;let w=!0;j.forEach(S=>{S||(w=!1)}),w&&(P==null||P(),y(b.current),a&&(g==null||g()),r&&r())};return s.jsx(zv,{isPresent:h,initial:!k.current||n?void 0:!1,custom:t,presenceAffectsLayout:i,mode:o,root:c,onExitComplete:h?void 0:x,anchorX:l,children:L},N)})})},Fv=()=>{const[e,t]=d.useState(null);d.useEffect(()=>{if(typeof window<"u"){const I=sessionStorage.getItem("navigationSource");I&&t(I)}},[]);const n=I=>{typeof window<"u"&&(sessionStorage.setItem("navigationSource","/rewards"),window.location.href=I)},r=()=>{if(typeof window<"u"){const I=sessionStorage.getItem("navigationSource");window.location.href="/profile",sessionStorage.removeItem("navigationSource")}},i=[{id:1,type:"coins",value:100,icon:"🪙",label:"100 Coins",cost:0},{id:2,type:"life",value:1,icon:"❤️",label:"1 Life",cost:50},{id:3,type:"coins",value:200,icon:"🪙",label:"200 Coins",cost:0},{id:4,type:"wildcard",value:1,icon:"🃏",label:"Wild Card",cost:100},{id:5,type:"coins",value:500,icon:"💰",label:"500 Coins",cost:0,milestone:!0},{id:6,type:"fifty-fifty",value:1,icon:"➗",label:"50:50",cost:150},{id:7,type:"life",value:2,icon:"❤️",label:"2 Lives",cost:100},{id:8,type:"vehicle",value:"bike",icon:"🏍️",label:"Motorcycle",cost:300},{id:9,type:"mystery",value:1,icon:"🎁",label:"Mystery Box",cost:200},{id:10,type:"coins",value:750,icon:"💰",label:"750 Coins",cost:0,milestone:!0},{id:11,type:"life",value:3,icon:"❤️",label:"3 Lives",cost:150},{id:12,type:"wildcard",value:2,icon:"🃏",label:"2x Wild Card",cost:250},{id:13,type:"vehicle",value:"car",icon:"🚗",label:"Car",cost:500},{id:14,type:"fifty-fifty",value:2,icon:"➗",label:"2x 50:50",cost:300},{id:15,type:"coins",value:1e3,icon:"💎",label:"1000 Coins",cost:0,milestone:!0}],o={cycle:{icon:"🚴",name:"Bicycle"},bike:{icon:"🏍️",name:"Motorcycle"},car:{icon:"🚗",name:"Car"}},[a,l]=d.useState(4),[c,u]=d.useState(1390),[g,f]=d.useState(4),[m,k]=d.useState(!1),[b,j]=d.useState(!1),[R,v]=d.useState(0),[p,y]=d.useState(0),[E,P]=d.useState("cycle"),[L,N]=d.useState([{type:"vehicle",icon:"🚴",name:"Bicycle",count:1},{type:"wildcard",icon:"🃏",name:"Wild Card",count:2},{type:"fifty-fifty",icon:"➗",name:"50:50 Helper",count:1}]),[h,x]=d.useState([0,1,2,3]),[w,S]=d.useState(!1),[_,U]=d.useState(!1),[V,J]=d.useState(null),[Z,H]=d.useState(null),[z,T]=d.useState(!1),[$,A]=d.useState(null),[W,B]=d.useState(!1),re=d.useRef(null),ie=d.useRef(null),ae=d.useRef(null);d.useEffect(()=>{re.current=new Audio("/sounds/reward.mp3"),ie.current=new Audio("/sounds/reward_progress.mp3"),[re,ie].forEach(I=>{var D;(D=I.current)==null||D.addEventListener("error",()=>{console.log("Sound file not found")})})},[]);const pe=I=>{try{I.current&&(I.current.currentTime=0,I.current.play().catch(D=>console.log("Audio play failed:",D)))}catch(D){console.log("Sound play error:",D)}},M=(I,D)=>{if(I>a){H(D),U(!0);return}I===a&&ne(I,D)},q=I=>{var X;const D=(X=ae.current)==null?void 0:X.querySelector(`[data-index="${I}"]`);if(D){const ue=D.getBoundingClientRect(),C=window.pageYOffset||document.documentElement.scrollTop,Y=ue.top+C-window.innerHeight/2+50;window.scrollTo({top:Y,behavior:"smooth"})}},ne=(I,D)=>{if(!h.includes(I)){if(D.cost>0&&c<D.cost){H(D),U(!0);return}D.cost>0&&u(X=>X-D.cost),pe(re),S(!0),H(D),x(X=>[...X,I]),setTimeout(()=>{S(!1),D.type==="coins"?(v(D.value),k(!0),setTimeout(()=>{u(X=>X+D.value),setTimeout(()=>{k(!1),v(0)},500)},300)):D.type==="life"?(y(D.value),j(!0),setTimeout(()=>{f(X=>X+D.value),setTimeout(()=>{j(!1),y(0)},500)},300)):(A({icon:D.icon,startX:window.innerWidth/2,startY:window.innerHeight/2}),setTimeout(()=>{A(null),B(!0),K(D),D.type==="vehicle"&&P(D.value),setTimeout(()=>{B(!1)},500)},800)),setTimeout(()=>{if(a<i.length-1){const X=a+1;q(X),setTimeout(()=>{T(!0),pe(ie),l(X),setTimeout(()=>{T(!1)},500)},300)}},1200)},1500)}},K=I=>{N(D=>D.find(ue=>ue.icon===I.icon)?D.map(ue=>ue.icon===I.icon?{...ue,count:ue.count+1}:ue):[...D,{type:I.type,icon:I.icon,name:I.label,count:1}])},G=I=>30+I*100,oe=()=>30+a*100;return s.jsxs("div",{className:"rewards-page",children:[s.jsx("style",{jsx:!0,children:`
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
      `}),s.jsx("div",{className:"non-sticky-header",children:s.jsx("button",{className:"back-button",onClick:r,children:"← Back"})}),s.jsxs("div",{className:"sticky-section",children:[s.jsxs("div",{className:"header-wrapper",children:[s.jsxs("div",{className:"title-row",children:[s.jsxs("div",{children:[s.jsx("h1",{className:"title",children:"Rewards"}),s.jsx("p",{className:"subtitle",children:"Claim amazing prizes"})]}),s.jsx("button",{className:"play-quiz-btn",onClick:()=>n("/play"),children:"Play Quiz"})]}),s.jsx("div",{className:"balance-row",children:s.jsx("div",{className:"balance-item",children:s.jsxs("div",{children:[s.jsx("div",{className:"balance-label",children:"Balance"}),s.jsxs("div",{className:`balance-value ${m?"animating":""}`,children:[c.toLocaleString()," 🪙",m&&s.jsxs("span",{className:"value-change",children:["+",R]})]})]})})})]}),s.jsx("div",{className:"stats-cards-container",children:s.jsxs("div",{className:"info-grid",children:[s.jsxs("div",{className:"info-card",children:[s.jsx("div",{className:"info-icon",children:"❤️"}),s.jsxs("div",{className:`info-value ${b?"animating":""}`,children:[g,b&&s.jsxs("span",{className:"value-change",children:["+",p]})]}),s.jsx("div",{className:"info-label",children:"Lives"})]}),s.jsxs("div",{className:"info-card",children:[s.jsx("div",{className:"info-icon",children:"⭐"}),s.jsx("div",{className:"info-value",children:"5"}),s.jsx("div",{className:"info-label",children:"Level"})]}),s.jsxs("div",{className:"info-card",children:[s.jsx("div",{className:"info-icon",children:o[E].icon}),s.jsx("div",{className:"info-value",children:o[E].name}),s.jsx("div",{className:"info-label",children:"Vehicle"})]}),s.jsxs("div",{className:`cards-section ${W?"animating":""}`,children:[s.jsx("div",{className:"cards-label",children:"Your Cards"}),s.jsx("div",{className:"card-grid",children:L.map((I,D)=>s.jsxs("div",{className:"card-item",onClick:()=>J(I),children:[s.jsxs("div",{className:"large-card",children:[s.jsx("div",{className:"large-card-icon",children:I.icon}),s.jsx("div",{className:"large-card-name",children:I.name})]}),I.count>1&&s.jsx("div",{className:"card-count-badge",children:I.count})]},D))})]})]})})]}),s.jsx("div",{className:"scrollable-journey",children:s.jsx("div",{className:"journey-container",ref:ae,children:s.jsxs("div",{className:"journey-track",children:[s.jsx("div",{className:"curvy-road",children:s.jsxs("svg",{className:"road-svg",viewBox:"0 0 60 1500",preserveAspectRatio:"none",children:[s.jsx("defs",{children:s.jsxs("linearGradient",{id:"roadGradient",x1:"0%",y1:"0%",x2:"0%",y2:"100%",children:[s.jsx("stop",{offset:"0%",stopColor:"#5E5CE6"}),s.jsx("stop",{offset:"100%",stopColor:"#5E5CE6"})]})}),s.jsx("path",{className:"road-path",d:"M 30 0 Q 45 50, 30 100 T 30 200 Q 15 250, 30 300 T 30 400 Q 45 450, 30 500 T 30 600 Q 15 650, 30 700 T 30 800 Q 45 850, 30 900 T 30 1000 Q 15 1050, 30 1100 T 30 1200 Q 45 1250, 30 1300 T 30 1400 L 30 1500"}),s.jsx("path",{className:"road-progress",d:"M 30 0 Q 45 50, 30 100 T 30 200 Q 15 250, 30 300 T 30 400 Q 45 450, 30 500 T 30 600 Q 15 650, 30 700 T 30 800 Q 45 850, 30 900 T 30 1000 Q 15 1050, 30 1100 T 30 1200 Q 45 1250, 30 1300 T 30 1400 L 30 1500",strokeDasharray:"1500",strokeDashoffset:1500-a/(i.length-1)*1500})]})}),s.jsxs("div",{className:"avatar-tracker",style:{top:`${oe()}px`},children:[s.jsx("img",{className:"avatar-img",src:"/profile/avatar.png",alt:"You",onError:I=>{I.target.style.display="none"}}),s.jsx("div",{className:"tracker-vehicle",children:o[E].icon})]}),s.jsx("div",{className:"rewards-list",children:i.map((I,D)=>{const X=D%2===0,ue=D>a,C=h.includes(D),Y=D===a;return s.jsx("div",{className:"reward-row","data-index":D,style:{top:`${G(D)}px`},children:s.jsxs("div",{className:`reward-item ${X?"left":"right"}`,children:[s.jsxs("div",{className:`checkpoint ${Y?"current":C?"claimed":ue?"locked":""}`,onClick:()=>M(D,I),children:[s.jsx("div",{className:"checkpoint-icon",children:I.icon}),s.jsx("div",{className:"checkpoint-value",children:I.label.split(" ")[0]}),I.milestone&&s.jsx("div",{className:"milestone-badge",children:"BONUS"}),ue&&s.jsx("div",{className:"lock-icon",children:"🔒"})]}),s.jsxs("div",{className:"reward-info",children:[s.jsx("div",{className:"reward-name",children:I.label}),s.jsxs("div",{className:"step-label",children:["Step ",D+1]})]})]})},I.id)})})]})})}),$&&s.jsx("div",{className:"flying-card",style:{left:`${$.startX}px`,top:`${$.startY}px`,"--startX":`${$.startX}px`},children:$.icon}),s.jsx(ya,{children:V&&s.jsx("div",{className:"claim-overlay",onClick:()=>J(null),children:s.jsxs("div",{className:"modal",onClick:I=>I.stopPropagation(),children:[s.jsx("div",{className:"modal-icon",children:V.icon}),s.jsx("div",{className:"card-detail-name",children:V.name}),s.jsxs("div",{className:"card-detail-desc",children:["You have ",V.count," of these cards"]}),s.jsx("div",{className:"modal-buttons",children:s.jsx("button",{className:"modal-btn modal-btn-secondary",onClick:()=>J(null),children:"Close"})})]})})}),s.jsx(ya,{children:w&&Z&&s.jsx("div",{className:"claim-overlay",children:s.jsxs("div",{className:"modal",children:[s.jsx("div",{className:"modal-title",children:"WELL DONE!"}),s.jsx("div",{className:"modal-subtitle",children:"Here's a reward for you."}),s.jsx("div",{className:"modal-icon",children:Z.icon}),s.jsxs("div",{className:"modal-value",children:["+",Z.value," ",Z.type==="coins"?"Coins":Z.type==="life"?"Lives":Z.label]})]})})}),s.jsx(ya,{children:_&&Z&&s.jsx("div",{className:"claim-overlay",onClick:()=>U(!1),children:s.jsxs("div",{className:"modal",onClick:I=>I.stopPropagation(),children:[s.jsx("div",{className:"modal-icon",children:"🪙"}),s.jsx("div",{className:"modal-title",children:"Need More Coins"}),s.jsx("div",{className:"modal-subtitle",children:Z.cost>0?`You need ${Z.cost-c} more coins`:"Complete previous rewards first"}),s.jsxs("div",{className:"modal-buttons",children:[s.jsx("button",{className:"modal-btn modal-btn-primary",onClick:()=>n("/play"),children:"Play Quiz"}),s.jsx("button",{className:"modal-btn modal-btn-secondary",onClick:()=>U(!1),children:"Cancel"})]})]})})})]})},Ei=[{id:1,name:"First Win",emoji:"🏆",unlocked:!0,hint:"Win your first quiz",progress:100,color:"#FFD700"},{id:2,name:"On Fire",emoji:"🔥",unlocked:!0,hint:"3-day winning streak",progress:100,color:"#FF6B35"},{id:3,name:"Perfectionist",emoji:"⭐",unlocked:!1,hint:"Score 10/10 in any quiz",progress:75,color:"#9333EA"},{id:4,name:"Early Bird",emoji:"🌅",unlocked:!0,hint:"Play before 9 AM",progress:100,color:"#F59E0B"},{id:5,name:"Scholar",emoji:"🎓",unlocked:!1,hint:"Master 5 categories",progress:40,color:"#3B82F6"},{id:6,name:"Lightning",emoji:"⚡",unlocked:!1,hint:"Complete in under 2 minutes",progress:20,color:"#10B981"},{id:7,name:"Champion",emoji:"👑",unlocked:!1,hint:"Win 50 quizzes",progress:30,color:"#EC4899"},{id:8,name:"Explorer",emoji:"🗺️",unlocked:!1,hint:"Try all categories",progress:60,color:"#06B6D4"},{id:9,name:"Strategist",emoji:"🧠",unlocked:!0,hint:"Use 3 power-ups wisely",progress:100,color:"#8B5CF6"}];function Mv(){const[e,t]=d.useState(null),n=Ei.filter(i=>i.unlocked).length,r=Math.round(n/Ei.length*100);return s.jsxs("div",{className:"badges-screen",children:[s.jsx("style",{jsx:!0,children:`
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
      `}),s.jsxs("div",{className:"header",children:[s.jsx("button",{className:"back-button",onClick:()=>window.history.back(),children:"← Back"}),s.jsxs("div",{className:"title-section",children:[s.jsx("h1",{className:"main-title",children:"Badge Collection"}),s.jsx("p",{className:"subtitle",children:"Unlock achievements and show your skills"})]})]}),s.jsxs("div",{className:"progress-card",children:[s.jsxs("div",{className:"progress-header",children:[s.jsx("span",{className:"progress-label",children:"Collection Progress"}),s.jsxs("span",{className:"progress-value",children:[n,"/",Ei.length]})]}),s.jsx("div",{className:"progress-bar-container",children:s.jsx("div",{className:"progress-bar-fill",style:{width:`${r}%`}})})]}),s.jsx("div",{className:"badges-grid",children:Ei.map(i=>s.jsxs("div",{className:`badge-card ${i.unlocked?"unlocked":""}`,style:{"--badge-color":i.color},onClick:()=>t(i),children:[s.jsx("div",{className:"badge-glow"}),s.jsx("div",{className:"badge-emoji",children:i.emoji}),s.jsx("div",{className:"badge-name",children:i.name}),!i.unlocked&&s.jsxs(s.Fragment,{children:[s.jsx("div",{className:"badge-progress",children:s.jsx("div",{className:"badge-progress-fill",style:{width:`${i.progress}%`}})}),s.jsx("div",{className:"lock-indicator",children:"🔒"})]})]},i.id))}),s.jsxs("div",{className:"tips-card",children:[s.jsxs("div",{className:"tips-title",children:[s.jsx("span",{children:"💡"}),s.jsx("span",{children:"Pro Tip"})]}),s.jsx("div",{className:"tips-content",children:"Complete daily challenges and maintain streaks to unlock rare badges faster. Each badge gives you bonus XP and special rewards!"})]}),e&&s.jsx("div",{className:"badge-modal",onClick:()=>t(null),children:s.jsxs("div",{className:"modal-content",onClick:i=>i.stopPropagation(),children:[s.jsx("div",{className:`modal-badge ${e.unlocked?"":"locked"}`,children:e.emoji}),s.jsx("h3",{className:"modal-title",children:e.name}),s.jsx("span",{className:`modal-status ${e.unlocked?"":"locked"}`,children:e.unlocked?"✓ Unlocked":"🔒 Locked"}),s.jsx("p",{className:"modal-description",children:e.hint}),!e.unlocked&&s.jsxs("div",{className:"modal-progress-section",children:[s.jsx("div",{className:"modal-progress-label",children:"Progress"}),s.jsx("div",{className:"modal-progress-bar",children:s.jsx("div",{className:"modal-progress-fill",style:{width:`${e.progress}%`,"--badge-color":e.color}})}),s.jsxs("div",{className:"modal-progress-text",children:[e.progress,"%"]})]}),s.jsx("button",{className:"modal-close",onClick:()=>t(null),children:e.unlocked?"Awesome!":"Keep Going!"})]})})]})}const Dv=[{id:1,title:"Quiz Master",subtitle:"Play 10 quizzes",current:7,target:10,reward:150,claimed:!1,icon:"🎯",color:"#FF6B6B"},{id:2,title:"Coin Collector",subtitle:"Earn 2,000 coins",current:1240,target:2e3,reward:200,claimed:!1,icon:"💰",color:"#4ECDC4"},{id:3,title:"Winning Streak",subtitle:"Win 3 in a row",current:3,target:3,reward:100,claimed:!0,icon:"🔥",color:"#FFD93D"},{id:4,title:"Speed Demon",subtitle:"Complete 5 under 2min",current:2,target:5,reward:300,claimed:!1,icon:"⚡",color:"#A8E6CF"},{id:5,title:"Perfect Score",subtitle:"Get 100% accuracy",current:0,target:1,reward:250,claimed:!1,icon:"⭐",color:"#C7B8FF"}];function Ov(){const[e,t]=d.useState(Dv),[n,r]=d.useState(null),[i,o]=d.useState(1890),[a,l]=d.useState(!1),[c,u]=d.useState([]),g=e.length,f=e.filter(b=>b.current>=b.target).length,m=Math.round(f/g*100);d.useEffect(()=>{const b=setInterval(()=>{u(j=>{const R={id:Date.now(),x:Math.random()*100,y:Math.random()*100,size:Math.random()*20+10};return[...j.slice(-4),R]})},3e3);return()=>clearInterval(b)},[]);const k=(b,j)=>{r(b),navigator.vibrate&&navigator.vibrate([20,10,20]),setTimeout(()=>{t(R=>R.map(v=>v.id===b?{...v,claimed:!0}:v)),o(R=>R+j),r(null),l(!0),setTimeout(()=>l(!1),2e3)},600)};return s.jsxs("div",{className:"achievements-screen",children:[s.jsx("style",{jsx:!0,children:`
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
      `}),s.jsxs("div",{className:"floating-shapes",children:[s.jsx("div",{className:"shape shape-1"}),s.jsx("div",{className:"shape shape-2"})]}),s.jsxs("div",{className:"header",children:[s.jsx("button",{className:"back-button",onClick:()=>window.history.back(),children:"← Back"}),s.jsxs("div",{className:"coins-display",children:["🪙 ",i.toLocaleString()]}),s.jsxs("div",{className:"title-section",children:[s.jsx("h1",{className:"main-title",children:"ACHIEVEMENTS"}),s.jsx("p",{className:"subtitle",children:"Complete challenges and earn awesome rewards!"})]})]}),s.jsxs("div",{className:"progress-overview",children:[s.jsx("div",{className:"card-glow",style:{"--card-color":"#FFD93D"}}),s.jsxs("div",{className:"overview-header",children:[s.jsx("span",{className:"overview-label",children:"🎮 Progress Tracker"}),s.jsxs("div",{className:"overview-stats",children:[s.jsx("span",{className:"trophy-icon",children:"🏆"}),s.jsxs("span",{className:"overview-value",children:[f,"/",g]})]})]}),s.jsx("div",{className:"progress-bar-main",children:s.jsx("div",{className:"progress-fill-main",style:{width:`${m}%`}})})]}),s.jsx("div",{className:"achievements-list",children:e.map(b=>{const j=Math.min(100,Math.round(b.current/b.target*100)),R=j===100,v=b.color+"CC";return s.jsxs("div",{className:`achievement-card ${R?"completed":""}`,style:{"--card-color":b.color,"--card-color-dark":v},children:[s.jsx("div",{className:"card-glow"}),R&&b.claimed&&s.jsx("div",{className:"completed-badge",children:"✓"}),s.jsxs("div",{className:"card-content",children:[s.jsx("div",{className:"achievement-icon",children:b.icon}),s.jsxs("div",{className:"achievement-details",children:[s.jsx("div",{className:"achievement-title",children:b.title}),s.jsx("div",{className:"achievement-subtitle",children:b.subtitle}),s.jsxs("div",{className:"progress-container",children:[s.jsx("div",{className:"progress-bar",children:s.jsx("div",{className:"progress-fill",style:{width:`${j}%`}})}),s.jsxs("div",{className:"progress-text",children:[s.jsxs("span",{children:[b.current,"/",b.target]}),s.jsxs("span",{className:"reward-badge",children:["🪙 ",b.reward]})]})]})]}),s.jsx("button",{onClick:()=>k(b.id,b.reward),disabled:!R||b.claimed,className:`claim-button ${b.claimed?"claimed":R?"can-claim":"in-progress"} ${n===b.id?"claiming":""}`,children:b.claimed?"✓":R?"CLAIM!":`${j}%`})]})]},b.id)})}),a&&s.jsx("div",{className:"celebration",children:"🎉"})]})}function Av(){const[e,t]=d.useState(5),[n,r]=d.useState(12),[i,o]=d.useState(47),[a,l]=d.useState(!1),c=new Date().getDay(),u=["S","M","T","W","T","F","S"].map((b,j)=>({label:b,hit:j<=c&&j!==0,isToday:j===c})),g=[{days:3,emoji:"⚡",label:"Starter",achieved:e>=3},{days:7,emoji:"🔥",label:"Week Warrior",achieved:e>=7},{days:30,emoji:"💎",label:"Champion",achieved:e>=30},{days:100,emoji:"👑",label:"Legend",achieved:e>=100}],f=g.find(b=>b.days>e)||g[g.length-1],m=Math.min(100,e/f.days*100);d.useEffect(()=>{e>0&&e%5===0&&(l(!0),setTimeout(()=>l(!1),2e3))},[e]);const k=()=>{typeof window<"u"&&(window.location.href="/play")};return s.jsxs("div",{className:"streaks-screen",children:[s.jsx("style",{jsx:!0,children:`
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
      `}),s.jsx("div",{className:"animated-bg"}),s.jsxs("div",{className:"header",children:[s.jsx("button",{className:"back-button",onClick:()=>window.history.back(),children:"← Back"}),s.jsxs("div",{className:"title-section",children:[s.jsx("h1",{className:"main-title",children:"STREAKS"}),s.jsx("p",{className:"subtitle",children:"Keep the fire burning!"})]})]}),s.jsxs("div",{className:"streak-hero",children:[s.jsx("div",{className:"fire-animation",children:"🔥"}),s.jsx("div",{className:"streak-number",children:e}),s.jsx("div",{className:"streak-label",children:"DAY STREAK"}),s.jsxs("div",{className:"stats-row",children:[s.jsxs("div",{className:"stat-card",children:[s.jsx("div",{className:"stat-value",children:n}),s.jsx("div",{className:"stat-label",children:"Best Streak"})]}),s.jsxs("div",{className:"stat-card",children:[s.jsx("div",{className:"stat-value",children:i}),s.jsx("div",{className:"stat-label",children:"Total Days"})]})]})]}),s.jsxs("div",{className:"calendar-card",children:[s.jsx("div",{className:"calendar-header",children:"This Week"}),s.jsx("div",{className:"week-grid",children:u.map((b,j)=>s.jsxs("div",{className:`day-box ${b.isToday?"today":b.hit?"active":"inactive"}`,children:[b.isToday&&s.jsx("div",{className:"day-icon",children:"⚡"}),b.hit&&!b.isToday&&s.jsx("div",{className:"day-icon",children:"✓"}),s.jsx("div",{children:b.label})]},j))})]}),s.jsxs("div",{className:"milestone-section",children:[s.jsx("div",{className:"milestone-header",children:"Next Milestone"}),s.jsxs("div",{className:"milestone-progress",children:[s.jsxs("div",{className:"milestone-info",children:[s.jsxs("div",{className:"milestone-current",children:[s.jsx("span",{className:"milestone-emoji",children:f.emoji}),s.jsx("span",{className:"milestone-text",children:f.label})]}),s.jsxs("span",{className:"milestone-target",children:[e,"/",f.days," days"]})]}),s.jsx("div",{className:"progress-bar-container",children:s.jsx("div",{className:"progress-bar-fill",style:{width:`${m}%`}})})]}),s.jsx("div",{className:"milestones-grid",children:g.map((b,j)=>s.jsxs("div",{className:`milestone-badge ${b.achieved?"achieved":""}`,children:[s.jsx("div",{className:"milestone-badge-emoji",children:b.emoji}),s.jsxs("div",{className:"milestone-badge-label",children:[b.days," days"]})]},j))})]}),s.jsxs("div",{className:"motivational-text",children:[`"Great job! You're `,Math.max(1,f.days-e)," days away from ",f.label,'!"']}),s.jsxs("button",{className:"play-button",onClick:k,children:[s.jsx("span",{children:"Continue Streak"}),s.jsx("span",{children:"→"})]}),a&&s.jsx("div",{className:"celebration",children:"🎉"})]})}const $v=[{id:1,title:"Play 3 quizzes today",progress:2,target:3,reward:60,claimed:!1,icon:"🎮",color:"#FF6B6B",difficulty:"Easy"},{id:2,title:"Score 8+ twice",progress:1,target:2,reward:80,claimed:!1,icon:"🎯",color:"#4ECDC4",difficulty:"Medium"},{id:3,title:"Practice 15 questions",progress:15,target:15,reward:100,claimed:!0,icon:"📚",color:"#FFD93D",difficulty:"Easy"},{id:4,title:"Win 5 in a row",progress:3,target:5,reward:150,claimed:!1,icon:"🔥",color:"#A8E6CF",difficulty:"Hard"},{id:5,title:"Complete a speed run",progress:0,target:1,reward:120,claimed:!1,icon:"⚡",color:"#C7B8FF",difficulty:"Medium"}];function Bv(){const[e,t]=d.useState($v),[n,r]=d.useState(850),[i,o]=d.useState(null),[a,l]=d.useState(0);d.useEffect(()=>{const f=e.filter(m=>m.progress>=m.target).length;l(Math.round(f/e.length*100))},[e]);const c=(f,m)=>{navigator.vibrate&&navigator.vibrate([20,10,20]),o(f),setTimeout(()=>{t(k=>k.map(b=>b.id===f?{...b,claimed:!0}:b)),r(k=>k+m),o(null)},600)},u=f=>{switch(f){case"Easy":return"#10B981";case"Medium":return"#F59E0B";case"Hard":return"#EF4444";default:return"#6B7280"}},g=()=>{const f=new Date,m=new Date(f);m.setDate(m.getDate()+1),m.setHours(5,0,0,0);const k=m-f,b=Math.floor(k/(1e3*60*60)),j=Math.floor(k%(1e3*60*60)/(1e3*60));return`${b}h ${j}m`};return s.jsxs("div",{className:"quests-screen",children:[s.jsx("style",{jsx:!0,children:`
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
      `}),s.jsxs("div",{className:"animated-bg",children:[s.jsx("div",{className:"floating-icon",children:"🎮"}),s.jsx("div",{className:"floating-icon",children:"🎯"}),s.jsx("div",{className:"floating-icon",children:"🏆"}),s.jsx("div",{className:"floating-icon",children:"⭐"})]}),s.jsxs("div",{className:"header",children:[s.jsx("button",{className:"back-button",onClick:()=>window.history.back(),children:"← Back"}),s.jsxs("div",{className:"coins-display",children:["🪙 ",n]}),s.jsxs("div",{className:"title-section",children:[s.jsx("h1",{className:"main-title",children:"Daily Quests"}),s.jsx("p",{className:"subtitle",children:"Complete challenges, earn rewards!"})]})]}),s.jsxs("div",{className:"daily-progress-card",children:[s.jsxs("div",{className:"progress-header",children:[s.jsx("span",{className:"progress-label",children:"Today's Progress"}),s.jsxs("span",{className:"progress-value",children:[a,"%"]})]}),s.jsx("div",{className:"progress-bar-container",children:s.jsx("div",{className:"progress-bar-fill",style:{width:`${a}%`}})})]}),s.jsx("div",{className:"quests-list",children:e.map(f=>{const m=Math.min(100,Math.round(f.progress/f.target*100)),k=m===100,b=f.color+"CC";return s.jsxs("div",{className:`quest-card ${k?"completed":""}`,style:{"--quest-color":f.color,"--quest-color-dark":b},children:[s.jsx("div",{className:"quest-accent"}),k&&f.claimed&&s.jsx("div",{className:"completed-checkmark",children:"✓"}),s.jsxs("div",{className:"quest-content",children:[s.jsx("div",{className:`quest-icon-container ${i===f.id?"animating":""}`,children:f.icon}),s.jsxs("div",{className:"quest-details",children:[s.jsxs("div",{className:"quest-header",children:[s.jsx("span",{className:"quest-title",children:f.title}),s.jsx("span",{className:"difficulty-badge",style:{background:`${u(f.difficulty)}20`,color:u(f.difficulty)},children:f.difficulty})]}),s.jsxs("div",{className:"progress-info",children:[s.jsx("div",{className:"mini-progress-bar",children:s.jsx("div",{className:"mini-progress-fill",style:{width:`${m}%`}})}),s.jsxs("div",{className:"progress-text",children:[s.jsxs("span",{className:"progress-numbers",children:[f.progress,"/",f.target]}),s.jsxs("span",{className:"reward-display",children:["🪙 ",f.reward]})]})]})]}),s.jsx("button",{onClick:()=>k&&!f.claimed&&c(f.id,f.reward),disabled:f.claimed,className:`action-button ${f.claimed?"claimed":k?"can-claim":"in-progress"}`,style:!k&&!f.claimed?{"--quest-color":f.color,"--quest-color-dark":b}:{},children:f.claimed?"✓":k?"Claim":"Do it"})]})]},f.id)})}),s.jsxs("div",{className:"timer-card",children:[s.jsx("div",{className:"timer-icon",children:"⏰"}),s.jsx("div",{className:"timer-label",children:"New Quests In"}),s.jsx("div",{className:"timer-value",children:g()})]}),i&&s.jsx("div",{className:"reward-animation",children:"🪙"})]})}function Uv({title:e,subtitle:t,children:n}){const r=Rt();return s.jsxs("div",{className:"min-h-full bg-black text-white px-4 pt-12",children:[s.jsxs("div",{className:"flex items-center justify-between mb-4",children:[s.jsx("button",{onClick:()=>r(-1),className:"px-3 py-1.5 rounded-xl border border-white/10 bg-white/5 text-sm",children:"← Back"}),s.jsxs("div",{className:"text-center",children:[s.jsx("div",{className:"text-base font-semibold leading-tight",children:e}),t&&s.jsx("div",{className:"text-xs text-white/60 leading-tight",children:t})]}),s.jsx("div",{className:"w-[68px]"})]}),n]})}function Wv(){const e=Rt(),[t,n]=d.useState(!0),[r,i]=d.useState(!0),[o,a]=d.useState(!0);return s.jsxs(Uv,{title:"Settings",subtitle:"Make it yours",children:[s.jsxs("div",{className:"rounded-2xl border border-white/10 bg-white/5 divide-y divide-white/10",children:[s.jsx(fs,{label:"Sound",right:s.jsx(ba,{on:t,set:n})}),s.jsx(fs,{label:"Haptics",right:s.jsx(ba,{on:r,set:i})}),s.jsx(fs,{label:"Notifications",right:s.jsx(ba,{on:o,set:a})}),s.jsx(fs,{label:"Edit Profile",right:s.jsx("span",{className:"text-white/60",children:"→"}),onClick:()=>e("/profile")}),s.jsx(fs,{label:"Privacy Policy",right:s.jsx("span",{className:"text-white/60",children:"→"}),onClick:()=>window.open("#","_blank")})]}),s.jsx("button",{className:`mt-3 w-full rounded-2xl border border-white/10 bg-white/5 py-3 text-red-300 font-semibold
                   transition-transform duration-150 active:scale-[0.99]`,onClick:()=>alert("Sign out hook here"),children:"Sign out"})]})}function fs({label:e,right:t,onClick:n}){return s.jsxs("button",{type:"button",onClick:n,className:`w-full flex items-center justify-between px-4 py-4 text-left
                 hover:bg-white/5 first:rounded-t-2xl last:rounded-b-2xl transition`,children:[s.jsx("span",{className:"text-sm font-semibold",children:e}),t]})}function ba({on:e,set:t}){return s.jsx("span",{onClick:n=>{n.stopPropagation(),t(r=>!r),navigator.vibrate&&navigator.vibrate(10)},className:["inline-flex w-11 h-6 items-center rounded-full border transition px-0.5",e?"bg-lime-400 border-lime-400 justify-end":"bg-white/10 border-white/10 justify-start"].join(" "),role:"switch","aria-checked":e,children:s.jsx("span",{className:["w-5 h-5 rounded-full bg-white",e?"":"bg-white"].join(" ")})})}function qv(){return s.jsx(Hx,{children:s.jsxs(Je,{element:s.jsx(Cg,{}),children:[s.jsx(Je,{path:"/",element:s.jsx(rd,{})}),s.jsx(Je,{path:"/play",element:s.jsx(Yg,{})}),s.jsx(Je,{path:"/play/party",element:s.jsx(fv,{})}),s.jsx(Je,{path:"/profile",element:s.jsx(pv,{})}),s.jsx(Je,{path:"/profile/leaderboard",element:s.jsx(mv,{})}),s.jsx(Je,{path:"/profile/history",element:s.jsx(bv,{})}),s.jsx(Je,{path:"/profile/rewards",element:s.jsx(Fv,{})}),s.jsx(Je,{path:"/profile/badges",element:s.jsx(Mv,{})}),s.jsx(Je,{path:"/profile/achievements",element:s.jsx(Ov,{})}),s.jsx(Je,{path:"/profile/streaks",element:s.jsx(Av,{})}),s.jsx(Je,{path:"/profile/quests",element:s.jsx(Bv,{})}),s.jsx(Je,{path:"/profile/settings",element:s.jsx(Wv,{})}),s.jsx(Je,{path:"/leaders",element:s.jsx(Ux,{to:"/profile/leaderboard",replace:!0})}),s.jsx(Je,{path:"/quiz/:category/start",element:s.jsx(ev,{})}),s.jsx(Je,{path:"*",element:s.jsx(rd,{})})]})})}wa.createRoot(document.getElementById("root")).render(s.jsx(xt.StrictMode,{children:s.jsx(hg,{children:s.jsx(qv,{})})}));export{km as c,kd as g};
